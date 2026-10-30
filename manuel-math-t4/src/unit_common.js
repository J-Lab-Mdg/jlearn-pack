const L = require('./figlib');
const { buildUnit } = require('./engine');
const { svg, txt, box, bar, grid100, tableEl, arrow, dot, seg, circle, poly, nline, BLUE, PINK, PINK2, GREEN, GREENL, OCRE, BLUEL } = L;

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const T = (x, y, s, size = 27, fill = '#222', weight = 'normal', anchor = 'start') => txt(x, y, esc(s), size, fill, weight, anchor);
const C = { blue: BLUE, pink: PINK, pink2: PINK2, green: GREEN, greenl: GREENL, ocre: OCRE, bluel: BLUEL };

function figure(kind, title, visual = '') {
  let b = T(42, 46, title, 30, BLUE, 'bold');
  b += T(44, 84, visual || 'Observe le dessin, explique ce que tu vois, puis vérifie par un calcul.', 22, '#333');
  if (kind === 'cross') {
    b += circle(665, 330, 130, BLUE, '#F8FBFF', 4);
    b += seg(665, 210, 665, 450, BLUE, 3) + seg(545, 330, 785, 330, BLUE, 3);
    b += T(665, 188, 'H', 32, PINK2, 'bold', 'middle') + T(665, 505, 'B', 32, PINK2, 'bold', 'middle');
    b += T(510, 340, 'G', 32, GREEN, 'bold', 'middle') + T(820, 340, 'D', 32, GREEN, 'bold', 'middle');
    b += T(665, 570, 'gauche = droite  →  résultat contrôlé', 27, GREEN, 'bold', 'middle');
  } else if (kind === 'division') {
    b += T(260, 190, '127', 52, BLUE, 'bold', 'middle') + seg(175, 215, 345, 215, BLUE, 4);
    b += T(260, 275, '5', 42, PINK2, 'bold', 'middle');
    b += T(600, 190, '25', 52, GREEN, 'bold', 'middle') + T(600, 275, '× 5', 32, BLUE, 'bold', 'middle');
    b += arrow(360, 220, 500, 220, GREEN, 4) + T(665, 370, 'dans 12, combien de fois 5 ?', 28, OCRE, 'bold', 'middle');
    b += T(665, 450, '5 × 25 + 2 = 127', 34, PINK2, 'bold', 'middle');
  } else if (kind === 'fraction') {
    b += bar(100, 150, 580, 90, 4, 3, PINK);
    b += T(390, 285, '3/4 : 3 parts prises sur 4 parts égales', 27, PINK2, 'bold', 'middle');
    b += bar(750, 150, 400, 90, 8, 4, GREENL);
    b += T(950, 285, '4/8 = 1/2', 30, GREEN, 'bold', 'middle');
  } else if (kind === 'decimal') {
    b += tableEl(130, 145, [190, 190, 190, 190], 70, [['unités', 'dixièmes', 'centièmes', ''], ['4', '5', '0', ''], ['4', '0,5', '0', '']]);
    b += T(650, 400, '4,50 = 4,5', 38, PINK2, 'bold', 'middle');
    b += grid100(920, 150, 12, 45, PINK);
  } else if (kind === 'sequence') {
    const vals = ['2', '5', '8', '11', '…']; vals.forEach((v, i) => { b += box(120 + i * 205, 180, 130, 74, v, i === 4 ? '#FFF8E1' : BLUEL, i === 4 ? OCRE : BLUE, 32); if (i < 4) b += arrow(255 + i * 205, 217, 310 + i * 205, 217, GREEN, 3); });
    b += T(665, 380, 'régularité : +3', 34, GREEN, 'bold', 'middle');
  } else if (kind === 'equality') {
    b += box(130, 170, 240, 90, '7 + 5', BLUEL, BLUE, 36) + T(450, 230, '=', 50, PINK2, 'bold', 'middle') + box(530, 170, 240, 90, '10 + 2', GREENL, GREEN, 36);
    b += T(665, 390, 'les deux côtés ont la même valeur : 12', 28, BLUE, 'bold', 'middle');
  } else if (kind === 'angle') {
    b += seg(230, 390, 650, 390, BLUE, 5) + seg(230, 390, 410, 150, PINK2, 5);
    b += T(250, 420, 'sommet', 23, BLUE, 'bold') + T(460, 150, 'deux côtés', 23, PINK2, 'bold');
    b += T(880, 280, 'aigu < 90°', 28, GREEN, 'bold', 'middle');
    b += T(880, 350, 'droit = 90°', 28, BLUE, 'bold', 'middle');
    b += T(880, 420, 'obtus > 90°', 28, OCRE, 'bold', 'middle');
  } else if (kind === 'triangle') {
    b += poly([[150, 410], [390, 150], [650, 410]], '#FCE4EC', PINK2, 5);
    b += T(397, 135, 'sommet', 22, PINK2, 'bold', 'middle');
    b += T(390, 485, '3 côtés, 3 sommets, 3 angles', 29, BLUE, 'bold', 'middle');
    b += T(940, 220, 'équilatéral', 26, GREEN, 'bold', 'middle') + T(940, 290, 'isocèle', 26, BLUE, 'bold', 'middle') + T(940, 360, 'rectangle', 26, OCRE, 'bold', 'middle');
  } else if (kind === 'circle') {
    b += circle(400, 300, 145, BLUE, '#F3F8FC', 5) + dot(400, 300, 8, PINK2);
    b += seg(400, 300, 545, 300, PINK2, 4) + seg(255, 300, 545, 300, GREEN, 3);
    b += T(400, 330, 'O', 25, PINK2, 'bold', 'middle') + T(475, 285, 'rayon', 23, PINK2, 'bold', 'middle') + T(400, 360, 'diamètre', 23, GREEN, 'bold', 'middle');
  } else if (kind === 'solid') {
    b += poly([[170, 250], [400, 170], [650, 250], [420, 335]], '#EAF2F8', BLUE, 4);
    b += poly([[170, 250], [170, 440], [420, 525], [420, 335]], '#E8F5E9', GREEN, 4);
    b += poly([[420, 335], [650, 250], [650, 440], [420, 525]], '#FCE4EC', PINK2, 4);
    b += T(910, 240, 'faces', 27, BLUE, 'bold', 'middle') + T(910, 315, 'arêtes', 27, GREEN, 'bold', 'middle') + T(910, 390, 'sommets', 27, PINK2, 'bold', 'middle');
  } else if (kind === 'transform') {
    b += poly([[160, 400], [260, 200], [360, 400]], '#FCE4EC', PINK2, 4);
    b += arrow(430, 300, 720, 300, GREEN, 6);
    b += poly([[760, 400], [860, 200], [960, 400]], '#E8F5E9', GREEN, 4);
    b += T(565, 370, 'même forme, déplacée', 27, BLUE, 'bold', 'middle');
  } else if (kind === 'measure') {
    b += tableEl(120, 145, [135, 135, 135, 135, 135, 135, 135], 62, [['km', 'hm', 'dam', 'm', 'dm', 'cm', 'mm'], ['×', '×', '×', '1', '÷', '÷', '÷']]);
    b += arrow(180, 350, 1000, 350, GREEN, 5) + T(590, 415, 'une colonne = ×10 ou ÷10', 30, GREEN, 'bold', 'middle');
  } else if (kind === 'area') {
    for (let i = 0; i < 6; i++) for (let j = 0; j < 3; j++) b += `<rect x="${150 + i * 70}" y="${150 + j * 70}" width="70" height="70" fill="${(i + j) % 2 ? '#F8BBD0' : '#EAF2F8'}" stroke="#1F4E79" stroke-width="2"/>`;
    b += T(380, 405, '6 × 3 = 18 unités carrées', 30, PINK2, 'bold', 'middle');
    b += T(850, 260, 'aire = longueur × largeur', 29, GREEN, 'bold', 'middle');
  } else if (kind === 'data') {
    b += tableEl(120, 150, [260, 180], 62, [['Fruit', 'Effectif'], ['Mangue', '6'], ['Banane', '4'], ['Orange', '2']]);
    b += seg(650, 430, 1160, 430, BLUE, 4) + seg(650, 430, 650, 150, BLUE, 4);
    [6, 4, 2].forEach((v, i) => { b += `<rect x="${720 + i * 135}" y="${430 - v * 35}" width="70" height="${v * 35}" fill="${[PINK, BLUEL, GREENL][i]}" stroke="#1F4E79" stroke-width="3"/>`; b += T(755 + i * 135, 470, ['M', 'B', 'O'][i], 22, BLUE, 'bold', 'middle'); });
    b += T(900, 105, 'tableau → graphique', 28, GREEN, 'bold', 'middle');
  } else if (kind === 'probability') {
    b += box(135, 180, 230, 90, 'impossible', '#FDECEA', PINK2, 28) + box(430, 180, 230, 90, 'possible', '#FFF8E1', OCRE, 28) + box(725, 180, 230, 90, 'certain', GREENL, GREEN, 28);
    b += arrow(365, 225, 430, 225, BLUE, 4) + arrow(660, 225, 725, 225, BLUE, 4);
    b += T(540, 390, 'répéter → compter → comparer les chances', 29, BLUE, 'bold', 'middle');
  } else {
    b += box(220, 170, 300, 100, kind || 'notion', BLUEL, BLUE, 30);
    b += arrow(560, 220, 780, 220, GREEN, 5);
    b += box(820, 170, 300, 100, 'je vérifie', GREENL, GREEN, 30);
    b += T(665, 405, visual || 'manipuler → représenter → calculer → expliquer', 29, PINK2, 'bold', 'middle');
  }
  return svg(1333, 600, b);
}

const defaults = (s, unit) => {
  const method = s.method || ['Observe la situation et repère les données utiles.', 'Choisis une représentation ou un outil.', 'Applique la règle en écrivant chaque étape.', 'Vérifie le résultat et explique ta réponse.'];
  const ex = s.exemple || `${s.t} : ${s.rule || 'on observe, on représente, puis on vérifie.'}`;
  return Object.assign({
    comp: unit.comp, theme: s.theme || s.t, goal: s.goal || 'utiliser la règle étudiée dans une situation simple', mat: s.mat || 'Tableau, ardoise, objets à manipuler, règle et crayons',
    revQ: s.revQ || 'Rappelle une notion déjà étudiée.', revRA: s.revRA || 'Réponse attendue expliquée oralement.', situation: s.situation || `Dans une situation de la vie courante, comment utiliser ${s.t.toLowerCase()} ?`,
    def: s.def || s.rule || `${s.t} est une notion qui se comprend en observant, en manipulant et en calculant.`, autrement: s.autrement || 'Je transforme la situation en dessin, tableau ou calcul.', concept: s.concept || ex,
    method, exemple: ex, erreur: s.erreur || 'Ne saute pas l’étape de représentation et vérifie toujours l’unité ou le résultat.', saistu: s.saistu || 'Un exemple concret aide à comprendre une règle avant de la mémoriser.',
    fig: s.fig, exos: s.exos || ['Donne un exemple.', 'Applique la règle.', 'Complète le tableau.', 'Explique ta démarche.', 'Vérifie ton résultat.', 'Défi : invente une situation.'], corr: s.corr || ['Réponse justifiée.', 'Application correcte.', 'Tableau complété.', 'Démarche expliquée.', 'Vérification correcte.', 'Réponse personnelle possible.'], jeu: s.jeu || 'Le jeu de l’ardoise : chacun propose, explique et corrige avec respect.'
  }, s);
};

async function runUnit(unit) {
  unit.sessions = unit.sessions.map(s => defaults(s, unit));
  const figs = {};
  for (const s of unit.sessions) figs[s.fig] = figure(s.kind || 'generic', s.figTitle || s.t, s.visual || 'Manipuler → représenter → calculer → expliquer.');
  const bufs = await L.render(figs);
  await buildUnit(unit, bufs);
}

module.exports = { runUnit };
