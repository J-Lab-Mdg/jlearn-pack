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
const OUTPUT = path.join(ROOT, 'output', 'Santionany-Feno-Malagasy-T1-Safidy-C-Rr-v2.docx');
const SCENE = path.join(ROOT, 'assets', 'img_malagasy_t1_Rr_mots_cibles.png');
const LETTER_MODEL = path.join(ROOT, 'assets', 'modely_litera_Rr_soraboky.png');
const FADING_MODEL = path.join(ROOT, 'assets', 'fanazaran-tena_Rr_modely_teboteboka.png');
const RAW_URL = 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/refs/heads/arena/01a0f3c7-jlearn-pack/malagasy-t1-jlearn/output/Santionany-Feno-Malagasy-T1-Safidy-C-Rr-v2.docx';

const C = {
  DARK: '173B35', GREEN: '2C8B70', GREEN_LIGHT: 'E6F2ED',
  BLUE: '2C6E9B', BLUE_LIGHT: 'DCEAF3', ORANGE: 'E17B38',
  ORANGE_LIGHT: 'FBE6D3', PURPLE: '73569C', PURPLE_LIGHT: 'EAE2F1',
  GOLD: 'E8B969', GOLD_LIGHT: 'FFF3D9', RED: 'C75E48', RED_LIGHT: 'FFF2EE',
  GREY: '527069', WHITE: 'FFFFFF', LINE: '85B4CA',
};
const none = { style: BorderStyle.NONE, size: 0, color: C.WHITE };
const noBorders = { top: none, bottom: none, left: none, right: none, insideHorizontal: none, insideVertical: none };

function p(value = '', options = {}) { return B.p(value, options); }
function t(value, options = {}) { return B.text(value, options); }
function pageBreak() { return B.pageBreak(); }

function title(value, color = C.DARK, size = 30, after = 120) {
  return p(value, {
    bold: true, size, color, alignment: AlignmentType.CENTER,
    before: 20, after, keepNext: true,
  });
}

function sectionTitle(value, color = C.GREEN, size = 24) {
  return p(value, { bold: true, size, color, before: 90, after: 70, keepNext: true });
}

function image(buffer, width, height, altText, after = 90) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after },
    children: [new ImageRun({
      type: 'png', data: buffer, transformation: { width, height },
      altText: { title: altText, description: altText, name: altText },
    })],
  });
}

function box(children, options = {}) {
  const line = { style: BorderStyle.SINGLE, size: options.borderSize || 4, color: options.borderColor || 'B9C9C3' };
  return new Table({
    width: { size: options.width || 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: { top: line, bottom: line, left: line, right: line, insideHorizontal: none, insideVertical: none },
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        shading: options.fill ? { type: ShadingType.CLEAR, fill: options.fill } : undefined,
        margins: options.margins || { top: 140, bottom: 140, left: 180, right: 180 },
        children,
      })],
    })],
  });
}

function twoColumn(left, right, options = {}) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: noBorders,
    columnWidths: [options.left || 5000, options.right || 5000],
    rows: [new TableRow({
      cantSplit: true,
      children: [
        new TableCell({
          width: { size: options.leftPercent || 50, type: WidthType.PERCENTAGE },
          borders: noBorders, verticalAlign: VerticalAlign.TOP,
          margins: { top: 60, bottom: 60, left: 50, right: 100 }, children: left,
        }),
        new TableCell({
          width: { size: options.rightPercent || 50, type: WidthType.PERCENTAGE },
          borders: noBorders, verticalAlign: VerticalAlign.TOP,
          margins: { top: 60, bottom: 60, left: 100, right: 50 }, children: right,
        }),
      ],
    })],
  });
}

function wordCards(words) {
  return new Table({
    width: { size: 94, type: WidthType.PERCENTAGE },
    alignment: AlignmentType.CENTER,
    layout: TableLayoutType.FIXED,
    borders: noBorders,
    rows: [new TableRow({
      cantSplit: true,
      children: words.map((word, i) => new TableCell({
        shading: { type: ShadingType.CLEAR, fill: [C.BLUE_LIGHT, C.GREEN_LIGHT, C.ORANGE_LIGHT, C.PURPLE_LIGHT, C.GOLD_LIGHT][i % 5] },
        borders: {
          top: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
          left: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
          right: { style: BorderStyle.SINGLE, size: 4, color: '9BB9AE' },
        },
        margins: { top: 125, bottom: 125, left: 60, right: 60 },
        verticalAlign: VerticalAlign.CENTER,
        children: [p(word, { bold: true, size: 21, alignment: AlignmentType.CENTER, after: 0 })],
      })),
    })],
  });
}

function writingLines({ count = 2, label = '', height = 650 }) {
  const rows = [];
  if (label) {
    rows.push(new TableRow({
      cantSplit: true,
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: C.BLUE_LIGHT },
        borders: { top: none, left: none, right: none, bottom: { style: BorderStyle.SINGLE, size: 4, color: C.LINE } },
        margins: { top: 80, bottom: 80, left: 130, right: 130 },
        children: [p(label, { bold: true, size: 17, color: C.BLUE, after: 0 })],
      })],
    }));
  }
  for (let i = 0; i < count; i += 1) {
    rows.push(new TableRow({
      cantSplit: true, height: { value: height, rule: HeightRule.ATLEAST },
      children: [new TableCell({
        borders: {
          top: none,
          left: { style: BorderStyle.SINGLE, size: 2, color: C.LINE },
          right: { style: BorderStyle.SINGLE, size: 2, color: C.LINE },
          bottom: { style: BorderStyle.SINGLE, size: 4, color: C.LINE },
        },
        margins: { top: 40, bottom: 40, left: 130, right: 130 },
        children: [p('', { after: 0 })],
      })],
    }));
  }
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, rows });
}

function labelValue(label, value) {
  return p([t(`${label} : `, { bold: true, size: 17 }), t(value, { size: 17 })], { after: 45, line: 225 });
}

function guideBanner(subtitle) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE }, borders: noBorders,
    rows: [new TableRow({
      cantSplit: true,
      children: [new TableCell({
        shading: { type: ShadingType.CLEAR, fill: C.PURPLE },
        margins: { top: 125, bottom: 125, left: 180, right: 180 },
        children: [
          p('TOROLALANA HO AN’NY MPAMPIANATRA', { bold: true, size: 24, color: C.WHITE, alignment: AlignmentType.CENTER, after: 15 }),
          p(subtitle, { bold: true, size: 16, color: C.WHITE, alignment: AlignmentType.CENTER, after: 0 }),
        ],
      })],
    })],
  });
}

function checklist(items, fill = C.GREEN_LIGHT) {
  return box(items.map((item) => p(`□  ${item}`, { size: 18, after: 45 })), { fill, borderColor: '9BC7B8' });
}

function sourceLink(label, url) {
  return p([
    t(`${label} — `, { bold: true, size: 16 }),
    new ExternalHyperlink({
      link: url,
      children: [new TextRun({ text: url, font: B.FONT, size: 14, color: '0563C1', underline: {} })],
    }),
  ], { after: 50, line: 215 });
}

function teacherSteps() {
  return [
    B.stepRow({
      etape: 'I. FAMERENANA\n2 minitra',
      mpampianatra: [
        p('• Asehoy ny sary. Ampahafantaro am-bava fa Rabe ilay zazalahy ary Rasoa ilay zazavavy.', { size: 15 }),
        p('• Anontanio : “Inona avy ireo teny manomboka amin’ny feo r?” Tariho amin’ny Rabe, Rasoa, rano, ravina, raozy, radio.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Mitady sy manonona ireo teny ao amin’ny sary.', { size: 15 }),
        p('• Manalava ny feo voalohany : rrrrano, rrrravina…', { size: 15, after: 0 }),
      ],
      tetika: 'Fanontaniana arahim-baliny',
      fitaovana: 'Sary',
    }),
    B.sectionRow('II. LESONA VAOVAO — 14 minitra'),
    B.stepRow({
      etape: 'ASEHOKO\n3 minitra',
      mpampianatra: [
        p('• Asehoy ny R sy r. Lazao : “Mitovy feo izy roa; R sorabaventy, r soramadinika.”', { size: 15 }),
        p('• Soraty miadana ny R sy r. Lazao ny fiandohana sy ny lalan-tsoratra.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Mandinika ny modely.', { size: 15 }),
        p('• Manaraka amin’ny masony sy ny rantsantanana ny lalan-tsoratra.', { size: 15, after: 0 }),
      ],
      tetika: 'Asehoko',
      fitaovana: 'Lalan-tsoratra; litera fanetsika',
    }),
    B.stepRow({
      etape: 'MIARA-MANAO\n4 minitra',
      mpampianatra: [
        p('• Tariho ny fanoritana R sy r eny amin’ny rivotra.', { size: 15 }),
        p('• Ampitahao : “misotro rano i rabe” sy “Misotro rano i Rabe.”', { size: 15 }),
        p('• Anontanio : “Inona no niova?” Tariho hamoaka ny sorabaventy sy ny teboka.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manoritra miaraka R sy r.', { size: 15 }),
        p('• Manondro M, r, R ary ny teboka.', { size: 15 }),
        p('• Milaza ny fitsipika amin’ny teniny.', { size: 15, after: 0 }),
      ],
      tetika: 'Miara-manao',
      fitaovana: 'Boky; takela-teny',
    }),
    B.stepRow({
      etape: 'MANAO SAMIRERY\n7 minitra',
      mpampianatra: [
        p('• Tariho amin’ny filaharana : Araho → Tohizo → Soraty samirery.', { size: 15 }),
        p('• Asaivo mameno R na r : i …akoto; ny …onono; ny o…ana; i …asoa.', { size: 15 }),
        p('• Mivezivezy. Jereo ny fiandohan-tsoratra, ny haben’ny litera ary ny fipetrany eo amin’ny tsipika.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manaraka ireo litera teboka.', { size: 15 }),
        p('• Manohy eo amin’ny toerana banga.', { size: 15 }),
        p('• Manoratra samirery ary mameno R na r.', { size: 15, after: 0 }),
      ],
      tetika: 'Manao samirery',
      fitaovana: 'Pejy fanazaran-tena; pensilihazo',
    }),
    B.sectionRow('III. TOMBANA — 4 minitra'),
    B.stepRow({
      etape: 'TOMBANA\n4 minitra',
      mpampianatra: [
        p('• Tondroy ny asa farany amin’ny pejy fanazaran-tena : “misotro rano i rakoto”.', { size: 15 }),
        p('• Lazao : “Ahitsio ary soraty araka ny tokony ho izy.”', { size: 15 }),
        p('• Hamarino amin’ny mari-pandrefesana efatra.', { size: 15, after: 0 }),
      ],
      mpianatra: [
        p('• Manoratra : “Misotro rano i Rakoto.”', { size: 15 }),
        p('• Manamarina M, r, R ary teboka.', { size: 15, after: 0 }),
      ],
      tetika: 'Asa samirery',
      fitaovana: 'Pejy fanazaran-tena',
    }),
  ];
}

async function main() {
  for (const file of [SCENE, LETTER_MODEL, FADING_MODEL]) {
    if (!fs.existsSync(file)) throw new Error(`Rakitra tsy hita : ${file}`);
  }
  const scene = fs.readFileSync(SCENE);
  const letterModel = fs.readFileSync(LETTER_MODEL);
  const fadingModel = fs.readFileSync(FADING_MODEL);
  fs.mkdirSync(path.dirname(OUTPUT), { recursive: true });

  const children = [
    // 1 — COVER
    p('COLLECTION J-LEARN', { bold: true, size: 22, color: C.GREEN, alignment: AlignmentType.CENTER, after: 75 }),
    p('MALAGASY — T1', { bold: true, size: 40, color: C.DARK, alignment: AlignmentType.CENTER, after: 35 }),
    p('SANTIONANY FENO — SAFIDY C', { bold: true, size: 27, color: C.BLUE, alignment: AlignmentType.CENTER, after: 45 }),
    p('R/r', { bold: true, size: 48, color: C.ORANGE, alignment: AlignmentType.CENTER, after: 35 }),
    p('ASA AN-TSORATRA — ampidirina ao ny FIASAN’NY TENY', { bold: true, size: 21, alignment: AlignmentType.CENTER, after: 50 }),
    p('Herinandro faha-11 • Ny sekoly • Seho 1/9 • 20 minitra', { size: 18, color: C.GREY, alignment: AlignmentType.CENTER, after: 110 }),
    image(scene, 600, 335, 'Rabe sy Rasoa miaraka amin’ny rano, ravina, raozy ary radio', 95),
    p('Modely → Teboteboka → Tohizana → Soratana samirery', { bold: true, size: 19, color: C.GREEN, alignment: AlignmentType.CENTER, after: 55 }),
    p('Sorabaventy • Soramadinika • Anaran-tsamirery • Teboka', { size: 17, color: C.GREY, alignment: AlignmentType.CENTER, after: 0 }),

    // 2 — PUPIL PAGE: IMAGE + WRITING
    pageBreak(),
    title('R/r', C.DARK, 40, 75),
    image(scene, 620, 346, 'Rabe sy Rasoa miaraka amin’ny zavatra manomboka amin’ny feo r', 65),
    box([
      p('Inona avy ireo teny manomboka amin’ny feo r hita amin’ny sary?', { bold: true, size: 22, color: C.BLUE, alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    sectionTitle('Fanoratana ny R/r', C.ORANGE, 25),
    image(letterModel, 620, 230, 'Modelin’ny lalan-tsoratra R sy r', 30),

    // 3 — PUPIL PAGE: SENTENCE + RULE
    pageBreak(),
    title('R/r', C.DARK, 38, 50),
    sectionTitle('Fehezanteny', C.BLUE, 27),
    twoColumn([
      box([
        p('misotro rano i rabe', { size: 25, alignment: AlignmentType.CENTER, after: 45 }),
        p('Tsy mbola voasoratra tsara.', { bold: true, size: 17, color: C.RED, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.RED_LIGHT, borderColor: 'E1A696' }),
    ], [
      box([
        p('Misotro rano i Rabe.', { bold: true, size: 25, color: C.GREEN, alignment: AlignmentType.CENTER, after: 45 }),
        p('Voasoratra tsara.', { bold: true, size: 17, color: C.GREEN, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
    ]),
    p('Inona no niova?', { bold: true, size: 23, color: C.PURPLE, alignment: AlignmentType.CENTER, before: 70, after: 80 }),
    wordCards(['M', 'r', 'R', '.']),
    p('Tondroy ny M, r, R ary ny teboka ao amin’ny fehezanteny.', { size: 19, alignment: AlignmentType.CENTER, before: 65, after: 100 }),
    box([
      p('TSAROVY', { bold: true, size: 22, color: C.ORANGE, alignment: AlignmentType.CENTER, after: 65 }),
      p('Sorabaventy no manomboka ny fehezanteny sy ny anaran’olona.', { bold: true, size: 21, alignment: AlignmentType.CENTER }),
      p('Teboka no mamarana ny fehezanteny.', { bold: true, size: 21, alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: C.GOLD_LIGHT, borderColor: 'D8B16D', margins: { top: 190, bottom: 190, left: 190, right: 190 } }),
    sectionTitle('Fanazaran-tena iarahana', C.GREEN, 24),
    wordCards(['Misotro', 'rano', 'i', 'Rabe', '.']),
    p('Alaharo ireo teny. Vakio ny fehezanteny voaforona.', { size: 18, alignment: AlignmentType.CENTER, before: 55, after: 0 }),

    // 4 — WRITABLE PRACTICE
    pageBreak(),
    title('R/r', C.DARK, 38, 30),
    p('Herinandro faha-11 • Seho 1', { bold: true, size: 16, color: C.GREY, alignment: AlignmentType.CENTER, after: 75 }),
    title('FANAZARAN-TENA', C.ORANGE, 27, 65),
    image(fadingModel, 650, 381, 'Fanazaran-tena R sy r : modely, teboteboka, tohizana ary soratana samirery', 45),
    p('Araho.  →  Tohizo.  →  Soraty samirery.', { bold: true, size: 18, color: C.GREY, alignment: AlignmentType.CENTER, after: 80 }),
    sectionTitle('1. Fenoy R na r.', C.ORANGE, 23),
    box([
      p('i  ...akoto        —        ny  ...onono', { bold: true, size: 24, alignment: AlignmentType.CENTER, after: 90 }),
      p('ny  o...ana        —        i  ...asoa', { bold: true, size: 24, alignment: AlignmentType.CENTER, after: 0 }),
    ], { fill: 'FCFCF8', borderColor: 'C9D7D1', margins: { top: 200, bottom: 200, left: 180, right: 180 } }),
    sectionTitle('2. Soraty ireo teny feno.', C.BLUE, 23),
    writingLines({ count: 2, height: 650 }),

    // 5 — PRACTICE CONTINUED, LAST ITEM IS ASSESSMENT BUT NOT LABELLED
    pageBreak(),
    title('FANAZARAN-TENA', C.ORANGE, 29, 70),
    sectionTitle('3. Ahitsio ary soraty.', C.ORANGE, 23),
    p('misotro rano i rabe', { size: 24, color: C.RED, alignment: AlignmentType.CENTER, after: 55 }),
    writingLines({ count: 2, height: 680 }),
    sectionTitle('4. Alaharo ary soraty.', C.GREEN, 23),
    wordCards(['i Rasoa', 'Misotro', 'rano', '.']),
    p('', { after: 55 }),
    writingLines({ count: 2, height: 680 }),
    sectionTitle('5. Ahitsio ary soraty samirery.', C.PURPLE, 23),
    p('misotro rano i rakoto', { size: 24, color: C.RED, alignment: AlignmentType.CENTER, after: 55 }),
    writingLines({ count: 2, label: 'Valiny', height: 700 }),
    p('Anarana : ________________________________    Daty : __________________', { size: 16, before: 95, after: 0 }),

    // 6 — TEACHER GUIDE + PLANNING MERGED
    pageBreak(),
    guideBanner('Herinandro faha-11 • Seho 1/9 • 20 minitra'),
    title('TAKELA-PANOMANAN-DESONA', C.PURPLE, 28, 90),
    twoColumn([
      labelValue('Taranja', 'Malagasy'),
      labelValue('Zana-taranja', 'Asa an-tsoratra'),
      labelValue('Fahaiza-manao ampidirina', 'Fiasan’ny teny'),
      labelValue('Lohahevitra', 'Ny sekoly'),
      labelValue('Lohateny', 'R/r'),
    ], [
      labelValue('Kilasy', 'T1 / 11e / CP1'),
      labelValue('Seho', '1 / 9'),
      labelValue('Faharetany', '20 minitra'),
      labelValue('Fanovozan-kevitra', 'PE T1 p. 9 sy p. 15–17; RAPE T1 p. 9–11'),
      labelValue('Fitaovana', 'Sary, lalan-tsoratra, litera fanetsika, takela-teny, pejy fanazaran-tena'),
    ]),
    sectionTitle('Tanjona manokana', C.BLUE, 22),
    box([
      p('Amin’ny fiafaran’ny seho, ny mpianatra dia mahavita :', { bold: true, size: 18 }),
      p('• mamantatra ny feo r ao amin’ny teny mahazatra;', { size: 18 }),
      p('• manoratra mazava ny R sorabaventy sy r soramadinika;', { size: 18 }),
      p('• mampiasa R amin’ny anaran-tsamirery ary r amin’ny teny tsotra;', { size: 18 }),
      p('• manitsy fehezanteny amin’ny fanajana ny sorabaventy sy ny teboka.', { size: 18, after: 0 }),
    ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    sectionTitle('Fepetra hahombiazana', C.GREEN, 22),
    checklist([
      'Mifanaraka amin’ny modely ny endriky ny R sy r.',
      'R no ampiasaina amin’ny Rakoto, Rasoa ary Rabe.',
      'r no ampiasaina amin’ny rano, ronono ary orana.',
      'Misy sorabaventy sy teboka ny fehezanteny.',
    ], C.PURPLE_LIGHT),
    sectionTitle('Asa atao ao anaty kahie tsotra', C.ORANGE, 21),
    p('R/r iray andalana; ireo teny Rakoto, ronono, orana, Rasoa; ary ny fehezanteny farany nasiam-panitsiana. Tsy misy fitsipika lava adika.', { size: 17, after: 0 }),

    // 7 — FULL I/II/III GUIDE
    pageBreak(),
    guideBanner('Fizotry ny lesona sy teny ho lazain’ny mpampianatra'),
    B.deroulementTable(teacherSteps()),

    // 8 — ANSWERS AND REMEDIATION
    pageBreak(),
    guideBanner('Valiny • Fanitsiana • Fanarenana'),
    sectionTitle('1. Valiny', C.GREEN, 23),
    box([
      p('1. i Rakoto — ny ronono — ny orana — i Rasoa', { size: 20 }),
      p('2. Rakoto • ronono • orana • Rasoa', { size: 20 }),
      p('3. Misotro rano i Rabe.', { size: 20 }),
      p('4. Misotro rano i Rasoa.', { size: 20 }),
      p('5. Misotro rano i Rakoto.', { bold: true, size: 20, color: C.GREEN, after: 0 }),
    ], { fill: 'F8FBF9', borderColor: '9BC7B8' }),
    sectionTitle('2. Mari-pandrefesana amin’ny asa faha-5', C.BLUE, 22),
    twoColumn([
      box([
        p('✓ MAHAFEHY', { bold: true, size: 20, color: C.GREEN, alignment: AlignmentType.CENTER }),
        p('Marina ny M, r, R ary teboka; mazava ny soratra.', { size: 17, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
      p('', { after: 40 }),
      box([
        p('△ EO AN-DALAM-PIFEHEZANA', { bold: true, size: 17, color: 'A36A10', alignment: AlignmentType.CENTER }),
        p('Marina ny roa na telo amin’ireo singa efatra.', { size: 17, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.GOLD_LIGHT, borderColor: 'D8B16D' }),
    ], [
      box([
        p('○ MILA FANOHANANA', { bold: true, size: 19, color: C.RED, alignment: AlignmentType.CENTER }),
        p('Marina ny iray na tsy mbola misy marina.', { size: 17, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.RED_LIGHT, borderColor: 'E1A696' }),
      p('', { after: 40 }),
      box([
        p('FANAMARIHANA', { bold: true, size: 19, color: C.BLUE, alignment: AlignmentType.CENTER }),
        p('Lesoka iray mazava no averina aloha; tsy ahitsy miaraka ny zava-drehetra.', { size: 17, alignment: AlignmentType.CENTER, after: 0 }),
      ], { fill: C.BLUE_LIGHT, borderColor: '8AB0C8' }),
    ]),
    sectionTitle('3. Fanarenana avy hatrany', C.RED, 22),
    p('• Raha mifamadika R sy r : ampiasao indray ny i Rakoto / ny ronono.', { size: 18 }),
    p('• Raha tsy mazava ny endriky ny litera : avereno ny modely lehibe, ny teboteboka, avy eo toerana banga iray.', { size: 18 }),
    p('• Raha tsy misy teboka : vakio mafy ny fehezanteny ary ajanony ny feo eo amin’ny farany.', { size: 18 }),
    p('• Raha mikorontana ny teny : alaharo amin’ny takela-teny vao soratana indray.', { size: 18, after: 0 }),

    // 9 — WEEKLY CONSOLIDATION
    pageBreak(),
    title('FANAMAFISANA ISAN-KERINANDRO', C.DARK, 28, 30),
    p('R/r • Fiasan’ny teny sy Asa an-tsoratra', { bold: true, size: 17, color: C.GREY, alignment: AlignmentType.CENTER, after: 80 }),
    sectionTitle('1. Asio ✓ eo amin’ny fehezanteny voasoratra tsara.', C.BLUE, 21),
    p('□ misotro rano i Rabe     □ Misotro rano i rabe.     □ Misotro rano i Rabe.', { size: 19, after: 90 }),
    sectionTitle('2. Fenoy R na r.', C.ORANGE, 21),
    p('i ...abe   •   ny ...ano   •   i ...asoa   •   ny ...avina   •   ny o...ana', { bold: true, size: 21, alignment: AlignmentType.CENTER, after: 90 }),
    sectionTitle('3. Alaharo ary soraty.', C.GREEN, 21),
    wordCards(['i Rakoto', 'Misotro', 'rano', '.']),
    p('', { after: 45 }),
    writingLines({ count: 1, height: 620 }),
    sectionTitle('4. Ahitsio ary soraty.', C.ORANGE, 21),
    p('rasoa mitondra raozy', { size: 22, color: C.RED, alignment: AlignmentType.CENTER, after: 45 }),
    writingLines({ count: 1, height: 620 }),
    sectionTitle('5. Soraty izay tononin’ny mpampianatra.', C.PURPLE, 21),
    writingLines({ count: 2, height: 600 }),
    sectionTitle('6. Mamoròna fehezanteny iray momba ny sary.', C.GREEN, 21),
    p('Teny azo ampiasaina : Rabe • Rasoa • rano • ravina • raozy • radio', { size: 17, color: C.GREY, alignment: AlignmentType.CENTER, after: 45 }),
    writingLines({ count: 2, height: 600 }),

    // 10 — WEEKLY ANSWERS + SOURCES
    pageBreak(),
    guideBanner('Valin’ny fanamafisana isan-kerinandro'),
    sectionTitle('Valiny', C.GREEN, 23),
    p('1. ✓ Misotro rano i Rabe.', { size: 19 }),
    p('2. i Rabe • ny rano • i Rasoa • ny ravina • ny orana', { size: 19 }),
    p('3. Misotro rano i Rakoto.', { size: 19 }),
    p('4. Rasoa mitondra raozy.', { size: 19 }),
    p('5. Tononina miadana : “Rasoa” ; avy eo : “Misotro rano i Rabe.”', { size: 19 }),
    p('6. Ekena izay fehezanteny feno mifandray amin’ny sary, mampiasa tsara ny R/r ary mifarana amin’ny teboka.', { size: 19, after: 105 }),
    sectionTitle('Loharanom-panamarinana', C.PURPLE, 22),
    p('1. Fandaharam-pibeazana T1 — Malagasy, pejy 9 sy 15–17.', { size: 17 }),
    p('2. RAPE T1 — Andiany herinandro faha-8 ka hatramin’ny faha-14, pejy 9–11.', { size: 17 }),
    sourceLink('RAPE T1 — sehatra ôfisialin’ny Minisiteran’ny Fanabeazam-pirenena', 'https://plateforme.education.mg/bibliotheque-numerique/theme/biblio/pix/pdf/RAPE_T1.pdf'),
    p('3. Ny sary sy ny modely fanoratana dia novokarina manokana ho an’ity santionany ity.', { size: 17, after: 75 }),
    sourceLink('Rohy RAW an’ity DOCX ity', RAW_URL),
    box([
      p('FANAMARINANA FARANY', { bold: true, size: 20, color: C.GREEN, alignment: AlignmentType.CENTER }),
      p('✓ TAKELA-PANOMANAN-DESONA dia ao anatin’ny torolalana.', { size: 17 }),
      p('✓ Tsy misy lohateny teknika BOKIN’NY MPIANATRA na KAHIE FANAZARANA amin’ny pejin’ny mpianatra.', { size: 17 }),
      p('✓ Araho → Tohizo → Soraty samirery no fandrosoan’ny fanazarana.', { size: 17 }),
      p('✓ Ny asa faha-5 no Tombana 4 minitra ao amin’ny torolalana, fa tsy lohateny amin’ny pejin’ny mpianatra.', { size: 17, after: 0 }),
    ], { fill: C.GREEN_LIGHT, borderColor: '9BC7B8' }),
  ];

  const doc = new Document({
    creator: 'J-Learn',
    title: 'Santionany feno Malagasy T1 — Safidy C — R/r — v2',
    subject: 'Asa an-tsoratra ampidirina ao ny Fiasan’ny teny',
    keywords: 'J-Learn, Malagasy, T1, R/r, Asa an-tsoratra, Fiasan’ny teny',
    description: 'Santionany nohavaozina araka ny lojika pedagojika sy ny SKILL.',
    styles: {
      default: {
        document: { run: { font: B.FONT, size: 20, color: B.COLORS.BLACK }, paragraph: { spacing: { line: 240, after: 60 } } },
        title: { run: { font: B.FONT } }, heading1: { run: { font: B.FONT } }, heading2: { run: { font: B.FONT } },
      },
    },
    sections: [{
      properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 650, bottom: 650, left: 680, right: 680, header: 300, footer: 330 } } },
      footers: { default: B.footer() },
      children,
    }],
  });

  const buffer = await Packer.toBuffer(doc);
  fs.writeFileSync(OUTPUT, buffer);
  console.log(`${OUTPUT} — ${buffer.length} octets`);
}

main().catch((error) => { console.error(error); process.exit(1); });
