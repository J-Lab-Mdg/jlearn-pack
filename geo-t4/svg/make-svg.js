// make-svg.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T4
// Génère les SVG puis les convertit en PNG (~1100 px) avec sharp.
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const OUT = path.join(__dirname, ".."); // geo-t4/
const REPO = path.resolve(OUT, "..");   // racine du dépôt
const FONT = "Georgia, 'Times New Roman', serif";

const svgHeader = (w, h) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" font-family="${FONT}">`;
const sun = (cx, cy, r, rays = true) => {
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFD54F" stroke="#F9A825" stroke-width="3"/>`;
  if (rays) {
    for (let i = 0; i < 8; i++) {
      const a = (Math.PI / 4) * i;
      const x1 = cx + Math.cos(a) * (r + 5), y1 = cy + Math.sin(a) * (r + 5);
      const x2 = cx + Math.cos(a) * (r + 18), y2 = cy + Math.sin(a) * (r + 18);
      s += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#F9A825" stroke-width="4" stroke-linecap="round"/>`;
    }
  }
  return s;
};

// ── 1. Lever et coucher du soleil : l'Est et l'Ouest ────────────────────
function svgLeverCoucher() {
  // Panneau : ciel, soleil PUIS sol (le sol recouvre le bas du soleil couchant)
  const panel = (x0, titre, sunX, sunY, dirLabel, dirColor, fleche) => `
    <g>
      <rect x="${x0}" y="90" width="480" height="360" rx="18" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
      <clipPath id="cadre${x0}"><rect x="${x0 + 4}" y="94" width="472" height="352" rx="14"/></clipPath>
      <g clip-path="url(#cadre${x0})">
        ${sun(sunX, sunY, 42)}
        <rect x="${x0 + 3}" y="330" width="474" height="120" fill="#C8E6C9"/>
        <line x1="${x0 + 3}" y1="330" x2="${x0 + 477}" y2="330" stroke="#66BB6A" stroke-width="4"/>
      </g>
      <text x="${x0 + 240}" y="150" text-anchor="middle" font-size="34" font-weight="bold" fill="#37474F">${titre}</text>
      <path d="${fleche}" stroke="${dirColor}" stroke-width="6" fill="none" marker-end="url(#arr${dirColor.replace('#', '')})"/>
      <text x="${sunX}" y="435" text-anchor="middle" font-size="40" font-weight="bold" fill="${dirColor}">${dirLabel}</text>
    </g>`;
  return `${svgHeader(1100, 560)}
  <defs>
    <marker id="arrEF5350" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#EF5350"/></marker>
    <marker id="arr42A5F5" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#42A5F5"/></marker>
  </defs>
  <rect width="1100" height="560" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="36" font-weight="bold" fill="#1F4E79">Le soleil se lève à l'Est et se couche à l'Ouest</text>
  ${panel(40, "Le matin", 160, 295, "EST", "#EF5350", "M 230 260 L 230 195")}
  ${panel(580, "Le soir", 940, 368, "OUEST", "#42A5F5", "M 870 200 L 870 265")}
  <text x="550" y="520" text-anchor="middle" font-size="26" fill="#546E7A" font-style="italic">Le côté du lever du soleil s'appelle l'Est ; le côté du coucher s'appelle l'Ouest.</text>
</svg>`;
}

// ── 2. Mouvement apparent du soleil ─────────────────────────────────────
function svgMouvementSoleil() {
  return `${svgHeader(1100, 620)}
  <defs>
    <marker id="arrG" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto"><path d="M0,0 L7,3 L0,6 Z" fill="#F9A825"/></marker>
  </defs>
  <rect width="1100" height="620" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="36" font-weight="bold" fill="#1F4E79">Le mouvement apparent du soleil</text>
  <rect x="60" y="120" width="980" height="400" rx="18" fill="#EAF4FB" stroke="#90A4AE" stroke-width="3"/>
  <rect x="63" y="400" width="974" height="117" rx="15" fill="#C8E6C9"/>
  <line x1="63" y1="400" x2="1037" y2="400" stroke="#66BB6A" stroke-width="4"/>
  <!-- arc pointillé du lever au coucher -->
  <path d="M 150 400 Q 150 150 550 140 Q 950 150 950 400" stroke="#F9A825" stroke-width="6" stroke-dasharray="14 10" fill="none" marker-end="url(#arrG)"/>
  ${sun(150, 385, 36, true)}
  ${sun(550, 150, 44, true)}
  ${sun(950, 385, 36, true)}
  <text x="150" y="465" text-anchor="middle" font-size="28" font-weight="bold" fill="#EF5350">Est</text>
  <text x="950" y="465" text-anchor="middle" font-size="28" font-weight="bold" fill="#42A5F5">Ouest</text>
  <text x="220" y="530" text-anchor="middle" font-size="26" fill="#37474F">Le matin : le soleil se lève à l'Est.</text>
  <text x="550" y="105" text-anchor="middle" font-size="26" fill="#37474F">À midi : le soleil est haut dans le ciel.</text>
  <text x="830" y="530" text-anchor="middle" font-size="26" fill="#37474F">Le soir : il se couche à l'Ouest.</text>
  <text x="550" y="590" text-anchor="middle" font-size="26" fill="#546E7A" font-style="italic">Pendant la journée, le soleil semble se déplacer de l'Est vers l'Ouest.</text>
</svg>`;
}

// ── 3. La boussole et le GPS ────────────────────────────────────────────
function svgBoussoleGps() {
  return `${svgHeader(1100, 620)}
  <rect width="1100" height="620" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="36" font-weight="bold" fill="#1F4E79">La boussole et le GPS</text>
  <!-- Boussole -->
  <g>
    <circle cx="280" cy="320" r="190" fill="#FFF8E1" stroke="#8D6E63" stroke-width="10"/>
    <circle cx="280" cy="320" r="150" fill="#FFFFFF" stroke="#BCAAA4" stroke-width="3"/>
    <text x="280" y="175" text-anchor="middle" font-size="34" font-weight="bold" fill="#C00000">N</text>
    <text x="280" y="485" text-anchor="middle" font-size="34" font-weight="bold" fill="#37474F">S</text>
    <text x="440" y="332" text-anchor="middle" font-size="34" font-weight="bold" fill="#37474F">E</text>
    <text x="120" y="332" text-anchor="middle" font-size="34" font-weight="bold" fill="#37474F">O</text>
    <text x="393" y="212" text-anchor="middle" font-size="24" font-weight="bold" fill="#8D6E63">NE</text>
    <text x="167" y="212" text-anchor="middle" font-size="24" font-weight="bold" fill="#8D6E63">NO</text>
    <text x="393" y="452" text-anchor="middle" font-size="24" font-weight="bold" fill="#8D6E63">SE</text>
    <text x="167" y="452" text-anchor="middle" font-size="24" font-weight="bold" fill="#8D6E63">SO</text>
    <polygon points="280,190 262,320 298,320" fill="#EF5350"/>
    <polygon points="280,450 262,320 298,320" fill="#78909C"/>
    <circle cx="280" cy="320" r="14" fill="#37474F"/>
    <text x="280" y="575" text-anchor="middle" font-size="30" font-weight="bold" fill="#37474F">La boussole</text>
  </g>
  <!-- GPS -->
  <g>
    <rect x="620" y="150" width="270" height="360" rx="30" fill="#37474F"/>
    <rect x="640" y="180" width="230" height="280" rx="10" fill="#E8F5E9"/>
    <path d="M 650 420 L 700 350 L 760 390 L 830 300 L 865 340 L 865 455 L 650 455 Z" fill="#A5D6A7" stroke="none"/>
    <path d="M 640 300 Q 750 260 870 320" stroke="#90CAF9" stroke-width="14" fill="none"/>
    <path d="M 780 180 Q 690 260 720 455" stroke="#90CAF9" stroke-width="10" fill="none"/>
    <line x1="640" y1="400" x2="870" y2="400" stroke="#FFB74D" stroke-width="8"/>
    <circle cx="755" cy="262" r="30" fill="#1F4E79"/>
    <polygon points="755,300 735,265 775,265" fill="#EF5350"/>
    <circle cx="755" cy="255" r="10" fill="#FFFFFF"/>
    <text x="755" y="575" text-anchor="middle" font-size="30" font-weight="bold" fill="#37474F">Le GPS</text>
  </g>
  <text x="1000" y="255" text-anchor="middle" font-size="24" fill="#546E7A">L'aiguille rouge</text>
  <text x="1000" y="285" text-anchor="middle" font-size="24" fill="#546E7A">pointe toujours</text>
  <text x="1000" y="315" text-anchor="middle" font-size="24" font-weight="bold" fill="#C00000">vers le Nord</text>
  <text x="550" y="600" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Deux instruments qui nous aident à trouver le Nord.</text>
</svg>`;
}

// ── 4. Les quatre points cardinaux ──────────────────────────────────────
function svgPointsCardinaux() {
  return `${svgHeader(1100, 700)}
  <defs>
    <marker id="arrN" markerWidth="12" markerHeight="12" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#C00000"/></marker>
  </defs>
  <rect width="1100" height="700" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="36" font-weight="bold" fill="#1F4E79">Les quatre points cardinaux</text>
  <line x1="550" y1="470" x2="550" y2="160" stroke="#C00000" stroke-width="10" marker-end="url(#arrN)"/>
  <line x1="550" y1="440" x2="550" y2="660" stroke="#37474F" stroke-width="8" marker-end="url(#arrK)"/>
  <defs><marker id="arrK" markerWidth="12" markerHeight="12" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#37474F"/></marker></defs>
  <line x1="530" y1="450" x2="180" y2="450" stroke="#42A5F5" stroke-width="8" marker-end="url(#arrO)"/>
  <defs><marker id="arrO" markerWidth="12" markerHeight="12" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#42A5F5"/></marker></defs>
  <line x1="570" y1="450" x2="920" y2="450" stroke="#EF5350" stroke-width="8" marker-end="url(#arrE)"/>
  <defs><marker id="arrE" markerWidth="12" markerHeight="12" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#EF5350"/></marker></defs>
  <circle cx="550" cy="450" r="58" fill="#FFF3E0" stroke="#FB8C00" stroke-width="5"/>
  <text x="550" y="443" text-anchor="middle" font-size="26" fill="#37474F">Je me</text>
  <text x="550" y="473" text-anchor="middle" font-size="26" fill="#37474F">tiens ici</text>
  <text x="550" y="140" text-anchor="middle" font-size="44" font-weight="bold" fill="#C00000">N — Nord</text>
  <text x="550" y="695" text-anchor="middle" font-size="40" font-weight="bold" fill="#37474F">S — Sud</text>
  <text x="955" y="462" text-anchor="middle" font-size="40" font-weight="bold" fill="#EF5350">E — Est</text>
  <text x="145" y="462" text-anchor="middle" font-size="40" font-weight="bold" fill="#42A5F5">O — Ouest</text>
  ${sun(920, 300, 34)}
  <text x="920" y="250" text-anchor="middle" font-size="24" fill="#EF5350" font-style="italic">Le soleil se lève</text>
  <text x="160" y="250" text-anchor="middle" font-size="24" fill="#42A5F5" font-style="italic">Le soleil se couche</text>
  <text x="550" y="105" text-anchor="middle" font-size="0" fill="#546E7A"></text>
</svg>`;
}

// ── 5. Les directions intermédiaires ────────────────────────────────────
function svgDirectionsIntermediaires() {
  const cx = 550, cy = 400, R = 260, r = 165;
  const pts = (ang, rad) => `${cx + rad * Math.cos((ang - 90) * Math.PI / 180)},${cy + rad * Math.sin((ang - 90) * Math.PI / 180)}`;
  const card = (ang, label, color) => `
    <polygon points="${cx},${cy} ${pts(ang, R)} ${pts(ang + 2, 30)}" fill="${color}" opacity="0.85"/>
    <polygon points="${cx},${cy} ${pts(ang, R)} ${pts(ang - 2, 30)}" fill="${color}" opacity="0.6"/>
    <text x="${cx + (R + 55) * Math.cos((ang - 90) * Math.PI / 180)}" y="${cy + (R + 55) * Math.sin((ang - 90) * Math.PI / 180) + 12}" text-anchor="middle" font-size="38" font-weight="bold" fill="${color}">${label}</text>`;
  const inter = (ang, label) => `
    <polygon points="${cx},${cy} ${pts(ang, r)} ${pts(ang + 3, 25)}" fill="#FB8C00" opacity="0.85"/>
    <polygon points="${cx},${cy} ${pts(ang, r)} ${pts(ang - 3, 25)}" fill="#FB8C00" opacity="0.55"/>
    <text x="${cx + (r + 70) * Math.cos((ang - 90) * Math.PI / 180)}" y="${cy + (r + 70) * Math.sin((ang - 90) * Math.PI / 180) + 10}" text-anchor="middle" font-size="30" font-weight="bold" fill="#E65100">${label}</text>`;
  return `${svgHeader(1100, 760)}
  <rect width="1100" height="760" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="36" font-weight="bold" fill="#1F4E79">Les directions intermédiaires</text>
  ${card(0, "N", "#C00000")}
  ${card(90, "E", "#EF5350")}
  ${card(180, "S", "#37474F")}
  ${card(270, "O", "#42A5F5")}
  ${inter(45, "NE")}
  ${inter(135, "SE")}
  ${inter(225, "SO")}
  ${inter(315, "NO")}
  <circle cx="${cx}" cy="${cy}" r="46" fill="#FFF3E0" stroke="#FB8C00" stroke-width="4"/>
  <text x="550" y="730" text-anchor="middle" font-size="26" fill="#546E7A" font-style="italic">Entre deux points cardinaux voisins se trouve une direction intermédiaire (ici NE).</text>
</svg>`;
}

// ── 6. La rose des vents ────────────────────────────────────────────────
function svgRoseDesVents() {
  const cx = 550, cy = 400, R = 280, r = 180;
  const pts = (ang, rad) => `${cx + rad * Math.cos((ang - 90) * Math.PI / 180)},${cy + rad * Math.sin((ang - 90) * Math.PI / 180)}`;
  const card = (ang, label, color, len) => `
    <polygon points="${cx},${cy} ${pts(ang, len)} ${pts(ang + 4, 32)}" fill="${color}"/>
    <polygon points="${cx},${cy} ${pts(ang, len)} ${pts(ang - 4, 32)}" fill="${color}" opacity="0.65"/>
    <text x="${cx + (len + 58) * Math.cos((ang - 90) * Math.PI / 180)}" y="${cy + (len + 58) * Math.sin((ang - 90) * Math.PI / 180) + 14}" text-anchor="middle" font-size="42" font-weight="bold" fill="${color}">${label}</text>`;
  const inter = (ang, label) => `
    <polygon points="${cx},${cy} ${pts(ang, r)} ${pts(ang + 5, 26)}" fill="#FB8C00"/>
    <polygon points="${cx},${cy} ${pts(ang, r)} ${pts(ang - 5, 26)}" fill="#FFB74D" opacity="0.9"/>
    <text x="${cx + (r + 66) * Math.cos((ang - 90) * Math.PI / 180)}" y="${cy + (r + 66) * Math.sin((ang - 90) * Math.PI / 180) + 10}" text-anchor="middle" font-size="30" font-weight="bold" fill="#E65100">${label}</text>`;
  return `${svgHeader(1100, 780)}
  <rect width="1100" height="780" fill="#FFFFFF"/>
  <text x="550" y="55" text-anchor="middle" font-size="38" font-weight="bold" fill="#1F4E79">La rose des vents</text>
  <circle cx="${cx}" cy="${cy}" r="${R + 30}" fill="none" stroke="#B0BEC5" stroke-width="3" stroke-dasharray="6 8"/>
  ${card(0, "N", "#C00000", R + 40)}
  ${card(90, "E", "#EF5350", R)}
  ${card(180, "S", "#37474F", R)}
  ${card(270, "O", "#42A5F5", R)}
  ${inter(45, "NE")}${inter(135, "SE")}${inter(225, "SO")}${inter(315, "NO")}
  <circle cx="${cx}" cy="${cy}" r="40" fill="#FFF8E1" stroke="#F9A825" stroke-width="5"/>
  <circle cx="${cx}" cy="${cy}" r="12" fill="#F9A825"/>
  <text x="550" y="760" text-anchor="middle" font-size="26" fill="#546E7A" font-style="italic">Les grandes branches donnent les points cardinaux ; les branches courtes, les directions intermédiaires.</text>
</svg>`;
}

// ── 7. Construction de la rose des vents (4 étapes) ─────────────────────
function svgConstructionRose() {
  const step = (x0, num, titre) => `
    <rect x="${x0}" y="100" width="240" height="240" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
    <text x="${x0 + 120}" y="70" text-anchor="middle" font-size="26" font-weight="bold" fill="#1F4E79">Étape ${num}</text>
    <text x="${x0 + 120}" y="380" text-anchor="middle" font-size="22" fill="#37474F">${titre}</text>`;
  const cx = (x0) => x0 + 120, cy = 220;
  return `${svgHeader(1100, 440)}
  <rect width="1100" height="440" fill="#FFFFFF"/>
  <text x="550" y="40" text-anchor="middle" font-size="34" font-weight="bold" fill="#1F4E79">Dessiner une rose des vents : les étapes</text>
  <!-- étape 1 : croix -->
  ${step(30, 1, "Tracer une croix")}
  <line x1="${cx(30)}" y1="140" x2="${cx(30)}" y2="300" stroke="#37474F" stroke-width="5"/>
  <line x1="${cx(30) - 70}" y1="220" x2="${cx(30) + 70}" y2="220" stroke="#37474F" stroke-width="5"/>
  <!-- étape 2 : diagonales -->
  ${step(300, 2, "Tracer les diagonales")}
  <line x1="${cx(300)}" y1="140" x2="${cx(300)}" y2="300" stroke="#37474F" stroke-width="5"/>
  <line x1="${cx(300) - 70}" y1="220" x2="${cx(300) + 70}" y2="220" stroke="#37474F" stroke-width="5"/>
  <line x1="${cx(300) - 52}" y1="164" x2="${cx(300) + 52}" y2="276" stroke="#FB8C00" stroke-width="4"/>
  <line x1="${cx(300) - 52}" y1="276" x2="${cx(300) + 52}" y2="164" stroke="#FB8C00" stroke-width="4"/>
  <!-- étape 3 : branche du Nord allongée -->
  ${step(570, 3, "Allonger la branche du Nord")}
  <line x1="${cx(570)}" y1="128" x2="${cx(570)}" y2="300" stroke="#C00000" stroke-width="7"/>
  <line x1="${cx(570) - 70}" y1="220" x2="${cx(570) + 70}" y2="220" stroke="#37474F" stroke-width="5"/>
  <line x1="${cx(570) - 52}" y1="164" x2="${cx(570) + 52}" y2="276" stroke="#FB8C00" stroke-width="4"/>
  <line x1="${cx(570) - 52}" y1="276" x2="${cx(570) + 52}" y2="164" stroke="#FB8C00" stroke-width="4"/>
  <!-- étape 4 : lettres -->
  ${step(840, 4, "Écrire les lettres")}
  <line x1="${cx(840)}" y1="128" x2="${cx(840)}" y2="300" stroke="#C00000" stroke-width="7"/>
  <line x1="${cx(840) - 70}" y1="220" x2="${cx(840) + 70}" y2="220" stroke="#37474F" stroke-width="5"/>
  <line x1="${cx(840) - 52}" y1="164" x2="${cx(840) + 52}" y2="276" stroke="#FB8C00" stroke-width="4"/>
  <line x1="${cx(840) - 52}" y1="276" x2="${cx(840) + 52}" y2="164" stroke="#FB8C00" stroke-width="4"/>
  <text x="${cx(840)}" y="122" text-anchor="middle" font-size="26" font-weight="bold" fill="#C00000">N</text>
  <text x="${cx(840)}" y="322" text-anchor="middle" font-size="26" font-weight="bold" fill="#37474F">S</text>
  <text x="${cx(840) + 86}" y="230" text-anchor="middle" font-size="26" font-weight="bold" fill="#EF5350">E</text>
  <text x="${cx(840) - 86}" y="230" text-anchor="middle" font-size="26" font-weight="bold" fill="#42A5F5">O</text>
  <text x="${cx(840) + 68}" y="160" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">NE</text>
  <text x="${cx(840) - 68}" y="160" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">NO</text>
  <text x="${cx(840) + 68}" y="296" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">SE</text>
  <text x="${cx(840) - 68}" y="296" text-anchor="middle" font-size="20" font-weight="bold" fill="#E65100">SO</text>
  <text x="550" y="425" text-anchor="middle" font-size="24" fill="#546E7A" font-style="italic">Le Nord est toujours placé en haut de la rose des vents.</text>
</svg>`;
}

// ── Écriture + conversion ────────────────────────────────────────────────
const SVG = {
  geot4_lever_coucher_soleil: svgLeverCoucher(),
  geot4_mouvement_soleil: svgMouvementSoleil(),
  geot4_boussole_gps: svgBoussoleGps(),
  geot4_points_cardinaux: svgPointsCardinaux(),
  geot4_directions_intermediaires: svgDirectionsIntermediaires(),
  geot4_rose_vents: svgRoseDesVents(),
  geot4_construction_rose: svgConstructionRose(),
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
