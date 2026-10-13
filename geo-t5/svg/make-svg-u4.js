// make-svg-u4.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T5 — UNITÉ 4
// Génère les SVG puis les convertit en PNG (~1100 px) avec sharp.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
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
const soleil = (cx, cy, r) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i;
    s += `<line x1="${cx + Math.cos(a) * (r + 5)}" y1="${cy + Math.sin(a) * (r + 5)}" x2="${cx + Math.cos(a) * (r + 18)}" y2="${cy + Math.sin(a) * (r + 18)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
  }
  return s;
};
const arbre = (x, y, s = 1, fill = "#388E3C") =>
  `<rect x="${x - 3 * s}" y="${y - 22 * s}" width="${6 * s}" height="${22 * s}" fill="#795548"/>` +
  `<circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}"/>`;
const zebu = (x, y, s = 1) =>
  `<g><ellipse cx="${x}" cy="${y - 14 * s}" rx="${20 * s}" ry="${11 * s}" fill="#8D6E63" stroke="#5D4037" stroke-width="1.5"/>` +
  `<circle cx="${x + 20 * s}" cy="${y - 20 * s}" r="${6 * s}" fill="#8D6E63" stroke="#5D4037" stroke-width="1.5"/>` +
  `<path d="M ${x + 15 * s} ${y - 25 * s} q ${-4 * s} ${-7 * s} ${-8 * s} ${-2 * s} M ${x + 25 * s} ${y - 25 * s} q ${4 * s} ${-7 * s} ${8 * s} ${-2 * s}" fill="none" stroke="#5D4037" stroke-width="${2 * s}"/>` +
  `<line x1="${x - 12 * s}" y1="${y - 5 * s}" x2="${x - 12 * s}" y2="${y}" stroke="#5D4037" stroke-width="${2.5 * s}"/>` +
  `<line x1="${x + 12 * s}" y1="${y - 5 * s}" x2="${x + 12 * s}" y2="${y}" stroke="#5D4037" stroke-width="${2.5 * s}"/>` +
  `<line x1="${x - 4 * s}" y1="${y - 5 * s}" x2="${x - 4 * s}" y2="${y}" stroke="#5D4037" stroke-width="${2.5 * s}"/>` +
  `<line x1="${x + 4 * s}" y1="${y - 5 * s}" x2="${x + 4 * s}" y2="${y}" stroke="#5D4037" stroke-width="${2.5 * s}"/></g>`;
const poisson = (x, y, s = 1) =>
  `<g><ellipse cx="${x}" cy="${y}" rx="${16 * s}" ry="${9 * s}" fill="#4FC3F7" stroke="#0277BD" stroke-width="1.5"/>` +
  `<path d="M ${x + 14 * s} ${y} l ${10 * s} ${-7 * s} l 0 ${14 * s} Z" fill="#4FC3F7" stroke="#0277BD" stroke-width="1.5"/>` +
  `<circle cx="${x - 8 * s}" cy="${y - 2 * s}" r="${1.8 * s}" fill="#263238"/></g>`;
const gemme = (x, y, s = 1) =>
  `<g><path d="M ${x} ${y - 16 * s} L ${x + 14 * s} ${y - 4 * s} L ${x} ${y + 16 * s} L ${x - 14 * s} ${y - 4 * s} Z" fill="#7E57C2" stroke="#4527A0" stroke-width="2"/>` +
  `<path d="M ${x} ${y - 16 * s} L ${x} ${y + 16 * s} M ${x - 14 * s} ${y - 4 * s} L ${x + 14 * s} ${y - 4 * s}" stroke="#4527A0" stroke-width="1.5"/></g>`;
const plante = (x, y, s = 1) =>
  `<path d="M ${x} ${y} v ${-26 * s}" stroke="#558B2F" stroke-width="${3.5 * s}"/>` +
  `<path d="M ${x} ${y - 14 * s} q ${-16 * s} ${-4 * s} ${-20 * s} ${-20 * s} q ${18 * s} 0 ${20 * s} ${14 * s} Z" fill="#66BB6A"/>` +
  `<path d="M ${x} ${y - 18 * s} q ${16 * s} ${-4 * s} ${20 * s} ${-20 * s} q ${-18 * s} 0 ${-20 * s} ${14 * s} Z" fill="#66BB6A"/>`;
const pioche = (x, y, s = 1) =>
  `<line x1="${x}" y1="${y - 24 * s}" x2="${x}" y2="${y + 12 * s}" stroke="#795548" stroke-width="${4 * s}"/>` +
  `<path d="M ${x - 20 * s} ${y - 20 * s} q ${20 * s} ${-12 * s} ${40 * s} 0" fill="none" stroke="#78909C" stroke-width="${6 * s}" stroke-linecap="round"/>`;

// ── S56. Qu'est-ce qu'une ressource naturelle ? ────────────────────────
function svgRessourceDefinition() {
  const carte = (x, y, dessin, nom, utilite) => cadre(x - 145, y, 290, 175, "#FDFBF3") + dessin +
    txt(x, y + 143, nom, { size: 22, bold: true, fill: "#1E7B34" }) +
    txt(x, y + 166, utilite, { size: 17, fill: "#546E7A", italic: true });
  return svgHeader(1000, 660) + titreSvg("Qu'est-ce qu'une ressource naturelle ?") + `
  <rect x="250" y="70" width="500" height="56" rx="28" fill="#E8F5E9" stroke="#2E7D32" stroke-width="3"/>
  ${txt(500, 105, "Une richesse que la nature nous offre", { size: 23, bold: true, fill: "#1B5E20" })}
  ${carte(190, 140, `<path d="M 105 300 q 35 -14 80 0 q 35 12 75 -4" fill="none" stroke="#4FC3F7" stroke-width="9"/>` + poisson(215, 270, 1), "L'eau des rivières", "boire, irriguer, pêcher")}
  ${carte(500, 140, arbre(470, 300, 1.4) + arbre(545, 302, 1.1, "#2E7D32"), "La forêt", "bois, fruits, médicaments")}
  ${carte(810, 140, `<path d="M 770 305 h 80" stroke="#8D6E63" stroke-width="4"/>` + `<path d="M 790 305 q 3 -18 12 -24 q 10 8 12 24 Z" fill="#81C784" stroke="#558B2F" stroke-width="2"/>`, "La terre et le sol", "cultiver le riz et le maïs")}
  ${carte(190, 345, zebu(190, 505, 1.3), "Les animaux", "viande, lait, travail")}
  ${carte(500, 345, gemme(470, 460, 1.3) + pioche(545, 505, 1), "Les minerais", "chromite, nickel, saphirs")}
  ${carte(810, 345, soleil(810, 455, 40), "Le soleil et le vent", "chaleur et énergie")}
  ${caption("Une ressource naturelle : une richesse que la nature offre et que l'homme utilise pour vivre.", 640)}
</svg>`;
}

// ── S57. Les types de ressources naturelles ─────────────────────────────
function svgTypesRessources() {
  const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
  const mada = (cx, cy, h) => {
    const s = h / 200;
    return `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)"><path d="${MADA}" fill="#F1F8E9" stroke="#2E7D32" stroke-width="3" stroke-linejoin="round"/></g>`;
  };
  const L = (cx, cy, h, lx, ly) => [cx + (lx - 50) * h / 200, cy + (ly - 100) * h / 200];
  const dotL = (cx, cy, h, lx, ly) => { const [x, y] = L(cx, cy, h, lx, ly); return dot(x, y, 6, "#C00000"); };
  const txtL = (cx, cy, h, lx, ly, t, o) => { const [x, y] = L(cx, cy, h, lx, ly); return txt(x, y, t, o); };
  const cx = 820, cy = 350, h = 300;
  return svgHeader(1000, 620) + titreSvg("Les types de ressources naturelles") + `
  ${cadre(40, 90, 440, 370, "#E8F5E9")}
  ${txt(260, 128, "Ressources renouvelables", { size: 22, bold: true, fill: "#1B5E20" })}
  ${txt(260, 156, "elles se renouvellent si on les protège", { size: 17, italic: true, fill: "#546E7A" })}
  ${`<path d="M 80 230 q 30 -12 70 0" fill="none" stroke="#4FC3F7" stroke-width="7"/>` + txt(190, 235, "l'eau", { size: 20, bold: true, anchor: "start" })}
  ${arbre(110, 310, 1.2) + txt(190, 300, "les forêts", { size: 20, bold: true, anchor: "start" })}
  ${zebu(120, 400, 1.1) + txt(190, 390, "les animaux", { size: 20, bold: true, anchor: "start" })}
  ${soleil(120, 440 - 8, 26) + txt(190, 437, "le soleil, le vent", { size: 20, bold: true, anchor: "start" })}
  ${cadre(500, 90, 250, 370, "#FBE9E7")}
  ${txt(625, 128, "Ressources non", { size: 21, bold: true, fill: "#BF360C" })}
  ${txt(625, 154, "renouvelables", { size: 21, bold: true, fill: "#BF360C" })}
  ${txt(625, 182, "elles s'épuisent", { size: 17, italic: true, fill: "#546E7A" })}
  ${gemme(625, 250, 1.4) + txt(625, 300, "les minerais", { size: 20, bold: true })}
  ${pioche(600, 370, 1.2) + `<rect x="630" y="345" width="40" height="26" rx="4" fill="#546E7A"/>` + txt(625, 408, "les roches, le charbon", { size: 18, bold: true })}
  ${mada(cx, cy, h)}
  ${txtL(cx, cy, h, 70, 30, "vanille, café,", { size: 15, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 70, 46, "girofle (Est)", { size: 15, bold: true, anchor: "start" })}
  ${dotL(cx, cy, h, 46, 58)}
  ${txtL(cx, cy, h, 22, 74, "nickel", { size: 15, bold: true, anchor: "end" })}
  ${dotL(cx, cy, h, 48, 74)}
  ${txtL(cx, cy, h, 22, 118, "ilménite", { size: 15, bold: true, anchor: "end" })}
  ${dotL(cx, cy, h, 48, 118)}
  ${txtL(cx, cy, h, 60, 148, "saphirs (Ilakaka)", { size: 15, bold: true })}
  ${dotL(cx, cy, h, 47, 152)}
  ${txtL(cx, cy, h, 76, 178, "Fort-Dauphin", { size: 14, bold: true, anchor: "start" })}
  ${txt(cx, 528, "Où sont les ressources de Madagascar ?", { size: 20, bold: true, fill: "#1E7B34" })}
  ${caption("Renouvelables ou épuisables : toutes les ressources de Madagascar se trouvent sur la carte.", 600)}
</svg>`;
}

// ── S58. L'importance et les problèmes des ressources ──────────────────
function svgImportanceProblemes() {
  const ligne = (x, y, dessin, t1, t2) => cadre(x - 210, y, 420, 115, "#FDFBF3") + dessin +
    txt(x, y + 55, t1, { size: 20, bold: true, fill: "#263238" }) +
    txt(x, y + 82, t2, { size: 17, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 700) + titreSvg("L'importance et les problèmes des ressources") + `
  ${txt(260, 100, " Elles font vivre le pays", { size: 23, bold: true, fill: "#1B5E20" })}
  ${ligne(260, 120, plante(120, 205, 1.2), "Nourrir les familles", "riz, poisson, viande, fruits")}
  ${ligne(260, 250, `<rect x="150" y="320" width="46" height="30" rx="4" fill="#EF6C00" stroke="#BF360C" stroke-width="2"/><path d="M 165 320 L 165 322 M 181 320 L 181 322" stroke="#FFF" stroke-width="0"/>${txt(150, 315, "export", { size: 15, bold: true, fill: "#BF360C" })}`, "Rapporter de l'argent", "vanille, girofle, litchis vendus au loin")}
  ${ligne(260, 380, `<circle cx="140" cy="450" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><circle cx="172" cy="450" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><circle cx="156" cy="424" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>`, "Créer des emplois", "paysans, pêcheurs, mineurs, guides")}
  ${ligne(260, 510, `<path d="M 140 580 q -20 -14 -2 -22 M 140 560 q -20 -14 -2 -22 M 140 560 l 0 20" stroke="#F9A825" stroke-width="4" fill="none"/>`, "Donner de l'énergie", "bois de chauffe, barrages")}
  ${txt(760, 100, "Mais leur exploitation pose des problèmes", { size: 23, bold: true, fill: "#C00000" })}
  ${ligne(760, 120, `<path d="M 640 190 L 660 140 L 678 190 Z" fill="#BF360C" opacity="0.75"/><path d="M 662 190 L 682 132 L 700 190 Z" fill="#D84315" opacity="0.75"/>${txt(790, 172, " coupe", { size: 16, bold: true, fill: "#5D4037" })}${txt(790, 195, " abusive", { size: 16, bold: true, fill: "#5D4037" })}`, "Exploitation abusive", "bois précieux, surpêche, braconnage")}
  ${ligne(760, 250, `<path d="M 660 330 q 40 -12 75 0 Z" fill="#BF360C" opacity="0.6"/><path d="M 735 330 q 30 -30 60 -6 Z" fill="#D84315" opacity="0.6"/><line x1="645" y1="330" x2="830" y2="330" stroke="#8D6E63" stroke-width="4"/>`, "Érosion et pollution", "lavaka, rivières boueuses, mines sales")}
  ${ligne(760, 380, gemme(700, 450, 1.2) + txt(790, 445, " épuisé", { size: 16, bold: true, fill: "#5D4037" }) + txt(790, 468, "un jour ?", { size: 16, bold: true, fill: "#5D4037" }), "Épuisement", "les minerais ne repoussent pas")}
  ${ligne(760, 510, `<circle cx="700" cy="575" r="20" fill="none" stroke="#C00000" stroke-width="4"/><line x1="686" y1="561" x2="714" y2="589" stroke="#C00000" stroke-width="4"/>${txt(790, 570, "disparaissent", { size: 16, bold: true, fill: "#5D4037" })}${txt(790, 593, "(lémuriens, tortues)", { size: 16, bold: true, fill: "#5D4037" })}`, "Animaux menacés", "braconnage et perte des forêts")}
  ${caption("Les ressources font vivre Madagascar, mais une exploitation sans règle les détruit : prudence !", 680)}
</svg>`;
}

// ── S59. Préserver les ressources naturelles ────────────────────────────
function svgPreserverRessources() {
  const c = (x, y, dessin, t1, t2) => cadre(x - 145, y, 290, 180, "#E8F5E9") + dessin +
    txt(x, y + 148, t1, { size: 21, bold: true, fill: "#1B5E20" }) +
    txt(x, y + 170, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 640) + titreSvg("Préserver les ressources naturelles") + `
  ${c(190, 90, `<rect x="150" y="240" width="80" height="26" rx="6" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>` + arbre(120, 235, 0.9) + arbre(170, 228, 0.7, "#2E7D32") + arbre(215, 236, 0.8), "Reboiser", "planter des arbres chaque année")}
  ${c(500, 90, `<path d="M 430 245 L 570 245" stroke="#558B2F" stroke-width="5"/>` + `<path d="M 500 245 v -35" stroke="#558B2F" stroke-width="4"/>` + `<circle cx="500" cy="196" r="22" fill="none" stroke="#C00000" stroke-width="4"/>` + `<line x1="485" y1="181" x2="515" y2="211" stroke="#C00000" stroke-width="4"/>`, "Protéger", "parcs nationaux et réserves")}
  ${c(810, 90, `<path d="M 740 245 h 60" stroke="#4FC3F7" stroke-width="6"/>` + `<path d="M 770 245 v -25" stroke="#4FC3F7" stroke-width="5"/>` + poisson(770, 205, 0.9) + txt(850, 210, "petits =", { size: 16, bold: true, fill: "#0277BD" }) + txt(850, 232, "rejetés", { size: 16, bold: true, fill: "#0277BD" }), "Pêcher avec mesure", "respecter tailles et saisons")}
  ${c(190, 300, `<rect x="130" y="420" width="22" height="52" rx="5" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>` + `<path d="M 200 470 h 70 M 220 470 v -30 h 30 v 30" stroke="#90A4AE" stroke-width="5" fill="none"/>` + `<path d="M 235 440 q 10 -14 0 -24 q -10 -10 0 -20" stroke="#4FC3F7" stroke-width="4" fill="none"/>`, "Économiser l'eau", "fermer le robinet, arroser le soir")}
  ${c(500, 300, `<rect x="450" y="440" width="34" height="36" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/><rect x="492" y="440" width="34" height="36" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><rect x="534" y="440" width="34" height="36" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>${txt(500, 430, "trier les déchets", { size: 16, bold: true, fill: "#546E7A" })}`, "Ne pas polluer", "trier, ne rien jeter dans la nature")}
  ${c(810, 300, `<circle cx="780" cy="440" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><circle cx="812" cy="440" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/><circle cx="796" cy="414" r="17" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>${txt(860, 436, "apprendre", { size: 16, bold: true, fill: "#546E7A" })}${txt(860, 458, "et transmettre", { size: 16, bold: true, fill: "#546E7A" })}`, "Sensibiliser", "les élèves expliquent aux familles")}
  ${caption("Planter, protéger, économiser, trier, expliquer : chacun peut préserver les richesses de Madagascar.", 620)}
</svg>`;
}

const SVG = {
  geo5_ressource_definition: svgRessourceDefinition(),
  geo5_types_ressources: svgTypesRessources(),
  geo5_importance_problemes: svgImportanceProblemes(),
  geo5_preserver_ressources: svgPreserverRessources(),
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
