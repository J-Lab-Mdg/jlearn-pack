// UNITÉ 6 — TRAITEMENT DE DONNÉES (PE T7) : 11 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, dot, tableEl, box, arrow, seg, circle, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — données brutes
figs.u6f1 = (() => { const { s, y } = head('Des données brutes', ['Fruits préférés de 12 élèves, notés dans l’ordre des réponses :', 'difficile d’y voir clair !']);
  const words = ['mangue', 'letchi', 'banane', 'mangue', 'ananas', 'mangue', 'letchi', 'banane', 'mangue', 'letchi', 'mangue', 'ananas'];
  let b = '';
  words.forEach((w, i) => {
    const col = i % 4, row = Math.floor(i / 4);
    b += box(85 + col * 215, y + 20 + row * 75, 195, 58, w, row % 2 ? '#E8F5E9' : '#FDE7EF', row % 2 ? GREEN : PINK2, 22);
  });
  b += txt(500, y + 280, 'Combien préfèrent la mangue ? Il faut organiser !', 24, OCRE, 'bold', 'middle');
  return svg(1000, y + 320, s + b); })();
// S2 — feuille de comptage
figs.u6f2 = (() => { const { s, y } = head('La feuille de comptage', ['On lit la liste une seule fois et on trace un trait par réponse : |||| = 5.']);
  const rows = [['mangue', 5], ['letchi', 3], ['banane', 2], ['ananas', 2]];
  let b = '';
  rows.forEach(([name, n], i) => {
    const yy = y + 30 + i * 70;
    b += txt(120, yy + 32, name, 25, BLUE, 'bold');
    for (let k = 0; k < n; k++) {
      const xx = 340 + k * 26 + (k >= 4 ? 14 : 0);
      b += seg(xx, yy + 6, xx, yy + 44, k === 4 ? PINK2 : '#333', 3.5);
    }
    if (n === 5) b += seg(332, yy + 40, 450, yy + 10, PINK2, 3.5);
    b += txt(560, yy + 32, '→  ' + n, 25, GREEN, 'bold');
  });
  b += txt(720, y + 160, 'total : 12 ✓', 26, OCRE, 'bold');
  return svg(1000, y + 330, s + b); })();
// S3 — tableau des effectifs
figs.u6f3 = (() => { const { s, y } = head('Le tableau des effectifs', ['L’effectif d’une valeur est son nombre d’apparitions ; le total doit retomber sur 12.']);
  const data = [['Fruit', 'mangue', 'letchi', 'banane', 'ananas', 'Total'], ['Effectif', '5', '3', '2', '2', '12']];
  let b = tableEl(80, y + 30, [160, 140, 140, 140, 140, 120], 66, data);
  b += arrow(870, y + 230, 790, y + 175) + txt(870, y + 260, 'effectif total = somme', 21, PINK2, 'bold', 'end');
  return svg(1000, y + 290, s + b); })();
// S4 — fréquences
figs.u6f4 = (() => { const { s, y } = head('Du tableau aux fréquences', ['fréquence = effectif ÷ effectif total : pour la mangue, 5 ÷ 12 ≈ 0,42 soit 42 %.']);
  let b = box(80, y + 25, 250, 85, 'effectif : 5', undefined, BLUE, 26)
    + arrow(345, y + 67, 435, y + 67) + txt(390, y + 42, '÷ 12', 21, GREEN, 'bold', 'middle')
    + box(450, y + 25, 280, 85, '5/12 ≈ 0,42', '#E8F5E9', GREEN, 26)
    + arrow(745, y + 67, 800, y + 67) + box(812, y + 25, 165, 85, '42 %', '#FDE7EF', PINK2, 28);
  b += txt(500, y + 170, 'la somme de toutes les fréquences vaut toujours 1 (soit 100 %)', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 210, s + b); })();
// S5 — diagramme à bandes
figs.u6f5 = (() => { const { s, y } = head('Le diagramme à bandes', ['Une bande par valeur ; la hauteur de la bande est l’effectif.']);
  const base = y + 290, u = 42, x0 = 150;
  const data = [['mangue', 5, PINK2, '#FDE7EF'], ['letchi', 3, GREEN, '#E8F5E9'], ['banane', 2, OCRE, '#FFF3E0'], ['ananas', 2, BLUE, '#E3F2FD']];
  let b = seg(x0 - 40, base, x0 + 4 * 190, base, '#333', 3) + seg(x0 - 40, base, x0 - 40, y + 30, '#333', 3);
  for (let k = 1; k <= 5; k++) b += seg(x0 - 48, base - k * u, x0 - 32, base - k * u, '#333', 2) + txt(x0 - 58, base - k * u + 8, String(k), 20, '#333', 'normal', 'end');
  data.forEach(([name, n, c, f], i) => {
    const xx = x0 + i * 190;
    b += `<rect x="${xx}" y="${base - n * u}" width="110" height="${n * u}" fill="${f}" stroke="${c}" stroke-width="3"/>`
      + txt(xx + 55, base + 32, name, 22, c, 'bold', 'middle') + txt(xx + 55, base - n * u - 12, String(n), 23, c, 'bold', 'middle');
  });
  return svg(1000, y + 360, s + b); })();
// S6 — ligne brisée
figs.u6f6 = (() => { const { s, y } = head('Le diagramme à ligne brisée', ['Température à midi pendant 7 jours : la ligne montre l’évolution.']);
  const base = y + 270, x0 = 120, ux = 125, uy = 9;
  const temps = [22, 24, 23, 26, 28, 27, 25];
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  let b = seg(x0, base, x0 + 6 * ux + 40, base, '#333', 3) + seg(x0, base, x0, y + 30, '#333', 3);
  [20, 24, 28].forEach(t => { b += seg(x0 - 8, base - (t - 20) * uy * 2, x0 + 8, base - (t - 20) * uy * 2, '#333', 2) + txt(x0 - 16, base - (t - 20) * uy * 2 + 8, t + '°', 20, '#333', 'normal', 'end'); });
  let prev = null;
  temps.forEach((t, i) => {
    const px = x0 + i * ux, py = base - (t - 20) * uy * 2;
    if (prev) b += seg(prev[0], prev[1], px, py, PINK2, 3.5);
    prev = [px, py];
  });
  temps.forEach((t, i) => {
    const px = x0 + i * ux, py = base - (t - 20) * uy * 2;
    b += dot(px, py, 6, PINK2) + txt(px + (i === 0 ? 18 : 0), py - 16, String(t), 20, BLUE, 'bold', 'middle') + txt(px, base + 30, days[i], 21, '#333', 'bold', 'middle');
  });
  return svg(1000, y + 330, s + b); })();
// S7 — diagramme circulaire
figs.u6f7 = (() => { const { s, y } = head('Le diagramme circulaire', ['Chaque secteur est proportionnel à l’effectif : mangue 5/12 du disque, soit 150°.']);
  const cx = 300, cy = y + 170, r = 135;
  const parts = [[5, '#F8BBD0', PINK2, 'mangue 5'], [3, '#C8E6C9', GREEN, 'letchi 3'], [2, '#FFE0B2', OCRE, 'banane 2'], [2, '#BBDEFB', BLUE, 'ananas 2']];
  let a0 = -90, b = '';
  parts.forEach(([n, fill, c, lab], i) => {
    const a1 = a0 + n / 12 * 360;
    const x1 = cx + r * Math.cos(a0 * Math.PI / 180), y1 = cy + r * Math.sin(a0 * Math.PI / 180);
    const x2 = cx + r * Math.cos(a1 * Math.PI / 180), y2 = cy + r * Math.sin(a1 * Math.PI / 180);
    const large = (a1 - a0) > 180 ? 1 : 0;
    b += `<path d="M ${cx} ${cy} L ${x1.toFixed(1)} ${y1.toFixed(1)} A ${r} ${r} 0 ${large} 1 ${x2.toFixed(1)} ${y2.toFixed(1)} Z" fill="${fill}" stroke="white" stroke-width="3"/>`;
    const am = (a0 + a1) / 2 * Math.PI / 180;
    b += box(620, y + 45 + i * 72, 260, 56, lab, fill, c, 22);
    a0 = a1;
  });
  b += txt(cx, cy + r + 40, 'mangue : 5/12 × 360° = 150°', 23, PINK2, 'bold', 'middle');
  return svg(1000, y + 390, s + b); })();
// S8 — moyenne pondérée
figs.u6f8 = (() => { const { s, y } = head('La moyenne pondérée', ['Notes : 8 (coefficient 1), 12 (coefficient 2), 15 (coefficient 1).']);
  const data = [['Note', '8', '12', '15', 'Total'], ['Coefficient', '1', '2', '1', '4'], ['Note × coef', '8', '24', '15', '47']];
  let b = tableEl(100, y + 20, [210, 130, 130, 130, 130], 62, data);
  b += box(230, y + 240, 540, 85, 'moyenne = 47 ÷ 4 = 11,75', '#FDE7EF', PINK2, 27);
  return svg(1000, y + 370, s + b); })();
// S9 — probabilité du dé
figs.u6f9 = (() => { const { s, y } = head('La probabilité d’un événement', ['Obtenir un 6 avec un dé équilibré : 1 cas favorable sur 6 cas possibles, p = 1/6.']);
  const yy = y + 50, a = 80;
  let b = '';
  for (let k = 1; k <= 6; k++) {
    const xx = 80 + (k - 1) * 105;
    const hot = k === 6;
    b += `<rect x="${xx}" y="${yy}" width="${a}" height="${a}" rx="14" fill="${hot ? '#FDE7EF' : 'white'}" stroke="${hot ? PINK2 : BLUE}" stroke-width="3.5"/>`
      + txt(xx + a / 2, yy + a / 2 + 10, String(k), 30, hot ? PINK2 : BLUE, 'bold', 'middle');
  }
  b += txt(500, yy + a + 50, '1 face favorable sur 6 faces possibles', 24, GREEN, 'bold', 'middle')
    + txt(500, yy + a + 95, 'p(obtenir 6) = 1/6 ≈ 0,17', 27, PINK2, 'bold', 'middle');
  return svg(1000, y + 300, s + b); })();
// S10 — échelle de probabilité
figs.u6f10 = (() => { const { s, y } = head('L’échelle des probabilités', ['Toute probabilité est comprise entre 0 (impossible) et 1 (certain).']);
  const yy = y + 110, x0 = 110, x1 = 890;
  let b = seg(x0, yy, x1, yy, BLUE, 5);
  [[0, '0', 'impossible', PINK2], [0.5, '0,5', 'une chance sur deux', OCRE], [1, '1', 'certain', GREEN]].forEach(([p, lab, word, c]) => {
    const xx = x0 + p * (x1 - x0);
    b += seg(xx, yy - 14, xx, yy + 14, c, 4) + txt(xx, yy - 26, lab, 25, c, 'bold', 'middle') + txt(xx, yy + 46, word, 21, c, 'bold', 'middle');
  });
  const pd = x0 + (1 / 6) * (x1 - x0);
  b += dot(pd, yy, 8, BLUE) + txt(pd, yy - 60, 'p = 1/6', 22, BLUE, 'bold', 'middle') + arrow(pd, yy - 48, pd, yy - 18);
  return svg(1000, y + 220, s + b); })();
// S11 — arbre 2 pièces
figs.u6f11 = (() => { const { s, y } = head('L’arbre des possibles', ['On lance deux pièces : 4 résultats possibles — PP, PF, FP, FF.']);
  const x0 = 120, x1 = 420, x2 = 720, ym = y + 170;
  let b = dot(x0, ym, 7, '#333') + txt(x0 - 14, ym + 8, 'départ', 20, '#333', 'bold', 'end');
  const l1 = [['P', ym - 90, PINK2], ['F', ym + 90, GREEN]];
  l1.forEach(([c1, yy1, col1]) => {
    b += seg(x0, ym, x1, yy1, col1, 3) + dot(x1, yy1, 6, col1) + txt(x1 + 4, yy1 - 14, c1, 26, col1, 'bold', 'middle');
    [['P', -45, PINK2], ['F', 45, GREEN]].forEach(([c2, dy, col2]) => {
      const yy2 = yy1 + dy;
      b += seg(x1, yy1, x2, yy2, col2, 3) + dot(x2, yy2, 6, col2)
        + txt(x2 + 30, yy2 + 9, c1 + c2, 26, BLUE, 'bold');
    });
  });
  b += txt(780, ym + 8, 'p(PP) = 1/4', 24, OCRE, 'bold');
  return svg(1000, y + 350, s + b); })();

const S = [
  {
    t: 'Lire et interpréter des données brutes', comp: 'Traitement de données', theme: 'Lecture et interprétation des données brutes',
    goal: 'lire des données brutes et en tirer de premières informations',
    mat: 'Listes de données, enquête de classe, cahier, ardoises',
    revQ: 'Calcule 5 + 3 + 2 + 2.',
    revRA: '12.',
    situation: 'La maîtresse demande à 12 élèves leur fruit préféré et note les réponses dans l’ordre : mangue, letchi, banane, mangue, ananas… Qui a gagné ? Dans ce désordre, impossible de répondre du premier coup d’œil !',
    def: 'Des données brutes sont des informations recueillies telles quelles, dans l’ordre où elles arrivent, sans aucun classement. Les lire, c’est repérer la nature des données, leur nombre et quelques faits simples.',
    autrement: 'les données brutes, c’est la récolte en vrac — avant tout rangement.',
    concept: 'Devant une liste brute, on se pose trois questions : de quoi parle-t-on (le caractère étudié : fruit préféré) ? combien de données (l’effectif total : 12) ? quelles valeurs apparaissent (mangue, letchi, banane, ananas) ? On peut déjà repérer une valeur fréquente ou rare, mais compter précisément reste pénible : c’est pourquoi on apprendra à organiser.',
    synthese: 'des données brutes sont des informations non classées ; on identifie le caractère étudié, l’effectif total et les valeurs possibles avant tout traitement.',
    method: ['Identifier le caractère étudié (la question posée).', 'Compter le nombre total de données recueillies.', 'Lister les valeurs différentes qui apparaissent.'],
    exemple: 'Liste des fruits : caractère = fruit préféré ; effectif total = 12 ; valeurs = mangue, letchi, banane, ananas.',
    erreur: 'Confondre le nombre de valeurs différentes (4 fruits) avec l’effectif total (12 réponses) : ce sont deux nombres différents !',
    saistu: 'L’INSTAT, l’institut de la statistique de Madagascar, recueille les réponses de millions de personnes lors des recensements : des montagnes de données brutes qu’il faut ensuite organiser, exactement comme ta liste de fruits !',
    exos: ['Voici les pointures de 10 élèves : 36, 38, 37, 36, 39, 36, 38, 37, 36, 38. a) Quel est le caractère étudié ? b) Quel est l’effectif total ? d) Quelles valeurs apparaissent ? e) Quelle valeur semble la plus fréquente ?',
      'Réponses à « Combien de frères et sœurs ? » : 2, 1, 3, 2, 0, 2, 4, 1, 2, 3, 2, 1. a) Effectif total ? b) Plus petite valeur ? d) Plus grande valeur ? e) Combien d’élèves ont répondu 2 ?',
      'Moyens de transport de 8 élèves : à pied, bus, à pied, vélo, à pied, bus, à pied, à pied. a) Caractère étudié ? b) Valeurs possibles ? d) Quelle valeur domine ? e) Pourquoi dit-on que ces données sont « brutes » ?'],
    corr: ['a) la pointure ; b) 10 ; d) 36, 37, 38, 39 ; e) 36 (4 fois).',
      'a) 12 ; b) 0 ; d) 4 ; e) 5 élèves.',
      'a) le moyen de transport ; b) à pied, bus, vélo ; d) à pied (5 fois) ; e) elles sont notées dans l’ordre d’arrivée, sans classement.'],
    fig: 'u6f1'
  },
  {
    t: 'Organiser des données recueillies', comp: 'Traitement de données', theme: 'Organisation des données',
    goal: 'organiser des données recueillies à l’aide d’une feuille de comptage',
    mat: 'Questionnaires, feuilles de comptage, cahier, ardoises',
    revQ: 'Dans la liste 36, 38, 37, 36, 39, 36 : combien de fois 36 ?',
    revRA: '3 fois.',
    situation: 'Pour compter les fruits sans se tromper, Lova a une astuce : elle lit la liste UNE seule fois et trace un petit trait à côté du bon fruit à chaque réponse. À la fin, il suffit de compter les traits !',
    def: 'Organiser des données, c’est les classer pour les rendre lisibles. La feuille de comptage attribue une ligne à chaque valeur : on y trace un trait par donnée lue, en groupant les traits par paquets de cinq.',
    autrement: 'un trait par réponse, des paquets de cinq, et le compte est bon.',
    concept: 'La méthode des traits évite de relire la liste plusieurs fois : chaque donnée est lue une seule fois et marquée aussitôt. Le cinquième trait barre les quatre premiers, ce qui forme des paquets faciles à compter : deux paquets et trois traits = 13. On vérifie toujours que la somme des comptages redonne l’effectif total.',
    synthese: 'la feuille de comptage classe les données en une seule lecture : un trait par donnée, des paquets de cinq, et une vérification du total.',
    method: ['Préparer une ligne par valeur possible.', 'Lire les données une à une et tracer un trait sur la bonne ligne (5e trait en travers).', 'Compter les traits de chaque ligne et vérifier que la somme donne l’effectif total.'],
    exemple: 'Fruits : mangue |||| (5), letchi ||| (3), banane || (2), ananas || (2) ; total 5 + 3 + 2 + 2 = 12 ✓.',
    erreur: 'Relire la liste pour chaque valeur : on finit par compter certaines réponses deux fois et d’autres jamais. Une seule lecture suffit !',
    saistu: 'Cette méthode des « bâtons » est utilisée dans les bureaux de vote du monde entier pendant les dépouillements : un trait par bulletin, des paquets de cinq — simple, rapide et vérifiable par tous.',
    exos: ['Avec la liste de pointures 36, 38, 37, 36, 39, 36, 38, 37, 36, 38 : a) prépare les lignes nécessaires ; b) fais le comptage par traits ; d) écris les effectifs obtenus ; e) vérifie le total.',
      'Lancers d’un dé : 2, 5, 2, 6, 1, 2, 3, 5, 6, 2, 4, 1, 2, 6, 3. a) Combien de lignes faut-il ? b) Compte les apparitions du 2. d) Compte celles du 6. e) Vérifie l’effectif total.',
      'a) Pose à 10 camarades la question : « thé, café ou lait ? » b) Note les réponses brutes. d) Fais la feuille de comptage. e) Quelle boisson gagne dans ta classe ?'],
    corr: ['a) lignes 36, 37, 38, 39 ; b) traits : 36 → ||||, 37 → ||, 38 → |||, 39 → | ; d) 4, 2, 3, 1 ; e) 4 + 2 + 3 + 1 = 10 ✓.',
      'a) 6 lignes (valeurs 1 à 6) ; b) 5 fois ; d) 3 fois ; e) 5 + 2 + 2 + 1 + 2 + 3 = 15 ✓.',
      'b), d), e) : selon l’enquête ; vérifier que la somme des effectifs vaut 10.'],
    fig: 'u6f2'
  },
  {
    t: 'Construire un tableau des effectifs', comp: 'Traitement de données', theme: 'Tableau des effectifs',
    goal: 'construire et exploiter un tableau des effectifs avec sa ligne de total',
    mat: 'Feuilles de comptage, règle, cahier, ardoises',
    revQ: 'Compte : |||| || représente combien ?',
    revRA: '5 + 2 = 7.',
    situation: 'La feuille de comptage de Lova est pleine de traits : pratique pour compter, pas pour présenter ! Pour afficher les résultats au tableau de la classe, il faut un vrai tableau bien net.',
    def: 'L’effectif d’une valeur est le nombre de fois où cette valeur apparaît dans les données. Le tableau des effectifs présente chaque valeur avec son effectif ; l’effectif total est la somme de tous les effectifs.',
    autrement: 'le tableau des effectifs, c’est la feuille de comptage mise au propre, avec le total au bout.',
    concept: 'Le tableau comporte une ligne (ou colonne) pour les valeurs et une pour les effectifs, plus une case Total. Ce total est un garde-fou : s’il ne redonne pas le nombre de données de départ, une erreur s’est glissée quelque part. Le tableau permet déjà de répondre vite : valeur la plus fréquente (le mode), valeur la plus rare, comparaisons.',
    synthese: 'le tableau des effectifs associe chaque valeur à son effectif, et l’effectif total — somme de la ligne — doit égaler le nombre de données.',
    method: ['Tracer le tableau : valeurs sur la première ligne, effectifs sur la seconde.', 'Reporter les comptages de la feuille de traits.', 'Calculer le total et vérifier qu’il égale le nombre de données recueillies.'],
    exemple: 'Fruits : mangue 5, letchi 3, banane 2, ananas 2, Total 12.',
    erreur: 'Oublier la case Total ou y écrire autre chose que la somme : le total est la vérification du tableau, pas une donnée de plus.',
    saistu: 'Le mot « effectif » vient du vocabulaire militaire : l’effectif d’une armée était le nombre de ses soldats. Les statisticiens l’ont adopté pour compter… tout le reste !',
    exos: ['Avec les pointures (36 → 4 ; 37 → 2 ; 38 → 3 ; 39 → 1) : a) construis le tableau des effectifs ; b) quel est l’effectif total ? d) quelle est la pointure la plus fréquente ? e) la moins fréquente ?',
      'Tableau des sports préférés : foot 9, basket 5, course 4, natation 2. a) Effectif total ? b) Sport le plus choisi ? d) Combien d’élèves de plus pour le foot que pour la course ? e) Quelle part de la classe préfère le basket (fraction) ?',
      'Dans un tableau, on lit : riz 14, manioc 6, maïs …, Total 25. a) Trouve l’effectif manquant. b) Explique ta méthode. d) Quel aliment domine ? e) Vérifie ton tableau complet.'],
    corr: ['a) tableau 36|37|38|39 avec 4|2|3|1 ; b) 10 ; d) 36 ; e) 39.',
      'a) 20 ; b) le foot ; d) 9 − 4 = 5 ; e) 5/20 = 1/4.',
      'a) 25 − 14 − 6 = 5 ; b) le total moins les effectifs connus ; d) le riz ; e) 14 + 6 + 5 = 25 ✓.'],
    fig: 'u6f3'
  },
  {
    t: 'Calculer des fréquences', comp: 'Traitement de données', theme: 'Tableau des fréquences',
    goal: 'calculer la fréquence d’une valeur et l’exprimer en fraction, en décimal ou en pourcentage',
    mat: 'Tableaux d’effectifs, calculatrice éventuelle, cahier',
    revQ: 'Dans la classe, 5 élèves sur 12 préfèrent la mangue. Écris cette part en fraction.',
    revRA: '5/12.',
    situation: 'La classe de Lova (12 élèves) donne 5 voix à la mangue ; la classe voisine (30 élèves) en donne 9. Qui aime le plus la mangue ? Comparer 5 et 9 ne suffit pas : les classes n’ont pas la même taille !',
    def: 'La fréquence d’une valeur est le quotient de son effectif par l’effectif total : fréquence = effectif ÷ effectif total. Elle s’exprime en fraction, en nombre décimal ou en pourcentage, et la somme des fréquences vaut toujours 1 (soit 100 %).',
    autrement: 'la fréquence, c’est la part du total que représente une valeur — comparable d’un groupe à l’autre.',
    concept: 'Les fréquences ramènent tous les groupes à la même échelle : 5/12 ≈ 0,42 = 42 % pour Lova, 9/30 = 0,30 = 30 % pour les voisins — la mangue est proportionnellement plus aimée chez Lova ! Pour passer au pourcentage, on multiplie la fréquence décimale par 100. La somme de toutes les fréquences d’un tableau fait toujours 1 : c’est la vérification.',
    synthese: 'fréquence = effectif ÷ effectif total ; elle s’écrit en fraction, décimal ou pourcentage, et la somme des fréquences vaut 1.',
    method: ['Diviser l’effectif de la valeur par l’effectif total.', 'Convertir si besoin en pourcentage (× 100).', 'Vérifier que la somme des fréquences vaut 1 (ou 100 %).'],
    exemple: 'Mangue : 5 ÷ 12 ≈ 0,42 = 42 % ; letchi : 3 ÷ 12 = 0,25 = 25 %.',
    erreur: 'Comparer des effectifs de groupes de tailles différentes : 9 > 5 ne veut pas dire « plus populaire » — seules les fréquences se comparent !',
    saistu: 'Les sondages d’opinion n’interrogent qu’un millier de personnes mais annoncent des pourcentages pour tout un pays : ce sont des fréquences, calculées exactement comme les tiennes, qui rendent la comparaison possible.',
    exos: ['Effectifs : mangue 5, letchi 3, banane 2, ananas 2 (total 12). a) Fréquence de la mangue en fraction. b) En décimal (arrondi au centième). d) Fréquence du letchi en pourcentage. e) Vérifie que la somme des quatre fréquences vaut 1.',
      'Sur 25 élèves, 10 viennent à pied. a) Fréquence en fraction. b) En décimal. d) En pourcentage. e) Quelle est la fréquence de ceux qui ne viennent PAS à pied ?',
      'Classe A : 5 voix sur 12 pour la mangue ; classe B : 9 voix sur 30. a) Fréquence en A (%). b) Fréquence en B (%). d) Où la mangue est-elle la plus populaire ? e) Pourquoi les effectifs seuls ne suffisaient-ils pas ?'],
    corr: ['a) 5/12 ; b) 0,42 ; d) 3/12 = 25 % ; e) 5/12 + 3/12 + 2/12 + 2/12 = 12/12 = 1 ✓.',
      'a) 10/25 = 2/5 ; b) 0,4 ; d) 40 % ; e) 1 − 0,4 = 0,6 soit 60 %.',
      'a) ≈ 42 % ; b) 30 % ; d) en classe A ; e) les deux classes n’ont pas le même effectif total.'],
    fig: 'u6f4'
  },
  {
    t: 'Construire un diagramme à bandes', comp: 'Traitement de données', theme: 'Diagramme à bandes',
    goal: 'représenter un tableau d’effectifs par un diagramme à bandes',
    mat: 'Papier quadrillé, règle, crayons de couleur, cahier',
    revQ: 'Quelle est la fréquence de 6 élèves sur 24 ?',
    revRA: '6/24 = 1/4 = 25 %.',
    situation: 'Pour le panneau du fond de la classe, un tableau de chiffres n’attire pas l’œil. Lova dessine des bandes : la plus haute saute au visage — la mangue gagne, tout le monde le voit en une seconde !',
    def: 'Un diagramme à bandes représente chaque valeur par une bande (un rectangle) dont la hauteur est proportionnelle à l’effectif. Les bandes ont toutes la même largeur et sont régulièrement espacées ; un axe gradué permet de lire les effectifs.',
    autrement: 'une bande par valeur, et plus l’effectif est grand, plus la bande monte.',
    concept: 'La construction exige trois soins : choisir une graduation régulière (ici 1 carreau = 1 élève), donner la même largeur à toutes les bandes, et écrire les noms sous les bandes. La lecture est alors immédiate : la bande la plus haute donne le mode, et les comparaisons se font à l’œil. À l’inverse, savoir LIRE un diagramme, c’est retrouver le tableau d’effectifs à partir des hauteurs.',
    synthese: 'dans un diagramme à bandes, la hauteur de chaque bande est proportionnelle à l’effectif, avec des bandes de même largeur sur un axe gradué.',
    method: ['Tracer deux axes : valeurs en bas, effectifs à gauche, avec une graduation régulière.', 'Dessiner pour chaque valeur une bande de même largeur, à la hauteur de son effectif.', 'Écrire titre, noms des valeurs et graduations pour que le diagramme se lise seul.'],
    exemple: 'Fruits : bandes de hauteurs 5, 3, 2, 2 carreaux — la mangue domine au premier regard.',
    erreur: 'Des bandes de largeurs différentes ou une graduation irrégulière : l’œil compare alors des surfaces trompeuses au lieu des hauteurs.',
    saistu: 'L’Écossais William Playfair a inventé le diagramme à bandes en 1786 pour rendre les chiffres du commerce « visibles d’un coup d’œil » : plus de deux siècles après, journaux et écrans en sont remplis !',
    exos: ['Avec le tableau des fruits (5, 3, 2, 2) : a) choisis la graduation ; b) trace les axes ; d) dessine les quatre bandes ; e) quelle bande est la plus haute ?',
      'Le diagramme d’une autre classe montre : riz 8 carreaux, mofo 6, brèdes 4, autres 2 (1 carreau = 1 élève). a) Dresse le tableau des effectifs. b) Effectif total ? d) Quel est le mode ? e) Combien d’élèves de plus pour le riz que pour les brèdes ?',
      'Sports : foot 12, basket 6, course 9, natation 3. a) Avec 1 carreau = 3 élèves, quelle hauteur pour chaque bande ? b) Pourquoi choisir 3 et non 1 ? d) Trace le diagramme. e) Classe les sports du plus au moins choisi.'],
    corr: ['a) 1 carreau = 1 élève ; b) axes valeurs/effectifs ; d) hauteurs 5, 3, 2, 2 ; e) la mangue.',
      'a) riz 8, mofo 6, brèdes 4, autres 2 ; b) 20 ; d) le riz ; e) 4.',
      'a) 4, 2, 3, 1 carreaux ; b) les bandes resteraient trop hautes avec 1 carreau = 1 élève ; d) diagramme à 4 bandes ; e) foot, course, basket, natation.'],
    fig: 'u6f5'
  },
  {
    t: 'Construire un diagramme à ligne brisée', comp: 'Traitement de données', theme: 'Diagramme à ligne brisée',
    goal: 'représenter l’évolution d’une grandeur par un diagramme à ligne brisée',
    mat: 'Papier quadrillé, règle, relevés de températures, cahier',
    revQ: 'Dans un diagramme à bandes, que représente la hauteur d’une bande ?',
    revRA: 'L’effectif de la valeur.',
    situation: 'Naina relève la température à midi chaque jour de la semaine : 22°, 24°, 23°, 26°, 28°, 27°, 25°. Monte-t-elle ? Descend-elle ? Des bandes ne montrent pas bien le mouvement… il faut relier les points !',
    def: 'Un diagramme à ligne brisée représente l’évolution d’une grandeur dans le temps : chaque relevé devient un point (temps en abscisse, valeur en ordonnée) et les points successifs sont reliés par des segments.',
    autrement: 'un point par relevé, des segments pour les relier : la ligne raconte l’histoire — ça monte, ça descend.',
    concept: 'La ligne brisée convient aux données ordonnées dans le temps (jours, mois, années) : la pente des segments montre le sens et la vitesse de l’évolution — segment qui monte = hausse, qui descend = baisse, horizontal = stabilité. On repère d’un coup d’œil le maximum (vendredi, 28°) et le minimum (lundi, 22°). Pour des catégories sans ordre (fruits, sports), la ligne brisée n’a aucun sens : on garde les bandes.',
    synthese: 'la ligne brisée relie des points (temps ; valeur) pour montrer une évolution : montée, baisse, maximum et minimum se lisent sur la ligne.',
    method: ['Graduer l’axe du temps en abscisse et la grandeur en ordonnée.', 'Placer un point par relevé.', 'Relier les points dans l’ordre du temps et lire les variations.'],
    exemple: 'Températures 22, 24, 23, 26, 28, 27, 25 : maximum 28° vendredi, minimum 22° lundi, forte hausse de jeudi à vendredi.',
    erreur: 'Relier des points qui ne se suivent pas dans le temps, ou utiliser la ligne brisée pour des catégories (fruits !) : la ligne suppose un ordre.',
    saistu: 'Les stations de la météo malagasy tracent des lignes brisées de température depuis des dizaines d’années : mises bout à bout, elles permettent de voir le climat changer lentement sous nos yeux.',
    exos: ['Avec les températures 22, 24, 23, 26, 28, 27, 25 : a) quel jour fait-il le plus chaud ? b) le plus frais ? d) entre quels jours la hausse est-elle la plus forte ? e) la température baisse-t-elle en fin de semaine ?',
      'Ventes de mofo d’Ivola du lundi au vendredi : 30, 45, 40, 50, 65. a) Place les points. b) Relie-les. d) Quel jour vend-elle le plus ? e) Décris l’évolution générale.',
      'a) Relève la température (ou le nombre d’absents) chaque jour pendant une semaine. b) Construis la ligne brisée. d) Indique maximum et minimum. e) Écris une phrase décrivant l’évolution.'],
    corr: ['a) vendredi (28°) ; b) lundi (22°) ; d) de jeudi à vendredi (+2… non : de mercredi 23° à jeudi 26°, +3°) ; e) oui, de 28° à 25°.',
      'a) et b) ligne par les points (30, 45, 40, 50, 65) ; d) vendredi ; e) globalement en hausse malgré le creux de mercredi.',
      'b), d), e) : selon les relevés de l’élève ; vérifier l’ordre du temps en abscisse.'],
    fig: 'u6f6'
  },
  {
    t: 'Construire un diagramme circulaire', comp: 'Traitement de données', theme: 'Diagramme circulaire ou semi-circulaire',
    goal: 'représenter des effectifs par un diagramme circulaire aux secteurs proportionnels',
    mat: 'Compas, rapporteur, crayons de couleur, cahier',
    revQ: 'Combien de degrés dans un tour complet ? Dans un demi-tour ?',
    revRA: '360° ; 180°.',
    situation: 'Pour montrer les parts du gâteau électoral des fruits, Lova veut un… camembert ! Chaque fruit aura sa part du disque : grande part pour la mangue, petites parts pour banane et ananas. Mais quel angle pour chaque part ?',
    def: 'Dans un diagramme circulaire, chaque valeur est représentée par un secteur dont l’angle est proportionnel à l’effectif : angle = (effectif ÷ effectif total) × 360°. Dans un diagramme semi-circulaire, on remplace 360° par 180°.',
    autrement: 'le disque entier représente le total ; chaque valeur reçoit sa juste part du tour.',
    concept: 'Le calcul des angles est une application directe de la proportionnalité : la mangue pèse 5/12 du total, donc 5/12 × 360° = 150°. On vérifie que la somme des angles fait 360° (ou 180° pour le demi-disque). La construction se fait au compas et au rapporteur, secteur après secteur. Le circulaire montre les parts du total mieux que tout autre diagramme — mais il cache les effectifs : on écrit souvent les nombres sur les secteurs.',
    synthese: 'angle du secteur = (effectif ÷ total) × 360° ; la somme des angles d’un diagramme circulaire vaut 360°.',
    method: ['Calculer l’angle de chaque valeur : (effectif ÷ total) × 360° (ou × 180°).', 'Vérifier que la somme des angles fait 360° (ou 180°).', 'Tracer le cercle au compas puis reporter les angles au rapporteur.'],
    exemple: 'Mangue : 5/12 × 360° = 150° ; letchi : 90° ; banane : 60° ; ananas : 60° ; total 360° ✓.',
    erreur: 'Prendre l’effectif comme angle (5° pour la mangue !) : il faut toujours passer par la proportion effectif/total.',
    saistu: 'C’est l’infirmière anglaise Florence Nightingale qui a popularisé les diagrammes circulaires vers 1858 : ses « camemberts » ont convaincu la reine Victoria de réformer les hôpitaux — un dessin a sauvé des milliers de vies !',
    exos: ['Avec les fruits (5, 3, 2, 2 sur 12) : a) calcule l’angle de la mangue ; b) celui du letchi ; d) ceux de la banane et de l’ananas ; e) vérifie la somme.',
      'Budget d’une famille : nourriture 1/2, loyer 1/4, transport 1/8, reste 1/8. a) Angle de la nourriture ? b) Du loyer ? d) Du transport ? e) Trace le diagramme circulaire.',
      'Sur un diagramme semi-circulaire (180°), le secteur « riz » mesure 90° pour 40 agriculteurs au total. a) Quelle fraction du total ? b) Combien d’agriculteurs cultivent le riz ? d) Quel angle pour 10 agriculteurs ? e) Pourquoi 180° et non 360° ici ?'],
    corr: ['a) 150° ; b) 3/12 × 360 = 90° ; d) 60° et 60° ; e) 150 + 90 + 60 + 60 = 360° ✓.',
      'a) 180° ; b) 90° ; d) 45° ; e) quatre secteurs de 180°, 90°, 45°, 45°.',
      'a) 90/180 = 1/2 ; b) 20 ; d) 10/40 × 180 = 45° ; e) c’est un diagramme SEMI-circulaire : le total correspond à un demi-tour.'],
    fig: 'u6f7'
  },
  {
    t: 'Calculer une moyenne simple et pondérée', comp: 'Traitement de données', theme: 'Moyenne simple ou pondérée',
    goal: 'calculer une moyenne simple et une moyenne pondérée par les effectifs ou les coefficients',
    mat: 'Relevés de notes, calculatrice éventuelle, cahier',
    revQ: 'Calcule (8 + 12 + 16) ÷ 3.',
    revRA: '36 ÷ 3 = 12.',
    situation: 'Hery a eu 8, 12 et 15. « Ma moyenne est (8 + 12 + 15) ÷ 3 ≈ 11,7 », dit-il. « Pas si vite, répond le professeur : le 12 est un devoir coefficient 2 ! » La moyenne change-t-elle ?',
    def: 'La moyenne simple de plusieurs valeurs est leur somme divisée par leur nombre. La moyenne pondérée tient compte des coefficients (ou des effectifs) : on divise la somme des produits valeur × coefficient par la somme des coefficients.',
    autrement: 'moyenne simple : tout le monde compte pareil ; moyenne pondérée : certaines valeurs comptent double ou triple.',
    concept: 'Pour Hery : (8 × 1 + 12 × 2 + 15 × 1) ÷ (1 + 2 + 1) = 47 ÷ 4 = 11,75. La moyenne pondérée sert aussi avec un tableau d’effectifs : si 4 élèves ont 10 et 6 élèves ont 15, la moyenne de la classe est (10 × 4 + 15 × 6) ÷ 10 = 13 — et non (10 + 15) ÷ 2 = 12,5 ! La moyenne se situe toujours entre la plus petite et la plus grande valeur : bon réflexe de vérification.',
    synthese: 'moyenne pondérée = somme des (valeur × coefficient) ÷ somme des coefficients ; la moyenne simple en est le cas où tous les coefficients valent 1.',
    method: ['Multiplier chaque valeur par son coefficient (ou effectif).', 'Additionner ces produits, puis additionner les coefficients.', 'Diviser la première somme par la seconde et vérifier que le résultat est entre le min et le max.'],
    exemple: 'Notes 8 (coef 1), 12 (coef 2), 15 (coef 1) : moyenne = 47 ÷ 4 = 11,75.',
    erreur: 'Diviser par le nombre de valeurs au lieu de la somme des coefficients : avec les coefficients 1, 2, 1 on divise par 4, pas par 3 !',
    saistu: 'Ta moyenne trimestrielle est une moyenne pondérée : les devoirs surveillés comptent souvent coefficient 2 ou 3. Deux élèves avec les mêmes notes peuvent avoir des moyennes différentes si les coefficients diffèrent !',
    exos: ['Calcule la moyenne simple : a) 10 et 14 ; b) 8, 11, 17 ; d) 6, 9, 12, 13 ; e) 7,5 et 12,5.',
      'Notes de Vero : 9 (coef 1), 13 (coef 3), 16 (coef 1). a) Calcule les produits note × coef. b) Somme des produits ? d) Somme des coefficients ? e) Moyenne pondérée ?',
      'Dans une classe, 5 élèves ont 8, 10 élèves ont 12, 5 élèves ont 16. a) Effectif total ? b) Somme de toutes les notes ? d) Moyenne de la classe ? e) Pourquoi (8 + 12 + 16) ÷ 3 = 12 est-il faux ici ?'],
    corr: ['a) 12 ; b) 36 ÷ 3 = 12 ; d) 40 ÷ 4 = 10 ; e) 10.',
      'a) 9, 39, 16 ; b) 64 ; d) 5 ; e) 64 ÷ 5 = 12,8.',
      'a) 20 ; b) 40 + 120 + 80 = 240 ; d) 240 ÷ 20 = 12 ; e) les notes n’ont pas le même effectif — ici le résultat tombe juste par hasard sur 12, mais la méthode sans pondération est fausse.'],
    fig: 'u6f8'
  },
  {
    t: 'Découvrir la probabilité d’un événement', comp: 'Traitement de données', theme: 'Cas favorables sur cas possibles',
    goal: 'calculer la probabilité d’un événement simple comme quotient des cas favorables par les cas possibles',
    mat: 'Dés, pièces de monnaie, jetons colorés, cahier',
    revQ: 'Un dé a combien de faces ? Numérotées comment ?',
    revRA: '6 faces, de 1 à 6.',
    situation: 'Avant de lancer le dé, Naina parie sur le 6. « Tu as une chance sur six ! » lance Lova. Une chance sur six : voilà une phrase que les mathématiques savent écrire avec précision.',
    def: 'Quand tous les résultats d’une expérience ont la même chance de se produire, la probabilité d’un événement est : p = nombre de cas favorables ÷ nombre de cas possibles.',
    autrement: 'la probabilité mesure la chance qu’un événement arrive : favorables sur possibles.',
    concept: 'Pour le dé équilibré, les 6 faces sont équiprobables : p(6) = 1/6, p(nombre pair) = 3/6 = 1/2, p(moins de 7) = 6/6 = 1. La probabilité se note en fraction, en décimal ou en pourcentage. Attention : elle ne prédit pas UN lancer — elle annonce ce qui se passe en moyenne sur un grand nombre de lancers : sur 600 lancers, le 6 sortira environ 100 fois.',
    synthese: 'pour des résultats équiprobables, p(événement) = cas favorables ÷ cas possibles, nombre toujours compris entre 0 et 1.',
    method: ['Compter tous les résultats possibles de l’expérience.', 'Compter les résultats favorables à l’événement.', 'Diviser : favorables ÷ possibles, puis simplifier la fraction.'],
    exemple: 'p(6) = 1/6 ; p(pair) = 3/6 = 1/2 ; p(1 ou 2) = 2/6 = 1/3.',
    erreur: 'Croire qu’après cinq lancers sans 6, le 6 « doit » sortir : le dé n’a pas de mémoire, chaque lancer garde p = 1/6 !',
    saistu: 'La théorie des probabilités est née en 1654 d’un échange de lettres entre Pascal et Fermat… à propos d’un problème de jeu de dés posé par un joueur professionnel, le chevalier de Méré !',
    exos: ['On lance un dé équilibré. a) p(obtenir 3) ? b) p(obtenir un nombre pair) ? d) p(obtenir plus de 4) ? e) p(obtenir 7) ?',
      'Un sac contient 3 jetons rouges, 2 verts et 5 bleus. a) Combien de jetons en tout ? b) p(rouge) ? d) p(vert) ? e) p(rouge ou vert) ?',
      'On tire une lettre au hasard du mot MADAGASIKARA. a) Combien de lettres en tout ? b) p(tirer un A) ? d) p(tirer un M) ? e) p(tirer une consonne) ?'],
    corr: ['a) 1/6 ; b) 3/6 = 1/2 ; d) 2/6 = 1/3 ; e) 0 : impossible.',
      'a) 10 ; b) 3/10 ; d) 2/10 = 1/5 ; e) 5/10 = 1/2.',
      'a) 12 ; b) 5/12 (cinq A) ; d) 1/12 ; e) consonnes M, D, G, S, K, R : 6/12 = 1/2.'],
    fig: 'u6f9'
  },
  {
    t: 'Utiliser l’échelle de probabilité', comp: 'Traitement de données', theme: 'Échelle de 0 à 1 ; probabilité théorique et expérimentale',
    goal: 'situer des probabilités sur l’échelle de 0 à 1 et distinguer probabilité théorique et fréquence observée',
    mat: 'Dés, pièces, droite graduée de 0 à 1, cahier',
    revQ: 'Calcule p(pair) pour un dé.',
    revRA: '3/6 = 1/2.',
    situation: '« Il est certain que le soleil se lèvera demain ; il est impossible qu’un dé affiche 7 ; pour pile, c’est moitié-moitié. » Certain, impossible, une chance sur deux : plaçons tout cela sur une même règle graduée !',
    def: 'Toute probabilité est un nombre compris entre 0 et 1 : p = 0 pour un événement impossible, p = 1 pour un événement certain. La probabilité théorique se calcule par le quotient favorable/possible ; la fréquence expérimentale s’observe en répétant réellement l’expérience, et elle se rapproche de la probabilité théorique quand le nombre d’essais grandit.',
    autrement: 'l’échelle va de 0 (jamais) à 1 (toujours) ; plus on répète l’expérience, plus l’observé colle au calculé.',
    concept: 'Sur l’échelle, 0,5 marque l’équilibre « une chance sur deux » ; en dessous, l’événement est plutôt improbable, au-dessus plutôt probable. Si on lance un dé 60 fois et qu’on obtient 12 fois le 6, la fréquence expérimentale est 12/60 = 0,2, proche du 1/6 ≈ 0,17 théorique — l’écart diminue avec des centaines de lancers. Une probabilité de 1,2 ou de −0,3 est impossible : hors de l’échelle !',
    synthese: '0 ≤ p ≤ 1 : impossible en 0, certain en 1 ; la fréquence observée se rapproche de la probabilité théorique quand on multiplie les essais.',
    method: ['Tracer l’échelle de 0 à 1 et placer les repères 0, 0,5 et 1.', 'Calculer la probabilité et la placer sur l’échelle.', 'Comparer avec la fréquence observée après de nombreux essais.'],
    exemple: 'p(7 au dé) = 0 ; p(pile) = 0,5 ; p(nombre de 1 à 6) = 1 ; p(6) = 1/6 ≈ 0,17, entre 0 et 0,5.',
    erreur: 'Annoncer une probabilité supérieure à 1 ou négative : toute probabilité vit entre 0 et 1, sans exception.',
    saistu: 'Les compagnies d’assurance vivent de cette échelle : elles estiment la probabilité des accidents à partir de millions d’observations — la fréquence expérimentale à très grande échelle — pour fixer le prix des contrats.',
    exos: ['Place sur l’échelle de 0 à 1 : a) p(le dé affiche 7) ; b) p(pile avec une pièce) ; d) p(le dé affiche un nombre de 1 à 6) ; e) p(6) ≈ 0,17.',
      'Dis si c’est possible et pourquoi : a) p = 0,3 ; b) p = 1 ; d) p = 1,5 ; e) p = 0.',
      'On lance une pièce 100 fois : 54 piles. a) Fréquence expérimentale de pile ? b) Probabilité théorique ? d) L’écart est-il choquant ? e) Que se passe-t-il si on lance 10 000 fois ?'],
    corr: ['a) en 0 ; b) en 0,5 ; d) en 1 ; e) entre 0 et 0,5, près de 0,2.',
      'a) possible ; b) possible : événement certain ; d) impossible : p > 1 ; e) possible : événement impossible.',
      'a) 54/100 = 0,54 ; b) 0,5 ; d) non, petit écart normal ; e) la fréquence se rapprochera encore de 0,5.'],
    fig: 'u6f10'
  },
  {
    t: 'Utiliser un arbre et un tableau de probabilités', comp: 'Traitement de données', theme: 'Diagramme à arbre ; tableau de probabilité',
    goal: 'dénombrer les résultats d’une expérience à deux étapes avec un arbre ou un tableau',
    mat: 'Pièces de monnaie, dés, cahier, ardoises',
    revQ: 'p(pile) pour une pièce équilibrée ?',
    revRA: '1/2.',
    situation: 'Naina lance DEUX pièces. « Pile-pile, pile-face, face-face : trois cas, donc p(deux piles) = 1/3 ! » annonce-t-il. Lova fronce les sourcils : et si on dessinait toutes les branches pour vérifier ?',
    def: 'Un arbre des possibles représente une expérience à plusieurs étapes : chaque étape fait pousser des branches, et chaque chemin complet de la racine à une feuille est un résultat possible. Un tableau à double entrée rend le même service pour deux étapes.',
    autrement: 'l’arbre déplie l’expérience branche par branche : on compte les chemins au lieu de deviner.',
    concept: 'Pour deux pièces, l’arbre donne 2 × 2 = 4 chemins : PP, PF, FP, FF — tous équiprobables. Naina oubliait que « pile-face » arrive de DEUX façons (PF et FP) : p(deux piles) = 1/4 et p(une pile et une face) = 2/4 = 1/2. Le tableau à double entrée (lignes = 1re pièce, colonnes = 2e pièce) donne les mêmes 4 cases. Pour un dé puis une pièce : 6 × 2 = 12 chemins.',
    synthese: 'l’arbre (ou le tableau à double entrée) dénombre TOUS les résultats d’une expérience à deux étapes ; on lit alors p = chemins favorables ÷ chemins possibles.',
    method: ['Dessiner les branches de la première étape, puis greffer celles de la seconde.', 'Lister tous les chemins complets et vérifier leur nombre (produit des possibilités).', 'Compter les chemins favorables et calculer la probabilité.'],
    exemple: 'Deux pièces : 4 chemins PP, PF, FP, FF ; p(PP) = 1/4 ; p(une de chaque) = 2/4 = 1/2.',
    erreur: 'Confondre PF et FP en un seul cas : l’ordre compte dans l’arbre, et c’est ce qui rend les chemins équiprobables.',
    saistu: 'Avec un arbre, tu peux dénombrer des situations immenses : trois dés donnent déjà 6 × 6 × 6 = 216 chemins ! Les informaticiens utilisent les mêmes arbres pour explorer les coups possibles aux échecs.',
    exos: ['On lance deux pièces. a) Dessine l’arbre. b) Liste les 4 résultats. d) p(deux faces) ? e) p(au moins une pile) ?',
      'On lance une pièce puis un dé. a) Combien de chemins ? b) Liste ceux qui contiennent un 6. d) p(pile puis 6) ? e) p(un 6, quelle que soit la pièce) ?',
      'Un sac contient un jeton Rouge et un jeton Vert ; on tire un jeton, on le remet, on retire. a) Dessine le tableau à double entrée. b) Liste les 4 résultats. d) p(deux fois rouge) ? e) p(deux couleurs différentes) ?'],
    corr: ['a) arbre 2 × 2 ; b) PP, PF, FP, FF ; d) 1/4 ; e) 3/4.',
      'a) 2 × 6 = 12 ; b) P6 et F6 ; d) 1/12 ; e) 2/12 = 1/6.',
      'a) tableau 2 × 2 ; b) RR, RV, VR, VV ; d) 1/4 ; e) 2/4 = 1/2.'],
    fig: 'u6f11'
  }
];

const unit6 = {
  no: 6, roman: 'VI', name: 'Traitement de données',
  rag: 'recueillir et traiter des données statistiques ou probabilistes pour faire des prédictions et prendre des décisions éclairées.',
  valeurs: 'rigueur et persévérance',
  sessions: S,
  revision: {
    table: [
      ['Données et effectifs', 'Données brutes → comptage → tableau des effectifs', 'Organiser une enquête et vérifier le total'],
      ['Fréquences', 'fréquence = effectif ÷ total ; somme = 1', 'Comparer des groupes de tailles différentes'],
      ['Diagrammes', 'Bandes (catégories), ligne brisée (temps), circulaire (parts)', 'Choisir et construire le bon diagramme'],
      ['Moyennes', 'Simple ou pondérée par coefficients/effectifs', 'Calculer une moyenne de notes ou de classe'],
      ['Probabilité', 'p = favorables ÷ possibles, entre 0 et 1', 'Calculer et situer sur l’échelle 0 → 1'],
      ['Arbre et tableau', 'Deux étapes : produit des possibilités', 'Dénombrer PP, PF, FP, FF et calculer p']
    ],
    questions: [
      'Donne l’effectif total du tableau : mangue 5, letchi 3, banane 2, ananas 2.',
      'Calcule la fréquence de la mangue en pourcentage.',
      'Quel angle pour la mangue dans un diagramme circulaire ?',
      'Calcule la moyenne pondérée : 10 (coef 2) et 13 (coef 3).',
      'On lance deux pièces : p(deux piles) ?'
    ],
    answers: [
      '12.',
      '5/12 ≈ 0,42 soit 42 %.',
      '5/12 × 360° = 150°.',
      '(20 + 39) ÷ 5 = 59 ÷ 5 = 11,8.',
      '1/4 (arbre : PP, PF, FP, FF).'
    ]
  },
  exam: {
    exos: [
      'Pointures relevées : 36, 38, 37, 36, 39, 36, 38, 37, 36, 38. a) Construis le tableau des effectifs. b) Donne l’effectif total. d) Quelle est la valeur la plus fréquente ? e) Calcule la fréquence de 36 en pourcentage.',
      'Sports préférés de 20 élèves : foot 8, basket 5, course 4, natation 3. a) Calcule la fréquence du foot. b) Quelle hauteur de bande pour le foot si 1 carreau = 1 élève ? d) Quel angle pour le foot dans un diagramme circulaire ? e) Vérifie que la somme des quatre angles fait 360°.',
      'Notes de Miora : 11 (coef 1), 14 (coef 2), 8 (coef 1). a) Calcule les produits note × coef. b) Somme des produits ? d) Somme des coefficients ? e) Moyenne pondérée ?',
      'Un sac contient 4 jetons rouges, 3 verts et 3 bleus. a) p(rouge) ? b) p(vert) ? d) p(rouge ou bleu) ? e) Place p(rouge) sur l’échelle de 0 à 1 (plus près de 0, de 0,5 ou de 1 ?).',
      'On lance une pièce puis on tire au hasard un jeton parmi Rouge et Vert. a) Dessine l’arbre. b) Liste tous les résultats. d) p(pile puis rouge) ? e) p(obtenir le jeton vert) ?'
    ],
    corr: [
      'a) 36 → 4, 37 → 2, 38 → 3, 39 → 1 ; b) 10 ; d) 36 ; e) 4/10 = 40 %. Un point par item.',
      'a) 8/20 = 0,4 = 40 % ; b) 8 carreaux ; d) 8/20 × 360 = 144° ; e) 144 + 90 + 72 + 54 = 360° ✓. Un point par item.',
      'a) 11, 28, 8 ; b) 47 ; d) 4 ; e) 47 ÷ 4 = 11,75. Un point par item.',
      'a) 4/10 = 2/5 ; b) 3/10 ; d) 7/10 ; e) 0,4 : plus près de 0,5. Un point par item.',
      'a) arbre 2 × 2 ; b) P-R, P-V, F-R, F-V ; d) 1/4 ; e) 2/4 = 1/2. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit6, bufs);
})();
