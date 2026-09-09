// ============================================================
// schemas-new.js — nouveaux schémas scolaires SVT (SVG -> PNG)
// Ajoutés pour enrichir les leçons, révisions et examens.
// ============================================================
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
  return line(x1, y1, x2, y2, c, w) + `<polyline points="${p1[0]},${p1[1]} ${x2},${y2} ${p2[0]},${p2[1]}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
}
function rrect(x, y, w, h, fill, r = 12) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="#000" stroke-width="3"/>`;
}
function legend(items, opts = {}) {
  const { y0 = 510, cols = 2, size = 15, x0 = 70, x1 = 830 } = opts;
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
function num(x, y, n, fill = "#1F4E79") {
  return `<circle cx="${x}" cy="${y}" r="15" fill="${fill}" stroke="#ffffff" stroke-width="2.5"/>` + txt(x, y + 6, "" + n, { size: 19, fill: "#ffffff", bold: true });
}

// ---------- Transformation des aliments ----------
const TRANSFO = wrap(title("La transformation des aliments") +
  rrect(80, 130, 260, 90, "#fde9c8") + txt(210, 178, "Aliment brut", { size: 24, bold: true }) +
  arrow(350, 175, 500, 175, "#e65100", 4) + txt(425, 145, "transformation", { size: 20, fill: "#e65100" }) +
  rrect(520, 130, 300, 90, "#d9ead3") + txt(670, 178, "Aliment préparé", { size: 24, bold: true }) +
  txt(450, 275, "Exemples :", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 312, "rizière  →  riz décortiqué, riz cuit (vary sosoa)", { size: 19 }) +
  txt(450, 350, "manioc  →  farine, mofo, pâte", { size: 19 }) +
  txt(450, 390, "lait    →  yaourt, fromage", { size: 19 }) +
  txt(450, 430, "canne à sucre → sucre, sirop", { size: 19 }) +
  txt(450, 500, "Techniques : cuisson, fermentation, séchage, broyage, pressage.", { size: 19, italic: true, fill: "#546e7a" }) +
  txt(450, 560, "La transformation modifie l'aliment : il est mieux conservé, plus facile à manger, plus goûteux.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Conservation des aliments ----------
const CONSERV = wrap(title("Les techniques de conservation") +
  rrect(70, 120, 220, 120, "#fde9c8") + txt(180, 165, "Séchage", { size: 24, bold: true }) + txt(180, 210, "soleil, air", { size: 19 }) +
  rrect(310, 120, 220, 120, "#d9ead3") + txt(420, 165, "Salage", { size: 24, bold: true }) + txt(420, 210, "sel", { size: 19 }) +
  rrect(550, 120, 220, 120, "#cfe2f3") + txt(660, 165, "Fumage", { size: 24, bold: true }) + txt(660, 210, "fumée", { size: 19 }) +
  rrect(70, 260, 220, 120, "#cfe2f3") + txt(180, 305, "Froid", { size: 24, bold: true }) + txt(180, 350, "frigo, congélation", { size: 19 }) +
  rrect(310, 260, 220, 120, "#f3e5f5") + txt(420, 305, "Sucre / sirop", { size: 24, bold: true }) + txt(420, 350, "fruits confits", { size: 19 }) +
  rrect(550, 260, 220, 120, "#fff3e0") + txt(660, 305, "Fermentation", { size: 24, bold: true }) + txt(660, 350, "jus, komby, vinaigre", { size: 19 }) +
  txt(450, 450, "Objectif : éviter que les aliments se gâtent.", { size: 22, bold: true, fill: "#2e7d32" }) +
  txt(450, 500, "Exemple malgache : poisson séché au soleil, viande fumée (kitoza), légumes salés.", { size: 19, italic: true, fill: "#546e7a" }) +
  txt(450, 560, "Chaque technique protège l'aliment contre les microorganismes ou la chaleur.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Avantages conservation/transformation ----------
const AVANTAGES = wrap(title("Avantages de la conservation et de la transformation") +
  rrect(80, 120, 250, 100, "#d9ead3") + txt(205, 170, "Dure plus longtemps", { size: 22, bold: true }) +
  rrect(370, 120, 250, 100, "#d9ead3") + txt(495, 170, "Disponible en saison sèche", { size: 21, bold: true }) +
  rrect(660, 120, 180, 100, "#d9ead3") + txt(750, 170, "Évite le gaspillage", { size: 21, bold: true }) +
  rrect(80, 240, 250, 100, "#cfe2f3") + txt(205, 290, "Plus facile à manger", { size: 22, bold: true }) +
  rrect(370, 240, 250, 100, "#cfe2f3") + txt(495, 290, "Bon goût et variété", { size: 22, bold: true }) +
  rrect(660, 240, 180, 100, "#cfe2f3") + txt(750, 290, "Activité économique", { size: 21, bold: true }) +
  txt(450, 430, "Exemples :", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 470, "le poisson séché se conserve des mois ; le riz transformé se cuisine vite ;", { size: 19 }) +
  txt(450, 510, "le fruit confit peut être vendu et donne un revenu à la famille.", { size: 19 }) +
  txt(450, 570, "À retenir : transformer et conserver, c'est bien utiliser ce que la nature donne.", { size: 19, italic: true, fill: "#546e7a" }));

// ---------- Viviparité ----------
const VIVIP = wrap(title("La viviparité : le petit naît vivant") +
  `<ellipse cx="250" cy="260" rx="120" ry="80" fill="#f5f5f5" stroke="#000" stroke-width="3"/>` +
  `<circle cx="250" cy="250" r="20" fill="#ffe0b2" stroke="#000" stroke-width="3"/>` +
  `<circle cx="250" cy="235" r="6" fill="#000"/>` +
  `<path d="M 250 270 q -20 20 0 45 q 20 -25 0 -45" fill="#f5f5f5" stroke="#000" stroke-width="2.5"/>` +
  txt(250, 150, "mère", { size: 24, bold: true, fill: "#e65100" }) +
  txt(250, 390, "le petit se développe dans le corps", { size: 20 }) +
  arrow(460, 260, 620, 260, "#e65100", 4) +
  `<ellipse cx="700" cy="260" rx="100" ry="65" fill="#fce4ec" stroke="#000" stroke-width="3"/>` +
  `<circle cx="700" cy="250" r="18" fill="#ffe0b2" stroke="#000" stroke-width="2.5"/>` +
  `<circle cx="700" cy="237" r="5" fill="#000"/>` +
  txt(700, 360, "petit déjà formé", { size: 20 }) +
  txt(700, 400, "naît vivant", { size: 22, bold: true, fill: "#c62828" }) +
  txt(450, 500, "Exemples : vache, zébu, chat, chien, homme.", { size: 20, italic: true, fill: "#546e7a" }) +
  txt(450, 550, "Le petit est nourri et protégé par la mère.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Oviparité ----------
const OVIP = wrap(title("L'oviparité : le petit sort de l'œuf") +
  rrect(110, 170, 230, 110, "#fde9c8") + txt(225, 222, "La poule pond", { size: 22, bold: true }) +
  `<ellipse cx="225" cy="320" rx="42" ry="30" fill="#ffecb3" stroke="#000" stroke-width="3"/>` +
  `<circle cx="225" cy="320" r="11" fill="#ffe082" stroke="#000" stroke-width="2"/>` +
  arrow(320, 400, 500, 400, "#e65100", 4) +
  rrect(530, 170, 260, 110, "#d9ead3") + txt(660, 222, "L'œuf est couvé", { size: 22, bold: true }) +
  `<ellipse cx="660" cy="320" rx="42" ry="30" fill="#ffecb3" stroke="#000" stroke-width="3"/>` +
  `<path d="M 660 320 q -10 -18 0 -30 q 10 12 0 30" fill="#f9d94e" stroke="#000" stroke-width="2"/>` +
  txt(450, 470, "→ éclosion : le petit sort de l'œuf", { size: 22, bold: true, fill: "#c62828" }) +
  txt(450, 540, "Exemples : poule, canard, tortue, poisson, lézard.", { size: 20, italic: true, fill: "#546e7a" }) +
  txt(450, 590, "L'œuf est pondu en dehors du corps de la mère.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Ovoviviparité ----------
const OVOVIVIP = wrap(title("L'ovoviviparité : œufs gardés dans le corps") +
  `<ellipse cx="450" cy="220" rx="190" ry="90" fill="#f5f5f5" stroke="#000" stroke-width="3"/>` +
  txt(450, 170, "femelle", { size: 24, bold: true, fill: "#e65100" }) +
  `<ellipse cx="360" cy="245" rx="36" ry="25" fill="#ffecb3" stroke="#000" stroke-width="3"/>` +
  `<ellipse cx="520" cy="245" rx="36" ry="25" fill="#ffecb3" stroke="#000" stroke-width="3"/>` +
  `<circle cx="360" cy="245" r="9" fill="#ffe082" stroke="#000" stroke-width="2"/>` +
  `<circle cx="520" cy="245" r="9" fill="#ffe082" stroke="#000" stroke-width="2"/>` +
  txt(450, 370, "les œufs restent dans le corps", { size: 20 }) +
  arrow(450, 400, 450, 490, "#e65100", 4) +
  txt(450, 535, "le petit naît vivant", { size: 22, bold: true, fill: "#c62828" }) +
  txt(450, 590, "Exemples : guppy, vipère, certains serpents, requin.", { size: 19, italic: true, fill: "#546e7a" }));

// ---------- Importance & inconvénients reproduction sexuée ----------
const IMPORT = wrap(title("Reproduction sexuée : avantages et inconvénients") +
  rrect(90, 120, 320, 180, "#d9ead3") + txt(250, 165, "AVANTAGES", { size: 26, bold: true, fill: "#2e7d32" }) +
  txt(250, 210, "Nombreuses graines", { size: 19 }) +
  txt(250, 245, "Graines transportées loin", { size: 19 }) +
  txt(250, 280, "Variation : plantes plus résistantes", { size: 19 }) +
  rrect(490, 120, 320, 180, "#ffcdd2") + txt(650, 165, "INCONVÉNIENTS", { size: 26, bold: true, fill: "#c62828" }) +
  txt(650, 210, "Croissance plus longue", { size: 19 }) +
  txt(650, 245, "Moins de sécurité si conditions mauvaises", { size: 19 }) +
  txt(650, 280, "Il faut fleurir, polliniser, mûrir", { size: 19 }) +
  txt(450, 400, "La reproduction sexuée utilise les fleurs, les graines et la pollinisation.", { size: 20 }) +
  txt(450, 460, "Elle demande de l'eau, des insectes ou du vent.", { size: 19 }) +
  txt(450, 520, "Le fruit et la graine sont un bon moyen de disperser la plante.", { size: 18, italic: true, fill: "#546e7a" }) +
  txt(450, 580, "→ Les avantages l'emportent souvent pour la diversité des plantes.", { size: 19, bold: true, fill: "#2e7d32" }));

// ---------- Bouturage ----------
const BOUT = wrap(title("Le bouturage") +
  txt(150, 130, "1. Couper", { size: 22, bold: true, fill: "#1F4E79" }) +
  `<path d="M 120 180 L 150 340" stroke="#2e7d32" stroke-width="10"/>` +
  `<path d="M 150 180 L 180 340" stroke="#2e7d32" stroke-width="10"/>` +
  `<path d="M 135 210 q -25 10 -20 35 q 22 -2 25 -20z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  line(170, 240, 205, 240, "#c62828", 5) +
  txt(250, 250, "→", { size: 34 }) +
  txt(300, 130, "2. Planter", { size: 22, bold: true, fill: "#1F4E79" }) +
  rrect(280, 300, 140, 100, "#d7ccc8") + line(350, 300, 350, 220, "#2e7d32", 10) +
  `<path d="M 350 230 q -30 8 -24 38 q 26 -4 24 -38z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  `<path d="M 350 260 q 30 8 24 38 q -26 -4 -24 -38z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  txt(470, 250, "→", { size: 34 }) +
  txt(520, 130, "3. Nouvelle plante", { size: 22, bold: true, fill: "#1F4E79" }) +
  `<path d="M 620 300 L 650 200" stroke="#2e7d32" stroke-width="10"/>` +
  `<path d="M 640 205 q -40 10 -35 50 q 36 -6 35 -50z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  `<path d="M 640 235 q 40 10 35 50 q -36 -6 -35 -50z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  txt(450, 500, "Un morceau de rameau donne une nouvelle plante (même plante).", { size: 20 }) +
  txt(450, 560, "Exemple : manioc, géranium, rosier, patate douce.", { size: 20, italic: true, fill: "#546e7a" }));

// ---------- Greffage ----------
const GREFFE = wrap(title("Le greffage") +
  txt(160, 130, "1. Préparer le porte-greffe", { size: 21, bold: true, fill: "#1F4E79" }) +
  rrect(110, 170, 100, 180, "#a1887f") + line(160, 170, 160, 350, "#5d4037", 8) +
  line(160, 220, 205, 220, "#c62828", 5) +
  txt(260, 250, "→", { size: 34 }) +
  txt(360, 130, "2. Poser le greffon", { size: 21, bold: true, fill: "#1F4E79" }) +
  rrect(310, 170, 100, 180, "#a1887f") + line(360, 170, 360, 350, "#5d4037", 8) +
  `<path d="M 360 220 l 40 10 l -40 10" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  txt(460, 250, "→", { size: 34 }) +
  txt(560, 130, "3. Plante greffée", { size: 21, bold: true, fill: "#1F4E79" }) +
  `<path d="M 560 350 L 600 200" stroke="#5d4037" stroke-width="10"/>` +
  `<path d="M 590 205 q -35 10 -30 45 q 32 -5 30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  txt(450, 500, "On unit le greffon (variété choisie) sur un porte-greffe solide.", { size: 20 }) +
  txt(450, 560, "Exemple : agrumes (orange, citron), manguier.", { size: 20, italic: true, fill: "#546e7a" }));

// ---------- Marcottage ----------
const MARC = wrap(title("Le marcottage") +
  txt(160, 130, "1. Pliér une tige", { size: 22, bold: true, fill: "#1F4E79" }) +
  `<path d="M 100 300 Q 180 180 260 300" fill="none" stroke="#2e7d32" stroke-width="10"/>` +
  rrect(150, 300, 120, 55, "#d7ccc8") +
  `Q 180 180 260 300` +
  txt(360, 130, "2. Enterrer une partie", { size: 22, bold: true, fill: "#1F4E79" }) +
  `<path d="M 300 300 Q 380 180 460 300" fill="none" stroke="#2e7d32" stroke-width="10"/>` +
  rrect(350, 300, 120, 55, "#d7ccc8") +
  txt(560, 130, "3. Nouvelle plante", { size: 22, bold: true, fill: "#1F4E79" }) +
  `<path d="M 620 300 L 660 200" stroke="#2e7d32" stroke-width="10"/>` +
  `<path d="M 650 205 q -35 10 -30 45 q 32 -5 30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  `<path d="M 650 235 q 35 10 30 45 q -32 -5 -30 -45z" fill="#7cb342" stroke="#000" stroke-width="2"/>` +
  txt(450, 460, "Une tige pliée et enterrée forme des racines, puis est séparée.", { size: 20 }) +
  txt(450, 520, "Exemple : litchi, café, certains arbres fruitiers.", { size: 20, italic: true, fill: "#546e7a" }) +
  txt(450, 580, "Le marcottage donne une plante identique à la plante d'origine.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Fonctionnement appareils reproducteurs ----------
const FUNC_REPRO = wrap(title("Fonctionnement des appareils reproducteurs") +
  rrect(90, 120, 320, 160, "#fce4ec") + txt(250, 165, "APPAREIL MASCULIN", { size: 22, bold: true, fill: "#c62828" }) +
  txt(250, 210, "testicules → spermatozoïdes", { size: 18 }) +
  txt(250, 245, "spermiductes → transport", { size: 18 }) +
  txt(250, 275, "urètre → sortie", { size: 18 }) +
  rrect(490, 120, 320, 160, "#e8eaf6") + txt(650, 165, "APPAREIL FÉMININ", { size: 22, bold: true, fill: "#283593" }) +
  txt(650, 210, "ovaires → ovules", { size: 18 }) +
  txt(650, 245, "trompes → fécondation", { size: 18 }) +
  txt(650, 275, "utérus → développement", { size: 18 }) +
  arrow(250, 300, 250, 430, "#c62828", 4) + arrow(650, 300, 650, 430, "#283593", 4) +
  txt(250, 470, "spermatozoïdes", { size: 20 }) + txt(650, 470, "ovule", { size: 20 }) +
  `<circle cx="250" cy="510" r="8" fill="#c62828"/>` + `<circle cx="650" cy="510" r="10" fill="#283593"/>` +
  arrow(300, 520, 580, 520, "#1F4E79", 4) +
  txt(450, 560, "fécondation : spermatozoïde + ovule → cellule-œuf", { size: 19, bold: true, fill: "#1F4E79" }) +
  txt(450, 600, "Le bébé se développe dans l'utérus.", { size: 17, italic: true }));

// ---------- Rôles appareil urinaire ----------
const ROLES_URINE = wrap(title("Rôles des organes de l'appareil urinaire") +
  rrect(120, 130, 180, 100, "#ef9a9a") + txt(210, 180, "REINS", { size: 25, bold: true, fill: "#b71c1c" }) + txt(210, 215, "filtration", { size: 19 }) +
  arrow(300, 180, 420, 180, "#039be5", 4) +
  rrect(430, 130, 180, 100, "#bbdefb") + txt(520, 180, "URETÈRES", { size: 23, bold: true, fill: "#1565c0" }) + txt(520, 215, "transport", { size: 19 }) +
  arrow(610, 180, 730, 180, "#039be5", 4) +
  rrect(740, 130, 120, 100, "#e1f5fe") + txt(800, 180, "VESSIE", { size: 20, bold: true, fill: "#00695c" }) + txt(800, 215, "stockage", { size: 16 }) +
  arrow(800, 230, 800, 340, "#039be5", 4) +
  rrect(720, 350, 160, 80, "#e1f5fe") + txt(800, 390, "URÈTRE", { size: 20, bold: true, fill: "#00695c" }) +
  txt(800, 445, "évacuation", { size: 17 }) +
  txt(450, 520, "Le sang passe dans les reins : les déchets forment l'urine.", { size: 20 }) +
  txt(450, 570, "L'urine est transportée, stockée, puis évacuée.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Hygiène appareil urinaire ----------
const HYGIENE = wrap(title("Prendre soin de l'appareil urinaire") +
  rrect(90, 130, 200, 150, "#e1f5fe") + txt(190, 185, "Boire de l'eau", { size: 23, bold: true, fill: "#01579b" }) + txt(190, 225, "souvent", { size: 18 }) +
  rrect(330, 130, 200, 150, "#d9ead3") + txt(430, 185, "Se laver", { size: 23, bold: true, fill: "#2e7d32" }) + txt(430, 225, "maison, mains", { size: 18 }) +
  rrect(570, 130, 200, 150, "#fff3e0") + txt(670, 185, "Ne pas se retenir", { size: 23, bold: true, fill: "#e65100" }) + txt(670, 225, "aller aux toilettes", { size: 18 }) +
  rrect(90, 320, 200, 150, "#fce4ec") + txt(190, 375, "Uriner", { size: 23, bold: true, fill: "#c62828" }) + txt(190, 405, "ne pas retenir", { size: 18 }) +
  rrect(330, 320, 200, 150, "#fff3e0") + txt(430, 375, "Consulter", { size: 23, bold: true, fill: "#e65100" }) + txt(430, 405, "si douleur", { size: 18 }) +
  rrect(570, 320, 200, 150, "#e8eaf6") + txt(670, 375, "Propreté", { size: 23, bold: true, fill: "#283593" }) + txt(670, 405, "vêtements propres", { size: 18 }) +
  txt(450, 520, "Prendre soin de l'appareil urinaire protège la santé et évite les infections.", { size: 20 }) +
  txt(450, 580, "Une eau propre et une bonne hygiène sont essentielles.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Moyens d'approvisionnement en eau ----------
const EAU_MOYENS = wrap(title("Moyens d'approvisionnement en eau") +
  rrect(80, 160, 180, 110, "#bbdefb") + txt(170, 215, "Source", { size: 23, bold: true, fill: "#01579b" }) +
  rrect(360, 160, 180, 110, "#bbdefb") + txt(450, 215, "Fontaine", { size: 23, bold: true, fill: "#01579b" }) +
  rrect(640, 160, 180, 110, "#bbdefb") + txt(730, 215, "Rivière", { size: 23, bold: true, fill: "#01579b" }) +
  rrect(80, 320, 180, 110, "#bbdefb") + txt(170, 375, "Lac", { size: 23, bold: true, fill: "#01579b" }) +
  rrect(360, 320, 180, 110, "#bbdefb") + txt(450, 375, "Puits", { size: 23, bold: true, fill: "#01579b" }) +
  rrect(640, 320, 180, 110, "#bbdefb") + txt(730, 375, "Nappe souterraine", { size: 21, bold: true, fill: "#01579b" }) +
  txt(450, 490, "L'eau peut être captée en surface ou sous terre.", { size: 20 }) +
  txt(450, 550, "Chaque moyen a des avantages et des inconvénients selon le lieu.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Avantages / inconvénients des sources ----------
const SOURCES = wrap(title("Sources d'eau : avantages et inconvénients") +
  rrect(90, 120, 330, 170, "#e8f5e9") + txt(255, 165, "AVANTAGES", { size: 23, bold: true, fill: "#2e7d32" }) +
  txt(255, 210, "source/fontaine : eau plus propre", { size: 18 }) +
  txt(255, 245, "rivière/lac : disponible près du village", { size: 18 }) +
  txt(255, 278, "puits : eau souterraine à l'abri", { size: 18 }) +
  rrect(480, 120, 330, 170, "#ffcdd2") + txt(645, 165, "INCONVÉNIENTS", { size: 23, bold: true, fill: "#c62828" }) +
  txt(645, 210, "distance parfois longue", { size: 18 }) +
  txt(645, 245, "saison sèche : moins d'eau", { size: 18 }) +
  txt(645, 278, "pollution possible", { size: 18 }) +
  txt(450, 360, "exemple :", { size: 19, bold: true, fill: "#37474F" }) +
  txt(450, 400, "la eau de fontaine peut être proche, mais la queue est longue ;", { size: 18 }) +
  txt(450, 440, "la rivière est proche, mais elle peut être boueuse ou polluée.", { size: 18 }) +
  txt(450, 520, "→ L'eau doit être traitée avant consommation.", { size: 20, bold: true, fill: "#2e7d32" }) +
  txt(450, 580, "Il faut comparer la distance, la propreté, la saison et le coût.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Problèmes d'accès à l'eau ----------
const PROBLEMES = wrap(title("Problèmes d'accès à l'eau") +
  rrect(90, 140, 220, 120, "#ffe0b2") + txt(200, 195, "Distance", { size: 23, bold: true, fill: "#e65100" }) + txt(200, 235, "longue marche", { size: 17 }) +
  rrect(340, 140, 220, 120, "#ffcdd2") + txt(450, 195, "Saison sèche", { size: 23, bold: true, fill: "#c62828" }) + txt(450, 235, "moins d'eau", { size: 17 }) +
  rrect(590, 140, 220, 120, "#e8eaf6") + txt(700, 195, "Pollution", { size: 23, bold: true, fill: "#283593" }) + txt(700, 235, "eau sale", { size: 17 }) +
  rrect(90, 300, 220, 120, "#ede7f6") + txt(200, 355, "Coût", { size: 23, bold: true, fill: "#4527a0" }) + txt(200, 395, "puits, pompe, tuyaux", { size: 17 }) +
  rrect(340, 300, 220, 120, "#fff3e0") + txt(450, 355, "Santé", { size: 23, bold: true, fill: "#f57c00" }) + txt(450, 395, "maladies si eau sale", { size: 17 }) +
  rrect(590, 300, 220, 120, "#fce4ec") + txt(700, 355, "Communautés", { size: 23, bold: true, fill: "#c2185b" }) + txt(700, 395, "partage difficile", { size: 17 }) +
  txt(450, 480, "→ L'accès à l'eau est un grand problème pour certaines familles à Madagascar.", { size: 20 }) +
  txt(450, 540, "Il faut protéger les sources, construire des puits et utiliser l'eau avec soin.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Protection des bassins versants ----------
const PROTECT = wrap(title("Rôle et protection des bassins versants") +
  rrect(80, 130, 240, 120, "#c8e6c9") + txt(200, 185, "Collecter", { size: 23, bold: true, fill: "#1b5e20" }) + txt(200, 220, "l'eau de pluie", { size: 17 }) +
  rrect(340, 130, 240, 120, "#c8e6c9") + txt(460, 185, "Diriger", { size: 23, bold: true, fill: "#1b5e20" }) + txt(460, 220, "vers la rivière", { size: 17 }) +
  rrect(600, 130, 220, 120, "#c8e6c9") + txt(710, 185, "Réguler", { size: 23, bold: true, fill: "#1b5e20" }) + txt(710, 220, "éviter crues", { size: 17 }) +
  txt(450, 310, "Importance :", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 350, "eau potable, irrigation, énergie hydroélectrique", { size: 19 }) +
  txt(450, 390, "protection contre les inondations et l'érosion", { size: 19 }) +
  txt(450, 450, "Protection :", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 490, "ne pas couper les arbres, ne pas jeter de déchets, construire des barrages", { size: 19 }) +
  txt(450, 560, "→ Un bassin versant bien protégé fournit de l'eau plus longtemps.", { size: 19, italic: true, fill: "#2e7d32" }));

// ---------- Découverte des roches ----------
const DECOUVERTE = wrap(title("La découverte des roches") +
  rrect(80, 150, 200, 140, "#e0e0e0") + txt(180, 220, "granite", { size: 24, bold: true, fill: "#37474f" }) +
  rrect(340, 150, 200, 140, "#d7ccc8") + txt(440, 220, "grès", { size: 24, bold: true, fill: "#4e342e" }) +
  rrect(600, 150, 200, 140, "#eceff1") + txt(700, 220, "marbre", { size: 24, bold: true, fill: "#607d8b" }) +
  txt(450, 350, "Comment reconnaître une roche ?", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 395, "regarder la couleur, les grains, la dureté, les couches", { size: 19 }) +
  txt(450, 445, "gratter, sentir le poids, observer avec la loupe", { size: 19 }) +
  txt(450, 510, "Sur le terrain, on ramasse des échantillons et on les compare.", { size: 18, italic: true, fill: "#546e7a" }) +
  txt(450, 570, "Roches de Madagascar : granite des Hautes Terres, basalte, grès, calcaire, marbre.", { size: 18, italic: true, fill: "#546e7a" }));

// ---------- Bilans de révision ----------
const BILAN_I = wrap(title("Bilan — Unité I : Alimentation") +
  rrect(80, 130, 330, 140, "#fde9c8") + txt(245, 180, "ALIMENTS", { size: 26, bold: true, fill: "#e65100" }) +
  txt(245, 225, "énergétiques · bâtisseurs · protecteurs", { size: 18 }) +
  rrect(80, 300, 330, 140, "#d9ead3") + txt(245, 350, "TRANSFORMER", { size: 24, bold: true, fill: "#2e7d32" }) +
  txt(245, 395, "cuire · fermer · broyer · presser", { size: 18 }) +
  rrect(490, 130, 330, 140, "#cfe2f3") + txt(655, 180, "CONSERVER", { size: 24, bold: true, fill: "#01579b" }) +
  txt(655, 225, "sécher · saler · fumer · réfrigérer", { size: 18 }) +
  rrect(490, 300, 330, 140, "#f3e5f5") + txt(655, 350, "AVANTAGES", { size: 24, bold: true, fill: "#6a1b9a" }) +
  txt(655, 395, "durée · saison · goût · économie", { size: 18 }) +
  txt(450, 520, "Mots clés : aliment, origine, famille, transformation, conservation, avantage.", { size: 19, bold: true, fill: "#1F4E79" }) +
  txt(450, 580, "RAS : appliquer des techniques de conservation et de transformation des aliments.", { size: 18, italic: true, fill: "#546e7a" }));

const BILAN_II = wrap(title("Bilan — Unité II : Reproduction des êtres vivants") +
  rrect(80, 120, 220, 150, "#fce4ec") + txt(190, 165, "ANIMAUX", { size: 24, bold: true, fill: "#c62828" }) +
  txt(190, 205, "vivipare", { size: 18 }) + txt(190, 235, "ovipare", { size: 18 }) + txt(190, 260, "ovovivipare", { size: 16 }) +
  rrect(340, 120, 220, 150, "#d9ead3") + txt(450, 165, "PLANTES", { size: 24, bold: true, fill: "#2e7d32" }) +
  txt(450, 205, "reproduction sexuée", { size: 18 }) + txt(450, 235, "fleur → graine", { size: 18 }) + txt(450, 260, "pollinisation", { size: 18 }) +
  rrect(600, 120, 220, 150, "#f3e5f5") + txt(710, 165, "MULTIPLICATION", { size: 21, bold: true, fill: "#6a1b9a" }) +
  txt(710, 205, "bouturage", { size: 18 }) + txt(710, 235, "greffage", { size: 18 }) + txt(710, 260, "marcottage", { size: 17 }) +
  txt(450, 340, "→ Le petit ou la plante naît, grandit et se reproduit.", { size: 20 }) +
  txt(450, 400, "→ La femelle et le mâle donnent une nouvelle génération.", { size: 19 }) +
  txt(450, 470, "Mots clés : viviparité, oviparité, ovoviviparité, fleur, pollinisation, graine, bouturage, greffage, marcottage.", { size: 18, bold: true, fill: "#1F4E79" }) +
  txt(450, 560, "RAS : différencier les modes de reproduction des animaux et des plantes.", { size: 18, italic: true, fill: "#546e7a" }));

const BILAN_III = wrap(title("Bilan — Unité III : Reproduction humaine") +
  rrect(90, 130, 330, 140, "#fce4ec") + txt(255, 180, "APPAREIL MASCULIN", { size: 22, bold: true, fill: "#c62828" }) +
  txt(255, 225, "testicules · spermiductes · urètre", { size: 18 }) +
  rrect(480, 130, 330, 140, "#e8eaf6") + txt(645, 180, "APPAREIL FÉMININ", { size: 22, bold: true, fill: "#283593" }) +
  txt(645, 225, "ovaires · trompes · utérus · vagin", { size: 18 }) +
  txt(450, 350, "Rôles :", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 390, "spermatozoïdes (mâle) + ovules (femelle) → fécondation", { size: 19 }) +
  txt(450, 430, "l'utérus permet au bébé de se développer", { size: 19 }) +
  txt(450, 500, "Mots clés : organes génitaux internes, spermatozoïde, ovule, fécondation, utérus.", { size: 19, bold: true, fill: "#1F4E79" }) +
  txt(450, 570, "RAS : analyser le fonctionnement des appareils reproducteurs mâle et femelle.", { size: 18, italic: true, fill: "#546e7a" }));

const BILAN_IV = wrap(title("Bilan — Unité IV : Santé et bien-être") +
  rrect(90, 130, 220, 150, "#ef9a9a") + txt(200, 180, "REINS", { size: 25, bold: true, fill: "#b71c1c" }) + txt(200, 225, "filtration", { size: 18 }) +
  rrect(340, 130, 220, 150, "#bbdefb") + txt(450, 180, "URETÈRES", { size: 22, bold: true, fill: "#1565c0" }) + txt(450, 225, "transport", { size: 18 }) +
  rrect(590, 130, 220, 150, "#e1f5fe") + txt(700, 180, "VESSIE", { size: 23, bold: true, fill: "#00695c" }) + txt(700, 225, "stockage", { size: 18 }) +
  rrect(90, 320, 220, 150, "#e8eaf6") + txt(200, 370, "URÈTRE", { size: 23, bold: true, fill: "#283593" }) + txt(200, 410, "évacuation", { size: 18 }) +
  rrect(340, 320, 470, 150, "#fff3e0") + txt(575, 370, "HYGIÈNE", { size: 24, bold: true, fill: "#e65100" }) +
  txt(575, 410, "boire de l'eau · se laver · ne pas se retenir · consulter", { size: 18 }) +
  txt(450, 530, "L'appareil urinaire élimine les déchets du sang.", { size: 20 }) +
  txt(450, 580, "RAS : déterminer les actions pour prendre soin de l'appareil urinaire.", { size: 18, italic: true, fill: "#546e7a" }));

const BILAN_V = wrap(title("Bilan — Unité V : Environnement") +
  rrect(90, 120, 340, 110, "#bbdefb") + txt(260, 165, "EAU", { size: 24, bold: true, fill: "#01579b" }) +
  txt(260, 200, "source · fontaine · rivière · lac · puits", { size: 18 }) +
  rrect(470, 120, 340, 110, "#c8e6c9") + txt(640, 165, "BASSIN VERSANT", { size: 22, bold: true, fill: "#1b5e20" }) +
  txt(640, 200, "collecter · diriger · réguler", { size: 18 }) +
  rrect(90, 270, 340, 110, "#e1f5fe") + txt(260, 315, "VASES COMMUNICANTS", { size: 20, bold: true, fill: "#00695c" }) +
  txt(260, 350, "même niveau par gravité", { size: 18 }) +
  rrect(470, 270, 340, 110, "#f9fbe7") + txt(640, 315, "DISTRIBUTION", { size: 22, bold: true, fill: "#827717" }) +
  txt(640, 350, "château d'eau → maison · champ", { size: 18 }) +
  txt(450, 460, "L'eau est précieuse : il faut la chercher, la protéger et l'utiliser avec soin.", { size: 20 }) +
  txt(450, 520, "Mots clés : source, bassin versant, ruissellement, gravité, château d'eau.", { size: 18, bold: true, fill: "#1F4E79" }) +
  txt(450, 580, "RAS : distinguer les moyens d'approvisionnement · bassins versants · vases communicants.", { size: 17, italic: true, fill: "#546e7a" }));

const BILAN_VI = wrap(title("Bilan — Unité VI : Géologie") +
  rrect(90, 120, 220, 150, "#ffe0b2") + txt(200, 165, "MAGMATIQUES", { size: 20, bold: true, fill: "#e65100" }) +
  txt(200, 205, "magma refroidi", { size: 18 }) + txt(200, 235, "granite · basalte", { size: 17 }) +
  rrect(340, 120, 220, 150, "#d7ccc8") + txt(450, 165, "SÉDIMENTAIRES", { size: 20, bold: true, fill: "#4e342e" }) +
  txt(450, 205, "sédiments tassés", { size: 18 }) + txt(450, 235, "grès · calcaire · argile", { size: 17 }) +
  rrect(590, 120, 220, 150, "#e0e0e0") + txt(700, 165, "MÉTAMORPHIQUES", { size: 19, bold: true, fill: "#37474f" }) +
  txt(700, 205, "chaleur + pression", { size: 18 }) + txt(700, 235, "marbre · gneiss · schiste", { size: 17 }) +
  txt(450, 360, "Comment reconnaître ?", { size: 22, bold: true, fill: "#37474F" }) +
  txt(450, 400, "couleur · grains · texture · couches · fossiles", { size: 19 }) +
  txt(450, 460, "Exemple : le granite a des gros grains ; le basalte est sombre ; le marbre est strié.", { size: 19 }) +
  txt(450, 540, "RAS : différencier les 3 groupes de roches.", { size: 19, italic: true, fill: "#546e7a" }) +
  txt(450, 590, "Mots clés : magmatique, sédimentaire, métamorphique, texture, fossile.", { size: 18, bold: true, fill: "#1F4E79" }));

const SCHEMAS_NEW = {
  "transformation-aliments.png": TRANSFO,
  "conservation-aliments.png": CONSERV,
  "avantages-conservation.png": AVANTAGES,
  "viviparite.png": VIVIP,
  "oviparite.png": OVIP,
  "ovoviviparite.png": OVOVIVIP,
  "importance-reproduction-sexuee.png": IMPORT,
  "bouturage.png": BOUT,
  "greffage.png": GREFFE,
  "marcottage.png": MARC,
  "fonctionnement-reproduction.png": FUNC_REPRO,
  "roles-appareil-urinaire.png": ROLES_URINE,
  "hygiene-appareil-urinaire.png": HYGIENE,
  "moyens-eau.png": EAU_MOYENS,
  "avantages-sources.png": SOURCES,
  "problemes-eau.png": PROBLEMES,
  "protection-bassins.png": PROTECT,
  "decouverte-roches.png": DECOUVERTE,
  "bilan-unite-I.png": BILAN_I,
  "bilan-unite-II.png": BILAN_II,
  "bilan-unite-III.png": BILAN_III,
  "bilan-unite-IV.png": BILAN_IV,
  "bilan-unite-V.png": BILAN_V,
  "bilan-unite-VI.png": BILAN_VI,
};

module.exports = { SCHEMAS_NEW };
