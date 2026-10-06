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

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', bleu2: '1565C0', pale: 'EAF2F8', paleGreen: 'E8F5E9', paleBlue: 'E3F2FD', gray: 'E7E6E6', black: '000000', white: 'FFFFFF' };
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };
const gb = { style: BorderStyle.SINGLE, size: 4, color: '808080' };
const ib = { style: BorderStyle.SINGLE, size: 4, color: 'B0B0B0' };
const borders = { top: gb, bottom: gb, left: gb, right: gb, insideHorizontal: ib, insideVertical: ib };

const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics });
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
const mixed = (parts, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.JUSTIFIED, spacing: { after: opt.after ?? 110, line: 300 }, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: parts.flatMap(([t, o]) => rich(t, o)) });
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
const metaCell = lines => new TableCell({
  margins: { top: 80, bottom: 80, left: 80, right: 80 },
  children: lines.map(([label, val]) => new Paragraph({ spacing: { after: 60 }, children: [tr(label, { bold: true, size: 22 }), ...rich(val, { size: 22 })] }))
});
const table = (rows, columnWidths, opt = {}) => new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: opt.noBorders ? noBorders : borders, rows, columnWidths });
const bullet = text => new Paragraph({ bullet: { level: 0 }, spacing: { after: 80 }, children: rich(text) });
const correction = (label, text) => new Paragraph({ spacing: { after: 80 }, children: [tr(label, { bold: true, color: C.wine }), ...rich(text)] });
const page = () => new Paragraph({ children: [new PageBreak()] });
const img = (buf, widthPx = 500) => {
  const { w, h } = pngSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'png', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

function jpgSize(buf) {
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return { w: 1376, h: 768 };
}
const imgJpg = (buf, widthPx = 430) => {
  const { w, h } = jpgSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'jpg', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

function metaTable(s, i, total) {
  return table([new TableRow({
    children: [
      metaCell([
        ['Discipline : ', 'Mathématiques'],
        ['Composante : ', s.comp],
        ['Thème : ', s.theme],
        ['Titre : ', s.t],
        ['Objectif spécifique : ', `À la fin de la séance, l’apprenant est capable de ${s.goal}.`],
        ['Documentation : ', 'Programme d’études T5 (MEN) ; sujets d’examen CEPE ; manuel J-Learn Math T5'],
        ['Support et matériel : ', s.mat]
      ]),
      metaCell([
        ['Date : ', '_______________'],
        ['Classe : ', 'T5'],
        ['Séance n° : ', `${i} / ${total}`]
      ])
    ]
  })], [6700, 2900], { noBorders: true });
}

function deroulement(s) {
  const hdr = new TableRow({
    children: [cell('Étapes', { bold: true, fill: C.pale }), cell('Déroulement de la leçon', { bold: true, fill: C.pale, span: 2, align: AlignmentType.CENTER }), cell('Technique et stratégie', { bold: true, fill: C.pale }), cell('Support et matériel', { bold: true, fill: C.pale }), cell('Observation', { bold: true, fill: C.pale })]
  });
  const sub = new TableRow({
    children: [cell(''), cell('Enseignant', { bold: true, align: AlignmentType.CENTER }), cell('Apprenants', { bold: true, align: AlignmentType.CENTER }), cell(''), cell(''), cell('')]
  });
  const r = (etape, ens, app, tech, supp, obs) => new TableRow({ children: [cell(etape, { bold: true }), cell(ens), cell(app), cell(tech), cell(supp), cell(obs)] });
  return table([
    hdr, sub,
    r('I. Révision', s.revQ, `R.A. : ${s.revRA}`, 'Questions-réponses', 'Tableau, ardoises', 'Acquis à consolider'),
    r('II. NOUVELLE LEÇON', `Annonce : « Aujourd’hui, nous allons apprendre à ${s.goal}. »`, 'Écoutent.', 'Présentation guidée', 'Tableau', ''),
    r('1. Mise en situation', s.situation, 'Écoutent, observent et proposent des réponses.', 'Situation-problème', 'Illustration, tableau', 'Participation'),
    r('2. Présentation', `Présente le titre « ${s.t} » et l’objectif de la séance.`, 'Écoutent.', 'Explication brève', 'Tableau', ''),
    r('3. Observation', s.exemple, 'Observent l’exemple résolu.', 'Observation dirigée', 'Figure imprimée', 'Compréhension'),
    r('4. Analyse', `Guide l’analyse : ${s.concept}`, 'Expliquent la démarche et vérifient le résultat.', 'Recherche en binômes', 'Ardoises, instruments', 'Raisonnement'),
    r('5. Synthèse', `Donc, ${s.synthese}`, 'Écoutent et reformulent la règle.', 'Synthèse guidée', 'Cahier, tableau', 'Trace écrite'),
    r('6. Application', `${s.exos[0]} ${s.exos[1]}`, `${s.corr[0]} ${s.corr[1]}`, 'Travail individuel puis correction collective', 'Cahier, ardoises', 'Remédiation'),
    r('III. Évaluation', `Résous sans modèle : ${s.exos[0]} Puis justifie l’une de tes réponses.`, `${s.corr[0]} La justification s’appuie sur la règle de la leçon.`, 'Travail individuel', 'Feuille, cahier', 'Maîtrise de l’objectif')
  ], [1300, 2200, 2000, 1500, 1400, 1200]);
}

function seance(s, i, total, uNo, figBufs) {
  const a = [];
  a.push(page());
  a.push(title(`SÉANCE ${i} / ${total} — ${s.t.toUpperCase()}`, 1, `u${uNo}_l${i}`));
  a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [tr('FICHE DE PRÉPARATION', { bold: true, size: 30 })] }));
  a.push(metaTable(s, i, total));
  a.push(new Paragraph({ spacing: { after: 60 }, children: [] }));
  a.push(deroulement(s));
  a.push(page());
  a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 160, after: 160 }, children: [tr(s.t.toUpperCase(), { bold: true, color: C.red, size: 32 })] }));
  const scPath = path.join(__dirname, '..', 'assets', 'scenes', `u${uNo}s${i}.jpg`);
  if (fs.existsSync(scPath)) a.push(imgJpg(fs.readFileSync(scPath), 430));
  a.push(mixed([['Définition — ', { bold: true, color: C.green }], [s.def, { bold: true }]]));
  a.push(mixed([['Autrement dit : ', { bold: true, color: C.blue }], [s.autrement, {}]]));
  a.push(p(s.concept));
  if (s.fig && figBufs[s.fig]) a.push(img(figBufs[s.fig]));
  a.push(title('Méthode', 2));
  s.method.forEach((m, k) => a.push(p(`${k + 1}. ${m}`, { after: 60 })));
  a.push(mixed([['Exemple — ', { bold: true, color: C.blue }], [s.exemple, {}]]));
  a.push(mixed([['Erreur à éviter — ', { bold: true, color: C.ocre }], [s.erreur, {}]]));
  a.push(mixed([['Le savais-tu ? ', { bold: true, color: C.bleu2 }], [s.saistu, {}]], { fill: C.paleBlue }));
  a.push(title('EXERCICES', 2));
  s.exos.forEach((e, k) => a.push(p(`${k + 1}. ${e}`)));
  a.push(title('CORRIGÉS', 2));
  s.corr.forEach((c, k) => a.push(correction(`${k + 1}. `, c)));
  return a;
}

function revision(u) {
  const total = u.sessions.length + 2, i = u.sessions.length + 1;
  return [page(), title(`SÉANCE ${i} / ${total} — RÉVISION DE L’UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
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
  return [page(), title(`SÉANCE ${i} / ${total} — SUJET D’EXAMEN FORMAT CEPE — UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
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
    p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques de la classe de T5 (cinquième année du primaire). Il couvre les six composantes de la discipline en six unités : Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données, à raison de 6 heures par semaine réparties en 12 séances de 30 minutes. Conformément au programme, il privilégie une approche progressive qui part de la manipulation d’objets concrets (bâtonnets, jetons, bandes de fractions, grilles) pour aboutir aux écritures mathématiques, et place la résolution de problèmes au centre des apprentissages, en préparation directe de l’examen du CEPE.'),
    p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée avec définition rigoureuse et reformulation simple, une figure exacte, des exercices et un corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur et la confiance en soi, valeurs portées par le programme.'),
    title('MODE D’EMPLOI', 1, 'mode'),
    p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. Aucune durée chiffrée n’est affichée : l’enseignant adapte le rythme à sa classe (volume officiel : 6 heures par semaine, soit 12 séances de 30 minutes).'),
    p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; « Définition » en vert et « Autrement dit » en bleu ; « Erreur à éviter » en ocre ; corrigés en bordeaux ; encadré « Le savais-tu ? » sur fond bleu clair.'),
    title('SOMMAIRE INTERACTIF', 1, 'toc'),
    new Paragraph({ children: [new InternalHyperlink({ anchor: 'u1', children: [tr('Unité I — Nombre', { bold: true, color: C.blue })] })] }));
  u.sessions.forEach((s, i) => ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${i + 1}`, children: [tr(`Séance ${i + 1} — ${s.t}`, { color: C.blue })] })] })));
  const total = u.sessions.length + 2;
  ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total - 1}`, children: [tr(`Séance ${total - 1} — Révision de l’unité I`, { color: C.blue })] })] }),
    new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total}`, children: [tr(`Séance ${total} — Sujet d’examen`, { color: C.blue })] })] }));
  return ch;
}

async function buildUnit(u, figBufs) {
  const total = u.sessions.length + 2;
  const children = [];
  if (u.no === 1) children.push(...frontMatter(u));
  children.push(page(), title(`UNITÉ ${u.roman} — ${u.name.toUpperCase()}`, 1, `u${u.no}`),
    p(`Résultat d’apprentissage général : ${u.rag}`),
    p(`Valeurs à véhiculer : ${u.valeurs}.`),
    title('Tableau de bord', 2),
    table([
      new TableRow({ children: [cell('Séances', { bold: true, fill: C.blue, color: C.white }), cell('Apprentissages', { bold: true, fill: C.blue, color: C.white }), cell('Révision', { bold: true, fill: C.blue, color: C.white }), cell('Examen', { bold: true, fill: C.blue, color: C.white })] }),
      new TableRow({ children: [cell(`${total}`), cell(`${u.sessions.length}`), cell('1'), cell('1')] })
    ], [2400, 2400, 2400, 2400]));
  u.sessions.forEach((s, i) => children.push(...seance(s, i + 1, total, u.no, figBufs)));
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
