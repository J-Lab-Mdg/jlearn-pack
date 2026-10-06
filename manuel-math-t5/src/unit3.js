// UNITÉ 3 — ALGÈBRE (PE T5) : 7 séances + révision + examen format CEPE
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, circle, poly, PINK, PINK2, GREEN, GREENL, BLUE, OCRE } = L;

const figs = {};
// S1 — suites et régularités
figs.u3f1 = (() => { const { s, y } = head('Deux familles de suites', ['Motif répété : le même paquet revient ; motif croissant : ça grandit à chaque pas.']);
  const top = y + 25;
  let b = txt(70, top + 12, 'répété :', 22, GREEN, 'bold');
  const shapes = ['c', 'c', 't', 'c', 'c', 't', 'c', 'c', 't'];
  shapes.forEach((sh, i) => {
    const X = 230 + i * 72;
    if (sh === 'c') b += circle(X, top, 20, PINK2, '#FDE7EF', 3);
    else b += poly([[X - 22, top + 18], [X + 22, top + 18], [X, top - 22]], GREENL, GREEN, 3);
  });
  b += txt(70, top + 102, 'croissant :', 22, OCRE, 'bold');
  let X0 = 250;
  for (let f = 1; f <= 4; f++) {
    for (let k = 0; k < f; k++) b += dot(X0 + k * 30, top + 95, 11, BLUE);
    b += txt(X0 + (f - 1) * 15, top + 140, `${f}`, 20, '#555', 'normal', 'middle');
    X0 += f * 30 + 55;
  }
  b += txt(500, top + 192, 'le motif du haut : « rond, rond, triangle » ; la règle du bas : « + 1 jeton à chaque figure »', 19, PINK2, 'bold', 'middle');
  return svg(1000, top + 224, s + b); })();
// S2 — rang et quantité
figs.u3f2 = (() => { const { s, y } = head('Du rang de la figure au nombre d’objets', ['Chaque tour d’allumettes suit la règle : nombre d’allumettes = 2 × rang.']);
  const top = y + 30;
  let b = '';
  for (let f = 1; f <= 4; f++) {
    const X = 150 + (f - 1) * 210;
    for (let k = 0; k < 2 * f; k++) seg(0, 0, 0, 0);
    for (let k = 0; k < 2 * f; k++) b += seg(X + (k % 4) * 22, top + 90 - Math.floor(k / 4) * 34, X + (k % 4) * 22, top + 60 - Math.floor(k / 4) * 34, OCRE, 5);
    b += txt(X + 33, top + 130, `rang ${f}`, 21, BLUE, 'bold', 'middle');
    b += txt(X + 33, top + 162, `${2 * f} allumettes`, 20, PINK2, 'bold', 'middle');
  }
  b += txt(500, top + 215, 'rang 1 → 2 ; rang 2 → 4 ; rang 3 → 6 ; rang 4 → 8 : la relation est « × 2 »', 21, GREEN, 'bold', 'middle');
  return svg(1000, top + 248, s + b); })();
// S3 — tableau de valeurs
figs.u3f3 = (() => { const { s, y } = head('Le tableau de valeurs', ['La suite rangée en tableau : le rang en haut, la quantité en bas.']);
  const top = y + 20;
  const data = [['rang de la figure', '1', '2', '3', '4', '5', '…', '10'],
    ['nombre de jetons', '3', '6', '9', '12', '15', '…', '30']];
  let b = tableEl(80, top, [290, 80, 80, 80, 80, 80, 70, 80], 56, data);
  b += arrow(225, top + 2 * 56 + 30, 225, top + 2 * 56 + 5, GREEN, 3.5);
  b += txt(500, top + 2 * 56 + 55, 'la règle se lit en colonne : jetons = 3 × rang ; au rang 10, 3 × 10 = 30', 21, PINK2, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 88, s + b); })();
// S4 — correspondance entre deux quantités
figs.u3f4 = (() => { const { s, y } = head('Deux quantités qui varient ensemble', ['Chaque panier contient 6 mangues : les deux lignes grandissent ensemble.']);
  const top = y + 20;
  const data = [['paniers', '1', '2', '3', '4', '5'],
    ['mangues', '6', '12', '18', '24', '30']];
  let b = tableEl(120, top, [220, 108, 108, 108, 108, 108], 56, data);
  b += txt(500, top + 2 * 56 + 45, '2 fois plus de paniers → 2 fois plus de mangues : les quantités sont proportionnelles', 19, GREEN, 'bold', 'middle');
  b += txt(500, top + 2 * 56 + 82, 'la règle de la relation : mangues = 6 × paniers', 22, PINK2, 'bold', 'middle');
  return svg(1000, top + 2 * 56 + 114, s + b); })();
// S5 — règle de trois
figs.u3f5 = (() => { const { s, y } = head('La règle de trois', ['3 stylos coûtent 700 Ar ; combien coûtent 9 stylos ? (exemple du programme)']);
  const top = y + 25;
  let b = box(110, top, 370, 54, '3 stylos → 700 Ar', GREENL, GREEN, 24);
  b += box(520, top, 370, 54, '9 stylos → ?', GREENL, GREEN, 24);
  b += box(110, top + 76, 780, 54, '(9 × 700) ÷ 3 = 6 300 ÷ 3 = 2 100 Ar', '#FDE7EF', PINK2, 24);
  b += txt(500, top + 175, 'on multiplie par la nouvelle quantité, on divise par l’ancienne', 21, OCRE, 'bold', 'middle');
  b += txt(500, top + 212, 'vérification : 9 stylos = 3 fois 3 stylos → 3 × 700 = 2 100 Ar ✓', 20, BLUE, 'bold', 'middle');
  return svg(1000, top + 244, s + b); })();
// S6 — le signe égal
figs.u3f6 = (() => { const { s, y } = head('Le signe = est une balance', ['L’égalité ne dit pas « réponds ! » : elle dit « les deux côtés pèsent pareil ».']);
  const top = y + 45;
  const cx = 500, armY = top + 20;
  let b = seg(cx, armY, cx, armY + 95, '#6D4C41', 7);
  b += poly([[cx - 60, armY + 115], [cx + 60, armY + 115], [cx + 40, armY + 95], [cx - 40, armY + 95]], '#D7CCC8', '#6D4C41', 3);
  b += seg(cx - 240, armY, cx + 240, armY, '#6D4C41', 6);
  b += seg(cx - 240, armY, cx - 240, armY + 22, '#6D4C41', 4) + seg(cx + 240, armY, cx + 240, armY + 22, '#6D4C41', 4);
  b += box(cx - 330, armY + 22, 180, 52, '7 + 5', '#FDE7EF', PINK2, 26);
  b += box(cx + 150, armY + 22, 180, 52, '10 + 2', GREENL, GREEN, 26);
  b += txt(cx, armY - 25, '=', 42, BLUE, 'bold', 'middle');
  b += txt(500, armY + 165, '7 + 5 = 10 + 2 : deux expressions différentes, une même valeur (12)', 21, OCRE, 'bold', 'middle');
  return svg(1000, armY + 198, s + b); })();
// S7 — valeur inconnue
figs.u3f7 = (() => { const { s, y } = head('Trouver le nombre caché', ['Une équation est une égalité à trou : on cherche la valeur qui équilibre.']);
  const top = y + 20;
  let b = box(130, top, 740, 54, '897 + □ = 917', GREENL, GREEN, 26);
  b += box(130, top + 74, 740, 54, 'essais : 10 ? → 907, trop petit ; 30 ? → 927, trop grand ; 20 ? → 917 ✓', '#FFF3E0', OCRE, 20);
  b += box(130, top + 148, 740, 54, 'vérification : 897 + 20 = 917 ✓   donc □ = 20', '#FDE7EF', PINK2, 24);
  b += txt(500, top + 245, 'autres équations du programme : 897 − □ = 847 (□ = 50) ; 897 ÷ □ = 299 (□ = 3)', 19, BLUE, 'bold', 'middle');
  return svg(1000, top + 277, s + b); })();

const S = [
  {
    t: 'Découvrir les suites et leurs régularités', comp: 'Algèbre', theme: 'Suites à motif répété ou croissant',
    goal: 'décrire la régularité d’une suite numérique ou non numérique à motif répété ou croissant',
    mat: 'Perles, graines, cailloux, dessins de suites, cahier',
    revQ: 'Calcule de tête : 25 × 12.',
    revRA: '50 × 6 = 300 (doubles et moitiés).',
    situation: 'Soa enfile un collier : deux perles rouges, une bleue, deux rouges, une bleue… Elle s’arrête : « quelle sera la couleur de la 15ᵉ perle ? » Pas besoin d’enfiler jusqu’à 15 : la suite a une régularité, et qui la trouve voit l’avenir du collier !',
    def: 'Une suite est une liste d’éléments arrangés dans un ordre déterminé. Le motif est l’ensemble des éléments qui se répètent. Une suite est à motif répété quand le même paquet revient à l’identique, et à motif croissant quand chaque figure grandit en suivant une règle régulière.',
    autrement: 'une suite, c’est une file bien rangée ; sa régularité est le secret qui permet de continuer la file sans se tromper.',
    concept: 'Décrire une régularité, c’est la dire avec des mots précis. Pour le collier : « le motif rouge-rouge-bleu, long de 3 perles, se répète » — et aussitôt tout se calcule : les perles bleues occupent les positions 3, 6, 9, 12, 15… la 15ᵉ perle sera bleue ! Pour une suite croissante de jetons 1, 2, 3, 4…, la règle est « + 1 jeton à chaque figure » ; pour 2, 4, 6, 8…, c’est « + 2 » ; pour 1, 2, 4, 8…, c’est « × 2 » à chaque pas — les règles peuvent additionner ou multiplier. Les suites ne sont pas que des nombres : rythmes frappés, frises dessinées sur les lamba, pas de danse — partout où quelque chose revient régulièrement, il y a une suite. Le travail du mathématicien débutant : observer, dire le motif À VOIX HAUTE, puis prolonger et vérifier.',
    synthese: 'suite = liste ordonnée ; motif = ce qui se répète ; répété (le paquet revient) ou croissant (la règle fait grandir) ; dire la règle permet de prolonger.',
    method: ['Observer les premiers éléments et chercher ce qui revient ou ce qui grandit.', 'Formuler la règle en mots : « le motif … se répète » ou « on ajoute … à chaque pas ».', 'Prolonger la suite avec la règle et vérifier sur les éléments connus.'],
    exemple: 'Suite 5, 10, 15, 20… : règle « + 5 » ; les deux termes suivants sont 25 et 30.',
    erreur: 'Deviner le terme suivant « au feeling » sans avoir dit la règle : 1, 2, 4… peut continuer par 8 (règle × 2) ou par 7 (règle + 1, + 2, + 3). Sans la règle énoncée, la réponse ne se justifie pas.',
    saistu: 'Les frises géométriques des lamba et des nattes malgaches sont des suites à motif répété que les tisserandes connaissent par cœur — sans jamais les écrire ! Et la plus célèbre suite croissante du monde, 1, 1, 2, 3, 5, 8, 13… (chaque terme = la somme des deux précédents), se cache dans les spirales des ananas et des tournesols.',
    exos: ['Donne la règle et les deux termes suivants : a) 4, 8, 12, 16… ; b) 50, 45, 40, 35… ; d) 1, 10, 100, 1 000… ; e) 2, 4, 8, 16…',
      'Suite de perles : rouge, rouge, bleu, rouge, rouge, bleu… a) Quel est le motif ? b) Quelle est la longueur du motif ? d) Couleur de la 12ᵉ perle ? e) Couleur de la 16ᵉ perle ?',
      'Invente : a) une suite à motif répété avec deux formes ; b) une suite croissante de règle « + 3 » partant de 2 ; d) écris ses cinq premiers termes ; e) explique comment un camarade peut vérifier ta règle.'],
    corr: ['a) + 4 : 20, 24 ; b) − 5 : 30, 25 ; d) × 10 : 10 000, 100 000 ; e) × 2 : 32, 64.',
      'a) rouge-rouge-bleu ; b) 3 perles ; d) 12 = 4 motifs complets : bleue ; e) 16 = 5 motifs + 1 : rouge.',
      'a) par exemple rond-carré-rond-carré ; b) 2, 5, 8, 11, 14 ; d) voir b ; e) il applique la règle « + 3 » à chaque terme et contrôle chaque passage.'],
    fig: 'u3f1'
  },
  {
    t: 'Le rang d’un terme : relier le rang à la quantité', comp: 'Algèbre', theme: 'Rang d’un terme et relation rang-quantité',
    goal: 'établir le lien entre le rang d’une figure et le nombre d’objets qui la composent',
    mat: 'Allumettes ou bâtonnets, jetons, dessins de figures, cahier',
    revQ: 'Règle et terme suivant : 3, 6, 9, 12…',
    revRA: 'Règle « + 3 » ; terme suivant 15.',
    situation: 'Rivo construit des tours d’allumettes : la 1ʳᵉ figure a 2 allumettes, la 2ᵉ en a 4, la 3ᵉ en a 6… Son frère le défie : « combien d’allumettes pour la 10ᵉ figure ? » Construire les dix figures prendrait la soirée. Relier le RANG au NOMBRE d’allumettes répond en deux secondes.',
    def: 'Le rang d’un terme est sa position dans la suite : premier, deuxième, troisième… Relier le rang à la quantité, c’est trouver la relation qui donne directement le nombre d’objets d’une figure à partir de son rang, sans construire toutes les figures précédentes.',
    autrement: 'au lieu de marcher pas à pas jusqu’à la figure voulue, on cherche la formule-raccourci qui saute directement au bon rang.',
    concept: 'Il y a deux façons de voir une suite. La vision « pas à pas » dit comment passer d’un terme au suivant : « + 2 à chaque figure ». La vision « par le rang » dit comment calculer N’IMPORTE QUEL terme directement : ici, nombre d’allumettes = 2 × rang. La seconde est infiniment plus puissante : pour le rang 10, 2 × 10 = 20 allumettes, sans construire les neuf figures d’avant ! Comment trouver la relation ? On teste sur les figures connues : rang 1 → 2 (= 2 × 1 ✓), rang 2 → 4 (= 2 × 2 ✓), rang 3 → 6 (= 2 × 3 ✓) — la relation « × 2 » marche partout, elle est adoptée. Il faut TOUJOURS vérifier sur plusieurs rangs : une relation qui ne marche que sur le premier terme est un mirage.',
    synthese: 'rang = position dans la suite ; relation rang → quantité = formule-raccourci ; on la devine sur les premiers termes et on la vérifie sur tous.',
    method: ['Dresser la liste rang → quantité pour les figures connues.', 'Chercher l’opération qui transforme chaque rang en sa quantité (× 2, × 3, + 5…).', 'Vérifier la relation sur tous les rangs connus, puis l’utiliser pour le rang demandé.'],
    exemple: 'Figures de 3, 6, 9 jetons aux rangs 1, 2, 3 : relation « 3 × rang » ; au rang 7, 3 × 7 = 21 jetons.',
    erreur: 'Confondre le rang et le terme : dans la suite 5, 10, 15…, le « 3ᵉ terme » est 15, pas 3 ! Le rang est la place ; le terme est ce qui occupe la place.',
    saistu: 'C’est exactement ainsi que les informaticiens programment : au lieu d’écrire les 1 000 premières valeurs d’une liste, ils donnent la formule du terme de rang n, et l’ordinateur fabrique la liste tout seul. Ta relation « 2 × rang » est déjà un petit programme !',
    exos: ['La relation est « 4 × rang ». Combien d’objets aux rangs : a) 3 ; b) 5 ; d) 10 ; e) 25 ?',
      'Suite de figures : 5, 10, 15, 20… a) Quelle est la relation rang → quantité ? b) Quantité au rang 8 ? d) Quantité au rang 12 ? e) Quel rang a la figure de 45 objets ?',
      'Rivo : figures de 2, 4, 6 allumettes… a) Relation rang → quantité ? b) Vérifie-la sur les trois premiers rangs. d) Allumettes au rang 10 ? e) Avec 30 allumettes, jusqu’à quel rang peut-il construire UNE figure ?'],
    corr: ['a) 12 ; b) 20 ; d) 40 ; e) 100.',
      'a) 5 × rang ; b) 40 ; d) 60 ; e) 45 ÷ 5 = 9 : le rang 9.',
      'a) 2 × rang ; b) 2 × 1 = 2 ✓, 2 × 2 = 4 ✓, 2 × 3 = 6 ✓ ; d) 20 ; e) 30 ÷ 2 = 15 : la figure de rang 15.'],
    fig: 'u3f2'
  },
  {
    t: 'Les tableaux de valeurs', comp: 'Algèbre', theme: 'Tableaux de valeurs simples',
    goal: 'construire et utiliser un tableau de valeurs pour représenter une relation simple',
    mat: 'Grains de maïs, bâtonnets, grands tableaux tracés, cahier',
    revQ: 'Relation « 3 × rang » : quantité au rang 6 ?',
    revRA: '18.',
    situation: 'La maîtresse veut afficher au mur la suite des jetons de la classe : rang 1 → 3 jetons, rang 2 → 6, rang 3 → 9… En dessinant toutes les figures, l’affiche déborde ! Elle trace à la place un tableau à deux lignes : tout y tient, et la règle saute aux yeux.',
    def: 'Un tableau de valeurs est un tableau à deux lignes (ou deux colonnes) qui met en face l’une de l’autre deux quantités liées : sur la première ligne le rang (ou la première quantité), sur la seconde la quantité qui lui correspond.',
    autrement: 'le tableau de valeurs, c’est la suite rangée en deux étages : en haut la position, en bas ce qu’elle vaut — chaque colonne forme un couple.',
    concept: 'Le tableau est l’outil-pivot de toute l’algèbre : il se lit dans TROIS directions. En ligne, on lit la suite : 3, 6, 9, 12… et son pas « + 3 ». En colonne, on lit la relation rang → quantité : chaque nombre du bas vaut 3 × celui du haut — c’est la règle « × 3 ». Et en couple, chaque colonne raconte un fait : « au rang 4, il y a 12 jetons ». La force du tableau : les trous se remplissent par la règle, même loin — la colonne du rang 10 reçoit 30 sans qu’on dessine rien. Remplir un tableau, c’est donc trois gestes : repérer la règle en colonne, la vérifier sur toutes les colonnes pleines, puis compléter les colonnes vides. Le tableau prépare directement la proportionnalité de la prochaine séance.',
    synthese: 'deux lignes en face à face ; lecture en ligne (le pas), en colonne (la règle), en couple (un fait) ; la règle vérifiée remplit les trous.',
    method: ['Tracer deux lignes : rang en haut, quantité en bas.', 'Remplir avec les couples connus et chercher la règle en colonne.', 'Vérifier la règle sur toutes les colonnes pleines, puis compléter les trous.'],
    exemple: 'Rang 1, 2, 3, 4 → quantité 7, 14, 21, 28 : règle « × 7 » ; au rang 6, 42.',
    erreur: 'Chercher la règle seulement en ligne (« + 3 ») et s’arrêter là : pour sauter au rang 10, c’est la règle en COLONNE (« × 3 ») qu’il faut — sinon on doit remplir toutes les colonnes une à une.',
    saistu: 'Les feuilles de calcul des ordinateurs — des milliers de lignes et de colonnes — ne sont rien d’autre que des tableaux de valeurs géants. Les comptables, les météorologues et les épidémiologistes du monde entier travaillent chaque jour dans d’immenses tableaux… exactement comme toi aujourd’hui.',
    exos: ['Recopie et complète le tableau de règle « × 6 » : rang 1, 2, 3, 4, 5 → a) rang 2 ? b) rang 3 ? d) rang 4 ? e) rang 5 ?',
      'Tableau : rang 1, 2, 3, 4 → quantité 8, 16, 24, 32. a) Quelle est la règle ? b) Quantité au rang 7 ? d) Rang de la quantité 80 ? e) La quantité 36 peut-elle apparaître ? Pourquoi ?',
      'Un cahier coûte 900 Ar. a) Construis le tableau de valeurs pour 1, 2, 3, 4 cahiers. b) Quelle est la règle ? d) Prix de 6 cahiers ? e) Combien de cahiers pour 7 200 Ar ?'],
    corr: ['a) 12 ; b) 18 ; d) 24 ; e) 30.',
      'a) × 8 ; b) 56 ; d) 10 ; e) non : 36 n’est pas un multiple de 8 (8 × 4 = 32, 8 × 5 = 40).',
      'a) 1 → 900 ; 2 → 1 800 ; 3 → 2 700 ; 4 → 3 600 ; b) prix = 900 × nombre de cahiers ; d) 5 400 Ar ; e) 7 200 ÷ 900 = 8 cahiers.'],
    fig: 'u3f3'
  },
  {
    t: 'La correspondance entre deux quantités', comp: 'Algèbre', theme: 'Relations simples et proportionnalité intuitive',
    goal: 'déterminer la règle d’une relation entre deux quantités qui varient ensemble',
    mat: 'Bâtonnets, grains de maïs, paniers, tableaux de correspondance, cahier',
    revQ: 'Tableau de règle « × 9 » : quantité au rang 4 ?',
    revRA: '36.',
    situation: 'Au verger, chaque panier reçoit exactement 6 mangues. Un panier → 6 mangues ; deux paniers → 12 ; trois → 18… Les deux quantités grandissent ENSEMBLE, d’un même mouvement. Quelle est la règle secrète qui les lie ?',
    def: 'Deux quantités sont en correspondance quand à chaque valeur de l’une répond une valeur de l’autre. La relation est proportionnelle quand on passe de la première à la seconde en multipliant toujours par le même nombre : quand l’une double, l’autre double ; quand l’une triple, l’autre triple.',
    autrement: 'deux quantités proportionnelles marchent au même pas : tout ce qui arrive à l’une (doubler, tripler) arrive aussitôt à l’autre.',
    concept: 'La règle d’une correspondance se découvre dans le tableau : paniers 1, 2, 3, 4 → mangues 6, 12, 18, 24. En colonne, chaque nombre du bas vaut 6 × celui du haut : la règle est « × 6 ». Le test de la proportionnalité : 2 fois plus de paniers donne-t-il 2 fois plus de mangues ? 2 → 12 et 4 → 24 : oui ✓. Toutes les correspondances ne sont pas proportionnelles ! L’âge d’un enfant et sa taille varient ensemble, mais un enfant de 10 ans n’est pas deux fois plus grand qu’à 5 ans. Le programme demande de raisonner SANS taux unitaire donné : si 2 paniers → 12 mangues, on trouve la règle en cherchant « 2 × ? = 12 », donc × 6 — par déduction ou par essais systématiques. La règle trouvée se vérifie toujours sur un autre couple avant d’être utilisée.',
    synthese: 'correspondance = deux quantités liées ; proportionnelle = même multiplicateur partout (qui double fait doubler) ; la règle se déduit d’un couple et se vérifie sur un autre.',
    method: ['Mettre les couples connus en tableau de correspondance.', 'Chercher le multiplicateur : « premier nombre × ? = second nombre ».', 'Tester la règle sur un autre couple (et le test du double), puis l’appliquer.'],
    exemple: '3 kapoaka pèsent 840 g ; 1 kapoaka ? La règle « × 280 » vient de 3 × 280 = 840 ; donc 5 kapoaka → 1 400 g.',
    erreur: 'Croire que toute correspondance est proportionnelle : l’âge et la taille, le rang et la température du jour ne suivent aucun multiplicateur fixe. Avant d’appliquer la règle, faire le test du double !',
    saistu: 'Les cartes géographiques sont de la proportionnalité pure : à l’échelle 1/100 000, chaque centimètre de papier correspond à 1 km de terrain, PARTOUT sur la carte. Si la règle changeait d’un coin à l’autre de la feuille, aucun voyageur ne retrouverait jamais son chemin !',
    exos: ['Chaque sachet contient 8 bonbons. Combien de bonbons pour : a) 3 sachets ; b) 5 sachets ; d) 10 sachets ; e) 12 sachets ?',
      'Tableau : 2 cahiers → 1 600 Ar ; 4 cahiers → 3 200 Ar. a) Quelle est la règle ? b) Prix de 7 cahiers ? d) Nombre de cahiers pour 8 000 Ar ? e) Le test du double est-il vérifié ?',
      'Dis si la relation est proportionnelle : a) nombre de kapoaka de riz et masse de riz ; b) âge et pointure des chaussures ; d) nombre de tickets de bus et prix payé ; e) rang du jour de la semaine et pluie tombée.'],
    corr: ['a) 24 ; b) 40 ; d) 80 ; e) 96.',
      'a) × 800 ; b) 5 600 Ar ; d) 10 cahiers ; e) oui : 2 → 1 600 et 4 → 3 200, le double donne le double ✓.',
      'a) oui ; b) non : la pointure ne double pas quand l’âge double ; d) oui ; e) non : aucune règle ne lie le jour et la pluie.'],
    fig: 'u3f4'
  },
  {
    t: 'La règle de trois', comp: 'Algèbre', theme: 'Règle de trois et valeur inconnue dans un tableau',
    goal: 'trouver une quatrième valeur proportionnelle par la règle de trois',
    mat: 'Stylos, monnaie factice, tableaux de proportionnalité, cahier',
    revQ: '5 sachets de 8 bonbons : combien de bonbons ?',
    revRA: '40.',
    situation: 'Au marché, 3 stylos coûtent 700 Ar. Naly en veut 9 : combien va-t-il payer ? Le vendeur n’affiche pas le prix d’UN stylo — et d’ailleurs 700 ÷ 3 ne tombe pas juste ! La règle de trois trouve la réponse sans jamais passer par le prix d’un stylo.',
    def: 'La règle de trois permet de trouver une quatrième valeur quand trois valeurs proportionnelles sont connues : on multiplie, puis on divise. Pour 9 stylos sachant que 3 stylos coûtent 700 Ar, on écrit l’équation : prix = (9 × 700) ÷ 3 = 2 100 Ar.',
    autrement: 'on paie « 9 fois le prix de 700 Ar »… mais comme 700 Ar couvre 3 stylos, on divise par 3 : multiplier par le nouveau, diviser par l’ancien.',
    concept: 'Pourquoi ça marche ? Deux lectures du même calcul. Lecture par paquets : 9 stylos = 3 paquets de 3 stylos → 3 × 700 = 2 100 Ar ; la règle de trois fait pareil, dans un autre ordre : (9 × 700) ÷ 3 = 9 ÷ 3 × 700. Lecture par l’unité : 700 ÷ 3 serait le prix d’un stylo, multiplié ensuite par 9 — mais en multipliant D’ABORD (9 × 700 = 6 300), on évite la division qui ne tombe pas juste, et 6 300 ÷ 3 = 2 100 tombe rond. C’est tout l’avantage de l’ordre « multiplier puis diviser ». La règle de trois exige la proportionnalité (prix au même tarif, pas de remise !) et un tableau bien posé : les quantités de même nature l’une sous l’autre, pour ne pas mélanger stylos et ariary.',
    synthese: 'quatrième valeur = (valeur en face × nouvelle quantité) ÷ ancienne quantité ; multiplier d’abord, diviser ensuite ; exige la proportionnalité.',
    method: ['Poser le tableau : quantités sur une ligne, valeurs sur l’autre, l’inconnue à sa place.', 'Écrire l’équation : (nombre en diagonale × nombre en face) ÷ nombre restant.', 'Calculer en multipliant d’abord, puis vérifier par un chemin différent (paquets, double…).'],
    exemple: '5 kapoaka de riz pèsent 1 400 g ; 8 kapoaka ? (8 × 1 400) ÷ 5 = 11 200 ÷ 5 = 2 240 g.',
    erreur: 'Multiplier les mauvais nombres entre eux : (9 × 3) ÷ 700 mélange des stylos avec des stylos ! Dans la règle de trois, on multiplie toujours deux nombres de NATURES DIFFÉRENTES (stylos × ariary).',
    saistu: 'La règle de trois est l’outil quotidien des infirmiers du monde entier : « ce flacon contient 500 mg dans 10 mL ; le médecin prescrit 150 mg, combien de mL ? » — (150 × 10) ÷ 500 = 3 mL. Des vies dépendent chaque jour de ce petit calcul de T5 !',
    exos: ['Calcule par la règle de trois : a) 3 stylos → 700 Ar, 9 stylos ? b) 2 kg → 5 000 Ar, 7 kg ? d) 4 tickets → 2 000 Ar, 10 tickets ? e) 5 m → 12 000 Ar, 8 m ?',
      'Un taxi-brousse parcourt 150 km en 3 heures, à vitesse régulière. a) Pose le tableau. b) Distance en 5 heures ? d) Durée pour 250 km ? e) Vérifie b) par le test des paquets ou du double.',
      '6 kapoaka de riz pèsent 1 680 g. a) Écris l’équation du poids de 10 kapoaka. b) Calcule. d) Écris l’équation du nombre de kapoaka pour 840 g. e) Calcule et vérifie.'],
    corr: ['a) (9 × 700) ÷ 3 = 2 100 Ar ; b) (7 × 5 000) ÷ 2 = 17 500 Ar ; d) (10 × 2 000) ÷ 4 = 5 000 Ar ; e) (8 × 12 000) ÷ 5 = 19 200 Ar.',
      'a) heures 3, 5 / km 150, ? ; b) (5 × 150) ÷ 3 = 250 km ; d) (250 × 3) ÷ 150 = 5 heures ; e) 150 km en 3 h → 50 km par heure → 5 × 50 = 250 ✓.',
      'a) (10 × 1 680) ÷ 6 ; b) 16 800 ÷ 6 = 2 800 g ; d) (840 × 6) ÷ 1 680 ; e) 5 040 ÷ 1 680 = 3 kapoaka ; vérif : 840 = la moitié de 1 680 → la moitié de 6 = 3 ✓.'],
    fig: 'u3f5'
  },
  {
    t: 'Le sens du signe égal', comp: 'Algèbre', theme: 'Égalité et équivalence entre deux expressions',
    goal: 'comprendre le signe égal comme une équivalence entre deux expressions et compléter des égalités simples',
    mat: 'Balance à plateaux (ou mobile), jetons, cartes d’expressions, cahier',
    revQ: '2 kg coûtent 5 000 Ar ; 3 kg ?',
    revRA: '(3 × 5 000) ÷ 2 = 7 500 Ar.',
    situation: 'La maîtresse écrit : 7 + 5 = □ + 2. Presque toute la classe répond 12 ! Mais 7 + 5 = 12 + 2 dirait que 12 égale 14… La balance de la classe tranche : pour équilibrer 7 + 5, il faut poser 10 + 2. Le signe = ne dit pas « réponds ! », il dit « même valeur des deux côtés ».',
    def: 'Le signe égal (=) exprime une équivalence : il affirme que les expressions écrites à sa gauche et à sa droite ont exactement la même valeur. Deux expressions différentes peuvent être équivalentes : 7 + 5 = 10 + 2, car les deux valent 12.',
    autrement: 'le = est une balance en équilibre : ce qu’il y a à gauche pèse exactement autant que ce qu’il y a à droite.',
    concept: 'Depuis le CP, beaucoup lisent le = comme un bouton « résultat » de calculatrice : « 7 + 5 égale… 12 ! ». Cette lecture fait écrire des horreurs en chaîne comme « 7 + 5 = 12 + 3 = 15 » (faux : 7 + 5 ne vaut pas 15 !). La vraie lecture est symétrique : chaque côté est une expression, et le = certifie qu’elles pèsent pareil. D’où trois pouvoirs nouveaux. Compléter : 8 + □ = 6 + 7 → la droite pèse 13, donc □ = 5. Vérifier : 25 − 8 = 15 + 2 ? Gauche 17, droite 17 : vrai. Transformer : 99 + 46 = 100 + 45 — la compensation du calcul mental n’était qu’une égalité d’équivalence ! La balance à plateaux rend tout cela visible : on charge les deux plateaux, et l’aiguille dit la vérité.',
    synthese: '= signifie « même valeur », pas « voici le résultat » ; on calcule chaque côté séparément pour vérifier ou compléter une égalité.',
    method: ['Calculer la valeur du côté complet de l’égalité.', 'Chercher ce qui manque de l’autre côté pour atteindre la même valeur.', 'Vérifier en recalculant LES DEUX côtés séparément.'],
    exemple: '15 − 6 = □ + 4 : la gauche vaut 9 ; il faut □ + 4 = 9, donc □ = 5 ; contrôle : 9 = 9 ✓.',
    erreur: 'Écrire les calculs en chaîne : « 7 + 5 = 12 + 3 = 15 ». La première égalité devient fausse ! Chaque signe = doit être vrai tout seul : on écrit 7 + 5 = 12, PUIS 12 + 3 = 15.',
    saistu: 'Le signe = a été inventé en 1557 par le Gallois Robert Recorde, qui dessina deux petits traits parallèles « parce que rien n’est plus pareil que deux droites jumelles ». Avant lui, les mathématiciens écrivaient en toutes lettres « est égal à » — des pages entières !',
    exos: ['Vraies ou fausses ? a) 8 + 6 = 10 + 4 ; b) 20 − 5 = 10 + 10 ; d) 3 × 6 = 9 × 2 ; e) 45 ÷ 5 = 3 × 3.',
      'Complète : a) 9 + □ = 7 + 8 ; b) □ − 4 = 10 + 6 ; d) 5 × □ = 40 ÷ 2 ; e) 12 + 13 = □ × 5.',
      'a) Explique pourquoi 7 + 5 = □ + 2 ne se complète pas par 12. b) Donne la bonne valeur. d) Écris une égalité équivalente à 99 + 46 plus facile à calculer. e) Invente une égalité vraie avec deux expressions différentes des deux côtés.'],
    corr: ['a) vraie (14 = 14) ; b) fausse (15 ≠ 20) ; d) vraie (18 = 18) ; e) vraie (9 = 9).',
      'a) 6 ; b) 20 ; d) 4 ; e) 5.',
      'a) 12 + 2 vaudrait 14, mais la gauche vaut 12 : la balance pencherait ; b) □ = 10 ; d) 100 + 45 = 145 ; e) par exemple 6 × 4 = 30 − 6.'],
    fig: 'u3f6'
  },
  {
    t: 'Trouver la valeur inconnue', comp: 'Algèbre', theme: 'Équations simples et essais systématiques',
    goal: 'trouver la valeur inconnue d’une équation simple par essais systématiques et prédire le 5ᵉ, 10ᵉ et 15ᵉ terme d’une suite',
    mat: 'Jetons, cartes-équations, tableaux de valeurs, cahier',
    revQ: 'Complète : 14 + □ = 9 + 11.',
    revRA: '□ = 6 (les deux côtés valent 20).',
    situation: 'Le cahier de comptes de la boutique affiche : 897 + □ = 917. La tache d’encre a mangé un nombre ! Hanta essaie 10 : trop petit. Puis 30 : trop grand. Puis 20 : exact ! Trois essais bien guidés, et le nombre caché est retrouvé.',
    def: 'Une équation est une égalité qui comporte une valeur inconnue, souvent notée par une case vide ou une lettre. Résoudre l’équation, c’est trouver la valeur de l’inconnue qui rend l’égalité vraie. Les essais systématiques consistent à essayer des valeurs ordonnées, à comparer le résultat au but, et à resserrer jusqu’à la solution.',
    autrement: 'on cherche le nombre caché en jouant au « trop grand / trop petit », et chaque essai rapproche de la cible.',
    concept: 'Les essais systématiques ne sont pas des essais au hasard : chaque réponse ORIENTE le suivant. Pour 897 + □ = 917 : essai 10 → 907, trop petit, on monte ; essai 30 → 927, trop grand, on descend ; essai 20 → 917 ✓. On peut aussi raisonner par déduction avec l’opération inverse : □ = 917 − 897 = 20 — les deux chemins mènent au même trésor, et l’un vérifie l’autre. Le programme donne les trois visages de l’équation : 897 + □ = 917 (□ = 20), 897 − □ = 847 (□ = 50), 897 ÷ □ = 299 (□ = 3). Même jeu pour prédire les termes lointains d’une suite : avec la relation « quantité = 4 × rang », le 5ᵉ terme vaut 20, le 10ᵉ vaut 40, le 15ᵉ vaut 60 — la formule prédit l’avenir de la suite sans construire une seule figure. Toujours finir par la VÉRIFICATION : remplacer l’inconnue par la valeur trouvée et contrôler l’égalité.',
    synthese: 'équation = égalité à trou ; essais ordonnés (trop grand / trop petit) ou opération inverse ; prédiction des termes par la relation ; vérifier en remplaçant.',
    method: ['Essayer une valeur raisonnable et calculer le côté de l’inconnue.', 'Comparer au but : trop grand → descendre ; trop petit → monter ; recommencer.', 'Vérifier la solution en remplaçant l’inconnue, et croiser avec l’opération inverse.'],
    exemple: '□ × 6 = 84 : essai 10 → 60, trop petit ; 15 → 90, trop grand ; 14 → 84 ✓ ; déduction : 84 ÷ 6 = 14 ✓.',
    erreur: 'S’arrêter au premier essai « pas trop loin » : 897 + 19 = 916 n’est PAS 917 ! Une équation n’accepte pas l’à-peu-près : on continue jusqu’à l’égalité exacte, puis on vérifie.',
    saistu: 'Ta méthode du « trop grand / trop petit » porte un nom savant : la recherche dichotomique. C’est elle qui permet de deviner n’importe quel nombre entre 1 et 1 000 000 en 20 questions seulement — et c’est l’une des méthodes les plus utilisées par les ordinateurs pour chercher dans d’immenses listes !',
    exos: ['Trouve l’inconnue par essais systématiques : a) 345 + □ = 400 ; b) 897 − □ = 847 ; d) □ × 7 = 91 ; e) 897 ÷ □ = 299.',
      'Trouve l’inconnue et vérifie : a) □ + 268 = 500 ; b) 6 × □ = 150 ; d) □ − 75 = 125 ; e) 240 ÷ □ = 8.',
      'La suite a pour relation « quantité = 4 × rang ». a) Prédis le 5ᵉ terme. b) Le 10ᵉ terme. d) Le 15ᵉ terme. e) Quel rang a le terme 100 ?'],
    corr: ['a) 55 (345 + 55 = 400 ✓) ; b) 50 (897 − 50 = 847 ✓) ; d) 13 (13 × 7 = 91 ✓) ; e) 3 (897 ÷ 3 = 299 ✓).',
      'a) 232 ; b) 25 ; d) 200 ; e) 30 — chaque solution vérifiée en remplaçant.',
      'a) 20 ; b) 40 ; d) 60 ; e) 100 ÷ 4 = 25 : le rang 25.'],
    fig: 'u3f7'
  }
];

const unit3 = {
  no: 3, roman: 'III', name: 'Algèbre',
  rag: 'comprendre des relations simples à partir de suites, de situations de proportionnalité et de situations d’égalité.',
  valeurs: 'esprit de créativité et goût de l’effort',
  sessions: S,
  revision: {
    table: [
      ['Suites et régularités', 'Motif répété ou croissant ; la règle se dit avec des mots précis', 'Décrire et prolonger une suite'],
      ['Rang et terme', 'Rang = position ; relation rang → quantité = formule-raccourci', 'Calculer un terme lointain sans tout construire'],
      ['Tableau de valeurs', 'Deux lignes en face à face ; règle en colonne, pas en ligne', 'Construire, lire et compléter un tableau'],
      ['Proportionnalité', 'Même multiplicateur partout ; test du double', 'Reconnaître et utiliser la règle d’une relation'],
      ['Règle de trois', '(nouvelle quantité × valeur) ÷ ancienne quantité', 'Trouver une quatrième valeur proportionnelle'],
      ['Égalité et inconnue', '= signifie « même valeur » ; essais systématiques et opération inverse', 'Compléter une égalité, résoudre une équation']
    ],
    questions: [
      'Suite 7, 14, 21, 28… : donne la règle « pas à pas », la relation rang → quantité, et le 15ᵉ terme.',
      'Construis le tableau de valeurs des prix de 1 à 4 savons à 1 200 Ar, et donne la règle.',
      '4 cahiers coûtent 3 600 Ar : prix de 7 cahiers par la règle de trois ?',
      'Vraie ou fausse : 36 ÷ 4 = 3 × 3 ? Puis complète : 25 + □ = 18 + 19.',
      'Résous par essais systématiques : 768 ÷ □ = 256, puis vérifie.'
    ],
    answers: [
      'Pas à pas « + 7 » ; relation « 7 × rang » ; 15ᵉ terme : 7 × 15 = 105.',
      '1 → 1 200 ; 2 → 2 400 ; 3 → 3 600 ; 4 → 4 800 ; règle : prix = 1 200 × nombre de savons.',
      '(7 × 3 600) ÷ 4 = 25 200 ÷ 4 = 6 300 Ar.',
      'Vraie (9 = 9) ; □ = 12 (les deux côtés valent 37).',
      '□ = 3 : essais 2 → 384 trop grand… 4 → 192 trop petit… 3 → 256 ✓ ; vérification 256 × 3 = 768 ✓.'
    ]
  },
  exam: {
    exos: [
      'Suites. On considère la suite 6, 12, 18, 24… a) Donne la règle « pas à pas ». b) Donne la relation entre le rang et le terme. d) Calcule le 10ᵉ terme. e) Quel est le rang du terme 54 ?',
      'Tableau de valeurs. Un sachet contient 5 bonbons. a) Construis le tableau pour 1, 2, 3 et 4 sachets. b) Donne la règle de la relation. d) Combien de bonbons dans 9 sachets ? e) Combien de sachets pour 65 bonbons ?',
      'Règle de trois. Au marché, 3 ananas coûtent 4 500 Ar. a) Écris l’équation du prix de 7 ananas. b) Calcule ce prix. d) Combien d’ananas pour 12 000 Ar ? e) Vérifie d) par un chemin différent.',
      'Égalités. a) L’égalité 14 + 9 = 20 + 3 est-elle vraie ? Justifie. b) Complète : 35 − □ = 16 + 9. d) Complète : □ × 8 = 100 − 36. e) Pourquoi est-il faux d’écrire « 8 + 7 = 15 + 5 = 20 » ?',
      'Problème. Pour la kermesse, chaque table reçoit 4 nappes en papier. a) Construis le tableau de valeurs pour 2, 5 et 10 tables. b) Quelle est la relation ? d) Le stock est de 72 nappes : combien de tables peut-on couvrir ? Écris l’équation et résous-la. e) Prédis le nombre de nappes pour le 15ᵉ rang du tableau (15 tables) et vérifie avec la relation.'
    ],
    corr: [
      'a) « + 6 » ; b) terme = 6 × rang ; d) 60 ; e) 54 ÷ 6 = 9 : rang 9. Un point par item.',
      'a) 1 → 5 ; 2 → 10 ; 3 → 15 ; 4 → 20 ; b) bonbons = 5 × sachets ; d) 45 ; e) 65 ÷ 5 = 13 sachets. Un point par item.',
      'a) (7 × 4 500) ÷ 3 ; b) 31 500 ÷ 3 = 10 500 Ar ; d) (12 000 × 3) ÷ 4 500 = 36 000 ÷ 4 500 = 8 ananas ; e) 12 000 ÷ 4 500 ne tombe pas juste, mais 8 ananas = 2 lots de 3 + 2… autre chemin : 6 ananas → 9 000 Ar, 2 ananas → 3 000 Ar, total 12 000 Ar ✓. Un point par item.',
      'a) vraie : 23 = 23 ; b) □ = 10 ; d) □ = 8 ; e) parce que 8 + 7 = 15 est vrai mais « 15 + 5 = 20 » collé derrière fait dire 8 + 7 = 20, qui est faux : chaque = doit être vrai séparément. Un point par item.',
      'a) 2 → 8 ; 5 → 20 ; 10 → 40 ; b) nappes = 4 × tables ; d) 4 × □ = 72, □ = 18 tables ; e) 4 × 15 = 60 nappes. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit3, bufs);
})();
