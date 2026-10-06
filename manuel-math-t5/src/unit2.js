// UNITÉ 2 — OPÉRATION (PE T5) : 13 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, bar, grid100, PINK, PINK2, GREEN, GREENL, BLUE, OCRE } = L;

const figs = {};
// S1 — les quatre sens
figs.u2f1 = (() => { const { s, y } = head('Les quatre sens des opérations', ['Avant de calculer, on reconnaît la situation : que fait-on vraiment ?']);
  const top = y + 20;
  let b = box(70, top, 410, 70, 'AJOUT : j’en mets en plus', GREENL, GREEN, 22) + box(520, top, 410, 70, 'RETRAIT : j’en enlève', '#FDE7EF', PINK2, 22);
  b += box(70, top + 95, 410, 70, 'RÉUNION : je rassemble tout', '#FFF3E0', OCRE, 22) + box(520, top + 95, 410, 70, 'COMPARAISON : quel écart ?', '#D6E6F5', BLUE, 22);
  b += txt(275, top + 200, 'ajout, réunion → addition', 22, GREEN, 'bold', 'middle');
  b += txt(725, top + 200, 'retrait, comparaison → soustraction', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 232, s + b); })();
// S2 — addition posée
figs.u2f2 = (() => { const { s, y } = head('Poser une grande addition', ['348 256 + 175 869 : chaque colonne sous la sienne, retenues en voyage.']);
  const top = y + 30, x = 420, dx = 46;
  const r1 = '¹¹¹¹¹', n1 = '348256', n2 = '175869', res = '524125';
  let b = '';
  '11111 '.split('').forEach((c, i) => { if (c === '1') b += txt(x + i * dx + 10, top, '1', 20, PINK2, 'bold', 'middle'); });
  n1.split('').forEach((c, i) => b += txt(x + i * dx, top + 42, c, 34, '#222', 'bold', 'middle'));
  b += txt(x - 60, top + 92, '+', 34, GREEN, 'bold', 'middle');
  n2.split('').forEach((c, i) => b += txt(x + i * dx, top + 92, c, 34, '#222', 'bold', 'middle'));
  b += seg(x - 80, top + 115, x + 6 * dx - 20, top + 115, BLUE, 4);
  res.split('').forEach((c, i) => b += txt(x + i * dx, top + 160, c, 34, GREEN, 'bold', 'middle'));
  b += txt(500, top + 215, '6 + 9 = 15 : j’écris 5, je retiens 1 dans la colonne suivante', 21, PINK2, 'bold', 'middle');
  b += txt(500, top + 252, '348 256 + 175 869 = 524 125', 24, GREEN, 'bold', 'middle');
  return svg(1000, top + 284, s + b); })();
// S3 — soustraction posée
figs.u2f3 = (() => { const { s, y } = head('Poser une grande soustraction', ['500 000 − 136 500 : quand le chiffre du haut est trop petit, on emprunte.']);
  const top = y + 30, x = 420, dx = 46;
  const n1 = '500000', n2 = '136500', res = '363500';
  let b = '';
  n1.split('').forEach((c, i) => b += txt(x + i * dx, top + 42, c, 34, '#222', 'bold', 'middle'));
  b += txt(x - 60, top + 92, '−', 34, PINK2, 'bold', 'middle');
  n2.split('').forEach((c, i) => b += txt(x + i * dx, top + 92, c, 34, '#222', 'bold', 'middle'));
  b += seg(x - 80, top + 115, x + 6 * dx - 20, top + 115, BLUE, 4);
  res.split('').forEach((c, i) => b += txt(x + i * dx, top + 160, c, 34, GREEN, 'bold', 'middle'));
  b += txt(500, top + 215, '0 − 5 impossible : j’emprunte une unité à la colonne de gauche', 21, PINK2, 'bold', 'middle');
  b += txt(500, top + 252, 'vérification : 363 500 + 136 500 = 500 000 ✓', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 284, s + b); })();
// S4 — vérifier un résultat
figs.u2f4 = (() => { const { s, y } = head('Vérifier sans refaire pareil', ['Deux gardiens du calcul : l’opération inverse et l’ordre de grandeur.']);
  const top = y + 25;
  let b = box(90, top, 820, 60, 'PREUVE : 742 − 268 = 474, car 474 + 268 = 742', GREENL, GREEN, 24);
  b += box(90, top + 85, 820, 60, 'ESTIMATION : 742 − 268, c’est proche de 700 − 300 = 400', '#FFF3E0', OCRE, 24);
  b += txt(500, top + 195, 'si la preuve retombe juste ET que l’ordre de grandeur colle, le résultat est sûr', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 228, s + b); })();
// S5 — multiplication posée
figs.u2f5 = (() => { const { s, y } = head('Multiplier : 324 × 46', ['Deux produits partiels : par les unités, puis par les dizaines (décalage !).']);
  const top = y + 30, x = 480, dx = 46;
  let b = '';
  '324'.split('').forEach((c, i) => b += txt(x + (i + 2) * dx, top + 36, c, 32, '#222', 'bold', 'middle'));
  b += txt(x + dx, top + 80, '×', 30, GREEN, 'bold', 'middle');
  '46'.split('').forEach((c, i) => b += txt(x + (i + 3) * dx, top + 80, c, 32, '#222', 'bold', 'middle'));
  b += seg(x + 20, top + 102, x + 5 * dx + 20, top + 102, BLUE, 3.5);
  '1944'.split('').forEach((c, i) => b += txt(x + (i + 1) * dx, top + 142, c, 32, PINK2, 'bold', 'middle'));
  b += txt(x - 150, top + 142, '324 × 6 →', 22, PINK2, 'bold');
  '1296'.split('').forEach((c, i) => b += txt(x + i * dx, top + 186, c, 32, OCRE, 'bold', 'middle'));
  b += txt(x + 4 * dx, top + 186, '.', 32, OCRE, 'bold', 'middle');
  b += txt(x - 150, top + 186, '324 × 4 →', 22, OCRE, 'bold');
  b += seg(x + 20, top + 208, x + 5 * dx + 20, top + 208, BLUE, 3.5);
  '14904'.split('').forEach((c, i) => b += txt(x + i * dx, top + 248, c, 32, GREEN, 'bold', 'middle'));
  b += txt(500, top + 300, '324 × 46 = 1 944 + 12 960 = 14 904 : le second produit est décalé d’un rang', 20, BLUE, 'bold', 'middle');
  return svg(1000, top + 332, s + b); })();
// S6 — division posée
figs.u2f6 = (() => { const { s, y } = head('Diviser avec quotient et reste', ['127 mangues partagées entre 5 bols : 25 chacune, et il en reste 2.']);
  const top = y + 25;
  let b = tableEl(190, top, [310, 310], 56, [['dividende 127', 'diviseur 5'], ['reste 2', 'quotient 25']]);
  b += txt(500, top + 2 * 56 + 48, '127 = (5 × 25) + 2 : la preuve de la division', 24, GREEN, 'bold', 'middle');
  b += txt(500, top + 2 * 56 + 86, 'le reste est TOUJOURS plus petit que le diviseur (2 &lt; 5)', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 118, s + b); })();
// S7 — partage et groupement
figs.u2f7 = (() => { const { s, y } = head('Une division, deux questions', ['24 ÷ 4 répond à deux questions très différentes… avec le même calcul !']);
  const top = y + 25;
  let b = box(70, top, 410, 110, '', GREENL, GREEN);
  b += txt(275, top + 35, 'PARTAGE', 22, GREEN, 'bold', 'middle');
  b += txt(275, top + 68, '24 mangues, 4 bols :', 20, '#222', 'normal', 'middle');
  b += txt(275, top + 95, 'combien DANS chaque bol ?', 20, '#222', 'normal', 'middle');
  b += box(520, top, 410, 110, '', '#FDE7EF', PINK2);
  b += txt(725, top + 35, 'GROUPEMENT', 22, PINK2, 'bold', 'middle');
  b += txt(725, top + 68, '24 élèves, équipes de 4 :', 20, '#222', 'normal', 'middle');
  b += txt(725, top + 95, 'combien D’ÉQUIPES ?', 20, '#222', 'normal', 'middle');
  b += txt(500, top + 155, 'les deux réponses valent 24 ÷ 4 = 6', 24, OCRE, 'bold', 'middle');
  return svg(1000, top + 188, s + b); })();
// S8 — multiplier des fractions
figs.u2f8 = (() => { const { s, y } = head('Multiplier des fractions', ['Fraction × entier : on répète ; fraction × fraction : on prend une part de part.']);
  const top = y + 25;
  let b = box(90, top, 820, 58, '3 × 1/4 = 3/4 : trois fois un quart', GREENL, GREEN, 24);
  b += box(90, top + 80, 820, 58, '1/2 × 3/4 = 3/8 : la moitié de trois quarts', '#FDE7EF', PINK2, 24);
  b += txt(500, top + 185, 'règle : numérateur × numérateur, dénominateur × dénominateur', 22, OCRE, 'bold', 'middle');
  b += txt(500, top + 222, '1/2 × 3/4 = (1 × 3) / (2 × 4) = 3/8', 24, BLUE, 'bold', 'middle');
  return svg(1000, top + 254, s + b); })();
// S9 — diviser des fractions
figs.u2f9 = (() => { const { s, y } = head('Diviser par une fraction', ['Combien de quarts dans un demi ? La bande répond : deux.']);
  const top = y + 20;
  let b = bar(150, top, 700, 56, 2, 1) + txt(95, top + 38, '1/2', 26, GREEN, 'bold', 'middle');
  b += bar(150, top + 76, 700, 56, 4, 2) + txt(95, top + 114, '1/4', 26, PINK2, 'bold', 'middle');
  b += txt(500, top + 185, '1/2 ÷ 1/4 = 2 : un demi contient deux quarts', 24, OCRE, 'bold', 'middle');
  b += txt(500, top + 224, 'règle : diviser, c’est multiplier par la fraction renversée : 1/2 × 4/1 = 4/2 = 2', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 256, s + b); })();
// S10 — addition et soustraction de décimaux
figs.u2f10 = (() => { const { s, y } = head('Additionner des décimaux', ['Règle d’or : les virgules s’alignent les unes sous les autres.']);
  const top = y + 30, x = 430, dx = 46;
  let b = '';
  '12,75'.split('').forEach((c, i) => b += txt(x + i * dx, top + 40, c, 34, '#222', 'bold', 'middle'));
  b += txt(x - 70, top + 90, '+', 34, GREEN, 'bold', 'middle');
  ' 3,50'.split('').forEach((c, i) => { if (c !== ' ') b += txt(x + i * dx, top + 90, c, 34, '#222', 'bold', 'middle'); });
  b += seg(x - 85, top + 113, x + 5 * dx - 20, top + 113, BLUE, 4);
  '16,25'.split('').forEach((c, i) => b += txt(x + i * dx, top + 156, c, 34, GREEN, 'bold', 'middle'));
  b += txt(500, top + 212, '3,5 devient 3,50 pour avoir deux chiffres après la virgule, comme 12,75', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 248, 'la virgule du résultat tombe sous les autres virgules', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 280, s + b); })();
// S11 — multiplier et diviser des décimaux
figs.u2f11 = (() => { const { s, y } = head('Multiplier et diviser des décimaux', ['On calcule sans virgule, puis on replace la virgule en comptant les rangs.']);
  const top = y + 25;
  let b = box(90, top, 820, 58, '2,5 × 1,2 : 25 × 12 = 300, puis 2 rangs décimaux → 3,00 = 3', GREENL, GREEN, 22);
  b += box(90, top + 80, 820, 58, '7,2 ÷ 3 = 2,4 : on divise, la virgule descend à sa place', '#FDE7EF', PINK2, 22);
  b += box(90, top + 160, 820, 58, '4,5 ÷ 1,5 = 45 ÷ 15 = 3 : on décale les DEUX virgules pareil', '#FFF3E0', OCRE, 22);
  b += txt(500, top + 262, 'compter les chiffres après les virgules des facteurs : autant dans le produit', 20, BLUE, 'bold', 'middle');
  return svg(1000, top + 294, s + b); })();
// S12 — priorité des opérations
figs.u2f12 = (() => { const { s, y } = head('La priorité des opérations', ['Sans règle commune, 5 + 3 × 2 aurait deux réponses. La règle tranche : 11.']);
  const top = y + 25;
  let b = box(130, top, 740, 56, '1. Les PARENTHÈSES d’abord', GREENL, GREEN, 24);
  b += arrow(500, top + 60, 500, top + 86, OCRE, 4);
  b += box(130, top + 90, 740, 56, '2. Puis les × et les ÷, de gauche à droite', '#FDE7EF', PINK2, 24);
  b += arrow(500, top + 150, 500, top + 176, OCRE, 4);
  b += box(130, top + 180, 740, 56, '3. Enfin les + et les −, de gauche à droite', '#D6E6F5', BLUE, 24);
  b += txt(500, top + 285, '5 + 3 × 2 = 5 + 6 = 11, mais (5 + 3) × 2 = 8 × 2 = 16', 23, OCRE, 'bold', 'middle');
  return svg(1000, top + 318, s + b); })();
// S13 — calcul mental
figs.u2f13 = (() => { const { s, y } = head('Les outils du calcul mental', ['Quatre stratégies pour calculer vite et juste, sans poser.']);
  const top = y + 20;
  const data = [['Stratégie', 'Exemple'],
    ['× 10, × 100, × 1 000', '47 × 100 = 4 700 ; 35 000 ÷ 1 000 = 35'],
    ['Décomposer', '48 + 27 = 48 + 20 + 7 = 75'],
    ['Doubles et moitiés', '25 × 16 = 50 × 8 = 100 × 4 = 400'],
    ['Compensation', '99 + 46 = 100 + 45 = 145']];
  let b = tableEl(60, top, [300, 580], 54, data);
  b += txt(500, top + 5 * 54 + 42, 'le bon calculateur choisit la stratégie qui rend le calcul facile', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 5 * 54 + 74, s + b); })();

const S = [
  {
    t: 'Le sens des opérations : ajouter, retirer, réunir, comparer', comp: 'Opération', theme: 'Sens de l’addition et de la soustraction',
    goal: 'reconnaître dans une situation le sens de l’opération : ajout, retrait, réunion ou comparaison',
    mat: 'Jetons, images de situations, ardoises, cahier',
    revQ: 'Compare 45 807 et 45 870.',
    revRA: '45 807 < 45 870 (à la colonne des dizaines, 0 < 7).',
    situation: 'Quatre histoires au marché : la marchande AJOUTE 12 oranges à son panier ; un client RETIRE 3 bananes du régime ; deux frères RÉUNISSENT leurs billes ; deux paniers de riz sont COMPARÉS. Quatre histoires, mais seulement deux opérations… Lesquelles ?',
    def: 'L’addition traduit deux situations : l’ajout (une quantité augmente) et la réunion (on rassemble plusieurs quantités). La soustraction en traduit deux autres : le retrait (une quantité diminue) et la comparaison (on cherche l’écart entre deux quantités).',
    autrement: 'avant de calculer, on se demande : la quantité grandit-elle, diminue-t-elle, rassemble-t-on, ou cherche-t-on un écart ?',
    concept: 'Le piège des problèmes n’est presque jamais le calcul : c’est le CHOIX de l’opération. Les mots de l’énoncé guident : « en plus, gagne, reçoit » annoncent souvent un ajout ; « ensemble, en tout » une réunion ; « perd, donne, mange » un retrait ; « de plus que, de moins que, quelle différence » une comparaison. Mais attention aux pièges : « Hery a 3 billes de plus que Vola ; Hery en a 15, combien pour Vola ? » — le mot « plus » s’y cache, et pourtant c’est une soustraction (15 − 3 = 12) ! La seule méthode sûre : se représenter la situation, avec un dessin ou des jetons, AVANT d’écrire l’opération.',
    synthese: 'ajout et réunion → addition ; retrait et comparaison → soustraction ; on dessine la situation avant de choisir.',
    method: ['Lire l’énoncé deux fois et repérer la question.', 'Dessiner ou mimer la situation : ça grandit, ça diminue, on rassemble, on compare ?', 'Écrire l’opération qui correspond, calculer, puis vérifier que la réponse a du sens.'],
    exemple: '« Le car transporte 38 passagers ; 12 descendent à Antsirabe. » Retrait : 38 − 12 = 26 passagers.',
    erreur: 'Choisir l’opération d’après un seul mot : « plus » ne veut pas toujours dire additionner ! « 3 de plus que Vola » peut exiger une soustraction. C’est la SITUATION qui commande, pas le mot.',
    saistu: 'Les quatre sens des opérations existaient déjà sur les tablettes d’argile de Babylone, il y a 4 000 ans : les scribes y posaient des problèmes de greniers à grain que l’on pourrait donner aujourd’hui presque mot pour mot dans une classe de T5 !',
    exos: ['Pour chaque situation, écris « ajout », « retrait », « réunion » ou « comparaison » : a) Soa cueille 25 letchis de plus ; b) le car perd 8 passagers ; d) on verse trois sacs de riz dans un même grenier ; e) on cherche de combien le manguier dépasse le papayer.',
      'Écris l’opération et calcule : a) 450 + 380 ; b) 1 200 − 745 ; d) Naly a 2 350 Ar, il reçoit 1 500 Ar : combien a-t-il ? e) Un sac pèse 85 kg, un autre 62 kg : quelle différence ?',
      'Vola a 18 billes ; c’est 5 de plus que Hery. a) Qui a le moins de billes ? b) Quelle opération donne les billes de Hery ? d) Calcule. e) Vérifie en refaisant le chemin inverse.'],
    corr: ['a) ajout ; b) retrait ; d) réunion ; e) comparaison.',
      'a) 830 ; b) 455 ; d) 2 350 + 1 500 = 3 850 Ar ; e) 85 − 62 = 23 kg.',
      'a) Hery ; b) une soustraction, 18 − 5 ; d) 13 billes ; e) 13 + 5 = 18 ✓.'],
    fig: 'u2f1'
  },
  {
    t: 'Additionner jusqu’à 1 000 000', comp: 'Opération', theme: 'Addition avec et sans retenue',
    goal: 'poser et effectuer des additions de nombres naturels jusqu’à 1 000 000, avec et sans retenue',
    mat: 'Tableau de numération, jetons, ardoises, cahier',
    revQ: 'Quelle situation traduit 125 + 75 : retrait ou réunion ?',
    revRA: 'Une réunion (ou un ajout) : la quantité totale rassemble les deux.',
    situation: 'Deux coopératives livrent leur riz au grand marché : 348 256 kg pour la première, 175 869 kg pour la seconde. Le magasinier doit inscrire le total dans son registre. Comment additionner sans se perdre dans les six chiffres ?',
    def: 'Pour additionner deux grands nombres, on les pose en colonnes, chaque chiffre sous celui de même valeur de position, et l’on additionne colonne par colonne en partant des unités. Quand une colonne dépasse 9, on écrit le chiffre des unités et l’on reporte une retenue dans la colonne suivante.',
    autrement: 'on empile les nombres bien droits, colonne par colonne, et chaque dizaine complète déménage d’une colonne vers la gauche.',
    concept: 'La retenue n’est pas un truc magique : c’est un échange. Quand 6 + 9 = 15 dans la colonne des unités, on y laisse 5 unités et l’on échange les 10 autres contre 1 dizaine, qui rejoint la colonne des dizaines — exactement comme 10 billets de 100 Ar s’échangent contre 1 billet de 1 000 Ar. L’alignement est la moitié du travail : un chiffre mal placé, et tout le calcul s’écroule ; au besoin, on trace les colonnes du tableau de numération. Pour contrôler, l’ordre de grandeur rend un service immédiat : 348 256 + 175 869, c’est environ 350 000 + 175 000 = 525 000 — si l’on trouve 52 000 ou 5 000 000, une erreur s’est glissée.',
    synthese: 'aligner par la droite, additionner colonne par colonne, écrire les unités et reporter la retenue ; contrôler par l’ordre de grandeur.',
    method: ['Poser les nombres en colonnes, unités sous unités.', 'Additionner de droite à gauche ; si une colonne dépasse 9, reporter la retenue.', 'Vérifier avec l’ordre de grandeur.'],
    exemple: '348 256 + 175 869 = 524 125 ; contrôle : environ 350 000 + 175 000 = 525 000 ✓.',
    erreur: 'Oublier la retenue ou l’écrire dans la mauvaise colonne : chaque retenue vaut UNE unité de la colonne SUIVANTE, jamais plus, jamais ailleurs.',
    saistu: 'Avant les calculatrices, les comptables chinois et japonais additionnaient des nombres énormes sur un boulier — souvent plus vite qu’une machine ! Les championnats de boulier existent toujours, et les meilleurs élèves finissent par calculer… sur un boulier imaginaire, les doigts dans le vide.',
    exos: ['Pose et calcule : a) 2 457 + 3 528 ; b) 45 672 + 38 459 ; d) 254 318 + 169 547 ; e) 507 268 + 492 732.',
      'Calcule le total : a) 125 400 + 98 675 ; b) 356 208 + 275 946 ; d) 89 999 + 1 ; e) 428 756 + 90 + 9 000.',
      'La commune a récolté 236 450 kg de riz la première semaine et 187 925 kg la seconde. a) Estime le total par l’ordre de grandeur. b) Pose l’addition et calcule. d) Compare avec ton estimation. e) La récolte atteint-elle 400 000 kg ?'],
    corr: ['a) 5 985 ; b) 84 131 ; d) 423 865 ; e) 1 000 000.',
      'a) 224 075 ; b) 632 154 ; d) 90 000 ; e) 437 846.',
      'a) environ 240 000 + 190 000 = 430 000 ; b) 424 375 kg ; d) proche de l’estimation ✓ ; e) oui, 424 375 > 400 000.'],
    fig: 'u2f2'
  },
  {
    t: 'Soustraire jusqu’à 1 000 000', comp: 'Opération', theme: 'Soustraction avec et sans retenue',
    goal: 'poser et effectuer des soustractions de nombres naturels jusqu’à 1 000 000, avec et sans retenue',
    mat: 'Tableau de numération, billets factices, ardoises, cahier',
    revQ: 'Calcule 25 600 + 4 400.',
    revRA: '30 000.',
    situation: 'La caisse de l’école contient 500 000 Ar. On achète des fournitures pour 136 500 Ar. Le trésorier pose la soustraction… et tombe sur 0 − 5 ! Comment enlever 5 quand il n’y a rien ? L’emprunt vient à la rescousse.',
    def: 'Pour soustraire deux grands nombres, on les pose en colonnes et l’on soustrait colonne par colonne en partant des unités. Quand le chiffre du haut est plus petit que celui du bas, on emprunte une unité à la colonne de gauche, qui vaut dix unités dans la colonne en difficulté.',
    autrement: 'quand une colonne n’a pas assez, elle casse un « gros billet » de la colonne voisine en dix petits.',
    concept: 'L’emprunt est l’échange inverse de la retenue : 1 dizaine se monnaie en 10 unités, 1 centaine en 10 dizaines… Avec des zéros en cascade comme dans 500 000 − 136 500, l’emprunt voyage de colonne en colonne : le 0 des unités emprunte au 0 des dizaines, qui emprunte au 0 des centaines, et ainsi de suite jusqu’au 5. La grande différence avec l’addition : la soustraction ne se retourne pas ! 500 000 − 136 500 n’est pas 136 500 − 500 000 ; on écrit toujours le plus grand nombre en haut. Et la preuve est un bonheur : différence + nombre retranché = nombre de départ ; si 363 500 + 136 500 redonne 500 000, le trésorier peut dormir tranquille.',
    synthese: 'aligner, soustraire de droite à gauche, emprunter quand le haut est trop petit ; preuve : différence + retranché = départ.',
    method: ['Poser le plus grand nombre en haut, aligné par la droite.', 'Soustraire colonne par colonne ; emprunter à gauche si nécessaire.', 'Prouver : ajouter la différence au nombre retranché pour retrouver le départ.'],
    exemple: '500 000 − 136 500 = 363 500 ; preuve : 363 500 + 136 500 = 500 000 ✓.',
    erreur: 'Retourner la colonne qui gêne : pour 0 − 5, calculer « 5 − 0 » est la faute la plus fréquente de l’examen ! On n’inverse jamais : on EMPRUNTE.',
    saistu: 'Les caissiers d’autrefois ne posaient pas de soustraction pour rendre la monnaie : ils comptaient EN AVANT ! Pour 1 365 Ar payés avec 2 000 Ar, ils disaient « 1 365… 1 400 (35), 1 500 (100), 2 000 (500) » — et la monnaie, 635 Ar, se trouvait toute seule. Essaie, c’est redoutable !',
    exos: ['Pose et calcule : a) 8 754 − 3 628 ; b) 52 304 − 28 765 ; d) 400 000 − 265 480 ; e) 1 000 000 − 1.',
      'Calcule puis prouve : a) 75 200 − 48 900 ; b) 630 500 − 298 756 ; d) 500 500 − 55 055 ; e) 806 030 − 79 876.',
      'Le réservoir du village contient 250 000 L d’eau ; on en consomme 87 650 L. a) Estime ce qui reste. b) Pose la soustraction. d) Écris la preuve. e) Combien manquera-t-il pour remplir à nouveau les 250 000 L ?'],
    corr: ['a) 5 126 ; b) 23 539 ; d) 134 520 ; e) 999 999.',
      'a) 26 300 (26 300 + 48 900 = 75 200 ✓) ; b) 331 744 ✓ ; d) 445 445 ✓ ; e) 726 154 ✓.',
      'a) environ 250 000 − 90 000 = 160 000 L ; b) 162 350 L ; d) 162 350 + 87 650 = 250 000 ✓ ; e) 87 650 L, ce qu’on a consommé.'],
    fig: 'u2f3'
  },
  {
    t: 'Vérifier un résultat : preuve et estimation', comp: 'Opération', theme: 'Vérification des calculs',
    goal: 'vérifier le résultat d’une addition ou d’une soustraction par l’opération inverse et par l’ordre de grandeur',
    mat: 'Ardoises, cartes d’opérations, cahier',
    revQ: 'Calcule 10 000 − 3 650.',
    revRA: '6 350.',
    situation: 'Au contrôle, Lalao a écrit 742 − 268 = 574. Sa voisine trouve 474. Sans refaire le calcul une troisième fois, comment savoir laquelle a raison ? Deux gardiens veillent : la preuve et l’estimation.',
    def: 'Vérifier un calcul, c’est contrôler son résultat sans le refaire à l’identique. La preuve utilise l’opération inverse : une soustraction se vérifie par une addition, et une addition se vérifie en retranchant l’un des termes du total. L’estimation compare le résultat à un ordre de grandeur obtenu avec des nombres arrondis.',
    autrement: 'la preuve refait le chemin à l’envers ; l’estimation regarde de loin si la réponse est « dans la bonne zone ».',
    concept: 'Les deux gardiens ne travaillent pas pareil. L’estimation est rapide et approximative : 742 − 268, c’est environ 700 − 300 = 400 ; le 574 de Lalao est trop loin, le 474 de sa voisine est crédible. La preuve est lente mais exacte : 474 + 268 = 742 ✓, tandis que 574 + 268 = 842 ✗ — verdict sans appel. Le bon réflexe du candidat au CEPE : estimer AVANT de calculer (pour savoir où l’on va), prouver APRÈS (pour signer son résultat). Celui qui rend sa copie sans vérifier laisse ses fautes de retenue se promener en liberté.',
    synthese: 'estimation avant (nombres arrondis), preuve après (opération inverse) ; soustraction ↔ addition sont inverses l’une de l’autre.',
    method: ['Arrondir les nombres et calculer de tête l’ordre de grandeur.', 'Effectuer l’opération posée.', 'Appliquer la preuve par l’opération inverse et conclure.'],
    exemple: '1 258 + 3 747 = 5 005 ; estimation 1 300 + 3 700 = 5 000 ✓ ; preuve 5 005 − 3 747 = 1 258 ✓.',
    erreur: 'Vérifier en refaisant exactement le même calcul : on refait souvent la même faute au même endroit ! L’opération INVERSE, elle, emprunte un autre chemin et débusque l’erreur.',
    saistu: 'Les comptables de la Renaissance avaient une botte secrète, la « preuve par neuf », qui contrôlait une multiplication en quelques secondes avec les restes de la division par 9. Ton futur professeur de collège la connaît sûrement — demande-lui de te montrer ce tour de magie !',
    exos: ['Vérifie par la preuve et corrige si besoin : a) 456 + 287 = 743 ; b) 902 − 356 = 556 ; d) 5 480 + 2 520 = 8 000 ; e) 10 000 − 4 444 = 6 666.',
      'Donne un ordre de grandeur puis calcule : a) 4 897 + 3 108 ; b) 9 012 − 2 987 ; d) 49 850 + 25 103 ; e) 80 125 − 39 884.',
      'Rivo a payé 13 750 Ar et 8 300 Ar au marché ; il affirme avoir dépensé 23 050 Ar. a) Estime la dépense. b) Son total est-il crédible ? d) Prouve par la soustraction. e) Conclus en une phrase.'],
    corr: ['a) 743 ✓ (743 − 287 = 456) ; b) faux : 902 − 356 = 546 ; d) 8 000 ✓ ; e) faux : 10 000 − 4 444 = 5 556.',
      'a) ≈ 8 000 ; 8 005 ; b) ≈ 6 000 ; 6 025 ; d) ≈ 75 000 ; 74 953 ; e) ≈ 40 000 ; 40 241.',
      'a) ≈ 14 000 + 8 000 = 22 000 Ar ; b) oui, 23 050 est proche de 22 000 ; d) 23 050 − 8 300 = 14 750 ✗ : le vrai total est 22 050 Ar ; e) l’estimation était bonne, la preuve a trouvé la faute de 1 000 Ar.'],
    fig: 'u2f4'
  },
  {
    t: 'Multiplier : 3 chiffres × 2 chiffres', comp: 'Opération', theme: 'Multiplication posée',
    goal: 'poser et effectuer la multiplication d’un nombre de trois chiffres par un nombre de deux chiffres',
    mat: 'Tables de multiplication, quadrillages, ardoises, cahier',
    revQ: 'Récite la table de 6, puis donne 7 × 8.',
    revRA: '6, 12, 18, 24, 30, 36, 42, 48, 54, 60 ; 7 × 8 = 56.',
    situation: 'Le verger de letchis compte 46 rangées de 324 arbres. Le propriétaire veut connaître le nombre total d’arbres sans les compter un à un — il y passerait la semaine ! La multiplication posée fait le travail en quatre lignes.',
    def: 'Pour multiplier un nombre de trois chiffres (le multiplicande) par un nombre de deux chiffres (le multiplicateur), on calcule deux produits partiels : le multiplicande × le chiffre des unités, puis le multiplicande × le chiffre des dizaines, décalé d’un rang vers la gauche ; on additionne les deux produits.',
    autrement: 'on découpe le multiplicateur : 46 fois, c’est 6 fois… plus 40 fois ; et « 40 fois », ça s’écrit un rang plus à gauche.',
    concept: 'Le décalage n’est pas une manie d’instituteur : 324 × 46 = 324 × 6 + 324 × 40, et 324 × 40, c’est 324 × 4 DIZAINES = 1 296 dizaines = 12 960 — voilà pourquoi la deuxième ligne glisse d’un rang (on peut marquer le rang libre d’un point ou d’un zéro). Les tables de multiplication jusqu’à 9 doivent couler toutes seules : une hésitation sur 7 × 8 et toute la pyramide tremble. Le contrôle par l’ordre de grandeur reste de garde : 324 × 46 ≈ 300 × 50 = 15 000, tout près du résultat exact 14 904. Vocabulaire à retenir : multiplicande × multiplicateur = produit.',
    synthese: 'deux produits partiels (unités puis dizaines décalées d’un rang), puis addition ; contrôle par l’ordre de grandeur.',
    method: ['Poser le multiplicande en haut, le multiplicateur en bas, alignés à droite.', 'Multiplier par les unités, puis par les dizaines en décalant d’un rang.', 'Additionner les produits partiels et contrôler l’ordre de grandeur.'],
    exemple: '324 × 46 : 324 × 6 = 1 944 ; 324 × 4 (dizaines) = 12 960 ; total 14 904 arbres.',
    erreur: 'Oublier le décalage de la deuxième ligne : sans lui, on calcule 324 × 4 au lieu de 324 × 40, et le produit fond de 11 664 ! Marquer le rang libre d’un point avant de commencer.',
    saistu: 'Les Égyptiens multipliaient sans connaître les tables : ils doublaient, doublaient encore, et additionnaient les bonnes lignes ! Pour × 46, ils calculaient × 2, × 4, × 8, × 16, × 32… puis ajoutaient les lignes × 32, × 8, × 4 et × 2. Les ordinateurs d’aujourd’hui, en binaire, font presque pareil !',
    exos: ['Pose et calcule : a) 243 × 23 ; b) 517 × 34 ; d) 608 × 45 ; e) 750 × 86.',
      'Estime puis calcule : a) 312 × 19 ; b) 498 × 21 ; d) 903 × 52 ; e) 666 × 66.',
      'Une école commande 28 cartons de 145 cahiers. a) Estime le nombre de cahiers. b) Pose la multiplication. d) Nomme le multiplicande et le multiplicateur. e) Les 4 000 cahiers nécessaires sont-ils couverts ?'],
    corr: ['a) 5 589 ; b) 17 578 ; d) 27 360 ; e) 64 500.',
      'a) ≈ 300 × 20 = 6 000 ; 5 928 ; b) ≈ 500 × 20 = 10 000 ; 10 458 ; d) ≈ 900 × 50 = 45 000 ; 46 956 ; e) ≈ 700 × 70 = 49 000 ; 43 956.',
      'a) ≈ 150 × 30 = 4 500 ; b) 145 × 28 = 4 060 ; d) multiplicande 145, multiplicateur 28 ; e) oui : 4 060 > 4 000, il restera même 60 cahiers.'],
    fig: 'u2f5'
  },
  {
    t: 'Diviser avec quotient et reste', comp: 'Opération', theme: 'Division euclidienne simple',
    goal: 'effectuer une division simple avec quotient et reste et utiliser le vocabulaire : dividende, diviseur, quotient, reste',
    mat: 'Jetons, bols, tables de multiplication, cahier',
    revQ: 'Calcule 24 × 5.',
    revRA: '120.',
    situation: 'Maman rapporte 127 mangues du verger et veut les répartir également dans 5 bols pour la semaine. Elle distribue, distribue… et à la fin, 2 mangues ne trouvent pas leur place. Combien par bol, et que dire de ces 2 orphelines ?',
    def: 'Diviser un nombre (le dividende) par un autre (le diviseur), c’est chercher combien de fois le diviseur entre dans le dividende : ce nombre de fois est le quotient, et ce qui ne peut pas être distribué est le reste. Le reste est toujours plus petit que le diviseur, et l’on a : dividende = (diviseur × quotient) + reste.',
    autrement: 'on distribue autant de tournées complètes que possible ; le quotient compte les tournées, le reste ramasse les miettes.',
    concept: 'La division posée s’appuie entièrement sur les tables : pour 127 ÷ 5, on prend les chiffres du dividende de gauche à droite — dans 12, combien de fois 5 ? 2 fois (10), reste 2 ; on abaisse le 7 : dans 27, combien de fois 5 ? 5 fois (25), reste 2. Quotient 25, reste 2. La règle d’or du reste : s’il atteint ou dépasse le diviseur, c’est qu’on pouvait encore servir une tournée — le quotient était trop petit. Et la preuve royale : (5 × 25) + 2 = 127 ✓. Cette égalité, dividende = diviseur × quotient + reste, est la carte d’identité de la division : au CEPE, elle vaut de l’or.',
    synthese: 'dividende ÷ diviseur → quotient et reste ; reste < diviseur ; preuve : diviseur × quotient + reste = dividende.',
    method: ['Prendre les chiffres du dividende de gauche à droite.', 'À chaque étape, chercher dans la table combien de fois le diviseur entre, soustraire, abaisser le chiffre suivant.', 'Contrôler : reste < diviseur, puis preuve diviseur × quotient + reste = dividende.'],
    exemple: '127 ÷ 5 : quotient 25, reste 2 ; preuve (5 × 25) + 2 = 127 ✓.',
    erreur: 'Laisser un reste plus grand que le diviseur : « 127 ÷ 5 = 24 reste 7 » est faux, car 7 ≥ 5 : on peut encore servir ! Toujours comparer le reste au diviseur avant de conclure.',
    saistu: 'Cette division « avec reste » porte le nom d’Euclide, un mathématicien grec d’il y a 2 300 ans. Elle sert aujourd’hui au cœur des codes secrets qui protègent les cartes bancaires : chaque fois que quelqu’un paie par carte, des milliards de divisions euclidiennes tournent dans les machines !',
    exos: ['Calcule quotient et reste : a) 58 ÷ 7 ; b) 93 ÷ 4 ; d) 127 ÷ 5 ; e) 250 ÷ 8.',
      'Écris la preuve de chaque division : a) 74 ÷ 6 ; b) 100 ÷ 9 ; d) 385 ÷ 7 ; e) 500 ÷ 6.',
      'On répartit 178 cahiers entre 8 classes. a) Nomme dividende et diviseur. b) Calcule quotient et reste. d) Écris la preuve. e) Combien de cahiers faudrait-il en plus pour que chaque classe en reçoive 23 ?'],
    corr: ['a) 8 reste 2 ; b) 23 reste 1 ; d) 25 reste 2 ; e) 31 reste 2.',
      'a) 12 reste 2 : (6 × 12) + 2 = 74 ✓ ; b) 11 reste 1 : (9 × 11) + 1 = 100 ✓ ; d) 55 reste 0 : 7 × 55 = 385 ✓ ; e) 83 reste 2 : (6 × 83) + 2 = 500 ✓.',
      'a) dividende 178, diviseur 8 ; b) quotient 22, reste 2 ; d) (8 × 22) + 2 = 178 ✓ ; e) 8 × 23 = 184 : il manque 184 − 178 = 6 cahiers.'],
    fig: 'u2f6'
  },
  {
    t: 'Partage et groupement : le sens de la division', comp: 'Opération', theme: 'Les deux sens de la division',
    goal: 'distinguer les situations de partage et de groupement et les résoudre par la division',
    mat: 'Jetons, bols, images de situations, cahier',
    revQ: 'Division : 94 ÷ 9 ?',
    revRA: 'Quotient 10, reste 4 ; preuve (9 × 10) + 4 = 94.',
    situation: 'Deux problèmes pour la même classe : « 24 mangues réparties dans 4 bols : combien dans chaque bol ? » et « 24 élèves en équipes de 4 : combien d’équipes ? » Deux questions très différentes… et pourtant le même calcul, 24 ÷ 4. Pourquoi ?',
    def: 'La division a deux sens. Le partage : on connaît le nombre de parts et l’on cherche la valeur d’une part. Le groupement : on connaît la valeur d’un groupe et l’on cherche le nombre de groupes. Les deux situations se résolvent par la même division.',
    autrement: 'partage : « combien dans chacun ? » ; groupement : « combien de paquets ? » — même division, questions différentes.',
    concept: 'Savoir nommer le sens change tout dans les problèmes : la division 24 ÷ 4 = 6 répond « 6 mangues PAR BOL » dans le partage, mais « 6 ÉQUIPES » dans le groupement — même nombre, unités différentes ! Le reste aussi se lit selon le sens : 127 mangues dans 5 bols (partage), reste 2 mangues NON distribuées ; 127 élèves en équipes de 5 (groupement), 25 équipes et 2 élèves SANS équipe — que faire d’eux ? C’est la question piège du CEPE : « 130 passagers, des taxis-brousse de 15 places, combien de véhicules ? » 130 ÷ 15 = 8 reste 10… mais il faut bien transporter les 10 derniers : 9 véhicules ! Le quotient se corrige parfois d’une unité selon la question posée.',
    synthese: 'partage = valeur d’une part ; groupement = nombre de groupes ; le reste s’interprète selon la question, parfois en ajoutant 1 au quotient.',
    method: ['Identifier le sens : cherche-t-on la valeur d’une part ou le nombre de groupes ?', 'Effectuer la division avec quotient et reste.', 'Interpréter le quotient ET le reste dans les mots de l’énoncé.'],
    exemple: '130 passagers, taxis de 15 places : 130 ÷ 15 = 8 reste 10 → il faut 9 taxis pour emmener tout le monde.',
    erreur: 'Répondre au problème par le quotient brut sans regarder le reste : « 8 taxis » laisse 10 passagers sur le bord de la route ! Toujours relire la question avant d’écrire la réponse.',
    saistu: 'Le mot « division » vient du latin dividere, « partager ». Mais en malgache, mizara (partager) et manisa andiany (compter les groupes) sont deux verbes différents — la langue malgache distingue naturellement les deux sens que les mathématiciens ont mis des siècles à nommer !',
    exos: ['Partage ou groupement ? a) 36 bonbons dans 6 sachets, combien par sachet ? b) 36 bonbons par sachets de 6, combien de sachets ? d) 60 élèves en rangs de 5 ; e) 60 000 Ar partagés entre 4 enfants.',
      'Résous : a) 96 cahiers répartis entre 8 classes ; b) 96 cahiers en paquets de 8 ; d) 145 œufs en boîtes de 12 : combien de boîtes pleines ? e) et combien d’œufs hors boîte ?',
      '130 élèves partent en excursion dans des taxis-brousse de 15 places. a) Pose la division. b) Que signifie le quotient ? d) Que signifie le reste ? e) Combien de véhicules faut-il vraiment ?'],
    corr: ['a) partage ; b) groupement ; d) groupement (nombre de rangs) ; e) partage.',
      'a) 12 cahiers par classe ; b) 12 paquets ; d) 145 ÷ 12 = 12 reste 1 : 12 boîtes pleines ; e) 1 œuf hors boîte.',
      'a) 130 ÷ 15 = 8 reste 10 ; b) 8 taxis pleins ; d) 10 élèves restent sans place ; e) 9 véhicules.'],
    fig: 'u2f7'
  },
  {
    t: 'Multiplier des fractions', comp: 'Opération', theme: 'Multiplication de fractions simples',
    goal: 'multiplier une fraction par un entier et une fraction par une fraction',
    mat: 'Bandes de fractions, grilles, papier à plier, cahier',
    revQ: 'Donne une fraction équivalente à 2/4.',
    revRA: '1/2 (ou 4/8, 50/100…).',
    situation: 'La recette du mofo gasy demande 1/4 de kapoaka de sucre. Maman triple la recette pour la fête : 3 fois 1/4, combien ? Puis elle n’utilise que la moitié de ses 3/4 de kapoaka de riz moulu : la moitié de 3/4, combien ? Les fractions se multiplient !',
    def: 'Multiplier une fraction par un entier, c’est répéter la fraction : 3 × 1/4 = 3/4. Multiplier une fraction par une fraction, c’est prendre une part d’une part : on multiplie les numérateurs entre eux et les dénominateurs entre eux : 1/2 × 3/4 = 3/8.',
    autrement: 'entier × fraction = la fraction répétée ; fraction × fraction = « une part DE la part » — et le mot « de » se traduit par × .',
    concept: 'Pour l’entier, rien de neuf : 3 × 1/4, c’est 1/4 + 1/4 + 1/4 = 3/4 — la multiplication reste une addition répétée. La vraie nouveauté est fraction × fraction : prendre la moitié de 3/4, c’est découper chacun des quarts en deux — l’unité se retrouve en huitièmes, et l’on en garde 3 : 1/2 × 3/4 = 3/8. Le pliage de papier le montre : plier en 4 dans un sens, en 2 dans l’autre, et l’unité affiche 8 cases dont 3 doublement marquées. De là, la règle mécanique : haut × haut, bas × bas. Surprise à méditer : multiplier par une fraction plus petite que 1 DIMINUE le résultat — la moitié de 3/4 est plus petite que 3/4. « Multiplier » ne veut pas toujours dire « agrandir » !',
    synthese: 'n × a/b = (n × a)/b ; a/b × c/d = (a × c)/(b × d) ; « de » se traduit par × ; multiplier par moins de 1 diminue.',
    method: ['Traduire la situation : « 3 fois » ou « la moitié de » devient × .', 'Multiplier numérateurs ensemble et dénominateurs ensemble.', 'Simplifier le résultat si possible et le situer (plus grand ou plus petit que le départ ?).'],
    exemple: '2/3 × 3/5 = 6/15 = 2/5 ; et 4 × 1/8 = 4/8 = 1/2.',
    erreur: 'Multiplier le numérateur ET le dénominateur par l’entier : 3 × 1/4 ne fait pas 3/12 ! L’entier ne touche que le numérateur ; 3/12 serait au contraire une fraction équivalente à 1/4.',
    saistu: 'Les charpentiers utilisent la multiplication de fractions tous les jours : la moitié d’une planche de 3/4 de pouce, le tiers d’un madrier… Aux États-Unis, où l’on mesure encore en pouces et fractions de pouce, impossible de construire une maison sans savoir calculer 1/2 × 3/4 !',
    exos: ['Calcule : a) 2 × 1/4 ; b) 5 × 1/8 ; d) 3 × 2/5 ; e) 4 × 3/10.',
      'Calcule et simplifie si possible : a) 1/2 × 1/2 ; b) 1/2 × 3/4 ; d) 2/3 × 3/5 ; e) 3/4 × 2/6.',
      'Maman prépare 3/4 de kapoaka de riz moulu et n’en utilise que la moitié. a) Écris l’opération. b) Calcule. d) La quantité utilisée est-elle plus grande ou plus petite que 3/4 ? e) Que reste-t-il pour demain ?'],
    corr: ['a) 2/4 = 1/2 ; b) 5/8 ; d) 6/5 = 1 + 1/5 ; e) 12/10 = 1 + 2/10 = 1 + 1/5.',
      'a) 1/4 ; b) 3/8 ; d) 6/15 = 2/5 ; e) 6/24 = 1/4.',
      'a) 1/2 × 3/4 ; b) 3/8 ; d) plus petite : la moitié d’une quantité est toujours plus petite qu’elle ; e) l’autre moitié, 3/8 de kapoaka.'],
    fig: 'u2f8'
  },
  {
    t: 'Diviser des fractions', comp: 'Opération', theme: 'Division de fractions simples',
    goal: 'diviser une fraction par un entier et une fraction par une fraction non nulle',
    mat: 'Bandes de fractions, verres doseurs en papier, cahier',
    revQ: 'Calcule 1/2 × 3/4.',
    revRA: '3/8.',
    situation: 'Il reste 1/2 bidon d’huile, et la louche de cuisine mesure 1/4 de bidon. Combien de louches peut-on encore servir ? « Combien de fois 1/4 entre dans 1/2 ? » — c’est une division de fractions, et la bande donne la réponse : 2 louches.',
    def: 'Diviser une fraction par un entier, c’est la partager : 1/2 ÷ 2 = 1/4. Diviser par une fraction non nulle, c’est chercher combien de fois elle entre dans l’autre ; le calcul se fait en multipliant par la fraction renversée : 1/2 ÷ 1/4 = 1/2 × 4/1 = 2.',
    autrement: 'diviser par une fraction, c’est multiplier par la fraction retournée tête en bas.',
    concept: 'Le renversement n’est pas un tour de passe-passe. « 1/2 ÷ 1/4 » demande : combien de quarts dans un demi ? La bande répond 2, et le calcul confirme : 1/2 × 4/1 = 4/2 = 2. Pourquoi renverser ? Parce que diviser par 1/4, c’est chercher combien de quarts — et il y a 4 quarts dans CHAQUE unité : diviser par 1/4 revient donc à multiplier par 4. Pour la division par un entier, deux chemins mènent au même endroit : 1/2 ÷ 2, c’est partager un demi en deux (1/4), ou multiplier par 1/2 renversé de 2/1. Autre surprise de taille : diviser par une fraction plus petite que 1 AGRANDIT le résultat — 3 ÷ 1/2 = 6, car il y a 6 demis dans 3 unités. Diviser ne veut pas toujours dire rapetisser !',
    synthese: 'a/b ÷ n = a/(b × n) ; a/b ÷ c/d = a/b × d/c ; diviser par moins de 1 agrandit ; on ne divise jamais par zéro.',
    method: ['Poser la question : « combien de fois entre… » ou « partager en… ».', 'Renverser la fraction diviseuse et transformer la division en multiplication.', 'Calculer haut × haut, bas × bas, puis simplifier et vérifier avec la bande.'],
    exemple: '3/4 ÷ 1/8 = 3/4 × 8/1 = 24/4 = 6 : il y a 6 huitièmes dans trois quarts.',
    erreur: 'Renverser la MAUVAISE fraction : dans 1/2 ÷ 1/4, c’est le diviseur 1/4 qui se retourne, jamais le 1/2 ! Retourner le premier donnerait un résultat faux.',
    saistu: 'La règle « multiplier par l’inverse » a mis longtemps à s’imposer : les mathématiciens indiens du Moyen Âge, comme Brahmagupta, l’utilisaient déjà au VIIᵉ siècle, mille ans avant qu’elle n’entre dans les écoles d’Europe. Ta petite règle de T5 a douze siècles d’histoire !',
    exos: ['Calcule : a) 1/2 ÷ 2 ; b) 3/4 ÷ 3 ; d) 2/5 ÷ 4 ; e) 5/6 ÷ 5.',
      'Calcule en renversant : a) 1/2 ÷ 1/4 ; b) 3/4 ÷ 1/8 ; d) 2/3 ÷ 1/6 ; e) 1/2 ÷ 3/4.',
      'Il reste 3/4 de bidon d’huile ; la louche mesure 1/8 de bidon. a) Écris la division. b) Calcule le nombre de louches. d) Vérifie par la multiplication. e) Avec une louche deux fois plus grande (1/4), combien de louches ?'],
    corr: ['a) 1/4 ; b) 1/4 ; d) 2/20 = 1/10 ; e) 1/6.',
      'a) 2 ; b) 6 ; d) 2/3 × 6/1 = 12/3 = 4 ; e) 1/2 × 4/3 = 4/6 = 2/3.',
      'a) 3/4 ÷ 1/8 ; b) 6 louches ; d) 6 × 1/8 = 6/8 = 3/4 ✓ ; e) 3/4 ÷ 1/4 = 3 louches.'],
    fig: 'u2f9'
  },
  {
    t: 'Additionner et soustraire des nombres décimaux', comp: 'Opération', theme: 'Addition et soustraction de décimaux',
    goal: 'poser et effectuer additions et soustractions de nombres décimaux, entre eux et avec des entiers',
    mat: 'Monnaie factice, mètre ruban, ardoises, cahier',
    revQ: 'Compare 3,5 et 3,47.',
    revRA: '3,5 = 3,50 > 3,47.',
    situation: 'Au marché, Noro achète du savon à 12,75 (en centaines d’ariary) et du sel à 3,5. La marchande pose l’addition… en alignant le 5 de 3,5 sous le 5 de 12,75 ! Le total devient absurde. Où est la faute ? Les virgules n’étaient pas alignées.',
    def: 'Pour additionner ou soustraire des nombres décimaux, on les pose en alignant les virgules — donc les rangs : unités sous unités, dixièmes sous dixièmes. On complète les parties décimales par des zéros pour leur donner la même longueur, puis on calcule comme avec des entiers ; la virgule du résultat s’aligne sous les autres.',
    autrement: 'la virgule est un repère de wagon : tous les trains s’arrêtent à la même gare, et chaque wagon se range derrière le sien.',
    concept: 'Tout le secret tient dans l’alignement : 12,75 + 3,5 se pose avec 3,50 sous 12,75 — le 3 sous le 2 des unités, le 5 sous le 7 des dixièmes — et donne 16,25. Aligner par la droite, comme avec les entiers, serait une catastrophe : on additionnerait des dixièmes avec des centièmes ! Le zéro ajouté à 3,5 → 3,50 ne change pas le nombre (0,5 = 0,50, vu à l’unité I) mais rend les colonnes complètes. Avec un entier, même principe : 15 s’écrit 15,00. Retenues et emprunts voyagent exactement comme chez les entiers, et traversent la virgule sans s’arrêter : 10 dixièmes font 1 unité. Preuve et ordre de grandeur restent de service : 16,25 − 3,50 = 12,75 ✓, et 12,75 + 3,5 ≈ 13 + 3 = 16 ✓.',
    synthese: 'aligner les virgules, compléter par des zéros, calculer comme des entiers, descendre la virgule ; preuve et estimation comme d’habitude.',
    method: ['Poser en alignant les virgules (entier → ajouter « ,00 »).', 'Compléter les parties décimales à la même longueur par des zéros.', 'Calculer colonne par colonne et placer la virgule du résultat sous les autres.'],
    exemple: '25 − 7,35 : poser 25,00 − 7,35 = 17,65 ; preuve : 17,65 + 7,35 = 25 ✓.',
    erreur: 'Aligner les nombres par la droite comme des entiers : 12,75 + 3,5 deviendrait « 12,75 + 0,35 » ! C’est la virgule qui commande l’alignement, pas le dernier chiffre.',
    saistu: 'Dans les stations-service, les pompes affichent les litres avec trois décimales : 25,347 L. Les compteurs additionnent des millièmes de litre des milliers de fois par jour — une seule erreur d’alignement de virgule, et c’est la file des clients qui déborde !',
    exos: ['Pose et calcule : a) 4,25 + 3,6 ; b) 12,08 + 9,92 ; d) 45,7 + 8,65 ; e) 0,75 + 0,25.',
      'Pose et calcule : a) 9,8 − 4,35 ; b) 20 − 6,45 ; d) 15,05 − 7,8 ; e) 100 − 99,99.',
      'Hanta mesure 1,38 m ; sa grande sœur mesure 1,6 m. a) Qui est la plus grande ? b) Pose la soustraction des tailles. d) Quelle est la différence ? e) Si Hanta grandit de 0,07 m, quelle sera sa taille ?'],
    corr: ['a) 7,85 ; b) 22 ; d) 54,35 ; e) 1.',
      'a) 5,45 ; b) 13,55 ; d) 7,25 ; e) 0,01.',
      'a) la sœur : 1,6 = 1,60 > 1,38 ; b) 1,60 − 1,38 ; d) 0,22 m ; e) 1,38 + 0,07 = 1,45 m.'],
    fig: 'u2f10'
  },
  {
    t: 'Multiplier et diviser des nombres décimaux', comp: 'Opération', theme: 'Multiplication et division de décimaux',
    goal: 'multiplier et diviser des nombres décimaux entre eux et avec des naturels',
    mat: 'Monnaie factice, étiquettes de prix, ardoises, cahier',
    revQ: 'Calcule 7,5 + 2,5 puis 10 − 3,25.',
    revRA: '10 ; 6,75.',
    situation: 'Le tissu coûte 2,5 (milliers d’ariary) le mètre, et Maman en achète 1,2 m pour un corsage. Le marchand calcule 25 × 12 = 300 sur son papier, puis écrit 3,00. Magie ? Non : il a calculé sans virgules, puis a remis les virgules à leur place.',
    def: 'Pour multiplier des décimaux, on calcule le produit sans tenir compte des virgules, puis on place la virgule au résultat : il doit avoir autant de chiffres après la virgule que les deux facteurs réunis. Pour diviser un décimal par un entier, on divise normalement et la virgule du quotient se place au moment où l’on franchit celle du dividende ; pour diviser par un décimal, on décale d’abord les deux virgules du même nombre de rangs pour rendre le diviseur entier.',
    autrement: 'on enlève les virgules, on calcule, puis on rend au résultat tous les rangs décimaux confisqués.',
    concept: 'La règle des rangs n’est que la multiplication des fractions décimales en habit court : 2,5 × 1,2 = 25/10 × 12/10 = 300/100 = 3,00 — un rang décimal de chaque facteur, deux rangs au produit. L’estimation fait le garde-fou : 2,5 × 1,2 vaut un peu plus que 2,5 × 1 = 2,5, donc 3 est crédible, et ni 0,3 ni 30. Pour la division, 7,2 ÷ 3 se déroule comme 72 ÷ 3 : on pose, et quand on franchit la virgule du dividende, on la pose au quotient : 2,4. Diviser par un décimal se ramène toujours à un diviseur entier : 4,5 ÷ 1,5 = 45 ÷ 15 = 3 — on a multiplié les DEUX nombres par 10, et un quotient ne change pas quand on multiplie les deux par le même nombre (il y a autant de fois 15 dans 45 que de fois 1,5 dans 4,5).',
    synthese: 'produit : total des rangs décimaux des facteurs ; division par entier : virgule franchie = virgule posée ; division par décimal : décaler les deux virgules pareil.',
    method: ['Estimer d’abord l’ordre de grandeur du résultat.', 'Calculer sans virgules, puis replacer la virgule (produit : somme des rangs ; division : au franchissement).', 'Confronter à l’estimation pour valider.'],
    exemple: '3,25 × 4 = 13 (deux rangs : 325 × 4 = 1 300 → 13,00) ; 9,6 ÷ 4 = 2,4 ; 8,4 ÷ 0,2 = 84 ÷ 2 = 42.',
    erreur: 'Compter les rangs décimaux d’un seul facteur : 2,5 × 1,2 avec un seul rang donnerait 30 — dix fois trop ! On additionne les rangs des DEUX facteurs : 1 + 1 = 2 rangs.',
    saistu: 'Le compteur du taxi multiplie des décimaux en continu : tant de centièmes de kilomètre fois tant d’ariary le kilomètre. Et quand l’essence s’affiche à 4 850,99 Ar le litre, ce « ,99 » n’est pas un hasard : les vendeurs du monde entier savent que 4 850,99 paraît bien moins cher que 4 851 !',
    exos: ['Calcule : a) 1,5 × 4 ; b) 3,25 × 6 ; d) 2,5 × 1,2 ; e) 0,5 × 0,5.',
      'Calcule : a) 9,6 ÷ 4 ; b) 7,5 ÷ 5 ; d) 13,5 ÷ 0,5 ; e) 4,5 ÷ 1,5.',
      'Le mètre de tissu coûte 2,4 (milliers d’Ar). a) Estime le prix de 3,5 m. b) Calcule exactement. d) Maman paie avec 10 : combien lui rend-on ? e) Combien de mètres pour exactement 6 ?'],
    corr: ['a) 6 ; b) 19,5 ; d) 3 ; e) 0,25.',
      'a) 2,4 ; b) 1,5 ; d) 27 ; e) 3.',
      'a) entre 2,4 × 3 = 7,2 et 2,4 × 4 = 9,6 ; b) 2,4 × 3,5 = 8,4 ; d) 10 − 8,4 = 1,6 ; e) 6 ÷ 2,4 = 60 ÷ 24 = 2,5 m.'],
    fig: 'u2f11'
  },
  {
    t: 'La priorité des opérations', comp: 'Opération', theme: 'Chaînes d’opérations avec et sans parenthèses',
    goal: 'effectuer une chaîne d’opérations en respectant la priorité des opérations',
    mat: 'Cartes d’opérations, ardoises, cahier',
    revQ: 'Calcule 4,5 × 2.',
    revRA: '9.',
    situation: 'Le maître écrit au tableau : 5 + 3 × 2. La moitié de la classe répond 16, l’autre moitié 11. Deux réponses pour un seul calcul, c’est une de trop ! Les mathématiciens ont tranché depuis longtemps : il existe un ordre officiel des opérations.',
    def: 'Dans une chaîne d’opérations, on calcule d’abord ce qui est entre parenthèses ; puis les multiplications et divisions, de gauche à droite ; enfin les additions et soustractions, de gauche à droite. C’est la priorité des opérations.',
    autrement: 'parenthèses d’abord, ensuite × et ÷, et les + et − passent en dernier.',
    concept: 'Sans règle commune, chaque calculette du monde donnerait un résultat différent ! La règle dit que 5 + 3 × 2 vaut 5 + 6 = 11 : la multiplication se sert avant l’addition, même placée après elle dans la ligne. Qui veut l’autre résultat doit le COMMANDER avec des parenthèses : (5 + 3) × 2 = 16. Les parenthèses sont les reines : tout ce qu’elles enferment se calcule d’abord, comme un paquet à ouvrir en premier. À égalité de priorité, on lit de gauche à droite : 20 − 8 + 3 = 12 + 3 = 15 (et non 20 − 11 = 9 !), et 24 ÷ 4 × 2 = 6 × 2 = 12. Le bon geste : souligner l’opération prioritaire, la calculer, réécrire la chaîne raccourcie — ligne après ligne, jusqu’au résultat. Les situations réelles fabriquent ces chaînes toutes seules : 3 cahiers à 500 Ar et 2 stylos à 300 Ar, c’est 3 × 500 + 2 × 300 = 1 500 + 600 = 2 100 Ar.',
    synthese: 'parenthèses → × et ÷ → + et − ; à priorité égale, de gauche à droite ; réécrire la chaîne à chaque étape.',
    method: ['Repérer et calculer d’abord les parenthèses.', 'Souligner puis effectuer les × et ÷ de gauche à droite.', 'Terminer par les + et − de gauche à droite, en réécrivant la chaîne à chaque ligne.'],
    exemple: '18 − (4 + 2) × 2 = 18 − 6 × 2 = 18 − 12 = 6.',
    erreur: 'Calculer de gauche à droite sans regarder les signes : 5 + 3 × 2 n’est PAS 8 × 2 ! L’ordre d’écriture n’est pas l’ordre de calcul.',
    saistu: 'Tape 5 + 3 × 2 sur deux calculatrices différentes : la calculatrice scientifique répond 11, mais beaucoup de calculatrices simples répondent 16, car elles calculent bêtement de gauche à droite ! C’est pour éviter ces disputes de machines que la priorité des opérations est enseignée partout dans le monde.',
    exos: ['Calcule : a) 7 + 2 × 5 ; b) 20 − 12 ÷ 4 ; d) 6 × 4 − 10 ; e) 36 ÷ 6 + 3.',
      'Calcule : a) (7 + 2) × 5 ; b) (20 − 12) ÷ 4 ; d) 5 × (8 − 3) + 4 ; e) 100 − (25 + 15) × 2.',
      'Au marché : 3 cahiers à 800 Ar et 4 stylos à 250 Ar, payés avec 5 000 Ar. a) Écris la chaîne d’opérations de la dépense. b) Calcule la dépense. d) Écris la chaîne de la monnaie rendue. e) Calcule la monnaie.'],
    corr: ['a) 7 + 10 = 17 ; b) 20 − 3 = 17 ; d) 24 − 10 = 14 ; e) 6 + 3 = 9.',
      'a) 9 × 5 = 45 ; b) 8 ÷ 4 = 2 ; d) 5 × 5 + 4 = 29 ; e) 100 − 40 × 2 = 100 − 80 = 20.',
      'a) 3 × 800 + 4 × 250 ; b) 2 400 + 1 000 = 3 400 Ar ; d) 5 000 − (3 × 800 + 4 × 250) ; e) 5 000 − 3 400 = 1 600 Ar.'],
    fig: 'u2f12'
  },
  {
    t: 'Le calcul mental : stratégies efficaces', comp: 'Opération', theme: 'Stratégies de calcul mental variées',
    goal: 'utiliser des stratégies de calcul mental variées : ×10, ×100, ×1 000, décomposition, doubles, moitiés, compensation',
    mat: 'Ardoises, cartes éclair, chronomètre, cahier',
    revQ: 'Calcule 25 − (5 + 8).',
    revRA: '25 − 13 = 12.',
    situation: 'Au marché, la marchande annonce « 4 kapoaka à 99 Ar ? 396 ! » avant même que Rivo ait sorti son crayon. Son secret n’est pas un don : elle a calculé 4 × 100 − 4. Les champions du calcul mental ne calculent pas plus vite — ils calculent PLUS MALIN.',
    def: 'Le calcul mental consiste à calculer de tête, sans poser l’opération, en transformant le calcul en un calcul plus simple : multiplier ou diviser par 10, 100, 1 000 (les chiffres glissent de 1, 2 ou 3 rangs), décomposer les nombres, utiliser les doubles et les moitiés, ou compenser (ajouter d’un côté ce qu’on retire de l’autre).',
    autrement: 'au lieu d’attaquer le calcul de front, on le déguise en calcul facile qui donne le même résultat.',
    concept: 'Chaque stratégie a son terrain de chasse. ×10, ×100, ×1 000 : les chiffres glissent vers la gauche — 47 × 100 = 4 700 ; en sens inverse, 35 000 ÷ 1 000 = 35. La décomposition coupe le travail en morceaux : 48 + 27 = 48 + 20 + 7 = 68 + 7 = 75 ; et 6 × 45 = 6 × 40 + 6 × 5 = 240 + 30 = 270. Doubles et moitiés font des échanges : 25 × 16 = 50 × 8 = 100 × 4 = 400 — on double l’un, on prend la moitié de l’autre, le produit ne bouge pas. La compensation arrondit puis répare : 99 + 46 = 100 + 45 = 145 ; 4 × 99 = 400 − 4 = 396 — le secret de la marchande ! Garder des traces écrites des résultats partiels n’est pas tricher : c’est ce que recommande le programme. Et l’entraînement quotidien, cinq minutes par jour, vaut mieux qu’une heure par mois.',
    synthese: '×/÷ 10, 100, 1 000 = glissement de rangs ; décomposer ; doubles-moitiés ; compensation = arrondir puis réparer.',
    method: ['Observer le calcul : y a-t-il un nombre rond tout proche, un 10 ou 100 caché, un double commode ?', 'Choisir UNE stratégie et transformer le calcul.', 'Effectuer le calcul facile et noter le résultat partiel si besoin.'],
    exemple: '45 × 20 = 45 × 2 × 10 = 90 × 10 = 900 ; et 73 − 29 = 73 − 30 + 1 = 44.',
    erreur: 'Compenser dans le mauvais sens pour la soustraction : 73 − 29 = 73 − 30 + 1, et non − 1 ! On a retranché 1 de trop, il faut le RENDRE. Vérifier sur un petit exemple en cas de doute : 5 − 2 = 5 − 3 + 1 — correct.',
    saistu: 'Le record du monde de calcul mental dépasse l’imagination : des champions multiplient deux nombres de huit chiffres de tête en moins d’une minute ! Leur secret est le même que le tien : décomposer, compenser, s’entraîner — simplement poussé à l’extrême pendant des années.',
    exos: ['Calcule de tête : a) 36 × 10 ; b) 58 × 100 ; d) 47 000 ÷ 1 000 ; e) 230 × 1 000.',
      'Calcule de tête en décomposant ou compensant : a) 57 + 38 ; b) 99 + 67 ; d) 85 − 29 ; e) 6 × 99.',
      'Calcule par doubles et moitiés : a) 25 × 12 ; b) 50 × 18 ; d) 4 × 35 ; e) 16 × 25. Puis explique ta stratégie préférée en une phrase.'],
    corr: ['a) 360 ; b) 5 800 ; d) 47 ; e) 230 000.',
      'a) 57 + 40 − 2 = 95 ; b) 100 + 66 = 166 ; d) 85 − 30 + 1 = 56 ; e) 600 − 6 = 594.',
      'a) 50 × 6 = 300 ; b) 100 × 9 = 900 ; d) 2 × 70 = 140 ; e) 8 × 50 = 400 (ou 4 × 100). Toute explication correcte est acceptée.'],
    fig: 'u2f13'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Opération',
  rag: 'effectuer les quatre opérations sur les nombres naturels jusqu’à 1 000 000, les fractions simples et les nombres décimaux, en situation de résolution de problèmes.',
  valeurs: 'rigueur et autonomie',
  sessions: S,
  revision: {
    table: [
      ['Sens des opérations', 'Ajout, réunion → + ; retrait, comparaison → −', 'Choisir l’opération d’après la situation'],
      ['Addition / soustraction', 'Alignement par colonnes ; retenue = échange ; emprunt = échange inverse', 'Poser et prouver jusqu’à 1 000 000'],
      ['Multiplication', '3 chiffres × 2 chiffres : deux produits partiels, décalage d’un rang', 'Poser, calculer, estimer'],
      ['Division', 'Dividende = diviseur × quotient + reste ; reste < diviseur ; partage et groupement', 'Diviser et interpréter le reste'],
      ['Fractions', 'Multiplier : haut × haut, bas × bas ; diviser : × la fraction renversée', 'Calculer avec les fractions simples'],
      ['Décimaux et priorités', 'Virgules alignées ; rangs décimaux du produit ; parenthèses → × ÷ → + −', 'Calculer juste, de tête ou posé']
    ],
    questions: [
      'Pose et calcule : 268 475 + 356 948, puis écris la preuve de 624 500 − 268 475.',
      'Calcule 436 × 57 après avoir donné un ordre de grandeur.',
      '229 œufs en boîtes de 12 : quotient, reste, preuve, et nombre de boîtes à prévoir pour tout ranger ?',
      'Calcule : 3 × 2/5 ; 1/2 × 3/4 ; 3/4 ÷ 1/8.',
      'Calcule : 12,75 + 3,5 ; 2,5 × 1,2 ; puis 100 − (15 + 5) × 4.'
    ],
    answers: [
      '625 423 ; 624 500 − 268 475 = 356 025 et 356 025 + 268 475 = 624 500 ✓.',
      '≈ 400 × 60 = 24 000 ; 436 × 57 = 24 852.',
      '229 ÷ 12 = 19 reste 1 ; (12 × 19) + 1 = 229 ✓ ; il faut 20 boîtes.',
      '6/5 = 1 + 1/5 ; 3/8 ; 6.',
      '16,25 ; 3 ; 100 − 80 = 20.'
    ]
  },
  exam: {
    exos: [
      'Opérations posées. Pose et effectue : a) 356 248 + 287 965. b) 500 000 − 274 386. d) 408 × 37. e) Écris la preuve de la soustraction du b).',
      'Division. On répartit 365 kg de riz en sacs de 8 kg. a) Pose la division et donne quotient et reste. b) Écris la preuve. d) Combien de sacs pleins obtient-on ? e) Combien de kg manque-t-il pour remplir un sac de plus ?',
      'Fractions. Calcule : a) 4 × 2/3. b) 1/2 × 5/6. d) 2/3 ÷ 1/6. e) Il reste 3/4 de gâteau à partager entre 3 enfants : quelle part pour chacun ?',
      'Décimaux et priorités. a) Calcule 24,5 + 8,75. b) Calcule 30 − 12,65. d) Calcule 3,5 × 2,4. e) Calcule 50 − (12 + 8) × 2.',
      'Problème. Pour la cantine, le directeur achète 36 sacs de riz à 2 450 Ar le kilo, chaque sac pesant 25 kg. a) Combien de kilos de riz en tout ? b) Estime la dépense totale par un ordre de grandeur. d) Calcule la dépense exacte. e) Le budget est de 2 300 000 Ar : suffit-il ? Justifie.'
    ],
    corr: [
      'a) 644 213 ; b) 225 614 ; d) 15 096 ; e) 225 614 + 274 386 = 500 000 ✓. Un point par item.',
      'a) 365 ÷ 8 : quotient 45, reste 5 ; b) (8 × 45) + 5 = 365 ✓ ; d) 45 sacs pleins ; e) 8 − 5 = 3 kg. Un point par item.',
      'a) 8/3 = 2 + 2/3 ; b) 5/12 ; d) 2/3 × 6/1 = 4 ; e) 3/4 ÷ 3 = 1/4 de gâteau chacun. Un point par item.',
      'a) 33,25 ; b) 17,35 ; d) 8,4 ; e) 50 − 40 = 10. Un point par item.',
      'a) 36 × 25 = 900 kg ; b) ≈ 900 × 2 500 = 2 250 000 Ar ; d) 900 × 2 450 = 2 205 000 Ar ; e) oui : 2 205 000 < 2 300 000, il reste 95 000 Ar. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
