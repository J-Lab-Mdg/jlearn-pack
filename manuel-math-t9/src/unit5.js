// UNITÉ 5 — TRAITEMENT DE DONNÉES (PE T9) : 12 séances + révision + examen
const L = require('./figlib');
const { buildUnit } = require('./engine');
const { head, svg, txt, nline, dot, tableEl, box, arrow, seg, poly, circle, PINK2, GREEN, BLUE, OCRE } = L;

const dash = (x1, y1, x2, y2, c, w) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-dasharray="10 8"/>`;
const ocircle = (cx, cy, r, c, w, fill, op) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill || 'none'}"${op ? ` fill-opacity="${op}"` : ''} stroke="${c}" stroke-width="${w}"/>`;
const rect = (x, y, w, h, c, fill) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${c}" stroke-width="2.5"/>`;

const figs = {};
// S1 — population et échantillon
figs.u5f1 = (() => { const { s, y } = head('Population et échantillon', ['Impossible d’interroger tout le monde : on choisit un petit groupe fidèle.']);
  const top = y + 25;
  let b = `<rect x="80" y="${top}" width="440" height="235" rx="18" fill="#E8F5E9" stroke="${GREEN}" stroke-width="3"/>`;
  for (let i = 0; i < 48; i++) { const col = i % 8, row = Math.floor(i / 8); b += dot(130 + col * 49, top + 55 + row * 31, 6, GREEN); }
  b += txt(300, top + 30, 'POPULATION : les 1 200 élèves du CISCO', 17, GREEN, 'bold', 'middle');
  b += `<rect x="640" y="${top + 45}" width="280" height="150" rx="18" fill="#FDE7EF" stroke="${PINK2}" stroke-width="3"/>`;
  for (let i = 0; i < 8; i++) { const col = i % 4, row = Math.floor(i / 4); b += dot(700 + col * 54, top + 110 + row * 42, 7, PINK2); }
  b += txt(780, top + 74, 'ÉCHANTILLON : 40 élèves', 16, PINK2, 'bold', 'middle');
  b += arrow(528, top + 115, 632, top + 115, OCRE, 4);
  b += txt(500, top + 272, 'un bon échantillon ressemble à la population : c’est sa photo réduite', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 300, s + b); })();
// S2 — mode (diagramme en barres des âges)
figs.u5f2 = (() => { const { s, y } = head('Le mode : la valeur la plus fréquente', ['Âges de 40 élèves de 3ᵉ (exemple du programme) : la barre la plus haute gagne.']);
  const top = y + 25, baseY = top + 250, x0 = 150, step = 115, scale = 16;
  const ages = ['12', '13', '14', '15', '16', '17'], eff = [5, 8, 12, 7, 6, 2];
  let b = seg(x0 - 45, baseY, x0 + 6 * step, baseY, '#333', 2.5) + seg(x0 - 45, baseY, x0 - 45, top - 5, '#333', 2.5);
  for (let i = 0; i < 6; i++) {
    const h = eff[i] * scale, X = x0 + i * step;
    b += rect(X, baseY - h, 70, h, eff[i] === 12 ? PINK2 : GREEN, eff[i] === 12 ? '#FDE7EF' : '#E8F5E9');
    b += txt(X + 35, baseY - h - 12, String(eff[i]), 20, eff[i] === 12 ? PINK2 : GREEN, 'bold', 'middle');
    b += txt(X + 35, baseY + 30, ages[i] + ' ans', 19, '#333', 'normal', 'middle');
  }
  b += txt(x0 + 2 * step + 35, top - 8, 'MODE = 14 ans', 22, PINK2, 'bold', 'middle');
  b += txt(500, baseY + 72, 'le mode est la valeur dont l’effectif est le plus grand (12 élèves)', 20, OCRE, 'bold', 'middle');
  return svg(1000, baseY + 100, s + b); })();
// S3 — moyennes simple et pondérée
figs.u5f3 = (() => { const { s, y } = head('Moyenne simple et moyenne pondérée', ['Chaque âge compte autant de fois que son effectif : on pondère.']);
  const top = y + 20;
  const data = [['âge xᵢ', '12', '13', '14', '15', '16', '17', 'Total'], ['effectif nᵢ', '5', '8', '12', '7', '6', '2', '40'], ['nᵢ × xᵢ', '60', '104', '168', '105', '96', '34', '567']];
  let b = tableEl(60, top, [160, 100, 100, 100, 100, 100, 100, 110], 54, data);
  b += txt(500, top + 3 * 54 + 45, 'moyenne pondérée = 567 ÷ 40 = 14,175 ≈ 14,2 ans', 22, PINK2, 'bold', 'middle');
  b += txt(500, top + 3 * 54 + 82, 'moyenne simple de 3 notes 8, 12, 13 : (8 + 12 + 13) ÷ 3 = 11', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 3 * 54 + 112, s + b); })();
// S4 — médiane cas discret
figs.u5f4 = (() => { const { s, y } = head('La médiane : la valeur du milieu', ['40 valeurs rangées : la médiane partage la série en deux moitiés de 20.']);
  const top = y + 30;
  let b = rect(80, top, 340, 70, GREEN, '#E8F5E9') + rect(580, top, 340, 70, GREEN, '#E8F5E9');
  b += txt(250, top + 30, '20 valeurs', 21, GREEN, 'bold', 'middle') + txt(250, top + 56, 'les plus petites', 18, GREEN, 'normal', 'middle');
  b += txt(750, top + 30, '20 valeurs', 21, GREEN, 'bold', 'middle') + txt(750, top + 56, 'les plus grandes', 18, GREEN, 'normal', 'middle');
  b += dash(500, top - 15, 500, top + 85, PINK2, 3);
  b += txt(500, top + 115, 'Me entre la 20ᵉ et la 21ᵉ valeur', 20, PINK2, 'bold', 'middle');
  const data = [['âge', '12', '13', '14', '15', '16', '17'], ['effectif cumulé', '5', '13', '25', '32', '38', '40']];
  b += tableEl(110, top + 150, [220, 94, 94, 94, 94, 94, 94], 52, data);
  b += txt(500, top + 150 + 2 * 52 + 42, 'la 20ᵉ et la 21ᵉ valeur tombent dans le cumul 25 : Me = 14 ans', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 150 + 2 * 52 + 72, s + b); })();
// S5 — effectifs cumulés et fréquences cumulées
figs.u5f5 = (() => { const { s, y } = head('Effectifs cumulés et fréquences cumulées', ['1 200 voitures comptées par intervalles (exemple du programme).']);
  const top = y + 20;
  const data = [['intervalle', 'effectif', 'eff. cumulé', 'fréq. cumulée'],
    ['[1 ; 5[', '48', '48', '4 %'], ['[5 ; 10[', '480', '528', '44 %'], ['[10 ; 15[', '144', '672', '56 %'],
    ['[15 ; 20[', '288', '960', '80 %'], ['[20 ; 25[', '90', '1 050', '87,5 %'], ['[25 ; 30[', '150', '1 200', '100 %']];
  let b = tableEl(110, top, [200, 170, 200, 220], 50, data);
  b += txt(500, top + 7 * 50 + 40, 'cumulé = on additionne au fur et à mesure ; la dernière ligne retombe sur le total', 19, OCRE, 'bold', 'middle');
  return svg(1000, top + 7 * 50 + 70, s + b); })();
// S6 — interpolation de la médiane
figs.u5f6 = (() => { const { s, y } = head('Interpoler la médiane (cas continu)', ['N ÷ 2 = 600 : la médiane se cache dans la classe [10 ; 15[.']);
  const top = y + 45, x0 = 150, x1 = 850, Y = top + 110;
  let b = seg(x0, Y, x1, Y, '#1565C0', 3.5);
  b += dot(x0, Y, 8, '#1565C0') + dot(x1, Y, 8, '#1565C0');
  b += txt(x0, Y + 36, '10', 21, '#1565C0', 'bold', 'middle') + txt(x1, Y + 36, '15', 21, '#1565C0', 'bold', 'middle');
  b += txt(x0, Y - 30, 'cumul 528', 19, GREEN, 'bold', 'middle') + txt(x1, Y - 30, 'cumul 672', 19, GREEN, 'bold', 'middle');
  const xm = x0 + (600 - 528) / 144 * (x1 - x0);
  b += dot(xm, Y, 9, PINK2) + dash(xm, Y - 65, xm, Y + 60, PINK2, 2.5);
  b += txt(xm, Y - 82, 'cumul 600 → Me', 20, PINK2, 'bold', 'middle');
  b += txt(xm, Y + 86, 'Me = 10 + (600 − 528) ÷ 144 × 5 = 12,5', 22, PINK2, 'bold', 'middle');
  b += txt(500, Y + 128, 'on avance dans la classe au prorata des effectifs manquants', 19, OCRE, 'bold', 'middle');
  return svg(1000, Y + 158, s + b); })();
// S7 — interpréter moyenne et médiane
figs.u5f7 = (() => { const { s, y } = head('Moyenne ou médiane : qui dit vrai ?', ['Dix revenus au village : une seule grosse valeur fait mentir la moyenne.']);
  const top = y + 20;
  const data = [['Indicateur', 'Calcul', 'Verdict'],
    ['moyenne', '3 800 000 ÷ 10 = 380 000 Ar', 'tirée vers le haut'],
    ['médiane', '(5ᵉ + 6ᵉ valeur) ÷ 2 = 200 000 Ar', 'fidèle au village']];
  let b = tableEl(50, top, [190, 440, 270], 58, data);
  b += txt(500, top + 3 * 58 + 42, 'la moyenne est sensible aux valeurs extrêmes ; la médiane leur résiste', 20, OCRE, 'bold', 'middle');
  return svg(1000, top + 3 * 58 + 72, s + b); })();
// S8 — fréquence et probabilité
figs.u5f8 = (() => { const { s, y } = head('La fréquence se stabilise : la probabilité', ['Plus on lance la pièce, plus la fréquence de « pile » s’approche de 0,5.']);
  const top = y + 30, baseY = top + 230, x0 = 130, x1 = 920;
  let b = seg(x0, baseY, x1, baseY, '#333', 2.5) + seg(x0, baseY, x0, top - 5, '#333', 2.5);
  const yOf = f => baseY - (f - 0.3) * 500;
  b += dash(x0, yOf(0.5), x1, yOf(0.5), OCRE, 2.5);
  b += txt(x0 + 12, yOf(0.5) + 30, 'probabilité 0,5', 19, OCRE, 'bold', 'start');
  const pts = [[10, 0.7], [50, 0.56], [100, 0.54], [500, 0.51], [1000, 0.502]];
  const X = i => x0 + 70 + i * 180;
  let prev = null;
  pts.forEach((p, i) => { const px = X(i), py = yOf(p[1]);
    if (prev) b += seg(prev[0], prev[1], px, py, GREEN, 3);
    prev = [px, py]; });
  pts.forEach((p, i) => { const px = X(i), py = yOf(p[1]);
    b += dot(px, py, 7, GREEN) + txt(px, py - 18, String(p[1]).replace('.', ','), 18, GREEN, 'bold', 'middle');
    b += txt(px, baseY + 28, p[0] + ' lancers', 17, '#555', 'normal', 'middle'); });
  b += txt(500, baseY + 66, 'la fréquence observée finit par coller à la probabilité théorique', 20, PINK2, 'bold', 'middle');
  return svg(1000, baseY + 96, s + b); })();
// S9 — vocabulaire probabiliste
figs.u5f9 = (() => { const { s, y } = head('Le vocabulaire des probabilités', ['Un dé à six faces suffit pour tout nommer.']);
  const top = y + 20;
  const data = [['Mot', 'Sens', 'Exemple du dé'],
    ['expérience aléatoire', 'résultat imprévisible', 'lancer le dé'],
    ['issue (ou cas)', 'un résultat possible', 'obtenir 5'],
    ['univers', 'toutes les issues', '{1 ; 2 ; 3 ; 4 ; 5 ; 6}'],
    ['événement', 'ensemble d’issues', '« obtenir un nombre pair »'],
    ['événement impossible', 'aucune issue', '« obtenir 9 »']];
  let b = tableEl(35, top, [300, 270, 360], 54, data);
  return svg(1000, top + 6 * 54 + 40, s + b); })();
// S10 — probabilité d'un événement
figs.u5f10 = (() => { const { s, y } = head('Calculer une probabilité', ['Dé équilibré : chaque face a la même chance — on compte les cas.']);
  const top = y + 35;
  let b = '';
  for (let i = 1; i <= 6; i++) { const X = 110 + (i - 1) * 135, fav = i % 2 === 0;
    b += rect(X, top, 95, 95, fav ? PINK2 : '#999', fav ? '#FDE7EF' : '#F5F5F5');
    b += txt(X + 47, top + 60, String(i), 34, fav ? PINK2 : '#777', 'bold', 'middle'); }
  b += txt(500, top + 135, 'événement A : « obtenir un nombre pair » — 3 cas favorables sur 6', 20, '#333', 'normal', 'middle');
  b += txt(500, top + 185, 'P(A) = cas favorables ÷ cas possibles = 3/6 = 1/2', 24, PINK2, 'bold', 'middle');
  b += txt(500, top + 228, 'une probabilité est toujours comprise entre 0 (impossible) et 1 (certain)', 19, OCRE, 'bold', 'middle');
  return svg(1000, top + 258, s + b); })();
// S11 — réunion et intersection
figs.u5f11 = (() => { const { s, y } = head('Réunion et intersection d’événements', ['Dé : A = « pair », B = « multiple de 3 » — le diagramme montre tout.']);
  const top = y + 30, cy = top + 150;
  let b = ocircle(330, cy, 125, GREEN, 3.5, '#E8F5E9', 0.6) + ocircle(530, cy, 125, PINK2, 3.5, '#FDE7EF', 0.6);
  b += txt(250, top - 2, 'A : pair', 21, GREEN, 'bold', 'middle') + txt(615, top - 2, 'B : multiple de 3', 21, PINK2, 'bold', 'middle');
  b += txt(280, cy - 25, '2', 26, GREEN, 'bold', 'middle') + txt(265, cy + 45, '4', 26, GREEN, 'bold', 'middle');
  b += txt(430, cy + 5, '6', 26, OCRE, 'bold', 'middle');
  b += txt(590, cy + 10, '3', 26, PINK2, 'bold', 'middle');
  b += txt(760, cy - 40, '1', 24, '#777', 'bold', 'middle') + txt(790, cy + 50, '5', 24, '#777', 'bold', 'middle');
  b += txt(430, cy + 165, 'A ∩ B = {6} : P = 1/6', 21, OCRE, 'bold', 'middle');
  b += txt(430, cy + 202, 'P(A ∪ B) = 3/6 + 2/6 − 1/6 = 4/6 = 2/3', 22, '#1565C0', 'bold', 'middle');
  return svg(1000, cy + 235, s + b); })();
// S12 — événement contraire
figs.u5f12 = (() => { const { s, y } = head('L’événement contraire', ['Tout ce qui n’est pas A : les deux probabilités se partagent le 1.']);
  const top = y + 40, X = 120, W = 760, H = 85;
  const wA = W * 0.25;
  let b = rect(X, top, wA, H, PINK2, '#FDE7EF') + rect(X + wA, top, W - wA, H, GREEN, '#E8F5E9');
  b += txt(X + wA / 2, top + 38, 'P(A)', 23, PINK2, 'bold', 'middle') + txt(X + wA / 2, top + 66, '1/4', 21, PINK2, 'bold', 'middle');
  b += txt(X + wA + (W - wA) / 2, top + 38, 'P(Ā) : le contraire', 23, GREEN, 'bold', 'middle') + txt(X + wA + (W - wA) / 2, top + 66, '3/4', 21, GREEN, 'bold', 'middle');
  b += txt(500, top + H + 40, 'sac de 8 billes dont 2 rouges : A = « tirer une rouge »', 20, '#333', 'normal', 'middle');
  b += txt(500, top + H + 88, 'P(Ā) = 1 − P(A) : les deux font toujours 1', 24, OCRE, 'bold', 'middle');
  return svg(1000, top + H + 120, s + b); })();

const S = [
  {
    t: 'Distinguer population et échantillon', comp: 'Traitement de données', theme: 'Enquête statistique : population, échantillon',
    goal: 'distinguer population et échantillon et juger la qualité d’un échantillon',
    mat: 'Résultats d’enquêtes, journaux, cahier',
    revQ: 'En T8, comment appelait-on le nombre de fois qu’une valeur apparaît ?',
    revRA: 'L’effectif de la valeur.',
    situation: 'Le chef CISCO veut connaître l’âge moyen des 1 200 élèves de 3ᵉ de la circonscription. Interroger tout le monde prendrait des semaines ! Son adjoint propose : « questionnons 40 élèves bien choisis ». Toute la statistique moderne tient dans ce pari : un petit groupe peut parler pour le grand.',
    def: 'La population est l’ensemble complet des individus ou objets concernés par une étude statistique. Un échantillon est une partie de la population réellement observée ou interrogée ; il est représentatif lorsqu’il reflète fidèlement la composition de la population.',
    autrement: 'la population, c’est tout le monde ; l’échantillon, c’est le petit groupe qu’on interroge vraiment — et il doit ressembler au grand.',
    concept: 'Pourquoi échantillonner ? Trois raisons : le COÛT (interroger 1 200 élèves mobilise des enquêteurs), le TEMPS (les résultats doivent sortir avant la rentrée), et parfois la NÉCESSITÉ absolue — contrôler la qualité des allumettes en les craquant toutes détruirait le stock ! Le danger mortel est le BIAIS : un échantillon pris uniquement dans le lycée de la ville surestimera les équipements, car les élèves ruraux n’y figurent pas. Les bonnes pratiques : tirer au hasard, varier les lieux et les profils, viser une taille suffisante (40 vaut mieux que 4). Retenir aussi le vocabulaire cousin : l’individu est un élément de la population, le caractère est ce qu’on mesure (âge, taille, sport préféré) — il est quantitatif quand c’est un nombre, qualitatif sinon. Les données collectées soi-même sont dites primaires ; celles reprises d’un bureau de statistique sont secondaires.',
    synthese: 'population = tout ; échantillon = partie interrogée ; représentatif = même composition ; biais = échantillon déformant ; caractère quantitatif/qualitatif.',
    method: ['Identifier la population (qui est concerné ?) et le caractère étudié.', 'Décrire l’échantillon : taille, mode de choix.', 'Chasser les biais : l’échantillon couvre-t-il tous les profils ?'],
    exemple: 'Étude : « sport préféré des élèves du collège » (480 élèves). On interroge 30 élèves tirés au sort sur la liste générale. Population : les 480 élèves ; échantillon : les 30 tirés ; caractère : le sport préféré (qualitatif). Le tirage au sort protège du biais.',
    erreur: 'Interroger ses 10 meilleurs amis et conclure pour tout le collège : un groupe d’amis partage les mêmes goûts — c’est l’exemple parfait de l’échantillon biaisé. Le hasard, lui, n’a pas de préférés.',
    saistu: 'En 1936, un magazine américain interrogea 2,4 millions de personnes par téléphone et prédit la défaite de Roosevelt. Or le téléphone était un luxe : l’échantillon géant était biaisé ! Un institut rival, avec 50 000 personnes bien choisies, donna le bon vainqueur. La qualité bat la quantité.',
    exos: ['Étude : poids des sacs de riz d’un grossiste (2 000 sacs) ; on en pèse 50. a) Population ? b) Échantillon ? d) Caractère étudié ? e) Quantitatif ou qualitatif ?',
      'Pour connaître l’avis des 800 parents d’élèves, le directeur interroge les 25 parents présents à la réunion du samedi. a) Population ? b) Échantillon ? d) Pourquoi risque-t-il d’être biaisé ? e) Propose un meilleur choix.',
      'Vrai ou faux ? a) Un échantillon est toujours plus petit que la population. b) Plus l’échantillon est grand, plus il est forcément représentatif. d) « Couleur préférée » est un caractère qualitatif. e) Peser tous les sacs s’appelle un recensement.'],
    corr: ['a) les 2 000 sacs ; b) les 50 sacs pesés ; d) le poids ; e) quantitatif.',
      'a) les 800 parents ; b) les 25 présents ; d) seuls les parents disponibles le samedi sont représentés ; e) tirer au sort 40 parents sur la liste complète.',
      'a) vrai ; b) faux (le biais ne disparaît pas avec la taille) ; d) vrai ; e) vrai.'],
    fig: 'u5f1'
  },
  {
    t: 'Déterminer le mode d’une série', comp: 'Traitement de données', theme: 'Tendance centrale : le mode',
    goal: 'déterminer le mode d’une série statistique discrète ou continue',
    mat: 'Tableaux d’effectifs, papier quadrillé, cahier',
    revQ: 'Dans un tableau d’effectifs, que représente chaque nombre de la 2ᵉ ligne ?',
    revRA: 'Le nombre d’individus ayant cette valeur : l’effectif.',
    situation: 'L’enquête sur les âges des 40 élèves de 3ᵉ est dépouillée : 5 élèves de 12 ans, 8 de 13 ans, 12 de 14 ans, 7 de 15 ans, 6 de 16 ans, 2 de 17 ans. Quelle est la réponse la plus « populaire » ? Celle qui revient le plus souvent a un nom : le mode.',
    def: 'Le mode d’une série statistique est la valeur du caractère qui a le plus grand effectif. Dans une série groupée en classes, la classe de plus grand effectif est appelée classe modale. Une série peut avoir plusieurs modes.',
    autrement: 'le mode, c’est la valeur championne — celle qui apparaît le plus de fois ; sur le diagramme en barres, c’est la barre la plus haute.',
    concept: 'Le mode est le plus simple des trois indicateurs de tendance centrale (avec la moyenne et la médiane) : aucune opération, une seule lecture du tableau. Ses forces : il marche même pour un caractère QUALITATIF — « le riz est le plat le plus consommé » est un mode, alors qu’une moyenne de plats n’existe pas ! Il résiste aussi aux valeurs extrêmes. Ses faiblesses : il ignore tout le reste de la série (les 28 autres élèves comptent pour rien) et il peut être multiple — une série avec deux barres à égalité est bimodale. Dans le cas continu, on ne donne pas une valeur mais la CLASSE modale : pour les 1 200 voitures de la prochaine séance, c’est [5 ; 10[ avec 480 véhicules. Réflexe de lecture : sur un diagramme en barres, repérer le sommet ; dans un tableau, balayer la ligne des effectifs — jamais celle des valeurs !',
    synthese: 'mode = valeur d’effectif maximal ; lecture directe, zéro calcul ; marche en qualitatif ; classe modale en continu ; peut être multiple.',
    method: ['Repérer la ligne des effectifs du tableau (ou la hauteur des barres).', 'Chercher le plus grand effectif.', 'Donner la valeur (ou la classe) correspondante — pas l’effectif !'],
    exemple: 'Âges des 40 élèves : les effectifs sont 5, 8, 12, 7, 6, 2. Le plus grand est 12, atteint pour l’âge 14 ans. Mode = 14 ans (et non 12 !). Sur le diagramme en barres, la barre de 14 ans domine toutes les autres.',
    erreur: 'Répondre « le mode est 12 » parce que 12 est le plus grand effectif : le mode est la VALEUR (14 ans), pas son effectif (12 élèves). La question « combien ? » et la question « quoi ? » n’ont pas la même réponse.',
    saistu: 'Le mot « mode » vient du latin modus, la manière — la même racine que la mode vestimentaire : ce que l’on voit le plus souvent ! Les fabricants s’en servent énormément : la pointure la plus vendue à Madagascar décide des stocks des cordonniers d’Antananarivo.',
    exos: ['Notes d’un devoir : 8 (3 élèves), 10 (7 élèves), 12 (11 élèves), 15 (6 élèves), 18 (3 élèves). a) Effectif total ? b) Mode ? d) L’effectif du mode ? e) Trace mentalement le diagramme : quelle barre domine ?',
      'Sports préférés : foot 14, basket 9, rugby 9, natation 8. a) Mode ? b) Peut-on calculer une moyenne de ces sports ? d) Si basket passe à 14, que devient la série ? e) Comment l’appelle-t-on alors ?',
      'Voitures par jour : [1 ; 5[ : 48 ; [5 ; 10[ : 480 ; [10 ; 15[ : 144 ; [15 ; 20[ : 288 ; [20 ; 25[ : 90 ; [25 ; 30[ : 150. a) Peut-on donner un mode précis ? b) Comment s’appelle l’indicateur adapté ? d) Donne-le. e) Quel est son effectif ?'],
    corr: ['a) 30 ; b) 12 ; d) 11 ; e) la barre de la note 12.',
      'a) le foot ; b) non : caractère qualitatif ; d) deux valeurs à effectif maximal 14 ; e) série bimodale.',
      'a) non, les valeurs sont groupées ; b) la classe modale ; d) [5 ; 10[ ; e) 480.'],
    fig: 'u5f2'
  },
  {
    t: 'Calculer moyenne simple et moyenne pondérée', comp: 'Traitement de données', theme: 'Tendance centrale : moyennes',
    goal: 'calculer une moyenne simple et une moyenne pondérée par les effectifs',
    mat: 'Tableaux d’effectifs, calculatrice, cahier',
    revQ: 'Comment calcules-tu ta moyenne de trois notes ?',
    revRA: 'J’additionne les trois notes et je divise par 3.',
    situation: 'Pour les âges des 40 élèves, faut-il calculer (12 + 13 + 14 + 15 + 16 + 17) ÷ 6 = 14,5 ? Non ! Ce calcul donne le même poids aux 12 élèves de 14 ans et aux 2 élèves de 17 ans. Chaque âge doit peser son effectif : c’est la moyenne pondérée.',
    def: 'La moyenne simple de valeurs est leur somme divisée par leur nombre. La moyenne pondérée d’une série à effectifs est la somme des produits nᵢ × xᵢ (effectif × valeur) divisée par l’effectif total N : x̄ = (n₁x₁ + n₂x₂ + …) ÷ N.',
    autrement: 'la moyenne, c’est le partage équitable : on met tout dans la marmite commune et on redistribue en parts égales ; pondérer, c’est compter chaque valeur autant de fois qu’elle apparaît.',
    concept: 'La moyenne pondérée n’est pas une nouvelle moyenne : c’est la moyenne simple des 40 âges écrits un par un — le tableau permet seulement d’éviter d’additionner 40 termes ! D’où la méthode de la TROISIÈME LIGNE : ajouter au tableau la ligne des produits nᵢ × xᵢ, la sommer (567), diviser par N = 40 : x̄ = 14,175 ans. Deux contrôles de bon sens, à faire systématiquement : la moyenne tombe TOUJOURS entre la plus petite et la plus grande valeur (12 ≤ 14,175 ≤ 17 ✓), et elle est attirée par les gros effectifs (14,175 est proche de 14, l’âge dominant ✓). Pour une série en classes, on remplace chaque classe par son CENTRE : les 1 200 voitures donnent (3 × 48 + 7,5 × 480 + 12,5 × 144 + 17,5 × 288 + 22,5 × 90 + 27,5 × 150) ÷ 1 200 ≈ 13,9. Enfin, la moyenne n’est pas forcément une valeur de la série ni même un nombre « possible » : 14,175 ans ne choque personne — c’est un indicateur, pas un élève.',
    synthese: 'x̄ = Σnᵢxᵢ ÷ N ; ligne des produits puis division ; contrôle : min ≤ x̄ ≤ max ; classes → centres ; la moyenne peut ne pas être une valeur de la série.',
    method: ['Ajouter la ligne des produits nᵢ × xᵢ au tableau.', 'Sommer cette ligne, puis diviser par l’effectif total N.', 'Contrôler : la moyenne est entre le minimum et le maximum.'],
    exemple: 'Âges : 5 × 12 + 8 × 13 + 12 × 14 + 7 × 15 + 6 × 16 + 2 × 17 = 60 + 104 + 168 + 105 + 96 + 34 = 567 ; x̄ = 567 ÷ 40 = 14,175 ≈ 14,2 ans. Contrôle : entre 12 et 17 ✓.',
    erreur: 'Diviser par le nombre de valeurs DIFFÉRENTES (6) au lieu de l’effectif total (40) : 567 ÷ 6 ≈ 94,5 ans — un âge de baobab ! Le diviseur est toujours N, la somme des effectifs.',
    saistu: 'Ta moyenne scolaire est une moyenne pondérée : si les mathématiques comptent coefficient 4 et le dessin coefficient 1, une note de maths « pèse » quatre fois plus. Les coefficients du BEPC jouent exactement le rôle des effectifs de notre tableau !',
    exos: ['Notes : 8 (3 élèves), 10 (7), 12 (11), 15 (6), 18 (3). a) Effectif total ? b) Somme des nᵢxᵢ ? d) Moyenne (arrondie au dixième) ? e) Contrôle-la avec min et max.',
      'Moyenne simple : Naina a eu 9, 14 et 13 en dictée. a) Moyenne ? b) Il vise 13 de moyenne après 4 dictées : que lui faut-il ? d) Est-ce possible (notes sur 20) ? e) Et pour viser 14 ?',
      'Voitures (centres de classes 3 ; 7,5 ; 12,5 ; 17,5 ; 22,5 ; 27,5 ; effectifs 48, 480, 144, 288, 90, 150). a) Pourquoi prendre les centres ? b) Calcule Σnᵢxᵢ. d) Moyenne (au dixième) ? e) Entre quelles bornes devait-elle tomber ?'],
    corr: ['a) 30 ; b) 24 + 70 + 132 + 90 + 54 = 370 ; d) 370 ÷ 30 ≈ 12,3 ; e) 8 ≤ 12,3 ≤ 18 ✓.',
      'a) 36 ÷ 3 = 12 ; b) 4 × 13 − 36 = 16 ; d) oui, 16 ≤ 20 ; e) 4 × 14 − 36 = 20 : tout juste possible.',
      'a) les valeurs exactes sont inconnues, le centre représente la classe ; b) 144 + 3 600 + 1 800 + 5 040 + 2 025 + 4 125 = 16 734 ; d) 16 734 ÷ 1 200 ≈ 13,9 ; e) entre 1 et 30.'],
    fig: 'u5f3'
  },
  {
    t: 'Déterminer la médiane (cas discret)', comp: 'Traitement de données', theme: 'Tendance centrale : médiane discrète',
    goal: 'déterminer la médiane d’une série discrète, rangée ou donnée par effectifs',
    mat: 'Séries de nombres, tableaux d’effectifs, cahier',
    revQ: 'Range dans l’ordre croissant : 15, 9, 12, 20, 11.',
    revRA: '9, 11, 12, 15, 20.',
    situation: 'Range les 40 élèves par âge croissant, du plus jeune au plus vieux, et coupe la file en deux moitiés de 20. L’âge qui se trouve à la coupure — entre le 20ᵉ et le 21ᵉ élève — est la médiane : la moitié de la classe a moins, l’autre moitié a plus.',
    def: 'La médiane d’une série statistique rangée dans l’ordre croissant est la valeur qui partage la série en deux groupes de même effectif. Pour un effectif impair N, c’est la valeur de rang (N + 1) ÷ 2 ; pour un effectif pair, c’est la demi-somme des valeurs de rangs N÷2 et N÷2 + 1.',
    autrement: 'la médiane, c’est la valeur de l’élève du milieu de la file : autant de monde avant lui qu’après lui.',
    concept: 'Tout commence par le RANGEMENT : une médiane sur une série en vrac n’a aucun sens. Série impaire (N = 7) : la médiane est la 4ᵉ valeur — trois avant, trois après. Série paire (N = 40) : il n’y a pas de valeur centrale unique, on prend la demi-somme des 20ᵉ et 21ᵉ. Avec un tableau d’effectifs, inutile d’écrire les 40 âges : la ligne des EFFECTIFS CUMULÉS (5, 13, 25, 32, 38, 40) localise les rangs — le 20ᵉ et le 21ᵉ élève tombent tous deux dans le cumul 25, donc dans l’âge 14 ans : Me = 14. La médiane répond à une question différente de la moyenne : « quel âge sépare la classe en deux ? » et non « quel âge en partage équitable ? ». Les deux peuvent différer nettement — ce sera toute la discussion de la séance 7. Un point de vocabulaire BEPC : la phrase d’interprétation vaut des points : « au moins la moitié des élèves a au plus 14 ans ».',
    synthese: 'ranger d’abord ! impair → valeur centrale ; pair → demi-somme des deux centrales ; tableau → cumuls pour trouver les rangs ; toujours interpréter.',
    method: ['Ranger la série (ou dresser les effectifs cumulés).', 'Repérer le ou les rangs centraux : (N+1)÷2, ou N÷2 et N÷2 + 1.', 'Lire la ou les valeurs et conclure par une phrase.'],
    exemple: 'Tailles de 7 plants de riz (cm) : 21, 23, 25, 26, 28, 30, 34. N = 7 impair : la médiane est la 4ᵉ valeur, Me = 26 cm. Trois plants mesurent moins, trois mesurent plus.',
    erreur: 'Oublier de ranger : la « valeur du milieu » de la liste brute 15, 9, 12, 20, 11 serait 12 par chance… mais celle de 9, 15, 20, 12, 11 serait 20 ! Seul l’ordre croissant donne une médiane légitime.',
    saistu: 'La médiane traverse toute la géographie : la « rue médiane » d’une ville coupe la population en deux. Les bureaux de statistique préfèrent le revenu MÉDIAN au revenu moyen : il suffit d’un milliardaire dans la ville pour gonfler la moyenne, mais la médiane ne bronche pas.',
    exos: ['Série : 7, 12, 9, 15, 11, 9, 14. a) Range-la. b) N et le rang central ? d) Médiane ? e) Interprète par une phrase.',
      'Série paire : 10, 13, 8, 15, 11, 9. a) Range-la. b) Les deux rangs centraux ? d) Médiane ? e) La médiane est-elle une valeur de la série ?',
      'Âges des 40 élèves (cumulés 5, 13, 25, 32, 38, 40). a) Rangs à viser ? b) Dans quel cumul tombent-ils ? d) Médiane ? e) Compare-la à la moyenne 14,175.'],
    corr: ['a) 7, 9, 9, 11, 12, 14, 15 ; b) N = 7, rang 4 ; d) 11 ; e) autant de valeurs avant 11 qu’après.',
      'a) 8, 9, 10, 11, 13, 15 ; b) rangs 3 et 4 ; d) (10 + 11) ÷ 2 = 10,5 ; e) non — c’est permis !',
      'a) 20 et 21 ; b) le cumul 25 (âge 14) ; d) 14 ans ; e) très proches : la série est équilibrée.'],
    fig: 'u5f4'
  },
  {
    t: 'Dresser effectifs cumulés et fréquences cumulées', comp: 'Traitement de données', theme: 'Tableaux cumulés',
    goal: 'compléter un tableau par effectifs cumulés et fréquences cumulées croissants',
    mat: 'Tableaux statistiques, calculatrice, cahier',
    revQ: 'Comment calcule-t-on la fréquence d’une valeur ?',
    revRA: 'Effectif de la valeur divisé par l’effectif total (en % si on multiplie par 100).',
    situation: 'Au poste de comptage de la RN7, on a relevé pendant 1 200 jours le nombre de voitures par jour, groupé en classes : [1 ; 5[ : 48 jours ; [5 ; 10[ : 480 ; [10 ; 15[ : 144 ; [15 ; 20[ : 288 ; [20 ; 25[ : 90 ; [25 ; 30[ : 150. Question du chef : « combien de jours à moins de 15 voitures ? » Il faut additionner en chemin : cumuler.',
    def: 'L’effectif cumulé croissant d’une valeur (ou d’une classe) est la somme de son effectif et de tous les effectifs des valeurs inférieures. La fréquence cumulée croissante est l’effectif cumulé divisé par l’effectif total, souvent exprimée en pourcentage.',
    autrement: 'cumuler, c’est remplir un panier en avançant : à chaque classe, on ajoute sa récolte à tout ce qu’on portait déjà.',
    concept: 'Le tableau cumulé se construit en cascade : 48, puis 48 + 480 = 528, puis 528 + 144 = 672, puis 960, 1 050 et enfin 1 200. Deux contrôles immédiats : la ligne des cumulés ne peut que MONTER, et la dernière case retombe exactement sur l’effectif total — sinon, erreur d’addition quelque part. Les fréquences cumulées s’obtiennent en divisant par N : 4 %, 44 %, 56 %, 80 %, 87,5 %, 100 %. À quoi tout cela sert-il ? À répondre instantanément aux questions « moins de… » : moins de 15 voitures ? 672 jours, soit 56 %. Et aux questions « au moins… » par soustraction : au moins 15 voitures ? 1 200 − 672 = 528 jours. Le cumul est aussi la rampe de lancement de la médiane continue (prochaine séance) : repérer où le cumul franchit N ÷ 2. On peut enfin cumuler en DÉCROISSANT (en partant du haut) — le programme privilégie le croissant, le réflexe reste le même.',
    synthese: 'cumulé = somme en chemin ; ligne croissante, dernière case = N ; fréq. cumulée = cumul ÷ N ; répond aux « moins de » ; prépare la médiane.',
    method: ['Recopier le premier effectif, puis ajouter l’effectif suivant au cumul précédent.', 'Vérifier : dernière case = effectif total.', 'Diviser chaque cumul par N pour les fréquences cumulées (× 100 pour des %).'],
    exemple: 'Voitures : cumulés 48, 528, 672, 960, 1 050, 1 200 ✓ (= N). Fréquences cumulées : 48 ÷ 1 200 = 4 % ; 528 ÷ 1 200 = 44 % ; puis 56 %, 80 %, 87,5 %, 100 %. « Moins de 10 voitures » : 44 % des jours.',
    erreur: 'Cumuler les fréquences en oubliant la virgule : 87,5 % n’est pas 875 % ! Et une ligne de cumulés qui redescend (960 puis 850) signale à coup sûr une soustraction faite à la place d’une addition.',
    saistu: 'Les services de santé raisonnent en cumulé en permanence : « 80 % des enfants du district sont vaccinés avant 15 mois » est une fréquence cumulée croissante. La courbe des cumulés porte même un nom savant : l’ogive statistique.',
    exos: ['Recopie le tableau des voitures et complète les cumulés. a) Cumul de [10 ; 15[ ? b) Dernière case ? d) Jours à moins de 20 voitures ? e) Jours à au moins 20 voitures ?',
      'Fréquences cumulées. a) Celle de [5 ; 10[ ? b) Celle de [15 ; 20[ ? d) Que vaut toujours la dernière ? e) % de jours à moins de 25 voitures ?',
      'Notes (effectifs) : 8 → 3 ; 10 → 7 ; 12 → 11 ; 15 → 6 ; 18 → 3. a) Dresse les cumulés. b) Combien d’élèves ont au plus 12 ? d) Fréquence cumulée de 12 (sur 30) ? e) Combien ont plus de 12 ?'],
    corr: ['a) 672 ; b) 1 200 ; d) 960 ; e) 1 200 − 960 = 240.',
      'a) 44 % ; b) 80 % ; d) 100 % ; e) 87,5 %.',
      'a) 3, 10, 21, 27, 30 ; b) 21 ; d) 21 ÷ 30 = 70 % ; e) 30 − 21 = 9.'],
    fig: 'u5f5'
  },
  {
    t: 'Interpoler la médiane (cas continu)', comp: 'Traitement de données', theme: 'Médiane par interpolation',
    goal: 'déterminer la classe médiane et interpoler la médiane d’une série continue',
    mat: 'Tableaux cumulés, papier millimétré, règle, cahier',
    revQ: 'Dans le tableau des voitures, quel cumul correspond à la classe [10 ; 15[ ?',
    revRA: '672 (48 + 480 + 144).',
    situation: 'Pour les 1 200 jours de comptage, la médiane est la valeur du 600ᵉ jour rangé. Mais les données sont en classes : on sait seulement que ce 600ᵉ jour est quelque part dans [10 ; 15[. Où exactement ? On avance dans la classe proportionnellement — c’est l’interpolation linéaire.',
    def: 'La classe médiane est la première classe dont l’effectif cumulé atteint ou dépasse N ÷ 2. La médiane s’obtient par interpolation linéaire : Me = borne inférieure + (N÷2 − cumul précédent) ÷ effectif de la classe × amplitude de la classe.',
    autrement: 'on suppose les valeurs régulièrement étalées dans la classe, et on avance dedans au prorata : s’il manque la moitié des effectifs, on avance de la moitié de la classe.',
    concept: 'Décortiquons le calcul des voitures. N ÷ 2 = 600. Les cumulés : 48, 528, 672… Le premier à atteindre 600 est 672 : la classe médiane est [10 ; 15[. Avant elle, le cumul était 528 : il MANQUE 600 − 528 = 72 jours. La classe en contient 144 : il faut donc avancer de 72/144 = la moitié de la classe, soit 2,5 sur une amplitude de 5. Me = 10 + 2,5 = 12,5 voitures. L’hypothèse cachée : les 144 jours sont supposés répartis uniformément entre 10 et 15 — c’est approximatif mais honnête, et c’est la seule information disponible. Contrôle : la médiane doit tomber DANS sa classe (10 ≤ 12,5 < 15 ✓). Interprétation BEPC : « la moitié des jours, il passe moins de 12,5 voitures ». Géométriquement, l’interpolation revient à lire l’abscisse du point d’ordonnée N ÷ 2 sur la courbe des effectifs cumulés : la formule et le graphique racontent la même histoire.',
    synthese: 'N÷2 → classe médiane (1ᵉʳ cumul qui l’atteint) ; Me = borne + manque ÷ effectif × amplitude ; hypothèse : répartition uniforme ; contrôle : Me dans la classe.',
    method: ['Calculer N ÷ 2 et dresser les cumulés.', 'Repérer la classe médiane : premier cumul ≥ N ÷ 2.', 'Appliquer la formule d’interpolation et contrôler que Me tombe dans la classe.'],
    exemple: 'Voitures : N ÷ 2 = 600 ; cumul avant [10 ; 15[ : 528 ; effectif 144 ; amplitude 5. Me = 10 + (600 − 528) ÷ 144 × 5 = 10 + 2,5 = 12,5. La moitié des jours comptent moins de 12,5 voitures.',
    erreur: 'Prendre pour classe médiane celle du plus gros effectif ([5 ; 10[ et ses 480 jours) : c’est la classe MODALE ! La classe médiane se trouve avec les cumulés et N ÷ 2 — ici [10 ; 15[, et personne d’autre.',
    saistu: 'Interpoler signifie « poser entre » en latin. Les ingénieurs hydrologues interpolent sans cesse : entre deux relevés du fleuve Betsiboka à 8 h et à 12 h, le niveau de 10 h s’estime par la même règle de proportionnalité que notre médiane.',
    exos: ['Reprends les voitures avec N ÷ 2 = 600. a) Cumul juste avant la classe médiane ? b) Effectif et amplitude de la classe ? d) Refais le calcul complet de Me. e) Phrase d’interprétation.',
      'Masses de 200 sacs de paddy : [40 ; 50[ : 30 ; [50 ; 60[ : 80 ; [60 ; 70[ : 60 ; [70 ; 80[ : 30. a) Cumulés ? b) Classe médiane ? d) Me par interpolation ? e) Contrôle-la.',
      'Vrai ou faux ? a) La classe médiane contient toujours la médiane. b) Classe modale et classe médiane coïncident toujours. d) Si le cumul vaut exactement N ÷ 2 en fin de classe, Me = borne supérieure. e) L’interpolation suppose une répartition uniforme dans la classe.'],
    corr: ['a) 528 ; b) 144 et 5 ; d) 10 + 72 ÷ 144 × 5 = 12,5 ; e) la moitié des jours, moins de 12,5 voitures passent.',
      'a) 30, 110, 170, 200 ; b) N ÷ 2 = 100 → [50 ; 60[ ; d) 50 + (100 − 30) ÷ 80 × 10 = 58,75 kg ; e) 50 ≤ 58,75 < 60 ✓.',
      'a) vrai ; b) faux (voitures : modale [5 ; 10[, médiane [10 ; 15[) ; d) vrai ; e) vrai.'],
    fig: 'u5f6'
  },
  {
    t: 'Interpréter moyenne et médiane', comp: 'Traitement de données', theme: 'Choisir le bon indicateur',
    goal: 'interpréter moyenne et médiane et choisir l’indicateur adapté à la situation',
    mat: 'Séries de données réelles, articles de presse, cahier',
    revQ: 'Rappelle la moyenne et la médiane des âges des 40 élèves.',
    revRA: 'Moyenne 14,175 ans ; médiane 14 ans.',
    situation: 'Dans un village, neuf paysans gagnent 200 000 Ar par mois et un commerçant 2 000 000 Ar. Le journal titre : « revenu moyen : 380 000 Ar » ! Aucun des neuf paysans ne s’y reconnaît. La médiane, elle, dit 200 000 Ar. Qui ment ? Personne — mais les deux indicateurs ne racontent pas la même histoire.',
    def: 'La moyenne est l’indicateur de partage équitable : elle répartit le total également entre tous les individus. La médiane est l’indicateur de position centrale : elle partage l’effectif en deux moitiés. La moyenne est sensible aux valeurs extrêmes ; la médiane y est robuste.',
    autrement: 'la moyenne met tout dans la marmite commune et sert des parts égales ; la médiane regarde simplement qui est au milieu de la file — un très riche change la marmite, pas la file.',
    concept: 'Le calcul du village : moyenne = (9 × 200 000 + 2 000 000) ÷ 10 = 3 800 000 ÷ 10 = 380 000 Ar ; médiane = demi-somme des 5ᵉ et 6ᵉ valeurs = 200 000 Ar. L’écart énorme signale une série DISSYMÉTRIQUE : une poignée de grandes valeurs tire la moyenne vers le haut sans déplacer la médiane. Règles de choix : la MOYENNE s’impose quand le TOTAL a un sens (récolte totale, budget, points cumulés d’un championnat) ; la MÉDIANE s’impose pour décrire une situation « typique » en présence de valeurs extrêmes (revenus, prix de l’immobilier, durées d’attente). Les deux ensemble valent mieux que chacun seul : moyenne proche de la médiane = série équilibrée ; moyenne très au-dessus = quelques géants dans les données ; très en dessous = quelques valeurs minuscules. L’esprit critique du programme est là : devant un chiffre « moyen » dans un journal, toujours demander : et la médiane ?',
    synthese: 'moyenne = partage (sensible aux extrêmes) ; médiane = milieu (robuste) ; écart entre les deux = dissymétrie ; total utile → moyenne ; typique → médiane.',
    method: ['Calculer les deux indicateurs.', 'Comparer : proches → série équilibrée ; éloignés → valeurs extrêmes.', 'Choisir et justifier l’indicateur selon la question posée (total ou typique ?).'],
    exemple: 'Villages : moyenne 380 000 Ar, médiane 200 000 Ar. L’écart révèle le commerçant. Pour décrire le revenu « typique » : la médiane. Pour estimer l’argent total circulant au village : la moyenne (× 10 habitants).',
    erreur: 'Croire que la moyenne est « le salaire de la plupart des gens » : dans notre village, 9 habitants sur 10 gagnent MOINS que la moyenne ! La moyenne n’est ni la valeur la plus courante (c’est le mode) ni celle du milieu (c’est la médiane).',
    saistu: 'L’INSTAT de Madagascar publie les deux indicateurs pour la consommation des ménages — et dans presque tous les pays du monde, le revenu médian est inférieur au revenu moyen. Devine pourquoi : les très hauts revenus sont rares mais énormes, et la moyenne les encaisse de plein fouet.',
    exos: ['Salaires d’un atelier (Ar) : 250 000 ; 250 000 ; 280 000 ; 300 000 ; 320 000 ; 1 600 000 (le patron). a) Moyenne ? b) Médiane ? d) Quel indicateur décrit mieux l’ouvrier typique ? e) Que devient chaque indicateur si le patron double son salaire ?',
      'Deux classes : A a pour notes une moyenne 11 et une médiane 11 ; B a une moyenne 11 et une médiane 8. a) Que dire de A ? b) Que cache B ? d) Dans quelle classe la moitié des élèves a-t-elle moins de 8 ? e) Laquelle semble la plus homogène ?',
      'Choisis et justifie (moyenne ou médiane). a) Estimer la récolte totale de paddy de 50 parcelles à partir d’une parcelle « représentative ». b) Décrire le prix « typique » d’une maison à Tana. d) Donner la taille « du milieu » d’une classe. e) Calculer le point moyen nécessaire pour gagner un championnat.'],
    corr: ['a) 3 000 000 ÷ 6 = 500 000 Ar ; b) (280 000 + 300 000) ÷ 2 = 290 000 Ar ; d) la médiane ; e) la moyenne monte (766 667), la médiane ne bouge pas.',
      'a) série équilibrée ; b) quelques très bonnes notes tirent la moyenne ; d) la B ; e) la A.',
      'a) moyenne (le total a un sens) ; b) médiane (prix extrêmes) ; d) médiane ; e) moyenne.'],
    fig: 'u5f7'
  },
  {
    t: 'Relier fréquence et probabilité', comp: 'Traitement de données', theme: 'Vers la probabilité : stabilisation des fréquences',
    goal: 'estimer une probabilité par la stabilisation des fréquences d’une expérience répétée',
    mat: 'Pièces de monnaie, dés, capsules, tableau de relevés, cahier',
    revQ: 'Fréquence = ... divisé par ... ?',
    revRA: 'Effectif de l’issue divisé par le nombre total d’essais.',
    situation: 'Lance une pièce 10 fois : tu peux obtenir 7 « pile » — fréquence 0,7. Lance-la 1 000 fois : la fréquence retombe vers 0,502. Plus on répète, plus la fréquence se calme et s’approche d’un nombre fixe : ce nombre-limite est la probabilité de l’événement.',
    def: 'La fréquence d’un événement est le quotient du nombre de fois où il se réalise par le nombre total de répétitions de l’expérience. Lorsque le nombre de répétitions devient très grand, la fréquence se stabilise autour d’un nombre appelé probabilité de l’événement.',
    autrement: 'la probabilité, c’est la fréquence « au bout du bout » : ce vers quoi tendent les résultats quand on répète l’expérience sans se lasser.',
    concept: 'Cette stabilisation porte un nom glorieux : la loi des grands nombres. Elle fait le pont entre deux mondes : la STATISTIQUE (on observe le passé : 540 piles sur 1 000 lancers, fréquence 0,54) et la PROBABILITÉ (on prédit l’avenir : la pièce équilibrée donnera pile une fois sur deux « à la longue »). Deux usages pratiques. D’abord, ESTIMER une probabilité inconnue : une punaise qui tombe pointe en l’air 620 fois sur 1 000 a une probabilité estimée de 0,62 — aucun calcul théorique ne pouvait le prédire, seule l’expérience parle. Ensuite, TESTER un équipement : un dé qui sort le six avec une fréquence de 0,35 sur 3 000 lancers est très probablement pipé, car la théorie dit 1/6 ≈ 0,17. Attention au contresens classique : la loi des grands nombres ne dit RIEN d’un lancer isolé — après 5 piles de suite, la pièce n’a aucune « mémoire » et la probabilité du 6ᵉ lancer reste 0,5. Le hasard n’a pas de dette.',
    synthese: 'fréquence = réalisations ÷ essais ; grand nombre d’essais → fréquence ≈ probabilité ; sert à estimer (punaise) et à tester (dé pipé) ; le hasard n’a pas de mémoire.',
    method: ['Répéter l’expérience un grand nombre de fois et compter les réalisations.', 'Calculer la fréquence = réalisations ÷ essais.', 'Prendre cette fréquence comme estimation de la probabilité (meilleure si essais nombreux).'],
    exemple: 'Une capsule de bouteille lancée 500 fois tombe 180 fois sur la tête. Fréquence : 180 ÷ 500 = 0,36. Estimation : P(tête) ≈ 0,36. Avec 5 000 lancers, l’estimation serait encore plus fiable.',
    erreur: 'Croire qu’après cinq « pile » consécutifs, « face » devient plus probable : chaque lancer repart de zéro ! La stabilisation est une promesse sur des MILLIERS de lancers, pas une correction du prochain.',
    saistu: 'Au 18ᵉ siècle, le naturaliste Buffon lança une pièce 4 040 fois : 2 048 piles, fréquence 0,5069. Le mathématicien Karl Pearson fit mieux : 24 000 lancers, fréquence 0,5005 ! Ces expériences de patience ont rendu la loi des grands nombres visible à l’œil nu.',
    exos: ['Un dé est lancé 600 fois ; le six sort 95 fois. a) Fréquence du six ? b) Probabilité théorique pour un dé équilibré ? d) Le dé semble-t-il équilibré ? e) Comment en avoir le cœur plus net ?',
      'Une punaise tombe pointe en l’air 312 fois sur 480 lancers. a) Fréquence ? b) Estimation de P(pointe en l’air) ? d) Pourquoi la théorie seule ne suffisait-elle pas ? e) P(pointe vers le sol) estimée ?',
      'Vrai ou faux ? a) 10 lancers suffisent pour estimer une probabilité. b) La fréquence vaut exactement la probabilité. d) Après 3 faces de suite, pile est plus probable au 4ᵉ lancer. e) Plus les essais sont nombreux, plus la fréquence est proche de la probabilité.'],
    corr: ['a) 95 ÷ 600 ≈ 0,158 ; b) 1/6 ≈ 0,167 ; d) oui, les deux sont proches ; e) multiplier les lancers.',
      'a) 312 ÷ 480 = 0,65 ; b) ≈ 0,65 ; d) la punaise n’a pas de faces symétriques ; e) ≈ 0,35.',
      'a) faux ; b) faux (elle s’en approche) ; d) faux — pas de mémoire ; e) vrai.'],
    fig: 'u5f8'
  },
  {
    t: 'Utiliser le vocabulaire probabiliste', comp: 'Traitement de données', theme: 'Expérience aléatoire, issue, univers, événement',
    goal: 'décrire une expérience aléatoire avec le vocabulaire : issue, univers, événement',
    mat: 'Dés, pièces, jetons numérotés, cahier',
    revQ: 'Qu’est-ce qu’une expérience dont la fréquence se stabilise peut définir ?',
    revRA: 'Une probabilité.',
    situation: 'Avant de calculer, il faut savoir nommer. Lancer un dé : nul ne peut prédire le résultat, mais tout le monde peut lister ce qui PEUT arriver : 1, 2, 3, 4, 5 ou 6. Ce petit inventaire du possible porte des noms précis que le BEPC exige : issue, univers, événement.',
    def: 'Une expérience aléatoire est une expérience dont le résultat ne peut pas être prédit avec certitude. Chaque résultat possible est une issue (ou un cas). L’ensemble de toutes les issues est l’univers. Un événement est un sous-ensemble de l’univers : il est réalisé lorsque l’issue obtenue lui appartient ; l’événement impossible ne contient aucune issue, l’événement certain les contient toutes.',
    autrement: 'l’univers est la liste complète des résultats possibles ; un événement est une sélection dans cette liste ; impossible = sélection vide ; certain = toute la liste.',
    concept: 'La méthode infaillible : TOUJOURS commencer par écrire l’univers. Pour le dé : Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6} — six issues. Un événement se décrit alors de deux manières équivalentes : en français (« obtenir un nombre pair ») ou en extension (A = {2 ; 4 ; 6}) — savoir passer de l’une à l’autre est LA compétence de la séance. Exemples complets sur le dé : B = « obtenir au moins 5 » = {5 ; 6} ; C = « obtenir 9 » = ∅, impossible ; D = « obtenir moins de 7 » = Ω, certain. Un événement réduit à une seule issue ({4}) est dit élémentaire. Pour la pièce : Ω = {pile ; face}, deux issues seulement. Attention à la distinction fine : l’issue « 6 » est un RÉSULTAT ; l’événement « obtenir 6 » = {6} est un ENSEMBLE — la nuance paraît pointilleuse, elle structure tout le calcul des probabilités à venir : on additionnera des probabilités d’ensembles, pas des résultats.',
    synthese: 'écrire Ω d’abord ; événement = sous-ensemble (français ↔ extension) ; ∅ = impossible, Ω = certain ; élémentaire = une seule issue.',
    method: ['Lister l’univers Ω de l’expérience.', 'Traduire chaque événement en extension : la liste de ses issues.', 'Classer : élémentaire, impossible (∅), certain (Ω).'],
    exemple: 'On tire une boule dans un sac contenant 3 rouges (R), 2 vertes (V) et 1 noire (N). Univers : {R ; V ; N}. Événement « ne pas tirer de rouge » = {V ; N}. Événement « tirer une bleue » = ∅ : impossible.',
    erreur: 'Confondre issue et événement : « j’ai obtenu un 4 » est une issue ; « obtenir un nombre pair » est un événement qui CONTIENT cette issue. L’événement peut se réaliser de plusieurs façons, l’issue est une seule façon.',
    saistu: 'La lettre Ω (oméga) qui note l’univers est la dernière lettre de l’alphabet grec — comme pour dire : voilà TOUT ce qui peut arriver, rien au-delà. Ce symbole fut popularisé par le mathématicien russe Kolmogorov, qui donna aux probabilités leurs règles définitives en 1933.',
    exos: ['On lance un dé à 6 faces. a) Écris l’univers. b) Écris en extension A = « obtenir un multiple de 3 ». d) B = « obtenir 0 » : quelle sorte d’événement ? e) D = « obtenir un entier entre 1 et 6 » : quelle sorte ?',
      'On tire une carte parmi 4 cartes numérotées 1, 2, 3, 4. a) Univers ? b) E = « numéro impair » en extension ? d) F = « numéro supérieur ou égal à 2 » en extension ? e) Un événement élémentaire : donne un exemple.',
      'Une roue de kermesse porte les couleurs rouge, vert, jaune. a) Univers ? b) « Obtenir une couleur du drapeau malgache » : extension ? d) « Obtenir du violet » : nature ? e) Combien d’événements élémentaires possède cette expérience ?'],
    corr: ['a) {1 ; 2 ; 3 ; 4 ; 5 ; 6} ; b) {3 ; 6} ; d) impossible (∅) ; e) certain (Ω).',
      'a) {1 ; 2 ; 3 ; 4} ; b) {1 ; 3} ; d) {2 ; 3 ; 4} ; e) {3} par exemple.',
      'a) {rouge ; vert ; jaune} ; b) {rouge ; vert} ; d) impossible ; e) trois : {rouge}, {vert}, {jaune}.'],
    fig: 'u5f9'
  },
  {
    t: 'Calculer la probabilité d’un événement', comp: 'Traitement de données', theme: 'Équiprobabilité : cas favorables sur cas possibles',
    goal: 'calculer la probabilité d’un événement en situation d’équiprobabilité',
    mat: 'Dés, jetons, urnes improvisées, cahier',
    revQ: 'Écris l’univers du lancer d’un dé et l’événement « pair » en extension.',
    revRA: 'Ω = {1 ; 2 ; 3 ; 4 ; 5 ; 6} ; A = {2 ; 4 ; 6}.',
    situation: 'Le dé du jeu de Fanorona de Hery est bien équilibré : aucune face n’est favorisée, chacune a une chance sur six. Quelle chance d’obtenir un nombre pair ? Trois faces amies (2, 4, 6) sur six possibles : trois chances sur six — une sur deux. Tu viens de calculer ta première probabilité.',
    def: 'Lorsque toutes les issues d’une expérience ont la même chance de se produire (équiprobabilité), la probabilité d’un événement A est : P(A) = nombre de cas favorables ÷ nombre de cas possibles. Une probabilité est toujours comprise entre 0 et 1 ; P(∅) = 0 et P(Ω) = 1.',
    autrement: 'compter les issues qui arrangent, compter toutes les issues, diviser : la probabilité est la part du gâteau qui revient à l’événement.',
    concept: 'Le mot-clé est ÉQUIPROBABILITÉ, et il se mérite : dé « équilibré », pièce « non truquée », boules « indiscernables au toucher », carte tirée « au hasard » — ces formules des énoncés sont des contrats qui autorisent la formule. Sans elles, retour à la séance 8 : seules les fréquences peuvent parler (la punaise n’a pas d’issues équiprobables !). Le calcul devient alors un DOUBLE COMPTAGE : cas possibles = taille de l’univers, cas favorables = taille de l’événement. P(pair) = 3/6 = 1/2 ; P(au moins 5) = 2/6 = 1/3 ; P(multiple de 3) = 2/6 = 1/3. La probabilité s’exprime en fraction (exacte, préférée au BEPC), en décimal ou en pourcentage : 1/2 = 0,5 = 50 %. Les bornes sont des garde-fous : un résultat de 1,2 ou de −0,3 est automatiquement FAUX. Et plus l’urne grossit, plus le comptage prime : dans un sac de 3 rouges, 2 vertes, 1 noire, les COULEURS ne sont pas équiprobables, mais les 6 BOULES le sont : P(rouge) = 3/6 — compter les boules, jamais les couleurs.',
    synthese: 'équiprobabilité à vérifier (mots du contrat) ; P = favorables ÷ possibles ; 0 ≤ P ≤ 1 ; fraction exacte de préférence ; compter les objets, pas les catégories.',
    method: ['Vérifier l’équiprobabilité (« équilibré », « au hasard »...).', 'Compter les cas possibles (univers) et les cas favorables (événement).', 'Diviser, simplifier la fraction, contrôler 0 ≤ P ≤ 1.'],
    exemple: 'Sac : 3 boules rouges, 2 vertes, 1 noire, indiscernables. P(rouge) = 3/6 = 1/2 ; P(verte) = 2/6 = 1/3 ; P(noire) = 1/6. Contrôle : 1/2 + 1/3 + 1/6 = 1 ✓ — tout l’univers est couvert.',
    erreur: 'Dire « deux issues possibles : gagner ou perdre, donc P = 1/2 » pour n’importe quel jeu : les issues doivent être ÉQUIPROBABLES ! À la loterie, « gagner » et « perdre » existent tous deux… avec des chances très inégales.',
    saistu: 'Le calcul des probabilités est né d’un problème de jeu : en 1654, le chevalier de Méré demanda à Blaise Pascal pourquoi il perdait de l’argent en pariant sur les dés. La correspondance entre Pascal et Fermat pour lui répondre fonda une branche entière des mathématiques !',
    exos: ['Un dé équilibré. a) P(obtenir 5) ? b) P(obtenir un nombre impair) ? d) P(obtenir au plus 2) ? e) P(obtenir 7) ?',
      'Une urne : 4 boules bleues, 5 jaunes, 1 blanche, indiscernables. a) Cas possibles ? b) P(bleue) ? d) P(jaune) en pourcentage ? e) P(bleue ou blanche) ?',
      'Les 26 lettres de l’alphabet sur des jetons ; on tire au hasard. a) P(tirer la lettre M) ? b) P(tirer une voyelle — a, e, i, o, u, y) ? d) P(tirer une lettre du mot GASY — lettres distinctes) ? e) P(tirer une lettre de l’alphabet) ?'],
    corr: ['a) 1/6 ; b) 3/6 = 1/2 ; d) 2/6 = 1/3 ; e) 0 (impossible).',
      'a) 10 ; b) 4/10 = 2/5 ; d) 5/10 = 50 % ; e) 5/10 = 1/2.',
      'a) 1/26 ; b) 6/26 = 3/13 ; d) 4/26 = 2/13 ; e) 1 (certain).'],
    fig: 'u5f10'
  },
  {
    t: 'Utiliser P(A∪B) et P(A∩B)', comp: 'Traitement de données', theme: 'Réunion, intersection, incompatibilité',
    goal: 'calculer la probabilité d’une réunion et d’une intersection d’événements',
    mat: 'Dés, diagrammes à deux cercles, cahier',
    revQ: 'Sur un dé : P(pair) ? P(multiple de 3) ?',
    revRA: '3/6 = 1/2 ; 2/6 = 1/3.',
    situation: 'Hery gagne si le dé donne un nombre pair OU un multiple de 3. Faut-il additionner 1/2 + 1/3 ? Attention : le 6 est à la fois pair ET multiple de 3 — l’additionner deux fois serait tricher. Les mots OU et ET ont leurs symboles, ∪ et ∩, et leur règle de calcul.',
    def: 'La réunion A ∪ B (lire « A union B ») est l’événement réalisé lorsque A ou B (au moins l’un des deux) se réalise. L’intersection A ∩ B (« A inter B ») est réalisée lorsque A et B se réalisent en même temps. Deux événements sont incompatibles lorsque A ∩ B = ∅ ; alors P(A ∪ B) = P(A) + P(B). Dans le cas général : P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
    autrement: '∪ = « ou » (au moins l’un), ∩ = « et » (les deux à la fois) ; on additionne, puis on retire une fois ce qui a été compté deux fois.',
    concept: 'Le diagramme à deux cercles rend tout visible. Sur le dé : A = pair = {2 ; 4 ; 6}, B = multiple de 3 = {3 ; 6}. Leur chevauchement : A ∩ B = {6}. Leur territoire commun total : A ∪ B = {2 ; 3 ; 4 ; 6}. Comptons : P(A ∪ B) = 4/6 = 2/3. La formule retrouve ce résultat : 3/6 + 2/6 − 1/6 = 4/6 ✓ — la soustraction de P(A ∩ B) corrige le double comptage du 6, exactement comme à la séance des ensembles de l’unité 1. Le cas INCOMPATIBLE est le cas confortable : A = {1 ; 2} et C = {5 ; 6} ne se touchent pas, donc P(A ∪ C) = 2/6 + 2/6 = 4/6 — l’addition simple du programme. Réflexe d’examen : avant toute addition de probabilités, poser LA question « les événements peuvent-ils se produire ensemble ? ». Oui → formule complète ; non → addition directe. L’oubli du terme correctif est l’erreur la plus payée de tout le chapitre.',
    synthese: 'A∪B = ou ; A∩B = et ; incompatibles (∩ = ∅) → addition simple ; sinon P(A∪B) = P(A) + P(B) − P(A∩B) ; toujours tester l’incompatibilité d’abord.',
    method: ['Écrire A et B en extension et chercher A ∩ B.', 'Si A ∩ B = ∅ : additionner. Sinon : additionner puis soustraire P(A ∩ B).', 'Contrôler sur le diagramme ou par comptage direct de A ∪ B.'],
    exemple: 'Dé : A = pair, B = multiple de 3. P(A ∩ B) = P({6}) = 1/6. P(A ∪ B) = 1/2 + 1/3 − 1/6 = 3/6 + 2/6 − 1/6 = 4/6 = 2/3. Comptage direct de {2 ; 3 ; 4 ; 6} : 4/6 ✓.',
    erreur: 'Additionner sans vérifier l’incompatibilité : P(pair) + P(multiple de 3) = 5/6 est FAUX car le 6 est compté deux fois. Le test « ∩ = ∅ ? » doit précéder toute addition — deux secondes qui sauvent l’exercice.',
    saistu: 'Les symboles ∪ et ∩ ont été introduits par l’italien Giuseppe Peano en 1888. Moyen mnémotechnique : ∪ ressemble à un U comme « Union » — et le ∩, à un pont où les deux événements se rencontrent !',
    exos: ['Dé équilibré, A = {1 ; 2 ; 3}, B = {3 ; 4}. a) A ∩ B ? b) P(A ∩ B) ? d) P(A ∪ B) par la formule ? e) Vérifie par comptage direct.',
      'Dé : C = « au plus 2 » et D = « au moins 5 ». a) C et D en extension ? b) Sont-ils incompatibles ? d) P(C ∪ D) ? e) Décris l’événement contraire de C ∪ D en extension.',
      'Dans une classe de 30 : 18 font du foot (F), 10 du basket (B), 4 font les deux. On choisit un élève au hasard. a) P(F) ? b) P(F ∩ B) ? d) P(F ∪ B) ? e) Combien d’élèves ne pratiquent aucun des deux ?'],
    corr: ['a) {3} ; b) 1/6 ; d) 3/6 + 2/6 − 1/6 = 4/6 = 2/3 ; e) A ∪ B = {1 ; 2 ; 3 ; 4} : 4/6 ✓.',
      'a) C = {1 ; 2}, D = {5 ; 6} ; b) oui, C ∩ D = ∅ ; d) 2/6 + 2/6 = 2/3 ; e) {3 ; 4}.',
      'a) 18/30 = 3/5 ; b) 4/30 = 2/15 ; d) 18/30 + 10/30 − 4/30 = 24/30 = 4/5 ; e) 30 − 24 = 6.'],
    fig: 'u5f11'
  },
  {
    t: 'Utiliser l’événement contraire', comp: 'Traitement de données', theme: 'Événement contraire : P(Ā) = 1 − P(A)',
    goal: 'utiliser l’événement contraire pour calculer et résoudre des problèmes',
    mat: 'Dés, urnes, énoncés de problèmes, cahier',
    revQ: 'P(A ∪ B) quand A et B sont incompatibles ?',
    revRA: 'P(A) + P(B).',
    situation: 'Dans le sac de Voara : 8 billes dont 2 rouges. « Quelle chance de NE PAS tirer une rouge ? » On pourrait compter les 6 billes non rouges… ou raisonner en malin : tout ce qui n’est pas « rouge » est son contraire, et les deux chances se partagent le gâteau entier : P = 1 − 2/8 = 6/8. Le détour par le contraire est souvent le chemin le plus court.',
    def: 'L’événement contraire de A, noté Ā, est l’événement réalisé exactement lorsque A ne l’est pas : il contient toutes les issues de l’univers qui ne sont pas dans A. A et Ā sont incompatibles et leur réunion est l’univers ; il en résulte P(Ā) = 1 − P(A).',
    autrement: 'A et son contraire se partagent tout le possible : leurs probabilités s’additionnent toujours à 1 — connaître l’une, c’est connaître l’autre.',
    concept: 'La formule se démontre en une ligne avec les outils de la séance 11 : A ∩ Ā = ∅ (incompatibles) et A ∪ Ā = Ω, donc P(A) + P(Ā) = P(Ω) = 1. Sa vraie puissance est STRATÉGIQUE : certains événements sont pénibles à compter de face et triviaux de dos. Champion toutes catégories : « AU MOINS UN ». Deux dés : P(au moins un six) demande de compter 11 cas tordus… mais son contraire « aucun six » se compte en un éclair (25 cas sur 36), d’où P = 1 − 25/36 = 11/36. Le réflexe : dès que l’énoncé dit « au moins », « pas », « ne... aucun », penser contraire. Autres paires classiques : « pair » / « impair » ; « au plus 4 » / « au moins 5 » ; « gagner » / « ne pas gagner ». Garde-fou : le contraire de « au moins 5 » n’est PAS « au plus 5 » mais « au plus 4 » — les deux événements ne doivent se partager AUCUNE issue. Cette séance clôt le manuel : mode, moyenne, médiane, fréquences, probabilités — te voilà armé pour lire les chiffres du monde en citoyen critique.',
    synthese: 'P(Ā) = 1 − P(A) ; « au moins un » → passer au contraire « aucun » ; contraire de « au moins 5 » = « au plus 4 » ; A et Ā se partagent Ω sans chevauchement.',
    method: ['Identifier l’événement pénible à compter (souvent « au moins un »).', 'Décrire précisément son contraire et calculer sa probabilité.', 'Conclure : P(A) = 1 − P(Ā).'],
    exemple: 'Sac de 8 billes dont 2 rouges : P(rouge) = 2/8 = 1/4, donc P(pas rouge) = 1 − 1/4 = 3/4. Vérification directe : 6 billes non rouges sur 8 = 3/4 ✓.',
    erreur: 'Donner pour contraire de « obtenir au moins 5 » l’événement « obtenir au plus 5 » : les deux contiennent l’issue 5 ! Le contraire exact est « au plus 4 » — contraire = partage total SANS chevauchement.',
    saistu: 'Les assureurs vivent de l’événement contraire : pour fixer le prix d’une assurance, ils calculent la probabilité qu’il n’arrive RIEN — bien plus simple à estimer ! Si P(aucun sinistre) = 0,93, alors P(au moins un sinistre) = 0,07 : la prime est calée sur ce 7 %.',
    exos: ['Dé équilibré, A = « obtenir 6 ». a) P(A) ? b) Décris Ā. d) P(Ā) par la formule ? e) Vérifie en comptant.',
      'Urne : 4 bleues, 5 jaunes, 1 blanche. a) P(ne pas tirer une jaune) ? b) P(ne pas tirer une blanche) ? d) Quel calcul est plus rapide : direct ou contraire ? e) P(tirer une bleue ou une non-bleue) ?',
      'La météo annonce P(pluie) = 0,35 pour demain. a) P(pas de pluie) ? b) Sur un mois de 30 jours semblables, combien de jours de pluie attendre environ ? d) Le contraire de « il pleut au moins un jour du week-end » ? e) Si P(aucune pluie le week-end) = 0,42, alors P(au moins un jour de pluie) ?'],
    corr: ['a) 1/6 ; b) « ne pas obtenir 6 » = {1 ; 2 ; 3 ; 4 ; 5} ; d) 1 − 1/6 = 5/6 ; e) 5 issues sur 6 ✓.',
      'a) 1 − 5/10 = 1/2 ; b) 1 − 1/10 = 9/10 ; d) le contraire (une seule soustraction) ; e) 1 (certain).',
      'a) 0,65 ; b) 0,35 × 30 ≈ 10 jours ; d) « il ne pleut aucun jour du week-end » ; e) 1 − 0,42 = 0,58.'],
    fig: 'u5f12'
  }
];

const unit5 = {
  no: 5, roman: 'V', name: 'Traitement de données',
  rag: 'résoudre des situations problématiques quotidiennes en recueillant, organisant, représentant et interprétant des données statistiques et en utilisant le vocabulaire et le calcul des probabilités.',
  valeurs: 'responsabilité et pensée critique',
  sessions: S,
  revision: {
    table: [
      ['Population / échantillon', 'Tout le monde / la partie interrogée ; représentatif, sans biais', 'Enquêtes honnêtes, sondages fiables'],
      ['Mode', 'Valeur d’effectif maximal ; classe modale en continu', 'Lire un diagramme d’un coup d’œil'],
      ['Moyenne', 'x̄ = Σnᵢxᵢ ÷ N ; sensible aux extrêmes ; classes → centres', 'Partage équitable, totaux'],
      ['Médiane', 'Valeur du milieu ; cumuls puis rangs ; interpolation en continu', 'Valeur typique robuste (revenus !)'],
      ['Fréquence → probabilité', 'La fréquence se stabilise sur P quand les essais se multiplient', 'Estimer (punaise), tester (dé pipé)'],
      ['Calcul de P', 'P = favorables ÷ possibles ; P(A∪B) = P(A)+P(B)−P(A∩B) ; P(Ā) = 1−P(A)', 'Jeux, assurance, météo, décisions']
    ],
    questions: [
      'Âges des 40 élèves (12→5, 13→8, 14→12, 15→7, 16→6, 17→2) : mode, moyenne, médiane ?',
      'Voitures : rappelle la classe médiane et la médiane interpolée (N = 1 200).',
      'Neuf salaires de 200 000 Ar et un de 2 000 000 Ar : quel indicateur décrit le salarié typique, et pourquoi ?',
      'Dé équilibré : P(pair), P(multiple de 3), P(pair ∪ multiple de 3) ?',
      'P(au moins un six avec deux dés), sachant P(aucun six) = 25/36 ?'
    ],
    answers: [
      'Mode 14 ; moyenne 567 ÷ 40 = 14,175 ; médiane 14.',
      '[10 ; 15[ ; Me = 10 + (600 − 528) ÷ 144 × 5 = 12,5.',
      'La médiane (200 000 Ar) : elle résiste à la valeur extrême du commerçant.',
      '1/2 ; 1/3 ; 1/2 + 1/3 − 1/6 = 2/3.',
      '1 − 25/36 = 11/36.'
    ]
  },
  exam: {
    exos: [
      'Les masses (kg) de 50 sacs de charbon : [10 ; 14[ : 8 ; [14 ; 18[ : 15 ; [18 ; 22[ : 17 ; [22 ; 26[ : 10. a) Dresse les effectifs cumulés. b) Donne la classe modale. d) Calcule la moyenne avec les centres de classes. e) La population étudiée et le caractère ?',
      'Avec la même série de 50 sacs. a) Que vaut N ÷ 2 ? b) Quelle est la classe médiane ? d) Calcule la médiane par interpolation. e) Interprète-la par une phrase.',
      'Notes d’un concours : 6 candidats ont 8, 9 candidats ont 10, 4 ont 13, 1 a 19. a) Moyenne (au dixième) ? b) Médiane ? d) Lequel des deux indicateurs le candidat à 19 tire-t-il vers le haut ? e) Quel indicateur choisirais-tu pour décrire le candidat typique ?',
      'Un sac contient 10 jetons numérotés de 1 à 10, indiscernables. a) P(numéro pair) ? b) P(multiple de 5) ? d) P(pair ∩ multiple de 5) puis P(pair ∪ multiple de 5) ? e) P(ne pas tirer un multiple de 5) ?',
      'Une pièce est lancée 2 000 fois : 1 024 « pile ». a) Fréquence de pile ? b) Que peut-on estimer pour P(pile) et que conclure sur la pièce ? d) Au 2 001ᵉ lancer, P(pile) après 3 piles consécutifs ? e) Donne l’événement contraire de « obtenir au moins un pile en deux lancers » et sa probabilité (pièce équilibrée, P(aucun pile) = 1/4).'
    ],
    corr: [
      'a) 8, 23, 40, 50 ; b) [18 ; 22[ ; d) (12×8 + 16×15 + 20×17 + 24×10) ÷ 50 = 916 ÷ 50 = 18,32 kg ; e) les 50 sacs ; la masse (quantitatif). Un point par item.',
      'a) 25 ; b) [18 ; 22[ (cumul 40 ≥ 25) ; d) 18 + (25 − 23) ÷ 17 × 4 ≈ 18,47 kg ; e) la moitié des sacs pèse moins de 18,47 kg environ. Un point par item.',
      'a) (48 + 90 + 52 + 19) ÷ 20 = 209 ÷ 20 = 10,45 ≈ 10,5 ; b) (10 + 10) ÷ 2 = 10 ; d) la moyenne ; e) la médiane. Un point par item.',
      'a) 5/10 = 1/2 ; b) 2/10 = 1/5 ; d) P({10}) = 1/10 ; 1/2 + 1/5 − 1/10 = 6/10 = 3/5 ; e) 1 − 1/5 = 4/5. Un point par item.',
      'a) 1 024 ÷ 2 000 = 0,512 ; b) P(pile) ≈ 0,51 : pièce sensiblement équilibrée ; d) 0,5 — le hasard n’a pas de mémoire ; e) « aucun pile en deux lancers », P = 1/4, donc P(au moins un pile) = 3/4. Un point par item.'
    ]
  }
};

(async () => {
  const bufs = await L.render(figs);
  await buildUnit(unit5, bufs);
})();
