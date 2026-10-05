// UNITÉ 1 — NOMBRE (PE T9) : 10 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — rationnels vs irrationnels
figs.u1f1 = (() => { const { s, y } = head('Rationnel ou irrationnel ?', ['Rationnel = quotient de deux entiers ; irrationnel = jamais un tel quotient.']);
  const top = y + 25;
  let b = box(90, top, 380, 230, '', '#E8F5E9', GREEN, 22) + box(530, top, 380, 230, '', '#FDE7EF', PINK2, 22);
  b += txt(280, top + 40, 'RATIONNELS ℚ', 24, GREEN, 'bold', 'middle') + txt(720, top + 40, 'IRRATIONNELS', 24, PINK2, 'bold', 'middle');
  b += txt(280, top + 90, '3/4 = 0,75', 22, '#333', 'normal', 'middle') + txt(280, top + 130, '−5 = −5/1', 22, '#333', 'normal', 'middle') + txt(280, top + 170, '1/3 = 0,333… (périodique)', 21, '#333', 'normal', 'middle') + txt(280, top + 207, 'décimal fini ou périodique', 19, GREEN, 'bold', 'middle');
  b += txt(720, top + 90, '√2 = 1,41421356…', 22, '#333', 'normal', 'middle') + txt(720, top + 130, 'π = 3,14159265…', 22, '#333', 'normal', 'middle') + txt(720, top + 170, '√7, √3, π…', 22, '#333', 'normal', 'middle') + txt(720, top + 207, 'décimales sans fin ni période', 19, PINK2, 'bold', 'middle');
  return svg(1000, top + 270, s + b); })();
// S2 — décimal vers fraction
figs.u1f2 = (() => { const { s, y } = head('Du décimal à la fraction', ['Le nombre de décimales dicte la puissance de 10 au dénominateur.']);
  const top = y + 25;
  let b = box(110, top + 20, 200, 90, '', '#E3F2FD', '#1565C0', 24) + box(410, top + 20, 220, 90, '', '#FFF3E0', OCRE, 24) + box(730, top + 20, 180, 90, '', '#E8F5E9', GREEN, 24);
  b += txt(210, top + 75, '0,75', 26, '#1565C0', 'bold', 'middle') + txt(520, top + 75, '75/100', 26, OCRE, 'bold', 'middle') + txt(820, top + 75, '3/4', 26, GREEN, 'bold', 'middle');
  b += arrow(315, top + 65, 405, top + 65, '#555', 2.5) + arrow(635, top + 65, 725, top + 65, '#555', 2.5);
  b += txt(360, top + 45, '2 décimales', 17, '#555', 'normal', 'middle') + txt(360, top + 98, '→ 10²', 18, '#555', 'normal', 'middle');
  b += txt(680, top + 45, '÷ 25', 18, '#555', 'normal', 'middle') + txt(680, top + 98, 'simplifier', 17, '#555', 'normal', 'middle');
  b += txt(500, top + 170, '0,048 = 48/1000 = 6/125 : trois décimales → 10³ en bas', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 205, s + b); })();
// S3 — valeur exacte, approchée, arrondis
figs.u1f3 = (() => { const { s, y } = head('Valeur exacte, valeurs approchées', ['L’arrondi par défaut reste en dessous, l’arrondi par excès passe au-dessus.']);
  const top = y + 30;
  let b = txt(500, top, '1/3 = 0,333333… (valeur exacte : la fraction elle-même)', 23, '#1565C0', 'bold', 'middle');
  const Y = top + 110; const px = v => 140 + (v - 0.32) * 36000;
  b += seg(100, Y, 920, Y, '#333', 2.5);
  [[0.32, '0,32'], [0.33, '0,33'], [0.34, '0,34']].forEach(([v, lab]) => { b += seg(px(v), Y - 14, px(v), Y + 14, '#333', 2) + txt(px(v), Y + 46, lab, 20, '#555', 'normal', 'middle'); });
  b += dot(px(1 / 3), Y, 9, PINK2) + txt(px(1 / 3), Y - 28, '1/3', 22, PINK2, 'bold', 'middle');
  b += txt(px(0.33), Y - 60, 'par défaut : 0,33', 20, GREEN, 'bold', 'middle') + txt(px(0.34), Y - 60, 'par excès : 0,34', 20, OCRE, 'bold', 'middle');
  b += txt(500, Y + 100, 'au centième : 0,33 ≤ 1/3 ≤ 0,34 — l’arrondi retenu est 0,33 (le plus proche)', 20, '#1565C0', 'bold', 'middle');
  return svg(1000, Y + 135, s + b); })();
// S4 — encadrement
figs.u1f4 = (() => { const { s, y } = head('Encadrer un nombre', ['Deux bornes qui enferment le nombre ; amplitude = écart des bornes.']);
  const top = y + 25; const Y = top + 90; const px = v => 140 + (v - 3.1) * 7800;
  let b = seg(100, Y, 920, Y, '#333', 2.5);
  [[3.1, '3,1'], [3.12, '3,12'], [3.14, '3,14'], [3.16, '3,16'], [3.18, '3,18'], [3.2, '3,2']].forEach(([v, lab]) => { b += seg(px(v), Y - 13, px(v), Y + 13, '#333', 2) + txt(px(v), Y + 44, lab, 19, '#555', 'normal', 'middle'); });
  const v227 = 22 / 7;
  b += `<rect x="${px(3.14)}" y="${Y - 34}" width="${px(3.15) - px(3.14)}" height="34" fill="#C8E6C9" opacity="0.8"/>`;
  b += seg(px(3.15), Y - 13, px(3.15), Y + 13, GREEN, 2.5) + txt(px(3.15), Y + 70, '3,15', 19, GREEN, 'bold', 'middle');
  b += dot(px(v227), Y, 8, PINK2) + txt(px(v227), Y - 52, '22/7 = 3,1428…', 21, PINK2, 'bold', 'middle');
  b += txt(500, Y + 115, '3,14 ≤ 22/7 ≤ 3,15 : encadrement d’amplitude 0,01 (au centième)', 21, OCRE, 'bold', 'middle');
  return svg(1000, Y + 150, s + b); })();
// S5 — carré parfait et racine
figs.u1f5 = (() => { const { s, y } = head('Carré parfait et racine carrée', ['25 points forment un carré de côté 5 : 25 est un carré parfait et √25 = 5.']);
  const top = y + 30; const x0 = 170, a = 44;
  let b = '';
  for (let i = 0; i < 5; i++) for (let j = 0; j < 5; j++) b += dot(x0 + i * a, top + 20 + j * a, 10, '#1565C0');
  b += `<rect x="${x0 - 26}" y="${top - 6}" width="${4 * a + 52}" height="${4 * a + 52}" fill="none" stroke="${GREEN}" stroke-width="3" rx="8"/>`;
  b += txt(x0 + 2 * a, top + 20 + 4 * a + 52, 'côté 5 → aire 5² = 25', 21, GREEN, 'bold', 'middle');
  b += box(520, top + 30, 400, 130, '', '#FFF3E0', OCRE, 22);
  b += txt(720, top + 75, '√25 = 5 car 5² = 25', 25, OCRE, 'bold', 'middle');
  b += txt(720, top + 120, 'carrés parfaits : 1, 4, 9, 16, 25,', 21, '#333', 'normal', 'middle');
  b += txt(720, top + 150, '36, 49, 64, 81, 100, 121, 144…', 21, '#333', 'normal', 'middle');
  return svg(1000, top + 20 + 4 * a + 90, s + b); })();
// S6 — encadrements successifs de √7
figs.u1f6 = (() => { const { s, y } = head('Encadrer √7 pas à pas', ['On resserre l’étau : à l’unité, puis au dixième, puis au centième.']);
  const top = y + 20;
  const data = [['Étape', 'Encadrement', 'Les carrés disent'], ['à l’unité', '2 ≤ √7 ≤ 3', '4 ≤ 7 ≤ 9'], ['au dixième', '2,6 ≤ √7 ≤ 2,7', '6,76 ≤ 7 ≤ 7,29'], ['au centième', '2,64 ≤ √7 ≤ 2,65', '6,9696 ≤ 7 ≤ 7,0225']];
  let b = tableEl(110, top, [210, 310, 270], 58, data);
  b += txt(500, top + 4 * 58 + 45, 'calculatrice : √7 = 2,6457513… — nos encadrements étaient justes !', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();
// S7 — arrondi vs troncature
figs.u1f7 = (() => { const { s, y } = head('Arrondir ou tronquer ?', ['Tronquer = couper net ; arrondir = couper en regardant le chiffre suivant.']);
  const top = y + 30;
  let b = txt(500, top, '√7 = 2,645751…', 26, '#1565C0', 'bold', 'middle');
  b += box(120, top + 40, 350, 140, '', '#E8F5E9', GREEN, 22) + box(530, top + 40, 350, 140, '', '#FDE7EF', PINK2, 22);
  b += txt(295, top + 80, 'TRONQUÉ au millième', 21, GREEN, 'bold', 'middle') + txt(295, top + 125, '2,645', 28, GREEN, 'bold', 'middle') + txt(295, top + 162, 'on coupe, sans regarder', 18, '#555', 'normal', 'middle');
  b += txt(705, top + 80, 'ARRONDI au millième', 21, PINK2, 'bold', 'middle') + txt(705, top + 125, '2,646', 28, PINK2, 'bold', 'middle') + txt(705, top + 162, 'le chiffre suivant est 7 ≥ 5 : on monte', 17, '#555', 'normal', 'middle');
  b += txt(500, top + 230, 'règle de l’arrondi : chiffre suivant 0-4 → on garde ; 5-9 → on augmente de 1', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 265, s + b); })();
// S8 — sous-ensembles de R
figs.u1f8 = (() => { const { s, y } = head('Les sous-ensembles de ℝ', ['Chaque famille contient la précédente : ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ.']);
  const top = y + 20; const cx = 390, cy = top + 185;
  let b = '';
  const rings = [[330, 150, '#ECEFF1', 'ℝ'], [262, 118, '#E3F2FD', 'ℚ'], [196, 88, '#E8F5E9', 'D'], [132, 60, '#FFF3E0', 'ℤ'], [70, 34, '#FDE7EF', 'ℕ']];
  rings.forEach(([rx, ry, c]) => { b += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${c}" stroke="#78909C" stroke-width="2"/>`; });
  b += txt(cx, cy + 8, 'ℕ : 0, 7', 20, PINK2, 'bold', 'middle');
  b += txt(cx, cy - 72, 'ℤ : −3', 20, OCRE, 'bold', 'middle');
  b += txt(cx, cy - 100, 'D : 2,5', 20, GREEN, 'bold', 'middle');
  b += txt(cx, cy - 131, 'ℚ : 1/3', 20, '#1565C0', 'bold', 'middle');
  b += txt(cx, cy - 162, 'ℝ : √2, π', 20, '#455A64', 'bold', 'middle');
  b += txt(790, cy - 95, 'ℕ naturels', 21, PINK2, 'bold', 'start') + txt(790, cy - 55, 'ℤ relatifs', 21, OCRE, 'bold', 'start') + txt(790, cy - 15, 'D décimaux', 21, GREEN, 'bold', 'start') + txt(790, cy + 25, 'ℚ rationnels', 21, '#1565C0', 'bold', 'start') + txt(790, cy + 65, 'ℝ réels', 21, '#455A64', 'bold', 'start');
  return svg(1000, cy + 185, s + b); })();
// S9 — préfixes SI
figs.u1f9 = (() => { const { s, y } = head('Les préfixes du système international', ['Chaque préfixe cache une puissance de 10.']);
  const top = y + 20;
  const data = [['Préfixe', 'Symbole', 'Puissance', 'Exemple'], ['giga', 'G', '10⁹', '1 Go = 10⁹ octets'], ['méga', 'M', '10⁶', '1 MW = 10⁶ W'], ['kilo', 'k', '10³', '1 km = 10³ m'], ['milli', 'm', '10⁻³', '1 mm = 10⁻³ m'], ['micro', 'µ', '10⁻⁶', '1 µg = 10⁻⁶ g'], ['nano', 'n', '10⁻⁹', '1 nm = 10⁻⁹ m']];
  let b = tableEl(120, top, [170, 150, 170, 290], 52, data);
  return svg(1000, top + 7 * 52 + 40, s + b); })();
// S10 — notation scientifique et préfixes dans la vie courante
figs.u1f10 = (() => { const { s, y } = head('Notation scientifique et préfixes : même langage', ['3 500 000 g = 3,5 × 10⁶ g = 3,5 Mg : trois écritures, un seul nombre.']);
  const top = y + 30;
  let b = box(100, top, 250, 110, '', '#E3F2FD', '#1565C0', 22) + box(400, top, 250, 110, '', '#FFF3E0', OCRE, 22) + box(700, top, 220, 110, '', '#E8F5E9', GREEN, 22);
  b += txt(225, top + 45, 'nombre complet', 19, '#1565C0', 'bold', 'middle') + txt(225, top + 82, '3 500 000 g', 23, '#1565C0', 'bold', 'middle');
  b += txt(525, top + 45, 'notation scientifique', 19, OCRE, 'bold', 'middle') + txt(525, top + 82, '3,5 × 10⁶ g', 23, OCRE, 'bold', 'middle');
  b += txt(810, top + 45, 'préfixe SI', 19, GREEN, 'bold', 'middle') + txt(810, top + 82, '3,5 Mg', 23, GREEN, 'bold', 'middle');
  b += txt(500, top + 170, 'attention : notation scientifique 1296 = 1,296 × 10³ ; notation exponentielle 1296 = 6⁴', 19, PINK2, 'bold', 'middle');
  b += txt(500, top + 205, 'la première utilise TOUJOURS une puissance de 10 ; la seconde, n’importe quelle base', 19, '#555', 'normal', 'middle');
  return svg(1000, top + 240, s + b); })();

const S = [
  {
    t: 'Distinguer nombre rationnel et nombre irrationnel', comp: 'Nombre', theme: 'Nombres rationnels et irrationnels',
    goal: 'reconnaître si un nombre est rationnel ou irrationnel',
    mat: 'Cartes de nombres, calculatrice, droite numérique, cahier',
    revQ: 'Écris 0,5 et −3 sous forme de fractions.',
    revRA: '0,5 = 1/2 ; −3 = −3/1.',
    situation: 'Naina partage 1 kg de riz entre 3 familles : chacune reçoit 1/3 de kg, soit 0,333… kg — les 3 se répètent sans fin, mais la fraction 1/3 dit tout. Son frère calcule la diagonale d’un carré de 1 m : 1,41421356… — et là, AUCUNE fraction ne peut dire ce nombre. Deux mondes viennent de se séparer.',
    def: 'Un nombre rationnel est un nombre qui peut s’écrire comme le quotient a/b de deux entiers relatifs, avec b non nul. Un nombre irrationnel est un nombre réel qui ne peut pas s’écrire sous cette forme : son développement décimal est illimité et non périodique.',
    autrement: 'rationnel = on peut l’écrire en fraction d’entiers ; irrationnel = impossible, ses décimales ne s’arrêtent jamais et ne se répètent jamais.',
    concept: 'Le test est dans les décimales. Un rationnel a un développement décimal fini (3/4 = 0,75) ou périodique (1/3 = 0,333… ; 5/11 = 0,454545…) : la période trahit la fraction. Un irrationnel, lui, déroule des décimales sans fin ET sans aucun motif qui se répète : √2, √7, π… Les Grecs de l’école de Pythagore furent bouleversés par cette découverte : la diagonale du carré de côté 1 vaut √2, et √2 ne sera JAMAIS une fraction — on sait le démontrer. Tout entier est rationnel (−5 = −5/1) : les rationnels forment donc une très grande famille… mais pas toute la famille des nombres.',
    synthese: 'rationnel = quotient d’entiers (décimales finies ou périodiques) ; irrationnel = jamais un quotient d’entiers (décimales illimitées non périodiques) ; √2 et π sont irrationnels.',
    method: ['Essayer d’écrire le nombre en fraction d’entiers.', 'Observer les décimales : finies ou périodiques → rationnel.', 'Décimales sans fin ni période (√ d’un non-carré, π) → irrationnel.'],
    exemple: '0,75 = 75/100 = 3/4 : rationnel. 0,272727… = 27/99 = 3/11 : rationnel (période 27). √7 = 2,6457513… : ni fin ni période, irrationnel.',
    erreur: 'Croire que « beaucoup de décimales » = irrationnel : 1/7 = 0,142857142857… a des décimales sans fin, mais elles se RÉPÈTENT (période 142857) — c’est un rationnel !',
    saistu: 'On raconte qu’Hippase de Métaponte, le pythagoricien qui révéla l’existence des irrationnels, aurait été jeté à la mer par ses compagnons : la découverte brisait leur croyance que « tout est nombre entier ou rapport d’entiers ». √2 valait bien un naufrage !',
    exos: ['Classe rationnel / irrationnel : a) 2/7 ; b) √9 ; d) √5 ; e) 0,121212…',
      'Écris en fraction : a) 0,6 ; b) −4 ; d) 2,25 ; e) 0,08.',
      'a) Pourquoi √16 est-il rationnel ? b) Pourquoi √10 est-il irrationnel ? d) π est-il rationnel ? e) Donne un rationnel dont les décimales ne s’arrêtent jamais.'],
    corr: ['a) rationnel ; b) √9 = 3 rationnel ; d) irrationnel ; e) rationnel (= 12/99 = 4/33).',
      'a) 6/10 = 3/5 ; b) −4/1 ; d) 225/100 = 9/4 ; e) 8/100 = 2/25.',
      'a) √16 = 4 = 4/1 ; b) 10 n’est pas un carré parfait, son développement est illimité non périodique ; d) non, π est irrationnel ; e) 1/3 = 0,333…'],
    fig: 'u1f1'
  },
  {
    t: 'Écrire un décimal sous forme fractionnaire', comp: 'Nombre', theme: 'Forme fractionnaire et puissances de 10',
    goal: 'transformer un nombre décimal en fraction à l’aide des puissances de 10',
    mat: 'Tableau de numération, cartes de nombres décimaux, cahier',
    revQ: 'Que valent 10², 10³ et 10⁻¹ ?',
    revRA: '100 ; 1 000 ; 0,1.',
    situation: 'À l’épicerie, 0,75 kg de sucre. Sur la balance du marché, la marchande annonce « trois quarts de kilo ». 0,75 et 3/4 : même quantité, deux écritures. Comment passer de l’une à l’autre sans peser à nouveau ? Les puissances de 10 font le pont.',
    def: 'Tout nombre décimal peut s’écrire sous forme fractionnaire : son numérateur est le nombre privé de sa virgule, son dénominateur est la puissance de 10 dont l’exposant égale le nombre de chiffres après la virgule.',
    autrement: 'on efface la virgule en haut, on met 10, 100 ou 1 000 en bas — autant de zéros que de décimales.',
    concept: 'La virgule n’est qu’un repère : 0,75 signifie 75 centièmes, donc 75/100 — deux décimales, dénominateur 10² = 100. De même 0,048 = 48/1000 (trois décimales → 10³). La fraction obtenue se simplifie ensuite : 75/100 = 3/4 en divisant haut et bas par 25. Cette écriture révèle la vraie nature des décimaux : un nombre décimal est exactement un rationnel dont on peut rendre le dénominateur égal à une puissance de 10. C’est pourquoi 1/3 n’est PAS décimal : aucun 10ⁿ n’est divisible par 3. Tous les décimaux sont rationnels, mais tous les rationnels ne sont pas décimaux !',
    synthese: 'n décimales → dénominateur 10ⁿ ; numérateur = nombre sans virgule ; simplifier ensuite ; décimal = rationnel à dénominateur 10ⁿ possible.',
    method: ['Compter les chiffres après la virgule : n.', 'Écrire (nombre sans virgule) / 10ⁿ.', 'Simplifier la fraction obtenue.'],
    exemple: '2,375 : trois décimales → 2375/1000 ; ÷ 125 : 19/8. Vérification : 19 ÷ 8 = 2,375 ✓.',
    erreur: 'Oublier la partie entière : 2,5 n’est pas 5/10 ! On écrit 25/10 = 5/2 — le 2 avant la virgule fait partie du numérateur.',
    saistu: 'La virgule décimale est une invention récente : c’est le Flamand Simon Stevin qui popularisa les décimaux en 1585 dans « La Disme »… en notant 0,75 sous la forme 7⑴5⑵ ! Notre virgule, plus simple, s’imposa au XVIIᵉ siècle — mais les Anglo-Saxons utilisent un point.',
    exos: ['Écris en fraction simplifiée : a) 0,4 ; b) 0,25 ; d) 1,5 ; e) 0,125.',
      'Écris en fraction simplifiée : a) 3,2 ; b) 0,06 ; d) 2,75 ; e) 0,375.',
      'a) Combien de décimales a 0,0012 ? b) Écris-le en fraction. d) Simplifie. e) 1/7 est-il un nombre décimal ? Pourquoi ?'],
    corr: ['a) 4/10 = 2/5 ; b) 25/100 = 1/4 ; d) 15/10 = 3/2 ; e) 125/1000 = 1/8.',
      'a) 32/10 = 16/5 ; b) 6/100 = 3/50 ; d) 275/100 = 11/4 ; e) 375/1000 = 3/8.',
      'a) quatre ; b) 12/10000 ; d) 3/2500 ; e) non : aucune puissance de 10 n’est divisible par 7, son développement 0,142857… ne s’arrête jamais.'],
    fig: 'u1f2'
  },
  {
    t: 'Utiliser valeur exacte et valeur approchée', comp: 'Nombre', theme: 'Valeur exacte, arrondi par défaut et par excès',
    goal: 'distinguer valeur exacte et valeur approchée et arrondir par défaut ou par excès',
    mat: 'Calculatrice, droite numérique, cahier, ardoises',
    revQ: 'Que vaut 1/3 en écriture décimale ?',
    revRA: '0,333… : les 3 se répètent sans fin.',
    situation: 'Trois amis partagent 10 000 Ar : 10 000 ÷ 3 = 3 333,33… Ar. Le billet de 3 333 Ar n’existe pas, et la division ne tombe jamais juste ! Il faudra donner environ 3 333 Ar — une valeur approchée. Mais pour vérifier les comptes, seule la fraction 10000/3 est EXACTE.',
    def: 'La valeur exacte d’un nombre est son écriture sans aucune perte : fraction, racine, π. Une valeur approchée est un nombre décimal proche de lui. L’approximation par défaut est inférieure au nombre ; l’approximation par excès lui est supérieure ; l’arrondi retient la plus proche des deux.',
    autrement: 'exact = la vraie valeur, intacte ; approché = une valeur décimale « presque juste » — en dessous (défaut) ou au-dessus (excès).',
    concept: 'Garder la valeur exacte le plus longtemps possible est une règle d’or du calcul : si l’on remplace trop tôt 1/3 par 0,33, les erreurs s’accumulent (0,33 × 3 = 0,99 ≠ 1 !). On n’arrondit qu’À LA FIN. Au centième, 1/3 est entre 0,33 (défaut) et 0,34 (excès) ; comme 0,333… est plus proche de 0,33, l’arrondi au centième est 0,33. La règle mécanique : on regarde le chiffre SUIVANT la coupure — de 0 à 4 on garde (arrondi = défaut), de 5 à 9 on monte (arrondi = excès). Préciser toujours le rang : « arrondi au dixième, au centième… », sinon la réponse ne veut rien dire.',
    synthese: 'valeur exacte = fraction ou racine intacte ; défaut ≤ nombre ≤ excès ; arrondi = plus proche des deux ; on arrondit en fin de calcul seulement.',
    method: ['Garder la valeur exacte pendant tout le calcul.', 'Au rang demandé, écrire les approximations par défaut et par excès.', 'Choisir l’arrondi : chiffre suivant 0-4 → défaut ; 5-9 → excès.'],
    exemple: '7/6 = 1,1666… Au centième : défaut 1,16, excès 1,17 ; le chiffre suivant est 6 → arrondi 1,17.',
    erreur: 'Écrire « 1/3 = 0,33 » : c’est FAUX, le signe = est réservé à l’exactitude. On écrit 1/3 ≈ 0,33 ou « 0,33 est une valeur approchée de 1/3 au centième ».',
    saistu: 'Les ingénieurs de la NASA n’utilisent que 15 décimales de π pour piloter leurs sondes aux confins du système solaire : avec ça, l’erreur sur une trajectoire de 20 milliards de km est plus petite… qu’un doigt ! Les milliards de décimales connues de π ne servent qu’à tester les ordinateurs.',
    exos: ['Pour 5/7 (= 0,714285…) : a) valeur exacte ? b) approximation par défaut au centième ? d) par excès au centième ? e) arrondi au centième ?',
      'Arrondis 8,3652 : a) à l’unité ; b) au dixième ; d) au centième ; e) au millième.',
      'a) Pourquoi garde-t-on la valeur exacte pendant le calcul ? b) 0,666 × 3 vaut-il 2 ? d) Que vaut exactement 2/3 × 3 ? e) Conclis en une phrase.'],
    corr: ['a) 5/7 ; b) 0,71 ; d) 0,72 ; e) 0,71 (chiffre suivant 4).',
      'a) 8 ; b) 8,4 ; d) 8,37 ; e) 8,365.',
      'a) pour ne pas accumuler d’erreurs ; b) non, 1,998 ; d) 2 exactement ; e) arrondir trop tôt fausse le résultat final.'],
    fig: 'u1f3'
  },
  {
    t: 'Encadrer un nombre', comp: 'Nombre', theme: 'Encadrement et amplitude',
    goal: 'encadrer une fraction ou un irrationnel entre deux décimaux d’amplitude donnée',
    mat: 'Droite numérique, calculatrice, cartes de nombres, cahier',
    revQ: 'Donne les approximations par défaut et par excès de 22/7 à l’unité.',
    revRA: '3 et 4, car 22/7 = 3,14…',
    situation: 'Fety veut clôturer un enclos circulaire et calcule avec 22/7 à la place de π. Son père demande : « ce 22/7, il vaut combien, à peu près ? » Fety répond : « entre 3,14 et 3,15, j’en suis sûr. » Donner deux bornes sûres plutôt qu’une valeur douteuse : voilà l’encadrement.',
    def: 'Encadrer un nombre x, c’est trouver deux nombres a et b tels que a ≤ x ≤ b. L’amplitude de l’encadrement est la différence b − a. Encadrer au dixième, au centième… signifie choisir des bornes d’amplitude 0,1 ; 0,01…',
    autrement: 'on enferme le nombre entre un plancher et un plafond ; l’amplitude mesure l’écart entre les deux.',
    concept: 'L’encadrement est l’art de dire la vérité avec deux nombres : « 22/7 est entre 3,14 et 3,15 » est une certitude, alors que « 22/7 ≈ 3,14 » cache l’erreur commise. Pour encadrer une fraction, on pose la division et on s’arrête au rang voulu : le quotient tronqué donne la borne basse, et la borne basse + une unité du rang donne la borne haute. Plus l’amplitude est petite, plus l’encadrement est précis : à l’unité (amplitude 1), au dixième (0,1), au centième (0,01)… On resserre l’étau autant qu’on veut — c’est exactement ainsi qu’on apprivoisera les racines carrées à la prochaine séance.',
    synthese: 'a ≤ x ≤ b ; amplitude = b − a ; division arrêtée au rang voulu → borne basse ; + 1 unité du rang → borne haute.',
    method: ['Poser la division (ou utiliser la calculatrice) jusqu’au rang demandé.', 'Tronquer : c’est la borne inférieure.', 'Ajouter une unité du rang : c’est la borne supérieure.'],
    exemple: 'Encadrer 47/9 au dixième : 47 ÷ 9 = 5,22… → 5,2 ≤ 47/9 ≤ 5,3, amplitude 0,1.',
    erreur: 'Inverser les bornes : écrire 3,15 ≤ 22/7 ≤ 3,14 n’a aucun sens — le petit nombre se place toujours à gauche. Relire l’encadrement comme on lit la droite numérique.',
    saistu: 'Archimède encadra π dès le IIIᵉ siècle avant J.-C. : en coinçant le cercle entre deux polygones de 96 côtés, il prouva que 3 + 10/71 ≤ π ≤ 3 + 1/7. Son plafond 22/7 est resté 2 000 ans dans les cahiers d’écoliers — tu viens de l’utiliser !',
    exos: ['Encadre à l’unité : a) 17/5 ; b) 50/7 ; d) 100/9 ; e) 23/4.',
      'Encadre au dixième : a) 1/3 ; b) 22/7 ; d) 5/6 ; e) 13/11.',
      'a) Encadre 8/7 au centième. b) Quelle est l’amplitude ? d) Donne un encadrement de 8/7 d’amplitude 0,5. e) Lequel est le plus précis ?'],
    corr: ['a) 3 ≤ 17/5 ≤ 4 ; b) 7 ≤ 50/7 ≤ 8 ; d) 11 ≤ 100/9 ≤ 12 ; e) 5 ≤ 23/4 ≤ 6.',
      'a) 0,3 ≤ 1/3 ≤ 0,4 ; b) 3,1 ≤ 22/7 ≤ 3,2 ; d) 0,8 ≤ 5/6 ≤ 0,9 ; e) 1,1 ≤ 13/11 ≤ 1,2.',
      'a) 1,14 ≤ 8/7 ≤ 1,15 ; b) 0,01 ; d) par exemple 1 ≤ 8/7 ≤ 1,5 ; e) celui au centième : amplitude 50 fois plus petite.'],
    fig: 'u1f4'
  },
  {
    t: 'Découvrir la racine carrée et les carrés parfaits', comp: 'Nombre', theme: 'Racine carrée, vocabulaire, carrés parfaits',
    goal: 'définir la racine carrée d’un nombre positif et reconnaître les carrés parfaits',
    mat: 'Papier quadrillé, jetons, table de multiplication, cahier',
    revQ: 'Calcule 4², 7², 12².',
    revRA: '16 ; 49 ; 144.',
    situation: 'Le fokontany offre 64 dalles carrées pour paver une place… carrée. Combien de dalles par côté ? Il faut un nombre qui, multiplié par lui-même, donne 64 : c’est 8, car 8² = 64. Chercher le côté quand on connaît l’aire : la racine carrée est née.',
    def: 'La racine carrée d’un nombre positif a est le nombre positif, noté √a, dont le carré vaut a : (√a)² = a. Un entier naturel est un carré parfait s’il est le carré d’un entier naturel.',
    autrement: '√a répond à la question : « quel nombre positif, multiplié par lui-même, donne a ? »',
    concept: 'Carré et racine carrée sont deux opérations inverses : élever au carré fait l’aller (8 → 64), la racine fait le retour (64 → 8). Les carrés parfaits 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144… sont les stations où la racine tombe juste : √49 = 7, √144 = 12. Géométriquement, √a est le côté du carré d’aire a — d’où le nom ! Deux garde-fous : √0 = 0, √1 = 1 ; et un nombre négatif n’a PAS de racine carrée, car aucun carré n’est négatif. Connaître les carrés parfaits jusqu’à 144 par cœur, c’est reconnaître les racines au premier regard.',
    synthese: '√a = nombre positif de carré a ; (√a)² = a ; carrés parfaits = carrés d’entiers ; √(négatif) n’existe pas.',
    method: ['Chercher le nombre dans la liste des carrés parfaits.', 'S’il y est : √a = l’entier correspondant.', 'Vérifier en élevant au carré.'],
    exemple: '√81 : 81 = 9², donc √81 = 9. Vérification : 9² = 81 ✓. Et √(−9) n’existe pas.',
    erreur: 'Croire que √(a + b) = √a + √b : √(9 + 16) = √25 = 5, alors que √9 + √16 = 3 + 4 = 7 ! La racine ne se distribue JAMAIS sur l’addition.',
    saistu: 'Le symbole √ apparaît en 1525 chez le mathématicien allemand Christoff Rudolff : ce serait un petit r déformé, initiale de « radix » — racine en latin. La barre horizontale au-dessus, elle, fut ajoutée par Descartes en 1637.',
    exos: ['Calcule : a) √36 ; b) √100 ; d) √121 ; e) √1.',
      'Carré parfait ou non ? a) 48 ; b) 169 ; d) 90 ; e) 400.',
      'a) Quel est le côté d’un carré d’aire 225 m² ? b) Que vaut (√13)² ? d) √(−25) existe-t-il ? e) Compare √(16 + 9) et √16 + √9.'],
    corr: ['a) 6 ; b) 10 ; d) 11 ; e) 1.',
      'a) non ; b) oui (13²) ; d) non ; e) oui (20²).',
      'a) √225 = 15 m ; b) 13 ; d) non, aucun carré n’est négatif ; e) √25 = 5 et 3 + 4 = 7 : différents !'],
    fig: 'u1f5'
  },
  {
    t: 'Encadrer une racine carrée par encadrements successifs', comp: 'Nombre', theme: 'Racine d’un non-carré parfait',
    goal: 'encadrer la racine carrée d’un nombre positif par encadrements successifs',
    mat: 'Calculatrice, tableau des carrés, droite numérique, cahier',
    revQ: 'Entre quels carrés parfaits se trouve 7 ?',
    revRA: 'Entre 4 = 2² et 9 = 3².',
    situation: 'Un carré de 7 m² pour le potager de Lalao : quel côté ? √7 n’est dans aucune table ! Mais 2² = 4 est trop petit et 3² = 9 trop grand : le côté est entre 2 et 3 m. Puis entre 2,6 et 2,7… On resserre l’étau jusqu’à la précision voulue.',
    def: 'Encadrer √a par encadrements successifs consiste à chercher, rang après rang, les deux nombres consécutifs dont les carrés encadrent a : si x² ≤ a ≤ y², alors x ≤ √a ≤ y. On affine à l’unité, puis au dixième, puis au centième.',
    autrement: 'on teste des carrés : trop petit, trop grand… et on coince √a entre les deux, avec de plus en plus de décimales.',
    concept: 'La méthode repose sur une idée simple : élever au carré respecte l’ordre des nombres positifs. Donc comparer √7 à 2,6 revient à comparer 7 à 2,6² = 6,76. À l’unité : 2² = 4 ≤ 7 ≤ 9 = 3², donc 2 ≤ √7 ≤ 3. Au dixième, on teste 2,1² ; 2,2²… jusqu’à coincer : 2,6² = 6,76 et 2,7² = 7,29, donc 2,6 ≤ √7 ≤ 2,7. Au centième : 2,64² = 6,9696 et 2,65² = 7,0225. Chaque étape divise l’incertitude par 10 ! Comme 7 n’est pas un carré parfait, √7 est irrationnel : la machine à encadrer ne s’arrêtera jamais sur une valeur exacte — mais elle approche aussi près qu’on l’exige.',
    synthese: 'x² ≤ a ≤ y² donne x ≤ √a ≤ y ; on teste les carrés rang par rang ; racine d’un non-carré parfait = irrationnelle.',
    method: ['À l’unité : coincer a entre deux carrés parfaits consécutifs.', 'Au dixième : tester les carrés de x,1 ; x,2… pour resserrer.', 'Répéter au rang suivant jusqu’à la précision demandée.'],
    exemple: '√13 : 3² = 9 ≤ 13 ≤ 16 = 4² → 3 ≤ √13 ≤ 4 ; 3,6² = 12,96 et 3,7² = 13,69 → 3,6 ≤ √13 ≤ 3,7.',
    erreur: 'Prendre la moyenne des bornes et croire que c’est fini : √7 n’est PAS 2,5 ! Les bornes ne disent pas où le nombre se cache entre elles — seul un nouveau test au carré resserre l’étau.',
    saistu: 'Les scribes de Babylone encadraient déjà √2 il y a 3 700 ans : la tablette d’argile YBC 7289 donne 1,41421296… en écriture sexagésimale — six décimales justes, sans calculatrice ! Leur méthode des moyennes successives est l’ancêtre de celle de nos processeurs.',
    exos: ['Encadre à l’unité : a) √5 ; b) √20 ; d) √50 ; e) √90.',
      'Encadre √11 : a) à l’unité ; b) au dixième (3,3² = 10,89 ; 3,4² = 11,56) ; d) donne l’amplitude ; e) √11 est-il rationnel ?',
      'Le carré de Lalao a une aire de 12 m². a) Encadre le côté à l’unité. b) 3,4² et 3,5² ? d) Encadre le côté au dixième. e) Quelle longueur de grillage prévoir pour 4 côtés (borne haute) ?'],
    corr: ['a) 2 ≤ √5 ≤ 3 ; b) 4 ≤ √20 ≤ 5 ; d) 7 ≤ √50 ≤ 8 ; e) 9 ≤ √90 ≤ 10.',
      'a) 3 ≤ √11 ≤ 4 ; b) 3,3 ≤ √11 ≤ 3,4 ; d) 0,1 ; e) non : 11 n’est pas un carré parfait.',
      'a) 3 ≤ côté ≤ 4 ; b) 11,56 et 12,25 ; d) 3,4 ≤ côté ≤ 3,5 ; e) 4 × 3,5 = 14 m.'],
    fig: 'u1f6'
  },
  {
    t: 'Arrondir ou tronquer un développement décimal', comp: 'Nombre', theme: 'Développement décimal arrondi ou tronqué',
    goal: 'donner le développement décimal tronqué ou arrondi d’une racine carrée',
    mat: 'Calculatrice, cartes de nombres, cahier, ardoises',
    revQ: 'Arrondis 2,6457 au centième.',
    revRA: '2,65 (le chiffre suivant est 5).',
    situation: 'La calculatrice affiche √7 = 2,645751311… Dix chiffres ! Le menuisier n’en veut que trois : « coupe-moi ça au millième ». Deux façons de couper : net (troncature) ou au plus juste (arrondi). Le choix change la dernière décimale — et parfois la pièce de bois.',
    def: 'Tronquer un développement décimal au rang n, c’est supprimer tous les chiffres situés après ce rang. Arrondir au rang n, c’est choisir la valeur du rang n la plus proche du nombre : on garde le chiffre si le suivant est 0, 1, 2, 3 ou 4, on l’augmente de 1 s’il est 5, 6, 7, 8 ou 9.',
    autrement: 'tronquer = couper aux ciseaux sans regarder ; arrondir = couper en regardant le chiffre d’après pour rester au plus près.',
    concept: 'La troncature donne toujours l’approximation par défaut : √7 tronqué au millième = 2,645. L’arrondi, lui, peut monter : le chiffre suivant étant 7, l’arrondi au millième est 2,646 — approximation par excès ici, mais la plus PROCHE de la vraie valeur. L’erreur de troncature peut presque atteindre une unité du rang ; l’erreur d’arrondi ne dépasse jamais la moitié d’une unité du rang : l’arrondi est deux fois plus fiable. En pratique, la science arrondit, mais certains calculs commerciaux tronquent (un prix affiché 999,99 Ar reste sous les 1 000 !). Toujours annoncer la méthode ET le rang.',
    synthese: 'troncature = suppression des chiffres (défaut) ; arrondi = valeur du rang la plus proche (erreur ≤ demi-unité du rang) ; préciser méthode et rang.',
    method: ['Repérer le rang demandé et le chiffre qui le suit.', 'Troncature : couper là, sans rien changer.', 'Arrondi : couper puis ajouter 1 au dernier chiffre si le suivant est ≥ 5.'],
    exemple: '√3 = 1,7320508… Au centième : tronqué 1,73 ; arrondi 1,73 (suivant 2). Au millième : tronqué 1,732 ; arrondi 1,732. Au dix-millième : tronqué 1,7320 ; arrondi 1,7321.',
    erreur: 'Arrondir en chaîne : 2,3461 arrondi au centième n’est pas « 2,346 puis 2,35 » ! On regarde UNIQUEMENT le chiffre juste après le rang : 6 → 2,35 est correct, mais 2,3449 → 2,34 (et non 2,345 → 2,35).',
    saistu: 'En 1994, une erreur d’arrondi dans le processeur Pentium d’Intel — quelques divisions fausses à la 9ᵉ décimale — coûta 475 millions de dollars de remplacements ! Depuis, les règles d’arrondi des machines sont fixées par une norme mondiale, IEEE 754.',
    exos: ['√5 = 2,2360679… Donne : a) la troncature au dixième ; b) l’arrondi au dixième ; d) la troncature au millième ; e) l’arrondi au millième.',
      '√19 = 4,3588989… Donne : a) troncature au centième ; b) arrondi au centième ; d) troncature au dix-millième ; e) arrondi au dix-millième.',
      'a) Quelle méthode donne toujours une approximation par défaut ? b) Quelle est l’erreur maximale d’un arrondi au centième ? d) Tronque 9,999 à l’unité. e) Arrondis 9,999 au centième : que remarques-tu ?'],
    corr: ['a) 2,2 ; b) 2,2 ; d) 2,236 ; e) 2,236.',
      'a) 4,35 ; b) 4,36 ; d) 4,3588 ; e) 4,3589.',
      'a) la troncature ; b) un demi-centième (0,005) ; d) 9 ; e) 10,00 : l’arrondi fait basculer toutes les décimales et même l’unité !'],
    fig: 'u1f7'
  },
  {
    t: 'Catégoriser les sous-ensembles de ℝ', comp: 'Nombre', theme: 'ℕ, ℤ, D, ℚ et les irrationnels dans ℝ',
    goal: 'placer un nombre dans le plus petit sous-ensemble de ℝ qui le contient',
    mat: 'Cartes de nombres, schéma des ensembles emboîtés, droite numérique',
    revQ: 'Classe : −3 ; 0,75 ; 1/3 ; √2.',
    revRA: 'Entier relatif ; décimal ; rationnel ; irrationnel.',
    situation: 'Grand tri en classe : chaque élève reçoit une carte-nombre et doit entrer dans le bon cercle tracé à la craie dans la cour. 7 entre partout, −3 refuse le cercle des naturels, 1/3 s’arrête aux rationnels et √2 reste dehors… sauf du grand cercle ℝ qui accueille tout le monde !',
    def: 'Les nombres réels se rangent en sous-ensembles emboîtés : ℕ (entiers naturels : 0, 1, 2…), ℤ (entiers relatifs), D (nombres décimaux), ℚ (nombres rationnels) et ℝ (tous les réels, rationnels et irrationnels). Chaque ensemble contient le précédent : ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ.',
    autrement: 'cinq boîtes gigognes : les naturels dans les relatifs, dans les décimaux, dans les rationnels, dans les réels — et les irrationnels seulement dans la plus grande.',
    concept: 'Chaque élargissement répond à une impossibilité : ℕ ne sait pas faire 3 − 7, ℤ l’accueille (−4) ; ℤ ne sait pas faire 3 ÷ 2, D l’accueille (1,5) ; D ne sait pas écrire 1/3, ℚ l’accueille ; ℚ ne sait pas écrire √2, ℝ l’accueille. Un même nombre appartient à TOUTES les boîtes à partir de la sienne : 7 est à la fois naturel, relatif, décimal, rationnel et réel — on demande donc le PLUS PETIT ensemble qui le contient. Cas pièges : 0 est un naturel (ni positif ni négatif, il est le seul à être son propre opposé) ; √9 = 3 est naturel malgré sa racine ; −5/1 = −5 est relatif malgré sa barre de fraction. Toujours simplifier avant de classer !',
    synthese: 'ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ ; chaque extension répare une opération impossible ; classer = trouver le plus petit ensemble, après simplification.',
    method: ['Simplifier le nombre (calculer la racine, réduire la fraction).', 'Tester les boîtes de la plus petite à la plus grande : ℕ, ℤ, D, ℚ.', 'Si aucune fraction d’entiers n’existe : irrationnel, seulement dans ℝ.'],
    exemple: '√16 = 4 → ℕ. −7,5 = −75/10 → D (décimal négatif). 2/7 → ℚ (division sans fin périodique). π → irrationnel, dans ℝ seulement.',
    erreur: 'Classer d’après l’habit et non d’après la valeur : 14/2 ressemble à une fraction, mais 14/2 = 7, un entier naturel ! Simplifier d’abord, classer ensuite.',
    saistu: 'Ces lettres sont des initiales : ℕ comme naturel, ℤ comme « Zahl » (nombre, en allemand — hommage aux mathématiciens allemands), ℚ comme quotient, ℝ comme réel. L’ensemble D des décimaux est une spécialité des programmes francophones : beaucoup de pays passent directement de ℤ à ℚ !',
    exos: ['Donne le plus petit ensemble : a) 12 ; b) −8 ; d) 3,7 ; e) 5/9.',
      'Donne le plus petit ensemble : a) √36 ; b) −4/8 ; d) √5 ; e) 18/3.',
      'Vrai ou faux ? a) Tout entier relatif est rationnel. b) Tout rationnel est décimal. d) 0 appartient à ℕ. e) Un irrationnel peut être négatif.'],
    corr: ['a) ℕ ; b) ℤ ; d) D ; e) ℚ.',
      'a) ℕ (= 6) ; b) D (= −0,5) ; d) irrationnel (ℝ seulement) ; e) ℕ (= 6).',
      'a) vrai (n = n/1) ; b) faux : 1/3 est rationnel non décimal ; d) vrai ; e) vrai : −√2 est irrationnel.'],
    fig: 'u1f8'
  },
  {
    t: 'Relier notation scientifique et préfixes SI', comp: 'Nombre', theme: 'Préfixes du système international',
    goal: 'associer les préfixes du système international aux puissances de 10',
    mat: 'Tableaux de conversion, étiquettes d’objets (Go, MW, km, mg), cahier',
    revQ: 'Écris 149 600 000 en notation scientifique.',
    revRA: '1,496 × 10⁸.',
    situation: 'Sur la clé USB de Mamy : « 32 Go ». Sur le flacon de sirop : « 5 mg ». Sur le panneau : « 12 km ». Giga, milli, kilo… ces petits mots collés aux unités sont des puissances de 10 déguisées : le système international parle la langue des exposants.',
    def: 'Les préfixes du système international (SI) multiplient une unité par une puissance de 10 : kilo (k) = 10³, méga (M) = 10⁶, giga (G) = 10⁹ pour les multiples ; milli (m) = 10⁻³, micro (µ) = 10⁻⁶, nano (n) = 10⁻⁹ pour les sous-multiples.',
    autrement: 'chaque préfixe est un raccourci : kilo = « mille fois », milli = « millième de » — la puissance de 10 est cachée dans le mot.',
    concept: 'Les préfixes montent et descendent de 3 en 3 dans les exposants : k (10³), M (10⁶), G (10⁹) — et en miroir m (10⁻³), µ (10⁻⁶), n (10⁻⁹). Convertir devient un jeu d’écriture scientifique : 32 Go = 32 × 10⁹ octets = 3,2 × 10¹⁰ octets ; 5 mg = 5 × 10⁻³ g. Dans l’autre sens, la notation scientifique choisit son préfixe : une centrale de 1,8 × 10⁶ W est une centrale de 1,8 MW. Attention aux majuscules : M = méga (10⁶) mais m = milli (10⁻³) — un MW chauffe une ville, un mW s’éteint sous le doigt ! Le SI est universel : un médecin de Toamasina et un ingénieur de Tokyo lisent « 250 µg » exactement pareil.',
    synthese: 'k, M, G = 10³, 10⁶, 10⁹ ; m, µ, n = 10⁻³, 10⁻⁶, 10⁻⁹ ; préfixe ↔ puissance de 10 ↔ notation scientifique ; M ≠ m !',
    method: ['Remplacer le préfixe par sa puissance de 10.', 'Écrire le nombre en notation scientifique si demandé.', 'Dans l’autre sens : choisir le préfixe dont la puissance est la plus proche.'],
    exemple: '7,5 km = 7,5 × 10³ m. 0,004 g = 4 × 10⁻³ g = 4 mg. 2,5 × 10⁹ octets = 2,5 Go.',
    erreur: 'Confondre M et m : écrire « le comprimé contient 500 Mg de paracétamol », c’est prescrire 500 tonnes ! La casse des préfixes n’est pas une décoration : M = million, m = millième.',
    saistu: 'Le SI s’étend sans cesse : en 2022, on a officialisé ronna (10²⁷) et quetta (10³⁰) — la Terre pèse environ 6 ronnagrammes ! À l’autre bout, ronto (10⁻²⁷) et quecto (10⁻³⁰) attendent les physiciens des particules.',
    exos: ['Remplace par une puissance de 10 : a) 3 km en m ; b) 2 Go en octets ; d) 7 mg en g ; e) 4 µm en m.',
      'Choisis le bon préfixe : a) 5 × 10³ g ; b) 1,2 × 10⁶ W ; d) 8 × 10⁻³ L ; e) 6 × 10⁻⁹ m.',
      'a) Écris 32 Go en octets, en notation scientifique. b) Combien de mg dans 2,5 g ? d) Range : 1 Mm, 1 km, 1 nm, 1 µm. e) Pourquoi M et m ne sont-ils pas interchangeables ?'],
    corr: ['a) 3 × 10³ m ; b) 2 × 10⁹ octets ; d) 7 × 10⁻³ g ; e) 4 × 10⁻⁶ m.',
      'a) 5 kg ; b) 1,2 MW ; d) 8 mL ; e) 6 nm.',
      'a) 3,2 × 10¹⁰ octets ; b) 2 500 mg ; d) 1 nm, 1 µm, 1 km, 1 Mm ; e) M = 10⁶ et m = 10⁻³ : un milliard de fois d’écart !'],
    fig: 'u1f9'
  },
  {
    t: 'Utiliser les préfixes SI dans la vie courante', comp: 'Nombre', theme: 'Notation scientifique, exponentielle et conversions',
    goal: 'utiliser notation scientifique et préfixes SI dans des situations concrètes et distinguer notation scientifique et notation exponentielle',
    mat: 'Factures, étiquettes, notices de médicaments, calculatrice, cahier',
    revQ: 'Que vaut 1 MW en watts ?',
    revRA: '10⁶ W = 1 000 000 W.',
    situation: 'Projet d’exposé : « Madagascar en chiffres ». Population : 2,56 × 10⁷ habitants. Superficie : 587 000 km². Un cheveu : 80 µm. Le barrage d’Andekaleka : 58 MW. Pour comparer, additionner, vérifier ces données de tailles folles, une seule langue commune : les puissances de 10.',
    def: 'La notation scientifique a × 10ⁿ (avec 1 ≤ a strictement inférieur à 10) sert à écrire et comparer les très grands et très petits nombres ; les préfixes SI en sont la traduction dans les unités. La notation exponentielle désigne, elle, toute écriture en puissance d’une base quelconque, comme 1296 = 6⁴.',
    autrement: 'notation scientifique = toujours « un chiffre virgule quelque chose fois 10 exposant » ; notation exponentielle = n’importe quelle puissance, de n’importe quelle base.',
    concept: 'Dans la vie courante, la chaîne complète est : mesure → notation scientifique → préfixe lisible. Le globule rouge mesure 0,000007 m = 7 × 10⁻⁶ m = 7 µm ; la production d’Andekaleka 5,8 × 10⁷ W = 58 MW. Pour COMPARER, on regarde d’abord l’exposant : 3 × 10⁸ bat 9 × 10⁷ sans calcul, car 8 dépasse 7. Ne pas confondre les deux notations : 1296 = 1,296 × 10³ (scientifique, base 10 obligatoire) et 1296 = 6⁴ (exponentielle, base libre) décrivent le même nombre mais ne servent pas au même usage — la première mesure sa TAILLE, la seconde révèle sa STRUCTURE. Les journaux, les médecins et les informaticiens utilisent la première ; les codes secrets et l’arithmétique préfèrent la seconde.',
    synthese: 'mesure → a × 10ⁿ → préfixe SI ; comparer par les exposants d’abord ; scientifique = base 10 et 1 ≤ a strictement sous 10 ; exponentielle = base quelconque.',
    method: ['Écrire la mesure en notation scientifique.', 'Traduire la puissance de 10 en préfixe SI adapté.', 'Pour comparer deux mesures : comparer les exposants, puis les mantisses.'],
    exemple: 'Distance Terre-Lune : 384 400 km = 3,844 × 10⁵ km = 3,844 × 10⁸ m. Virus : 1,2 × 10⁻⁷ m = 0,12 µm = 120 nm.',
    erreur: 'Dire que 1296 = 6⁴ est « la notation scientifique de 1296 » : FAUX, la base n’est pas 10 ! La notation scientifique de 1296 est 1,296 × 10³ — et elle seule.',
    saistu: 'Le disque dur de 1 To (téra = 10¹²) contient mille milliards d’octets : il stockerait le texte d’environ un million de gros romans — toute une bibliothèque nationale dans la poche. Et l’ADN fait mieux : un gramme peut coder 2 × 10¹¹ Go !',
    exos: ['Écris en notation scientifique puis avec un préfixe : a) 25 000 W ; b) 0,003 g ; d) 4 500 000 000 octets ; e) 0,000000045 m.',
      'Compare (sans tout calculer) : a) 5 × 10⁶ et 2 × 10⁷ ; b) 8 × 10⁻⁴ et 3 × 10⁻³ ; d) 9,9 × 10⁵ et 1,1 × 10⁶ ; e) 7 µm et 0,8 mm.',
      'a) 1296 = 1,296 × 10³ : quel est le nom de cette écriture ? b) 1296 = 6⁴ : et celle-ci ? d) Laquelle indique l’ordre de grandeur ? e) Écris 2,56 × 10⁷ habitants en toutes lettres.'],
    corr: ['a) 2,5 × 10⁴ W = 25 kW ; b) 3 × 10⁻³ g = 3 mg ; d) 4,5 × 10⁹ octets = 4,5 Go ; e) 4,5 × 10⁻⁸ m = 45 nm.',
      'a) 2 × 10⁷ (exposant 7 contre 6) ; b) 3 × 10⁻³ (−3 dépasse −4) ; d) 1,1 × 10⁶ ; e) 0,8 mm = 800 µm : bien plus grand.',
      'a) notation scientifique ; b) notation exponentielle ; d) la scientifique ; e) vingt-cinq millions six cent mille habitants.'],
    fig: 'u1f10'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'Nombre',
  rag: 'démontrer une compréhension du concept de nombre rationnel et irrationnel et effectuer les calculs correspondants.',
  valeurs: 'estime de soi et rigueur',
  sessions: S,
  revision: {
    table: [
      ['Rationnels / irrationnels', 'a/b (décimales finies ou périodiques) vs √2, π (illimitées non périodiques)', 'Classer tout nombre rencontré'],
      ['Décimal → fraction', 'n décimales → dénominateur 10ⁿ, puis simplifier', 'Retrouver la valeur exacte'],
      ['Exact / approché / encadré', 'Défaut ≤ nombre ≤ excès ; arrondi = plus proche ; amplitude', 'Mesurer sans mentir'],
      ['Racine carrée', '√a = nombre positif de carré a ; carrés parfaits ; encadrements successifs', 'Trouver un côté depuis une aire'],
      ['Arrondi / troncature', 'Tronquer = couper ; arrondir = regarder le chiffre suivant (0-4 / 5-9)', 'Communiquer une valeur lisible'],
      ['Sous-ensembles et SI', 'ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ ; k M G = 10³ 10⁶ 10⁹, m µ n = 10⁻³ 10⁻⁶ 10⁻⁹', 'Ranger les nombres, lire les unités']
    ],
    questions: [
      '0,454545… est-il rationnel ? Si oui, donne sa fraction.',
      'Encadre √29 à l’unité puis au dixième (5,3² = 28,09 ; 5,4² = 29,16).',
      '√17 = 4,1231056… Donne la troncature et l’arrondi au centième.',
      'Place dans le plus petit ensemble : √49 ; −2,4 ; 7/3 ; −√3.',
      'Écris 0,00052 m en notation scientifique puis avec un préfixe SI.'
    ],
    answers: [
      'Oui : période 45, 45/99 = 5/11.',
      '5 ≤ √29 ≤ 6 ; 5,3 ≤ √29 ≤ 5,4.',
      'Troncature 4,12 ; arrondi 4,12 (chiffre suivant 3).',
      'ℕ (= 7) ; D ; ℚ ; irrationnel (ℝ seulement).',
      '5,2 × 10⁻⁴ m = 520 µm (ou 0,52 mm).'
    ]
  },
  exam: {
    exos: [
      'Classe chaque nombre (rationnel ou irrationnel) et justifie : a) 5/8 ; b) 0,272727… ; d) √12 ; e) √121.',
      'a) Écris 0,375 en fraction simplifiée. b) Écris 2,08 en fraction simplifiée. d) 7/9 est-il décimal ? Justifie. e) Donne l’arrondi de 7/9 au millième.',
      'On veut connaître √23 (4,7² = 22,09 ; 4,8² = 23,04 ; 4,79² = 22,9441). a) Encadre √23 à l’unité. b) Au dixième. d) Au centième (4,80² = 23,04). e) √23 est-il rationnel ?',
      'a) Range du plus petit au plus grand ensemble : ℚ, ℕ, ℝ, ℤ, D. b) Donne le plus petit ensemble contenant −15/5. d) Celui contenant √8. e) Cite un nombre qui est dans D mais pas dans ℤ.',
      'Une bactérie mesure 0,0000025 m ; un réservoir contient 3 500 000 L. a) Écris la taille de la bactérie en notation scientifique. b) Traduis-la avec un préfixe SI. d) Écris le volume du réservoir en notation scientifique puis en ML (mégalitres). e) 1296 = 6⁴ est-elle une notation scientifique ? Pourquoi ?'
    ],
    corr: [
      'a) rationnel (quotient d’entiers) ; b) rationnel : période 27, = 27/99 = 3/11 ; d) irrationnel : 12 n’est pas un carré parfait ; e) rationnel : √121 = 11. Un point par item.',
      'a) 375/1000 = 3/8 ; b) 208/100 = 52/25 ; d) non : aucun 10ⁿ n’est divisible par 9, développement 0,777… périodique ; e) 0,778. Un point par item.',
      'a) 4 ≤ √23 ≤ 5 ; b) 4,7 ≤ √23 ≤ 4,8 ; d) 4,79 ≤ √23 ≤ 4,80 ; e) non : 23 n’est pas un carré parfait. Un point par item.',
      'a) ℕ ⊂ ℤ ⊂ D ⊂ ℚ ⊂ ℝ ; b) ℤ (= −3) ; d) ℝ seulement (irrationnel) ; e) 2,5 par exemple. Un point par item.',
      'a) 2,5 × 10⁻⁶ m ; b) 2,5 µm ; d) 3,5 × 10⁶ L = 3,5 ML ; e) non : la base doit être 10, 6⁴ est une notation exponentielle. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
