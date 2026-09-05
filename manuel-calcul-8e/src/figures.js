// Génération des figures (SVG → PNG via sharp) — Manuel Calcul 8e V2
// Toutes les figures géométriques, instruments et droites graduées sont produites ici (pas d'IA).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..", "assets", "figures");
fs.mkdirSync(OUT, { recursive: true });
const FONT = "DejaVu Sans, Liberation Sans, Arial, sans-serif";
const COL = { trait: "#1F1F1F", bleu: "#1F4E79", rouge: "#C00000", vert: "#1E7B34", orange: "#E38A00", fill: "#CFE2F3", fill2: "#FFE6CC", fill3: "#D9EAD3", violet: "#D9C3E6", jaune: "#FFF2CC", gris: "#888" };

const svgDoc = (w, h, body) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="#fff"/>${body}</svg>`;
const txt = (x, y, s, { size = 22, color = COL.trait, anchor = "middle", bold = false, italic = false } = {}) =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" text-anchor="${anchor}" ${bold ? 'font-weight="bold"' : ""} ${italic ? 'font-style="italic"' : ""}>${s}</text>`;
const line = (x1, y1, x2, y2, { color = COL.trait, w = 3, dash = null } = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}" stroke-linecap="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const poly = (pts, { fill = COL.fill, color = COL.trait, w = 3, dash = null } = {}) => `<polygon points="${pts.map((p) => p.join(",")).join(" ")}" fill="${fill}" stroke="${color}" stroke-width="${w}" stroke-linejoin="round" ${dash ? `stroke-dasharray="${dash}"` : ""}/>`;
const rightAngle = (x, y, dx, dy, s = 14) => `<polyline points="${x + dx * s},${y} ${x + dx * s},${y + dy * s} ${x},${y + dy * s}" fill="none" stroke="${COL.rouge}" stroke-width="2"/>`;
const tick = (x, y1, y2, color = COL.trait) => line(x, y1, x, y2, { color, w: 2 });

const figs = {};

// ---------- figures planes ----------
figs.rectangle = () => {
  const x = 60, y = 50, L = 400, l = 220;
  return svgDoc(720, 340, [
    poly([[x, y], [x + L, y], [x + L, y + l], [x, y + l]]),
    rightAngle(x, y, 1, 1), rightAngle(x + L, y, -1, 1), rightAngle(x + L, y + l, -1, -1), rightAngle(x, y + l, 1, -1),
    line(x + L / 2 - 16, y + 12, x + L / 2 + 16, y + 12, { color: COL.rouge, w: 2 }), line(x + L / 2 - 16, y + l - 12, x + L / 2 + 16, y + l - 12, { color: COL.rouge, w: 2 }),
    txt(x + L / 2, y - 18, "Longueur L = 8 cm", { color: COL.bleu, bold: true }), txt(x + L + 14, y + l / 2 + 8, "largeur l = 4 cm", { anchor: "start", color: COL.bleu, bold: true, size: 20 }),
    txt(360, y + l + 45, "Le rectangle : 4 angles droits, côtés opposés de même longueur", { size: 18, italic: true }),
  ].join(""));
};
figs.carre = () => {
  const x = 150, y = 50, c = 240;
  return svgDoc(560, 360, [
    poly([[x, y], [x + c, y], [x + c, y + c], [x, y + c]], { fill: COL.fill3 }),
    rightAngle(x, y, 1, 1), rightAngle(x + c, y, -1, 1), rightAngle(x + c, y + c, -1, -1), rightAngle(x, y + c, 1, -1),
    ...[[x + c / 2, y + 12], [x + c / 2, y + c - 12]].map(([a, b]) => line(a - 12, b, a + 12, b, { color: COL.rouge, w: 2 })),
    ...[[x + 12, y + c / 2], [x + c - 12, y + c / 2]].map(([a, b]) => line(a, b - 12, a, b + 12, { color: COL.rouge, w: 2 })),
    txt(x + c / 2, y - 18, "côté c = 5 cm", { color: COL.bleu, bold: true }), txt(x + c + 14, y + c / 2 + 8, "c = 5 cm", { anchor: "start", color: COL.bleu, bold: true, size: 20 }),
    txt(280, y + c + 45, "Le carré : 4 côtés égaux, 4 angles droits", { size: 18, italic: true }),
  ].join(""));
};
figs.triangle = () => {
  const A = [80, 300], B = [460, 300], Cc = [200, 60];
  return svgDoc(560, 360, [
    poly([A, B, Cc], { fill: COL.fill2 }),
    line(Cc[0], Cc[1], Cc[0], 300, { color: COL.rouge, w: 2, dash: "8,6" }), rightAngle(Cc[0], 300, 1, -1),
    txt((A[0] + B[0]) / 2, 335, "base b = 8 cm", { color: COL.bleu, bold: true }), txt(Cc[0] + 10, 190, "hauteur h = 5 cm", { anchor: "start", color: COL.rouge, bold: true, size: 20 }),
    txt(120, 170, "6 cm", { color: COL.bleu, size: 20 }), txt(350, 170, "7 cm", { color: COL.bleu, size: 20 }),
    txt(A[0] - 14, A[1] + 8, "A", { bold: true }), txt(B[0] + 14, B[1] + 8, "B", { bold: true }), txt(Cc[0], Cc[1] - 12, "C", { bold: true }),
  ].join(""));
};
figs.parallelogramme = () => {
  const pts = [[60, 280], [400, 280], [500, 80], [160, 80]];
  return svgDoc(560, 340, [
    poly(pts, { fill: COL.fill }), line(160, 80, 160, 280, { color: COL.rouge, w: 2, dash: "8,6" }), rightAngle(160, 280, 1, -1),
    txt(230, 315, "base b = 8 cm", { color: COL.bleu, bold: true }), txt(168, 190, "h = 5 cm", { anchor: "start", color: COL.rouge, bold: true, size: 20 }),
    txt(280, 60, "Parallélogramme : côtés opposés parallèles et égaux", { size: 18, italic: true }),
  ].join(""));
};
figs.losange = () => {
  const cx = 240, cy = 180, D = 200, d = 120;
  return svgDoc(720, 360, [
    poly([[cx - D, cy], [cx, cy - d], [cx + D, cy], [cx, cy + d]], { fill: COL.violet }),
    line(cx - D, cy, cx + D, cy, { color: COL.rouge, w: 2, dash: "8,6" }), line(cx, cy - d, cx, cy + d, { color: COL.vert, w: 2, dash: "8,6" }), rightAngle(cx, cy, 1, -1),
    txt(cx + D + 10, cy + 6, "D = 10 cm", { anchor: "start", color: COL.rouge, size: 18, bold: true }), txt(cx, cy - d - 12, "grande diagonale D (rouge), petite diagonale d (verte)", { size: 15, italic: true }), txt(cx + 8, cy + d - 30, "d = 6 cm", { anchor: "start", color: COL.vert, size: 18, bold: true }),
    txt(360, 335, "Losange : 4 côtés égaux, diagonales perpendiculaires", { size: 18, italic: true }),
  ].join(""));
};
figs.trapeze = () => {
  const pts = [[60, 280], [500, 280], [400, 90], [180, 90]];
  return svgDoc(560, 340, [
    poly(pts, { fill: COL.jaune }), line(180, 90, 180, 280, { color: COL.rouge, w: 2, dash: "8,6" }), rightAngle(180, 280, 1, -1),
    txt(280, 315, "grande base B = 11 cm", { color: COL.bleu, bold: true }), txt(290, 75, "petite base b = 5 cm", { color: COL.bleu, bold: true, size: 20 }),
    txt(188, 190, "h = 4 cm", { anchor: "start", color: COL.rouge, bold: true, size: 20 }),
  ].join(""));
};
figs.cercle = () => {
  const cx = 200, cy = 180, r = 130;
  return svgDoc(720, 360, [
    `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${COL.fill}" stroke="${COL.trait}" stroke-width="3"/>`,
    `<circle cx="${cx}" cy="${cy}" r="4" fill="${COL.trait}"/>`, line(cx, cy, cx + r, cy, { color: COL.rouge }), line(cx - r, cy + 50, cx + r, cy + 50, { color: COL.vert, w: 2, dash: "6,5" }),
    txt(cx + r / 2, cy - 10, "rayon r", { color: COL.rouge, bold: true, size: 20 }), txt(cx, cy + 75, "diamètre D = 2 × r", { color: COL.vert, bold: true, size: 18 }), txt(cx - 12, cy - 10, "O", { bold: true }),
    txt(430, 120, "Le cercle :", { anchor: "start", bold: true, size: 20 }), txt(430, 150, "la ligne (le contour)", { anchor: "start", size: 18 }),
    txt(430, 200, "Le disque :", { anchor: "start", bold: true, size: 20 }), txt(430, 230, "toute la surface", { anchor: "start", size: 18 }), txt(430, 254, "à l'intérieur", { anchor: "start", size: 18 }),
  ].join(""));
};

// ---------- solides en perspective cavalière (angle 45°, coefficient 0,5) ----------
function solide(L, l, h, { labels, fill = COL.fill2, title = "" }) {
  // L : largeur (horizontal), h : hauteur, l : profondeur (fuyante)
  const s = 1, k = 0.5, ang = Math.PI / 4;
  const dx = l * k * Math.cos(ang), dy = l * k * Math.sin(ang);
  const ox = 90, oy = 60 + dy + h;
  const A = [ox, oy], B = [ox + L, oy], Cc = [ox + L, oy - h], D = [ox, oy - h];
  const E = [A[0] + dx, A[1] - dy], F = [B[0] + dx, B[1] - dy], G = [Cc[0] + dx, Cc[1] - dy], H = [D[0] + dx, D[1] - dy];
  const W = ox + L + dx + 260, Hh = oy + 70;
  const dark = fill === COL.fill2 ? "#F4C99B" : "#9FC5E8", mid = fill === COL.fill2 ? "#FBDDBB" : "#B7D4EE";
  const body = [
    poly([D, Cc, G, H], { fill: mid }), poly([B, F, G, Cc], { fill: dark }), poly([A, B, Cc, D], { fill }),
    // arêtes cachées
    line(A[0], A[1], E[0], E[1], { dash: "8,6", w: 2, color: COL.gris }), line(E[0], E[1], F[0], F[1], { dash: "8,6", w: 2, color: COL.gris }), line(E[0], E[1], H[0], H[1], { dash: "8,6", w: 2, color: COL.gris }),
    rightAngle(A[0], A[1], 1, -1), rightAngle(B[0], B[1], -1, -1),
    txt((A[0] + B[0]) / 2, A[1] + 30, labels[0], { color: COL.bleu, bold: true, size: 20 }),
    txt(B[0] + dx / 2 + 14, B[1] - dy / 2 + 18, labels[1], { anchor: "start", color: COL.vert, bold: true, size: 20 }),
    txt(Cc[0] + dx + 12, (Cc[1] + F[1]) / 2 - dy / 2, labels[2], { anchor: "start", color: COL.rouge, bold: true, size: 20 }),
    title ? txt(W / 2, 30, title, { size: 18, italic: true }) : "",
  ].join("");
  return svgDoc(W, Hh, body);
}
figs.cube = () => solide(220, 220, 220, { labels: ["côté c = 5 cm", "c = 5 cm", "c = 5 cm"], fill: COL.fill2, title: "Le cube : 6 faces carrées identiques, 12 arêtes, 8 sommets" });
figs.pave = () => solide(300, 160, 180, { labels: ["Longueur L = 7 cm", "largeur l = 4 cm", "hauteur h = 5 cm"], fill: COL.fill, title: "Le parallélépipède rectangle : 6 faces rectangulaires, 12 arêtes, 8 sommets" });
figs.cube_petit = () => solide(160, 160, 160, { labels: ["c", "c", "c"], fill: COL.fill2 });
figs.pave_petit = () => solide(240, 120, 130, { labels: ["L", "l", "h"], fill: COL.fill });
figs.litre_dm3 = () => {
  const k = 0.5, ang = Math.PI / 4, c = 170, dx = c * k * Math.cos(ang), dy = c * k * Math.sin(ang);
  const ox = 110, oy = 300;
  const A = [ox, oy], B = [ox + c, oy], Cc = [ox + c, oy - c], D = [ox, oy - c];
  const E = [A[0] + dx, A[1] - dy], F = [B[0] + dx, B[1] - dy], G = [Cc[0] + dx, Cc[1] - dy], H = [D[0] + dx, D[1] - dy];
  return svgDoc(760, 400, [
    poly([D, Cc, G, H], { fill: "#B7D4EE" }), poly([B, F, G, Cc], { fill: "#9FC5E8" }), poly([A, B, Cc, D], { fill: COL.fill }),
    line(A[0], A[1], E[0], E[1], { dash: "8,6", w: 2, color: COL.gris }), line(E[0], E[1], F[0], F[1], { dash: "8,6", w: 2, color: COL.gris }), line(E[0], E[1], H[0], H[1], { dash: "8,6", w: 2, color: COL.gris }),
    txt(ox + c / 2, oy + 28, "1 dm", { color: COL.bleu, bold: true, size: 18 }), txt(B[0] + dx / 2 + 10, B[1] - dy / 2 + 16, "1 dm", { anchor: "start", color: COL.vert, bold: true, size: 18 }), txt(ox - 12, oy - c / 2, "1 dm", { anchor: "end", color: COL.rouge, bold: true, size: 18 }),
    txt(ox + c / 2 + 20, 375, "1 dm³", { size: 26, bold: true, color: COL.bleu }),
    txt(330, 220, "=", { size: 40, bold: true }),
    `<rect x="380" y="130" width="90" height="190" rx="10" fill="#CFE2F3" stroke="#1F1F1F" stroke-width="3"/><rect x="405" y="90" width="40" height="45" fill="#CFE2F3" stroke="#1F1F1F" stroke-width="3"/>`,
    txt(425, 235, "1 L", { size: 22, bold: true }), txt(425, 375, "1 L d'eau", { size: 24, bold: true, color: COL.bleu }),
    txt(530, 220, "=", { size: 40, bold: true }),
    `<rect x="580" y="220" width="120" height="90" fill="#D9EAD3" stroke="#1F1F1F" stroke-width="3"/><path d="M600 220 Q640 160 680 220" fill="none" stroke="#1F1F1F" stroke-width="3"/>`,
    txt(640, 275, "1 kg", { size: 22, bold: true }), txt(640, 375, "1 kg", { size: 26, bold: true, color: COL.bleu }),
    txt(380, 40, "Un cube de 1 dm d'arête contient exactement 1 litre d'eau, qui pèse 1 kilogramme", { size: 17, italic: true }),
  ].join(""));
};

// ---------- droites, demi-droites, segments, angles ----------
figs.droites = () => svgDoc(600, 300, [
  line(40, 60, 560, 60, { color: COL.bleu }), `<polygon points="40,60 55,52 55,68" fill="${COL.bleu}"/><polygon points="560,60 545,52 545,68" fill="${COL.bleu}"/>`, txt(300, 40, "La droite (d) : pas d'extrémité, elle se prolonge des deux côtés", { size: 17 }),
  line(120, 150, 560, 150, { color: COL.vert }), `<circle cx="120" cy="150" r="6" fill="${COL.vert}"/><polygon points="560,150 545,142 545,158" fill="${COL.vert}"/>`, txt(110, 180, "O", { bold: true, color: COL.vert }), txt(330, 130, "La demi-droite [Ox) : une seule extrémité, l'origine O", { size: 17 }),
  line(150, 240, 450, 240, { color: COL.rouge }), `<circle cx="150" cy="240" r="6" fill="${COL.rouge}"/><circle cx="450" cy="240" r="6" fill="${COL.rouge}"/>`, txt(150, 270, "A", { bold: true, color: COL.rouge }), txt(450, 270, "B", { bold: true, color: COL.rouge }), txt(300, 220, "Le segment [AB] : deux extrémités, on peut mesurer sa longueur", { size: 17 }),
].join(""));
figs.angles = () => {
  const one = (cx, cy, deg, label, color, fill) => {
    const r = 70, a = (deg * Math.PI) / 180;
    const x2 = cx + 110 * Math.cos(a), y2 = cy - 110 * Math.sin(a);
    const arc = `<path d="M${cx + r} ${cy} A${r} ${r} 0 ${deg > 180 ? 1 : 0} 0 ${cx + r * Math.cos(a)} ${cy - r * Math.sin(a)} L${cx} ${cy} Z" fill="${fill}" stroke="${color}" stroke-width="2"/>`;
    return arc + line(cx, cy, cx + 120, cy) + line(cx, cy, x2, y2) + (deg === 90 ? rightAngle(cx, cy, 1, -1) : "") + txt(cx + 60, cy + 40, label, { size: 17, bold: true, color }) + txt(cx + 60, cy + 62, `${deg}°`, { size: 16, color });
  };
  return svgDoc(720, 200, [one(30, 120, 40, "angle aigu", COL.vert, "#D9EAD3"), one(230, 120, 90, "angle droit", COL.bleu, "#CFE2F3"), one(430, 120, 130, "angle obtus", COL.orange, "#FFE6CC"), one(600, 120, 180, "angle plat", COL.rouge, "#FDECEA")].join(""));
};
figs.paralleles = () => svgDoc(720, 230, [
  line(30, 60, 220, 60, { color: COL.bleu }), line(30, 130, 220, 130, { color: COL.bleu }), txt(125, 180, "(d1) // (d2) : parallèles", { size: 17, bold: true, color: COL.bleu }), txt(125, 202, "ne se coupent jamais", { size: 15 }),
  line(280, 160, 460, 40, { color: COL.vert }), line(280, 60, 460, 150, { color: COL.vert }), txt(370, 190, "sécantes", { size: 17, bold: true, color: COL.vert }), txt(370, 212, "se coupent en un point", { size: 15 }),
  line(520, 150, 700, 150, { color: COL.rouge }), line(610, 30, 610, 170, { color: COL.rouge }), rightAngle(610, 150, 1, -1), txt(610, 195, "(d1) ⊥ (d2) : perpendiculaires", { size: 17, bold: true, color: COL.rouge }), txt(610, 217, "se coupent à angle droit", { size: 15 }),
].join(""));
figs.rapporteur = () => {
  const cx = 300, cy = 250, R = 220;
  const parts = [`<path d="M${cx - R} ${cy} A${R} ${R} 0 0 1 ${cx + R} ${cy} Z" fill="#F3F3F3" stroke="${COL.trait}" stroke-width="3"/>`];
  for (let d = 0; d <= 180; d += 10) {
    const a = (d * Math.PI) / 180; const r1 = R - (d % 30 === 0 ? 26 : 16);
    parts.push(line(cx + R * Math.cos(a), cy - R * Math.sin(a), cx + r1 * Math.cos(a), cy - r1 * Math.sin(a), { w: 2 }));
    if (d % 30 === 0) parts.push(txt(cx + (R - 42) * Math.cos(a), cy - (R - 42) * Math.sin(a) + 6, String(d), { size: 15 }));
  }
  const a = (50 * Math.PI) / 180;
  parts.push(line(cx, cy, cx + 260, cy, { color: COL.rouge }), line(cx, cy, cx + 260 * Math.cos(a), cy - 260 * Math.sin(a), { color: COL.rouge }), `<circle cx="${cx}" cy="${cy}" r="5" fill="${COL.rouge}"/>`);
  parts.push(txt(cx + 120, cy - 40, "50°", { color: COL.rouge, bold: true, size: 24 }), txt(cx, cy + 40, "Le centre du rapporteur sur le sommet, le 0 sur un côté", { size: 17, italic: true }));
  return svgDoc(600, 310, parts.join(""));
};

// ---------- droites graduées ----------
function droiteGraduee({ min, max, step, marks = [], w = 700, labelEvery = 1, title = "" }) {
  const x0 = 50, x1 = w - 50, n = Math.round((max - min) / step);
  const X = (v) => x0 + ((v - min) / (max - min)) * (x1 - x0);
  const parts = [line(x0 - 20, 100, x1 + 20, 100), `<polygon points="${x1 + 20},100 ${x1 + 6},93 ${x1 + 6},107" fill="${COL.trait}"/>`];
  for (let i = 0; i <= n; i++) { const v = min + i * step; parts.push(tick(X(v), 90, 110)); if (i % labelEvery === 0) parts.push(txt(X(v), 135, fmtN(v), { size: 16 })); }
  marks.forEach(({ v, label, color = COL.rouge }) => parts.push(`<circle cx="${X(v)}" cy="100" r="7" fill="${color}"/>`, txt(X(v), 70, label || fmtN(v), { color, bold: true, size: 18 })));
  if (title) parts.push(txt(w / 2, 30, title, { size: 17, italic: true }));
  return svgDoc(w, 160, parts.join(""));
}
const fmtN = (v) => (Number.isInteger(v) ? String(v).replace(/\B(?=(\d{3})+(?!\d))/g, " ") : String(v).replace(".", ","));
figs.droite_10000 = () => droiteGraduee({ min: 0, max: 10000, step: 1000, marks: [{ v: 3085, label: "3 085" }, { v: 7500, label: "7 500", color: COL.vert }], title: "Repérer 3 085 et 7 500 sur la droite graduée de 0 à 10 000 (1 graduation = 1 000)" });
figs.droite_1000000 = () => droiteGraduee({ min: 0, max: 1000000, step: 100000, marks: [{ v: 350000, label: "350 000" }, { v: 820000, label: "820 000", color: COL.vert }], title: "Repérer 350 000 et 820 000 (1 graduation = 100 000)" });
figs.droite_decimaux = () => droiteGraduee({ min: 8, max: 10, step: 0.1, marks: [{ v: 8.7, label: "8,7" }, { v: 9.85, label: "9,85", color: COL.vert }], labelEvery: 5, title: "Repérer 8,7 et 9,85 entre 8 et 10 (1 graduation = 0,1)" });
figs.droite_fractions = () => {
  const s = droiteGraduee({ min: 0, max: 2, step: 0.25, marks: [{ v: 0.75, label: "3/4" }, { v: 1.5, label: "6/4 = 3/2", color: COL.vert }], labelEvery: 4, title: "Les fractions sur la droite graduée (unité partagée en 4)" });
  return s;
};

// ---------- instruments de mesure ----------
figs.regle = () => {
  const parts = [`<rect x="30" y="60" width="640" height="90" rx="6" fill="${COL.jaune}" stroke="${COL.trait}" stroke-width="3"/>`];
  for (let mm = 0; mm <= 100; mm++) { const x = 50 + mm * 6; const h = mm % 10 === 0 ? 34 : mm % 5 === 0 ? 24 : 14; parts.push(line(x, 60, x, 60 + h, { w: mm % 10 === 0 ? 2 : 1 })); if (mm % 10 === 0) parts.push(txt(x, 130, String(mm / 10), { size: 16 })); }
  parts.push(txt(350, 40, "La règle graduée : 1 cm = 10 mm", { size: 18, italic: true }), txt(660, 130, "cm", { size: 14 }));
  return svgDoc(700, 170, parts.join(""));
};
figs.metre_ruban = () => svgDoc(700, 200, [
  `<circle cx="120" cy="100" r="70" fill="#FFE6CC" stroke="${COL.trait}" stroke-width="3"/><circle cx="120" cy="100" r="12" fill="${COL.trait}"/>`,
  `<rect x="190" y="88" width="480" height="26" fill="${COL.jaune}" stroke="${COL.trait}" stroke-width="2"/>`,
  ...Array.from({ length: 25 }, (_, i) => line(200 + i * 19, 88, 200 + i * 19, i % 5 === 0 ? 106 : 98, { w: 1.5 })),
  ...[0, 5, 10, 15, 20].map((v, i) => txt(200 + v * 19, 134, String(v * 10), { size: 13 })),
  txt(350, 40, "Le mètre-ruban (pour les longueurs souples, le tissu, le corps)", { size: 17, italic: true }), txt(430, 175, "Le décamètre à ruban mesure jusqu'à 10 m, le double-décamètre 20 m.", { size: 15 }),
].join(""));
figs.balance_roberval = () => svgDoc(700, 330, [
  `<rect x="300" y="290" width="100" height="18" fill="#777"/>`, line(350, 290, 350, 110, { w: 10, color: "#777" }), line(120, 110, 580, 110, { w: 8, color: "#555" }), `<circle cx="350" cy="110" r="10" fill="${COL.rouge}"/>`,
  line(120, 110, 120, 170, { w: 3 }), line(580, 110, 580, 170, { w: 3 }),
  `<ellipse cx="120" cy="180" rx="95" ry="16" fill="#CFE2F3" stroke="${COL.trait}" stroke-width="3"/><ellipse cx="580" cy="180" rx="95" ry="16" fill="#FFE6CC" stroke="${COL.trait}" stroke-width="3"/>`,
  `<rect x="80" y="130" width="80" height="45" rx="6" fill="#D9EAD3" stroke="${COL.trait}" stroke-width="2"/>`, txt(120, 160, "riz", { size: 16, bold: true }),
  `<rect x="540" y="140" width="34" height="34" fill="#999" stroke="${COL.trait}" stroke-width="2"/><rect x="580" y="150" width="24" height="24" fill="#999" stroke="${COL.trait}" stroke-width="2"/>`, txt(557, 163, "1 kg", { size: 11 }), txt(592, 167, "500 g", { size: 8 }),
  txt(350, 40, "La balance Roberval : équilibre = les deux plateaux à la même hauteur", { size: 17, italic: true }),
  txt(120, 230, "objet à peser", { size: 16 }), txt(580, 230, "masses marquées", { size: 16 }), txt(350, 260, "masse de l'objet = 1 kg + 500 g = 1 500 g = 1,5 kg", { size: 18, bold: true, color: COL.bleu }),
].join(""));
figs.recipient = () => {
  const one = (x, cap, level, label) => {
    const H = 200, y0 = 60, w = 100; const parts = [`<rect x="${x}" y="${y0}" width="${w}" height="${H}" fill="#fff" stroke="${COL.trait}" stroke-width="3"/>`];
    parts.push(`<rect x="${x + 2}" y="${y0 + H - (H * level) / cap}" width="${w - 4}" height="${(H * level) / cap - 2}" fill="#9FC5E8"/>`);
    for (let i = 1; i <= cap; i++) { const y = y0 + H - (H * i) / cap; parts.push(line(x, y, x + 18, y, { w: 2 }), txt(x + 24, y + 5, `${i} L`, { size: 12, anchor: "start" })); }
    parts.push(txt(x + w / 2, y0 + H + 30, label, { size: 16, bold: true, color: COL.bleu }));
    return parts.join("");
  };
  return svgDoc(700, 320, [one(60, 5, 3, "3 L dans un seau de 5 L"), one(300, 2, 1.5, "1,5 L = 15 dL"), one(540, 1, 0.25, "0,25 L = 25 cL"), txt(350, 35, "Lire une capacité sur un récipient gradué", { size: 17, italic: true })].join(""));
};
figs.horloge = (h = 5, m = 48) => {
  const cx = 160, cy = 160, r = 130; const parts = [`<circle cx="${cx}" cy="${cy}" r="${r}" fill="${COL.jaune}" stroke="${COL.trait}" stroke-width="4"/>`];
  for (let i = 0; i < 60; i++) { const a = (i * 6 * Math.PI) / 180; const r1 = i % 5 === 0 ? r - 18 : r - 8; parts.push(line(cx + r1 * Math.sin(a), cy - r1 * Math.cos(a), cx + (r - 2) * Math.sin(a), cy - (r - 2) * Math.cos(a), { w: i % 5 === 0 ? 3 : 1 })); if (i % 5 === 0) parts.push(txt(cx + (r - 36) * Math.sin(a), cy - (r - 36) * Math.cos(a) + 7, String(i === 0 ? 12 : i / 5), { size: 18, bold: true })); }
  const am = (m * 6 * Math.PI) / 180, ah = (((h % 12) * 30 + m / 2) * Math.PI) / 180;
  parts.push(line(cx, cy, cx + 65 * Math.sin(ah), cy - 65 * Math.cos(ah), { w: 8, color: COL.rouge }), line(cx, cy, cx + 100 * Math.sin(am), cy - 100 * Math.cos(am), { w: 5, color: COL.bleu }), `<circle cx="${cx}" cy="${cy}" r="7" fill="${COL.trait}"/>`);
  parts.push(txt(cx, 320, `${h} h ${String(m).padStart(2, "0")}`, { size: 24, bold: true }), txt(420, 120, "petite aiguille (rouge) : les heures", { anchor: "start", size: 16, color: COL.rouge }), txt(420, 160, "grande aiguille (bleue) : les minutes", { anchor: "start", size: 16, color: COL.bleu }), txt(420, 200, "1 tour de la grande aiguille = 60 min = 1 h", { anchor: "start", size: 15 }));
  return svgDoc(720, 340, parts.join(""));
};
figs.fraction_disque = () => {
  const one = (cx, n, k, label) => { const r = 70; const parts = []; for (let i = 0; i < n; i++) { const a1 = (i * 2 * Math.PI) / n - Math.PI / 2, a2 = ((i + 1) * 2 * Math.PI) / n - Math.PI / 2; parts.push(`<path d="M${cx} 120 L${cx + r * Math.cos(a1)} ${120 + r * Math.sin(a1)} A${r} ${r} 0 0 1 ${cx + r * Math.cos(a2)} ${120 + r * Math.sin(a2)} Z" fill="${i < k ? "#E9704F" : "#fff"}" stroke="${COL.trait}" stroke-width="2"/>`); } parts.push(txt(cx, 225, label, { size: 20, bold: true })); return parts.join(""); };
  return svgDoc(700, 250, [one(100, 6, 2, "2/6"), one(280, 4, 3, "3/4"), one(460, 8, 5, "5/8"), one(620, 3, 1, "1/3"), txt(350, 30, "La partie coloriée représente la fraction : parts coloriées / parts égales en tout", { size: 16, italic: true })].join(""));
};
figs.aire_carreaux = () => {
  const parts = []; const x0 = 60, y0 = 50, s = 45;
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) parts.push(`<rect x="${x0 + i * s}" y="${y0 + j * s}" width="${s}" height="${s}" fill="${COL.fill}" stroke="${COL.trait}" stroke-width="1.5"/>`);
  parts.push(`<rect x="${x0}" y="${y0}" width="${6 * s}" height="${4 * s}" fill="none" stroke="${COL.trait}" stroke-width="3"/>`);
  parts.push(txt(x0 + 3 * s, y0 + 4 * s + 30, "L = 6 cm", { bold: true, color: COL.bleu, size: 20 }), txt(x0 + 6 * s + 14, y0 + 2 * s + 8, "l = 4 cm", { anchor: "start", bold: true, color: COL.bleu, size: 20 }));
  parts.push(txt(x0 + 3 * s + 200, y0 + 60, "Chaque carreau mesure 1 cm² ;", { anchor: "start", size: 17 }), txt(x0 + 3 * s + 200, y0 + 90, "on compte 6 × 4 = 24 carreaux", { anchor: "start", size: 17 }), txt(x0 + 3 * s + 200, y0 + 120, "donc l'aire vaut 24 cm².", { anchor: "start", size: 17, bold: true, color: COL.rouge }));
  return svgDoc(720, 290, parts.join(""));
};
figs.hectare = () => svgDoc(700, 330, [
  `<rect x="60" y="50" width="200" height="200" fill="#D9EAD3" stroke="${COL.trait}" stroke-width="3"/>`, txt(160, 40, "100 m", { bold: true, color: COL.bleu }), txt(160, 160, "1 ha", { size: 30, bold: true, color: COL.vert }), txt(160, 190, "= 1 hm²", { size: 18 }), txt(160, 214, "= 10 000 m²", { size: 18 }), txt(270, 155, "100 m", { anchor: "start", bold: true, color: COL.bleu }),
  `<rect x="400" y="150" width="80" height="80" fill="#FFE6CC" stroke="${COL.trait}" stroke-width="3"/>`, txt(440, 140, "10 m", { bold: true, color: COL.bleu, size: 16 }), txt(440, 195, "1 a", { size: 24, bold: true, color: COL.orange }), txt(440, 260, "= 1 dam² = 100 m²", { size: 16 }),
  `<rect x="560" y="210" width="20" height="20" fill="#CFE2F3" stroke="${COL.trait}" stroke-width="2"/>`, txt(570, 200, "1 m", { size: 13, bold: true, color: COL.bleu }), txt(590, 226, "1 ca = 1 m²", { anchor: "start", size: 16, bold: true }),
  txt(350, 300, "Les mesures agraires servent à mesurer les terrains : hectare (ha), are (a), centiare (ca)", { size: 16, italic: true }),
].join(""));
figs.calendrier = () => {
  const parts = [txt(350, 35, "Une année = 12 mois = 52 semaines = 365 jours (366 les années bissextiles)", { size: 16, italic: true })];
  const mois = [["Janvier", 31], ["Février", "28/29"], ["Mars", 31], ["Avril", 30], ["Mai", 31], ["Juin", 30], ["Juillet", 31], ["Août", 31], ["Septembre", 30], ["Octobre", 31], ["Novembre", 30], ["Décembre", 31]];
  mois.forEach(([m, d], i) => { const x = 40 + (i % 6) * 108, y = 60 + Math.floor(i / 6) * 110; parts.push(`<rect x="${x}" y="${y}" width="96" height="90" rx="8" fill="${[31].includes(d) ? "#CFE2F3" : d === 30 ? "#D9EAD3" : "#FFE6CC"}" stroke="${COL.trait}" stroke-width="2"/>`, txt(x + 48, y + 30, m, { size: 14, bold: true }), txt(x + 48, y + 65, `${d} jours`, { size: 15 })); });
  return svgDoc(700, 290, parts.join(""));
};

async function render(name, svg) {
  const file = path.join(OUT, `${name}.png`);
  await sharp(Buffer.from(svg), { density: 144 }).png({ compressionLevel: 9 }).toFile(file);
  return file;
}
async function main() {
  const only = process.argv[2];
  for (const [name, fn] of Object.entries(figs)) {
    if (only && name !== only) continue;
    const f = await render(name, fn());
    console.log("figure :", path.basename(f), (fs.statSync(f).size / 1024).toFixed(0), "Ko");
  }
  // horloges supplémentaires
  for (const [h, m] of [[2, 37], [7, 7], [3, 6], [5, 8], [4, 28]]) { await render(`horloge_${h}_${String(m).padStart(2, "0")}`, figs.horloge(h, m)); }
  console.log("horloges : ok");
}
if (require.main === module) main().catch((e) => { console.error(e); process.exit(1); });
module.exports = { figs, render, OUT };
