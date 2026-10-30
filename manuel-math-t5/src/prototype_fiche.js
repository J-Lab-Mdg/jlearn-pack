const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, TableLayoutType
} = require('docx');

const C = { blue: '1F4E79', red: 'A61C00', green: '2E7D32', pale: 'EEF4F8', paleGreen: 'E8F5E9', yellow: 'FFF8E1', gray: '666666', black: '222222', white: 'FFFFFF' };
const tr = (text, o = {}) => new TextRun({ text, font: 'Times New Roman', size: o.size || 24, bold: !!o.bold, color: o.color || C.black, italics: !!o.italics });
const p = (text, o = {}) => new Paragraph({ alignment: o.align || AlignmentType.LEFT, spacing: { before: o.before || 0, after: o.after ?? 110, line: 300 }, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined, children: [tr(text, o)] });
const cell = (text, o = {}) => new TableCell({ width: o.width ? { size: o.width, type: WidthType.PERCENTAGE } : undefined, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined, margins: { top: 90, bottom: 90, left: 100, right: 100 }, children: [p(text, { align: o.align || AlignmentType.CENTER, bold: !!o.bold, color: o.color || C.black, size: o.size || 22, after: 0 })] });
const border = { style: BorderStyle.SINGLE, size: 6, color: '7593A8' };
const borders = { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border };
const table = (rows, widths) => new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, columnWidths: widths, borders, rows });
const heading = (text, color = C.blue) => new Paragraph({ spacing: { before: 180, after: 100 }, children: [tr(text, { bold: true, color, size: 28 })] });
const line = (text, color = C.black) => new Paragraph({ spacing: { after: 70, line: 300 }, children: [tr(text, { size: 24, color })] });

const children = [];
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 80 }, children: [tr('MATHÉMATIQUES — T5', { bold: true, color: C.gray, size: 22 })] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 220 }, children: [tr('LIRE ET ÉCRIRE LES NOMBRES JUSQU’À 1 000 000', { bold: true, color: C.red, size: 32 })] }));
children.push(p('Objectif : lire un nombre de six chiffres et l’écrire sans oublier les zéros.', { fill: C.pale, bold: true }));

children.push(heading('1. Je regroupe les chiffres par classes'));
children.push(line('On part de la droite. Chaque classe contient trois colonnes : centaines, dizaines, unités.'));
children.push(table([
  new TableRow({ children: [cell('CLASSE DES MILLE', { width: 50, fill: C.pale, bold: true, color: C.blue }), cell('CLASSE DES UNITÉS', { width: 50, fill: C.paleGreen, bold: true, color: C.green })] }),
  new TableRow({ children: [cell('C   D   U', { width: 50, bold: true, color: C.blue }), cell('C   D   U', { width: 50, bold: true, color: C.green })] }),
  new TableRow({ children: [cell('3   4   8', { width: 50, size: 30, bold: true }), cell('2   5   6', { width: 50, size: 30, bold: true })] }),
], [50, 50]));
children.push(p('348 | 256', { align: AlignmentType.CENTER, size: 32, bold: true, color: C.red, after: 60 }));
children.push(p('La barre sépare les deux classes : 348 mille et 256 unités.', { align: AlignmentType.CENTER, italics: true, color: C.gray }));

children.push(heading('2. Je lis le nombre'));
children.push(table([
  new TableRow({ children: [cell('348', { width: 35, fill: C.pale, size: 28, bold: true }), cell('mille', { width: 25, fill: C.yellow, size: 24, bold: true, color: C.red }), cell('256', { width: 40, fill: C.paleGreen, size: 28, bold: true })] }),
], [35, 25, 40]));
children.push(p('348 256 se lit : trois cent quarante-huit mille deux cent cinquante-six.', { bold: true, color: C.blue }));
children.push(line('Je lis de gauche à droite : la première classe, puis le mot « mille », puis la deuxième classe.'));

children.push(heading('3. J’écris le nombre entendu'));
children.push(line('« Deux cent trois mille soixante-dix »'));
children.push(table([
  new TableRow({ children: [cell('203', { width: 50, fill: C.pale, size: 28, bold: true }), cell('070', { width: 50, fill: C.paleGreen, size: 28, bold: true })] }),
], [50, 50]));
children.push(p('Réponse : 203 070.', { bold: true, color: C.green }));
children.push(line('Le zéro garde sa place : « soixante-dix » devient 070 dans la classe des unités.'));

children.push(heading('Règle', C.green));
children.push(p('Pour lire ou écrire un grand nombre, je le sépare en classes de trois chiffres. Je lis chaque classe dans l’ordre et je garde les zéros nécessaires.', { fill: C.paleGreen, bold: true }));

children.push(new Paragraph({ children: [new PageBreak()] }));
children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 200 }, children: [tr('JE M’EXERCE', { bold: true, color: C.red, size: 30 })] }));
children.push(line('1. Écris en lettres :', C.blue));
children.push(line('a) 7 245     b) 83 060     c) 500 500     d) 1 000 000'));
children.push(line('2. Écris en chiffres :', C.blue));
children.push(line('a) douze mille trois cent quatre     b) deux cent mille vingt'));
children.push(line('c) neuf cent quatre-vingt-dix mille     d) six cent un mille huit'));
children.push(line('3. Complète :', C.blue));
children.push(line('a) 40 007 se lit « … »     b) « trois cent cinq mille neuf » s’écrit …'));
children.push(line('c) 203 070 se lit « … »'));
children.push(line('4. Range dans l’ordre croissant :', C.blue));
children.push(line('45 004 — 400 050 — 40 504 — 405 000'));
children.push(heading('Je vérifie', C.green));
children.push(line('1. a) sept mille deux cent quarante-cinq ; b) quatre-vingt-trois mille soixante ; c) cinq cent mille cinq cents ; d) un million.'));
children.push(line('2. a) 12 304 ; b) 200 020 ; c) 990 000 ; d) 601 008.'));
children.push(line('3. a) quarante mille sept ; b) 305 009 ; c) deux cent trois mille soixante-dix.'));
children.push(line('4. 40 504 < 45 004 < 400 050 < 405 000.'));
children.push(p('À Madagascar, les nombres servent aussi à lire un prix au marché, une population, une distance ou une récolte. La classe des trois chiffres évite les erreurs.', { fill: C.yellow }));

const doc = new Document({
  styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
  sections: [{
    properties: { page: { margin: { top: 850, right: 1050, bottom: 850, left: 1050 } } },
    headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr('J-Learn — prototype fiche élève', { size: 18, color: C.gray })] })] }) },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18, color: C.gray }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18, color: C.gray })] })] }) },
    children
  }]
});
const out = path.join(__dirname, '..', 'PROTOTYPE_FICHE_LECON_NOMBRES.docx');
Packer.toBuffer(doc).then(buf => { fs.writeFileSync(out, buf); console.log(out, buf.length); });
