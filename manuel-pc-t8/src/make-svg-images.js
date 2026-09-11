// make-svg-images.js — schémas techniques SVG→PNG pour le manuel PC T8
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
function line(x1, y1, x2, y2, color = "#1a1a1a", w = 3) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${w}"/>`;
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
function sinPath(x0, y0, w, amp, periods, color = "#1F4E79", sw = 3) {
  let d = `M ${x0} ${y0}`;
  const N = 200;
  for (let i = 1; i <= N; i++) {
    const x = x0 + (w * i) / N;
    const y = y0 - amp * Math.sin((2 * Math.PI * periods * i) / N);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  return `<path d="${d}" fill="none" stroke="${color}" stroke-width="${sw}"/>`;
}

// case du tableau périodique
function caseEl(x, y, sym, z, fill, cw = 74, ch = 74) {
  let g = rect(x, y, cw - 6, ch - 6, fill, "#555", 1.8, 5);
  g += text(x + (cw - 6) / 2, y + 48, sym, 27, "#1a1a1a", "middle", "bold");
  g += text(x + 9, y + 20, String(z), 14, "#666", "start");
  return g;
}

// ---------- S2 : tableau périodique, 20 premiers éléments ----------
const ELS20 = [
  ["H", 1, 1, 1], ["He", 2, 18, 1],
  ["Li", 3, 1, 2], ["Be", 4, 2, 2], ["B", 5, 13, 2], ["C", 6, 14, 2], ["N", 7, 15, 2], ["O", 8, 16, 2], ["F", 9, 17, 2], ["Ne", 10, 18, 2],
  ["Na", 11, 1, 3], ["Mg", 12, 2, 3], ["Al", 13, 13, 3], ["Si", 14, 14, 3], ["P", 15, 15, 3], ["S", 16, 16, 3], ["Cl", 17, 17, 3], ["Ar", 18, 18, 3],
  ["K", 19, 1, 4], ["Ca", 20, 2, 4],
];
function colOf(col) { return col <= 2 ? col : col - 10; } // compresse 13-18 en 3-8
function s02() {
  const CW = 84, CH = 84, X0 = 60, Y0 = 90;
  let g = text(420, 44, "Les 20 premiers éléments du tableau périodique", 24, "#1a1a1a", "middle", "bold");
  for (const [sym, z, col, row] of ELS20) {
    const c = colOf(col);
    const x = X0 + (c - 1) * CW, y = Y0 + (row - 1) * CH;
    const fill = col === 1 && sym !== "H" ? "#FCE8D5" : col === 2 ? "#E8F1DE" : col === 17 ? "#FBE3EC" : col === 18 ? "#E4EDF7" : "#F6F3EC";
    g += caseEl(x, y, sym, z, fill, CW, CH);
  }
  g += text(60, Y0 + 4 * CH + 40, "→ une ligne = une période ;  ↓ une colonne = une famille (mêmes propriétés chimiques)", 20, "#1F4E79", "start", "bold");
  g += text(60, Y0 + 4 * CH + 72, "Le numéro de chaque case est le numéro atomique Z : le nombre d'électrons de l'atome.", 19, "#1a1a1a", "start");
  return svgDoc(840, 530, g);
}

// ---------- S3 : modèle de Lewis ----------
function lewisDots(cx, cy, sym, dots, size = 34) {
  // dots : tableau de positions "t","b","l","r" (paires = 2 points)
  let g = text(cx, cy + 12, sym, size, "#1a1a1a", "middle", "bold");
  const d = 30, s = 4.5, off = 8;
  const P = {
    t: [[cx - off, cy - d + 8], [cx + off, cy - d + 8]],
    b: [[cx - off, cy + d], [cx + off, cy + d]],
    l: [[cx - d, cy - off + 6], [cx - d, cy + off + 6]],
    r: [[cx + d, cy - off + 6], [cx + d, cy + off + 6]],
  };
  for (const spec of dots) {
    const side = spec[0], n = spec.length > 1 ? parseInt(spec[1]) : 1;
    const pts = P[side];
    if (n === 1) g += `<circle cx="${(pts[0][0] + pts[1][0]) / 2}" cy="${(pts[0][1] + pts[1][1]) / 2}" r="${s}" fill="#C00000"/>`;
    else for (const [px, py] of pts) g += `<circle cx="${px}" cy="${py}" r="${s}" fill="#C00000"/>`;
  }
  return g;
}
function s03() {
  let g = text(420, 40, "La représentation de Lewis : les électrons externes autour du symbole", 21, "#1a1a1a", "middle", "bold");
  g += lewisDots(120, 150, "H", ["r1"]);
  g += text(120, 230, "H : 1 électron", 18);
  g += text(120, 254, "valence 1", 18, "#C00000");
  g += lewisDots(300, 150, "C", ["t1", "b1", "l1", "r1"]);
  g += text(300, 230, "C : 4 électrons", 18);
  g += text(300, 254, "valence 4", 18, "#C00000");
  g += lewisDots(480, 150, "N", ["t2", "b1", "l1", "r1"]);
  g += text(480, 230, "N : 5 électrons", 18);
  g += text(480, 254, "valence 3", 18, "#C00000");
  g += lewisDots(660, 150, "O", ["t2", "b2", "l1", "r1"]);
  g += text(660, 230, "O : 6 électrons", 18);
  g += text(660, 254, "valence 2", 18, "#C00000");
  g += text(420, 310, "Un point isolé = un électron célibataire, prêt à former une liaison.", 20);
  g += text(420, 338, "Le nombre de points isolés donne la valence : le nombre de liaisons possibles.", 20, "#1F4E79", "middle", "bold");
  return svgDoc(840, 370, g);
}

// ---------- S4 : familles d'éléments ----------
function s04() {
  let g = text(420, 40, "Quatre familles d'éléments et leurs propriétés", 23, "#1a1a1a", "middle", "bold");
  const fams = [
    [110, "#FCE8D5", "Alcalins", ["Li", "Na", "K"], "métaux très réactifs"],
    [310, "#E8F1DE", "Alcalino-terreux", ["Be", "Mg", "Ca"], "métaux réactifs"],
    [510, "#FBE3EC", "Halogènes", ["F", "Cl"], "non-métaux très réactifs"],
    [710, "#E4EDF7", "Gaz inertes", ["He", "Ne", "Ar"], "gaz qui ne réagissent pas"],
  ];
  for (const [cx, fill, nom, els, prop] of fams) {
    g += text(cx, 85, nom, 20, "#1F4E79", "middle", "bold");
    els.forEach((e, i) => {
      g += rect(cx - 32, 100 + i * 62, 64, 54, fill, "#555", 1.8, 5);
      g += text(cx, 136 + i * 62, e, 24, "#1a1a1a", "middle", "bold");
    });
    const yLast = 100 + els.length * 62 + 24;
    g += text(cx, 306, prop, 16.5, "#444");
  }
  g += text(420, 350, "Les éléments d'une même colonne du tableau forment une famille aux propriétés voisines.", 19.5, "#1a1a1a");
  return svgDoc(840, 380, g);
}

// ---------- S5 : molécules et formules brutes ----------
function atome(cx, cy, r, fill, sym) {
  return circle(cx, cy, r, fill, "#555", 2) + text(cx, cy + 7, sym, 20, "#1a1a1a", "middle", "bold");
}
function s05() {
  let g = text(420, 40, "Des molécules : des atomes liés en nombre précis", 23, "#1a1a1a", "middle", "bold");
  // H2O
  g += line(150, 150, 210, 120, "#555", 4) + line(210, 120, 270, 150, "#555", 4);
  g += atome(150, 150, 24, "#DCE9F7", "H") + atome(210, 120, 30, "#F7C8C8", "O") + atome(270, 150, 24, "#DCE9F7", "H");
  g += text(210, 210, "Eau : H2O", 21, "#C00000", "middle", "bold");
  // CO2
  g += line(430, 135, 520, 135, "#555", 4) + line(520, 135, 610, 135, "#555", 4);
  g += line(430, 143, 520, 143, "#555", 4) + line(520, 143, 610, 143, "#555", 4);
  g += atome(430, 139, 30, "#F7C8C8", "O") + atome(520, 139, 30, "#D9D9DE", "C") + atome(610, 139, 30, "#F7C8C8", "O");
  g += text(520, 210, "Dioxyde de carbone : CO2", 21, "#C00000", "middle", "bold");
  // H2 et O2
  g += line(150, 300, 220, 300, "#555", 4);
  g += atome(150, 300, 24, "#DCE9F7", "H") + atome(220, 300, 24, "#DCE9F7", "H");
  g += text(185, 355, "H2", 20, "#C00000", "middle", "bold");
  g += line(380, 296, 470, 296, "#555", 4) + line(380, 304, 470, 304, "#555", 4);
  g += atome(380, 300, 28, "#F7C8C8", "O") + atome(470, 300, 28, "#F7C8C8", "O");
  g += text(425, 355, "O2", 20, "#C00000", "middle", "bold");
  // NH3
  g += line(620, 300, 680, 270, "#555", 4) + line(680, 270, 740, 300, "#555", 4) + line(680, 270, 680, 330, "#555", 4);
  g += atome(620, 300, 22, "#DCE9F7", "H") + atome(740, 300, 22, "#DCE9F7", "H") + atome(680, 330, 22, "#DCE9F7", "H") + atome(680, 270, 28, "#D9EBD9", "N");
  g += text(680, 385, "Ammoniac : NH3", 20, "#C00000", "middle", "bold");
  g += text(420, 430, "Chaque trait est une liaison covalente : deux atomes partagent une paire d'électrons.", 20, "#1F4E79", "middle", "bold");
  return svgDoc(840, 460, g);
}

// ---------- S6 : la mole ----------
function s06() {
  let g = text(420, 40, "La mole : le « paquet » du chimiste", 23, "#1a1a1a", "middle", "bold");
  // douzaine d'oeufs vs mole d'atomes
  g += rect(80, 90, 260, 150, "#F6EFDD", "#8a7", 2.5, 8);
  for (let i = 0; i < 6; i++) {
    g += `<ellipse cx="${125 + (i % 3) * 85}" cy="${135 + Math.floor(i / 3) * 60}" rx="26" ry="32" fill="#FBF3DF" stroke="#B8A369" stroke-width="2"/>`;
  }
  g += text(210, 275, "1 douzaine = 12 œufs", 20);
  g += fleche(370, 165, 450, 165, "#C00000", 3.5);
  g += rect(480, 90, 280, 150, "#EAF0F8", "#69c", 2.5, 8);
  for (let i = 0; i < 60; i++) {
    const x = 500 + (i % 12) * 20, y = 110 + Math.floor(i / 12) * 24;
    g += `<circle cx="${x}" cy="${y}" r="6" fill="#7FA8D9"/>`;
  }
  g += text(620, 275, "1 mole = 602 000 milliards de milliards d'entités", 18.5);
  g += text(420, 330, "N = 6,02 × 10²³ par mole : c'est le nombre d'Avogadro.", 22, "#C00000", "middle", "bold");
  g += text(420, 360, "Les atomes sont si petits qu'on les compte par paquets énormes, comme les œufs par douzaines.", 19);
  return svgDoc(840, 390, g);
}

// ---------- S7 : masse molaire ----------
function s07() {
  let g = text(420, 40, "La masse molaire : la masse d'une mole", 23, "#1a1a1a", "middle", "bold");
  // balance
  g += line(420, 90, 420, 150, "#555", 5);
  g += line(240, 150, 600, 150, "#555", 5);
  g += line(240, 150, 240, 175, "#555", 3) + line(600, 150, 600, 175, "#555", 3);
  g += rect(180, 175, 120, 55, "#EAF0F8", "#555", 2.5, 6) + text(240, 208, "1 mole H2O", 18, "#1a1a1a", "middle", "bold");
  g += rect(540, 175, 120, 55, "#F6EFDD", "#555", 2.5, 6) + text(600, 208, "18 g", 22, "#C00000", "middle", "bold");
  g += `<polygon points="400,90 440,90 420,70" fill="#555"/>`;
  g += text(420, 285, "M(H2O) = 2 × M(H) + M(O) = 2 × 1 + 16 = 18 g/mol", 22, "#1F4E79", "middle", "bold");
  g += text(420, 320, "M(CO2) = 12 + 2 × 16 = 44 g/mol", 21, "#1a1a1a");
  g += text(420, 358, "Une mole de gaz occupe 22,4 L dans les conditions normales (0 °C et 1013 hPa).", 19.5, "#444");
  return svgDoc(840, 390, g);
}

// ---------- S8 : ions et conductivité ----------
function s08() {
  let g = text(420, 40, "Une solution ionique conduit le courant électrique", 23, "#1a1a1a", "middle", "bold");
  // bécher avec ions
  g += `<path d="M 120 110 L 120 300 L 330 300 L 330 110" fill="none" stroke="#555" stroke-width="3"/>`;
  g += rect(122, 180, 206, 118, "#DCE9F7", "none", 0);
  const ions = [[160, 220, "Na+", "#C00000"], [230, 250, "Cl−", "#1F4E79"], [290, 210, "Na+", "#C00000"], [190, 275, "Cl−", "#1F4E79"], [270, 275, "Na+", "#C00000"], [150, 255, "Cl−", "#1F4E79"]];
  for (const [x, y, s, c] of ions) {
    g += circle(x, y, 18, "#fff", c, 2) + text(x, y + 6, s, 15, c, "middle", "bold");
  }
  // électrodes + lampe
  g += line(160, 110, 160, 190, "#333", 6) + line(290, 110, 290, 190, "#333", 6);
  g += line(160, 110, 160, 80, "#333", 3) + line(290, 110, 290, 80, "#333", 3);
  g += line(160, 80, 380, 80, "#333", 3);
  g += line(290, 80, 290, 80, "#333", 3);
  // circuit vers lampe et pile
  g += line(380, 80, 520, 80, "#333", 3);
  g += circle(560, 80, 26) + line(542, 62, 578, 98, "#333", 2.5) + line(542, 98, 578, 62, "#333", 2.5);
  g += line(586, 80, 700, 80, "#333", 3) + line(700, 80, 700, 190, "#333", 3);
  g += line(700, 190, 700, 250, "#333", 3);
  g += line(692, 210, 708, 210, "#333", 8);
  g += line(684, 190, 716, 190, "#333", 3);
  g += text(745, 205, "pile", 18, "#444", "start");
  g += line(700, 250, 290, 250, "#333", 0); // invisible
  g += text(560, 135, "la lampe brille !", 19, "#C00000", "middle", "bold");
  g += text(225, 340, "Solution d'eau salée : Na+ et Cl−", 19);
  g += text(420, 390, "Les ions (cations + et anions −) transportent le courant dans la solution.", 21, "#1F4E79", "middle", "bold");
  return svgDoc(840, 420, g);
}

// ---------- S9 : réaction chimique fer + soufre ----------
function s09() {
  let g = text(420, 40, "Une réaction chimique : réactifs → produit", 23, "#1a1a1a", "middle", "bold");
  g += rect(90, 100, 170, 130, "#E4E4EA", "#555", 2.5, 8);
  g += text(175, 150, "fer", 21, "#1a1a1a", "middle", "bold");
  g += text(175, 180, "(poudre grise)", 16, "#666");
  g += text(290, 175, "+", 34, "#1a1a1a", "middle", "bold");
  g += rect(320, 100, 170, 130, "#FBF3C8", "#555", 2.5, 8);
  g += text(405, 150, "soufre", 21, "#1a1a1a", "middle", "bold");
  g += text(405, 180, "(poudre jaune)", 16, "#666");
  g += fleche(510, 165, 590, 165, "#C00000", 4);
  g += text(550, 145, "chauffage", 16, "#C00000");
  g += rect(610, 100, 170, 130, "#D9D2CA", "#555", 2.5, 8);
  g += text(695, 150, "sulfure de fer", 19, "#1a1a1a", "middle", "bold");
  g += text(695, 180, "(solide gris, nouveau !)", 15, "#666");
  g += text(200, 280, "RÉACTIFS", 20, "#1F4E79", "middle", "bold");
  g += text(695, 280, "PRODUIT", 20, "#C00000", "middle", "bold");
  g += text(420, 330, "fer + soufre → sulfure de fer", 23, "#1a1a1a", "middle", "bold");
  g += text(420, 365, "Les réactifs disparaissent, un produit nouveau apparaît : c'est une réaction chimique.", 19.5, "#444");
  return svgDoc(840, 395, g);
}

// ---------- S13 : tension alternative sinusoïdale ----------
function s13() {
  let g = text(420, 40, "La tension alternative : une courbe qui oscille", 23, "#1a1a1a", "middle", "bold");
  const X0 = 90, Y0 = 210, W = 620, A = 110;
  g += fleche(X0 - 20, Y0, X0 + W + 40, Y0, "#555", 2.5);
  g += fleche(X0, Y0 + A + 30, X0, Y0 - A - 30, "#555", 2.5);
  g += text(X0 + W + 50, Y0 + 6, "t", 20, "#555", "start");
  g += text(X0 - 14, Y0 - A - 36, "u", 20, "#555");
  g += sinPath(X0, Y0, W, A, 2, "#C00000", 3.5);
  // Umax
  g += line(X0, Y0 - A, X0 + W, Y0 - A, "#1F4E79", 1.5);
  g += text(X0 - 16, Y0 - A + 6, "Umax", 17, "#1F4E79", "end", "bold");
  // période T entre deux maxima
  const xM1 = X0 + W / 8, xM2 = X0 + W / 8 + W / 2;
  g += line(xM1, Y0 - A, xM1, Y0 + A + 16, "#2E7D32", 1.5);
  g += line(xM2, Y0 - A, xM2, Y0 + A + 16, "#2E7D32", 1.5);
  g += fleche(xM1, Y0 + A + 8, xM2, Y0 + A + 8, "#2E7D32", 2.5);
  g += fleche(xM2, Y0 + A + 8, xM1, Y0 + A + 8, "#2E7D32", 2.5);
  g += text((xM1 + xM2) / 2, Y0 + A + 40, "période T (en s)", 18, "#2E7D32", "middle", "bold");
  g += text(420, Y0 + A + 80, "f = 1 ÷ T (en hertz) ;  Ueff ≈ Umax ÷ 1,41  —  secteur : 220 V, 50 Hz", 20, "#1a1a1a", "middle", "bold");
  return svgDoc(840, 420, g);
}

// ---------- S14 : transformateur ----------
function s14() {
  let g = text(420, 40, "Le transformateur : élever ou abaisser une tension alternative", 22, "#1a1a1a", "middle", "bold");
  // noyau
  g += rect(330, 90, 180, 220, "none", "#777", 14);
  // bobine primaire (gauche)
  for (let i = 0; i < 5; i++) g += `<ellipse cx="330" cy="${125 + i * 38}" rx="26" ry="15" fill="none" stroke="#B87333" stroke-width="5"/>`;
  // bobine secondaire (droite)
  for (let i = 0; i < 3; i++) g += `<ellipse cx="510" cy="${145 + i * 55}" rx="26" ry="15" fill="none" stroke="#B87333" stroke-width="5"/>`;
  g += line(200, 125, 304, 125, "#333", 3) + line(200, 277, 304, 277, "#333", 3);
  g += line(536, 145, 660, 145, "#333", 3) + line(536, 255, 660, 255, "#333", 3);
  g += text(180, 190, "entrée :", 19, "#1F4E79", "end", "bold");
  g += text(180, 215, "primaire", 19, "#1F4E79", "end");
  g += text(680, 190, "sortie :", 19, "#C00000", "start", "bold");
  g += text(680, 215, "secondaire", 19, "#C00000", "start");
  g += text(420, 345, "noyau de fer", 18, "#777");
  g += text(420, 390, "Moins de spires au secondaire → tension abaissée ; plus de spires → tension élevée.", 20, "#1a1a1a", "middle", "bold");
  g += text(420, 420, "Il ne fonctionne qu'avec du courant alternatif !", 19, "#C00000", "middle", "bold");
  return svgDoc(840, 450, g);
}

// ---------- S16 : diode et redressement ----------
function s16() {
  let g = text(420, 40, "La diode laisse passer le courant dans un seul sens", 23, "#1a1a1a", "middle", "bold");
  // symbole diode
  g += line(120, 110, 240, 110, "#333", 3);
  g += `<polygon points="240,90 240,130 280,110" fill="#333"/>`;
  g += line(280, 90, 280, 130, "#333", 4);
  g += line(280, 110, 400, 110, "#333", 3);
  g += fleche(150, 80, 220, 80, "#2E7D32", 3);
  g += text(185, 65, "sens passant", 16, "#2E7D32");
  // avant / après
  const Y1 = 250, A = 55;
  g += text(230, 190, "Avant la diode : tension alternative", 18, "#1F4E79", "middle", "bold");
  g += line(90, Y1, 390, Y1, "#555", 2);
  g += sinPath(90, Y1, 300, A, 2, "#1F4E79", 3);
  g += text(620, 190, "Après la diode : alternances positives seules", 18, "#C00000", "middle", "bold");
  g += line(480, Y1, 780, Y1, "#555", 2);
  // demi-sinusoïdes positives
  let d = `M 480 ${Y1}`;
  for (let i = 0; i <= 200; i++) {
    const x = 480 + (300 * i) / 200;
    const s = Math.sin((2 * Math.PI * 2 * i) / 200);
    const y = Y1 - (s > 0 ? A * s : 0);
    d += ` L ${x.toFixed(1)} ${y.toFixed(1)}`;
  }
  g += `<path d="${d}" fill="none" stroke="#C00000" stroke-width="3"/>`;
  g += text(420, 370, "C'est le redressement : avec un pont de 4 diodes, on transforme l'alternatif en continu.", 19.5, "#1a1a1a", "middle", "bold");
  return svgDoc(840, 400, g);
}

// ---------- S17 : continu vs alternatif ----------
function s17() {
  let g = text(420, 40, "Courant continu et courant alternatif", 23, "#1a1a1a", "middle", "bold");
  const Y = 220, A = 80;
  // continu
  g += text(230, 90, "CONTINU (pile, batterie)", 19, "#2E7D32", "middle", "bold");
  g += fleche(80, Y, 390, Y, "#555", 2.5);
  g += fleche(90, Y + A + 20, 90, Y - A - 20, "#555", 2.5);
  g += line(90, Y - 60, 380, Y - 60, "#2E7D32", 3.5);
  g += text(235, Y + 50, "la tension garde la même valeur,", 16.5, "#444");
  g += text(235, Y + 72, "le courant circule dans un seul sens", 16.5, "#444");
  // alternatif
  g += text(610, 90, "ALTERNATIF (secteur, alternateur)", 19, "#C00000", "middle", "bold");
  g += fleche(460, Y, 780, Y, "#555", 2.5);
  g += fleche(470, Y + A + 20, 470, Y - A - 20, "#555", 2.5);
  g += sinPath(470, Y, 300, 60, 2, "#C00000", 3.5);
  g += text(620, Y + 50, "la tension change de valeur et de signe,", 16.5, "#444");
  g += text(620, Y + 72, "le courant change de sens régulièrement", 16.5, "#444");
  g += text(420, 360, "Piles et batteries → continu ;  prises domestiques → alternatif (220 V, 50 Hz).", 20, "#1F4E79", "middle", "bold");
  return svgDoc(840, 390, g);
}

// ---------- S20 : vitesse et MRU ----------
function s20() {
  let g = text(420, 40, "Le mouvement rectiligne uniforme : des distances égales à chaque seconde", 20.5, "#1a1a1a", "middle", "bold");
  const Y = 150;
  g += line(70, Y, 780, Y, "#555", 3);
  for (let i = 0; i <= 5; i++) {
    const x = 100 + i * 130;
    g += line(x, Y - 10, x, Y + 10, "#555", 2.5);
    g += `<circle cx="${x}" cy="${Y}" r="7" fill="#1F4E79"/>`;
    g += text(x, Y + 42, "M" + i, 18, "#1F4E79", "middle", "bold");
    g += text(x, Y + 66, i + " s", 15, "#666");
  }
  for (let i = 0; i < 5; i++) {
    const x1 = 100 + i * 130, x2 = 100 + (i + 1) * 130;
    g += fleche(x1 + 12, Y - 34, x2 - 12, Y - 34, "#2E7D32", 2);
    g += text((x1 + x2) / 2, Y - 44, "2 m", 15, "#2E7D32");
  }
  g += text(420, 270, "d = 2 m chaque seconde  →  v = d ÷ t = 2 m/s : la vitesse est constante.", 21, "#C00000", "middle", "bold");
  g += text(420, 305, "v (m/s) = d (m) ÷ t (s)   —   1 m/s = 3,6 km/h", 21, "#1F4E79", "middle", "bold");
  return svgDoc(840, 340, g);
}

// ---------- S21 : graphique distance-temps ----------
function s21() {
  let g = text(420, 40, "La distance parcourue en fonction du temps (MRU)", 22, "#1a1a1a", "middle", "bold");
  const X0 = 130, Y0 = 330, W = 560, H = 240;
  g += fleche(X0 - 10, Y0, X0 + W + 30, Y0, "#555", 2.5);
  g += fleche(X0, Y0 + 10, X0, Y0 - H - 30, "#555", 2.5);
  g += text(X0 + W + 40, Y0 + 6, "t (s)", 18, "#555", "start");
  g += text(X0 - 16, Y0 - H - 36, "d (m)", 18, "#555");
  // grille + points
  for (let i = 0; i <= 5; i++) {
    const x = X0 + i * (W / 5);
    g += line(x, Y0, x, Y0 - H, "#DDD", 1);
    g += text(x, Y0 + 26, i, 16, "#666");
  }
  for (let j = 0; j <= 4; j++) {
    const y = Y0 - j * (H / 4);
    g += line(X0, y, X0 + W, y, "#DDD", 1);
    g += text(X0 - 12, y + 5, j * 10, 15, "#666", "end");
  }
  g += line(X0, Y0, X0 + W, Y0 - H, "#C00000", 3.5);
  for (let i = 0; i <= 5; i++) {
    g += `<circle cx="${X0 + i * (W / 5)}" cy="${Y0 - i * (H / 5)}" r="7" fill="#1F4E79"/>`;
  }
  g += text(420, 400, "Une droite qui passe par l'origine : d est proportionnelle à t. Ici v = 10 m/s.", 20, "#1F4E79", "middle", "bold");
  return svgDoc(840, 430, g);
}

// ---------- S23 : P = m x g ----------
function s23() {
  let g = text(420, 40, "Le poids est proportionnel à la masse : P = m × g", 22, "#1a1a1a", "middle", "bold");
  const X0 = 130, Y0 = 330, W = 520, H = 230;
  g += fleche(X0 - 10, Y0, X0 + W + 30, Y0, "#555", 2.5);
  g += fleche(X0, Y0 + 10, X0, Y0 - H - 30, "#555", 2.5);
  g += text(X0 + W + 40, Y0 + 6, "m (kg)", 18, "#555", "start");
  g += text(X0 - 10, Y0 - H - 36, "P (N)", 18, "#555");
  for (let i = 0; i <= 4; i++) {
    const x = X0 + i * (W / 4);
    g += line(x, Y0, x, Y0 - H, "#DDD", 1);
    g += text(x, Y0 + 26, i, 16, "#666");
  }
  for (let j = 0; j <= 4; j++) {
    const y = Y0 - j * (H / 4);
    g += line(X0, y, X0 + W, y, "#DDD", 1);
    g += text(X0 - 12, y + 5, j * 10, 15, "#666", "end");
  }
  g += line(X0, Y0, X0 + W, Y0 - H, "#C00000", 3.5);
  for (let i = 0; i <= 4; i++) g += `<circle cx="${X0 + i * (W / 4)}" cy="${Y0 - i * (H / 4)}" r="7" fill="#1F4E79"/>`;
  g += text(690, 150, "pente = g ≈ 10 N/kg", 19, "#C00000", "middle", "bold");
  g += text(690, 178, "(sur Terre)", 16, "#666");
  g += text(420, 400, "P en newtons (N), m en kilogrammes (kg) : P = m × g, avec g ≈ 10 N/kg.", 20.5, "#1F4E79", "middle", "bold");
  return svgDoc(840, 430, g);
}

// ---------- S24 : poussée d'Archimède ----------
function s24() {
  let g = text(420, 40, "La poussée d'Archimède : le liquide pousse vers le haut", 22, "#1a1a1a", "middle", "bold");
  // dans l'air
  g += text(220, 85, "Dans l'air", 19, "#1F4E79", "middle", "bold");
  g += line(220, 100, 220, 150, "#555", 3);
  g += rect(190, 100, 60, 26, "#EAF0F8", "#555", 2, 4);
  g += text(220, 118, "3 N", 17, "#1F4E79", "middle", "bold");
  g += rect(190, 150, 60, 60, "#C9A36B", "#555", 2.5, 4);
  // dans l'eau
  g += text(600, 85, "Dans l'eau", 19, "#C00000", "middle", "bold");
  g += line(600, 100, 600, 175, "#555", 3);
  g += rect(570, 100, 60, 26, "#EAF0F8", "#555", 2, 4);
  g += text(600, 118, "2 N", 17, "#C00000", "middle", "bold");
  g += `<path d="M 480 160 L 480 320 L 720 320 L 720 160" fill="none" stroke="#555" stroke-width="3"/>`;
  g += rect(482, 175, 236, 143, "#DCE9F7", "none", 0);
  g += rect(570, 200, 60, 60, "#C9A36B", "#555", 2.5, 4);
  g += fleche(600, 300, 600, 268, "#C00000", 4);
  g += text(650, 295, "poussée", 16, "#C00000", "start", "bold");
  g += text(420, 370, "Le dynamomètre indique moins dans l'eau : PA = 3 N − 2 N = 1 N", 21, "#1a1a1a", "middle", "bold");
  g += text(420, 402, "PA = poids du liquide déplacé = ρ liquide × V immergé × g", 20, "#1F4E79", "middle", "bold");
  return svgDoc(840, 430, g);
}

// ---------- S28 : pertes et conservation d'énergie ----------
function s28() {
  let g = text(420, 40, "Toute machine perd de l'énergie… qu'on peut réduire !", 22, "#1a1a1a", "middle", "bold");
  g += rect(310, 100, 220, 110, "#EAF0F8", "#1F4E79", 3, 10);
  g += text(420, 148, "MACHINE", 22, "#1F4E79", "middle", "bold");
  g += text(420, 178, "(moteur, lampe…)", 16, "#666");
  g += fleche(140, 155, 300, 155, "#2E7D32", 5);
  g += text(210, 130, "énergie reçue", 18, "#2E7D32", "middle", "bold");
  g += fleche(540, 155, 700, 155, "#1F4E79", 5);
  g += text(630, 130, "énergie utile", 18, "#1F4E79", "middle", "bold");
  g += fleche(420, 215, 420, 300, "#C00000", 4);
  g += text(420, 330, "pertes : chaleur (effet Joule), frottements, rayonnement", 19, "#C00000", "middle", "bold");
  g += text(420, 385, "Pour réduire les pertes : isolation thermique, lubrification, roulements, surfaces polies…", 19, "#444");
  return svgDoc(840, 415, g);
}

// ---------- S30 : propagation rectiligne ----------
function s30() {
  let g = text(420, 40, "La lumière se propage en ligne droite", 23, "#1a1a1a", "middle", "bold");
  // bougie
  g += rect(100, 190, 26, 90, "#F6EFDD", "#B8A369", 2, 3);
  g += `<ellipse cx="113" cy="175" rx="10" ry="18" fill="#F5A623" stroke="#C00000" stroke-width="1.5"/>`;
  g += text(113, 310, "source", 17, "#666");
  // cartons perforés
  for (const x of [300, 480]) {
    g += line(x, 110, x, 190, "#555", 6);
    g += line(x, 210, x, 290, "#555", 6);
    g += text(x, 320, "carton percé", 15, "#666");
  }
  // oeil
  g += `<ellipse cx="700" cy="200" rx="34" ry="20" fill="#fff" stroke="#555" stroke-width="2.5"/>`;
  g += circle(710, 200, 8, "#1F4E79", "#1F4E79");
  g += text(700, 250, "œil", 17, "#666");
  // rayon
  g += fleche(128, 200, 660, 200, "#F5A623", 3.5);
  g += text(420, 380, "L'œil ne voit la flamme que si les trous sont alignés : la lumière va tout droit.", 20, "#1F4E79", "middle", "bold");
  g += text(420, 412, "On modélise son trajet par un rayon lumineux (droite fléchée).", 19, "#444");
  return svgDoc(840, 440, g);
}

// ---------- S31 : ombres et éclipse ----------
function s31() {
  let g = text(420, 40, "Ombre propre, ombre portée… et éclipses", 23, "#1a1a1a", "middle", "bold");
  // source
  g += circle(110, 170, 26, "#FBE9A9", "#F5A623", 3);
  g += text(110, 230, "source", 16, "#666");
  // balle
  g += circle(400, 170, 44, "#9FC4E8", "#555", 2.5);
  g += `<path d="M 400 126 A 44 44 0 0 1 400 214 Z" fill="#4A6A8A"/>`;
  g += text(400, 250, "ombre propre (face non éclairée)", 15.5, "#4A6A8A");
  // rayons tangents
  g += line(132, 155, 720, 60, "#F5A623", 2);
  g += line(132, 185, 720, 285, "#F5A623", 2);
  // écran + ombre portée
  g += line(720, 45, 720, 300, "#555", 6);
  g += line(720, 62, 720, 283, "#333", 14);
  g += text(720, 330, "écran : ombre portée", 16, "#333");
  g += text(420, 385, "Phases de la Lune et éclipses s'expliquent par la propagation rectiligne de la lumière", 19.5, "#1F4E79", "middle", "bold");
  g += text(420, 414, "selon les positions du Soleil, de la Terre et de la Lune.", 19.5, "#1F4E79", "middle", "bold");
  return svgDoc(840, 440, g);
}

// ---------- S32 : caractéristiques d'une onde ----------
function s32() {
  let g = text(420, 40, "Une onde : amplitude et longueur d'onde", 23, "#1a1a1a", "middle", "bold");
  const X0 = 90, Y0 = 200, W = 640, A = 90;
  g += line(X0 - 20, Y0, X0 + W + 30, Y0, "#555", 2);
  g += sinPath(X0, Y0, W, A, 3, "#1F4E79", 3.5);
  // amplitude
  const xC = X0 + W / 12;
  g += fleche(xC + 40, Y0, xC + 40, Y0 - A, "#C00000", 2.5);
  g += fleche(xC + 40, Y0 - A, xC + 40, Y0, "#C00000", 2.5);
  g += text(xC + 55, Y0 - A / 2, "amplitude", 18, "#C00000", "start", "bold");
  // longueur d'onde entre deux crêtes
  const x1 = X0 + W / 12, x2 = X0 + W / 12 + W / 3;
  g += line(x1, Y0 - A, x1, Y0 - A - 30, "#2E7D32", 1.5);
  g += line(x2, Y0 - A, x2, Y0 - A - 30, "#2E7D32", 1.5);
  g += fleche(x1, Y0 - A - 22, x2, Y0 - A - 22, "#2E7D32", 2.5);
  g += fleche(x2, Y0 - A - 22, x1, Y0 - A - 22, "#2E7D32", 2.5);
  g += text((x1 + x2) / 2, Y0 - A - 38, "longueur d'onde", 18, "#2E7D32", "middle", "bold");
  g += text(420, 340, "Son : amplitude → volume sonore ; fréquence → grave ou aigu.", 20, "#1a1a1a", "middle", "bold");
  g += text(420, 372, "Lumière : amplitude → luminosité ; fréquence → couleur.", 20, "#1a1a1a", "middle", "bold");
  return svgDoc(840, 400, g);
}

// ---------- Tableau périodique annexe (20 éléments, style annexe) ----------
function periodique() {
  const W = 1180, H = 660;
  let g = "";
  g += text(W / 2, 44, "Tableau périodique simplifié : les 20 premiers éléments", 30, "#1a1a1a", "middle", "bold");
  const CW = 60, CH = 60, X0 = 40, Y0 = 80;
  const els = [
    ["H", 1, 1, 1, 1], ["He", 2, 18, 1, 4],
    ["Li", 3, 1, 2, 2], ["Be", 4, 2, 2, 3], ["B", 5, 13, 2, 0], ["C", 6, 14, 2, 0], ["N", 7, 15, 2, 0], ["O", 8, 16, 2, 0], ["F", 9, 17, 2, 5], ["Ne", 10, 18, 2, 4],
    ["Na", 11, 1, 3, 2], ["Mg", 12, 2, 3, 3], ["Al", 13, 13, 3, 0], ["Si", 14, 14, 3, 0], ["P", 15, 15, 3, 0], ["S", 16, 16, 3, 0], ["Cl", 17, 17, 3, 5], ["Ar", 18, 18, 3, 4],
    ["K", 19, 1, 4, 2], ["Ca", 20, 2, 4, 3],
  ];
  const FILL = { 0: "#F6F3EC", 1: "#FDF3DC", 2: "#FCE8D5", 3: "#E8F1DE", 4: "#E4EDF7", 5: "#FBE3EC" };
  for (const [sym, z, col, row, fam] of els) {
    const x = X0 + (col - 1) * CW, y = Y0 + (row - 1) * CH;
    g += rect(x, y, CW - 4, CH - 4, FILL[fam], "#555", 1.5, 4);
    g += text(x + (CW - 4) / 2, y + 38, sym, 24, "#1a1a1a", "middle", "bold");
    g += text(x + 8, y + 16, String(z), 12, "#666", "start");
  }
  const LY = Y0 + 4 * CH + 40;
  g += rect(X0, LY, 24, 24, "#FCE8D5", "#555", 1.5, 3) + text(X0 + 34, LY + 18, "Alcalins (Li, Na, K) : métaux très réactifs", 19, "#1a1a1a", "start");
  g += rect(X0, LY + 36, 24, 24, "#E8F1DE", "#555", 1.5, 3) + text(X0 + 34, LY + 54, "Alcalino-terreux (Be, Mg, Ca) : métaux réactifs", 19, "#1a1a1a", "start");
  g += rect(X0 + 560, LY, 24, 24, "#FBE3EC", "#555", 1.5, 3) + text(X0 + 594, LY + 18, "Halogènes (F, Cl) : non-métaux très réactifs", 19, "#1a1a1a", "start");
  g += rect(X0 + 560, LY + 36, 24, 24, "#E4EDF7", "#555", 1.5, 3) + text(X0 + 594, LY + 54, "Gaz inertes (He, Ne, Ar) : ne réagissent presque jamais", 19, "#1a1a1a", "start");
  g += text(X0, LY + 100, "Numéro atomique Z en haut de chaque case = nombre d'électrons. Une ligne = une période ; une colonne = une famille.", 18.5, "#666", "start");
  g += text(X0, LY + 130, "Formule électronique : les électrons se répartissent en couches (K : 2 max, L : 8 max, M : 8 max). Exemple : Na (Z = 11) → K2 L8 M1.", 18.5, "#666", "start");
  return svgDoc(W, H, g);
}

// ---------- conversion ----------
async function main() {
  const jobs = [
    ["img_seance02.png", s02()],
    ["img_seance03.png", s03()],
    ["img_seance04.png", s04()],
    ["img_seance05.png", s05()],
    ["img_seance06.png", s06()],
    ["img_seance07.png", s07()],
    ["img_seance08.png", s08()],
    ["img_seance09.png", s09()],
    ["img_seance13.png", s13()],
    ["img_seance14.png", s14()],
    ["img_seance16.png", s16()],
    ["img_seance17.png", s17()],
    ["img_seance20.png", s20()],
    ["img_seance21.png", s21()],
    ["img_seance23.png", s23()],
    ["img_seance24.png", s24()],
    ["img_seance28.png", s28()],
    ["img_seance30.png", s30()],
    ["img_seance31.png", s31()],
    ["img_seance32.png", s32()],
    ["img_annexe_periodique.png", periodique()],
  ];
  for (const [name, svg] of jobs) {
    await sharp(Buffer.from(svg)).resize({ width: 1100 }).png().toFile(path.join(IMG, name));
    console.log("OK", name);
  }
}
main().catch(e => { console.error(e); process.exit(1); });
