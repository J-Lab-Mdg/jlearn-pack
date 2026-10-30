const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, bar, grid100, tableEl, box, arrow, nline, dot, poly, seg, circle, BLUE, PINK, PINK2, GREEN, GREENL, OCRE, BLUEL } = L;

const figs = {};

// 1. Lire un nombre : classes de trois chiffres et cache de lecture.
{
  const h = head('Lire un grand nombre, classe après classe', ['On écrit de droite à gauche ; on lit de gauche à droite.', 'Cache les autres classes pour ne pas te perdre.']);
  let b = h.s;
  b += tableEl(65, 160, [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100], 58,
    [['MILLIARDS', '', '', 'MILLIONS', '', '', 'MILLE', '', '', 'UNITÉS', '', ''], ['', '', '', '', '', '', '', '', '', '', '', ''], ['', '', '', '', '', '', '', '', '', '', '', '']]);
  // Masquer les cellules de regroupement par labels lisibles.
  b += txt(115, 195, 'C', 22, BLUE, 'bold', 'middle') + txt(215, 195, 'D', 22, BLUE, 'bold', 'middle') + txt(315, 195, 'U', 22, BLUE, 'bold', 'middle');
  b += txt(415, 195, 'C', 22, BLUE, 'bold', 'middle') + txt(515, 195, 'D', 22, BLUE, 'bold', 'middle') + txt(615, 195, 'U', 22, BLUE, 'bold', 'middle');
  b += txt(715, 195, 'C', 22, BLUE, 'bold', 'middle') + txt(815, 195, 'D', 22, BLUE, 'bold', 'middle') + txt(915, 195, 'U', 22, BLUE, 'bold', 'middle');
  b += txt(1015, 195, 'C', 22, BLUE, 'bold', 'middle') + txt(1115, 195, 'D', 22, BLUE, 'bold', 'middle') + txt(1215, 195, 'U', 22, BLUE, 'bold', 'middle');
  const digs = ['6', '1', '4', '8', '3', '7', '5', '2', '0', '4', '6', '9'];
  digs.forEach((d, i) => b += txt(115 + i * 100, 249, d, 32, '#222', 'bold', 'middle'));
  b += txt(640, 305, '6 148 375 204 609', 34, PINK2, 'bold', 'middle');
  b += arrow(1175, 340, 1125, 340, GREEN, 5) + arrow(1075, 340, 1025, 340, GREEN, 5) + arrow(975, 340, 925, 340, GREEN, 5);
  b += txt(640, 390, 'Écrire : droite  →  gauche', 27, GREEN, 'bold', 'middle');
  b += txt(640, 435, 'Lire : gauche  →  droite', 27, BLUE, 'bold', 'middle');
  b += box(150, 475, 450, 78, 'CACHE : je lis « 6 milliards »', GREENL, GREEN, 25);
  b += box(680, 475, 450, 78, 'puis « 148 millions »', BLUEL, BLUE, 25);
  figs.u1f1 = svg(1333, 620, b);
}

// 2. Valeur de position.
{
  const h = head('Chaque chiffre a une place et une valeur', ['Dans 58 304, le zéro garde la place des dizaines.']);
  let b = h.s;
  b += tableEl(150, 150, [155, 155, 155, 155, 155], 66,
    [['DIZAINES DE MILLE', 'MILLIERS', 'CENTAINES', 'DIZAINES', 'UNITÉS'], ['5', '8', '3', '0', '4'], ['50 000', '8 000', '300', '0', '4']]);
  b += txt(150, 405, '58 304 = 50 000 + 8 000 + 300 + 0 + 4', 30, PINK2, 'bold');
  b += arrow(228, 430, 228, 480, GREEN, 4) + arrow(383, 430, 383, 480, GREEN, 4) + arrow(538, 430, 538, 480, GREEN, 4);
  b += txt(670, 475, 'Le rang dit où se trouve le chiffre.', 25, BLUE, 'bold');
  figs.u1f2 = svg(1333, 570, b);
}

// 3. Comparer et ranger.
{
  const h = head('Comparer : la pointe va vers le plus petit', ['On compare d’abord le nombre de chiffres, puis les colonnes depuis la gauche.']);
  let b = h.s;
  b += box(95, 150, 300, 90, '87 650', BLUEL, BLUE, 34) + box(525, 150, 300, 90, '87 605', GREENL, GREEN, 34);
  b += txt(460, 210, '>', 58, PINK2, 'bold', 'middle');
  b += txt(245, 285, 'mêmes dizaines de mille', 22, BLUE, 'normal', 'middle');
  b += txt(675, 285, '6 dizaines > 0 dizaine', 22, GREEN, 'bold', 'middle');
  b += txt(665, 370, 'Ordre croissant : 504 000  &lt;  540 000  &lt;  545 000', 30, PINK2, 'bold', 'middle');
  b += txt(665, 450, 'La pointe du signe &lt; regarde le plus petit.', 26, OCRE, 'bold', 'middle');
  figs.u1f3 = svg(1333, 540, b);
}

// 4. Composer et décomposer.
{
  const h = head('Ouvrir et refermer un nombre', ['Chaque chiffre donne une valeur selon sa colonne.']);
  let b = h.s;
  b += box(95, 155, 250, 82, '68 425', BLUEL, BLUE, 34);
  b += arrow(360, 196, 465, 196, GREEN, 5);
  b += box(500, 145, 180, 72, '60 000', GREENL, GREEN, 27) + box(700, 145, 150, 72, '8 000', GREENL, GREEN, 27) + box(870, 145, 125, 72, '400', GREENL, GREEN, 27) + box(1015, 145, 100, 72, '20', GREENL, GREEN, 27) + box(1135, 145, 100, 72, '5', GREENL, GREEN, 27);
  b += txt(665, 300, '68 425 = 60 000 + 8 000 + 400 + 20 + 5', 30, PINK2, 'bold', 'middle');
  b += txt(665, 375, 'On peut aussi utiliser × : (6 × 10 000) + (8 × 1 000) + (4 × 100) + (2 × 10) + 5', 23, BLUE, 'normal', 'middle');
  figs.u1f4 = svg(1333, 500, b);
}

// 5. Cartons Montessori.
{
  const h = head('Les cartons de valeur', ['Superpose les cartons en les alignant du côté des unités.']);
  let b = h.s;
  b += txt(660, 145, 'Pour afficher 237', 30, PINK2, 'bold', 'middle');
  b += box(170, 195, 230, 100, '200', '#FCE4EC', PINK2, 42) + box(470, 195, 180, 100, '30', BLUEL, BLUE, 42) + box(720, 195, 145, 100, '7', GREENL, GREEN, 42);
  b += arrow(285, 320, 285, 380, GREEN, 4) + arrow(560, 320, 560, 380, GREEN, 4) + arrow(790, 320, 790, 380, GREEN, 4);
  b += seg(150, 410, 930, 410, BLUE, 5) + txt(285, 465, 'C', 25, BLUE, 'bold', 'middle') + txt(560, 465, 'D', 25, BLUE, 'bold', 'middle') + txt(790, 465, 'U', 25, BLUE, 'bold', 'middle');
  b += txt(660, 540, '200 + 30 + 7 = 237', 34, PINK2, 'bold', 'middle');
  figs.u1f5 = svg(1333, 610, b);
}

// 6. Fraction simple.
{
  const h = head('Une fraction partage l’unité', ['Les parts doivent être égales. Ici, 3 parts sur 4 sont coloriées.']);
  let b = h.s;
  b += bar(140, 155, 900, 125, 4, 3, PINK);
  for (let i = 0; i < 4; i++) b += txt(252 + i * 225, 325, i < 3 ? 'part prise' : 'part non prise', 21, i < 3 ? PINK2 : BLUE, 'bold', 'middle');
  b += txt(300, 410, '3', 52, PINK2, 'bold', 'middle') + seg(265, 425, 335, 425, BLUE, 3) + txt(300, 470, '4', 52, BLUE, 'bold', 'middle');
  b += txt(390, 414, 'numérateur : parts prises', 26, PINK2, 'bold') + txt(390, 474, 'dénominateur : parts égales', 26, BLUE, 'bold');
  b += txt(660, 555, 'Fraction de la bande coloriée : 3/4', 31, GREEN, 'bold', 'middle');
  figs.u1f6 = svg(1333, 630, b);
}

// 7. Fractions équivalentes et comparaison.
{
  const h = head('Même quantité, écritures différentes', ['Multiplier le haut et le bas par le même nombre ne change pas la part.']);
  let b = h.s;
  b += txt(120, 140, '1/2', 30, PINK2, 'bold', 'middle') + bar(210, 105, 430, 65, 2, 1, PINK);
  b += txt(120, 280, '2/4', 30, PINK2, 'bold', 'middle') + bar(210, 245, 430, 65, 4, 2, PINK);
  b += txt(120, 420, '4/8', 30, PINK2, 'bold', 'middle') + bar(210, 385, 430, 65, 8, 4, PINK);
  b += arrow(700, 160, 875, 160, GREEN, 5) + txt(790, 145, '×2', 25, GREEN, 'bold', 'middle');
  b += arrow(700, 300, 875, 300, GREEN, 5) + txt(790, 285, '×2', 25, GREEN, 'bold', 'middle');
  b += txt(1070, 250, '1/2 = 2/4 = 4/8', 34, PINK2, 'bold', 'middle');
  b += txt(1065, 365, 'Même dénominateur :', 25, BLUE, 'bold', 'middle') + txt(1065, 410, 'on compare les numérateurs.', 25, BLUE, 'normal', 'middle');
  figs.u1f7 = svg(1333, 520, b);
}

// 8. Simplifier.
{
  const h = head('Simplifier une fraction', ['On divise le numérateur et le dénominateur par le même nombre.']);
  let b = h.s;
  b += txt(190, 195, '6', 52, PINK2, 'bold', 'middle') + seg(145, 215, 235, 215, BLUE, 3) + txt(190, 275, '8', 52, BLUE, 'bold', 'middle');
  b += arrow(300, 220, 490, 220, GREEN, 5) + txt(395, 195, '÷2 en haut et en bas', 23, GREEN, 'bold', 'middle');
  b += txt(600, 195, '3', 52, PINK2, 'bold', 'middle') + seg(555, 215, 645, 215, BLUE, 3) + txt(600, 275, '4', 52, BLUE, 'bold', 'middle');
  b += txt(900, 170, '6/8 = 3/4', 36, PINK2, 'bold', 'middle');
  b += txt(900, 275, 'La quantité ne change pas.', 26, BLUE, 'normal', 'middle');
  b += bar(180, 350, 800, 80, 8, 6, PINK) + bar(180, 475, 800, 80, 4, 3, PINK);
  figs.u1f8 = svg(1333, 640, b);
}

// 9. Nombres décimaux.
{
  const h = head('La virgule sépare deux parties', ['Dans 62,57 : 62 est la partie entière ; 57 est la partie décimale.']);
  let b = h.s;
  b += tableEl(155, 155, [190, 190, 190, 190], 75, [['DIZAINES', 'UNITÉS', 'DIXIÈMES', 'CENTIÈMES'], ['6', '2', '5', '7'], ['60', '2', '0,5', '0,07']]);
  b += txt(665, 430, '62,57 = 62 unités + 5 dixièmes + 7 centièmes', 29, PINK2, 'bold', 'middle');
  b += txt(665, 510, '62,57 se lit : soixante-deux virgule cinquante-sept.', 25, BLUE, 'normal', 'middle');
  figs.u1f9 = svg(1333, 600, b);
}

// 10. Fractions décimales et grille de centièmes.
{
  const h = head('Cent grille : les centièmes', ['Chaque petit carré vaut 1/100. 29,75 = 29 unités et 75 centièmes.']);
  let b = h.s;
  b += grid100(125, 150, 16, 75, PINK);
  b += txt(340, 340, '75/100 = 0,75', 31, PINK2, 'bold', 'middle');
  b += box(550, 155, 260, 88, '29 unités', BLUEL, BLUE, 30) + box(860, 155, 300, 88, '75 centièmes', GREENL, GREEN, 30);
  b += txt(855, 345, '29,75', 52, PINK2, 'bold', 'middle');
  b += txt(855, 405, '= 29 + 75/100', 30, BLUE, 'bold', 'middle');
  b += txt(855, 460, '= 29 unités et 75 centièmes', 27, BLUE, 'normal', 'middle');
  figs.u1f10 = svg(1333, 560, b);
}

// 11. Comparer et encadrer les décimaux.
{
  const h = head('Comparer les nombres décimaux', ['Ajoute des zéros à droite si nécessaire : 32,4 = 32,40 = 32,400.']);
  let b = h.s;
  b += box(120, 150, 210, 82, '32,4', BLUEL, BLUE, 33) + txt(385, 210, '=', 48, GREEN, 'bold', 'middle') + box(450, 150, 250, 82, '32,40', GREENL, GREEN, 33) + txt(760, 210, '=', 48, GREEN, 'bold', 'middle') + box(825, 150, 290, 82, '32,400', '#FFF8E1', OCRE, 33);
  b += txt(660, 325, '32,4  >  32,365', 38, PINK2, 'bold', 'middle');
  b += txt(660, 385, 'car 32,400  >  32,365', 30, BLUE, 'bold', 'middle');
  b += txt(660, 470, 'Encadrement au centième : 8,36  &lt;  8,362  &lt;  8,37', 27, GREEN, 'bold', 'middle');
  figs.u1f11 = svg(1333, 550, b);
}

// 12. Chiffres romains.
{
  const h = head('Les chiffres romains de I à M', ['I=1, V=5, X=10, L=50, C=100, D=500, M=1000']);
  let b = h.s;
  b += tableEl(100, 135, [145, 145, 145, 145, 145, 145, 145], 62, [['I', 'V', 'X', 'L', 'C', 'D', 'M'], ['1', '5', '10', '50', '100', '500', '1 000']]);
  b += txt(665, 320, 'Addition : VIII = 5 + 1 + 1 + 1 = 8', 29, GREEN, 'bold', 'middle');
  b += txt(665, 385, 'Soustraction : IV = 5 − 1 = 4   ;   XL = 50 − 10 = 40', 28, PINK2, 'bold', 'middle');
  b += txt(665, 470, '1 537 = M D X X X V I I = MDXXXVII', 34, BLUE, 'bold', 'middle');
  b += txt(665, 535, 'I, X, C et M ne se répètent pas plus de trois fois.', 25, OCRE, 'bold', 'middle');
  figs.u1f12 = svg(1333, 620, b);
}

const S = [
  {
    comp: 'Nombre', theme: 'Nombres naturels jusqu’à 100 000', t: 'Lire et écrire les nombres jusqu’à 100 000', goal: 'lire, écrire et représenter un nombre naturel inférieur à 100 000', mat: 'Tableau de numération, étiquettes de nombres, carton-cache, ardoises', revQ: 'Lis 7 045. Combien y a-t-il de chiffres ?', revRA: 'Lis le nombre et repère le zéro qui garde une place.',
    situation: 'Au marché, une coopérative a récolté 48 205 tomates. Comment lire ce nombre sans se tromper ?', def: 'Un nombre naturel inférieur à 100 000 s’écrit avec des chiffres. On groupe les chiffres par trois en partant de la droite : unités, milliers, puis dizaines de milliers.', autrement: 'Je fais des paquets de trois chiffres. Je lis de gauche à droite et je cache les paquets que je ne lis pas encore.', concept: 'Dans 48 205, je lis « quarante-huit mille deux cent cinq ». L’espace sépare les classes ; il ne représente pas un chiffre.', method: ['Je pars de la droite et je forme un groupe de trois chiffres.', 'Je repère la classe des milliers et la classe des unités.', 'Je lis d’abord le groupe de gauche, puis le mot « mille », puis le groupe de droite.', 'Je vérifie les zéros : 40 005 se lit « quarante mille cinq ».'], exemple: '48 205 se lit « quarante-huit mille deux cent cinq ». 6 070 se lit « six mille soixante-dix ».', erreur: 'Ne lis pas 48 205 comme « quarante-huit virgule deux cent cinq ». L’espace indique une nouvelle classe ; ce n’est pas une virgule.', saistu: 'Les mots « soixante-dix », « quatre-vingts » et « quatre-vingt-dix » sont des pièges fréquents : entraîne-toi à les écrire en lettres.', fig: 'u1f1', exos: ['Écris en lettres : 6 217 ; 4 023.', 'Écris en chiffres : « cinquante-deux mille quatre cent vingt-six ».', 'Lis : 70 008 ; 90 090.', 'Complète : 35 000 = … milliers.', 'Écris le nombre qui vient juste après 99 999.', 'Défi : écris 40 005 en lettres et explique le zéro.'], corr: ['6 217 : six mille deux cent dix-sept ; 4 023 : quatre mille vingt-trois.', '52 426.', '70 008 : soixante-dix mille huit ; 90 090 : quatre-vingt-dix mille quatre-vingt-dix.', '35 milliers.', '100 000.', 'Quarante mille cinq ; le zéro occupe la place des centaines et des dizaines dans le groupe 005.', ''], jeu: 'Le jeu du cache : un élève cache une classe avec une feuille ; son partenaire lit seulement la classe visible puis vérifie.'
  },
  {
    comp: 'Nombre', theme: 'Valeur de position', t: 'Utiliser le tableau de numération', goal: 'placer les chiffres dans le tableau et donner la valeur de chacun', mat: 'Tableau CDU, étiquettes, jetons ou cartons de couleur', revQ: 'Dans 48 205, quelle est la classe des milliers ?', revRA: 'La classe des milliers est 48.', situation: 'Une classe range 58 304 graines dans un tableau. Où placer le zéro ?', def: 'Dans un tableau de numération, chaque colonne reçoit un seul chiffre. La valeur dépend du rang : 5 dizaines de mille valent 50 000.', autrement: 'Le chiffre est comme un élève : sa place lui donne son métier et sa valeur.', concept: 'Dans 58 304, 5 vaut 50 000, 8 vaut 8 000, 3 vaut 300, 0 vaut 0 dizaine et 4 vaut 4 unités.', method: ['Écris le nombre avec un espace entre les classes.', 'Place chaque chiffre dans la bonne colonne, de droite à gauche.', 'Lis le nom de la colonne.', 'Écris la valeur du chiffre, puis vérifie en recomposant le nombre.'], exemple: '58 304 = 50 000 + 8 000 + 300 + 0 + 4.', erreur: 'Ne mets pas deux chiffres dans une même colonne et ne supprime pas un zéro qui garde une place.', saistu: 'Un zéro peut ne rien ajouter à la somme, mais il est indispensable pour garder la place des autres chiffres.', fig: 'u1f2', exos: ['Donne la valeur du 7 dans 74 205.', 'Dans 90 618, quelle est la valeur du 9, du 6 et du 1 ?', 'Place 35 040 dans un tableau CDU.', 'Décompose 62 507.', 'Recompose : 80 000 + 4 000 + 30 + 6.', 'Défi : invente un nombre de cinq chiffres dont le chiffre des centaines est 0.'], corr: ['70 000.', '9 vaut 90 000 ; 6 vaut 600 ; 1 vaut 10.', 'Dizaines de mille 3, milliers 5, centaines 0, dizaines 4, unités 0.', '60 000 + 2 000 + 500 + 0 + 7.', '84 036.', 'Réponse possible : 42 007 ; le chiffre des centaines est 0.', ''], jeu: 'Avec cinq cartons portant 0 à 9, forme le plus grand nombre possible puis le plus petit nombre possible.'
  },
  {
    comp: 'Nombre', theme: 'Comparer et ranger', t: 'Comparer et ranger les nombres naturels', goal: 'comparer et ranger des nombres naturels avec les signes <, > et =', mat: 'Cartes-nombres, signes en carton, droite numérique', revQ: 'Compare 4 500 et 675.', revRA: '4 500 a quatre chiffres et 675 en a trois : 4 500 > 675.', situation: 'Deux producteurs annoncent 87 650 kg et 87 605 kg. Qui a produit davantage ?', def: 'Pour comparer, je regarde d’abord le nombre de chiffres. S’il est identique, je compare les chiffres de gauche à droite jusqu’à trouver une différence.', autrement: 'Je regarde d’abord la taille des nombres, puis je les examine colonne par colonne.', concept: '87 650 et 87 605 ont le même début. À la dizaine, 5 est plus grand que 0 : 87 650 > 87 605.', method: ['Compte les chiffres de chaque nombre.', 'S’ils sont en même nombre, aligne les colonnes.', 'Compare depuis la gauche.', 'Écris le signe et relis la pointe : elle regarde le plus petit nombre.'], exemple: '12 671 < 32 671 < 45 980. Pour ranger dans l’ordre décroissant, je commence par le plus grand.', erreur: 'Ne compare pas seulement le dernier chiffre : 9 000 est plus grand que 8 999 même si 9 est plus petit que 9 ? Compare les colonnes correctement.', saistu: 'Le signe < ressemble à une bouche ouverte vers le plus grand nombre ; sa pointe touche le plus petit.', fig: 'u1f3', exos: ['Complète : 75 012 … 75 102.', 'Compare : 9 999 et 10 000.', 'Range dans l’ordre croissant : 12 671 ; 32 671 ; 4 980.', 'Range dans l’ordre décroissant : 90 400 ; 90 040 ; 9 400.', 'Trouve un nombre entre 45 000 et 45 010.', 'Défi : explique pourquoi 100 000 est plus grand que tout nombre à quatre chiffres.'], corr: ['75 012 < 75 102.', '9 999 < 10 000.', '4 980 < 12 671 < 32 671.', '90 400 > 90 040 > 9 400.', 'Réponses possibles : 45 001 à 45 009.', '100 000 a six chiffres ; tout nombre à quatre chiffres en a au plus 9 999.', ''], jeu: 'Le duel des cartes : chaque joueur retourne un nombre ; le premier qui justifie le signe gagne le point.'
  },
  {
    comp: 'Nombre', theme: 'Composer et décomposer', t: 'Décomposer et composer de 10 000 à 100 000', goal: 'décomposer et composer un nombre de plusieurs façons', mat: 'Cartons de valeurs, tableau de numération, ardoises', revQ: 'Décompose 58 304.', revRA: '50 000 + 8 000 + 300 + 4.', situation: 'Pour préparer une commande de 68 425 graines, le magasin veut connaître chaque valeur de position.', def: 'Décomposer, c’est ouvrir un nombre en valeurs. Composer, c’est réunir ces valeurs pour retrouver le nombre.', autrement: 'J’ouvre le nombre en morceaux qui respectent les colonnes, puis je referme l’addition.', concept: '68 425 = 60 000 + 8 000 + 400 + 20 + 5. On peut aussi écrire (6 × 10 000) + (8 × 1 000) + (4 × 100) + (2 × 10) + 5.', method: ['Place le nombre dans le tableau.', 'Remplace chaque chiffre par sa valeur de position.', 'Écris l’addition sans oublier les zéros utiles.', 'Pour composer, additionne les valeurs et vérifie les colonnes.'], exemple: '90 306 = 90 000 + 300 + 6. Le zéro des milliers et celui des dizaines gardent leur place.', erreur: 'Ne décompose pas 68 425 en 6 000 + 8 000 : le 6 est dans la colonne des dizaines de mille et vaut 60 000.', saistu: 'Un même nombre peut avoir plusieurs décompositions correctes, par exemple 1 000 = 10 × 100 = 100 × 10.', fig: 'u1f4', exos: ['Décompose 72 504.', 'Décompose 90 306.', 'Compose : 40 000 + 7 000 + 80 + 2.', 'Écris 65 020 sous forme multiplicative.', 'Trouve deux décompositions de 10 000.', 'Défi : décompose 100 000 en utilisant × et en additionnant des valeurs.'], corr: ['70 000 + 2 000 + 500 + 4.', '90 000 + 300 + 6.', '47 082.', '(6 × 10 000) + (5 × 1 000) + (2 × 10).', 'Réponses possibles : 10 000 + 0 ; 5 × 2 000.', 'Réponse possible : 10 × 10 000 ; ou 50 000 + 50 000.', ''], jeu: 'Le nombre mystère : un joueur donne trois valeurs de position ; les autres composent le nombre.'
  },
  {
    comp: 'Nombre', theme: 'Matériel concret et valeur', t: 'Construire un nombre avec des cartons', goal: 'représenter un nombre en superposant des cartons de valeur', mat: 'Cartons 100 000, 10 000, 1 000, 100, 10 et 1 ; colle, ardoise', revQ: 'Avec quels cartons peux-tu former 237 ?', revRA: 'Avec 200, 30 et 7.', situation: 'Un enfant veut afficher 237 avec des cartons. Comment les aligner pour lire facilement le nombre ?', def: 'Les cartons de type Montessori représentent des valeurs. On les superpose ou les aligne par colonnes, en plaçant les unités du même côté.', autrement: 'Chaque carton est une pièce du nombre ; les pièces qui ont le même rang se placent ensemble.', concept: 'Pour 237, j’utilise 200, 30 et 7. Pour 4 025, j’utilise 4 000, 20 et 5 : le zéro des centaines est visible par l’espace.', method: ['Choisis les cartons correspondant aux chiffres.', 'Aligne unités, dizaines, centaines et milliers.', 'Lis les valeurs de gauche à droite.', 'Additionne les cartons pour vérifier le nombre.'], exemple: '200 + 30 + 7 = 237. Le matériel rend visible la valeur de chaque chiffre.', erreur: 'Ne place pas 30 à la place de 300 : le nombre de zéros du carton indique son rang.', saistu: 'Les objets de la classe peuvent devenir des cartons : 2 centaines de bouchons, 3 dizaines et 7 unités.', fig: 'u1f5', exos: ['Représente 405 avec des cartons.', 'Quels cartons faut-il pour 3 060 ?', 'Compose avec 6 000, 400 et 9.', 'Décompose 8 024 avec des cartons.', 'Dessine une représentation de 1 203.', 'Défi : représente 10 000 de deux manières.'], corr: ['400 et 5.', '3 000, 60 et 0 unité ; le zéro garde les places manquantes.', '6 409.', '8 000, 20 et 4.', 'Réponse attendue : 1 millier, 2 centaines, 0 dizaine, 3 unités.', 'Réponses possibles : un carton 10 000 ; dix cartons 1 000.', ''], jeu: 'Le magasin des cartons : un élève demande un nombre, un autre le paie avec les cartons de valeur.'
  },
  {
    comp: 'Nombre', theme: 'Fractions simples', t: 'Comprendre une fraction', goal: 'représenter et nommer une fraction simple', mat: 'Bandes de papier, ciseaux, bandes fractionnées, crayons de couleur', revQ: 'Partage une bande en quatre parts égales.', revRA: 'Les quatre parts doivent avoir la même taille.', situation: 'Soa partage une galette en 4 parts égales et prend 3 parts. Quelle fraction a-t-elle prise ?', def: 'Une fraction représente une ou plusieurs parts égales d’une unité. Le numérateur indique les parts prises ; le dénominateur indique le nombre total de parts égales.', autrement: 'Le nombre du bas dit en combien de parts on partage ; le nombre du haut dit combien on prend.', concept: 'Dans 3/4, 4 est le dénominateur et 3 le numérateur. La bande est partagée en quatre parts égales et trois sont coloriées.', method: ['Choisis l’unité entière.', 'Partage-la en parts égales : c’est le dénominateur.', 'Compte les parts prises ou coloriées : c’est le numérateur.', 'Écris la fraction et vérifie que les parts sont égales.'], exemple: 'Une bande partagée en 8 parts dont 5 sont coloriées représente 5/8.', erreur: 'Ne compte pas le nombre de traits comme le nombre de parts : trois traits donnent quatre parts.', saistu: 'Les bandes de fraction et les parts de fruits permettent de comprendre une fraction avant d’utiliser l’écriture.', fig: 'u1f6', exos: ['Écris la fraction représentée par 2 parts sur 5.', 'Dans 7/10, indique le numérateur et le dénominateur.', 'Colorie 3/4 d’une bande.', 'Quelle fraction reste-t-il si 2 parts sur 6 sont coloriées ?', 'Compare 1/2 et 1/4 avec un dessin.', 'Défi : explique pourquoi 4/4 représente l’unité.'], corr: ['2/5.', 'Numérateur : 7 ; dénominateur : 10.', 'Colorier trois des quatre parts égales.', '4/6 restent.', '1/2 > 1/4 : la moitié est plus grande que le quart.', '4/4 signifie quatre parts prises sur quatre : toute l’unité.', ''], jeu: 'Le puzzle fraction : assemble les pièces qui forment une unité puis lis la fraction de chaque pièce.'
  },
  {
    comp: 'Nombre', theme: 'Fractions équivalentes et comparaison', t: 'Comparer et reconnaître des fractions équivalentes', goal: 'produire des fractions équivalentes et comparer des fractions', mat: 'Bandes fractionnées, puzzle de fractions, droite graduée', revQ: 'Laquelle est la plus grande : 2/5 ou 4/5 ?', revRA: 'Avec le même dénominateur, 4/5 est plus grand car 4 > 2.', situation: 'Deux enfants ont chacun une bande : l’un a 1/2, l’autre 2/4. Ont-ils la même quantité ?', def: 'Deux fractions sont équivalentes lorsqu’elles représentent la même quantité. On multiplie ou on divise le numérateur et le dénominateur par un même nombre.', autrement: 'On peut changer les nombres, mais pas la taille de la part : le haut et le bas changent ensemble.', concept: '1/2 = 2/4 = 4/8. Pour comparer deux fractions de même dénominateur, je compare les numérateurs.', method: ['Observe les bandes ou transforme les fractions.', 'Mets si possible les fractions au même dénominateur.', 'Compare les numérateurs.', 'Écris le signe et justifie avec un dessin ou une transformation.'], exemple: '2/3 = 4/6. Et 5/8 > 3/8 car les huitièmes sont de même taille et 5 parts dépassent 3 parts.', erreur: 'Ne compare pas seulement les dénominateurs : 1/2 est plus grand que 1/4, même si 2 est plus petit que 4.', saistu: 'Le puzzle de fractions permet de voir que deux pièces différentes peuvent couvrir exactement la même moitié.', fig: 'u1f7', exos: ['Complète : 1/3 = …/6.', 'Complète : 3/5 = 6/….', 'Compare 5/7 et 3/7.', 'Compare 1/2 et 2/4.', 'Compare 2/3 et 3/4 en les mettant sur 12.', 'Défi : range 1/2, 3/8 et 5/8.'], corr: ['2/6.', '10 : 3/5 = 6/10.', '5/7 > 3/7.', '1/2 = 2/4.', '2/3 = 8/12 et 3/4 = 9/12, donc 2/3 < 3/4.', '3/8 < 1/2 = 4/8 < 5/8.', ''], jeu: 'Le duel des bandes : chaque joueur tire une fraction ; les bandes servent d’arbitre pour comparer.'
  },
  {
    comp: 'Nombre', theme: 'Simplification des fractions', t: 'Simplifier une fraction', goal: 'simplifier une fraction en divisant ses deux termes par un même nombre', mat: 'Bandes de fractions, cartes de divisions, ardoises', revQ: 'Complète : 2/4 = …/2.', revRA: '2/4 = 1/2 en divisant le haut et le bas par 2.', situation: 'Une bande montre 6 parts prises sur 8. Peut-on écrire la même quantité plus simplement ?', def: 'Simplifier une fraction, c’est diviser son numérateur et son dénominateur par un même nombre non nul.', autrement: 'Je réduis les deux nombres avec la même règle : la quantité reste la même.', concept: '6/8 ÷ 2 en haut et en bas donne 3/4. Si le numérateur est divisible par le dénominateur, la fraction vaut un nombre entier.', method: ['Cherche un diviseur commun au numérateur et au dénominateur.', 'Divise les deux par ce même nombre.', 'Écris la fraction obtenue.', 'Vérifie avec une bande ou une multiplication.'], exemple: '6/8 = 3/4 car 6 ÷ 2 = 3 et 8 ÷ 2 = 4.', erreur: 'Ne divise pas un seul terme : 6/8 ne devient pas 3/8. Les deux termes doivent être divisés par le même nombre.', saistu: 'Une fraction simplifiée est plus facile à lire, mais elle représente exactement la même quantité.', fig: 'u1f8', exos: ['Simplifie 4/8.', 'Simplifie 10/15.', 'Simplifie 12/16.', 'Complète : 9/3 = …', 'La fraction 8/8 vaut combien ?', 'Défi : simplifie 18/24 en deux étapes puis en une étape.'], corr: ['1/2.', '2/3 en divisant par 5.', '3/4 en divisant par 4.', '3.', '1.', '18/24 ÷ 6 = 3/4 ; ou 18/24 ÷ 2 = 9/12 puis ÷3 = 3/4.', ''], jeu: 'Le relais des fractions : chaque équipe reçoit une fraction et doit trouver une écriture équivalente plus simple.'
  },
  {
    comp: 'Nombre', theme: 'Nombres décimaux', t: 'Lire et écrire les nombres décimaux', goal: 'lire, écrire et décrire un nombre décimal jusqu’aux centièmes', mat: 'Tableau de numération, monnaie factice, droite graduée', revQ: 'Combien de centièmes y a-t-il dans 25/100 ?', revRA: '25 centièmes, soit 0,25.', situation: 'Un cahier coûte 62,57 Ar dans un exercice de monnaie. Que signifient les chiffres après la virgule ?', def: 'Un nombre décimal a une partie entière et une partie décimale séparées par une virgule. Les deux premiers rangs après la virgule sont les dixièmes et les centièmes.', autrement: 'Avant la virgule, je compte les unités entières ; après la virgule, je compte les morceaux de dixième et de centième.', concept: '62,57 = 62 unités + 5 dixièmes + 7 centièmes. On peut aussi le lire « soixante-deux virgule cinquante-sept ».', method: ['Repère la virgule.', 'Lis la partie entière.', 'Lis les chiffres après la virgule en respectant dixièmes et centièmes.', 'Décompose le nombre dans le tableau pour vérifier.'], exemple: '48 = 48,0 = 48,00. Ajouter des zéros à droite ne change pas la valeur.', erreur: 'Ne lis pas 62,05 comme 62,5 : le zéro garde la place des dixièmes.', saistu: 'Dans la vie quotidienne, les décimaux servent notamment à exprimer une longueur, une masse, un prix ou une capacité.', fig: 'u1f9', exos: ['Lis 7,4 et 7,04.', 'Écris « trois unités et cinq centièmes ».', 'Décompose 29,75.', 'Écris 48 sous forme décimale avec deux chiffres après la virgule.', 'Quel est le chiffre des dixièmes dans 16,28 ?', 'Défi : explique la différence entre 4,5 et 4,05.'], corr: ['7,4 : sept virgule quatre ; 7,04 : sept virgule zéro quatre.', '3,05.', '29 unités + 7 dixièmes + 5 centièmes.', '48,00.', '2.', '4,5 = 4,50 ; 4,05 = 4 unités et 5 centièmes : 4,5 > 4,05.', ''], jeu: 'La monnaie juste : forme un prix annoncé avec des pièces de 1 unité, 1 dixième et 1 centième.'
  },
  {
    comp: 'Nombre', theme: 'Fractions décimales', t: 'Relier fractions décimales et nombres décimaux', goal: 'passer d’une fraction décimale à un nombre décimal et inversement', mat: 'Grille de 100 cases, bandes, tableau de numération', revQ: 'Transforme 3/10 en nombre décimal.', revRA: '3/10 = 0,3.', situation: 'Une grille de 100 cases contient 75 cases coloriées. Comment écrire cette quantité en fraction puis en décimal ?', def: 'Une fraction décimale a pour dénominateur 10, 100 ou 1 000. Elle se traduit directement par des dixièmes, des centièmes ou des millièmes.', autrement: 'Le dénominateur indique combien de chiffres je place après la virgule.', concept: '75/100 = 0,75. De même, 5/10 = 0,5 et 8/100 = 0,08.', method: ['Regarde le dénominateur.', 'Place le numérateur aux rangs correspondants.', 'Ajoute un zéro si le numérateur n’a pas assez de chiffres.', 'Lis et vérifie avec une grille ou une bande.'], exemple: '29,75 = 29 + 75/100 : 29 est la partie entière et 75 les centièmes.', erreur: 'Dans 8/100, n’écris pas 0,8 : le dénominateur 100 impose deux chiffres après la virgule, donc 0,08.', saistu: 'Une grille de 100 petits carrés est une représentation concrète des centièmes.', fig: 'u1f10', exos: ['Écris 7/10 en décimal.', 'Écris 9/100 en décimal.', 'Transforme 0,6 en fraction décimale.', 'Transforme 0,42 en fraction décimale.', 'Décompose 3,08.', 'Défi : compare 7/10 et 68/100.'], corr: ['0,7.', '0,09.', '6/10.', '42/100.', '3 unités + 8 centièmes.', '7/10 = 70/100 > 68/100.', ''], jeu: 'La grille flash : un élève colorie une quantité de cases, les autres donnent la fraction sur 100 puis le décimal.'
  },
  {
    comp: 'Nombre', theme: 'Comparer et encadrer les décimaux', t: 'Comparer et encadrer les nombres décimaux', goal: 'comparer et encadrer des nombres décimaux jusqu’aux centièmes', mat: 'Droite graduée, cartes-décimaux, tableau de numération', revQ: 'Compare 3,4 et 3,40.', revRA: 'Ils sont égaux : 3,4 = 3,40.', situation: 'Deux longueurs mesurent 8,362 m et 8,37 m. Laquelle est la plus grande ?', def: 'Pour comparer des décimaux, je compare d’abord les parties entières puis les chiffres après la virgule, en ajoutant des zéros si nécessaire.', autrement: 'Je mets les nombres au même nombre de chiffres après la virgule, puis je compare colonne par colonne.', concept: '8,362 < 8,370, donc 8,362 < 8,37. Pour encadrer au centième : 8,36 < 8,362 < 8,37.', method: ['Compare les parties entières.', 'Ajoute des zéros à droite pour aligner les décimales.', 'Compare dixièmes puis centièmes.', 'Pour encadrer, choisis les deux centièmes voisins.'], exemple: '32,4 = 32,400 et 32,365 : comme 400 > 365, 32,4 > 32,365.', erreur: 'La partie décimale la plus longue n’est pas forcément la plus grande. 4,05 est plus petit que 4,5.', saistu: 'Sur une droite graduée, le nombre placé plus à droite est le plus grand.', fig: 'u1f11', exos: ['Compare 5,7 et 5,65.', 'Compare 0,45 et 0,5.', 'Range : 2,4 ; 2,04 ; 2,40.', 'Encadre 6,278 au dixième.', 'Encadre 6,278 au centième.', 'Défi : trouve trois décimaux entre 1,2 et 1,3.'], corr: ['5,7 = 5,70 > 5,65.', '0,45 < 0,50 = 0,5.', '2,04 < 2,4 = 2,40.', '6,2 < 6,278 < 6,3.', '6,27 < 6,278 < 6,28.', 'Réponses possibles : 1,21 ; 1,25 ; 1,29.', ''], jeu: 'La ligne humaine : les élèves tiennent des cartes-décimaux et se rangent physiquement du plus petit au plus grand.'
  },
  {
    comp: 'Nombre', theme: 'Chiffres romains', t: 'Lire et écrire les chiffres romains de I à M', goal: 'lire et écrire des nombres romains jusqu’à 1 000', mat: 'Cartes I, V, X, L, C, D, M, frise historique', revQ: 'Que valent I, V et X ?', revRA: 'I vaut 1, V vaut 5 et X vaut 10.', situation: 'Un monument porte l’inscription MDXXXVII. Quelle année ou quel nombre indique-t-elle ?', def: 'Les chiffres romains utilisent I=1, V=5, X=10, L=50, C=100, D=500 et M=1 000. On additionne généralement les symboles ; un petit symbole placé avant un plus grand se soustrait.', autrement: 'Je commence par les grands symboles et je regarde si un petit symbole est placé avant un plus grand.', concept: 'MDXXXVII = 1 000 + 500 + 10 + 10 + 10 + 5 + 1 + 1 = 1 537. IV vaut 4, XL vaut 40 et CM vaut 900.', method: ['Mémorise les sept symboles et leurs valeurs.', 'Écris les grands symboles avant les petits.', 'Additionne les symboles qui diminuent ou restent égaux.', 'Soustrais lorsqu’un petit symbole autorisé précède un plus grand.', 'Vérifie qu’I, X, C et M ne sont pas répétés plus de trois fois.'], exemple: '48 = XLVIII ; 94 = XCIV ; 2026 n’est pas demandé ici car le programme s’arrête à M.', erreur: 'N’écris pas IIII pour 4 dans la règle scolaire étudiée : écris IV. Ne répète pas V, L ou D.', saistu: 'On voit encore des chiffres romains sur les cadrans d’horloge, les monuments et les chapitres des livres.', fig: 'u1f12', exos: ['Écris en chiffres romains : 3 ; 8 ; 12.', 'Écris en nombres : IV ; IX ; XL.', 'Écris 27 en chiffres romains.', 'Décompose XVII.', 'Écris 540 en chiffres romains.', 'Défi : lis MDCCLXXVI.'], corr: ['III ; VIII ; XII.', '4 ; 9 ; 40.', 'XXVII.', '10 + 5 + 1 + 1 = 17.', 'DXL.', '1 776.', ''], jeu: 'La frise romaine : chaque équipe reçoit des cartes et doit construire le nombre annoncé, puis expliquer chaque symbole.'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'Nombre',
  rag: 'représenter, comparer et utiliser les nombres naturels jusqu’à 100 000, les fractions simples, les nombres décimaux jusqu’aux centièmes et les chiffres romains.',
  valeurs: 'rigueur et respect mutuel',
  sessions: S,
  revision: {
    table: [
      ['Nombres naturels', 'Classes de trois chiffres ; tableau de numération ; zéro gardien de place', 'Lire, écrire, composer et décomposer jusqu’à 100 000'],
      ['Comparer', 'Nombre de chiffres puis comparaison colonne par colonne', 'Utiliser <, > et = ; ranger dans les deux sens'],
      ['Fractions', 'Numérateur, dénominateur ; équivalentes ; simplification', 'Représenter, comparer et simplifier'],
      ['Décimaux', 'Partie entière, dixièmes, centièmes ; fractions décimales', 'Lire, écrire, comparer et encadrer'],
      ['Romains', 'I, V, X, L, C, D, M ; addition et soustraction', 'Lire et écrire jusqu’à 1 000']
    ],
    questions: [
      'Écris en chiffres : « quatre-vingt-dix mille six » puis décompose le nombre.',
      'Range dans l’ordre croissant : 45 090 ; 45 900 ; 40 590.',
      'Complète : 3/4 = …/8 et simplifie 6/8.',
      'Compare 4,5 ; 4,05 et 4,50.',
      'Écris 49 et 900 en chiffres romains.'
    ],
    answers: [
      '90 006 = 90 000 + 6.',
      '40 590 < 45 090 < 45 900.',
      '3/4 = 6/8 ; 6/8 = 3/4.',
      '4,05 < 4,5 = 4,50.',
      '49 = XLIX ; 900 = CM.'
    ]
  },
  exam: {
    exos: [
      'Nombres naturels. a) Écris en chiffres : « soixante-dix mille quatre cent cinq ». b) Décompose 82 030. c) Donne la valeur du 7 dans 74 216. d) Compare 99 999 et 100 000. e) Compose : 50 000 + 6 000 + 80 + 4.',
      'Fractions. a) Représente 3/5. b) Complète 2/3 = …/9. c) Compare 5/8 et 3/8. d) Simplifie 12/16. e) Explique pourquoi 4/4 = 1.',
      'Décimaux. a) Écris « sept unités et huit centièmes ». b) Transforme 45/100 en décimal. c) Compare 3,5 et 3,05. d) Encadre 6,278 au centième. e) Range 0,7 ; 0,67 ; 0,70.',
      'Chiffres romains. a) Écris 14, 40 et 90 en chiffres romains. b) Lis XLVIII. c) Décompose MDX. d) Écris 999 en chiffres romains. e) Explique la différence entre IX et XI.',
      'Problème. La coopérative récolte 24 500 kg de riz en juin et 18 750 kg en juillet. a) Quelle quantité a-t-elle récoltée en tout ? b) Écris 43 250 sous forme décomposée. c) Une partie de la récolte est rangée dans 4 sacs égaux : quelle fraction de la récolte représente un sac ? d) Écris 0,75 sous forme de fraction décimale. e) Écris 43 en chiffres romains.'
    ],
    corr: [
      'a) 70 405 ; b) 80 000 + 2 000 + 30 ; c) 70 000 ; d) 99 999 < 100 000 ; e) 56 084.',
      'a) 3 parts sur 5 ; b) 6/9 ; c) 5/8 > 3/8 ; d) 12/16 = 3/4 ; e) quatre parts prises sur quatre forment toute l’unité.',
      'a) 7,08 ; b) 0,45 ; c) 3,5 = 3,50 > 3,05 ; d) 6,27 < 6,278 < 6,28 ; e) 0,67 < 0,7 = 0,70.',
      'a) XIV, XL, XC ; b) 48 ; c) 1 000 + 500 + 10 = 1 510 ; d) CMXCIX ; e) IX = 10 − 1 = 9, tandis que XI = 10 + 1 = 11.',
      'a) 24 500 + 18 750 = 43 250 kg ; b) 40 000 + 3 000 + 200 + 50 ; c) 1/4 ; d) 75/100 ; e) XLIII.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
