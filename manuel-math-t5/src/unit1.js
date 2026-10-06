// UNITÉ 1 — NOMBRE (PE T5) : 12 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, bar, grid100, PINK, PINK2, GREEN, GREENL, BLUE, OCRE } = L;

const figs = {};
// S1 — lire et écrire jusqu'à 1 000 000
figs.u1f1 = (() => { const { s, y } = head('Lire un grand nombre par classes', ['On sépare les chiffres par tranches de trois, en partant de la droite.']);
  const top = y + 20;
  let b = tableEl(120, top, [380, 380], 56, [['Classe des mille', 'Classe des unités'], ['348', '256']]);
  b += txt(500, top + 2 * 56 + 50, '348 256 se lit : « trois cent quarante-huit mille deux cent cinquante-six »', 21, PINK2, 'bold', 'middle');
  b += txt(500, top + 2 * 56 + 88, '1 000 000 = mille fois mille : un million', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 118, s + b); })();
// S2 — valeur de position
figs.u1f2 = (() => { const { s, y } = head('Le tableau de numération', ['Dans 507 213, le même chiffre ne vaut pas partout la même chose.']);
  const top = y + 20;
  const data = [['CM', 'DM', 'UM', 'C', 'D', 'U'], ['5', '0', '7', '2', '1', '3']];
  let b = tableEl(170, top, [110, 110, 110, 110, 110, 110], 56, data);
  b += txt(500, top + 2 * 56 + 45, 'le 5 vaut 500 000 ; le 7 vaut 7 000 ; le 0 garde la place des dizaines de mille', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 2 * 56 + 82, 'CM = centaines de mille, DM = dizaines de mille, UM = unités de mille', 19, OCRE, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 112, s + b); })();
// S3 — comparer
figs.u1f3 = (() => { const { s, y } = head('Comparer deux grands nombres', ['Même nombre de chiffres : on compare colonne par colonne depuis la gauche.']);
  const top = y + 25;
  let b = txt(290, top + 30, '4 5 8 2 1 7', 34, GREEN, 'bold', 'middle') + txt(710, top + 30, '4 5 6 9 9 8', 34, BLUE, 'bold', 'middle');
  b += txt(500, top + 30, '?', 30, PINK2, 'bold', 'middle');
  b += box(150, top + 60, 280, 54, '4 = 4, puis 5 = 5', GREENL, GREEN, 22);
  b += box(570, top + 60, 280, 54, 'puis 8 > 6 : gagné !', '#FDE7EF', PINK2, 22);
  b += txt(500, top + 160, '458 217 > 456 998', 30, PINK2, 'bold', 'middle');
  b += txt(500, top + 200, 'et un nombre de 6 chiffres est toujours plus grand qu’un nombre de 5 chiffres', 19, OCRE, 'bold', 'middle');
  return svg(1000, top + 230, s + b); })();
// S4 — composer par groupements
figs.u1f4 = (() => { const { s, y } = head('Composer 100 000 par groupements', ['Avec des paquets de 10 000, de 25 000 ou de 50 000, on atteint le même total.']);
  const top = y + 25;
  let b = '';
  for (let i = 0; i < 10; i++) b += box(80 + i * 85, top, 75, 46, '10 000', GREENL, GREEN, 15);
  for (let i = 0; i < 4; i++) b += box(170 + i * 180, top + 70, 160, 46, '25 000', '#FDE7EF', PINK2, 20);
  for (let i = 0; i < 2; i++) b += box(260 + i * 260, top + 140, 220, 46, '50 000', '#FFF3E0', OCRE, 20);
  b += txt(500, top + 230, '10 × 10 000 = 4 × 25 000 = 2 × 50 000 = 100 000', 24, PINK2, 'bold', 'middle');
  return svg(1000, top + 262, s + b); })();
// S5 — décomposer
figs.u1f5 = (() => { const { s, y } = head('Décomposer un nombre de plusieurs façons', ['68 425 peut s’écrire de différentes manières, toutes exactes.']);
  const top = y + 20;
  let b = box(120, top, 760, 52, '68 425 = 60 000 + 8 000 + 400 + 20 + 5', GREENL, GREEN, 24);
  b += box(120, top + 70, 760, 52, '68 425 = (6 × 10 000) + (8 × 1 000) + (4 × 100) + (2 × 10) + 5', '#FDE7EF', PINK2, 21);
  b += box(120, top + 140, 760, 52, '68 425 = 68 milliers et 425 unités', '#FFF3E0', OCRE, 24);
  b += txt(500, top + 232, 'décomposer, c’est « ouvrir » le nombre ; composer, c’est le refermer', 20, BLUE, 'bold', 'middle');
  return svg(1000, top + 262, s + b); })();
// S6 — représenter une fraction
figs.u1f6 = (() => { const { s, y } = head('La fraction 3/4 : trois parts sur quatre', ['Le dénominateur découpe l’unité ; le numérateur colorie les parts prises.']);
  const top = y + 25;
  let b = bar(150, top, 700, 80, 4, 3);
  b += txt(500, top + 125, 'numérateur 3 = parts coloriées ; dénominateur 4 = parts égales du découpage', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 162, '3/4 se lit « trois quarts »', 22, GREEN, 'bold', 'middle');
  return svg(1000, top + 192, s + b); })();
// S7 — fractions équivalentes
figs.u1f7 = (() => { const { s, y } = head('Des fractions équivalentes', ['Trois bandes identiques : la partie coloriée est exactement la même.']);
  const top = y + 20;
  let b = bar(150, top, 700, 56, 2, 1) + txt(100, top + 38, '1/2', 26, PINK2, 'bold', 'middle');
  b += bar(150, top + 76, 700, 56, 4, 2) + txt(100, top + 114, '2/4', 26, PINK2, 'bold', 'middle');
  b += bar(150, top + 152, 700, 56, 8, 4) + txt(100, top + 190, '4/8', 26, PINK2, 'bold', 'middle');
  b += txt(500, top + 250, '1/2 = 2/4 = 4/8 : on multiplie le haut et le bas par le même nombre', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 282, s + b); })();
// S8 — fractions sur la droite numérique
figs.u1f8 = (() => { const { s, y } = head('Placer des fractions sur la droite', ['Entre 0 et 1, chaque fraction a sa place exacte.']);
  const top = y + 50;
  let b = nline(120, top, 760, 8, ['0', '', '2/8', '', '4/8', '', '6/8', '', '1']);
  b += dot(120 + 760 * 1 / 4, top, 10, PINK2) + txt(120 + 760 / 4, top - 28, '1/4', 24, PINK2, 'bold', 'middle');
  b += dot(120 + 760 * 1 / 2, top, 10, GREEN) + txt(120 + 760 / 2, top - 28, '1/2', 24, GREEN, 'bold', 'middle');
  b += dot(120 + 760 * 3 / 4, top, 10, OCRE) + txt(120 + 760 * 3 / 4, top - 28, '3/4', 24, OCRE, 'bold', 'middle');
  b += txt(500, top + 95, '1/4 = 2/8 et 1/2 = 4/8 : les équivalentes tombent au même endroit', 21, BLUE, 'bold', 'middle');
  return svg(1000, top + 128, s + b); })();
// S9 — fraction impropre et nombre fractionnaire
figs.u1f9 = (() => { const { s, y } = head('5/4 : plus grand que l’unité', ['Cinq quarts remplissent une unité entière… et il reste un quart.']);
  const top = y + 25;
  let b = bar(110, top, 360, 70, 4, 4) + bar(530, top, 360, 70, 4, 1);
  b += txt(290, top + 105, '4/4 = 1 entier', 22, GREEN, 'bold', 'middle') + txt(710, top + 105, 'et encore 1/4', 22, PINK2, 'bold', 'middle');
  b += txt(500, top + 160, '5/4 = 1 + 1/4, que l’on écrit aussi « 1 et 1/4 »', 24, OCRE, 'bold', 'middle');
  return svg(1000, top + 192, s + b); })();
// S10 — décimaux et grille
figs.u1f10 = (() => { const { s, y } = head('0,25 sur la grille de 100 cases', ['La grille entière vaut 1 ; chaque petite case vaut un centième.']);
  const top = y + 20;
  let b = grid100(360, top, 28, 25);
  b += txt(720, top + 90, '25 cases sur 100', 23, PINK2, 'bold');
  b += txt(720, top + 130, '25/100 = 0,25', 26, GREEN, 'bold');
  b += txt(500, top + 320, 'partie entière 0, puis 2 dixièmes et 5 centièmes après la virgule', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 352, s + b); })();
// S11 — comparer les décimaux
figs.u1f11 = (() => { const { s, y } = head('Comparer des décimaux : 0,4 = 0,40', ['Quatre dixièmes ou quarante centièmes : la même partie coloriée.']);
  const top = y + 20;
  let b = grid100(170, top, 24, 40) + grid100(590, top, 24, 40);
  b += txt(290, top + 285, '0,4 = 4 dixièmes', 23, GREEN, 'bold', 'middle');
  b += txt(710, top + 285, '0,40 = 40 centièmes', 23, PINK2, 'bold', 'middle');
  b += txt(500, top + 330, 'et 0,5 > 0,47 car 50 centièmes > 47 centièmes', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 362, s + b); })();
// S12 — fractions décimales et décimaux
figs.u1f12 = (() => { const { s, y } = head('Fraction décimale et nombre décimal', ['Dénominateur 10 ou 100 : la fraction s’écrit directement avec une virgule.']);
  const top = y + 20;
  const data = [['Fraction décimale', 'Nombre décimal', 'Lecture'], ['4/10', '0,4', 'quatre dixièmes'], ['25/100', '0,25', 'vingt-cinq centièmes'], ['7/100', '0,07', 'sept centièmes'], ['130/100', '1,30', 'un et trente centièmes']];
  let b = tableEl(110, top, [260, 240, 280], 52, data);
  b += txt(500, top + 5 * 52 + 42, 'diviser le numérateur par le dénominateur donne le nombre décimal', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 5 * 52 + 74, s + b); })();

const S = [
  {
    t: 'Lire et écrire les nombres jusqu’à 1 000 000', comp: 'Nombre', theme: 'Nombres naturels jusqu’à 1 000 000',
    goal: 'lire et écrire en chiffres et en lettres les nombres naturels jusqu’à 1 000 000',
    mat: 'Étiquettes de chiffres, tableau de numération, cahier, ardoises',
    revQ: 'Écris en chiffres : « huit mille deux cent trois ».',
    revRA: '8 203.',
    situation: 'Au marché d’Analakely, un marchand de riz affiche le prix d’un grand sac : 348 256 Ar. Voary sait lire « mille », mais ce nombre-là est bien plus long ! Comment lire sans se tromper un nombre de six chiffres ?',
    def: 'Pour lire un grand nombre, on sépare ses chiffres en classes de trois chiffres en partant de la droite : la classe des unités, puis la classe des mille. Le nombre 1 000 000, qui vaut mille fois mille, s’appelle un million.',
    autrement: 'on coupe le nombre en tranches de trois chiffres, et on lit tranche après tranche en disant « mille » entre les deux.',
    concept: 'Dans 348 256, la tranche de gauche se lit « trois cent quarante-huit » suivie du mot « mille », puis la tranche de droite se lit « deux cent cinquante-six ». L’espace entre les tranches n’est pas une décoration : il montre la frontière des classes et rend la lecture immédiate. Pour écrire en lettres, on suit exactement la lecture : trois cent quarante-huit mille deux cent cinquante-six. Pour écrire en chiffres un nombre dicté, on écrit d’abord la classe des mille, puis TROIS chiffres pour la classe des unités — quitte à compléter avec des zéros : « quarante mille sept » s’écrit 40 007, et non 407.',
    synthese: 'classes de trois chiffres depuis la droite ; on lit la classe des mille, le mot « mille », puis la classe des unités ; chaque classe à droite doit avoir ses trois chiffres.',
    method: ['Séparer le nombre en tranches de trois chiffres en partant de la droite.', 'Lire la tranche de gauche puis dire « mille ».', 'Lire la tranche de droite ; en écrivant, compléter chaque classe avec des zéros si besoin.'],
    exemple: '602 040 se lit « six cent deux mille quarante » ; « quinze mille neuf » s’écrit 15 009.',
    erreur: 'Écrire « quarante mille sept » 407 ou 4 007 : la classe des unités doit garder ses trois chiffres, donc 40 007. Compter les chiffres après « mille » !',
    saistu: 'Madagascar compte environ 30 millions d’habitants, et sa capitale Antananarivo en abrite plus de 1 000 000 à elle seule : chaque fois que tu écris un million, tu écris à peu près le nombre d’habitants de Tana !',
    exos: ['Écris en lettres : a) 7 245 ; b) 83 060 ; d) 500 500 ; e) 1 000 000.',
      'Écris en chiffres : a) douze mille trois cent quatre ; b) deux cent mille vingt ; d) neuf cent quatre-vingt-dix mille ; e) six cent un mille huit.',
      'a) Combien de chiffres a un million ? b) Lis 907 013. d) Écris le nombre juste avant 400 000. e) Écris le nombre juste après 599 999.'],
    corr: ['a) sept mille deux cent quarante-cinq ; b) quatre-vingt-trois mille soixante ; d) cinq cent mille cinq cents ; e) un million.',
      'a) 12 304 ; b) 200 020 ; d) 990 000 ; e) 601 008.',
      'a) 7 chiffres ; b) neuf cent sept mille treize ; d) 399 999 ; e) 600 000.'],
    fig: 'u1f1'
  },
  {
    t: 'La valeur de position : le tableau de numération', comp: 'Nombre', theme: 'Valeur de position jusqu’à 1 000 000',
    goal: 'donner la valeur d’un chiffre selon sa position dans un nombre de six chiffres',
    mat: 'Tableau de numération, étiquettes de chiffres, ardoises, cahier',
    revQ: 'Lis le nombre 405 230.',
    revRA: 'Quatre cent cinq mille deux cent trente.',
    situation: 'Deux élèves ont écrit le nombre « cinq cent sept mille deux cent treize ». Lanto a écrit 507 213 et Hery a écrit 57 213. Un seul a raison. Qui ? Pourquoi ce zéro change-t-il tout ?',
    def: 'Dans un nombre, chaque chiffre a une valeur de position : il vaut selon la colonne qu’il occupe — unités, dizaines, centaines, unités de mille, dizaines de mille, centaines de mille. Le zéro marque une colonne vide et garde la place des autres chiffres.',
    autrement: 'un chiffre, c’est comme une personne dans une file : sa valeur dépend de la place où il se tient.',
    concept: 'Le tableau de numération donne un nom à chaque colonne : U, D, C pour la classe des unités ; UM, DM, CM pour la classe des mille. Dans 507 213, le chiffre 5 occupe la colonne CM : il vaut 5 × 100 000 = 500 000. Le chiffre 7 occupe la colonne UM et vaut 7 000. Le 0 de la colonne DM signifie « aucune dizaine de mille » — mais sans lui, tous les chiffres de gauche glisseraient d’une colonne et le nombre serait divisé par dix ! C’est pour cela que Lanto a raison et Hery a tort. Attention à distinguer « le chiffre des dizaines de mille » (un seul chiffre) et « le nombre de dizaines de mille » (tout ce qui est à gauche de la colonne, elle comprise : dans 507 213, c’est 50).',
    synthese: 'six colonnes U, D, C, UM, DM, CM ; valeur du chiffre = chiffre × valeur de sa colonne ; le zéro garde la place.',
    method: ['Placer le nombre dans le tableau, un chiffre par colonne, en partant de la droite.', 'Repérer la colonne du chiffre étudié.', 'Multiplier le chiffre par la valeur de sa colonne.'],
    exemple: 'Dans 860 459, le chiffre 6 est dans la colonne DM : il vaut 6 × 10 000 = 60 000.',
    erreur: 'Oublier le zéro intercalé : « cinq cent sept mille » s’écrit 507 000 et non 57 000. Toujours compter six colonnes pour un nombre de six chiffres.',
    saistu: 'Notre façon d’écrire les nombres avec la valeur de position vient d’Inde, a voyagé par les savants arabes, et n’est arrivée en Europe qu’au Moyen Âge. Avant, avec les chiffres romains, écrire 507 213 demandait des lignes entières de lettres — et poser une addition était un vrai casse-tête !',
    exos: ['Dans 624 587, donne la valeur du chiffre : a) 6 ; b) 2 ; d) 4 ; e) 8.',
      'Écris en chiffres : a) 3 CM 0 DM 8 UM 2 C 0 D 6 U ; b) 9 DM 9 U ; d) le plus grand nombre de 6 chiffres ; e) le plus petit nombre de 6 chiffres.',
      'Dans 740 158 : a) quel est le chiffre des dizaines de mille ? b) le chiffre des centaines ? d) le nombre d’unités de mille ? e) que devient le nombre si l’on remplace le 0 par un 9 ?'],
    corr: ['a) 600 000 ; b) 20 000 ; d) 4 000 ; e) 80.',
      'a) 308 206 ; b) 90 009 ; d) 999 999 ; e) 100 000.',
      'a) 4 ; b) 1 ; d) 740 ; e) 749 158, il augmente de 9 000.'],
    fig: 'u1f2'
  },
  {
    t: 'Comparer et ordonner avec >, < et =', comp: 'Nombre', theme: 'Comparaison et rangement des nombres',
    goal: 'comparer et ordonner des nombres jusqu’à 1 000 000 à l’aide des symboles >, < et =',
    mat: 'Cartes de nombres, droite numérique, ardoises, cahier',
    revQ: 'Dans 582 140, que vaut le chiffre 8 ?',
    revRA: '80 000, car il est dans la colonne des dizaines de mille.',
    situation: 'Deux villages comptent leurs récoltes de riz : Ambohimanga a récolté 458 217 kg et Ambatolampy 456 998 kg. Les deux nombres commencent pareil… Lequel des deux villages a récolté le plus ?',
    def: 'Comparer deux nombres, c’est dire lequel est le plus grand. Le symbole > se lit « est plus grand que », le symbole < « est plus petit que » et le symbole = « est égal à ». Ordonner des nombres, c’est les ranger du plus petit au plus grand (ordre croissant) ou du plus grand au plus petit (ordre décroissant).',
    autrement: 'la pointe du symbole pique toujours le plus petit nombre, et l’ouverture s’offre au plus grand.',
    concept: 'La règle tient en deux temps. D’abord compter les chiffres : un nombre de six chiffres dépasse toujours un nombre de cinq chiffres (100 000 > 99 999). Ensuite, à longueur égale, comparer colonne par colonne en partant de la GAUCHE : pour 458 217 et 456 998, on lit 4 = 4, puis 5 = 5, puis 8 > 6 — inutile d’aller plus loin, 458 217 gagne, même si la fin 998 paraît « grosse ». La droite numérique raconte la même histoire : plus un nombre est à droite, plus il est grand. Pour ordonner une liste, on compare de proche en proche et on relie les nombres par le même symbole : 456 998 < 458 217 < 460 000.',
    synthese: 'plus de chiffres = plus grand ; à longueur égale, comparaison colonne par colonne depuis la gauche ; la pointe du symbole désigne le petit.',
    method: ['Compter les chiffres des deux nombres.', 'À longueur égale, comparer les chiffres de gauche à droite jusqu’à la première différence.', 'Écrire le symbole : la pointe vers le petit, l’ouverture vers le grand.'],
    exemple: '98 750 < 102 300 (5 chiffres contre 6) ; 731 450 > 731 405 car à la colonne des dizaines, 5 > 0.',
    erreur: 'Comparer en partant de la droite : dans 458 217 et 456 998, la fin « 998 » impressionne mais ne décide rien. La première différence EN PARTANT DE LA GAUCHE commande tout.',
    saistu: 'Les symboles < et > ont été inventés par le mathématicien anglais Thomas Harriot il y a environ 400 ans. Son manuscrit n’a été publié qu’après sa mort — il n’a jamais su que ses deux petits becs seraient utilisés chaque jour par tous les écoliers du monde !',
    exos: ['Complète avec >, < ou = : a) 45 870 … 45 807 ; b) 99 999 … 100 000 ; d) 530 200 … 530 200 ; e) 708 415 … 78 415.',
      'Range en ordre croissant : a) 25 400 ; 24 500 ; 25 040. b) 310 000 ; 301 000 ; 130 000. d) 999 ; 9 999 ; 99 999. e) 606 060 ; 660 006 ; 600 666.',
      'a) Écris le plus grand nombre possible avec les chiffres 7, 0, 3, 9, 1, 5 utilisés une seule fois. b) Écris le plus petit (sans commencer par 0). d) Compare ces deux nombres. e) Un nombre de 6 chiffres peut-il être plus petit qu’un nombre de 5 chiffres ? Justifie.'],
    corr: ['a) > ; b) < ; d) = ; e) >.',
      'a) 24 500 < 25 040 < 25 400 ; b) 130 000 < 301 000 < 310 000 ; d) 999 < 9 999 < 99 999 ; e) 600 666 < 606 060 < 660 006.',
      'a) 975 310 ; b) 103 579 ; d) 103 579 < 975 310 ; e) non : le plus petit nombre de 6 chiffres, 100 000, dépasse déjà le plus grand nombre de 5 chiffres, 99 999.'],
    fig: 'u1f3'
  },
  {
    t: 'Composer les grands nombres par groupements', comp: 'Nombre', theme: 'Composition jusqu’à 1 000 000',
    goal: 'composer des nombres jusqu’à 1 000 000 à l’aide de groupements de 10 000, 25 000 et 50 000',
    mat: 'Billets factices, jetons, tableau de numération, cahier',
    revQ: 'Range en ordre croissant : 50 000 ; 10 000 ; 25 000.',
    revRA: '10 000 < 25 000 < 50 000.',
    situation: 'Pour acheter une bicyclette à 100 000 Ar, Naina vide sa tirelire : elle contient des billets de 10 000 Ar. Son frère propose d’échanger contre des coupures de 25 000… puis de 50 000. Combien de billets de chaque sorte faut-il pour faire exactement 100 000 Ar ?',
    def: 'Composer un nombre, c’est le construire en additionnant des groupements connus : paquets de 10 000, de 25 000, de 50 000, centaines, dizaines, unités. Un même nombre peut être composé de plusieurs façons différentes.',
    autrement: 'composer, c’est faire la somme de ses paquets, comme on réunit des billets pour payer un prix.',
    concept: 'Les groupements de 10 000, 25 000 et 50 000 sont les plus pratiques parce qu’ils se logent exactement dans les grands nombres ronds : 100 000, c’est 10 paquets de 10 000, ou 4 paquets de 25 000, ou 2 paquets de 50 000. Pour composer 275 000, on peut prendre 5 paquets de 50 000 et 1 paquet de 25 000 ; ou bien 11 paquets de 25 000 ; ou encore 27 paquets de 10 000 et 5 000 — toutes ces compositions désignent LE MÊME nombre. Savoir passer d’un groupement à l’autre, c’est exactement ce que fait le marchand qui rend la monnaie : il échange sans jamais changer le total.',
    synthese: '100 000 = 10 × 10 000 = 4 × 25 000 = 2 × 50 000 ; un nombre peut se composer de plusieurs façons, le total reste le même.',
    method: ['Choisir le groupement (10 000, 25 000 ou 50 000).', 'Chercher combien de paquets entrent dans le nombre.', 'Compléter avec des paquets plus petits et vérifier la somme.'],
    exemple: '350 000 = 7 × 50 000 ; ou bien 350 000 = 14 × 25 000 ; ou encore 350 000 = 35 × 10 000.',
    erreur: 'Croire que des compositions différentes donnent des nombres différents : 4 × 25 000 et 2 × 50 000 font tous deux 100 000. On change les paquets, jamais le total.',
    saistu: 'L’ariary est l’une des rares monnaies du monde qui ne soit pas décimale à l’origine : un ariary valait 5 francs malgaches, et le mot « iraimbilanja » désignait un cinquième d’ariary. Compter l’argent à Madagascar a toujours demandé d’être fort en groupements !',
    exos: ['Combien de billets de 10 000 Ar pour payer : a) 70 000 Ar ; b) 240 000 Ar ; d) 500 000 Ar ; e) 1 000 000 Ar ?',
      'Compose avec des paquets de 25 000 : a) 75 000 ; b) 200 000 ; d) 325 000 ; e) 1 000 000.',
      'Papa doit payer 450 000 Ar. a) Combien de coupures de 50 000 ? b) S’il n’a que 8 coupures de 50 000, combien manque-t-il ? d) Comment compléter avec des billets de 25 000 ? e) Et avec des billets de 10 000 ?'],
    corr: ['a) 7 ; b) 24 ; d) 50 ; e) 100.',
      'a) 3 paquets ; b) 8 paquets ; d) 13 paquets ; e) 40 paquets.',
      'a) 9 coupures ; b) 8 × 50 000 = 400 000, il manque 50 000 Ar ; d) 2 billets de 25 000 ; e) 5 billets de 10 000.'],
    fig: 'u1f4'
  },
  {
    t: 'Décomposer les nombres de plusieurs façons', comp: 'Nombre', theme: 'Décomposition jusqu’à 1 000 000',
    goal: 'décomposer un nombre jusqu’à 1 000 000 sous forme additive et multiplicative',
    mat: 'Tableau de numération, étiquettes, ardoises, cahier',
    revQ: 'Compose : 3 paquets de 50 000 et 2 paquets de 10 000.',
    revRA: '150 000 + 20 000 = 170 000.',
    situation: 'La coopérative du village a vendu 68 425 kg de letchis. Pour remplir son registre, le secrétaire doit écrire ce nombre « en détail » : combien de dizaines de mille, de milliers, de centaines… Comment ouvrir un nombre pour voir tout ce qu’il contient ?',
    def: 'Décomposer un nombre, c’est l’écrire comme une somme qui montre la valeur de chacun de ses chiffres. La décomposition additive donne les valeurs (60 000 + 8 000 + 400 + 20 + 5) ; la décomposition multiplicative détaille chaque valeur en chiffre × colonne : (6 × 10 000) + (8 × 1 000) + (4 × 100) + (2 × 10) + 5.',
    autrement: 'décomposer, c’est ouvrir le nombre comme une boîte et poser côte à côte tout ce qu’elle contient.',
    concept: 'La décomposition est la radiographie du nombre : elle rend visible ce que le tableau de numération range en colonnes. Elle n’est pas unique ! 68 425, c’est aussi « 68 milliers et 425 unités », ou « 684 centaines et 25 unités » — des découpages différents du même nombre, tous utiles : le premier sert à lire, le deuxième à poser des divisions par 100. Dans l’autre sens, composer consiste à refermer la boîte : (7 × 100 000) + (3 × 100) + 9 se referme en 700 309 — gare aux colonnes vides, qui réclament leurs zéros. Décomposer et composer sont les deux gestes inverses qui donnent la pleine maîtrise des grands nombres.',
    synthese: 'décomposition additive = somme des valeurs ; multiplicative = (chiffre × colonne) ; plusieurs décompositions correctes existent pour un même nombre.',
    method: ['Placer le nombre dans le tableau de numération.', 'Écrire la valeur de chaque chiffre non nul et les additionner.', 'Pour la forme multiplicative, écrire chaque valeur en chiffre × 100 000, × 10 000, × 1 000…'],
    exemple: '405 070 = 400 000 + 5 000 + 70 = (4 × 100 000) + (5 × 1 000) + (7 × 10).',
    erreur: 'Décomposer 68 425 en 6 + 8 + 4 + 2 + 5 : on a additionné les chiffres en oubliant leurs colonnes ! Chaque chiffre doit emporter la valeur de sa position.',
    saistu: 'Les anciens Égyptiens décomposaient déjà leurs nombres : ils dessinaient un hiéroglyphe différent pour 1, 10, 100, 1 000… et répétaient chaque signe autant de fois que nécessaire. Écrire 68 425 leur demandait 25 dessins — ta décomposition tient en une ligne !',
    exos: ['Décompose en somme de valeurs : a) 7 254 ; b) 90 306 ; d) 480 019 ; e) 605 500.',
      'Recompose : a) 300 000 + 40 000 + 2 000 + 600 + 70 + 1 ; b) (8 × 100 000) + (3 × 100) ; d) 52 milliers et 52 unités ; e) (9 × 10 000) + (9 × 10).',
      'Pour 736 208 : a) décomposition additive ; b) décomposition multiplicative ; d) nombre de centaines complètes ; e) que devient le nombre si l’on ajoute 4 unités de mille ?'],
    corr: ['a) 7 000 + 200 + 50 + 4 ; b) 90 000 + 300 + 6 ; d) 400 000 + 80 000 + 10 + 9 ; e) 600 000 + 5 000 + 500.',
      'a) 342 671 ; b) 800 300 ; d) 52 052 ; e) 90 090.',
      'a) 700 000 + 30 000 + 6 000 + 200 + 8 ; b) (7 × 100 000) + (3 × 10 000) + (6 × 1 000) + (2 × 100) + 8 ; d) 7 362 centaines ; e) 740 208.'],
    fig: 'u1f5'
  },
  {
    t: 'Représenter les fractions : numérateur et dénominateur', comp: 'Nombre', theme: 'Fractions simples',
    goal: 'représenter une fraction simple et nommer son numérateur et son dénominateur',
    mat: 'Bandes de papier, galette ou pain à partager, crayons de couleur, cahier',
    revQ: 'Décompose 4 507 en somme de valeurs.',
    revRA: '4 000 + 500 + 7.',
    situation: 'Maman rapporte une galette de manioc pour ses quatre enfants. Elle la coupe en quatre parts égales et en donne trois tout de suite ; la dernière attend le retour de Papa. Quelle écriture mathématique dit exactement « trois parts sur quatre » ?',
    def: 'Une fraction représente une ou plusieurs parts égales de l’unité. Elle s’écrit avec deux nombres séparés par un trait : le dénominateur, en bas, indique en combien de parts égales l’unité est découpée ; le numérateur, en haut, indique combien de parts on prend.',
    autrement: 'le bas dit comment on coupe, le haut dit combien on prend.',
    concept: 'Tout commence par le partage ÉGAL : si les parts ne sont pas égales, il n’y a pas de fraction. Une fois l’unité coupée en 4 parts égales, chaque part est un quart (1/4), et trois parts font trois quarts (3/4). Les dénominateurs du programme ont chacun leur nom : demis (2), tiers (3), quarts (4), cinquièmes (5), sixièmes (6), huitièmes (8), dixièmes (10) et centièmes (100). La bande de papier pliée est le meilleur outil pour VOIR une fraction : plier en deux donne des demis, replier donne des quarts… Et si l’on prend toutes les parts, 4/4, on reconstitue l’unité entière : 4/4 = 1.',
    synthese: 'fraction = parts égales ; dénominateur (bas) = découpage ; numérateur (haut) = parts prises ; n/n = 1.',
    method: ['Vérifier que l’unité est partagée en parts égales.', 'Compter les parts du découpage : c’est le dénominateur.', 'Compter les parts prises : c’est le numérateur ; lire la fraction avec son nom (tiers, quarts…).'],
    exemple: 'Une tablette de chocolat de 6 carreaux dont on mange 5 : on a mangé 5/6, « cinq sixièmes », et il reste 1/6.',
    erreur: 'Écrire 3/4 quand la galette est coupée en parts inégales : une fraction exige des parts ÉGALES. Toujours contrôler le partage avant d’écrire la fraction.',
    saistu: 'Les Égyptiens de l’Antiquité n’utilisaient presque que des fractions de numérateur 1 : pour dire 3/4, ils écrivaient 1/2 + 1/4 ! L’œil du dieu Horus, découpé en morceaux, leur servait même à noter les fractions 1/2, 1/4, 1/8… sur les sacs de grain.',
    exos: ['Pour chaque situation, écris la fraction : a) 2 parts prises sur 5 ; b) 7 parts sur 8 ; d) 1 part sur 3 ; e) 9 parts sur 10.',
      'Donne le numérateur puis le dénominateur : a) 3/8 ; b) 5/6 ; d) 1/2 ; e) 99/100.',
      'Une bande est pliée en 6 parts égales ; on en colorie 4. a) Quelle fraction est coloriée ? b) Quelle fraction reste blanche ? d) Que vaut la somme des deux fractions ? e) Que représente 6/6 ?'],
    corr: ['a) 2/5 ; b) 7/8 ; d) 1/3 ; e) 9/10.',
      'a) 3 et 8 ; b) 5 et 6 ; d) 1 et 2 ; e) 99 et 100.',
      'a) 4/6 ; b) 2/6 ; d) 4/6 + 2/6 = 6/6 ; e) la bande entière : 6/6 = 1.'],
    fig: 'u1f6'
  },
  {
    t: 'Les fractions équivalentes', comp: 'Nombre', theme: 'Équivalences (dénominateurs 2, 3, 4, 5, 6, 8, 10, 100)',
    goal: 'reconnaître et construire des fractions équivalentes à l’aide des bandes de fractions',
    mat: 'Bandes de fractions, papier à plier, crayons de couleur, cahier',
    revQ: 'Dans la fraction 5/8, que représente le 8 ?',
    revRA: 'Le dénominateur : l’unité est découpée en 8 parts égales.',
    situation: 'Fara dit : « j’ai mangé 1/2 de ma barre de chocolat » ; Tiana répond : « moi, 2/4 de la mienne, j’en ai mangé plus ! » Les deux barres sont identiques. Tiana a-t-elle vraiment mangé davantage ?',
    def: 'Deux fractions sont équivalentes lorsqu’elles représentent la même quantité de la même unité. On obtient une fraction équivalente en multipliant — ou en divisant — le numérateur et le dénominateur par le même nombre, différent de zéro.',
    autrement: 'on coupe les parts plus fin (ou plus gros), mais la quantité prise ne bouge pas : 1/2 = 2/4 = 4/8.',
    concept: 'Les bandes de fractions rendent l’équivalence visible : sur trois bandes identiques, la partie coloriée de 1/2, de 2/4 et de 4/8 s’arrête exactement au même endroit. Le secret du calcul : multiplier haut et bas par 2 revient à couper chaque part en deux — deux fois plus de parts, chacune deux fois plus petite, le total ne change pas. La règle fonctionne avec tous les dénominateurs du programme : 1/2 = 5/10 = 50/100 ; 2/3 = 4/6 ; 3/4 = 75/100. Dans l’autre sens, diviser haut et bas par le même nombre « simplifie » la fraction : 4/8 = 1/2. Deux fractions apparemment différentes peuvent donc être deux noms du même nombre — c’est ce qui tranchera le débat de Fara et Tiana.',
    synthese: 'équivalentes = même quantité ; on multiplie ou divise numérateur ET dénominateur par le même nombre non nul.',
    method: ['Poser la fraction de départ.', 'Choisir le multiplicateur (ou le diviseur) commun.', 'Multiplier (ou diviser) le haut ET le bas, puis vérifier sur la bande ou la droite numérique.'],
    exemple: '3/5 = 6/10 = 60/100 : on a multiplié haut et bas par 2, puis par 10.',
    erreur: 'Multiplier seulement le dénominateur : 1/2 ne devient pas 1/4 ! Si l’on touche le bas, on touche le haut de la même façon, sinon la quantité change.',
    saistu: 'Dans les cuisines du monde entier, les fractions équivalentes sauvent des recettes : un cuisinier qui n’a pas de verre mesureur de 1/2 litre peut verser 2 fois 1/4 de litre — il utilise, sans le dire, l’égalité 1/2 = 2/4 !',
    exos: ['Complète : a) 1/2 = …/6 ; b) 2/3 = …/6 ; d) 3/4 = …/8 ; e) 4/5 = …/10.',
      'Vraies ou fausses ? a) 1/2 = 50/100 ; b) 2/5 = 4/10 ; d) 3/8 = 6/16 ; e) 5/6 = 10/18.',
      'a) Simplifie 8/10. b) Simplifie 25/100. d) Trouve deux fractions équivalentes à 1/4. e) Fara (1/2) et Tiana (2/4) : qui a mangé le plus de chocolat ?'],
    corr: ['a) 3/6 ; b) 4/6 ; d) 6/8 ; e) 8/10.',
      'a) vraie ; b) vraie ; d) vraie (haut et bas × 2) ; e) fausse : 5/6 = 10/12, pas 10/18.',
      'a) 4/5 ; b) 1/4 ; d) par exemple 2/8 et 25/100 ; e) personne : 1/2 = 2/4, elles ont mangé exactement autant.'],
    fig: 'u1f7'
  },
  {
    t: 'Comparer et placer des fractions sur la droite numérique', comp: 'Nombre', theme: 'Fractions sur la droite numérique',
    goal: 'placer des fractions simples sur la droite numérique et les comparer',
    mat: 'Droite numérique tracée au sol et sur papier, bandes de fractions, cahier',
    revQ: 'Donne une fraction équivalente à 3/4.',
    revRA: 'Par exemple 6/8 ou 75/100.',
    situation: 'Sur la route de l’école, Hery a parcouru 3/4 du chemin et Vola 2/3 du même chemin. Chacun se dit le plus avancé ! Comment la droite numérique peut-elle les départager sans dispute ?',
    def: 'Sur la droite numérique, une fraction occupe un point précis entre 0 et 1 (ou au-delà) : on partage le segment unité en autant de parts égales que le dénominateur, puis on avance d’autant de parts que le numérateur. Une fraction est plus grande qu’une autre si son point est plus à droite.',
    autrement: 'la droite est un chemin : le dénominateur fixe la taille des pas, le numérateur dit combien de pas on fait.',
    concept: 'La droite numérique transforme la comparaison en simple coup d’œil — mais encore faut-il placer juste. Deux fractions de MÊME dénominateur se comparent par le numérateur : 5/8 > 3/8. Deux fractions de MÊME numérateur se comparent à l’envers : 1/3 > 1/4, car couper en 3 fait des parts plus grosses que couper en 4. Dans les autres cas, on passe par des équivalentes pour obtenir le même dénominateur : 3/4 = 9/12 et 2/3 = 8/12, donc 3/4 > 2/3 — Hery est devant. On peut aussi se repérer aux bornes : une fraction vaut 1/2 quand le haut est la moitié du bas, elle approche 1 quand le haut rattrape le bas.',
    synthese: 'même dénominateur → plus grand numérateur gagne ; même numérateur → plus petit dénominateur gagne ; sinon, passer par des fractions équivalentes.',
    method: ['Partager le segment unité selon le dénominateur.', 'Avancer du nombre de parts donné par le numérateur et marquer le point.', 'Pour comparer : même dénominateur, mêmes numérateurs ou équivalentes, puis lire la droite.'],
    exemple: '2/3 et 3/4 : équivalentes 8/12 et 9/12 ; 9/12 est plus à droite, donc 3/4 > 2/3.',
    erreur: 'Croire que 1/8 > 1/4 parce que 8 > 4 : plus on coupe fin, plus la part est PETITE. Le grand dénominateur fait la petite part.',
    saistu: 'Les coureurs du marathon voient des panneaux « mi-course » puis « 3/4 de course » : les organisateurs placent les fractions sur la route comme toi sur la droite numérique. Le dernier quart est réputé le plus dur — demande à n’importe quel marathonien !',
    exos: ['Compare : a) 3/8 et 5/8 ; b) 1/3 et 1/5 ; d) 2/4 et 1/2 ; e) 5/6 et 1.',
      'Place en ordre croissant : a) 1/4, 3/4, 2/4 ; b) 1/2, 1/3, 1/6 ; d) 2/5, 7/10, 1/2 ; e) 1/100, 1/10, 1/2.',
      'Sur un segment de 12 cm représentant l’unité : a) à combien de cm place-t-on 1/4 ? b) et 2/3 ? d) et 5/6 ? e) quelle fraction tombe exactement à 6 cm ?'],
    corr: ['a) 3/8 < 5/8 ; b) 1/3 > 1/5 ; d) 2/4 = 1/2 ; e) 5/6 < 1.',
      'a) 1/4 < 2/4 < 3/4 ; b) 1/6 < 1/3 < 1/2 ; d) 2/5 < 1/2 < 7/10 (4/10 < 5/10 < 7/10) ; e) 1/100 < 1/10 < 1/2.',
      'a) 3 cm ; b) 8 cm ; d) 10 cm ; e) 1/2 (= 6/12).'],
    fig: 'u1f8'
  },
  {
    t: 'Fraction impropre et nombre fractionnaire', comp: 'Nombre', theme: 'Fractions impropres et nombres fractionnaires (jusqu’à 2)',
    goal: 'transformer une fraction impropre en nombre fractionnaire et inversement, jusqu’à 2',
    mat: 'Bandes de fractions, galettes en papier, droite numérique, cahier',
    revQ: 'Compare 7/8 et 1.',
    revRA: '7/8 < 1, car il manque 1/8 pour faire l’unité.',
    situation: 'À la fête de l’école, chaque gâteau est coupé en 4 parts. Mamy a distribué 5 parts : plus qu’un gâteau entier ! Comment écrire « cinq quarts » — et comment dire la même chose avec des gâteaux entiers et des parts ?',
    def: 'Une fraction impropre est une fraction dont le numérateur est plus grand que le dénominateur : elle dépasse l’unité. Un nombre fractionnaire associe un nombre entier et une fraction plus petite que 1 : 5/4 = 1 + 1/4, que l’on lit « un et un quart ».',
    autrement: 'quand on a plus de parts qu’il n’en faut pour un entier, on compte les entiers pleins, et la fraction garde le reste.',
    concept: 'Le passage de l’une à l’autre est un simple jeu de remplissage. Dans le sens impropre → fractionnaire : combien de fois le dénominateur entre-t-il dans le numérateur ? Pour 7/4 : 4 entre 1 fois dans 7, reste 3, donc 7/4 = 1 + 3/4. Dans le sens inverse, chaque entier redevient dénominateur/dénominateur : 1 + 3/4 = 4/4 + 3/4 = 7/4. Au programme de T5, on reste entre 0 et 2 : les fractions impropres rencontrées valent au plus 2 entiers (8/4 = 2). Sur la droite numérique, ces nombres habitent entre 1 et 2 — la preuve que les fractions ne s’arrêtent pas à l’unité.',
    synthese: 'numérateur > dénominateur = impropre ; entiers pleins + reste = nombre fractionnaire ; n/n = 1 et 2n/n = 2.',
    method: ['Chercher combien de fois le dénominateur entre dans le numérateur : c’est l’entier.', 'Écrire le reste sur le dénominateur : c’est la fraction restante.', 'Pour revenir en arrière, convertir chaque entier en n/n et additionner les numérateurs.'],
    exemple: '11/8 = 1 + 3/8 (« un et trois huitièmes ») ; à l’inverse, 1 + 5/6 = 6/6 + 5/6 = 11/6.',
    erreur: 'Écrire 5/4 = 1,4 ou « 1 virgule 4 » : le reste est une FRACTION (1/4), pas un chiffre après la virgule. Un et un quart, c’est 1 + 1/4, et l’on verra plus tard que cela vaut 1,25.',
    saistu: 'Les boulangers parlent couramment en fractions impropres : une baguette « bâtarde » pèse 3/2 de la baguette ordinaire ! Et dans les recettes anglaises, « one and a half cup » — une tasse et demie — s’écrit exactement comme ton nombre fractionnaire : 1 + 1/2.',
    exos: ['Transforme en nombre fractionnaire : a) 5/4 ; b) 7/6 ; d) 9/8 ; e) 13/10.',
      'Transforme en fraction impropre : a) 1 + 1/2 ; b) 1 + 2/3 ; d) 1 + 4/5 ; e) 1 + 7/8.',
      'Chaque gâteau est coupé en 6 parts ; Mamy distribue 11 parts. a) Écris la fraction impropre. b) Écris le nombre fractionnaire. d) Combien de parts manque-t-il pour 2 gâteaux entiers ? e) Place 11/6 entre deux entiers sur la droite numérique.'],
    corr: ['a) 1 + 1/4 ; b) 1 + 1/6 ; d) 1 + 1/8 ; e) 1 + 3/10.',
      'a) 3/2 ; b) 5/3 ; d) 9/5 ; e) 15/8.',
      'a) 11/6 ; b) 1 + 5/6 ; d) 12/6 − 11/6 = 1/6 : il manque 1 part ; e) entre 1 et 2, tout près de 2.'],
    fig: 'u1f9'
  },
  {
    t: 'Les nombres décimaux jusqu’aux centièmes', comp: 'Nombre', theme: 'Nombres décimaux : dixièmes et centièmes',
    goal: 'lire, écrire et représenter les nombres décimaux jusqu’aux centièmes',
    mat: 'Grilles de 100 cases, blocs de base 10, tableau de numération, cahier',
    revQ: 'Écris 7/10 en toutes lettres.',
    revRA: 'Sept dixièmes.',
    situation: 'À l’épicerie, l’étiquette du savon indique 2,75. Noro sait lire 2 et 75, mais que signifie cette virgule ? Et pourquoi la balance du marché affiche-t-elle 1,5 kg quand on pèse un kilo et demi de haricots ?',
    def: 'Un nombre décimal comporte une partie entière et une partie décimale séparées par une virgule. Le premier chiffre après la virgule compte les dixièmes (dixièmes de l’unité) ; le deuxième compte les centièmes. Ainsi 2,75 = 2 unités, 7 dixièmes et 5 centièmes.',
    autrement: 'la virgule marque la frontière : à gauche les entiers, à droite les morceaux d’unité, de plus en plus fins.',
    concept: 'Le tableau de numération continue tout simplement à droite de la virgule : après les unités viennent les dixièmes (l’unité coupée en 10), puis les centièmes (coupée en 100). La grille de 100 cases rend tout visible : la grille entière vaut 1, une colonne vaut 1 dixième, une case vaut 1 centième — colorier 25 cases, c’est représenter 0,25. On lit 2,75 « deux unités et soixante-quinze centièmes » (ou « deux virgule soixante-quinze »). Les décimaux servent partout où l’unité ne suffit pas : prix (2,75), mesures (1,5 kg ; 1,65 m), notes… Chaque chiffre garde une valeur de position, exactement comme dans les grands nombres : dans 3,48, le 4 vaut 4 dixièmes et le 8 vaut 8 centièmes.',
    synthese: 'virgule = frontière entiers/parties d’unité ; 1er rang = dixièmes, 2e rang = centièmes ; grille : 1 case = 0,01, 1 colonne = 0,1.',
    method: ['Repérer la virgule : à gauche la partie entière, à droite la partie décimale.', 'Nommer chaque rang : dixièmes puis centièmes.', 'Représenter sur la grille : colorier autant de cases que de centièmes.'],
    exemple: '0,07 = 7 centièmes : sur la grille, 7 petites cases seulement ; 0,7 = 7 dixièmes : 7 colonnes entières !',
    erreur: 'Lire 2,75 « deux virgule sept cent cinq » ou croire que 0,7 et 0,07 sont égaux : le rang du chiffre change tout — 0,7 vaut dix fois 0,07.',
    saistu: 'La virgule décimale ne s’est imposée qu’au XVIIᵉ siècle, grâce à l’astronome John Napier. Aujourd’hui encore, le monde est partagé : la France et Madagascar écrivent 2,75 avec une virgule, mais les pays anglophones écrivent 2.75 avec un point !',
    exos: ['Écris en chiffres : a) trois unités et cinq dixièmes ; b) douze unités et huit centièmes ; d) quarante-cinq centièmes ; e) neuf dixièmes.',
      'Donne la valeur du chiffre indiqué : a) le 7 dans 4,72 ; b) le 9 dans 15,09 ; d) le 6 dans 6,38 ; e) le 3 dans 0,53.',
      'Sur une grille de 100 cases : a) combien de cases pour 0,36 ? b) pour 0,09 ? d) quelle écriture pour 60 cases coloriées ? e) pour la grille entière ?'],
    corr: ['a) 3,5 ; b) 12,08 ; d) 0,45 ; e) 0,9.',
      'a) 7 dixièmes = 0,7 ; b) 9 centièmes = 0,09 ; d) 6 unités ; e) 3 centièmes = 0,03.',
      'a) 36 cases ; b) 9 cases ; d) 0,60 ou 0,6 ; e) 1 (cent centièmes font l’unité).'],
    fig: 'u1f10'
  },
  {
    t: 'Comparer et ordonner les nombres décimaux', comp: 'Nombre', theme: 'Comparaison des décimaux ; 0,4 = 0,40',
    goal: 'comparer et ordonner des nombres décimaux jusqu’aux centièmes',
    mat: 'Grilles de 100 cases, droite numérique graduée, étiquettes, cahier',
    revQ: 'Que vaut le chiffre 8 dans 3,78 ?',
    revRA: '8 centièmes.',
    situation: 'Au concours de saut en longueur, Lova a sauté 3,5 m et Tahina 3,47 m. Tahina crie victoire : « 47, c’est plus que 5 ! » Le maître sourit… Qui a vraiment sauté le plus loin ?',
    def: 'Pour comparer deux nombres décimaux, on compare d’abord les parties entières ; si elles sont égales, on compare les dixièmes, puis les centièmes. Écrire un zéro à droite de la partie décimale ne change pas le nombre : 0,4 = 0,40.',
    autrement: 'on compare rang par rang, comme pour les grands nombres — et un zéro ajouté tout à droite après la virgule ne pèse rien.',
    concept: 'L’erreur de Tahina est la plus répandue de toute l’école primaire : comparer « 47 » et « 5 » comme des entiers. Or la partie décimale n’est pas un nombre collé après la virgule, c’est une somme de rangs : 3,5 = 3,50 = 3 unités et 50 centièmes, tandis que 3,47 n’en a que 47. Donc 3,5 > 3,47 : Lova gagne. L’astuce imparable : compléter avec des zéros pour donner la même longueur aux deux parties décimales, puis comparer comme d’habitude. La grille le confirme : 0,4 colorie 40 cases, 0,40 aussi — même nombre, deux écritures. Sur la droite numérique graduée en centièmes, chaque décimal trouve sa place exacte, et le plus à droite l’emporte.',
    synthese: 'entiers d’abord, puis dixièmes, puis centièmes ; compléter par des zéros à droite pour comparer ; 0,4 = 0,40.',
    method: ['Comparer les parties entières.', 'Compléter les parties décimales avec des zéros pour qu’elles aient la même longueur.', 'Comparer alors rang par rang et conclure.'],
    exemple: '7,3 et 7,28 : 7,3 = 7,30 et 30 centièmes > 28 centièmes, donc 7,3 > 7,28.',
    erreur: 'Déclarer 3,47 > 3,5 parce que 47 > 5 : il faut comparer 47 centièmes à 50 centièmes. Le nombre de chiffres après la virgule ne dit RIEN de la grandeur du nombre.',
    saistu: 'Aux Jeux olympiques, les sprinteurs sont départagés au centième de seconde — et parfois au millième ! En 2016, deux nageuses ont touché le mur exactement en même temps au centième près : la médaille d’or a été partagée. Sans les décimaux, pas de podium possible !',
    exos: ['Compare : a) 0,8 et 0,80 ; b) 2,09 et 2,9 ; d) 5,61 et 5,16 ; e) 0,07 et 0,7.',
      'Range en ordre croissant : a) 1,5 ; 1,05 ; 1,50 ; 1,55. b) 0,9 ; 0,89 ; 1,01. d) 3,33 ; 3,03 ; 3,3. e) 0,1 ; 0,01 ; 0,11.',
      'a) Écris trois nombres entre 4,2 et 4,3. b) Un nombre peut-il avoir 2 chiffres après la virgule et être plus petit qu’un nombre à 1 chiffre après la virgule ? Exemple. d) Lova 3,5 m, Tahina 3,47 m : qui gagne et de combien ? e) Range : 3,5 ; 3,47 ; 3,55.'],
    corr: ['a) 0,8 = 0,80 ; b) 2,09 < 2,9 ; d) 5,61 > 5,16 ; e) 0,07 < 0,7.',
      'a) 1,05 < 1,5 = 1,50 < 1,55 ; b) 0,89 < 0,9 < 1,01 ; d) 3,03 < 3,3 < 3,33 ; e) 0,01 < 0,1 < 0,11.',
      'a) par exemple 4,21 ; 4,25 ; 4,29 ; b) oui : 2,19 < 2,4 ; d) Lova, de 3 centièmes de mètre (3,50 − 3,47 = 0,03 m) ; e) 3,47 < 3,5 < 3,55.'],
    fig: 'u1f11'
  },
  {
    t: 'Fractions décimales et nombres décimaux', comp: 'Nombre', theme: 'Relation fractions décimales — décimaux',
    goal: 'passer d’une fraction décimale (dixièmes, centièmes) au nombre décimal et inversement',
    mat: 'Grilles de 100 cases, tableau de numération, cartes recto verso, cahier',
    revQ: 'Compare 0,25 et 0,3.',
    revRA: '0,25 < 0,3, car 25 centièmes < 30 centièmes.',
    situation: 'Sur son cahier, Vola a écrit 25/100 ; sur l’étiquette du magasin, le même produit affiche 0,25 kg. Le maître affirme : « c’est exactement le même nombre, sous deux habits différents. » Comment passer d’un habit à l’autre ?',
    def: 'Une fraction décimale est une fraction dont le dénominateur est 10 ou 100. Toute fraction décimale s’écrit en nombre décimal : le numérateur se place dans les rangs des dixièmes et des centièmes — 4/10 = 0,4 et 25/100 = 0,25. Inversement, tout décimal jusqu’aux centièmes s’écrit en fraction décimale.',
    autrement: 'dixièmes et centièmes ont deux écritures : l’habit fraction (4/10) et l’habit virgule (0,4) — c’est le même nombre dessous.',
    concept: 'Le lien vient de la division : une fraction, c’est un partage, et 4/10, c’est 4 divisé par 10 — or diviser par 10 décale la virgule d’un rang, ce qui donne 0,4 ; diviser 25 par 100 décale de deux rangs : 0,25. La grille de 100 cases réunit les deux écritures en une seule image : 25 cases coloriées se lisent À LA FOIS 25/100 et 0,25. Dans le sens décimal → fraction, on lit le nombre à voix haute : 0,7 « sept dixièmes » s’écrit 7/10 ; 0,09 « neuf centièmes » s’écrit 9/100 ; 1,3 = 13/10. Et les équivalences de fractions se retrouvent : 4/10 = 40/100, exactement comme 0,4 = 0,40. Fractions et décimaux ne sont pas deux mondes : ce sont deux écritures du même monde.',
    synthese: 'dénominateur 10 → un rang après la virgule ; dénominateur 100 → deux rangs ; lire le décimal à voix haute donne sa fraction.',
    method: ['Fraction → décimal : diviser le numérateur par 10 ou 100 en décalant la virgule.', 'Décimal → fraction : lire le nombre (« … dixièmes » ou « … centièmes ») et écrire la fraction entendue.', 'Vérifier sur la grille de 100 cases.'],
    exemple: '7/10 = 0,7 ; 130/100 = 1,30 = 1,3 ; dans l’autre sens, 0,85 = 85/100.',
    erreur: 'Écrire 25/100 = 0,0025 ou 4/10 = 0,04 : compter les rangs ! Un zéro du dénominateur = un rang de décalage : /10 → un rang, /100 → deux rangs.',
    saistu: 'Nos pièces de monnaie sont des fractions décimales vivantes : le centime, c’est 1/100 de l’unité — « cent » comme centième ! Quand tu lis 0,25 sur un prix, tu lis en réalité 25 centièmes, la fraction 25/100 cachée sous la virgule.',
    exos: ['Écris en nombre décimal : a) 3/10 ; b) 48/100 ; d) 5/100 ; e) 170/100.',
      'Écris en fraction décimale : a) 0,9 ; b) 0,37 ; d) 0,03 ; e) 1,7.',
      'a) Montre que 6/10 = 60/100. b) Écris 6/10 et 60/100 en décimal. d) Vola écrit 25/100 et le magasin 0,25 : qui a raison ? e) Range : 1/2 ; 0,45 ; 55/100.'],
    corr: ['a) 0,3 ; b) 0,48 ; d) 0,05 ; e) 1,70 = 1,7.',
      'a) 9/10 ; b) 37/100 ; d) 3/100 ; e) 17/10.',
      'a) haut et bas × 10 ; b) 0,6 et 0,60 : le même nombre ; d) les deux : ce sont deux écritures du même nombre ; e) 0,45 < 1/2 (= 0,50) < 55/100 (= 0,55).'],
    fig: 'u1f12'
  }
];

const unit1 = {
  no: 1, roman: 'I', name: 'Nombre',
  rag: 'démontrer une compréhension des nombres naturels jusqu’à 1 000 000, des fractions simples et des nombres décimaux jusqu’aux centièmes.',
  valeurs: 'persévérance et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Grands nombres', 'Classes de trois chiffres ; 1 000 000 = un million', 'Lire et écrire en chiffres et en lettres'],
      ['Valeur de position', 'Colonnes U, D, C, UM, DM, CM ; le zéro garde la place', 'Donner la valeur de chaque chiffre'],
      ['Comparaison', 'Plus de chiffres = plus grand ; sinon colonne par colonne depuis la gauche', 'Utiliser >, < et = ; ranger des listes'],
      ['Composer / décomposer', 'Groupements de 10 000, 25 000, 50 000 ; formes additive et multiplicative', 'Ouvrir et refermer un nombre'],
      ['Fractions', 'Numérateur / dénominateur ; équivalentes (haut et bas × même nombre) ; impropre = 1 + reste', 'Représenter, comparer, placer sur la droite'],
      ['Décimaux', 'Dixièmes puis centièmes ; 0,4 = 0,40 ; 25/100 = 0,25', 'Lire, comparer, relier aux fractions décimales']
    ],
    questions: [
      'Écris en chiffres : « six cent quatre mille soixante-dix ».',
      'Dans 583 902, donne la valeur du 8 et celle du 9.',
      'Range en ordre décroissant : 98 500 ; 100 002 ; 99 999.',
      'Complète : 3/4 = …/8 = 75/… ; puis transforme 9/4 en nombre fractionnaire.',
      'Compare 0,6 ; 0,57 et 59/100, puis range-les en ordre croissant.'
    ],
    answers: [
      '604 070.',
      '8 → 80 000 (dizaines de mille) ; 9 → 900 (centaines).',
      '100 002 > 99 999 > 98 500.',
      '3/4 = 6/8 = 75/100 ; 9/4 = 2 + 1/4.',
      '0,57 < 59/100 (= 0,59) < 0,6 (= 0,60).'
    ]
  },
  exam: {
    exos: [
      'Écriture des nombres. a) Écris en chiffres : « quatre cent trois mille cinquante ». b) Écris 78 205 en lettres. d) Dans 960 347, donne la valeur du chiffre 6. e) Écris le nombre juste après 499 999.',
      'Comparaison et rangement. a) Complète : 87 650 … 87 605. b) Range en ordre croissant : 540 000 ; 504 000 ; 545 000. d) Écris le plus grand nombre de six chiffres tous différents. e) Un sac de riz coûte 148 500 Ar et un autre 149 050 Ar : lequel est le moins cher ?',
      'Fractions. a) Quelle fraction de la bande est coloriée si 5 parts sur 8 le sont ? b) Complète : 2/5 = …/10. d) Compare 2/3 et 3/4. e) Transforme 7/4 en nombre fractionnaire.',
      'Nombres décimaux. a) Écris en chiffres : « cinq unités et huit centièmes ». b) Compare 4,5 et 4,45. d) Écris 36/100 en nombre décimal. e) Range en ordre croissant : 0,7 ; 0,67 ; 7/10 ; 0,76.',
      'Problème. Au marché, Maman achète un panier à 12 500 Ar. Elle paie avec des billets de 10 000 Ar, de 25 000 Ar ou de 50 000 Ar. a) Combien paie-t-elle avec 2 billets de 10 000 Ar, et combien lui rend-on ? b) Décompose 12 500 en somme de valeurs. d) Elle achète aussi 1/2 kg de haricots et son fils 2/4 kg : qui a le plus de haricots ? e) Le prix du kilo de haricots est 3 800 Ar ; écris ce nombre en lettres.'
    ],
    corr: [
      'a) 403 050 ; b) soixante-dix-huit mille deux cent cinq ; d) 60 000 ; e) 500 000. Un point par item.',
      'a) > ; b) 504 000 < 540 000 < 545 000 ; d) 987 654 ; e) celui à 148 500 Ar, car 148 500 < 149 050. Un point par item.',
      'a) 5/8 ; b) 4/10 ; d) 2/3 = 8/12 < 9/12 = 3/4, donc 3/4 > 2/3 ; e) 7/4 = 1 + 3/4. Un point par item.',
      'a) 5,08 ; b) 4,5 = 4,50 > 4,45 ; d) 0,36 ; e) 0,67 < 0,7 = 7/10 < 0,76. Un point par item.',
      'a) 20 000 − 12 500 = 7 500 Ar rendus ; b) 10 000 + 2 000 + 500 ; d) personne : 1/2 = 2/4, autant chacun ; e) trois mille huit cents. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit1, bufs);
})();
