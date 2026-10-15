// make-svg-u2.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 2
// Génère les SVG puis les convertit en PNG (~1100 px) avec sharp.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, ".."); // geo-t6/
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

// Silhouette simplifiée de Madagascar (boîte locale 100 × 200, nord en haut)
const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const mada = (cx, cy, h, { fill = "#A5D6A7", stroke = "#2E7D32", sw = 3 } = {}) => {
  const s = h / 200;
  return `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)"><path d="${MADA}" fill="${fill}" stroke="${stroke}" stroke-width="${sw / s}" stroke-linejoin="round"/></g>`;
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

// pictos réutilisables
const arbre = (x, y, s = 1, f = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="8" width="8" height="20" fill="#6D4C41"/>
    <circle cx="0" cy="0" r="18" fill="${f}"/><circle cx="-13" cy="8" r="13" fill="${f}"/><circle cx="13" cy="8" r="13" fill="${f}"/>
  </g>`;
const goutte = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <path d="M 0 -18 C 10 -4 14 4 14 10 A 14 14 0 1 1 -14 10 C -14 4 -10 -4 0 -18 Z" fill="#29B6F6" stroke="#0277BD" stroke-width="2"/>
  </g>`;
const poisson = (x, y, s = 1, f = "#0288D1") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="20" ry="10" fill="${f}"/>
    <path d="M 18 0 L 30 -9 L 30 9 Z" fill="${f}"/>
    <circle cx="-10" cy="-2" r="2.5" fill="#FFFFFF"/>
  </g>`;
const soleil = (cx, cy, r) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    s += `<line x1="${cx + (r + 6) * Math.cos(a)}" y1="${cy + (r + 6) * Math.sin(a)}" x2="${cx + (r + 16) * Math.cos(a)}" y2="${cy + (r + 16) * Math.sin(a)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
  }
  return s;
};

// ── S11. Les ressources renouvelables : l'eau et les forêts ────────────
function svgEauForet() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les ressources renouvelables : l'eau et les forêts")}
  ${cadre(50, 100, 440, 380, "#E1F5FE")}
  ${txt(270, 140, "L'EAU, LA RESSOURCE DE LA VIE", { size: 21, bold: true, fill: "#01579B" })}
  ${goutte(160, 230, 3)}
  ${txt(330, 210, "Les rivières et les fleuves", { size: 18, anchor: "start" })}
  ${txt(330, 244, "Les lacs et les nappes d'eau", { size: 18, anchor: "start" })}
  ${txt(330, 278, "La pluie qui arrose les champs", { size: 18, anchor: "start" })}
  ${txt(270, 350, "On boit, on lave, on irrigue", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(270, 380, "les rizières, on fait tourner", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(270, 410, "les barrages.", { size: 18, italic: true, fill: "#546E7A" })}
  ${cadre(510, 100, 440, 380, "#E8F5E9")}
  ${txt(730, 140, "LA FORÊT, LA RESSOURCE VERTE", { size: 21, bold: true, fill: "#1B5E20" })}
  ${arbre(600, 240, 1.6)}${arbre(680, 260, 1.3)}${arbre(760, 240, 1.6)}${arbre(840, 260, 1.3)}
  ${txt(730, 350, "Le bois pour construire et cuire,", { size: 18 })}
  ${txt(730, 380, "les plantes pour se soigner,", { size: 18 })}
  ${txt(730, 410, "les fruits et le miel de la forêt.", { size: 18 })}
  ${txt(500, 520, "Ressource renouvelable : elle se renouvelle, si on la protège.", { size: 22, bold: true, fill: "#1B5E20" })}
  ${caption("L'eau et la forêt se renouvellent naturellement — à condition de ne pas les détruire.", 550)}
</svg>`;
}

// ── S12. Les ressources halieutiques ────────────────────────────────────
function svgHalieutique() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les ressources halieutiques de Madagascar")}
  ${cadre(50, 100, 900, 220, "#E1F5FE")}
  ${txt(500, 140, "« Halieutique » veut dire : tout ce qui vient de la pêche", { size: 20, italic: true, fill: "#01579B" })}
  ${poisson(150, 240, 2, "#0288D1")}${poisson(320, 250, 1.6, "#039BE5")}${poisson(470, 235, 2, "#0288D1")}
  ${poisson(640, 250, 1.6, "#26C6DA")}${poisson(800, 235, 2, "#039BE5")}
  ${txt(500, 300, "les poissons de mer et de rivière, les crevettes, les langoustes, les crabes", { size: 19 })}
  ${cadre(50, 360, 440, 140, "#FFF8E1")}
  ${txt(270, 400, "LA PÊCHE ARTISANALE", { size: 20, bold: true, fill: "#E65100" })}
  ${txt(270, 438, "Les pêcheurs et leurs pirogues", { size: 18 })}
  ${txt(270, 466, "nourrissent les villages du bord de mer.", { size: 18 })}
  ${cadre(510, 360, 440, 140, "#FFF8E1")}
  ${txt(730, 400, "LA PÊCHE INDUSTRIELLE", { size: 20, bold: true, fill: "#E65100" })}
  ${txt(730, 438, "Les grands bateaux pêchent loin,", { size: 18 })}
  ${txt(730, 466, "et les produits partent vers les villes.", { size: 18 })}
  ${caption("Les eaux de Madagascar regorgent de poissons : une richesse qui se renouvelle si on ne surpêche pas.", 545)}
</svg>`;
}

// ── S13. La faune et la flore ───────────────────────────────────────────
function svgFauneFlore() {
  const lemurien = (x, y) => `
    <g transform="translate(${x},${y})">
      <ellipse cx="0" cy="10" rx="16" ry="22" fill="#8D6E63"/>
      <circle cx="0" cy="-18" r="14" fill="#8D6E63"/>
      <circle cx="-22" cy="-16" r="10" fill="#6D4C41"/><circle cx="22" cy="-16" r="10" fill="#6D4C41"/>
      <circle cx="-5" cy="-20" r="3" fill="#263238"/><circle cx="5" cy="-20" r="3" fill="#263238"/>
      <path d="M -36 -46 Q 0 -62 36 -46" stroke="#6D4C41" stroke-width="6" fill="none" stroke-linecap="round"/>
      <path d="M 14 10 Q 40 20 34 44" stroke="#8D6E63" stroke-width="8" fill="none" stroke-linecap="round"/>
    </g>`;
  const cameleon = (x, y) => `
    <g transform="translate(${x},${y})">
      <ellipse cx="0" cy="0" rx="22" ry="13" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
      <path d="M -14 -10 Q -22 -30 -6 -34 Q 2 -36 0 -24" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
      <circle cx="20" cy="-6" r="6" fill="#66BB6A" stroke="#2E7D32" stroke-width="2"/>
      <circle cx="22" cy="-8" r="2" fill="#263238"/>
      <path d="M -24 0 Q -40 0 -38 -10" stroke="#2E7D32" stroke-width="3" fill="none" stroke-linecap="round"/>
    </g>`;
  const fleur = (x, y, f = "#EC407A") => `
    <g transform="translate(${x},${y})">
      ${[0, 72, 144, 216, 288].map((a) => `<ellipse cx="${18 * Math.cos(a * Math.PI / 180)}" cy="${18 * Math.sin(a * Math.PI / 180)}" rx="10" ry="16" fill="${f}" transform="rotate(${a} 0 0)"/>`).join("")}
      <circle cx="0" cy="0" r="7" fill="#FFD54F"/>
    </g>`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("La faune et la flore de Madagascar")}
  ${cadre(50, 100, 900, 320, "#F1F8E9")}
  ${lemurien(170, 250)}
  ${txt(170, 350, "Les lémuriens,", { size: 19, bold: true })}
  ${txt(170, 378, "les rois de la forêt", { size: 19, bold: true })}
  ${cameleon(430, 260)}
  ${txt(430, 350, "Les caméléons,", { size: 19, bold: true })}
  ${txt(430, 378, "des centaines d'espèces", { size: 19, bold: true })}
  ${fleur(650, 240)}${fleur(720, 300, "#AB47BC")}${fleur(800, 240, "#FF7043")}
  ${txt(730, 360, "Les plantes uniques :", { size: 19, bold: true })}
  ${txt(730, 388, "orchidées, baobabs, ravinala", { size: 19, bold: true })}
  ${txt(500, 470, "Endémique : un animal ou une plante qui n'existe qu'ici et nulle part ailleurs.", { size: 21, bold: true, fill: "#C00000" })}
  ${caption("La plupart des animaux et des plantes de Madagascar sont endémiques : un trésor à protéger.", 540)}
</svg>`;
}

// ── S14. Les ressources non renouvelables : les minerais ───────────────
function svgMinerais() {
  const cx = 330, cy = 330, h = 420;
  return `${svgHeader(1000, 620)}
  ${titreSvg("Les ressources minières de Madagascar")}
  ${cadre(40, 90, 480, 470, "#FDFBF3")}
  ${mada(cx, cy, h, { fill: "#EFEBE9" })}
  ${dotL(cx, cy, h, 55, 62, 7, "#6A1B9A")}
  ${txtL(cx, cy, h, 68, 55, "nickel", { size: 16, bold: true, fill: "#6A1B9A", anchor: "start" })}
  ${dotL(cx, cy, h, 43, 30, 7, "#C00000")}
  ${txtL(cx, cy, h, 30, 24, "chromite", { size: 16, bold: true, fill: "#C00000", anchor: "end" })}
  ${dotL(cx, cy, h, 60, 172, 7, "#00695C")}
  ${txtL(cx, cy, h, 74, 180, "ilménite", { size: 16, bold: true, fill: "#00695C", anchor: "start" })}
  ${dotL(cx, cy, h, 28, 118, 7, "#E65100")}
  ${txtL(cx, cy, h, 16, 110, "saphirs", { size: 16, bold: true, fill: "#E65100", anchor: "end" })}
  ${txt(280, 545, "Une fois extraits, les minerais ne reviennent plus.", { size: 17, italic: true, fill: "#546E7A" })}
  <rect x="560" y="120" width="410" height="330" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${txt(765, 155, "Les principaux minerais", { size: 21, bold: true })}
  ${txt(585, 205, "• Le nickel et le cobalt, à l'est du pays", { size: 19, anchor: "start" })}
  ${txt(585, 245, "• La chromite, au nord-ouest", { size: 19, anchor: "start" })}
  ${txt(585, 285, "• L'ilménite, sur la côte sud-est", { size: 19, anchor: "start" })}
  ${txt(585, 325, "• Les saphirs, dans le Sud", { size: 19, anchor: "start" })}
  ${txt(585, 365, "• Le graphite, la mica, le sel…", { size: 19, anchor: "start" })}
  ${txt(765, 415, "Ils servent à fabriquer :", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(765, 442, "métaux, bijoux, pièces de voitures…", { size: 18, italic: true, fill: "#546E7A" })}
  ${caption("Ressource non renouvelable : une fois extraite du sol, elle s'épuise et ne revient plus.", 600)}
</svg>`;
}

// ── S15. Les ressources énergétiques ────────────────────────────────────
function svgEnergies() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les ressources énergétiques")}
  ${cadre(50, 100, 440, 300, "#FFF3E0")}
  ${txt(270, 140, "LES ÉNERGIES FOSSILES", { size: 20, bold: true, fill: "#E65100" })}
  ${txt(270, 200, "Le pétrole et le gaz, extraits du sous-sol", { size: 18 })}
  ${txt(270, 235, "Le charbon, des roches noires qui brûlent", { size: 18 })}
  ${txt(270, 300, "Elles font marcher les moteurs,", { size: 18 })}
  ${txt(270, 330, "les usines et les centrales.", { size: 18 })}
  ${txt(270, 385, "⚠ Une fois brûlées, elles sont finies.", { size: 19, bold: true, fill: "#C00000" })}
  ${cadre(510, 100, 440, 300, "#E1F5FE")}
  ${txt(730, 140, "LES ÉNERGIES QUI DURENT", { size: 20, bold: true, fill: "#01579B" })}
  ${soleil(620, 240, 30)}
  ${txt(620, 310, "Le soleil", { size: 17, bold: true })}
  ${goutte(740, 235, 2.2)}
  ${txt(740, 310, "L'eau des", { size: 17, bold: true })}
  ${txt(740, 332, "barrages", { size: 17, bold: true })}
  ${arbre(860, 240, 1.2, "#388E3C")}
  ${txt(860, 310, "Le bois et", { size: 17, bold: true })}
  ${txt(860, 332, "les plantes", { size: 17, bold: true })}
  ${txt(500, 470, "Pétrole, gaz et charbon s'épuisent ; soleil, eau et forêts se renouvellent.", { size: 21, bold: true })}
  ${caption("Les énergies fossiles sont non renouvelables ; les énergies propres se renouvellent.", 545)}
</svg>`;
}

// ── S16. Les ressources naturelles de ma région ─────────────────────────
function svgRessourcesRegion() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les ressources naturelles de ma région")}
  ${txt(500, 95, "Exemple : la région Vakinankaratra, autour d'Antsirabe.", { size: 19, italic: true, fill: "#546E7A" })}
  ${cadre(60, 120, 420, 180, "#E8F5E9")}
  ${txt(270, 160, "SOUS LA TERRE ET DANS LE SOL", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(270, 205, "Les terres riches pour le riz et les légumes,", { size: 17 })}
  ${txt(270, 232, "les collines d'eucalyptus et de pins,", { size: 17 })}
  ${txt(270, 259, "le sable et l'argile des carrières.", { size: 17 })}
  ${cadre(520, 120, 420, 180, "#E1F5FE")}
  ${txt(730, 160, "DANS L'EAU ET LE CIEL", { size: 18, bold: true, fill: "#01579B" })}
  ${txt(730, 205, "Les rivières qui descendent des Hautes Terres,", { size: 17 })}
  ${txt(730, 232, "la pluie des hautes terres,", { size: 17 })}
  ${txt(730, 259, "le vent et le soleil généreux.", { size: 17 })}
  ${cadre(60, 340, 880, 120, "#FFF8E1")}
  ${txt(500, 385, "Et chez toi ? Complète :", { size: 21, bold: true, fill: "#E65100" })}
  ${txt(500, 425, "« Dans ma région, les habitants utilisent ……… , ……… et ……… chaque jour. »", { size: 20 })}
  ${caption("Chaque région possède ses richesses : le sol, l'eau, la forêt, les minerais, le soleil.", 545)}
</svg>`;
}

// ── S17. L'utilisation des ressources naturelles ────────────────────────
function svgUtilisation() {
  const bloc = (x, titre, lignes, f) => `
    <rect x="${x}" y="120" width="210" height="240" rx="14" fill="${f}" stroke="#90A4AE" stroke-width="3"/>
    ${txt(x + 105, 155, titre, { size: 19, bold: true })}
    ${lignes.map((l, i) => txt(x + 105, 200 + i * 30, l, { size: 16 })).join("")}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("À quoi servent les ressources naturelles ?")}
  ${bloc(50, "SE NOURRIR", ["Le riz des rizières,", "le poisson des rivières,", "les fruits de la forêt,", "la viande des zébus."], "#E8F5E9")}
  ${bloc(280, "SE SOIGNER", ["Les plantes médicinales,", "le miel de la ruche,", "l'eau pure des sources."], "#F1F8E9")}
  ${bloc(510, "CONSTRUIRE", ["Le bois des forêts,", "l'argile des briques,", "le sable des rivières,", "les pierres des carrières."], "#EFEBE9")}
  ${bloc(740, "VENDRE", ["La vanille et le girofle,", "les crevettes pêchées,", "les minerais extraits,", "l'artisanat de raphia."], "#FFF8E1")}
  ${txt(500, 420, "Nous utilisons les ressources naturelles chaque jour, sans toujours y penser.", { size: 20, bold: true })}
  ${txt(500, 470, "Manger un plat de riz, se soigner, vivre dans une maison, vendre au marché :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(500, 498, "tout vient de la nature.", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Se nourrir, se soigner, construire, vendre : quatre utilisations de nos ressources.", 545)}
</svg>`;
}

// ── S18. La gestion des ressources naturelles ───────────────────────────
function svgGestion() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Gérer les ressources naturelles sans les détruire")}
  ${txt(500, 100, "Gérer, c'est décider ensemble comment utiliser sans épuiser.", { size: 20, italic: true, fill: "#546E7A" })}
  ${cadre(50, 130, 290, 300, "#E8F5E9")}
  ${txt(195, 170, "PROTÉGER", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(195, 225, "Créer des parcs", { size: 18 })}
  ${txt(195, 253, "et des réserves,", { size: 18 })}
  ${txt(195, 281, "garder les forêts", { size: 18 })}
  ${txt(195, 309, "qui restent.", { size: 18 })}
  ${arbre(195, 390, 1.1)}
  ${cadre(355, 130, 290, 300, "#FFF8E1")}
  ${txt(500, 170, "RÉGLEMENTER", { size: 20, bold: true, fill: "#E65100" })}
  ${txt(500, 225, "Respecter les règles", { size: 18 })}
  ${txt(500, 253, "et les dina des", { size: 18 })}
  ${txt(500, 281, "villages : ne pas", { size: 18 })}
  ${txt(500, 309, "pêcher n'importe quand.", { size: 18 })}
  ${txt(500, 400, "📜", { size: 40 })}
  ${cadre(660, 130, 290, 300, "#E1F5FE")}
  ${txt(805, 170, "REMPLACER", { size: 20, bold: true, fill: "#01579B" })}
  ${txt(805, 225, "Replanter les arbres", { size: 18 })}
  ${txt(805, 253, "coupés, laisser le", { size: 18 })}
  ${txt(805, 281, "sol se reposer,", { size: 18 })}
  ${txt(805, 309, "laisser grandir les", { size: 18 })}
  ${txt(805, 337, "petits poissons.", { size: 18 })}
  ${txt(500, 500, "Protéger, réglementer, remplacer : trois clés d'une bonne gestion.", { size: 21, bold: true })}
  ${caption("Une bonne gestion laisse aux enfants de demain les mêmes richesses qu'aujourd'hui.", 545)}
</svg>`;
}

// ── S19. Le déséquilibre entre population et ressources ────────────────
function svgEquilibre() {
  const plateau = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="#37474F" stroke-width="8" stroke-linecap="round"/>`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Population et ressources : la grande balance")}
  ${txt(500, 95, "Que se passe-t-il quand un plateau s'alourdit plus vite que l'autre ?", { size: 19, italic: true, fill: "#546E7A" })}
  <line x1="200" y1="130" x2="200" y2="420" stroke="#37474F" stroke-width="12" stroke-linecap="round"/>
  <line x1="800" y1="130" x2="800" y2="420" stroke="#37474F" stroke-width="12" stroke-linecap="round"/>
  <line x1="500" y1="140" x2="500" y2="440" stroke="#37474F" stroke-width="14" stroke-linecap="round"/>
  <line x1="150" y1="160" x2="850" y2="140" stroke="#546E7A" stroke-width="6"/>
  ${plateau(120, 280, 165)}
  ${plateau(720, 880, 145)}
  ${dot(200, 130, 10, "#C00000")}${dot(800, 110, 10, "#2E7D32")}
  ${txt(200, 200, "LA POPULATION", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(200, 235, "augmente vite :", { size: 18 })}
  ${txt(200, 263, "plus de bouches", { size: 18 })}
  ${txt(200, 291, "à nourrir, plus de", { size: 18 })}
  ${txt(200, 319, "maisons à bâtir.", { size: 18 })}
  ${txt(200, 380, "Elle descend,", { size: 18, italic: true })}
  ${txt(200, 405, "toujours plus lourde.", { size: 18, italic: true })}
  ${txt(800, 180, "LES RESSOURCES", { size: 20, bold: true, fill: "#2E7D32" })}
  ${txt(800, 215, "la terre, l'eau,", { size: 18 })}
  ${txt(800, 243, "la forêt, les poissons…", { size: 18 })}
  ${txt(800, 300, "Elles ne peuvent pas", { size: 18, italic: true })}
  ${txt(800, 328, "augmenter aussi vite :", { size: 18, italic: true })}
  ${txt(800, 356, "c'est le déséquilibre.", { size: 18, italic: true, fill: "#C00000" })}
  ${txt(500, 500, "Le déséquilibre : la population grandit plus vite que les ressources.", { size: 21, bold: true, fill: "#C00000" })}
  ${caption("Quand les hommes deviennent trop nombreux pour les ressources, la vie devient difficile.", 545)}
</svg>`;
}

// ── S20. Les ressources mal exploitées et les espèces disparues ────────
function svgProblemes() {
  return `${svgHeader(1000, 620)}
  ${titreSvg("Quand les ressources sont mal exploitées")}
  ${cadre(50, 100, 440, 200, "#FFEBEE")}
  ${txt(270, 140, "LA FORÊT BRÛLÉE", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(270, 190, "Le tavy détruit la forêt pour quelques récoltes ;", { size: 17 })}
  ${txt(270, 217, "les arbres coupés ne repoussent pas ;", { size: 17 })}
  ${txt(270, 244, "la pluie emporte la terre nue : l'érosion.", { size: 17 })}
  ${arbre(150, 320, 1, "#8D6E63")}${arbre(230, 320, 1, "#8D6E63")}
  ${txt(310, 325, "→ des arbres morts", { size: 16, italic: true, fill: "#C00000", anchor: "start" })}
  ${cadre(510, 100, 440, 200, "#FFEBEE")}
  ${txt(730, 140, "LA MER VIDÉE", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(730, 190, "La surpêche prend les petits poissons", { size: 17 })}
  ${txt(730, 217, "et les poissons porteurs d'œufs ;", { size: 17 })}
  ${txt(730, 244, "demain, il n'en restera plus assez.", { size: 17 })}
  ${poisson(640, 320, 1.2, "#90A4AE")}${poisson(740, 320, 1.2, "#90A4AE")}
  ${txt(830, 325, "→ des poissons rares", { size: 16, italic: true, fill: "#C00000", anchor: "start" })}
  ${cadre(50, 360, 900, 160, "#FFF8E1")}
  ${txt(500, 400, "DES ESPÈCES DISPARAISSENT", { size: 21, bold: true, fill: "#E65100" })}
  ${txt(500, 445, "Des animaux et des plantes de Madagascar ont déjà disparu pour toujours :", { size: 18 })}
  ${txt(500, 473, "l'oiseau-éléphant, le plus grand oiseau du monde, le lémurien géant…", { size: 18 })}
  ${txt(500, 501, "D'autres sont en danger aujourd'hui, comme le plus grand lémurien vivant.", { size: 18 })}
  ${caption("Exploiter sans mesure, c'est perdre nos richesses pour toujours.", 600)}
</svg>`;
}

// ── S21. Les ressources et le changement climatique ────────────────────
function svgClimat() {
  const nuage = (x, y, s = 1) => `
    <g transform="translate(${x},${y}) scale(${s})">
      <ellipse cx="0" cy="0" rx="30" ry="16" fill="#B0BEC5"/>
      <ellipse cx="-22" cy="6" rx="18" ry="12" fill="#B0BEC5"/>
      <ellipse cx="22" cy="6" rx="18" ry="12" fill="#B0BEC5"/>
    </g>`;
  return `${svgHeader(1000, 620)}
  ${titreSvg("Les ressources et le changement climatique")}
  ${txt(500, 95, "Brûler forêts, pétrole et charbon réchauffe l'atmosphère de la Terre.", { size: 20, italic: true, fill: "#546E7A" })}
  ${txt(250, 200, "LA TERRE", { size: 20, bold: true, fill: "#1B5E20" })}
  ${soleil(760, 190, 34)}
  <circle cx="250" cy="330" r="90" fill="#A5D6A7" stroke="#2E7D32" stroke-width="4"/>
  ${txt(250, 338, "🌍", { size: 60 })}
  ${nuage(150, 250, 1)}${nuage(380, 240, 0.8)}
  ${txt(500, 300, "Les gaz rejetés forment un épais manteau", { size: 19, bold: true })}
  ${txt(500, 328, "qui garde la chaleur autour de la Terre :", { size: 19, bold: true })}
  ${txt(500, 356, "la planète se réchauffe.", { size: 19, bold: true, fill: "#C00000" })}
  ${cadre(50, 440, 900, 130, "#FFEBEE")}
  ${txt(500, 480, "Les manifestations à Madagascar :", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(500, 515, "des saisons déréglées, des cyclones plus violents, des sécheresses longues dans le Grand Sud,", { size: 18 })}
  ${txt(500, 543, "des pluies qui arrivent mal, une mer qui monte sur les côtes.", { size: 18 })}
  ${caption("Le changement climatique frappe déjà Madagascar : chacun doit protéger ses ressources.", 600)}
</svg>`;
}

// ── S22. Les solutions (1) : exploitation rationnelle et reboisement ───
function svgSolutions1() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les solutions (1) : bien exploiter et replanter")}
  ${cadre(50, 110, 290, 300, "#E8F5E9")}
  ${txt(195, 150, "EXPLOITER", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(195, 185, "RATIONNELLEMENT", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(195, 240, "Prendre seulement", { size: 17 })}
  ${txt(195, 268, "ce dont on a besoin ;", { size: 17 })}
  ${txt(195, 296, "laisser grandir les", { size: 17 })}
  ${txt(195, 324, "petits poissons et", { size: 17 })}
  ${txt(195, 352, "les jeunes arbres.", { size: 17 })}
  ${cadre(355, 110, 290, 300, "#E8F5E9")}
  ${txt(500, 150, "REPLANTER", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(500, 195, "LES FORÊTS", { size: 20, bold: true, fill: "#1B5E20" })}
  ${arbre(430, 300, 0.9, "#66BB6A")}${arbre(500, 290, 1.1, "#43A047")}${arbre(570, 300, 0.9, "#66BB6A")}
  ${txt(500, 385, "Un arbre coupé,", { size: 18 })}
  ${txt(500, 410, "un arbre replanté !", { size: 18, bold: true })}
  ${cadre(660, 110, 290, 300, "#E8F5E9")}
  ${txt(805, 150, "CHOISIR DES", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(805, 185, "CULTURES ADAPTÉES", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(805, 240, "Des plantes qui", { size: 17 })}
  ${txt(805, 268, "supportent la", { size: 17 })}
  ${txt(805, 296, "sécheresse et le", { size: 17 })}
  ${txt(805, 324, "vent : le manioc,", { size: 17 })}
  ${txt(805, 352, "le sisal, le pois", { size: 17 })}
  ${txt(805, 380, "d'angole…", { size: 17 })}
  ${txt(500, 480, "Bien exploiter, replanter, cultiver autrement : la nature reprend des forces.", { size: 20, bold: true })}
  ${caption("Exploiter rationnellement, reboiser, adapter les cultures : les ressources retrouvent leur équilibre.", 545)}
</svg>`;
}

// ── S23. Les solutions (2) : agir sur les hommes et les structures ─────
function svgSolutions2() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les solutions (2) : agir sur les hommes et les structures")}
  ${cadre(50, 110, 290, 310, "#E3F2FD")}
  ${txt(195, 150, "DES FAMILLES", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(195, 185, "QUI GRANDISSENT", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(195, 220, "LENTEMENT", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(195, 275, "Des familles moins", { size: 17 })}
  ${txt(195, 303, "nombreuses peuvent", { size: 17 })}
  ${txt(195, 331, "mieux nourrir et", { size: 17 })}
  ${txt(195, 359, "instruire chaque", { size: 17 })}
  ${txt(195, 387, "enfant.", { size: 17 })}
  ${cadre(355, 110, 290, 310, "#E3F2FD")}
  ${txt(500, 150, "DES INFRASTRUCTURES", { size: 17, bold: true, fill: "#01579B" })}
  ${txt(500, 182, "SOCIALES SOLIDES", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(500, 235, "Écoles, centres de", { size: 17 })}
  ${txt(500, 263, "santé, adductions", { size: 17 })}
  ${txt(500, 291, "d'eau, routes :", { size: 17 })}
  ${txt(500, 319, "le village résiste", { size: 17 })}
  ${txt(500, 347, "mieux aux coups", { size: 17 })}
  ${txt(500, 375, "du sort.", { size: 17 })}
  ${cadre(660, 110, 290, 310, "#E3F2FD")}
  ${txt(805, 150, "DES PRATIQUES", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(805, 185, "MODERNES", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(805, 240, "Remplacer le tavy", { size: 17 })}
  ${txt(805, 268, "par de vrais champs ;", { size: 17 })}
  ${txt(805, 296, "cuire avec du gaz ou", { size: 17 })}
  ${txt(805, 324, "des foyers économes", { size: 17 })}
  ${txt(805, 352, "au lieu du bois ;", { size: 17 })}
  ${txt(805, 380, "bien gérer ensemble.", { size: 17 })}
  ${txt(500, 490, "Familles, infrastructures, pratiques : les trois appuis du village résilient.", { size: 20, bold: true })}
  ${caption("Agir sur les hommes et les structures : le pays devient plus fort face aux problèmes.", 545)}
</svg>`;
}

// ── S24. Mini-projet : une activité économique qui respecte les ressources ──
function svgMiniProjet() {
  const etape = (x, n, t, lignes) => `
    <rect x="${x}" y="110" width="210" height="230" rx="14" fill="#F1F8E9" stroke="#7CB342" stroke-width="3"/>
    <circle cx="${x + 105}" cy="150" r="22" fill="#7CB342"/>
    <text x="${x + 105}" y="158" text-anchor="middle" font-size="22" font-weight="bold" fill="#FFFFFF">${n}</text>
    ${txt(x + 105, 200, t, { size: 17, bold: true })}
    ${lignes.map((l, i) => txt(x + 105, 235 + i * 27, l, { size: 15 })).join("")}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Monter un mini-projet qui respecte les ressources")}
  ${txt(500, 95, "Exemple : élever des poissons dans un étang du village.", { size: 19, italic: true, fill: "#546E7A" })}
  ${etape(50, 1, "OBSERVER", ["Quelles ressources", "autour de nous ?", "L'eau de la rivière,", "les terrains libres."])}
  ${etape(280, 2, "CHOISIR", ["Une activité qui", "utilise la ressource", "sans l'épuiser :", "la pisciculture !"])}
  ${etape(510, 3, "MONTER", ["Creuser l'étang,", "remplir d'eau,", "élever les alevins,", "nourrir, surveiller."])}
  ${etape(740, 4, "PRÉSENTER", ["Dessiner le projet,", "calculer ce qu'il", "rapporte, le montrer", "à la classe et au village."])}
  ${txt(500, 400, "Une bonne activité économique utilise la ressource… et la laisse vivre.", { size: 20, bold: true })}
  ${txt(500, 450, "Règle d'or du mini-projet : la ressource doit encore être là", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(500, 478, "quand les enfants de tes enfants grandiront.", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Observer, choisir, monter, présenter : la démarche du mini-projet de l'unité.", 545)}
</svg>`;
}

const SVG = {
  geo6_eau_foret: svgEauForet(),
  geo6_halieutique: svgHalieutique(),
  geo6_faune_flore: svgFauneFlore(),
  geo6_minerais: svgMinerais(),
  geo6_energies: svgEnergies(),
  geo6_ressources_region: svgRessourcesRegion(),
  geo6_utilisation: svgUtilisation(),
  geo6_gestion: svgGestion(),
  geo6_equilibre: svgEquilibre(),
  geo6_problemes_ressources: svgProblemes(),
  geo6_climat_ressources: svgClimat(),
  geo6_solutions1: svgSolutions1(),
  geo6_solutions2: svgSolutions2(),
  geo6_mini_projet: svgMiniProjet(),
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
