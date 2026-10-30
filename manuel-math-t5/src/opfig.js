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
  const ones = Number(aa) * (Number(bb) % 10);
  const tens = Number(aa) * (Math.floor(Number(bb) / 10) * 10);
  let s = heading('Multiplication posée', 'Je calcule par les unités, puis par les dizaines décalées.');
  s += cols(aa, x + (String(result).length - aa.length) * step, 145, step, 36);
  s += T(x - 48, 195, '×', 35, BLUE, 'bold', 'middle');
  s += cols(bb, x + (String(result).length - bb.length) * step, 195, step, 36);
  s += line(x - 55, 220, String(result).length * step + 75);
  s += cols(String(ones), x + (String(result).length - String(ones).length) * step, 270, step, 32, PINK2);
  s += T(x + String(result).length * step + 35, 270, '← unités', 19, PINK2, 'bold');
  s += cols(String(tens), x + (String(result).length - String(tens).length) * step, 325, step, 32, OCRE);
  s += T(x + String(result).length * step + 35, 325, '← dizaines : décalage', 19, OCRE, 'bold');
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
  let s = heading('Calcul décimal posé', 'Les virgules restent dans la même colonne.');
  s += box(180, 145, 640, 72, expression, BLUEL, BLUE, 31);
  s += arrow(500, 235, 500, 285, PINK2, 5);
  s += box(180, 305, 640, 72, result, GREENL, GREEN, 31);
  s += T(500, 430, 'unités | dixièmes | centièmes', 23, OCRE, 'bold', 'middle');
  return svg(1000, 480, s);
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

module.exports = { addSvg, subSvg, mulSvg, longDivisionSvg, fractionSvg, decimalSvg, conversionSvg };
