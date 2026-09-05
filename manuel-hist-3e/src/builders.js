// Builders docx — Manuel Histoire 3e J-Learn (Traitement C)
const fs = require("fs");
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, BorderStyle,
  AlignmentType, VerticalAlign, ShadingType, PageBreak, Bookmark, InternalHyperlink,
  ImageRun, HeadingLevel, TableLayoutType,
} = require("docx");

const C = {
  rouge: "C00000", vert: "1E7B34", bleu: "1F4E79", noir: "000000",
  corrige: "E9704F", // rose saumon validé par l'utilisateur
  enteteFiche: "DDEEFF", sousEntete: "F5F5F5", section: "E8F1E4",
};
const FONT = "Times New Roman";

// ---------- texte enrichi : **mot** → gras + couleur ----------
function runs(text, { size = 22, color = C.noir, keyColor = null, bold = false, italic = false } = {}) {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g).filter(Boolean);
  return parts.map((part) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) return new TextRun({ text: m[1], bold: true, color: keyColor || color, size, italics: italic, font: FONT });
    return new TextRun({ text: part, bold, color, size, italics: italic, font: FONT });
  });
}

function p(text, opts = {}) {
  const { align = AlignmentType.LEFT, spacingAfter = 80, spacingBefore = 0, indent = null, keepNext = false } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line: 276 },
    indent: indent ? { left: indent } : undefined,
    keepNext,
    children: runs(text, opts),
  });
}

function empty(after = 60) { return new Paragraph({ spacing: { after }, children: [new TextRun({ text: "", font: FONT })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

// Titre avec signet (pour le sommaire interactif)
function titled(text, { anchor = null, size = 28, color = C.noir, align = AlignmentType.CENTER, bold = true, spacingAfter = 160, spacingBefore = 0, heading = null } = {}) {
  const run = new TextRun({ text, bold, color, size, font: FONT });
  return new Paragraph({
    alignment: align,
    heading: heading || undefined,
    spacing: { after: spacingAfter, before: spacingBefore },
    children: anchor ? [new Bookmark({ id: anchor, children: [run] })] : [run],
  });
}

function tocLink(label, anchor, { indent = 0, size = 22 } = {}) {
  return new Paragraph({
    spacing: { after: 40 },
    indent: { left: indent },
    children: [new InternalHyperlink({ anchor, children: [new TextRun({ text: label, style: "Hyperlink", size, font: FONT })] })],
  });
}

// ---------- cellules / tables ----------
function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  return { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };
}
function thinBorders() {
  const b = { style: BorderStyle.SINGLE, size: 4, color: "808080" };
  return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b };
}

function cell(children, { width = null, shading = null, colSpan = 1, rowSpan = 1, vAlign = VerticalAlign.TOP, margins = 60 } = {}) {
  return new TableCell({
    children: children.length ? children : [empty(0)],
    width: width ? { size: width, type: WidthType.DXA } : undefined,
    shading: shading ? { type: ShadingType.CLEAR, fill: shading, color: "auto" } : undefined,
    columnSpan: colSpan > 1 ? colSpan : undefined,
    rowSpan: rowSpan > 1 ? rowSpan : undefined,
    verticalAlign: vAlign,
    margins: { top: margins, bottom: margins, left: margins, right: margins },
  });
}

// Méta-table à bordures invisibles
function metaTable(meta) {
  const L = (label, val) => p(`**${label}** ${val}`, { size: 20, keyColor: C.noir, spacingAfter: 40 });
  const left = [
    L("Discipline :", meta.discipline),
    L("Thème :", meta.theme),
    L("Titre :", meta.titre),
    L("Objectif spécifique :", `Être capable ${de(meta.objectif)}`),
    L("Documentation :", meta.documentation),
    L("Support et matériel :", meta.support),
  ];
  const right = [
    L("Date :", "________________"),
    L("Classe :", meta.classe),
    L("Séance n° :", meta.seance),
    L("Durée :", meta.duree),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: noBorders(),
    rows: [new TableRow({ children: [cell(left, { width: 6600 }), cell(right, { width: 3000 })] })],
  });
}

// Table de déroulement — 6 colonnes, 2 lignes d'en-tête
const COLW = [1150, 3250, 2250, 1100, 1050, 800]; // total 9600 dxa = largeur utile A4 (marges 2 cm)
function hdr(text, opts = {}) { return p(`**${text}**`, { size: 18, keyColor: C.noir, align: AlignmentType.CENTER, spacingAfter: 0, ...opts }); }

function deroulementHeader() {
  const row1 = new TableRow({ tableHeader: true, children: [
    cell([hdr("Étapes et Durée")], { width: COLW[0], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Déroulement de la leçon")], { width: COLW[1] + COLW[2], shading: C.enteteFiche, colSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Technique et Stratégie")], { width: COLW[3], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Support et Matériel")], { width: COLW[4], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
    cell([hdr("Observation")], { width: COLW[5], shading: C.enteteFiche, rowSpan: 2, vAlign: VerticalAlign.CENTER }),
  ]});
  const row2 = new TableRow({ tableHeader: true, children: [
    cell([hdr("Enseignant")], { width: COLW[1], shading: C.sousEntete }),
    cell([hdr("Apprenants")], { width: COLW[2], shading: C.sousEntete }),
  ]});
  return [row1, row2];
}

function sectionRow(label) {
  return new TableRow({ children: [cell([p(`**${label}**`, { size: 19, keyColor: C.noir, spacingAfter: 0 })], { colSpan: 6, shading: C.section })] });
}

// Petit tableau imbriqué dans une cellule (document à recopier au tableau noir)
function miniTable(header, rows, totalWidth = 3200) {
  const n = header.length, w = Array(n).fill(Math.floor(totalWidth / n));
  const mk = (txt, bold, shade) => cell([p(bold ? `**${txt}**` : txt, { size: 16, keyColor: C.noir, spacingAfter: 0 })], { width: w[0], shading: shade, margins: 30 });
  return new Table({
    width: { size: totalWidth, type: WidthType.DXA }, columnWidths: w, layout: TableLayoutType.FIXED, borders: thinBorders(),
    rows: [new TableRow({ children: header.map((h) => mk(h, true, C.sousEntete)) }), ...rows.map((r) => new TableRow({ children: r.map((v) => mk(String(v), false, null)) }))],
  });
}

// Convertit des lignes "| a | b |" consécutives en tableau imbriqué
function cp(lines, opts = {}) {
  const out = []; let buf = [];
  const flush = () => { if (buf.length) { const [h, ...r] = buf; out.push(miniTable(h, r)); out.push(empty(20)); buf = []; } };
  lines.filter((l) => l !== null && l !== undefined && l !== "").forEach((l) => {
    if (typeof l === "string" && /^\|.*\|$/.test(l.trim())) { buf.push(l.trim().slice(1, -1).split("|").map((x) => x.trim())); return; }
    flush(); out.push(p(l, { size: 18, spacingAfter: 50, ...opts }));
  });
  flush(); return out;
}

function stepRow({ etape, duree = null, enseignant = [], apprenants = [], technique = "", support = "", observation = [] }) {
  const et = [p(`**${etape}**`, { size: 18, keyColor: C.noir, spacingAfter: 20 })];
  if (duree) et.push(p(duree, { size: 18, spacingAfter: 0 }));
  return new TableRow({ cantSplit: false, children: [
    cell(et, { width: COLW[0] }),
    cell(cp(enseignant), { width: COLW[1] }),
    cell(cp(apprenants, { keyColor: C.corrige }), { width: COLW[2] }),
    cell(cp([technique]), { width: COLW[3] }),
    cell(cp([support]), { width: COLW[4] }),
    cell(cp(observation, { italic: true }), { width: COLW[5] }),
  ]});
}

function deroulementTable(rows) {
  return new Table({
    width: { size: 9600, type: WidthType.DXA },
    columnWidths: COLW,
    layout: TableLayoutType.FIXED,
    borders: thinBorders(),
    rows: [...deroulementHeader(), ...rows],
  });
}

// ---------- exercices ----------
const de = (s) => (/^[aeiouyhéèêàâîô]/i.test(s.trim()) ? `d'${s.trim()}` : `de ${s.trim()}`);
// exo = { consigne, items:[...], corrige:[...] (avec **mots-clés**), pts }
function exoEnonceLines(exo, num, { withPts = false } = {}) {
  const head = `**Exercice ${num}** — ${exo.consigne}${withPts && exo.pts ? ` (${exo.pts} pts)` : ""}`;
  const lines = [head];
  if (exo.intro) lines.push(exo.intro);
  exo.items.forEach((it) => lines.push(it));
  return lines;
}
function exoCorrigeLines(exo, num) {
  return [`**Corrigé ${num} :**`, ...exo.corrige];
}

function exercicesSection(exos, { anchor = null } = {}) {
  const out = [titled("EXERCICES", { anchor, size: 26, color: C.rouge, align: AlignmentType.LEFT, spacingBefore: 200 })];
  const total = exos.reduce((s, e) => s + (e.pts || 0), 0);
  out.push(p(`Exercices notés selon un barème — total : **${total} points**.`, { size: 20, keyColor: C.noir, italic: true }));
  exos.forEach((e, i) => {
    out.push(p(`**Exercice ${i + 1}** — ${e.consigne} (${e.pts} pts)`, { size: 22, keyColor: C.noir, spacingBefore: 120, keepNext: true }));
    if (e.intro) out.push(p(e.intro, { size: 22 }));
    e.items.forEach((it) => out.push(p(it, { size: 22, indent: 360, spacingAfter: 40 })));
  });
  out.push(p("**CORRIGÉ**", { size: 24, keyColor: C.corrige, spacingBefore: 240 }));
  exos.forEach((e, i) => {
    out.push(p(`**Corrigé de l'exercice ${i + 1}** (${e.pts} pts)`, { size: 22, keyColor: C.noir, spacingBefore: 100, keepNext: true }));
    e.corrige.forEach((l) => out.push(p(l, { size: 22, keyColor: C.corrige, indent: 360, spacingAfter: 40 })));
  });
  return out;
}

// ---------- leçon ----------
function leconTitre(text, anchor = null) { return titled(text, { anchor, size: 30, color: C.rouge, align: AlignmentType.LEFT, spacingAfter: 120 }); }
function leconSousTitre(text) { return titled(text, { size: 24, color: C.vert, align: AlignmentType.LEFT, spacingAfter: 80, spacingBefore: 160 }); }
function leconSousSous(text) { return p(`**${text}**`, { size: 22, keyColor: C.noir, spacingBefore: 80, keepNext: true }); }
function leconPara(text) { return p(text, { size: 22, keyColor: C.bleu, align: AlignmentType.JUSTIFIED, spacingAfter: 100 }); }
function leconPuce(text) { return p(`• ${text}`, { size: 22, keyColor: C.bleu, indent: 360, spacingAfter: 40 }); }

// Tableau de données simple (document à recopier au tableau) — header + lignes
function dataTable(header, rows, { widths = null, size = 19, source = null } = {}) {
  const n = header.length;
  const w = widths || Array(n).fill(Math.floor(9600 / n));
  const mk = (txt, bold, shade) => cell([p(bold ? `**${txt}**` : txt, { size, keyColor: C.noir, spacingAfter: 0 })], { width: w[0], shading: shade });
  const tr = new TableRow({ tableHeader: true, children: header.map((h, i) => cell([p(`**${h}**`, { size, keyColor: C.noir, spacingAfter: 0, align: AlignmentType.CENTER })], { width: w[i], shading: C.enteteFiche })) });
  const body = rows.map((r) => new TableRow({ children: r.map((v, i) => cell([p(String(v), { size, keyColor: C.bleu, spacingAfter: 0 })], { width: w[i] })) }));
  const out = [new Table({ width: { size: w.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: w, layout: TableLayoutType.FIXED, borders: thinBorders(), rows: [tr, ...body] })];
  if (source) out.push(p(`Source : ${source}`, { size: 18, italic: true, spacingAfter: 120 }));
  return out;
}

// Dimensions d'une image (PNG ou JPEG) lues dans l'en-tête, sans dépendance
function imageSize(buf) {
  if (buf.readUInt32BE(0) === 0x89504e47) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20), type: "png" };
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xff) { i++; continue; }
    const marker = buf[i + 1];
    if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7), type: "jpg" };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  throw new Error("format d'image inconnu");
}

function imageRun(file, widthCm, heightCm = null) {
  const buf = fs.readFileSync(file);
  const { w, h, type } = imageSize(buf);
  const hcm = heightCm || (widthCm * h / w);
  const px = (cm) => Math.round(cm * 37.8);
  return new ImageRun({ type, data: buf, transformation: { width: px(widthCm), height: px(hcm) } });
}

function figure(file, legende, { widthCm = 15, heightCm = null, source = null } = {}) {
  if (!fs.existsSync(file)) return [p(`[Illustration à insérer : ${legende}]`, { italic: true })];
  return [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 40 }, keepNext: true, children: [imageRun(file, widthCm, heightCm)] }),
    p(`${legende}${source ? ` — Source : ${source}` : ""}`, { size: 18, italic: true, align: AlignmentType.CENTER, spacingAfter: 160 }),
  ];
}

// Photo d'archives (portrait) à gauche, texte de présentation à droite — tableau sans bordures
function photoTexte(file, { legende, source = null, texte = [], widthCm = 6 }) {
  if (!fs.existsSync(file)) return [p(`[Photo à insérer : ${legende}]`, { italic: true })];
  const wImg = Math.round((widthCm + 0.6) * 567), wTxt = 9638 - wImg;
  const left = cell([
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 40 }, children: [imageRun(file, widthCm)] }),
    p(`${legende}${source ? ` — Source : ${source}` : ""}`, { size: 16, italic: true, align: AlignmentType.CENTER, spacingAfter: 0 }),
  ], { width: wImg, margins: 40 });
  const right = cell(texte.map((t) => p(t, { size: 22, keyColor: C.bleu, align: AlignmentType.JUSTIFIED, spacingAfter: 80 })), { width: wTxt, margins: 80, vAlign: VerticalAlign.CENTER });
  return [
    new Table({ width: { size: 9638, type: WidthType.DXA }, columnWidths: [wImg, wTxt], layout: TableLayoutType.FIXED, borders: noBorders(), rows: [new TableRow({ cantSplit: true, children: [left, right] })] }),
    empty(80),
  ];
}

module.exports = { de, miniTable, C, FONT, runs, p, empty, pageBreak, titled, tocLink, metaTable, deroulementTable, sectionRow, stepRow, exoEnonceLines, exoCorrigeLines, exercicesSection, leconTitre, leconSousTitre, leconSousSous, leconPara, leconPuce, dataTable, figure, photoTexte, cell, noBorders, thinBorders, AlignmentType };
