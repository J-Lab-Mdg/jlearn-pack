// make-svg-u2.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T4
// UNITÉ 2 : LE PLAN (Séances 11 à 24). Génère les SVG puis les convertit en PNG (sharp).
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, "..");
const REPO = path.resolve(OUT, "..");
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const DEFS = `
  <defs>
    <marker id="arrR" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#C00000"/></marker>
    <marker id="arrB" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#1F4E79"/></marker>
    <marker id="arrG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#8D6E63"/></marker>
  </defs>`;

const northArrow = (x, y, size = 70) => `
  <g>
    <line x1="${x}" y1="${y}" x2="${x}" y2="${y - size}" stroke="#C00000" stroke-width="7" marker-end="url(#arrR)"/>
    <circle cx="${x}" cy="${y}" r="5" fill="#C00000"/>
    <text x="${x}" y="${y - size - 12}" text-anchor="middle" font-size="30" font-weight="bold" fill="#C00000">N</text>
  </g>`;

const legendBox = (x, y, w, h, title, entries) => {
  let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="12" fill="#FAFAFA" stroke="#90A4AE" stroke-width="2.5"/>
  <text x="${x + w / 2}" y="${y + 36}" text-anchor="middle" font-size="25" font-weight="bold" fill="#1F4E79">${title}</text>`;
  entries.forEach((e, i) => {
    const ey = y + 74 + i * 52;
    s += `<g transform="translate(${x + 26}, ${ey})">${e.sym}<text x="66" y="19" font-size="21" fill="#37474F">${e.label}</text></g>`;
  });
  return s;
};

// Petits symboles réutilisables (boîte ~48x34)
const SYM = {
  board: `<rect x="4" y="12" width="44" height="11" fill="#37474F"/>`,
  desk: `<rect x="6" y="6" width="36" height="22" fill="#FFF3E0" stroke="#FB8C00" stroke-width="2.5"/>`,
  teacher: `<rect x="4" y="8" width="40" height="20" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/>`,
  window: `<rect x="16" y="2" width="16" height="30" fill="#BBDEFB" stroke="#64B5F6" stroke-width="2.5"/>`,
  door: `<line x1="8" y1="30" x2="8" y2="6" stroke="#8D6E63" stroke-width="4"/><path d="M 40 30 A 32 32 0 0 0 8 6" fill="none" stroke="#8D6E63" stroke-width="2" stroke-dasharray="4 4"/>`,
  wall: `<rect x="4" y="12" width="42" height="12" fill="#FDF6EC" stroke="#8D6E63" stroke-width="5"/>`,
  courtyard: `<rect x="5" y="7" width="38" height="21" fill="#FFF8E1" stroke="#F9A825" stroke-width="2.5"/>`,
  well: `<circle cx="19" cy="17" r="13" fill="#ECEFF1" stroke="#78909C" stroke-width="3"/><line x1="6" y1="17" x2="32" y2="17" stroke="#78909C" stroke-width="2.5"/><line x1="19" y1="4" x2="19" y2="30" stroke="#78909C" stroke-width="2.5"/>`,
  gate: `<line x1="4" y1="30" x2="4" y2="10" stroke="#6D4C41" stroke-width="3.5"/><line x1="42" y1="30" x2="42" y2="10" stroke="#6D4C41" stroke-width="3.5"/><path d="M 4 30 A 38 38 0 0 1 42 30" fill="none" stroke="#6D4C41" stroke-width="2" stroke-dasharray="4 4"/>`,
  tree: `<circle cx="19" cy="17" r="13" fill="#A5D6A7" stroke="#66BB6A" stroke-width="2.5"/><line x1="19" y1="30" x2="19" y2="34" stroke="#6D4C41" stroke-width="3"/>`,
  house: `<rect x="8" y="12" width="24" height="18" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/><polygon points="4,12 20,1 36,12" fill="#FB8C00"/>`,
  school: `<rect x="6" y="12" width="34" height="19" fill="#C8E6C9" stroke="#66BB6A" stroke-width="2.5"/><line x1="38" y1="12" x2="38" y2="2" stroke="#C00000" stroke-width="2.5"/><polygon points="38,2 48,5 38,8" fill="#C00000"/>`,
  church: `<rect x="8" y="14" width="26" height="17" fill="#FFFFFF" stroke="#8D6E63" stroke-width="2.5"/><line x1="21" y1="14" x2="21" y2="3" stroke="#8D6E63" stroke-width="2.5"/><line x1="15" y1="7" x2="27" y2="7" stroke="#8D6E63" stroke-width="2.5"/>`,
  mosque: `<rect x="7" y="16" width="28" height="15" fill="#E8F5E9" stroke="#66BB6A" stroke-width="2.5"/><path d="M 13 16 A 8 8 0 0 1 29 16" fill="#C8E6C9" stroke="#66BB6A" stroke-width="2"/>`,
  market: `<rect x="5" y="9" width="38" height="20" fill="#FFECB3" stroke="#FBC02D" stroke-width="2.5"/><line x1="12" y1="9" x2="12" y2="29" stroke="#FBC02D" stroke-width="2"/><line x1="21" y1="9" x2="21" y2="29" stroke="#FBC02D" stroke-width="2"/><line x1="30" y1="9" x2="30" y2="29" stroke="#FBC02D" stroke-width="2"/>`,
  road: `<rect x="3" y="12" width="42" height="14" fill="#B0BEC5"/><line x1="6" y1="19" x2="42" y2="19" stroke="#FFFFFF" stroke-width="2.5" stroke-dasharray="6 5"/>`,
  path: `<line x1="4" y1="19" x2="44" y2="19" stroke="#E53935" stroke-width="5" stroke-dasharray="8 6"/>`,
  river: `<rect x="3" y="12" width="42" height="14" fill="#BBDEFB" stroke="#90CAF9" stroke-width="2"/>`,
  bridge: `<rect x="8" y="10" width="32" height="16" fill="#BCAAA4" stroke="#6D4C41" stroke-width="2.5"/>`,
  field: `<rect x="3" y="10" width="42" height="18" fill="#C5E1A5" stroke="#8BC34A" stroke-width="2"/><line x1="8" y1="16" x2="40" y2="16" stroke="#8BC34A" stroke-width="2"/><line x1="8" y1="23" x2="40" y2="23" stroke="#8BC34A" stroke-width="2"/>`,
  foot: `<rect x="5" y="8" width="38" height="20" fill="#C8E6C9" stroke="#66BB6A" stroke-width="2.5"/><line x1="24" y1="8" x2="24" y2="28" stroke="#66BB6A" stroke-width="1.8"/><circle cx="24" cy="18" r="5" fill="none" stroke="#66BB6A" stroke-width="1.8"/>`,
  flag: `<circle cx="19" cy="30" r="3" fill="#6D4C41"/><line x1="19" y1="30" x2="19" y2="4" stroke="#6D4C41" stroke-width="2.5"/><polygon points="19,4 34,8 19,12" fill="#C00000"/>`,
};

// ── 1. Le plan de la salle de classe ────────────────────────────────────
function svgPlanClasse() {
  const desk = (x, y) => `<rect x="${x}" y="${y}" width="110" height="52" rx="4" fill="#FFF3E0" stroke="#FB8C00" stroke-width="3"/><text x="${x + 55}" y="${y + 33}" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">P</text>`;
  const rows = [280, 352, 424, 496];
  const cols = [140, 470];
  let desks = "";
  rows.forEach((y) => cols.forEach((x) => { desks += desk(x, y); }));
  return `${svgHeader(1100, 700)}${DEFS}
  <rect width="1100" height="700" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">Le plan de la salle de classe</text>
  <rect x="60" y="110" width="600" height="480" fill="#FDF6EC" stroke="#8D6E63" stroke-width="6"/>
  <rect x="95" y="130" width="530" height="24" fill="#37474F"/>
  <text x="360" y="148" text-anchor="middle" font-size="15" fill="#FFFFFF">TABLEAU</text>
  <rect x="320" y="186" width="140" height="58" rx="4" fill="#FFE0B2" stroke="#FB8C00" stroke-width="3"/>
  <text x="390" y="222" text-anchor="middle" font-size="22" font-weight="bold" fill="#E65100">B</text>
  ${desks}
  <rect x="540" y="576" width="60" height="28" fill="#FFFFFF"/>
  <line x1="540" y1="590" x2="540" y2="530" stroke="#8D6E63" stroke-width="5"/>
  <path d="M 600 590 A 60 60 0 0 0 540 530" fill="none" stroke="#8D6E63" stroke-width="2.5" stroke-dasharray="5 5"/>
  <text x="570" y="632" text-anchor="middle" font-size="20" fill="#546E7A">porte</text>
  <rect x="53" y="200" width="14" height="42" fill="#BBDEFB" stroke="#64B5F6" stroke-width="2.5"/>
  <rect x="53" y="320" width="14" height="42" fill="#BBDEFB" stroke="#64B5F6" stroke-width="2.5"/>
  <rect x="53" y="440" width="14" height="42" fill="#BBDEFB" stroke="#64B5F6" stroke-width="2.5"/>
  ${northArrow(720, 220, 60)}
  ${legendBox(780, 170, 300, 470, "Légende", [
    { sym: SYM.board, label: "T : le tableau noir" },
    { sym: SYM.teacher, label: "B : le bureau du maître" },
    { sym: SYM.desk, label: "P : un pupitre (banc)" },
    { sym: SYM.door, label: "la porte" },
    { sym: SYM.window, label: "une fenêtre" },
    { sym: SYM.wall, label: "les murs de la salle" },
  ])}
  <text x="550" y="672" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le plan montre la salle vue de dessus : chaque meuble est dessiné par une forme simple.</text>
</svg>`;
}

// ── 2. L'orientation du plan : la flèche du Nord ────────────────────────
function svgFlecheNord() {
  return `${svgHeader(1100, 620)}${DEFS}
  <rect width="1100" height="620" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">L'orientation du plan : la flèche du Nord</text>
  <text x="280" y="128" text-anchor="middle" font-size="26" font-weight="bold" fill="#C00000">Nord</text>
  <text x="280" y="552" text-anchor="middle" font-size="26" font-weight="bold" fill="#37474F">Sud</text>
  <text x="86" y="330" text-anchor="end" font-size="26" font-weight="bold" fill="#42A5F5">Ouest</text>
  <text x="476" y="330" text-anchor="start" font-size="26" font-weight="bold" fill="#EF5350">Est</text>
  <rect x="100" y="140" width="360" height="360" fill="#FDF6EC" stroke="#8D6E63" stroke-width="5"/>
  ${northArrow(420, 300, 90)}
  <rect x="560" y="140" width="490" height="250" rx="16" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <text x="805" y="190" text-anchor="middle" font-size="27" font-weight="bold" fill="#1F4E79">Pour orienter un plan :</text>
  <text x="600" y="240" font-size="25" fill="#37474F">• le Nord est toujours en haut ;</text>
  <text x="600" y="286" font-size="25" fill="#37474F">• le Sud est en bas ;</text>
  <text x="600" y="332" font-size="25" fill="#37474F">• l'Ouest est à gauche ;</text>
  <text x="600" y="378" font-size="25" fill="#37474F">• l'Est est à droite.</text>
  <text x="550" y="470" text-anchor="middle" font-size="25" fill="#37474F">La flèche <tspan font-weight="bold" fill="#C00000">N</tspan> indique la direction du Nord :</text>
  <text x="550" y="506" text-anchor="middle" font-size="25" fill="#37474F">c'est elle qui permet d'orienter le plan.</text>
  <text x="550" y="586" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Grâce à la flèche du Nord, tout le monde lit le plan dans le même sens.</text>
</svg>`;
}

// ── 3. L'échelle d'un plan ──────────────────────────────────────────────
function svgEchelle() {
  return `${svgHeader(1100, 640)}${DEFS}
  <rect width="1100" height="640" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">L'échelle d'un plan</text>
  <rect x="60" y="110" width="420" height="330" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  <text x="270" y="152" text-anchor="middle" font-size="26" font-weight="bold" fill="#37474F">Dans la réalité</text>
  <rect x="110" y="250" width="320" height="24" fill="#D7CCC8" stroke="#8D6E63" stroke-width="3"/>
  <line x1="135" y1="274" x2="135" y2="345" stroke="#8D6E63" stroke-width="7"/>
  <line x1="405" y1="274" x2="405" y2="345" stroke="#8D6E63" stroke-width="7"/>
  <line x1="110" y1="385" x2="430" y2="385" stroke="#1F4E79" stroke-width="3" marker-start="url(#arrB)" marker-end="url(#arrB)"/>
  <text x="270" y="418" text-anchor="middle" font-size="24" fill="#37474F">la table du maître : 2 mètres</text>
  <line x1="520" y1="280" x2="630" y2="280" stroke="#1F4E79" stroke-width="8" marker-end="url(#arrB)"/>
  <text x="575" y="252" text-anchor="middle" font-size="22" font-style="italic" fill="#1F4E79">on réduit</text>
  <rect x="690" y="110" width="360" height="330" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  <text x="870" y="152" text-anchor="middle" font-size="26" font-weight="bold" fill="#37474F">Sur le plan</text>
  <rect x="760" y="200" width="300" height="190" fill="#FFFFFF" stroke="#B0BEC5" stroke-width="2.5"/>
  <rect x="800" y="255" width="130" height="18" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2.5"/>
  <line x1="800" y1="320" x2="930" y2="320" stroke="#C00000" stroke-width="3" marker-start="url(#arrR)" marker-end="url(#arrR)"/>
  <text x="865" y="352" text-anchor="middle" font-size="24" fill="#37474F">2 cm</text>
  <rect x="60" y="490" width="990" height="100" rx="14" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <text x="555" y="530" text-anchor="middle" font-size="25" fill="#37474F">Ici, 2 cm sur le plan représentent 2 m dans la réalité :</text>
  <text x="555" y="566" text-anchor="middle" font-size="25" font-weight="bold" fill="#1F4E79">1 cm sur le plan = 1 m dans la réalité. C'est l'échelle du plan.</text>
  <text x="550" y="626" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">L'échelle permet de dessiner de grands lieux sur une petite feuille.</text>
</svg>`;
}

// ── 4. Le plan de l'école ───────────────────────────────────────────────
function svgPlanEcole() {
  return `${svgHeader(1100, 780)}${DEFS}
  <rect width="1100" height="780" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">Le plan de l'école</text>
  <rect x="60" y="110" width="700" height="560" rx="8" fill="#E8F5E9" stroke="#66BB6A" stroke-width="6"/>
  <rect x="110" y="150" width="230" height="100" rx="6" fill="#FFE0B2" stroke="#FB8C00" stroke-width="4"/>
  <text x="225" y="215" text-anchor="middle" font-size="40" font-weight="bold" fill="#E65100">A</text>
  <rect x="480" y="150" width="230" height="100" rx="6" fill="#FFE0B2" stroke="#FB8C00" stroke-width="4"/>
  <text x="595" y="215" text-anchor="middle" font-size="40" font-weight="bold" fill="#E65100">B</text>
  <rect x="110" y="510" width="180" height="90" rx="6" fill="#FFE0B2" stroke="#FB8C00" stroke-width="4"/>
  <text x="200" y="568" text-anchor="middle" font-size="36" font-weight="bold" fill="#E65100">C</text>
  <rect x="610" y="530" width="110" height="70" rx="6" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="4"/>
  <text x="665" y="577" text-anchor="middle" font-size="32" font-weight="bold" fill="#0277BD">D</text>
  <rect x="330" y="300" width="340" height="180" rx="10" fill="#FFF8E1" stroke="#F9A825" stroke-width="3"/>
  <text x="500" y="398" text-anchor="middle" font-size="30" font-weight="bold" fill="#F57F17">cour</text>
  <circle cx="600" cy="360" r="24" fill="#ECEFF1" stroke="#78909C" stroke-width="4"/>
  <line x1="578" y1="360" x2="622" y2="360" stroke="#78909C" stroke-width="3"/>
  <line x1="600" y1="338" x2="600" y2="382" stroke="#78909C" stroke-width="3"/>
  <g transform="translate(290,330)"><line x1="20" y1="52" x2="20" y2="6" stroke="#6D4C41" stroke-width="3"/><polygon points="20,4 44,11 20,18" fill="#C00000"/></g>
  <circle cx="700" cy="230" r="20" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <circle cx="700" cy="430" r="20" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <circle cx="150" cy="420" r="20" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <rect x="384" y="664" width="72" height="20" fill="#FFFFFF"/>
  <line x1="384" y1="670" x2="384" y2="640" stroke="#6D4C41" stroke-width="4"/>
  <line x1="456" y1="670" x2="456" y2="640" stroke="#6D4C41" stroke-width="4"/>
  <path d="M 384 670 A 72 72 0 0 1 456 640" fill="none" stroke="#6D4C41" stroke-width="2" stroke-dasharray="4 4"/>
  <text x="420" y="712" text-anchor="middle" font-size="20" fill="#546E7A">portail</text>
  ${northArrow(800, 180, 60)}
  ${legendBox(810, 240, 280, 470, "Légende", [
    { sym: SYM.school, label: "A : les salles de classe" },
    { sym: SYM.teacher, label: "B : le bureau du directeur" },
    { sym: SYM.desk, label: "C : la cantine" },
    { sym: SYM.window, label: "D : les toilettes" },
    { sym: SYM.courtyard, label: "la cour de récréation" },
    { sym: SYM.well, label: "le puits" },
    { sym: SYM.gate, label: "le portail" },
    { sym: SYM.tree, label: "un arbre" },
  ])}
  <text x="550" y="762" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le plan de l'école montre les bâtiments et la cour, vus de dessus.</text>
</svg>`;
}

// ── 5. Le quartier et l'itinéraire maison–école ─────────────────────────
function svgItineraire() {
  return `${svgHeader(1100, 780)}${DEFS}
  <rect width="1100" height="780" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="32" font-weight="bold" fill="#1F4E79">Le plan du quartier : l'itinéraire maison–école</text>
  <rect x="60" y="110" width="700" height="560" fill="#F5F5F5" stroke="#90A4AE" stroke-width="4"/>
  <rect x="60" y="390" width="700" height="56" fill="#B0BEC5"/>
  <line x1="70" y1="418" x2="750" y2="418" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="20 14"/>
  <rect x="380" y="110" width="56" height="560" fill="#B0BEC5"/>
  <line x1="408" y1="120" x2="408" y2="660" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="20 14"/>
  <rect x="125" y="446" width="30" height="114" fill="#CFD8DC"/>
  <g transform="translate(110,540)">${SYM.house}</g>
  <text x="130" y="628" text-anchor="middle" font-size="21" font-weight="bold" fill="#E65100">Ma maison</text>
  <g transform="translate(595,140)">${SYM.school}</g>
  <text x="650" y="212" text-anchor="middle" font-size="21" font-weight="bold" fill="#2E7D32">École</text>
  <g transform="translate(130,150)">${SYM.church}</g>
  <text x="160" y="240" text-anchor="middle" font-size="21" font-weight="bold" fill="#6D4C41">Église</text>
  <g transform="translate(595,470)">${SYM.market}</g>
  <text x="650" y="545" text-anchor="middle" font-size="21" font-weight="bold" fill="#F9A825">Marché</text>
  <rect x="130" y="270" width="96" height="50" fill="#E1F5FE" stroke="#4FC3F7" stroke-width="3"/>
  <text x="178" y="302" text-anchor="middle" font-size="18" fill="#0277BD">Fokontany</text>
  <circle cx="140" cy="560" r="8" fill="#C00000"/>
  <path d="M 140 560 L 140 418 L 408 418 L 408 185 L 585 185" fill="none" stroke="#E53935" stroke-width="6" stroke-dasharray="14 10" marker-end="url(#arrR)"/>
  ${northArrow(800, 180, 60)}
  ${legendBox(810, 240, 290, 410, "Légende", [
    { sym: SYM.house, label: "ma maison" },
    { sym: SYM.school, label: "l'école" },
    { sym: SYM.church, label: "l'église" },
    { sym: SYM.market, label: "le marché" },
    { sym: SYM.road, label: "une route" },
    { sym: SYM.path, label: "mon itinéraire" },
  ])}
  <text x="550" y="760" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">En pointillés rouges : le chemin que je suis chaque matin pour aller à l'école.</text>
</svg>`;
}

// ── 6. Le plan d'un village ─────────────────────────────────────────────
function svgPlanVillage() {
  const houseAt = (x, y) => `<g transform="translate(${x},${y})">${SYM.house}</g>`;
  let maisons = "";
  [[140, 258], [210, 268], [300, 256], [490, 252], [545, 266], [660, 258], [140, 470], [250, 476], [520, 468], [610, 474], [680, 468]].forEach(([x, y]) => { maisons += houseAt(x, y); });
  return `${svgHeader(1100, 800)}${DEFS}
  <rect width="1100" height="800" fill="#FFFFFF"/>
  <text x="550" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">Le plan d'un village</text>
  <rect x="60" y="110" width="700" height="620" fill="#F1F8E9" stroke="#8BC34A" stroke-width="5"/>
  <rect x="60" y="328" width="700" height="44" fill="#B0BEC5"/>
  <line x1="70" y1="350" x2="750" y2="350" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="20 14"/>
  <rect x="380" y="110" width="52" height="620" fill="#B0BEC5"/>
  <line x1="406" y1="120" x2="406" y2="720" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="20 14"/>
  <rect x="60" y="560" width="700" height="54" fill="#BBDEFB"/>
  <text x="130" y="594" font-size="22" font-style="italic" fill="#1565C0">la rivière</text>
  <rect x="372" y="554" width="68" height="66" fill="#BCAAA4" stroke="#6D4C41" stroke-width="3"/>
  <text x="452" y="594" font-size="20" fill="#5D4037">le pont</text>
  <g transform="translate(100,140)">${SYM.school}</g>
  <text x="150" y="228" text-anchor="middle" font-size="21" font-weight="bold" fill="#2E7D32">École</text>
  <g transform="translate(250,148)">${SYM.church}</g>
  <text x="290" y="228" text-anchor="middle" font-size="21" font-weight="bold" fill="#6D4C41">Église</text>
  <g transform="translate(560,142)">${SYM.mosque}</g>
  <text x="610" y="228" text-anchor="middle" font-size="21" font-weight="bold" fill="#2E7D32">Mosquée</text>
  <g transform="translate(575,405)">${SYM.market}</g>
  <text x="630" y="486" text-anchor="middle" font-size="21" font-weight="bold" fill="#F9A825">Marché</text>
  <g transform="translate(105,415)">${SYM.foot}</g>
  <text x="175" y="528" text-anchor="middle" font-size="19" fill="#388E3C">Terrain de foot</text>
  ${maisons}
  <rect x="60" y="614" width="700" height="116" fill="#DCEDC8"/>
  <line x1="80" y1="650" x2="740" y2="650" stroke="#8BC34A" stroke-width="2.5"/>
  <line x1="80" y1="678" x2="740" y2="678" stroke="#8BC34A" stroke-width="2.5"/>
  <line x1="80" y1="706" x2="740" y2="706" stroke="#8BC34A" stroke-width="2.5"/>
  <text x="120" y="716" font-size="22" font-style="italic" fill="#33691E">les rizières</text>
  ${northArrow(800, 180, 60)}
  ${legendBox(810, 240, 280, 520, "Légende", [
    { sym: SYM.school, label: "l'école" },
    { sym: SYM.church, label: "l'église" },
    { sym: SYM.mosque, label: "la mosquée" },
    { sym: SYM.market, label: "le marché" },
    { sym: SYM.foot, label: "le terrain de foot" },
    { sym: SYM.house, label: "une maison" },
    { sym: SYM.road, label: "une route" },
    { sym: SYM.river, label: "la rivière" },
    { sym: SYM.bridge, label: "le pont" },
    { sym: SYM.field, label: "les rizières" },
  ])}
  <text x="550" y="782" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le plan du village rassemble les lieux principaux : bâtiments, routes, rivière et rizières.</text>
</svg>`;
}

// ── Écriture + conversion ────────────────────────────────────────────────
const SVG = {
  geot4_plan_classe: svgPlanClasse(),
  geot4_fleche_nord: svgFlecheNord(),
  geot4_echelle: svgEchelle(),
  geot4_plan_ecole: svgPlanEcole(),
  geot4_itineraire: svgItineraire(),
  geot4_plan_village: svgPlanVillage(),
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
