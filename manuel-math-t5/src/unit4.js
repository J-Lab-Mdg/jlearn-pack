// UNITÉ 4 — GÉOMÉTRIE (PE T5) : 9 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, rightAngle, PINK, PINK2, GREEN, GREENL, BLUE, OCRE, BLUEL } = L;

const arc = (cx, cy, r, a1, a2, color) => {
  const x1 = cx + r * Math.cos(a1), y1 = cy - r * Math.sin(a1), x2 = cx + r * Math.cos(a2), y2 = cy - r * Math.sin(a2);
  const large = Math.abs(a2 - a1) > Math.PI ? 1 : 0;
  return `<path d="M ${x1} ${y1} A ${r} ${r} 0 ${large} 0 ${x2} ${y2}" fill="none" stroke="${color}" stroke-width="3"/>`;
};
const tick = (x1, y1, x2, y2, n, color) => {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2, dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  const ux = dx / len, uy = dy / len, px = -uy, py = ux;
  let s = '';
  for (let k = 0; k < n; k++) {
    const ox = mx + (k - (n - 1) / 2) * 9 * ux, oy = my + (k - (n - 1) / 2) * 9 * uy;
    s += seg(ox - 8 * px, oy - 8 * py, ox + 8 * px, oy + 8 * py, color, 3);
  }
  return s;
};

const figs = {};
// S1 — angles
figs.u4f1 = (() => { const { s, y } = head('Trois familles d’angles', ['On compare chaque angle au coin de l’équerre : l’angle droit.']);
  const top = y + 35, Y = top + 150;
  let b = '';
  // aigu
  b += seg(80, Y, 260, Y, BLUE, 4) + seg(80, Y, 80 + 180 * Math.cos(0.62), Y - 180 * Math.sin(0.62), BLUE, 4);
  b += arc(80, Y, 52, 0, 0.62, PINK2) + txt(170, Y + 40, 'AIGU', 23, GREEN, 'bold', 'middle') + txt(170, Y + 70, 'plus fermé que l’angle droit', 17, '#555', 'normal', 'middle');
  // droit
  b += seg(410, Y, 590, Y, BLUE, 4) + seg(410, Y, 410, Y - 170, BLUE, 4);
  b += rightAngle(410, Y, 1, 0, 0, -1, 26) + txt(500, Y + 40, 'DROIT', 23, PINK2, 'bold', 'middle') + txt(500, Y + 70, 'le coin de l’équerre', 17, '#555', 'normal', 'middle');
  // obtus
  b += seg(740, Y, 920, Y, BLUE, 4) + seg(740, Y, 740 + 180 * Math.cos(2.3), Y - 180 * Math.sin(2.3), BLUE, 4);
  b += arc(740, Y, 52, 0, 2.3, OCRE) + txt(830, Y + 40, 'OBTUS', 23, OCRE, 'bold', 'middle') + txt(830, Y + 70, 'plus ouvert que l’angle droit', 17, '#555', 'normal', 'middle');
  b += txt(500, Y + 112, 'aigu &lt; droit &lt; obtus : l’équerre départage sans se tromper', 20, BLUE, 'bold', 'middle');
  return svg(1000, Y + 144, s + b); })();
// S2 — triangles par côtés
figs.u4f2 = (() => { const { s, y } = head('Classer les triangles par leurs côtés', ['Les petits traits identiques marquent les côtés de même longueur.']);
  const top = y + 30, Y = top + 170;
  let b = '';
  // équilatéral
  b += poly([[90, Y], [270, Y], [180, Y - 156]], GREENL, GREEN, 3.5);
  b += tick(90, Y, 270, Y, 1, GREEN) + tick(90, Y, 180, Y - 156, 1, GREEN) + tick(270, Y, 180, Y - 156, 1, GREEN);
  b += txt(180, Y + 36, 'ÉQUILATÉRAL', 21, GREEN, 'bold', 'middle') + txt(180, Y + 64, '3 côtés égaux', 17, '#555', 'normal', 'middle');
  // isocèle
  b += poly([[420, Y], [580, Y], [500, Y - 170]], '#FDE7EF', PINK2, 3.5);
  b += tick(420, Y, 500, Y - 170, 1, PINK2) + tick(580, Y, 500, Y - 170, 1, PINK2) + tick(420, Y, 580, Y, 2, '#888');
  b += txt(500, Y + 36, 'ISOCÈLE', 21, PINK2, 'bold', 'middle') + txt(500, Y + 64, '2 côtés égaux', 17, '#555', 'normal', 'middle');
  // scalène
  b += poly([[730, Y], [940, Y], [790, Y - 140]], '#FFF3E0', OCRE, 3.5);
  b += tick(730, Y, 940, Y, 1, '#888') + tick(730, Y, 790, Y - 140, 2, '#888') + tick(940, Y, 790, Y - 140, 3, '#888');
  b += txt(835, Y + 36, 'SCALÈNE', 21, OCRE, 'bold', 'middle') + txt(835, Y + 64, '3 côtés différents', 17, '#555', 'normal', 'middle');
  b += txt(500, Y + 106, 'on mesure (ou on compare) les trois côtés, puis on nomme la famille', 19, BLUE, 'bold', 'middle');
  return svg(1000, Y + 138, s + b); })();
// S3 — triangles par angles
figs.u4f3 = (() => { const { s, y } = head('Classer les triangles par leurs angles', ['Un seul angle suffit parfois à baptiser le triangle entier.']);
  const top = y + 30, Y = top + 170;
  let b = '';
  // rectangle
  b += poly([[90, Y], [290, Y], [90, Y - 150]], BLUEL, BLUE, 3.5);
  b += rightAngle(90, Y, 1, 0, 0, -1, 24);
  b += txt(190, Y + 36, 'RECTANGLE', 21, BLUE, 'bold', 'middle') + txt(190, Y + 64, 'un angle droit', 17, '#555', 'normal', 'middle');
  // tous angles aigus
  b += poly([[420, Y], [600, Y], [520, Y - 160]], GREENL, GREEN, 3.5);
  b += arc(420, Y, 38, 0, 1.01, GREEN) + arc(600, Y, 38, Math.PI - 1.1, Math.PI, GREEN);
  b += txt(510, Y + 36, 'TOUS ANGLES AIGUS', 20, GREEN, 'bold', 'middle') + txt(510, Y + 64, 'trois angles fermés', 17, '#555', 'normal', 'middle');
  // un angle obtus
  b += poly([[720, Y], [950, Y], [880, Y - 120]], '#FFF3E0', OCRE, 3.5);
  b += arc(720, Y, 40, 0, 0.5, OCRE) + arc(880, Y - 120, 34, -Math.PI + 0.5, -0.45, PINK2);
  b += txt(835, Y + 36, 'UN ANGLE OBTUS', 20, OCRE, 'bold', 'middle') + txt(835, Y + 64, 'un angle grand ouvert', 17, '#555', 'normal', 'middle');
  b += txt(500, Y + 106, 'le triangle rectangle porte le coin de l’équerre dans son angle', 19, PINK2, 'bold', 'middle');
  return svg(1000, Y + 138, s + b); })();
// S4 — propriétés du triangle
figs.u4f4 = (() => { const { s, y } = head('La carte d’identité du triangle', ['3 sommets, 3 côtés, 3 angles : tout se nomme avec les lettres A, B, C.']);
  const top = y + 40, Y = top + 230;
  let b = poly([[300, Y], [700, Y], [560, Y - 210]], GREENL, GREEN, 4);
  b += dot(300, Y, 8, PINK2) + dot(700, Y, 8, PINK2) + dot(560, Y - 210, 8, PINK2);
  b += txt(272, Y + 10, 'A', 28, PINK2, 'bold', 'middle') + txt(728, Y + 10, 'B', 28, PINK2, 'bold', 'middle') + txt(560, Y - 232, 'C', 28, PINK2, 'bold', 'middle');
  b += txt(500, Y + 34, 'côté [AB]', 21, BLUE, 'bold', 'middle');
  b += txt(395, Y - 125, 'côté [AC]', 21, BLUE, 'bold', 'middle');
  b += txt(672, Y - 118, 'côté [BC]', 21, BLUE, 'bold', 'middle');
  b += arc(300, Y, 46, 0, 0.78, OCRE) + txt(372, Y - 32, 'angle A', 19, OCRE, 'bold', 'middle');
  b += txt(500, Y + 76, 'le triangle ABC : sommets A, B, C — côtés [AB], [BC], [CA] — angles en A, en B, en C', 19, GREEN, 'bold', 'middle');
  return svg(1000, Y + 108, s + b); })();
// S5 — polygones et quadrilatères
figs.u4f5 = (() => { const { s, y } = head('La famille des polygones', ['Une ligne brisée FERMÉE : chaque figure se nomme d’après son nombre de côtés.']);
  const top = y + 30, Y = top + 130;
  let b = poly([[70, Y], [190, Y], [130, Y - 110]], GREENL, GREEN, 3) + txt(130, Y + 32, 'triangle (3)', 18, GREEN, 'bold', 'middle');
  b += poly([[250, Y], [370, Y], [370, Y - 110], [250, Y - 110]], BLUEL, BLUE, 3) + rightAngle(250, Y, 1, 0, 0, -1, 18) + txt(310, Y + 32, 'carré (4)', 18, BLUE, 'bold', 'middle');
  b += poly([[430, Y], [610, Y], [610, Y - 95], [430, Y - 95]], BLUEL, BLUE, 3) + txt(520, Y + 32, 'rectangle (4)', 18, BLUE, 'bold', 'middle');
  b += poly([[670, Y], [740, Y - 55], [670, Y - 110], [600, Y - 55]], '#FDE7EF', PINK2, 3) + txt(670, Y + 32, 'losange (4)', 18, PINK2, 'bold', 'middle');
  b += poly([[790, Y], [950, Y], [910, Y - 95], [830, Y - 95]], '#FFF3E0', OCRE, 3) + txt(870, Y + 32, 'trapèze (4)', 18, OCRE, 'bold', 'middle');
  const Y2 = Y + 205;
  const penta = [], hexa = [];
  for (let k = 0; k < 5; k++) penta.push([260 + 75 * Math.cos(Math.PI / 2 + k * 2 * Math.PI / 5), Y2 - 75 * Math.sin(Math.PI / 2 + k * 2 * Math.PI / 5)]);
  for (let k = 0; k < 6; k++) hexa.push([520 + 75 * Math.cos(k * Math.PI / 3), Y2 - 75 * Math.sin(k * Math.PI / 3)]);
  b += poly(penta, GREENL, GREEN, 3) + txt(260, Y2 + 105, 'pentagone (5)', 18, GREEN, 'bold', 'middle');
  b += poly(hexa, '#FDE7EF', PINK2, 3) + txt(520, Y2 + 105, 'hexagone (6)', 18, PINK2, 'bold', 'middle');
  b += circle(790, Y2, 72, '#888', 'white', 3) + txt(790, Y2 + 105, 'cercle : PAS un polygone', 18, '#888', 'bold', 'middle');
  b += txt(500, Y2 + 148, 'les quadrilatères (4 côtés) : carré, rectangle, losange, trapèze…', 19, BLUE, 'bold', 'middle');
  return svg(1000, Y2 + 180, s + b); })();
// S6 — outils de géométrie
figs.u4f6 = (() => { const { s, y } = head('Chaque outil a son métier', ['Règle pour tracer droit, équerre pour l’angle droit, compas pour le rond.']);
  const top = y + 20;
  const data = [['Outil', 'Son métier', 'Le geste'],
    ['la règle', 'segments droits et mesures', 'tracer le long du bord'],
    ['l’équerre', 'angles droits (tracer, vérifier)', 'coin droit sur le sommet'],
    ['le compas', 'cercles et report de longueurs', 'pointe au centre, on tourne'],
    ['le quadrillage', 'guider tracés et copies', 'compter les carreaux']];
  let b = tableEl(20, top, [210, 400, 350], 56, data);
  b += txt(500, top + 5 * 56 + 42, 'un tracé de géométrie se fait toujours au crayon fin, jamais à main levée', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 5 * 56 + 74, s + b); })();
// S7 — reproduire une figure
figs.u4f7 = (() => { const { s, y } = head('Reproduire sur quadrillage', ['On repère les sommets par les carreaux : 3 à droite, 2 en haut…']);
  const top = y + 25, c = 44;
  let b = '';
  const grid = (x0, y0, nx, ny) => { let g = ''; for (let i = 0; i <= nx; i++) g += seg(x0 + i * c, y0, x0 + i * c, y0 + ny * c, '#BBB', 1.5); for (let j = 0; j <= ny; j++) g += seg(x0, y0 + j * c, x0 + nx * c, y0 + j * c, '#BBB', 1.5); return g; };
  b += grid(90, top, 8, 5) + grid(550, top, 8, 5);
  b += poly([[90 + c, top + 4 * c], [90 + 4 * c, top + 4 * c], [90 + 4 * c, top + 2 * c], [90 + 2 * c, top + c], [90 + c, top + 2 * c]], GREENL, GREEN, 3.5);
  b += poly([[550 + c, top + 4 * c], [550 + 4 * c, top + 4 * c], [550 + 4 * c, top + 2 * c], [550 + 2 * c, top + c], [550 + c, top + 2 * c]], '#FDE7EF', PINK2, 3.5);
  [[550 + c, top + 4 * c], [550 + 4 * c, top + 4 * c], [550 + 4 * c, top + 2 * c], [550 + 2 * c, top + c], [550 + c, top + 2 * c]].forEach(pt => b += dot(pt[0], pt[1], 6, PINK2));
  b += txt(266, top + 5 * c + 36, 'MODÈLE', 20, GREEN, 'bold', 'middle') + txt(726, top + 5 * c + 36, 'COPIE : sommets d’abord !', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 5 * c + 78, 'placer TOUS les sommets en comptant les carreaux, puis relier à la règle', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 5 * c + 110, s + b); })();
// S8 — décomposer un quadrilatère
figs.u4f8 = (() => { const { s, y } = head('La diagonale coupe le quadrilatère', ['Un quadrilatère cache toujours deux triangles — la diagonale les révèle.']);
  const top = y + 35, Y = top + 200;
  let b = poly([[120, Y], [420, Y], [380, Y - 180], [160, Y - 180]], 'none', BLUE, 4);
  b += seg(120, Y, 380, Y - 180, PINK2, 3.5, '12 9');
  b += txt(270, Y + 34, 'trapèze + sa diagonale', 19, BLUE, 'bold', 'middle');
  b += arrow(470, Y - 90, 560, Y - 90, OCRE, 4);
  b += poly([[600, Y], [900, Y], [860, Y - 180]], GREENL, GREEN, 3.5);
  b += poly([[600, Y], [860, Y - 180], [640, Y - 180]], '#FDE7EF', PINK2, 3.5);
  b += txt(750, Y + 34, 'deux triangles', 19, GREEN, 'bold', 'middle');
  b += txt(500, Y + 76, 'tout polygone se découpe en triangles : le triangle est la brique de la géométrie', 19, OCRE, 'bold', 'middle');
  return svg(1000, Y + 108, s + b); })();
// S9 — composer des figures
figs.u4f9 = (() => { const { s, y } = head('Deux triangles, trois figures', ['Avec les mêmes deux triangles rectangles, on assemble des figures différentes.']);
  const top = y + 35, Y = top + 165, h = 140;
  let b = '';
  // carré
  b += poly([[80, Y], [220, Y], [80, Y - h]], GREENL, GREEN, 3) + poly([[220, Y], [220, Y - h], [80, Y - h]], '#FDE7EF', PINK2, 3);
  b += txt(150, Y + 32, 'un carré', 19, BLUE, 'bold', 'middle');
  // grand triangle
  b += poly([[350, Y], [490, Y], [350, Y - h]], GREENL, GREEN, 3) + poly([[490, Y], [630, Y], [490, Y - h]], '#FDE7EF', PINK2, 3);
  b += txt(490, Y + 32, 'un grand triangle', 19, BLUE, 'bold', 'middle');
  // parallélogramme
  b += poly([[840, Y], [980, Y], [840, Y - h]], GREENL, GREEN, 3) + poly([[840, Y], [840, Y - h], [700, Y - h]], '#FDE7EF', PINK2, 3);
  b += txt(840, Y + 32, 'un parallélogramme', 19, BLUE, 'bold', 'middle');
  b += txt(500, Y + 76, 'mêmes pièces, assemblages différents : composer, c’est créer des figures nouvelles', 19, OCRE, 'bold', 'middle');
  return svg(1000, Y + 108, s + b); })();

const S = [
  {
    t: 'Les angles : aigu, droit, obtus', comp: 'Géométrie', theme: 'Types d’angles',
    goal: 'reconnaître et nommer les angles aigus, droits et obtus à l’aide de l’équerre',
    mat: 'Équerre, équerres en carton pliées, portes et cahiers de la classe, cahier',
    revQ: 'Résous : □ × 4 = 60.',
    revRA: '□ = 15 (vérification : 15 × 4 = 60).',
    situation: 'La porte de la classe s’ouvre peu à peu : à peine entrouverte, l’écart est petit ; ouverte « bien carrée », elle forme le coin parfait du mur ; poussée à fond, l’écart devient très large. Cette ouverture qui change de taille, c’est la toute première rencontre avec les ANGLES.',
    def: 'Un angle est l’écartement entre deux demi-droites qui partent du même point, appelé sommet de l’angle. L’angle droit est l’angle du coin de l’équerre ; un angle aigu est plus fermé que l’angle droit ; un angle obtus est plus ouvert que l’angle droit (sans être plat).',
    autrement: 'un angle, c’est une ouverture de porte : aigu = entrouverte, droit = ouverte bien carrée, obtus = grande ouverte.',
    concept: 'La grande découverte : l’angle ne dépend PAS de la longueur des traits ! Un angle dessiné avec des côtés courts peut être plus ouvert qu’un angle aux côtés immenses — seul l’écartement compte, pas la longueur des demi-droites. Pour juger, on fabrique le juge officiel : l’équerre (ou son équerre en carton, obtenue en pliant une feuille deux fois). On pose le coin droit sur le sommet, un bord le long d’un côté : si l’autre côté de l’angle reste CACHÉ sous l’équerre, l’angle est aigu ; s’il dépasse, il est obtus ; s’il suit exactement le bord, il est droit. Les angles droits peuplent la classe : coins du cahier, du tableau, carreaux de la fenêtre — la chasse aux angles est ouverte.',
    synthese: 'angle = écartement autour d’un sommet ; l’équerre juge : caché = aigu, exact = droit, dépasse = obtus ; la longueur des côtés ne compte pas.',
    method: ['Repérer le sommet et les deux côtés de l’angle.', 'Poser le coin droit de l’équerre sur le sommet, un bord le long d’un côté.', 'Conclure : côté caché → aigu ; côté confondu → droit ; côté qui dépasse → obtus.'],
    exemple: 'Les aiguilles d’une montre à 3 heures forment un angle droit ; à 2 heures, un angle aigu ; à 4 heures, un angle obtus.',
    erreur: 'Juger un angle à la longueur de ses traits : un angle aux grands côtés n’est pas « plus grand » ! Deux traits de 3 cm peuvent former un angle obtus, deux traits de 10 cm un angle aigu.',
    saistu: 'Les maçons de l’Égypte ancienne fabriquaient leurs angles droits avec une simple corde à 13 nœuds : tendue en triangle de côtés 3, 4 et 5 intervalles, elle forme un angle droit parfait ! Cette corde magique a dressé les pyramides… et les maçons malgaches utilisent encore la même astuce aujourd’hui.',
    exos: ['Observe les aiguilles d’une horloge. L’angle est-il aigu, droit ou obtus à : a) 3 heures ; b) 1 heure ; d) 5 heures ; e) 6 heures (que dire de cet angle ?) ?',
      'Dans la classe, trouve et classe : a) deux angles droits ; b) un angle aigu ; d) un angle obtus ; e) explique comment l’équerre t’a aidé pour l’un d’eux.',
      'Trace : a) un angle aigu ; b) un angle droit à l’équerre ; d) un angle obtus ; e) un angle aigu avec des côtés PLUS LONGS que ceux de ton angle obtus — que remarques-tu ?'],
    corr: ['a) droit ; b) aigu ; d) obtus ; e) à 6 h, les aiguilles sont alignées : angle plat, encore plus ouvert que l’obtus.',
      'a) coins du cahier, du tableau… ; b) par exemple l’ouverture du compas ; d) par exemple la porte grande ouverte ; e) coin de l’équerre sur le sommet : caché = aigu, dépasse = obtus.',
      'a, b, d) tracés corrects à l’équerre et à la règle ; e) l’angle aux longs côtés reste aigu : la longueur des côtés ne change pas l’ouverture.'],
    fig: 'u4f1'
  },
  {
    t: 'Classer les triangles selon leurs côtés', comp: 'Géométrie', theme: 'Triangle équilatéral, isocèle, scalène',
    goal: 'classer les triangles selon la longueur de leurs côtés : équilatéral, isocèle, scalène',
    mat: 'Pailles, bâtonnets, allumettes, règle graduée, cahier',
    revQ: 'Un angle plus ouvert que l’angle droit s’appelle… ?',
    revRA: 'Un angle obtus.',
    situation: 'Avec des pailles de 8 cm, 8 cm et 8 cm, Vola construit un triangle parfaitement régulier. Hery prend 8, 8 et 5 : son triangle a deux côtés jumeaux. Naly prend 8, 6 et 5 : aucun côté pareil ! Trois triangles, trois familles — et chaque famille a son nom.',
    def: 'On classe les triangles selon leurs côtés : le triangle équilatéral a ses trois côtés de même longueur ; le triangle isocèle a deux côtés de même longueur ; le triangle scalène (ou quelconque) a ses trois côtés de longueurs différentes.',
    autrement: 'équilatéral = trois jumeaux ; isocèle = deux jumeaux ; scalène = aucun jumeau.',
    concept: 'Le classement se fait à la règle graduée : on mesure les trois côtés et on compte les égalités. Sur les figures, les géomètres marquent les côtés égaux par de petits traits identiques — un code secret international : les côtés qui portent le même nombre de traits sont jumeaux, même sans mesurer. Deux subtilités font les bons géomètres. D’abord, l’équilatéral est un isocèle de luxe : il a bien « au moins deux » côtés égaux — mais à notre niveau, on donne à chaque triangle le nom de sa famille la plus précise. Ensuite, trois pailles ne font pas toujours un triangle ! Avec 10, 4 et 3 cm, les deux petites pailles, même mises bout à bout (7 cm), n’atteignent pas la grande : le triangle refuse de se fermer. Les deux petits côtés réunis doivent dépasser le grand.',
    synthese: 'mesurer les 3 côtés ; 3 égaux = équilatéral, 2 égaux = isocèle, 0 égal = scalène ; petits traits = côtés jumeaux ; les 2 petits côtés réunis doivent dépasser le grand.',
    method: ['Mesurer les trois côtés à la règle (ou comparer les traits de la figure).', 'Compter les côtés égaux : trois, deux ou aucun.', 'Nommer la famille : équilatéral, isocèle ou scalène.'],
    exemple: 'Côtés 6 cm, 6 cm, 9 cm : deux jumeaux → triangle isocèle ; côtés 7, 5 et 4 cm : aucun jumeau → scalène.',
    erreur: 'Classer « à l’œil » : un triangle peut sembler équilatéral alors que ses côtés font 8 ; 8 et 7,5 cm ! La règle graduée est seule juge — ou les petits traits de la figure.',
    saistu: 'Le triangle équilatéral est si parfait qu’on le retrouve partout : dans le panneau « cédez le passage », dans les alvéoles que les abeilles assemblent, et dans les fermes des ponts métalliques. Sa régularité en fait la star des figures — et le chouchou des exercices de compas !',
    exos: ['Classe les triangles de côtés : a) 5, 5, 5 cm ; b) 7, 7, 4 cm ; d) 9, 6, 5 cm ; e) 12, 12, 12 cm.',
      'Vrai ou faux ? a) Un triangle équilatéral a trois côtés égaux. b) Un triangle isocèle a trois côtés différents. d) Un triangle scalène n’a aucun côté égal. e) Des côtés 10, 4 et 3 cm peuvent former un triangle.',
      'Avec des pailles : a) propose trois longueurs pour un isocèle ; b) pour un scalène ; d) vérifie que tes trois longueurs du b) peuvent fermer un triangle ; e) donne trois longueurs qui NE FERMENT PAS un triangle et explique.'],
    corr: ['a) équilatéral ; b) isocèle ; d) scalène ; e) équilatéral.',
      'a) vrai ; b) faux : il en a deux égaux ; d) vrai ; e) faux : 4 + 3 = 7 < 10, le triangle ne se ferme pas.',
      'a) par exemple 6, 6, 4 ; b) par exemple 7, 5, 4 ; d) 5 + 4 = 9 > 7 ✓ ; e) par exemple 12, 5, 4 : 5 + 4 = 9 < 12, les petits côtés n’atteignent pas le grand.'],
    fig: 'u4f2'
  },
  {
    t: 'Classer les triangles selon leurs angles', comp: 'Géométrie', theme: 'Triangle rectangle, angles aigus, angle obtus',
    goal: 'classer les triangles selon leurs angles, en particulier reconnaître le triangle rectangle',
    mat: 'Équerre, triangles en carton, règle, cahier',
    revQ: 'Côtés 9, 9 et 9 cm : quelle famille de triangle ?',
    revRA: 'Équilatéral.',
    situation: 'Sur le chantier, le charpentier taille les fermes du toit : « celle-ci porte un angle droit, parfaite pour le coin du mur ! Celle-là est toute en angles pointus ; et cette troisième a un angle grand ouvert. » Le charpentier vient de classer ses triangles… par leurs angles.',
    def: 'On classe aussi les triangles selon leurs angles : le triangle rectangle possède un angle droit ; un triangle peut avoir ses trois angles aigus ; un triangle peut posséder un angle obtus. Un même triangle se décrit donc deux fois : par ses côtés ET par ses angles.',
    autrement: 'on promène l’équerre sur les trois angles : un coin droit → rectangle ; tout pointu → trois angles aigus ; un coin grand ouvert → angle obtus.',
    concept: 'Pourquoi « un seul » angle droit ou obtus ? Essaie d’en dessiner deux : les deux côtés s’enfuient sans jamais se refermer ! Un triangle ne peut loger qu’UN angle droit ou UN angle obtus — les deux autres angles sont forcément aigus. C’est pour cela qu’un seul contrôle à l’équerre peut suffire à baptiser le triangle. Les deux classements se croisent : un triangle de côtés 5, 5 et 7 cm avec un angle droit est à la fois ISOCÈLE (côtés) et RECTANGLE (angles) — on dit « triangle rectangle isocèle », moitié exacte d’un carré coupé par sa diagonale. Le triangle rectangle est le préféré des bâtisseurs : son angle droit épouse les coins des murs, et la moitié d’un rectangle, c’est toujours lui.',
    synthese: 'rectangle = un angle droit ; sinon : trois angles aigus, ou un angle obtus ; au plus UN droit ou UN obtus par triangle ; les deux classements se combinent.',
    method: ['Tester les angles du triangle avec le coin de l’équerre.', 'Conclure : un angle droit → rectangle ; un angle qui dépasse → triangle à angle obtus ; sinon → trois angles aigus.', 'Compléter si demandé par le classement des côtés.'],
    exemple: 'Un triangle de côtés 3, 4 et 5 cm : l’équerre révèle un angle droit entre les côtés 3 et 4 → triangle rectangle (et scalène).',
    erreur: 'Chercher deux angles droits dans un triangle : impossible, les côtés ne se refermeraient jamais ! Si l’équerre a trouvé un angle droit, inutile de tester les deux autres pour le classement.',
    saistu: 'La corde à 13 nœuds des maçons fabrique en réalité un triangle RECTANGLE de côtés 3, 4 et 5 : c’est l’exemple le plus ancien du monde. Au collège, tu découvriras le théorème de Pythagore, qui explique pourquoi 3-4-5 fonctionne… il n’a que 2 500 ans d’avance sur ton cours !',
    exos: ['Classe selon les angles (teste à l’équerre sur tes tracés) : a) un triangle avec un coin de cahier ; b) un triangle tout pointu ; d) un triangle avec un angle de porte grande ouverte ; e) la moitié d’un carré coupé par sa diagonale.',
      'Vrai ou faux ? a) Un triangle peut avoir deux angles droits. b) Un triangle rectangle a exactement un angle droit. d) Un triangle peut être à la fois isocèle et rectangle. e) Un triangle à angle obtus a ses deux autres angles aigus.',
      'Trace : a) un triangle rectangle à l’équerre ; b) un triangle aux trois angles aigus ; d) un triangle à angle obtus ; e) décris chacun par ses DEUX classements (côtés et angles).'],
    corr: ['a) rectangle ; b) trois angles aigus ; d) un angle obtus ; e) rectangle (et isocèle).',
      'a) faux ; b) vrai ; d) vrai : le demi-carré ; e) vrai.',
      'a, b, d) tracés corrects ; e) par exemple : « scalène et rectangle », « isocèle et trois angles aigus », « scalène avec un angle obtus ».'],
    fig: 'u4f3'
  },
  {
    t: 'Les propriétés des triangles : côtés, sommets, angles', comp: 'Géométrie', theme: 'Description complète d’un triangle',
    goal: 'décrire un triangle par ses sommets, ses côtés et ses angles, en utilisant les lettres',
    mat: 'Triangles en carton, règle, équerre, étiquettes de lettres, cahier',
    revQ: 'Quel triangle possède un angle droit ?',
    revRA: 'Le triangle rectangle.',
    situation: 'Au téléphone, Lanto doit décrire son triangle à sa cousine pour qu’elle le retrace exactement : « il a trois coins… euh, le grand côté en bas… » Impossible de se comprendre ! Les géomètres ont une solution : donner un NOM à chaque coin — A, B, C — et tout décrire avec ces lettres.',
    def: 'Un triangle possède trois sommets (ses coins), trois côtés (les segments qui joignent les sommets) et trois angles (les ouvertures aux sommets). On nomme les sommets par des lettres majuscules : le triangle ABC a pour sommets A, B et C, pour côtés les segments [AB], [BC] et [CA], et pour angles les angles en A, en B et en C.',
    autrement: 'les lettres sont les prénoms des coins : une fois les coins baptisés, chaque côté et chaque angle se nomme tout seul.',
    concept: 'Les lettres transforment la description vague en message exact : « le triangle ABC, avec AB = 6 cm, BC = 4 cm, CA = 5 cm et l’angle droit en B » — la cousine de Lanto peut maintenant retracer le triangle SANS le voir. Chaque élément se lit dans les lettres : le côté [AB] relie les sommets A et B ; l’angle en B est l’ouverture au sommet B, formée par les côtés [BA] et [BC] ; et le côté [AC], qui ne touche pas B, est le côté OPPOSÉ au sommet B. Cette précision prépare un trésor pour le collège : tous les théorèmes de géométrie parlent ce langage. Dès maintenant, elle permet de rédiger les descriptions des figures de l’examen : qui décrit bien, trace bien.',
    synthese: '3 sommets (lettres majuscules), 3 côtés ([AB], [BC], [CA]), 3 angles (en A, en B, en C) ; le côté opposé à un sommet ne le touche pas.',
    method: ['Nommer les trois sommets par des lettres majuscules.', 'Nommer chaque côté par ses deux sommets entre crochets, chaque angle par son sommet.', 'Décrire : longueurs des côtés, nature des angles, famille du triangle.'],
    exemple: 'Triangle MNO : côtés [MN], [NO], [OM] ; si MN = NO, le triangle est isocèle et les angles en M et en O sont égaux.',
    erreur: 'Nommer un côté par UNE lettre (« le côté A ») : A est un sommet, pas un côté ! Un côté relie DEUX sommets et s’écrit avec leurs deux lettres : [AB].',
    saistu: 'Cette idée de nommer les points par des lettres vient d’Euclide, dont le livre « Les Éléments » (300 ans avant J.-C.) est resté LE manuel de géométrie pendant plus de 2 000 ans — le livre le plus réédité de l’histoire après la Bible ! Tes lettres A, B, C sont les mêmes que celles de ses rouleaux de papyrus.',
    exos: ['Pour le triangle ABC : a) cite ses trois sommets ; b) cite ses trois côtés ; d) comment note-t-on l’angle au sommet C ? e) quel côté est opposé au sommet A ?',
      'Le triangle RST a RS = 7 cm, ST = 7 cm, TR = 10 cm. a) Quelle est sa famille de côtés ? b) Quels sont ses deux côtés jumeaux ? d) Quel côté est opposé au sommet S ? e) Si l’angle en S est droit, donne les deux classements du triangle.',
      'Décris pour un camarade (qui doit le tracer sans le voir) un triangle DEF rectangle en D avec DE = 6 cm et DF = 4 cm : a) les sommets ; b) les côtés et leurs longueurs connues ; d) l’angle particulier ; e) écris la description complète en une phrase.'],
    corr: ['a) A, B et C ; b) [AB], [BC] et [CA] ; d) l’angle en C ; e) le côté [BC].',
      'a) isocèle ; b) [RS] et [ST] ; d) le côté [TR] ; e) isocèle et rectangle (en S).',
      'a) D, E, F ; b) [DE] = 6 cm, [DF] = 4 cm, [EF] à tracer ; d) l’angle droit en D ; e) « le triangle DEF a un angle droit en D, avec DE = 6 cm et DF = 4 cm ».'],
    fig: 'u4f4'
  },
  {
    t: 'Polygones et quadrilatères', comp: 'Géométrie', theme: 'Figures géométriques planes',
    goal: 'reconnaître et nommer les polygones simples et les quadrilatères usuels',
    mat: 'Figures en carton, nattes à motifs, géoplan ou quadrillage, cahier',
    revQ: 'Dans le triangle ABC, quel côté est opposé au sommet B ?',
    revRA: 'Le côté [AC].',
    situation: 'Sur la natte de grand-mère, les motifs tressés dessinent des carrés, des losanges, des hexagones… Fara les compte du doigt : « 3 côtés, 4 côtés, 6 côtés ! » Toutes ces figures fermées aux côtés bien droits forment une seule grande famille : les polygones.',
    def: 'Un polygone est une figure plane fermée dont tous les côtés sont des segments de droite. On le nomme d’après son nombre de côtés : triangle (3), quadrilatère (4), pentagone (5), hexagone (6). Parmi les quadrilatères : le carré (4 côtés égaux, 4 angles droits), le rectangle (4 angles droits), le losange (4 côtés égaux) et le trapèze. Un polygone est régulier si tous ses côtés et tous ses angles sont égaux.',
    autrement: 'polygone = enclos fermé fait de barrières droites ; on compte les barrières pour lui donner son nom.',
    concept: 'Deux contrôles font le polygone : FERMÉ (le crayon revient à son départ) et DROIT (aucun côté courbe) — le cercle, tout fermé qu’il est, n’est pas un polygone, et une ligne brisée ouverte non plus. Chez les quadrilatères, les figures s’emboîtent comme des familles : le carré est un rectangle de luxe (ses 4 angles droits… plus 4 côtés égaux) et aussi un losange de luxe (ses 4 côtés égaux… plus 4 angles droits) — le carré cumule les deux titres ! Compter aussi les sommets : un polygone a autant de sommets que de côtés. Et les polygones réguliers — triangle équilatéral, carré, hexagone régulier — sont ceux des pavages : les abeilles et les tisserandes de nattes les ont adoptés bien avant les géomètres.',
    synthese: 'polygone = fermé + côtés droits ; nom selon le nombre de côtés ; carré = rectangle ET losange à la fois ; régulier = côtés et angles tous égaux.',
    method: ['Vérifier : figure fermée ? côtés tous droits ?', 'Compter les côtés et donner le nom de la famille.', 'Pour un quadrilatère, tester les angles (équerre) et les côtés (règle) pour préciser : carré, rectangle, losange, trapèze.'],
    exemple: 'Une figure fermée à 4 côtés égaux sans angle droit : c’est un losange (et pas un carré).',
    erreur: 'Appeler « carré » tout quadrilatère régulier d’allure penchée : un losange a 4 côtés égaux mais pas d’angle droit ! L’équerre départage le carré du losange.',
    saistu: 'Les abeilles sont des championnes de géométrie : leurs alvéoles hexagonales utilisent moins de cire que tout autre polygone pour stocker autant de miel ! Les mathématiciens ont mis 2 000 ans à démontrer que l’hexagone régulier est bien le meilleur choix — les abeilles, elles, le savaient déjà.',
    exos: ['Polygone ou non ? a) un carré ; b) un cercle ; d) une ligne brisée ouverte en zigzag ; e) un hexagone.',
      'Nomme le polygone : a) 3 côtés ; b) 4 côtés, 4 angles droits, côtés égaux ; d) 4 côtés égaux sans angle droit ; e) 6 côtés.',
      'Vrai ou faux ? Justifie. a) Tout carré est un rectangle. b) Tout rectangle est un carré. d) Un losange a 4 côtés égaux. e) Un polygone à 5 côtés a 6 sommets.'],
    corr: ['a) oui ; b) non : côté courbe ; d) non : non fermée ; e) oui.',
      'a) triangle ; b) carré ; d) losange ; e) hexagone.',
      'a) vrai : il a bien 4 angles droits ; b) faux : ses côtés ne sont pas forcément égaux ; d) vrai ; e) faux : 5 côtés = 5 sommets.'],
    fig: 'u4f5'
  },
  {
    t: 'Tracer avec les outils : règle, équerre, compas', comp: 'Géométrie', theme: 'Utilisation des outils de géométrie',
    goal: 'tracer des figures géométriques simples avec la règle, l’équerre et le compas',
    mat: 'Règle graduée, équerre, compas, crayon bien taillé, cahier',
    revQ: 'Quelle figure a 4 côtés égaux ET 4 angles droits ?',
    revRA: 'Le carré.',
    situation: 'Défi au tableau : tracer un rectangle de 8 cm sur 5 cm « parfait ». Mamy le fait à main levée : les côtés gondolent, les angles penchent. Vola sort règle et équerre : côtés droits, angles exacts. En géométrie, la main ne suffit pas — les outils font la précision.',
    def: 'Chaque outil de géométrie a son rôle : la règle sert à tracer des segments droits et à mesurer leurs longueurs ; l’équerre sert à tracer et à vérifier les angles droits ; le compas sert à tracer des cercles et à reporter des longueurs sans les mesurer.',
    autrement: 'la règle fait droit, l’équerre fait carré, le compas fait rond — et à eux trois, ils font tout.',
    concept: 'Les tracés de qualité suivent des rituels précis. Le rectangle de 8 × 5 : tracer la base de 8 cm à la règle ; poser l’équerre à chaque extrémité pour élever deux côtés perpendiculaires de 5 cm ; fermer en reliant les sommets — et contrôler le dernier angle à l’équerre : s’il est droit aussi, le rectangle est réussi. Le cercle : pointe sèche plantée au CENTRE, écartement réglé au RAYON (3 cm d’écartement = cercle de rayon 3 cm), et l’on tourne d’un geste souple sans changer l’écartement. Le compas cache un second métier : REPORTER une longueur — on pique, on écarte jusqu’au bout du segment, et l’on transporte cette ouverture ailleurs, intacte ; c’est ainsi que se construit le triangle équilatéral sans règle graduée : un côté, puis deux arcs de même rayon qui se croisent au troisième sommet.',
    synthese: 'règle = segments et mesures ; équerre = angles droits (tracer ET contrôler) ; compas = cercles (centre + rayon) et report de longueurs.',
    method: ['Choisir l’outil d’après ce qu’il faut tracer : droit, carré ou rond.', 'Exécuter le rituel : base à la règle, perpendiculaires à l’équerre, cercles au compas sans changer l’écartement.', 'Contrôler la figure finie : mesures à la règle, angles à l’équerre.'],
    exemple: 'Triangle équilatéral de 6 cm : segment [AB] de 6 cm ; arc de centre A et rayon 6 cm ; arc de centre B même rayon ; leur croisement est C ; relier.',
    erreur: 'Changer l’écartement du compas en cours de cercle : le « cercle » part en spirale ! Tenir le compas par la tête, pas par les branches, et tourner d’un seul mouvement.',
    saistu: 'Pendant plus de 2 000 ans, les géomètres se sont imposé un jeu très strict : tout construire avec SEULEMENT la règle (non graduée !) et le compas. Trois défis ont résisté à tous — dont le fameux partage d’un angle en trois. Il a fallu attendre le XIXᵉ siècle pour prouver que c’était… impossible !',
    exos: ['Trace : a) un segment [AB] de 7 cm ; b) un angle droit en A à l’équerre ; d) un cercle de centre A et de rayon 4 cm ; e) un cercle de centre B et de rayon 3 cm.',
      'Construis : a) un carré de 6 cm de côté ; b) un rectangle de 9 cm sur 4 cm ; d) contrôle leurs 4 angles à l’équerre ; e) mesure les deux diagonales du rectangle : que remarques-tu ?',
      'Construis au compas un triangle équilatéral de 5 cm de côté : a) trace la base ; b) décris les deux arcs à tracer ; d) achève le triangle ; e) vérifie ses trois côtés à la règle.'],
    corr: ['a, b, d, e) tracés exacts ; les deux cercles se coupent si AB < 4 + 3 = 7 cm… ils se touchent exactement ici (AB = 7) !',
      'a, b) constructions exactes ; d) 4 angles droits dans chaque figure ; e) les diagonales du rectangle ont la même longueur.',
      'a) segment de 5 cm ; b) arc de centre A rayon 5 cm, arc de centre B rayon 5 cm ; d) leur croisement donne le 3ᵉ sommet, relier ; e) les trois côtés mesurent 5 cm ✓.'],
    fig: 'u4f6'
  },
  {
    t: 'Reproduire une figure', comp: 'Géométrie', theme: 'Reproduction sur quadrillage et à l’échelle simple',
    goal: 'reproduire une figure plane sur quadrillage, à l’identique puis à l’échelle simple',
    mat: 'Papier quadrillé, géoplan, modèles de figures, règle, cahier',
    revQ: 'Quel outil trace les angles droits ?',
    revRA: 'L’équerre.',
    situation: 'La maîtresse affiche une figure en escalier sur le quadrillage du tableau et demande de la recopier sur le cahier. Mamy copie « à l’œil » : sa figure est toute déformée ! Vola compte les carreaux et place d’abord les SOMMETS : sa copie est la jumelle parfaite du modèle.',
    def: 'Reproduire une figure, c’est en tracer une copie exacte : mêmes longueurs, mêmes angles. Sur quadrillage, on repère chaque sommet par ses déplacements en carreaux (vers la droite, vers le haut…), on place tous les sommets de la copie, puis on les relie à la règle. Reproduire à l’échelle simple, c’est copier en multipliant tous les déplacements par un même nombre (tout doubler, tout tripler).',
    autrement: 'le quadrillage est une carte au trésor : on compte les carreaux pour retrouver chaque coin, on marque les croix, puis on relie.',
    concept: 'Le secret des pros : les SOMMETS d’abord, les traits ensuite. Qui trace les segments un à un accumule les petites erreurs ; qui place d’abord tous les sommets (en comptant deux fois les carreaux !) obtient une charpente exacte qu’il n’y a plus qu’à relier. Les segments penchés n’effraient pas le quadrillage : une diagonale se décrit « 3 carreaux à droite, 2 en haut » — et la copie reprend exactement le même déplacement. À l’échelle 2, tous les déplacements doublent : « 3 à droite, 2 en haut » devient « 6 à droite, 4 en haut » ; la figure grandit mais garde sa FORME, car tous les côtés grandissent du même coup. Gare à l’erreur classique : doubler la longueur sans doubler la hauteur fabrique une figure écrasée qui ne ressemble plus au modèle. Le contrôle final : compter les carreaux de la copie, côté par côté, contre le modèle.',
    synthese: 'repérer les sommets en carreaux ; placer TOUS les sommets, puis relier à la règle ; échelle n = multiplier TOUS les déplacements par n ; contrôler en recomptant.',
    method: ['Choisir un sommet de départ et décrire chaque sommet suivant en carreaux (droite/gauche, haut/bas).', 'Placer tous les sommets de la copie (déplacements × l’échelle demandée), puis relier à la règle.', 'Contrôler côté par côté en recomptant les carreaux.'],
    exemple: 'Modèle : « départ, 4 à droite, puis 3 à droite et 2 en haut… » ; à l’échelle 2, le même chemin devient « 8 à droite, puis 6 à droite et 4 en haut… ».',
    erreur: 'Copier les segments à l’œil sans compter : les diagonales glissent d’un carreau et toute la figure se déforme. On COMPTE, on ne devine pas — et on place les sommets avant les traits.',
    saistu: 'Les peintres de fresques géantes utilisent exactement ta méthode : ils quadrillent leur petit dessin, quadrillent le grand mur, puis recopient le contenu carreau par carreau à grande échelle. La mise au carreau a construit les fresques de la Renaissance… et les portraits géants peints sur les murs des villes !',
    exos: ['Sur quadrillage, reproduis à l’identique : a) un rectangle de 6 × 3 carreaux ; b) un triangle rectangle de côtés 4 et 3 carreaux ; d) une figure en escalier de 3 marches ; e) contrôle chaque copie en recomptant.',
      'Décris en carreaux le chemin des sommets : a) d’un carré de 4 carreaux de côté ; b) d’une diagonale « 5 à droite, 2 en haut » ; d) reproduis cette diagonale ; e) reproduis-la à l’échelle 2.',
      'Reproduis la figure « drapeau » (mât de 5 carreaux, fanion triangulaire de 2 × 2) : a) à l’identique ; b) à l’échelle 2 ; d) compare les hauteurs des deux mâts ; e) la forme a-t-elle changé ? Pourquoi ?'],
    corr: ['a, b, d) copies exactes, sommets placés d’abord ; e) tous les côtés recomptés justes.',
      'a) 4 à droite, 4 en haut, 4 à gauche, 4 en bas ; b, d) tracé exact ; e) « 10 à droite, 4 en haut ».',
      'a, b) tracés exacts ; d) 5 carreaux contre 10 : le double ; e) non : TOUS les déplacements ont doublé ensemble, la forme est conservée.'],
    fig: 'u4f7'
  },
  {
    t: 'Décomposer un quadrilatère en triangles', comp: 'Géométrie', theme: 'Décomposition de polygones',
    goal: 'décomposer un quadrilatère en triangles à l’aide de ses diagonales',
    mat: 'Quadrilatères en papier, ciseaux, règle, cahier',
    revQ: 'À l’échelle 3, que devient un déplacement de « 2 carreaux à droite » ?',
    revRA: '6 carreaux à droite.',
    situation: 'Vola découpe un trapèze en papier. D’un coup de ciseaux bien placé — d’un coin au coin opposé — le trapèze tombe en DEUX TRIANGLES. Elle recommence avec un carré, un losange, un rectangle : deux triangles à chaque fois ! Le triangle serait-il caché dans toutes les figures ?',
    def: 'Une diagonale d’un quadrilatère est un segment qui joint deux sommets opposés (non voisins). Décomposer un quadrilatère, c’est le partager en figures plus simples : toute diagonale partage un quadrilatère en deux triangles ; ses deux diagonales le partagent en quatre triangles.',
    autrement: 'la diagonale est le coup de ciseaux magique : un quadrilatère, coupé de coin à coin opposé, donne toujours deux triangles.',
    concept: 'Un quadrilatère n’a que DEUX diagonales : de chaque sommet, un seul sommet n’est pas voisin. Chacune révèle un découpage différent du même quadrilatère — deux paires de triangles différentes ! La décomposition raconte un secret immense : le triangle est la BRIQUE de toute la géométrie. Un pentagone se découpe en 3 triangles (deux diagonales issues d’un même sommet), un hexagone en 4 — tout polygone finit en triangles. Voilà pourquoi les charpentes et les ponts sont bardés de triangles : contrairement au quadrilatère qui se déforme quand on le pousse (essaie avec quatre pailles articulées !), le triangle est INDÉFORMABLE. Et à l’unité V, l’aire des figures se calculera… en les découpant en triangles. La décomposition prépare la composition de la prochaine séance : découper pour comprendre, assembler pour créer.',
    synthese: 'diagonale = segment entre sommets opposés ; 1 diagonale → 2 triangles, 2 diagonales → 4 ; tout polygone se décompose en triangles ; le triangle est indéformable.',
    method: ['Repérer deux sommets opposés du quadrilatère.', 'Tracer (ou découper) la diagonale qui les joint.', 'Nommer les triangles obtenus et recommencer avec l’autre diagonale pour comparer.'],
    exemple: 'Dans le quadrilatère ABCD, la diagonale [AC] donne les triangles ABC et ACD ; la diagonale [BD] donne ABD et BCD.',
    erreur: 'Prendre un côté pour une diagonale : [AB] relie deux sommets VOISINS, c’est un côté ! La diagonale saute par-dessus un sommet : dans ABCD, les diagonales sont [AC] et [BD] seulement.',
    saistu: 'Regarde un grand pont métallique ou un pylône électrique : des triangles partout ! Les ingénieurs appellent cela la triangulation. Un cadre carré s’affaisse en parallélogramme sous le poids, mais ajoute une diagonale — deux triangles ! — et il devient rigide. C’est le coup de ciseaux de Vola… à l’envers.',
    exos: ['Dans le quadrilatère ABCD : a) cite ses deux diagonales ; b) quels triangles donne [AC] ? d) quels triangles donne [BD] ? e) [AB] est-il une diagonale ?',
      'Trace et découpe : a) un rectangle et une diagonale : quels triangles obtiens-tu ? b) les deux triangles sont-ils superposables ? d) un carré et SES DEUX diagonales : combien de triangles ? e) ces quatre triangles sont-ils superposables ?',
      'Décompose en triangles par des diagonales issues d’UN seul sommet : a) un quadrilatère : combien de triangles ? b) un pentagone ? d) un hexagone ? e) devine la règle pour un polygone à 10 côtés.'],
    corr: ['a) [AC] et [BD] ; b) ABC et ACD ; d) ABD et BCD ; e) non : A et B sont voisins, [AB] est un côté.',
      'a) deux triangles rectangles ; b) oui, parfaitement superposables ; d) 4 triangles ; e) oui : le carré est parfaitement régulier.',
      'a) 2 ; b) 3 ; d) 4 ; e) toujours 2 de moins que le nombre de côtés : 8 triangles.'],
    fig: 'u4f8'
  },
  {
    t: 'Composer de nouvelles figures par assemblage', comp: 'Géométrie', theme: 'Composition de figures',
    goal: 'composer de nouvelles figures en assemblant des formes géométriques simples',
    mat: 'Paires de triangles en carton, pièces de tangram, colle, cahier',
    revQ: 'Combien de triangles donnent les 2 diagonales d’un carré ?',
    revRA: 'Quatre.',
    situation: 'Vola garde ses deux triangles découpés dans le carré. En les tournant et les retournant sur la table, elle assemble… un grand triangle ! Puis un rectangle tout en longueur n’apparaît pas, mais un parallélogramme oui, et le carré se reforme. Mêmes pièces, figures nouvelles : c’est la composition.',
    def: 'Composer des figures, c’est en assembler plusieurs, bord contre bord et sans trou ni chevauchement, pour créer une figure nouvelle. Les mêmes pièces peuvent produire des figures différentes : deux triangles rectangles identiques forment, selon l’assemblage, un carré ou un rectangle, un plus grand triangle, ou un parallélogramme.',
    autrement: 'composer, c’est jouer au puzzle à l’envers : au lieu de refaire le modèle, on invente des figures nouvelles avec les mêmes pièces.',
    concept: 'La règle d’or de l’assemblage : les bords qui se touchent doivent avoir la MÊME longueur — on colle l’hypoténuse contre l’hypoténuse, ou un petit côté contre son jumeau ; un bord qui dépasse, et la figure n’est plus un polygone propre. La grande leçon de la composition : la FORME change, mais la QUANTITÉ de carton ne change pas ! Le grand triangle, le carré et le parallélogramme faits des deux mêmes pièces ont des allures très différentes… et pourtant exactement la même surface. Cette idée — découper puis rassembler sans rien perdre — deviendra à l’unité V LA méthode pour calculer les aires : l’aire du triangle naîtra d’un rectangle coupé en deux. Composition et décomposition sont les deux sens du même voyage : le tangram chinois, avec ses 7 pièces et ses milliers de silhouettes, en est le terrain de jeu parfait.',
    synthese: 'assembler bord contre bord, sans trou ni chevauchement ; mêmes pièces → formes différentes mais MÊME surface ; composer et décomposer sont les deux sens du même geste.',
    method: ['Inventorier les pièces et repérer les bords de même longueur.', 'Assembler bord contre bord, en tournant ou retournant les pièces si besoin.', 'Nommer la figure obtenue et chercher un AUTRE assemblage avec les mêmes pièces.'],
    exemple: 'Deux triangles rectangles identiques, hypoténuse contre hypoténuse : un rectangle ; petit côté contre petit côté : un grand triangle isocèle.',
    erreur: 'Assembler avec un trou au milieu ou un coin qui chevauche : la « figure » n’en est plus une ! Les bords doivent coïncider exactement, comme les pièces d’un puzzle bien fait.',
    saistu: 'Le tangram est né en Chine il y a plus de 200 ans : sept pièces découpées dans UN carré — cinq triangles, un carré, un parallélogramme — qui recomposent des milliers de silhouettes : chat, bateau, danseur… Napoléon, dit-on, y jouait pendant son exil. Toutes les silhouettes ont la même aire : celle du carré de départ !',
    exos: ['Avec deux triangles rectangles identiques en carton, compose : a) un carré (si tes triangles sont des demi-carrés) ou un rectangle ; b) un grand triangle ; d) un parallélogramme ; e) dessine chaque assemblage.',
      'Vrai ou faux ? a) Deux triangles identiques peuvent former un rectangle. b) Les figures composées des mêmes pièces ont la même surface. d) On peut laisser un petit trou entre les pièces. e) Retourner une pièce est permis.',
      'Avec quatre triangles rectangles identiques : a) compose un grand carré ; b) compose un rectangle ; d) compose une autre figure de ton invention et nomme-la ; e) ces figures ont-elles la même surface ? Pourquoi ?'],
    corr: ['a, b, d, e) assemblages corrects : bords égaux collés, sans trou ni chevauchement.',
      'a) vrai ; b) vrai : la quantité de carton ne change pas ; d) faux ; e) vrai.',
      'a, b, d) assemblages corrects et nommés ; e) oui : les quatre mêmes pièces sont toutes utilisées à chaque fois, la surface totale est identique.'],
    fig: 'u4f9'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Géométrie',
  rag: 'explorer, représenter, composer et décomposer les formes géométriques pour en comprendre les propriétés.',
  valeurs: 'estime de soi et responsabilité',
  sessions: S,
  revision: {
    table: [
      ['Angles', 'Aigu (fermé), droit (coin de l’équerre), obtus (ouvert) ; la longueur des côtés ne compte pas', 'Juger un angle à l’équerre'],
      ['Triangles par côtés', 'Équilatéral (3 égaux), isocèle (2), scalène (0) ; petits traits = côtés jumeaux', 'Mesurer, classer, construire'],
      ['Triangles par angles', 'Rectangle (1 droit), trois angles aigus, un angle obtus ; au plus un droit ou un obtus', 'Tester à l’équerre, croiser les deux classements'],
      ['Description', 'Sommets A, B, C ; côtés [AB], [BC], [CA] ; angles en A, B, C', 'Décrire une figure pour qu’on la retrace'],
      ['Polygones', 'Fermé + côtés droits ; carré, rectangle, losange, trapèze ; régulier = tout égal', 'Reconnaître, nommer, justifier'],
      ['Tracer, reproduire, composer', 'Règle, équerre, compas ; sommets d’abord sur quadrillage ; diagonale → 2 triangles', 'Construire, copier à l’échelle, décomposer et assembler']
    ],
    questions: [
      'Classe les angles : les aiguilles à 1 h, à 3 h, à 5 h.',
      'Un triangle a des côtés de 8, 8 et 11 cm et un angle droit : donne ses deux classements.',
      'Pourquoi un losange n’est-il pas toujours un carré ? Et pourquoi tout carré est-il un losange ?',
      'Décris la construction d’un triangle équilatéral de 6 cm au compas.',
      'Dans le quadrilatère KLMN, cite les diagonales et les triangles donnés par chacune.'
    ],
    answers: [
      '1 h : aigu ; 3 h : droit ; 5 h : obtus.',
      'Isocèle (8 = 8) et rectangle (un angle droit).',
      'Il peut pencher : 4 côtés égaux sans angle droit ; le carré a les 4 côtés égaux, donc il est aussi un losange.',
      'Segment [AB] de 6 cm ; arc de centre A rayon 6 ; arc de centre B rayon 6 ; leur croisement est C ; relier [AC] et [BC].',
      '[KM] → triangles KLM et KMN ; [LN] → triangles KLN et LMN.'
    ]
  },
  exam: {
    exos: [
      'Angles. Observe le coin d’un cahier, une porte entrouverte et une porte poussée à fond contre le mur. a) Classe ces trois angles. b) Quel outil permet de vérifier ? d) Dessine un angle aigu et un angle obtus. e) Un angle aux côtés très longs est-il forcément plus ouvert ? Justifie.',
      'Triangles. Un triangle a pour côtés 9 cm, 9 cm et 13 cm. a) Classe-le selon ses côtés. b) L’équerre montre que tous ses angles sont aigus : complète sa description. d) Peut-on construire un triangle de côtés 12, 5 et 4 cm ? Justifie. e) Trace un triangle rectangle dont les côtés de l’angle droit mesurent 6 cm et 4 cm.',
      'Polygones. a) Parmi : cercle, carré, ligne brisée ouverte, hexagone — lesquels sont des polygones ? b) Quelle différence entre un carré et un losange ? d) Combien de sommets a un pentagone ? e) Cite un polygone régulier.',
      'Reproduction. Une figure a ses sommets reliés par les déplacements « 4 carreaux à droite », puis « 2 à droite et 3 en haut », puis « 6 à gauche », retour au départ. a) Trace-la sur quadrillage. b) Quelle est la nature de cette figure ? d) Reproduis-la à l’échelle 2. e) La forme est-elle conservée ? Pourquoi ?',
      'Problème. Naly découpe un rectangle en carton de 12 cm sur 8 cm. a) Trace ce rectangle aux instruments. b) Trace une diagonale : quelles figures obtient-on ? d) Les deux figures sont-elles superposables ? e) Avec les deux pièces, Naly compose un grand triangle : la surface totale de carton a-t-elle changé ? Justifie.'
    ],
    corr: [
      'a) droit ; aigu ; obtus ; b) l’équerre ; d) tracés corrects ; e) non : seule l’ouverture compte, pas la longueur des côtés. Un point par item.',
      'a) isocèle ; b) isocèle avec trois angles aigus ; d) non : 5 + 4 = 9 < 12, il ne se ferme pas ; e) tracé exact à l’équerre. Un point par item.',
      'a) le carré et l’hexagone ; b) le carré a 4 angles droits, le losange pas forcément ; d) 5 sommets ; e) triangle équilatéral, carré (ou hexagone régulier). Un point par item.',
      'a) tracé exact ; b) un trapèze (deux côtés horizontaux parallèles de 6 et 4 carreaux) ; d) déplacements doublés : 8 ; 4 et 6 ; 12 ; e) oui : tous les déplacements ont été multipliés par 2 ensemble. Un point par item.',
      'a) rectangle exact aux instruments ; b) deux triangles rectangles ; d) oui, parfaitement superposables ; e) non : les deux mêmes pièces sont réutilisées, la quantité de carton est la même. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
