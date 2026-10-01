// make-svg-temoin.js — schémas « style livre » pour la séance témoin S4 (poids, centre de gravité)
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "images");
const GREEN = "#2E7D32", PINK = "#C2185B", BLUE = "#1565C0", OCRE = "#B25000", GREY = "#555555", DARK = "#263238";
const FONT = "DejaVu Sans, Arial, sans-serif";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svgDoc(w, h, inner, bg = "white") {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>${inner}</svg>`;
}
function txt(x, y, s, size, color = DARK, weight = "normal", anchor = "middle") {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
}
// flèche pleine (vecteur)
function fleche(x1, y1, x2, y2, color, width = 6) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  const ax = x2 - ux * 22, ay = y2 - uy * 22;
  let s = `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="${width}"/>`;
  s += `<polygon points="${x2},${y2} ${ax - uy * 11},${ay + ux * 11} ${ax + uy * 11},${ay - ux * 11}" fill="${color}"/>`;
  return s;
}
// sol hachuré
function sol(x1, x2, y) {
  let s = `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${DARK}" stroke-width="3"/>`;
  for (let x = x1; x < x2; x += 26) {
    s += `<line x1="${x}" y1="${y}" x2="${x - 14}" y2="${y + 16}" stroke="${DARK}" stroke-width="2"/>`;
  }
  return s;
}
const jobs = [];

// ---------- 1. Le vecteur poids sur une brique ----------
(() => {
  const W = 900, H = 560;
  let g = txt(W / 2, 40, "Le poids : une flèche qui part de G, toujours vers le bas", 26, GREEN, "bold");
  // brique 3D simple
  const bx = 330, by = 190, bw = 260, bh = 130, d = 46;
  g += `<polygon points="${bx},${by} ${bx + bw},${by} ${bx + bw + d},${by - d} ${bx + d},${by - d}" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/>`;
  g += `<polygon points="${bx + bw},${by} ${bx + bw + d},${by - d} ${bx + bw + d},${by - d + bh} ${bx + bw},${by + bh}" fill="#B9854C" stroke="${DARK}" stroke-width="3"/>`;
  g += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="#E8BE8C" stroke="${DARK}" stroke-width="3"/>`;
  // diagonales -> G
  g += `<line x1="${bx}" y1="${by}" x2="${bx + bw}" y2="${by + bh}" stroke="${GREY}" stroke-width="2" stroke-dasharray="8 6"/>`;
  g += `<line x1="${bx + bw}" y1="${by}" x2="${bx}" y2="${by + bh}" stroke="${GREY}" stroke-width="2" stroke-dasharray="8 6"/>`;
  const gx = bx + bw / 2, gy = by + bh / 2;
  g += `<circle cx="${gx}" cy="${gy}" r="9" fill="${PINK}"/>`;
  g += txt(gx + 28, gy - 8, "G", 26, PINK, "bold");
  g += txt(gx + 150, gy - 8, "(centre de gravité)", 19, GREY, "normal", "start");
  // vecteur poids
  g += fleche(gx, gy, gx, gy + 190, PINK, 7);
  g += txt(gx - 30, gy + 150, "P", 30, PINK, "bold");
  g += txt(gx + 190, gy + 120, "direction : verticale", 20, DARK, "normal", "start");
  g += txt(gx + 190, gy + 150, "sens : vers le bas", 20, DARK, "normal", "start");
  g += txt(gx + 190, gy + 180, "point de départ : G", 20, DARK, "normal", "start");
  g += sol(120, 780, by + bh + 230 - 100);
  jobs.push({ file: "img_t4_poids.png", svg: svgDoc(W, H, g) });
})();

// ---------- 2. Exemple : le sac de riz de 25 kg ----------
(() => {
  const W = 700, H = 480;
  let g = txt(W / 2, 40, "Un sac de riz de 25 kg", 24, GREEN, "bold");
  // sac
  const cx = 300, topY = 110, botY = 330;
  g += `<path d="M ${cx - 90} ${botY} Q ${cx - 110} ${topY + 60} ${cx - 50} ${topY + 30} L ${cx - 25} ${topY} L ${cx + 25} ${topY} L ${cx + 50} ${topY + 30} Q ${cx + 110} ${topY + 60} ${cx + 90} ${botY} Z" fill="#E8D5A3" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${cx - 25}" y1="${topY}" x2="${cx + 25}" y2="${topY}" stroke="${DARK}" stroke-width="5"/>`;
  g += txt(cx, 185, "VARY", 26, OCRE, "bold");
  g += txt(cx, 220, "m = 25 kg", 24, DARK, "bold");
  // vecteur poids depuis G
  g += `<circle cx="${cx}" cy="270" r="7" fill="${PINK}"/>`;
  g += txt(cx + 20, 266, "G", 22, PINK, "bold", "start");
  g += fleche(cx, 270, cx, 378, PINK, 6);
  g += txt(cx + 22, 360, "P = ?", 26, PINK, "bold", "start");
  g += sol(90, 610, botY + 60);
  g += txt(W - 180, 170, "g = 10 N/kg", 22, BLUE, "bold");
  jobs.push({ file: "img_t4_sac.png", svg: svgDoc(W, H, g) });
})();

// ---------- 3. Terre / Lune : même masse, poids différent ----------
(() => {
  const W = 1000, H = 560;
  let g = txt(W / 2, 40, "Même masse partout… mais pas le même poids !", 26, GREEN, "bold");
  const panel = (x0, titre, couleurAstre, valG, valP, craters) => {
    let s = `<rect x="${x0}" y="70" width="430" height="440" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>`;
    s += txt(x0 + 215, 105, titre, 24, BLUE, "bold");
    // petit astre en haut à droite du panneau
    s += `<circle cx="${x0 + 375}" cy="135" r="28" fill="${couleurAstre}" stroke="${DARK}" stroke-width="2"/>`;
    if (craters) {
      s += `<circle cx="${x0 + 365}" cy="128" r="6" fill="#9E9E9E"/><circle cx="${x0 + 385}" cy="145" r="4" fill="#9E9E9E"/><circle cx="${x0 + 380}" cy="122" r="3" fill="#9E9E9E"/>`;
    } else {
      s += `<path d="M ${x0 + 360} 125 q 14 -8 26 2 q -4 14 -20 16 q 8 -10 -6 -18 Z" fill="#66BB6A"/>`;
    }
    // dynamomètre : anneau + corps gradué + crochet
    const dx = x0 + 215, dy = 140;
    s += `<circle cx="${dx}" cy="${dy}" r="10" fill="none" stroke="${DARK}" stroke-width="3"/>`;
    s += `<rect x="${dx - 22}" y="${dy + 10}" width="44" height="110" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="6"/>`;
    for (let i = 1; i <= 4; i++) s += `<line x1="${dx - 14}" y1="${dy + 10 + i * 22}" x2="${dx + 2}" y2="${dy + 10 + i * 22}" stroke="${GREY}" stroke-width="2"/>`;
    s += `<line x1="${dx}" y1="${dy + 120}" x2="${dx}" y2="${dy + 150}" stroke="${DARK}" stroke-width="3"/>`;
    s += `<path d="M ${dx} ${dy + 150} q -12 16 0 24" fill="none" stroke="${DARK}" stroke-width="3"/>`;
    // sac
    const sy = dy + 180;
    s += `<path d="M ${dx - 55} ${sy + 110} Q ${dx - 65} ${sy + 20} ${dx - 30} ${sy + 10} L ${dx - 14} ${sy - 6} L ${dx + 14} ${sy - 6} L ${dx + 30} ${sy + 10} Q ${dx + 65} ${sy + 20} ${dx + 55} ${sy + 110} Z" fill="#E8D5A3" stroke="${DARK}" stroke-width="3"/>`;
    s += txt(dx, sy + 70, "m = 20 kg", 20, DARK, "bold");
    // cadran valeur
    s += `<rect x="${dx + 60}" y="${dy + 30}" width="140" height="56" fill="white" stroke="${PINK}" stroke-width="3" rx="8"/>`;
    s += txt(dx + 130, dy + 66, valP, 24, PINK, "bold");
    s += txt(x0 + 215, 480, valG, 20, GREY);
    return s;
  };
  g += panel(40, "Sur la TERRE", "#64B5F6", "g = 10 N/kg", "200 N", false);
  g += panel(530, "Sur la LUNE", "#CFD8DC", "g = 1,6 N/kg", "32 N", true);
  g += txt(W / 2, 540, "La masse ne change pas (20 kg) ; le poids change avec le lieu.", 21, DARK, "bold");
  jobs.push({ file: "img_t4_terre_lune.png", svg: svgDoc(W, H, g) });
})();

// ---------- 4. Où est le centre de gravité ? (4 objets) ----------
(() => {
  const W = 1120, H = 420;
  let g = txt(W / 2, 40, "Où se trouve le point G ?", 26, GREEN, "bold");
  const gDot = (x, y) => `<circle cx="${x}" cy="${y}" r="8" fill="${PINK}"/>` + txt(x + 16, y - 10, "G", 22, PINK, "bold", "start");
  // boule
  g += `<circle cx="150" cy="200" r="80" fill="#BBDEFB" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="90" y1="200" x2="210" y2="200" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += `<line x1="150" y1="140" x2="150" y2="260" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += gDot(150, 200);
  g += txt(150, 330, "Boule :", 21, DARK, "bold");
  g += txt(150, 358, "au centre", 20, GREY);
  // brique
  g += `<rect x="300" y="150" width="200" height="110" fill="#E8BE8C" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="300" y1="150" x2="500" y2="260" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += `<line x1="500" y1="150" x2="300" y2="260" stroke="${GREY}" stroke-width="2" stroke-dasharray="7 5"/>`;
  g += gDot(400, 205);
  g += txt(400, 330, "Brique :", 21, DARK, "bold");
  g += txt(400, 358, "croisement des diagonales", 20, GREY);
  // règle
  g += `<rect x="560" y="185" width="220" height="36" fill="#FFF3C4" stroke="${DARK}" stroke-width="3"/>`;
  for (let i = 1; i < 10; i++) g += `<line x1="${560 + i * 22}" y1="185" x2="${560 + i * 22}" y2="${i % 5 === 0 ? 207 : 197}" stroke="${GREY}" stroke-width="2"/>`;
  g += gDot(670, 203);
  g += txt(670, 330, "Règle :", 21, DARK, "bold");
  g += txt(670, 358, "en son milieu", 20, GREY);
  // anneau
  g += `<circle cx="970" cy="203" r="70" fill="none" stroke="#90A4AE" stroke-width="26"/>`;
  g += gDot(970, 203);
  g += txt(970, 330, "Anneau : G est", 21, DARK, "bold");
  g += txt(970, 358, "hors de la matière !", 20, PINK, "bold");
  jobs.push({ file: "img_t4_centres.png", svg: svgDoc(W, H, g) });
})();

// ---------- 5. Expérience : la méthode du fil à plomb (3 étapes) ----------
(() => {
  const W = 1100, H = 560;
  let g = txt(W / 2, 38, "L'expérience du fil à plomb, en 3 étapes", 26, GREEN, "bold");
  const cadre = (x0, l1, l2) => {
    let s = `<rect x="${x0}" y="60" width="340" height="440" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>`;
    s += txt(x0 + 170, 90, l1, 19, BLUE, "bold");
    if (l2) s += txt(x0 + 170, 114, l2, 19, BLUE, "bold");
    return s;
  };
  // forme de carton (patatoïde) centrée sur (cx, cy)
  const carton = (cx, cy, rot = 0) =>
    `<g transform="rotate(${rot} ${cx} ${cy})"><path d="M ${cx - 90} ${cy} Q ${cx - 80} ${cy - 90} ${cx} ${cy - 80} Q ${cx + 90} ${cy - 70} ${cx + 80} ${cy + 20} Q ${cx + 70} ${cy + 95} ${cx - 20} ${cy + 85} Q ${cx - 95} ${cy + 70} ${cx - 90} ${cy} Z" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/></g>`;

  // --- Étape 1 : suspendu par le trou A + fil à plomb + trait
  g += cadre(20, "1. Suspends par le trou A,", "trace le trait vertical");
  let cx = 190, cy = 300;
  g += `<line x1="100" y1="120" x2="280" y2="120" stroke="${DARK}" stroke-width="5"/>`; // support
  g += carton(cx, cy, 0);
  g += `<circle cx="${cx}" cy="${cy - 70}" r="6" fill="white" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(cx + 18, cy - 74, "A", 20, DARK, "bold", "start");
  g += `<line x1="${cx}" y1="120" x2="${cx}" y2="${cy - 70}" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="${cx}" y1="${cy - 70}" x2="${cx}" y2="${cy + 110}" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6"/>`; // verticale tracée
  g += `<circle cx="${cx}" cy="${cy + 118}" r="12" fill="#78909C" stroke="${DARK}" stroke-width="2"/>`; // caillou
  g += txt(cx + 24, cy + 124, "fil + caillou", 17, GREY, "normal", "start");

  // --- Étape 2 : suspendu par le trou B + 2e trait, G à l'intersection
  g += cadre(380, "2. Recommence", "avec le trou B");
  cx = 550; cy = 300;
  g += `<line x1="460" y1="120" x2="640" y2="120" stroke="${DARK}" stroke-width="5"/>`;
  g += carton(cx, cy, -58);
  g += `<circle cx="${cx - 12}" cy="${cy - 72}" r="6" fill="white" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(cx + 6, cy - 78, "B", 20, DARK, "bold", "start");
  g += `<line x1="${cx - 12}" y1="120" x2="${cx - 12}" y2="${cy - 72}" stroke="${DARK}" stroke-width="2"/>`;
  g += `<line x1="${cx - 12}" y1="${cy - 72}" x2="${cx - 12}" y2="${cy + 112}" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6"/>`;
  g += `<circle cx="${cx - 12}" cy="${cy + 120}" r="12" fill="#78909C" stroke="${DARK}" stroke-width="2"/>`;
  // ancien trait (étape 1) incliné sur le carton + intersection
  g += `<line x1="${cx - 90}" y1="${cy + 40}" x2="${cx + 70}" y2="${cy - 60}" stroke="${BLUE}" stroke-width="3" stroke-dasharray="10 6"/>`;
  g += `<circle cx="${cx - 12}" cy="${cy - 9}" r="8" fill="${PINK}"/>`;
  g += txt(cx + 6, cy - 12, "G", 22, PINK, "bold", "start");
  g += txt(550, 470, "G = croisement des 2 traits", 17, GREY);

  // --- Étape 3 : équilibre sur la pointe
  g += cadre(740, "3. Pose le carton", "sur une pointe, en G");
  cx = 910; cy = 240;
  g += carton(cx, cy, 0);
  g += `<line x1="${cx - 90}" y1="${cy + 35}" x2="${cx + 70}" y2="${cy - 55}" stroke="${BLUE}" stroke-width="3" stroke-dasharray="10 6"/>`;
  g += `<line x1="${cx - 40}" y1="${cy - 70}" x2="${cx + 30}" y2="${cy + 85}" stroke="${PINK}" stroke-width="3" stroke-dasharray="10 6"/>`;
  g += `<circle cx="${cx - 6}" cy="${cy + 6}" r="8" fill="${PINK}"/>`;
  g += txt(cx + 12, cy + 2, "G", 22, PINK, "bold", "start");
  // stylo pointe
  g += `<polygon points="${cx - 6},${cy + 14} ${cx - 16},${cy + 44} ${cx + 4},${cy + 44}" fill="#455A64"/>`;
  g += `<rect x="${cx - 16}" y="${cy + 44}" width="20" height="120" fill="#607D8B" stroke="${DARK}" stroke-width="2" rx="4"/>`;
  g += txt(cx, cy + 205, "Le carton tient en équilibre :", 18, DARK, "bold");
  g += txt(cx, cy + 230, "G est le point d'application du poids.", 18, PINK, "bold");
  jobs.push({ file: "img_t4_filaplomb.png", svg: svgDoc(W, H, g) });
})();

(async () => {
  for (const j of jobs) {
    await sharp(Buffer.from(j.svg)).png().toFile(path.join(IMG, j.file));
    console.log("OK", j.file);
  }
})();
