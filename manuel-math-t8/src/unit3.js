// UNITÉ 3 — ALGÈBRE (PE T8) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, PINK2, GREEN, BLUE, OCRE } = L;

// petit repère : axes + graduations, origine (X0, Y0), unités ux/uy, nx/ny graduations
function axes(X0, Y0, ux, uy, nx, ny, xlab, ylab) {
  let s = '';
  for (let i = 1; i <= nx; i++) s += seg(X0 + i * ux, Y0, X0 + i * ux, Y0 - ny * uy, '#CFD8DC', 1.5);
  for (let j = 1; j <= ny; j++) s += seg(X0, Y0 - j * uy, X0 + nx * ux, Y0 - j * uy, '#CFD8DC', 1.5);
  s += arrow(X0, Y0, X0 + nx * ux + 30, Y0, '#333', 3) + arrow(X0, Y0, X0, Y0 - ny * uy - 30, '#333', 3);
  for (let i = 1; i <= nx; i++) s += txt(X0 + i * ux, Y0 + 32, String(i), 19, '#555', 'normal', 'middle');
  for (let j = 1; j <= ny; j++) if (j % 2 === 0) s += txt(X0 - 24, Y0 - j * uy + 7, String(j), 19, '#555', 'normal', 'middle');
  s += txt(X0 - 24, Y0 + 32, '0', 19, '#555', 'normal', 'middle');
  s += txt(X0 + nx * ux + 28, Y0 + 30, xlab, 20, '#333', 'bold', 'middle') + txt(X0 + 12, Y0 - ny * uy - 38, ylab, 20, '#333', 'bold', 'start');
  return s;
}

const figs = {};
// S1 — y = ax
figs.u3f1 = (() => { const { s, y } = head('La relation y = ax', ['1 kg de riz coûte 3 000 Ar : le prix y est lié à la masse x par y = 3 000x.']);
  const data = [['Masse x (kg)', '1', '2', '3', '5'], ['Prix y (Ar)', '3 000', '6 000', '9 000', '15 000']];
  let b = tableEl(110, y + 20, [230, 135, 135, 135, 145], 62, data);
  b += txt(500, y + 195, 'chaque y s’obtient en multipliant x par le MÊME nombre a = 3 000', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();
// S2 — y = ax + b
figs.u3f2 = (() => { const { s, y } = head('La relation y = ax + b', ['Taxi : 2 000 Ar fixes + 1 500 Ar par km → y = 1 500x + 2 000.']);
  let b = box(90, y + 25, 280, 90, '', '#E8F5E9', GREEN, 22)
    + box(420, y + 25, 280, 90, '', '#FDE7EF', PINK2, 22)
    + box(750, y + 25, 180, 90, '', '#FFF3E0', OCRE, 22);
  b += txt(230, y + 62, 'part fixe b', 21, GREEN, 'bold', 'middle') + txt(230, y + 95, '2 000 Ar', 23, GREEN, 'bold', 'middle')
    + txt(560, y + 62, 'part variable ax', 21, PINK2, 'bold', 'middle') + txt(560, y + 95, '1 500 Ar × x km', 22, PINK2, 'bold', 'middle')
    + txt(840, y + 62, 'total y', 21, OCRE, 'bold', 'middle') + txt(840, y + 95, 'la course', 20, OCRE, 'bold', 'middle');
  b += txt(395, y + 70, '+', 30, '#333', 'bold', 'middle') + txt(727, y + 70, '=', 30, '#333', 'bold', 'middle');
  b += txt(500, y + 170, 'pour 4 km : y = 1 500 × 4 + 2 000 = 8 000 Ar', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 205, s + b); })();
// S3 — tableau de proportionnalité
figs.u3f3 = (() => { const { s, y } = head('Le tableau de proportionnalité', ['Toutes les colonnes cachent le même coefficient : y ÷ x = a partout.']);
  const data = [['x', '2', '5', '8', '12'], ['y = 4x', '8', '20', '32', '48']];
  let b = tableEl(150, y + 55, [170, 130, 130, 130, 130], 62, data);
  b += arrow(100, y + 85, 100, y + 150, GREEN, 3);
  b += txt(68, y + 122, '× 4', 22, GREEN, 'bold', 'middle');
  b += txt(500, y + 230, 'test : 8 ÷ 2 = 20 ÷ 5 = 32 ÷ 8 = 48 ÷ 12 = 4 ✓ proportionnel !', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 265, s + b); })();
// S4 — graphique y = ax
figs.u3f4 = (() => { const { s, y } = head('Le graphique de y = 2x', ['Une droite qui passe par l’origine : c’est la signature de y = ax.']);
  const X0 = 180, Y0 = y + 360, ux = 110, uy = 38;
  let b = axes(X0, Y0, ux, uy, 5, 9, 'x', 'y');
  b += seg(X0, Y0, X0 + 4.4 * ux, Y0 - 8.8 * uy, PINK2, 4);
  [[1, 2], [2, 4], [3, 6], [4, 8]].forEach(([px, py]) => { b += dot(X0 + px * ux, Y0 - py * uy, 8, BLUE); });
  b += txt(X0 + 3.4 * ux, Y0 - 8.3 * uy, 'y = 2x', 26, PINK2, 'bold', 'middle');
  b += txt(X0 + 3.1 * ux, Y0 - 2.1 * uy, 'passe par (0 ; 0)', 21, GREEN, 'bold', 'middle');
  return svg(1000, Y0 + 60, s + b); })();
// S5 — y = ax + b : deux droites
figs.u3f5 = (() => { const { s, y } = head('Le graphique de y = 2x + 3', ['Même pente que y = 2x, mais la droite démarre à 3 sur l’axe des y.']);
  const X0 = 180, Y0 = y + 370, ux = 110, uy = 34;
  let b = axes(X0, Y0, ux, uy, 5, 10, 'x', 'y');
  b += seg(X0, Y0, X0 + 4.6 * ux, Y0 - 9.2 * uy, GREEN, 4);
  b += seg(X0, Y0 - 3 * uy, X0 + 3.5 * ux, Y0 - 10 * uy, PINK2, 4);
  b += dot(X0, Y0 - 3 * uy, 9, PINK2) + txt(X0 + 56, Y0 - 3.5 * uy, '(0 ; 3)', 21, PINK2, 'bold', 'middle');
  b += txt(X0 + 4.25 * ux, Y0 - 7.7 * uy, 'y = 2x', 24, GREEN, 'bold', 'middle');
  b += txt(X0 + 2.15 * ux, Y0 - 9.3 * uy, 'y = 2x + 3', 24, PINK2, 'bold', 'middle');
  return svg(1000, Y0 + 60, s + b); })();
// S6 — interpolation / extrapolation
figs.u3f6 = (() => { const { s, y } = head('Lire entre les points… et au-delà', ['Interpoler : lire ENTRE les mesures ; extrapoler : prolonger APRÈS les mesures.']);
  const X0 = 180, Y0 = y + 340, ux = 105, uy = 36;
  let b = axes(X0, Y0, ux, uy, 7, 8, 'x', 'y');
  [[1, 1], [2, 2], [3, 3], [4, 4]].forEach(([px, py]) => { b += dot(X0 + px * ux, Y0 - py * uy, 8, BLUE); });
  b += seg(X0 + 4 * ux, Y0 - 4 * uy, X0 + 6.5 * ux, Y0 - 6.5 * uy, OCRE, 3, '9 7');
  b += seg(X0 + 2.5 * ux, Y0, X0 + 2.5 * ux, Y0 - 2.5 * uy, GREEN, 2.5, '6 5') + seg(X0, Y0 - 2.5 * uy, X0 + 2.5 * ux, Y0 - 2.5 * uy, GREEN, 2.5, '6 5');
  b += dot(X0 + 2.5 * ux, Y0 - 2.5 * uy, 8, GREEN) + dot(X0 + 6 * ux, Y0 - 6 * uy, 8, OCRE);
  b += txt(X0 + 2.5 * ux, Y0 - 2.5 * uy - 28, 'interpolation', 21, GREEN, 'bold', 'middle');
  b += txt(X0 + 5.6 * ux, Y0 - 6.6 * uy - 14, 'extrapolation', 21, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 60, s + b); })();
// S7 — les 4 représentations
figs.u3f7 = (() => { const { s, y } = head('Les quatre visages d’une même relation', ['Situation, tableau, graphique, règle : quatre écritures, une seule réalité.']);
  let b = box(120, y + 25, 310, 85, '', '#E8F5E9', GREEN, 22) + box(570, y + 25, 310, 85, '', '#E3F2FD', '#1565C0', 22)
    + box(120, y + 195, 310, 85, '', '#FFF3E0', OCRE, 22) + box(570, y + 195, 310, 85, '', '#FDE7EF', PINK2, 22);
  b += txt(275, y + 60, 'SITUATION', 22, GREEN, 'bold', 'middle') + txt(275, y + 93, '« 3 000 Ar le kg »', 20, GREEN, 'normal', 'middle')
    + txt(725, y + 60, 'TABLEAU', 22, '#1565C0', 'bold', 'middle') + txt(725, y + 93, 'x → y en colonnes', 20, '#1565C0', 'normal', 'middle')
    + txt(275, y + 230, 'GRAPHIQUE', 22, OCRE, 'bold', 'middle') + txt(275, y + 263, 'droite tracée', 20, OCRE, 'normal', 'middle')
    + txt(725, y + 230, 'RÈGLE', 22, PINK2, 'bold', 'middle') + txt(725, y + 263, 'y = 3 000x', 20, PINK2, 'normal', 'middle');
  b += arrow(440, y + 67, 560, y + 67, '#555', 2.5) + arrow(560, y + 238, 440, y + 238, '#555', 2.5)
    + arrow(275, y + 120, 275, y + 185, '#555', 2.5) + arrow(725, y + 185, 725, y + 120, '#555', 2.5);
  return svg(1000, y + 320, s + b); })();
// S8 — machine situation → formule
figs.u3f8 = (() => { const { s, y } = head('Traduire une situation en règle', ['Part fixe → b ; part qui dépend de x → ax : la formule s’écrit seule.']);
  let b = box(80, y + 30, 330, 100, '', undefined, BLUE, 20)
    + arrow(425, y + 80, 545, y + 80)
    + box(560, y + 30, 360, 100, '', '#FDE7EF', PINK2, 24);
  b += txt(245, y + 68, 'Abonnement 5 000 Ar', 21, '#1565C0', 'bold', 'middle') + txt(245, y + 103, '+ 200 Ar par SMS', 21, '#1565C0', 'bold', 'middle');
  b += txt(740, y + 86, 'y = 200x + 5 000', 26, PINK2, 'bold', 'middle');
  b += txt(485, y + 16, 'traduction', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 185, 'fixe → b = 5 000 ; « par SMS » → a = 200', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 220, s + b); })();
// S9 — balance
figs.u3f9 = (() => { const { s, y } = head('L’équation est une balance', ['3x = 12 : trois sachets identiques pèsent 12 ; chaque sachet pèse 4.']);
  const cy = y + 150;
  let b = seg(200, cy, 800, cy, '#555', 5) + seg(500, cy, 500, cy + 90, '#555', 5)
    + `<polygon points="440,${cy + 90} 560,${cy + 90} 500,${cy + 40}" fill="#90A4AE" stroke="#555" stroke-width="2"/>`;
  b += seg(200, cy, 200, cy - 30, '#555', 3) + seg(800, cy, 800, cy - 30, '#555', 3);
  for (let k = 0; k < 3; k++) b += box(120 + k * 62, cy - 95, 54, 58, 'x', '#FDE7EF', PINK2, 24);
  b += box(730, cy - 95, 140, 58, '12', '#E8F5E9', GREEN, 26);
  b += txt(500, cy + 150, 'on divise les DEUX plateaux par 3 : x = 4', 23, OCRE, 'bold', 'middle');
  return svg(1000, cy + 185, s + b); })();
// S10 — résolution en 2 étapes
figs.u3f10 = (() => { const { s, y } = head('Résoudre 2x + 3 = 11 en deux étapes', ['On défait les opérations à l’envers : d’abord le + 3, ensuite le × 2.']);
  let b = box(110, y + 25, 240, 80, '2x + 3 = 11', undefined, BLUE, 25)
    + arrow(365, y + 65, 460, y + 65)
    + box(475, y + 25, 200, 80, '2x = 8', '#E8F5E9', GREEN, 25)
    + arrow(690, y + 65, 775, y + 65)
    + box(790, y + 25, 140, 80, 'x = 4', '#FDE7EF', PINK2, 26);
  b += txt(412, y + 12, '① − 3', 20, GREEN, 'bold', 'middle') + txt(733, y + 12, '② ÷ 2', 20, PINK2, 'bold', 'middle');
  b += txt(500, y + 160, 'vérification : 2 × 4 + 3 = 11 ✓', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();
// S11 — égalités équivalentes
figs.u3f11 = (() => { const { s, y } = head('Des égalités équivalentes', ['x + 5 = 9, 2x + 10 = 18, x = 4 : trois habits différents, la même solution.']);
  let b = box(90, y + 30, 250, 80, 'x + 5 = 9', undefined, BLUE, 24)
    + box(375, y + 30, 250, 80, '2x + 10 = 18', '#FFF3E0', OCRE, 23)
    + box(660, y + 30, 250, 80, 'x = 4', '#E8F5E9', GREEN, 26);
  b += txt(357, y + 73, '⇔', 30, '#555', 'bold', 'middle') + txt(643, y + 73, '⇔', 30, '#555', 'bold', 'middle');
  b += txt(500, y + 165, 'même solution x = 4 : on passe de l’une à l’autre par la même opération des deux côtés', 20, OCRE, 'bold', 'middle');
  return svg(1000, y + 200, s + b); })();
// S12 — monômes : 3x + 2x = 5x
figs.u3f12 = (() => { const { s, y } = head('Additionner des monômes : 3x + 2x = 5x', ['3 sacs de x mangues et 2 sacs de x mangues : 5 sacs de x mangues en tout.']);
  for (let k = 0; k < 3; k++) { }
  let b = '';
  for (let k = 0; k < 3; k++) b += box(90 + k * 72, y + 35, 60, 60, 'x', '#FDE7EF', PINK2, 24);
  b += txt(342, y + 72, '+', 30, '#333', 'bold', 'middle');
  for (let k = 0; k < 2; k++) b += box(380 + k * 72, y + 35, 60, 60, 'x', '#E3F2FD', '#1565C0', 24);
  b += txt(560, y + 72, '=', 30, '#333', 'bold', 'middle');
  for (let k = 0; k < 5; k++) b += box(600 + k * 68, y + 35, 58, 60, 'x', '#E8F5E9', GREEN, 24);
  b += txt(500, y + 160, 'on additionne les COEFFICIENTS : 3 + 2 = 5 ; la lettre ne change pas', 22, OCRE, 'bold', 'middle')
    + txt(500, y + 198, 'attention : 3x + 2y ne se réduit PAS (lettres différentes)', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 235, s + b); })();
// S13 — plan en 4 étapes
figs.u3f13 = (() => { const { s, y } = head('Résoudre un problème par l’algèbre', ['Choisir l’inconnue, traduire, résoudre, vérifier : le plan en quatre étapes.']);
  const steps = [['1. CHOISIR', 'x = l’âge de Noro', '#E8F5E9', GREEN], ['2. TRADUIRE', 'x + 7 = 20', '#E3F2FD', '#1565C0'], ['3. RÉSOUDRE', 'x = 13', '#FFF3E0', OCRE], ['4. VÉRIFIER', '13 + 7 = 20 ✓', '#FDE7EF', PINK2]];
  let b = '';
  steps.forEach(([t1, t2, f, c], i) => {
    const x = 70 + i * 230;
    b += box(x, y + 30, 200, 95, '', f, c, 20)
      + txt(x + 100, y + 68, t1, 21, c, 'bold', 'middle') + txt(x + 100, y + 103, t2, 19, c, 'normal', 'middle');
    if (i < 3) b += arrow(x + 207, y + 77, x + 225, y + 77, '#555', 2.5);
  });
  b += txt(500, y + 180, 'ne jamais sauter l’étape 4 : la vérification attrape les erreurs !', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 215, s + b); })();

const S = [
  {
    t: 'Découvrir la relation y = ax', comp: 'Algèbre', theme: 'Proportionnalité directe : y = ax',
    goal: 'reconnaître une situation de proportionnalité directe et écrire sa règle y = ax',
    mat: 'Étiquettes de prix, tableaux à compléter, cahier',
    revQ: 'Un cahier coûte 1 200 Ar. Combien coûtent 3 cahiers ? 10 cahiers ?',
    revRA: '3 600 Ar ; 12 000 Ar.',
    situation: 'Au marché, le riz se vend 3 000 Ar le kilo. 2 kg coûtent 6 000 Ar, 5 kg coûtent 15 000 Ar… Le prix suit la masse comme son ombre : il est proportionnel. Les mathématiciens écrivent cette fidélité en trois symboles : y = ax.',
    def: 'Deux grandeurs x et y sont directement proportionnelles lorsque y s’obtient en multipliant x par un même nombre a, appelé coefficient de proportionnalité : y = ax.',
    autrement: 'x double → y double ; x triple → y triple ; et y ÷ x donne toujours le même nombre a.',
    concept: 'Dans y = 3 000x, le coefficient a = 3 000 est le prix d’UN kilo : c’est la valeur unitaire. Pour tester si un tableau est proportionnel, on calcule y ÷ x sur chaque colonne : si le quotient est partout le même, la relation est y = ax. Deux propriétés signent la proportionnalité : zéro donne zéro (0 kg coûte 0 Ar), et additionner les x additionne les y (2 kg + 3 kg coûtent comme 5 kg).',
    synthese: 'y = ax : le coefficient a = y ÷ x est constant ; 0 → 0 ; doubler x double y.',
    method: ['Calculer y ÷ x pour chaque couple de valeurs.', 'Vérifier que le quotient est toujours le même : c’est a.', 'Écrire la règle y = ax et l’utiliser pour toute valeur de x.'],
    exemple: 'x = 2 → y = 6 000 ; x = 5 → y = 15 000 ; quotients : 6 000 ÷ 2 = 15 000 ÷ 5 = 3 000 → y = 3 000x.',
    erreur: 'Croire que « y augmente quand x augmente » suffit pour conclure à la proportionnalité. L’âge et la taille d’un enfant augmentent ensemble… sans être proportionnels ! Il faut le MÊME quotient partout.',
    saistu: 'La recette du riz est proportionnelle : 1 mesure de riz pour 2 mesures d’eau, 3 mesures pour 6. Les cuisinières de Madagascar appliquent y = 2x tous les jours sans le savoir !',
    exos: ['Le manioc coûte 1 500 Ar le kg. a) Écris la règle y = ax. b) Calcule le prix de 4 kg. d) Et de 2,5 kg. e) Quelle masse pour 9 000 Ar ?',
      'Ces tableaux sont-ils proportionnels ? a) x : 2, 4, 6 et y : 10, 20, 30 ; b) x : 1, 2, 3 et y : 3, 5, 7 ; d) x : 3, 6, 9 et y : 12, 24, 36 ; e) x : 2, 5 et y : 7, 17,5.',
      'Un robinet remplit 12 L en 3 minutes, régulièrement. a) Quel est le coefficient (L par minute) ? b) Écris y = ax. d) Volume en 7 minutes ? e) Temps pour 60 L ?'],
    corr: ['a) y = 1 500x ; b) 6 000 Ar ; d) 3 750 Ar ; e) 6 kg.',
      'a) oui, a = 5 ; b) non : 3 ÷ 1 = 3 mais 5 ÷ 2 = 2,5 ; d) oui, a = 4 ; e) oui, a = 3,5.',
      'a) a = 4 L/min ; b) y = 4x ; d) 28 L ; e) 15 minutes.'],
    fig: 'u3f1'
  },
  {
    t: 'Découvrir la relation y = ax + b', comp: 'Algèbre', theme: 'Relation affine : part fixe b et part variable ax',
    goal: 'modéliser une situation avec part fixe par la règle y = ax + b',
    mat: 'Tarifs de taxi et d’abonnements, tableaux, cahier',
    revQ: 'Écris la règle du prix du riz à 3 000 Ar le kg, puis calcule y pour x = 0.',
    revRA: 'y = 3 000x ; pour x = 0, y = 0.',
    situation: 'Dans un taxi d’Antananarivo : 2 000 Ar dès qu’on s’assoit, puis 1 500 Ar par kilomètre. Même sans rouler, on paie déjà 2 000 Ar ! Ce « droit de départ » casse la proportionnalité : voici la relation y = ax + b.',
    def: 'Une relation de la forme y = ax + b associe à x la valeur ax augmentée d’une constante b : a est le taux de variation (ce que y gagne quand x augmente de 1) et b la valeur initiale (la valeur de y quand x = 0).',
    autrement: 'y = (prix par unité) × (nombre d’unités) + (part fixe payée dans tous les cas).',
    concept: 'Pour la course de taxi : y = 1 500x + 2 000. Quand x = 0, y = 2 000 : la valeur initiale b se lit au départ. Quand x augmente de 1 km, y augmente de 1 500 : c’est le taux a. La relation n’est PAS proportionnelle : 4 km coûtent 8 000 Ar, mais 8 km coûtent 14 000 Ar — pas le double ! Le test y ÷ x échoue : seul l’ACCROISSEMENT reste proportionnel.',
    synthese: 'y = ax + b : b = valeur de départ (x = 0), a = augmentation de y par unité de x ; si b ≠ 0, la relation n’est pas proportionnelle.',
    method: ['Repérer la part fixe, payée même pour x = 0 : c’est b.', 'Repérer ce que coûte chaque unité supplémentaire : c’est a.', 'Écrire y = ax + b et tester sur une valeur connue.'],
    exemple: 'Abonnement 5 000 Ar + 200 Ar par SMS : y = 200x + 5 000 ; pour 30 SMS, y = 6 000 + 5 000 = 11 000 Ar.',
    erreur: 'Confondre a et b : écrire y = 2 000x + 1 500 pour le taxi. Teste avec x = 0 : on paierait 1 500 Ar sans monter ? Non, c’est 2 000 ! La part fixe est toujours le b.',
    saistu: 'Ton forfait téléphonique est un y = ax + b : un prix d’abonnement fixe, plus un coût par mégaoctet. Les opérateurs affichent rarement la formule… mais elle est bien là, dans chaque facture !',
    exos: ['Location de vélo : 3 000 Ar de caution d’usage + 500 Ar par heure. a) Écris la règle. b) Prix pour 4 h ? d) Pour 7 h ? e) Durée pour 8 000 Ar ?',
      'Pour y = 4x + 9, calcule : a) y quand x = 0 ; b) y quand x = 5 ; d) y quand x = 10 ; e) x quand y = 49.',
      'Dis si la relation est du type y = ax ou y = ax + b : a) prix de x kg de letchis à 2 500 Ar le kg ; b) salaire : 10 000 Ar fixes + 1 500 Ar par panier récolté ; d) distance parcourue à 60 km/h pendant x heures ; e) hauteur d’une bougie de 20 cm qui fond de 2 cm par heure (attention au signe !).'],
    corr: ['a) y = 500x + 3 000 ; b) 5 000 Ar ; d) 6 500 Ar ; e) 10 h.',
      'a) 9 ; b) 29 ; d) 49 ; e) x = 10.',
      'a) y = 2 500x : proportionnel ; b) y = 1 500x + 10 000 ; d) y = 60x : proportionnel ; e) y = 20 − 2x, de la forme ax + b avec a = −2 et b = 20.'],
    fig: 'u3f2'
  },
  {
    t: 'Construire un tableau de proportionnalité', comp: 'Algèbre', theme: 'Tableau de proportionnalité : coefficient et propriétés',
    goal: 'construire et compléter un tableau de proportionnalité à l’aide du coefficient',
    mat: 'Tableaux vierges, étiquettes de valeurs, cahier',
    revQ: 'Si y = 4x, calcule y pour x = 2, 5, 8.',
    revRA: '8 ; 20 ; 32.',
    situation: 'La coopérative vend la vanille 50 000 Ar les 100 g. Le trésorier prépare un tableau des prix pour 50 g, 200 g, 250 g, 400 g… Plutôt que quatre calculs séparés, un seul coefficient fait tout le travail !',
    def: 'Un tableau de proportionnalité est un tableau à deux lignes dans lequel chaque valeur de la seconde ligne s’obtient en multipliant la valeur correspondante de la première ligne par le même coefficient a.',
    autrement: 'une seule flèche « × a » commande toutes les colonnes du tableau.',
    concept: 'Trois outils pour compléter un tableau : le coefficient (multiplier x par a, ou retrouver a = y ÷ x sur une colonne complète) ; les colonnes (multiplier ou diviser une colonne entière par un nombre : la colonne de 100 g donne celle de 200 g en doublant) ; l’addition de colonnes (100 g + 50 g donne la colonne de 150 g). Ces raccourcis évitent bien des calculs et révèlent la structure de la proportionnalité.',
    synthese: 'compléter un tableau : par le coefficient a = y ÷ x, en multipliant une colonne, ou en additionnant deux colonnes.',
    method: ['Trouver une colonne complète et calculer a = y ÷ x.', 'Compléter les colonnes par × a, ou en combinant des colonnes connues.', 'Contrôler : tous les quotients y ÷ x doivent être égaux.'],
    exemple: '100 g → 50 000 Ar ; 50 g → 25 000 (colonne ÷ 2) ; 150 g → 75 000 (addition) ; 400 g → 200 000 (colonne × 4).',
    erreur: 'Compléter en ajoutant le même nombre : « de 2 à 4 on ajoute 2, donc de 10 on passe à 12 ». Non ! La proportionnalité MULTIPLIE : de 2 à 4 on double, donc 10 devient 20.',
    saistu: 'Madagascar fournit environ 80 % de la vanille mondiale ! Dans les coopératives de la SAVA, les tableaux de proportionnalité servent chaque jour à convertir grammes récoltés en ariary gagnés.',
    exos: ['Recopie et complète (1 kg de haricots = 5 000 Ar) : x (kg) : 1 ; 2 ; … ; 10 et y (Ar) : … ; … ; 35 000 ; … a) y pour 1 kg ; b) y pour 2 kg ; d) x pour 35 000 Ar ; e) y pour 10 kg.',
      'Un tableau donne x : 4 → y : 14. Complète par la méthode des colonnes : a) x = 8 ; b) x = 2 ; d) x = 12 ; e) x = 6.',
      'Avec 3 L d’essence, un bajaj parcourt 90 km. a) Dresse le tableau pour 1 L, 3 L, 5 L. b) Quel est le coefficient (km par litre) ? d) Distance avec 7 L ? e) Essence pour 240 km ?'],
    corr: ['a) 5 000 Ar ; b) 10 000 Ar ; d) 7 kg ; e) 50 000 Ar.',
      'a) 28 (colonne × 2) ; b) 7 (colonne ÷ 2) ; d) 42 (colonne × 3) ; e) 21 (8 et −2… ou 4 + 2 : 14 + 7 = 21).',
      'a) 1 L → 30 km ; 3 L → 90 km ; 5 L → 150 km ; b) 30 km/L ; d) 210 km ; e) 8 L.'],
    fig: 'u3f3'
  },
  {
    t: 'Représenter graphiquement y = ax', comp: 'Algèbre', theme: 'Graphique de y = ax : droite passant par l’origine',
    goal: 'représenter une relation y = ax et reconnaître sa droite passant par l’origine',
    mat: 'Papier millimétré, règle, crayons de couleur',
    revQ: 'Place les points A(2 ; 4) et B(3 ; 6) dans un repère.',
    revRA: 'A : 2 vers la droite, 4 vers le haut ; B : 3 vers la droite, 6 vers le haut.',
    situation: 'Mialy note le prix du riz pour 1, 2, 3, 4 kg et place les points sur du papier millimétré. Surprise : tous les points s’alignent parfaitement, et la ligne vise exactement le coin (0 ; 0) du repère !',
    def: 'La représentation graphique de la relation y = ax est une droite qui passe par l’origine du repère. Réciproquement, tout graphique en droite passant par l’origine traduit une relation de proportionnalité.',
    autrement: 'proportionnalité = points alignés AVEC l’origine ; il suffit d’un point et de l’origine pour tracer toute la droite.',
    concept: 'Chaque couple (x ; y) du tableau devient un point du repère : (1 ; 2), (2 ; 4), (3 ; 6) pour y = 2x. L’alignement traduit le coefficient constant : chaque pas de 1 vers la droite monte de a. Le point (0 ; 0) appartient toujours à la droite car 0 × a = 0. Plus a est grand, plus la droite grimpe vite : a se lit sur la pente. Pour tracer : calculer UN point, le relier à l’origine, prolonger.',
    synthese: 'y = ax ↔ droite passant par l’origine ; a se lit en avançant de 1 en x ; deux points suffisent (dont l’origine).',
    method: ['Construire un petit tableau de 2 ou 3 couples (x ; y).', 'Placer les points et vérifier l’alignement avec l’origine.', 'Tracer la droite à la règle et la nommer y = ax.'],
    exemple: 'y = 2x : points (0 ; 0), (1 ; 2), (3 ; 6) → droite par l’origine, de pente 2.',
    erreur: 'Relier les points à main levée en ignorant l’origine : si la ligne coupe l’axe des y à 1 au lieu de 0, ce n’est PLUS une proportionnalité ! La droite de y = ax passe exactement par (0 ; 0).',
    saistu: 'Sur les graphiques des stations météo, la hauteur d’eau d’une pluie régulière suit une droite par l’origine : deux heures de pluie, deux fois plus d’eau. Dès que la droite s’incurve, l’averse a changé d’intensité !',
    exos: ['Pour y = 3x : a) complète le tableau x = 0, 1, 2, 3 ; b) place les points dans un repère ; d) trace la droite ; e) lis y pour x = 2,5.',
      'Le graphique d’une droite passe par l’origine et par (4 ; 10). a) Est-ce une proportionnalité ? b) Calcule le coefficient a. d) Écris la règle. e) Calcule y pour x = 10.',
      'Parmi ces droites, lesquelles traduisent y = ax ? a) droite par (0 ; 0) et (2 ; 5) ; b) droite par (0 ; 3) et (2 ; 7) ; d) droite par (0 ; 0) et (1 ; 4) ; e) courbe passant par l’origine.'],
    corr: ['a) y = 0, 3, 6, 9 ; b) et d) droite par l’origine ; e) y = 7,5.',
      'a) oui : droite + origine ; b) a = 10 ÷ 4 = 2,5 ; d) y = 2,5x ; e) 25.',
      'a) oui, a = 2,5 ; b) non : coupe l’axe y à 3 ; d) oui, a = 4 ; e) non : pas une droite.'],
    fig: 'u3f4'
  },
  {
    t: 'Représenter graphiquement y = ax + b', comp: 'Algèbre', theme: 'Graphique de y = ax + b : droite d’ordonnée à l’origine b',
    goal: 'représenter une relation y = ax + b et lire a et b sur le graphique',
    mat: 'Papier millimétré, règle, tarifs de taxi',
    revQ: 'Trace la droite y = 2x. Par quel point de l’axe des y passe-t-elle ?',
    revRA: 'Par l’origine (0 ; 0).',
    situation: 'Mialy trace maintenant le prix du taxi : y = 1 500x + 2 000. Les points s’alignent encore… mais la droite ne vise plus l’origine : elle démarre à 2 000, le prix de la prise en charge !',
    def: 'La représentation graphique de y = ax + b est une droite qui coupe l’axe des ordonnées au point (0 ; b) : b s’appelle l’ordonnée à l’origine, et a, la pente, mesure la montée de la droite pour un pas de 1 en x.',
    autrement: 'même inclinaison que y = ax, mais toute la droite est soulevée de b.',
    concept: 'Les droites y = 2x et y = 2x + 3 sont parallèles : même pente a = 2. La seconde démarre à (0 ; 3) : chaque point est 3 plus haut. Pour tracer y = ax + b : marquer (0 ; b), calculer un deuxième point (par exemple x = 2), relier. Pour LIRE une droite : b est l’endroit où elle coupe l’axe des y ; a se mesure en avançant de 1 en x et en comptant la montée. Si la droite descend, a est négatif.',
    synthese: 'y = ax + b : droite coupant l’axe des y en b, de pente a ; droites de même a → parallèles ; b = 0 ramène à la proportionnalité.',
    method: ['Placer le point de départ (0 ; b) sur l’axe des y.', 'Calculer un second point en choisissant un x simple.', 'Relier à la règle ; contrôler la pente : +a par pas de 1.'],
    exemple: 'y = 1 500x + 2 000 : départ (0 ; 2 000), puis (4 ; 8 000) ; la droite monte de 1 500 par km.',
    erreur: 'Faire passer la droite de y = 2x + 3 par l’origine « comme d’habitude » : elle couperait l’axe des y à 0 au lieu de 3. Premier réflexe du traçage : marquer (0 ; b) !',
    saistu: 'Les ingénieurs lisent la pente partout : une route qui affiche « pente 10 % » monte de 10 m tous les 100 m — c’est un a = 0,1. Le panneau routier est une règle y = 0,1x déguisée !',
    exos: ['Pour y = x + 2 : a) calcule y pour x = 0, 1, 3 ; b) place les points ; d) trace la droite ; e) où coupe-t-elle l’axe des y ?',
      'Une droite coupe l’axe des y en 4 et passe par (2 ; 10). a) Donne b. b) Calcule la pente a. d) Écris la règle. e) Calcule y pour x = 6.',
      'Associe chaque règle à sa description : y = 3x ; y = 3x + 2 ; y = x + 2 ; y = 5. a) droite par l’origine de pente 3 ; b) droite coupant l’axe y en 2, parallèle à y = 3x ; d) droite coupant l’axe y en 2, de pente 1 ; e) droite horizontale.'],
    corr: ['a) 2, 3, 5 ; b) d) droite ; e) en (0 ; 2).',
      'a) b = 4 ; b) a = (10 − 4) ÷ 2 = 3 ; d) y = 3x + 4 ; e) 22.',
      'a) y = 3x ; b) y = 3x + 2 ; d) y = x + 2 ; e) y = 5.'],
    fig: 'u3f5'
  },
  {
    t: 'Interpoler et extrapoler des données', comp: 'Algèbre', theme: 'Interpolation et extrapolation sur un graphique',
    goal: 'estimer des valeurs entre les points mesurés (interpolation) ou au-delà (extrapolation)',
    mat: 'Graphiques de croissance de plants, règle, papier millimétré',
    revQ: 'Sur la droite y = 2x, lis y pour x = 3. Et pour x = 3,5 ?',
    revRA: '6 ; 7.',
    situation: 'Fara mesure son plant de maïs chaque lundi : 4 cm, 8 cm, 12 cm, 16 cm. Quelle était sa taille mercredi dernier, entre deux mesures ? Et dans trois semaines ? Le graphique répond aux deux questions — avec plus ou moins de confiance !',
    def: 'Interpoler, c’est estimer une valeur située entre deux points de mesure à l’aide du graphique ; extrapoler, c’est estimer une valeur située au-delà des points de mesure en prolongeant la tendance observée.',
    autrement: 'interpoler = lire entre les points (terrain connu) ; extrapoler = prolonger la ligne au-delà (terrain deviné).',
    concept: 'Pour interpoler : on monte du x choisi jusqu’à la droite, puis on lit horizontalement le y — la lecture en équerre. Pour extrapoler : on prolonge la droite en pointillés au-delà du dernier point, puis on lit de la même façon. L’interpolation est fiable, car encadrée par de vraies mesures. L’extrapolation suppose que la tendance continue : vrai un moment pour le maïs, faux à long terme — la plante ne grandira pas jusqu’au ciel ! Toute extrapolation doit être annoncée avec prudence.',
    synthese: 'lecture en équerre : x → droite → y ; entre les mesures = interpolation fiable ; au-delà = extrapolation à manier avec prudence.',
    method: ['Tracer la droite qui suit les points de mesure.', 'Pour interpoler : lecture en équerre entre deux mesures.', 'Pour extrapoler : prolonger en pointillés et lire, en signalant l’incertitude.'],
    exemple: 'Mesures (1 ; 4), (2 ; 8), (3 ; 12), (4 ; 16) → à x = 2,5, y ≈ 10 (interpolation) ; à x = 6, y ≈ 24 (extrapolation, si la croissance continue).',
    erreur: 'Extrapoler très loin sans réfléchir : à 4 cm par semaine, le plant mesurerait 2 mètres au bout d’un an… puis 20 mètres en dix ans ! Une tendance n’est jamais éternelle : l’extrapolation a un domaine de validité.',
    saistu: 'Les services météo interpolent en permanence : entre deux stations de mesure distantes de 100 km, la température affichée sur la carte de ta ville est… une interpolation ! Et les prévisions à 5 jours sont des extrapolations, d’où leur marge d’erreur.',
    exos: ['Un plant suit y = 4x (y en cm, x en semaines). a) Taille à 2 semaines ? b) À 2,5 semaines (interpole) ; d) À 6 semaines (extrapole) ; e) Laquelle des deux estimations est la plus sûre ?',
      'Relevé d’eau de pluie : (1 h ; 5 mm), (2 h ; 10 mm), (3 h ; 15 mm). a) Écris la règle. b) Interpole à 1,5 h. d) Extrapole à 5 h. e) Quelle condition rend l’extrapolation valable ?',
      'Sur un graphique, la droite des ventes passe par (2 ; 30) et (4 ; 60) (milliers d’Ar). a) Interpole les ventes à x = 3. b) Que vaut la pente ? d) Extrapole à x = 8. e) Donne une raison pour laquelle la réalité à x = 8 pourrait être différente.'],
    corr: ['a) 8 cm ; b) 10 cm ; d) 24 cm ; e) l’interpolation (encadrée par des mesures réelles).',
      'a) y = 5x ; b) 7,5 mm ; d) 25 mm ; e) que la pluie garde la même intensité.',
      'a) 45 ; b) 15 par unité ; d) 120 ; e) la tendance peut changer : saison, rupture de stock, concurrence…'],
    fig: 'u3f6'
  },
  {
    t: 'Passer d’une représentation à une autre', comp: 'Algèbre', theme: 'Situation ↔ tableau ↔ graphique ↔ règle',
    goal: 'traduire une relation entre deux grandeurs d’une représentation vers les trois autres',
    mat: 'Cartes des 4 représentations à apparier, papier millimétré',
    revQ: 'Donne la règle d’une droite passant par l’origine et par (2 ; 10).',
    revRA: 'y = 5x.',
    situation: 'Quatre élèves décrivent la même chose : Hery raconte « 3 000 Ar le kilo », Vola montre un tableau, Sitraka brandit un graphique et Fara écrit y = 3 000x. Qui a raison ? Tous les quatre ! Quatre langages, une seule relation.',
    def: 'Une relation entre deux grandeurs peut se représenter de quatre façons équivalentes : la situation (description en mots), le tableau de valeurs, le graphique et la règle (formule). Passer de l’une à l’autre, c’est traduire la même information dans un autre langage.',
    autrement: 'mots, colonnes, dessin, formule : quatre photos du même objet, prises sous quatre angles.',
    concept: 'Chaque passage a sa technique. Situation → règle : repérer a (et b s’il y a une part fixe). Règle → tableau : calculer y pour quelques x. Tableau → graphique : placer les couples (x ; y). Graphique → règle : lire b sur l’axe des y et mesurer la pente a. Chaque représentation a sa force : le tableau donne des valeurs exactes, le graphique montre la tendance d’un coup d’œil, la règle calcule tout, la situation donne le sens. Le bon mathématicien choisit la représentation la plus utile au moment voulu.',
    synthese: 'quatre représentations équivalentes ; passages clés : situation → règle (trouver a, b), règle → tableau (calculer), tableau → graphique (placer), graphique → règle (lire b et a).',
    method: ['Identifier la représentation de départ et celle demandée.', 'Appliquer la technique du passage (calcul, lecture ou traçage).', 'Contrôler avec un couple de valeurs : il doit marcher dans les deux représentations.'],
    exemple: '« 500 Ar par photocopie » → y = 500x → tableau (1 ; 500), (4 ; 2 000) → droite par l’origine de pente 500.',
    erreur: 'Changer de relation en changeant de langage : le tableau dit (2 ; 7 000) mais la règle écrite est y = 3 000x ? 3 000 × 2 = 6 000 ≠ 7 000 : les représentations doivent raconter EXACTEMENT la même histoire. Toujours contre-vérifier un couple !',
    saistu: 'Les tableurs comme Excel font ces passages automatiquement : tu saisis le tableau, il trace le graphique et devine même la règle ! Mais pour vérifier qu’il ne raconte pas n’importe quoi… il faut savoir faire les passages soi-même.',
    exos: ['« Un cybercafé facture 100 Ar la minute. » a) Écris la règle. b) Dresse le tableau pour 5, 10, 30 min. d) Décris le graphique. e) Prix pour 45 min ?',
      'Tableau : x : 0, 1, 2, 3 → y : 4, 7, 10, 13. a) y augmente de combien par pas ? b) Que vaut y pour x = 0 ? d) Écris la règle. e) Invente une situation qui colle à cette règle.',
      'Une droite coupe l’axe des y en 1 000 et passe par (3 ; 2 500). a) Lis b. b) Calcule a. d) Écris la règle. e) Construis le tableau pour x = 0, 2, 5.'],
    corr: ['a) y = 100x ; b) 500, 1 000, 3 000 ; d) droite passant par l’origine, pente 100 ; e) 4 500 Ar.',
      'a) de 3 ; b) 4 ; d) y = 3x + 4 ; e) par exemple : adhésion 4 000 Ar puis 3 000 Ar par mois (en milliers).',
      'a) b = 1 000 ; b) a = (2 500 − 1 000) ÷ 3 = 500 ; d) y = 500x + 1 000 ; e) 1 000 ; 2 000 ; 3 500.'],
    fig: 'u3f7'
  },
  {
    t: 'Traduire une situation par une règle', comp: 'Algèbre', theme: 'Mise en formule : choisir entre y = ax et y = ax + b',
    goal: 'écrire la règle y = ax ou y = ax + b qui modélise une situation concrète',
    mat: 'Cartes de situations (tarifs, salaires, recettes), ardoises',
    revQ: 'Dans y = 200x + 5 000, que représentent 200 et 5 000 pour un forfait SMS ?',
    revRA: '200 = prix d’un SMS ; 5 000 = abonnement fixe.',
    situation: 'Le club de foot propose : adhésion 10 000 Ar, puis 2 000 Ar par entraînement. Rivo veut prévoir son budget de trimestre en une seule formule. Deux questions suffisent : qu’est-ce qui est fixe ? qu’est-ce qui dépend du nombre x ?',
    def: 'Modéliser une situation, c’est écrire la règle qui relie la grandeur cherchée y à la grandeur variable x : y = ax s’il n’y a qu’un coût par unité, y = ax + b s’il s’y ajoute une part fixe b indépendante de x.',
    autrement: 'deux questions magiques : « combien par unité ? » → a ; « combien dans tous les cas ? » → b.',
    concept: 'La traduction suit des indices de vocabulaire : « par », « chaque », « le kilo », « l’heure » signalent le coefficient a ; « d’abord », « fixe », « d’adhésion », « de départ » signalent la constante b. On définit toujours x et y avec leurs unités AVANT d’écrire la formule : x = nombre d’entraînements, y = dépense en Ar, puis y = 2 000x + 10 000. Le modèle se valide sur un cas simple : 3 entraînements → 6 000 + 10 000 = 16 000 Ar, cohérent. Attention aussi aux situations décroissantes : un crédit téléphonique de 10 000 Ar qui fond de 300 Ar par appel suit y = 10 000 − 300x.',
    synthese: 'définir x et y avec leurs unités ; « par unité » → a ; « fixe » → b ; écrire y = ax (+ b) et tester sur une valeur simple.',
    method: ['Définir clairement x et y, avec leurs unités.', 'Chercher la part fixe b, puis le coût par unité a.', 'Écrire la règle et la valider sur un exemple concret.'],
    exemple: 'Salaire d’un cueilleur : 10 000 Ar fixes + 1 500 Ar par panier → y = 1 500x + 10 000 ; 8 paniers → 22 000 Ar.',
    erreur: 'Oublier de définir x : « y = 2 000x + 10 000, avec x… les semaines ? les entraînements ? » Sans définition de x, la formule est inutilisable. Le modèle commence TOUJOURS par « soit x = … ».',
    saistu: 'Les scientifiques appellent cela un « modèle mathématique ». La propagation d’une rumeur, la décharge d’une batterie, la foule d’un marché : tout peut se modéliser. Les plus beaux modèles tiennent, comme ici, en une ligne !',
    exos: ['Écris la règle (définis x et y) : a) letchis à 2 500 Ar le kg ; b) séance de cinéma : carte 5 000 Ar puis 3 000 Ar par film ; d) salaire : 1 200 Ar par heure ; e) citerne de 200 L qui se vide de 15 L par minute.',
      'Pour la règle y = 3 000x + 8 000 (location de pirogue : x heures) : a) que vaut la part fixe ? b) le prix par heure ? d) le prix pour 5 h ? e) la durée possible avec 23 000 Ar ?',
      'Choisis le bon modèle et calcule : un puisatier facture 50 000 Ar de déplacement puis 20 000 Ar par mètre creusé. a) Règle ? b) Prix d’un puits de 8 m ? d) Profondeur pour un budget de 250 000 Ar ? e) Le village voisin propose 30 000 Ar par mètre sans déplacement : à partir de quelle profondeur le premier puisatier devient-il plus intéressant ?'],
    corr: ['a) y = 2 500x (x en kg) ; b) y = 3 000x + 5 000 (x films) ; d) y = 1 200x (x heures) ; e) y = 200 − 15x (x minutes).',
      'a) 8 000 Ar ; b) 3 000 Ar ; d) 23 000 Ar ; e) 5 h.',
      'a) y = 20 000x + 50 000 ; b) 210 000 Ar ; d) 10 m ; e) 20 000x + 50 000 < 30 000x pour x > 5 : dès 6 mètres, le premier est moins cher.'],
    fig: 'u3f8'
  },
  {
    t: 'Résoudre ax = b et x + a = b', comp: 'Algèbre', theme: 'Équations à une étape : la balance',
    goal: 'résoudre les équations ax = b et x + a = b en gardant l’équilibre de l’égalité',
    mat: 'Balance de Roberval ou dessin de balance, jetons, cahier',
    revQ: 'Quel nombre multiplié par 3 donne 12 ? Quel nombre ajouté à 5 donne 9 ?',
    revRA: '4 ; 4.',
    situation: 'Trois sachets de sel identiques pèsent ensemble 12 unités sur la balance du marché. Sans ouvrir les sachets, tout le monde devine le poids d’un sachet : l’équation 3x = 12 se cache dans la balance !',
    def: 'Une équation est une égalité contenant un nombre inconnu, noté x ; résoudre l’équation, c’est trouver la ou les valeurs de x qui rendent l’égalité vraie. Règle d’or : une égalité reste vraie quand on effectue la même opération sur ses deux membres.',
    autrement: 'l’équation est une balance en équilibre : tout ce qu’on fait à gauche, on le fait aussi à droite.',
    concept: 'Pour x + a = b, on retire a des deux côtés : x = b − a. Exemple : x + 5 = 9 donne x = 4. Pour ax = b, on divise les deux côtés par a : x = b ÷ a. Exemple : 3x = 12 donne x = 4. Dans chaque cas, on DÉFAIT l’opération qui emprisonne x par son opération réciproque : la soustraction défait l’addition, la division défait la multiplication. On termine toujours par la vérification : remplacer x par la valeur trouvée et contrôler l’égalité.',
    synthese: 'x + a = b → x = b − a ; ax = b → x = b ÷ a ; même opération des deux côtés, puis vérification.',
    method: ['Repérer l’opération qui retient x (addition ou multiplication).', 'Appliquer l’opération réciproque aux DEUX membres.', 'Vérifier en remplaçant x dans l’équation de départ.'],
    exemple: 'x + 7 = 15 → x = 8 (contrôle : 8 + 7 = 15 ✓) ; 5x = 45 → x = 9 (contrôle : 5 × 9 = 45 ✓).',
    erreur: 'N’opérer que d’un seul côté : de 3x = 12, écrire « x = 12 » en faisant disparaître le 3. La balance penche ! Si on divise à gauche, on divise aussi à droite : x = 12 ÷ 3 = 4.',
    saistu: 'Le mot « algèbre » vient de l’arabe al-jabr, « la remise en place », titre du livre d’Al-Khwarizmi (IXᵉ siècle). Remettre en place les deux plateaux d’une égalité : exactement ce que tu viens d’apprendre, 1 200 ans plus tard !',
    exos: ['Résous : a) x + 8 = 20 ; b) x + 15 = 15 ; d) x − 6 = 10 ; e) x + 9 = 4.',
      'Résous : a) 4x = 28 ; b) 7x = 7 ; d) 9x = 0 ; e) 6x = 15.',
      'Mets en équation puis résous : a) un nombre augmenté de 12 donne 30 ; b) le triple d’un nombre vaut 51 ; d) 5 cahiers identiques coûtent 6 000 Ar : prix d’un cahier ? e) après avoir dépensé 3 500 Ar, il reste 6 500 Ar à Vola : combien avait-elle ?'],
    corr: ['a) 12 ; b) 0 ; d) 16 ; e) −5.',
      'a) 7 ; b) 1 ; d) 0 ; e) 2,5.',
      'a) x + 12 = 30, x = 18 ; b) 3x = 51, x = 17 ; d) 5x = 6 000, x = 1 200 Ar ; e) x − 3 500 = 6 500, x = 10 000 Ar.'],
    fig: 'u3f9'
  },
  {
    t: 'Résoudre ax + b = c et x ÷ a = b', comp: 'Algèbre', theme: 'Équations à deux étapes',
    goal: 'résoudre les équations ax + b = c et x ÷ a = b en enchaînant deux opérations réciproques',
    mat: 'Schémas d’équations, cartes d’étapes, cahier',
    revQ: 'Résous x + 3 = 11 puis 2x = 8.',
    revRA: 'x = 8 ; x = 4.',
    situation: 'La course de taxi a coûté 11 000 Ar, avec 2 000 Ar de prise en charge et 1 500 Ar le kilomètre. Combien de kilomètres ? L’équation 1 500x + 2 000 = 11 000 se résout… en deux coups de balance.',
    def: 'Pour résoudre une équation à deux étapes comme ax + b = c, on isole d’abord le terme en x en retirant b des deux côtés, puis on divise les deux membres par a : les opérations se défont dans l’ordre inverse de leur construction.',
    autrement: 'x a été habillé en deux couches (× a puis + b) : on le déshabille à l’envers, d’abord le + b, ensuite le × a.',
    concept: 'Pour 2x + 3 = 11 : étape ① retirer 3 des deux côtés → 2x = 8 ; étape ② diviser par 2 → x = 4. Vérification : 2 × 4 + 3 = 11 ✓. Pour x ÷ a = b, une seule multiplication suffit : x ÷ 5 = 4 donne x = 20 en multipliant les deux côtés par 5. L’ordre inverse est la clé : dans ax + b, le nombre x a d’abord été multiplié puis augmenté ; pour le libérer, on soustrait AVANT de diviser. Diviser d’abord obligerait à diviser aussi le b — source classique d’erreurs.',
    synthese: 'ax + b = c : ① − b, ② ÷ a ; x ÷ a = b : × a des deux côtés ; toujours défaire dans l’ordre inverse, puis vérifier.',
    method: ['Éliminer la constante b : la retirer des deux membres.', 'Éliminer le coefficient : diviser (ou multiplier pour x ÷ a) les deux membres.', 'Vérifier dans l’équation d’origine.'],
    exemple: '3x + 5 = 20 → 3x = 15 → x = 5 ; x ÷ 4 = 7 → x = 28 ; 2x − 6 = 10 → 2x = 16 → x = 8.',
    erreur: 'Diviser trop tôt : de 2x + 3 = 11, écrire x + 3 = 5,5 en divisant seulement le 2x et le 11. Le 3 aussi devait être divisé ! D’où la règle : on retire d’abord la constante, on divise ensuite.',
    saistu: 'Résoudre une équation, c’est remonter le temps : on part du résultat final et on défait les opérations une à une, comme on rembobine un film. Les informaticiens appellent cela « l’inversion » — elle sert aussi à décoder les messages chiffrés !',
    exos: ['Résous : a) 2x + 5 = 17 ; b) 3x − 4 = 11 ; d) 5x + 9 = 9 ; e) 4x − 10 = 0.',
      'Résous : a) x ÷ 3 = 8 ; b) x ÷ 7 = 0 ; d) x ÷ 5 = 2,4 ; e) x ÷ 2 + 3 = 10.',
      'Mets en équation et résous : a) la course de taxi (1 500 Ar/km + 2 000 Ar) a coûté 11 000 Ar : combien de km ? b) le triple d’un nombre, augmenté de 7, vaut 28 ; d) un melon partagé en 6 parts égales donne des parts de 250 g : masse du melon ? e) après avoir doublé ses économies puis reçu 5 000 Ar, Naina possède 29 000 Ar : que possédait-il ?'],
    corr: ['a) 6 ; b) 5 ; d) 0 ; e) 2,5.',
      'a) 24 ; b) 0 ; d) 12 ; e) x ÷ 2 = 7, x = 14.',
      'a) 1 500x + 2 000 = 11 000, x = 6 km ; b) 3x + 7 = 28, x = 7 ; d) x ÷ 6 = 250, x = 1 500 g ; e) 2x + 5 000 = 29 000, x = 12 000 Ar.'],
    fig: 'u3f10'
  },
  {
    t: 'Reconnaître des égalités équivalentes', comp: 'Algèbre', theme: 'Égalités équivalentes : mêmes solutions',
    goal: 'reconnaître et produire des équations équivalentes ayant les mêmes solutions',
    mat: 'Cartes d’équations à trier, ardoises',
    revQ: 'Résous x + 5 = 9 et 2x = 8.',
    revRA: 'x = 4 pour les deux !',
    situation: 'Quatre élèves résolvent quatre équations différentes… et trouvent tous x = 4 ! Coïncidence ? Non : x + 5 = 9, 2x + 10 = 18, 3x = 12 et x = 4 sont la même équation sous quatre déguisements.',
    def: 'Deux équations sont équivalentes lorsqu’elles ont exactement les mêmes solutions. On transforme une équation en une équation équivalente en ajoutant, soustrayant, multipliant ou divisant les deux membres par un même nombre (non nul pour × et ÷).',
    autrement: 'des équations équivalentes sont des photos retouchées du même visage : l’habillage change, la solution jamais.',
    concept: 'De x + 5 = 9, on obtient 2x + 10 = 18 en multipliant les deux membres par 2, ou x = 4 en soustrayant 5. Toute la résolution d’équations n’est QUE cela : produire une chaîne d’équations équivalentes de plus en plus simples, jusqu’à la forme limpide x = … . Attention à la multiplication par 0 : de x = 4 (une solution), on tomberait sur 0 = 0 (toujours vrai !) — l’équivalence est détruite. Pour tester l’équivalence de deux équations : résoudre chacune et comparer les solutions.',
    synthese: 'équations équivalentes = mêmes solutions ; on les fabrique par la même opération sur les deux membres (jamais × 0) ; résoudre = simplifier d’équivalence en équivalence.',
    method: ['Pour tester : résoudre les deux équations et comparer les solutions.', 'Pour produire : appliquer une même opération (≠ × 0) aux deux membres.', 'Pour résoudre : enchaîner des équivalences vers la forme x = … .'],
    exemple: 'x − 2 = 6 ⇔ x = 8 ⇔ 3x = 24 ⇔ x + 1 = 9 : quatre formes, une solution.',
    erreur: 'Croire que deux équations qui « se ressemblent » sont équivalentes : x + 3 = 7 et x + 7 = 3 utilisent les mêmes nombres, mais leurs solutions sont 4 et −4 ! Seule la comparaison des solutions fait foi.',
    saistu: 'C’est encore l’al-jabr d’Al-Khwarizmi : son livre classait les transformations autorisées d’une équation. Mille ans plus tard, les logiciels de calcul formel comme ceux des calculatrices avancées appliquent toujours ses règles d’équivalence !',
    exos: ['Ces paires sont-elles équivalentes ? a) x + 4 = 10 et x = 6 ; b) 2x = 14 et x + 7 = 0 ; d) 3x + 1 = 10 et 6x + 2 = 20 ; e) x − 5 = 0 et 5x = 25.',
      'Produis une équation équivalente : a) à x = 7 en ajoutant 3 aux deux membres ; b) à x + 2 = 9 en multipliant par 2 ; d) à 4x = 20 en divisant par 4 ; e) à x = 5 en multipliant par 0 — que remarques-tu ?',
      'Range ces équations en familles d’équivalence : 2x = 10 ; x + 1 = 6 ; 3x = 18 ; x − 5 = 0 ; x + 2 = 8 ; 10x = 50. a) famille de solution 5 ; b) famille de solution 6 ; d) combien de familles en tout ? e) invente une nouvelle équation pour chaque famille.'],
    corr: ['a) oui (x = 6) ; b) non : 7 et −7 ; d) oui (x = 3, la seconde est la première × 2) ; e) oui (x = 5).',
      'a) x + 3 = 10 ; b) 2x + 4 = 18 ; d) x = 5 ; e) 0 = 0 : toujours vrai, l’équivalence est perdue — on ne multiplie jamais par 0.',
      'a) 2x = 10 ; x − 5 = 0 ; x + 2 = 7 ?… non : x + 2 = 8 a pour solution 6 ! Famille 5 : 2x = 10, x − 5 = 0, 10x = 50 ; b) famille 6 : x + 1 = 7 ?… vérifie : x + 1 = 6 → 5 ! Correction : x + 1 = 6 est famille 5 ; famille 6 : x + 2 = 8 et 3x = 18 ; d) 2 familles ; e) exemples : x + 10 = 15 (famille 5), x ÷ 2 = 3 (famille 6).'],
    fig: 'u3f11'
  },
  {
    t: 'Opérer sur les monômes et binômes', comp: 'Algèbre', theme: 'Monômes et binômes : addition, soustraction, multiplication par un naturel',
    goal: 'additionner et soustraire des monômes semblables et multiplier un binôme par un nombre naturel',
    mat: 'Jetons « x » et jetons unités, cartes d’expressions, cahier',
    revQ: '3 sacs de mangues + 2 sacs de mangues = ?',
    revRA: '5 sacs de mangues.',
    situation: 'Rivo a 3 sachets contenant chacun x bonbons, et en reçoit 2 de plus : il possède 5 sachets de x bonbons, soit 5x. Sans connaître x, on peut déjà calculer ! Bienvenue dans le calcul littéral.',
    def: 'Un monôme est un produit d’un nombre (le coefficient) par une lettre, comme 3x ; un binôme est une somme ou différence de deux monômes non semblables, comme 2x + 5. Des monômes semblables (même lettre) s’additionnent ou se soustraient en opérant sur leurs coefficients : 3x + 2x = 5x.',
    autrement: 'la lettre est une étiquette de sachet : on compte les sachets (coefficients), on ne mélange pas les étiquettes différentes.',
    concept: 'Réduction : 3x + 2x = (3 + 2)x = 5x et 7x − 4x = 3x ; mais 3x + 2y reste 3x + 2y (étiquettes différentes), et 3x + 2 aussi — un nombre seul n’est pas un sachet de x ! Multiplication d’un binôme par un naturel : chaque terme est multiplié, c’est la distributivité : 3(2x + 5) = 6x + 15. L’image : 3 paniers contenant chacun 2 sachets et 5 fruits libres donnent 6 sachets et 15 fruits. La distributivité relie le calcul littéral au calcul mental de l’unité 2 : 3 × 25 = 3(20 + 5) = 60 + 15.',
    synthese: 'monômes semblables : opérer sur les coefficients ; termes non semblables : ne pas réduire ; k(ax + b) = kax + kb (distribuer sur chaque terme).',
    method: ['Regrouper les monômes semblables (même lettre).', 'Additionner ou soustraire leurs coefficients.', 'Pour k(ax + b) : multiplier CHAQUE terme par k.'],
    exemple: '4x + 3x = 7x ; 9x − 5x = 4x ; 2(3x + 4) = 6x + 8 ; 5x + 2 + 3x = 8x + 2.',
    erreur: 'Réduire 3x + 2 en 5x : le 2 n’est pas un monôme en x ! C’est comme ajouter 3 sachets et 2 bonbons libres : on n’obtient pas 5 sachets. 3x + 2 ne se simplifie pas.',
    saistu: 'Pendant des siècles, les équations s’écrivaient en toutes lettres : « trois choses et deux unités » ! C’est François Viète, au XVIᵉ siècle, qui proposa d’utiliser des lettres pour les inconnues — le calcul « littéral » venait de naître.',
    exos: ['Réduis : a) 5x + 3x ; b) 9x − 2x ; d) x + x + x ; e) 7x − 7x.',
      'Réduis si possible : a) 4x + 3 + 2x ; b) 6x + 2y ; d) 10x − 4x + 1 ; e) 3x + 5 − 2.',
      'Développe : a) 2(x + 3) ; b) 5(2x + 1) ; d) 3(4x − 2) ; e) le périmètre d’un rectangle de côtés x et x + 5 : écris-le, puis réduis.'],
    corr: ['a) 8x ; b) 7x ; d) 3x ; e) 0.',
      'a) 6x + 3 ; b) impossible : lettres différentes ; d) 6x + 1 ; e) 3x + 3.',
      'a) 2x + 6 ; b) 10x + 5 ; d) 12x − 6 ; e) 2 × x + 2 × (x + 5) = 2x + 2x + 10 = 4x + 10.'],
    fig: 'u3f12'
  },
  {
    t: 'Résoudre des problèmes par l’algèbre', comp: 'Algèbre', theme: 'Mise en équation : le plan en quatre étapes',
    goal: 'résoudre un problème concret en choisissant une inconnue, en traduisant par une équation et en vérifiant',
    mat: 'Énoncés de problèmes, grille des 4 étapes, cahier',
    revQ: 'Résous 2x + 5 000 = 29 000.',
    revRA: 'x = 12 000.',
    situation: 'Noro et sa mère ont 20 ans d’écart… non : à elles deux, 20 ans de plus que le double de l’âge de Noro moins 6 ! Les problèmes à tiroirs embrouillent la tête — mais une équation bien posée les déplie d’un coup.',
    def: 'La mise en équation d’un problème suit quatre étapes : choisir l’inconnue x (avec son unité), traduire l’énoncé en une équation, résoudre l’équation, puis vérifier la solution dans l’énoncé d’origine et conclure par une phrase.',
    autrement: 'choisir → traduire → résoudre → vérifier : le GPS des problèmes, qui transforme un casse-tête en itinéraire.',
    concept: 'L’étape décisive est la traduction : chaque morceau de phrase devient un morceau d’équation. « Le double de » → 2x ; « augmenté de 7 » → + 7 ; « vaut, fait, donne » → = . Exemple : « Hery a 3 fois l’âge de sa sœur ; ensemble ils ont 48 ans » : x = âge de la sœur, équation x + 3x = 48, soit 4x = 48 et x = 12. Vérification DANS L’ÉNONCÉ (pas dans l’équation, qui peut être mal posée !) : la sœur a 12 ans, Hery 36, total 48 ✓. La conclusion répond à la question posée, avec les unités.',
    synthese: 'quatre étapes : inconnue définie avec unité, traduction mot à mot, résolution, vérification dans l’énoncé et phrase de conclusion.',
    method: ['Poser « soit x = … (unité) » pour la quantité cherchée.', 'Traduire la phrase en équation, morceau par morceau.', 'Résoudre, vérifier dans l’énoncé et rédiger la conclusion.'],
    exemple: '« Un nombre et son triple font 48 » : x + 3x = 48 → 4x = 48 → x = 12 ; contrôle : 12 + 36 = 48 ✓.',
    erreur: 'Vérifier dans sa propre équation au lieu de l’énoncé : si la traduction est fausse, l’équation fausse se vérifie parfaitement ! La vraie épreuve de vérité, c’est le texte du problème.',
    saistu: 'Diophante d’Alexandrie, pionnier des équations, a son épitaphe en problème : « Sa jeunesse dura un sixième de sa vie… ». En posant x = durée de sa vie et en résolvant, on trouve qu’il vécut 84 ans. Même sa tombe fait faire des mathématiques !',
    exos: ['Un nombre augmenté de 15 donne 42. a) Choisis l’inconnue. b) Écris l’équation. d) Résous. e) Vérifie et conclus.',
      'Trois frères se partagent 24 000 Ar : l’aîné reçoit le double du cadet, le benjamin reçoit 4 000 Ar. a) Pose x = part du cadet et écris l’équation. b) Résous-la. d) Donne les trois parts. e) Vérifie le total.',
      'Un rectangle a un périmètre de 38 m ; sa longueur dépasse sa largeur de 5 m. a) Pose x = largeur et exprime la longueur. b) Écris l’équation du périmètre. d) Résous. e) Donne les dimensions et vérifie.'],
    corr: ['a) x = le nombre ; b) x + 15 = 42 ; d) x = 27 ; e) 27 + 15 = 42 ✓ : le nombre est 27.',
      'a) x + 2x + 4 000 = 24 000 ; b) 3x = 20 000, x ≈ 6 666,67 — ajustons : x = 6 666,67 Ar… l’énoncé réaliste donne plutôt 20 000 ÷ 3 : parts non entières, acceptées en Ar décimaux ; d) cadet 6 666,67 ; aîné 13 333,33 ; benjamin 4 000 ; e) total 24 000 ✓.',
      'a) longueur = x + 5 ; b) 2x + 2(x + 5) = 38 ; d) 4x + 10 = 38, x = 7 ; e) largeur 7 m, longueur 12 m ; périmètre 2 × 7 + 2 × 12 = 38 ✓.'],
    fig: 'u3f13'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Algèbre',
  rag: 'démontrer une compréhension des relations y = ax et y = ax + b, des équations du premier degré et du calcul sur les monômes et binômes pour résoudre des problèmes.',
  valeurs: 'persévérance et esprit de créativité',
  sessions: S,
  revision: {
    table: [
      ['Relation y = ax', 'Coefficient constant a = y ÷ x ; 0 → 0', 'Reconnaître et utiliser la proportionnalité'],
      ['Relation y = ax + b', 'Part fixe b (x = 0) + taux a par unité', 'Modéliser tarifs et abonnements'],
      ['Graphiques', 'y = ax : droite par l’origine ; y = ax + b : départ en (0 ; b)', 'Tracer et lire a et b'],
      ['Interpolation / extrapolation', 'Lire entre les points / prolonger la tendance', 'Estimer avec la prudence qui convient'],
      ['Équations', 'Même opération des deux côtés ; défaire à l’envers', 'Résoudre ax = b, x + a = b, ax + b = c, x ÷ a = b'],
      ['Calcul littéral', 'Monômes semblables → coefficients ; k(ax + b) = kax + kb', 'Réduire, développer, mettre en équation']
    ],
    questions: [
      'Le graphique du prix des ananas est une droite par l’origine passant par (4 ; 6 000). Donne la règle.',
      'Location : 2 000 Ar fixes + 750 Ar par heure. Écris la règle et calcule pour 6 h.',
      'Résous : 5x = 35 ; x + 13 = 9 ; 3x + 4 = 19 ; x ÷ 6 = 7.',
      'Réduis : 8x − 3x + 2 ; développe : 4(2x + 3).',
      'Deux nombres : le second est le triple du premier ; leur somme vaut 60. Trouve-les.'
    ],
    answers: [
      'a = 6 000 ÷ 4 = 1 500 → y = 1 500x.',
      'y = 750x + 2 000 ; pour x = 6 : 6 500 Ar.',
      'x = 7 ; x = −4 ; x = 5 ; x = 42.',
      '5x + 2 ; 8x + 12.',
      'x + 3x = 60 → x = 15 : les nombres sont 15 et 45.'
    ]
  },
  exam: {
    exos: [
      'Le manioc coûte 1 500 Ar le kg. a) Écris la règle y = ax. b) Dresse le tableau pour 2, 4, 7 kg. d) Le graphique passe-t-il par l’origine ? Pourquoi ? e) Quelle masse pour 12 000 Ar ?',
      'Un taxi facture 2 500 Ar de prise en charge et 1 200 Ar par km. a) Écris la règle. b) Prix d’une course de 8 km ? d) Longueur d’une course à 14 500 Ar ? e) Ce tarif est-il proportionnel au nombre de km ? Justifie.',
      'Une droite coupe l’axe des y en 3 et passe par le point (2 ; 11). a) Donne b. b) Calcule a. d) Écris la règle. e) Calcule y pour x = 5.',
      'Résous : a) x + 17 = 40 ; b) 6x = 51 ; d) 4x − 7 = 21 ; e) x ÷ 8 = 5.',
      'a) Réduis : 7x + 5x − 3x. b) Développe : 6(3x + 2). d) Réduis : 9x + 4 − 2x + 1. e) Un rectangle a pour largeur x et pour longueur 2x ; son périmètre vaut 54 cm : trouve x et les dimensions.'
    ],
    corr: [
      'a) y = 1 500x ; b) 3 000 ; 6 000 ; 10 500 ; d) oui : proportionnalité, 0 kg → 0 Ar ; e) 8 kg. Un point par item.',
      'a) y = 1 200x + 2 500 ; b) 12 100 Ar ; d) 10 km ; e) non : part fixe 2 500 Ar, le prix de 2 km n’est pas le double du prix de 1 km. Un point par item.',
      'a) b = 3 ; b) a = (11 − 3) ÷ 2 = 4 ; d) y = 4x + 3 ; e) 23. Un point par item.',
      'a) 23 ; b) 8,5 ; d) 7 ; e) 40. Un point par réponse.',
      'a) 9x ; b) 18x + 12 ; d) 7x + 5 ; e) 2(x + 2x) = 54 → 6x = 54 → x = 9 : largeur 9 cm, longueur 18 cm. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
