// Schémas pédagogiques déterministes T8 — lot pilote (partie s01).
// Même gabarit que le T9 : 1400×920, bandeau titre, deux panneaux, cartouche « Consigne / phrase clé ».
// Ce sont des schémas explicatifs (formes, repères, valeurs), pas des scènes illustrées :
// la scène de séance reste une image réaliste avec personnes (assets/scenes/s01.jpg).
const fs = require('fs'), path = require('path'), sharp = require('sharp');
const d = require('./data_s01');
const A = path.join(__dirname, '../assets');
const D = path.join(A, 'diagrams');
fs.mkdirSync(D, { recursive: true });
const C = { blue: '#1F4E79', green: '#2E7D32', red: '#C0392B', grey: '#555', light: '#F4F8FB', orange: '#E67E22', brown: '#8B5A2B' };
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function wrap(s, max = 40) { const words = String(s).split(/\s+/); const lines = []; let line = ''; for (const w of words) { if ((line + ' ' + w).trim().length > max) { if (line) lines.push(line); line = w; } else line = (line + ' ' + w).trim(); } if (line) lines.push(line); return lines; }
function T(x, y, s, o = {}) { const size = o.size || 30, fill = o.fill || '#222', weight = o.bold ? '700' : '400', anchor = o.anchor || 'start'; return wrap(s, o.max || 40).map((l, i) => `<text x="${x}" y="${y + i * (size + 8)}" font-family="DejaVu Sans, Arial, sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(l)}</text>`).join(''); }
function B(x, y, w, h, fill = '#fff', stroke = C.blue, rx = 14) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`; }
function L(x1, y1, x2, y2, color = C.blue, dash = false, w = 4) { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" ${dash ? 'stroke-dasharray="10 8"' : ''}/>`; }
function AR(x1, y1, x2, y2, color = C.red) { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="5" marker-end="url(#arr)"/>`; }
function P(x, y, w, h, title) { return B(x, y, w, h, '#fff') + B(x, y, w, 46, C.light, C.blue, 14) + T(x + 16, y + 32, title, { size: 26, bold: true, fill: C.blue, max: Math.floor(w / 15) }); }
function check(x, y, s) { return T(x, y, '✔ ' + s, { size: 26, fill: C.green, max: 30 }); }
function frame(title, sub, phrase, body, color) {
  const tl = wrap(title, 46).slice(0, 2).map((l, i) => `<text x="40" y="${46 + i * 38}" font-family="DejaVu Sans, Arial" font-size="34" font-weight="700" fill="#fff">${esc(l)}</text>`).join('');
  const ph = wrap(phrase, 82).slice(0, 3).map((l, i) => `<text x="60" y="${802 + i * 38}" font-family="DejaVu Sans, Arial" font-size="29" fill="#222">${esc(l)}</text>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="920" viewBox="0 0 1400 920"><defs><marker id="arr" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="${C.red}"/></marker><radialGradient id="ball" cx="35%" cy="30%"><stop offset="0%" stop-color="#ffffff"/><stop offset="55%" stop-color="#bdbdbd"/><stop offset="100%" stop-color="#4a4a4a"/></radialGradient></defs><rect width="1400" height="920" fill="#fff"/><rect width="1400" height="130" fill="${color}"/>${tl}<text x="40" y="118" font-family="DejaVu Sans, Arial" font-size="25" fill="#EAF2F8">${esc(sub)}</text>${body}<rect x="40" y="730" width="1320" height="160" rx="14" fill="${C.light}" stroke="${color}" stroke-width="2"/><text x="60" y="764" font-family="DejaVu Sans, Arial" font-size="24" font-weight="700" fill="${color}">Consigne / phrase clé</text>${ph}</svg>`;
}
// --- éléments réutilisables ---
const circle = (x, y, r, o = {}) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${o.fill || 'none'}" stroke="${o.stroke || '#222'}" stroke-width="${o.w || 4}" ${o.dash ? 'stroke-dasharray="9 7"' : ''}/>`;
const square = (x, y, s, o = {}) => `<rect x="${x}" y="${y}" width="${s}" height="${s}" fill="${o.fill || 'none'}" stroke="${o.stroke || '#222'}" stroke-width="${o.w || 4}" ${o.dash ? 'stroke-dasharray="9 7"' : ''}/>`;
const tri = (x, y, s, o = {}) => `<path d="M${x} ${y + s} L${x + s / 2} ${y} L${x + s} ${y + s} Z" fill="${o.fill || 'none'}" stroke="${o.stroke || '#222'}" stroke-width="${o.w || 4}"/>`;
const oval = (x, y, rx, ry, o = {}) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${o.fill || 'none'}" stroke="${o.stroke || '#222'}" stroke-width="${o.w || 4}"/>`;
// ballon : cercle + coutures (pentagone central et branches courbes)
function football(x, y, r, shaded = false) {
  const g = [`<circle cx="${x}" cy="${y}" r="${r}" fill="${shaded ? 'url(#ball)' : '#fff'}" stroke="#222" stroke-width="4"/>`];
  const pent = [];
  for (let i = 0; i < 5; i++) { const a = -Math.PI / 2 + i * 2 * Math.PI / 5; pent.push(`${(x + r * 0.34 * Math.cos(a)).toFixed(1)},${(y + r * 0.34 * Math.sin(a)).toFixed(1)}`); }
  g.push(`<polygon points="${pent.join(' ')}" fill="#3A3A3A" stroke="#222" stroke-width="3"/>`);
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + i * 2 * Math.PI / 5;
    const x1 = x + r * 0.34 * Math.cos(a), y1 = y + r * 0.34 * Math.sin(a);
    const x2 = x + r * 0.95 * Math.cos(a), y2 = y + r * 0.95 * Math.sin(a);
    g.push(`<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#222" stroke-width="3"/>`);
    const a2 = a + 2 * Math.PI / 5;
    const mx = x + r * 0.80 * Math.cos((a + a2) / 2), my = y + r * 0.80 * Math.sin((a + a2) / 2);
    g.push(`<path d="M${x2.toFixed(1)} ${y2.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${(x + r * 0.95 * Math.cos(a2)).toFixed(1)} ${(y + r * 0.95 * Math.sin(a2)).toFixed(1)}" fill="none" stroke="#222" stroke-width="3"/>`);
  }
  return g.join('');
}
const swatch = (x, y, w, h, fill, label) => B(x, y, w, h, fill, '#222', 6) + T(x + w / 2, y + h + 38, label, { size: 24, bold: true, fill: C.blue, max: 12, anchor: 'middle' });
const lightIcon = (x, y) => `<g><circle cx="${x}" cy="${y}" r="26" fill="#F1C40F" stroke="${C.orange}" stroke-width="3"/>${[0, 1, 2, 3, 4, 5, 6, 7].map((i) => { const a = i * Math.PI / 4; return `<line x1="${x + 34 * Math.cos(a)}" y1="${y + 34 * Math.sin(a)}" x2="${x + 50 * Math.cos(a)}" y2="${y + 50 * Math.sin(a)}" stroke="${C.orange}" stroke-width="4"/>`; }).join('')}</g>`;

function body(stage) {
  const b = [];
  if (stage === 'observe') {
    b.push(P(60, 150, 620, 540, 'Formes arrondies (organiques)'));
    b.push(circle(200, 300, 70), oval(430, 300, 90, 60));
    b.push(`<path d="M140 470 Q230 400 320 470 T500 470" fill="none" stroke="#222" stroke-width="4"/>`);
    b.push(T(120, 560, 'Cercle, ovale, courbe libre', { bold: true, fill: C.blue, max: 30 }));
    b.push(T(120, 610, 'Objets : ballon, orange, pot, roue', { fill: C.grey, max: 34, size: 27 }));
    b.push(P(720, 150, 620, 540, 'Formes anguleuses (géométriques)'));
    b.push(square(790, 240, 130), tri(1010, 240, 150), `<rect x="790" y="430" width="220" height="110" fill="none" stroke="#222" stroke-width="4"/>`);
    b.push(T(780, 600, 'Carré, triangle, rectangle', { bold: true, fill: C.blue, max: 30 }));
    b.push(T(780, 645, 'Objets : maison, cahier, toit, voile', { fill: C.grey, max: 34, size: 27 }));
  } else if (stage === 'prepare') {
    b.push(P(60, 150, 620, 540, 'Ma forme de départ (brouillon)'));
    b.push(B(120, 230, 500, 380, '#fff', '#222'));
    b.push(B(155, 265, 430, 310, '#fff', C.grey, 4));
    b.push(circle(370, 420, 110, { dash: true, stroke: C.grey, w: 3 }));
    b.push(T(130, 650, 'Cadre léger = marge régulière', { fill: C.blue, max: 32 }));
    b.push(P(720, 150, 620, 540, 'Mon nuancier : trois gris à essayer'));
    b.push(swatch(770, 250, 150, 120, '#E4E4E4', 'Clair'), swatch(950, 250, 150, 120, '#9E9E9E', 'Moyen'), swatch(1130, 250, 150, 120, '#4A4A4A', 'Foncé'));
    b.push(T(845, 470, 'Pression légère', { fill: C.grey, max: 10, anchor: 'middle', size: 25 }), T(1025, 470, 'Pression moyenne', { fill: C.grey, max: 10, anchor: 'middle', size: 25 }), T(1205, 470, 'Traits serrés', { fill: C.grey, max: 10, anchor: 'middle', size: 25 }));
    b.push(T(770, 600, 'Le clair n’est pas le blanc du papier ; le foncé n’est pas un aplat noir.', { fill: C.blue, max: 36, size: 27 }));
  } else if (stage === 'step_a') {
    b.push(P(60, 150, 800, 540, 'a. Tracer la forme légèrement'));
    b.push(B(120, 220, 680, 400, '#fff', '#222'));
    b.push(square(300, 260, 300, { dash: true, stroke: C.grey, w: 3 }));
    b.push(circle(450, 410, 150, { stroke: C.blue, w: 4 }));
    b.push(L(450, 240, 450, 580, C.grey, true, 2), L(280, 410, 620, 410, C.grey, true, 2));
    b.push(T(460, 660, 'Carré de repère + axes = cercle régulier', { fill: C.blue, max: 48, anchor: 'middle', size: 27 }));
    b.push(P(900, 150, 440, 540, 'Vérifier'));
    b.push(check(925, 250, 'Forme choisie et nommée'), check(925, 320, 'Marge autour de la forme'), check(925, 390, 'Traits légers'), check(925, 460, 'Pas encore de détail'));
  } else if (stage === 'step_b') {
    b.push(P(60, 150, 1280, 540, 'b. Transformer la forme en objet imaginé'));
    b.push(circle(230, 400, 110, { stroke: C.grey }));
    b.push(T(230, 560, '1. Le cercle seul', { bold: true, fill: C.grey, max: 22, anchor: 'middle', size: 27 }));
    b.push(AR(370, 400, 470, 400));
    b.push(football(640, 400, 110, false));
    b.push(T(640, 560, '2. J’ajoute les coutures', { bold: true, fill: C.blue, max: 24, anchor: 'middle', size: 27 }));
    b.push(AR(790, 400, 890, 400));
    b.push(football(1080, 400, 110, true));
    b.push(T(1080, 560, '3. Je pose les valeurs', { bold: true, fill: C.green, max: 24, anchor: 'middle', size: 27 }));
    b.push(T(120, 645, 'Exemple du PE T8 : « cercle : ballon ». Les lignes ajoutées appartiennent à l’objet.', { fill: C.blue, max: 80, size: 27 }));
  } else if (stage === 'step_c') {
    b.push(P(60, 150, 800, 540, 'c. Poser les trois tons de gris'));
    b.push(lightIcon(180, 250), AR(230, 290, 330, 350, C.orange));
    b.push(football(500, 420, 140, true));
    b.push(T(250, 640, 'Clair vers la lumière', { fill: C.blue, max: 24, anchor: 'middle', size: 27 }), T(640, 640, 'Foncé côté opposé', { fill: C.blue, max: 22, anchor: 'middle', size: 27 }));
    b.push(P(900, 150, 440, 540, 'Ordre des valeurs'));
    b.push(swatch(930, 230, 110, 80, '#E4E4E4', '1. Clair'), swatch(1060, 230, 110, 80, '#9E9E9E', '2. Moyen'), swatch(1190, 230, 110, 80, '#4A4A4A', '3. Foncé'));
    b.push(T(930, 430, 'Adoucir le passage entre deux gris : c’est le dégradé.', { fill: C.blue, max: 26 }));
    b.push(T(930, 570, 'Commencer léger, puis renforcer.', { fill: C.green, max: 26 }));
  } else if (stage === 'step_d') {
    b.push(P(60, 150, 800, 540, 'd. Ombre portée, nettoyage, amélioration'));
    b.push(lightIcon(170, 240));
    b.push(football(430, 390, 130, true));
    b.push(L(140, 545, 780, 545, C.grey, false, 3));
    b.push(`<ellipse cx="560" cy="552" rx="150" ry="26" fill="#8A8A8A" opacity="0.55"/>`);
    b.push(AR(520, 620, 560, 570), T(450, 665, 'Ombre du côté opposé à la lumière', { fill: C.red, max: 44, anchor: 'middle', size: 27 }));
    b.push(P(900, 150, 440, 540, 'Finitions'));
    b.push(check(925, 250, 'Ombre portée placée'), check(925, 320, 'Repères effacés'), check(925, 390, 'Dessin propre'), check(925, 460, 'Une remarque appliquée'));
    b.push(T(925, 570, 'Dire ce que j’ai amélioré.', { fill: C.green, max: 26 }));
  } else {
    b.push(P(60, 150, 800, 540, 'Pratique : une autre forme, un autre objet'));
    b.push(tri(180, 280, 200, { stroke: C.grey }));
    b.push(AR(420, 400, 520, 400));
    b.push(`<path d="M600 500 L700 300 L800 500 Z" fill="url(#ball)" stroke="#222" stroke-width="4"/><rect x="676" y="500" width="48" height="38" fill="#6E6E6E" stroke="#222" stroke-width="3"/>`);
    b.push(`<ellipse cx="780" cy="546" rx="95" ry="18" fill="#8A8A8A" opacity="0.5"/>`);
    b.push(T(280, 570, 'Triangle de départ', { fill: C.grey, max: 22, anchor: 'middle', size: 27 }));
    b.push(T(690, 600, 'Objet + gris + ombre', { fill: C.blue, max: 24, anchor: 'middle', size: 26 }));
    b.push(T(460, 655, 'Autres idées : voile, toit, sapin.', { fill: C.grey, max: 40, anchor: 'middle', size: 26 }));
    b.push(P(900, 150, 440, 540, 'Mes quatre critères'));
    d.practice.criteria.forEach((c, i) => b.push(T(925, 240 + i * 105, (i + 1) + '. ' + c, { size: 25, fill: C.blue, max: 26 })));
  }
  return b.join('');
}

const META = {
  observe: { title: 'Deux familles de formes', sub: 'Observation — arrondies et anguleuses', phrase: d.observe.phrase, color: C.blue },
  prepare: { title: 'Choisir sa forme, essayer trois gris', sub: 'Préparation — à compléter sur le brouillon', phrase: d.prep.phrase, color: C.blue },
  step_a: { title: d.steps[0].title, sub: 'Essai guidé a', phrase: d.steps[0].phrase, color: C.green },
  step_b: { title: d.steps[1].title, sub: 'Essai guidé b', phrase: d.steps[1].phrase, color: C.green },
  step_c: { title: d.steps[2].title, sub: 'Essai guidé c', phrase: d.steps[2].phrase, color: C.green },
  step_d: { title: 'Ombre portée et finitions', sub: 'Essai guidé d — nettoyage et amélioration', phrase: d.steps[3].phrase, color: C.green },
  practice: { title: d.practice.title, sub: 'Production de transfert', phrase: d.practice.consigne, color: C.red },
};

async function main() {
  const manifest = [];
  for (const [stage, m] of Object.entries(META)) {
    const svg = frame(m.title, m.sub, m.phrase, body(stage), m.color);
    const base = path.join(D, `${d.id}_${stage}`);
    fs.writeFileSync(base + '.svg', svg);
    await sharp(Buffer.from(svg)).png().toFile(base + '.png');
    const meta = await sharp(base + '.png').metadata();
    manifest.push({ id: d.id, stage, file: `${d.id}_${stage}.png`, width: meta.width, height: meta.height, title: m.title, phrase: m.phrase, generator: 'manual_assets.js (déterministe)' });
    console.log('schéma', d.id, stage, meta.width + '×' + meta.height);
  }
  fs.writeFileSync(path.join(D, 'manifest.json'), JSON.stringify({ level: 'T8', lot: 'pilote', generated: new Date().toISOString().slice(0, 10), items: manifest }, null, 2));
}
main().catch((e) => { console.error(e); process.exit(1); });
