// UNITÉ 1 — NOMBRE (PE T7) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, bar, txt, nline, dot, tableEl, box, arrow, seg, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — 7,35 = 7 + 0,35
figs.u1f1 = (() => { const { s, y } = head('Décomposer un nombre décimal', ['7,35 = 7 + 0,35 : la partie entière et la partie décimale se séparent.']);
  let b = box(70, y + 20, 250, 90, '7,35', '#FDE7EF', PINK2, 34) + txt(355, y + 75, '=', 36, '#222', 'bold')
    + box(400, y + 20, 180, 90, '7', undefined, GREEN, 34) + txt(610, y + 75, '+', 36, '#222', 'bold')
    + box(650, y + 20, 220, 90, '0,35', undefined, GREEN, 34)
    + txt(490, y + 150, 'partie entière', 23, GREEN, 'normal', 'middle') + txt(760, y + 150, 'partie décimale', 23, GREEN, 'normal', 'middle');
  return svg(1000, y + 180, s + b); })();
// S2 — 8 − 0,25 = 7,75
figs.u1f2 = (() => { const { s, y } = head('Composer un nombre décimal', ['8 − 0,25 = 7,75 car 7,75 + 0,25 = 8.']);
  let b = box(70, y + 20, 180, 90, '8', undefined, GREEN, 34) + txt(285, y + 75, '−', 36, '#222', 'bold')
    + box(325, y + 20, 220, 90, '0,25', undefined, GREEN, 34) + txt(580, y + 75, '=', 36, '#222', 'bold')
    + box(620, y + 20, 250, 90, '7,75', '#FDE7EF', PINK2, 34)
    + nline(120, y + 190, 760, 4, ['7,70', null, '7,80', null, '7,90']) + dot(120 + 190, y + 190) + txt(120 + 190, y + 160, '7,75', 24, PINK2, 'bold', 'middle');
  return svg(1000, y + 270, s + b); })();
// S3 — 11/4 = 2 + 3/4
figs.u1f3 = (() => { const { s, y } = head('Décomposer une fraction', ['11/4 = 2 + 3/4 : onze quarts remplissent deux entiers et il reste trois quarts.']);
  let b = bar(60, y + 20, 260, 65, 4, 4) + bar(350, y + 20, 260, 65, 4, 4) + bar(640, y + 20, 260, 65, 4, 3);
  b += txt(190, y + 125, '1 entier', 24, '#222', 'normal', 'middle') + txt(480, y + 125, '1 entier', 24, '#222', 'normal', 'middle') + txt(770, y + 125, '3/4', 26, PINK2, 'bold', 'middle');
  return svg(1000, y + 160, s + b); })();
// S4 — 2/3 = 4/6 = 8/12
figs.u1f4 = (() => { const { s, y } = head('Reconnaître des fractions équivalentes', ['2/3 = 4/6 = 8/12 : les trois bandes colorées ont la même longueur.']);
  let b = ''; const defs = [[3, 2, '2/3'], [6, 4, '4/6'], [12, 8, '8/12']];
  defs.forEach((d, i) => { b += bar(80, y + 15 + i * 85, 720, 60, d[0], d[1]) + txt(840, y + 58 + i * 85, d[2], 30, PINK2, 'bold'); });
  return svg(1000, y + 290, s + b); })();
// S5 — 12/18 -> 2/3
figs.u1f5 = (() => { const { s, y } = head('Simplifier une fraction', ['12/18 = 2/3 : on divise le numérateur et le dénominateur par 6.']);
  let b = box(110, y + 30, 220, 100, '12/18', undefined, BLUE, 34) + arrow(350, y + 95, 590, y + 95) + txt(470, y + 55, '÷ 6 en haut et en bas', 21, GREEN, 'bold', 'middle')
    + box(610, y + 30, 200, 100, '2/3', '#FDE7EF', PINK2, 34);
  return svg(1000, y + 170, s + b); })();
// S6 — 24/36 -> 12/18 -> 2/3 irréductible
figs.u1f6 = (() => { const { s, y } = head('Trouver la forme irréductible', ['24/36 → 12/18 → 2/3 : on simplifie jusqu’à ce que ce ne soit plus possible.']);
  let b = box(60, y + 30, 190, 95, '24/36', undefined, BLUE, 32) + arrow(260, y + 78, 350, y + 78) + txt(305, y + 50, '÷ 2', 23, GREEN, 'bold', 'middle')
    + box(360, y + 30, 190, 95, '12/18', undefined, BLUE, 32) + arrow(560, y + 78, 650, y + 78) + txt(605, y + 50, '÷ 6', 23, GREEN, 'bold', 'middle')
    + box(660, y + 30, 190, 95, '2/3', '#FDE7EF', PINK2, 32)
    + txt(755, y + 160, 'irréductible', 24, PINK2, 'bold', 'middle');
  return svg(1000, y + 190, s + b); })();
// S7 — 1/2 + 1/3
figs.u1f7 = (() => { const { s, y } = head('Opérer avec des fractions équivalentes', ['1/2 + 1/3 = 3/6 + 2/6 = 5/6.']);
  let b = bar(80, y + 15, 360, 60, 6, 3) + txt(470, y + 58, '3/6', 28, PINK2, 'bold')
    + bar(80, y + 100, 360, 60, 6, 2, '#C8E6C9') + txt(470, y + 143, '2/6', 28, GREEN, 'bold')
    + bar(560, y + 58, 360, 60, 6, 5, '#FFE0B2') + txt(560 + 370, y + 100, '', 10);
  b += txt(740, y + 155, '5/6', 30, OCRE, 'bold', 'middle') + txt(520, y + 95, '=', 34, '#222', 'bold');
  return svg(1000, y + 200, s + b); })();
// S8 — thermomètre
figs.u1f8 = (() => { const { s, y } = head('Découvrir les nombres relatifs', ['Le matin, il fait −3 °C à Antsirabe ; l’après-midi, +5 °C.']);
  const x0 = 320, yTop = y + 20, h = 330; // thermomètre vertical de -5 à +5
  let b = `<rect x="${x0 - 14}" y="${yTop}" width="28" height="${h}" rx="14" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
  for (let v = 5; v >= -5; v--) {
    const yy = yTop + (5 - v) * (h / 10);
    b += seg(x0 + 14, yy, x0 + 34, yy, BLUE, 2.5) + txt(x0 + 44, yy + 8, (v > 0 ? '+' : '') + v, 21);
  }
  const yM = yTop + (5 - (-3)) * (h / 10), yA = yTop + (5 - 5) * (h / 10);
  b += `<rect x="${x0 - 8}" y="${yM}" width="16" height="${yTop + h - yM}" fill="${PINK2}"/>`;
  b += txt(x0 - 280, yM + 8, 'matin : −3 °C', 25, PINK2, 'bold') + arrow(x0 - 90, yM - 20, x0 - 22, yM - 2, PINK2)
    + txt(x0 + 170, yA + 30, 'après-midi : +5 °C', 25, GREEN, 'bold') + arrow(x0 + 160, yA + 22, x0 + 40, yA + 2, GREEN);
  return svg(1000, y + 390, s + b); })();
// S9 — droite graduée entiers
figs.u1f9 = (() => { const { s, y } = head('Placer des entiers relatifs sur la droite graduée', ['A(−4), B(−1), C(+2) : les négatifs sont à gauche de 0, les positifs à droite.']);
  const lab = ['−5', '−4', '−3', '−2', '−1', '0', '+1', '+2', '+3', '+4', '+5'];
  let b = nline(80, y + 60, 840, 10, lab);
  const pos = v => 80 + (v + 5) * 84;
  b += dot(pos(-4), y + 60) + txt(pos(-4), y + 28, 'A', 26, PINK2, 'bold', 'middle');
  b += dot(pos(-1), y + 60, 9, GREEN) + txt(pos(-1), y + 28, 'B', 26, GREEN, 'bold', 'middle');
  b += dot(pos(2), y + 60, 9, OCRE) + txt(pos(2), y + 28, 'C', 26, OCRE, 'bold', 'middle');
  return svg(1000, y + 180, s + b); })();
// S10 — droite graduée décimaux
figs.u1f10 = (() => { const { s, y } = head('Placer des décimaux relatifs sur la droite graduée', ['E(−1,5) et F(+0,5) : chaque unité est partagée en deux.']);
  const lab = ['−2', '−1,5', '−1', '−0,5', '0', '+0,5', '+1', '+1,5', '+2'];
  let b = nline(80, y + 60, 840, 8, lab);
  const pos = v => 80 + (v + 2) * 210;
  b += dot(pos(-1.5), y + 60) + txt(pos(-1.5), y + 28, 'E', 26, PINK2, 'bold', 'middle');
  b += dot(pos(0.5), y + 60, 9, GREEN) + txt(pos(0.5), y + 28, 'F', 26, GREEN, 'bold', 'middle');
  return svg(1000, y + 180, s + b); })();
// S11 — comparer
figs.u1f11 = (() => { const { s, y } = head('Comparer et ordonner des nombres relatifs', ['−3 &lt; −1,5 &lt; 0 &lt; +2 : plus on va vers la droite, plus le nombre est grand.']);
  const lab = ['−4', '−3', '−2', '−1', '0', '+1', '+2', '+3'];
  let b = nline(80, y + 60, 840, 7, lab);
  const pos = v => 80 + (v + 4) * 120;
  [[-3, '−3'], [-1.5, '−1,5'], [0, '0'], [2, '+2']].forEach(([v, t], i) => { b += dot(pos(v), y + 60, 9, i % 2 ? GREEN : PINK2) + txt(pos(v), y + 28, t, 23, i % 2 ? GREEN : PINK2, 'bold', 'middle'); });
  b += arrow(700, y + 130, 900, y + 130, OCRE) + txt(800, y + 165, 'de plus en plus grand', 22, OCRE, 'normal', 'middle');
  return svg(1000, y + 200, s + b); })();
// S12 — 4 cartes
figs.u1f12 = (() => { const { s, y } = head('Échelle, pourcentage, taux et rendement', ['Quatre outils pour comparer des quantités dans la vie courante.']);
  let b = box(60, y + 15, 420, 110, '', '#E8F5E9', GREEN) + txt(270, y + 55, 'Échelle', 26, GREEN, 'bold', 'middle') + txt(270, y + 95, '1 cm sur la carte = 1 km réel', 21, '#333', 'normal', 'middle')
    + box(520, y + 15, 420, 110, '', '#FDE7EF', PINK2) + txt(730, y + 55, 'Pourcentage', 26, PINK2, 'bold', 'middle') + txt(730, y + 95, '35 % des élèves = 35 sur 100', 21, '#333', 'normal', 'middle')
    + box(60, y + 150, 420, 110, '', '#E3F2FD', '#1565C0') + txt(270, y + 190, 'Taux', 26, '#1565C0', 'bold', 'middle') + txt(270, y + 230, '3 000 Ar d’intérêt pour 100 000 Ar', 21, '#333', 'normal', 'middle')
    + box(520, y + 150, 420, 110, '', '#FFF3E0', OCRE) + txt(730, y + 190, 'Rendement', 26, OCRE, 'bold', 'middle') + txt(730, y + 230, '4 t de riz par hectare', 21, '#333', 'normal', 'middle');
  return svg(1000, y + 300, s + b); })();
// S13 — échelle plan
figs.u1f13 = (() => { const { s, y } = head('Calculer une échelle', ['Échelle 1/500 : 4 cm sur le plan représentent 2 000 cm = 20 m dans la réalité.']);
  let b = `<rect x="80" y="${y + 20}" width="300" height="140" fill="white" stroke="${BLUE}" stroke-width="3"/>`
    + seg(110, y + 130, 350, y + 130, PINK2, 5) + txt(230, y + 115, '4 cm', 24, PINK2, 'bold', 'middle') + txt(230, y + 50, 'plan 1/500', 23, BLUE, 'normal', 'middle')
    + arrow(410, y + 90, 560, y + 90) + txt(485, y + 60, '× 500', 24, GREEN, 'bold', 'middle')
    + `<rect x="580" y="${y + 20}" width="340" height="140" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`
    + txt(750, y + 80, 'réalité', 23, GREEN, 'normal', 'middle') + txt(750, y + 125, '2 000 cm = 20 m', 26, GREEN, 'bold', 'middle');
  return svg(1000, y + 200, s + b); })();

const S = [
  {
    t: 'Décomposer un nombre décimal', comp: 'Nombre', theme: 'Décomposition d’un nombre décimal',
    goal: 'décomposer un nombre décimal en somme de sa partie entière et de sa partie décimale',
    mat: 'Tableau, cahier, ardoises, jetons, pièces de monnaie',
    revQ: 'Dans 7,35, quel est le chiffre des dixièmes et que vaut-il ?',
    revRA: 'C’est 3 ; il vaut trois dixièmes, c’est-à-dire 0,3.',
    situation: 'Au marché, Voahirana paie 7 350 Ar : 7 billets de 1 000 Ar et 350 Ar en pièces. De la même façon, le nombre 7,35 se sépare en 7 et 0,35.',
    def: 'Décomposer un nombre décimal, c’est l’écrire sous la forme d’une somme d’un nombre entier et d’un nombre décimal plus petit que 1.',
    autrement: 'on sépare « les entiers » et « ce qui dépasse » : 7,35, c’est 7 entiers et encore 0,35.',
    concept: 'Tout nombre décimal est la somme de sa partie entière et de sa partie décimale. La partie entière s’écrit avant la virgule ; la partie décimale, toujours plus petite que 1, s’écrit après la virgule. Ainsi 7,35 = 7 + 0,35. On peut détailler davantage : 0,35 = 3/10 + 5/100.',
    synthese: 'tout nombre décimal s’écrit comme la somme de sa partie entière et de sa partie décimale, qui est plus petite que 1.',
    method: ['Repérer la virgule et lire la partie entière.', 'Écrire la partie décimale sous la forme 0,…', 'Écrire la somme : nombre = partie entière + partie décimale, puis vérifier en additionnant.'],
    exemple: '7,35 = 7 + 0,35 = 7 + 3/10 + 5/100. Vérification : 7 + 0,35 = 7,35.',
    erreur: 'Écrire 7,35 = 7 + 35. La partie décimale est 0,35, un nombre plus petit que 1, et non l’entier 35.',
    saistu: 'Séparer billets et pièces pour payer, c’est déjà décomposer un nombre : les billets forment la partie « entière » en milliers d’ariary, et les pièces complètent le reste !',
    exos: ['Décompose en somme de la partie entière et de la partie décimale : a) 4,8 ; b) 12,06 ; d) 9,75 ; e) 20,405.',
      'Détaille la partie décimale en dixièmes, centièmes et millièmes : a) 3,4 ; b) 5,27 ; d) 0,86 ; e) 2,159.',
      'Recompose le nombre décimal : a) 6 + 0,3 ; b) 15 + 0,08 ; d) 2 + 0,45 ; e) 30 + 0,007.'],
    corr: ['a) 4,8 = 4 + 0,8 ; b) 12,06 = 12 + 0,06 ; d) 9,75 = 9 + 0,75 ; e) 20,405 = 20 + 0,405.',
      'a) 3,4 = 3 + 4/10 ; b) 5,27 = 5 + 2/10 + 7/100 ; d) 0,86 = 8/10 + 6/100 ; e) 2,159 = 2 + 1/10 + 5/100 + 9/1000.',
      'a) 6,3 ; b) 15,08 ; d) 2,45 ; e) 30,007.'],
    fig: 'u1f1'
  },
  {
    t: 'Composer un nombre décimal', comp: 'Nombre', theme: 'Composition d’un nombre décimal sous la forme d’une somme ou d’une différence',
    goal: 'composer un nombre décimal à partir d’une somme ou d’une différence d’un entier et d’un décimal plus petit que 1',
    mat: 'Tableau, cahier, ardoises, pièces de monnaie, droite graduée',
    revQ: 'Décompose 8,45 en partie entière et partie décimale.',
    revRA: '8,45 = 8 + 0,45.',
    situation: 'Noro doit payer 8 000 Ar mais la vendeuse lui fait une remise de 250 Ar : elle paie 7 750 Ar. De la même façon, 8 − 0,25 = 7,75.',
    def: 'Composer un nombre décimal, c’est retrouver son écriture à virgule à partir d’une somme ou d’une différence d’un entier et d’un nombre décimal plus petit que 1.',
    autrement: 'c’est le chemin inverse de la décomposition : on recolle les morceaux. 8 − 0,25, c’est un peu moins que 8, donc 7,75.',
    concept: 'Pour composer une somme, on place la partie décimale derrière la virgule : 5 + 0,4 = 5,4. Pour composer une différence comme 8 − 0,25, on enlève 0,25 à 8 : le résultat 7,75 est juste en dessous de 8, et on vérifie que 7,75 + 0,25 = 8.',
    synthese: 'une somme entier + décimal plus petit que 1 se compose en plaçant la partie décimale après la virgule, et une différence se compose en reculant sous l’entier, avec une vérification par addition.',
    method: ['Repérer s’il s’agit d’une somme (+) ou d’une différence (−).', 'Pour une somme, écrire l’entier puis la partie décimale derrière la virgule.', 'Pour une différence, reculer de la quantité enlevée, puis vérifier par une addition.'],
    exemple: '8 − 0,25 = 7,75 car 7,75 + 0,25 = 8 ; et 5 + 0,4 = 5,4.',
    erreur: 'Écrire 8 − 0,25 = 8,25. Le signe « − » impose d’enlever : le résultat doit être plus petit que 8.',
    saistu: 'Pour rendre la monnaie, beaucoup de commerçants comptent « en complément » : ils cherchent ce qui manque pour arriver au billet donné. C’est exactement la composition par différence !',
    exos: ['Compose le nombre décimal : a) 3 + 0,6 ; b) 14 + 0,09 ; d) 7 + 0,25 ; e) 50 + 0,008.',
      'Calcule les différences : a) 5 − 0,5 ; b) 10 − 0,25 ; d) 4 − 0,1 ; e) 20 − 0,75.',
      'Vérifie par une addition et corrige si besoin : a) 6 − 0,4 = 6,4 ? b) 9 − 0,3 = 8,7 ? d) 12 − 0,05 = 11,95 ? e) 3 − 0,15 = 2,95 ?'],
    corr: ['a) 3,6 ; b) 14,09 ; d) 7,25 ; e) 50,008.',
      'a) 4,5 ; b) 9,75 ; d) 3,9 ; e) 19,25.',
      'a) Faux : 6 − 0,4 = 5,6 car 5,6 + 0,4 = 6. b) Vrai : 8,7 + 0,3 = 9. d) Vrai : 11,95 + 0,05 = 12. e) Faux : 3 − 0,15 = 2,85 car 2,85 + 0,15 = 3.'],
    fig: 'u1f2'
  },
  {
    t: 'Décomposer une fraction', comp: 'Nombre', theme: 'Décomposition d’une fraction en somme d’un entier et d’une fraction plus petite que 1',
    goal: 'écrire une fraction sous la forme de la somme d’un entier et d’une fraction plus petite que 1',
    mat: 'Tableau, cahier, ardoises, bandes fractionnées, cartes fractionnaires',
    revQ: 'Compose : 3 + 0,6.',
    revRA: '3 + 0,6 = 3,6.',
    situation: 'Hery partage des galettes : avec 11 quarts de galette, il reconstitue 2 galettes entières (8 quarts) et il reste 3 quarts.',
    def: 'Toute fraction dont le numérateur est supérieur au dénominateur peut s’écrire sous la forme m + f, où m est un nombre entier et f une fraction plus petite que 1.',
    autrement: '11 quarts, c’est 2 touts complets et encore 3 quarts : 11/4 = 2 + 3/4.',
    concept: 'Pour décomposer une fraction, on effectue la division euclidienne du numérateur par le dénominateur : le quotient donne la partie entière et le reste devient le numérateur de la fraction restante. Ainsi 11 ÷ 4 = 2 reste 3, donc 11/4 = 2 + 3/4.',
    synthese: 'la division euclidienne du numérateur par le dénominateur donne l’entier (le quotient) et la fraction restante (le reste sur le dénominateur).',
    method: ['Diviser le numérateur par le dénominateur (division euclidienne).', 'Écrire le quotient comme partie entière.', 'Écrire le reste sur le dénominateur : c’est la fraction plus petite que 1, puis vérifier.'],
    exemple: '11/4 = 2 + 3/4 car 11 ÷ 4 = 2 reste 3. Vérification : 2 × 4 + 3 = 11.',
    erreur: 'Garder un reste plus grand que le dénominateur, par exemple 11/4 = 1 + 7/4. Il faut continuer : la fraction restante doit être plus petite que 1.',
    saistu: 'Les anciens Égyptiens n’écrivaient que des fractions de numérateur 1 ! Pour eux, 3/4 s’écrivait 1/2 + 1/4. Décomposer les fractions est une idée vieille de 4 000 ans.',
    exos: ['Décompose en entier plus fraction : a) 8/3 ; b) 11/4 ; d) 14/5 ; e) 19/6.',
      'Recompose en une seule fraction : a) 1 + 2/3 ; b) 2 + 1/5 ; d) 3 + 3/4 ; e) 4 + 5/6.',
      'Entre quels entiers consécutifs se trouve chaque fraction ? a) 7/2 ; b) 13/4 ; d) 17/5 ; e) 23/6.'],
    corr: ['a) 8/3 = 2 + 2/3 ; b) 11/4 = 2 + 3/4 ; d) 14/5 = 2 + 4/5 ; e) 19/6 = 3 + 1/6.',
      'a) 5/3 ; b) 11/5 ; d) 15/4 ; e) 29/6.',
      'a) 3 < 7/2 < 4 ; b) 3 < 13/4 < 4 ; d) 3 < 17/5 < 4 ; e) 3 < 23/6 < 4.'],
    fig: 'u1f3'
  },
  {
    t: 'Reconnaître des fractions équivalentes', comp: 'Nombre', theme: 'Fractions équivalentes',
    goal: 'reconnaître et produire des fractions équivalentes',
    mat: 'Tableau, cahier, ardoises, bandes fractionnées, cartes fractionnaires',
    revQ: 'Décompose 9/4 en entier plus fraction.',
    revRA: '9/4 = 2 + 1/4 car 9 ÷ 4 = 2 reste 1.',
    situation: 'Deux élèves partagent chacun une même tablette de chocolat : l’un mange 2 morceaux sur 3, l’autre 4 morceaux sur 6. Ont-ils mangé la même quantité ?',
    def: 'Deux fractions sont équivalentes lorsqu’elles représentent la même part d’un même tout. On obtient une fraction équivalente en multipliant ou en divisant le numérateur et le dénominateur par un même nombre non nul.',
    autrement: 'couper chaque part en deux ne change pas la quantité mangée : 2/3 et 4/6, c’est pareil.',
    concept: 'Sur les bandes fractionnées, 2/3, 4/6 et 8/12 colorient exactement la même longueur : ces fractions sont équivalentes. En calcul, on passe de 2/3 à 4/6 en multipliant le numérateur et le dénominateur par 2, et de 4/6 à 8/12 en les multipliant encore par 2.',
    synthese: 'deux fractions sont équivalentes si l’on passe de l’une à l’autre en multipliant ou en divisant le haut et le bas par un même nombre non nul.',
    method: ['Choisir un nombre non nul.', 'Multiplier (ou diviser) le numérateur ET le dénominateur par ce nombre.', 'Vérifier avec une représentation : les deux fractions couvrent la même part du tout.'],
    exemple: '2/3 = 4/6 = 8/12 : on multiplie haut et bas par 2, puis encore par 2.',
    erreur: 'Multiplier seulement le numérateur : 2/3 n’est pas égal à 4/3. La transformation doit porter sur le haut ET le bas.',
    saistu: 'Les fractions équivalentes servent tous les jours en cuisine : une recette pour 6 personnes se ramène à 3 personnes en divisant toutes les quantités par 2 — exactement comme on simplifie 4/6 en 2/3 !',
    exos: ['Complète : a) 1/3 = …/6 ; b) 2/5 = 6/… ; d) 3/4 = …/12 ; e) 5/6 = 10/… .',
      'Les fractions sont-elles équivalentes ? a) 2/3 et 4/6 ; b) 3/5 et 9/15 ; d) 4/7 et 8/15 ; e) 6/8 et 3/4.',
      'Produis deux fractions équivalentes à chacune : a) 1/2 ; b) 2/3 ; d) 3/5 ; e) 5/4.'],
    corr: ['a) 1/3 = 2/6 ; b) 2/5 = 6/15 ; d) 3/4 = 9/12 ; e) 5/6 = 10/12.',
      'a) Oui (× 2) ; b) oui (× 3) ; d) non, car 4 × 15 = 60 et 7 × 8 = 56 ; e) oui (÷ 2).',
      'Exemples : a) 2/4 et 4/8 ; b) 4/6 et 6/9 ; d) 6/10 et 9/15 ; e) 10/8 et 15/12.'],
    fig: 'u1f4'
  },
  {
    t: 'Simplifier une fraction', comp: 'Nombre', theme: 'Calcul des fractions équivalentes par division',
    goal: 'simplifier une fraction en divisant le numérateur et le dénominateur par un diviseur commun',
    mat: 'Tableau, cahier, ardoises, cartes fractionnaires, table des diviseurs',
    revQ: 'Donne une fraction équivalente à 3/4 et explique comment tu l’obtiens.',
    revRA: '6/8 (ou 9/12…) : on multiplie le numérateur et le dénominateur par un même nombre.',
    situation: 'Sur 18 élèves de l’équipe, 12 sont présents à l’entraînement. L’entraîneur dit : « les deux tiers sont là ». Comment passe-t-on de 12/18 à 2/3 ?',
    def: 'Simplifier une fraction, c’est la remplacer par une fraction équivalente dont le numérateur et le dénominateur sont plus petits, en les divisant par un même diviseur commun.',
    autrement: 'on « réduit » la fraction sans changer sa valeur : 12/18 et 2/3 représentent la même part.',
    concept: 'Pour simplifier, on cherche un diviseur commun au numérateur et au dénominateur. 12 et 18 sont tous deux divisibles par 6 : 12 ÷ 6 = 2 et 18 ÷ 6 = 3, donc 12/18 = 2/3. On peut aussi simplifier en plusieurs étapes : d’abord par 2, puis par 3.',
    synthese: 'simplifier une fraction, c’est diviser son numérateur et son dénominateur par un même diviseur commun, en une ou plusieurs étapes.',
    method: ['Chercher un diviseur commun au numérateur et au dénominateur (2, 3, 5…).', 'Diviser le haut et le bas par ce diviseur.', 'Recommencer si c’est encore possible.'],
    exemple: '12/18 = 2/3 : on divise 12 et 18 par leur diviseur commun 6.',
    erreur: 'Soustraire au lieu de diviser : 12/18 n’est pas égal à 6/12 (obtenu en enlevant 6 en haut et en bas). On divise, on ne soustrait jamais.',
    saistu: 'Les notes d’un contrôle se simplifient comme des fractions : 15/20, c’est 3/4 de réussite, soit 75 %. Simplifier aide à comparer des notes sur des barèmes différents !',
    exos: ['Simplifie par le diviseur indiqué : a) 6/8 par 2 ; b) 15/20 par 5 ; d) 18/24 par 6 ; e) 21/28 par 7.',
      'Simplifie chaque fraction : a) 4/10 ; b) 9/12 ; d) 10/25 ; e) 16/20.',
      'Deux équipes vendent des billets : 12/18 pour l’équipe A et 10/15 pour l’équipe B. Simplifie les deux fractions et compare.'],
    corr: ['a) 3/4 ; b) 3/4 ; d) 3/4 ; e) 3/4 : quatre écritures différentes de la même valeur !',
      'a) 2/5 ; b) 3/4 ; d) 2/5 ; e) 4/5.',
      '12/18 = 2/3 et 10/15 = 2/3 : les deux équipes ont vendu la même part de leurs billets.'],
    fig: 'u1f5'
  },
  {
    t: 'Trouver la forme irréductible', comp: 'Nombre', theme: 'Forme irréductible d’une fraction',
    goal: 'déterminer la forme irréductible d’une fraction',
    mat: 'Tableau, cahier, ardoises, table des diviseurs, cartes fractionnaires',
    revQ: 'Simplifie 10/25.',
    revRA: '10/25 = 2/5 : on divise le haut et le bas par 5.',
    situation: 'Mialy simplifie 24/36 par 2 et obtient 12/18. Son voisin dit : « tu peux encore simplifier ! ». Jusqu’où peut-on aller ?',
    def: 'Une fraction est irréductible lorsque son numérateur et son dénominateur n’ont aucun diviseur commun autre que 1.',
    autrement: 'c’est la fraction « la plus simple possible » : on ne peut plus la réduire.',
    concept: 'Pour trouver la forme irréductible, on simplifie autant de fois que nécessaire : 24/36 = 12/18 (÷ 2) = 2/3 (÷ 6). On s’arrête quand 1 est le seul diviseur commun du haut et du bas : 2 et 3 n’ont pas de diviseur commun, donc 2/3 est irréductible. Diviser directement par le plus grand diviseur commun (ici 12) va plus vite.',
    synthese: 'la forme irréductible s’obtient en simplifiant jusqu’à ce que le numérateur et le dénominateur n’aient plus de diviseur commun autre que 1.',
    method: ['Simplifier la fraction par un diviseur commun.', 'Recommencer tant qu’un diviseur commun existe.', 'Contrôler : le seul diviseur commun du haut et du bas doit être 1.'],
    exemple: '24/36 = 12/18 = 2/3 ; la forme irréductible de 24/36 est 2/3.',
    erreur: 'S’arrêter trop tôt : 12/18 n’est pas irréductible, car 12 et 18 sont encore divisibles par 6.',
    saistu: 'Le plus grand diviseur commun (PGCD) vu en T6 donne la simplification la plus rapide : PGCD(24, 36) = 12, et 24/36 devient 2/3 en une seule division !',
    exos: ['La fraction est-elle irréductible ? a) 3/7 ; b) 6/9 ; d) 5/12 ; e) 8/14.',
      'Donne la forme irréductible : a) 6/9 ; b) 8/14 ; d) 20/30 ; e) 27/36.',
      'Simplifie en une seule étape avec le plus grand diviseur commun : a) 16/24 ; b) 25/40 ; d) 18/30 ; e) 36/48.'],
    corr: ['a) Oui ; b) non (÷ 3) ; d) oui ; e) non (÷ 2).',
      'a) 2/3 ; b) 4/7 ; d) 2/3 ; e) 3/4.',
      'a) PGCD = 8 : 2/3 ; b) PGCD = 5 : 5/8 ; d) PGCD = 6 : 3/5 ; e) PGCD = 12 : 3/4.'],
    fig: 'u1f6'
  },
  {
    t: 'Opérer avec des fractions équivalentes', comp: 'Nombre', theme: 'Calcul des fractions équivalentes',
    goal: 'additionner ou soustraire deux fractions en utilisant des fractions équivalentes de même dénominateur',
    mat: 'Tableau, cahier, ardoises, bandes fractionnées, cartes fractionnaires',
    revQ: 'Donne la forme irréductible de 20/30.',
    revRA: '20/30 = 2/3 : on divise le haut et le bas par 10.',
    situation: 'Fara mange 1/2 d’une galette le matin et 1/3 l’après-midi. Quelle part de la galette a-t-elle mangée en tout ? Impossible d’additionner tant que les parts ne sont pas de la même taille !',
    def: 'Pour additionner ou soustraire deux fractions de dénominateurs différents, on les remplace d’abord par des fractions équivalentes ayant le même dénominateur.',
    autrement: 'on coupe toutes les parts à la même taille avant de les compter ensemble.',
    concept: 'Les demis et les tiers ne se comptent pas ensemble directement. On les convertit en sixièmes : 1/2 = 3/6 et 1/3 = 2/6. Alors 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Le dénominateur commun le plus simple est un multiple commun des deux dénominateurs, par exemple leur PPCM.',
    synthese: 'pour additionner ou soustraire des fractions, on les met au même dénominateur grâce aux fractions équivalentes, puis on additionne ou soustrait les numérateurs.',
    method: ['Chercher un dénominateur commun (un multiple commun des deux dénominateurs).', 'Remplacer chaque fraction par son équivalente de ce dénominateur.', 'Additionner ou soustraire les numérateurs, garder le dénominateur, puis simplifier si possible.'],
    exemple: '1/2 + 1/3 = 3/6 + 2/6 = 5/6.',
    erreur: 'Additionner les hauts ET les bas : 1/2 + 1/3 n’est pas 2/5. Le dénominateur commun est obligatoire.',
    saistu: 'Les charpentiers malgaches additionnent sans cesse des fractions : une planche de 1/2 pouce collée à une planche de 3/4 de pouce donne une épaisseur de 5/4 de pouce !',
    exos: ['Calcule : a) 1/4 + 2/4 ; b) 5/6 − 2/6 ; d) 3/8 + 4/8 ; e) 7/10 − 3/10.',
      'Mets au même dénominateur puis calcule : a) 1/2 + 1/4 ; b) 2/3 + 1/6 ; d) 3/4 − 1/2 ; e) 5/6 − 1/3.',
      'Calcule puis simplifie : a) 1/2 + 1/3 ; b) 1/4 + 1/6 ; d) 2/5 + 1/2 ; e) 3/4 − 1/6.'],
    corr: ['a) 3/4 ; b) 3/6 = 1/2 ; d) 7/8 ; e) 4/10 = 2/5.',
      'a) 2/4 + 1/4 = 3/4 ; b) 4/6 + 1/6 = 5/6 ; d) 3/4 − 2/4 = 1/4 ; e) 5/6 − 2/6 = 3/6 = 1/2.',
      'a) 5/6 ; b) 3/12 + 2/12 = 5/12 ; d) 4/10 + 5/10 = 9/10 ; e) 9/12 − 2/12 = 7/12.'],
    fig: 'u1f7'
  },
  {
    t: 'Découvrir les nombres relatifs', comp: 'Nombre', theme: 'Illustration des entiers et des décimaux négatifs',
    goal: 'reconnaître et interpréter des nombres positifs et négatifs dans des situations concrètes',
    mat: 'Tableau, cahier, ardoises, thermomètre, jetons bicolores',
    revQ: 'Calcule 1/2 + 1/4.',
    revRA: '1/2 + 1/4 = 2/4 + 1/4 = 3/4.',
    situation: 'Un matin d’hiver à Antsirabe, le thermomètre marque 3 degrés en dessous de zéro ; l’après-midi, il marque 5 degrés au-dessus. Comment écrire ces deux températures ?',
    def: 'Un nombre relatif est un nombre muni d’un signe : les nombres positifs sont précédés du signe + et les nombres négatifs du signe −. Le nombre 0 est à la fois positif et négatif.',
    autrement: 'les nombres négatifs décrivent « en dessous de zéro » : −3 °C, c’est 3 degrés sous zéro ; +5 °C, c’est 5 degrés au-dessus.',
    concept: 'Les nombres relatifs servent à repérer des situations opposées autour d’un zéro : températures (−3 °C), altitudes (−10 m sous la mer), dettes et gains (−2 000 Ar). Les entiers relatifs sont …, −3, −2, −1, 0, +1, +2, … ; les décimaux relatifs comme −2,5 ou +0,75 complètent cette famille. Écrire +5 ou simplement 5 revient au même.',
    synthese: 'un nombre relatif est formé d’un signe (+ ou −) et d’une distance à zéro, et 0 est à la fois positif et négatif.',
    method: ['Repérer le zéro de la situation (niveau de la mer, 0 °C, aucun gain…).', 'Compter la distance à zéro.', 'Écrire le signe + si l’on est au-dessus de zéro, le signe − si l’on est en dessous.'],
    exemple: 'Matin : −3 °C (3 degrés sous zéro). Après-midi : +5 °C (5 degrés au-dessus). L’opposé de +3 est −3.',
    erreur: 'Croire que −7 est plus grand que −2 parce que 7 > 2 : plus un négatif est loin de zéro, plus il est petit.',
    saistu: 'Le point le plus profond de l’océan Indien, près de Madagascar, descend à environ −7 000 m, alors que le sommet du Maromokotro culmine à +2 876 m : les relatifs décrivent notre île du fond de l’océan au sommet !',
    exos: ['Écris avec un signe : a) 7 degrés sous zéro ; b) un gain de 500 Ar ; d) 12 m sous le niveau de la mer ; e) 4,5 degrés au-dessus de zéro.',
      'Donne l’opposé : a) +8 ; b) −3 ; d) +2,5 ; e) −0,75.',
      'Positif ou négatif ? a) la température d’un congélateur ; b) l’altitude d’un sommet ; d) une dette ; e) le nombre 0.'],
    corr: ['a) −7 °C ; b) +500 Ar ; d) −12 m ; e) +4,5 °C.',
      'a) −8 ; b) +3 ; d) −2,5 ; e) +0,75.',
      'a) Négative ; b) positive ; d) négative ; e) 0 est à la fois positif et négatif.'],
    fig: 'u1f8'
  },
  {
    t: 'Placer des entiers relatifs sur la droite graduée', comp: 'Nombre', theme: 'Illustration des entiers positifs et négatifs sur une droite graduée',
    goal: 'placer et lire des entiers relatifs sur une droite graduée',
    mat: 'Tableau, cahier, ardoises, droite graduée, jetons bicolores',
    revQ: 'Quel est l’opposé de −4 ? Et celui de +9 ?',
    revRA: 'L’opposé de −4 est +4 ; l’opposé de +9 est −9.',
    situation: 'Dans un immeuble, l’ascenseur dessert les étages +3, +2, +1, 0 (rez-de-chaussée), −1 et −2 (sous-sols) : les boutons forment une droite graduée verticale !',
    def: 'Sur une droite graduée, chaque point est repéré par un nombre appelé son abscisse. Le point d’abscisse 0 est l’origine ; les abscisses positives sont à droite de l’origine et les abscisses négatives à gauche.',
    autrement: 'la droite graduée est une règle qui continue aussi à gauche de zéro, avec les nombres à signe −.',
    concept: 'Pour placer un entier relatif, on part de l’origine 0 : on avance vers la droite pour un positif, vers la gauche pour un négatif. Le point A d’abscisse −4 se note A(−4). Deux nombres opposés, comme −3 et +3, sont symétriques par rapport à l’origine : ils sont à la même distance de 0.',
    synthese: 'chaque point de la droite graduée est repéré par son abscisse, les positifs à droite de l’origine, les négatifs à gauche, et les opposés sont symétriques par rapport à 0.',
    method: ['Tracer la droite, marquer l’origine 0 et choisir une unité régulière.', 'Graduer vers la droite (+1, +2, …) et vers la gauche (−1, −2, …).', 'Placer chaque point en comptant les unités depuis 0, dans le sens donné par le signe.'],
    exemple: 'A(−4), B(−1) et C(+2) : A est à 4 unités à gauche de 0, B à 1 unité à gauche, C à 2 unités à droite.',
    erreur: 'Graduer la gauche dans le mauvais ordre (−1, −2, −3 en s’éloignant correctement, mais écrits −3, −2, −1 vers la gauche) : en allant vers la gauche, les abscisses diminuent.',
    saistu: 'Les frises chronologiques de tes cours d’histoire sont des droites graduées : les dates « avant Jésus-Christ » jouent le rôle des nombres négatifs !',
    exos: ['Donne l’abscisse des points : A à 3 unités à gauche de O ; B à 5 unités à droite ; D à 1 unité à gauche ; E sur l’origine.',
      'Place mentalement sur une droite graduée puis donne l’ordre de gauche à droite : a) +1 ; b) −3 ; d) +4 ; e) −1.',
      'Quelle est la distance à zéro de chaque abscisse ? a) −6 ; b) +6 ; d) −2 ; e) +9.'],
    corr: ['A(−3) ; B(+5) ; D(−1) ; E(0).',
      'De gauche à droite : −3 ; −1 ; +1 ; +4.',
      'a) 6 ; b) 6 (les opposés ont la même distance à zéro) ; d) 2 ; e) 9.'],
    fig: 'u1f9'
  },
  {
    t: 'Placer des décimaux relatifs sur la droite graduée', comp: 'Nombre', theme: 'Illustration des décimaux positifs et négatifs sur une droite graduée',
    goal: 'placer et lire des nombres décimaux relatifs sur une droite graduée',
    mat: 'Tableau, cahier, ardoises, droite graduée, papier quadrillé',
    revQ: 'Quelle est l’abscisse d’un point situé à 7 unités à gauche de l’origine ?',
    revRA: 'Son abscisse est −7.',
    situation: 'La pirogue de Solo est à 1,5 m sous la surface de l’eau quand il plonge, puis le bouchon de sa ligne flotte à 0,5 m au-dessus d’un banc de poissons : les décimaux relatifs repèrent toutes ces positions.',
    def: 'Les nombres décimaux relatifs se placent sur la droite graduée en partageant chaque unité en parts égales : dixièmes, demis, quarts…',
    autrement: 'entre deux graduations entières, il y a de la place pour tous les décimaux : −1,5 est exactement au milieu de −2 et −1.',
    concept: 'Pour placer −1,5, on repère d’abord l’encadrement entre entiers : −2 < −1,5 < −1 ; puis on partage cette unité en dixièmes ou en demis. Attention au sens : −1,5 est plus loin de zéro que −1. De même, +0,5 est au milieu de 0 et +1.',
    synthese: 'pour placer un décimal relatif, on l’encadre entre deux entiers consécutifs puis on partage l’unité en parts égales, en respectant le sens du signe.',
    method: ['Encadrer le décimal entre deux entiers consécutifs.', 'Partager l’unité concernée en dixièmes (ou en demis, en quarts…).', 'Placer le point et écrire son abscisse avec son signe.'],
    exemple: 'E(−1,5) est au milieu de −2 et −1 ; F(+0,5) est au milieu de 0 et +1.',
    erreur: 'Placer −1,5 entre −1 et 0 : comme −1,5 est plus loin de zéro que −1, il se trouve entre −2 et −1.',
    saistu: 'Les plongeurs notent leur profondeur en décimaux négatifs : un dauphin qui chasse à −12,5 m puis saute à +2,3 m au-dessus des vagues parcourt presque 15 m sur la droite graduée verticale !',
    exos: ['Encadre entre deux entiers consécutifs : a) −0,8 ; b) +2,4 ; d) −3,1 ; e) +0,9.',
      'Quelle abscisse se trouve au milieu de : a) 0 et +1 ; b) −1 et 0 ; d) −3 et −2 ; e) +2 et +3 ?',
      'Range de gauche à droite sur la droite graduée : a) +0,5 ; b) −1,5 ; d) −0,5 ; e) +1,5.'],
    corr: ['a) −1 < −0,8 < 0 ; b) +2 < +2,4 < +3 ; d) −4 < −3,1 < −3 ; e) 0 < +0,9 < +1.',
      'a) +0,5 ; b) −0,5 ; d) −2,5 ; e) +2,5.',
      'De gauche à droite : −1,5 ; −0,5 ; +0,5 ; +1,5.'],
    fig: 'u1f10'
  },
  {
    t: 'Comparer et ordonner des nombres relatifs', comp: 'Nombre', theme: 'Comparaison des entiers et décimaux relatifs',
    goal: 'comparer et ordonner des entiers et des décimaux relatifs',
    mat: 'Tableau, cahier, ardoises, droite graduée',
    revQ: 'Quel nombre est au milieu de −3 et −2 sur la droite graduée ?',
    revRA: 'C’est −2,5.',
    situation: 'Trois villes affichent leurs températures du matin : Antsirabe −3 °C, Fianarantsoa −1,5 °C, Toamasina +2 °C. Quelle ville est la plus froide ?',
    def: 'Sur la droite graduée, un nombre est plus petit qu’un autre lorsqu’il est placé à sa gauche. Tout nombre négatif est plus petit que zéro et que tout nombre positif ; entre deux négatifs, le plus petit est celui qui est le plus éloigné de zéro.',
    autrement: 'plus on va vers la droite, plus c’est grand ; et chez les négatifs, c’est « le plus loin de zéro » qui perd !',
    concept: 'Pour comparer −3 et −1,5 : les deux sont négatifs, et −3 est plus loin de zéro, donc −3 < −1,5. On obtient ainsi le classement −3 < −1,5 < 0 < +2. Pour ordonner une liste, on sépare d’abord négatifs et positifs, puis on classe chaque groupe.',
    synthese: 'sur la droite graduée, les nombres croissent de gauche à droite : tout négatif est inférieur à tout positif, et entre deux négatifs le plus éloigné de zéro est le plus petit.',
    method: ['Séparer les nombres négatifs et les nombres positifs.', 'Classer les positifs comme d’habitude ; classer les négatifs en inversant : le plus éloigné de zéro est le plus petit.', 'Vérifier sur une droite graduée : les nombres doivent se lire de gauche à droite.'],
    exemple: '−3 < −1,5 < 0 < +2 : Antsirabe est la ville la plus froide.',
    erreur: 'Écrire −7 > −2 parce que 7 > 2 : c’est l’inverse, car −7 est plus loin de zéro, donc −7 < −2.',
    saistu: 'Au rallye des classements, le golf est champion des nombres relatifs : un score de −5 y bat un score de +2, car on compte les coups en dessous de la normale !',
    exos: ['Compare avec < ou > : a) −2 … +1 ; b) −5 … −3 ; d) 0 … −0,5 ; e) −1,2 … −2,1.',
      'Range dans l’ordre croissant : a) +3 ; b) −4 ; d) −0,5 ; e) +0,5.',
      'Range dans l’ordre décroissant : a) −1,5 ; b) +2,5 ; d) −2 ; e) 0.'],
    corr: ['a) −2 < +1 ; b) −5 < −3 ; d) 0 > −0,5 ; e) −1,2 > −2,1.',
      'Ordre croissant : −4 < −0,5 < +0,5 < +3.',
      'Ordre décroissant : +2,5 > 0 > −1,5 > −2.'],
    fig: 'u1f11'
  },
  {
    t: 'Distinguer échelle, pourcentage, taux et rendement', comp: 'Nombre', theme: 'Notion d’échelle, de pourcentage, de taux et de rendement',
    goal: 'distinguer les notions d’échelle, de pourcentage, de taux et de rendement',
    mat: 'Tableau, cahier, ardoises, cartes géographiques, tableaux de rendement agricole',
    revQ: 'Range dans l’ordre croissant : −2 ; +1 ; −0,5.',
    revRA: '−2 < −0,5 < +1.',
    situation: 'Dans le journal : « carte au 1/100 000 », « 35 % de réussite », « taux d’intérêt de 3 % », « rendement de 4 tonnes à l’hectare ». Quatre expressions, quatre outils de comparaison !',
    def: 'L’échelle compare une longueur sur un plan à la longueur réelle ; le pourcentage exprime une proportion sur 100 ; le taux compare deux grandeurs de natures différentes ; le rendement compare la production obtenue à ce qui a été engagé.',
    autrement: 'ce sont quatre façons de répondre à la question « combien pour combien ? » : des cm pour des km, des élèves sur 100, des ariary d’intérêt pour un prêt, des tonnes de riz par hectare.',
    concept: 'Ces quatre notions sont des rapports. L’échelle 1/100 000 signifie que 1 cm du plan représente 100 000 cm réels, soit 1 km. Le pourcentage 35 % signifie 35 sur 100. Le taux de 3 % d’un prêt signifie 3 000 Ar d’intérêt pour 100 000 Ar empruntés. Le rendement de 4 t/ha signifie 4 tonnes récoltées pour chaque hectare cultivé.',
    synthese: 'échelle, pourcentage, taux et rendement sont tous des rapports : ils comparent deux quantités pour décrire une situation réelle.',
    method: ['Identifier les deux quantités comparées.', 'Reconnaître l’outil : plan/réalité → échelle ; sur 100 → pourcentage ; deux natures différentes → taux ; production/moyen engagé → rendement.', 'Écrire le rapport et l’interpréter par une phrase.'],
    exemple: 'Échelle : 1 cm ↔ 1 km. Pourcentage : 35 élèves sur 100. Taux : 3 000 Ar pour 100 000 Ar. Rendement : 4 t par hectare.',
    erreur: 'Confondre pourcentage et taux quelconque : un pourcentage se rapporte toujours à 100, alors qu’un rendement peut se rapporter à un hectare, une heure ou un sac de semences.',
    saistu: 'Le lac Alaotra, grenier à riz de Madagascar, affiche des rendements qui dépassent 5 tonnes de paddy par hectare dans les meilleures parcelles — contre 2 à 3 tonnes en moyenne nationale.',
    exos: ['Associe chaque situation à la bonne notion : a) 1 cm sur la carte pour 50 000 cm réels ; b) 60 réponses justes sur 100 ; d) 2 000 Ar d’intérêt pour 50 000 Ar prêtés ; e) 30 kg de haricots récoltés par are.',
      'Vrai ou faux ? a) Un pourcentage se rapporte toujours à 100 ; b) une échelle compare deux longueurs ; d) un rendement est toujours exprimé en % ; e) un taux peut comparer des ariary et des ariary prêtés.',
      'Exprime : a) 45 élèves sur 100 en pourcentage ; b) 1 cm pour 2 km en échelle ; d) 5 t pour 2 ha en rendement par hectare ; e) 1 500 Ar d’intérêt pour 30 000 Ar en taux pour 100.'],
    corr: ['a) Échelle ; b) pourcentage ; d) taux ; e) rendement.',
      'a) Vrai ; b) vrai ; d) faux : il peut s’exprimer en t/ha, en kg/are… ; e) vrai, c’est le taux d’intérêt.',
      'a) 45 % ; b) 1/200 000 car 2 km = 200 000 cm ; d) 2,5 t/ha ; e) 5 pour 100, soit 5 %.'],
    fig: 'u1f12'
  },
  {
    t: 'Calculer une échelle', comp: 'Nombre', theme: 'Calcul de l’échelle',
    goal: 'calculer une échelle, une dimension réelle ou une dimension sur le plan',
    mat: 'Tableau, cahier, ardoises, cartes géographiques, règle graduée, plans de maison',
    revQ: 'Que signifie un rendement de 3 tonnes par hectare ?',
    revRA: 'Chaque hectare cultivé produit 3 tonnes : c’est le rapport production/surface.',
    situation: 'Le plan de la nouvelle salle de classe est à l’échelle 1/500. Sur le plan, le mur mesure 4 cm. Quelle est sa longueur réelle ?',
    def: 'L’échelle d’un plan est le rapport entre une longueur mesurée sur le plan et la longueur réelle correspondante, exprimées dans la même unité : échelle = longueur sur le plan ÷ longueur réelle.',
    autrement: 'l’échelle 1/500 veut dire : « tout est 500 fois plus petit sur le plan ». Pour revenir à la réalité, on multiplie par 500.',
    concept: 'À l’échelle 1/500, une longueur de 4 cm sur le plan représente 4 × 500 = 2 000 cm = 20 m dans la réalité. Inversement, pour dessiner une longueur réelle de 35 m = 3 500 cm, on divise par 500 : 7 cm sur le plan. Avant tout calcul, on convertit les deux longueurs dans la même unité.',
    synthese: 'échelle = longueur sur le plan ÷ longueur réelle (même unité) ; on multiplie par le dénominateur de l’échelle pour retrouver la réalité, on divise pour dessiner le plan.',
    method: ['Convertir les longueurs dans la même unité.', 'Pour l’échelle : diviser la longueur du plan par la longueur réelle et simplifier la fraction.', 'Pour une longueur inconnue : multiplier (plan → réalité) ou diviser (réalité → plan) par le dénominateur de l’échelle.'],
    exemple: 'Plan au 1/500 : 4 cm sur le plan → 4 × 500 = 2 000 cm = 20 m dans la réalité.',
    erreur: 'Oublier la conversion d’unités : comparer 4 cm du plan à 20 m réels sans tout mettre en centimètres fausse l’échelle.',
    saistu: 'La carte routière de Madagascar la plus utilisée est au 1/1 000 000 : l’île, longue d’environ 1 580 km, tient alors sur 1,58 m de papier !',
    exos: ['Un plan est à l’échelle 1/200. Calcule les longueurs réelles pour : a) 2 cm ; b) 5 cm ; d) 7,5 cm ; e) 12 cm.',
      'Calcule l’échelle : a) 1 cm pour 1 m réel ; b) 2 cm pour 10 m ; d) 5 cm pour 1 km ; e) 4 cm pour 20 m.',
      'Sur une carte au 1/100 000 : a) que représente 1 cm ? b) que représentent 3,5 cm ? d) combien de cm pour 25 km réels ? e) deux villes distantes de 42 km : quelle distance sur la carte ?'],
    corr: ['a) 400 cm = 4 m ; b) 1 000 cm = 10 m ; d) 1 500 cm = 15 m ; e) 2 400 cm = 24 m.',
      'a) 1/100 ; b) 2/1 000 = 1/500 ; d) 5/100 000 = 1/20 000 ; e) 4/2 000 = 1/500.',
      'a) 1 km ; b) 3,5 km ; d) 25 cm ; e) 4,2 cm.'],
    fig: 'u1f13'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'Nombre',
  rag: 'démontrer une compréhension du concept du nombre et l’utiliser pour décrire des quantités du monde réel.',
  valeurs: 'rigueur et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Décimaux', 'Partie entière + partie décimale plus petite que 1', 'Décomposer et composer par somme ou différence'],
      ['Fractions', 'Équivalence, simplification, forme irréductible', 'Simplifier, décomposer, mettre au même dénominateur'],
      ['Nombres relatifs', 'Signe, opposés, 0 à la fois positif et négatif', 'Placer sur une droite graduée, comparer, ordonner'],
      ['Échelle et rapports', 'Échelle, pourcentage, taux, rendement', 'Distinguer les notions et calculer une échelle']
    ],
    questions: [
      'Décompose 9,406 en partie entière et partie décimale.',
      'Donne la forme irréductible de 18/24.',
      'Calcule 2/3 + 1/6.',
      'Range dans l’ordre croissant : +1,5 ; −2 ; 0 ; −0,5.',
      'Un plan est au 1/250 : que représente une longueur de 6 cm ?'
    ],
    answers: [
      '9,406 = 9 + 0,406.',
      '18/24 = 3/4 (division du haut et du bas par 6).',
      '2/3 + 1/6 = 4/6 + 1/6 = 5/6.',
      '−2 < −0,5 < 0 < +1,5.',
      '6 × 250 = 1 500 cm = 15 m dans la réalité.'
    ]
  },
  exam: {
    exos: [
      'Décompose : a) 12,75 en partie entière plus partie décimale ; b) 17/5 en entier plus fraction. Compose : d) 9 + 0,04 ; e) 6 − 0,35.',
      'a) Donne deux fractions équivalentes à 3/5. b) Simplifie 28/42 jusqu’à la forme irréductible. d) Calcule 1/2 + 1/3. e) Calcule 5/6 − 1/4.',
      'On considère les nombres −3,5 ; +2 ; −1 ; 0 ; +0,5. a) Lesquels sont négatifs ? b) Place-les mentalement sur une droite graduée et donne le plus petit. d) Range-les dans l’ordre croissant. e) Donne l’opposé de chacun.',
      'Un matin, les températures relevées sont : Antsirabe −4 °C ; Fianarantsoa −1,5 °C ; Antananarivo +3 °C ; Toamasina +24,5 °C. a) Quelle ville est la plus froide ? b) Range les températures dans l’ordre croissant. d) De combien de degrés faut-il réchauffer Antsirabe pour atteindre 0 °C ? e) Écris l’opposé de la température de Toamasina.',
      'Le plan d’une école est à l’échelle 1/400. a) Que représente 1 cm du plan ? b) La cour mesure 10 cm sur le plan : longueur réelle ? d) Le bâtiment mesure 24 m dans la réalité : longueur sur le plan ? e) Sur une carte, 3 cm représentent 15 km : calcule l’échelle.'
    ],
    corr: [
      'a) 12,75 = 12 + 0,75 ; b) 17/5 = 3 + 2/5 ; d) 9,04 ; e) 5,65. Un point par réponse.',
      'a) Exemples : 6/10 et 9/15 ; b) 28/42 = 2/3 (÷ 14) ; d) 3/6 + 2/6 = 5/6 ; e) 10/12 − 3/12 = 7/12. Un point par réponse.',
      'a) −3,5 et −1 ; b) le plus petit est −3,5 ; d) −3,5 < −1 < 0 < +0,5 < +2 ; e) +3,5 ; −2 ; +1 ; 0 ; −0,5. Un point par item.',
      'a) Antsirabe ; b) −4 < −1,5 < +3 < +24,5 ; d) 4 degrés ; e) −24,5 °C. Un point par item.',
      'a) 400 cm = 4 m ; b) 4 000 cm = 40 m ; d) 2 400 ÷ 400 = 6 cm ; e) 3/1 500 000 = 1/500 000. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
