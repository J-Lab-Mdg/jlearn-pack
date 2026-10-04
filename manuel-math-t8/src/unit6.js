// UNITÉ 6 — TRAITEMENT DE DONNÉES (PE T8) : 11 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, PINK2, GREEN, BLUE, OCRE } = L;

const figs = {};
// S1 — population / individu / caractère
figs.u6f1 = (() => { const { s, y } = head('Population, individu, caractère', ['La classe = population ; un élève = individu ; la couleur = caractère.']);
  const top = y + 25;
  let b = `<ellipse cx="300" cy="${top + 130}" rx="230" ry="120" fill="#E3F2FD" stroke="#1565C0" stroke-width="3"/>`;
  for (let i = 0; i < 4; i++) for (let j = 0; j < 3; j++) b += dot(185 + i * 75, top + 70 + j * 60, 13, i === 1 && j === 1 ? PINK2 : '#1565C0');
  b += txt(300, top + 285, 'POPULATION : la classe', 22, '#1565C0', 'bold', 'middle');
  b += arrow(430, top + 128, 580, top + 128, PINK2, 3);
  b += txt(700, top + 100, 'INDIVIDU : un élève', 22, PINK2, 'bold', 'middle');
  b += txt(700, top + 150, 'CARACTÈRE étudié :', 22, OCRE, 'bold', 'middle') + txt(700, top + 185, 'sa couleur préférée', 21, OCRE, 'normal', 'middle');
  return svg(1000, top + 325, s + b); })();
// S2 — modalités et effectifs
figs.u6f2 = (() => { const { s, y } = head('Modalités et effectifs', ['Modalités = réponses possibles ; effectif = nombre d’individus par modalité.']);
  const data = [['Couleur (modalité)', 'vert', 'rouge', 'bleu', 'jaune'], ['Effectif', '8', '12', '6', '4']];
  let b = tableEl(120, y + 25, [280, 120, 130, 120, 120], 62, data);
  b += txt(500, y + 205, '8 + 12 + 6 + 4 = 30 : la somme des effectifs = effectif total', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 245, s + b); })();
// S3 — tableau statistique complet
figs.u6f3 = (() => { const { s, y } = head('Le tableau statistique', ['Modalités, effectifs, total : l’enquête rangée en colonnes, prête à l’analyse.']);
  const data = [['Moyen de transport', 'Effectif', 'Fréquence'], ['à pied', '15', '15/25 = 0,60'], ['vélo', '6', '6/25 = 0,24'], ['taxi-be', '4', '4/25 = 0,16'], ['TOTAL', '25', '1,00']];
  let b = tableEl(180, y + 20, [280, 160, 220], 56, data);
  return svg(1000, y + 20 + 5 * 56 + 40, s + b); })();
// S4 — diagramme en bâtons
figs.u6f4 = (() => { const { s, y } = head('Le diagramme en bâtons', ['Un bâton par modalité ; la hauteur du bâton = l’effectif.']);
  const top = y + 20, Y0 = top + 260, X0 = 170, uw = 160, uh = 17;
  let b = arrow(X0 - 30, Y0, 870, Y0, '#333', 2.5) + arrow(X0 - 30, Y0, X0 - 30, top - 10, '#333', 2.5);
  [[0, 8, 'vert', GREEN], [1, 12, 'rouge', PINK2], [2, 6, 'bleu', '#1565C0'], [3, 4, 'jaune', OCRE]].forEach(([i, v, lab, c]) => {
    const x = X0 + i * uw;
    b += `<rect x="${x}" y="${Y0 - v * uh}" width="70" height="${v * uh}" fill="${c}" opacity="0.8"/>`;
    b += txt(x + 35, Y0 + 32, lab, 20, '#333', 'normal', 'middle') + txt(x + 35, Y0 - v * uh - 12, String(v), 21, c, 'bold', 'middle');
  });
  for (let v = 4; v <= 12; v += 4) b += seg(X0 - 38, Y0 - v * uh, X0 - 24, Y0 - v * uh, '#333', 2) + txt(X0 - 55, Y0 - v * uh + 7, String(v), 18, '#555', 'normal', 'middle');
  return svg(1000, Y0 + 70, s + b); })();
// S5 — diagramme circulaire
figs.u6f5 = (() => { const { s, y } = head('Le diagramme circulaire', ['Le disque entier = 100 % ; chaque secteur a un angle proportionnel à l’effectif.']);
  const cx = 320, cy = y + 190, r = 150;
  const parts = [[8, GREEN, 'vert'], [12, PINK2, 'rouge'], [6, '#1565C0', 'bleu'], [4, OCRE, 'jaune']];
  const tot = 30; let a0 = -Math.PI / 2, b = '';
  parts.forEach(([v, c, lab]) => {
    const a1 = a0 + v / tot * 2 * Math.PI;
    const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
    const large = (a1 - a0) > Math.PI ? 1 : 0;
    b += `<path d="M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z" fill="${c}" opacity="0.8" stroke="white" stroke-width="2"/>`;
    const am = (a0 + a1) / 2;
    b += txt(cx + (r + 45) * Math.cos(am), cy + (r + 45) * Math.sin(am) + 7, lab, 20, c, 'bold', 'middle');
    a0 = a1;
  });
  b += txt(720, cy - 60, 'angle d’un secteur :', 22, OCRE, 'bold', 'middle')
    + txt(720, cy - 25, '(effectif ÷ total) × 360°', 22, OCRE, 'bold', 'middle')
    + txt(720, cy + 30, 'rouge : 12/30 × 360° = 144°', 21, PINK2, 'bold', 'middle');
  return svg(1000, cy + r + 60, s + b); })();
// S6 — histogramme
figs.u6f6 = (() => { const { s, y } = head('L’histogramme : des classes collées', ['Pour des valeurs groupées en classes (tailles, âges), les rectangles se touchent.']);
  const top = y + 20, Y0 = top + 250, X0 = 180, uw = 140, uh = 20;
  let b = arrow(X0 - 30, Y0, 870, Y0, '#333', 2.5) + arrow(X0 - 30, Y0, X0 - 30, top - 5, '#333', 2.5);
  [[0, 4, '#90CAF9'], [1, 9, '#64B5F6'], [2, 11, '#42A5F5'], [3, 6, '#2196F3']].forEach(([i, v, c]) => {
    const x = X0 + i * uw;
    b += `<rect x="${x}" y="${Y0 - v * uh}" width="${uw}" height="${v * uh}" fill="${c}" stroke="white" stroke-width="2"/>`;
    b += txt(x + uw / 2, Y0 - v * uh - 12, String(v), 20, '#1565C0', 'bold', 'middle');
  });
  ['140', '145', '150', '155', '160'].forEach((lab, i) => { b += txt(X0 + i * uw, Y0 + 30, lab, 19, '#333', 'normal', 'middle'); });
  b += txt(525, Y0 + 65, 'tailles des élèves (cm) groupées en classes de 5 cm', 20, OCRE, 'bold', 'middle');
  return svg(1000, Y0 + 100, s + b); })();
// S7 — fréquence
figs.u6f7 = (() => { const { s, y } = head('La fréquence : l’effectif rapporté au total', ['fréquence = effectif ÷ effectif total — un nombre entre 0 et 1.']);
  const top = y + 25;
  let b = box(130, top + 20, 240, 90, '', '#E3F2FD', '#1565C0', 22) + box(430, top + 20, 240, 90, '', '#E8F5E9', GREEN, 22) + box(730, top + 20, 190, 90, '', '#FDE7EF', PINK2, 22);
  b += txt(250, top + 55, 'effectif', 21, '#1565C0', 'bold', 'middle') + txt(250, top + 90, '15 à pied', 21, '#1565C0', 'bold', 'middle')
    + txt(550, top + 55, 'total', 21, GREEN, 'bold', 'middle') + txt(550, top + 90, '25 élèves', 21, GREEN, 'bold', 'middle')
    + txt(825, top + 55, 'fréquence', 21, PINK2, 'bold', 'middle') + txt(825, top + 90, '0,60 = 60 %', 21, PINK2, 'bold', 'middle');
  b += txt(405, top + 70, '÷', 30, '#333', 'bold', 'middle') + txt(705, top + 70, '=', 30, '#333', 'bold', 'middle');
  b += txt(500, top + 165, 'la somme de toutes les fréquences vaut toujours 1 (ou 100 %)', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 200, s + b); })();
// S8 — moyenne pondérée
figs.u6f8 = (() => { const { s, y } = head('La moyenne d’une série', ['On multiplie chaque note par son effectif, on additionne, on divise par le total.']);
  const data = [['Note', '8', '10', '12', '15'], ['Effectif', '3', '5', '8', '4'], ['Note × eff.', '24', '50', '96', '60']];
  let b = tableEl(150, y + 20, [230, 115, 115, 115, 115], 56, data);
  b += txt(500, y + 240, 'moyenne = (24 + 50 + 96 + 60) ÷ 20 = 230 ÷ 20 = 11,5', 22, OCRE, 'bold', 'middle');
  return svg(1000, y + 280, s + b); })();
// S9 — probabilité dé
figs.u6f9 = (() => { const { s, y } = head('La probabilité en situation d’équiprobabilité', ['P(A) = nombre de cas favorables ÷ nombre de cas possibles.']);
  const top = y + 25, a = 120, x0 = 160, y0 = top + 30;
  let b = `<rect x="${x0}" y="${y0}" width="${a}" height="${a}" rx="18" fill="white" stroke="#333" stroke-width="3.5"/>`;
  [[0.5, 0.5]].forEach(() => {});
  [[0.3, 0.3], [0.7, 0.3], [0.3, 0.7], [0.7, 0.7], [0.5, 0.5]].forEach(([fx, fy]) => { b += dot(x0 + fx * a, y0 + fy * a, 10, '#333'); });
  b += txt(x0 + a / 2, y0 + a + 42, 'dé équilibré :', 19, '#555', 'normal', 'middle') + txt(x0 + a / 2, y0 + a + 68, '6 chances égales', 19, '#555', 'normal', 'middle');
  b += box(480, top + 30, 440, 110, '', '#FDE7EF', PINK2, 22);
  b += txt(700, top + 70, 'P(obtenir un 5) = 1/6', 23, PINK2, 'bold', 'middle')
    + txt(700, top + 110, 'P(nombre pair) = 3/6 = 1/2', 23, PINK2, 'bold', 'middle');
  b += txt(640, top + 200, 'la probabilité est toujours comprise entre 0 et 1', 22, OCRE, 'bold', 'middle');
  return svg(1000, top + 245, s + b); })();
// S10 — formes d'une probabilité
figs.u6f10 = (() => { const { s, y } = head('Trois écritures d’une même probabilité', ['1/4 = 0,25 = 25 % : fraction, décimal, pourcentage racontent la même chance.']);
  const top = y + 25;
  let b = box(130, top + 20, 220, 90, '1/4', '#E3F2FD', '#1565C0', 30)
    + box(400, top + 20, 220, 90, '0,25', '#E8F5E9', GREEN, 30)
    + box(670, top + 20, 220, 90, '25 %', '#FDE7EF', PINK2, 30);
  b += txt(375, top + 70, '=', 30, '#333', 'bold', 'middle') + txt(645, top + 70, '=', 30, '#333', 'bold', 'middle');
  b += txt(500, top + 165, 'fraction → décimal : diviser ; décimal → % : multiplier par 100', 21, OCRE, 'bold', 'middle');
  return svg(1000, top + 200, s + b); })();
// S11 — événement contraire
figs.u6f11 = (() => { const { s, y } = head('L’événement contraire', ['P(Ā) = 1 − P(A) : ce qui n’est pas A complète A jusqu’à 1.']);
  const cx = 300, cy = y + 170, r = 130;
  const aFrac = 1 / 4;
  const a0 = -Math.PI / 2, a1 = a0 + aFrac * 2 * Math.PI;
  const x0 = cx + r * Math.cos(a0), y0 = cy + r * Math.sin(a0), x1 = cx + r * Math.cos(a1), y1 = cy + r * Math.sin(a1);
  let b = `<path d="M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 0 1 ${x1} ${y1} Z" fill="${PINK2}" opacity="0.8"/>`;
  b += `<path d="M ${cx} ${cy} L ${x1} ${y1} A ${r} ${r} 0 1 1 ${x0} ${y0} Z" fill="#C8E6C9" stroke="none"/>`;
  b += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#555" stroke-width="2.5"/>`;
  b += txt(cx + 155, cy - 115, 'A : 1/4', 22, PINK2, 'bold', 'middle') + txt(cx - 60, cy + 60, 'Ā : 3/4', 22, GREEN, 'bold', 'middle');
  b += box(560, cy - 90, 370, 100, '', '#FFF3E0', OCRE, 22);
  b += txt(745, cy - 52, 'P(A) + P(Ā) = 1', 24, OCRE, 'bold', 'middle')
    + txt(745, cy - 14, 'P(Ā) = 1 − 1/4 = 3/4', 23, OCRE, 'bold', 'middle');
  return svg(1000, cy + r + 55, s + b); })();

const S = [
  {
    t: 'Identifier population, individu et caractère', comp: 'Traitement de données', theme: 'Vocabulaire statistique de base',
    goal: 'identifier la population, les individus et le caractère étudié dans une enquête',
    mat: 'Fiches d’enquête, journaux, cahier',
    revQ: 'Si on interroge toute la classe sur son fruit préféré, qui interroge-t-on et que demande-t-on ?',
    revRA: 'On interroge les élèves de la classe ; on demande le fruit préféré.',
    situation: 'Le délégué de classe prépare une enquête : « Quelle couleur pour le maillot du club ? » Avant de compter quoi que ce soit, trois questions s’imposent : qui interroge-t-on ? qui est chaque interrogé ? que demande-t-on ? La statistique commence par son vocabulaire.',
    def: 'En statistique, la population est l’ensemble étudié ; un individu est un élément de cette population ; le caractère est la propriété que l’on étudie sur chaque individu. Un caractère est qualitatif s’il s’exprime par des mots, quantitatif s’il s’exprime par des nombres.',
    autrement: 'population = le groupe entier ; individu = un membre du groupe ; caractère = la question posée à chacun.',
    concept: 'Malgré son nom, la population statistique n’est pas forcément humaine : l’ensemble des ampoules d’une usine, des zébus d’un marché ou des jours du mois peuvent former une population — un « individu » est alors une ampoule, un zébu, un jour ! Le caractère se classe en deux familles : qualitatif (couleur préférée, moyen de transport — des mots) et quantitatif (taille, nombre de frères et sœurs — des nombres). Cette distinction commande toute la suite : les diagrammes et les calculs possibles dépendent de la nature du caractère — on ne calcule pas la « moyenne des couleurs » !',
    synthese: 'population (ensemble), individu (élément), caractère (propriété étudiée) ; caractère qualitatif = mots, quantitatif = nombres ; la nature du caractère décide des outils.',
    method: ['Repérer QUI est étudié : la population et ses individus.', 'Repérer CE QU’on observe sur chacun : le caractère.', 'Classer le caractère : qualitatif (mots) ou quantitatif (nombres).'],
    exemple: 'Enquête sur les 30 élèves de la 8ᵉ : population = la classe ; individu = un élève ; caractère = couleur préférée (qualitatif) ou taille en cm (quantitatif).',
    erreur: 'Confondre population et caractère : dans « les tailles des élèves de la classe », la population est LA CLASSE (pas les tailles !) ; les tailles sont le caractère mesuré sur chaque individu.',
    saistu: 'Le mot « statistique » vient de l’État : les premiers recensements servaient à compter sujets et récoltes des royaumes ! Le recensement malgache de 2018 (RGPH-3) a dénombré 25,6 millions d’habitants — la plus grande enquête statistique jamais menée dans le pays.',
    exos: ['On étudie le moyen de transport des 25 élèves de la classe. a) Quelle est la population ? b) Qui est un individu ? d) Quel est le caractère ? e) Qualitatif ou quantitatif ?',
      'On mesure la masse de 60 sacs de riz d’un entrepôt. a) Population ? b) Individu ? d) Caractère ? e) Nature du caractère ?',
      'Classe chaque caractère (qualitatif / quantitatif) : a) la couleur des taxis ; b) le nombre de frères et sœurs ; d) le plat préféré ; e) la pointure.'],
    corr: ['a) les 25 élèves de la classe ; b) un élève ; d) le moyen de transport ; e) qualitatif.',
      'a) les 60 sacs ; b) un sac ; d) la masse ; e) quantitatif.',
      'a) qualitatif ; b) quantitatif ; d) qualitatif ; e) quantitatif.'],
    fig: 'u6f1'
  },
  {
    t: 'Dresser les modalités et les effectifs', comp: 'Traitement de données', theme: 'Modalités d’un caractère, effectifs',
    goal: 'lister les modalités d’un caractère et compter l’effectif de chacune',
    mat: 'Résultats d’enquête bruts, cahier, ardoises',
    revQ: 'Dans l’enquête « couleur du maillot », quelles réponses sont possibles ?',
    revRA: 'Vert, rouge, bleu, jaune… : les réponses proposées.',
    situation: 'L’enquête du délégué a donné 30 papiers : vert, rouge, rouge, bleu, vert… Une forêt de mots ! Pour y voir clair, on liste d’abord les réponses POSSIBLES, puis on compte combien de fois chacune revient. Modalités, puis effectifs : l’ordre du tri.',
    def: 'Les modalités d’un caractère sont les différentes valeurs ou réponses qu’il peut prendre. L’effectif d’une modalité est le nombre d’individus qui présentent cette modalité ; la somme des effectifs de toutes les modalités est l’effectif total de la population.',
    autrement: 'modalités = les cases du tri ; effectif = le nombre de papiers dans chaque case.',
    concept: 'Le dépouillement se fait au tableau de comptage : une ligne par modalité, un bâton par réponse, par paquets de cinq pour compter vite (IIII barré). Le contrôle de fin est obligatoire : la somme des effectifs doit redonner l’effectif total — 8 + 12 + 6 + 4 = 30 papiers, personne n’est perdu ni compté deux fois. Pour un caractère quantitatif, les modalités sont des nombres (0, 1, 2, 3 frères et sœurs…) et se rangent en ordre croissant. L’effectif le plus grand désigne la modalité dominante — le futur « gagnant » de l’enquête.',
    synthese: 'lister les modalités, compter par bâtons (paquets de 5), contrôler : somme des effectifs = effectif total.',
    method: ['Lister toutes les modalités rencontrées (sans doublon).', 'Dépouiller par bâtons, en paquets de cinq.', 'Vérifier : la somme des effectifs égale l’effectif total.'],
    exemple: '30 papiers : vert 8, rouge 12, bleu 6, jaune 4 ; contrôle 8 + 12 + 6 + 4 = 30 ✓ ; modalité dominante : rouge.',
    erreur: 'Oublier une modalité à zéro : si personne n’a voté « blanc » alors que c’était proposé, la ligne « blanc : 0 » existe quand même ! Une modalité peut avoir un effectif nul.',
    saistu: 'Le comptage par paquets de cinq bâtons est universel : on le retrouve chez les bergers, les marins… et les prisonniers des films ! Il limite les erreurs car l’œil humain sait reconnaître 5 d’un coup, mais pas 12.',
    exos: ['Réponses de 20 élèves sur leur sport : foot, foot, basket, course, foot, basket, foot, course, foot, foot, basket, foot, course, foot, basket, foot, foot, basket, course, foot. a) Liste les modalités. b) Effectif du foot ? d) Du basket et de la course ? e) Contrôle le total.',
      'Nombre de livres lus ce mois par 15 élèves : 0, 1, 2, 1, 0, 3, 1, 2, 1, 0, 1, 2, 1, 0, 1. a) Modalités (en ordre) ? b) Effectif de la modalité 1 ? d) Des modalités 0, 2 et 3 ? e) Contrôle.',
      'a) Qu’est-ce qu’une modalité d’effectif nul ? b) Donne un exemple. d) Quelle modalité domine l’enquête de l’exercice 1 ? e) Pourquoi compter par paquets de 5 ?'],
    corr: ['a) foot, basket, course ; b) 11 ; d) 5 et 4 ; e) 11 + 5 + 4 = 20 ✓.',
      'a) 0, 1, 2, 3 ; b) 7 ; d) 4, 3 et 1 ; e) 4 + 7 + 3 + 1 = 15 ✓.',
      'a) une réponse possible que personne n’a donnée ; b) « blanc : 0 » ; d) le foot ; e) moins d’erreurs, lecture rapide.'],
    fig: 'u6f2'
  },
  {
    t: 'Construire un tableau statistique', comp: 'Traitement de données', theme: 'Tableau statistique complet',
    goal: 'construire un tableau statistique ordonné avec modalités, effectifs et total',
    mat: 'Données d’enquêtes, règle, cahier',
    revQ: 'Que vérifie-t-on à la fin d’un dépouillement ?',
    revRA: 'Que la somme des effectifs égale l’effectif total.',
    situation: 'Le directeur demande les résultats de l’enquête transport « sous forme claire, sur une demi-page ». Trente papiers en vrac ne passeront pas ! Le tableau statistique — modalités en colonne, effectifs en face, total en bas — dit tout, d’un coup d’œil.',
    def: 'Un tableau statistique présente en lignes ou en colonnes les modalités du caractère, leurs effectifs (et souvent leurs fréquences), avec une ligne TOTAL qui récapitule l’effectif total. Il est la forme ordonnée et vérifiable des données brutes.',
    autrement: 'le tableau est la carte d’identité de l’enquête : chaque modalité a sa ligne, et le total signe le document.',
    concept: 'Les règles de l’art : un TITRE (qui, quoi, quand — « Transport des élèves de 8ᵉ, mars 2026 »), des colonnes nommées (modalité, effectif, fréquence), les modalités rangées (ordre croissant si nombres, du plus fréquent au moins fréquent si mots), et la ligne TOTAL qui verrouille. Le tableau prépare tous les traitements à venir : fréquences (effectif ÷ total), diagrammes (hauteurs ou angles), moyenne. Un tableau sans total est un tableau invérifiable ; un tableau sans titre est un tableau muet — les deux fautes coûtent cher dans une vraie publication.',
    synthese: 'titre + colonnes nommées + modalités rangées + ligne TOTAL : le tableau est la base vérifiable de tous les traitements.',
    method: ['Écrire le titre : population, caractère, date.', 'Remplir modalités et effectifs (rangés), ajouter la colonne fréquence si demandée.', 'Clore par la ligne TOTAL et contrôler la somme.'],
    exemple: 'Transport des 25 élèves : à pied 15, vélo 6, taxi-be 4 ; TOTAL 25 — titre, trois lignes, un total : le directeur est servi.',
    erreur: 'Oublier la ligne TOTAL : le lecteur ne peut plus vérifier ni calculer les fréquences ! Le total n’est pas une décoration, c’est la clé de contrôle du tableau.',
    saistu: 'L’INSTAT (Institut National de la Statistique de Madagascar) publie chaque année des centaines de tableaux : prix du riz, pluies, scolarisation… Tous obéissent aux mêmes règles que le tien : titre, colonnes nommées, total. La rigueur du tableau est mondiale !',
    exos: ['Enquête fruits (30 élèves) : mangue 14, letchi 9, banane 7. a) Propose un titre. b) Dresse le tableau avec total. d) Quelle modalité domine ? e) Vérifie le total.',
      'Nombre de frères et sœurs (20 élèves) : 0 → 3 ; 1 → 7 ; 2 → 6 ; 3 → 4. a) Dans quel ordre ranger les modalités ? b) Dresse le tableau. d) Effectif total ? e) Combien d’élèves ont au moins 2 frères et sœurs ?',
      'Repère les fautes de ce tableau : « mangue 14, letchi 9, banane 7 » sans titre ni total. a) Faute n° 1 ? b) Faute n° 2 ? d) Pourquoi le total est-il indispensable ? e) Réécris le tableau corrigé.'],
    corr: ['a) « Fruit préféré des 30 élèves de 8ᵉ » ; b) tableau à 3 lignes + TOTAL 30 ; d) la mangue ; e) 14 + 9 + 7 = 30 ✓.',
      'a) ordre croissant : 0, 1, 2, 3 ; b) tableau ; d) 20 ; e) 6 + 4 = 10.',
      'a) pas de titre ; b) pas de ligne TOTAL ; d) il permet le contrôle et les fréquences ; e) tableau complet avec titre et TOTAL 30.'],
    fig: 'u6f3'
  },
  {
    t: 'Construire un diagramme en bâtons', comp: 'Traitement de données', theme: 'Diagramme en bâtons',
    goal: 'construire et lire un diagramme en bâtons à partir d’un tableau statistique',
    mat: 'Papier quadrillé, règle, crayons de couleur',
    revQ: 'Dans le tableau des couleurs, quel est l’effectif du rouge ? du jaune ?',
    revRA: '12 ; 4.',
    situation: 'Les chiffres du tableau sont exacts mais muets : il faut les lire un à un. Dessine un bâton par couleur, haut comme son effectif… et le verdict saute aux yeux : le rouge écrase le match ! L’image parle plus vite que le nombre.',
    def: 'Un diagramme en bâtons représente chaque modalité par un bâton (ou une barre) dont la hauteur est proportionnelle à l’effectif, mesurée sur un axe gradué régulièrement. Les bâtons, de même largeur, sont séparés les uns des autres.',
    autrement: 'chaque modalité lève son bâton : plus l’effectif est grand, plus le bâton monte.',
    concept: 'La construction suit quatre règles : un axe vertical gradué RÉGULIÈREMENT (de 2 en 2, de 5 en 5… jamais au hasard), des bâtons de MÊME largeur, des espaces entre les bâtons (le caractère est discret : les modalités ne se touchent pas), et des étiquettes sous chaque bâton. La lecture inverse est aussi importante que le tracé : retrouver un effectif en suivant le sommet du bâton jusqu’à l’axe. Œil critique : un axe qui ne démarre pas à zéro ou une graduation irrégulière déforment la comparaison — c’est la manipulation graphique la plus répandue dans les publicités !',
    synthese: 'axe gradué régulier partant de 0, bâtons de même largeur séparés, étiquettes ; hauteur = effectif ; méfiance envers les axes tronqués.',
    method: ['Tracer et graduer l’axe vertical (régulier, départ à 0).', 'Dresser un bâton par modalité, hauteur = effectif, largeurs égales.', 'Étiqueter modalités et axe ; donner un titre.'],
    exemple: 'Couleurs : vert 8, rouge 12, bleu 6, jaune 4 → quatre bâtons, le rouge culmine à 12.',
    erreur: 'Graduer l’axe au gré des valeurs (4, 6, 8, 12 serrés n’importe comment) : les hauteurs ne sont plus proportionnelles et le diagramme MENT. La graduation se fait à intervalles égaux, toujours.',
    saistu: 'Florence Nightingale, infirmière et statisticienne, convainquit l’armée britannique de réformer ses hôpitaux grâce à… des diagrammes ! Ses graphiques montraient que les soldats mouraient plus de maladies que de blessures. Un bon diagramme peut sauver des vies.',
    exos: ['Avec le tableau : vert 8, rouge 12, bleu 6, jaune 4. a) Que vaut une graduation « de 2 en 2 » pour l’axe ? b) Quelle est la hauteur du bâton bleu ? d) Quel bâton est le plus haut ? e) Les bâtons doivent-ils se toucher ?',
      'Lis un diagramme : bâtons à 15 (à pied), 6 (vélo), 4 (taxi-be). a) Effectif du vélo ? b) Mode de transport dominant ? d) Effectif total ? e) Combien d’élèves ne viennent pas à pied ?',
      'Un diagramme publicitaire démarre son axe à 10 au lieu de 0 : les ventes « A : 12 » et « B : 11 » semblent du simple au double ! a) Pourquoi ? b) Quelle règle est violée ? d) Redessine honnêtement (hauteurs 12 et 11 depuis 0). e) Que conclure sur les ventes réelles ?'],
    corr: ['a) 0, 2, 4, 6, 8, 10, 12 ; b) 6 ; d) le rouge ; e) non, séparés.',
      'a) 6 ; b) à pied ; d) 25 ; e) 10.',
      'a) l’axe tronqué n’affiche que la partie 10-12 : l’écart paraît énorme ; b) le départ à zéro ; d) deux bâtons presque égaux ; e) elles sont très proches (12 contre 11).'],
    fig: 'u6f4'
  },
  {
    t: 'Construire un diagramme circulaire', comp: 'Traitement de données', theme: 'Diagramme circulaire : angles proportionnels',
    goal: 'construire un diagramme circulaire en calculant l’angle de chaque secteur',
    mat: 'Compas, rapporteur, calculatrice, crayons de couleur',
    revQ: 'Combien de degrés dans un tour complet ? un demi-tour ?',
    revRA: '360° ; 180°.',
    situation: 'Pour montrer les PARTS plutôt que les scores, rien ne vaut le « camembert » : le disque entier représente toute la classe, et chaque couleur découpe sa part de gâteau. Reste à calculer l’angle de chaque part — au degré près.',
    def: 'Un diagramme circulaire représente les effectifs par des secteurs de disque dont les angles sont proportionnels aux effectifs : angle d’une modalité = (effectif ÷ effectif total) × 360°. La somme des angles vaut 360°.',
    autrement: 'chaque modalité reçoit sa part du gâteau : sa fraction du total, convertie en degrés.',
    concept: 'Le calcul des angles est une proportionnalité pure : le rouge pèse 12/30 du total, donc 12/30 × 360° = 144°. Le tableau des angles se dresse AVANT de toucher le compas : vert 96°, rouge 144°, bleu 72°, jaune 48° — contrôle : 96 + 144 + 72 + 48 = 360° ✓. Construction : tracer le disque, un rayon de départ, puis reporter les angles au rapporteur de proche en proche. Le circulaire excelle à montrer les parts du tout (la moitié, le quart se VOIENT) ; le bâton excelle à comparer les scores. Choisir le bon diagramme, c’est déjà de l’analyse.',
    synthese: 'angle = effectif/total × 360° ; dresser le tableau des angles et contrôler 360° avant de tracer ; circulaire = parts du tout, bâtons = comparaison.',
    method: ['Calculer l’angle de chaque modalité : effectif ÷ total × 360°.', 'Contrôler que la somme des angles fait 360°.', 'Tracer le disque, reporter les angles au rapporteur, colorier et légender.'],
    exemple: 'Rouge 12/30 → 144° ; vert 8/30 → 96° ; bleu 6/30 → 72° ; jaune 4/30 → 48° ; total 360° ✓.',
    erreur: 'Reporter les EFFECTIFS comme angles : un secteur de 12° pour le rouge ?! Les effectifs doivent d’abord passer par la conversion × 360/total.',
    saistu: 'Les Français l’appellent « camembert », les Anglais « pie chart » (diagramme-tarte), les Brésiliens « pizza » ! Tous les peuples y voient de la nourriture… La gourmandise est peut-être la chose du monde la mieux partagée — comme les secteurs du disque.',
    exos: ['Classe de 30 : vert 8, rouge 12, bleu 6, jaune 4. a) Angle du vert ? b) Du rouge ? d) Du bleu et du jaune ? e) Contrôle la somme.',
      'Enquête de 20 élèves : foot 11, basket 5, course 4. a) Angle du foot ? b) Du basket ? d) De la course ? e) Quel secteur dépasse le demi-disque ?',
      'Un circulaire montre : riz 50 %, manioc 25 %, maïs 25 % des parcelles. a) Angle du riz ? b) Du manioc ? d) Que « voit-on » immédiatement sur ce diagramme ? e) Quel diagramme choisirais-tu pour comparer les rendements en kg : circulaire ou bâtons ? Pourquoi ?'],
    corr: ['a) 96° ; b) 144° ; d) 72° et 48° ; e) 360° ✓.',
      'a) 198° ; b) 90° ; d) 72° ; e) le foot (198° supérieur à 180°).',
      'a) 180° ; b) 90° ; d) le riz occupe la moitié des parcelles ; e) bâtons : on compare des valeurs, pas des parts d’un tout.'],
    fig: 'u6f5'
  },
  {
    t: 'Construire un histogramme', comp: 'Traitement de données', theme: 'Histogramme : caractère groupé en classes',
    goal: 'grouper un caractère quantitatif en classes et construire l’histogramme correspondant',
    mat: 'Toise ou mètre-ruban, papier quadrillé, règle',
    revQ: 'Pourquoi les bâtons d’un diagramme sont-ils séparés ?',
    revRA: 'Parce que les modalités sont distinctes, sans continuité entre elles.',
    situation: 'On mesure les 30 élèves : 142 cm, 155, 149, 161… presque aucune valeur ne se répète ! Un bâton par taille donnerait 28 bâtons de hauteur 1 — illisible. La solution : grouper les tailles en CLASSES (140-145, 145-150…) et coller les rectangles : voici l’histogramme.',
    def: 'Un histogramme représente un caractère quantitatif groupé en classes d’égale largeur : chaque classe est figurée par un rectangle dont la hauteur est proportionnelle à son effectif ; les rectangles sont accolés car les classes se suivent sans interruption.',
    autrement: 'on range les valeurs dans des tiroirs qui se suivent, puis on dessine les tiroirs côte à côte, remplis à hauteur de leur effectif.',
    concept: 'La démarche : choisir des classes d’égale largeur couvrant toutes les valeurs (de 140 à 160 par pas de 5 cm), ranger chaque mesure dans sa classe — convention : la borne gauche est incluse, la droite exclue, ainsi 150 cm va dans [150 ; 155[ —, dresser le tableau des effectifs par classe, tracer les rectangles ACCOLÉS. L’histogramme révèle la forme de la répartition : où se masse la population, où sont les extrêmes. Le regroupement a un prix : on perd le détail des valeurs individuelles — compromis classique entre lisibilité et précision.',
    synthese: 'classes d’égale largeur, borne gauche incluse ; rectangles accolés, hauteur = effectif ; l’histogramme montre la forme de la répartition.',
    method: ['Choisir des classes d’égale largeur couvrant toutes les valeurs.', 'Ranger chaque valeur (borne gauche incluse) et dresser le tableau.', 'Tracer les rectangles accolés, axe gradué, titre et unités.'],
    exemple: 'Tailles : [140;145[ → 4 ; [145;150[ → 9 ; [150;155[ → 11 ; [155;160[ → 6 ; total 30 ; le gros de la classe se situe entre 145 et 155 cm.',
    erreur: 'Espacer les rectangles comme des bâtons : les classes se touchent dans la réalité (149,9 cm et 150 cm sont voisins !), les rectangles se touchent donc aussi. Séparés = bâtons ; accolés = histogramme.',
    saistu: 'La plupart des mesures naturelles — tailles, masses, pluies annuelles — dessinent des histogrammes en cloche : beaucoup au centre, peu aux extrêmes. Cette « courbe en cloche », étudiée par Gauss, est si universelle qu’elle figurait sur les billets de 10 marks allemands !',
    exos: ['Avec les classes [140;145[, [145;150[, [150;155[, [155;160[ : a) dans quelle classe va 150 cm ? b) et 144,5 cm ? d) et 155 cm ? e) pourquoi cette convention de bornes ?',
      'Tailles de 30 élèves : effectifs 4, 9, 11, 6. a) Quelle classe domine ? b) Combien d’élèves sous 150 cm ? d) Au moins 150 cm ? e) Contrôle le total.',
      'Pluies mensuelles (mm) à Antananarivo sur 12 mois : 280, 250, 160, 50, 20, 8, 8, 10, 15, 60, 170, 290. a) Propose des classes de largeur 100. b) Dresse les effectifs. d) Quelle classe domine ? e) Que raconte cet histogramme sur le climat ?'],
    corr: ['a) [150;155[ ; b) [140;145[ ; d) [155;160[ ; e) chaque valeur doit avoir UNE seule classe.',
      'a) [150;155[ ; b) 13 ; d) 17 ; e) 4 + 9 + 11 + 6 = 30 ✓.',
      'a) [0;100[, [100;200[, [200;300[ ; b) 7, 2, 3 ; d) [0;100[ ; e) une longue saison sèche et quelques mois très arrosés : le climat des hautes terres.'],
    fig: 'u6f6'
  },
  {
    t: 'Calculer la fréquence d’une série', comp: 'Traitement de données', theme: 'Fréquence : effectif ÷ effectif total',
    goal: 'calculer et interpréter les fréquences d’une série statistique',
    mat: 'Tableaux d’enquêtes, calculatrices, cahier',
    revQ: 'Dans la classe A, 15 élèves sur 25 viennent à pied. Quelle fraction cela fait-il ?',
    revRA: '15/25 = 3/5.',
    situation: 'Classe A : 15 élèves à pied sur 25. Classe B : 18 sur 36. Qui marche le plus ? 18 dépasse 15… mais B est deux fois plus nombreuse ! Pour comparer des groupes de tailles différentes, l’effectif brut ment : il faut la fréquence.',
    def: 'La fréquence d’une modalité est le quotient de son effectif par l’effectif total : fréquence = effectif ÷ total. C’est un nombre entre 0 et 1, exprimable en fraction, en décimal ou en pourcentage ; la somme des fréquences vaut toujours 1.',
    autrement: 'la fréquence remet tous les groupes sur la même base : « sur 1 » ou « sur 100 » au lieu de « sur 25 » ou « sur 36 ».',
    concept: 'La fréquence est l’outil de la COMPARAISON équitable : A → 15/25 = 0,60 ; B → 18/36 = 0,50 — la classe A marche davantage, malgré son effectif brut inférieur ! Les trois écritures (3/5, 0,60, 60 %) se convertissent à volonté : division pour passer en décimal, × 100 pour le pourcentage. Deux contrôles permanents : chaque fréquence reste entre 0 et 1, et leur somme fait exactement 1 (ou 100 %) — un total de 98 % ou 103 % trahit une erreur de calcul ou d’arrondi à signaler.',
    synthese: 'fréquence = effectif ÷ total ∈ [0 ; 1] ; trois écritures équivalentes ; somme des fréquences = 1 ; la fréquence permet de comparer des populations de tailles différentes.',
    method: ['Diviser chaque effectif par l’effectif total.', 'Exprimer dans la forme demandée (fraction, décimal, %).', 'Contrôler : somme = 1 (ou 100 %) ; comparer les groupes PAR leurs fréquences.'],
    exemple: 'A : 15/25 = 60 % ; B : 18/36 = 50 % → A marche plus « en proportion » ; contrôle A : 0,60 + 0,24 + 0,16 = 1 ✓.',
    erreur: 'Comparer les effectifs bruts de groupes inégaux : « 18 supérieur à 15, donc B marche plus ». Faux : rapportés aux totaux, 50 % contre 60 % ! Seule la fréquence met les groupes à égalité.',
    saistu: 'Les sondages nationaux n’interrogent que 1 000 personnes sur des millions… et publient des fréquences : « 62 % des Malgaches préfèrent le riz au maïs ». La magie des fréquences : bien choisie, une petite population photographie la grande !',
    exos: ['Transport (25 élèves) : à pied 15, vélo 6, taxi-be 4. a) Fréquence « à pied » en décimal ? b) En % ? d) Fréquences du vélo et du taxi-be en % ? e) Contrôle la somme.',
      'Classe B (36 élèves) : à pied 18, vélo 9, taxi-be 9. a) Fréquence « à pied » ? b) Compare avec la classe A (60 %). d) Fréquences vélo et taxi-be ? e) Quelle classe utilise le plus le vélo, en proportion ?',
      'Une fréquence peut-elle valoir : a) 0 ? b) 1 ? d) 1,2 ? e) La somme des fréquences d’une série peut-elle faire 0,97 — que signalerait ce résultat ?'],
    corr: ['a) 0,60 ; b) 60 % ; d) 24 % et 16 % ; e) 60 + 24 + 16 = 100 % ✓.',
      'a) 0,50 = 50 % ; b) A marche plus en proportion ; d) 25 % et 25 % ; e) la B (25 % contre 24 %).',
      'a) oui : modalité d’effectif nul ; b) oui : toute la population ; d) non : jamais au-dessus de 1 ; e) une erreur de calcul ou des arrondis à rattraper.'],
    fig: 'u6f7'
  },
  {
    t: 'Calculer la moyenne d’une série', comp: 'Traitement de données', theme: 'Moyenne simple et moyenne pondérée',
    goal: 'calculer la moyenne d’une série, y compris pondérée par les effectifs',
    mat: 'Relevés de notes, calculatrices, cahier',
    revQ: 'Calcule (8 + 12 + 10) ÷ 3.',
    revRA: '10.',
    situation: 'Voici les 20 notes du contrôle, rangées : trois 8, cinq 10, huit 12, quatre 15. Quelle est la note « typique » de la classe ? Additionner les 20 notes une à une ? Trop long ! La moyenne pondérée multiplie chaque note par son effectif : rapide et exact.',
    def: 'La moyenne d’une série est la somme de toutes les valeurs divisée par l’effectif total. Lorsque les valeurs sont données avec leurs effectifs, la moyenne pondérée se calcule ainsi : moyenne = (somme des valeur × effectif) ÷ effectif total.',
    autrement: 'la moyenne répartit le total équitablement : « si tout le monde avait pareil, chacun aurait la moyenne ».',
    concept: 'Le calcul pondéré organise tout en tableau : une ligne valeur × effectif (8×3 = 24, 10×5 = 50, 12×8 = 96, 15×4 = 60), la somme 230, la division par l’effectif total 20 → moyenne 11,5. Deux contrôles de bon sens : la moyenne tombe TOUJOURS entre la plus petite et la plus grande valeur ; et elle penche vers les valeurs les plus nombreuses. Finesse à connaître : la moyenne n’est pas forcément une valeur de la série (aucun élève n’a 11,5 !) et elle est sensible aux extrêmes — un seul 0 peut faire chuter toute une moyenne, c’est sa force et sa faiblesse.',
    synthese: 'moyenne pondérée = Σ(valeur × effectif) ÷ total ; toujours entre min et max ; sensible aux valeurs extrêmes ; pas forcément une valeur de la série.',
    method: ['Multiplier chaque valeur par son effectif.', 'Additionner ces produits, puis diviser par l’effectif total.', 'Contrôler : le résultat est entre la plus petite et la plus grande valeur.'],
    exemple: '(8×3 + 10×5 + 12×8 + 15×4) ÷ 20 = 230 ÷ 20 = 11,5.',
    erreur: 'Diviser par le nombre de modalités au lieu de l’effectif total : (8 + 10 + 12 + 15) ÷ 4 = 11,25 ignore que les 12 sont huit fois plus nombreux que prévu ! On divise par 20, le nombre d’élèves.',
    saistu: 'La taille moyenne, la pluie moyenne, le revenu moyen… la moyenne est partout, mais elle cache les écarts : un milliardaire entrant dans un bus fait exploser le « revenu moyen » des passagers sans enrichir personne ! Les statisticiens la complètent toujours par d’autres indicateurs.',
    exos: ['Notes : trois 8, cinq 10, huit 12, quatre 15. a) Calcule les produits note × effectif. b) Leur somme ? d) La moyenne ? e) La moyenne est-elle une note obtenue par un élève ?',
      'Relevé de masses de 10 sacs (kg) : quatre sacs de 48, cinq de 50, un de 62. a) Moyenne ? b) Est-elle entre min et max ? d) Sans le sac de 62, la moyenne devient… ? e) Que montre cette comparaison ?',
      'La moyenne de 5 notes est 12. a) Quelle est la somme des 5 notes ? b) Une 6ᵉ note de 18 arrive : nouvelle somme ? d) Nouvelle moyenne ? e) Pour remonter à 14 de moyenne sur 7 notes, que faut-il à la 7ᵉ ?'],
    corr: ['a) 24, 50, 96, 60 ; b) 230 ; d) 11,5 ; e) non : aucun élève n’a 11,5 !',
      'a) (192 + 250 + 62) ÷ 10 = 50,4 kg ; b) oui (48 ≤ 50,4 ≤ 62) ; d) 442 ÷ 9 ≈ 49,1 kg ; e) un seul sac lourd tire la moyenne vers le haut.',
      'a) 60 ; b) 78 ; d) 13 ; e) 7 × 14 − 78 = 20 : impossible si les notes sont sur 20… sauf un 20 parfait !'],
    fig: 'u6f8'
  },
  {
    t: 'Calculer une probabilité', comp: 'Traitement de données', theme: 'Probabilité en situation d’équiprobabilité',
    goal: 'calculer la probabilité d’un événement quand tous les cas sont équiprobables',
    mat: 'Dés, pièces, sachets de jetons colorés, cahier',
    revQ: 'Un dé a combien de faces ? Ont-elles toutes la même chance ?',
    revRA: '6 faces ; oui, si le dé est équilibré.',
    situation: 'Avant de lancer le dé du jeu de Fanorona-dés, Naina parie sur le 5. Quelle chance a-t-il ? Une face gagnante sur six faces possibles, toutes égales : une chance sur six. La probabilité vient de naître — avant même le lancer !',
    def: 'Lorsque tous les résultats possibles d’une expérience ont la même chance de se produire (équiprobabilité), la probabilité d’un événement A est : P(A) = nombre de cas favorables ÷ nombre de cas possibles. P(A) est toujours compris entre 0 et 1.',
    autrement: 'on compte les issues qui font gagner, on divise par toutes les issues possibles : c’est la part de chance.',
    concept: 'Le calcul suit trois comptages : les cas POSSIBLES (6 faces), les cas FAVORABLES à l’événement (« nombre pair » : 2, 4, 6, soit 3 cas), le quotient P = 3/6 = 1/2. Les bornes ont un sens : P = 0 pour l’impossible (obtenir 7 avec un dé), P = 1 pour le certain (obtenir entre 1 et 6) ; entre les deux, plus P est proche de 1, plus l’événement est probable. Condition de validité absolue : l’ÉQUIPROBABILITÉ — un dé pipé ou un sachet où les jetons ont des tailles différentes ruinent la formule. La probabilité prédit le long terme, pas le prochain lancer : sur 600 lancers, ENVIRON 100 cinq, mais aucune promesse pour le prochain !',
    synthese: 'P(A) = favorables ÷ possibles, si équiprobabilité ; P ∈ [0 ; 1] ; 0 = impossible, 1 = certain ; prédiction du long terme, jamais du coup suivant.',
    method: ['Compter tous les cas possibles (vérifier l’équiprobabilité).', 'Compter les cas favorables à l’événement.', 'Diviser, simplifier, situer le résultat entre 0 et 1.'],
    exemple: 'Dé : P(5) = 1/6 ; P(pair) = 3/6 = 1/2 ; P(moins de 7) = 6/6 = 1 ; P(7) = 0.',
    erreur: 'Appliquer la formule sans équiprobabilité : « il pleuvra ou non, donc P(pluie) = 1/2 » ! Les deux issues n’ont pas la même chance — la formule exige des cas équilibrés, comme les faces d’un dé honnête.',
    saistu: 'La théorie des probabilités est née en 1654 d’une correspondance entre Pascal et Fermat… sur des questions de jeux d’argent ! Trois siècles plus tard, elle gouverne les assurances, la météo, la médecine et les files d’attente. Le hasard a ses lois.',
    exos: ['Un dé équilibré. a) P(obtenir 3) ? b) P(obtenir un nombre pair) ? d) P(obtenir au moins 5) ? e) P(obtenir 9) ?',
      'Un sachet contient 4 jetons rouges, 3 bleus, 5 verts, identiques au toucher. a) Combien de cas possibles ? b) P(rouge) ? d) P(vert) ? e) P(rouge ou bleu) ?',
      'Une roue équilibrée porte les nombres 1 à 10. a) P(nombre à un chiffre) ? b) P(multiple de 3) ? d) P(plus grand que 10) ? e) Peut-on garantir un multiple de 3 au prochain tour si P = 3/10 ?'],
    corr: ['a) 1/6 ; b) 1/2 ; d) 2/6 = 1/3 ; e) 0.',
      'a) 12 ; b) 4/12 = 1/3 ; d) 5/12 ; e) 7/12.',
      'a) 9/10 ; b) 3/10 (3, 6, 9) ; d) 0 ; e) non : la probabilité prédit la tendance, pas le coup suivant.'],
    fig: 'u6f9'
  },
  {
    t: 'Exprimer une probabilité sous différentes formes', comp: 'Traitement de données', theme: 'Probabilité : fraction, décimal, pourcentage',
    goal: 'convertir une probabilité entre fraction, écriture décimale et pourcentage',
    mat: 'Cartes de conversions, calculatrices, cahier',
    revQ: 'Écris 1/2 en décimal puis en pourcentage.',
    revRA: '0,5 ; 50 %.',
    situation: 'La météo annonce « 25 % de risque de pluie », le prof écrit P = 1/4, la calculatrice affiche 0,25. Trois langages… pour la même chance ! Savoir jongler entre les trois, c’est comprendre tous les bulletins, tous les énoncés, toutes les machines.',
    def: 'Une probabilité peut s’écrire en fraction (1/4), en nombre décimal (0,25) ou en pourcentage (25 %) : les trois formes désignent le même nombre. On passe de la fraction au décimal par division, du décimal au pourcentage en multipliant par 100, et réciproquement.',
    autrement: 'trois costumes pour le même nombre : la fraction pour le calcul, le décimal pour comparer, le pourcentage pour parler.',
    concept: 'Les conversions sont des allers-retours mécaniques : 3/4 → 3 ÷ 4 = 0,75 → 75 % ; en sens inverse, 60 % → 0,60 → 60/100 = 3/5. Chaque forme a son terrain d’excellence : la FRACTION reste exacte (1/3 vaut mieux que 0,333…), le DÉCIMAL se compare d’un coup d’œil (0,375 contre 0,4 : qui est plus probable ?), le POURCENTAGE parle au public (« 75 % de chances » est limpide pour tous). Les bornes se traduisent dans chaque langue : de 0 à 1, de 0 % à 100 % — une « probabilité de 140 % » est un non-sens à dénoncer.',
    synthese: 'fraction ÷ → décimal × 100 → % (et retours) ; fraction = exactitude, décimal = comparaison, % = communication ; bornes : 0-1 ou 0-100 %.',
    method: ['Pour le décimal : effectuer la division de la fraction.', 'Pour le % : multiplier le décimal par 100 (et inversement ÷ 100).', 'Choisir la forme adaptée : calcul, comparaison ou communication.'],
    exemple: '1/4 = 0,25 = 25 % ; 7/10 = 0,7 = 70 % ; 5 % = 0,05 = 1/20.',
    erreur: 'Écrire 1/4 = 25 (sans le %) ou 0,25 % au lieu de 25 % : les deux fautes changent la chance d’un facteur 100 ! Le symbole % N’est PAS décoratif : il signifie « ÷ 100 ».',
    saistu: 'Le symbole % vient de l’italien per cento (« pour cent »), déformé au fil des siècles de écritures marchandes : p. 100, p. cº, puis les deux ronds séparés d’une barre. Les commerçants de la Renaissance écrivaient déjà tes probabilités !',
    exos: ['Convertis en décimal puis en % : a) 1/2 ; b) 3/4 ; d) 1/5 ; e) 7/20.',
      'Convertis en fraction irréductible : a) 0,5 ; b) 30 % ; d) 0,85 ; e) 4 %.',
      'Range par ordre croissant de chance : a) P₁ = 2/5 ; b) P₂ = 0,45 ; d) P₃ = 35 % ; e) donne le classement final et la forme que tu as utilisée pour comparer.'],
    corr: ['a) 0,5 ; 50 % ; b) 0,75 ; 75 % ; d) 0,2 ; 20 % ; e) 0,35 ; 35 %.',
      'a) 1/2 ; b) 3/10 ; d) 17/20 ; e) 1/25.',
      'a) 0,40 ; b) 0,45 ; d) 0,35 ; e) P₃ < P₁ < P₂, comparés en décimaux.'],
    fig: 'u6f10'
  },
  {
    t: 'Utiliser l’événement contraire', comp: 'Traitement de données', theme: 'Événement contraire : P(Ā) = 1 − P(A)',
    goal: 'définir l’événement contraire et utiliser la relation P(Ā) = 1 − P(A)',
    mat: 'Dés, jetons, situations à trier, cahier',
    revQ: 'P(obtenir 6) avec un dé ? Et la somme de toutes les probabilités des faces ?',
    revRA: '1/6 ; 1.',
    situation: 'Quelle est la probabilité de NE PAS obtenir 6 ? On pourrait compter les cas 1, 2, 3, 4, 5… ou réfléchir à l’envers : toute la chance (1) moins la chance du 6 (1/6) : il reste 5/6. L’événement contraire calcule en une soustraction ce qui demanderait un long comptage !',
    def: 'L’événement contraire de A, noté Ā, est l’événement qui se réalise exactement quand A ne se réalise pas. Les probabilités de A et de son contraire se complètent : P(A) + P(Ā) = 1, d’où P(Ā) = 1 − P(A).',
    autrement: 'A et son contraire se partagent TOUTE la chance : ce que l’un n’a pas, l’autre l’a.',
    concept: 'Le contraire se définit par la négation exacte : « obtenir 6 » ↔ « ne pas obtenir 6 » ; « au moins un » ↔ « aucun » ; « tous » ↔ « au moins un manque ». Attention aux faux contraires : le contraire de « gagner » n’est pas « perdre » s’il existe le match nul ! La formule P(Ā) = 1 − P(A) devient une stratégie de calcul : quand l’événement direct est compliqué (« au moins un 6 en deux lancers » : beaucoup de cas), son contraire est souvent simple (« aucun 6 » : un seul type de cas). Le détour par le contraire est l’une des plus belles ruses des probabilités.',
    synthese: 'Ā = négation exacte de A ; P(Ā) = 1 − P(A) ; stratégie : calculer le contraire quand il est plus simple (« au moins un » ↔ « aucun »).',
    method: ['Formuler le contraire exact de l’événement (négation complète).', 'Calculer la probabilité la plus facile des deux.', 'Conclure par P(Ā) = 1 − P(A).'],
    exemple: 'P(pas de 6) = 1 − 1/6 = 5/6 ; P(au moins un jeton non rouge) = 1 − P(tous rouges).',
    erreur: 'Prendre pour contraire un simple « opposé d’ambiance » : contraire de « pair » = « impair » ✓, mais contraire de « plus grand que 4 » = « plus petit que 4 » ✗ — il manque le 4 ! Le contraire exact est « inférieur ou égal à 4 ».',
    saistu: 'Les assureurs vivent de l’événement contraire : pour fixer la prime d’une assurance récolte, ils calculent P(pas de cyclone) et complètent. Les probabilités des contraires valent des milliards — et protègent des millions de paysans.',
    exos: ['Un dé équilibré. a) Formule le contraire de « obtenir 6 ». b) P(obtenir 6) ? d) P(ne pas obtenir 6) ? e) Vérifie que la somme fait 1.',
      'P(pluie demain) = 0,3. a) Formule l’événement contraire. b) Sa probabilité ? d) Même question pour P(gagner au tirage) = 2 % ; e) et pour P(germination d’une graine) = 7/8.',
      'Donne le contraire EXACT : a) « obtenir un nombre pair » ; b) « obtenir au moins 3 » ; d) « tirer un jeton rouge » (sachet rouge/bleu/vert) ; e) « au moins une fille dans le groupe ».'],
    corr: ['a) « ne pas obtenir 6 » ; b) 1/6 ; d) 5/6 ; e) 1/6 + 5/6 = 1 ✓.',
      'a) « pas de pluie demain » ; b) 0,7 ; d) 98 % ; e) 1/8.',
      'a) « obtenir un nombre impair » ; b) « obtenir au plus 2 » (1 ou 2) ; d) « tirer un jeton bleu ou vert » ; e) « aucune fille dans le groupe ».'],
    fig: 'u6f11'
  }
];

const unit6 = {
  no: 6, roman: 'VI', name: 'Traitement de données',
  rag: 'démontrer une compréhension des séries statistiques et de la probabilité d’événements équiprobables pour décrire, représenter et prévoir.',
  valeurs: 'pensée critique et responsabilité',
  sessions: S,
  revision: {
    table: [
      ['Vocabulaire', 'Population, individu, caractère (qualitatif / quantitatif)', 'Décrire proprement une enquête'],
      ['Modalités et tableaux', 'Effectifs, total de contrôle, titre', 'Dépouiller et présenter des données'],
      ['Diagrammes', 'Bâtons (séparés), circulaire (angles ∝), histogramme (classes accolées)', 'Choisir et construire la bonne image'],
      ['Fréquence', 'Effectif ÷ total ; somme = 1 ; comparer des groupes inégaux', 'Comparer équitablement'],
      ['Moyenne', 'Σ(valeur × effectif) ÷ total ; entre min et max', 'Résumer une série en un nombre'],
      ['Probabilité', 'P = favorables/possibles ; 3 écritures ; P(Ā) = 1 − P(A)', 'Mesurer et retourner la chance']
    ],
    questions: [
      'On étudie la pointure des 28 élèves : population, individu, caractère et sa nature ?',
      'Enquête (40 élèves) : riz 22, maïs 10, manioc 8. Donne les fréquences en % et l’angle du riz dans un circulaire.',
      'Notes : deux 7, six 11, huit 13, quatre 16. Calcule la moyenne.',
      'Un sachet : 5 rouges, 3 bleus, 2 verts. P(bleu) ? sous les trois formes ?',
      'P(au moins un garçon) si P(aucun garçon) = 0,125 ?'
    ],
    answers: [
      'Les 28 élèves ; un élève ; la pointure ; quantitatif.',
      '55 %, 25 %, 20 % ; angle riz = 22/40 × 360° = 198°.',
      '(14 + 66 + 104 + 64) ÷ 20 = 248 ÷ 20 = 12,4.',
      '3/10 = 0,3 = 30 %.',
      '1 − 0,125 = 0,875.'
    ]
  },
  exam: {
    exos: [
      'On interroge les 30 élèves de la 8ᵉ sur leur matière préférée. a) Donne la population. b) Donne un individu. d) Donne le caractère et sa nature. e) Cite une question qui donnerait un caractère quantitatif.',
      'Réponses : malagasy 9, maths 12, anglais 6, SVT 3. a) Dresse le tableau avec total. b) Calcule les quatre fréquences en %. d) Calcule l’angle de chaque secteur pour un diagramme circulaire. e) Quel diagramme choisirais-tu pour montrer que les maths font plus du tiers de la classe ?',
      'Notes d’un contrôle (20 élèves) : trois 6, quatre 9, sept 12, cinq 14, un 19. a) Vérifie l’effectif total. b) Calcule la somme des note × effectif. d) Calcule la moyenne. e) La moyenne appartient-elle à la série ?',
      'Un sachet contient 6 jetons rouges, 4 bleus et 2 verts, identiques au toucher. a) P(rouge) en fraction irréductible ? b) P(vert) en décimal ? d) P(rouge ou bleu) en % ? e) Les trois écritures de P(bleu).',
      'Avec un dé équilibré : a) P(obtenir 4) ? b) P(obtenir un nombre impair) ? d) Formule le contraire de « obtenir au moins 2 » et calcule sa probabilité. e) Déduis-en P(au moins 2) par l’événement contraire.'
    ],
    corr: [
      'a) les 30 élèves ; b) un élève ; d) la matière préférée, qualitatif ; e) « combien de minutes de trajet ? ». Un point par item.',
      'a) total 30 ; b) 30 %, 40 %, 20 %, 10 % ; d) 108°, 144°, 72°, 36° ; e) le circulaire : 144° dépasse le tiers du disque (120°). Un point par item.',
      'a) 3 + 4 + 7 + 5 + 1 = 20 ✓ ; b) 18 + 36 + 84 + 70 + 19 = 227 ; d) 11,35 ; e) non. Un point par item.',
      'a) 6/12 = 1/2 ; b) 2/12 ≈ 0,17 ; d) 10/12 ≈ 83 % ; e) 1/3 ≈ 0,33 ≈ 33 %. Un point par item.',
      'a) 1/6 ; b) 3/6 = 1/2 ; d) « obtenir 1 » : P = 1/6 ; e) 1 − 1/6 = 5/6. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit6, bufs);
})();
