// UNITÉ 4 — GÉOMÉTRIE ET MESURE (PE T9) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, circle, PINK2, GREEN, BLUE, OCRE } = L;

const dash = (x1, y1, x2, y2, c, w) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-dasharray="10 8"/>`;
const ell = (cx, cy, rx, ry, c, w, dsh) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="${c}" stroke-width="${w}"${dsh ? ' stroke-dasharray="9 7"' : ''}/>`;
const opoly = (pts, c, w, fill) => `<polygon points="${pts.map(p => p.join(',')).join(' ')}" fill="${fill || 'none'}" stroke="${c}" stroke-width="${w}"/>`;

const figs = {};
// S1 — triangles semblables : définition
figs.u4f1 = (() => { const { s, y } = head('Deux triangles semblables', ['Mêmes angles, côtés proportionnels : même forme, tailles différentes.']);
  const top = y + 30;
  let b = poly([[120, top + 210], [400, top + 210], [310, top + 40]], GREEN, 3);
  b += poly([[560, top + 210], [770, top + 210], [702.5, top + 82.5]], PINK2, 3);
  b += txt(110, top + 240, 'A', 22, GREEN, 'bold', 'middle') + txt(408, top + 240, 'B', 22, GREEN, 'bold', 'middle') + txt(310, top + 22, 'C', 22, GREEN, 'bold', 'middle');
  b += txt(552, top + 240, 'A′', 22, PINK2, 'bold', 'middle') + txt(778, top + 240, 'B′', 22, PINK2, 'bold', 'middle') + txt(703, top + 64, 'C′', 22, PINK2, 'bold', 'middle');
  b += txt(260, top + 238, 'AB = 8', 19, '#555', 'normal', 'middle') + txt(665, top + 238, 'A′B′ = 6', 19, '#555', 'normal', 'middle');
  b += txt(880, top + 100, 'angles égaux', 20, OCRE, 'bold', 'middle') + txt(880, top + 135, 'côtés × 3/4', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 275, s + b); })();
// S2 — propriétés et sommets homologues
figs.u4f2 = (() => { const { s, y } = head('Les propriétés des triangles semblables', ['Sommets homologues dans le même ordre ; rapport de similitude k constant.']);
  const top = y + 20;
  const data = [['Propriété', 'Écriture'], ['angles homologues égaux', 'Â = Â′ ; B̂ = B̂′ ; Ĉ = Ĉ′'], ['côtés proportionnels', 'A′B′/AB = B′C′/BC = k'], ['rapport des périmètres', 'P′ = k × P'], ['rapport des aires', 'Aire′ = k² × Aire']];
  let b = tableEl(100, top, [380, 420], 58, data);
  b += txt(500, top + 5 * 58 + 42, 'k = rapport de similitude : k = 2 double, k = 1/2 réduit de moitié', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 5 * 58 + 78, s + b); })();
// S3 — calcul avec triangles semblables
figs.u4f3 = (() => { const { s, y } = head('Calculer avec la similitude', ['Un côté connu dans chaque triangle donne k ; k donne tous les autres côtés.']);
  const top = y + 20;
  const data = [['Étape', 'Exemple'], ['côtés homologues connus', 'AB = 8 et A′B′ = 12'], ['rapport k', 'k = 12/8 = 1,5'], ['autre côté : BC = 6', 'B′C′ = 6 × 1,5 = 9'], ['aire : 20 cm²', 'aire′ = 20 × 1,5² = 45 cm²']];
  let b = tableEl(120, top, [360, 400], 56, data);
  return svg(1000, top + 5 * 56 + 40, s + b); })();
// S4 — configurations de Thalès
figs.u4f4 = (() => { const { s, y } = head('Les deux configurations de Thalès', ['Triangle coupé par une parallèle, ou papillon : (MN) parallèle à (BC).']);
  const top = y + 30;
  let b = opoly([[120, top + 220], [420, top + 220], [270, top + 30]], '#1565C0', 3, '#E3F2FD');
  b += seg(176, top + 149, 364, top + 149, PINK2, 3);
  b += txt(270, top + 14, 'A', 21, '#1565C0', 'bold', 'middle') + txt(110, top + 248, 'B', 21, '#1565C0', 'bold', 'middle') + txt(430, top + 248, 'C', 21, '#1565C0', 'bold', 'middle');
  b += txt(158, top + 145, 'M', 20, PINK2, 'bold', 'middle') + txt(384, top + 145, 'N', 20, PINK2, 'bold', 'middle');
  b += txt(270, top + 268, 'configuration « triangle »', 19, '#555', 'normal', 'middle');
  b += seg(580, top + 40, 900, top + 230, '#1565C0', 2.5) + seg(900, top + 40, 580, top + 230, '#1565C0', 2.5);
  b += seg(600, top + 52, 700, top + 52, PINK2, 3) + seg(760, top + 218, 890, top + 218, PINK2, 3);
  b += dot(740, top + 135, 7, OCRE) + txt(740, top + 115, 'A', 20, OCRE, 'bold', 'middle');
  b += txt(740, top + 268, 'configuration « papillon »', 19, '#555', 'normal', 'middle');
  return svg(1000, top + 300, s + b); })();
// S5 — Thalès calcul
figs.u4f5 = (() => { const { s, y } = head('Calculer une longueur avec Thalès', ['AM/AB = AN/AC = MN/BC : trois quotients égaux, une inconnue qui tombe.']);
  const top = y + 30;
  let b = opoly([[140, top + 230], [470, top + 230], [280, top + 30]], '#1565C0', 3, '#E3F2FD');
  b += seg(196, top + 150, 394, top + 150, PINK2, 3);
  b += txt(280, top + 14, 'A', 21, '#1565C0', 'bold', 'middle') + txt(128, top + 256, 'B', 21, '#1565C0', 'bold', 'middle') + txt(482, top + 256, 'C', 21, '#1565C0', 'bold', 'middle');
  b += txt(178, top + 146, 'M', 20, PINK2, 'bold', 'middle') + txt(414, top + 146, 'N', 20, PINK2, 'bold', 'middle');
  b += txt(205, top + 80, 'AM = 3', 19, GREEN, 'bold', 'middle') + txt(128, top + 196, 'MB = 2', 19, '#555', 'normal', 'middle');
  b += txt(295, top + 172, 'MN = 4,2', 19, PINK2, 'bold', 'middle') + txt(305, top + 255, 'BC = ?', 20, OCRE, 'bold', 'middle');
  b += txt(745, top + 80, 'AM/AB = 3/5', 21, GREEN, 'bold', 'middle');
  b += txt(745, top + 125, 'MN/BC = 3/5', 21, PINK2, 'bold', 'middle');
  b += txt(745, top + 175, 'BC = 4,2 × 5/3 = 7', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 290, s + b); })();
// S6 — droite des milieux
figs.u4f6 = (() => { const { s, y } = head('Le théorème de la droite des milieux', ['La droite des deux milieux est parallèle au 3ᵉ côté et mesure sa moitié.']);
  const top = y + 30;
  let b = opoly([[150, top + 230], [490, top + 230], [320, top + 30]], '#1565C0', 3, '#E3F2FD');
  const mx1 = (150 + 320) / 2, my1 = (top + 230 + top + 30) / 2, mx2 = (490 + 320) / 2, my2 = my1;
  b += seg(mx1, my1, mx2, my2, GREEN, 3);
  b += dot(mx1, my1, 7, GREEN) + dot(mx2, my2, 7, GREEN);
  b += txt(320, top + 14, 'A', 21, '#1565C0', 'bold', 'middle') + txt(138, top + 256, 'B', 21, '#1565C0', 'bold', 'middle') + txt(502, top + 256, 'C', 21, '#1565C0', 'bold', 'middle');
  b += txt(212, my1 - 2, 'I', 20, GREEN, 'bold', 'middle') + txt(428, my1 - 2, 'J', 20, GREEN, 'bold', 'middle');
  b += txt(748, top + 85, 'I milieu de [AB]', 20, '#333', 'normal', 'middle');
  b += txt(748, top + 120, 'J milieu de [AC]', 20, '#333', 'normal', 'middle');
  b += txt(748, top + 168, '(IJ) ∥ (BC)', 22, GREEN, 'bold', 'middle');
  b += txt(748, top + 208, 'IJ = BC ÷ 2', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 285, s + b); })();
// S7 — polygone régulier
figs.u4f7 = (() => { const { s, y } = head('Le polygone régulier et son angle au centre', ['Côtés égaux, angles égaux, un centre : angle au centre = 360° ÷ n.']);
  const top = y + 25; const cx = 300, cy = top + 160, r = 135;
  let pts = [];
  for (let i = 0; i < 6; i++) { const a = -Math.PI / 2 + i * Math.PI / 3; pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]); }
  let b = opoly(pts, GREEN, 3, '#E8F5E9');
  b += dot(cx, cy, 6, '#333');
  b += seg(cx, cy, pts[0][0], pts[0][1], OCRE, 2) + seg(cx, cy, pts[1][0], pts[1][1], OCRE, 2);
  b += txt(cx + 40, cy - 58, '60°', 21, OCRE, 'bold', 'middle');
  b += txt(cx, cy + r + 42, 'hexagone régulier : n = 6', 20, GREEN, 'bold', 'middle');
  const data = [['n', 'angle au centre'], ['3', '120°'], ['4', '90°'], ['5', '72°'], ['6', '60°'], ['8', '45°']];
  b += tableEl(600, top - 5, [110, 270], 50, data);
  return svg(1000, cy + r + 75, s + b); })();
// S8 — construction au compas
figs.u4f8 = (() => { const { s, y } = head('Construire un polygone régulier', ['Un cercle, des angles au centre égaux, des points reliés : le tour est joué.']);
  const top = y + 20;
  const data = [['Étape', 'Geste'], ['1. le cercle', 'tracer un cercle de centre O'], ['2. l’angle', 'calculer 360° ÷ n (pentagone : 72°)'], ['3. les rayons', 'reporter l’angle au rapporteur autour de O'], ['4. les sommets', 'marquer les n points sur le cercle'], ['5. relier', 'joindre les points voisins à la règle']];
  let b = tableEl(80, top, [210, 560], 54, data);
  b += txt(500, top + 6 * 54 + 42, 'cas magique de l’hexagone : le compas seul suffit — le rayon se reporte 6 fois !', 19, OCRE, 'bold', 'middle');
  return svg(1000, top + 6 * 54 + 78, s + b); })();
// S9 — volume pyramide
figs.u4f9 = (() => { const { s, y } = head('Le volume de la pyramide', ['V = aire de base × hauteur ÷ 3 — la pointe coûte les deux tiers.']);
  const top = y + 30;
  const A = [150, top + 230], B = [390, top + 230], C = [460, top + 170], D = [220, top + 170], S2 = [305, top + 35];
  let b = opoly([A, B, C, D], '#1565C0', 2.5, '#E3F2FD');
  b += seg(A[0], A[1], S2[0], S2[1], '#1565C0', 2.5) + seg(B[0], B[1], S2[0], S2[1], '#1565C0', 2.5) + seg(C[0], C[1], S2[0], S2[1], '#1565C0', 2.5);
  b += dash(D[0], D[1], S2[0], S2[1], '#1565C0', 2);
  b += dash(305, top + 200, S2[0], S2[1], PINK2, 2.5);
  b += txt(325, top + 120, 'h', 22, PINK2, 'bold', 'middle');
  b += txt(270, top + 260, 'base : carré de côté c', 19, '#555', 'normal', 'middle');
  b += txt(745, top + 90, 'V = (B × h) ÷ 3', 24, OCRE, 'bold', 'middle');
  b += txt(745, top + 140, 'base 6 × 6, h = 5 :', 20, '#333', 'normal', 'middle');
  b += txt(745, top + 178, 'V = 36 × 5 ÷ 3 = 60 cm³', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 295, s + b); })();
// S10 — volume cône
figs.u4f10 = (() => { const { s, y } = head('Le volume du cône de révolution', ['Le tiers du cylindre de même base et même hauteur : V = π r² h ÷ 3.']);
  const top = y + 30; const cx = 290, cy = top + 215, rx = 130, ry = 34;
  let b = ell(cx, cy, rx, ry, '#1565C0', 2.5);
  b += seg(cx - rx, cy, cx, top + 30, '#1565C0', 2.5) + seg(cx + rx, cy, cx, top + 30, '#1565C0', 2.5);
  b += dash(cx, cy, cx, top + 30, PINK2, 2.5);
  b += seg(cx, cy, cx + rx, cy, GREEN, 2.5);
  b += txt(cx + 16, cy - 80, 'h', 22, PINK2, 'bold', 'middle') + txt(cx + 62, cy + 24, 'r', 22, GREEN, 'bold', 'middle');
  b += txt(745, top + 80, 'V = (π × r² × h) ÷ 3', 24, OCRE, 'bold', 'middle');
  b += txt(745, top + 132, 'r = 3, h = 7 (π ≈ 3,14) :', 20, '#333', 'normal', 'middle');
  b += txt(745, top + 170, 'V ≈ 3,14 × 9 × 7 ÷ 3 ≈ 65,9', 21, GREEN, 'bold', 'middle');
  return svg(1000, cy + ry + 60, s + b); })();
// S11 — sphère et boule
figs.u4f11 = (() => { const { s, y } = head('Sphère et boule', ['Sphère = la peau (une aire) ; boule = le fruit entier (un volume).']);
  const top = y + 30; const cx = 280, cy = top + 150, r = 125;
  let b = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#E3F2FD" stroke="#1565C0" stroke-width="3"/>`;
  b += ell(cx, cy, r, 38, '#1565C0', 2, true);
  b += seg(cx, cy, cx + r, cy, GREEN, 2.5) + dot(cx, cy, 6, '#333') + txt(cx + 58, cy - 14, 'r', 22, GREEN, 'bold', 'middle');
  b += txt(735, top + 70, 'aire de la sphère :', 20, '#333', 'normal', 'middle');
  b += txt(735, top + 108, 'A = 4 × π × r²', 24, OCRE, 'bold', 'middle');
  b += txt(735, top + 165, 'volume de la boule :', 20, '#333', 'normal', 'middle');
  b += txt(735, top + 203, 'V = (4 × π × r³) ÷ 3', 24, PINK2, 'bold', 'middle');
  return svg(1000, cy + r + 60, s + b); })();
// S12 — agrandissement/réduction
figs.u4f12 = (() => { const { s, y } = head('Agrandir ou réduire : k, k², k³', ['Longueurs × k, aires × k², volumes × k³.']);
  const top = y + 20;
  const data = [['Grandeur', 'Facteur', 'Exemple k = 2'], ['longueurs, périmètres', '× k', 'arête 3 → 6'], ['aires', '× k²', 'aire 10 → 40'], ['volumes', '× k³', 'volume 5 → 40']];
  let b = tableEl(110, top, [320, 180, 280], 58, data);
  b += txt(500, top + 4 * 58 + 44, 'marmite 2 fois plus large et plus haute = 8 fois plus de riz !', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();
// S13 — volumes décomposables
figs.u4f13 = (() => { const { s, y } = head('Les volumes décomposables', ['On découpe le solide en morceaux simples, on additionne les volumes.']);
  const top = y + 30;
  const cx = 280, w = 180, hh = 120, baseY = top + 240;
  let b = `<rect x="${cx - w / 2}" y="${baseY - hh}" width="${w}" height="${hh}" fill="#E3F2FD" stroke="#1565C0" stroke-width="2.5"/>`;
  b += opoly([[cx - w / 2 - 30, baseY - hh], [cx + w / 2 + 30, baseY - hh], [cx, top + 40]], PINK2, 2.5, '#FDE7EF');
  b += txt(cx, baseY - hh / 2 + 8, 'cylindre ou prisme', 18, '#1565C0', 'bold', 'middle');
  b += txt(cx, baseY - hh - 55, 'cône ou pyramide', 18, PINK2, 'bold', 'middle');
  b += txt(cx, baseY + 35, 'la case et son toit', 19, '#555', 'normal', 'middle');
  b += txt(745, top + 80, 'V total =', 23, OCRE, 'bold', 'middle');
  b += txt(745, top + 120, 'V du bas + V du toit', 22, OCRE, 'bold', 'middle');
  b += txt(745, top + 175, 'et pour un trou :', 20, '#333', 'normal', 'middle');
  b += txt(745, top + 210, 'on SOUSTRAIT le volume creux', 20, GREEN, 'bold', 'middle');
  return svg(1000, baseY + 70, s + b); })();

const S = [
  {
    t: 'Décrire des triangles semblables', comp: 'Géométrie et Mesure', theme: 'Triangles semblables : définition',
    goal: 'décrire deux triangles semblables et identifier leurs sommets homologues',
    mat: 'Figures découpées, équerre, rapporteur, règle, cahier',
    revQ: 'Deux triangles superposables ont quels éléments égaux ?',
    revRA: 'Tous : côtés et angles — ils sont identiques.',
    situation: 'La photo de classe existe en deux formats : le petit tirage et le grand encadré. Le visage de Mamy y est deux fois plus large, mais PAS déformé : mêmes angles, mêmes proportions. Deux triangles peuvent vivre la même histoire : même forme, tailles différentes — on les dit semblables.',
    def: 'Deux triangles sont semblables lorsque leurs angles sont deux à deux de même mesure ; leurs côtés homologues (qui se correspondent) sont alors proportionnels. Les sommets qui se correspondent sont dits homologues et se nomment dans le même ordre : ABC et A′B′C′.',
    autrement: 'semblables = même forme (angles identiques), taille libre (côtés multipliés par un même nombre) — l’un est la photo agrandie ou réduite de l’autre.',
    concept: 'La similitude est la géométrie du zoom. Trois idées la tiennent debout. D’abord, DEUX angles suffisent : si deux paires d’angles coïncident, la troisième suit (la somme fait 180°) — c’est le critère le plus rapide. Ensuite, l’ORDRE des lettres est un contrat : écrire « ABC semblable à A′B′C′ » promet que  correspond à Â′, AB à A′B′… mélanger l’ordre fausse tous les rapports ! Enfin, la similitude généralise deux vieilles connaissances : les triangles superposables (semblables avec k = 1) et les figures d’échelle des cartes. Attention au faux ami : deux triangles aux côtés égaux deux à deux sont superposables, mais deux triangles aux ANGLES égaux ne le sont pas — ils sont seulement semblables, et c’est toute la richesse.',
    synthese: 'angles égaux deux à deux ⇔ semblables ; côtés homologues proportionnels ; ordre des lettres = correspondance ; superposables = cas k = 1.',
    method: ['Comparer les angles (deux paires suffisent).', 'Nommer les triangles en respectant la correspondance des sommets.', 'Lister les paires de côtés homologues dans l’ordre des lettres.'],
    exemple: 'Triangle ABC : Â = 50°, B̂ = 60° ; triangle PQR : P̂ = 50°, Q̂ = 60°. Les Ĉ et R̂ valent 70° chacun : ABC et PQR sont semblables ; AB correspond à PQ, BC à QR, AC à PR.',
    erreur: 'Nommer au hasard : dire « ABC semblable à B′A′C′ » quand c’est A′B′C′ inverse les paires de côtés — et tous les calculs de la prochaine séance héritent de l’erreur. L’ordre des lettres n’est pas décoratif !',
    saistu: 'Thalès de Milet aurait mesuré la grande pyramide d’Égypte par similitude : à l’instant où son ombre à lui égalait sa taille, l’ombre de la pyramide égalait sa hauteur ! Un bâton, du soleil, et le monument le plus massif du monde rendait sa mesure.',
    exos: ['Triangle DEF : D̂ = 40°, Ê = 75°. Triangle GHI : Ĝ = 40°, Ĥ = 75°. a) Que vaut F̂ ? b) Et Î ? d) Les triangles sont-ils semblables ? e) Donne les trois paires de côtés homologues.',
      'ABC est semblable à MNP. a) Quel angle correspond à Â ? b) Quel côté correspond à BC ? d) Si Â = 90°, que dire de MNP ? e) Deux triangles équilatéraux sont-ils toujours semblables ?',
      'Vrai ou faux ? a) Deux triangles superposables sont semblables. b) Deux triangles semblables sont superposables. d) Deux triangles rectangles sont toujours semblables. e) Deux triangles rectangles ayant un angle aigu égal sont semblables.'],
    corr: ['a) 180 − 115 = 65° ; b) 65° ; d) oui, angles égaux deux à deux ; e) DE↔GH, EF↔HI, DF↔GI.',
      'a) M̂ ; b) NP ; d) il est rectangle en M ; e) oui : trois angles de 60° partout.',
      'a) vrai (k = 1) ; b) faux ; d) faux (les angles aigus peuvent différer) ; e) vrai : 90° + l’aigu égal = deux paires.'],
    fig: 'u4f1'
  },
  {
    t: 'Utiliser les propriétés des triangles semblables', comp: 'Géométrie et Mesure', theme: 'Propriétés : côtés, périmètres, aires',
    goal: 'utiliser le rapport de similitude pour relier côtés, périmètres et aires',
    mat: 'Figures quadrillées, calculatrice, règle, cahier',
    revQ: 'ABC semblable à A′B′C′ avec AB = 8 et A′B′ = 6 : quel est le rapport ?',
    revRA: '6/8 = 3/4.',
    situation: 'Le menuisier reproduit un triangle de charpente en modèle réduit aux 3/4. Les longueurs rétrécissent aux 3/4… mais la surface de bois, elle, fond beaucoup plus vite. Le rapport de similitude k commande tout — chacun à sa puissance.',
    def: 'Si deux triangles sont semblables de rapport k (rapport d’un côté du second à son homologue du premier), alors tous les côtés homologues sont dans le rapport k, les périmètres sont dans le rapport k et les aires dans le rapport k².',
    autrement: 'k pour les longueurs et le tour, k² pour la surface : agrandir de 2, c’est 4 fois plus d’aire.',
    concept: 'Le rapport k = A′B′/AB est la carte d’identité numérique de la similitude : k supérieur à 1 agrandit, k entre 0 et 1 réduit, k = 1 superpose. Les PÉRIMÈTRES suivent docilement les longueurs (somme de côtés × k = périmètre × k). Les AIRES vivent au carré : une aire est un produit de deux longueurs, chacune multipliée par k — d’où k². Démonstration sensible : un triangle agrandi 2 fois se pave avec exactement 4 copies de l’original ! Le réflexe de calcul : repérer une paire de côtés homologues CONNUS pour extraire k, puis distribuer — longueurs × k, aires × k². Et dans l’autre sens : si les aires sont dans le rapport 9, les longueurs sont dans le rapport √9 = 3 — la racine carrée de l’unité 1 reprend du service.',
    synthese: 'k = côté′/côté homologue ; longueurs et périmètres × k ; aires × k² ; sens inverse : k = √(rapport des aires).',
    method: ['Identifier une paire de côtés homologues connus et calculer k.', 'Multiplier les longueurs demandées par k, les aires par k².', 'Pour remonter des aires aux longueurs : prendre √ du rapport des aires.'],
    exemple: 'k = 12/8 = 1,5 ; BC = 6 → B′C′ = 9 ; périmètre 21 → 31,5 ; aire 20 cm² → 20 × 2,25 = 45 cm².',
    erreur: 'Multiplier l’aire par k au lieu de k² : le modèle réduit aux 3/4 n’a pas 75 % de l’aire mais 9/16 ≈ 56 % ! L’aire est une grandeur à deux dimensions — elle encaisse k deux fois.',
    saistu: 'C’est pour cela qu’un poussin sort d’un œuf et pas d’un ballon : quand une forme grandit, son volume (k³) explose plus vite que sa surface (k²). Les géants de cinéma s’effondreraient sous leur propre poids — la similitude fixe les limites du vivant !',
    exos: ['ABC semblable à A′B′C′, AB = 5, A′B′ = 15. a) k ? b) BC = 4 : B′C′ ? d) AC = 6 : A′C′ ? e) périmètre de A′B′C′ ?',
      'Deux triangles semblables, k = 2/5. a) Le grand a un périmètre de 40 : celui du petit ? b) Le grand a une aire de 50 : celle du petit ? d) Un côté du petit vaut 6 : son homologue ? e) k est-il un agrandissement ?',
      'Les aires de deux triangles semblables valent 12 cm² et 108 cm². a) Rapport des aires ? b) k ? d) Un côté du petit mesure 5 cm : son homologue ? e) Rapport des périmètres ?'],
    corr: ['a) 3 ; b) 12 ; d) 18 ; e) (5 + 4 + 6) × 3 = 45.',
      'a) 16 ; b) 50 × 4/25 = 8 ; d) 6 × 5/2 = 15 ; e) non, une réduction (k inférieur à 1).',
      'a) 9 ; b) √9 = 3 ; d) 15 cm ; e) 3.'],
    fig: 'u4f2'
  },
  {
    t: 'Calculer avec des triangles semblables', comp: 'Géométrie et Mesure', theme: 'Résolution de problèmes par similitude',
    goal: 'résoudre des problèmes concrets de longueurs inaccessibles par les triangles semblables',
    mat: 'Bâton, mètre ruban, situations-problèmes, cahier',
    revQ: 'Un bâton de 1 m fait une ombre de 1,5 m : quel rapport ombre/hauteur ?',
    revRA: '1,5.',
    situation: 'Quelle est la hauteur du grand manguier de la cour ? Pas d’échelle assez longue ! Mais à 16 h, le bâton de 1 m plante une ombre de 1,5 m, et l’arbre une ombre de 9 m. Le soleil dessine deux triangles de même forme — la similitude va grimper à notre place.',
    def: 'Pour calculer une longueur inaccessible, on identifie deux triangles semblables (souvent formés par les rayons du soleil ou une visée), on justifie la similitude par les angles, puis on écrit l’égalité des rapports des côtés homologues et on résout la proportion obtenue.',
    autrement: 'repérer deux triangles de même forme, écrire « petit sur grand = petit sur grand », et laisser les produits en croix livrer l’inconnue.',
    concept: 'La démarche en quatre temps est un classique de tous les examens. 1. IDENTIFIER les deux triangles (bâton-ombre et arbre-ombre). 2. JUSTIFIER la similitude : rayons du soleil parallèles → angles égaux ; sol horizontal → angles droits égaux ; deux paires d’angles suffisent. 3. ÉCRIRE les rapports homologues : hauteur de l’arbre / hauteur du bâton = ombre de l’arbre / ombre du bâton, soit h/1 = 9/1,5. 4. RÉSOUDRE : h = 6 m. Le piège mortel : apparier des côtés NON homologues (la hauteur de l’un avec l’ombre de l’autre) — toujours faire se correspondre « même rôle avec même rôle ». La même méthode mesure la largeur d’une rivière, la hauteur d’un pylône, la distance d’une pirogue : la géométrie est le plus vieux des instruments de mesure.',
    synthese: 'identifier, justifier (2 angles), écrire les rapports rôle à rôle, résoudre en croix ; le soleil et les visées fabriquent des triangles semblables gratuits.',
    method: ['Schématiser les deux triangles et marquer les angles égaux.', 'Apparier les côtés homologues (même rôle dans chaque triangle).', 'Poser la proportion et résoudre par les produits en croix.'],
    exemple: 'Poteau : ombre 4,5 m ; bâton 1 m : ombre 0,75 m. h/1 = 4,5/0,75 → h = 6 m.',
    erreur: 'Mesurer les deux ombres à des heures différentes : le soleil a bougé, les triangles ne sont plus semblables ! Les deux mesures se prennent au même moment — c’est l’hypothèse qui fonde toute la méthode.',
    saistu: 'Ératosthène mesura la Terre entière avec cette idée vers 240 av. J.-C. : à midi, un puits d’Assouan n’avait pas d’ombre quand l’obélisque d’Alexandrie en avait une de 7,2°. Des triangles, une distance de chameliers… et une circonférence de 39 375 km : 1,6 % d’erreur seulement !',
    exos: ['Le manguier : bâton 1 m / ombre 1,5 m ; ombre de l’arbre 9 m. a) Justifie la similitude. b) Pose la proportion. d) Hauteur de l’arbre ? e) Et si l’ombre de l’arbre mesurait 12 m ?',
      'Marie (1,6 m) a une ombre de 2 m ; le château d’eau, une ombre de 15 m. a) Rapport hauteur/ombre ? b) Hauteur du château ? d) Même heure obligatoire ? e) Pourquoi ?',
      'Pour mesurer la largeur L d’une rivière, on vise : les triangles donnent L/6 = 20/8. a) Que vaut L ? b) Vérifie par les produits en croix. d) Cite deux autres longueurs mesurables ainsi. e) Quelle précaution sur les angles ?'],
    corr: ['a) rayons parallèles + sol horizontal : deux paires d’angles égaux ; b) h/1 = 9/1,5 ; d) 6 m ; e) 8 m.',
      'a) 1,6/2 = 0,8 ; b) 15 × 0,8 = 12 m ; d) oui ; e) le soleil bouge : les angles changeraient.',
      'a) L = 120/8 = 15 m ; b) 8 × 15 = 120 = 6 × 20 ✓ ; d) hauteur d’un pylône, d’une falaise… ; e) viser des points bien alignés pour garantir les angles égaux.'],
    fig: 'u4f3'
  },
  {
    t: 'Identifier les configurations de Thalès', comp: 'Géométrie et Mesure', theme: 'Configurations de Thalès dans les triangles',
    goal: 'reconnaître les configurations de Thalès et écrire les rapports égaux associés',
    mat: 'Figures variées, règle, crayons de couleur, cahier',
    revQ: 'Dans un triangle coupé par une parallèle à un côté, que deviennent les angles ?',
    revRA: 'Ils restent égaux : le petit triangle a la même forme.',
    situation: 'Sur le plan du charpentier, une traverse [MN] barre le triangle de la ferme, bien parallèle à la base [BC]. Deux triangles apparaissent : le grand ABC et le petit AMN, emboîtés par la pointe A. Cette figure à répétition porte un nom : la configuration de Thalès.',
    def: 'Il y a configuration de Thalès lorsque deux droites sécantes en A sont coupées par deux droites parallèles : les points M et N sur les côtés issus de A définissent un triangle AMN semblable au triangle ABC. Deux dispositions existent : la configuration « triangle » (M et N du même côté de A) et la configuration « papillon » (M et N de l’autre côté de A).',
    autrement: 'une pointe commune A, deux droites qui en partent, deux parallèles qui les coupent : un petit triangle calqué sur le grand — devant A (triangle) ou derrière A (papillon).',
    concept: 'La configuration de Thalès est une machine à triangles semblables : la parallèle garantit les angles égaux (angles correspondants dans le « triangle », alternes-internes dans le « papillon »), donc AMN et ABC sont semblables SANS autre vérification. L’écriture des rapports suit l’emboîtement : AM/AB = AN/AC = MN/BC — chaque rapport va du petit au grand, en partant de A. Savoir REPÉRER la configuration est la moitié du travail : chercher la pointe (le point commun), puis les deux parallèles. Le papillon piège les yeux : les segments se croisent en A et le petit triangle est retourné tête-bêche — mais les rapports s’écrivent exactement pareil. Dans les figures chargées des examens, colorier le petit triangle d’une couleur et le grand d’une autre évite 90 % des erreurs.',
    synthese: 'sécantes en A + parallèles ⇒ AMN semblable à ABC ; rapports AM/AB = AN/AC = MN/BC ; deux dispositions : triangle (même côté) et papillon (côtés opposés, figure croisée).',
    method: ['Repérer le point commun A et les deux droites qui en partent.', 'Vérifier le parallélisme annoncé (codage, énoncé).', 'Colorier petit et grand triangles, écrire les trois rapports depuis A.'],
    exemple: 'Droites (BM) et (CN) sécantes en A, (MN) ∥ (BC) avec M et N de l’autre côté : papillon ; AM/AB = AN/AC = MN/BC, comme dans le cas triangle.',
    erreur: 'Écrire un rapport à cheval : AM/AC mélange les deux droites ! Chaque rapport reste sur SA droite (AM et AB sur l’une, AN et AC sur l’autre) ou compare les deux parallèles (MN et BC).',
    saistu: 'Le « théorème de Thalès » des manuels français s’appelle « théorème d’intersection » en Allemagne et « théorème de proportionnalité » ailleurs — et en Grèce, le théorème de Thalès désigne… le triangle inscrit dans un demi-cercle ! Un même sage, plusieurs héritages.',
    exos: ['(MN) ∥ (BC), M sur [AB], N sur [AC]. a) Nomme la configuration. b) Quels triangles sont semblables ? d) Écris les trois rapports égaux. e) Où est la pointe ?',
      'Les segments [MC] et [NB] se croisent en A, (MN) ∥ (BC). a) Nomme la configuration. b) Les rapports changent-ils ? d) Écris-les. e) Dessine la figure à main levée.',
      'Dans chaque cas, y a-t-il configuration de Thalès ? a) deux parallèles coupant deux sécantes ; b) deux sécantes coupées par deux droites quelconques ; d) une parallèle à un côté dans un triangle ; e) deux droites parallèles sans sécante commune.'],
    corr: ['a) triangle ; b) AMN et ABC ; d) AM/AB = AN/AC = MN/BC ; e) en A.',
      'a) papillon ; b) non ; d) AM/AB = AN/AC = MN/BC ; e) figure en nœud papillon croisée en A.',
      'a) oui ; b) non : sans parallélisme, pas de Thalès ; d) oui (cas triangle) ; e) non : il faut la pointe commune.'],
    fig: 'u4f4'
  },
  {
    t: 'Appliquer la propriété de Thalès', comp: 'Géométrie et Mesure', theme: 'Calcul de longueurs par Thalès',
    goal: 'calculer une longueur inconnue par la propriété de Thalès',
    mat: 'Figures codées, calculatrice, cahier, ardoises',
    revQ: 'Écris les rapports de Thalès pour AMN dans ABC, (MN) ∥ (BC).',
    revRA: 'AM/AB = AN/AC = MN/BC.',
    situation: 'Sur la ferme du charpentier : AM = 3 m, MB = 2 m, et la traverse MN mesure 4,2 m. Quelle longueur pour la base BC ? Trois rapports égaux attendent — il suffit d’en remplir deux pour faire parler le troisième.',
    def: 'Propriété de Thalès : si M est sur [AB], N sur [AC] et (MN) ∥ (BC), alors AM/AB = AN/AC = MN/BC. Pour calculer une longueur, on sélectionne les deux rapports contenant trois longueurs connues et l’inconnue, puis on résout la proportion par les produits en croix.',
    autrement: 'trois fractions égales ; on en choisit deux, on croise, on divise — la longueur cachée sort.',
    concept: 'Le piège numéro un de Thalès est une ADDITION oubliée : les rapports utilisent les longueurs DEPUIS A — si l’énoncé donne AM = 3 et MB = 2, alors AB = AM + MB = 5, jamais 2 ! Le calcul type : AM/AB = MN/BC donne 3/5 = 4,2/BC, d’où BC = 4,2 × 5/3 = 7 m. Bien choisir sa paire de rapports économise du travail : prendre les deux qui contiennent l’inconnue et trois données. La propriété rend aussi des quotients SANS parallèle explicite : la droite des milieux (prochaine séance) et les partages réguliers en découlent. Enfin, rigueur d’examen : citer les hypothèses (« M ∈ [AB], N ∈ [AC], (MN) ∥ (BC), donc d’après la propriété de Thalès… ») — le correcteur paie la phrase autant que le nombre.',
    synthese: 'longueurs mesurées depuis A (AB = AM + MB !) ; choisir les 2 rapports utiles ; produits en croix ; rédiger hypothèses → propriété → calcul.',
    method: ['Calculer les longueurs complètes depuis A si besoin (sommes).', 'Écrire les trois rapports, encadrer les deux utiles.', 'Résoudre en croix et contrôler l’ordre de grandeur (le grand côté doit rester le plus grand).'],
    exemple: 'AM = 4, AB = 10, AN = 6 : AN/AC = AM/AB → 6/AC = 4/10 → AC = 15. Contrôle : 15 dépasse 6 ✓.',
    erreur: 'Prendre MB pour AB : 3/2 au lieu de 3/5 change tout le chantier ! Les rapports de Thalès partent TOUS de la pointe A — l’énoncé qui donne le morceau MB attend l’addition AM + MB.',
    saistu: 'Les charpentiers malgaches utilisent Thalès sans le nommer : pour tracer une traverse parallèle à l’entrait, ils reportent le même rapport sur les deux arbalétriers — « même proportion des deux côtés ». Le théorème dormait dans les toits bien avant d’entrer dans les cahiers !',
    exos: ['(MN) ∥ (BC), AM = 3, MB = 2, MN = 4,2. a) AB ? b) Pose la proportion pour BC. d) BC ? e) Vérifie que BC dépasse MN.',
      '(MN) ∥ (BC), AM = 4, AB = 10, AN = 5. a) AC ? b) NC ? d) MN = 6 : BC ? e) Quel est le rapport de similitude ?',
      'Papillon : AM = 2, AB = 6, BC = 9. a) Écris le rapport utile pour MN. b) MN ? d) AN = 1,5 : AC ? e) Rédige la justification complète en une phrase.'],
    corr: ['a) 5 ; b) 3/5 = 4,2/BC ; d) 7 ; e) 7 est plus grand que 4,2 ✓.',
      'a) 4/10 = 5/AC → AC = 12,5 ; b) 7,5 ; d) 6 × 10/4 = 15 ; e) 4/10 = 2/5.',
      'a) AM/AB = MN/BC → 2/6 = MN/9 ; b) 3 ; d) 1,5 × 3 = 4,5 ; e) « (MN) ∥ (BC) et les droites se coupent en A, donc d’après la propriété de Thalès, AM/AB = AN/AC = MN/BC. »'],
    fig: 'u4f5'
  },
  {
    t: 'Utiliser le théorème de la droite des milieux', comp: 'Géométrie et Mesure', theme: 'Droite des milieux et parallélisme',
    goal: 'utiliser le théorème de la droite des milieux et sa réciproque pour calculer et démontrer',
    mat: 'Règle graduée, compas, figures à compléter, cahier',
    revQ: 'Dans Thalès, si AM/AB = 1/2, que vaut MN/BC ?',
    revRA: '1/2 aussi.',
    situation: 'Rado doit tracer un sentier reliant les milieux de deux côtés du champ triangulaire. Sans boussole, il parie : « mon sentier sera parallèle à la grande clôture, et deux fois plus court. » Pari gagné d’avance — c’est un théorème.',
    def: 'Théorème de la droite des milieux : dans un triangle, la droite qui joint les milieux de deux côtés est parallèle au troisième côté, et le segment des milieux mesure la moitié de ce côté. Réciproque : la droite qui passe par le milieu d’un côté et qui est parallèle à un deuxième côté coupe le troisième côté en son milieu.',
    autrement: 'relier deux milieux = tracer une parallèle automatique, longue de la moitié du troisième côté ; et une parallèle lancée d’un milieu atterrit sur un autre milieu.',
    concept: 'La droite des milieux est Thalès en version k = 1/2 : I milieu de [AB] donne AI/AB = 1/2, donc IJ/BC = 1/2 et (IJ) ∥ (BC) — le théorème est un cas particulier devenu réflexe. Son double emploi structure les démonstrations : le théorème DIRECT fabrique du parallélisme et des demi-longueurs (« I et J sont des milieux, donc… ») ; la RÉCIPROQUE fabrique des milieux (« la parallèle issue du milieu I coupe [AC] en son milieu »). Les examens adorent l’enchaînement : prouver un parallélisme par la droite des milieux, puis conclure sur un quadrilatère (les milieux des quatre côtés d’un quadrilatère QUELCONQUE forment toujours un parallélogramme — merveille à démontrer en deux applications du théorème !). Bien distinguer les deux sens : le direct part des milieux, la réciproque part d’une parallèle.',
    synthese: 'milieux I, J ⇒ (IJ) ∥ (BC) et IJ = BC/2 ; réciproque : milieu + parallèle ⇒ nouveau milieu ; Thalès avec k = 1/2 ; outil roi des démonstrations.',
    method: ['Repérer les milieux codés sur la figure.', 'Direct : conclure parallélisme + moitié ; réciproque : conclure milieu.', 'Enchaîner vers la conclusion demandée (parallélogramme, longueur…).'],
    exemple: 'BC = 12 ; I, J milieux de [AB] et [AC] : IJ = 6 et (IJ) ∥ (BC) — sans mesurer ni tracer.',
    erreur: 'Utiliser la réciproque sans le milieu de départ : une simple parallèle à (BC) ne coupe pas forcément [AC] en son milieu ! La réciproque exige de PARTIR d’un milieu — vérifier le codage avant de conclure.',
    saistu: 'Le parallélogramme caché dans tout quadrilatère (en reliant les milieux des côtés) s’appelle le parallélogramme de Varignon, du nom d’un mathématicien français de 1700. Dessine un quadrilatère tordu, place les quatre milieux, relie : la magie opère à tous les coups !',
    exos: ['Triangle ABC, I milieu de [AB], J milieu de [AC], BC = 14. a) Que vaut IJ ? b) Position de (IJ) et (BC) ? d) Périmètre de AIJ si AB = 10, AC = 8 ? e) Rapport des aires AIJ/ABC ?',
      'Triangle DEF, M milieu de [DE] ; la parallèle à (EF) passant par M coupe [DF] en N. a) Que dire de N ? b) Quel théorème ? d) MN = 5 : EF ? e) DF = 9 : DN ?',
      'Quadrilatère ABCD quelconque ; I, J, K, L milieux de [AB], [BC], [CD], [DA]. a) Dans ABC, que dire de (IJ) ? b) Dans ACD, que dire de (LK) ? d) Conclus sur IJKL. e) Quelle est la nature de la démonstration utilisée deux fois ?'],
    corr: ['a) 7 ; b) parallèles ; d) 5 + 4 + 7 = 16 ; e) (1/2)² = 1/4.',
      'a) N est le milieu de [DF] ; b) la réciproque de la droite des milieux ; d) 10 ; e) 4,5.',
      'a) (IJ) ∥ (AC) et IJ = AC/2 ; b) (LK) ∥ (AC) et LK = AC/2 ; d) IJ ∥ LK et IJ = LK : IJKL est un parallélogramme ; e) le théorème de la droite des milieux, appliqué dans deux triangles.'],
    fig: 'u4f6'
  },
  {
    t: 'Décrire les polygones réguliers', comp: 'Géométrie et Mesure', theme: 'Propriétés des polygones réguliers',
    goal: 'décrire un polygone régulier et calculer son angle au centre',
    mat: 'Figures de polygones, rapporteur, compas, cahier',
    revQ: 'Quelles propriétés partagent le carré et le triangle équilatéral ?',
    revRA: 'Côtés égaux et angles égaux.',
    situation: 'Nids d’abeilles, écrous, pavés de la place du marché, étoile du drapeau : partout des figures aux côtés parfaitement égaux et aux angles parfaitement réguliers, comme tournées sur un tour. Ces aristocrates de la géométrie ont un centre, un cercle et une loi des angles.',
    def: 'Un polygone régulier est un polygone dont tous les côtés ont la même longueur et tous les angles la même mesure. Ses sommets appartiennent à un même cercle (cercle circonscrit) de centre O, et l’angle au centre, formé par deux rayons menés à deux sommets consécutifs, vaut 360° ÷ n pour un polygone à n côtés.',
    autrement: 'côtés égaux + angles égaux + un centre qui voit tous les sommets à la même distance ; la part de gâteau entre deux sommets vaut 360° divisé par le nombre de côtés.',
    concept: 'Le CENTRE est la clé de voûte : équidistant de tous les sommets, il découpe le polygone en n triangles isocèles identiques, comme un gâteau en n parts. L’ANGLE AU CENTRE 360°/n décroît quand n grandit : 120° (triangle équilatéral), 90° (carré), 72° (pentagone), 60° (hexagone), 45° (octogone)… et le polygone s’arrondit vers le cercle — un polygone régulier de mille côtés est un cercle pour l’œil ! L’ANGLE INTÉRIEUR se déduit : chaque triangle isocèle donne deux angles de (180° − 360°/n)/2 au sommet du polygone, soit un angle intérieur de 180° − 360°/n : 60°, 90°, 108°, 120°… L’hexagone cache un trésor : son angle au centre de 60° rend ses triangles ÉQUILATÉRAUX — le côté égale le rayon, propriété unique qui explique la construction au compas seul.',
    synthese: 'régulier = côtés et angles égaux + cercle circonscrit ; angle au centre = 360°/n ; angle intérieur = 180° − 360°/n ; hexagone : côté = rayon.',
    method: ['Compter les côtés n.', 'Calculer l’angle au centre 360°/n.', 'En déduire l’angle intérieur 180° − 360°/n si demandé.'],
    exemple: 'Octogone régulier : angle au centre 360/8 = 45° ; angle intérieur 180 − 45 = 135°.',
    erreur: 'Croire que « côtés égaux » suffit : le losange a quatre côtés égaux mais des angles inégaux — il n’est pas régulier ! Il faut LES DEUX égalités, côtés ET angles.',
    saistu: 'Les abeilles choisissent l’hexagone depuis des millions d’années : parmi les polygones réguliers qui pavent le plan sans trou (triangle, carré, hexagone), c’est lui qui offre le plus de surface de miel pour le moins de cire. Les mathématiciens ne l’ont prouvé rigoureusement… qu’en 1999 !',
    exos: ['Calcule l’angle au centre : a) triangle équilatéral ; b) pentagone ; d) décagone (10 côtés) ; e) polygone à 18 côtés.',
      'Calcule l’angle intérieur : a) carré ; b) hexagone ; d) pentagone ; e) octogone.',
      'a) Un losange est-il régulier ? b) Un rectangle ? d) Quel polygone régulier a un angle au centre de 40° ? e) Pourquoi le côté de l’hexagone égale-t-il le rayon ?'],
    corr: ['a) 120° ; b) 72° ; d) 36° ; e) 20°.',
      'a) 90° ; b) 120° ; d) 108° ; e) 135°.',
      'a) non : angles inégaux ; b) non : côtés inégaux ; d) 360/40 = 9 côtés ; e) ses triangles au centre ont un angle de 60° entre deux côtés égaux : ils sont équilatéraux.'],
    fig: 'u4f7'
  },
  {
    t: 'Construire des polygones réguliers', comp: 'Géométrie et Mesure', theme: 'Constructions au compas et au rapporteur',
    goal: 'construire un polygone régulier au compas et au rapporteur',
    mat: 'Compas, rapporteur, règle, crayon bien taillé, cahier',
    revQ: 'Angle au centre d’un pentagone ? d’un hexagone ?',
    revRA: '72° ; 60°.',
    situation: 'L’atelier d’artisanat veut des boîtes hexagonales et des miroirs pentagonaux. Avant le bois et le verre, le tracé : comment obtenir des côtés rigoureusement égaux ? Le secret des artisans tient en un cercle et des parts d’angle égales.',
    def: 'Pour construire un polygone régulier à n côtés : tracer un cercle de centre O, partager le tour complet en n angles au centre de 360°/n à l’aide du rapporteur, marquer les n points sur le cercle, puis relier les points consécutifs à la règle. L’hexagone se construit au compas seul en reportant le rayon six fois sur le cercle.',
    autrement: 'un cercle, des parts d’angle égales autour du centre, des points reliés : le polygone naît rond avant d’être droit.',
    concept: 'La construction traduit la définition : le cercle garantit l’équidistance des sommets, les angles au centre égaux garantissent l’égalité des côtés. Le RAPPORTEUR fait le gros du travail : tracer un premier rayon, reporter 72° (pentagone) de proche en proche — astuce de précision : mesurer les angles cumulés (72°, 144°, 216°, 288°) depuis le rayon initial plutôt que de proche en proche, les petites erreurs ne s’additionnent plus. L’HEXAGONE échappe au rapporteur : côté = rayon, donc le compas gardé à l’écartement du rayon « marche » six fois autour du cercle et retombe exactement sur son point de départ — si l’écart final dépasse un millimètre, recommencer plus soigneusement ! En reliant un sommet sur deux de l’hexagone, surgit le triangle équilatéral ; les diagonales du pentagone dessinent l’étoile à cinq branches. Le contrôle final : tous les côtés au compas — même écartement partout.',
    synthese: 'cercle + angles au centre au rapporteur (cumulés pour la précision) + règle ; hexagone : report du rayon au compas seul ; contrôle des côtés au compas.',
    method: ['Tracer le cercle et un premier rayon.', 'Reporter les angles au centre (cumulés) et marquer les sommets.', 'Relier à la règle et contrôler l’égalité des côtés au compas.'],
    exemple: 'Carré inscrit : deux diamètres perpendiculaires (équerre ou compas), quatre points, quatre côtés.',
    erreur: 'Reporter la LONGUEUR du côté « au jugé » autour du cercle pour un pentagone : contrairement à l’hexagone, le côté du pentagone n’a pas de rapport simple avec le rayon — seuls les angles garantissent la régularité.',
    saistu: 'Gauss démontra à 19 ans qu’un polygone à 17 côtés se construit à la règle et au compas seuls — personne ne l’avait soupçonné en 2 000 ans ! Fier de sa trouvaille, il choisit la carrière de mathématicien… et demanda un 17-gone gravé sur sa tombe. Le graveur refusa : trop proche d’un cercle !',
    exos: ['Pour un pentagone dans un cercle de rayon 5 cm : a) angle au centre ? b) combien de sommets à marquer ? d) angles cumulés depuis le premier rayon ? e) dernier contrôle à faire ?',
      'Hexagone au compas seul : a) quel écartement de compas ? b) combien de reports ? d) que vérifier à l’arrivée ? e) comment obtenir le triangle équilatéral ensuite ?',
      'a) Construis (sur papier) un carré inscrit dans un cercle de rayon 4 cm : quelles droites tracer ? b) Quel angle entre elles ? d) Comment vérifier la régularité ? e) Quelle figure donnent les sommets d’un hexagone pris deux par deux ?'],
    corr: ['a) 72° ; b) 5 ; d) 72°, 144°, 216°, 288° ; e) les cinq côtés au compas : même longueur.',
      'a) le rayon ; b) six ; d) retomber sur le point de départ ; e) relier un sommet sur deux.',
      'a) deux diamètres perpendiculaires ; b) 90° ; d) côtés égaux au compas, diagonales égales ; e) un triangle équilatéral.'],
    fig: 'u4f8'
  },
  {
    t: 'Calculer le volume d’une pyramide et d’un tronc', comp: 'Géométrie et Mesure', theme: 'Volume de la pyramide, volume du tronc',
    goal: 'calculer le volume d’une pyramide et d’un tronc de pyramide',
    mat: 'Maquettes, patrons, riz ou sable pour transvaser, calculatrice',
    revQ: 'Volume d’un pavé de base 36 cm² et de hauteur 5 cm ?',
    revRA: '180 cm³.',
    situation: 'Expérience au labo de la classe : une pyramide creuse et un prisme de MÊME base et MÊME hauteur. On remplit la pyramide de riz, on verse dans le prisme : il faut exactement TROIS pyramides pour le remplir ! Le tiers n’est pas un décret — c’est une expérience.',
    def: 'Le volume d’une pyramide est le tiers du produit de l’aire de sa base par sa hauteur : V = (B × h) ÷ 3, où h est la distance du sommet au plan de la base. Le volume d’un tronc de pyramide (pyramide coupée par un plan parallèle à la base) s’obtient en soustrayant le volume de la petite pyramide enlevée de celui de la grande.',
    autrement: 'comme le prisme, mais divisé par 3 — la pointe fait perdre les deux tiers ; et un tronc = la grande pyramide moins la petite qu’on a décapitée.',
    concept: 'La formule tient en trois gestes : AIRE DE LA BASE d’abord (carré c², rectangle L×l, triangle bh/2 — selon la pyramide), PRODUIT par la hauteur, DIVISION par 3. La hauteur est la perpendiculaire du sommet à la base — dans une pyramide penchée, elle ne suit aucune arête ! Le TRONC mobilise la similitude de la séance 2 : la petite pyramide enlevée est une réduction de la grande, de rapport k = h′/H (hauteurs depuis le sommet) ; son volume vaut donc k³ fois celui de la grande, et V(tronc) = V(grande) × (1 − k³). Exemple : grande pyramide de base 36 et hauteur 6 (V = 72), coupée à mi-hauteur (k = 1/2) : le tronc garde 72 × (1 − 1/8) = 63 — la moitié basse contient 7/8 du volume ! Unités cubes toujours : cm³, m³, et la passerelle 1 m³ = 1 000 L pour les problèmes de greniers et de réservoirs.',
    synthese: 'V = Bh/3 ; h perpendiculaire à la base ; tronc = grande − petite, petite = k³ × grande avec k = rapport des hauteurs ; unités cubes.',
    method: ['Calculer l’aire B de la base selon sa forme.', 'Multiplier par la hauteur, diviser par 3.', 'Tronc : calculer la grande, la petite (k³), soustraire.'],
    exemple: 'Pyramide à base carrée de côté 6, h = 5 : V = 36 × 5 ÷ 3 = 60 cm³.',
    erreur: 'Prendre une arête latérale pour la hauteur : l’arête penche, elle est plus longue que h ! La hauteur tombe perpendiculairement au centre de la base — sur un dessin en perspective, c’est le trait pointillé vertical.',
    saistu: 'Le papyrus de Moscou (vers 1850 av. J.-C.) calcule déjà le volume d’un tronc de pyramide carrée — la formule exacte, mille ans avant Thalès ! Les bâtisseurs égyptiens devaient commander les pierres d’une pyramide inachevée : le tronc était leur quotidien.',
    exos: ['Pyramide à base carrée, côté 9, hauteur 8. a) Aire de la base ? b) B × h ? d) Volume ? e) Volume du prisme de même base et hauteur ?',
      'Pyramide à base rectangulaire 10 × 6, h = 7. a) V ? b) Si h double, V ? d) Si le côté 10 passe à 20 (seul), V ? e) Si TOUTES les dimensions doublent, V ?',
      'Grande pyramide : base 25 m², H = 9 m, coupée aux 2/3 de la hauteur depuis le sommet (k = 2/3). a) V de la grande ? b) k³ ? d) V de la petite ? e) V du tronc ?'],
    corr: ['a) 81 ; b) 648 ; d) 216 ; e) 648 : trois fois plus.',
      'a) 140 ; b) 280 ; d) 280 ; e) 140 × 8 = 1 120 (k³ = 8).',
      'a) 75 m³ ; b) 8/27 ; d) 75 × 8/27 = 200/9 ≈ 22,2 m³ ; e) 75 − 200/9 = 475/9 ≈ 52,8 m³.'],
    fig: 'u4f9'
  },
  {
    t: 'Calculer le volume d’un cône et d’un tronc', comp: 'Géométrie et Mesure', theme: 'Volume du cône de révolution, tronc de cône',
    goal: 'calculer le volume d’un cône de révolution et d’un tronc de cône',
    mat: 'Entonnoirs, gobelets coniques, calculatrice, cahier',
    revQ: 'Volume d’un cylindre de rayon 3 et hauteur 7 (π ≈ 3,14) ?',
    revRA: '≈ 197,8.',
    situation: 'Le tas de paddy de la récolte monte en cône parfait : 1,2 m de haut, 2 m de rayon à la base. Combien de sacs ? Et l’entonnoir à riz coupé du bas — un tronc de cône — que contient-il ? La formule du tiers revient, en version ronde.',
    def: 'Le volume d’un cône de révolution est le tiers du produit de l’aire de son disque de base par sa hauteur : V = (π × r² × h) ÷ 3. Le volume d’un tronc de cône s’obtient en soustrayant le volume du petit cône enlevé de celui du grand cône.',
    autrement: 'le cône est le tiers de son cylindre : π r² h, puis ÷ 3 ; le tronc, comme pour la pyramide, c’est le grand moins le petit.',
    concept: 'Le cône est la pyramide des objets ronds : même expérience du riz (trois cônes remplissent le cylindre), même formule au tiers — la base est simplement le disque πr². Discipline de calcul : ÉLEVER r au carré AVANT tout le reste (le piège πr² ≠ (πr)²), garder la valeur exacte en π jusqu’au bout (V = 1,6π m³) et n’arrondir qu’à la fin. Le tas de paddy : V = π × 4 × 1,2 ÷ 3 = 1,6π ≈ 5,03 m³ — environ 50 sacs de 100 L ! Le TRONC suit la loi des k³ : seau tronconique = grand cône (jusqu’à la pointe imaginaire) moins petit cône ; si le rayon du haut vaut la moitié de celui du bas, la pointe manquante ne représente que 1/8 du grand cône. Doubler le rayon d’un cône multiplie son volume par 4 (le r est au carré), doubler la hauteur ne fait que × 2 : le rayon est le levier le plus puissant.',
    synthese: 'V = πr²h/3 ; r² avant tout ; valeur exacte en π puis arrondi final ; tronc = grand − petit (k³) ; rayon au carré = levier double.',
    method: ['Identifier r et h (h perpendiculaire, pas la génératrice !).', 'Calculer πr²h puis diviser par 3 ; garder π si possible.', 'Tronc : reconstituer le grand cône, soustraire le petit.'],
    exemple: 'r = 3, h = 7 : V = π × 9 × 7 ÷ 3 = 21π ≈ 65,9 cm³.',
    erreur: 'Confondre hauteur et génératrice : la pente g du cône est TOUJOURS plus longue que la hauteur h (elle descend en biais). Dans la formule du volume, seul h compte — g servait à l’aire latérale, pas au volume.',
    saistu: 'Le tas conique est la forme naturelle de tout grain versé : l’angle du talus (environ 30-35° pour le riz paddy) ne dépend que du frottement des grains, pas de la hauteur du tas ! Les silos du monde entier sont dimensionnés avec cette constante — et la formule du tiers.',
    exos: ['Cône : r = 6, h = 10 (π ≈ 3,14). a) r² ? b) πr² ? d) V exact en π ? e) V arrondi à l’unité ?',
      'Le tas de paddy : r = 2 m, h = 1,2 m. a) V exact ? b) V ≈ ? d) En litres ? e) Combien de sacs de 100 L ?',
      'Un seau tronconique : grand cône de rayon 20 cm et hauteur 40 cm, coupé à mi-hauteur (k = 1/2). a) V du grand cône (en π) ? b) k³ ? d) V du petit cône ? e) V du seau (tronc), arrondi au litre (π ≈ 3,14) ?'],
    corr: ['a) 36 ; b) ≈ 113,04 ; d) 120π ; e) ≈ 377.',
      'a) 1,6π m³ ; b) ≈ 5,02 m³ ; d) ≈ 5 020 L ; e) une cinquantaine.',
      'a) (π × 400 × 40)/3 = 16000π/3 cm³ ; b) 1/8 ; d) 2000π/3 cm³ ; e) 14000π/3 ≈ 14 653 cm³ ≈ 15 L.'],
    fig: 'u4f10'
  },
  {
    t: 'Calculer l’aire d’une sphère et le volume d’une boule', comp: 'Géométrie et Mesure', theme: 'Sphère et boule',
    goal: 'distinguer sphère et boule et appliquer les formules A = 4πr² et V = 4πr³/3',
    mat: 'Ballon, orange, ficelle, calculatrice, cahier',
    revQ: 'Aire d’un disque de rayon 5 ? (π ≈ 3,14)',
    revRA: '≈ 78,5.',
    situation: 'Une orange : sa peau, et sa chair. Qui veut peindre un ballon s’intéresse à la peau ; qui veut le gonfler s’intéresse au dedans. En géométrie, la peau s’appelle sphère, le fruit entier s’appelle boule — deux mots, deux formules, deux mondes.',
    def: 'La sphère de centre O et de rayon r est l’ensemble des points situés à la distance r de O (une surface) ; la boule est l’ensemble des points à une distance inférieure ou égale à r (un solide plein). L’aire de la sphère vaut A = 4 × π × r² ; le volume de la boule vaut V = (4 × π × r³) ÷ 3.',
    autrement: 'sphère = la peau (on calcule son aire en cm²) ; boule = le fruit plein (on calcule son volume en cm³) ; retenir « 4πr² » et « 4πr³ sur 3 ».',
    concept: 'La sphère réalise deux records : parmi toutes les surfaces fermées d’aire donnée, elle enferme le PLUS GRAND volume — voilà pourquoi bulles de savon, gouttes d’eau et planètes sont rondes, la nature économise ! Les deux formules se retiennent par leurs dimensions : l’AIRE porte un r² (une surface = deux longueurs), le VOLUME un r³ (trois longueurs) — impossible de les confondre si l’on surveille l’exposant. Coïncidence lumineuse : 4πr², c’est exactement QUATRE disques de rayon r — l’orange pelée couvre quatre fois son ombre ! Et la boule remplit les 2/3 de son cylindre circonscrit, découverte dont Archimède fut si fier qu’il la fit graver sur sa tombe. Effet k³ toujours : un ballon de rayon double contient 8 fois plus d’air, une planète de rayon 11 fois la Terre (Jupiter) plus de 1 300 fois son volume.',
    synthese: 'sphère = surface (A = 4πr², quatre disques) ; boule = solide (V = 4πr³/3, 2/3 du cylindre) ; r² pour l’aire, r³ pour le volume ; rayon double → volume × 8.',
    method: ['Identifier r (attention : l’énoncé donne parfois le diamètre !).', 'Choisir la formule : peau → 4πr², contenu → 4πr³/3.', 'Calculer en π, arrondir à la fin, contrôler l’unité (² ou ³).'],
    exemple: 'Ballon r = 10 cm : A = 400π ≈ 1 256 cm² ; V = 4000π/3 ≈ 4 189 cm³ ≈ 4,2 L.',
    erreur: 'Entrer le DIAMÈTRE dans les formules : une boule « de 20 cm » (de diamètre) a un rayon de 10 — se tromper multiplie l’aire par 4 et le volume par 8 ! Toujours convertir en rayon d’abord.',
    saistu: 'La Terre est une boule de rayon 6 371 km : sa surface, 4πr² ≈ 510 millions de km², porte les 71 % d’océans ; son volume avalerait 1 million de fois la Lune… et le Soleil avalerait 1,3 million de Terres. Les r³ rendent l’astronomie vertigineuse !',
    exos: ['Boule de rayon 3 cm (π ≈ 3,14). a) r³ ? b) V exact en π ? d) V arrondi ? e) A de sa sphère ?',
      'Un ballon de diamètre 24 cm. a) r ? b) A exacte ? d) V exact ? e) V en litres (arrondi) ?',
      'a) Que devient l’aire d’une sphère si r triple ? b) Et le volume de la boule ? d) Une boule de r = 2 et une de r = 4 : rapport des volumes ? e) Pourquoi les bulles de savon sont-elles rondes ?'],
    corr: ['a) 27 ; b) 36π ; d) ≈ 113 cm³ ; e) 36π ≈ 113 cm² (coïncidence du rayon 3 !).',
      'a) 12 ; b) 576π cm² ; d) 2 304π cm³ ; e) ≈ 7 235 cm³ ≈ 7 L.',
      'a) × 9 ; b) × 27 ; d) 1 à 8 ; e) la sphère enferme le plus grand volume pour une surface donnée : le film de savon minimise sa surface.'],
    fig: 'u4f11'
  },
  {
    t: 'Agrandir ou réduire aires et volumes', comp: 'Géométrie et Mesure', theme: 'Rapport d’agrandissement ou de réduction',
    goal: 'utiliser un rapport k pour calculer les aires (k²) et volumes (k³) d’un solide agrandi ou réduit',
    mat: 'Maquettes gigognes, cubes emboîtables, calculatrice, cahier',
    revQ: 'Si les longueurs doublent, l’aire d’un carré est multipliée par… ?',
    revRA: '4.',
    situation: 'Deux marmites de même forme chez Bodo : la petite (20 cm de diamètre) pour la famille, la grande (40 cm) pour les fêtes. « Deux fois plus large, donc deux fois plus de riz ? » Erreur gourmande : il y en a HUIT fois plus. Les volumes ne grandissent pas comme les longueurs.',
    def: 'Dans un agrandissement ou une réduction de rapport k, toutes les longueurs sont multipliées par k, toutes les aires par k² et tous les volumes par k³. Le rapport k est le quotient d’une longueur de la copie par la longueur correspondante de l’original.',
    autrement: 'une seule clé k, trois serrures : × k pour les longueurs, × k² pour les surfaces, × k³ pour les contenus.',
    concept: 'La loi des puissances de k unifie toute l’unité : triangles semblables (aires k², séance 2), troncs (volumes k³, séances 9-10), boules gigognes — partout le même trio. L’intuition du CUBE la rend évidente : un cube d’arête double se reconstruit avec 2 × 2 × 2 = 8 petits cubes ; chaque face avec 2 × 2 = 4 petits carrés. Le sens RÉDUCTION utilise k entre 0 et 1 : maquette au 1/100 → aires au 1/10 000, volumes au 1/1 000 000 ! Le sens INVERSE exige les racines : volumes dans le rapport 27 → longueurs dans le rapport ∛27 = 3 ; aires dans le rapport 25 → longueurs × 5. Les pièges du quotidien en découlent : la pizza « familiale » de diamètre 40 contre la « normale » de 30 (aires ×16/9 ≈ 1,8 : presque le double !), le bidon « deux fois plus haut ET plus large » qui en contient huit fois plus. k, k², k³ : la plus rentable des tables de multiplication.',
    synthese: 'longueurs × k, aires × k², volumes × k³ ; réduction : k entre 0 et 1 ; inverse : √ pour les aires, ∛ pour les volumes ; cube 2×2×2 = l’image mentale.',
    method: ['Calculer k = longueur copie ÷ longueur originale.', 'Appliquer k, k² ou k³ selon la grandeur demandée.', 'Sens inverse : extraire √ (aires) ou ∛ (volumes) avant de conclure.'],
    exemple: 'Marmites k = 2 : contenance petite 4 L → grande 4 × 8 = 32 L. Maquette de case au 1/50 : volume réel = volume maquette × 125 000.',
    erreur: 'Multiplier le volume par k « parce que c’est proportionnel » : rien n’est plus faux en trois dimensions ! Une statue 3 fois plus haute pèse 27 fois plus lourd — les livreurs de statues ne l’oublient jamais.',
    saistu: 'La vraie raison pour laquelle les fourmis soulèvent 50 fois leur poids : en rapetissant, le poids fond en k³ mais la force des muscles (une section, donc une aire) ne fond qu’en k² — les petits sont proportionnellement surpuissants. Un homme-fourmi géant, lui, ne se lèverait même pas !',
    exos: ['k = 3. a) Une longueur 5 devient ? b) Une aire 7 ? d) Un volume 2 ? e) Un périmètre 12 ?',
      'La petite marmite contient 4,5 L (diamètre 20) ; la grande a un diamètre de 40. a) k ? b) k³ ? d) Contenance de la grande ? e) Et l’aire de métal, multipliée par ?',
      'Deux statues semblables : volumes 2 L et 54 L. a) Rapport des volumes ? b) k ? d) La petite mesure 30 cm : la grande ? e) Rapport des aires à peindre ?'],
    corr: ['a) 15 ; b) 63 ; d) 54 ; e) 36.',
      'a) 2 ; b) 8 ; d) 36 L ; e) 4.',
      'a) 27 ; b) ∛27 = 3 ; d) 90 cm ; e) 9.'],
    fig: 'u4f12'
  },
  {
    t: 'Calculer des volumes décomposables', comp: 'Géométrie et Mesure', theme: 'Solides composés : additionner, soustraire',
    goal: 'calculer le volume d’un solide décomposable en solides simples',
    mat: 'Maquettes composées, formulaire des volumes, calculatrice',
    revQ: 'Volumes : prisme ? cylindre ? pyramide ? cône ? boule ?',
    revRA: 'Bh ; πr²h ; Bh/3 ; πr²h/3 ; 4πr³/3.',
    situation: 'La case à toit conique du village : un cylindre de murs coiffé d’un cône de chaume. Son volume d’air ? Aucune formule « case » n’existe dans le formulaire… mais la case se DÉCOUPE : un cylindre + un cône, deux formules amies, une addition.',
    def: 'Un solide décomposable est un solide que l’on peut partager en solides simples (prismes, cylindres, pyramides, cônes, demi-boules) dont on connaît les formules. Son volume est la somme des volumes des morceaux ; si le solide comporte un creux, on soustrait le volume du creux.',
    autrement: 'découper en morceaux connus, calculer chaque morceau, additionner — et retrancher les trous.',
    concept: 'La décomposition est la stratégie universelle des volumes réels : rien dans le monde n’est un cône pur ! Trois gestes la gouvernent. DÉCOUPER : repérer les solides simples (la case = cylindre + cône ; le hangar = pavé + demi-cylindre ; la glace = cône + demi-boule). PARTAGER les dimensions : les morceaux héritent de cotes communes — le rayon du cône de toit EST celui du cylindre de murs ; la hauteur totale se répartit entre les étages (h_cylindre + h_cône). CALCULER puis COMBINER : addition pour les morceaux pleins, SOUSTRACTION pour les creux (tuyau = gros cylindre − petit cylindre ; buse en béton, bague, abreuvoir creusé). La rigueur d’écriture paie : nommer chaque volume (V₁, V₂), donner les valeurs exactes en π, additionner, convertir à la fin (1 m³ = 1 000 L). C’est la séance-couronnement : toutes les formules de l’unité travaillent enfin ensemble.',
    synthese: 'découper en solides simples ; cotes partagées (rayons, hauteurs réparties) ; additionner les pleins, soustraire les creux ; V₁, V₂… puis total et conversion.',
    method: ['Tracer mentalement les coupes : nommer les solides simples.', 'Répartir les dimensions entre les morceaux (schéma coté).', 'Calculer chaque volume, additionner ou soustraire, convertir.'],
    exemple: 'Case : cylindre r = 3 m, h = 2,5 m (V₁ = 22,5π) + cône r = 3, h = 2 (V₂ = 6π) : V = 28,5π ≈ 89,5 m³.',
    erreur: 'Donner au cône du toit TOUTE la hauteur de la case : la hauteur totale (4,5 m) se partage entre murs (2,5 m) et toit (2 m) ! Faire un schéma coté avant tout calcul — les cotes mal réparties ruinent le découpage le plus juste.',
    saistu: 'Les architectes calculent les volumes d’air pour dimensionner l’aération : les normes scolaires recommandent plusieurs m³ d’air par élève. Mesure ta salle de classe (un simple pavé !), divise par l’effectif… et vérifie si vos fenêtres ont du travail.',
    exos: ['La case : cylindre r = 3, h = 2,5 + cône même rayon, h = 2 (π gardé). a) V du cylindre ? b) V du cône ? d) V total exact ? e) V ≈ en m³ (π ≈ 3,14) ?',
      'Un cornet de glace : cône r = 3 cm, h = 10 cm + demi-boule r = 3. a) V du cône (en π) ? b) V de la demi-boule ? d) V total exact ? e) ≈ en cm³ ?',
      'Une buse en béton : cylindre extérieur r = 50 cm, cylindre creux r = 40 cm, longueur 2 m. a) V extérieur (en π, en m³) ? b) V du creux ? d) V de béton exact ? e) ≈ en m³ et en litres ?'],
    corr: ['a) 22,5π ; b) 6π ; d) 28,5π ; e) ≈ 89,5 m³.',
      'a) 30π ; b) (2/3) × 27π = 18π ; d) 48π ; e) ≈ 150,7 cm³.',
      'a) π × 0,25 × 2 = 0,5π ; b) π × 0,16 × 2 = 0,32π ; d) 0,18π m³ ; e) ≈ 0,565 m³ = 565 L.'],
    fig: 'u4f13'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Géométrie et Mesure',
  rag: 'résoudre des situations problématiques quotidiennes en décrivant, comparant et construisant les figures géométriques et en utilisant convenablement leurs propriétés.',
  valeurs: 'rigueur et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Triangles semblables', 'Angles égaux 2 à 2 ; côtés × k ; périmètres × k, aires × k²', 'Mesurer l’inaccessible (ombres, visées)'],
      ['Thalès', 'Pointe A + parallèles : AM/AB = AN/AC = MN/BC ; AB = AM + MB !', 'Calculer les longueurs des figures emboîtées'],
      ['Droite des milieux', 'Milieux ⇒ parallèle + moitié ; réciproque ⇒ nouveau milieu', 'Démontrer parallélismes et milieux'],
      ['Polygones réguliers', 'Côtés ET angles égaux ; angle au centre 360°/n ; hexagone au compas', 'Décrire et construire les formes parfaites'],
      ['Volumes au tiers', 'Pyramide Bh/3 ; cône πr²h/3 ; sphère 4πr², boule 4πr³/3', 'Greniers, tas de paddy, ballons'],
      ['k, k², k³', 'Longueurs × k, aires × k², volumes × k³ ; troncs = grand − petit', 'Marmites, maquettes, solides composés']
    ],
    questions: [
      'Deux triangles ont des angles de 35° et 80° chacun : semblables ? Le 3ᵉ angle ?',
      '(MN) ∥ (BC), AM = 6, MB = 4, MN = 9 : calcule BC.',
      'Angle au centre et angle intérieur d’un pentagone régulier ?',
      'Un cône : r = 5, h = 9. Volume exact puis arrondi (π ≈ 3,14) ?',
      'Une citerne sphérique de rayon 1,5 m : volume en litres (π ≈ 3,14, arrondi) ? Et si le rayon double ?'
    ],
    answers: [
      'Oui (deux paires d’angles égaux) ; 65°.',
      'AB = 10 ; 6/10 = 9/BC → BC = 15.',
      '72° ; 108°.',
      '75π ≈ 235,5.',
      'V = 4,5π ≈ 14,13 m³ ≈ 14 130 L ; × 8 (k³), ≈ 113 000 L.'
    ]
  },
  exam: {
    exos: [
      'Un bâton de 1,5 m planté verticalement donne une ombre de 2 m ; au même instant, le baobab du village donne une ombre de 24 m. a) Justifie que les deux triangles sont semblables. b) Pose la proportion. d) Calcule la hauteur du baobab. e) L’aire du triangle du baobab est combien de fois celle du triangle du bâton ?',
      'Dans le triangle ABC, M ∈ [AB], N ∈ [AC], (MN) ∥ (BC), AM = 5, MB = 3, AN = 4, MN = 6. a) Calcule AB. b) Calcule AC puis NC. d) Calcule BC. e) I et J sont les milieux de [AB] et [AC] : que valent IJ et la position de (IJ) ?',
      'a) Calcule l’angle au centre d’un polygone régulier à 12 côtés. b) Son angle intérieur. d) Quel polygone régulier a un angle intérieur de 108° ? e) Décris la construction de l’hexagone régulier au compas seul.',
      'Un grenier a la forme d’un prisme surmonté d’une pyramide : base carrée de côté 4 m ; murs de hauteur 3 m ; pyramide de hauteur 1,5 m. a) Volume du prisme ? b) Volume de la pyramide ? d) Volume total ? e) Capacité en litres ?',
      'Une boule de pétanque a un rayon de 4 cm ; une boule de même forme a un rayon de 8 cm (π ≈ 3,14). a) Volume de la petite (exact en π) ? b) De la grande ? d) Vérifie le rapport des volumes avec k³. e) Rapport des aires des deux sphères ?'
    ],
    corr: [
      'a) rayons du soleil parallèles et sol horizontal : deux paires d’angles égaux ; b) h/1,5 = 24/2 ; d) h = 18 m ; e) k = 12, aires × 144. Un point par item.',
      'a) 8 ; b) 5/8 = 4/AC → AC = 6,4 ; NC = 2,4 ; d) 6 × 8/5 = 9,6 ; e) IJ = 4,8 et (IJ) ∥ (BC). Un point par item.',
      'a) 30° ; b) 150° ; d) le pentagone ; e) cercle, compas gardé au rayon, six reports sur le cercle, relier les six points. Un point par item.',
      'a) 16 × 3 = 48 m³ ; b) 16 × 1,5 ÷ 3 = 8 m³ ; d) 56 m³ ; e) 56 000 L. Un point par item.',
      'a) 256π/3 cm³ ; b) 2048π/3 cm³ ; d) 2048/256 = 8 = 2³ ✓ ; e) 4 (k²). Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
