// UNITÉ 1 — NOMBRE (PE T8) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — notation scientifique grand nombre
figs.u1f1 = (() => { const { s, y } = head('La notation scientifique d’un grand nombre', ['Distance Terre-Soleil : 149 600 000 km = 1,496 × 10⁸ km.']);
  let b = box(70, y + 25, 330, 85, '149 600 000', undefined, BLUE, 27)
    + arrow(415, y + 67, 505, y + 67)
    + box(520, y + 25, 300, 85, '1,496 × 10⁸', '#FDE7EF', PINK2, 27)
    + txt(460, y + 12, 'virgule déplacée', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 165, 'la virgule recule de 8 rangs : l’exposant est 8', 23, OCRE, 'bold', 'middle')
    + txt(500, y + 205, '1 ≤ 1,496 &lt; 10 : un seul chiffre avant la virgule', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 240, s + b); })();
// S2 — petit nombre, exposant négatif
figs.u1f2 = (() => { const { s, y } = head('La notation scientifique d’un petit nombre', ['Épaisseur d’un cheveu : 0,00052 m = 5,2 × 10⁻⁴ m.']);
  let b = box(70, y + 25, 300, 85, '0,00052', undefined, BLUE, 28)
    + arrow(385, y + 67, 475, y + 67)
    + box(490, y + 25, 300, 85, '5,2 × 10⁻⁴', '#FDE7EF', PINK2, 28)
    + txt(430, y + 12, 'virgule avancée', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 165, 'la virgule avance de 4 rangs : l’exposant est −4', 23, OCRE, 'bold', 'middle')
    + txt(500, y + 205, 'petit nombre (&lt; 1) → exposant négatif', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 240, s + b); })();
// S3 — développement décimal
figs.u1f3 = (() => { const { s, y } = head('Le développement décimal', ['3 452 = 3 × 10³ + 4 × 10² + 5 × 10 + 2 : chaque chiffre a sa puissance de 10.']);
  const data = [['Chiffre', '3', '4', '5', '2'], ['Rang', 'milliers', 'centaines', 'dizaines', 'unités'], ['Valeur', '3 × 10³', '4 × 10²', '5 × 10¹', '2 × 10⁰']];
  let b = tableEl(90, y + 20, [170, 165, 165, 165, 165], 62, data);
  b += txt(500, y + 255, '3 452 = 3 000 + 400 + 50 + 2', 25, PINK2, 'bold', 'middle');
  return svg(1000, y + 295, s + b); })();
// S4 — relatifs : thermomètre + altitude
figs.u1f4 = (() => { const { s, y } = head('Les entiers relatifs autour de nous', ['Températures sous zéro, niveaux sous la mer : des nombres avec un signe − ou +.']);
  const tx0 = 180, ty = y + 30, th = 230;
  let b = seg(tx0, ty, tx0, ty + th, '#555', 8);
  [[-10, '−10°'], [0, '0°'], [10, '+10°'], [20, '+20°']].forEach(([v, lab]) => {
    const yy = ty + th - (v + 10) * (th / 30);
    b += seg(tx0 - 12, yy, tx0 + 12, yy, '#555', 3) + txt(tx0 - 24, yy + 8, lab, 21, v < 0 ? PINK2 : (v === 0 ? '#333' : GREEN), 'bold', 'end');
  });
  b += dot(tx0, ty + th - 5 * (th / 30), 10, PINK2) + txt(tx0 + 28, ty + th - 5 * (th / 30) + 8, '−5° : gel à Antsirabe !', 21, PINK2, 'bold');
  const mx = 560, my = y + 140;
  b += seg(mx, my, 950, my, BLUE, 3) + txt(950, my - 12, 'niveau de la mer : 0 m', 19, BLUE, 'normal', 'end')
    + dot(720, my - 85, 8, GREEN) + txt(745, my - 80, '+2 876 m', 21, GREEN, 'bold') + txt(745, my - 52, 'sommet', 18, '#555')
    + dot(720, my + 70, 8, PINK2) + txt(745, my + 62, '−40 m', 21, PINK2, 'bold') + txt(745, my + 90, 'plongeur', 18, '#555');
  return svg(1000, y + 310, s + b); })();
// S5 — comparaison sur droite
figs.u1f5 = (() => { const { s, y } = head('Comparer sur la droite numérique', ['Plus on va vers la droite, plus le nombre est grand : −4 &lt; −1 &lt; 0 &lt; +3.']);
  let b = nline(100, y + 80, 800, 10, ['−5','−4','−3','−2','−1','0','+1','+2','+3','+4','+5']);
  const u = (930 - 70 - 60) / 10;
  [[-4, PINK2], [-1, OCRE], [0, '#333'], [3, GREEN]].forEach(([v, c]) => {
    const px = 100 + (v + 5) * u;
    b += dot(px, y + 80, 8, c) + txt(px, y + 48, (v > 0 ? '+' : '') + v, 23, c, 'bold', 'middle');
  });
  b += arrow(390, y + 160, 700, y + 160) + txt(545, y + 195, 'sens croissant →', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();
// S6 — comparaison sans droite
figs.u1f6 = (() => { const { s, y } = head('Comparer sans droite numérique', ['Trois règles suffisent pour comparer deux entiers relatifs.']);
  let b = box(70, y + 20, 270, 110, '', '#E8F5E9', GREEN, 20)
    + box(365, y + 20, 270, 110, '', '#E3F2FD', '#1565C0', 20)
    + box(660, y + 20, 270, 110, '', '#FDE7EF', PINK2, 20);
  b += txt(205, y + 60, '+ toujours', 21, GREEN, 'bold', 'middle') + txt(205, y + 95, 'plus grand que −', 21, GREEN, 'bold', 'middle')
    + txt(500, y + 60, 'deux positifs :', 21, '#1565C0', 'bold', 'middle') + txt(500, y + 95, 'ordre habituel', 21, '#1565C0', 'bold', 'middle')
    + txt(795, y + 60, 'deux négatifs :', 21, PINK2, 'bold', 'middle') + txt(795, y + 95, 'ordre inversé', 21, PINK2, 'bold', 'middle');
  b += txt(205, y + 175, '+2 > −9', 24, GREEN, 'bold', 'middle')
    + txt(500, y + 175, '+7 > +3', 24, '#1565C0', 'bold', 'middle')
    + txt(795, y + 175, '−3 > −8', 24, PINK2, 'bold', 'middle');
  return svg(1000, y + 215, s + b); })();
// S7 — opposés
figs.u1f7 = (() => { const { s, y } = head('Les nombres opposés', ['+4 et −4 sont opposés : même distance à zéro, signes contraires.']);
  let b = nline(100, y + 90, 800, 10, [null,null,null,null,null,'0',null,null,null,null,null]);
  const u = (930 - 70 - 60) / 10;
  const px = v => 100 + (v + 5) * u;
  b += dot(px(-4), y + 90, 9, PINK2) + txt(px(-4), y + 58, '−4', 24, PINK2, 'bold', 'middle')
    + dot(px(4), y + 90, 9, GREEN) + txt(px(4), y + 58, '+4', 24, GREEN, 'bold', 'middle')
    + dot(px(0), y + 90, 7, '#333');
  b += `<path d="M ${px(-4)} ${y + 130} Q ${px(0)} ${y + 195} ${px(4)} ${y + 130}" fill="none" stroke="${OCRE}" stroke-width="3" stroke-dasharray="8 6"/>`
    + txt(px(0), y + 225, 'même distance à zéro : 4', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 260, s + b); })();
// S8 — addition par déplacement
figs.u1f8 = (() => { const { s, y } = head('Additionner en se déplaçant', ['(+3) + (−5) : on part de 0, on avance de 3, puis on recule de 5. Arrivée : −2.']);
  let b = nline(100, y + 110, 800, 10, ['−5','−4','−3','−2','−1','0','+1','+2','+3','+4','+5']);
  const u = (930 - 70 - 60) / 10;
  const px = v => 100 + (v + 5) * u;
  b += arrow(px(0), y + 48, px(3), y + 48) + txt((px(0) + px(3)) / 2, y + 28, '+3', 22, GREEN, 'bold', 'middle');
  b += arrow(px(3), y + 90, px(-2), y + 90) + txt((px(3) + px(-2)) / 2, y + 78, '−5', 22, PINK2, 'bold', 'middle');
  b += dot(px(0), y + 110, 7, '#333') + dot(px(-2), y + 110, 9, OCRE) + txt(px(-2), y + 196, 'arrivée : −2', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();
// S9 — rapport 2 pour 3
figs.u1f9 = (() => { const { s, y } = head('Le rapport entre deux quantités', ['2 jetons bleus pour 3 jetons rouges : le rapport est 2/3, ou 2 : 3.']);
  let b = '';
  for (let k = 0; k < 2; k++) b += dot(140 + k * 70, y + 60, 24, '#1565C0');
  for (let k = 0; k < 3; k++) b += dot(340 + k * 70, y + 60, 24, PINK2);
  b += txt(175, y + 125, '2 bleus', 22, '#1565C0', 'bold', 'middle') + txt(410, y + 125, '3 rouges', 22, PINK2, 'bold', 'middle');
  b += box(620, y + 25, 300, 90, 'rapport = 2/3', '#E8F5E9', GREEN, 27);
  b += txt(500, y + 190, 'un rapport compare deux quantités de même nature : pas d’unité !', 21, OCRE, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();
// S10 — rapport vs taux
figs.u1f10 = (() => { const { s, y } = head('Rapport ou taux ?', ['Rapport : mêmes unités, sans unité. Taux : unités différentes, avec unité.']);
  let b = box(80, y + 25, 400, 150, '', '#E8F5E9', GREEN, 22);
  b += txt(280, y + 65, 'RAPPORT', 24, GREEN, 'bold', 'middle')
    + txt(280, y + 105, '15 filles / 25 élèves = 3/5', 21, '#333', 'normal', 'middle')
    + txt(280, y + 143, 'sans unité', 20, GREEN, 'bold', 'middle');
  b += box(520, y + 25, 400, 150, '', '#FDE7EF', PINK2, 22);
  b += txt(720, y + 65, 'TAUX', 24, PINK2, 'bold', 'middle')
    + txt(720, y + 105, '3 000 Ar pour 2 kg', 21, '#333', 'normal', 'middle')
    + txt(720, y + 143, '= 1 500 Ar/kg : avec unité', 20, PINK2, 'bold', 'middle');
  return svg(1000, y + 215, s + b); })();
// S11 — proportion produits croisés
figs.u1f11 = (() => { const { s, y } = head('La proportion', ['Une proportion est l’égalité de deux rapports : 2/3 = 8/12, et 2 × 12 = 3 × 8.']);
  let b = txt(240, y + 80, '2/3  =  8/12', 34, BLUE, 'bold', 'middle');
  b += `<path d="M 160 ${y + 105} Q 240 ${y + 160} 330 ${y + 105}" fill="none" stroke="${GREEN}" stroke-width="3"/>`
    + `<path d="M 160 ${y + 40} Q 240 ${y - 15} 330 ${y + 40}" fill="none" stroke="${PINK2}" stroke-width="3"/>`;
  b += box(480, y + 20, 440, 60, '2 × 12 = 24', '#FDE7EF', PINK2, 24)
    + box(480, y + 95, 440, 60, '3 × 8 = 24', '#E8F5E9', GREEN, 24)
    + txt(700, y + 200, 'produits croisés égaux : c’est une proportion !', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 235, s + b); })();
// S12 — rapports équivalents
figs.u1f12 = (() => { const { s, y } = head('Des rapports équivalents', ['2/3 = 8/12 : numérateur et dénominateur multipliés par le même nombre.']);
  let b = box(130, y + 45, 220, 90, '2/3', undefined, BLUE, 30);
  b += arrow(370, y + 90, 560, y + 90);
  b += box(580, y + 45, 220, 90, '8/12', '#FDE7EF', PINK2, 30);
  b += txt(465, y + 30, '× 4 en haut et en bas', 20, GREEN, 'bold', 'middle');
  b += txt(500, y + 195, 'le rapport ne change pas : 2 pour 3, c’est 8 pour 12', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 235, s + b); })();
// S13 — simplification
figs.u1f13 = (() => { const { s, y } = head('Simplifier un rapport', ['12 : 18 se simplifie par 6 → 2 : 3, la forme la plus simple.']);
  let b = box(120, y + 40, 240, 90, '12 : 18', undefined, BLUE, 30);
  b += arrow(380, y + 85, 560, y + 85);
  b += box(580, y + 40, 240, 90, '2 : 3', '#E8F5E9', GREEN, 30);
  b += txt(470, y + 25, '÷ 6 des deux côtés', 20, GREEN, 'bold', 'middle');
  b += txt(500, y + 190, '6 est le plus grand diviseur commun de 12 et 18', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();

const S = [
  {
    t: 'Écrire un grand nombre en notation scientifique', comp: 'Nombre', theme: 'Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10',
    goal: 'écrire un grand nombre sous la forme a × 10ⁿ avec 1 ≤ a < 10',
    mat: 'Tableau de puissances de 10, jeu de cartes de nombres, cahier, ardoises',
    revQ: 'Calcule 10³ et 10⁵.',
    revRA: '10³ = 1 000 ; 10⁵ = 100 000.',
    situation: 'La distance Terre-Soleil vaut 149 600 000 km. Écrire ce nombre sur une petite étiquette ? Impossible sans se tromper dans les zéros ! Les scientifiques ont trouvé une écriture courte : 1,496 × 10⁸ km.',
    def: 'La notation scientifique d’un nombre est son écriture sous la forme a × 10ⁿ, où a est un nombre décimal tel que 1 ≤ a < 10 et n un entier relatif. Pour un grand nombre, n est positif.',
    autrement: 'on garde un seul chiffre non nul avant la virgule, et la puissance de 10 retient le nombre de rangs déplacés.',
    concept: 'Pour écrire 149 600 000 en notation scientifique, on place la virgule juste après le premier chiffre : 1,496. On compte ensuite de combien de rangs la virgule a reculé : 8 rangs, donc l’exposant est 8 et 149 600 000 = 1,496 × 10⁸. La condition 1 ≤ a < 10 est essentielle : 14,96 × 10⁷ représente le même nombre, mais ce n’est PAS une notation scientifique, car 14,96 ≥ 10.',
    synthese: 'un grand nombre s’écrit a × 10ⁿ en plaçant la virgule après le premier chiffre non nul ; n est le nombre de rangs dont la virgule a reculé.',
    method: ['Placer la virgule juste après le premier chiffre non nul pour obtenir a.', 'Compter le nombre de rangs dont la virgule a été déplacée : c’est n.', 'Vérifier que 1 ≤ a < 10 et écrire a × 10ⁿ.'],
    exemple: '149 600 000 = 1,496 × 10⁸ ; 25 000 = 2,5 × 10⁴ ; 587 000 000 = 5,87 × 10⁸.',
    erreur: 'Écrire 25 000 = 25 × 10³ : le nombre 25 n’est pas entre 1 et 10 ! La notation scientifique exige 2,5 × 10⁴.',
    saistu: 'Madagascar compte environ 30 000 000 d’habitants, soit 3 × 10⁷. Et notre galaxie contient environ 2 × 10¹¹ étoiles : sans la notation scientifique, il faudrait écrire onze zéros !',
    exos: ['Écris en notation scientifique : a) 7 000 ; b) 450 000 ; d) 93 000 000 ; e) 605 000.',
      'Mets sous forme décimale : a) 3 × 10⁴ ; b) 1,25 × 10³ ; d) 7,8 × 10⁶ ; e) 9,01 × 10⁵.',
      'Ces écritures sont-elles des notations scientifiques ? Corrige si besoin : a) 32 × 10⁵ ; b) 4,7 × 10⁶ ; d) 0,8 × 10⁹ ; e) 10,5 × 10².'],
    corr: ['a) 7 × 10³ ; b) 4,5 × 10⁵ ; d) 9,3 × 10⁷ ; e) 6,05 × 10⁵.',
      'a) 30 000 ; b) 1 250 ; d) 7 800 000 ; e) 901 000.',
      'a) non → 3,2 × 10⁶ ; b) oui ; d) non → 8 × 10⁸ ; e) non → 1,05 × 10³.'],
    fig: 'u1f1'
  },
  {
    t: 'Écrire un petit nombre en notation scientifique', comp: 'Nombre', theme: 'Notation scientifique : exposant négatif',
    goal: 'écrire un nombre plus petit que 1 sous la forme a × 10ⁿ avec n négatif',
    mat: 'Tableau de puissances de 10, cartes de nombres décimaux, cahier',
    revQ: 'Écris 36 000 en notation scientifique.',
    revRA: '3,6 × 10⁴.',
    situation: 'Un cheveu mesure environ 0,00052 m d’épaisseur. Encore des zéros à n’en plus finir, mais cette fois APRÈS la virgule ! La notation scientifique fonctionne aussi : 5,2 × 10⁻⁴ m.',
    def: 'Pour un nombre strictement compris entre 0 et 1, la notation scientifique a × 10ⁿ comporte un exposant n négatif : n indique le nombre de rangs dont la virgule a avancé vers la droite.',
    autrement: 'petit nombre → la virgule avance et l’exposant devient négatif.',
    concept: 'Pour 0,00052, on avance la virgule jusqu’après le premier chiffre non nul : 5,2. La virgule a avancé de 4 rangs, donc l’exposant est −4 : 0,00052 = 5,2 × 10⁻⁴. La règle du signe est logique : multiplier par 10⁻⁴, c’est diviser par 10⁴ = 10 000, et 5,2 ÷ 10 000 = 0,00052. Grand nombre → exposant positif ; nombre plus petit que 1 → exposant négatif.',
    synthese: 'un nombre entre 0 et 1 s’écrit a × 10⁻ⁿ : la virgule avance de n rangs jusqu’après le premier chiffre non nul.',
    method: ['Avancer la virgule jusqu’après le premier chiffre non nul pour obtenir a.', 'Compter les rangs parcourus : l’exposant est l’opposé de ce nombre.', 'Vérifier : plus le nombre est petit, plus l’exposant est « très négatif ».'],
    exemple: '0,00052 = 5,2 × 10⁻⁴ ; 0,03 = 3 × 10⁻² ; 0,000007 = 7 × 10⁻⁶.',
    erreur: 'Confondre le sens : 0,03 = 3 × 10⁻², pas 3 × 10². Un nombre plus petit que 1 a TOUJOURS un exposant négatif.',
    saistu: 'Un virus mesure environ 1 × 10⁻⁷ m et un atome 1 × 10⁻¹⁰ m. Les microscopes électroniques les plus puissants « voient » jusqu’à 10⁻¹⁰ m : la notation scientifique est le langage de l’infiniment petit !',
    exos: ['Écris en notation scientifique : a) 0,004 ; b) 0,062 ; d) 0,0000085 ; e) 0,75.',
      'Mets sous forme décimale : a) 2 × 10⁻³ ; b) 4,1 × 10⁻² ; d) 6,5 × 10⁻⁵ ; e) 9 × 10⁻¹.',
      'Range du plus petit au plus grand : a) 3 × 10⁻² ; b) 3 × 10² ; d) 3 × 10⁻⁵ ; e) 3 × 10⁰.'],
    corr: ['a) 4 × 10⁻³ ; b) 6,2 × 10⁻² ; d) 8,5 × 10⁻⁶ ; e) 7,5 × 10⁻¹.',
      'a) 0,002 ; b) 0,041 ; d) 0,000065 ; e) 0,9.',
      'd) 3 × 10⁻⁵, puis a) 3 × 10⁻², puis e) 3 × 10⁰ = 3, puis b) 3 × 10² = 300.'],
    fig: 'u1f2'
  },
  {
    t: 'Développer un nombre en puissances de 10', comp: 'Nombre', theme: 'Développement décimal d’un nombre',
    goal: 'décomposer un nombre entier en somme de produits par des puissances de 10',
    mat: 'Tableau de numération, cartes de chiffres, cahier, ardoises',
    revQ: 'Que valent 10⁰ et 10¹ ?',
    revRA: '10⁰ = 1 ; 10¹ = 10.',
    situation: 'Dans 3 452, le chiffre 3 ne vaut pas 3 : il vaut 3 000 ! Chaque chiffre a une valeur qui dépend de sa place. Les puissances de 10 permettent d’écrire cette idée noir sur blanc.',
    def: 'Le développement décimal d’un nombre entier est son écriture en somme de produits de chaque chiffre par la puissance de 10 de son rang : 3 452 = 3 × 10³ + 4 × 10² + 5 × 10¹ + 2 × 10⁰.',
    autrement: 'on « déplie » le nombre : chaque chiffre multiplié par la puissance de 10 de sa colonne.',
    concept: 'Les rangs correspondent aux puissances de 10 : unités = 10⁰, dizaines = 10¹, centaines = 10², milliers = 10³, et ainsi de suite. Le développement montre pourquoi notre système s’appelle décimal : dix unités d’un rang font une unité du rang supérieur. Il relie aussi la notation scientifique au nombre complet : 3 452 ≈ 3,452 × 10³, et le développement détaille chacun des chiffres.',
    synthese: 'tout entier se développe en somme de chiffres × puissances de 10, le rang des unités correspondant à 10⁰.',
    method: ['Repérer le rang de chaque chiffre (unités, dizaines, centaines…).', 'Associer chaque rang à sa puissance de 10 (10⁰, 10¹, 10²…).', 'Écrire la somme des produits chiffre × puissance et vérifier en calculant.'],
    exemple: '3 452 = 3 × 10³ + 4 × 10² + 5 × 10¹ + 2 × 10⁰ ; 807 = 8 × 10² + 0 × 10¹ + 7 × 10⁰.',
    erreur: 'Oublier les rangs à zéro : 807 = 8 × 10² + 7, le zéro des dizaines doit laisser sa place — sinon on obtient 87 !',
    saistu: 'Les ordinateurs utilisent le même principe en base 2 : chaque chiffre binaire est multiplié par une puissance de 2. Le nombre 13 s’écrit 1101 en binaire, c’est-à-dire 8 + 4 + 0 + 1 !',
    exos: ['Développe en puissances de 10 : a) 256 ; b) 4 081 ; d) 90 307 ; e) 1 111.',
      'Retrouve le nombre : a) 5 × 10³ + 2 × 10² + 7 × 10⁰ ; b) 9 × 10⁴ + 9 × 10¹ ; d) 1 × 10⁵ + 3 × 10³ + 6 × 10⁰ ; e) 7 × 10² + 7 × 10¹ + 7 × 10⁰.',
      'a) Quel est le chiffre des centaines de 68 142 ? b) Que vaut-il réellement ? d) Écris 68 142 en développement décimal. e) Donne sa notation scientifique approchée avec deux chiffres après la virgule.'],
    corr: ['a) 2 × 10² + 5 × 10¹ + 6 × 10⁰ ; b) 4 × 10³ + 0 × 10² + 8 × 10¹ + 1 × 10⁰ ; d) 9 × 10⁴ + 0 × 10³ + 3 × 10² + 0 × 10¹ + 7 × 10⁰ ; e) 1 × 10³ + 1 × 10² + 1 × 10¹ + 1 × 10⁰.',
      'a) 5 207 ; b) 90 090 ; d) 103 006 ; e) 777.',
      'a) 1 ; b) 100 ; d) 6 × 10⁴ + 8 × 10³ + 1 × 10² + 4 × 10¹ + 2 × 10⁰ ; e) ≈ 6,81 × 10⁴.'],
    fig: 'u1f3'
  },
  {
    t: 'Explorer les entiers relatifs', comp: 'Nombre', theme: 'Nombres entiers relatifs',
    goal: 'reconnaître et utiliser les entiers relatifs dans des situations concrètes',
    mat: 'Thermomètre, droite numérique murale, jetons bicolores, cahier',
    revQ: 'Retrouve le nombre : 2 × 10³ + 5 × 10¹.',
    revRA: '2 050.',
    situation: 'Au petit matin d’hiver à Antsirabe, le thermomètre affiche −5° ! Et le plongeur du canal de Mozambique nage à −40 m sous la surface. Comment noter « au-dessous de zéro » ? Avec le signe moins.',
    def: 'Les entiers relatifs sont les entiers munis d’un signe : les positifs (+1, +2, +3…), les négatifs (−1, −2, −3…) et zéro, qui est le seul nombre à la fois positif et négatif. On les note ℤ.',
    autrement: 'les relatifs comptent dans les deux sens à partir de zéro : au-dessus ET au-dessous.',
    concept: 'Zéro est la référence : niveau de la mer, température de gel, compte à l’équilibre. Au-dessus, les positifs (+2 876 m pour un sommet) ; au-dessous, les négatifs (−40 m pour le plongeur). Le signe + est souvent sous-entendu : 5 et +5 désignent le même nombre. Les relatifs répondent aussi à une question impossible chez les naturels : 3 − 7 n’avait pas de réponse… maintenant, 3 − 7 = −4 !',
    synthese: 'les entiers relatifs — positifs, négatifs et zéro — permettent de repérer des positions de part et d’autre d’une référence.',
    method: ['Choisir la référence zéro de la situation (sol, mer, gel, équilibre).', 'Compter au-dessus avec +, au-dessous avec −.', 'Écrire le nombre avec son signe (le + peut rester sous-entendu).'],
    exemple: 'Gain de 2 000 Ar : +2 000 ; dette de 500 Ar : −500 ; rez-de-chaussée : 0 ; sous-sol : −1.',
    erreur: 'Croire que −40 est « plus grand » que −5 parce que 40 > 5 : −40 est au contraire bien plus bas ! Le signe change tout.',
    saistu: 'Les mathématiciens indiens utilisaient déjà les négatifs au VIIᵉ siècle pour noter les dettes. En Europe, on les a longtemps appelés « nombres absurdes » — avant de ne plus pouvoir s’en passer !',
    exos: ['Écris avec un entier relatif : a) 12 degrés au-dessus de zéro ; b) 7 degrés sous zéro ; d) une dette de 3 000 Ar ; e) 150 m au-dessus de la mer.',
      'Donne la situation contraire : a) +500 Ar ; b) −3 étages ; d) +15 km vers le nord ; e) −8°.',
      'a) Quel entier relatif représente le niveau de la mer ? b) Un ascenseur part de 0 et descend de 2 étages : position ? d) Le thermomètre passe de 0° à 6° sous zéro : écriture ? e) Cite deux situations de la vie où l’on utilise des négatifs.'],
    corr: ['a) +12 ; b) −7 ; d) −3 000 ; e) +150.',
      'a) −500 Ar (dette) ; b) +3 étages ; d) −15 km (vers le sud) ; e) +8°.',
      'a) 0 ; b) −2 ; d) −6° ; e) exemples : températures d’hiver, dettes, sous-sols, profondeurs marines.'],
    fig: 'u1f4'
  },
  {
    t: 'Comparer des relatifs sur la droite numérique', comp: 'Nombre', theme: 'Comparaison des entiers relatifs avec droite numérique',
    goal: 'comparer et ordonner des entiers relatifs à l’aide de la droite numérique',
    mat: 'Droite numérique murale, étiquettes de nombres, cahier, ardoises',
    revQ: 'Écris l’entier relatif : 9 m sous le niveau de la mer.',
    revRA: '−9.',
    situation: 'Quelle température est la plus froide : −4° ou −1° ? Les deux élèves ne sont pas d’accord ! Plaçons-les sur la droite numérique : celui qui est le plus à gauche est le plus petit.',
    def: 'Sur une droite numérique orientée vers la droite, les nombres sont rangés dans l’ordre croissant : de deux entiers relatifs, le plus grand est celui qui est situé le plus à droite.',
    autrement: 'sur la droite, plus on va vers la droite, plus c’est grand — les négatifs sont tous à gauche de zéro.',
    concept: 'La droite numérique rend la comparaison visible : −4 est à gauche de −1, donc −4 < −1 : il fait plus froid à −4°. Tout négatif est à gauche de zéro, tout positif à sa droite : donc tout négatif est inférieur à tout positif, même −1 < +100… non, attention : −1 < +100 bien sûr, mais aussi −1 000 < +1 ! Pour ordonner plusieurs nombres, on les place tous puis on les lit de gauche à droite.',
    synthese: 'sur la droite numérique, le plus grand de deux relatifs est le plus à droite ; les négatifs sont tous inférieurs à zéro et aux positifs.',
    method: ['Tracer la droite graduée et placer zéro.', 'Placer chaque nombre : positifs à droite, négatifs à gauche.', 'Lire de gauche à droite pour obtenir l’ordre croissant.'],
    exemple: '−4 < −1 < 0 < +3 ; le plus froid de −4° et −1° est −4°.',
    erreur: 'Placer −4 à droite de −1 « parce que 4 > 1 » : plus la distance à zéro d’un négatif est grande, plus il part LOIN à gauche.',
    saistu: 'La droite numérique est l’ancêtre de la frise chronologique : les années avant J.-C. y jouent le rôle des négatifs. L’an −300 est bien avant l’an −30, exactement comme −300 < −30 !',
    exos: ['Place sur une droite graduée puis compare : a) −3 et +1 ; b) −5 et −2 ; d) 0 et −4 ; e) +2 et +5.',
      'Range dans l’ordre croissant : a) +3 ; −1 ; 0 ; b) −2 ; −7 ; −4 ; d) +1 ; −1 ; +4 ; −5 ; e) 0 ; −3 ; +3 ; −6.',
      'Températures de la semaine : lundi −2°, mardi +4°, mercredi −6°, jeudi 0°, vendredi +1°. a) Jour le plus froid ? b) Jour le plus chaud ? d) Range les cinq températures en ordre croissant. e) Quels jours a-t-il gelé (température < 0°) ?'],
    corr: ['a) −3 < +1 ; b) −5 < −2 ; d) −4 < 0 ; e) +2 < +5.',
      'a) −1 < 0 < +3 ; b) −7 < −4 < −2 ; d) −5 < −1 < +1 < +4 ; e) −6 < −3 < 0 < +3.',
      'a) mercredi (−6°) ; b) mardi (+4°) ; d) −6 < −2 < 0 < +1 < +4 ; e) lundi et mercredi.'],
    fig: 'u1f5'
  },
  {
    t: 'Comparer des relatifs sans droite numérique', comp: 'Nombre', theme: 'Comparaison des entiers relatifs sans droite numérique',
    goal: 'comparer des entiers relatifs par des règles, sans tracer de droite',
    mat: 'Cartes de nombres relatifs, cahier, ardoises',
    revQ: 'Range en ordre croissant : −3 ; +2 ; −7.',
    revRA: '−7 < −3 < +2.',
    situation: 'Comparer −835 et −836 sur une droite graduée ? Il faudrait une feuille géante ! Heureusement, trois règles permettent de comparer sans rien tracer.',
    def: 'Pour comparer deux entiers relatifs sans droite : un positif est toujours supérieur à un négatif ; deux positifs se comparent comme des naturels ; de deux négatifs, le plus grand est celui qui a la plus petite distance à zéro.',
    autrement: 'chez les négatifs, l’ordre se renverse : plus la « valeur sans signe » est grande, plus le nombre est petit.',
    concept: 'La distance à zéro d’un nombre est sa valeur sans le signe : celle de −836 est 836. Règle 1 : +2 > −9 999, le signe l’emporte sur tout. Règle 2 : +7 > +3, rien ne change chez les positifs. Règle 3 : −835 > −836 car 835 < 836 — être moins loin sous zéro, c’est être plus grand. Penser aux températures : −835° serait « moins froid » que −836°.',
    synthese: 'positif > négatif ; deux positifs : ordre habituel ; deux négatifs : l’ordre s’inverse par rapport aux distances à zéro.',
    method: ['Comparer d’abord les signes : si différents, le positif gagne.', 'Deux positifs : comparer comme des nombres naturels.', 'Deux négatifs : comparer les distances à zéro puis INVERSER le sens.'],
    exemple: '+2 > −9 ; +7 > +3 ; −3 > −8 ; −835 > −836.',
    erreur: 'Écrire −8 > −3 « car 8 > 3 » : chez les négatifs, c’est l’inverse ! −8 est plus loin sous zéro, donc plus petit.',
    saistu: 'Les comptables appliquent cette règle chaque jour : un solde de −835 000 Ar est « meilleur » qu’un solde de −836 000 Ar… même si aucun des deux ne fait plaisir !',
    exos: ['Compare avec < ou > : a) +5 et −12 ; b) −9 et −2 ; d) +14 et +9 ; e) −60 et −59.',
      'Vrai ou faux ? Corrige : a) −7 > −1 ; b) 0 > −15 ; d) +3 < −30 ; e) −100 < −99.',
      'a) Range en ordre décroissant : −11 ; +4 ; −2 ; 0 ; +9. b) Quel est le plus grand entier négatif ? d) Quel est le plus petit : −1 234 ou −1 243 ? e) Trouve trois entiers compris entre −3 et +1.'],
    corr: ['a) +5 > −12 ; b) −9 < −2 ; d) +14 > +9 ; e) −60 < −59.',
      'a) faux : −7 < −1 ; b) vrai ; d) faux : +3 > −30 ; e) vrai.',
      'a) +9 > +4 > 0 > −2 > −11 ; b) −1 ; d) −1 243 ; e) −2, −1, 0.'],
    fig: 'u1f6'
  },
  {
    t: 'Utiliser l’opposé d’un entier relatif', comp: 'Nombre', theme: 'Opposé d’un entier relatif',
    goal: 'déterminer et utiliser l’opposé d’un entier relatif',
    mat: 'Droite numérique, jetons bicolores, cahier, ardoises',
    revQ: 'Compare −45 et −54.',
    revRA: '−45 > −54.',
    situation: 'Naina gagne 300 Ar au jeu, puis en perd 300 au tour suivant : retour à la case départ ! +300 puis −300 s’annulent exactement : ces deux nombres sont opposés.',
    def: 'Deux nombres sont opposés lorsqu’ils ont la même distance à zéro et des signes contraires. L’opposé de a se note −a, et la somme de deux opposés est nulle : a + (−a) = 0.',
    autrement: 'l’opposé, c’est le reflet du nombre de l’autre côté de zéro.',
    concept: 'Sur la droite numérique, +4 et −4 sont symétriques par rapport à zéro : même distance (4), côtés opposés. L’opposé de +4 est −4, l’opposé de −4 est +4 : prendre deux fois l’opposé ramène au nombre de départ. Zéro est son propre opposé. Cette notion prépare la soustraction des relatifs : soustraire un nombre, ce sera ajouter son opposé.',
    synthese: 'l’opposé d’un relatif a la même distance à zéro et le signe contraire ; a + (−a) = 0.',
    method: ['Garder la distance à zéro du nombre.', 'Changer son signe.', 'Vérifier : la somme du nombre et de son opposé doit faire 0.'],
    exemple: 'opp(+7) = −7 ; opp(−12) = +12 ; opp(0) = 0 ; (+300) + (−300) = 0.',
    erreur: 'Confondre opposé et inverse : l’opposé de 4 est −4 ; l’inverse de 4 est 1/4. Deux idées très différentes !',
    saistu: 'En comptabilité, chaque écriture a son opposée : un débit de 5 000 Ar s’annule par un crédit de 5 000 Ar. C’est le principe de la partie double, inventé par les marchands italiens au XVᵉ siècle !',
    exos: ['Donne l’opposé : a) +9 ; b) −15 ; d) 0 ; e) +237.',
      'Calcule : a) (+8) + (−8) ; b) (−21) + (+21) ; d) opp(opp(+6)) ; e) opp(−opp(−3)).',
      'a) Un plongeur à −12 m remonte à l’opposé de sa position : où est-il ? b) Est-ce possible pour un plongeur ? d) La température passe de −7° à son opposé : gagne-t-on ou perd-on des degrés ? e) De combien ?'],
    corr: ['a) −9 ; b) +15 ; d) 0 ; e) −237.',
      'a) 0 ; b) 0 ; d) +6 ; e) opp(−3) = +3, −(+3) = −3, opp(−3) = +3.',
      'a) à +12 m ; b) non : +12 m serait dans les airs — c’est un oiseau qu’il faudrait ! d) on gagne ; e) de −7 à +7 : 14 degrés gagnés.'],
    fig: 'u1f7'
  },
  {
    t: 'Additionner des relatifs par déplacement', comp: 'Nombre', theme: 'Addition de deux relatifs sur la droite numérique',
    goal: 'additionner deux entiers relatifs en se déplaçant sur la droite numérique',
    mat: 'Droite numérique au sol, jetons, cahier, ardoises',
    revQ: 'Quel est l’opposé de −8 ? Et la somme (−8) + (+8) ?',
    revRA: '+8 ; la somme vaut 0.',
    situation: 'Jouons sur la droite tracée dans la cour : pars de 0, avance de 3 pas (+3), puis recule de 5 pas (−5). Où es-tu ? Deux pas derrière le départ : (+3) + (−5) = −2 !',
    def: 'Pour additionner des relatifs sur la droite numérique, on part de zéro puis on se déplace : vers la droite pour un nombre positif, vers la gauche pour un nombre négatif. Le point d’arrivée est la somme.',
    autrement: 'additionner, c’est enchaîner les déplacements : + avance, − recule.',
    concept: 'Le déplacement rend l’addition des relatifs naturelle : (+3) + (−5) = −2 se lit « 3 en avant, 5 en arrière, j’arrive 2 derrière zéro ». On observe deux cas : signes identiques → les déplacements s’ajoutent dans le même sens, le signe reste ((−2) + (−3) = −5) ; signes contraires → les déplacements se compensent, le signe du plus long déplacement l’emporte et on soustrait les distances ((+3) + (−5) = −2 car 5 − 3 = 2 côté négatif).',
    synthese: 'sur la droite, + avance et − recule : mêmes signes → on additionne les distances ; signes contraires → on les soustrait et le plus grand déplacement donne son signe.',
    method: ['Partir de zéro et faire le premier déplacement.', 'Enchaîner le second déplacement à partir du point atteint.', 'Lire le point d’arrivée : c’est la somme.'],
    exemple: '(+3) + (−5) = −2 ; (−2) + (−3) = −5 ; (−4) + (+7) = +3.',
    erreur: 'Additionner les distances sans regarder les signes : (+3) + (−5) n’est pas 8 ! Les sens contraires se compensent.',
    saistu: 'Ton téléphone fait ces additions en permanence : batterie +80 % puis consommation −35 %, crédit +5 000 Ar puis appel −1 200 Ar. Chaque solde est une somme de relatifs !',
    exos: ['Calcule en te déplaçant : a) (+2) + (+4) ; b) (−3) + (−2) ; d) (+6) + (−4) ; e) (−7) + (+3).',
      'Calcule : a) (−5) + (+5) ; b) (+8) + (−11) ; d) (−6) + (−6) ; e) (+9) + (−2).',
      'a) Naina gagne 400 Ar puis perd 650 Ar : solde ? b) La température passe de −3° et gagne 8° : combien fait-il ? d) Un ascenseur part de l’étage −1 et monte de 4 étages : arrivée ? e) Écris l’égalité correspondant à chaque situation.'],
    corr: ['a) +6 ; b) −5 ; d) +2 ; e) −4.',
      'a) 0 ; b) −3 ; d) −12 ; e) +7.',
      'a) −250 Ar ; b) +5° ; d) étage +3 ; e) (+400) + (−650) = −250 ; (−3) + (+8) = +5 ; (−1) + (+4) = +3.'],
    fig: 'u1f8'
  },
  {
    t: 'Établir un rapport entre quantités de même nature', comp: 'Nombre', theme: 'Relation entre les quantités de même nature',
    goal: 'exprimer la relation entre deux quantités de même nature par un rapport',
    mat: 'Jetons bicolores, schémas de proportionnalité, cahier',
    revQ: 'Calcule (−4) + (+9).',
    revRA: '+5.',
    situation: 'Pour préparer le ranovola, Bodo mélange 2 verres de riz grillé pour 3 litres… non : comparons plus simple ! Dans le sac de jetons, il y a 2 bleus pour 3 rouges. Comment dire cette relation en mathématiques ?',
    def: 'Un rapport est la comparaison de deux quantités de même nature par un quotient : le rapport de a à b est a/b, noté aussi a : b. Comme les deux quantités ont la même unité, le rapport n’a pas d’unité.',
    autrement: 'le rapport dit « combien de l’un POUR combien de l’autre » — 2 pour 3.',
    concept: 'Le rapport 2/3 des jetons bleus aux rouges signifie : pour chaque groupe de 2 bleus, il y a 3 rouges. L’ordre compte : le rapport des rouges aux bleus est 3/2, pas 2/3 ! On peut aussi comparer une partie au tout : 2 bleus sur 5 jetons, rapport 2/5. Comme les unités sont identiques, elles disparaissent dans le quotient : un rapport est un nombre pur.',
    synthese: 'un rapport compare deux quantités de même nature par un quotient sans unité, dans un ordre précis : a pour b s’écrit a/b.',
    method: ['Vérifier que les deux quantités ont la même nature (même unité).', 'Écrire le quotient dans l’ordre demandé : premier nommé au numérateur.', 'Simplifier si possible et lire « a pour b ».'],
    exemple: '2 bleus pour 3 rouges : rapport 2/3 ; 15 filles pour 10 garçons : rapport 15/10 = 3/2.',
    erreur: 'Inverser l’ordre : « le rapport des garçons aux filles » de 10 garçons et 15 filles est 10/15 = 2/3, pas 3/2 !',
    saistu: 'Le célèbre « nombre d’or » ≈ 1,618 est un rapport : celui des dimensions jugées les plus harmonieuses. On le retrouve dans les coquillages, les fleurs de tournesol… et la grande pyramide d’Égypte !',
    exos: ['Écris le rapport : a) 3 cahiers pour 4 livres ; b) 5 filles pour 7 garçons ; d) 12 mangues pour 8 letchis ; e) 6 victoires pour 10 matchs.',
      'Dans une classe de 30 élèves, il y a 18 filles. a) Rapport des filles aux garçons ? b) Rapport des garçons aux filles ? d) Rapport des filles au total ? e) Simplifie chaque rapport.',
      'a) Une équipe gagne 9 matchs sur 12 : rapport victoires/matchs ? b) Simplifie-le. d) Une autre équipe gagne 6 sur 8 : rapport simplifié ? e) Laquelle a le meilleur rapport de victoires ?'],
    corr: ['a) 3/4 ; b) 5/7 ; d) 12/8 = 3/2 ; e) 6/10 = 3/5.',
      'a) 18/12 ; b) 12/18 ; d) 18/30 ; e) 3/2 ; 2/3 ; 3/5.',
      'a) 9/12 ; b) 3/4 ; d) 6/8 = 3/4 ; e) aucune : les deux rapports sont égaux !'],
    fig: 'u1f9'
  },
  {
    t: 'Distinguer rapport et taux', comp: 'Nombre', theme: 'Différence entre rapport et taux',
    goal: 'distinguer un rapport (même nature) d’un taux (natures différentes)',
    mat: 'Étiquettes de prix, jeu de correspondance, cahier',
    revQ: 'Simplifie le rapport 20/8.',
    revRA: '5/2.',
    situation: 'Au marché : « 3 000 Ar pour 2 kg de riz ». À l’école : « 15 filles sur 25 élèves ». Deux comparaisons… mais pas de la même famille ! L’une garde une unité, l’autre non.',
    def: 'Un rapport compare deux quantités de même nature : il est sans unité. Un taux compare deux quantités de natures différentes : il garde une unité composée, comme Ar/kg ou km/h.',
    autrement: 'mêmes unités qui s’effacent → rapport ; unités différentes qui restent → taux.',
    concept: 'Dans 15 filles / 25 élèves = 3/5, les « personnes » du haut et du bas s’annulent : nombre pur, c’est un rapport. Dans 3 000 Ar / 2 kg = 1 500 Ar/kg, les ariary et les kilogrammes ne peuvent pas s’annuler : l’unité composée reste, c’est un taux. Le taux unitaire (pour 1 kg, pour 1 heure, pour 1 litre) est le plus pratique pour comparer deux offres : 1 500 Ar/kg se compare immédiatement à 1 400 Ar/kg.',
    synthese: 'rapport = quotient de même nature, sans unité ; taux = quotient de natures différentes, avec unité composée (souvent ramené à l’unité).',
    method: ['Identifier la nature des deux quantités comparées.', 'Même nature → rapport sans unité ; natures différentes → taux avec unité.', 'Pour un taux, calculer la valeur unitaire (pour 1) afin de comparer.'],
    exemple: '15/25 = 3/5 (rapport) ; 3 000 Ar pour 2 kg = 1 500 Ar/kg (taux) ; 180 km en 3 h = 60 km/h (taux).',
    erreur: 'Écrire un taux sans son unité : « le riz est à 1 500 » ne veut rien dire — 1 500 Ar/kg, voilà l’information complète !',
    saistu: 'Le « taux de change » porte bien son nom : environ 5 000 ariary pour 1 euro, deux monnaies différentes. Les cambistes le recalculent plusieurs fois par jour !',
    exos: ['Rapport ou taux ? a) 7 garçons sur 12 élèves ; b) 2 500 Ar pour 5 œufs ; d) 240 km en 4 heures ; e) 3 cahiers pour 2 livres.',
      'Calcule le taux unitaire : a) 3 000 Ar pour 2 kg ; b) 8 000 Ar pour 5 L ; d) 150 km en 3 h ; e) 1 200 Ar pour 4 bonbons.',
      'Riz de Tsena A : 4 200 Ar pour 3 kg ; riz de Tsena B : 2 900 Ar pour 2 kg. a) Taux de A ? b) Taux de B ? d) Lequel est le moins cher au kilo ? e) Pourquoi fallait-il un taux et non un rapport ?'],
    corr: ['a) rapport ; b) taux (Ar/œuf) ; d) taux (km/h) ; e) rapport.',
      'a) 1 500 Ar/kg ; b) 1 600 Ar/L ; d) 50 km/h ; e) 300 Ar/bonbon.',
      'a) 1 400 Ar/kg ; b) 1 450 Ar/kg ; d) Tsena A ; e) prix et masse sont de natures différentes : la comparaison exige un taux unitaire.'],
    fig: 'u1f10'
  },
  {
    t: 'Relier rapport et proportion', comp: 'Nombre', theme: 'Rapport et proportion',
    goal: 'reconnaître une proportion comme égalité de deux rapports et utiliser les produits croisés',
    mat: 'Schémas de proportionnalité, jeu de correspondance, cahier',
    revQ: 'Calcule le taux : 4 500 Ar pour 3 kg.',
    revRA: '1 500 Ar/kg.',
    situation: 'La recette de Bodo : 2 mesures de riz pour 3 mesures d’eau. Hery en prépare pour toute la famille : 8 mesures de riz pour 12 d’eau. Même goût ? Vérifions que les deux rapports sont égaux !',
    def: 'Une proportion est l’égalité de deux rapports : a/b = c/d. Dans une proportion, les produits croisés sont égaux : a × d = b × c, et réciproquement.',
    autrement: 'une proportion dit que deux « pour » racontent la même comparaison — et les produits en croix le vérifient.',
    concept: 'Les rapports 2/3 et 8/12 forment-ils une proportion ? Produits croisés : 2 × 12 = 24 et 3 × 8 = 24 : égaux, donc 2/3 = 8/12 — le riz de Hery aura le même goût ! Ce critère marche toujours, même avec des nombres peu commodes, et il permet aussi de trouver un terme manquant : si 2/3 = x/15, alors 2 × 15 = 3 × x, donc x = 10.',
    synthese: 'a/b = c/d est une proportion si et seulement si a × d = b × c ; les produits croisés servent à vérifier ou à compléter une proportion.',
    method: ['Écrire les deux rapports face à face.', 'Calculer les deux produits croisés.', 'Produits égaux → proportion ; sinon non. Pour un terme manquant, égaler les produits croisés et résoudre.'],
    exemple: '2/3 = 8/12 car 2 × 12 = 3 × 8 = 24 ; si 2/3 = x/15, alors x = 30 ÷ 3 = 10.',
    erreur: 'Croiser dans le mauvais sens ou multiplier les numérateurs entre eux : c’est bien a × d et b × c, en diagonale !',
    saistu: 'La règle des produits croisés figurait déjà, sous forme de « règle de trois », dans les manuels des marchands du Moyen Âge : elle servait à convertir monnaies, poids et mesures d’une ville à l’autre !',
    exos: ['Proportion ou non ? a) 3/4 et 9/12 ; b) 2/5 et 7/15 ; d) 6/9 et 10/15 ; e) 5/8 et 15/25.',
      'Trouve le terme manquant : a) 3/4 = x/20 ; b) 2/7 = 10/x ; d) x/6 = 12/9 ; e) 5/x = 20/28.',
      'La recette dit 2 mesures de riz pour 3 d’eau. a) Hery met 8 de riz : combien d’eau ? b) Vero met 9 d’eau : combien de riz ? d) Fetra met 5 de riz et 8 d’eau : recette respectée ? e) Justifie par les produits croisés.'],
    corr: ['a) oui (36 = 36) ; b) non (30 ≠ 35) ; d) oui (90 = 90) ; e) non (125 ≠ 120).',
      'a) x = 15 ; b) x = 35 ; d) x = 8 ; e) x = 7.',
      'a) 12 d’eau ; b) 6 de riz ; d) non ; e) 2 × 8 = 16 et 3 × 5 = 15 : produits différents, la proportion n’est pas respectée.'],
    fig: 'u1f11'
  },
  {
    t: 'Reconnaître deux rapports équivalents', comp: 'Nombre', theme: 'Proportionnalité et équivalence de deux rapports',
    goal: 'construire et reconnaître des rapports équivalents',
    mat: 'Jetons, tableaux de rapports, cahier, ardoises',
    revQ: 'Complète la proportion : 3/5 = x/20.',
    revRA: 'x = 12.',
    situation: 'Dans la classe A, 2 élèves sur 3 viennent à pied ; dans la classe B, 8 sur 12. « On est plus sportifs ! » dit la classe B. Vraiment ? Comparons les rapports…',
    def: 'Deux rapports sont équivalents lorsqu’ils expriment la même comparaison : on passe de l’un à l’autre en multipliant (ou divisant) numérateur et dénominateur par le même nombre non nul.',
    autrement: 'agrandir ou réduire les deux termes ensemble ne change pas le « pour » : 2 pour 3, c’est pareil que 8 pour 12.',
    concept: 'De 2/3 à 8/12 : on a multiplié haut et bas par 4 — le rapport est inchangé, les deux classes sont aussi « sportives » l’une que l’autre ! Chaque rapport possède une infinité d’équivalents : 2/3 = 4/6 = 6/9 = 8/12 = … Cette famille d’équivalents est exactement ce qui définit la proportionnalité : les couples (3 ; 2), (6 ; 4), (12 ; 8) forment un tableau de proportionnalité.',
    synthese: 'deux rapports sont équivalents si l’on passe de l’un à l’autre en multipliant les deux termes par un même nombre ; ils forment alors une proportion.',
    method: ['Chercher par quel nombre passer du premier numérateur au second.', 'Vérifier que le même facteur relie les dénominateurs.', 'Contrôler au besoin avec les produits croisés.'],
    exemple: '2/3 = 8/12 (× 4) ; 15/20 = 3/4 (÷ 5) ; 2/3 = 4/6 = 6/9 = 8/12…',
    erreur: 'Ajouter le même nombre en haut et en bas : 2/3 ≠ 3/4 ! Seule la MULTIPLICATION (ou division) conserve le rapport.',
    saistu: 'Les écrans partagent des rapports équivalents : 16/9 = 1 920/1 080 = 1 280/720. Qu’il soit géant ou de poche, un écran « 16:9 » garde exactement les mêmes proportions !',
    exos: ['Complète pour obtenir des rapports équivalents : a) 1/2 = …/8 ; b) 3/4 = 9/… ; d) 20/30 = …/3 ; e) 5/6 = 25/….',
      'Les rapports sont-ils équivalents ? a) 4/6 et 6/9 ; b) 5/7 et 10/13 ; d) 9/12 et 3/4 ; e) 8/20 et 2/5.',
      'Classe A : 2 à pied sur 3 ; classe B : 8 sur 12 ; classe C : 10 sur 16. a) Rapport de C simplifié ? b) A et B sont-elles équivalentes ? d) Et C par rapport à A ? e) Quelle classe a la plus forte part de marcheurs ?'],
    corr: ['a) 4 ; b) 12 ; d) 2 ; e) 30.',
      'a) oui ; b) non ; d) oui ; e) oui.',
      'a) 5/8 ; b) oui (2/3 = 8/12) ; d) 5/8 ≠ 2/3 (15/24 vs 16/24) ; e) A et B (2/3 = 16/24 > 5/8 = 15/24).'],
    fig: 'u1f12'
  },
  {
    t: 'Simplifier un rapport', comp: 'Nombre', theme: 'Simplification d’un rapport',
    goal: 'réduire un rapport à sa forme la plus simple',
    mat: 'Cartes de rapports, tableaux de diviseurs, cahier',
    revQ: '4/6 et 6/9 sont-ils équivalents ?',
    revRA: 'Oui : 4 × 9 = 36 = 6 × 6.',
    situation: 'L’école compte 12 enseignants pour 18 classes… euh, 12 pour 18 ? Dur à retenir ! Le directeur préfère dire : « 2 enseignants pour 3 classes ». Même information, nombres plus simples.',
    def: 'Simplifier un rapport, c’est diviser ses deux termes par un diviseur commun. La forme irréductible est obtenue en divisant par le plus grand diviseur commun : les deux termes n’ont alors plus de diviseur commun autre que 1.',
    autrement: 'on raconte le même « pour » avec les plus petits nombres possibles.',
    concept: 'Pour 12 : 18, le plus grand diviseur commun est 6 : en divisant, on obtient 2 : 3, la forme irréductible. On peut aussi simplifier par étapes : 12/18 = 6/9 (÷2) = 2/3 (÷3) — le résultat final est le même. Un rapport simplifié se compare, se mémorise et se communique mieux ; c’est la carte d’identité de toute la famille de rapports équivalents.',
    synthese: 'on simplifie un rapport en divisant ses deux termes par leurs diviseurs communs, jusqu’à la forme irréductible.',
    method: ['Chercher un diviseur commun aux deux termes (2, 3, 5…).', 'Diviser les deux termes et recommencer tant que possible.', 'S’arrêter quand le seul diviseur commun est 1 : forme irréductible.'],
    exemple: '12 : 18 = 2 : 3 (÷6) ; 45/60 = 3/4 (÷15) ; 14/21 = 2/3 (÷7).',
    erreur: 'Ne diviser qu’un seul terme : 12/18 ≠ 2/18 ! La division doit toucher le haut ET le bas.',
    saistu: 'Les cartographes simplifient leurs échelles pour les rendre parlantes : plutôt que 4 cm pour 2 km, ils écrivent 1/50 000 — un rapport irréductible que tous les randonneurs du monde comprennent !',
    exos: ['Simplifie : a) 10/15 ; b) 24 : 36 ; d) 18/24 ; e) 35 : 50.',
      'Rends irréductible : a) 16/40 ; b) 27/45 ; d) 42 : 56 ; e) 100/75.',
      'a) 20 filles pour 30 garçons : rapport irréductible ? b) 48 réussites sur 60 essais : forme simple ? d) Quel rapport est déjà irréductible : 9/12, 7/11, 15/18 ? e) Explique comment tu le sais.'],
    corr: ['a) 2/3 ; b) 2 : 3 ; d) 3/4 ; e) 7 : 10.',
      'a) 2/5 ; b) 3/5 ; d) 3 : 4 ; e) 4/3.',
      'a) 2/3 ; b) 4/5 ; d) 7/11 ; e) 7 et 11 n’ont aucun diviseur commun autre que 1.'],
    fig: 'u1f13'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'Nombre',
  rag: 'démontrer une compréhension du concept et effectuer les calculs avec les nombres rationnels et irrationnels.',
  valeurs: 'rigueur et persévérance',
  sessions: S,
  revision: {
    table: [
      ['Notation scientifique', 'a × 10ⁿ avec 1 ≤ a < 10 ; n > 0 grands nombres, n < 0 petits', 'Écrire et lire grands et petits nombres'],
      ['Développement décimal', 'Somme des chiffres × puissances de 10', 'Déplier un nombre rang par rang'],
      ['Entiers relatifs', 'Positifs, négatifs et zéro autour d’une référence', 'Modéliser températures, dettes, altitudes'],
      ['Comparaison', 'Droite numérique ou règles des signes', 'Comparer et ordonner des relatifs'],
      ['Opposé et addition', 'opp(a) = −a ; + avance, − recule', 'Calculer des sommes par déplacement'],
      ['Rapports et proportions', 'Rapport sans unité ; taux avec unité ; produits croisés', 'Comparer, vérifier, simplifier']
    ],
    questions: [
      'Écris 3 400 000 et 0,0072 en notation scientifique.',
      'Développe 5 063 en puissances de 10.',
      'Range en ordre croissant : −4 ; +2 ; −9 ; 0.',
      'Calcule (−6) + (+10) et (+4) + (−7).',
      'Le rapport 18/24 est-il équivalent à 3/4 ? Simplifie-le.'
    ],
    answers: [
      '3,4 × 10⁶ ; 7,2 × 10⁻³.',
      '5 × 10³ + 0 × 10² + 6 × 10¹ + 3 × 10⁰.',
      '−9 < −4 < 0 < +2.',
      '+4 ; −3.',
      'Oui : 18/24 = 3/4 en divisant par 6.'
    ]
  },
  exam: {
    exos: [
      'Écris en notation scientifique : a) 82 000 ; b) 1 500 000 ; d) 0,0009 ; e) 0,056.',
      'a) Développe 7 408 en puissances de 10. b) Retrouve le nombre : 6 × 10⁴ + 2 × 10² + 5 × 10⁰. d) Donne la notation scientifique de 7 408 (arrondie à deux chiffres après la virgule). e) Quel est le chiffre des centaines de 7 408 et que vaut-il ?',
      'a) Compare −12 et −21. b) Range en ordre croissant : +3 ; −8 ; 0 ; −1 ; +7. d) Donne l’opposé de −14 et calcule (−14) + (+14). e) Calcule (+5) + (−9) et (−3) + (−6).',
      'Au marché, 6 000 Ar pour 4 kg de riz. a) Est-ce un rapport ou un taux ? Justifie. b) Calcule la valeur unitaire. d) Un autre vendeur propose 4 400 Ar pour 3 kg : lequel est le moins cher ? e) 15 filles pour 25 élèves : rapport irréductible ?',
      'a) 3/5 et 12/20 forment-ils une proportion ? Justifie par les produits croisés. b) Complète : 7/4 = x/12. d) Simplifie le rapport 36 : 48. e) Donne deux rapports équivalents à 5/8.'
    ],
    corr: [
      'a) 8,2 × 10⁴ ; b) 1,5 × 10⁶ ; d) 9 × 10⁻⁴ ; e) 5,6 × 10⁻². Un point par réponse.',
      'a) 7 × 10³ + 4 × 10² + 0 × 10¹ + 8 × 10⁰ ; b) 60 205 ; d) 7,41 × 10³ ; e) 4, qui vaut 400. Un point par item.',
      'a) −12 > −21 ; b) −8 < −1 < 0 < +3 < +7 ; d) +14 ; somme 0 ; e) −4 ; −9. Un point par item.',
      'a) taux : Ar et kg sont de natures différentes ; b) 1 500 Ar/kg ; d) 4 400 ÷ 3 ≈ 1 467 Ar/kg : le second ; e) 15/25 = 3/5. Un point par item.',
      'a) oui : 3 × 20 = 60 = 5 × 12 ; b) x = 21 ; d) 3 : 4 ; e) exemples : 10/16 et 15/24. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
