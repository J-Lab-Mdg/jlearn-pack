const fs = require('fs');
const path = require('path');
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  Footer,
  Header,
  ImageRun,
  PageBreak,
  PageNumber,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} = require('docx');

const ROOT = path.resolve(__dirname, '..');
const VISUALS = path.join(ROOT, 'output', 'visuels-design');
const OUTPUT = path.join(ROOT, 'output', 'Architecture-Visuelle-Malagasy-T1-Option-C-VALIDE.docx');
const RAW_URL = 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/refs/heads/arena/01a0f3c7-jlearn-pack/malagasy-t1-jlearn/output/Architecture-Visuelle-Malagasy-T1-Option-C-VALIDE.docx';

const COLORS = {
  dark: '173B35',
  green: '2C8B70',
  paleGreen: 'E6F2ED',
  blue: '2C6E9B',
  paleBlue: 'DCEAF3',
  orange: 'E17B38',
  paleOrange: 'FBE6D3',
  purple: '73569C',
  palePurple: 'EAE2F1',
  gold: 'E8B969',
  cream: 'FBF8F0',
  red: 'C75E48',
  paleRed: 'FFF2EE',
  grey: '527069',
  white: 'FFFFFF',
};

const noBorders = {
  top: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  bottom: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  left: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  right: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  insideHorizontal: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
  insideVertical: { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' },
};

function text(value, options = {}) {
  return new TextRun({
    text: value,
    font: options.font || 'Arial',
    size: options.size || 21,
    bold: options.bold || false,
    italics: options.italics || false,
    color: options.color || COLORS.dark,
    underline: options.underline ? {} : undefined,
  });
}

function p(value, options = {}) {
  const children = Array.isArray(value) ? value : [text(value, options)];
  return new Paragraph({
    children,
    alignment: options.alignment || AlignmentType.LEFT,
    spacing: {
      before: options.before || 0,
      after: options.after === undefined ? 100 : options.after,
      line: options.line || 270,
    },
    indent: options.indent,
    keepNext: options.keepNext || false,
    pageBreakBefore: options.pageBreakBefore || false,
  });
}

function bullet(value, options = {}) {
  return new Paragraph({
    children: [text(value, { size: options.size || 20, color: options.color || COLORS.dark })],
    bullet: { level: 0 },
    spacing: { after: options.after === undefined ? 70 : options.after, line: 255 },
    indent: { left: 320, hanging: 160 },
  });
}

function heading(value, subtitle) {
  const out = [
    p(value, { bold: true, size: 34, color: COLORS.dark, after: subtitle ? 50 : 150, keepNext: true }),
  ];
  if (subtitle) {
    out.push(p(subtitle, { size: 20, color: COLORS.grey, after: 150, keepNext: true }));
  }
  return out;
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function imageParagraph(file, width, height, description) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 50, after: 100 },
    children: [
      new ImageRun({
        data: fs.readFileSync(file),
        type: 'png',
        transformation: { width, height },
        altText: {
          title: description,
          description,
          name: description,
        },
      }),
    ],
  });
}

function label(value, color, fill) {
  return new Table({
    width: { size: 3600, type: WidthType.DXA },
    borders: noBorders,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 3600, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill },
            margins: { top: 90, bottom: 90, left: 160, right: 160 },
            children: [p(value, { bold: true, size: 17, color, alignment: AlignmentType.CENTER, after: 0 })],
          }),
        ],
      }),
    ],
  });
}

function decisionBox() {
  return new Table({
    width: { size: 9800, type: WidthType.DXA },
    borders: noBorders,
    rows: [
      new TableRow({
        children: [
          new TableCell({
            width: { size: 9800, type: WidthType.DXA },
            shading: { type: ShadingType.CLEAR, fill: COLORS.dark },
            margins: { top: 210, bottom: 210, left: 300, right: 300 },
            children: [
              p('✓  OPTION C — HYBRIDE RENFORCÉ', {
                bold: true,
                size: 27,
                color: COLORS.white,
                alignment: AlignmentType.CENTER,
                after: 70,
              }),
              p('Architecture retenue et validée pour la suite de la conception', {
                size: 19,
                color: 'D8E7E2',
                alignment: AlignmentType.CENTER,
                after: 0,
              }),
            ],
          }),
        ],
      }),
    ],
  });
}

function supportTable() {
  const rows = [
    ['Bokin’ny mpianatra', 'Réutilisable', 'Voir, comprendre et manipuler', COLORS.paleBlue],
    ['Kahie fanazarana', 'Consommable', 'S’entraîner à chaque seho nécessaire', COLORS.paleOrange],
    ['Kahie ordinaire', 'Personnel', 'Écrire de façon autonome', COLORS.paleGreen],
    ['Torolalana ho an’ny mpampianatra', 'Réutilisable', 'Enseigner, corriger et remédier', COLORS.palePurple],
  ];
  return new Table({
    width: { size: 10000, type: WidthType.DXA },
    columnWidths: [3300, 1900, 4800],
    borders: {
      top: { style: BorderStyle.SINGLE, size: 4, color: 'B9C9C3' },
      bottom: { style: BorderStyle.SINGLE, size: 4, color: 'B9C9C3' },
      left: { style: BorderStyle.SINGLE, size: 4, color: 'B9C9C3' },
      right: { style: BorderStyle.SINGLE, size: 4, color: 'B9C9C3' },
      insideHorizontal: { style: BorderStyle.SINGLE, size: 3, color: 'D7E1DD' },
      insideVertical: { style: BorderStyle.SINGLE, size: 3, color: 'D7E1DD' },
    },
    rows: [
      new TableRow({
        tableHeader: true,
        children: ['Support', 'Statut', 'Fonction exacte'].map((v, index) => new TableCell({
          width: { size: [3300, 1900, 4800][index], type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: COLORS.dark },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 130, bottom: 130, left: 140, right: 140 },
          children: [p(v, { bold: true, size: 18, color: COLORS.white, alignment: AlignmentType.CENTER, after: 0 })],
        })),
      }),
      ...rows.map((row) => new TableRow({
        children: row.slice(0, 3).map((v, index) => new TableCell({
          width: { size: [3300, 1900, 4800][index], type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill: row[3] },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 120, bottom: 120, left: 140, right: 140 },
          children: [p(v, { bold: index === 0, size: 18, alignment: index === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, after: 0 })],
        })),
      })),
    ],
  });
}

function timingTable() {
  const items = [
    ['I. FAMERENANA', '2 minitra', COLORS.gold],
    ['II. LESONA VAOVAO', '14 minitra', '7CC6AE'],
    ['III. TOMBANA', '4 minitra', 'E89B80'],
  ];
  return new Table({
    width: { size: 10000, type: WidthType.DXA },
    columnWidths: [2800, 4400, 2800],
    borders: noBorders,
    rows: [
      new TableRow({
        children: items.map(([name, duration, fill], index) => new TableCell({
          width: { size: [2800, 4400, 2800][index], type: WidthType.DXA },
          shading: { type: ShadingType.CLEAR, fill },
          verticalAlign: VerticalAlign.CENTER,
          margins: { top: 140, bottom: 140, left: 120, right: 120 },
          children: [
            p(name, { bold: true, size: 18, alignment: AlignmentType.CENTER, after: 20 }),
            p(duration, { bold: true, size: 17, alignment: AlignmentType.CENTER, after: 0 }),
          ],
        })),
      }),
    ],
  });
}

const optionImage = path.join(VISUALS, '01-options-architecture.png');
const supportsImage = path.join(VISUALS, '02-repartition-supports.png');
for (const required of [optionImage, supportsImage]) {
  if (!fs.existsSync(required)) throw new Error(`Image manquante : ${required}`);
}

const children = [
  p('COLLECTION J-LEARN', { bold: true, size: 20, color: COLORS.green, alignment: AlignmentType.CENTER, after: 70 }),
  p('MALAGASY — T1', { bold: true, size: 38, color: COLORS.dark, alignment: AlignmentType.CENTER, after: 30 }),
  p('ARCHITECTURE VISUELLE DES SUPPORTS', { bold: true, size: 27, color: COLORS.blue, alignment: AlignmentType.CENTER, after: 70 }),
  p('Fiasan’ny teny sy Asa an-tsoratra', { bold: true, size: 22, color: COLORS.grey, alignment: AlignmentType.CENTER, after: 220 }),
  label('DOCUMENT DE CONCEPTION • 5 OCTOBRE 2026', '8A5A13', 'FFF3D9'),
  p('', { after: 170 }),
  decisionBox(),
  p('', { after: 170 }),
  p('Décisions intégrées', { bold: true, size: 24, color: COLORS.dark, after: 90 }),
  bullet('Une activité écrite est prévue à chaque seho où elle est pédagogiquement nécessaire.'),
  bullet('Le Kahie fanazarana est un livret séparé, aligné sur les numéros de semaine et de seho.'),
  bullet('Une page hebdomadaire complète consolide les micro-activités sans les remplacer.'),
  bullet('Les mêmes fiches restent disponibles dans les annexes reproductibles.'),
  bullet('Les formes de lettres et la réglure seront arrêtées après audit des références officielles.'),
  p('Statut : architecture validée — production annuelle non encore lancée.', {
    bold: true,
    size: 18,
    color: COLORS.red,
    alignment: AlignmentType.CENTER,
    before: 160,
    after: 0,
  }),

  pageBreak(),
  ...heading('1. Les trois architectures comparées', 'L’option C est retenue parce qu’elle équilibre réutilisation, guidage et autonomie.'),
  imageParagraph(optionImage, 650, 433, 'Comparaison visuelle des options A, B et C'),
  p('Lecture de la planche', { bold: true, size: 22, color: COLORS.dark, before: 80, after: 80 }),
  bullet('Option A : économique, mais demande trop de reproduction dans le cahier au T1.', { size: 19 }),
  bullet('Option B : très concrète, mais tout le support doit être réimprimé chaque année.', { size: 19 }),
  bullet('Option C : le manuel montre, le livret accompagne, le cahier développe l’autonomie et le guide sécurise l’enseignement.', { size: 19 }),

  pageBreak(),
  ...heading('2. Répartition exacte entre les supports', 'Chaque support remplit une fonction distincte et complémentaire.'),
  imageParagraph(supportsImage, 650, 542, 'Répartition entre le manuel, le livret, le cahier et le guide enseignant'),
  p('Principe essentiel', { bold: true, size: 22, color: COLORS.green, before: 60, after: 70 }),
  p('La page hebdomadaire ne remplace jamais les activités prévues dans les seho. Elle sert à les reprendre, les consolider et les évaluer de manière plus complète.', {
    size: 19,
    color: COLORS.dark,
    after: 0,
  }),

  pageBreak(),
  ...heading('3. Architecture verrouillée', 'Organisation matérielle et pédagogique retenue pour les prochaines maquettes.'),
  supportTable(),
  p('Correspondance obligatoire', { bold: true, size: 23, color: COLORS.dark, before: 190, after: 80 }),
  p([
    text('Herinandro 5 — Seho 3 dans le manuel', { bold: true, size: 20, color: COLORS.blue }),
    text('  ↔  ', { bold: true, size: 20, color: COLORS.green }),
    text('Herinandro 5 — Seho 3 dans le Kahie fanazarana', { bold: true, size: 20, color: COLORS.orange }),
    text('  ↔  ', { bold: true, size: 20, color: COLORS.green }),
    text('Herinandro 5 — Seho 3 dans le guide enseignant', { bold: true, size: 20, color: COLORS.purple }),
  ], { alignment: AlignmentType.CENTER, after: 170, line: 300 }),
  p('Chaque seho conserve sa structure complète', { bold: true, size: 23, color: COLORS.dark, after: 90 }),
  timingTable(),
  p('Étape suivante avant toute production annuelle', { bold: true, size: 23, color: COLORS.dark, before: 200, after: 80 }),
  bullet('Auditer les formes de lettres et la réglure dans les références officielles.'),
  bullet('Préparer une maquette d’un même seho sur les quatre supports.'),
  bullet('Soumettre cette maquette à validation avant de poursuivre.'),
  p([
    text('Lien brut du présent DOCX : ', { bold: true, size: 17, color: COLORS.grey }),
    new ExternalHyperlink({
      link: RAW_URL,
      children: [text(RAW_URL, { size: 16, color: '0563C1', underline: true })],
    }),
  ], { before: 180, after: 0, line: 230 }),
];

const doc = new Document({
  creator: 'J-Learn / Arena.ai',
  title: 'Architecture visuelle Malagasy T1 — Option C validée',
  subject: 'Répartition des supports pour Fiasan’ny teny et Asa an-tsoratra',
  description: 'Document de conception validant l’architecture hybride renforcée.',
  keywords: 'Malagasy T1, J-Learn, Option C, Kahie fanazarana, architecture',
  styles: {
    default: {
      document: {
        run: { font: 'Arial', size: 21, color: COLORS.dark },
        paragraph: { spacing: { after: 100, line: 270 } },
      },
    },
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 11906, height: 16838 },
          margin: { top: 720, right: 850, bottom: 720, left: 850, header: 360, footer: 360 },
        },
      },
      headers: {
        default: new Header({
          children: [
            p('J-LEARN • MALAGASY T1 • OPTION C', {
              bold: true,
              size: 14,
              color: COLORS.green,
              alignment: AlignmentType.RIGHT,
              after: 0,
            }),
          ],
        }),
      },
      footers: {
        default: new Footer({
          children: [
            new Paragraph({
              alignment: AlignmentType.CENTER,
              children: [
                text('Architecture visuelle validée  •  ', { size: 14, color: COLORS.grey }),
                new TextRun({ children: [PageNumber.CURRENT], font: 'Arial', size: 14, color: COLORS.grey }),
                text(' / ', { size: 14, color: COLORS.grey }),
                new TextRun({ children: [PageNumber.TOTAL_PAGES], font: 'Arial', size: 14, color: COLORS.grey }),
              ],
            }),
          ],
        }),
      },
      children,
    },
  ],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  fs.writeFileSync(OUTPUT, buffer);
  console.log(`DOCX généré : ${OUTPUT}`);
  console.log(`Taille : ${buffer.length} octets`);
});
