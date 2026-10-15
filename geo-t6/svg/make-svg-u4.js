// make-svg-u4.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 4
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
const fleche = (x1, y1, x2, y2, c = "#546E7A", sw = 5, m = "af") =>
  `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${sw}" marker-end="url(#${m})"/>`;

const defsArrow = `<defs>
<marker id="af" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#546E7A"/></marker>
<marker id="afR" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#C00000"/></marker>
<marker id="afV" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#1E7B34"/></marker>
<marker id="afO" markerWidth="12" markerHeight="12" refX="9" refY="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 Z" fill="#E65100"/></marker>
</defs>`;

// pictos réutilisables
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
const arbre = (x, y, s = 1, f = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="8" width="8" height="20" fill="#6D4C41"/>
    <circle cx="0" cy="0" r="18" fill="${f}"/><circle cx="-13" cy="8" r="13" fill="${f}"/><circle cx="13" cy="8" r="13" fill="${f}"/>
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
const zebu = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="24" ry="13" fill="#8D6E63"/>
    <circle cx="26" cy="-10" r="8" fill="#8D6E63"/>
    <path d="M 20 -16 L 26 -26 L 32 -16" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/>
    <path d="M -24 -2 Q -34 -14 -26 -20" fill="none" stroke="#5D4037" stroke-width="4" stroke-linecap="round"/>
    <line x1="-12" y1="12" x2="-12" y2="24" stroke="#5D4037" stroke-width="4"/>
    <line x1="10" y1="12" x2="10" y2="24" stroke="#5D4037" stroke-width="4"/>
  </g>`;
const lune = (cx, cy, r) => `
  <path d="M ${cx} ${cy - r} A ${r} ${r} 0 1 0 ${cx} ${cy + r} A ${r - r * 0.55} ${r} 0 1 1 ${cx} ${cy - r} Z" fill="#FFE082" stroke="#F9A825" stroke-width="3"/>`;
const champ = (x, y, w, h, lignes = 5) => {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="#AED581" stroke="#689F38" stroke-width="2"/>`;
  for (let i = 1; i < lignes; i++) s += `<line x1="${x}" y1="${y + (h / lignes) * i}" x2="${x + w}" y2="${y + (h / lignes) * i}" stroke="#689F38" stroke-width="2"/>`;
  return s;
};

// ── S39. La notion d'exode rural ────────────────────────────────────────
function svgExodeNotion() {
  return `${svgHeader(1000, 560)}
  ${defsArrow}${titreSvg("L'exode rural : quitter la campagne pour la ville, pour toujours")}
  ${cadre(40, 110, 380, 300, "#E8F5E9")}
  ${txt(230, 148, "LA CAMPAGNE", { size: 20, bold: true, fill: "#1B5E20" })}
  ${champ(80, 190, 130, 90)}
  ${arbre(250, 210, 0.9)}${maison(320, 230, 0.9)}
  ${bonhomme(150, 330, 1.2, "#78909C")}${bonhomme(200, 335, 1.2, "#78909C")}
  ${txt(230, 385, "ceux qui restent : anciens, femmes, enfants", { size: 15, italic: true })}
  ${cadre(580, 110, 380, 300, "#E3F2FD")}
  ${txt(770, 148, "LA VILLE", { size: 20, bold: true, fill: "#01579B" })}
  ${immeuble(700, 260, 1)}${immeuble(800, 270, 0.8)}${maison(880, 280, 0.8, "#BBDEFB")}
  ${bonhomme(640, 340, 1.2)}${bonhomme(700, 345, 1.2)}${bonhomme(760, 340, 1.2)}${bonhomme(820, 345, 1.2)}
  ${txt(770, 385, "les arrivants s'entassent dans les quartiers", { size: 15, italic: true })}
  ${bonhomme(500, 210, 2.2, "#5D4037")}
  ${txt(500, 130, "UN DÉPART DÉFINITIF", { size: 19, bold: true, fill: "#C00000" })}
  ${fleche(440, 250, 560, 250, "#C00000", 8, "afR")}
  ${txt(500, 290, "valise, natte, sacs :", { size: 16, italic: true })}
  ${txt(500, 314, "on ne revient plus vivre au village", { size: 16, italic: true })}
  ${txt(500, 480, "L'exode rural, c'est le départ définitif des campagnes vers les villes.", { size: 21, bold: true })}
  ${txt(500, 510, "(Ne pas confondre avec le mouvement pendulaire : l'aller-retour quotidien.)", { size: 17, italic: true, fill: "#546E7A" })}
  ${caption("Un seul sens, et pour toujours : voilà l'exode rural.", 545)}
</svg>`;
}

// ── S40. Causes : la pauvreté et le chômage ────────────────────────────
function svgExodePauvrete() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Causes de l'exode (1) : la pauvreté et le chômage")}
  ${cadre(40, 100, 450, 290, "#FFF8E1")}
  ${txt(265, 138, "DES CHAMPS DE PLUS EN PLUS PETITS", { size: 18, bold: true, fill: "#E65100" })}
  <rect x="80" y="170" width="160" height="80" fill="#AED581" stroke="#689F38" stroke-width="2"/>
  ${txt(160, 216, "le champ du père", { size: 14, fill: "#33691E" })}
  ${txt(300, 215, "partagé entre 5 fils →", { size: 14, italic: true, fill: "#546E7A" })}
  ${[0, 1, 2, 3, 4].map((i) => `<rect x="${410 + (i % 3) * 32}" y="${170 + Math.floor(i / 3) * 44}" width="28" height="40" fill="#AED581" stroke="#689F38" stroke-width="2"/>`).join("")}
  ${txt(470, 280, "5 lopins minuscules", { size: 14, fill: "#33691E" })}
  ${txt(265, 330, "2 sacs de riz par an :", { size: 17 })}
  ${txt(265, 356, "la terre ne nourrit plus → pauvreté", { size: 17, bold: true, fill: "#C00000" })}
  ${cadre(510, 100, 450, 290, "#FFEBEE")}
  ${txt(735, 138, "AUCUN AUTRE TRAVAIL AU VILLAGE", { size: 18, bold: true, fill: "#C00000" })}
  ${txt(735, 195, "Ni usine, ni atelier, ni bureau :", { size: 18 })}
  ${txt(735, 227, "la terre est le seul employeur.", { size: 18 })}
  ${txt(735, 290, "Les jeunes attendent, sans emploi :", { size: 18 })}
  ${txt(735, 322, "c'est le chômage.", { size: 19, bold: true, fill: "#C00000" })}
  ${txt(500, 440, "Pauvreté et chômage poussent les jeunes vers les villes,", { size: 20, bold: true })}
  ${txt(500, 470, "où l'on croit trouver un salaire chaque semaine.", { size: 20, bold: true })}
  ${caption("Terres trop petites, aucun autre travail : les premières causes du départ.", 545)}
</svg>`;
}

// ── S41. Causes : l'insécurité et les problèmes fonciers ───────────────
function svgExodeInsecurite() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Causes de l'exode (2) : l'insécurité et les problèmes fonciers")}
  ${cadre(40, 100, 450, 310, "#ECEFF1")}
  ${txt(265, 138, "L'INSÉCURITÉ LA NUIT", { size: 19, bold: true, fill: "#C00000" })}
  <rect x="60" y="160" width="410" height="170" rx="14" fill="#37474F"/>
  ${lune(410, 200, 20)}
  ${zebu(180, 265, 1.4)}${zebu(280, 275, 1.2)}
  ${bonhomme(360, 250, 1.4, "#FFB74D")}
  ${txt(265, 360, "Des voleurs emmènent les zébus ;", { size: 17, fill: "#ECEFF1" })}
  ${txt(265, 380, "les jeunes veillent jusqu'au matin.", { size: 15, fill: "#ECEFF1" })}
  ${txt(265, 425, "Fatigués, effrayés → certains partent.", { size: 17, bold: true, fill: "#C00000" })}
  ${txt(735, 360, "Terre cultivée 40 ans, sans papier…", { size: 17 })}
  ${txt(735, 390, "reprise en une semaine par des cousins.", { size: 17 })}
  ${txt(735, 425, "Sans titre, la terre est fragile → on part.", { size: 17, bold: true, fill: "#C00000" })}
  ${cadre(510, 100, 450, 310, "#FFF8E1")}
  ${txt(735, 138, "LES TERRES SANS PAPIER", { size: 19, bold: true, fill: "#E65100" })}
  <rect x="650" y="170" width="180" height="120" rx="8" fill="#FFFAF0" stroke="#8D6E63" stroke-width="3"/>
  <line x1="665" y1="200" x2="815" y2="200" stroke="#B0A08C" stroke-width="2"/>
  <line x1="665" y1="230" x2="815" y2="230" stroke="#B0A08C" stroke-width="2"/>
  <line x1="665" y1="260" x2="815" y2="260" stroke="#B0A08C" stroke-width="2"/>
  ${txt(740, 192, "titre de terre :", { size: 13, fill: "#8D6E63" })}
  ${txt(740, 222, "AUCUN", { size: 22, bold: true, fill: "#C00000" })}
  ${txt(740, 252, "?", { size: 30, bold: true, fill: "#C00000" })}
  ${txt(740, 320, "un conflit d'héritage suffit à tout perdre", { size: 15, italic: true, fill: "#546E7A" })}
  ${txt(500, 480, "On part pour être tranquille : l'insécurité et les conflits de terre chassent les ruraux.", { size: 19, bold: true })}
  ${caption("Insécurité et problèmes fonciers : d'autres causes de l'exode rural.", 545)}
</svg>`;
}

// ── S42. Causes : le manque d'infrastructures ──────────────────────────
function svgExodeInfrastructures() {
  const ligne = (y, ok, t) => `
    ${ok ? `<circle cx="90" cy="${y}" r="14" fill="#C62828"/>` : `<circle cx="90" cy="${y}" r="14" fill="#2E7D32"/>`}
    ${txt(120, y + 6, t, { size: 17, anchor: "start" })}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Causes de l'exode (3) : le manque d'infrastructures")}
  ${defsArrow}
  ${cadre(40, 100, 450, 330, "#FFEBEE")}
  ${txt(265, 138, "AU VILLAGE, IL MANQUE…", { size: 19, bold: true, fill: "#C00000" })}
  ${ligne(185, true, "la piste coupée en saison des pluies")}
  ${ligne(230, true, "le collège à 30 km, la pension chère")}
  ${ligne(275, true, "le dispensaire sans médicaments")}
  ${ligne(320, true, "l'eau à la source, la lampe à pétrole")}
  ${txt(265, 390, "Chaque geste du quotidien devient un effort.", { size: 16, italic: true, fill: "#546E7A" })}
  ${cadre(510, 100, 450, 330, "#E3F2FD")}
  ${txt(735, 138, "LA VILLE OFFRE…", { size: 19, bold: true, fill: "#01579B" })}
  ${ligne(185, false, "des écoles de tous les niveaux")}
  ${ligne(230, false, "des hôpitaux et des dispensaires")}
  ${ligne(275, false, "l'eau au robinet, l'électricité")}
  ${ligne(320, false, "des routes goudronnées, des marchés")}
  ${txt(735, 390, "Le confort que le village promet à peine.", { size: 16, italic: true, fill: "#546E7A" })}
  ${fleche(500, 460, 500, 460)}
  ${txt(500, 460, "Plus l'écart grandit, plus les familles partent.", { size: 21, bold: true })}
  ${caption("Sans routes, écoles, eau ni soins, la vie à la campagne devient trop dure.", 545)}
</svg>`;
}

// ── S43. Conséquences rurales : la main-d'œuvre manque ─────────────────
function svgExodeMainOeuvre() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Conséquence (1) : la main-d'œuvre manque à la campagne")}
  ${cadre(40, 100, 450, 300, "#E8F5E9")}
  ${txt(265, 138, "AVANT : LE CHAMP PLEIN DE BRAS", { size: 17, bold: true, fill: "#1B5E20" })}
  ${champ(80, 175, 370, 130, 4)}
  ${bonhomme(140, 300, 1.3, "#33691E")}${bonhomme(200, 310, 1.3, "#33691E")}${bonhomme(260, 300, 1.3, "#33691E")}
  ${bonhomme(330, 310, 1.3, "#33691E")}${bonhomme(390, 300, 1.3, "#33691E")}
  ${txt(265, 365, "labour, repiquage, récolte, digues :", { size: 16 })}
  ${txt(265, 390, "les jeunes faisaient tout.", { size: 16 })}
  ${cadre(510, 100, 450, 300, "#FFEBEE")}
  ${txt(735, 138, "AUJOURD'HUI : LE CHAMP DÉLAISSÉ", { size: 17, bold: true, fill: "#C00000" })}
  <rect x="550" y="175" width="370" height="130" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2"/>
  ${[[600, 210], [660, 235], [730, 200], [800, 240], [870, 215], [630, 280], [720, 285], [830, 285]].map(([x, y]) => `<path d="M ${x - 14} ${y} Q ${x} ${y - 26} ${x + 14} ${y}" fill="none" stroke="#A1887F" stroke-width="3" stroke-linecap="round"/><line x1="${x}" y1="${y}" x2="${x}" y2="${y + 14}" stroke="#A1887F" stroke-width="3"/>`).join("")}
  ${txt(735, 340, "herbes sauvages, digues cassées :", { size: 16, fill: "#C00000" })}
  ${txt(735, 365, "plus personne pour cultiver.", { size: 16, fill: "#C00000" })}
  ${bonhomme(300, 450, 1.5, "#78909C")}
  ${txt(500, 435, "Il reste les anciens, seuls face aux champs : « À soixante ans, je n'ai plus la force de tout faire. »", { size: 17, bold: true })}
  ${txt(500, 495, "Sans main-d'œuvre, les récoltes baissent et les services ferment.", { size: 19, bold: true, fill: "#C00000" })}
  ${caption("Le départ des bras valides laisse les champs à l'abandon.", 545)}
</svg>`;
}

// ── S44. Conséquences rurales : le retard et le cercle vicieux ─────────
function svgExodeRetard() {
  const bloc = (cx, cy, t1, t2, f, tc) => `
    <rect x="${cx - 170}" y="${cy - 45}" width="340" height="90" rx="14" fill="${f}" stroke="#90A4AE" stroke-width="3"/>
    ${txt(cx, cy - 12, t1, { size: 18, bold: true, fill: tc })}
    ${txt(cx, cy + 20, t2, { size: 15 })}`;
  return `${svgHeader(1000, 620)}
  ${defsArrow}${titreSvg("Conséquence (2) : le cercle vicieux de l'exode rural")}
  ${bloc(500, 175, "LE VILLAGE S'APPAUVRIT", "récoltes et ventes en baisse, services fermés", "#FFEBEE", "#C00000")}
  ${bloc(280, 450, "LES HABITANTS PARTENT", "vers la ville : « on vivra mieux là-bas »", "#FFF8E1", "#E65100")}
  ${bloc(720, 450, "LES BRAS ET LES CLIENTS MANQUENT", "chantiers arrêtés, économie en difficulté", "#ECEFF1", "#546E7A")}
  ${fleche(410, 230, 350, 395, "#546E7A", 6)}
  ${txt(330, 300, "donc…", { size: 16, italic: true })}
  ${fleche(450, 455, 550, 455, "#546E7A", 6)}
  ${txt(500, 435, "donc…", { size: 16, italic: true })}
  ${fleche(650, 395, 590, 230, "#546E7A", 6)}
  ${txt(680, 300, "…et tout recommence !", { size: 16, bold: true, italic: true, fill: "#C00000" })}
  ${txt(500, 420, "LE CERCLE", { size: 22, bold: true, fill: "#546E7A" })}
  ${txt(500, 450, "VICIEUX", { size: 22, bold: true, fill: "#546E7A" })}
  <rect x="290" y="545" width="420" height="60" rx="14" fill="#E8F5E9" stroke="#1E7B34" stroke-width="3"/>
  ${txt(500, 570, "POUR EN SORTIR : mieux vivre à la campagne,", { size: 16, bold: true, fill: "#1B5E20" })}
  ${txt(500, 592, "pour que partir ne soit plus une nécessité. (séances 47-48)", { size: 15, fill: "#1B5E20" })}
  ${caption("Le village s'appauvrit, donc on part ; comme on part, il s'appauvrit encore.", 614)}
</svg>`;
}

// ── S45. Conséquences urbaines : le secteur informel ───────────────────
function svgExodeInformel() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Conséquence (3) : le secteur informel en ville")}
  ${txt(500, 100, "Trop d'arrivants, pas assez d'emplois fixes → chacun invente un petit métier.", { size: 19, italic: true, fill: "#546E7A" })}
  ${cadre(40, 130, 450, 280, "#E3F2FD")}
  ${txt(265, 168, "LES PETITS MÉTIERS DE LA VILLE", { size: 18, bold: true, fill: "#01579B" })}
  <rect x="80" y="200" width="110" height="70" fill="#FFE0B2" stroke="#8D6E63" stroke-width="2"/>
  <path d="M 74 200 L 135 175 L 196 200 Z" fill="#C0553B" stroke="#8D6E63" stroke-width="2"/>
  ${txt(135, 240, "étal", { size: 15 })}
  ${txt(135, 290, "le vendeur", { size: 15, bold: true })}
  ${bonhomme(320, 260, 1.6)}
  <rect x="345" y="255" width="30" height="40" fill="#8D6E63"/>
  ${txt(330, 320, "le porteur de sacs", { size: 15, bold: true })}
  ${bonhomme(430, 260, 1.6)}
  ${txt(430, 320, "le réparateur", { size: 15, bold: true })}
  ${txt(265, 370, "un jour on gagne, un jour rien : la survie", { size: 16, italic: true, fill: "#546E7A" })}
  ${cadre(510, 130, 450, 280, "#FFF8E1")}
  ${txt(735, 168, "TROIS GRANDS MANQUES", { size: 18, bold: true, fill: "#E65100" })}
  ${txt(735, 225, "1. Pas de papier : l'activité n'est pas déclarée.", { size: 17 })}
  ${txt(735, 275, "2. Pas de contrat : rien n'est écrit, rien n'est sûr.", { size: 17 })}
  ${txt(735, 325, "3. Pas de garantie : ni maladie payée, ni retraite.", { size: 17 })}
  ${txt(735, 375, "Le chômage pousse à l'inventer ; il nourrit pourtant des milliers de familles.", { size: 15, italic: true, fill: "#546E7A" })}
  ${txt(500, 460, "Le secteur informel : des petits métiers sans papier, sans contrat, sans garantie.", { size: 20, bold: true })}
  ${caption("Faute d'emplois suffisants, les arrivants inventent des petits métiers pour survivre.", 545)}
</svg>`;
}

// ── S46. Conséquences urbaines : les bidonvilles ───────────────────────
function svgExodeBidonvilles() {
  const baraque = (x, y, s = 1, f = "#BCAAA4") => `
    <g transform="translate(${x},${y}) scale(${s})">
      <rect x="-20" y="-10" width="40" height="26" fill="${f}" stroke="#6D4C41" stroke-width="2"/>
      <path d="M -24 -10 L 0 -26 L 24 -10 Z" fill="#78909C" stroke="#6D4C41" stroke-width="2"/>
    </g>`;
  return `${svgHeader(1000, 620)}
  ${titreSvg("Conséquence (4) : les bidonvilles autour des villes")}
  ${txt(500, 100, "Des milliers d'arrivants par mois, pas assez de logements : les quartiers poussent à la hâte.", { size: 18, italic: true, fill: "#546E7A" })}
  ${cadre(40, 125, 520, 340, "#ECEFF1")}
  ${baraque(120, 220, 1.1)}${baraque(200, 230, 0.9, "#A1887F")}${baraque(280, 220, 1.1)}${baraque(360, 230, 0.9)}
  ${baraque(140, 320, 1.2, "#A1887F")}${baraque(230, 315, 1.3)}${baraque(330, 320, 1.2, "#A1887F")}${baraque(430, 230, 0.9)}
  ${baraque(500, 225, 1)}
  <circle cx="120" cy="400" r="12" fill="#4FC3F7" stroke="#0277BD" stroke-width="3"/>
  ${txt(150, 406, "l'unique fontaine, à 10 minutes", { size: 15, anchor: "start" })}
  <rect x="70" y="425" width="470" height="14" fill="#4FC3F7" stroke="#0277BD" stroke-width="2"/>
  ${txt(305, 455, "le canal : en saison des pluies, il monte jusqu'aux portes", { size: 15, italic: true, fill: "#0277BD" })}
  ${txt(305, 200, "planches, tôles, cartons :", { size: 15, fill: "#546E7A" })}
  ${txt(305, 178, "des maisons précaires, serrées", { size: 15, fill: "#546E7A" })}
  ${cadre(600, 125, 360, 340, "#FFEBEE")}
  ${txt(780, 165, "LES DANGERS QUOTIDIENS", { size: 18, bold: true, fill: "#C00000" })}
  ${txt(780, 215, "• L'insalubrité : déchets, eau sale,", { size: 17 })}
  ${txt(780, 243, "  maladies des enfants.", { size: 17 })}
  ${txt(780, 290, "• Les incendies : bois et carton", { size: 17 })}
  ${txt(780, 318, "  s'enflamment en quelques minutes.", { size: 17 })}
  ${txt(780, 365, "• Les inondations : l'eau du canal", { size: 17 })}
  ${txt(780, 393, "  emporte les maigres biens.", { size: 17 })}
  ${txt(780, 440, "Une chambre minuscule, une seule latrine", { size: 15, italic: true, fill: "#546E7A" })}
  ${txt(780, 462, "pour des dizaines de foyers.", { size: 15, italic: true, fill: "#546E7A" })}
  ${txt(500, 520, "Le bidonville : des maisons précaires, sans eau, sans égouts, sans sécurité.", { size: 20, bold: true })}
  ${caption("La ville qui attire ne peut pas loger tous ses arrivants.", 600)}
</svg>`;
}

// ── S47. Solutions (1) : améliorer les techniques agricoles ────────────
function svgExodeTechniques() {
  return `${svgHeader(1000, 560)}
  ${titreSvg("Solution (1) : améliorer les techniques agricoles")}
  ${cadre(40, 100, 290, 310, "#E8F5E9")}
  ${txt(185, 138, "LES 3 GESTES", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(185, 180, "1. Semer en lignes droites", { size: 17, bold: true })}
  ${[205, 225, 245, 265].map((y) => `<line x1="90" y1="${y}" x2="280" y2="${y}" stroke="#689F38" stroke-width="4" stroke-linecap="round"/>`).join("")}
  ${txt(185, 300, "2. Fabriquer du compost", { size: 17, bold: true })}
  ${txt(185, 325, "(les déchets nourrissent la terre)", { size: 13, italic: true, fill: "#546E7A" })}
  ${txt(185, 365, "3. Réparer le canal :", { size: 17, bold: true })}
  ${txt(185, 390, "l'eau au bon moment", { size: 15 })}
  ${cadre(360, 100, 280, 310, "#FFF8E1")}
  ${txt(500, 138, "AVANT", { size: 18, bold: true, fill: "#E65100" })}
  ${txt(500, 200, "champ semé à la volée,", { size: 16 })}
  ${txt(500, 226, "terre fatiguée, eau au hasard", { size: 16 })}
  ${[1, 2, 3, 4].map((i) => `<rect x="${440 + (i - 1) * 32}" y="290" width="26" height="38" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2"/>`).join("")}
  ${txt(500, 355, "4 sacs de riz", { size: 17, bold: true })}
  ${cadre(670, 100, 280, 310, "#E8F5E9")}
  ${txt(810, 138, "APRÈS", { size: 18, bold: true, fill: "#1B5E20" })}
  ${txt(810, 200, "lignes droites, compost,", { size: 16 })}
  ${txt(810, 226, "eau au bon moment", { size: 16 })}
  ${[1, 2, 3, 4, 5, 6, 7, 8].map((i) => `<rect x="${715 + (i - 1) % 4 * 32}" y="${290 + Math.floor((i - 1) / 4) * 42}" width="26" height="38" fill="#AED581" stroke="#689F38" stroke-width="2"/>`).join("")}
  ${txt(810, 405, "8 sacs de riz : le double !", { size: 17, bold: true, fill: "#1B5E20" })}
  ${txt(500, 460, "Quand la terre nourrit à nouveau, partir n'est plus une question de survie.", { size: 20, bold: true })}
  ${txt(500, 492, "On peut même diversifier : élevage, maraîchage, artisanat.", { size: 17, italic: true, fill: "#546E7A" })}
  ${caption("Mieux cultiver, c'est frapper à la racine de l'exode rural.", 545)}
</svg>`;
}

// ── S48. Solutions (2) : sécurité, emplois, infrastructures, ville nouvelle ──
function svgExodeSolutions() {
  const cle = (x, t1, t2, f, tc) => `
    <rect x="${x}" y="130" width="220" height="230" rx="14" fill="${f}" stroke="#90A4AE" stroke-width="3"/>
    ${txt(x + 110, 168, t1, { size: 17, bold: true, fill: tc })}
    ${t2.map((l, i) => txt(x + 110, 210 + i * 28, l, { size: 15 })).join("")}`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("Solution (2) : sécurité, emplois, infrastructures, ville nouvelle")}
  ${cle(30, "SÉCURISER", ["Patrouilles mixtes,", "troupeaux et récoltes", "protégés :", "la peur recule."], "#FFEBEE", "#C00000")}
  ${cle(270, "CRÉER DES EMPLOIS", ["Ateliers de", "transformation,", "chantiers :", "des salaris", "près des villages."], "#FFF8E1", "#E65100")}
  ${cle(510, "ÉQUIPER", ["Routes praticables,", "écoles, santé,", "eau, électricité :", "le confort", "aux campagnes."], "#E3F2FD", "#01579B")}
  ${cle(750, "IMPLANTER UNE", ["VILLE NOUVELLE :", "une ville créée", "de toutes pièces,", "services et emplois", "près des champs."], "#E8F5E9", "#1B5E20")}
  ${txt(500, 420, "Le but : l'équilibre entre la ville et la campagne,", { size: 20, bold: true })}
  ${txt(500, 455, "pour que chacun choisisse librement où vivre.", { size: 20, bold: true })}
  ${txt(500, 495, "« Si tout cela sort de terre, mes petits-enfants n'auront plus besoin d'aller si loin pour vivre. »", { size: 16, italic: true, fill: "#546E7A" })}
  ${caption("Quatre clés pour retenir les habitants — sans les y forcer.", 545)}
</svg>`;
}

const SVG = {
  geo6_exode_notion: svgExodeNotion(),
  geo6_exode_pauvrete: svgExodePauvrete(),
  geo6_exode_insecurite: svgExodeInsecurite(),
  geo6_exode_infrastructures: svgExodeInfrastructures(),
  geo6_exode_main_oeuvre: svgExodeMainOeuvre(),
  geo6_exode_retard: svgExodeRetard(),
  geo6_exode_informel: svgExodeInformel(),
  geo6_exode_bidonvilles: svgExodeBidonvilles(),
  geo6_exode_techniques: svgExodeTechniques(),
  geo6_exode_solutions: svgExodeSolutions(),
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
