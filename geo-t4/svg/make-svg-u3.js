// make-svg-u3.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T4
// UNITÉ 3 : LES ÉLÉMENTS DU PAYSAGE NATUREL (Séances 25 à 36)
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
    <marker id="arrK" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#37474F"/></marker>
    <marker id="arrS" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#F9A825"/></marker>
  </defs>`;
const northArrow = (x, y, size = 70) => `
  <g>
    <line x1="${x}" y1="${y}" x2="${x}" y2="${y - size}" stroke="#C00000" stroke-width="7" marker-end="url(#arrR)"/>
    <circle cx="${x}" cy="${y}" r="5" fill="#C00000"/>
    <text x="${x}" y="${y - size - 12}" text-anchor="middle" font-size="30" font-weight="bold" fill="#C00000">N</text>
  </g>`;
const panel = (x, y, w, h, fill = "#EAF4FB") =>
  `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="16" fill="${fill}" stroke="#90A4AE" stroke-width="3"/>`;
const panelTitle = (x, y, t, color = "#1F4E79") =>
  `<text x="${x}" y="${y}" text-anchor="middle" font-size="27" font-weight="bold" fill="${color}">${t}</text>`;
const caption = (w, y, t) =>
  `<text x="${w / 2}" y="${y}" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">${t}</text>`;
const title = (w, t) =>
  `<text x="${w / 2}" y="50" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">${t}</text>`;
// arbre simple : tronc + couronne
const tree = (x, y, s = 1, c = "#2E7D32") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <rect x="-4" y="0" width="8" height="26" fill="#6D4C41"/>
    <circle cx="0" cy="-12" r="22" fill="${c}" stroke="#1B5E20" stroke-width="2"/>
  </g>`;
// zébu : corps + bosse + tête + cornes + pattes
const zebu = (x, y, s = 1) => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="34" ry="18" fill="#D7CCC8" stroke="#8D6E63" stroke-width="2.5"/>
    <circle cx="-18" cy="-16" r="10" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2.5"/>
    <rect x="-36" y="-12" width="14" height="12" rx="4" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2"/>
    <path d="M -40 -18 L -46 -26 M -36 -18 L -33 -28" stroke="#6D4C41" stroke-width="3" stroke-linecap="round"/>
    <line x1="-20" y1="16" x2="-20" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="-4" y1="16" x2="-4" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="12" y1="16" x2="12" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
    <line x1="24" y1="16" x2="24" y2="30" stroke="#8D6E63" stroke-width="3.5"/>
  </g>`;
// poisson
const fish = (x, y, s = 1, c = "#4FC3F7") => `
  <g transform="translate(${x},${y}) scale(${s})">
    <ellipse cx="0" cy="0" rx="20" ry="11" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <polygon points="-19,0 -32,-9 -32,9" fill="${c}" stroke="#0277BD" stroke-width="2"/>
    <circle cx="10" cy="-3" r="2.6" fill="#0277BD"/>
  </g>`;

// ── 1. Les trois types de paysage (S25) ────────────────────────────────
function svgTypesPaysage() {
  return `${svgHeader(1100, 580)}${DEFS}
  <rect width="1100" height="580" fill="#FFFFFF"/>
  ${title(1100, "Les trois types de paysage naturel")}
  ${panelTitle(220, 105, "Le paysage terrestre")}
  ${panel(40, 120, 360, 350)}
  <polygon points="200,180 260,300 140,300" fill="#B0BEC5" stroke="#78909C" stroke-width="3"/>
  <ellipse cx="90" cy="345" rx="90" ry="55" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <ellipse cx="320" cy="355" rx="110" ry="50" fill="#C5E1A5" stroke="#8BC34A" stroke-width="3"/>
  <path d="M 200 300 Q 190 340 150 370 Q 120 395 90 430" stroke="#64B5F6" stroke-width="8" fill="none"/>
  ${tree(320, 340, 1)}
  ${tree(285, 355, 0.8)}
  ${tree(350, 360, 0.7)}
  <circle cx="260" cy="160" r="18" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  ${panelTitle(550, 105, "Le paysage littoral")}
  ${panel(430, 120, 360, 350, "#BBDEFB")}
  <path d="M 430 320 Q 500 280 570 320 Q 640 360 790 330 L 790 470 L 430 470 Z" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <path d="M 430 320 Q 520 340 600 355 Q 700 372 790 350 L 790 470 L 430 470 Z" fill="#FFE082" stroke="#FBC02D" stroke-width="2"/>
  <circle cx="620" cy="200" r="16" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <polygon points="680,310 710,345 655,345" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <g transform="translate(520,395)"><polygon points="0,0 30,8 0,16" fill="#EF5350"/><line x1="0" y1="8" x2="34" y2="8" stroke="#6D4C41" stroke-width="4"/></g>
  ${panelTitle(880, 105, "Le paysage marin")}
  ${panel(820, 120, 360, 350, "#4FC3F7")}
  <path d="M 820 160 Q 850 145 880 160 Q 910 175 940 160 Q 970 145 1000 160 Q 1030 175 1180 160" stroke="#FFFFFF" stroke-width="5" fill="none"/>
  <rect x="820" y="120" width="360" height="40" fill="#81D4FA" opacity="0.5"/>
  <path d="M 880 470 Q 900 400 950 380 Q 1000 360 1030 470 Z" fill="#FF8A65" stroke="#E64A19" stroke-width="3"/>
  <g transform="translate(960,400)"><path d="M 0 0 V -45 M 0 -45 L -14 -32 M 0 -45 L 14 -32 M 0 -30 L -12 -18 M 0 -30 L 12 -18 M 0 -15 L -9 -5 M 0 -15 L 9 -5" stroke="#F06292" stroke-width="7" stroke-linecap="round" fill="none"/></g>
  <circle cx="1050" cy="420" r="22" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <path d="M 1100 470 Q 1102 440 1090 430 M 1110 470 Q 1112 445 1125 435" stroke="#2E7D32" stroke-width="5" fill="none" stroke-linecap="round"/>
  ${fish(930, 250, 1)}
  ${fish(1010, 220, 0.7, "#81C784")}
  ${fish(1060, 290, 0.8, "#FFB74D")}
  ${caption(1100, 545, "Le paysage terrestre est sur la terre ferme ; le littoral est le bord de la mer ; le paysage marin est sous la mer.")}
</svg>`;
}

// ── 2. Les formes du relief (S26) ──────────────────────────────────────
function svgRelief() {
  return `${svgHeader(1100, 620)}${DEFS}
  <rect width="1100" height="620" fill="#FFFFFF"/>
  ${title(1100, "Les formes du relief")}
  <rect x="40" y="100" width="1020" height="400" rx="16" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <circle cx="950" cy="160" r="26" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <path d="M 60 500 L 60 440 Q 120 340 170 330 L 330 500 Z" fill="#C5E1A5"/>
  <polygon points="170,330 300,140 420,330" fill="#90A4AE" stroke="#607D8B" stroke-width="3"/>
  <polygon points="300,140 320,175 280,175" fill="#ECEFF1"/>
  <ellipse cx="470" cy="440" rx="95" ry="85" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <path d="M 60 500 Q 200 480 330 495 Q 420 502 520 500" stroke="none"/>
  <path d="M 330 500 Q 340 460 380 440 Q 420 420 470 415 Q 530 412 580 430 Q 640 450 700 470 Q 780 492 1000 492" stroke="#64B5F6" stroke-width="10" fill="none"/>
  <rect x="40" y="490" width="1020" height="10" fill="#8D6E63"/>
  <rect x="700" y="430" width="320" height="62" fill="#DCEDC8" stroke="#8BC34A" stroke-width="2"/>
  <line x1="740" y1="430" x2="740" y2="492" stroke="#8BC34A" stroke-width="2"/>
  <line x1="790" y1="430" x2="790" y2="492" stroke="#8BC34A" stroke-width="2"/>
  <line x1="840" y1="430" x2="840" y2="492" stroke="#8BC34A" stroke-width="2"/>
  <line x1="890" y1="430" x2="890" y2="492" stroke="#8BC34A" stroke-width="2"/>
  <line x1="940" y1="430" x2="940" y2="492" stroke="#8BC34A" stroke-width="2"/>
  ${tree(990, 420, 0.9)}
  <g transform="translate(845,398)"><rect x="0" y="0" width="34" height="22" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/><polygon points="-4,0 17,-14 38,0" fill="#FB8C00"/></g>
  <line x1="300" y1="150" x2="300" y2="80" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="310" y="72" font-size="24" font-weight="bold" fill="#C00000">la montagne : très haute</text>
  <line x1="470" y1="380" x2="530" y2="90" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="440" y="82" font-size="24" font-weight="bold" fill="#C00000">la colline : moins haute et arrondie</text>
  <line x1="470" y1="425" x2="560" y2="425" stroke="#C00000" stroke-width="0"/>
  <line x1="475" y1="430" x2="620" y2="330" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="630" y="318" font-size="24" font-weight="bold" fill="#C00000">la vallée : le creux</text>
  <text x="630" y="348" font-size="24" font-weight="bold" fill="#C00000">traversé par un cours d'eau</text>
  <line x1="850" y1="470" x2="850" y2="360" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="860" y="350" font-size="24" font-weight="bold" fill="#C00000">la plaine : terrain plat et bas</text>
  ${caption(1100, 560, "Le relief, c'est l'ensemble des formes du terrain : montagnes, collines, vallées et plaines.")}
</svg>`;
}

// ── 3. De la source à la mer (S27) ─────────────────────────────────────
function svgCoursEau() {
  return `${svgHeader(1100, 620)}${DEFS}
  <rect width="1100" height="620" fill="#FFFFFF"/>
  ${title(1100, "Le voyage de l'eau : de la source à la mer")}
  <rect x="40" y="110" width="1020" height="420" rx="16" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <polygon points="60,530 250,180 440,530" fill="#90A4AE" stroke="#607D8B" stroke-width="3"/>
  <circle cx="250" cy="220" r="5" fill="#4FC3F7"/>
  <ellipse cx="245" cy="230" rx="16" ry="7" fill="#B3E5FC"/>
  <path d="M 250 235 C 280 300 330 340 400 370" stroke="#64B5F6" stroke-width="6" fill="none"/>
  <path d="M 400 370 C 480 400 540 410 620 425" stroke="#42A5F5" stroke-width="13" fill="none"/>
  <path d="M 620 425 C 700 440 760 450 830 460" stroke="#1E88E5" stroke-width="26" fill="none"/>
  <path d="M 830 460 C 880 468 910 470 940 472" stroke="#1565C0" stroke-width="34" fill="none"/>
  <rect x="880" y="420" width="180" height="110" fill="#BBDEFB" stroke="none"/>
  <path d="M 880 420 Q 920 405 960 420 Q 1000 435 1060 420 L 1060 530 L 880 530 Z" fill="#BBDEFB"/>
  ${tree(560, 400, 0.9)}
  ${tree(620, 380, 0.7)}
  <line x1="250" y1="240" x2="330" y2="290" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="150" y="170" font-size="24" font-weight="bold" fill="#C00000">la source</text>
  <text x="270" y="320" font-size="24" font-weight="bold" fill="#1F4E79">le ruisseau : petit filet d'eau</text>
  <text x="430" y="390" font-size="24" font-weight="bold" fill="#1F4E79">la rivière : plus large</text>
  <text x="640" y="500" font-size="24" font-weight="bold" fill="#1F4E79">le fleuve : le plus grand, il va à la mer</text>
  <text x="900" y="510" font-size="24" font-weight="bold" fill="#1565C0">la mer</text>
  <text x="920" y="450" font-size="22" font-weight="bold" fill="#C00000">l'embouchure</text>
  <line x1="380" y1="150" x2="470" y2="270" stroke="#37474F" stroke-width="2.5" marker-end="url(#arrK)" stroke-dasharray="8 6"/>
  <text x="340" y="140" font-size="24" font-weight="bold" fill="#37474F">l'amont : vers la source</text>
  <line x1="700" y1="160" x2="770" y2="300" stroke="#37474F" stroke-width="2.5" marker-end="url(#arrK)" stroke-dasharray="8 6"/>
  <text x="620" y="150" font-size="24" font-weight="bold" fill="#37474F">l'aval : vers la mer</text>
  ${caption(1100, 580, "L'eau part de la source, grossit en ruisseau, en rivière puis en fleuve, et finit dans la mer.")}
</svg>`;
}

// ── 4. Lac, étang, marais (S28) ────────────────────────────────────────
function svgLacEtangMarais() {
  return `${svgHeader(1100, 560)}
  <rect width="1100" height="560" fill="#FFFFFF"/>
  ${title(1100, "Le lac, l'étang et le marais")}
  ${panelTitle(215, 105, "Le lac")}
  ${panel(40, 120, 350, 330, "#E8F5E9")}
  <ellipse cx="215" cy="330" rx="130" ry="80" fill="#64B5F6" stroke="#1E88E5" stroke-width="3"/>
  <path d="M 160 300 Q 215 285 270 300" stroke="#FFFFFF" stroke-width="4" fill="none"/>
  <ellipse cx="215" cy="255" rx="150" ry="26" fill="#A5D6A7" opacity="0.6"/>
  ${tree(90, 240, 0.8)} ${tree(330, 250, 0.7)}
  <g transform="translate(185,340)"><polygon points="0,0 22,6 0,12" fill="#EF5350"/><line x1="0" y1="6" x2="26" y2="6" stroke="#6D4C41" stroke-width="3"/></g>
  ${panelTitle(550, 105, "L'étang")}
  ${panel(405, 120, 350, 330, "#E8F5E9")}
  <ellipse cx="580" cy="330" rx="60" ry="38" fill="#64B5F6" stroke="#1E88E5" stroke-width="3"/>
  ${tree(470, 240, 0.7)} ${tree(680, 250, 0.6)}
  <text x="580" y="420" text-anchor="middle" font-size="21" fill="#37474F">une petite étendue d'eau</text>
  ${panelTitle(885, 105, "Le marais")}
  ${panel(760, 120, 350, 330, "#DCEDC8")}
  <path d="M 780 340 Q 820 320 870 335 Q 930 350 1000 332 Q 1060 318 1090 340 L 1090 440 L 780 440 Z" fill="#81C784" opacity="0.7"/>
  <path d="M 820 380 Q 860 368 900 380 Q 940 392 980 380" stroke="#4FC3F7" stroke-width="12" fill="none"/>
  <g stroke="#2E7D32" stroke-width="5" stroke-linecap="round">
    <line x1="800" y1="440" x2="800" y2="395"/><line x1="830" y1="440" x2="830" y2="385"/>
    <line x1="920" y1="440" x2="920" y2="390"/><line x1="950" y1="440" x2="950" y2="380"/>
    <line x1="1030" y1="440" x2="1030" y2="395"/><line x1="1060" y1="440" x2="1060" y2="388"/>
  </g>
  <text x="935" y="420" text-anchor="middle" font-size="21" fill="#37474F">un terrain humide et plein de roseaux</text>
  <text x="215" y="480" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">grande étendue d'eau entourée de terres</text>
  <text x="550" y="480" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">petite étendue d'eau peu profonde</text>
  <text x="935" y="480" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">terrain mouillé couvert d'eau et de plantes</text>
  ${caption(1100, 545, "À Madagascar, le lac Alaotra est le plus grand lac du pays ; ses bords forment de grands marais à roseaux.")}
</svg>`;
}

// ── 5. Forêt, savane, steppe (S29) ─────────────────────────────────────
function svgVegetation() {
  let foret = "";
  for (const [x, y, s] of [[80, 300, 0.9], [140, 290, 0.8], [200, 305, 0.75], [260, 295, 0.85], [320, 305, 0.7], [110, 360, 0.7], [170, 365, 0.8], [230, 370, 0.7], [290, 375, 0.75], [140, 430, 0.6], [210, 440, 0.65], [270, 445, 0.6]]) {
    foret += tree(x, y, s, "#1B5E20");
  }
  return `${svgHeader(1100, 560)}
  <rect width="1100" height="560" fill="#FFFFFF"/>
  ${title(1100, "La forêt, la savane et la steppe")}
  ${panelTitle(215, 105, "La forêt")}
  ${panel(40, 120, 350, 360, "#E8F5E9")}
  <rect x="52" y="470" width="326" height="0" fill="none"/>
  ${foret}
  <text x="215" y="505" text-anchor="middle" font-size="21" fill="#37474F">beaucoup d'arbres serrés</text>
  ${panelTitle(550, 105, "La savane")}
  ${panel(405, 120, 350, 360, "#F0E8C8")}
  <rect x="415" y="400" width="330" height="70" fill="#D9C46B"/>
  <g stroke="#8D6E63" stroke-width="3"><line x1="430" y1="470" x2="430" y2="440"/><line x1="560" y1="470" x2="560" y2="430"/><line x1="680" y1="470" x2="680" y2="445"/></g>
  <ellipse cx="430" cy="435" rx="42" ry="18" fill="#81C784" stroke="#2E7D32" stroke-width="2.5"/>
  <ellipse cx="560" cy="425" rx="48" ry="20" fill="#81C784" stroke="#2E7D32" stroke-width="2.5"/>
  <ellipse cx="680" cy="440" rx="38" ry="16" fill="#81C784" stroke="#2E7D32" stroke-width="2.5"/>
  <g stroke="#A1887F" stroke-width="2.5" stroke-linecap="round">
    <line x1="470" y1="470" x2="466" y2="452"/><line x1="490" y1="470" x2="492" y2="450"/>
    <line x1="610" y1="470" x2="606" y2="455"/><line x1="640" y1="470" x2="644" y2="452"/>
  </g>
  <circle cx="500" cy="200" r="22" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <text x="580" y="505" text-anchor="middle" font-size="21" fill="#37474F">herbes hautes et quelques arbres</text>
  ${panelTitle(885, 105, "La steppe")}
  ${panel(760, 120, 350, 360, "#F5E9C8")}
  <rect x="770" y="420" width="330" height="50" fill="#E0C97F"/>
  <circle cx="935" cy="195" r="24" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <g stroke="#BCAAA4" stroke-width="2.5" stroke-linecap="round">
    <line x1="790" y1="470" x2="787" y2="455"/><line x1="805" y1="470" x2="809" y2="452"/>
    <line x1="870" y1="470" x2="866" y2="458"/><line x1="990" y1="470" x2="995" y2="455"/>
    <line x1="1040" y1="470" x2="1036" y2="458"/><line x1="1010" y1="470" x2="1014" y2="452"/>
  </g>
  <g transform="translate(930,470)"><rect x="-3" y="-18" width="6" height="18" fill="#8D6E63"/><circle cx="0" cy="-24" r="12" fill="#BCAAA4" opacity="0.9"/></g>
  <text x="935" y="505" text-anchor="middle" font-size="21" fill="#37474F">herbes sèches et basses, arbres très rares</text>
  ${caption(1100, 545, "La végétation change selon la région : forêts denses et humides à l'Est, savanes et steppes sèches à l'Ouest et au Sud.")}
</svg>`;
}

// ── 6. Le paysage littoral (S30) ───────────────────────────────────────
function svgLittoral() {
  return `${svgHeader(1100, 720)}${DEFS}
  <rect width="1100" height="720" fill="#FFFFFF"/>
  ${title(1100, "Le paysage littoral : au bord de la mer")}
  <rect x="40" y="100" width="1020" height="500" rx="16" fill="#BBDEFB" stroke="#90A4AE" stroke-width="3"/>
  <path d="M 40 420 Q 150 330 280 370 Q 360 395 430 360 Q 520 320 640 380 Q 760 435 900 380 Q 990 348 1060 400 L 1060 600 L 40 600 Z" fill="#C8E6C9" stroke="#66BB6A" stroke-width="4"/>
  <path d="M 640 380 Q 700 415 790 400 Q 860 388 930 405 L 950 430 Q 860 450 780 438 Q 700 428 640 400 Z" fill="#8BC34A" opacity="0.7"/>
  <ellipse cx="220" cy="250" rx="60" ry="34" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <text x="220" y="310" text-anchor="middle" font-size="23" font-weight="bold" fill="#1B5E20">une île</text>
  <path d="M 880 600 Q 880 500 930 460 Q 985 505 985 600 Z" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <path d="M 1005 600 Q 1005 480 1050 440 Q 1060 450 1060 470 L 1060 600 Z" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <ellipse cx="1035" cy="430" rx="34" ry="20" fill="#C8E6C9" stroke="#66BB6A" stroke-width="3"/>
  <text x="1000" y="545" font-size="23" font-weight="bold" fill="#1B5E20">une presqu'île</text>
  <path d="M 420 600 Q 420 480 470 445 Q 525 490 525 600 Z" fill="#A5D6A7" stroke="#66BB6A" stroke-width="3"/>
  <text x="470" y="435" text-anchor="middle" font-size="23" font-weight="bold" fill="#1B5E20">un cap</text>
  <path d="M 120 600 L 120 500 Q 170 470 240 490 Q 300 508 330 470 L 330 600 Z" fill="#90CAF9" opacity="0.6"/>
  <text x="225" y="545" text-anchor="middle" font-size="23" font-weight="bold" fill="#0D47A1">une baie</text>
  <path d="M 620 600 Q 625 520 660 495 Q 700 470 710 445" stroke="#42A5F5" stroke-width="16" fill="none"/>
  <text x="640" y="425" font-size="23" font-weight="bold" fill="#0D47A1">un estuaire :</text>
  <text x="640" y="452" font-size="22" fill="#0D47A1">bouche du fleuve</text>
  <text x="80" y="395" font-size="23" font-weight="bold" fill="#2E7D32" transform="rotate(-12 80 395)">la côte</text>
  <text x="900" y="250" font-size="24" font-weight="bold" fill="#0D47A1">la mer</text>
  ${northArrow(990, 200, 60)}
  ${caption(1100, 660, "Le littoral, c'est le bord de la mer : côtes, plages, baies, caps, îles, presqu'îles et estuaires.")}
  ${caption(1100, 695, "Madagascar est une grande île : le canal du Mozambique à l'Ouest, l'océan Indien à l'Est.")}
</svg>`;
}

// ── 7. Le paysage marin (S31) ──────────────────────────────────────────
function svgMarin() {
  return `${svgHeader(1100, 620)}${DEFS}
  <rect width="1100" height="620" fill="#FFFFFF"/>
  ${title(1100, "Le paysage marin : sous la mer")}
  <rect x="40" y="100" width="1020" height="430" rx="16" fill="#4FC3F7" stroke="#90A4AE" stroke-width="3"/>
  <rect x="40" y="100" width="1020" height="70" fill="#81D4FA"/>
  <path d="M 40 115 Q 80 100 120 115 Q 160 130 200 115 Q 240 100 280 115 Q 320 130 360 115 Q 400 100 440 115 Q 480 130 520 115 Q 560 100 600 115 Q 640 130 680 115 Q 720 100 760 115 Q 800 130 840 115 Q 880 100 920 115 Q 960 130 1000 115 Q 1040 100 1060 112" stroke="#FFFFFF" stroke-width="5" fill="none"/>
  <rect x="40" y="470" width="1020" height="60" fill="#FFE082"/>
  <path d="M 150 530 Q 180 430 260 400 Q 350 370 430 400 Q 500 428 530 530 Z" fill="#FF8A65" stroke="#E64A19" stroke-width="3"/>
  <g transform="translate(300,470)"><path d="M 0 0 V -60 M 0 -60 L -20 -42 M 0 -60 L 20 -42 M 0 -38 L -16 -22 M 0 -38 L 16 -22 M 0 -20 L -12 -6 M 0 -20 L 12 -6" stroke="#F06292" stroke-width="8" stroke-linecap="round" fill="none"/></g>
  <circle cx="420" cy="460" r="30" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <circle cx="475" cy="480" r="20" fill="#FFAB91" stroke="#FF7043" stroke-width="3"/>
  <circle cx="880" cy="490" r="26" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <g stroke="#2E7D32" stroke-width="6" stroke-linecap="round">
    <path d="M 700 530 Q 695 480 680 455" fill="none"/>
    <path d="M 760 530 Q 770 470 785 450" fill="none"/>
    <path d="M 990 530 Q 985 490 975 470" fill="none"/>
  </g>
  <path d="M 600 515 l 6 -18 l 6 18 M 610 500 l 5 15" stroke="#FF7043" stroke-width="4" fill="none"/>
  ${fish(220, 240, 1.1)}
  ${fish(350, 300, 0.8, "#81C784")}
  ${fish(500, 220, 1, "#FFB74D")}
  ${fish(650, 320, 0.7)}
  ${fish(800, 250, 1, "#81C784")}
  ${fish(930, 320, 0.9, "#FFB74D")}
  <line x1="290" y1="370" x2="330" y2="320" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="230" y="180" font-size="24" font-weight="bold" fill="#FFFFFF">les coraux</text>
  <line x1="240" y1="190" x2="275" y2="340" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="520" y="180" font-size="24" font-weight="bold" fill="#FFFFFF">les récifs coralliens</text>
  <line x1="640" y1="190" x2="420" y2="425" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  <text x="820" y="180" font-size="24" font-weight="bold" fill="#FFFFFF">les poissons et les algues</text>
  <line x1="900" y1="190" x2="860" y2="330" stroke="#C00000" stroke-width="2.5" marker-end="url(#arrR)"/>
  ${caption(1100, 580, "Sous la mer vivent les coraux, les récifs, les poissons et les algues : le récif corallien abrite beaucoup d'animaux.")}
</svg>`;
}

// ── 8. Le paysage urbain (S32) ─────────────────────────────────────────
function svgUrbain() {
  const building = (x, y, w, h, c, rows = 4) => {
    let win = "";
    for (let r = 0; r < rows; r++) {
      for (let col = 0; col < Math.floor(w / 34); col++) {
        win += `<rect x="${x + 12 + col * 30}" y="${y + 14 + r * ((h - 20) / rows)}" width="16" height="14" fill="#FFF59D"/>`;
      }
    }
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${c}" stroke="#546E7A" stroke-width="2.5"/>${win}`;
  };
  return `${svgHeader(1100, 640)}
  <rect width="1100" height="640" fill="#FFFFFF"/>
  ${title(1100, "Le paysage urbain : la ville")}
  <rect x="40" y="100" width="1020" height="430" rx="16" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <rect x="40" y="460" width="1020" height="70" fill="#B0BEC5"/>
  <line x1="40" y1="495" x2="1060" y2="495" stroke="#FFFFFF" stroke-width="4" stroke-dasharray="22 14"/>
  ${building(70, 300, 110, 160, "#90A4AE", 5)}
  ${building(200, 250, 90, 210, "#B0BEC5", 6)}
  ${building(310, 330, 130, 130, "#78909C", 4)}
  ${building(560, 280, 100, 180, "#90A4AE", 5)}
  ${building(680, 320, 120, 140, "#B0BEC5", 4)}
  ${building(830, 260, 90, 200, "#78909C", 6)}
  ${building(940, 330, 100, 130, "#90A4AE", 4)}
  <g transform="translate(460,330)">
    <rect x="0" y="0" width="70" height="80" fill="#FFFFFF" stroke="#8D6E63" stroke-width="3"/>
    <polygon points="-6,0 35,-38 76,0" fill="#C62828"/>
    <rect x="29" y="-52" width="10" height="18" fill="#8D6E63"/>
    <line x1="34" y1="-52" x2="34" y2="-70" stroke="#8D6E63" stroke-width="4"/>
    <line x1="26" y1="-64" x2="42" y2="-64" stroke="#8D6E63" stroke-width="4"/>
  </g>
  <g transform="translate(120,170)">
    <rect x="0" y="0" width="34" height="26" fill="#E8F5E9" stroke="#2E7D32" stroke-width="2.5"/>
    <path d="M 17 -14 A 14 14 0 0 1 31 0" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2.5"/>
    <rect x="40" y="-52" width="12" height="78" fill="#C8E6C9" stroke="#2E7D32" stroke-width="2.5"/>
    <circle cx="46" cy="-58" r="9" fill="none" stroke="#2E7D32" stroke-width="2.5"/>
  </g>
  <g transform="translate(620,410)">
    <rect x="0" y="0" width="150" height="50" fill="#FFECB3" stroke="#FBC02D" stroke-width="3"/>
    <line x1="30" y1="0" x2="30" y2="50" stroke="#FBC02D" stroke-width="2"/>
    <line x1="60" y1="0" x2="60" y2="50" stroke="#FBC02D" stroke-width="2"/>
    <line x1="90" y1="0" x2="90" y2="50" stroke="#FBC02D" stroke-width="2"/>
    <line x1="120" y1="0" x2="120" y2="50" stroke="#FBC02D" stroke-width="2"/>
    <polygon points="-5,0 75,-24 155,0" fill="#F9A825" stroke="#F57F17" stroke-width="2"/>
  </g>
  <g transform="translate(280,455)">
    <rect x="0" y="14" width="66" height="22" rx="6" fill="#EF5350" stroke="#B71C1C" stroke-width="2.5"/>
    <rect x="14" y="0" width="36" height="16" rx="4" fill="#FFCDD2" stroke="#B71C1C" stroke-width="2"/>
    <circle cx="16" cy="40" r="7" fill="#37474F"/><circle cx="52" cy="40" r="7" fill="#37474F"/>
  </g>
  <text x="135" y="560" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">les grands bâtiments</text>
  <text x="360" y="560" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">l'église, la mosquée</text>
  <text x="695" y="585" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">le marché</text>
  <text x="950" y="560" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">les routes</text>
  <text x="600" y="620" text-anchor="middle" font-size="22" fill="#37474F">la ville : beaucoup de bâtiments, de quartiers, de routes et d'habitants</text>
</svg>`;
}

// ── 9. Le paysage rural (S33) ──────────────────────────────────────────
function svgRural() {
  return `${svgHeader(1100, 640)}
  <rect width="1100" height="640" fill="#FFFFFF"/>
  ${title(1100, "Le paysage rural : la campagne")}
  <rect x="40" y="100" width="1020" height="440" rx="16" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <path d="M 40 320 L 1060 320 L 1060 540 L 40 540 Z" fill="#C5E1A5"/>
  <rect x="40" y="470" width="480" height="70" fill="#AED581"/>
  <g stroke="#8BC34A" stroke-width="3">
    <line x1="80" y1="480" x2="80" y2="535"/><line x1="140" y1="480" x2="140" y2="535"/>
    <line x1="200" y1="480" x2="200" y2="535"/><line x1="260" y1="480" x2="260" y2="535"/>
    <line x1="320" y1="480" x2="320" y2="535"/><line x1="380" y1="480" x2="380" y2="535"/>
    <line x1="440" y1="480" x2="440" y2="535"/><line x1="500" y1="480" x2="500" y2="535"/>
  </g>
  <rect x="560" y="330" width="500" height="90" fill="#DCEDC8" stroke="#8BC34A" stroke-width="2"/>
  <g stroke="#8BC34A" stroke-width="2.5">
    <line x1="600" y1="330" x2="600" y2="420"/><line x1="660" y1="330" x2="660" y2="420"/>
    <line x1="720" y1="330" x2="720" y2="420"/><line x1="780" y1="330" x2="780" y2="420"/>
    <line x1="840" y1="330" x2="840" y2="420"/><line x1="900" y1="330" x2="900" y2="420"/>
    <line x1="960" y1="330" x2="960" y2="420"/><line x1="1020" y1="330" x2="1020" y2="420"/>
  </g>
  <g transform="translate(200,300)"><rect x="0" y="0" width="42" height="26" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/><polygon points="-5,0 21,-18 47,0" fill="#FB8C00"/></g>
  <g transform="translate(270,296)"><rect x="0" y="0" width="38" height="24" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/><polygon points="-4,0 19,-16 42,0" fill="#FB8C00"/></g>
  <g transform="translate(240,282)"><rect x="0" y="0" width="36" height="22" fill="#FFE0B2" stroke="#FB8C00" stroke-width="2.5"/><polygon points="-4,0 18,-15 40,0" fill="#FB8C00"/></g>
  ${tree(120, 280, 0.9)} ${tree(360, 275, 0.7)} ${tree(880, 265, 0.8)}
  ${zebu(700, 480, 1)}
  ${zebu(800, 500, 0.7)}
  <path d="M 520 320 L 580 540" stroke="#D7CCC8" stroke-width="16"/>
  <text x="250" y="580" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">les rizières et les champs de culture</text>
  <text x="770" y="580" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">le pâturage : les zébus y paissent</text>
  <text x="290" y="245" text-anchor="middle" font-size="22" font-weight="bold" fill="#1F4E79">le village</text>
  <text x="600" y="620" text-anchor="middle" font-size="22" fill="#37474F">la campagne : villages, champs de culture, rizières et pâturages</text>
</svg>`;
}

// ── 10. Les climats de Madagascar (S34) ────────────────────────────────
function svgClimatsMada() {
  const island = `M 232 52
    C 262 62 288 92 294 142
    C 302 192 332 216 324 258
    C 316 302 302 332 306 402
    C 312 482 296 562 286 632
    C 279 682 262 716 240 748
    C 224 764 204 752 199 722
    C 190 662 181 602 173 542
    C 162 472 149 422 151 352
    C 153 292 143 262 151 212
    C 145 162 162 112 192 72
    C 202 57 220 47 232 52 Z`;
  const clip = `<clipPath id="mada"><path d="${island}"/></clipPath>`;
  return `${svgHeader(1100, 820)}${DEFS}
  <rect width="1100" height="820" fill="#FFFFFF"/>
  ${title(1100, "Les climats de Madagascar (carte simplifiée)")}
  <defs>${clip}</defs>
  <rect x="40" y="100" width="440" height="660" rx="16" fill="#E3F2FD" stroke="#90A4AE" stroke-width="3"/>
  <g clip-path="url(#mada)">
    <rect x="100" y="40" width="260" height="740" fill="#FFE082"/>
    <polygon points="290,60 340,60 340,760 260,760 282,600 292,460 280,300 296,220 280,140" fill="#81C784"/>
    <ellipse cx="215" cy="360" rx="80" ry="190" fill="#81D4FA"/>
    <rect x="100" y="540" width="260" height="230" fill="#FFB74D"/>
  </g>
  <path d="${island}" fill="none" stroke="#37474F" stroke-width="4"/>
  <text x="287" y="400" font-size="20" font-weight="bold" fill="#1B5E20" transform="rotate(-78 287 400)">EST</text>
  <text x="213" y="352" text-anchor="middle" font-size="19" font-weight="bold" fill="#01579B">HAUTES</text>
  <text x="213" y="376" text-anchor="middle" font-size="19" font-weight="bold" fill="#01579B">TERRES</text>
  <text x="163" y="470" font-size="19" font-weight="bold" fill="#8D6E63" transform="rotate(-80 163 470)">OUEST</text>
  <text x="222" y="648" text-anchor="middle" font-size="21" font-weight="bold" fill="#BF360C">SUD</text>
  ${northArrow(430, 190, 60)}
  <rect x="520" y="140" width="540" height="420" rx="16" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  <text x="790" y="185" text-anchor="middle" font-size="25" font-weight="bold" fill="#1F4E79">Légende</text>
  <g transform="translate(560,220)">
    <rect x="0" y="0" width="46" height="28" fill="#81C784" stroke="#37474F" stroke-width="2"/>
    <text x="66" y="21" font-size="23" fill="#37474F">Côte Est : chaud et humide, il pleut souvent</text>
  </g>
  <g transform="translate(560,290)">
    <rect x="0" y="0" width="46" height="28" fill="#81D4FA" stroke="#37474F" stroke-width="2"/>
    <text x="66" y="21" font-size="23" fill="#37474F">Hautes Terres : climat frais des montagnes</text>
  </g>
  <g transform="translate(560,360)">
    <rect x="0" y="0" width="46" height="28" fill="#FFE082" stroke="#37474F" stroke-width="2"/>
    <text x="66" y="21" font-size="23" fill="#37474F">Côte Ouest : chaud, longue saison sèche</text>
  </g>
  <g transform="translate(560,430)">
    <rect x="0" y="0" width="46" height="28" fill="#FFB74D" stroke="#37474F" stroke-width="2"/>
    <text x="66" y="21" font-size="23" fill="#37474F">Sud : sec et chaud presque toute l'année</text>
  </g>
  <text x="790" y="515" text-anchor="middle" font-size="21" fill="#546E7A" font-style="italic">Le climat change selon les régions de l'île.</text>
  ${caption(1100, 800, "Madagascar : climat humide à l'Est, frais sur les Hautes Terres, sec à l'Ouest et au Sud.")}
</svg>`;
}

// ── 11. Le climat et le paysage (S35) ──────────────────────────────────
function svgClimatPaysage() {
  const pluie = (x) => `<g stroke="#4FC3F7" stroke-width="4" stroke-linecap="round">
    <line x1="${x}" y1="180" x2="${x - 10}" y2="210"/><line x1="${x + 22}" y1="170" x2="${x + 12}" y2="200"/>
    <line x1="${x + 44}" y1="185" x2="${x + 34}" y2="215"/><line x1="${x + 14}" y1="225" x2="${x + 4}" y2="255"/>
    <line x1="${x + 40}" y1="230" x2="${x + 30}" y2="260"/></g>`;
  return `${svgHeader(1100, 580)}
  <rect width="1100" height="580" fill="#FFFFFF"/>
  ${title(1100, "Le climat et le paysage")}
  ${panelTitle(280, 105, "Une région humide : il pleut souvent")}
  ${panel(40, 120, 480, 350, "#E8F5E9")}
  <path d="M 80 470 L 80 420 Q 200 360 300 380 L 470 470 Z" fill="#A5D6A7"/>
  ${tree(120, 390, 1, "#1B5E20")} ${tree(190, 380, 0.85, "#2E7D32")} ${tree(260, 392, 0.95, "#1B5E20")} ${tree(330, 385, 0.8, "#2E7D32")} ${tree(400, 395, 0.9, "#1B5E20")}
  <path d="M 60 470 Q 160 455 260 465 Q 360 472 500 462" stroke="#42A5F5" stroke-width="20" fill="none"/>
  <g fill="#B0BEC5" opacity="0.9">
    <ellipse cx="180" cy="160" rx="55" ry="24"/><ellipse cx="225" cy="150" rx="60" ry="26"/><ellipse cx="330" cy="160" rx="52" ry="22"/>
  </g>
  ${pluie(230)}
  <text x="280" y="505" text-anchor="middle" font-size="21" fill="#37474F">forêt dense, rivière bien pleine</text>
  ${panelTitle(820, 105, "Une région sèche : il pleut peu")}
  ${panel(580, 120, 480, 350, "#F5E9C8")}
  <circle cx="960" cy="185" r="30" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>
  <rect x="590" y="430" width="460" height="40" fill="#E0C97F"/>
  <g transform="translate(700,430)"><rect x="-4" y="-26" width="8" height="26" fill="#8D6E63"/><ellipse cx="0" cy="-34" rx="40" ry="16" fill="#BCAAA4" stroke="#8D6E63" stroke-width="2"/></g>
  <g stroke="#BCAAA4" stroke-width="2.5" stroke-linecap="round">
    <line x1="640" y1="470" x2="636" y2="452"/><line x1="660" y1="470" x2="664" y2="450"/>
    <line x1="880" y1="470" x2="876" y2="455"/><line x1="900" y1="470" x2="904" y2="452"/>
    <line x1="1000" y1="470" x2="996" y2="458"/><line x1="1020" y1="470" x2="1024" y2="455"/>
  </g>
  <path d="M 600 470 Q 700 465 820 468 Q 920 470 1040 465" stroke="#90CAF9" stroke-width="7" fill="none"/>
  <text x="820" y="505" text-anchor="middle" font-size="21" fill="#37474F">savane sèche, rivière maigre</text>
  ${caption(1100, 555, "Le climat influence le paysage : selon la pluie et la chaleur, la végétation et les cours d'eau changent.")}
</svg>`;
}

// ── 12. L'utilité des éléments du paysage (S36) ────────────────────────
function svgUtilites() {
  return `${svgHeader(1100, 640)}${DEFS}
  <rect width="1100" height="640" fill="#FFFFFF"/>
  ${title(1100, "L'utilité du relief, des cours d'eau et de la végétation")}
  <g transform="translate(60,120)">
    <rect x="0" y="0" width="310" height="460" rx="16" fill="#ECEFF1" stroke="#90A4AE" stroke-width="3"/>
    <text x="155" y="45" text-anchor="middle" font-size="26" font-weight="bold" fill="#1F4E79">Le relief</text>
    <polygon points="95,150 135,90 175,150" fill="#90A4AE" stroke="#607D8B" stroke-width="2.5"/>
    <path d="M 30 150 L 280 150" stroke="#8D6E63" stroke-width="4"/>
    <path d="M 185 150 L 200 135 L 215 150 L 230 135 L 245 150 L 260 135 L 275 150" stroke="#66BB6A" stroke-width="9" fill="none"/>
    <text x="155" y="185" text-anchor="middle" font-size="20" fill="#37474F">on cultive en terrasses sur les pentes</text>
    <circle cx="135" cy="88" r="6" fill="#4FC3F7"/>
    <path d="M 135 94 Q 130 115 120 130" stroke="#4FC3F7" stroke-width="4" fill="none"/>
    <text x="155" y="235" text-anchor="middle" font-size="20" fill="#37474F">les montagnes donnent des sources</text>
    <rect x="45" y="265" width="220" height="46" fill="#DCEDC8" stroke="#8BC34A" stroke-width="2"/>
    <text x="155" y="294" text-anchor="middle" font-size="20" fill="#37474F">la plaine et le plateau :</text>
    <text x="155" y="345" text-anchor="middle" font-size="20" fill="#37474F">de grandes surfaces pour cultiver</text>
    <text x="155" y="425" text-anchor="middle" font-size="19" fill="#546E7A" font-style="italic">et pour bâtir les villages</text>
  </g>
  <g transform="translate(395,120)">
    <rect x="0" y="0" width="310" height="460" rx="16" fill="#E1F5FE" stroke="#90A4AE" stroke-width="3"/>
    <text x="155" y="45" text-anchor="middle" font-size="26" font-weight="bold" fill="#1F4E79">Les cours d'eau</text>
    <path d="M 40 130 Q 155 118 270 128" stroke="#42A5F5" stroke-width="22" fill="none"/>
    <path d="M 88 118 a 12 12 0 0 1 12 -12 a 12 12 0 0 1 12 12" fill="#4FC3F7"/>
    <text x="155" y="185" text-anchor="middle" font-size="20" fill="#37474F">l'eau pour boire et laver</text>
    <rect x="60" y="215" width="190" height="40" fill="#C5E1A5" stroke="#8BC34A" stroke-width="2"/>
    <line x1="95" y1="215" x2="95" y2="255" stroke="#8BC34A" stroke-width="2"/>
    <line x1="130" y1="215" x2="130" y2="255" stroke="#8BC34A" stroke-width="2"/>
    <line x1="165" y1="215" x2="165" y2="255" stroke="#8BC34A" stroke-width="2"/>
    <line x1="200" y1="215" x2="200" y2="255" stroke="#8BC34A" stroke-width="2"/>
    <path d="M 40 255 Q 155 247 270 253" stroke="#42A5F5" stroke-width="14" fill="none"/>
    <text x="155" y="292" text-anchor="middle" font-size="20" fill="#37474F">l'eau qui arrose les rizières</text>
    ${fish(155, 330, 0.8)}
    <text x="155" y="380" text-anchor="middle" font-size="20" fill="#37474F">la pêche : des poissons à manger</text>
    <g transform="translate(115,405)"><polygon points="0,0 46,10 0,20" fill="#8D6E63"/><line x1="0" y1="10" x2="52" y2="10" stroke="#6D4C41" stroke-width="5"/></g>
    <text x="155" y="455" text-anchor="middle" font-size="20" fill="#37474F">le transport en pirogue</text>
  </g>
  <g transform="translate(730,120)">
    <rect x="0" y="0" width="310" height="460" rx="16" fill="#E8F5E9" stroke="#90A4AE" stroke-width="3"/>
    <text x="155" y="45" text-anchor="middle" font-size="26" font-weight="bold" fill="#1F4E79">La végétation</text>
    ${tree(155, 130, 1.1)}
    <text x="155" y="200" text-anchor="middle" font-size="20" fill="#37474F">le bois pour cuire et construire</text>
    <g transform="translate(115,240)"><rect x="-3" y="-24" width="6" height="24" fill="#8D6E63"/><circle cx="0" cy="-32" r="18" fill="#81C784" stroke="#2E7D32" stroke-width="2"/><circle cx="-10" cy="-24" r="4.5" fill="#EF5350"/><circle cx="6" cy="-20" r="4.5" fill="#EF5350"/><circle cx="12" cy="-32" r="4.5" fill="#EF5350"/></g>
    <text x="155" y="278" text-anchor="middle" font-size="20" fill="#37474F">les fruits à manger</text>
    <g transform="translate(130,320)">
      <circle cx="25" cy="0" r="26" fill="#81C784" opacity="0.45"/>
      <g transform="translate(25,10)"><rect x="-3" y="0" width="6" height="18" fill="#8D6E63"/></g>
      <line x1="60" y1="0" x2="100" y2="0" stroke="#F9A825" stroke-width="4" marker-end="url(#arrS)"/>
    </g>
    <text x="155" y="380" text-anchor="middle" font-size="20" fill="#37474F">l'ombre contre le soleil</text>
    <text x="155" y="425" text-anchor="middle" font-size="20" fill="#37474F">les racines retiennent la terre</text>
    <text x="155" y="455" text-anchor="middle" font-size="19" fill="#546E7A" font-style="italic">et protègent le sol de la pluie</text>
  </g>
  ${caption(1100, 615, "Le relief, les cours d'eau et la végétation sont utiles à l'homme pour vivre, cultiver et se déplacer.")}
</svg>`;
}

// ── Écriture + conversion ────────────────────────────────────────────────
const SVG = {
  geot4_types_paysage: svgTypesPaysage(),
  geot4_relief: svgRelief(),
  geot4_cours_eau: svgCoursEau(),
  geot4_lac_etang_marais: svgLacEtangMarais(),
  geot4_vegetation: svgVegetation(),
  geot4_littoral: svgLittoral(),
  geot4_marin: svgMarin(),
  geot4_paysage_urbain: svgUrbain(),
  geot4_paysage_rural: svgRural(),
  geot4_climats_mada: svgClimatsMada(),
  geot4_climat_paysage: svgClimatPaysage(),
  geot4_utilites: svgUtilites(),
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
