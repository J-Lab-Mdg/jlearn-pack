const fs = require('fs');
const path = require('path');
const {
  AlignmentType,
  BorderStyle,
  Document,
  ExternalHyperlink,
  HeightRule,
  ImageRun,
  Packer,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  WidthType,
} = require('docx');

const B = require('./builders');

const ROOT = path.resolve(__dirname, '..');
const OUTPUT = path.join(ROOT, 'output', 'Santionany-Feno-Malagasy-T1-Safidy-C-Fiasanny-Teny-Asa-An-tsoratra-v1.docx');
const CLASS_IMAGE = path.join(ROOT, 'assets', 'img_malagasy_t1_optionc_temoinschool.png');
const LETTER_IMAGE = path.join(ROOT, 'assets', 'modely_litera_Rr_soraboky.png');
const RAW_URL = 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/refs/heads/arena/01a0f3c7-jlearn-pack/malagasy-t1-jlearn/output/Santionany-Feno-Malagasy-T1-Safidy-C-Fiasanny-Teny-Asa-An-tsoratra-v1.docx';

const C = {
  DARK: '173B35',
  GREEN: '2C8B70',
  GREEN_LIGHT: 'E6F2ED',
  BLUE: '2C6E9B',
  BLUE_LIGHT: 'DCEAF3',
  ORANGE: 'E17B38',
  ORANGE_LIGHT: 'FBE6D3',
  PURPLE: '73569C',
  PURPLE_LIGHT: 'EAE2F1',
  GOLD: 'E8B969',
  GOLD_LIGHT: 'FFF3D9',
  RED: 'C75E48',
  RED_LIGHT: 'FFF2EE',
  GREY: '527069',
  WHITE: 'FFFFFF',
  LINE: '85B4CA',
};

const none = { style: BorderStyle.NONE, size: 0, color: C.WHITE };
const noBorders = {
  top: none,
  bottom: none,
  left: none,
  right: none,
  insideHorizontal: none,
  insideVertical: none,
};

function pageBreak() {
  return B.pageBreak();
}

function p(value, options = {}) {
  return B.p(value, options);
}

function t(value, options = {}) {
  return B.text(value, options);
}

function title(value, color = C.DARK, size = 29) {
  return p(value, {
    bold: true,
    size,
    color,
    alignment: AlignmentType.CENTER,
    before: 30,
    after: 130,
    keepNext: true,
  });
}

function sectionTitle(value, color = C.GREEN) {
  return p(value, {
    bold: true,
    size: 24,
    color,
    before: 100,
    after: 80,
    keepNext: true,
  });
}

function supportBanner(label, subtitle, fill, color = C.WHITE) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: noBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            shading: { type: ShadingType.CLEAR, fill },
            margins: { top: 140, bottom: 140, left: 210, right: 210 },
            verticalAlign: VerticalAlign.CENTER,
            children: [
              p(label, { bold: true, size: 25, color, alignment: AlignmentType.CENTER, after: 20 }),
              p(subtitle, { bold: true, size: 16, color, alignment: AlignmentType.CENTER, after: 0 }),
            ],
          }),
        ],
      }),
    ],
  });
}

function box(children, options = {}) {
  const borderColor = options.borderColor || 'B9C9C3';
  const line = { style: BorderStyle.SINGLE, size: options.borderSize || 4, color: borderColor };
  return new Table({
    width: { size: options.width || 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: { top: line, bottom: line, left: line, right: line, insideHorizontal: none, insideVertical: none },
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            shading: options.fill ? { type: ShadingType.CLEAR, fill: options.fill } : undefined,
            margins: options.margins || { top: 150, bottom: 150, left: 190, right: 190 },
            children,
          }),
        ],
      }),
    ],
  });
}

function twoColumn(leftChildren, rightChildren, options = {}) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: noBorders,
    columnWidths: [options.left || 5000, options.right || 5000],
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          new TableCell({
            width: { size: options.left || 50, type: WidthType.PERCENTAGE },
            verticalAlign: VerticalAlign.TOP,
            borders: noBorders,
            margins: { top: 80, bottom: 80, left: 80, right: 120 },
            children: leftChildren,
          }),
          new TableCell({
            width: { size: options.right || 50, type: WidthType.PERCENTAGE },
            verticalAlign: VerticalAlign.TOP,
            borders: noBorders,
            margins: { top: 80, bottom: 80, left: 120, right: 80 },
            children: rightChildren,
          }),
        ],
      }),
    ],
  });
}

function labelValue(label, value, color = C.DARK) {
  return p([
    t(`${label} : `, { bold: true, size: 18, color }),
    t(value, { size: 18 }),
  ], { after: 55, line: 245 });
}

function image(buffer, width, height, altText, after = 100) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after },
    children: [
      new ImageRun({
        type: 'png',
        data: buffer,
        transformation: { width, height },
        altText: { title: altText, description: altText, name: altText },
      }),
    ],
  });
}

function wordCards(words) {
  return new Table({
    width: { size: 94, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    layout: TableLayoutType.FIXED,
    borders: noBorders,
    rows: [
      new TableRow({
        cantSplit: true,
        children: words.map((word, index) => new TableCell({
          width: { size: Math.floor(100 / words.length), type: WidthType.PERCENTAGE },
          shading: { type: ShadingType.CLEAR, fill: [C.BLUE_LIGHT, C.GREEN_LIGHT, C.ORANGE_LIGHT, C.PURPLE_LIGHT, C.GOLD_LIGHT][index % 5] },
          borders: {
            top: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
            bottom: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
            left: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
            right: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
          },
          margins: { top: 140, bottom: 140, left: 80, right: 80 },
          verticalAlign: VerticalAlign.CENTER,
          children: [p(word, { bold: true, size: 22, alignment: AlignmentType.CENTER, after: 0 })],
        })),
      }),
    ],
  });
}

function writingLines({ model = '', count = 3, modelColor = 'A6A6A6', height = 620, label = '' }) {
  const rows = [];
  if (label) {
    rows.push(new TableRow({
      cantSplit: true,
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: C.BLUE_LIGHT },
        borders: { top: none, left: none, right: none, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.LINE } },
        margins: { top: 90, bottom: 90, left: 140, right: 140 },
        children: [p(label, { bold: true, size: 17, color: C.BLUE, after: 0 })],
      })],
    }));
  }
  for (let i = 0; i < count; i += 1) {
    rows.push(new TableRow({
      cantSplit: true,
      height: { value: height, rule: HeightRule.ATLEAST },
      children: [new TableCell({
        verticalAlign: VerticalAlign.CENTER,
        borders: {
          top: none,
          left: { style: BorderStyle.SINGLE, size: 2, color: C.LINE },
          right: { style: BorderStyle.SINGLE, size: 2, color: C.LINE },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: C.LINE },
        },
        margins: { top: 50, bottom: 50, left: 150, right: 150 },
        children: [p(i === 0 ? model : '', {
          bold: false,
          size: 30,
          color: modelColor,
          after: 0,
          alignment: AlignmentType.LEFT,
        })],
      })],
    }));
  }
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    rows,
  });
}

function checklist(items, fill = C.GREEN_LIGHT) {
  return box(items.map((item) => p(`□  ${item}`, { size: 19, after: 55 })), {
    fill,
    borderColor: '9BC7B8',
  });
}

function sourceLink(label, url) {
  return p([
    t(`${label} — `, { bold: true, size: 16 }),
    new ExternalHyperlink({
      link: url,
      children: [new TextRun({
        text: url,
        font: B.FONT,
        size: 15,
        color: '0563C1',
        underline: {},
      })],
    }),
  ], { after: 55, line: 220 });
}

function teacherSteps() {
  return [
    B.stepRow({
      etape: 'I. FAMERENANA\n2 minitra',
      mpampianatra: [
        p('• Asehoy ny litera r ary anontanio : “Inona ity litera ity? Inona ny feony?”', { size: 15 }),
        p('• Ampahatsiahivo ny teboka : “Aiza no mifarana ny fehezanteny?”', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manonona ny litera r sy ny feony.', { size: 15 }),
        p('• Manondro ny teboka amin’ny fehezanteny modely.', { size: 15, after: 0 }),
      ],
      tetika: 'Fanontaniana arahim-baliny',
      fitaovana: 'Takela-teny',
    }),
    B.sectionRow('II. LESONA VAOVAO — 14 minitra'),
    B.stepRow({
      etape: 'ASEHOKO\n3 minitra',
      mpampianatra: [
        p('• Asehoy ny sary sy ny fehezanteny : “Mamaky boky i Rabe.”', { size: 15 }),
        p('• Lazao mafy ny eritreritra : “Rabe dia anaran’olona, ka R sorabaventy no anombohana azy. Teboka no mamarana ny fehezanteny.”', { size: 15 }),
        p('• Soraty miadana ny R sy r. Lazao ny fiandohana sy ny lalan-tsoratra.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Mandinika ny sary sy ny fehezanteny.', { size: 15 }),
        p('• Manaraka amin’ny masony ny lalan-tsoratra.', { size: 15 }),
        p('• Manonona hoe : “Rabe — R sorabaventy.”', { size: 15, after: 0 }),
      ],
      tetika: 'Asehoko',
      fitaovana: 'Bokin’ny mpianatra; lalan-tsoratra',
    }),
    B.stepRow({
      etape: 'MIARA-MANAO\n4 minitra',
      mpampianatra: [
        p('• Omeo ny takela-teny : Mamaky / boky / i / Rabe / .', { size: 15 }),
        p('• Tariho ny fandaminana azy ho fehezanteny.', { size: 15 }),
        p('• Tariho ny fanoritana R sy r eny amin’ny rivotra sy eo ambony latabatra.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Mandamina ny takela-teny.', { size: 15 }),
        p('• Mamaky miaraka : “Mamaky boky i Rabe.”', { size: 15 }),
        p('• Manoritra R sy r amin’ny rantsantanana.', { size: 15, after: 0 }),
      ],
      tetika: 'Miara-manao',
      fitaovana: 'Takela-teny; litera fanetsika',
    }),
    B.stepRow({
      etape: 'MANAO SAMIRERY\n7 minitra',
      mpampianatra: [
        p('• Sokafy ny Kahie fanazarana, Seho 1.', { size: 15 }),
        p('• Lazao tsirairay ny toromarika : araho R/r; fenoy Rabe; ahitsio ny fehezanteny.', { size: 15 }),
        p('• Mivezivezy. Jereo ny fiandohan-tsoratra, ny haben’ny litera, ny elanelan-teny ary ny teboka.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manoritra sy manoratra R/r.', { size: 15 }),
        p('• Mameno : …abe → Rabe.', { size: 15 }),
        p('• Manitsy : mamaky boky i rabe → Mamaky boky i Rabe.', { size: 15, after: 0 }),
      ],
      tetika: 'Manao samirery',
      fitaovana: 'Kahie fanazarana; pensilihazo',
    }),
    B.sectionRow('III. TOMBANA — 4 minitra'),
    B.stepRow({
      etape: 'TOMBANA\n4 minitra',
      mpampianatra: [
        p('• Asehoy : “mianatra i rabe”', { size: 15 }),
        p('• Lazao : “Ahitsio ary soraty araka ny tokony ho izy.”', { size: 15 }),
        p('• Angony ny valiny. Asio ✓, △ na ○ araka ny tondrom-panitsiana.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manoratra : “Mianatra i Rabe.”', { size: 15 }),
        p('• Manamarina ny sorabaventy sy ny teboka.', { size: 15, after: 0 }),
      ],
      tetika: 'Asa samirery',
      fitaovana: 'Kahie fanazarana',
    }),
  ];
}

async function main() {
  for (const required of [CLASS_IMAGE, LETTER_IMAGE]) {
    if (!fs.existsSync(required)) throw new Error(`Rakitra tsy hita : ${required}`);
  }
  const classImage = fs.readFileSync(CLASS_IMAGE);
  const letterImage = fs.readFileSync(LETTER_IMAGE);
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

  const children = [
    // PAGE 1 — COVER
    p('COLLECTION J-LEARN', { bold: true, size: 23, color: C.GREEN, alignment: AlignmentType.CENTER, after: 80 }),
    p('MALAGASY — T1', { bold: true, size: 42, color: C.DARK, alignment: AlignmentType.CENTER, after: 45 }),
    p('SANTIONANY FENO — SAFIDY C', { bold: true, size: 28, color: C.BLUE, alignment: AlignmentType.CENTER, after: 55 }),
    p('FIASAN’NY TENY SY ASA AN-TSORATRA', { bold: true, size: 25, color: C.ORANGE, alignment: AlignmentType.CENTER, after: 45 }),
    p('Herinandro faha-11 — Ny sekoly — Seho 1/9', { bold: true, size: 21, alignment: AlignmentType.CENTER, after: 120 }),
    image(classImage, 590, 329, 'Rabe mamaky boky ao an-dakilasy', 100),
    p('SORABAVENTY AMIN’NY ANARAN-TSAMIRERY • R / r • TEBOKA', {
      bold: true,
      size: 20,
      color: C.DARK,
      alignment: AlignmentType.CENTER,
      before: 90,
      after: 70,
    }),
    p('Bokin’ny mpianatra • Kahie fanazarana • Kahie tsotra • Torolalana ho an’ny mpampianatra', {
      size: 17,
      color: C.GREY,
      alignment: AlignmentType.CENTER,
      after: 0,
    }),

    // PAGE 2 — TOC
    pageBreak(),
    title('FIZAHAN-TAKILA'),
    supportBanner('A. BOKIN’NY MPIANATRA', 'Mijery • Mahatakatra • Mikirakira', C.BLUE),
    p('Pejy modely ho an’ny mpianatra : sary, fehezanteny, mari-pamantarana ary lalan-tsoratra.', { size: 18, after: 130 }),
    supportBanner('B. KAHIE FANAZARANA', 'Manoritra • Mameno • Manitsy • Manoratra', C.ORANGE),
    p('Pejy azo soratana mifanaraka amin’ny Herinandro faha-11 — Seho 1.', { size: 18, after: 130 }),
    supportBanner('C. KAHIE TSOTRA', 'Vokatry ny asa samirery ihany', C.GREEN),
    p('Ny litera, teny ary fehezanteny farany ihany no soratana; tsy misy lesona lava adika.', { size: 18, after: 130 }),
    supportBanner('D. TOROLALANA HO AN’NY MPAMPIANATRA', 'I. Famerenana • II. Lesona vaovao • III. Tombana', C.PURPLE),
    p('Dingana 20 minitra, valiny, tondrom-panitsiana, fanarenana ary fanamafisana isan-kerinandro.', { size: 18, after: 0 }),

    // PAGE 3 — PLANNING / SOURCES
    pageBreak(),
    title('TAKELA-PANOMANANA SY FIFANDRAISANA AMIN’NY PE/RAPE'),
    twoColumn([
      labelValue('Taranja', 'Malagasy'),
      labelValue('Zana-taranja', 'Fiasan’ny teny sy Asa an-tsoratra'),
      labelValue('Lohahevitra', 'Ny sekoly'),
      labelValue('Lohateny', 'Sorabaventy amin’ny anaran-tsamirery sy fanoratana R/r'),
      labelValue('Fahendrena voizina', 'Fitiavana ezaka, fikirizana, fahatokisan-tena, fizakantena'),
    ], [
      labelValue('Kilasy', 'T1 / 11e / CP1'),
      labelValue('Herinandro', 'Faha-11 — ohatra fitsinjarana ao amin’ny andiany 8–14'),
      labelValue('Seho', '1 / 9'),
      labelValue('Faharetany', '20 minitra'),
      labelValue('Fitaovana', 'Lalan-tsoratra, litera fanetsika, bokin’ny mpianatra, takela-teny, Kahie fanazarana'),
    ]),
    sectionTitle('Tanjona manokana', C.BLUE),
    box([
      p('Amin’ny fiafaran’ny seho, ny mpianatra dia mahavita :', { bold: true, size: 19 }),
      p('• mampiasa R sorabaventy amin’ny anaran-tsamirery Rabe;', { size: 19 }),
      p('• manoratra mazava ny R sy r ary ny teny Rabe;', { size: 19 }),
      p('• manitsy sy manoratra ny fehezanteny “Mamaky boky i Rabe.” amin’ny fanajana ny sorabaventy, ny elanelan-teny ary ny teboka.', { size: 19, after: 0 }),
    ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    sectionTitle('Fanamarinana ny loharano ôfisialy', C.GREEN),
    p('• PE T1, p. 9 : mandritra ny Asa an-tsoratra no ianarana ny Fiasan’ny teny.', { size: 17 }),
    p('• PE T1, p. 15 : famakafakana modely → fampiharana → fanamafisana; sorabaventy amin’ny anaran-tsamirery sy mari-piatoana.', { size: 17 }),
    p('• PE T1, p. 16–17 : fanoratana litera, teny sy fehezanteny; famenoana, fandaminana, fanononana ary lahatsoratra iray na roa fehezanteny.', { size: 17 }),
    p('• RAPE T1, p. 9–11 : andiany herinandro 8–14; soramadinika sy sorabaventy soraboky; mari-piatoana; anaran-tsamirery.', { size: 17, after: 60 }),
    p('Fanamarihana : ny RAPE dia manome andiany fa ny ekipa pedagojika no manao ny fitsinjarana isan-kerinandro. Ity Herinandro faha-11 ity dia ohatra fampiharana mifanaraka amin’izany.', { italics: true, size: 16, color: C.GREY, after: 0 }),

    // PAGE 4 — PUPIL BOOK MODEL
    pageBreak(),
    supportBanner('A. BOKIN’NY MPIANATRA', 'Herinandro faha-11 • Ny sekoly • Seho 1', C.BLUE),
    title('DINIHO NY SARY', C.BLUE, 27),
    image(classImage, 600, 335, 'Rabe mamaky boky ao an-dakilasy', 110),
    box([
      p('Mamaky boky i Rabe.', { bold: true, size: 34, color: C.DARK, alignment: AlignmentType.CENTER, after: 70 }),
      p([
        t('M', { bold: true, size: 20, color: C.BLUE }),
        t(' no manomboka ny fehezanteny.  ', { size: 19 }),
        t('R', { bold: true, size: 20, color: C.ORANGE }),
        t(' no manomboka ny anaran’olona.  ', { size: 19 }),
        t('.', { bold: true, size: 22, color: C.RED }),
        t(' no mamarana azy.', { size: 19 }),
      ], { alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
    sectionTitle('Lazao am-bava', C.GREEN),
    twoColumn([
      box([
        p('1. Iza no mamaky boky?', { bold: true, size: 20, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    ], [
      box([
        p('2. Inona no ataon’i Rabe?', { bold: true, size: 20, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.ORANGE_LIGHT, borderColor: 'E5A06D' }),
    ]),

    // PAGE 5 — PUPIL BOOK LANGUAGE + WRITING MODEL
    pageBreak(),
    supportBanner('A. BOKIN’NY MPIANATRA', 'Fiasan’ny teny sy modelin’ny Asa an-tsoratra', C.BLUE),
    sectionTitle('1. FIASAN’NY TENY — Diniho', C.BLUE),
    twoColumn([
      box([
        p('mamaky boky i rabe', { size: 24, alignment: AlignmentType.CENTER, after: 45 }),
        p('Tsy mbola voasoratra tsara.', { bold: true, size: 17, color: C.RED, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.RED_LIGHT, borderColor: 'E1A696' }),
    ], [
      box([
        p('Mamaky boky i Rabe.', { bold: true, size: 24, color: C.GREEN, alignment: AlignmentType.CENTER, after: 45 }),
        p('Voasoratra tsara.', { bold: true, size: 17, color: C.GREEN, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
    ]),
    p('Tondroy ny sorabaventy roa sy ny teboka.', { bold: true, size: 20, alignment: AlignmentType.CENTER, before: 60, after: 100 }),
    sectionTitle('2. MIARA-MANDAMINA', C.GREEN),
    wordCards(['Mamaky', 'boky', 'i', 'Rabe', '.']),
    p('Alaharo ireo takela-teny. Vakio ny fehezanteny voaforona.', { size: 18, alignment: AlignmentType.CENTER, before: 65, after: 120 }),
    sectionTitle('3. ASA AN-TSORATRA — Jereo ny lalan-tsoratra', C.ORANGE),
    image(letterImage, 650, 241, 'Lalan-tsoratra ho an’ny R sy r soraboky', 45),
    p('Soraty eny amin’ny rivotra aloha. Avy eo, sokafy ny Kahie fanazarana.', { bold: true, size: 18, color: C.GREY, alignment: AlignmentType.CENTER, after: 0 }),

    // PAGE 6 — PRACTICE BOOK
    pageBreak(),
    supportBanner('B. KAHIE FANAZARANA', 'Herinandro faha-11 • Seho 1 • Pejy azo soratana', C.ORANGE),
    sectionTitle('1. Araho. Avy eo manorata samirery.', C.ORANGE),
    writingLines({
      label: 'R sorabaventy',
      model: 'R     R     R     R     R',
      count: 3,
      modelColor: 'B8B8B8',
      height: 600,
    }),
    p('', { after: 65 }),
    writingLines({
      label: 'r soramadinika',
      model: 'r     r     r     r     r',
      count: 3,
      modelColor: 'B8B8B8',
      height: 600,
    }),
    sectionTitle('2. Fenoy ary soraty.', C.ORANGE),
    p('…abe  →  ________________________________', { bold: true, size: 25, alignment: AlignmentType.CENTER, after: 90 }),
    sectionTitle('3. Ahitsio ary soraty.', C.ORANGE),
    p('mamaky boky i rabe', { size: 23, color: C.RED, alignment: AlignmentType.CENTER, after: 60 }),
    writingLines({ model: '', count: 2, height: 640 }),

    // PAGE 7 — MICRO ASSESSMENT
    pageBreak(),
    supportBanner('B. KAHIE FANAZARANA', 'III. TOMBANA • 4 minitra', C.ORANGE),
    title('ASEHOY IZAY HAINAO', C.ORANGE, 27),
    box([
      p('mianatra i rabe', { size: 29, color: C.RED, alignment: AlignmentType.CENTER, after: 75 }),
      p('Ahitsio ary soraty araka ny tokony ho izy.', { bold: true, size: 20, alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: C.GOLD_LIGHT, borderColor: 'D8B16D' }),
    p('', { after: 90 }),
    writingLines({ model: '', count: 3, height: 760, label: 'Valiny' }),
    sectionTitle('Manamarina aho', C.GREEN),
    checklist([
      'Sorabaventy no manomboka ny fehezanteny.',
      'Sorabaventy no manomboka ny anaran’olona Rabe.',
      'Misy teboka eo amin’ny farany.',
      'Mazava, milamina ary misy elanelana ny soratro.',
    ]),
    p('Anaran’ny mpianatra : ____________________________    Daty : __________________', { size: 17, before: 120, after: 0 }),

    // PAGE 8 — ORDINARY NOTEBOOK
    pageBreak(),
    supportBanner('C. ASA AO ANATY KAHIE TSOTRA', 'Ny vokatra samirery ihany no soratana', C.GREEN),
    title('IZAO IHANY NO SORATANA AO ANATY KAHIE', C.GREEN, 26),
    box([
      p('R     r', { bold: true, size: 34, color: C.BLUE, alignment: AlignmentType.CENTER, after: 100 }),
      p('Rabe', { bold: true, size: 32, color: C.ORANGE, alignment: AlignmentType.CENTER, after: 100 }),
      p('Mamaky boky i Rabe.', { bold: true, size: 29, color: C.DARK, alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: 'F8FBF9', borderColor: '8FBBAA', margins: { top: 270, bottom: 270, left: 220, right: 220 } }),
    sectionTitle('Filaharana', C.BLUE),
    p('1. Andalana iray : R sy r.', { size: 20 }),
    p('2. Teny : Rabe.', { size: 20 }),
    p('3. Fehezanteny : Mamaky boky i Rabe.', { size: 20, after: 120 }),
    box([
      p('TSY ADIKA AO ANATY KAHIE', { bold: true, size: 22, color: C.RED, alignment: AlignmentType.CENTER, after: 70 }),
      p('• ny tanjona sy ny toromarika;', { size: 19 }),
      p('• ny fanazavana lava;', { size: 19 }),
      p('• ny lesona na fitsipika efa hita ao amin’ny boky;', { size: 19, after: 0 }),
    ], { fill: C.RED_LIGHT, borderColor: 'E1A696' }),
    p('Ny mpampianatra no manapa-kevitra raha ny Kahie fanazarana ihany no ampiasaina mandritra ny seho, ary ny fehezanteny farany no afindra ao amin’ny kahie tsotra.', { italics: true, size: 17, color: C.GREY, before: 120, after: 0 }),

    // PAGE 9 — TEACHER GUIDE META
    pageBreak(),
    supportBanner('D. TOROLALANA HO AN’NY MPAMPIANATRA', 'Takela-panomanan-desona feno • 20 minitra', C.PURPLE),
    title('FIASAN’NY TENY SY ASA AN-TSORATRA', C.PURPLE, 27),
    B.metaTable({
      taranja: 'Malagasy',
      zanaTaranja: 'Fiasan’ny teny sy Asa an-tsoratra',
      lohahevitra: 'Ny sekoly',
      lohateny: 'Sorabaventy amin’ny anaran-tsamirery sy fanoratana R/r',
      tanjona: 'Mampiasa R sorabaventy amin’ny anaran-tsamirery; manoratra R/r sy Rabe; manitsy fehezanteny misy teboka.',
      fanovozanKevitra: 'PE T1 p. 9 sy p. 15–17; RAPE T1 p. 9–11',
      fitaovana: 'Lalan-tsoratra, litera fanetsika, bokin’ny mpianatra, takela-teny, Kahie fanazarana',
      kilasy: 'T1 / 11e / CP1',
      seho: '1 / 9',
      faharetany: '20 minitra',
    }),
    sectionTitle('Fepetra hahombiazana', C.GREEN),
    checklist([
      'R sorabaventy no anombohan’ny anaran-tsamirery Rabe.',
      'M sorabaventy no manomboka ny fehezanteny.',
      'Teboka no mamarana ny fehezanteny.',
      'Mazava, hay vakina ary misy elanelana ny soratra.',
    ], C.PURPLE_LIGHT),
    sectionTitle('Fandaminana ny fotoana', C.BLUE),
    wordCards(['I. 2 min', 'Asehoko 3 min', 'Miara-manao 4 min', 'Samirery 7 min', 'III. 4 min']),
    p('Fitambarany : 20 minitra', { bold: true, size: 19, alignment: AlignmentType.CENTER, before: 70, after: 0 }),

    // PAGE 10+ — TEACHER SCRIPT
    pageBreak(),
    title('FIZOTRY NY LESONA — TENY HO LAZAIN’NY MPAMPIANATRA', C.PURPLE, 25),
    B.deroulementTable(teacherSteps()),

    // CORRECTION / REMEDIATION
    pageBreak(),
    supportBanner('D. TOROLALANA HO AN’NY MPAMPIANATRA', 'Valiny • Tondrom-panitsiana • Fanarenana', C.PURPLE),
    sectionTitle('1. Valiny andrasana', C.GREEN),
    box([
      p('Kahie fanazarana — Fanazaran-tena', { bold: true, size: 19, color: C.ORANGE }),
      p('• …abe → Rabe', { size: 20 }),
      p('• mamaky boky i rabe → Mamaky boky i Rabe.', { size: 20 }),
      p('Tombana — Valiny', { bold: true, size: 19, color: C.PURPLE, before: 70 }),
      p('• mianatra i rabe → Mianatra i Rabe.', { bold: true, size: 21, color: C.GREEN, after: 0 }),
    ], { fill: 'F8FBF9', borderColor: '9BC7B8' }),
    sectionTitle('2. Tondrom-panitsiana haingana', C.BLUE),
    twoColumn([
      box([
        p('✓ MAHAFEHY', { bold: true, size: 21, color: C.GREEN, alignment: AlignmentType.CENTER }),
        p('Marina ny M, R ary teboka; mazava ny soratra.', { size: 18, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
      p('', { after: 45 }),
      box([
        p('△ EO AN-DALAM-PIFEHEZANA', { bold: true, size: 18, color: 'A36A10', alignment: AlignmentType.CENTER }),
        p('Marina ny roa amin’ireo mari-pamantarana telo.', { size: 18, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GOLD_LIGHT, borderColor: 'D8B16D' }),
    ], [
      box([
        p('○ MILA FANOHANANA', { bold: true, size: 20, color: C.RED, alignment: AlignmentType.CENTER }),
        p('Marina ny iray na tsy mbola misy marina.', { size: 18, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.RED_LIGHT, borderColor: 'E1A696' }),
      p('', { after: 45 }),
      box([
        p('FANAMARIHANA', { bold: true, size: 19, color: C.BLUE, alignment: AlignmentType.CENTER }),
        p('Aza ahitsy miaraka ny lesoka rehetra. Lesoka iray mazava no averina aloha.', { size: 18, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    ]),
    sectionTitle('3. Fanarenana avy hatrany', C.RED),
    p('• Raha r no soratana amin’ny Rabe : ampitahao Rabe sy rabe; tariho indray ny fanombohana amin’ny R.', { size: 18 }),
    p('• Raha tsy misy teboka : vakio mafy ny fehezanteny; ajanony ny feo eo amin’ny farany; apetraho ny teboka.', { size: 18 }),
    p('• Raha tsy mazava ny R : avereno amin’ny rantsantanana eny amin’ny rivotra, avy eo amin’ny lalan-tsoratra lehibe.', { size: 18 }),
    p('• Raha mikorontana ny teny : avereno alamina ny takela-teny vao soratana indray.', { size: 18, after: 0 }),

    // WEEKLY CONSOLIDATION PUPIL PAGE
    pageBreak(),
    supportBanner('E. FANAMAFISANA ISAN-KERINANDRO', 'Fiasan’ny teny sy Asa an-tsoratra • Pejy azo soratana', C.DARK),
    sectionTitle('1. Asio ✓ eo amin’ny fehezanteny voasoratra tsara.', C.BLUE),
    p('□ mamaky boky i Rabe     □ Mamaky boky i rabe.     □ Mamaky boky i Rabe.', { size: 20, after: 100 }),
    sectionTitle('2. Ahitsio.', C.ORANGE),
    p('mianatra i rabe', { size: 22, color: C.RED, alignment: AlignmentType.CENTER, after: 55 }),
    writingLines({ model: '', count: 1, height: 620 }),
    sectionTitle('3. Alaharo ary soraty.', C.GREEN),
    wordCards(['i Rabe', 'Mamaky', 'boky', '.']),
    p('', { after: 55 }),
    writingLines({ model: '', count: 1, height: 620 }),
    sectionTitle('4. Fenoy.', C.ORANGE),
    p('…abe mamaky boky.        Mamaky boky i …abe.', { size: 22, alignment: AlignmentType.CENTER, after: 90 }),
    sectionTitle('5. Soraty izay tononin’ny mpampianatra.', C.PURPLE),
    writingLines({ model: '', count: 2, height: 620 }),
    sectionTitle('6. Mamoròna fehezanteny iray momba ny sary.', C.GREEN),
    p('Teny azo ampiasaina : Rabe • mianatra • mamaky • boky', { size: 18, color: C.GREY, alignment: AlignmentType.CENTER, after: 55 }),
    writingLines({ model: '', count: 2, height: 620 }),

    // WEEKLY CORRECTION / SOURCES
    pageBreak(),
    supportBanner('F. VALINY SY FANAMARINANA', 'Fanamafisana isan-kerinandro', C.DARK),
    sectionTitle('Valiny', C.GREEN),
    p('1. ✓ Mamaky boky i Rabe.', { size: 20 }),
    p('2. Mianatra i Rabe.', { size: 20 }),
    p('3. Mamaky boky i Rabe.', { size: 20 }),
    p('4. Rabe mamaky boky. / Mamaky boky i Rabe.', { size: 20 }),
    p('5. Tononina miadana : “Rabe” ; avy eo : “Mamaky boky i Rabe.”', { size: 20 }),
    p('6. Valiny ekena raha fehezanteny feno, mifandray amin’ny sary, manomboka amin’ny sorabaventy ary mifarana amin’ny teboka.', { size: 20, after: 120 }),
    sectionTitle('Mari-pandrefesana — 10 isa', C.BLUE),
    p('• Sorabaventy amin’ny fiandohan’ny fehezanteny : 2 isa', { size: 18 }),
    p('• Sorabaventy amin’ny anaran-tsamirery : 2 isa', { size: 18 }),
    p('• Teboka : 2 isa', { size: 18 }),
    p('• Filaharan-teny sy elanelan-teny : 2 isa', { size: 18 }),
    p('• Soratra mazava sy hay vakina : 2 isa', { size: 18, after: 120 }),
    sectionTitle('Loharanom-panamarinana', C.PURPLE),
    p('1. Fandaharam-pibeazana T1 — Malagasy, pejy 9 sy 15–17.', { size: 17 }),
    p('2. RAPE T1 — Andiany herinandro faha-8 ka hatramin’ny faha-14, pejy 9–11.', { size: 17 }),
    sourceLink('RAPE T1 — sehatra ôfisialin’ny Minisiteran’ny Fanabeazam-pirenena', 'https://plateforme.education.mg/bibliotheque-numerique/theme/biblio/pix/pdf/RAPE_T1.pdf'),
    p('3. Ny sary dia novokarina manokana ho an’ity santionany ity; tsy misy soratra na valiny miafina ao anatiny.', { size: 17, after: 90 }),
    sourceLink('Rohy RAW an’ity DOCX ity', RAW_URL),
    box([
      p('FANAMARINANA FARANY', { bold: true, size: 21, color: C.GREEN, alignment: AlignmentType.CENTER }),
      p('✓ Safidy C ampiharina amin’ny sehatra efatra.', { size: 18 }),
      p('✓ Misy asa isaky ny seho ilaina sy fanamafisana isan-kerinandro.', { size: 18 }),
      p('✓ Voatahiry ny rafitra I / II / III sy ny 20 minitra.', { size: 18 }),
      p('✓ Tsy misy lesona lava takiana hadika ao anaty kahie.', { size: 18, after: 0 }),
    ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
  ];

  const doc = new Document({
    creator: 'J-Learn',
    title: 'Témoin complet Malagasy T1 — Option C — Fiasan’ny teny sy Asa an-tsoratra',
    subject: 'Sorabaventy amin’ny anaran-tsamirery, mari-piatoana ary fanoratana R/r',
    keywords: 'J-Learn, Malagasy, T1, Option C, Fiasan’ny teny, Asa an-tsoratra, Rabe, R',
    description: 'Témoin complet réparti entre le manuel élève, le cahier d’exercices, le cahier ordinaire et le guide enseignant.',
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
            margin: { top: 650, bottom: 650, left: 680, right: 680, header: 300, footer: 330 },
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
