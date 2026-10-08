// UNITÉ 5 — MESURE (PE T5) : 9 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, rightAngle, PINK, PINK2, GREEN, GREENL, BLUE, OCRE, BLUEL } = L;

const dash = (x1, y1, x2, y2, c, w) => seg(x1, y1, x2, y2, c, w, '12 9');

const figs = {};
// S1 — unités de longueur
figs.u5f1 = (() => { const { s, y } = head('Le tableau des longueurs', ['Chaque unité vaut 10 fois sa voisine de droite : un chiffre par colonne.']);
  const top = y + 20;
  const data = [['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], ['', '', '', '3', '2', '5', ''], ['', '', '', '', '', '', '']];
  let b = tableEl(150, top, [100, 100, 100, 100, 100, 100, 100], 54, data.slice(0, 2));
  b += txt(500, top + 2 * 54 + 42, '3,25 m = 325 cm : la virgule saute à la nouvelle unité', 22, PINK2, 'bold', 'middle');
  b += txt(500, top + 2 * 54 + 80, '4 km = 4 000 m ; 250 cm = 2,50 m ; 7 cm = 70 mm', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 2 * 54 + 112, s + b); })();
// S2 — périmètre
figs.u5f2 = (() => { const { s, y } = head('Le périmètre : le tour complet', ['On additionne tous les côtés — ou on utilise la formule de la figure.']);
  const top = y + 30;
  let b = poly([[100, top + 160], [360, top + 160], [360, top], [100, top]], BLUEL, BLUE, 3.5);
  b += txt(230, top + 195, '8 m', 21, BLUE, 'bold', 'middle') + txt(72, top + 85, '5 m', 21, BLUE, 'bold', 'middle');
  b += txt(230, top + 245, 'P = (8 + 5) × 2 = 26 m', 22, PINK2, 'bold', 'middle');
  b += poly([[600, top + 160], [760, top + 160], [760, top], [600, top]], GREENL, GREEN, 3.5);
  b += txt(680, top + 195, '6 m', 21, GREEN, 'bold', 'middle');
  b += txt(680, top + 245, 'P = 6 × 4 = 24 m', 22, PINK2, 'bold', 'middle');
  b += txt(500, top + 300, 'rectangle : P = (longueur + largeur) × 2 ; carré : P = côté × 4', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 332, s + b); })();
// S3 — circonférence
figs.u5f3 = (() => { const { s, y } = head('La circonférence du cercle', ['Le tour du cercle vaut environ 3,14 fois son diamètre.']);
  const top = y + 30, cx = 320, cy = top + 150, r = 125;
  let b = circle(cx, cy, r, BLUE, BLUEL, 4);
  b += seg(cx - r, cy, cx + r, cy, PINK2, 3.5) + dot(cx, cy, 7, PINK2);
  b += txt(cx, cy - 14, 'diamètre d = 70 cm', 20, PINK2, 'bold', 'middle');
  b += seg(cx, cy, cx + r * Math.cos(-0.9), cy + r * Math.sin(-0.9), GREEN, 3.5);
  b += txt(cx + 86, cy - 74, 'rayon', 19, GREEN, 'bold', 'middle');
  b += box(560, top + 55, 380, 56, 'd = 2 × rayon', GREENL, GREEN, 24);
  b += box(560, top + 135, 380, 56, 'C = d × 3,14', '#FDE7EF', PINK2, 26);
  b += txt(750, top + 240, 'C = 70 × 3,14 = 219,8 cm', 22, OCRE, 'bold', 'middle');
  b += txt(500, top + 305, 'la roue de 70 cm avance de 2,198 m à chaque tour !', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 337, s + b); })();
// S4 — masses
figs.u5f4 = (() => { const { s, y } = head('Le tableau des masses', ['Du gramme à la tonne : t, q, kg, hg, dag, g — et les grandes équivalences.']);
  const top = y + 20;
  const data = [['t', 'q', 'kg', 'hg', 'dag', 'g'], ['', '', '2', '5', '0', '0']];
  let b = tableEl(200, top, [100, 100, 100, 100, 100, 100], 54, data);
  b += txt(500, top + 2 * 54 + 42, '2 500 g = 2,5 kg (la virgule se place sous le kg)', 22, PINK2, 'bold', 'middle');
  b += txt(500, top + 2 * 54 + 80, '1 t = 1 000 kg ; 1 q (quintal) = 100 kg ; 1 kg = 1 000 g', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 2 * 54 + 112, s + b); })();
// S5 — capacités
figs.u5f5 = (() => { const { s, y } = head('Le tableau des capacités', ['Le litre et sa famille — et le pont secret vers les masses.']);
  const top = y + 20;
  const data = [['hL', 'daL', 'L', 'dL', 'cL', 'mL'], ['', '', '1', '5', '0', '']];
  let b = tableEl(200, top, [100, 100, 100, 100, 100, 100], 54, data);
  b += txt(500, top + 2 * 54 + 42, '1,50 L = 150 cL ; 1 L = 100 cL = 1 000 mL', 22, PINK2, 'bold', 'middle');
  b += box(190, top + 2 * 54 + 68, 620, 56, '1 L d’eau pèse 1 kg — 1 000 L d’eau pèsent 1 tonne', GREENL, GREEN, 22);
  return svg(1000, top + 2 * 54 + 156, s + b); })();
// S6 — temps
figs.u5f6 = (() => { const { s, y } = head('Mesurer le temps', ['Attention : le temps ne compte pas en dizaines… mais en 60 !']);
  const top = y + 20;
  const data = [['1 min', '1 h', '1 jour', '1 semaine', '1 an'],
    ['60 s', '60 min', '24 h', '7 jours', '12 mois / 365 j']];
  let b = tableEl(60, top, [150, 150, 150, 190, 240], 54, data);
  b += txt(500, top + 2 * 54 + 45, '2 h 45 min + 1 h 30 min = 3 h 75 min = 4 h 15 min', 23, PINK2, 'bold', 'middle');
  b += txt(500, top + 2 * 54 + 83, '75 min dépasse 60 : on échange 60 min contre 1 h', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 2 * 54 + 115, s + b); })();
// S7 — aire rectangle et carré
figs.u5f7 = (() => { const { s, y } = head('L’aire : compter les carreaux', ['Le carrelage le montre : 5 rangées de 3 carreaux = 15 carreaux.']);
  const top = y + 25, c = 52;
  let b = '';
  for (let i = 0; i < 5; i++) for (let j = 0; j < 3; j++)
    b += `<rect x="${140 + i * c}" y="${top + j * c}" width="${c}" height="${c}" fill="${(i + j) % 2 ? '#FDE7EF' : BLUEL}" stroke="${BLUE}" stroke-width="2"/>`;
  b += txt(270, top + 3 * c + 34, '5 cm', 21, BLUE, 'bold', 'middle') + txt(100, top + 85, '3 cm', 21, BLUE, 'bold', 'middle');
  b += box(520, top + 20, 420, 56, 'aire du rectangle = L × l', GREENL, GREEN, 24);
  b += box(520, top + 100, 420, 56, 'aire du carré = côté × côté', '#FDE7EF', PINK2, 24);
  b += txt(730, top + 200, 'A = 5 × 3 = 15 cm²', 24, OCRE, 'bold', 'middle');
  b += txt(500, top + 3 * c + 86, 'l’aire se mesure en unités CARRÉES : cm², m²…', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 3 * c + 118, s + b); })();
// S8 — aire du triangle
figs.u5f8 = (() => { const { s, y } = head('L’aire du triangle : un demi-rectangle', ['La diagonale coupe le rectangle en deux triangles égaux.']);
  const top = y + 30;
  let b = poly([[120, top + 170], [420, top + 170], [420, top], [120, top]], 'none', BLUE, 3.5);
  b += poly([[120, top + 170], [420, top + 170], [420, top]], GREENL, GREEN, 3);
  b += dash(120, top + 170, 420, top, PINK2, 3);
  b += txt(270, top + 205, 'base 6 cm', 20, BLUE, 'bold', 'middle') + txt(455, top + 88, 'hauteur', 19, BLUE, 'bold');
  b += txt(455, top + 112, '4 cm', 19, BLUE, 'bold');
  b += box(600, top + 25, 360, 60, 'aire du triangle', '#FDE7EF', PINK2, 24);
  b += box(600, top + 95, 360, 60, '= (base × hauteur) ÷ 2', '#FDE7EF', PINK2, 22);
  b += txt(780, top + 195, 'A = (6 × 4) ÷ 2 = 12 cm²', 22, OCRE, 'bold', 'middle');
  b += txt(500, top + 250, 'le triangle vert est la moitié exacte du rectangle 6 × 4', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 282, s + b); })();
// S9 — volume
figs.u5f9 = (() => { const { s, y } = head('Le volume : compter les cubes', ['Un pavé de 4 sur 3 sur 2 contient 24 cubes unités d’un cm³.']);
  const top = y + 45, c = 46, ox = 230, oy = top + 200, kx = 0.5, ky = 0.26;
  let b = '';
  const cube = (i, j, k) => {
    const X = ox + i * c + j * c * kx, Y = oy - k * c - j * c * ky;
    let s2 = `<rect x="${X}" y="${Y - c}" width="${c}" height="${c}" fill="${BLUEL}" stroke="${BLUE}" stroke-width="2"/>`;
    s2 += `<polygon points="${X},${Y - c} ${X + c * kx},${Y - c - c * ky} ${X + c + c * kx},${Y - c - c * ky} ${X + c},${Y - c}" fill="#9FC3E8" stroke="${BLUE}" stroke-width="2"/>`;
    s2 += `<polygon points="${X + c},${Y - c} ${X + c + c * kx},${Y - c - c * ky} ${X + c + c * kx},${Y - c * ky} ${X + c},${Y}" fill="#7FA8D6" stroke="${BLUE}" stroke-width="2"/>`;
    return s2;
  };
  for (let j = 2; j >= 0; j--) for (let k = 0; k < 2; k++) for (let i = 0; i < 4; i++) b += cube(i, j, k);
  b += txt(ox + 2 * c + 20, oy + 40, '4 cubes', 20, BLUE, 'bold', 'middle');
  b += txt(ox + 4 * c + 100, oy - 20, '3 rangées', 20, GREEN, 'bold');
  b += txt(ox - 80, oy - 60, '2 étages', 20, PINK2, 'bold');
  b += box(640, top + 30, 330, 56, 'V = 4 × 3 × 2', GREENL, GREEN, 26);
  b += txt(805, top + 130, '= 24 cm³', 28, OCRE, 'bold', 'middle');
  b += txt(500, oy + 95, 'le volume se mesure en unités CUBES : le cm³ est un petit dé de 1 cm d’arête', 19, PINK2, 'bold', 'middle');
  return svg(1000, oy + 127, s + b); })();

const S = [
  {
    t: 'Les mesures de longueur et leurs conversions', comp: 'Mesure', theme: 'Unités de longueur et conversions',
    goal: 'choisir l’unité de longueur appropriée et convertir à l’aide du tableau de conversion',
    mat: 'Mètre ruban, règle graduée, tableau de conversion, cahier',
    revQ: 'Deux triangles identiques assemblés peuvent former quelles figures ?',
    revRA: 'Un carré ou rectangle, un grand triangle, un parallélogramme.',
    situation: 'Le géomètre mesure le champ en mètres, la couturière mesure le tissu en centimètres, et le panneau de la route annonce Antsirabe en kilomètres. Trois métiers, trois unités ! Comment choisir la bonne — et comment passer de l’une à l’autre sans se tromper ?',
    def: 'L’unité principale des longueurs est le mètre (m). Ses multiples sont le décamètre (dam = 10 m), l’hectomètre (hm = 100 m) et le kilomètre (km = 1 000 m) ; ses sous-multiples sont le décimètre (dm), le centimètre (cm) et le millimètre (mm). Chaque unité vaut 10 fois l’unité placée à sa droite dans le tableau de conversion.',
    autrement: 'les unités de longueur forment un escalier : chaque marche vers la droite multiplie par 10, chaque marche vers la gauche divise par 10.',
    concept: 'Le tableau de conversion est une machine infaillible, à condition de respecter sa règle d’or : UN CHIFFRE PAR COLONNE, le chiffre des unités du nombre dans la colonne de son unité. Pour convertir 3,25 m en cm : le 3 se pose dans la colonne m, le 2 en dm, le 5 en cm — et on lit 325 cm. Pour 4 km en m : le 4 en km, puis on complète de zéros jusqu’à la colonne m : 4 000 m. Dans l’autre sens, 250 cm → la virgule vient se placer après la colonne m : 2,50 m. Le choix de l’unité est affaire de bon sens : les mm pour l’épaisseur d’une pièce, les cm pour un cahier, les m pour la classe, les km pour la route — mesurer la distance Tana-Antsirabe en cm donnerait un nombre de 8 chiffres ! Avant toute addition de longueurs, tout convertir DANS LA MÊME unité.',
    synthese: 'km hm dam m dm cm mm ; × 10 par marche vers la droite ; un chiffre par colonne, zéros pour compléter ; même unité avant de calculer.',
    method: ['Tracer le tableau et poser le nombre, un chiffre par colonne, l’unité donnée recevant le chiffre des unités.', 'Compléter avec des zéros jusqu’à l’unité demandée.', 'Lire le résultat, la virgule derrière la nouvelle unité.'],
    exemple: 'Convertir 7,8 m en cm : 7 en m, 8 en dm, 0 en cm → 780 cm. Et 3 500 m = 3,5 km.',
    erreur: 'Croire que « 1 m = 100 cm donc 1,5 m = 105 cm » : la conversion n’est pas un collage de chiffres ! Le tableau donne 150 cm. Toujours poser les colonnes en cas de doute.',
    saistu: 'Le mètre a été inventé pendant la Révolution française : les savants ont voulu une unité valant la dix-millionième partie du quart du tour de la Terre ! Deux astronomes ont mesuré la France pendant 7 ans pour le calculer. Aujourd’hui, presque toute la planète mesure en mètres — y compris Madagascar.',
    exos: ['Convertis : a) 5 m en cm ; b) 3 km en m ; d) 7,2 cm en mm ; e) 0,8 m en cm.',
      'Convertis : a) 450 cm en m ; b) 2 500 m en km ; d) 85 mm en cm ; e) 12 dm en m.',
      'Le chemin de l’école fait 1,2 km ; Hanta a déjà marché 650 m. a) Convertis 1,2 km en m. b) Quelle distance reste-t-il ? d) Exprime le reste en km. e) Quelle unité choisirais-tu pour mesurer ton cahier ? Pourquoi ?'],
    corr: ['a) 500 cm ; b) 3 000 m ; d) 72 mm ; e) 80 cm.',
      'a) 4,5 m ; b) 2,5 km ; d) 8,5 cm ; e) 1,2 m.',
      'a) 1 200 m ; b) 1 200 − 650 = 550 m ; d) 0,55 km ; e) le cm : le cahier est trop petit pour le m, trop grand pour le mm.'],
    fig: 'u5f1'
  },
  {
    t: 'Le périmètre des polygones', comp: 'Mesure', theme: 'Périmètre : formules et problèmes',
    goal: 'calculer le périmètre d’un polygone et retrouver une dimension à partir du périmètre',
    mat: 'Ficelle, mètre ruban, règle, figures tracées, cahier',
    revQ: 'Convertis 3,4 m en cm.',
    revRA: '340 cm.',
    situation: 'Papa veut clôturer le potager rectangulaire de 8 m sur 5 m. Combien de mètres de fil acheter ? Il faut la longueur du TOUR complet du potager : son périmètre. Trop court, la clôture bâille ; trop long, l’argent est gaspillé.',
    def: 'Le périmètre d’un polygone est la longueur de son tour complet : la somme des longueurs de tous ses côtés. Pour le rectangle, P = (longueur + largeur) × 2 ; pour le carré, P = côté × 4 ; pour tout polygone régulier, P = côté × nombre de côtés.',
    autrement: 'le périmètre, c’est le voyage d’une fourmi qui fait tout le tour de la figure et revient à son départ.',
    concept: 'La formule n’est qu’une addition rangée : le rectangle a deux longueurs et deux largeurs, donc 8 + 5 + 8 + 5 = (8 + 5) × 2 = 26 m — la formule compte plus vite, mais l’addition des côtés marche TOUJOURS, même pour un polygone quelconque de côtés 7, 9, 4 et 6 m (périmètre 26 m aussi !). Les formules savent aussi marcher à reculons : si la clôture d’un carré a pris 36 m, le côté vaut 36 ÷ 4 = 9 m ; si un rectangle de périmètre 26 m a 8 m de longueur, alors longueur + largeur = 26 ÷ 2 = 13, donc largeur = 13 − 8 = 5 m. Piège d’unités : des côtés en m et en cm ne s’additionnent JAMAIS tels quels — tout convertir d’abord. Et le périmètre se mesure en unités de LONGUEUR : m, cm… jamais en m².',
    synthese: 'P = somme de tous les côtés ; rectangle (L + l) × 2 ; carré c × 4 ; à reculons : P ÷ 4 donne le côté du carré, P ÷ 2 − L donne la largeur.',
    method: ['Vérifier que tous les côtés sont dans la même unité (convertir sinon).', 'Appliquer la formule de la figure — ou additionner tous les côtés.', 'Contrôler l’ordre de grandeur et écrire l’unité (m, cm…).'],
    exemple: 'Rectangle de 12 m sur 7 m : P = (12 + 7) × 2 = 38 m ; carré de périmètre 48 cm : côté = 48 ÷ 4 = 12 cm.',
    erreur: 'Additionner seulement une longueur et une largeur : (8 + 5) = 13 m n’est que le DEMI-tour ! La fourmi doit revenir à son départ : on multiplie par 2.',
    saistu: 'Le mot « périmètre » vient du grec peri (autour) et metron (mesure) : « mesurer autour ». Les coureurs le savent bien : la ligne de départ du 400 m est décalée d’un couloir à l’autre, car le périmètre du couloir extérieur est plus grand — sans décalage, le coureur extérieur courrait 7 m de trop !',
    exos: ['Calcule le périmètre : a) rectangle de 9 m sur 4 m ; b) carré de 7 cm ; d) triangle équilatéral de 12 cm ; e) polygone de côtés 5, 8, 6 et 7 m.',
      'Retrouve la dimension : a) carré de périmètre 60 cm ; b) triangle équilatéral de périmètre 27 m ; d) rectangle de périmètre 30 m et de longueur 9 m ; e) rectangle de périmètre 42 cm et de largeur 8 cm.',
      'Le potager de Papa mesure 8 m sur 5 m. a) Calcule le périmètre. b) Le fil se vend par rouleaux de 10 m : combien de rouleaux ? d) Il laisse une porte de 1 m sans fil : quelle longueur de fil faut-il vraiment ? e) Combien coûte la clôture à 3 500 Ar le rouleau (rouleaux entiers) ?'],
    corr: ['a) 26 m ; b) 28 cm ; d) 36 cm ; e) 26 m.',
      'a) côté 15 cm ; b) côté 9 m ; d) largeur 30 ÷ 2 − 9 = 6 m ; e) longueur 42 ÷ 2 − 8 = 13 cm.',
      'a) 26 m ; b) 3 rouleaux (26 > 20, il en faut 3) ; d) 26 − 1 = 25 m ; e) 25 m → encore 3 rouleaux : 3 × 3 500 = 10 500 Ar.'],
    fig: 'u5f2'
  },
  {
    t: 'La circonférence du cercle', comp: 'Mesure', theme: 'Circonférence : C = d × 3,14',
    goal: 'calculer la circonférence d’un cercle à partir de son diamètre ou de son rayon',
    mat: 'Ficelle, objets ronds (roue, assiette, boîte), règle, cahier',
    revQ: 'Périmètre d’un carré de 11 cm de côté ?',
    revRA: '44 cm.',
    situation: 'La roue de la charrette mesure 70 cm d’un bord à l’autre. À chaque tour, quelle distance parcourt-elle ? Les enfants entourent la roue d’une ficelle, la déroulent, mesurent : environ 2,20 m — un peu plus de 3 fois le diamètre… Toujours « un peu plus de 3 fois », quelle que soit la roue !',
    def: 'La circonférence est le périmètre du cercle. Le diamètre d est la longueur qui traverse le cercle en passant par le centre ; le rayon r va du centre au bord, et d = 2 × r. La circonférence se calcule par la formule C = d × 3,14.',
    autrement: 'le tour d’un cercle vaut toujours environ 3,14 fois sa traversée : mesure la traversée, multiplie par 3,14, tu as le tour.',
    concept: 'Le nombre 3,14 est la merveille de la séance : TOUS les cercles du monde, de la pièce de monnaie au stade, ont un tour qui vaut environ 3,14 fois leur diamètre. Ce rapport universel s’appelle pi (π) — son écriture décimale ne s’arrête jamais (3,141592…), et 3,14 en est la valeur approchée des écoliers. L’expérience de la ficelle le vérifie : 220 ÷ 70 ≈ 3,14. La formule travaille dans tous les sens : roue de diamètre 70 cm → C = 70 × 3,14 = 219,8 cm ≈ 2,20 m par tour ; et pour 10 tours, 22 m. Avec le rayon, doubler d’abord : r = 35 cm → d = 70 cm → C = 219,8 cm. À reculons enfin : un bassin de tour 12,56 m a pour diamètre 12,56 ÷ 3,14 = 4 m. Attention : le cercle n’est pas un polygone, « côté × nombre de côtés » ne s’applique pas — c’est π qui règne ici.',
    synthese: 'd = 2 × r ; C = d × 3,14 (= 2 × r × 3,14) ; à reculons : d = C ÷ 3,14 ; 3,14 ≈ π, le même pour tous les cercles.',
    method: ['Repérer la donnée : diamètre ou rayon (rayon → doubler d’abord).', 'Multiplier le diamètre par 3,14.', 'Écrire l’unité et contrôler : la circonférence fait un peu plus de 3 diamètres.'],
    exemple: 'Assiette de 24 cm de diamètre : C = 24 × 3,14 = 75,36 cm ; puits de rayon 0,5 m : C = 1 × 3,14 = 3,14 m.',
    erreur: 'Multiplier le RAYON par 3,14 en croyant tenir la circonférence : avec r = 35 cm on obtiendrait 109,9 cm, la moitié du vrai tour ! C’est le DIAMÈTRE qui entre dans la formule.',
    saistu: 'Le nombre π fascine l’humanité depuis 4 000 ans : les Babyloniens l’estimaient à 3,125, Archimède l’a coincé entre deux fractions, et les ordinateurs connaissent aujourd’hui plus de 100 000 milliards de ses décimales ! Il existe même un « jour de π » : le 14 mars (3/14), fêté par les mathématiciens du monde entier.',
    exos: ['Calcule la circonférence : a) d = 10 cm ; b) d = 25 cm ; d) r = 4 m ; e) r = 50 cm.',
      'a) Une roue de vélo a un diamètre de 60 cm : circonférence ? b) Distance parcourue en 10 tours ? d) En 100 tours ? e) Convertis ce dernier résultat en mètres.',
      'Le bassin rond du village a une circonférence de 9,42 m. a) Calcule son diamètre. b) Son rayon. d) On veut l’entourer d’une petite barrière vendue au mètre entier : combien de mètres acheter ? e) Pourquoi la ficelle des enfants donne-t-elle « environ » 3,14 et pas exactement ?'],
    corr: ['a) 31,4 cm ; b) 78,5 cm ; d) 8 × 3,14 = 25,12 m ; e) 100 × 3,14 = 314 cm.',
      'a) 60 × 3,14 = 188,4 cm ; b) 1 884 cm ; d) 18 840 cm ; e) 188,40 m.',
      'a) 9,42 ÷ 3,14 = 3 m ; b) 1,5 m ; d) 10 m (9,42 arrondi au mètre supérieur) ; e) la mesure à la ficelle est imprécise, et 3,14 est déjà une valeur approchée de π.'],
    fig: 'u5f3'
  },
  {
    t: 'La masse : estimer, mesurer, convertir', comp: 'Mesure', theme: 'Unités de masse jusqu’à la tonne',
    goal: 'estimer, mesurer et convertir des masses du gramme à la tonne',
    mat: 'Balance à plateaux, poids marqués, objets à peser, tableau de conversion, cahier',
    revQ: 'C = d × … ? Et d = 2 × … ?',
    revRA: 'C = d × 3,14 ; d = 2 × rayon.',
    situation: 'Sur le marché, la marchande pose le riz sur un plateau et les poids de fonte sur l’autre : 1 kg, 500 g, 250 g… Quand la balance s’équilibre, la masse est lue ! Mais le camion qui livre ses sacs se pèse en tonnes, et le cachet du médicament en milligrammes : la masse aussi a sa famille d’unités.',
    def: 'La masse mesure ce que pèse un objet. L’unité principale est le gramme (g) ; au-dessus : le décagramme (dag), l’hectogramme (hg), le kilogramme (kg = 1 000 g), le quintal (q = 100 kg) et la tonne (t = 1 000 kg). Le tableau de conversion fonctionne comme celui des longueurs : un chiffre par colonne.',
    autrement: 'même escalier que les longueurs, mais pour le poids : g pour les petits objets, kg pour le quotidien, tonne pour les camions.',
    concept: 'La conversion suit la machine habituelle : 2 500 g → le 2 en kg, le 5 en hg, les 0 en dag et g → 2,5 kg. Les géants ont leurs raccourcis : 1 t = 1 000 kg (3 colonnes d’écart), 1 q = 100 kg — un zébu de 4 quintaux pèse 400 kg, et 3 t de riz font 3 000 kg. La nouveauté de la séance est l’ESTIMATION : avant de peser, on devine l’ordre de grandeur avec des repères en tête — une orange ≈ 200 g, un kapoaka de riz rempli ≈ 285 g, un seau d’eau ≈ 10 kg, un zébu adulte ≈ 400 kg, un camion chargé : des tonnes. L’estimation est le garde-fou de la balance : si la pesée du poulet affiche 18 kg, c’est la lecture qui cloche, pas le poulet ! La balance à plateaux, elle, enseigne l’égalité : elle s’équilibre quand les deux masses sont égales — c’est la balance de l’unité III, en chair et en fonte.',
    synthese: 't q kg hg dag g ; 1 t = 1 000 kg, 1 q = 100 kg, 1 kg = 1 000 g ; estimer avant de peser avec des repères (orange 200 g, seau 10 kg, zébu 400 kg).',
    method: ['Estimer d’abord la masse avec un repère connu.', 'Peser (équilibre des plateaux) ou convertir au tableau, un chiffre par colonne.', 'Confronter mesure et estimation ; écrire l’unité.'],
    exemple: '3,2 kg = 3 200 g ; 450 kg = 4,5 q ; 7 t = 7 000 kg ; un sac de ciment estimé « lourd comme 5 seaux » ≈ 50 kg.',
    erreur: 'Confondre les écarts : entre kg et g il y a TROIS colonnes (× 1 000), pas une ! 2,5 kg = 2 500 g, et non 250 g. Le quintal (100 kg) et la tonne (1 000 kg) se confondent aussi : un zébu pèse des quintaux, pas des tonnes.',
    saistu: 'Pendant 130 ans, le kilogramme du monde entier a été UN objet : un cylindre de métal précieux gardé sous trois cloches de verre près de Paris, le « grand K ». Problème : il maigrissait de quelques millionièmes de gramme par an ! Depuis 2019, le kilogramme est défini par les lois de la physique — plus personne ne peut le faire maigrir.',
    exos: ['Convertis : a) 4 kg en g ; b) 2 500 g en kg ; d) 3 t en kg ; e) 5 q en kg.',
      'Choisis l’unité (g, kg, q ou t) : a) une gomme ; b) un sac de riz du marché ; d) un zébu ; e) un camion chargé.',
      'La coopérative stocke 2,4 t de riz. a) Convertis en kg. b) On remplit des sacs de 50 kg : combien de sacs ? d) Un client achète 6 sacs : quelle masse en kg ? e) Exprime le reste du stock en tonnes.'],
    corr: ['a) 4 000 g ; b) 2,5 kg ; d) 3 000 kg ; e) 500 kg.',
      'a) g (≈ 20 g) ; b) kg ; d) q (3 à 5 q) ; e) t.',
      'a) 2 400 kg ; b) 2 400 ÷ 50 = 48 sacs ; d) 300 kg ; e) 2 400 − 300 = 2 100 kg = 2,1 t.'],
    fig: 'u5f4'
  },
  {
    t: 'La capacité : litres et conversions', comp: 'Mesure', theme: 'Unités de capacité ; lien capacité-masse',
    goal: 'estimer et convertir des capacités et utiliser le lien entre litres d’eau et kilogrammes',
    mat: 'Bouteilles, bidon, verre doseur, entonnoir, eau, cahier',
    revQ: '1 tonne = combien de kg ? Et 1 quintal ?',
    revRA: '1 000 kg ; 100 kg.',
    situation: 'Hanta remplit des bouteilles de 1,5 L avec le bidon de 20 L. « Combien de bouteilles ? » demande sa mère. Et quand Papa charge le bidon plein sur le vélo, il grogne : « il pèse au moins 20 kilos ! » Comment le sait-il sans balance ? Le litre et le kilo sont de vieux complices.',
    def: 'La capacité mesure ce qu’un récipient peut contenir. L’unité principale est le litre (L) ; au-dessus : le décalitre (daL) et l’hectolitre (hL = 100 L) ; en dessous : le décilitre (dL), le centilitre (cL) et le millilitre (mL). 1 L = 100 cL = 1 000 mL. Pour l’eau, 1 litre pèse 1 kilogramme.',
    autrement: 'le litre a le même escalier que les autres unités — et pour l’eau, litres et kilos disent le même nombre.',
    concept: 'Le tableau des capacités tourne comme les autres : 1,5 L = 150 cL = 1 500 mL ; 250 cL = 2,5 L ; 3 hL = 300 L. Les repères d’estimation : une cuillère ≈ 5 mL, un verre ≈ 20 cL, une grande bouteille = 1,5 L, un seau ≈ 10 L, un bidon jaune = 20 L, un fût = des hectolitres. Le pont capacité-masse est le trésor de la séance : 1 L d’eau pèse exactement 1 kg — donc le bidon de 20 L pèse 20 kg d’eau (plus le plastique), et 1 000 L d’eau (un m³ !) pèsent une tonne. Ce lien, demandé par le programme, sert partout : la citerne de 2 000 L stocke 2 t d’eau — gare au toit qui la porte ! Attention : le pont ne vaut que pour L’EAU — un litre d’huile pèse un peu moins (≈ 0,9 kg), un litre de miel bien plus. Et pour le problème de Hanta : 20 ÷ 1,5 = 13 bouteilles pleines, et il reste 0,5 L.',
    synthese: 'hL daL L dL cL mL ; 1 L = 100 cL = 1 000 mL ; repères (verre 20 cL, seau 10 L, bidon 20 L) ; eau : 1 L = 1 kg, 1 000 L = 1 t.',
    method: ['Estimer la capacité avec un repère (verre, bouteille, seau, bidon).', 'Convertir au tableau, un chiffre par colonne.', 'Pour l’eau, traduire les litres en kg (même nombre) si le problème parle de masse.'],
    exemple: '2,5 L = 250 cL ; 500 mL = 0,5 L ; une citerne de 1 500 L d’eau pèse 1 500 kg = 1,5 t.',
    erreur: 'Étendre « 1 L = 1 kg » à tous les liquides : un litre d’huile ne pèse PAS 1 kg ! Le pont litre-kilo est réservé à l’eau.',
    saistu: 'Ton corps est un vrai réservoir : il contient environ 35 litres d’eau pour un adulte — près de 60 % de sa masse ! Et le zébu qui rentre du pâturage peut boire plus de 40 L d’un coup : deux bidons jaunes entiers, soit 40 kg d’eau avalés en quelques minutes.',
    exos: ['Convertis : a) 3 L en cL ; b) 1 500 mL en L ; d) 2 hL en L ; e) 25 cL en mL.',
      'Choisis l’unité (mL, cL, L ou hL) : a) une cuillère de sirop ; b) un verre de jus ; d) un seau ; e) la citerne de l’école.',
      'Hanta remplit des bouteilles de 1,5 L au bidon de 20 L. a) Combien de bouteilles pleines ? b) Que reste-t-il dans le bidon ? d) Combien pèse l’eau du bidon plein ? e) Combien pèsent 1 000 L d’eau ? Donne l’unité la mieux adaptée.'],
    corr: ['a) 300 cL ; b) 1,5 L ; d) 200 L ; e) 250 mL.',
      'a) mL ; b) cL ; d) L ; e) hL.',
      'a) 20 ÷ 1,5 → 13 bouteilles pleines ; b) 20 − 13 × 1,5 = 0,5 L ; d) 20 kg ; e) 1 000 kg = 1 tonne.'],
    fig: 'u5f5'
  },
  {
    t: 'La mesure du temps : conversions et opérations', comp: 'Mesure', theme: 'Temps : conversions, calculs de durées',
    goal: 'convertir des durées et effectuer des opérations sur les mesures de temps',
    mat: 'Horloge de classe, montre, calendrier, chronomètre, cahier',
    revQ: 'Un litre d’eau pèse… ? Et 1 000 L ?',
    revRA: '1 kg ; 1 000 kg = 1 tonne.',
    situation: 'Le taxi-brousse part à 8 h 45 et roule 2 h 30. Rivo calcule : « 8 h 45 + 2 h 30 = 10 h 75… » Dix heures soixante-quinze ?! Cette montre-là n’existe pas : passé 60 minutes, on change d’heure ! Le temps a son propre règlement, et il ne compte pas en dizaines.',
    def: 'Les unités de temps sont la seconde (s), la minute (min = 60 s), l’heure (h = 60 min), le jour (= 24 h), la semaine (7 jours), le mois et l’année (12 mois, 365 jours). Pour additionner ou soustraire des durées, on travaille les heures ensemble et les minutes ensemble, en échangeant 60 minutes contre 1 heure chaque fois que nécessaire.',
    autrement: 'le temps compte en 60 et en 24, jamais en 10 : dès que les minutes atteignent 60, elles se transforment en une heure.',
    concept: 'Le temps est le grand rebelle du système décimal : ses échanges se font à 60 (s → min, min → h) et à 24 (h → jour) — héritage des Babyloniens, qui comptaient en base 60. Toutes les techniques des grands nombres s’adaptent : addition 8 h 45 + 2 h 30 → heures : 10 h, minutes : 75 min = 1 h 15 → 11 h 15, l’arrivée du taxi ! Soustraction avec emprunt : 10 h 15 − 9 h 40 → 15 < 40, on casse 1 h en 60 min : 9 h 75 − 9 h 40 = 35 min. Conversions en chaîne : 3 h = 180 min ; 150 min = 2 h 30 ; 2 jours = 48 h. Et la durée entre deux horaires se calcule par étapes commodes : de 9 h 40 à 10 h il y a 20 min, puis 15 min : 35 min en tout — la méthode du « compter en avant », cousine de celle des caissiers de l’unité II.',
    synthese: '1 min = 60 s, 1 h = 60 min, 1 jour = 24 h ; additionner heures et minutes séparément, échanger à 60 ; durée entre deux horaires : compter en avant.',
    method: ['Poser heures sous heures, minutes sous minutes.', 'Calculer chaque colonne ; si les minutes atteignent 60, échanger contre 1 heure (ou emprunter 1 h = 60 min pour soustraire).', 'Vérifier avec la méthode « compter en avant » sur l’horloge.'],
    exemple: '2 h 45 + 1 h 30 = 3 h 75 = 4 h 15 ; et de 7 h 50 à 9 h 20, il s’écoule 10 min + 1 h 20 = 1 h 30.',
    erreur: 'Poser 1 h 30 = 1,30 h et calculer en décimal : FAUX, 1 h 30 = 1,5 h ! Les minutes ne sont pas des centièmes d’heure : on ne mélange jamais l’écriture du temps et l’écriture décimale.',
    saistu: 'Pourquoi 60 ? Les Babyloniens comptaient sur les phalanges : le pouce pointe les 12 phalanges des quatre doigts d’une main, et les 5 doigts de l’autre main comptent les tours : 12 × 5 = 60 ! Ce calcul vieux de 4 000 ans vit encore dans chaque minute de ta montre.',
    exos: ['Convertis : a) 3 min en s ; b) 240 min en h ; d) 2 h 30 en min ; e) 3 jours en h.',
      'Calcule : a) 1 h 20 + 2 h 15 ; b) 3 h 50 + 1 h 25 ; d) 5 h 10 − 2 h 40 ; e) 12 h − 7 h 35.',
      'Le taxi-brousse part à 8 h 45 et le voyage dure 2 h 30. a) À quelle heure arrive-t-il ? b) Le retour part à 15 h 20 et arrive à 18 h 05 : durée du retour ? d) Pourquoi le retour dure-t-il plus longtemps ? Propose une raison. e) Durée totale passée sur la route ce jour-là ?'],
    corr: ['a) 180 s ; b) 4 h ; d) 150 min ; e) 72 h.',
      'a) 3 h 35 ; b) 4 h 75 = 5 h 15 ; d) 4 h 70 − 2 h 40 = 2 h 30 ; e) 11 h 60 − 7 h 35 = 4 h 25.',
      'a) 11 h 15 ; b) de 15 h 20 à 18 h 05 : 40 min + 2 h 05 = 2 h 45 ; d) toute raison sensée (route encombrée, arrêts…) ; e) 2 h 30 + 2 h 45 = 5 h 15.'],
    fig: 'u5f6'
  },
  {
    t: 'L’aire du rectangle et du carré', comp: 'Mesure', theme: 'Aires : rectangle et carré',
    goal: 'calculer l’aire du rectangle et du carré et distinguer aire et périmètre',
    mat: 'Papier quadrillé, carreaux de 1 cm², figures tracées, cahier',
    revQ: 'Calcule 2 h 40 + 1 h 35.',
    revRA: '3 h 75 = 4 h 15.',
    situation: 'Les carreleurs posent des carreaux de 1 dm de côté dans la salle : 5 carreaux par rangée, 3 rangées. L’écolier qui regarde compte : 15 carreaux ! Il vient de mesurer, sans le savoir, la SURFACE du sol — pas son tour, mais ce qu’il faut pour le COUVRIR.',
    def: 'L’aire d’une figure est la mesure de sa surface, en unités carrées : le cm² (un carré de 1 cm de côté), le m²… L’aire du rectangle est longueur × largeur ; l’aire du carré est côté × côté.',
    autrement: 'l’aire compte combien de petits carreaux d’un centimètre de côté il faut pour recouvrir la figure sans trou ni débord.',
    concept: 'La formule naît du carrelage : 5 carreaux par rangée, 3 rangées → 5 × 3 = 15 carreaux, voilà pourquoi aire = L × l. L’unité est le piège favori des examens : le périmètre se mesure en cm (une longueur de fil), l’aire en cm² (un nombre de carreaux) — deux mondes différents ! Deux figures peuvent le crier : un rectangle de 6 × 2 et un carré de 4 ont le MÊME périmètre (16 cm) mais des aires différentes (12 et 16 cm²) ; et un rectangle de 8 × 1 et un carré de 3 ont presque le même périmètre pour des aires de 8 et 9 cm². L’aire marche aussi à reculons : une salle de 24 m² large de 4 m est longue de 24 ÷ 4 = 6 m. Et les unités d’aire ont leur propre escalier, qui grimpe de 100 en 100 : 1 m² = 100 dm² = 10 000 cm² — un m² contient CENT carrés de 1 dm !',
    synthese: 'aire = surface en unités carrées ; rectangle L × l, carré c × c ; périmètre en cm, aire en cm² ; même périmètre n’implique pas même aire ; 1 m² = 10 000 cm².',
    method: ['Vérifier que les deux dimensions sont dans la même unité.', 'Multiplier : L × l (rectangle) ou côté × côté (carré).', 'Écrire l’unité CARRÉE du résultat, et vérifier qu’on ne confond pas avec le périmètre.'],
    exemple: 'Salle de 6 m sur 4 m : aire 24 m², périmètre 20 m — deux réponses, deux unités, deux questions différentes.',
    erreur: 'Répondre « 15 cm » pour une aire : sans le ², la réponse est fausse à l’examen ! L’aire compte des carreaux (cm²), le périmètre mesure du fil (cm). Relire la question : couvrir → aire ; entourer → périmètre.',
    saistu: 'Les rizières de Madagascar se mesurent souvent en ares : 1 are = 100 m², le carré de 10 m sur 10 m. Et l’hectare (1 ha = 10 000 m²) est le grand frère : un terrain de football fait à peu près la moitié d’un hectare. « Are », « hectare »… tous deux cousins du mot « aire » !',
    exos: ['Calcule l’aire : a) rectangle de 7 cm sur 4 cm ; b) carré de 9 cm ; d) rectangle de 12 m sur 5 m ; e) carré de 20 m.',
      'Pour un rectangle de 10 m sur 3 m : a) calcule l’aire ; b) calcule le périmètre ; d) quelle réponse sert à acheter du grillage pour l’entourer ? e) laquelle sert à acheter du gazon pour le couvrir ?',
      'La salle de classe mesure 8 m sur 6 m. a) Calcule son aire. b) Un carreau couvre 0,25 m² : combien de carreaux pour le sol ? d) La longueur reste 8 m mais l’aire d’une autre salle est 40 m² : quelle est sa largeur ? e) Compare les deux salles en une phrase.'],
    corr: ['a) 28 cm² ; b) 81 cm² ; d) 60 m² ; e) 400 m².',
      'a) 30 m² ; b) 26 m ; d) le périmètre (26 m) ; e) l’aire (30 m²).',
      'a) 48 m² ; b) 48 ÷ 0,25 = 192 carreaux ; d) 40 ÷ 8 = 5 m ; e) la première salle (48 m²) est plus grande que la seconde (40 m²) de 8 m².'],
    fig: 'u5f7'
  },
  {
    t: 'L’aire du triangle ; comparer des aires', comp: 'Mesure', theme: 'Aire du triangle ; comparaison d’aires',
    goal: 'calculer l’aire d’un triangle et comparer des aires de figures',
    mat: 'Papier quadrillé, rectangles en papier à plier, ciseaux, cahier',
    revQ: 'Aire et périmètre d’un carré de 5 cm de côté ?',
    revRA: 'Aire 25 cm² ; périmètre 20 cm.',
    situation: 'Vola plie sa feuille rectangulaire le long de la diagonale et la coupe : deux triangles PARFAITEMENT superposables ! Chacun contient donc exactement la MOITIÉ du papier. Si le rectangle faisait 24 cm², chaque triangle fait 12 cm² — l’aire du triangle vient de naître d’un pliage.',
    def: 'L’aire d’un triangle est la moitié de l’aire du rectangle qui a la même base et la même hauteur : aire du triangle = (base × hauteur) ÷ 2. La hauteur est la distance qui tombe PERPENDICULAIREMENT de la pointe sur la base.',
    autrement: 'un triangle est toujours un demi-rectangle caché : base fois hauteur, puis on partage en deux.',
    concept: 'Le pliage de Vola démontre la formule pour le triangle rectangle : il est la moitié exacte du rectangle, donc (6 × 4) ÷ 2 = 12 cm². Le miracle : la formule vaut pour TOUS les triangles — un triangle penché se laisse enfermer dans un rectangle de même base et même hauteur, et en occupe toujours la moitié. Le vrai piège est la HAUTEUR : ce n’est pas un côté penché, c’est la chute PERPENDICULAIRE de la pointe sur la base — l’équerre de l’unité IV la vérifie. Dans un triangle rectangle, les deux côtés de l’angle droit jouent base et hauteur : cadeau ! Pour COMPARER des aires, trois armes : la formule (calculer puis comparer les nombres), le comptage de carreaux (un demi-carreau + un demi-carreau = 1), et le découpage-recollage de l’unité IV — des figures d’allures très différentes peuvent cacher la même aire, comme les silhouettes du tangram.',
    synthese: 'aire du triangle = (base × hauteur) ÷ 2 ; la hauteur tombe perpendiculairement sur la base ; comparer par formule, carreaux ou découpage.',
    method: ['Repérer la base, puis la hauteur perpendiculaire (l’équerre contrôle).', 'Multiplier base × hauteur, puis diviser par 2.', 'Pour comparer des figures : calculer chaque aire dans la même unité, ou compter les carreaux.'],
    exemple: 'Triangle de base 10 cm et de hauteur 6 cm : (10 × 6) ÷ 2 = 30 cm² — la moitié du rectangle 10 × 6.',
    erreur: 'Oublier le ÷ 2 : base × hauteur donne l’aire du RECTANGLE entier, le double du triangle ! Le triangle n’est que la moitié : la division par 2 fait partie de la formule.',
    saistu: 'Il y a 4 000 ans, les arpenteurs d’Égypte recalculaient les champs après chaque crue du Nil qui effaçait les bornes : ils découpaient les terrains en triangles et mesuraient leurs aires — c’est la naissance même du mot « géométrie » : geo-metria, la mesure de la terre !',
    exos: ['Calcule l’aire du triangle : a) base 8 cm, hauteur 5 cm ; b) base 12 cm, hauteur 7 cm ; d) base 9 m, hauteur 4 m ; e) triangle rectangle de côtés de l’angle droit 6 et 8 cm.',
      'Un rectangle de 10 cm sur 6 cm est coupé par sa diagonale. a) Aire du rectangle ? b) Aire de chaque triangle ? d) Les deux triangles ont-ils la même aire ? e) Quel est le périmètre du rectangle (pour ne pas confondre !) ?',
      'Compare les aires : a) triangle de base 10 et hauteur 4 ; b) carré de 5 ; d) rectangle de 7 sur 3 (tout en cm) ; e) range les trois figures de la plus petite à la plus grande aire.'],
    corr: ['a) 20 cm² ; b) 42 cm² ; d) 18 m² ; e) (6 × 8) ÷ 2 = 24 cm².',
      'a) 60 cm² ; b) 30 cm² ; d) oui : superposables, même aire ; e) (10 + 6) × 2 = 32 cm.',
      'a) 20 cm² ; b) 25 cm² ; d) 21 cm² ; e) triangle (20) < rectangle (21) < carré (25).'],
    fig: 'u5f8'
  },
  {
    t: 'Le volume : cubes unités, cube et pavé droit', comp: 'Mesure', theme: 'Notion intuitive de volume (cm³)',
    goal: 'comprendre la notion de volume en comptant des cubes unités et construire cube et pavé droit',
    mat: 'Cubes unités, boîtes, patrons de cube et de pavé, cahier',
    revQ: 'Aire d’un triangle de base 6 cm et de hauteur 5 cm ?',
    revRA: '(6 × 5) ÷ 2 = 15 cm².',
    situation: 'Naly remplit une petite boîte avec des dés de 1 cm d’arête : 4 dés par rangée, 3 rangées par étage, 2 étages. « Combien de dés dans la boîte ? » 4 × 3 = 12 par étage, × 2 étages = 24 dés. Naly vient de mesurer un VOLUME : la place que la boîte offre, comptée en petits cubes.',
    def: 'Le volume mesure la place qu’occupe un objet dans l’espace. L’unité est le cube unité : le cm³ est un cube de 1 cm d’arête. Le volume d’un pavé droit se trouve en comptant ses cubes : longueur × largeur × hauteur ; le cube, dont toutes les arêtes sont égales, a pour volume arête × arête × arête.',
    autrement: 'après le fil du périmètre et les carreaux de l’aire, voici les dés du volume : on compte combien de petits cubes remplissent la boîte.',
    concept: 'Le volume est le troisième étage de la tour des mesures : le périmètre suit une LIGNE (cm), l’aire couvre une SURFACE (cm²), le volume remplit un ESPACE (cm³) — un exposant de plus à chaque étage ! Le comptage s’organise comme le carrelage en 3D : un étage de 4 × 3 = 12 cubes, 2 étages → 24 cm³ ; d’où la formule L × l × h, trois longueurs multipliées (toutes dans la même unité !). Le cube est le pavé parfait : 3 × 3 × 3 = 27 cm³. La construction des solides (demandée par le programme) passe par les PATRONS : six carrés en croix se plient en cube ; le pavé réclame trois paires de rectangles. Et le volume tend la main aux capacités : la boîte de 10 × 10 × 10 = 1 000 cm³ contient exactement… 1 litre ! Le litre est un cube de 10 cm caché dans la bouteille.',
    synthese: 'volume = nombre de cubes unités (cm³) ; pavé : L × l × h ; cube : a × a × a ; patron → solide ; 1 000 cm³ = 1 L.',
    method: ['Compter les cubes d’un étage : longueur × largeur.', 'Multiplier par le nombre d’étages : la hauteur.', 'Écrire l’unité CUBE (cm³) ; pour construire le solide, tracer son patron puis plier.'],
    exemple: 'Pavé de 5 cm sur 2 cm sur 3 cm : 5 × 2 = 10 cubes par étage, × 3 étages = 30 cm³.',
    erreur: 'Écrire le volume en cm ou en cm² : 24 cm² est une aire, pas un volume ! Trois longueurs multipliées donnent des cm³ — l’exposant 3 compte les trois dimensions.',
    saistu: 'Le litre et le cube sont parents cachés : 1 L = 1 000 cm³, le cube de 10 cm d’arête exactement. Et le grand mètre cube (1 m³ = 1 000 L d’eau) pèse une tonne entière — voilà pourquoi on ne porte pas une citerne à bras, même « d’un seul petit mètre cube » !',
    exos: ['Calcule le volume : a) pavé de 4 × 3 × 2 cm ; b) pavé de 5 × 4 × 3 cm ; d) cube de 2 cm d’arête ; e) cube de 5 cm d’arête.',
      'Une boîte mesure 6 cm sur 4 cm sur 3 cm. a) Combien de cubes de 1 cm³ par étage ? b) Combien d’étages ? d) Volume total ? e) Peut-on y ranger 75 dés de 1 cm³ ?',
      'a) Dessine le patron d’un cube de 3 cm d’arête (6 carrés en croix). b) Quel est son volume ? d) Combien de cubes de 1 cm³ pour remplir une boîte cubique de 10 cm d’arête ? e) Quelle capacité en litres cela représente-t-il ?'],
    corr: ['a) 24 cm³ ; b) 60 cm³ ; d) 8 cm³ ; e) 125 cm³.',
      'a) 6 × 4 = 24 cubes ; b) 3 étages ; d) 72 cm³ ; e) non : 75 > 72, il manque la place de 3 dés.',
      'a) patron en croix correct ; b) 27 cm³ ; d) 1 000 cubes ; e) 1 litre.'],
    fig: 'u5f9'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Mesure',
  rag: 'décrire des objets et des situations à l’aide de mesures conventionnelles de longueur, masse, capacité et temps, et estimer aires et volumes simples.',
  valeurs: 'justice et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Longueurs', 'km hm dam m dm cm mm ; un chiffre par colonne', 'Convertir et choisir la bonne unité'],
      ['Périmètre et circonférence', 'P = somme des côtés ; rectangle (L+l)×2 ; carré c×4 ; C = d × 3,14', 'Calculer un tour, retrouver une dimension'],
      ['Masses', 't q kg hg dag g ; 1 t = 1 000 kg ; 1 q = 100 kg', 'Estimer, peser, convertir'],
      ['Capacités', 'hL daL L dL cL mL ; 1 L = 100 cL ; eau : 1 L = 1 kg', 'Convertir et utiliser le pont litre-kilo'],
      ['Temps', '1 h = 60 min ; 1 jour = 24 h ; échanges à 60, jamais à 10', 'Convertir, additionner, soustraire des durées'],
      ['Aires et volumes', 'Rectangle L×l ; carré c×c ; triangle (b×h)÷2 ; pavé L×l×h ; cm, cm², cm³', 'Calculer et ne pas confondre les trois mesures']
    ],
    questions: [
      'Convertis : 2,45 m en cm ; 3 200 m en km ; 1,2 t en kg ; 350 cL en L.',
      'Un rectangle a un périmètre de 34 cm et une longueur de 10 cm : largeur, puis aire ?',
      'Une roue a un rayon de 30 cm : diamètre, circonférence, et distance pour 5 tours ?',
      'Le car part à 9 h 50 et arrive à 13 h 15 : durée du trajet ?',
      'Un pavé mesure 6 × 5 × 4 cm : volume ? Et combien de litres pour un cube de 10 cm ?'
    ],
    answers: [
      '245 cm ; 3,2 km ; 1 200 kg ; 3,5 L.',
      'Largeur 34 ÷ 2 − 10 = 7 cm ; aire 10 × 7 = 70 cm².',
      'd = 60 cm ; C = 188,4 cm ; 5 tours = 942 cm = 9,42 m.',
      'De 9 h 50 à 13 h 15 : 10 min + 3 h 15 = 3 h 25.',
      '120 cm³ ; le cube de 10 cm vaut 1 000 cm³ = 1 L.'
    ]
  },
  exam: {
    exos: [
      'Conversions. Convertis : a) 4,35 m en cm. b) 2 750 g en kg. d) 2,5 L en cL. e) 2 h 50 min en minutes.',
      'Périmètres. Le terrain de jeu rectangulaire mesure 25 m sur 14 m. a) Calcule son périmètre. b) On l’entoure d’une corde en laissant une entrée de 2 m : longueur de corde ? d) Le rond central du terrain a un diamètre de 3 m : calcule sa circonférence. e) Un carré a le même périmètre que le terrain : quel est son côté ?',
      'Masse et capacité. La citerne de l’école contient 1 500 L d’eau. a) Quelle est la masse de cette eau en kg ? b) Exprime-la en tonnes. d) On remplit des seaux de 10 L : combien de seaux ? e) Chaque classe reçoit 12 seaux et il y a 11 classes : reste-t-il de l’eau ? Justifie.',
      'Aires. Un jardin rectangulaire mesure 9 m sur 6 m. a) Calcule son aire. b) On y trace une allée triangulaire de base 6 m et de hauteur 3 m : calcule son aire. d) Quelle surface reste-t-il pour les légumes ? e) Pourquoi l’aire se mesure-t-elle en m² et le périmètre en m ?',
      'Problème. Le car scolaire part à 6 h 40 pour un trajet de 2 h 45. a) À quelle heure arrive-t-il ? b) Il transporte 40 enfants pesant en moyenne 30 kg chacun : masse totale des enfants en kg, puis en tonnes. d) Le réservoir du car contient 90 L de gazole ; le moteur consomme 15 L par heure : quelle quantité consomme-t-il pendant le trajet de 2 h 45 ? Arrondis d’abord la durée à 3 h pour estimer. e) Reste-t-il plus ou moins de la moitié du réservoir ? Justifie par le calcul avec l’estimation de 3 h.'
    ],
    corr: [
      'a) 435 cm ; b) 2,75 kg ; d) 250 cL ; e) 170 min. Un point par item.',
      'a) (25 + 14) × 2 = 78 m ; b) 76 m ; d) 3 × 3,14 = 9,42 m ; e) 78 ÷ 4 = 19,5 m. Un point par item.',
      'a) 1 500 kg ; b) 1,5 t ; d) 150 seaux ; e) 11 × 12 = 132 seaux distribués, il reste 150 − 132 = 18 seaux soit 180 L : oui. Un point par item.',
      'a) 54 m² ; b) (6 × 3) ÷ 2 = 9 m² ; d) 54 − 9 = 45 m² ; e) l’aire compte des carrés d’un mètre (surface), le périmètre mesure une ligne (longueur). Un point par item.',
      'a) 6 h 40 + 2 h 45 = 8 h 85 = 9 h 25 ; b) 1 200 kg = 1,2 t ; d) environ 15 × 3 = 45 L ; e) 45 L = la moitié de 90 L : il reste environ la moitié du réservoir (un peu plus, car le trajet dure moins de 3 h). Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
