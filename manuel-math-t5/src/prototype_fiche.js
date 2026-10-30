const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, TableLayoutType
} = require('docx');

const C = {
  blue: '1F4E79', red: 'A61C00', green: '2E7D32', pale: 'EEF4F8',
  paleGreen: 'E8F5E9', yellow: 'FFF8E1', gray: '666666', black: '222222', white: 'FFFFFF'
};

const run = (text, o = {}) => new TextRun({
  text,
  font: 'Times New Roman',
  size: o.size || 24,
  bold: !!o.bold,
  italics: !!o.italics,
  underline: o.underline ? { type: 'single' } : undefined,
  color: o.color || C.black
});
const para = (text, o = {}) => new Paragraph({
  alignment: o.align || AlignmentType.LEFT,
  spacing: { before: o.before || 0, after: o.after ?? 110, line: 300 },
  indent: o.indent ? { left: o.indent } : undefined,
  shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined,
  children: [run(text, o)]
});
const mixed = (parts, o = {}) => new Paragraph({
  alignment: o.align || AlignmentType.LEFT,
  spacing: { before: o.before || 0, after: o.after ?? 110, line: 300 },
  children: parts.map(([text, style]) => run(text, style || {}))
});
const border = { style: BorderStyle.SINGLE, size: 6, color: '7593A8' };
const borders = { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border };
const cell = (text, o = {}) => new TableCell({
  width: o.width ? { size: o.width, type: WidthType.PERCENTAGE } : undefined,
  columnSpan: o.span,
  shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined,
  margins: { top: 90, bottom: 90, left: 100, right: 100 },
  children: [para(text, { align: o.align || AlignmentType.CENTER, bold: !!o.bold, color: o.color || C.black, size: o.size || 22, after: 0 })]
});
const table = rows => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE },
  layout: TableLayoutType.FIXED,
  borders,
  rows
});
const heading = text => new Paragraph({
  spacing: { before: 180, after: 100 },
  children: [run(text, { bold: true, color: C.blue, size: 28 })]
});
const answer = (label, text) => new Paragraph({
  spacing: { after: 70, line: 300 },
  children: [run(label, { bold: true, color: C.green }), run(text)]
});

const children = [];
children.push(new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 220 },
  children: [run('LIRE ET ÉCRIRE LES NOMBRES JUSQU’À 1 000 000', { bold: true, color: C.red, size: 32 })]
}));

children.push(heading('1. Les nombres jusqu’à 1 000 000'));
children.push(para('Pour ne pas se tromper, on écrit le nombre de droite à gauche, une case à la fois. On sépare d’abord le nombre en groupes de trois chiffres à partir de la droite.'));
children.push(para('On prend l’exemple :', { after: 60 }));
children.push(para('2 343 216', { align: AlignmentType.CENTER, bold: true, color: C.red, size: 32, after: 80 }));
children.push(para('2 | 343 | 216', { align: AlignmentType.CENTER, bold: true, color: C.blue, size: 28, after: 120 }));
children.push(table([
  new TableRow({ children: [
    cell('MILLIONS', { span: 3, fill: C.pale, bold: true, color: C.blue }),
    cell('MILLE', { span: 3, fill: C.pale, bold: true, color: C.blue }),
    cell('UNITÉS', { span: 3, fill: C.paleGreen, bold: true, color: C.green })
  ] }),
  new TableRow({ children: ['C', 'D', 'U', 'C', 'D', 'U', 'C', 'D', 'U'].map((x, i) => cell(x, { fill: i < 6 ? C.pale : C.paleGreen, bold: true, color: i < 6 ? C.blue : C.green })) }),
  new TableRow({ children: ['0', '0', '2', '3', '4', '3', '2', '1', '6'].map((x, i) => cell(x, { size: 28, bold: true, color: i < 6 ? C.blue : C.green })) })
]));
children.push(para('On place chaque groupe dans sa classe :', { before: 120, after: 60 }));
children.push(para('2 dans les unités de millions ; 343 dans la classe des mille ; 216 dans la classe des unités.', { fill: C.paleGreen, bold: true }));

children.push(heading('2. Lecture'));
children.push(para('On lit de gauche à droite : la première classe, puis le mot « million », ensuite la classe des mille, puis la classe des unités.'));
children.push(para('2 343 216 se lit : deux millions trois cent quarante-trois mille deux cent seize.', { fill: C.paleGreen, bold: true }));
children.push(para('Pour bien lire les nombres, il faut connaître les mots-nombres de 0 à 16, les dizaines, les centaines, puis les mots mille et million.', { after: 70 }));
children.push(table([
  new TableRow({ children: [cell('0 à 16', { fill: C.pale, bold: true, color: C.blue }), cell('Dizaines', { fill: C.pale, bold: true, color: C.blue }), cell('Classes', { fill: C.paleGreen, bold: true, color: C.green })] }),
  new TableRow({ children: [cell('zéro, un, deux, trois, quatre, cinq, six, sept, huit, neuf, dix, onze, douze, treize, quatorze, quinze, seize', { align: AlignmentType.LEFT, size: 19 }), cell('vingt, trente, quarante, cinquante, soixante ; soixante-dix ; quatre-vingts ; quatre-vingt-dix', { align: AlignmentType.LEFT, size: 19 }), cell('cent, mille, million', { align: AlignmentType.LEFT, size: 20 })] })
]));
children.push(para('70 = soixante-dix ; 80 = quatre-vingts ; 90 = quatre-vingt-dix. Le mot mille ne prend jamais de s. Le mot million prend un s quand il y en a plusieurs.', { after: 100 }));

children.push(heading('3. Écriture'));
children.push(para('Pour écrire un nombre entendu, on cherche d’abord les mots million, mille et unités. On remplit ensuite le tableau de droite à gauche et on ajoute les zéros nécessaires.'));
children.push(para('« Deux millions trois cent quarante-trois mille deux cent seize »', { after: 60 }));
children.push(para('Réponse : 2 343 216.', { bold: true, color: C.green }));
children.push(para('Une classe doit toujours garder ses trois places. Ainsi, « soixante-dix » s’écrit 070 lorsqu’il se trouve dans la classe des unités.', { fill: C.paleGreen, after: 110 }));
children.push(mixed([
  ['Exemple :', { italics: true, underline: true }],
  [' 602 040 se lit « six cent deux mille quarante » ; « quinze mille neuf » s’écrit 15 009.']
], { after: 140 }));

children.push(heading('EXERCICE'));
children.push(para('1. Écris en lettres :', { color: C.blue, bold: true, after: 50 }));
children.push(para('a) 7 245     b) 83 060     d) 500 500     e) 1 000 000'));
children.push(para('2. Écris en chiffres :', { color: C.blue, bold: true, after: 50 }));
children.push(para('a) douze mille trois cent quatre     b) deux cent mille vingt'));
children.push(para('d) neuf cent quatre-vingt-dix mille     e) six cent un mille huit'));
children.push(para('3. Complète :', { color: C.blue, bold: true, after: 50 }));
children.push(para('a) 40 007 se lit « … »     b) « trois cent cinq mille neuf » s’écrit …'));
children.push(para('d) 203 070 se lit « … »     e) « neuf cent mille six » s’écrit …'));
children.push(para('4. Range dans l’ordre croissant :', { color: C.blue, bold: true, after: 50 }));
children.push(para('45 004 — 400 050 — 40 504 — 405 000'));

children.push(heading('Petit problème'));
children.push(para('Maman gagne 870 000 Ar par mois. Qu’est-ce qui est écrit en lettres sur la fiche de paie ?', { fill: C.yellow }));

children.push(heading('Correction'));
children.push(answer('1. ', 'a) sept mille deux cent quarante-cinq ; b) quatre-vingt-trois mille soixante ; d) cinq cent mille cinq cents ; e) un million.'));
children.push(answer('2. ', 'a) 12 304 ; b) 200 020 ; d) 990 000 ; e) 601 008.'));
children.push(answer('3. ', 'a) quarante mille sept ; b) 305 009 ; d) deux cent trois mille soixante-dix ; e) 900 006.'));
children.push(answer('4. ', '40 504 < 45 004 < 400 050 < 405 000.'));
children.push(answer('Petit problème. ', 'Huit cent soixante-dix mille ariary.'));

const doc = new Document({
  styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
  sections: [{
    properties: { page: { margin: { top: 850, right: 1050, bottom: 850, left: 1050 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [run('J-Learn — prototype fiche élève', { size: 18, color: C.gray })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run('Page ', { size: 18, color: C.gray }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18, color: C.gray })] })] }) },
    children
  }]
});

const out = path.join(__dirname, '..', 'PROTOTYPE_FICHE_LECON_NOMBRES.docx');
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log(`${out}: ${buf.length} octets`); });
