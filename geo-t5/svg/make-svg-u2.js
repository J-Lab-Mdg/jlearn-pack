// make-svg-u2.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T5 — UNITÉ 2
// Génère les SVG puis les convertit en PNG (~1100 px) avec sharp.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, ".."); // geo-t5/
const REPO = path.resolve(OUT, "..");   // racine du dépôt
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const cadre = (x, y, w, h, fill = "#EAF4FB") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${fill}" stroke="#90A4AE" stroke-width="3"/>`;
const titreSvg = (t, w = 1000) =>
  `<text x="${w / 2}" y="52" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${t}</text>`;
const caption = (t, y = 525, w = 1000) =>
  `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const txt = (x, y, t, { size = 21, fill = "#263238", anchor = "middle", bold = false, italic = false } = {}) =>
  `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${fill}"${bold ? ' font-weight="bold"' : ""}${italic ? ' font-style="italic"' : ""}>${t}</text>`;
const dot = (x, y, r, fill = "#C00000", stroke = "#7f0000") =>
  `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;
const DEFS_ARR = `<defs><marker id="arr" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#C00000"/></marker></defs>`;
const fleche = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C00000" stroke-width="3" marker-end="url(#arr)"/>`;

// Silhouette simplifiée de Madagascar (boîte locale 100 × 200, nord en haut)
const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const mada = (cx, cy, h, { fill = "#A5D6A7", stroke = "#2E7D32", sw = 3 } = {}) => {
  const s = h / 200;
  return `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)"><path d="${MADA}" fill="${fill}" stroke="${stroke}" stroke-width="${sw / s}" stroke-linejoin="round"/></g>`;
};

// ── S17. Situer Madagascar dans le monde ────────────────────────────────
function svgSituerMadaMonde() {
  const cont = (cx, cy, rx, ry, nom) =>
    `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#A5D6A7" stroke="#2E7D32" stroke-width="3"/>` +
    txt(cx, cy + 7, nom, { size: 20, fill: "#1B5E20", bold: true });
  return svgHeader(1000, 560) + titreSvg("Situer Madagascar dans le monde") + `
  ${cadre(40, 90, 920, 380)}
  ${cont(150, 250, 75, 95, "AMÉRIQUES")}
  ${cont(395, 155, 48, 32, "EUROPE")}
  ${cont(405, 290, 85, 100, "AFRIQUE")}
  ${cont(610, 165, 125, 75, "ASIE")}
  ${cont(800, 330, 65, 42, "AUSTRALIE")}
  ${txt(600, 295, "OCÉAN INDIEN", { size: 22, fill: "#0277BD", italic: true, bold: true })}
  ${txt(250, 175, "OCÉAN", { size: 20, fill: "#0277BD", italic: true })}
  ${txt(250, 200, "ATLANTIQUE", { size: 20, fill: "#0277BD", italic: true })}
  ${dot(500, 372, 7)}
  ${fleche(585, 432, 508, 378)}
  ${txt(610, 448, "MADAGASCAR", { size: 26, fill: "#C00000", bold: true })}
  ${caption("Madagascar est une île de l'océan Indien, au sud-est du continent africain : la 4e plus grande île du monde.", 525)}
</svg>`;
}

// ── S18. Madagascar et les lignes imaginaires ───────────────────────────
function svgMadaLignes() {
  const note = (x, y, l1, l2) => `
  <rect x="${x}" y="${y}" width="350" height="72" rx="12" fill="#FFF8E1" stroke="#F9A825" stroke-width="3"/>
  ${txt(x + 175, y + 30, l1, { size: 21 })}
  ${txt(x + 175, y + 56, l2, { size: 21 })}`;
  return svgHeader(1000, 580) + titreSvg("Madagascar et les lignes imaginaires") + `
  ${cadre(40, 90, 920, 410)}
  <line x1="60" y1="125" x2="560" y2="125" stroke="#0277BD" stroke-width="4" stroke-dasharray="12 7"/>
  ${txt(75, 115, "Équateur", { size: 22, fill: "#0277BD", bold: true, anchor: "start" })}
  ${mada(310, 320, 350)}
  <line x1="60" y1="425" x2="560" y2="425" stroke="#C00000" stroke-width="4" stroke-dasharray="12 7"/>
  ${txt(75, 462, "Tropique du Capricorne", { size: 22, fill: "#C00000", bold: true, anchor: "start" })}
  ${note(600, 125, "L'équateur passe au nord", "de Madagascar.")}
  ${note(600, 220, "Le tropique du Capricorne traverse", "le Sud de l'île, près de Toliara.")}
  ${note(600, 315, "Madagascar est donc entièrement", "dans l'hémisphère Sud.")}
  ${caption("Madagascar s'étend d'environ 12° à 25° de latitude Sud : tout le pays vit sous les tropiques.", 535)}
</svg>`;
}

// ── S19. Les îles qui appartiennent à Madagascar ────────────────────────
function svgIlesMada() {
  return svgHeader(1000, 580) + titreSvg("Les îles qui appartiennent à Madagascar") + `
  ${cadre(40, 90, 920, 400)}
  ${mada(400, 300, 380)}
  ${dot(349, 186, 7)}
  ${txt(337, 180, "Nosy Be", { size: 21, bold: true, anchor: "end" })}
  ${dot(453, 220, 6)}
  ${txt(465, 226, "Nosy Mangabe", { size: 21, bold: true, anchor: "start" })}
  ${dot(459, 310, 6)}
  ${txt(471, 316, "Île Sainte-Marie", { size: 21, bold: true, anchor: "start" })}
  ${dot(354, 395, 6)}
  ${txt(342, 401, "Nosy Anakao", { size: 21, bold: true, anchor: "end" })}
  <rect x="620" y="140" width="330" height="250" rx="14" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/>
  ${txt(785, 175, "Les îles de Madagascar", { size: 23, fill: "#1B5E20", bold: true })}
  ${dot(655, 215, 6)}${txt(670, 221, "Nosy Be — nord-ouest", { size: 21, anchor: "start" })}
  ${dot(655, 255, 6)}${txt(670, 261, "Nosy Mangabe — nord-est", { size: 21, anchor: "start" })}
  ${dot(655, 295, 6)}${txt(670, 301, "Île Sainte-Marie — est", { size: 21, anchor: "start" })}
  ${dot(655, 335, 6)}${txt(670, 341, "Nosy Anakao — sud-ouest", { size: 21, anchor: "start" })}
  ${caption("Nosy Be, au nord-ouest, est la plus grande île malgache : on l'appelle « l'île aux parfums ».", 530)}
</svg>`;
}

// ── S20. Les îles éparses ───────────────────────────────────────────────
function svgIlesEparses() {
  const ile = (x, y, nom, lx, ly, anchor = "middle") => `${dot(x, y, 7)}${txt(lx, ly, nom, { size: 20, bold: true, anchor })}`;
  return svgHeader(1000, 580) + titreSvg("Les îles éparses et le canal de Mozambique") + `
  ${cadre(40, 90, 920, 400, "#E3F2FD")}
  <path d="M 60 110 L 235 110 L 212 172 L 238 232 L 206 300 L 228 372 L 192 470 L 60 470 Z" fill="#A5D6A7" stroke="#2E7D32" stroke-width="3"/>
  ${txt(140, 295, "AFRIQUE", { size: 24, fill: "#1B5E20", bold: true })}
  ${mada(580, 290, 340)}
  ${txt(580, 482, "MADAGASCAR", { size: 20, fill: "#1B5E20", bold: true })}
  ${txt(330, 172, "Canal de Mozambique", { size: 22, fill: "#0277BD", italic: true })}
  ${ile(455, 130, "Îles Glorieuses", 465, 122, "start")}
  ${ile(350, 250, "Juan de Nova", 350, 285)}
  ${ile(380, 390, "Europa", 380, 425)}
  ${ile(430, 440, "Bassas da India", 430, 473)}
  ${ile(860, 230, "Tromelin", 860, 265)}
  ${caption("Les îles éparses sont de petites îles situées dans le canal de Mozambique et dans l'océan Indien.", 530)}
</svg>`;
}

// ── S21. Les îles voisines de l'océan Indien ────────────────────────────
function svgIlesVoisines() {
  const voisin = (x, y, nom, lx, ly, anchor = "middle") =>
    `<circle cx="${x}" cy="${y}" r="8" fill="#FB8C00" stroke="#E65100" stroke-width="2"/>` +
    txt(lx, ly, nom, { size: 21, bold: true, fill: "#4E342E", anchor });
  return svgHeader(1000, 580) + titreSvg("Les îles voisines de l'océan Indien") + `
  ${cadre(40, 90, 920, 400, "#E3F2FD")}
  ${mada(460, 300, 370, { fill: "#81C784" })}
  <text x="460" y="300" text-anchor="middle" font-size="23" font-weight="bold" fill="#1B5E20" transform="rotate(78 460 300)">MADAGASCAR</text>
  ${voisin(395, 115, "Comores", 383, 121, "end")}
  ${voisin(420, 165, "Mayotte", 408, 171, "end")}
  ${voisin(585, 108, "Seychelles", 597, 114, "start")}
  ${voisin(760, 330, "Maurice", 760, 366)}
  ${voisin(745, 420, "La Réunion", 745, 456)}
  ${voisin(880, 140, "Maldives", 880, 176)}
  ${txt(200, 478, "OCÉAN INDIEN", { size: 24, fill: "#0277BD", italic: true, bold: true })}
  ${caption("Madagascar est la plus grande île de l'océan Indien ; ses voisines sont les Comores, Mayotte, les Seychelles, Maurice, La Réunion et les Maldives.", 535)}
</svg>`;
}

// ── S22. Lire une carte de Madagascar ───────────────────────────────────
function svgLireCarteMada() {
  return svgHeader(1000, 580) + titreSvg("Lire une carte de Madagascar") + DEFS_ARR + `
  ${cadre(40, 90, 920, 400, "#FFFFFF")}
  <rect x="280" y="105" width="440" height="375" rx="10" fill="#FFFFFF" stroke="#37474F" stroke-width="3"/>
  ${txt(500, 140, "MADAGASCAR", { size: 26, fill: "#1E7B34", bold: true })}
  ${mada(500, 285, 220)}
  ${dot(502, 306, 6)}
  ${txt(513, 302, "Antananarivo", { size: 14, anchor: "start" })}
  ${dot(533, 283, 4, "#FB8C00", "#E65100")}
  ${txt(541, 279, "Toamasina", { size: 13, anchor: "start" })}
  ${dot(470, 243, 4, "#FB8C00", "#E65100")}
  ${txt(462, 237, "Mahajanga", { size: 13, anchor: "end" })}
  ${dot(478, 358, 4, "#FB8C00", "#E65100")}
  ${txt(486, 354, "Toliara", { size: 13, anchor: "start" })}
  <rect x="298" y="400" width="190" height="58" rx="6" fill="#FAFAFA" stroke="#90A4AE" stroke-width="2"/>
  ${txt(393, 420, "Légende", { size: 17, bold: true })}
  ${txt(393, 443, "★ Capitale    • Villes", { size: 15 })}
  <line x1="620" y1="440" x2="755" y2="440" stroke="#37474F" stroke-width="4"/>
  <line x1="620" y1="433" x2="620" y2="447" stroke="#37474F" stroke-width="3"/>
  <line x1="687" y1="433" x2="687" y2="447" stroke="#37474F" stroke-width="3"/>
  <line x1="755" y1="433" x2="755" y2="447" stroke="#37474F" stroke-width="3"/>
  ${txt(620, 428, "0", { size: 15 })}
  ${txt(687, 428, "100", { size: 15 })}
  ${txt(755, 428, "200 km", { size: 15 })}
  ${txt(687, 468, "Échelle", { size: 16, italic: true })}
  <line x1="695" y1="185" x2="695" y2="150" stroke="#C00000" stroke-width="4" marker-end="url(#arr)"/>
  ${txt(695, 145, "N", { size: 20, fill: "#C00000", bold: true })}
  <line x1="670" y1="168" x2="720" y2="168" stroke="#546E7A" stroke-width="2"/>
  ${txt(500, 476, "Source : Atlas scolaire — 2026", { size: 15, italic: true, fill: "#546E7A" })}
  ${txt(500, 80, "Le titre", { size: 21, fill: "#C00000", bold: true })}
  ${fleche(500, 86, 500, 128)}
  ${txt(195, 429, "La légende", { size: 21, fill: "#C00000", bold: true, anchor: "end" })}
  ${fleche(205, 429, 294, 429)}
  ${txt(860, 429, "L'échelle", { size: 21, fill: "#C00000", bold: true })}
  ${fleche(808, 429, 762, 429)}
  ${txt(858, 162, "L'orientation", { size: 21, fill: "#C00000", bold: true })}
  ${fleche(790, 168, 728, 168)}
  ${txt(500, 562, "La source et la date", { size: 21, fill: "#C00000", bold: true })}
  ${fleche(500, 548, 500, 480)}
  ${caption("Pour lire une carte, on cherche : le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur.", 595)}
</svg>`;
}

// ── S23. Tracer la carte de Madagascar (1) : le quadrillage ─────────────
function svgQuadrillage() {
  let grid = "";
  for (let i = 0; i <= 3; i++) grid += `<line x1="${345 + i * 90}" y1="110" x2="${345 + i * 90}" y2="650" stroke="#37474F" stroke-width="2.5"/>`;
  for (let j = 0; j <= 6; j++) grid += `<line x1="345" y1="${110 + j * 90}" x2="615" y2="${110 + j * 90}" stroke="#37474F" stroke-width="2.5"/>`;
  let rows = "";
  for (let j = 0; j < 6; j++) rows += txt(322, 165 + j * 90, String(j + 1), { size: 20, bold: true, fill: "#37474F" });
  const cols = ["A", "B", "C"].map((c, i) => txt(390 + i * 90, 100, c, { size: 20, bold: true, fill: "#37474F" })).join("");
  const etape = (y, lignes) => lignes.map((l, k) => txt(710, y + k * 27, l, { size: 21, anchor: "start" })).join("");
  return svgHeader(1000, 720) + titreSvg("Tracer la carte de Madagascar (1) : le quadrillage") + `
  ${cadre(30, 60, 940, 600, "#FDFBF3")}
  ${grid}${rows}${cols}
  <line x1="345" y1="78" x2="615" y2="78" stroke="#C00000" stroke-width="3"/>
  ${txt(480, 70, "9 cm", { size: 20, bold: true, fill: "#C00000" })}
  <line x1="630" y1="110" x2="630" y2="650" stroke="#C00000" stroke-width="3"/>
  ${txt(644, 384, "18 cm", { size: 20, bold: true, fill: "#C00000", anchor: "start" })}
  ${txt(835, 150, "Pour bien tracer la carte :", { size: 23, bold: true, fill: "#1B5E20" })}
  ${etape(195, ["Matériel : une feuille blanche,", "un crayon, une règle graduée", "et une gomme."])}
  ${etape(295, ["Étape 1 : trace un rectangle", "de 9 cm de large et 18 cm de haut."])}
  ${etape(365, ["Étape 2 : partage le rectangle", "en carrés de 3 cm de côté."])}
  ${etape(435, ["Étape 3 : écris les lettres", "A, B, C en haut des colonnes", "et les numéros 1 à 6 à gauche."])}
  ${caption("Le quadrillage 9 cm × 18 cm : des carreaux de 3 cm qui guideront le contour de Madagascar.", 700)}
</svg>`;
}

// ── S24. Tracer la carte de Madagascar (2) : le contour ─────────────────
function svgTracerCarteMada() {
  let grid = "";
  for (let i = 0; i <= 3; i++) grid += `<line x1="${345 + i * 90}" y1="110" x2="${345 + i * 90}" y2="650" stroke="#B0BEC5" stroke-width="1.5"/>`;
  for (let j = 0; j <= 6; j++) grid += `<line x1="345" y1="${110 + j * 90}" x2="615" y2="${110 + j * 90}" stroke="#B0BEC5" stroke-width="1.5"/>`;
  let rows = "";
  for (let j = 0; j < 6; j++) rows += txt(326, 160 + j * 90, String(j + 1), { size: 16, fill: "#90A4AE" });
  const cols = ["A", "B", "C"].map((c, i) => txt(390 + i * 90, 124, c, { size: 16, fill: "#90A4AE" })).join("");
  return svgHeader(1000, 720) + titreSvg("Tracer la carte de Madagascar (2) : le contour") + `
  ${cadre(30, 60, 940, 600, "#FDFBF3")}
  ${grid}${rows}${cols}
  ${txt(480, 100, "MADAGASCAR", { size: 28, fill: "#1E7B34", bold: true })}
  ${mada(480, 380, 480)}
  ${dot(415, 236, 6)}
  ${txt(405, 230, "Nosy Be", { size: 16, bold: true, anchor: "end" })}
  ${dot(554, 399, 4)}
  ${txt(558, 376, "Île Sainte-Marie", { size: 16, bold: true, anchor: "start" })}
  ${dot(485, 392, 6, "#C00000", "#7f0000")}
  ${txt(497, 396, "Antananarivo", { size: 15, anchor: "start" })}
  <line x1="345" y1="524" x2="615" y2="524" stroke="#C00000" stroke-width="3.5" stroke-dasharray="12 7"/>
  ${txt(625, 518, "Tropique du Capricorne", { size: 18, fill: "#C00000", bold: true, anchor: "start" })}
  <rect x="695" y="140" width="255" height="205" rx="10" fill="#FAFAFA" stroke="#90A4AE" stroke-width="2.5"/>
  ${txt(822, 170, "LÉGENDE", { size: 20, bold: true })}
  <line x1="715" y1="205" x2="755" y2="205" stroke="#2E7D32" stroke-width="4"/>
  ${txt(765, 211, "le littoral", { size: 19, anchor: "start" })}
  ${dot(735, 240, 6)}
  ${txt(765, 246, "les îles", { size: 19, anchor: "start" })}
  <line x1="715" y1="275" x2="755" y2="275" stroke="#C00000" stroke-width="3.5" stroke-dasharray="10 6"/>
  ${txt(765, 272, "le tropique du", { size: 19, anchor: "start" })}
  ${txt(765, 294, "Capricorne", { size: 19, anchor: "start" })}
  ${dot(735, 325, 6, "#C00000", "#7f0000")}
  ${txt(765, 331, "la capitale", { size: 19, anchor: "start" })}
  <line x1="715" y1="400" x2="835" y2="400" stroke="#37474F" stroke-width="4"/>
  <line x1="715" y1="393" x2="715" y2="407" stroke="#37474F" stroke-width="3"/>
  <line x1="775" y1="393" x2="775" y2="407" stroke="#37474F" stroke-width="3"/>
  <line x1="835" y1="393" x2="835" y2="407" stroke="#37474F" stroke-width="3"/>
  ${txt(715, 386, "0", { size: 15 })}
  ${txt(775, 386, "200", { size: 15 })}
  ${txt(835, 386, "400 km", { size: 15 })}
  ${txt(775, 428, "Échelle", { size: 17, italic: true })}
  ${caption("Une carte réussie : un contour juste, les îles, un titre, une légende et une échelle.", 700)}
</svg>`;
}

const SVG = {
  geo5_situer_mada_monde: svgSituerMadaMonde(),
  geo5_mada_lignes: svgMadaLignes(),
  geo5_iles_mada: svgIlesMada(),
  geo5_iles_eparses: svgIlesEparses(),
  geo5_iles_voisines: svgIlesVoisines(),
  geo5_lire_carte_mada: svgLireCarteMada(),
  geo5_quadrillage_mada: svgQuadrillage(),
  geo5_tracer_carte_mada: svgTracerCarteMada(),
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
