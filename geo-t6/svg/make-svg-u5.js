// make-svg-u5.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 5
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";

const H = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const cadre = (x, y, w, h, f = "#EAF4FB") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="${f}" stroke="#90A4AE" stroke-width="3"/>`;
const T = (t, w = 1000) => `<text x="${w / 2}" y="52" text-anchor="middle" font-size="30" font-weight="bold" fill="#1E7B34">${t}</text>`;
const C = (t, y = 545, w = 1000) => `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const t = (x, y, s, o = {}) => `<text x="${x}" y="${y}" text-anchor="${o.a || "middle"}" font-size="${o.z || 21}" fill="${o.c || "#263238"}"${o.b ? ' font-weight="bold"' : ""}${o.i ? ' font-style="italic"' : ""}>${s}</text>`;
const fle = (x1, y1, x2, y2, c = "#546E7A", sw = 5, m = "af") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" marker-end="url(#${m})"/>`;
const DEFS = `<defs><marker id="af" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#546E7A"/></marker>
<marker id="afR" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#C00000"/></marker>
<marker id="afV" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1E7B34"/></marker>
<marker id="afB" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#01579B"/></marker></defs>`;

const MADA = "M 58 2 L 71 16 L 79 42 L 75 60 L 80 92 L 78 126 L 71 156 L 61 178 L 52 197 L 41 174 L 32 148 L 25 118 L 20 88 L 21 60 L 24 38 L 34 16 L 47 5 Z";
const madaT = (cx, cy, h) => `translate(${cx} ${cy}) scale(${h / 200}) translate(-50 -100)`;
const mada = (cx, cy, h, o = {}) => `<g transform="${madaT(cx, cy, h)}"><path d="${MADA}" fill="${o.f || "#EFEBE9"}" stroke="${o.s || "#8D6E63"}" stroke-width="${(o.sw || 3) / (h / 200)}" stroke-linejoin="round"/></g>`;
const L = (cx, cy, h, lx, ly) => [cx + (lx - 50) * h / 200, cy + (ly - 100) * h / 200];
const tL = (cx, cy, h, lx, ly, s, o = {}) => { const [x, y] = L(cx, cy, h, lx, ly); return t(x, y, s, o); };

// pictos
const arbre = (x, y, s = 1, f = "#2E7D32") => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-4" y="8" width="8" height="20" fill="#6D4C41"/><circle cx="0" cy="0" r="18" fill="${f}"/><circle cx="-13" cy="8" r="13" fill="${f}"/><circle cx="13" cy="8" r="13" fill="${f}"/></g>`;
const maison = (x, y, s = 1, f = "#FFE0B2") => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-16" y="-6" width="32" height="22" fill="${f}" stroke="#8D6E63" stroke-width="2"/><path d="M -20 -6 L 0 -22 L 20 -6 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/></g>`;
const immeuble = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-30" y="-8" width="20" height="34" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><rect x="-6" y="-28" width="16" height="54" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><rect x="14" y="2" width="18" height="24" fill="#A1887F" stroke="#6D4C41" stroke-width="2"/><rect x="-4" y="-20" width="6" height="6" fill="#FFF"/><rect x="4" y="-20" width="6" height="6" fill="#FFF"/><rect x="-4" y="-10" width="6" height="6" fill="#FFF"/><rect x="4" y="-10" width="6" height="6" fill="#FFF"/></g>`;
const bonhomme = (x, y, s = 1, f = "#37474F") => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="0" cy="-16" r="6" fill="${f}"/><line x1="0" y1="-10" x2="0" y2="6" stroke="${f}" stroke-width="5" stroke-linecap="round"/><line x1="0" y1="6" x2="-6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="6" x2="6" y2="18" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="-6" x2="-8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/><line x1="0" y1="-6" x2="8" y2="0" stroke="${f}" stroke-width="4" stroke-linecap="round"/></g>`;
const zebu = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="24" ry="13" fill="#8D6E63"/><circle cx="26" cy="-10" r="8" fill="#8D6E63"/><path d="M 20 -16 L 26 -26 L 32 -16" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/><path d="M -24 -2 Q -34 -14 -26 -20" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/><line x1="-12" y1="12" x2="-12" y2="24" stroke="#5D4037" stroke-width="4"/><line x1="10" y1="12" x2="10" y2="24" stroke="#5D4037" stroke-width="4"/></g>`;
const poisson = (x, y, s = 1, f = "#0288D1") => `<g transform="translate(${x},${y}) scale(${s})"><ellipse cx="0" cy="0" rx="20" ry="10" fill="${f}"/><path d="M 18 0 L 30 -9 L 30 9 Z" fill="${f}"/><circle cx="-10" cy="-2" r="2.5" fill="#FFF"/></g>`;
const pirogue = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -40 0 Q 0 18 40 0 L 30 8 Q 0 22 -30 8 Z" fill="#8D6E63"/><line x1="0" y1="-2" x2="0" y2="-40" stroke="#6D4C41" stroke-width="3"/><path d="M 0 -40 L 26 -6 L 0 -6 Z" fill="#FFF9C4" stroke="#C0A16B" stroke-width="2"/></g>`;
const navire = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -50 0 L 50 0 L 38 18 L -38 18 Z" fill="#546E7A"/><rect x="-14" y="-34" width="28" height="34" fill="#FFFFFF" stroke="#546E7A" stroke-width="2"/><rect x="16" y="-24" width="14" height="24" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><rect x="-30" y="-18" width="12" height="18" fill="#FFCA28" stroke="#546E7A" stroke-width="2"/></g>`;
const avion = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -34 0 L 30 -4 L 40 0 L 30 4 Z" fill="#B0BEC5" stroke="#546E7A" stroke-width="2"/><path d="M -6 -2 L 6 -24 L 12 -22 L 6 -2 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><path d="M -6 2 L 6 24 L 12 22 L 6 2 Z" fill="#90A4AE" stroke="#546E7A" stroke-width="2"/><path d="M -34 -2 L -44 -14 L -38 -14 L -30 -2 Z" fill="#90A4AE"/></g>`;
const train = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-38" y="-18" width="60" height="24" rx="4" fill="#C62828" stroke="#8E0000" stroke-width="2"/><rect x="26" y="-10" width="24" height="16" rx="3" fill="#EFEBE9" stroke="#8E0000" stroke-width="2"/><circle cx="-24" cy="10" r="8" fill="#37474F"/><circle cx="8" cy="10" r="8" fill="#37474F"/><circle cx="42" cy="10" r="8" fill="#37474F"/><rect x="-28" y="-12" width="12" height="10" fill="#FFF9C4"/></g>`;
const sac = (x, y, s = 1, f = "#D7CCC8") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -14 0 L 14 0 L 11 24 L -11 24 Z" fill="${f}" stroke="#8D6E63" stroke-width="2"/><path d="M -8 0 Q 0 -12 8 0" fill="none" stroke="#8D6E63" stroke-width="2"/></g>`;
const gemme = (x, y, s = 1, f = "#7C4DFF") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 -14 L 12 -4 L 0 14 L -12 -4 Z" fill="${f}" stroke="#4527A0" stroke-width="2"/><path d="M -12 -4 L 12 -4" stroke="#4527A0" stroke-width="1.5"/></g>`;
const balle = (x, y, r = 16, f = "#8D6E63") => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" stroke="#5D4037" stroke-width="3"/>`;
const parasol = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -30 0 A 30 30 0 0 1 30 0 Z" fill="#FF7043" stroke="#D84315" stroke-width="2"/><line x1="0" y1="0" x2="0" y2="34" stroke="#6D4C41" stroke-width="3"/></g>`;
const soleil = (cx, cy, r) => { let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`; for (let i = 0; i < 8; i++) { const a = i * Math.PI / 4; s += `<line x1="${cx + (r + 6) * Math.cos(a)}" y1="${cy + (r + 6) * Math.sin(a)}" x2="${cx + (r + 16) * Math.cos(a)}" y2="${cy + (r + 16) * Math.sin(a)}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`; } return s; };
const riviere = (x1, y1, x2, y2, c = "#4FC3F7") => `<path d="M ${x1} ${y1} Q ${(x1 + x2) / 2} ${(y1 + y2) / 2 - 30} ${x2} ${y2}" fill="none" stroke="${c}" stroke-width="10" stroke-linecap="round"/>`;
const champ = (x, y, w, h, n = 4) => { let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#AED581" stroke="#689F38" stroke-width="2"/>`; for (let i = 1; i < n; i++) s += `<line x1="${x}" y1="${y + (h / n) * i}" x2="${x + w}" y2="${y + (h / n) * i}" stroke="#689F38" stroke-width="2"/>`; return s; };
const epi = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><line x1="0" y1="0" x2="0" y2="-26" stroke="#C0A16B" stroke-width="2"/><ellipse cx="0" cy="-26" rx="5" ry="8" fill="#FFD54F"/><ellipse cx="-5" cy="-18" rx="4" ry="7" fill="#FFD54F"/><ellipse cx="5" cy="-18" rx="4" ry="7" fill="#FFD54F"/><ellipse cx="-5" cy="-10" rx="4" ry="6" fill="#FFD54F"/><ellipse cx="5" cy="-10" rx="4" ry="6" fill="#FFD54F"/></g>`;

// S51 — Les 7 zones économiques
function s51() {
  const cle = (x, y, icone, nom, ex) => `
    <rect x="${x}" y="${y}" width="440" height="88" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="2"/>
    ${icone}${t(x + 190, y + 34, nom, { z: 20, b: true })}${t(x + 190, y + 64, ex, { z: 16, i: true, c: "#546E7A" })}`;
  return `${H(1000, 620)}${T("Les sept grandes zones économiques de Madagascar")}
  ${cle(30, 100, epi(80, 150, 2), "LA ZONE AGRICOLE", "riz, maïs, manioc, vanille, café")}
  ${cle(530, 100, poisson(580, 145, 2), "LA ZONE DE PÊCHE", "poissons, crevettes, langoustes")}
  ${cle(30, 204, arbre(80, 240, 1), "LA ZONE FORESTIÈRE", "bois de chauffe, bois d'œuvre")}
  ${cle(530, 204, gemme(580, 235, 1.6), "LA ZONE MINIÈRE", "nickel, chromite, ilménite, saphirs")}
  ${cle(30, 308, sac(80, 330, 1.6, "#FFE0B2"), "LA ZONE ARTISANALE", "paniers de raphia, sculptures, tissus")}
  ${cle(530, 308, immeuble(580, 340, 0.6), "LA ZONE INDUSTRIELLE", "usines textiles, agroalimentaires, minières")}
  ${cle(290, 412, parasol(340, 450, 1.2), "LA ZONE TOURISTIQUE", "plages, parcs, collines royales")}
  ${t(500, 560, "Chaque zone vit de l'activité qui y domine ; ensemble, elles font vivre le pays.", { z: 21, b: true })}
  ${C("Sept zones, sept richesses : voilà l'économie malgache.", 600)}
</svg>`;
}

// S52 — Localiser les zones
function s52() {
  const cx = 330, cy = 340, h = 460;
  const clip = `<clipPath id="m5"><path d="${MADA}" transform="${madaT(cx, cy, h)}"/></clipPath>`;
  const zone = (lx, ly, rx, ry, f) => { const [x, y] = L(cx, cy, h, lx, ly); return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}"/>`; };
  return `${H(1000, 620)}${T("Où domine chaque activité ? Pourquoi là ?")}
  <defs>${clip}</defs>
  ${mada(cx, cy, h)}
  <g clip-path="url(#m5)">
    ${zone(50, 90, 48, 80, "#AED581")}
    ${zone(70, 88, 14, 90, "#4FC3F7")}
    ${zone(66, 108, 14, 90, "#81C784")}
    ${zone(57, 44, 20, 40, "#AED581")}
    ${zone(30, 120, 12, 30, "#7C4DFF")}
    ${zone(74, 178, 10, 20, "#7C4DFF")}
    ${zone(53, 15, 16, 12, "#FF7043")}
  </g>
  ${tL(cx, cy, h, 52, 60, "agriculture", { z: 15, b: true, c: "#33691E" })}
  ${tL(cx, cy, h, 86, 60, "pêche", { z: 15, b: true, c: "#0277BD", a: "start" })}
  ${tL(cx, cy, h, 90, 112, "forêt de l'est", { z: 14, b: true, c: "#2E7D32", a: "start" })}
  ${tL(cx, cy, h, 30, 108, "saphirs", { z: 13, b: true, c: "#4527A0", a: "end" })}
  ${tL(cx, cy, h, 50, 138, "nickel", { z: 13, b: true, c: "#4527A0" })}
  ${tL(cx, cy, h, 53, 8, "Nosy Be", { z: 13, b: true, c: "#D84315" })}
  <rect x="620" y="110" width="350" height="130" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${t(795, 143, "LÉGENDE", { z: 19, b: true })}
  ${t(645, 178, "agricole   pêche   forêt", { z: 16, a: "start" })}
  ${t(645, 208, "minière   touristique", { z: 16, a: "start" })}
  ${t(645, 231, "artisanale et industrielle : les villes", { z: 15, i: true, a: "start", c: "#546E7A" })}
  <rect x="620" y="270" width="350" height="250" rx="14" fill="#E8F5E9" stroke="#90A4AE" stroke-width="3"/>
  ${t(795, 305, "LA RÈGLE", { z: 19, b: true, c: "#1B5E20" })}
  ${t(795, 345, "La nature décide :", { z: 17, a: "start" })}
  ${t(795, 375, "pluie → riz et forêt,", { z: 16, a: "start" })}
  ${t(795, 403, "mer → pêche,", { z: 16, a: "start" })}
  ${t(795, 431, "sous-sol → mines.", { z: 16, a: "start" })}
  ${t(795, 470, "Les hommes ajoutent :", { z: 17, a: "start" })}
  ${t(795, 498, "villes → usines, artisanat.", { z: 16, a: "start" })}
  ${C("Chaque activité occupe la région que la nature et les hommes lui offrent.", 600)}
</svg>`;
}

// S53 — Cultures vivrières et commerciales
function s53() {
  return `${H(1000, 560)}${T("Cultures vivrières et cultures commerciales")}
  ${DEFS}
  ${cadre(40, 100, 440, 330, "#E8F5E9")}
  ${t(260, 138, "POUR MANGER (VIVRIÈRES)", { z: 19, b: true, c: "#1B5E20" })}
  ${epi(120, 330, 2.4)}${epi(180, 335, 2)}${epi(240, 330, 2.4)}
  ${t(260, 210, "le riz — l'aliment de base", { z: 17, b: true })}
  ${t(260, 248, "le maïs, le manioc, la patate douce", { z: 17 })}
  ${t(260, 286, "nourrissent la famille qui cultive", { z: 16, i: true, c: "#546E7A" })}
  ${t(260, 400, "L'assiette de la famille, d'abord.", { z: 18, b: true, c: "#1B5E20" })}
  ${cadre(520, 100, 440, 330, "#FFF8E1")}
  ${t(740, 138, "POUR VENDRE (COMMERCIALES)", { z: 19, b: true, c: "#E65100" })}
  ${t(740, 205, "la vanille et le girofle (côte nord-est)", { z: 17 })}
  ${t(740, 240, "le café (les pentes de l'est)", { z: 17 })}
  ${t(740, 275, "le litchi, le poivre, la cannelle", { z: 17 })}
  ${fle(700, 320, 660, 410, "#E65100", 6)}
  ${fle(780, 320, 830, 410, "#01579B", 6)}
  ${t(645, 440, "au marché", { z: 16, b: true })}
  ${t(840, 440, "aux pays lointains", { z: 16, b: true })}
  ${t(500, 510, "Vivrières : l'assiette. Commerciales : l'argent du sel, du savon et des cahiers.", { z: 20, b: true })}
  ${C("Cultiver pour manger, cultiver pour vendre : les deux font la ferme.", 545)}
</svg>`;
}

// S54 — Cultures industrielles ; l'agriculture malgache
function s54() {
  return `${H(1000, 560)}${T("Cultures industrielles et agriculture malgache")}
  ${cadre(40, 100, 440, 250, "#FFF3E0")}
  ${t(260, 138, "LES CULTURES INDUSTRIELLES", { z: 19, b: true, c: "#E65100" })}
  ${t(260, 190, "la canne à sucre → l'usine sucrière", { z: 17 })}
  ${t(260, 222, "le coton → la filature textile", { z: 17 })}
  ${t(260, 265, "De grands champs pour les usines,", { z: 16, i: true, c: "#546E7A" })}
  ${t(260, 291, "surtout sur la côte ouest et au nord.", { z: 16, i: true, c: "#546E7A" })}
  ${cadre(520, 100, 440, 250, "#E8F5E9")}
  ${t(740, 138, "L'AGRICULTURE MALGACHE", { z: 19, b: true, c: "#1B5E20" })}
  ${t(740, 190, "• des petites parcelles", { z: 17 })}
  ${t(740, 222, "• la houe et l'angady, à la main", { z: 17 })}
  ${t(740, 254, "• tout dépend de la pluie", { z: 17 })}
  ${t(740, 300, "Artisanale : elle nourrit pourtant", { z: 16, i: true, c: "#546E7A" })}
  ${t(740, 326, "la grande majorité du pays.", { z: 16, i: true, c: "#546E7A" })}
  ${cadre(40, 380, 920, 110, "#E1F5FE")}
  ${t(500, 415, "L'avenir : semis en lignes, compost, irrigation —", { z: 19, b: true, c: "#01579B" })}
  ${t(500, 448, "produire plus sans attendre tout du ciel.", { z: 19, b: true, c: "#01579B" })}
  ${C("De grands champs pour les usines ; de petites parcelles pour les familles.", 545)}
</svg>`;
}

// S55 — Élevage extensif et intensif
function s55() {
  return `${H(1000, 560)}${T("L'élevage extensif et l'élevage intensif")}
  ${cadre(40, 100, 440, 340, "#E8F5E9")}
  ${t(260, 138, "EXTENSIF : LES GRANDS ESPACES", { z: 18, b: true, c: "#1B5E20" })}
  ${arbre(100, 220, 1)}${arbre(420, 210, 0.9, "#66BB6A")}
  ${zebu(160, 300, 1.3)}${zebu(260, 315, 1.1)}${zebu(350, 295, 1.2)}
  ${t(260, 365, "les zébus paissent seuls,", { z: 17 })}
  ${t(260, 393, "gardés par un berger", { z: 17 })}
  ${t(260, 425, "peu de soins, de grands espaces", { z: 16, i: true, c: "#546E7A" })}
  ${cadre(520, 100, 440, 340, "#E3F2FD")}
  ${t(740, 138, "INTENSIF : LES SOINS", { z: 18, b: true, c: "#01579B" })}
  <rect x="600" y="170" width="280" height="140" rx="10" fill="#FFF8E1" stroke="#8D6E63" stroke-width="3"/>
  ${zebu(660, 250, 1)}${zebu(740, 255, 1)}${zebu(820, 250, 1)}
  ${t(740, 340, "l'étable : nourriture apportée,", { z: 17 })}
  ${t(740, 368, "vaccins, traite, propreté", { z: 17 })}
  ${t(740, 405, "peu de place, beaucoup de production", { z: 16, i: true, c: "#546E7A" })}
  ${t(500, 490, "Extensif : la tradition des grands espaces. Intensif : le lait, les œufs, les poulets des villes.", { z: 18, b: true })}
  ${C("Deux élevages, deux mondes — et l'avenir entre les deux.", 540)}
</svg>`;
}

// S56 — Pêche artisanale et industrielle
function s56() {
  return `${H(1000, 560)}${T("La pêche artisanale et la pêche industrielle")}
  <rect x="0" y="330" width="1000" height="80" fill="#4FC3F7" opacity="0.5"/>
  ${t(180, 100, "LA PÊCHE ARTISANALE", { z: 19, b: true, c: "#E65100" })}
  ${pirogue(180, 350, 1.6)}
  ${t(180, 200, "la pirogue, près du bord", { z: 17 })}
  ${t(180, 232, "filets, lignes, pièges simples", { z: 16 })}
  ${t(180, 264, "→ le poisson frais du village", { z: 17, b: true })}
  ${t(180, 296, "nourrit les familles", { z: 16, i: true, c: "#546E7A" })}
  ${t(740, 100, "LA PÊCHE INDUSTRIELLE", { z: 19, b: true, c: "#01579B" })}
  ${navire(740, 345, 1.6)}
  ${t(740, 200, "le bateau usine, au large", { z: 17 })}
  ${t(740, 232, "filets géants, congélation à bord", { z: 16 })}
  ${t(740, 264, "→ crevettes et poissons exportés", { z: 17, b: true })}
  ${t(740, 296, "des devises pour le pays", { z: 16, i: true, c: "#546E7A" })}
  ${t(500, 470, "L'une nourrit le peuple, l'autre enrichit le pays — à condition de respecter la mer.", { z: 19, b: true })}
  ${C("Deux pêches, une seule mer : pêcher sans la vider.", 545)}
</svg>`;
}

// S57 — Exploitation forestière
function s57() {
  return `${H(1000, 620)}${T("L'exploitation forestière")}
  ${cadre(40, 100, 440, 240, "#FFF8E1")}
  ${t(260, 138, "LES DEUX BOIS", { z: 19, b: true, c: "#E65100" })}
  ${t(260, 190, "le bois de chauffe : le feu de la cuisine,", { z: 17 })}
  ${t(260, 218, "le besoin de chaque jour", { z: 16, i: true, c: "#546E7A" })}
  ${t(260, 265, "le bois d'œuvre : les grumes à la scierie", { z: 17 })}
  ${t(260, 293, "→ poutres, planches, meubles", { z: 16, b: true })}
  ${cadre(520, 100, 440, 240, "#FFEBEE")}
  ${t(740, 138, "LA FORÊT RECULE", { z: 19, b: true, c: "#C00000" })}
  ${t(740, 190, "coupes excessives, tavy, feux de brousse", { z: 17 })}
  ${arbre(650, 300, 1, "#8D6E63")}${arbre(740, 305, 1, "#8D6E63")}
  ${t(830, 295, "→", { z: 26, b: true, c: "#C00000" })}
  ${t(740, 330, "la forêt ne revient pas seule", { z: 16, i: true, c: "#C00000" })}
  ${cadre(40, 380, 920, 150, "#E8F5E9")}
  ${t(500, 420, "LA SOLUTION : LE REBOISEMENT", { z: 20, b: true, c: "#1B5E20" })}
  ${arbre(300, 480, 1, "#66BB6A")}${arbre(370, 485, 1.2, "#43A047")}${arbre(450, 480, 1, "#66BB6A")}${arbre(520, 485, 1.2, "#43A047")}${arbre(600, 480, 1, "#66BB6A")}
  ${t(780, 470, "pins et eucalyptus :", { z: 17 })}
  ${t(780, 500, "un coupé, un planté !", { z: 19, b: true, c: "#1B5E20" })}
  ${C("Couper, oui ; planter toujours : la règle d'or de la forêt.", 600)}
</svg>`;
}

// S58 — Mines : artisanale et industrielle
function s58() {
  return `${H(1000, 560)}${T("L'exploitation minière : artisanale et industrielle")}
  ${cadre(40, 100, 440, 330, "#FFF3E0")}
  ${t(260, 138, "ARTISANALE : LE CREUSEUR", { z: 18, b: true, c: "#E65100" })}
  <path d="M 160 400 L 160 250 L 240 250 L 240 400 Z" fill="#8D6E63"/>
  <rect x="185" y="290" width="30" height="110" fill="#5D4037"/>
  ${bonhomme(260, 260, 1.4, "#5D4037")}
  ${t(300, 380, "le puits, la corde,", { z: 16 })}
  ${t(300, 405, "le tamis à la main", { z: 16 })}
  ${t(260, 425, "saphirs du Sud — des dizaines de milliers de familles", { z: 15, i: true, c: "#546E7A" })}
  ${cadre(520, 100, 440, 330, "#ECEFF1")}
  ${t(740, 138, "INDUSTRIELLE : LA GRANDE MINE", { z: 18, b: true, c: "#546E7A" })}
  <path d="M 560 400 L 640 220 L 720 220 L 800 400 Z" fill="#B0A08C"/>
  <path d="M 620 400 L 665 290 L 705 290 L 750 400 Z" fill="#8D6E63"/>
  <rect x="790" y="260" width="120" height="70" rx="8" fill="#90A4AE" stroke="#546E7A" stroke-width="3"/>
  ${t(850, 300, "usine", { z: 16, b: true, c: "#FFFFFF" })}
  ${balle(640, 360, 11)}${balle(700, 355, 9, "#A1887F")}
  ${t(740, 425, "nickel de l'est — machines géantes, devises", { z: 15, i: true, c: "#546E7A" })}
  ${t(500, 490, "Deux mines, deux mondes — et une même règle : réparer la terre après la mine.", { z: 19, b: true })}
  ${C("Le sous-sol est non renouvelable : chaque gramme extrait doit compter.", 540)}
</svg>`;
}

// S59 — Artisanat
function s59() {
  const panier = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -18 0 L 18 0 L 12 20 L -12 20 Z" fill="#D7A86E" stroke="#8D6E63" stroke-width="2"/><line x1="-14" y1="6" x2="14" y2="6" stroke="#8D6E63" stroke-width="1.5"/><line x1="-13" y1="12" x2="13" y2="12" stroke="#8D6E63" stroke-width="1.5"/><path d="M -18 0 Q 0 -14 18 0" fill="none" stroke="#8D6E63" stroke-width="2"/></g>`;
  return `${H(1000, 560)}${T("L'artisanat : le travail des mains")}
  ${cadre(40, 100, 300, 330, "#FFF8E1")}
  ${t(190, 138, "LES MATIÈRES", { z: 18, b: true, c: "#E65100" })}
  ${t(190, 195, "le raphia des marais", { z: 16 })}
  ${t(190, 230, "le bois des forêts", { z: 16 })}
  ${t(190, 265, "la corne des zébus", { z: 16 })}
  ${t(190, 300, "la soie des vers sauvages", { z: 16 })}
  ${t(190, 355, "tout vient du pays même", { z: 15, i: true, c: "#546E7A" })}
  ${fle(360, 265, 450, 265, "#546E7A", 6)}
  ${t(405, 245, "les mains", { z: 15, i: true })}
  ${cadre(470, 100, 230, 330, "#E8F5E9")}
  ${t(585, 138, "LES OUTILS", { z: 18, b: true, c: "#1B5E20" })}
  ${t(585, 200, "le métier à tisser", { z: 16 })}
  ${t(585, 230, "de bois,", { z: 16 })}
  ${t(585, 275, "le couteau du", { z: 16 })}
  ${t(585, 305, "sculpteur,", { z: 16 })}
  ${t(585, 350, "+ machines pour", { z: 16, i: true, c: "#546E7A" })}
  ${t(585, 378, "les finitions", { z: 16, i: true, c: "#546E7A" })}
  ${fle(720, 265, 800, 265, "#546E7A", 6)}
  ${cadre(820, 100, 150, 330, "#E3F2FD")}
  ${t(895, 138, "PRODUITS", { z: 17, b: true, c: "#01579B" })}
  ${panier(895, 190, 1.3)}
  ${t(895, 250, "paniers,", { z: 15 })}
  ${t(895, 280, "sculptures,", { z: 15 })}
  ${t(895, 310, "chapeaux,", { z: 15 })}
  ${t(895, 340, "tissus,", { z: 15 })}
  ${t(895, 375, "papier", { z: 15 })}
  ${t(895, 400, "antemoro", { z: 15 })}
  ${t(500, 480, "La mémoire des mains : un patrimoine des ancêtres qui fait vivre les enfants.", { z: 19, b: true })}
  ${C("Matières du pays, gestes des ancêtres, produits qui voyagent.", 545)}
</svg>`;
}

// S60 — Industrie
function s60() {
  const usine = (x, y) => `<g transform="translate(${x},${y})"><rect x="-55" y="-30" width="110" height="60" rx="6" fill="#B0BEC5" stroke="#546E7A" stroke-width="3"/><rect x="-40" y="-55" width="16" height="25" fill="#78909C" stroke="#546E7A" stroke-width="2"/><rect x="24" y="-55" width="16" height="25" fill="#78909C" stroke="#546E7A" stroke-width="2"/><rect x="-25" y="-14" width="14" height="14" fill="#FFF9C4"/><rect x="11" y="-14" width="14" height="14" fill="#FFF9C4"/></g>`;
  return `${H(1000, 560)}${T("L'industrie : agroalimentaire, textile, minière")}
  ${t(500, 100, "Transformer sur place les richesses du pays — voilà l'industrie.", { z: 19, i: true, c: "#546E7A" })}
  ${cadre(40, 130, 280, 300, "#E8F5E9")}
  ${usine(180, 250)}
  ${t(180, 320, "AGROALIMENTAIRE", { z: 17, b: true, c: "#1B5E20" })}
  ${t(180, 355, "riz décortiqué, boissons,", { z: 15 })}
  ${t(180, 380, "sucre, crevettes congelées", { z: 15 })}
  ${t(180, 415, "elle nourrit le pays", { z: 15, i: true, c: "#546E7A" })}
  ${cadre(360, 130, 280, 300, "#E3F2FD")}
  ${usine(500, 250)}
  ${t(500, 320, "TEXTILE", { z: 17, b: true, c: "#01579B" })}
  ${t(500, 355, "les zones franches cousent", { z: 15 })}
  ${t(500, 380, "les vêtements exportés", { z: 15 })}
  ${t(500, 415, "des dizaines de milliers d'emplois", { z: 15, i: true, c: "#546E7A" })}
  ${cadre(680, 130, 280, 300, "#ECEFF1")}
  ${usine(820, 250)}
  ${t(820, 320, "MINIÈRE", { z: 17, b: true, c: "#546E7A" })}
  ${t(820, 355, "le minerai lavé, concentré,", { z: 15 })}
  ${t(820, 380, "prêt pour les navires", { z: 15 })}
  ${t(820, 415, "près des mines et des ports", { z: 15, i: true, c: "#546E7A" })}
  ${t(500, 490, "Trois grandes industries : des emplois salariés et des devises pour le développement.", { z: 19, b: true })}
  ${C("Usines près des villes et des ports ; produits vers les pays lointains.", 545)}
</svg>`;
}

// S61 — Tourisme
function s61() {
  const baobab = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -7 30 L -5 -20 L 5 -20 L 7 30 Z" fill="#8D6E63"/><circle cx="-14" cy="-24" r="9" fill="#66BB6A"/><circle cx="0" cy="-30" r="10" fill="#66BB6A"/><circle cx="14" cy="-24" r="9" fill="#66BB6A"/></g>`;
  return `${H(1000, 560)}${T("Le tourisme et ses impacts")}
  ${t(180, 105, "BALNÉAIRE", { z: 18, b: true, c: "#0277BD" })}
  <rect x="60" y="140" width="240" height="90" rx="12" fill="#4FC3F7" opacity="0.6"/>
  ${soleil(90, 175, 14)}
  ${t(180, 195, "les plages de Nosy Be", { z: 16 })}
  ${t(180, 250, "le soleil et la mer chaude", { z: 15, i: true, c: "#546E7A" })}
  ${t(500, 105, "CULTUREL", { z: 18, b: true, c: "#E65100" })}
  ${maison(470, 200, 1.6, "#FFD8B5")}${maison(540, 215, 1.2, "#FFD8B5")}
  ${t(500, 250, "collines royales, traditions", { z: 15, i: true, c: "#546E7A" })}
  ${t(820, 105, "ÉCOLOGIQUE", { z: 18, b: true, c: "#1B5E20" })}
  ${baobab(760, 220, 1.4)}${arbre(860, 225, 1.1)}
  ${t(820, 250, "parcs, lémuriens, baobabs", { z: 15, i: true, c: "#546E7A" })}
  ${cadre(40, 290, 920, 140, "#FFF8E1")}
  ${t(500, 325, "LA CHAÎNE DES MÉTIERS", { z: 19, b: true, c: "#E65100" })}
  ${t(500, 365, "guide → hôtel → restaurant → chauffeur → artisan", { z: 19, b: true })}
  ${t(500, 400, "chaque ariary dépensé par un visiteur fait vivre une famille", { z: 16, i: true, c: "#546E7A" })}
  ${t(500, 480, "Et l'argent étranger qui entre — les devises — reste au pays.", { z: 20, b: true })}
  ${C("Protéger la nature, c'est protéger les emplois du tourisme.", 545)}
</svg>`;
}

// S62 — Commerce
function s62() {
  return `${H(1000, 560)}${T("Le commerce intérieur et le commerce extérieur")}
  ${DEFS}
  ${cadre(40, 100, 420, 280, "#E8F5E9")}
  ${t(250, 138, "LE COMMERCE INTÉRIEUR", { z: 19, b: true, c: "#1B5E20" })}
  ${maison(120, 240, 1.2)}${maison(380, 240, 1.2)}
  ${fle(180, 200, 320, 200, "#1B5E20", 5, "afV")}
  ${fle(320, 240, 180, 240, "#1B5E20", 5, "afV")}
  ${t(250, 285, "marchés, boutiques, taxis-brousse :", { z: 17 })}
  ${t(250, 315, "on vend chez nous, à nous,", { z: 16 })}
  ${t(250, 345, "en argent malgache", { z: 16, i: true, c: "#546E7A" })}
  ${cadre(500, 100, 460, 280, "#E3F2FD")}
  ${t(730, 138, "LE COMMERCE EXTÉRIEUR", { z: 19, b: true, c: "#01579B" })}
  ${navire(730, 330, 1.2)}
  ${t(600, 220, "EXPORTATIONS", { z: 16, b: true, c: "#1B5E20" })}
  ${t(600, 250, "vanille, crevettes,", { z: 15 })}
  ${t(600, 275, "textile, nickel", { z: 15 })}
  ${fle(660, 300, 700, 310, "#1B5E20", 5, "afV")}
  ${t(870, 220, "IMPORTATIONS", { z: 16, b: true, c: "#C00000" })}
  ${t(870, 250, "pétrole, machines,", { z: 15 })}
  ${t(870, 275, "médicaments", { z: 15 })}
  ${fle(800, 300, 760, 310, "#C00000", 5, "afR")}
  ${cadre(40, 410, 920, 80, "#FFF8E1")}
  ${t(500, 445, "Notre défi : vendre des produits transformés, pas seulement bruts —", { z: 18, b: true, c: "#E65100" })}
  ${t(500, 473, "le parfum vaut plus que la gousse.", { z: 18, b: true, c: "#E65100" })}
  ${C("Dedans, les marchés ; dehors, les navires : les deux commerces du pays.", 545)}
</svg>`;
}

// S63 — Transport
function s63() {
  return `${H(1000, 560)}${T("Le transport et les voies de communication")}
  ${DEFS}
  ${t(500, 100, "« Une région sans route est un grenier sans porte. »", { z: 21, i: true, b: true, c: "#546E7A" })}
  <rect x="0" y="410" width="1000" height="60" fill="#EFEBE9"/>
  <rect x="0" y="430" width="1000" height="8" fill="#BCAAA4" stroke-dasharray="30 20"/>
  ${maison(60, 200, 1.4)}${maison(930, 200, 1.4)}
  ${fle(150, 170, 300, 170, "#546E7A", 6)}
  ${t(500, 160, "LES QUATRE CHEMINS DU PAYS", { z: 20, b: true })}
  ${t(200, 260, "LA ROUTE", { z: 17, b: true, c: "#E65100" })}
  ${t(200, 292, "taxis-brousse, camions :", { z: 15 })}
  ${t(200, 317, "voyageurs et sacs", { z: 15 })}
  ${t(500, 260, "LE RAIL", { z: 17, b: true, c: "#C62828" })}
  ${train(500, 350, 1.1)}
  ${t(500, 292, "le train Toamasina-Antananarivo", { z: 15 })}
  ${t(500, 317, "porte les conteneurs", { z: 15 })}
  ${t(800, 260, "LA MER ET L'AIR", { z: 17, b: true, c: "#01579B" })}
  ${navire(760, 390, 0.8)}${avion(870, 280, 1.1)}
  ${t(800, 292, "le port de Toamasina :", { z: 15 })}
  ${t(800, 317, "le commerce du monde ;", { z: 15 })}
  ${t(800, 342, "l'avion : visiteurs pressés", { z: 15 })}
  ${t(500, 500, "Désenclaver, c'est ouvrir le grenier : sans voies, pas de commerce, pas de développement.", { z: 19, b: true })}
  ${C("Route, rail, mer, air : les artères du pays.", 545)}
</svg>`;
}

// S64 — Nouvelle technologie et IA
function s64() {
  const tel = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-12" y="-22" width="24" height="44" rx="4" fill="#37474F" stroke="#263238" stroke-width="2"/><rect x="-9" y="-17" width="18" height="30" fill="#4FC3F7"/><circle cx="0" cy="17" r="3" fill="#FFF"/></g>`;
  const ordi = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-22" y="-18" width="44" height="30" rx="3" fill="#37474F"/><rect x="-18" y="-14" width="36" height="22" fill="#4FC3F7"/><rect x="-8" y="14" width="16" height="6" fill="#78909C"/></g>`;
  const robot = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-14" y="-8" width="28" height="26" rx="4" fill="#78909C" stroke="#455A64" stroke-width="2"/><rect x="-10" y="-26" width="20" height="16" rx="3" fill="#90A4AE" stroke="#455A64" stroke-width="2"/><circle cx="-4" cy="-18" r="2.5" fill="#C62828"/><circle cx="4" cy="-18" r="2.5" fill="#C62828"/><line x1="0" y1="-26" x2="0" y2="-34" stroke="#455A64" stroke-width="2"/><circle cx="0" cy="-36" r="3" fill="#FFD54F"/><line x1="-14" y1="0" x2="-26" y2="8" stroke="#455A64" stroke-width="3"/><line x1="14" y1="0" x2="26" y2="8" stroke="#455A64" stroke-width="3"/></g>`;
  return `${H(1000, 560)}${T("La nouvelle technologie et l'intelligence artificielle")}
  ${tel(160, 210, 1.8)}${ordi(390, 210, 1.6)}${robot(620, 210, 1.6)}
  ${t(160, 280, "le téléphone :", { z: 17, b: true })}
  ${t(160, 308, "voir loin,", { z: 15 })}
  ${t(160, 332, "payer, écrire", { z: 15 })}
  ${t(390, 280, "l'ordinateur :", { z: 17, b: true })}
  ${t(390, 308, "écrire, calculer,", { z: 15 })}
  ${t(390, 332, "dessiner", { z: 15 })}
  ${t(620, 280, "le robot :", { z: 17, b: true })}
  ${t(620, 308, "souder, emballer", { z: 15 })}
  ${t(620, 332, "sans se fatiguer", { z: 15 })}
  ${t(870, 205, "INTERNET", { z: 17, b: true, c: "#01579B" })}
  ${t(870, 235, "le grand réseau", { z: 15 })}
  ${t(870, 259, "qui relie tout", { z: 15 })}
  ${cadre(40, 370, 440, 120, "#E8F5E9")}
  ${t(260, 405, "AVANTAGES", { z: 17, b: true, c: "#1B5E20" })}
  ${t(260, 440, "parler loin, apprendre vite,", { z: 15 })}
  ${t(260, 465, "soigner, traduire, produire", { z: 15 })}
  ${cadre(520, 370, 440, 120, "#FFEBEE")}
  ${t(740, 405, "INCONVÉNIENTS", { z: 17, b: true, c: "#C00000" })}
  ${t(740, 440, "coût, dépendance, emplois", { z: 15 })}
  ${t(740, 465, "remplacés, erreurs à vérifier", { z: 15 })}
  ${t(500, 530, "L'intelligence artificielle apprend et aide — mais la machine aide, l'homme décide.", { z: 19, b: true })}
  ${C("Rester le maître de l'outil : voilà la règle.", 558)}
</svg>`;
}

const SVG = {
  geo6_zones_economiques: s51(),
  geo6_localisation_zones: s52(),
  geo6_cultures: s53(),
  geo6_cultures_industrielles: s54(),
  geo6_elevage: s55(),
  geo6_peche: s56(),
  geo6_foret_exploitation: s57(),
  geo6_mines_exploitation: s58(),
  geo6_artisanat: s59(),
  geo6_industrie: s60(),
  geo6_tourisme: s61(),
  geo6_commerce: s62(),
  geo6_transport: s63(),
  geo6_nouvelle_technologie: s64(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    fs.writeFileSync(path.join(OUT, "svg", `${name}.svg`), svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(REPO, `${name}.png`));
    console.log(`OK ${name}.png`);
  }
})();
