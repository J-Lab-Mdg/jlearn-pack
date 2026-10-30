// Schémas de calcul pour les enfants : verticale, flèches et une consigne courte.
const { svg, txt, seg, arrow, box, BLUE, PINK2, GREEN, GREENL, OCRE, BLUEL } = require('./figlib');

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const T = (x, y, text, size = 26, fill = '#222', weight = 'normal', anchor = 'start') => txt(x, y, esc(text), size, fill, weight, anchor);
const F = n => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00a0');
const cols = (s, x, y, step, size, fill = '#222') => String(s).split('').map((c, i) => T(x + i * step, y, c, size, fill, 'bold', 'middle')).join('');
const line = (x, y, width) => seg(x, y, x + width, y, BLUE, 4);

function heading(title, subtitle) {
  return `<text x="45" y="45" font-family="DejaVu Serif" font-size="30" font-weight="bold" fill="${BLUE}">${esc(title)}</text>` +
    `<text x="48" y="80" font-family="DejaVu Serif" font-size="21" fill="#333">${esc(subtitle)}</text>`;
}

function addSvg(a, b, result) {
  const aa = String(a), bb = String(b), rr = String(result), max = Math.max(aa.length, bb.length, rr.length);
  const x = 510 - max * 26, step = 52, width = max * step + 130;
  let s = heading('Addition posée', 'Une colonne sous l’autre : unités, dizaines, centaines…');
  s += T(500, 130, 'retenues', 19, PINK2, 'bold', 'middle');
  s += cols(aa, x + (max - aa.length) * step, 190, step, 34);
  s += T(x - 45, 240, '+', 34, GREEN, 'bold', 'middle');
  s += cols(bb, x + (max - bb.length) * step, 240, step, 34);
  s += line(x - 55, 265, max * step + 70);
  s += cols(rr, x + (max - rr.length) * step, 315, step, 36, GREEN);
  s += arrow(x + max * step - 20, 145, x + max * step - 20, 178, PINK2, 3);
  s += arrow(x + (max - 1) * step, 335, x + (max - 1) * step, 365, GREEN, 3);
  s += T(500, 410, `${F(a)} + ${F(b)} = ${F(result)}`, 27, GREEN, 'bold', 'middle');
  return svg(1000, 455, s);
}

function subSvg(a, b, result) {
  const aa = String(a), bb = String(b), rr = String(result), max = Math.max(aa.length, bb.length, rr.length);
  const x = 510 - max * 26, step = 52;
  let s = heading('Soustraction posée', 'Si le chiffre du haut est trop petit, j’emprunte à gauche.');
  s += T(500, 130, 'emprunt', 19, PINK2, 'bold', 'middle');
  s += cols(aa, x + (max - aa.length) * step, 190, step, 34);
  s += T(x - 45, 240, '−', 34, PINK2, 'bold', 'middle');
  s += cols(bb, x + (max - bb.length) * step, 240, step, 34);
  s += line(x - 55, 265, max * step + 70);
  s += cols(rr, x + (max - rr.length) * step, 315, step, 36, GREEN);
  s += arrow(x + (max - 1) * step, 145, x + (max - 2) * step, 145, PINK2, 3);
  s += T(500, 410, `${F(a)} − ${F(b)} = ${F(result)}`, 27, GREEN, 'bold', 'middle');
  return svg(1000, 455, s);
}

function mulSvg(a, b, result) {
  const aa = String(a), bb = String(b), step = 54, width = Math.max(aa.length, bb.length + 1, String(result).length) * step + 190;
  const x = 500 - Math.max(aa.length, bb.length + 1, String(result).length) * step / 2;
  const fu = Number(bb) % 10;
  const ones = Number(aa) * fu;
  const tensDigit = Math.floor(Number(bb) / 10);
  const tens = Number(aa) * (tensDigit * 10);
  let s = heading('Multiplication posée', 'Je calcule par les unités, puis par les dizaines décalées.');
  s += cols(aa, x + (String(result).length - aa.length) * step, 145, step, 36);
  s += T(x - 48, 195, '×', 35, BLUE, 'bold', 'middle');
  s += cols(bb, x + (String(result).length - bb.length) * step, 195, step, 36);
  s += line(x - 55, 220, String(result).length * step + 75);
  s += cols(String(ones), x + (String(result).length - String(ones).length) * step, 270, step, 32, PINK2);
  s += T(x + String(result).length * step + 28, 270, `${F(b)} → ${fu} unités : ${F(a)} × ${fu}`, 15, PINK2, 'bold');
  s += cols(String(tens), x + (String(result).length - String(tens).length) * step, 325, step, 32, OCRE);
  s += T(x + String(result).length * step + 28, 325, `${F(b)} → ${tensDigit} dizaines : ${F(a)} × ${tensDigit * 10}`, 14, OCRE, 'bold');
  s += line(x - 55, 350, String(result).length * step + 75);
  s += cols(String(result), x, 405, step, 38, GREEN);
  s += arrow(x + (String(result).length - 1) * step, 110, x + (String(result).length - 1) * step, 128, PINK2, 3);
  s += arrow(x + (String(result).length - 2) * step, 110, x + (String(result).length - 2) * step, 178, OCRE, 3);
  s += T(500, 465, `${F(a)} × ${F(b)} = ${F(result)}`, 29, GREEN, 'bold', 'middle');
  s += box(90, 500, 820, 46, 'Les produits partiels sont alignés par leur valeur de position.', BLUEL, BLUE, 20);
  return svg(1000, 565, s);
}

function longDivisionSvg(dividend, divisor, quotient, remainder) {
  const ds = String(dividend), qs = String(quotient), step = 56, x = 225;
  let s = heading('Division posée', 'Je demande : « Dans cette portion, combien de fois le diviseur ? »');
  s += cols(qs, x + 20, 135, step, 34, GREEN);
  s += T(x - 55, 185, '÷', 35, BLUE, 'bold', 'middle');
  s += cols(ds, x, 185, step, 34);
  s += seg(x - 15, 205, x + ds.length * step + 20, 205, BLUE, 4);
  s += seg(x + ds.length * step + 20, 150, x + ds.length * step + 20, 205, BLUE, 4);
  s += T(x + ds.length * step + 60, 185, String(divisor), 34, PINK2, 'bold', 'middle');
  // Affiche les étapes sous la potence sous forme de chemin vertical.
  let current = 0, y = 275;
  String(dividend).split('').forEach((digit, i) => {
    current = current * 10 + Number(digit);
    const qd = current >= divisor ? Math.floor(current / divisor) : 0;
    const prod = qd * divisor;
    const rem = current - prod;
    s += box(80, y - 25, 130, 45, `${current}`, i % 2 ? '#F8FBFF' : GREENL, BLUE, 22);
    s += arrow(220, y - 2, 320, y - 2, OCRE, 3);
    s += T(335, y + 5, `${qd} × ${divisor} = ${prod}`, 21, OCRE, 'bold');
    s += arrow(585, y - 2, 675, y - 2, GREEN, 3);
    s += T(690, y + 5, `reste ${rem}`, 21, GREEN, 'bold');
    if (i < String(dividend).length - 1) s += T(500, y + 35, '↓ j’abaisse le chiffre suivant', 18, BLUE, 'bold', 'middle');
    current = rem;
    y += 70;
  });
  s += box(130, y + 4, 740, 48, `${F(dividend)} = (${divisor} × ${quotient}) + ${remainder}`, GREENL, GREEN, 24);
  s += T(500, y + 88, `quotient ${quotient} ; reste ${remainder} < diviseur ${divisor}`, 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 125, s);
}

function fractionSvg(expression, result, note) {
  let s = heading('Fraction : je vois avant de calculer', note || 'Les parts sont égales ; les flèches montrent l’opération.');
  s += box(100, 150, 800, 76, expression, BLUEL, BLUE, 32);
  s += arrow(500, 245, 500, 305, GREEN, 5);
  s += box(210, 325, 580, 76, result, GREENL, GREEN, 32);
  return svg(1000, 465, s);
}

function decimalSvg(expression, result) {
  const nums = String(expression).split(/[+−×÷]/).map(x => x.trim()).filter(Boolean);
  const opMatch = String(expression).match(/[+−×÷]/);
  const op = opMatch ? opMatch[0] : '';
  const all = [...nums, String(result)];
  const max = Math.max(...all.map(x => x.length));
  const step = 46, x = 510 - max * step / 2;
  let s = heading('Calcul décimal posé', 'Les virgules restent dans la même colonne.');
  nums.forEach((n, i) => {
    const y = 145 + i * 54;
    if (i > 0) s += T(x - 40, y, op, 30, BLUE, 'bold', 'middle');
    s += cols(n, x + (max - n.length) * step, y, step, 31);
  });
  const lineY = 145 + nums.length * 54 - 24;
  s += line(x - 55, lineY, max * step + 70);
  s += arrow(x + Math.max(1, max - 3) * step, lineY + 12, x + Math.max(1, max - 3) * step, lineY + 36, PINK2, 3);
  s += cols(String(result), x + (max - String(result).length) * step, lineY + 68, step, 35, GREEN);
  s += T(500, lineY + 120, 'unités | dixièmes | centièmes : virgule sous virgule', 22, OCRE, 'bold', 'middle');
  return svg(1000, lineY + 160, s);
}

function conversionSvg(expression, result) {
  let s = heading('Conversion : je déplace dans le tableau', 'Un chiffre par colonne ; une flèche par changement d’unité.');
  s += box(90, 150, 300, 74, expression, BLUEL, BLUE, 29);
  s += arrow(410, 187, 590, 187, GREEN, 6);
  s += box(610, 150, 300, 74, result, GREENL, GREEN, 29);
  s += T(500, 305, 'km | hm | dam | m | dm | cm | mm', 24, BLUE, 'bold', 'middle');
  s += T(500, 365, '×10 vers la droite ; ÷10 vers la gauche', 23, OCRE, 'bold', 'middle');
  return svg(1000, 420, s);
}

// Modèle court pour les questions CEPE qui ne sont pas une simple ligne de calcul :
// périmètre, prix, rendement, durée ou quantité. Le chemin montre les données,
// l'opération choisie et le résultat, au lieu de laisser l'enfant deviner la méthode.
function modelSvg(titleText, data, operation, result) {
  let s = heading(titleText, 'Je relie les données à l’opération avant de répondre.');
  const rows = Array.isArray(data) ? data : [data];
  rows.forEach((d, i) => {
    const y = 135 + i * 68;
    s += box(70, y, 270, 48, d, i % 2 ? '#F8FBFF' : BLUEL, BLUE, 22);
    s += arrow(355, y + 24, 425, y + 24, OCRE, 4);
  });
  const oy = 135 + rows.length * 68;
  s += seg(425, 159, 425, oy + 29, OCRE, 3);
  s += arrow(425, oy + 29, 435, oy + 29, OCRE, 4);
  s += box(435, oy, 250, 58, operation, '#FFF4DF', OCRE, 22);
  s += arrow(695, oy + 29, 755, oy + 29, GREEN, 4);
  s += box(765, oy, 200, 58, result, GREENL, GREEN, 19);
  return svg(1000, oy + 95, s);
}

module.exports = { addSvg, subSvg, mulSvg, longDivisionSvg, fractionSvg, decimalSvg, conversionSvg, modelSvg };
