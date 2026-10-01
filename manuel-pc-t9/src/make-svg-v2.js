// make-svg-v2.js — schémas « style livre » pour la refonte lisible du manuel PC T9
const sharp = require("sharp");
const path = require("path");

const IMG = path.join(__dirname, "..", "images");
const GREEN = "#2E7D32", PINK = "#C2185B", BLUE = "#1565C0", OCRE = "#B25000", GREY = "#555555", DARK = "#263238";
const FONT = "DejaVu Sans, Arial, sans-serif";
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function svgDoc(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="white"/>${inner}</svg>`;
}
function txt(x, y, s, size, color = DARK, weight = "normal", anchor = "middle") {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" font-weight="${weight}" text-anchor="${anchor}">${esc(s)}</text>`;
}
function fleche(x1, y1, x2, y2, color, width = 6) {
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L;
  const ax = x2 - ux * 20, ay = y2 - uy * 20;
  return `<line x1="${x1}" y1="${y1}" x2="${ax}" y2="${ay}" stroke="${color}" stroke-width="${width}"/>`
    + `<polygon points="${x2},${y2} ${ax - uy * 10},${ay + ux * 10} ${ax + uy * 10},${ay - ux * 10}" fill="${color}"/>`;
}
function sol(x1, x2, y) {
  let s = `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${DARK}" stroke-width="3"/>`;
  for (let x = x1; x < x2; x += 26) s += `<line x1="${x}" y1="${y}" x2="${x - 14}" y2="${y + 16}" stroke="${DARK}" stroke-width="2"/>`;
  return s;
}
// dynamomètre vertical : anneau, corps gradué, crochet ; retourne l'y du bas du crochet
function dynamo(x, y, valeur, h = 120) {
  let s = `<circle cx="${x}" cy="${y}" r="10" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  s += `<rect x="${x - 24}" y="${y + 10}" width="48" height="${h}" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="6"/>`;
  for (let i = 1; i <= 4; i++) s += `<line x1="${x - 16}" y1="${y + 10 + i * h / 5}" x2="${x}" y2="${y + 10 + i * h / 5}" stroke="${GREY}" stroke-width="2"/>`;
  s += `<line x1="${x}" y1="${y + 10 + h}" x2="${x}" y2="${y + 40 + h}" stroke="${DARK}" stroke-width="3"/>`;
  s += `<path d="M ${x} ${y + 40 + h} q -12 16 0 24" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  if (valeur) {
    s += `<rect x="${x + 36}" y="${y + 24}" width="110" height="48" fill="white" stroke="${PINK}" stroke-width="3" rx="8"/>`;
    s += txt(x + 91, y + 56, valeur, 22, PINK, "bold");
  }
  return s;
}
// bécher/verre avec eau : (x,y) coin haut-gauche, w,h, niveau d'eau (0-1)
function verre(x, y, w, h, niveau = 0.75, couleurEau = "#BBDEFB") {
  let s = `<rect x="${x}" y="${y + h * (1 - niveau)}" width="${w}" height="${h * niveau}" fill="${couleurEau}"/>`;
  s += `<path d="M ${x} ${y} L ${x} ${y + h} L ${x + w} ${y + h} L ${x + w} ${y}" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  s += `<line x1="${x}" y1="${y + h * (1 - niveau)}" x2="${x + w}" y2="${y + h * (1 - niveau)}" stroke="${BLUE}" stroke-width="2"/>`;
  return s;
}

const jobs = [];
const J = (file, w, h, g) => jobs.push({ file, svg: svgDoc(w, h, g) });

/* ================= UNITÉ 1 ================= */

// --- S1 : lire un dynamomètre ---
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 36, "Le dynamomètre mesure la force en newtons (N)", 24, GREEN, "bold");
  // gros dynamomètre horizontalisé : corps gradué 0-10 N, index à 7
  const x0 = 120, y0 = 140, w = 520, h = 70;
  g += `<rect x="${x0}" y="${y0}" width="${w}" height="${h}" fill="#ECEFF1" stroke="${DARK}" stroke-width="3" rx="10"/>`;
  for (let i = 0; i <= 10; i++) {
    const x = x0 + 30 + i * (w - 60) / 10;
    g += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + (i % 5 === 0 ? 26 : 16)}" stroke="${GREY}" stroke-width="2"/>`;
    g += txt(x, y0 + 50, String(i), 17, GREY);
  }
  const xi = x0 + 30 + 7 * (w - 60) / 10;
  g += `<polygon points="${xi},${y0 + h - 24} ${xi - 10},${y0 + h - 6} ${xi + 10},${y0 + h - 6}" fill="${PINK}"/>`;
  g += txt(xi, y0 + h + 30, "l'index montre 7 N", 20, PINK, "bold");
  // anneau et crochet
  g += `<circle cx="${x0 - 24}" cy="${y0 + h / 2}" r="14" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  g += `<path d="M ${x0 + w} ${y0 + h / 2} h 26 q 18 14 0 26" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(W / 2, 330, "Règles : vérifier le zéro, tirer dans l'axe, lire en face de l'index,", 19, DARK);
  g += txt(W / 2, 358, "ne jamais dépasser la valeur maximale.", 19, DARK);
  J("img_v2_s1_dynamo.png", W, H, g);
})();

// --- S2 : tracer un vecteur force à l'échelle ---
(() => {
  const W = 860, H = 440;
  let g = txt(W / 2, 36, "Tracer un vecteur force à l'échelle 1 cm ↔ 2 N", 24, GREEN, "bold");
  // sac + vecteur 4 cm vers le bas
  const cx = 250, cy = 150;
  g += `<path d="M ${cx - 60} ${cy + 110} Q ${cx - 70} ${cy + 15} ${cx - 32} ${cy + 8} L ${cx - 15} ${cy - 8} L ${cx + 15} ${cy - 8} L ${cx + 32} ${cy + 8} Q ${cx + 70} ${cy + 15} ${cx + 60} ${cy + 110} Z" fill="#E8D5A3" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(cx, cy + 60, "P = 8 N", 20, DARK, "bold");
  g += `<circle cx="${cx}" cy="${cy + 80}" r="7" fill="${PINK}"/>`;
  g += txt(cx + 18, cy + 76, "G", 20, PINK, "bold", "start");
  g += fleche(cx, cy + 80, cx, cy + 240, PINK, 6);
  g += txt(cx - 30, cy + 220, "P", 26, PINK, "bold");
  // règle de correspondance à droite
  const rx = 480, ry = 120;
  g += txt(rx + 150, ry - 20, "8 N ÷ 2 N = 4 cm", 24, BLUE, "bold");
  g += `<rect x="${rx}" y="${ry}" width="300" height="34" fill="#FFF3C4" stroke="${DARK}" stroke-width="2"/>`;
  for (let i = 0; i <= 4; i++) {
    g += `<line x1="${rx + i * 75}" y1="${ry}" x2="${rx + i * 75}" y2="${ry + 14}" stroke="${GREY}" stroke-width="2"/>`;
    g += txt(rx + i * 75, ry + 56, i + " cm", 16, GREY);
  }
  g += txt(rx + 150, ry + 110, "1 cm sur le dessin", 20, DARK);
  g += txt(rx + 150, ry + 138, "représente 2 N en vrai", 20, DARK);
  g += txt(rx + 150, ry + 200, "Le vecteur montre : le point de départ,", 18, GREY);
  g += txt(rx + 150, ry + 226, "la direction, le sens et l'intensité.", 18, GREY);
  J("img_v2_s2_vecteur.png", W, H, g);
})();

// --- S3 : équilibre sous deux forces / désalignement ---
(() => {
  const W = 1000, H = 460;
  let g = txt(W / 2, 36, "Deux forces : équilibre… ou rotation !", 24, GREEN, "bold");
  const panel = (x0, titre) => `<rect x="${x0}" y="60" width="460" height="360" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>` + txt(x0 + 230, 92, titre, 20, BLUE, "bold");
  // panneau 1 : alignées -> équilibre
  g += panel(30, "Forces alignées, égales, opposées : ÉQUILIBRE");
  g += `<rect x="170" y="200" width="180" height="110" fill="#E8BE8C" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(170, 255, 60, 255, PINK, 6);
  g += txt(90, 235, "F1 = 5 N", 19, PINK, "bold");
  g += fleche(350, 255, 460, 255, BLUE, 6);
  g += txt(430, 235, "F2 = 5 N", 19, BLUE, "bold");
  g += `<line x1="60" y1="255" x2="460" y2="255" stroke="${GREY}" stroke-width="1.5" stroke-dasharray="8 6"/>`;
  g += txt(260, 380, "Même droite d'action : le carton ne bouge pas.", 18, DARK);
  // panneau 2 : décalées -> rotation
  g += panel(510, "Forces décalées : le carton TOURNE");
  g += `<g transform="rotate(12 740 255)"><rect x="650" y="200" width="180" height="110" fill="#E8BE8C" stroke="${DARK}" stroke-width="3"/></g>`;
  g += fleche(660, 215, 560, 195, PINK, 6);
  g += txt(590, 175, "F1", 20, PINK, "bold");
  g += fleche(820, 295, 920, 315, BLUE, 6);
  g += txt(890, 345, "F2", 20, BLUE, "bold");
  // flèche de rotation
  g += `<path d="M 700 140 A 70 70 0 0 1 800 150" fill="none" stroke="${OCRE}" stroke-width="4"/>`;
  g += `<polygon points="804,152 786,138 790,162" fill="${OCRE}"/>`;
  g += txt(740, 380, "Droites d'action différentes : pas d'équilibre !", 18, DARK);
  J("img_v2_s3_equilibre.png", W, H, g);
})();

// --- S5 : la méthode des deux pesées ---
(() => {
  const W = 980, H = 560;
  let g = txt(W / 2, 36, "La méthode des deux pesées", 26, GREEN, "bold");
  const panel = (x0, titre) => `<rect x="${x0}" y="60" width="440" height="440" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>` + txt(x0 + 220, 94, titre, 20, BLUE, "bold");
  g += panel(40, "1. Dans l'air : le poids P");
  g += dynamo(260, 120, "8 N");
  g += `<circle cx="260" cy="330" r="38" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(260, 338, "caillou", 16, "white", "bold");
  g += txt(260, 450, "Le dynamomètre indique P = 8 N", 19, DARK, "bold");
  g += panel(520, "2. Dans l'eau : le poids apparent T");
  g += dynamo(740, 100, "5 N");
  g += verre(640, 280, 200, 170, 0.85);
  g += `<circle cx="740" cy="380" r="38" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="740" y1="264" x2="740" y2="342" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(790, 420, 790, 350, GREEN, 5);
  g += txt(815, 390, "F", 22, GREEN, "bold", "start");
  g += txt(740, 480, "Le dynamomètre indique T = 5 N", 19, DARK, "bold");
  g += txt(W / 2, 540, "La poussée d'Archimède : F = P − T = 8 − 5 = 3 N", 23, PINK, "bold");
  J("img_v2_s5_pesees.png", W, H, g);
})();

// --- S6 : le liquide déplacé déborde ---
(() => {
  const W = 900, H = 500;
  let g = txt(W / 2, 36, "La poussée est égale au poids du liquide déplacé", 24, GREEN, "bold");
  // récipient à bec verseur plein, pavé immergé, eau recueillie dans un verre
  g += verre(150, 120, 260, 260, 0.92);
  // bec verseur
  g += `<path d="M 410 140 L 460 170" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  // pavé immergé suspendu
  g += `<line x1="280" y1="80" x2="280" y2="210" stroke="${DARK}" stroke-width="3"/>`;
  g += `<rect x="230" y="210" width="100" height="80" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(280, 256, "200 cm³", 17, "white", "bold");
  // gouttes vers le verre
  g += `<circle cx="470" cy="200" r="5" fill="${BLUE}"/><circle cx="480" cy="240" r="5" fill="${BLUE}"/>`;
  g += verre(440, 270, 120, 130, 0.5);
  g += txt(500, 430, "eau débordée :", 19, DARK);
  g += txt(500, 456, "200 cm³ → poids 2 N", 20, BLUE, "bold");
  // poussée
  g += fleche(360, 300, 360, 230, GREEN, 6);
  g += txt(385, 270, "F = 2 N", 22, GREEN, "bold", "start");
  g += txt(W / 2 + 120, 120, "Le pavé prend la place de 200 cm³ d'eau :", 19, DARK);
  g += txt(W / 2 + 120, 148, "cette eau chassée pèse 2 N,", 19, DARK);
  g += txt(W / 2 + 120, 176, "donc la poussée vaut 2 N !", 20, PINK, "bold");
  J("img_v2_s6_deplace.png", W, H, g);
})();

// --- S7 : flotte / entre deux eaux / coule ---
(() => {
  const W = 1000, H = 470;
  let g = txt(W / 2, 36, "Les trois cas possibles : compare F et P", 24, GREEN, "bold");
  const cas = (x0, titre, sub) => {
    let s = verre(x0, 110, 240, 260, 0.8);
    s += txt(x0 + 120, 410, titre, 21, BLUE, "bold");
    s += txt(x0 + 120, 440, sub, 19, PINK, "bold");
    return s;
  };
  // flotte
  g += cas(40, "F > P : il flotte", "liège, bois…");
  g += `<circle cx="160" cy="162" r="34" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(220, 230, 220, 170, GREEN, 5); g += txt(238, 205, "F", 20, GREEN, "bold", "start");
  g += fleche(100, 170, 100, 230, PINK, 5); g += txt(70, 205, "P", 20, PINK, "bold");
  // entre deux eaux
  g += cas(380, "F = P : il reste immobile", "cas très rare");
  g += `<circle cx="500" cy="240" r="34" fill="#A5D6A7" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(560, 290, 560, 230, GREEN, 5); g += txt(578, 265, "F", 20, GREEN, "bold", "start");
  g += fleche(440, 190, 440, 250, PINK, 5); g += txt(410, 225, "P", 20, PINK, "bold");
  // coule
  g += cas(720, "F < P : il coule", "fer, pierre…");
  g += `<circle cx="840" cy="330" r="34" fill="#78909C" stroke="${DARK}" stroke-width="3"/>`;
  g += fleche(900, 370, 900, 310, GREEN, 5); g += txt(918, 345, "F", 20, GREEN, "bold", "start");
  g += fleche(780, 280, 780, 340, PINK, 5); g += txt(750, 315, "P", 20, PINK, "bold");
  J("img_v2_s7_3cas.png", W, H, g);
})();

// --- S8 : le zébu qui tire la charrette (W = F × d) ---
(() => {
  const W = 1000, H = 440;
  let g = txt(W / 2, 36, "Le zébu tire la charrette : la force travaille", 24, GREEN, "bold");
  const ysol = 330;
  g += sol(40, 960, ysol);
  // charrette simple : caisse + roue
  g += `<rect x="620" y="210" width="220" height="80" fill="#D7A86E" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="700" cy="310" r="34" fill="none" stroke="${DARK}" stroke-width="5"/>`;
  g += `<circle cx="790" cy="310" r="34" fill="none" stroke="${DARK}" stroke-width="5"/>`;
  // zébu stylisé : corps, bosse, tête, pattes, cornes
  g += `<ellipse cx="420" cy="250" rx="95" ry="52" fill="#8D6E63" stroke="${DARK}" stroke-width="3"/>`;
  g += `<path d="M 360 210 q 30 -42 70 -6 Z" fill="#8D6E63" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="318" cy="230" r="30" fill="#8D6E63" stroke="${DARK}" stroke-width="3"/>`;
  g += `<path d="M 300 210 q -16 -24 4 -34 M 330 206 q 4 -28 24 -28" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="380" y1="296" x2="380" y2="${ysol}" stroke="${DARK}" stroke-width="6"/>`;
  g += `<line x1="460" y1="296" x2="460" y2="${ysol}" stroke="${DARK}" stroke-width="6"/>`;
  // timon
  g += `<line x1="500" y1="250" x2="620" y2="250" stroke="${DARK}" stroke-width="4"/>`;
  // vecteur force
  g += fleche(318, 185, 160, 185, PINK, 7);
  g += txt(240, 162, "F = 400 N", 22, PINK, "bold");
  // distance
  g += `<line x1="120" y1="390" x2="880" y2="390" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="120" y1="378" x2="120" y2="402" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="880" y1="378" x2="880" y2="402" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt(500, 424, "d = 250 m", 22, BLUE, "bold");
  J("img_v2_s8_zebu.png", W, H, g);
})();

// --- S9 : la puissance, monter l'escalier contre le chrono ---
(() => {
  const W = 900, H = 470;
  let g = txt(W / 2, 36, "Même travail, durées différentes : qui est le plus puissant ?", 23, GREEN, "bold");
  // escalier
  let s = "";
  for (let i = 0; i < 6; i++) {
    const x = 120 + i * 90, y = 380 - i * 48;
    s += `<path d="M ${x} ${y} h 90 v -48" fill="none" stroke="${DARK}" stroke-width="4"/>`;
  }
  g += `<line x1="120" y1="380" x2="120" y2="380" stroke="${DARK}" stroke-width="4"/>` + s;
  g += sol(60, 840, 380);
  // personnage simple qui monte (bâton)
  const px = 330, py = 240;
  g += `<circle cx="${px}" cy="${py - 58}" r="16" fill="none" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${px}" y1="${py - 42}" x2="${px}" y2="${py}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${px}" y1="${py - 30}" x2="${px + 24}" y2="${py - 12}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${px}" y1="${py}" x2="${px + 22}" y2="${py + 34}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${px}" y1="${py}" x2="${px - 14}" y2="${py + 38}" stroke="${DARK}" stroke-width="3"/>`;
  // hauteur h
  g += `<line x1="700" y1="380" x2="700" y2="92" stroke="${BLUE}" stroke-width="3" stroke-dasharray="10 6"/>`;
  g += `<line x1="688" y1="92" x2="712" y2="92" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt(730, 240, "h = 3 m", 22, BLUE, "bold", "start");
  // chrono
  g += `<circle cx="150" cy="140" r="46" fill="white" stroke="${DARK}" stroke-width="4"/>`;
  g += `<line x1="150" y1="140" x2="150" y2="108" stroke="${PINK}" stroke-width="4"/>`;
  g += `<line x1="150" y1="140" x2="172" y2="152" stroke="${DARK}" stroke-width="3"/>`;
  g += `<rect x="142" y="86" width="16" height="10" fill="${DARK}"/>`;
  g += txt(150, 220, "t = 6 s", 22, PINK, "bold");
  g += txt(450, 440, "Poids 400 N × hauteur 3 m = 1 200 J, fournis en 6 s → P = 200 W", 20, DARK, "bold");
  J("img_v2_s9_escalier.png", W, H, g);
})();

/* ================= UNITÉ 2 ================= */

// --- S12 : la caractéristique U = f(I) ---
(() => {
  const W = 860, H = 560;
  let g = txt(W / 2, 36, "La caractéristique d'un conducteur ohmique", 24, GREEN, "bold");
  const x0 = 140, y0 = 460, wAx = 600, hAx = 360;
  // axes
  g += fleche(x0, y0, x0 + wAx, y0, DARK, 3);
  g += fleche(x0, y0, x0, y0 - hAx, DARK, 3);
  g += txt(x0 + wAx - 10, y0 + 36, "I (A)", 20, DARK, "bold");
  g += txt(x0 - 40, y0 - hAx + 16, "U (V)", 20, DARK, "bold");
  // graduations
  [[0.1, "0,1"], [0.2, "0,2"], [0.3, "0,3"], [0.4, "0,4"]].forEach(([v, lab]) => {
    const x = x0 + v * 1300;
    g += `<line x1="${x}" y1="${y0 - 5}" x2="${x}" y2="${y0 + 5}" stroke="${DARK}" stroke-width="2"/>`;
    g += txt(x, y0 + 28, lab, 16, GREY);
  });
  [[2, "2"], [4, "4"], [6, "6"], [8, "8"]].forEach(([v, lab]) => {
    const y = y0 - v * 40;
    g += `<line x1="${x0 - 5}" y1="${y}" x2="${x0 + 5}" y2="${y}" stroke="${DARK}" stroke-width="2"/>`;
    g += txt(x0 - 24, y + 6, lab, 16, GREY);
  });
  // droite moyenne passant par l'origine (pente 20 V/A : 0,4A -> 8V)
  g += `<line x1="${x0}" y1="${y0}" x2="${x0 + 0.42 * 1300}" y2="${y0 - 8.4 * 40}" stroke="${GREEN}" stroke-width="4"/>`;
  // points de mesure légèrement dispersés
  [[0.1, 2.2], [0.2, 3.9], [0.3, 6.1], [0.4, 8.0]].forEach(([i, u]) => {
    g += `<g transform="translate(${x0 + i * 1300} ${y0 - u * 40})"><line x1="-7" y1="-7" x2="7" y2="7" stroke="${PINK}" stroke-width="3"/><line x1="-7" y1="7" x2="7" y2="-7" stroke="${PINK}" stroke-width="3"/></g>`;
  });
  g += txt(x0 + 420, y0 - 300, "droite moyenne", 19, GREEN, "bold");
  g += txt(x0 + 420, y0 - 272, "(passe par l'origine)", 17, GREEN);
  g += txt(x0 + 170, y0 - 60, "points de mesure ✗", 18, PINK, "bold");
  J("img_v2_s12_caracteristique.png", W, H, g);
})();

// --- S13 : circuit de la loi d'Ohm ---
(() => {
  const W = 900, H = 520;
  let g = txt(W / 2, 36, "Le circuit pour vérifier la loi d'Ohm", 24, GREEN, "bold");
  const L = 160, R = 700, T = 110, B = 400;
  // fils
  g += `<line x1="${L}" y1="${T}" x2="${R}" y2="${T}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${R}" y1="${T}" x2="${R}" y2="${B}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${R}" y1="${B}" x2="${L}" y2="${B}" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${L}" y1="${B}" x2="${L}" y2="${T}" stroke="${DARK}" stroke-width="3"/>`;
  // pile (en bas) : deux traits
  g += `<rect x="390" y="${B - 26}" width="80" height="52" fill="white" stroke="white"/>`;
  g += `<line x1="415" y1="${B - 26}" x2="415" y2="${B + 26}" stroke="${DARK}" stroke-width="6"/>`;
  g += `<line x1="445" y1="${B - 14}" x2="445" y2="${B + 14}" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(430, B + 54, "pile (tension réglable)", 17, GREY);
  g += txt(398, B - 38, "+", 22, DARK, "bold");
  // ampèremètre (en haut, série)
  g += `<circle cx="300" cy="${T}" r="34" fill="white" stroke="${OCRE}" stroke-width="4"/>`;
  g += txt(300, T + 9, "A", 26, OCRE, "bold");
  g += txt(300, T - 50, "ampèremètre EN SÉRIE", 17, OCRE, "bold");
  // résistor (en haut à droite)
  g += `<rect x="520" y="${T - 20}" width="120" height="40" fill="#FFF3C4" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(580, T + 6, "R", 24, DARK, "bold");
  // voltmètre en dérivation sur R
  g += `<line x1="520" y1="${T}" x2="520" y2="230" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="640" y1="${T}" x2="640" y2="230" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="520" y1="230" x2="546" y2="230" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="614" y1="230" x2="640" y2="230" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<circle cx="580" cy="230" r="34" fill="white" stroke="${BLUE}" stroke-width="4"/>`;
  g += txt(580, 239, "V", 26, BLUE, "bold");
  g += txt(580, 300, "voltmètre EN DÉRIVATION", 17, BLUE, "bold");
  // triangle U / R I
  const tx = 120, ty = 300;
  g += `<polygon points="${tx},${ty + 110} ${tx + 150},${ty + 110} ${tx + 75},${ty}" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`;
  g += `<line x1="${tx + 32}" y1="${ty + 65}" x2="${tx + 118}" y2="${ty + 65}" stroke="${GREEN}" stroke-width="2"/>`;
  g += `<line x1="${tx + 75}" y1="${ty + 65}" x2="${tx + 75}" y2="${ty + 110}" stroke="${GREEN}" stroke-width="2"/>`;
  g += txt(tx + 75, ty + 52, "U", 24, GREEN, "bold");
  g += txt(tx + 52, ty + 98, "R", 22, DARK, "bold");
  g += txt(tx + 98, ty + 98, "I", 22, DARK, "bold");
  g += txt(tx + 75, ty + 150, "le triangle magique", 16, GREY);
  J("img_v2_s13_circuit.png", W, H, g);
})();

// --- S14 : série / dérivation ---
(() => {
  const W = 1000, H = 480;
  let g = txt(W / 2, 36, "Deux façons d'associer des résistors", 24, GREEN, "bold");
  const panel = (x0, titre) => `<rect x="${x0}" y="60" width="460" height="360" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>` + txt(x0 + 230, 94, titre, 20, BLUE, "bold");
  const resistor = (x, y, lab) => `<rect x="${x}" y="${y - 18}" width="90" height="36" fill="#FFF3C4" stroke="${DARK}" stroke-width="3"/>` + txt(x + 45, y + 7, lab, 18, DARK, "bold");
  // série
  g += panel(30, "EN SÉRIE : les obstacles s'additionnent");
  g += `<line x1="70" y1="200" x2="150" y2="200" stroke="${DARK}" stroke-width="3"/>`;
  g += resistor(150, 200, "R1");
  g += `<line x1="240" y1="200" x2="300" y2="200" stroke="${DARK}" stroke-width="3"/>`;
  g += resistor(300, 200, "R2");
  g += `<line x1="390" y1="200" x2="460" y2="200" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(260, 290, "Re = R1 + R2", 26, PINK, "bold");
  g += txt(260, 340, "Re est plus grande que chacune", 18, GREY);
  g += txt(260, 366, "Exemple : 20 Ω + 30 Ω = 50 Ω", 19, DARK, "bold");
  // dérivation
  g += panel(510, "EN DÉRIVATION : un chemin de plus");
  g += `<line x1="550" y1="220" x2="620" y2="220" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="620" y1="150" x2="620" y2="290" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="620" y1="150" x2="660" y2="150" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="620" y1="290" x2="660" y2="290" stroke="${DARK}" stroke-width="3"/>`;
  g += resistor(660, 150, "R1");
  g += resistor(660, 290, "R2");
  g += `<line x1="750" y1="150" x2="790" y2="150" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="750" y1="290" x2="790" y2="290" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="790" y1="150" x2="790" y2="290" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="790" y1="220" x2="860" y2="220" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(740, 350, "1/Re = 1/R1 + 1/R2", 24, PINK, "bold");
  g += txt(740, 392, "Re est plus petite que la plus petite — ex. : 20 Ω et 30 Ω → 12 Ω", 16, DARK, "bold");
  J("img_v2_s14_associations.png", W, H, g);
})();

// --- S15 : la plaque signalétique ---
(() => {
  const W = 760, H = 420;
  let g = txt(W / 2, 36, "La plaque signalétique dit tout !", 24, GREEN, "bold");
  // fer à repasser stylisé
  g += `<path d="M 120 220 Q 130 150 230 150 L 380 150 L 380 220 Z" fill="#B0BEC5" stroke="${DARK}" stroke-width="3"/>`;
  g += `<rect x="230" y="120" width="110" height="30" fill="#78909C" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += txt(250, 205, "fer à repasser", 17, DARK);
  // plaque
  g += `<rect x="470" y="120" width="230" height="120" fill="#FFFDE7" stroke="${OCRE}" stroke-width="4" rx="10"/>`;
  g += txt(585, 158, "220 V", 28, BLUE, "bold");
  g += txt(585, 205, "1 100 W", 28, PINK, "bold");
  g += `<line x1="380" y1="180" x2="465" y2="180" stroke="${GREY}" stroke-width="2" stroke-dasharray="8 6"/>`;
  g += txt(585, 280, "tension d'usage : 220 volts", 19, BLUE, "bold");
  g += txt(585, 310, "puissance : 1 100 watts", 19, PINK, "bold");
  g += txt(W / 2, 376, "Courant appelé : I = P ÷ U = 1 100 ÷ 220 = 5 A", 22, DARK, "bold");
  J("img_v2_s15_plaque.png", W, H, g);
})();

/* ================= UNITÉ 3 ================= */

// --- S20 : les lois de la réflexion ---
(() => {
  const W = 860, H = 520;
  let g = txt(W / 2, 36, "La réflexion : l'angle r est égal à l'angle i", 24, GREEN, "bold");
  const Ix = 430, Iy = 400;
  // miroir
  g += `<line x1="130" y1="${Iy}" x2="730" y2="${Iy}" stroke="${DARK}" stroke-width="5"/>`;
  for (let x = 140; x < 730; x += 30) g += `<line x1="${x}" y1="${Iy}" x2="${x - 14}" y2="${Iy + 16}" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(680, Iy + 44, "miroir", 18, GREY);
  // normale
  g += `<line x1="${Ix}" y1="${Iy}" x2="${Ix}" y2="110" stroke="${GREY}" stroke-width="3" stroke-dasharray="10 7"/>`;
  g += txt(Ix, 94, "normale", 18, GREY);
  // rayon incident (35° de la normale)
  const ang = 35 * Math.PI / 180, L = 270;
  const xi = Ix - Math.sin(ang) * L, yi = Iy - Math.cos(ang) * L;
  g += fleche(xi, yi, Ix - Math.sin(ang) * 30, Iy - Math.cos(ang) * 30, PINK, 5);
  g += `<line x1="${Ix - Math.sin(ang) * 30}" y1="${Iy - Math.cos(ang) * 30}" x2="${Ix}" y2="${Iy}" stroke="${PINK}" stroke-width="5"/>`;
  g += txt(xi - 10, yi - 14, "rayon incident", 19, PINK, "bold");
  // rayon réfléchi
  const xr = Ix + Math.sin(ang) * L, yr = Iy - Math.cos(ang) * L;
  g += fleche(Ix, Iy, xr, yr, BLUE, 5);
  g += txt(xr + 10, yr - 14, "rayon réfléchi", 19, BLUE, "bold");
  // angles
  g += `<path d="M ${Ix - Math.sin(ang) * 90} ${Iy - Math.cos(ang) * 90} A 90 90 0 0 1 ${Ix} ${Iy - 90}" fill="none" stroke="${PINK}" stroke-width="3"/>`;
  g += txt(Ix - 48, Iy - 110, "i", 26, PINK, "bold");
  g += `<path d="M ${Ix} ${Iy - 90} A 90 90 0 0 1 ${Ix + Math.sin(ang) * 90} ${Iy - Math.cos(ang) * 90}" fill="none" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt(Ix + 48, Iy - 110, "r", 26, BLUE, "bold");
  // point I
  g += `<circle cx="${Ix}" cy="${Iy}" r="7" fill="${DARK}"/>`;
  g += txt(Ix + 4, Iy + 30, "I (point d'incidence)", 18, DARK, "bold");
  g += txt(W / 2, 490, "Les angles i et r se mesurent TOUJOURS par rapport à la normale !", 20, OCRE, "bold");
  J("img_v2_s20_reflexion.png", W, H, g);
})();

// --- S21 : l'image dans le miroir plan ---
(() => {
  const W = 860, H = 500;
  let g = txt(W / 2, 36, "L'image est le symétrique de l'objet", 24, GREEN, "bold");
  const Mx = 430;
  // miroir vertical
  g += `<line x1="${Mx}" y1="90" x2="${Mx}" y2="430" stroke="${DARK}" stroke-width="5"/>`;
  for (let y = 100; y < 430; y += 28) g += `<line x1="${Mx}" y1="${y}" x2="${Mx + 16}" y2="${y - 14}" stroke="${GREY}" stroke-width="2"/>`;
  g += txt(Mx, 466, "miroir", 18, GREY);
  // bougie objet (gauche)
  const bx = 200, by = 260;
  g += `<rect x="${bx - 12}" y="${by}" width="24" height="110" fill="#FFF3C4" stroke="${DARK}" stroke-width="3"/>`;
  g += `<ellipse cx="${bx}" cy="${by - 18}" rx="9" ry="18" fill="#FFB300" stroke="${OCRE}" stroke-width="2"/>`;
  g += txt(bx, 420, "objet", 20, PINK, "bold");
  // bougie image (droite, en pointillés)
  const ix = 2 * Mx - bx;
  g += `<rect x="${ix - 12}" y="${by}" width="24" height="110" fill="none" stroke="${GREY}" stroke-width="3" stroke-dasharray="7 5"/>`;
  g += `<ellipse cx="${ix}" cy="${by - 18}" rx="9" ry="18" fill="none" stroke="${GREY}" stroke-width="2" stroke-dasharray="5 4"/>`;
  g += txt(ix, 420, "image (virtuelle)", 20, BLUE, "bold");
  // distances
  g += `<line x1="${bx}" y1="150" x2="${Mx}" y2="150" stroke="${PINK}" stroke-width="3"/>`;
  g += `<line x1="${bx}" y1="140" x2="${bx}" y2="160" stroke="${PINK}" stroke-width="3"/>`;
  g += `<line x1="${Mx}" y1="140" x2="${Mx}" y2="160" stroke="${PINK}" stroke-width="3"/>`;
  g += txt((bx + Mx) / 2, 134, "d", 22, PINK, "bold");
  g += `<line x1="${Mx}" y1="150" x2="${ix}" y2="150" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<line x1="${ix}" y1="140" x2="${ix}" y2="160" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt((ix + Mx) / 2, 134, "d", 22, BLUE, "bold");
  g += txt(W / 2, 486, "Même distance, même grandeur… mais on ne peut pas l'attraper !", 19, DARK, "bold");
  J("img_v2_s21_miroir.png", W, H, g);
})();

// --- S22 : la réfraction air -> eau ---
(() => {
  const W = 860, H = 540;
  let g = txt(W / 2, 36, "La réfraction : la lumière change de direction", 24, GREEN, "bold");
  const Sx = 430, Sy = 290;
  // eau
  g += `<rect x="110" y="${Sy}" width="640" height="200" fill="#BBDEFB"/>`;
  g += `<line x1="110" y1="${Sy}" x2="750" y2="${Sy}" stroke="${BLUE}" stroke-width="3"/>`;
  g += txt(160, Sy + 40, "EAU", 20, BLUE, "bold");
  g += txt(160, Sy - 24, "AIR", 20, GREY, "bold");
  // normale
  g += `<line x1="${Sx}" y1="110" x2="${Sx}" y2="470" stroke="${GREY}" stroke-width="3" stroke-dasharray="10 7"/>`;
  g += txt(Sx, 98, "normale", 17, GREY);
  // rayon incident 40°
  const a1 = 40 * Math.PI / 180, L1 = 210;
  g += `<line x1="${Sx - Math.sin(a1) * L1}" y1="${Sy - Math.cos(a1) * L1}" x2="${Sx}" y2="${Sy}" stroke="${PINK}" stroke-width="5"/>`;
  g += fleche(Sx - Math.sin(a1) * L1, Sy - Math.cos(a1) * L1, Sx - Math.sin(a1) * 40, Sy - Math.cos(a1) * 40, PINK, 5);
  g += txt(Sx - 190, Sy - 180, "rayon incident", 19, PINK, "bold");
  g += txt(Sx - 52, Sy - 86, "40°", 20, PINK, "bold");
  // rayon réfracté 29° (se rapproche de la normale)
  const a2 = 29 * Math.PI / 180, L2 = 190;
  g += fleche(Sx, Sy, Sx + Math.sin(a2) * L2, Sy + Math.cos(a2) * L2, BLUE, 5);
  g += txt(Sx + 180, Sy + 170, "rayon réfracté", 19, BLUE, "bold");
  g += txt(Sx + 44, Sy + 90, "29°", 20, BLUE, "bold");
  g += txt(W / 2, 524, "En entrant dans l'eau, le rayon se RAPPROCHE de la normale.", 20, OCRE, "bold");
  J("img_v2_s22_refraction.png", W, H, g);
})();

// --- S23 : le prisme décompose la lumière blanche ---
(() => {
  const W = 900, H = 480;
  let g = txt(W / 2, 36, "Le prisme sépare les couleurs de la lumière blanche", 24, GREEN, "bold");
  // prisme (triangle)
  const px = 420, py = 240;
  g += `<polygon points="${px},${py - 120} ${px - 100},${py + 100} ${px + 100},${py + 100}" fill="#E1F5FE" stroke="${DARK}" stroke-width="3" opacity="0.9"/>`;
  g += txt(px, py + 130, "prisme", 18, GREY);
  // rayon blanc incident
  g += `<line x1="100" y1="170" x2="${px - 52}" y2="${py - 10}" stroke="${DARK}" stroke-width="6"/>`;
  g += txt(190, 150, "lumière blanche", 19, DARK, "bold");
  // éventail de couleurs en sortie
  const cols = ["#7A4E9E", "#3F51B5", "#1565C0", "#2E7D32", "#F9A825", "#EF6C00", "#C62828"];
  cols.forEach((c, k) => {
    const yEnd = 120 + k * 52;
    g += `<line x1="${px + 40}" y1="${py + 10}" x2="790" y2="${yEnd}" stroke="${c}" stroke-width="5"/>`;
  });
  // écran
  g += `<rect x="790" y="90" width="18" height="380" fill="#ECEFF1" stroke="${DARK}" stroke-width="2"/>`;
  g += txt(800, 70, "écran", 17, GREY);
  const noms = ["violet", "indigo", "bleu", "vert", "jaune", "orangé", "rouge"];
  noms.forEach((n, k) => g += txt(858, 126 + k * 52, n, 16, cols[k], "bold"));
  g += txt(350, 440, "Le violet est le plus dévié, le rouge le moins.", 19, OCRE, "bold");
  J("img_v2_s23_prisme.png", W, H, g);
})();

// --- S25 : une onde, sa longueur d'onde ---
(() => {
  const W = 900, H = 420;
  let g = txt(W / 2, 36, "Une onde : une vibration qui se propage", 24, GREEN, "bold");
  // sinusoïde
  const x0 = 90, y0 = 220, amp = 80, lam = 240;
  let dPath = `M ${x0} ${y0}`;
  for (let x = 0; x <= 720; x += 6) {
    dPath += ` L ${x0 + x} ${y0 - Math.sin(x / lam * 2 * Math.PI) * amp}`;
  }
  g += `<path d="${dPath}" fill="none" stroke="${BLUE}" stroke-width="5"/>`;
  g += `<line x1="${x0}" y1="${y0}" x2="${x0 + 740}" y2="${y0}" stroke="${GREY}" stroke-width="2" stroke-dasharray="8 6"/>`;
  // longueur d'onde entre deux crêtes
  const c1 = x0 + lam / 4, c2 = c1 + lam;
  g += `<line x1="${c1}" y1="${y0 - amp - 24}" x2="${c2}" y2="${y0 - amp - 24}" stroke="${PINK}" stroke-width="3"/>`;
  g += `<line x1="${c1}" y1="${y0 - amp - 34}" x2="${c1}" y2="${y0 - amp - 14}" stroke="${PINK}" stroke-width="3"/>`;
  g += `<line x1="${c2}" y1="${y0 - amp - 34}" x2="${c2}" y2="${y0 - amp - 14}" stroke="${PINK}" stroke-width="3"/>`;
  g += txt((c1 + c2) / 2, y0 - amp - 40, "λ (longueur d'onde)", 20, PINK, "bold");
  // flèche de propagation
  g += fleche(620, 110, 800, 110, OCRE, 5);
  g += txt(710, 90, "propagation, vitesse v", 18, OCRE, "bold");
  g += txt(W / 2, 370, "f = nombre de vibrations par seconde (en hertz, Hz)", 20, DARK);
  g += txt(W / 2, 400, "v = λ × f", 26, GREEN, "bold");
  J("img_v2_s25_onde.png", W, H, g);
})();

/* ================= UNITÉ 4 ================= */

// --- S28 : une mole = trois tas différents ---
(() => {
  const W = 960, H = 460;
  let g = txt(W / 2, 36, "Trois tas très différents… même nombre de molécules !", 23, GREEN, "bold");
  const tas = (x, lab1, lab2, color, rx, ry) => {
    let s = `<ellipse cx="${x}" cy="300" rx="${rx}" ry="${ry}" fill="${color}" stroke="${DARK}" stroke-width="3"/>`;
    s += txt(x, 370, lab1, 21, DARK, "bold");
    s += txt(x, 398, lab2, 19, PINK, "bold");
    return s;
  };
  // eau : petit verre
  g += `<path d="M 130 240 L 140 320 L 200 320 L 210 240" fill="#BBDEFB" stroke="${DARK}" stroke-width="3"/>`;
  g += txt(170, 370, "18 g d'eau", 21, DARK, "bold");
  g += txt(170, 398, "1 mole de H₂O", 19, PINK, "bold");
  g += tas(480, "58,5 g de sel", "1 mole de NaCl", "#ECEFF1", 90, 45);
  g += tas(790, "342 g de sucre", "1 mole de sucre", "#FFF3C4", 130, 62);
  g += txt(W / 2, 110, "1 mole = 6,02 × 10²³ molécules", 26, GREEN, "bold");
  g += txt(W / 2, 145, "(le nombre d'Avogadro : le « kapoaka » du chimiste)", 19, GREY);
  // triangle m / n M
  const tx = 60, ty = 150;
  g += `<polygon points="${tx},${ty + 90} ${tx + 120},${ty + 90} ${tx + 60},${ty}" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`;
  g += `<line x1="${tx + 26}" y1="${ty + 54}" x2="${tx + 94}" y2="${ty + 54}" stroke="${GREEN}" stroke-width="2"/>`;
  g += `<line x1="${tx + 60}" y1="${ty + 54}" x2="${tx + 60}" y2="${ty + 90}" stroke="${GREEN}" stroke-width="2"/>`;
  g += txt(tx + 60, ty + 44, "m", 22, GREEN, "bold");
  g += txt(tx + 42, ty + 80, "n", 20, DARK, "bold");
  g += txt(tx + 80, ty + 80, "M", 20, DARK, "bold");
  J("img_v2_s28_mole.png", W, H, g);
})();

// --- S29 : la balance de l'équation-bilan ---
(() => {
  const W = 940, H = 440;
  let g = txt(W / 2, 36, "L'équation-bilan : rien ne se perd, tout se transforme", 23, GREEN, "bold");
  // équation au centre
  g += txt(W / 2, 120, "Fe  +  S  →  FeS", 36, DARK, "bold");
  g += txt(250, 165, "56 g", 24, BLUE, "bold");
  g += txt(425, 165, "32 g", 24, BLUE, "bold");
  g += txt(650, 165, "88 g", 24, PINK, "bold");
  // balance
  const bx = W / 2, by = 330;
  g += `<polygon points="${bx},${by} ${bx - 26},${by + 50} ${bx + 26},${by + 50}" fill="#90A4AE" stroke="${DARK}" stroke-width="3"/>`;
  g += `<line x1="${bx - 240}" y1="${by - 20}" x2="${bx + 240}" y2="${by - 20}" stroke="${DARK}" stroke-width="5"/>`;
  g += `<line x1="${bx}" y1="${by - 20}" x2="${bx}" y2="${by}" stroke="${DARK}" stroke-width="4"/>`;
  // plateaux
  [-240, 240].forEach(dx => {
    g += `<line x1="${bx + dx}" y1="${by - 20}" x2="${bx + dx - 34}" y2="${by + 34}" stroke="${GREY}" stroke-width="2"/>`;
    g += `<line x1="${bx + dx}" y1="${by - 20}" x2="${bx + dx + 34}" y2="${by + 34}" stroke="${GREY}" stroke-width="2"/>`;
    g += `<path d="M ${bx + dx - 40} ${by + 34} A 44 30 0 0 0 ${bx + dx + 40} ${by + 34}" fill="#ECEFF1" stroke="${DARK}" stroke-width="3"/>`;
  });
  g += txt(bx - 240, by + 90, "56 g + 32 g = 88 g", 20, BLUE, "bold");
  g += txt(bx + 240, by + 90, "88 g de FeS", 20, PINK, "bold");
  g += txt(bx, by - 60, "La masse totale se conserve (Lavoisier)", 20, OCRE, "bold");
  J("img_v2_s29_bilan.png", W, H, g);
})();

// --- S30 : flamme bleue / flamme jaune ---
(() => {
  const W = 900, H = 500;
  let g = txt(W / 2, 36, "Deux flammes, deux combustions", 24, GREEN, "bold");
  const panel = (x0, titre, sub) => `<rect x="${x0}" y="60" width="400" height="390" fill="#F7F9FB" stroke="#B0BEC5" stroke-width="2" rx="12"/>` + txt(x0 + 200, 94, titre, 20, BLUE, "bold") + txt(x0 + 200, 430, sub, 18, PINK, "bold");
  // complète : flamme bleue
  g += panel(40, "COMPLÈTE : assez de dioxygène", "CO₂ + eau — flamme propre");
  g += `<rect x="190" y="330" width="100" height="60" fill="#78909C" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += `<path d="M 240 330 C 200 270 215 230 240 190 C 265 230 280 270 240 330 Z" fill="#64B5F6" stroke="${BLUE}" stroke-width="3"/>`;
  g += `<path d="M 240 320 C 218 280 226 255 240 230 C 254 255 262 280 240 320 Z" fill="#1565C0"/>`;
  g += txt(240, 160, "flamme BLEUE", 19, BLUE, "bold");
  // incomplète : flamme jaune + suie + CO
  g += panel(480, "INCOMPLÈTE : l'air manque", "suie + CO (gaz mortel !)");
  g += `<rect x="630" y="330" width="100" height="60" fill="#78909C" stroke="${DARK}" stroke-width="3" rx="8"/>`;
  g += `<path d="M 680 330 C 640 265 658 225 680 180 C 702 225 720 265 680 330 Z" fill="#FDD835" stroke="${OCRE}" stroke-width="3"/>`;
  g += `<path d="M 680 320 C 660 280 668 255 680 235 C 692 255 700 280 680 320 Z" fill="#EF6C00"/>`;
  g += txt(680, 150, "flamme JAUNE", 19, OCRE, "bold");
  // fumée/suie
  [[720, 140], [745, 115], [770, 95]].forEach(([x, y]) => g += `<circle cx="${x}" cy="${y}" r="12" fill="#616161" opacity="0.6"/>`);
  g += txt(790, 150, "suie", 17, DARK, "bold");
  J("img_v2_s30_flammes.png", W, H, g);
})();

// --- S31 : la concentration ---
(() => {
  const W = 880, H = 460;
  let g = txt(W / 2, 36, "La concentration : combien de soluté dans un litre ?", 23, GREEN, "bold");
  // bécher 1 L avec solution
  g += verre(130, 120, 220, 260, 0.8, "#E1F5FE");
  g += txt(240, 420, "V = 0,5 L d'eau", 20, BLUE, "bold");
  // soluté qui tombe (cuillère + grains)
  g += `<rect x="330" y="86" width="110" height="18" fill="#D7A86E" stroke="${DARK}" stroke-width="2" rx="8"/>`;
  g += `<ellipse cx="320" cy="95" rx="26" ry="14" fill="#ECEFF1" stroke="${DARK}" stroke-width="2"/>`;
  [[300, 140], [285, 175], [310, 205], [295, 240]].forEach(([x, y]) => g += `<circle cx="${x}" cy="${y}" r="4" fill="${GREY}"/>`);
  g += txt(430, 130, "m = 11,7 g de sel", 20, DARK, "bold", "start");
  // formules à droite
  g += `<rect x="520" y="170" width="310" height="200" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3" rx="12"/>`;
  g += txt(675, 215, "Cm = m ÷ V", 26, GREEN, "bold");
  g += txt(675, 250, "= 11,7 ÷ 0,5 = 23,4 g/L", 20, DARK);
  g += txt(675, 300, "C = n ÷ V", 26, GREEN, "bold");
  g += txt(675, 335, "= 0,2 ÷ 0,5 = 0,4 mol/L", 20, DARK);
  J("img_v2_s31_concentration.png", W, H, g);
})();

// --- S32 : l'échelle de pH ---
(() => {
  const W = 1000, H = 420;
  let g = txt(W / 2, 36, "L'échelle de pH, de 0 à 14", 24, GREEN, "bold");
  const x0 = 80, y0 = 160, wTot = 840, hBar = 70;
  const colors = ["#C62828", "#D84315", "#EF6C00", "#F9A825", "#FBC02D", "#FDD835", "#C0CA33", "#7CB342", "#43A047", "#26A69A", "#00897B", "#00796B", "#0277BD", "#1565C0", "#283593"];
  for (let i = 0; i < 15; i++) {
    g += `<rect x="${x0 + i * wTot / 15}" y="${y0}" width="${wTot / 15}" height="${hBar}" fill="${colors[i]}" stroke="white" stroke-width="2"/>`;
    g += txt(x0 + (i + 0.5) * wTot / 15, y0 + hBar + 28, String(i), 18, DARK, "bold");
  }
  // zones
  g += txt(x0 + wTot * 0.23, y0 - 24, "ACIDE (ions H+)", 20, "#C62828", "bold");
  g += txt(x0 + wTot * 0.5, y0 - 24, "NEUTRE", 20, "#43A047", "bold");
  g += txt(x0 + wTot * 0.8, y0 - 24, "BASIQUE (ions OH−)", 20, BLUE, "bold");
  // repères
  const rep = [[2, "citron"], [3, "vinaigre"], [7, "eau pure"], [10, "eau savonneuse"], [14, "déboucheur"]];
  rep.forEach(([v, lab], k) => {
    const x = x0 + (v + 0.5) * wTot / 15;
    g += `<line x1="${x}" y1="${y0 + hBar + 40}" x2="${x}" y2="${y0 + hBar + 70 + (k % 2) * 34}" stroke="${GREY}" stroke-width="2"/>`;
    g += txt(x, y0 + hBar + 90 + (k % 2) * 34, lab, 17, DARK, "bold");
  });
  g += txt(W / 2, 400, "BBT : jaune en milieu acide, vert au neutre, bleu en milieu basique.", 19, OCRE, "bold");
  J("img_v2_s32_ph.png", W, H, g);
})();

/* ================= UNITÉ 5 ================= */

// --- S36 : la vitesse v = d / t ---
(() => {
  const W = 980, H = 420;
  let g = txt(W / 2, 36, "Le taxi-brousse : 216 km en 3 heures", 24, GREEN, "bold");
  const ysol = 290;
  g += sol(40, 940, ysol);
  // minibus stylisé
  g += `<rect x="120" y="190" width="200" height="80" fill="#A5D6A7" stroke="${DARK}" stroke-width="3" rx="12"/>`;
  g += `<rect x="140" y="205" width="40" height="30" fill="#E1F5FE" stroke="${DARK}" stroke-width="2"/>`;
  g += `<rect x="195" y="205" width="40" height="30" fill="#E1F5FE" stroke="${DARK}" stroke-width="2"/>`;
  g += `<rect x="250" y="205" width="40" height="30" fill="#E1F5FE" stroke="${DARK}" stroke-width="2"/>`;
  g += `<circle cx="170" cy="278" r="22" fill="#455A64" stroke="${DARK}" stroke-width="3"/>`;
  g += `<circle cx="280" cy="278" r="22" fill="#455A64" stroke="${DARK}" stroke-width="3"/>`;
  // bagages sur le toit
  g += `<rect x="150" y="168" width="60" height="22" fill="#D7A86E" stroke="${DARK}" stroke-width="2"/>`;
  g += `<rect x="220" y="172" width="50" height="18" fill="#B25000" stroke="${DARK}" stroke-width="2"/>`;
  // flèche mouvement
  g += fleche(360, 230, 520, 230, PINK, 6);
  // panneau distance/temps
  g += `<rect x="580" y="120" width="340" height="150" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3" rx="12"/>`;
  g += txt(750, 165, "d = 216 km", 26, BLUE, "bold");
  g += txt(750, 210, "t = 3 h", 26, OCRE, "bold");
  g += txt(750, 252, "v = d ÷ t = 72 km/h", 24, PINK, "bold");
  g += txt(W / 2, 380, "La vitesse moyenne : la distance parcourue divisée par la durée du trajet.", 19, DARK, "bold");
  J("img_v2_s36_vitesse.png", W, H, g);
})();

// --- S37 : le graphe distance-temps ---
(() => {
  const W = 880, H = 560;
  let g = txt(W / 2, 36, "Le graphe du mouvement : distance en fonction du temps", 23, GREEN, "bold");
  const x0 = 130, y0 = 470, wAx = 640, hAx = 370;
  g += fleche(x0, y0, x0 + wAx, y0, DARK, 3);
  g += fleche(x0, y0, x0, y0 - hAx, DARK, 3);
  g += txt(x0 + wAx - 16, y0 + 34, "t (s)", 20, DARK, "bold");
  g += txt(x0 - 44, y0 - hAx + 16, "d (m)", 20, DARK, "bold");
  // graduations
  [[10, "10"], [20, "20"], [30, "30"], [40, "40"]].forEach(([v, lab]) => {
    const x = x0 + v * 14;
    g += `<line x1="${x}" y1="${y0 - 5}" x2="${x}" y2="${y0 + 5}" stroke="${DARK}" stroke-width="2"/>`;
    g += txt(x, y0 + 28, lab, 16, GREY);
  });
  [[60, "60"], [120, "120"], [180, "180"]].forEach(([v, lab]) => {
    const y = y0 - v * 1.7;
    g += `<line x1="${x0 - 5}" y1="${y}" x2="${x0 + 5}" y2="${y}" stroke="${DARK}" stroke-width="2"/>`;
    g += txt(x0 - 30, y + 6, lab, 16, GREY);
  });
  // mouvement uniforme 0-20 s (60 m/10 s), arrêt 20-30 s, reprise
  const pts = [[0, 0], [10, 60], [20, 120], [30, 120], [40, 180]];
  let d2 = "";
  pts.forEach(([t, dd], k) => { d2 += (k ? " L" : "M") + ` ${x0 + t * 14} ${y0 - dd * 1.7}`; });
  g += `<path d="${d2}" fill="none" stroke="${GREEN}" stroke-width="5"/>`;
  pts.forEach(([t, dd]) => g += `<circle cx="${x0 + t * 14}" cy="${y0 - dd * 1.7}" r="7" fill="${PINK}"/>`);
  g += txt(x0 + 130, y0 - 260, "droite = mouvement uniforme", 18, GREEN, "bold");
  g += txt(x0 + 385, y0 - 180, "palier = arrêt", 18, OCRE, "bold");
  g += txt(x0 + 330, y0 - 320, "ça repart !", 18, BLUE, "bold");
  J("img_v2_s37_graphe.png", W, H, g);
})();

(async () => {
  for (const j of jobs) {
    await sharp(Buffer.from(j.svg)).png().toFile(path.join(IMG, j.file));
    console.log("OK", j.file);
  }
})();
