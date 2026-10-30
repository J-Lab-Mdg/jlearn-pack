const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, TableLayoutType, ImageRun
} = require('docx');
const { svg, txt, poly, seg, circle, arrow, BLUE, PINK, PINK2, GREEN, GREENL, BLUEL, render } = require('./figlib');

const R = path.join(__dirname, '..');
const OUT = path.join(R, 'PROTOTYPE_ANNEXE_2_FORMULES.docx');
const C = {
  blue: '1F4E79', red: 'A61C00', green: '2E7D32', pale: 'EEF4F8',
  paleGreen: 'E8F5E9', yellow: 'FFF8E1', gray: '666666', black: '222222', white: 'FFFFFF'
};

function run(text, o = {}) {
  return new TextRun({
    text,
    font: 'Times New Roman',
    size: o.size || 23,
    bold: !!o.bold,
    italics: !!o.italics,
    underline: o.underline ? { type: 'single' } : undefined,
    color: o.color || C.black
  });
}
function para(text, o = {}) {
  return new Paragraph({
    alignment: o.align || AlignmentType.LEFT,
    spacing: { before: o.before || 0, after: o.after ?? 90, line: o.line || 285 },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined,
    children: [run(text, o)]
  });
}
function mixed(parts, o = {}) {
  return new Paragraph({
    alignment: o.align || AlignmentType.LEFT,
    spacing: { before: o.before || 0, after: o.after ?? 90, line: o.line || 285 },
    shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined,
    children: parts.map(([text, style]) => run(text, style || {}))
  });
}
const border = { style: BorderStyle.SINGLE, size: 8, color: '7593A8' };
const borders = { top: border, bottom: border, left: border, right: border, insideHorizontal: border, insideVertical: border };
function cardCell(children) {
  return new TableCell({
    width: { size: 100, type: WidthType.PERCENTAGE },
    shading: { type: ShadingType.CLEAR, fill: C.white },
    margins: { top: 120, bottom: 120, left: 150, right: 150 },
    children
  });
}
function formulaLine(formula, unit, example) {
  return [
    mixed([['Formule : ', { bold: true, color: C.blue }], [formula, { bold: true, color: C.red, size: 26 }]], { fill: C.pale, after: 55 }),
    mixed([['Grandeurs et unité : ', { bold: true, color: C.green }], [unit]], { fill: C.paleGreen, after: 55 }),
    mixed([['Exemple : ', { italics: true, underline: true }], [example]], { after: 30 })
  ];
}
function card(title, subtitle, img, formula, unit, example, note = '') {
  const ch = [
    para(title, { align: AlignmentType.CENTER, bold: true, color: C.blue, size: 27, after: 35 }),
    para(subtitle, { align: AlignmentType.CENTER, color: C.gray, size: 19, after: 65 }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 75 }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(img), transformation: { width: 470, height: 223 } })] }),
    ...formulaLine(formula, unit, example)
  ];
  if (note) ch.push(para(note, { fill: C.yellow, size: 19, after: 20 }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, borders, rows: [new TableRow({ children: [cardCell(ch)] })] });
}
function section(title, text) {
  return [
    para(title, { align: AlignmentType.LEFT, bold: true, color: C.red, size: 25, before: 80, after: 45 }),
    para(text, { color: C.black, size: 20, after: 90 })
  ];
}

function dim(x1, y1, x2, y2, label, tx, ty, color = PINK2) {
  return seg(x1, y1, x2, y2, color, 3) + arrow(x1, y1, x2, y2, color, 3) + arrow(x2, y2, x1, y1, color, 3) + txt(tx, ty, label, 23, color, 'bold', 'middle');
}
function regularPoints(cx, cy, r, n, start = -Math.PI / 2) {
  return Array.from({ length: n }, (_, i) => [cx + r * Math.cos(start + 2 * Math.PI * i / n), cy + r * Math.sin(start + 2 * Math.PI * i / n)]);
}

const figs = {};
figs.ann2_carre = svg(760, 360,
  txt(60, 44, 'côté c', 24, PINK2, 'bold') +
  poly([[225, 85], [515, 85], [515, 325], [225, 325]], BLUEL, BLUE, 5) +
  dim(225, 65, 515, 65, 'c', 370, 55) + dim(545, 85, 545, 325, 'c', 585, 210) +
  txt(370, 210, 'carré', 27, BLUE, 'bold', 'middle')
);
figs.ann2_rectangle = svg(760, 360,
  poly([[120, 120], [645, 120], [645, 285], [120, 285]], BLUEL, BLUE, 5) +
  dim(120, 95, 645, 95, 'L', 382, 84) + dim(680, 120, 680, 285, 'l', 715, 210) +
  txt(382, 215, 'rectangle', 27, BLUE, 'bold', 'middle')
);
figs.ann2_triangle = svg(760, 360,
  poly([[130, 300], [380, 65], [650, 300]], BLUEL, BLUE, 5) +
  dim(130, 328, 650, 328, 'b', 390, 350) +
  txt(230, 205, 'a', 25, PINK2, 'bold', 'middle') + txt(520, 205, 'c', 25, PINK2, 'bold', 'middle') +
  seg(380, 65, 380, 300, PINK2, 3, '8 7') + txt(404, 190, 'h', 24, PINK2, 'bold') +
  txt(390, 275, 'triangle', 26, BLUE, 'bold', 'middle')
);
figs.ann2_polygone = svg(760, 360,
  poly(regularPoints(365, 195, 130, 6), BLUEL, BLUE, 5) +
  dim(430, 82, 495, 120, 'c', 520, 105) +
  txt(365, 195, 'n côtés', 26, BLUE, 'bold', 'middle') + txt(365, 245, 'réguliers', 22, BLUE, 'normal', 'middle') +
  txt(105, 315, 'Pour un polygone quelconque : P = somme de tous les côtés.', 23, PINK2, 'bold')
);
figs.ann2_cercle = svg(760, 360,
  circle(300, 190, 115, BLUE, BLUEL, 5) + circle(300, 190, 6, PINK2, PINK2, 1) +
  seg(300, 190, 415, 190, PINK2, 4) + txt(358, 180, 'r', 25, PINK2, 'bold', 'middle') +
  seg(185, 190, 415, 190, GREEN, 3) + txt(300, 222, 'd = 2r', 23, GREEN, 'bold', 'middle') +
  txt(550, 150, 'cercle', 27, BLUE, 'bold', 'middle') + txt(550, 195, 'circonférence C', 23, '#222', 'normal', 'middle') + txt(550, 235, 'disque : aire A', 23, '#222', 'normal', 'middle')
);
figs.ann2_trapeze = svg(760, 360,
  poly([[135, 300], [630, 300], [520, 90], [245, 90]], BLUEL, BLUE, 5) +
  dim(135, 330, 630, 330, 'B', 382, 352) + dim(245, 64, 520, 64, 'b', 382, 54) +
  seg(382, 90, 382, 300, PINK2, 3, '8 7') + txt(405, 205, 'h', 24, PINK2, 'bold') +
  txt(382, 250, 'trapèze', 26, BLUE, 'bold', 'middle')
);
figs.ann2_parallelogramme = svg(760, 360,
  poly([[130, 290], [590, 290], [650, 95], [190, 95]], BLUEL, BLUE, 5) +
  dim(130, 322, 590, 322, 'b', 360, 345) +
  seg(190, 95, 190, 290, PINK2, 3, '8 7') + txt(213, 200, 'h', 24, PINK2, 'bold') +
  txt(390, 240, 'parallélogramme', 25, BLUE, 'bold', 'middle')
);
figs.ann2_cube = svg(760, 360,
  poly([[190, 135], [430, 135], [430, 305], [190, 305]], BLUEL, BLUE, 5) +
  poly([[190, 135], [275, 75], [515, 75], [430, 135]], '#E8F5E9', BLUE, 5) +
  poly([[430, 135], [515, 75], [515, 245], [430, 305]], '#D6E6F5', BLUE, 5) +
  dim(190, 335, 430, 335, 'a', 310, 355) + txt(560, 178, 'cube', 27, BLUE, 'bold', 'middle') + txt(560, 220, 'a × a × a', 23, PINK2, 'bold', 'middle')
);
figs.ann2_pave = svg(760, 360,
  poly([[145, 145], [470, 145], [590, 95], [265, 95]], '#E8F5E9', BLUE, 5) +
  poly([[145, 145], [470, 145], [470, 290], [145, 290]], BLUEL, BLUE, 5) +
  poly([[470, 145], [590, 95], [590, 240], [470, 290]], '#D6E6F5', BLUE, 5) +
  dim(145, 320, 470, 320, 'L', 310, 344) + dim(115, 145, 115, 290, 'h', 80, 222) + dim(500, 135, 590, 98, 'l', 620, 105) +
  txt(625, 215, 'pavé droit', 27, BLUE, 'bold', 'middle')
);
figs.ann2_prisme = svg(760, 360,
  poly([[145, 270], [245, 95], [345, 270]], BLUEL, BLUE, 5) +
  poly([[420, 270], [520, 95], [620, 270]], '#E8F5E9', BLUE, 5) +
  seg(145, 270, 420, 270, BLUE, 5) + seg(245, 95, 520, 95, BLUE, 5) + seg(345, 270, 620, 270, BLUE, 5) +
  txt(245, 310, 'base', 23, PINK2, 'bold', 'middle') + dim(345, 350, 620, 350, 'h du prisme', 482, 345) +
  txt(382, 205, 'prisme', 27, BLUE, 'bold', 'middle')
);
figs.ann2_cylindre = svg(760, 360,
  `<ellipse cx="300" cy="95" rx="120" ry="35" fill="${BLUEL}" stroke="${BLUE}" stroke-width="5"/>` +
  `<path d="M180 95 V275 C180 315 420 315 420 275 V95" fill="${BLUEL}" stroke="${BLUE}" stroke-width="5"/>` +
  `<ellipse cx="300" cy="275" rx="120" ry="35" fill="${BLUEL}" stroke="${BLUE}" stroke-width="5"/>` +
  seg(300, 95, 420, 95, PINK2, 4) + txt(360, 84, 'r', 25, PINK2, 'bold', 'middle') + seg(460, 95, 460, 275, GREEN, 4) + arrow(460, 95, 460, 275, GREEN, 4) + arrow(460, 275, 460, 95, GREEN, 4) + txt(485, 190, 'h', 25, GREEN, 'bold') +
  txt(600, 175, 'cylindre', 27, BLUE, 'bold', 'middle')
);
figs.ann2_proprietes = svg(760, 360,
  poly([[115, 275], [245, 95], [375, 275]], BLUEL, BLUE, 5) + txt(245, 320, 'triangle : 180°', 24, BLUE, 'bold', 'middle') +
  poly([[470, 115], [635, 115], [635, 275], [470, 275]], '#E8F5E9', BLUE, 5) + txt(552, 320, 'quadrilatère : 360°', 24, GREEN, 'bold', 'middle') +
  txt(245, 190, 'A + B + C', 25, PINK2, 'bold', 'middle') + txt(552, 195, 'A + B + C + D', 23, GREEN, 'bold', 'middle')
);
figs.ann2_unites = svg(760, 360,
  txt(380, 55, 'Le résultat dépend de la grandeur mesurée', 25, BLUE, 'bold', 'middle') +
  `<rect x="65" y="100" width="190" height="80" fill="#EEF4F8" stroke="#1F4E79" stroke-width="3"/><rect x="285" y="100" width="190" height="80" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/><rect x="505" y="100" width="190" height="80" fill="#FFF8E1" stroke="#B25000" stroke-width="3"/>` +
  txt(160, 145, 'Longueur / P', 23, BLUE, 'bold', 'middle') + txt(380, 145, 'Aire', 23, GREEN, 'bold', 'middle') + txt(600, 145, 'Volume', 23, '#B25000', 'bold', 'middle') +
  txt(160, 215, 'cm, m', 24, '#222', 'normal', 'middle') + txt(380, 215, 'cm², m²', 24, '#222', 'normal', 'middle') + txt(600, 215, 'cm³, m³', 24, '#222', 'normal', 'middle') +
  txt(380, 290, '1 dm³ = 1 L    •    1 cm³ = 1 mL', 24, PINK2, 'bold', 'middle')
);

async function main() {
  const pngs = await render(figs);
  const img = name => path.join(R, 'assets', 'figures', `${name}.png`);
  const children = [];
  children.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 110 }, children: [run('ANNEXE 2 — FORMULES ET PROPRIÉTÉS', { bold: true, color: C.red, size: 30 })] }));
  children.push(para('Prototype pédagogique : une figure repérée, les grandeurs utiles, la formule immédiatement dessous et un exemple dans une unité appropriée.', { align: AlignmentType.CENTER, color: C.gray, size: 20, after: 110 }));
  children.push(para('Les lettres utilisées : c = côté, L = longueur, l = largeur, b = petite base, B = grande base, h = hauteur, r = rayon, d = diamètre, n = nombre de côtés.', { fill: C.paleGreen, size: 19, after: 120 }));

  const sections = [
    { title: 'PÉRIMÈTRES ET AIRES', intro: 'On mesure le contour en unités de longueur et la surface en unités carrées. Les dimensions doivent être dans la même unité.', cards: [
      ['Carré', 'Les quatre côtés ont la même longueur.', 'ann2_carre', 'P = 4 × c ;   A = c × c', 'c en cm ou m ; P en cm ou m ; A en cm² ou m².', 'Si c = 5 cm : P = 4 × 5 = 20 cm ; A = 5 × 5 = 25 cm².', 'Pour retrouver le côté : c = P ÷ 4.'],
      ['Rectangle', 'Deux longueurs L et deux largeurs l.', 'ann2_rectangle', 'P = 2 × (L + l) ;   A = L × l', 'L et l en cm ou m ; P en cm ou m ; A en cm² ou m².', 'Si L = 8 cm et l = 3 cm : P = 22 cm ; A = 24 cm².', 'Formules inverses : L = A ÷ l ; l = A ÷ L ; L = P ÷ 2 − l.'],
      ['Triangle', 'Trois côtés a, b et c ; une base b et sa hauteur h.', 'ann2_triangle', 'P = a + b + c ;   A = (b × h) ÷ 2', 'P en cm ou m ; A en cm² ou m² ; h perpendiculaire à b.', 'Si a = 5 cm, b = 6 cm, c = 7 cm : P = 18 cm. Si h = 4 cm : A = 12 cm².', 'La somme des angles d’un triangle est 180°.'],
      ['Polygone régulier et demi-périmètre', 'Un polygone régulier possède n côtés égaux de longueur c.', 'ann2_polygone', 'P = n × c ;   DP = P ÷ 2', 'P et DP en cm ou m ; n est sans unité.', 'Un hexagone de côté 4 cm : P = 6 × 4 = 24 cm ; DP = 12 cm.', 'Pour un polygone quelconque, on additionne tous les côtés.']
    ]},
    { title: 'CERCLE ET FIGURES À BASES PARALLÈLES', intro: 'Pour le cercle, on utilise π ≈ 3,14. Le diamètre traverse le centre ; le rayon va du centre au bord.', cards: [
      ['Cercle et disque', 'Rayon r, diamètre d, circonférence C et aire du disque A.', 'ann2_cercle', 'd = 2r ; r = d ÷ 2 ; C = πd = 2πr ; A = πr²', 'r et d en cm ou m ; C en cm ou m ; A en cm² ou m².', 'Si r = 3 cm : d = 6 cm ; C ≈ 18,84 cm ; A ≈ 28,26 cm².', 'Ne pas confondre la circonférence C, qui est une longueur, et l’aire A, qui est une surface.'],
      ['Trapèze', 'Grande base B, petite base b et hauteur h.', 'ann2_trapeze', 'A = (B + b) × h ÷ 2', 'B, b et h en cm ou m ; A en cm² ou m².', 'Si B = 10 cm, b = 6 cm et h = 4 cm : A = 32 cm².', 'Formules inverses : h = (2A) ÷ (B + b) ; B = (2A ÷ h) − b.'],
      ['Parallélogramme', 'Base b et hauteur h perpendiculaire à cette base.', 'ann2_parallelogramme', 'A = b × h', 'b et h en cm ou m ; A en cm² ou m².', 'Si b = 7 cm et h = 3 cm : A = 21 cm².', 'Formules inverses : b = A ÷ h ; h = A ÷ b.']
    ]},
    { title: 'SOLIDES ET VOLUMES', intro: 'Le volume mesure l’espace occupé. On utilise des unités cubes : cm³, dm³ ou m³.', cards: [
      ['Cube', 'Les trois dimensions sont égales à l’arête a.', 'ann2_cube', 'V = a × a × a = a³', 'a en cm ou m ; V en cm³ ou m³.', 'Si a = 4 cm : V = 4 × 4 × 4 = 64 cm³.', 'Un cube est un pavé droit particulier.'],
      ['Pavé droit', 'Longueur L, largeur l et hauteur h.', 'ann2_pave', 'V = L × l × h', 'L, l et h en cm ou m ; V en cm³ ou m³.', 'Si L = 8 cm, l = 3 cm et h = 2 cm : V = 48 cm³.', 'Pour retrouver une dimension : L = V ÷ (l × h).'],
      ['Prisme', 'Aire de la base et hauteur du prisme.', 'ann2_prisme', 'V = A_base × h', 'A_base en cm² ou m² ; h en cm ou m ; V en cm³ ou m³.', 'Si A_base = 12 cm² et h = 5 cm : V = 60 cm³.', 'La base peut être un triangle, un rectangle ou un autre polygone.'],
      ['Cylindre', 'Rayon r de la base et hauteur h.', 'ann2_cylindre', 'V = π × r² × h', 'r et h en cm ou m ; V en cm³ ou m³.', 'Si r = 2 cm et h = 5 cm : V ≈ 3,14 × 4 × 5 = 62,8 cm³.', 'La base du cylindre est un disque : A_base = πr².']
    ]},
    { title: 'PROPRIÉTÉS ET UNITÉS À RETENIR', intro: 'Ces repères permettent de vérifier si une formule et une unité conviennent au problème.', cards: [
      ['Angles des polygones étudiés', 'Les angles intérieurs se lisent sur la figure.', 'ann2_proprietes', 'Triangle : 180° ;   quadrilatère : 360°', 'Un angle se mesure en degrés (°).', 'Dans un triangle, si deux angles mesurent 60° et 70°, le troisième mesure 50°.', 'Carré et rectangle : quatre angles droits.'],
      ['Choisir la bonne unité', 'La grandeur demandée indique l’unité du résultat.', 'ann2_unites', 'Longueur / périmètre : cm ou m ; aire : cm² ou m² ; volume : cm³ ou m³', 'Capacité : mL, cL, dL, L ; 1 dm³ = 1 L ; 1 cm³ = 1 mL.', 'Une longueur de 8 cm ne peut pas donner une aire de 8 cm : il faut appliquer la formule et écrire cm².', 'Toujours convertir les mesures dans la même unité avant de calculer.']
    ]}
  ];

  let count = 0;
  for (const sec of sections) {
    children.push(...section(sec.title, sec.intro));
    for (const data of sec.cards) {
      const [title, subtitle, name, formula, unit, example, note] = data;
      children.push(card(title, subtitle, img(name), formula, unit, example, note));
      count += 1;
      if (count < sections.reduce((s, x) => s + x.cards.length, 0)) children.push(new Paragraph({ spacing: { after: 70 }, children: [] }));
      if ([2, 5, 9, 11].includes(count)) children.push(new Paragraph({ children: [new PageBreak()] }));
    }
  }
  children.push(para('Fin du prototype — les cartes pourront être intégrées dans l’Annexe 2 du manuel après validation de la lisibilité et de la couverture mathématique.', { align: AlignmentType.CENTER, color: C.gray, size: 18, before: 120 }));

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 23 }, paragraph: { spacing: { line: 285 } } } } },
    sections: [{
      properties: { page: { margin: { top: 700, right: 850, bottom: 700, left: 850 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [run('J-Learn — prototype Annexe 2', { size: 17, color: C.gray })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [run('Page ', { size: 17, color: C.gray }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 17, color: C.gray })] })] }) },
      children
    }]
  });
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT, buf);
  console.log(`${OUT}: ${buf.length} octets`);
}
main().catch(err => { console.error(err); process.exit(1); });
