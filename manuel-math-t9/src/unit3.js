// UNITÉ 3 — ALGÈBRE (PE T9) : 17 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

// repère local : x0,y0 = origine ; w,h = longueurs des axes
const axes = (x0, y0, w, h) => arrow(x0 - 14, y0, x0 + w, y0, '#333', 2.5) + arrow(x0, y0 + 14, x0, y0 - h, '#333', 2.5);

const figs = {};
// S1 — variables
figs.u3f1 = (() => { const { s, y } = head('Variable indépendante, variable dépendante', ['x se choisit librement ; y se calcule à partir de x.']);
  const top = y + 30;
  let b = box(90, top + 20, 240, 100, '', '#E3F2FD', '#1565C0', 22) + box(400, top + 20, 220, 100, '', '#FFF3E0', OCRE, 22) + box(690, top + 20, 240, 100, '', '#E8F5E9', GREEN, 22);
  b += txt(210, top + 58, 'x : heures de travail', 19, '#1565C0', 'bold', 'middle') + txt(210, top + 92, 'INDÉPENDANTE', 19, '#1565C0', 'bold', 'middle');
  b += txt(510, top + 58, 'règle', 19, OCRE, 'bold', 'middle') + txt(510, top + 92, 'y = 4 000 × x', 21, OCRE, 'bold', 'middle');
  b += txt(810, top + 58, 'y : salaire en Ar', 19, GREEN, 'bold', 'middle') + txt(810, top + 92, 'DÉPENDANTE', 19, GREEN, 'bold', 'middle');
  b += arrow(335, top + 70, 395, top + 70, '#555', 2.5) + arrow(625, top + 70, 685, top + 70, '#555', 2.5);
  b += txt(500, top + 175, 'on choisit x, la règle répond y : y dépend de x', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 210, s + b); })();
// S2 — 4 représentations
figs.u3f2 = (() => { const { s, y } = head('Quatre représentations d’une même situation', ['Mots, table, graphique, règle : quatre photos du même lien.']);
  const top = y + 25;
  let b = box(80, top, 410, 105, '', '#E3F2FD', '#1565C0', 20) + box(520, top, 410, 105, '', '#E8F5E9', GREEN, 20);
  b += txt(285, top + 40, 'MOTS', 19, '#1565C0', 'bold', 'middle') + txt(285, top + 76, '« 1 500 Ar par kilo de riz »', 20, '#333', 'normal', 'middle');
  b += txt(725, top + 40, 'RÈGLE', 19, GREEN, 'bold', 'middle') + txt(725, top + 76, 'y = 1 500x', 22, GREEN, 'bold', 'middle');
  const t2 = [['x (kg)', '1', '2', '3'], ['y (Ar)', '1 500', '3 000', '4 500']];
  b += tableEl(80, top + 140, [120, 90, 100, 100], 48, t2);
  const X0 = 620, Y0 = top + 265, sc = 36;
  b += axes(X0, Y0, 290, 130);
  [[1, 1], [2, 2], [3, 3]].forEach(([vx, vy]) => { b += dot(X0 + vx * 70, Y0 - vy * 36, 7, PINK2); });
  b += seg(X0, Y0, X0 + 3.6 * 70, Y0 - 3.6 * 36, PINK2, 2.5);
  b += txt(X0 + 150, Y0 + 32, 'GRAPHIQUE : une droite', 18, PINK2, 'bold', 'middle');
  return svg(1000, Y0 + 60, s + b); })();
// S3 — affine vs non affine
figs.u3f3 = (() => { const { s, y } = head('Fonction affine ou non affine ?', ['Affine = graphique en ligne droite ; non affine = la ligne se courbe.']);
  const top = y + 30;
  const X1 = 140, Y1 = top + 220;
  let b = axes(X1, Y1, 300, 190);
  b += seg(X1, Y1 - 30, X1 + 280, Y1 - 170, GREEN, 3);
  b += txt(X1 + 150, Y1 + 35, 'affine : y = 0,5x + 1', 20, GREEN, 'bold', 'middle');
  const X2 = 580, Y2 = top + 220;
  b += axes(X2, Y2, 300, 190);
  let pts = '';
  for (let i = 0; i <= 28; i++) { const vx = i / 10; const vy = vx * vx / 4.2; pts += `${X2 + vx * 95},${Y2 - vy * 95} `; }
  b += `<polyline points="${pts}" fill="none" stroke="${PINK2}" stroke-width="3"/>`;
  b += txt(X2 + 150, Y2 + 35, 'non affine : y = x² (courbe)', 20, PINK2, 'bold', 'middle');
  return svg(1000, Y2 + 65, s + b); })();
// S4 — variation directe
figs.u3f4 = (() => { const { s, y } = head('La variation directe : y = ax', ['Droite qui PASSE par l’origine : double de x, double de y.']);
  const top = y + 25; const X0 = 170, Y0 = top + 250;
  let b = axes(X0, Y0, 420, 230);
  b += seg(X0, Y0, X0 + 420, Y0 - 192, GREEN, 3);
  [[1, 55], [2, 110], [3, 165]].forEach(([vx, vy]) => { b += dot(X0 + vx * 120, Y0 - vy, 7, '#1565C0'); });
  b += dot(X0, Y0, 8, PINK2) + txt(X0 - 32, Y0 + 10, 'O', 21, PINK2, 'bold', 'middle');
  b += txt(X0 + 260, Y0 - 205, 'y = 1 500x', 22, GREEN, 'bold', 'middle');
  b += txt(760, top + 60, 'x kg → y Ar', 21, '#333', 'bold', 'middle');
  b += txt(760, top + 100, 'y ÷ x = 1 500', 21, OCRE, 'bold', 'middle');
  b += txt(760, top + 140, 'toujours !', 21, OCRE, 'bold', 'middle');
  b += txt(500, Y0 + 45, 'proportionnalité : passage par l’origine + quotient constant', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 80, s + b); })();
// S5 — variation partielle
figs.u3f5 = (() => { const { s, y } = head('La variation partielle : y = ax + b', ['Une part fixe b, puis a par unité : la droite démarre au-dessus de O.']);
  const top = y + 25; const X0 = 170, Y0 = top + 250;
  let b = axes(X0, Y0, 420, 230);
  b += seg(X0, Y0 - 70, X0 + 390, Y0 - 215, PINK2, 3);
  b += dot(X0, Y0 - 70, 8, OCRE) + txt(X0 + 68, Y0 - 82, 'b = 2 000', 20, OCRE, 'bold', 'middle');
  b += txt(X0 + 280, Y0 - 190, 'y = 500x + 2 000', 22, PINK2, 'bold', 'middle');
  b += txt(765, top + 55, 'course en taxi :', 20, '#333', 'bold', 'middle');
  b += txt(765, top + 92, 'prise en charge 2 000 Ar', 18, OCRE, 'normal', 'middle');
  b += txt(765, top + 126, '+ 500 Ar par km', 18, PINK2, 'normal', 'middle');
  b += txt(500, Y0 + 45, 'x = 0 coûte déjà b : la droite coupe l’axe des y en b, pas en O', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 80, s + b); })();
// S6 — taux de variation
figs.u3f6 = (() => { const { s, y } = head('Le taux de variation', ['a = variation de y ÷ variation de x : la pente de l’escalier.']);
  const top = y + 25; const X0 = 170, Y0 = top + 250;
  let b = axes(X0, Y0, 460, 230);
  b += seg(X0, Y0 - 50, X0 + 430, Y0 - 222, '#1565C0', 3);
  const xA = X0 + 90, yA = Y0 - 86, xB = X0 + 290, yB = Y0 - 166;
  b += dot(xA, yA, 8, PINK2) + dot(xB, yB, 8, PINK2);
  b += seg(xA, yA, xB, yA, OCRE, 2.5) + seg(xB, yA, xB, yB, GREEN, 2.5);
  b += txt((xA + xB) / 2, yA + 30, 'Δx = 2', 20, OCRE, 'bold', 'middle');
  b += txt(xB + 55, (yA + yB) / 2 + 7, 'Δy = 800', 20, GREEN, 'bold', 'middle');
  b += txt(745, top + 60, 'a = Δy ÷ Δx', 23, '#1565C0', 'bold', 'middle');
  b += txt(745, top + 100, '= 800 ÷ 2 = 400', 22, '#1565C0', 'bold', 'middle');
  b += txt(500, Y0 + 45, 'même escalier partout sur la droite : le taux est constant', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 80, s + b); })();
// S7 — valeur initiale
figs.u3f7 = (() => { const { s, y } = head('La valeur initiale', ['b = la valeur de y quand x = 0 : le point de départ.']);
  const top = y + 25; const X0 = 170, Y0 = top + 250;
  let b = axes(X0, Y0, 420, 230);
  b += seg(X0, Y0 - 120, X0 + 390, Y0 - 216, GREEN, 3);
  b += dot(X0, Y0 - 120, 9, PINK2);
  b += txt(X0 + 108, Y0 - 132, 'b = 30 000 Ar', 20, PINK2, 'bold', 'middle');
  b += txt(760, top + 50, 'épargne de Faly :', 20, '#333', 'bold', 'middle');
  b += txt(760, top + 87, '30 000 Ar au départ,', 18, PINK2, 'normal', 'middle');
  b += txt(760, top + 120, '+ 4 000 Ar par semaine', 18, GREEN, 'normal', 'middle');
  b += txt(760, top + 160, 'y = 4 000x + 30 000', 21, '#1565C0', 'bold', 'middle');
  b += txt(500, Y0 + 45, 'dans la table : b est le y de la colonne x = 0', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 80, s + b); })();
// S8 — règle et paramètres
figs.u3f8 = (() => { const { s, y } = head('La règle y = ax + b et ses deux paramètres', ['a incline la droite, b la soulève : deux réglages indépendants.']);
  const top = y + 25; const X0 = 150, Y0 = top + 240;
  let b = axes(X0, Y0, 360, 220);
  b += seg(X0, Y0 - 60, X0 + 330, Y0 - 126, GREEN, 2.5);
  b += seg(X0, Y0 - 60, X0 + 330, Y0 - 258 + 60, PINK2, 2.5);
  b += txt(X0 + 265, Y0 - 90, 'a petit', 19, GREEN, 'bold', 'middle') + txt(X0 + 250, Y0 - 215, 'a grand', 19, PINK2, 'bold', 'middle');
  const X1 = 620, Y1 = Y0;
  b += axes(X1, Y1, 330, 220);
  b += seg(X1, Y1 - 40, X1 + 300, Y1 - 140, '#1565C0', 2.5);
  b += seg(X1, Y1 - 120, X1 + 300, Y1 - 220, OCRE, 2.5);
  b += txt(X1 + 150, Y1 + 35, 'même a, b différent :', 19, OCRE, 'bold', 'middle') + txt(X1 + 150, Y1 + 63, 'droites parallèles', 19, OCRE, 'bold', 'middle');
  b += txt(X0 + 165, Y0 + 35, 'même b, a différent :', 19, GREEN, 'bold', 'middle') + txt(X0 + 165, Y0 + 63, 'l’inclinaison change', 19, GREEN, 'bold', 'middle');
  return svg(1000, Y0 + 95, s + b); })();
// S9 — interpolation / extrapolation
figs.u3f9 = (() => { const { s, y } = head('Interpoler, extrapoler', ['Lire ENTRE les points connus ou PROLONGER au-delà.']);
  const top = y + 25; const X0 = 150, Y0 = top + 250;
  let b = axes(X0, Y0, 520, 230);
  b += seg(X0 + 40, Y0 - 55, X0 + 340, Y0 - 175, '#1565C0', 3);
  b += `<line x1="${X0 + 340}" y1="${Y0 - 175}" x2="${X0 + 480}" y2="${Y0 - 231}" stroke="#1565C0" stroke-width="3" stroke-dasharray="10 8"/>`;
  b += dot(X0 + 40, Y0 - 55, 8, GREEN) + dot(X0 + 340, Y0 - 175, 8, GREEN);
  b += dot(X0 + 190, Y0 - 115, 8, OCRE) + txt(X0 + 190, Y0 - 140, 'interpolation', 19, OCRE, 'bold', 'middle');
  b += dot(X0 + 450, Y0 - 219, 8, PINK2) + txt(X0 + 420, Y0 - 245, 'extrapolation', 19, PINK2, 'bold', 'middle');
  b += txt(790, top + 70, 'entre les points :', 19, OCRE, 'bold', 'middle') + txt(790, top + 100, 'terrain sûr', 19, OCRE, 'normal', 'middle');
  b += txt(790, top + 150, 'au-delà :', 19, PINK2, 'bold', 'middle') + txt(790, top + 180, 'terrain deviné', 19, PINK2, 'normal', 'middle');
  return svg(1000, Y0 + 50, s + b); })();
// S10 — fonction inverse
figs.u3f10 = (() => { const { s, y } = head('La fonction inverse : xy = k', ['Le produit xy reste constant : quand x double, y est divisé par 2.']);
  const top = y + 25; const X0 = 150, Y0 = top + 260;
  let b = axes(X0, Y0, 420, 240);
  let pts = '';
  for (let i = 8; i <= 95; i++) { const vx = i / 10; const vy = 24 / vx; if (vy * 24 <= 245) pts += `${X0 + vx * 42},${Y0 - vy * 24} `; }
  b += `<polyline points="${pts}" fill="none" stroke="${PINK2}" stroke-width="3"/>`;
  [[4, 6], [6, 4], [8, 3]].forEach(([vx, vy]) => { b += dot(X0 + vx * 42, Y0 - vy * 24, 7, '#1565C0'); });
  b += txt(765, top + 55, '4 ouvriers → 6 jours', 19, '#333', 'normal', 'middle');
  b += txt(765, top + 90, '8 ouvriers → 3 jours', 19, '#333', 'normal', 'middle');
  b += txt(765, top + 135, 'xy = 24 toujours', 22, PINK2, 'bold', 'middle');
  b += txt(500, Y0 + 45, 'la courbe (hyperbole) ne touche jamais les axes', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 80, s + b); })();
// S11 — fonction affine ↔ droite
figs.u3f11 = (() => { const { s, y } = head('Fonction affine et équation de droite : même monde', ['Taux de variation ↔ pente ; valeur initiale ↔ ordonnée à l’origine.']);
  const top = y + 20;
  const data = [['Langage des fonctions', 'Langage des droites'], ['règle y = ax + b', 'équation y = ax + b'], ['taux de variation a', 'pente a'], ['valeur initiale b', 'ordonnée à l’origine b']];
  let b = tableEl(130, top, [370, 370], 58, data);
  b += txt(500, top + 4 * 58 + 45, 'deux vocabulaires, un seul objet : la droite du plan cartésien', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();
// S12 — types de droites
figs.u3f12 = (() => { const { s, y } = head('Trois types de droites', ['Horizontale y = k, verticale x = h, oblique y = ax + b.']);
  const top = y + 25; const X0 = 420, Y0 = top + 170, u = 34;
  let b = axes(X0 - 240, Y0, 520, 155);
  b += seg(X0 - 240 + 10, Y0 - 2 * u, X0 + 260, Y0 - 2 * u, GREEN, 3) + txt(X0 + 180, Y0 - 2 * u - 16, 'y = 2 (horizontale)', 19, GREEN, 'bold', 'middle');
  b += seg(X0 - 240 + 3 * u + 180, Y0 + 115, X0 - 240 + 3 * u + 180, Y0 - 125, PINK2, 3) + txt(X0 - 240 + 3 * u + 180, Y0 + 142, 'x = 3 (verticale)', 19, PINK2, 'bold', 'middle');
  b += seg(X0 - 230, Y0 + 100, X0 + 250, Y0 - 140, '#1565C0', 3) + txt(X0 + 190, Y0 - 148, 'y = 0,5x − 1', 19, '#1565C0', 'bold', 'middle');
  b += txt(500, Y0 + 185, 'la verticale x = h n’est PAS une fonction : un seul x, une infinité de y !', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 220, s + b); })();
// S13 — tracer une droite
figs.u3f13 = (() => { const { s, y } = head('Tracer y = 2x − 1 en deux pas', ['Partir de b sur l’axe des y, puis monter de a pour chaque pas de 1 vers la droite.']);
  const top = y + 25; const X0 = 250, Y0 = top + 230, u = 55;
  let b = axes(X0, Y0 + 60, 430, 290);
  b += dot(X0, Y0 - (-1) * u - 60 + 60, 0, '#fff');
  const py = v => Y0 + 60 - (v + 1) * u - 0 * u;
  b += dot(X0, py(-1) + 0, 9, PINK2) + txt(X0 - 60, py(-1) + 6, 'b = −1', 20, PINK2, 'bold', 'middle');
  b += seg(X0, py(-1), X0 + u, py(-1), OCRE, 2.5) + seg(X0 + u, py(-1), X0 + u, py(1), GREEN, 2.5);
  b += txt(X0 + u / 2, py(-1) + 28, '+1', 19, OCRE, 'bold', 'middle') + txt(X0 + u + 38, (py(-1) + py(1)) / 2, '+2', 19, GREEN, 'bold', 'middle');
  b += dot(X0 + u, py(1), 9, PINK2);
  b += seg(X0 - 70, py(-1) - (-70 / u) * 2 * u / 1, X0 + 320, py(-1) + (320 / u) * 2 * u / u * 0 + 0, '#fff', 0);
  // droite y=2x-1 : deux points (0,-1) et (1,1), prolongée
  const x1 = X0 - 60, y1 = py(2 * (-60 / u) - 1 + 1) + 0;
  b += seg(X0 - 60, py(-1) + 60 * 2 * (1) / 1 * (1 / u) * u / u, 0, 0, '#fff', 0);
  b += `<line x1="${X0 - 55}" y1="${py(-1) + 110}" x2="${X0 + 185}" y2="${py(-1) - 370}" stroke="#1565C0" stroke-width="3"/>`;
  b += txt(X0 + 255, py(1) - 95, 'y = 2x − 1', 22, '#1565C0', 'bold', 'middle');
  b += txt(760, top + 70, '1. placer b sur l’axe y', 19, PINK2, 'bold', 'middle');
  b += txt(760, top + 108, '2. avancer 1, monter a', 19, GREEN, 'bold', 'middle');
  b += txt(760, top + 146, '3. relier et prolonger', 19, '#1565C0', 'bold', 'middle');
  return svg(1000, Y0 + 130, s + b); })();
// S14 — déterminer l'équation
figs.u3f14 = (() => { const { s, y } = head('Trouver l’équation d’une droite par deux points', ['La pente d’abord, l’ordonnée à l’origine ensuite.']);
  const top = y + 20;
  const data = [['Étape', 'Avec A(1 ; 3) et B(4 ; 9)'], ['pente a = Δy/Δx', 'a = (9 − 3)/(4 − 1) = 6/3 = 2'], ['b par un point', '3 = 2 × 1 + b → b = 1'], ['équation', 'y = 2x + 1'], ['contrôle avec B', '2 × 4 + 1 = 9 ✓']];
  let b = tableEl(120, top, [330, 430], 56, data);
  return svg(1000, top + 5 * 56 + 40, s + b); })();
// S15 — positions relatives
figs.u3f15 = (() => { const { s, y } = head('Parallèles, sécantes, perpendiculaires', ['Mêmes pentes → parallèles ; produit des pentes = −1 → perpendiculaires.']);
  const top = y + 25;
  const X1 = 140, Y1 = top + 200;
  let b = axes(X1, Y1, 290, 180);
  b += seg(X1, Y1 - 20, X1 + 260, Y1 - 150, GREEN, 3) + seg(X1, Y1 - 80, X1 + 260, Y1 - 210 + 0, GREEN, 3);
  b += txt(X1 + 140, Y1 + 35, 'a = a′ : parallèles', 20, GREEN, 'bold', 'middle');
  const X2 = 580, Y2 = top + 200;
  b += axes(X2, Y2, 290, 180);
  b += seg(X2, Y2 - 30, X2 + 250, Y2 - 155, PINK2, 3);
  b += seg(X2 + 160, Y2 - 195, X2 + 245, Y2 - 25, '#1565C0', 3);
  b += txt(X2 + 145, Y2 + 35, 'a × a′ = −1 : perpendiculaires', 20, PINK2, 'bold', 'middle');
  b += txt(500, Y2 + 80, 'ex. : y = 2x + 1 ⊥ y = −0,5x + 3 car 2 × (−0,5) = −1', 21, OCRE, 'bold', 'middle');
  return svg(1000, Y2 + 115, s + b); })();
// S16 — polynômes
figs.u3f16 = (() => { const { s, y } = head('Réduire une expression algébrique', ['On regroupe les termes semblables : mêmes lettres, mêmes exposants.']);
  const top = y + 25;
  let b = txt(500, top + 10, '3x² + 5x − 2 + x² − 3x + 7', 25, '#1565C0', 'bold', 'middle');
  b += arrow(500, top + 35, 500, top + 75, '#555', 2.5);
  b += box(140, top + 90, 220, 70, '', '#E8F5E9', GREEN, 22) + box(400, top + 90, 220, 70, '', '#FFF3E0', OCRE, 22) + box(660, top + 90, 200, 70, '', '#FDE7EF', PINK2, 22);
  b += txt(250, top + 133, '3x² + x² = 4x²', 21, GREEN, 'bold', 'middle');
  b += txt(510, top + 133, '5x − 3x = 2x', 21, OCRE, 'bold', 'middle');
  b += txt(760, top + 133, '−2 + 7 = 5', 21, PINK2, 'bold', 'middle');
  b += txt(500, top + 215, 'résultat réduit : 4x² + 2x + 5', 24, '#1565C0', 'bold', 'middle');
  b += txt(500, top + 252, 'interdit : 4x² + 2x ne se regroupent pas (exposants différents) !', 19, PINK2, 'bold', 'middle');
  return svg(1000, top + 285, s + b); })();
// S17 — équation balance
figs.u3f17 = (() => { const { s, y } = head('Résoudre 3x + 500 = 2 000', ['La balance reste équilibrée si on agit pareil des deux côtés.']);
  const top = y + 20;
  const data = [['Étape', 'Équation', 'Action'], ['départ', '3x + 500 = 2 000', ''], ['− 500 des deux côtés', '3x = 1 500', 'défaire le + 500'], ['÷ 3 des deux côtés', 'x = 500', 'défaire le × 3'], ['vérification', '3 × 500 + 500 = 2 000 ✓', 'toujours !']];
  let b = tableEl(90, top, [290, 310, 230], 56, data);
  return svg(1000, top + 5 * 56 + 40, s + b); })();

const S = [
  {
    t: 'Identifier variable indépendante et variable dépendante', comp: 'Algèbre', theme: 'Relation entre deux variables',
    goal: 'identifier les deux variables d’une situation et dire laquelle dépend de l’autre',
    mat: 'Situations écrites, fiches d’activités, cahier',
    revQ: 'Dans « le prix dépend du nombre de kilos », quelles sont les deux grandeurs ?',
    revRA: 'Le nombre de kilos et le prix.',
    situation: 'Niry est payée 4 000 Ar l’heure au télé-centre. Plus elle travaille d’heures, plus son salaire grossit : le salaire SUIT les heures, jamais l’inverse — ce n’est pas en gonflant son salaire qu’elle allonge ses heures ! Entre deux grandeurs liées, l’une commande, l’autre obéit.',
    def: 'Dans une situation liant deux grandeurs, la variable indépendante est celle dont on choisit librement les valeurs ; la variable dépendante est celle dont la valeur se déduit de l’autre par la relation. On note souvent x l’indépendante et y la dépendante.',
    autrement: 'x est le bouton qu’on tourne ; y est l’aiguille qui réagit.',
    concept: 'Identifier les variables est le premier geste de toute modélisation. Le test de la phrase : « … dépend de … » — le salaire dépend des heures (heures = x, salaire = y) ; la hauteur de l’eau dépend de la durée de pluie ; le prix dépend de la masse achetée. Sur un graphique, la convention est mondiale : l’indépendante se lit horizontalement, la dépendante verticalement. Attention, le choix peut dépendre du point de vue : pour le client, le prix dépend des kilos ; pour qui veut dépenser exactement 10 000 Ar, les kilos dépendent du budget ! C’est la QUESTION posée qui désigne la variable libre. Une fois x et y nommés, la relation devient une règle de calcul : y = 4 000x — l’algèbre peut commencer.',
    synthese: 'x = variable choisie (indépendante), y = variable calculée (dépendante) ; test « y dépend de x » ; x horizontal, y vertical ; la question posée fixe les rôles.',
    method: ['Lister les deux grandeurs qui varient ensemble.', 'Demander : laquelle choisit-on ? laquelle se déduit ?', 'Noter x l’indépendante, y la dépendante, écrire la relation si possible.'],
    exemple: 'Location de vélo à 1 000 Ar la demi-heure : x = nombre de demi-heures (on choisit), y = prix payé (se déduit) ; y = 1 000x.',
    erreur: 'Croire que x est « toujours le temps » : dans « la durée du trajet dépend de la vitesse », c’est la vitesse qui est x ! Les rôles viennent de la situation, pas de l’habitude.',
    saistu: 'Les mots « variable dépendante » viennent des sciences expérimentales : le chercheur manipule la variable indépendante (dose, température…) et OBSERVE la dépendante. Toute la démarche scientifique tient dans ce couple — en médecine, on l’appelle dose et effet.',
    exos: ['Identifie x et y : a) le prix du riz selon la masse ; b) la distance parcourue selon la durée de marche ; d) la facture JIRAMA selon les kWh ; e) la monnaie rendue selon la somme donnée.',
      'Pour chaque règle, nomme les variables : a) y = 2 500x (photocopies à 2 500 Ar la page… trop cher ? juge !) ; b) y = 60x (km selon heures) ; d) y = x/25 (litres d’essence selon km, 25 km par litre) ; e) y = 500 − 20x.',
      'On gonfle un ballon : son diamètre grandit avec le nombre de souffles. a) Variable indépendante ? b) Dépendante ? d) Et si on demande « combien de souffles pour 30 cm ? », qui devient la donnée ? e) Conclis : qu’est-ce qui fixe les rôles ?'],
    corr: ['a) x = masse, y = prix ; b) x = durée, y = distance ; d) x = kWh, y = montant ; e) x = somme donnée, y = monnaie.',
      'a) x = pages, y = prix (2 500 Ar la page serait en effet très cher !) ; b) x = heures, y = km ; d) x = km, y = litres ; e) x = unités achetées par ex., y = reste.',
      'a) le nombre de souffles ; b) le diamètre ; d) le diamètre devient la donnée, les souffles l’inconnue ; e) la question posée.'],
    fig: 'u3f1'
  },
  {
    t: 'Passer d’une représentation à une autre', comp: 'Algèbre', theme: 'Modes de représentation d’une situation',
    goal: 'représenter une même relation par des mots, une table, un graphique et une règle',
    mat: 'Table de valeurs, papier quadrillé, fiches d’activités',
    revQ: 'Chez la marchande, 1 kg de riz coûte 1 500 Ar : combien pour 2 kg, 3 kg ?',
    revRA: '3 000 Ar ; 4 500 Ar.',
    situation: 'Quatre élèves décrivent la même marchande de riz : Hoby parle (« 1 500 Ar le kilo »), Faly dresse une table, Vola trace un graphique, Sitraka écrit y = 1 500x. Le professeur sourit : « vous avez tous raison — vous photographiez le même lien sous quatre angles. »',
    def: 'Une situation algébrique peut se représenter de quatre façons équivalentes : la description en mots, la table de valeurs, la représentation graphique et la règle (formule). Modéliser une situation, c’est choisir la représentation adaptée et savoir passer de l’une à l’autre.',
    autrement: 'mots, table, dessin, formule : quatre langues pour la même phrase — et on apprend à traduire dans les deux sens.',
    concept: 'Chaque représentation a son talent : les MOTS donnent le sens (que signifie 1 500 ?), la TABLE donne des valeurs précises prêtes à l’emploi, le GRAPHIQUE montre la forme globale d’un coup d’œil (droite ? courbe ? montée ? descente ?), la RÈGLE calcule TOUTES les valeurs possibles et se prête aux équations. Les traductions clés : mots → règle (repérer « par kilo », « fixe », traduire en coefficients) ; table → graphique (chaque colonne devient un point (x ; y)) ; graphique → table (lire les coordonnées) ; règle → table (substituer des valeurs de x). Le bon mathématicien circule sans péage entre les quatre : une question de prix précis appelle la règle, une tendance appelle le graphique.',
    synthese: 'quatre modes équivalents : mots (sens), table (valeurs), graphique (forme), règle (calcul universel) ; savoir traduire dans tous les sens.',
    method: ['Partir de la représentation donnée et extraire le lien entre x et y.', 'Construire la représentation demandée (points, colonnes ou formule).', 'Contrôler avec une valeur : les quatre photos doivent coïncider.'],
    exemple: 'Table : (1 ; 1 500), (2 ; 3 000), (3 ; 4 500) → règle y = 1 500x → graphique : points alignés avec l’origine → mots : « 1 500 Ar par kilo ».',
    erreur: 'Relier les points d’un graphique sans réfléchir : si x est un nombre de personnes (2 ; 3 ; 4…), les valeurs intermédiaires n’existent pas — on laisse des points isolés ! On ne trace la ligne continue que si toutes les valeurs de x ont un sens.',
    saistu: 'Le graphique cartésien doit son nom à René Descartes (1637)… mais l’idée de croiser deux axes venait aussi de Pierre de Fermat, la même année, sans qu’ils se soient copiés ! Et le mot « table » vient des tables d’argile babyloniennes — les plus vieilles tables de valeurs du monde.',
    exos: ['« Un cybercafé facture 500 Ar le quart d’heure. » a) Écris la règle. b) Dresse la table pour x = 1, 2, 3, 4. d) Les points du graphique sont-ils alignés ? e) Avec l’origine ?',
      'Table : x = 0, 1, 2, 3 et y = 2 000, 2 500, 3 000, 3 500. a) Que vaut y quand x = 0 ? b) De combien y grimpe-t-il par pas de x ? d) Écris la règle. e) Traduis en mots (location avec caution, par exemple).',
      'Règle y = 300x. a) Table pour x = 2, 5, 10. b) Mots possibles ? d) Si x = nombre de billets de tombola, relie-t-on les points ? e) Pourquoi ?'],
    corr: ['a) y = 500x ; b) 500, 1 000, 1 500, 2 000 ; d) oui ; e) oui : y = 500x passe par l’origine.',
      'a) 2 000 ; b) 500 ; d) y = 500x + 2 000 ; e) « 2 000 Ar de prise en charge puis 500 Ar par unité ».',
      'a) 600, 1 500, 3 000 ; b) « 300 Ar le billet » ; d) non : points isolés ; e) 2,5 billets n’existent pas — x est entier.'],
    fig: 'u3f2'
  },
  {
    t: 'Distinguer fonction affine et fonction non affine', comp: 'Algèbre', theme: 'Exploration de diverses fonctions',
    goal: 'reconnaître une fonction affine parmi diverses fonctions par sa table et son graphique',
    mat: 'Tables de valeurs, papier quadrillé, fiches de graphiques',
    revQ: 'Trace de tête : à quoi ressemble le graphique de y = 1 500x ?',
    revRA: 'Une droite qui passe par l’origine.',
    situation: 'Au tableau, quatre graphiques : le salaire de Niry (droite), l’aire d’un carré selon son côté (courbe qui s’envole), le partage d’un gâteau selon le nombre d’invités (courbe qui s’écrase), le tarif d’un taxi (droite qui ne part pas de O). Lesquels sont de la même famille ?',
    def: 'Une fonction affine est une fonction dont la règle s’écrit y = ax + b : son graphique est une droite et, dans sa table, des accroissements égaux de x produisent des accroissements égaux de y. Toute fonction dont le graphique n’est pas une droite est non affine (quadratique y = x², inverse y = k/x, affine par morceaux…).',
    autrement: 'affine = la ligne est droite et la table grimpe d’un pas régulier ; non affine = ça se courbe, le pas change.',
    concept: 'Deux tests valent mieux qu’un. Test GRAPHIQUE : règle posée sur le dessin — droite → affine ; courbe → non. Test TABLE : on regarde les accroissements de y pour des pas de x égaux — constants (+500, +500, +500…) → affine ; changeants (+1, +3, +5…) → non. Le zoo des non-affines à connaître de vue : la QUADRATIQUE y = x² (parabole, accroissements qui gonflent), l’INVERSE y = k/x (hyperbole, décroissance qui ralentit), l’AFFINE PAR MORCEAUX (segments de pentes différentes — tarifs par tranches de la JIRAMA !). La famille affine contient deux cas particuliers : b = 0 (variation directe, droite par l’origine) et a = 0 (fonction constante, droite horizontale).',
    synthese: 'affine ⇔ droite ⇔ accroissements de y constants ; cas b = 0 (directe) et a = 0 (constante) ; non-affines types : x², k/x, morceaux.',
    method: ['Tracer ou imaginer le graphique : droite ou courbe ?', 'Contrôler dans la table : pas de y constant pour pas de x constant ?', 'Si affine : repérer a (le pas) et b (départ) ; sinon, nommer la famille.'],
    exemple: 'Table A : y passe de 3 à 5 à 7 à 9 (pas +2 constant) → affine. Table B : 1, 4, 9, 16 (pas +3, +5, +7) → non affine (c’est x²).',
    erreur: 'Décréter « affine » parce que y augmente régulièrement DANS LE SENS « toujours plus » : y = x² augmente aussi, mais de plus en plus vite ! C’est la CONSTANCE du pas qui compte, pas la croissance.',
    saistu: 'Le mot « affine » vient du latin affinis, « voisin, parent » : une fonction affine est parente de la fonction linéaire y = ax — elle lui ressemble à une translation près, le fameux + b. La parabole y = x², elle, descend du grec parabolê… la même racine que « parabole » des récits !',
    exos: ['Affine ou non ? a) y = 3x − 2 ; b) y = x² + 1 ; d) y = 7 ; e) y = 12/x.',
      'Tables (x = 0, 1, 2, 3) — affine ou non ? a) y = 5, 8, 11, 14 ; b) y = 1, 2, 4, 8 ; d) y = 10, 10, 10, 10 ; e) y = 0, 1, 4, 9.',
      'Le tarif du cyber : 1 000 Ar la première heure puis 500 Ar par heure suivante. a) Calcule y pour x = 1, 2, 3, 4 heures. b) Les pas sont-ils constants dès x = 1 ? d) La fonction est-elle affine sur tout son domaine ? e) Comment la décrire ?'],
    corr: ['a) affine (a = 3, b = −2) ; b) non (quadratique) ; d) affine constante (a = 0) ; e) non (inverse).',
      'a) affine (pas +3) ; b) non (pas ×2) ; d) affine constante ; e) non (carrés).',
      'a) 1 000, 1 500, 2 000, 2 500 ; b) oui, +500 ; d) non : entre 0 et 1 le pas est 1 000 ; e) affine par morceaux.'],
    fig: 'u3f3'
  },
  {
    t: 'Établir une fonction de variation directe', comp: 'Algèbre', theme: 'Variation directe et proportionnalité',
    goal: 'reconnaître et établir une fonction de variation directe y = ax',
    mat: 'Table de valeurs, papier quadrillé, situations de proportionnalité',
    revQ: 'Si 1 kg coûte 1 500 Ar, que coûtent 0 kg ? 4 kg ?',
    revRA: '0 Ar ; 6 000 Ar.',
    situation: 'La balance de la marchande ne ment pas : 2 kg coûtent le double de 1 kg, 3 kg le triple… et 0 kg coûte 0 Ar ! Prix et masse varient ENSEMBLE, dans le même rapport. Cette fidélité parfaite porte un nom : la variation directe.',
    def: 'Une fonction de variation directe est une fonction de règle y = ax (a non nul) : y est proportionnel à x. Sa table a un quotient y/x constant égal à a et son graphique est une droite passant par l’origine.',
    autrement: 'y = ax, rien d’autre : pas de part fixe, tout part de zéro, et y ÷ x redonne toujours le même nombre a.',
    concept: 'La variation directe est la proportionnalité des classes précédentes, promue au rang de fonction. Sa signature est triple et chaque indice suffit : RÈGLE de la forme y = ax (pas de + b) ; TABLE au quotient constant (1 500/1 = 3 000/2 = 4 500/3) ; GRAPHIQUE en droite PAR L’ORIGINE. Le coefficient a est toujours une grandeur concrète : prix unitaire (Ar/kg), vitesse (km/h), débit (L/min) — le « taux » de l’unité 2 devenu pente ! Pour établir la règle à partir d’une situation, un seul couple suffit : si 3 kg coûtent 4 500 Ar, alors a = 4 500/3 = 1 500 et y = 1 500x. Contre-exemples à flairer : le taxi (prise en charge → ne part pas de 0), l’aire du carré (quotient non constant).',
    synthese: 'y = ax ⇔ quotient y/x constant ⇔ droite par l’origine ; a = une valeur de y ÷ son x ; a est un taux concret.',
    method: ['Vérifier le double-test : y(0) = 0 et quotient y/x constant.', 'Calculer a = y/x avec un couple connu.', 'Écrire y = ax et contrôler sur un autre couple.'],
    exemple: 'Un robinet remplit 36 L en 3 min : a = 12 L/min, y = 12x. Contrôle : en 5 min, 60 L ✓.',
    erreur: 'Confondre « ça augmente ensemble » et « proportionnel » : l’âge et la taille d’un enfant grandissent ensemble, mais un enfant de 10 ans n’est pas deux fois plus grand qu’à 5 ans ! Exiger le quotient constant, pas la simple croissance.',
    saistu: 'La pente a des routes est une variation directe affichée : un panneau « 10 % » annonce y = 0,10x — 10 m de montée pour 100 m parcourus. La route des hautes terres vers la côte Est dépasse par endroits 12 % : les camions y testent leurs freins… et la proportionnalité !',
    exos: ['Variation directe ? a) y = 7x ; b) y = 7x + 2 ; d) y = x/4 ; e) y = x².',
      'Un vélo parcourt 45 km en 3 h (allure régulière). a) Calcule a. b) Écris la règle. d) Distance en 5 h ? e) Durée pour 75 km ?',
      'Table : x = 2, 5, 8 et y = 9, 22,5, 36. a) Calcule les trois quotients y/x. b) Variation directe ? d) Règle ? e) Que vaut y pour x = 11 ?'],
    corr: ['a) oui ; b) non (+2) ; d) oui (a = 1/4) ; e) non.',
      'a) 15 km/h ; b) y = 15x ; d) 75 km ; e) 5 h.',
      'a) 4,5 ; 4,5 ; 4,5 ; b) oui ; d) y = 4,5x ; e) 49,5.'],
    fig: 'u3f4'
  },
  {
    t: 'Établir une fonction de variation partielle', comp: 'Algèbre', theme: 'Variation partielle y = ax + b',
    goal: 'reconnaître et établir une fonction de variation partielle',
    mat: 'Tarifs réels (taxi, location), table de valeurs, papier quadrillé',
    revQ: 'Un taxi : 2 000 Ar de prise en charge + 500 Ar/km. Prix pour 0 km ? 4 km ?',
    revRA: '2 000 Ar ; 4 000 Ar.',
    situation: 'Monter dans le taxi de Dada Naivo coûte déjà 2 000 Ar, avant même de rouler ! Puis chaque kilomètre ajoute 500 Ar. Le prix varie avec la distance… mais seulement EN PARTIE : une part fixe s’invite toujours. Voilà la variation partielle.',
    def: 'Une fonction de variation partielle est une fonction affine y = ax + b avec b non nul : y varie proportionnellement à x PLUS une constante. Sa droite ne passe pas par l’origine : elle coupe l’axe des ordonnées en b.',
    autrement: 'une part fixe b payée dans tous les cas, puis a par unité de x : y = ax + b.',
    concept: 'La variation partielle est partout où il y a un « droit d’entrée » : taxi (prise en charge + prix au km), électricité (abonnement + prix du kWh), artisan (déplacement + tarif horaire), location (caution + loyer). Le test qui la démasque face à la variation directe : calculer y/x — le quotient CHANGE (4 000/4 = 1 000 mais 4 500/5 = 900) alors que les ACCROISSEMENTS restent constants (+500 par km). Autrement dit : les accroissements sont proportionnels, pas les valeurs ! Pour établir la règle : b = la valeur en x = 0 (le prix « compteur à zéro »), a = l’accroissement par unité. La droite raconte la même histoire : départ en b sur l’axe vertical, montée régulière de pente a.',
    synthese: 'y = ax + b, b ≠ 0 ; part fixe b = y(0), taux a = accroissement par unité ; quotient y/x non constant mais pas constant ; droite coupant l’axe y en b.',
    method: ['Repérer la part fixe b (valeur pour x = 0).', 'Repérer le taux a (coût par unité supplémentaire).', 'Écrire y = ax + b et contrôler avec un couple de la situation.'],
    exemple: 'Électricité : 5 000 Ar d’abonnement + 600 Ar/kWh → y = 600x + 5 000. Pour 40 kWh : 29 000 Ar.',
    erreur: 'Tester la proportionnalité sur les VALEURS d’une variation partielle : « 4 km coûtent 4 000 Ar donc 8 km coûtent 8 000 Ar » — faux, 8 km coûtent 6 000 Ar ! Le doublement ne s’applique qu’à la partie variable.',
    saistu: 'Les tarifs des taxis-compteurs du monde entier sont des fonctions affines affichées sur la vitre : « drapeau » (le b) + prix au kilomètre (le a). À Antananarivo, les taxis-be pratiquent plutôt la fonction constante — même prix pour tout trajet… tant qu’on reste sur la ligne !',
    exos: ['Variation directe ou partielle ? a) y = 300x ; b) y = 300x + 1 500 ; d) location : 10 000 Ar de caution + 2 000 Ar/jour ; e) riz à 1 500 Ar/kg.',
      'Un plombier facture 8 000 Ar de déplacement + 6 000 Ar/heure. a) Règle ? b) Prix pour 3 h ? d) Durée si la facture atteint 26 000 Ar ? e) Que représente 8 000 dans la règle ?',
      'Table : x = 0, 2, 4, 6 et y = 1 500, 2 300, 3 100, 3 900. a) b ? b) accroissement par pas de 2 ? d) a par unité ? e) règle ?'],
    corr: ['a) directe ; b) partielle ; d) partielle (b = 10 000) ; e) directe.',
      'a) y = 6 000x + 8 000 ; b) 26 000 Ar ; d) 3 h (cohérent !) ; e) la part fixe b, payée même pour 0 h.',
      'a) 1 500 ; b) +800 ; d) 400 ; e) y = 400x + 1 500.'],
    fig: 'u3f5'
  },
  {
    t: 'Calculer le taux de variation', comp: 'Algèbre', theme: 'Taux de variation d’une fonction affine',
    goal: 'calculer le taux de variation d’une fonction affine à partir d’une table ou de deux couples',
    mat: 'Tables de valeurs, graphiques, calculatrice',
    revQ: 'De x = 1 à x = 3, y passe de 2 000 à 2 800 : de combien x et y ont-ils varié ?',
    revRA: 'x : +2 ; y : +800.',
    situation: 'Le réservoir du quartier se vide-t-il vite ? Lundi (jour 2) il contenait 8 600 L, jeudi (jour 5) 7 400 L. Les curieux veulent UN nombre qui dise le rythme : combien de litres par jour ? Diviser la variation de y par celle de x — le taux de variation est né.',
    def: 'Le taux de variation d’une fonction affine est le quotient a = Δy/Δx = (y₂ − y₁)/(x₂ − x₁), calculé avec deux couples quelconques (x₁ ; y₁) et (x₂ ; y₂). Pour une fonction affine, ce taux est constant : c’est le coefficient a de la règle y = ax + b.',
    autrement: 'a = ce que gagne (ou perd) y chaque fois que x avance de 1 — la variation de y divisée par la variation de x.',
    concept: 'Le taux de variation est un quotient de DIFFÉRENCES, pas de valeurs : (7 400 − 8 600)/(5 − 2) = −1 200/3 = −400 L/jour — le réservoir perd 400 litres par jour. Le signe parle : a positif → y grimpe ; a négatif → y descend ; a nul → y stagne. La constance du taux est la carte d’identité des fonctions affines : n’importe quelle paire de points donne le même a — vérifier avec deux paires est d’ailleurs un excellent test d’affinité. Géométriquement, Δx et Δy dessinent un escalier sous la droite : l’escalier a partout la même marche. Les unités suivent le quotient : L/jour, Ar/km, km/h — le taux de variation est le grand frère algébrique des taux de l’unité 2.',
    synthese: 'a = Δy/Δx avec deux couples ; constant pour une affine ; signe = sens de variation ; unité = unité de y par unité de x.',
    method: ['Choisir deux couples (x₁ ; y₁) et (x₂ ; y₂).', 'Calculer Δy = y₂ − y₁ et Δx = x₂ − x₁ DANS LE MÊME ORDRE.', 'Diviser : a = Δy/Δx, interpréter signe et unité.'],
    exemple: '(1 ; 3 500) et (4 ; 5 000) : a = (5 000 − 3 500)/(4 − 1) = 1 500/3 = 500 Ar par unité.',
    erreur: 'Croiser les ordres : (y₂ − y₁)/(x₁ − x₂) renverse le signe du taux ! Toujours soustraire dans le même sens en haut et en bas — le couple 2 moins le couple 1, partout.',
    saistu: 'Ton taux de variation deviendra « dérivée » au lycée : la vitesse instantanée d’une moto est le taux de variation de sa position sur un Δx minuscule. Les radars des gendarmes calculent exactement Δy/Δx — deux photos, une division, une amende !',
    exos: ['Calcule a : a) (0 ; 5) et (2 ; 11) ; b) (1 ; 10) et (5 ; 2) ; d) (3 ; 7) et (9 ; 7) ; e) (2 ; −1) et (6 ; 9).',
      'Table : x = 2, 4, 7 et y = 900, 1 500, 2 400. a) a entre x = 2 et 4 ? b) entre 4 et 7 ? d) la fonction est-elle affine ? e) interprète a si x est en kg et y en Ar.',
      'Le réservoir : (2 ; 8 600) et (5 ; 7 400). a) Δy ? b) Δx ? d) a et son unité ? e) que signifie son signe ?'],
    corr: ['a) 6/2 = 3 ; b) −8/4 = −2 ; d) 0 ; e) 10/4 = 2,5.',
      'a) 600/2 = 300 ; b) 900/3 = 300 ; d) oui, taux constant ; e) 300 Ar par kg.',
      'a) −1 200 L ; b) 3 jours ; d) −400 L/jour ; e) le contenu diminue.'],
    fig: 'u3f6'
  },
  {
    t: 'Déterminer la valeur initiale', comp: 'Algèbre', theme: 'Valeur initiale d’une fonction affine',
    goal: 'déterminer la valeur initiale b d’une fonction affine et l’interpréter',
    mat: 'Tables, graphiques, situations écrites, cahier',
    revQ: 'Dans y = 500x + 2 000, que vaut y quand x = 0 ?',
    revRA: '2 000 : la part fixe.',
    situation: 'Faly épargne pour un vélo : chaque semaine il ajoute 4 000 Ar dans sa boîte. Après 5 semaines, il compte 50 000 Ar. « Donc 10 000 Ar par semaine ? » Non ! La boîte n’était pas vide au départ… Combien contenait-elle ? La valeur initiale se cache dans l’équation.',
    def: 'La valeur initiale d’une fonction affine y = ax + b est le nombre b : c’est la valeur de y lorsque x = 0. Graphiquement, b est l’ordonnée du point où la droite coupe l’axe des ordonnées. Connaissant a et un couple (x ; y), on la calcule par b = y − ax.',
    autrement: 'b = le niveau de départ, ce que vaut y avant que x ne commence à compter.',
    concept: 'La valeur initiale se lit ou se calcule selon ce qu’on possède. LECTURE directe : dans la table, c’est le y de la colonne x = 0 ; sur le graphique, l’altitude du croisement avec l’axe vertical ; dans l’énoncé, le mot « fixe », « de départ », « d’abonnement ». CALCUL : quand x = 0 est hors de portée, on isole b = y − ax avec un couple connu — Faly : 50 000 = 4 000 × 5 + b, donc b = 50 000 − 20 000 = 30 000 Ar dormaient déjà dans la boîte ! Le couple (a ; b) raconte alors toute l’histoire : b où l’on part, a à quelle vitesse on avance. Deux fonctions peuvent partager le même a et différer par b : deux épargnants au même rythme, partis de fortunes différentes — droites parallèles.',
    synthese: 'b = y(0) = ordonnée à l’origine ; se lit (table, graphique, énoncé) ou se calcule : b = y − ax ; b = départ, a = rythme.',
    method: ['Chercher une lecture directe de y en x = 0.', 'Sinon, calculer a d’abord (taux), puis b = y − ax avec un couple.', 'Interpréter b dans le contexte et contrôler la règle complète.'],
    exemple: 'a = 300 et le couple (4 ; 2 700) : b = 2 700 − 300 × 4 = 1 500 ; règle y = 300x + 1 500.',
    erreur: 'Prendre pour b la PREMIÈRE valeur de la table même quand elle n’est pas en x = 0 : si la table commence à x = 2, son premier y n’est pas la valeur initiale ! b vit en x = 0, nulle part ailleurs.',
    saistu: 'En physique, la valeur initiale s’appelle condition initiale : la position de départ d’un mobile, la température de départ d’un café… Les ingénieurs du CNES calculent les trajectoires de fusées entières à partir de deux ingrédients : les lois (les a) et les conditions initiales (les b) !',
    exos: ['Donne b : a) y = 7x + 3 ; b) y = −2x ; d) table x = 0, 1, 2 avec y = 800, 950, 1 100 ; e) droite coupant l’axe des y à −2.',
      'Calcule b : a) a = 500, couple (3 ; 3 100) ; b) a = −40, couple (5 ; 400) ; d) a = 2, couple (−1 ; 3) ; e) a = 0,5, couple (8 ; 10).',
      'Faly : +4 000 Ar/semaine, 50 000 Ar après 5 semaines. a) Pose l’équation. b) Calcule b. d) Écris la règle. e) Combien après 12 semaines ?'],
    corr: ['a) 3 ; b) 0 ; d) 800 ; e) −2.',
      'a) 3 100 − 1 500 = 1 600 ; b) 400 + 200 = 600 ; d) 3 + 2 = 5 ; e) 10 − 4 = 6.',
      'a) 50 000 = 4 000 × 5 + b ; b) 30 000 ; d) y = 4 000x + 30 000 ; e) 78 000 Ar.'],
    fig: 'u3f7'
  },
  {
    t: 'Déterminer la règle et l’effet des paramètres', comp: 'Algèbre', theme: 'Forme générale et changement de paramètres',
    goal: 'écrire la règle d’une fonction affine et prévoir l’effet d’un changement de a ou de b',
    mat: 'Papier quadrillé, calques de droites, tables, cahier',
    revQ: 'Quels sont a et b dans y = −3x + 7 ?',
    revRA: 'a = −3 ; b = 7.',
    situation: 'Le cyber du quartier hésite : augmenter son prix horaire (le a) ou sa part fixe (le b) ? Sur le graphique affiché aux clients, les deux choix ne déforment pas la droite de la même façon. Jouer avec a et b, c’est piloter la droite comme un cerf-volant.',
    def: 'La forme générale de la règle d’une fonction affine est y = ax + b, où a est le taux de variation et b la valeur initiale. Modifier a change l’inclinaison de la droite (elle pivote autour de son point sur l’axe des y) ; modifier b translate la droite verticalement sans changer son inclinaison.',
    autrement: 'a = manette d’inclinaison, b = manette d’altitude ; on peut régler l’une sans toucher l’autre.',
    concept: 'Écrire la règle, c’est remplir les deux cases de y = ax + b : a par le taux (Δy/Δx ou « prix par unité »), b par la valeur initiale (y(0) ou « part fixe ») — les deux séances précédentes assemblées. L’effet des paramètres se visualise : AUGMENTER a redresse la droite (plus raide), le rendre négatif la fait descendre ; a = 0 l’allonge à l’horizontale. AUGMENTER b soulève toute la droite d’un bloc, la diminuer l’enfonce : les droites de même a forment une famille de parallèles. Conséquence pour le cyber : hausser le prix horaire pénalise les gros utilisateurs (l’écart grandit avec x), hausser la part fixe pénalise tout le monde pareil — même les petits ! Les paramètres ne sont pas que des lettres : ce sont des décisions.',
    synthese: 'y = ax + b : a = inclinaison (pivote), b = altitude (translate) ; même a → parallèles ; les choix de a et b ont des effets concrets différents.',
    method: ['Déterminer a (taux) puis b (valeur initiale) depuis la situation.', 'Écrire la règle et la contrôler sur un couple.', 'Pour un changement de paramètre : dire s’il pivote (a) ou translate (b) la droite, et l’effet concret.'],
    exemple: 'Tarif : 1 000 Ar fixes + 750 Ar/h → y = 750x + 1 000. Passer à 900 Ar/h : la droite pivote et se redresse ; passer la part fixe à 1 500 : elle monte de 500 partout.',
    erreur: 'Croire que changer b change la pente : les droites y = 2x + 1 et y = 2x + 5 grimpent exactement du même pas — elles ne se croiseront jamais ! Seul a gouverne l’inclinaison.',
    saistu: 'Les économistes appellent a « coût marginal » (le coût d’une unité de plus) et b « coût fixe ». Toute la stratégie d’une entreprise tient dans ce duo : les compagnies de téléphone vendent des forfaits à gros b et petit a, les taxiphones font l’inverse — deux droites qui se croisent… au client d’être du bon côté du croisement !',
    exos: ['Écris la règle : a) taux 250, valeur initiale 3 000 ; b) a = −15, b = 600 ; d) part fixe 2 500 Ar et 400 Ar/km ; e) droite de pente 3 coupant l’axe y en −4.',
      'Qu’arrive-t-il à la droite y = 500x + 2 000 si : a) a passe à 800 ? b) b passe à 3 000 ? d) a passe à −500 ? e) b passe à 0 ?',
      'Cyber : y = 750x + 1 000. a) Prix pour 2 h ? b) Avec a = 900 : prix pour 2 h ? d) Avec b = 1 500 (a = 750) : prix pour 2 h ? e) Quel changement pénalise le plus un client de 6 h ?'],
    corr: ['a) y = 250x + 3 000 ; b) y = −15x + 600 ; d) y = 400x + 2 500 ; e) y = 3x − 4.',
      'a) elle se redresse (pivote) ; b) elle monte de 1 000 ; d) elle descend vers la droite ; e) elle passe par l’origine (variation directe).',
      'a) 2 500 Ar ; b) 2 800 Ar ; d) 3 000 Ar ; e) la hausse de a : +900 Ar en 6 h, contre +500 pour la hausse de b.'],
    fig: 'u3f8'
  },
  {
    t: 'Interpoler et extrapoler', comp: 'Algèbre', theme: 'Déterminer une valeur par interpolation ou extrapolation',
    goal: 'déterminer une valeur inconnue par interpolation ou extrapolation à partir de valeurs connues',
    mat: 'Tableaux de données, graphiques, règle, cahier',
    revQ: 'Règle y = 400x + 1 500 : calcule y pour x = 3,5.',
    revRA: '2 900.',
    situation: 'La pluie a rempli le pluviomètre de l’école : 20 mm à 8 h, 60 mm à 12 h. Combien vers 10 h ? (personne n’a regardé !) Et si la pluie continue, combien à 14 h ? Deux questions, deux gestes : lire ENTRE les mesures, ou OSER au-delà.',
    def: 'Interpoler, c’est estimer la valeur d’une variable pour un x situé ENTRE deux valeurs connues, à l’aide de la relation (règle, droite ou proportion des écarts). Extrapoler, c’est estimer la valeur pour un x situé AU-DELÀ des valeurs connues, en supposant que la relation continue de s’appliquer.',
    autrement: 'interpoler = lire entre les points, sur un terrain balisé ; extrapoler = prolonger la ligne au-delà, sur un terrain supposé.',
    concept: 'Les deux gestes utilisent le même outil — la règle y = ax + b ou le prolongement de la droite — mais pas la même confiance. Pluviomètre : a = (60 − 20)/(12 − 8) = 10 mm/h, règle y = 10(x − 8) + 20. INTERPOLATION à 10 h : 40 mm — fiable, car 10 h vit entre deux mesures réelles. EXTRAPOLATION à 14 h : 80 mm — plausible, mais SI la pluie garde son rythme : qu’une accalmie survienne et la prévision s’effondre. Règle de prudence : plus on s’éloigne des données, plus l’extrapolation devient fragile. Les graphiques le montrent : trait plein entre les points connus, pointillés au-delà — l’honnêteté du dessinateur. Les sciences vivent de ces deux gestes : météo, démographie, épidémies… toujours en annonçant la marge d’erreur.',
    synthese: 'même règle, deux confiances : interpolation (entre les points, sûre), extrapolation (au-delà, suppose que la tendance continue) ; pointillés et prudence hors des données.',
    method: ['Établir la règle (a par les taux, b par un couple).', 'Substituer le x demandé — qu’il soit entre ou au-delà des données.', 'Qualifier le résultat : interpolation (fiable) ou extrapolation (sous hypothèse).'],
    exemple: 'Ventes : (2 ; 14 000) et (6 ; 26 000) → a = 3 000, y = 3 000x + 8 000. x = 4 (interpolation) : 20 000. x = 10 (extrapolation) : 38 000… si la tendance tient.',
    erreur: 'Extrapoler sans limite : avec « +2 cm par an », un enfant de 12 ans mesurerait 3 m à 80 ans ! Toute tendance a un domaine de validité — l’extrapolation lointaine quitte le monde réel.',
    saistu: 'La plus célèbre erreur d’extrapolation : en 1894, le Times de Londres prévoyait qu’en 1950 les rues seraient ensevelies sous 3 m de crottin, en prolongeant la courbe des chevaux ! L’automobile a plié la courbe — les tendances aussi meurent.',
    exos: ['Données (4 ; 30) et (10 ; 72). a) Calcule a. b) Calcule b. d) Interpole y en x = 7. e) Extrapole y en x = 15.',
      'Un bébé pèse 4,2 kg à 1 mois et 6,6 kg à 5 mois. a) Taux mensuel ? b) Interpole à 3 mois. d) Extrapole à 12 mois. e) L’extrapolation à 15 ans (180 mois) donne quoi ? Commente !',
      'Pluviomètre : 20 mm à 8 h, 60 mm à 12 h. a) Règle (x en heures) ? b) Interpole à 9 h 30. d) Extrapole à 13 h. e) Laquelle des deux réponses mérite le plus de confiance ?'],
    corr: ['a) 42/6 = 7 ; b) 30 − 28 = 2 ; d) 51 ; e) 107.',
      'a) 0,6 kg/mois ; b) 5,4 kg ; d) 10,8 kg ; e) ≈ 112 kg : absurde — la croissance n’est pas affine si longtemps !',
      'a) y = 10x − 60 ; b) 35 mm ; d) 70 mm ; e) l’interpolation : 9 h 30 est entre les mesures.'],
    fig: 'u3f9'
  },
  {
    t: 'Modéliser une fonction inverse', comp: 'Algèbre', theme: 'Fonction inverse xy = k',
    goal: 'reconnaître, représenter et utiliser une fonction de variation inverse',
    mat: 'Situations de partage, table de valeurs, papier quadrillé',
    revQ: 'Un travail de 24 jours pour 1 ouvrier : durée pour 2 ouvriers ? pour 4 ?',
    revRA: '12 jours ; 6 jours.',
    situation: 'Construire le mur de l’école demande 24 jours-ouvrier : 4 maçons y passent 6 jours, 8 maçons seulement 3 ! Quand les bras doublent, la durée fond de moitié. Ici x et y ne grimpent pas ensemble : leur PRODUIT reste fidèle au poste.',
    def: 'Une fonction de variation inverse lie deux variables dont le produit est constant : xy = k, soit y = k/x (x non nul). Quand x est multiplié par un nombre, y est divisé par ce même nombre. Son graphique est une hyperbole qui ne coupe jamais les axes.',
    autrement: 'xy = k : plus x grandit, plus y rapetisse — ce qu’on gagne d’un côté se rend exactement de l’autre.',
    concept: 'La signature de l’inverse est le PRODUIT constant, comme la directe avait son QUOTIENT constant : table des maçons — 4 × 6 = 24, 8 × 3 = 24, 12 × 2 = 24. k possède toujours un sens concret : le « travail total » (jours-ouvrier), la distance du trajet (vitesse × durée), le budget (prix × quantité). Pour modéliser : calculer k = x × y avec un couple, écrire y = k/x, et répondre à toute question par une division. Le graphique étonne : une courbe qui plonge vite puis s’aplatit sans JAMAIS toucher les axes — x = 0 est impossible (diviser par zéro !) et y = 0 exigerait un x infini. Interpoler reste permis (y en x = 5 : 24/5 = 4,8 jours), extrapoler aussi, avec la même prudence que pour l’affine.',
    synthese: 'xy = k constant ⇔ y = k/x ; multiplier x divise y d’autant ; k = produit avec sens concret ; hyperbole qui évite les axes.',
    method: ['Tester le produit xy sur deux couples : constant ?', 'Calculer k et écrire y = k/x.', 'Répondre aux questions par k ÷ valeur, et tracer point par point si demandé.'],
    exemple: 'Trajet de 180 km : à 60 km/h, 3 h ; à 90 km/h, 2 h — xy = 180. Règle : t = 180/v.',
    erreur: 'Appliquer le réflexe proportionnel à l’envers : « 4 maçons mettent 6 jours, donc 8 maçons mettent 12 jours » — non, 3 ! Quand x monte, y DESCEND : vérifier le produit, pas le quotient.',
    saistu: 'La loi de Boyle-Mariotte (1662) est une fonction inverse en bouteille : pression × volume = constante pour un gaz enfermé. C’est elle qui fait claquer les oreilles en montagne et remonter les bulles des plongeurs — xy = k gouverne jusqu’à ta respiration !',
    exos: ['Inverse ou non ? a) x = 2, 4, 8 et y = 12, 6, 3 ; b) x = 1, 2, 3 et y = 5, 10, 15 ; d) y = 36/x ; e) y = x/36.',
      'Un budget de 36 000 Ar pour des cahiers. a) k ? b) Combien de cahiers à 1 200 Ar ? d) À 1 800 Ar ? e) Écris la règle (y = nombre, x = prix).',
      'Le mur : 24 jours-ouvrier. a) Règle ? b) Durée pour 6 maçons ? d) Maçons pour finir en 2 jours ? e) Pourquoi la courbe ne touche-t-elle jamais l’axe des x ?'],
    corr: ['a) oui (produit 24) ; b) non (directe) ; d) oui (k = 36) ; e) non (directe, a = 1/36).',
      'a) 36 000 ; b) 30 ; d) 20 ; e) y = 36 000/x.',
      'a) y = 24/x ; b) 4 jours ; d) 12 maçons ; e) y = 0 exigerait une infinité de maçons — le produit doit rester 24.'],
    fig: 'u3f10'
  },
  {
    t: 'Relier fonction affine et équation de droite', comp: 'Algèbre', theme: 'Pente et ordonnée à l’origine',
    goal: 'relier taux de variation et pente, valeur initiale et ordonnée à l’origine',
    mat: 'Plan cartésien, droites tracées, tables, cahier',
    revQ: 'Dans y = 400x + 1 500 : taux de variation ? valeur initiale ?',
    revRA: '400 ; 1 500.',
    situation: 'En début d’année, le professeur parlait de « taux de variation » et de « valeur initiale ». Aujourd’hui il dit « pente » et « ordonnée à l’origine ». Panique ? Non : mêmes nombres, mêmes calculs, nouveau décor — on passe du monde des fonctions au monde de la géométrie.',
    def: 'Dans le plan cartésien, la représentation graphique de la fonction affine y = ax + b est une droite d’équation y = ax + b : le taux de variation a s’appelle la pente de la droite, et la valeur initiale b s’appelle l’ordonnée à l’origine (l’ordonnée du point d’intersection de la droite avec l’axe des y).',
    autrement: 'taux de variation et pente : même nombre a ; valeur initiale et ordonnée à l’origine : même nombre b — seuls les mots changent de costume.',
    concept: 'Le dictionnaire bilingue tient en deux lignes : fonction (règle, taux, valeur initiale) ↔ droite (équation, pente, ordonnée à l’origine). La PENTE mesure l’inclinaison en « montée par pas » : a = 2 signifie 2 carreaux vers le haut pour 1 carreau vers la droite ; a = −0,5, une demi-descente par pas. L’ORDONNÉE À L’ORIGINE localise l’entrée de la droite sur l’axe vertical : le point (0 ; b). Pourquoi deux vocabulaires ? Parce que la droite du plan existait avant les fonctions (Euclide !) et que la géométrie analytique de Descartes les a mariés : toute droite non verticale porte une équation y = ax + b, toute fonction affine dessine une droite. Ce pont entre algèbre et géométrie est l’une des plus grandes idées des mathématiques — le reste de l’unité l’exploite sans retenue.',
    synthese: 'droite non verticale ⇔ y = ax + b ; a = pente (montée par pas vers la droite), b = ordonnée à l’origine (point (0 ; b)) ; deux vocabulaires, un objet.',
    method: ['Lire b : croisement de la droite avec l’axe des y.', 'Lire a : compter la montée de y pour un pas de 1 en x.', 'Traduire : pente ↔ taux, ordonnée à l’origine ↔ valeur initiale selon le contexte.'],
    exemple: 'Droite passant par (0 ; −2) et montant de 3 pour chaque pas : pente 3, ordonnée à l’origine −2, équation y = 3x − 2.',
    erreur: 'Lire l’ordonnée à l’origine au croisement avec l’axe des X : le point (0 ; b) vit sur l’axe VERTICAL ! Le croisement horizontal, lui, s’appelle l’abscisse à l’origine — autre bête, autre séance.',
    saistu: 'Le mot « pente » des mathématiciens est celui des topographes : la RN2 vers Toamasina affiche des pentes de 8 % — a = 0,08. Les charpentiers malgaches, eux, parlent de pente de toit en « hauteur pour un mètre » : un toit de chaume réclame au moins 45°, soit a = 1 : l’eau de pluie n’attend pas !',
    exos: ['Donne pente et ordonnée à l’origine : a) y = 5x + 2 ; b) y = −x + 7 ; d) y = x/2 ; e) y = 9.',
      'Écris l’équation : a) pente 4, ordonnée à l’origine −1 ; b) pente −2, passant par (0 ; 6) ; d) droite horizontale d’ordonnée 3 ; e) pente 1/3, ordonnée à l’origine 0.',
      'Une droite passe par (0 ; 4) et (1 ; 6). a) Ordonnée à l’origine ? b) Pente ? d) Équation ? e) Traduis a et b si x = heures et y = ariary.'],
    corr: ['a) 5 et 2 ; b) −1 et 7 ; d) 1/2 et 0 ; e) 0 et 9.',
      'a) y = 4x − 1 ; b) y = −2x + 6 ; d) y = 3 ; e) y = x/3.',
      'a) 4 ; b) (6 − 4)/1 = 2 ; d) y = 2x + 4 ; e) 2 Ar… de taux horaire et 4 Ar de part fixe (unités à adapter au contexte !).'],
    fig: 'u3f11'
  },
  {
    t: 'Différencier les types d’équations de droites', comp: 'Algèbre', theme: 'Horizontale, verticale, oblique ; formes d’équations',
    goal: 'reconnaître le type d’une droite d’après son équation et passer de la forme générale à la forme canonique',
    mat: 'Plan cartésien, cartes d’équations, cahier',
    revQ: 'Trace de tête y = 3 : à quoi ressemble cette droite ?',
    revRA: 'Une horizontale à la hauteur 3.',
    situation: 'Trois équations au tableau : y = 2, x = 3, 2x + y − 4 = 0. La première dessine un horizon, la deuxième un poteau, la troisième… mystère tant qu’on ne l’a pas toilettée. Chaque droite du plan a sa carte d’identité — encore faut-il savoir la lire.',
    def: 'Une droite horizontale a une équation de la forme y = k (pente nulle) ; une droite verticale a une équation de la forme x = h (pas une fonction : pente non définie) ; une droite oblique a une équation y = ax + b avec a non nul. L’équation peut s’écrire sous forme générale Ax + By + C = 0 ou sous forme canonique y = ax + b ; on passe de la première à la seconde en isolant y.',
    autrement: 'y = k : horizon ; x = h : poteau ; y = ax + b : toboggan — et une équation en désordre se range en isolant y.',
    concept: 'Le type se lit aux lettres présentes : seulement y → horizontale (tous les points d’ordonnée k) ; seulement x → verticale (tous les points d’abscisse h) ; les deux → oblique. La VERTICALE est l’intruse : à x = 3 correspondent une infinité de y, aucune fonction ne peut la dire — sa pente serait une division par zéro ! La FORME GÉNÉRALE Ax + By + C = 0 est la tenue officielle (elle couvre même les verticales : B = 0) ; la FORME CANONIQUE y = ax + b est la tenue de travail : pente et ordonnée à l’origine en vitrine. Toilette type : 2x + y − 4 = 0 → y = −2x + 4 (pente −2, ordonnée 4). En isolant y, gare au passage des termes : chaque déménagement change le signe, et la division finale touche TOUS les termes.',
    synthese: 'y = k horizontal, x = h vertical (non-fonction), y = ax + b oblique ; générale Ax + By + C = 0 ↔ canonique en isolant y ; signes et division complète.',
    method: ['Identifier les lettres présentes pour nommer le type.', 'Pour une forme générale : isoler y pas à pas (transposer, puis diviser tout).', 'Lire a et b sur la forme canonique obtenue.'],
    exemple: '3x + 2y − 6 = 0 → 2y = −3x + 6 → y = −1,5x + 3 : oblique, pente −1,5, ordonnée à l’origine 3.',
    erreur: 'Diviser seulement UN terme : 2y = −3x + 6 ne donne pas y = −3x + 3 ! La division par 2 s’applique à TOUT le membre : y = −1,5x + 3.',
    saistu: 'Pourquoi la lettre « m » désigne-t-elle la pente dans beaucoup de pays (y = mx + b) ? Mystère complet : ni Descartes ni personne ne l’a jamais expliqué ! Chaque pays a ses lettres — la France écrit y = ax + b, le Québec y = mx + b… mais toutes les droites du monde se ressemblent.',
    exos: ['Type de droite ? a) y = −4 ; b) x = 7 ; d) y = 2x − 3 ; e) x = 0.',
      'Mets en forme canonique : a) 2x + y − 5 = 0 ; b) 3x − y + 1 = 0 ; d) 4x + 2y − 8 = 0 ; e) x − 3y + 6 = 0.',
      'a) Quelle est la pente de y = 6 ? b) Pourquoi x = 2 n’a-t-il pas de pente ? d) L’axe des x a pour équation… ? e) Et l’axe des y ?'],
    corr: ['a) horizontale ; b) verticale ; d) oblique ; e) verticale (l’axe des y !).',
      'a) y = −2x + 5 ; b) y = 3x + 1 ; d) y = −2x + 4 ; e) y = x/3 + 2.',
      'a) 0 ; b) Δx = 0 : division impossible ; d) y = 0 ; e) x = 0.'],
    fig: 'u3f12'
  },
  {
    t: 'Représenter une droite à partir de son équation', comp: 'Algèbre', theme: 'Tracer une droite ; pente et ordonnées lues partout',
    goal: 'tracer une droite à partir de son équation et déterminer pente, ordonnée et abscisse à l’origine',
    mat: 'Papier quadrillé, règle, équations variées, cahier',
    revQ: 'Dans y = 2x − 1 : pente ? ordonnée à l’origine ?',
    revRA: '2 ; −1.',
    situation: 'Mission du jour : donner un visage à y = 2x − 1. Deux points suffisent à toute droite — mais lesquels choisir pour aller vite et juste ? Le point d’entrée (0 ; b) et un pas de pente : la droite se dessine en trois gestes.',
    def: 'Pour représenter une droite d’équation y = ax + b, on place le point (0 ; b) sur l’axe des ordonnées, puis un second point obtenu en avançant de 1 en x et de a en y (ou par substitution d’une valeur de x) ; on relie et prolonge. L’abscisse à l’origine est la valeur de x où la droite coupe l’axe des x : elle se calcule en résolvant ax + b = 0.',
    autrement: 'partir de b, grimper de a par pas de 1, relier — et le croisement avec l’axe horizontal se trouve en posant y = 0.',
    concept: 'La méthode « point-pente » est la plus rapide : (0 ; −1), puis +1 en x et +2 en y → (1 ; 1), règle posée, droite tracée. Pentes fractionnaires bienvenues : a = 2/3 se lit « 3 vers la droite, 2 vers le haut » — on avance du dénominateur, on monte du numérateur. La méthode « deux substitutions » la remplace quand on préfère : x = 0 et x = 2 donnent deux points confortables. Les DEUX ORIGINES de la droite se répondent : ordonnée à l’origine (x = 0 → y = b) et abscisse à l’origine (y = 0 → x = −b/a) — pour y = 2x − 1, le croisement horizontal est x = 1/2. Contrôle final du dessinateur : un troisième point substitué doit tomber PILE sur le trait, sinon la règle a glissé !',
    synthese: 'tracer : (0 ; b) + pas de pente (dénominateur à droite, numérateur en haut) ; abscisse à l’origine : résoudre ax + b = 0 ; contrôle par un 3ᵉ point.',
    method: ['Placer (0 ; b) sur l’axe vertical.', 'Construire un 2ᵉ point par le pas de pente (ou une substitution).', 'Relier, prolonger, contrôler avec un 3ᵉ point ; abscisse à l’origine par y = 0.'],
    exemple: 'y = −x/2 + 3 : départ (0 ; 3), pas « 2 à droite, 1 en bas » → (2 ; 2). Abscisse à l’origine : −x/2 + 3 = 0 → x = 6.',
    erreur: 'Inverser le pas d’une pente fractionnaire : pour a = 2/3, monter de 3 et avancer de 2 trace une pente de 3/2 — une autre droite ! Dénominateur = avancée, numérateur = montée. Toujours.',
    saistu: 'Les géomètres-topographes tracent les routes exactement ainsi : un point de départ, une pente imposée (jamais plus de 12 % pour un camion), et de proche en proche la route s’enroule autour des collines. La RN7 est une collection de « points-pentes » longue de 936 km !',
    exos: ['Pour y = 3x − 2 : a) ordonnée à l’origine ? b) coordonnées du point en x = 1 ? d) abscisse à l’origine ? e) le point (2 ; 4) est-il sur la droite ?',
      'Décris le pas de pente : a) a = 4 ; b) a = −2 ; d) a = 1/2 ; e) a = −3/4.',
      'Trace (sur papier) y = −2x + 4 : a) point de départ ? b) 2ᵉ point par le pas ? d) abscisse à l’origine ? e) vérifie avec x = 3.'],
    corr: ['a) −2 ; b) (1 ; 1) ; d) 2/3 ; e) oui : 3 × 2 − 2 = 4 ✓.',
      'a) 1 à droite, 4 en haut ; b) 1 à droite, 2 en bas ; d) 2 à droite, 1 en haut ; e) 4 à droite, 3 en bas.',
      'a) (0 ; 4) ; b) (1 ; 2) ; d) x = 2 ; e) y = −2 : le point (3 ; −2) prolonge bien le trait.'],
    fig: 'u3f13'
  },
  {
    t: 'Déterminer l’équation d’une droite', comp: 'Algèbre', theme: 'Équation par pente et point, ou par deux points',
    goal: 'trouver l’équation d’une droite connaissant sa pente et un point, ou deux points, ou son graphique',
    mat: 'Plan cartésien, couples de points, cahier',
    revQ: 'Pente entre A(1 ; 3) et B(4 ; 9) ?',
    revRA: '(9 − 3)/(4 − 1) = 2.',
    situation: 'Le technicien de la JIRAMA a noté deux relevés : 20 kWh → 17 000 Ar, 50 kWh → 35 000 Ar. Le tarif complet (prix du kWh ? abonnement ?) n’est écrit nulle part… mais deux points suffisent à ressusciter toute la droite — donc tout le tarif.',
    def: 'Pour déterminer l’équation y = ax + b d’une droite : si l’on connaît la pente a et un point (x₀ ; y₀), on calcule b = y₀ − ax₀ ; si l’on connaît deux points, on calcule d’abord la pente a = (y₂ − y₁)/(x₂ − x₁), puis b avec l’un des points. On vérifie avec le point non utilisé.',
    autrement: 'la pente d’abord (donnée ou calculée par deux points), puis b en faisant parler un point — et l’autre point sert de juge.',
    concept: 'Trouver l’équation, c’est remplir deux inconnues (a et b) — il faut donc deux informations : pente + point, ou point + point. CAS 1 (pente et point) : a = 3 et (2 ; 11) → b = 11 − 3 × 2 = 5 → y = 3x + 5. CAS 2 (deux points) : JIRAMA — a = (35 000 − 17 000)/(50 − 20) = 600 Ar/kWh, puis b = 17 000 − 600 × 20 = 5 000 Ar d’abonnement : y = 600x + 5 000, le tarif est percé à jour ! CAS 3 (graphique) : lire deux points francs sur le quadrillage et revenir au cas 2. La VÉRIFICATION n’est pas une politesse : substituer le second point (600 × 50 + 5 000 = 35 000 ✓) attrape les erreurs de signe qui adorent ce calcul.',
    synthese: 'deux infos → a puis b = y₀ − ax₀ ; deux points → a = Δy/Δx d’abord ; graphique → lire deux points ; contrôler avec le point restant.',
    method: ['Obtenir la pente a (donnée, Δy/Δx, ou lecture graphique).', 'Calculer b = y₀ − ax₀ avec un point connu.', 'Écrire y = ax + b et vérifier avec un autre point.'],
    exemple: 'Pente −2, point (3 ; 1) : b = 1 − (−2) × 3 = 7 → y = −2x + 7. Contrôle en x = 0 : (0 ; 7), cohérent.',
    erreur: 'Calculer b en oubliant le signe de a : avec a = −2 et (3 ; 1), écrire b = 1 − 2 × 3 = −5 au lieu de b = 1 + 6 = 7 ! Poser b = y₀ − a × x₀ AVEC les parenthèses : b = 1 − (−2)(3).',
    saistu: 'Ce calcul a un nom savant : la « régression » — et les scientifiques le font avec des centaines de points qui ne s’alignent qu’à peu près. La droite qui passe « au mieux » dans le nuage s’appelle droite des moindres carrés, inventée par Gauss à 18 ans pour retrouver une planète naine perdue, Cérès !',
    exos: ['Trouve l’équation : a) pente 2, point (1 ; 5) ; b) pente −1, point (4 ; 0) ; d) pente 1/2, point (6 ; 7) ; e) pente 0, point (3 ; −2).',
      'Trouve l’équation par deux points : a) (1 ; 4) et (3 ; 10) ; b) (0 ; 2) et (5 ; 2) ; d) (2 ; 9) et (4 ; 5) ; e) (−1 ; 1) et (2 ; 7).',
      'JIRAMA : (20 ; 17 000) et (50 ; 35 000). a) Prix du kWh (pente) ? b) Abonnement (b) ? d) Équation ? e) Facture pour 35 kWh ?'],
    corr: ['a) y = 2x + 3 ; b) y = −x + 4 ; d) y = x/2 + 4 ; e) y = −2.',
      'a) a = 3, b = 1 : y = 3x + 1 ; b) y = 2 (horizontale) ; d) a = −2, b = 13 : y = −2x + 13 ; e) a = 2, b = 3 : y = 2x + 3.',
      'a) 18 000/30 = 600 Ar/kWh ; b) 5 000 Ar ; d) y = 600x + 5 000 ; e) 26 000 Ar.'],
    fig: 'u3f14'
  },
  {
    t: 'Analyser la position relative de deux droites', comp: 'Algèbre', theme: 'Parallèles, sécantes, perpendiculaires',
    goal: 'déterminer la position relative de deux droites à partir de leurs équations et trouver l’équation d’une parallèle ou d’une perpendiculaire',
    mat: 'Plan cartésien, équations de droites, équerre, cahier',
    revQ: 'y = 2x + 1 et y = 2x + 5 : que remarques-tu ?',
    revRA: 'Même pente : droites parallèles.',
    situation: 'Deux chemins dans le plan : se croiseront-ils ? Jamais, une fois, à angle droit ? Plus besoin de les tracer jusqu’au bout du cahier : leurs équations avouent tout — les pentes se comparent, et le verdict tombe.',
    def: 'Deux droites d’équations y = ax + b et y = a′x + b′ sont parallèles si a = a′ (confondues si de plus b = b′, strictement parallèles sinon) ; elles sont sécantes si a ≠ a′ ; elles sont perpendiculaires si a × a′ = −1. Une droite parallèle à une droite donnée garde sa pente ; une perpendiculaire prend la pente opposée de l’inverse.',
    autrement: 'mêmes pentes → jamais de croisement ; pentes différentes → un croisement ; produit des pentes égal à −1 → croisement à angle droit.',
    concept: 'La pente décide seule du destin des droites. PARALLÈLES : même a — même inclinaison, écart constant b′ − b ; si les b coïncident aussi, les droites sont CONFONDUES (une seule droite, deux noms). SÉCANTES : a ≠ a′ — l’écart entre elles change à chaque pas, un croisement est inévitable (son x se trouvera en égalant les deux règles : l’équation de la séance 17 !). PERPENDICULAIRES : le cas royal — a × a′ = −1, c’est-à-dire a′ = −1/a : pente 2 appelle pente −1/2, pente −3/4 appelle 4/3 (opposé ET inversé). Pour CONSTRUIRE : parallèle à y = 2x − 1 passant par (3 ; 8) → garder a = 2, recalculer b = 8 − 6 = 2 : y = 2x + 2. Perpendiculaire par le même point → a′ = −1/2, b = 8 + 1,5 = 9,5. Les verticales restent à part : parallèles entre elles, perpendiculaires aux horizontales — sans produit de pentes.',
    synthese: 'a = a′ : parallèles (b départage confondues/distinctes) ; a ≠ a′ : sécantes ; aa′ = −1 : perpendiculaires (opposé de l’inverse) ; construire = garder ou inverser la pente, recalculer b.',
    method: ['Mettre les deux équations en forme canonique.', 'Comparer les pentes : égales, différentes, produit −1 ?', 'Pour construire une parallèle/perpendiculaire : fixer la nouvelle pente, puis b par le point imposé.'],
    exemple: 'y = 3x − 2 et y = −x/3 + 4 : 3 × (−1/3) = −1 → perpendiculaires. y = 3x − 2 et 6x − 2y + 10 = 0 (→ y = 3x + 5) : parallèles strictes.',
    erreur: 'Croire que des pentes « opposées » suffisent à l’angle droit : y = 2x et y = −2x sont sécantes mais PAS perpendiculaires (produit −4) ! Il faut l’opposé DE L’INVERSE : 2 et −1/2.',
    saistu: 'Le quadrillage des rizières en terrasse de l’Itasy suit des courbes de niveau — des « parallèles » du relief. Et les architectes vérifient les angles droits par la règle du 3-4-5 des maçons… qui n’est autre que a × a′ = −1 déguisé en corde à nœuds vieille de 4 000 ans !',
    exos: ['Position relative ? a) y = 4x + 1 et y = 4x − 3 ; b) y = 2x et y = −x/2 + 5 ; d) y = 3x + 2 et y = −3x + 2 ; e) y = 5x − 1 et 10x − 2y − 2 = 0.',
      'Donne la pente d’une perpendiculaire à : a) y = 2x + 1 ; b) y = −4x ; d) y = x/3 − 5 ; e) y = −2x/5 + 1.',
      'Soit d : y = 2x − 1. a) Équation de la parallèle à d passant par (3 ; 8) ? b) Pente de la perpendiculaire ? d) Équation de la perpendiculaire passant par (4 ; 1) ? e) Vérifie le produit des pentes.'],
    corr: ['a) parallèles strictes ; b) perpendiculaires (2 × (−1/2) = −1) ; d) sécantes (3 ≠ −3, produit −9) ; e) confondues (la 2ᵉ se réduit à y = 5x − 1).',
      'a) −1/2 ; b) 1/4 ; d) −3 ; e) 5/2.',
      'a) y = 2x + 2 ; b) −1/2 ; d) b = 1 + 2 = 3 : y = −x/2 + 3 ; e) 2 × (−1/2) = −1 ✓.'],
    fig: 'u3f15'
  },
  {
    t: 'Opérer sur les polynômes', comp: 'Algèbre', theme: 'Simplification des expressions algébriques',
    goal: 'additionner, soustraire, multiplier des polynômes et diviser un polynôme par un monôme',
    mat: 'Cartes de termes, tuiles algébriques, cahier, ardoises',
    revQ: 'Développe 3(x + 2), puis réduis 2x + 5x.',
    revRA: '3x + 6 ; 7x.',
    situation: 'Le terrain de Rasoa est un rectangle de largeur x et de longueur x + 5 ; celui de sa sœur, un carré de côté x. Aire totale ? Périmètre cumulé ? Les réponses sont des expressions pleines de x — qu’il faut savoir additionner, multiplier, ranger : bienvenue chez les polynômes.',
    def: 'Un monôme est un produit d’un nombre (coefficient) et de puissances de variables (comme 3x²) ; un polynôme est une somme de monômes (binôme : deux termes, trinôme : trois). Des termes semblables ont la même partie littérale : on les regroupe en additionnant leurs coefficients. Multiplier des polynômes utilise la distributivité ; diviser un polynôme par un monôme divise chaque terme.',
    autrement: 'on ne mélange que les termes de même famille (mêmes lettres, mêmes exposants) ; pour multiplier, chaque terme salue chaque terme ; pour diviser par un monôme, chacun passe à la caisse.',
    concept: 'Quatre opérations, quatre gestes. ADDITION : ôter les parenthèses, regrouper les semblables — (3x² + 5x − 2) + (x² − 3x + 7) = 4x² + 2x + 5. SOUSTRACTION : le signe moins RETOURNE tous les signes de la parenthèse qui suit — (5x + 3) − (2x − 4) = 5x + 3 − 2x + 4 = 3x + 7. MULTIPLICATION : distributivité étage par étage — monôme × binôme : 2x(3x + 4) = 6x² + 8x ; binôme × binôme : (x + 2)(x + 5) = x² + 5x + 2x + 10 = x² + 7x + 10 — le fameux « chacun multiplie chacun », quatre produits puis réduction. DIVISION par un monôme : terme à terme — (6x² + 9x)/(3x) = 2x + 3. Garde-fou permanent : x² et x ne fusionnent JAMAIS (des m² et des m !) — 4x² + 2x reste 4x² + 2x.',
    synthese: 'réduire = regrouper les semblables ; soustraire retourne les signes ; (a + b)(c + d) = quatre produits ; diviser par un monôme = terme à terme ; x² et x inconciliables.',
    method: ['Supprimer les parenthèses (gare au − devant).', 'Multiplier terme à terme si produit ; diviser terme à terme si quotient par monôme.', 'Regrouper les termes semblables, ranger par exposants décroissants.'],
    exemple: 'Aires de Rasoa : x(x + 5) + x² = x² + 5x + x² = 2x² + 5x. Et (x + 3)(x + 3) = x² + 6x + 9.',
    erreur: 'Distribuer le signe moins à moitié : (5x + 3) − (2x − 4) ne donne pas 5x + 3 − 2x − 4 ! Le moins traverse TOUTE la parenthèse : − 2x + 4. Un signe oublié, tout le polynôme ment.',
    saistu: 'Le mot « polynôme » marie le grec polus (plusieurs) et nomos (part) — « plusieurs termes ». Al-Khwarizmi, au IXᵉ siècle à Bagdad, calculait déjà avec eux en toutes lettres, sans aucun symbole : une page entière pour écrire (x + 2)(x + 5) ! Nos x et nos exposants ont mis 800 ans à naître.',
    exos: ['Réduis : a) 4x + 7x − 2x ; b) 3x² + 5x + x² − 2x ; d) (2x + 3) + (5x − 8) ; e) (4x² − x + 1) + (x² + x − 6).',
      'Calcule : a) (7x + 2) − (3x + 5) ; b) (x² + 4x) − (x² − 4x) ; d) 3x(2x − 5) ; e) (x + 4)(x + 2).',
      'Divise et développe : a) (8x² + 4x) ÷ (4x) ; b) (9x³ − 6x²) ÷ (3x²) ; d) (x + 3)(x − 3)… surprise ? e) (2x + 1)(x + 5).'],
    corr: ['a) 9x ; b) 4x² + 3x ; d) 7x − 5 ; e) 5x² − 5.',
      'a) 4x − 3 ; b) 8x ; d) 6x² − 15x ; e) x² + 6x + 8.',
      'a) 2x + 1 ; b) 3x − 2 ; d) x² − 9 : les termes en x s’annulent (−3x + 3x) ! e) 2x² + 11x + 5.'],
    fig: 'u3f16'
  },
  {
    t: 'Résoudre une équation du premier degré', comp: 'Algèbre', theme: 'Équations et mise en équation de problèmes',
    goal: 'résoudre une équation du premier degré et traduire un problème par une équation',
    mat: 'Balance schématisée, situations-problèmes, cahier, ardoises',
    revQ: 'Quel nombre vérifie 3x = 1 500 ?',
    revRA: '500.',
    situation: 'Soa achète 3 cahiers identiques et un stylo à 500 Ar ; elle paie 2 000 Ar en tout. Prix d’un cahier ? Personne ne le crie au marché — mais l’égalité 3x + 500 = 2 000 le sait déjà. Résoudre, c’est faire avouer l’équation.',
    def: 'Une équation du premier degré à une inconnue est une égalité contenant une inconnue x à l’exposant 1. Résoudre l’équation, c’est trouver la ou les valeurs de x qui rendent l’égalité vraie : on isole x en effectuant la même opération sur les deux membres, puis on vérifie la solution en la substituant dans l’équation de départ.',
    autrement: 'une balance en équilibre : tout ce qu’on fait à gauche, on le fait à droite — jusqu’à ce que x reste seul sur son plateau.',
    concept: 'La stratégie est le DÉSHABILLAGE À L’ENVERS : x a été habillé (× 3 puis + 500) ; on retire les couches dans l’ordre inverse — d’abord le + 500 (on soustrait 500 des deux côtés : 3x = 1 500), puis le × 3 (on divise par 3 : x = 500 Ar). Avec des x des deux côtés, on les rassemble d’abord : 5x − 3 = 2x + 9 → 3x = 12 → x = 4. La MISE EN ÉQUATION suit trois gestes : choisir l’inconnue (phrase « soit x le prix d’un cahier »), traduire chaque bout de phrase en calcul, poser l’égalité. Et le rituel final, non négociable : VÉRIFIER (3 × 500 + 500 = 2 000 ✓) — dix secondes qui transforment une réponse en certitude. Cette équation-balance rejoint tout le reste de l’unité : chercher où deux droites se croisent, retrouver un b, interpoler… partout, la même clé.',
    synthese: 'isoler x en agissant pareil des deux côtés, couches dans l’ordre inverse ; x des deux côtés → rassembler d’abord ; problème : choisir x, traduire, égaler, résoudre, vérifier.',
    method: ['Rassembler les x d’un côté, les nombres de l’autre (mêmes opérations des deux côtés).', 'Défaire les additions avant les multiplications : x isolé.', 'Vérifier en substituant dans l’équation d’origine.'],
    exemple: '7x − 4 = 2x + 21 : −2x → 5x − 4 = 21 ; +4 → 5x = 25 ; ÷5 → x = 5. Vérif : 31 = 31 ✓.',
    erreur: 'Changer un seul plateau de la balance : dans 3x + 500 = 2 000, soustraire 500 à gauche seulement donne 3x = 2 000 — l’égalité est morte ! Chaque opération frappe LES DEUX membres, toujours.',
    saistu: 'Le mot « algèbre » vient du titre du livre d’Al-Khwarizmi, al-jabr (« la remise en place ») : déplacer un terme d’un membre à l’autre, c’est exactement « remettre en place » ! En Espagne médiévale, l’algebrista était… le rebouteux qui remettait les os. Résoudre une équation, c’est soigner une égalité.',
    exos: ['Résous : a) x + 7 = 15 ; b) 5x = 45 ; d) 2x − 9 = 1 ; e) x/4 + 3 = 8.',
      'Résous : a) 3x + 2 = x + 10 ; b) 7x − 5 = 4x + 13 ; d) 2(x + 3) = 16 ; e) 5 − 2x = 3x − 10.',
      'Mets en équation et résous : a) trois cahiers et un stylo de 500 Ar coûtent 2 000 Ar : prix d’un cahier ? b) le double d’un nombre augmenté de 7 vaut 31 : quel nombre ? d) un rectangle de largeur x et de longueur x + 4 a un périmètre de 28 : trouve x. e) vérifie chacune de tes solutions.'],
    corr: ['a) 8 ; b) 9 ; d) 5 ; e) x/4 = 5, x = 20.',
      'a) 2x = 8, x = 4 ; b) 3x = 18, x = 6 ; d) x + 3 = 8, x = 5 ; e) 15 = 5x, x = 3.',
      'a) 3x + 500 = 2 000, x = 500 Ar ; b) 2x + 7 = 31, x = 12 ; d) 2(x + x + 4) = 28, 4x + 8 = 28, x = 5 ; e) 2 000 ✓, 31 ✓, périmètre 2(5 + 9) = 28 ✓.'],
    fig: 'u3f17'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Algèbre',
  rag: 'résoudre diverses situations faisant intervenir des expressions algébriques, des fonctions et des équations de droites.',
  valeurs: 'confiance en soi et goût de l’excellence',
  sessions: S,
  revision: {
    table: [
      ['Variables et représentations', 'x indépendante, y dépendante ; mots ↔ table ↔ graphique ↔ règle', 'Modéliser toute situation liée'],
      ['Fonctions affines', 'y = ax + b ; directe (b = 0), partielle (b ≠ 0) ; test des accroissements', 'Reconnaître la famille des droites'],
      ['Taux et valeur initiale', 'a = Δy/Δx constant ; b = y(0) = y₀ − ax₀ ; effets de a et b', 'Écrire la règle depuis deux infos'],
      ['Interpolation, inverse', 'Entre les points : sûr ; au-delà : prudence ; xy = k pour l’inverse', 'Prédire avec discernement'],
      ['Équations de droites', 'Pente, ordonnée à l’origine ; y = k, x = h ; aa′ = −1 perpendiculaires', 'Lire et construire toute droite'],
      ['Polynômes et équations', 'Termes semblables ; (a+b)(c+d) ; balance : mêmes gestes des deux côtés', 'Calculer et résoudre les problèmes']
    ],
    questions: [
      'Table : x = 0, 2, 4 et y = 3 000, 3 800, 4 600. Affine ? Donne a, b et la règle.',
      'Un livreur facture 1 200 Ar/km plus 3 000 Ar fixes. Règle ? Prix de 7 km ? Distance pour 15 000 Ar ?',
      'xy = 48 : que vaut y pour x = 6 ? pour x = 16 ? Quel type de fonction ?',
      'Droites y = 3x − 2 et y = −x/3 + 5 : position relative ? Et l’équation de la parallèle à la première passant par (1 ; 7) ?',
      'Développe (2x + 3)(x − 4), puis résous 4x − 7 = 2x + 9.'
    ],
    answers: [
      'Oui (pas +800 pour +2) : a = 400, b = 3 000, y = 400x + 3 000.',
      'y = 1 200x + 3 000 ; 11 400 Ar ; 10 km.',
      '8 ; 3 ; fonction inverse (produit constant).',
      'Perpendiculaires (3 × (−1/3) = −1) ; parallèle : y = 3x + 4.',
      '2x² − 5x − 12 ; 2x = 16, x = 8 (vérif : 25 = 25 ✓).'
    ]
  },
  exam: {
    exos: [
      'Un cyber facture une part fixe plus un tarif horaire : 2 h coûtent 4 500 Ar, 5 h coûtent 9 000 Ar. a) Calcule le taux de variation. b) Calcule la part fixe. d) Écris la règle. e) Combien coûtent 8 h ?',
      'Table : x = 1, 3, 5, 7 et y = 2, 8, 18, 32. a) Les accroissements de y sont-ils constants ? b) La fonction est-elle affine ? d) Table x = 2, 6, 12 et y = 18, 6, 3 : calcule les produits xy. e) Quel modèle convient, et quelle est la règle ?',
      'Soit la droite d’équation 3x + 2y − 12 = 0. a) Mets-la en forme canonique. b) Donne sa pente et son ordonnée à l’origine. d) Calcule son abscisse à l’origine. e) Donne l’équation de la perpendiculaire passant par (0 ; 1).',
      'a) Réduis (5x² − 2x + 1) + (x² + 7x − 4). b) Calcule (3x − 2) − (x − 8). d) Développe (x + 6)(x − 2). e) Divise (12x³ + 8x²) par 4x².',
      'Naina achète 5 kg de riz et un savon à 1 800 Ar ; elle paie 10 050 Ar. a) Choisis l’inconnue et mets en équation. b) Résous. d) Vérifie. e) Avec le même prix au kilo, combien de kg pour 14 400 Ar, savon compris ?'
    ],
    corr: [
      'a) a = 4 500/3 = 1 500 Ar/h ; b) b = 4 500 − 3 000 = 1 500 Ar ; d) y = 1 500x + 1 500 ; e) 13 500 Ar. Un point par item.',
      'a) non : +6, +10, +14 ; b) non ; d) 36, 36, 36 ; e) fonction inverse, y = 36/x. Un point par item.',
      'a) y = −1,5x + 6 ; b) pente −1,5, ordonnée 6 ; d) −1,5x + 6 = 0 → x = 4 ; e) pente 2/3 : y = 2x/3 + 1. Un point par item.',
      'a) 6x² + 5x − 3 ; b) 2x + 6 ; d) x² + 4x − 12 ; e) 3x + 2. Un point par item.',
      'a) x = prix du kg : 5x + 1 800 = 10 050 ; b) 5x = 8 250, x = 1 650 Ar ; d) 5 × 1 650 + 1 800 = 10 050 ✓ ; e) 5 kg → (14 400 − 1 800)/1 650 ≈ 7,6 : 7 kg entiers (ou 12 600/1 650 : réponse exacte 7,64 kg). Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
