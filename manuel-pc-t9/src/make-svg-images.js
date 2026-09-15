// make-svg-images.js — schémas techniques SVG→PNG pour le manuel PC T9
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const IMG = path.join(__dirname, "..", "images");

const BG = "#FDFBF6";
function svgDoc(w, h, inner) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
<rect width="${w}" height="${h}" fill="${BG}"/>${inner}</svg>`;
}
function text(x, y, t, size = 20, color = "#1a1a1a", anchor = "middle", weight = "normal") {
  const esc = String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<text x="${x}" y="${y}" font-family="DejaVu Serif, serif" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${esc}</text>`;
}
function line(x1, y1, x2, y2, color = "#1a1a1a", w = 3, dash = "") {
  const d = dash ? ` stroke-dasharray="${dash}"` : "";
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"${d}/>`;
}
function rect(x, y, w, h, fill = "none", stroke = "#1a1a1a", sw = 2.5, rx = 0) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" rx="${rx}"/>`;
}
function circle(cx, cy, r, fill = "none", stroke = "#1a1a1a", sw = 2.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}
function fleche(x1, y1, x2, y2, color = "#C00000", w = 3) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const ah = 12;
  const p1x = x2 - ah * Math.cos(ang - 0.45), p1y = y2 - ah * Math.sin(ang - 0.45);
  const p2x = x2 - ah * Math.cos(ang + 0.45), p2y = y2 - ah * Math.sin(ang + 0.45);
  return line(x1, y1, x2, y2, color, w) + `<polygon points="${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}" fill="${color}"/>`;
}

// ---------- S2 : le vecteur force ----------
function s02() {
  let g = text(420, 40, "Les caractéristiques d'une force et son vecteur", 22, "#1a1a1a", "middle", "bold");
  // droite d'action en pointillés
  g += line(80, 260, 760, 140, "#999", 2, "8,6");
  g += text(740, 120, "droite d'action", 17, "#666", "end");
  // objet
  g += rect(180, 210, 90, 60, "#E8D8B8", "#7a5c2e", 2.5, 6);
  g += text(225, 246, "objet", 17, "#5a4520");
  // vecteur
  const x1 = 270, y1 = 226, x2 = 560, y2 = 176;
  g += fleche(x1, y1, x2, y2, "#C00000", 5);
  g += circle(x1, y1, 6, "#1F4E79", "#1F4E79");
  g += text(x1 - 4, y1 + 34, "point d'application", 17, "#1F4E79");
  g += text(430, 168, "F", 26, "#C00000", "middle", "bold");
  g += text(600, 176, "sens", 18, "#C00000", "start", "bold");
  // légende
  g += text(80, 340, "Une force se représente par un vecteur : direction (celle de la droite d'action),", 19, "#1a1a1a", "start");
  g += text(80, 368, "sens (indiqué par la flèche), intensité (longueur du vecteur, mesurée en newtons N)", 19, "#1a1a1a", "start");
  g += text(80, 396, "et point d'application (origine du vecteur).", 19, "#1a1a1a", "start");
  g += text(80, 436, "Échelle possible : 1 cm ↔ 2 N ; une force de 6 N se dessine longue de 3 cm.", 18, "#1F4E79", "start", "bold");
  return svgDoc(840, 480, g);
}

// ---------- S3 : équilibre sous deux forces ----------
function s03() {
  let g = text(420, 40, "Un solide en équilibre sous deux forces directement opposées", 21, "#1a1a1a", "middle", "bold");
  // carton central
  g += rect(360, 180, 120, 80, "#E8D8B8", "#7a5c2e", 2.5, 6);
  g += text(420, 228, "carton", 17, "#5a4520");
  // droite d'action commune
  g += line(80, 220, 760, 220, "#999", 2, "8,6");
  // dynamomètres à gauche et droite
  g += rect(110, 200, 60, 40, "#DDE6F0", "#1F4E79", 2, 5);
  g += text(140, 226, "3 N", 17, "#1F4E79", "middle", "bold");
  g += rect(670, 200, 60, 40, "#DDE6F0", "#1F4E79", 2, 5);
  g += text(700, 226, "3 N", 17, "#1F4E79", "middle", "bold");
  // fils
  g += line(170, 220, 360, 220, "#444", 2.5);
  g += line(480, 220, 670, 220, "#444", 2.5);
  // vecteurs opposés
  g += fleche(360, 220, 250, 220, "#C00000", 5);
  g += text(300, 200, "F1", 21, "#C00000", "middle", "bold");
  g += fleche(480, 220, 590, 220, "#2E7D32", 5);
  g += text(540, 200, "F2", 21, "#2E7D32", "middle", "bold");
  g += text(80, 320, "Conditions d'équilibre : les deux forces ont la même droite d'action,", 19, "#1a1a1a", "start");
  g += text(80, 348, "la même intensité (3 N = 3 N) et des sens contraires : elles sont directement opposées.", 19, "#1a1a1a", "start");
  return svgDoc(840, 400, g);
}

// ---------- S4 : poids et centre de gravité ----------
function s04() {
  let g = text(420, 40, "Le poids : une force verticale appliquée au centre de gravité", 21, "#1a1a1a", "middle", "bold");
  // sol
  g += line(60, 420, 780, 420, "#7a5c2e", 4);
  // sphère
  g += circle(180, 220, 60, "#F6E3C5", "#7a5c2e", 3);
  g += circle(180, 220, 5, "#C00000", "#C00000");
  g += text(180, 205, "G", 19, "#C00000", "middle", "bold");
  g += fleche(180, 225, 180, 360, "#C00000", 5);
  g += text(200, 320, "P", 24, "#C00000", "start", "bold");
  g += text(180, 130, "sphère : G au centre", 17, "#555");
  // parallélépipède
  g += rect(360, 180, 150, 90, "#DDEBDD", "#2E7D32", 3, 4);
  g += line(360, 180, 510, 270, "#999", 1.5, "6,5");
  g += line(510, 180, 360, 270, "#999", 1.5, "6,5");
  g += circle(435, 225, 5, "#C00000", "#C00000");
  g += text(435, 210, "G", 19, "#C00000", "middle", "bold");
  g += fleche(435, 230, 435, 360, "#C00000", 5);
  g += text(455, 320, "P", 24, "#C00000", "start", "bold");
  g += text(435, 130, "brique : G au croisement", 17, "#555");
  g += text(435, 152, "des diagonales", 17, "#555");
  // anneau
  g += circle(660, 225, 62, "none", "#1F4E79", 14);
  g += circle(660, 225, 5, "#C00000", "#C00000");
  g += text(660, 210, "G", 19, "#C00000", "middle", "bold");
  g += fleche(660, 230, 660, 360, "#C00000", 5);
  g += text(680, 320, "P", 24, "#C00000", "start", "bold");
  g += text(660, 130, "anneau : G au centre,", 17, "#555");
  g += text(660, 152, "hors de la matière !", 17, "#555");
  g += text(420, 460, "Le poids P : direction verticale, sens vers le bas, point d'application G, intensité P = m × g.", 19, "#1F4E79", "middle", "bold");
  return svgDoc(840, 490, g);
}

// ---------- S6 : théorème d'Archimède ----------
function s06() {
  let g = text(420, 40, "Le théorème d'Archimède : trois forces sur le solide immergé", 21, "#1a1a1a", "middle", "bold");
  // cuve
  g += rect(120, 120, 320, 300, "none", "#1a1a1a", 3);
  g += rect(123, 190, 314, 227, "#D6EAF8", "none", 0);
  g += line(120, 190, 440, 190, "#1F4E79", 3);
  // solide suspendu
  g += line(280, 120, 280, 240, "#444", 2.5);
  g += rect(245, 240, 70, 70, "#E8D8B8", "#7a5c2e", 2.5, 4);
  g += text(280, 282, "S", 21, "#5a4520", "middle", "bold");
  // forces
  g += fleche(280, 310, 280, 400, "#C00000", 5);
  g += text(298, 375, "P", 22, "#C00000", "start", "bold");
  g += fleche(268, 240, 268, 160, "#2E7D32", 5);
  g += text(232, 190, "T", 22, "#2E7D32", "end", "bold");
  g += fleche(296, 240, 296, 180, "#1F4E79", 5);
  g += text(316, 205, "F", 22, "#1F4E79", "start", "bold");
  // texte à droite
  g += text(480, 140, "Le solide est en équilibre sous trois forces :", 19, "#1a1a1a", "start");
  g += text(480, 175, "• son poids P (vers le bas) ;", 19, "#C00000", "start");
  g += text(480, 210, "• la force du fil T (dynamomètre) ;", 19, "#2E7D32", "start");
  g += text(480, 245, "• la poussée d'Archimède F (vers le haut).", 19, "#1F4E79", "start");
  g += text(480, 295, "Équilibre : F = P − T", 22, "#1a1a1a", "start", "bold");
  g += text(480, 340, "Théorème : F = poids du liquide déplacé", 19, "#1a1a1a", "start", "bold");
  g += text(480, 372, "F = ρ × V × g", 24, "#C00000", "start", "bold");
  g += text(480, 404, "ρ : masse volumique du liquide (kg/m³)", 17, "#555", "start");
  g += text(480, 428, "V : volume immergé (m³) ; g ≈ 10 N/kg", 17, "#555", "start");
  return svgDoc(840, 470, g);
}

// ---------- S7 : corps flottants ----------
function s07() {
  let g = text(420, 40, "Flotte ou coule ? Comparer la poussée F et le poids P", 21, "#1a1a1a", "middle", "bold");
  const cuve = (x) => rect(x, 110, 200, 280, "none", "#1a1a1a", 3) + rect(x + 3, 165, 194, 222, "#D6EAF8", "none", 0) + line(x, 165, x + 200, 165, "#1F4E79", 3);
  // cas 1 : flotte
  g += cuve(60);
  g += rect(115, 135, 90, 60, "#E8D8B8", "#7a5c2e", 2.5, 4);
  g += fleche(160, 165, 160, 120, "#1F4E79", 4);
  g += fleche(160, 175, 160, 215, "#C00000", 4);
  g += text(160, 420, "F > P : il flotte", 19, "#2E7D32", "middle", "bold");
  g += text(160, 448, "d(solide) < d(liquide)", 17, "#555");
  // cas 2 : entre deux eaux
  g += cuve(320);
  g += rect(375, 220, 90, 60, "#CFCFCF", "#666", 2.5, 4);
  g += fleche(420, 218, 420, 178, "#1F4E79", 4);
  g += fleche(420, 282, 420, 322, "#C00000", 4);
  g += text(420, 420, "F = P : immobile", 19, "#1F4E79", "middle", "bold");
  g += text(420, 448, "(cas très rare)", 17, "#555");
  // cas 3 : coule
  g += cuve(580);
  g += rect(635, 310, 90, 60, "#9FB6C9", "#33556E", 2.5, 4);
  g += fleche(680, 308, 680, 272, "#1F4E79", 4);
  g += fleche(680, 372, 680, 428, "#C00000", 4);
  g += text(680, 460, "F < P : il coule", 19, "#C00000", "middle", "bold");
  g += text(680, 488, "d(solide) > d(liquide)", 17, "#555");
  g += text(275, 490, "F en bleu, P en rouge", 17, "#555", "middle");
  return svgDoc(840, 520, g);
}

// ---------- S8 : travail d'une force ----------
function s08() {
  let g = text(420, 40, "Le travail d'une force constante : W = F × d", 22, "#1a1a1a", "middle", "bold");
  // sol
  g += line(60, 260, 780, 260, "#7a5c2e", 4);
  // caisse position 1
  g += rect(120, 190, 90, 70, "#E8D8B8", "#7a5c2e", 2.5, 4);
  // caisse position 2 (fantôme)
  g += rect(560, 190, 90, 70, "none", "#b09a70", 2.5, 4);
  // force
  g += fleche(210, 225, 330, 225, "#C00000", 5);
  g += text(270, 205, "F = 40 N", 19, "#C00000", "middle", "bold");
  // déplacement
  g += line(165, 300, 605, 300, "#1F4E79", 2.5);
  g += fleche(585, 300, 605, 300, "#1F4E79", 2.5);
  g += text(385, 330, "d = 5 m (sur la droite d'action)", 19, "#1F4E79", "middle", "bold");
  g += text(80, 400, "W = F × d = 40 × 5 = 200 J : travail moteur (la force aide le déplacement).", 19, "#1a1a1a", "start");
  g += text(80, 432, "Si la force s'oppose au déplacement (frottement), le travail est résistant (négatif).", 19, "#1a1a1a", "start");
  g += text(80, 472, "Travail du poids : W = P × h : il ne dépend que de la dénivellation h, pas du chemin suivi !", 19, "#C00000", "start", "bold");
  return svgDoc(840, 510, g);
}

// ---------- S12 : caractéristique d'un conducteur ohmique ----------
function s12() {
  let g = text(420, 36, "La caractéristique U = f(I) d'un conducteur ohmique", 21, "#1a1a1a", "middle", "bold");
  // axes
  const X0 = 110, Y0 = 420, W = 420, H = 320;
  g += fleche(X0, Y0, X0 + W + 30, Y0, "#1a1a1a", 2.5);
  g += fleche(X0, Y0, X0, Y0 - H - 20, "#1a1a1a", 2.5);
  g += text(X0 + W + 34, Y0 + 22, "I (A)", 18, "#1a1a1a", "start", "bold");
  g += text(X0 - 16, Y0 - H - 24, "U (V)", 18, "#1a1a1a", "end", "bold");
  // points expérimentaux légèrement dispersés autour de U = 20 I
  const pts = [[0.05, 1.1], [0.10, 1.9], [0.15, 3.1], [0.20, 3.9], [0.25, 5.1], [0.30, 5.9]];
  for (const [i, u] of pts) {
    const px = X0 + i * 1300, py = Y0 - u * 52;
    g += `<path d="M ${px - 6} ${py - 6} L ${px + 6} ${py + 6} M ${px - 6} ${py + 6} L ${px + 6} ${py - 6}" stroke="#C00000" stroke-width="2.6"/>`;
  }
  // droite moyenne
  g += line(X0, Y0, X0 + 0.33 * 1300, Y0 - 6.6 * 52, "#1F4E79", 3);
  // graduations
  for (let i = 1; i <= 6; i++) { g += line(X0 - 5, Y0 - i * 52, X0 + 5, Y0 - i * 52, "#1a1a1a", 2); g += text(X0 - 12, Y0 - i * 52 + 6, String(i), 15, "#555", "end"); }
  for (let k = 1; k <= 3; k++) { const px = X0 + k * 130; g += line(px, Y0 - 5, px, Y0 + 5, "#1a1a1a", 2); g += text(px, Y0 + 26, (k * 0.1).toFixed(1), 15, "#555"); }
  g += text(600, 150, "Points presque alignés :", 18, "#1a1a1a", "start");
  g += text(600, 180, "on trace la droite", 18, "#1a1a1a", "start");
  g += text(600, 210, "moyenne par l'origine.", 18, "#1a1a1a", "start");
  g += text(600, 262, "U proportionnelle à I :", 18, "#1F4E79", "start", "bold");
  g += text(600, 302, "U = R × I", 26, "#C00000", "start", "bold");
  g += text(600, 340, "R : pente de la droite", 17, "#555", "start");
  g += text(600, 368, "ici R = 20 Ω", 17, "#555", "start");
  return svgDoc(880, 470, g);
}

// ---------- S13 : loi d'Ohm, symbole ----------
function s13() {
  let g = text(420, 40, "Le conducteur ohmique (résistor) et la loi d'Ohm", 22, "#1a1a1a", "middle", "bold");
  // symbole
  g += line(120, 140, 260, 140, "#1a1a1a", 3);
  g += rect(260, 118, 130, 44, "#fff", "#1a1a1a", 3);
  g += line(390, 140, 530, 140, "#1a1a1a", 3);
  g += text(325, 100, "symbole du résistor", 18, "#555");
  g += text(325, 148, "R", 24, "#1a1a1a", "middle", "bold");
  // résistor réel
  g += rect(590, 118, 130, 44, "#E8D8B8", "#7a5c2e", 2.5, 20);
  ["#C00000", "#1F4E79", "#E6A817", "#888"].forEach((c, i) => { g += rect(610 + i * 24, 118, 10, 44, c, "none", 0); });
  g += line(560, 140, 590, 140, "#444", 3);
  g += line(720, 140, 750, 140, "#444", 3);
  g += text(655, 195, "résistor réel : anneaux colorés", 17, "#555");
  // triangle U R I
  g += circle(230, 330, 90, "#F2F6FA", "#1F4E79", 3);
  g += line(140, 330, 320, 330, "#1F4E79", 2.5);
  g += line(230, 240, 230, 330, "#1F4E79", 2.5);
  g += text(230, 305, "U", 30, "#C00000", "middle", "bold");
  g += text(185, 385, "R", 30, "#1F4E79", "middle", "bold");
  g += text(275, 385, "I", 30, "#2E7D32", "middle", "bold");
  g += text(420, 285, "U = R × I  (tension en volts)", 21, "#1a1a1a", "start", "bold");
  g += text(420, 325, "R = U ÷ I  (résistance en ohms Ω)", 21, "#1a1a1a", "start", "bold");
  g += text(420, 365, "I = U ÷ R  (intensité en ampères)", 21, "#1a1a1a", "start", "bold");
  g += text(420, 415, "Cache la grandeur cherchée : le triangle donne la formule !", 18, "#1F4E79", "start");
  return svgDoc(840, 460, g);
}

// ---------- S14 : associations de résistors ----------
function s14() {
  let g = text(420, 40, "Association de résistors : en série et en dérivation", 21, "#1a1a1a", "middle", "bold");
  // série
  g += text(210, 90, "EN SÉRIE", 20, "#C00000", "middle", "bold");
  g += line(60, 150, 120, 150, "#1a1a1a", 3);
  g += rect(120, 130, 90, 40, "#fff", "#1a1a1a", 2.5);
  g += text(165, 156, "R1", 19, "#1a1a1a", "middle", "bold");
  g += line(210, 150, 260, 150, "#1a1a1a", 3);
  g += rect(260, 130, 90, 40, "#fff", "#1a1a1a", 2.5);
  g += text(305, 156, "R2", 19, "#1a1a1a", "middle", "bold");
  g += line(350, 150, 410, 150, "#1a1a1a", 3);
  g += text(210, 230, "Re = R1 + R2", 24, "#C00000", "middle", "bold");
  g += text(210, 268, "La résistance équivalente augmente.", 17, "#555");
  // dérivation
  g += text(630, 90, "EN DÉRIVATION", 20, "#1F4E79", "middle", "bold");
  g += line(470, 150, 530, 150, "#1a1a1a", 3);
  g += line(530, 110, 530, 190, "#1a1a1a", 3);
  g += line(530, 110, 580, 110, "#1a1a1a", 3);
  g += rect(580, 92, 90, 36, "#fff", "#1a1a1a", 2.5);
  g += text(625, 116, "R1", 18, "#1a1a1a", "middle", "bold");
  g += line(670, 110, 730, 110, "#1a1a1a", 3);
  g += line(530, 190, 580, 190, "#1a1a1a", 3);
  g += rect(580, 172, 90, 36, "#fff", "#1a1a1a", 2.5);
  g += text(625, 196, "R2", 18, "#1a1a1a", "middle", "bold");
  g += line(670, 190, 730, 190, "#1a1a1a", 3);
  g += line(730, 110, 730, 190, "#1a1a1a", 3);
  g += line(730, 150, 790, 150, "#1a1a1a", 3);
  g += text(630, 250, "1/Re = 1/R1 + 1/R2", 23, "#1F4E79", "middle", "bold");
  g += text(630, 288, "La résistance équivalente diminue.", 17, "#555");
  // exemple numérique
  g += text(80, 350, "Exemple : R1 = 20 Ω et R2 = 30 Ω.", 19, "#1a1a1a", "start", "bold");
  g += text(80, 385, "En série : Re = 20 + 30 = 50 Ω.", 19, "#C00000", "start");
  g += text(80, 420, "En dérivation : 1/Re = 1/20 + 1/30 = 5/60 → Re = 12 Ω (plus petite que R1 et R2 !).", 19, "#1F4E79", "start");
  return svgDoc(840, 460, g);
}

// ---------- S15 : puissance, plaque signalétique ----------
function s15() {
  let g = text(420, 40, "La puissance électrique : P = U × I", 22, "#1a1a1a", "middle", "bold");
  // ampoule avec plaque
  g += circle(180, 190, 70, "#FFF6D8", "#B8960C", 3);
  g += rect(155, 258, 50, 46, "#CFCFCF", "#666", 2.5, 4);
  g += text(180, 200, "💡", 40);
  g += rect(90, 330, 180, 66, "#F2F6FA", "#1F4E79", 2.5, 8);
  g += text(180, 358, "230 V  60 W", 21, "#1F4E79", "middle", "bold");
  g += text(180, 384, "plaque signalétique", 16, "#555");
  // fer à repasser
  g += rect(430, 330, 200, 66, "#F2F6FA", "#1F4E79", 2.5, 8);
  g += text(530, 358, "220 V  1 000 W", 21, "#1F4E79", "middle", "bold");
  g += text(530, 384, "fer à repasser", 16, "#555");
  g += `<path d="M 440 260 L 620 260 L 600 200 Q 590 180 560 180 L 480 180 Q 455 180 450 205 Z" fill="#9FB6C9" stroke="#33556E" stroke-width="3"/>`;
  // formules
  g += text(330, 120, "P = U × I", 26, "#C00000", "start", "bold");
  g += text(330, 158, "watt = volt × ampère", 18, "#555", "start");
  g += text(520, 120, "I = P ÷ U", 26, "#2E7D32", "start", "bold");
  g += text(520, 158, "courant appelé par l'appareil", 18, "#555", "start");
  g += text(80, 440, "Le fer 1 000 W sous 220 V appelle I = 1000 ÷ 220 ≈ 4,5 A : il faut un fusible adapté !", 19, "#1a1a1a", "start", "bold");
  return svgDoc(840, 480, g);
}

// ---------- S16 : énergie, compteur, loi de Joule ----------
function s16() {
  let g = text(420, 40, "L'énergie électrique : W = P × t : le compteur la mesure", 21, "#1a1a1a", "middle", "bold");
  // compteur
  g += rect(100, 90, 250, 220, "#F0F0F0", "#444", 3, 10);
  g += rect(125, 120, 200, 55, "#1a1a1a", "#000", 2, 4);
  g += text(225, 158, "0 4 7 2 9", 30, "#7CFC00", "middle", "bold");
  g += circle(225, 235, 38, "#DDD", "#666", 2.5);
  g += line(225, 235, 253, 218, "#C00000", 3);
  g += text(225, 300, "kWh", 20, "#444", "middle", "bold");
  g += text(225, 340, "le compteur JIRAMA compte les kilowattheures", 16, "#555");
  // formules
  g += text(430, 110, "W = P × t", 26, "#C00000", "start", "bold");
  g += text(430, 145, "joule = watt × seconde", 18, "#555", "start");
  g += text(430, 185, "Unité pratique : le kilowattheure", 19, "#1a1a1a", "start", "bold");
  g += text(430, 218, "1 kWh = 1 000 W pendant 1 h", 19, "#1F4E79", "start");
  g += text(430, 250, "1 kWh = 3 600 000 J", 19, "#1F4E79", "start");
  g += text(430, 300, "Loi de Joule (conducteur ohmique) :", 19, "#1a1a1a", "start", "bold");
  g += text(430, 338, "Q = R × I² × t", 25, "#C00000", "start", "bold");
  g += text(430, 372, "toute l'énergie reçue devient chaleur", 18, "#555", "start");
  g += text(80, 430, "Exemple : le fer (1 000 W = 1 kW) utilisé 2 h consomme W = 1 × 2 = 2 kWh.", 19, "#1a1a1a", "start");
  return svgDoc(840, 470, g);
}

// ---------- S17 : installation domestique ----------
function s17() {
  let g = text(420, 36, "L'installation électrique de la maison", 22, "#1a1a1a", "middle", "bold");
  // arrivée
  g += text(70, 90, "ligne JIRAMA", 17, "#555", "start");
  g += line(60, 110, 160, 110, "#C00000", 4);
  g += line(60, 126, 160, 126, "#1F4E79", 4);
  // compteur
  g += rect(160, 80, 110, 80, "#F0F0F0", "#444", 2.5, 8);
  g += text(215, 115, "compteur", 16, "#444");
  g += text(215, 140, "kWh", 16, "#444", "middle", "bold");
  // disjoncteur
  g += rect(310, 80, 110, 80, "#FFE9E0", "#C00000", 2.5, 8);
  g += text(365, 112, "disjoncteur", 15, "#C00000", "middle", "bold");
  g += text(365, 138, "général", 15, "#C00000");
  g += line(270, 110, 310, 110, "#C00000", 4);
  g += line(270, 126, 310, 126, "#1F4E79", 4);
  // barre de distribution
  g += line(420, 118, 500, 118, "#444", 4);
  g += line(500, 118, 500, 400, "#444", 4);
  // 3 lignes en dérivation avec fusibles
  const lignes = [[190, "fusible 10 A", "éclairage : lampes"], [280, "fusible 16 A", "prises : radio, frigo"], [370, "fusible 20 A", "gros appareils : fer"]];
  for (const [y, fus, usage] of lignes) {
    g += line(500, y, 560, y, "#444", 3.5);
    g += rect(560, y - 16, 90, 32, "#FFF6D8", "#B8960C", 2.5, 6);
    g += text(605, y + 6, fus, 14, "#7a5c2e", "middle", "bold");
    g += line(650, y, 700, y, "#444", 3.5);
    g += rect(700, y - 20, 120, 40, "#F2F6FA", "#1F4E79", 2.5, 6);
    g += text(760, y + 5, usage, 13, "#1F4E79");
  }
  g += text(80, 250, "Le disjoncteur général protège", 18, "#1a1a1a", "start");
  g += text(80, 278, "TOUTE la maison ;", 18, "#C00000", "start", "bold");
  g += text(80, 306, "chaque fusible ne protège", 18, "#1a1a1a", "start");
  g += text(80, 334, "qu'UNE ligne de distribution.", 18, "#1F4E79", "start", "bold");
  g += text(80, 390, "Les lignes sont branchées", 18, "#1a1a1a", "start");
  g += text(80, 418, "en dérivation : même tension 220 V.", 18, "#1a1a1a", "start");
  return svgDoc(840, 450, g);
}

// ---------- S20 : lois de la réflexion ----------
function s20() {
  let g = text(420, 40, "La réflexion sur un miroir plan : angle i = angle r", 21, "#1a1a1a", "middle", "bold");
  // miroir
  g += line(160, 380, 680, 380, "#1F4E79", 5);
  for (let x = 170; x < 680; x += 26) g += line(x, 380, x - 12, 398, "#1F4E79", 2);
  g += text(420, 425, "miroir plan", 17, "#555");
  // normale
  g += line(420, 380, 420, 120, "#999", 2, "8,6");
  g += text(420, 105, "normale", 16, "#666");
  // rayon incident
  g += fleche(190, 160, 417, 377, "#C00000", 4);
  g += text(240, 150, "rayon incident", 17, "#C00000", "start", "bold");
  // rayon réfléchi
  g += fleche(423, 377, 650, 160, "#2E7D32", 4);
  g += text(600, 150, "rayon réfléchi", 17, "#2E7D32", "end", "bold");
  // angles
  g += `<path d="M 420 310 A 70 70 0 0 0 371 331" fill="none" stroke="#C00000" stroke-width="2.5"/>`;
  g += text(378, 300, "i", 21, "#C00000", "middle", "bold");
  g += `<path d="M 469 331 A 70 70 0 0 0 420 310" fill="none" stroke="#2E7D32" stroke-width="2.5"/>`;
  g += text(462, 300, "r", 21, "#2E7D32", "middle", "bold");
  // point d'incidence
  g += circle(420, 380, 5, "#1a1a1a", "#1a1a1a");
  g += text(440, 402, "I : point d'incidence", 16, "#555", "start");
  g += text(80, 470, "1re loi : le rayon réfléchi est dans le plan d'incidence.   2e loi : angle r = angle i.", 19, "#1a1a1a", "start", "bold");
  return svgDoc(840, 510, g);
}

// ---------- S21 : image dans le miroir plan ----------
function s21() {
  let g = text(420, 40, "L'image d'un objet par le miroir plan : virtuelle et symétrique", 20, "#1a1a1a", "middle", "bold");
  // miroir vertical
  g += line(420, 90, 420, 430, "#1F4E79", 5);
  for (let y = 100; y < 430; y += 26) g += line(420, y, 404, y + 12, "#1F4E79", 2);
  // objet : bougie à gauche
  g += rect(180, 260, 26, 110, "#F6E3C5", "#B8960C", 2.5, 4);
  g += `<ellipse cx="193" cy="245" rx="12" ry="20" fill="#FFB300" stroke="#E65100" stroke-width="2"/>`;
  g += text(193, 410, "objet S", 18, "#1a1a1a", "middle", "bold");
  // image : bougie fantôme à droite
  g += rect(634, 260, 26, 110, "none", "#B8960C", 2.5, 4);
  g += `<ellipse cx="647" cy="245" rx="12" ry="20" fill="none" stroke="#E65100" stroke-width="2" stroke-dasharray="5,4"/>`;
  g += text(647, 410, "image S' (virtuelle)", 17, "#555", "middle", "bold");
  // symétrie
  g += line(206, 300, 634, 300, "#999", 2, "8,6");
  g += text(310, 288, "d", 19, "#C00000", "middle", "bold");
  g += text(527, 288, "d", 19, "#C00000", "middle", "bold");
  // rayons vers un œil
  g += fleche(200, 250, 418, 190, "#C00000", 3);
  g += fleche(422, 190, 300, 120, "#2E7D32", 3);
  g += line(422, 190, 647, 258, "#999", 2, "6,5");
  g += text(268, 108, "œil", 18, "#1a1a1a");
  g += text(80, 470, "L'image est symétrique de l'objet par rapport au miroir (même distance d), virtuelle :", 18, "#1a1a1a", "start");
  g += text(80, 498, "elle ne peut pas se recueillir sur un écran ; les rayons semblent seulement en provenir.", 18, "#1a1a1a", "start");
  return svgDoc(840, 530, g);
}

// ---------- S23 : décomposition de la lumière blanche ----------
function s23() {
  let g = text(420, 40, "Le prisme décompose la lumière blanche : le spectre", 21, "#1a1a1a", "middle", "bold");
  // faisceau blanc
  g += line(80, 240, 330, 240, "#888", 6);
  g += text(160, 218, "lumière blanche", 18, "#555", "start", "bold");
  // prisme
  g += `<polygon points="330,320 470,320 400,150" fill="#EAF2FA" stroke="#1F4E79" stroke-width="3"/>`;
  g += text(400, 355, "prisme", 17, "#1F4E79");
  // spectre
  const cols = ["#8F00FF", "#4B0082", "#0000FF", "#00A550", "#FFD500", "#FF7F00", "#FF0000"];
  cols.forEach((c, i) => {
    g += line(430, 250, 740, 150 + i * 38, c, 6);
  });
  g += rect(740, 130, 26, 270, "#fff", "#444", 2);
  cols.forEach((c, i) => { g += rect(742, 138 + i * 36, 22, 34, c, "none", 0); });
  g += text(700, 445, "écran : spectre de 7 couleurs", 17, "#555", "end");
  g += text(80, 445, "violet, indigo, bleu, vert, jaune, orangé, rouge : l'arc-en-ciel est le même phénomène,", 18, "#1a1a1a", "start");
  g += text(80, 473, "les gouttes de pluie jouant le rôle de milliers de petits prismes.", 18, "#1a1a1a", "start");
  return svgDoc(840, 500, g);
}

// ---------- S24 : couleur des objets, filtres ----------
function s24() {
  let g = text(420, 40, "La couleur d'un objet : il renvoie SA couleur, il absorbe les autres", 20, "#1a1a1a", "middle", "bold");
  // lumière blanche sur objet rouge
  const cols = ["#8F00FF", "#0000FF", "#00A550", "#FFD500", "#FF7F00", "#FF0000"];
  cols.forEach((c, i) => { g += line(90, 120 + i * 16, 280, 190 + i * 6, c, 4); });
  g += circle(330, 230, 58, "#D32F2F", "#8B0000", 3);
  g += text(330, 316, "tomate rouge", 17, "#555");
  g += fleche(380, 200, 540, 130, "#FF0000", 6);
  g += text(500, 110, "seul le ROUGE repart vers l'œil", 17, "#C00000", "start", "bold");
  g += text(330, 360, "les autres couleurs sont absorbées", 16, "#777");
  // filtre
  g += text(420, 415, "Le filtre coloré : il ne laisse passer que sa couleur", 19, "#1a1a1a", "middle", "bold");
  cols.forEach((c, i) => { g += line(90, 450 + i * 12, 330, 480 + i * 5, c, 4); });
  g += rect(330, 435, 20, 110, "#2E7D3266", "#2E7D32", 3);
  g += text(340, 570, "filtre vert", 16, "#2E7D32");
  g += line(350, 495, 700, 495, "#00A550", 7);
  g += text(710, 500, "vert", 18, "#00A550", "start", "bold");
  return svgDoc(840, 600, g);
}

// ---------- S25 : disque de Newton, synthèse ----------
function s25() {
  let g = text(420, 40, "La synthèse de la lumière blanche : le disque de Newton", 21, "#1a1a1a", "middle", "bold");
  // disque arrêté
  const cols = ["#FF0000", "#FF7F00", "#FFD500", "#00A550", "#0000FF", "#4B0082", "#8F00FF"];
  const cx = 230, cy = 250, R = 120;
  cols.forEach((c, i) => {
    const a0 = (i * 2 * Math.PI) / 7 - Math.PI / 2, a1 = ((i + 1) * 2 * Math.PI) / 7 - Math.PI / 2;
    const x0 = cx + R * Math.cos(a0), y0 = cy + R * Math.sin(a0);
    const x1 = cx + R * Math.cos(a1), y1 = cy + R * Math.sin(a1);
    g += `<path d="M ${cx} ${cy} L ${x0.toFixed(1)} ${y0.toFixed(1)} A ${R} ${R} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)} Z" fill="${c}" stroke="#333" stroke-width="1.5"/>`;
  });
  g += circle(cx, cy, 10, "#333", "#000");
  g += text(cx, 415, "disque arrêté : 7 couleurs", 18, "#555");
  // flèche rotation
  g += `<path d="M 400 180 A 80 80 0 0 1 430 300" fill="none" stroke="#1a1a1a" stroke-width="3"/>`;
  g += `<polygon points="430,300 418,278 444,282" fill="#1a1a1a"/>`;
  g += text(452, 240, "rotation rapide", 18, "#1a1a1a", "start", "bold");
  // disque en rotation
  g += circle(650, 250, 120, "#EDEDE6", "#999", 3);
  g += circle(650, 250, 10, "#666", "#444");
  g += text(650, 415, "en rotation : blanc grisâtre !", 18, "#555");
  g += text(80, 470, "L'œil additionne les couleurs qui défilent trop vite : leurs lumières se recomposent", 18, "#1a1a1a", "start");
  g += text(80, 498, "en lumière blanche : c'est la synthèse, l'inverse de la décomposition par le prisme.", 18, "#1a1a1a", "start");
  return svgDoc(840, 530, g);
}

// ---------- S28 : la mole, bilan ----------
function s28() {
  let g = text(420, 40, "La mole : le paquet du chimiste (rappels de T8 approfondis)", 20, "#1a1a1a", "middle", "bold");
  // paquet de particules
  g += circle(180, 200, 100, "#F2F6FA", "#1F4E79", 3);
  let seed = 7;
  for (let i = 0; i < 40; i++) {
    seed = (seed * 16807) % 2147483647;
    const a = (seed % 360) * Math.PI / 180;
    seed = (seed * 16807) % 2147483647;
    const rr = (seed % 80);
    g += circle(180 + rr * Math.cos(a), 200 + rr * Math.sin(a), 5, "#C00000", "none", 0);
  }
  g += text(180, 330, "1 mole = 6,02 × 10²³ particules", 19, "#1F4E79", "middle", "bold");
  g += text(180, 358, "(le nombre d'Avogadro)", 16, "#555");
  // formules
  g += text(430, 130, "n = m ÷ M", 26, "#C00000", "start", "bold");
  g += text(430, 162, "moles = masse ÷ masse molaire", 17, "#555", "start");
  g += text(430, 215, "M(H2O) = 2 × 1 + 16 = 18 g/mol", 19, "#1a1a1a", "start");
  g += text(430, 250, "M(CO2) = 12 + 2 × 16 = 44 g/mol", 19, "#1a1a1a", "start");
  g += text(430, 285, "M(C4H10) = 4 × 12 + 10 × 1 = 58 g/mol", 19, "#1a1a1a", "start");
  g += text(430, 340, "Gaz aux CNTP (0 °C ; 76 cm Hg) :", 19, "#1a1a1a", "start", "bold");
  g += text(430, 375, "V = n × 22,4 L", 24, "#1F4E79", "start", "bold");
  return svgDoc(840, 430, g);
}

// ---------- S29 : équation-bilan fer + soufre ----------
function s29() {
  let g = text(420, 40, "L'équation-bilan et la méthode des trois étapes", 21, "#1a1a1a", "middle", "bold");
  g += text(420, 110, "Fe  +  S  →  FeS", 34, "#C00000", "middle", "bold");
  g += text(420, 145, "1 mole de fer + 1 mole de soufre → 1 mole de sulfure de fer II", 18, "#555");
  // les 3 étapes
  const steps = [
    ["1. Écrire l'équation-bilan", "Fe + S → FeS (équilibrée : autant d'atomes de chaque côté)"],
    ["2. Établir le bilan molaire", "1 mol Fe ↔ 1 mol S ↔ 1 mol FeS, puis convertir : m = n × M"],
    ["3. Effectuer les calculs", "Ex. : 5,6 g de Fe (0,1 mol) exigent 3,2 g de S et donnent 8,8 g de FeS"],
  ];
  steps.forEach(([t, d], i) => {
    const y = 190 + i * 90;
    g += rect(80, y, 680, 70, i === 0 ? "#FFE9E0" : i === 1 ? "#F2F6FA" : "#EAF4EA", i === 0 ? "#C00000" : i === 1 ? "#1F4E79" : "#2E7D32", 2.5, 10);
    g += text(100, y + 30, t, 19, i === 0 ? "#C00000" : i === 1 ? "#1F4E79" : "#2E7D32", "start", "bold");
    g += text(100, y + 56, d, 16, "#333", "start");
  });
  g += text(420, 495, "M(Fe) = 56 ; M(S) = 32 ; M(FeS) = 56 + 32 = 88 g/mol", 18, "#555", "middle", "bold");
  return svgDoc(840, 530, g);
}

// ---------- S30 : alcanes et combustions ----------
function s30() {
  let g = text(420, 40, "La famille des alcanes : CnH2n+2 et leurs combustions", 21, "#1a1a1a", "middle", "bold");
  const alcs = [["méthane", "CH4"], ["éthane", "C2H6"], ["propane", "C3H8"], ["butane", "C4H10"]];
  alcs.forEach(([nom, f], i) => {
    const x = 120 + i * 170;
    g += rect(x - 60, 80, 130, 80, "#F2F6FA", "#1F4E79", 2.5, 10);
    g += text(x + 5, 112, f, 22, "#1F4E79", "middle", "bold");
    g += text(x + 5, 142, nom, 16, "#555");
  });
  g += text(420, 205, "n = 1, 2, 3, 4 → formule générale CnH2n+2", 19, "#1a1a1a", "middle", "bold");
  // combustion complète
  g += rect(80, 240, 680, 90, "#EAF4EA", "#2E7D32", 2.5, 10);
  g += text(100, 272, "Combustion COMPLÈTE (flamme bleue, assez d'air) :", 18, "#2E7D32", "start", "bold");
  g += text(100, 305, "2 C4H10 + 13 O2 → 8 CO2 + 10 H2O (buée + trouble de l'eau de chaux)", 18, "#1a1a1a", "start");
  // combustion incomplète
  g += rect(80, 350, 680, 90, "#FFE9E0", "#C00000", 2.5, 10);
  g += text(100, 382, "Combustion INCOMPLÈTE (flamme jaune, air en défaut) : DANGER", 18, "#C00000", "start", "bold");
  g += text(100, 415, "noir de carbone + monoxyde de carbone CO (gaz mortel) + eau", 18, "#1a1a1a", "start");
  g += text(420, 480, "Le briquet contient du butane liquide ; flamme jaune = mauvais réglage ou manque d'air.", 17, "#555");
  return svgDoc(840, 510, g);
}

// ---------- S31 : dissolution ionique et concentration ----------
function s31() {
  let g = text(420, 40, "La dissolution ionique et la concentration molaire", 21, "#1a1a1a", "middle", "bold");
  // bécher
  g += `<path d="M 130 110 L 130 340 Q 130 360 150 360 L 290 360 Q 310 360 310 340 L 310 110" fill="none" stroke="#444" stroke-width="3.5"/>`;
  g += rect(133, 170, 174, 188, "#D6EAF8", "none", 0);
  // ions
  const ions = [[170, 220, "+"], [250, 250, "−"], [200, 300, "+"], [270, 200, "−"], [160, 320, "−"], [235, 320, "+"]];
  for (const [x, y, s] of ions) {
    g += circle(x, y, 16, s === "+" ? "#FFE9E0" : "#EAF4EA", s === "+" ? "#C00000" : "#2E7D32", 2.5);
    g += text(x, y + 7, s === "+" ? "Na⁺" : "Cl⁻", 13, s === "+" ? "#C00000" : "#2E7D32", "middle", "bold");
  }
  g += text(220, 400, "NaCl (s) → Na⁺ + Cl⁻", 20, "#1a1a1a", "middle", "bold");
  g += text(220, 428, "la solution conduit le courant : elle est ionique", 15, "#555");
  // formules
  g += text(400, 130, "Concentration molaire :", 20, "#1a1a1a", "start", "bold");
  g += text(400, 170, "C = n ÷ V", 26, "#C00000", "start", "bold");
  g += text(400, 202, "mol/L = moles ÷ litres", 17, "#555", "start");
  g += text(400, 250, "Lien avec la concentration massique :", 18, "#1a1a1a", "start");
  g += text(400, 285, "Cm = C × M   (g/L)", 21, "#1F4E79", "start", "bold");
  g += text(400, 335, "Pour NaCl de concentration C :", 18, "#1a1a1a", "start");
  g += text(400, 370, "[Na⁺] = C  et  [Cl⁻] = C", 21, "#2E7D32", "start", "bold");
  g += text(400, 410, "HCl → H⁺ + Cl⁻   ;   NaOH → Na⁺ + OH⁻", 18, "#555", "start");
  return svgDoc(840, 460, g);
}

// ---------- Annexe : échelle de pH ----------
function sPH() {
  let g = text(420, 40, "L'échelle de pH : acide, neutre, basique", 22, "#1a1a1a", "middle", "bold");
  const colors = ["#D32F2F", "#E64A19", "#F57C00", "#FFA000", "#FBC02D", "#D4E157", "#8BC34A", "#4CAF50", "#26A69A", "#00ACC1", "#0288D1", "#1565C0", "#283593", "#4527A0", "#6A1B9A"];
  const X0 = 60, W = 48;
  colors.forEach((c, i) => {
    g += rect(X0 + i * W, 100, W - 3, 60, c, "#333", 1.5, 4);
    g += text(X0 + i * W + (W - 3) / 2, 140, String(i), 19, "#fff", "middle", "bold");
  });
  g += fleche(X0 + 7 * W + 22, 200, X0 + 7 * W + 22, 165, "#1a1a1a", 3);
  g += text(X0 + 7 * W + 22, 228, "pH = 7 : NEUTRE", 18, "#2E7D32", "middle", "bold");
  g += text(X0 + 60, 228, "pH < 7 : ACIDE", 18, "#C00000", "start", "bold");
  g += text(X0 + 15 * W - 60, 228, "pH > 7 : BASIQUE", 18, "#1565C0", "end", "bold");
  // exemples
  const ex = [["jus de citron", 2], ["vinaigre", 3], ["eau de pluie", 6], ["eau pure", 7], ["eau de mer", 8], ["savon", 10], ["soude", 13]];
  ex.forEach(([nom, ph], i) => {
    const x = X0 + ph * W + (W - 3) / 2;
    const y = 280 + (i % 2) * 34;
    g += line(x, 165, x, y - 16, "#888", 1.5, "4,4");
    g += text(x, y, nom, 15, "#333");
  });
  g += text(420, 390, "BBT : jaune en milieu acide, vert en milieu neutre, bleu en milieu basique.", 19, "#1a1a1a", "middle", "bold");
  return svgDoc(840, 420, g);
}

// ---------- fabrication ----------
const jobs = [
  ["img_seance02.png", s02],
  ["img_seance03.png", s03],
  ["img_seance04.png", s04],
  ["img_seance06.png", s06],
  ["img_seance07.png", s07],
  ["img_seance08.png", s08],
  ["img_seance12.png", s12],
  ["img_seance13.png", s13],
  ["img_seance14.png", s14],
  ["img_seance15.png", s15],
  ["img_seance16.png", s16],
  ["img_seance17.png", s17],
  ["img_seance20.png", s20],
  ["img_seance21.png", s21],
  ["img_seance23.png", s23],
  ["img_seance24.png", s24],
  ["img_seance25.png", s25],
  ["img_seance28.png", s28],
  ["img_seance29.png", s29],
  ["img_seance30.png", s30],
  ["img_seance31.png", s31],
  ["img_annexe_ph.png", sPH],
];

(async () => {
  for (const [name, fn] of jobs) {
    const svg = fn();
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(IMG, name));
    console.log("OK", name);
  }
})();
