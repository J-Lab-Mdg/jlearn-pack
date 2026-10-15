// make-svg-u3.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 3
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
const fleche = (x1, y1, x2, y2, c = "#546E7A", sw = 5) =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" marker-end="url(#af)"/>`;

const defsArrow = `<defs><marker id="af" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#546E7A"/></marker>
<marker id="afR" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#C00000"/></marker>
<marker id="afV" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1E7B34"/></marker>
<marker id="afB" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#01579B"/></marker></defs>`;

// Silhouette simplifiée de Madagascar (boîte locale 100 × 200, nord en haut)
const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const madaT = (cx, cy, h) => `translate(${cx} ${cy}) scale(${h / 200}) translate(-50 -100)`;
const mada = (cx, cy, h, { fill = "#A5D6A7", stroke = "#2E7D32", sw = 3 } = {}) =>
  `<g transform="${madaT(cx, cy, h)}"><path d="${MADA}" fill="${fill}" stroke="${stroke}" stroke-width="${sw / (h / 200)}" stroke-linejoin="round"/></g>`;
const L = (cx, cy, h, lx, ly) => [cx + (lx - 50) * h / 200, cy + (ly - 100) * h / 200];
const txtL = (cx, cy, h, lx, ly, t, o = {}) => { const [x, y] = L(cx, cy, h, lx, ly); return txt(x, y, t, o); };

// pictos réutilisables
const arbre = (x, y, s = 1, f = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="8" width="8" height="20" fill="#6D4C41"/>
    <circle cx="0" cy="0" r="18" fill="${f}"/><circle cx="-13" cy="8" r="13" fill="${f}"/><circle cx="13" cy="8" r="13" fill="${f}"/>
  </g>`;
const maison = (x, y, s = 1, f = "#FFE0B2") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-16" y="-6" width="32" height="22" fill="${f}" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -20 -6 L 0 -22 L 20 -6 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/>
  </g>`;
const immeuble = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-34" y="-8" width="22" height="36" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/>
    <rect x="-8" y="-30" width="18" height="58" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/>
    <rect x="14" y="2" width="20" height="26" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/>
    ${[-24, -16].map((yy) => [-27, -19, -11].map((xx) => `<rect x="${xx + 26}" y="${yy + 20}" width="6" height="6" fill="#FFFFFF"/>`).join("")).join("")}
    ${[-22, -12, -2].map((yy) => [-4, 4].map((xx) => `<rect x="${xx + 0}" y="${yy + 26}" width="6" height="6" fill="#FFFFFF"/>`).join("")).join("")}
  </g>`;
const bonhomme = (x, y, s = 1, f = "#37474F") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <circle cx="0" cy="-16" r="6" fill="${f}"/>
    <line x1="0" y1="-10" x2="0" y2="6" stroke="${f}" stroke-width="5" stroke-linecap="round"/>
    <line x1="0" y1="6" x2="-6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/>
    <line x1="0" y1="6" x2="6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/>
    <line x1="0" y1="-6" x2="-8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/>
    <line x1="0" y1="-6" x2="8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/>
  </g>`;
const soleil = (cx, cy, r) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) {
    const a = i * Math.PI / 4;
    s += `<line x1="${cx + (r + 6) * Math.cos(a)}" y1="${cy + (r + 6) * Math.sin(a)}" x2="${cx + (r + 16) * Math.cos(a)}" y2="${cy + (r + 16) * Math.sin(a)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
  }
  return s;
};
const lune = (cx, cy, r) => `
  <path d="M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r - r * 0.55} ${r} 0 1 1 ${cx} ${cy - r} Z" fill="#FFE082" stroke="#F9A825" stroke-width="3"/>`;

// ── S27. La répartition de la population malgache ──────────────────────
function svgRepartition() {
  const cx = 300, cy = 350, h = 440;
  const clip = `<clipPath id="madaclip"><path d="${MADA}" transform="${madaT(cx, cy, h)}"/></clipPath>`;
  const blob = (lx, ly, rx, ry, f = "#FBC02D") => {
    const [x, y] = L(cx, cy, h, lx, ly);
    return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}"/>`;
  };
  return `${svgHeader(1000, 620)}
  ${defsArrow}${titreSvg("La répartition de la population malgache")}
  <defs>${clip}</defs>
  ${cadre(40, 90, 520, 480, "#FDFBF3")}
  ${mada(cx, cy, h, { fill: "#FFF9C4", stroke: "#C0A16B", sw: 3 })}
  <g clip-path="url(#madaclip)">
    ${blob(52, 90, 46, 78)}
    ${blob(73, 85, 18, 95)}
    ${blob(56, 30, 36, 44)}
    ${blob(63, 130, 16, 26)}
  </g>
  ${txtL(cx, cy, h, 52, 62, "Hautes Terres", { size: 16, bold: true, fill: "#795548" })}
  ${txtL(cx, cy, h, 87, 60, "Côte est", { size: 16, bold: true, fill: "#795548", anchor: "start" })}
  ${txtL(cx, cy, h, 68, 18, "Nord", { size: 16, bold: true, fill: "#795548", anchor: "start" })}
  ${txtL(cx, cy, h, 22, 130, "Ouest et Sud :", { size: 15, fill: "#795548", anchor: "end" })}
  ${txtL(cx, cy, h, 22, 140, "peu peuplés", { size: 15, fill: "#795548", anchor: "end" })}
  <rect x="600" y="130" width="360" height="150" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${txt(780, 165, "LÉGENDE", { size: 20, bold: true })}
  <rect x="625" y="190" width="30" height="24" fill="#FBC02D" stroke="#C0A16B" stroke-width="2"/>
  ${txt(790, 208, "zones fortement peuplées", { size: 18, anchor: "start" })}
  <rect x="625" y="230" width="30" height="24" fill="#FFF9C4" stroke="#C0A16B" stroke-width="2"/>
  ${txt(790, 248, "zones peu peuplées", { size: 18, anchor: "start" })}
  <rect x="600" y="310" width="360" height="230" rx="14" fill="#E8F5E9" stroke="#90A4AE" stroke-width="3"/>
  ${txt(780, 345, "OÙ SONT LES HABITANTS ?", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(780, 390, "Environ 30 millions de Malgaches,", { size: 18 })}
  ${txt(780, 418, "surtout sur les Hautes Terres", { size: 18, bold: true })}
  ${txt(780, 446, "centrales (Antananarivo, Antsirabe),", { size: 17 })}
  ${txt(780, 474, "sur la côte est (Toamasina)", { size: 17 })}
  ${txt(780, 502, "et dans le nord (Antsiranana).", { size: 17 })}
  ${caption("La répartition de la population malgache est très inégale.", 600)}
</svg>`;
}

// ── S28. La densité et les zones peuplées ───────────────────────────────
function svgDensite() {
  const pts = (ox, oy, n, cols, ecart, r = 5) => {
    let s = "";
    for (let i = 0; i < n; i++) {
      const c = i % cols, l = Math.floor(i / cols);
      s += dot(ox + 22 + c * ecart, oy + 22 + l * ecart, r, "#C00000", "#7f0000");
    }
    return s;
  };
  return `${svgHeader(1000, 560)}
  ${titreSvg("La densité : le nombre d'habitants au km²")}
  ${cadre(50, 100, 400, 270, "#FFFDE7")}
  <rect x="140" y="125" width="220" height="200" fill="#FAFAFA" stroke="#8D6E63" stroke-width="3"/>
  ${pts(140, 125, 3, 3, 65, 7)}
  ${txt(250, 350, "3 habitants", { size: 19, bold: true })}
  ${txt(250, 378, "DENSITÉ FAIBLE", { size: 19, bold: true, fill: "#E65100" })}
  ${txt(250, 405, "collines de l'Ouest, Grand Sud", { size: 16, italic: true, fill: "#546E7A" })}
  ${cadre(550, 100, 400, 270, "#FFFDE7")}
  <rect x="640" y="125" width="220" height="200" fill="#FAFAFA" stroke="#8D6E63" stroke-width="3"/>
  ${pts(640, 125, 60, 10, 22, 5)}
  ${txt(750, 350, "300 habitants", { size: 19, bold: true })}
  ${txt(750, 378, "DENSITÉ FORTE", { size: 19, bold: true, fill: "#C00000" })}
  ${txt(750, 405, "Hautes Terres centrales", { size: 16, italic: true, fill: "#546E7A" })}
  ${cadre(50, 400, 900, 90, "#E1F5FE")}
  ${txt(500, 435, "densité = nombre d'habitants ÷ superficie (en km²)", { size: 23, bold: true, fill: "#01579B" })}
  ${txt(500, 468, "Exemple : 500 000 habitants sur 10 000 km² → 50 habitants par km²", { size: 18, italic: true })}
  ${caption("Même superficie, habitants différents : voilà toute la différence de densité.", 545)}
</svg>`;
}

// ── S29. Les causes de la répartition inégale ──────────────────────────
function svgCausesRepartition() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Pourquoi cette répartition inégale ?")}
  ${cadre(40, 100, 440, 330, "#E8F5E9")}
  ${txt(260, 138, "CE QUI ATTIRE LES HOMMES", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(260, 190, "• La pluie régulière de la côte est", { size: 18 })}
  ${txt(260, 225, "• Le climat doux des Hautes Terres", { size: 18 })}
  ${txt(260, 260, "• Les terres fertiles des vallées", { size: 18 })}
  ${txt(260, 295, "• Les villes, les ports et les routes", { size: 18 })}
  ${maison(160, 390, 1)}${maison(230, 395, 0.8)}${maison(300, 390, 1)}${maison(370, 395, 0.8)}
  ${txt(260, 425, "→ des zones peuplées", { size: 18, bold: true, fill: "#1B5E20" })}
  ${cadre(520, 100, 440, 330, "#FFEBEE")}
  ${txt(740, 138, "CE QUI ÉLOIGNE LES HOMMES", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(740, 190, "• La sécheresse du Grand Sud", { size: 18 })}
  ${txt(740, 225, "• La chaleur sèche de l'Ouest", { size: 18 })}
  ${txt(740, 260, "• Les forêts denses, les rochers", { size: 18 })}
  ${txt(740, 295, "• L'éloignement des villes et routes", { size: 18 })}
  ${maison(700, 390, 0.7, "#E0E0E0")}${maison(800, 395, 0.5, "#E0E0E0")}
  ${txt(740, 425, "→ des zones presque vides", { size: 18, bold: true, fill: "#C00000" })}
  ${txt(500, 480, "Conséquences : des Hautes Terres encombrées où les terres se morcellent,", { size: 19, bold: true })}
  ${txt(500, 508, "des espaces de l'Ouest et du Sud presque inhabités.", { size: 19, bold: true })}
  ${caption("Les hommes s'installent là où la vie est plus facile : eau, terres, villes, routes.", 545)}
</svg>`;
}

// ── S30. L'accroissement naturel ────────────────────────────────────────
function svgAccroissement() {
  const box = (x, w, t1, t2, f) => `
    <rect x="${x}" y="110" width="${w}" height="110" rx="14" fill="${f}" stroke="#90A4AE" stroke-width="3"/>
    ${txt(x + w / 2, 150, t1, { size: 18, bold: true })}
    ${txt(x + w / 2, 185, t2, { size: 16 })}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Comment la population évolue-t-elle ?")}
  ${box(40, 250, "POPULATION", "d'aujourd'hui", "#E1F5FE")}
  ${txt(315, 175, "+", { size: 40, bold: true, fill: "#1B5E20" })}
  ${box(340, 250, "LES NAISSANCES", "la natalité", "#E8F5E9")}
  ${txt(615, 175, "−", { size: 40, bold: true, fill: "#C00000" })}
  ${box(640, 250, "LES DÉCÈS", "la mortalité", "#FFEBEE")}
  ${txt(915, 172, "=", { size: 34, bold: true })}
  ${txt(500, 265, "POPULATION DE DEMAIN", { size: 21, bold: true, fill: "#01579B" })}
  ${cadre(60, 310, 880, 170, "#FAFAFA")}
  ${txt(110, 350, "NATALITÉ", { size: 19, bold: true, anchor: "start", fill: "#1B5E20" })}
  <rect x="250" y="332" width="560" height="26" rx="6" fill="#66BB6A"/>
  ${txt(830, 351, "forte", { size: 17, italic: true, anchor: "start", fill: "#1B5E20" })}
  ${txt(110, 410, "MORTALITÉ", { size: 19, bold: true, anchor: "start", fill: "#C00000" })}
  <rect x="250" y="392" width="220" height="26" rx="6" fill="#E57373"/>
  ${txt(490, 411, "en baisse", { size: 17, italic: true, anchor: "start", fill: "#C00000" })}
  ${fleche(480, 455, 760, 455, "#01579B", 6)}
  ${txt(620, 442, "l'écart = ACCROISSEMENT NATUREL", { size: 19, bold: true, fill: "#01579B" })}
  ${txt(500, 510, "L'accroissement naturel est fort : la population double en une génération.", { size: 21, bold: true })}
  ${caption("Natalité moins mortalité : voilà l'accroissement naturel.", 545)}
</svg>`;
}

// ── S31. La migration : émigration et immigration ──────────────────────
function svgMigration() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Émigrer, immigrer : deux mots pour un seul voyage")}
  ${defsArrow}
  ${txt(500, 130, "ÉMIGRATION : le départ, vu du lieu d'origine", { size: 21, bold: true, fill: "#C00000" })}
  ${cadre(50, 160, 300, 220, "#E8F5E9")}
  ${txt(200, 200, "LE LIEU D'ORIGINE", { size: 18, bold: true, fill: "#1B5E20" })}
  ${maison(120, 290, 1)}${maison(190, 295, 0.8)}${arbre(270, 290, 0.9)}
  ${txt(200, 360, "le village qui perd", { size: 16, italic: true })}
  ${txt(200, 385, "un habitant", { size: 16, italic: true })}
  ${fleche(370, 270, 630, 270, "#546E7A", 7)}
  ${bonhomme(500, 245, 1.7, "#5D4037")}
  ${txt(500, 330, "la migration", { size: 19, bold: true, fill: "#5D4037" })}
  ${txt(500, 358, "quitter son lieu habituel", { size: 16, italic: true })}
  ${txt(500, 382, "pour s'installer ailleurs", { size: 16, italic: true })}
  ${cadre(650, 160, 300, 220, "#E3F2FD")}
  ${txt(800, 200, "LE LIEU D'ACCUEIL", { size: 18, bold: true, fill: "#01579B" })}
  ${immeuble(730, 300, 0.9)}${maison(860, 310, 0.9, "#BBDEFB")}
  ${txt(800, 360, "la ville qui gagne", { size: 16, italic: true })}
  ${txt(800, 385, "un habitant", { size: 16, italic: true })}
  ${txt(500, 440, "IMMIGRATION : l'arrivée, vue du lieu d'accueil", { size: 21, bold: true, fill: "#01579B" })}
  ${txt(500, 490, "Le même voyageur : émigrant au départ, immigrant à l'arrivée.", { size: 20, bold: true })}
  ${caption("Un seul voyage, deux regards : celui qui part et celui qui arrive.", 545)}
</svg>`;
}

// ── S32. Le mouvement pendulaire ───────────────────────────────────────
function svgPendulaire() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Le mouvement pendulaire : partir le matin, revenir le soir")}
  ${defsArrow}
  ${cadre(50, 220, 280, 210, "#E8F5E9")}
  ${txt(190, 258, "LE DOMICILE", { size: 18, bold: true, fill: "#1B5E20" })}
  ${maison(110, 340, 1)}${maison(180, 345, 0.8)}${arbre(255, 340, 0.9)}
  ${txt(190, 400, "le village, le quartier", { size: 15, italic: true })}
  ${cadre(670, 220, 280, 210, "#E3F2FD")}
  ${txt(810, 258, "LA VILLE", { size: 18, bold: true, fill: "#01579B" })}
  ${immeuble(740, 360, 0.9)}${maison(880, 365, 0.8, "#BBDEFB")}
  ${txt(810, 400, "le travail, le marché, l'école", { size: 15, italic: true })}
  ${soleil(370, 130, 26)}
  ${txt(500, 130, "LE MATIN", { size: 20, bold: true, fill: "#E65100" })}
  ${txt(630, 130, "→", { size: 26, bold: true, fill: "#E65100" })}
  ${fleche(345, 175, 655, 175, "#E65100", 7)}
  ${bonhomme(500, 152, 1.5, "#5D4037")}
  ${txt(500, 200, "on va travailler, vendre, étudier", { size: 16, italic: true })}
  ${lune(370, 480, 24)}
  ${txt(500, 480, "LE SOIR", { size: 20, bold: true, fill: "#01579B" })}
  ${txt(640, 480, "←", { size: 26, bold: true, fill: "#01579B" })}
  ${fleche(655, 445, 345, 445, "#01579B", 7)}
  ${bonhomme(500, 422, 1.5, "#5D4037")}
  ${txt(500, 300, "Comme le balancier", { size: 22, bold: true, fill: "#5D4037" })}
  ${txt(500, 332, "d'une horloge :", { size: 22, bold: true, fill: "#5D4037" })}
  ${txt(500, 364, "un va-et-vient quotidien", { size: 20, italic: true })}
  ${txt(500, 525, "Le mouvement pendulaire n'est pas une migration : on ne change pas de logement.", { size: 19, bold: true })}
  ${caption("Domicile le soir, travail en ville le jour : le trajet pendulaire se répète chaque jour.", 550)}
</svg>`;
}

// ── S33. Les causes et les conséquences des migrations ─────────────────
function svgCausesConsequences() {
  const cause = (y, t1, t2) => `
    <rect x="50" y="${y}" width="400" height="100" rx="14" fill="#FFF8E1" stroke="#90A4AE" stroke-width="3"/>
    ${txt(250, y + 38, t1, { size: 18, bold: true, fill: "#E65100" })}
    ${txt(250, y + 68, t2, { size: 15 })}`;
  const conseq = (y, t1, t2, f) => `
    <rect x="550" y="${y}" width="400" height="100" rx="14" fill="${f}" stroke="#90A4AE" stroke-width="3"/>
    ${txt(750, y + 38, t1, { size: 18, bold: true, fill: "#01579B" })}
    ${txt(750, y + 68, t2, { size: 15 })}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les causes et les conséquences des migrations")}
  ${defsArrow}
  ${txt(250, 105, "LES CAUSES DU DÉPART", { size: 20, bold: true, fill: "#E65100" })}
  ${cause(125, "CAUSES ÉCONOMIQUES", "chercher du travail, une terre, suivre les études")}
  ${cause(245, "CAUSES SOCIOCULTURELLES", "le mariage, rejoindre sa famille, la coutume")}
  ${cause(365, "CATASTROPHES NATURELLES", "cyclones, sécheresses, inondations")}
  ${txt(750, 105, "LES CONSÉQUENCES", { size: 20, bold: true, fill: "#01579B" })}
  ${conseq(125, "LA VILLE GRANDIT VITE", "accroissement de la population urbaine", "#E3F2FD")}
  ${conseq(245, "DOMINATION DES ÉMIGRANTS", "les nouveaux venus dépassent les enfants du pays", "#E3F2FD")}
  ${conseq(365, "LES CAMPAGNES SE VIDENT", "les jeunes partent : c'est l'exode rural (unité 4)", "#E3F2FD")}
  ${fleche(460, 315, 540, 315, "#546E7A", 7)}
  ${txt(500, 505, "Les hommes partent pour vivre mieux ; les villes d'accueil gonflent, les villages s'effeuillent.", { size: 19, bold: true })}
  ${caption("Comprendre les causes et les conséquences des migrations.", 545)}
</svg>`;
}

// ── S34. La pyramide des âges ───────────────────────────────────────────
function svgPyramide() {
  const tranches = [
    ["0 à 14 ans", 240],
    ["15 à 29 ans", 175],
    ["30 à 44 ans", 120],
    ["45 à 59 ans", 75],
    ["60 ans et plus", 40],
  ];
  const cx = 430, baseY = 460, bh = 52, gap = 7;
  let bars = "";
  tranches.forEach(([label, halfW], i) => {
    const y = baseY - (i + 1) * (bh + gap) + gap;
    bars += `<rect x="${cx - halfW}" y="${y}" width="${halfW}" height="${bh}" fill="#42A5F5" stroke="#1565C0" stroke-width="2"/>`;
    bars += `<rect x="${cx}" y="${y}" width="${halfW}" height="${bh}" fill="#EC407A" stroke="#AD1457" stroke-width="2"/>`;
    bars += txt(cx - halfW - 12, y + 34, label, { size: 16, bold: true, anchor: "end", fill: "#37474F" });
  });
  return `${svgHeader(1000, 560)}
  ${titreSvg("La pyramide des âges de Madagascar")}
  <line x1="430" y1="100" x2="430" y2="470" stroke="#546E7A" stroke-width="4"/>
  ${bars}
  ${txt(240, 120, "GARÇONS", { size: 19, bold: true, fill: "#1565C0" })}
  ${txt(620, 120, "FILLES", { size: 19, bold: true, fill: "#AD1457" })}
  ${txt(430, 492, "les plus jeunes ↓   l'axe des âges   ↓ les plus anciens", { size: 15, italic: true, fill: "#546E7A" })}
  <rect x="740" y="150" width="230" height="120" rx="14" fill="#E8F5E9" stroke="#90A4AE" stroke-width="3"/>
  ${txt(855, 185, "BASE LARGE", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(855, 215, "beaucoup", { size: 17 })}
  ${txt(855, 240, "d'enfants", { size: 17 })}
  <rect x="740" y="310" width="230" height="120" rx="14" fill="#FFEBEE" stroke="#90A4AE" stroke-width="3"/>
  ${txt(855, 345, "SOMMET FIN", { size: 18, bold: true, fill: "#C00000" })}
  ${txt(855, 375, "peu", { size: 17 })}
  ${txt(855, 400, "d'anciens", { size: 17 })}
  ${txt(500, 510, "Plus de 4 habitants sur 10 ont moins de 15 ans : une population jeune.", { size: 21, bold: true })}
  ${caption("La pyramide des âges montre la structure de la population par âge et par sexe.", 548)}
</svg>`;
}

// ── S35. Croissance rapide et infrastructures ──────────────────────────
function svgImpactsCroissance() {
  const bloc = (x, y, t1, t2) => `
    <rect x="${x}" y="${y}" width="410" height="120" rx="14" fill="#FFEBEE" stroke="#90A4AE" stroke-width="3"/>
    ${txt(x + 205, y + 50, t1, { size: 19, bold: true, fill: "#C00000" })}
    ${txt(x + 205, y + 85, t2, { size: 16 })}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Les impacts de la croissance rapide de la population")}
  ${defsArrow}
  <rect x="300" y="95" width="400" height="80" rx="16" fill="#C00000"/>
  ${txt(500, 130, "LA POPULATION CROÎT VITE", { size: 21, bold: true, fill: "#FFFFFF" })}
  ${txt(500, 157, "elle double en une génération", { size: 16, italic: true, fill: "#FFFFFF" })}
  ${fleche(400, 185, 300, 235, "#546E7A", 5)}
  ${fleche(600, 185, 700, 235, "#546E7A", 5)}
  ${bloc(60, 245, "INFRASTRUCTURES INSUFFISANTES", "écoles et dispensaires débordés, eau et routes en retard")}
  ${bloc(530, 245, "MANQUE D'EMPLOI", "les jeunes ne trouvent pas de travail")}
  ${bloc(60, 395, "L'INSÉCURITÉ", "la pauvreté pousse certains à voler")}
  ${bloc(530, 395, "LA PAUVRETÉ", "les besoins grandissent plus vite que les richesses")}
  ${txt(500, 545, "Quand le pays ne suit pas, la croissance rapide freine le développement.", { size: 20, bold: true })}
</svg>`;
}

// ── S36. Population et développement socioéconomique ───────────────────
function svgPopulationDeveloppement() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Population et développement socioéconomique")}
  ${defsArrow}
  <rect x="280" y="95" width="440" height="80" rx="16" fill="#01579B"/>
  ${txt(500, 130, "UNE POPULATION JEUNE ET NOMBREUSE", { size: 19, bold: true, fill: "#FFFFFF" })}
  ${txt(500, 157, "beaucoup d'enfants, beaucoup de bras demain", { size: 16, italic: true, fill: "#FFFFFF" })}
  ${fleche(390, 185, 260, 240, "#C00000", 6)}
  ${fleche(610, 185, 740, 240, "#1E7B34", 6)}
  <rect x="60" y="250" width="400" height="210" rx="16" fill="#FFEBEE" stroke="#C00000" stroke-width="3"/>
  ${txt(260, 290, "SANS PRÉPARATION", { size: 20, bold: true, fill: "#C00000" })}
  ${txt(260, 335, "écoles qui débordent,", { size: 18 })}
  ${txt(260, 365, "jeunes sans travail,", { size: 18 })}
  ${txt(260, 395, "pauvreté et insécurité :", { size: 18 })}
  ${txt(260, 430, "le développement freine.", { size: 18, bold: true, fill: "#C00000" })}
  <rect x="540" y="250" width="400" height="210" rx="16" fill="#E8F5E9" stroke="#1E7B34" stroke-width="3"/>
  ${txt(740, 290, "AVEC ÉCOLES ET EMPLOIS", { size: 20, bold: true, fill: "#1B5E20" })}
  ${txt(740, 335, "des enfants instruits,", { size: 18 })}
  ${txt(740, 365, "des jeunes bien formés,", { size: 18 })}
  ${txt(740, 395, "des travailleurs créatifs :", { size: 18 })}
  ${txt(740, 430, "une force pour le pays.", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(500, 510, "Former la jeunesse, c'est préparer l'avenir.", { size: 22, bold: true })}
  ${caption("La même population : un poids ou une force, selon qu'on la prépare.", 545)}
</svg>`;
}

const SVG = {
  geo6_repartition_population: svgRepartition(),
  geo6_densite: svgDensite(),
  geo6_causes_repartition: svgCausesRepartition(),
  geo6_accroissement: svgAccroissement(),
  geo6_migration: svgMigration(),
  geo6_pendulaire: svgPendulaire(),
  geo6_causes_consequences_migrations: svgCausesConsequences(),
  geo6_pyramide_ages: svgPyramide(),
  geo6_impacts_croissance: svgImpactsCroissance(),
  geo6_population_developpement: svgPopulationDeveloppement(),
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
