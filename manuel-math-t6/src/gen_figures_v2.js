// Figures V2 — graphiques exacts correspondant à l'exemple de chaque leçon
// Rendu : SVG -> PNG via sharp. Sortie : assets/math-t6/figures2/fig<idx>.png
const fs = require('fs');
const dir = 'manuel-math-t6/assets/math-t6/figures2';
fs.mkdirSync(dir, { recursive: true });

const BLUE = '#1F4E79', PINK = '#F8BBD0', PINK2 = '#C2185B', GREEN = '#2E7D32', GREENL = '#E8F5E9', OCRE = '#B25000', BLUEL = '#D6E6F5';
const SER = 'DejaVu Serif';

function head(t, ex) {
  let s = `<text x="40" y="46" font-family="${SER}" font-size="31" font-weight="bold" fill="${BLUE}">${t}</text>`;
  let y = 90;
  for (const line of ex) { s += `<text x="44" y="${y}" font-family="${SER}" font-size="23" fill="#333">${line}</text>`; y += 31; }
  return { s, y: y + 14 };
}
function svg(w, h, inner) { return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="white"/>${inner}</svg>`; }
function bar(x, y, w, h, n, k, fill = PINK) {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
  const cw = w / n;
  for (let i = 0; i < k; i++) s += `<rect x="${x + i * cw}" y="${y}" width="${cw}" height="${h}" fill="${fill}"/>`;
  for (let i = 1; i < n; i++) s += `<line x1="${x + i * cw}" y1="${y}" x2="${x + i * cw}" y2="${y + h}" stroke="${BLUE}" stroke-width="2"/>`;
  s += `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
  return s;
}
function txt(x, y, t, size = 26, fill = '#222', w = 'normal', anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="${SER}" font-size="${size}" fill="${fill}" font-weight="${w}" text-anchor="${anchor}">${t}</text>`;
}
function grid100(x, y, cell, k, fill = PINK) {
  let s = '';
  for (let i = 0; i < 100; i++) {
    const cx = x + (i % 10) * cell, cy = y + Math.floor(i / 10) * cell;
    s += `<rect x="${cx}" y="${cy}" width="${cell}" height="${cell}" fill="${i < k ? fill : 'white'}" stroke="#888" stroke-width="1.5"/>`;
  }
  return s;
}
function nline(x, y, len, n, labels) {
  let s = `<line x1="${x}" y1="${y}" x2="${x + len}" y2="${y}" stroke="${BLUE}" stroke-width="4"/>`;
  for (let i = 0; i <= n; i++) {
    const xi = x + i * len / n;
    s += `<line x1="${xi}" y1="${y - 14}" x2="${xi}" y2="${y + 14}" stroke="${BLUE}" stroke-width="3"/>`;
    if (labels && labels[i] !== undefined && labels[i] !== null) s += txt(xi, y + 46, labels[i], 23, '#222', 'normal', 'middle');
  }
  return s;
}
function dot(x, y, r = 9, fill = PINK2) { return `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`; }
function tableEl(x, y, colW, rowH, data, headerFill = BLUEL) {
  let s = ''; const totW = colW.reduce((a, b) => a + b, 0);
  for (let r = 0; r < data.length; r++) {
    let cx = x;
    for (let c = 0; c < data[r].length; c++) {
      s += `<rect x="${cx}" y="${y + r * rowH}" width="${colW[c]}" height="${rowH}" fill="${r === 0 ? headerFill : 'white'}" stroke="${BLUE}" stroke-width="2.5"/>`;
      s += txt(cx + colW[c] / 2, y + r * rowH + rowH / 2 + 9, data[r][c], 25, '#222', r === 0 ? 'bold' : 'normal', 'middle');
      cx += colW[c];
    }
  }
  return s;
}
function arrow(x1, y1, x2, y2, color = GREEN, wd = 4) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 14;
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${wd}"/>`
    + `<polygon points="${x2},${y2} ${x2 - L * Math.cos(a - 0.45)},${y2 - L * Math.sin(a - 0.45)} ${x2 - L * Math.cos(a + 0.45)},${y2 - L * Math.sin(a + 0.45)}" fill="${color}"/>`;
}
function axes(x, y, w, h) {
  return arrow(x, y, x + w, y) + arrow(x, y, x, y - h);
}
function box(x, y, w, h, t, fill = GREENL, stroke = GREEN, size = 26) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="3"/>` + txt(x + w / 2, y + h / 2 + 9, t, size, '#222', 'normal', 'middle');
}
function rightAngle(x, y, dx1, dy1, dx2, dy2, s = 20) {
  return `<path d="M ${x + dx1 * s} ${y + dy1 * s} L ${x + dx1 * s + dx2 * s} ${y + dy1 * s + dy2 * s} L ${x + dx2 * s} ${y + dy2 * s}" fill="none" stroke="${PINK2}" stroke-width="2.5"/>`;
}

const F = {};

// ---------- UNITÉ 1 ----------
F[0] = () => { const { s, y } = head('Comprendre une fraction dans différentes situations', ['Une bande est partagée en 8 parts égales et 3 parts sont coloriées : la fraction coloriée est 3/8.']);
  return svg(1000, y + 160, s + bar(80, y + 20, 720, 70, 8, 3) + txt(840, y + 68, '3/8', 32, PINK2, 'bold')); };
F[1] = () => { const { s, y } = head('Représenter les fractions sur une droite numérique', ['Pour placer 5/8, on partage l\u2019unité en huit segments égaux et on avance de cinq graduations depuis 0.']);
  const lab = ['0', '1/8', '2/8', '3/8', '4/8', '5/8', '6/8', '7/8', '1'];
  return svg(1000, y + 170, s + nline(80, y + 50, 800, 8, lab) + dot(80 + 5 * 100, y + 50) + txt(80 + 5 * 100, y + 22, '5/8', 27, PINK2, 'bold', 'middle')); };
F[2] = () => { const { s, y } = head('Reconnaître et produire des fractions équivalentes', ['1/2 = 2/4 = 4/8 : les bandes coloriées ont la même longueur.']);
  let b = ''; const defs = [[2, 1, '1/2'], [4, 2, '2/4'], [8, 4, '4/8']];
  defs.forEach((d, i) => { b += bar(80, y + 15 + i * 85, 720, 60, d[0], d[1]) + txt(840, y + 58 + i * 85, d[2], 30, PINK2, 'bold'); });
  return svg(1000, y + 290, s + b); };
F[3] = () => { const { s, y } = head('Passer d\u2019une fraction impropre à un nombre fractionnaire', ['11/4 = 2 et 3/4 : onze quarts remplissent deux entiers et il reste trois quarts.']);
  let b = bar(60, y + 20, 260, 65, 4, 4) + bar(350, y + 20, 260, 65, 4, 4) + bar(640, y + 20, 260, 65, 4, 3);
  b += txt(190, y + 125, '1 entier', 24, '#222', 'normal', 'middle') + txt(480, y + 125, '1 entier', 24, '#222', 'normal', 'middle') + txt(770, y + 125, '3/4', 26, PINK2, 'bold', 'middle');
  return svg(1000, y + 160, s + b); };
F[4] = () => { const { s, y } = head('Comparer et ordonner des fractions', ['2/3 = 8/12 et 3/4 = 9/12 ; donc 2/3 &lt; 3/4.']);
  let b = bar(80, y + 15, 720, 60, 12, 8) + txt(840, y + 58, '8/12', 28, PINK2, 'bold');
  b += bar(80, y + 100, 720, 60, 12, 9) + txt(840, y + 143, '9/12', 28, PINK2, 'bold');
  return svg(1000, y + 200, s + b); };
F[5] = () => { const { s, y } = head('Relier fractions décimales et nombres décimaux', ['37 cases coloriées sur 100 : 37/100 = 0,37.']);
  return svg(1000, y + 480, s + grid100(290, y + 15, 44, 37) + txt(500, y + 15 + 452 + 2, '', 10)); };
F[6] = () => { const { s, y } = head('Lire et représenter les nombres décimaux jusqu\u2019aux millièmes', ['4,307 : 4 unités, 3 dixièmes, 0 centième et 7 millièmes.']);
  const data = [['Unités', ',', 'Dixièmes', 'Centièmes', 'Millièmes'], ['4', ',', '3', '0', '7']];
  return svg(1000, y + 180, s + tableEl(90, y + 15, [190, 70, 190, 190, 190], 68, data)); };
F[7] = () => { const { s, y } = head('Comparer et ordonner des nombres décimaux', ['5,68 &lt; 5,7 : sur la droite graduée, 5,68 est avant 5,70.']);
  const lab = ['5,60', null, '5,70', null, '5,80'];
  let b = nline(120, y + 55, 760, 4, lab);
  b += dot(120 + 760 * 0.4, y + 55) + txt(120 + 760 * 0.4, y + 25, '5,68', 25, PINK2, 'bold', 'middle');
  b += dot(120 + 760 * 0.5, y + 55, 9, GREEN) + txt(120 + 760 * 0.56, y + 25, '5,70', 25, GREEN, 'bold', 'middle');
  return svg(1000, y + 170, s + b); };
F[8] = () => { const { s, y } = head('Relier fraction, nombre décimal et pourcentage', ['35/100 = 0,35 = 35 %. De même, 1/2 = 0,5 = 50 %.']);
  let b = grid100(120, y + 15, 40, 35) + txt(320, y + 460, '35 % = 0,35', 27, PINK2, 'bold', 'middle');
  b += bar(620, y + 95, 300, 65, 2, 1) + txt(770, y + 210, '1/2 = 0,5 = 50 %', 27, PINK2, 'bold', 'middle');
  return svg(1000, y + 490, s + b); };
F[9] = () => { const { s, y } = head('Déterminer les facteurs et les diviseurs', ['12 = 1 × 12 = 2 × 6 = 3 × 4 : les diviseurs de 12 sont 1, 2, 3, 4, 6 et 12.']);
  let b = '';
  const r = 10, gap = 26;
  [[1, 12], [2, 6], [3, 4]].forEach((g, gi) => {
    const [rows, cols] = g; const x0 = 60 + gi * 350;
    for (let i = 0; i < rows; i++) for (let j = 0; j < cols; j++)
      b += `<circle cx="${x0 + j * gap}" cy="${y + 30 + i * gap}" r="${r}" fill="${BLUEL}" stroke="${BLUE}" stroke-width="2"/>`;
    b += txt(x0 + (cols - 1) * gap / 2, y + 150, `${rows} × ${cols}`, 27, GREEN, 'bold', 'middle');
  });
  return svg(1000, y + 190, s + b); };
F[10] = () => { const { s, y } = head('Déterminer les multiples, le PPCM et le PGCD', ['Multiples de 4 : 4, 8, 12, 16\u2026 Multiples de 6 : 6, 12, 18, 24\u2026 PPCM(4, 6) = 12.']);
  let b = txt(70, y + 40, 'Multiples de 4 :', 26, BLUE, 'bold');
  ['4', '8', '12', '16', '20', '24'].forEach((n, i) => { const common = (n === '12' || n === '24');
    b += `<circle cx="${320 + i * 90}" cy="${y + 32}" r="26" fill="${common ? PINK : 'white'}" stroke="${common ? PINK2 : BLUE}" stroke-width="3"/>` + txt(320 + i * 90, y + 41, n, 24, '#222', 'normal', 'middle'); });
  b += txt(70, y + 115, 'Multiples de 6 :', 26, BLUE, 'bold');
  ['6', '12', '18', '24'].forEach((n, i) => { const common = (n === '12' || n === '24');
    b += `<circle cx="${320 + i * 90}" cy="${y + 107}" r="26" fill="${common ? PINK : 'white'}" stroke="${common ? PINK2 : BLUE}" stroke-width="3"/>` + txt(320 + i * 90, y + 116, n, 24, '#222', 'normal', 'middle'); });
  b += txt(70, y + 185, 'Premier multiple commun : PPCM = 12', 27, PINK2, 'bold');
  return svg(1000, y + 215, s + b); };
F[11] = () => { const { s, y } = head('Écrire une fraction sous forme décimale', ['3/5 = 6/10 = 0,6 : la même part coloriée dans les deux bandes.']);
  let b = bar(80, y + 15, 720, 60, 5, 3) + txt(840, y + 58, '3/5', 28, PINK2, 'bold');
  b += bar(80, y + 100, 720, 60, 10, 6) + txt(840, y + 143, '6/10', 28, PINK2, 'bold');
  return svg(1000, y + 200, s + b); };
F[12] = () => { const { s, y } = head('Encadrer une fraction et donner une valeur approchée', ['7/3 = 2,333\u2026 donc 2 &lt; 7/3 &lt; 3 ; au dixième : 2,3 &lt; 7/3 &lt; 2,4.']);
  const lab = ['2', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7', '2,8', '2,9', '3'];
  let b = nline(80, y + 55, 840, 10, lab);
  b += dot(80 + 840 * 0.333, y + 55) + txt(80 + 840 * 0.333, y + 25, '7/3', 27, PINK2, 'bold', 'middle');
  return svg(1000, y + 170, s + b); };

// ---------- UNITÉ 2 ----------
F[13] = () => { const { s, y } = head('Comprendre la priorité des opérations', ['Dans 18 \u2212 3 × 4, on calcule d\u2019abord 3 × 4 = 12, puis 18 \u2212 12 = 6.']);
  let b = txt(200, y + 55, '18  \u2212', 34) + `<rect x="${330}" y="${y + 18}" width="150" height="54" rx="8" fill="${PINK}" fill-opacity="0.45" stroke="${PINK2}" stroke-width="3"/>` + txt(405, y + 55, '3 × 4', 34, PINK2, 'bold', 'middle');
  b += txt(515, y + 55, '\u2460 d\u2019abord la multiplication', 24, PINK2);
  b += arrow(405, y + 85, 405, y + 120, GREEN);
  b += txt(200, y + 160, '18  \u2212  12  =  6', 34) + txt(515, y + 160, '\u2461 ensuite la soustraction', 24, GREEN);
  return svg(1000, y + 200, s + b); };
F[14] = () => { const { s, y } = head('Calculer une expression sans parenthèses', ['48 ÷ 6 + 5 × 3 = 8 + 15 = 23 : on fait ÷ et × avant +.']);
  let b = `<rect x="150" y="${y + 18}" width="170" height="54" rx="8" fill="${PINK}" fill-opacity="0.45" stroke="${PINK2}" stroke-width="3"/>` + txt(235, y + 55, '48 ÷ 6', 32, PINK2, 'bold', 'middle');
  b += txt(355, y + 55, '+', 32);
  b += `<rect x="400" y="${y + 18}" width="150" height="54" rx="8" fill="${PINK}" fill-opacity="0.45" stroke="${PINK2}" stroke-width="3"/>` + txt(475, y + 55, '5 × 3', 32, PINK2, 'bold', 'middle');
  b += arrow(235, y + 85, 235, y + 120, GREEN) + arrow(475, y + 85, 475, y + 120, GREEN);
  b += txt(235, y + 160, '8', 32, GREEN, 'bold', 'middle') + txt(355, y + 160, '+', 32) + txt(475, y + 160, '15', 32, GREEN, 'bold', 'middle') + txt(600, y + 160, '=  23', 32);
  return svg(1000, y + 200, s + b); };
F[15] = () => { const { s, y } = head('Calculer une expression avec parenthèses', ['5 × (12 \u2212 7) + 3 = 5 × 5 + 3 = 28 : les parenthèses d\u2019abord.']);
  let b = txt(150, y + 55, '5  ×', 32) + `<rect x="250" y="${y + 18}" width="190" height="54" rx="8" fill="${PINK}" fill-opacity="0.45" stroke="${PINK2}" stroke-width="3"/>` + txt(345, y + 55, '(12 \u2212 7)', 32, PINK2, 'bold', 'middle');
  b += txt(470, y + 55, '+  3', 32) + txt(590, y + 55, '\u2460 parenthèses d\u2019abord', 24, PINK2);
  b += arrow(345, y + 85, 345, y + 120, GREEN);
  b += txt(150, y + 160, '5  ×  5  +  3  =  25 + 3  =  28', 32) + txt(640, y + 160, '\u2461 puis × et +', 24, GREEN);
  return svg(1000, y + 200, s + b); };
F[16] = () => { const { s, y } = head('Résoudre des problèmes avec des opérations combinées', ['3 cahiers à 2 400 ariary et 1 stylo à 1 500 ariary : 3 × 2 400 + 1 500 = 8 700 ariary.']);
  let b = '';
  for (let i = 0; i < 3; i++) b += `<rect x="${110 + i * 115}" y="${y + 15}" width="90" height="115" rx="6" fill="${BLUEL}" stroke="${BLUE}" stroke-width="3"/>` + `<line x1="${125 + i * 115}" y1="${y + 45}" x2="${185 + i * 115}" y2="${y + 45}" stroke="${BLUE}" stroke-width="2"/>` + `<line x1="${125 + i * 115}" y1="${y + 70}" x2="${185 + i * 115}" y2="${y + 70}" stroke="${BLUE}" stroke-width="2"/>`;
  b += txt(270, y + 170, '3 × 2 400 Ar', 26, BLUE, 'bold', 'middle');
  b += `<rect x="520" y="${y + 30}" width="18" height="100" rx="8" fill="${OCRE}"/><polygon points="529,${y + 15} 520,${y + 32} 538,${y + 32}" fill="${OCRE}"/>`;
  b += txt(530, y + 170, '+ 1 500 Ar', 26, OCRE, 'bold', 'middle');
  b += box(660, y + 55, 260, 60, '= 8 700 ariary', GREENL, GREEN, 28);
  return svg(1000, y + 210, s + b); };
F[17] = () => { const { s, y } = head('Comprendre et utiliser une échelle', ['Sur le plan au 1 : 1 000, la route mesure 7 cm ; en vrai : 7 × 1 000 = 7 000 cm = 70 m.']);
  let b = `<rect x="90" y="${y + 15}" width="280" height="140" rx="6" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<line x1="110" y1="${y + 125}" x2="350" y2="${y + 45}" stroke="${OCRE}" stroke-width="6"/>` + txt(230, y + 180, 'plan : 7 cm', 25, '#222', 'normal', 'middle');
  b += arrow(400, y + 85, 560, y + 85, GREEN) + txt(480, y + 60, '× 1 000', 26, GREEN, 'bold', 'middle');
  b += `<line x1="600" y1="${y + 125}" x2="930" y2="${y + 35}" stroke="${OCRE}" stroke-width="12"/>` + txt(770, y + 180, 'réalité : 7 000 cm = 70 m', 25, '#222', 'normal', 'middle');
  return svg(1000, y + 215, s + b); };
F[18] = () => { const { s, y } = head('Calculer un pourcentage', ['25 % de 80 = 80 × 25 ÷ 100 = 20 : un quart de 80.']);
  let b = bar(80, y + 15, 720, 65, 4, 1);
  for (let i = 0; i < 4; i++) b += txt(80 + 90 + i * 180, y + 56, '20', 27, i === 0 ? PINK2 : '#999', i === 0 ? 'bold' : 'normal', 'middle');
  b += txt(840, y + 58, '80', 28, BLUE, 'bold');
  b += txt(80, y + 125, '1 part sur 4 = 25 % = 20', 27, PINK2, 'bold');
  return svg(1000, y + 160, s + b); };
F[19] = () => { const { s, y } = head('Comprendre et calculer un taux', ['180 km en 3 h : 180 ÷ 3 = 60 km par heure.']);
  let b = bar(80, y + 15, 720, 65, 3, 0, 'white');
  for (let i = 0; i < 3; i++) b += txt(80 + 120 + i * 240, y + 45, '1 h', 24, BLUE, 'bold', 'middle') + txt(80 + 120 + i * 240, y + 72, '60 km', 24, GREEN, 'bold', 'middle');
  b += txt(840, y + 58, '180 km', 26, BLUE, 'bold');
  return svg(1000, y + 140, s + b); };
F[20] = () => { const { s, y } = head('Comprendre et calculer un rendement', ['450 pièces produites sur 500 prévues : 450 ÷ 500 × 100 = 90 %.']);
  let b = bar(80, y + 15, 720, 65, 10, 9);
  b += txt(840, y + 58, '90 %', 28, PINK2, 'bold');
  b += txt(80, y + 120, 'prévu : 500 \u2014 produit : 450 (9 parts sur 10)', 25);
  return svg(1000, y + 155, s + b); };
F[23] = () => { const { s, y } = head('Multiplier par 0,25 et 0,75', ['160 × 0,25 = 160 ÷ 4 = 40 ; 160 × 0,75 = 40 × 3 = 120.']);
  let b = bar(80, y + 15, 720, 65, 4, 1);
  for (let i = 0; i < 4; i++) b += txt(80 + 90 + i * 180, y + 56, '40', 27, i === 0 ? PINK2 : '#777', i === 0 ? 'bold' : 'normal', 'middle');
  b += txt(840, y + 58, '160', 28, BLUE, 'bold');
  b += txt(80, y + 125, '× 0,25 \u2192 1 part = 40      × 0,75 \u2192 3 parts = 120', 26, GREEN, 'bold');
  return svg(1000, y + 160, s + b); };
F[24] = () => { const { s, y } = head('Diviser par 0,50, 0,25 et 0,75', ['36 ÷ 0,50 = 36 × 2 = 72 : il y a 72 moitiés dans 36.']);
  let b = box(110, y + 20, 220, 65, '36 ÷ 0,50', BLUEL, BLUE, 28);
  b += arrow(360, y + 52, 520, y + 52, GREEN) + txt(440, y + 28, '× 2', 27, GREEN, 'bold', 'middle');
  b += box(550, y + 20, 160, 65, '72', GREENL, GREEN, 30);
  b += txt(110, y + 135, 'Diviser par une moitié revient à multiplier par 2.', 25);
  return svg(1000, y + 170, s + b); };
F[25] = () => { const { s, y } = head('Choisir une stratégie efficace de calcul mental', ['198 + 47 = (198 + 2) + (47 \u2212 2) = 200 + 45 = 245 : compensation.']);
  let b = box(90, y + 20, 200, 62, '198 + 47', BLUEL, BLUE, 28);
  b += arrow(310, y + 51, 450, y + 51, GREEN) + txt(380, y + 26, '+2 / \u22122', 25, GREEN, 'bold', 'middle');
  b += box(470, y + 20, 220, 62, '200 + 45', GREENL, GREEN, 28);
  b += txt(740, y + 62, '=  245', 32, PINK2, 'bold');
  return svg(1000, y + 125, s + b); };

// ---------- UNITÉ 3 ----------
F[26] = () => { const { s, y } = head('Reconnaître une situation de proportionnalité', ['Le prix est toujours le nombre de cahiers multiplié par 2 000 : c\u2019est proportionnel.']);
  const data = [['Cahiers', '1', '2', '3'], ['Prix (Ar)', '2 000', '4 000', '6 000']];
  let b = tableEl(120, y + 15, [220, 170, 170, 170], 62, data);
  b += arrow(880, y + 45, 880, y + 110, GREEN) + txt(900, y + 85, '× 2 000', 26, GREEN, 'bold');
  return svg(1050, y + 180, s + b); };
F[27] = () => { const { s, y } = head('Comprendre la relation y = ax', ['Pour y = 3x : si x = 5, alors y = 3 × 5 = 15.']);
  let b = box(100, y + 25, 150, 62, 'x = 5', BLUEL, BLUE, 28);
  b += arrow(270, y + 56, 390, y + 56, GREEN);
  b += box(400, y + 15, 180, 85, '× 3', PINK, PINK2, 34);
  b += arrow(600, y + 56, 720, y + 56, GREEN);
  b += box(730, y + 25, 170, 62, 'y = 15', GREENL, GREEN, 28);
  return svg(1000, y + 135, s + b); };
F[28] = () => { const { s, y } = head('Compléter un tableau de proportionnalité', ['1 mangue coûte 1 500 Ar : 4 mangues 6 000 Ar et 10 mangues 15 000 Ar.']);
  const data = [['Mangues', '1', '4', '10'], ['Prix (Ar)', '1 500', '6 000', '15 000']];
  let b = tableEl(120, y + 15, [220, 170, 170, 170], 62, data);
  b += arrow(880, y + 45, 880, y + 110, GREEN) + txt(900, y + 85, '× 1 500', 26, GREEN, 'bold');
  return svg(1050, y + 180, s + b); };
F[29] = () => { const { s, y } = head('Représenter une proportionnalité dans un graphique', ['Pour y = 2x, les points (0 ; 0), (1 ; 2), (2 ; 4) et (3 ; 6) sont alignés avec l\u2019origine.']);
  const ox = 140, oy = y + 320, ux = 150, uy = 45;
  let b = axes(ox, oy, 620, 300);
  b += `<line x1="${ox}" y1="${oy}" x2="${ox + 3.6 * ux}" y2="${oy - 7.2 * uy}" stroke="${PINK2}" stroke-width="3" stroke-dasharray="7,6"/>`;
  [[0, 0], [1, 2], [2, 4], [3, 6]].forEach(p => { b += dot(ox + p[0] * ux, oy - p[1] * uy, 8); b += txt(ox + p[0] * ux + 14, oy - p[1] * uy - 12, `(${p[0]} ; ${p[1]})`, 22, PINK2); });
  b += txt(ox - 28, oy + 30, '0', 24) + txt(ox + 640, oy + 32, 'x', 25, '#222', 'bold') + txt(ox - 35, oy - 300, 'y', 25, '#222', 'bold');
  b += txt(ox + 330, oy - 270, 'La droite passe par l\u2019origine', 24, GREEN, 'bold');
  return svg(1000, y + 390, s + b); };
F[30] = () => { const { s, y } = head('Résoudre un problème de proportionnalité', ['1 litre coûte 9 000 Ar ; donc 5 L = 45 000 Ar et 8 L = 72 000 Ar.']);
  const data = [['Huile (L)', '1', '5', '8'], ['Prix (Ar)', '9 000', '45 000', '72 000']];
  let b = tableEl(110, y + 15, [220, 180, 180, 180], 62, data);
  b += arrow(890, y + 45, 890, y + 110, GREEN) + txt(910, y + 85, '× 9 000', 26, GREEN, 'bold');
  return svg(1060, y + 180, s + b); };
F[31] = () => { const { s, y } = head('Identifier une relation entre deux quantités', ['P = 4c est proportionnelle ; P = 2 000 + 1 500d ne l\u2019est pas (prise en charge fixe).']);
  const oy = y + 250;
  let b = axes(120, oy, 320, 230) + `<line x1="120" y1="${oy}" x2="400" y2="${oy - 200}" stroke="${GREEN}" stroke-width="4"/>` + txt(260, oy + 40, 'P = 4c : passe par l\u2019origine', 22, GREEN, 'bold', 'middle');
  b += axes(560, oy, 320, 230) + `<line x1="560" y1="${oy - 80}" x2="840" y2="${oy - 215}" stroke="${PINK2}" stroke-width="4"/>` + dot(560, oy - 80, 7) + txt(720, oy + 40, 'P = 2 000 + 1 500d : décalée', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 320, s + b); };
F[32] = () => { const { s, y } = head('Représenter une relation par manipulation ou dessin', ['Rangs de 3, 5, 7, 9 bâtonnets : on ajoute 2 à chaque rang ; la règle est y = 2x + 1.']);
  let b = '';
  [3, 5, 7, 9].forEach((n, g) => {
    const x0 = 100 + g * 220;
    for (let i = 0; i < n; i++) b += `<line x1="${x0 + i * 18}" y1="${y + 20}" x2="${x0 + i * 18}" y2="${y + 90}" stroke="${OCRE}" stroke-width="7"/>`;
    b += txt(x0 + (n - 1) * 9, y + 130, `rang ${g + 1} : ${n}`, 24, '#222', 'normal', 'middle');
    if (g < 3) b += txt(x0 + 185, y + 60, '+2', 26, GREEN, 'bold', 'middle');
  });
  return svg(1000, y + 165, s + b); };
F[33] = () => { const { s, y } = head('Représenter une relation dans un tableau de valeurs', ['Pour y = 2x + 3 : x = 0, 1, 2, 3 donne y = 3, 5, 7, 9.']);
  const data = [['x', '0', '1', '2', '3'], ['y = 2x + 3', '3', '5', '7', '9']];
  let b = tableEl(120, y + 15, [240, 140, 140, 140, 140], 62, data);
  return svg(1050, y + 165, s + b); };
F[34] = () => { const { s, y } = head('Représenter une relation dans un graphique', ['y = x + 2 donne les points (0 ; 2), (1 ; 3), (2 ; 4) et (3 ; 5) : alignés, mais pas par l\u2019origine.']);
  const ox = 140, oy = y + 300, ux = 160, uy = 48;
  let b = axes(ox, oy, 640, 290);
  b += `<line x1="${ox}" y1="${oy - 2 * uy}" x2="${ox + 3.5 * ux}" y2="${oy - 5.5 * uy}" stroke="${PINK2}" stroke-width="3" stroke-dasharray="7,6"/>`;
  [[0, 2], [1, 3], [2, 4], [3, 5]].forEach(p => { b += dot(ox + p[0] * ux, oy - p[1] * uy, 8); b += txt(ox + p[0] * ux + 14, oy - p[1] * uy - 12, `(${p[0]} ; ${p[1]})`, 22, PINK2); });
  b += txt(ox - 28, oy + 30, '0', 24) + txt(ox + 660, oy + 32, 'x', 25, '#222', 'bold') + txt(ox - 35, oy - 290, 'y', 25, '#222', 'bold');
  b += dot(ox, oy - 2 * uy, 8, GREEN) + txt(ox + 16, oy - 2 * uy + 30, 'départ à y = 2', 22, GREEN, 'bold');
  return svg(1000, y + 370, s + b); };

// ---------- UNITÉ 4 ----------
function quad(points, fill = GREENL, stroke = BLUE, extra = '') {
  return `<polygon points="${points}" fill="${fill}" stroke="${stroke}" stroke-width="3.5"/>` + extra;
}
F[39] = () => { const { s, y } = head('Reconnaître les familles de quadrilatères', ['Carré, rectangle, losange, parallélogramme et trapèze : cinq familles à connaître.']);
  const yy = y + 25;
  let b = quad(`80,${yy} 190,${yy} 190,${yy + 110} 80,${yy + 110}`) + txt(135, yy + 150, 'carré', 23, '#222', 'normal', 'middle');
  b += quad(`250,${yy + 15} 420,${yy + 15} 420,${yy + 110} 250,${yy + 110}`) + txt(335, yy + 150, 'rectangle', 23, '#222', 'normal', 'middle');
  b += quad(`540,${yy} 605,${yy + 55} 540,${yy + 110} 475,${yy + 55}`) + txt(540, yy + 150, 'losange', 23, '#222', 'normal', 'middle');
  b += quad(`665,${yy + 110} 700,${yy + 15} 870,${yy + 15} 835,${yy + 110}`) + txt(768, yy + 150, 'parallélogramme', 23, '#222', 'normal', 'middle');
  b += quad(`895,${yy + 110} 925,${yy + 15} 1030,${yy + 15} 1095,${yy + 110}`) + txt(995, yy + 150, 'trapèze', 23, '#222', 'normal', 'middle');
  return svg(1160, y + 210, s + b); };
F[40] = () => { const { s, y } = head('Décrire les côtés et les angles des quadrilatères', ['Dans un rectangle : côtés opposés parallèles et égaux, quatre angles droits.']);
  const x0 = 280, y0 = y + 25, w = 420, h = 200;
  let b = quad(`${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}`);
  // angles droits
  [[x0, y0, 1, 1], [x0 + w, y0, -1, 1], [x0 + w, y0 + h, -1, -1], [x0, y0 + h, 1, -1]].forEach(a => { b += rightAngle(a[0], a[1], a[2], 0, 0, a[3]); });
  // marques côtés égaux
  b += `<line x1="${x0 + w / 2 - 10}" y1="${y0 - 8}" x2="${x0 + w / 2 + 10}" y2="${y0 + 8}" stroke="${GREEN}" stroke-width="3"/>`;
  b += `<line x1="${x0 + w / 2 - 10}" y1="${y0 + h - 8}" x2="${x0 + w / 2 + 10}" y2="${y0 + h + 8}" stroke="${GREEN}" stroke-width="3"/>`;
  b += `<line x1="${x0 - 8}" y1="${y0 + h / 2 - 10}" x2="${x0 + 8}" y2="${y0 + h / 2 + 10}" stroke="${OCRE}" stroke-width="3"/><line x1="${x0 - 8}" y1="${y0 + h / 2 - 4}" x2="${x0 + 8}" y2="${y0 + h / 2 + 16}" stroke="${OCRE}" stroke-width="3"/>`;
  b += `<line x1="${x0 + w - 8}" y1="${y0 + h / 2 - 10}" x2="${x0 + w + 8}" y2="${y0 + h / 2 + 10}" stroke="${OCRE}" stroke-width="3"/><line x1="${x0 + w - 8}" y1="${y0 + h / 2 - 4}" x2="${x0 + w + 8}" y2="${y0 + h / 2 + 16}" stroke="${OCRE}" stroke-width="3"/>`;
  return svg(1000, y + 270, s + b); };
F[41] = () => { const { s, y } = head('Étudier les diagonales et les axes de symétrie', ['Le carré : deux diagonales égales et perpendiculaires, quatre axes de symétrie.']);
  const x0 = 360, y0 = y + 25, c = 230;
  let b = quad(`${x0},${y0} ${x0 + c},${y0} ${x0 + c},${y0 + c} ${x0},${y0 + c}`);
  b += `<line x1="${x0}" y1="${y0}" x2="${x0 + c}" y2="${y0 + c}" stroke="${PINK2}" stroke-width="3" stroke-dasharray="8,6"/>`;
  b += `<line x1="${x0 + c}" y1="${y0}" x2="${x0}" y2="${y0 + c}" stroke="${PINK2}" stroke-width="3" stroke-dasharray="8,6"/>`;
  b += `<line x1="${x0 + c / 2}" y1="${y0 - 25}" x2="${x0 + c / 2}" y2="${y0 + c + 25}" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="4,5"/>`;
  b += `<line x1="${x0 - 25}" y1="${y0 + c / 2}" x2="${x0 + c + 25}" y2="${y0 + c / 2}" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="4,5"/>`;
  b += dot(x0 + c / 2, y0 + c / 2, 7);
  b += txt(x0 + c + 50, y0 + 60, 'diagonales', 24, PINK2, 'bold') + txt(x0 + c + 50, y0 + 100, 'axes de symétrie', 24, GREEN, 'bold');
  return svg(1050, y + 310, s + b); };
F[42] = () => { const { s, y } = head('Classer les quadrilatères', ['Le carré vérifie à la fois les propriétés du rectangle et celles du losange.']);
  const yy = y + 15;
  let b = `<ellipse cx="380" cy="${yy + 140}" rx="330" ry="135" fill="${BLUEL}" fill-opacity="0.55" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<ellipse cx="620" cy="${yy + 140}" rx="330" ry="135" fill="${PINK}" fill-opacity="0.4" stroke="${PINK2}" stroke-width="3"/>`;
  b += txt(240, yy + 80, 'rectangles', 27, BLUE, 'bold', 'middle') + txt(775, yy + 80, 'losanges', 27, PINK2, 'bold', 'middle');
  b += txt(500, yy + 115, 'carrés', 28, GREEN, 'bold', 'middle');
  b += quad(`465,${yy + 140} 535,${yy + 140} 535,${yy + 210} 465,${yy + 210}`, GREENL, GREEN);
  return svg(1000, y + 320, s + b); };
F[43] = () => { const { s, y } = head('Comparer les propriétés des quadrilatères', ['Quatre angles droits : rectangle ; quatre angles droits ET quatre côtés égaux : carré.']);
  const y0 = y + 25;
  let b = quad(`140,${y0} 470,${y0} 470,${y0 + 190} 140,${y0 + 190}`);
  [[140, y0, 1, 1], [470, y0, -1, 1], [470, y0 + 190, -1, -1], [140, y0 + 190, 1, -1]].forEach(a => { b += rightAngle(a[0], a[1], a[2], 0, 0, a[3]); });
  b += txt(305, y0 + 235, 'rectangle', 25, '#222', 'normal', 'middle');
  b += quad(`620,${y0} 810,${y0} 810,${y0 + 190} 620,${y0 + 190}`);
  [[620, y0, 1, 1], [810, y0, -1, 1], [810, y0 + 190, -1, -1], [620, y0 + 190, 1, -1]].forEach(a => { b += rightAngle(a[0], a[1], a[2], 0, 0, a[3]); });
  [[715, y0 - 8, 715, y0 + 8], [715, y0 + 182, 715, y0 + 198], [612, y0 + 95, 628, y0 + 95], [802, y0 + 95, 818, y0 + 95]].forEach(m => { b += `<line x1="${m[0] - 6}" y1="${m[1]}" x2="${m[2] + 6}" y2="${m[3]}" stroke="${GREEN}" stroke-width="3"/>`; });
  b += txt(715, y0 + 235, 'carré : côtés égaux', 25, GREEN, 'bold', 'middle');
  return svg(1000, y + 300, s + b); };
F[44] = () => { const { s, y } = head('Calculer un angle manquant dans un triangle', ['50° + 65° = 115° ; le troisième angle vaut 180° \u2212 115° = 65°.']);
  const A = [180, y + 240], B = [760, y + 240], C = [560, y + 30];
  let b = `<polygon points="${A} ${B} ${C}" fill="${GREENL}" stroke="${BLUE}" stroke-width="3.5"/>`;
  b += `<path d="M ${A[0] + 70} ${A[1]} A 70 70 0 0 0 ${A[0] + 49} ${A[1] - 42}" fill="none" stroke="${OCRE}" stroke-width="3"/>` + txt(A[0] + 95, A[1] - 22, '50°', 24, OCRE, 'bold');
  b += `<path d="M ${B[0] - 70} ${B[1]} A 70 70 0 0 1 ${B[0] - 36} ${B[1] - 54}" fill="none" stroke="${GREEN}" stroke-width="3"/>` + txt(B[0] - 135, B[1] - 25, '65°', 24, GREEN, 'bold');
  b += `<circle cx="${C[0]}" cy="${C[1] + 36}" r="26" fill="none" stroke="${PINK2}" stroke-width="3"/>` + txt(C[0] + 35, C[1] + 30, '?', 30, PINK2, 'bold');
  return svg(1000, y + 290, s + b); };
F[45] = () => { const { s, y } = head('Calculer des angles dans un quadrilatère', ['80° + 95° + 110° = 285° ; le quatrième angle vaut 360° \u2212 285° = 75°.']);
  const P = [[220, y + 250], [780, y + 250], [690, y + 35], [330, y + 60]];
  let b = `<polygon points="${P.map(p => p.join(',')).join(' ')}" fill="${GREENL}" stroke="${BLUE}" stroke-width="3.5"/>`;
  b += txt(265, y + 230, '80°', 25, OCRE, 'bold') + txt(700, y + 230, '95°', 25, GREEN, 'bold') + txt(630, y + 85, '110°', 25, BLUE, 'bold');
  b += `<circle cx="${P[3][0] + 32}" cy="${P[3][1] + 32}" r="26" fill="none" stroke="${PINK2}" stroke-width="3"/>` + txt(P[3][0] + 70, P[3][1] + 42, '?', 30, PINK2, 'bold');
  return svg(1000, y + 300, s + b); };
F[46] = () => { const { s, y } = head('Construire des quadrilatères', ['Rectangle de 6 cm sur 4 cm : base de 6 cm, puis deux perpendiculaires de 4 cm.']);
  const x0 = 250, y0 = y + 35, w = 450, h = 190;
  let b = quad(`${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}`, 'white');
  [[x0, y0 + h, 1, -1], [x0 + w, y0 + h, -1, -1]].forEach(a => { b += rightAngle(a[0], a[1], a[2], 0, 0, a[3]); });
  b += txt(x0 + w / 2, y0 + h + 42, '6 cm', 26, BLUE, 'bold', 'middle');
  b += txt(x0 - 75, y0 + h / 2 + 8, '4 cm', 26, GREEN, 'bold');
  b += txt(x0 + w + 25, y0 + h / 2 + 8, '4 cm', 26, GREEN, 'bold');
  return svg(1000, y + 300, s + b); };
F[47] = () => { const { s, y } = head('Construire des triangles', ['Côtés 4 cm, 5 cm et 6 cm : possible car 4 + 5 &gt; 6. Les arcs de compas se croisent au sommet.']);
  const A = [230, y + 250], B = [730, y + 250], C = [490, y + 45];
  let b = `<polygon points="${A} ${B} ${C}" fill="${GREENL}" stroke="${BLUE}" stroke-width="3.5"/>`;
  b += `<path d="M ${C[0] - 85} ${C[1] + 45} A 95 95 0 0 1 ${C[0] + 75} ${C[1] + 55}" fill="none" stroke="${PINK2}" stroke-width="2.5" stroke-dasharray="7,6"/>`;
  b += `<path d="M ${C[0] - 60} ${C[1] + 75} A 95 95 0 0 0 ${C[0] + 95} ${C[1] + 35}" fill="none" stroke="${OCRE}" stroke-width="2.5" stroke-dasharray="7,6"/>`;
  b += txt((A[0] + B[0]) / 2, A[1] + 40, '6 cm', 25, BLUE, 'bold', 'middle');
  b += txt((A[0] + C[0]) / 2 - 55, (A[1] + C[1]) / 2, '4 cm', 25, OCRE, 'bold');
  b += txt((B[0] + C[0]) / 2 + 20, (B[1] + C[1]) / 2, '5 cm', 25, PINK2, 'bold');
  return svg(1000, y + 310, s + b); };
F[48] = () => { const { s, y } = head('Construire cercle et polygones', ['Hexagone régulier inscrit : la longueur du côté est égale au rayon du cercle.']);
  const cx = 480, cy = y + 170, R = 140;
  let b = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${BLUEL}" fill-opacity="0.45" stroke="${BLUE}" stroke-width="3.5"/>`;
  const pts = []; for (let i = 0; i < 6; i++) pts.push([cx + R * Math.cos(i * Math.PI / 3), cy + R * Math.sin(i * Math.PI / 3)]);
  b += `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="none" stroke="${GREEN}" stroke-width="3.5"/>`;
  b += `<line x1="${cx}" y1="${cy}" x2="${pts[0][0]}" y2="${pts[0][1]}" stroke="${PINK2}" stroke-width="3"/>`;
  b += dot(cx, cy, 6) + txt(cx + R / 2 - 15, cy - 12, 'rayon', 23, PINK2, 'bold');
  b += txt(cx + R + 40, cy + 8, 'côté = rayon', 25, GREEN, 'bold');
  return svg(1000, y + 350, s + b); };
F[49] = () => { const { s, y } = head('Composer et décomposer des figures', ['Une diagonale décompose un parallélogramme en deux triangles superposables.']);
  const P = [[220, y + 230], [720, y + 230], [820, y + 40], [320, y + 40]];
  let b = `<polygon points="${P[0]} ${P[1]} ${P[2]}" fill="${GREENL}" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<polygon points="${P[0]} ${P[2]} ${P[3]}" fill="${PINK}" fill-opacity="0.5" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<line x1="${P[0][0]}" y1="${P[0][1]}" x2="${P[2][0]}" y2="${P[2][1]}" stroke="${PINK2}" stroke-width="3.5" stroke-dasharray="9,7"/>`;
  b += txt(560, y + 190, 'triangle 1', 24, GREEN, 'bold') + txt(400, y + 95, 'triangle 2', 24, PINK2, 'bold');
  return svg(1000, y + 290, s + b); };
F[51] = () => { const { s, y } = head('Construire des patrons de prismes', ['Le patron d\u2019un cube : six carrés égaux, repliés pour fermer la boîte.']);
  const c = 95, x0 = 300, y0 = y + 15;
  let b = '';
  const cells = [[1, 0], [0, 1], [1, 1], [2, 1], [1, 2], [1, 3]];
  cells.forEach(cc => { b += `<rect x="${x0 + cc[0] * c}" y="${y0 + cc[1] * c}" width="${c}" height="${c}" fill="${BLUEL}" stroke="${BLUE}" stroke-width="3"/>`; });
  // petit cube 3D
  const kx = 700, ky = y0 + 140, k = 90, o = 34;
  b += `<rect x="${kx}" y="${ky}" width="${k}" height="${k}" fill="${BLUEL}" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<polygon points="${kx},${ky} ${kx + o},${ky - o} ${kx + k + o},${ky - o} ${kx + k},${ky}" fill="#C5DCF0" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<polygon points="${kx + k},${ky} ${kx + k + o},${ky - o} ${kx + k + o},${ky + k - o} ${kx + k},${ky + k}" fill="#AECDe8" stroke="${BLUE}" stroke-width="3"/>`;
  b += arrow(640, ky + 30, 690, ky + 30, GREEN);
  return svg(1000, y + 430, s + b); };
F[52] = () => { const { s, y } = head('Se repérer dans le premier quadrant', ['A(3 ; 5) : 3 unités sur l\u2019axe des abscisses, puis 5 unités vers le haut.']);
  const ox = 160, oy = y + 330, u = 52;
  let b = '';
  for (let i = 0; i <= 6; i++) { b += `<line x1="${ox + i * u}" y1="${oy}" x2="${ox + i * u}" y2="${oy - 6 * u}" stroke="#CCC" stroke-width="1.5"/><line x1="${ox}" y1="${oy - i * u}" x2="${ox + 6 * u}" y2="${oy - i * u}" stroke="#CCC" stroke-width="1.5"/>`; if (i > 0) { b += txt(ox + i * u, oy + 32, String(i), 22, '#222', 'normal', 'middle') + txt(ox - 28, oy - i * u + 8, String(i), 22); } }
  b += axes(ox, oy, 6 * u + 45, 6 * u + 45) + txt(ox - 26, oy + 30, '0', 22);
  b += `<line x1="${ox + 3 * u}" y1="${oy}" x2="${ox + 3 * u}" y2="${oy - 5 * u}" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="6,5"/>`;
  b += `<line x1="${ox}" y1="${oy - 5 * u}" x2="${ox + 3 * u}" y2="${oy - 5 * u}" stroke="${GREEN}" stroke-width="2.5" stroke-dasharray="6,5"/>`;
  b += dot(ox + 3 * u, oy - 5 * u, 9) + txt(ox + 3 * u + 18, oy - 5 * u - 14, 'A(3 ; 5)', 26, PINK2, 'bold');
  return svg(1000, y + 410, s + b); };
F[53] = () => { const { s, y } = head('Placer et lire des coordonnées', ['B(6 ; 2) et C(2 ; 6) : l\u2019ordre des nombres compte, ce sont deux points différents.']);
  const ox = 160, oy = y + 330, u = 48;
  let b = '';
  for (let i = 0; i <= 7; i++) { b += `<line x1="${ox + i * u}" y1="${oy}" x2="${ox + i * u}" y2="${oy - 7 * u}" stroke="#CCC" stroke-width="1.5"/><line x1="${ox}" y1="${oy - i * u}" x2="${ox + 7 * u}" y2="${oy - i * u}" stroke="#CCC" stroke-width="1.5"/>`; if (i > 0) { b += txt(ox + i * u, oy + 32, String(i), 21, '#222', 'normal', 'middle') + txt(ox - 28, oy - i * u + 8, String(i), 21); } }
  b += axes(ox, oy, 7 * u + 40, 7 * u + 40) + txt(ox - 26, oy + 30, '0', 22);
  b += dot(ox + 6 * u, oy - 2 * u, 9) + txt(ox + 6 * u + 16, oy - 2 * u - 12, 'B(6 ; 2)', 25, PINK2, 'bold');
  b += dot(ox + 2 * u, oy - 6 * u, 9, GREEN) + txt(ox + 2 * u + 16, oy - 6 * u - 12, 'C(2 ; 6)', 25, GREEN, 'bold');
  return svg(1000, y + 420, s + b); };
F[54] = () => { const { s, y } = head('Effectuer des transformations successives', ['A(2 ; 1) \u2192 translation de 3 vers la droite \u2192 A\u2019(5 ; 1) \u2192 réflexion sur x = 4 \u2192 A\u2019\u2019(3 ; 1).']);
  const ox = 140, oy = y + 250, u = 95;
  let b = '';
  for (let i = 0; i <= 7; i++) { b += `<line x1="${ox + i * u}" y1="${oy}" x2="${ox + i * u}" y2="${oy - 2.3 * u}" stroke="#DDD" stroke-width="1.5"/>`; if (i > 0) b += txt(ox + i * u, oy + 32, String(i), 22, '#222', 'normal', 'middle'); }
  b += `<line x1="${ox}" y1="${oy}" x2="${ox + 7 * u + 30}" y2="${oy}" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<line x1="${ox + 4 * u}" y1="${oy + 15}" x2="${ox + 4 * u}" y2="${oy - 2.3 * u}" stroke="${GREEN}" stroke-width="3" stroke-dasharray="8,6"/>` + txt(ox + 4 * u + 12, oy - 2.1 * u, 'x = 4', 24, GREEN, 'bold');
  b += dot(ox + 2 * u, oy - u, 10) + txt(ox + 2 * u, oy - u - 22, 'A', 26, PINK2, 'bold', 'middle');
  b += arrow(ox + 2 * u + 18, oy - u, ox + 5 * u - 18, oy - u, OCRE) + txt(ox + 3.5 * u, oy - u - 18, 'translation +3', 22, OCRE, 'bold', 'middle');
  b += dot(ox + 5 * u, oy - u, 10, OCRE) + txt(ox + 5 * u, oy - u - 22, 'A\u2019', 26, OCRE, 'bold', 'middle');
  b += `<path d="M ${ox + 5 * u} ${oy - u + 26} Q ${ox + 4 * u} ${oy - u + 85} ${ox + 3 * u} ${oy - u + 26}" fill="none" stroke="${GREEN}" stroke-width="3"/>` + `<polygon points="${ox + 3 * u},${oy - u + 26} ${ox + 3 * u - 8},${oy - u + 44} ${ox + 3 * u + 10},${oy - u + 42}" fill="${GREEN}"/>`;
  b += dot(ox + 3 * u, oy - u, 10, GREEN) + txt(ox + 3 * u, oy - u - 22, 'A\u2019\u2019', 26, GREEN, 'bold', 'middle');
  b += txt(ox + 4 * u, oy - u + 110, 'réflexion', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 310, s + b); };

// ---------- UNITÉ 5 ----------
F[55] = () => { const { s, y } = head('Choisir une unité de longueur appropriée', ['La fourmi se mesure en mm, le cahier en cm, la salle en m et la route en km.']);
  const yy = y + 20; let b = '';
  const items = [['fourmi', 'mm', PINK2], ['cahier', 'cm', OCRE], ['salle', 'm', BLUE], ['route', 'km', GREEN]];
  items.forEach((it, i) => { const x0 = 90 + i * 225;
    b += `<rect x="${x0}" y="${yy}" width="195" height="120" rx="12" fill="${GREENL}" fill-opacity="0.6" stroke="${it[2]}" stroke-width="3"/>`;
    b += txt(x0 + 97, yy + 50, it[0], 26, '#222', 'normal', 'middle');
    b += txt(x0 + 97, yy + 95, it[1], 34, it[2], 'bold', 'middle'); });
  return svg(1000, y + 180, s + b); };
F[56] = () => { const { s, y } = head('Comparer et convertir des longueurs', ['3,5 m = 350 cm et 4 200 m = 4,2 km : on glisse d\u2019un rang par unité.']);
  const units = ['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'];
  let b = ''; const yy = y + 20;
  units.forEach((u2, i) => { b += `<rect x="${90 + i * 120}" y="${yy}" width="110" height="62" fill="${u2 === 'm' ? GREENL : 'white'}" stroke="${BLUE}" stroke-width="2.5"/>` + txt(145 + i * 120, yy + 40, u2, 27, u2 === 'm' ? GREEN : '#222', 'bold', 'middle'); });
  b += arrow(200, yy + 95, 320, yy + 95, GREEN) + txt(260, yy + 130, '× 10', 24, GREEN, 'bold', 'middle');
  b += arrow(800, yy + 95, 680, yy + 95, PINK2) + txt(740, yy + 130, '÷ 10', 24, PINK2, 'bold', 'middle');
  return svg(1000, y + 180, s + b); };
F[57] = () => { const { s, y } = head('Trouver une mesure à partir du périmètre', ['P = 30 cm et L = 9 cm : L + l = 15, donc l = 15 \u2212 9 = 6 cm.']);
  const x0 = 280, y0 = y + 30, w = 420, h = 168;
  let b = quad(`${x0},${y0} ${x0 + w},${y0} ${x0 + w},${y0 + h} ${x0},${y0 + h}`, 'white');
  b += txt(x0 + w / 2, y0 + h + 42, 'L = 9 cm', 26, BLUE, 'bold', 'middle');
  b += txt(x0 - 110, y0 + h / 2 + 8, 'l = ?', 28, PINK2, 'bold');
  b += txt(x0 + w / 2, y0 - 16, 'P = 30 cm', 26, GREEN, 'bold', 'middle');
  return svg(1000, y + 280, s + b); };
F[60] = () => { const { s, y } = head('Calculer l\u2019aire d\u2019un rectangle', ['8 cm × 5 cm = 40 cm² : 5 rangées de 8 carreaux d\u2019un centimètre carré.']);
  const x0 = 250, y0 = y + 25, c = 48;
  let b = '';
  for (let r = 0; r < 5; r++) for (let col = 0; col < 8; col++) b += `<rect x="${x0 + col * c}" y="${y0 + r * c}" width="${c}" height="${c}" fill="${(r + col) % 2 ? BLUEL : 'white'}" stroke="${BLUE}" stroke-width="1.6"/>`;
  b += `<rect x="${x0}" y="${y0}" width="${8 * c}" height="${5 * c}" fill="none" stroke="${BLUE}" stroke-width="3.5"/>`;
  b += txt(x0 + 4 * c, y0 + 5 * c + 40, '8 cm', 26, BLUE, 'bold', 'middle') + txt(x0 - 85, y0 + 2.5 * c + 8, '5 cm', 26, GREEN, 'bold');
  b += txt(x0 + 8 * c + 45, y0 + 2.5 * c + 8, 'A = 40 cm²', 28, PINK2, 'bold');
  return svg(1050, y + 330, s + b); };
F[61] = () => { const { s, y } = head('Calculer l\u2019aire d\u2019un parallélogramme', ['A = base × hauteur = 9 × 4 = 36 cm² : la hauteur est perpendiculaire à la base.']);
  const y0 = y + 25, h = 180;
  const P = [[220, y0 + h], [670, y0 + h], [770, y0], [320, y0]];
  let b = `<polygon points="${P.map(p => p.join(',')).join(' ')}" fill="${GREENL}" stroke="${BLUE}" stroke-width="3.5"/>`;
  b += `<line x1="${520}" y1="${y0}" x2="${520}" y2="${y0 + h}" stroke="${PINK2}" stroke-width="3" stroke-dasharray="8,6"/>`;
  b += rightAngle(520, y0 + h, 0, -1, 1, 0);
  b += txt(445, y0 + h + 40, 'base = 9 cm', 26, BLUE, 'bold', 'middle') + txt(535, y0 + h / 2 + 8, 'h = 4 cm', 25, PINK2, 'bold');
  return svg(1000, y + 290, s + b); };
F[63] = () => { const { s, y } = head('Comparer les aires de figures liées', ['Même base (12 cm) et même hauteur (5 cm) : rectangle 60 cm², parallélogramme 60 cm², triangle 30 cm².']);
  const y0 = y + 25, h = 140, w = 240;
  let b = quad(`90,${y0 + h} ${90 + w},${y0 + h} ${90 + w},${y0} 90,${y0}`) + txt(90 + w / 2, y0 + h + 38, '60 cm²', 25, GREEN, 'bold', 'middle');
  b += quad(`400,${y0 + h} ${400 + w},${y0 + h} ${400 + w + 55},${y0} 455,${y0}`) + txt(400 + w / 2 + 25, y0 + h + 38, '60 cm²', 25, GREEN, 'bold', 'middle');
  b += `<polygon points="760,${y0 + h} ${760 + w},${y0 + h} ${760 + w / 2},${y0}" fill="${PINK}" fill-opacity="0.5" stroke="${BLUE}" stroke-width="3.5"/>` + txt(760 + w / 2, y0 + h + 38, '30 cm² (moitié)', 25, PINK2, 'bold', 'middle');
  return svg(1070, y + 240, s + b); };
F[67] = () => { const { s, y } = head('Convertir des mesures dans des problèmes', ['2 m 35 cm = 200 cm + 35 cm = 235 cm ; 1 h 30 min = 90 min ; 2,5 L = 2 500 mL.']);
  let b = box(90, y + 20, 200, 62, '2 m 35 cm', BLUEL, BLUE, 26);
  b += arrow(305, y + 51, 395, y + 51, GREEN);
  b += box(405, y + 20, 280, 62, '200 cm + 35 cm', GREENL, GREEN, 25);
  b += txt(720, y + 62, '=  235 cm', 30, PINK2, 'bold');
  return svg(1000, y + 120, s + b); };

// -------- rendu --------
(async () => {
  const sharp = require('sharp');
  const idxs = Object.keys(F).map(Number).sort((a, b) => a - b);
  for (const i of idxs) {
    const sv = F[i]();
    fs.writeFileSync(`${dir}/fig${i}.svg`, sv);
    await sharp(Buffer.from(sv), { density: 110 }).png().toFile(`${dir}/fig${i}.png`);
    console.log('fig' + i + ' OK');
  }
  console.log('total:', idxs.length);
})();
