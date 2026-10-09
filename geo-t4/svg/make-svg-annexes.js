// make-svg-annexes.js — Schémas des ANNEXES du Manuel Géographie T4
// Cartes muettes (Madagascar, climats) + rose des vents vierge à compléter
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const title = (w, t) =>
  `<text x="${w / 2}" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">${t}</text>`;
const caption = (w, y, t) =>
  `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const lbl = (x, y, t, size = 21, color = "#37474F") =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}" font-weight="bold" fill="${color}">${t}</text>`;

// silhouette simplifiée de Madagascar (boîte locale 400 × 620)
const MADA = "M 205,15 C 235,50 265,90 268,135 C 300,160 322,180 315,205 C 305,225 285,230 282,255 C 300,290 305,330 295,370 C 288,420 275,455 250,500 C 235,535 210,565 188,588 C 172,570 178,545 172,515 C 160,470 170,430 158,390 C 148,350 160,315 150,275 C 142,240 155,205 148,170 C 142,130 160,90 178,55 C 186,35 195,22 205,15 Z";

// étoile rouge (capitale)
const star = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <polygon points="0,-15 3.8,-5.3 14.3,-4.6 6.2,2 8.8,12.1 0,6.5 -8.8,12.1 -6.2,2 -14.3,-4.6 -3.8,-5.3" fill="#C00000" stroke="#7F0000" stroke-width="2"/>
  </g>`;

// ── 1. La rose des vents à compléter ───────────────────────────────────
function svgRoseVide() {
  const cx = 550, cy = 350, R = 215, R2 = 135;
  const dirs = [
    [0, "N", R, "#C00000"], [90, "……", R, "#1F4E79"], [180, "……", R, "#1F4E79"], [270, "……", R, "#1F4E79"],
    [45, "……", R2, "#546E7A"], [135, "……", R2, "#546E7A"], [225, "……", R2, "#546E7A"], [315, "……", R2, "#546E7A"],
  ];
  const spokes = dirs.map(([a, t, r, c]) => {
    const rad = (a - 90) * Math.PI / 180;
    const x2 = (cx + r * Math.cos(rad)).toFixed(1), y2 = (cy + r * Math.sin(rad)).toFixed(1);
    const xr = (cx + (r + 42) * Math.cos(rad)).toFixed(1), yr = (cy + (r + 42) * Math.sin(rad)).toFixed(1);
    const isCard = r === R;
    return `<line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${isCard && a === 0 ? 10 : isCard ? 7 : 5}" stroke-linecap="round"/>
      <text x="${xr}" y="${Number(yr) + 9}" text-anchor="middle" font-size="${a === 0 ? 40 : 30}" font-weight="bold" fill="${c}">${t}</text>`;
  }).join("\n  ");
  return `${svgHeader(1100, 640)}
  ${title(1100, "La rose des vents à compléter")}
  <circle cx="${cx}" cy="${cy}" r="26" fill="#ECEFF1" stroke="#546E7A" stroke-width="4"/>
  <circle cx="${cx}" cy="${cy}" r="180" fill="none" stroke="#B0BEC5" stroke-width="2" stroke-dasharray="10 8"/>
  ${spokes}
  ${caption(1100, 630, "Écris les sept directions qui manquent : les quatre points cardinaux et les quatre directions intermédiaires.")}
</svg>`;
}

// ── 2. La carte muette de Madagascar ───────────────────────────────────
function svgCarteMuetteMada() {
  return `${svgHeader(1100, 720)}
  ${title(1100, "La carte de Madagascar à compléter")}
  <g transform="translate(350,70)">
    <path d="${MADA}" fill="#F5F5F5" stroke="#5D4037" stroke-width="4" stroke-linejoin="round"/>
    ${star(232, 295, 1.2)}
    <text x="262" y="290" font-size="26" font-weight="bold" fill="#C00000">……</text>
    <text x="262" y="316" font-size="19" fill="#546E7A">la capitale ?</text>
  </g>
  ${lbl(555, 46, "……", 30, "#1F4E79")}
  ${lbl(555, 708, "……", 30, "#1F4E79")}
  ${lbl(292, 380, "……", 30, "#1F4E79")}
  ${lbl(818, 380, "……", 30, "#1F4E79")}
  ${caption(1100, 712, " ")}
</svg>`;
}

// ── 3. La carte muette des climats ─────────────────────────────────────
function svgCarteMuetteClimats() {
  const numDot = (x, y, n) => `
    <circle cx="${x}" cy="${y}" r="19" fill="#FFFFFF" stroke="#37474F" stroke-width="3"/>
    <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="23" font-weight="bold" fill="#37474F">${n}</text>`;
  return `${svgHeader(1100, 760)}
  ${title(1100, "La carte des climats de Madagascar à compléter")}
  <defs>
    <clipPath id="madaClip"><path d="${MADA}"/></clipPath>
  </defs>
  <g transform="translate(240,80)">
    <g clip-path="url(#madaClip)">
      <rect x="100" y="0" width="120" height="620" fill="#FFF59D"/>
      <rect x="220" y="0" width="35" height="620" fill="#B3E5FC"/>
      <rect x="255" y="0" width="100" height="620" fill="#A5D6A7"/>
      <rect x="100" y="430" width="255" height="190" fill="#FFCC80"/>
    </g>
    <path d="${MADA}" fill="none" stroke="#5D4037" stroke-width="4" stroke-linejoin="round"/>
    ${numDot(160, 260, "1")}
    ${numDot(237, 320, "2")}
    ${numDot(285, 240, "3")}
    ${numDot(210, 500, "4")}
  </g>
  <g>
    <rect x="700" y="150" width="330" height="330" rx="14" fill="#F5F9FC" stroke="#90A4AE" stroke-width="3"/>
    <text x="865" y="195" text-anchor="middle" font-size="24" font-weight="bold" fill="#1F4E79">Légende à compléter</text>
    <circle cx="740" cy="245" r="16" fill="#FFF59D" stroke="#90A4AE" stroke-width="2.5"/>
    <text x="766" y="253" font-size="22" font-weight="bold" fill="#37474F">1. ……………………………………</text>
    <circle cx="740" cy="305" r="16" fill="#B3E5FC" stroke="#90A4AE" stroke-width="2.5"/>
    <text x="766" y="313" font-size="22" font-weight="bold" fill="#37474F">2. ……………………………………</text>
    <circle cx="740" cy="365" r="16" fill="#A5D6A7" stroke="#90A4AE" stroke-width="2.5"/>
    <text x="766" y="373" font-size="22" font-weight="bold" fill="#37474F">3. ……………………………………</text>
    <circle cx="740" cy="425" r="16" fill="#FFCC80" stroke="#90A4AE" stroke-width="2.5"/>
    <text x="766" y="433" font-size="22" font-weight="bold" fill="#37474F">4. ……………………………………</text>
  </g>
  ${caption(1100, 750, "Écris le nom des quatre régions climatiques de Madagascar dans la légende.")}
</svg>`;
}

const SVG = {
  geot4_rose_vents_vide: svgRoseVide(),
  geot4_carte_muette_mada: svgCarteMuetteMada(),
  geot4_carte_muette_climats: svgCarteMuetteClimats(),
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
