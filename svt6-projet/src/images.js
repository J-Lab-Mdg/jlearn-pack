// ============================================================
// images.js — schémas scolaires SVG → PNG (sharp)
// Schémas pédagogiques originaux dessinés ici même (SVG).
// ============================================================
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");
const NEW = require("./schemas-new");

const OUT = path.join(__dirname, "..", "output", "images");
const W = 900, H = 640;
const FAM = "'DejaVu Sans', sans-serif";

function wrap(inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>${inner}</svg>`;
}

function txt(x, y, s, o = {}) {
  const { size = 24, anchor = "middle", fill = "#000000", bold = false, italic = false } = o;
  return `<text x="${x}" y="${y}" font-family="${FAM}" font-size="${size}" text-anchor="${anchor}" fill="${fill}"${bold ? ' font-weight="bold"' : ""}${italic ? ' font-style="italic"' : ""}>${s}</text>`;
}

function title(s) {
  return txt(450, 52, s, { size: 32, bold: true, fill: "#1F4E79" });
}

function line(x1, y1, x2, y2, c = "#000", w = 3) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
}

function arrow(x1, y1, x2, y2, c = "#000", w = 3) {
  const a = Math.atan2(y2 - y1, x2 - x1), L = 15, d = 0.42;
  const p1 = [x2 + L * Math.cos(a + Math.PI - d), y2 + L * Math.sin(a + Math.PI - d)];
  const p2 = [x2 + L * Math.cos(a + Math.PI + d), y2 + L * Math.sin(a + Math.PI + d)];
  return line(x1, y1, x2, y2, c, w) +
    `<polyline points="${p1[0]},${p1[1]} ${x2},${y2} ${p2[0]},${p2[1]}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}

// Annotation : trait + texte ; txtAnchor = "start"|"end"|"middle"
function note(x1, y1, x2, y2, label, tx, ty, o = {}) {
  const { size = 19, color = "#000000", anchor = "start", bold = false } = o;
  return line(x1, y1, x2, y2, "#37474F", 2.2) +
    `<circle cx="${x1}" cy="${y1}" r="4" fill="#37474F"/>` +
    txt(tx, ty, label, { size, fill: color, anchor, bold });
}

function rrect(x, y, w, h, fill, r = 12) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="#000" stroke-width="3"/>`;
}

// Pastille numérotée posée sur le schéma
function num(x, y, n, fill = "#1F4E79") {
  return `<circle cx="${x}" cy="${y}" r="15" fill="${fill}" stroke="#ffffff" stroke-width="2.5"/>` +
    txt(x, y + 6, "" + n, { size: 19, fill: "#ffffff", bold: true });
}

// Légende : liste (numéro, texte) en colonnes, ordre ligne par ligne
function legend(items, opts = {}) {
  const { y0 = 480, cols = 2, size = 16, x0 = 60, x1 = 840 } = opts;
  const rowsCount = Math.ceil(items.length / cols);
  const colW = (x1 - x0) / cols;
  const lineH = 27;
  let s = "";
  items.forEach(([n, t], i) => {
    const c = i % cols, r = Math.floor(i / cols);
    const x = x0 + c * colW, y = y0 + r * lineH;
    s += `<circle cx="${x + 10}" cy="${y - 6}" r="11" fill="#1F4E79" stroke="#ffffff" stroke-width="2"/>` + txt(x + 10, y, "" + n, { size: 14, fill: "#ffffff", bold: true });
    s += txt(x + 28, y, t, { size, anchor: "start" });
  });
  return s;
}

// =====================================================================
// 1. ALIMENTS — trois familles
// =====================================================================
const ALIMENTS = (() => {
  const col = (x, fill, t, items, foot) => {
    const w = 250, h = 460, y = 110;
    let s = rrect(x, y, w, h, fill);
    s += txt(x + w / 2, y + 52, t, { size: 26, bold: true });
    items.forEach((it, i) => { s += txt(x + w / 2, y + 118 + i * 46, it, { size: 22 }); });
    s += txt(x + w / 2, y + h - 40, foot, { size: 21, italic: true });
    return s;
  };
  return wrap(title("Les aliments : trois familles") +
    col(55, "#fde9c8", "ÉNERGÉTIQUES", ["riz", "maïs", "manioc", "huile", "sucre"], "→ donnent de l'énergie") +
    col(325, "#d9ead3", "BÂTISSEURS", ["viande", "poisson", "œufs", "lait", "haricots"], "→ font grandir, réparent") +
    col(595, "#cfe2f3", "PROTECTEURS", ["fruits", "légumes", "feuilles", "agrumes", "légumineuses"], "→ protègent la santé"));
})();

// =====================================================================
// 2. REPRODUCTION des animaux
// =====================================================================
const REPRO = (() => {
  const panels = [
    { x: 55, fill: "#fce4ec", t: "VIVIPARE", c1: "dans le corps", c2: "de la mère", mid: "le petit naît vivant", foot: "naissance vivante", color: "#ad1457", icon: "corps" },
    { x: 325, fill: "#fff3e0", t: "OVIPARE", c1: "œufs pondus", c2: "dehors", mid: "éclosion du petit", foot: "œufs + éclosion", color: "#e65100", icon: "oeuf" },
    { x: 595, fill: "#e8eaf6", t: "OVOVIVIPARE", c1: "œufs dans", c2: "la femelle", mid: "le petit naît vivant", foot: "naissance vivante", color: "#283593", icon: "corps_oeuf" },
  ];
  let s = title("Trois modes de reproduction des animaux");
  panels.forEach((p) => {
    const cx = p.x + 125;
    s += rrect(p.x, 105, 250, 475, p.fill);
    s += txt(cx, 158, p.t, { size: 25, bold: true, fill: p.color });
    // icône
    if (p.icon === "oeuf") {
      s += `<ellipse cx="${cx}" cy="215" rx="52" ry="27" fill="#ffecb3" stroke="#000" stroke-width="3"/>`;
      s += `<circle cx="${cx}" cy="215" r="12" fill="#ffe082" stroke="#000" stroke-width="2"/>`;
    } else {
      s += `<ellipse cx="${cx}" cy="215" rx="58" ry="30" fill="#f5f5f5" stroke="#000" stroke-width="3"/>`;
      s += `<circle cx="${cx}" cy="${p.icon === "corps" ? 222 : 215}" r="${p.icon === "corps" ? 15 : 11}" fill="${p.icon === "corps" ? "#fce4ec" : "#d1c4e9"}" stroke="#000" stroke-width="2"/>`;
      s += `<circle cx="${cx}" cy="205" r="5" fill="#000"/>`;
    }
    s += txt(cx, 290, p.c1, { size: 19 });
    s += txt(cx, 318, p.c2, { size: 19 });
    s += txt(cx, 390, p.mid, { size: 19 });
    s += txt(cx, 455, "→ " + p.foot, { size: 20, bold: true, italic: true, fill: p.color });
  });
  return wrap(s);
})();

// =====================================================================
// 3. FLEUR légendée + pollinisation
// =====================================================================
const FLEUR = (() => {
  const cx = 290, cy = 250;
  let s = title("La fleur : organes et pollinisation");
  // pétales
  const petals = [];
  for (let i = 0; i < 8; i++) {
    const a = (Math.PI * 2 * i) / 8;
    const px = cx + 82 * Math.cos(a), py = cy + 82 * Math.sin(a);
    petals.push(`<ellipse cx="${px}" cy="${py}" rx="45" ry="25" fill="#f6a8c8" stroke="#000" stroke-width="3" transform="rotate(${(i * 45).toFixed(0)} ${px} ${py})"/>`);
  }
  s += petals.join("");
  s += `<circle cx="${cx}" cy="${cy}" r="48" fill="#f9d94e" stroke="#000" stroke-width="3"/>`;
  s += `<circle cx="${cx}" cy="${cy}" r="25" fill="#f4b83e" stroke="#000" stroke-width="2"/>`;
  // sépales + tige + feuille
  s += `<circle cx="${cx}" cy="${cy}" r="58" fill="none" stroke="#2e7d32" stroke-width="5" stroke-dasharray="13 9" opacity="0.6"/>`;
  s += line(cx, cy + 50, cx, cy + 165, "#2e7d32", 7);
  s += `<path d="M ${cx} ${cy + 160} q -50 36 -18 96 q 36 -16 50 -76" fill="#7cb342" stroke="#000" stroke-width="3"/>`;
  // pollen transporté (points bleus) — du haut vers le pistil
  s += `<path d="M 585 130 q 45 60 -45 130" fill="none" stroke="#0d47a1" stroke-width="3.5" stroke-dasharray="9 7"/>`;
  s += `<circle cx="578" cy="165" r="7" fill="#0d47a1" opacity="0.4"/>`;
  s += `<circle cx="564" cy="195" r="7" fill="#0d47a1" opacity="0.7"/>`;
  s += `<circle cx="549" cy="225" r="7" fill="#0d47a1" opacity="0.95"/>`;
  // abeille à droite
  const ax = 700, ay = 130;
  s += `<ellipse cx="${ax}" cy="${ay}" rx="48" ry="25" fill="#f9d94e" stroke="#000" stroke-width="3"/>`;
  s += `<path d="M ${ax - 26} ${ay - 22} l 0 44 M ${ax - 9} ${ay - 25} l 0 50 M ${ax + 8} ${ay - 25} l 0 50" stroke="#5d4037" stroke-width="5"/>`;
  s += `<ellipse cx="${ax + 52}" cy="${ay - 8}" rx="20" ry="14" fill="#5d4037" stroke="#000" stroke-width="2.5"/>`;
  s += `<line x1="${ax + 46}" y1="${ay - 24}" x2="${ax + 33}" y2="${ay - 36}" stroke="#000" stroke-width="2"/>`;
  // pastilles numérotées
  s += num(cx - 55, cy - 90, 1);            // pétale
  s += num(cx + 62, cy - 18, 2);            // étamines
  s += num(cx - 22, cy + 4, 3);             // pistil
  s += num(cx - 50, cy + 115, 4);           // sépales
  s += num(cx + 16, cy + 178, 5);           // tige
  s += num(cx + 28, cy + 262, 6);           // feuille
  s += num(552, 262, 7);                    // pollen
  s += num(ax, ay + 50, 8);                 // abeille
  // légende
  s += legend([
    [1, "pétale (coloré)"],
    [2, "étamines : pollen"],
    [3, "pistil : ovules"],
    [4, "sépales"],
    [5, "tige"],
    [6, "feuille"],
    [7, "pollen (vent, insectes)"],
    [8, "abeille : pollinisatrice"],
  ], { y0: 548, size: 16 });
  return wrap(s);
})();

// =====================================================================
// 4. CYCLE de la plante (5 étapes)
// =====================================================================
const CYCLE = (() => {
  let s = title("De la graine à la plante — le cycle de vie");
  const centers = [100, 280, 460, 640, 810];
  const labels = ["1. Graine", "2. Germination", "3. Plante", "4. Fleur", "5. Fruit"];
  const y = 300;
  s += txt(100, 150, labels[0], { size: 20, bold: true });
  s += `<ellipse cx="100" cy="${y + 20}" rx="46" ry="28" fill="#c8a165" stroke="#000" stroke-width="3"/>`;
  s += txt(100, 395, "dans la terre", { size: 17 });
  s += txt(280, 150, labels[1], { size: 20, bold: true });
  s += `<circle cx="280" cy="${y + 45}" r="24" fill="#c8a165" stroke="#000" stroke-width="2.5"/>`;
  s += `<path d="M 272 ${y + 28} q -8 -55 22 -80" fill="none" stroke="#795548" stroke-width="5"/>`;
  s += `<path d="M 290 ${y + 30} q 10 -50 42 -66" fill="none" stroke="#2e7d32" stroke-width="6"/>`;
  s += txt(280, 395, "la racine sort", { size: 17 });
  s += txt(460, 150, labels[2], { size: 20, bold: true });
  s += line(460, y + 130, 460, y - 60, "#2e7d32", 9);
  s += `<path d="M 460 ${y - 55} q -62 -18 -52 -65 q 55 8 52 65z" fill="#7cb342" stroke="#000" stroke-width="2.5"/>`;
  s += `<path d="M 460 ${y - 25} q 62 -18 52 -65 q -55 8 -52 65z" fill="#7cb342" stroke="#000" stroke-width="2.5"/>`;
  s += txt(460, 395, "la plante grandit", { size: 17 });
  s += txt(640, 150, labels[3], { size: 20, bold: true });
  s += `<circle cx="640" cy="${y + 20}" r="36" fill="#f6a8c8" stroke="#000" stroke-width="3"/>`;
  s += `<circle cx="640" cy="${y + 20}" r="15" fill="#f9d94e" stroke="#000" stroke-width="2"/>`;
  s += txt(640, 395, "la fleur apparaît", { size: 17 });
  s += txt(820, 150, labels[4], { size: 20, bold: true });
  s += `<ellipse cx="820" cy="${y + 20}" rx="46" ry="28" fill="#ef9a9a" stroke="#000" stroke-width="3"/>`;
  s += `<circle cx="800" cy="${y + 12}" r="9" fill="#c8a165" stroke="#000" stroke-width="1.5"/>`;
  s += `<circle cx="838" cy="${y + 26}" r="8" fill="#c8a165" stroke="#000" stroke-width="1.5"/>`;
  s += txt(820, 395, "et nouvelles graines", { size: 16 });
  // flèches
  for (let i = 0; i < 4; i++) s += arrow(centers[i] + 68, y + 20, centers[i + 1] - 68, y + 20, "#546e7a", 3);
  // retour cycle
  s += `<path d="M 100 470 q 360 110 720 30" fill="none" stroke="#546e7a" stroke-width="3" stroke-dasharray="10 8"/>`;
  s += `<polyline points="790,485 822,500 796,515" fill="none" stroke="#546e7a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>`;
  s += txt(450, 520, "le cycle recommence", { size: 20, italic: true, fill: "#546e7a" });
  return wrap(s);
})();

// =====================================================================
// 5. APPAREIL REPRODUCTEUR MASCULIN
// =====================================================================
const APPAR_M = (() => {
  let s = title("Appareil reproducteur masculin (vue de face)");
  // corps
  s += `<path d="M 330 450 q 0 -95 28 -155 q 24 -52 92 -52 L 620 243 q 68 0 92 52 q 28 60 28 155" fill="#f2d3b3" stroke="#000" stroke-width="3"/>`;
  // testicules (bourses)
  s += rrect(370, 360, 105, 48, "#e8a87c", 22);
  s += rrect(595, 360, 105, 48, "#e8a87c", 22);
  // spermiductes (rouge) : des testicules vers le haut
  s += `<path d="M 422 360 q 14 -55 70 -68 q 56 13 70 68" fill="none" stroke="#c0392b" stroke-width="9"/>`;
  // ligne centrale (urètre)
  s += `<path d="M 500 248 L 500 360" stroke="#c0392b" stroke-width="9"/>`;
  // vésicule séminale + prostate en haut
  s += rrect(455, 185, 90, 36, "#d68910", 8);
  s += `<ellipse cx="500" cy="152" rx="50" ry="26" fill="#f5b041" stroke="#000" stroke-width="3"/>`;
  s += line(500, 178, 500, 185, "#000", 3);
  // pastilles numérotées
  s += num(422, 384, 1);   // testicules
  s += num(460, 285, 2);   // spermiductes
  s += num(545, 203, 3);   // prostate
  s += num(548, 152, 4);   // vésicule séminale
  s += num(500, 310, 5);   // urètre
  // légende
  s += legend([
    [1, "testicules : spermatozoïdes"],
    [2, "spermiductes : transport"],
    [3, "prostate : liquide"],
    [4, "vésicule séminale : liquide"],
    [5, "urètre : canal de sortie"],
  ], { y0: 478, size: 16 });
  return wrap(s);
})();

// =====================================================================
// 6. APPAREIL REPRODUCTEUR FÉMININ
// =====================================================================
const APPAR_F = (() => {
  let s = title("Appareil reproducteur féminin (vue de face)");
  // corps
  s += `<path d="M 330 450 q 0 -90 28 -152 q 24 -52 92 -52 L 620 246 q 68 0 92 52 q 28 62 28 152" fill="#f2d3b3" stroke="#000" stroke-width="3"/>`;
  // ovaires
  s += `<ellipse cx="388" cy="290" rx="46" ry="32" fill="#e8a87c" stroke="#000" stroke-width="3"/>`;
  s += `<ellipse cx="612" cy="290" rx="46" ry="32" fill="#e8a87c" stroke="#000" stroke-width="3"/>`;
  s += `<circle cx="384" cy="286" r="7" fill="#f9d94e" stroke="#000" stroke-width="1.5"/>`;
  s += `<circle cx="616" cy="286" r="7" fill="#f9d94e" stroke="#000" stroke-width="1.5"/>`;
  // trompes : arcs de l'ovaire vers l'utérus
  s += `<path d="M 420 270 q 80 -75 160 0" fill="none" stroke="#d5b8e8" stroke-width="18"/>`;
  s += `<path d="M 420 270 q 80 -75 160 0" fill="none" stroke="#000" stroke-width="2"/>`;
  // utérus
  s += `<ellipse cx="500" cy="345" rx="100" ry="62" fill="#e8a87c" stroke="#000" stroke-width="3"/>`;
  s += txt(500, 352, "utérus", { size: 23, bold: true });
  // vagin
  s += `<path d="M 464 400 L 464 470 Q 500 490 536 470 L 536 400" fill="#f5b041" stroke="#000" stroke-width="3"/>`;
  s += txt(500, 515, "vagin", { size: 21 });
  // pastilles numérotées
  s += num(410, 256, 1);   // ovaires
  s += num(500, 230, 2);   // trompes
  s += num(578, 330, 3);   // utérus
  s += num(500, 445, 4);   // vagin
  s += num(352, 272, 5);   // ovule (point jaune)
  // légende
  s += legend([
    [1, "ovaire : ovules"],
    [2, "trompe : fécondation"],
    [3, "utérus : bébé"],
    [4, "vagin : accouchement"],
    [5, "ovule : cellule femelle"],
  ], { y0: 548, size: 16 });
  return wrap(s);
})();

// =====================================================================
// 7. APPAREIL URINAIRE
// =====================================================================
const URINE = (() => {
  let s = title("L'appareil urinaire");
  // reins
  s += `<ellipse cx="330" cy="200" rx="105" ry="60" fill="#ef9a9a" stroke="#000" stroke-width="3"/>`;
  s += `<ellipse cx="570" cy="200" rx="105" ry="60" fill="#ef9a9a" stroke="#000" stroke-width="3"/>`;
  s += txt(330, 208, "rein", { size: 22, bold: true });
  s += txt(570, 208, "rein", { size: 22, bold: true });
  // uretères
  s += `<path d="M 360 250 L 440 360" stroke="#42a5f5" stroke-width="10"/>`;
  s += `<path d="M 540 250 L 460 360" stroke="#42a5f5" stroke-width="10"/>`;
  // vessie
  s += `<ellipse cx="450" cy="420" rx="85" ry="60" fill="#bbdefb" stroke="#000" stroke-width="3"/>`;
  s += txt(450, 428, "vessie", { size: 24, bold: true });
  // urètre
  s += `<path d="M 450 478 L 450 545" stroke="#42a5f5" stroke-width="12"/>`;
  s += line(450, 478, 450, 545, "#000", 2);
  // pastilles numérotées
  s += num(288, 178, 1);
  s += num(392, 256, 2);
  s += num(508, 262, 2);
  s += num(392, 420, 3);
  s += num(474, 512, 4);
  // légende
  s += legend([
    [1, "reins : filtration du sang"],
    [2, "uretères : transport"],
    [3, "vessie : stockage"],
    [4, "urètre : évacuation"],
  ], { y0: 568, size: 16 });
  return wrap(s);
})();

// =====================================================================
// 8. BASSIN VERSANT
// =====================================================================
const BASSIN = (() => {
  let s = title("Le bassin versant");
  // relief
  s += `<path d="M 60 560 Q 150 190 450 160 Q 750 190 840 560 Z" fill="#c8e6c9" stroke="#000" stroke-width="3"/>`;
  // crête
  s += line(450, 160, 450, 95, "#000", 3.5);
  s += `<path d="M 450 95 l 0 14 m -12 -6 l 12 16 m -14 -6 l 14 30 m 12 -52 l 0 14 m 12 -6 l -12 16 m 14 -6 l -14 30" stroke="#000" stroke-width="2.5" fill="#000"/>`;
  s += txt(450, 78, "La crête : ligne de partage des eaux", { size: 20, fill: "#37474F" });
  // versants
  s += txt(225, 400, "versant", { size: 24, fill: "#1b5e20" });
  s += txt(675, 400, "versant", { size: 24, fill: "#1b5e20" });
  // ruissellement
  s += `<path d="M 180 330 q 130 -25 250 0" fill="none" stroke="#29b6f6" stroke-width="8"/>`;
  s += `<path d="M 720 330 q -130 -25 -250 0" fill="none" stroke="#29b6f6" stroke-width="8"/>`;
  s += txt(280, 308, "ruissellement", { size: 19, fill: "#0277bd" });
  s += txt(620, 308, "ruissellement", { size: 19, fill: "#0277bd" });
  // rivière
  s += `<path d="M 60 560 Q 450 505 840 560" fill="none" stroke="#0277bd" stroke-width="16"/>`;
  s += txt(450, 555, "rivière", { size: 24, bold: true, fill: "#ffffff" });
  // infiltration
  const ix = 300, iy = 430;
  s += `<path d="M ${ix} ${iy} L ${ix - 32} ${iy + 78} L ${ix + 32} ${iy + 78} Z" fill="#29b6f6" stroke="#000" stroke-width="2.5"/>`;
  s += `<path d="M ${ix - 20} ${iy + 78} q 5 30 2 50" fill="none" stroke="#4fc3f7" stroke-width="6" stroke-dasharray="6 6"/>`;
  s += txt(ix + 60, iy + 60, "infiltration", { size: 19, fill: "#0277bd", anchor: "start" });
  // pluie
  s += txt(130, 250, "pluie", { size: 22, fill: "#0277bd" });
  s += `<path d="M 95 285 l 12 26 m -26 -12 l 12 26 m -26 -12 l 12 26" stroke="#0277bd" stroke-width="4" fill="none"/>`;
  s += txt(770, 250, "pluie", { size: 22, fill: "#0277bd" });
  s += `<path d="M 745 285 l 12 26 m -26 -12 l 12 26 m -26 -12 l 12 26" stroke="#0277bd" stroke-width="4" fill="none"/>`;
  s += txt(450, 610, "Toute l'eau de pluie de cette zone s'écoule vers la même rivière.", { size: 21, italic: true, fill: "#1b5e20" });
  return wrap(s);
})();

// =====================================================================
// 9. VASES COMMUNICANTS
// =====================================================================
const VASES = (() => {
  let s = title("Les vases communicants");
  // deux récipients reliés par un tuyau (vues de face, ouverts en haut)
  s += `<rect x="120" y="200" width="220" height="90" fill="#b3e5fc" stroke="#000" stroke-width="3"/>`;
  s += `<rect x="560" y="200" width="220" height="90" fill="#b3e5fc" stroke="#000" stroke-width="3"/>`;
  s += `<rect x="300" y="225" width="300" height="40" fill="#b3e5fc" stroke="#000" stroke-width="3"/>`;
  // niveau rouge commun
  s += line(120, 245, 780, 245, "#e53935", 3.5);
  // parois
  s += line(120, 200, 120, 290, "#000", 4);
  s += line(340, 200, 340, 290, "#000", 4);
  s += line(340, 225, 340, 265, "#000", 4);
  s += line(560, 225, 560, 265, "#000", 4);
  s += line(560, 200, 560, 290, "#000", 4);
  s += line(780, 200, 780, 290, "#000", 4);
  s += line(120, 290, 340, 290, "#000", 4);
  s += line(560, 290, 780, 290, "#000", 4);
  s += line(300, 265, 600, 265, "#000", 4);
  s += line(300, 225, 600, 225, "#000", 4);
  s += txt(450, 370, "L'eau s'établit au même niveau", { size: 26, bold: true, fill: "#c62828" });
  s += txt(230, 420, "récipient 1", { size: 22 });
  s += txt(670, 420, "récipient 2", { size: 22 });
  s += txt(450, 480, "Les deux récipients sont reliés par un tuyau (sous le niveau de l'eau).", { size: 21 });
  s += txt(450, 530, "Application : château d'eau → canalisations → habitations", { size: 21, italic: true, fill: "#1b5e20" });
  s += txt(450, 585, "L'eau cherche toujours l'équilibre par gravité.", { size: 21, italic: true, fill: "#1b5e20" });
  return wrap(s);
})();

// =====================================================================
// 10. DISTRIBUTION DE L'EAU
// =====================================================================
const DISTRIB = (() => {
  let s = title("Distribution de l'eau dans la ville et aux champs");
  // château d'eau
  const cx = 450;
  s += rrect(cx - 90, 95, 180, 120, "#90caf9", 18);
  s += txt(cx, 145, "Château", { size: 25, bold: true });
  s += txt(cx, 176, "d'eau", { size: 25, bold: true });
  s += `<path d="M ${cx - 65} 215 l 15 55 M ${cx + 65} 215 l -15 55" stroke="#000" stroke-width="7"/>`;
  s += txt(700, 140, "réservoir", { size: 18, fill: "#01579b", anchor: "start" });
  s += txt(700, 165, "placé en hauteur", { size: 18, fill: "#01579b", anchor: "start" });
  // maisons
  s += rrect(cx - 105, 285, 60, 120, "#ffe082");
  s += rrect(cx + 45, 285, 60, 120, "#ffe082");
  s += `<path d="M ${cx - 105} 285 L ${cx - 75} 265 L ${cx - 45} 285" fill="#ffd54f" stroke="#000" stroke-width="3"/>`;
  s += `<path d="M ${cx + 45} 285 L ${cx + 75} 265 L ${cx + 105} 285" fill="#ffd54f" stroke="#000" stroke-width="3"/>`;
  s += txt(cx - 75, 430, "maison", { size: 18 });
  s += txt(cx + 75, 430, "maison", { size: 18 });
  // conduite vers maisons
  s += `<path d="M ${cx - 70} 290 L ${cx - 75} 245" stroke="#039be5" stroke-width="9"/>`;
  s += `<path d="M ${cx + 70} 290 L ${cx + 75} 245" stroke="#039be5" stroke-width="9"/>`;
  s += txt(cx, 245 - 30, "", {});
  // irrigation
  s += arrow(cx, 350, cx, 505, "#2e7d32", 5);
  s += `<path d="M 120 545 q 120 -50 280 -22 q 120 22 240 2 q 80 -12 120 -30" fill="none" stroke="#2e7d32" stroke-width="6"/>`;
  s += `<path d="M 160 525 q 36 -55 72 0" fill="#66bb6a" stroke="#000" stroke-width="2.5"/>`;
  s += `<path d="M 340 510 q 36 -55 72 0" fill="#66bb6a" stroke="#000" stroke-width="2.5"/>`;
  s += `<path d="M 660 500 q 36 -55 72 0" fill="#66bb6a" stroke="#000" stroke-width="2.5"/>`;
  s += txt(450, 600, "Canaux d'irrigation vers les champs de riz (par gravité)", { size: 20, italic: true, fill: "#1b5e20" });
  s += txt(230, 310, "eau qui descend", { size: 18, fill: "#01579b" });
  return wrap(s);
})();

// =====================================================================
// 11. ROCHES MAGMATIQUES
// =====================================================================
const MAGMA = (() => {
  let s = title("Roches magmatiques : le magma refroidit");
  // volcan
  s += `<path d="M 120 430 L 185 240 L 250 430 Z" fill="#5d4037" stroke="#000" stroke-width="3"/>`;
  s += `<path d="M 260 430 L 315 260 L 370 430 Z" fill="#5d4037" stroke="#000" stroke-width="3"/>`;
  s += `<ellipse cx="270" cy="245" rx="95" ry="30" fill="#ff7043" stroke="#000" stroke-width="3"/>`;
  s += txt(270, 252, "magma", { size: 22, bold: true, fill: "#ffffff" });
  s += arrow(270, 212, 270, 172, "#bf360c", 4);
  s += txt(270, 148, "volcan", { size: 20 });
  // granite (refroidissement lent, en profondeur)
  s += rrect(420, 330, 170, 110, "#efebe9");
  s += `<circle cx="465" cy="370" r="9" fill="#8d6e63"/>`;
  s += `<circle cx="510" cy="390" r="11" fill="#8d6e63"/>`;
  s += `<circle cx="545" cy="365" r="8" fill="#8d6e63"/>`;
  s += txt(505, 505, "granite", { size: 21, bold: true });
  s += txt(505, 535, "grains visibles", { size: 19 });
  // basalte (refroidissement rapide, en surface)
  s += rrect(640, 330, 170, 110, "#455a64");
  s += txt(725, 388, "basalte", { size: 24, bold: true, fill: "#ffffff" });
  s += txt(725, 505, "grains fins", { size: 21, bold: true });
  s += txt(725, 535, "couleur sombre", { size: 19 });
  // refroidissement
  s += arrow(505, 250, 505, 320, "#37474F", 4);
  s += txt(505, 228, "refroidissement lent", { size: 18, fill: "#37474F" });
  s += arrow(725, 250, 725, 320, "#37474F", 4);
  s += txt(725, 228, "refroidissement rapide", { size: 18, fill: "#37474F" });
  s += txt(450, 570, "Exemple à Madagascar : le basalte à Ambatovy, le granite des Hautes Terres", { size: 19, italic: true, fill: "#546e7a" });
  return wrap(s);
})();

// =====================================================================
// 12. ROCHES SÉDIMENTAIRES
// =====================================================================
const SED = (() => {
  let s = title("Roches sédimentaires : les couches se forment");
  // strates
  s += rrect(120, 130, 260, 60, "#d7ccc8");
  s += rrect(120, 195, 260, 60, "#bcaaa4");
  s += rrect(120, 260, 260, 60, "#a1887f");
  s += txt(250, 110, "couches (strates)", { size: 21 });
  s += txt(250, 390, "sédiments accumulés, tassés, cimentés", { size: 19, italic: true });
  s += txt(250, 430, "avec le temps", { size: 19, italic: true });
  // fossile
  s += `<path d="M 470 300 q 70 -55 130 -45" fill="none" stroke="#6d4c41" stroke-width="3" stroke-dasharray="9 7"/>`;
  s += `<path d="M 540 250 q -42 30 -16 62 q 40 -12 32 -52z" fill="#efe6d8" stroke="#000" stroke-width="3"/>`;
  s += `<circle cx="540" cy="280" r="9" fill="#6d4c41"/>`;
  s += txt(660, 220, "fossile possible", { size: 20 });
  // grès
  s += rrect(640, 290, 180, 100, "#ffe0b2");
  s += `<circle cx="680" cy="330" r="11" fill="#d7ccc8"/>`;
  s += `<circle cx="740" cy="325" r="13" fill="#d7ccc8"/>`;
  s += `<circle cx="710" cy="360" r="9" fill="#d7ccc8"/>`;
  s += txt(730, 425, "grès : sable cimenté", { size: 21 });
  s += txt(730, 475, "calcaire : débris de coquillages", { size: 19 });
  s += txt(450, 555, "Exemples : grès, calcaire, argile — souvent en couches, avec des fossiles.", { size: 20, italic: true, fill: "#546e7a" });
  return wrap(s);
})();

// =====================================================================
// 13. ROCHES MÉTAMORPHIQUES
// =====================================================================
const METAM = (() => {
  let s = title("Roches métamorphiques : la transformation");
  const y = 240;
  s += rrect(90, y, 250, 110, "#ffe0b2");
  s += txt(215, y + 62, "calcaire", { size: 26, bold: true });
  s += txt(215, y + 100, "roche d'origine", { size: 18, italic: true });
  s += arrow(355, y + 55, 480, y + 55, "#e65100", 5);
  s += txt(418, y - 18, "chaleur", { size: 20, bold: true, fill: "#e65100" });
  s += txt(418, y + 125, "pression", { size: 20, bold: true, fill: "#e65100" });
  s += rrect(495, y, 250, 110, "#f8f9fa");
  s += `<path d="M 510 ${y + 30} L 730 ${y + 30} M 510 ${y + 55} L 730 ${y + 55} M 510 ${y + 80} L 730 ${y + 80}" stroke="#cfd8dc" stroke-width="3"/>`;
  s += txt(620, y + 62, "marbre", { size: 26, bold: true, fill: "#607d8b" });
  s += txt(620, y + 100, "roche transformée", { size: 18, italic: true });
  s += txt(450, 430, "La chaleur et la pression transforment les roches sans les fondre.", { size: 21 });
  s += txt(450, 490, "Exemples : marbre (calcaire), gneiss (granite), schiste (argile)", { size: 20, italic: true, fill: "#546e7a" });
  s += txt(450, 550, "À Madagascar : les gneiss et les schistes des Hautes Terres", { size: 19, italic: true, fill: "#546e7a" });
  return wrap(s);
})();

// =====================================================================
// 14. CLASSEMENT des trois groupes
// =====================================================================
const CLASSEMENT = (() => {
  const col = (x, fill, t, tColor, sample, ex, carac, foot) => {
    const w = 250, y = 95, h = 480;
    let s = rrect(x, y, w, h, fill);
    const lines = t.split(" ");
    let ty = y + 48;
    if (t.length > 11) {
      const mid = Math.ceil(lines.length / 2);
      s += txt(x + w / 2, ty, lines.slice(0, mid).join(" "), { size: 21, bold: true, fill: tColor });
      s += txt(x + w / 2, ty + 28, lines.slice(mid).join(" "), { size: 21, bold: true, fill: tColor });
    } else {
      s += txt(x + w / 2, ty, t, { size: 22, bold: true, fill: tColor });
    }
    s += sample(x + w / 2, y + 130);
    s += txt(x + w / 2, y + 240, ex, { size: 21 });
    s += txt(x + w / 2, y + 300, carac, { size: 20 });
    s += txt(x + w / 2, y + 380, foot, { size: 20, italic: true, fill: "rgba(0,0,0,0.65)" });
    return s;
  };
  const gr = (cx, cy) => rrect(cx - 75, cy - 45, 150, 90, "#efebe9") +
    `<circle cx="${cx - 28}" cy="${cy - 10}" r="8" fill="#8d6e63"/><circle cx="${cx + 15}" cy="${cy + 12}" r="10" fill="#8d6e63"/><circle cx="${cx - 2}" cy="${cy - 28}" r="6" fill="#8d6e63"/>`;
  const ba = (cx, cy) => rrect(cx - 75, cy - 45, 150, 90, "#455a64") + txt(cx, cy + 8, "basalte", { size: 20, bold: true, fill: "#ffffff" });
  const se = (cx, cy) => rrect(cx - 75, cy - 45, 150, 90, "#bcaaa4") +
    `<rect x="${cx - 70}" y="${cy - 12}" width="140" height="20" fill="#8d6e63" opacity="0.45"/>` +
    `<rect x="${cx - 70}" y="${cy + 20}" width="140" height="16" fill="#8d6e63" opacity="0.3"/>`;
  const me = (cx, cy) => rrect(cx - 75, cy - 45, 150, 90, "#f8f9fa") +
    `<path d="M ${cx - 62} ${cy + 28} l 124 0 M ${cx - 62} ${cy + 6} l 124 0 M ${cx - 62} ${cy - 16} l 124 0" stroke="#90a4ae" stroke-width="3"/>`;
  return wrap(title("Les trois groupes de roches") +
    col(55, "#ffe0b2", "MAGMATIQUES", "#e65100", gr, "granite, basalte", "magma refroidi", "refroidissement") +
    col(325, "#d7ccc8", "SÉDIMENTAIRES", "#4e342e", se, "grès, calcaire, argile", "couches, fossiles", "sédiments tassés") +
    col(595, "#e0e0e0", "MÉTAMORPHIQUES", "#37474f", me, "marbre, gneiss", "feuillets, bandes", "chaleur + pression"));
})();

const IMAGES = {
  "aliments-familles.png": ALIMENTS,
  "reproduction-animaux.png": REPRO,
  "fleur-pollinisation.png": FLEUR,
  "cycle-plante.png": CYCLE,
  "appareil-masculin.png": APPAR_M,
  "appareil-feminin.png": APPAR_F,
  "appareil-urinaire.png": URINE,
  "bassin-versant.png": BASSIN,
  "vases-communicants.png": VASES,
  "distribution-eau.png": DISTRIB,
  "roches-magmatiques.png": MAGMA,
  "roches-sedimentaires.png": SED,
  "roches-metamorphiques.png": METAM,
  "roches-classement.png": CLASSEMENT,
  ...NEW.SCHEMAS_NEW,
};

async function generateAll() {
  fs.mkdirSync(OUT, { recursive: true });
  for (const [name, svg] of Object.entries(IMAGES)) {
    const full = svg.includes("<svg") ? svg : wrap(svg);
    await sharp(Buffer.from(full)).png().toFile(path.join(OUT, name));
    console.log("OK", name);
  }
  console.log("Terminé : " + Object.keys(IMAGES).length + " images");
}

if (require.main === module) {
  generateAll().catch((e) => { console.error(e); process.exit(1); });
}

module.exports = { IMAGES, generateAll };
