// make-svg-annexes.js — Cartes muettes pour les annexes du Manuel Géographie T6 (contour réaliste de Madagascar)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";

const H = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const cadre = (x, y, w, h, f = "#EAF4FB") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${f}" stroke="#90A4AE" stroke-width="3"/>`;
const T = (t, w = 1000) => `<text x="${w / 2}" y="52" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${t}</text>`;
const C = (t, y = 545, w = 1000) => `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.z || 21}" fill="${o.c || "#263238"}"${o.b ? ' font-weight="bold"' : ""}${o.i ? ' font-style="italic"' : ""}>${s}</text>`;
const fle = (x1, y1, x2, y2, c = "#546E7A", sw = 5, m = "af") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" marker-end="url(#${m})"/>`;
const DEFS = `<defs><marker id="af" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#546E7A"/></marker>
<marker id="afR" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#C00000"/></marker>
<marker id="afV" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1E7B34"/></marker>
<marker id="afB" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#01579B"/></marker></defs>`;

const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const madaT = (cx, cy, h) => `translate(${cx} ${cy}) scale(${h / 200}) translate(-50 -100)`;
const mada = (cx, cy, h, o = {}) => `<g transform="${madaT(cx, cy, h)}"><path d="${MADA}" fill="${o.f || "#EFEBE9"}" stroke="${o.s || "#8D6E63"}" stroke-width="${(o.sw || 3) / (h / 200)}" stroke-linejoin="round"/></g>`;
const L = (cx, cy, h, lx, ly) => [cx + (lx - 50) * h / 200, cy + (ly - 100) * h / 200];
const tL = (cx, cy, h, lx, ly, s, o = {}) => { const [x, y] = L(cx, cy, h, lx, ly); return t(x, y, s, o); };

// pictos
const arbre = (x, y, s = 1, f = "#2E7D32") => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-4" y="8" width="8" height="20" fill="#6D4C41"/><circle cx="0" cy="0" r="18" fill="${f}"/><circle cx="-13" cy="8" r="13" fill="${f}"/><circle cx="13" cy="8" r="13" fill="${f}"/></g>`;
const maison = (x, y, s = 1, f = "#FFE0B2") => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-16" y="-6" width="32" height="22" fill="${f}" stroke="#8D6E63" stroke-width="2"/><path d="M -20 -6 L 0 -22 L 20 -6 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/></g>`;
const immeuble = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-30" y="-8" width="20" height="34" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><rect x="-6" y="-28" width="16" height="54" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><rect x="14" y="2" width="18" height="24" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/><rect x="-4" y="-20" width="6" height="6" fill="#FFF"/><rect x="4" y="-20" width="6" height="6" fill="#FFF"/><rect x="-4" y="-10" width="6" height="6" fill="#FFF"/><rect x="4" y="-10" width="6" height="6" fill="#FFF"/></g>`;
const bonhomme = (x, y, s = 1, f = "#37474F") => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-16" r="6" fill="${f}"/><line x1="0" y1="-10" x2="0" y2="6" stroke="${f}" stroke-width="5" stroke-linecap="round"/><line x1="0" y1="6" x2="-6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="6" x2="6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="-6" x2="-8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="-6" x2="8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/></g>`;
const zebu = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="24" ry="13" fill="#8D6E63"/><circle cx="26" cy="-10" r="8" fill="#8D6E63"/><path d="M 20 -16 L 26 -26 L 32 -16" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/><path d="M -24 -2 Q -34 -14 -26 -20" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/><line x1="-12" y1="12" x2="-12" y2="24" stroke="#5D4037" stroke-width="4"/><line x1="10" y1="12" x2="10" y2="24" stroke="#5D4037" stroke-width="4"/></g>`;
const poisson = (x, y, s = 1, f = "#0288D1") => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="20" ry="10" fill="${f}"/><path d="M 18 0 L 30 -9 L 30 9 Z" fill="${f}"/><circle cx="-10" cy="-2" r="2.5" fill="#FFF"/></g>`;
const pirogue = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -40 0 Q 0 18 40 0 L 30 8 Q 0 22 -30 8 Z" fill="#8D6E63"/><line x1="0" y1="-2" x2="0" y2="-40" stroke="#6D4C41" stroke-width="3"/><path d="M 0 -40 L 26 -6 L 0 -6 Z" fill="#FFF9C4" stroke="#C0A16B" stroke-width="2"/></g>`;
const navire = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -50 0 L 50 0 L 38 18 L -38 18 Z" fill="#546E7A"/><rect x="-14" y="-34" width="28" height="34" fill="#FFFFFF" stroke="#546E7A" stroke-width="2"/><rect x="16" y="-24" width="14" height="24" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><rect x="-30" y="-18" width="12" height="18" fill="#FFCA28" stroke="#546E7A" stroke-width="2"/></g>`;
const avion = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -34 0 L 30 -4 L 40 0 L 30 4 Z" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><path d="M -6 -2 L 6 -24 L 12 -22 L 6 -2 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><path d="M -6 2 L 6 24 L 12 22 L 6 2 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><path d="M -34 -2 L -44 -14 L -38 -14 L -30 -2 Z" fill="#90A4AE"/></g>`;
const train = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-38" y="-18" width="60" height="24" rx="4" fill="#C62828" stroke="#8E0000" stroke-width="2"/><rect x="26" y="-10" width="24" height="16" rx="3" fill="#EFEBE9" stroke="#8E0000" stroke-width="2"/><circle cx="-24" cy="10" r="8" fill="#37474F"/><circle cx="8" cy="10" r="8" fill="#37474F"/><circle cx="42" cy="10" r="8" fill="#37474F"/><rect x="-28" y="-12" width="12" height="10" fill="#FFF9C4"/></g>`;
const sac = (x, y, s = 1, f = "#D7CCC8") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -14 0 L 14 0 L 11 24 L -11 24 Z" fill="${f}" stroke="#8D6E63" stroke-width="2"/><path d="M -8 0 Q 0 -12 8 0" fill="none" stroke="#8D6E63" stroke-width="2"/></g>`;
const gemme = (x, y, s = 1, f = "#7C4DFF") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 -14 L 12 -4 L 0 14 L -12 -4 Z" fill="${f}" stroke="#4527A0" stroke-width="2"/><path d="M -12 -4 L 12 -4" stroke="#4527A0" stroke-width="1.5"/></g>`;
const balle = (x, y, r = 16, f = "#8D6E63") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="#5D4037" stroke-width="3"/>`;
const parasol = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -30 0 A 30 30 0 0 1 30 0 Z" fill="#FF7043" stroke="#D84315" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="34" stroke="#6D4C41" stroke-width="3"/></g>`;
const soleil = (cx, cy, r) => { let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; s += `<line x1="${cx + (r + 6) * Math.cos(a)}" y1="${cy + (r + 6) * Math.sin(a)}" x2="${cx + (r + 16) * Math.cos(a)}" y2="${cy + (r + 16) * Math.sin(a)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`; } return s; };
const riviere = (x1, y1, x2, y2, c = "#4FC3F7") => `<path d="M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 30} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`;
const champ = (x, y, w, h, n = 4) => { let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#AED581" stroke="#689F38" stroke-width="2"/>`; for (let i = 1; i < n; i++) s += `<line x1="${x}" y1="${y + (h / n) * i}" x2="${x + w}" y2="${y + (h / n) * i}" stroke="#689F38" stroke-width="2"/>`; return s; };
const epi = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><line x1="0" y1="0" x2="0" y2="-26" stroke="#C0A16B" stroke-width="2"/><ellipse cx="0" cy="-26" rx="5" ry="8" fill="#FFD54F"/><ellipse cx="-5" cy="-18" rx="4" ry="7" fill="#FFD54F"/><ellipse cx="5" cy="-18" rx="4" ry="7" fill="#FFD54F"/><ellipse cx="-5" cy="-10" rx="4" ry="6" fill="#FFD54F"/><ellipse cx="5" cy="-10" rx="4" ry="6" fill="#FFD54F"/></g>`;

const goutte = (x, y, s = 1, f = "#4FC3F7") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 -18 C 10 -4 14 2 14 8 A 14 14 0 1 1 -14 8 C -14 2 -10 -4 0 -18 Z" fill="${f}" stroke="#0277BD" stroke-width="2"/></g>`;
const poubelle = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-14" y="-8" width="28" height="26" rx="3" fill="#78909C" stroke="#455A64" stroke-width="2"/><rect x="-17" y="-12" width="34" height="5" rx="2" fill="#455A64"/><line x1="-6" y1="-2" x2="-6" y2="14" stroke="#455A64" stroke-width="2"/><line x1="6" y1="-2" x2="6" y2="14" stroke="#455A64" stroke-width="2"/></g>`;
const panneauSolaire = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-24" y="-16" width="48" height="32" fill="#01579B" stroke="#0277BD" stroke-width="2"/><line x1="0" y1="-16" x2="0" y2="16" stroke="#4FC3F7" stroke-width="2"/><line x1="-24" y1="0" x2="24" y2="0" stroke="#4FC3F7" stroke-width="2"/><line x1="-24" y1="-16" x2="-32" y2="-30" stroke="#546E7A" stroke-width="4"/><line x1="-24" y1="-16" x2="-14" y2="-30" stroke="#546E7A" stroke-width="4"/><line x1="0" y1="16" x2="0" y2="30" stroke="#546E7A" stroke-width="4"/></g>`;
const cloture = (x1, y, x2, c = "#8D6E63") => { let s = `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c}" stroke-width="3"/>`; for (let x = x1; x <= x2; x += 24) s += `<line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 10}" stroke="${c}" stroke-width="3"/>`; return s; };

// ── Contour réaliste de Madagascar (coordonnées géographiques réelles) ──
// Projection linéaire lat/lon -> SVG ; ratio réel N-S/E-O ≈ 1.93
const LAT0 = -11.8, LAT1 = -25.7, LON0 = 43.0, LON1 = 50.6;

const REAL_COAST = [
  [-11.95, 49.26], [-12.28, 49.32], [-12.53, 49.45], [-13.65, 50.00], [-14.27, 50.03],
  [-14.88, 50.27], [-15.35, 50.50], [-15.98, 50.23], [-15.60, 49.75], [-16.17, 49.87],
  [-17.15, 49.44], [-18.15, 49.42], [-19.90, 48.81], [-21.23, 48.35], [-22.15, 48.02],
  [-22.79, 47.85], [-23.85, 47.55], [-25.03, 46.99], [-25.59, 45.16], [-24.68, 43.95],
  [-23.35, 43.67], [-21.75, 43.37], [-20.28, 44.28], [-19.45, 44.45], [-18.06, 44.03],
  [-17.00, 44.45], [-14.63, 47.76], [-13.68, 48.45], [-12.55, 49.05],
];

function madaProj(cx, cy, h) {
  const w = h / 1.93;
  return (lat, lon) => [
    cx + (lon - (LON0 + LON1) / 2) / (LON1 - LON0) * w,
    cy + (lat - (LAT0 + LAT1) / 2) / (LAT1 - LAT0) * h,
  ];
}

// Silhouette réaliste de Madagascar + Nosy Be + Sainte-Marie
function madaR(cx, cy, h, o = {}) {
  const P = madaProj(cx, cy, h);
  const d = REAL_COAST.map(([la, lo], i) => {
    const [x, y] = P(la, lo);
    return (i ? "L" : "M") + x.toFixed(1) + " " + y.toFixed(1);
  }).join(" ") + " Z";
  const f = o.f || "#F1F8E9", s = o.s || "#8D6E63";
  let out = `<path d="${d}" fill="${f}" stroke="${s}" stroke-width="${o.sw || 3}" stroke-linejoin="round"/>`;
  const [nbx, nby] = P(-13.32, 48.26);
  out += `<ellipse cx="${nbx.toFixed(1)}" cy="${nby.toFixed(1)}" rx="7" ry="5" fill="${f}" stroke="${s}" stroke-width="2"/>`;
  const [smx, smy] = P(-16.9, 49.86);
  out += `<ellipse cx="${smx.toFixed(1)}" cy="${smy.toFixed(1)}" rx="3.5" ry="10" fill="${f}" stroke="${s}" stroke-width="2"/>`;
  return out;
}

// Les 24 régions, badge placé sur le chef-lieu (coordonnées réelles)
// Ordre = ordre des leçons : Centre (S2) 1-6, Est (S3) 7-11, Nord/Ouest (S4) 12-18, Sud (S5) 19-24
const REG24 = [
  ["Analamanga", -18.91, 47.51], ["Vakinankaratra", -19.87, 47.03], ["Itasy", -19.30, 46.55],
  ["Bongolava", -18.10, 45.35], ["Amoron'i Mania", -20.53, 47.24], ["Haute Matsiatra", -21.44, 47.09],
  ["Ambatosoa", -15.30, 49.80], ["Analanjirofo", -17.05, 49.43], ["Atsinanana", -18.45, 49.25],
  ["Alaotra-Mangoro", -17.60, 48.20], ["Atsimo-Atsinanana", -23.00, 47.60],
  ["DIANA", -12.35, 49.20], ["SAVA", -14.30, 50.00], ["Sofia", -14.90, 47.80],
  ["Betsiboka", -16.60, 46.75], ["Boeny", -15.72, 46.32], ["Melaky", -17.90, 44.35],
  ["Menabe", -20.00, 44.40],
  ["Ihorombe", -22.40, 46.12], ["Vatovavy", -21.10, 48.20], ["Fitovinany", -22.35, 47.45],
  ["Atsimo-Andrefana", -23.30, 43.80], ["Androy", -25.20, 45.90], ["Anosy", -24.90, 46.99],
];

const badge = (x, y, n, c = "#01579B", r = 12) => `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r}" fill="${c}" stroke="#FFF" stroke-width="2"/><text x="${x.toFixed(1)}" y="${(y + 4).toFixed(1)}" text-anchor="middle" font-size="${r >= 11 ? 14 : 12}" font-weight="bold" fill="#FFF">${n}</text>`;
const ligneLeg = (x, y, n) => `${badge(x + 12, y, n)}${t(x + 34, y + 5, "………………………………", { a: "start", z: 18, c: "#78909C" })}`;

// ── Carte 1 : les 24 régions ──
function muetteRegions() {
  let dots = "";
  REG24.forEach(([nom, la, lo], i) => {
    const [x, y] = madaProj(280, 330, 460)(la, lo);
    dots += badge(x, y, i + 1, "#01579B", 10);
  });
  let leg = "";
  for (let i = 0; i < 24; i++) {
    const col = Math.floor(i / 8), lig = i % 8;
    leg += ligneLeg(470 + col * 180, 150 + lig * 52, i + 1);
  }
  return `${H(1000, 660)}${DEFS}${T("Carte muette : les 24 régions de Madagascar")}
  ${madaR(280, 330, 460)}
  ${dots}
  ${cadre(460, 90, 520, 50, "#FFF8E1")}
  ${t(720, 122, "Chaque numéro marque le chef-lieu de la région.", { z: 17, b: true, c: "#E65100" })}
  ${t(720, 142, "Consigne : écris le nom de chaque région.", { z: 17, b: true, c: "#E65100" })}
  ${leg}
  ${t(720, 615, "Vérifie avec les cartes des séances 1 à 6.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 2 : la répartition de la population ──
function muettePopulation() {
  const P = madaProj(300, 330, 460);
  const rnd = (a, b, s) => a + (b - a) * ((Math.sin(a * 37.7 + b * 11.3 + s * 7.3) + 1) / 2);
  let dots = "";
  // Hautes Terres (très dense) + vallée de l'est de Tana
  for (let i = 0; i < 24; i++) { const [x, y] = P(rnd(-19.8, -18.4, i), rnd(46.6, 47.9, i + 40)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="#C00000"/>`; }
  for (let i = 0; i < 8; i++) { const [x, y] = P(rnd(-21.6, -20.2, i), rnd(46.7, 47.3, i + 80)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="#C00000"/>`; }
  for (let i = 0; i < 6; i++) { const [x, y] = P(rnd(-18.2, -17.3, i), rnd(48.1, 48.6, i + 120)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="#C00000"/>`; }
  // Côte Est (dense)
  for (let i = 0; i < 16; i++) { const [x, y] = P(rnd(-22.5, -13.8, i), rnd(49.2, 50.0, i + 160)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="#C00000"/>`; }
  // Nord (Diego) et Nord-Ouest (Mahajanga)
  for (let i = 0; i < 4; i++) { const [x, y] = P(rnd(-13.3, -12.4, i), rnd(49.1, 49.3, i + 200)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="#C00000"/>`; }
  for (let i = 0; i < 3; i++) { const [x, y] = P(rnd(-16.2, -15.4, i), rnd(46.1, 46.4, i + 240)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.4" fill="#C00000"/>`; }
  // Ouest et Sud (peu dense)
  for (let i = 0; i < 8; i++) { const [x, y] = P(rnd(-20.5, -16.5, i), rnd(43.8, 45.3, i + 280)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#1E7B34"/>`; }
  for (let i = 0; i < 6; i++) { const [x, y] = P(rnd(-25.0, -23.0, i), rnd(43.9, 45.6, i + 320)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#1E7B34"/>`; }
  for (let i = 0; i < 5; i++) { const [x, y] = P(rnd(-24.8, -22.6, i), rnd(45.7, 47.0, i + 360)); dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.2" fill="#1E7B34"/>`; }
  const B = (la, lo, n) => { const [x, y] = P(la, lo); return badge(x, y, n, "#01579B"); };
  return `${H(1000, 660)}${DEFS}${T("Carte muette : la répartition de la population")}
  ${madaR(300, 330, 460)}
  ${dots}
  ${B(-19.2, 47.2, 1)}${B(-17.5, 49.6, 2)}${B(-18.5, 44.5, 3)}${B(-23.8, 45.2, 4)}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "Points rouges : zones très peuplées ; points verts : zones peu peuplées.", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "Consigne : nomme chaque zone numérotée, puis explique pourquoi.", { z: 15, b: true, c: "#E65100" })}
  ${ligneLeg(500, 210, 1)}${ligneLeg(500, 262, 2)}
  ${ligneLeg(500, 314, 3)}${ligneLeg(500, 366, 4)}
  ${t(720, 440, "Puis complète :", { z: 18, b: true })}
  ${t(720, 476, "« La population malgache est inégalement ………… :", { z: 17 })}
  ${t(720, 508, "les plaines et les villes attirent, l'intérieur", { z: 17 })}
  ${t(720, 540, "sec et le Grand Sud restent ………… . »", { z: 17 })}
  ${t(720, 615, "Vérifie avec les cartes des séances 27 à 30.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 3 : les grandes villes ──
function muetteVilles() {
  const P = madaProj(300, 330, 460);
  const VILLES = [
    ["Antananarivo", -18.91, 47.51, "capitale"],
    ["Toamasina", -18.15, 49.42], ["Mahajanga", -15.72, 46.32], ["Antsirabe", -19.87, 47.03],
    ["Fianarantsoa", -21.44, 47.09], ["Toliara", -23.35, 43.67], ["Antsiranana", -12.28, 49.29],
  ];
  let marks = "";
  VILLES.forEach(([nom, la, lo], i) => {
    const [x, y] = P(la, lo);
    if (i === 0) {
      marks += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="13" fill="#C00000" stroke="#FFF" stroke-width="2"/>`;
      marks += `<path d="M ${x.toFixed(1)} ${(y - 9).toFixed(1)} L ${(x + 3.2).toFixed(1)} ${(y - 2.5).toFixed(1)} L ${(x + 10).toFixed(1)} ${(y - 2.5).toFixed(1)} L ${(x + 4.5).toFixed(1)} ${(y + 1.8).toFixed(1)} L ${(x + 6.5).toFixed(1)} ${(y + 8.5).toFixed(1)} L ${x.toFixed(1)} ${(y + 4.5).toFixed(1)} L ${(x - 6.5).toFixed(1)} ${(y + 8.5).toFixed(1)} L ${(x - 4.5).toFixed(1)} ${(y + 1.8).toFixed(1)} L ${(x - 10).toFixed(1)} ${(y - 2.5).toFixed(1)} L ${(x - 3.2).toFixed(1)} ${(y - 2.5).toFixed(1)} Z" fill="#FFD54F" stroke="#C00000" stroke-width="1.5"/>`;
    } else {
      marks += badge(x, y, i);
    }
  });
  return `${H(1000, 660)}${DEFS}${T("Carte muette : les grandes villes de Madagascar")}
  ${madaR(300, 330, 460)}
  ${marks}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "L'étoile marque la capitale ; les numéros marquent les grandes villes.", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "Consigne : écris le nom de la capitale et des six villes numérotées.", { z: 15, b: true, c: "#E65100" })}
  ${ligneLeg(500, 210, 1)}${ligneLeg(500, 262, 2)}${ligneLeg(500, 314, 3)}
  ${ligneLeg(740, 210, 4)}${ligneLeg(740, 262, 5)}${ligneLeg(740, 314, 6)}
  ${t(720, 400, "À retenir :", { z: 18, b: true })}
  ${t(720, 436, "« La ville où siège le chef-lieu de ma région", { z: 17 })}
  ${t(720, 468, "s'appelle ………… et c'est la ville ………… . »", { z: 17 })}
  ${t(720, 615, "Vérifie avec les séances 2 à 5 et 27 à 30.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 4 : les ressources naturelles ──
function muetteRessources() {
  const P = madaProj(300, 330, 460);
  const items = [
    [1, -17.5, 48.25, () => goutte(0, 0, 1.5), "l'eau : lacs et rivières"],
    [2, -16.6, 49.9, () => arbre(0, 0, 1.1), "la forêt dense de l'Est"],
    [3, -19.4, 46.4, () => champ(0, 0, 60, 44, 3), "les sols : rizières et champs"],
    [4, -15.5, 45.6, () => poisson(0, 0, 1.1), "les ressources de la mer"],
    [5, -22.6, 45.4, () => gemme(0, 0, 1.3), "les minerais et les pierres"],
    [6, -24.3, 47.4, () => soleil(0, 0, 14), "le soleil, énergie renouvelable"],
  ];
  let icons = "";
  items.forEach(([n, la, lo, fn]) => {
    const [x, y] = P(la, lo);
    icons += fn().replace(/translate\(([\d.-]+),([\d.-]+)\)/, `translate(${x.toFixed(1)},${y.toFixed(1)})`);
    icons += badge(x + 24, y - 20, n, "#C00000");
  });
  return `${H(1000, 660)}${DEFS}${T("Carte muette : les ressources naturelles")}
  ${madaR(300, 330, 460)}
  ${icons}
  ${riviere(...P(-16.9, 49.0), ...P(-19.6, 46.9))}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "Consigne : pour chaque numéro, nomme la ressource naturelle,", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "puis dis si elle est renouvelable ou non renouvelable.", { z: 15, b: true, c: "#E65100" })}
  ${items.map(([n], i) => ligneLeg(500 + (i % 2) * 240, 210 + Math.floor(i / 2) * 62, n)).join("\n  ")}
  ${t(720, 490, "Coche dans la liste : renouvelable ☐  ou  non renouvelable ☐", { z: 16, b: true })}
  ${t(720, 615, "Vérifie avec les séances 11 à 13.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 5 : les zones économiques ──
function muetteZones() {
  const P = madaProj(300, 330, 460);
  const items = [
    [1, -19.3, 47.1, () => epi(0, 0, 1.5), "la zone agricole"],
    [2, -21.6, 47.7, () => sac(0, 0, 1.2, "#FFE0B2"), "la zone artisanale"],
    [3, -18.8, 47.6, () => immeuble(0, 0, 0.42), "la zone industrielle"],
    [4, -16.6, 49.85, () => arbre(0, 0, 1.1), "la zone forestière"],
    [5, -22.6, 45.3, () => gemme(0, 0, 1.3), "la zone minière"],
    [6, -16.6, 45.9, () => poisson(0, 0, 1.2), "la zone de pêche"],
    [7, -13.32, 48.26, () => parasol(0, 0, 1.15), "la zone touristique"],
  ];
  let icons = "";
  items.forEach(([n, la, lo, fn]) => {
    const [x, y] = P(la, lo);
    icons += fn().replace(/translate\(([\d.-]+),([\d.-]+)\)/, `translate(${x.toFixed(1)},${y.toFixed(1)})`);
    icons += badge(x + 24, y - 20, n, "#C00000");
  });
  return `${H(1000, 660)}${DEFS}${T("Carte muette : les grandes zones économiques")}
  ${madaR(300, 330, 460)}
  ${icons}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "Consigne : nomme la zone économique de chaque numéro,", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "puis cite une activité et un exemple de région.", { z: 15, b: true, c: "#E65100" })}
  ${items.map(([n], i) => ligneLeg(500, 210 + i * 50, n)).join("\n  ")}
  ${t(720, 600, "Vérifie avec les séances 51 et 52.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 6 : l'exode rural ──
function muetteExode() {
  const P = madaProj(300, 330, 460);
  const V = (la, lo) => P(la, lo).map((v) => +v.toFixed(1));
  const villes = [[-18.91, 47.51, "étoile"], [-18.15, 49.42], [-15.72, 46.32], [-19.87, 47.03], [-21.44, 47.09], [-12.28, 49.29]];
  let marks = "";
  villes.forEach(([la, lo], i) => {
    const [x, y] = V(la, lo);
    if (i === 0) marks += `<circle cx="${x}" cy="${y}" r="12" fill="#C00000" stroke="#FFF" stroke-width="2"/>`;
    else marks += `<circle cx="${x}" cy="${y}" r="9" fill="#C00000" stroke="#FFF" stroke-width="2"/>`;
  });
  // flèches campagnes -> villes
  const fleches = [
    [[-16.4, 45.9], [-18.2, 47.2]], [[-19.6, 45.2], [-19.0, 47.3]], // vers Antananarivo (Ouest, Sud-Ouest)
    [[-16.8, 47.9], [-17.9, 49.2]],                                  // vers Toamasina
    [[-16.8, 45.5], [-15.9, 46.2]],                                  // vers Mahajanga
    [[-20.6, 48.2], [-20.1, 47.4]],                                  // vers Antsirabe... (via Brickaville?) non: depuis Atsinanana sud
    [[-22.6, 47.5], [-21.8, 47.2]],                                  // vers Fianarantsoa
    [[-13.6, 48.9], [-12.7, 49.2]],                                  // vers Antsiranana
  ];
  let fl = "";
  fleches.forEach(([[a, b], [c, d]]) => { const [x1, y1] = V(a, b), [x2, y2] = V(c, d); fl += fle(x1, y1, x2, y2, "#C00000", 4, "afR"); });
  return `${H(1000, 660)}${DEFS}${T("Carte muette : l'exode rural à Madagascar")}
  ${madaR(300, 330, 460)}
  ${fl}
  ${marks}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "Les flèches rouges montrent le départ des campagnes vers les villes.", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "Consigne : nomme les villes d'arrivée, puis donne deux causes et deux", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 176, "conséquences de l'exode rural.", { z: 15, b: true, c: "#E65100" })}
  ${ligneLeg(500, 230, 1)}${ligneLeg(740, 230, 2)}${ligneLeg(500, 282, 3)}${ligneLeg(740, 282, 3 + 1)}
  ${ligneLeg(500, 334, 5)}${ligneLeg(740, 334, 6)}
  ${t(720, 410, "Causes : ……………………………………………………", { z: 17 })}
  ${t(720, 448, "……………………………………………………………………", { z: 17, c: "#78909C" })}
  ${t(720, 486, "Conséquences à la campagne : …………", { z: 17 })}
  ${t(720, 524, "Conséquences à la ville : ……………………………", { z: 17 })}
  ${t(720, 615, "Vérifie avec les séances 39 à 48.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 7 : les voies de communication ──
function muetteVoies() {
  const P = madaProj(300, 330, 460);
  const V = (la, lo) => P(la, lo).map((v) => +v.toFixed(1));
  // routes nationales principales (lignes brunes) et chemin de fer (pointillé)
  const RN2 = [[-18.91, 47.51], [-18.83, 48.44], [-18.15, 49.42]];
  const RN4 = [[-18.91, 47.51], [-17.88, 46.99], [-16.95, 46.83], [-15.72, 46.32]];
  const RN7 = [[-18.91, 47.51], [-19.87, 47.03], [-20.53, 47.24], [-21.44, 47.09], [-22.4, 46.12], [-23.35, 43.67]];
  const RAIL = [[-18.91, 47.51], [-18.6, 48.3], [-18.15, 49.42]];
  const ligne = (pts, c, sw, dash) => {
    let d = pts.map(([la, lo], i) => { const [x, y] = V(la, lo); return (i ? "L" : "M") + x + " " + y; }).join(" ");
    return `<path d="${d}" fill="none" stroke="${c}" stroke-width="${sw}" ${dash ? `stroke-dasharray="${dash}"` : ""} stroke-linecap="round"/>`;
  };
  const villes = [[-18.91, 47.51, 1], [-18.15, 49.42, 2], [-15.72, 46.32, 3], [-19.87, 47.03, 4], [-21.44, 47.09, 5], [-23.35, 43.67, 6]];
  let marks = "";
  villes.forEach(([la, lo, n]) => { const [x, y] = V(la, lo); marks += badge(x, y, n, "#6D4C41"); });
  const [ax, ay] = V(-18.6, 47.9);
  return `${H(1000, 660)}${DEFS}${T("Carte muette : les voies de communication")}
  ${madaR(300, 330, 460)}
  ${ligne(RN2, "#8D6E63", 4)}${ligne(RN4, "#8D6E63", 4)}${ligne(RN7, "#8D6E63", 4)}
  ${ligne(RAIL, "#37474F", 3, "8 6")}
  ${marks}
  ${navire(...V(-15.4, 46.1), 0.55)}${navire(...V(-18.0, 49.55), 0.5)}
  ${avion(ax - 60, ay - 40, 0.5)}
  ${fle(ax - 40, ay - 34, ax - 18, ay - 20, "#546E7A", 3)}
  ${cadre(470, 110, 500, 50, "#FFF8E1")}
  ${t(720, 136, "Consigne : nomme les villes numérotées, puis indique vers quelle ville", { z: 15, b: true, c: "#E65100" })}
  ${t(720, 156, "mène chaque route, où passe le chemin de fer et quels sont les ports.", { z: 15, b: true, c: "#E65100" })}
  ${ligneLeg(500, 210, 1)}${ligneLeg(740, 210, 2)}${ligneLeg(500, 262, 3)}
  ${ligneLeg(740, 262, 4)}${ligneLeg(500, 314, 5)}${ligneLeg(740, 314, 6)}
  ${t(500, 380, "La route relie ………… à ………… ;", { z: 17 })}
  ${t(500, 418, "le chemin de fer relie ………… à ………… ;", { z: 17 })}
  ${t(500, 456, "les navires marquent les ………… .", { z: 17 })}
  ${t(720, 615, "Vérifie avec la séance 63 (transport) et les séances 51-52.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

// ── Carte 8 : le village écologique à légender ──
function muetteVillage() {
  return `${H(1000, 660)}${DEFS}${T("Carte muette : le village écologique à légender")}
  <path d="M 600 210 Q 760 70 930 210 Z" fill="#AED581" stroke="#689F38" stroke-width="3"/>
  ${arbre(690, 160, 1.1)}${arbre(770, 175, 0.9)}${arbre(850, 160, 1)}${arbre(810, 135, 0.7)}
  ${badge(630, 130, 8, "#C00000")}
  ${riviere(60, 150, 340, 130)}
  ${cloture(110, 180, 300)}
  ${goutte(150, 155, 1.6)}
  ${badge(95, 120, 2, "#C00000")}
  ${champ(70, 420, 200, 120, 5)}
  ${badge(90, 380, 3, "#C00000")}
  <ellipse cx="380" cy="470" rx="90" ry="34" fill="#4FC3F7" stroke="#0288D1" stroke-width="2"/>
  ${poisson(360, 470, 0.7)}${poisson(400, 475, 0.5)}
  ${badge(300, 428, 4, "#C00000")}
  ${maison(600, 420, 1.3, "#FFE0B2")}${sac(560, 440, 1, "#D7CCC8")}
  ${badge(555, 380, 5, "#C00000")}
  ${maison(470, 260, 1.6, "#B3E5FC")}
  ${badge(430, 218, 6, "#C00000")}
  ${maison(700, 320, 1.4, "#FFF9C4")}
  ${badge(660, 280, 7, "#C00000")}
  ${poubelle(230, 260, 1)}${poubelle(265, 260, 1)}${poubelle(300, 260, 1)}
  ${badge(230, 218, 1, "#C00000")}
  ${panneauSolaire(870, 340, 0.75)}
  ${badge(840, 288, 9, "#C00000")}
  ${cadre(60, 60, 350, 40, "#FFF8E1")}
  ${t(235, 87, "Consigne : écris le nom de chaque élément du village écologique.", { z: 16, b: true, c: "#E65100" })}
  ${ligneLeg(60, 530, 1)}${ligneLeg(290, 530, 2)}${ligneLeg(520, 530, 3)}
  ${ligneLeg(60, 572, 4)}${ligneLeg(290, 572, 5)}${ligneLeg(520, 572, 6)}
  ${ligneLeg(60, 614, 7)}${ligneLeg(290, 614, 8)}${ligneLeg(520, 614, 9)}
  ${t(720, 430, "Aide-toi des mots suivants :", { z: 17, b: true })}
  ${t(720, 468, "dépôt de tri — source clôturée —", { z: 16, c: "#546E7A" })}
  ${t(720, 496, "rizières — étang piscicole — atelier", { z: 16, c: "#546E7A" })}
  ${t(720, 524, "de raphia — marché — école —", { z: 16, c: "#546E7A" })}
  ${t(720, 552, "colline replantée — panneaux solaires", { z: 16, c: "#546E7A" })}
  ${t(720, 615, "Vérifie avec les schémas des séances 67 à 76.", { z: 17, i: true, c: "#546E7A" })}
</svg>`;
}

const SVG = {
  geo6_carte_muette_regions: muetteRegions(),
  geo6_carte_muette_population: muettePopulation(),
  geo6_carte_muette_villes: muetteVilles(),
  geo6_carte_muette_ressources: muetteRessources(),
  geo6_carte_muette_zones: muetteZones(),
  geo6_carte_muette_exode: muetteExode(),
  geo6_carte_muette_voies: muetteVoies(),
  geo6_carte_muette_village: muetteVillage(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    fs.writeFileSync(path.join(OUT, "svg", `${name}.svg`), svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(REPO, `${name}.png`));
    console.log(`OK ${name}.png`);
  }
})();
