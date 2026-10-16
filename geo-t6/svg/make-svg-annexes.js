// make-svg-annexes.js — Cartes muettes pour les annexes du Manuel Géographie T6
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

// ── Cartes muettes U6/annexes ──────────────────────────────────────────
const badge = (x, y, n, c = "#01579B") => `<circle cx="${x}" cy="${y}" r="12" fill="${c}" stroke="#FFF" stroke-width="2"/><text x="${x}" y="${y + 5}" text-anchor="middle" font-size="14" font-weight="bold" fill="#FFF">${n}</text>`;
const ligneLeg = (x, y, n) => `${badge(x + 12, y, n)}${t(x + 44, y + 5, "………………………………", { a: "start", z: 18, c: "#78909C" })}`;
const point = (x, y, r = 3, f = "#37474F") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;

// Carte muette 1 — Les 24 régions
function muetteRegions() {
  // positions locales des 24 régions (ordre des leçons : Centre, Est, Nord/Ouest, Sud)
  const REG = [
    [1, 57, 76], [2, 56, 96], [3, 51, 86], [4, 46, 76], [5, 55, 112], [6, 60, 128],
    [7, 67, 48], [8, 73, 64], [9, 75, 92], [10, 63, 66], [11, 66, 162],
    [12, 52, 14], [13, 63, 30], [14, 46, 52], [15, 43, 93], [16, 37, 72], [17, 32, 102], [18, 32, 132],
    [19, 48, 120], [20, 69, 140], [21, 67, 151], [22, 41, 162], [23, 50, 186], [24, 56, 176],
  ];
  let dots = "";
  for (const [n, lx, ly] of REG) { const [x, y] = L(280, 330, 480, lx, ly); dots += badge(x, y, n); }
  let leg = "";
  for (let i = 0; i < 12; i++) { leg += ligneLeg(430, 150 + i * 38, i + 1) + ligneLeg(710, 150 + i * 38, i + 13); }
  return `${H(1000, 620)}${DEFS}${T("Carte muette : les 24 régions de Madagascar")}
  ${mada(280, 330, 480, { f: "#F1F8E9" })}
  ${dots}
  ${cadre(420, 90, 550, 50, "#FFF8E1")}
  ${t(695, 122, "Consigne : écris le nom de chaque région à côté de son numéro.", { z: 18, b: true, c: "#E65100" })}
  ${leg}
  ${C("Vérifie avec la carte des régions des séances 1 à 6.", 590)}
</svg>`;
}

// Carte muette 2 — La répartition de la population
function muettePopulation() {
  // clusters de points : Hautes Terres (dense), Côte Est (dense), Ouest (clair), Sud (très clair)
  let dots = "";
  const rnd = (a, b) => a + (b - a) * ((Math.sin(a * 37.7 + b * 11.3) + 1) / 2);
  for (let i = 0; i < 26; i++) { const [x, y] = L(300, 330, 420, rnd(48, 63), rnd(72, 118)); dots += point(x, y, 2.6, "#C00000"); }
  for (let i = 0; i < 20; i++) { const [x, y] = L(300, 330, 420, rnd(69, 76), rnd(46, 148)); dots += point(x, y, 2.6, "#C00000"); }
  for (let i = 0; i < 10; i++) { const [x, y] = L(300, 330, 420, rnd(28, 40), rnd(78, 142)); dots += point(x, y, 2.2, "#1E7B34"); }
  for (let i = 0; i < 7; i++) { const [x, y] = L(300, 330, 420, rnd(44, 59), rnd(158, 190)); dots += point(x, y, 2.2, "#1E7B34"); }
  const B = (lx, ly, n) => { const [x, y] = L(300, 330, 420, lx, ly); return badge(x, y, n, "#01579B"); };
  return `${H(1000, 620)}${DEFS}${T("Carte muette : la répartition de la population")}
  ${mada(300, 330, 420, { f: "#F1F8E9" })}
  ${dots}
  ${B(55, 95, 1)}${B(72, 96, 2)}${B(34, 110, 3)}${B(51, 174, 4)}
  ${cadre(430, 90, 540, 50, "#FFF8E1")}
  ${t(700, 122, "Consigne : nomme chaque zone (rouge : très peuplée ; verte : peu peuplée).", { z: 17, b: true, c: "#E65100" })}
  ${ligneLeg(450, 170, 1)}${ligneLeg(450, 210, 2)}${ligneLeg(450, 250, 3)}${ligneLeg(450, 290, 4)}
  ${t(560, 350, "Puis explique avec tes mots :", { z: 18, b: true })}
  ${t(560, 390, "— pourquoi les zones rouges attirent", { z: 17 })}
  ${t(560, 418, "la population ;", { z: 17 })}
  ${t(560, 452, "— pourquoi les zones vertes", { z: 17 })}
  ${t(560, 480, "restent peu peuplées.", { z: 17 })}
  ${C("Vérifie avec la carte des séances 27 à 30.", 590)}
</svg>`;
}

// Carte muette 3 — Les zones économiques
function muetteZones() {
  const Z = [
    [1, 48, 90], [2, 36, 60], [3, 63, 122], [4, 41, 106], [5, 54, 118], [6, 60, 80], [7, 56, 182],
  ];
  const P = [epi(0, 0, 1.3), "", arbre(0, 0, 1), gemme(0, 0, 1.1), sac(0, 0, 1.1, "#FFE0B2"), "", parasol(0, 0, 1)];
  let icons = "";
  for (const [n, lx, ly] of Z) {
    const [x, y] = L(300, 330, 420, lx, ly);
    if (n === 2) icons += poisson(x, y, 1);
    else if (n === 6) icons += immeuble(x, y, 0.42);
    else icons += P[n - 1].replace('translate(0,0)', `translate(${x},${y})`).replace('translate(0.0,0.0)', `translate(${x},${y})`);
    icons += badge(x + 26, y - 22, n, "#C00000");
  }
  return `${H(1000, 620)}${DEFS}${T("Carte muette : les grandes zones économiques")}
  ${mada(300, 330, 420, { f: "#F1F8E9" })}
  ${icons}
  ${cadre(430, 90, 540, 50, "#FFF8E1")}
  ${t(700, 122, "Consigne : écris le nom de chaque zone économique à côté de son numéro.", { z: 16, b: true, c: "#E65100" })}
  ${ligneLeg(450, 165, 1)}${ligneLeg(450, 200, 2)}${ligneLeg(450, 235, 3)}${ligneLeg(450, 270, 4)}
  ${ligneLeg(450, 305, 5)}${ligneLeg(450, 340, 6)}${ligneLeg(450, 375, 7)}
  ${t(560, 430, "Pour chaque zone, cite une activité", { z: 18, b: true })}
  ${t(560, 462, "et un exemple de région malgache.", { z: 18, b: true })}
  ${C("Vérifie avec la carte des séances 51 et 52.", 590)}
</svg>`;
}

// Carte muette 4 — Le village écologique à légender
function muetteVillage() {
  return `${H(1000, 620)}${DEFS}${T("Carte muette : le village écologique à légender")}
  <path d="M 620 190 Q 780 60 940 190 Z" fill="#AED581" stroke="#689F38" stroke-width="3"/>
  ${arbre(700, 150, 1.1)}${arbre(780, 165, 0.9)}${arbre(860, 150, 1)}${arbre(820, 130, 0.7)}
  ${badge(650, 120, 8, "#C00000")}
  ${riviere(60, 130, 340, 110)}
  ${cloture(110, 160, 300)}
  ${goutte(150, 135, 1.6)}
  ${badge(100, 100, 2, "#C00000")}
  ${champ(70, 400, 200, 120, 5)}
  ${t(170, 380, "……………………", { z: 15, c: "#78909C" })}
  ${badge(90, 360, 3, "#C00000")}
  <ellipse cx="380" cy="450" rx="90" ry="34" fill="#4FC3F7" stroke="#0288D1" stroke-width="2"/>
  ${poisson(360, 450, 0.7)}${poisson(400, 455, 0.5)}
  ${badge(300, 410, 4, "#C00000")}
  ${maison(600, 400, 1.3, "#FFE0B2")}${sac(560, 420, 1, "#D7CCC8")}
  ${badge(560, 360, 5, "#C00000")}
  ${maison(470, 240, 1.6, "#B3E5FC")}
  ${badge(430, 200, 6, "#C00000")}
  ${maison(700, 300, 1.4, "#FFF9C4")}
  ${t(700, 340, "……………", { z: 14, c: "#78909C" })}
  ${badge(660, 260, 7, "#C00000")}
  ${poubelle(230, 240, 1)}${poubelle(265, 240, 1)}${poubelle(300, 240, 1)}
  ${badge(230, 200, 1, "#C00000")}
  ${panneauSolaire(870, 320, 0.75)}
  ${badge(840, 270, 9, "#C00000")}
  ${cadre(60, 60, 350, 40, "#FFF8E1")}
  ${t(235, 87, "Consigne : écris le nom de chaque élément du village écologique.", { z: 16, b: true, c: "#E65100" })}
  ${ligneLeg(60, 510, 1)}${ligneLeg(290, 510, 2)}${ligneLeg(520, 510, 3)}
  ${ligneLeg(60, 548, 4)}${ligneLeg(290, 548, 5)}${ligneLeg(520, 548, 6)}
  ${ligneLeg(60, 586, 7)}${ligneLeg(290, 586, 8)}${ligneLeg(520, 586, 9)}
  ${C("Vérifie avec les schémas des séances 67 à 76.", 612)}
</svg>`;
}

const SVG = {
  geo6_carte_muette_regions: muetteRegions(),
  geo6_carte_muette_population: muettePopulation(),
  geo6_carte_muette_zones: muetteZones(),
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
