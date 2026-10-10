// Bibliothèque de figures exactes — SVG -> PNG (sharp, density 110)
const fs = require('fs');
const path = require('path');
const DIR = path.join(__dirname, '..', 'assets', 'figures');
fs.mkdirSync(DIR, { recursive: true });

const BLUE = '#1F4E79', PINK = '#F8BBD0', PINK2 = '#C2185B', GREEN = '#2E7D32',
  GREENL = '#E8F5E9', OCRE = '#B25000', BLUEL = '#D6E6F5';
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
  let s = '';
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
function axes(x, y, w, h) { return arrow(x, y, x + w, y) + arrow(x, y, x, y - h); }
function box(x, y, w, h, t, fill = GREENL, stroke = GREEN, size = 26) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="3"/>` + txt(x + w / 2, y + h / 2 + 9, t, size, '#222', 'normal', 'middle');
}
function rightAngle(x, y, dx1, dy1, dx2, dy2, s = 20) {
  return `<path d="M ${x + dx1 * s} ${y + dy1 * s} L ${x + dx1 * s + dx2 * s} ${y + dy1 * s + dy2 * s} L ${x + dx2 * s} ${y + dy2 * s}" fill="none" stroke="${PINK2}" stroke-width="2.5"/>`;
}
function poly(points, fill = 'none', stroke = BLUE, wd = 3.5) {
  return `<polygon points="${points.map(p => p.join(',')).join(' ')}" fill="${fill}" stroke="${stroke}" stroke-width="${wd}"/>`;
}
function seg(x1, y1, x2, y2, color = BLUE, wd = 3.5, dash = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${wd}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}
function circle(cx, cy, r, stroke = BLUE, fill = 'none', wd = 3.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${wd}"/>`;
}

async function render(figs) {
  const sharp = require('sharp');
  const out = {};
  for (const [name, sv] of Object.entries(figs)) {
    fs.writeFileSync(path.join(DIR, `${name}.svg`), sv);
    await sharp(Buffer.from(sv), { density: 110 }).png().toFile(path.join(DIR, `${name}.png`));
    out[name] = fs.readFileSync(path.join(DIR, `${name}.png`));
  }
  return out;
}
function pngSize(buf) { return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) }; }

module.exports = { BLUE, PINK, PINK2, GREEN, GREENL, OCRE, BLUEL, SER, head, svg, bar, txt, grid100, nline, dot, tableEl, arrow, axes, box, rightAngle, poly, seg, circle, render, pngSize, DIR };
