// UNITÉ 3 — ALGÈBRE (PE T7) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, bar, txt, nline, dot, tableEl, box, arrow, seg, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — rectangle découpé k(a+b)
figs.u3f1 = (() => { const { s, y } = head('La distributivité simple', ['3 × (4 + 2) = 3 × 4 + 3 × 2 : le grand rectangle est la somme des deux petits.']);
  const u = 55;
  let b = `<rect x="120" y="${y + 50}" width="${4 * u}" height="${3 * u}" fill="#F8BBD0" stroke="${BLUE}" stroke-width="3"/>`
    + `<rect x="${120 + 4 * u}" y="${y + 50}" width="${2 * u}" height="${3 * u}" fill="#C8E6C9" stroke="${BLUE}" stroke-width="3"/>`;
  for (let i = 1; i < 6; i++) b += seg(120 + i * u, y + 50, 120 + i * u, y + 50 + 3 * u, BLUE, 1.5);
  for (let j = 1; j < 3; j++) b += seg(120, y + 50 + j * u, 120 + 6 * u, y + 50 + j * u, BLUE, 1.5);
  b += txt(120 + 2 * u, y + 35, '4', 26, PINK2, 'bold', 'middle') + txt(120 + 5 * u, y + 35, '2', 26, GREEN, 'bold', 'middle')
    + txt(95, y + 50 + 1.5 * u + 9, '3', 26, BLUE, 'bold', 'middle')
    + txt(620, y + 95, '3 × 4 = 12', 27, PINK2, 'bold') + txt(620, y + 140, '3 × 2 = 6', 27, GREEN, 'bold') + txt(620, y + 190, 'total : 18', 27, OCRE, 'bold');
  return svg(1000, y + 260, s + b); })();
// S2 — 7 × 103
figs.u3f2 = (() => { const { s, y } = head('Calculer astucieusement', ['7 × 103 = 7 × (100 + 3) = 700 + 21 = 721.']);
  let b = box(80, y + 20, 280, 90, '7 × 103', undefined, BLUE, 30) + arrow(375, y + 65, 450, y + 65)
    + box(465, y + 20, 310, 90, '7 × 100 + 7 × 3', '#E8F5E9', GREEN, 26)
    + txt(815, y + 78, '= 721', 30, PINK2, 'bold');
  return svg(1000, y + 150, s + b); })();
// S3 — 3x + 3y = 3(x+y)
figs.u3f3 = (() => { const { s, y } = head('Factoriser une somme', ['3x + 3y = 3(x + y) : le facteur commun 3 se met en évidence.']);
  let b = box(80, y + 20, 290, 90, '3x + 3y', undefined, BLUE, 30) + arrow(385, y + 65, 475, y + 65) + txt(430, y + 40, 'facteur 3', 20, GREEN, 'bold', 'middle')
    + box(490, y + 20, 290, 90, '3(x + y)', '#FDE7EF', PINK2, 30);
  return svg(1000, y + 150, s + b); })();
// S4 — problème marché
figs.u3f4 = (() => { const { s, y } = head('La distributivité en situation', ['5 cahiers à 1 200 Ar et 5 stylos à 800 Ar :', '5 × (1 200 + 800) = 5 × 2 000 = 10 000 Ar.']);
  let b = box(70, y + 20, 400, 90, '5 × 1 200 + 5 × 800', undefined, BLUE, 25) + txt(505, y + 78, '=', 32, '#222', 'bold')
    + box(545, y + 20, 300, 90, '5 × 2 000', '#E8F5E9', GREEN, 28)
    + txt(500, y + 165, 'dépense totale : 10 000 Ar', 27, PINK2, 'bold', 'middle');
  return svg(1000, y + 200, s + b); })();
// S5 — machine x -> 2x+1
figs.u3f5 = (() => { const { s, y } = head('La notion de variable', ['La machine « double et ajoute 1 » : x devient 2x + 1.']);
  let b = box(80, y + 45, 150, 80, 'x', undefined, BLUE, 32) + arrow(245, y + 85, 330, y + 85)
    + `<rect x="345" y="${y + 25}" width="300" height="120" rx="14" fill="#E3F2FD" stroke="#1565C0" stroke-width="3.5"/>`
    + txt(495, y + 75, '× 2 puis + 1', 27, '#1565C0', 'bold', 'middle') + txt(495, y + 115, 'machine', 20, '#666', 'normal', 'middle')
    + arrow(660, y + 85, 745, y + 85) + box(760, y + 45, 180, 80, '2x + 1', '#FDE7EF', PINK2, 30);
  b += txt(155, y + 180, 'x = 3 → 7 ;  x = 10 → 21', 24, GREEN, 'bold');
  return svg(1000, y + 215, s + b); })();
// S6 — P = 4c
figs.u3f6 = (() => { const { s, y } = head('Produire une expression littérale', ['Le périmètre d’un carré de côté c : P = 4 × c = 4c.']);
  const a = 160;
  let b = `<rect x="140" y="${y + 30}" width="${a}" height="${a}" fill="white" stroke="${BLUE}" stroke-width="4"/>`
    + txt(220, y + 30 + a + 35, 'c', 28, PINK2, 'bold', 'middle') + txt(110, y + 30 + a / 2 + 9, 'c', 28, PINK2, 'bold', 'middle')
    + box(440, y + 70, 380, 90, 'P = c + c + c + c = 4c', '#E8F5E9', GREEN, 26);
  return svg(1000, y + 260, s + b); })();
// S7 — y = 650x
figs.u3f7 = (() => { const { s, y } = head('Traduire une proportionnalité', ['1 kg de riz coûte 650 Ar : pour x kg, le prix est y = 650x.']);
  const data = [['x (kg)', '1', '2', '3', '5'], ['y (Ar)', '650', '1 300', '1 950', '3 250']];
  let b = tableEl(90, y + 15, [170, 150, 150, 150, 150], 66, data);
  b += box(90, y + 180, 350, 80, 'y = 650 × x', '#FDE7EF', PINK2, 28);
  return svg(1000, y + 290, s + b); })();
// S8 — balance
figs.u3f8 = (() => { const { s, y } = head('Les propriétés de l’égalité', ['Une égalité est une balance : on ajoute ou enlève la même chose des deux côtés.']);
  const cx = 500, ty = y + 40;
  let b = seg(cx, ty, cx, ty + 90, '#555', 6) + `<polygon points="${cx - 45},${ty + 130} ${cx + 45},${ty + 130} ${cx},${ty + 90}" fill="#BBB" stroke="#555" stroke-width="3"/>`
    + seg(cx - 260, ty + 25, cx + 260, ty + 25, '#555', 6)
    + seg(cx - 260, ty + 25, cx - 260, ty + 45, '#555', 4) + seg(cx + 260, ty + 25, cx + 260, ty + 45, '#555', 4)
    + box(cx - 350, ty + 45, 180, 60, 'x + 3', '#E3F2FD', '#1565C0', 26) + box(cx + 170, ty + 45, 180, 60, '10', '#E3F2FD', '#1565C0', 26)
    + txt(cx, ty + 190, 'on enlève 3 de chaque côté  →  x = 7', 26, GREEN, 'bold', 'middle');
  return svg(1000, y + 280, s + b); })();
// S9 — équation étapes
figs.u3f9 = (() => { const { s, y } = head('Résoudre une équation du premier degré', ['3x + 5 = 26 : on isole x étape par étape.']);
  let b = box(80, y + 15, 340, 70, '3x + 5 = 26', undefined, BLUE, 26) + txt(460, y + 58, '① − 5 des deux côtés', 23, GREEN, 'bold')
    + box(80, y + 105, 340, 70, '3x = 21', undefined, BLUE, 26) + txt(460, y + 148, '② ÷ 3 des deux côtés', 23, GREEN, 'bold')
    + box(80, y + 195, 340, 70, 'x = 7', '#FDE7EF', PINK2, 28) + txt(460, y + 238, '③ vérification : 3 × 7 + 5 = 26 ✓', 23, PINK2, 'bold');
  return svg(1000, y + 300, s + b); })();
// S10 — réduction 5x+3+2x
figs.u3f10 = (() => { const { s, y } = head('Réduire une expression littérale', ['5x + 3 + 2x = 7x + 3 : on regroupe les termes en x.']);
  let b = box(80, y + 20, 340, 90, '5x + 3 + 2x', undefined, BLUE, 28) + arrow(435, y + 65, 525, y + 65) + txt(480, y + 40, 'regrouper', 19, GREEN, 'bold', 'middle')
    + box(540, y + 20, 290, 90, '7x + 3', '#FDE7EF', PINK2, 30);
  b += txt(455, y + 160, '5x et 2x sont des termes semblables ; 3 reste seul.', 23, '#333', 'normal', 'middle');
  return svg(1000, y + 195, s + b); })();
// S11 — développement 4(2x+3)
figs.u3f11 = (() => { const { s, y } = head('Développer une expression littérale', ['4(2x + 3) = 4 × 2x + 4 × 3 = 8x + 12.']);
  let b = box(80, y + 20, 300, 90, '4(2x + 3)', undefined, BLUE, 29);
  b += arrow(200, y + 20, 455, y - 10 + 20, GREEN, 3) ;
  b = box(80, y + 20, 300, 90, '4(2x + 3)', undefined, BLUE, 29)
    + arrow(395, y + 65, 470, y + 65) + box(485, y + 20, 330, 90, '4 × 2x + 4 × 3', '#E8F5E9', GREEN, 25)
    + txt(650, y + 160, '= 8x + 12', 29, PINK2, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();
// S12 — substitution
figs.u3f12 = (() => { const { s, y } = head('Substituer la variable', ['Pour x = 5 : 2x + 7 = 2 × 5 + 7 = 17.']);
  let b = box(80, y + 20, 270, 90, '2x + 7', undefined, BLUE, 30) + arrow(365, y + 65, 450, y + 65) + txt(407, y + 40, 'x = 5', 22, OCRE, 'bold', 'middle')
    + box(465, y + 20, 300, 90, '2 × 5 + 7', '#E8F5E9', GREEN, 28) + txt(800, y + 78, '= 17', 30, PINK2, 'bold');
  return svg(1000, y + 150, s + b); })();
// S13 — valeur numérique A = 3a + 2b
figs.u3f13 = (() => { const { s, y } = head('Calculer la valeur d’une expression', ['A = 3a + 2b pour a = 4 et b = 1,5 : A = 12 + 3 = 15.']);
  let b = box(80, y + 20, 280, 90, 'A = 3a + 2b', undefined, BLUE, 27)
    + box(390, y + 20, 310, 90, '3 × 4 + 2 × 1,5', '#E8F5E9', GREEN, 25)
    + box(730, y + 20, 190, 90, 'A = 15', '#FDE7EF', PINK2, 29)
    + txt(235, y + 150, 'a = 4, b = 1,5', 24, OCRE, 'bold', 'middle');
  return svg(1000, y + 185, s + b); })();

const S = [
  {
    t: 'Découvrir la distributivité simple', comp: 'Algèbre', theme: 'Distributivité simple',
    goal: 'utiliser la distributivité simple k × (a + b) = k × a + k × b',
    mat: 'Tableau, cahier, ardoises, jetons ou cubes, quadrillage',
    revQ: 'Calcule 4 × (9 − 5) + 2.',
    revRA: '4 × 4 + 2 = 18 : parenthèses d’abord.',
    situation: 'Un rectangle de 3 rangées sur 6 colonnes est coupé en deux parties de 4 et 2 colonnes. On peut compter 3 × 6 = 18 cases, ou bien 3 × 4 + 3 × 2 = 12 + 6 = 18 : deux chemins, même résultat !',
    def: 'La distributivité simple de la multiplication sur l’addition s’écrit : k × (a + b) = k × a + k × b. Elle vaut aussi pour la soustraction : k × (a − b) = k × a − k × b.',
    autrement: 'multiplier une somme, c’est multiplier chaque morceau puis additionner les résultats.',
    concept: 'Sur le quadrillage, le grand rectangle 3 × (4 + 2) se découpe en deux rectangles 3 × 4 et 3 × 2 : l’aire totale est la même dans les deux calculs. La distributivité fonctionne dans les deux sens : développer, c’est passer de k(a + b) à ka + kb ; factoriser, c’est faire le chemin inverse.',
    synthese: 'multiplier un nombre par une somme revient à multiplier ce nombre par chaque terme puis à additionner : k(a + b) = ka + kb.',
    method: ['Repérer le facteur devant la parenthèse.', 'Multiplier ce facteur par chaque terme de la parenthèse.', 'Additionner (ou soustraire) les produits obtenus et comparer avec le calcul direct.'],
    exemple: '3 × (4 + 2) = 3 × 4 + 3 × 2 = 12 + 6 = 18 ; 5 × (10 − 2) = 50 − 10 = 40.',
    erreur: 'Multiplier seulement le premier terme : 3 × (4 + 2) n’est pas 12 + 2. Le facteur se distribue sur TOUS les termes.',
    saistu: 'Ton cerveau utilise la distributivité sans te le dire : pour calculer 3 × 12, tu penses « 3 × 10 + 3 × 2 = 36 » — c’est exactement k(a + b) = ka + kb !',
    exos: ['Développe puis calcule : a) 2 × (5 + 3) ; b) 4 × (10 + 6) ; d) 3 × (20 − 1) ; e) 5 × (8 − 2).',
      'Complète : a) 6 × (3 + …) = 18 + 30 ; b) … × (4 + 7) = 8 + 14 ; d) 9 × (… − 2) = 45 − 18 ; e) 7 × (10 + …) = 70 + 35.',
      'Vérifie par les deux méthodes (calcul direct et distributivité) : a) 4 × (5 + 5) ; b) 2 × (9 − 4) ; d) 10 × (3 + 0,5) ; e) 6 × (10 − 0,5).'],
    corr: ['a) 10 + 6 = 16 ; b) 40 + 24 = 64 ; d) 60 − 3 = 57 ; e) 40 − 10 = 30.',
      'a) 5 ; b) 2 ; d) 5 ; e) 5.',
      'a) 4 × 10 = 40 et 20 + 20 = 40 ; b) 2 × 5 = 10 et 18 − 8 = 10 ; d) 10 × 3,5 = 35 et 30 + 5 = 35 ; e) 6 × 9,5 = 57 et 60 − 3 = 57.'],
    fig: 'u3f1'
  },
  {
    t: 'Calculer astucieusement avec la distributivité', comp: 'Algèbre', theme: 'Utilisation de la distributivité simple',
    goal: 'utiliser la distributivité pour effectuer des calculs rapides',
    mat: 'Tableau, cahier, ardoises, cartes de calcul mental',
    revQ: 'Développe 5 × (8 − 2).',
    revRA: '5 × 8 − 5 × 2 = 40 − 10 = 30.',
    situation: 'Au marché, 7 kapoaka de riz à 103 Ar... euh, 103 ? Le calcul paraît dur. Mais 103 = 100 + 3 : alors 7 × 103 = 700 + 21 = 721. Magique ?',
    def: 'Pour multiplier rapidement, on décompose l’un des facteurs en une somme ou une différence simple, puis on distribue.',
    autrement: 'on coupe le nombre compliqué en morceaux faciles : 103 = 100 + 3, ou 98 = 100 − 2.',
    concept: 'Près d’une centaine ou d’une dizaine ronde, la distributivité fait gagner du temps : 7 × 103 = 7 × (100 + 3) = 700 + 21 = 721 et 6 × 98 = 6 × (100 − 2) = 600 − 12 = 588. La même astuce marche avec les décimaux : 4 × 2,5 = 4 × (2 + 0,5) = 8 + 2 = 10.',
    synthese: 'pour calculer vite, on remplace un facteur par une somme ou une différence proche d’un nombre rond, puis on distribue.',
    method: ['Repérer le facteur proche d’un nombre rond (10, 100, 1 000…).', 'L’écrire comme somme ou différence : 103 = 100 + 3 ; 98 = 100 − 2.', 'Distribuer, calculer les deux produits et conclure.'],
    exemple: '7 × 103 = 700 + 21 = 721 ; 6 × 98 = 600 − 12 = 588 ; 4 × 2,5 = 8 + 2 = 10.',
    erreur: 'Oublier le second produit : 7 × 103 ≠ 700. Il faut ajouter 7 × 3 = 21.',
    saistu: 'Les champions de calcul mental multiplient des nombres de trois chiffres en quelques secondes : leur secret n’est pas la mémoire, mais une avalanche de distributivités bien choisies !',
    exos: ['Calcule astucieusement : a) 5 × 102 ; b) 8 × 101 ; d) 3 × 1 002 ; e) 6 × 105.',
      'Calcule astucieusement : a) 4 × 99 ; b) 7 × 98 ; d) 5 × 995 ; e) 9 × 102.',
      'Calcule avec des décimaux : a) 6 × 1,5 ; b) 8 × 2,5 ; d) 4 × 10,5 ; e) 12 × 0,5 + 12 × 1,5.'],
    corr: ['a) 500 + 10 = 510 ; b) 800 + 8 = 808 ; d) 3 000 + 6 = 3 006 ; e) 600 + 30 = 630.',
      'a) 400 − 4 = 396 ; b) 700 − 14 = 686 ; d) 5 000 − 25 = 4 975 ; e) 900 + 18 = 918.',
      'a) 6 + 3 = 9 ; b) 16 + 4 = 20 ; d) 40 + 2 = 42 ; e) 12 × (0,5 + 1,5) = 12 × 2 = 24.'],
    fig: 'u3f2'
  },
  {
    t: 'Factoriser une somme', comp: 'Algèbre', theme: 'Factorisation d’une somme dans une expression littérale',
    goal: 'factoriser une somme en mettant en évidence un facteur commun',
    mat: 'Tableau, cahier, ardoises, puzzles mathématiques, cartes d’association',
    revQ: 'Calcule astucieusement 4 × 99.',
    revRA: '4 × (100 − 1) = 400 − 4 = 396.',
    situation: 'Dans 3x + 3y, le nombre 3 apparaît dans les deux termes. Peut-on l’écrire une seule fois, comme on rangerait deux paquets dans un même panier ?',
    def: 'Factoriser une somme, c’est l’écrire sous la forme d’un produit en mettant en évidence un facteur commun : k × a + k × b = k × (a + b).',
    autrement: 'c’est la distributivité à l’envers : au lieu de distribuer le facteur, on le « sort » de chaque terme.',
    concept: 'Dans 3x + 3y, le facteur commun est 3 : 3x + 3y = 3(x + y). Dans 5a + 10, on remarque 10 = 5 × 2 : 5a + 10 = 5(a + 2). La factorisation marche aussi avec la soustraction : 7x − 7 = 7(x − 1). Pour vérifier, on développe le résultat : on doit retrouver l’expression de départ.',
    synthese: 'factoriser, c’est repérer le facteur commun des termes et l’écrire une seule fois devant une parenthèse : ka + kb = k(a + b).',
    method: ['Chercher le facteur commun à tous les termes.', 'Écrire ce facteur devant une parenthèse contenant les termes restants.', 'Vérifier en développant : on doit retrouver l’expression initiale.'],
    exemple: '3x + 3y = 3(x + y) ; 5a + 10 = 5(a + 2) ; 7x − 7 = 7(x − 1).',
    erreur: 'Oublier un terme dans la parenthèse : 5a + 10 ≠ 5(a + 10). En développant 5(a + 10), on obtient 5a + 50, pas 5a + 10.',
    saistu: 'Factoriser, c’est le réflexe des livreurs : au lieu de faire 3 trajets pour x colis puis 3 trajets pour y colis, ils font 3 tournées avec (x + y) colis — même travail, mieux organisé !',
    exos: ['Factorise : a) 2x + 2y ; b) 5a + 5b ; d) 9m + 9n ; e) 4u − 4v.',
      'Factorise : a) 3x + 6 ; b) 10a + 5 ; d) 8y − 4 ; e) 12 + 6t.',
      'Factorise puis vérifie en développant : a) 7x + 14 ; b) 6a − 18 ; d) 15 + 5m ; e) 9y + 27.'],
    corr: ['a) 2(x + y) ; b) 5(a + b) ; d) 9(m + n) ; e) 4(u − v).',
      'a) 3(x + 2) ; b) 5(2a + 1) ; d) 4(2y − 1) ; e) 6(2 + t).',
      'a) 7(x + 2) → 7x + 14 ✓ ; b) 6(a − 3) → 6a − 18 ✓ ; d) 5(3 + m) → 15 + 5m ✓ ; e) 9(y + 3) → 9y + 27 ✓.'],
    fig: 'u3f3'
  },
  {
    t: 'Résoudre des problèmes avec la distributivité', comp: 'Algèbre', theme: 'Distributivité et factorisation en situation',
    goal: 'résoudre des problèmes concrets en utilisant la distributivité ou la factorisation',
    mat: 'Tableau, cahier, ardoises, étiquettes de prix, jetons',
    revQ: 'Factorise 8y − 4.',
    revRA: '4(2y − 1) : le facteur commun est 4.',
    situation: 'Pour la rentrée, maman achète pour chacun de ses 5 enfants un cahier à 1 200 Ar et un stylo à 800 Ar. Combien dépense-t-elle en tout ? Deux façons de compter !',
    def: 'Dans un problème, la distributivité permet de choisir le calcul le plus simple : compter article par article (k × a + k × b) ou compter par lot (k × (a + b)).',
    autrement: 'soit on calcule le prix de tous les cahiers puis de tous les stylos, soit le prix d’un lot complet multiplié par le nombre d’enfants.',
    concept: 'Première méthode : 5 × 1 200 + 5 × 800 = 6 000 + 4 000 = 10 000 Ar. Deuxième méthode : chaque enfant reçoit un lot à 1 200 + 800 = 2 000 Ar, donc 5 × 2 000 = 10 000 Ar. La factorisation regroupe les achats en lots ; la distributivité les détaille. On choisit le sens qui rend le calcul mental facile.',
    synthese: 'un même problème se calcule en détaillant (distribuer) ou en regroupant (factoriser), et le résultat est identique : on choisit le chemin le plus simple.',
    method: ['Écrire le calcul du problème sous forme d’expression.', 'Repérer si un facteur commun permet de regrouper, ou si une décomposition simplifie.', 'Calculer par le chemin le plus court et vérifier par l’autre chemin.'],
    exemple: '5 × 1 200 + 5 × 800 = 5 × (1 200 + 800) = 5 × 2 000 = 10 000 Ar.',
    erreur: 'Additionner des produits sans facteur commun : 5 × 1 200 + 4 × 800 ne se factorise pas par 5, car les nombres d’articles diffèrent.',
    saistu: 'Les coopératives de vanille de la SAVA utilisent la factorisation à grande échelle : regrouper les récoltes de centaines de planteurs avant la vente, c’est transformer une somme de petits produits en un seul gros produit !',
    exos: ['Un vendeur prépare 8 sachets contenant chacun 3 bonbons rouges et 2 bonbons verts. a) Écris le nombre total de bonbons de deux façons ; b) calcule-le ; d) combien de bonbons rouges en tout ? e) combien de verts ?',
      'Une école commande pour 6 classes : 40 cahiers et 10 livres par classe. a) Écris la dépense en nombre d’objets de deux façons ; b) calcule le total d’objets ; d) le nombre de cahiers ; e) le nombre de livres.',
      'Calcule de la façon la plus simple : a) 9 × 350 + 9 × 650 ; b) 12 × 75 + 12 × 25 ; d) 7 × 1 999 ; e) 25 × 104.'],
    corr: ['a) 8 × 3 + 8 × 2 ou 8 × (3 + 2) ; b) 8 × 5 = 40 bonbons ; d) 24 rouges ; e) 16 verts.',
      'a) 6 × 40 + 6 × 10 ou 6 × (40 + 10) ; b) 6 × 50 = 300 objets ; d) 240 cahiers ; e) 60 livres.',
      'a) 9 × 1 000 = 9 000 ; b) 12 × 100 = 1 200 ; d) 7 × 2 000 − 7 = 13 993 ; e) 25 × 100 + 25 × 4 = 2 600.'],
    fig: 'u3f4'
  },
  {
    t: 'Comprendre la notion de variable', comp: 'Algèbre', theme: 'Les expressions littérales : notion de variable',
    goal: 'utiliser une lettre pour représenter un nombre qui peut changer',
    mat: 'Tableau, cahier, ardoises, cartes manipulatrices, machine à nombres dessinée',
    revQ: 'Calcule de la façon la plus simple : 12 × 75 + 12 × 25.',
    revRA: '12 × (75 + 25) = 12 × 100 = 1 200.',
    situation: 'Une machine mystérieuse double tout nombre qu’on lui donne puis ajoute 1 : avec 3 elle rend 7, avec 10 elle rend 21. Comment décrire la machine pour N’IMPORTE quel nombre ?',
    def: 'Une variable est une lettre, comme x, qui représente un nombre pouvant prendre différentes valeurs.',
    autrement: 'la lettre x est une « case vide » : on peut y glisser 3, 10 ou n’importe quel nombre.',
    concept: 'La machine « double puis ajoute 1 » se décrit en un coup avec la variable x : elle rend 2x + 1. L’écriture 2x signifie 2 × x : on ne met pas le signe × entre un nombre et une lettre. La variable permet d’énoncer des règles générales : le double de x est 2x, le successeur de n est n + 1, la moitié de a est a/2.',
    synthese: 'une variable est une lettre qui remplace un nombre quelconque et permet d’écrire une règle valable pour toutes les valeurs.',
    method: ['Choisir une lettre pour le nombre qui varie.', 'Traduire chaque opération du texte dans l’ordre : doubler → 2x, ajouter 1 → + 1.', 'Tester l’expression avec une ou deux valeurs connues.'],
    exemple: 'La machine « × 2 puis + 1 » rend 2x + 1 : pour x = 3, elle rend 7 ; pour x = 10, elle rend 21.',
    erreur: 'Écrire x2 pour « le double de x » : le double s’écrit 2x, le nombre toujours devant la lettre.',
    saistu: 'L’usage des lettres pour les nombres a été popularisé par François Viète au XVIᵉ siècle : avant lui, les problèmes s’écrivaient en longues phrases — « la chose », disait-on, au lieu de x !',
    exos: ['Traduis en expression littérale : a) le double de x ; b) le triple de a ; d) x augmenté de 5 ; e) b diminué de 2.',
      'Décris la machine : a) x → 3x ; b) x → x + 7 ; d) x → 2x − 1 ; e) x → 5x + 4.',
      'Que rend la machine x → 2x + 1 pour : a) x = 0 ; b) x = 5 ; d) x = 2,5 ; e) x = 100 ?'],
    corr: ['a) 2x ; b) 3a ; d) x + 5 ; e) b − 2.',
      'a) « tripler » ; b) « ajouter 7 » ; d) « doubler puis enlever 1 » ; e) « multiplier par 5 puis ajouter 4 ».',
      'a) 1 ; b) 11 ; d) 6 ; e) 201.'],
    fig: 'u3f5'
  },
  {
    t: 'Produire une expression littérale', comp: 'Algèbre', theme: 'Expression littérale : élaborer une formule, traduire un programme de calcul',
    goal: 'produire une expression littérale pour élaborer une formule ou traduire un programme de calcul',
    mat: 'Tableau, cahier, ardoises, figures géométriques, programmes de calcul',
    revQ: 'Que rend la machine x → 2x + 1 pour x = 2,5 ?',
    revRA: '2 × 2,5 + 1 = 6.',
    situation: 'Combien de bambous pour clôturer un enclos carré ? Cela dépend du côté ! Pour un côté c, le tour complet vaut c + c + c + c. Peut-on l’écrire plus court ?',
    def: 'Une expression littérale est une écriture mathématique qui contient une ou plusieurs lettres. Une formule est une expression littérale qui donne une grandeur en fonction d’autres : P = 4c pour le périmètre du carré.',
    autrement: 'la formule est une recette : on y range le calcul une fois pour toutes, et elle sert pour tous les carrés du monde.',
    concept: 'Le périmètre du carré de côté c : P = c + c + c + c = 4c. Celui du rectangle : P = 2(L + l). Un programme de calcul se traduit pas à pas : « choisir un nombre, le multiplier par 3, enlever 2 » devient 3x − 2. En sens inverse, lire une formule, c’est retrouver le programme qu’elle décrit.',
    synthese: 'une formule traduit en une expression littérale un calcul valable pour toutes les valeurs, en suivant les opérations dans l’ordre du texte.',
    method: ['Nommer la (ou les) grandeur(s) variable(s) par des lettres.', 'Traduire chaque étape du texte ou de la figure dans l’ordre.', 'Simplifier l’écriture (4c au lieu de c + c + c + c) et tester avec une valeur.'],
    exemple: 'P = 4c pour le carré ; P = 2(L + l) pour le rectangle ; « multiplier par 3 puis enlever 2 » → 3x − 2.',
    erreur: 'Traduire dans le désordre : « multiplier par 3 puis enlever 2 » donne 3x − 2, pas 3(x − 2) — qui correspondrait à « enlever 2 puis multiplier par 3 ».',
    saistu: 'Les tisserandes de lamba calculent avec des formules sans les écrire : pour une natte de L pas sur l pas, le nombre de brins est toujours le même produit — la formule vit dans leurs mains !',
    exos: ['Écris la formule : a) périmètre d’un carré de côté c ; b) périmètre d’un triangle équilatéral de côté a ; d) prix de n cahiers à 1 500 Ar ; e) distance parcourue en t heures à 60 km/h.',
      'Traduis le programme de calcul : a) choisir x, multiplier par 5 ; b) choisir x, ajouter 3 puis doubler ; d) choisir x, multiplier par 4 puis enlever 7 ; e) choisir x, doubler puis ajouter le nombre de départ.',
      'Pour chaque expression, décris le programme : a) 6x ; b) 2x + 9 ; d) 3(x + 1) ; e) 10 − x.'],
    corr: ['a) P = 4c ; b) P = 3a ; d) 1 500n ; e) 60t.',
      'a) 5x ; b) 2(x + 3) ; d) 4x − 7 ; e) 2x + x = 3x.',
      'a) multiplier par 6 ; b) doubler puis ajouter 9 ; d) ajouter 1 puis tripler ; e) enlever le nombre choisi à 10.'],
    fig: 'u3f6'
  },
  {
    t: 'Traduire une relation de proportionnalité', comp: 'Algèbre', theme: 'Relation liant deux grandeurs proportionnelles y et x',
    goal: 'écrire la relation y = ax entre deux grandeurs proportionnelles',
    mat: 'Tableau, cahier, ardoises, tableaux de proportionnalité, étiquettes de prix',
    revQ: 'Écris le programme : choisir x, multiplier par 4 puis enlever 7.',
    revRA: '4x − 7.',
    situation: 'Au marché, 1 kg de riz coûte 650 Ar : 2 kg coûtent 1 300 Ar, 3 kg coûtent 1 950 Ar… Quel lien unit toujours le prix y et la masse x ?',
    def: 'Deux grandeurs x et y sont proportionnelles lorsqu’on passe de x à y en multipliant toujours par un même nombre a, appelé coefficient de proportionnalité : y = a × x.',
    autrement: 'la formule y = 650x contient tout le tableau des prix du riz : elle marche pour 1 kg, 2 kg, 3 kg… et même 2,5 kg !',
    concept: 'Dans le tableau du riz, chaque prix vaut 650 fois la masse : le coefficient est a = 650 et la relation s’écrit y = 650x. Pour trouver a, on divise une valeur de y par la valeur de x correspondante : a = 1 300 ÷ 2 = 650. La relation permet de prédire sans tableau : pour x = 7, y = 650 × 7 = 4 550 Ar.',
    synthese: 'une situation de proportionnalité se résume par la formule y = ax, où le coefficient a s’obtient en divisant y par x.',
    method: ['Vérifier la proportionnalité : y ÷ x doit donner toujours le même quotient.', 'Calculer le coefficient a = y ÷ x.', 'Écrire y = ax et utiliser la formule pour prédire d’autres valeurs.'],
    exemple: 'Riz à 650 Ar/kg : y = 650x ; pour x = 5 kg, y = 3 250 Ar.',
    erreur: 'Écrire y = x + 650 : la proportionnalité multiplie, elle n’additionne pas. Doubler la masse double le prix.',
    saistu: 'Le compteur du taxi-brousse n’existe pas, mais la règle y = ax si : le prix du trajet est proportionnel à la distance sur la plupart des lignes nationales — les passagers calculent le coefficient de tête !',
    exos: ['Un cahier coûte 1 200 Ar. a) Écris la relation entre le prix y et le nombre x de cahiers ; b) calcule y pour x = 4 ; d) pour x = 10 ; e) combien de cahiers avec 6 000 Ar ?',
      'Le tableau donne y proportionnel à x : x = 2 → y = 9 ; x = 4 → y = 18. a) Calcule le coefficient ; b) écris la relation ; d) calcule y pour x = 7 ; e) calcule x pour y = 45.',
      'Proportionnel ou non ? a) x = 1, y = 3 et x = 2, y = 6 ; b) x = 1, y = 4 et x = 2, y = 7 ; d) le périmètre d’un carré et son côté ; e) l’âge d’un enfant et sa taille.'],
    corr: ['a) y = 1 200x ; b) 4 800 Ar ; d) 12 000 Ar ; e) 6 000 ÷ 1 200 = 5 cahiers.',
      'a) a = 9 ÷ 2 = 4,5 ; b) y = 4,5x ; d) y = 31,5 ; e) x = 45 ÷ 4,5 = 10.',
      'a) Oui (coefficient 3) ; b) non : 4 ≠ 7 ÷ 2 ; d) oui : P = 4c ; e) non, la taille ne double pas quand l’âge double.'],
    fig: 'u3f7'
  },
  {
    t: 'Utiliser les propriétés de l’égalité', comp: 'Algèbre', theme: 'Expression littérale et propriétés de l’égalité',
    goal: 'conserver une égalité en effectuant la même opération sur ses deux membres',
    mat: 'Tableau, cahier, ardoises, balance dessinée, jetons',
    revQ: 'Le prix y est proportionnel à la masse x avec un coefficient de 800. Écris la relation.',
    revRA: 'y = 800x.',
    situation: 'Une balance est en équilibre : à gauche un sac mystère et 3 cailloux, à droite 10 cailloux. Que peut-on enlever des deux côtés sans casser l’équilibre ?',
    def: 'Une égalité reste vraie lorsqu’on ajoute, soustrait, multiplie ou divise ses deux membres par un même nombre (non nul pour la division).',
    autrement: 'l’égalité est une balance : tout ce qu’on fait à gauche, on doit le faire aussi à droite.',
    concept: 'Si x + 3 = 10, enlever 3 des deux côtés conserve l’équilibre : x = 7. Si 5x = 35, diviser les deux membres par 5 donne x = 7. Ces transformations autorisées sont l’outil central de la résolution d’équations : elles isolent peu à peu la lettre inconnue.',
    synthese: 'on conserve une égalité en effectuant la même opération sur ses deux membres, ce qui permet d’isoler l’inconnue.',
    method: ['Observer ce qui accompagne la lettre (un + 3, un × 5…).', 'Effectuer l’opération inverse sur les DEUX membres.', 'Continuer jusqu’à ce que la lettre soit seule, puis vérifier.'],
    exemple: 'x + 3 = 10 → x = 7 (on enlève 3 des deux côtés) ; 5x = 35 → x = 7 (on divise par 5 des deux côtés).',
    erreur: 'Opérer d’un seul côté : passer de x + 3 = 10 à x = 10 oublie d’enlever 3 à droite. L’équilibre est rompu !',
    saistu: 'Le mot « équation » vient du latin aequare, « rendre égal » — la même racine que « équilibre » et « équateur », la ligne qui partage la Terre en deux moitiés égales !',
    exos: ['Quelle opération faire des deux côtés pour isoler x ? a) x + 5 = 12 ; b) x − 4 = 9 ; d) 3x = 21 ; e) x + 2,5 = 7.',
      'Résous en une étape : a) x + 8 = 15 ; b) x − 6 = 10 ; d) 4x = 28 ; e) 7x = 42.',
      'Vrai ou faux ? Justifie : a) si a = b alors a + 5 = b + 5 ; b) si a = b alors 3a = 3b ; d) si a + 2 = b + 2 alors a = b ; e) si a = b alors a − b = 1.'],
    corr: ['a) Enlever 5 ; b) ajouter 4 ; d) diviser par 3 ; e) enlever 2,5.',
      'a) x = 7 ; b) x = 16 ; d) x = 7 ; e) x = 6.',
      'a) Vrai : même ajout des deux côtés ; b) vrai : même multiplication ; d) vrai : on enlève 2 des deux côtés ; e) faux : a − b = 0.'],
    fig: 'u3f8'
  },
  {
    t: 'Résoudre une équation du premier degré', comp: 'Algèbre', theme: 'Résolution d’une équation du premier degré',
    goal: 'résoudre une équation du premier degré à une inconnue',
    mat: 'Tableau, cahier, ardoises, fiche des étapes de résolution, cartes « équations »',
    revQ: 'Résous : 4x = 28.',
    revRA: 'x = 7 : on divise les deux membres par 4.',
    situation: 'Rindra pense à un nombre, le multiplie par 3 et ajoute 5 : elle annonce 26. Quel était son nombre ? L’équation 3x + 5 = 26 mène l’enquête.',
    def: 'Une équation du premier degré est une égalité contenant une inconnue (souvent x) dont la puissance est 1. Résoudre l’équation, c’est trouver la valeur de l’inconnue qui rend l’égalité vraie.',
    autrement: 'l’équation est une devinette : « quel nombre, multiplié par 3 puis augmenté de 5, donne 26 ? ». La solution est la réponse.',
    concept: 'Pour résoudre 3x + 5 = 26, on isole x en deux étapes : d’abord enlever 5 des deux côtés (3x = 21), puis diviser par 3 (x = 7). On vérifie toujours : 3 × 7 + 5 = 26 ✓. On défait les opérations dans l’ordre inverse du programme de calcul : le + 5 est enlevé avant le × 3.',
    synthese: 'on isole l’inconnue en défaisant les opérations une par une, dans l’ordre inverse, et on vérifie la solution dans l’équation de départ.',
    method: ['Enlever (ou ajouter) le terme constant des deux côtés.', 'Diviser (ou multiplier) les deux côtés par le coefficient de x.', 'Vérifier en remplaçant x par la valeur trouvée dans l’équation de départ.'],
    exemple: '3x + 5 = 26 → 3x = 21 → x = 7. Vérification : 3 × 7 + 5 = 26 ✓.',
    erreur: 'Diviser avant d’enlever le terme constant : diviser 3x + 5 = 26 par 3 donne x + 5/3 = 26/3, un calcul inutilement compliqué. Enlève d’abord le 5 !',
    saistu: 'Le mot « algèbre » vient du titre d’un livre du savant Al-Khwârizmî (IXᵉ siècle) : al-jabr, « la remise en place » — exactement ce qu’on fait en déplaçant les termes d’une équation !',
    exos: ['Résous : a) x + 7 = 19 ; b) x − 3 = 11 ; d) 5x = 45 ; e) x/2 = 8 (c’est-à-dire x ÷ 2 = 8).',
      'Résous en deux étapes : a) 2x + 3 = 11 ; b) 3x − 4 = 17 ; d) 5x + 10 = 10 ; e) 4x − 7 = 13.',
      'Mets en équation puis résous : a) un nombre augmenté de 9 donne 25 ; b) le triple d’un nombre vaut 51 ; d) le double d’un nombre, diminué de 3, donne 15 ; e) Soa achète 3 stylos à x Ar et paie 500 Ar de sachet : total 3 500 Ar. Prix d’un stylo ?'],
    corr: ['a) x = 12 ; b) x = 14 ; d) x = 9 ; e) x = 16.',
      'a) 2x = 8, x = 4 ; b) 3x = 21, x = 7 ; d) 5x = 0, x = 0 ; e) 4x = 20, x = 5.',
      'a) x + 9 = 25, x = 16 ; b) 3x = 51, x = 17 ; d) 2x − 3 = 15, x = 9 ; e) 3x + 500 = 3 500, x = 1 000 Ar.'],
    fig: 'u3f9'
  },
  {
    t: 'Réduire une expression littérale', comp: 'Algèbre', theme: 'Réduction d’une expression littérale',
    goal: 'réduire une expression littérale en regroupant les termes semblables',
    mat: 'Tableau, cahier, ardoises, blocs de termes, puzzles',
    revQ: 'Résous : 2x + 3 = 11.',
    revRA: '2x = 8 puis x = 4. Vérification : 2 × 4 + 3 = 11 ✓.',
    situation: 'Tahina compte ses billes : 5 sachets de x billes, 3 billes seules, puis 2 sachets de x billes encore. Peut-il écrire son trésor plus simplement que 5x + 3 + 2x ?',
    def: 'Réduire une expression littérale, c’est l’écrire avec le moins de termes possible en regroupant les termes semblables, c’est-à-dire ceux qui contiennent la même lettre.',
    autrement: 'on compte ensemble ce qui se ressemble : les sachets avec les sachets (5x + 2x = 7x), les billes seules à part.',
    concept: 'Grâce à la commutativité, on réordonne : 5x + 3 + 2x = 5x + 2x + 3 = 7x + 3. Les termes en x s’additionnent entre eux (5x + 2x = 7x, car 5 sachets et 2 sachets font 7 sachets), mais 7x + 3 ne se réduit pas davantage : un sachet et une bille seule ne se mélangent pas. Avec soustraction : 8a − 3a + 2 = 5a + 2.',
    synthese: 'on regroupe les termes qui portent la même lettre en additionnant leurs coefficients, et les nombres seuls entre eux.',
    method: ['Repérer les termes semblables (même lettre) et les nombres seuls.', 'Regrouper grâce à la commutativité et l’associativité.', 'Additionner les coefficients des termes semblables, puis les constantes.'],
    exemple: '5x + 3 + 2x = 7x + 3 ; 8a − 3a + 2 = 5a + 2 ; 4y + y = 5y.',
    erreur: 'Mélanger termes en x et nombres : 7x + 3 n’est pas 10x. On ne peut additionner que des termes semblables.',
    saistu: 'Le terme « y » tout seul cache un coefficient 1 : y = 1y. C’est pour cela que 4y + y = 5y — la bille isolée était en fait un sachet d’une bille !',
    exos: ['Réduis : a) 3x + 4x ; b) 9a − 2a ; d) 6m + m ; e) 10t − 10t.',
      'Réduis : a) 2x + 5 + 3x ; b) 7a + 2 − 4a ; d) 4y + 3 + y + 2 ; e) 9b − 3b + 1.',
      'Réduis : a) 5x + 2y + 3x ; b) 4a + 7 + 2a + 3 ; d) 6m + 2n − m ; e) 3u + 4 + 2u − 4.'],
    corr: ['a) 7x ; b) 7a ; d) 7m ; e) 0.',
      'a) 5x + 5 ; b) 3a + 2 ; d) 5y + 5 ; e) 6b + 1.',
      'a) 8x + 2y ; b) 6a + 10 ; d) 5m + 2n ; e) 5u.'],
    fig: 'u3f10'
  },
  {
    t: 'Développer une expression littérale', comp: 'Algèbre', theme: 'Développement d’une expression littérale',
    goal: 'développer une expression littérale à l’aide de la distributivité simple',
    mat: 'Tableau, cahier, ardoises, blocs de termes, quadrillage',
    revQ: 'Réduis : 4a + 7 + 2a + 3.',
    revRA: '6a + 10.',
    situation: '4 enfants reçoivent chacun 2 sachets de x bonbons et 3 bonbons libres : au total 4(2x + 3) bonbons. Comment l’écrire sans parenthèses ?',
    def: 'Développer une expression littérale, c’est transformer un produit en somme en distribuant le facteur sur chaque terme de la parenthèse : k(a + b) = ka + kb.',
    autrement: 'on fait entrer le facteur dans la parenthèse : 4(2x + 3) devient 8x + 12.',
    concept: 'La distributivité s’applique aux lettres comme aux nombres : 4(2x + 3) = 4 × 2x + 4 × 3 = 8x + 12. Après un développement, on réduit souvent : 3(x + 2) + 2x = 3x + 6 + 2x = 5x + 6. Développer et réduire sont les deux gestes de base du calcul littéral.',
    synthese: 'développer, c’est distribuer le facteur sur chaque terme de la parenthèse, puis réduire les termes semblables obtenus.',
    method: ['Multiplier le facteur par le premier terme de la parenthèse.', 'Le multiplier par le deuxième terme (avec son signe).', 'Réduire ensuite les termes semblables si l’expression continue.'],
    exemple: '4(2x + 3) = 8x + 12 ; 5(a − 2) = 5a − 10 ; 3(x + 2) + 2x = 5x + 6.',
    erreur: 'Oublier le second terme : 4(2x + 3) ≠ 8x + 3. Le facteur 4 multiplie AUSSI le 3.',
    saistu: 'Développer puis réduire, c’est le quotidien des logiciels de calcul : derrière chaque jeu vidéo, des millions d’expressions littérales sont développées chaque seconde pour calculer les mouvements à l’écran !',
    exos: ['Développe : a) 2(x + 5) ; b) 3(a + 4) ; d) 5(2m + 1) ; e) 4(3t + 2).',
      'Développe : a) 6(x − 2) ; b) 2(4a − 3) ; d) 7(y − 1) ; e) 3(5b − 4).',
      'Développe puis réduis : a) 2(x + 3) + 4x ; b) 5(a + 1) + 2a + 3 ; d) 3(2m + 2) − 4m ; e) 4(y + 2) + 3(y + 1).'],
    corr: ['a) 2x + 10 ; b) 3a + 12 ; d) 10m + 5 ; e) 12t + 8.',
      'a) 6x − 12 ; b) 8a − 6 ; d) 7y − 7 ; e) 15b − 12.',
      'a) 2x + 6 + 4x = 6x + 6 ; b) 5a + 5 + 2a + 3 = 7a + 8 ; d) 6m + 6 − 4m = 2m + 6 ; e) 4y + 8 + 3y + 3 = 7y + 11.'],
    fig: 'u3f11'
  },
  {
    t: 'Substituer la variable par une valeur', comp: 'Algèbre', theme: 'Substitution de la lettre par une valeur numérique donnée',
    goal: 'substituer la variable d’une expression littérale par une valeur numérique',
    mat: 'Tableau, cahier, ardoises, cartes manipulatrices, affiches',
    revQ: 'Développe puis réduis : 2(x + 3) + 4x.',
    revRA: '2x + 6 + 4x = 6x + 6.',
    situation: 'La formule du prix d’une course est 2x + 7 (en centaines d’ariary), où x est le nombre de kilomètres. Aujourd’hui, x = 5 : que coûte la course ?',
    def: 'Substituer, c’est remplacer la variable d’une expression littérale par une valeur numérique donnée, en rétablissant les signes de multiplication cachés.',
    autrement: 'on glisse le nombre dans la « case » x : 2x + 7 avec x = 5 devient 2 × 5 + 7.',
    concept: 'Pour substituer x = 5 dans 2x + 7 : on écrit 2 × 5 + 7, car 2x signifie 2 × x ; puis on calcule en respectant les priorités : 10 + 7 = 17. La substitution sert à tester une formule, à vérifier la solution d’une équation ou à prédire une valeur.',
    synthese: 'substituer consiste à remplacer la lettre par le nombre donné, à rétablir les multiplications cachées, puis à calculer avec les priorités.',
    method: ['Réécrire l’expression en remplaçant chaque lettre par sa valeur entre les signes rétablis.', 'Calculer en respectant les priorités des opérations.', 'Donner le résultat et l’interpréter dans le contexte.'],
    exemple: 'Pour x = 5 : 2x + 7 = 2 × 5 + 7 = 17.',
    erreur: 'Coller les chiffres : remplacer x par 5 dans 2x ne donne pas 25, mais 2 × 5 = 10.',
    saistu: 'La vérification d’une équation est une substitution déguisée : affirmer que x = 7 résout 3x + 5 = 26, c’est substituer 7 et constater que les deux membres coïncident !',
    exos: ['Calcule pour x = 3 : a) x + 8 ; b) 5x ; d) 2x − 1 ; e) 10 − x.',
      'Calcule pour x = 4 : a) 3x + 2 ; b) 2x − 5 ; d) 5x + 10 ; e) x/2 + 7 (c’est-à-dire x ÷ 2 + 7).',
      'Calcule pour x = 2,5 : a) 2x ; b) 4x + 1 ; d) 10 − 2x ; e) 6x − 5.'],
    corr: ['a) 11 ; b) 15 ; d) 5 ; e) 7.',
      'a) 14 ; b) 3 ; d) 30 ; e) 9.',
      'a) 5 ; b) 11 ; d) 5 ; e) 10.'],
    fig: 'u3f12'
  },
  {
    t: 'Calculer la valeur numérique d’une expression', comp: 'Algèbre', theme: 'Calcul de la valeur de l’expression littérale pour une valeur donnée à la variable',
    goal: 'calculer la valeur numérique d’une expression littérale à une ou deux variables',
    mat: 'Tableau, cahier, ardoises, formules usuelles, cartes manipulatrices',
    revQ: 'Calcule 4x + 1 pour x = 2,5.',
    revRA: '4 × 2,5 + 1 = 11.',
    situation: 'L’aire d’un enclos se calcule avec A = 3a + 2b. Pour a = 4 m et b = 1,5 m, quelle est la valeur de A ? Deux lettres, deux substitutions !',
    def: 'La valeur numérique d’une expression littérale est le résultat obtenu lorsqu’on remplace chaque variable par sa valeur donnée, puis qu’on effectue tous les calculs.',
    autrement: 'chaque lettre reçoit son nombre, puis on calcule comme une chaîne d’opérations ordinaire.',
    concept: 'Pour A = 3a + 2b avec a = 4 et b = 1,5 : A = 3 × 4 + 2 × 1,5 = 12 + 3 = 15. Chaque lettre garde sa propre valeur pendant tout le calcul. Les formules de périmètre et d’aire s’évaluent ainsi : P = 2(L + l) avec L = 7 et l = 3 donne P = 2 × 10 = 20.',
    synthese: 'on remplace chaque lettre par sa valeur, on rétablit les multiplications, puis on calcule en respectant priorités et parenthèses.',
    method: ['Noter la valeur de chaque variable.', 'Réécrire l’expression avec les valeurs à la place des lettres.', 'Calculer étape par étape (parenthèses, produits, puis sommes).'],
    exemple: 'A = 3a + 2b pour a = 4 et b = 1,5 : A = 12 + 3 = 15.',
    erreur: 'Échanger les valeurs des lettres : avec a = 4 et b = 1,5, calculer 3 × 1,5 + 2 × 4 évalue une autre expression. Chaque lettre garde sa valeur !',
    saistu: 'Les ingénieurs du barrage d’Andekaleka évaluent chaque jour des formules à plusieurs variables : débit, hauteur d’eau, puissance — des substitutions dont dépend l’électricité d’Antananarivo !',
    exos: ['Calcule pour a = 2 et b = 5 : a) a + b ; b) 3a + b ; d) 2a + 2b ; e) 4b − 3a.',
      'Calcule pour x = 3 et y = 0,5 : a) 2x + 4y ; b) 10y + x ; d) x × y ; e) 6y − x.',
      'Évalue les formules : a) P = 4c pour c = 7,5 ; b) P = 2(L + l) pour L = 8 et l = 4 ; d) y = 650x pour x = 3 ; e) A = 3a + 2b pour a = 10 et b = 2,5.'],
    corr: ['a) 7 ; b) 11 ; d) 14 ; e) 14.',
      'a) 8 ; b) 8 ; d) 1,5 ; e) 0.',
      'a) 30 ; b) 2 × 12 = 24 ; d) 1 950 ; e) 30 + 5 = 35.'],
    fig: 'u3f13'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Algèbre',
  rag: 'exploiter les relations mathématiques pour analyser des situations diverses, faire des prédictions et prendre des décisions.',
  valeurs: 'rigueur et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Distributivité', 'k(a + b) = ka + kb ; k(a − b) = ka − kb', 'Développer, calculer astucieusement'],
      ['Factorisation', 'ka + kb = k(a + b) : facteur commun', 'Factoriser et vérifier en développant'],
      ['Variable et formule', 'Une lettre représente un nombre variable', 'Produire une expression, traduire un programme'],
      ['Proportionnalité', 'y = ax, coefficient a = y ÷ x', 'Écrire la relation et prédire des valeurs'],
      ['Équation', 'Même opération sur les deux membres', 'Résoudre ax + b = c et vérifier'],
      ['Réduire et substituer', 'Termes semblables ; lettre remplacée par sa valeur', 'Réduire, développer, calculer une valeur numérique']
    ],
    questions: [
      'Développe 7 × 104 pour un calcul rapide.',
      'Factorise 6x + 9.',
      'Résous 2x − 5 = 13.',
      'Réduis 3(x + 2) + 4x − 1.',
      'Calcule 5a + 2b pour a = 3 et b = 0,5.'
    ],
    answers: [
      '7 × (100 + 4) = 700 + 28 = 728.',
      '6x + 9 = 3(2x + 3).',
      '2x = 18 donc x = 9. Vérification : 2 × 9 − 5 = 13 ✓.',
      '3x + 6 + 4x − 1 = 7x + 5.',
      '5 × 3 + 2 × 0,5 = 15 + 1 = 16.'
    ]
  },
  exam: {
    exos: [
      'Développe puis calcule : a) 6 × (10 + 3) ; b) 8 × 99 ; d) 4 × (25 − 0,5) ; e) 12 × 101.',
      'a) Factorise 8x + 12. b) Factorise 5a − 20. d) Développe 3(4y + 5). e) Développe puis réduis 2(x + 4) + 3x.',
      'Un sac de riz coûte 2 500 Ar le kilogramme. a) Écris la relation entre le prix y et la masse x. b) Calcule le prix de 4 kg. d) Calcule le prix de 2,5 kg. e) Quelle masse obtient-on avec 15 000 Ar ?',
      'Résous les équations : a) x + 11 = 20 ; b) 6x = 54 ; d) 3x + 7 = 25 ; e) 5x − 8 = 27.',
      'On donne E = 4x + 3y. a) Calcule E pour x = 2 et y = 1. b) Calcule E pour x = 0,5 et y = 4. d) Mets en équation : « le double d’un nombre augmenté de 9 vaut 31 », puis résous. e) Vérifie ta solution par substitution.'
    ],
    corr: [
      'a) 60 + 18 = 78 ; b) 800 − 8 = 792 ; d) 100 − 2 = 98 ; e) 1 200 + 12 = 1 212. Un point par réponse.',
      'a) 4(2x + 3) ; b) 5(a − 4) ; d) 12y + 15 ; e) 2x + 8 + 3x = 5x + 8. Un point par réponse.',
      'a) y = 2 500x ; b) 10 000 Ar ; d) 6 250 Ar ; e) 15 000 ÷ 2 500 = 6 kg. Un point par réponse.',
      'a) x = 9 ; b) x = 9 ; d) 3x = 18, x = 6 ; e) 5x = 35, x = 7. Un point par équation.',
      'a) 8 + 3 = 11 ; b) 2 + 12 = 14 ; d) 2x + 9 = 31, 2x = 22, x = 11 ; e) 2 × 11 + 9 = 31 ✓. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
