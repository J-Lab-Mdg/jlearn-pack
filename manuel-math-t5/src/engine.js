// Moteur de mise en page — Manuel Mathématiques T5 (standard V3 final, 12 pt)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun,
  HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType
} = require('docx');
const { pngSize } = require('./figlib');

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', bleu2: '1565C0', pale: 'EAF2F8', paleGreen: 'E8F5E9', paleBlue: 'E3F2FD', yellow: 'FFF8E1', gray: 'E7E6E6', black: '000000', white: 'FFFFFF' };
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };
const gb = { style: BorderStyle.SINGLE, size: 4, color: '808080' };
const ib = { style: BorderStyle.SINGLE, size: 4, color: 'B0B0B0' };
const borders = { top: gb, bottom: gb, left: gb, right: gb, insideHorizontal: ib, insideVertical: ib };

const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics, underline: opt.underline ? { type: 'single' } : undefined });
// Fractions numériques a/b -> OMML natif Word
const rich = (text, opt = {}) => {
  const out = []; let last = 0; const re = /(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(tr(text.slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1].trim())], denominator: [new MathRun(m[2].trim())] })] }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(tr(text.slice(last), opt));
  return out.length ? out : [tr(text, opt)];
};
const p = (text, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.JUSTIFIED, spacing: { after: opt.after ?? 110, line: 300 }, indent: opt.indent ? { left: opt.indent } : undefined, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: rich(text, opt) });
const example = text => new Paragraph({ alignment: AlignmentType.JUSTIFIED, spacing: { before: 100, after: 130, line: 300 }, children: rich(text, { italics: true, underline: true, bold: false }) });
const title = (text, level = 1, bookmark) => {
  const run = tr(text, { bold: true, color: level === 1 ? C.red : C.green, size: level === 1 ? 32 : 28 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 200, after: 150 }, children });
};
const cell = (text, opt = {}) => new TableCell({
  width: opt.width ? { size: opt.width, type: WidthType.PERCENTAGE } : undefined, columnSpan: opt.span, rowSpan: opt.rowSpan,
  shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, margins: { top: 80, bottom: 80, left: 80, right: 80 },
  children: (Array.isArray(text) ? text : [text]).map(t => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: 40 }, children: rich(t, { bold: opt.bold, color: opt.color || C.black, size: opt.size || 20 }) }))
});
const table = (rows, columnWidths, opt = {}) => new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: opt.noBorders ? noBorders : borders, rows, columnWidths });
const bullet = text => new Paragraph({ bullet: { level: 0 }, spacing: { after: 80 }, children: rich(text) });
const correction = (label, text) => new Paragraph({ spacing: { after: 80 }, children: [tr(label, { bold: true, color: C.wine }), ...rich(text)] });
const page = () => new Paragraph({ children: [new PageBreak()] });
const img = (buf, widthPx = 500) => {
  const { w, h } = pngSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'png', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

function firstSentences(text, maxLen) {
  const parts = text.split('. '); let out = '';
  for (const s of parts) {
    const cand = out ? out + '. ' + s : s;
    if (cand.length > maxLen && out) break;
    out = cand;
    if (out.length > maxLen) break;
  }
  if (!/[.!?]$/.test(out)) out += '.';
  return out;
}
function seance(s, i, uNo, figBufs) {
  const a = [];
  const short = (text, max = 360) => firstSentences(String(text || ''), max);
  a.push(page());
  a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 80 }, children: [tr('MATHÉMATIQUES — T5', { bold: true, color: C.gray, size: 22 })] }));
  a.push(title(s.t.toUpperCase(), 1, `u${uNo}_l${i}`));

  // Comme dans le prototype : une notion descriptive, sans étiquette pédagogique générique.
  a.push(title(s.theme || s.t, 2));
  a.push(p(short(s.def, 360)));
  if (s.autrement) a.push(p(short(s.autrement, 220), { color: C.blue, italics: true }));
  if (s.fig && figBufs[s.fig]) a.push(img(figBufs[s.fig]));

  // L’exemple est une phrase de la fiche, pas un sous-titre.
  if (s.exemple) a.push(example(short(s.exemple, 420)));
  // Les étapes restent lisibles mais ne sont pas précédées du mot « Méthode ».
  if (s.method && s.method.length) {
    s.method.slice(0, 4).forEach((m, k) => a.push(p(`${k + 1}. ${short(m, 230)}`, { after: 55, indent: 260 })));
  }
  // La règle est mise en évidence sans créer un intertitre obligatoire.
  a.push(p(short(s.synthese || s.def, 300), { fill: C.paleGreen, bold: true }));
  if (s.saistu) a.push(p(`Le savais-tu ? ${short(s.saistu, 210)}`, { fill: C.paleBlue, color: C.blue }));
  if (s.erreur) a.push(p(`Attention : ${short(s.erreur, 230)}`, { fill: C.yellow }));

  a.push(title('EXERCICE', 2));
  s.exos.forEach((e, k) => a.push(p(`${k + 1}. ${e}`)));
  if (s.petitProbleme) {
    a.push(title('Petit problème', 2));
    a.push(p(s.petitProbleme.question));
  }
  a.push(title('Correction', 2));
  s.corr.forEach((c, k) => a.push(correction(`${k + 1}. `, c)));
  if (s.petitProbleme) a.push(correction('Petit problème. ', s.petitProbleme.correction));
  return a;
}

function revision(u) {
  const total = u.sessions.length + 2, i = u.sessions.length + 1;
  return [page(), title(`RÉVISION DE L’UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
    title('Tableau de synthèse', 2),
    table([
      new TableRow({ children: [cell('Notion', { bold: true, fill: C.blue, color: C.white }), cell('À savoir', { bold: true, fill: C.blue, color: C.white }), cell('À savoir faire', { bold: true, fill: C.blue, color: C.white })] }),
      ...u.revision.table.map(r => new TableRow({ children: r.map(x => cell(x)) }))
    ], [2500, 3500, 3600]),
    title('Questions de révision', 2),
    ...u.revision.questions.map((q, k) => p(`${k + 1}. ${q}`, { after: 60 })),
    title('Réponses attendues', 2),
    ...u.revision.answers.map((an, k) => correction(`${k + 1}. `, an))];
}

function exam(u) {
  const total = u.sessions.length + 2, i = total;
  const pts = [4, 4, 4, 4, 4];
  return [page(), title(`SUJET D’EXAMEN FORMAT CEPE — UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
    p('Barème : 20 points. Présente clairement tous les calculs et toutes les constructions.'),
    ...u.exam.exos.map((e, k) => p(`Exercice ${k + 1} — ${pts[k]} points. ${e}`)),
    title('CORRIGÉ ET BARÈME', 2),
    ...u.exam.corr.map((c, k) => correction(`Exercice ${k + 1}. `, c))];
}

function frontMatter(u) {
  const ch = [];
  const coverPath = path.join(__dirname, '..', 'assets', 'cover_math_t5.png');
  if (fs.existsSync(coverPath)) {
    const buf = fs.readFileSync(coverPath);
    ch.push(new Paragraph({
      children: [new ImageRun({
        type: 'png', data: buf, transformation: { width: 794, height: 1123 },
        floating: {
          horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
          verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
          wrap: { type: TextWrappingType.NONE }, behindDocument: true
        }
      })]
    }));
    ch.push(page());
  }
  ch.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T5', 1, 'cover'),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 250, after: 200 }, children: [tr('Collection J-Learn', { bold: true, size: 36, color: C.blue })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Programme officiel malgache — Édition 2026', { size: 26 })] }),
    page(),
    title('AVANT-PROPOS', 1, 'avant'),
    p('Ce manuel présente les six composantes des Mathématiques T5 : Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données. Il suit le programme malgache et prépare progressivement aux questions du CEPE par des exemples courts, des tableaux, des schémas et des exercices variés.'),
    p('Chaque leçon est une fiche directement lisible par l’élève : une notion, une méthode, un ou deux exemples, une règle courte, des exercices et une correction. Les situations utilisent des repères familiers de Madagascar — prix en ariary, riz, récoltes, distances, classes et transport — sans alourdir l’explication.'),
    title('MODE D’EMPLOI', 1, 'mode'),
    p('Lis le titre et l’exemple. Observe le tableau ou le schéma. Applique la règle dans les exercices, puis vérifie avec la correction. Les unités de révision et les sujets d’examen reprennent les formes rencontrées au CEPE.'),
    p('Code couleur : titre de leçon en rouge ; sous-titres en bleu ; règle en vert ; exemple et correction clairement séparés. Les illustrations servent à comprendre le calcul ou la notion : elles ne remplacent pas la leçon.'),
    title('SOMMAIRE INTERACTIF', 1, 'toc'),
    new Paragraph({ children: [new InternalHyperlink({ anchor: 'u1', children: [tr('Unité I — Nombre', { bold: true, color: C.blue })] })] }));
  u.sessions.forEach((s, i) => ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${i + 1}`, children: [tr(`Leçon ${i + 1} — ${s.t}`, { color: C.blue })] })] })));
  const total = u.sessions.length + 2;
  ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total - 1}`, children: [tr('Révision de l’unité I', { color: C.blue })] })] }),
    new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total}`, children: [tr('Sujet d’examen', { color: C.blue })] })] }));
  return ch;
}

async function buildUnit(u, figBufs) {
  const total = u.sessions.length + 2;
  const children = [];
  if (u.no === 1) children.push(...frontMatter(u));
  children.push(page(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2200, after: 200 }, children: [tr(`UNITÉ ${u.roman}`, { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, shading: { type: ShadingType.CLEAR, fill: C.pale }, children: [new Bookmark({ id: `u${u.no}`, children: [tr(u.name.toUpperCase(), { bold: true, color: C.red, size: 56 })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [tr('Sous-discipline du programme de Mathématiques T5', { italics: true, color: C.green, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [tr('Résultat d’apprentissage général', { bold: true, color: C.wine, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: rich(u.rag, { size: 24 }) }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [tr('Valeurs à véhiculer', { bold: true, color: C.wine, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: rich(`${u.valeurs}.`, { size: 24 }) }),
    page(),
    title(`UNITÉ ${u.roman} — ${u.name.toUpperCase()} : DANS CETTE UNITÉ`, 1),
    ...u.sessions.map((s, i) => bullet(`Leçon ${i + 1} — ${s.t}`)),
    bullet(`Révision de l’unité ${u.roman}`),
    bullet('Sujet d’examen format CEPE'),
    title('Tableau de bord', 2),
    table([
      new TableRow({ children: [cell('Leçons', { bold: true, fill: C.blue, color: C.white }), cell('Apprentissages', { bold: true, fill: C.blue, color: C.white }), cell('Révision', { bold: true, fill: C.blue, color: C.white }), cell('Examen', { bold: true, fill: C.blue, color: C.white })] }),
      new TableRow({ children: [cell(`${total}`), cell(`${u.sessions.length}`), cell('1'), cell('1')] })
    ], [2400, 2400, 2400, 2400]));
  u.sessions.forEach((s, i) => children.push(...seance(s, i + 1, u.no, figBufs)));
  children.push(...revision(u), ...exam(u));

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr(`J-Learn — Mathématiques T5 — Unité ${u.roman}`, { size: 18, color: '666666' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18 })] })] }) },
      children
    }]
  });
  const out = path.join(__dirname, '..', `Manuel_Mathematiques_T5_UNITE${u.no}.docx`);
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(out, buf);
  console.log(`${out}: ${buf.length} octets`);
}

module.exports = { buildUnit };
