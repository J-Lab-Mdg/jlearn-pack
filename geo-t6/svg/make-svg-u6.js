// make-svg-u6.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 6
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

// ── Pictos additionnels U6 ─────────────────────────────────────────────
const goutte = (x, y, s = 1, f = "#4FC3F7") => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 -18 C 10 -4 14 2 14 8 A 14 14 0 1 1 -14 8 C -14 2 -10 -4 0 -18 Z" fill="${f}" stroke="#0277BD" stroke-width="2"/></g>`;
const poubelle = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-14" y="-8" width="28" height="26" rx="3" fill="#78909C" stroke="#455A64" stroke-width="2"/><rect x="-17" y="-12" width="34" height="5" rx="2" fill="#455A64"/><line x1="-6" y1="-2" x2="-6" y2="14" stroke="#455A64" stroke-width="2"/><line x1="6" y1="-2" x2="6" y2="14" stroke="#455A64" stroke-width="2"/></g>`;
const panneauSolaire = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-24" y="-16" width="48" height="32" fill="#01579B" stroke="#0277BD" stroke-width="2"/><line x1="0" y1="-16" x2="0" y2="16" stroke="#4FC3F7" stroke-width="2"/><line x1="-24" y1="0" x2="24" y2="0" stroke="#4FC3F7" stroke-width="2"/><line x1="-24" y1="-16" x2="-32" y2="-30" stroke="#546E7A" stroke-width="4"/><line x1="-24" y1="-16" x2="-14" y2="-30" stroke="#546E7A" stroke-width="4"/><line x1="0" y1="16" x2="0" y2="30" stroke="#546E7A" stroke-width="4"/></g>`;
const valiha = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><rect x="-8" y="-24" width="16" height="48" rx="8" fill="#D7A86E" stroke="#8D6E63" stroke-width="2"/><line x1="-5" y1="-20" x2="-5" y2="20" stroke="#5D4037" stroke-width="1.5"/><line x1="0" y1="-20" x2="0" y2="20" stroke="#5D4037" stroke-width="1.5"/><line x1="5" y1="-20" x2="5" y2="20" stroke="#5D4037" stroke-width="1.5"/><circle cx="-8" cy="-24" r="3" fill="#FFD54F"/><circle cx="8" cy="-24" r="3" fill="#FFD54F"/></g>`;
const note = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><circle cx="-6" cy="8" r="6" fill="#37474F"/><path d="M 0 8 L 0 -12 Q 8 -14 10 -8 Q 6 -8 4 -4 L 4 8" fill="none" stroke="#37474F" stroke-width="3"/></g>`;
const nuagePluie = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M -20 0 A 12 12 0 0 1 -14 -16 A 16 16 0 0 1 14 -14 A 11 11 0 0 1 20 0 Z" fill="#B3E5FC" stroke="#0288D1" stroke-width="2"/><line x1="-12" y1="8" x2="-15" y2="18" stroke="#4FC3F7" stroke-width="3" stroke-linecap="round"/><line x1="0" y1="8" x2="-3" y2="18" stroke="#4FC3F7" stroke-width="3" stroke-linecap="round"/><line x1="12" y1="8" x2="9" y2="18" stroke="#4FC3F7" stroke-width="3" stroke-linecap="round"/></g>`;
const fumee = (x, y, s = 1) => `<g transform="translate(${x},${y}) scale(${s})"><path d="M 0 0 Q -8 -12 0 -22 Q 8 -32 0 -42" fill="none" stroke="#90A4AE" stroke-width="5" stroke-linecap="round" opacity="0.7"/></g>`;
const cloture = (x1, y, x2, c = "#8D6E63") => { let s = `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${c}" stroke-width="3"/>`; for (let x = x1; x <= x2; x += 24) s += `<line x1="${x}" y1="${y - 10}" x2="${x}" y2="${y + 10}" stroke="${c}" stroke-width="3"/>`; return s; };
const hachure = (x, y, w, h) => `<defs><pattern id="hach" width="14" height="14" patternTransform="rotate(45)" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="0" y2="14" stroke="#EF6C00" stroke-width="3" opacity="0.5"/></pattern></defs><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#hach)" stroke="#EF6C00" stroke-width="2.5"/>`;

// S67 — La notion de village écologique
function s67() {
  const volet = (x, icone, titre, l1, l2, l3, f) => `
    ${cadre(x, 110, 290, 240, f)}
    ${icone}
    ${t(x + 145, 220, titre, { z: 20, b: true, c: "#1E7B34" })}
    ${t(x + 145, 260, l1, { z: 17 })}
    ${t(x + 145, 290, l2, { z: 17 })}
    ${t(x + 145, 320, l3, { z: 17 })}`;
  return `${H(1000, 620)}${DEFS}${T("Qu'est-ce qu'un village écologique ?")}
  ${volet(35, goutte(180, 165, 2.4), "L'EAU PROTÉGÉE", "source clôturée,", "linge lavé loin,", "eau claire pour tous", "#E1F5FE")}
  ${volet(355, arbre(500, 160, 1.7), "LA TERRE GÉRÉE", "colline replantée,", "déchets triés,", "rien au vent", "#E8F5E9")}
  ${volet(675, bonhomme(820, 160, 1.5, "#1E7B34"), "LES RÈGLES COMMUNES", "le Dina accepté", "par tous, appliqué", "par le fokontany", "#FFF8E1")}
  ${t(500, 415, "Un village qui gère et valorise ses ressources (eau, forêt, terre)", { z: 22, b: true })}
  ${t(500, 450, "selon des règles de vie communautaires,", { z: 22, b: true })}
  ${t(500, 485, "pour le bien des générations futures.", { z: 22, b: true })}
  ${fle(500, 505, 500, 505)}
  ${C("Penser à demain : voilà la règle du village écologique.", 560)}
</svg>`;
}

// S68 — L'organisation juridique du village
function s68() {
  return `${H(1000, 620)}${DEFS}${T("L'organisation juridique : le fokontany et l'assemblée")}
  ${cadre(280, 95, 440, 80, "#E8F5E9")}
  ${t(500, 128, "L'ASSEMBLÉE DES HABITANTS", { z: 21, b: true, c: "#1B5E20" })}
  ${t(500, 158, "discute et décide à main levée", { z: 16, i: true, c: "#546E7A" })}
  ${fle(500, 185, 500, 240, "#1E7B34", 5, "afV")}
  ${t(560, 218, "élit et approuve", { z: 15, c: "#1E7B34" })}
  ${cadre(280, 250, 440, 90, "#E1F5FE")}
  ${bonhomme(360, 300, 1.5, "#01579B")}
  ${t(555, 290, "LE CHEF DU FOKONTANY", { z: 21, b: true, c: "#01579B" })}
  ${t(555, 320, "organise et applique les décisions", { z: 16, i: true, c: "#546E7A" })}
  ${t(555, 345, "ex. : Rakotomalala", { z: 15, i: true, c: "#546E7A" })}
  ${fle(280, 295, 220, 295, "#546E7A")}
  ${t(250, 280, "conseillent", { z: 15, c: "#546E7A" })}
  ${cadre(35, 95, 210, 250, "#FFF8E1")}
  ${t(140, 125, "LES NOTABLES", { z: 18, b: true, c: "#E65100" })}
  ${bonhomme(70, 165, 1.1, "#E65100")}${t(140, 170, "la doyenne Soa", { z: 15 })}
  ${bonhomme(70, 215, 1.1, "#E65100")}${t(140, 220, "l'ancien instituteur", { z: 15 })}
  ${bonhomme(70, 265, 1.1, "#E65100")}${t(140, 270, "la sage-femme", { z: 15 })}
  ${bonhomme(70, 315, 1.1, "#E65100")}${t(140, 320, "le rép. des jeunes", { z: 15 })}
  ${cadre(560, 380, 400, 110, "#F3E5F5")}
  ${t(760, 415, "LES MISSIONS DU FOKONTANY", { z: 17, b: true, c: "#6A1B9A" })}
  ${t(760, 448, "état civil, paix sociale, travaux", { z: 15 })}
  ${t(760, 473, "communs, application du Dina", { z: 15 })}
  ${cadre(60, 380, 440, 110, "#ECEFF1")}
  ${t(280, 412, "LA STRUCTURE ADMINISTRATIVE DE BASE", { z: 16, b: true })}
  ${t(280, 445, "le quartier, le hameau, le village :", { z: 15 })}
  ${t(280, 470, "la plus petite cellule du pays", { z: 15 })}
  ${t(500, 545, "Les notables conseillent, le chef applique, l'assemblée décide.", { z: 20, b: true })}
</svg>`;
}

// S69 — Le Dina
function s69() {
  const etape = (x, num, titre, l1, l2, f, icone) => `
    ${cadre(x, 130, 280, 220, f)}
    ${icone}
    ${t(x + 140, 165, num, { z: 15, b: true, c: "#546E7A" })}
    ${t(x + 140, 200, titre, { z: 19, b: true, c: "#C00000" })}
    ${t(x + 140, 240, l1, { z: 16 })}
    ${t(x + 140, 270, l2, { z: 16 })}`;
  return `${H(1000, 620)}${DEFS}${T("Le Dina : règle, faute, réparation, réconciliation")}
  ${cadre(120, 85, 760, 40, "#FFF8E1")}
  ${t(500, 112, "LE DINA : les règles de vie écrites et acceptées par toute la communauté", { z: 18, b: true, c: "#E65100" })}
  ${etape(45, "ÉTAPE 1", "LA FAUTE", "couper un arbre", "de la source", "#FFEBEE", arbre(185, 175, 1.3, "#8D6E63"))}
  ${fle(330, 240, 390, 240, "#C00000", 5, "afR")}
  ${etape(400, "ÉTAPE 2", "LA RÉPARATION", "payer un zébu", "à la communauté", "#FFF3E0", zebu(540, 175, 1.2))}
  ${fle(685, 240, 745, 240, "#1E7B34", 5, "afV")}
  ${etape(760, "ÉTAPE 3", "LA RÉCONCILIATION", "poignée de main :", "la paix revient", "#E8F5E9", bonhomme(830, 180, 1.2, "#1B5E20"))}
  ${bonhomme(900, 180, 1.2, "#1B5E20")}
  ${fle(855, 185, 875, 185, "#1B5E20", 3, "afV")}
  ${t(500, 400, "La sanction du Dina n'humilie personne : le coupable répare,", { z: 20, b: true })}
  ${t(500, 432, "puis le village se réconcilie et tourne la page.", { z: 20, b: true })}
  ${t(500, 500, "Affiché au bureau du fokontany, le Dina protège l'eau, la forêt et la paix.", { z: 17 })}
  ${C("Réparer plutôt que punir : voilà l'esprit du Dina.", 560)}
</svg>`;
}

// S70 — Modes de vie et loisirs
function s70() {
  return `${H(1000, 620)}${DEFS}${T("Une journée au village : entraide le matin, loisirs le soir")}
  ${cadre(35, 100, 440, 300, "#E8F5E9")}
  ${soleil(100, 150, 22)}
  ${t(280, 130, "LE MATIN — L'ENTRAIDE", { z: 20, b: true, c: "#1B5E20" })}
  ${maison(110, 210, 1.2)}${t(250, 205, "relever le toit", { z: 15 })}${t(250, 228, "de la veuve Ravao", { z: 15 })}
  ${bonhomme(110, 300, 1.1, "#1B5E20")}${t(250, 295, "battre le riz ensemble", { z: 15 })}${t(250, 318, "au rythme des pilons", { z: 15 })}
  ${poubelle(110, 380, 0.9)}${t(250, 375, "garder le dépôt", { z: 15 })}${t(250, 398, "du tri", { z: 15 })}
  ${cadre(525, 100, 440, 300, "#F3E5F5")}
  ${t(745, 130, "LE SOIR — LES LOISIRS", { z: 20, b: true, c: "#6A1B9A" })}
  ${bonhomme(600, 200, 1.1, "#6A1B9A")}${t(745, 195, "le kabary des anciens,", { z: 15 })}${t(745, 218, "l'art de bien parler", { z: 15 })}
  ${valiha(600, 290, 1)}${t(745, 285, "le valiha de l'oncle Rivo", { z: 15 })}${t(745, 308, "fait danser les filles", { z: 15 })}
  ${balle(600, 370, 14, "#C0553B")}${t(745, 365, "les enfants courent", { z: 15 })}${t(745, 388, "après le ballon de raphia", { z: 15 })}
  ${fle(490, 250, 510, 250, "#546E7A")}
  ${t(500, 470, "Travailler ensemble, s'amuser ensemble :", { z: 21, b: true })}
  ${t(500, 502, "voilà la richesse sociale du village.", { z: 21, b: true })}
  ${C("L'entraide fait les gros travaux ; les loisirs reposent les corps et rapprochent les familles.", 560)}
</svg>`;
}

// S71 — Les activités économiques du village écologique
function s71() {
  const act = (x, y, icone, nom) => `${icone}${t(x, y, nom, { z: 15, b: true })}`;
  return `${H(1000, 620)}${DEFS}${T("Les activités économiques du village écologique")}
  ${cadre(60, 95, 880, 330, "#F1F8E9")}
  ${riviere(80, 250, 320, 220)}
  ${t(180, 195, "la source clôturée", { z: 14, i: true, c: "#0277BD" })}
  ${cloture(100, 260, 300)}
  ${act(150, 330, champ(110, 300, 130, 60, 3), "les rizières propres")}
  ${act(400, 300, poisson(370, 260, 1.1), "l'étang piscicole")}
  ${ellipseEtang(370, 265)}
  ${act(400, 420, sac(370, 400, 1.3, "#FFE0B2"), "l'atelier de raphia")}
  ${act(640, 330, epi(620, 330, 1.4), "le séchoir à gingembre")}
  ${act(640, 180, panneauSolaire(640, 150, 0.8), "le panneau solaire")}
  ${act(860, 300, parasol(860, 280, 1.1), "l'écotourisme")}
  ${bonhomme(860, 360, 1.1, "#1B5E20")}
  ${t(500, 470, "Produire aujourd'hui sans épuiser les ressources de demain :", { z: 20, b: true })}
  ${t(500, 500, "agriculture propre, transformation, énergie, accueil des visiteurs.", { z: 20, b: true })}
  ${C("Chaque activité respecte l'eau, la terre et la forêt du village.", 560)}
</svg>`;
}
const ellipseEtang = (cx, cy) => `<ellipse cx="${cx}" cy="${cy}" rx="70" ry="26" fill="#4FC3F7" stroke="#0288D1" stroke-width="2"/>`;

// S72 — L'habitation et l'architecture
function s72() {
  return `${H(1000, 620)}${DEFS}${T("La maison bien construite : pensée pour le climat")}
  ${nuagePluie(150, 120, 1.2)}
  ${t(150, 185, "la pluie glisse", { z: 14, i: true, c: "#0277BD" })}
  ${t(150, 207, "loin des murs", { z: 14, i: true, c: "#0277BD" })}
  ${maisonGrande(500, 330)}
  ${soleil(870, 120, 24)}
  ${t(870, 185, "la véranda regarde", { z: 14, i: true, c: "#E65100" })}
  ${t(870, 207, "le soleil levant", { z: 14, i: true, c: "#E65100" })}
  ${fle(830, 170, 740, 250, "#F9A825", 5, "afV")}
  ${t(150, 330, "l'air traverse", { z: 14, i: true, c: "#1B5E20" })}
  ${t(150, 352, "par les fenêtres", { z: 14, i: true, c: "#1B5E20" })}
  ${t(150, 374, "en face à face", { z: 14, i: true, c: "#1B5E20" })}
  ${fle(205, 345, 330, 345, "#1E7B34", 5, "afV")}
  ${fle(700, 345, 600, 345, "#1E7B34", 5, "afV")}
  ${t(500, 480, "Murs de brique cuite du pays, toit débordant, fenêtres croisées,", { z: 19, b: true })}
  ${t(500, 510, "véranda au bon soleil, cuisine séparée avec cheminée.", { z: 19, b: true })}
  ${C("La maison travaille avec le climat, jamais contre lui.", 560)}
</svg>`;
}
const maisonGrande = (cx, cy) => `<g transform="translate(${cx},${cy})">
  <path d="M -190 -40 L 0 -140 L 190 -40 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="3"/>
  <path d="M -230 -35 L -190 -62 L -160 -40 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/>
  <path d="M 160 -40 L 190 -62 L 230 -35 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/>
  <rect x="-160" y="-40" width="320" height="130" fill="#FFE0B2" stroke="#8D6E63" stroke-width="3"/>
  <rect x="-120" y="-10" width="36" height="36" fill="#B3E5FC" stroke="#5D4037" stroke-width="2"/>
  <rect x="84" y="-10" width="36" height="36" fill="#B3E5FC" stroke="#5D4037" stroke-width="2"/>
  <rect x="-10" y="20" width="40" height="70" fill="#8D6E63" stroke="#5D4037" stroke-width="2"/>
  <path d="M 190 -40 L 300 -40 L 300 90 L 190 90 Z" fill="#FFF3E0" stroke="#8D6E63" stroke-width="3"/>
  ${fumee(255, -60, 1)}
  ${t(255, 120, "cuisine séparée", { z: 13, i: true, c: "#546E7A" })}
  ${t(-100, 50, "séjour", { z: 13, i: true, c: "#546E7A" })}
</g>`;

// S73 — Infrastructures économiques et sites naturels
function s73() {
  return `${H(1000, 620)}${DEFS}${T("Aménager sans abîmer : infrastructures et sites naturels")}
  ${cadre(35, 100, 520, 330, "#E1F5FE")}
  ${t(295, 130, "LES INFRASTRUCTURES ÉCONOMIQUES", { z: 17, b: true, c: "#01579B" })}
  <path d="M 60 320 L 300 320 L 300 190 L 500 190" fill="none" stroke="#6D4C41" stroke-width="14" stroke-linecap="round"/>
  <path d="M 60 335 L 300 335 L 300 205 L 500 205" fill="none" stroke="#A1887F" stroke-width="4" stroke-dasharray="10 10"/>
  ${t(110, 300, "la route", { z: 14, b: true })}
  ${maison(300, 260, 1.4, "#B3E5FC")}${t(390, 250, "le marché", { z: 14, b: true })}${t(390, 272, "couvert", { z: 14, b: true })}
  ${immeuble(300, 390, 0.5)}${t(390, 380, "les ateliers et", { z: 14, b: true })}${t(390, 402, "le dépôt frais", { z: 14, b: true })}
  ${t(295, 440, "faire circuler les richesses", { z: 15, i: true, c: "#546E7A" })}
  ${cadre(595, 100, 370, 330, "#E8F5E9")}
  ${t(780, 130, "LES SITES NATURELS PROTÉGÉS", { z: 17, b: true, c: "#1B5E20" })}
  <path d="M 700 190 L 700 260 Q 760 300 820 260 L 860 190 Z" fill="#B3E5FC" stroke="#0288D1" stroke-width="3"/>
  ${t(780, 185, "la cascade sacrée", { z: 14, b: true })}
  ${arbre(670, 380, 1)}${arbre(740, 395, 0.8)}${arbre(880, 385, 0.9)}
  ${cloture(650, 415, 910, "#2E7D32")}
  ${t(780, 440, "haie vive, sentier balisé, Dina", { z: 15, i: true, c: "#546E7A" })}
  ${t(500, 490, "Aménager ce qui rapporte (route, marché, ateliers),", { z: 20, b: true })}
  ${t(500, 520, "protéger ce qui est sacré et beau (cascade, source, forêt).", { z: 20, b: true })}
  ${C("Les visiteurs viennent justement parce que les trésors sont restés sauvages.", 575)}
</svg>`;
}

// S74 — Normes (1) : environnement et topographie
function s74() {
  return `${H(1000, 620)}${DEFS}${T("La topographie commande : lire le terrain avant de bâtir")}
  <path d="M 60 400 Q 300 180 560 400 Z" fill="#AED581" stroke="#689F38" stroke-width="3"/>
  <path d="M 130 400 Q 300 280 470 400" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="8 6"/>
  <path d="M 190 400 Q 300 330 410 400" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="8 6"/>
  ${maison(240, 355, 0.55)}${maison(300, 330, 0.55)}${maison(355, 355, 0.55)}
  ${t(300, 195, "la colline : maisons", { z: 15, b: true })}
  ${t(300, 217, "en courbes, jamais", { z: 15, b: true })}
  ${t(300, 239, "en ligne droite", { z: 15, b: true })}
  ${champ(590, 330, 180, 70, 4)}
  ${t(680, 305, "le bas-fond :", { z: 15, b: true })}
  ${t(680, 327, "les rizières", { z: 15, b: true })}
  ${riviere(560, 440, 950, 410)}
  ${arbre(620, 425, 0.8)}${arbre(760, 415, 0.8)}${arbre(890, 428, 0.8)}
  ${t(750, 480, "les berges plantées retiennent la terre", { z: 14, i: true, c: "#1B5E20" })}
  ${fle(920, 210, 920, 320, "#546E7A", 5)}
  ${t(920, 195, "le vent traverse", { z: 14, i: true, c: "#546E7A" })}
  ${t(920, 345, "les rues du village", { z: 14, i: true, c: "#546E7A" })}
  ${cadre(60, 455, 500, 75, "#FFEBEE")}
  ${t(310, 487, "NORMES : ne pas bâtir en bas-fond,", { z: 16, b: true, c: "#C00000" })}
  ${t(310, 515, "planter les berges, trier, replanter", { z: 16, b: true, c: "#C00000" })}
  ${C("Le village s'adapte à la nature au lieu de la bousculer.", 575)}
</svg>`;
}

// S75 — Normes (2) : traditions et implantation
function s75() {
  return `${H(1000, 620)}${DEFS}${T("L'implantation des équipements : traditions et raison")}
  ${hachure(40, 100, 200, 140)}
  ${t(140, 150, "LA COLLINE", { z: 15, b: true, c: "#E65100" })}
  ${t(140, 172, "DES ANCÊTRES", { z: 15, b: true, c: "#E65100" })}
  ${t(140, 200, "tombes, bosquet :", { z: 13, i: true })}
  ${t(140, 220, "FADY, on ne touche pas", { z: 13, i: true })}
  ${cadre(300, 100, 400, 140, "#E1F5FE")}
  ${goutte(380, 165, 1.3)}
  ${t(560, 150, "LE POINT D'EAU", { z: 16, b: true, c: "#01579B" })}
  ${t(560, 178, "au centre des maisons :", { z: 14 })}
  ${t(560, 200, "cent pas au plus", { z: 14 })}
  ${cadre(750, 100, 210, 140, "#ECEFF1")}
  ${t(855, 150, "L'ÉCOLE", { z: 16, b: true })}
  ${t(855, 178, "au calme, loin", { z: 14 })}
  ${t(855, 200, "du marché", { z: 14 })}
  ${maison(800, 235, 0.9, "#FFF9C4")}
  ${cadre(300, 270, 220, 120, "#E8F5E9")}
  ${t(410, 315, "L'ESPACE CULTUREL", { z: 15, b: true, c: "#1B5E20" })}
  ${t(410, 345, "face à la colline", { z: 14 })}
  ${t(410, 367, "des ancêtres", { z: 14 })}
  ${note(370, 300, 0.9)}
  ${cadre(570, 270, 220, 120, "#FFF8E1")}
  ${t(680, 315, "LES SANITAIRES", { z: 15, b: true, c: "#E65100" })}
  ${t(680, 345, "en contrebas", { z: 14 })}
  ${t(680, 367, "des sources", { z: 14 })}
  ${fle(680, 250, 680, 285, "#0277BD", 4, "afB")}
  ${riviere(560, 240, 800, 240)}
  ${t(680, 225, "la source", { z: 13, i: true, c: "#0277BD" })}
  ${fle(250, 170, 330, 170, "#EF6C00", 4)}
  ${t(290, 155, "regardent", { z: 13, c: "#E65100" })}
  ${cadre(40, 430, 920, 80, "#F3E5F5")}
  ${t(500, 462, "Les traditions (fady, lieux sacrés) et la raison placent chaque équipement", { z: 17, b: true })}
  ${t(500, 490, "à sa juste place : le village moderne reste le village des ancêtres.", { z: 17, b: true })}
  ${C("L'assemblée approuve le plan à main levée, puis il entre au grand cahier.", 570)}
</svg>`;
}

// S76 — Comparaison et maquette
function s76() {
  return `${H(1000, 620)}${DEFS}${T("Comparer : le village d'avant et le village écologique")}
  ${cadre(35, 100, 440, 330, "#FFEBEE")}
  ${t(255, 130, "LE VILLAGE D'AVANT", { z: 18, b: true, c: "#C00000" })}
  <path d="M 90 330 Q 200 180 340 330 Z" fill="#D7CCC8" stroke="#A1887F" stroke-width="3"/>
  ${t(215, 230, "colline nue,", { z: 14, b: true })}
  ${t(215, 252, "ravins rouges", { z: 14, b: true })}
  ${poubelle(120, 380, 1)}${t(280, 375, "déchets au vent,", { z: 14 })}
  ${fumee(380, 330, 1.2)}${t(280, 405, "foyers qui fument", { z: 14 })}
  ${cadre(525, 100, 440, 330, "#E8F5E9")}
  ${t(745, 130, "LE VILLAGE ÉCOLOGIQUE", { z: 18, b: true, c: "#1B5E20" })}
  <path d="M 580 330 Q 690 180 830 330 Z" fill="#AED581" stroke="#689F38" stroke-width="3"/>
  ${arbre(650, 270, 0.8)}${arbre(730, 290, 0.7)}${arbre(790, 260, 0.6)}
  ${t(745, 230, "colline replantée,", { z: 14, b: true })}
  ${t(745, 252, "la terre tient", { z: 14, b: true })}
  ${panneauSolaire(610, 395, 0.6)}${t(745, 375, "déchets triés,", { z: 14 })}
  ${t(745, 405, "énergie propre", { z: 14 })}
  ${fle(480, 265, 520, 265, "#546E7A", 6)}
  ${t(500, 250, "le défi", { z: 15, b: true, i: true, c: "#546E7A" })}
  ${t(500, 480, "Sur la maquette du village, chaque différence se voit d'un coup d'œil :", { z: 19, b: true })}
  ${t(500, 510, "l'eau, la terre, l'air, l'énergie — et la vie avec.", { z: 19, b: true })}
  ${C("Comparer, c'est comprendre : la maquette convainc mieux que mille discours.", 570)}
</svg>`;
}

const SVG = {
  geo6_village_ecologique_notion: s67(),
  geo6_organisation_juridique: s68(),
  geo6_dina: s69(),
  geo6_modes_vie_loisirs: s70(),
  geo6_activites_village_eco: s71(),
  geo6_habitation_architecture: s72(),
  geo6_infrastructures_sites: s73(),
  geo6_normes_environnement_topographie: s74(),
  geo6_normes_traditions: s75(),
  geo6_maquette_compare: s76(),
};

(async () => {
  fs.mkdirSync(path.join(OUT, "svg"), { recursive: true });
  for (const [name, svg] of Object.entries(SVG)) {
    fs.writeFileSync(path.join(OUT, "svg", `${name}.svg`), svg);
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(REPO, `${name}.png`));
    console.log(`OK ${name}.png`);
  }
})();
