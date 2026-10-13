// make-svg-u5.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T5 — UNITÉ 5
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
const DEFS_ARR = `<defs><marker id="arr" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#C00000"/></marker><marker id="arrB" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#0277BD"/></marker></defs>`;
const fleche = (x1, y1, x2, y2, m = "arr") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${m === "arr" ? "#C00000" : "#0277BD"}" stroke-width="4" marker-end="url(#${m})"/>`;

// Pictos réutilisables
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
const caseM = (x, y, s = 1, { murs = "#D7CCA8", toit = "#8D6E63" } = {}) =>
  `<g><rect x="${x - 26 * s}" y="${y - 26 * s}" width="${52 * s}" height="${26 * s}" fill="${murs}" stroke="#5D4037" stroke-width="2"/>` +
  `<path d="M ${x - 32 * s} ${y - 26 * s} L ${x} ${y - 46 * s} L ${x + 32 * s} ${y - 26 * s} Z" fill="${toit}" stroke="#5D4037" stroke-width="2"/>` +
  `<rect x="${x - 6 * s}" y="${y - 18 * s}" width="${12 * s}" height="${18 * s}" fill="#5D4037"/></g>`;
const immeuble = (x, y, w, h, { fill = "#B0BEC5" } = {}) => {
  let fen = "";
  const cols = Math.max(1, Math.floor(w / 22)), rows = Math.max(1, Math.floor(h / 26));
  for (let i = 0; i < cols; i++) for (let j = 0; j < rows; j++) {
    fen += `<rect x="${x + 8 + i * (w / cols)}" y="${y + 10 + j * (h / rows)}" width="10" height="12" fill="#ECEFF1"/>`;
  }
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="#546E7A" stroke-width="2.5"/>` + fen;
};
const camion = (x, y, s = 1, fill = "#EF6C00") =>
  `<g><rect x="${x - 34 * s}" y="${y - 22 * s}" width="${30 * s}" height="${22 * s}" fill="#78909C" stroke="#37474F" stroke-width="2"/>` +
  `<rect x="${x - 4 * s}" y="${y - 30 * s}" width="${30 * s}" height="${30 * s}" rx="4" fill="${fill}" stroke="#BF360C" stroke-width="2"/>` +
  `<circle cx="${x - 20 * s}" cy="${y}" r="${8 * s}" fill="#37474F"/><circle cx="${x + 14 * s}" cy="${y}" r="${8 * s}" fill="#37474F"/></g>`;
const voiture = (x, y, s = 1, fill = "#42A5F5") =>
  `<g><rect x="${x - 26 * s}" y="${y - 14 * s}" width="${52 * s}" height="${12 * s}" rx="5" fill="${fill}" stroke="#1565C0" stroke-width="2"/>` +
  `<path d="M ${x - 14 * s} ${y - 14 * s} L ${x - 6 * s} ${y - 24 * s} L ${x + 10 * s} ${y - 24 * s} L ${x + 16 * s} ${y - 14 * s} Z" fill="${fill}" stroke="#1565C0" stroke-width="2"/>` +
  `<circle cx="${x - 14 * s}" cy="${y - 1 * s}" r="${6 * s}" fill="#37474F"/><circle cx="${x + 14 * s}" cy="${y - 1 * s}" r="${6 * s}" fill="#37474F"/></g>`;
const riziere = (x, y, w, s = 1) => {
  let r = `<path d="M ${x} ${y} q ${w / 2} ${-14 * s} ${w} 0 Z" fill="#81C784" stroke="#558B2F" stroke-width="2"/>`;
  for (let i = 0; i < 5; i++) r += `<path d="M ${x + 8 + i * (w / 6)} ${y - 2} v ${-10 * s}" stroke="#2E7D32" stroke-width="${2 * s}"/>`;
  return r;
};
const plante = (x, y, s = 1) =>
  `<path d="M ${x} ${y} v ${-26 * s}" stroke="#558B2F" stroke-width="${3.5 * s}"/>` +
  `<path d="M ${x} ${y - 14 * s} q ${-16 * s} ${-4 * s} ${-20 * s} ${-20 * s} q ${18 * s} 0 ${20 * s} ${14 * s} Z" fill="#66BB6A"/>` +
  `<path d="M ${x} ${y - 18 * s} q ${16 * s} ${-4 * s} ${20 * s} ${-20 * s} q ${-18 * s} 0 ${-20 * s} ${14 * s} Z" fill="#66BB6A"/>`;
const eclair = (x, y, s = 1) =>
  `<path d="M ${x + 6 * s} ${y - 24 * s} L ${x - 6 * s} ${y} L ${x} ${y} L ${x - 6 * s} ${y + 24 * s} L ${x + 8 * s} ${y - 4 * s} L ${x + 2 * s} ${y - 4 * s} Z" fill="#F9A825" stroke="#F57F17" stroke-width="1.5"/>`;
const goutte = (x, y, s = 1) =>
  `<path d="M ${x} ${y - 20 * s} q ${12 * s} ${16 * s} ${12 * s} ${24 * s} a ${12 * s} ${12 * s} 0 0 1 ${-24 * s} 0 q 0 ${-8 * s} ${12 * s} ${-24 * s} Z" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>`;
const croix = (x, y, s = 1) =>
  `<rect x="${x - 18 * s}" y="${y - 18 * s}" width="${36 * s}" height="${36 * s}" rx="6" fill="#FFFFFF" stroke="#C62828" stroke-width="3"/>` +
  `<rect x="${x - 11 * s}" y="${y - 3 * s}" width="${22 * s}" height="${6 * s}" fill="#C62828"/>` +
  `<rect x="${x - 3 * s}" y="${y - 11 * s}" width="${6 * s}" height="${22 * s}" fill="#C62828"/>`;
const livre = (x, y, s = 1) =>
  `<g><rect x="${x - 20 * s}" y="${y - 14 * s}" width="${40 * s}" height="${28 * s}" rx="3" fill="#1565C0" stroke="#0D47A1" stroke-width="2"/>` +
  `<line x1="${x}" y1="${y - 14 * s}" x2="${x}" y2="${y + 14 * s}" stroke="#0D47A1" stroke-width="2"/>` +
  `<line x1="${x - 14 * s}" y1="${y - 6 * s}" x2="${x - 6 * s}" y2="${y - 6 * s}" stroke="#FFF" stroke-width="2"/>` +
  `<line x1="${x + 6 * s}" y1="${y - 6 * s}" x2="${x + 14 * s}" y2="${y - 6 * s}" stroke="#FFF" stroke-width="2"/></g>`;
const poubelle = (x, y, s = 1) =>
  `<g><rect x="${x - 14 * s}" y="${y - 18 * s}" width="${28 * s}" height="${26 * s}" rx="3" fill="#78909C" stroke="#37474F" stroke-width="2"/>` +
  `<rect x="${x - 18 * s}" y="${y - 24 * s}" width="${36 * s}" height="${6 * s}" rx="3" fill="#546E7A" stroke="#37474F" stroke-width="2"/>` +
  `<line x1="${x - 6 * s}" y1="${y - 12 * s}" x2="${x - 6 * s}" y2="${y + 4 * s}" stroke="#37474F" stroke-width="2"/>` +
  `<line x1="${x + 6 * s}" y1="${y - 12 * s}" x2="${x + 6 * s}" y2="${y + 4 * s}" stroke="#37474F" stroke-width="2"/></g>`;
const piece = (x, y, s = 1) =>
  `<circle cx="${x}" cy="${y}" r="${14 * s}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>` +
  txt(x, y + 6 * s, "Ar", { size: 15 * s, bold: true, fill: "#8D6E63" });
const personne = (x, y, s = 1, fill = "#546E7A") =>
  `<circle cx="${x}" cy="${y - 34 * s}" r="${8 * s}" fill="${fill}"/>` +
  `<path d="M ${x - 10 * s} ${y} L ${x - 8 * s} ${y - 22 * s} q ${8 * s} ${-6 * s} ${16 * s} 0 L ${x + 10 * s} ${y}" fill="${fill}"/>`;

// Cartouche « caractéristiques » : dessin à gauche, 4 points à droite
function ficheMilieu(titre, dessin, points, coul, fillCadre) {
  const lignes = points.map((p, i) =>
    `<rect x="600" y="${150 + i * 88}" width="360" height="74" rx="10" fill="#FDFBF3" stroke="#90A4AE" stroke-width="2"/>` +
    txt(618, 150 + i * 88 + 30, p[0], { size: 19, bold: true, fill: coul, anchor: "start" }) +
    txt(618, 150 + i * 88 + 56, p[1], { size: 17, fill: "#546E7A", anchor: "start" })).join("");
  return svgHeader(1000, 570) + titreSvg(titre) + `
  ${cadre(40, 90, 520, 420, fillCadre)}
  ${dessin}
  ${lignes}
  ${caption("Un milieu, un paysage, une vie : observe et compare.", 550)}
</svg>`;
}

// ── S62. La vie rurale : les caractéristiques ───────────────────────────
function svgVieRurale() {
  const d = `
  ${txt(300, 130, "Un village de la campagne malgache", { size: 21, bold: true, fill: "#1B5E20" })}
  ${caseM(150, 300, 1.2)}${caseM(260, 320, 0.9, { murs: "#C5E1A5" })}${caseM(210, 420, 1.1, { murs: "#D7CCA8", toit: "#6D4C41" })}
  ${arbre(400, 300, 1.1)}${arbre(460, 430, 0.9, "#2E7D32")}
  ${riziere(80, 470, 120, 1)}${riziere(320, 478, 130, 0.9)}
  ${zebu(390, 370, 0.9)}
  ${`<path d="M 70 500 q 230 -18 460 0" fill="none" stroke="#D7CCA8" stroke-width="10"/>` + txt(300, 528, "la piste du village", { size: 16, italic: true, fill: "#8D6E63" })}`;
  return ficheMilieu("La vie rurale : les caractéristiques", d, [
    ["Peu d'habitants", "villages et hameaux, maisons espacées"],
    ["La nature tout autour", "rizières, prairies, forêts, rivières"],
    ["Des travaux des champs", "agriculture, élevage, pêche, artisanat"],
    ["Un rythme paisible", "calme, entraide, vie de famille"],
  ], "#1B5E20", "#F1F8E9");
}

// ── S63. Les activités en milieu rural ──────────────────────────────────
function svgActRurales() {
  const col = (x, titre, coul, dessin, items) => cadre(x - 160, 90, 320, 420, "#FDFBF3") + dessin +
    txt(x, 130, titre, { size: 21, bold: true, fill: coul }) +
    items.map((it, i) => txt(x, 400 + i * 30, it, { size: 18, fill: "#546E7A" })).join("");
  return svgHeader(1000, 580) + titreSvg("Les activités en milieu rural : les trois secteurs") + `
  ${col(190, "1. Le secteur primaire", "#2E7D32", plante(150, 280, 1.6) + zebu(240, 300, 1) + `<path d="M 110 350 q 30 -12 65 0" fill="none" stroke="#4FC3F7" stroke-width="6"/>`, ["produire les matières", "premières :", "agriculture, élevage,", "pêche, forêt"])}
  ${col(500, "2. Le secteur secondaire", "#E65100", `<rect x="440" y="310" width="34" height="30" fill="#EF6C00" stroke="#BF360C" stroke-width="2"/><rect x="482" y="310" width="34" height="30" fill="#FFB74D" stroke="#BF360C" stroke-width="2"/>` + `<rect x="460" y="230" width="60" height="50" rx="6" fill="#BCAAA4" stroke="#5D4037" stroke-width="2"/>` + txt(500, 355, "atelier de tissage", { size: 15, italic: true, fill: "#8D6E63" }), ["transformer les matières", "premières :", "artisanat, moulins à riz,", "briques, huile, savon"])}
  ${col(810, "3. Le secteur tertiaire", "#1565C0", livre(770, 280, 1.3) + `<rect x="810" y="250" width="70" height="50" rx="6" fill="#FFF3E0" stroke="#8D6E63" stroke-width="2"/>` + txt(845, 280, "bureau", { size: 15, bold: true, fill: "#8D6E63" }) + croix(860, 330, 0.55), ["rendre des services :", "instituteur, infirmier,", "marchands, transport,", "coiffeurs, agents"])}
  ${caption("Produire, transformer, servir : les trois familles de métiers se trouvent aussi à la campagne.", 555)}
</svg>`;
}

// ── S64. La vie urbaine : les caractéristiques ──────────────────────────
function svgVieUrbaine() {
  const d = `
  ${txt(300, 130, "Une grande ville malgache", { size: 21, bold: true, fill: "#0D47A1" })}
  ${immeuble(90, 220, 90, 260)}${immeuble(200, 180, 110, 300, { fill: "#90A4AE" })}${immeuble(330, 240, 80, 220)}${immeuble(430, 200, 70, 190, { fill: "#CFD8DC" })}
  ${`<path d="M 60 490 L 540 490" stroke="#546E7A" stroke-width="14"/>` + `<path d="M 90 490 h 30 M 150 490 h 30 M 210 490 h 30 M 270 490 h 30 M 330 490 h 30 M 390 490 h 30 M 450 490 h 30" stroke="#FFF" stroke-width="4"/>`}
  ${voiture(160, 480, 0.8)}${voiture(300, 480, 0.7, "#EF5350")}${voiture(430, 480, 0.8, "#66BB6A")}
  ${personne(120, 480, 0.7)}${personne(360, 480, 0.7, "#8D6E63")}`;
  return ficheMilieu("La vie urbaine : les caractéristiques", d, [
    ["Beaucoup d'habitants", "forte densité, quartiers animés"],
    ["Des immeubles et des rues", "constructions hautes, voirie, lumière"],
    ["Des services nombreux", "écoles, hôpitaux, banques, marchés"],
    ["Un rythme pressé", "circulation, horaires, travail en ville"],
  ], "#0D47A1", "#E3F2FD");
}

// ── S65. Les activités en milieu urbain ─────────────────────────────────
function svgActUrbaines() {
  const col = (x, titre, coul, dessin, items) => cadre(x - 160, 90, 320, 420, "#FDFBF3") + dessin +
    txt(x, 130, titre, { size: 21, bold: true, fill: coul }) +
    items.map((it, i) => txt(x, 400 + i * 30, it, { size: 18, fill: "#546E7A" })).join("");
  return svgHeader(1000, 580) + titreSvg("Les activités en milieu urbain : les trois secteurs") + `
  ${col(190, "1. Le secteur primaire", "#2E7D32", `<path d="M 130 300 q 30 -12 65 0 Z" fill="#81C784" stroke="#558B2F" stroke-width="2"/>` + `<path d="M 150 296 v -10 M 165 297 v -10 M 180 298 v -10" stroke="#2E7D32" stroke-width="2"/>` + txt(190, 330, "maraîchage des villes", { size: 15, italic: true, fill: "#8D6E63" }), ["faible en ville :", "maraîchers, éleveurs", "de volailles,", "planteurs en périphérie"])}
  ${col(500, "2. Le secteur secondaire", "#E65100", `<rect x="420" y="200" width="160" height="120" fill="#CFD8DC" stroke="#546E7A" stroke-width="3"/><rect x="440" y="220" width="30" height="22" fill="#EF6C00"/><rect x="480" y="220" width="30" height="22" fill="#EF6C00"/>` + `<rect x="455" y="250" width="90" height="50" fill="#FFB74D" stroke="#BF360C" stroke-width="2"/>` + txt(500, 345, "usine et entrepôt", { size: 15, italic: true, fill: "#8D6E63" }), ["usines, ateliers,", "chantiers de BTP,", "brasseries, textile,", "décorticage du riz"])}
  ${col(810, "3. Le secteur tertiaire", "#1565C0", `<rect x="730" y="200" width="60" height="110" fill="#90CAF9" stroke="#1565C0" stroke-width="2.5"/>` + livre(820, 270, 1.2) + croix(880, 320, 0.6) + txt(760, 330, "banque", { size: 14, bold: true, fill: "#1565C0" }), ["le grand secteur de la ville :", "boutiques, banques,", "transport, restauration,", "administration, écoles"])}
  ${caption("En ville, les services dominent : le tertiaire est le premier pourvoyeur d'emplois.", 555)}
</svg>`;
}

// ── S66. La ville et la campagne ont besoin l'une de l'autre ────────────
function svgInterdependance() {
  return svgHeader(1000, 560) + DEFS_ARR + titreSvg("La ville et la campagne ont besoin l'une de l'autre") + `
  ${cadre(60, 100, 340, 300, "#E3F2FD")}
  ${immeuble(100, 140, 60, 130)}${immeuble(175, 125, 75, 145, { fill: "#90A4AE" })}${immeuble(265, 150, 55, 110)}
  ${txt(230, 310, "LA VILLE", { size: 26, bold: true, fill: "#0D47A1" })}
  ${txt(230, 345, "produits fabriqués, services,", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(230, 370, "écoles, hôpitaux, bureaux", { size: 18, italic: true, fill: "#546E7A" })}
  ${cadre(600, 100, 340, 300, "#F1F8E9")}
  ${caseM(680, 250, 1.1)}${arbre(800, 240, 1.1)}${riziere(640, 340, 110, 1)}${zebu(830, 340, 0.9)}
  ${txt(770, 310, "LA CAMPAGNE", { size: 26, bold: true, fill: "#1B5E20" })}
  ${txt(770, 345, "riz, viande, fruits, légumes,", { size: 18, italic: true, fill: "#546E7A" })}
  ${txt(770, 370, "matières premières, main-d'œuvre", { size: 18, italic: true, fill: "#546E7A" })}
  ${fleche(420, 200, 580, 200, "arr")}
  ${txt(500, 185, "nourrit la ville", { size: 19, bold: true, fill: "#C00000" })}
  ${fleche(580, 300, 420, 300, "arrB")}
  ${txt(500, 335, "équipe la campagne", { size: 19, bold: true, fill: "#0277BD" })}
  ${txt(500, 470, "Sans la campagne, la ville a faim ;", { size: 22, bold: true })}
  ${txt(500, 500, "sans la ville, la campagne manque de tout.", { size: 22, bold: true })}
  ${caption("Deux mondes différents, mais unis comme les deux mains d'un même corps.", 545)}
</svg>`;
}

// ── S67. Les échanges entre la ville et la campagne ─────────────────────
function svgEchanges() {
  return svgHeader(1000, 600) + DEFS_ARR + titreSvg("Les échanges entre la ville et la campagne") + `
  ${cadre(40, 90, 920, 330)}
  ${txt(230, 130, "LA CAMPAGNE", { size: 22, bold: true, fill: "#1B5E20" })}
  ${caseM(160, 260, 1)}${riziere(280, 330, 110, 1)}
  ${txt(770, 130, "LA VILLE", { size: 22, bold: true, fill: "#0D47A1" })}
  ${immeuble(700, 150, 60, 120)}${immeuble(775, 165, 70, 105, { fill: "#90A4AE" })}
  ${camion(500, 220, 1.15)}
  ${txt(500, 158, "les camions de vivres", { size: 18, bold: true, fill: "#C00000" })}
  ${fleche(430, 220, 300, 220, "arr")}
  ${txt(500, 260, "légumes, riz, viande, bois", { size: 17, italic: true, fill: "#546E7A" })}
  ${camion(500, 360, 1.05, "#42A5F5")}
  ${txt(500, 300, "les camions de marchandises", { size: 18, bold: true, fill: "#0277BD" })}
  ${fleche(570, 360, 700, 360, "arrB")}
  ${txt(500, 400, "savon, tissus, outils, carburant", { size: 17, italic: true, fill: "#546E7A" })}
  ${`<rect x="330" y="440" width="340" height="70" rx="14" fill="#FFF8E1" stroke="#F9A825" stroke-width="3"/>` +
    txt(500, 470, "et les personnes circulent :", { size: 20, bold: true, fill: "#E65100" }) +
    txt(500, 496, "paysans aux marchés, écoliers en internat, familles en visite, fonctionnaires", { size: 16, italic: true, fill: "#546E7A" })}
  ${caption("Produits, services, personnes : les échanges vont dans les deux sens, chaque jour.", 580)}
</svg>`;
}

// ── S68. Les problèmes de la vie rurale ────────────────────────────────
function svgProblemesRuraux() {
  const p = (x, y, dessin, t1, t2) => cadre(x - 175, y, 350, 210, "#FFEBEE") + dessin +
    txt(x, y + 178, t1, { size: 20, bold: true, fill: "#C00000" }) +
    txt(x, y + 200 - 8, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 660) + titreSvg("Les problèmes de la vie rurale") + `
  ${p(230, 100, `<path d="M 100 290 q 40 -20 80 -6 q 40 14 80 -4 q 40 -16 80 4" fill="none" stroke="#D7CCA8" stroke-width="12"/>` + `<path d="M 200 278 l 30 18 M 220 276 l -12 22" stroke="#8D6E63" stroke-width="4"/>` + txt(230, 240, "la piste coupée", { size: 15, bold: true, fill: "#8D6E63" }), "L'isolement", "pistes boueuses, villages enclavés")}
  ${p(630, 100, caseM(600, 280, 1.1) + `<line x1="640" y1="215" x2="668" y2="187" stroke="#C00000" stroke-width="5"/><line x1="668" y1="215" x2="640" y2="187" stroke="#C00000" stroke-width="5"/>`, "Pas d'électricité", "ni de robinet d'eau courante")}
  ${p(230, 345, `<path d="M 160 530 q 35 -16 75 0" fill="none" stroke="#4FC3F7" stroke-width="6"/>` + livre(230, 500, 1.2) + txt(230, 445, "école et CSB loin", { size: 15, bold: true, fill: "#8D6E63" }), "Équipements rares", "écoles et dispensaires éloignés")}
  ${p(630, 345, personne(600, 530, 1) + personne(650, 530, 1, "#8D6E63") + `<path d="M 665 470 q 30 -24 58 -6" fill="none" stroke="#C00000" stroke-width="4" marker-end="url(#arr)"/>` + txt(630, 445, "les jeunes partent", { size: 15, bold: true, fill: "#8D6E63" }), "Peu d'emplois", "les jeunes quittent le village")}
  ${caption("Eau, électricité, écoles, routes : il manque beaucoup aux campagnes — c'est l'exode rural.", 640)}
</svg>`;
}

// ── S69. Les problèmes de la vie urbaine ────────────────────────────────
function svgProblemesUrbains() {
  const p = (x, y, dessin, t1, t2) => cadre(x - 175, y, 350, 210, "#FFEBEE") + dessin +
    txt(x, y + 178, t1, { size: 20, bold: true, fill: "#C00000" }) +
    txt(x, y + 200 - 8, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 660) + titreSvg("Les problèmes de la vie urbaine") + `
  ${p(230, 100, personne(180, 290, 0.8) + personne(215, 290, 0.8, "#8D6E63") + personne(250, 290, 0.8) + personne(285, 290, 0.8, "#8D6E63") + personne(320, 290, 0.8) + personne(200, 240, 0.55, "#78909C") + personne(250, 240, 0.55, "#78909C") + personne(300, 240, 0.55, "#78909C"), "La surpopulation", "trop de monde dans la ville")}
  ${p(630, 100, `<rect x="560" y="240" width="46" height="52" fill="#D7CCA8" stroke="#5D4037" stroke-width="2"/><rect x="606" y="240" width="46" height="52" fill="#D7CCA8" stroke="#5D4037" stroke-width="2"/><rect x="652" y="240" width="46" height="52" fill="#D7CCA8" stroke="#5D4037" stroke-width="2"/><rect x="583" y="185" width="46" height="52" fill="#C5E1A5" stroke="#5D4037" stroke-width="2"/><rect x="629" y="185" width="46" height="52" fill="#C5E1A5" stroke="#5D4037" stroke-width="2"/>`, "Logements serrés", "quartiers entassés, taudis")}
  ${p(230, 345, voiture(160, 545, 0.75) + voiture(230, 545, 0.75, "#EF5350") + voiture(300, 545, 0.75, "#66BB6A") + `<path d="M 120 555 h 230" stroke="#546E7A" stroke-width="8"/>` + txt(230, 480, "embouteillages", { size: 15, bold: true, fill: "#8D6E63" }), "Transports saturés", "bouchons, bus bondés")}
  ${p(630, 345, poubelle(590, 530, 1.1) + poubelle(650, 530, 1.1) + `<path d="M 555 490 q 30 -20 60 0 M 570 470 q 20 -14 40 0" fill="none" stroke="#9E9E9E" stroke-width="4"/>` + `<path d="M 560 555 h 120" stroke="#8D6E63" stroke-width="10"/>`, "Salubrité", "déchets, canaux sales, maladies")}
  ${caption("La ville attire, mais loger, circuler et rester en bonne santé y devient difficile.", 640)}
</svg>`;
}

// ── S70. Les atouts du milieu rural et du milieu urbain ─────────────────
function svgAtouts() {
  const ligne = (x, y, dessin, t) =>
    `<g>${dessin}</g>` + txt(x + 30, y + 5, t, { size: 19, bold: true, anchor: "start", fill: "#263238" });
  return svgHeader(1000, 620) + titreSvg("Les atouts du milieu rural et du milieu urbain") + `
  ${cadre(40, 90, 460, 460, "#F1F8E9")}
  ${txt(270, 130, "Les atouts de la campagne", { size: 22, bold: true, fill: "#1B5E20" })}
  ${ligne(100, 180, riziere(80, 190, 70, 0.8), "terre fertile et eau")}
  ${ligne(100, 240, arbre(105, 250, 0.75), "forêts et ressources")}
  ${ligne(100, 300, zebu(115, 310, 0.55), "élevage et pêche")}
  ${ligne(100, 360, `<path d="M 100 368 q 15 -18 30 0 Z" fill="#FFF9C4" stroke="#F9A825" stroke-width="2"/>`, "air pur et calme")}
  ${ligne(100, 420, caseM(108, 428, 0.55), "vivres moins chers")}
  ${cadre(520, 90, 460, 460, "#E3F2FD")}
  ${txt(750, 130, "Les atouts de la ville", { size: 22, bold: true, fill: "#0D47A1" })}
  ${ligne(580, 180, livre(590, 190, 0.8), "écoles et lycées nombreux")}
  ${ligne(580, 240, croix(592, 228, 0.5), "hôpitaux et soins")}
  ${ligne(580, 300, `<rect x="578" y="292" width="26" height="20" rx="3" fill="#FFCC80" stroke="#8D6E63" stroke-width="2"/>`, "boutiques et marchés")}
  ${ligne(580, 360, piece(590, 352, 0.8), "emplois et salaires")}
  ${ligne(580, 420, eclair(592, 412, 0.8), "eau, électricité, routes")}
  ${caption("La campagne nourrit et repose ; la ville équipe, soigne et instruit.", 600)}
</svg>`;
}

// ── S71. Améliorer la vie en milieu rural ───────────────────────────────
function svgAmeliorerRural() {
  const c = (x, y, dessin, t1, t2) => cadre(x - 145, y, 290, 190, "#E8F5E9") + dessin +
    txt(x, y + 156, t1, { size: 20, bold: true, fill: "#1B5E20" }) +
    txt(x, y + 178, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 640) + titreSvg("Améliorer la vie en milieu rural") + `
  ${c(190, 90, `<path d="M 105 250 q 40 -16 85 0" fill="none" stroke="#546E7A" stroke-width="10"/>` + `<path d="M 125 250 q 25 -10 50 0" fill="none" stroke="#FFD54F" stroke-width="3" stroke-dasharray="8 6"/>` + camion(250, 258, 0.6), "Pistes et routes", "désenclaver les villages")}
  ${c(500, 90, goutte(470, 240, 1.3) + eclair(540, 235, 1), "Eau et électricité", "robinets, forages, panneaux solaires")}
  ${c(810, 90, livre(780, 250, 1.2) + croix(850, 240, 0.55), "Écoles et santé", "écoles proches, CSB équipés")}
  ${c(190, 310, `<rect x="130" y="460" width="120" height="26" rx="6" fill="#FFF3E0" stroke="#8D6E63" stroke-width="2"/>` + `<path d="M 150 460 L 190 430 L 230 460 Z" fill="#C00000"/>` + txt(190, 480, "prix justes", { size: 13, bold: true, fill: "#5D4037" }), "Appuyer les paysans", "prix justes, crédits, formation")}
  ${c(500, 310, `<rect x="440" y="430" width="52" height="36" rx="6" fill="#90CAF9" stroke="#1565C0" stroke-width="2"/>` + `<path d="M 492 448 q 26 -16 48 -2" fill="none" stroke="#1565C0" stroke-width="3" marker-end="url(#arrB)"/>` + txt(520, 480, "relier au marché", { size: 15, bold: true, fill: "#1565C0" }), "Coopératives", "vendre ensemble, mieux gagner")}
  ${c(810, 310, `<circle cx="780" cy="450" r="20" fill="#FFFDE7" stroke="#F9A825" stroke-width="3"/><path d="M 780 438 a 12 12 0 0 1 0 24" fill="none" stroke="#F9A825" stroke-width="3"/>` + txt(840, 445, "radio,", { size: 15, bold: true, fill: "#8D6E63" }) + txt(840, 465, "téléphone", { size: 15, bold: true, fill: "#8D6E63" }), "Communiquer", "réseaux et informations utiles")}
  ${caption("Routes, eau, écoles, prix justes, coopératives, réseaux : la campagne peut revivre.", 620)}
</svg>`;
}

// ── S72. Améliorer la vie en milieu urbain ──────────────────────────────
function svgAmeliorerUrbain() {
  const c = (x, y, dessin, t1, t2) => cadre(x - 145, y, 290, 190, "#E3F2FD") + dessin +
    txt(x, y + 156, t1, { size: 20, bold: true, fill: "#0D47A1" }) +
    txt(x, y + 178, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 640) + titreSvg("Améliorer la vie en milieu urbain") + `
  ${c(190, 90, `<rect x="120" y="210" width="140" height="60" fill="#BCAAA4" stroke="#5D4037" stroke-width="2.5"/>` + `<rect x="130" y="220" width="14" height="12" fill="#FFF"/><rect x="152" y="220" width="14" height="12" fill="#FFF"/><rect x="174" y="220" width="14" height="12" fill="#FFF"/><rect x="196" y="220" width="14" height="12" fill="#FFF"/><rect x="218" y="220" width="14" height="12" fill="#FFF"/><rect x="240" y="220" width="14" height="12" fill="#FFF"/>` + txt(190, 292, "logement digne", { size: 15, bold: true, fill: "#5D4037" }), "Bâtir des logements", "quartiers planifiés et salubres")}
  ${c(500, 90, `<rect x="430" y="230" width="140" height="34" rx="10" fill="#42A5F5" stroke="#1565C0" stroke-width="2.5"/>` + `<circle cx="455" cy="264" r="9" fill="#37474F"/><circle cx="505" cy="264" r="9" fill="#37474F"/><circle cx="545" cy="264" r="9" fill="#37474F"/>` + `<rect x="470" y="200" width="60" height="30" rx="8" fill="#90CAF9" stroke="#1565C0" stroke-width="2"/>` + txt(500, 292, "bus et taxis-be", { size: 15, bold: true, fill: "#1565C0" }), "Transports en commun", "désengorger les rues")}
  ${c(810, 90, poubelle(780, 250, 1.2) + `<path d="M 830 210 q 20 -14 40 0" fill="none" stroke="#66BB6A" stroke-width="4"/>` + `<rect x="840" y="230" width="18" height="14" rx="3" fill="#A5D6A7"/>`, "Salubrité", "ramasser et trier les déchets")}
  ${c(190, 310, `<path d="M 120 480 q 35 -20 70 0 Z" fill="#81C784" stroke="#558B2F" stroke-width="2"/>` + arbre(230, 480, 0.9) + txt(190, 500, "espaces verts", { size: 15, bold: true, fill: "#558B2F" }), "Des espaces verts", "parcs, arbres, air plus pur")}
  ${c(500, 310, `<rect x="435" y="440" width="130" height="34" rx="6" fill="#FFF8E1" stroke="#F9A825" stroke-width="2.5"/>` + txt(500, 462, "permis de bâtir", { size: 15, bold: true, fill: "#E65100" }), "Planifier la ville", "respecter le plan d'urbanisme")}
  ${c(810, 310, personne(780, 490, 0.9) + personne(830, 490, 0.9, "#8D6E63") + `<path d="M 770 440 q 40 -18 75 0" fill="none" stroke="#C00000" stroke-width="4" marker-end="url(#arr)"/>`, "Former et employer", "métiers, ateliers, emplois jeunes")}
  ${caption("Loger, circuler, nettoyer, respirer, planifier, employer : la ville se répare aussi.", 620)}
</svg>`;
}

// ── S73. Protéger l'environnement rural et urbain ───────────────────────
function svgProtegerEnv() {
  const c = (x, y, dessin, t1, t2) => cadre(x - 145, y, 290, 190, "#E8F5E9") + dessin +
    txt(x, y + 156, t1, { size: 20, bold: true, fill: "#1B5E20" }) +
    txt(x, y + 178, t2, { size: 16, italic: true, fill: "#546E7A" });
  return svgHeader(1000, 640) + titreSvg("Protéger l'environnement rural et urbain") + `
  ${txt(500, 85, "À la campagne", { size: 22, bold: true, fill: "#1B5E20" })}
  ${c(190, 105, arbre(160, 260, 1.1) + arbre(220, 262, 0.8, "#2E7D32") + `<path d="M 130 272 v 14 M 250 274 v 12" stroke="#558B2F" stroke-width="3"/>`, "Reboiser les collines", "et interdire les feux")}
  ${c(500, 105, riziere(410, 265, 150, 1.1) + `<path d="M 445 268 v -12 M 500 270 v -12 M 555 268 v -12" stroke="#2E7D32" stroke-width="3"/>`, "Entretenir les rizières", "curer les canaux, semer droit")}
  ${c(810, 105, `<path d="M 760 270 q 25 -30 55 -6 q 20 18 -5 26 q -30 8 -50 -20 Z" fill="#4FC3F7" opacity="0.7"/>` + `<path d="M 775 258 q 10 -8 22 0 M 782 268 q 8 -6 16 0" stroke="#0277BD" stroke-width="3" fill="none"/>`, "Protéger les rivières", "pas de lavage des bidons")}
  ${txt(500, 330, "En ville", { size: 22, bold: true, fill: "#0D47A1" })}
  ${c(190, 350, poubelle(160, 500, 1) + `<rect x="200" y="478" width="22" height="22" rx="3" fill="#66BB6A"/><rect x="226" y="478" width="22" height="22" rx="3" fill="#FFCC80"/>` + txt(190, 520, "trier", { size: 15, bold: true, fill: "#546E7A" }), "Trier les déchets", "recycler ce qui peut servir")}
  ${c(500, 350, arbre(470, 505, 1) + arbre(530, 505, 0.8, "#2E7D32") + `<path d="M 440 515 h 120" stroke="#558B2F" stroke-width="4"/>`, "Planter des arbres", "des rues ombragées et propres")}
  ${c(810, 350, voiture(770, 500, 0.8, "#66BB6A") + `<path d="M 830 470 q 20 -12 40 0" fill="none" stroke="#90CAF9" stroke-width="4"/>` + txt(800, 440, "moins de fumée", { size: 15, bold: true, fill: "#546E7A" }), "Moins polluer", "transports propres, moins de fumées")}
  ${caption("Campagne ou ville, le même devoir : garder l'air, l'eau et la terre propres pour demain.", 620)}
</svg>`;
}

// ── S74. Comparer la vie rurale et la vie urbaine ───────────────────────
function svgComparer() {
  const row = (y, crit, rural, urbain) =>
    `<rect x="60" y="${y}" width="880" height="62" rx="8" fill="${(y / 62) % 2 < 1 ? "#FAFAFA" : "#FDFBF3"}" stroke="#B0BEC5" stroke-width="1.5"/>` +
    txt(78, y + 38, crit, { size: 19, bold: true, fill: "#37474F", anchor: "start" }) +
    txt(360, y + 38, rural, { size: 18, fill: "#1B5E20", anchor: "start" }) +
    txt(680, y + 38, urbain, { size: 18, fill: "#0D47A1", anchor: "start" });
  return svgHeader(1000, 640) + titreSvg("Comparer la vie rurale et la vie urbaine") + `
  <rect x="60" y="100" width="880" height="56" rx="8" fill="#37474F"/>
  ${txt(78, 135, "Critère", { size: 20, bold: true, fill: "#FFF", anchor: "start" })}
  ${txt(360, 135, "À LA CAMPAGNE", { size: 20, bold: true, fill: "#A5D6A7", anchor: "start" })}
  ${txt(680, 135, "À LA VILLE", { size: 20, bold: true, fill: "#90CAF9", anchor: "start" })}
  ${row(160, "Le paysage", "rizières, prairies, forêts", "immeubles, rues, marchés")}
  ${row(224, "Les habitants", "peu nombreux, dispersés", "très nombreux, serrés")}
  ${row(288, "Les logements", "cases et maisons espacées", "immeubles et quartiers denses")}
  ${row(352, "Les activités", "champs, élevage, pêche, artisanat", "usines, boutiques, bureaux, services")}
  ${row(416, "Les services", "rares et parfois loin", "nombreux et proches")}
  ${row(480, "La vie quotidienne", "au rythme des saisons, calme", "au rythme des horaires, pressée")}
  ${txt(500, 590, "Deux milieux différents — mais complémentaires : la ville et la campagne s'échangent tout.", { size: 22, bold: true })}
  ${caption("Le tableau de synthèse de l'année : sers-t'en pour réviser toute l'unité 5.", 625)}
</svg>`;
}

const SVG = {
  geo5_vie_rurale: svgVieRurale(),
  geo5_act_rurales: svgActRurales(),
  geo5_vie_urbaine: svgVieUrbaine(),
  geo5_act_urbaines: svgActUrbaines(),
  geo5_interdependance: svgInterdependance(),
  geo5_echanges_ville_campagne: svgEchanges(),
  geo5_problemes_ruraux: svgProblemesRuraux(),
  geo5_problemes_urbains: svgProblemesUrbains(),
  geo5_atouts_milieux: svgAtouts(),
  geo5_ameliorer_rural: svgAmeliorerRural(),
  geo5_ameliorer_urbain: svgAmeliorerUrbain(),
  geo5_proteger_environnement: svgProtegerEnv(),
  geo5_comparer_vies: svgComparer(),
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
