// UNITÉ 2 — OPÉRATION (PE T8) : 13 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — table de signes du produit
figs.u2f1 = (() => { const { s, y } = head('La règle des signes du produit', ['Même signe → résultat positif ; signes contraires → résultat négatif.']);
  const data = [['×', '+', '−'], ['+', '+', '−'], ['−', '−', '+']];
  let b = tableEl(260, y + 20, [160, 160, 160], 70, data);
  b += txt(220, y + 280, '(+5) × (+4) = +20', 22, GREEN, 'bold', 'middle')
    + txt(500, y + 280, '(−5) × (−4) = +20', 22, GREEN, 'bold', 'middle')
    + txt(780, y + 280, '(−5) × (+4) = −20', 22, PINK2, 'bold', 'middle');
  return svg(1000, y + 320, s + b); })();
// S2 — division relative
figs.u2f2 = (() => { const { s, y } = head('Diviser deux entiers relatifs', ['(−12) ÷ (+3) = −4 : on divise les distances à zéro, puis on applique le signe.']);
  let b = box(90, y + 30, 260, 90, '(−12) ÷ (+3)', undefined, BLUE, 26)
    + arrow(370, y + 75, 540, y + 75)
    + box(560, y + 30, 180, 90, '−4', '#FDE7EF', PINK2, 32);
  b += txt(455, y + 18, 'signes contraires', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 180, 'même règle des signes que la multiplication', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 215, s + b); })();
// S3 — triangle multiplication/division
figs.u2f3 = (() => { const { s, y } = head('Multiplication et division : opérations réciproques', ['4 × (−3) = −12, donc (−12) ÷ (−3) = 4 et (−12) ÷ 4 = −3.']);
  let b = box(390, y + 20, 220, 75, '−12', '#FDE7EF', PINK2, 30)
    + box(180, y + 170, 200, 75, '4', undefined, BLUE, 30)
    + box(620, y + 170, 200, 75, '−3', undefined, BLUE, 30);
  b += seg(395, y + 165, 460, y + 105, GREEN, 3.5) + seg(605, y + 165, 540, y + 105, GREEN, 3.5);
  b += txt(282, y + 140, '÷ (−3)', 21, GREEN, 'bold', 'middle') + txt(722, y + 140, '÷ 4', 21, GREEN, 'bold', 'middle');
  b += txt(500, y + 300, 'la division « défait » la multiplication', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 335, s + b); })();
// S4 — puissances d'un relatif
figs.u2f4 = (() => { const { s, y } = head('Les parenthèses changent tout !', ['(−2)⁴ = +16, mais −2⁴ = −16 : sans parenthèses, le signe − reste dehors.']);
  let b = box(90, y + 25, 380, 85, '', '#E8F5E9', GREEN, 24)
    + box(530, y + 25, 380, 85, '', '#FDE7EF', PINK2, 24);
  b += txt(280, y + 62, '(−2)⁴ = (−2)(−2)(−2)(−2)', 23, GREEN, 'bold', 'middle')
    + txt(280, y + 95, '= +16', 24, GREEN, 'bold', 'middle')
    + txt(720, y + 62, '−2⁴ = −(2 × 2 × 2 × 2)', 23, PINK2, 'bold', 'middle')
    + txt(720, y + 95, '= −16', 24, PINK2, 'bold', 'middle');
  b += txt(500, y + 165, 'exposant pair → positif ; exposant impair → négatif', 23, OCRE, 'bold', 'middle')
    + txt(500, y + 200, '(−2)³ = −8 ; (−2)⁴ = +16 ; (−1)¹⁰⁰ = +1', 22, GREEN, 'bold', 'middle');
  return svg(1000, y + 235, s + b); })();
// S5 — priorité sans parenthèses
figs.u2f5 = (() => { const { s, y } = head('La multiplication passe avant l’addition', ['5 + 3 × 4 : on calcule d’abord 3 × 4 = 12, puis 5 + 12 = 17.']);
  let b = box(130, y + 25, 220, 80, '5 + 3 × 4', undefined, BLUE, 26)
    + arrow(370, y + 65, 500, y + 65)
    + box(520, y + 25, 160, 80, '5 + 12', '#E8F5E9', GREEN, 26)
    + arrow(700, y + 65, 790, y + 65)
    + box(805, y + 25, 120, 80, '17', '#FDE7EF', PINK2, 28);
  b += txt(435, y + 12, '× d’abord', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 160, 'surtout PAS de gauche à droite : 8 × 4 = 32 est faux !', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();
// S6 — pyramide des priorités
figs.u2f6 = (() => { const { s, y } = head('L’ordre complet des priorités', ['Parenthèses, puis exposants, puis × et ÷, puis + et −.']);
  const rows = [['1. Parenthèses ( )', '#FDE7EF', PINK2, 300], ['2. Exposants aⁿ', '#FFF3E0', OCRE, 440], ['3. × et ÷', '#E3F2FD', '#1565C0', 580], ['4. + et −', '#E8F5E9', GREEN, 720]];
  let b = '';
  rows.forEach(([t, f, c, w], i) => {
    b += box(500 - w / 2, y + 15 + i * 72, w, 60, '', f, c, 22) + txt(500, y + 15 + i * 72 + 38, t, 22, c, 'bold', 'middle');
  });
  b += txt(500, y + 15 + 4 * 72 + 30, '(2 + 1)² × 2 − 5 = 9 × 2 − 5 = 18 − 5 = 13', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 15 + 4 * 72 + 70, s + b); })();
// S7 — calcul mental 25 × 16
figs.u2f7 = (() => { const { s, y } = head('Décomposer pour calculer de tête', ['25 × 16 = 25 × 4 × 4 = 100 × 4 = 400 : aucun papier nécessaire !']);
  let b = box(110, y + 25, 200, 80, '25 × 16', undefined, BLUE, 26)
    + arrow(330, y + 65, 420, y + 65)
    + box(435, y + 25, 230, 80, '25 × 4 × 4', '#E8F5E9', GREEN, 25)
    + arrow(685, y + 65, 760, y + 65)
    + box(775, y + 25, 170, 80, '400', '#FDE7EF', PINK2, 28);
  b += txt(540, y + 150, '25 × 4 = 100 : une paire magique à repérer partout', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 185, s + b); })();
// S8 — glissement de virgule
figs.u2f8 = (() => { const { s, y } = head('La virgule glisse', ['× 10, 100, 1 000 : la virgule va à droite ; ÷ : elle va à gauche.']);
  let b = box(100, y + 25, 360, 80, '', '#E8F5E9', GREEN, 24)
    + box(540, y + 25, 360, 80, '', '#FDE7EF', PINK2, 24);
  b += txt(280, y + 62, '3,45 × 100 = 345', 25, GREEN, 'bold', 'middle')
    + txt(280, y + 95, '2 rangs vers la droite', 19, GREEN, 'normal', 'middle')
    + txt(720, y + 62, '27 ÷ 1 000 = 0,027', 25, PINK2, 'bold', 'middle')
    + txt(720, y + 95, '3 rangs vers la gauche', 19, PINK2, 'normal', 'middle');
  b += txt(500, y + 160, 'on complète avec des zéros si les rangs manquent', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();
// S9 — dénominateur commun
figs.u2f9 = (() => { const { s, y } = head('Le dénominateur commun', ['1/2 + 1/3 : impossible tel quel ! On passe en sixièmes : 3/6 + 2/6 = 5/6.']);
  const drawBar = (x, yy, n, k, fill) => {
    let r = `<rect x="${x}" y="${yy}" width="240" height="60" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
    for (let i = 0; i < k; i++) r += `<rect x="${x + i * 240 / n}" y="${yy}" width="${240 / n}" height="60" fill="${fill}"/>`;
    for (let i = 1; i < n; i++) r += `<line x1="${x + i * 240 / n}" y1="${yy}" x2="${x + i * 240 / n}" y2="${yy + 60}" stroke="${BLUE}" stroke-width="2"/>`;
    return r;
  };
  let b = drawBar(80, y + 30, 6, 3, '#A5D6A7') + txt(200, y + 130, '3/6', 24, GREEN, 'bold', 'middle')
    + txt(360, y + 70, '+', 32, '#333', 'bold', 'middle')
    + drawBar(420, y + 30, 6, 2, '#F8BBD0') + txt(540, y + 130, '2/6', 24, PINK2, 'bold', 'middle')
    + txt(700, y + 70, '=', 32, '#333', 'bold', 'middle')
    + drawBar(740, y + 30, 6, 5, '#FFE0B2') + txt(860, y + 130, '5/6', 24, OCRE, 'bold', 'middle');
  b += txt(500, y + 190, '6 est un multiple commun de 2 et de 3', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 225, s + b); })();
// S10 — rectangle 2/3 × 3/4
figs.u2f10 = (() => { const { s, y } = head('Multiplier deux fractions : l’aire du rectangle', ['2/3 × 3/4 : un quadrillage 3 × 4 ; la zone double-hachurée compte 6 cases sur 12.']);
  const X = 330, Y = y + 20, W = 340, H = 255;
  let b = `<rect x="${X}" y="${Y}" width="${W}" height="${H}" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
  b += `<rect x="${X}" y="${Y}" width="${W * 3 / 4}" height="${H}" fill="#F8BBD0" opacity="0.65"/>`;
  b += `<rect x="${X}" y="${Y}" width="${W}" height="${H * 2 / 3}" fill="#A5D6A7" opacity="0.65"/>`;
  for (let i = 1; i < 4; i++) b += `<line x1="${X + i * W / 4}" y1="${Y}" x2="${X + i * W / 4}" y2="${Y + H}" stroke="${BLUE}" stroke-width="2"/>`;
  for (let i = 1; i < 3; i++) b += `<line x1="${X}" y1="${Y + i * H / 3}" x2="${X + W}" y2="${Y + i * H / 3}" stroke="${BLUE}" stroke-width="2"/>`;
  b += txt(X + W / 2, Y + H + 40, '3/4 en largeur (rose)', 21, PINK2, 'bold', 'middle')
    + txt(X - 160, Y + H / 2, '2/3 en hauteur', 21, GREEN, 'bold', 'middle')
    + txt(X + W + 170, Y + H / 2, 'zone commune :', 21, OCRE, 'bold', 'middle')
    + txt(X + W + 170, Y + H / 2 + 32, '6/12 = 1/2', 23, OCRE, 'bold', 'middle');
  return svg(1000, Y + H + 80, s + b); })();
// S11 — division : multiplier par l'inverse
figs.u2f11 = (() => { const { s, y } = head('Diviser, c’est multiplier par l’inverse', ['2/3 ÷ 4/5 = 2/3 × 5/4 : la deuxième fraction se retourne.']);
  let b = box(130, y + 30, 250, 85, '2/3 ÷ 4/5', undefined, BLUE, 26)
    + arrow(400, y + 72, 560, y + 72)
    + box(580, y + 30, 250, 85, '2/3 × 5/4', '#E8F5E9', GREEN, 26);
  b += txt(480, y + 18, '4/5 se retourne en 5/4', 19, PINK2, 'bold', 'middle');
  b += txt(500, y + 170, 'résultat : (2 × 5) / (3 × 4) = 10/12 = 5/6', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 205, s + b); })();
// S12 — estimation
figs.u2f12 = (() => { const { s, y } = head('Estimer avant de calculer', ['4,9 × 2,1 : on arrondit chaque facteur → 5 × 2 = 10. Résultat exact : 10,29.']);
  let b = box(110, y + 25, 220, 80, '4,9 × 2,1', undefined, BLUE, 26)
    + arrow(350, y + 65, 460, y + 65)
    + box(480, y + 25, 180, 80, '5 × 2', '#E8F5E9', GREEN, 26)
    + arrow(680, y + 65, 760, y + 65)
    + box(775, y + 25, 150, 80, '≈ 10', '#FDE7EF', PINK2, 28);
  b += txt(405, y + 12, 'on arrondit', 19, GREEN, 'bold', 'middle');
  b += txt(500, y + 160, 'l’estimation détecte les grosses erreurs de calcul', 23, OCRE, 'bold', 'middle');
  return svg(1000, y + 195, s + b); })();
// S13 — droite de l'arrondi
figs.u2f13 = (() => { const { s, y } = head('La droite de l’arrondi', ['7,3 est entre 7 et 8, plus près de 7 : arrondi à l’unité, 7,3 → 7.']);
  let b = nline(150, y + 90, 700, 10, ['7', null, null, null, null, '7,5', null, null, null, null, '8']);
  const px = v => 150 + (v - 7) * 700;
  b += dot(px(7.3), y + 90, 10, PINK2) + txt(px(7.3), y + 55, '7,3', 24, PINK2, 'bold', 'middle');
  b += seg(px(7.5), y + 45, px(7.5), y + 112, OCRE, 3, '8 6');
  b += txt(325, y + 175, 'avant 7,5 → on arrondit à 7', 21, GREEN, 'bold', 'middle')
    + txt(730, y + 175, 'à partir de 7,5 → on arrondit à 8', 21, PINK2, 'bold', 'middle');
  return svg(1000, y + 210, s + b); })();

const S = [
  {
    t: 'Multiplier des entiers relatifs', comp: 'Opération', theme: 'Produit de deux entiers relatifs : règle des signes',
    goal: 'calculer le produit de deux entiers relatifs en appliquant la règle des signes',
    mat: 'Cartes de signes + et −, jetons bicolores, cahier, ardoises',
    revQ: 'Calcule (+3) + (−8) et (−5) + (−2).',
    revRA: '−5 ; −7.',
    situation: 'Naina dépense 2 000 Ar de taxi-be chaque jour pendant 3 jours. Sa tirelire change de (−2 000) × 3 = −6 000 Ar. Une perte répétée se calcule par une multiplication… de relatifs !',
    def: 'Le produit de deux entiers relatifs est l’entier relatif dont la distance à zéro est le produit des distances à zéro, et dont le signe est positif si les deux facteurs ont le même signe, négatif s’ils ont des signes contraires.',
    autrement: 'on multiplie les nombres sans les signes, puis : même signe → +, signes différents → −.',
    concept: 'Pour (−5) × (−4), on multiplie d’abord les distances à zéro : 5 × 4 = 20. Les deux facteurs ont le même signe (tous deux négatifs), donc le résultat est positif : +20. Pour (−5) × (+4), les signes sont contraires : le résultat est −20. Cette règle prolonge la logique des pertes et des gains : perdre une dette, c’est gagner — voilà pourquoi « moins par moins donne plus ».',
    synthese: 'produit de relatifs : on multiplie les distances à zéro ; même signe → résultat positif, signes contraires → résultat négatif.',
    method: ['Multiplier les distances à zéro des deux facteurs.', 'Comparer les signes : identiques ou contraires ?', 'Donner le signe du résultat : + si identiques, − si contraires.'],
    exemple: '(+6) × (+7) = +42 ; (−6) × (−7) = +42 ; (−6) × (+7) = −42 ; (+6) × (−7) = −42.',
    erreur: 'Croire que (−5) × (−4) = −20 parce qu’« il y a des moins partout ». Deux signes moins qui se multiplient donnent un plus : (−5) × (−4) = +20.',
    saistu: 'Au VIIᵉ siècle, le mathématicien indien Brahmagupta énonçait déjà la règle des signes en parlant de « fortunes » et de « dettes » : une dette multipliée par une dette donne une fortune !',
    exos: ['Calcule : a) (+8) × (+5) ; b) (−8) × (−5) ; d) (−8) × (+5) ; e) (+8) × (−5).',
      'Calcule : a) (−3) × (−3) ; b) (−7) × 0 ; d) (−1) × (+45) ; e) (−10) × (−10).',
      'Trouve le facteur manquant : a) (−4) × … = +12 ; b) … × (+6) = −30 ; d) (−9) × … = −81 ; e) … × (−2) = 0.'],
    corr: ['a) +40 ; b) +40 ; d) −40 ; e) −40.',
      'a) +9 ; b) 0 ; d) −45 ; e) +100.',
      'a) −3 ; b) −5 ; d) +9 ; e) 0.'],
    fig: 'u2f1'
  },
  {
    t: 'Diviser des entiers relatifs', comp: 'Opération', theme: 'Quotient de deux entiers relatifs',
    goal: 'calculer le quotient de deux entiers relatifs en appliquant la règle des signes',
    mat: 'Jetons bicolores, cartes de nombres, cahier',
    revQ: 'Calcule (−6) × (+4) et (−6) × (−4).',
    revRA: '−24 ; +24.',
    situation: 'Trois amis partagent équitablement une dette de 12 000 Ar. Chacun doit (−12 000) ÷ 3 = −4 000 Ar. Diviser un relatif, c’est partager un gain… ou une perte !',
    def: 'Le quotient de deux entiers relatifs (diviseur non nul) est le nombre dont la distance à zéro est le quotient des distances à zéro, et dont le signe suit la même règle que pour le produit : même signe → positif, signes contraires → négatif.',
    autrement: 'on divise les nombres sans les signes, puis on applique exactement la même règle des signes que pour la multiplication.',
    concept: 'Pour (−12) ÷ (+3), on divise les distances à zéro : 12 ÷ 3 = 4. Les signes sont contraires, donc le quotient est −4. La cohérence se vérifie par la multiplication : (−4) × (+3) = −12. C’est le même raisonnement que pour le produit, car la division est définie à partir de la multiplication. Attention : la division par zéro reste impossible, pour les relatifs comme pour les naturels.',
    synthese: 'quotient de relatifs : on divise les distances à zéro et on applique la règle des signes du produit ; on vérifie par multiplication.',
    method: ['Diviser les distances à zéro.', 'Appliquer la règle des signes : identiques → +, contraires → −.', 'Vérifier : quotient × diviseur = dividende.'],
    exemple: '(−20) ÷ (−5) = +4 ; (+18) ÷ (−6) = −3 ; (−36) ÷ (+9) = −4.',
    erreur: 'Écrire (−15) ÷ (−3) = −5 : deux signes identiques donnent un quotient POSITIF, donc +5. Vérifie toujours : (+5) × (−3) = −15 ✗… non ! (−5) × (−3) = +15 ✗ aussi : seul (+5) × (−3) = −15 redonne le dividende… la vérification démasque l’erreur.',
    saistu: 'Pourquoi ne peut-on jamais diviser par zéro ? Parce qu’aucun nombre multiplié par 0 ne redonne 12 : l’équation 0 × ? = 12 n’a pas de solution. Les calculatrices affichent « Error » !',
    exos: ['Calcule : a) (+24) ÷ (+6) ; b) (−24) ÷ (−6) ; d) (−24) ÷ (+6) ; e) (+24) ÷ (−6).',
      'Calcule : a) (−45) ÷ (+9) ; b) (−100) ÷ (−10) ; d) 0 ÷ (−7) ; e) (−63) ÷ (+7).',
      'Une dette de 18 000 Ar est partagée entre 6 personnes. a) Écris le calcul avec des relatifs. b) Combien doit chaque personne ? d) Vérifie par une multiplication. e) Et si on n’était que 3 ?'],
    corr: ['a) +4 ; b) +4 ; d) −4 ; e) −4.',
      'a) −5 ; b) +10 ; d) 0 ; e) −9.',
      'a) (−18 000) ÷ 6 ; b) −3 000 Ar ; d) (−3 000) × 6 = −18 000 ✓ ; e) (−18 000) ÷ 3 = −6 000 Ar.'],
    fig: 'u2f2'
  },
  {
    t: 'Relier multiplication et division', comp: 'Opération', theme: 'Multiplication et division : opérations réciproques',
    goal: 'utiliser le lien entre multiplication et division pour vérifier un calcul ou trouver un facteur manquant',
    mat: 'Cartes-triangles a × b = c, cahier, ardoises',
    revQ: 'Calcule (−8) × (+3) et (−24) ÷ (−8).',
    revRA: '−24 ; +3.',
    situation: 'Hery a calculé (−84) ÷ 7 = −12 et doute de son résultat. Pas besoin de refaire la division : il suffit de vérifier que (−12) × 7 = −84. La multiplication « défait » la division !',
    def: 'La multiplication et la division sont des opérations réciproques : si a × b = c (avec b non nul), alors c ÷ b = a et c ÷ a = b (avec a non nul). Chaque égalité de produit cache ainsi deux égalités de quotient.',
    autrement: 'connaître UNE multiplication, c’est connaître DEUX divisions gratuites.',
    concept: 'Le triangle 4 × (−3) = −12 résume trois égalités : 4 × (−3) = −12, (−12) ÷ (−3) = 4 et (−12) ÷ 4 = −3. Ce lien sert partout : pour vérifier une division (on remultiplie), pour trouver un facteur manquant (on divise le produit par le facteur connu), et plus tard pour résoudre les équations du type ax = b. C’est l’un des outils de contrôle les plus puissants du calcul.',
    synthese: 'a × b = c équivaut à c ÷ b = a et c ÷ a = b : on vérifie une division par une multiplication et on trouve un facteur manquant par une division.',
    method: ['Écrire le triangle : produit en haut, les deux facteurs en bas.', 'Pour vérifier une division : remultiplier le quotient par le diviseur.', 'Pour un facteur manquant : diviser le produit par le facteur connu.'],
    exemple: '… × (−6) = +42 → le facteur vaut (+42) ÷ (−6) = −7. Vérification : (−7) × (−6) = +42 ✓.',
    erreur: 'Vérifier (−84) ÷ 7 = −12 en recalculant la même division : si l’erreur vient de la méthode, elle se répète ! La vraie vérification change d’opération : (−12) × 7 = −84.',
    saistu: 'Les comptables utilisent cette réciprocité tous les jours : pour contrôler un partage de recettes, ils remultiplient la part de chacun par le nombre de parts. Si le total ne retombe pas juste, une erreur s’est glissée quelque part !',
    exos: ['À partir de (−9) × (+8) = −72, écris les deux divisions associées : a) la première ; b) la seconde ; d) vérifie l’une d’elles ; e) écris le triangle de (−5) × (−7) = +35.',
      'Trouve le nombre manquant : a) … × 6 = −54 ; b) (−11) × … = +88 ; d) … ÷ (−4) = +7 ; e) (−120) ÷ … = −12.',
      'Voamirana affirme : (−91) ÷ 7 = −13. a) Quelle multiplication permet de vérifier ? b) Effectue-la. d) Le résultat est-il juste ? e) Même question pour (−75) ÷ (−5) = −15.'],
    corr: ['a) (−72) ÷ (+8) = −9 ; b) (−72) ÷ (−9) = +8 ; d) (−9) × (+8) = −72 ✓ ; e) +35 en haut, −5 et −7 en bas.',
      'a) −9 ; b) −8 ; d) −28 ; e) +10.',
      'a) (−13) × 7 ; b) −91 ; d) oui ✓ ; e) (−15) × (−5) = +75 ≠ −75 : c’est faux, la bonne réponse est +15.'],
    fig: 'u2f3'
  },
  {
    t: 'Calculer les puissances d’un entier relatif', comp: 'Opération', theme: 'Puissances d’un relatif : rôle des parenthèses et du signe',
    goal: 'calculer la puissance d’un entier relatif et distinguer (−a)ⁿ de −aⁿ',
    mat: 'Cartes d’exposants, tableau des puissances de 2 et de 3, cahier',
    revQ: 'Calcule (−2) × (−2) et (−2) × (−2) × (−2).',
    revRA: '+4 ; −8.',
    situation: 'Deux élèves tapent « moins deux puissance quatre » sur leurs calculatrices : l’une affiche +16, l’autre −16 ! Qui a raison ? Les deux… car (−2)⁴ et −2⁴ ne sont pas le même calcul.',
    def: 'La puissance n-ième d’un entier relatif a, notée aⁿ, est le produit de n facteurs tous égaux à a. Le signe du résultat dépend de la parité de l’exposant : une base négative donne un résultat positif si n est pair, négatif si n est impair.',
    autrement: 'les signes moins s’éliminent deux par deux : s’il en reste un (exposant impair), le résultat est négatif.',
    concept: 'Dans (−2)⁴, la parenthèse indique que la base est −2 : (−2)(−2)(−2)(−2) = +16. Dans −2⁴, l’exposant ne porte que sur 2 : on calcule 2⁴ = 16, puis on applique le signe moins : −16. La parenthèse change donc le résultat ! Pour le signe : (−2)¹ = −2, (−2)² = +4, (−2)³ = −8, (−2)⁴ = +16… le signe alterne, et la règle se retient en comptant les paires de signes moins.',
    synthese: 'aⁿ = produit de n facteurs a ; base négative : exposant pair → positif, impair → négatif ; (−a)ⁿ et −aⁿ sont différents quand n est pair.',
    method: ['Repérer la base exacte : avec parenthèse, le signe − en fait partie ; sans parenthèse, non.', 'Calculer la puissance de la distance à zéro.', 'Donner le signe : pair → +, impair → − (pour une base négative).'],
    exemple: '(−3)² = +9 ; −3² = −9 ; (−1)⁷ = −1 ; (−5)³ = −125 ; (−10)⁴ = +10 000.',
    erreur: 'Confondre puissance et produit : (−2)⁴ n’est pas (−2) × 4 = −8 ! L’exposant compte les FACTEURS, il ne multiplie pas la base.',
    saistu: 'La légende de l’échiquier : un grain de riz sur la première case, puis le double à chaque case. Sur la 64ᵉ case, il faudrait 2⁶³ grains — environ 9 × 10¹⁸, plus de mille fois la récolte mondiale d’une année !',
    exos: ['Calcule : a) (−3)² ; b) (−3)³ ; d) (−1)⁵ ; e) (−10)³.',
      'Compare en calculant : a) (−4)² et −4² ; b) (−2)⁵ et −2⁵ ; d) (−1)⁸ et −1⁸ ; e) (−5)² et −5².',
      'Donne seulement le signe, sans calculer : a) (−7)¹² ; b) (−13)⁹ ; d) (−1)²⁰²⁶ ; e) −6⁴.'],
    corr: ['a) +9 ; b) −27 ; d) −1 ; e) −1 000.',
      'a) +16 et −16 ; b) −32 et −32 (égaux : exposant impair) ; d) +1 et −1 ; e) +25 et −25.',
      'a) + (pair) ; b) − (impair) ; d) + (pair) ; e) − (le signe reste dehors).'],
    fig: 'u2f4'
  },
  {
    t: 'Appliquer la priorité des opérations sans parenthèses', comp: 'Opération', theme: 'Priorité : × et ÷ avant + et −',
    goal: 'calculer une expression sans parenthèses en respectant la priorité des opérations',
    mat: 'Cartes d’opérations, ardoises, cahier',
    revQ: 'Calcule 7 × 8 et 56 ÷ 4.',
    revRA: '56 ; 14.',
    situation: 'Au marché, Lalaina achète 5 bananes à 300 Ar et 2 ananas à 2 000 Ar. Prix total : 5 × 300 + 2 × 2 000. Si on calculait de gauche à droite, on paierait un prix absurde ! Les multiplications passent d’abord.',
    def: 'Dans une expression sans parenthèses, la priorité des opérations impose d’effectuer d’abord les multiplications et les divisions, de gauche à droite, puis les additions et les soustractions, de gauche à droite.',
    autrement: '× et ÷ sont servis les premiers ; + et − attendent leur tour.',
    concept: 'Pour 5 + 3 × 4, la multiplication est prioritaire : 3 × 4 = 12, puis 5 + 12 = 17. Calculer de gauche à droite donnerait 8 × 4 = 32 : faux ! Quand plusieurs opérations de même priorité se suivent, on avance de gauche à droite : 20 ÷ 4 × 5 = 5 × 5 = 25 (et non 20 ÷ 20 = 1). Cette convention mondiale garantit que la même expression donne le même résultat à Antananarivo, à Paris ou à Tokyo.',
    synthese: 'sans parenthèses : d’abord × et ÷ (de gauche à droite), ensuite + et − (de gauche à droite).',
    method: ['Souligner les multiplications et divisions.', 'Les calculer de gauche à droite.', 'Terminer par les additions et soustractions, de gauche à droite.'],
    exemple: '18 − 2 × 5 = 18 − 10 = 8 ; 6 + 12 ÷ 3 = 6 + 4 = 10 ; 40 ÷ 5 − 3 = 8 − 3 = 5.',
    erreur: 'Calculer 18 − 2 × 5 de gauche à droite : 16 × 5 = 80. La soustraction a « doublé » la multiplication : résultat cinq fois trop grand ! Le bon calcul : 18 − 10 = 8.',
    saistu: 'Tape 5 + 3 × 4 sur une calculatrice scientifique : elle affiche 17. Sur certaines calculatrices simples de boutique : 32 ! Elles calculent au fil des touches, sans priorité. Vérifie toujours quelle calculatrice tu utilises.',
    exos: ['Calcule : a) 7 + 2 × 6 ; b) 30 − 4 × 5 ; d) 9 + 18 ÷ 6 ; e) 50 − 36 ÷ 9.',
      'Calcule : a) 8 × 3 − 2 × 5 ; b) 24 ÷ 6 + 4 × 7 ; d) 100 − 10 × 9 ; e) 45 ÷ 9 × 3.',
      'Lalaina achète 5 bananes à 300 Ar et 2 ananas à 2 000 Ar. a) Écris l’expression du prix total. b) Calcule-la. d) Quel serait le résultat (faux) de gauche à droite ? e) Elle paie avec 10 000 Ar : écris et calcule l’expression de la monnaie rendue.'],
    corr: ['a) 19 ; b) 10 ; d) 12 ; e) 46.',
      'a) 24 − 10 = 14 ; b) 4 + 28 = 32 ; d) 10 ; e) 5 × 3 = 15.',
      'a) 5 × 300 + 2 × 2 000 ; b) 1 500 + 4 000 = 5 500 Ar ; d) (5 × 300 + 2) × 2 000 = 3 004 000 Ar : absurde ! ; e) 10 000 − 5 × 300 − 2 × 2 000 = 4 500 Ar.'],
    fig: 'u2f5'
  },
  {
    t: 'Appliquer la priorité avec parenthèses et exposants', comp: 'Opération', theme: 'Ordre complet : parenthèses, exposants, × ÷, + −',
    goal: 'calculer une expression avec parenthèses et exposants en respectant l’ordre complet des priorités',
    mat: 'Pyramide des priorités affichée, cartes d’expressions, cahier',
    revQ: 'Calcule 5 + 3 × 4 puis 2³.',
    revRA: '17 ; 8.',
    situation: 'Deux équipes calculent (2 + 1)² × 2 − 5. L’équipe A trouve 13, l’équipe B trouve 1. Qui gagne ? Celle qui a suivi l’ordre complet : parenthèses, exposants, multiplication, soustraction.',
    def: 'La priorité complète des opérations ordonne les calculs ainsi : d’abord les parenthèses (de l’intérieur vers l’extérieur), puis les exposants, puis les multiplications et divisions de gauche à droite, enfin les additions et soustractions de gauche à droite.',
    autrement: 'parenthèses → exposants → × ÷ → + − : quatre étages, du plus urgent au moins urgent.',
    concept: 'Pour (2 + 1)² × 2 − 5 : parenthèses d’abord (2 + 1 = 3), puis exposant (3² = 9), puis multiplication (9 × 2 = 18), enfin soustraction (18 − 5 = 13). Avec des parenthèses imbriquées, on part de la plus intérieure : 2 × (10 − (3 + 1)) = 2 × (10 − 4) = 2 × 6 = 12. Attention au mélange exposant-parenthèse déjà vu : (−3)² = 9 mais −3² = −9.',
    synthese: 'ordre complet : parenthèses (de l’intérieur vers l’extérieur), exposants, × et ÷, puis + et − ; une seule étape par ligne pour éviter les erreurs.',
    method: ['Calculer le contenu des parenthèses, en partant de la plus intérieure.', 'Évaluer les exposants.', 'Finir par × ÷ puis + −, chaque groupe de gauche à droite.'],
    exemple: '(5 − 2)³ + 4 = 27 + 4 = 31 ; 100 ÷ (3 + 2)² = 100 ÷ 25 = 4 ; 3 × (8 − (2 + 4)) = 3 × 2 = 6.',
    erreur: 'Dans 100 ÷ (3 + 2)², diviser avant d’élever au carré : 100 ÷ 5 = 20, puis 20² = 400. Faux ! L’exposant passe avant la division : 5² = 25, puis 100 ÷ 25 = 4.',
    saistu: 'Les programmeurs informatiques vivent avec les priorités : dans tous les langages de programmation, 2 + 3 * 4 vaut 14, jamais 20. Une parenthèse oubliée dans un programme de banque pourrait fausser des millions de calculs !',
    exos: ['Calcule : a) (4 + 2)² ; b) 4 + 2² ; d) (10 − 7)³ ; e) 10 − 7³ … attention au signe !',
      'Calcule : a) (3 + 1)² × 2 ; b) 50 − (2 + 3)² ; d) 72 ÷ (11 − 2) ; e) 5 × (8 − (4 + 2)).',
      'Place des parenthèses pour que l’égalité soit vraie : a) 2 + 3 × 5 = 25 ; b) 20 − 8 ÷ 4 = 3 ; d) 4 × 3 + 2² = 100 … impossible ? propose 4 × (3 + 2)² ÷ 1 ; e) 18 ÷ 3 + 3 = 3.'],
    corr: ['a) 36 ; b) 8 ; d) 27 ; e) 10 − 343 = −333.',
      'a) 16 × 2 = 32 ; b) 50 − 25 = 25 ; d) 72 ÷ 9 = 8 ; e) 5 × 2 = 10.',
      'a) (2 + 3) × 5 = 25 ; b) (20 − 8) ÷ 4 = 3 ; d) 4 × (3 + 2)² = 4 × 25 = 100 ✓ ; e) 18 ÷ (3 + 3) = 3.'],
    fig: 'u2f6'
  },
  {
    t: 'Calculer mentalement des multiplications', comp: 'Opération', theme: 'Stratégies de calcul mental : décomposition, compensation',
    goal: 'multiplier mentalement en décomposant les facteurs et en utilisant les faits numériques',
    mat: 'Cartes de calcul rapide, chronomètre, ardoises',
    revQ: 'Récite la table de 25 : 25, 50, 75, …',
    revRA: '25, 50, 75, 100, 125, 150, 175, 200.',
    situation: 'Au marché d’Anosibe, la marchande annonce « 16 sachets à 25 Ar » et donne le total avant même que tu sortes ton cahier : 400 Ar ! Son secret : 25 × 16 = 25 × 4 × 4 = 100 × 4.',
    def: 'Le calcul mental d’un produit s’appuie sur la décomposition des facteurs et sur les propriétés de la multiplication : commutativité (on peut échanger les facteurs) et associativité (on peut regrouper les facteurs comme on veut).',
    autrement: 'on casse les nombres en morceaux faciles, on regroupe les paires sympathiques (2 × 5, 4 × 25, 8 × 125), et le calcul devient un jeu.',
    concept: 'Trois stratégies puissantes. Décomposer : 25 × 16 = 25 × 4 × 4 = 100 × 4 = 400. Distribuer : 7 × 98 = 7 × 100 − 7 × 2 = 700 − 14 = 686. Compenser : 5 × 36 = 10 × 18 = 180 (on double l’un, on divise l’autre par 2). Les paires à connaître par cœur : 2 × 5 = 10, 4 × 25 = 100, 8 × 125 = 1 000. Dès qu’on les repère dans un produit, le calcul s’effondre en calcul de tête.',
    synthese: 'décomposer, distribuer ou compenser ; mémoriser les paires 2 × 5, 4 × 25, 8 × 125 qui fabriquent des 10, 100, 1 000.',
    method: ['Chercher une paire sympathique cachée (4 × 25, 8 × 125, 2 × 5).', 'Sinon, décomposer un facteur (98 = 100 − 2 ; 16 = 4 × 4).', 'Regrouper, calculer les morceaux, rassembler.'],
    exemple: '4 × 17 × 25 = (4 × 25) × 17 = 100 × 17 = 1 700 ; 6 × 99 = 600 − 6 = 594 ; 5 × 48 = 10 × 24 = 240.',
    erreur: 'Dans 7 × 98 = 7 × 100 − 7 × 2, oublier de soustraire le morceau ajouté et répondre 700. On a compté 2 unités de trop, 7 fois : il faut retirer 14 !',
    saistu: 'Les maîtres du calcul mental, comme l’Indienne Shakuntala Devi, multipliaient de tête des nombres de 13 chiffres ! Son secret n’était pas un don magique : des décompositions ultra-entraînées, exactement celles de cette leçon.',
    exos: ['Calcule de tête : a) 25 × 8 ; b) 125 × 8 ; d) 4 × 35 × 25 ; e) 2 × 17 × 5.',
      'Calcule en distribuant : a) 6 × 102 ; b) 9 × 99 ; d) 7 × 1 001 ; e) 8 × 95.',
      'Calcule en compensant (double et moitié) : a) 5 × 86 ; b) 50 × 14 ; d) 5 × 64 ; e) 15 × 12.'],
    corr: ['a) 200 ; b) 1 000 ; d) (4 × 25) × 35 = 3 500 ; e) (2 × 5) × 17 = 170.',
      'a) 612 ; b) 900 − 9 = 891 ; d) 7 007 ; e) 800 − 40 = 760.',
      'a) 10 × 43 = 430 ; b) 100 × 7 = 700 ; d) 10 × 32 = 320 ; e) 30 × 6 = 180.'],
    fig: 'u2f7'
  },
  {
    t: 'Calculer mentalement avec 10, 100 et 1 000', comp: 'Opération', theme: 'Multiplier et diviser par 10, 100, 1 000',
    goal: 'multiplier et diviser mentalement un décimal par 10, 100 ou 1 000 en déplaçant la virgule',
    mat: 'Tableau de numération, étiquettes de virgule mobile, ardoises',
    revQ: 'Que vaut 10² ? Et 10³ ?',
    revRA: '100 ; 1 000.',
    situation: 'Un carnet coûte 3 450 Ar. Combien coûtent 100 carnets pour toute l’école ? Pas besoin de poser l’opération : 3 450 × 100 = 345 000. La virgule glisse, les zéros suivent !',
    def: 'Multiplier un nombre décimal par 10, 100 ou 1 000 déplace la virgule de 1, 2 ou 3 rangs vers la droite ; le diviser par 10, 100 ou 1 000 déplace la virgule de 1, 2 ou 3 rangs vers la gauche. On complète par des zéros si les rangs manquent.',
    autrement: '× : la virgule file à droite ; ÷ : elle recule à gauche ; un rang par zéro.',
    concept: 'Multiplier par 100, c’est rendre chaque chiffre 100 fois plus fort : il monte de deux rangs dans le tableau de numération, ce qui revient à faire glisser la virgule de deux rangs vers la droite : 3,45 × 100 = 345. Pour la division, chaque chiffre s’affaiblit : 27 ÷ 1 000 = 0,027 — on complète avec des zéros, dont le zéro d’appui avant la virgule. Ce mécanisme est la base des conversions d’unités : km en m, Ar en milliers d’Ar, L en mL.',
    synthese: '× 10ⁿ : virgule n rangs à droite ; ÷ 10ⁿ : virgule n rangs à gauche ; on complète avec des zéros.',
    method: ['Compter les zéros du multiplicateur ou diviseur : c’est le nombre de rangs.', 'Glisser la virgule : droite pour ×, gauche pour ÷.', 'Compléter les rangs vides par des zéros.'],
    exemple: '0,7 × 1 000 = 700 ; 45,2 ÷ 100 = 0,452 ; 5 × 10 = 50 ; 3 ÷ 1 000 = 0,003.',
    erreur: 'Écrire 3,45 × 10 = 3,450 en « ajoutant un zéro à la fin » : 3,450 = 3,45, rien n’a changé ! Le zéro s’ajoute à un entier (34 × 10 = 340), mais pour un décimal, c’est la virgule qui bouge : 3,45 × 10 = 34,5.',
    saistu: 'Notre système décimal permet ce tour de magie, mais pas tous les systèmes ! Les Romains, avec leurs chiffres XVII ou MMXXVI, ne pouvaient pas « glisser une virgule » : multiplier par 10 était pour eux un vrai calcul. Merci la numération de position !',
    exos: ['Calcule : a) 7,3 × 10 ; b) 0,48 × 100 ; d) 5,06 × 1 000 ; e) 0,009 × 100.',
      'Calcule : a) 630 ÷ 10 ; b) 52 ÷ 100 ; d) 8 ÷ 1 000 ; e) 41,7 ÷ 10.',
      'a) Un stylo coûte 850 Ar : prix de 100 stylos ? b) 10 kg de riz coûtent 32 000 Ar : prix d’un kg ? d) Convertis 3,2 km en m. e) Convertis 450 mL en L.'],
    corr: ['a) 73 ; b) 48 ; d) 5 060 ; e) 0,9.',
      'a) 63 ; b) 0,52 ; d) 0,008 ; e) 4,17.',
      'a) 85 000 Ar ; b) 3 200 Ar ; d) 3,2 × 1 000 = 3 200 m ; e) 450 ÷ 1 000 = 0,45 L.'],
    fig: 'u2f8'
  },
  {
    t: 'Additionner et soustraire fractions et décimaux', comp: 'Opération', theme: 'Somme et différence de rationnels : dénominateur commun',
    goal: 'additionner et soustraire des fractions et des nombres décimaux en passant par un dénominateur commun',
    mat: 'Bandes de fractions, papier quadrillé, cahier',
    revQ: 'Donne trois fractions équivalentes à 1/2.',
    revRA: 'Par exemple 2/4, 3/6, 5/10.',
    situation: 'Fitia a mangé 1/2 du mofo gasy, Rivo en a mangé 1/3. En ont-ils laissé ? On ne peut pas additionner des moitiés et des tiers directement : il faut d’abord les convertir en sixièmes !',
    def: 'Pour additionner ou soustraire deux fractions, on les réduit au même dénominateur (un multiple commun des dénominateurs), puis on additionne ou soustrait les numérateurs, le dénominateur restant inchangé.',
    autrement: 'même dénominateur = mêmes parts : on peut alors simplement compter les parts.',
    concept: 'Pour 1/2 + 1/3 : les moitiés et les tiers sont des parts de tailles différentes, impossibles à compter ensemble. Le dénominateur commun 6 (multiple de 2 et de 3) les convertit en parts identiques : 1/2 = 3/6 et 1/3 = 2/6, d’où 3/6 + 2/6 = 5/6. Pour les décimaux, la technique est l’alignement des virgules — car aligner les virgules, c’est précisément donner le même dénominateur (10, 100…) aux parties décimales : 2,7 + 0,85 = 2,70 + 0,85 = 3,55.',
    synthese: 'fractions : dénominateur commun, puis somme ou différence des numérateurs ; décimaux : virgules alignées, zéros ajoutés si besoin.',
    method: ['Chercher un multiple commun des dénominateurs (le plus petit si possible).', 'Convertir chaque fraction, puis opérer sur les numérateurs.', 'Simplifier le résultat si possible.'],
    exemple: '1/2 + 1/3 = 3/6 + 2/6 = 5/6 ; 3/4 − 2/3 = 9/12 − 8/12 = 1/12 ; 5,6 − 2,35 = 5,60 − 2,35 = 3,25.',
    erreur: 'Additionner numérateurs ET dénominateurs : 1/2 + 1/3 = 2/5 ?! Mais 2/5 est plus petit que 1/2 : une somme ne peut pas être plus petite que l’un de ses morceaux ! Le dénominateur commun est obligatoire.',
    saistu: 'Les anciens Égyptiens n’écrivaient que des fractions de numérateur 1 ! Pour dire 5/6, ils écrivaient 1/2 + 1/3. Le papyrus de Rhind, vieux de 3 600 ans, contient des tables entières de ces décompositions.',
    exos: ['Calcule et simplifie : a) 1/4 + 2/4 ; b) 1/2 + 1/5 ; d) 2/3 + 1/6 ; e) 3/10 + 2/5.',
      'Calcule : a) 7/8 − 3/8 ; b) 5/6 − 1/3 ; d) 3/4 − 1/6 ; e) 1 − 3/7.',
      'Calcule : a) 4,5 + 3,28 ; b) 12,7 − 5,43 ; d) 0,9 + 0,35 + 1,05 ; e) Fitia mange 1/2 du mofo gasy, Rivo 1/3 : quelle part reste-t-il ?'],
    corr: ['a) 3/4 ; b) 7/10 ; d) 5/6 ; e) 3/10 + 4/10 = 7/10.',
      'a) 4/8 = 1/2 ; b) 3/6 = 1/2 ; d) 9/12 − 2/12 = 7/12 ; e) 4/7.',
      'a) 7,78 ; b) 7,27 ; d) 2,3 ; e) 1 − 5/6 = 1/6 du gâteau.'],
    fig: 'u2f9'
  },
  {
    t: 'Multiplier une fraction par une fraction', comp: 'Opération', theme: 'Produit de fractions : numérateurs et dénominateurs entre eux',
    goal: 'multiplier deux fractions et interpréter le produit comme une fraction de fraction',
    mat: 'Papier quadrillé, crayons de deux couleurs, cahier',
    revQ: 'Calcule 2/6 + 3/6 et simplifie 6/12.',
    revRA: '5/6 ; 1/2.',
    situation: 'Maman laisse 3/4 du gâteau de manioc. Noro en prend les 2/3. Quelle part du gâteau entier a-t-elle mangée ? « Les 2/3 de 3/4 »… c’est une multiplication de fractions !',
    def: 'Le produit de deux fractions est la fraction dont le numérateur est le produit des numérateurs et le dénominateur le produit des dénominateurs : a/b × c/d = (a × c)/(b × d). Prendre une fraction d’une quantité, c’est multiplier.',
    autrement: 'haut × haut, bas × bas — et « de » se traduit par × : les 2/3 DE 3/4, c’est 2/3 × 3/4.',
    concept: 'Le quadrillage le montre : on partage un rectangle en 4 colonnes et on en colorie 3 (les 3/4), puis on partage en 3 lignes et on garde 2 étages (les 2/3). La zone deux fois coloriée compte 2 × 3 = 6 cases sur 3 × 4 = 12 : 2/3 × 3/4 = 6/12 = 1/2. Contrairement à l’addition, AUCUN dénominateur commun n’est nécessaire ! Simplifier avant de multiplier allège les calculs : 2/3 × 3/4 = 2/4 = 1/2 en barrant les 3.',
    synthese: 'a/b × c/d = (a × c)/(b × d), sans dénominateur commun ; simplifier avant de multiplier rend le calcul plus léger.',
    method: ['Multiplier les numérateurs entre eux.', 'Multiplier les dénominateurs entre eux.', 'Simplifier — ou mieux : simplifier en croix AVANT de multiplier.'],
    exemple: '2/3 × 3/4 = 6/12 = 1/2 ; 5/6 × 2/5 = 10/30 = 1/3 ; 3/7 × 7/3 = 1.',
    erreur: 'Chercher un dénominateur commun pour multiplier : 1/2 × 1/3 = 3/6 × 2/6 = 6/36 = 1/6… le résultat est juste, mais le détour est inutile ! Directement : 1/2 × 1/3 = 1/6.',
    saistu: 'Multiplier peut rapetisser ! 1/2 × 1/3 = 1/6 est plus petit que chacun des facteurs. Multiplier par une fraction inférieure à 1, c’est prendre une partie : voilà pourquoi « la moitié du tiers » est toute petite.',
    exos: ['Calcule et simplifie : a) 1/2 × 1/3 ; b) 2/5 × 3/4 ; d) 5/6 × 3/5 ; e) 7/8 × 4/7.',
      'Calcule : a) 2/3 × 6 ; b) 3/4 de 20 ; d) 5/2 × 4/15 ; e) (1/2)².',
      'Noro prend les 2/3 des 3/4 restants du gâteau. a) Écris le calcul. b) Effectue-le. d) Quelle part du gâteau entier reste-t-il après son passage ? e) Vérifie que les trois parts (mangée avant, par Noro, restante) totalisent 1.'],
    corr: ['a) 1/6 ; b) 6/20 = 3/10 ; d) 15/30 = 1/2 ; e) 28/56 = 1/2.',
      'a) 12/3 = 4 ; b) 60/4 = 15 ; d) 20/30 = 2/3 ; e) 1/4.',
      'a) 2/3 × 3/4 ; b) 1/2 ; d) 3/4 − 1/2 = 1/4 ; e) 1/4 + 1/2 + 1/4 = 1 ✓.'],
    fig: 'u2f10'
  },
  {
    t: 'Diviser une fraction par une fraction', comp: 'Opération', theme: 'Quotient de fractions : multiplier par l’inverse',
    goal: 'diviser deux fractions en multipliant par l’inverse du diviseur',
    mat: 'Bandes de fractions, cartes « inverse », cahier',
    revQ: 'Calcule 2/3 × 3/2 et 4/7 × 7/4.',
    revRA: '1 ; 1 — chaque produit d’une fraction par son inverse vaut 1.',
    situation: 'Une bouteille contient 3/4 de litre de jus de corossol. Combien de verres de 1/8 de litre peut-on servir ? C’est la division 3/4 ÷ 1/8… et la réponse est 6 verres !',
    def: 'L’inverse d’une fraction non nulle a/b est la fraction b/a : leur produit vaut 1. Diviser par une fraction, c’est multiplier par son inverse : a/b ÷ c/d = a/b × d/c.',
    autrement: 'on retourne la DEUXIÈME fraction et le ÷ devient × — c’est tout.',
    concept: 'Pourquoi retourner ? Diviser par 1/8, c’est chercher combien de huitièmes tiennent dans la quantité : dans 1 litre, il en tient 8 — diviser par 1/8 revient donc à multiplier par 8. En général : a/b ÷ c/d = a/b × d/c. Pour 3/4 ÷ 1/8 : 3/4 × 8/1 = 24/4 = 6. Et la vérification habituelle fonctionne : 6 × 1/8 = 6/8 = 3/4 ✓. Diviser par une fraction plus petite que 1 AGRANDIT le résultat — logique : des parts plus petites, il en faut davantage !',
    synthese: 'a/b ÷ c/d = a/b × d/c : seule la deuxième fraction se retourne ; on vérifie par multiplication.',
    method: ['Garder la première fraction telle quelle.', 'Retourner la deuxième fraction (son inverse) et remplacer ÷ par ×.', 'Multiplier, simplifier, vérifier.'],
    exemple: '3/4 ÷ 1/8 = 3/4 × 8 = 6 ; 2/5 ÷ 3/7 = 2/5 × 7/3 = 14/15 ; 5 ÷ 1/2 = 10.',
    erreur: 'Retourner la PREMIÈRE fraction : 3/4 ÷ 1/8 = 4/3 × 1/8 = 4/24 = 1/6. Faux ! Seul le diviseur se retourne. Moyen mnémotechnique : on ne touche jamais à celui qui est divisé.',
    saistu: 'Combien font 5 ÷ 1/2 ? Beaucoup répondent 2,5… mais c’est 10 ! « Combien de demi-litres dans 5 litres ? » : dix, évidemment. Diviser par un demi, c’est doubler.',
    exos: ['Calcule : a) 1/2 ÷ 1/4 ; b) 3/5 ÷ 2/3 ; d) 7/8 ÷ 7/8 ; e) 4/9 ÷ 2/3.',
      'Calcule : a) 6 ÷ 2/3 ; b) 3/4 ÷ 3 ; d) 10 ÷ 1/5 ; e) (2/3 ÷ 4/9) × 1/3.',
      'Une bouteille contient 3/4 L de jus. a) Combien de verres de 1/8 L peut-on servir ? b) Et avec des verres de 3/16 L ? d) Vérifie la réponse b par une multiplication. e) Quel volume reste-t-il si on sert 5 verres de 1/8 L ?'],
    corr: ['a) 2 ; b) 9/10 ; d) 1 ; e) 12/18 = 2/3.',
      'a) 9 ; b) 1/4 ; d) 50 ; e) (2/3 × 9/4) × 1/3 = 3/2 × 1/3 = 1/2.',
      'a) 3/4 × 8 = 6 verres ; b) 3/4 × 16/3 = 4 verres ; d) 4 × 3/16 = 12/16 = 3/4 ✓ ; e) 3/4 − 5/8 = 1/8 L.'],
    fig: 'u2f11'
  },
  {
    t: 'Estimer des produits et des quotients décimaux', comp: 'Opération', theme: 'Estimation : ordre de grandeur d’un produit, d’un quotient',
    goal: 'estimer un produit ou un quotient de décimaux en arrondissant les termes à des nombres simples',
    mat: 'Étiquettes de prix, cartes de décimaux, ardoises',
    revQ: 'Arrondis 4,9 et 2,1 à l’unité.',
    revRA: '5 ; 2.',
    situation: 'À l’épicerie, 4,9 kg de sucre à 2 100 Ar le kg. La caissière annonce 102 900 Ar. Vrai ou erreur de machine ? Estimation éclair : 5 × 2 000 = 10 000… l’annonce est dix fois trop grande !',
    def: 'Estimer un produit ou un quotient, c’est remplacer chaque terme par un nombre simple et proche (un arrondi), puis calculer mentalement pour obtenir un ordre de grandeur du résultat exact.',
    autrement: 'un calcul approché, fait en deux secondes, qui dit si le résultat exact est « dans les clous ».',
    concept: 'Pour 4,9 × 2,1 : on arrondit 4,9 → 5 et 2,1 → 2, d’où l’estimation 5 × 2 = 10 ; le résultat exact 10,29 est tout proche. Pour un quotient : 81,7 ÷ 3,9 ≈ 80 ÷ 4 = 20 (exact : 20,95). L’estimation ne remplace pas le calcul exact : elle le CONTRÔLE. Elle détecte les virgules mal placées, les zéros en trop, les touches mal tapées — les erreurs les plus fréquentes et les plus coûteuses.',
    synthese: 'arrondir chaque terme à un nombre simple, calculer de tête, comparer avec le résultat exact : tout écart énorme signale une erreur.',
    method: ['Arrondir chaque terme à un nombre d’un ou deux chiffres significatifs.', 'Calculer mentalement avec ces arrondis.', 'Comparer l’ordre de grandeur obtenu au résultat exact ou annoncé.'],
    exemple: '6,2 × 7,8 ≈ 6 × 8 = 48 (exact : 48,36) ; 119 ÷ 2,9 ≈ 120 ÷ 3 = 40 (exact : 41,03…).',
    erreur: 'Arrondir trop brutalement : estimer 4,9 × 2,1 par 10 × 2 = 20 double l’erreur ! On arrondit au nombre simple LE PLUS PROCHE : 4,9 → 5, pas 10.',
    saistu: 'En 1999, la sonde spatiale Mars Climate Orbiter s’est écrasée : une équipe calculait en unités anglaises, l’autre en unités métriques. Une simple estimation d’ordre de grandeur aurait révélé l’incohérence — 327 millions de dollars perdus faute d’un calcul de contrôle !',
    exos: ['Estime puis calcule : a) 3,9 × 5,1 ; b) 7,8 × 9,9 ; d) 2,02 × 4,95 ; e) 6,1 × 1,9.',
      'Estime les quotients : a) 39,6 ÷ 4,1 ; b) 161 ÷ 7,9 ; d) 597 ÷ 2,95 ; e) 48,8 ÷ 6,9.',
      'Contrôle ces annonces par une estimation et dis si elles sont plausibles : a) 5,1 × 7,9 = 40,29 ; b) 3,2 × 9,8 = 313,6 ; d) 83,6 ÷ 3,8 = 22 ; e) 41,8 ÷ 2,1 = 1,99.'],
    corr: ['a) ≈ 20 ; exact 19,89 ; b) ≈ 80 ; exact 77,22 ; d) ≈ 10 ; exact 9,999 ; e) ≈ 12 ; exact 11,59.',
      'a) ≈ 40 ÷ 4 = 10 ; b) ≈ 160 ÷ 8 = 20 ; d) ≈ 600 ÷ 3 = 200 ; e) ≈ 49 ÷ 7 = 7.',
      'a) ≈ 5 × 8 = 40 : plausible ✓ ; b) ≈ 3 × 10 = 30 : 313,6 est dix fois trop grand ✗ ; d) ≈ 84 ÷ 4 = 21 : plausible ✓ ; e) ≈ 42 ÷ 2 = 21 : 1,99 est dix fois trop petit ✗.'],
    fig: 'u2f12'
  },
  {
    t: 'Arrondir des résultats', comp: 'Opération', theme: 'Techniques d’arrondissement : unité, dixième, centième',
    goal: 'arrondir un nombre décimal à un rang donné en appliquant la règle du chiffre suivant',
    mat: 'Droites graduées, cartes de décimaux, cahier',
    revQ: 'Entre quels entiers se trouve 7,3 ? Duquel est-il le plus proche ?',
    revRA: 'Entre 7 et 8 ; plus proche de 7.',
    situation: 'La calculatrice affiche 8,333333… pour un partage de 25 000 Ar entre 3 personnes (en milliers). Personne ne paie des millièmes d’ariary ! On arrondit : 8 333 Ar chacun, et le compte est (presque) bon.',
    def: 'Arrondir un nombre à un rang donné, c’est le remplacer par le nombre le plus proche n’ayant plus de chiffres au-delà de ce rang. Règle : on regarde le chiffre juste après le rang choisi ; s’il vaut 5 ou plus, on augmente le dernier chiffre conservé de 1, sinon on le garde tel quel.',
    autrement: 'on coupe le nombre au rang voulu, et le premier chiffre coupé décide : 0-1-2-3-4 → on garde ; 5-6-7-8-9 → on monte.',
    concept: 'Sur la droite graduée, 7,3 est entre 7 et 8, du côté de 7 : arrondi à l’unité, 7,3 → 7. Le chiffre décisif est celui qui suit le rang d’arrondi : pour arrondir 12,468 au dixième, on regarde le centième (6 ≥ 5) : 12,468 → 12,5. Cas piège de la retenue en cascade : 3,97 arrondi au dixième → 4,0 (le 9 monte et déborde). L’arrondi doit toujours être annoncé : écrire 8,33 ≈ 25/3 est honnête ; écrire 8,33 = 25/3 est faux.',
    synthese: 'repérer le rang demandé, regarder le chiffre suivant : ≥ 5 on monte, sinon on garde ; utiliser ≈ et non = pour un résultat arrondi.',
    method: ['Repérer le rang d’arrondi demandé (unité, dixième, centième…).', 'Regarder le chiffre immédiatement à droite de ce rang.', 'S’il vaut 5 ou plus, augmenter de 1 le dernier chiffre gardé ; sinon tronquer ; écrire le résultat avec ≈.'],
    exemple: '7,3 ≈ 7 (unité) ; 12,468 ≈ 12,5 (dixième) ; 0,8449 ≈ 0,84 (centième) ; 3,97 ≈ 4,0 (dixième).',
    erreur: 'Arrondir en chaîne : 2,447 → 2,45 → 2,5 ?! Faux : au dixième, le chiffre décisif de 2,447 est le 4 des centièmes, donc 2,447 ≈ 2,4. On arrondit UNE fois, depuis le nombre d’origine.',
    saistu: 'π = 3,14159265… a des décimales infinies et sans motif. Les ingénieurs de la NASA n’en utilisent que 15 pour piloter leurs sondes : avec 40 décimales, on calculerait la circonférence de l’univers visible à un atome près !',
    exos: ['Arrondis à l’unité : a) 6,4 ; b) 6,5 ; d) 19,51 ; e) 99,9.',
      'Arrondis au dixième : a) 3,14159 ; b) 0,05 ; d) 7,96 ; e) 12,449.',
      'Arrondis au centième : a) 8,333… ; b) 2,71828 ; d) 0,996 ; e) 25 000 ÷ 3 = 8 333,33… : donne le partage arrondi à l’ariary, puis explique pourquoi 3 × 8 333 ne redonne pas exactement 25 000.'],
    corr: ['a) 6 ; b) 7 ; d) 20 ; e) 100.',
      'a) 3,1 ; b) 0,1 ; d) 8,0 ; e) 12,4.',
      'a) 8,33 ; b) 2,72 ; d) 1,00 ; e) 8 333 Ar chacun ; 3 × 8 333 = 24 999 : l’arrondi fait perdre 1 Ar, c’est le prix de la simplicité !'],
    fig: 'u2f13'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Opération',
  rag: 'démontrer une compréhension des opérations sur les nombres rationnels et les appliquer dans des calculs réfléchis, mentaux et estimatifs.',
  valeurs: 'responsabilité et autonomie',
  sessions: S,
  revision: {
    table: [
      ['Produit de relatifs', 'Distances à zéro multipliées ; même signe → +, contraires → −', 'Calculer tout produit de relatifs'],
      ['Quotient de relatifs', 'Même règle des signes ; vérification par multiplication', 'Diviser et contrôler le résultat'],
      ['Puissances d’un relatif', 'Exposant pair → +, impair → − ; (−a)ⁿ ≠ −aⁿ', 'Calculer avec les parenthèses au bon endroit'],
      ['Priorités', 'Parenthèses, exposants, × ÷, + −', 'Calculer toute expression dans le bon ordre'],
      ['Calcul mental', 'Décomposer, distribuer, compenser ; virgule qui glisse', 'Multiplier et diviser de tête'],
      ['Fractions et estimation', '± : dénominateur commun ; × : haut×haut ; ÷ : × l’inverse ; arrondir', 'Opérer sur les rationnels et contrôler']
    ],
    questions: [
      'Calcule (−7) × (+6) et (−48) ÷ (−8).',
      'Compare (−3)⁴ et −3⁴.',
      'Calcule 5 + 2 × (7 − 3)².',
      'Calcule 2/5 + 1/3, puis 3/4 × 8/9, puis 1/2 ÷ 3/4.',
      'Estime 7,9 × 5,2, puis arrondis 14,086 au centième.'
    ],
    answers: [
      '−42 ; +6.',
      '(−3)⁴ = +81 ; −3⁴ = −81 : opposés.',
      '5 + 2 × 16 = 5 + 32 = 37.',
      '6/15 + 5/15 = 11/15 ; 24/36 = 2/3 ; 1/2 × 4/3 = 2/3.',
      '≈ 8 × 5 = 40 (exact 41,08) ; 14,09.'
    ]
  },
  exam: {
    exos: [
      'Calcule : a) (−9) × (+7) ; b) (−12) × (−8) ; d) (+56) ÷ (−8) ; e) (−121) ÷ (−11).',
      'a) Calcule (−2)⁵ et (−2)⁶. b) Compare (−5)² et −5². d) Trouve le facteur manquant : … × (−7) = +63. e) Donne le signe de (−1)²⁰²⁷ sans calculer.',
      'Calcule en respectant les priorités : a) 8 + 4 × 6 ; b) (8 + 4) × 6 ; d) 50 − 2 × (3 + 2)² ; e) 36 ÷ (2 + 4) + 3².',
      'Calcule : a) 2/3 + 1/4 ; b) 5/6 − 3/8 ; d) 4/5 × 15/8 ; e) 2/3 ÷ 5/6.',
      'Au marché, 3,9 kg de haricots à 5 100 Ar le kg. a) Estime le prix total. b) Calcule le prix exact. d) Arrondis-le à la centaine d’ariary. e) La marchande annonce 198 900 Ar : utilise ton estimation pour montrer que c’est impossible.'
    ],
    corr: [
      'a) −63 ; b) +96 ; d) −7 ; e) +11. Un point par réponse.',
      'a) −32 et +64 ; b) +25 et −25 : opposés ; d) −9 ; e) négatif (exposant impair). Un point par item.',
      'a) 32 ; b) 72 ; d) 50 − 50 = 0 ; e) 6 + 9 = 15. Un point par item.',
      'a) 11/12 ; b) 20/24 − 9/24 = 11/24 ; d) 60/40 = 3/2 ; e) 2/3 × 6/5 = 12/15 = 4/5. Un point par item.',
      'a) ≈ 4 × 5 000 = 20 000 Ar ; b) 19 890 Ar ; d) 19 900 Ar ; e) 198 900 Ar est dix fois l’ordre de grandeur estimé (20 000) : virgule mal placée ! Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
