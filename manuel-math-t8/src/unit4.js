// UNITÉ 4 — GÉOMÉTRIE (PE T8) : 16 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

const circ = (cx, cy, r, color = BLUE, wd = 3.5, dash = '') =>
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${wd}"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
const tick = (x1, y1, x2, y2, color = OCRE) => {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const dx = x2 - x1, dy = y2 - y1, len = Math.hypot(dx, dy);
  const nx = -dy / len * 9, ny = dx / len * 9;
  return seg(mx - nx, my - ny, mx + nx, my + ny, color, 3);
};

const figs = {};
// S1 — papillon + axe
figs.u4f1 = (() => { const { s, y } = head('La symétrie axiale', ['Plie le long de l’axe : les deux ailes du papillon se superposent exactement.']);
  const cx = 500, top = y + 30;
  let b = seg(cx, top, cx, top + 260, PINK2, 3.5, '10 8');
  b += poly([[cx - 10, top + 70], [cx - 180, top + 20], [cx - 150, top + 130], [cx - 10, top + 120]], '#A5D6A7', GREEN, 3);
  b += poly([[cx - 10, top + 130], [cx - 140, top + 150], [cx - 60, top + 230], [cx - 10, top + 180]], '#C8E6C9', GREEN, 3);
  b += poly([[cx + 10, top + 70], [cx + 180, top + 20], [cx + 150, top + 130], [cx + 10, top + 120]], '#A5D6A7', GREEN, 3);
  b += poly([[cx + 10, top + 130], [cx + 140, top + 150], [cx + 60, top + 230], [cx + 10, top + 180]], '#C8E6C9', GREEN, 3);
  b += txt(cx, top + 300, 'axe de symétrie (pli)', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 335, s + b); })();
// S2 — image d'un point par symétrie axiale
figs.u4f2 = (() => { const { s, y } = head('Construire M′, symétrique de M par rapport à d', ['(MM′) est perpendiculaire à d, et M et M′ sont à égale distance de d.']);
  const ax = 500, top = y + 20;
  let b = seg(ax, top, ax, top + 250, PINK2, 3.5) + txt(ax + 4, top + 282, 'd', 24, PINK2, 'bold', 'middle');
  const my = top + 125;
  b += seg(170, my, 830, my, '#777', 2.5, '7 6');
  b += dot(170, my, 8, BLUE) + txt(140, my + 8, 'M', 24, BLUE, 'bold', 'middle');
  b += dot(830, my, 8, GREEN) + txt(862, my + 8, 'M′', 24, GREEN, 'bold', 'middle');
  b += dot(ax, my, 7, PINK2) + txt(ax + 24, my - 16, 'H', 21, PINK2, 'bold', 'middle');
  b += tick(170, my, ax, my) + tick(ax, my, 830, my);
  b += `<path d="M ${ax - 22} ${my} L ${ax - 22} ${my - 22} L ${ax} ${my - 22}" fill="none" stroke="${OCRE}" stroke-width="2.5"/>`;
  b += txt(500, top + 318, 'même distance de part et d’autre : MH = HM′', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 350, s + b); })();
// S3 — symétrie centrale : demi-tour
figs.u4f3 = (() => { const { s, y } = head('La symétrie centrale : un demi-tour', ['On fait tourner la figure d’un demi-tour (180°) autour du centre O.']);
  const ox = 500, oy = y + 160;
  let b = dot(ox, oy, 9, PINK2) + txt(ox, oy + 40, 'O', 24, PINK2, 'bold', 'middle');
  b += poly([[ox - 240, oy - 110], [ox - 90, oy - 130], [ox - 130, oy - 30]], '#BBDEFB', '#1565C0', 3);
  b += poly([[ox + 240, oy + 110], [ox + 90, oy + 130], [ox + 130, oy + 30]], '#C8E6C9', GREEN, 3);
  b += `<path d="M ${ox - 60} ${oy - 70} A 92 92 0 0 1 ${ox + 60} ${oy + 70}" fill="none" stroke="${OCRE}" stroke-width="3.5" marker-end="none" stroke-dasharray="4 7"/>`;
  b += txt(ox + 110, oy - 60, '180°', 24, OCRE, 'bold', 'middle');
  b += txt(500, oy + 180, 'la figure image est retournée, « tête en bas »', 22, OCRE, 'bold', 'middle');
  return svg(1000, oy + 215, s + b); })();
// S4 — image d'un point par symétrie centrale
figs.u4f4 = (() => { const { s, y } = head('Construire M′, symétrique de M par rapport à O', ['M, O et M′ sont alignés, et OM = OM′ : O est le milieu de [MM′].']);
  const oy = y + 110;
  let b = seg(180, oy + 70, 820, oy - 70, '#777', 2.5, '7 6');
  b += dot(180, oy + 70, 8, BLUE) + txt(150, oy + 80, 'M', 24, BLUE, 'bold', 'middle');
  b += dot(500, oy, 9, PINK2) + txt(500, oy - 32, 'O', 24, PINK2, 'bold', 'middle');
  b += dot(820, oy - 70, 8, GREEN) + txt(852, oy - 62, 'M′', 24, GREEN, 'bold', 'middle');
  b += tick(180, oy + 70, 500, oy) + tick(500, oy, 820, oy - 70);
  b += txt(500, oy + 140, 'alignement + distances égales : la règle graduée suffit !', 22, OCRE, 'bold', 'middle');
  return svg(1000, oy + 175, s + b); })();
// S5 — figure par symétrie axiale
figs.u4f5 = (() => { const { s, y } = head('L’image d’une figure par symétrie axiale', ['On construit le symétrique de CHAQUE sommet, puis on relie.']);
  const ax = 500, top = y + 20;
  let b = seg(ax, top, ax, top + 260, PINK2, 3.5) + txt(ax, top + 292, 'd', 24, PINK2, 'bold', 'middle');
  b += poly([[180, top + 60], [380, top + 30], [300, top + 220]], '#BBDEFB', '#1565C0', 3);
  b += poly([[820, top + 60], [620, top + 30], [700, top + 220]], '#C8E6C9', GREEN, 3);
  b += txt(165, top + 46, 'A', 22, '#1565C0', 'bold', 'middle') + txt(390, top + 16, 'B', 22, '#1565C0', 'bold', 'middle') + txt(290, top + 252, 'C', 22, '#1565C0', 'bold', 'middle');
  b += txt(838, top + 46, 'A′', 22, GREEN, 'bold', 'middle') + txt(610, top + 16, 'B′', 22, GREEN, 'bold', 'middle') + txt(712, top + 252, 'C′', 22, GREEN, 'bold', 'middle');
  b += seg(180, top + 60, 820, top + 60, '#999', 1.8, '5 6') + seg(380, top + 30, 620, top + 30, '#999', 1.8, '5 6') + seg(300, top + 220, 700, top + 220, '#999', 1.8, '5 6');
  return svg(1000, top + 310, s + b); })();
// S6 — figure par symétrie centrale
figs.u4f6 = (() => { const { s, y } = head('L’image d’une figure par symétrie centrale', ['Chaque sommet passe de l’autre côté de O, à la même distance.']);
  const ox = 500, oy = y + 150;
  let b = dot(ox, oy, 9, PINK2) + txt(ox - 2, oy - 24, 'O', 23, PINK2, 'bold', 'middle');
  b += poly([[ox - 290, oy - 60], [ox - 110, oy - 120], [ox - 150, oy - 10]], '#BBDEFB', '#1565C0', 3);
  b += poly([[ox + 290, oy + 60], [ox + 110, oy + 120], [ox + 150, oy + 10]], '#C8E6C9', GREEN, 3);
  b += seg(ox - 290, oy - 60, ox + 290, oy + 60, '#999', 1.8, '5 6') + seg(ox - 110, oy - 120, ox + 110, oy + 120, '#999', 1.8, '5 6');
  b += txt(ox - 310, oy - 76, 'A', 22, '#1565C0', 'bold', 'middle') + txt(ox + 312, oy + 78, 'A′', 22, GREEN, 'bold', 'middle');
  b += txt(ox - 100, oy - 142, 'B', 22, '#1565C0', 'bold', 'middle') + txt(ox + 102, oy + 144, 'B′', 22, GREEN, 'bold', 'middle');
  b += txt(500, oy + 185, 'toutes les droites (AA′), (BB′), (CC′) passent par O', 22, OCRE, 'bold', 'middle');
  return svg(1000, oy + 220, s + b); })();
// S7 — frise
figs.u4f7 = (() => { const { s, y } = head('Frises et pavages : des symétries qui se répètent', ['Un motif, des symétries, et la frise s’étire à l’infini — comme sur un lamba tissé.']);
  const top = y + 30;
  let b = seg(80, top, 920, top, '#888', 2) + seg(80, top + 150, 920, top + 150, '#888', 2);
  for (let k = 0; k < 5; k++) {
    const x = 120 + k * 165;
    b += poly([[x, top + 140], [x + 60, top + 15], [x + 120, top + 140]], k % 2 ? '#C8E6C9' : '#F8BBD0', k % 2 ? GREEN : PINK2, 2.5);
  }
  b += seg(367, top - 12, 367, top + 162, OCRE, 2.5, '8 6') + seg(698, top - 12, 698, top + 162, OCRE, 2.5, '8 6');
  b += txt(500, top + 205, 'axes verticaux entre les motifs : symétries axiales de la frise', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 240, s + b); })();
// S8 — conservation
figs.u4f8 = (() => { const { s, y } = head('Ce que les symétries conservent', ['Distances, angles, aires, alignement : la figure image est une copie parfaite.']);
  const data = [['Propriété', 'Avant', 'Après symétrie'], ['Longueur AB', '4 cm', '4 cm'], ['Angle Â', '60°', '60°'], ['Aire', '6 cm²', '6 cm²'], ['Alignement', 'A, B, C alignés', 'A′, B′, C′ alignés']];
  let b = tableEl(170, y + 20, [240, 200, 240], 58, data);
  b += txt(500, y + 350, 'seule l’ORIENTATION peut changer (figure retournée)', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 385, s + b); })();
// S9 — démonstration
figs.u4f9 = (() => { const { s, y } = head('Démontrer grâce à la symétrie', ['Si la médiatrice de [BC] passe par A, la symétrie échange B et C : donc AB = AC.']);
  const top = y + 25, Ax = 500, Ay = top, Bx = 300, By = top + 240, Cx = 700, Cy = top + 240;
  let b = poly([[Ax, Ay], [Bx, By], [Cx, Cy]], '#FFF9C4', OCRE, 3);
  b += seg(Ax, Ay - 10, Ax, By + 24, PINK2, 3, '9 7');
  b += txt(Ax, Ay - 22, 'A', 23, OCRE, 'bold', 'middle') + txt(Bx - 26, By + 10, 'B', 23, OCRE, 'bold', 'middle') + txt(Cx + 26, Cy + 10, 'C', 23, OCRE, 'bold', 'middle');
  b += tick(Ax, Ay, Bx, By, GREEN) + tick(Ax, Ay, Cx, Cy, GREEN);
  b += txt(500, By + 60, 'la symétrie conserve les distances → AB = AC : triangle isocèle, démontré !', 20, GREEN, 'bold', 'middle');
  return svg(1000, By + 95, s + b); })();
// S10 — programme de construction
figs.u4f10 = (() => { const { s, y } = head('Le programme de construction', ['Des instructions numérotées qu’un camarade suit sans voir ta figure.']);
  const steps = ['1. Trace un segment [BC] de 6 cm.', '2. Trace la médiatrice d de [BC].', '3. Place A sur d, à 5 cm de B.', '4. Relie A à B et A à C.'];
  let b = '';
  steps.forEach((t, i) => {
    b += box(150, y + 20 + i * 78, 700, 62, '', i % 2 ? '#E8F5E9' : '#E3F2FD', i % 2 ? GREEN : '#1565C0', 22)
      + txt(500, y + 59 + i * 78, t, 22, i % 2 ? GREEN : '#1565C0', 'bold', 'middle');
  });
  b += txt(500, y + 20 + 4 * 78 + 28, 'résultat garanti : un triangle isocèle en A', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 20 + 4 * 78 + 65, s + b); })();
// S11 — translation : glissement
figs.u4f11 = (() => { const { s, y } = head('La translation : un glissement', ['Tous les points glissent pareil : même direction, sens et longueur.']);
  const top = y + 30;
  let b = poly([[160, top + 130], [300, top + 30], [330, top + 160]], '#BBDEFB', '#1565C0', 3);
  b += poly([[560, top + 130], [700, top + 30], [730, top + 160]], '#C8E6C9', GREEN, 3);
  b += arrow(170, top + 125, 560, top + 125, OCRE, 3) + arrow(305, top + 32, 695, top + 32, OCRE, 3) + arrow(335, top + 158, 725, top + 158, OCRE, 3);
  b += txt(445, top + 205, 'trois flèches parallèles, de même longueur, de même sens', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 240, s + b); })();
// S12 — image d'un point par translation
figs.u4f12 = (() => { const { s, y } = head('Construire M′ par la translation qui amène A sur B', ['Le quadrilatère ABM′M est un parallélogramme : M′ fait le même pas que A → B.']);
  const top = y + 30;
  const A = [220, top + 170], B = [520, top + 60], M = [380, top + 230], M2 = [680, top + 120];
  let b = arrow(A[0], A[1], B[0], B[1], PINK2, 3.5);
  b += seg(M[0], M[1], M2[0], M2[1], GREEN, 2.5, '8 6');
  b += seg(A[0], A[1], M[0], M[1], '#999', 1.8, '5 6') + seg(B[0], B[1], M2[0], M2[1], '#999', 1.8, '5 6');
  b += dot(...A, 8, PINK2) + dot(...B, 8, PINK2) + dot(...M, 8, BLUE) + dot(M2[0], M2[1], 8, GREEN);
  b += txt(A[0] - 26, A[1] + 6, 'A', 23, PINK2, 'bold', 'middle') + txt(B[0] + 8, B[1] - 16, 'B', 23, PINK2, 'bold', 'middle')
    + txt(M[0] - 10, M[1] + 32, 'M', 23, BLUE, 'bold', 'middle') + txt(M2[0] + 30, M2[1] + 6, 'M′', 23, GREEN, 'bold', 'middle');
  b += txt(500, top + 295, 'MM′ est parallèle à AB et de même longueur : ABM′M parallélogramme', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 330, s + b); })();
// S13 — cercle translaté
figs.u4f13 = (() => { const { s, y } = head('Translater un cercle, un segment, une droite', ['L’image d’un cercle est un cercle de MÊME rayon : il suffit de translater le centre.']);
  const top = y + 40, r = 95;
  let b = circ(270, top + 110, r, '#1565C0', 3.5) + circ(690, top + 110, r, GREEN, 3.5);
  b += dot(270, top + 110, 7, '#1565C0') + dot(690, top + 110, 7, GREEN);
  b += arrow(285, top + 110, 672, top + 110, OCRE, 3);
  b += txt(270, top + 110 - r - 16, 'C (centre O, rayon r)', 20, '#1565C0', 'bold', 'middle');
  b += txt(690, top + 110 - r - 16, 'C′ (centre O′, même rayon r)', 20, GREEN, 'bold', 'middle');
  b += txt(500, top + 110 + r + 52, 'segment → segment égal et parallèle ; droite → droite parallèle', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 110 + r + 88, s + b); })();
// S14 — propriétés translation
figs.u4f14 = (() => { const { s, y } = head('Ce que la translation conserve', ['Tout… y compris l’orientation : la figure n’est même pas retournée !']);
  const data = [['Propriété', 'Sym. axiale', 'Sym. centrale', 'Translation'], ['Distances', 'oui', 'oui', 'oui'], ['Angles, aires', 'oui', 'oui', 'oui'], ['Orientation', 'inversée', 'conservée*', 'conservée'], ['Figure…', 'retournée', 'tête en bas', 'glissée']];
  let b = tableEl(90, y + 20, [230, 200, 210, 180], 56, data);
  b += txt(500, y + 335, '* la symétrie centrale retourne la figure mais garde le sens de parcours', 19, '#555', 'normal', 'middle');
  return svg(1000, y + 370, s + b); })();
// S15 — homothétie
figs.u4f15 = (() => { const { s, y } = head('L’homothétie : agrandir depuis un centre', ['Depuis O, chaque point s’éloigne au double (k = 2) : la figure double de taille.']);
  const top = y + 30, O = [120, top + 200];
  const A = [320, top + 110], B = [420, top + 220], C = [260, top + 230];
  const k = 2;
  const A2 = [O[0] + k * (A[0] - O[0]), O[1] + k * (A[1] - O[1])], B2 = [O[0] + k * (B[0] - O[0]), O[1] + k * (B[1] - O[1])], C2 = [O[0] + k * (C[0] - O[0]), O[1] + k * (C[1] - O[1])];
  let b = dot(...O, 9, PINK2) + txt(O[0] - 4, O[1] + 34, 'O', 24, PINK2, 'bold', 'middle');
  b += seg(O[0], O[1], A2[0], A2[1], '#999', 1.8, '5 6') + seg(O[0], O[1], B2[0], B2[1], '#999', 1.8, '5 6') + seg(O[0], O[1], C2[0], C2[1], '#999', 1.8, '5 6');
  b += poly([A, B, C], '#BBDEFB', '#1565C0', 3) + poly([A2, B2, C2], 'none', GREEN, 3.5);
  b += txt(A[0], A[1] - 14, 'A', 21, '#1565C0', 'bold', 'middle') + txt(A2[0] + 6, A2[1] - 14, 'A′', 21, GREEN, 'bold', 'middle');
  b += txt(830, top + 60, 'OA′ = 2 × OA', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 330, s + b); })();
// S16 — k=2 et k=1/2
figs.u4f16 = (() => { const { s, y } = head('Agrandissement (k = 2) et réduction (k = 1/2)', ['k plus grand que 1 : la figure grossit ; k entre 0 et 1 : elle rétrécit.']);
  const top = y + 30;
  let b = box(90, top, 380, 70, '', '#E8F5E9', GREEN, 22) + box(530, top, 380, 70, '', '#FDE7EF', PINK2, 22);
  b += txt(280, top + 43, 'k = 2 : agrandissement ×2', 22, GREEN, 'bold', 'middle')
    + txt(720, top + 43, 'k = 1/2 : réduction ÷2', 22, PINK2, 'bold', 'middle');
  const O = [500, top + 300];
  b += dot(...O, 8, OCRE) + txt(O[0], O[1] + 32, 'O', 22, OCRE, 'bold', 'middle');
  b += poly([[O[0] - 60, O[1] - 60], [O[0] + 60, O[1] - 60], [O[0], O[1] - 150]], '#BBDEFB', '#1565C0', 3);
  b += poly([[O[0] - 120, O[1] - 120], [O[0] + 120, O[1] - 120], [O[0], O[1] - 300]], 'none', GREEN, 3);
  b += poly([[O[0] - 30, O[1] - 30], [O[0] + 30, O[1] - 30], [O[0], O[1] - 75]], 'none', PINK2, 3);
  b += txt(205, O[1] - 140, 'image ×2', 21, GREEN, 'bold', 'middle') + txt(760, O[1] - 40, 'image ×1/2', 21, PINK2, 'bold', 'middle');
  return svg(1000, O[1] + 60, s + b); })();

const S = [
  {
    t: 'Découvrir la symétrie axiale', comp: 'Géométrie', theme: 'Symétrie axiale : identification',
    goal: 'reconnaître une figure symétrique par rapport à un axe et identifier ses axes de symétrie',
    mat: 'Papiers à plier, ciseaux, miroirs, figures à trier',
    revQ: 'Cite des objets de la nature qui ont deux moitiés identiques.',
    revRA: 'Papillon, feuille, visage, libellule…',
    situation: 'Le papillon comète de Madagascar, l’un des plus grands papillons du monde, déploie deux ailes rigoureusement identiques. Plie son image le long du corps : les ailes se superposent exactement. Ce pli parfait, c’est un axe de symétrie.',
    def: 'Une figure admet un axe de symétrie lorsqu’en pliant la figure le long de cette droite, les deux parties se superposent exactement. On dit que la figure est symétrique par rapport à cet axe.',
    autrement: 'l’axe de symétrie est la ligne de pliage qui fait coïncider les deux moitiés.',
    concept: 'Le test du pliage est le critère absolu : si le pli superpose les deux parties, l’axe est bon. Le miroir donne le même verdict : posé sur l’axe, il reconstitue la figure entière. Une figure peut avoir plusieurs axes : le rectangle en a 2, le carré 4, le cercle une infinité ! Et beaucoup de figures n’en ont aucun. Attention à l’erreur classique du rectangle : ses diagonales ne sont PAS des axes de symétrie — le pliage le long d’une diagonale ne superpose pas les deux triangles.',
    synthese: 'axe de symétrie = droite de pliage qui superpose les deux moitiés ; une figure peut avoir 0, 1, plusieurs ou une infinité d’axes.',
    method: ['Imaginer (ou réaliser) le pliage le long de la droite testée.', 'Vérifier la superposition EXACTE des deux parties.', 'Chercher TOUS les axes possibles : horizontal, vertical, obliques.'],
    exemple: 'Carré : 4 axes (2 médianes + 2 diagonales) ; rectangle : 2 axes (les médianes seulement) ; triangle équilatéral : 3 axes ; lettre A : 1 axe vertical.',
    erreur: 'Donner les diagonales du rectangle comme axes de symétrie. Plie un rectangle (non carré) le long d’une diagonale : les pointes dépassent ! Seules les deux médianes sont des axes.',
    saistu: 'Le papillon comète (Argema mittrei), endémique de Madagascar, atteint 20 cm d’envergure avec des queues de 15 cm. Sa symétrie parfaite n’est pas un hasard : dans la nature, la symétrie est souvent un signe de bonne santé !',
    exos: ['Combien d’axes de symétrie ? a) un carré ; b) un rectangle non carré ; d) un cercle ; e) un triangle équilatéral.',
      'Ces lettres ont-elles un axe de symétrie (et lequel) ? a) A ; b) B ; d) H ; e) F.',
      'Dessine à main levée : a) une figure avec exactement 1 axe ; b) une figure avec exactement 2 axes ; d) une figure sans aucun axe ; e) donne un objet de ta maison symétrique et son axe.'],
    corr: ['a) 4 ; b) 2 ; d) une infinité ; e) 3.',
      'a) oui, vertical ; b) oui, horizontal ; d) oui, les deux ; e) aucun.',
      'a) ex. : cœur, lettre A ; b) ex. : rectangle, lettre H (2 axes) ; d) ex. : lettre F, drapeau d’un bateau ; e) ex. : porte (axe vertical), natte tsihy…'],
    fig: 'u4f1'
  },
  {
    t: 'Construire l’image d’un point par symétrie axiale', comp: 'Géométrie', theme: 'Symétrique d’un point : perpendiculaire et égale distance',
    goal: 'construire le symétrique d’un point par rapport à une droite avec équerre et compas',
    mat: 'Règle, équerre, compas, papier quadrillé et blanc',
    revQ: 'Trace une droite perpendiculaire à une droite donnée passant par un point donné.',
    revRA: 'Avec l’équerre : un côté de l’angle droit sur la droite, l’autre passant par le point.',
    situation: 'Mialy place un caillou M devant le miroir d. Où apparaît son reflet ? Exactement « de l’autre côté », sur la perpendiculaire au miroir, à la même distance. Construire un symétrique, c’est construire un reflet.',
    def: 'Le symétrique du point M par rapport à la droite d est le point M′ tel que d soit la médiatrice du segment [MM′] : la droite (MM′) est perpendiculaire à d, et M et M′ sont à égale distance de d.',
    autrement: 'on traverse le miroir tout droit (perpendiculairement) et on avance de la même distance de l’autre côté.',
    concept: 'Construction à l’équerre et à la règle : tracer la perpendiculaire à d passant par M ; elle coupe d en H ; reporter la distance MH de l’autre côté : M′ est tel que MH = HM′. Au compas seul : deux arcs centrés sur deux points de d, passant par M, se recoupent en M′ — plus rapide et plus précis. Cas particulier : si M est SUR la droite d, son symétrique est lui-même : M′ = M. Les points de l’axe sont les points fixes de la symétrie.',
    synthese: 'd = médiatrice de [MM′] : perpendiculaire + égale distance ; au compas : deux arcs depuis deux points de d ; un point de d est son propre symétrique.',
    method: ['Tracer la perpendiculaire à d passant par M ; noter H son pied.', 'Reporter MH de l’autre côté de d : on obtient M′.', 'Contrôler : MH = HM′ et (MM′) ⊥ d.'],
    exemple: 'M à 3 cm de d → M′ à 3 cm de l’autre côté, sur la même perpendiculaire ; M sur d → M′ = M.',
    erreur: 'Placer M′ « en face » à vue d’œil, sans perpendiculaire : le reflet part de travers ! Les DEUX conditions sont nécessaires : perpendiculaire ET égale distance.',
    saistu: 'Les géomètres-topographes utilisent la symétrie pour mesurer des distances inaccessibles : pour connaître la largeur d’une rivière, on construit le symétrique d’un arbre de l’autre rive… et on mesure sur la terre ferme !',
    exos: ['M est à 4 cm de la droite d. a) À quelle distance de d se trouve M′ ? b) Que vaut MM′ ? d) Que dire de (MM′) et d ? e) Où est le symétrique d’un point situé sur d ?',
      'Sur papier quadrillé, d est verticale et M à 5 carreaux à gauche de d. a) Place M′. b) Même question pour N à 2 carreaux à gauche. d) Pour P sur d. e) Vérifie MN = M′N′ en comptant les carreaux.',
      'Construction au compas : a) décris les deux arcs à tracer ; b) pourquoi ce procédé donne-t-il le bon point ? d) construis le symétrique d’un point A par rapport à une droite sur feuille blanche ; e) vérifie à l’équerre la perpendicularité.'],
    corr: ['a) 4 cm ; b) 8 cm ; d) perpendiculaires ; e) lui-même.',
      'a) M′ à 5 carreaux à droite ; b) N′ à 2 carreaux à droite ; d) P′ = P ; e) les distances se conservent ✓.',
      'a) deux arcs centrés en deux points de d, de rayons respectifs jusqu’à M ; b) ces points de d sont à égale distance de M et M′ : d est bien la médiatrice ; d) construction ; e) angle droit ✓.'],
    fig: 'u4f2'
  },
  {
    t: 'Découvrir la symétrie centrale', comp: 'Géométrie', theme: 'Symétrie centrale : demi-tour autour d’un point',
    goal: 'reconnaître une symétrie centrale et son centre comme un demi-tour de 180°',
    mat: 'Papier calque, punaise, cartes à jouer, figures à trier',
    revQ: 'Quelle est la différence entre plier et tourner une figure ?',
    revRA: 'Plier = symétrie axiale (retourne) ; tourner = rotation (glisse en rond).',
    situation: 'Regarde une dame de cœur d’un jeu de cartes : retourne-la complètement, tête en bas… elle est identique ! La carte ne se plie pas, elle fait un DEMI-TOUR autour de son centre. Voici la symétrie centrale.',
    def: 'La symétrie centrale de centre O est la transformation qui fait tourner chaque point d’un demi-tour (180°) autour de O. Une figure est symétrique par rapport au point O si ce demi-tour la superpose à elle-même.',
    autrement: 'on pique une punaise en O, on tourne la figure d’un demi-tour : si elle retombe sur elle-même, O est un centre de symétrie.',
    concept: 'Le test pratique utilise le papier calque : on décalque la figure, on pique en O, on tourne le calque de 180° — la superposition tranche. La symétrie centrale diffère de l’axiale : pas de pliage, pas de miroir, mais une rotation. L’image d’une figure est « tête en bas » : le haut passe en bas, la gauche passe à droite. Figures à centre de symétrie : le parallélogramme (centre = intersection des diagonales), le cercle (son centre), la lettre S, la carte à jouer. Le triangle, lui, n’a JAMAIS de centre de symétrie.',
    synthese: 'symétrie centrale = demi-tour de 180° autour de O ; test du calque qui tourne ; parallélogramme et cercle ont un centre, le triangle jamais.',
    method: ['Décalquer la figure et marquer le point O.', 'Tourner le calque d’un demi-tour autour de O.', 'Conclure : superposition exacte → O est centre de symétrie.'],
    exemple: 'Parallélogramme : centre = croisement des diagonales ; lettres S, N, Z : centre au milieu ; lettre A : aucun centre (mais un axe !).',
    erreur: 'Confondre centre et axe : la lettre A a un axe de symétrie mais PAS de centre (tournée tête en bas, elle devient ∀). Les deux symétries sont des tests différents : pliage ≠ demi-tour.',
    saistu: 'Les cartes à jouer sont symétriques centralement pour une raison très pratique : quel que soit le sens dans lequel tu les tiens, tu lis ta main sans retourner les cartes… et sans révéler à l’adversaire que tu ranges ton jeu !',
    exos: ['Ces figures ont-elles un centre de symétrie ? a) un parallélogramme ; b) un triangle équilatéral ; d) un cercle ; e) un rectangle.',
      'Ces lettres ont-elles un centre de symétrie ? a) S ; b) N ; d) A ; e) O.',
      'a) Où se trouve le centre de symétrie d’un parallélogramme ? b) Combien le cercle a-t-il de centres de symétrie ? d) Donne une figure avec axe ET centre. e) Donne une figure avec axe mais SANS centre.'],
    corr: ['a) oui ; b) non ; d) oui ; e) oui.',
      'a) oui ; b) oui ; d) non ; e) oui.',
      'a) à l’intersection de ses diagonales ; b) un seul (son centre) ; d) rectangle, carré, cercle ; e) triangle isocèle, lettre A.'],
    fig: 'u4f3'
  },
  {
    t: 'Construire l’image d’un point par symétrie centrale', comp: 'Géométrie', theme: 'Symétrique d’un point par rapport à O : alignement et distance',
    goal: 'construire le symétrique d’un point par rapport à un point avec règle graduée ou compas',
    mat: 'Règle graduée, compas, papier quadrillé',
    revQ: 'Que signifie « O est le milieu de [MM′] » ?',
    revRA: 'M, O, M′ alignés et OM = OM′.',
    situation: 'Sur la place du village, Hery se tient à 5 pas du puits O. Où doit se placer Vola pour que le puits soit exactement à mi-chemin entre eux ? De l’autre côté, à 5 pas, dans l’alignement : Vola sera le symétrique de Hery !',
    def: 'Le symétrique du point M par rapport au point O est le point M′ tel que O soit le milieu du segment [MM′] : les points M, O et M′ sont alignés et OM = OM′.',
    autrement: 'on vise O depuis M, on traverse, et on continue tout droit de la même distance.',
    concept: 'Construction à la règle graduée : tracer la demi-droite [MO), la prolonger au-delà de O, mesurer OM et reporter cette longueur après O : c’est M′. Au compas : même démarche, l’arc de centre O et de rayon OM coupe le prolongement en M′ — le compas garantit l’exactitude du report. Cas particulier : le symétrique de O lui-même est O (seul point fixe de la transformation). Et la symétrie est involutive : le symétrique de M′ est M — on revient au départ en refaisant un demi-tour.',
    synthese: 'M′ : sur la droite (MO), de l’autre côté de O, avec OM′ = OM ; seul point fixe : O ; refaire la symétrie ramène au point de départ.',
    method: ['Tracer la droite (MO) et la prolonger au-delà de O.', 'Reporter la distance OM après O (règle graduée ou compas).', 'Contrôler l’alignement M, O, M′ et l’égalité OM = OM′.'],
    exemple: 'OM = 3 cm → M′ sur (MO), de l’autre côté, avec OM′ = 3 cm ; MM′ = 6 cm.',
    erreur: 'Placer M′ du MÊME côté que M : on obtient un point à bonne distance… mais sans demi-tour ! M′ est de l’autre côté de O, toujours.',
    saistu: 'Dans un sténopé — l’ancêtre de l’appareil photo, une simple boîte percée d’un trou — chaque rayon de lumière traverse le trou O en ligne droite : l’image se forme à l’envers, par symétrie centrale ! Ta rétine fonctionne pareil : ton cerveau remet le monde à l’endroit.',
    exos: ['OM = 6 cm. a) Que vaut OM′ ? b) Que vaut MM′ ? d) Les points M, O, M′ sont-ils alignés ? e) Quel est le symétrique de O ?',
      'Sur quadrillage, O est fixé ; M est 3 carreaux à droite et 2 en haut de O. a) Où est M′ ? b) N est 4 carreaux à gauche de O : où est N′ ? d) P = O : où est P′ ? e) Vérifie que MN = M′N′.',
      'a) Construis M′ symétrique de M (OM = 4 cm) à la règle graduée. b) Refais la construction au compas. d) Construis ensuite le symétrique de M′ : que trouves-tu ? e) Explique pourquoi ce « retour » est logique.'],
    corr: ['a) 6 cm ; b) 12 cm ; d) oui ; e) O lui-même.',
      'a) 3 carreaux à gauche et 2 en bas de O ; b) 4 carreaux à droite ; d) P′ = O ; e) les longueurs se conservent ✓.',
      'a) b) constructions ; d) on retrouve M ; e) deux demi-tours font un tour complet : chacun revient à sa place.'],
    fig: 'u4f4'
  },
  {
    t: 'Construire l’image d’une figure par symétrie axiale', comp: 'Géométrie', theme: 'Image d’une figure : sommet par sommet',
    goal: 'construire l’image d’un polygone par symétrie axiale en traitant chaque sommet',
    mat: 'Règle, équerre, compas, papier quadrillé',
    revQ: 'Construis le symétrique d’un point par rapport à une droite.',
    revRA: 'Perpendiculaire à l’axe + report de la distance de l’autre côté.',
    situation: 'Fitia brode la moitié d’un motif de pirogue sur son lamba, puis veut broder l’autre moitié en miroir. Pas besoin de tout redessiner : il suffit de reporter chaque POINT clé du motif de l’autre côté de l’axe, et de relier !',
    def: 'L’image d’une figure par une symétrie axiale s’obtient en construisant le symétrique de chacun de ses points caractéristiques (sommets, centres…) puis en les reliant dans le même ordre : l’image d’un segment est un segment, celle d’un polygone un polygone superposable.',
    autrement: 'une figure se résume à ses sommets : on réfléchit les sommets un à un, puis on relie les reflets.',
    concept: 'Pour un triangle ABC et un axe d : construire A′, B′, C′ symétriques des trois sommets, puis tracer A′B′C′. L’économie est précieuse : trois points suffisent, inutile de réfléchir les milliers de points des côtés — la symétrie transforme les segments en segments. Sur quadrillage, le comptage des carreaux accélère tout : un sommet à 4 carreaux à gauche de l’axe a son image à 4 carreaux à droite. Pour un cercle : on réfléchit le CENTRE, et on garde le même rayon. L’image est superposable à l’original, mais retournée : le sens de lecture ABC s’inverse en A′B′C′.',
    synthese: 'réfléchir chaque sommet, relier dans l’ordre ; cercle : réfléchir le centre, garder le rayon ; l’image est superposable mais d’orientation inversée.',
    method: ['Repérer les points caractéristiques de la figure (sommets, centre).', 'Construire le symétrique de chacun par rapport à l’axe.', 'Relier les images dans le même ordre ; contrôler une longueur.'],
    exemple: 'Triangle ABC, axe vertical : A(4 carreaux à gauche) → A′(4 à droite), etc. ; cercle de centre I, rayon 2 cm → cercle de centre I′, rayon 2 cm.',
    erreur: 'Relier les images dans le désordre : A′ avec C′ au lieu de B′… la figure devient un sablier croisé ! L’ordre des sommets de l’original guide l’ordre des images.',
    saistu: 'Les lambas akotofahana, tissés en soie sur les hautes terres, déploient des motifs en miroir d’une finesse célèbre dans tout l’océan Indien. Les tisserandes construisent ces symétries fil par fil — de la géométrie pure, sans équerre ni compas !',
    exos: ['Triangle ABC avec A, B, C à 2, 5 et 3 carreaux à gauche d’un axe vertical. a) À combien de carreaux se trouvent A′, B′, C′ ? b) Que dire des longueurs AB et A′B′ ? d) Et des aires ? e) Le sens de lecture est-il conservé ?',
      'a) Construis l’image d’un rectangle par rapport à l’un de ses côtés. b) Quelle figure forment l’original et l’image réunis ? d) Construis l’image d’un cercle de rayon 3 cm. e) Que suffit-il de réfléchir pour un cercle ?',
      'Fitia brode un motif de 5 points clés. a) Combien de symétriques doit-elle construire ? b) Si un point du motif est SUR l’axe, où est son image ? d) Les longueurs du motif réfléchi changent-elles ? e) Pourquoi le motif réfléchi semble-t-il « regarder » dans l’autre sens ?'],
    corr: ['a) 2, 5 et 3 carreaux à droite ; b) égales ; d) égales ; e) non, il s’inverse.',
      'a) construction ; b) un grand rectangle double ; d) même rayon, centre réfléchi ; e) le centre seulement.',
      'a) 5 ; b) sur l’axe, à la même place ; d) non ; e) l’orientation est inversée par la symétrie axiale.'],
    fig: 'u4f5'
  },
  {
    t: 'Construire l’image d’une figure par symétrie centrale', comp: 'Géométrie', theme: 'Image d’une figure par rapport à un point',
    goal: 'construire l’image d’un polygone par symétrie centrale sommet par sommet',
    mat: 'Règle graduée, compas, papier quadrillé',
    revQ: 'Construis le symétrique d’un point par rapport à un point O.',
    revRA: 'Aligné avec M et O, de l’autre côté, à égale distance.',
    situation: 'Rivo dessine un cerf-volant au coin de sa feuille et veut le reproduire « tête en bas » au coin opposé, autour du centre de la feuille. Un demi-tour sommet par sommet, et le second cerf-volant apparaît, parfaitement retourné !',
    def: 'L’image d’une figure par la symétrie centrale de centre O s’obtient en construisant le symétrique de chaque sommet par rapport à O, puis en reliant les images dans le même ordre : l’image est superposable à la figure, tournée de 180°.',
    autrement: 'chaque sommet traverse O et ressort à la même distance ; la figure complète ressort tête en bas.',
    concept: 'Pour le triangle ABC et le centre O : tracer (AO), (BO), (CO), reporter les distances au-delà de O → A′, B′, C′, relier. Toutes les droites (AA′), (BB′), (CC′) concourent en O : c’est une vérification visuelle immédiate. Sur quadrillage : un sommet à (+3 ; +2) de O a son image à (−3 ; −2) — on inverse les deux déplacements. Contrairement à la symétrie axiale, le sens de parcours est CONSERVÉ : ABC dans le sens horaire donne A′B′C′ dans le sens horaire aussi. La figure n’est pas « en miroir », elle est pivotée.',
    synthese: 'symétrique de chaque sommet par rapport à O, reliés dans l’ordre ; les droites sommet-image passent toutes par O ; orientation de parcours conservée.',
    method: ['Tracer la droite joignant chaque sommet au centre O.', 'Reporter chaque distance au-delà de O (compas ou carreaux).', 'Relier les images ; contrôler que les droites sommet-image passent par O.'],
    exemple: 'A à (+4 ; +1) de O → A′ à (−4 ; −1) ; triangle entier : trois reports, trois images, on relie.',
    erreur: 'Oublier de traverser : construire tous les points du même côté de O donne une simple copie décalée, pas un demi-tour ! Chaque image est de L’AUTRE côté du centre.',
    saistu: 'Le domino 6-3 et la carte à jouer partagent le même secret : tournés de 180°, ils restent lisibles. Mais écris MOT sur un papier et tourne-le : tu liras LOW à l’envers… Les mots, eux, n’ont presque jamais de centre de symétrie !',
    exos: ['Triangle ABC, sommets à (+2 ; +1), (+5 ; +3), (+3 ; −2) du centre O. a) Coordonnées de A′ par rapport à O ? b) De B′ ? d) De C′ ? e) Que valent les longueurs A′B′ comparées à AB ?',
      'a) Construis l’image d’un carré par rapport à son propre centre : que remarques-tu ? b) Et l’image d’un cercle par rapport à son centre ? d) L’image d’un triangle par rapport à un sommet : quel sommet reste fixe ? e) Par quelle vérification contrôles-tu ta construction ?',
      'Rivo place son cerf-volant à 4 points dans le coin haut-gauche. a) Où apparaît l’image ? b) L’image est-elle en miroir ou pivotée ? d) Si un point est en O, où va-t-il ? e) Les aires des deux cerfs-volants sont-elles égales ?'],
    corr: ['a) (−2 ; −1) ; b) (−5 ; −3) ; d) (−3 ; +2) ; e) égales.',
      'a) le carré retombe sur lui-même (centre de symétrie !) ; b) le cercle aussi ; d) le sommet-centre ; e) les droites sommet-image passent par O.',
      'a) coin bas-droit, tête en bas ; b) pivotée (demi-tour) ; d) il reste en O ; e) oui.'],
    fig: 'u4f6'
  },
  {
    t: 'Repérer les symétries dans les frises et pavages', comp: 'Géométrie', theme: 'Frises et pavages : symétries répétées',
    goal: 'identifier les axes et centres de symétrie dans une frise ou un pavage',
    mat: 'Photos de lambas, nattes, frises à analyser, calque',
    revQ: 'Rappelle les deux tests : axe de symétrie et centre de symétrie.',
    revRA: 'Pliage pour l’axe ; calque tourné d’un demi-tour pour le centre.',
    situation: 'Observe la bordure d’une natte tsihy ou la frise d’un lamba : le même motif se répète, se reflète, se retourne… Les artisanes malgaches composent depuis toujours avec les symétries. Sauras-tu les débusquer ?',
    def: 'Une frise est une bande où un motif se répète régulièrement dans une direction ; un pavage recouvre le plan entier sans trou ni chevauchement. Frises et pavages peuvent posséder des axes de symétrie, des centres de symétrie et des translations qui les laissent invariants.',
    autrement: 'une frise est un défilé de motifs ; les symétries sont les figures imposées du défilé.',
    concept: 'Dans une frise, on cherche trois types de régularités : les axes VERTICAUX (souvent entre deux motifs ou au milieu d’un motif), l’axe HORIZONTAL (si le haut reflète le bas), et les CENTRES de symétrie (points où un demi-tour superpose la frise à elle-même, souvent au cœur ou entre les motifs). La translation d’un motif vers le suivant laisse aussi la frise inchangée — c’est sa régularité de base. Les mathématiciens ont démontré qu’il n’existe que 7 types de frises et 17 types de pavages : toutes les bordures du monde, des lambas aux mosaïques, entrent dans ces familles !',
    synthese: 'chercher : axes verticaux, axe horizontal, centres de symétrie, translation de base ; 7 familles de frises, 17 familles de pavages — pas une de plus.',
    method: ['Repérer le motif de base et la translation qui le répète.', 'Tester les axes verticaux (entre et dans les motifs), puis l’axe horizontal.', 'Tester les centres de symétrie au calque (demi-tour).'],
    exemple: 'Frise de triangles alternés pointe en haut / pointe en bas : axes verticaux entre les triangles et centres de symétrie à mi-hauteur entre deux pointes.',
    erreur: 'Déclarer « pas de symétrie » après un seul test : une frise peut n’avoir aucun axe vertical mais posséder des centres de symétrie ! Les trois tests (vertical, horizontal, demi-tour) se font TOUS.',
    saistu: 'Les 17 types de pavages du plan ont été démontrés au XIXᵉ siècle… mais les artisans de l’Alhambra de Grenade les avaient TOUS réalisés dès le XIVᵉ siècle, sans aucune théorie ! La main de l’artiste avait trouvé ce que les mathématiciens ont prouvé 500 ans plus tard.',
    exos: ['Frise de triangles identiques pointant tous vers le haut. a) Y a-t-il des axes verticaux ? b) Un axe horizontal ? d) Des centres de symétrie ? e) Quelle transformation laisse sûrement la frise invariante ?',
      'Frise de triangles alternés (haut, bas, haut, bas…). a) Axes verticaux ? b) Centres de symétrie ? d) Axe horizontal ? e) Compare avec la frise de l’exercice 1.',
      'Projet : dessine ta propre frise sur quadrillage. a) Choisis un motif simple ; b) répète-le au moins 4 fois ; d) place en couleur tous les axes trouvés ; e) marque les centres de symétrie s’il y en a.'],
    corr: ['a) oui : au milieu de chaque triangle et entre deux triangles ; b) non ; d) non ; e) la translation d’un motif.',
      'a) oui, entre les triangles ; b) oui, à mi-hauteur entre deux pointes opposées ; d) non ; e) l’alternance a créé des centres de symétrie.',
      'Projet libre : vérifier axes au pliage, centres au calque.'],
    fig: 'u4f7'
  },
  {
    t: 'Utiliser les propriétés de conservation', comp: 'Géométrie', theme: 'Conservation : distances, angles, aires, alignement',
    goal: 'utiliser la conservation des distances, angles, aires et alignements par les symétries',
    mat: 'Figures et leurs images, instruments de mesure, cahier',
    revQ: 'Mesure un côté d’un triangle et le côté correspondant de son image symétrique.',
    revRA: 'Les deux mesures sont égales.',
    situation: 'Sitraka a construit l’image d’un champ triangulaire par symétrie. Son petit frère demande : « il faut remesurer les côtés du nouveau champ ? » Pas besoin ! La symétrie a tout conservé : longueurs, angles, aire. Zéro remesure.',
    def: 'Les symétries axiale et centrale conservent les distances, les angles, les aires, les alignements, les milieux et le parallélisme : la figure image est superposable à la figure d’origine. On dit que ce sont des isométries.',
    autrement: 'la symétrie est une photocopie exacte, éventuellement retournée : rien ne s’étire, rien ne se déforme.',
    concept: 'Ces conservations sont des outils de calcul gratuit : si AB = 5 cm, alors A′B′ = 5 cm, sans mesurer. Si un angle vaut 60°, son image vaut 60°. Si trois points sont alignés, leurs images le sont. Si I est le milieu de [AB], I′ est le milieu de [A′B′]. La conservation transfère aussi les propriétés des figures : l’image d’un carré est un carré, celle d’un cercle de rayon r un cercle de rayon r, celle de deux droites parallèles deux droites parallèles. Une seule chose peut changer : l’orientation (le sens de parcours), inversée par la symétrie axiale.',
    synthese: 'symétries = isométries : distances, angles, aires, alignements, milieux, parallélisme conservés ; carré → carré, cercle → cercle de même rayon ; seule l’orientation peut s’inverser.',
    method: ['Identifier la grandeur demandée sur la figure image.', 'La relier à la grandeur correspondante de la figure d’origine.', 'Conclure par conservation, sans mesurer ni calculer davantage.'],
    exemple: 'ABC d’aire 12 cm² → A′B′C′ d’aire 12 cm² ; angle B̂ = 45° → angle B̂′ = 45° ; (AB) ∥ (CD) → (A′B′) ∥ (C′D′).',
    erreur: 'Croire que « tout » est conservé : la POSITION change (c’est le but !) et l’orientation peut s’inverser. Conservé = tailles et formes ; changé = place et, parfois, sens.',
    saistu: 'C’est grâce à la conservation des distances que ton image dans le miroir est exactement à ta taille : le miroir ne grossit ni ne rétrécit. S’il te paraît déformant, c’est qu’il n’est pas plan — les miroirs de foire sont courbés exprès !',
    exos: ['ABC a pour côtés 3, 4 et 5 cm, et une aire de 6 cm². Par symétrie axiale : a) côtés de A′B′C′ ? b) aire de A′B′C′ ? d) ABC est rectangle : A′B′C′ aussi ? e) l’orientation est-elle conservée ?',
      'Par symétrie centrale : a) l’image d’un segment de 7 cm mesure… ? b) l’image d’un angle de 110° mesure… ? d) l’image du milieu de [AB] est… ? e) l’image de deux droites parallèles ?',
      'Sans construction, justifie : a) l’image d’un carré de côté 4 cm est un carré de côté 4 cm ; b) l’image d’un cercle de rayon 3 cm ; d) si A, B, C sont alignés, que dire de A′, B′, C′ ? e) un triangle équilatéral peut-il avoir pour image un triangle isocèle non équilatéral ?'],
    corr: ['a) 3, 4, 5 cm ; b) 6 cm² ; d) oui (angles conservés) ; e) non, inversée (symétrie axiale).',
      'a) 7 cm ; b) 110° ; d) le milieu de [A′B′] ; e) deux droites parallèles.',
      'a) côtés et angles conservés ; b) cercle de rayon 3 cm ; d) alignés ; e) non : les longueurs sont conservées, l’image reste équilatérale.'],
    fig: 'u4f8'
  },
  {
    t: 'Démontrer avec les propriétés de conservation', comp: 'Géométrie', theme: 'Démonstration par symétrie',
    goal: 'rédiger une courte démonstration utilisant la conservation des longueurs ou des angles',
    mat: 'Figures codées, exemples de démonstrations, cahier',
    revQ: 'Que conserve une symétrie axiale ?',
    revRA: 'Distances, angles, aires, alignements.',
    situation: '« Mesure, ça fait pareil ! » dit Naina. « Mesurer n’est pas prouver », répond le professeur : la règle peut mentir d’un millimètre. Pour être sûr à 100 %, les mathématiciens DÉMONTRENT — et la symétrie est une excellente avocate.',
    def: 'Une démonstration est un raisonnement qui établit une propriété avec certitude, en s’appuyant sur des propriétés connues — ici, la conservation des longueurs et des angles par les symétries — et non sur des mesures, toujours approximatives.',
    autrement: 'démontrer = convaincre sans règle ni rapporteur, avec des phrases du type « la symétrie conserve…, donc… ».',
    concept: 'Schéma de la démonstration type : identifier une symétrie dans la figure, dire ce qu’elle échange, conclure par conservation. Exemple royal : A est sur la médiatrice d de [BC] ; la symétrie d’axe d échange B et C et fixe A ; elle transforme donc le segment [AB] en [AC] ; comme elle conserve les longueurs, AB = AC — le triangle est isocèle, prouvé sans règle graduée ! La rédaction tient en trois phrases : la symétrie utilisée, l’échange des points, la conclusion par conservation. Même mécanique pour prouver des égalités d’angles dans les figures symétriques.',
    synthese: 'démonstration par symétrie en 3 pas : nommer la symétrie, dire quels points elle échange, conclure par conservation (longueurs ou angles).',
    method: ['Repérer l’axe ou le centre de symétrie de la situation.', 'Écrire quels points s’échangent (et lesquels sont fixes).', 'Conclure : « la symétrie conserve les …, donc … = … ».'],
    exemple: 'd médiatrice de [BC], A ∈ d : la symétrie d’axe d fixe A, échange B et C, donc AB = AC.',
    erreur: '« J’ai mesuré 4,2 cm des deux côtés, donc c’est égal » : une mesure vérifie, elle ne prouve rien — ton voisin mesurera 4,1 ! Seul le raisonnement par conservation donne une certitude.',
    saistu: 'Thalès aurait démontré, il y a 2 600 ans, que les angles à la base d’un triangle isocèle sont égaux — par symétrie, exactement comme toi aujourd’hui. Les Anciens appelaient ce résultat le pons asinorum, « pont aux ânes » : qui le franchissait était fait géomètre !',
    exos: ['d est la médiatrice de [BC] et A ∈ d. a) Quels points la symétrie d’axe d échange-t-elle ? b) Quel point est fixe ? d) En quoi se transforme [AB] ? e) Rédige la conclusion.',
      'ABCD est un rectangle, d la médiatrice commune de [AB] et [DC]. a) Que fait la symétrie d’axe d des sommets ? b) Démontre que les diagonales AC et BD sont égales. d) Quels angles sont échangés ? e) Pourquoi la mesure au rapporteur ne suffirait-elle pas ?',
      'Un cerf-volant ABCD a (AC) pour axe de symétrie. a) Quels sommets s’échangent ? b) Démontre AB = AD. d) Démontre CB = CD. e) Que dire des angles B̂ et D̂ ?'],
    corr: ['a) B et C ; b) A ; d) en [AC] ; e) la symétrie conserve les longueurs, donc AB = AC.',
      'a) A↔B et D↔C ; b) la symétrie transforme [AC] en [BD] et conserve les longueurs, donc AC = BD ; d) Â et B̂, D̂ et Ĉ ; e) une mesure est approchée, la démonstration est exacte.',
      'a) B et D ; b) la symétrie fixe A, échange B et D : AB = AD ; d) elle fixe C aussi : CB = CD ; e) égaux (conservation des angles).'],
    fig: 'u4f9'
  },
  {
    t: 'Écrire un programme de construction', comp: 'Géométrie', theme: 'Programme de construction : protocole pas à pas',
    goal: 'rédiger et exécuter un programme de construction clair, précis et reproductible',
    mat: 'Règle, compas, équerre, programmes à tester en binômes',
    revQ: 'Dicte à un camarade comment tracer un segment de 5 cm.',
    revRA: '« Trace un segment [AB] tel que AB = 5 cm. »',
    situation: 'Jeu en binômes : Vola décrit une figure cachée, Hery doit la reproduire sans la voir. « Dessine un triangle… non, plus pointu… » Échec ! Avec un programme de construction — des instructions numérotées et précises — Hery réussit du premier coup.',
    def: 'Un programme de construction est une suite d’instructions numérotées, rédigées avec le vocabulaire géométrique exact (trace, place, reporte…), qui permet à quiconque de reproduire une figure identique sans jamais la voir.',
    autrement: 'c’est la recette de cuisine de la figure : ingrédients nommés, étapes ordonnées, résultat garanti.',
    concept: 'Les règles d’or du programme : chaque objet est NOMMÉ dès sa création (le segment [BC], le point A…) ; chaque instruction utilise un verbe technique précis (trace, place, reporte, relie) ; les mesures sont données avec leurs unités ; l’ordre des étapes respecte les dépendances — on ne peut placer A sur la médiatrice avant d’avoir tracé la médiatrice ! Le test de validité est impitoyable : un camarade qui suit le programme à la lettre doit obtenir une figure superposable à la tienne. Toute ambiguïté (« à peu près là », « un grand triangle ») disqualifie le programme.',
    synthese: 'instructions numérotées + objets nommés + verbes précis + mesures en unités + ordre logique = figure reproductible par n’importe qui.',
    method: ['Analyser la figure : lister ses objets dans l’ordre de dépendance.', 'Rédiger une instruction par objet, avec noms et mesures.', 'Faire tester le programme par un camarade « aveugle » et corriger.'],
    exemple: '1. Trace [BC] de 6 cm. 2. Trace la médiatrice d de [BC]. 3. Place A sur d à 5 cm de B. 4. Relie A à B et A à C. → triangle isocèle garanti.',
    erreur: 'Écrire « dessine un triangle isocèle » sans mesures ni noms : chaque camarade obtiendra un triangle DIFFÉRENT ! Le programme doit verrouiller la figure au millimètre.',
    saistu: 'Les programmes de construction sont les ancêtres des logiciels de géométrie : GeoGebra exécute exactement ce genre d’instructions. Et les imprimantes 3D suivent elles aussi des programmes, ligne par ligne — l’ambiguïté n’existe pas pour une machine !',
    exos: ['Remets dans l’ordre : « Place A sur d à 5 cm de B » / « Trace [BC] de 6 cm » / « Relie A à B et à C » / « Trace la médiatrice d de [BC] ». a) étape 1 ; b) étape 2 ; d) étape 3 ; e) étape 4.',
      'Corrige les défauts : « 1. Fais un cercle. 2. Mets un point dessus. 3. Trace un trait. » a) défaut de l’étape 1 ; b) de l’étape 2 ; d) de l’étape 3 ; e) réécris le programme proprement (cercle de centre O, rayon 3 cm, A sur le cercle, trace [OA]).',
      'Rédige le programme d’un losange ABCD de diagonales 6 cm et 4 cm (les diagonales se coupent en leur milieu, perpendiculairement). a) étape du premier segment ; b) étape de la perpendiculaire ; d) étape des reports ; e) étape finale.'],
    corr: ['a) Trace [BC] de 6 cm ; b) médiatrice d ; d) place A ; e) relie.',
      'a) ni centre ni rayon ; b) point non nommé ; d) « trait » : lequel ? ; e) 1. Trace le cercle de centre O et de rayon 3 cm. 2. Place un point A sur ce cercle. 3. Trace le segment [OA].',
      'Exemple : 1. Trace [AC] de 6 cm et place O son milieu. 2. Trace la perpendiculaire à (AC) en O. 3. Place B et D sur cette perpendiculaire à 2 cm de O, de part et d’autre. 4. Relie A, B, C, D.'],
    fig: 'u4f10'
  },
  {
    t: 'Découvrir la translation', comp: 'Géométrie', theme: 'Translation : direction, sens, longueur',
    goal: 'reconnaître une translation et la caractériser par sa direction, son sens et sa longueur',
    mat: 'Calque, figures à faire glisser, frises, cahier',
    revQ: 'Dans une frise, quelle transformation fait passer d’un motif au suivant ?',
    revRA: 'Un glissement : la translation.',
    situation: 'Le ferry qui traverse le canal des Pangalanes avance tout droit : chaque passager, chaque caisse, chaque poule à bord se déplace de la MÊME distance dans la MÊME direction. Le bateau entier subit une translation !',
    def: 'La translation est la transformation qui fait glisser chaque point d’une figure selon une même direction, un même sens et une même longueur. Elle est entièrement définie par une flèche (un vecteur) joignant un point à son image.',
    autrement: 'tout le monde fait le même pas : même direction, même sens, même longueur — personne ne tourne, personne ne se retourne.',
    concept: 'Trois ingrédients définissent une translation : la DIRECTION (la ligne du déplacement, par exemple horizontale), le SENS (vers la droite ou vers la gauche sur cette ligne), la LONGUEUR (combien on avance). Une seule flèche de A vers B code les trois : toute la figure glisse « comme A va vers B ». Sur une figure translatée, les flèches joignant chaque point à son image sont toutes parallèles, de même sens et de même longueur — c’est le test de reconnaissance. Contrairement aux symétries, la translation ne retourne RIEN : pas de miroir, pas de demi-tour, un pur glissement.',
    synthese: 'translation = glissement défini par direction + sens + longueur (une flèche) ; toutes les flèches point → image sont parallèles, de même sens, de même longueur.',
    method: ['Relier plusieurs points à leurs images par des flèches.', 'Vérifier : flèches parallèles, de même sens et de même longueur.', 'Conclure et décrire la translation par l’une de ces flèches.'],
    exemple: '« La translation qui amène A sur B » : tout point fait le même déplacement que de A vers B — 4 cm vers la droite, par exemple.',
    erreur: 'Confondre direction et sens : « vers la gauche » et « vers la droite » ont la MÊME direction (horizontale) mais des sens opposés. Une translation précise exige les trois informations.',
    saistu: 'Dans un tapis roulant d’aéroport, chaque voyageur immobile subit une translation parfaite. Mais la Terre te fait subir bien mieux : à l’équateur, sa rotation te déplace de 465 mètres chaque seconde — et tu ne sens rien !',
    exos: ['Un motif de frise se répète tous les 5 cm vers la droite. a) Quelle est la direction de la translation ? b) Son sens ? d) Sa longueur ? e) Quelle translation amène le motif 1 sur le motif 3 ?',
      'Vrai ou faux : a) une translation peut retourner une figure ; b) les flèches point → image d’une translation sont toutes parallèles ; d) une translation est définie par un seul point ; e) l’image d’une figure translatée est superposable à l’original.',
      'Le ferry avance de 20 m vers le nord. a) De combien se déplace le capitaine ? b) Et une caisse à l’arrière ? d) Les flèches de déplacement des deux sont-elles parallèles ? e) Décris la translation inverse qui ramènerait le ferry.'],
    corr: ['a) horizontale ; b) vers la droite ; d) 5 cm ; e) 10 cm vers la droite.',
      'a) faux : elle glisse sans retourner ; b) vrai ; d) faux : il faut un point ET son image (une flèche) ; e) vrai.',
      'a) 20 m vers le nord ; b) 20 m vers le nord ; d) oui, et de même longueur ; e) 20 m vers le sud.'],
    fig: 'u4f11'
  },
  {
    t: 'Construire l’image d’un point par translation', comp: 'Géométrie', theme: 'Image d’un point : le parallélogramme',
    goal: 'construire l’image d’un point par la translation qui amène A sur B',
    mat: 'Règle, équerre, compas, papier quadrillé',
    revQ: 'Quelles sont les propriétés des côtés d’un parallélogramme ?',
    revRA: 'Côtés opposés parallèles et de même longueur.',
    situation: 'La translation amène A sur B. Où va le point M ? Il fait « le même voyage » : même direction, même sens, même distance. Les quatre points A, B, M et son image M′ dessinent alors un parallélogramme — la figure du voyage parallèle !',
    def: 'L’image du point M par la translation qui amène A sur B est le point M′ tel que le quadrilatère ABM′M soit un parallélogramme (éventuellement aplati si M est sur la droite (AB)) : (MM′) est parallèle à (AB), de même longueur et de même sens.',
    autrement: 'M′ est au bout du pas « copié-collé » : le pas de A vers B, recommencé depuis M.',
    concept: 'Construction sur quadrillage : lire le déplacement de A vers B en carreaux (par exemple +3 à droite, +2 en haut), puis l’appliquer à M. Sur papier blanc : au compas, reporter la longueur AB depuis M et la longueur AM depuis B ; l’intersection des deux arcs est M′ — on a construit le quatrième sommet du parallélogramme ABM′M. Attention à l’ordre des lettres : c’est ABM′M (et non ABMM′) qui est un parallélogramme, car les côtés parallèles sont [AB] et [MM′]. Cas particulier : si M est sur (AB), le parallélogramme est aplati mais la règle du déplacement égal demeure.',
    synthese: 'M′ tel que ABM′M soit un parallélogramme ; sur quadrillage : recopier le déplacement en carreaux ; au compas : deux arcs (rayons AB et AM).',
    method: ['Lire le déplacement de A vers B (carreaux ou longueur-direction).', 'Appliquer le même déplacement à partir de M.', 'Contrôler : (MM′) ∥ (AB) et MM′ = AB.'],
    exemple: 'A(1 ; 1), B(4 ; 3) : déplacement +3 ; +2. M(2 ; 5) → M′(5 ; 7).',
    erreur: 'Inverser le sens : appliquer le déplacement de B vers A au lieu de A vers B. M′ part alors à l’opposé ! La flèche a un sens unique : départ A, arrivée B.',
    saistu: 'Le « copier-coller » de ton téléphone est une translation informatique : chaque pixel de l’image copiée subit exactement le même déplacement. Les jeux vidéo translatent ainsi des millions de pixels par seconde !',
    exos: ['La translation amène A(2 ; 1) sur B(5 ; 3). a) Quel est le déplacement en carreaux ? b) Image de M(1 ; 4) ? d) Image de N(6 ; 0) ? e) Image de A lui-même ?',
      'ABM′M est le parallélogramme d’une translation. a) Quel segment est parallèle à [AB] ? b) Quelle longueur égale AB ? d) Si AB = 4 cm, que vaut MM′ ? e) Quand le parallélogramme est-il aplati ?',
      'Construction au compas (A, B, M donnés, M hors de (AB)). a) Quel arc trace-t-on depuis M ? b) Et depuis B ? d) Pourquoi l’intersection est-elle M′ ? e) Vérifie le parallélisme à l’équerre.'],
    corr: ['a) +3 à droite, +2 en haut ; b) M′(4 ; 6) ; d) N′(9 ; 2) ; e) B !',
      'a) [MM′] ; b) MM′ ; d) 4 cm ; e) quand M est sur la droite (AB).',
      'a) arc de rayon AB centré en M ; b) arc de rayon AM centré en B ; d) on impose MM′ = AB et BM′ = AM : parallélogramme ; e) angle et report ✓.'],
    fig: 'u4f12'
  },
  {
    t: 'Construire les images de segments, droites et cercles', comp: 'Géométrie', theme: 'Translation de figures usuelles',
    goal: 'construire l’image d’un segment, d’une droite et d’un cercle par une translation',
    mat: 'Règle, compas, papier quadrillé',
    revQ: 'Construis l’image d’un point M par la translation qui amène A sur B.',
    revRA: 'Même déplacement : ABM′M parallélogramme.',
    situation: 'Rivo doit translater tout un dessin : des segments, une route droite, et la roue d’une charrette. Faut-il déplacer chaque point un par un ? Des milliers de points ?! Non : deux points par segment, un centre par cercle — la translation fait le reste.',
    def: 'Par une translation, l’image d’un segment est un segment parallèle et de même longueur ; l’image d’une droite est une droite parallèle ; l’image d’un cercle est le cercle de même rayon dont le centre est l’image du centre.',
    autrement: 'segment → segment jumeau décalé ; droite → droite parallèle ; cercle → même cercle, nouveau centre.',
    concept: 'L’économie de construction est maximale. Segment [MN] : translater M et N, relier — les milliers de points intermédiaires suivent automatiquement. Droite : translater UN point et tracer la parallèle. Cercle : translater le CENTRE, puis rouvrir le compas au même rayon. Cas particulier élégant : si la droite est parallèle à la direction de translation, elle glisse SUR elle-même — son image est elle-même ! La translation conserve, comme les symétries, distances, angles, aires et alignement ; et elle conserve en plus l’orientation : rien n’est retourné.',
    synthese: 'segment : 2 images reliées ; droite : 1 image + parallèle ; cercle : centre translaté + même rayon ; droite parallèle à la flèche → invariante.',
    method: ['Identifier les points clés : extrémités, un point de droite, centre de cercle.', 'Translater ces seuls points clés.', 'Reconstruire : relier, tracer la parallèle, ou rouvrir le compas au même rayon.'],
    exemple: 'Cercle de centre I(2 ; 3), rayon 2, translation +4 ; 0 : image = cercle de centre I′(6 ; 3), rayon 2.',
    erreur: 'Changer le rayon du cercle image « parce qu’il a bougé » : la translation déplace, elle ne déforme jamais ! Même rayon, toujours.',
    saistu: 'Les roues d’un train en ligne droite illustrent la translation du cercle : le centre de chaque roue glisse parallèlement au rail. Mais un point du BORD de la roue, lui, décrit une courbe magnifique appelée cycloïde — la translation et la rotation mélangées !',
    exos: ['Translation de 4 carreaux vers la droite. a) Image du segment [MN] avec M(1 ; 1), N(3 ; 4) ? b) Longueur de l’image si MN = 3,6 cm ? d) Image de la droite verticale x = 2 ? e) Image du cercle de centre (2 ; 2), rayon 1 ?',
      'Vrai ou faux : a) l’image d’une droite est toujours parallèle à l’original ; b) une droite peut être sa propre image ; d) l’image d’un cercle peut avoir un autre rayon ; e) l’image d’un segment est parallèle au segment.',
      'Dessin de Rivo : un segment de 5 cm, une droite d, un cercle de rayon 2 cm. Translation de 6 cm vers l’est. a) Combien de points suffit-il de translater pour le segment ? b) Pour la droite ? d) Pour le cercle ? e) Total des constructions au lieu de « milliers de points » ?'],
    corr: ['a) [M′N′] avec M′(5 ; 1), N′(7 ; 4) ; b) 3,6 cm ; d) la droite x = 6 ; e) cercle de centre (6 ; 2), rayon 1.',
      'a) vrai ; b) vrai, si elle est parallèle à la flèche ; d) faux ; e) vrai.',
      'a) 2 ; b) 1 ; d) 1 (le centre) ; e) 4 points translatés seulement !'],
    fig: 'u4f13'
  },
  {
    t: 'Utiliser les propriétés de la translation', comp: 'Géométrie', theme: 'Conservation par translation ; comparaison des transformations',
    goal: 'utiliser les conservations de la translation et comparer symétries et translation',
    mat: 'Tableau comparatif, figures transformées, cahier',
    revQ: 'Cite ce que conservent les symétries.',
    revRA: 'Distances, angles, aires, alignements.',
    situation: 'Trois copies d’un même triangle : une réfléchie (miroir), une pivotée (demi-tour), une glissée (translation). Lesquelles sont superposables sans retourner la feuille ? Le tableau des transformations démêle tout.',
    def: 'La translation conserve les distances, les angles, les aires, les alignements, les milieux et le parallélisme, ET l’orientation des figures : l’image est superposable à l’original par simple glissement, sans retournement.',
    autrement: 'la translation est la plus douce des transformations : elle déplace tout, elle ne change rien — pas même le sens de lecture.',
    concept: 'Le tableau comparatif résume le trio : les trois transformations sont des isométries (copies exactes) ; la symétrie axiale INVERSE l’orientation (figure en miroir) ; la symétrie centrale pivote la figure tête en bas mais conserve le sens de parcours ; la translation conserve tout, y compris la posture de la figure. Application pratique : pour reconnaître quelle transformation relie deux figures superposables, on regarde d’abord l’orientation (miroir → symétrie axiale), puis la position (tête en bas autour d’un point → centrale ; simple décalage → translation).',
    synthese: 'translation : isométrie + orientation conservée ; reconnaître la transformation : miroir → axiale, demi-tour → centrale, glissement → translation.',
    method: ['Comparer l’orientation des deux figures (sens de lecture des sommets).', 'Si inversée : symétrie axiale ; sinon, chercher demi-tour ou glissement.', 'Confirmer avec les flèches point → image (parallèles ⇒ translation) ou les droites par un centre.'],
    exemple: 'Deux triangles superposables, même sens, flèches AA′, BB′, CC′ parallèles et égales → translation.',
    erreur: 'Classer une figure « tête en bas » comme symétrie axiale : le miroir inverse gauche-droite, il ne met pas tête en bas autour d’un point ! Tête en bas + sens conservé = symétrie CENTRALE.',
    saistu: 'Ta main droite et ta main gauche sont des images-miroir : AUCUNE translation ni rotation ne superpose l’une sur l’autre — essaie ! C’est pour cela qu’un gant droit ne va jamais à la main gauche. L’orientation est une propriété tenace…',
    exos: ['Un triangle d’aire 15 cm² subit une translation. a) Aire de l’image ? b) Ses angles changent-ils ? d) Son orientation ? e) Peut-on superposer l’image sans soulever la feuille ?',
      'Deux figures superposables sont données. Quelle transformation si : a) l’image est en miroir ; b) l’image est tête en bas, droites point-image concourantes ; d) les flèches point-image sont parallèles et égales ; e) l’image est en miroir ET décalée ?',
      'Les triangles T1 (sens horaire) et T2 (sens antihoraire) sont superposables. a) Une translation peut-elle les relier ? b) Une symétrie centrale ? d) Une symétrie axiale ? e) Justifie avec l’orientation.'],
    corr: ['a) 15 cm² ; b) non ; d) conservée ; e) oui : simple glissement.',
      'a) symétrie axiale ; b) symétrie centrale ; d) translation ; e) composition (symétrie + glissement) : en tout cas pas une translation seule.',
      'a) non ; b) non (elle conserve le sens de parcours) ; d) oui ; e) seule l’axiale inverse l’orientation.'],
    fig: 'u4f14'
  },
  {
    t: 'Découvrir l’homothétie', comp: 'Géométrie', theme: 'Homothétie : centre O et rapport k',
    goal: 'découvrir l’homothétie comme agrandissement ou réduction depuis un centre',
    mat: 'Projecteur ou lampe-torche, figures, élastiques, quadrillage',
    revQ: 'Les transformations vues jusqu’ici changent-elles les longueurs ?',
    revRA: 'Non : symétries et translation sont des isométries.',
    situation: 'Place ta main entre la lampe-torche et le mur : son ombre est une main géante, parfaitement proportionnée ! La lumière agrandit depuis un point — l’ampoule. Cette projection qui grossit sans déformer, c’est l’homothétie.',
    def: 'L’homothétie de centre O et de rapport k transforme chaque point M en un point M′ situé sur la demi-droite [OM) tel que OM′ = k × OM (pour k positif). Elle multiplie toutes les longueurs par k : c’est un agrandissement si k est supérieur à 1, une réduction si k est entre 0 et 1.',
    autrement: 'tout s’éloigne de O (ou s’en rapproche) dans la même proportion k : la figure gonfle ou rétrécit sans se déformer.',
    concept: 'L’homothétie casse enfin la règle des isométries : les longueurs CHANGENT, multipliées par k. Mais la forme survit : les angles sont conservés, les droites restent des droites, les proportions demeurent — l’image est semblable à l’original. Pour k = 2, chaque point double sa distance à O : OA′ = 2 OA ; un triangle de côtés 3, 4, 5 devient 6, 8, 10. Pour k = 1/2, tout se rapproche de moitié. Le centre O est le seul point fixe, l’œil de la transformation. Les droites passant par O glissent sur elles-mêmes ; toutes les autres deviennent des parallèles à elles-mêmes.',
    synthese: 'homothétie (O ; k) : M′ sur [OM) avec OM′ = k·OM ; longueurs × k, angles conservés, forme conservée ; k supérieur à 1 agrandit, k entre 0 et 1 réduit.',
    method: ['Tracer les demi-droites issues de O vers chaque sommet.', 'Multiplier chaque distance au centre par k et reporter.', 'Relier les images ; contrôler qu’un côté a bien été multiplié par k.'],
    exemple: 'k = 3 : OA = 2 cm → OA′ = 6 cm ; côté AB = 1,5 cm → A′B′ = 4,5 cm ; angle de 40° → toujours 40°.',
    erreur: 'Croire que l’aire est multipliée par k aussi : pour k = 2, les longueurs doublent mais l’aire est multipliée par 4 (k²) ! Un carré de côté 1 devient un carré de côté 2 : quatre fois plus d’aire.',
    saistu: 'Le cinéma est une homothétie géante : la pellicule de 35 mm est projetée sur un écran de 10 mètres — un rapport k d’environ 300 ! L’ampoule du projecteur joue le centre O, et chaque détail du film garde exactement ses proportions.',
    exos: ['Homothétie de centre O, rapport k = 2. a) OA = 3 cm : que vaut OA′ ? b) AB = 2,5 cm : que vaut A′B′ ? d) Un angle de 60° devient… ? e) A′ est-il sur la demi-droite [OA) ?',
      'Donne le rapport k : a) toutes les longueurs triplent ; b) toutes les longueurs sont divisées par 4 ; d) OM = 5 cm et OM′ = 2,5 cm ; e) la figure est inchangée.',
      'L’ombre d’une main (15 cm) sur le mur mesure 45 cm. a) Quel est le rapport k ? b) L’ombre d’un doigt de 6 cm ? d) Les angles entre les doigts changent-ils ? e) Pour une ombre 2 fois plus grande seulement, faut-il rapprocher ou éloigner la main de la lampe ?'],
    corr: ['a) 6 cm ; b) 5 cm ; d) 60° ; e) oui.',
      'a) k = 3 ; b) k = 1/4 ; d) k = 1/2 ; e) k = 1.',
      'a) k = 3 ; b) 18 cm ; d) non ; e) l’éloigner de la lampe (la rapprocher du mur).'],
    fig: 'u4f15'
  },
  {
    t: 'Construire agrandissements et réductions', comp: 'Géométrie', theme: 'Homothétie dans le plan cartésien : k = 2 et k = 1/2',
    goal: 'construire l’image d’une figure par homothétie de centre O dans le plan cartésien',
    mat: 'Papier quadrillé, règle, plans et cartes',
    revQ: 'Homothétie de rapport 2 : que deviennent les distances au centre ?',
    revRA: 'Elles doublent.',
    situation: 'Sitraka veut recopier la carte de son quartier en deux fois plus grand pour l’exposition de l’école. Centre O au coin de la feuille, chaque point deux fois plus loin : le quartier s’agrandit sans une seule déformation !',
    def: 'Dans le plan cartésien, l’homothétie de centre O (origine) et de rapport k transforme le point M(x ; y) en M′(kx ; ky) : les deux coordonnées sont multipliées par k. La figure image a ses longueurs multipliées par k et son aire par k².',
    autrement: 'sur quadrillage, l’homothétie de centre O est une simple multiplication des coordonnées par k.',
    concept: 'Avec O à l’origine, la construction devient arithmétique : A(2 ; 1) → A′(4 ; 2) pour k = 2 ; B(6 ; 4) → B′(3 ; 2) pour k = 1/2. On multiplie, on place, on relie. Le contrôle visuel reste géométrique : O, M et M′ doivent être alignés pour chaque point — toute image sortie de sa demi-droite trahit une erreur de calcul. Les effets d’échelle se vérifient : pour k = 2, les côtés doublent et l’aire quadruple ; pour k = 1/2, les côtés sont divisés par 2 et l’aire par 4. C’est le principe des cartes : une carte au 1/10 000 est l’image du terrain par une homothétie de rapport minuscule.',
    synthese: 'centre à l’origine : M(x ; y) → M′(kx ; ky) ; alignement O, M, M′ à contrôler ; longueurs × k, aires × k².',
    method: ['Multiplier les coordonnées de chaque sommet par k.', 'Placer les images et vérifier l’alignement avec O.', 'Relier ; contrôler un côté (× k) et, si demandé, l’aire (× k²).'],
    exemple: 'Triangle (2 ; 2), (4 ; 2), (2 ; 6), k = 1/2 → (1 ; 1), (2 ; 1), (1 ; 3) : côtés moitié, aire quart.',
    erreur: 'Ne multiplier qu’une coordonnée : A(2 ; 3) → (4 ; 3) pour k = 2 ?! La figure s’étire en largeur et se déforme. L’homothétie multiplie LES DEUX coordonnées.',
    saistu: 'Les architectes malgaches dessinent les plans des maisons au 1/50 : chaque mètre réel devient 2 cm de papier. Une homothétie de rapport 1/50… et la maison entière tient sur la table, proportions exactes comprises !',
    exos: ['k = 2, centre O origine. a) A(1 ; 3) → ? b) B(4 ; 0) → ? d) C(2,5 ; 2) → ? e) O → ?',
      'k = 1/2, centre O. a) M(8 ; 4) → ? b) N(3 ; 5) → ? d) un côté de 7 cm devient… ? e) une aire de 20 cm² devient… ?',
      'Triangle de sommets (2 ; 1), (4 ; 1), (3 ; 4). a) Images pour k = 2 ? b) Le périmètre est multiplié par… ? d) L’aire est multipliée par… ? e) Vérifie l’alignement de O, (3 ; 4) et son image.'],
    corr: ['a) (2 ; 6) ; b) (8 ; 0) ; d) (5 ; 4) ; e) O (point fixe).',
      'a) (4 ; 2) ; b) (1,5 ; 2,5) ; d) 3,5 cm ; e) 5 cm² (divisée par 4).',
      'a) (4 ; 2), (8 ; 2), (6 ; 8) ; b) 2 ; d) 4 ; e) (6 ; 8) = 2 × (3 ; 4) : aligné avec O ✓.'],
    fig: 'u4f16'
  }
];

const unit4 = {
  no: 4, roman: 'IV', name: 'Géométrie',
  rag: 'démontrer une compréhension des symétries, de la translation et de l’homothétie, et les utiliser pour construire, comparer et démontrer.',
  valeurs: 'estime de soi et goût de l’effort',
  sessions: S,
  revision: {
    table: [
      ['Symétrie axiale', 'Pliage ; d médiatrice de [MM′]', 'Reconnaître et construire des reflets'],
      ['Symétrie centrale', 'Demi-tour de 180° ; O milieu de [MM′]', 'Reconnaître et construire des demi-tours'],
      ['Frises et pavages', 'Axes, centres et translations répétés', 'Analyser motifs et bordures'],
      ['Conservation et démonstration', 'Distances, angles, aires conservés', 'Prouver des égalités sans mesurer'],
      ['Translation', 'Glissement : direction, sens, longueur ; parallélogramme', 'Construire des images glissées'],
      ['Homothétie', 'Centre O, rapport k : longueurs × k, aires × k²', 'Agrandir et réduire sans déformer']
    ],
    questions: [
      'Combien d’axes et de centres de symétrie pour un rectangle non carré ?',
      'M est à 5 cm de l’axe d. Où est M′ et que vaut MM′ ?',
      'La translation amène A(1 ; 2) sur B(4 ; 3). Image de M(2 ; 6) ?',
      'd est la médiatrice de [BC] et A ∈ d : démontre que ABC est isocèle.',
      'Homothétie de centre O, k = 2 : image de (3 ; 5) ? Et l’aire d’un triangle de 8 cm² ?'
    ],
    answers: [
      '2 axes (les médianes) et 1 centre (croisement des diagonales).',
      'À 5 cm de l’autre côté, sur la perpendiculaire : MM′ = 10 cm.',
      'Déplacement +3 ; +1 → M′(5 ; 7).',
      'La symétrie d’axe d fixe A et échange B et C ; elle conserve les longueurs, donc AB = AC.',
      '(6 ; 10) ; aire × 4 → 32 cm².'
    ]
  },
  exam: {
    exos: [
      'a) Donne le nombre d’axes de symétrie d’un carré. b) Le triangle équilatéral a-t-il un centre de symétrie ? d) Quelle lettre parmi S, A, H possède un centre de symétrie mais pas d’axe ? e) Donne une figure ayant une infinité d’axes.',
      'M est un point à 6 cm d’une droite d ; O un point du plan avec OM = 4 cm. a) Construis M₁ symétrique de M par rapport à d : que vaut MM₁ ? b) Construis M₂ symétrique de M par rapport à O : que vaut MM₂ ? d) Dans chaque cas, quel est le point resté fixe ou la droite fixe ? e) Laquelle des deux images est « tête en bas » ?',
      'd est la médiatrice de [BC], A est un point de d. a) Quels points la symétrie d’axe d échange-t-elle ? b) Que devient le segment [AB] ? d) Rédige la démonstration de AB = AC. e) Pourquoi une mesure à la règle ne constitue-t-elle pas une preuve ?',
      'La translation amène A(0 ; 1) sur B(3 ; 3). a) Donne le déplacement. b) Image de M(2 ; 2) ? d) Image du cercle de centre (1 ; 5) et de rayon 2 ? e) Quel quadrilatère forment A, B, M′, M ?',
      'Homothétie de centre O (origine) et de rapport k = 2, appliquée au triangle (1 ; 1), (3 ; 1), (2 ; 4). a) Donne les trois images. b) Par combien le périmètre est-il multiplié ? d) Et l’aire ? e) Pour revenir à la figure de départ depuis l’image, quel rapport k faut-il ?'
    ],
    corr: [
      'a) 4 ; b) non ; d) S ; e) le cercle. Un point par item.',
      'a) 12 cm ; b) 8 cm ; d) la droite d (symétrie axiale) ; le point O (symétrie centrale) ; e) M₂ (demi-tour). Un point par item.',
      'a) B et C ; b) [AC] ; d) la symétrie d’axe d fixe A, échange B et C, conserve les longueurs : AB = AC ; e) toute mesure est approchée, la démonstration est certaine. Un point par item.',
      'a) +3 ; +2 ; b) M′(5 ; 4) ; d) cercle de centre (4 ; 7), rayon 2 ; e) un parallélogramme ABM′M. Un point par item.',
      'a) (2 ; 2), (6 ; 2), (4 ; 8) ; b) 2 ; d) 4 ; e) k = 1/2. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit4, bufs);
})();
