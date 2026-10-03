// UNITÉ 5 — MESURE (PE T7) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, dot, tableEl, box, arrow, seg, circle, poly, rightAngle, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — tableau de conversion des longueurs
figs.u5f1 = (() => { const { s, y } = head('Convertir des longueurs', ['Chaque colonne vaut 10 fois la colonne de droite :', '3,5 km = 3 500 m = 350 000 cm.']);
  const data = [['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], ['3', '5', '0', '0', '', '', ''], ['', '', '', '2', '4', '7', '']];
  let b = tableEl(115, y + 20, [110, 110, 110, 110, 110, 110, 110], 62, data);
  b += arrow(230, y + 230, 450, y + 230) + txt(340, y + 262, '× 10 à chaque pas vers la droite', 21, GREEN, 'bold', 'middle')
    + arrow(770, y + 290, 550, y + 290) + txt(660, y + 322, '÷ 10 à chaque pas vers la gauche', 21, PINK2, 'bold', 'middle');
  return svg(1000, y + 350, s + b); })();
// S2 — masses et durées
figs.u5f2 = (() => { const { s, y } = head('Convertir masses et durées', ['1 t = 1 000 kg ; 1 kg = 1 000 g. Pour le temps : 1 h = 60 min ; 1 min = 60 s.']);
  let b = box(70, y + 20, 180, 80, '1 t', undefined, BLUE, 28) + arrow(265, y + 60, 335, y + 60) + txt(300, y + 40, '× 1 000', 19, GREEN, 'bold', 'middle')
    + box(350, y + 20, 200, 80, '1 000 kg', '#E8F5E9', GREEN, 26) + arrow(565, y + 60, 635, y + 60) + txt(600, y + 40, '× 1 000', 19, GREEN, 'bold', 'middle')
    + box(650, y + 20, 250, 80, '1 000 000 g', '#FDE7EF', PINK2, 25);
  b += box(70, y + 140, 180, 80, '1 h', undefined, BLUE, 28) + arrow(265, y + 180, 335, y + 180) + txt(300, y + 160, '× 60', 19, OCRE, 'bold', 'middle')
    + box(350, y + 140, 200, 80, '60 min', '#FFF3E0', OCRE, 26) + arrow(565, y + 180, 635, y + 180) + txt(600, y + 160, '× 60', 19, OCRE, 'bold', 'middle')
    + box(650, y + 140, 250, 80, '3 600 s', '#FFF3E0', OCRE, 26);
  return svg(1000, y + 260, s + b); })();
// S3 — addition de grandeurs même unité
figs.u5f3 = (() => { const { s, y } = head('Calculer avec des grandeurs', ['2 m 35 cm + 1 m 80 cm : tout convertir en cm avant d’additionner.']);
  let b = box(70, y + 20, 260, 80, '2 m 35 cm', undefined, BLUE, 26) + txt(360, y + 70, '=', 30, '#222', 'bold') + box(395, y + 20, 200, 80, '235 cm', '#E8F5E9', GREEN, 26);
  b += box(70, y + 125, 260, 80, '1 m 80 cm', undefined, BLUE, 26) + txt(360, y + 175, '=', 30, '#222', 'bold') + box(395, y + 125, 200, 80, '180 cm', '#E8F5E9', GREEN, 26);
  b += seg(395, y + 225, 595, y + 225, '#222', 3)
    + box(395, y + 240, 200, 80, '415 cm', '#FDE7EF', PINK2, 26) + txt(630, y + 290, '= 4 m 15 cm', 27, PINK2, 'bold');
  return svg(1000, y + 360, s + b); })();
// S4 — problème de grandeurs (trajet)
figs.u5f4 = (() => { const { s, y } = head('Des grandeurs en situation', ['Trajet de Naina : 1,2 km à pied puis 850 m en bus.', 'Distance totale : 1 200 m + 850 m = 2 050 m = 2,05 km.']);
  const yy = y + 70;
  let b = seg(80, yy, 530, yy, BLUE, 5) + seg(530, yy, 890, yy, OCRE, 5)
    + dot(80, yy, 8, '#222') + dot(530, yy, 8, '#222') + dot(890, yy, 8, '#222')
    + txt(80, yy + 40, 'maison', 22, '#222', 'bold', 'middle') + txt(530, yy + 40, 'arrêt de bus', 22, '#222', 'bold', 'middle') + txt(890, yy + 40, 'école', 22, '#222', 'bold', 'middle')
    + txt(305, yy - 22, '1,2 km à pied', 23, BLUE, 'bold', 'middle') + txt(710, yy - 22, '850 m en bus', 23, OCRE, 'bold', 'middle')
    + txt(485, yy + 110, 'total : 1 200 + 850 = 2 050 m', 26, PINK2, 'bold', 'middle');
  return svg(1000, y + 230, s + b); })();
// S5 — périmètres des polygones
figs.u5f5 = (() => { const { s, y } = head('Les périmètres des polygones', ['Le périmètre est la longueur du contour. Carré : P = 4c ; rectangle : P = 2(L + l).']);
  const yy = y + 35;
  let b = `<rect x="90" y="${yy}" width="150" height="150" fill="white" stroke="${PINK2}" stroke-width="4"/>`
    + txt(165, yy + 190, 'P = 4 × c', 24, PINK2, 'bold', 'middle') + txt(165, yy - 12, 'c = 4 cm → P = 16 cm', 19, '#555', 'normal', 'middle');
  b += `<rect x="360" y="${yy + 25}" width="230" height="110" fill="white" stroke="${GREEN}" stroke-width="4"/>`
    + txt(475, yy + 190, 'P = 2 × (L + l)', 24, GREEN, 'bold', 'middle') + txt(475, yy - 12, 'L = 6 cm, l = 3 cm → P = 18 cm', 19, '#555', 'normal', 'middle');
  b += poly([[700, yy + 140], [940, yy + 140], [820, yy + 5]], 'white', BLUE, 4)
    + txt(820, yy + 190, 'P = somme des côtés', 23, BLUE, 'bold', 'middle');
  return svg(1000, y + 290, s + b); })();
// S6 — circonférence du cercle
figs.u5f6 = (() => { const { s, y } = head('La circonférence du cercle', ['Une roue de diamètre d déroule exactement C = π × d ≈ 3,14 × d à chaque tour.']);
  const cx = 210, cy = y + 120, r = 85;
  let b = circle(cx, cy, r, BLUE, 'none', 4) + dot(cx, cy, 6, PINK2) + seg(cx - r, cy, cx + r, cy, PINK2, 3)
    + txt(cx, cy - 14, 'd', 26, PINK2, 'bold', 'middle');
  b += seg(360, cy + r, 920, cy + r, OCRE, 5)
    + seg(360, cy + r - 12, 360, cy + r + 12, OCRE, 3) + seg(920, cy + r - 12, 920, cy + r + 12, OCRE, 3)
    + txt(640, cy + r + 38, 'C = π × d ≈ 3,14 × d', 26, OCRE, 'bold', 'middle')
    + arrow(430, cy - 10, 560, cy - 10) + txt(495, cy - 34, 'on déroule', 21, '#555', 'normal', 'middle');
  return svg(1000, y + 300, s + b); })();
// S7 — aires rectangle et carré
figs.u5f7 = (() => { const { s, y } = head('L’aire du rectangle et du carré', ['On compte les carreaux : rectangle 8 × 5 = 40 carreaux ;', 'carré 6 × 6 = 36 carreaux.']);
  const u = 34, x1 = 90, yy = y + 40;
  let b = `<rect x="${x1}" y="${yy}" width="${8 * u}" height="${5 * u}" fill="#FDE7EF" stroke="${PINK2}" stroke-width="3"/>`;
  for (let i = 1; i < 8; i++) b += seg(x1 + i * u, yy, x1 + i * u, yy + 5 * u, PINK2, 1);
  for (let j = 1; j < 5; j++) b += seg(x1, yy + j * u, x1 + 8 * u, yy + j * u, PINK2, 1);
  b += txt(x1 + 4 * u, yy + 5 * u + 35, 'A = L × l = 8 × 5 = 40', 23, PINK2, 'bold', 'middle');
  const x2 = 560;
  b += `<rect x="${x2}" y="${yy}" width="${6 * u}" height="${6 * u}" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`;
  for (let i = 1; i < 6; i++) b += seg(x2 + i * u, yy, x2 + i * u, yy + 6 * u, GREEN, 1) + seg(x2, yy + i * u, x2 + 6 * u, yy + i * u, GREEN, 1);
  b += txt(x2 + 3 * u, yy + 6 * u + 35, 'A = c × c = 6 × 6 = 36', 23, GREEN, 'bold', 'middle');
  return svg(1000, y + 330, s + b); })();
// S8 — aire triangle et parallélogramme
figs.u5f8 = (() => { const { s, y } = head('L’aire du triangle et du parallélogramme', ['Parallélogramme : A = b × h. Triangle : la moitié, A = (b × h) ÷ 2.']);
  const yy = y + 40;
  let b = poly([[110, yy + 150], [340, yy + 150], [400, yy + 20], [170, yy + 20]], '#FDE7EF', PINK2, 3.5)
    + seg(170, yy + 150, 170, yy + 20, GREEN, 2.5) + rightAngle(170, yy + 150, 16, GREEN)
    + txt(145, yy + 90, 'h', 24, GREEN, 'bold', 'middle') + txt(225, yy + 185, 'b', 24, PINK2, 'bold', 'middle')
    + txt(255, yy + 230, 'A = b × h', 24, PINK2, 'bold', 'middle');
  b += poly([[560, yy + 150], [900, yy + 150], [700, yy + 15]], '#E3F2FD', BLUE, 3.5)
    + seg(700, yy + 150, 700, yy + 15, GREEN, 2.5) + rightAngle(700, yy + 150, 16, GREEN)
    + txt(678, yy + 90, 'h', 24, GREEN, 'bold', 'middle') + txt(730, yy + 185, 'b', 24, BLUE, 'bold', 'middle')
    + txt(730, yy + 230, 'A = (b × h) ÷ 2', 24, BLUE, 'bold', 'middle');
  return svg(1000, y + 320, s + b); })();
// S9 — périmètre d'un assemblage en L
figs.u5f9 = (() => { const { s, y } = head('Le périmètre d’un assemblage', ['Figure en L : on suit le contour rouge et on additionne TOUS les côtés.']);
  const u = 42, x0 = 190, y0 = y + 30;
  const P = [[x0, y0], [x0 + 6 * u, y0], [x0 + 6 * u, y0 + 2 * u], [x0 + 2 * u, y0 + 2 * u], [x0 + 2 * u, y0 + 5 * u], [x0, y0 + 5 * u]];
  let b = poly(P, '#FFF3E0', PINK2, 5);
  b += txt(x0 + 3 * u, y0 - 14, '6 m', 22, '#333', 'bold', 'middle')
    + txt(x0 + 6 * u + 42, y0 + u + 8, '2 m', 22, '#333', 'bold', 'middle')
    + txt(x0 + 4 * u, y0 + 2 * u + 30, '4 m', 22, '#333', 'bold', 'middle')
    + txt(x0 + 2 * u + 45, y0 + 3.5 * u + 8, '3 m', 22, '#333', 'bold', 'middle')
    + txt(x0 + u, y0 + 5 * u + 32, '2 m', 22, '#333', 'bold', 'middle')
    + txt(x0 - 48, y0 + 2.5 * u + 8, '5 m', 22, '#333', 'bold', 'middle');
  b += txt(610, y0 + 150, 'P = 6 + 2 + 4 + 3 + 2 + 5', 24, PINK2, 'bold') + txt(610, y0 + 192, 'P = 22 m', 27, OCRE, 'bold');
  return svg(1000, y + 330, s + b); })();
// S10 — aire d'un assemblage (découpage)
figs.u5f10 = (() => { const { s, y } = head('L’aire d’un assemblage', ['On découpe le L en deux rectangles : A = 6 × 2 + 2 × 3 = 12 + 6 = 18 m².']);
  const u = 42, x0 = 190, y0 = y + 30;
  let b = `<rect x="${x0}" y="${y0}" width="${6 * u}" height="${2 * u}" fill="#FDE7EF" stroke="${PINK2}" stroke-width="3.5"/>`
    + `<rect x="${x0}" y="${y0 + 2 * u}" width="${2 * u}" height="${3 * u}" fill="#C8E6C9" stroke="${GREEN}" stroke-width="3.5"/>`
    + txt(x0 + 3 * u, y0 + u + 9, '6 × 2 = 12 m²', 23, PINK2, 'bold', 'middle')
    + txt(x0 + u, y0 + 3.5 * u + 9, '2 × 3', 21, GREEN, 'bold', 'middle')
    + txt(x0 + u, y0 + 4.2 * u + 9, '= 6 m²', 21, GREEN, 'bold', 'middle');
  b += box(600, y0 + 60, 320, 90, 'A = 12 + 6 = 18 m²', '#FFF3E0', OCRE, 25);
  return svg(1000, y + 330, s + b); })();
// S11 — problème terrain composé
figs.u5f11 = (() => { const { s, y } = head('Périmètres et aires en situation', ['Terrain : un rectangle 10 m × 6 m prolongé par un carré de 4 m de côté.']);
  const u = 30, x0 = 150, y0 = y + 40;
  let b = `<rect x="${x0}" y="${y0}" width="${10 * u}" height="${6 * u}" fill="#E3F2FD" stroke="${BLUE}" stroke-width="3.5"/>`
    + `<rect x="${x0 + 10 * u}" y="${y0 + 2 * u}" width="${4 * u}" height="${4 * u}" fill="#FFF3E0" stroke="${OCRE}" stroke-width="3.5"/>`
    + txt(x0 + 5 * u, y0 - 12, '10 m', 22, BLUE, 'bold', 'middle') + txt(x0 - 45, y0 + 3 * u + 8, '6 m', 22, BLUE, 'bold', 'middle')
    + txt(x0 + 12 * u, y0 + 2 * u - 12, '4 m', 22, OCRE, 'bold', 'middle')
    + txt(x0 + 5 * u, y0 + 3 * u + 9, '60 m²', 25, BLUE, 'bold', 'middle')
    + txt(x0 + 12 * u, y0 + 4 * u + 9, '16 m²', 22, OCRE, 'bold', 'middle');
  b += txt(640, y0 + 230, 'aire totale : 60 + 16 = 76 m²', 25, PINK2, 'bold', 'middle');
  return svg(1000, y + 330, s + b); })();
// S12 — 1 L = 1 dm³
figs.u5f12 = (() => { const { s, y } = head('Volume et contenance', ['Un cube de 1 dm de côté contient exactement 1 litre :', '1 L = 1 dm³ ; 1 000 L = 1 m³.']);
  const x0 = 170, y0 = y + 60, a = 150, o = 55;
  let b = `<rect x="${x0}" y="${y0}" width="${a}" height="${a}" fill="#E3F2FD" stroke="${BLUE}" stroke-width="3.5"/>`
    + poly([[x0, y0], [x0 + o, y0 - o], [x0 + a + o, y0 - o], [x0 + a, y0]], '#BBDEFB', BLUE, 3)
    + poly([[x0 + a, y0], [x0 + a + o, y0 - o], [x0 + a + o, y0 + a - o], [x0 + a, y0 + a]], '#90CAF9', BLUE, 3)
    + txt(x0 + a / 2, y0 + a + 32, '1 dm', 23, BLUE, 'bold', 'middle')
    + txt(x0 + a / 2, y0 + a / 2 + 9, '1 dm³', 26, '#0D47A1', 'bold', 'middle');
  b += txt(445, y0 + 70, '=', 36, '#222', 'bold');
  b += box(510, y0 + 20, 220, 90, '1 litre', '#FDE7EF', PINK2, 30);
  b += txt(620, y0 + 180, '1 000 L = 1 m³', 26, GREEN, 'bold', 'middle');
  return svg(1000, y + 330, s + b); })();
// S13 — tableau volumes/capacités
figs.u5f13 = (() => { const { s, y } = head('Convertir volumes et capacités', ['2,4 m³ = 2 400 dm³ = 2 400 L ; 350 mL = 0,35 L = 0,35 dm³.']);
  const data = [['m³', 'dm³ = L', 'cm³ = mL'], ['2,4', '2 400', '2 400 000'], ['0,00035', '0,35', '350']];
  let b = tableEl(170, y + 20, [220, 220, 220], 66, data);
  b += arrow(300, y + 240, 530, y + 240) + txt(415, y + 272, '× 1 000 vers la droite', 21, GREEN, 'bold', 'middle')
    + arrow(700, y + 300, 470, y + 300) + txt(585, y + 332, '÷ 1 000 vers la gauche', 21, PINK2, 'bold', 'middle');
  return svg(1000, y + 360, s + b); })();

const S = [
  {
    t: 'Convertir des longueurs à la même unité', comp: 'Mesure', theme: 'Conversion à la même unité',
    goal: 'convertir des longueurs dans une même unité à l’aide du tableau de conversion',
    mat: 'Tableau de conversion, mètre ruban, cahier, ardoises',
    revQ: 'Combien de mètres dans 1 km ?',
    revRA: '1 km = 1 000 m.',
    situation: 'Hanta dit : « J’habite à 3,5 km de l’école. » Fetra répond : « Moi, à 3 200 m. » Qui habite le plus loin ? Impossible de comparer tant que les deux distances ne sont pas dans la même unité !',
    def: 'Convertir une longueur, c’est l’exprimer dans une autre unité. Dans le tableau des longueurs (km, hm, dam, m, dm, cm, mm), chaque unité vaut 10 fois l’unité placée immédiatement à sa droite.',
    autrement: 'changer d’unité, c’est déplacer la virgule : un rang par colonne du tableau.',
    concept: 'On place le chiffre des unités de la mesure dans la colonne de son unité, un chiffre par colonne. Pour lire la mesure dans une autre unité, on place la virgule après la colonne de la nouvelle unité, en complétant par des zéros si nécessaire. Ainsi 3,5 km = 3 500 m : la virgule a avancé de trois rangs car il y a trois colonnes de km à m.',
    synthese: 'pour convertir une longueur, on utilise le tableau des unités : chaque passage de colonne multiplie ou divise par 10, et on complète par des zéros.',
    method: ['Tracer le tableau km → mm et placer le nombre, un chiffre par colonne.', 'Repérer la colonne de l’unité demandée.', 'Déplacer la virgule jusqu’à cette colonne en ajoutant des zéros si besoin.'],
    exemple: '3,5 km = 3 500 m ; 247 cm = 2,47 m ; 0,8 m = 800 mm.',
    erreur: 'Déplacer la virgule du mauvais nombre de rangs : de km à m il y a 3 colonnes, donc 3 rangs — pas 2 !',
    saistu: 'La Route nationale 7, qui relie Antananarivo à Toliara, mesure environ 925 km, soit 925 000 000 mm : le choix d’une bonne unité évite d’écrire des nombres interminables !',
    exos: ['Convertis en mètres : a) 2 km ; b) 4,7 km ; d) 350 cm ; e) 8 200 mm.',
      'Convertis : a) 5,2 m en cm ; b) 0,75 km en m ; d) 64 dm en m ; e) 3 040 m en km.',
      'Range du plus court au plus long : a) 0,5 km ; b) 495 m ; d) 51 000 cm ; e) 499 000 mm.'],
    corr: ['a) 2 000 m ; b) 4 700 m ; d) 3,5 m ; e) 8,2 m.',
      'a) 520 cm ; b) 750 m ; d) 6,4 m ; e) 3,04 km.',
      'En mètres : a) 500 ; b) 495 ; d) 510 ; e) 499. Ordre : b (495 m), e (499 m), a (500 m), d (510 m).'],
    fig: 'u5f1'
  },
  {
    t: 'Convertir des masses et des durées', comp: 'Mesure', theme: 'Conversion des grandeurs mesurables',
    goal: 'convertir des masses et des durées dans l’unité qui convient',
    mat: 'Balance, horloge, tableau de conversion, cahier',
    revQ: 'Convertis 2,3 m en cm.',
    revRA: '2,3 m = 230 cm.',
    situation: 'Une recette demande 0,25 kg de farine, mais la balance de Voahangy n’affiche que des grammes. Et le riz doit cuire 1 500 secondes… c’est long ou pas ? Convertissons !',
    def: 'Les masses se convertissent comme les longueurs : 1 t = 1 000 kg et 1 kg = 1 000 g. Les durées suivent une règle différente, en base 60 : 1 h = 60 min et 1 min = 60 s.',
    autrement: 'pour les masses on compte par 1 000 ; pour le temps on compte par 60, jamais par 10 !',
    concept: 'Le tableau des masses (t, q, kg, hg, dag, g, dg, cg, mg) fonctionne par colonnes de 10, comme celui des longueurs. Les durées, elles, n’entrent pas dans un tableau décimal : pour passer des heures aux minutes on multiplie par 60, des minutes aux secondes on multiplie encore par 60. Donc 1 h = 3 600 s. Pour revenir en arrière, on divise.',
    synthese: 'les masses se convertissent par puissances de 10 (1 kg = 1 000 g) et les durées par 60 (1 h = 60 min = 3 600 s).',
    method: ['Identifier la grandeur : masse (règle du 10) ou durée (règle du 60).', 'Pour une masse, utiliser le tableau et déplacer la virgule.', 'Pour une durée, multiplier ou diviser par 60 à chaque étape.'],
    exemple: '0,25 kg = 250 g ; 3,2 t = 3 200 kg ; 2 h 15 min = 135 min ; 1 500 s = 25 min.',
    erreur: 'Écrire 1 h 30 min = 1,3 h. Faux : 30 min = 0,5 h, donc 1 h 30 min = 1,5 h. Le temps n’est pas décimal !',
    saistu: 'Le système des 60 minutes et 60 secondes nous vient des Babyloniens, il y a près de 4 000 ans : ils comptaient en base 60, et leur héritage est toujours sur ta montre !',
    exos: ['Convertis : a) 3 kg en g ; b) 0,75 t en kg ; d) 4 500 g en kg ; e) 2 600 kg en t.',
      'Convertis en minutes : a) 2 h ; b) 1 h 45 min ; d) 3 600 s ; e) 150 s.',
      'a) Un sac de riz pèse 50 kg : combien de sacs dans 2 t ? b) Convertis 2 h 20 min en minutes. d) Convertis 420 s en minutes. e) Quelle durée est la plus longue : 95 min ou 1 h 40 min ?'],
    corr: ['a) 3 000 g ; b) 750 kg ; d) 4,5 kg ; e) 2,6 t.',
      'a) 120 min ; b) 105 min ; d) 60 min ; e) 2,5 min.',
      'a) 2 000 ÷ 50 = 40 sacs ; b) 140 min ; d) 7 min ; e) 1 h 40 min = 100 min > 95 min.'],
    fig: 'u5f2'
  },
  {
    t: 'Calculer avec des grandeurs de même unité', comp: 'Mesure', theme: 'Calcul avec les grandeurs de même unité',
    goal: 'additionner et soustraire des grandeurs après les avoir exprimées dans la même unité',
    mat: 'Mètre ruban, tableau de conversion, cahier, ardoises',
    revQ: 'Convertis 1 m 80 cm en cm.',
    revRA: '100 + 80 = 180 cm.',
    situation: 'Le menuisier assemble deux planches : l’une mesure 2 m 35 cm, l’autre 1 m 80 cm. Quelle est la longueur totale ? On ne peut pas additionner des mètres avec des centimètres sans précaution !',
    def: 'Pour additionner ou soustraire des grandeurs, il faut d’abord les exprimer dans la même unité ; on effectue ensuite l’opération sur les nombres, et le résultat garde cette unité.',
    autrement: 'même unité d’abord, calcul ensuite — jamais l’inverse.',
    concept: 'On choisit l’unité la plus commode, souvent la plus petite : 2 m 35 cm = 235 cm et 1 m 80 cm = 180 cm, d’où 235 + 180 = 415 cm = 4 m 15 cm. La même règle vaut pour les masses et les durées : 1 h 40 min + 50 min = 100 min + 50 min = 150 min = 2 h 30 min, car au-delà de 60 minutes on forme une heure.',
    synthese: 'avant toute addition ou soustraction de grandeurs, on convertit tout dans la même unité, puis on calcule et on reconvertit si besoin.',
    method: ['Convertir toutes les grandeurs dans la même unité (souvent la plus petite).', 'Effectuer l’addition ou la soustraction des nombres.', 'Exprimer le résultat dans l’unité la plus lisible.'],
    exemple: '2 m 35 cm + 1 m 80 cm = 235 + 180 = 415 cm = 4 m 15 cm ; 3 kg − 750 g = 3 000 − 750 = 2 250 g.',
    erreur: 'Additionner directement 2,35 + 1,80 « mètres-centimètres » sans vérifier : ici cela marche, mais 1 h 45 + 0 h 30 ≠ 1,75 + 0,30 ! Avec les durées, la conversion est obligatoire.',
    saistu: 'Les charpentiers malagasy mesurent encore parfois en refy, la brasse des deux bras écartés (environ 1,8 m) : avant de calculer, ils convertissent eux aussi tout dans la même unité !',
    exos: ['Calcule en cm : a) 1 m 20 cm + 95 cm ; b) 3 m − 1 m 45 cm ; d) 2 m 05 cm + 1 m 98 cm ; e) 5 m − 2 m 60 cm.',
      'Calcule : a) 1,5 kg + 800 g ; b) 3 t − 1 200 kg ; d) 2 h 45 min + 1 h 30 min ; e) 4 h − 2 h 50 min.',
      'a) Un bidon contient 5 L ; on verse 1 L 75 cL : que reste-t-il ? b) Un trajet dure 1 h 25 min puis 55 min : durée totale ? d) 2,4 m de tissu moins 85 cm : reste ? e) 1 200 g + 1,3 kg + 500 g : total en kg ?'],
    corr: ['a) 215 cm ; b) 155 cm ; d) 403 cm ; e) 240 cm.',
      'a) 2 300 g = 2,3 kg ; b) 1 800 kg = 1,8 t ; d) 4 h 15 min ; e) 1 h 10 min.',
      'a) 500 − 175 = 325 cL = 3,25 L ; b) 2 h 20 min ; d) 240 − 85 = 155 cm ; e) 3 000 g = 3 kg.'],
    fig: 'u5f3'
  },
  {
    t: 'Résoudre des problèmes de grandeurs', comp: 'Mesure', theme: 'Grandeurs mesurables en situation',
    goal: 'résoudre des problèmes de la vie courante faisant intervenir des grandeurs mesurables',
    mat: 'Énoncés de problèmes, tableau de conversion, cahier',
    revQ: 'Calcule 1 h 40 min + 50 min.',
    revRA: '100 + 50 = 150 min = 2 h 30 min.',
    situation: 'Naina va à l’école : 1,2 km à pied jusqu’à l’arrêt, puis 850 m en bus. Sa maman demande : « Quelle distance en tout ? » Les unités sont différentes… à toi de jouer !',
    def: 'Résoudre un problème de grandeurs, c’est traduire la situation en opérations sur des mesures : on identifie les données et la question, on convertit dans la même unité, on calcule, puis on répond par une phrase avec l’unité.',
    autrement: 'données → même unité → calcul → phrase réponse avec l’unité.',
    concept: 'La démarche est toujours la même, quelle que soit la grandeur : distance, masse, durée ou contenance. Pour Naina : 1,2 km = 1 200 m, puis 1 200 + 850 = 2 050 m = 2,05 km. La phrase réponse donne le résultat dans l’unité la plus parlante : « Naina parcourt 2,05 km. » Un résultat sans unité ne veut rien dire.',
    synthese: 'devant un problème de grandeurs, on convertit d’abord toutes les données dans la même unité, puis on calcule et on rédige la réponse avec son unité.',
    method: ['Souligner les données et la question ; repérer les unités.', 'Convertir toutes les données dans la même unité.', 'Calculer puis rédiger la phrase réponse avec l’unité.'],
    exemple: '1,2 km + 850 m = 1 200 m + 850 m = 2 050 m = 2,05 km.',
    erreur: 'Répondre « 2 050 » sans unité, ou additionner 1,2 + 850 = 851,2 sans convertir : les deux rendent la réponse fausse.',
    saistu: 'Les taxis-brousse affichent les distances en kilomètres, mais les compteurs des véhicules les mesurent en réalité en comptant les tours de roue — une conversion automatique de tours en mètres puis en kilomètres !',
    exos: ['Un camion charge 1,5 t de riz puis 800 kg de sucre. a) Convertis tout en kg. b) Quelle masse totale ? d) Le camion supporte 3 t : peut-il ajouter 500 kg ? e) Combien peut-il encore charger au maximum ?',
      'Un film commence à 20 h 15 et dure 1 h 50 min. a) Convertis la durée en minutes. b) À quelle heure finit-il ? d) La publicité ajoute 10 min : nouvelle heure de fin ? e) Combien de temps entre 20 h 15 et 23 h ?',
      'Une bouteille contient 1,5 L d’eau. a) Convertis en cL. b) On boit 60 cL : que reste-t-il ? d) Combien de verres de 15 cL dans le reste ? e) Combien de bouteilles pour servir 36 verres de 15 cL ?'],
    corr: ['a) 1 500 kg et 800 kg ; b) 2 300 kg ; d) 2 300 + 500 = 2 800 kg ≤ 3 000 kg : oui ; e) 3 000 − 2 300 = 700 kg.',
      'a) 110 min ; b) 22 h 05 ; d) 22 h 15 ; e) 2 h 45 min.',
      'a) 150 cL ; b) 90 cL ; d) 90 ÷ 15 = 6 verres ; e) 36 × 15 = 540 cL = 5,4 L → 4 bouteilles (6 L).'],
    fig: 'u5f4'
  },
  {
    t: 'Calculer le périmètre des polygones', comp: 'Mesure', theme: 'Périmètres des figures géométriques',
    goal: 'calculer le périmètre d’un polygone en utilisant les formules du carré et du rectangle',
    mat: 'Règle, mètre ruban, figures découpées, cahier',
    revQ: 'Un carré a un côté de 7 cm. Que mesure son tour complet ?',
    revRA: '7 × 4 = 28 cm.',
    situation: 'Le directeur veut entourer le potager de l’école avec du grillage. Le potager est un rectangle de 6 m sur 3 m. Quelle longueur de grillage acheter ? C’est une question de périmètre !',
    def: 'Le périmètre d’un polygone est la longueur totale de son contour : c’est la somme des longueurs de tous ses côtés. Pour le carré de côté c : P = 4 × c ; pour le rectangle de longueur L et de largeur l : P = 2 × (L + l).',
    autrement: 'le périmètre, c’est la distance parcourue si l’on fait le tour complet de la figure en marchant sur ses bords.',
    concept: 'Un périmètre est une longueur : il s’exprime en m, cm, km… Les formules ne sont que des raccourcis de l’addition des côtés : le carré a 4 côtés égaux, d’où 4c ; le rectangle a deux longueurs et deux largeurs, d’où 2L + 2l = 2(L + l). Pour un polygone quelconque, on additionne simplement tous les côtés, après les avoir mis dans la même unité.',
    synthese: 'le périmètre d’un polygone est la somme de tous ses côtés : P = 4c pour le carré, P = 2(L + l) pour le rectangle.',
    method: ['Identifier la figure et mesurer (ou lire) ses côtés dans la même unité.', 'Appliquer la formule du carré ou du rectangle, ou additionner tous les côtés.', 'Écrire le résultat avec son unité de longueur.'],
    exemple: 'Potager 6 m × 3 m : P = 2 × (6 + 3) = 18 m de grillage.',
    erreur: 'Confondre périmètre et aire : le périmètre du rectangle 6 × 3 est 18 m (contour), pas 18 m² ! L’aire, elle, vaudrait 6 × 3 = 18 m².',
    saistu: 'Le mot « périmètre » vient du grec peri (autour) et metron (mesure) : mesurer autour. Les arpenteurs de l’Égypte ancienne refaisaient déjà le tour des champs à la corde après chaque crue du Nil !',
    exos: ['Calcule le périmètre : a) carré de côté 9 cm ; b) rectangle 12 m × 7 m ; d) carré de côté 2,5 dm ; e) rectangle 8,4 cm × 5,6 cm.',
      'a) Un triangle a des côtés de 5 cm, 7 cm et 9 cm : périmètre ? b) Un losange a un côté de 6 cm : périmètre ? d) Le périmètre d’un carré est 36 cm : quel est son côté ? e) Un rectangle a un périmètre de 30 m et une longueur de 9 m : quelle est sa largeur ?',
      'Le potager rectangulaire mesure 6 m sur 3 m. a) Calcule son périmètre. b) Le grillage coûte 8 000 Ar le mètre : quel budget ? d) On laisse une porte de 1 m sans grillage : nouvelle longueur ? e) Nouveau budget ?'],
    corr: ['a) 36 cm ; b) 38 m ; d) 10 dm ; e) 28 cm.',
      'a) 21 cm ; b) 24 cm ; d) 36 ÷ 4 = 9 cm ; e) 30 ÷ 2 − 9 = 6 m.',
      'a) 18 m ; b) 144 000 Ar ; d) 17 m ; e) 136 000 Ar.'],
    fig: 'u5f5'
  },
  {
    t: 'Établir la circonférence du cercle', comp: 'Mesure', theme: 'Formule C = π × d',
    goal: 'calculer la circonférence d’un cercle avec la formule C = π × d',
    mat: 'Objets ronds, ficelle, règle, compas, cahier',
    revQ: 'Que mesure le diamètre d’un cercle de rayon 4 cm ?',
    revRA: 'd = 2 × r = 8 cm.',
    situation: 'Entoure une boîte ronde avec une ficelle, puis mesure la ficelle et le diamètre de la boîte. Divise la première mesure par la seconde : environ 3,14… Recommence avec une assiette : encore 3,14 ! Ce nombre mystérieux a un nom.',
    def: 'La circonférence d’un cercle est la longueur de son contour. Elle est proportionnelle au diamètre : C = π × d = 2 × π × r, où π (pi) est un nombre constant valant environ 3,14.',
    autrement: 'le tour d’un cercle vaut toujours un peu plus de 3 fois son diamètre.',
    concept: 'Quel que soit le cercle — pièce de monnaie ou stade —, le rapport circonférence ÷ diamètre donne toujours le même nombre π ≈ 3,14159… C’est pourquoi une roue de diamètre d avance de π × d à chaque tour complet. Comme d = 2r, on écrit aussi C = 2πr. Dans les calculs du collège, on prend π ≈ 3,14.',
    synthese: 'la circonférence d’un cercle se calcule par C = π × d ≈ 3,14 × d, et π est le même nombre pour tous les cercles.',
    method: ['Repérer le diamètre d (ou le rayon r, puis d = 2r).', 'Multiplier : C = 3,14 × d.', 'Donner le résultat avec l’unité de longueur, en précisant « environ ».'],
    exemple: 'Roue de diamètre 60 cm : C ≈ 3,14 × 60 = 188,4 cm ≈ 1,88 m par tour.',
    erreur: 'Multiplier π par le rayon au lieu du diamètre : C = π × d, ou bien 2 × π × r — mais jamais π × r tout seul !',
    saistu: 'Les décimales de π ne s’arrêtent jamais et ne se répètent jamais : les ordinateurs en ont calculé plus de 100 000 milliards ! Pour tous les calculs courants, 3,14 suffit largement.',
    exos: ['Calcule la circonférence (π ≈ 3,14) : a) d = 10 cm ; b) d = 25 cm ; d) r = 5 cm ; e) r = 3,5 m.',
      'a) Une roue de vélo a un diamètre de 70 cm : quelle distance par tour ? b) Et en 100 tours ? d) Un puits circulaire a un rayon de 1,2 m : quel est son tour ? e) Un fil de 31,4 cm forme un cercle : quel est son diamètre ?',
      'Le rond-point du village a un diamètre de 20 m. a) Calcule sa circonférence. b) Un piéton en fait 3 fois le tour : distance parcourue ? d) Convertis en km. e) Combien de tours pour dépasser 1 km ?'],
    corr: ['a) 31,4 cm ; b) 78,5 cm ; d) 31,4 cm ; e) 21,98 m.',
      'a) 219,8 cm ≈ 2,20 m ; b) 219,8 m ; d) 7,536 m ; e) 31,4 ÷ 3,14 = 10 cm.',
      'a) 62,8 m ; b) 188,4 m ; d) 0,1884 km ; e) 1 000 ÷ 62,8 ≈ 15,9 → 16 tours.'],
    fig: 'u5f6'
  },
  {
    t: 'Calculer l’aire du rectangle et du carré', comp: 'Mesure', theme: 'Aires des figures géométriques',
    goal: 'calculer l’aire d’un rectangle et d’un carré avec les formules A = L × l et A = c × c',
    mat: 'Quadrillages, figures découpées, règle, cahier',
    revQ: 'Calcule le périmètre d’un rectangle 8 cm × 5 cm.',
    revRA: '2 × (8 + 5) = 26 cm.',
    situation: 'Pour carreler le sol de la salle, le maçon doit savoir combien de carreaux de 1 dm² acheter. La salle est un rectangle de 8 dm sur 5 dm (en maquette) : comptons les carreaux !',
    def: 'L’aire d’une figure est la mesure de sa surface, exprimée en unités d’aire (cm², m², km²…). Pour le rectangle : A = L × l ; pour le carré : A = c × c = c².',
    autrement: 'l’aire, c’est le nombre de carreaux unités qu’il faut pour recouvrir exactement la figure.',
    concept: 'Sur un quadrillage, le rectangle de 8 carreaux sur 5 contient 8 × 5 = 40 carreaux : la formule A = L × l ne fait que compter les carreaux par rangées. Attention aux unités : si les côtés sont en cm, l’aire est en cm². Et 1 m² = 100 dm² = 10 000 cm² : chaque passage d’unité d’aire multiplie par 100, pas par 10 !',
    synthese: 'l’aire du rectangle vaut longueur × largeur, celle du carré côté × côté, et elle s’exprime en unités carrées (m², cm²…).',
    method: ['Vérifier que les deux dimensions sont dans la même unité.', 'Multiplier : L × l pour le rectangle, c × c pour le carré.', 'Donner le résultat en unité carrée (cm², m²…).'],
    exemple: 'Salle 8 dm × 5 dm : A = 40 dm² → 40 carreaux de 1 dm². Carré de 6 cm : A = 36 cm².',
    erreur: 'Mélanger les unités : un rectangle de 2 m sur 50 cm a une aire de 2 × 0,5 = 1 m², pas 2 × 50 = 100 !',
    saistu: 'Les rizières se mesurent souvent en ares à Madagascar : 1 are = 100 m², le carré de 10 m sur 10 m. Et 1 hectare = 100 ares = 10 000 m², presque deux terrains de football !',
    exos: ['Calcule l’aire : a) rectangle 8 cm × 5 cm ; b) carré de côté 6 cm ; d) rectangle 12 m × 4,5 m ; e) carré de côté 0,9 dm.',
      'a) Une salle fait 7 m × 6 m : son aire ? b) Combien de carreaux de 1 m² ? d) Un carré a une aire de 49 cm² : quel est son côté ? e) Un rectangle a une aire de 54 m² et une longueur de 9 m : sa largeur ?',
      'Un champ rectangulaire mesure 30 m × 20 m. a) Calcule son aire. b) Convertis en ares (1 are = 100 m²). d) Le riz donne 0,5 kg par m² : quelle récolte ? e) Compare : son périmètre vaut-il aussi 600 ?'],
    corr: ['a) 40 cm² ; b) 36 cm² ; d) 54 m² ; e) 0,81 dm².',
      'a) 42 m² ; b) 42 carreaux ; d) 7 cm car 7 × 7 = 49 ; e) 54 ÷ 9 = 6 m.',
      'a) 600 m² ; b) 6 ares ; d) 300 kg ; e) non : P = 2 × (30 + 20) = 100 m — aire et périmètre sont deux grandeurs différentes.'],
    fig: 'u5f7'
  },
  {
    t: 'Calculer l’aire du triangle et du parallélogramme', comp: 'Mesure', theme: 'Aires des figures géométriques',
    goal: 'calculer l’aire d’un triangle et d’un parallélogramme à partir de la base et de la hauteur',
    mat: 'Figures en papier à découper, ciseaux, règle, cahier',
    revQ: 'Calcule l’aire d’un rectangle 9 cm × 4 cm.',
    revRA: '9 × 4 = 36 cm².',
    situation: 'Découpe un parallélogramme en papier, puis coupe le triangle qui dépasse à gauche et recolle-le à droite : surprise, tu obtiens un rectangle ! Et si tu coupes un rectangle en deux par sa diagonale, tu obtiens deux triangles identiques.',
    def: 'L’aire du parallélogramme de base b et de hauteur h est A = b × h. L’aire du triangle est la moitié de celle du parallélogramme de mêmes base et hauteur : A = (b × h) ÷ 2. La hauteur est toujours perpendiculaire à la base.',
    autrement: 'parallélogramme : comme un rectangle penché, base fois hauteur ; triangle : la moitié.',
    concept: 'Le découpage-recollage montre que le parallélogramme a la même aire que le rectangle de côtés b et h : d’où A = b × h. La diagonale d’un parallélogramme le partage en deux triangles superposables, donc chaque triangle vaut (b × h) ÷ 2. Attention : h est la hauteur perpendiculaire, pas le côté penché !',
    synthese: 'A = b × h pour le parallélogramme et A = (b × h) ÷ 2 pour le triangle, où h est la hauteur perpendiculaire à la base b.',
    method: ['Repérer la base b et la hauteur h perpendiculaire à cette base.', 'Vérifier que b et h sont dans la même unité.', 'Calculer b × h, puis diviser par 2 seulement pour le triangle.'],
    exemple: 'Parallélogramme : b = 8 cm, h = 5 cm → A = 40 cm². Triangle : b = 8 cm, h = 5 cm → A = 20 cm².',
    erreur: 'Prendre le côté oblique comme hauteur : la hauteur se mesure perpendiculairement à la base, c’est la plus courte distance !',
    saistu: 'Les voiles traditionnelles des boutres et des lakana à balancier sont souvent triangulaires : les constructeurs calculent leur aire en b × h ÷ 2 pour connaître la surface de tissu à coudre.',
    exos: ['Calcule l’aire du parallélogramme : a) b = 6 cm, h = 4 cm ; b) b = 10 m, h = 7 m ; d) b = 12 cm, h = 2,5 cm ; e) b = 9 dm, h = 9 dm.',
      'Calcule l’aire du triangle : a) b = 6 cm, h = 4 cm ; b) b = 10 m, h = 7 m ; d) b = 15 cm, h = 8 cm ; e) b = 7 m, h = 4,2 m.',
      'a) Un triangle a une aire de 24 cm² et une base de 8 cm : quelle est sa hauteur ? b) Un parallélogramme a une aire de 63 m² et une hauteur de 7 m : quelle base ? d) Compare les aires : triangle b = 12, h = 6 et parallélogramme b = 6, h = 6. e) Une voile triangulaire a b = 3 m et h = 4 m : quelle surface de tissu ?'],
    corr: ['a) 24 cm² ; b) 70 m² ; d) 30 cm² ; e) 81 dm².',
      'a) 12 cm² ; b) 35 m² ; d) 60 cm² ; e) 14,7 m².',
      'a) 24 × 2 ÷ 8 = 6 cm ; b) 63 ÷ 7 = 9 m ; d) 36 cm² chacun : égales ! e) 3 × 4 ÷ 2 = 6 m².'],
    fig: 'u5f8'
  },
  {
    t: 'Calculer le périmètre d’un assemblage', comp: 'Mesure', theme: 'Périmètres d’un assemblage de figures',
    goal: 'calculer le périmètre d’un assemblage de figures en suivant son contour',
    mat: 'Figures en L et en T sur quadrillage, règle, cahier',
    revQ: 'Périmètre d’un rectangle 6 m × 2 m ?',
    revRA: '2 × (6 + 2) = 16 m.',
    situation: 'La cour de Rasoa a une forme de L. Pour la clôturer, il faut connaître la longueur du contour. Certains côtés ne sont pas écrits sur le plan… mais on peut les retrouver !',
    def: 'Le périmètre d’un assemblage de figures est la longueur de son contour extérieur : on additionne uniquement les côtés qui bordent l’extérieur, jamais les traits de découpage intérieurs.',
    autrement: 'on fait le tour de la figure avec le doigt et on additionne tout ce qu’on longe — rien d’autre.',
    concept: 'Dans une figure en L, certains côtés manquent souvent sur le plan : on les retrouve par addition ou soustraction des côtés parallèles. Par exemple, si la largeur totale est 6 m et qu’un morceau mesure 2 m, le côté manquant mesure 6 − 2 = 4 m. Une fois tous les côtés connus, le périmètre est leur somme : les traits intérieurs de découpage ne comptent pas.',
    synthese: 'pour le périmètre d’un assemblage, on reconstitue les côtés manquants puis on additionne tous les côtés du contour extérieur.',
    method: ['Suivre le contour au doigt et lister tous les côtés.', 'Retrouver les côtés manquants avec les côtés parallèles (additions, soustractions).', 'Additionner toutes les longueurs du contour, dans la même unité.'],
    exemple: 'Figure en L : 6 + 2 + 4 + 3 + 2 + 5 = 22 m de contour.',
    erreur: 'Compter les traits intérieurs du découpage dans le périmètre : seul le bord extérieur compte !',
    saistu: 'Vu du ciel, le contour des rizières en terrasses dessine d’immenses assemblages : les topographes calculent leur périmètre exactement comme toi, côté après côté, en reconstituant ceux qui manquent.',
    exos: ['Une figure en L a pour côtés 6 m, 2 m, 4 m, 3 m, 2 m et 5 m. a) Vérifie : 6 = 4 + 2 ; b) vérifie : 5 = 2 + 3 ; d) calcule le périmètre ; e) le grillage coûte 5 000 Ar/m : quel budget ?',
      'Une figure en T est formée de côtés 8, 2, 3, 4, 2, 4, 3, 2 (en cm). a) Combien de côtés a ce contour ? b) Calcule le périmètre. d) Convertis en mm. e) Un fil de 30 cm suffit-il pour en faire le tour ?',
      'Deux carrés de côté 4 cm sont collés côte à côte. a) Quelle figure obtient-on ? b) Donne ses dimensions. d) Calcule son périmètre. e) Compare avec la somme des périmètres des deux carrés : explique la différence.'],
    corr: ['a) 4 + 2 = 6 ✓ ; b) 2 + 3 = 5 ✓ ; d) 22 m ; e) 110 000 Ar.',
      'a) 8 côtés ; b) 28 cm ; d) 280 mm ; e) oui, 30 > 28.',
      'a) un rectangle ; b) 8 cm × 4 cm ; d) 24 cm ; e) 2 × 16 = 32 cm > 24 cm : les deux côtés collés (2 × 4 cm) ont disparu du contour.'],
    fig: 'u5f9'
  },
  {
    t: 'Calculer l’aire d’un assemblage', comp: 'Mesure', theme: 'Aires d’un assemblage de figures',
    goal: 'calculer l’aire d’un assemblage par découpage ou par soustraction',
    mat: 'Figures composées sur quadrillage, ciseaux, règle, cahier',
    revQ: 'Aire d’un rectangle 6 m × 2 m ?',
    revRA: '6 × 2 = 12 m².',
    situation: 'Pour semer du gazon dans la cour en L de Rasoa, il faut connaître sa surface. Le L n’a pas de formule… mais on peut le découper en deux rectangles !',
    def: 'Pour calculer l’aire d’un assemblage, on le découpe en figures simples (rectangles, carrés, triangles) et on additionne leurs aires ; ou bien on complète la figure en une figure simple et on soustrait la partie ajoutée.',
    autrement: 'découper et additionner, ou compléter et soustraire : deux chemins pour la même aire.',
    concept: 'Le L se découpe en un rectangle 6 × 2 et un rectangle 2 × 3 : A = 12 + 6 = 18 m². On peut aussi voir le L comme un grand rectangle 6 × 5 auquel on a enlevé un coin 4 × 3 : A = 30 − 12 = 18 m². Les deux méthodes donnent toujours le même résultat : l’aire ne dépend pas du découpage choisi.',
    synthese: 'l’aire d’un assemblage s’obtient en additionnant les aires des morceaux, ou en soustrayant la partie manquante d’une figure complète.',
    method: ['Découper mentalement la figure en rectangles, carrés ou triangles.', 'Calculer l’aire de chaque morceau avec sa formule.', 'Additionner les aires (ou soustraire la partie enlevée) et vérifier par l’autre méthode.'],
    exemple: 'L : 6 × 2 + 2 × 3 = 18 m², ou bien 6 × 5 − 4 × 3 = 30 − 12 = 18 m².',
    erreur: 'Multiplier tous les nombres de l’énoncé entre eux : il faut d’abord DÉCOUPER la figure, chaque morceau a sa propre formule.',
    saistu: 'Les architectes calculent la surface des maisons exactement ainsi : chaque pièce est un rectangle, et la surface habitable est la somme des aires des pièces — la méthode du découpage est leur outil quotidien.',
    exos: ['Le L est formé d’un rectangle 6 m × 2 m et d’un rectangle 2 m × 3 m. a) Aire du premier ? b) Aire du second ? d) Aire totale ? e) Vérifie par soustraction : 6 × 5 − 4 × 3.',
      'Une figure est un carré de 5 cm surmonté d’un triangle de base 5 cm et de hauteur 4 cm. a) Aire du carré ? b) Aire du triangle ? d) Aire totale ? e) Cette figure ressemble à quoi ?',
      'Un cadre rectangulaire extérieur mesure 10 cm × 8 cm ; l’ouverture intérieure mesure 6 cm × 4 cm. a) Aire du grand rectangle ? b) Aire de l’ouverture ? d) Aire du cadre (la bordure) ? e) Quelle méthode as-tu utilisée ?'],
    corr: ['a) 12 m² ; b) 6 m² ; d) 18 m² ; e) 30 − 12 = 18 m² ✓.',
      'a) 25 cm² ; b) 5 × 4 ÷ 2 = 10 cm² ; d) 35 cm² ; e) à une maison avec son toit.',
      'a) 80 cm² ; b) 24 cm² ; d) 80 − 24 = 56 cm² ; e) la soustraction : figure complète moins la partie vide.'],
    fig: 'u5f10'
  },
  {
    t: 'Résoudre des problèmes de périmètres et d’aires', comp: 'Mesure', theme: 'Situations problèmes',
    goal: 'mobiliser périmètres et aires pour résoudre des problèmes de la vie courante',
    mat: 'Énoncés, plans de terrains, règle, cahier',
    revQ: 'Aire d’un carré de côté 4 m ? Et son périmètre ?',
    revRA: 'A = 16 m² ; P = 16 m. Mêmes nombres, grandeurs différentes !',
    situation: 'La famille de Hery achète un terrain : un rectangle de 10 m sur 6 m prolongé par un carré de 4 m de côté. Il faut le clôturer ET le recouvrir de gazon. Deux questions, deux grandeurs !',
    def: 'Dans un problème, le périmètre répond aux questions de contour (clôturer, entourer, encadrer) et l’aire aux questions de surface (couvrir, peindre, semer, carreler). Choisir la bonne grandeur est la première étape de la résolution.',
    autrement: 'clôture → périmètre ; peinture ou gazon → aire. Le verbe de l’énoncé dit quelle grandeur choisir.',
    concept: 'Un même terrain a un périmètre ET une aire, qui ne varient pas ensemble : deux terrains de même périmètre peuvent avoir des aires très différentes. Pour le terrain de Hery : l’aire se calcule par découpage (60 + 16 = 76 m²), le contour en suivant le bord extérieur. On répond toujours par deux phrases séparées, chacune avec sa propre unité : m pour le contour, m² pour la surface.',
    synthese: 'avant de calculer, on identifie la grandeur demandée : périmètre (en m) pour le contour, aire (en m²) pour la surface.',
    method: ['Lire la question et repérer le verbe : entourer → périmètre ; couvrir → aire.', 'Découper la figure si nécessaire et calculer la grandeur choisie.', 'Rédiger la réponse avec la bonne unité (m ou m²).'],
    exemple: 'Terrain de Hery : aire = 10 × 6 + 4 × 4 = 76 m² ; le gazon à 2 000 Ar/m² coûte 152 000 Ar.',
    erreur: 'Donner une aire en mètres ou un périmètre en m² : l’unité trahit immédiatement l’erreur de grandeur.',
    saistu: 'Avec 100 m de clôture, le rectangle qui enferme la plus grande aire est… le carré de 25 m de côté : 625 m². Un rectangle tout étiré de 45 m × 5 m n’enferme que 225 m² avec la même clôture !',
    exos: ['Le terrain est un rectangle 10 m × 6 m plus un carré de 4 m. a) Aire du rectangle ? b) Aire du carré ? d) Aire totale ? e) Le gazon coûte 2 000 Ar/m² : quel budget ?',
      'Une salle de classe mesure 8 m × 6 m. a) On peint une frise tout autour au niveau du sol : quelle longueur ? b) On carrelle le sol avec des dalles de 1 m² : combien de dalles ? d) Chaque dalle coûte 12 000 Ar : budget ? e) La frise coûte 3 000 Ar/m : budget ?',
      'Un jardin carré a 12 m de côté ; une allée rectangulaire de 12 m × 2 m le traverse. a) Aire du jardin entier ? b) Aire de l’allée ? d) Aire cultivable ? e) Faut-il un périmètre ou une aire pour acheter la terre végétale ? Pourquoi ?'],
    corr: ['a) 60 m² ; b) 16 m² ; d) 76 m² ; e) 152 000 Ar.',
      'a) P = 28 m ; b) 48 dalles ; d) 576 000 Ar ; e) 84 000 Ar.',
      'a) 144 m² ; b) 24 m² ; d) 120 m² ; e) une aire : on recouvre une surface.'],
    fig: 'u5f11'
  },
  {
    t: 'Relier unités de volume et de contenance', comp: 'Mesure', theme: 'Volumes et contenances : 1 L = 1 dm³',
    goal: 'relier les unités de volume et de contenance : 1 L = 1 dm³ et 1 000 L = 1 m³',
    mat: 'Cube de 1 dm d’arête, bouteille de 1 L, eau, cahier',
    revQ: 'Combien de cm dans 1 dm ? Et de dm dans 1 m ?',
    revRA: '1 dm = 10 cm ; 1 m = 10 dm.',
    situation: 'Fabrique un cube de 1 dm d’arête en carton, rends-le étanche et verse-y une bouteille d’un litre d’eau : elle le remplit exactement ! Le litre et le décimètre cube sont la même quantité.',
    def: 'Le volume mesure la place occupée dans l’espace, en m³, dm³, cm³. La contenance mesure ce qu’un récipient peut contenir, en L, cL, mL. Les deux systèmes sont reliés par : 1 L = 1 dm³, 1 mL = 1 cm³ et 1 000 L = 1 m³.',
    autrement: 'un litre, c’est exactement le contenu d’un cube de 1 dm de côté ; un millilitre, celui d’un petit cube de 1 cm.',
    concept: 'Les unités de volume vont de 1 000 en 1 000 : 1 m³ = 1 000 dm³ et 1 dm³ = 1 000 cm³, car un cube de 10 sur 10 sur 10 contient 10 × 10 × 10 = 1 000 petits cubes. Le pont entre les deux familles passe par le litre : réservoir de 2 m³ = 2 000 L ; seringue de 5 mL = 5 cm³.',
    synthese: '1 L = 1 dm³, 1 mL = 1 cm³ et 1 m³ = 1 000 L : volumes et contenances mesurent la même chose avec deux familles d’unités.',
    method: ['Repérer la famille de chaque unité : volume (m³, dm³, cm³) ou contenance (L, cL, mL).', 'Passer d’une famille à l’autre avec 1 L = 1 dm³ ou 1 mL = 1 cm³.', 'Terminer la conversion dans la famille d’arrivée.'],
    exemple: 'Réservoir de 2 m³ : 2 m³ = 2 000 dm³ = 2 000 L. Dose de sirop de 5 mL = 5 cm³.',
    erreur: 'Croire que 1 m³ = 100 L ou que les volumes vont de 10 en 10 : les unités cubiques vont de 1 000 en 1 000 !',
    saistu: 'Un m³ d’eau pèse une tonne ! C’est pourquoi les châteaux d’eau sont si massifs : un réservoir de 50 m³ supporte 50 tonnes d’eau, soit le poids d’environ 10 camions.',
    exos: ['Complète : a) 1 L = … dm³ ; b) 1 m³ = … L ; d) 1 mL = … cm³ ; e) 1 dm³ = … cm³.',
      'Convertis : a) 3 m³ en L ; b) 2 500 L en m³ ; d) 750 cm³ en L ; e) 0,6 L en cm³.',
      'a) Un seau contient 10 L : combien de dm³ ? b) Une citerne de 4 m³ : combien de seaux de 10 L ? d) Un verre de 25 cL : combien de cm³ ? e) Une dose de 5 mL : combien de doses dans 0,5 L ?'],
    corr: ['a) 1 ; b) 1 000 ; d) 1 ; e) 1 000.',
      'a) 3 000 L ; b) 2,5 m³ ; d) 0,75 L ; e) 600 cm³.',
      'a) 10 dm³ ; b) 4 000 ÷ 10 = 400 seaux ; d) 250 cm³ ; e) 500 ÷ 5 = 100 doses.'],
    fig: 'u5f12'
  },
  {
    t: 'Convertir volumes et capacités', comp: 'Mesure', theme: 'Conversion volumes/contenances',
    goal: 'convertir des volumes et des capacités d’une unité à l’autre avec le tableau',
    mat: 'Tableau de conversion des volumes, cahier, ardoises',
    revQ: 'Complète : 1 m³ = … L.',
    revRA: '1 m³ = 1 000 L.',
    situation: 'La facture de la JIRAMA indique 12 m³ d’eau consommés ce mois-ci. Combien de bidons de 20 L cela représente-t-il ? Il faut convertir des m³ en litres !',
    def: 'Dans le tableau des volumes (m³, dm³, cm³), chaque unité vaut 1 000 fois la suivante : chaque colonne de volume contient donc trois chiffres. Les litres s’insèrent dans ce tableau grâce à 1 L = 1 dm³.',
    autrement: 'volume : trois rangs de virgule par colonne ; on accroche les litres sur la colonne des dm³.',
    concept: 'Pour convertir, on écrit le nombre dans le tableau en donnant trois chiffres à chaque colonne, puis on déplace la virgule de trois rangs par colonne : 2,4 m³ = 2 400 dm³ = 2 400 L, et 350 mL = 350 cm³ = 0,35 dm³ = 0,35 L. Dans le sens inverse, 12 m³ = 12 000 L, soit 12 000 ÷ 20 = 600 bidons de 20 L.',
    synthese: 'pour convertir des volumes, on déplace la virgule de trois rangs par colonne du tableau, et on passe aux litres par 1 L = 1 dm³.',
    method: ['Écrire le nombre dans le tableau des volumes, trois chiffres par colonne.', 'Déplacer la virgule de trois rangs par colonne jusqu’à l’unité demandée.', 'Utiliser 1 L = 1 dm³ ou 1 mL = 1 cm³ pour passer aux contenances.'],
    exemple: '12 m³ = 12 000 L ; 2,4 m³ = 2 400 L ; 350 mL = 0,35 L ; 0,75 dm³ = 750 cm³.',
    erreur: 'Déplacer la virgule d’un seul rang par colonne comme pour les longueurs : pour les volumes, c’est TROIS rangs par colonne !',
    saistu: 'Les compteurs d’eau du monde entier comptent en m³, mais les bouteilles s’affichent en litres : chaque facture d’eau est donc un exercice de conversion que des millions de familles font sans le savoir !',
    exos: ['Convertis en litres : a) 5 m³ ; b) 0,8 m³ ; d) 3 500 cm³ ; e) 12 500 mL.',
      'Convertis : a) 7 200 L en m³ ; b) 0,25 L en cm³ ; d) 4,5 dm³ en mL ; e) 950 000 cm³ en m³.',
      'La facture indique 12 m³. a) Convertis en litres. b) Combien de bidons de 20 L ? d) La famille utilise 400 L par jour : combien de jours ? e) Le m³ coûte 1 800 Ar : quel montant ?'],
    corr: ['a) 5 000 L ; b) 800 L ; d) 3,5 L ; e) 12,5 L.',
      'a) 7,2 m³ ; b) 250 cm³ ; d) 4 500 mL ; e) 0,95 m³.',
      'a) 12 000 L ; b) 600 bidons ; d) 30 jours ; e) 21 600 Ar.'],
    fig: 'u5f13'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Mesure',
  rag: 'utiliser la mesure pour décrire et comparer des phénomènes du monde réel.',
  valeurs: 'rigueur et sens de responsabilité',
  sessions: S,
  revision: {
    table: [
      ['Conversions', 'Longueurs ×10 par colonne ; masses ×1 000 ; durées ×60', 'Convertir et comparer des grandeurs'],
      ['Calcul de grandeurs', 'Même unité obligatoire avant d’opérer', 'Additionner, soustraire, résoudre des problèmes'],
      ['Périmètres', 'P = 4c ; P = 2(L + l) ; somme des côtés ; C = πd', 'Calculer un contour, même composé'],
      ['Aires', 'A = L × l ; c² ; b × h ; (b × h) ÷ 2', 'Calculer une surface, même composée'],
      ['Assemblages', 'Découper et additionner, ou compléter et soustraire', 'Traiter les figures en L, en T, à trou'],
      ['Volumes', '1 L = 1 dm³ ; 1 m³ = 1 000 L ; trois rangs par colonne', 'Relier volumes et contenances']
    ],
    questions: [
      'Convertis 4,2 km en m, puis 380 cm en m.',
      'Calcule 2 h 35 min + 1 h 40 min.',
      'Calcule le périmètre et l’aire d’un rectangle 9 m × 4 m.',
      'Un cercle a un diamètre de 30 cm : sa circonférence (π ≈ 3,14) ?',
      'Convertis 3,5 m³ en litres.'
    ],
    answers: [
      '4 200 m ; 3,8 m.',
      '155 + 100 = 255 min = 4 h 15 min.',
      'P = 26 m ; A = 36 m².',
      'C ≈ 3,14 × 30 = 94,2 cm.',
      '3 500 L.'
    ]
  },
  exam: {
    exos: [
      'Convertis : a) 6,3 km en m ; b) 2 450 g en kg ; d) 1 h 55 min en minutes ; e) 0,4 m³ en L.',
      'Calcule : a) 3 m 45 cm + 2 m 80 cm (en cm) ; b) 5 kg − 1 200 g ; d) 2 h 15 min + 3 h 50 min ; e) 2 L − 35 cL.',
      'Un rectangle mesure 14 m sur 6 m. a) Calcule son périmètre. b) Calcule son aire. d) Un carré a le même périmètre : quel est son côté ? e) Calcule l’aire de ce carré et compare.',
      'a) Circonférence d’un cercle de diamètre 50 cm (π ≈ 3,14) ? b) Aire d’un triangle de base 12 cm et de hauteur 7 cm ? d) Aire d’un parallélogramme b = 9 m, h = 6 m ? e) Une figure en L est faite d’un rectangle 8 × 3 et d’un rectangle 3 × 4 : aire totale ?',
      'Une citerne contient 2,5 m³ d’eau. a) Convertis en litres. b) On remplit des bidons de 25 L : combien ? d) La famille consomme 250 L par jour : combien de jours ? e) 1 m³ pèse 1 t : quelle masse d’eau dans la citerne pleine ?'
    ],
    corr: [
      'a) 6 300 m ; b) 2,45 kg ; d) 115 min ; e) 400 L. Un point par réponse.',
      'a) 345 + 280 = 625 cm ; b) 3 800 g = 3,8 kg ; d) 6 h 05 min ; e) 200 − 35 = 165 cL = 1,65 L. Un point par réponse.',
      'a) P = 40 m ; b) A = 84 m² ; d) 40 ÷ 4 = 10 m ; e) 100 m² > 84 m² : à périmètre égal, le carré a la plus grande aire. Un point par item.',
      'a) 157 cm ; b) 42 cm² ; d) 54 m² ; e) 24 + 12 = 36 unités d’aire. Un point par réponse.',
      'a) 2 500 L ; b) 100 bidons ; d) 10 jours ; e) 2,5 t. Un point par réponse.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
