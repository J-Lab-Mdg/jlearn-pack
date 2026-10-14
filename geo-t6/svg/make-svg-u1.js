// make-svg-u1.js — Schémas pédagogiques « style scolaire » pour le Manuel Géographie T6 — UNITÉ 1
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

// ── S1. La division administrative de Madagascar ────────────────────────
function svgDivisionAdministrative() {
  const box = (x, y, w, h, fill, stroke) =>
    `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="14" fill="${fill}" stroke="${stroke}" stroke-width="3"/>`;
  const fleche = (x1, y1, x2, y2) =>
    `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#37474F" stroke-width="3" marker-end="url(#arrU1)"/>`;
  return `${svgHeader(1000, 560)}
  ${titreSvg("La division administrative de Madagascar")}
  <defs><marker id="arrU1" markerWidth="10" markerHeight="8" refX="8" refY="3" orient="auto"><path d="M0,0 L9,3 L0,6 Z" fill="#37474F"/></marker></defs>
  ${box(60, 100, 280, 90, "#FFCDD2", "#C00000")}
  ${txt(200, 132, "LA RÉGION", { size: 24, bold: true, fill: "#C00000" })}
  ${txt(200, 162, "24 régions administratives", { size: 18 })}
  ${box(390, 100, 240, 90, "#FFE0B2", "#E65100")}
  ${txt(510, 132, "LE DISTRICT", { size: 24, bold: true, fill: "#E65100" })}
  ${txt(510, 162, "découpe la région", { size: 18 })}
  ${box(680, 100, 260, 90, "#C8E6C9", "#1B5E20")}
  ${txt(810, 132, "LA COMMUNE", { size: 24, bold: true, fill: "#1B5E20" })}
  ${txt(810, 162, "communes urbaines et rurales", { size: 17 })}
  ${box(240, 300, 240, 90, "#BBDEFB", "#01579B")}
  ${txt(360, 332, "LE FOKONTANY", { size: 23, bold: true, fill: "#01579B" })}
  ${txt(360, 362, "le village ou le quartier", { size: 17 })}
  ${box(560, 300, 200, 90, "#E1BEE7", "#6A1B9A")}
  ${txt(660, 332, "LE SECTEUR", { size: 23, bold: true, fill: "#6A1B9A" })}
  ${txt(660, 362, "une part du fokontany", { size: 17 })}
  ${fleche(340, 145, 388, 145)}
  ${fleche(632, 145, 678, 145)}
  ${fleche(510, 192, 420, 298)}
  ${fleche(480, 345, 558, 345)}
  ${txt(500, 450, "Du plus grand au plus petit : la région, le district, la commune, le fokontany et le secteur.", { size: 22, bold: true })}
  ${txt(500, 490, "Exemple : Région Vakinankaratra → District d'Antsirabe → Commune d'Antsirabe → Fokontany Mahazoarivo.", { size: 19, fill: "#546E7A" })}
  ${caption("Madagascar compte 24 régions administratives, dirigées chacune par un chef-lieu.", 530)}
</svg>`;
}

// ── Carte des régions par groupe (S2-S5) ────────────────────────────────
// Chaque région : [nom, chef-lieu, lx, ly] en coordonnées locales MADA
function svgRegionsGroupe(titre, regions, zoneShapes, legendeNote, capText, couleur) {
  const cx = 330, cy = 330, h = 420;
  let dots = "", legend = "";
  regions.forEach(([nom, chef, lx, ly], i) => {
    const [x, y] = L(cx, cy, h, lx, ly);
    dots += `<circle cx="${x}" cy="${y}" r="17" fill="#FFFFFF" stroke="${couleur}" stroke-width="3"/>
      <text x="${x}" y="${y + 6}" text-anchor="middle" font-size="17" font-weight="bold" fill="${couleur}">${i + 1}</text>`;
    legend += txt(680, 150 + i * 46, `${i + 1}. ${nom} — ${chef}`, { size: 19, anchor: "start", bold: true }) +
      "";
  });
  return `${svgHeader(1000, 620)}
  ${titreSvg(titre)}
  ${cadre(40, 90, 480, 470, "#FDFBF3")}
  ${mada(cx, cy, h, { fill: "#F1F8E9" })}
  ${madaZones("zg", cx, cy, h, zoneShapes)}
  ${dots}
  <rect x="560" y="120" width="410" height="${Math.max(230, regions.length * 46 + 60)}" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${txt(765, 152, legendeNote, { size: 21, bold: true })}
  ${legend}
  ${caption(capText, 600)}
</svg>`;
}

// S2. Les chefs-lieux (1) : les régions du Centre
function svgRegionsCentre() {
  return svgRegionsGroupe(
    "Les régions du Centre et leurs chefs-lieux",
    [
      ["Analamanga", "Antananarivo", 48, 68],
      ["Vakinankaratra", "Antsirabe", 45, 95],
      ["Itasy", "Miarinarivo", 37, 80],
      ["Bongolava", "Tsiroanomandidy", 28, 88],
      ["Amoron'i Mania", "Ambositra", 48, 115],
      ["Haute Matsiatra", "Fianarantsoa", 55, 130],
    ],
    `<ellipse cx="45" cy="95" rx="30" ry="55" fill="#FFCDD2" opacity="0.85"/>`,
    "Les six régions du Centre :",
    "Le Centre de Madagascar : six régions autour de la capitale Antananarivo.",
    "#C00000"
  );
}

// S3. Les chefs-lieux (2) : les régions de l'Est
function svgRegionsEst() {
  return svgRegionsGroupe(
    "Les régions de l'Est et leurs chefs-lieux",
    [
      ["Ambatosoa", "Maroantsetra", 82, 40],
      ["Analanjirofo", "Fenoarivo-Atsinanana", 80, 58],
      ["Atsinanana", "Toamasina", 80, 85],
      ["Alaotra-Mangoro", "Ambatondrazaka", 62, 75],
      ["Atsimo-Atsinanana", "Farafangana", 78, 125],
    ],
    `<rect x="55" y="20" width="35" height="120" fill="#BBDEFB" opacity="0.85"/>`,
    "Les cinq régions de l'Est :",
    "L'Est de Madagascar, face à l'océan Indien : cinq régions au climat pluvieux.",
    "#01579B"
  );
}

// S4. Les chefs-lieux (3) : les régions du Nord et de l'Ouest
function svgRegionsNordOuest() {
  return svgRegionsGroupe(
    "Les régions du Nord et de l'Ouest, et leurs chefs-lieux",
    [
      ["DIANA", "Antsiranana", 55, 12],
      ["SAVA", "Sambava", 72, 20],
      ["Sofia", "Antsohihy", 45, 38],
      ["Betsiboka", "Maevatanana", 30, 55],
      ["Boeny", "Mahajanga", 22, 50],
      ["Melaky", "Maintirano", 15, 72],
      ["Menabe", "Morondava", 20, 100],
    ],
    `<path d="M 0 0 L 100 0 L 100 30 L 30 42 L 0 115 Z" fill="#FFF9C4" opacity="0.9"/>`,
    "Les sept régions du Nord et de l'Ouest :",
    "Le Nord et l'Ouest : sept régions du Diégo-Suarez à Morondava.",
    "#E65100"
  );
}

// S5. Les chefs-lieux (4) : les régions du Sud
function svgRegionsSud() {
  return svgRegionsGroupe(
    "Les régions du Sud et leurs chefs-lieux",
    [
      ["Ihorombe", "Ihosy", 45, 145],
      ["Vatovavy", "Mananjary", 80, 140],
      ["Fitovinany", "Manakara", 75, 155],
      ["Atsimo-Andrefana", "Toliara", 25, 150],
      ["Androy", "Ambovombe", 45, 175],
      ["Anosy", "Taolanaro", 58, 170],
    ],
    `<path d="M 0 130 L 100 135 L 100 200 L 0 200 Z" fill="#D1C4E9" opacity="0.85"/>`,
    "Les six régions du Sud :",
    "Le Grand Sud : six régions, de Ihosy jusqu'au cap sud de Taolanaro.",
    "#6A1B9A"
  );
}

// ── S6. Les districts et les communes ───────────────────────────────────
function svgDistrictsCommunes() {
  const district = (x, y, nom) => `
    <rect x="${x}" y="${y}" width="200" height="64" rx="10" fill="#FFE0B2" stroke="#E65100" stroke-width="3"/>
    ${txt(x + 100, y + 38, nom, { size: 19, bold: true, fill: "#E65100" })}`;
  const commune = (x, y, nom) => `
    <rect x="${x}" y="${y}" width="120" height="52" rx="8" fill="#C8E6C9" stroke="#1B5E20" stroke-width="2.5"/>
    ${txt(x + 60, y + 31, nom, { size: 16, bold: true, fill: "#1B5E20" })}`;
  return `${svgHeader(1000, 620)}
  ${titreSvg("Les districts et les communes d'une région")}
  ${txt(500, 92, "Exemple : la région Vakinankaratra compte plusieurs districts.", { size: 20, italic: true, fill: "#546E7A" })}
  ${district(70, 120, "District d'Antsirabe")}
  ${district(400, 120, "District de Betafo")}
  ${district(720, 120, "District d'Ambatolampy")}
  ${txt(500, 228, "Chaque district regroupe plusieurs communes :", { size: 20, bold: true })}
  ${commune(60, 260, "Antsirabe")}
  ${commune(190, 260, "Andranomanelatra")}
  ${commune(320, 260, "Sambaina")}
  ${commune(450, 260, "Betafo")}
  ${commune(580, 260, "Behenjy")}
  ${commune(710, 260, "Manandona")}
  ${commune(840, 260, "Antanifotsy")}
  ${txt(500, 370, "La commune urbaine concentre les quartiers ; les communes rurales regroupent les villages.", { size: 20 })}
  ${cadre(120, 420, 760, 120, "#FFF8E1")}
  ${txt(500, 460, "À retenir : la région est découpée en districts,", { size: 21, bold: true })}
  ${txt(500, 492, "et chaque district regroupe plusieurs communes.", { size: 21, bold: true })}
  ${caption("De la région à la commune : chaque découpage sert à mieux organiser le territoire.", 590)}
</svg>`;
}

// ── S7. Les fokontany, les quartiers et les secteurs ────────────────────
function svgFokontany() {
  return `${svgHeader(1000, 620)}
  ${titreSvg("Le fokontany, le quartier et le secteur")}
  ${cadre(60, 100, 400, 300, "#E8F5E9")}
  ${txt(260, 140, "EN MILIEU RURAL", { size: 22, bold: true, fill: "#1B5E20" })}
  ${txt(260, 190, "La commune regroupe", { size: 20 })}
  ${txt(260, 220, "plusieurs villages :", { size: 20 })}
  ${txt(260, 275, "chaque village est", { size: 20, bold: true })}
  ${txt(260, 305, "un fokontany.", { size: 20, bold: true })}
  ${dot(260, 350, 8, "#2E7D32", "#1B5E20")}
  ${txt(260, 380, "Le chef de fokontany note les naissances et les événements du village.", { size: 17, italic: true, fill: "#546E7A" })}
  ${cadre(540, 100, 400, 300, "#E3F2FD")}
  ${txt(740, 140, "EN MILIEU URBAIN", { size: 22, bold: true, fill: "#01579B" })}
  ${txt(740, 190, "La commune urbaine est", { size: 20 })}
  ${txt(740, 220, "découpée en quartiers :", { size: 20 })}
  ${txt(740, 275, "chaque quartier est", { size: 20, bold: true })}
  ${txt(740, 305, "un fokontany.", { size: 20, bold: true })}
  ${dot(740, 350, 8, "#0277BD", "#01579B")}
  ${txt(740, 380, "Un grand quartier peut être partagé en plusieurs secteurs.", { size: 17, italic: true, fill: "#546E7A" })}
  ${txt(500, 460, "Quartier = fokontany ; secteur = une part d'un très grand quartier.", { size: 22, bold: true })}
  ${caption("Le fokontany est le plus petit découpage : c'est là que l'on recense les habitants.", 590)}
</svg>`;
}

// ── S8. Situer sa région : délimitation et superficie ───────────────────
function svgMaRegion() {
  const cx = 330, cy = 330, h = 420;
  const echelle = (x, y, w) => `
    <line x1="${x}" y1="${y}" x2="${x + w}" y2="${y}" stroke="#37474F" stroke-width="4"/>
    <line x1="${x}" y1="${y - 7}" x2="${x}" y2="${y + 7}" stroke="#37474F" stroke-width="3"/>
    <line x1="${x + w / 2}" y1="${y - 7}" x2="${x + w / 2}" y2="${y + 7}" stroke="#37474F" stroke-width="3"/>
    <line x1="${x + w}" y1="${y - 7}" x2="${x + w}" y2="${y + 7}" stroke="#37474F" stroke-width="3"/>`;
  return `${svgHeader(1000, 620)}
  ${titreSvg("Situer sa région : délimitation et superficie")}
  ${cadre(40, 90, 480, 470, "#FDFBF3")}
  ${mada(cx, cy, h, { fill: "#F5F5F5", stroke: "#5D4037" })}
  <line x1="${cx - 60}" y1="${cy + (150 - 100) * h / 200}" x2="${cx + 62}" y2="${cy + (150 - 100) * h / 200}" stroke="#C00000" stroke-width="3.5" stroke-dasharray="10 6"/>
  ${dotL(cx, cy, h, 45, 95, 7)}
  ${txtL(cx, cy, h, 45, 83, "…ma région…", { size: 15, bold: true, fill: "#C00000" })}
  ${txt(280, 545, "Trace la frontière de ta région et écris son nom.", { size: 17, italic: true, fill: "#546E7A" })}
  <rect x="560" y="120" width="410" height="330" rx="14" fill="#FAFAFA" stroke="#90A4AE" stroke-width="3"/>
  ${txt(765, 155, "Pour situer ma région", { size: 21, bold: true })}
  ${txt(585, 200, "1. Son nom : ……………………………", { size: 19, anchor: "start" })}
  ${txt(585, 240, "2. Son chef-lieu : ………………………", { size: 19, anchor: "start" })}
  ${txt(585, 280, "3. Ses régions voisines : ……………", { size: 19, anchor: "start" })}
  ${txt(585, 320, "4. Sa superficie : ……… km²", { size: 19, anchor: "start" })}
  ${txt(585, 360, "5. Mon district : ………………………", { size: 19, anchor: "start" })}
  ${txt(585, 400, "6. Ma commune : ………………………", { size: 19, anchor: "start" })}
  ${txt(585, 435, "7. Mon fokontany : ………………………", { size: 19, anchor: "start" })}
  ${txt(765, 490, "Madagascar : 587 000 km² — 24 régions de tailles différentes", { size: 18, bold: true, fill: "#1F4E79" })}
  ${caption("La superficie est la mesure de l'étendue d'une région ; la délimitation est sa frontière sur la carte.", 595)}
</svg>`;
}

const SVG = {
  geo6_division_admin: svgDivisionAdministrative(),
  geo6_regions_centre: svgRegionsCentre(),
  geo6_regions_est: svgRegionsEst(),
  geo6_regions_nord_ouest: svgRegionsNordOuest(),
  geo6_regions_sud: svgRegionsSud(),
  geo6_districts_communes: svgDistrictsCommunes(),
  geo6_fokontany: svgFokontany(),
  geo6_ma_region: svgMaRegion(),
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
