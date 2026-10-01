const fs = require('fs');
const path = require('path');
const {
  Document,
  ExternalHyperlink,
  Packer,
  Paragraph,
  TextRun,
} = require('docx');

const B = require('./builders');
const D = require('./data-fiche-temoin');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'output', 'Fiche-Temoin-Malagasy-T1-CONFORME-SKILL-v18.docx');
const IMAGE = path.join(ROOT, 'assets', 'img_malagasy_t1_seance01.png');

function sourceLink(label, url) {
  return new Paragraph({
    spacing: { after: 80, line: 250 },
    children: [
      B.text(`${label} — `, { size: 18 }),
      new ExternalHyperlink({
        link: url,
        children: [new TextRun({
          text: url,
          font: B.FONT,
          size: 18,
          color: '0563C1',
          underline: {},
        })],
      }),
    ],
  });
}

function cover(imageBuffer) {
  return [
    B.p('COLLECTION J-LEARN', {
      bold: true,
      size: 24,
      alignment: 'center',
      after: 140,
    }),
    B.p('MALAGASY — T1', {
      bold: true,
      size: 42,
      color: B.COLORS.RED,
      alignment: 'center',
      after: 90,
    }),
    B.p('SEHO 1 / 9', {
      bold: true,
      size: 30,
      color: B.COLORS.BLUE,
      alignment: 'center',
      after: 80,
    }),
    B.p('Ny fampahafantarana ny tena sy ny hafa', {
      bold: true,
      size: 25,
      alignment: 'center',
      after: 150,
    }),
    B.imageParagraph(imageBuffer, 560, 313, 'Ankizy ao amin’ny kilasy T1 mifampahafantatra'),
    B.p('Kilasy T1 / 11e / CP1 — Seho 1 / 9 — 20 minitra', {
      bold: true,
      size: 19,
      alignment: 'center',
      before: 130,
      after: 60,
    }),
    B.p('Fandaharam-pibeazana T1 sy RAPE T1', {
      size: 17,
      color: B.COLORS.GREY,
      alignment: 'center',
      after: 0,
    }),
  ];
}

function toc() {
  return [
    B.p('FIZAHAN-TAKILA', {
      bold: true,
      size: 30,
      alignment: 'center',
      after: 180,
    }),
    B.tocLink('1. Takela-panomanan-desona', 'fiche'),
    B.tocLink('2. Lesona', 'lesona'),
    B.tocLink('3. Fanazaran-tena', 'fanazaran_tena'),
    B.tocLink('4. Valin’ny fanazaran-tena', 'valiny'),
    B.tocLink('5. Loharanom-baovao', 'loharano'),
  ];
}

function lesson(imageBuffer) {
  return [
    B.lessonTitle('MAMPAHAFANTATRA NY TENA SY NY HAFA', 'lesona'),
    B.imageParagraph(imageBuffer, 560, 313, 'Ankizy ao amin’ny kilasy T1 mifampahafantatra'),

    B.lessonSection('1. Fiarahabana'),
    B.highlightedParagraph([
      { text: 'Rehefa mihaona amin’olona isika dia afaka miarahaba hoe : “' },
      { text: 'Manahoana!', highlight: true },
      { text: '”' },
    ]),

    B.lessonSection('2. Fanontaniana sy valiny momba ny anarana'),
    B.highlightedParagraph([
      { text: 'a. Fanontaniana : “' },
      { text: 'Iza no anaranao?', highlight: true },
      { text: '”' },
    ]),
    B.highlightedParagraph([
      { text: 'b. Valiny : “' },
      { text: '[Anarana] no anarako.', highlight: true },
      { text: '”' },
    ]),
    B.p('Ohatra :', { bold: true, size: 20, after: 50 }),
    B.p('• “Iza no anaranao?”', { size: 20, indent: { left: 360 }, after: 45 }),
    B.p('• “Soa no anarako.”', { size: 20, indent: { left: 360 }, after: 45 }),
    B.p('• “Koto no anarako.”', { size: 20, indent: { left: 360 }, after: 80 }),

    B.lessonSection('3. Fepetra arahina rehefa miteny'),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Mihaino', highlight: true },
      { text: ' sy mangina rehefa misy miteny.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Manangan-tanana', highlight: true },
      { text: ' vao miteny.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Miandry ny anjara fitenenana', highlight: true },
      { text: '.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Miteny am-panajana', highlight: true },
      { text: '.' },
    ]),

    B.lessonSection('4. Resaka fohy'),
    B.p('Soa : “Manahoana! Iza no anaranao?”', { size: 20, after: 45 }),
    B.p('Koto : “Manahoana! Koto no anarako. Ary ianao?”', { size: 20, after: 45 }),
    B.p('Soa : “Soa no anarako.”', { size: 20, after: 45 }),
    B.p('Koto : “Faly mahalala anao.”', { size: 20, after: 45 }),
    B.p('Soa : “Misaotra.”', { size: 20, after: 80 }),
  ];
}

function exerciseSection() {
  const children = [
    B.bookmarkHeading('FANAZARAN-TENA', 'fanazaran_tena', {
      size: 30,
      color: B.COLORS.BLACK,
    }),
    B.p('Fitambarany : 20', { bold: true, size: 20, alignment: 'right', after: 130 }),
  ];

  for (const ex of D.exercises) {
    children.push(
      B.p(`${ex.numero}. ${ex.consigne} (/${ex.score})`, {
        bold: true,
        size: 20,
        before: 90,
        after: 70,
      }),
    );
    for (const item of ex.items) {
      children.push(B.p(item, { size: 19, indent: { left: 300 }, after: 55 }));
    }
  }
  return children;
}

function correctionSection() {
  const children = [
    B.bookmarkHeading('VALIN’NY FANAZARAN-TENA', 'valiny', {
      size: 30,
      color: B.COLORS.BLACK,
    }),
  ];

  for (const ex of D.exercises) {
    children.push(B.p(`${ex.numero}. Valiny (/${ex.score})`, {
      bold: true,
      size: 20,
      before: 90,
      after: 70,
    }));
    for (const answer of ex.answers) {
      children.push(B.correctedParagraph(answer, { size: 19, indent: { left: 300 } }));
    }
  }
  return children;
}

function sources() {
  return [
    B.bookmarkHeading('LOHARANOM-BAOVAO', 'loharano', {
      size: 30,
      color: B.COLORS.BLACK,
    }),
    B.p('1. Minisiteran’ny Fanabeazam-pirenena. Fandaharam-pibeazana T1, fizarana Malagasy, p. 9–17.', { size: 18 }),
    sourceLink('PE T1', 'https://github.com/J-Lab-Mdg/jlearn-pack/blob/main/PE%20RAPE/PE%20T1.pdf'),
    B.p('2. Minisiteran’ny Fanabeazam-pirenena. Répartition annuelle du programme d’études, classe de T1, andiany septambra 2026, p. 6–8.', { size: 18 }),
    sourceLink('RAPE T1', 'https://plateforme.education.mg/bibliotheque-numerique/theme/biblio/pix/pdf/RAPE_T1.pdf'),
    B.p('3. Rakibolana sy Rakipahalalana Malagasy : “anarana”, “i”, “teboka manontany”.', { size: 18 }),
    sourceLink('Tenymalagasy — anarana', 'https://tenymalagasy.org/bins/teny2/anarana'),
    sourceLink('Tenymalagasy — i', 'https://tenymalagasy.org/bins/teny2/i'),
    sourceLink('Tenymalagasy — teboka manontany', 'https://tenymalagasy.org/bins/teny2/teboka%20manontany?w=teboka+manontany'),
    B.p('4. Peace Corps Madagascar. An Introduction to the Malagasy Language, Lesona 1 : Malagasy Alphabet and Introductions.', { size: 18 }),
    sourceLink('Peace Corps Malagasy Language Lessons', 'https://files.peacecorps.gov/multimedia/audio/languagelessons/madagascar/MG_Malagasy_Language_Lessons.pdf'),
  ];
}

async function main() {
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });
  if (!fs.existsSync(IMAGE)) throw new Error(`Image redimensionnée absente : ${IMAGE}`);
  const imageBuffer = fs.readFileSync(IMAGE);

  const children = [
    ...cover(imageBuffer),
    B.pageBreak(),
    ...toc(),
    B.pageBreak(),
    B.bookmarkHeading('TAKELA-PANOMANAN-DESONA', 'fiche', {
      size: 29,
      color: B.COLORS.BLACK,
    }),
    B.metaTable(D.meta),
    B.p('', { after: 40 }),
    B.deroulementTable(D.steps),
    B.pageBreak(),
    ...lesson(imageBuffer),
    B.pageBreak(),
    ...exerciseSection(),
    B.pageBreak(),
    ...correctionSection(),
    B.pageBreak(),
    ...sources(),
  ];

  const doc = new Document({
    creator: 'J-Learn',
    title: 'Malagasy T1 — Takela-panomanan-desona',
    subject: 'Fanehoan-kevitra am-bava — Mampahafantatra ny tena sy ny hafa',
    keywords: 'J-Learn, Malagasy, T1, 11e, CP1',
    styles: {
      default: {
        document: {
          run: { font: B.FONT, size: 20, color: B.COLORS.BLACK },
          paragraph: { spacing: { line: 240, after: 60 } },
        },
        title: { run: { font: B.FONT } },
        heading1: { run: { font: B.FONT } },
        heading2: { run: { font: B.FONT } },
      },
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 11906, height: 16838 },
            margin: { top: 720, bottom: 720, left: 720, right: 720, header: 360, footer: 360 },
          },
        },
        footers: { default: B.footer() },
        children,
      },
    ],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT, buffer);
  console.log(`${OUTPUT} — ${buffer.length} octets`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
