// make-svg-u5.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T4
// UNITÉ 5 : L'HOMME ET LES ACTIVITÉS QUOTIDIENNES (Séances 57 à 74)
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
const person = (x, y, s = 1, c = "#FFB74D") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-34" r="11" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -12 -22 Q 0 -28 12 -22 L 10 6 L -10 6 Z" fill="${c}" stroke="#8D6E63" stroke-width="2"/>
    <line x1="-10" y1="-18" x2="-20" y2="-4" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="10" y1="-18" x2="20" y2="-4" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="-6" y1="6" x2="-8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
  </g>`;
const personF = (x, y, s = 1, c = "#F48FB1") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-34" r="11" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -4 -45 Q 8 -49 8 -38 Q 3 -43 -4 -45 Z" fill="#37474F"/>
    <path d="M -10 -22 L 10 -22 L 17 8 L -17 8 Z" fill="${c}" stroke="#8D6E63" stroke-width="2"/>
    <line x1="-9" y1="-16" x2="-18" y2="-2" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="9" y1="-16" x2="18" y2="-2" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="-5" y1="8" x2="-7" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="5" y1="8" x2="7" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
  </g>`;
const elderly = (x, y, s = 1, c = "#BCAAA4") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-34" r="11" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -8 -44 Q 0 -50 8 -44 Q 8 -36 0 -35 Q -8 -36 -8 -44 Z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1.5"/>
    <path d="M -12 -22 Q 0 -28 12 -22 L 10 6 L -10 6 Z" fill="${c}" stroke="#8D6E63" stroke-width="2"/>
    <line x1="-10" y1="-18" x2="-20" y2="-4" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="10" y1="-16" x2="17" y2="2" stroke="${c}" stroke-width="7" stroke-linecap="round"/>
    <line x1="-6" y1="6" x2="-8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="6" y1="6" x2="8" y2="26" stroke="#5D4037" stroke-width="6" stroke-linecap="round"/>
    <line x1="17" y1="0" x2="22" y2="27" stroke="#8D6E63" stroke-width="4" stroke-linecap="round"/>
  </g>`;
const baby = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="0" r="10" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -7 -6 Q 0 -12 7 -6 Q 7 -2 0 -2 Q -7 -2 -7 -6 Z" fill="#37474F"/>
    <ellipse cx="0" cy="14" rx="11" ry="13" fill="#FFE0B2" stroke="#BCAAA4" stroke-width="2"/>
    <path d="M -11 8 Q 0 4 11 8" fill="none" stroke="#BCAAA4" stroke-width="2"/>
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
const hen = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="16" ry="11" fill="#FF8A65" stroke="#BF360C" stroke-width="2"/>
    <polygon points="-14,-2 -24,-8 -22,4" fill="#FF8A65" stroke="#BF360C" stroke-width="2"/>
    <circle cx="12" cy="-8" r="7" fill="#FF8A65" stroke="#BF360C" stroke-width="2"/>
    <polygon points="18,-8 24,-6 18,-3" fill="#F9A825" stroke="#F57F17" stroke-width="1"/>
    <circle cx="9" cy="-13" r="3" fill="#E53935"/><circle cx="14" cy="-14" r="3" fill="#E53935"/>
    <circle cx="14" cy="-9" r="1.6" fill="#263238"/>
    <line x1="-4" y1="10" x2="-4" y2="20" stroke="#BF360C" stroke-width="2"/>
    <line x1="6" y1="10" x2="6" y2="20" stroke="#BF360C" stroke-width="2"/>
  </g>`;
const fish = (x, y, s = 1, c = "#4FC3F7") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="20" ry="11" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <polygon points="-19,0 -32,-9 -32,9" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <circle cx="10" cy="-3" r="2.6" fill="#0277BD"/>
  </g>`;
const tree = (x, y, s = 1, c = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="0" width="8" height="26" fill="#6D4C41"/>
    <circle cx="0" cy="-12" r="22" fill="${c}" stroke="#1B5E20" stroke-width="2"/>
  </g>`;
const factory = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-50" y="-46" width="100" height="46" fill="#CFD8DC" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="-34" y="-78" width="18" height="32" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="10" y="-70" width="18" height="24" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>
    <rect x="-16" y="-28" width="12" height="12" fill="#FFB74D" stroke="#546E7A" stroke-width="1.5"/>
    <rect x="4" y="-28" width="12" height="12" fill="#FFB74D" stroke="#546E7A" stroke-width="1.5"/>
  </g>`;
const canoe = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -40 0 Q -30 16 0 16 Q 30 16 40 0 Z" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
    <line x1="0" y1="0" x2="0" y2="-34" stroke="#5D4037" stroke-width="3"/>
    <polygon points="0,-34 26,-24 0,-18" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
  </g>`;
const waterBand = (x, y, w, c = "#4FC3F7") => `
  <rect x="${x}" y="${y}" width="${w}" height="52" rx="12" fill="${c}" stroke="#0277BD" stroke-width="2.5"/>
  <path d="M ${x + 14} ${y + 26} q 10 -7 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>
  <path d="M ${x + w / 2 + 40} ${y + 26} q 10 -7 20 0 t 20 0 t 20 0" fill="none" stroke="#FFFFFF" stroke-width="2.5" opacity="0.8"/>`;
const road = (x, y, w, h = 46) => `
  <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#90A4AE" stroke="#546E7A" stroke-width="2.5"/>
  <line x1="${x + 8}" y1="${y + h / 2}" x2="${x + w - 8}" y2="${y + h / 2}" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="18 14"/>`;
const bus = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-62" y="-48" width="124" height="36" rx="8" fill="#42A5F5" stroke="#1565C0" stroke-width="2.5"/>
    ${[-48, -20, 8].map(wx => `<rect x="${wx}" y="-42" width="22" height="16" fill="#B3E5FC" stroke="#1565C0" stroke-width="1.5"/>`).join("")}
    <rect x="38" y="-42" width="18" height="16" fill="#B3E5FC" stroke="#1565C0" stroke-width="1.5"/>
    <circle cx="-34" cy="-10" r="11" fill="#37474F"/><circle cx="-34" cy="-10" r="4.5" fill="#ECEFF1"/>
    <circle cx="34" cy="-10" r="11" fill="#37474F"/><circle cx="34" cy="-10" r="4.5" fill="#ECEFF1"/>
  </g>`;
const truck = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-72" y="-44" width="40" height="32" rx="4" fill="#EF5350" stroke="#B71C1C" stroke-width="2.5"/>
    <rect x="-66" y="-38" width="22" height="14" fill="#B3E5FC" stroke="#B71C1C" stroke-width="1.5"/>
    <rect x="-28" y="-36" width="88" height="26" fill="#FFCA28" stroke="#F57F17" stroke-width="2.5"/>
    <circle cx="-52" cy="-8" r="10" fill="#37474F"/><circle cx="36" cy="-8" r="10" fill="#37474F"/>
  </g>`;
const cart = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-46" y="-26" width="84" height="10" fill="#A1887F" stroke="#5D4037" stroke-width="2.5"/>
    <circle cx="-28" cy="-8" r="14" fill="#8D6E63" stroke="#5D4037" stroke-width="2.5"/>
    <circle cx="-28" cy="-8" r="5" fill="#D7CCC8" stroke="#5D4037" stroke-width="1.5"/>
    <circle cx="24" cy="-8" r="14" fill="#8D6E63" stroke="#5D4037" stroke-width="2.5"/>
    <circle cx="24" cy="-8" r="5" fill="#D7CCC8" stroke="#5D4037" stroke-width="1.5"/>
    <line x1="38" y1="-22" x2="70" y2="-18" stroke="#5D4037" stroke-width="4"/>
    <line x1="38" y1="-12" x2="70" y2="-10" stroke="#5D4037" stroke-width="4"/>
    <circle cx="76" cy="-24" r="9" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2"/>
  </g>`;
const stall = (x, y, s = 1, c = "#EF5350") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-52" y="-26" width="104" height="8" fill="#A1887F" stroke="#5D4037" stroke-width="2"/>
    <line x1="-44" y1="-18" x2="-44" y2="0" stroke="#5D4037" stroke-width="4"/>
    <line x1="44" y1="-18" x2="44" y2="0" stroke="#5D4037" stroke-width="4"/>
    <line x1="-50" y1="-26" x2="-50" y2="-56" stroke="#5D4037" stroke-width="3"/>
    <line x1="50" y1="-26" x2="50" y2="-56" stroke="#5D4037" stroke-width="3"/>
    <rect x="-60" y="-64" width="120" height="12" fill="${c}" stroke="#7F0000" stroke-width="2"/>
    <rect x="-60" y="-64" width="24" height="12" fill="#FFF3E0" stroke="#7F0000" stroke-width="2"/>
    <rect x="-12" y="-64" width="24" height="12" fill="#FFF3E0" stroke="#7F0000" stroke-width="2"/>
    <rect x="36" y="-64" width="24" height="12" fill="#FFF3E0" stroke="#7F0000" stroke-width="2"/>
    <circle cx="-26" cy="-32" r="7" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
    <circle cx="-8" cy="-32" r="7" fill="#FFCA28" stroke="#F57F17" stroke-width="2"/>
    <circle cx="10" cy="-32" r="7" fill="#EF5350" stroke="#B71C1C" stroke-width="2"/>
    <circle cx="28" cy="-32" r="7" fill="#FF8A65" stroke="#BF360C" stroke-width="2"/>
  </g>`;
const basket = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -20 -12 L 20 -12 L 14 12 L -14 12 Z" fill="#D7A86E" stroke="#8D6E63" stroke-width="2.5"/>
    <path d="M -19 -5 L 19 -5 M -16 3 L 16 3 M -13 10 L 13 10" stroke="#8D6E63" stroke-width="1.5"/>
    <path d="M -11 -12 Q 0 -24 11 -12" fill="none" stroke="#8D6E63" stroke-width="2.5"/>
  </g>`;
const pot = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -13 -16 Q -20 0 -9 12 Q 0 19 9 12 Q 20 0 13 -16 Z" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2.5"/>
    <ellipse cx="0" cy="-16" rx="13" ry="5" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -9 -6 Q 0 -2 9 -6" fill="none" stroke="#8D6E63" stroke-width="2"/>
  </g>`;
const loom = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-24" y="-64" width="48" height="64" fill="none" stroke="#8D6E63" stroke-width="4"/>
    <line x1="-12" y1="-64" x2="-12" y2="0" stroke="#BCAAA4" stroke-width="2"/>
    <line x1="-4" y1="-64" x2="-4" y2="0" stroke="#BCAAA4" stroke-width="2"/>
    <line x1="4" y1="-64" x2="4" y2="0" stroke="#BCAAA4" stroke-width="2"/>
    <line x1="12" y1="-64" x2="12" y2="0" stroke="#BCAAA4" stroke-width="2"/>
    <rect x="-19" y="-26" width="38" height="22" fill="#EC407A" stroke="#AD1457" stroke-width="2"/>
    <rect x="-19" y="-26" width="9" height="22" fill="#F48FB1"/>
  </g>`;
const tomb = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-26" y="-28" width="52" height="28" fill="#B0BEC5" stroke="#607D8B" stroke-width="2.5"/>
    <polygon points="-32,-28 0,-46 32,-28" fill="#90A4AE" stroke="#607D8B" stroke-width="2.5"/>
    <rect x="-6" y="-20" width="12" height="14" fill="#78909C"/>
    <line x1="0" y1="-56" x2="0" y2="-46" stroke="#607D8B" stroke-width="3.5"/>
    <line x1="-6" y1="-53" x2="6" y2="-53" stroke="#607D8B" stroke-width="3.5"/>
  </g>`;
const flowerPot = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -12 0 L 12 0 L 8 18 L -8 18 Z" fill="#FF8A65" stroke="#BF360C" stroke-width="2.5"/>
    <path d="M 0 0 Q -3 -12 0 -18" stroke="#2E7D32" stroke-width="2.5" fill="none"/>
    <circle cx="-6" cy="-16" r="5" fill="#EC407A"/><circle cx="6" cy="-14" r="5" fill="#EC407A"/><circle cx="0" cy="-22" r="5" fill="#EC407A"/>
  </g>`;
const ricePlant = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M 0 0 Q -8 -14 -14 -17 M 0 0 Q -3 -16 -5 -21 M 0 0 Q 4 -16 8 -21 M 0 0 Q 9 -13 14 -16" stroke="#43A047" stroke-width="3" fill="none"/>
    <circle cx="-14" cy="-18" r="3" fill="#FDD835" stroke="#F9A825" stroke-width="1"/>
    <circle cx="-5" cy="-22" r="3" fill="#FDD835" stroke="#F9A825" stroke-width="1"/>
    <circle cx="8" cy="-22" r="3" fill="#FDD835" stroke="#F9A825" stroke-width="1"/>
    <circle cx="14" cy="-17" r="3" fill="#FDD835" stroke="#F9A825" stroke-width="1"/>
  </g>`;
const sack = (x, y, s = 1, t = "RIZ") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M -16 -18 Q -21 0 -14 13 Q 0 19 14 13 Q 21 0 16 -18 Q 0 -24 -16 -18 Z" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2.5"/>
    <line x1="-10" y1="-16" x2="10" y2="-16" stroke="#8D6E63" stroke-width="2.5"/>
    <text x="0" y="4" text-anchor="middle" font-size="12" font-weight="bold" fill="#5D4037">${t}</text>
  </g>`;
const hoe = (x, y, s = 1, rot = 0) => `
  <g transform="translate(${x},${y}) rotate(${rot}) scale(${s})">
    <line x1="0" y1="-30" x2="0" y2="6" stroke="#8D6E63" stroke-width="4"/>
    <path d="M -4 6 L 10 4 L 8 18 L -4 14 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/>
  </g>`;
const speech = (x, y, s = 1, t = "Salama !") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-34" y="-22" width="68" height="28" rx="10" fill="#FFFFFF" stroke="#546E7A" stroke-width="2"/>
    <polygon points="-6,6 6,6 0,16" fill="#FFFFFF" stroke="#546E7A" stroke-width="2"/>
    <text x="0" y="-3" text-anchor="middle" font-size="15" font-weight="bold" fill="#1F4E79">${t}</text>
  </g>`;
const noSign = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="0" r="28" fill="#FFF8E1" stroke="#C62828" stroke-width="5"/>
    <line x1="-20" y1="20" x2="20" y2="-20" stroke="#C62828" stroke-width="5"/>
  </g>`;
const numDot = (x, y, n, c = "#1F4E79") => `
  <circle cx="${x}" cy="${y}" r="18" fill="${c}"/>
  <text x="${x}" y="${y + 7}" text-anchor="middle" font-size="20" font-weight="bold" fill="#FFFFFF">${n}</text>`;
const bunting = (x1, x2, y) => {
  let out = `<path d="M ${x1} ${y} Q ${(x1 + x2) / 2} ${y + 18} ${x2} ${y}" fill="none" stroke="#5D4037" stroke-width="2"/>`;
  const n = 8;
  for (let i = 0; i < n; i++) {
    const t1 = i / n, t2 = (i + 0.5) / n;
    const mx = x1 + (x2 - x1) * t2;
    const my = y + 18 * (1 - Math.pow(2 * t2 - 1, 2)) * 0.9;
    const colors = ["#EF5350", "#FFCA28", "#66BB6A", "#42A5F5"];
    out += `<polygon points="${x1 + (x2 - x1) * t1 - 1},${y + 16 * (1 - Math.pow(2 * t1 - 1, 2)) * 0.9} ${mx},${my} ${x1 + (x2 - x1) * (t1 + 1 / n) - 1},${y + 16 * (1 - Math.pow(2 * t1 - 1, 2)) * 0.9} ${mx},${my + 14}" fill="${colors[i % 4]}"/>`;
  }
  return out;
};

// ── 1. Qu'est-ce que la population ? (S57) ─────────────────────────────
function svgPopulation() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "La population d'un village")}
  <rect x="30" y="410" width="1040" height="40" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2"/>
  ${house(170, 410, 1.05)}
  ${school(430, 410, 0.9)}
  ${house(940, 410, 1.0)}
  ${tree(820, 404, 1.2)}
  ${person(560, 406, 1.25)}
  ${personF(615, 406, 1.2)}
  ${baby(660, 398, 1.1)}
  ${elderly(720, 406, 1.15)}
  ${person(280, 410, 0.85)}
  ${personF(325, 410, 0.85)}
  ${person(505, 412, 0.8, "#81C784")}
  ${lbl(550, 486, "tous les habitants du village")}
  <path d="M 120 470 L 980 470" stroke="#1F4E79" stroke-width="3"/>
  ${lbl(550, 520, "LA POPULATION = L'ENSEMBLE DES HABITANTS D'UN LIEU", 23, "#1F4E79")}
  ${caption(1100, 550, "La population d'un village, c'est toutes les personnes qui y habitent.")}
</svg>`;
}

// ── 2. La répartition par sexe et par âge (S58) ───────────────────────
function svgSexeAge() {
  return `${svgHeader(1100, 640)}${DEFS}
  ${title(1100, "Répartir la population par sexe et par âge")}
  ${panel(40, 90, 490, 470)}
  <text x="285" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#1F4E79">PAR SEXE</text>
  ${person(150, 260, 1.35, "#42A5F5")}${person(230, 260, 1.35, "#42A5F5")}${person(310, 260, 1.35, "#42A5F5")}${person(390, 260, 1.35, "#42A5F5")}
  ${lbl(270, 300, "les garçons : 4")}
  ${personF(150, 440, 1.35)}${personF(230, 440, 1.35)}${personF(310, 440, 1.35)}${personF(390, 440, 1.35)}
  ${lbl(270, 480, "les filles : 4")}
  ${panel(570, 90, 490, 470)}
  <text x="815" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#1F4E79">PAR ÂGE</text>
  ${person(650, 280, 0.9)}${personF(700, 280, 0.9)}
  ${lbl(675, 320, "les enfants")}
  ${person(790, 270, 1.35)}${personF(870, 270, 1.35)}
  ${lbl(830, 320, "les adultes")}
  ${elderly(750, 460, 1.35)}${elderly(860, 460, 1.35)}
  ${lbl(815, 500, "les anciens")}
  ${caption(1100, 628, "On répartit la population par sexe (garçons et filles) et par âge (enfants, adultes, anciens).")}
</svg>`;
}

// ── 3. L'effectif de l'école et du village (S59) ───────────────────────
function svgEffectif() {
  const cols = [260, 150, 150, 150];
  const rows = [["Classe", "Garçons", "Filles", "Total"], ["T1", "10", "12", "22"], ["T2", "11", "13", "24"], ["T3", "12", "11", "23"], ["T4", "12", "14", "26"], ["TOTAL", "45", "50", "95"]];
  let ty = 300;
  let table = "";
  rows.forEach((r, ri) => {
    let tx = 220;
    r.forEach((cell, ci) => {
      const w = cols[ci];
      table += `<rect x="${tx}" y="${ty}" width="${w}" height="${ri === 0 ? 46 : 44}" fill="${ri === 0 ? "#1F4E79" : ri === rows.length - 1 ? "#E8F5E9" : "#F5F9FC"}" stroke="#90A4AE" stroke-width="2"/>`;
      table += `<text x="${tx + w / 2}" y="${ty + (ri === 0 ? 30 : 29)}" text-anchor="middle" font-size="21" font-weight="bold" fill="${ri === 0 ? "#FFFFFF" : "#37474F"}">${cell}</text>`;
      tx += w;
    });
    ty += ri === 0 ? 46 : 44;
  });
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "L'effectif de l'école")}
  ${school(170, 260, 1.3)}
  ${person(320, 258, 1.2)}${personF(380, 258, 1.15)}${person(440, 260, 0.85)}
  <text x="285" y="315" text-anchor="middle" font-size="21" font-weight="bold" fill="#37474F">l'école compte ses élèves</text>
  ${table}
  ${lbl(560, 640, "L'effectif, c'est le nombre d'élèves ou d'habitants.", 22, "#1F4E79")}
  ${caption(1100, 652, " ")}
</svg>`;
}

// ── 4. Les naissances (S60) ───────────────────────────────────────────
function svgNaissances() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "Une naissance : la population augmente")}
  ${house(250, 430, 1.3)}
  ${person(450, 425, 1.4)}
  ${personF(530, 425, 1.35)}
  ${baby(590, 410, 1.5)}
  <circle cx="750" cy="380" r="40" fill="#E8F5E9" stroke="#2E7D32" stroke-width="4"/>
  <text x="750" y="398" text-anchor="middle" font-size="48" font-weight="bold" fill="#2E7D32">+</text>
  ${lbl(850, 375, "un nouvel", 22)}${lbl(850, 402, "habitant !", 22)}
  ${lbl(560, 490, "Le petit Rakoto vient de naître : bienvenue !")}
  <line x1="700" y1="530" x2="880" y2="530" stroke="#2E7D32" stroke-width="4" marker-end="url(#arrG)"/>
  ${lbl(560, 552, "la population du village AUGMENTE", 22, "#2E7D32")}
  ${caption(1100, 550, " ")}
</svg>`;
}

// ── 5. Les décès (S61) ────────────────────────────────────────────────
function svgDeces() {
  return `${svgHeader(1100, 560)}${DEFS}
  ${title(1100, "Un décès : la population diminue")}
  ${panel(180, 100, 740, 380, "#F5F5F5")}
  ${tomb(360, 430, 1.3)}
  ${tomb(480, 435, 1.0)}
  ${flowerPot(300, 448, 1.1)}
  ${flowerPot(540, 450, 1.0)}
  ${person(660, 428, 1.2, "#90A4AE")}
  ${personF(720, 428, 1.15, "#F8BBD0")}
  ${lbl(450, 150, "la famille accompagne son ancien", 22, "#546E7A")}
  <circle cx="880" cy="380" r="40" fill="#FBE9E7" stroke="#C62828" stroke-width="4"/>
  <text x="880" y="397" text-anchor="middle" font-size="48" font-weight="bold" fill="#C62828">−</text>
  <line x1="700" y1="530" x2="880" y2="530" stroke="#C62828" stroke-width="4" marker-end="url(#arrR)"/>
  ${lbl(560, 552, "la population du village DIMINUE", 22, "#C62828")}
  ${caption(1100, 550, " ")}
</svg>`;
}

// ── 6. Les migrations (S62) ───────────────────────────────────────────
function svgMigrations() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "Les migrations : départs et arrivées")}
  ${panel(40, 100, 400, 380, "#F1F8E9")}
  <text x="240" y="140" text-anchor="middle" font-size="25" font-weight="bold" fill="#2E7D32">LE VILLAGE</text>
  ${house(150, 330, 0.9)}${house(300, 330, 0.85)}
  ${tree(240, 322, 1.1)}
  ${zebu(140, 425, 0.85)}
  ${person(330, 425, 1.0)}
  ${panel(660, 100, 400, 380, "#E8EAF6")}
  <text x="860" y="140" text-anchor="middle" font-size="25" font-weight="bold" fill="#283593">LA VILLE</text>
  ${factory(780, 330, 0.9)}
  ${house(950, 330, 0.95, "#ECEFF1", "#37474F")}
  ${person(830, 428, 1.0)}
  ${personF(890, 428, 1.0)}
  <line x1="460" y1="230" x2="640" y2="230" stroke="#C62828" stroke-width="6" marker-end="url(#arrR)"/>
  <text x="550" y="212" text-anchor="middle" font-size="22" font-weight="bold" fill="#C62828">le départ</text>
  <line x1="640" y1="370" x2="460" y2="370" stroke="#2E7D32" stroke-width="6" marker-end="url(#arrG)"/>
  <text x="550" y="352" text-anchor="middle" font-size="22" font-weight="bold" fill="#2E7D32">l'arrivée</text>
  ${lbl(550, 545, "Partir, c'est émigrer ; arriver, c'est immigrer.", 22, "#1F4E79")}
  ${caption(1100, 588, "Les migrations changent le nombre d'habitants du village et de la ville.")}
</svg>`;
}

// ── 7. Les variables de la croissance (S63) ───────────────────────────
function svgCroissance() {
  return `${svgHeader(1100, 660)}${DEFS}
  ${title(1100, "Les trois variables de la croissance de la population")}
  ${panel(40, 90, 320, 300)}
  ${baby(200, 230, 1.8)}
  <text x="200" y="160" text-anchor="middle" font-size="24" font-weight="bold" fill="#2E7D32">+</text>
  ${lbl(200, 330, "LES NAISSANCES", 21, "#2E7D32")}
  ${lbl(200, 360, "font augmenter", 19)}
  ${panel(390, 90, 320, 300)}
  ${tomb(550, 260, 1.2)}
  <text x="550" y="160" text-anchor="middle" font-size="24" font-weight="bold" fill="#C62828">−</text>
  ${lbl(550, 330, "LES DÉCÈS", 21, "#C62828")}
  ${lbl(550, 360, "font diminuer", 19)}
  ${panel(740, 90, 320, 300)}
  ${house(860, 260, 0.75)}
  <line x1="800" y1="230" x2="900" y2="230" stroke="#C62828" stroke-width="4" marker-end="url(#arrR)"/>
  <line x1="920" y1="270" x2="820" y2="270" stroke="#2E7D32" stroke-width="4" marker-end="url(#arrG)"/>
  ${lbl(900, 330, "LES MIGRATIONS", 21, "#E65100")}
  ${lbl(900, 360, "départs et arrivées", 19)}
  ${panel(120, 420, 860, 160, "#F5F9FC")}
  <text x="550" y="470" text-anchor="middle" font-size="23" font-weight="bold" fill="#1F4E79">naissances + arrivées &gt; décès + départs</text>
  <line x1="430" y1="540" x2="670" y2="540" stroke="#2E7D32" stroke-width="5" marker-end="url(#arrG)"/>
  <text x="550" y="520" text-anchor="middle" font-size="23" font-weight="bold" fill="#2E7D32">la population AUGMENTE</text>
  ${caption(1100, 648, "Trois variables font grandir ou diminuer la population : les naissances, les décès, les migrations.")}
</svg>`;
}

// ── 8. Les us et coutumes (S64) ───────────────────────────────────────
function svgUsCoutumes() {
  return `${svgHeader(1100, 680)}${DEFS}
  ${title(1100, "Les us et coutumes de Madagascar")}
  ${panel(40, 90, 490, 250)}
  ${bunting(80, 480, 130)}
  ${person(160, 300, 1.15)}${personF(230, 300, 1.1)}
  <path d="M 195 240 m -8,0 a 8,8 0 1,0 16,0 a 8,8 0 1,0 -16,0" fill="#EC407A"/>
  ${lbl(400, 250, "le mariage")}
  ${lbl(400, 285, "la fête de la famille", 19, "#546E7A")}
  ${panel(570, 90, 490, 250)}
  ${bunting(610, 1010, 130)}
  ${person(700, 300, 1.15, "#81C784")}
  ${person(760, 315, 0.75)}
  ${personF(850, 300, 1.1)}
  ${lbl(860, 250, "la circoncision")}
  ${lbl(860, 285, "une grande fête", 19, "#546E7A")}
  ${panel(40, 360, 490, 250)}
  ${tomb(150, 560, 1.0)}
  ${person(260, 560, 1.05, "#90A4AE")}
  ${personF(320, 560, 1.0, "#F8BBD0")}
  ${person(380, 560, 1.05, "#BCAAA4")}
  ${lbl(430, 470, "l'exhumation")}
  ${lbl(430, 505, "on honore les ancêtres", 19, "#546E7A")}
  ${panel(570, 360, 490, 250)}
  ${tomb(700, 560, 1.1)}
  ${flowerPot(640, 570, 1.0)}
  ${personF(830, 560, 1.05, "#F8BBD0")}
  ${person(890, 560, 1.05, "#90A4AE")}
  ${lbl(940, 470, "l'enterrement")}
  ${lbl(940, 505, "on accompagne la famille", 19, "#546E7A")}
  ${caption(1100, 668, "Les us et coutumes : les habitudes et les traditions transmises par les anciens.")}
</svg>`;
}

// ── 9. Le respect des fady (S65) ──────────────────────────────────────
function svgFady() {
  return `${svgHeader(1100, 620)}${DEFS}
  ${title(1100, "Le respect des fady")}
  ${panel(40, 90, 320, 380, "#FFF8E1")}
  ${hoe(180, 300, 2.0, 15)}
  <rect x="90" y="330" width="220" height="26" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
  ${noSign(200, 190, 1.15)}
  ${lbl(200, 400, "ne pas travailler", 19)}
  ${lbl(200, 426, "la terre certains jours", 19)}
  ${panel(390, 90, 320, 380, "#FFF8E1")}
  ${waterBand(430, 330, 240)}
  ${canoe(550, 322, 1.1)}
  ${noSign(550, 190, 1.15)}
  ${lbl(550, 400, "ne pas pêcher", 19)}
  ${lbl(550, 426, "certains jours", 19)}
  ${panel(740, 90, 320, 380, "#FFF8E1")}
  ${tomb(900, 330, 1.0)}
  ${tree(830, 322, 0.9)}
  ${noSign(900, 190, 1.15)}
  ${lbl(900, 400, "ne pas entrer dans", 19)}
  ${lbl(900, 426, "les lieux sacrés", 19)}
  ${lbl(550, 530, "Le fady est une interdiction traditionnelle : on le respecte.", 22, "#C62828")}
  ${caption(1100, 590, "Chaque région de Madagascar a ses fady : on les respecte partout où l'on va.")}
</svg>`;
}

// ── 10. Langue, vêtement, mode de vie (S66) ───────────────────────────
function svgSocioculturel() {
  return `${svgHeader(1100, 680)}${DEFS}
  ${title(1100, "Nos caractéristiques socioculturelles")}
  ${panel(40, 90, 490, 250)}
  ${person(160, 300, 1.2)}
  ${personF(300, 300, 1.15)}
  ${speech(230, 200, 1.2, "Salama !")}
  ${lbl(400, 250, "la langue")}
  ${lbl(400, 285, "le malgache", 19, "#546E7A")}
  ${panel(570, 90, 490, 250)}
  ${personF(700, 300, 1.3)}
  <path d="M 690 262 L 736 262 L 748 330 L 702 330 Z" fill="#EC407A" stroke="#AD1457" stroke-width="2"/>
  ${person(850, 300, 1.25)}
  <ellipse cx="850" cy="240" rx="24" ry="7" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
  <ellipse cx="843" cy="232" rx="12" ry="11" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
  ${lbl(950, 250, "le vêtement")}
  ${lbl(950, 285, "le lamba, le chapeau", 19, "#546E7A")}
  ${panel(40, 360, 490, 250)}
  <circle cx="160" cy="470" r="26" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
  <path d="M 160 444 L 160 418 M 160 424 L 148 412 M 160 424 L 172 412" stroke="#5D4037" stroke-width="3" fill="none"/>
  <circle cx="330" cy="470" r="26" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>
  <path d="M 330 444 Q 338 400 352 392 M 330 448 Q 330 398 344 386" stroke="#5D4037" stroke-width="3" fill="none"/>
  ${lbl(400, 545, "les coiffures")}
  ${lbl(400, 578, "les tresses des anciens", 19, "#546E7A")}
  ${panel(570, 360, 490, 250)}
  ${house(700, 560, 0.8)}
  ${ricePlant(820, 555, 1.3)}${ricePlant(870, 555, 1.1)}
  ${zebu(940, 550, 0.65)}
  ${lbl(800, 470, "le mode de vie")}
  ${lbl(800, 505, "le riz, le zébu, la case", 19, "#546E7A")}
  ${caption(1100, 668, "Notre famille a une origine, une langue, des vêtements et un mode de vie.")}
</svg>`;
}

// ── 11. Les activités : panorama (S67) ────────────────────────────────
function svgActivites() {
  return `${svgHeader(1100, 680)}${DEFS}
  ${title(1100, "Les grandes activités de la population")}
  ${panel(40, 90, 320, 240)}${panel(390, 90, 320, 240)}${panel(740, 90, 320, 240)}
  ${panel(40, 350, 320, 240)}${panel(390, 350, 320, 240)}${panel(740, 350, 320, 240)}
  ${ricePlant(140, 260, 1.6)}${ricePlant(200, 260, 1.3)}${person(270, 245, 1.0, "#81C784")}
  ${lbl(200, 300, "l'agriculture")}
  ${canoe(500, 265, 1.2)}${fish(590, 240, 1.2)}
  ${lbl(550, 300, "la pêche")}
  ${basket(860, 270, 1.6)}${pot(950, 275, 1.4)}
  ${lbl(900, 300, "l'artisanat")}
  ${factory(200, 530, 1.1)}
  ${lbl(200, 560, "l'industrie")}
  ${stall(550, 545, 1.1)}
  ${lbl(550, 560, "le commerce")}
  ${bus(900, 545, 0.85)}
  ${lbl(900, 560, "le transport")}
  ${caption(1100, 668, "Six grandes activités : agriculture, pêche, artisanat, industrie, commerce, transport.")}
</svg>`;
}

// ── 12. L'agriculture (S68) ───────────────────────────────────────────
function svgAgriculture() {
  return `${svgHeader(1100, 640)}${DEFS}
  ${title(1100, "L'agriculture : cultiver la terre")}
  <path d="M 40 300 Q 260 250 540 300 Q 800 350 1060 300 L 1060 320 Q 800 370 540 320 Q 260 270 40 320 Z" fill="#81C784" stroke="#558B2F" stroke-width="2.5"/>
  <path d="M 40 390 Q 260 340 540 390 Q 800 440 1060 390 L 1060 410 Q 800 460 540 410 Q 260 360 40 410 Z" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2.5"/>
  <path d="M 40 480 Q 260 430 540 480 Q 800 530 1060 480 L 1060 500 Q 800 550 540 500 Q 260 450 40 500 Z" fill="#AED581" stroke="#66BB6A" stroke-width="2.5"/>
  ${zebu(180, 560, 1.15)}
  ${hoe(265, 520, 1.5, 30)}
  ${person(320, 545, 1.15, "#81C784")}
  ${lbl(180, 610, "le labourage", 19)}
  ${ricePlant(500, 470, 1.5)}${ricePlant(560, 480, 1.3)}${ricePlant(620, 470, 1.4)}
  ${person(700, 500, 1.0, "#81C784")}
  ${lbl(590, 610, "le repiquage du riz", 19)}
  ${sack(880, 570, 1.5)}
  ${person(960, 560, 1.1, "#FFB74D")}
  ${lbl(930, 610, "la récolte", 19)}
  ${caption(1100, 632, "L'agriculture nourrit les familles : le riz, le manioc, le maïs, les légumes.")}
</svg>`;
}

// ── 13. L'élevage et la pêche (S69) ───────────────────────────────────
function svgElevagePeche() {
  return `${svgHeader(1100, 580)}${DEFS}
  ${title(1100, "L'élevage et la pêche")}
  ${panel(40, 90, 490, 400, "#F1F8E9")}
  <text x="285" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#2E7D32">L'ÉLEVAGE</text>
  ${zebu(180, 300, 1.3)}
  ${zebu(330, 310, 0.9)}
  ${hen(150, 420, 1.2)}${hen(220, 430, 1.0)}${hen(280, 418, 1.1)}
  ${lbl(285, 470, "zébus, poules, canards, chèvres")}
  ${panel(570, 90, 490, 400, "#E1F5FE")}
  <text x="815" y="130" text-anchor="middle" font-size="25" font-weight="bold" fill="#0277BD">LA PÊCHE</text>
  ${waterBand(610, 380, 410)}
  ${canoe(780, 372, 1.3)}
  ${person(780, 345, 0.85, "#4FC3F7")}
  <line x1="820" y1="320" x2="860" y2="380" stroke="#5D4037" stroke-width="2"/>
  ${fish(900, 405, 1.2)}${fish(700, 410, 1.0)}
  ${lbl(815, 470, "la pirogue, le filet, la ligne")}
  ${caption(1100, 568, "Élever des animaux et pêcher le poisson : deux activités qui nourrissent les familles.")}
</svg>`;
}

// ── 14. L'artisanat (S70) ─────────────────────────────────────────────
function svgArtisanat() {
  return `${svgHeader(1100, 600)}${DEFS}
  ${title(1100, "L'artisanat : travailler avec ses mains")}
  ${panel(40, 90, 320, 420)}${panel(390, 90, 320, 420)}${panel(740, 90, 320, 420)}
  ${personF(140, 400, 1.15)}
  ${loom(240, 445, 1.25)}
  ${lbl(200, 490, "la tisserande")}
  ${lbl(200, 520, "le lamba, les nattes", 18, "#546E7A")}
  ${person(530, 400, 1.1, "#BCAAA4")}
  ${pot(450, 460, 1.6)}${pot(530, 475, 1.2)}
  ${lbl(550, 490, "le potier")}
  ${lbl(550, 520, "les jarres, les pots", 18, "#546E7A")}
  ${person(880, 400, 1.1, "#81C784")}
  ${basket(790, 465, 1.5)}${basket(880, 480, 1.1)}
  ${lbl(900, 490, "le vannier")}
  ${lbl(900, 520, "les paniers, les nattes", 18, "#546E7A")}
  ${caption(1100, 588, "L'artisanat : fabriquer des objets utiles avec ses mains et des matières de la nature.")}
</svg>`;
}

// ── 15. L'industrie (S71) ─────────────────────────────────────────────
function svgIndustrie() {
  return `${svgHeader(1100, 580)}${DEFS}
  ${title(1100, "L'industrie : transformer les produits")}
  ${ricePlant(150, 300, 1.8)}${ricePlant(210, 300, 1.4)}
  <text x="180" y="360" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">le riz récolté</text>
  <line x1="280" y1="290" x2="410" y2="290" stroke="#37474F" stroke-width="5" marker-end="url(#arrK)"/>
  ${factory(540, 330, 1.5)}
  ${person(430, 470, 1.1)}${person(660, 470, 1.1)}
  ${lbl(545, 500, "les ouvriers de l'usine", 19)}
  <line x1="680" y1="290" x2="810" y2="290" stroke="#37474F" stroke-width="5" marker-end="url(#arrK)"/>
  ${sack(890, 330, 1.7)}${sack(960, 345, 1.3)}
  <text x="920" y="400" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">le riz décortiqué,</text>
  <text x="920" y="426" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">prêt à vendre</text>
  ${caption(1100, 568, "L'usine transforme les produits de la terre : le riz, le savon, le tissu, le sucre.")}
</svg>`;
}

// ── 16. Le commerce (S72) ─────────────────────────────────────────────
function svgCommerce() {
  return `${svgHeader(1100, 580)}${DEFS}
  ${title(1100, "Le commerce : acheter et vendre")}
  ${stall(240, 420, 1.3)}
  ${personF(240, 395, 1.15, "#F8BBD0")}
  ${stall(560, 420, 1.2, "#42A5F5")}
  ${person(560, 395, 1.1)}
  ${personF(860, 430, 1.2)}
  ${basket(905, 425, 1.1)}
  <text x="860" y="500" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">l'acheteuse</text>
  <text x="240" y="500" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">la vendeuse de brèdes</text>
  <text x="560" y="500" text-anchor="middle" font-size="20" font-weight="bold" fill="#37474F">le vendeur de fruits</text>
  ${lbl(550, 545, "au marché, on vend ce qu'on produit et on achète ce qu'il faut.", 21, "#1F4E79")}
  ${caption(1100, 568, " ")}
</svg>`;
}

// ── 17. Le transport (S73) ────────────────────────────────────────────
function svgTransport() {
  return `${svgHeader(1100, 640)}${DEFS}
  ${title(1100, "Le transport : déplacer personnes et marchandises")}
  ${panel(40, 90, 490, 240)}
  ${road(80, 240, 410)}
  ${bus(250, 232, 0.9)}
  ${lbl(285, 300, "le taxi-brousse")}
  ${panel(570, 90, 490, 240)}
  ${road(610, 240, 410)}
  ${truck(790, 228, 0.95)}
  ${lbl(815, 300, "le camion")}
  ${panel(40, 350, 490, 240)}
  ${waterBand(80, 480, 410)}
  ${canoe(240, 470, 1.3)}
  ${lbl(285, 560, "la pirogue")}
  ${panel(570, 350, 490, 240)}
  <rect x="610" y="510" width="410" height="24" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2"/>
  ${cart(750, 500, 1.2)}
  ${zebu(860, 485, 0.85)}
  ${lbl(815, 560, "la charrette à zébu")}
  ${caption(1100, 628, "Le transport relie les villages et les villes : routes, rivières et pistes.")}
</svg>`;
}

// ── 18. Les activités de ma localité : synthèse (S74) ─────────────────
function svgMaLocalite() {
  return `${svgHeader(1100, 720)}${DEFS}
  ${title(1100, "Les activités de ma localité")}
  <rect x="30" y="470" width="1040" height="36" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2"/>
  ${waterBand(30, 560, 380)}
  ${house(150, 470, 0.85)}
  ${school(370, 470, 0.75)}
  ${ricePlant(500, 460, 1.2)}${ricePlant(545, 465, 1.0)}${ricePlant(590, 460, 1.1)}
  ${person(660, 465, 0.95, "#81C784")}
  ${zebu(760, 462, 0.8)}
  ${stall(930, 470, 0.85)}
  ${canoe(150, 550, 1.0)}
  ${person(260, 545, 0.9, "#4FC3F7")}
  ${cart(700, 550, 0.9)}
  ${basket(960, 640, 1.0)}${pot(1030, 645, 0.9)}
  ${numDot(500, 400, "1", "#2E7D32")}
  ${numDot(760, 390, "2", "#2E7D32")}
  ${numDot(200, 500, "3", "#0277BD")}
  ${numDot(990, 580, "4", "#E65100")}
  ${numDot(930, 400, "5", "#C2185B")}
  ${numDot(770, 500, "6", "#5D4037")}
  <text x="330" y="660" text-anchor="middle" font-size="19" font-weight="bold" fill="#2E7D32">1 l'agriculture — 2 l'élevage</text>
  <text x="790" y="660" text-anchor="middle" font-size="19" font-weight="bold" fill="#0277BD">3 la pêche — 4 l'artisanat</text>
  <text x="330" y="692" text-anchor="middle" font-size="19" font-weight="bold" fill="#C2185B">5 le commerce — 6 le transport</text>
  ${caption(1100, 716, "Chaque localité a ses activités : les découvrir, c'est connaître ses habitants.")}
</svg>`;
}

const SVG = {
  geot4_population: svgPopulation(),
  geot4_sexe_age: svgSexeAge(),
  geot4_effectif: svgEffectif(),
  geot4_naissances: svgNaissances(),
  geot4_deces: svgDeces(),
  geot4_migrations: svgMigrations(),
  geot4_croissance: svgCroissance(),
  geot4_us_coutumes: svgUsCoutumes(),
  geot4_fady: svgFady(),
  geot4_socioculturel: svgSocioculturel(),
  geot4_activites: svgActivites(),
  geot4_agriculture: svgAgriculture(),
  geot4_elevage_peche: svgElevagePeche(),
  geot4_artisanat: svgArtisanat(),
  geot4_industrie: svgIndustrie(),
  geot4_commerce: svgCommerce(),
  geot4_transport: svgTransport(),
  geot4_ma_localite: svgMaLocalite(),
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
