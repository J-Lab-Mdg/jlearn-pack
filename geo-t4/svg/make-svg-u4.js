// make-svg-u4.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T4
// UNITÉ 4 : L'ENVIRONNEMENT (Séances 39 à 54)
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const DEFS = `
  <defs>
    <marker id="arrR" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#C00000"/></marker>
    <marker id="arrK" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#37474F"/></marker>
    <marker id="arrG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#2E7D32"/></marker>
  </defs>`;
const panel = (x, y, w, h, fill = "#EAF4FB") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}" stroke="#90A4AE" stroke-width="3"/>`;
const caption = (w, y, t) =>
  `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const title = (w, t) =>
  `<text x="${w / 2}" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">${t}</text>`;
const lbl = (x, y, t, size = 21, color = "#37474F") =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="bold" fill="${color}">${t}</text>`;

// ── briques de dessin ──────────────────────────────────────────────────
const tree = (x, y, s = 1, c = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="0" width="8" height="26" fill="#6D4C41"/>
    <circle cx="0" cy="-12" r="22" fill="${c}" stroke="#1B5E20" stroke-width="2"/>
  </g>`;
const zebu = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="34" ry="18" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2.5"/>
    <circle cx="-18" cy="-16" r="10" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2.5"/>
    <rect x="-36" y="-12" width="14" height="12" rx="4" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -40 -18 L -46 -26 M -36 -18 L -33 -28" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
    <line x1="-20" y1="16" x2="-20" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="-4" y1="16" x2="-4" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="12" y1="16" x2="12" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="24" y1="16" x2="24" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
  </g>`;
const fish = (x, y, s = 1, c = "#4FC3F7") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="20" ry="11" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <polygon points="-19,0 -32,-9 -32,9" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <circle cx="10" cy="-3" r="2.6" fill="#0277BD"/>
  </g>`;
const person = (x, y, s = 1, c = "#FFB74D") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-34" r="11" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -12 -22 Q 0 -28 12 -22 L 10 6 L -10 6 Z" fill="${c}" stroke="#8D6E63" stroke-width="2"/>
    <line x1="-10" y1="-18" x2="-20" y2="-4" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="10" y1="-18" x2="20" y2="-4" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="-6" y1="6" x2="-8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
  </g>`;
const house = (x, y, s = 1, wall = "#FFE0B2", roof = "#B71C1C") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-42" y="-70" width="84" height="52" fill="${wall}" stroke="#8D6E63" stroke-width="2.5"/>
    <polygon points="-52,-70 0,-104 52,-70" fill="${roof}" stroke="#7F0000" stroke-width="2.5"/>
    <rect x="-12" y="-48" width="24" height="30" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
    <rect x="-34" y="-60" width="16" height="14" fill="#B3E5FC" stroke="#5D4037" stroke-width="2"/>
    <rect x="18" y="-60" width="16" height="14" fill="#B3E5FC" stroke="#5D4037" stroke-width="2"/>
  </g>`;
const school = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-70" y="-70" width="140" height="52" fill="#FFF3E0" stroke="#8D6E63" stroke-width="2.5"/>
    <polygon points="-80,-70 0,-100 80,-70" fill="#1F4E79" stroke="#0D2C46" stroke-width="2.5"/>
    <rect x="18" y="-46" width="26" height="28" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
    <rect x="-58" y="-60" width="20" height="16" fill="#B3E5FC" stroke="#5D4037" stroke-width="2"/>
    <text x="-22" y="-46" text-anchor="middle" font-size="17" font-weight="bold" fill="#5D4037">ÉCOLE</text>
  </g>`;
const sun = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="0" r="26" fill="#FDD835" stroke="#F9A825" stroke-width="3"/>
    ${[0,45,90,135,180,225,270,315].map(a => {
      const r1 = 34, r2 = 50, rad = a * Math.PI / 180;
      return `<line x1="${(r1 * Math.cos(rad)).toFixed(1)}" y1="${(r1 * Math.sin(rad)).toFixed(1)}" x2="${(r2 * Math.cos(rad)).toFixed(1)}" y2="${(r2 * Math.sin(rad)).toFixed(1)}" stroke="#F9A825" stroke-width="5" stroke-linecap="round"/>`;
    }).join("")}
  </g>`;
const cloud = (x, y, s = 1, c = "#ECEFF1") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="34" ry="18" fill="${c}" stroke="#90A4AE" stroke-width="2.5"/>
    <ellipse cx="-24" cy="6" rx="22" ry="13" fill="${c}"/>
    <ellipse cx="24" cy="6" rx="22" ry="13" fill="${c}"/>
  </g>`;
const bird = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="16" ry="10" fill="#90CAF9" stroke="#1565C0" stroke-width="2"/>
    <circle cx="14" cy="-6" r="6" fill="#90CAF9" stroke="#1565C0" stroke-width="2"/>
    <polygon points="19,-6 27,-4 19,-1" fill="#F9A825" stroke="#F57F17" stroke-width="1"/>
    <path d="M -14 -2 Q -28 -14 -36 -4 Q -26 2 -14 4 Z" fill="#64B5F6" stroke="#1565C0" stroke-width="2"/>
    <circle cx="16" cy="-7" r="1.6" fill="#263238"/>
  </g>`;
const flower = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <line x1="0" y1="0" x2="0" y2="-26" stroke="#2E7D32" stroke-width="3"/>
    <path d="M 0 -12 Q -12 -16 -14 -6 Q -4 -4 0 -12 Z" fill="#43A047"/>
    <circle cx="-8" cy="-30" r="7" fill="#EC407A" stroke="#AD1457" stroke-width="1.5"/>
    <circle cx="8" cy="-30" r="7" fill="#EC407A" stroke="#AD1457" stroke-width="1.5"/>
    <circle cx="0" cy="-38" r="7" fill="#EC407A" stroke="#AD1457" stroke-width="1.5"/>
    <circle cx="0" cy="-30" r="6" fill="#FDD835" stroke="#F9A825" stroke-width="1.5"/>
    <circle cx="0" cy="-22" r="7" fill="#EC407A" stroke="#AD1457" stroke-width="1.5"/>
  </g>`;
const mountain = (x, y, s = 1, c = "#8D6E63") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <polygon points="-70,0 0,-80 70,0" fill="${c}" stroke="#5D4037" stroke-width="3"/>
    <path d="M -24 0 L -8 -20 L 8 0 Z" fill="#A1887F" opacity="0.7"/>
  </g>`;
const rock = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -30 0 L -20 -22 L 0 -30 L 22 -18 L 30 0 Z" fill="#B0BEC5" stroke="#607D8B" stroke-width="2.5"/>
    <path d="M -8 -24 L 0 -12 L 10 -20" fill="none" stroke="#607D8B" stroke-width="2"/>
  </g>`;
const bin = (x, y, s = 1, c = "#66BB6A") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-20" y="-34" width="40" height="34" rx="3" fill="${c}" stroke="#33691E" stroke-width="2.5"/>
    <rect x="-24" y="-42" width="48" height="8" rx="3" fill="${c}" stroke="#33691E" stroke-width="2.5"/>
    <line x1="0" y1="-42" x2="0" y2="-50" stroke="#33691E" stroke-width="3"/>
    <line x1="-10" y1="-30" x2="-10" y2="-6" stroke="#33691E" stroke-width="1.5" opacity="0.6"/>
    <line x1="0" y1="-30" x2="0" y2="-6" stroke="#33691E" stroke-width="1.5" opacity="0.6"/>
    <line x1="10" y1="-30" x2="10" y2="-6" stroke="#33691E" stroke-width="1.5" opacity="0.6"/>
  </g>`;
const broom = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <line x1="0" y1="-44" x2="0" y2="6" stroke="#8D6E63" stroke-width="5"/>
    <polygon points="-12,6 12,6 8,36 -8,36" fill="#F9A825" stroke="#F57F17" stroke-width="2"/>
  </g>`;
const shovel = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <line x1="0" y1="-40" x2="0" y2="10" stroke="#8D6E63" stroke-width="5"/>
    <path d="M -9 10 L 9 10 L 6 32 L -6 32 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/>
  </g>`;
const stump = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-9" y="-24" width="18" height="24" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
    <ellipse cx="0" cy="-24" rx="9" ry="4" fill="#D7CCC8" stroke="#5D4037" stroke-width="2"/>
  </g>`;
const flame = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M 0 0 Q -18 -12 -10 -30 Q -3 -18 2 -26 Q 12 -12 0 0 Z" fill="#FF7043" stroke="#BF360C" stroke-width="2"/>
    <path d="M 0 -3 Q -7 -10 -4 -19 Q 1 -13 3 -15 Q 6 -9 0 -3 Z" fill="#FFCA28"/>
  </g>`;
const smoke = (x, y, s = 1, c = "#90A4AE") => `
  <g transform="translate(${x},${y}) scale(${s})" opacity="0.85">
    <circle cx="0" cy="0" r="7" fill="${c}"/>
    <circle cx="8" cy="-12" r="9" fill="${c}"/>
    <circle cx="-2" cy="-24" r="11" fill="${c}"/>
    <circle cx="10" cy="-36" r="9" fill="${c}"/>
  </g>`;
const bottle = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <rect x="-7" y="-24" width="14" height="24" rx="4" fill="#81D4FA" stroke="#0277BD" stroke-width="2"/>
    <rect x="-4" y="-32" width="8" height="8" fill="#81D4FA" stroke="#0277BD" stroke-width="2"/>
  </g>`;
const can = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <rect x="-10" y="-22" width="20" height="24" rx="3" fill="#CFD8DC" stroke="#546E7A" stroke-width="2"/>
    <ellipse cx="0" cy="-22" rx="10" ry="4" fill="#ECEFF1" stroke="#546E7A" stroke-width="2"/>
    <line x1="-10" y1="-10" x2="10" y2="-10" stroke="#546E7A" stroke-width="1.5"/>
  </g>`;
const trashBag = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -22 0 L 22 0 L 16 -18 L -16 -18 Z" fill="#607D8B" stroke="#37474F" stroke-width="2"/>
    <path d="M -10 -18 Q 0 -30 10 -18" fill="none" stroke="#37474F" stroke-width="2"/>
    <circle cx="-6" cy="-6" r="3" fill="#CFD8DC"/>
    <circle cx="7" cy="-10" r="3" fill="#CFD8DC"/>
  </g>`;
const factory = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-50" y="-46" width="100" height="46" fill="#CFD8DC" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="-34" y="-78" width="18" height="32" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="10" y="-70" width="18" height="24" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="-16" y="-28" width="12" height="12" fill="#FFB74D" stroke="#546E7A" stroke-width="1.5"/>
    <rect x="4" y="-28" width="12" height="12" fill="#FFB74D" stroke="#546E7A" stroke-width="1.5"/>
  </g>`;
const youngPlant = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M 0 0 Q 4 -12 0 -22" stroke="#2E7D32" stroke-width="3" fill="none"/>
    <path d="M 0 -12 Q -10 -18 -14 -12 Q -8 -6 0 -12 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="1.5"/>
    <path d="M 0 -16 Q 10 -24 15 -17 Q 8 -10 0 -16 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="1.5"/>
  </g>`;
const bush = (x, y, s = 1) =>
  `<ellipse cx="${x}" cy="${y}" rx="${16 * s}" ry="${12 * s}" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>`;
const flowerpot = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -18 0 L 18 0 L 12 26 L -12 26 Z" fill="#FF8A65" stroke="#BF360C" stroke-width="2.5"/>
    <rect x="-21" y="-6" width="42" height="8" fill="#FF8A65" stroke="#BF360C" stroke-width="2.5"/>
  </g>`;
const plate = (x, y, s = 1, empty = false) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="34" ry="12" fill="#FFFFFF" stroke="#90A4AE" stroke-width="2.5"/>
    <ellipse cx="0" cy="0" rx="22" ry="7" fill="#ECEFF1" stroke="#B0BEC5" stroke-width="1.5"/>
    ${empty ? "" : `<circle cx="-6" cy="-3" r="7" fill="#FFB74D"/><circle cx="9" cy="-2" r="6" fill="#AED581"/>`}
  </g>`;
const canoe = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -40 0 Q -30 16 0 16 Q 30 16 40 0 Z" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
    <line x1="0" y1="0" x2="0" y2="-34" stroke="#5D4037" stroke-width="3"/>
    <polygon points="0,-34 26,-24 0,-18" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
  </g>`;
const desk = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-34" y="-26" width="68" height="7" fill="#A1887F" stroke="#5D4037" stroke-width="2"/>
    <line x1="-26" y1="-19" x2="-26" y2="12" stroke="#5D4037" stroke-width="5"/>
    <line x1="26" y1="-19" x2="26" y2="12" stroke="#5D4037" stroke-width="5"/>
  </g>`;
const waterBand = (x, y, w, c = "#4FC3F7") => `
  <rect x="${x}" y="${y}" width="${w}" height="52" rx="12" fill="${c}" stroke="#0277BD" stroke-width="2.5"/>
  <path d="M ${x + 14} ${y + 26} q 10 -7 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>
  <path d="M ${x + w / 2 + 40} ${y + 26} q 10 -7 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>`;
const carrot = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <polygon points="-8,0 8,0 0,26" fill="#FF8A65" stroke="#BF360C" stroke-width="2"/>
    <path d="M -5 0 Q -8 -10 -3 -14 M 0 0 Q 0 -12 0 -16 M 5 0 Q 8 -10 3 -14" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  </g>`;
const cabbage = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="0" r="20" fill="#AED581" stroke="#558B2F" stroke-width="2.5"/>
    <path d="M -12 -6 Q 0 -16 12 -6 M -14 4 Q 0 -4 14 4" fill="none" stroke="#558B2F" stroke-width="2"/>
  </g>`;
const apple = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="0" r="14" fill="#EF5350" stroke="#B71C1C" stroke-width="2"/>
    <line x1="0" y1="-14" x2="0" y2="-22" stroke="#5D4037" stroke-width="3"/>
    <path d="M 0 -20 Q 10 -26 14 -18 Q 6 -16 0 -20 Z" fill="#66BB6A" stroke="#2E7D32" stroke-width="1.5"/>
  </g>`;
const glassT = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -10 -22 L 10 -22 L 6 20 L -6 20 Z" fill="#B3E5FC" stroke="#0277BD" stroke-width="2" opacity="0.9"/>
    <line x1="-8" y1="-10" x2="8" y2="-10" stroke="#0277BD" stroke-width="1.5" opacity="0.6"/>
  </g>`;
const road = (x, y, w, h = 46) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#90A4AE" stroke="#546E7A" stroke-width="2.5"/>
  <line x1="${x + 8}" y1="${y + h / 2}" x2="${x + w - 8}" y2="${y + h / 2}" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="18 14"/>`;
const windArrows = (x, y) => `
  <line x1="${x}" y1="${y}" x2="${x + 60}" y2="${y}" stroke="#90A4AE" stroke-width="4" marker-end="url(#arrK)"/>
  <line x1="${x - 10}" y1="${y + 22}" x2="${x + 44}" y2="${y + 22}" stroke="#90A4AE" stroke-width="4" marker-end="url(#arrK)"/>`;

// ── 1. Qu'est-ce que l'Environnement ? (S39) ───────────────────────────
function svgEnvironnement() {
  return `${svgHeader(1100, 620)}${DEFS}
  ${title(1100, "Qu'est-ce que l'Environnement ?")}
  ${sun(140, 150, 1.1)}
  ${lbl(140, 225, "le soleil", 19)}
  ${cloud(880, 130, 1.15)}
  ${lbl(880, 195, "l'air", 19)}
  ${bird(690, 95, 0.8)}
  ${bird(780, 145, 0.6)}
  <rect x="30" y="430" width="1040" height="40" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2"/>
  ${mountain(240, 430, 1.5)}
  ${tree(450, 394, 1.4)}
  ${tree(516, 404, 1)}
  ${zebu(650, 400, 1.1)}
  ${person(790, 395, 1.35)}
  ${house(950, 430, 1.1)}
  <text x="240" y="459" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFFFFF">la montagne</text>
  <text x="480" y="459" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFFFFF">les arbres</text>
  <text x="650" y="459" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFFFFF">le zébu</text>
  <text x="790" y="459" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFFFFF">l'enfant</text>
  <text x="950" y="459" text-anchor="middle" font-size="18" font-weight="bold" fill="#FFFFFF">la maison</text>
  ${waterBand(60, 474, 980)}
  ${lbl(550, 506, "la rivière", 19, "#FFFFFF")}
  <line x1="120" y1="555" x2="620" y2="555" stroke="#2E7D32" stroke-width="3"/>
  ${lbl(370, 585, "LA NATURE", 23, "#2E7D32")}
  <line x1="700" y1="555" x2="990" y2="555" stroke="#E65100" stroke-width="3"/>
  ${lbl(845, 585, "LES CONSTRUCTIONS DE L'HOMME", 20, "#E65100")}
  ${caption(1100, 612, "L'Environnement, c'est tout ce qui nous entoure : la nature et les constructions de l'homme.")}
</svg>`;
}

// ── 2. Les éléments naturels vivants (S40) ─────────────────────────────
function svgElementsVivants() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Les éléments naturels vivants")}
  ${[40, 390, 740].map(x => panel(x, 90, 320, 220)).join("\n  ")}
  ${[40, 390, 740].map(x => panel(x, 350, 320, 220)).join("\n  ")}
  ${person(200, 250, 1.6)}
  ${lbl(200, 305, "l'homme")}
  ${zebu(550, 250, 1.4)}
  ${lbl(550, 305, "le zébu")}
  ${tree(897, 255, 1.5)}
  ${lbl(897, 306, "l'arbre")}
  ${flower(200, 540, 2.3)}
  ${lbl(200, 552, "la fleur")}
  ${waterBand(440, 490, 220)}
  ${fish(552, 516, 2.2)}
  ${lbl(552, 552, "le poisson")}
  ${bird(897, 445, 2.4)}
  ${lbl(897, 552, "l'oiseau")}
  ${caption(1100, 590, "Les êtres vivants naissent, grandissent, se nourrissent et meurent.")}
</svg>`;
}

// ── 3. Les éléments naturels non-vivants (S41) ────────────────────────
function svgElementsNonVivants() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Les éléments naturels non-vivants")}
  ${[40, 390, 740].map(x => panel(x, 90, 320, 220)).join("\n  ")}
  ${[40, 390, 740].map(x => panel(x, 350, 320, 220)).join("\n  ")}
  ${mountain(200, 285, 1.4)}
  ${lbl(200, 300, "la montagne")}
  ${rock(550, 285, 2.1)}
  ${lbl(550, 300, "le rocher")}
  ${sun(897, 210, 1.25)}
  ${lbl(897, 300, "le soleil")}
  ${cloud(185, 445, 1.7)}
  ${windArrows(230, 500)}
  ${lbl(200, 552, "l'air, le vent")}
  <ellipse cx="550" cy="465" rx="120" ry="42" fill="#4FC3F7" stroke="#0277BD" stroke-width="2.5"/>
  <path d="M 480 465 q 10 -8 20 0 t 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>
  ${lbl(550, 552, "la rivière")}
  <rect x="790" y="420" width="215" height="90" fill="#8D6E63" stroke="#5D4037" stroke-width="2.5"/>
  <rect x="790" y="420" width="215" height="16" fill="#81C784" stroke="#558B2F" stroke-width="2"/>
  <circle cx="850" cy="478" r="9" fill="#B0BEC5" stroke="#607D8B" stroke-width="1.5"/>
  <circle cx="950" cy="486" r="7" fill="#B0BEC5" stroke="#607D8B" stroke-width="1.5"/>
  ${lbl(897, 552, "le sol")}
  ${caption(1100, 590, "Les éléments non-vivants ne naissent pas, ne grandissent pas et ne meurent pas.")}
</svg>`;
}

// ── 4. Les éléments artificiels (S42) ─────────────────────────────────
function svgElementsArtificiels() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Les éléments artificiels")}
  ${[40, 390, 740].map(x => panel(x, 90, 320, 220)).join("\n  ")}
  ${[40, 390, 740].map(x => panel(x, 350, 320, 220)).join("\n  ")}
  ${house(200, 285, 1.25)}
  ${lbl(200, 300, "la maison")}
  ${school(552, 282, 1)}
  ${lbl(552, 300, "l'école")}
  ${road(790, 190, 220)}
  ${lbl(897, 300, "la route")}
  ${desk(200, 510, 1.9)}
  ${lbl(200, 552, "la table")}
  ${bin(552, 505, 1.9)}
  ${lbl(552, 552, "la poubelle")}
  ${canoe(897, 500, 1.7)}
  ${lbl(897, 552, "la pirogue")}
  ${caption(1100, 590, "Les éléments artificiels sont fabriqués par les mains de l'homme.")}
</svg>`;
}

// ── 5. Classifier les éléments de l'Environnement (S43) ────────────────
function svgClasserElements() {
  const col = (x, header, color, rows) => `
    <rect x="${x}" y="95" width="320" height="46" rx="10" fill="${color}"/>
    <text x="${x + 160}" y="126" text-anchor="middle" font-size="24" font-weight="bold" fill="#FFFFFF">${header}</text>
    <rect x="${x}" y="141" width="320" height="419" fill="#F5F9FC" stroke="${color}" stroke-width="3"/>
    ${rows.map((r, i) => `<g>${r[0]}<text x="${x + 130}" y="${205 + i * 100}" font-size="22" font-weight="bold" fill="#37474F">${r[1]}</text></g>`).join("\n    ")}`;
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Classer les éléments de l'Environnement")}
  ${col(40, "VIVANTS", "#2E7D32", [
    [person(100, 190, 1.05), "l'homme"],
    [zebu(100, 288, 0.85), "le zébu"],
    [tree(100, 386, 1.05), "l'arbre"],
    [fish(100, 480, 1.15), "le poisson"],
  ])}
  ${col(390, "NON-VIVANTS", "#1F4E79", [
    [mountain(450, 190, 0.8), "la montagne"],
    [rock(450, 292, 1.2), "le rocher"],
    [sun(450, 375, 0.75), "le soleil"],
    [cloud(448, 478, 1.05) + windArrows(445, 505), "l'air, le vent"],
  ])}
  ${col(740, "ARTIFICIELS", "#E65100", [
    [house(800, 195, 0.8), "la maison"],
    [road(770, 255, 160, 38), "la route"],
    [bin(800, 380, 1.1), "la poubelle"],
    [desk(800, 472, 1.25), "la table"],
  ])}
  ${caption(1100, 648, "On classe chaque élément de l'Environnement selon sa nature : vivant, non-vivant ou artificiel.")}
</svg>`;
}

// ── 6. L'interrelation entre les éléments (S44) ───────────────────────
function svgInterrelation() {
  const row = (y, left, right, label) => `
    ${panel(40, y, 1020, 125, "#F5F9FC")}
    ${left}
    ${right}
    <line x1="380" y1="${y + 62}" x2="700" y2="${y + 62}" stroke="#C00000" stroke-width="5" marker-end="url(#arrR)"/>
    <text x="540" y="${y + 48}" text-anchor="middle" font-size="23" font-weight="bold" fill="#C00000">${label}</text>`;
  return `${svgHeader(1100, 720)}${DEFS}
  ${title(1100, "L'interrelation entre les éléments de l'Environnement")}
  ${row(80, sun(180, 140, 0.95), tree(890, 172, 1.5), "fait grandir")}
  ${row(225, tree(180, 300, 1.4), zebu(890, 280, 1.2), "nourrit les animaux")}
  ${row(370, `<ellipse cx="180" cy="432" rx="90" ry="30" fill="#4FC3F7" stroke="#0277BD" stroke-width="2.5"/><path d="M 130 432 q 10 -8 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5"/>`,
    flower(870, 460, 1.9) + youngPlant(920, 462, 1.8), "donne de l'eau")}
  ${row(515, person(180, 570, 1.25), youngPlant(870, 610, 2.4) + bush(920, 612, 1.4) + bush(960, 614, 1.2), "plante et protège")}
  ${caption(1100, 705, "Tous les éléments de l'Environnement sont liés : ce sont des interrelations.")}
</svg>`;
}

// ── 7. Les formes de la dégradation (S45) ─────────────────────────────
function svgDegradation() {
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Les formes de la dégradation de l'Environnement")}
  ${panel(40, 90, 490, 250)}${panel(570, 90, 490, 250)}
  ${panel(40, 360, 490, 250)}${panel(570, 360, 490, 250)}
  ${stump(140, 300, 1.4)}${stump(230, 300, 1.2)}${stump(320, 300, 1.4)}
  <path d="M 370 300 L 460 292" stroke="#6D4C41" stroke-width="9" stroke-linecap="round"/>
  ${lbl(285, 325, "la forêt détruite : les arbres coupés")}
  <path d="M 640 340 L 720 240 L 800 340 Z" fill="#BCAAA4" stroke="#8D6E63" stroke-width="3"/>
  <path d="M 700 240 L 685 300 M 740 240 L 755 300 M 720 240 L 720 310" stroke="#BF360C" stroke-width="5" stroke-linecap="round"/>
  ${lbl(815, 325, "le sol érodé : les ravines")}
  ${trashBag(160, 540, 2)}${bottle(270, 540, 1.6, 80)}${can(370, 540, 1.6, -15)}
  ${lbl(285, 595, "les déchets jetés partout")}
  <ellipse cx="815" cy="540" rx="160" ry="40" fill="#7CB342" stroke="#558B2F" stroke-width="2.5"/>
  ${bottle(750, 515, 1.3, 75)}${can(880, 520, 1.3, -20)}
  ${fish(815, 545, 1.1, "#ECEFF1")}
  ${lbl(815, 595, "l'eau polluée et sale")}
  ${caption(1100, 648, "La dégradation, c'est l'Environnement abîmé, sali ou détruit.")}
</svg>`;
}

// ── 8. La déforestation et les feux (S46) ─────────────────────────────
function svgDeforestation() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "La déforestation et les feux de brousse")}
  ${panel(40, 90, 460, 380, "#E8F5E9")}
  <text x="270" y="130" text-anchor="middle" font-size="26" font-weight="bold" fill="#2E7D32">AVANT</text>
  ${tree(130, 250, 1.3)}${tree(210, 260, 1.7)}${tree(300, 250, 1.4)}${tree(390, 260, 1.6)}
  ${tree(160, 380, 1.5)}${tree(260, 390, 1.8)}${tree(360, 380, 1.4)}
  ${bird(430, 160, 0.9)}
  <text x="270" y="450" text-anchor="middle" font-size="21" font-weight="bold" fill="#2E7D32">la forêt dense et verte</text>
  <line x1="515" y1="280" x2="575" y2="280" stroke="#C00000" stroke-width="9" marker-end="url(#arrR)"/>
  ${panel(600, 90, 460, 380, "#FBE9E7")}
  <text x="830" y="130" text-anchor="middle" font-size="26" font-weight="bold" fill="#BF360C">APRÈS</text>
  ${stump(710, 260, 1.6)}${stump(810, 260, 1.4)}${stump(910, 260, 1.6)}
  ${stump(760, 380, 1.3)}${stump(880, 380, 1.5)}
  ${flame(710, 240, 1.3)}${flame(910, 240, 1.1)}${flame(830, 360, 1.2)}
  ${smoke(830, 210, 1.5, "#8D6E63")}
  <path d="M 660 400 q 8 -14 16 0 M 700 405 q 8 -14 16 0 M 940 400 q 8 -14 16 0" stroke="#BF360C" stroke-width="2.5" fill="none"/>
  <text x="830" y="450" text-anchor="middle" font-size="21" font-weight="bold" fill="#BF360C">le sol nu : souches et cendres</text>
  ${caption(1100, 550, "Couper les arbres et brûler la forêt, c'est la déforestation : la forêt disparaît.")}
</svg>`;
}

// ── 9. Les pollutions et les déchets (S47) ────────────────────────────
function svgPollution() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Les pollutions et les déchets")}
  ${panel(40, 90, 320, 400)}${panel(390, 90, 320, 400)}${panel(740, 90, 320, 400)}
  ${factory(200, 330, 1.3)}
  ${smoke(158, 200, 1.6, "#546E7A")}
  <text x="200" y="400" text-anchor="middle" font-size="22" font-weight="bold" fill="#37474F">la pollution de l'air</text>
  <text x="200" y="430" text-anchor="middle" font-size="19" fill="#546E7A">la fumée des usines</text>
  <ellipse cx="550" cy="300" rx="125" ry="45" fill="#7CB342" stroke="#558B2F" stroke-width="2.5"/>
  ${bottle(490, 275, 1.3, 70)}${can(590, 285, 1.3, -20)}${trashBag(550, 325, 1)}
  ${fish(550, 205, 1.1, "#B0BEC5")}
  <text x="550" y="400" text-anchor="middle" font-size="22" font-weight="bold" fill="#37474F">la pollution de l'eau</text>
  <text x="550" y="430" text-anchor="middle" font-size="19" fill="#546E7A">les ordures dans la rivière</text>
  ${trashBag(880, 350, 2.2)}${bottle(800, 350, 1.6, 80)}${can(950, 350, 1.6, -15)}${bottle(880, 280, 1.3, 0)}
  <text x="900" y="400" text-anchor="middle" font-size="22" font-weight="bold" fill="#37474F">la pollution du sol</text>
  <text x="900" y="430" text-anchor="middle" font-size="19" fill="#546E7A">les tas d'ordures</text>
  ${caption(1100, 590, "Les pollutions salissent l'air, l'eau et le sol de notre Environnement.")}
</svg>`;
}

// ── 10. Les conséquences sur la nature (S48) ──────────────────────────
function svgConsequencesNature() {
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Les conséquences de la dégradation sur la nature")}
  ${panel(40, 90, 490, 250)}${panel(570, 90, 490, 250)}
  ${panel(40, 360, 490, 250)}${panel(570, 360, 490, 250)}
  ${stump(150, 300, 1.4)}${stump(250, 300, 1.2)}${stump(350, 300, 1.4)}
  ${bird(430, 170, 1.2)}
  <line x1="470" y1="150" x2="420" y2="120" stroke="#C00000" stroke-width="3" marker-end="url(#arrR)"/>
  ${lbl(285, 325, "les animaux perdent leur maison")}
  <path d="M 660 340 L 740 240 L 820 340 Z" fill="#D7CCC8" stroke="#8D6E63" stroke-width="3"/>
  <path d="M 700 240 L 690 300 M 745 240 L 755 300" stroke="#BF360C" stroke-width="5" stroke-linecap="round"/>
  <path d="M 850 330 q 8 -14 16 0 M 890 335 q 8 -14 16 0" stroke="#BF360C" stroke-width="2.5" fill="none"/>
  ${lbl(815, 325, "le sol devient pauvre et sec")}
  <ellipse cx="285" cy="565" rx="180" ry="36" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2.5"/>
  <path d="M 160 560 l 30 12 M 240 570 l 26 10 M 330 558 l 28 14 M 400 568 l 24 10" stroke="#8D6E63" stroke-width="3"/>
  <text x="285" y="572" text-anchor="middle" font-size="21" font-weight="bold" fill="#5D4037">les rivières tarissent</text>
  <text x="815" y="410" text-anchor="middle" font-size="21" font-weight="bold" fill="#37474F">les inondations détruisent les champs</text>
  ${house(815, 545, 0.85)}
  ${waterBand(620, 535, 410)}
  ${caption(1100, 648, "Quand la forêt est détruite, la nature souffre : animaux, sols, rivières et champs.")}
</svg>`;
}

// ── 11. Les conséquences sur l'homme (S49) ────────────────────────────
function svgConsequencesHomme() {
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Les conséquences de la dégradation sur l'homme")}
  ${panel(40, 90, 490, 250)}${panel(570, 90, 490, 250)}
  ${panel(40, 360, 490, 250)}${panel(570, 360, 490, 250)}
  <path d="M 170 310 L 185 240 M 230 310 L 230 235 M 290 310 L 275 240 M 340 310 L 335 245" stroke="#8D6E63" stroke-width="5" stroke-linecap="round"/>
  <path d="M 170 245 q 15 -30 30 0 M 290 245 q 15 -30 30 0 M 340 250 q 12 -26 24 0" stroke="#BF360C" stroke-width="2.5" fill="none"/>
  ${lbl(255, 325, "les récoltes sont détruites")}
  <text x="815" y="130" text-anchor="middle" font-size="21" font-weight="bold" fill="#37474F">les maisons sont inondées</text>
  ${house(815, 300, 1.05)}
  ${waterBand(620, 285, 410)}
  <rect x="140" y="470" width="200" height="34" rx="6" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
  <rect x="150" y="445" width="46" height="26" rx="6" fill="#ECEFF1" stroke="#90A4AE" stroke-width="2"/>
  <circle cx="173" cy="436" r="10" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
  <rect x="205" y="442" width="130" height="60" fill="#64B5F6" stroke="#1565C0" stroke-width="2.5"/>
  <circle cx="330" cy="420" r="4" fill="#37474F"/><circle cx="345" cy="405" r="4" fill="#37474F"/>
  <path d="M 330 415 q 6 -8 12 0 M 345 400 q 6 -8 12 0" stroke="#90A4AE" stroke-width="2" fill="none"/>
  ${lbl(255, 545, "les maladies augmentent")}
  ${stump(700, 560, 1.5)}
  <path d="M 830 512 q 14 20 0 38 q -14 -18 0 -38 Z" fill="#4FC3F7" stroke="#0277BD" stroke-width="2.5"/>
  <line x1="870" y1="570" x2="790" y2="500" stroke="#C00000" stroke-width="6"/>
  ${lbl(815, 600, "le bois et l'eau manquent")}
  ${caption(1100, 648, "La dégradation de l'Environnement nuit aussi à l'homme et à ses activités.")}
</svg>`;
}

// ── 12. La propreté (S50) ─────────────────────────────────────────────
function svgProprete() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Protéger l'Environnement : la propreté")}
  ${sun(120, 130, 1)}
  ${cloud(920, 115, 1)}
  <rect x="30" y="450" width="1040" height="36" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2"/>
  ${school(900, 450, 1.15)}
  ${person(330, 410, 1.55)}
  ${broom(365, 425, 1.1, 28)}
  ${person(560, 410, 1.55, "#81C784")}
  ${broom(524, 425, 1.1, -28)}
  ${bin(160, 448, 1.7)}
  ${lbl(160, 512, "la poubelle", 19)}
  ${lbl(445, 512, "les balais", 19)}
  ${lbl(780, 512, "la cour de l'école est propre", 19)}
  ${caption(1100, 590, "Chaque jour, on balaie la cour, la salle de classe et la maison.")}
</svg>`;
}

// ── 13. Le triage et la réutilisation des déchets (S51) ───────────────
function svgTriDechets() {
  return `${svgHeader(1100, 620)}${DEFS}
  ${title(1100, "Le triage et la réutilisation des déchets")}
  ${panel(40, 90, 620, 420, "#F5F9FC")}
  ${apple(160, 200, 1.5)}
  ${bin(160, 400, 2)}
  <text x="160" y="478" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">restes de nourriture</text>
  ${bottle(360, 195, 1.5, 0)}
  ${bin(360, 400, 2, "#64B5F6")}
  <text x="360" y="478" text-anchor="middle" font-size="20" font-weight="bold" fill="#1565C0">papiers et plastiques</text>
  ${glassT(555, 190, 1.4)}${can(592, 215, 1.1)}
  ${bin(560, 400, 2, "#F9A825")}
  <text x="560" y="478" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">verre et métaux</text>
  ${panel(700, 90, 360, 420, "#F1F8E9")}
  <text x="880" y="135" text-anchor="middle" font-size="24" font-weight="bold" fill="#2E7D32">la réutilisation</text>
  ${bottle(790, 250, 1.7, 0)}
  <line x1="830" y1="280" x2="900" y2="280" stroke="#2E7D32" stroke-width="5" marker-end="url(#arrG)"/>
  ${flowerpot(950, 330, 1.8)}
  ${youngPlant(950, 318, 2)}
  <text x="880" y="420" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">une bouteille devient</text>
  <text x="880" y="448" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">un pot de fleurs</text>
  ${caption(1100, 610, "Trier les déchets, c'est les classer selon leur nature pour pouvoir les réutiliser.")}
</svg>`;
}

// ── 14. Le reboisement et les haies vives (S52) ───────────────────────
function svgReboisement() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "Le reboisement et les haies vives")}
  ${panel(40, 90, 480, 380, "#F1F8E9")}
  <text x="280" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#2E7D32">le reboisement</text>
  ${person(140, 420, 1.4)}
  ${shovel(180, 385, 1.2, 20)}
  ${youngPlant(300, 430, 2)}${youngPlant(370, 430, 2)}${youngPlant(440, 430, 2)}
  ${person(490, 420, 1.3)}
  <text x="280" y="455" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">on replante de jeunes arbres</text>
  ${panel(580, 90, 480, 380, "#F1F8E9")}
  <text x="820" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#2E7D32">les haies vives</text>
  ${bush(660, 240)}${bush(660, 290)}${bush(660, 340)}${bush(660, 390)}
  <rect x="690" y="220" width="330" height="200" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2"/>
  <path d="M 710 260 q 6 -16 12 0 M 750 260 q 6 -16 12 0 M 790 260 q 6 -16 12 0 M 830 260 q 6 -16 12 0 M 870 260 q 6 -16 12 0 M 910 260 q 6 -16 12 0" stroke="#558B2F" stroke-width="2.5" fill="none"/>
  <path d="M 710 320 q 6 -16 12 0 M 750 320 q 6 -16 12 0 M 790 320 q 6 -16 12 0 M 830 320 q 6 -16 12 0 M 870 320 q 6 -16 12 0 M 910 320 q 6 -16 12 0" stroke="#558B2F" stroke-width="2.5" fill="none"/>
  ${zebu(850, 390, 0.9)}
  <text x="820" y="450" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">les arbustes protègent le champ</text>
  ${caption(1100, 550, "Reboiser, c'est replanter des arbres ; les haies vives protègent champs et sols.")}
</svg>`;
}

// ── 15. Le jardinage et le non-gaspillage (S53) ───────────────────────
function svgJardinage() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "Le jardinage et la lutte contre le gaspillage")}
  ${panel(40, 90, 480, 380, "#F1F8E9")}
  <text x="280" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#2E7D32">le jardinage</text>
  <rect x="80" y="310" width="400" height="64" fill="#8D6E63" stroke="#5D4037" stroke-width="2.5" opacity="0.35"/>
  ${flower(140, 310, 2)}${flower(200, 300, 1.6)}
  ${carrot(300, 290, 1.8)}${cabbage(400, 305, 1.6)}
  ${person(455, 405, 1.15)}
  <text x="270" y="450" text-anchor="middle" font-size="20" font-weight="bold" fill="#2E7D32">des parterres fleuris et un potager</text>
  ${panel(580, 90, 480, 380, "#FFF8E1")}
  <text x="820" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#E65100">non au gaspillage !</text>
  ${plate(720, 290, 1.5)}
  <line x1="770" y1="290" x2="840" y2="290" stroke="#2E7D32" stroke-width="5" marker-end="url(#arrG)"/>
  ${plate(930, 290, 1.5, true)}
  <text x="720" y="345" text-anchor="middle" font-size="19" font-weight="bold" fill="#37474F">je prends juste</text>
  <text x="720" y="371" text-anchor="middle" font-size="19" font-weight="bold" fill="#37474F">ce que je mange</text>
  <text x="930" y="345" text-anchor="middle" font-size="19" font-weight="bold" fill="#2E7D32">je finis</text>
  <text x="930" y="371" text-anchor="middle" font-size="19" font-weight="bold" fill="#2E7D32">mon assiette</text>
  <text x="820" y="445" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">gaspiller la nourriture, c'est mal</text>
  ${caption(1100, 550, "Jardiner embellit l'école ; ne pas gaspiller, c'est respecter le travail de tous.")}
</svg>`;
}

// ── 16. Notre plan d'action (S54) ─────────────────────────────────────
function svgPlanAction() {
  const box = (x, y, num, txt, icons) => `
    ${panel(x, y, 490, 250, "#F5F9FC")}
    <circle cx="${x + 50}" cy="${y + 50}" r="26" fill="#1F4E79"/>
    <text x="${x + 50}" y="${y + 60}" text-anchor="middle" font-size="28" font-weight="bold" fill="#FFFFFF">${num}</text>
    ${icons}
    <text x="${x + 245}" y="${y + 220}" text-anchor="middle" font-size="23" font-weight="bold" fill="#1F4E79">${txt}</text>`;
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Notre plan d'action pour protéger l'Environnement")}
  ${box(40, 90, 1, "Je balaye la cour et la classe", broom(300, 250, 1.8))}
  ${box(570, 90, 2, "Je trie les déchets", bin(750, 280, 1.6, "#66BB6A") + bin(830, 280, 1.6, "#64B5F6") + bin(910, 280, 1.6, "#F9A825"))}
  ${box(40, 360, 3, "Je plante des arbres", youngPlant(250, 540, 3.4) + shovel(330, 520, 1.3, 18))}
  ${box(570, 360, 4, "Je ne gaspille pas la nourriture", plate(815, 500, 2))}
  ${caption(1100, 648, "De petits gestes chaque jour protègent notre Environnement.")}
</svg>`;
}

const SVG = {
  geot4_environnement: svgEnvironnement(),
  geot4_elements_vivants: svgElementsVivants(),
  geot4_elements_non_vivants: svgElementsNonVivants(),
  geot4_elements_artificiels: svgElementsArtificiels(),
  geot4_classer_elements: svgClasserElements(),
  geot4_interrelation: svgInterrelation(),
  geot4_degradation: svgDegradation(),
  geot4_deforestation: svgDeforestation(),
  geot4_pollution: svgPollution(),
  geot4_consequences_nature: svgConsequencesNature(),
  geot4_consequences_homme: svgConsequencesHomme(),
  geot4_proprete: svgProprete(),
  geot4_tri_dechets: svgTriDechets(),
  geot4_reboisement: svgReboisement(),
  geot4_jardinage: svgJardinage(),
  geot4_plan_action: svgPlanAction(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    const svgPath = path.join(OUT, "svg", `${name}.svg`);
    const pngPath = path.join(REPO, `${name}.png`);
    fs.writeFileSync(svgPath, svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(pngPath);
    const meta = await sharp(pngPath).metadata();
    console.log(`OK ${name}.png  ${meta.width}x${meta.height}`);
  }
})();
