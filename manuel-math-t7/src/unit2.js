// UNITÉ 2 — OPÉRATION (PE T7) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, bar, txt, nline, dot, tableEl, box, arrow, seg, grid100, PINK2, GREEN, BLUE, OCRE, PINK } = L;

const figs = {};
// S1 — 2^3 = 8
figs.u2f1 = (() => { const { s, y } = head('Comprendre la puissance d’un nombre', ['2³ = 2 × 2 × 2 = 8 : trois facteurs tous égaux à 2.']);
  let b = box(70, y + 20, 290, 95, '2 × 2 × 2', undefined, BLUE, 32) + arrow(375, y + 68, 460, y + 68) + box(475, y + 20, 130, 95, '2³', '#FDE7EF', PINK2, 36) + arrow(620, y + 68, 700, y + 68) + box(715, y + 20, 130, 95, '8', '#E8F5E9', GREEN, 36)
    + txt(540, y + 160, 'exposant 3 = nombre de facteurs', 23, GREEN, 'normal', 'middle');
  return svg(1000, y + 190, s + b); })();
// S2 — (0,5)^2 et (1,2)^2
figs.u2f2 = (() => { const { s, y } = head('Puissances d’un nombre décimal', ['(0,5)² = 0,5 × 0,5 = 0,25 et (1,2)² = 1,2 × 1,2 = 1,44.']);
  let b = box(80, y + 20, 390, 95, '(0,5)² = 0,25', undefined, BLUE, 30) + box(530, y + 20, 390, 95, '(1,2)² = 1,44', undefined, BLUE, 30)
    + txt(275, y + 160, 'plus petit que 0,5', 23, PINK2, 'bold', 'middle') + txt(725, y + 160, 'plus grand que 1,2', 23, GREEN, 'bold', 'middle');
  return svg(1000, y + 190, s + b); })();
// S3 — escalier des puissances de 10
figs.u2f3 = (() => { const { s, y } = head('Les puissances de 10', ['10¹ = 10, 10² = 100, 10³ = 1 000 : chaque marche multiplie par 10.']);
  const steps = [['10¹', '10'], ['10²', '100'], ['10³', '1 000'], ['10⁴', '10 000']];
  let b = '';
  steps.forEach((st, i) => {
    const x = 80 + i * 215, h = 85 + i * 55, yy = y + 285 - h;
    b += `<rect x="${x}" y="${yy}" width="195" height="${h}" fill="${i % 2 ? '#FDE7EF' : '#E8F5E9'}" stroke="${i % 2 ? PINK2 : GREEN}" stroke-width="3"/>`
      + txt(x + 97, yy + 38, st[0], 30, i % 2 ? PINK2 : GREEN, 'bold', 'middle') + txt(x + 97, yy + 70, '= ' + st[1], 23, '#333', 'normal', 'middle');
  });
  b += arrow(180, y + 325, 880, y + 325, OCRE) + txt(530, y + 360, '× 10 à chaque marche', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 390, s + b); })();
// S4 — produit de puissances
figs.u2f4 = (() => { const { s, y } = head('Produit de puissances de même base', ['2³ × 2² = (2 × 2 × 2) × (2 × 2) = 2⁵ = 32.']);
  let b = box(70, y + 20, 270, 90, '2 × 2 × 2', undefined, BLUE, 28) + txt(355, y + 75, '×', 32, '#222', 'bold') + box(385, y + 20, 200, 90, '2 × 2', undefined, BLUE, 28)
    + txt(610, y + 75, '=', 32, '#222', 'bold') + box(645, y + 20, 160, 90, '2⁵', '#FDE7EF', PINK2, 34)
    + txt(205, y + 145, '3 facteurs', 22, GREEN, 'normal', 'middle') + txt(485, y + 145, '2 facteurs', 22, GREEN, 'normal', 'middle') + txt(725, y + 145, '3 + 2 = 5 facteurs', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 180, s + b); })();
// S5 — trois règles
figs.u2f5 = (() => { const { s, y } = head('Propriétés des puissances', ['n et m sont des entiers positifs non nuls.']);
  let b = box(80, y + 15, 840, 80, 'aⁿ × aᵐ = aⁿ⁺ᵐ    (2³ × 2² = 2⁵)', '#E8F5E9', GREEN, 28)
    + box(80, y + 115, 840, 80, '(aⁿ)ᵐ = aⁿˣᵐ    ((2³)² = 2⁶)', '#E3F2FD', '#1565C0', 28)
    + box(80, y + 215, 840, 80, 'aⁿ × bⁿ = (a × b)ⁿ    (2³ × 5³ = 10³ = 1 000)', '#FDE7EF', PINK2, 28);
  return svg(1000, y + 330, s + b); })();
// S6 — +3 puis −5 sur la droite
figs.u2f6 = (() => { const { s, y } = head('La règle des signes pour l’addition', ['Partir de 0, avancer de +3, reculer de 5 : (+3) + (−5) = −2.']);
  const lab = ['−4', '−3', '−2', '−1', '0', '+1', '+2', '+3', '+4'];
  const pos = v => 80 + (v + 4) * 105;
  let b = nline(80, y + 110, 840, 8, lab);
  b += arrow(pos(0), y + 60, pos(3), y + 60, GREEN) + txt((pos(0) + pos(3)) / 2, y + 42, '+3', 25, GREEN, 'bold', 'middle');
  b += arrow(pos(3), y + 20, pos(-2), y + 20, PINK2) + txt((pos(3) + pos(-2)) / 2, y + 5, '−5', 25, PINK2, 'bold', 'middle');
  b += dot(pos(-2), y + 110, 10, OCRE) + txt(pos(-2), y + 190, 'arrivée : −2', 24, OCRE, 'bold', 'middle');
  return svg(1000, y + 215, s + b); })();
// S7 — jetons bicolores
figs.u2f7 = (() => { const { s, y } = head('Additionner des entiers relatifs', ['(+7) + (−4) = +3 : chaque paire (+1, −1) s’annule, il reste 3 jetons positifs.']);
  let b = '';
  for (let i = 0; i < 7; i++) b += `<circle cx="${110 + i * 75}" cy="${y + 45}" r="26" fill="#C8E6C9" stroke="${GREEN}" stroke-width="3"/>` + txt(110 + i * 75, y + 54, '+1', 21, GREEN, 'bold', 'middle');
  for (let i = 0; i < 4; i++) b += `<circle cx="${110 + i * 75}" cy="${y + 125}" r="26" fill="#F8BBD0" stroke="${PINK2}" stroke-width="3"/>` + txt(110 + i * 75, y + 134, '−1', 21, PINK2, 'bold', 'middle');
  for (let i = 0; i < 4; i++) b += seg(110 + i * 75, y + 73, 110 + i * 75, y + 97, '#999', 2.5, '6,5');
  b += `<rect x="${110 + 4 * 75 - 40}" y="${y + 12}" width="${3 * 75 + 55}" height="66" rx="12" fill="none" stroke="${OCRE}" stroke-width="3" stroke-dasharray="8,6"/>`;
  b += txt(110 + 5 * 75 + 40, y + 125, 'reste : +3', 26, OCRE, 'bold', 'middle');
  return svg(1000, y + 180, s + b); })();
// S8 — décimaux relatifs sur droite
figs.u2f8 = (() => { const { s, y } = head('Additionner des décimaux relatifs', ['(−2,5) + (+1,3) = −1,2 : on recule de 2,5 puis on avance de 1,3.']);
  const lab = ['−3', null, '−2', null, '−1', null, '0', null, '+1'];
  const pos = v => 80 + (v + 3) * 210;
  let b = nline(80, y + 100, 840, 8, lab);
  b += arrow(pos(0), y + 55, pos(-2.5), y + 55, PINK2) + txt(pos(0) - 40, y + 44, '−2,5', 24, PINK2, 'bold', 'middle');
  b += arrow(pos(-2.5), y + 15, pos(-1.2), y + 15, GREEN) + txt((pos(-2.5) + pos(-1.2)) / 2, y + 2, '+1,3', 24, GREEN, 'bold', 'middle');
  b += dot(pos(-1.2), y + 100, 10, OCRE) + txt(pos(-1.2), y + 180, '−1,2', 25, OCRE, 'bold', 'middle');
  return svg(1000, y + 210, s + b); })();
// S9 — table des signes
figs.u2f9 = (() => { const { s, y } = head('La règle des signes pour la multiplication', ['Même signe : produit positif. Signes contraires : produit négatif.']);
  const data = [['×', 'facteur +', 'facteur −'], ['facteur +', '+', '−'], ['facteur −', '−', '+']];
  return svg(1000, y + 280, s + tableEl(180, y + 20, [220, 220, 220], 75, data)); })();
// S10 — regroupement astucieux
figs.u2f10 = (() => { const { s, y } = head('Chaîne d’opérations sans parenthèses', ['2,5 + 7,8 + 7,5 = (2,5 + 7,5) + 7,8 = 10 + 7,8 = 17,8.']);
  let b = box(80, y + 20, 340, 90, '2,5 + 7,8 + 7,5', undefined, BLUE, 27)
    + arrow(435, y + 72, 550, y + 72) + txt(492, y + 48, 'regrouper', 19, GREEN, 'bold', 'middle')
    + box(565, y + 20, 240, 90, '10 + 7,8', '#E8F5E9', GREEN, 28)
    + txt(865, y + 75, '= 17,8', 30, PINK2, 'bold');
  return svg(1000, y + 150, s + b); })();
// S11 — étapes avec parenthèses
figs.u2f11 = (() => { const { s, y } = head('Chaîne d’opérations avec parenthèses', ['5 × (7 − 3) + 4 : parenthèses d’abord, puis multiplication, puis addition.']);
  let b = box(80, y + 15, 340, 75, '5 × (7 − 3) + 4', undefined, BLUE, 26) + txt(460, y + 60, '① 7 − 3 = 4', 24, GREEN, 'bold')
    + box(80, y + 110, 340, 75, '5 × 4 + 4', undefined, BLUE, 26) + txt(460, y + 155, '② 5 × 4 = 20', 24, GREEN, 'bold')
    + box(80, y + 205, 340, 75, '20 + 4 = 24', '#FDE7EF', PINK2, 26) + txt(460, y + 250, '③ addition finale', 24, PINK2, 'bold');
  return svg(1000, y + 310, s + b); })();
// S12 — 0,75 = 75/100 = 3/4
figs.u2f12 = (() => { const { s, y } = head('Écritures fractionnaire et décimale', ['75 cases sur 100 : 0,75 = 75/100 = 3/4.']);
  let b = grid100(120, y + 15, 36, 75) + txt(300, y + 420, '75 % du carré', 24, PINK2, 'bold', 'middle');
  b += box(560, y + 90, 360, 80, '0,75 = 75/100', '#E8F5E9', GREEN, 28) + box(560, y + 200, 360, 80, '75/100 = 3/4', '#FDE7EF', PINK2, 28);
  return svg(1000, y + 450, s + b); })();
// S13 — encadrement 17/7
figs.u2f13 = (() => { const { s, y } = head('Encadrer une fraction', ['17/7 = 2,428… donc 2,4 &lt; 17/7 &lt; 2,5.']);
  const lab = ['2,0', '2,1', '2,2', '2,3', '2,4', '2,5', '2,6', '2,7', '2,8', '2,9', '3,0'];
  const pos = v => 80 + (v - 2) * 840;
  let b = nline(80, y + 70, 840, 10, lab);
  b += dot(pos(2.428), y + 70, 10) + txt(pos(2.428), y + 38, '17/7', 26, PINK2, 'bold', 'middle');
  b += txt(pos(2.2), y + 155, 'par défaut : 2,4', 23, GREEN, 'bold', 'middle') + txt(pos(2.75), y + 155, 'par excès : 2,5', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();

const S = [
  {
    t: 'Comprendre la puissance d’un nombre', comp: 'Opération', theme: 'Illustration de la puissance entière d’un nombre',
    goal: 'écrire et calculer la puissance d’un nombre à partir d’un produit de facteurs égaux',
    mat: 'Tableau, cahier, ardoises, tableau de puissances, jetons',
    revQ: 'Sur un plan au 1/100, que représente une longueur de 3 cm ?',
    revRA: '3 × 100 = 300 cm = 3 m dans la réalité.',
    situation: 'Une rumeur se répand : une personne prévient 2 amis, chacun prévient 2 amis, et ainsi de suite. Après 3 étapes : 2 × 2 × 2 = 8 personnes. Comment écrire ce produit plus vite ?',
    def: 'La puissance n-ième d’un nombre a, notée aⁿ, est le produit de n facteurs tous égaux à a. Le nombre a est la base et n est l’exposant.',
    autrement: 'aⁿ est une multiplication répétée : 2³ = 2 × 2 × 2 = 8. L’exposant compte combien de fois la base apparaît.',
    concept: 'L’écriture 2³ se lit « 2 puissance 3 » ou « 2 au cube » ; 5² se lit « 5 au carré ». Par convention, a¹ = a. L’exposant indique le nombre de facteurs : 3⁴ = 3 × 3 × 3 × 3 = 81. La puissance raccourcit l’écriture des produits répétés.',
    synthese: 'aⁿ désigne le produit de n facteurs égaux à a : la base est le facteur répété et l’exposant compte les facteurs.',
    method: ['Repérer le facteur répété (la base).', 'Compter le nombre de facteurs (l’exposant).', 'Écrire aⁿ, puis calculer le produit étape par étape.'],
    exemple: '2³ = 2 × 2 × 2 = 8 ; 5² = 5 × 5 = 25 ; 3⁴ = 81.',
    erreur: 'Confondre 2³ avec 2 × 3 : 2³ = 8 alors que 2 × 3 = 6. L’exposant n’est pas un facteur !',
    saistu: 'Une vieille légende indienne raconte qu’un sage demanda au roi 1 grain de riz sur la première case d’un échiquier, puis le double sur chaque case suivante : la dernière case exigeait 2⁶³ grains, plus de riz que n’en produit la Terre entière !',
    exos: ['Écris sous forme de puissance : a) 3 × 3 ; b) 5 × 5 × 5 ; d) 2 × 2 × 2 × 2 ; e) 7 × 7 × 7 × 7 × 7.',
      'Calcule : a) 3² ; b) 2⁴ ; d) 5³ ; e) 10².',
      'Écris sous forme de produit puis calcule : a) 4² ; b) 2⁵ ; d) 3³ ; e) 6².'],
    corr: ['a) 3² ; b) 5³ ; d) 2⁴ ; e) 7⁵.',
      'a) 9 ; b) 16 ; d) 125 ; e) 100.',
      'a) 4 × 4 = 16 ; b) 2 × 2 × 2 × 2 × 2 = 32 ; d) 3 × 3 × 3 = 27 ; e) 6 × 6 = 36.'],
    fig: 'u2f1'
  },
  {
    t: 'Calculer les puissances d’un nombre décimal', comp: 'Opération', theme: 'Calcul avec les puissances entières d’un nombre décimal',
    goal: 'calculer les puissances entières d’un nombre décimal relatif',
    mat: 'Tableau, cahier, ardoises, tableau de puissances, calculatrice de contrôle',
    revQ: 'Calcule 2⁴.',
    revRA: '2⁴ = 2 × 2 × 2 × 2 = 16.',
    situation: 'Un carré de tissu mesure 0,5 m de côté. Son aire vaut 0,5 × 0,5 = (0,5)² = 0,25 m². Pourquoi le résultat est-il plus petit que 0,5 ?',
    def: 'La puissance entière d’un nombre décimal se calcule comme celle d’un entier : (0,5)² = 0,5 × 0,5 = 0,25. Pour un nombre négatif, le résultat est positif si l’exposant est pair et négatif si l’exposant est impair.',
    autrement: 'on multiplie le décimal par lui-même autant de fois que l’indique l’exposant, en surveillant la virgule et le signe.',
    concept: 'Élever un nombre entre 0 et 1 à une puissance le rend plus petit : (0,5)² = 0,25 puis (0,5)³ = 0,125. Élever un nombre plus grand que 1 le rend plus grand : (1,2)² = 1,44. Pour les négatifs : (−2)² = (−2) × (−2) = +4 mais (−2)³ = −8, car les signes − se compensent deux par deux.',
    synthese: 'les puissances d’un décimal se calculent par multiplications successives, le nombre de chiffres après la virgule s’additionne à chaque facteur, et le signe dépend de la parité de l’exposant.',
    method: ['Écrire la puissance sous forme de produit de facteurs.', 'Multiplier de gauche à droite en plaçant correctement la virgule.', 'Déterminer le signe : positif si l’exposant est pair, du signe de la base sinon.'],
    exemple: '(0,5)² = 0,25 ; (1,2)² = 1,44 ; (−2)³ = −8 ; (−0,3)² = +0,09.',
    erreur: 'Écrire (0,3)² = 0,9. Or 0,3 × 0,3 = 0,09 : les chiffres après la virgule s’additionnent (1 + 1 = 2 chiffres).',
    saistu: 'Les microbes utilisent les puissances contre nous : une bactérie qui se divise toutes les 20 minutes donne 2³ = 8 bactéries en 1 heure et plus de 2⁷² descendants en une journée !',
    exos: ['Calcule : a) (0,5)² ; b) (0,2)² ; d) (1,5)² ; e) (2,5)².',
      'Calcule : a) (0,1)³ ; b) (0,5)³ ; d) (1,1)² ; e) (0,4)².',
      'Donne le signe puis calcule : a) (−3)² ; b) (−2)³ ; d) (−0,5)² ; e) (−1)⁵.'],
    corr: ['a) 0,25 ; b) 0,04 ; d) 2,25 ; e) 6,25.',
      'a) 0,001 ; b) 0,125 ; d) 1,21 ; e) 0,16.',
      'a) + : 9 ; b) − : −8 ; d) + : 0,25 ; e) − : −1.'],
    fig: 'u2f2'
  },
  {
    t: 'Utiliser les puissances de 10', comp: 'Opération', theme: 'Calcul avec les puissances entières — puissances de 10',
    goal: 'écrire et utiliser les puissances de 10 pour exprimer de grands nombres',
    mat: 'Tableau, cahier, ardoises, ligne numérique graduée, tableau de puissances',
    revQ: 'Calcule (0,2)².',
    revRA: '(0,2)² = 0,2 × 0,2 = 0,04.',
    situation: 'La distance Antananarivo–Toamasina est d’environ 350 km, soit 350 000 m. Comment écrire ce nombre sans aligner tous les zéros ?',
    def: 'La puissance 10ⁿ est égale à 1 suivi de n zéros : 10¹ = 10, 10² = 100, 10³ = 1 000.',
    autrement: 'l’exposant compte les zéros : 10⁶, c’est 1 million, un 1 suivi de 6 zéros.',
    concept: 'Les puissances de 10 abrègent les grands nombres : 350 000 = 35 × 10⁴ = 3,5 × 10⁵. Multiplier par 10ⁿ décale la virgule de n rangs vers la droite : 2,7 × 10³ = 2 700. Chaque unité de numération correspond à une puissance de 10 : millier = 10³, million = 10⁶, milliard = 10⁹.',
    synthese: '10ⁿ s’écrit 1 suivi de n zéros, et multiplier un nombre par 10ⁿ décale sa virgule de n rangs vers la droite.',
    method: ['Compter les zéros (ou les rangs de décalage de la virgule).', 'Écrire la puissance de 10 correspondante.', 'Pour multiplier par 10ⁿ, décaler la virgule de n rangs vers la droite.'],
    exemple: '10³ = 1 000 ; 350 000 = 3,5 × 10⁵ ; 2,7 × 10³ = 2 700.',
    erreur: 'Écrire 10⁴ = 40 ou 10⁴ = 4 000 : 10⁴ = 10 × 10 × 10 × 10 = 10 000, un 1 suivi de quatre zéros.',
    saistu: 'La population de Madagascar dépasse 3 × 10⁷ habitants, et la distance de la Terre au Soleil vaut environ 1,5 × 10⁸ km : les scientifiques écrivent presque tout avec les puissances de 10 !',
    exos: ['Écris en toutes lettres de chiffres : a) 10² ; b) 10⁵ ; d) 10³ ; e) 10⁶.',
      'Écris avec une puissance de 10 : a) 1 000 ; b) 100 000 ; d) 10 000 000 ; e) 10.',
      'Calcule : a) 3 × 10² ; b) 4,5 × 10³ ; d) 7 × 10⁴ ; e) 1,25 × 10².'],
    corr: ['a) 100 ; b) 100 000 ; d) 1 000 ; e) 1 000 000.',
      'a) 10³ ; b) 10⁵ ; d) 10⁷ ; e) 10¹.',
      'a) 300 ; b) 4 500 ; d) 70 000 ; e) 125.'],
    fig: 'u2f3'
  },
  {
    t: 'Multiplier des puissances de même base', comp: 'Opération', theme: 'Propriétés sur les puissances — produit de même base',
    goal: 'utiliser la propriété aⁿ × aᵐ = aⁿ⁺ᵐ',
    mat: 'Tableau, cahier, ardoises, tableau de puissances',
    revQ: 'Écris 100 000 avec une puissance de 10.',
    revRA: '100 000 = 10⁵ : un 1 suivi de cinq zéros.',
    situation: 'Naina doit calculer 2³ × 2². Il écrit tous les facteurs : (2 × 2 × 2) × (2 × 2) = cinq facteurs 2. N’y a-t-il pas plus rapide ?',
    def: 'Pour multiplier deux puissances de même base, on garde la base et on additionne les exposants : aⁿ × aᵐ = aⁿ⁺ᵐ, où n et m sont des entiers positifs non nuls.',
    autrement: 'trois facteurs 2 suivis de deux facteurs 2, cela fait cinq facteurs 2 : les exposants s’additionnent.',
    concept: 'En écrivant les produits en entier, on voit la règle : 2³ × 2² = (2 × 2 × 2) × (2 × 2) = 2⁵ = 32. La règle ne vaut que pour une même base : 2³ × 5² ne se simplifie pas ainsi. Avec les puissances de 10, le calcul devient immédiat : 10³ × 10⁴ = 10⁷.',
    synthese: 'quand les bases sont identiques, le produit des puissances s’obtient en gardant la base et en additionnant les exposants.',
    method: ['Vérifier que les deux puissances ont la même base.', 'Garder la base et additionner les exposants.', 'Calculer le résultat si on le demande, ou vérifier en comptant les facteurs.'],
    exemple: '2³ × 2² = 2⁵ = 32 ; 10³ × 10⁴ = 10⁷ ; 5² × 5¹ = 5³ = 125.',
    erreur: 'Multiplier les exposants : 2³ × 2² n’est pas 2⁶ = 64 mais 2⁵ = 32. On additionne les exposants, on ne les multiplie pas.',
    saistu: 'Les informaticiens jonglent avec cette règle : 2¹⁰ octets font un kilooctet, et 2¹⁰ × 2¹⁰ = 2²⁰ octets font un mégaoctet — les exposants s’additionnent dans la mémoire de ton téléphone !',
    exos: ['Écris sous la forme d’une seule puissance : a) 2² × 2³ ; b) 3⁴ × 3² ; d) 5³ × 5³ ; e) 7¹ × 7⁴.',
      'Écris sous la forme d’une seule puissance de 10 : a) 10² × 10³ ; b) 10⁴ × 10⁴ ; d) 10¹ × 10⁶ ; e) 10⁵ × 10².',
      'Complète l’exposant manquant : a) 2³ × 2… = 2⁷ ; b) 5… × 5² = 5⁶ ; d) 10⁴ × 10… = 10⁹ ; e) 3² × 3… = 3⁵.'],
    corr: ['a) 2⁵ ; b) 3⁶ ; d) 5⁶ ; e) 7⁵.',
      'a) 10⁵ ; b) 10⁸ ; d) 10⁷ ; e) 10⁷.',
      'a) 2⁴ ; b) 5⁴ ; d) 10⁵ ; e) 3³.'],
    fig: 'u2f4'
  },
  {
    t: 'Utiliser les autres propriétés des puissances', comp: 'Opération', theme: 'Propriétés sur les puissances — puissance de puissance, produit de bases',
    goal: 'utiliser les propriétés (aⁿ)ᵐ = aⁿˣᵐ et aⁿ × bⁿ = (a × b)ⁿ',
    mat: 'Tableau, cahier, ardoises, tableau de puissances',
    revQ: 'Écris 2² × 2⁴ sous la forme d’une seule puissance.',
    revRA: '2² × 2⁴ = 2⁶ : on additionne les exposants.',
    situation: 'Lova doit calculer 2³ × 5³. Elle remarque que les exposants sont les mêmes : peut-elle regrouper les bases ?',
    def: 'Pour élever une puissance à une puissance, on multiplie les exposants : (aⁿ)ᵐ = aⁿˣᵐ. Pour multiplier deux puissances de même exposant, on multiplie les bases : aⁿ × bⁿ = (a × b)ⁿ.',
    autrement: '(2³)² c’est 2³ écrit deux fois, donc 2 × 3 = 6 facteurs ; et 2³ × 5³, c’est trois paires (2 × 5), donc 10³.',
    concept: 'En détaillant : (2³)² = 2³ × 2³ = 2⁶ = 64. Et 2³ × 5³ = (2 × 2 × 2) × (5 × 5 × 5) = (2 × 5) × (2 × 5) × (2 × 5) = 10³ = 1 000. Ces propriétés simplifient les calculs : repérer d’abord ce qui est commun, la base ou l’exposant.',
    synthese: 'même base → on additionne les exposants ; puissance de puissance → on multiplie les exposants ; même exposant → on multiplie les bases.',
    method: ['Identifier ce qui est commun : la base ou l’exposant.', 'Même base : additionner les exposants ; puissance de puissance : multiplier les exposants ; même exposant : multiplier les bases.', 'Calculer et vérifier sur un petit exemple en écrivant tous les facteurs.'],
    exemple: '(2³)² = 2⁶ = 64 ; 2³ × 5³ = 10³ = 1 000 ; (10²)³ = 10⁶.',
    erreur: 'Confondre les règles : (2³)² = 2⁶ (on multiplie) alors que 2³ × 2² = 2⁵ (on additionne). Bien regarder si c’est une puissance de puissance ou un produit.',
    saistu: 'L’astuce 2³ × 5³ = 10³ est le secret du calcul mental rapide : 8 × 125 = 1 000 du premier coup, sans poser l’opération !',
    exos: ['Écris sous la forme d’une seule puissance : a) (2²)³ ; b) (3²)² ; d) (5³)² ; e) (10²)⁴.',
      'Regroupe les bases : a) 2² × 5² ; b) 4³ × 25³ ; d) 2⁴ × 5⁴ ; e) 3² × 2².',
      'Calcule astucieusement : a) 2³ × 5³ ; b) 2² × 5² ; d) 4 × 25 ; e) 8 × 125.'],
    corr: ['a) 2⁶ ; b) 3⁴ ; d) 5⁶ ; e) 10⁸.',
      'a) 10² = 100 ; b) 100³ = 1 000 000 ; d) 10⁴ = 10 000 ; e) 6² = 36.',
      'a) 10³ = 1 000 ; b) 10² = 100 ; d) 100 ; e) 1 000.'],
    fig: 'u2f5'
  },
  {
    t: 'Découvrir la règle des signes pour l’addition', comp: 'Opération', theme: 'Règle de signe',
    goal: 'additionner deux nombres relatifs en utilisant la droite graduée et la règle des signes',
    mat: 'Tableau, cahier, ardoises, droite graduée, jetons bicolores',
    revQ: 'Calcule astucieusement 8 × 125.',
    revRA: '8 × 125 = 2³ × 5³ = 10³ = 1 000.',
    situation: 'Hanta gagne 3 points à la première manche d’un jeu (+3), puis en perd 5 à la deuxième (−5). Quel est son score final ?',
    def: 'Pour additionner deux relatifs de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour deux relatifs de signes contraires, on soustrait la plus petite distance de la plus grande et on prend le signe du nombre le plus éloigné de zéro.',
    autrement: 'gains et pertes se compensent : gagner 3 puis perdre 5, c’est perdre 2 au total.',
    concept: 'Sur la droite graduée, additionner c’est se déplacer : (+3) + (−5) se lit « partir de 0, avancer de 3, reculer de 5 » : on arrive à −2. De même (−2) + (−3) = −5 : deux reculs s’additionnent. Et (−4) + (+7) = +3 : l’avance de 7 dépasse le recul de 4.',
    synthese: 'même signe : on additionne les distances à zéro et on garde le signe ; signes contraires : on soustrait les distances et on prend le signe du plus fort.',
    method: ['Comparer les signes des deux nombres.', 'Même signe : additionner les distances à zéro, garder le signe commun.', 'Signes contraires : soustraire les distances, prendre le signe du nombre le plus éloigné de zéro.'],
    exemple: '(+3) + (−5) = −2 ; (−2) + (−3) = −5 ; (−4) + (+7) = +3.',
    erreur: 'Écrire (+3) + (−5) = +8 ou −8 en additionnant les distances : avec des signes contraires, les distances se soustraient (5 − 3 = 2).',
    saistu: 'Les comptables du monde entier utilisent cette règle depuis des siècles : recettes en positif, dépenses en négatif — le solde du mois est une simple somme de relatifs !',
    exos: ['Calcule : a) (+4) + (+3) ; b) (−2) + (−6) ; d) (+5) + (−2) ; e) (−7) + (+3).',
      'Calcule : a) (+8) + (−8) ; b) (−1) + (+9) ; d) (−5) + (+2) ; e) (+6) + (−10).',
      'Un ascenseur part du rez-de-chaussée (0) : il monte de 4 étages, descend de 6, monte de 1. a) Écris la somme ; b) calcule la position finale ; d) le résultat est-il un sous-sol ? e) de combien faut-il remonter pour revenir à 0 ?'],
    corr: ['a) +7 ; b) −8 ; d) +3 ; e) −4.',
      'a) 0 ; b) +8 ; d) −3 ; e) −4.',
      'a) (+4) + (−6) + (+1) ; b) −1 ; d) oui, premier sous-sol ; e) il faut remonter de 1 étage (+1).'],
    fig: 'u2f6'
  },
  {
    t: 'Additionner et soustraire des entiers relatifs', comp: 'Opération', theme: 'Opérations contenant des additions et soustractions d’entiers relatifs',
    goal: 'effectuer des additions et des soustractions d’entiers relatifs',
    mat: 'Tableau, cahier, ardoises, jetons bicolores, droite graduée',
    revQ: 'Calcule (−7) + (+3).',
    revRA: '−4 : signes contraires, 7 − 3 = 4, signe du plus éloigné de zéro.',
    situation: 'Avec des jetons verts (+1) et roses (−1), on représente (+7) + (−4) : chaque paire verte-rose s’annule. Et comment faire (+5) − (−3) ?',
    def: 'Soustraire un nombre relatif revient à additionner son opposé : a − b = a + (opposé de b).',
    autrement: 'enlever une dette, c’est comme recevoir de l’argent : (+5) − (−3) = (+5) + (+3) = +8.',
    concept: 'Avec les jetons bicolores, (+7) + (−4) = +3 : quatre paires s’annulent, il reste trois jetons positifs. Pour la soustraction, on transforme : (+5) − (−3) = (+5) + (+3) = +8, et (−2) − (+6) = (−2) + (−6) = −8. Toute chaîne de + et de − se ramène ainsi à des additions de relatifs.',
    synthese: 'toute soustraction de relatifs se transforme en addition de l’opposé, puis on applique la règle des signes de l’addition.',
    method: ['Transformer chaque soustraction en addition de l’opposé.', 'Appliquer la règle des signes de l’addition.', 'Vérifier avec des jetons ou sur la droite graduée.'],
    exemple: '(+7) + (−4) = +3 ; (+5) − (−3) = (+5) + (+3) = +8 ; (−2) − (+6) = −8.',
    erreur: 'Écrire (+5) − (−3) = +2 en « supprimant » les signes : il faut d’abord transformer en (+5) + (+3), ce qui donne +8.',
    saistu: 'La température la plus froide jamais relevée sur Terre est −89 °C en Antarctique. L’écart avec les +50 °C du Sahara se calcule par (+50) − (−89) = 139 degrés d’écart !',
    exos: ['Calcule : a) (+6) + (−9) ; b) (−4) + (−5) ; d) (+12) + (−7) ; e) (−8) + (+8).',
      'Transforme en addition puis calcule : a) (+4) − (+9) ; b) (+7) − (−2) ; d) (−3) − (+5) ; e) (−6) − (−10).',
      'Calcule la chaîne : a) (+3) + (−5) + (+4) ; b) (−2) − (−7) + (−1) ; d) (+10) − (+4) − (+6) ; e) (−1) + (−2) − (−3).'],
    corr: ['a) −3 ; b) −9 ; d) +5 ; e) 0.',
      'a) (+4) + (−9) = −5 ; b) (+7) + (+2) = +9 ; d) (−3) + (−5) = −8 ; e) (−6) + (+10) = +4.',
      'a) +2 ; b) +4 ; d) 0 ; e) 0.'],
    fig: 'u2f7'
  },
  {
    t: 'Additionner et soustraire des décimaux relatifs', comp: 'Opération', theme: 'Opérations contenant des additions et soustractions de décimaux relatifs',
    goal: 'effectuer des additions et des soustractions de nombres décimaux relatifs',
    mat: 'Tableau, cahier, ardoises, droite graduée',
    revQ: 'Calcule (−3) − (+5).',
    revRA: '(−3) + (−5) = −8.',
    situation: 'Le niveau d’un lac baisse de 2,5 cm pendant la semaine sèche (−2,5), puis remonte de 1,3 cm après la pluie (+1,3). Quelle est la variation totale ?',
    def: 'Les règles d’addition et de soustraction des relatifs s’appliquent aussi aux nombres décimaux relatifs : on compare les signes, puis on additionne ou soustrait les distances à zéro.',
    autrement: 'rien ne change par rapport aux entiers : seuls les calculs de distances utilisent des virgules.',
    concept: '(−2,5) + (+1,3) : signes contraires, distances 2,5 et 1,3, différence 1,2, signe du plus éloigné de zéro : résultat −1,2. De même (−0,7) + (−1,8) = −2,5 et (+3,4) − (−1,6) = (+3,4) + (+1,6) = +5. Poser la soustraction des distances en colonnes aide à ne pas se tromper de virgule.',
    synthese: 'les décimaux relatifs suivent exactement les mêmes règles de signes que les entiers relatifs, avec des calculs de distances à virgule.',
    method: ['Transformer les soustractions en additions de l’opposé.', 'Comparer les signes et appliquer la règle d’addition.', 'Calculer la somme ou la différence des distances en alignant les virgules.'],
    exemple: '(−2,5) + (+1,3) = −1,2 ; (−0,7) + (−1,8) = −2,5 ; (+3,4) − (−1,6) = +5.',
    erreur: 'Mal aligner les virgules : pour 2,5 − 1,3, on soustrait dixième à dixième ; 2,5 − 1,3 = 1,2 et non 1,02.',
    saistu: 'Les stations météo de Madagascar enregistrent les variations de pression en relatifs décimaux : une chute de −3,5 hectopascals en 3 heures annonce souvent l’arrivée d’un cyclone !',
    exos: ['Calcule : a) (+2,4) + (+1,5) ; b) (−3,2) + (−0,6) ; d) (+5,5) + (−2,3) ; e) (−4,1) + (+1,6).',
      'Transforme puis calcule : a) (+3,8) − (+1,2) ; b) (+2,5) − (−0,5) ; d) (−1,4) − (+2,6) ; e) (−0,9) − (−3,9).',
      'Calcule la chaîne : a) (+1,5) + (−2,5) + (+3) ; b) (−0,8) − (−1,8) + (−2) ; d) (+4,2) − (+1,2) + (−3) ; e) (−2,6) + (+2,6) − (+0,5).'],
    corr: ['a) +3,9 ; b) −3,8 ; d) +3,2 ; e) −2,5.',
      'a) +2,6 ; b) +3 ; d) −4 ; e) +3.',
      'a) +2 ; b) −1 ; d) 0 ; e) −0,5.'],
    fig: 'u2f8'
  },
  {
    t: 'Multiplier des nombres relatifs', comp: 'Opération', theme: 'Règle de signe pour le produit',
    goal: 'multiplier des nombres relatifs en appliquant la règle des signes',
    mat: 'Tableau, cahier, ardoises, table des signes',
    revQ: 'Calcule (−1,4) − (+2,6).',
    revRA: '(−1,4) + (−2,6) = −4.',
    situation: 'Un réservoir perd 2,5 litres par heure : sa variation horaire est −2,5. Après 4 heures, la variation totale est 4 × (−2,5). Quel signe aura le résultat ?',
    def: 'Le produit de deux nombres relatifs de même signe est positif ; le produit de deux nombres relatifs de signes contraires est négatif.',
    autrement: 'plus par plus ou moins par moins donnent plus ; plus par moins donne moins.',
    concept: 'Perdre 2,5 L pendant 4 heures : 4 × (−2,5) = −10, une perte totale de 10 L. Pour (−4) × (−2,5), on « enlève 4 fois une perte de 2,5 », ce qui revient à un gain : +10. Pour multiplier, on détermine d’abord le signe avec la règle, puis on multiplie les distances à zéro.',
    synthese: 'on détermine le signe du produit avec la règle des signes, puis on multiplie les distances à zéro comme d’habitude.',
    method: ['Déterminer le signe du produit : même signe → +, signes contraires → −.', 'Multiplier les distances à zéro.', 'Écrire le résultat avec son signe.'],
    exemple: '(+4) × (−2,5) = −10 ; (−4) × (−2,5) = +10 ; (−3) × (+6) = −18.',
    erreur: 'Croire que « deux moins font toujours moins » : (−4) × (−2,5) = +10, le produit de deux négatifs est positif.',
    saistu: 'La règle « moins par moins donne plus » a été énoncée dès le VIIᵉ siècle par le mathématicien indien Brahmagupta, qui parlait de « dettes » et de « fortunes » !',
    exos: ['Donne le signe du produit : a) (+3) × (+7) ; b) (−5) × (+2) ; d) (−4) × (−6) ; e) (+8) × (−1).',
      'Calcule : a) (+3) × (−6) ; b) (−5) × (−4) ; d) (−7) × (+2) ; e) (−1) × (−9).',
      'Calcule avec des décimaux : a) (+2) × (−3,5) ; b) (−0,5) × (−8) ; d) (−1,2) × (+5) ; e) (−2,5) × (−4).'],
    corr: ['a) + ; b) − ; d) + ; e) −.',
      'a) −18 ; b) +20 ; d) −14 ; e) +9.',
      'a) −7 ; b) +4 ; d) −6 ; e) +10.'],
    fig: 'u2f9'
  },
  {
    t: 'Calculer une chaîne d’opérations sans parenthèses', comp: 'Opération', theme: 'Opérations contenant des produits sans parenthèses',
    goal: 'organiser et calculer une chaîne d’opérations sans parenthèses en utilisant la commutativité et l’associativité',
    mat: 'Tableau, cahier, ardoises, droite graduée',
    revQ: 'Calcule (−0,5) × (−8).',
    revRA: '+4 : même signe donc produit positif, 0,5 × 8 = 4.',
    situation: 'Fetra doit calculer 2,5 + 7,8 + 7,5 de tête. Il remarque que 2,5 + 7,5 = 10 : peut-il changer l’ordre des termes ?',
    def: 'Dans une suite d’additions, on peut changer l’ordre des termes (commutativité) et les regrouper librement (associativité). Dans une chaîne sans parenthèses, les multiplications se calculent avant les additions et les soustractions.',
    autrement: 'on a le droit de regrouper les nombres « qui vont bien ensemble », mais les multiplications passent toujours en premier.',
    concept: 'Regrouper rend le calcul mental facile : 2,5 + 7,8 + 7,5 = (2,5 + 7,5) + 7,8 = 10 + 7,8 = 17,8 ; de même 4 × 1,7 × 2,5 = (4 × 2,5) × 1,7 = 10 × 1,7 = 17. Dans 7 + 3 × 2, la multiplication est prioritaire : 7 + 6 = 13. Ces règles s’appliquent aussi aux relatifs : (−4) + 9 + (−6) = (−10) + 9 = −1.',
    synthese: 'la commutativité et l’associativité permettent de regrouper astucieusement les termes ou les facteurs, en respectant la priorité de la multiplication.',
    method: ['Repérer les multiplications et les calculer d’abord.', 'Regrouper les termes qui donnent des nombres ronds (dizaines, unités…).', 'Calculer de gauche à droite et vérifier l’ordre de grandeur.'],
    exemple: '2,5 + 7,8 + 7,5 = 10 + 7,8 = 17,8 ; 4 × 1,7 × 2,5 = 10 × 1,7 = 17 ; 7 + 3 × 2 = 13.',
    erreur: 'Calculer 7 + 3 × 2 de gauche à droite : 10 × 2 = 20 est faux. La multiplication se fait avant : 7 + 6 = 13.',
    saistu: 'Les vendeuses de légumes du marché regroupent sans le savoir : trois tas à 800 Ar, 1 200 Ar et 200 Ar s’additionnent en un éclair : (800 + 200) + 1 200 = 2 000 Ar !',
    exos: ['Calcule astucieusement : a) 1,5 + 6,7 + 8,5 ; b) 2,5 × 7 × 4 ; d) 0,25 + 3,9 + 0,75 ; e) 5 × 1,3 × 2.',
      'Calcule en respectant les priorités : a) 5 + 2 × 3 ; b) 20 − 4 × 2 ; d) 6 × 3 − 10 ; e) 1 + 9 × 0,5.',
      'Calcule avec des relatifs : a) (−3) + 8 + (−7) ; b) (−2) × 5 + 4 ; d) 6 + (−3) × 2 ; e) (−1,5) + 4,5 + (−3).'],
    corr: ['a) (1,5 + 8,5) + 6,7 = 16,7 ; b) (2,5 × 4) × 7 = 70 ; d) (0,25 + 0,75) + 3,9 = 4,9 ; e) (5 × 2) × 1,3 = 13.',
      'a) 11 ; b) 12 ; d) 8 ; e) 5,5.',
      'a) −2 ; b) −10 + 4 = −6 ; d) 6 − 6 = 0 ; e) 0.'],
    fig: 'u2f10'
  },
  {
    t: 'Calculer une chaîne d’opérations avec parenthèses', comp: 'Opération', theme: 'Opérations contenant des produits avec parenthèses',
    goal: 'calculer une chaîne d’opérations comportant des parenthèses',
    mat: 'Tableau, cahier, ardoises, fiches d’étapes',
    revQ: 'Calcule 20 − 4 × 2.',
    revRA: '20 − 8 = 12 : la multiplication d’abord.',
    situation: 'Deux élèves calculent 5 × (7 − 3) + 4 : l’un trouve 24, l’autre 36. Qui a raison, et quelle règle départage ?',
    def: 'Dans une chaîne d’opérations, on calcule d’abord l’intérieur des parenthèses, puis les multiplications et divisions, et enfin les additions et soustractions.',
    autrement: 'les parenthèses sont des « priorités absolues » : tout ce qui est entre elles se calcule en premier.',
    concept: 'Pour 5 × (7 − 3) + 4 : ① parenthèses : 7 − 3 = 4 ; ② multiplication : 5 × 4 = 20 ; ③ addition : 20 + 4 = 24. Avec des relatifs : (−2) × (3 − 5) = (−2) × (−2) = +4. En cas de parenthèses imbriquées, on commence par les plus intérieures.',
    synthese: 'l’ordre est : parenthèses, puis multiplications et divisions, puis additions et soustractions, une seule étape à la fois.',
    method: ['Calculer l’intérieur des parenthèses.', 'Effectuer les multiplications et divisions.', 'Terminer par les additions et soustractions, en écrivant chaque étape.'],
    exemple: '5 × (7 − 3) + 4 = 5 × 4 + 4 = 20 + 4 = 24 ; (−2) × (3 − 5) = +4.',
    erreur: 'Supprimer les parenthèses sans calculer : 5 × 7 − 3 + 4 = 36 est faux. Les parenthèses changent le résultat !',
    saistu: 'Les parenthèses n’ont été adoptées en mathématiques qu’au XVIᵉ siècle : avant, on soulignait les expressions à calculer d’abord — un trait sous les nombres au lieu de ( ) !',
    exos: ['Calcule : a) 3 × (4 + 2) ; b) (10 − 6) × 5 ; d) 18 − (5 + 3) ; e) (2 + 7) × (6 − 4).',
      'Calcule étape par étape : a) 4 × (9 − 5) + 2 ; b) 30 − 3 × (2 + 4) ; d) (8 − 3) × (1 + 5) ; e) 50 − (20 − 5) × 2.',
      'Calcule avec des relatifs : a) (−3) × (6 − 8) ; b) (4 − 9) × (−2) ; d) (−1 + 5) × (−3) ; e) (2 − 7) × (3 − 1).'],
    corr: ['a) 18 ; b) 20 ; d) 10 ; e) 18.',
      'a) 4 × 4 + 2 = 18 ; b) 30 − 18 = 12 ; d) 5 × 6 = 30 ; e) 50 − 30 = 20.',
      'a) (−3) × (−2) = +6 ; b) (−5) × (−2) = +10 ; d) 4 × (−3) = −12 ; e) (−5) × 2 = −10.'],
    fig: 'u2f11'
  },
  {
    t: 'Relier écritures fractionnaire et décimale', comp: 'Opération', theme: 'Différentes écritures de fraction et de nombres décimaux',
    goal: 'passer de l’écriture décimale à l’écriture fractionnaire et inversement',
    mat: 'Tableau, cahier, ardoises, grille de 100, droite numérique',
    revQ: 'Calcule (−1 + 5) × (−3).',
    revRA: '4 × (−3) = −12.',
    situation: 'Sur une facture, la remise est écrite « 0,75 » ; sur l’affiche du magasin, « 3/4 ». Est-ce la même remise ?',
    def: 'Un nombre décimal s’écrit sous forme de fraction décimale : le dénominateur est 10, 100 ou 1 000 selon le nombre de chiffres après la virgule. Inversement, une fraction se convertit en écriture décimale en divisant le numérateur par le dénominateur.',
    autrement: '0,75 c’est 75 centièmes, donc 75/100, qui se simplifie en 3/4 : trois écritures d’un même nombre.',
    concept: 'Un chiffre après la virgule → dixièmes : 0,7 = 7/10. Deux chiffres → centièmes : 0,75 = 75/100 = 3/4 après simplification. Trois chiffres → millièmes : 0,125 = 125/1000 = 1/8. Dans l’autre sens, 3/4 = 3 ÷ 4 = 0,75. Certaines fractions, comme 1/3 = 0,333…, n’ont pas d’écriture décimale exacte.',
    synthese: 'le nombre de chiffres après la virgule donne le dénominateur 10, 100 ou 1 000, et la division du numérateur par le dénominateur fait le chemin inverse.',
    method: ['Décimal → fraction : compter les chiffres après la virgule, écrire sur 10, 100 ou 1 000, puis simplifier.', 'Fraction → décimal : diviser le numérateur par le dénominateur.', 'Vérifier en comparant les deux écritures sur une grille ou une droite.'],
    exemple: '0,75 = 75/100 = 3/4 ; 0,7 = 7/10 ; 3/5 = 0,6 ; 1/8 = 0,125.',
    erreur: 'Écrire 0,75 = 75/10 : deux chiffres après la virgule exigent le dénominateur 100, pas 10.',
    saistu: 'Les anciennes pièces malgaches utilisaient les fractions : le kirobo valait 1/4 de piastre et le sikajy 1/8 — nos ancêtres passaient des fractions aux décimaux à chaque marché !',
    exos: ['Écris sous forme de fraction décimale : a) 0,3 ; b) 0,41 ; d) 0,009 ; e) 1,7.',
      'Écris sous forme décimale : a) 9/10 ; b) 27/100 ; d) 3/1000 ; e) 145/100.',
      'Écris sous forme de fraction irréductible : a) 0,5 ; b) 0,25 ; d) 0,6 ; e) 0,125.'],
    corr: ['a) 3/10 ; b) 41/100 ; d) 9/1000 ; e) 17/10.',
      'a) 0,9 ; b) 0,27 ; d) 0,003 ; e) 1,45.',
      'a) 5/10 = 1/2 ; b) 25/100 = 1/4 ; d) 6/10 = 3/5 ; e) 125/1000 = 1/8.'],
    fig: 'u2f12'
  },
  {
    t: 'Encadrer une fraction et donner des valeurs approchées', comp: 'Opération', theme: 'Encadrement d’une fraction, valeurs approchées par défaut et par excès',
    goal: 'encadrer une fraction et donner ses valeurs approchées par défaut et par excès',
    mat: 'Tableau, cahier, ardoises, droite numérique',
    revQ: 'Écris 0,25 sous forme de fraction irréductible.',
    revRA: '0,25 = 25/100 = 1/4.',
    situation: 'Sept amis se partagent équitablement 17 000 Ar. La division 17 ÷ 7 ne tombe pas juste : comment donner une valeur raisonnable à chacun ?',
    def: 'Encadrer une fraction, c’est trouver deux nombres entre lesquels elle se situe. La valeur approchée par défaut est juste en dessous de la fraction, la valeur approchée par excès juste au-dessus.',
    autrement: 'quand la division ne tombe pas juste, on « coince » la fraction entre deux décimaux proches : 17/7 est entre 2,4 et 2,5.',
    concept: 'La division donne 17 ÷ 7 = 2,428… D’abord l’encadrement entre entiers : 2 < 17/7 < 3. Puis au dixième : 2,4 < 17/7 < 2,5. La valeur approchée au dixième par défaut est 2,4 et celle par excès est 2,5. Plus on ajoute de chiffres, plus l’encadrement est précis : 2,42 < 17/7 < 2,43.',
    synthese: 'on divise le numérateur par le dénominateur, puis on encadre le quotient à l’unité, au dixième ou au centième, par défaut en dessous et par excès au-dessus.',
    method: ['Effectuer la division du numérateur par le dénominateur.', 'Encadrer le quotient entre deux entiers, puis entre deux dixièmes (ou centièmes).', 'Nommer la valeur par défaut (en dessous) et la valeur par excès (au-dessus).'],
    exemple: '17/7 = 2,428… donc 2 < 17/7 < 3 et 2,4 < 17/7 < 2,5 : valeur par défaut 2,4, valeur par excès 2,5.',
    erreur: 'Inverser défaut et excès : la valeur par défaut est toujours la plus petite, celle par excès la plus grande.',
    saistu: 'Le nombre π = 3,14159… ne s’écrit jamais exactement : depuis Archimède, qui l’avait encadré entre 3 + 10/71 et 3 + 1/7, les mathématiciens affinent sans fin son encadrement !',
    exos: ['Encadre entre deux entiers consécutifs : a) 7/3 ; b) 22/5 ; d) 11/6 ; e) 25/4.',
      'Encadre au dixième : a) 10/3 ; b) 13/6 ; d) 20/7 ; e) 8/3.',
      'Donne la valeur approchée au dixième par défaut puis par excès : a) 5/3 ; b) 9/7 ; d) 15/8 ; e) 23/9.'],
    corr: ['a) 2 < 7/3 < 3 ; b) 4 < 22/5 < 5 ; d) 1 < 11/6 < 2 ; e) 6 < 25/4 < 7.',
      'a) 3,3 < 10/3 < 3,4 ; b) 2,1 < 13/6 < 2,2 ; d) 2,8 < 20/7 < 2,9 ; e) 2,6 < 8/3 < 2,7.',
      'a) 1,6 et 1,7 ; b) 1,2 et 1,3 ; d) 1,8 et 1,9 ; e) 2,5 et 2,6.'],
    fig: 'u2f13'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Opération',
  rag: 'effectuer les opérations avec différentes représentations numériques afin de résoudre des problèmes du monde réel.',
  valeurs: 'rigueur et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Puissances', 'aⁿ = produit de n facteurs égaux à a ; 10ⁿ = 1 suivi de n zéros', 'Calculer des puissances d’entiers et de décimaux'],
      ['Propriétés des puissances', 'aⁿ × aᵐ = aⁿ⁺ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ ; aⁿ × bⁿ = (ab)ⁿ', 'Simplifier et calculer astucieusement'],
      ['Relatifs : + et −', 'Règle des signes ; soustraire = additionner l’opposé', 'Calculer sommes, différences et chaînes'],
      ['Relatifs : ×', 'Même signe → + ; signes contraires → −', 'Multiplier entiers et décimaux relatifs'],
      ['Chaînes d’opérations', 'Parenthèses, puis ×, puis + et −', 'Organiser et calculer étape par étape'],
      ['Écritures d’un nombre', 'Fraction décimale ↔ écriture décimale ; encadrement', 'Convertir, encadrer, approcher par défaut/excès']
    ],
    questions: [
      'Calcule 2³ × 2⁴ en une seule puissance, puis donne sa valeur.',
      'Calcule (−3,5) + (+1,2).',
      'Calcule (−6) × (−2,5).',
      'Calcule 4 × (9 − 6) − 5.',
      'Encadre 13/4 entre deux entiers puis au dixième.'
    ],
    answers: [
      '2³ × 2⁴ = 2⁷ = 128.',
      '−2,3 : signes contraires, 3,5 − 1,2 = 2,3, signe du plus éloigné de zéro.',
      '+15 : même signe donc positif, 6 × 2,5 = 15.',
      '4 × 3 − 5 = 12 − 5 = 7.',
      '3 < 13/4 < 4 ; 13/4 = 3,25 donc 3,2 < 13/4 < 3,3.'
    ]
  },
  exam: {
    exos: [
      'a) Écris 6 × 6 × 6 × 6 sous forme de puissance. b) Calcule (0,4)². d) Calcule (−2)⁴. e) Écris 1 000 000 avec une puissance de 10.',
      'Écris sous la forme d’une seule puissance : a) 3² × 3⁵ ; b) (5²)³ ; d) 2⁴ × 5⁴ ; e) 10³ × 10⁵.',
      'Calcule : a) (+7) + (−12) ; b) (−4,5) − (−2,5) ; d) (−8) × (+2,5) ; e) (−6) × (−0,5).',
      'Calcule en respectant les priorités : a) 8 + 2 × 5 ; b) (8 + 2) × 5 ; d) 3 × (10 − 4) − 7 ; e) (−2) × (5 − 9).',
      'a) Écris 0,45 sous forme de fraction irréductible. b) Écris 7/8 sous forme décimale. d) Encadre 19/6 entre deux entiers. e) Donne les valeurs approchées au dixième par défaut et par excès de 19/6.'
    ],
    corr: [
      'a) 6⁴ ; b) 0,16 ; d) +16 (exposant pair) ; e) 10⁶. Un point par réponse.',
      'a) 3⁷ ; b) 5⁶ ; d) 10⁴ = 10 000 ; e) 10⁸. Un point par réponse.',
      'a) −5 ; b) (−4,5) + (+2,5) = −2 ; d) −20 ; e) +3. Un point par réponse.',
      'a) 18 ; b) 50 ; d) 18 − 7 = 11 ; e) (−2) × (−4) = +8. Un point par réponse.',
      'a) 45/100 = 9/20 ; b) 0,875 ; d) 3 < 19/6 < 4 ; e) 19/6 = 3,166… : 3,1 par défaut et 3,2 par excès. Un point par réponse.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
