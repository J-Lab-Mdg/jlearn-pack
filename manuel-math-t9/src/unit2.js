// UNITÉ 2 — OPÉRATION (PE T9) : 10 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — estimation
figs.u2f1 = (() => { const { s, y } = head('Estimer avant de calculer', ['Un calcul approché en deux secondes contrôle le calcul exact.']);
  const top = y + 25;
  let b = box(100, top, 380, 110, '', '#E3F2FD', '#1565C0', 22) + box(540, top, 380, 110, '', '#E8F5E9', GREEN, 22);
  b += txt(290, top + 45, 'calcul exact demandé', 20, '#1565C0', 'bold', 'middle') + txt(290, top + 83, '19,8 × 5,1 = ?', 24, '#1565C0', 'bold', 'middle');
  b += txt(730, top + 45, 'estimation immédiate', 20, GREEN, 'bold', 'middle') + txt(730, top + 83, '20 × 5 = 100', 24, GREEN, 'bold', 'middle');
  b += txt(500, top + 160, 'résultat exact : 100,98 — proche de 100 : le calcul est plausible', 21, OCRE, 'bold', 'middle');
  b += txt(500, top + 196, 'si on avait trouvé 1 009,8 : virgule mal placée, à refaire !', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 230, s + b); })();
// S2 — addition/soustraction de rationnels
figs.u2f2 = (() => { const { s, y } = head('Additionner des rationnels', ['Même dénominateur d’abord ; le signe se gère comme chez les relatifs.']);
  const top = y + 25;
  const data = [['Étape', 'Calcul de −3/4 + 5/6'], ['dénominateur commun 12', '−9/12 + 10/12'], ['compter les douzièmes', '(−9 + 10)/12'], ['résultat', '1/12']];
  let b = tableEl(150, top, [340, 360], 58, data);
  b += txt(500, top + 4 * 58 + 45, 'le dénominateur commun transforme les parts en parts identiques', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();
// S3 — produit/quotient de rationnels
figs.u2f3 = (() => { const { s, y } = head('Multiplier et diviser des rationnels', ['Produit : haut × haut, bas × bas ; quotient : on multiplie par l’inverse.']);
  const top = y + 25;
  let b = box(90, top, 400, 150, '', '#E8F5E9', GREEN, 22) + box(540, top, 400, 150, '', '#FDE7EF', PINK2, 22);
  b += txt(290, top + 42, 'PRODUIT', 21, GREEN, 'bold', 'middle');
  b += txt(290, top + 85, '(−2/3) × (5/7) = −10/21', 23, GREEN, 'bold', 'middle');
  b += txt(290, top + 125, 'signes contraires → négatif', 19, '#555', 'normal', 'middle');
  b += txt(740, top + 42, 'QUOTIENT', 21, PINK2, 'bold', 'middle');
  b += txt(740, top + 85, '(−2/3) ÷ (5/7) = −2/3 × 7/5', 22, PINK2, 'bold', 'middle');
  b += txt(740, top + 125, '= −14/15 : on retourne le diviseur', 19, '#555', 'normal', 'middle');
  b += txt(500, top + 205, 'règle des signes identique à celle des entiers relatifs', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 240, s + b); })();
// S4 — priorités
figs.u2f4 = (() => { const { s, y } = head('La pyramide des priorités', ['Parenthèses, puis exposants, puis × et ÷, enfin + et −.']);
  const top = y + 20; const cx = 360;
  const levels = [['1. PARENTHÈSES', PINK2, 300], ['2. EXPOSANTS', OCRE, 420], ['3. × et ÷', '#1565C0', 540], ['4. + et −', GREEN, 660]];
  let b = '';
  levels.forEach(([lab, c, w], i) => {
    const yy = top + i * 72;
    b += `<rect x="${cx - w / 2}" y="${yy}" width="${w}" height="56" fill="${c}" opacity="0.15" stroke="${c}" stroke-width="2.5" rx="10"/>`;
    b += txt(cx, yy + 37, lab, 22, c, 'bold', 'middle');
  });
  b += txt(790, top + 60, 'avec 1/2 + 1/2 × (3/4)²', 21, '#333', 'bold', 'middle');
  b += txt(790, top + 100, '(3/4)² = 9/16', 20, OCRE, 'normal', 'middle');
  b += txt(790, top + 140, '1/2 × 9/16 = 9/32', 20, '#1565C0', 'normal', 'middle');
  b += txt(790, top + 180, '1/2 + 9/32 = 25/32', 20, GREEN, 'normal', 'middle');
  return svg(1000, top + 4 * 72 + 40, s + b); })();
// S5 — propriété fondamentale des proportions
figs.u2f5 = (() => { const { s, y } = head('La propriété fondamentale des proportions', ['a/b = c/d exactement quand a × d = b × c : les produits en croix.']);
  const top = y + 35;
  let b = txt(260, top + 60, '3/5 = 12/20 ?', 26, '#1565C0', 'bold', 'middle');
  b += seg(430, top + 25, 620, top + 95, PINK2, 2.5) + seg(430, top + 95, 620, top + 25, GREEN, 2.5);
  b += txt(450, top + 15, '3', 24, '#333', 'bold', 'middle') + txt(450, top + 125, '5', 24, '#333', 'bold', 'middle');
  b += txt(600, top + 15, '12', 24, '#333', 'bold', 'middle') + txt(600, top + 125, '20', 24, '#333', 'bold', 'middle');
  b += txt(800, top + 40, '3 × 20 = 60', 22, PINK2, 'bold', 'middle');
  b += txt(800, top + 80, '5 × 12 = 60', 22, GREEN, 'bold', 'middle');
  b += txt(500, top + 185, 'égaux → la proportion est vraie ; et si 3/5 = x/35, alors 5x = 105, x = 21', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 220, s + b); })();
// S6 — rapport vs taux
figs.u2f6 = (() => { const { s, y } = head('Rapport ou taux ?', ['Mêmes unités qui s’effacent → rapport ; unités différentes qui restent → taux.']);
  const top = y + 25;
  let b = box(90, top, 400, 170, '', '#E8F5E9', GREEN, 22) + box(540, top, 400, 170, '', '#FFF3E0', OCRE, 22);
  b += txt(290, top + 42, 'RAPPORT (nombre pur)', 20, GREEN, 'bold', 'middle');
  b += txt(290, top + 88, '18 filles / 30 élèves', 22, '#333', 'normal', 'middle');
  b += txt(290, top + 128, '= 3/5 : les « personnes »', 21, GREEN, 'bold', 'middle');
  b += txt(290, top + 156, 's’annulent', 21, GREEN, 'bold', 'middle');
  b += txt(740, top + 42, 'TAUX (unité composée)', 20, OCRE, 'bold', 'middle');
  b += txt(740, top + 88, '4 500 Ar pour 3 kg', 22, '#333', 'normal', 'middle');
  b += txt(740, top + 128, '= 1 500 Ar/kg : l’unité', 21, OCRE, 'bold', 'middle');
  b += txt(740, top + 156, 'Ar/kg reste collée', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 215, s + b); })();
// S7 — taux unitaire et pourcentages
figs.u2f7 = (() => { const { s, y } = head('Taux unitaire : ramener à 1 pour comparer', ['Le prix pour UN kilo départage les offres en un regard.']);
  const top = y + 20;
  const data = [['Offre', 'Prix affiché', 'Taux unitaire'], ['sac A', '3 kg pour 4 200 Ar', '1 400 Ar/kg'], ['sac B', '5 kg pour 6 500 Ar', '1 300 Ar/kg ✓'], ['remise 15 %', 'sur 6 500 Ar', '− 975 Ar']];
  let b = tableEl(110, top, [170, 330, 290], 58, data);
  b += txt(500, top + 4 * 58 + 45, 'pourcentage = taux « pour 100 » : 15 % = 15/100 = 0,15', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();
// S8 — lois des exposants
figs.u2f8 = (() => { const { s, y } = head('Les lois des exposants', ['Produit : on ajoute ; quotient : on soustrait ; puissance de puissance : on multiplie.']);
  const top = y + 20;
  const data = [['Loi', 'Exemple'], ['aⁿ × aᵐ = aⁿ⁺ᵐ', '2³ × 2⁴ = 2⁷ = 128'], ['aⁿ ÷ aᵐ = aⁿ⁻ᵐ', '5⁶ ÷ 5⁴ = 5² = 25'], ['(aⁿ)ᵐ = aⁿˣᵐ', '(3²)³ = 3⁶ = 729'], ['aⁿ × bⁿ = (ab)ⁿ', '2⁴ × 5⁴ = 10⁴'], ['a⁰ = 1 (a ≠ 0)', '7⁰ = 1']];
  let b = tableEl(170, top, [320, 340], 54, data);
  return svg(1000, top + 6 * 54 + 40, s + b); })();
// S9 — racine carrée comme puissance
figs.u2f9 = (() => { const { s, y } = head('√a est une puissance déguisée', ['√a = a puissance un demi : les lois des exposants s’appliquent aussi aux racines.']);
  const top = y + 30;
  let b = box(140, top, 320, 110, '', '#E3F2FD', '#1565C0', 24) + box(560, top, 320, 110, '', '#E8F5E9', GREEN, 24);
  b += txt(300, top + 45, 'définition', 19, '#1565C0', 'bold', 'middle') + txt(300, top + 85, '√a = a¹ᐟ²', 26, '#1565C0', 'bold', 'middle');
  b += txt(720, top + 45, 'preuve par les lois', 19, GREEN, 'bold', 'middle') + txt(720, top + 85, '(a¹ᐟ²)² = a¹ = a ✓', 24, GREEN, 'bold', 'middle');
  b += txt(500, top + 170, 'conséquence : √a × √b = √(ab) — ex. √2 × √8 = √16 = 4', 22, OCRE, 'bold', 'middle');
  b += txt(500, top + 206, 'mais attention : √(a + b) ≠ √a + √b !', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 240, s + b); })();
// S10 — multiplication/division en notation scientifique
figs.u2f10 = (() => { const { s, y } = head('Calculer en notation scientifique', ['Mantisses entre elles, puissances de 10 entre elles — puis on remet en forme.']);
  const top = y + 20;
  const data = [['Opération', 'Étape 1', 'Étape 2', 'Résultat'], ['(2 × 10⁵) × (3 × 10⁴)', '2 × 3 = 6', '10⁵ × 10⁴ = 10⁹', '6 × 10⁹'], ['(8 × 10⁷) ÷ (4 × 10²)', '8 ÷ 4 = 2', '10⁷ ÷ 10² = 10⁵', '2 × 10⁵'], ['(5 × 10³) × (4 × 10⁶)', '5 × 4 = 20', '10³ × 10⁶ = 10⁹', '2 × 10¹⁰ ✓']];
  let b = tableEl(80, top, [290, 180, 230, 160], 58, data);
  b += txt(500, top + 4 * 58 + 45, 'dernière ligne : 20 × 10⁹ n’est pas scientifique (20 ≥ 10) → 2 × 10¹⁰', 20, PINK2, 'bold', 'middle');
  return svg(1000, top + 4 * 58 + 80, s + b); })();

const S = [
  {
    t: 'Estimer le résultat d’une opération', comp: 'Opération', theme: 'Sens des opérations et ordre de grandeur',
    goal: 'estimer l’ordre de grandeur d’un résultat et choisir l’opération appropriée',
    mat: 'Étiquettes de prix, cartes de calcul, calculatrice, ardoises',
    revQ: 'Arrondis 19,8 et 5,1 à l’unité.',
    revRA: '20 et 5.',
    situation: 'À la quincaillerie, Hery achète 19,8 m de fil à 5 100 Ar le mètre. Le vendeur annonce 1 009 800 Ar. Hery fronce les sourcils : « environ 20 m à environ 5 000 Ar, ça doit faire dans les 100 000 Ar ! » Qui s’est trompé ? L’estimation vient de sauver son porte-monnaie.',
    def: 'Estimer le résultat d’une opération, c’est remplacer les nombres par des valeurs approchées simples pour obtenir rapidement un ordre de grandeur du résultat exact. L’ordre de grandeur permet de contrôler la vraisemblance d’un calcul.',
    autrement: 'on arrondit les nombres à des valeurs rondes, on calcule de tête, et on sait « dans quelles eaux » doit nager le vrai résultat.',
    concept: 'L’estimation précède et contrôle le calcul : AVANT, elle guide le choix de l’opération (un prix total s’obtient par ×, un partage par ÷) ; APRÈS, elle valide le résultat. Avec les rationnels, on arrondit chaque facteur à l’entier ou à la dizaine la plus commode : 19,8 × 5,1 ≈ 20 × 5 = 100. Le résultat exact 100,98 confirme. Les erreurs que l’estimation attrape sont les plus graves : virgule déplacée (× 10, × 100 !), opération inversée, touche mal tapée. Deux estimations encadrantes font encore mieux : 19 × 5 = 95 et 20 × 6 = 120 — le résultat doit vivre entre les deux. Un calcul sans estimation est un calcul sans ceinture de sécurité.',
    synthese: 'arrondir à des valeurs rondes → calcul mental → ordre de grandeur ; contrôle de la virgule et du choix d’opération ; encadrer pour plus de sûreté.',
    method: ['Arrondir chaque nombre à une valeur ronde proche.', 'Calculer mentalement avec ces valeurs.', 'Comparer au résultat exact : même ordre de grandeur ?'],
    exemple: '41,7 ÷ 5,9 : estimation 42 ÷ 6 = 7 ; calcul exact 7,067… ✓. Et 302 × 4,98 ≈ 300 × 5 = 1 500 (exact : 1 503,96).',
    erreur: 'Arrondir dans un seul sens tous les facteurs d’un produit : 9,8 × 9,7 ≈ 10 × 10 = 100 surestime toujours. Pour un encadrement honnête, arrondir une fois par défaut, une fois par excès.',
    saistu: 'Les physiciens appellent « problèmes de Fermi » ces estimations éclair : Enrico Fermi, prix Nobel, estima la puissance de la première bombe atomique en lâchant des bouts de papier pendant l’explosion — son ordre de grandeur, obtenu en secondes, approchait le résultat des ordinateurs !',
    exos: ['Estime puis dis si le résultat proposé est plausible : a) 49,2 × 2,1 = 103,32 ; b) 19,6 × 31 = 60,76 ; d) 81,7 ÷ 3,9 = 20,95 ; e) 598 + 304 = 902.',
      'Choisis l’opération et estime : a) prix de 2,9 kg à 4 100 Ar/kg ; b) partage de 59 700 Ar entre 3 ; d) 11 cahiers à 1 950 Ar ; e) nombre de sacs de 25 kg pour 1 480 kg.',
      'a) Estime 7,9 × 9,8 par excès (8 × 10). b) Par défaut (7 × 9). d) Entre quelles bornes vit le produit exact ? e) Calcule-le.'],
    corr: ['a) ≈ 50 × 2 = 100 : plausible ; b) ≈ 20 × 30 = 600 : 60,76 est faux (virgule) ; d) ≈ 80 ÷ 4 = 20 : plausible ; e) ≈ 600 + 300 = 900 : plausible.',
      'a) × : ≈ 3 × 4 000 = 12 000 Ar ; b) ÷ : ≈ 60 000 ÷ 3 = 20 000 Ar ; d) × : ≈ 10 × 2 000 = 20 000 Ar ; e) ÷ : ≈ 1 500 ÷ 25 = 60 sacs.',
      'a) 80 ; b) 63 ; d) entre 63 et 80 ; e) 77,42.'],
    fig: 'u2f1'
  },
  {
    t: 'Additionner et soustraire des rationnels', comp: 'Opération', theme: 'Sommes et différences de nombres rationnels',
    goal: 'additionner et soustraire des nombres rationnels en écriture fractionnaire',
    mat: 'Bandes de fractions, cartes de signes, cahier, ardoises',
    revQ: 'Calcule 1/4 + 2/4, puis (−3) + 5.',
    revRA: '3/4 ; +2.',
    situation: 'Le réservoir de la pompe du village : lundi il se remplit de 5/6, mardi la consommation en vide 3/4. Reste-t-il de l’eau ? 5/6 − 3/4… Des sixièmes et des quarts ne se comptent pas ensemble : il faut d’abord les convertir en parts identiques.',
    def: 'Pour additionner ou soustraire des nombres rationnels en écriture fractionnaire, on les réduit au même dénominateur, puis on additionne ou soustrait les numérateurs en appliquant les règles de calcul des nombres relatifs ; le dénominateur commun est conservé.',
    autrement: 'même dénominateur d’abord — ensuite on compte les parts, avec leurs signes, comme des relatifs.',
    concept: 'Deux techniques héritées se combinent : celle des fractions (T7-T8) pour le dénominateur commun, celle des relatifs pour les signes. Le dénominateur commun le plus efficace est le plus petit multiple commun : pour 6 et 4, c’est 12 — inutile d’aller à 24. Ainsi 5/6 − 3/4 = 10/12 − 9/12 = 1/12 : il reste un douzième de réservoir. Avec les signes : −3/4 + 5/6 = −9/12 + 10/12 = (−9 + 10)/12 = 1/12 — le numérateur se calcule comme une somme de relatifs ordinaire. Astuce d’écriture : un signe moins devant une fraction peut monter au numérateur (−3/4 = (−3)/4), ce qui rend la règle mécanique. Toujours finir par la simplification du résultat.',
    synthese: 'dénominateur commun (le plus petit) → somme des numérateurs relatifs → simplification ; le signe voyage au numérateur.',
    method: ['Trouver le plus petit dénominateur commun.', 'Convertir les deux fractions, signes au numérateur.', 'Opérer sur les numérateurs comme des relatifs, simplifier.'],
    exemple: '−2/3 − 1/6 : dénominateur 6 → −4/6 − 1/6 = −5/6. Et 7/10 + (−2/5) = 7/10 − 4/10 = 3/10.',
    erreur: 'Additionner les dénominateurs : 1/4 + 1/4 ne vaut pas 2/8 ! Les parts restent des quarts : 1/4 + 1/4 = 2/4 = 1/2. Le dénominateur dit la TAILLE des parts, pas leur nombre.',
    saistu: 'Les scribes égyptiens n’écrivaient que des fractions de numérateur 1 : pour dire 3/4, ils posaient 1/2 + 1/4 ! Le papyrus Rhind (vers 1550 av. J.-C.) contient une table de ces décompositions — nos additions de fractions en sens inverse.',
    exos: ['Calcule et simplifie : a) 1/3 + 1/4 ; b) 5/6 − 3/4 ; d) −2/5 + 7/10 ; e) −1/2 − 1/3.',
      'Calcule : a) 3/8 + (−5/8) ; b) −7/12 + 3/4 ; d) 2 − 5/3 ; e) −3/4 − (−5/6).',
      'La citerne reçoit 2/3 de sa capacité, perd 1/4, reçoit encore 1/6. a) Écris l’expression. b) Dénominateur commun ? d) Calcule. e) La citerne déborde-t-elle ?'],
    corr: ['a) 7/12 ; b) 10/12 − 9/12 = 1/12 ; d) −4/10 + 7/10 = 3/10 ; e) −3/6 − 2/6 = −5/6.',
      'a) −2/8 = −1/4 ; b) −7/12 + 9/12 = 2/12 = 1/6 ; d) 6/3 − 5/3 = 1/3 ; e) −9/12 + 10/12 = 1/12.',
      'a) 2/3 − 1/4 + 1/6 ; b) 12 ; d) 8/12 − 3/12 + 2/12 = 7/12 ; e) non : 7/12 reste sous 1.'],
    fig: 'u2f2'
  },
  {
    t: 'Multiplier et diviser des rationnels', comp: 'Opération', theme: 'Produits et quotients de nombres rationnels',
    goal: 'multiplier et diviser des rationnels en appliquant la règle des signes',
    mat: 'Cartes de fractions, cartes de signes, cahier, ardoises',
    revQ: 'Calcule (−4) × (+3), puis 2/3 × 3/5.',
    revRA: '−12 ; 6/15 = 2/5.',
    situation: 'La coopérative perd 2/3 de million d’ariary par mois de saison sèche. Sur 5 mois… la perte totale se calcule par (−2/3) × 5. Et pour répartir cette perte entre les 7 membres, une division de rationnels attend. Signes et fractions travaillent main dans la main.',
    def: 'Le produit de deux rationnels s’obtient en multipliant les numérateurs entre eux et les dénominateurs entre eux ; le quotient s’obtient en multipliant par l’inverse du diviseur. Le signe du résultat suit la règle des signes : mêmes signes → positif, signes contraires → négatif.',
    autrement: 'produit : haut × haut, bas × bas ; division : on retourne la deuxième fraction ; le signe se décide avant tout le reste.',
    concept: 'La bonne habitude : traiter le SIGNE d’abord, les nombres ensuite. (−2/3) × (5/7) : signes contraires → négatif ; puis 2/3 × 5/7 = 10/21 ; résultat −10/21. Pour la division, l’inverse entre en scène : l’inverse de 5/7 est 7/5, et (−2/3) ÷ (5/7) = (−2/3) × (7/5) = −14/15. Simplifier AVANT de multiplier allège tout : (3/8) × (4/9) = (3 × 4)/(8 × 9), on barre 3 avec 9 et 4 avec 8 → 1/6 sans gros produits. Contrairement à l’addition, aucun dénominateur commun n’est requis — c’est l’opération la plus directe sur les fractions. Et l’inverse d’un nombre garde son signe : l’inverse de −5 est −1/5.',
    synthese: 'signe d’abord (règle des signes) ; produit haut × haut, bas × bas ; division = produit par l’inverse ; simplifier avant de multiplier.',
    method: ['Décider le signe du résultat par la règle des signes.', 'Simplifier en croix si possible, puis multiplier numérateurs et dénominateurs.', 'Pour une division : remplacer par le produit par l’inverse.'],
    exemple: '(−3/4) × (−8/9) : mêmes signes → + ; 3 × 8 = 24, 4 × 9 = 36 ; simplifié : 2/3. Et (5/6) ÷ (−10/3) = (5/6) × (−3/10) = −1/4.',
    erreur: 'Retourner la PREMIÈRE fraction dans une division : a/b ÷ c/d = a/b × d/c — c’est toujours le DIVISEUR qui se renverse, jamais le dividende !',
    saistu: 'Pourquoi « moins par moins donne plus » ? Les comptables l’expliquent : annuler (−) une dette (−) enrichit ! Les Indiens, dès Brahmagupta au VIIᵉ siècle, posaient ces règles en parlant de « fortunes » et de « dettes » — nos + et − viennent de leur commerce.',
    exos: ['Calcule : a) (−2/5) × (3/7) ; b) (−4/9) × (−3/8) ; d) (5/6) × (−12) ; e) (7/10) × (5/14).',
      'Calcule : a) (−3/4) ÷ (5/8) ; b) (2/9) ÷ (−2/3) ; d) (−7/5) ÷ (−7/5) ; e) 6 ÷ (−3/4).',
      'La coopérative perd 2/3 de million d’Ar par mois pendant 5 mois. a) Écris le produit. b) Calcule la perte totale. d) Partage-la entre 7 membres (division). e) Donne la part en ariary (1 million = 10⁶ Ar), arrondie au millier.'],
    corr: ['a) −6/35 ; b) +12/72 = 1/6 ; d) −60/6 = −10 ; e) 35/140 = 1/4.',
      'a) −3/4 × 8/5 = −24/20 = −6/5 ; b) 2/9 × (−3/2) = −6/18 = −1/3 ; d) +1 ; e) 6 × (−4/3) = −8.',
      'a) (−2/3) × 5 ; b) −10/3 de million ; d) (−10/3) ÷ 7 = −10/21 de million ; e) −10/21 × 10⁶ ≈ −476 000 Ar par membre.'],
    fig: 'u2f3'
  },
  {
    t: 'Appliquer la priorité des opérations', comp: 'Opération', theme: 'Priorités avec parenthèses et exposants',
    goal: 'appliquer la règle des priorités dans des chaînes d’opérations sur les rationnels',
    mat: 'Pyramide des priorités affichée, cartes d’expressions, ardoises',
    revQ: 'Calcule 5 + 3 × 4, puis (5 + 3) × 4.',
    revRA: '17 ; 32.',
    situation: 'Deux élèves calculent 1/2 + 1/2 × (3/4)². Vola trouve 25/32, Sitraka trouve 9/16. Un seul a respecté l’ordre des opérations — l’autre a lu de gauche à droite comme une phrase. Les mathématiques ont leur code de la route.',
    def: 'Dans une chaîne d’opérations, on effectue d’abord les calculs entre parenthèses, puis les exposants, puis les multiplications et divisions, enfin les additions et soustractions. À priorité égale, on calcule de gauche à droite.',
    autrement: 'quatre étages : parenthèses → exposants → × ÷ → + − ; au même étage, on avance de gauche à droite.',
    concept: 'La nouveauté T9 : la règle vaut pour TOUS les rationnels, signes et fractions compris. 1/2 + 1/2 × (3/4)² se déroule ainsi : parenthèse déjà réduite, exposant (3/4)² = 9/16, multiplication 1/2 × 9/16 = 9/32, addition 1/2 + 9/32 = 16/32 + 9/32 = 25/32 — Vola gagne. Pièges de signes : dans −3², l’exposant ne porte que sur 3 (résultat −9), alors que (−3)² = 9 ; la barre de fraction agit comme une parenthèse invisible : dans (1 + 2)/5, on somme avant de diviser. La règle est mondiale : elle garantit qu’une même expression a UNE seule valeur, à Antananarivo comme partout — c’est le contrat qui rend les formules possibles.',
    synthese: 'parenthèses → exposants → × ÷ → + − ; gauche à droite à priorité égale ; (−a)² ≠ −a² ; barre de fraction = parenthèses invisibles.',
    method: ['Repérer et réduire les parenthèses, de la plus intérieure à la plus extérieure.', 'Calculer les exposants, en surveillant leur portée.', 'Finir par × ÷ puis + −, de gauche à droite.'],
    exemple: '2 − 3 × (1/2 − 5/6)² : parenthèse = −1/3 ; carré = 1/9 ; produit = 3 × 1/9 = 1/3 ; différence = 2 − 1/3 = 5/3.',
    erreur: 'Calculer de gauche à droite sans hiérarchie : 1/2 + 1/2 × 9/16 n’est PAS (1/2 + 1/2) × 9/16 = 9/16 ! L’addition attend sagement que la multiplication ait fini.',
    saistu: 'Les calculatrices n’ont pas toutes le même cerveau : les modèles « scientifiques » respectent les priorités, mais beaucoup de calculatrices quatre-opérations calculent au fil des touches ! Tape 2 + 3 × 4 sur les deux : 14 d’un côté, 20 de l’autre. Sais-tu laquelle croire ?',
    exos: ['Calcule : a) 1/3 + 2/3 × 1/4 ; b) (1/3 + 2/3) × 1/4 ; d) 5/2 − (1/2)² ; e) (5/2 − 1/2)².',
      'Calcule : a) −2² ; b) (−2)² ; d) 3 × (−1/2)² − 1 ; e) (2/3)² ÷ (4/9).',
      'Reprends 1/2 + 1/2 × (3/4)². a) Quelle opération se fait en premier ? b) Que vaut (3/4)² ? d) Termine le calcul. e) Quelle erreur a produit 9/16 ?'],
    corr: ['a) 1/3 + 2/12 = 1/2 ; b) 1 × 1/4 = 1/4 ; d) 5/2 − 1/4 = 9/4 ; e) 2² = 4.',
      'a) −4 ; b) +4 ; d) 3 × 1/4 − 1 = −1/4 ; e) 4/9 × 9/4 = 1.',
      'a) l’exposant ; b) 9/16 ; d) 1/2 × 9/16 = 9/32 puis 1/2 + 9/32 = 25/32 ; e) avoir additionné 1/2 + 1/2 d’abord : priorité violée.'],
    fig: 'u2f4'
  },
  {
    t: 'Utiliser la propriété fondamentale des proportions', comp: 'Opération', theme: 'Proportions et produits en croix',
    goal: 'utiliser l’égalité des produits en croix pour vérifier une proportion et trouver un terme inconnu',
    mat: 'Tableaux de proportionnalité, situations-problèmes, cahier',
    revQ: '2/3 et 8/12 forment-ils une proportion ?',
    revRA: 'Oui : 2 × 12 = 3 × 8 = 24.',
    situation: 'La recette du mofo gasy : 3 mesures de farine pour 5 mesures d’eau ; pour la fête, Bao prévoit 12 mesures de farine. Combien d’eau ? 3/5 = 12/x… Un seul outil ouvre toutes ces équations : la propriété fondamentale des proportions.',
    def: 'Propriété fondamentale des proportions : a/b = c/d si et seulement si a × d = b × c (b et d non nuls). Elle permet de vérifier une proportion et de calculer un terme inconnu, appelé quatrième proportionnelle.',
    autrement: 'une proportion est vraie exactement quand ses produits en croix sont égaux — et un terme manquant se retrouve en divisant le produit connu.',
    concept: 'Le « si et seulement si » donne un outil à double tranchant : VÉRIFIER (3/5 = 12/20 ? produits 3 × 20 = 60 et 5 × 12 = 60 : oui) et RÉSOUDRE (3/5 = 12/x devient 3x = 60, donc x = 20 mesures d’eau). La quatrième proportionnelle se calcule toujours pareil : produit des deux termes de la diagonale complète, divisé par le terme restant. Cette propriété est le moteur caché de toute la proportionnalité : échelles de cartes, prix au kilo, conversions, pourcentages… En T9 elle devient aussi une équation : résoudre 3x = 60, c’est déjà de l’algèbre — les composantes se tendent la main.',
    synthese: 'a/b = c/d ⇔ ad = bc ; quatrième proportionnelle = produit de la diagonale complète ÷ terme restant ; vérifier ET résoudre.',
    method: ['Poser la proportion en alignant les grandeurs de même nature.', 'Écrire l’égalité des produits en croix.', 'Isoler l’inconnue en divisant par son coefficient ; vérifier.'],
    exemple: '7/4 = x/10 : 4x = 70, x = 17,5. Vérification : 7 × 10 = 70 et 4 × 17,5 = 70 ✓.',
    erreur: 'Croiser dans le mauvais sens : dans 3/5 = 12/x, le produit en croix est 3x = 5 × 12 — le numérateur de gauche épouse le dénominateur de droite. Un croisement raté double ou divise le résultat par le carré du rapport !',
    saistu: 'La « règle de trois », nom commercial des produits en croix, figurait déjà dans les manuels indiens du Vᵉ siècle sous le nom de trairāśika, « les trois grandeurs ». Les marchands de la route de la soie l’utilisaient pour convertir monnaies et mesures d’une oasis à l’autre.',
    exos: ['Proportion vraie ou fausse ? a) 4/6 et 10/15 ; b) 5/8 et 16/25 ; d) 9/12 et 15/20 ; e) 7/3 et 21/8.',
      'Trouve x : a) 2/5 = x/30 ; b) x/7 = 12/21 ; d) 9/x = 15/10 ; e) 3,5/2 = x/8.',
      'Recette : 3 farine pour 5 eau. a) Pose la proportion pour 12 farine. b) Produits en croix ? d) Combien d’eau ? e) Et s’il ne reste que 8 mesures d’eau, combien de farine (au dixième) ?'],
    corr: ['a) vraie (60 = 60) ; b) fausse (125 ≠ 128) ; d) vraie (180 = 180) ; e) fausse (56 ≠ 63).',
      'a) 5x = 60, x = 12 ; b) 21x = 84, x = 4 ; d) 15x = 90, x = 6 ; e) 2x = 28, x = 14.',
      'a) 3/5 = 12/x ; b) 3x = 60 ; d) x = 20 mesures ; e) 3/5 = y/8 → 5y = 24, y = 4,8 mesures.'],
    fig: 'u2f5'
  },
  {
    t: 'Distinguer rapport et taux', comp: 'Opération', theme: 'Rapport (nombre pur) et taux (unité composée)',
    goal: 'distinguer un rapport d’un taux et interpréter leurs valeurs',
    mat: 'Étiquettes de prix, fiches de données, cahier',
    revQ: 'Simplifie 18/30.',
    revRA: '3/5.',
    situation: 'Deux phrases du marché : « il y a 18 filles sur 30 élèves » et « le riz coûte 4 500 Ar les 3 kg ». Deux quotients… mais pas de la même espèce : le premier est un nombre pur, le second garde ses ariary et ses kilos accrochés. Rapport ou taux ?',
    def: 'Un rapport est le quotient de deux quantités de même nature : les unités s’éliminent et le rapport est un nombre sans unité. Un taux est le quotient de deux grandeurs de natures différentes : l’unité composée demeure (Ar/kg, km/h, hab/km²).',
    autrement: 'mêmes unités → elles s’annulent, c’est un rapport ; unités différentes → elles restent collées, c’est un taux.',
    concept: 'Le test est dans l’unité du résultat. 18 filles / 30 élèves = 3/5 : les « personnes » du haut et du bas se sont annulées, 3/5 est un nombre pur qui dit une PART (« 3 élèves sur 5 sont des filles »). 4 500 Ar / 3 kg = 1 500 Ar/kg : ariary et kilogrammes ne peuvent pas s’annuler, le quotient garde l’unité composée et dit un ÉCHANGE (« chaque kilo coûte 1 500 Ar »). Les deux se manipulent avec les mêmes outils (simplification, proportion), mais ne se comparent pas entre eux : comparer 3/5 et 1 500 Ar/kg n’a aucun sens ! Les taux les plus courants de la vie malgache : Ar/kg au marché, km/h sur la route, kWh facturés par la JIRAMA, hab/km² dans les recensements.',
    synthese: 'rapport = quotient de même nature, nombre pur (une part) ; taux = quotient de natures différentes, unité composée (un échange) ; ne jamais comparer l’un à l’autre.',
    method: ['Écrire le quotient avec ses unités complètes.', 'Simplifier les unités : s’annulent-elles ?', 'Conclure : nombre pur = rapport ; unité composée = taux.'],
    exemple: '12 garçons / 18 filles = 2/3 : rapport. 180 km / 4 h = 45 km/h : taux. 25 600 000 hab / 587 000 km² ≈ 44 hab/km² : taux.',
    erreur: 'Écrire un rapport avec une unité (« le rapport est de 0,6 élève ») ou un taux sans unité (« la vitesse est 45 ») : le premier n’en a pas besoin, le second ne veut rien dire sans elle !',
    saistu: 'La densité de population de Madagascar (≈ 45 hab/km²) cache des écarts énormes : Analamanga dépasse 500 hab/km² quand le Melaky n’atteint pas 10 ! Un même taux moyen peut recouvrir des réalités très différentes — première leçon de prudence statistique.',
    exos: ['Rapport ou taux ? Calcule : a) 15 filles sur 25 élèves ; b) 7 500 Ar pour 5 kg ; d) 240 km en 3 h ; e) 12 victoires pour 18 matchs.',
      'Calcule le taux : a) 6 000 Ar pour 4 L ; b) 150 km en 2,5 h ; d) 2 100 000 hab sur 16 911 km² (Analamanga, arrondi) ; e) 90 kWh en 30 jours.',
      'a) Le rapport filles/garçons d’une classe est 3/2 : que signifie-t-il ? b) S’il y a 18 filles, combien de garçons ? d) Le taux de réussite est-il un rapport ou un taux au sens strict ? e) Explique.'],
    corr: ['a) rapport : 3/5 ; b) taux : 1 500 Ar/kg ; d) taux : 80 km/h ; e) rapport : 2/3.',
      'a) 1 500 Ar/L ; b) 60 km/h ; d) ≈ 124 hab/km² ; e) 3 kWh/jour.',
      'a) 3 filles pour 2 garçons ; b) 12 ; d) un rapport : réussites/candidats, même nature ; e) les « candidats » s’annulent, le résultat est un nombre pur (souvent dit en %).'],
    fig: 'u2f6'
  },
  {
    t: 'Utiliser taux unitaire et pourcentages', comp: 'Opération', theme: 'Taux unitaire, comparaison et pourcentages',
    goal: 'calculer un taux unitaire et un pourcentage pour comparer et résoudre des problèmes',
    mat: 'Étiquettes de prix, publicités, calculatrice, cahier',
    revQ: 'Quel est le prix au kilo si 3 kg coûtent 4 200 Ar ?',
    revRA: '1 400 Ar/kg.',
    situation: 'Au marché : le sac A offre 3 kg de riz à 4 200 Ar, le sac B 5 kg à 6 500 Ar — et l’épicier annonce « −15 % sur le sac B samedi ». Quelle est la vraie bonne affaire ? Ramener tout à UN kilo et à CENT ariary : taux unitaire et pourcentage, les deux balances du consommateur.',
    def: 'Un taux unitaire est un taux ramené à une unité du dénominateur (prix pour 1 kg, distance pour 1 h). Un pourcentage est un rapport ou un taux exprimé pour 100 : t % = t/100 ; appliquer t % à une quantité, c’est la multiplier par t/100.',
    autrement: 'taux unitaire = « pour 1 » ; pourcentage = « pour 100 » — deux façons de rendre les quotients comparables d’un coup d’œil.',
    concept: 'Comparer des offres de tailles différentes est impossible tant qu’on ne les ramène pas à la même base. Le taux unitaire choisit la base 1 : sac A → 4 200 ÷ 3 = 1 400 Ar/kg ; sac B → 6 500 ÷ 5 = 1 300 Ar/kg : B gagne. Le pourcentage choisit la base 100 : pratique pour les parts et les évolutions. La remise de 15 % sur 6 500 Ar retire 6 500 × 15/100 = 975 Ar → 5 525 Ar, soit 1 105 Ar/kg : imbattable. Augmenter de t %, c’est multiplier par (1 + t/100) ; diminuer, par (1 − t/100) — et deux évolutions successives se MULTIPLIENT : +10 % puis −10 % ne revient pas au départ (× 1,1 × 0,9 = × 0,99) !',
    synthese: 'taux unitaire = ÷ quantité (base 1) ; t % = t/100 (base 100) ; remise/hausse : × (1 ∓ t/100) ; évolutions successives : produits, pas sommes.',
    method: ['Ramener chaque offre à l’unité en divisant.', 'Traduire les % en facteur : × (1 + t/100) ou × (1 − t/100).', 'Comparer les taux unitaires obtenus, conclure.'],
    exemple: '2,5 kg à 3 750 Ar → 1 500 Ar/kg. Hausse de 8 % sur 12 000 Ar : 12 000 × 1,08 = 12 960 Ar.',
    erreur: 'Additionner des pourcentages successifs : +20 % puis +30 % ne font pas +50 % mais × 1,2 × 1,3 = × 1,56, soit +56 % ! Les pourcentages se composent par multiplication.',
    saistu: 'Le symbole % est la fossilisation de l’italien « per cento » : les copistes abrégèrent cento en « cto », qui se tassa en deux ronds séparés d’une barre. Son cousin ‰ (pour mille) sert aux taux de natalité — Madagascar : environ 32 ‰ par an.',
    exos: ['Calcule le taux unitaire et compare : a) 3 kg à 5 100 Ar ; b) 7 kg à 11 200 Ar ; d) lequel est le moins cher au kilo ? e) économie par kilo ?',
      'Calcule : a) 25 % de 48 000 Ar ; b) prix après −15 % sur 6 500 Ar ; d) prix après +8 % sur 25 000 Ar ; e) 36/120 des élèves en pourcentage.',
      'Un article passe de 20 000 Ar à 25 000 Ar. a) Quelle est la hausse en Ar ? b) En pourcentage ? d) Puis il subit −20 % : nouveau prix ? e) Est-on revenu à 20 000 Ar ? Explique.'],
    corr: ['a) 1 700 Ar/kg ; b) 1 600 Ar/kg ; d) le lot de 7 kg ; e) 100 Ar/kg.',
      'a) 12 000 Ar ; b) 6 500 × 0,85 = 5 525 Ar ; d) 25 000 × 1,08 = 27 000 Ar ; e) 30 %.',
      'a) 5 000 Ar ; b) 5 000/20 000 = 25 % ; d) 25 000 × 0,8 = 20 000 Ar ; e) oui ici, car −20 % compense exactement +25 % (× 1,25 × 0,8 = × 1) — coïncidence des facteurs, pas des pourcentages !'],
    fig: 'u2f7'
  },
  {
    t: 'Appliquer les lois des exposants', comp: 'Opération', theme: 'Propriétés des puissances',
    goal: 'appliquer les lois des exposants pour simplifier et calculer',
    mat: 'Cartes d’exposants, tableau des puissances, cahier, ardoises',
    revQ: 'Que valent 2³ et 2⁴ ? Et leur produit ?',
    revRA: '8 ; 16 ; 128.',
    situation: 'Rakoto doit calculer 2³ × 2⁴. Il pose 8 × 16 = 128… puis remarque : 128 = 2⁷, et 7 = 3 + 4 ! Hasard ? Il essaie 5² × 5³ = 25 × 125 = 3 125 = 5⁵. Encore ! Les exposants s’additionnent tout seuls — il vient de découvrir une loi.',
    def: 'Pour tous nombres non nuls a, b et tous entiers m, n : aⁿ × aᵐ = aⁿ⁺ᵐ ; aⁿ ÷ aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ ; aⁿ × bⁿ = (ab)ⁿ ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ.',
    autrement: 'produit de mêmes bases : on AJOUTE les exposants ; quotient : on SOUSTRAIT ; puissance de puissance : on MULTIPLIE ; exposant zéro : résultat 1.',
    concept: 'Chaque loi se démontre en « dépliant » les puissances : 2³ × 2⁴ = (2·2·2) × (2·2·2·2) = sept facteurs 2 = 2⁷ — compter les facteurs suffit ! Le quotient explique les exposants étranges : 5³ ÷ 5³ = 1 d’un côté, 5⁰ de l’autre → 5⁰ = 1 ; et 5² ÷ 5³ = 1/5 → 5⁻¹ = 1/5 : les exposants négatifs sont des inverses, pas des nombres négatifs ! Garde-fou : les lois exigent la MÊME base (2³ × 5² ne se simplifie pas) ou le MÊME exposant (2⁴ × 5⁴ = 10⁴). Et surtout aⁿ⁺ᵐ n’a rien à voir avec (a + b)ⁿ : les lois parlent de produits, jamais de sommes.',
    synthese: 'même base : + ou − les exposants ; puissance de puissance : × ; même exposant : (ab)ⁿ ; a⁰ = 1 ; a⁻ⁿ = 1/aⁿ ; jamais de loi pour les sommes.',
    method: ['Vérifier : même base ou même exposant ?', 'Appliquer la loi correspondante sur les exposants.', 'Finir le calcul numérique si demandé, et contrôler sur un petit cas.'],
    exemple: '3⁵ × 3⁻² = 3³ = 27 ; (2³)⁴ = 2¹² ; 6⁴ ÷ 6⁴ = 6⁰ = 1 ; 4³ × 25³ = 100³ = 10⁶.',
    erreur: 'Multiplier les bases ET ajouter les exposants : 2³ × 2⁴ ne vaut pas 4⁷ ! La base ne bouge pas quand les exposants s’additionnent : 2³ × 2⁴ = 2⁷.',
    saistu: 'La légende de l’échiquier de Sissa illustre la furie des exposants : 1 grain sur la première case, 2 sur la deuxième, 4, 8… La 64ᵉ case réclame 2⁶³ grains et l’échiquier entier 2⁶⁴ − 1 ≈ 1,8 × 10¹⁹ : plus de mille ans de récoltes mondiales de riz !',
    exos: ['Simplifie en une puissance : a) 7³ × 7⁵ ; b) 10⁸ ÷ 10³ ; d) (5²)⁴ ; e) 2⁶ × 5⁶.',
      'Calcule : a) 3⁰ ; b) 2⁻³ ; d) 10⁻² ; e) 4² × 4⁻².',
      'a) Simplifie a³ × a⁵ ÷ a⁶. b) Écris 8 × 32 en puissance de 2 et simplifie. d) Compare 2¹⁰ et 10³. e) (2 + 3)² est-il 2² + 3² ?'],
    corr: ['a) 7⁸ ; b) 10⁵ ; d) 5⁸ ; e) 10⁶.',
      'a) 1 ; b) 1/8 ; d) 0,01 ; e) 4⁰ = 1.',
      'a) a² ; b) 2³ × 2⁵ = 2⁸ = 256 ; d) 2¹⁰ = 1 024 dépasse 10³ = 1 000 ; e) non : 25 ≠ 13 — aucune loi pour les sommes !'],
    fig: 'u2f8'
  },
  {
    t: 'Écrire une racine carrée comme puissance', comp: 'Opération', theme: 'Racine carrée et exposant un demi',
    goal: 'exprimer la racine carrée d’un nombre positif à l’aide d’une puissance',
    mat: 'Cartes d’exposants, calculatrice, cahier',
    revQ: 'Que vaut (√9)² ? Et 9¹ ?',
    revRA: '9 ; 9 : les deux donnent 9.',
    situation: 'Jeu de devinette en classe : « je suis une puissance de 9, et mon carré vaut 9 — qui suis-je ? » Si 9 à la puissance x, élevé au carré, donne 9¹, alors 2x = 1… x = 1/2 ! La racine carrée se cachait dans les exposants fractionnaires.',
    def: 'Pour tout nombre positif a, la racine carrée de a est la puissance d’exposant un demi : √a = a¹ᐟ². Les lois des exposants s’appliquent alors aux racines carrées ; en particulier √a × √b = √(ab) et √a ÷ √b = √(a/b) pour a, b positifs.',
    autrement: 'mettre « puissance un demi », c’est prendre la racine carrée — et du coup, les racines obéissent aux mêmes lois que les puissances.',
    concept: 'La définition se justifie par cohérence : si √a doit être une puissance aˣ, alors (aˣ)² = a¹ impose 2x = 1 par la loi de la puissance de puissance, donc x = 1/2. Récompense immédiate : les lois connues travaillent pour nous. √2 × √8 = 2¹ᐟ² × 8¹ᐟ² = (2 × 8)¹ᐟ² = √16 = 4 — sans calculatrice ! De même √72 = √(36 × 2) = 6√2 : on « sort » le carré parfait caché. Mais la prudence demeure : les lois parlent de PRODUITS ; √(9 + 16) = 5 tandis que √9 + √16 = 7 — l’addition reste interdite de séjour. Cette écriture ouvre une porte immense : exposants 1/3 (racines cubiques), 0,7, π… tout un continent de puissances au lycée.',
    synthese: '√a = a¹ᐟ² ; (√a)² = a ; √a√b = √(ab), √a/√b = √(a/b) ; sortir les carrés parfaits ; jamais pour les sommes.',
    method: ['Traduire les racines en exposants 1/2.', 'Appliquer les lois des exposants (produits, quotients).', 'Retraduire en racine et simplifier via les carrés parfaits.'],
    exemple: '√3 × √27 = √81 = 9. √50 = √(25 × 2) = 5√2. √(49/4) = 7/2.',
    erreur: 'Étendre la magie aux sommes : √(a + b) = √a + √b est FAUX (√25 = 5, mais √9 + √16 = 7). Les exposants fractionnaires suivent les lois des produits, pas celles des additions.',
    saistu: 'Les exposants fractionnaires furent inventés par Nicole Oresme au XIVᵉ siècle, évêque normand et conseiller du roi Charles V — trois siècles avant Newton qui les généralisa. Ta calculatrice calcule 7^0,5 exactement comme √7 : pour elle, c’est le même bouton !',
    exos: ['Écris en puissance : a) √5 ; b) √10 ; d) (√3)² ; e) √(2⁶).',
      'Calcule avec les lois : a) √2 × √18 ; b) √5 × √20 ; d) √48 ÷ √3 ; e) √(9 × 25).',
      'Simplifie en sortant un carré parfait : a) √8 ; b) √45 ; d) √200 ; e) compare √(16 + 9) et √16 + √9.'],
    corr: ['a) 5¹ᐟ² ; b) 10¹ᐟ² ; d) 3 ; e) 2³ = 8.',
      'a) √36 = 6 ; b) √100 = 10 ; d) √16 = 4 ; e) 3 × 5 = 15.',
      'a) 2√2 ; b) 3√5 ; d) 10√2 ; e) √25 = 5 contre 7 : différents, l’addition ne passe pas sous la racine.'],
    fig: 'u2f9'
  },
  {
    t: 'Multiplier et diviser en notation scientifique', comp: 'Opération', theme: 'Opérations sur les puissances de 10',
    goal: 'effectuer des multiplications et des divisions de grands et petits nombres en notation scientifique',
    mat: 'Données astronomiques et microscopiques, calculatrice, cahier',
    revQ: 'Écris 300 000 et 0,0002 en notation scientifique.',
    revRA: '3 × 10⁵ ; 2 × 10⁻⁴.',
    situation: 'La lumière parcourt 3 × 10⁵ km chaque seconde, et le Soleil est à 1,5 × 10⁸ km. Combien de temps met sa lumière pour nous atteindre ? Une division de géants… que la notation scientifique transforme en calcul de quelques secondes.',
    def: 'Pour multiplier ou diviser des nombres en notation scientifique, on opère séparément sur les mantisses et sur les puissances de 10 (lois des exposants), puis on remet le résultat en notation scientifique si la mantisse sort de l’intervalle [1 ; 10[.',
    autrement: 'nombres entre eux, puissances de 10 entre elles — exposants ajoutés pour ×, soustraits pour ÷ — puis toilette finale du résultat.',
    concept: 'Le découpage utilise la liberté des produits : (2 × 10⁵) × (3 × 10⁴) = (2 × 3) × (10⁵ × 10⁴) = 6 × 10⁹. La division suit : (8 × 10⁷) ÷ (4 × 10²) = 2 × 10⁵. Le soleil ? (1,5 × 10⁸) ÷ (3 × 10⁵) = 0,5 × 10³ = 5 × 10² s : 500 secondes, un peu plus de 8 minutes — le Soleil que tu vois a 8 minutes d’âge ! La « toilette finale » est le réflexe pro : 20 × 10⁹ → 2 × 10¹⁰ et 0,5 × 10³ → 5 × 10² (la virgule bouge d’un rang, l’exposant compense d’un rang en sens inverse). Exposants négatifs bienvenus : (6 × 10⁻³) × (2 × 10⁻⁴) = 1,2 × 10⁻⁶ — microbes et molécules se multiplient aussi bien que les étoiles.',
    synthese: 'mantisses entre elles, exposants ajoutés (×) ou soustraits (÷) ; remettre la mantisse dans [1 ; 10[ en compensant l’exposant.',
    method: ['Multiplier (ou diviser) les mantisses.', 'Appliquer la loi des exposants aux puissances de 10.', 'Renormaliser : mantisse dans [1 ; 10[, exposant ajusté.'],
    exemple: '(4 × 10⁶) × (5 × 10³) = 20 × 10⁹ = 2 × 10¹⁰. (9 × 10⁻²) ÷ (3 × 10⁴) = 3 × 10⁻⁶.',
    erreur: 'Oublier la toilette finale : laisser 20 × 10⁹ ou 0,5 × 10³, ce n’est plus de la notation scientifique ! La mantisse doit rester dans [1 ; 10[ — déplace la virgule et compense l’exposant.',
    saistu: 'Ton corps contient environ 3 × 10¹³ cellules, et chacune héberge près de 10⁴ fois plus d’atomes que la Galaxie ne compte d’étoiles. Sans notation scientifique, la biologie moderne écrirait des nombres de 27 chiffres… sur chaque ligne de calcul !',
    exos: ['Calcule en notation scientifique : a) (2 × 10³) × (4 × 10⁵) ; b) (3 × 10⁶) × (3 × 10²) ; d) (5 × 10⁴) × (6 × 10³) ; e) (1,5 × 10⁻²) × (4 × 10⁵).',
      'Calcule : a) (8 × 10⁹) ÷ (2 × 10³) ; b) (6 × 10⁵) ÷ (3 × 10⁻²) ; d) (4,2 × 10⁷) ÷ (7 × 10⁴) ; e) (9 × 10⁻³) ÷ (3 × 10⁻⁸).',
      'La lumière : 3 × 10⁵ km/s. a) Distance Soleil-Terre 1,5 × 10⁸ km : pose la division du temps. b) Calcule en secondes. d) Convertis en minutes. e) La Lune est à 3,84 × 10⁵ km : temps de trajet de sa lumière ?'],
    corr: ['a) 8 × 10⁸ ; b) 9 × 10⁸ ; d) 30 × 10⁷ = 3 × 10⁸ ; e) 6 × 10³.',
      'a) 4 × 10⁶ ; b) 2 × 10⁷ ; d) 0,6 × 10³ = 6 × 10² ; e) 3 × 10⁵.',
      'a) (1,5 × 10⁸) ÷ (3 × 10⁵) ; b) 0,5 × 10³ = 5 × 10² s ; d) 500 ÷ 60 ≈ 8,3 min ; e) 3,84 × 10⁵ ÷ 3 × 10⁵ = 1,28 s.'],
    fig: 'u2f10'
  }
];

const unit2 = {
  no: 2, roman: 'II', name: 'Opération',
  rag: 'développer le sens des opérations sur les nombres rationnels et les utiliser pour résoudre des problèmes concrets.',
  valeurs: 'précision et confiance en soi',
  sessions: S,
  revision: {
    table: [
      ['Estimation', 'Arrondir à des valeurs rondes, contrôler l’ordre de grandeur et la virgule', 'Vérifier tout calcul en 2 secondes'],
      ['Somme / différence', 'Dénominateur commun minimal, signes au numérateur, simplifier', 'Additionner toutes les fractions relatives'],
      ['Produit / quotient', 'Signe d’abord ; haut × haut, bas × bas ; diviser = × l’inverse', 'Multiplier sans dénominateur commun'],
      ['Priorités', 'Parenthèses → exposants → × ÷ → + − ; (−a)² ≠ −a²', 'Une expression, une seule valeur'],
      ['Proportions, taux, %', 'ad = bc ; taux unitaire (÷) ; t % = ×(1 ± t/100)', 'Comparer et résoudre au marché'],
      ['Puissances et √', 'Exposants : + − × ; a⁰ = 1 ; √a = a¹ᐟ² ; notation scientifique', 'Calculer avec l’immense et le minuscule']
    ],
    questions: [
      'Estime 61,2 × 4,9, puis juge le résultat annoncé « 2 999,88 ».',
      'Calcule −5/6 + 3/4, puis (−2/9) ÷ (4/3).',
      'Calcule 1 − 2 × (1/2 − 3/4)².',
      'Un sac de 4 kg coûte 6 200 Ar ; un autre de 7 kg coûte 10 150 Ar. Lequel choisir, et que vaut une remise de 10 % sur le second ?',
      'Calcule (2,5 × 10⁻³) × (4 × 10⁸) et √5 × √45.'
    ],
    answers: [
      '≈ 60 × 5 = 300 : le résultat annoncé est 10 fois trop grand (virgule).',
      '−10/12 + 9/12 = −1/12 ; (−2/9) × (3/4) = −6/36 = −1/6.',
      'Parenthèse −1/4 ; carré 1/16 ; 1 − 2/16 = 7/8.',
      '1 550 Ar/kg contre 1 450 Ar/kg : le second ; remise 1 015 Ar → 9 135 Ar.',
      '10 × 10⁵ = 1 × 10⁶ ; √225 = 15.'
    ]
  },
  exam: {
    exos: [
      'a) Estime 39,7 × 5,2 et conclus sur « 206,44 ». b) Calcule 2/3 − 5/4. d) Calcule (−3/8) × (4/9). e) Calcule (−5/6) ÷ (−10/3).',
      'Calcule en respectant les priorités, résultat en fraction simplifiée : a) 1/4 + 3/4 × 2/3 ; b) (1/4 + 3/4) × 2/3 ; d) (−2)² − 2² × 1/2 ; e) 3 − (1/3 − 1/2)².',
      'Au marché : le lot C donne 2 kg pour 3 300 Ar, le lot D donne 5 kg pour 7 750 Ar. a) Taux unitaire de C ? b) De D ? d) Samedi, −12 % sur le lot D : nouveau prix ? e) Nouveau taux unitaire de D (arrondi à l’ariary) ?',
      'a) Simplifie 5⁴ × 5⁻¹. b) Simplifie (3²)³ ÷ 3⁴. d) Écris √7 en puissance. e) Calcule √8 × √2 et simplifie √75.',
      'Un globule rouge mesure 8 × 10⁻⁶ m ; un cheveu 8 × 10⁻⁵ m. a) Lequel est le plus gros, et de combien de fois ? b) Calcule (6 × 10⁴) × (5 × 10⁵). d) Calcule (2,4 × 10⁻²) ÷ (8 × 10³). e) Mets 48 × 10⁷ en notation scientifique.'
    ],
    corr: [
      'a) ≈ 40 × 5 = 200 : plausible ; b) 8/12 − 15/12 = −7/12 ; d) −12/72 = −1/6 ; e) +(5/6 × 3/10) = 15/60 = 1/4. Un point par item.',
      'a) 1/4 + 1/2 = 3/4 ; b) 1 × 2/3 = 2/3 ; d) 4 − 2 = 2 ; e) parenthèse −1/6, carré 1/36, 3 − 1/36 = 107/36. Un point par item.',
      'a) 1 650 Ar/kg ; b) 1 550 Ar/kg ; d) 7 750 × 0,88 = 6 820 Ar ; e) 6 820 ÷ 5 = 1 364 Ar/kg. Un point par item.',
      'a) 5³ = 125 ; b) 3⁶ ÷ 3⁴ = 3² = 9 ; d) 7¹ᐟ² ; e) √16 = 4 ; √75 = 5√3. Un point par item.',
      'a) le cheveu, 10 fois ; b) 30 × 10⁹ = 3 × 10¹⁰ ; d) 0,3 × 10⁻⁵ = 3 × 10⁻⁶ ; e) 4,8 × 10⁸. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit2, bufs);
})();
