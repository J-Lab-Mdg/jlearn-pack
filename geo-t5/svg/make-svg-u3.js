// make-svg-u3.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T5 — UNITÉ 3
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
const DEFS_ARR = `<defs><marker id="arr" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#C00000"/></marker></defs>`;
const fleche = (x1, y1, x2, y2) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#C00000" stroke-width="3" marker-end="url(#arr)"/>`;

// Silhouette locale de Madagascar (boîte 100 × 200, nord en haut)
const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const mada = (cx, cy, h, { fill = "#A5D6A7", stroke = "#2E7D32", sw = 3 } = {}) => {
  const s = h / 200;
  return `<g transform="translate(${cx} ${cy}) scale(${s}) translate(-50 -100)"><path d="${MADA}" fill="${fill}" stroke="${stroke}" stroke-width="${sw / s}" stroke-linejoin="round"/></g>`;
};
// Formes locales (dans la boîte 100×200) découpées dans la silhouette
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

// Pictos
const soleil = (cx, cy, r) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI / 4) * i;
    s += `<line x1="${cx + Math.cos(a) * (r + 5)}" y1="${cy + Math.sin(a) * (r + 5)}" x2="${cx + Math.cos(a) * (r + 18)}" y2="${cy + Math.sin(a) * (r + 18)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
  }
  return s;
};
const nuage = (cx, cy, s = 1) =>
  `<g fill="#ECEFF1"><ellipse cx="${cx}" cy="${cy}" rx="${40 * s}" ry="${18 * s}"/><circle cx="${cx - 20 * s}" cy="${cy - 10 * s}" r="${14 * s}"/><circle cx="${cx + 12 * s}" cy="${cy - 14 * s}" r="${17 * s}"/></g>`;
const pluie = (cx, cy, s = 1) => {
  let p = "";
  for (let i = 0; i < 4; i++) p += `<line x1="${cx - 24 * s + i * 16 * s}" y1="${cy + 20 * s}" x2="${cx - 30 * s + i * 16 * s}" y2="${cy + 44 * s}" stroke="#4FC3F7" stroke-width="${3.5 * s}" stroke-linecap="round"/>`;
  return nuage(cx, cy, s) + p;
};
const mont = (x, base, w, h, fill = "#A1887F") =>
  `<path d="M ${x - w / 2} ${base} L ${x} ${base - h} L ${x + w / 2} ${base} Z" fill="${fill}" stroke="#5D4037" stroke-width="2.5" stroke-linejoin="round"/>`;
const arbre = (x, y, s = 1, fill = "#388E3C") =>
  `<rect x="${x - 3 * s}" y="${y - 22 * s}" width="${6 * s}" height="${22 * s}" fill="#795548"/>` +
  `<circle cx="${x}" cy="${y - 30 * s}" r="${16 * s}" fill="${fill}"/>`;
const baobab = (x, y, s = 1) => {
  let b = `<path d="M ${x - 8 * s} ${y} L ${x - 5 * s} ${y - 40 * s} L ${x + 5 * s} ${y - 40 * s} L ${x + 8 * s} ${y} Z" fill="#8D6E63" stroke="#5D4037" stroke-width="1.5"/>`;
  b += `<line x1="${x - 4 * s}" y1="${y - 40 * s}" x2="${x - 14 * s}" y2="${y - 52 * s}" stroke="#5D4037" stroke-width="${2.5 * s}" stroke-linecap="round"/>`;
  b += `<line x1="${x + 4 * s}" y1="${y - 40 * s}" x2="${x + 14 * s}" y2="${y - 52 * s}" stroke="#5D4037" stroke-width="${2.5 * s}" stroke-linecap="round"/>`;
  b += `<line x1="${x}" y1="${y - 40 * s}" x2="${x}" y2="${y - 54 * s}" stroke="#5D4037" stroke-width="${2.5 * s}" stroke-linecap="round"/>`;
  return b;
};
const epineux = (x, y, s = 1) => {
  let e = `<rect x="${x - 2 * s}" y="${y - 24 * s}" width="${4 * s}" height="${24 * s}" fill="#8D6E63"/>`;
  for (let i = 0; i < 5; i++) {
    const a = -Math.PI / 2 + (i - 2) * 0.42;
    e += `<line x1="${x}" y1="${y - 22 * s}" x2="${x + Math.cos(a) * 16 * s}" y2="${y - 22 * s + Math.sin(a) * 16 * s}" stroke="#6D4C41" stroke-width="${2 * s}" stroke-linecap="round"/>`;
  }
  return e;
};
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
const thermometre = (cx, base, hgt, lvl) =>
  `<rect x="${cx - 8}" y="${base - hgt}" width="16" height="${hgt}" rx="8" fill="#FFFFFF" stroke="#546E7A" stroke-width="3"/>` +
  `<circle cx="${cx}" cy="${base}" r="14" fill="#E53935" stroke="#B71C1C" stroke-width="2"/>` +
  `<rect x="${cx - 4}" y="${base - hgt * lvl}" width="8" height="${hgt * lvl - 8}" fill="#E53935"/>`;

// ── S27. Les formes du relief ───────────────────────────────────────────
function svgReliefFormes() {
  const f = (x, y, dessin, nom, def) => cadre(x - 145, y, 290, 175, "#FDFBF3") + dessin +
    txt(x, y + 143, nom, { size: 22, bold: true, fill: "#1E7B34" }) +
    txt(x, y + 165, def, { size: 17, fill: "#546E7A", italic: true });
  return svgHeader(1000, 620) + titreSvg("Les formes du relief malgache") + `
  ${f(190, 90, mont(160, 235, 90, 80) + mont(215, 235, 70, 55) + mont(190, 235, 60, 45, "#BCAAA4"), "Un massif", "un groupe de montagnes")}
  ${f(500, 90, mont(500, 235, 110, 105) + `<path d="M 485 165 L 500 130 L 515 165 L 508 172 L 496 170 Z" fill="#FFFFFF"/>`, "Une montagne", "un sommet élevé et pointu")}
  ${f(810, 90, `<path d="M 740 235 Q 810 175 880 235 Z" fill="#C5E1A5" stroke="#558B2F" stroke-width="2.5"/>`, "Une colline", "une petite hauteur arrondie")}
  ${f(190, 300, `<path d="M 105 445 L 130 390 L 250 390 L 275 445 Z" fill="#D7CCA8" stroke="#8D6E63" stroke-width="2.5"/>`, "Un plateau", "une étendue plate et élevée")}
  ${f(500, 300, `<line x1="410" y1="445" x2="590" y2="445" stroke="#558B2F" stroke-width="3"/>` + arbre(460, 445, 0.7) + `<rect x="520" y="415" width="34" height="30" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>`, "Une plaine", "une étendue plate et basse")}
  ${f(810, 300, `<path d="M 730 445 L 790 380 L 850 445 Z" fill="#D7CCA8" stroke="#8D6E63" stroke-width="2.5"/><path d="M 890 445 L 830 380 L 790 445 Z" fill="#C5E1A5" stroke="#558B2F" stroke-width="2.5"/><path d="M 790 380 Q 810 415 830 445" fill="none" stroke="#4FC3F7" stroke-width="7"/>`, "Une vallée", "creusée par une rivière")}
  ${caption("Le relief de Madagascar offre toutes ces formes : massifs et montagnes, collines, plateaux, plaines et vallées.", 600)}
</svg>`;
}

// ── S28. Les trois grands massifs ───────────────────────────────────────
function svgMassifs() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les trois grands massifs de Madagascar") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#E8F5E9" })}
  ${dotL(cx, cy, h, 49, 27, 7, "#C00000")}
  ${txtL(cx, cy, h, 58, 22, "Tsaratanana", { size: 21, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 58, 44, "Maromokotra : 2 876 m", { size: 18, anchor: "start" })}
  ${dotL(cx, cy, h, 48, 104, 7, "#C00000")}
  ${txtL(cx, cy, h, 40, 120, "Ankaratra", { size: 21, bold: true })}
  ${txtL(cx, cy, h, 40, 142, "Tsiafajavona : 2 642 m", { size: 18 })}
  ${dotL(cx, cy, h, 47, 137, 7, "#C00000")}
  ${txtL(cx, cy, h, 60, 148, "Andringitra", { size: 21, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 60, 170, "Pic Boby : 2 658 m", { size: 18, anchor: "start" })}
  ${txtL(cx, cy, h, 49, 96, "★", { size: 20 })}
  <rect x="610" y="130" width="350" height="330" rx="14" fill="#FFF8E1" stroke="#F9A825" stroke-width="3"/>
  ${txt(785, 168, "À retenir", { size: 23, bold: true, fill: "#E65100" })}
  ${txt(785, 215, "Le Tsaratanana, au nord, porte", { size: 21 })}${txt(785, 242, "le Maromokotra : 2 876 m,", { size: 21 })}
  ${txt(785, 269, "le toit de Madagascar.", { size: 21 })}
  ${txt(785, 316, "L'Ankaratra se dresse près", { size: 21 })}${txt(785, 343, "d'Antananarivo.", { size: 21 })}
  ${txt(785, 390, "L'Andringitra se trouve", { size: 21 })}${txt(785, 417, "au sud de Fianarantsoa.", { size: 21 })}
  ${caption("Trois massifs volcaniques dominent l'île ; les montagnes se concentrent sur les Hautes Terres.", 540)}
</svg>`;
}

// ── S29. Les grandes plaines et les plateaux ────────────────────────────
function svgPlainesPlateaux() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les grandes plaines et les plateaux") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z29", cx, cy, h, `
    <ellipse cx="63" cy="80" rx="9" ry="12" fill="#A5D6A7"/>
    <ellipse cx="33" cy="58" rx="8" ry="9" fill="#A5D6A7"/>
    <ellipse cx="47" cy="93" rx="8" ry="8" fill="#A5D6A7"/>
    <ellipse cx="38" cy="66" rx="10" ry="9" fill="#D7CCA8"/>
    <ellipse cx="45" cy="148" rx="11" ry="13" fill="#D7CCA8"/>`)}
  ${txtL(cx, cy, h, 76, 72, "Alaotra", { size: 18, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 22, 52, "Marovoay", { size: 18, bold: true, anchor: "end" })}
  ${txtL(cx, cy, h, 49, 82, "Betsimitatatra", { size: 17, bold: true })}
  ${txtL(cx, cy, h, 24, 70, "Tampoketsa", { size: 17, bold: true, anchor: "end", fill: "#795548" })}
  ${txtL(cx, cy, h, 36, 150, "Ihorombe", { size: 17, bold: true, anchor: "end", fill: "#795548" })}
  <rect x="610" y="125" width="350" height="345" rx="14" fill="#F1F8E9" stroke="#558B2F" stroke-width="3"/>
  ${txt(785, 160, "Légende", { size: 22, bold: true })}
  <ellipse cx="645" cy="200" rx="16" ry="10" fill="#A5D6A7" stroke="#558B2F" stroke-width="2"/>${txt(665, 207, "une plaine : étendue plate", { size: 19, anchor: "start" })}
  ${txt(665, 231, "et basse, riche pour la riziculture", { size: 19, anchor: "start" })}
  <ellipse cx="645" cy="272" rx="16" ry="10" fill="#D7CCA8" stroke="#8D6E63" stroke-width="2"/>${txt(665, 279, "un plateau : étendue plate", { size: 19, anchor: "start" })}
  ${txt(665, 303, "et élevée, souvent herbeux", { size: 19, anchor: "start" })}
  ${txt(785, 360, "Plaines : Marovoay, Alaotra,", { size: 20, bold: true })}
  ${txt(785, 387, "Betsimitatatra (Autour de Tana)", { size: 20, bold: true })}
  ${txt(785, 434, "Plateaux : Tampoketsa, Ihorombe", { size: 20, bold: true })}
  ${caption("Les plaines humides nourrissent le riz ; les plateaux herbeux portent les prairies et le bétail.", 540)}
</svg>`;
}

// ── S30. Les grandes vallées ────────────────────────────────────────────
function svgVallees() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les grandes vallées") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z30", cx, cy, h, `
    <path d="M 46 92 Q 38 72 27 53" fill="none" stroke="#4FC3F7" stroke-width="4"/>
    <path d="M 44 158 Q 37 166 25 172" fill="none" stroke="#4FC3F7" stroke-width="4"/>
    <path d="M 42 122 Q 33 130 24 134" fill="none" stroke="#4FC3F7" stroke-width="4"/>
    <path d="M 47 132 Q 41 145 33 152" fill="none" stroke="#4FC3F7" stroke-width="4"/>
    <path d="M 51 106 Q 46 98 42 90" fill="none" stroke="#4FC3F7" stroke-width="4"/>`)}
  ${txtL(cx, cy, h, 62, 74, "Betsiboka", { size: 18, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 52, 168, "Mangoky", { size: 18, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 52, 124, "Tsiribihina", { size: 18, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 55, 142, "Mania", { size: 18, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 58, 96, "Ikopa", { size: 18, bold: true, anchor: "start" })}
  <rect x="610" y="140" width="350" height="310" rx="14" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  ${txt(785, 178, "Une vallée", { size: 23, bold: true, fill: "#0277BD" })}
  ${txt(785, 225, "c'est la dépression allongée", { size: 21 })}
  ${txt(785, 252, "creusée par un fleuve", { size: 21 })}
  ${txt(785, 279, "entre deux reliefs.", { size: 21 })}
  ${txt(785, 335, "Les vallées de l'Ouest ouvrent", { size: 20, bold: true })}
  ${txt(785, 362, "des voies vers la mer :", { size: 20, bold: true })}
  ${txt(785, 389, "Betsiboka, Tsiribihina, Mania…", { size: 20, bold: true })}
  ${caption("Une vallée suit le parcours d'un fleuve, comme la vallée de la Betsiboka vers Mahajanga.", 540)}
</svg>`;
}

// ── S31. L'utilité du relief ────────────────────────────────────────────
function svgUtiliteRelief() {
  const p = (x, y, titre, dessin, lignes) => cadre(x - 225, y, 450, 200, "#FDFBF3") + dessin +
    txt(x, y + 34, titre, { size: 22, bold: true, fill: "#1E7B34" }) +
    lignes.map((l, i) => txt(x, y + 158 + i * 24, l, { size: 18, fill: "#546E7A" })).join("");
  return svgHeader(1000, 620) + titreSvg("L'utilité du relief") + `
  ${p(260, 90, "Pour l'agriculture", mont(170, 240, 130, 90) + `<path d="M 205 240 L 320 240 L 345 195 L 230 195 Z" fill="#C5E1A5" stroke="#558B2F" stroke-width="2"/>` + `<path d="M 248 240 q 6 -12 12 -18 q 6 6 12 18 Z" fill="#81C784"/><path d="M 272 226 q 6 -12 12 -18 q 6 6 12 18 Z" fill="#81C784"/>`, ["plaines et vallées : rizières,", "plateaux : cultures et prairies"])}
  ${p(760, 90, "Pour le transport", mont(680, 245, 120, 85) + `<path d="M 640 248 Q 730 205 860 245" fill="none" stroke="#EF6C00" stroke-width="7" stroke-dasharray="16 10"/>` + `<rect x="850" y="216" width="40" height="20" rx="4" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>`, ["les vallées et les cols", "guident les routes"])}
  ${p(260, 315, "Pour l'aménagement", mont(190, 470, 90, 70) + `<rect x="230" y="430" width="52" height="34" fill="#FFF3E0" stroke="#8D6E63" stroke-width="2"/><path d="M 230 430 L 256 412 L 282 430 Z" fill="#C00000"/><path d="M 310 470 q 0 -26 22 -26 q 22 0 22 26 Z" fill="#4FC3F7"/>`, ["barrages dans les montagnes,", "villes sur les plateaux"])}
  ${p(760, 315, "Pour le tourisme", mont(700, 470, 110, 92, "#8D6E63") + `<path d="M 745 470 L 745 430 M 738 430 h 14 M 738 448 h 14" stroke="#263238" stroke-width="3" fill="none"/>` + `<path d="M 780 470 h 46 v -22 h -46 Z" fill="#FF7043" stroke="#BF360C" stroke-width="2"/>`, ["paysages admirés des visiteurs :", "Isalo, Andringitra, Tsingy…"])}
  ${caption("Le relief n'est pas un obstacle : plaines, vallées et montagnes servent l'agriculture, les routes et le tourisme.", 600)}
</svg>`;
}

// ── S32. Les éléments du climat ─────────────────────────────────────────
function svgElementsClimat() {
  return svgHeader(1000, 580) + `<defs><marker id="arrv" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#4FC3F7"/></marker></defs>` + titreSvg("Les trois éléments du climat") + `
  ${cadre(40, 90, 295, 400)}
  ${thermometre(187, 420, 240, 0.75)}
  ${txt(187, 130, "La température", { size: 21, bold: true, fill: "#C00000" })}
  ${txt(187, 170, "chaud ou frais ?", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(187, 458, "°C", { size: 18, fill: "#546E7A" })}
  ${cadre(352, 90, 295, 400)}
  ${txt(500, 130, "Les vents", { size: 21, bold: true, fill: "#0277BD" })}
  <path d="M 420 220 q 60 -22 120 0" fill="none" stroke="#81D7EC" stroke-width="6" marker-end="url(#arrv)"/>
  <path d="M 430 280 q 60 -22 110 0" fill="none" stroke="#81D7EC" stroke-width="6" marker-end="url(#arrv)"/>
  <path d="M 445 340 q 55 -20 95 0" fill="none" stroke="#81D7EC" stroke-width="6" marker-end="url(#arrv)"/>
  ${txt(500, 420, "l'air qui se déplace :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(500, 448, "alizés, moussons…", { size: 19, italic: true, fill: "#546E7A" })}
  ${cadre(664, 90, 295, 400)}
  ${txt(812, 130, "Les précipitations", { size: 21, bold: true, fill: "#01579B" })}
  ${pluie(812, 250, 1.4)}
  ${txt(812, 360, "la pluie qui tombe,", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(812, 388, "en mm par an", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Le climat d'un pays se décrit avec trois éléments : la température, les vents et les précipitations.", 540)}
</svg>`;
}

// ── S33. Le climat tropical de Madagascar ───────────────────────────────
function svgClimatTropical() {
  const mois = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
  let bar = "";
  const x0 = 120, wCell = 63;
  mois.forEach((m, i) => {
    const pluvieux = i >= 10 || i <= 3;
    bar += `<rect x="${x0 + i * wCell}" y="300" width="${wCell}" height="70" fill="${pluvieux ? "#4FC3F7" : "#FFD54F"}" stroke="#FFFFFF" stroke-width="2"/>` +
      `<text x="${x0 + i * wCell + wCell / 2}" y="396" text-anchor="middle" font-size="17" fill="#546E7A">${m}</text>`;
  });
  return svgHeader(1000, 580) + titreSvg("Le climat tropical de Madagascar") + `
  ${cadre(40, 80, 920, 350)}
  ${soleil(150, 190, 48)}
  ${txt(150, 290, "Il fait chaud", { size: 22, bold: true, fill: "#E65100" })}
  ${txt(150, 318, "toute l'année", { size: 22, bold: true, fill: "#E65100" })}
  ${pluie(430, 180, 1.3)}
  ${txt(430, 290, "avec une saison", { size: 22, bold: true, fill: "#01579B" })}
  ${txt(430, 318, "des pluies", { size: 22, bold: true, fill: "#01579B" })}
  ${nuage(700, 165, 1.2)}
  ${txt(700, 290, "et une saison", { size: 22, bold: true, fill: "#795548" })}
  ${txt(700, 318, "sèche", { size: 22, bold: true, fill: "#795548" })}
  ${txt(500, 445, "L'année à Madagascar", { size: 21, bold: true })}
  ${bar}
  <rect x="120" y="470" width="14" height="14" fill="#4FC3F7"/>${txt(148, 482, "saison chaude et pluvieuse (novembre à avril)", { size: 18, anchor: "start" })}
  <rect x="570" y="470" width="14" height="14" fill="#FFD54F"/>${txt(598, 482, "saison fraîche et sèche (mai à octobre)", { size: 18, anchor: "start" })}
  ${caption("Un climat tropical : chaleur toute l'année, alternance d'une saison des pluies et d'une saison sèche.", 540)}
</svg>`;
}

// ── S34. Les zones climatiques (1) ──────────────────────────────────────
function svgZonesClimat1() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les zones climatiques (1) : zones humides et Hautes Terres") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z34", cx, cy, h, `
    <rect x="60" y="0" width="40" height="200" fill="#4FC3F7" opacity="0.75"/>
    <path d="M 20 52 q 10 -6 20 2 q 8 6 4 14 q -12 4 -20 -2 q -8 -8 -4 -14 Z" fill="#4FC3F7" opacity="0.75"/>
    <ellipse cx="48" cy="100" rx="26" ry="46" fill="#FFCC80" opacity="0.85"/>`)}
  ${txtL(cx, cy, h, 80, 80, "Côte Est", { size: 20, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 80, 100, "très humide", { size: 17, anchor: "start" })}
  ${txtL(cx, cy, h, 20, 46, "Sambirano", { size: 18, bold: true, anchor: "end" })}
  ${txtL(cx, cy, h, 48, 96, "Hautes", { size: 19, bold: true, fill: "#795548" })}
  ${txtL(cx, cy, h, 48, 114, "Terres", { size: 19, bold: true, fill: "#795548" })}
  <rect x="610" y="130" width="350" height="330" rx="14" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  ${txt(785, 165, "Légende", { size: 22, bold: true })}
  <rect x="640" y="195" width="26" height="16" fill="#4FC3F7" opacity="0.8"/>${txt(680, 208, "zone humide : pluies", { size: 19, anchor: "start" })}
  ${txt(680, 232, "abondantes toute l'année", { size: 19, anchor: "start" })}
  <rect x="640" y="262" width="26" height="16" fill="#FFCC80"/>${txt(680, 275, "climat d'altitude :", { size: 19, anchor: "start" })}
  ${txt(680, 299, "plus frais, moins de pluies", { size: 19, anchor: "start" })}
  ${txt(785, 355, "La Côte Est (Toamasina)", { size: 20, bold: true })}
  ${txt(785, 382, "et le Sambirano sont humides ;", { size: 20, bold: true })}
  ${txt(785, 409, "les Hautes Terres sont fraîches.", { size: 20, bold: true })}
  ${caption("À l'est et dans le Sambirano, il pleut souvent ; sur les Hautes Terres, l'altitude rafraîchit le climat.", 540)}
</svg>`;
}

// ── S35. Les zones climatiques (2) ──────────────────────────────────────
function svgZonesClimat2() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les zones climatiques (2) : la Côte Ouest et le Sud-Ouest") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z35", cx, cy, h, `
    <rect x="0" y="45" width="30" height="110" fill="#FFF176" opacity="0.9"/>
    <path d="M 15 140 L 100 155 L 100 200 L 15 185 Z" fill="#FF8A65" opacity="0.85"/>`)}
  ${txtL(cx, cy, h, 18, 90, "Côte", { size: 19, bold: true, anchor: "end" })}
  ${txtL(cx, cy, h, 18, 108, "Ouest", { size: 19, bold: true, anchor: "end" })}
  ${txtL(cx, cy, h, 55, 172, "Sud-Ouest", { size: 20, bold: true, fill: "#BF360C" })}
  ${txtL(cx, cy, h, 55, 190, "très sec", { size: 17, fill: "#BF360C" })}
  <rect x="610" y="130" width="350" height="330" rx="14" fill="#FFFDE7" stroke="#F9A825" stroke-width="3"/>
  ${txt(785, 165, "Légende", { size: 22, bold: true })}
  <rect x="640" y="195" width="26" height="16" fill="#FFF176"/>${txt(680, 208, "climat sec : une longue", { size: 19, anchor: "start" })}
  ${txt(680, 232, "saison sèche (Côte Ouest)", { size: 19, anchor: "start" })}
  <rect x="640" y="262" width="26" height="16" fill="#FF8A65"/>${txt(680, 275, "climat très sec : semi-aride,", { size: 19, anchor: "start" })}
  ${txt(680, 299, "grand Sud et Sud-Ouest", { size: 19, anchor: "start" })}
  ${txt(785, 355, "À l'ouest, il pleut moins ;", { size: 20, bold: true })}
  ${txt(785, 382, "au sud-ouest (Toliara),", { size: 20, bold: true })}
  ${txt(785, 409, "la sécheresse dure presque", { size: 20, bold: true })}
  ${txt(785, 436, "toute l'année.", { size: 20, bold: true })}
  ${caption("De la côte ouest au grand sud, les pluies diminuent : c'est le domaine des baobabs et des épineux.", 540)}
</svg>`;
}

// ── S36. Les quatre saisons de l'année ──────────────────────────────────
function svgQuatreSaisons() {
  const s = (x, y, titre, mois, dessin, coul) => cadre(x - 225, y, 450, 320, "#FDFBF3") + dessin +
    txt(x, y + 62, titre, { size: 24, bold: true, fill: coul }) +
    txt(x, y + 92, mois, { size: 19, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 800) + titreSvg("Les quatre saisons de l'année") + `
  ${s(260, 90, "Le printemps", "mars, avril, mai", `<circle cx="260" cy="${90 + 210}" r="16" fill="#FFCC80" stroke="#F9A825" stroke-width="3"/>` + [0, 72, 144, 216, 288].map(a => `<ellipse cx="${260 + Math.cos(a * Math.PI / 180) * 30}" cy="${90 + 210 + Math.sin(a * Math.PI / 180) * 30}" rx="13" ry="13" fill="#F48FB1"/>`).join(""), "#E91E63")}
  ${s(760, 90, "L'été", "juin, juillet, août", soleil(760, 300, 45) + `<line x1="700" y1="370" x2="820" y2="370" stroke="#F9A825" stroke-width="4"/>`, "#E65100")}
  ${s(260, 440, "L'automne", "septembre, octobre, novembre", `<path d="M 240 710 q 5 -60 20 -70 q 15 10 20 70 Z" fill="#F57C00" opacity="0.85"/>` + `<path d="M 290 680 q 14 -10 26 0 M 296 702 q 12 -8 22 0" stroke="#F57C00" stroke-width="4" fill="none"/>`, "#EF6C00")}
  ${s(760, 440, "L'hiver", "décembre, janvier, février", nuage(760, 630, 1.4) + `<line x1="720" y1="680" x2="800" y2="680" stroke="#B0BEC5" stroke-width="5"/>` + `<line x1="735" y1="695" x2="785" y2="695" stroke="#B0BEC5" stroke-width="5"/>`, "#0277BD")}
  ${caption("Dans beaucoup de pays du monde, l'année compte quatre saisons : printemps, été, automne, hiver.", 780)}
</svg>`;
}

// ── S37. Les deux saisons à Madagascar ──────────────────────────────────
function svgDeuxSaisons() {
  return svgHeader(1000, 580) + titreSvg("Les deux saisons à Madagascar") + `
  ${cadre(40, 90, 440, 400, "#E1F5FE")}
  ${pluie(260, 200, 1.6)}
  ${soleil(170, 260, 30)}
  ${txt(260, 330, "La saison chaude", { size: 23, bold: true, fill: "#01579B" })}
  ${txt(260, 358, "et pluvieuse", { size: 23, bold: true, fill: "#01579B" })}
  ${txt(260, 405, "novembre à avril", { size: 20, italic: true, fill: "#546E7A" })}
  ${txt(260, 445, "grosses averses, chaleur,", { size: 19 })}
  ${txt(260, 470, "cyclones parfois", { size: 19 })}
  ${cadre(520, 90, 440, 400, "#FFFDE7")}
  ${nuage(740, 190, 1.5)}
  ${txt(740, 300, "La saison fraîche", { size: 23, bold: true, fill: "#795548" })}
  ${txt(740, 328, "et sèche", { size: 23, bold: true, fill: "#795548" })}
  ${txt(740, 375, "mai à octobre", { size: 20, italic: true, fill: "#546E7A" })}
  ${txt(740, 415, "ciel dégagé, peu de pluie,", { size: 19 })}
  ${txt(740, 440, "nuits fraîches sur les Hautes Terres", { size: 19 })}
  ${caption("À Madagascar, l'année ne compte que deux saisons : une saison chaude et pluvieuse, une saison fraîche et sèche.", 540)}
</svg>`;
}

// ── S38. Les principaux fleuves (1) ─────────────────────────────────────
function svgFleuves1() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les principaux fleuves (1)") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z38", cx, cy, h, `
    <path d="M 45 158 Q 38 166 26 173" fill="none" stroke="#0277BD" stroke-width="5"/>
    <path d="M 52 58 Q 43 46 33 33" fill="none" stroke="#0277BD" stroke-width="5"/>
    <path d="M 46 92 Q 38 72 27 54" fill="none" stroke="#0277BD" stroke-width="5"/>`)}
  ${txtL(cx, cy, h, 56, 165, "Mangoky", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  ${txtL(cx, cy, h, 56, 60, "Sofia", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  ${txtL(cx, cy, h, 60, 78, "Betsiboka", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  <rect x="610" y="120" width="350" height="350" rx="14" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  ${txt(785, 155, "À retenir", { size: 22, bold: true })}
  ${txt(785, 205, "Le Mangoky, au sud-ouest,", { size: 21 })}
  ${txt(785, 232, "est le plus long fleuve", { size: 21 })}
  ${txt(785, 259, "de Madagascar : 821 km.", { size: 21 })}
  ${txt(785, 315, "La Sofia se jette dans le", { size: 21 })}
  ${txt(785, 342, "canal de Mozambique, au nord-ouest.", { size: 21 })}
  ${txt(785, 398, "La Betsiboka arrose Mahajanga", { size: 21 })}
  ${txt(785, 425, "par son large estuaire rouge.", { size: 21 })}
  ${caption("Les fleuves de l'Ouest descendent des Hautes Terres vers le canal de Mozambique.", 540)}
</svg>`;
}

// ── S39. Les principaux fleuves (2) ─────────────────────────────────────
function svgFleuves2() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les principaux fleuves (2)") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z39", cx, cy, h, `
    <path d="M 42 122 Q 33 130 24 134" fill="none" stroke="#0277BD" stroke-width="5"/>
    <path d="M 44 162 Q 39 172 32 181" fill="none" stroke="#0277BD" stroke-width="5"/>
    <path d="M 52 118 Q 63 124 73 129" fill="none" stroke="#0277BD" stroke-width="5"/>`)}
  ${txtL(cx, cy, h, 52, 118, "Tsiribihina", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  ${txtL(cx, cy, h, 54, 168, "Onilahy", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  ${txtL(cx, cy, h, 68, 108, "Mangoro", { size: 20, bold: true, anchor: "start", fill: "#01579B" })}
  <rect x="610" y="120" width="350" height="350" rx="14" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  ${txt(785, 155, "À retenir", { size: 22, bold: true })}
  ${txt(785, 205, "La Tsiribihina traverse", { size: 21 })}
  ${txt(785, 232, "les plateaux de l'Ouest.", { size: 21 })}
  ${txt(785, 288, "L'Onilahy se jette près", { size: 21 })}
  ${txt(785, 315, "de Toliara, au sud-ouest.", { size: 21 })}
  ${txt(785, 371, "Le Mangoro coule vers l'est :", { size: 21 })}
  ${txt(785, 398, "il se jette dans l'océan Indien.", { size: 21 })}
  ${txt(785, 454, "Ouest ou est : chaque fleuve", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(785, 478, "rejoint la mer la plus proche.", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Les fleuves malgaches sont courts et rapides : ils descendent des Hautes Terres vers la mer.", 540)}
</svg>`;
}

// ── S40. Les principaux lacs naturels ───────────────────────────────────
function svgLacsNaturels() {
  const cx = 320, cy = 340, h = 400;
  return svgHeader(1000, 580) + titreSvg("Les principaux lacs naturels") + `
  ${cadre(40, 90, 530, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${dotL(cx, cy, h, 63, 80, 9, "#0288D1", "#01579B")}
  ${dotL(cx, cy, h, 44, 95, 7, "#0288D1", "#01579B")}
  ${dotL(cx, cy, h, 30, 62, 7, "#0288D1", "#01579B")}
  ${dotL(cx, cy, h, 33, 177, 7, "#0288D1", "#01579B")}
  ${txtL(cx, cy, h, 76, 74, "Alaotra", { size: 20, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 52, 108, "Itasy", { size: 20, bold: true })}
  ${txtL(cx, cy, h, 20, 54, "Kinkony", { size: 20, bold: true, anchor: "end" })}
  ${txtL(cx, cy, h, 20, 172, "Tsimanampetsotsa", { size: 17, bold: true, anchor: "end" })}
  <rect x="610" y="120" width="350" height="350" rx="14" fill="#E1F5FE" stroke="#0277BD" stroke-width="3"/>
  ${txt(785, 155, "À retenir", { size: 22, bold: true })}
  ${txt(785, 205, "Le lac Alaotra est le plus grand", { size: 21 })}
  ${txt(785, 232, "lac naturel de Madagascar :", { size: 21 })}
  ${txt(785, 259, "le pays du riz et des lémuriens.", { size: 21 })}
  ${txt(785, 315, "L'Itasy est un lac de volcan,", { size: 21 })}
  ${txt(785, 342, "près d'Antananarivo.", { size: 21 })}
  ${txt(785, 398, "Le Tsimanampetsotsa, au sud,", { size: 21 })}
  ${txt(785, 425, "est un lac salé protégé.", { size: 21 })}
  ${caption("Un lac naturel est né sans l'intervention de l'homme : dans une dépression ou un ancien volcan.", 540)}
</svg>`;
}

// ── S41. Les lacs artificiels ───────────────────────────────────────────
function svgLacsArtificiels() {
  const cx = 660, cy = 330, h = 380;
  return svgHeader(1000, 580) + titreSvg("Les lacs artificiels : des lacs créés par l'homme") + `
  ${cadre(40, 90, 470, 420)}
  ${txt(275, 140, "Comment ça marche ?", { size: 22, bold: true, fill: "#0277BD" })}
  ${mont(150, 400, 150, 130, "#BCAAA4")}
  ${mont(400, 400, 150, 130, "#BCAAA4")}
  <path d="M 75 400 Q 275 340 475 400 L 475 400 Q 275 430 75 400 Z" fill="#4FC3F7" opacity="0.85"/>
  ${txt(275, 398, "lac de barrage", { size: 18, bold: true, fill: "#01579B" })}
  <rect x="258" y="352" width="34" height="60" fill="#8D6E63" stroke="#5D4037" stroke-width="2.5"/>
  ${txt(275, 448, "le barrage retient l'eau", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(275, 480, "du fleuve", { size: 18, italic: true, fill: "#546E7A" })}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${dotL(cx, cy, h, 53, 90, 7, "#0288D1", "#01579B")}
  ${dotL(cx, cy, h, 55, 94, 7, "#0288D1", "#01579B")}
  ${txtL(cx, cy, h, 66, 82, "Mantasoa", { size: 19, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 68, 100, "Tsiazompaniry", { size: 19, bold: true, anchor: "start" })}
  ${txtL(cx, cy, h, 48, 86, "★", { size: 17 })}
  ${txt(660, 150, "Près d'Antananarivo", { size: 20, bold: true, fill: "#C00000" })}
  ${caption("Mantasoa et Tsiazompaniry sont des lacs de barrage : l'homme a construit un mur pour retenir l'eau.", 540)}
</svg>`;
}

// ── S42. L'utilité des cours d'eau et des lacs ──────────────────────────
function svgUtiliteEau() {
  const p = (x, y, titre, dessin) => cadre(x - 175, y, 350, 200, "#E1F5FE") + dessin +
    txt(x, y + 178, titre, { size: 20, bold: true, fill: "#01579B" });
  return svgHeader(1000, 620) + titreSvg("L'utilité des cours d'eau et des lacs") + `
  ${p(200, 90, "La pêche", poisson(160, 185, 1.3) + poisson(230, 205, 1) + `<path d="M 90 235 q 55 -20 120 0" fill="none" stroke="#4FC3F7" stroke-width="6"/>`)}
  ${p(500, 90, "Le transport", `<path d="M 430 235 h 140" stroke="#4FC3F7" stroke-width="6"/>` + `<path d="M 460 235 l 40 0 l -8 18 l -24 0 Z" fill="#8D6E63"/>` + `<line x1="480" y1="235" x2="500" y2="205" stroke="#5D4037" stroke-width="3"/>` + `<path d="M 492 208 l 16 8 l -16 6 Z" fill="#ECEFF1" stroke="#90A4AE" stroke-width="1.5"/>`)}
  ${p(800, 90, "L'irrigation", `<path d="M 730 240 h 140" stroke="#4FC3F7" stroke-width="6"/>` + `<path d="M 800 240 l 0 -25" stroke="#4FC3F7" stroke-width="5"/>` + `<path d="M 770 215 h 60 v -8 h -60 Z" fill="#A5D6A7" stroke="#558B2F" stroke-width="2"/>` + `<path d="M 780 207 q 10 -12 20 0 q 10 -12 20 0" fill="none" stroke="#558B2F" stroke-width="3"/>`)}
  ${p(200, 315, "L'électricité", `<rect x="150" y="420" width="100" height="22" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>` + `<path d="M 200 400 q -20 10 -8 20 M 200 400 q 20 10 8 20 M 200 392 l 0 8" stroke="#F9A825" stroke-width="4" fill="none"/>` + `<path d="M 160 415 q 40 -12 80 0" fill="none" stroke="#4FC3F7" stroke-width="5"/>`)}
  ${p(500, 315, "L'eau ménagère", `<rect x="470" y="390" width="18" height="46" rx="4" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>` + `<path d="M 510 390 q 14 -14 0 -26 M 510 390 q -14 -14 0 -26" fill="none" stroke="#90A4AE" stroke-width="4"/>` + `<path d="M 530 420 h 40" stroke="#5D4037" stroke-width="3"/>` + `<path d="M 545 420 q 5 -12 10 0" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>`)}
  ${p(800, 315, "L'abreuvement", zebu(790, 440, 1.1) + `<path d="M 720 445 q 35 -10 60 0" fill="none" stroke="#4FC3F7" stroke-width="5"/>`)}
  ${caption("Pêcher, naviguer, irriguer les rizières, produire de l'électricité, boire et abreuver : l'eau sert à tout.", 600)}
</svg>`;
}

// ── S43. Les problèmes de l'eau ─────────────────────────────────────────
function svgProblemesEau() {
  return svgHeader(1000, 580) + titreSvg("Les problèmes de l'eau") + `
  ${cadre(40, 90, 295, 400, "#FFEBEE")}
  ${txt(187, 130, "La pollution", { size: 21, bold: true, fill: "#C00000" })}
  ${`<rect x="120" y="330" width="135" height="70" fill="#B0BEC5" stroke="#546E7A" stroke-width="2.5"/>` +
    `<rect x="230" y="350" width="18" height="30" fill="#546E7A"/>` +
    `<path d="M 255 365 q 40 8 55 35" fill="none" stroke="#6D4C41" stroke-width="6"/>` +
    `<path d="M 110 420 q 77 16 150 0" fill="none" stroke="#4FC3F7" stroke-width="8"/>` +
    `<path d="M 160 405 l 8 10 M 190 408 l 6 9 M 220 412 l 7 8" stroke="#6D4C41" stroke-width="4"/>`}
  ${txt(187, 462, "les déchets et les eaux sales", { size: 17, fill: "#546E7A", italic: true })}
  ${txt(187, 484, "rendent l'eau dangereuse", { size: 17, fill: "#546E7A", italic: true })}
  ${cadre(352, 90, 295, 400, "#FFF8E1")}
  ${txt(500, 130, "L'accès à l'eau potable", { size: 21, bold: true, fill: "#E65100" })}
  ${`<path d="M 400 430 q 40 -20 80 -20 q 40 0 60 20" fill="none" stroke="#D7CCA8" stroke-width="10"/>` +
    `<circle cx="430" cy="360" r="14" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>` +
    `<rect x="470" y="350" width="22" height="34" rx="6" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>` +
    `<path d="M 481 350 q -12 -8 -2 -16 M 481 350 q 12 -8 2 -16" fill="none" stroke="#263238" stroke-width="3"/>`}
  ${txt(500, 462, "des familles marchent loin", { size: 17, fill: "#546E7A", italic: true })}
  ${txt(500, 484, "pour chercher de l'eau", { size: 17, fill: "#546E7A", italic: true })}
  ${cadre(664, 90, 295, 400, "#EFEBE9")}
  ${txt(812, 130, "La dégradation", { size: 21, bold: true, fill: "#5D4037" })}
  ${`<path d="M 740 430 L 760 380 L 778 430 Z" fill="#BF360C" opacity="0.7"/>` +
    `<path d="M 762 430 L 782 370 L 800 430 Z" fill="#D84315" opacity="0.7"/>` +
    `<path d="M 720 430 h 180" stroke="#8D6E63" stroke-width="4"/>` +
    `<path d="M 850 430 q 20 -35 40 -10" fill="none" stroke="#4FC3F7" stroke-width="5"/>` +
    `<path d="M 748 412 l -6 10 M 785 400 l -7 12" stroke="#BF360C" stroke-width="3"/>`}
  ${txt(812, 462, "l'érosion creuse des lavaka", { size: 17, fill: "#546E7A", italic: true })}
  ${txt(812, 484, "et boue les rivières", { size: 17, fill: "#546E7A", italic: true })}
  ${caption("Polluer moins, protéger les sources et partager l'eau : des défis pour toute l'île.", 540)}
</svg>`;
}

// ── S44. Les types de végétation (1) ────────────────────────────────────
function svgVegetation1() {
  return svgHeader(1000, 580) + titreSvg("Les types de végétation (1) : les forêts") + `
  ${cadre(40, 90, 440, 400, "#E8F5E9")}
  ${txt(260, 130, "La forêt tropicale humide", { size: 21, bold: true, fill: "#1B5E20" })}
  ${arbre(110, 430, 1.6, "#2E7D32")}${arbre(170, 435, 1.9, "#1B5E20")}${arbre(230, 430, 1.5, "#388E3C")}${arbre(300, 438, 2.1, "#2E7D32")}${arbre(380, 432, 1.6, "#1B5E20")}
  ${pluie(200, 220, 1.1)}${pluie(330, 240, 0.8)}
  ${txt(260, 470, "Côte Est et Sambirano :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(260, 494, "dense, verte, sous la pluie", { size: 19, italic: true, fill: "#546E7A" })}
  ${cadre(520, 90, 440, 400, "#FFFDE7")}
  ${txt(740, 130, "La forêt sèche et épineuse", { size: 21, bold: true, fill: "#827717" })}
  ${soleil(900, 190, 34)}
  ${baobab(600, 450, 1.5)}${epineux(680, 448, 1.7)}${epineux(760, 445, 1.3)}${baobab(850, 452, 1.1)}
  ${txt(740, 470, "Ouest et Sud :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(740, 494, "baobabs, plantes épineuses, longue sécheresse", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Deux mondes végétaux : la forêt humide de l'Est, verdoyante, et les forêts sèches de l'Ouest.", 540)}
</svg>`;
}

// ── S45. Les types de végétation (2) ────────────────────────────────────
function svgVegetation2() {
  const herbe = (x, y, s = 1) => `<path d="M ${x} ${y} q -4 -10 -8 -14 M ${x} ${y} q 0 -12 1 -16 M ${x} ${y} q 4 -10 9 -13" stroke="#9CCC65" stroke-width="${2.2 * s}" fill="none"/>`;
  let g1 = "";
  for (let i = 0; i < 9; i++) g1 += herbe(90 + i * 42, 435, 1);
  let g2 = "";
  for (let i = 0; i < 7; i++) g2 += herbe(570 + i * 52, 435, 1.1);
  return svgHeader(1000, 580) + titreSvg("Les types de végétation (2) : prairies et savanes") + `
  ${cadre(40, 90, 440, 400, "#F1F8E9")}
  ${txt(260, 130, "La prairie", { size: 22, bold: true, fill: "#558B2F" })}
  ${g1}
  ${zebu(200, 430, 1.2)}${zebu(330, 432, 0.9)}
  ${txt(260, 470, "Hautes Terres :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(260, 494, "des herbes basses, pas d'arbres", { size: 19, italic: true, fill: "#546E7A" })}
  ${cadre(520, 90, 440, 400, "#FFF8E1")}
  ${txt(740, 130, "La savane", { size: 22, bold: true, fill: "#9E9D24" })}
  ${soleil(900, 185, 32)}
  ${g2}
  ${arbre(620, 435, 1.2, "#827717")}${arbre(850, 438, 1.4, "#827717")}
  ${zebu(740, 430, 1.1)}
  ${txt(740, 470, "Ouest et Nord-Ouest :", { size: 19, italic: true, fill: "#546E7A" })}
  ${txt(740, 494, "des herbes avec quelques arbres épars", { size: 19, italic: true, fill: "#546E7A" })}
  ${caption("Quand il pleut moins, la forêt laisse la place aux prairies et aux savanes, domaines des zébus.", 540)}
</svg>`;
}

// ── S46. L'utilité de la végétation ─────────────────────────────────────
function svgUtiliteVegetation() {
  const p = (x, y, titre, dessin, lignes) => cadre(x - 175, y, 350, 210, "#E8F5E9") + dessin +
    txt(x, y + 186, titre, { size: 20, bold: true, fill: "#1B5E20" }) +
    lignes.map((l, i) => txt(x, y + 118 + i * 22 - 30, l, { size: 16, fill: "#546E7A", italic: true })).join("");
  return svgHeader(1000, 620) + titreSvg("L'utilité de la végétation") + `
  ${p(200, 90, "Nourrir : les cultures", `<path d="M 200 200 v -38" stroke="#558B2F" stroke-width="4"/><path d="M 200 168 q -16 -4 -22 -18 q 16 -2 22 10 q 6 -12 22 -10 q -6 14 -22 18" fill="#66BB6A"/>`, ["vanille, café, riz, fruits"])}
  ${p(500, 90, "Protéger l'environnement", arbre(500, 205, 1.3) + `<circle cx="545" cy="150" r="16" fill="#E1F5FE" stroke="#0277BD" stroke-width="2"/>` + txt(545, 156, "O₂", { size: 15, bold: true, fill: "#0277BD" }), ["l'arbre donne l'oxygène", "et retient la terre"])}
  ${p(800, 90, "Abriter la biodiversité", `<ellipse cx="800" cy="196" rx="16" ry="22" fill="#8D6E63"/><circle cx="800" cy="168" r="11" fill="#A1887F"/><circle cx="797" cy="165" r="2" fill="#263238"/><circle cx="804" cy="165" r="2" fill="#263238"/><path d="M 786 204 q -16 6 -12 26 q 10 -6 14 -14" fill="none" stroke="#8D6E63" stroke-width="7" stroke-linecap="round"/>`, ["les forêts abritent", "lémuriens et caméléons"])}
  ${p(200, 325, "Fournir des ressources", `<rect x="160" y="185" width="80" height="18" rx="6" fill="#A1887F" stroke="#5D4037" stroke-width="2"/><rect x="160" y="167" width="80" height="18" rx="6" fill="#BCAAA4" stroke="#5D4037" stroke-width="2"/>`, ["bois, bambou, plantes", "médicinales"])}
  ${p(500, 325, "Faire vivre l'économie", `<path d="M 450 210 h 100" stroke="#4FC3F7" stroke-width="5"/><path d="M 468 210 l 24 0 l -6 14 l -12 0 Z" fill="#8D6E63"/><rect x="530" y="192" width="26" height="18" fill="#EF6C00" stroke="#BF360C" stroke-width="2"/>${txt(543, 181, "export", { size: 14, fill: "#BF360C", bold: true })}`, ["girofle, vanille, litchis", "vendus dans le monde"])}
  ${p(800, 325, "Ombrer et nourrir le sol", `<path d="M 800 220 v -34" stroke="#558B2F" stroke-width="4"/><circle cx="800" cy="172" r="26" fill="#66BB6A"/><path d="M 750 220 h 100" stroke="#8D6E63" stroke-width="4"/>`, ["les feuilles mortes", "enrichissent la terre"])}
  ${caption("La végétation nourrit, protège, abrite les animaux et fait vivre l'économie malgache.", 600)}
</svg>`;
}

// ── S47. Les problèmes de la végétation ─────────────────────────────────
function svgProblemesVegetation() {
  const flamme = (x, y, s = 1) => `<path d="M ${x} ${y} q ${-12 * s} ${-16 * s} 0 ${-34 * s} q ${4 * s} ${14 * s} ${12 * s} ${20 * s} q ${8 * s} ${-10 * s} ${4 * s} ${-20 * s} q ${16 * s} ${14 * s} ${12 * s} ${34 * s} q ${-2 * s} ${14 * s} ${-14 * s} ${14 * s} q ${-12 * s} 0 ${-14 * s} ${-14 * s} Z" fill="#FF7043" stroke="#BF360C" stroke-width="1.5"/>`;
  const p = (x, y, titre, dessin) => cadre(x - 175, y, 350, 205, "#FFEBEE") + dessin +
    txt(x, y + 182, titre, { size: 19, bold: true, fill: "#C00000" });
  return svgHeader(1000, 620) + titreSvg("Les problèmes de la végétation") + `
  ${p(200, 90, "Le tavy (coupe-brûlis)", arbre(140, 290, 1.4, "#8D6E63") + `<line x1="128" y1="270" x2="165" y2="233" stroke="#5D4037" stroke-width="4"/>` + flamme(230, 288, 1.3) + `<rect x="270" y="272" width="46" height="18" fill="#A1887F" stroke="#5D4037" stroke-width="2"/>`)}
  ${p(500, 90, "Les feux de brousse", flamme(460, 290, 1.2) + flamme(520, 292, 1.5) + flamme(570, 288, 1) + `<path d="M 420 296 q 80 -8 170 0" stroke="#9CCC65" stroke-width="5" fill="none"/>`)}
  ${p(800, 90, "L'exploitation abusive", `<rect x="745" y="268" width="60" height="18" rx="5" fill="#A1887F" stroke="#5D4037" stroke-width="2"/><circle cx="840" cy="272" r="14" fill="#78909C"/><path d="M 828 262 l 24 20" stroke="#37474F" stroke-width="4"/>` + `<path d="M 760 296 v -20 M 785 296 v -20" stroke="#5D4037" stroke-width="3"/>`)}
  ${p(200, 320, "L'érosion des sols", `<path d="M 120 475 q 40 -10 75 0 Z" fill="#BF360C" opacity="0.6"/><path d="M 195 475 q 35 -35 70 0 Z" fill="#D84315" opacity="0.6"/><path d="M 265 475 q 30 -14 60 0 Z" fill="#BF360C" opacity="0.6"/><line x1="105" y1="475" x2="340" y2="475" stroke="#8D6E63" stroke-width="4"/>`)}
  ${p(500, 320, "Le changement climatique", `<circle cx="500" cy="415" r="34" fill="#4FC3F7" stroke="#0277BD" stroke-width="3"/><path d="M 482 405 q 10 -8 20 -2 q 8 5 14 0" stroke="#2E7D32" stroke-width="4" fill="none"/>${thermometre(565, 480, 60, 0.8)}`)}
  ${p(800, 320, "… et leurs conséquences", `<path d="M 730 475 h 140" stroke="#8D6E63" stroke-width="4"/><path d="M 745 475 v -26 M 865 475 v -26" stroke="#5D4037" stroke-width="4"/><text x="800" y="445" text-anchor="middle" font-size="16" fill="#C00000" font-weight="bold">forêts détruites</text>`)}
  ${caption("Sans la forêt, la terre s'érode, les animaux disparaissent et le climat se dérègle : il faut protéger la végétation.", 600)}
</svg>`;
}

// ── Panneau région naturelle (S48-S52) ──────────────────────────────────
const regIcon = { relief: mont, clim: null, veg: null, act: null };
function regionPanel(idKey, nom, zoneShapes, labels, lignes) {
  const cx = 300, cy = 330, h = 390;
  const [labX, labY] = labels || [70, 40];
  let panel = "";
  const rows = [
    ["Relief", lignes.relief],
    ["Climat", lignes.climat],
    ["Végétation", lignes.vegetation],
    ["Activités", lignes.activites],
  ];
  rows.forEach((r, i) => {
    const y = 195 + i * 82;
    panel += `<rect x="600" y="${y - 38}" width="360" height="70" rx="10" fill="#FDFBF3" stroke="#90A4AE" stroke-width="2"/>` +
      txt(618, y - 12, r[0], { size: 19, bold: true, fill: "#1E7B34", anchor: "start" }) +
      r[1].map((l, k) => txt(618, y + 12 + k * 20, l, { size: 16, fill: "#546E7A", anchor: "start" })).join("");
  });
  return svgHeader(1000, 570) + titreSvg("Région naturelle : " + nom) + `
  ${cadre(40, 90, 520, 420)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("zr" + idKey, cx, cy, h, zoneShapes)}
  ${txtL(cx, cy, h, labX, labY, nom, { size: 21, bold: true })}
  ${txtL(cx, cy, h, 49, 96, "★", { size: 16 })}
  ${panel}
  ${caption("Une région naturelle : une portion de l'île où le relief, le climat, la végétation et les activités se ressemblent.", 550)}
</svg>`;
}

function svgRegionHT() {
  return regionPanel("ht", "les Hautes Terres centrales",
    `<ellipse cx="48" cy="100" rx="27" ry="48" fill="#BCAAA4" opacity="0.85"/>`, [48, 118],
    { relief: ["plateaux et collines, montagnes", "(Ankaratra)"], climat: ["frais, saison sèche marquée"], vegetation: ["prairies, rizières dans les vallées"], activites: ["riziculture, élevage, artisanat"] });
}
function svgRegionEst() {
  return regionPanel("est", "la Côte Est",
    `<rect x="60" y="0" width="40" height="200" fill="#66BB6A" opacity="0.85"/>`, [80, 60],
    { relief: ["plaines côtières étroites"], climat: ["chaud et humide toute l'année"], vegetation: ["forêt tropicale humide"], activites: ["girofle, vanille, café, litchi,", "banane"] });
}
function svgRegionOuest() {
  return regionPanel("ouest", "la Côte Ouest",
    `<rect x="0" y="45" width="30" height="110" fill="#FFB74D" opacity="0.9"/>`, [16, 100],
    { relief: ["plaines et plateaux calcaires"], climat: ["sec, longue saison sèche"], vegetation: ["forêts sèches, baobabs, savanes"], activites: ["élevage, riziculture, pêche,", "tourisme"] });
}
function svgRegionSud() {
  return regionPanel("sud", "le Grand Sud",
    `<path d="M 10 148 L 100 160 L 100 200 L 10 190 Z" fill="#E57373" opacity="0.85"/>`, [50, 178],
    { relief: ["plaines et plateaux arides"], climat: ["très sec, semi-aride"], vegetation: ["buissons épineux, didiéracées"], activites: ["élevage de zébus, cultures", "résistantes, mines"] });
}
function svgRegionNord() {
  return regionPanel("nord", "le Nord",
    `<rect x="0" y="0" width="100" height="48" fill="#4DD0E1" opacity="0.85"/>`, [50, 30],
    { relief: ["montagnes (Tsaratanana),", "plaines côtières"], climat: ["variable selon l'altitude"], vegetation: ["forêts, mangroves"], activites: ["cacao, vanille, canne à sucre,", "tourisme (Nosy Be)"] });
}

// ── S53. La carte des régions naturelles ────────────────────────────────
function svgCarteRegions() {
  const cx = 350, cy = 330, h = 400;
  return svgHeader(1000, 580) + titreSvg("La carte des régions naturelles de Madagascar") + `
  ${cadre(40, 90, 600, 440)}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("z53", cx, cy, h, `
    <rect x="62" y="0" width="38" height="200" fill="#66BB6A"/>
    <rect x="0" y="45" width="28" height="110" fill="#FFB74D"/>
    <path d="M 8 150 L 100 162 L 100 200 L 8 192 Z" fill="#E57373"/>
    <rect x="0" y="0" width="100" height="48" fill="#4DD0E1"/>
    <ellipse cx="48" cy="100" rx="26" ry="46" fill="#BCAAA4"/>`)}
  ${txtL(cx, cy, h, 48, 26, "NORD", { size: 17, bold: true, fill: "#006064" })}
  ${txtL(cx, cy, h, 78, 78, "CÔTE EST", { size: 15, bold: true, fill: "#1B5E20", anchor: "start" })}
  ${txtL(cx, cy, h, 16, 96, "CÔTE OUEST", { size: 14, bold: true, fill: "#E65100", anchor: "end" })}
  ${txtL(cx, cy, h, 52, 176, "SUD", { size: 17, bold: true, fill: "#B71C1C" })}
  ${txtL(cx, cy, h, 48, 96, "HAUTES TERRES", { size: 12, bold: true, fill: "#4E342E" })}
  ${txtL(cx, cy, h, 49, 112, "centrales", { size: 11, fill: "#4E342E" })}
  ${txtL(cx, cy, h, 49, 92, "★", { size: 14 })}
  <rect x="680" y="120" width="290" height="360" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${txt(825, 155, "Légende", { size: 22, bold: true })}
  <rect x="705" y="185" width="24" height="16" fill="#4DD0E1"/>${txt(740, 198, "le Nord", { size: 19, anchor: "start" })}
  <rect x="705" y="225" width="24" height="16" fill="#66BB6A"/>${txt(740, 238, "la Côte Est", { size: 19, anchor: "start" })}
  <rect x="705" y="265" width="24" height="16" fill="#FFB74D"/>${txt(740, 278, "la Côte Ouest", { size: 19, anchor: "start" })}
  <rect x="705" y="305" width="24" height="16" fill="#E57373"/>${txt(740, 318, "le Sud", { size: 19, anchor: "start" })}
  <rect x="705" y="345" width="24" height="16" fill="#BCAAA4"/>${txt(740, 358, "les Hautes Terres", { size: 19, anchor: "start" })}${txt(740, 380, "centrales", { size: 19, anchor: "start" })}
  ${txt(825, 430, "★ la capitale", { size: 18, fill: "#C00000" })}
  ${caption("Cinq grandes régions naturelles : chacune a son relief, son climat, sa végétation et ses activités.", 560)}
</svg>`;
}

const SVG = {
  geo5_relief_formes: svgReliefFormes(),
  geo5_massifs: svgMassifs(),
  geo5_plaines_plateaux: svgPlainesPlateaux(),
  geo5_vallees: svgVallees(),
  geo5_utilite_relief: svgUtiliteRelief(),
  geo5_elements_climat: svgElementsClimat(),
  geo5_climat_tropical: svgClimatTropical(),
  geo5_zones_climatiques1: svgZonesClimat1(),
  geo5_zones_climatiques2: svgZonesClimat2(),
  geo5_quatre_saisons: svgQuatreSaisons(),
  geo5_deux_saisons: svgDeuxSaisons(),
  geo5_fleuves1: svgFleuves1(),
  geo5_fleuves2: svgFleuves2(),
  geo5_lacs_naturels: svgLacsNaturels(),
  geo5_lacs_artificiels: svgLacsArtificiels(),
  geo5_utilite_eau: svgUtiliteEau(),
  geo5_problemes_eau: svgProblemesEau(),
  geo5_vegetation1: svgVegetation1(),
  geo5_vegetation2: svgVegetation2(),
  geo5_utilite_vegetation: svgUtiliteVegetation(),
  geo5_problemes_vegetation: svgProblemesVegetation(),
  geo5_region_hautes_terres: svgRegionHT(),
  geo5_region_cote_est: svgRegionEst(),
  geo5_region_cote_ouest: svgRegionOuest(),
  geo5_region_sud: svgRegionSud(),
  geo5_region_nord: svgRegionNord(),
  geo5_carte_regions: svgCarteRegions(),
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
