// make-svg-exp.js — schémas de montage « style livre » pour les expériences (img_exp_sNN.png)
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "images");
const GREEN = "#2E7D32", PINK = "#C2185B", BLUE = "#1565C0", OCRE = "#B25000", GREY = "#555555", DARK = "#263238";
const FONT = "DejaVu Sans, Arial, sans-serif";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const svgDoc = (w, h, inner) => `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="white"/>${inner}</svg>`;
const txt = (x, y, s, size, color = DARK, weight = "normal", anchor = "middle") =>
  `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
function fleche(x1, y1, x2, y2, color, width = 4) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  const ax = x2 - ux * 16, ay = y2 - uy * 16;
  return `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="${width}"/>`
    + `<polygon points="${x2},${y2} ${ax - uy * 8},${ay + ux * 8} ${ax + uy * 8},${ay - ux * 8}" fill="${color}"/>`;
}
// étiquette avec trait
const label = (x, y, tx, ty, s, color = GREY) =>
  `<line x1="${x}" y1="${y}" x2="${tx}" y2="${ty > y ? ty - 18 : ty + 8}" stroke="${color}" stroke-width="1.5"/>` + txt(tx, ty, s, 17, color, "bold");
const table = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${DARK}" stroke-width="4"/>`;
function verre(x, y, w, h, niveau = 0.75, eau = "#BBDEFB") {
  let s = `<rect x="${x}" y="${y + h * (1 - niveau)}" width="${w}" height="${h * niveau}" fill="${eau}"/>`;
  s += `<path d="M ${x} ${y} L ${x} ${y + h} L ${x + w} ${y + h} L ${x + w} ${y}" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  return s;
}
function pile(x, y) { // pile plate 4,5 V
  return `<rect x="${x}" y="${y}" width="80" height="55" fill="#FDD835" stroke="${DARK}" stroke-width="3" rx="4"/>`
    + `<line x1="${x + 20}" y1="${y - 14}" x2="${x + 20}" y2="${y}" stroke="${DARK}" stroke-width="4"/>`
    + `<line x1="${x + 60}" y1="${y - 22}" x2="${x + 60}" y2="${y}" stroke="${DARK}" stroke-width="4"/>`
    + txt(x + 40, y + 34, "4,5 V", 16, DARK, "bold");
}
function ampoule(x, y, allume = true, r = 20) {
  return `<circle cx="${x}" cy="${y}" r="${r}" fill="${allume ? "#FFF59D" : "#ECEFF1"}" stroke="${DARK}" stroke-width="3"/>`
    + `<path d="M ${x - 8} ${y + r * 0.5} q 8 -14 16 0" fill="none" stroke="${DARK}" stroke-width="2"/>`
    + `<rect x="${x - 9}" y="${y + r}" width="18" height="12" fill="#B0BEC5" stroke="${DARK}" stroke-width="2"/>`
    + (allume ? [0, 45, 90, 135, 180, 225, 270, 315].map(a => {
      const rad = a * Math.PI / 180;
      return `<line x1="${x + Math.cos(rad) * (r + 6)}" y1="${y + Math.sin(rad) * (r + 6)}" x2="${x + Math.cos(rad) * (r + 14)}" y2="${y + Math.sin(rad) * (r + 14)}" stroke="#F9A825" stroke-width="3"/>`;
    }).join("") : "");
}
function bougie(x, y, h = 70, allume = true) {
  return `<rect x="${x - 12}" y="${y - h}" width="24" height="${h}" fill="#FFF3C4" stroke="${DARK}" stroke-width="2"/>`
    + `<line x1="${x}" y1="${y - h}" x2="${x}" y2="${y - h - 8}" stroke="${DARK}" stroke-width="2"/>`
    + (allume ? `<ellipse cx="${x}" cy="${y - h - 18}" rx="7" ry="13" fill="#FFB300" stroke="${OCRE}" stroke-width="2"/>` : "");
}
const fil = (pts, color = DARK) => `<polyline points="${pts.map(p => p.join(",")).join(" ")}" fill="none" stroke="${color}" stroke-width="3"/>`;
function elastique(x, y1, y2) {
  let s = `M ${x} ${y1}`;
  for (let y = y1; y < y2 - 10; y += 14) s += ` L ${x + 8} ${y + 7} L ${x - 8} ${y + 14}`;
  s += ` L ${x} ${y2}`;
  return `<path d="${s}" fill="none" stroke="${OCRE}" stroke-width="3"/>`;
}
function bonhomme(x, y, scale = 1) {
  const s = scale;
  return `<circle cx="${x}" cy="${y - 54 * s}" r="${12 * s}" fill="none" stroke="${DARK}" stroke-width="3"/>`
    + `<line x1="${x}" y1="${y - 42 * s}" x2="${x}" y2="${y - 12 * s}" stroke="${DARK}" stroke-width="3"/>`
    + `<line x1="${x}" y1="${y - 34 * s}" x2="${x + 18 * s}" y2="${y - 22 * s}" stroke="${DARK}" stroke-width="3"/>`
    + `<line x1="${x}" y1="${y - 34 * s}" x2="${x - 18 * s}" y2="${y - 24 * s}" stroke="${DARK}" stroke-width="3"/>`
    + `<line x1="${x}" y1="${y - 12 * s}" x2="${x + 14 * s}" y2="${y}" stroke="${DARK}" stroke-width="3"/>`
    + `<line x1="${x}" y1="${y - 12 * s}" x2="${x - 14 * s}" y2="${y}" stroke="${DARK}" stroke-width="3"/>`;
}

const jobs = [];
const J = (n, w, h, g) => jobs.push({ file: `img_exp_s${String(n).padStart(2, "0")}.png`, svg: svgDoc(w, h, g) });

// ===== S1 : dynamomètre à élastique =====
(() => {
  const W = 700, H = 460;
  let g = txt(W / 2, 32, "Ton dynamomètre à élastique", 22, GREEN, "bold");
  g += `<rect x="150" y="60" width="180" height="330" fill="#F5F5F5" stroke="${DARK}" stroke-width="3"/>`; // carton
  g += `<circle cx="240" cy="80" r="6" fill="${DARK}"/>`; // clou
  g += elastique(240, 86, 230);
  g += `<path d="M 240 230 q -10 14 0 24" fill="none" stroke="${DARK}" stroke-width="3"/>`; // crochet
  // bouteille
  g += `<rect x="215" y="258" width="50" height="90" fill="#BBDEFB" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  g += `<rect x="228" y="242" width="24" height="18" fill="#90A4AE" stroke="${DARK}" stroke-width="2"/>`;
  // graduations sur le carton
  [["0 N", 100], ["2,5 N", 160], ["5 N", 228]].forEach(([lab, y]) => {
    g += `<line x1="290" y1="${y}" x2="320" y2="${y}" stroke="${PINK}" stroke-width="3"/>`;
    g += txt(300, y - 8, lab, 15, PINK, "bold");
  });
  g += label(240, 80, 440, 80, "clou + élastique");
  g += label(240, 300, 450, 300, "bouteille 0,5 L pleine (≈ 5 N)");
  g += label(310, 165, 470, 180, "marques au feutre", PINK);
  g += txt(W / 2, 436, "L'allongement de l'élastique mesure la force.", 18, DARK, "bold");
  J(1, W, H, g);
})();

// ===== S2 : le jeu des quatre caractéristiques =====
(() => {
  const W = 700, H = 420;
  let g = txt(W / 2, 32, "Tire la boîte dans tous les sens", 22, GREEN, "bold");
  g += table(80, 620, 330);
  g += `<rect x="260" y="250" width="140" height="80" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/>`;
  g += fil([[400, 290], [560, 240]]);
  g += bonhomme(600, 330);
  g += fleche(420, 270, 540, 232, PINK, 5);
  g += fleche(250, 290, 130, 290, BLUE, 5);
  g += txt(480, 215, "en biais", 17, PINK, "bold");
  g += txt(185, 272, "vers la gauche", 17, BLUE, "bold");
  g += txt(W / 2, 390, "À chaque essai : direction ? sens ? intensité ? point d'application ?", 18, DARK, "bold");
  J(2, W, H, g);
})();

// ===== S3 : le duel des élastiques =====
(() => {
  const W = 760, H = 380;
  let g = txt(W / 2, 32, "Le duel des élastiques", 22, GREEN, "bold");
  g += `<rect x="310" y="150" width="140" height="140" fill="#E8BE8C" stroke="${DARK}" stroke-width="3"/>`;
  // élastiques horizontaux (zigzag)
  const zig = (x1, x2, y) => {
    let s = `M ${x1} ${y}`;
    for (let x = x1; x < x2 - 10; x += 14) s += ` L ${x + 7} ${y + 8} L ${x + 14} ${y - 8}`;
    s += ` L ${x2} ${y}`;
    return `<path d="${s}" fill="none" stroke="${OCRE}" stroke-width="3"/>`;
  };
  g += zig(150, 310, 220);
  g += zig(450, 610, 220);
  g += fleche(150, 220, 80, 220, PINK, 5);
  g += fleche(610, 220, 680, 220, BLUE, 5);
  g += txt(110, 196, "camarade 1", 16, PINK, "bold");
  g += txt(648, 196, "camarade 2", 16, BLUE, "bold");
  g += `<line x1="80" y1="220" x2="680" y2="220" stroke="${GREY}" stroke-width="1.5" stroke-dasharray="8 6"/>`;
  g += txt(W / 2, 340, "Alignés et étirés pareil : le carton ne bouge pas. Décale un élastique : il tourne !", 17, DARK, "bold");
  J(3, W, H, g);
})();

// ===== S5 : la balance à poussée =====
(() => {
  const W = 700, H = 460;
  let g = txt(W / 2, 32, "La balance à poussée", 22, GREEN, "bold");
  g += `<line x1="150" y1="70" x2="420" y2="70" stroke="${DARK}" stroke-width="5"/>`;
  g += elastique(280, 70, 200);
  g += fil([[280, 200], [280, 250]]);
  g += `<circle cx="280" cy="280" r="32" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  // seau
  g += `<path d="M 190 240 L 210 400 L 350 400 L 370 240" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  g += `<rect x="196" y="250" width="168" height="2" fill="none"/>`;
  g += `<path d="M 196 252 L 212 396 L 348 396 L 364 252 Z" fill="#BBDEFB" opacity="0.7"/>`;
  g += label(280, 150, 520, 150, "élastique gradué");
  g += label(300, 285, 520, 290, "caillou dans l'eau");
  g += txt(W / 2, 440, "L'allongement diminue dans l'eau : la poussée F = P − T.", 18, DARK, "bold");
  J(5, W, H, g);
})();

// ===== S6 : vérifie le théorème =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "Recueille l'eau déplacée", 22, GREEN, "bold");
  g += verre(130, 120, 240, 240, 0.9);
  g += `<path d="M 370 140 L 430 180" fill="none" stroke="${DARK}" stroke-width="3"/>`; // bec
  g += fil([[250, 70], [250, 200]]);
  g += `<circle cx="250" cy="230" r="34" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="446" cy="220" r="4" fill="${BLUE}"/><circle cx="456" cy="260" r="4" fill="${BLUE}"/>`;
  g += verre(410, 290, 110, 110, 0.45);
  g += label(250, 100, 560, 90, "caillou suspendu à l'élastique");
  g += label(465, 345, 630, 360, "eau débordée", BLUE);
  g += txt(W / 2, 428, "Poids de l'eau recueillie = poussée mesurée !", 18, PINK, "bold");
  J(6, W, H, g);
})();

// ===== S7 : l'œuf plongeur =====
(() => {
  const W = 820, H = 420;
  let g = txt(W / 2, 32, "L'œuf plongeur : trois cas en trois verres", 22, GREEN, "bold");
  const oeuf = (x, y) => `<ellipse cx="${x}" cy="${y}" rx="26" ry="34" fill="#FFF3C4" stroke="${DARK}" stroke-width="3"/>`;
  g += verre(70, 100, 180, 230, 0.8); g += oeuf(160, 290);
  g += txt(160, 370, "eau douce : il coule", 17, BLUE, "bold");
  g += verre(320, 100, 180, 230, 0.8, "#A5D6A7"); g += oeuf(410, 165);
  g += txt(410, 370, "eau salée : il flotte", 17, GREEN, "bold");
  g += verre(570, 100, 180, 230, 0.8);
  g += `<rect x="573" y="196" width="174" height="88" fill="#A5D6A7"/>`; // couche salée en bas
  g += oeuf(660, 200);
  g += txt(660, 370, "entre deux eaux : F = P", 17, PINK, "bold");
  J(7, W, H, g);
})();

// ===== S8 : le chantier des joules =====
(() => {
  const W = 820, H = 400;
  let g = txt(W / 2, 32, "Traîner… ou soulever ?", 22, GREEN, "bold");
  g += table(50, 400, 300);
  g += `<rect x="120" y="240" width="110" height="60" fill="#A5D6A7" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += fleche(230, 268, 350, 268, PINK, 5);
  g += txt(290, 248, "15 N sur 4 m", 17, PINK, "bold");
  g += txt(240, 345, "W = 15 × 4 = 60 J", 19, DARK, "bold");
  // soulever
  g += bonhomme(600, 300);
  g += `<rect x="620" y="170" width="90" height="55" fill="#A5D6A7" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += fleche(590, 290, 590, 180, BLUE, 5);
  g += txt(545, 235, "1,5 m", 17, BLUE, "bold");
  g += txt(640, 345, "W = 30 × 1,5 = 45 J", 19, DARK, "bold");
  J(8, W, H, g);
})();

// ===== S9 : mesure ta puissance =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "Monte l'escalier contre le chrono !", 22, GREEN, "bold");
  for (let i = 0; i < 5; i++) {
    g += `<path d="M ${160 + i * 80} ${340 - i * 50} h 80 v -50" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  }
  g += bonhomme(330, 230, 0.9);
  // chrono
  g += `<circle cx="110" cy="120" r="40" fill="white" stroke="${DARK}" stroke-width="4"/>`;
  g += `<line x1="110" y1="120" x2="110" y2="92" stroke="${PINK}" stroke-width="4"/>`;
  g += `<rect x="103" y="72" width="14" height="8" fill="${DARK}"/>`;
  g += txt(110, 190, "t = 6 s", 18, PINK, "bold");
  // hauteur
  g += `<line x1="640" y1="340" x2="640" y2="110" stroke="${BLUE}" stroke-width="3" stroke-dasharray="9 6"/>`;
  g += txt(680, 230, "h = 3 m", 18, BLUE, "bold", "start");
  g += txt(W / 2, 400, "W = poids × h, puis P = W ÷ t : ta puissance en watts !", 18, DARK, "bold");
  J(9, W, H, g);
})();

// ===== S12 : la mine de crayon =====
(() => {
  const W = 760, H = 400;
  let g = txt(W / 2, 32, "La mine de crayon dans le circuit", 22, GREEN, "bold");
  g += pile(120, 120);
  g += fil([[140, 106], [140, 70], [420, 70]]);
  g += ampoule(440, 70);
  g += fil([[460, 70], [620, 70], [620, 230], [520, 230]]);
  // crayon taillé aux deux bouts
  g += `<rect x="330" y="215" width="190" height="30" fill="#F9A825" stroke="${DARK}" stroke-width="3"/>`;
  g += `<polygon points="330,215 300,230 330,245" fill="#D7A86E" stroke="${DARK}" stroke-width="2"/>`;
  g += `<polygon points="520,215 550,230 520,245" fill="#D7A86E" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="296" y1="230" x2="304" y2="230" stroke="${DARK}" stroke-width="4"/>`;
  g += fil([[180, 134], [180, 230], [296, 230]]);
  g += label(425, 230, 425, 300, "mine de graphite = résistor");
  g += txt(W / 2, 370, "Raccourcis la longueur de mine : la lampe brille plus fort !", 18, DARK, "bold");
  J(12, W, H, g);
})();

// ===== S13 : l'eau salée résistante =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "L'eau salée conduit le courant", 22, GREEN, "bold");
  g += pile(110, 110);
  g += fil([[130, 96], [130, 60], [400, 60]]);
  g += ampoule(420, 60);
  g += fil([[440, 60], [600, 60], [600, 200]]);
  g += verre(450, 200, 220, 180, 0.8);
  // clous
  g += `<line x1="520" y1="180" x2="520" y2="330" stroke="${GREY}" stroke-width="5"/>`;
  g += `<line x1="600" y1="200" x2="600" y2="330" stroke="${GREY}" stroke-width="5"/>`;
  g += fil([[170, 124], [170, 180], [520, 180]]);
  g += label(560, 350, 320, 420, "deux clous dans l'eau salée");
  g += txt(W / 2, 410, "", 10);
  J(13, W, H, g);
})();

// ===== S14 : les mines associées =====
(() => {
  const W = 820, H = 420;
  let g = txt(W / 2, 32, "Deux mines : en file… ou côte à côte", 22, GREEN, "bold");
  const mine = (x, y, w = 150) => `<rect x="${x}" y="${y - 10}" width="${w}" height="20" fill="#78909C" stroke="${DARK}" stroke-width="2"/>`;
  // série
  g += txt(210, 80, "EN SÉRIE", 19, BLUE, "bold");
  g += fil([[60, 130], [100, 130]]); g += mine(100, 130); g += mine(260, 130); g += fil([[410, 130], [450, 130]]);
  g += txt(210, 180, "lampe plus faible (R double)", 17, PINK, "bold");
  // dérivation
  g += txt(620, 80, "EN DÉRIVATION", 19, BLUE, "bold");
  g += fil([[500, 130], [540, 130], [540, 100], [560, 100]]); g += mine(560, 100, 120);
  g += fil([[540, 130], [540, 160], [560, 160]]); g += mine(560, 160, 120);
  g += fil([[680, 100], [700, 100], [700, 160], [680, 160]]); g += fil([[700, 130], [740, 130]]);
  g += txt(620, 210, "lampe plus forte (R ÷ 2)", 17, GREEN, "bold");
  // circuit commun
  g += pile(100, 280); g += ampoule(300, 300);
  g += fil([[120, 266], [120, 240], [280, 240], [280, 300]]);
  g += fil([[320, 300], [420, 300]]);
  g += txt(W / 2, 390, "Compare l'éclat de la lampe dans chaque cas.", 18, DARK, "bold");
  J(14, W, H, g);
})();

// ===== S15 : l'inventaire des puissances =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "Relève toutes les plaques signalétiques", 22, GREEN, "bold");
  const plaque = (x, y, l1, l2, nom) =>
    `<rect x="${x}" y="${y}" width="150" height="80" fill="#FFFDE7" stroke="${OCRE}" stroke-width="3" rx="8"/>`
    + txt(x + 75, y + 32, l1, 18, BLUE, "bold") + txt(x + 75, y + 62, l2, 18, PINK, "bold")
    + txt(x + 75, y + 105, nom, 16, GREY);
  g += plaque(70, 90, "220 V", "9 W", "lampe DEL");
  g += plaque(300, 90, "220 V", "1 100 W", "fer à repasser");
  g += plaque(530, 90, "220 V", "2 000 W", "bouilloire");
  // carnet
  g += `<rect x="250, " y="250" width="0" height="0" fill="none"/>`;
  g += `<rect x="280" y="240" width="200" height="120" fill="white" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  g += `<line x1="310" y1="270" x2="450" y2="270" stroke="${GREY}" stroke-width="2"/>`;
  g += `<line x1="310" y1="300" x2="450" y2="300" stroke="${GREY}" stroke-width="2"/>`;
  g += `<line x1="310" y1="330" x2="420" y2="330" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(W / 2, 400, "Classe-les, puis calcule I = P ÷ U pour chacun.", 18, DARK, "bold");
  J(15, W, H, g);
})();

// ===== S16 : le détective du compteur =====
(() => {
  const W = 700, H = 420;
  let g = txt(W / 2, 32, "Relève le compteur deux soirs de suite", 22, GREEN, "bold");
  g += `<rect x="230" y="80" width="240" height="200" fill="#ECEFF1" stroke="${DARK}" stroke-width="4" rx="12"/>`;
  g += `<rect x="260" y="110" width="180" height="50" fill="white" stroke="${DARK}" stroke-width="3"/>`;
  "04729".split("").forEach((c, i) => {
    g += `<rect x="${266 + i * 34}" y="116" width="30" height="38" fill="${i < 4 ? DARK : PINK}"/>`;
    g += txt(281 + i * 34, 144, c, 24, "white", "bold");
  });
  g += txt(350, 190, "kWh", 18, GREY, "bold");
  g += `<circle cx="350" cy="235" r="22" fill="none" stroke="${GREY}" stroke-width="3"/>`;
  g += `<line x1="350" y1="235" x2="364" y2="222" stroke="${PINK}" stroke-width="3"/>`;
  g += txt(W / 2, 330, "Soir 1 : 0472 kWh   →   Soir 2 : 0479 kWh", 19, DARK, "bold");
  g += txt(W / 2, 365, "Consommation du jour : 7 kWh. Compare à tes calculs W = P × t !", 17, PINK, "bold");
  J(16, W, H, g);
})();

// ===== S17 : l'audit sécurité =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "Observe, note… et ne touche à RIEN !", 22, GREEN, "bold");
  // tableau électrique
  g += `<rect x="90" y="90" width="220" height="180" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += `<rect x="110" y="110" width="60" height="70" fill="#90A4AE" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(140, 200, "disjoncteur", 14, GREY);
  [0, 1, 2].forEach(i => {
    g += `<rect x="${195 + i * 32}" y="115" width="24" height="40" fill="#FFF3C4" stroke="${DARK}" stroke-width="2"/>`;
  });
  g += txt(237, 200, "fusibles", 14, GREY);
  // multiprise surchargée (danger)
  g += `<rect x="430" y="200" width="160" height="50" fill="#FFCDD2" stroke="${PINK}" stroke-width="3" rx="8"/>`;
  [0, 1, 2, 3].forEach(i => g += `<circle cx="${455 + i * 37}" cy="225" r="11" fill="white" stroke="${DARK}" stroke-width="2"/>`);
  g += txt(510, 285, "multiprise surchargée !", 16, PINK, "bold");
  // carnet + crayon
  g += `<rect x="430" y="90" width="150" height="80" fill="white" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  g += `<line x1="450" y1="115" x2="560" y2="115" stroke="${GREY}" stroke-width="2"/>`;
  g += `<line x1="450" y1="140" x2="540" y2="140" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(W / 2, 380, "Compteur ? Disjoncteur ? Fils abîmés ? Note tout et montre à un adulte.", 17, DARK, "bold");
  J(17, W, H, g);
})();

// ===== S20 : le billard de lumière =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "Le billard de lumière", 22, GREEN, "bold");
  // feuille
  g += `<rect x="110" y="120" width="540" height="230" fill="#FAFAFA" stroke="${GREY}" stroke-width="2"/>`;
  // miroir debout
  g += `<rect x="340" y="110" width="110" height="14" fill="#B0BEC5" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(395, 100, "miroir debout", 15, GREY);
  // lampe + fente
  g += `<rect x="130" y="290" width="70" height="40" fill="#78909C" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  g += `<rect x="215" y="280" width="10" height="60" fill="${DARK}"/>`;
  g += txt(180, 360, "lampe + fente", 15, GREY);
  // rayons
  g += fleche(225, 300, 392, 128, PINK, 4);
  g += fleche(395, 128, 560, 300, BLUE, 4);
  g += `<line x1="395" y1="124" x2="395" y2="260" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += txt(300, 200, "i", 20, PINK, "bold");
  g += txt(488, 200, "r", 20, BLUE, "bold");
  // rapporteur
  g += `<path d="M 330 262 A 60 60 0 0 1 450 262 Z" fill="#E1F5FE" stroke="${BLUE}" stroke-width="2" opacity="0.8"/>`;
  g += txt(390, 250, "rapporteur", 13, BLUE);
  g += txt(W / 2, 395, "Mesure i et r pour trois inclinaisons : toujours égaux !", 18, DARK, "bold");
  J(20, W, H, g);
})();

// ===== S21 : la bougie fantôme =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "La bougie fantôme", 22, GREEN, "bold");
  g += table(80, 680, 340);
  // vitre entre deux livres
  g += `<rect x="370" y="120" width="10" height="220" fill="#B3E5FC" stroke="${BLUE}" stroke-width="2" opacity="0.8"/>`;
  g += `<rect x="330" y="240" width="34" height="100" fill="#A5D6A7" stroke="${DARK}" stroke-width="2"/>`;
  g += `<rect x="386" y="240" width="34" height="100" fill="#EF9A9A" stroke="${DARK}" stroke-width="2"/>`;
  g += bougie(220, 340, 90, true);
  g += bougie(540, 340, 90, false);
  // flamme fantôme
  g += `<ellipse cx="540" cy="232" rx="7" ry="13" fill="none" stroke="#FFB300" stroke-width="2" stroke-dasharray="4 3"/>`;
  g += label(375, 150, 375, 90, "vitre (cadre photo)", BLUE);
  g += txt(220, 385, "bougie allumée", 16, DARK, "bold");
  g += txt(540, 385, "bougie éteinte… qui semble brûler !", 16, PINK, "bold");
  J(21, W, H, g);
})();

// ===== S22 : la pièce magique =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "La pièce magique", 22, GREEN, "bold");
  // cuvette
  g += `<path d="M 180 220 L 210 380 L 490 380 L 520 220" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  g += `<path d="M 192 260 L 214 376 L 486 376 L 508 260 Z" fill="#BBDEFB" opacity="0.8"/>`;
  g += `<ellipse cx="350" cy="370" rx="22" ry="7" fill="#F9A825" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(350, 410, "la pièce au fond", 16, OCRE, "bold");
  // œil
  g += `<ellipse cx="620" cy="130" rx="26" ry="15" fill="white" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="620" cy="130" r="7" fill="${DARK}"/>`;
  // rayon courbé : pièce -> surface -> œil
  g += `<path d="M 350 365 L 470 262" fill="none" stroke="${PINK}" stroke-width="3"/>`;
  g += fleche(470, 262, 594, 140, PINK, 3);
  g += `<line x1="470" y1="262" x2="560" y2="330" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += txt(640, 300, "l'œil croit voir la pièce plus haut", 15, GREY, "bold");
  g += txt(W / 2, 435, "Verse l'eau sans bouger la tête : la pièce « remonte » !", 17, DARK, "bold");
  J(22, W, H, g);
})();

// ===== S23 : l'arc-en-ciel de plafond =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "L'arc-en-ciel de plafond", 22, GREEN, "bold");
  // soleil
  g += `<circle cx="90" cy="100" r="30" fill="#FDD835" stroke="${OCRE}" stroke-width="3"/>`;
  // bassine + miroir incliné
  g += verre(220, 280, 240, 120, 0.8);
  g += `<line x1="260" y1="390" x2="420" y2="290" stroke="#B0BEC5" stroke-width="10"/>`;
  g += txt(340, 430, "miroir incliné dans l'eau", 16, GREY, "bold");
  // rayon
  g += fleche(120, 120, 330, 340, "#F9A825", 4);
  // éventail vers le mur
  const cols = ["#7A4E9E", "#1565C0", "#2E7D32", "#F9A825", "#C62828"];
  cols.forEach((c, k) => g += `<line x1="340" y1="335" x2="640" y2="${90 + k * 28}" stroke="${c}" stroke-width="4"/>`);
  g += `<rect x="640" y="60" width="16" height="180" fill="#ECEFF1" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(700, 150, "le mur", 16, GREY, "bold");
  g += txt(W / 2, 410, "", 10);
  J(23, W, H, g);
})();

// ===== S24 : la boîte à couleurs =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "La boîte à couleurs", 22, GREEN, "bold");
  // boîte avec fenêtre cellophane rouge
  g += `<rect x="220" y="120" width="320" height="200" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/>`;
  g += `<rect x="300" y="150" width="160" height="90" fill="#EF9A9A" stroke="${PINK}" stroke-width="3" opacity="0.85"/>`;
  g += txt(380, 260, "fenêtre cellophane rouge", 15, PINK, "bold");
  // objets dans la boîte (vus à travers)
  g += `<circle cx="330" cy="190" r="14" fill="#C62828" stroke="${DARK}" stroke-width="2"/>`;
  g += `<circle cx="380" cy="195" r="14" fill="#263238" stroke="${DARK}" stroke-width="2"/>`;
  g += `<circle cx="430" cy="188" r="14" fill="#5D4037" stroke="${DARK}" stroke-width="2"/>`;
  // lampe
  g += `<rect x="90" y="160" width="70" height="40" fill="#78909C" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  [0, -14, 14].forEach(dy => g += `<line x1="165" y1="${180 + dy}" x2="215" y2="${180 + dy * 1.4}" stroke="#F9A825" stroke-width="3"/>`);
  g += txt(125, 230, "lampe de poche", 15, GREY);
  g += txt(W / 2, 380, "Sous le filtre rouge : l'objet rouge reste vif, le bleu paraît noir !", 18, DARK, "bold");
  J(24, W, H, g);
})();

// ===== S25 : le disque de Newton =====
(() => {
  const W = 700, H = 440;
  let g = txt(W / 2, 32, "Fabrique ton disque de Newton", 22, GREEN, "bold");
  const cx = 240, cy = 230, r = 110;
  const cols = ["#7A4E9E", "#3F51B5", "#1565C0", "#2E7D32", "#F9A825", "#EF6C00", "#C62828"];
  for (let i = 0; i < 7; i++) {
    const a1 = i * 2 * Math.PI / 7 - Math.PI / 2, a2 = (i + 1) * 2 * Math.PI / 7 - Math.PI / 2;
    g += `<path d="M ${cx} ${cy} L ${cx + r * Math.cos(a1)} ${cy + r * Math.sin(a1)} A ${r} ${r} 0 0 1 ${cx + r * Math.cos(a2)} ${cy + r * Math.sin(a2)} Z" fill="${cols[i]}" stroke="white" stroke-width="2"/>`;
  }
  g += `<circle cx="${cx - 14}" cy="${cy}" r="5" fill="white" stroke="${DARK}" stroke-width="2"/>`;
  g += `<circle cx="${cx + 14}" cy="${cy}" r="5" fill="white" stroke="${DARK}" stroke-width="2"/>`;
  // ficelle en boucle
  g += `<path d="M ${cx - 14} ${cy} C ${cx - 120} ${cy + 140} ${cx + 120} ${cy + 140} ${cx + 14} ${cy}" fill="none" stroke="${OCRE}" stroke-width="3"/>`;
  // disque flou (tourné) à droite
  g += `<circle cx="520" cy="230" r="90" fill="#E0E0E0" stroke="${GREY}" stroke-width="3"/>`;
  g += `<circle cx="520" cy="230" r="60" fill="#EEEEEE"/>`;
  g += txt(520, 350, "à pleine vitesse : blanc grisâtre !", 16, PINK, "bold");
  g += txt(240, 380, "7 secteurs, 2 trous, une ficelle torsadée", 16, GREY, "bold");
  J(25, W, H, g);
})();

// ===== S28 : pèse une mole =====
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 32, "Pèse une mole sur la balance de cuisine", 22, GREEN, "bold");
  // balance
  g += `<rect x="260" y="250" width="240" height="60" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  g += `<rect x="300" y="270" width="80" height="26" fill="white" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(340, 289, "58,5 g", 17, PINK, "bold");
  g += `<ellipse cx="380" cy="240" rx="100" ry="16" fill="#CFD8DC" stroke="${DARK}" stroke-width="3"/>`;
  // tas de sel dessus
  g += `<path d="M 330 238 Q 380 190 430 238 Z" fill="#FAFAFA" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(380, 215, "sel", 15, GREY, "bold");
  // verre d'eau et paquet de sucre à côté
  g += verre(90, 220, 90, 110, 0.6);
  g += txt(135, 360, "18 mL d'eau", 15, BLUE, "bold");
  g += `<rect x="580" y="210" width="110" height="120" fill="#FFF3C4" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  g += txt(635, 275, "342 g", 18, OCRE, "bold");
  g += txt(635, 360, "sucre", 15, OCRE, "bold");
  g += txt(W / 2, 400, "Trois tas différents : chacun contient 6,02 × 10²³ molécules !", 17, DARK, "bold");
  J(28, W, H, g);
})();

// ===== S29 : la conservation en direct =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "La masse se conserve… tant que rien ne s'échappe", 21, GREEN, "bold");
  // bouteille + ballon
  g += `<rect x="200" y="220" width="90" height="140" fill="#E1F5FE" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  g += `<rect x="228" y="190" width="34" height="34" fill="#B0BEC5" stroke="${DARK}" stroke-width="2"/>`;
  g += `<path d="M 245 188 C 200 120 290 110 245 70 C 300 100 300 150 245 188" fill="#EF9A9A" stroke="${PINK}" stroke-width="3"/>`;
  g += txt(180, 120, "le ballon gonfle (CO₂)", 15, PINK, "bold");
  g += `<circle cx="245" cy="300" r="4" fill="white"/><circle cx="260" cy="320" r="4" fill="white"/><circle cx="230" cy="330" r="4" fill="white"/>`;
  // balance
  g += `<rect x="170" y="360" width="150" height="36" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += txt(245, 385, "385 g", 16, DARK, "bold");
  // après ouverture
  g += `<rect x="490" y="220" width="90" height="140" fill="#E1F5FE" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  g += `<path d="M 535 200 q 10 -30 30 -44 M 535 200 q -14 -26 -4 -50" fill="none" stroke="${GREY}" stroke-width="2" stroke-dasharray="5 4"/>`;
  g += `<rect x="460" y="360" width="150" height="36" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += txt(535, 385, "383 g", 16, PINK, "bold");
  g += txt(535, 140, "ballon ouvert : le gaz s'échappe", 15, GREY, "bold");
  g += txt(W / 2, 430, "Fermé : masse inchangée. Ouvert : elle diminue !", 18, DARK, "bold");
  J(29, W, H, g);
})();

// ===== S30 : la bougie détective =====
(() => {
  const W = 820, H = 440;
  let g = txt(W / 2, 32, "La bougie détective : trois indices", 22, GREEN, "bold");
  // 1 : soucoupe au-dessus -> buée
  g += bougie(140, 360, 80, true);
  g += `<ellipse cx="140" cy="220" rx="56" ry="12" fill="#ECEFF1" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="125" cy="245" r="3" fill="${BLUE}"/><circle cx="145" cy="240" r="3" fill="${BLUE}"/><circle cx="160" cy="247" r="3" fill="${BLUE}"/>`;
  g += txt(140, 410, "1. buée = eau", 16, BLUE, "bold");
  // 2 : soucoupe dans la flamme -> noir
  g += bougie(400, 360, 80, true);
  g += `<ellipse cx="400" cy="262" rx="56" ry="12" fill="#ECEFF1" stroke="${DARK}" stroke-width="3"/>`;
  g += `<ellipse cx="400" cy="262" rx="18" ry="6" fill="${DARK}"/>`;
  g += txt(400, 410, "2. rond noir = carbone", 16, DARK, "bold");
  // 3 : bocal + eau de chaux
  g += bougie(660, 340, 60, false);
  g += `<path d="M 590 360 L 590 200 Q 590 180 610 180 L 710 180 Q 730 180 730 200 L 730 360" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  g += `<rect x="594" y="330" width="132" height="28" fill="#F5F5F5" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(660, 410, "3. eau de chaux troublée = CO₂", 16, PINK, "bold");
  J(30, W, H, g);
})();

// ===== S31 : prépare une vraie SRO =====
(() => {
  const W = 760, H = 440;
  let g = txt(W / 2, 32, "La solution de réhydratation orale", 22, GREEN, "bold");
  // bouteille 1 L
  g += `<rect x="150" y="140" width="110" height="220" fill="#E1F5FE" stroke="${DARK}" stroke-width="3" rx="12"/>`;
  g += `<rect x="183" y="110" width="44" height="34" fill="#90A4AE" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(205, 390, "1 L d'eau bouillie", 16, BLUE, "bold");
  // cuillères
  g += `<ellipse cx="420" cy="170" rx="30" ry="16" fill="#ECEFF1" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="450" y1="170" x2="530" y2="160" stroke="${DARK}" stroke-width="4"/>`;
  g += `<path d="M 400 162 Q 420 140 440 162 Z" fill="#FAFAFA" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(470, 210, "6 c. à café de sucre (≈ 25 g)", 16, OCRE, "bold");
  g += `<ellipse cx="420" cy="280" rx="30" ry="16" fill="#ECEFF1" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="450" y1="280" x2="530" y2="270" stroke="${DARK}" stroke-width="4"/>`;
  g += `<path d="M 406 274 Q 420 260 434 274 Z" fill="#FAFAFA" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(480, 320, "1/2 c. à café de sel (≈ 3 g)", 16, GREY, "bold");
  g += txt(W / 2, 425, "Sucre ≈ 25 g/L, sel ≈ 3 g/L : des concentrations qui sauvent des vies !", 17, PINK, "bold");
  J(31, W, H, g);
})();

// ===== S32 : l'indicateur bougainvillée =====
(() => {
  const W = 820, H = 420;
  let g = txt(W / 2, 32, "L'indicateur bougainvillée", 22, GREEN, "bold");
  const gob = (x, couleur, lab, labc) => {
    let s = `<path d="M ${x} 160 L ${x + 14} 300 L ${x + 96} 300 L ${x + 110} 160" fill="none" stroke="${DARK}" stroke-width="3"/>`;
    s += `<path d="M ${x + 6} 190 L ${x + 17} 296 L ${x + 93} 296 L ${x + 104} 190 Z" fill="${couleur}" opacity="0.8"/>`;
    s += txt(x + 55, 340, lab, 16, labc, "bold");
    return s;
  };
  g += gob(90, "#EF9A9A", "+ citron : rose vif", "#C62828");
  g += gob(340, "#CE93D8", "témoin", "#7A4E9E");
  g += gob(590, "#A5D6A7", "+ eau de cendre : verdâtre", "#2E7D32");
  // fleur
  g += `<circle cx="420" cy="90" r="7" fill="#F9A825"/>`;
  [0, 72, 144, 216, 288].forEach(a => {
    const r = a * Math.PI / 180;
    g += `<ellipse cx="${420 + Math.cos(r) * 22}" cy="${90 + Math.sin(r) * 22}" rx="14" ry="9" fill="#C2185B" transform="rotate(${a} ${420 + Math.cos(r) * 22} ${90 + Math.sin(r) * 22})"/>`;
  });
  g += txt(505, 95, "jus de bougainvillée", 15, PINK, "bold", "start");
  g += txt(W / 2, 395, "Verse peu à peu l'eau de cendre dans le citron : la teinte repasse par celle du témoin !", 16, DARK, "bold");
  J(32, W, H, g);
})();

// ===== S35 : la valve mystérieuse =====
(() => {
  const W = 820, H = 420;
  let g = txt(W / 2, 32, "La valve mystérieuse", 22, GREEN, "bold");
  // roue qui tourne sur place : cercle
  g += `<circle cx="210" cy="220" r="90" fill="none" stroke="${DARK}" stroke-width="5"/>`;
  [0, 60, 120].forEach(a => {
    const r = a * Math.PI / 180;
    g += `<line x1="${210 - Math.cos(r) * 86}" y1="${220 - Math.sin(r) * 86}" x2="${210 + Math.cos(r) * 86}" y2="${220 + Math.sin(r) * 86}" stroke="${GREY}" stroke-width="2"/>`;
  });
  g += `<circle cx="210" cy="140" r="8" fill="${PINK}"/>`;
  g += `<circle cx="210" cy="220" r="86" fill="none" stroke="${PINK}" stroke-width="2" stroke-dasharray="8 7"/>`;
  g += txt(210, 350, "roue sur place : la valve décrit un cercle", 16, PINK, "bold");
  // vélo qui roule : cycloïde
  const x0 = 470, y0 = 300, R = 44;
  let dd = "";
  for (let t = 0; t <= 2 * Math.PI * 2; t += 0.1) {
    const x = x0 + R * (t - Math.sin(t)), y = y0 - R * (1 - Math.cos(t));
    dd += (dd ? " L" : "M") + ` ${x} ${y}`;
  }
  g += `<path d="${dd}" fill="none" stroke="${PINK}" stroke-width="3"/>`;
  g += `<line x1="450" y1="${y0}" x2="790" y2="${y0}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="${x0 + R * (Math.PI - 0)}" cy="${y0 - 2 * R + 4}" r="0" fill="none"/>`;
  g += txt(610, 350, "vélo qui roule : des arceaux (cycloïde) !", 16, BLUE, "bold");
  J(35, W, H, g);
})();

// ===== S36 : le chronométrage de la cour =====
(() => {
  const W = 820, H = 380;
  let g = txt(W / 2, 32, "La piste de 20 mètres", 22, GREEN, "bold");
  g += table(60, 760, 280);
  // repères
  g += `<circle cx="130" cy="265" r="12" fill="#90A4AE" stroke="${DARK}" stroke-width="2"/>`;
  g += `<circle cx="690" cy="265" r="12" fill="#90A4AE" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="130" y1="310" x2="690" y2="310" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="130" y1="298" x2="130" y2="322" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="690" y1="298" x2="690" y2="322" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt(410, 345, "d = 20 m", 20, BLUE, "bold");
  g += bonhomme(260, 265, 0.9);
  g += fleche(290, 230, 380, 230, PINK, 4);
  // chrono
  g += `<circle cx="740" cy="120" r="38" fill="white" stroke="${DARK}" stroke-width="4"/>`;
  g += `<line x1="740" y1="120" x2="740" y2="94" stroke="${PINK}" stroke-width="4"/>`;
  g += txt(740, 190, "chronomètre", 15, GREY, "bold");
  g += txt(380, 120, "v = 20 ÷ t, puis × 3,6 pour les km/h", 19, DARK, "bold");
  J(36, W, H, g);
})();

// ===== S37 : le graphe de la bille d'eau =====
(() => {
  const W = 820, H = 420;
  let g = txt(W / 2, 32, "Marque la position de la bille à chaque goutte", 21, GREEN, "bold");
  // bouteille goutte-à-goutte
  g += `<rect x="90" y="80" width="70" height="110" fill="#E1F5FE" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  g += `<circle cx="125" cy="210" r="5" fill="${BLUE}"/><circle cx="125" cy="235" r="5" fill="${BLUE}"/>`;
  g += txt(125, 275, "goutte-à-goutte", 14, BLUE, "bold");
  g += txt(125, 295, "(≈ 1 par seconde)", 13, GREY);
  // sol + bille + marques régulières puis espacées
  g += table(220, 780, 330);
  g += `<circle cx="270" cy="315" r="14" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(290, 290, 360, 290, PINK, 4);
  [330, 410, 490, 570].forEach((x, i) => {
    g += `<line x1="${x}" y1="330" x2="${x}" y2="352" stroke="${PINK}" stroke-width="4"/>`;
    g += txt(x, 372, `${i + 1} s`, 14, PINK, "bold");
  });
  g += txt(W / 2, 410, "Mesure les distances entre marques, puis trace le graphe distance-temps.", 16, DARK, "bold");
  J(37, W, H, g);
})();

(async () => {
  for (const j of jobs) {
    await sharp(Buffer.from(j.svg)).png().toFile(path.join(IMG, j.file));
    console.log("OK", j.file);
  }
  console.log("Total :", jobs.length);
})();
