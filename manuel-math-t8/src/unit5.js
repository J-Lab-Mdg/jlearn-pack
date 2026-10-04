// UNITÉ 5 — MESURE (PE T8) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

const ell = (cx, cy, rx, ry, color = BLUE, wd = 3, dash = '') =>
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${color}" stroke-width="${wd}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;

const figs = {};
// S1 — pyramide base carrée
figs.u5f1 = (() => { const { s, y } = head('La pyramide', ['Une base polygonale, un sommet, des faces latérales triangulaires.']);
  const top = y + 20, Sx = 500, Sy = top, A = [330, top + 230], B = [610, top + 250], C = [700, top + 180], D = [420, top + 165];
  let b = poly([[Sx, Sy], A, B], '#FFF3E0', OCRE, 3) + poly([[Sx, Sy], B, C], '#FFE0B2', OCRE, 3);
  b += seg(A[0], A[1], D[0], D[1], OCRE, 2, '7 6') + seg(D[0], D[1], C[0], C[1], OCRE, 2, '7 6') + seg(Sx, Sy, D[0], D[1], OCRE, 2, '7 6');
  const H = [515, top + 205];
  b += seg(Sx, Sy, H[0], H[1], PINK2, 2.5, '6 5') + dot(H[0], H[1], 5, PINK2);
  b += txt(Sx, Sy - 16, 'S (sommet)', 21, OCRE, 'bold', 'middle') + txt(H[0] + 72, H[1] + 4, 'hauteur', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 300, 'base carrée + 4 faces triangulaires qui se rejoignent en S', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 335, s + b); })();
// S2 — cône
figs.u5f2 = (() => { const { s, y } = head('Le cône de révolution', ['Un disque de base, un sommet au-dessus du centre, une surface courbe.']);
  const top = y + 15, Sx = 500, Sy = top, cy = top + 250, rx = 180, ry = 45;
  let b = seg(Sx - rx, cy, Sx, Sy, '#1565C0', 3) + seg(Sx + rx, cy, Sx, Sy, '#1565C0', 3);
  b += ell(Sx, cy, rx, ry, '#1565C0', 3);
  b += seg(Sx, Sy, Sx, cy, PINK2, 2.5, '6 5') + seg(Sx, cy, Sx + rx, cy, GREEN, 3);
  b += dot(Sx, cy, 5, PINK2);
  b += txt(Sx, Sy - 16, 'S', 22, '#1565C0', 'bold', 'middle') + txt(Sx - 32, (Sy + cy) / 2, 'h', 22, PINK2, 'bold', 'middle')
    + txt(Sx + rx / 2, cy + 34, 'rayon r', 20, GREEN, 'bold', 'middle')
    + txt(Sx + rx / 2 + 110, (Sy + cy) / 2 - 20, 'génératrice g', 20, OCRE, 'bold', 'middle');
  b += txt(500, cy + 90, 'g² = h² + r² : la pente du cône relie hauteur et rayon', 21, OCRE, 'bold', 'middle');
  return svg(1000, cy + 125, s + b); })();
// S3 — patrons
figs.u5f3 = (() => { const { s, y } = head('Les patrons : le solide mis à plat', ['Pyramide : un carré entouré de 4 triangles ; cône : un disque + un secteur.']);
  const top = y + 25;
  const cx = 270, cyc = top + 130, a = 70;
  let b = `<rect x="${cx - a}" y="${cyc - a}" width="${2 * a}" height="${2 * a}" fill="#FFF9C4" stroke="${OCRE}" stroke-width="2.5"/>`;
  b += poly([[cx - a, cyc - a], [cx + a, cyc - a], [cx, cyc - a - 95]], '#FFE0B2', OCRE, 2.5);
  b += poly([[cx - a, cyc + a], [cx + a, cyc + a], [cx, cyc + a + 95]], '#FFE0B2', OCRE, 2.5);
  b += poly([[cx - a, cyc - a], [cx - a, cyc + a], [cx - a - 95, cyc]], '#FFE0B2', OCRE, 2.5);
  b += poly([[cx + a, cyc - a], [cx + a, cyc + a], [cx + a + 95, cyc]], '#FFE0B2', OCRE, 2.5);
  b += txt(cx, cyc + a + 135, 'patron de la pyramide', 21, OCRE, 'bold', 'middle');
  const kx = 730, ky = top + 105;
  b += `<path d="M ${kx} ${ky} L ${kx - 120} ${ky + 95} A 150 150 0 0 0 ${kx + 120} ${ky + 95} Z" fill="#E3F2FD" stroke="#1565C0" stroke-width="2.5"/>`;
  b += circ(kx, ky + 200, 52, '#1565C0', 2.5);
  b += txt(kx, ky + 295, 'patron du cône : secteur + disque', 21, '#1565C0', 'bold', 'middle');
  return svg(1000, top + 420, s + b); })();
// S4 — aire latérale pyramide
figs.u5f4 = (() => { const { s, y } = head('L’aire latérale de la pyramide', ['4 faces triangulaires identiques : aire latérale = 4 × aire d’un triangle.']);
  const top = y + 25;
  let b = '';
  for (let k = 0; k < 4; k++) {
    const x = 120 + k * 150;
    b += poly([[x, top + 130], [x + 110, top + 130], [x + 55, top + 10]], '#FFE0B2', OCRE, 2.5);
  }
  b += txt(390, top + 180, '4 triangles de base 6 cm et de hauteur 5 cm', 21, OCRE, 'bold', 'middle');
  b += box(740, top + 30, 190, 85, '', '#E8F5E9', GREEN, 22);
  b += txt(835, top + 62, 'A = 4 × (6×5÷2)', 20, GREEN, 'bold', 'middle') + txt(835, top + 95, '= 60 cm²', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 215, s + b); })();
// S5 — aire latérale cône
figs.u5f5 = (() => { const { s, y } = head('L’aire latérale du cône', ['Déplié, le cône devient un secteur : son aire vaut π × r × g.']);
  const top = y + 30, kx = 300, ky = top + 10;
  let b = `<path d="M ${kx} ${ky} L ${kx - 150} ${ky + 120} A 190 190 0 0 0 ${kx + 150} ${ky + 120} Z" fill="#E3F2FD" stroke="#1565C0" stroke-width="3"/>`;
  b += txt(kx - 110, ky + 40, 'g', 22, '#1565C0', 'bold', 'middle');
  b += box(600, top + 40, 330, 100, '', '#FDE7EF', PINK2, 24);
  b += txt(765, top + 78, 'Aire latérale', 22, PINK2, 'bold', 'middle') + txt(765, top + 115, 'A = π × r × g', 24, PINK2, 'bold', 'middle');
  b += txt(500, top + 250, 'exemple : r = 3 cm, g = 5 cm → A = π × 3 × 5 ≈ 47,1 cm²', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 285, s + b); })();
// S6 — volume pyramide
figs.u5f6 = (() => { const { s, y } = head('Le volume de la pyramide : un tiers du prisme', ['Trois pyramides remplissent le prisme de même base et hauteur.']);
  const top = y + 20;
  let b = box(110, top + 30, 240, 90, '', '#E3F2FD', '#1565C0', 22) + box(420, top + 30, 240, 90, '', '#FFF3E0', OCRE, 22) + box(730, top + 30, 200, 90, '', '#E8F5E9', GREEN, 22);
  b += txt(230, top + 66, 'prisme', 22, '#1565C0', 'bold', 'middle') + txt(230, top + 100, 'V = B × h', 22, '#1565C0', 'bold', 'middle')
    + txt(540, top + 66, 'pyramide', 22, OCRE, 'bold', 'middle') + txt(540, top + 100, 'V = B × h ÷ 3', 22, OCRE, 'bold', 'middle')
    + txt(830, top + 66, 'rapport', 22, GREEN, 'bold', 'middle') + txt(830, top + 100, '3 pour 1', 22, GREEN, 'bold', 'middle');
  b += txt(500, top + 180, 'base 36 cm², hauteur 10 cm → V = 36 × 10 ÷ 3 = 120 cm³', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 215, s + b); })();
// S7 — volume cône
figs.u5f7 = (() => { const { s, y } = head('Le volume du cône : un tiers du cylindre', ['Le cône remplit le tiers du cylindre de même base et de même hauteur.']);
  const top = y + 30, cx = 300, cy = top + 200, rx = 110, ry = 28;
  let b = ell(cx, cy, rx, ry, '#1565C0', 3) + ell(cx, top + 10, rx, ry, '#1565C0', 3, '6 5');
  b += seg(cx - rx, top + 10, cx - rx, cy, '#1565C0', 3) + seg(cx + rx, top + 10, cx + rx, cy, '#1565C0', 3);
  b += seg(cx - rx, cy, cx, top + 10, PINK2, 3) + seg(cx + rx, cy, cx, top + 10, PINK2, 3);
  b += box(620, top + 40, 310, 110, '', '#FDE7EF', PINK2, 24);
  b += txt(775, top + 80, 'V = π × r² × h ÷ 3', 24, PINK2, 'bold', 'middle') + txt(775, top + 120, '(un tiers du cylindre)', 20, PINK2, 'normal', 'middle');
  b += txt(500, cy + 75, 'r = 3 cm, h = 10 cm → V = π × 9 × 10 ÷ 3 ≈ 94,2 cm³', 22, OCRE, 'bold', 'middle');
  return svg(1000, cy + 110, s + b); })();
// S8 — volumes et capacités
figs.u5f8 = (() => { const { s, y } = head('Volume et capacité : deux langages, une grandeur', ['1 L = 1 dm³ : le litre est le volume d’un cube de 1 dm de côté.']);
  const data = [['Volume', '1 m³', '1 dm³', '1 cm³'], ['Capacité', '1 000 L', '1 L', '1 mL']];
  let b = tableEl(170, y + 25, [190, 160, 160, 150], 62, data);
  b += txt(500, y + 205, 'm³ → dm³ → cm³ : × 1 000 à chaque pas ; L suit le dm³', 22, OCRE, 'bold', 'middle');
  b += txt(500, y + 245, 'un bidon de 20 L = 20 dm³ = 0,02 m³', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 285, s + b); })();
// S9 — grandeurs produits
figs.u5f9 = (() => { const { s, y } = head('Les grandeurs produits', ['Aire = L × l ; volume = aire × h ; énergie = puissance × temps.']);
  const top = y + 25;
  let b = `<rect x="170" y="${top}" width="280" height="170" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`;
  b += txt(310, top + 205, 'L = 7 m', 21, GREEN, 'bold', 'middle') + txt(120, top + 90, 'l = 4 m', 21, GREEN, 'bold', 'middle');
  b += txt(310, top + 90, 'A = 7 × 4 = 28 m²', 22, GREEN, 'bold', 'middle');
  b += box(560, top + 20, 370, 120, '', '#FFF3E0', OCRE, 20);
  b += txt(745, top + 55, 'grandeur produit :', 21, OCRE, 'bold', 'middle')
    + txt(745, top + 90, 'les UNITÉS se multiplient', 20, OCRE, 'bold', 'middle')
    + txt(745, top + 122, 'm × m = m² ; kW × h = kWh', 20, OCRE, 'normal', 'middle');
  return svg(1000, top + 255, s + b); })();
// S10 — grandeurs quotients
figs.u5f10 = (() => { const { s, y } = head('Les grandeurs quotients', ['Vitesse = distance ÷ temps ; débit = volume ÷ temps.']);
  const top = y + 25;
  let b = box(120, top + 20, 250, 90, '', '#E3F2FD', '#1565C0', 22) + box(420, top + 20, 250, 90, '', '#E8F5E9', GREEN, 22) + box(720, top + 20, 210, 90, '', '#FDE7EF', PINK2, 22);
  b += txt(245, top + 55, 'distance', 21, '#1565C0', 'bold', 'middle') + txt(245, top + 90, '180 km', 22, '#1565C0', 'bold', 'middle')
    + txt(545, top + 55, 'temps', 21, GREEN, 'bold', 'middle') + txt(545, top + 90, '3 h', 22, GREEN, 'bold', 'middle')
    + txt(825, top + 55, 'vitesse', 21, PINK2, 'bold', 'middle') + txt(825, top + 90, '60 km/h', 22, PINK2, 'bold', 'middle');
  b += txt(395, top + 70, '÷', 30, '#333', 'bold', 'middle') + txt(697, top + 70, '=', 30, '#333', 'bold', 'middle');
  b += txt(500, top + 170, 'grandeur quotient : les unités se divisent → km/h, L/min, Ar/kg', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 205, s + b); })();
// S11 — unités composées
figs.u5f11 = (() => { const { s, y } = head('Les unités composées au quotidien', ['km/h, Ar/kg, hab/km², L/100 km : des quotients qui parlent.']);
  const data = [['Unité', 'Signification', 'Exemple'], ['km/h', 'kilomètres par heure', 'taxi-brousse : 60 km/h'], ['Ar/kg', 'ariary par kilogramme', 'riz : 3 000 Ar/kg'], ['hab/km²', 'habitants par km²', 'Analamanga : 500 hab/km²'], ['L/min', 'litres par minute', 'robinet : 8 L/min']];
  let b = tableEl(100, y + 20, [160, 330, 310], 56, data);
  return svg(1000, y + 20 + 5 * 56 + 40, s + b); })();
// S12 — k et k²
figs.u5f12 = (() => { const { s, y } = head('Agrandir : longueurs × k, aires × k²', ['Côté doublé (k = 2) → aire quadruplée (k² = 4).']);
  const top = y + 30, a = 85;
  let b = `<rect x="150" y="${top + 2 * a - a}" width="${a}" height="${a}" fill="#BBDEFB" stroke="#1565C0" stroke-width="3"/>`;
  b += txt(150 + a / 2, top + 2 * a + 35, '1 × 1 = 1 carré', 20, '#1565C0', 'bold', 'middle');
  b += `<rect x="480" y="${top}" width="${2 * a}" height="${2 * a}" fill="#C8E6C9" stroke="${GREEN}" stroke-width="3"/>`;
  b += seg(480 + a, top, 480 + a, top + 2 * a, GREEN, 2) + seg(480, top + a, 480 + 2 * a, top + a, GREEN, 2);
  b += txt(480 + a, top + 2 * a + 35, '2 × 2 = 4 carrés', 20, GREEN, 'bold', 'middle');
  b += arrow(265, top + 60, 455, top + 60, OCRE, 3) + txt(360, top + 40, 'k = 2', 22, OCRE, 'bold', 'middle');
  b += txt(810, top + 80, 'aire × k²', 24, PINK2, 'bold', 'middle') + txt(810, top + 115, '= × 4', 24, PINK2, 'bold', 'middle');
  return svg(1000, top + 2 * a + 75, s + b); })();
// S13 — k³
figs.u5f13 = (() => { const { s, y } = head('Agrandir : volumes × k³', ['Arête doublée (k = 2) → volume multiplié par 8 (k³).']);
  const top = y + 30;
  const cube = (x, yy, a, f1, f2, st) => {
    const d = a * 0.45;
    let r = `<rect x="${x}" y="${yy}" width="${a}" height="${a}" fill="${f1}" stroke="${st}" stroke-width="2.5"/>`;
    r += poly([[x, yy], [x + d, yy - d], [x + a + d, yy - d], [x + a, yy]], f2, st, 2.5);
    r += poly([[x + a, yy], [x + a + d, yy - d], [x + a + d, yy + a - d], [x + a, yy + a]], f2, st, 2.5);
    return r;
  };
  let b = cube(160, top + 120, 80, '#BBDEFB', '#90CAF9', '#1565C0');
  b += txt(215, top + 245, '1 cube', 20, '#1565C0', 'bold', 'middle');
  b += cube(480, top + 80, 160, '#C8E6C9', '#A5D6A7', GREEN);
  b += seg(480 + 80, top + 80, 480 + 80, top + 240, GREEN, 1.5) + seg(480, top + 160, 640, top + 160, GREEN, 1.5);
  b += txt(560, top + 285, '2 × 2 × 2 = 8 cubes', 20, GREEN, 'bold', 'middle');
  b += arrow(280, top + 150, 455, top + 150, OCRE, 3) + txt(368, top + 128, 'k = 2', 22, OCRE, 'bold', 'middle');
  b += txt(850, top + 150, 'volume × k³ = × 8', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 325, s + b); })();

function circ(cx, cy, r, color = BLUE, wd = 3.5, dash = '') {
  return `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${wd}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
}

const S = [
  {
    t: 'Décrire une pyramide', comp: 'Mesure', theme: 'Pyramide : base, sommet, faces, hauteur',
    goal: 'décrire une pyramide par sa base, son sommet, ses faces latérales et sa hauteur',
    mat: 'Solides en carton, squelettes de pyramides en bambou, cahier',
    revQ: 'Décris un prisme droit : faces, arêtes, sommets.',
    revRA: 'Deux bases superposables et parallèles, des faces latérales rectangulaires.',
    situation: 'Les toits des cases traditionnelles, les greniers à riz surélevés, les pyramides d’Égypte : partout la même silhouette qui monte en pointe. Ce solide qui réunit toutes ses faces en un sommet unique mérite une carte d’identité précise.',
    def: 'Une pyramide est un solide dont la base est un polygone et dont les faces latérales sont des triangles qui se rejoignent en un même point, le sommet. La hauteur de la pyramide est le segment issu du sommet et perpendiculaire au plan de la base.',
    autrement: 'un plancher polygonal, des murs triangulaires, et tout se rejoint en une pointe.',
    concept: 'La pyramide se nomme d’après sa base : pyramide à base carrée (comme à Gizeh), triangulaire (appelée aussi tétraèdre), hexagonale… Comptage pour une base à n côtés : n + 1 faces, n + 1 sommets, 2n arêtes — vérification : base carrée, 5 faces, 5 sommets, 8 arêtes. La hauteur est invisible de l’extérieur : elle plonge du sommet vers la base, perpendiculairement. Dans une pyramide régulière, la base est un polygone régulier et le sommet se projette exactement au centre de la base ; les faces latérales sont alors des triangles isocèles identiques.',
    synthese: 'pyramide = base polygonale + faces triangulaires réunies au sommet ; hauteur ⊥ base ; base à n côtés → n + 1 faces, n + 1 sommets, 2n arêtes.',
    method: ['Identifier la base (le polygone qui donne son nom au solide).', 'Repérer le sommet et compter faces, sommets, arêtes.', 'Situer la hauteur : du sommet, perpendiculaire au plan de base.'],
    exemple: 'Pyramide à base carrée : 5 faces (1 carré + 4 triangles), 5 sommets, 8 arêtes ; tétraèdre : 4 faces triangulaires.',
    erreur: 'Confondre la hauteur de la pyramide avec l’arête latérale : l’arête relie le sommet à un coin de la base, en biais ; la hauteur tombe droit, perpendiculaire à la base — elle est plus courte !',
    saistu: 'La pyramide de Khéops, bâtie il y a 4 500 ans, fut le plus haut monument du monde pendant 3 800 ans : 146 mètres, une base carrée de 230 m de côté… et une orientation nord-sud précise à 0,05 degré. Les géomètres de l’Égypte ancienne forcent encore le respect !',
    exos: ['Pyramide à base carrée. a) Combien de faces ? b) Combien de sommets ? d) Combien d’arêtes ? e) Quelle est la nature des faces latérales ?',
      'Même questions pour une pyramide à base hexagonale : a) faces ; b) sommets ; d) arêtes ; e) nom de la pyramide à base triangulaire ?',
      'a) Quelle différence entre hauteur et arête latérale ? b) Dans une pyramide régulière, où tombe la hauteur ? d) Les faces latérales d’une pyramide régulière sont des triangles… ? e) Cite deux objets en forme de pyramide autour de toi.'],
    corr: ['a) 5 ; b) 5 ; d) 8 ; e) des triangles.',
      'a) 7 ; b) 7 ; d) 12 ; e) le tétraèdre.',
      'a) la hauteur est perpendiculaire à la base, l’arête rejoint un coin en biais ; b) au centre de la base ; d) isocèles identiques ; e) toit pointu, grenier à riz, tente…'],
    fig: 'u5f1'
  },
  {
    t: 'Décrire un cône de révolution', comp: 'Mesure', theme: 'Cône : disque de base, sommet, génératrice, hauteur',
    goal: 'décrire un cône de révolution par son disque de base, son sommet, sa hauteur et sa génératrice',
    mat: 'Cônes en carton (cornets), triangle rectangle en carton à faire tourner',
    revQ: 'Décris un cylindre : bases, surface latérale.',
    revRA: 'Deux disques superposables et parallèles reliés par une surface courbe.',
    situation: 'Fais tourner très vite un triangle rectangle en carton autour d’un de ses côtés de l’angle droit : tes yeux voient naître… un cône ! C’est pour cela qu’on l’appelle cône « de révolution » — il naît d’un tour complet.',
    def: 'Un cône de révolution est le solide engendré par un triangle rectangle qui tourne autour d’un côté de son angle droit. Sa base est un disque, son sommet est au-dessus du centre de la base ; la hauteur joint le sommet au centre du disque, et la génératrice joint le sommet à un point du cercle de base.',
    autrement: 'un chapeau pointu parfaitement rond : h tient debout au centre, g descend en pente jusqu’au bord.',
    concept: 'Trois longueurs décrivent le cône : le rayon r du disque de base, la hauteur h (verticale, cachée à l’intérieur) et la génératrice g (la pente extérieure, visible). Elles ne sont pas indépendantes : le triangle rectangle qui engendre le cône a pour côtés h et r, et pour hypoténuse g — d’où g² = h² + r², et g est toujours la plus grande des trois. Toutes les génératrices d’un même cône ont la même longueur : c’est la perfection de la révolution. Le cornet de glace, l’entonnoir, le chapeau : autant de cônes du quotidien.',
    synthese: 'cône de révolution : disque de base (rayon r), sommet au-dessus du centre, hauteur h, génératrice g avec g² = h² + r².',
    method: ['Identifier le disque de base et son rayon r.', 'Distinguer la hauteur h (intérieure, verticale) de la génératrice g (pente).', 'Relier les trois longueurs : g est l’hypoténuse du triangle générateur.'],
    exemple: 'r = 3 cm et h = 4 cm → g² = 9 + 16 = 25, donc g = 5 cm.',
    erreur: 'Confondre h et g sur un dessin : la génératrice longe la surface du cône, la hauteur plonge au centre. Mesurer la pente en croyant mesurer la hauteur fausse tous les calculs !',
    saistu: 'Les volcans dessinent des cônes presque parfaits : les projections retombent uniformément autour de la cheminée. Les cheminées volcaniques de l’Itasy ou de l’Ankaratra, près d’Antananarivo, en gardent les silhouettes — des cônes de révolution géants endormis.',
    exos: ['Pour un cône : a) quelle est la forme de la base ? b) où se trouve le sommet ? d) comment s’appelle le segment sommet-bord du disque ? e) toutes les génératrices ont-elles la même longueur ?',
      'r = 6 cm, h = 8 cm. a) Que vaut g² ? b) Que vaut g ? d) Laquelle des trois longueurs est la plus grande ? e) Peut-on avoir g = h ?',
      'Quel solide engendre : a) un triangle rectangle tournant autour d’un côté de l’angle droit ? b) un rectangle tournant autour d’un côté ? d) un demi-disque tournant autour de son diamètre ? e) cite deux cônes de la vie courante.'],
    corr: ['a) un disque ; b) au-dessus du centre de la base ; d) la génératrice ; e) oui.',
      'a) 36 + 64 = 100 ; b) 10 cm ; d) g ; e) non : g² = h² + r² impose g plus grand que h dès que r n’est pas nul.',
      'a) un cône ; b) un cylindre ; d) une boule ; e) cornet de glace, entonnoir, chapeau pointu…'],
    fig: 'u5f2'
  },
  {
    t: 'Construire les patrons de la pyramide et du cône', comp: 'Mesure', theme: 'Patrons : solides mis à plat',
    goal: 'construire le patron d’une pyramide régulière et celui d’un cône de révolution',
    mat: 'Carton, règle, compas, ciseaux, colle',
    revQ: 'Qu’est-ce que le patron d’un solide ?',
    revRA: 'Son déploiement à plat, en une seule pièce, prêt à plier.',
    situation: 'L’artisan d’Ambositra fabrique des boîtes pyramidales en une seule feuille de carton : il trace une figure plate étrange, découpe, plie… et la pyramide surgit ! Cette figure magique, c’est le patron.',
    def: 'Le patron d’un solide est une figure plane, d’un seul tenant, qui reconstitue le solide par pliage. Le patron d’une pyramide régulière est sa base entourée de ses triangles latéraux ; celui d’un cône est un disque (la base) accolé à un secteur circulaire de rayon g (la surface latérale déroulée).',
    autrement: 'le patron, c’est le solide déshabillé et étalé par terre, sans déchirure ni morceau double.',
    concept: 'Pour la pyramide à base carrée : un carré central, et sur chaque côté un triangle isocèle rabattu vers l’extérieur — 4 triangles identiques dont les pointes se relèveront vers le sommet. Pour le cône, le déroulage réserve une surprise : la surface courbe s’étale en SECTEUR de cercle, dont le rayon est la génératrice g (et non h !) et dont l’arc mesure exactement le périmètre du disque de base (2πr) — sinon le cornet bâille ou se chevauche. Contrôles avant découpage : longueurs à plier égales deux à deux, et arc du secteur = circonférence de la base.',
    synthese: 'pyramide : base + triangles rabattus ; cône : disque + secteur de rayon g dont l’arc vaut 2πr ; toujours contrôler les longueurs qui se recollent.',
    method: ['Tracer la base exacte (polygone ou disque).', 'Rabattre les faces latérales (triangles) ou tracer le secteur de rayon g.', 'Contrôler les recollements : côtés égaux, arc = 2πr ; découper, plier, coller.'],
    exemple: 'Cône r = 3 cm, g = 9 cm : secteur de rayon 9 cm et d’arc 2π × 3 ≈ 18,8 cm, soit un angle de 360° × 3/9 = 120°.',
    erreur: 'Tracer le secteur du cône avec le rayon h au lieu de g : le patron, trop court en pente, ne refermera jamais le cornet ! Le secteur se trace TOUJOURS au rayon g.',
    saistu: 'Les couturières utilisent des patrons depuis des siècles : une robe est un « solide » de tissu construit à partir de pièces planes ! Et les cartonniers industriels optimisent leurs patrons au millimètre : sur des millions de boîtes, chaque cm² de carton économisé compte.',
    exos: ['Patron d’une pyramide à base carrée de côté 4 cm. a) Que trace-t-on au centre ? b) Combien de triangles autour ? d) Ces triangles sont-ils identiques ? e) Quels côtés doivent être égaux pour le pliage ?',
      'Patron d’un cône avec r = 2 cm et g = 6 cm. a) Rayon du disque de base ? b) Rayon du secteur ? d) Longueur de l’arc du secteur ? e) Angle du secteur ?',
      'Ces patrons sont-ils corrects ? a) carré + 3 triangles ; b) carré + 4 triangles identiques rabattus ; d) disque + secteur de rayon h ; e) disque + secteur de rayon g d’arc 2πr.'],
    corr: ['a) le carré de base ; b) 4 ; d) oui (pyramide régulière) ; e) les côtés des triangles qui se rejoignent au sommet.',
      'a) 2 cm ; b) 6 cm ; d) 2π × 2 ≈ 12,6 cm ; e) 360° × 2/6 = 120°.',
      'a) non : il manque un triangle ; b) oui ; d) non : il faut le rayon g ; e) oui.'],
    fig: 'u5f3'
  },
  {
    t: 'Calculer l’aire latérale d’une pyramide', comp: 'Mesure', theme: 'Aire latérale de la pyramide régulière',
    goal: 'calculer l’aire latérale d’une pyramide régulière comme somme des aires des triangles',
    mat: 'Patrons quadrillés, formulaire d’aires, cahier',
    revQ: 'Aire d’un triangle de base 6 cm et de hauteur 5 cm ?',
    revRA: '6 × 5 ÷ 2 = 15 cm².',
    situation: 'Combien de tôle pour couvrir le toit pyramidal du kiosque de l’école ? Pas besoin de la base (c’est le plafond !) : seules comptent les faces en pente. C’est l’aire latérale.',
    def: 'L’aire latérale d’une pyramide est la somme des aires de ses faces latérales, sans la base. Pour une pyramide régulière, les faces sont des triangles identiques : aire latérale = nombre de faces × aire d’une face ; l’aire totale ajoute l’aire de la base.',
    autrement: 'on compte les murs en pente, pas le plancher ; régulière = un triangle calculé, puis multiplié.',
    concept: 'La hauteur à utiliser dans chaque triangle est l’APOTHÈME de la pyramide : la hauteur de la face triangulaire, tracée sur la face elle-même, du sommet au milieu d’un côté de base. Ce n’est NI la hauteur h de la pyramide (intérieure), NI l’arête latérale (en biais vers un coin). Pour une base carrée de côté c et un apothème a : aire latérale = 4 × (c × a ÷ 2) = 2 × c × a. Le choix latérale/totale dépend du problème : peindre un toit → latérale ; emballer entièrement un objet → totale (on ajoute la base).',
    synthese: 'aire latérale = somme des triangles (régulière : n × aire d’une face, avec l’apothème comme hauteur) ; totale = latérale + base.',
    method: ['Identifier le côté de base c et l’apothème a de la face.', 'Calculer l’aire d’une face : c × a ÷ 2.', 'Multiplier par le nombre de faces ; ajouter la base si l’aire totale est demandée.'],
    exemple: 'Base carrée c = 6 cm, apothème a = 5 cm : latérale = 4 × 15 = 60 cm² ; totale = 60 + 36 = 96 cm².',
    erreur: 'Prendre la hauteur h de la pyramide comme hauteur des triangles : h est INTÉRIEURE au solide, l’apothème est SUR la face, toujours plus long que h. Le toit calculé avec h manquerait de tôle !',
    saistu: 'Le toit pyramidal est roi dans l’architecture des hautes terres malgaches : les lapa traditionnels et les clochers d’églises d’Antananarivo portent des pyramides élancées — les charpentiers calculent leurs surfaces de tôle exactement comme toi aujourd’hui.',
    exos: ['Pyramide régulière à base carrée, côté 6 cm, apothème 5 cm. a) Aire d’une face ? b) Aire latérale ? d) Aire de la base ? e) Aire totale ?',
      'Toit pyramidal : base carrée de 4 m, apothème 3 m. a) Aire d’un pan ? b) Aire de tôle nécessaire ? d) Faut-il compter la base ? e) Prix à 15 000 Ar le m² de tôle ?',
      'Pyramide à base triangulaire équilatérale de côté 8 cm, apothème des faces 7 cm. a) Nombre de faces latérales ? b) Aire d’une face ? d) Aire latérale ? e) Pourquoi ne peut-on pas finir l’aire totale sans une donnée de plus ?'],
    corr: ['a) 15 cm² ; b) 60 cm² ; d) 36 cm² ; e) 96 cm².',
      'a) 4 × 3 ÷ 2 = 6 m² ; b) 24 m² ; d) non, c’est le plafond ; e) 360 000 Ar.',
      'a) 3 ; b) 8 × 7 ÷ 2 = 28 cm² ; d) 84 cm² ; e) il faudrait l’aire de la base équilatérale (sa hauteur n’est pas donnée).'],
    fig: 'u5f4'
  },
  {
    t: 'Calculer l’aire latérale d’un cône', comp: 'Mesure', theme: 'Aire latérale du cône : π × r × g',
    goal: 'calculer l’aire latérale d’un cône de révolution avec la formule π × r × g',
    mat: 'Patrons de cônes, calculatrices, formulaire',
    revQ: 'Périmètre et aire d’un disque de rayon 3 cm ?',
    revRA: 'P = 2π × 3 ≈ 18,8 cm ; A = π × 9 ≈ 28,3 cm².',
    situation: 'Combien de papier pour fabriquer 100 cornets de friandises pour la kermesse ? Le cornet déroulé est un secteur de cercle… et son aire tient dans une formule de trois lettres : π r g.',
    def: 'L’aire latérale d’un cône de révolution de rayon r et de génératrice g est égale à π × r × g : c’est l’aire du secteur circulaire obtenu en déroulant la surface courbe. L’aire totale ajoute le disque de base : π × r × g + π × r².',
    autrement: 'le tour de la base (π fois r) multiplié par la longueur de la pente (g).',
    concept: 'D’où vient πrg ? Le secteur déroulé a pour rayon g ; son aire est une fraction du disque complet de rayon g (aire πg²) : la fraction vaut arc/circonférence = 2πr/2πg = r/g. Donc aire = πg² × r/g = πrg — la formule se démontre en trois lignes ! Conséquences pratiques : à rayon fixé, doubler la pente g double l’aire ; et comme g est toujours plus grand que h, utiliser h sous-estimerait toujours le papier nécessaire. Pour l’aire totale d’un objet fermé (chapeau avec fond), on ajoute πr².',
    synthese: 'latérale = π r g (démonstration par le secteur : fraction r/g du disque de rayon g) ; totale = π r g + π r².',
    method: ['Identifier r (base) et g (pente) — calculer g par g² = h² + r² si besoin.', 'Appliquer π × r × g pour la surface courbe.', 'Ajouter π × r² si le problème demande l’aire totale.'],
    exemple: 'r = 3 cm, g = 5 cm : latérale = π × 15 ≈ 47,1 cm² ; totale ≈ 47,1 + 28,3 = 75,4 cm².',
    erreur: 'Écrire π × r × h : avec r = 3 et h = 4 (donc g = 5), on trouverait 37,7 cm² au lieu de 47,1 — un cornet trop petit ! La formule exige la génératrice g.',
    saistu: 'π ≈ 3,14159… apparaît dans toutes les formules rondes : périmètre, disque, cône, boule. Les Babyloniens l’estimaient à 3,125 il y a 4 000 ans ; aujourd’hui, les ordinateurs en connaissent des milliers de milliards de décimales — mais 3,14 suffit pour tous tes cornets !',
    exos: ['Cône avec r = 3 cm et g = 5 cm. a) Aire latérale exacte (en fonction de π) ? b) Valeur approchée ? d) Aire de la base ? e) Aire totale approchée ?',
      'Cornet de papier : r = 4 cm, h = 3 cm. a) Calcule g. b) Aire latérale ? d) Pour 100 cornets ? e) Convertis en m² (1 m² = 10 000 cm²).',
      'Un chapeau conique (sans fond) a r = 10 cm et g = 26 cm. a) Aire de tissu ? b) Faut-il ajouter πr² ? d) Valeur approchée en cm² ? e) Et si le tailleur confondait g et h = 24 cm, quelle surface manquerait ?'],
    corr: ['a) 15π cm² ; b) ≈ 47,1 cm² ; d) 9π ≈ 28,3 cm² ; e) ≈ 75,4 cm².',
      'a) g² = 16 + 9 = 25, g = 5 cm ; b) 20π ≈ 62,8 cm² ; d) ≈ 6 280 cm² ; e) ≈ 0,63 m².',
      'a) 260π cm² ; b) non, le chapeau n’a pas de fond ; d) ≈ 816,8 cm² ; e) 260π − 240π = 20π ≈ 62,8 cm² manquants.'],
    fig: 'u5f5'
  },
  {
    t: 'Calculer le volume d’une pyramide', comp: 'Mesure', theme: 'Volume de la pyramide : B × h ÷ 3',
    goal: 'calculer le volume d’une pyramide avec la formule V = B × h ÷ 3',
    mat: 'Pyramide et prisme transparents de même base et hauteur, riz ou sable',
    revQ: 'Volume d’un pavé de base 36 cm² et de hauteur 10 cm ?',
    revRA: 'V = 36 × 10 = 360 cm³.',
    situation: 'Expérience spectaculaire : remplis de riz une pyramide transparente et verse-la dans le prisme de même base et même hauteur. Il faut recommencer TROIS fois pour le remplir ! Le volume de la pyramide est le tiers de celui du prisme.',
    def: 'Le volume d’une pyramide est égal au tiers du produit de l’aire de sa base par sa hauteur : V = B × h ÷ 3, où B est l’aire de la base et h la hauteur (distance du sommet au plan de la base).',
    autrement: 'comme le prisme… mais divisé par 3 : la pointe fait perdre les deux tiers du volume.',
    concept: 'L’expérience du riz rend le « ÷ 3 » tangible : trois pyramidées remplissent exactement le prisme. La formule enchaîne deux calculs : d’abord B (aire du polygone de base — carré : c², rectangle : L × l, triangle : b × h ÷ 2), puis la multiplication par la hauteur de la pyramide et la division par 3. Vigilance sur les unités : B en cm² et h en cm donnent V en cm³ ; tout doit être dans la même unité de longueur avant le calcul. La hauteur est toujours la perpendiculaire, jamais l’arête oblique.',
    synthese: 'V = B × h ÷ 3 ; calculer B d’abord ; unités homogènes ; h = perpendiculaire du sommet à la base.',
    method: ['Calculer l’aire B de la base (selon le polygone).', 'Multiplier par la hauteur h de la pyramide.', 'Diviser par 3 et donner l’unité au cube.'],
    exemple: 'Base carrée de 6 cm, h = 10 cm : B = 36 cm², V = 36 × 10 ÷ 3 = 120 cm³.',
    erreur: 'Oublier le ÷ 3 : on calcule alors le prisme, trois fois trop grand ! Le réflexe : une POINTE = un TIERS.',
    saistu: 'La pyramide de Khéops contient environ 2 600 000 m³ de pierre : V = 230 × 230 × 146 ÷ 3. De quoi remplir mille piscines olympiques — déplacées bloc par bloc, sans camion, il y a 45 siècles !',
    exos: ['Pyramide à base carrée de côté 6 cm, hauteur 10 cm. a) Aire de la base ? b) B × h ? d) Volume ? e) Volume du prisme de même base et hauteur ?',
      'Calcule le volume : a) base 24 cm², h = 9 cm ; b) base carrée de 5 m, h = 12 m ; d) base rectangulaire 8 cm × 3 cm, h = 10 cm ; e) base triangulaire d’aire 15 cm², h = 7 cm.',
      'Un grenier à riz pyramidal a une base carrée de 3 m et une hauteur de 2 m. a) Volume ? b) En litres (1 m³ = 1 000 L) ? d) Combien de sacs de 50 L ? e) Si on double seulement la hauteur, le volume devient… ?'],
    corr: ['a) 36 cm² ; b) 360 ; d) 120 cm³ ; e) 360 cm³.',
      'a) 72 cm³ ; b) 100 m³ ; d) 80 cm³ ; e) 35 cm³.',
      'a) 9 × 2 ÷ 3 = 6 m³ ; b) 6 000 L ; d) 120 sacs ; e) 12 m³ : il double aussi.'],
    fig: 'u5f6'
  },
  {
    t: 'Calculer le volume d’un cône', comp: 'Mesure', theme: 'Volume du cône : π r² h ÷ 3',
    goal: 'calculer le volume d’un cône de révolution avec V = π × r² × h ÷ 3',
    mat: 'Cône et cylindre transparents, eau, calculatrices',
    revQ: 'Volume d’un cylindre de rayon 3 cm et de hauteur 10 cm ?',
    revRA: 'V = π × 9 × 10 ≈ 282,7 cm³.',
    situation: 'Même expérience que la pyramide, version ronde : trois cônes d’eau remplissent exactement le cylindre de même base et même hauteur. La règle du tiers est universelle — toute pointe divise par 3 !',
    def: 'Le volume d’un cône de révolution de rayon r et de hauteur h est égal au tiers du volume du cylindre correspondant : V = π × r² × h ÷ 3.',
    autrement: 'volume du cylindre (π r² h), coupé en trois : la pointe ne garde qu’une part.',
    concept: 'La formule emboîte trois étapes : r² d’abord (attention, c’est bien le rayon au carré, pas le diamètre !), puis × π × h, enfin ÷ 3. Avec r = 3 cm et h = 10 cm : V = π × 9 × 10 ÷ 3 = 30π ≈ 94,2 cm³. Le résultat exact s’écrit 30π cm³ ; la valeur approchée dépend de l’arrondi de π. Remarque puissante : c’est bien h qui entre dans le volume (la génératrice g servait pour l’AIRE latérale) — deux formules, deux longueurs, à ne jamais croiser. Si on donne le diamètre, on le divise par 2 avant tout.',
    synthese: 'V = π r² h ÷ 3 ; r au carré, h (pas g !) ; diamètre ÷ 2 d’abord ; résultat exact en π ou approché.',
    method: ['Vérifier r (diviser le diamètre par 2 si besoin) et h.', 'Calculer π × r² × h.', 'Diviser par 3 ; donner la forme exacte (en π) puis l’approchée.'],
    exemple: 'r = 3, h = 10 : V = 30π ≈ 94,2 cm³ ; diamètre 8 et h = 6 : r = 4, V = 32π ≈ 100,5 cm³.',
    erreur: 'Utiliser g au lieu de h dans le volume — ou r sans le mettre au carré. Les deux pièges ensemble peuvent doubler ou tripler le résultat ! Volume → h ; aire latérale → g.',
    saistu: 'Le tas de riz ou de sable déversé en vrac prend naturellement la forme d’un cône : l’angle de la pente, dit « angle de talus », vaut environ 30 à 35° pour le riz paddy. Les vendeuses du marché estiment le volume de leurs tas coniques… d’un seul regard !',
    exos: ['Cône de rayon 3 cm et hauteur 10 cm. a) Que vaut r² ? b) Volume exact en π ? d) Valeur approchée ? e) Volume du cylindre correspondant ?',
      'Calcule le volume (approché) : a) r = 2 cm, h = 9 cm ; b) r = 5 m, h = 6 m ; d) diamètre 10 cm, h = 12 cm ; e) r = 4 cm, h = 4 cm.',
      'Un tas de paddy conique a un diamètre de 2 m et une hauteur de 0,9 m. a) Rayon ? b) Volume exact ? d) Volume approché ? e) En litres, combien de sacs de 100 L ?'],
    corr: ['a) 9 ; b) 30π cm³ ; d) ≈ 94,2 cm³ ; e) 90π ≈ 282,7 cm³.',
      'a) 12π ≈ 37,7 cm³ ; b) 50π ≈ 157,1 m³ ; d) 100π ≈ 314,2 cm³ ; e) 64π/3 ≈ 67 cm³.',
      'a) 1 m ; b) 0,3π m³ ; d) ≈ 0,94 m³ ; e) ≈ 942 L, soit un peu plus de 9 sacs.'],
    fig: 'u5f7'
  },
  {
    t: 'Convertir volumes et capacités', comp: 'Mesure', theme: 'Correspondance m³, dm³, cm³ ↔ L, mL',
    goal: 'convertir entre unités de volume et unités de capacité grâce à 1 L = 1 dm³',
    mat: 'Cube de 1 dm³, bouteille d’1 L, tableaux de conversion',
    revQ: 'Combien de cm dans 1 dm ? de dm dans 1 m ?',
    revRA: '10 ; 10.',
    situation: 'Le réservoir affiche « 0,5 m³ », le seau « 10 L », la seringue « 5 mL » : trois langages pour la même chose — une quantité d’espace. La clé de traduction tient en une égalité : 1 L = 1 dm³.',
    def: 'Les unités de volume (m³, dm³, cm³) et les unités de capacité (L, mL…) mesurent la même grandeur. La correspondance fondamentale est 1 L = 1 dm³, d’où 1 m³ = 1 000 L et 1 mL = 1 cm³.',
    autrement: 'le litre, c’est le cube de 1 dm de côté : un gros dé de 10 cm d’arête rempli d’eau.',
    concept: 'Attention au piège des volumes : d’une unité cube à la suivante, on multiplie par 1 000 (et non par 10 !) car 1 dm³ = 10 × 10 × 10 cm³. La chaîne complète : 1 m³ = 1 000 dm³ = 1 000 000 cm³, doublée côté capacités : 1 m³ = 1 000 L et 1 cm³ = 1 mL. Dans le tableau de conversion des volumes, chaque unité occupe TROIS colonnes (centaines, dizaines, unités) — on déplace la virgule de 3 rangs par unité. Exemples malgaches : un bidon jaune de 20 L = 20 dm³ = 0,02 m³ ; une cuillerée de sirop de 5 mL = 5 cm³.',
    synthese: '1 L = 1 dm³ ; 1 m³ = 1 000 L ; 1 mL = 1 cm³ ; d’une unité cube à l’autre : × ou ÷ 1 000 (3 rangs de virgule).',
    method: ['Traduire d’abord vers l’unité cube correspondante (L → dm³, mL → cm³).', 'Convertir en déplaçant la virgule de 3 rangs par saut d’unité.', 'Retraduire en capacité si la réponse le demande.'],
    exemple: '3,5 m³ = 3 500 dm³ = 3 500 L ; 250 mL = 250 cm³ = 0,25 dm³ = 0,25 L.',
    erreur: 'Convertir les volumes comme les longueurs : « 1 m³ = 10 dm³ » — cent fois trop petit ! Le cube multiplie les trois dimensions : 1 m³ = 1 000 dm³.',
    saistu: 'Le fameux bidon jaune de 20 litres, omniprésent à Madagascar pour l’eau, vaut exactement 20 dm³ : rempli, il pèse 20 kg — car un litre d’eau pèse un kilogramme. Capacité, volume et masse se donnent la main !',
    exos: ['Convertis : a) 2 m³ en L ; b) 500 L en m³ ; d) 3 dm³ en cm³ ; e) 450 cm³ en L.',
      'Convertis : a) 5 L en cm³ ; b) 0,75 m³ en dm³ ; d) 1 200 mL en dm³ ; e) 0,003 m³ en mL.',
      'Un fût contient 0,2 m³ d’eau. a) En litres ? b) Combien de bidons de 20 L ? d) Combien de bouteilles de 1,5 L ? e) Un robinet le remplit à 8 L/min : durée du remplissage ?'],
    corr: ['a) 2 000 L ; b) 0,5 m³ ; d) 3 000 cm³ ; e) 0,45 L.',
      'a) 5 000 cm³ ; b) 750 dm³ ; d) 1,2 dm³ ; e) 3 000 mL.',
      'a) 200 L ; b) 10 bidons ; d) 133 bouteilles (et un fond) ; e) 25 minutes.'],
    fig: 'u5f8'
  },
  {
    t: 'Découvrir les grandeurs produits', comp: 'Mesure', theme: 'Grandeurs produits : aire, volume, énergie',
    goal: 'reconnaître une grandeur produit et composer ses unités par multiplication',
    mat: 'Factures JIRAMA, plans, étiquettes, cahier',
    revQ: 'Aire d’un rectangle de 7 m sur 4 m ?',
    revRA: '28 m².',
    situation: 'Sur la facture JIRAMA, l’énergie se compte en kWh : des kilowatts MULTIPLIÉS par des heures ! Comme l’aire (m × m) ou le volume (m² × m), certaines grandeurs naissent d’une multiplication — et leurs unités aussi.',
    def: 'Une grandeur produit est une grandeur obtenue en multipliant deux grandeurs ; son unité est le produit des unités. Exemples : l’aire (m × m = m²), le volume (m² × m = m³), l’énergie électrique (kW × h = kWh).',
    autrement: 'quand les grandeurs se multiplient, leurs unités se collent : mètre fois mètre donne mètre carré, kilowatt fois heure donne kilowattheure.',
    concept: 'La grandeur produit répond à des questions de cumul à deux dimensions : l’aire cumule des longueurs dans deux directions ; l’énergie cumule de la puissance pendant une durée — une ampoule de 0,1 kW allumée 10 h consomme 0,1 × 10 = 1 kWh, exactement comme une plaque de 1 kW pendant 1 h. L’unité composée garde la trace du calcul : « kWh » se lit « kilowatt-heure » et rappelle la multiplication. Le calcul du coût suit : énergie × prix unitaire — 30 kWh à 600 Ar/kWh font 18 000 Ar. Savoir lire l’unité, c’est déjà savoir refaire le calcul.',
    synthese: 'grandeur produit : valeurs multipliées, unités multipliées (m², m³, kWh) ; énergie = puissance × temps ; l’unité raconte le calcul.',
    method: ['Identifier les deux grandeurs multipliées.', 'Multiplier les valeurs ET composer les unités.', 'Interpréter le résultat (coût, comparaison…).'],
    exemple: 'Ampoule 100 W = 0,1 kW pendant 5 h : 0,5 kWh ; salle de 8 m sur 5 m : 40 m².',
    erreur: 'Additionner au lieu de multiplier les unités : « 3 kW pendant 2 h = 5 kWh » ?! Non : 3 × 2 = 6 kWh. L’unité kWh crie « multiplication » — il faut l’entendre !',
    saistu: 'Le kWh est l’unité des factures du monde entier. Une famille malgache raccordée consomme souvent 30 à 50 kWh par mois ; un foyer européen moyen… 250 kWh ! Lire sa facture, c’est faire des mathématiques citoyennes.',
    exos: ['Donne l’unité produit : a) longueur (m) × largeur (m) ; b) aire (m²) × hauteur (m) ; d) puissance (kW) × temps (h) ; e) débit (L/min) × temps (min).',
      'Calcule : a) énergie d’un fer de 1,2 kW pendant 2 h ; b) d’une ampoule de 0,06 kW pendant 10 h ; d) aire d’un champ de 120 m sur 45 m ; e) volume d’un bassin de 6 m² de fond sur 1,5 m de profondeur.',
      'La famille de Hery utilise chaque jour : 4 ampoules de 0,02 kW pendant 5 h et une TV de 0,1 kW pendant 4 h. a) Énergie des ampoules par jour ? b) De la TV ? d) Total mensuel (30 jours) ? e) Coût à 600 Ar/kWh ?'],
    corr: ['a) m² ; b) m³ ; d) kWh ; e) L.',
      'a) 2,4 kWh ; b) 0,6 kWh ; d) 5 400 m² ; e) 9 m³.',
      'a) 4 × 0,02 × 5 = 0,4 kWh ; b) 0,4 kWh ; d) 0,8 × 30 = 24 kWh ; e) 14 400 Ar.'],
    fig: 'u5f9'
  },
  {
    t: 'Découvrir les grandeurs quotients', comp: 'Mesure', theme: 'Grandeurs quotients : vitesse, débit',
    goal: 'reconnaître une grandeur quotient et calculer vitesse et débit',
    mat: 'Chronomètre, récipients gradués, horaires de taxi-brousse',
    revQ: 'Un taxi-brousse parcourt 180 km en 3 h. Combien de km par heure ?',
    revRA: '60 km par heure.',
    situation: 'Le taxi-brousse Antananarivo-Antsirabe (170 km) met environ 3 h 30. Le chauffeur annonce fièrement « du 50 de moyenne » ! Ce « 50 », c’est une distance DIVISÉE par un temps : la vitesse, première des grandeurs quotients.',
    def: 'Une grandeur quotient est obtenue en divisant une grandeur par une autre ; son unité est le quotient des unités, notée avec une barre : la vitesse (km/h) divise une distance par un temps, le débit (L/min) divise un volume par un temps.',
    autrement: 'la barre de l’unité est une vraie division : km/h se lit « kilomètres PAR heure » — combien de km pour chaque heure.',
    concept: 'La grandeur quotient répartit : la vitesse dit combien de kilomètres « par » heure, le débit combien de litres « par » minute. Du quotient v = d ÷ t découlent les deux formules sœurs : d = v × t et t = d ÷ v — un triangle de formules qui règle tous les problèmes de trajet. Même mécanique pour le débit : D = V ÷ t, V = D × t, t = V ÷ D. La vitesse moyenne gomme les variations : montées, arrêts, pointes — seuls comptent la distance totale et le temps total. Attention aux heures décimales : 3 h 30 = 3,5 h (et non 3,3 !).',
    synthese: 'quotient : valeur divisée, unités divisées (km/h, L/min) ; triangle v = d/t, d = v·t, t = d/v ; 3 h 30 = 3,5 h.',
    method: ['Identifier la grandeur répartie et la grandeur de référence.', 'Convertir le temps en heures (ou minutes) décimales.', 'Appliquer le quotient, ou l’une des formules dérivées.'],
    exemple: '170 km en 3,4 h → v = 50 km/h ; robinet : 120 L en 15 min → 8 L/min ; à 8 L/min pendant 25 min → 200 L.',
    erreur: 'Écrire 2 h 30 = 2,3 h : une demi-heure vaut 0,5 h ! Les minutes se divisent par 60 : 2 h 30 = 2,5 h ; 1 h 45 = 1,75 h.',
    saistu: 'Le guépard atteint 110 km/h, le paresseux plafonne à 0,2 km/h… et la tortue radiée de Madagascar à peine plus ! Mais sur une vie de 100 ans, la tortue parcourt des milliers de kilomètres : la régularité bat la vitesse.',
    exos: ['Un camion parcourt 240 km en 4 h. a) Vitesse moyenne ? b) Distance en 7 h au même rythme ? d) Temps pour 420 km ? e) Unité de la vitesse ?',
      'Un robinet remplit 90 L en 12 min. a) Débit ? b) Volume en 20 min ? d) Temps pour 300 L ? e) Débit en L/h ?',
      'Antananarivo-Toamasina : 350 km. a) Durée à 50 km/h ? b) À 70 km/h ? d) Le train met 12 h : sa vitesse moyenne ? e) Pourquoi « moyenne » — que cache ce mot sur une route de montagne ?'],
    corr: ['a) 60 km/h ; b) 420 km ; d) 7 h ; e) km/h.',
      'a) 7,5 L/min ; b) 150 L ; d) 40 min ; e) 450 L/h.',
      'a) 7 h ; b) 5 h ; d) ≈ 29 km/h ; e) la vitesse varie sans cesse : montées lentes, descentes rapides, arrêts — la moyenne lisse tout.'],
    fig: 'u5f10'
  },
  {
    t: 'Utiliser les unités composées', comp: 'Mesure', theme: 'Unités composées : km/h, Ar/kg, hab/km², conversions',
    goal: 'interpréter, comparer et convertir des unités composées de la vie courante',
    mat: 'Étiquettes de prix, cartes de densité, factures, cahier',
    revQ: 'Que signifie « 8 L/min » ?',
    revRA: '8 litres s’écoulent chaque minute.',
    situation: 'Au marché : riz à 3 000 Ar/kg ici, sac de 25 kg à 70 000 Ar là-bas. Lequel est le moins cher ? Impossible de comparer 3 000 et 70 000 directement — il faut la MÊME unité composée : l’Ar/kg tranche le débat.',
    def: 'Une unité composée combine deux unités par une multiplication (kWh) ou une division (km/h, Ar/kg, hab/km²). Comparer deux offres ou deux situations exige de les exprimer dans la même unité composée ; convertir une unité composée impose de convertir chacune de ses parties.',
    autrement: 'l’unité composée est une étiquette double : pour comparer deux étiquettes, il faut qu’elles parlent la même langue.',
    concept: 'La valeur unitaire (Ar/kg, Ar/L) est l’arbitre des achats : 70 000 ÷ 25 = 2 800 Ar/kg — le sac bat le détail. La densité de population (hab/km²) raconte les territoires : Analamanga dépasse 500 hab/km², le Melaky n’atteint pas 10. La conversion d’une unité composée traite ses deux étages : pour passer de km/h en m/s, on convertit les km en m (× 1 000) ET les heures en secondes (÷ 3 600) : 72 km/h = 72 000 m / 3 600 s = 20 m/s. Règle d’or : ne jamais comparer deux nombres dont les unités composées diffèrent.',
    synthese: 'valeur unitaire pour comparer les prix ; densité hab/km² pour les territoires ; conversion : traiter chaque étage de l’unité (km/h → m/s : × 1 000 puis ÷ 3 600).',
    method: ['Ramener chaque offre ou donnée à la même unité composée.', 'Pour convertir : convertir numérateur et dénominateur séparément.', 'Comparer alors les nombres — et seulement alors.'],
    exemple: '3 000 Ar/kg contre 70 000 Ar les 25 kg = 2 800 Ar/kg : le sac gagne ; 90 km/h = 25 m/s.',
    erreur: 'Comparer 3 000 et 70 000 « parce que ce sont les prix » : l’un est au kilo, l’autre au sac de 25 kg ! Sans unité commune, les nombres ne se parlent pas.',
    saistu: 'Madagascar compte environ 50 hab/km² en moyenne — mais ce chiffre cache tout : Antananarivo dépasse 20 000 hab/km² quand certaines zones du Sud-Ouest restent presque vides. Une moyenne nationale est une grandeur quotient… à manier avec esprit critique !',
    exos: ['Compare les prix : a) huile 12 000 Ar/L contre bidon de 5 L à 55 000 Ar ; b) savon 2 000 Ar l’unité contre lot de 6 à 10 800 Ar ; d) 3 kg de sucre à 13 500 Ar contre 5 kg à 23 000 Ar ; e) formule le réflexe à retenir.',
      'Convertis : a) 36 km/h en m/s ; b) 15 m/s en km/h ; d) 0,5 L/s en L/min ; e) 7 200 L/h en L/min.',
      'Une région de 5 000 km² compte 400 000 habitants. a) Densité ? b) Une autre fait 12 000 km² pour 600 000 hab : densité ? d) Laquelle est la plus densément peuplée ? e) Les deux densités réunies : peut-on les additionner pour une « densité totale » ? Pourquoi ?'],
    corr: ['a) bidon : 11 000 Ar/L, moins cher ; b) lot : 1 800 Ar l’unité, moins cher ; d) 4 500 contre 4 600 Ar/kg : les 3 kg gagnent ; e) toujours ramener au prix unitaire.',
      'a) 10 m/s ; b) 54 km/h ; d) 30 L/min ; e) 120 L/min.',
      'a) 80 hab/km² ; b) 50 hab/km² ; d) la première ; e) non : il faut additionner habitants ET surfaces puis rediviser — les quotients ne s’additionnent pas.'],
    fig: 'u5f11'
  },
  {
    t: 'Agrandir et réduire longueurs et aires', comp: 'Mesure', theme: 'Effet d’échelle : longueurs × k, aires × k²',
    goal: 'calculer l’effet d’un agrandissement ou d’une réduction sur les longueurs et les aires',
    mat: 'Quadrillages, carrés à découper, plans à l’échelle',
    revQ: 'Homothétie de rapport 2 : que deviennent les longueurs ?',
    revRA: 'Elles doublent.',
    situation: 'Vola agrandit sa photo au double pour l’encadrer. Le vendeur de cadres compte le verre AU m² … et demande quatre fois le prix ! Longueurs doublées, mais aire quadruplée : l’échelle ne traite pas tout le monde pareil.',
    def: 'Dans un agrandissement ou une réduction de rapport k, toutes les longueurs sont multipliées par k et toutes les aires par k². Les angles et la forme sont conservés.',
    autrement: 'les longueurs prennent l’escalier simple (× k), les aires l’escalier double (× k × k).',
    concept: 'Le quadrillage explique tout : un carré de côté 1 devient, pour k = 2, un carré de côté 2 qui contient 2 × 2 = 4 petits carrés. L’aire grandit dans DEUX directions à la fois, d’où le k². Pour k = 3 : aires × 9 ; pour une réduction k = 1/2 : aires ÷ 4. En sens inverse, si l’on sait que l’aire a été multipliée par 25, le rapport est k = 5. Application aux cartes : à l’échelle 1/1 000, 1 cm sur la carte vaut 10 m réels, mais 1 cm² de carte vaut 100 m² de terrain — les surfaces de la légende se convertissent au carré de l’échelle.',
    synthese: 'longueurs × k, aires × k² ; réduction : k entre 0 et 1 ; cartes : les surfaces se convertissent avec le carré de l’échelle.',
    method: ['Identifier le rapport k (ou le déduire d’une longueur connue).', 'Multiplier les longueurs par k, les aires par k².', 'Pour retrouver k depuis des aires : prendre le nombre dont le carré est le rapport des aires.'],
    exemple: 'k = 3 : périmètre 8 cm → 24 cm ; aire 5 cm² → 45 cm² ; aires multipliées par 49 → k = 7.',
    erreur: 'Multiplier l’aire par k « comme le reste » : pour k = 2, l’aire ne double pas, elle QUADRUPLE. Le prix du verre de Vola l’a prouvé à ses dépens !',
    saistu: 'C’est le secret des prix de pizzas : la pizza de 30 cm n’est pas « un peu » plus grande que celle de 15 cm — elle est QUATRE fois plus grande (k = 2, aire × 4). La grande est presque toujours la meilleure affaire !',
    exos: ['Agrandissement de rapport k = 3. a) Un côté de 4 cm devient… ? b) Un périmètre de 14 cm ? d) Une aire de 6 cm² ? e) Un angle de 50° ?',
      'Réduction de rapport k = 1/2. a) Longueur 12 cm → ? b) Aire 40 cm² → ? d) Si l’aire réduite vaut 7 cm², l’aire d’origine ? e) Quel k pour une aire divisée par 100 ?',
      'Sur un plan au 1/200, la maison mesure 6 cm sur 4 cm. a) Dimensions réelles ? b) Aire sur le plan ? d) Aire réelle ? e) Vérifie : aire réelle = aire du plan × 200².'],
    corr: ['a) 12 cm ; b) 42 cm ; d) 54 cm² ; e) 50° (inchangé).',
      'a) 6 cm ; b) 10 cm² ; d) 28 cm² ; e) k = 1/10.',
      'a) 12 m × 8 m ; b) 24 cm² ; d) 96 m² ; e) 24 cm² × 40 000 = 960 000 cm² = 96 m² ✓.'],
    fig: 'u5f12'
  },
  {
    t: 'Agrandir et réduire des volumes', comp: 'Mesure', theme: 'Effet d’échelle : volumes × k³',
    goal: 'calculer l’effet d’un agrandissement ou d’une réduction sur les volumes',
    mat: 'Cubes emboîtables, récipients semblables, cahier',
    revQ: 'Pour k = 2 : longueurs × ? aires × ?',
    revRA: '× 2 ; × 4.',
    situation: 'La petite marmite de Bodo contient 2 L. La grande, deux fois plus large, deux fois plus haute, deux fois plus profonde, contiendrait… 4 L ? Non : 16 L ! Car 2 × 2 × 2 = 8 fois le volume. L’espace se venge dans TROIS directions.',
    def: 'Dans un agrandissement ou une réduction de rapport k, tous les volumes sont multipliés par k³ : le volume grandit dans les trois dimensions à la fois.',
    autrement: 'longueur × k, aire × k², volume × k³ : un facteur k par dimension.',
    concept: 'Le cube emboîté le montre : un cube d’arête 1 devient, pour k = 2, un cube d’arête 2 qui contient 2 × 2 × 2 = 8 petits cubes. La hiérarchie complète s’énonce : longueurs × k, aires × k², volumes × k³ — et chaque grandeur choisit son exposant selon sa dimension. Pour k = 3, les volumes sont multipliés par 27 ; pour k = 1/2, divisés par 8. En sens inverse : volumes multipliés par 125 → k = 5. Cette loi gouverne la nature : un animal deux fois plus grand pèse huit fois plus, mais ses os n’ont que quatre fois plus de section — voilà pourquoi les géants des films s’effondreraient !',
    synthese: 'volumes × k³ (8 pour k = 2, 27 pour k = 3) ; réduction : ÷ k³ ; retrouver k : racine cubique du rapport des volumes.',
    method: ['Identifier k, puis choisir l’exposant selon la grandeur : 1, 2 ou 3.', 'Multiplier le volume par k³ (ou diviser pour une réduction).', 'En sens inverse : chercher le nombre dont le cube est le rapport des volumes.'],
    exemple: 'k = 2 : marmite de 2 L → 16 L ; k = 3 : réservoir de 5 m³ → 135 m³ ; volumes × 64 → k = 4.',
    erreur: 'Multiplier le volume par k ou k² : pour k = 2, la grande marmite ferait 4 L au lieu de 16 L — la moitié du riz resterait à cuire ! Volume = trois dimensions = k³.',
    saistu: 'La baleine bleue mesure environ 25 m, soit 12 fois un humain de 2 m… mais elle pèse 150 tonnes, près de 2 000 fois plus ! C’est la loi du k³ : la masse suit le volume, pas la taille. Les biologistes l’appellent la « loi d’échelle » — et elle explique pourquoi King Kong ne pourra jamais exister.',
    exos: ['Agrandissement k = 2. a) Volume 5 cm³ → ? b) Volume 2 L → ? d) Aire 10 cm² → ? e) Longueur 3 cm → ?',
      'a) k = 3 : volume 4 m³ → ? b) k = 1/2 : volume 40 L → ? d) volumes multipliés par 27 : k ? e) volumes divisés par 1 000 : k ?',
      'Une maquette de pirogue est au 1/10 (k = 1/10 de la vraie). a) La vraie mesure 8 m : longueur de la maquette ? b) La voile réelle fait 6 m² : aire sur la maquette ? d) La cale réelle contient 2 m³ : volume de la cale maquette ? e) Range les trois rapports utilisés.'],
    corr: ['a) 40 cm³ ; b) 16 L ; d) 40 cm² ; e) 6 cm.',
      'a) 108 m³ ; b) 5 L ; d) k = 3 ; e) k = 1/10.',
      'a) 0,8 m ; b) 0,06 m² ; d) 0,002 m³ = 2 L ; e) longueurs ÷ 10, aires ÷ 100, volumes ÷ 1 000.'],
    fig: 'u5f13'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Mesure',
  rag: 'démontrer une compréhension de la pyramide et du cône, des grandeurs composées et des effets d’échelle, et les utiliser pour mesurer et résoudre des problèmes.',
  valeurs: 'rigueur et justice',
  sessions: S,
  revision: {
    table: [
      ['Pyramide', 'Base polygonale + triangles réunis au sommet ; hauteur ⊥ base', 'Décrire, compter faces et arêtes'],
      ['Cône de révolution', 'Disque, sommet, h et g avec g² = h² + r²', 'Décrire et construire le patron'],
      ['Aires latérales', 'Pyramide : somme des triangles ; cône : π r g', 'Calculer tôle, papier, tissu'],
      ['Volumes', 'Pyramide : B h ÷ 3 ; cône : π r² h ÷ 3', 'Calculer greniers, tas, cornets'],
      ['Volumes et capacités', '1 L = 1 dm³ ; 1 m³ = 1 000 L ; 3 rangs par saut', 'Convertir sans se tromper'],
      ['Grandeurs composées et échelles', 'Produits (kWh) et quotients (km/h) ; k, k², k³', 'Comparer, convertir, agrandir']
    ],
    questions: [
      'Une pyramide à base carrée : nombre de faces, sommets, arêtes ?',
      'Cône : r = 6 cm, h = 8 cm. Calcule g puis l’aire latérale.',
      'Volume d’une pyramide de base 45 cm² et de hauteur 8 cm ? D’un cône de r = 3 cm, h = 7 cm ?',
      'Convertis : 2,4 m³ en L ; 350 cm³ en L ; 72 km/h en m/s.',
      'Agrandissement k = 3 : que deviennent une longueur de 5 cm, une aire de 8 cm², un volume de 2 cm³ ?'
    ],
    answers: [
      '5 faces, 5 sommets, 8 arêtes.',
      'g = 10 cm ; A = π × 6 × 10 = 60π ≈ 188,5 cm².',
      '120 cm³ ; 21π ≈ 66 cm³.',
      '2 400 L ; 0,35 L ; 20 m/s.',
      '15 cm ; 72 cm² ; 54 cm³.'
    ]
  },
  exam: {
    exos: [
      'a) Combien de faces latérales pour une pyramide à base hexagonale ? b) Quelle est la différence entre la hauteur et l’arête latérale d’une pyramide ? d) Dans un cône, quelle longueur relie le sommet au bord du disque ? e) Donne la relation entre g, h et r.',
      'Un cône a un rayon de 3 cm et une hauteur de 4 cm. a) Calcule g. b) Calcule l’aire latérale (valeur exacte). d) Calcule l’aire totale (valeur approchée). e) Quel est l’angle du secteur du patron ?',
      'a) Volume d’une pyramide à base carrée de côté 9 cm et de hauteur 10 cm ? b) Volume d’un cône de rayon 5 cm et de hauteur 9 cm (exact puis approché) ? d) Un grenier pyramidal de 54 m³ a une base de 27 m² : sa hauteur ? e) Trois cônes identiques remplissent un cylindre de 282 cm³ : volume d’un cône ?',
      'a) Convertis 3,2 m³ en litres. b) Convertis 450 mL en dm³. d) Un camion-citerne de 8 m³ se vide à 400 L/min : durée ? e) Compare : 4 000 Ar/kg ou 18 000 Ar les 5 kg ?',
      'Une photo de 10 cm × 15 cm est agrandie avec k = 4. a) Nouvelles dimensions ? b) Aire d’origine et aire agrandie ? d) Par combien l’aire est-elle multipliée ? e) Une statuette est réduite au 1/5 : son volume de 25 dm³ devient… ?'
    ],
    corr: [
      'a) 6 ; b) la hauteur est perpendiculaire à la base, l’arête rejoint un coin en biais ; d) la génératrice ; e) g² = h² + r². Un point par item.',
      'a) g = 5 cm ; b) 15π cm² ; d) 15π + 9π = 24π ≈ 75,4 cm² ; e) 360° × 3/5 = 216°. Un point par item.',
      'a) 270 cm³ ; b) 75π ≈ 235,6 cm³ ; d) h = 54 × 3 ÷ 27 = 6 m ; e) 94 cm³. Un point par item.',
      'a) 3 200 L ; b) 0,45 dm³ ; d) 8 000 ÷ 400 = 20 min ; e) 18 000 ÷ 5 = 3 600 Ar/kg : le lot de 5 kg est moins cher. Un point par item.',
      'a) 40 cm × 60 cm ; b) 150 cm² et 2 400 cm² ; d) 16 = k² ; e) 25 ÷ 125 = 0,2 dm³. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
