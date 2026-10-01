const {
  AlignmentType,
  Bookmark,
  BorderStyle,
  Footer,
  HeadingLevel,
  ImageRun,
  InternalHyperlink,
  PageBreak,
  PageNumber,
  Paragraph,
  ShadingType,
  Table,
  TableCell,
  TableLayoutType,
  TableRow,
  TextRun,
  VerticalAlign,
  VerticalMergeType,
  WidthType,
} = require('docx');

const COLORS = {
  RED: 'C00000',
  GREEN: '1E7B34',
  BLUE: '1F4E79',
  BLACK: '000000',
  MAGENTA: 'C2185B',
  HEADER: 'DDEEFF',
  SUBHEADER: 'F5F5F5',
  SECTION: 'D9EAF7',
  WHITE: 'FFFFFF',
  GREY: '666666',
};

const FONT = 'Times New Roman';

function text(textValue, options = {}) {
  return new TextRun({
    text: textValue,
    font: FONT,
    size: options.size || 18,
    bold: options.bold || false,
    italics: options.italics || false,
    color: options.color || COLORS.BLACK,
    break: options.break || 0,
    underline: options.underline,
  });
}

function p(content = '', options = {}) {
  const children = Array.isArray(content) ? content : [text(content, options)];
  return new Paragraph({
    alignment: options.alignment || AlignmentType.LEFT,
    heading: options.heading,
    spacing: {
      before: options.before || 0,
      after: options.after === undefined ? 60 : options.after,
      line: options.line || 240,
    },
    keepNext: options.keepNext || false,
    pageBreakBefore: options.pageBreakBefore || false,
    indent: options.indent,
    bullet: options.bullet,
    numbering: options.numbering,
    children,
  });
}

function pageBreak() {
  return new Paragraph({ children: [new PageBreak()] });
}

function noBorders() {
  const none = { style: BorderStyle.NONE, size: 0, color: COLORS.WHITE };
  return {
    top: none,
    bottom: none,
    left: none,
    right: none,
    insideHorizontal: none,
    insideVertical: none,
  };
}

function standardBorders(color = '7F8C8D', size = 4) {
  const line = { style: BorderStyle.SINGLE, size, color };
  return { top: line, bottom: line, left: line, right: line };
}

function cell(children, options = {}) {
  return new TableCell({
    children: children && children.length ? children : [p('')],
    width: options.width
      ? { size: options.width, type: options.widthType || WidthType.PERCENTAGE }
      : undefined,
    columnSpan: options.columnSpan,
    verticalMerge: options.verticalMerge,
    verticalAlign: options.verticalAlign || VerticalAlign.CENTER,
    shading: options.shading
      ? { fill: options.shading, type: ShadingType.CLEAR, color: 'auto' }
      : undefined,
    borders: options.borders,
    margins: options.margins || { top: 70, bottom: 70, left: 85, right: 85 },
  });
}

function labelValue(label, value, options = {}) {
  return p([
    text(`${label} : `, { bold: true, size: options.size || 17 }),
    text(value, { size: options.size || 17 }),
  ], { after: options.after === undefined ? 30 : options.after, line: 220 });
}

function metaTable(meta) {
  const left = [
    labelValue('Taranja', meta.taranja),
    labelValue('Zana-taranja', meta.zanaTaranja),
    labelValue('Lohahevitra', meta.lohahevitra),
    labelValue('Lohateny', meta.lohateny),
    labelValue('Tanjona manokana', meta.tanjona, { size: 16 }),
    labelValue('Fanovozan-kevitra', meta.fanovozanKevitra, { size: 15 }),
    labelValue('Fitaovana', meta.fitaovana, { size: 16 }),
  ];
  const right = [
    labelValue('Daty', '________________'),
    labelValue('Kilasy', meta.kilasy),
    labelValue('Seho n°', meta.seho),
    labelValue('Faharetany', meta.faharetany),
  ];
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    borders: noBorders(),
    rows: [
      new TableRow({
        cantSplit: true,
        children: [
          cell(left, { width: 70, borders: noBorders(), verticalAlign: VerticalAlign.TOP }),
          cell(right, { width: 30, borders: noBorders(), verticalAlign: VerticalAlign.TOP }),
        ],
      }),
    ],
  });
}

function headerP(value, size = 15) {
  return p(value, {
    bold: true,
    size,
    alignment: AlignmentType.CENTER,
    after: 0,
    line: 200,
  });
}

function deroulementHeader() {
  const restart = VerticalMergeType.RESTART;
  const cont = VerticalMergeType.CONTINUE;
  const row1 = new TableRow({
    cantSplit: true,
    tableHeader: true,
    children: [
      cell([headerP('Dingana sy Faharetany')], { width: 14, shading: COLORS.HEADER, verticalMerge: restart }),
      cell([headerP('Fizotry ny Lesona')], { width: 50, shading: COLORS.HEADER, columnSpan: 2 }),
      cell([headerP('Tetika Amam-paika')], { width: 13, shading: COLORS.HEADER, verticalMerge: restart }),
      cell([headerP('Fitaovana')], { width: 13, shading: COLORS.HEADER, verticalMerge: restart }),
      cell([headerP('Fanamarihana')], { width: 10, shading: COLORS.HEADER, verticalMerge: restart }),
    ],
  });
  const row2 = new TableRow({
    cantSplit: true,
    tableHeader: true,
    children: [
      cell([p('')], { width: 14, shading: COLORS.SUBHEADER, verticalMerge: cont }),
      cell([headerP('Mpampianatra')], { width: 29, shading: COLORS.SUBHEADER }),
      cell([headerP('Mpianatra')], { width: 21, shading: COLORS.SUBHEADER }),
      cell([p('')], { width: 13, shading: COLORS.SUBHEADER, verticalMerge: cont }),
      cell([p('')], { width: 13, shading: COLORS.SUBHEADER, verticalMerge: cont }),
      cell([p('')], { width: 10, shading: COLORS.SUBHEADER, verticalMerge: cont }),
    ],
  });
  return [row1, row2];
}

function stepRow({ etape, mpampianatra, mpianatra, tetika, fitaovana }) {
  return new TableRow({
    cantSplit: true,
    children: [
      cell([p(etape, { bold: true, size: 15, alignment: AlignmentType.CENTER, after: 0 })], { width: 14 }),
      cell(mpampianatra, { width: 29, verticalAlign: VerticalAlign.TOP }),
      cell(mpianatra, { width: 21, verticalAlign: VerticalAlign.TOP }),
      cell([p(tetika, { size: 14, alignment: AlignmentType.CENTER, after: 0 })], { width: 13 }),
      cell([p(fitaovana, { size: 14, alignment: AlignmentType.CENTER, after: 0 })], { width: 13 }),
      cell([p('')], { width: 10, verticalAlign: VerticalAlign.TOP }),
    ],
  });
}

function sectionRow(label) {
  return new TableRow({
    cantSplit: true,
    children: [
      cell([p(label, { bold: true, size: 16, alignment: AlignmentType.CENTER, after: 0 })], {
        width: 100,
        columnSpan: 6,
        shading: COLORS.SECTION,
      }),
    ],
  });
}

function deroulementTable(rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    layout: TableLayoutType.FIXED,
    columnWidths: [1400, 2900, 2100, 1300, 1300, 1000],
    rows: [...deroulementHeader(), ...rows],
  });
}

function bookmarkHeading(label, anchor, options = {}) {
  const run = text(label, {
    bold: true,
    size: options.size || 28,
    color: options.color || COLORS.BLACK,
  });
  return new Paragraph({
    alignment: options.alignment || AlignmentType.CENTER,
    heading: options.heading || HeadingLevel.HEADING_1,
    spacing: { before: options.before || 120, after: options.after || 120 },
    children: [new Bookmark({ id: anchor, children: [run] })],
  });
}

function tocLink(label, anchor) {
  return new Paragraph({
    spacing: { after: 90 },
    children: [
      new InternalHyperlink({
        anchor,
        children: [text(label, { color: '0563C1', underline: { type: 'single' }, size: 20 })],
      }),
    ],
  });
}

function lessonTitle(label, anchor) {
  return bookmarkHeading(label, anchor, { size: 31, color: COLORS.RED });
}

function lessonSection(label) {
  return p(label, {
    bold: true,
    size: 24,
    color: COLORS.GREEN,
    before: 120,
    after: 70,
    keepNext: true,
    heading: HeadingLevel.HEADING_2,
  });
}

function highlightedParagraph(parts, options = {}) {
  const runs = parts.map((part) => text(part.text, {
    size: options.size || 20,
    bold: part.highlight || part.bold || false,
    color: part.highlight ? COLORS.BLUE : (part.color || COLORS.BLACK),
    italics: part.italics || false,
  }));
  return p(runs, { after: options.after === undefined ? 70 : options.after, line: 260, indent: options.indent });
}

function correctedParagraph(parts, options = {}) {
  const runs = parts.map((part) => text(part.text, {
    size: options.size || 19,
    bold: part.answer || part.bold || false,
    color: part.answer ? COLORS.MAGENTA : (part.color || COLORS.BLACK),
  }));
  return p(runs, { after: options.after === undefined ? 55 : options.after, line: 245, indent: options.indent });
}

function imageParagraph(buffer, width, height, altText) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 },
    children: [
      new ImageRun({
        type: 'png',
        data: buffer,
        transformation: { width, height },
        altText: {
          title: altText,
          description: altText,
          name: altText,
        },
      }),
    ],
  });
}

function footer() {
  return new Footer({
    children: [
      new Paragraph({
        alignment: AlignmentType.RIGHT,
        children: [
          text('J-Learn — Malagasy T1 — Pejy ', { size: 15, color: COLORS.GREY }),
          new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: 15, color: COLORS.GREY }),
        ],
      }),
    ],
  });
}

module.exports = {
  COLORS,
  FONT,
  bookmarkHeading,
  correctedParagraph,
  deroulementTable,
  footer,
  highlightedParagraph,
  imageParagraph,
  labelValue,
  lessonSection,
  lessonTitle,
  metaTable,
  p,
  pageBreak,
  sectionRow,
  stepRow,
  text,
  tocLink,
};
