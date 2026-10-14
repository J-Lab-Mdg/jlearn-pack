// ÉCHANTILLON — Séance 1 Histoire T6 au style Tantara T5 (sections PE numérotées + mots-clés + encadré document + lexique)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, WidthType, BorderStyle, ShadingType, ImageRun, TableLayoutType,
} = require('docx');

const FONT = 'Calibri';
const RED = 'C00000', GREEN = '2E7D32', BLUE = '1F4E79', WINE = 'C2185B', OCRE = 'B25000', BLEU2 = '1565C0';
const PALEBLUE = 'E3F2FD', PALEGREEN = 'E8F5E9', CREME = 'FFF8EF';

const tr = (t, o = {}) => new TextRun({ text: t, font: FONT, size: o.size || 24, bold: o.bold, italics: o.italics, color: o.color || '000000' });
const p = (t, o = {}) => new Paragraph({
  alignment: o.align || AlignmentType.JUSTIFIED,
  spacing: { after: o.after ?? 100, line: 300 },
  children: [tr(t, o)],
});

// surlignage automatique des mots-clés (style T5 : gras bleu)
const pHi = (text, kws, o = {}) => {
  const pattern = kws.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).sort((a, b) => b.length - a.length).join('|');
  const regex = new RegExp(`(${pattern})`, 'gi');
  const parts = text.split(regex).filter(x => x !== '');
  return new Paragraph({
    alignment: AlignmentType.JUSTIFIED, spacing: { after: o.after ?? 100, line: 300 },
    children: parts.map(part => kws.some(k => k.toLowerCase() === part.toLowerCase())
      ? tr(part, { bold: true, color: BLUE })
      : tr(part)),
  });
};
const puce = (text, kws) => {
  const para = pHi('• ' + text, kws, { after: 60 });
  return para;
};

const titreSection = t => p(t, { bold: true, color: GREEN, size: 26, after: 80, align: AlignmentType.LEFT });

// encadré type T5 (bord coloré + fond)
const encadre = (titre, paras, fill, border) => new Table({
  width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, columnWidths: [9600],
  borders: {
    top: { style: BorderStyle.SINGLE, size: 12, color: border }, bottom: { style: BorderStyle.SINGLE, size: 12, color: border },
    left: { style: BorderStyle.SINGLE, size: 12, color: border }, right: { style: BorderStyle.SINGLE, size: 12, color: border },
    insideHorizontal: { style: BorderStyle.NONE }, insideVertical: { style: BorderStyle.NONE },
  },
  rows: [new TableRow({
    children: [new TableCell({
      shading: { type: ShadingType.CLEAR, fill }, margins: { top: 140, bottom: 140, left: 180, right: 180 },
      children: [p(titre, { bold: true, color: border, size: 25, after: 90, align: AlignmentType.LEFT }), ...paras],
    })],
  })],
});

function jpgSize(buf) {
  let i = 2;
  while (i < buf.length) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return { w: 1024, h: 1024 };
}
const imgJpg = (file, widthPx = 430) => {
  const buf = fs.readFileSync(file);
  const { w, h } = jpgSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 120 }, children: [new ImageRun({ type: 'jpg', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

const KWS = ['Histoire', 'historia', 'enquête', 'discipline scientifique', 'reconstitution du passé', 'vérité historique',
  'traces', 'preuves', 'le temps', 'l’espace', 'événement historique', 'période', 'faits et civilisations', 'guerres',
  'évolution de la société', 'lois', 'personnages'];

const children = [
  // ---- titre de leçon ----
  p('LEÇON', { bold: true, size: 28, align: AlignmentType.CENTER, after: 80 }),
  p('Qu’est-ce que l’Histoire ?', { bold: true, size: 32, color: RED, align: AlignmentType.CENTER, after: 120 }),
  imgJpg(path.join(__dirname, '../assets/scenes/u1s1.jpg')),
  p('Soa déterre une pièce de monnaie verdie : qui l’a tenue ? quand ? La pièce ne parle pas… et pourtant elle raconte.', { italics: true, size: 21, align: AlignmentType.CENTER, after: 160 }),

  // ---- 1 ----
  titreSection('1. La définition de l’Histoire'),
  pHi('Le mot vient du grec historia, qui signifie « enquête ». Au Vᵉ siècle avant Jésus-Christ, le voyageur grec Hérodote interroge les témoins des grandes guerres de son temps, puis rédige son livre : l’Histoire est née.', KWS),
  pHi('L’Histoire est la discipline scientifique qui étudie le passé de l’humanité et des sociétés humaines. Son travail est la reconstitution du passé à partir des traces laissées, pour établir des connaissances vérifiées.', KWS),

  // ---- 2 ----
  titreSection('2. L’objet d’études de l’Histoire'),
  p('L’Histoire étudie :', { after: 60 }),
  puce('les faits et civilisations (la fondation d’un royaume, la vie d’un peuple) ;', KWS),
  puce('les guerres, qui bouleversent les sociétés ;', KWS),
  puce('l’évolution de la société (comment on vivait hier et aujourd’hui) ;', KWS),
  puce('les lois et les personnages qui ont marqué leur époque.', KWS),

  // ---- 3 ----
  titreSection('3. Le temps et l’espace : où et quand ?'),
  pHi('Un fait sans date ni lieu n’est pas encore de l’Histoire : tout objet historique se place dans le temps (la date, la période) et dans l’espace (le territoire, le lieu, la carte). Un événement historique est un fait marquant, daté et localisé.', KWS),

  // ---- 4 ----
  titreSection('4. Pourquoi l’Histoire exige-t-elle des preuves ?'),
  pHi('Ce qui distingue l’Histoire de la légende, c’est la preuve. « On dit que… » n’est pas une preuve : la vérité historique ne retient que ce que des traces vérifiées permettent d’établir.', KWS),
  new Paragraph({ spacing: { after: 140 }, children: [] }),

  // ---- encadré document (style « Tahirin-kevitra hodinihina ») ----
  encadre('Document à étudier', [
    p('L’enquête d’Hérodote — d’après Hérodote, Enquêtes, Vᵉ siècle avant Jésus-Christ (extrait adapté)', { bold: true, size: 21, after: 80, align: AlignmentType.LEFT }),
    p('« Hérodote d’Halicarnasse présente ici son enquête, pour que le temps n’efface pas les actions des hommes. J’ai voyagé, j’ai vu de mes yeux, j’ai interrogé les témoins ; et lorsque je n’ai pas vu moi-même, je rapporte ce que l’on m’a dit, en le signalant au lecteur. »', { italics: true, after: 100 }),
    p('1. Qui est l’auteur, et que veut-il empêcher ?', { after: 40 }),
    p('2. Comment recueille-t-il ses informations ?', { after: 40 }),
    p('3. Pourquoi ce texte fonde-t-il la méthode de l’Histoire ?', { after: 100 }),
    new Paragraph({
      spacing: { after: 40 }, children: [tr('Réponse 1. ', { bold: true, color: WINE, size: 22 }), tr('Hérodote ; il veut empêcher que le temps efface la mémoire des hommes.', { size: 22 })],
    }),
    new Paragraph({
      spacing: { after: 40 }, children: [tr('Réponse 2. ', { bold: true, color: WINE, size: 22 }), tr('Il voyage, voit de ses yeux et interroge les témoins.', { size: 22 })],
    }),
    new Paragraph({
      spacing: { after: 0 }, children: [tr('Réponse 3. ', { bold: true, color: WINE, size: 22 }), tr('Parce qu’il enquête et distingue ce qu’il a vérifié de ce qu’on lui a rapporté — le geste de l’historien.', { size: 22 })],
    }),
  ], CREME, OCRE),
  new Paragraph({ spacing: { after: 160 }, children: [] }),

  // ---- le savais-tu ----
  encadre('Le savais-tu ?', [
    p('Le mot « histoire » vient du grec historia : « enquête » ! Hérodote, qui l’employa le premier, est surnommé depuis « le père de l’Histoire ».', { after: 0, size: 22 }),
  ], PALEBLUE, BLEU2),
  new Paragraph({ spacing: { after: 160 }, children: [] }),

  // ---- petit lexique ----
  p('Petit lexique', { bold: true, color: GREEN, size: 26, after: 80, align: AlignmentType.LEFT }),
  new Table({
    width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, columnWidths: [2800, 6800],
    rows: [
      new TableRow({
        children: ['Mot', 'Sens'].map(t => new TableCell({
          shading: { type: ShadingType.CLEAR, fill: 'EEEEEE' }, margins: { top: 80, bottom: 80, left: 100, right: 100 },
          children: [p(t, { bold: true, size: 21, after: 0, align: AlignmentType.LEFT })],
        })),
      }),
      ...[
        ['Histoire', 'discipline scientifique qui reconstitue le passé à partir de traces vérifiées'],
        ['Vérité historique', 'affirmation sur le passé appuyée sur des preuves'],
        ['Événement historique', 'fait marquant, daté et localisé'],
        ['Période', 'étendue de temps entre deux dates'],
      ].map(r => new TableRow({
        children: r.map((t, i) => new TableCell({
          margins: { top: 80, bottom: 80, left: 100, right: 100 },
          children: [p(t, { bold: i === 0, size: 21, after: 0, align: AlignmentType.LEFT })],
        })),
      })),
    ],
  }),
];

const doc = new Document({
  styles: { default: { document: { run: { font: FONT, size: 24 } } } },
  sections: [{ properties: { page: { margin: { top: 1100, bottom: 1100, left: 1250, right: 1250 } } }, children }],
});
Packer.toBuffer(doc).then(buf => {
  const out = path.join(__dirname, '..', 'Echantillon_Histoire_T6_S1_styleT5.docx');
  fs.writeFileSync(out, buf);
  console.log(out, buf.length, 'octets');
});
