// Sujets d'examen format CEPE — 20 sujets OPÉRATIONS + 20 sujets PROBLÈMES, corrigés démarche complète.
// Tous les énoncés sont originaux ; les nombres sont générés et les corrigés CALCULÉS (zéro erreur).
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, ImageRun, Math: DocxMath, MathFraction, MathRun,
  Table, TableRow, TableCell, WidthType, BorderStyle, TableLayoutType, HeightRule
} = require('docx');
const sharp = require('sharp');
const { pngSize } = require('./figlib');
const OPFIG = require('./opfig');

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', pale: 'EAF2F8', white: 'FFFFFF', black: '000000' };
const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics });
const rich = (text, opt = {}) => {
  const out = []; let last = 0; const re = /(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(tr(text.slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1].trim())], denominator: [new MathRun(m[2].trim())] })] }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(tr(text.slice(last), opt));
  return out.length ? out : [tr(text, opt)];
};
const p = (text, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: opt.after ?? 100, line: 300 }, indent: opt.indent ? { left: opt.indent } : undefined, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: rich(text, opt) });
const title = (text, level = 1, bookmark) => {
  const run = tr(text, { bold: true, color: level === 1 ? C.red : C.green, size: level === 1 ? 32 : 28 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 200, after: 150 }, children });
};
const banner = (text, fill) => new Paragraph({ spacing: { before: 180, after: 110 }, shading: { type: ShadingType.CLEAR, fill }, children: [tr('  ' + text, { bold: true, color: C.white, size: 26 })] });
const page = () => new Paragraph({ children: [new PageBreak()] });
const answerCell = (value, opt = {}) => new TableCell({
  width: opt.width ? { size: opt.width, type: WidthType.PERCENTAGE } : undefined,
  shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined,
  children: Array.isArray(value) ? value.map(v => p(v, { size: opt.size || 20, bold: !!opt.bold, color: opt.color || C.black, after: 40 })) : [p(value, { size: opt.size || 20, bold: !!opt.bold, color: opt.color || C.black, after: 40 })]
});
const tableBorders = { top: { style: BorderStyle.SINGLE, size: 6, color: C.blue }, bottom: { style: BorderStyle.SINGLE, size: 6, color: C.blue }, left: { style: BorderStyle.SINGLE, size: 6, color: C.blue }, right: { style: BorderStyle.SINGLE, size: 6, color: C.blue }, insideHorizontal: { style: BorderStyle.SINGLE, size: 4, color: 'AAB7C4' }, insideVertical: { style: BorderStyle.SINGLE, size: 4, color: 'AAB7C4' } };
const tableHeader = () => new TableRow({ children: [answerCell('Solution', { width: 46, fill: 'DCE6F1', bold: true, color: C.blue }), answerCell('Résultat', { width: 22, fill: 'DCE6F1', bold: true, color: C.blue }), answerCell('Opération', { width: 32, fill: 'DCE6F1', bold: true, color: C.blue })] });
const solutionTable = (problem) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, columnWidths: [46, 22, 32], borders: tableBorders,
  rows: [tableHeader(), new TableRow({ children: [answerCell(problem.steps || problem.rep, { width: 46 }), answerCell(problem.rep, { width: 22, fill: 'E8F5E9', bold: true, color: C.green }), answerCell(problem.op, { width: 32, color: C.ocre })] })]
});
const responseGrid = (count) => new Table({
  width: { size: 100, type: WidthType.PERCENTAGE }, layout: TableLayoutType.FIXED, columnWidths: [46, 22, 32], borders: tableBorders,
  rows: [tableHeader(), ...Array.from({ length: count }, (_, i) => new TableRow({ height: { value: 1100, rule: HeightRule.ATLEAST }, children: [answerCell(`Problème ${i + 1}`, { width: 46, fill: 'F8FBFF', color: C.blue }), answerCell(' ', { width: 22 }), answerCell(' ', { width: 32 })] }))]
});
const svgPng = async (sv) => sharp(Buffer.from(sv), { density: 96 }).resize({ width: 800 }).png({ palette: true, colors: 64, compressionLevel: 9 }).toBuffer();
const imageParagraph = (buf, width = 500) => {
  const { w, h } = pngSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 80, after: 100 }, children: [new ImageRun({ type: 'png', data: buf, transformation: { width, height: Math.round(width * h / w) } })] });
};

// ---------- outils ----------
function mulberry32(a) { return function () { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
const F = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202F/g, '\u00A0');
const FD = x => x.toLocaleString('fr-FR', { minimumFractionDigits: 0, maximumFractionDigits: 2 }).replace(/\u202F/g, '\u00A0');
const pgcd = (a, b) => b ? pgcd(b, a % b) : a;
const n9 = n => { n = Math.abs(n); while (n > 9) n = String(n).split('').reduce((a, c) => a + (+c), 0); return n; };

// ---------- SUJETS OPÉRATIONS ----------
function sujetOperationsGenerique(k) {
  const r = mulberry32(1000 + k * 7);
  const ri = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const items = [], corr = [], visuals = [];
  // 1. addition
  const a = ri(123456, 523456), b = ri(54321, 999999 - a);
  items.push(`${F(a)} + ${F(b)}`);
  visuals.push(OPFIG.addSvg(a, b, a + b));
  corr.push([`On pose l’addition en alignant les chiffres par colonnes (unités sous unités).`,
    `${F(a)} + ${F(b)} = ${F(a + b)}.`]);
  // 2. soustraction
  const c = ri(300000, 987654), d = ri(12345, c - 10000);
  items.push(`${F(c)} − ${F(d)}`);
  visuals.push(OPFIG.subSvg(c, d, c - d));
  corr.push([`On pose la soustraction, le plus grand nombre en haut, et on gère les retenues.`,
    `${F(c)} − ${F(d)} = ${F(c - d)}.`,
    `Vérification par l’addition : ${F(c - d)} + ${F(d)} = ${F(c)} ✓`]);
  // 3. multiplication 3 ch × 2 ch
  const e = ri(214, 987), f = ri(23, 97);
  const fd = Math.floor(f / 10) * 10, fu = f % 10;
  items.push(`${F(e)} × ${f}`);
  visuals.push(OPFIG.mulSvg(e, f, e * f));
  corr.push([`On décompose le multiplicateur : ${f} = ${fd} + ${fu}.`,
    `${F(e)} × ${fd} = ${F(e * fd)}  et  ${F(e)} × ${fu} = ${F(e * fu)}.`,
    `${F(e)} × ${f} = ${F(e * fd)} + ${F(e * fu)} = ${F(e * f)}.`,
    `Contrôle visuel par 9 : ${e} → ${n9(e)} ; ${f} → ${n9(f)} ; ${n9(e)} × ${n9(f)} = ${n9(n9(e) * n9(f))}, et ${F(e * f)} → ${n9(e * f)} ✓`]);
  // 4. division euclidienne
  const h = ri(12, 45), q = ri(23, 97), rr = ri(1, h - 1), g = h * q + rr;
  items.push(`${F(g)} ÷ ${h}`);
  visuals.push(OPFIG.longDivisionSvg(g, h, q, rr));
  corr.push([`Encadrement : ${h} × 10 = ${F(h * 10)} < ${F(g)} < ${h} × 100 = ${F(h * 100)} → le quotient a 2 chiffres.`,
    `${F(g)} = (${h} × ${q}) + ${rr} : quotient ${q}, reste ${rr}.`,
    `Vérification : ${h} × ${q} + ${rr} = ${F(h * q)} + ${rr} = ${F(g)} ✓ (le reste ${rr} est bien plus petit que ${h}).`,
    `Contrôle visuel par 9 : H ${n9(h)} × B ${n9(q)} + reste ${rr} → ${n9(h * q + rr)}, comme ${F(g)} → ${n9(g)} ✓`]);
  // 5. fractions (4 variantes)
  const v = k % 4;
  if (v === 0) {
    const den = [5, 7, 8, 9, 11, 12][ri(0, 5)], na = ri(1, den - 1), nb2 = ri(1, den);
    const s = na + nb2, gg = pgcd(s, den);
    items.push(`${na}/${den} + ${nb2}/${den}`);
    visuals.push(OPFIG.fractionSvg(`${na}/${den} + ${nb2}/${den}`, `${s}/${den}`, 'Même dénominateur : les numérateurs se réunissent.'));
    const lines = [`Même dénominateur : on additionne les numérateurs.`, `${na}/${den} + ${nb2}/${den} = ${s}/${den}.`];
    if (gg > 1) lines.push(`On simplifie par ${gg} : ${s}/${den} = ${s / gg}/${den / gg}.`);
    corr.push(lines);
  } else if (v === 1) {
    const na = ri(2, 5), nb2 = ri(3, 9), ne = ri(4, 9);
    const num = na * nb2, den = nb2 * ne;
    items.push(`${na}/${nb2} × ${nb2}/${ne}`);
    visuals.push(OPFIG.fractionSvg(`${na}/${nb2} × ${nb2}/${ne}`, `${na}/${ne}`, 'Je multiplie les deux fractions puis je simplifie.'));
    corr.push([`On multiplie les numérateurs entre eux et les dénominateurs entre eux.`,
      `${na}/${nb2} × ${nb2}/${ne} = ${num}/${den}.`,
      `On simplifie par ${nb2} (simplification croisée) : le résultat est ${na}/${ne}.`]);
  } else if (v === 2) {
    const na = ri(2, 7), nb2 = ri(3, 9), nc = ri(2, 7), nd = ri(3, 9);
    const num = na * nd, den = nb2 * nc, gg = pgcd(num, den);
    items.push(`${na}/${nb2} ÷ ${nc}/${nd}`);
    visuals.push(OPFIG.fractionSvg(`${na}/${nb2} ÷ ${nc}/${nd}`, `${num}/${den}`, 'Je retourne la deuxième fraction et je multiplie.'));
    const lines = [`Diviser par une fraction, c’est multiplier par son inverse.`,
      `${na}/${nb2} ÷ ${nc}/${nd} = ${na}/${nb2} × ${nd}/${nc} = ${num}/${den}.`];
    if (gg > 1) lines.push(`On simplifie par ${gg} : ${num}/${den} = ${num / gg}/${den / gg}.`);
    corr.push(lines);
  } else {
    const n = ri(3, 9), nb2 = ri(2, 7), na = ri(1, nb2 * 2);
    items.push(`${n} − ${na}/${nb2}`);
    visuals.push(OPFIG.fractionSvg(`${n} − ${na}/${nb2}`, `${n * nb2 - na}/${nb2}`, 'Je transforme l’entier en fraction de même dénominateur.'));
    corr.push([`On écrit l’entier en fraction : ${n} = ${n * nb2}/${nb2}.`,
      `${n} − ${na}/${nb2} = ${n * nb2}/${nb2} − ${na}/${nb2} = ${n * nb2 - na}/${nb2}.`]);
  }
  // 6. décimaux / conversions (4 variantes)
  const w = Math.floor(k / 4) % 4;
  if (w === 0) {
    const x = ri(1234, 9876) / 100, y = ri(123, 987) / 10;
    items.push(`${FD(x)} + ${FD(y)}`);
    visuals.push(OPFIG.decimalSvg(`${FD(x)} + ${FD(y)}`, `${FD(Math.round((x + y) * 100) / 100)}`));
    corr.push([`On aligne les virgules l’une sous l’autre (on peut compléter avec des zéros).`,
      `${FD(x)} + ${FD(y)} = ${FD(Math.round((x + y) * 100) / 100)}.`]);
  } else if (w === 1) {
    const x = ri(5000, 9876) / 100, y = ri(123, 4900) / 100;
    items.push(`${FD(x)} − ${FD(y)}`);
    visuals.push(OPFIG.decimalSvg(`${FD(x)} − ${FD(y)}`, `${FD(Math.round((x - y) * 100) / 100)}`));
    corr.push([`On aligne les virgules, puis on soustrait colonne par colonne.`,
      `${FD(x)} − ${FD(y)} = ${FD(Math.round((x - y) * 100) / 100)}.`]);
  } else if (w === 2) {
    const convs = [
      () => { const m = ri(125, 980) / 100; return [`Convertir ${FD(m)} m en cm`, [`1 m = 100 cm : la virgule glisse de 2 colonnes vers la droite.`, `${FD(m)} m = ${F(m * 100)} cm.`]]; },
      () => { const kg = ri(12, 85) / 10; return [`Convertir ${FD(kg)} kg en g`, [`1 kg = 1 000 g : la virgule glisse de 3 colonnes vers la droite.`, `${FD(kg)} kg = ${F(kg * 1000)} g.`]]; },
      () => { const L = ri(15, 95) / 10; return [`Convertir ${FD(L)} L en cL`, [`1 L = 100 cL.`, `${FD(L)} L = ${F(L * 100)} cL.`]]; },
      () => { const km = ri(12, 78) / 10; return [`Convertir ${FD(km)} km en m`, [`1 km = 1 000 m.`, `${FD(km)} km = ${F(km * 1000)} m.`]]; },
    ];
    const [it, co] = convs[k % 4]();
    items.push(it); visuals.push(OPFIG.conversionSvg(it, co[1])); corr.push(co);
  } else {
    const H = ri(1, 3), M = [15, 20, 30, 45, 50][ri(0, 4)];
    items.push(`Convertir ${H} h ${M} min en minutes`);
    visuals.push(OPFIG.conversionSvg(`${H} h ${M} min`, `${H * 60 + M} min`));
    corr.push([`1 h = 60 min, donc ${H} h = ${H} × 60 = ${H * 60} min.`,
      `${H} h ${M} min = ${H * 60} + ${M} = ${H * 60 + M} min.`]);
  }
  return { items, corr, visuals };
}

// ---------- SUJETS OPERATIONS : formats varies inspires des epreuves CEPE ----------
// Le recueil local 34-sujets-cepe_compress.pdf montre des formats bien plus larges que
// « six lignes identiques » : nombre manquant, duree sexagesimale, conversion + operation,
// fraction d'une somme, prix proportionnel, perimetre/aire/hauteur et division avec unite.
function sujetOperations(k) {
  const r = mulberry32(8100 + k * 31);
  const ri = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const item = (text, visual, lines) => ({ text, visual, lines });
  const add = (a, b) => item(`${F(a)} + ${F(b)} = …`, OPFIG.addSvg(a, b, a + b), [`J’aligne unités, dizaines et centaines.`, `${F(a)} + ${F(b)} = ${F(a + b)}.`]);
  const add3 = (a, b, c) => item(`${FD(a)} + ${FD(b)} + ${FD(c)} = …`, OPFIG.decimalSvg(`${FD(a)} + ${FD(b)} + ${FD(c)}`, FD(a + b + c)), [`J’aligne les virgules dans la même colonne.`, `${FD(a)} + ${FD(b)} + ${FD(c)} = ${FD(a + b + c)}.`]);
  const sub = (a, b) => item(`${F(a)} − ${F(b)} = …`, OPFIG.subSvg(a, b, a - b), [`Je pose le plus grand nombre en haut et j’emprunte si nécessaire.`, `${F(a)} − ${F(b)} = ${F(a - b)}.`]);
  const mul = (a, b) => item(`${F(a)} × ${F(b)} = …`, OPFIG.mulSvg(a, b, a * b), [`Je calcule le produit des unités, puis celui des dizaines décalées.`, `${F(a)} × ${F(b)} = ${F(a * b)}.`]);
  const div = (a, b, rest = 0) => { const q = Math.floor(a / b); return item(`${F(a)} ÷ ${F(b)} = …`, OPFIG.longDivisionSvg(a, b, q, rest), [`Je pose la division : quotient ${q}, reste ${rest}.`, `${F(a)} = (${F(b)} × ${F(q)}) + ${F(rest)}.`]); };
  const dsub = (a, b) => item(`${FD(a)} − ${FD(b)} = …`, OPFIG.decimalSvg(`${FD(a)} − ${FD(b)}`, FD(a - b)), [`J’aligne les virgules et je soustrais colonne par colonne.`, `${FD(a)} − ${FD(b)} = ${FD(a - b)}.`]);
  const dmul = (a, b) => item(`${FD(a)} × ${b} = …`, OPFIG.decimalSvg(`${FD(a)} × ${b}`, FD(a * b)), [`Je multiplie sans la virgule, puis je replace les chiffres décimaux.`, `${FD(a)} × ${b} = ${FD(a * b)}.`]);
  const fracAdd = (a, b, d) => item(`${a}/${d} + ${b}/${d} = …`, OPFIG.fractionSvg(`${a}/${d} + ${b}/${d}`, `${a + b}/${d}`, 'Même dénominateur : je réunis les parts.'), [`Le dénominateur reste ${d} ; j’additionne les numérateurs.`, `${a}/${d} + ${b}/${d} = ${a + b}/${d}.`]);
  const fracSub = (a, b, d) => item(`${a}/${d} − ${b}/${d} = …`, OPFIG.fractionSvg(`${a}/${d} − ${b}/${d}`, `${a - b}/${d}`, 'Même dénominateur : je retire les parts.'), [`Le dénominateur reste ${d} ; je soustrais les numérateurs.`, `${a}/${d} − ${b}/${d} = ${a - b}/${d}.`]);
  const fracMul = (a, b, e) => item(`${a}/${b} × ${b}/${e} = …`, OPFIG.fractionSvg(`${a}/${b} × ${b}/${e}`, `${a}/${e}`, 'Je simplifie le facteur commun avant de multiplier.'), [`Je simplifie par ${b}, puis je multiplie.`, `${a}/${b} × ${b}/${e} = ${a}/${e}.`]);
  const fracOf = (n, a, b, unit) => { const result = n * a / b; return item(`${a}/${b} de ${F(n)} ${unit} = …`, OPFIG.fractionSvg(`${a}/${b} de ${F(n)} ${unit}`, `${F(result)} ${unit}`, 'Je partage en b parts puis je prends a parts.'), [`${F(n)} ÷ ${b} = ${F(n / b)} ${unit}, puis × ${a}.`, `${a}/${b} de ${F(n)} ${unit} = ${F(result)} ${unit}.`]); };
  const conv = (text, expression, result, note = 'Je convertis avant de calculer.') => item(text, OPFIG.conversionSvg(expression, result), [note, `${expression} = ${result}.`]);
  const model = (text, titleText, data, operation, result, lines) => item(text, OPFIG.modelSvg(titleText, data, operation, result), lines);
  const papers = [
    () => [add(348756, 92784), sub(805420, 276835), mul(693, 94), div(4687, 23, 2), conv('9 t − 3 500 kg = … t', '9 t − 3 500 kg', '5,5 t', '1 t = 1 000 kg : je convertis puis je soustrais.')],
    () => [add3(510.04, 2124.2, 610), item('3 075 kg + … = 3 890 kg', OPFIG.addSvg(3075, 815, 3890), ['Le nombre manquant est la différence : 3 890 − 3 075.', '… = 815 kg.']), item('4 h 05 min × 8 = …', OPFIG.modelSvg('Durée multipliée', ['4 h 05 min', '× 8'], '60 min = 1 h', '32 h 40'), ['4 h × 8 = 32 h ; 5 min × 8 = 40 min.', '4 h 05 min × 8 = 32 h 40 min.']), fracAdd(1, 3, 6), model('Un champ carré a un périmètre de 240 m. Quel est son côté ?', 'Carré : retrouver le côté', ['P = 240 m', '4 côtés égaux'], '240 ÷ 4', '60 m', ['Un carré a 4 côtés égaux : 240 ÷ 4 = 60.', 'Le côté mesure 60 m.'])],
    () => [dsub(987.5, 248.75), item('… + 1 275 kg = 3 890 kg', OPFIG.addSvg(2615, 1275, 3890), ['Le nombre manquant est 3 890 − 1 275.', '… = 2 615 kg.']), div(7245, 32, 5), conv('7,548 t + 14 kg = … kg', '7,548 t + 14 kg', '7 562 kg'), model('1 kg de viande coûte 12 000 Ar. Combien coûtent 9,5 kg ?', 'Prix proportionnel', ['1 kg → 12 000 Ar', '9,5 kg'], '12 000 × 9,5', '114 000 Ar', ['Prix total : 12 000 × 9,5 = 114 000.', 'Les 9,5 kg coûtent 114 000 Ar.'])],
    () => [fracAdd(3, 5, 10), fracSub(7, 2, 9), fracMul(2, 3, 4), fracOf(1500, 3, 5, 'Ar'), conv('2 h 35 min + 1 h 45 min = …', '2 h 35 min + 1 h 45 min', '4 h 20 min', '60 min = 1 h : je regroupe les minutes.')],
    () => [add(475896, 243907), dsub(84.5, 27.86), conv('40,5 hL + 2,09 m³ = … L', '4 050 L + 2 090 L', '6 140 L', '1 hL = 100 L et 1 m³ = 1 000 L.'), item('7 h 20 min − 3 h 25 min 40 s = …', OPFIG.modelSvg('Soustraction de durées', ['7 h 20 min 00 s', '− 3 h 25 min 40 s'], 'emprunt de 1 h', '3 h 54 min 20 s'), ['J’emprunte 1 h = 60 min puis 1 min = 60 s.', '7 h 20 min − 3 h 25 min 40 s = 3 h 54 min 20 s.']), model('Un triangle a une aire de 54 m² et une base de 12 m. Calculez sa hauteur.', 'Triangle : aire → hauteur', ['A = 54 m²', 'b = 12 m'], '2 × 54 ÷ 12', '9 m', ['A = (b × h) ÷ 2, donc h = (2 × 54) ÷ 12.', 'La hauteur mesure 9 m.'])],
    () => [dmul(23.5, 4), item('4 500 ÷ 100 = …', OPFIG.decimalSvg('4 500 ÷ 100', '45'), ['Diviser par 100 déplace la virgule de deux rangs vers la gauche.', '4 500 ÷ 100 = 45.']), fracOf(240, 3, 8, 'kg'), model('Un rectangle mesure 28 m sur 16 m. Calculez son aire.', 'Rectangle : aire', ['L = 28 m', 'l = 16 m'], '28 × 16', '448 m²', ['A = L × l = 28 × 16 = 448.', 'L’aire est 448 m².']), model('Un tissu coûte 15 000 Ar le mètre. Quel est le prix de 3,5 m ?', 'Prix au mètre', ['1 m → 15 000 Ar', '3,5 m'], '15 000 × 3,5', '52 500 Ar', ['Prix = 15 000 × 3,5 = 52 500.', 'Le tissu coûte 52 500 Ar.'])],
    () => [add3(125.6, 78.45, 9.005), sub(900000, 48765), mul(408, 36), div(9365, 45, 20), conv('3 kg 250 g + 1 kg 800 g = … kg', '3 250 g + 1 800 g', '5 kg 50 g')],
    () => [model('Un carré a un périmètre de 268 m. Calculez son côté.', 'Carré : périmètre → côté', ['P = 268 m', '4 côtés égaux'], '268 ÷ 4', '67 m', ['Côté = 268 ÷ 4 = 67.', 'Le côté mesure 67 m.']), model('Un rectangle mesure 35 m sur 18 m. Calculez périmètre et aire.', 'Rectangle : deux questions', ['L = 35 m ; l = 18 m', 'tour puis surface'], 'P = 2(L+l)', '106 m ; 630 m²', ['P = 2 × (35 + 18) = 106 m ; A = 35 × 18 = 630 m².', 'Le périmètre est 106 m et l’aire 630 m².']), conv('2,4 m³ + 350 L = … L', '2 400 L + 350 L', '2 750 L'), dmul(12.5, 8), fracOf(800, 3, 4, 'Ar')],
    () => [div(46242, 63, 0), conv('7,548 t + 14 kg = … kg', '7 548 kg + 14 kg', '7 562 kg'), item('4 h 05 min × 8 = …', OPFIG.modelSvg('Durée multipliée', ['4 h 05 min', '× 8'], 'heures et minutes', '32 h 40 min'), ['4 h × 8 = 32 h ; 5 min × 8 = 40 min.', 'Résultat : 32 h 40 min.']), model('Un triangle a une aire de 54 m² et une base de 12 m.', 'Triangle : formule inverse', ['A = 54 m²', 'b = 12 m'], '2A ÷ b', '9 m', ['h = (2 × 54) ÷ 12 = 9 m.', 'La hauteur est 9 m.']), model('12 L de lait coûtent 30 000 Ar. Quel est le prix de 8 L ?', 'Prix proportionnel', ['12 L → 30 000 Ar', '8 L'], '30 000 ÷ 12 × 8', '20 000 Ar', ['Prix d’1 L = 30 000 ÷ 12 = 2 500 Ar.', 'Prix de 8 L = 2 500 × 8 = 20 000 Ar.'])],
    () => [item('510,04 + 2 124,2 + 610 = …', OPFIG.decimalSvg('510,04 + 2 124,2 + 610', '3 244,24'), ['J’aligne les virgules et je complète les zéros.', 'Résultat : 3 244,24.']), item('3 075 kg + … = 3 890 kg', OPFIG.addSvg(3075, 815, 3890), ['3 890 − 3 075 = 815.', 'Le nombre manquant est 815 kg.']), item('4 h 05 min × 8 = …', OPFIG.modelSvg('Durée multipliée', ['4 h 05 min', '× 8'], 'conversion des minutes', '32 h 40 min'), ['4 h 05 min × 8 = 32 h 40 min.']), conv('40,5 hL + 2,09 m³ = … L', '4 050 L + 2 090 L', '6 140 L'), fracOf(1500, 3, 5, 'Ar')],
    () => [model('Un champ carré a un périmètre de 268 m. Calculez côté, aire et prix à 20 000 Ar/m².', 'Champ carré : trois réponses', ['P = 268 m', '20 000 Ar/m²'], 'côté 67 ; aire 4 489', '89 780 000 Ar', ['Côté = 268 ÷ 4 = 67 m ; aire = 67 × 67 = 4 489 m².', 'Prix = 4 489 × 20 000 = 89 780 000 Ar.']), model('2,5 t de haricots à 3 000 Ar/kg : recette ?', 'Récolte et prix', ['2,5 t = 2 500 kg', '3 000 Ar/kg'], '2 500 × 3 000', '7 500 000 Ar', ['2,5 t = 2 500 kg ; recette = 2 500 × 3 000.', 'La recette est 7 500 000 Ar.']), fracOf(147000, 2, 5, 'Ar'), item('850 000 Ar placés à 5 % : intérêt annuel = …', OPFIG.modelSvg('Intérêt à 5 %', ['capital 850 000 Ar', 'taux 5 %'], '850 000 × 5 ÷ 100', '42 500 Ar'), ['Intérêt = 850 000 × 5 ÷ 100.', 'L’intérêt annuel est 42 500 Ar.']), sub(1000000, 42500)],
    () => [model('Un marchand achète 8 kg de riz à 3 200 Ar/kg. Total ?', 'Marché : prix total', ['8 kg', '3 200 Ar/kg'], '8 × 3 200', '25 600 Ar', ['Prix total = 8 × 3 200 = 25 600 Ar.', 'Il paie 25 600 Ar.']), item('Il paie avec 50 000 Ar. Monnaie rendue = …', OPFIG.subSvg(50000, 25600, 24400), ['Monnaie = 50 000 − 25 600.', 'Il reçoit 24 400 Ar.']), div(15450, 6, 3), fracAdd(2, 1, 5), conv('3 500 g + 2,5 kg = … kg', '3,5 kg + 2,5 kg', '6 kg')],
    () => [model('Une rizière de 48 m sur 25 m produit 3,5 t par are. Masse récoltée ?', 'Rizière : aire et rendement', ['A = 48 × 25 = 1 200 m²', '1 are = 100 m²'], '12 × 3,5 t', '42 t', ['1 200 m² = 12 ares ; masse = 12 × 3,5 = 42 t.', 'La récolte pèse 42 t.']), div(6500, 50, 0), fracOf(6500, 1, 4, 'kg'), mul(130, 50), dmul(1200, 325)],
    () => [div(360, 12, 0), mul(24, 18), model('24 élèves reçoivent chacun 3 cahiers à 1 500 Ar. Dépense ?', 'École : groupes et prix', ['24 × 3 cahiers', '1 500 Ar/cahier'], '72 × 1 500', '108 000 Ar', ['Nombre de cahiers = 24 × 3 = 72.', 'Dépense = 72 × 1 500 = 108 000 Ar.']), conv('2 h 45 min + 1 h 35 min = …', '2 h 45 min + 1 h 35 min', '4 h 20 min'), fracOf(40, 3, 5, 'élèves')],
    () => [item('Un taxi part à 7 h 30 et arrive à 9 h 30. Durée = …', OPFIG.modelSvg('Trajet : ligne du temps', ['7 h 30', '9 h 30'], '9 h 30 − 7 h 30', '2 h'), ['Durée = 9 h 30 − 7 h 30 = 2 h.', 'Le trajet dure 2 heures.']), model('Distance 100 km en 2 h : vitesse moyenne ?', 'Transport : distance ÷ durée', ['100 km', '2 h'], '100 ÷ 2', '50 km/h', ['Vitesse = distance ÷ durée = 100 ÷ 2.', 'La vitesse moyenne est 50 km/h.']), dmul(8.5, 100), conv('2 500 m = … km', '2 500 m ÷ 1 000', '2,5 km'), div(480, 30, 0)],
    () => [model('Clôturer un champ de 80 m sur 45 m avec une porte de 4 m : longueur de grillage ?', 'Clôture : périmètre', ['L = 80 m ; l = 45 m', 'porte = 4 m'], '2(80+45) − 4', '246 m', ['P = 2 × (80 + 45) = 250 m ; grillage = 250 − 4.', 'Il faut 246 m de grillage.']), model('246 m de grillage à 2 500 Ar/m : prix ?', 'Clôture : prix', ['246 m', '2 500 Ar/m'], '246 × 2 500', '615 000 Ar', ['Prix = 246 × 2 500 = 615 000 Ar.', 'La clôture coûte 615 000 Ar.']), mul(125, 48), conv('4 m³ = … L', '4 × 1 000 L', '4 000 L'), dsub(1000.5, 278.75)],
    () => [conv('5 hL + 35 L = … L', '500 L + 35 L', '535 L'), conv('2,09 m³ = … L', '2,09 × 1 000 L', '2 090 L'), model('535 L remplissent des bidons de 5 L. Combien de bidons ?', 'Capacité : groupement', ['535 L', 'bidons de 5 L'], '535 ÷ 5', '107 bidons', ['Nombre de bidons = 535 ÷ 5 = 107.', 'On remplit 107 bidons.']), fracOf(240, 3, 4, 'L'), model('107 bidons vendus 2 000 Ar chacun : recette ?', 'Capacité : recette', ['107 bidons', '2 000 Ar chacun'], '107 × 2 000', '214 000 Ar', ['Recette = 107 × 2 000 = 214 000 Ar.', 'La recette est 214 000 Ar.'])],
    () => [fracAdd(5, 2, 8), fracSub(11, 3, 12), fracMul(3, 4, 5), fracOf(960, 5, 8, 'Ar'), dmul(7.25, 12)],
    () => [item('… − 3 785 = 8 420', OPFIG.subSvg(12205, 3785, 8420), ['Le nombre manquant = 8 420 + 3 785.', '… = 12 205.']), item('… × 24 = 7 200', OPFIG.mulSvg(300, 24, 7200), ['Le facteur manquant = 7 200 ÷ 24.', '… = 300.']), item('8 400 ÷ … = 120', OPFIG.longDivisionSvg(8400, 70, 120, 0), ['Le diviseur manquant = 8 400 ÷ 120.', '… = 70.']), conv('3 600 g = … kg', '3 600 g ÷ 1 000', '3,6 kg'), add(99999, 1)],
    () => [add(587406, 91295), sub(700000, 286754), mul(725, 48), div(9876, 37, 21), model('Un sac de riz de 50 kg est partagé en sacs de 2,5 kg. Combien de sacs ?', 'Partage de masse', ['50 kg', '2,5 kg par sac'], '50 ÷ 2,5', '20 sacs', ['Nombre de sacs = 50 ÷ 2,5 = 20.', 'On obtient 20 sacs.'])]
  ];
  const chosen = papers[(k - 1) % papers.length]();
  return { items: chosen.map(x => x.text), corr: chosen.map(x => x.lines), visuals: chosen.map(x => x.visual) };
}

// ---------- SUJETS PROBLEMES ----------
const TEMPLATES = [
  (ri) => { // marché et monnaie
    const n = ri(3, 8), pk = [1000, 1200, 1500][ri(0, 2)], s = [2500, 3000, 3500][ri(0, 2)], B = 20000;
    const riz = n * pk, tot = riz + s, rendu = B - tot;
    return {
      enonce: `Au marché, Soa achète ${n} kapoaka de riz à ${F(pk)} Ar le kapoaka et un savon à ${F(s)} Ar. Elle paie avec un billet de ${F(B)} Ar. Combien lui rend-on ?`,
      steps: [`Étape 1 — Prix du riz : ${n} × ${F(pk)} = ${F(riz)} Ar.`,
        `Étape 2 — Dépense totale : ${F(riz)} + ${F(s)} = ${F(tot)} Ar.`,
        `Étape 3 — Monnaie rendue : ${F(B)} − ${F(tot)} = ${F(rendu)} Ar.`],
      rep: `On lui rend ${F(rendu)} Ar.`,
      qc: `Pour rendre la monnaie, il faut d’abord connaître le prix TOTAL des achats : le total est la question cachée.`,
      mi: `« à … Ar le kapoaka » (prix unitaire → ×) ; « et un savon » (réunion → +) ; « combien lui rend-on » (écart → −).`,
      op: `multiplication (prix du riz), puis addition (total), puis soustraction (monnaie rendue).`
    };
  },
  (ri) => { // partage en sachets
    const R = [25, 40, 50][ri(0, 2)], m = [250, 400, 500][ri(0, 2)];
    const Rg = R * 1000, nb = Math.floor(Rg / m), reste = Rg % m;
    return {
      enonce: `Un commerçant partage un sac de ${R} kg de sucre en sachets de ${F(m)} g. Combien de sachets pleins obtient-il, et combien de grammes reste-t-il ?`,
      steps: [`Étape 1 — Conversion : ${R} kg = ${R} × 1 000 = ${F(Rg)} g.`,
        `Étape 2 — Division : ${F(Rg)} ÷ ${F(m)} = ${F(nb)}${reste ? `, reste ${F(reste)}` : ' exactement'}.`,
        `Vérification : ${F(m)} × ${F(nb)}${reste ? ` + ${F(reste)}` : ''} = ${F(Rg)} ✓`],
      rep: `Il obtient ${F(nb)} sachets pleins${reste ? ` et il reste ${F(reste)} g` : ' et il ne reste rien'}.`,
      qc: `On ne peut diviser que des grammes par des grammes : la conversion kg → g est la question cachée.`,
      mi: `« partage… en sachets de » → division ; « kg » et « g » dans le même énoncé → conversion d’abord.`,
      op: `conversion, puis division euclidienne : combien de paquets de … g dans … g, et que reste-t-il ?`
    };
  },
  (ri) => { // proportionnalité carburant
    const cc = [8, 9, 12][ri(0, 2)], D = [150, 250, 350][ri(0, 2)];
    const conso = cc * D / 100;
    return {
      enonce: `Un taxi-brousse consomme ${cc} L de carburant pour 100 km. Quelle quantité consomme-t-il pour parcourir ${D} km ?`,
      steps: [`Étape 1 — Pour 1 km : ${cc} ÷ 100 = ${FD(cc / 100)} L (ou on raisonne par paquets de 100 km).`,
        `Étape 2 — Pour ${D} km : ${cc} × ${D} ÷ 100 = ${FD(conso)} L.`,
        `C’est un tableau de proportionnalité : 100 km → ${cc} L ; ${D} km → ${FD(conso)} L.`],
      rep: `Il consomme ${FD(conso)} L pour ${D} km.`,
      qc: `La consommation est donnée pour 100 km, on la cherche pour un autre trajet : c’est un tableau de proportionnalité.`,
      mi: `« … L pour 100 km… pour … km ? » → proportionnalité (produit en croix ou retour à l’unité).`,
      op: `multiplication et division par le coefficient : on raisonne par paquets de 100 km.`
    };
  },
  (ri) => { // clôture périmètre
    const L = ri(6, 12) * 10, l = ri(3, 8) * 10, f = [1500, 2000, 2500][ri(0, 2)];
    const P = (L + l) * 2, cout = P * f;
    return {
      enonce: `Le champ rectangulaire de Rakoto mesure ${L} m de longueur et ${l} m de largeur. Il veut le clôturer avec du grillage vendu ${F(f)} Ar le mètre. Combien va coûter la clôture ?`,
      steps: [`Étape 1 — Périmètre : P = (L + l) × 2 = (${L} + ${l}) × 2 = ${F(P)} m.`,
        `Étape 2 — Coût : ${F(P)} × ${F(f)} = ${F(cout)} Ar.`],
      rep: `La clôture coûtera ${F(cout)} Ar.`,
      qc: `Le grillage suit le TOUR du champ : le périmètre est la question cachée — impossible d’acheter des mètres sans connaître le tour !`,
      mi: `« clôturer » → le tour → périmètre ; « … Ar le mètre » → × ensuite.`,
      op: `périmètre (L + l) × 2, puis multiplication par le prix du mètre.`
    };
  },
  (ri) => { // aire et dalles
    const L = ri(8, 12), l = ri(6, 9), dp = [8000, 10000, 12000][ri(0, 2)];
    const A = L * l, cout = A * dp;
    return {
      enonce: `Une salle de classe rectangulaire mesure ${L} m sur ${l} m. On veut la carreler avec des dalles de 1 m² vendues ${F(dp)} Ar l’unité. Combien de dalles faut-il, et pour quel prix total ?`,
      steps: [`Étape 1 — Aire de la salle : A = L × l = ${L} × ${l} = ${F(A)} m².`,
        `Étape 2 — Nombre de dalles : ${F(A)} dalles de 1 m² (1 dalle par m²).`,
        `Étape 3 — Prix total : ${F(A)} × ${F(dp)} = ${F(cout)} Ar.`],
      rep: `Il faut ${F(A)} dalles, pour ${F(cout)} Ar.`,
      qc: `Une dalle couvre exactement 1 m² : le nombre de dalles est donc l’AIRE de la salle.`,
      mi: `« carreler… dalles de 1 m² » → aire ; « pour quel prix total » → ×.`,
      op: `aire L × l, puis multiplication par le prix de la dalle.`
    };
  },
  (ri) => { // fractions de récolte
    const Fk = [120, 160, 200, 240][ri(0, 3)], pz = [2000, 2500, 3000][ri(0, 2)];
    const vendu = Fk * 3 / 4, garde = Fk / 4, recette = vendu * pz;
    return {
      enonce: `Rasoa récolte ${F(Fk)} kg de letchis. Elle en vend les 3/4 au marché à ${F(pz)} Ar le kilo et garde le reste pour sa famille. Quelle est sa recette, et combien de kilos garde-t-elle ?`,
      steps: [`Étape 1 — Quantité vendue : 3/4 de ${F(Fk)} = (${F(Fk)} ÷ 4) × 3 = ${F(Fk / 4)} × 3 = ${F(vendu)} kg.`,
        `Étape 2 — Recette : ${F(vendu)} × ${F(pz)} = ${F(recette)} Ar.`,
        `Étape 3 — Part gardée : ${F(Fk)} − ${F(vendu)} = ${F(garde)} kg (c’est bien 1/4 de la récolte).`],
      rep: `Sa recette est de ${F(recette)} Ar et elle garde ${F(garde)} kg.`,
      qc: `Vendre les 3/4 oblige à calculer D’ABORD cette quantité en kilos : c’est la question cachée.`,
      mi: `« les 3/4 de » → fraction de la récolte (÷ 4 puis × 3) ; « au kilo » → × par le prix.`,
      op: `fraction de la récolte, puis multiplication pour la recette, puis soustraction pour la part gardée.`
    };
  },
  (ri) => { // tissu décimaux
    const mt = [2.5, 3.5, 4.5][ri(0, 2)], pm = [12000, 16000, 18000][ri(0, 2)], B = 100000;
    const cout = mt * pm, rendu = B - cout;
    return {
      enonce: `Pour coudre des uniformes, une maman achète ${FD(mt)} m de tissu à ${F(pm)} Ar le mètre. Elle paie avec un billet de ${F(B)} Ar. Quel est le prix du tissu, et combien lui rend-on ?`,
      steps: [`Étape 1 — Prix du tissu : ${FD(mt)} × ${F(pm)} = ${F(cout)} Ar.`,
        `Étape 2 — Monnaie rendue : ${F(B)} − ${F(cout)} = ${F(rendu)} Ar.`],
      rep: `Le tissu coûte ${F(cout)} Ar ; on lui rend ${F(rendu)} Ar.`,
      qc: `Le prix du tissu d’abord, la monnaie ensuite : on ne rend pas la monnaie sans connaître le total.`,
      mi: `« … m à … Ar le mètre » (prix unitaire → ×) ; « combien lui rend-on » (écart → −).`,
      op: `multiplication à virgules, puis soustraction.`
    };
  },
  (ri) => { // durées
    const h1 = ri(6, 9), m1 = [15, 30, 45][ri(0, 2)], dh = ri(1, 3), dm = [20, 35, 50][ri(0, 2)];
    let H = h1 + dh, M = m1 + dm;
    if (M >= 60) { H += 1; M -= 60; }
    return {
      enonce: `Un taxi-brousse part d’Antananarivo à ${h1} h ${m1 < 10 ? '0' + m1 : m1} min. Le trajet dure ${dh} h ${dm} min. À quelle heure arrive-t-il ?`,
      steps: [`Étape 1 — On additionne les heures : ${h1} h + ${dh} h = ${h1 + dh} h.`,
        `Étape 2 — On additionne les minutes : ${m1} min + ${dm} min = ${m1 + dm} min${m1 + dm >= 60 ? ` = 1 h ${m1 + dm - 60} min (on ne dépasse jamais 60 min !)` : ''}.`,
        `Étape 3 — Heure d’arrivée : ${H} h ${M < 10 ? '0' + M : M} min.`],
      rep: `Il arrive à ${H} h ${M < 10 ? '0' + M : M} min.`,
      qc: `On additionne les heures avec les heures et les minutes avec les minutes — et si les minutes dépassent 60, on échange contre 1 heure.`,
      mi: `« part à… le trajet dure… » → addition de durées (base 60).`,
      op: `addition sexagésimale : colonne des heures, colonne des minutes, échange à 60.`
    };
  },
  (ri) => { // épargne
    const ep = [2000, 2500, 5000][ri(0, 2)], V = ep * ri(18, 30);
    const sem = V / ep;
    return {
      enonce: `Naina épargne ${F(ep)} Ar par semaine pour acheter un vélo à ${F(V)} Ar. Combien de semaines d’épargne lui faudra-t-il ?`,
      steps: [`Étape 1 — On cherche combien de fois ${F(ep)} entre dans ${F(V)} : c’est une division.`,
        `Étape 2 — ${F(V)} ÷ ${F(ep)} = ${F(sem)}.`,
        `Vérification : ${F(ep)} × ${F(sem)} = ${F(V)} ✓`],
      rep: `Il lui faudra ${F(sem)} semaines.`,
      qc: `Combien de « paquets » de … Ar tiennent dans le prix du vélo : l’épargne hebdomadaire est comme un paquet qu’on répète.`,
      mi: `« combien de semaines » → combien de fois → division (groupement).`,
      op: `division : on cherche combien de fois l’épargne entre dans le prix total.`
    };
  },
  (ri) => { // école rangées et bus
    const rg = [12, 18, 24][ri(0, 1)], nr = ri(8, 14), extra = ri(5, 25);
    const ne = rg * nr, tot = ne + extra, bus = Math.ceil(tot / 30), rest = tot % 30;
    return {
      enonce: `Pour la fête de l’école, ${F(ne)} élèves sont rangés en rangées de ${rg}. Combien y a-t-il de rangées ? Ensuite, ces élèves et ${extra} enseignants partent en excursion dans des bus de 30 places. Combien de bus faut-il ?`,
      steps: [`Étape 1 — Nombre de rangées : ${F(ne)} ÷ ${rg} = ${nr} rangées.`,
        `Étape 2 — Personnes à transporter : ${F(ne)} + ${extra} = ${F(tot)}.`,
        `Étape 3 — ${F(tot)} ÷ 30 = ${Math.floor(tot / 30)}${rest ? `, reste ${rest} : il faut un bus de plus pour les ${rest} personnes restantes` : ' exactement'}.`],
      rep: `Il y a ${nr} rangées et il faut ${bus} bus.`,
      qc: `Deux questions bien séparées : d’abord les rangées (division), puis les bus (division avec reste — et il faut l’interpréter !).`,
      mi: `« en rangées de » → ÷ ; « et … enseignants » → + ; « bus de 30 places » → ÷ avec reste.`,
      op: `division, addition, puis division avec interprétation du reste : le reste impose un bus DE PLUS.`
    };
  },
];

const EXTRA_TEMPLATES = [
  (ri) => { // champ carré : périmètre, aire, prix
    const c = ri(28, 65), P = c * 4, A = c * c, prix = [12000, 15000, 20000][ri(0, 2)], total = A * prix;
    return { enonce: `Un champ carré de côté ${c} m est vendu ${F(prix)} Ar le m². Calculez son périmètre, son aire puis son prix.`, steps: [`P = 4 × ${c} = ${F(P)} m.`, `A = ${c} × ${c} = ${F(A)} m².`, `Prix = ${F(A)} × ${F(prix)} = ${F(total)} Ar.`], rep: `P = ${F(P)} m ; A = ${F(A)} m² ; prix = ${F(total)} Ar.`, qc: `Le côté permet d’abord de trouver le tour, puis la surface et enfin le prix.`, mi: `« carré », « côté », « m² », « prix du m² » → périmètre, aire, multiplication.`, op: `P = 4 × côté ; A = côté × côté ; prix = aire × prix du m².` };
  },
  (ri) => { // récolte avec vente et reste
    const sacs = ri(80, 160), poids = [50, 60][ri(0, 1)], total = sacs * poids, fraction = [[1, 4], [1, 3], [2, 5], [3, 5]][ri(0, 3)], part = fraction[0], den = fraction[1], vendu = total * (den - part) / den, prix = [1800, 2200, 2500][ri(0, 2)], recette = vendu * prix;
    return { enonce: `Une famille récolte ${sacs} sacs de riz de ${poids} kg. Elle garde ${part}/${den} de la récolte et vend le reste à ${F(prix)} Ar le kilo. Quelle masse vend-elle et quelle recette obtient-elle ?`, steps: [`Masse totale : ${sacs} × ${poids} = ${F(total)} kg.`, `Masse gardée : ${part}/${den} de ${F(total)} = ${F(total * part / den)} kg ; masse vendue = ${F(total)} − ${F(total * part / den)} = ${F(vendu)} kg.`, `Recette : ${F(vendu)} × ${F(prix)} = ${F(recette)} Ar.`], rep: `La famille vend ${F(vendu)} kg et reçoit ${F(recette)} Ar.`, qc: `Il faut trouver la masse totale, puis distinguer la part gardée de la part vendue.`, mi: `« sacs de…kg » → × ; « garde… » → fraction ; « au kilo » → ×.`, op: `multiplication, fraction, soustraction, puis multiplication par le prix au kilo.` };
  },
  (ri) => { // déplacement : durée, distance, vitesse
    const h = ri(1, 3), m = [20, 30, 45][ri(0, 2)], vitesse = [35, 40, 50][ri(0, 2)], duree = h + m / 60, distance = vitesse * duree;
    return { enonce: `Un taxi-brousse roule pendant ${h} h ${m} min à ${vitesse} km/h. Quelle distance parcourt-il ?`, steps: [`Durée en heures : ${h} h ${m} min = ${FD(duree)} h.`, `Distance = vitesse × durée = ${vitesse} × ${FD(duree)} = ${FD(distance)} km.`], rep: `Le taxi-brousse parcourt ${FD(distance)} km.`, qc: `La durée doit être exprimée dans la même unité que la vitesse : les heures.`, mi: `« vitesse… pendant… » → distance = vitesse × durée.`, op: `conversion des minutes, puis multiplication vitesse × durée.` };
  },
  (ri) => { // matériaux et monnaie
    const sacs = ri(12, 24), prix = [18000, 22000, 25000][ri(0, 2)], transport = [35000, 50000, 65000][ri(0, 2)], billet = [500000, 1000000][ri(0, 1)], achat = sacs * prix, total = achat + transport, rendu = billet - total;
    return { enonce: `Pour construire une maison, un maçon achète ${sacs} sacs de ciment à ${F(prix)} Ar chacun. Le transport coûte ${F(transport)} Ar. Il paie avec ${F(billet)} Ar. Quelle dépense totale et quelle monnaie reçoit-il ?`, steps: [`Ciment : ${sacs} × ${F(prix)} = ${F(achat)} Ar.`, `Dépense totale : ${F(achat)} + ${F(transport)} = ${F(total)} Ar.`, `Monnaie : ${F(billet)} − ${F(total)} = ${F(rendu)} Ar.`], rep: `La dépense est ${F(total)} Ar et la monnaie est ${F(rendu)} Ar.`, qc: `Le transport s’ajoute au prix des sacs avant de calculer la monnaie.`, mi: `« chacun » → × ; « transport » → + ; « paie avec » → −.`, op: `multiplication, addition, puis soustraction.` };
  },
  (ri) => { // eau et bidons
    const citernes = ri(2, 5), capacite = [250, 500, 750][ri(0, 2)], litres = citernes * capacite, bidon = [20, 25, 50][ri(0, 2)], nb = Math.floor(litres / bidon), reste = litres % bidon;
    return { enonce: `${citernes} citernes contiennent chacune ${F(capacite)} L d’eau. On remplit des bidons de ${F(bidon)} L. Combien de bidons pleins obtient-on et combien de litres restent-ils ?`, steps: [`Quantité totale : ${citernes} × ${F(capacite)} = ${F(litres)} L.`, `Partage : ${F(litres)} ÷ ${F(bidon)} = ${nb}, reste ${F(reste)} L.`, `Vérification : ${F(bidon)} × ${nb} + ${F(reste)} = ${F(litres)} L.`], rep: `On obtient ${nb} bidons pleins et il reste ${F(reste)} L.`, qc: `Les citernes doivent être réunies avant le partage en bidons.`, mi: `« chacune » → × ; « bidons de » → division euclidienne ; « restent » → reste.`, op: `multiplication, puis division avec interprétation du reste.` };
  },
  (ri) => { // fournitures scolaires
    const eleves = ri(24, 36), cahiers = ri(3, 5), prix = [1200, 1500, 1800][ri(0, 2)], budget = [200000, 250000, 300000][ri(0, 2)], nb = eleves * cahiers, total = nb * prix, reste = budget - total;
    return { enonce: `Une école offre ${cahiers} cahiers à chacun de ses ${eleves} élèves. Un cahier coûte ${F(prix)} Ar. Le budget est de ${F(budget)} Ar. Combien dépense-t-elle et combien reste-t-il ?`, steps: [`Cahiers : ${eleves} × ${cahiers} = ${nb}.`, `Dépense : ${nb} × ${F(prix)} = ${F(total)} Ar.`, `Reste : ${F(budget)} − ${F(total)} = ${F(reste)} Ar.`], rep: `L’école dépense ${F(total)} Ar et il reste ${F(reste)} Ar.`, qc: `Il faut d’abord compter tous les cahiers, puis leur prix total.`, mi: `« chacun » → × ; « coûte » → × ; « reste » → −.`, op: `double multiplication, puis soustraction.` };
  },
  (ri) => { // élevage et vente
    const poules = ri(18, 35), prix = [18000, 22000, 25000][ri(0, 2)], vendues = poules - ri(3, 8), recette = vendues * prix, dep = [50000, 75000, 100000][ri(0, 2)], benef = recette - dep;
    return { enonce: `Un éleveur possède ${poules} poules. Il en vend ${poules - vendues} à ${F(prix)} Ar chacune et dépense ${F(dep)} Ar pour les nourrir. Quelle recette et quel bénéfice lui reste-t-il ?`, steps: [`Poules vendues : ${poules - vendues} (donnée de l’énoncé).`, `Recette : ${poules - vendues} × ${F(prix)} = ${F(recette)} Ar.`, `Bénéfice : ${F(recette)} − ${F(dep)} = ${F(benef)} Ar.`], rep: `La recette est ${F(recette)} Ar et le bénéfice est ${F(benef)} Ar.`, qc: `Le bénéfice est ce qui reste après avoir retiré la dépense de la recette.`, mi: `« chacune » → × ; « bénéfice » → recette − dépense.`, op: `multiplication, puis soustraction.` };
  },
  (ri) => { // partage de sucre
    const kg = ri(18, 45), grammes = kg * 1000, sachet = [250, 500, 750][ri(0, 2)], nb = Math.floor(grammes / sachet), reste = grammes % sachet;
    return { enonce: `Un commerçant partage ${kg} kg de sucre en sachets de ${F(sachet)} g. Combien de sachets pleins prépare-t-il et quelle masse reste-t-il ?`, steps: [`Conversion : ${kg} kg = ${F(grammes)} g.`, `Division : ${F(grammes)} ÷ ${F(sachet)} = ${nb}, reste ${F(reste)} g.`, `Vérification : ${F(sachet)} × ${nb} + ${F(reste)} = ${F(grammes)} g.`], rep: `Il prépare ${nb} sachets et il reste ${F(reste)} g.`, qc: `On ne divise pas des kilogrammes par des grammes avant la conversion.`, mi: `« kg » et « g » → conversion ; « sachets de » → division.`, op: `conversion, puis division euclidienne.` };
  },
  (ri) => { // triangle et peinture
    const base = ri(8, 18), hauteur = ri(5, 12), aire = base * hauteur / 2, rendement = [4, 5, 6][ri(0, 2)], litres = Math.ceil(aire / rendement), prix = [12000, 15000, 18000][ri(0, 2)], total = litres * prix;
    return { enonce: `Un mur triangulaire a une base de ${base} m et une hauteur de ${hauteur} m. Un litre de peinture couvre ${rendement} m² et coûte ${F(prix)} Ar. Combien de litres faut-il et quel prix payer ?`, steps: [`Aire : (${base} × ${hauteur}) ÷ 2 = ${FD(aire)} m².`, `Peinture : ${FD(aire)} ÷ ${rendement} = ${FD(aire / rendement)} L ; il faut ${litres} L entiers.`, `Prix : ${litres} × ${F(prix)} = ${F(total)} Ar.`], rep: `Il faut ${litres} L de peinture et payer ${F(total)} Ar.`, qc: `On calcule la surface avant de chercher la quantité de peinture.`, mi: `« triangulaire » → aire ; « couvre…m² » → division ; « coûte » → ×.`, op: `aire du triangle, division avec arrondi au litre supérieur, multiplication.` };
  },
  (ri) => { // marché : prix unitaires différents
    const riz = ri(4, 8), savon = ri(2, 5), kap = [1200, 1500, 1800][ri(0, 2)], ps = [2500, 3000, 3500][ri(0, 2)], billet = [20000, 50000][ri(0, 1)], total = riz * kap + savon * ps, rendu = billet - total;
    return { enonce: `Au marché, une famille achète ${riz} kapoaka de riz à ${F(kap)} Ar et ${savon} savons à ${F(ps)} Ar. Elle paie avec ${F(billet)} Ar. Combien dépense-t-elle et quelle monnaie reçoit-elle ?`, steps: [`Riz : ${riz} × ${F(kap)} = ${F(riz * kap)} Ar ; savons : ${savon} × ${F(ps)} = ${F(savon * ps)} Ar.`, `Dépense : ${F(riz * kap)} + ${F(savon * ps)} = ${F(total)} Ar.`, `Monnaie : ${F(billet)} − ${F(total)} = ${F(rendu)} Ar.`], rep: `La dépense est ${F(total)} Ar et la monnaie est ${F(rendu)} Ar.`, qc: `Les deux achats sont calculés séparément avant l’addition.`, mi: `« à … Ar » → × pour chaque article ; « dépense totale » → + ; « monnaie » → −.`, op: `deux multiplications, addition, puis soustraction.` };
  }
];
const ALL_TEMPLATES = [...TEMPLATES, ...EXTRA_TEMPLATES];

function sujetProblemes(k) {
  const r = mulberry32(5000 + k * 13);
  const ri = (lo, hi) => lo + Math.floor(r() * (hi - lo + 1));
  const probs = [];
  for (let j = 0; j < 3; j++) probs.push(ALL_TEMPLATES[(3 * (k - 1) + j) % ALL_TEMPLATES.length](ri));
  return probs;
}

// ---------- montage du document ----------
function entryPage(kind, bookmark, intro) {
  return [page(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2200, after: 200 }, children: [tr('SUJETS D’EXAMEN', { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, shading: { type: ShadingType.CLEAR, fill: C.pale }, children: [new Bookmark({ id: bookmark, children: [tr(kind, { bold: true, color: C.red, size: 56 })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [tr('20 sujets type CEPE — formats malgaches variés et corrigés détaillés', { italics: true, color: C.green, size: 26 })] }),
    ...intro.map(t => new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 140 }, children: rich(t, { size: 24 }) })),
  ];
}

async function assembleChildren() {
  const children = [];
  children.push(...entryPage('OPÉRATIONS', 'exop', [
    'Les formats alternent comme dans les épreuves malgaches : calcul posé, nombre manquant,',
    'durées, conversions, fractions, prix, périmètre, aire, hauteur et division avec reste.',
    'Fais chaque sujet SANS regarder le corrigé, puis compare ta démarche !',
  ]));
  for (let k = 1; k <= 20; k++) {
    const { items, corr, visuals } = sujetOperations(k);
    const images = await Promise.all(visuals.map(svgPng));
    children.push(page(), title(`SUJET N° ${k} — OPÉRATIONS`, 1, `exop${k}`));
    children.push(p('Effectue les opérations suivantes en posant tes calculs. Durée conseillée : 30 minutes.', { fill: 'FFF8E1' }));
    items.forEach((it, i) => children.push(p(`${i + 1}.  ${it}`, { indent: 240 })));
    children.push(banner(`CORRIGÉ DU SUJET N° ${k}`, C.green));
    corr.forEach((lines, i) => {
      children.push(p(`${i + 1}.`, { after: 40 }));
      if (images[i]) children.push(imageParagraph(images[i], 470));
      lines.forEach(l => children.push(p(l, { indent: 360, after: 60 })));
    });
  }
  children.push(...entryPage('PROBLÈMES', 'expb', [
    'Des problèmes de la vie courante à Madagascar : marché, champs, transport, école…',
    'Pour chaque problème : lis deux fois, repère la question cachée et les mots-indices,',
    'choisis l’opération, calcule bien posé, puis rédige ta réponse en phrase complète.',
  ]));
  for (let k = 1; k <= 20; k++) {
    const probs = sujetProblemes(k);
    children.push(page(), title(`SUJET N° ${k} — PROBLÈMES`, 1, `expb${k}`));
    children.push(p('Résous chaque problème comme au CEPE : écris la Solution, le Résultat avec son unité, puis l’Opération utilisée. Montre toutes les étapes. Durée conseillée : 40 minutes.', { fill: 'FFF8E1' }));
    probs.forEach((pr, i) => {
      children.push(p(`Problème ${i + 1}.`, { bold: true, after: 60 }));
      children.push(p(pr.enonce, { indent: 240 }));
    });
    children.push(p('Présente tes réponses dans le tableau, comme dans un sujet de problème du CEPE.', { after: 60, bold: true, color: C.blue }));
    children.push(responseGrid(probs.length));
    children.push(banner(`CORRIGÉ DU SUJET N° ${k}`, C.green));
    probs.forEach((pr, i) => {
      children.push(p(`Problème ${i + 1} — démarche :`, { bold: true, color: C.wine, after: 60 }));
      children.push(p(`Question cachée : ${pr.qc}`, { indent: 360, after: 50, italics: true, color: C.wine }));
      children.push(p(`Mots-indices : ${pr.mi}`, { indent: 360, after: 50, italics: true, color: C.blue }));
      children.push(p(`Opérations choisies : ${pr.op}`, { indent: 360, after: 70, italics: true, color: C.ocre }));
      children.push(p('Présentation attendue : Solution | Résultat | Opération', { indent: 360, after: 60, bold: true, color: C.blue }));
      children.push(solutionTable(pr));
    });
  }
  return children;
}

(async () => {
  const children = await assembleChildren();
  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr('J-Learn — Mathématiques T5 — Sujets d’examen', { size: 18, color: '666666' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18 })] })] }) },
      children
    }]
  });
  const out = path.join(__dirname, '..', 'Manuel_Mathematiques_T5_EXAMENS.docx');
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log(out, ':', fs.statSync(out).size, 'octets');
})();
