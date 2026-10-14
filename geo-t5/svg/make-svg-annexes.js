// make-svg-annexes.js — Schémas des ANNEXES du Manuel Géographie T5
// Cartes muettes : planisphère, océan Indien, Madagascar, régions naturelles
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, ".."); // geo-t5/
const REPO = path.resolve(OUT, "..");   // racine du dépôt
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const cadre = (x, y, w, h, fill = "#EAF6FB") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="#90A4AE" stroke-width="3"/>`;
const titreSvg = (t, w = 1100) =>
  `<text x="${w / 2}" y="52" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${t}</text>`;
const caption = (t, y, w = 1100) =>
  `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const txt = (x, y, t, { size = 21, fill = "#263238", anchor = "middle", bold = false, italic = false } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${fill}"${bold ? ' font-weight="bold"' : ""}${italic ? ' font-style="italic"' : ""}>${t}</text>`;
const dot = (x, y, r, fill = "#C00000", stroke = "#7f0000") =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;

// Silhouette simplifiée de Madagascar (boîte locale 100 × 200, nord en haut)
const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const mada = (cx, cy, h, { fill = "#A5D6A7", stroke = "#2E7D32", sw = 3 } = {}) => {
  const s = h / 200;
  return `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)"><path d="${MADA}" fill="${fill}" stroke="${stroke}" stroke-width="${sw / s}" stroke-linejoin="round"/></g>`;
};
const madaZones = (id, cx, cy, h, shapes) => {
  const s = h / 200;
  return `<defs><clipPath id="${id}"><path d="${MADA}"/></clipPath></defs>` +
    `<g clip-path="url(#${id})" transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)">${shapes}</g>`;
};
const L = (cx, cy, h, lx, ly) => [cx + (lx - 50) * h / 200, cy + (ly - 100) * h / 200];
const dotL = (cx, cy, h, lx, ly, r = 6, fill = "#C00000", stroke = "#7f0000") => {
  const [x, y] = L(cx, cy, h, lx, ly);
  return dot(x, y, r, fill, stroke);
};
const txtL = (cx, cy, h, lx, ly, t, o = {}) => {
  const [x, y] = L(cx, cy, h, lx, ly);
  return txt(x, y, t, o);
};

const star = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <polygon points="0,-15 3.8,-5.3 14.3,-4.6 6.2,2 8.8,12.1 0,6.5 -8.8,12.1 -6.2,2 -14.3,-4.6 -3.8,-5.3" fill="#C00000" stroke="#7F0000" stroke-width="2"/>
  </g>`;

// pastille numérotée blanche
const numDot = (x, y, n) => `
  <circle cx="${x}" cy="${y}" r="19" fill="#FFFFFF" stroke="#37474F" stroke-width="3"/>
  <text x="${x}" y="${y + 8}" text-anchor="middle" font-size="23" font-weight="bold" fill="#37474F">${n}</text>`;

// ── 1. Le planisphère à compléter ──────────────────────────────────────
function svgPlanisphereVide() {
  // continents gris simplifiés (le marron/gris indique « à nommer »)
  const cont = (d, lx, ly, hint) => {
    const [x, y] = [lx, ly];
    return `<path d="${d}" fill="#CFD8DC" stroke="#607D8B" stroke-width="3" stroke-linejoin="round"/>` +
      txt(x, y, "……", { size: 26, bold: true, fill: "#1B5E20" }) +
      (hint ? txt(x, y + 24, hint, { size: 14, fill: "#78909C", italic: true }) : "");
  };
  return `${svgHeader(1100, 660)}
  ${titreSvg("Le planisphère à compléter")}
  ${cadre(40, 90, 1020, 500)}
  ${cont("M 130 150 L 205 118 L 275 140 L 296 200 L 258 248 L 214 240 L 176 286 L 140 244 L 108 190 Z", 205, 195, "l'Amérique du Nord ?")}
  ${cont("M 238 268 L 276 288 L 298 330 L 282 348 L 248 304 Z", 268, 305, "")}
  ${cont("M 282 358 L 342 342 L 378 388 L 362 462 L 322 528 L 292 542 L 276 468 L 262 402 Z", 322, 428, "l'Amérique du Sud ?")}
  ${cont("M 495 122 L 560 112 L 590 142 L 570 176 L 520 186 L 490 156 Z", 540, 152, "l'Europe ?")}
  ${cont("M 482 212 L 572 202 L 616 252 L 610 322 L 576 392 L 540 440 L 506 420 L 490 340 L 472 262 Z", 545, 300, "l'Afrique ?")}
  ${cont("M 612 112 L 732 96 L 862 120 L 902 182 L 852 242 L 782 266 L 702 252 L 640 202 L 602 152 Z", 760, 180, "l'Asie ?")}
  ${cont("M 802 392 L 902 386 L 942 442 L 902 492 L 822 487 L 782 442 Z", 862, 438, "l'Océanie ?")}
  <rect x="70" y="528" width="960" height="42" rx="12" fill="#CFD8DC" stroke="#607D8B" stroke-width="3"/>
  ${txt(550, 556, "……", { size: 24, bold: true, fill: "#1B5E20" })}
  ${txt(550, 578, "le continent glacé du pôle Sud ?", { size: 14, fill: "#78909C", italic: true })}
  ${txt(390, 118, "océan ……", { size: 20, fill: "#0277BD", italic: true, bold: true })}
  ${txt(150, 340, "océan ……", { size: 20, fill: "#0277BD", italic: true, bold: true })}
  ${txt(998, 340, "océan ……", { size: 20, fill: "#0277BD", italic: true, bold: true })}
  ${txt(430, 300, "océan ……", { size: 20, fill: "#0277BD", italic: true, bold: true })}
  ${txt(700, 402, "océan ……", { size: 20, fill: "#0277BD", italic: true, bold: true })}
  <line x1="70" y1="345" x2="1030" y2="345" stroke="#C00000" stroke-width="2.5" stroke-dasharray="12 8"/>
  ${txt(1035, 340, "l'équateur ?", { size: 14, fill: "#C00000", italic: true, anchor: "end" })}
  ${caption("Écris le nom des sept continents et des cinq océans. La ligne pointillée rouge est une ligne imaginaire : laquelle ?", 630)}
</svg>`;
}

// ── 2. L'océan Indien à compléter ──────────────────────────────────────
function svgOceanIndienVide() {
  return `${svgHeader(1100, 660)}
  ${titreSvg("L'océan Indien à compléter")}
  ${cadre(40, 90, 1020, 500, "#EAF6FB")}
  <path d="M 60 210 L 210 186 L 330 250 L 356 372 L 292 512 L 214 556 L 162 428 L 106 320 Z" fill="#CFD8DC" stroke="#607D8B" stroke-width="3" stroke-linejoin="round"/>
  ${txt(190, 330, "……", { size: 30, bold: true, fill: "#1B5E20" })}
  ${txt(190, 354, "le continent ?", { size: 15, fill: "#78909C", italic: true })}
  <path d="M 640 96 L 726 104 L 764 168 L 706 240 L 652 176 Z" fill="#CFD8DC" stroke="#607D8B" stroke-width="3" stroke-linejoin="round"/>
  ${txt(700, 170, "……", { size: 24, bold: true, fill: "#1B5E20" })}
  ${txt(700, 192, "grande péninsule d'Asie ?", { size: 14, fill: "#78909C", italic: true })}
  ${mada(520, 400, 300, { fill: "#A5D6A7" })}
  ${txt(520, 420, "……", { size: 26, bold: true, fill: "#C00000" })}
  ${txt(520, 444, "la grande île ?", { size: 15, fill: "#78909C", italic: true })}
  ${numDot(452, 268, "1")}
  ${numDot(474, 300, "2")}
  ${numDot(640, 320, "3")}
  ${numDot(596, 496, "4")}
  ${numDot(618, 522, "5")}
  ${txt(390, 130, "océan ……", { size: 24, fill: "#0277BD", italic: true, bold: true })}
  ${txt(880, 130, "les cinq îles voisines :", { size: 18, fill: "#546E7A", italic: true })}
  ${txt(880, 162, "1. les Comores — 2. Mayotte", { size: 18, fill: "#546E7A", italic: true })}
  ${txt(880, 190, "3. les Seychelles — 4. Maurice", { size: 18, fill: "#546E7A", italic: true })}
  ${txt(880, 218, "5. La Réunion", { size: 18, fill: "#546E7A", italic: true })}
  ${caption("Écris le nom du continent, de l'océan, de la grande île et place les cinq îles voisines : laquelle est laquelle ?", 630)}
</svg>`;
}

// ── 3. La carte de Madagascar à compléter ──────────────────────────────
function svgCarteMuetteMada() {
  const cx = 480, cy = 400, h = 480;
  return `${svgHeader(1100, 720)}
  ${titreSvg("La carte de Madagascar à compléter")}
  ${mada(cx, cy, h, { fill: "#F5F5F5", stroke: "#5D4037", sw: 4 })}
  ${(() => { const [x, y] = L(cx, cy, h, 48, 100); return star(x, y - 2, 1.2); })()}
  ${txt(...L(cx, cy, h, 62, 100), "……", { size: 24, bold: true, fill: "#C00000", anchor: "start" })}
  ${txt(...L(cx, cy, h, 62, 106), "la capitale ?", { size: 14, fill: "#78909C", italic: true, anchor: "start" })}
  ${dotL(cx, cy, h, 24, 16, 6)}
  ${txtL(cx, cy, h, 14, 14, "……", { size: 19, bold: true, fill: "#0277BD" })}
  ${dotL(cx, cy, h, 80, 98, 5)}
  ${txtL(cx, cy, h, 90, 92, "……", { size: 19, bold: true, fill: "#0277BD", anchor: "start" })}
  <line x1="${cx - 140}" y1="${cy + (160 - 100) * h / 200}" x2="${cx + 140}" y2="${cy + (160 - 100) * h / 200}" stroke="#C00000" stroke-width="3.5" stroke-dasharray="12 7"/>
  ${txt(cx + 148, cy + (160 - 100) * h / 200 - 6, "……", { size: 20, bold: true, fill: "#C00000", anchor: "start" })}
  ${txt(cx + 148, cy + (160 - 100) * h / 200 + 16, "la ligne imaginaire ?", { size: 14, fill: "#78909C", italic: true, anchor: "start" })}
  ${txt(480, 108, "……", { size: 30, bold: true, fill: "#1F4E79" })}
  ${txt(480, 660, "……", { size: 30, bold: true, fill: "#1F4E79" })}
  ${txt(240, 390, "……", { size: 30, bold: true, fill: "#1F4E79" })}
  ${txt(770, 390, "……", { size: 30, bold: true, fill: "#1F4E79" })}
  <g>
    <rect x="820" y="180" width="240" height="210" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
    ${txt(940, 214, "Aide-mémoire", { size: 21, bold: true })}
    ${txt(940, 252, "les quatre points", { size: 18, fill: "#546E7A" })}
    ${txt(940, 276, "cardinaux ;", { size: 18, fill: "#546E7A" })}
    ${txt(940, 312, "l'île au nord-ouest ;", { size: 18, fill: "#546E7A" })}
    ${txt(940, 348, "l'île longue de la", { size: 18, fill: "#546E7A" })}
    ${txt(940, 372, "côte Est.", { size: 18, fill: "#546E7A" })}
  </g>
  ${caption("Écris les quatre points cardinaux, le nom de la capitale, des deux îles et de la ligne imaginaire pointillée.", 700)}
</svg>`;
}

// ── 4. La carte des régions naturelles à compléter ─────────────────────
function svgCarteMuetteRegions() {
  const cx = 350, cy = 330, h = 400;
  return `${svgHeader(1100, 640)}
  ${titreSvg("Les régions naturelles de Madagascar à compléter")}
  ${cadre(40, 90, 600, 470, "#FDFBF3")}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("zreg", cx, cy, h, `
    <rect x="62" y="0" width="38" height="200" fill="#66BB6A"/>
    <rect x="0" y="45" width="28" height="110" fill="#FFB74D"/>
    <path d="M 8 150 L 100 162 L 100 200 L 8 192 Z" fill="#E57373"/>
    <rect x="0" y="0" width="100" height="48" fill="#4DD0E1"/>
    <ellipse cx="48" cy="100" rx="26" ry="46" fill="#BCAAA4"/>`)}
  ${(() => { const [x, y] = L(cx, cy, h, 48, 26); return numDot(x, y, "1"); })()}
  ${(() => { const [x, y] = L(cx, cy, h, 78, 78); return numDot(x, y, "2"); })()}
  ${(() => { const [x, y] = L(cx, cy, h, 16, 96); return numDot(x, y, "3"); })()}
  ${(() => { const [x, y] = L(cx, cy, h, 52, 176); return numDot(x, y, "4"); })()}
  ${(() => { const [x, y] = L(cx, cy, h, 48, 100); return numDot(x, y, "5"); })()}
  <g>
    <rect x="680" y="120" width="340" height="400" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
    ${txt(850, 158, "Légende à compléter", { size: 24, bold: true })}
    <rect x="705" y="192" width="24" height="16" fill="#4DD0E1" stroke="#90A4AE" stroke-width="2"/>
    ${txt(742, 206, "1. …………………………………", { size: 21, bold: true, anchor: "start" })}
    <rect x="705" y="252" width="24" height="16" fill="#66BB6A" stroke="#90A4AE" stroke-width="2"/>
    ${txt(742, 266, "2. …………………………………", { size: 21, bold: true, anchor: "start" })}
    <rect x="705" y="312" width="24" height="16" fill="#FFB74D" stroke="#90A4AE" stroke-width="2"/>
    ${txt(742, 326, "3. …………………………………", { size: 21, bold: true, anchor: "start" })}
    <rect x="705" y="372" width="24" height="16" fill="#E57373" stroke="#90A4AE" stroke-width="2"/>
    ${txt(742, 386, "4. …………………………………", { size: 21, bold: true, anchor: "start" })}
    <rect x="705" y="432" width="24" height="16" fill="#BCAAA4" stroke="#90A4AE" stroke-width="2"/>
    ${txt(742, 446, "5. …………………………………", { size: 21, bold: true, anchor: "start" })}
    ${txt(850, 496, "★ la capitale", { size: 19, fill: "#C00000" })}
  </g>
  ${caption("Écris le nom des cinq régions naturelles de Madagascar dans la légende.", 620)}
</svg>`;
}

const SVG = {
  geo5_planisphere_vide: svgPlanisphereVide(),
  geo5_ocean_indien_vide: svgOceanIndienVide(),
  geo5_carte_muette_mada: svgCarteMuetteMada(),
  geo5_carte_muette_regions: svgCarteMuetteRegions(),
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
