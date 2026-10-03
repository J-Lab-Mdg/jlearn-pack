// UNITÉ 4 — GÉOMÉTRIE (PE T7) : 16 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, box, arrow, seg, circle, poly, rightAngle, PINK2, GREEN, BLUE, OCRE } = L;

const D = Math.PI / 180;
const pt = (cx, cy, r, a) => [cx + r * Math.cos(a * D), cy - r * Math.sin(a * D)];
const ray = (cx, cy, a, len, color = BLUE, wd = 3.5) => { const [x, y2] = pt(cx, cy, len, a); return seg(cx, cy, x, y2, color, wd); };
const polyArc = (cx, cy, r, a1, a2, color = PINK2, wd = 3) => {
  let p2 = '';
  for (let i = 0; i <= 28; i++) { const a = a1 + (a2 - a1) * i / 28; const [x, y2] = pt(cx, cy, r, a); p2 += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y2.toFixed(1); }
  return `<path d="${p2}" fill="none" stroke="${color}" stroke-width="${wd}"/>`;
};
const tick = (x1, y1, x2, y2, color = PINK2) => {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, n = Math.hypot(dx, dy), ux = -dy / n, uy = dx / n;
  return seg(mx - 9 * ux, my - 9 * uy, mx + 9 * ux, my + 9 * uy, color, 3.5);
};
const mid = (P, Q) => [(P[0] + Q[0]) / 2, (P[1] + Q[1]) / 2];
const dist = (P, Q) => Math.hypot(P[0] - Q[0], P[1] - Q[1]);
function circumcenter(A, B, C) {
  const ax = A[0], ay = A[1], bx = B[0], by = B[1], cx = C[0], cy = C[1];
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  const ux = ((ax * ax + ay * ay) * (by - cy) + (bx * bx + by * by) * (cy - ay) + (cx * cx + cy * cy) * (ay - by)) / d;
  const uy = ((ax * ax + ay * ay) * (cx - bx) + (bx * bx + by * by) * (ax - cx) + (cx * cx + cy * cy) * (bx - ax)) / d;
  return [ux, uy];
}
function incenter(A, B, C) {
  const a = dist(B, C), b = dist(A, C), c = dist(A, B), p = a + b + c;
  const I = [(a * A[0] + b * B[0] + c * C[0]) / p, (a * A[1] + b * B[1] + c * C[1]) / p];
  const s = p / 2, area = Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])) / 2;
  return [I, area / s];
}
function footAlt(A, B, C) { // pied de la hauteur issue de A sur (BC)
  const bx = B[0], by = B[1], dx = C[0] - bx, dy = C[1] - by;
  const t = ((A[0] - bx) * dx + (A[1] - by) * dy) / (dx * dx + dy * dy);
  return [bx + t * dx, by + t * dy];
}
const lbl = (P, t, dx2 = 0, dy2 = 0, color = '#222', size = 25) => txt(P[0] + dx2, P[1] + dy2, t, size, color, 'bold', 'middle');

const figs = {};
// S1 — trois triangles particuliers
figs.u4f1 = (() => { const { s, y } = head('Les triangles particuliers', ['Rectangle : un angle droit. Isocèle : deux côtés égaux.', 'Équilatéral : trois côtés égaux.']);
  let b = '';
  // rectangle en A
  const A = [100, y + 210], B = [100, y + 50], C = [280, y + 210];
  b += poly([A, B, C]) + rightAngle(A[0], A[1], 1, 0, 0, -1, 22) + txt(190, y + 260, 'rectangle', 24, PINK2, 'bold', 'middle');
  // isocèle
  const A2 = [470, y + 45], B2 = [380, y + 210], C2 = [560, y + 210];
  b += poly([A2, B2, C2]) + tick(A2[0], A2[1], B2[0], B2[1]) + tick(A2[0], A2[1], C2[0], C2[1]) + txt(470, y + 260, 'isocèle', 24, PINK2, 'bold', 'middle');
  // équilatéral
  const c3 = 190, A3 = [755, y + 210 - c3 * Math.sin(60 * D)], B3 = [660, y + 210], C3 = [850, y + 210];
  b += poly([A3, B3, C3]) + tick(...A3, ...B3) + tick(...A3, ...C3) + tick(...B3, ...C3) + txt(755, y + 260, 'équilatéral', 24, PINK2, 'bold', 'middle');
  return svg(1000, y + 290, s + b); })();
// S2 — propriétés (angles)
figs.u4f2 = (() => { const { s, y } = head('Les angles des triangles particuliers', ['Isocèle : angles à la base égaux. Équilatéral : trois angles de 60°.', 'La somme des angles vaut 180°.']);
  let b = '';
  const A2 = [250, y + 40], B2 = [120, y + 230], C2 = [380, y + 230];
  b += poly([A2, B2, C2]) + polyArc(B2[0], B2[1], 42, 0, 56, GREEN) + polyArc(C2[0], C2[1], 42, 124, 180, GREEN)
    + txt(185, y + 215, '70°', 22, GREEN, 'bold') + txt(290, y + 215, '70°', 22, GREEN, 'bold')
    + polyArc(A2[0], A2[1], 40, 236, 304, OCRE) + txt(250, y + 115, '40°', 22, OCRE, 'bold', 'middle')
    + txt(250, y + 280, 'isocèle : 40° + 70° + 70° = 180°', 23, '#333', 'normal', 'middle');
  const c3 = 200, B3 = [600, y + 230], C3 = [800, y + 230], A3 = [700, y + 230 - c3 * Math.sin(60 * D)];
  b += poly([A3, B3, C3]) + polyArc(B3[0], B3[1], 42, 0, 60, PINK2) + polyArc(C3[0], C3[1], 42, 120, 180, PINK2) + polyArc(A3[0], A3[1], 42, 240, 300, PINK2)
    + txt(655, y + 212, '60°', 21, PINK2, 'bold') + txt(725, y + 212, '60°', 21, PINK2, 'bold') + txt(700, y + 120, '60°', 21, PINK2, 'bold', 'middle')
    + txt(700, y + 280, 'équilatéral : 3 × 60° = 180°', 23, '#333', 'normal', 'middle');
  return svg(1000, y + 310, s + b); })();
// S3 — construction triangle rectangle
figs.u4f3 = (() => { const { s, y } = head('Construire un triangle rectangle', ['AB = 5 cm ; perpendiculaire en A avec l’équerre ; AC = 3 cm ; relier B et C.']);
  const A = [180, y + 240], B = [580, y + 240], C = [180, y + 60];
  let b = seg(A[0] - 60, A[1], B[0] + 60, B[1], '#999', 2, '7,6') + seg(A[0], A[1] + 40, C[0], C[1] - 25, '#999', 2, '7,6');
  b += poly([A, B, C], 'none', BLUE, 4) + rightAngle(A[0], A[1], 1, 0, 0, -1, 22);
  b += lbl(A, 'A', -24, 28) + lbl(B, 'B', 24, 28) + lbl(C, 'C', -24, -8);
  b += txt(380, y + 280, 'AB = 5 cm', 23, '#333', 'normal', 'middle') + txt(105, y + 150, 'AC = 3 cm', 22, '#333', 'normal', 'middle');
  b += box(660, y + 70, 290, 150, '', '#E8F5E9', GREEN) + txt(805, y + 115, '① segment AB', 22, '#333', 'normal', 'middle')
    + txt(805, y + 150, '② perpendiculaire en A', 22, '#333', 'normal', 'middle') + txt(805, y + 185, '③ AC puis relier', 22, '#333', 'normal', 'middle');
  return svg(1000, y + 320, s + b); })();
// S4 — construction isocèle au compas
figs.u4f4 = (() => { const { s, y } = head('Construire un triangle isocèle', ['BC = 4 cm ; deux arcs de même rayon 5 cm depuis B et C ;', 'leur croisement donne le sommet A.']);
  const B = [280, y + 260], C = [560, y + 260], r = 300;
  const d2 = dist(B, C) / 2, h = Math.sqrt(r * r - d2 * d2), A = [(B[0] + C[0]) / 2, B[1] - h];
  let b = circle(B[0], B[1], r, '#BBB', 'none', 2) + circle(C[0], C[1], r, '#BBB', 'none', 2);
  b = `<circle cx="${B[0]}" cy="${B[1]}" r="${r}" fill="none" stroke="#B9B9B9" stroke-width="2" stroke-dasharray="8,7"/>`
    + `<circle cx="${C[0]}" cy="${C[1]}" r="${r}" fill="none" stroke="#B9B9B9" stroke-width="2" stroke-dasharray="8,7"/>`;
  b += poly([A, B, C], 'none', BLUE, 4) + tick(...A, ...B) + tick(...A, ...C);
  b += lbl(B, 'B', -24, 28) + lbl(C, 'C', 24, 28) + lbl(A, 'A', 0, -16);
  b += txt(830, y + 150, 'arcs de rayon 5 cm', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 330, s + b); })();
// S5 — construction équilatérale
figs.u4f5 = (() => { const { s, y } = head('Construire un triangle équilatéral', ['Côté AB = 4 cm ; deux arcs de rayon AB depuis A et B se croisent en C.']);
  const A = [320, y + 270], B = [600, y + 270], r = dist([320, 0], [600, 0]);
  const C = [(A[0] + B[0]) / 2, A[1] - r * Math.sin(60 * D)];
  let b = `<circle cx="${A[0]}" cy="${A[1]}" r="${r}" fill="none" stroke="#B9B9B9" stroke-width="2" stroke-dasharray="8,7"/>`
    + `<circle cx="${B[0]}" cy="${B[1]}" r="${r}" fill="none" stroke="#B9B9B9" stroke-width="2" stroke-dasharray="8,7"/>`;
  b += poly([A, B, C], 'none', BLUE, 4) + tick(...A, ...B) + tick(...A, ...C) + tick(...B, ...C);
  b += lbl(A, 'A', -24, 28) + lbl(B, 'B', 24, 28) + lbl(C, 'C', 0, -16);
  b += txt(835, y + 160, 'compas ouvert à 4 cm', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 340, s + b); })();
// S6 — droite graduée, déplacements
figs.u4f6 = (() => { const { s, y } = head('Se repérer sur une droite graduée', ['A(−2,5) ; en avançant de 4 unités, on arrive en B(+1,5).']);
  const lab = ['−4', '−3', '−2', '−1', '0', '+1', '+2', '+3', '+4'];
  const pos = v => 80 + (v + 4) * 105;
  let b = nline(80, y + 90, 840, 8, lab);
  b += dot(pos(-2.5), y + 90) + txt(pos(-2.5), y + 58, 'A(−2,5)', 24, PINK2, 'bold', 'middle');
  b += dot(pos(1.5), y + 90, 9, GREEN) + txt(pos(1.5), y + 58, 'B(+1,5)', 24, GREEN, 'bold', 'middle');
  b += arrow(pos(-2.5), y + 20, pos(1.5), y + 20, OCRE) + txt(pos(-0.5), y + 5, '+4', 24, OCRE, 'bold', 'middle');
  return svg(1000, y + 165, s + b); })();
// S7 — quadrants
figs.u4f7 = (() => { const { s, y } = head('Le repère orthogonal et ses quadrants', ['Axe horizontal : abscisses. Axe vertical : ordonnées.', 'Quatre quadrants autour de l’origine O.']);
  const ox = 500, oy = y + 230, u = 42, ext = 170;
  let b = `<rect x="${ox}" y="${oy - ext}" width="${ext}" height="${ext}" fill="#E8F5E9"/>`
    + `<rect x="${ox - ext}" y="${oy - ext}" width="${ext}" height="${ext}" fill="#E3F2FD"/>`
    + `<rect x="${ox - ext}" y="${oy}" width="${ext}" height="${ext}" fill="#FDE7EF"/>`
    + `<rect x="${ox}" y="${oy}" width="${ext}" height="${ext}" fill="#FFF3E0"/>`;
  for (let i = -4; i <= 4; i++) { if (i) { b += seg(ox + i * u, oy - 7, ox + i * u, oy + 7, BLUE, 2.5) + seg(ox - 7, oy + i * u, ox + 7, oy + i * u, BLUE, 2.5); } }
  b += arrow(ox - ext - 30, oy, ox + ext + 30, oy, BLUE) + arrow(ox, oy + ext + 30, ox, oy - ext - 30, BLUE);
  b += txt(ox + ext + 40, oy + 8, 'x', 26, BLUE, 'bold') + txt(ox - 14, oy - ext - 38, 'y', 26, BLUE, 'bold') + txt(ox - 22, oy + 26, 'O', 24, '#222', 'bold');
  b += txt(ox + ext / 2, oy - ext / 2, 'I (+ ; +)', 24, GREEN, 'bold', 'middle') + txt(ox - ext / 2, oy - ext / 2, 'II (− ; +)', 24, '#1565C0', 'bold', 'middle')
    + txt(ox - ext / 2, oy + ext / 2 + 8, 'III (− ; −)', 24, PINK2, 'bold', 'middle') + txt(ox + ext / 2, oy + ext / 2 + 8, 'IV (+ ; −)', 24, OCRE, 'bold', 'middle');
  return svg(1000, y + 460, s + b); })();
// S8 — points dans le repère
figs.u4f8 = (() => { const { s, y } = head('Placer et lire des points', ['A(2 ; 3), B(−1 ; 2), C(−2 ; −3), D(3 ; −1) : abscisse d’abord, ordonnée ensuite.']);
  const ox = 500, oy = y + 250, u = 52, ext = 215;
  let b = '';
  for (let i = -4; i <= 4; i++) { b += seg(ox + i * u, oy - ext, ox + i * u, oy + ext, '#DDD', 1.5) + seg(ox - ext, oy + i * u, ox + ext, oy + i * u, '#DDD', 1.5); }
  b += arrow(ox - ext - 25, oy, ox + ext + 25, oy, BLUE) + arrow(ox, oy + ext + 25, ox, oy - ext - 25, BLUE);
  for (let i = -4; i <= 4; i++) if (i) { b += txt(ox + i * u, oy + 28, `${i}`, 18, '#555', 'normal', 'middle') + txt(ox - 24, oy - i * u + 7, `${i}`, 18, '#555', 'normal', 'middle'); }
  b += txt(ox - 20, oy + 26, 'O', 20, '#222', 'bold');
  const P = { A: [2, 3, GREEN], B: [-1, 2, '#1565C0'], C: [-2, -3, PINK2], D: [3, -1, OCRE] };
  b += seg(ox + 2 * u, oy, ox + 2 * u, oy - 3 * u, GREEN, 2, '6,5') + seg(ox, oy - 3 * u, ox + 2 * u, oy - 3 * u, GREEN, 2, '6,5');
  for (const [n, [px, py, color]] of Object.entries(P)) {
    b += dot(ox + px * u, oy - py * u, 8, color) + txt(ox + px * u + 26, oy - py * u - 12, n, 24, color, 'bold', 'middle');
  }
  return svg(1000, y + 510, s + b); })();
// S9 — éventail des angles
figs.u4f9 = (() => { const { s, y } = head('Les familles d’angles', ['Du plus fermé au plus ouvert : nul, aigu, droit, obtus, plat, rentrant, plein.']);
  const defs = [['nul (0°)', 0, 0], ['aigu', 0, 50], ['droit (90°)', 0, 90], ['obtus', 0, 135], ['plat (180°)', 0, 180], ['rentrant', 0, 250], ['plein (360°)', 0, 359.9]];
  let b = '';
  defs.forEach((d3, i) => {
    const cx = 170 + (i % 4) * 230, cy = y + 90 + Math.floor(i / 4) * 210;
    b += ray(cx, cy, d3[1], 80, BLUE, 3.5);
    if (d3[2] > 0.5) b += ray(cx, cy, d3[2], 80, BLUE, 3.5);
    if (d3[2] > 0.5) b += polyArc(cx, cy, 34, d3[1], d3[2], PINK2, 3);
    else b += polyArc(cx, cy, 34, -8, 8, PINK2, 3);
    if (d3[0] === 'droit (90°)') b += rightAngle(cx, cy, 1, 0, 0, -1, 20);
    b += txt(cx, cy + 68, d3[0], 22, '#333', 'normal', 'middle');
  });
  return svg(1000, y + 460, s + b); })();
// S10 — complémentaires / supplémentaires
figs.u4f10 = (() => { const { s, y } = head('Angles complémentaires et supplémentaires', ['35° + 55° = 90° : complémentaires. 110° + 70° = 180° : supplémentaires.']);
  const c1 = [230, y + 240];
  let b = ray(...c1, 0, 200) + ray(...c1, 90, 200) + ray(...c1, 35, 200, GREEN, 3)
    + polyArc(...c1, 52, 0, 35, PINK2) + polyArc(...c1, 72, 35, 90, GREEN)
    + txt(c1[0] + 95, c1[1] - 28, '35°', 22, PINK2, 'bold') + txt(c1[0] + 38, c1[1] - 95, '55°', 22, GREEN, 'bold')
    + rightAngle(c1[0], c1[1], 1, 0, 0, -1, 18)
    + txt(c1[0], y + 290, '35° + 55° = 90°', 24, '#333', 'normal', 'middle');
  const c2 = [700, y + 240];
  b += seg(c2[0] - 220, c2[1], c2[0] + 220, c2[1], BLUE, 3.5) + ray(...c2, 110, 200, GREEN, 3)
    + polyArc(...c2, 52, 0, 110, PINK2) + polyArc(...c2, 72, 110, 180, GREEN)
    + txt(c2[0] + 70, c2[1] - 60, '110°', 22, PINK2, 'bold') + txt(c2[0] - 95, c2[1] - 42, '70°', 22, GREEN, 'bold')
    + txt(c2[0], y + 290, '110° + 70° = 180°', 24, '#333', 'normal', 'middle');
  return svg(1000, y + 320, s + b); })();
// S11 — opposés par le sommet
figs.u4f11 = (() => { const { s, y } = head('Angles opposés par le sommet', ['Deux droites sécantes forment deux paires d’angles opposés, égaux deux à deux.']);
  const c = [500, y + 170];
  let b = seg(...pt(...c, 240, 25), ...pt(...c, 240, 205), BLUE, 3.5) + seg(...pt(...c, 240, 155), ...pt(...c, 240, 335), BLUE, 3.5);
  b += polyArc(...c, 46, 25, 155, PINK2) + polyArc(...c, 46, 205, 335, PINK2)
    + polyArc(...c, 60, 155, 205, GREEN) + polyArc(...c, 60, 335, 385, GREEN);
  b += txt(c[0], c[1] - 80, '130°', 23, PINK2, 'bold', 'middle') + txt(c[0], c[1] + 95, '130°', 23, PINK2, 'bold', 'middle')
    + txt(c[0] - 105, c[1] + 10, '50°', 23, GREEN, 'bold', 'middle') + txt(c[0] + 105, c[1] + 10, '50°', 23, GREEN, 'bold', 'middle');
  return svg(1000, y + 350, s + b); })();
// S12 — parallèles et sécante
figs.u4f12 = (() => { const { s, y } = head('Angles et droites parallèles', ['Avec deux parallèles, les angles alternes-internes sont égaux (60°),', 'les angles correspondants aussi.']);
  const y1 = y + 110, y2 = y + 260, a = 60;
  const i1 = [400, y1], i2 = [400 + 150 / Math.tan(a * D), y2];
  let b = seg(120, y1, 880, y1, BLUE, 3.5) + seg(120, y2, 880, y2, BLUE, 3.5);
  const dirx = Math.cos(-a * D), diry = -Math.sin(-a * D);
  b += seg(i1[0] - 130 * dirx, i1[1] - 130 * diry, i2[0] + 60 * dirx, i2[1] + 60 * diry, OCRE, 3.5);
  b += polyArc(...i1, 44, 180 + a, 180, PINK2) + txt(i1[0] - 72, i1[1] + 42, '60°', 22, PINK2, 'bold');
  b += polyArc(...i2, 44, 0, a, PINK2) + txt(i2[0] + 72, i2[1] - 30, '60°', 22, PINK2, 'bold');
  b += polyArc(...i1, 44, 0, a, GREEN) + txt(i1[0] + 72, i1[1] - 30, '60°', 22, GREEN, 'bold');
  b += txt(500, y + 345, 'alternes-internes en rose ; correspondants : un rose et un vert du même côté', 21, '#333', 'normal', 'middle');
  return svg(1000, y + 375, s + b); })();
// S13 — polygones et angles
figs.u4f13 = (() => { const { s, y } = head('Reconnaître les polygones par leurs angles', ['Carré : 4 angles droits. Triangle équilatéral : 3 × 60°.', 'Hexagone régulier : 6 × 120°.']);
  let b = '';
  const a0 = 170; // carré
  b += `<rect x="90" y="${y + 60}" width="${a0}" height="${a0}" fill="white" stroke="${BLUE}" stroke-width="3.5"/>`
    + rightAngle(90, y + 60 + a0, 1, 0, 0, -1, 18) + rightAngle(90 + a0, y + 60 + a0, -1, 0, 0, -1, 18)
    + rightAngle(90, y + 60, 1, 0, 0, 1, 18) + rightAngle(90 + a0, y + 60, -1, 0, 0, 1, 18)
    + txt(175, y + 285, 'carré : 4 × 90°', 22, '#333', 'normal', 'middle');
  const B3 = [400, y + 230], C3 = [590, y + 230], A3 = [495, y + 230 - 190 * Math.sin(60 * D)];
  b += poly([A3, B3, C3]) + polyArc(...B3, 36, 0, 60, PINK2) + polyArc(...C3, 36, 120, 180, PINK2) + polyArc(...A3, 36, 240, 300, PINK2)
    + txt(495, y + 285, 'équilatéral : 3 × 60°', 22, '#333', 'normal', 'middle');
  const hc = [790, y + 150], hr = 100; const hex = [];
  for (let k = 0; k < 6; k++) hex.push(pt(...hc, hr, 30 + k * 60));
  b += poly(hex) ;
    b += txt(790, y + 285, 'hexagone régulier : 6 × 120°', 22, '#333', 'normal', 'middle');
  return svg(1000, y + 320, s + b); })();
// S14 — médiatrices et cercle circonscrit
figs.u4f14 = (() => { const { s, y } = head('Médiatrices et cercle circonscrit', ['Les trois médiatrices se coupent en O, centre du cercle passant par A, B et C.']);
  const A = [430, y + 40], B = [220, y + 330], C = [720, y + 290];
  const O = circumcenter(A, B, C), R = dist(O, A);
  let b = circle(O[0], O[1], R, PINK2, 'none', 3);
  b += poly([A, B, C], 'none', BLUE, 4);
  [[A, B], [B, C], [A, C]].forEach(([P, Q]) => {
    const M = mid(P, Q), dx = Q[0] - P[0], dy = Q[1] - P[1], n = Math.hypot(dx, dy), ux = -dy / n, uy = dx / n;
    b += seg(M[0] - 150 * ux, M[1] - 150 * uy, M[0] + 150 * ux, M[1] + 150 * uy, GREEN, 2.5, '8,6');
    b += dot(M[0], M[1], 5, GREEN);
  });
  b += dot(O[0], O[1], 8, OCRE) + lbl(O, 'O', 24, -10, OCRE);
  b += lbl(A, 'A', 0, -14) + lbl(B, 'B', -22, 20) + lbl(C, 'C', 26, 14);
  b += txt(850, y + 80, 'médiatrices', 22, GREEN, 'bold', 'middle') + txt(850, y + 112, 'en pointillés', 20, GREEN, 'normal', 'middle');
  return svg(1000, y + 430, s + b); })();
// S15 — médianes et hauteurs
figs.u4f15 = (() => { const { s, y } = head('Médianes et hauteurs du triangle', ['À gauche : les médianes et le centre de gravité G.', 'À droite : les hauteurs et l’orthocentre H.']);
  let b = '';
  const A = [250, y + 50], B = [100, y + 320], C = [420, y + 300];
  const G = [(A[0] + B[0] + C[0]) / 3, (A[1] + B[1] + C[1]) / 3];
  b += poly([A, B, C], 'none', BLUE, 4);
  [[A, mid(B, C)], [B, mid(A, C)], [C, mid(A, B)]].forEach(([P, M]) => { b += seg(P[0], P[1], M[0], M[1], GREEN, 2.5) + dot(M[0], M[1], 5, GREEN); });
  b += dot(G[0], G[1], 8, OCRE) + lbl(G, 'G', 22, 24, OCRE) + lbl(A, 'A', 0, -14) + lbl(B, 'B', -22, 20) + lbl(C, 'C', 24, 18);
  b += txt(260, y + 370, 'médianes → centre de gravité G', 22, GREEN, 'bold', 'middle');
  const A2 = [740, y + 60], B2 = [580, y + 320], C2 = [930, y + 300];
  b += poly([A2, B2, C2], 'none', BLUE, 4);
  const feet = [[A2, footAlt(A2, B2, C2)], [B2, footAlt(B2, A2, C2)], [C2, footAlt(C2, A2, B2)]];
  feet.forEach(([P, F]) => { b += seg(P[0], P[1], F[0], F[1], PINK2, 2.5, '8,6'); });
  // orthocentre = intersection : calcul via somme vectorielle (H = A + B + C − 2O)
  const O2 = circumcenter(A2, B2, C2), H = [A2[0] + B2[0] + C2[0] - 2 * O2[0], A2[1] + B2[1] + C2[1] - 2 * O2[1]];
  b += dot(H[0], H[1], 8, OCRE) + lbl(H, 'H', 24, -8, OCRE) + lbl(A2, 'A', 0, -14) + lbl(B2, 'B', -22, 20) + lbl(C2, 'C', 24, 18);
  b += txt(760, y + 370, 'hauteurs → orthocentre H', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 410, s + b); })();
// S16 — bissectrices et cercle inscrit
figs.u4f16 = (() => { const { s, y } = head('Bissectrices et cercle inscrit', ['Les trois bissectrices se coupent en I, centre du cercle tangent aux trois côtés.']);
  const A = [460, y + 40], B = [190, y + 350], C = [790, y + 330];
  const [I, r] = incenter(A, B, C);
  let b = poly([A, B, C], 'none', BLUE, 4) + circle(I[0], I[1], r, PINK2, '#FDE7EF', 3);
  [A, B, C].forEach(P => { b += seg(P[0], P[1], I[0], I[1], GREEN, 2.5, '8,6'); });
  b += dot(I[0], I[1], 8, OCRE) + lbl(I, 'I', 24, -8, OCRE) + lbl(A, 'A', 0, -14) + lbl(B, 'B', -22, 20) + lbl(C, 'C', 26, 14);
  b += txt(880, y + 100, 'bissectrices', 22, GREEN, 'bold', 'middle') + txt(880, y + 132, 'en pointillés', 20, GREEN, 'normal', 'middle');
  return svg(1000, y + 440, s + b); })();

const S = [
  {
    t: 'Reconnaître les triangles particuliers', comp: 'Géométrie', theme: 'Illustration d’un triangle rectangle, isocèle, équilatéral',
    goal: 'reconnaître un triangle rectangle, un triangle isocèle et un triangle équilatéral',
    mat: 'Tableau, cahier, ardoises, géoplan, patrons en carton, règle graduée',
    revQ: 'Calcule E = 2x + 3 pour x = 4.',
    revRA: 'E = 2 × 4 + 3 = 11.',
    situation: 'Sur le géoplan, trois élastiques dessinent trois triangles : l’un a un coin d’équerre, l’autre deux côtés jumeaux, le dernier trois côtés identiques. Trois familles à nommer !',
    def: 'Un triangle rectangle possède un angle droit ; un triangle isocèle possède deux côtés de même longueur ; un triangle équilatéral possède trois côtés de même longueur.',
    autrement: 'rectangle = un coin d’équerre ; isocèle = deux côtés jumeaux ; équilatéral = trois côtés jumeaux.',
    concept: 'On classe les triangles d’après leurs côtés ou leurs angles. Sur une figure, des petits traits identiques marquent les côtés égaux, un petit carré marque l’angle droit. Un triangle équilatéral est aussi isocèle (il a bien deux côtés égaux !) ; un triangle peut cumuler deux qualités : rectangle isocèle, comme la moitié d’un carré coupé par sa diagonale.',
    synthese: 'les marques de la figure parlent : un carré pour l’angle droit, des traits identiques pour les côtés égaux — elles nomment le triangle.',
    method: ['Chercher un angle droit (petit carré ou vérification à l’équerre).', 'Comparer les longueurs des côtés (règle ou compas).', 'Nommer : rectangle (1 angle droit), isocèle (2 côtés égaux), équilatéral (3 côtés égaux).'],
    exemple: 'Côtés 5 cm, 5 cm, 5 cm : équilatéral. Côtés 6 cm, 6 cm, 4 cm : isocèle. Un angle droit entre deux côtés de 3 cm et 4 cm : rectangle.',
    erreur: 'Croire qu’un triangle isocèle doit être « debout, pointe en haut » : l’orientation ne compte pas, seules les longueurs et les angles comptent.',
    saistu: 'Les pignons des trano gasy des Hautes Terres dessinent des triangles isocèles parfaits : les deux pentes égales du toit évacuent la pluie de chaque côté à la même vitesse !',
    exos: ['Nomme le triangle : a) côtés 7, 7 et 7 cm ; b) côtés 8, 5 et 5 cm ; d) un angle de 90° ; e) côtés 3, 4 et 5 cm avec un angle droit.',
      'Vrai ou faux ? a) Tout triangle équilatéral est isocèle ; b) tout triangle isocèle est équilatéral ; d) un triangle peut être rectangle et isocèle ; e) un triangle équilatéral peut avoir un angle droit.',
      'Sur une figure, que signifie : a) un petit carré à un sommet ; b) deux côtés portant le même trait ; d) trois côtés portant le même trait ; e) aucune marque ?'],
    corr: ['a) Équilatéral ; b) isocèle ; d) rectangle ; e) rectangle (et scalène).',
      'a) Vrai ; b) faux ; d) vrai (demi-carré) ; e) faux : ses trois angles font 60°.',
      'a) Un angle droit ; b) deux côtés égaux ; d) trois côtés égaux ; e) un triangle quelconque.'],
    fig: 'u4f1'
  },
  {
    t: 'Étudier les propriétés des triangles particuliers', comp: 'Géométrie', theme: 'Propriétés des triangles particuliers',
    goal: 'utiliser les propriétés des angles des triangles particuliers',
    mat: 'Tableau, cahier, ardoises, rapporteur, patrons en carton',
    revQ: 'Un triangle a deux côtés de 9 cm et un côté de 5 cm : comment s’appelle-t-il ?',
    revRA: 'C’est un triangle isocèle : deux côtés de même longueur.',
    situation: 'Mino découpe un triangle en papier, arrache les trois coins et les recolle côte à côte : ils forment exactement un angle plat ! La somme des angles d’un triangle vaut donc 180°.',
    def: 'Dans tout triangle, la somme des angles vaut 180°. Dans un triangle isocèle, les deux angles à la base sont égaux ; dans un triangle équilatéral, les trois angles mesurent 60° ; dans un triangle rectangle, les deux angles aigus sont complémentaires.',
    autrement: 'les trois coins de n’importe quel triangle, mis bout à bout, remplissent toujours un demi-tour.',
    concept: 'Ces propriétés permettent de calculer sans mesurer : dans un triangle isocèle dont l’angle au sommet vaut 40°, les deux angles de la base valent (180° − 40°) ÷ 2 = 70° chacun. Dans un triangle rectangle, les deux angles aigus totalisent 180° − 90° = 90°. Et 180° ÷ 3 = 60° pour l’équilatéral.',
    synthese: 'la somme des angles d’un triangle vaut 180°, et les égalités d’angles des triangles particuliers permettent de calculer les angles manquants.',
    method: ['Écrire la somme des angles : 180°.', 'Utiliser la propriété du triangle (angles égaux, angle droit).', 'Poser l’opération pour trouver l’angle manquant, puis vérifier que le total fait 180°.'],
    exemple: 'Isocèle avec angle au sommet de 40° : chaque angle de base vaut (180 − 40) ÷ 2 = 70°. Rectangle avec un angle de 30° : l’autre angle aigu vaut 60°.',
    erreur: 'Diviser 180° par 2 en oubliant l’angle au sommet : les angles de base d’un isocèle valent (180° − sommet) ÷ 2, pas 90°.',
    saistu: 'Sur une sphère, la règle des 180° se brise : un triangle tracé sur la Terre entre le pôle Nord et deux points de l’équateur peut avoir trois angles droits, soit 270° !',
    exos: ['Calcule l’angle manquant du triangle : a) 60° et 70° ; b) 90° et 35° ; d) 45° et 45° ; e) 100° et 25°.',
      'Triangle isocèle : l’angle au sommet vaut a) 20° ; b) 80° ; d) 100° ; e) 36°. Calcule chaque angle de base.',
      'Triangle rectangle : un angle aigu vaut a) 25° ; b) 48° ; d) 72° ; e) 45°. Calcule l’autre angle aigu et nomme le triangle du cas e).'],
    corr: ['a) 50° ; b) 55° ; d) 90° ; e) 55°.',
      'a) 80° ; b) 50° ; d) 40° ; e) 72°.',
      'a) 65° ; b) 42° ; d) 18° ; e) 45° : c’est un triangle rectangle isocèle.'],
    fig: 'u4f2'
  },
  {
    t: 'Construire un triangle rectangle', comp: 'Géométrie', theme: 'Construction d’un triangle rectangle',
    goal: 'construire un triangle rectangle avec la règle et l’équerre',
    mat: 'Tableau, cahier, règle graduée, équerre, crayon bien taillé',
    revQ: 'Dans un triangle rectangle, un angle aigu vaut 35°. Que vaut l’autre ?',
    revRA: '90° − 35° = 55° : les deux angles aigus sont complémentaires.',
    situation: 'Le menuisier doit découper une pièce triangulaire avec un angle parfaitement droit pour le coin d’une étagère. Règle et équerre suffisent — à condition de suivre l’ordre des gestes.',
    def: 'Pour construire un triangle rectangle, on trace un côté, puis la perpendiculaire à ce côté en l’une de ses extrémités à l’aide de l’équerre, et l’on reporte la longueur du deuxième côté sur cette perpendiculaire.',
    autrement: 'l’équerre fabrique le coin droit ; la règle mesure les deux côtés qui l’encadrent ; le troisième côté se trace tout seul en reliant.',
    concept: 'Construction de ABC rectangle en A avec AB = 5 cm et AC = 3 cm : ① tracer le segment AB de 5 cm ; ② poser l’équerre en A et tracer la perpendiculaire à (AB) ; ③ reporter 3 cm sur cette perpendiculaire pour placer C ; ④ relier B et C. Le petit carré en A signale l’angle droit sur la figure terminée.',
    synthese: 'on construit le triangle rectangle en traçant d’abord l’angle droit avec l’équerre, puis en reportant les longueurs des deux côtés perpendiculaires.',
    method: ['Tracer le premier côté à la règle graduée.', 'Tracer la perpendiculaire à ce côté en l’extrémité choisie, avec l’équerre.', 'Reporter la longueur du deuxième côté, placer le sommet et relier.'],
    exemple: 'ABC rectangle en A : AB = 5 cm, AC = 3 cm. On vérifie l’angle droit en reposant l’équerre en A.',
    erreur: 'Placer l’angle droit au mauvais sommet : « rectangle en A » signifie que l’angle droit est exactement au point A, pas ailleurs.',
    saistu: 'Les bâtisseurs de l’Égypte ancienne n’avaient pas d’équerre géante : ils tendaient une corde à 13 nœuds en triangle de côtés 3, 4 et 5 — l’angle opposé au côté 5 est toujours parfaitement droit !',
    exos: ['Construis le triangle rectangle en A : a) AB = 4 cm et AC = 3 cm ; b) AB = 6 cm et AC = 4,5 cm ; d) AB = 5 cm et AC = 5 cm ; e) nomme le triangle du cas d).',
      'Décris dans l’ordre les étapes pour construire un triangle MNP rectangle en M avec MN = 7 cm et MP = 2,5 cm : a) première étape ; b) deuxième ; d) troisième ; e) vérification.',
      'Un triangle a pour côtés 3 cm, 4 cm et 5 cm. a) Construis-le au compas ; b) vérifie l’angle entre les côtés 3 et 4 avec l’équerre ; d) que constates-tu ? e) comment s’appelle ce triangle ?'],
    corr: ['a) b) d) Constructions conformes (angle droit en A, longueurs exactes à 1 mm près) ; e) rectangle isocèle.',
      'a) Tracer MN = 7 cm ; b) tracer la perpendiculaire à (MN) en M ; d) reporter MP = 2,5 cm et relier N à P ; e) contrôler l’angle droit avec l’équerre.',
      'a) Construction au compas ; b) l’équerre s’ajuste parfaitement ; d) l’angle est droit ; e) triangle rectangle (triangle 3-4-5).'],
    fig: 'u4f3'
  },
  {
    t: 'Construire un triangle isocèle', comp: 'Géométrie', theme: 'Construction d’un triangle isocèle',
    goal: 'construire un triangle isocèle au compas et à la règle',
    mat: 'Tableau, cahier, règle graduée, compas, patrons en carton',
    revQ: 'Quelles sont les trois étapes de la construction d’un triangle rectangle en A ?',
    revRA: 'Tracer un côté, tracer la perpendiculaire en A à l’équerre, reporter l’autre longueur et relier.',
    situation: 'Pour découper un pignon de toit isocèle, le charpentier doit placer le sommet exactement à la même distance des deux coins de la base. Le compas est l’outil parfait pour cela.',
    def: 'Pour construire un triangle isocèle de base donnée, on trace deux arcs de cercle de même rayon centrés aux extrémités de la base : leur point d’intersection est le sommet du triangle.',
    autrement: 'le compas garde la même ouverture : tout point de l’arc est à la même distance du centre, donc le croisement des deux arcs est à égale distance des deux bouts.',
    concept: 'Construction de ABC isocèle avec BC = 4 cm et AB = AC = 5 cm : ① tracer BC = 4 cm ; ② ouvrir le compas à 5 cm ; ③ tracer un arc centré en B puis un arc centré en C sans changer l’ouverture ; ④ nommer A leur intersection et relier. Les deux traits identiques sur AB et AC rappellent l’égalité.',
    synthese: 'deux arcs de même rayon tracés depuis les extrémités de la base se croisent au sommet : le compas garantit l’égalité des deux côtés.',
    method: ['Tracer la base à la règle graduée.', 'Ouvrir le compas au rayon des côtés égaux, sans plus le modifier.', 'Tracer les deux arcs depuis chaque extrémité, marquer leur intersection et relier.'],
    exemple: 'BC = 4 cm, AB = AC = 5 cm : les arcs de rayon 5 cm centrés en B et C se coupent en A.',
    erreur: 'Modifier l’ouverture du compas entre les deux arcs : les côtés ne seraient plus égaux et le triangle ne serait plus isocèle.',
    saistu: 'Le compas est l’un des plus vieux instruments du monde : on en a retrouvé en bronze dans les ruines de Pompéi, vieux de 2 000 ans — déjà avec deux pointes et la même ouverture fidèle !',
    exos: ['Construis le triangle isocèle : a) base 5 cm, côtés 6 cm ; b) base 3 cm, côtés 7 cm ; d) base 6 cm, côtés 5 cm ; e) base 4 cm, côtés 4 cm — que remarques-tu ?',
      'Pour un triangle isocèle de base 6 cm et de côtés 8 cm : a) quelle ouverture donner au compas ? b) où piquer la pointe ? d) combien d’arcs tracer ? e) comment marquer les côtés égaux sur la figure ?',
      'Un triangle a pour sommets les points B et C distants de 5 cm et un point A tel que AB = AC = 6,5 cm. a) Construis la figure ; b) mesure l’angle au sommet au rapporteur ; d) les angles à la base sont-ils égaux ? e) justifie.'],
    corr: ['a) b) d) Constructions exactes ; e) base 4 et côtés 4 : le triangle est équilatéral.',
      'a) 8 cm ; b) en B puis en C ; d) deux arcs ; e) un même petit trait sur chacun des deux côtés égaux.',
      'a) Construction au compas ; b) environ 45° ; d) oui ; e) propriété du triangle isocèle : les angles à la base sont égaux.'],
    fig: 'u4f4'
  },
  {
    t: 'Construire un triangle équilatéral', comp: 'Géométrie', theme: 'Construction d’un triangle équilatéral',
    goal: 'construire un triangle équilatéral au compas et à la règle',
    mat: 'Tableau, cahier, règle graduée, compas',
    revQ: 'Pourquoi ne faut-il pas changer l’ouverture du compas entre les deux arcs d’un triangle isocèle ?',
    revRA: 'Parce que l’ouverture du compas est la longueur des côtés égaux : la changer casserait l’égalité.',
    situation: 'Pour dessiner une étoile parfaite sur un lamba, la brodeuse commence par un triangle dont les trois côtés sont rigoureusement identiques. Un seul réglage de compas suffit !',
    def: 'Pour construire un triangle équilatéral de côté donné, on trace le côté, puis deux arcs de cercle de rayon égal à ce côté, centrés en ses deux extrémités : leur intersection est le troisième sommet.',
    autrement: 'c’est la construction de l’isocèle, avec l’ouverture du compas réglée exactement sur la longueur du côté déjà tracé.',
    concept: 'Construction de ABC équilatéral de côté 4 cm : ① tracer AB = 4 cm ; ② ouvrir le compas à 4 cm exactement (la longueur AB) ; ③ arc centré en A, arc centré en B ; ④ l’intersection C complète le triangle. Les trois angles mesurent automatiquement 60° : nul besoin de rapporteur !',
    synthese: 'un seul réglage de compas — la longueur du côté — suffit : les deux arcs donnent le troisième sommet et les trois angles de 60° viennent tout seuls.',
    method: ['Tracer un côté à la règle graduée.', 'Ouvrir le compas exactement à la longueur de ce côté.', 'Tracer les deux arcs depuis les extrémités et relier l’intersection aux deux bouts.'],
    exemple: 'AB = 4 cm, compas ouvert à 4 cm : les arcs centrés en A et B se coupent en C ; ABC est équilatéral et ses angles font 60°.',
    erreur: 'Mesurer l’ouverture du compas « à peu près » : la moindre différence fausse les trois côtés. Pique la pointe en A et ajuste la mine exactement sur B.',
    saistu: 'En reportant six fois le rayon sur un cercle, on dessine un hexagone parfait et une rosace à six pétales : la fleur géométrique préférée des artisans, née du triangle équilatéral !',
    exos: ['Construis le triangle équilatéral de côté : a) 4 cm ; b) 5,5 cm ; d) 7 cm ; e) 3,2 cm.',
      'Après la construction d’un triangle équilatéral de côté 6 cm : a) que vaut chaque angle ? b) le triangle est-il isocèle ? d) combien d’axes de symétrie possède-t-il ? e) quelles marques porter sur la figure ?',
      'Avec le compas ouvert à 3 cm, reporte six arcs sur un cercle de rayon 3 cm. a) Combien de points obtiens-tu ? b) relie-les : quelle figure apparaît ? d) relie un point sur deux : quelle figure ? e) que valent les côtés de cette dernière ?'],
    corr: ['a) b) d) e) Constructions exactes au compas (côtés égaux à 1 mm près).',
      'a) 60° ; b) oui, tout équilatéral est isocèle ; d) trois axes ; e) le même petit trait sur les trois côtés.',
      'a) Six points ; b) un hexagone régulier ; d) un triangle équilatéral ; e) tous égaux (environ 5,2 cm).'],
    fig: 'u4f5'
  },
  {
    t: 'Se repérer sur une droite graduée', comp: 'Géométrie', theme: 'Repérage sur une droite graduée',
    goal: 'lire une abscisse et effectuer un déplacement sur une droite graduée',
    mat: 'Tableau, cahier, ardoises, droite graduée, papier quadrillé',
    revQ: 'Que valent les angles d’un triangle équilatéral ?',
    revRA: '60° chacun : 180° ÷ 3 = 60°.',
    situation: 'Sur la route nationale, les bornes kilométriques se suivent comme une droite graduée. Partie de la borne « −2,5 » d’un jeu de piste, l’équipe avance de 4 km : à quelle borne arrive-t-elle ?',
    def: 'Sur une droite graduée, chaque point est repéré par un nombre relatif appelé abscisse. Se déplacer vers la droite ajoute le déplacement à l’abscisse ; se déplacer vers la gauche le soustrait.',
    autrement: 'l’abscisse est l’« adresse » du point ; un déplacement est une addition : partir de −2,5 et avancer de 4 donne −2,5 + 4 = +1,5.',
    concept: 'Le point A d’abscisse −2,5 se note A(−2,5). Un déplacement de +4 conduit en B(+1,5), car −2,5 + 4 = 1,5 : le calcul sur les relatifs remplace le comptage des graduations. La distance entre deux points s’obtient en soustrayant la plus petite abscisse de la plus grande : de A(−2,5) à B(+1,5), la distance vaut 1,5 − (−2,5) = 4.',
    synthese: 'l’abscisse repère le point, le déplacement s’additionne à l’abscisse, et la distance entre deux points est la différence entre la plus grande et la plus petite abscisse.',
    method: ['Lire ou placer l’abscisse de départ.', 'Traduire le déplacement en nombre relatif (+ vers la droite, − vers la gauche).', 'Additionner pour trouver l’abscisse d’arrivée, ou soustraire les abscisses pour une distance.'],
    exemple: 'A(−2,5), déplacement de +4 : arrivée B(+1,5). Distance AB = 1,5 − (−2,5) = 4 unités.',
    erreur: 'Compter la distance en incluant les deux graduations de départ et d’arrivée : la distance est la différence des abscisses, pas le nombre de graduations touchées.',
    saistu: 'Les navigateurs du canal du Mozambique utilisent la même idée en mer : leur position sur un axe est un nombre, leur route une somme de déplacements positifs et négatifs selon les courants !',
    exos: ['Donne l’abscisse d’arrivée : a) départ 0, déplacement +3 ; b) départ −1, déplacement +2,5 ; d) départ +2, déplacement −5 ; e) départ −3,5, déplacement −1.',
      'Quel déplacement mène : a) de +1 à +4 ; b) de −2 à +3 ; d) de +2,5 à −0,5 ; e) de −4 à −1,5 ?',
      'Calcule la distance entre : a) A(−3) et B(+2) ; b) E(−1,5) et F(+1,5) ; d) M(+0,5) et N(+4,5) ; e) P(−5) et Q(−2).'],
    corr: ['a) +3 ; b) +1,5 ; d) −3 ; e) −4,5.',
      'a) +3 ; b) +5 ; d) −3 ; e) +2,5.',
      'a) 2 − (−3) = 5 ; b) 3 ; d) 4 ; e) −2 − (−5) = 3.'],
    fig: 'u4f6'
  },
  {
    t: 'Découvrir le repère orthogonal et ses quadrants', comp: 'Géométrie', theme: 'Repérage dans le plan muni d’un repère orthogonal',
    goal: 'décrire un repère orthogonal et reconnaître ses quatre quadrants',
    mat: 'Tableau, cahier, papier quadrillé, règle, repère orthonormé affiché',
    revQ: 'Quel déplacement mène de −2 à +3 sur une droite graduée ?',
    revRA: '+5 : on avance de 5 unités vers la droite.',
    situation: 'Une seule droite graduée repère les points d’une ligne, mais comment repérer une case sur la carte de la ville ? Il faut croiser deux droites graduées : une couchée, une debout.',
    def: 'Un repère orthogonal est formé de deux droites graduées perpendiculaires de même origine O : l’axe horizontal des abscisses et l’axe vertical des ordonnées. Les deux axes partagent le plan en quatre quadrants.',
    autrement: 'c’est le croisement de deux droites graduées : l’une donne la position gauche-droite, l’autre la position bas-haut.',
    concept: 'Les quadrants se numérotent en tournant dans le sens inverse des aiguilles d’une montre : quadrant I (abscisse +, ordonnée +) en haut à droite ; II (− ; +) en haut à gauche ; III (− ; −) en bas à gauche ; IV (+ ; −) en bas à droite. Les signes des coordonnées suffisent à dire où se trouve un point sans même le placer.',
    synthese: 'deux axes gradués perpendiculaires d’origine commune forment le repère orthogonal, et les signes des deux coordonnées désignent le quadrant.',
    method: ['Tracer l’axe horizontal puis l’axe vertical, perpendiculaires en O.', 'Graduer régulièrement les deux axes, positifs vers la droite et vers le haut.', 'Repérer le quadrant d’un point d’après les signes de ses coordonnées.'],
    exemple: '(+2 ; +3) est dans le quadrant I ; (−1 ; +2) dans le II ; (−2 ; −3) dans le III ; (+3 ; −1) dans le IV.',
    erreur: 'Numéroter les quadrants dans le sens des aiguilles d’une montre : la convention tourne dans l’autre sens, du quadrant I (+ ; +) vers le II (− ; +).',
    saistu: 'La légende raconte que René Descartes inventa les coordonnées en regardant une mouche marcher au plafond : deux nombres suffisaient à dire où elle était — le repère cartésien était né !',
    exos: ['Dans quel quadrant se trouve : a) (+5 ; +1) ; b) (−3 ; +2) ; d) (−1 ; −4) ; e) (+2 ; −2) ?',
      'Donne le signe des coordonnées d’un point du quadrant : a) I ; b) II ; d) III ; e) IV.',
      'Où se trouve le point : a) (0 ; +3) ; b) (−2 ; 0) ; d) (0 ; 0) ; e) (0 ; −1,5) ?'],
    corr: ['a) I ; b) II ; d) III ; e) IV.',
      'a) (+ ; +) ; b) (− ; +) ; d) (− ; −) ; e) (+ ; −).',
      'a) Sur l’axe des ordonnées ; b) sur l’axe des abscisses ; d) à l’origine O ; e) sur l’axe des ordonnées, sous O.'],
    fig: 'u4f7'
  },
  {
    t: 'Placer et lire des points dans un repère', comp: 'Géométrie', theme: 'Repérage dans le plan : coordonnées d’un point',
    goal: 'placer un point de coordonnées données et lire les coordonnées d’un point',
    mat: 'Tableau, cahier, papier quadrillé, règle',
    revQ: 'Dans quel quadrant se trouve le point (−4 ; +1) ?',
    revRA: 'Quadrant II : abscisse négative, ordonnée positive.',
    situation: 'Au jeu de la bataille navale, « B5 » désigne une case : une lettre pour la colonne, un chiffre pour la ligne. Le repère orthogonal fait pareil avec deux nombres : (2 ; 3).',
    def: 'Dans un repère orthogonal, chaque point est repéré par un couple de nombres (x ; y) : l’abscisse x, lue sur l’axe horizontal, puis l’ordonnée y, lue sur l’axe vertical. L’ordre des deux nombres est essentiel.',
    autrement: 'pour trouver (2 ; 3) : deux pas horizontaux, puis trois pas verticaux — toujours l’abscisse d’abord.',
    concept: 'Pour placer A(2 ; 3) : partir de O, avancer de 2 sur l’axe des abscisses, monter de 3 parallèlement à l’axe des ordonnées. Pour lire les coordonnées d’un point, on projette sur chaque axe en suivant les lignes du quadrillage. Attention : (2 ; 3) et (3 ; 2) sont deux points différents !',
    synthese: 'un point se note (abscisse ; ordonnée) : on lit ou place toujours l’abscisse sur l’axe horizontal d’abord, l’ordonnée ensuite.',
    method: ['Partir de l’origine O.', 'Avancer de la valeur de l’abscisse (droite si +, gauche si −).', 'Monter ou descendre de la valeur de l’ordonnée, puis marquer et nommer le point.'],
    exemple: 'A(2 ; 3), B(−1 ; 2), C(−2 ; −3), D(3 ; −1) : quatre points, un par quadrant.',
    erreur: 'Inverser abscisse et ordonnée : lire (3 ; 2) pour le point A(2 ; 3). Le premier nombre se lit toujours sur l’axe horizontal.',
    saistu: 'Le GPS de ta famille repère chaque point de Madagascar par deux nombres, latitude et longitude : Antananarivo est environ (−18,9 ; 47,5) — un repère orthogonal grand comme la planète !',
    exos: ['Place dans un repère : a) A(3 ; 2) ; b) B(−2 ; 4) ; d) C(−3 ; −2) ; e) D(1 ; −3).',
      'Lis les coordonnées des points de la figure de la leçon : a) A ; b) B ; d) C ; e) D.',
      'Place E(2 ; 0), F(2 ; 4), G(6 ; 4), H(6 ; 0) puis relie-les dans l’ordre. a) Quelle figure obtiens-tu ? b) quelle est sa longueur ? d) sa largeur ? e) les coordonnées du milieu du côté [EF] ?'],
    corr: ['a) b) d) e) Placements exacts, un point par quadrant... sauf A (quadrant I), B (II), C (III), D (IV).',
      'a) A(2 ; 3) ; b) B(−1 ; 2) ; d) C(−2 ; −3) ; e) D(3 ; −1).',
      'a) Un rectangle ; b) longueur 4 (de E à H) ; d) largeur 4 (de E à F) — c’est donc un carré ! e) (2 ; 2).'],
    fig: 'u4f8'
  },
  {
    t: 'Reconnaître les types d’angles', comp: 'Géométrie', theme: 'Angle nul, aigu, droit, obtus, plat, rentrant, plein',
    goal: 'reconnaître et classer les angles selon leur mesure',
    mat: 'Tableau, cahier, rapporteur, gabarits d’angles, deux baguettes articulées',
    revQ: 'Lis les coordonnées d’un point situé 2 carreaux à gauche de O et 3 carreaux au-dessus.',
    revRA: '(−2 ; 3).',
    situation: 'Deux baguettes attachées par un bout forment un angle qui s’ouvre comme un livre : fermé (nul), entrouvert (aigu), en équerre (droit), grand ouvert (obtus), à plat (plat)… et au-delà !',
    def: 'Un angle nul mesure 0° ; un angle aigu mesure entre 0° et 90° ; un angle droit mesure 90° ; un angle obtus mesure entre 90° et 180° ; un angle plat mesure 180° ; un angle rentrant mesure entre 180° et 360° ; un angle plein mesure 360°.',
    autrement: 'c’est l’ouverture du livre qui compte : équerre = droit, moins ouvert = aigu, plus ouvert = obtus, complètement à plat = plat.',
    concept: 'L’angle se mesure en degrés avec le rapporteur, entre ses deux côtés, à partir de son sommet. Les sept familles couvrent tout le tour : de 0° (côtés superposés) à 360° (tour complet). Un angle de 250° est rentrant : son ouverture dépasse le demi-tour. Pour classer, il suffit de comparer la mesure à 90° et à 180°.',
    synthese: 'on classe un angle en comparant sa mesure à 0°, 90°, 180° et 360° : nul, aigu, droit, obtus, plat, rentrant ou plein.',
    method: ['Repérer le sommet et les deux côtés de l’angle.', 'Mesurer au rapporteur ou comparer à l’équerre (90°) et à la règle (180°).', 'Nommer la famille en situant la mesure entre 0°, 90°, 180° et 360°.'],
    exemple: '30° : aigu ; 90° : droit ; 135° : obtus ; 180° : plat ; 250° : rentrant ; 360° : plein.',
    erreur: 'Confondre la longueur des côtés avec la mesure de l’angle : un angle de 30° reste de 30° même si l’on prolonge ses côtés.',
    saistu: 'Pourquoi 360° ? Les astronomes de Babylone comptaient en base 60 et donnaient à l’année environ 360 jours : le tour complet du ciel fut découpé en 360 parts, il y a près de 4 000 ans !',
    exos: ['Classe les angles : a) 45° ; b) 90° ; d) 170° ; e) 300°.',
      'Classe les angles : a) 0° ; b) 180° ; d) 89° ; e) 91°.',
      'Donne un exemple de mesure pour : a) un angle aigu ; b) un angle obtus ; d) un angle rentrant ; e) l’angle décrit par la grande aiguille en une heure complète.'],
    corr: ['a) Aigu ; b) droit ; d) obtus ; e) rentrant.',
      'a) Nul ; b) plat ; d) aigu (juste sous 90°) ; e) obtus (juste au-dessus).',
      'a) Par exemple 30° ; b) par exemple 120° ; d) par exemple 250° ; e) 360° : un angle plein.'],
    fig: 'u4f9'
  },
  {
    t: 'Utiliser les angles complémentaires et supplémentaires', comp: 'Géométrie', theme: 'Angles complémentaires, angles supplémentaires',
    goal: 'reconnaître et calculer des angles complémentaires et supplémentaires',
    mat: 'Tableau, cahier, rapporteur, équerre, gabarits d’angles',
    revQ: 'Classe l’angle de 135°.',
    revRA: 'Obtus : compris entre 90° et 180°.',
    situation: 'Deux angles collés remplissent exactement le coin de l’équerre : 35° + 55° = 90°. Deux autres remplissent le bord droit de la règle : 110° + 70° = 180°. Deux duos à nommer !',
    def: 'Deux angles sont complémentaires lorsque la somme de leurs mesures vaut 90° ; ils sont supplémentaires lorsque leur somme vaut 180°.',
    autrement: 'complémentaires : à deux, ils font une équerre ; supplémentaires : à deux, ils font une ligne droite.',
    concept: 'Pour trouver le complémentaire d’un angle, on le soustrait de 90° : le complémentaire de 35° est 55°. Pour le supplémentaire, on soustrait de 180° : le supplémentaire de 110° est 70°. Astuce de mémoire : C est avant S dans l’alphabet, comme 90 avant 180. Ces duos apparaissent partout : les deux angles aigus d’un triangle rectangle sont complémentaires.',
    synthese: 'complémentaires : somme 90°, supplémentaires : somme 180° ; l’angle manquant s’obtient par soustraction.',
    method: ['Identifier la somme visée : 90° (coin droit) ou 180° (ligne droite).', 'Soustraire l’angle connu de cette somme.', 'Vérifier que le total retombe exactement sur 90° ou 180°.'],
    exemple: 'Complémentaire de 35° : 90° − 35° = 55°. Supplémentaire de 110° : 180° − 110° = 70°.',
    erreur: 'Chercher le complémentaire d’un angle obtus : impossible, car un angle de plus de 90° dépasse déjà l’équerre à lui tout seul !',
    saistu: 'Les charpentiers parlent de « coupes d’onglet » : pour un cadre rectangulaire, chaque baguette est sciée à 45°, car 45° + 45° = 90° — des angles complémentaires jumeaux à chaque coin de tableau !',
    exos: ['Donne le complémentaire de : a) 10° ; b) 45° ; d) 72° ; e) 89°.',
      'Donne le supplémentaire de : a) 60° ; b) 90° ; d) 145° ; e) 179°.',
      'Réponds : a) deux angles de 50° et 40° sont-ils complémentaires ? b) deux angles de 95° et 85° sont-ils supplémentaires ? d) le complémentaire de 120° existe-t-il ? e) un angle peut-il être son propre complémentaire ?'],
    corr: ['a) 80° ; b) 45° ; d) 18° ; e) 1°.',
      'a) 120° ; b) 90° ; d) 35° ; e) 1°.',
      'a) Oui : 90° ; b) oui : 180° ; d) non : 120° > 90° ; e) oui, 45°, car 45° + 45° = 90°.'],
    fig: 'u4f10'
  },
  {
    t: 'Utiliser les angles opposés par le sommet', comp: 'Géométrie', theme: 'Angles opposés par le sommet',
    goal: 'reconnaître des angles opposés par le sommet et utiliser leur égalité',
    mat: 'Tableau, cahier, rapporteur, règle, deux baguettes croisées',
    revQ: 'Donne le supplémentaire de 145°.',
    revRA: '180° − 145° = 35°.',
    situation: 'Deux baguettes croisées comme des ciseaux dessinent quatre angles autour du croisement. En ouvrant les ciseaux, deux angles face à face grandissent toujours ensemble… Ils sont jumeaux !',
    def: 'Deux droites sécantes forment quatre angles ; deux angles non adjacents, situés de part et d’autre du sommet commun, sont dits opposés par le sommet. Deux angles opposés par le sommet sont égaux.',
    autrement: 'les angles « face à face » au croisement sont jumeaux : si l’un vaut 50°, celui d’en face vaut 50° aussi.',
    concept: 'Au croisement, les quatre angles forment deux paires : 50° face à 50°, 130° face à 130°. Deux angles voisins, eux, sont supplémentaires : 50° + 130° = 180°, car ils s’appuient sur une même droite. Une seule mesure suffit donc à connaître les quatre : son opposé est égal, ses deux voisins valent 180° moins la mesure.',
    synthese: 'au croisement de deux droites, les angles opposés par le sommet sont égaux et deux angles voisins sont supplémentaires : une mesure donne les quatre.',
    method: ['Repérer le sommet commun et les deux paires d’angles face à face.', 'Égaler les angles opposés par le sommet.', 'Calculer les voisins par 180° − mesure, puis vérifier que le tour fait 360°.'],
    exemple: 'Deux droites se coupent et forment un angle de 50° : son opposé vaut 50°, les deux autres valent 130° chacun ; total : 50 + 50 + 130 + 130 = 360°.',
    erreur: 'Croire que les quatre angles du croisement sont égaux : seuls les angles face à face le sont ; les voisins sont supplémentaires, pas égaux (sauf à 90°).',
    saistu: 'Quand les deux droites se coupent à angle droit, les quatre angles deviennent égaux à 90° : c’est le seul croisement parfaitement équilibré — celui des rues des villes nouvelles !',
    exos: ['Deux droites sécantes forment un angle de 70°. Donne les trois autres : a) l’opposé ; b) un voisin ; d) l’autre voisin ; e) vérifie le total.',
      'Même question avec un angle de 25° : a) opposé ; b) voisin ; d) autre voisin ; e) total.',
      'Au croisement, un angle vaut x et son voisin vaut 2x. a) Écris l’équation ; b) résous-la ; d) donne les quatre angles ; e) vérifie le total de 360°.'],
    corr: ['a) 70° ; b) 110° ; d) 110° ; e) 70 + 70 + 110 + 110 = 360° ✓.',
      'a) 25° ; b) 155° ; d) 155° ; e) 360° ✓.',
      'a) x + 2x = 180 ; b) 3x = 180, x = 60° ; d) 60°, 120°, 60°, 120° ; e) 360° ✓.'],
    fig: 'u4f11'
  },
  {
    t: 'Découvrir les angles formés par deux parallèles', comp: 'Géométrie', theme: 'Angles alternes-internes, alternes-externes, correspondants',
    goal: 'reconnaître les angles alternes-internes, alternes-externes et correspondants, et utiliser leur égalité',
    mat: 'Tableau, cahier, règle, équerre, rapporteur, papier calque',
    revQ: 'Deux droites sécantes forment un angle de 40°. Que vaut son opposé par le sommet ?',
    revRA: '40° : deux angles opposés par le sommet sont égaux.',
    situation: 'Une route coupe deux rizières aux bords parallèles. Les angles qu’elle forme avec le premier bord se retrouvent, identiques, au second bord : les parallèles recopient les angles !',
    def: 'Quand une sécante coupe deux droites, les angles situés entre les deux droites et de part et d’autre de la sécante sont alternes-internes ; à l’extérieur, alternes-externes ; du même côté de la sécante et dans la même position, correspondants. Si les deux droites sont parallèles, ces paires d’angles sont égales.',
    autrement: 'avec deux droites parallèles, la sécante fait « copier-coller » des angles : en Z pour les alternes-internes, en F pour les correspondants.',
    concept: 'Sur la figure, la sécante coupe deux parallèles avec un angle de 60° : l’angle alterne-interne, de l’autre côté de la sécante entre les deux droites, vaut aussi 60° — le « Z » le relie. L’angle correspondant, même position au second croisement, vaut 60° — le « F » le relie. Réciproquement, si les angles alternes-internes sont égaux, alors les deux droites sont parallèles : c’est un test de parallélisme.',
    synthese: 'entre deux parallèles coupées par une sécante, les angles alternes-internes, alternes-externes et correspondants sont égaux deux à deux.',
    method: ['Repérer la sécante et les deux croisements.', 'Classer la paire : entre les droites et en diagonale (alternes-internes, dessin en Z) ou même position (correspondants, dessin en F).', 'Si les droites sont parallèles, égaler les mesures ; sinon, utiliser l’égalité pour prouver le parallélisme.'],
    exemple: 'Sécante à 60° sur deux parallèles : l’alterne-interne vaut 60°, le correspondant vaut 60°, et le voisin de chacun vaut 120°.',
    erreur: 'Utiliser l’égalité des angles sans parallélisme : si les deux droites ne sont pas parallèles, les alternes-internes ne sont pas égaux !',
    saistu: 'Ératosthène mesura la circonférence de la Terre vers 240 avant J.-C. grâce aux angles alternes-internes : les rayons du soleil, parallèles, touchaient Alexandrie et Syène sous des angles différents — l’écart de 7° lui donna la taille de la planète !',
    exos: ['Une sécante coupe deux parallèles avec un angle de 75°. Donne la mesure de : a) l’angle alterne-interne associé ; b) l’angle correspondant ; d) l’angle alterne-externe ; e) le supplémentaire du correspondant.',
      'Reconnais la paire (Z ou F) : a) deux angles entre les droites, de part et d’autre de la sécante ; b) deux angles dans la même position aux deux croisements ; d) deux angles à l’extérieur, de part et d’autre ; e) deux angles collés au même croisement.',
      'Les angles alternes-internes formés par une sécante sur deux droites valent 58° et 58°. a) Que conclure des deux droites ? b) et s’ils valaient 58° et 62° ? d) que vaut alors le correspondant du premier dans le cas a) ? e) cite un objet réel aux bords parallèles coupés par une diagonale.'],
    corr: ['a) 75° ; b) 75° ; d) 75° ; e) 105°.',
      'a) Alternes-internes (Z) ; b) correspondants (F) ; d) alternes-externes ; e) ni l’un ni l’autre : angles adjacents du même croisement.',
      'a) Elles sont parallèles ; b) elles ne sont pas parallèles ; d) 58° ; e) par exemple une échelle et ses barreaux, un passage piéton.'],
    fig: 'u4f12'
  },
  {
    t: 'Identifier les polygones par leurs angles', comp: 'Géométrie', theme: 'Triangles et autres polygones : reconnaissance par les angles',
    goal: 'identifier des polygones à partir de leurs angles',
    mat: 'Tableau, cahier, rapporteur, équerre, formes en carton',
    revQ: 'Une sécante coupe deux parallèles avec un angle de 80°. Que vaut l’angle correspondant ?',
    revRA: '80° : les angles correspondants sont égaux entre parallèles.',
    situation: 'Dans le sac de formes en carton, impossible de tout mesurer ! Mais un coup d’œil aux angles suffit : quatre coins d’équerre ? Trois coins identiques ? Les angles signent chaque figure.',
    def: 'Un polygone est une figure plane fermée limitée par des segments. Les mesures de ses angles aident à l’identifier : un quadrilatère à quatre angles droits est un rectangle (un carré si les côtés sont de plus égaux) ; un triangle aux trois angles de 60° est équilatéral ; un hexagone régulier a six angles de 120°.',
    autrement: 'les angles sont la carte d’identité du polygone : 4 angles droits → rectangle ou carré ; 3 angles de 60° → équilatéral.',
    concept: 'La somme des angles classe les familles : 180° pour tout triangle, 360° pour tout quadrilatère. Dans un polygone régulier, tous les angles sont égaux : 60° pour le triangle équilatéral, 90° pour le carré, 108° pour le pentagone régulier, 120° pour l’hexagone régulier. Un angle obtus dans un triangle en fait un triangle obtusangle ; un angle droit, un triangle rectangle.',
    synthese: 'la somme des angles (180° pour les triangles, 360° pour les quadrilatères) et l’égalité des angles identifient le polygone.',
    method: ['Compter les côtés pour trouver la famille (triangle, quadrilatère, pentagone…).', 'Mesurer ou marquer les angles remarquables (droits, égaux).', 'Conclure avec la définition : rectangle, carré, équilatéral, polygone régulier…'],
    exemple: 'Quadrilatère à 4 angles droits et 4 côtés égaux : carré. Triangle aux angles 60°, 60°, 60° : équilatéral. Hexagone aux six angles de 120° et côtés égaux : hexagone régulier.',
    erreur: 'Conclure « carré » dès quatre angles droits : sans l’égalité des côtés, c’est seulement un rectangle.',
    saistu: 'Les abeilles sont des géomètres : leurs alvéoles hexagonales à angles de 120° pavent le plan sans laisser de trou en utilisant le moins de cire possible — l’hexagone régulier est champion d’économie !',
    exos: ['Identifie le polygone : a) 3 angles de 60° ; b) 4 angles droits et côtés non tous égaux ; d) 4 angles droits et 4 côtés égaux ; e) 6 angles de 120° et côtés égaux.',
      'Calcule l’angle manquant : a) quadrilatère avec 90°, 90°, 110° ; b) triangle avec 90° et 45° ; d) quadrilatère avec 100°, 80°, 95° ; e) triangle avec 60° et 60°.',
      'Vrai ou faux ? a) La somme des angles d’un quadrilatère vaut 360° ; b) un triangle peut avoir deux angles droits ; d) un rectangle a toujours 4 angles droits ; e) un polygone régulier a tous ses angles égaux.'],
    corr: ['a) Triangle équilatéral ; b) rectangle ; d) carré ; e) hexagone régulier.',
      'a) 70° ; b) 45° ; d) 85° ; e) 60° : le triangle est équilatéral.',
      'a) Vrai ; b) faux : 90 + 90 = 180, il ne resterait rien pour le troisième ; d) vrai ; e) vrai (et tous ses côtés égaux).'],
    fig: 'u4f13'
  },
  {
    t: 'Découvrir la médiatrice et le cercle circonscrit', comp: 'Géométrie', theme: 'La médiatrice ; centre du cercle circonscrit',
    goal: 'tracer les médiatrices d’un triangle et construire son cercle circonscrit',
    mat: 'Tableau, cahier, règle, équerre, compas',
    revQ: 'Quelle est la somme des angles d’un quadrilatère ?',
    revRA: '360°.',
    situation: 'Trois villages veulent creuser un puits commun, à égale distance des trois. Où le placer ? La réponse se construit à la règle et au compas : au croisement des médiatrices !',
    def: 'La médiatrice d’un segment est la droite perpendiculaire à ce segment en son milieu ; chacun de ses points est à égale distance des deux extrémités du segment. Les trois médiatrices des côtés d’un triangle se coupent en un même point O, centre du cercle circonscrit, qui passe par les trois sommets.',
    autrement: 'la médiatrice est la ligne des points « à égalité » entre deux points ; le point à égalité des trois sommets à la fois est le centre du cercle qui les attrape tous les trois.',
    concept: 'Pour construire la médiatrice au compas : deux arcs de même rayon centrés aux extrémités du segment, au-dessus et en dessous ; la droite joignant les deux intersections est la médiatrice. Dans un triangle, deux médiatrices suffisent à trouver O (la troisième y passe automatiquement) ; le rayon du cercle circonscrit est OA = OB = OC.',
    synthese: 'les médiatrices des côtés se coupent en un point unique O, équidistant des trois sommets : c’est le centre du cercle circonscrit, de rayon OA.',
    method: ['Construire la médiatrice de deux côtés du triangle (compas, même rayon depuis chaque extrémité).', 'Marquer O, le point d’intersection des deux médiatrices.', 'Piquer le compas en O, ouvrir jusqu’à un sommet et tracer le cercle : il passe par les trois.'],
    exemple: 'Dans le triangle ABC, les médiatrices de [AB] et [BC] se coupent en O ; le cercle de centre O et de rayon OA passe aussi par B et C.',
    erreur: 'Confondre médiatrice et médiane : la médiatrice est perpendiculaire au côté en son milieu, sans passer forcément par un sommet ; la médiane part d’un sommet.',
    saistu: 'Le centre O peut sortir du triangle : dans un triangle obtusangle, le cercle circonscrit a son centre dehors ! Pour un triangle rectangle, O tombe pile au milieu de l’hypoténuse.',
    exos: ['Pour la médiatrice d’un segment [AB] de 6 cm : a) où se trouve son pied ? b) quel angle fait-elle avec [AB] ? d) un point de la médiatrice est à 5 cm de A : à quelle distance est-il de B ? e) cite la propriété utilisée.',
      'Construis un triangle ABC avec AB = 6 cm, BC = 5 cm, AC = 4 cm. a) Trace la médiatrice de [AB] ; b) celle de [BC] ; d) marque leur intersection O ; e) trace le cercle circonscrit.',
      'Réponds : a) combien de médiatrices possède un triangle ? b) pourquoi deux suffisent-elles pour trouver O ? d) que vaut OB si OA = 3,8 cm ? e) où est O pour un triangle rectangle ?'],
    corr: ['a) Au milieu de [AB] ; b) 90° ; d) 5 cm aussi ; e) tout point de la médiatrice est équidistant de A et B.',
      'a) b) d) e) Construction exacte : le cercle passe par les trois sommets (tolérance 1 mm).',
      'a) Trois ; b) parce que la troisième passe forcément par le même point ; d) 3,8 cm : OA = OB = OC ; e) au milieu de l’hypoténuse.'],
    fig: 'u4f14'
  },
  {
    t: 'Découvrir la médiane et la hauteur', comp: 'Géométrie', theme: 'La médiane et le centre de gravité ; la hauteur et l’orthocentre',
    goal: 'tracer les médianes et les hauteurs d’un triangle et placer le centre de gravité et l’orthocentre',
    mat: 'Tableau, cahier, règle, équerre, compas, triangle en carton',
    revQ: 'Quelle différence entre médiatrice et médiane ?',
    revRA: 'La médiatrice est perpendiculaire au côté en son milieu ; la médiane relie un sommet au milieu du côté opposé.',
    situation: 'Un triangle en carton tient en équilibre sur la pointe d’un crayon… à condition de trouver le point magique ! Ce point d’équilibre se construit avec trois droites bien choisies.',
    def: 'Une médiane d’un triangle relie un sommet au milieu du côté opposé ; les trois médianes se coupent au centre de gravité G, situé aux deux tiers de chaque médiane à partir du sommet. Une hauteur est la droite qui passe par un sommet et qui est perpendiculaire au côté opposé ; les trois hauteurs se coupent à l’orthocentre H.',
    autrement: 'la médiane « coupe le côté en deux » depuis le sommet ; la hauteur « tombe tout droit » du sommet sur le côté d’en face.',
    concept: 'Pour une médiane : marquer le milieu du côté (compas ou règle), relier au sommet opposé. Pour une hauteur : glisser l’équerre le long du côté opposé jusqu’au sommet. G est toujours à l’intérieur du triangle : c’est le point d’équilibre du carton. H, lui, peut sortir du triangle quand celui-ci est obtusangle. Si AM est une médiane, AG = 2/3 de AM.',
    synthese: 'les médianes se coupent au centre de gravité G (aux deux tiers depuis chaque sommet) et les hauteurs à l’orthocentre H.',
    method: ['Médiane : marquer le milieu du côté opposé puis relier au sommet.', 'Hauteur : abaisser la perpendiculaire du sommet sur le côté opposé avec l’équerre.', 'Tracer les trois droites de chaque famille et nommer G ou H leur point commun.'],
    exemple: 'Dans ABC, la médiane issue de A aboutit au milieu M de [BC] et AG = 2/3 de AM ; la hauteur issue de A est perpendiculaire à (BC).',
    erreur: 'Tracer la « hauteur » jusqu’au milieu du côté : la hauteur suit la perpendiculaire, elle ne vise le milieu que dans les triangles isocèles ou équilatéraux !',
    saistu: 'Le centre de gravité porte bien son nom : les ingénieurs calculent le G de chaque avion avant le décollage — trop de bagages à l’arrière le déplacent, et l’appareil devient incontrôlable !',
    exos: ['Dans un triangle ABC, M est le milieu de [BC]. a) Comment s’appelle la droite (AM) ? b) où se coupent les trois droites de ce type ? d) si AM = 9 cm, que vaut AG ? e) que vaut GM ?',
      'Réponds : a) quel instrument pour tracer une hauteur ? b) comment s’appelle le point commun des hauteurs ? d) H peut-il sortir du triangle ? e) dans quel type de triangle une hauteur est-elle aussi médiane ?',
      'Construis un triangle ABC avec AB = 7 cm, BC = 6 cm, AC = 5 cm. a) Trace les trois médianes ; b) marque G ; d) trace la hauteur issue de A ; e) vérifie l’équilibre : G est-il à l’intérieur ?'],
    corr: ['a) La médiane issue de A ; b) au centre de gravité G ; d) AG = 2/3 × 9 = 6 cm ; e) GM = 3 cm.',
      'a) L’équerre ; b) l’orthocentre H ; d) oui, dans un triangle obtusangle ; e) dans un triangle isocèle (pour la base) ou équilatéral.',
      'a) b) d) Constructions exactes, les trois médianes concourantes ; e) oui, G est toujours intérieur.'],
    fig: 'u4f15'
  },
  {
    t: 'Découvrir la bissectrice et le cercle inscrit', comp: 'Géométrie', theme: 'La bissectrice des angles ; centre du cercle inscrit',
    goal: 'tracer les bissectrices d’un triangle et construire son cercle inscrit',
    mat: 'Tableau, cahier, règle, compas, rapporteur',
    revQ: 'Si AM est une médiane de 9 cm, à quelle distance de A se trouve le centre de gravité G ?',
    revRA: 'AG = 2/3 × 9 = 6 cm.',
    situation: 'Quel est le plus grand rond de natte que l’on peut poser dans un enclos triangulaire ? Il touche les trois côtés sans les dépasser — et son centre se construit avec les bissectrices.',
    def: 'La bissectrice d’un angle est la demi-droite issue du sommet qui partage l’angle en deux angles égaux. Les trois bissectrices des angles d’un triangle se coupent en un même point I, centre du cercle inscrit, le cercle tangent aux trois côtés du triangle.',
    autrement: 'la bissectrice coupe l’angle en deux parts égales, comme on partage une part de gâteau ; le point I est à égale distance des trois côtés — parfait pour y centrer le plus grand cercle intérieur.',
    concept: 'Construction au compas : un arc centré au sommet coupe les deux côtés de l’angle ; deux arcs de même rayon centrés en ces points se croisent à l’intérieur ; la demi-droite du sommet vers ce croisement est la bissectrice. Dans le triangle, deux bissectrices donnent I. Le rayon du cercle inscrit est la distance de I à un côté, mesurée perpendiculairement.',
    synthese: 'les bissectrices des trois angles se coupent en I, équidistant des trois côtés : c’est le centre du cercle inscrit, tangent aux trois côtés.',
    method: ['Construire la bissectrice de deux angles du triangle (arcs au compas).', 'Marquer I, leur point d’intersection.', 'Abaisser la perpendiculaire de I sur un côté pour obtenir le rayon, puis tracer le cercle inscrit.'],
    exemple: 'Dans ABC, les bissectrices des angles A et B se coupent en I ; le cercle de centre I tangent à [BC] touche aussi [AB] et [AC].',
    erreur: 'Prendre pour rayon la distance de I à un sommet : le rayon du cercle inscrit est la distance de I à un CÔTÉ, mesurée perpendiculairement.',
    saistu: 'Récapitulons les quatre points remarquables du triangle : O (médiatrices, cercle circonscrit), G (médianes, équilibre), H (hauteurs) et I (bissectrices, cercle inscrit). Dans un triangle équilatéral, les quatre n’en font qu’un !',
    exos: ['La bissectrice partage un angle de : a) 80° ; b) 90° ; d) 50° ; e) 120°. Donne les deux angles obtenus.',
      'Réponds : a) combien de bissectrices possède un triangle ? b) comment s’appelle leur point commun ? d) de quoi I est-il équidistant ? e) comment s’appelle le cercle de centre I tangent aux côtés ?',
      'Associe chaque droite remarquable à son point : a) médiatrices ; b) médianes ; d) hauteurs ; e) bissectrices.'],
    corr: ['a) 40° et 40° ; b) 45° et 45° ; d) 25° et 25° ; e) 60° et 60°.',
      'a) Trois ; b) le centre du cercle inscrit I ; d) des trois côtés du triangle ; e) le cercle inscrit.',
      'a) O, centre du cercle circonscrit ; b) G, centre de gravité ; d) H, orthocentre ; e) I, centre du cercle inscrit.'],
    fig: 'u4f16'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Géométrie',
  rag: 'décrire, comparer et analyser les figures géométriques pour comprendre les structures du monde réel et pour en créer de nouvelles.',
  valeurs: 'estime de soi et rigueur',
  sessions: S,
  revision: {
    table: [
      ['Triangles particuliers', 'Rectangle (angle droit), isocèle (2 côtés égaux), équilatéral (3 côtés, angles 60°)', 'Reconnaître, calculer les angles, construire à l’équerre et au compas'],
      ['Repérage', 'Abscisse sur une droite ; couple (x ; y) dans un repère ; 4 quadrants', 'Placer et lire des points, reconnaître le quadrant'],
      ['Angles', 'Nul, aigu, droit, obtus, plat, rentrant, plein ; somme 90° ou 180°', 'Classer, calculer complémentaires et supplémentaires'],
      ['Angles et droites', 'Opposés par le sommet égaux ; alternes-internes et correspondants égaux entre parallèles', 'Calculer des mesures, tester le parallélisme'],
      ['Droites remarquables', 'Médiatrice → O ; médiane → G ; hauteur → H ; bissectrice → I', 'Tracer, construire cercles circonscrit et inscrit']
    ],
    questions: [
      'Un triangle a deux angles de 65° et 50°. Calcule le troisième et dis s’il est particulier.',
      'Dans quel quadrant se trouve le point (−3 ; −1) ?',
      'Donne le complémentaire de 28° et le supplémentaire de 28°.',
      'Une sécante coupe deux parallèles avec un angle de 115°. Que valent l’angle correspondant et l’angle alterne-interne associés ?',
      'Quel point remarquable est équidistant des trois sommets ? des trois côtés ?'
    ],
    answers: [
      '180 − 65 − 50 = 65° : deux angles égaux, le triangle est isocèle.',
      'Quadrant III : les deux coordonnées sont négatives.',
      'Complémentaire : 62° ; supplémentaire : 152°.',
      'Tous deux valent 115° : correspondants et alternes-internes sont égaux entre parallèles.',
      'Des sommets : O, centre du cercle circonscrit (médiatrices). Des côtés : I, centre du cercle inscrit (bissectrices).'
    ]
  },
  exam: {
    exos: [
      'Un triangle isocèle a un angle au sommet de 52°. a) Calcule chaque angle à la base. b) Un triangle rectangle a un angle de 37° : calcule l’autre angle aigu. d) Un triangle a des angles de 60°, 60° et 60° : nomme-le. e) Peut-il exister un triangle avec deux angles de 95° ? Justifie.',
      'Décris la construction : a) d’un triangle rectangle en A avec AB = 6 cm et AC = 4 cm (étapes dans l’ordre) ; b) d’un triangle équilatéral de côté 5 cm. d) Quelle ouverture de compas pour un isocèle de base 4 cm et de côtés 7 cm ? e) Quel instrument garantit l’angle droit ?',
      'Dans un repère orthogonal, place : a) A(2 ; 1), B(−3 ; 2), C(−1 ; −3), D(3 ; −2), puis donne le quadrant de chacun. b) Lis les coordonnées du point E situé 4 carreaux à gauche de O sur l’axe horizontal. d) Les points F(1 ; 3) et G(3 ; 1) sont-ils confondus ? e) Donne le signe des coordonnées du quadrant III.',
      'a) Classe les angles : 14°, 90°, 162°, 180°, 240°. b) Donne le complémentaire de 55°. d) Deux droites sécantes forment un angle de 65° : donne les trois autres angles. e) Une sécante coupe deux parallèles sous 130° : que vaut l’angle alterne-externe associé ?',
      'a) Définis la médiatrice d’un segment. b) Comment s’appellent le point de concours des médianes et celui des bissectrices ? d) Si la médiane AM mesure 12 cm, à quelle distance de A est le centre de gravité ? e) Quel cercle a pour centre le point de concours des médiatrices, et par quels points passe-t-il ?'
    ],
    corr: [
      'a) (180 − 52) ÷ 2 = 64° chacun ; b) 90 − 37 = 53° ; d) triangle équilatéral ; e) non : 95 + 95 = 190 > 180. Un point par item.',
      'a) Tracer AB = 6 cm, perpendiculaire en A à l’équerre, reporter AC = 4 cm, relier B et C ; b) tracer AB = 5 cm puis deux arcs de rayon 5 cm centrés en A et B ; d) 7 cm ; e) l’équerre. Un point par item.',
      'a) A : I ; B : II ; C : III ; D : IV ; b) E(−4 ; 0) ; d) non, (1 ; 3) ≠ (3 ; 1) ; e) (− ; −). Un point par item.',
      'a) Aigu, droit, obtus, plat, rentrant ; b) 35° ; d) 65°, 115°, 115° ; e) 130°. Un point par item.',
      'a) Droite perpendiculaire au segment en son milieu ; b) centre de gravité G et centre du cercle inscrit I ; d) 2/3 × 12 = 8 cm ; e) le cercle circonscrit, qui passe par les trois sommets. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
