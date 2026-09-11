// make-svg-images.js — schémas techniques SVG→PNG pour le manuel PC T7
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
  const esc = t.replace(/&/g, "&amp;").replace(/</g, "&lt;");
  return `<text x="${x}" y="${y}" font-family="DejaVu Serif, serif" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${esc}</text>`;
}
function line(x1, y1, x2, y2, color = "#1a1a1a", w = 3) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
}
function rect(x, y, w, h, fill = "none", stroke = "#1a1a1a", sw = 2.5, rx = 0) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" rx="${rx}"/>`;
}
function circle(cx, cy, r, fill = "none", stroke = "#1a1a1a", sw = 2.5) {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`;
}
function lampe(cx, cy, r = 20) {
  const k = r * 0.7071;
  return circle(cx, cy, r) + line(cx - k, cy - k, cx + k, cy + k, "#1a1a1a", 2.5) + line(cx - k, cy + k, cx + k, cy - k, "#1a1a1a", 2.5);
}
function pileH(cx, cy) {
  return line(cx - 8, cy - 22, cx - 8, cy + 22) +
    `<line x1="${cx + 8}" y1="${cy - 12}" x2="${cx + 8}" y2="${cy + 12}" stroke="#1a1a1a" stroke-width="7"/>` +
    text(cx - 8, cy - 30, "+", 22, "#C00000", "middle", "bold") +
    text(cx + 12, cy - 30, "−", 22, "#1F4E79", "middle", "bold");
}
function fleche(x1, y1, x2, y2, color = "#C00000", w = 3) {
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const ah = 12;
  const p1x = x2 - ah * Math.cos(ang - 0.45), p1y = y2 - ah * Math.sin(ang - 0.45);
  const p2x = x2 - ah * Math.cos(ang + 0.45), p2y = y2 - ah * Math.sin(ang + 0.45);
  return line(x1, y1, x2, y2, color, w) + `<polygon points="${x2},${y2} ${p1x},${p1y} ${p2x},${p2y}" fill="${color}"/>`;
}

// ---------- S1 : masse volumique ----------
function s01() {
  let g = "";
  g += text(400, 40, "La masse volumique : masse d'un litre de matière", 22, "#1a1a1a", "middle", "bold");
  // trois cubes de même volume, masses différentes
  const items = [
    [170, "#C9A36B", "Bois", "0,6 kg"],
    [400, "#9FC4E8", "Eau", "1 kg"],
    [630, "#A9A9B0", "Fer", "7,8 kg"],
  ];
  for (const [cx, col, nom, masse] of items) {
    g += rect(cx - 55, 110, 110, 110, col, "#1a1a1a", 2.5, 6);
    g += text(cx, 172, "1 L", 22, "#1a1a1a", "middle", "bold");
    g += text(cx, 250, nom, 21);
    g += text(cx, 278, masse, 21, "#C00000", "middle", "bold");
  }
  g += text(400, 330, "Le même volume (1 litre) n'a pas la même masse selon la matière :", 20);
  g += text(400, 356, "masse volumique = masse ÷ volume", 21, "#1F4E79", "middle", "bold");
  return svgDoc(800, 390, g);
}

// ---------- S2 : densité ----------
function s02() {
  let g = "";
  g += text(400, 40, "Le cocktail à étages : chaque liquide selon sa densité", 22, "#1a1a1a", "middle", "bold");
  // grand verre avec 3 étages
  g += `<path d="M 300 80 L 320 330 L 480 330 L 500 80" fill="none" stroke="#1a1a1a" stroke-width="3"/>`;
  g += `<path d="M 306 155 L 312 240 L 488 240 L 494 155 Z" fill="#F2C14E"/>`;   // huile
  g += `<path d="M 312 240 L 317 300 L 483 300 L 488 240 Z" fill="#9FC4E8"/>`;   // eau
  g += `<path d="M 317 300 L 320 330 L 480 330 L 483 300 Z" fill="#B03A2E"/>`;   // sirop
  g += line(510, 190, 590, 175, "#666", 1.5) + text(598, 180, "Huile (d ≈ 0,9)", 19, "#1a1a1a", "start");
  g += line(500, 270, 590, 260, "#666", 1.5) + text(598, 265, "Eau (d = 1)", 19, "#1a1a1a", "start");
  g += line(492, 318, 590, 330, "#666", 1.5) + text(598, 335, "Sirop (d ≈ 1,3)", 19, "#1a1a1a", "start");
  g += text(400, 380, "Le liquide le plus dense reste en bas ; le moins dense flotte au-dessus.", 20);
  return svgDoc(800, 410, g);
}

// ---------- S5 : dissolution / miscibilité ----------
function s05() {
  let g = "";
  g += text(400, 40, "Dissolution et miscibilité", 22, "#1a1a1a", "middle", "bold");
  // verre 1 : sel dans l'eau (dissolution)
  g += rect(110, 90, 130, 170, "none", "#1a1a1a", 3, 4);
  g += rect(114, 130, 122, 126, "#D7E8F7", "none", 0);
  for (const [x, y] of [[150, 200], [180, 170], [200, 220], [165, 235], [195, 150]]) g += circle(x, y, 3, "#FFF", "#888", 1.5);
  g += text(175, 300, "Le sel se dissout :", 19);
  g += text(175, 324, "solution homogène", 19, "#1E7B34");
  // verre 2 : huile + eau (non miscibles)
  g += rect(340, 90, 130, 170, "none", "#1a1a1a", 3, 4);
  g += rect(344, 130, 122, 60, "#F2C14E", "none", 0);
  g += rect(344, 190, 122, 66, "#9FC4E8", "none", 0);
  g += text(405, 300, "Huile et eau :", 19);
  g += text(405, 324, "non miscibles", 19, "#C00000");
  // verre 3 : sirop + eau (miscibles)
  g += rect(570, 90, 130, 170, "none", "#1a1a1a", 3, 4);
  g += rect(574, 130, 122, 126, "#E8A2B8", "none", 0);
  g += text(635, 300, "Sirop et eau :", 19);
  g += text(635, 324, "miscibles", 19, "#1E7B34");
  return svgDoc(800, 360, g);
}

// ---------- S7 : distillation ----------
function s07() {
  let g = "";
  g += text(400, 38, "La distillation : ébullition puis condensation", 22, "#1a1a1a", "middle", "bold");
  // ballon chauffé
  g += circle(180, 240, 60, "#D7E8F7");
  g += rect(160, 140, 40, 45, "#D7E8F7", "#1a1a1a", 2.5);
  // flamme
  g += `<path d="M 180 350 q -16 -28 0 -50 q 16 22 0 50 Z" fill="#F0A31F" stroke="#E23A00" stroke-width="2"/>`;
  g += line(120, 352, 240, 352, "#1a1a1a", 4);
  // tube coudé vers droite
  g += line(200, 148, 360, 148, "#1a1a1a", 3.5);
  g += line(360, 148, 480, 240, "#1a1a1a", 3.5);
  // vapeur (petits traits)
  for (const x of [240, 280, 320]) g += line(x, 140, x + 14, 128, "#888", 2);
  // récipient de collecte
  g += rect(470, 240, 110, 90, "none", "#1a1a1a", 3);
  g += rect(474, 290, 102, 36, "#BFE3F2", "none", 0);
  g += text(525, 360, "Eau pure recueillie", 19);
  g += text(180, 340 - 210, "", 10);
  g += text(180, 385, "Eau salée chauffée", 19);
  g += text(300, 110, "Vapeur d'eau", 19, "#1F4E79");
  g += line(600, 180, 660, 180, "#666", 1.5);
  g += text(400, 430, "L'eau bout et s'évapore ; la vapeur se condense plus loin :", 20);
  g += text(400, 456, "on sépare l'eau du sel dissous.", 20);
  return svgDoc(800, 490, g);
}

// ---------- S8 : tamisage / pressage ----------
function s08() {
  let g = "";
  g += text(400, 40, "Le tamisage et le pressage", 22, "#1a1a1a", "middle", "bold");
  // tamis
  g += `<ellipse cx="200" cy="130" rx="105" ry="26" fill="none" stroke="#1a1a1a" stroke-width="3"/>`;
  for (let x = 110; x <= 290; x += 18) g += line(x, 118, x, 145, "#888", 1.2);
  // gros cailloux dessus
  for (const [x, y] of [[160, 118], [210, 112], [255, 120]]) g += circle(x, y, 9, "#A9A9B0", "#555", 1.5);
  // sable qui tombe
  for (const [x, y] of [[170, 180], [200, 200], [230, 185], [185, 220], [215, 225]]) g += circle(x, y, 2.5, "#C9A36B", "#C9A36B", 1);
  g += rect(120, 240, 160, 40, "#EAD9B0", "#1a1a1a", 2.5);
  g += text(200, 320, "Tamisage : le sable fin passe,", 19);
  g += text(200, 344, "les cailloux restent.", 19);
  // pressage
  g += circle(570, 140, 40, "#F5E050", "#B8A000", 2.5); // fruit
  g += fleche(570, 60, 570, 92, "#C00000", 4);
  g += text(640, 70, "On presse", 19, "#C00000", "start");
  // jus qui coule
  g += line(570, 180, 570, 230, "#F0A31F", 4);
  g += rect(520, 230, 100, 55, "none", "#1a1a1a", 2.5);
  g += rect(524, 255, 92, 27, "#FBE29B", "none", 0);
  g += text(570, 320, "Pressage : le jus sort,", 19);
  g += text(570, 344, "la pulpe reste.", 19);
  return svgDoc(800, 380, g);
}

// ---------- S9 : transformations physiques ----------
function s09() {
  let g = "";
  g += text(400, 40, "La transformation physique : la matière reste la même", 22, "#1a1a1a", "middle", "bold");
  // glaçon → eau → vapeur
  g += rect(90, 110, 80, 80, "#D7ECF7", "#7FB3D5", 3, 8);
  g += text(130, 230, "Glace", 20);
  g += fleche(190, 150, 280, 150, "#C00000", 3.5);
  g += text(235, 130, "fusion", 17, "#C00000");
  g += `<path d="M 300 120 q -12 40 8 68 l 70 0 q 20 -28 8 -68 Z" fill="#9FC4E8" stroke="#1a1a1a" stroke-width="2.5"/>`;
  g += text(343, 230, "Eau liquide", 20);
  g += fleche(410, 150, 500, 150, "#C00000", 3.5);
  g += text(455, 130, "vaporisation", 17, "#C00000");
  for (const [x, y] of [[540, 130], [575, 115], [610, 140], [560, 165], [600, 170]])
    g += circle(x, y, 12, "#EDEDF2", "#AAB4C0", 2);
  g += text(575, 230, "Vapeur d'eau", 20);
  g += text(400, 290, "Glace, eau liquide, vapeur : toujours de l'eau !", 21, "#1E7B34", "middle", "bold");
  g += text(400, 318, "Aucune nouvelle substance n'apparaît : transformation physique.", 20);
  return svgDoc(800, 350, g);
}

// ---------- S13 : circuit mixte ----------
function s13() {
  let g = "";
  g += text(400, 36, "Le circuit mixte : série et dérivation combinées", 22, "#1a1a1a", "middle", "bold");
  // boucle principale
  g += line(120, 100, 680, 100) + line(680, 100, 680, 300) + line(120, 300, 680, 300);
  g += line(120, 100, 120, 165) + line(120, 235, 120, 300);
  g += pileH(120, 200);
  // L1 en série sur la branche haute
  g += line(120, 100, 300, 100);
  g += lampe(330, 100, 20);
  g += text(330, 62, "L1", 18);
  // nœud A et deux branches parallèles avec L2 et L3
  g += line(360, 100, 480, 100);
  g += circle(480, 100, 4, "#1a1a1a");
  g += line(480, 100, 480, 160) + line(480, 160, 430, 160) + line(480, 160, 580, 160);
  g += line(430, 160, 430, 200) + lampe(430, 220, 18) + line(430, 240, 430, 260) + line(430, 260, 480, 260);
  g += line(580, 160, 580, 200) + lampe(580, 220, 18) + line(580, 240, 580, 260) + line(580, 260, 480, 260);
  g += circle(480, 260, 4, "#1a1a1a");
  g += line(480, 260, 480, 300);
  g += text(398, 226, "L2", 18);
  g += text(612, 226, "L3", 18, "#1a1a1a", "start");
  g += text(400, 350, "L1 est en série avec l'ensemble ; L2 et L3 sont en dérivation entre elles.", 20);
  return svgDoc(800, 380, g);
}

// ---------- S14 : association de piles ----------
function s14() {
  let g = "";
  g += text(400, 38, "Des piles associées en série : les tensions s'ajoutent", 22, "#1a1a1a", "middle", "bold");
  // trois piles en série
  const y = 140;
  for (const x of [220, 400, 580]) {
    g += line(x - 26, y - 26, x - 26, y + 26, "#1a1a1a", 3);
    g += `<line x1="${x - 6}" y1="${y - 14}" x2="${x - 6}" y2="${y + 14}" stroke="#1a1a1a" stroke-width="7"/>`;
    g += text(x - 26, y - 38, "+", 20, "#C00000", "middle", "bold");
    g += text(x - 2, y - 38, "−", 20, "#1F4E79", "middle", "bold");
    g += text(x - 16, y + 62, "1,5 V", 19);
  }
  g += line(110, y, 194, y) + line(214, y, 374, y) + line(394, y, 554, y) + line(574, y, 690, y);
  g += text(400, 250, "Tension totale : 1,5 V + 1,5 V + 1,5 V = 4,5 V", 22, "#C00000", "middle", "bold");
  g += text(400, 286, "C'est ainsi qu'une pile plate (4,5 V) contient trois éléments de 1,5 V.", 20);
  return svgDoc(800, 320, g);
}

// ---------- S15 : loi des tensions (série) ----------
function s15() {
  let g = "";
  g += text(400, 36, "Additivité des tensions dans un circuit en série", 22, "#1a1a1a", "middle", "bold");
  g += line(120, 90, 680, 90) + line(680, 90, 680, 290) + line(120, 290, 680, 290);
  g += line(120, 90, 120, 155) + line(120, 225, 120, 290);
  g += pileH(120, 190);
  g += text(70, 196, "6 V", 20, "#C00000", "middle", "bold");
  g += lampe(320, 90, 20) + lampe(520, 90, 20);
  g += text(320, 52, "L1", 18) + text(520, 52, "L2", 18);
  // accolades de tension
  g += `<path d="M 260 130 q 60 36 120 0" stroke="#1E7B34" stroke-width="2.5" fill="none"/>`;
  g += text(320, 165, "U1 = 4 V", 19, "#1E7B34");
  g += `<path d="M 460 130 q 60 36 120 0" stroke="#1E7B34" stroke-width="2.5" fill="none"/>`;
  g += text(520, 165, "U2 = 2 V", 19, "#1E7B34");
  g += text(400, 340, "U = U1 + U2 : 6 V = 4 V + 2 V", 22, "#C00000", "middle", "bold");
  g += text(400, 372, "La tension de la pile se partage entre les dipôles en série.", 20);
  return svgDoc(800, 400, g);
}

// ---------- S16 : loi des intensités (dérivation) ----------
function s16() {
  let g = "";
  g += text(400, 36, "Additivité des intensités dans un circuit en dérivation", 22, "#1a1a1a", "middle", "bold");
  g += line(120, 90, 680, 90) + line(680, 90, 680, 290) + line(120, 290, 680, 290);
  g += line(120, 90, 120, 155) + line(120, 225, 120, 290);
  g += pileH(120, 190);
  // deux branches
  g += circle(400, 90, 4, "#1a1a1a") + circle(400, 290, 4, "#1a1a1a");
  g += line(400, 90, 400, 140) + lampe(400, 160, 18) + line(400, 180, 400, 290);
  g += line(560, 90, 560, 140) + lampe(560, 160, 18) + line(560, 180, 560, 290);
  g += circle(560, 90, 4, "#1a1a1a") + circle(560, 290, 4, "#1a1a1a");
  g += text(432, 166, "L1", 18, "#1a1a1a", "start") + text(592, 166, "L2", 18, "#1a1a1a", "start");
  // flèches d'intensité
  g += fleche(240, 90, 300, 90, "#C00000", 3.5);
  g += text(270, 66, "I = 0,5 A", 19, "#C00000");
  g += fleche(400, 110, 400, 132, "#1E7B34", 3);
  g += text(360, 122, "I1 = 0,3 A", 17, "#1E7B34");
  g += fleche(560, 110, 560, 132, "#1E7B34", 3);
  g += text(625, 122, "I2 = 0,2 A", 17, "#1E7B34");
  g += text(400, 340, "I = I1 + I2 : 0,5 A = 0,3 A + 0,2 A", 22, "#C00000", "middle", "bold");
  g += text(400, 372, "Le courant principal se partage entre les branches.", 20);
  return svgDoc(800, 400, g);
}

// ---------- S17 : problèmes lois (unicité) ----------
function s17() {
  let g = "";
  g += text(400, 36, "Unicité : même intensité en série, même tension en dérivation", 21, "#1a1a1a", "middle", "bold");
  // série à gauche
  g += text(210, 78, "En série", 20, "#1E7B34", "middle", "bold");
  g += line(90, 110, 330, 110) + line(330, 110, 330, 250) + line(90, 250, 330, 250);
  g += line(90, 110, 90, 155) + line(90, 205, 90, 250);
  g += line(76, 155, 104, 155) + `<line x1="82" y1="205" x2="98" y2="205" stroke="#1a1a1a" stroke-width="6"/>`;
  g += lampe(180, 110, 15) + lampe(265, 110, 15);
  g += fleche(120, 110, 148, 110, "#C00000", 3);
  g += fleche(196, 110, 235, 110, "#C00000", 3);
  g += text(210, 290, "I identique partout :", 18);
  g += text(210, 314, "I1 = I2 = I", 19, "#C00000", "middle", "bold");
  // dérivation à droite
  g += text(590, 78, "En dérivation", 20, "#1E7B34", "middle", "bold");
  g += line(470, 110, 710, 110) + line(710, 110, 710, 250) + line(470, 250, 710, 250);
  g += line(470, 110, 470, 155) + line(470, 205, 470, 250);
  g += line(456, 155, 484, 155) + `<line x1="462" y1="205" x2="478" y2="205" stroke="#1a1a1a" stroke-width="6"/>`;
  g += line(580, 110, 580, 150) + lampe(580, 165, 15) + line(580, 180, 580, 250);
  g += line(660, 110, 660, 150) + lampe(660, 165, 15) + line(660, 180, 660, 250);
  g += circle(580, 110, 4, "#1a1a1a") + circle(660, 110, 4, "#1a1a1a");
  g += circle(580, 250, 4, "#1a1a1a") + circle(660, 250, 4, "#1a1a1a");
  g += text(590, 290, "U identique sur chaque branche :", 18);
  g += text(590, 314, "U1 = U2 = U", 19, "#C00000", "middle", "bold");
  return svgDoc(800, 350, g);
}

// ---------- S18 : aimants ----------
function s18() {
  let g = "";
  g += text(400, 40, "Les aimants : deux pôles qui s'attirent ou se repoussent", 22, "#1a1a1a", "middle", "bold");
  // aimant barre 1 : N-S face à S-N → attraction
  g += rect(120, 100, 90, 44, "#C00000", "#1a1a1a", 2, 4) + rect(210, 100, 90, 44, "#1F4E79", "#1a1a1a", 2, 4);
  g += text(165, 130, "N", 24, "#FFF", "middle", "bold") + text(255, 130, "S", 24, "#FFF", "middle", "bold");
  g += rect(390, 100, 90, 44, "#C00000", "#1a1a1a", 2, 4) + rect(480, 100, 90, 44, "#1F4E79", "#1a1a1a", 2, 4);
  g += text(435, 130, "N", 24, "#FFF", "middle", "bold") + text(525, 130, "S", 24, "#FFF", "middle", "bold");
  g += fleche(315, 122, 345, 122, "#1E7B34", 4) + fleche(375, 122, 345, 122, "#1E7B34", 4);
  g += text(660, 128, "Attraction", 20, "#1E7B34", "middle", "bold");
  g += text(345, 170, "S face à N : pôles différents", 17);
  // ligne 2 : N face à N → répulsion
  g += rect(120, 230, 90, 44, "#1F4E79", "#1a1a1a", 2, 4) + rect(210, 230, 90, 44, "#C00000", "#1a1a1a", 2, 4);
  g += text(165, 260, "S", 24, "#FFF", "middle", "bold") + text(255, 260, "N", 24, "#FFF", "middle", "bold");
  g += rect(390, 230, 90, 44, "#C00000", "#1a1a1a", 2, 4) + rect(480, 230, 90, 44, "#1F4E79", "#1a1a1a", 2, 4);
  g += text(435, 260, "N", 24, "#FFF", "middle", "bold") + text(525, 260, "S", 24, "#FFF", "middle", "bold");
  g += fleche(340, 252, 310, 252, "#C00000", 4) + fleche(350, 252, 380, 252, "#C00000", 4);
  g += text(660, 258, "Répulsion", 20, "#C00000", "middle", "bold");
  g += text(345, 300, "N face à N : pôles identiques", 17);
  g += text(400, 350, "Pôles différents s'attirent ; pôles identiques se repoussent.", 21, "#1a1a1a", "middle", "bold");
  return svgDoc(800, 380, g);
}

// ---------- S19 : champ magnétique / boussole ----------
function s19() {
  let g = "";
  g += text(400, 40, "Le champ magnétique et ses lignes de champ", 22, "#1a1a1a", "middle", "bold");
  // aimant central
  g += rect(300, 170, 100, 46, "#C00000", "#1a1a1a", 2, 4) + rect(400, 170, 100, 46, "#1F4E79", "#1a1a1a", 2, 4);
  g += text(350, 201, "N", 24, "#FFF", "middle", "bold") + text(450, 201, "S", 24, "#FFF", "middle", "bold");
  // lignes de champ (ellipses)
  for (const ry of [60, 100, 140]) {
    g += `<ellipse cx="400" cy="193" rx="${ry + 130}" ry="${ry}" fill="none" stroke="#888" stroke-width="1.8"/>`;
  }
  // flèches sur les lignes
  g += `<polygon points="400,93 388,101 400,109" fill="#888"/>`;
  g += `<polygon points="400,277 412,285 400,293" fill="#888"/>`;
  // boussole à droite
  g += circle(690, 100, 38, "#FFF", "#1a1a1a", 3);
  g += `<polygon points="690,72 682,100 698,100" fill="#C00000"/>`;
  g += `<polygon points="690,128 682,100 698,100" fill="#1F4E79"/>`;
  g += text(690, 160, "Boussole", 18);
  g += text(400, 350, "La limaille de fer et la boussole révèlent les lignes du champ magnétique,", 19);
  g += text(400, 374, "qui sortent du pôle Nord et entrent au pôle Sud.", 19);
  return svgDoc(800, 400, g);
}

// ---------- S20 : bobine ----------
function s20() {
  let g = "";
  g += text(400, 38, "La bobine parcourue par un courant se comporte comme un aimant", 21, "#1a1a1a", "middle", "bold");
  // bobine : spires
  for (let i = 0; i < 7; i++) {
    const x = 280 + i * 35;
    g += `<ellipse cx="${x}" cy="170" rx="14" ry="44" fill="none" stroke="#B87333" stroke-width="4"/>`;
  }
  // fils vers pile
  g += line(266, 170, 170, 170, "#1a1a1a", 3) + line(170, 170, 170, 280, "#1a1a1a", 3);
  g += line(524, 170, 630, 170, "#1a1a1a", 3) + line(630, 170, 630, 280, "#1a1a1a", 3);
  g += line(170, 280, 380, 280, "#1a1a1a", 3) + line(420, 280, 630, 280, "#1a1a1a", 3);
  g += line(392, 258, 392, 302, "#1a1a1a", 3);
  g += `<line x1="408" y1="266" x2="408" y2="294" stroke="#1a1a1a" stroke-width="7"/>`;
  g += text(392, 246, "+", 20, "#C00000", "middle", "bold") + text(412, 246, "−", 20, "#1F4E79", "middle", "bold");
  // faces N et S
  g += text(240, 120, "Face Nord", 19, "#C00000", "middle", "bold");
  g += text(560, 120, "Face Sud", 19, "#1F4E79", "middle", "bold");
  // trombones attirés
  for (const [x, y] of [[212, 196], [224, 214]]) g += rect(x, y, 26, 8, "#A9A9B0", "#555", 1.5, 4);
  g += text(400, 350, "Quand le courant passe, la bobine attire les objets en fer :", 20);
  g += text(400, 376, "elle possède une face Nord et une face Sud, comme un aimant.", 20);
  return svgDoc(800, 404, g);
}

// ---------- S21 : électroaimant / sonnerie ----------
function s21() {
  let g = "";
  g += text(400, 38, "L'électroaimant : une bobine avec un noyau de fer", 22, "#1a1a1a", "middle", "bold");
  // noyau
  g += rect(250, 140, 300, 40, "#A9A9B0", "#555", 2.5, 4);
  g += text(400, 128, "Noyau de fer", 18);
  // spires autour
  for (let i = 0; i < 8; i++) {
    const x = 280 + i * 32;
    g += `<ellipse cx="${x}" cy="160" rx="11" ry="34" fill="none" stroke="#B87333" stroke-width="4"/>`;
  }
  // fils
  g += line(268, 160, 180, 160, "#1a1a1a", 3) + line(180, 160, 180, 260, "#1a1a1a", 3);
  g += line(532, 160, 620, 160, "#1a1a1a", 3) + line(620, 160, 620, 260, "#1a1a1a", 3);
  g += line(180, 260, 370, 260, "#1a1a1a", 3) + line(430, 260, 620, 260, "#1a1a1a", 3);
  g += line(382, 240, 382, 282, "#1a1a1a", 3);
  g += `<line x1="398" y1="248" x2="398" y2="274" stroke="#1a1a1a" stroke-width="7"/>`;
  // clous attirés
  for (const [x, y] of [[560, 196], [590, 200], [575, 214]]) {
    g += line(x, y, x + 26, y + 10, "#555", 3.5);
  }
  g += text(640, 210, "Clous attirés", 18, "#1a1a1a", "start");
  g += text(400, 330, "Avec son noyau de fer, l'électroaimant attire beaucoup plus fort", 20);
  g += text(400, 356, "que la bobine seule — et on peut l'arrêter en coupant le courant !", 20);
  return svgDoc(800, 390, g);
}

// ---------- S24 : mobile et positions ----------
function s24() {
  let g = "";
  g += text(400, 40, "Relever les positions d'un mobile à intervalles réguliers", 22, "#1a1a1a", "middle", "bold");
  // droite graduée
  g += line(80, 180, 720, 180, "#1a1a1a", 3.5);
  for (let i = 0; i <= 6; i++) {
    const x = 100 + i * 100;
    g += line(x, 170, x, 190, "#1a1a1a", 2.5);
    g += text(x, 218, `M${i}`, 18, "#1F4E79");
    g += text(x, 244, `${i} s`, 16, "#888");
  }
  // mobile (petite voiture stylisée)
  g += rect(360, 120, 60, 26, "#C00000", "#7A0000", 2, 6);
  g += circle(375, 150, 8, "#333", "#111", 2) + circle(405, 150, 8, "#333", "#111", 2);
  g += fleche(430, 133, 500, 133, "#1E7B34", 3.5);
  g += text(468, 116, "sens du mouvement", 16, "#1E7B34");
  g += text(400, 300, "Le mobile est l'objet dont on étudie le mouvement.", 20);
  g += text(400, 326, "On note sa position M0, M1, M2… toutes les secondes.", 20);
  return svgDoc(800, 360, g);
}

// ---------- S25 : types de mouvements rectilignes ----------
function s25() {
  let g = "";
  g += text(400, 36, "Uniforme, accéléré, retardé : trois mouvements rectilignes", 21, "#1a1a1a", "middle", "bold");
  const rows = [
    [100, "Uniforme", "#1E7B34", [0, 100, 200, 300, 400, 500], "distances égales"],
    [210, "Accéléré", "#C00000", [0, 40, 110, 220, 360, 530], "distances croissantes"],
    [320, "Retardé", "#1F4E79", [0, 180, 320, 420, 480, 510], "distances décroissantes"],
  ];
  for (const [y, nom, col, pos, desc] of rows) {
    g += text(80, y - 24, nom, 19, col, "start", "bold");
    g += line(80, y, 700, y, "#1a1a1a", 2.5);
    pos.forEach((p, i) => {
      const x = 90 + p;
      g += circle(x, y, 6, col, col, 1);
      g += text(x, y + 28, `M${i}`, 13, "#666");
    });
    g += text(700, y - 24, desc, 16, "#666", "end");
  }
  g += text(400, 396, "À intervalles de temps égaux : distances égales (uniforme),", 19);
  g += text(400, 420, "de plus en plus grandes (accéléré), de plus en plus petites (retardé).", 19);
  return svgDoc(800, 450, g);
}

// ---------- S27 : sources d'énergie ----------
function s27() {
  let g = "";
  g += text(400, 40, "Les principales sources d'énergie", 22, "#1a1a1a", "middle", "bold");
  // soleil
  g += circle(140, 130, 34, "#F5C518", "#D19A00", 2.5);
  for (let a = 0; a < 8; a++) {
    const r1 = 44, r2 = 60, ang = a * Math.PI / 4;
    g += line(140 + r1 * Math.cos(ang), 130 + r1 * Math.sin(ang), 140 + r2 * Math.cos(ang), 130 + r2 * Math.sin(ang), "#F0A31F", 3);
  }
  g += text(140, 225, "Solaire", 19);
  // eau (barrage)
  g += rect(300, 105, 26, 80, "#8B9198", "#555", 2);
  g += `<path d="M 326 118 q 40 12 58 66 l -58 0 Z" fill="#9FC4E8"/>`;
  g += text(345, 225, "Hydraulique", 19);
  // vent (éolienne)
  g += line(540, 100, 540, 190, "#555", 4);
  for (const a of [0, 120, 240]) {
    const ang = (a - 90) * Math.PI / 180;
    g += line(540, 100, 540 + 44 * Math.cos(ang), 100 + 44 * Math.sin(ang), "#7FB3D5", 5);
  }
  g += circle(540, 100, 6, "#555", "#333", 1.5);
  g += text(540, 225, "Éolienne", 19);
  // biomasse (bois/feu)
  g += line(660, 175, 700, 160, "#8B5A2B", 6) + line(700, 175, 660, 160, "#8B5A2B", 6);
  g += `<path d="M 680 160 q -14 -26 0 -46 q 14 20 0 46 Z" fill="#F0A31F" stroke="#E23A00" stroke-width="2"/>`;
  g += text(680, 225, "Biomasse", 19);
  g += text(400, 285, "Renouvelables : solaire, hydraulique, éolienne, biomasse.", 20, "#1E7B34");
  g += text(400, 313, "Non renouvelables : pétrole, charbon, gaz, nucléaire (uranium).", 20, "#C00000");
  return svgDoc(800, 345, g);
}

// ---------- S28 : stockage ----------
function s28() {
  let g = "";
  g += text(400, 40, "Stocker l'énergie : la pile et le barrage", 22, "#1a1a1a", "middle", "bold");
  // pile
  g += rect(150, 100, 90, 160, "#3E7C4B", "#1a1a1a", 3, 10);
  g += rect(178, 82, 34, 18, "#A9A9B0", "#555", 2);
  g += text(195, 190, "PILE", 22, "#FFF", "middle", "bold");
  g += text(195, 300, "Énergie chimique stockée :", 18);
  g += text(195, 324, "prête à donner du courant", 18);
  // barrage
  g += `<path d="M 480 120 L 480 260 L 540 260 L 520 120 Z" fill="#8B9198" stroke="#555" stroke-width="2.5"/>`;
  g += `<path d="M 400 140 L 480 140 L 480 260 L 400 260 Z" fill="#9FC4E8"/>`;
  g += line(540, 220, 640, 220, "#1F4E79", 5);
  g += fleche(560, 220, 630, 220, "#1F4E79", 5);
  g += circle(668, 220, 22, "#EEE", "#555", 3);
  g += line(668, 202, 668, 238, "#555", 3) + line(650, 220, 686, 220, "#555", 3);
  g += text(560, 300, "Eau retenue en hauteur : en tombant,", 18);
  g += text(560, 324, "elle fait tourner la turbine (électricité)", 18);
  return svgDoc(800, 360, g);
}

// ---------- S29 : formes d'énergie ----------
function s29() {
  let g = "";
  g += text(400, 40, "Les cinq formes d'énergie", 22, "#1a1a1a", "middle", "bold");
  const items = [
    [140, 130, "#F5C518", "Rayonnante", "lumière du Soleil"],
    [400, 130, "#C00000", "Thermique", "chaleur du feu"],
    [660, 130, "#1F4E79", "Électrique", "courant de la pile"],
    [270, 270, "#1E7B34", "Chimique", "aliments, piles, bois"],
    [530, 270, "#8B5A2B", "Mécanique", "mouvement, chute d'eau"],
  ];
  for (const [x, y, col, nom, ex] of items) {
    g += circle(x, y, 54, "#FFF", col, 4);
    g += text(x, y - 4, nom, 18, col, "middle", "bold");
    g += text(x, y + 20, ex, 13, "#666");
  }
  g += text(400, 390, "L'énergie se manifeste sous plusieurs formes, qui peuvent se transformer l'une en l'autre.", 19);
  return svgDoc(800, 420, g);
}

// ---------- S30 : transformation d'énergie ----------
function s30() {
  let g = "";
  g += text(400, 38, "Des appareils qui transforment l'énergie", 22, "#1a1a1a", "middle", "bold");
  // lampe : électrique → rayonnante
  g += text(120, 90, "Lampe", 19, "#1a1a1a", "start", "bold");
  g += rect(90, 110, 150, 50, "#EFEFEF", "#888", 2, 8);
  g += text(165, 141, "électrique", 17, "#1F4E79");
  g += fleche(250, 135, 320, 135, "#C00000", 3.5);
  g += rect(330, 110, 170, 50, "#FFF7DC", "#D19A00", 2, 8);
  g += text(415, 141, "lumière + chaleur", 16, "#B8860B");
  // fer à repasser : électrique → thermique
  g += text(120, 210, "Fer à repasser", 19, "#1a1a1a", "start", "bold");
  g += rect(90, 230, 150, 50, "#EFEFEF", "#888", 2, 8);
  g += text(165, 261, "électrique", 17, "#1F4E79");
  g += fleche(250, 255, 320, 255, "#C00000", 3.5);
  g += rect(330, 230, 170, 50, "#FDE5E5", "#C00000", 2, 8);
  g += text(415, 261, "thermique", 17, "#C00000");
  // moulin à eau : mécanique → mécanique/électrique
  g += text(120, 330, "Barrage + turbine", 19, "#1a1a1a", "start", "bold");
  g += rect(90, 350, 150, 50, "#E3F0FA", "#1F4E79", 2, 8);
  g += text(165, 381, "mécanique (eau)", 15, "#1F4E79");
  g += fleche(250, 375, 320, 375, "#C00000", 3.5);
  g += rect(330, 350, 170, 50, "#EFEFEF", "#888", 2, 8);
  g += text(415, 381, "électrique", 17, "#1F4E79");
  g += text(620, 141, "E. électrique →", 17, "#666", "start");
  g += text(620, 163, "rayonnante", 17, "#666", "start");
  g += text(620, 261, "E. électrique →", 17, "#666", "start");
  g += text(620, 283, "thermique", 17, "#666", "start");
  g += text(620, 381, "E. mécanique →", 17, "#666", "start");
  g += text(620, 403, "électrique", 17, "#666", "start");
  return svgDoc(800, 440, g);
}

async function main() {
  const jobs = [
    ["img_seance01.png", s01()],
    ["img_seance02.png", s02()],
    ["img_seance05.png", s05()],
    ["img_seance07.png", s07()],
    ["img_seance08.png", s08()],
    ["img_seance09.png", s09()],
    ["img_seance13.png", s13()],
    ["img_seance14.png", s14()],
    ["img_seance15.png", s15()],
    ["img_seance16.png", s16()],
    ["img_seance17.png", s17()],
    ["img_seance18.png", s18()],
    ["img_seance19.png", s19()],
    ["img_seance20.png", s20()],
    ["img_seance21.png", s21()],
    ["img_seance24.png", s24()],
    ["img_seance25.png", s25()],
    ["img_seance27.png", s27()],
    ["img_seance28.png", s28()],
    ["img_seance29.png", s29()],
    ["img_seance30.png", s30()],
  ];
  for (const [name, svg] of jobs) {
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(IMG, name));
    console.log("OK", name);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
