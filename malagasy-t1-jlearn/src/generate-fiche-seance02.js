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
const D = require('./data-fiche-seance02');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'output', 'Fiche-Temoin-Malagasy-T1-SEHO02-CONFORME-SKILL-v18.docx');
const IMAGE = path.join(ROOT, 'assets', 'img_malagasy_t1_seance02.png');

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
    B.p('SEHO 2 / 9', {
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
    B.imageParagraph(imageBuffer, 560, 313, 'Mpianatra T1 mihaino resaka fampahafantarana'),
    B.p('Kilasy T1 / 11e / CP1 — Seho 2 / 9 — 20 minitra', {
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
  const dialogue = D.listeningText.map((line) => B.p(line, {
    size: 20,
    indent: { left: 300 },
    after: 50,
  }));

  return [
    B.lessonTitle('SOA SY KOTO MIFANKAHALALA', 'lesona'),
    B.imageParagraph(imageBuffer, 560, 313, 'Mpianatra T1 mihaino resaka fampahafantarana'),

    B.lessonSection('1. Mialohan’ny fihainoana'),
    B.highlightedParagraph([
      { text: 'Lohateny : “' },
      { text: 'Soa sy Koto mifankahalala.', highlight: true },
      { text: '”' },
    ]),
    B.p('Diniho ny sary sy ny lohateny. Vinanio izay mety horesahin’i Soa sy i Koto.', {
      size: 20,
      after: 80,
    }),

    B.lessonSection('2. Henoy ny resaka'),
    ...dialogue,

    B.lessonSection('3. Voambolana'),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'mihaino', highlight: true },
      { text: ' : manongilan-tsofina mba handre.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'mifankahalala', highlight: true },
      { text: ' : ny iray mahalala ny iray ary ilay faharoa koa mahalala ny voalohany.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'anarana', highlight: true },
      { text: ' : teny enti-milaza olona ka anavahana sy iantsoana azy.' },
    ]),

    B.lessonSection('4. Hevitra mivantana ao amin’ny resaka'),
    B.highlightedParagraph([
      { text: '• Ao ' },
      { text: 'an-dakilasy', highlight: true },
      { text: ' i Soa sy i Koto.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Tsy mbola mifankahalala', highlight: true },
      { text: ' izy roa.' },
    ]),
    B.highlightedParagraph([
      { text: '• Manontany i Soa hoe : “' },
      { text: 'Iza no anaranao?', highlight: true },
      { text: '”' },
    ]),
    B.highlightedParagraph([
      { text: '• Mamaly i Koto hoe : “' },
      { text: 'Koto no anarako.', highlight: true },
      { text: '”' },
    ]),

    B.lessonSection('5. Tadidio'),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Dinihina', highlight: true },
      { text: ' ny sary sy ny lohateny.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Vinavinaina', highlight: true },
      { text: ' ny votoatin’ny resaka.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Henoina tsara sy amim-pahanginana', highlight: true },
      { text: ' ny resaka.' },
    ]),
    B.highlightedParagraph([
      { text: '• ' },
      { text: 'Hamarinina', highlight: true },
      { text: ' ny vinavina aorian’ny fihainoana.' },
    ]),
  ];
}

function exerciseSection() {
  const children = [
    B.bookmarkHeading('FANAZARAN-TENA', 'fanazaran_tena', {
      size: 30,
      color: B.COLORS.BLACK,
    }),
    B.p('Fitambarany : 20', { bold: true, size: 20, alignment: 'right', after: 130 }),
    B.p('Henoy indray ny resaka vakin’ny mpampianatra, dia ataovy ireto fanazaran-tena ireto.', {
      size: 19,
      italics: true,
      after: 100,
    }),
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
    B.p('1. Minisiteran’ny Fanabeazam-pirenena. Fandaharam-pibeazana T1, fizarana Malagasy, p. 9–12.', { size: 18 }),
    sourceLink('PE T1', 'https://github.com/J-Lab-Mdg/jlearn-pack/blob/main/PE%20RAPE/PE%20T1.pdf'),
    B.p('2. Minisiteran’ny Fanabeazam-pirenena. Répartition annuelle du programme d’études, classe de T1, andiany septambra 2026, p. 6–8.', { size: 18 }),
    sourceLink('RAPE T1', 'https://plateforme.education.mg/bibliotheque-numerique/theme/biblio/pix/pdf/RAPE_T1.pdf'),
    B.p('3. Rakibolana sy Rakipahalalana Malagasy : “anarana”, “mihaino”, “mifankahalala”, “i”, “teboka manontany”.', { size: 18 }),
    sourceLink('Tenymalagasy — anarana', 'https://tenymalagasy.org/bins/teny2/anarana'),
    sourceLink('Tenymalagasy — mihaino', 'https://tenymalagasy.org/bins/teny2/mihaino'),
    sourceLink('Tenymalagasy — mifankahalala', 'https://tenymalagasy.org/bins/teny2/mifankahalala'),
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
    title: 'Malagasy T1 — Seho 2 — Takela-panomanan-desona',
    subject: 'Fahaiza-mihaino — Mihaino resaka fampahafantarana',
    keywords: 'J-Learn, Malagasy, T1, 11e, CP1, fahaiza-mihaino',
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
