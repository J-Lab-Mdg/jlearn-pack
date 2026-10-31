#!/usr/bin/env node
/* Générateur de la version T4 alignée sur le skill J-Learn v18.
 * Le contenu est lu uniquement depuis inventaire_lecons.json et content_bank.json.
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Footer, PageNumber, Bookmark, InternalHyperlink, TableLayoutType,
  Math: DocxMath, MathFraction, MathRun
} = require('docx');

const ROOT = path.join(__dirname, '..');
const inventory = JSON.parse(fs.readFileSync(path.join(ROOT, 'inventaire_lecons.json'), 'utf8'));
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, 'content_bank.json'), 'utf8'));
const OUT = path.join(ROOT, 'livrables', 'Manuel_Mathematiques_T4_JLearn_SkillV1.docx');

const C = {
  red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000',
  black: '000000', white: 'FFFFFF', pale: 'EAF2F8', paleGreen: 'E8F5E9',
  paleBlue: 'E3F2FD', yellow: 'FFF8E1', gray: 'E7E6E6', line: '808080'
};
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };
const gridB = { style: BorderStyle.SINGLE, size: 4, color: C.line };
const gridBorders = { top: gridB, bottom: gridB, left: gridB, right: gridB, insideHorizontal: gridB, insideVertical: gridB };

const tr = (text, opt = {}) => new TextRun({
  text: String(text), font: 'Times New Roman', size: opt.size || 22,
  bold: !!opt.bold, italics: !!opt.italics, color: opt.color || C.black,
  underline: opt.underline ? { type: 'single' } : undefined
});

// Transforme les fractions simples en équations Word natives.
function rich(text, opt = {}) {
  const out = []; let last = 0; const re = /(\d+)\/(\d+)/g; let m;
  while ((m = re.exec(String(text)))) {
    if (m.index > last) out.push(tr(String(text).slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1])], denominator: [new MathRun(m[2])] })] }));
    last = re.lastIndex;
  }
  if (last < String(text).length) out.push(tr(String(text).slice(last), opt));
  return out.length ? out : [tr(text, opt)];
}

function p(text, opt = {}) {
  return new Paragraph({
    alignment: opt.align || AlignmentType.JUSTIFIED,
    spacing: { before: opt.before || 0, after: opt.after == null ? 100 : opt.after, line: 300 },
    indent: opt.indent ? { left: opt.indent } : undefined,
    shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined,
    children: Array.isArray(text) ? text : rich(text, opt)
  });
}
function bullet(text, opt = {}) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 65 }, children: rich(text, opt) }); }
function numbered(text, opt = {}) { return new Paragraph({ numbering: { reference: 'lesson-number', level: 0 }, spacing: { after: 65 }, children: rich(text, opt) }); }
function heading(text, level = 1, bookmark = null) {
  const color = level === 1 ? C.red : C.green;
  const run = tr(text, { bold: true, color, size: level === 1 ? 32 : 27 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 180, after: 110 }, children });
}
function page() { return new Paragraph({ children: [new PageBreak()] }); }
function cell(text, opt = {}) {
  const contents = Array.isArray(text) ? text : [text];
  return new TableCell({
    width: opt.width ? { size: opt.width, type: WidthType.PERCENTAGE } : undefined,
    columnSpan: opt.span, rowSpan: opt.rowSpan,
    shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 90, right: 90 },
    children: contents.map(x => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: 35, line: 270 }, children: rich(x, { bold: opt.bold, color: opt.color || C.black, size: opt.size || 18 }) }))
  });
}
function table(rows, widths, opt = {}) {
  return new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: opt.noBorders ? noBorders : gridBorders, columnWidths: widths, rows });
}
function labelTable(leftRows, rightRows) {
  const n = Math.max(leftRows.length, rightRows.length);
  const rows = [];
  for (let i = 0; i < n; i++) {
    const l = leftRows[i] || ['', '']; const r = rightRows[i] || ['', ''];
    rows.push(new TableRow({ children: [cell(`${l[0]} ${l[1]}`, { size: 17 }), cell(`${r[0]} ${r[1]}`, { size: 17 })] }));
  }
  return table(rows, [5000, 4600], { noBorders: true });
}
function meta(lesson, unit, globalNo, total) {
  return labelTable(
    [['Discipline :', 'Mathématiques'], ['Sous-discipline :', unit.nom], ['Thème :', lesson.titre], ['Objectif spécifique :', lesson.objectif], ['Documentation :', `PE T4 ${lesson.sources.pe} ; FRP T4 ${lesson.sources.frp}`], ['Support et matériel :', lesson.supports.join(', ')]],
    [['Date :', '________________'], ['Classe :', 'T4'], ['Séance n° :', `${globalNo} / ${total}`], ['Durée :', 'non précisée dans le PE'], ['Valeurs :', unit.valeurs.join(', ')], ['Référence :', lesson.id]]
  );
}
function row(step, teacher, learners, technique, support, observation, opt = {}) {
  return new TableRow({ children: [
    cell(step, { bold: !!opt.bold, fill: opt.fill || undefined, size: 17 }),
    cell(teacher, { size: 16 }), cell(learners, { size: 16 }), cell(technique, { size: 16 }), cell(support, { size: 16 }), cell(observation, { size: 16 })
  ] });
}
function sectionRow(text) {
  return new TableRow({ children: [cell(text, { span: 6, bold: true, fill: C.paleBlue, color: C.blue, size: 18 })] });
}
function applicationItems(data) {
  const base = data.exercises.slice();
  while (base.length < 4) base.push(`Explique avec une phrase ou une représentation la règle utilisée dans : ${data.example}`);
  return base.slice(0, 4);
}
function applicationAnswers(data) {
  const base = data.corrections.slice();
  while (base.length < 4) base.push(`La justification doit reprendre la règle : ${data.retain[0]}`);
  return base.slice(0, 4);
}
function exerciseBlock(data, start = 0) {
  const items = applicationItems(data).slice(start, start + 4);
  if (items.length < 4) items.push(...applicationItems(data).slice(0, 4 - items.length));
  return items;
}
function answersBlock(data, start = 0) {
  const items = applicationAnswers(data).slice(start, start + 4);
  if (items.length < 4) items.push(...applicationAnswers(data).slice(0, 4 - items.length));
  return items;
}
function exerciseText(items) { return items.map((x, i) => `${i + 1}. ${x}`).join('\n'); }
function answerText(items) { return items.map((x, i) => `${i + 1}. ${x}`).join('\n'); }

function fiche(lesson, data, unit, globalNo, total) {
  const visual = data.visual.map(r => r.join(' | ')).join('; ');
  const aItems = exerciseBlock(data, 0); const aAnswers = answersBlock(data, 0);
  const eItems = exerciseBlock(data, 2); const eAnswers = answersBlock(data, 2);
  const rows = [
    new TableRow({ children: [cell('Étapes et durée', { span: 1, bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Déroulement de la leçon', { span: 2, bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Technique et stratégie', { bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Support et matériel', { bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Observation', { bold: true, fill: C.blue, color: C.white, size: 17 })] }),
    new TableRow({ children: [cell('I. Révision', { bold: true, fill: C.pale, size: 17 }), cell('Enseignant', { bold: true, fill: C.pale, size: 17 }), cell('Apprenants', { bold: true, fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 })] }),
    row('I. Révision', `Rappelle oralement une notion de l’unité ${unit.nom}. Question : que signifie « ${data.retain[0]} » ? R.A. : ${data.retain[0]}`, 'Écoutent puis répondent oralement avec le vocabulaire déjà étudié.', 'Questionnement oral', '—', 'La réponse montre le rappel de la notion précédente.'),
    sectionRow('II. NOUVELLE LEÇON — durée globale : non précisée dans le PE'),
    row('1. Mise en situation', `Situation : ${lesson.activite} Question de départ : que cherchons-nous à déterminer ? R.A. : ${lesson.objectif}`, 'Écoutent et répondent à l’oral.', 'Questionnement et contextualisation', lesson.supports.join(', '), 'La réponse est reliée à l’objectif.'),
    row('2. Présentation', `Annonce : « Aujourd’hui, nous allons apprendre à ${lesson.objectif.toLowerCase()} »`, 'Écoutent le titre et l’objectif.', 'Présentation explicite', 'Tableau noir', 'Le titre est compris.'),
    row('3. Observation', `Observez l’exemple : ${data.example} Observez aussi le support : ${visual}.`, 'Observent silencieusement le support.', 'Observation guidée', lesson.supports.join(', '), 'Aucune réponse n’est demandée à cette étape.'),
    row('4. Analyse', `Question 1 : Que montre l’exemple ? R.A. : ${data.example}\nQuestion 2 : Quelle règle faut-il retenir ? R.A. : ${data.retain[0]}\nQuestion 3 : Comment vérifier ? R.A. : ${data.retain[1] || 'représenter ou calculer avant de conclure.'}`, 'Répondent aux questions et justifient leurs procédures.', 'Manipulation, verbalisation, comparaison', lesson.supports.join(', '), 'Les réponses sont confrontées et corrigées.'),
    row('5. Synthèse', `Donc, ${data.retain.join(' ')} Exemple : ${data.example}`, 'Écoutent la synthèse et la reformulent oralement.', 'Institutionnalisation', 'Tableau noir, cahier', 'La trace écrite est exacte.'),
    row('6. Application', `Travail guidé.\n${exerciseText(aItems)}`, `Corrigé guidé.\n${answerText(aAnswers)}`, 'Entraînement individuel puis correction collective', 'Cahier, ardoise, supports de la leçon', 'Repérer les erreurs de méthode.'),
    row('III. Évaluation', `Travail individuel.\n${exerciseText(eItems)}`, `Corrigé attendu.\n${answerText(eAnswers)}`, 'Évaluation formative', 'Cahier, règle ou matériel indiqué', 'L’apprenant justifie sa réponse.'),
  ];
  return [
    heading(`SÉANCE ${globalNo} / ${total} — ${lesson.titre.toUpperCase()}`, 1, `seance${globalNo}`),
    heading('FICHE DE PRÉPARATION', 2), meta(lesson, unit, globalNo, total),
    table(rows, [1500, 2700, 1700, 1500, 1400, 800]),
    p('Les étapes de la fiche sont rédigées pour être utilisées directement en classe. Les exercices de cette table ne portent pas de barème ; le barème apparaît uniquement dans la section EXERCICES.', { size: 16, italics: true, color: '666666' })
  ];
}
function learnerLesson(lesson, data) {
  const aItems = exerciseBlock(data, 0); const eItems = exerciseBlock(data, 2);
  const aAnswers = answersBlock(data, 0); const eAnswers = answersBlock(data, 2);
  const visualRows = [data.visual[0], ...data.visual.slice(1)];
  const keywords = data.retain.join(' ');
  return [
    page(), heading(`LEÇON — ${lesson.titre}`, 1, `lecon${lesson.id.replace(/[^A-Za-z0-9]/g, '')}`),
    heading('1. À retenir', 2), p([tr('Mots-clés : ', { bold: true, color: C.blue }), ...rich(keywords, { color: C.blue, bold: true })]),
    ...data.retain.map(x => bullet(x)),
    heading('2. Exemple guidé', 2), p(data.example, { fill: C.paleGreen }),
    heading('3. Support visuel', 2), table([new TableRow({ children: data.visual[0].map(x => cell(x, { bold: true, fill: C.green, color: C.white, size: 17 })) }), ...data.visual.slice(1).map(r => new TableRow({ children: r.map(x => cell(x, { size: 17 })) }))], data.visual[0].map(() => Math.floor(9600 / data.visual[0].length))),
    heading('4. Exercices', 2), p('Les exercices sont notés sur 8 points. Chaque partie vaut 1 point par réponse correcte.'),
    p([tr('A. ', { bold: true, color: C.blue }), ...rich(exerciseText(aItems))]),
    p([tr('B. ', { bold: true, color: C.blue }), ...rich(exerciseText(eItems))]),
    heading('5. Corrigé détaillé', 2), p([tr('A. ', { bold: true, color: C.wine }), ...rich(answerText(aAnswers))]),
    p([tr('B. ', { bold: true, color: C.wine }), ...rich(answerText(eAnswers))]),
    p('Vérifie toujours le calcul, le signe, l’unité ou la propriété utilisée avant de conclure.', { fill: C.yellow, italics: true })
  ];
}
function unitIntro(unit, unitNo) {
  const total = unit.lecons.length;
  return [
    page(), heading(`UNITÉ ${unitNo} — ${unit.nom.toUpperCase()}`, 1, `unite${unitNo}`),
    p(`Durée officielle : ${unit.duree_officielle_heures} heures. Valeurs : ${unit.valeurs.join(', ')}.`, { align: AlignmentType.CENTER }),
    heading('Tableau de bord', 2),
    table([
      new TableRow({ children: [cell('Leçon', { bold: true, fill: C.blue, color: C.white }), cell('Titre', { bold: true, fill: C.blue, color: C.white }), cell('Support principal', { bold: true, fill: C.blue, color: C.white })] }),
      ...unit.lecons.map((l, i) => new TableRow({ children: [cell(`${i + 1}`, { size: 17 }), cell(l.titre, { size: 17 }), cell(l.supports.join(', '), { size: 17 })] }))
    ], [900, 5200, 3500]),
    p(`Cette unité comprend ${total} leçons. Chaque leçon est suivie d’exercices et d’un corrigé.`, { italics: true, color: '666666' })
  ];
}
function frontMatter(units, total) {
  const toc = [page(), heading('SOMMAIRE INTERACTIF', 1, 'sommaire'), p('Clique sur une unité ou une séance pour atteindre directement sa fiche. Les liens sont des liens internes vers des signets.'), ...units.flatMap((u, ui) => {
    const arr = [new Paragraph({ children: [new InternalHyperlink({ anchor: `unite${ui + 1}`, children: [tr(`Unité ${ui + 1} — ${u.nom}`, { bold: true, color: C.blue })] })] })];
    u.lecons.forEach((l, li) => {
      const global = units.slice(0, ui).reduce((s, x) => s + x.lecons.length, 0) + li + 1;
      arr.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `seance${global}`, children: [tr(`Fiche ${global} — ${l.titre}`, { color: C.blue, size: 19 })] })] }));
      arr.push(new Paragraph({ indent: { left: 720 }, children: [new InternalHyperlink({ anchor: `lecon${l.id.replace(/[^A-Za-z0-9]/g, '')}`, children: [tr(`Leçon — ${l.titre}`, { color: C.blue, size: 18 })] })] }));
    });
    return arr;
  })];
  return [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 1600, after: 200 }, children: [tr('MATHÉMATIQUES', { bold: true, color: C.blue, size: 54 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 250 }, children: [tr('T4', { bold: true, color: C.red, size: 84 })] }),
    p('Manuel de l’apprenant et fiches de préparation enseignant', { align: AlignmentType.CENTER, size: 28, color: C.blue }),
    p('Construire à partir du PE T4 et du FRP T4 — Collection J-Learn', { align: AlignmentType.CENTER, size: 20 }),
    page(), heading('AVANT-PROPOS', 1, 'avantpropos'),
    p('Ce manuel suit les six composantes du programme officiel de mathématiques T4 : Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données. Chaque séance articule une fiche de préparation, une leçon accessible, des exercices notés et un corrigé.'),
    p('Les contenus sont rattachés au PE T4 et au FRP T4. Les supports de manipulation et les représentations proposées dans les références sont repris ou reformulés dans les fiches concernées.'),
    p('Code couleur : titres de leçon en rouge ; sous-titres en vert ; mots-clés en bleu ; corrigés en rose/bordeaux.'),
    ...toc
  ];
}
async function main() {
  const total = inventory.unites.reduce((s, u) => s + u.lecons.length, 0);
  if (total !== 57) throw new Error(`Nombre de leçons inattendu : ${total}`);
  const children = [...frontMatter(inventory.unites, total)];
  let global = 0;
  inventory.unites.forEach((unit, ui) => {
    children.push(...unitIntro(unit, ui + 1));
    unit.lecons.forEach(lesson => {
      global += 1;
      const data = bank[lesson.id];
      if (!data) throw new Error(`Banque absente : ${lesson.id}`);
      children.push(...fiche(lesson, data, unit, global, total));
      children.push(...learnerLesson(lesson, data));
    });
  });
  children.push(page(), heading('SOURCES ET CONTRÔLE', 1, 'sources'), p('PE T4.pdf, pages imprimées 67–77. FRP T4 Fascicule 2.pdf, pages imprimées 5–54. La progression suit le PE lorsque la numérotation du FRP diffère.'), p(`Le manuel contient ${total} fiches identifiées, chacune reliée à une leçon, à des exercices et à un corrigé.`));
  const doc = new Document({
    numbering: { config: [{ reference: 'lesson-number', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 180 } } } }] }] },
    styles: { default: { document: { run: { font: 'Times New Roman', size: 22 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('J-Learn — Mathématiques T4 — page ', { size: 17, color: '666666' }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 17, color: '666666' })] })] }) },
      children
    }]
  });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT, buf);
  console.log(`${OUT}: ${buf.length} octets; ${total} séances`);
}
main().catch(err => { console.error(err); process.exit(1); });
