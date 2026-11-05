// Visuels déterministes pour les prototypes pilotes Arts T9 : peinture, sculpture S6, musique, danse, art dramatique.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const QR = require('qrcode');

const A = path.join(__dirname, '..', 'assets', 'pilots');
fs.mkdirSync(A, { recursive: true });
const BLUE = '#1F4E79', GREEN = '#1E7B34', RED = '#C00000', ORANGE = '#E67E22', GREY = '#666';
const FONT = 'DejaVu Sans, Arial, sans-serif';
const manifest = {};
const BRANCH = 'arena/3f402b0e-jlearn-pack';
const RAW = `https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/${BRANCH}/art-t9/assets/pilots/`;

function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function svg(w, h, body, defs = '') { return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs>${defs}</defs><rect width="100%" height="100%" fill="white"/>${body}</svg>`; }
function text(x, y, t, size = 28, color = '#222', anchor = 'start', weight = 'normal') { return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${esc(t)}</text>`; }
function line(x1, y1, x2, y2, color = BLUE, width = 4, dash = '') { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`; }
function arrowDef(color = BLUE) { return `<marker id="arrow-${color.slice(1)}" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="16" refY="7" orient="auto"><path d="M0,0 L17,7 L0,14 Z" fill="${color}"/></marker>`; }
function arrow(x1, y1, x2, y2, color = BLUE, width = 5) { return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" marker-end="url(#arrow-${color.slice(1)})"/>`; }
function badge(t) { return `<rect x="25" y="25" width="110" height="58" rx="12" fill="${BLUE}"/>${text(80, 65, t, 30, 'white', 'middle', 'bold')}`; }
function box(x, y, w, h, fill = 'white', stroke = '#333', sw = 3) { return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`; }
async function save(name, markup, width = 1200) {
  fs.writeFileSync(path.join(A, name + '.svg'), markup);
  await sharp(Buffer.from(markup)).resize({ width }).png().toFile(path.join(A, name + '.png'));
  const m = await sharp(path.join(A, name + '.png')).metadata();
  manifest[name + '.png'] = { width: m.width, height: m.height, role: name };
}
async function resizeScene(file) {
  const src = path.join(A, file);
  const out = /_1100\.jpg$/i.test(file) ? file : file.replace(/\.(png|jpg|jpeg)$/i, '_1100.jpg');
  const tmp = path.join(A, '_tmp_' + out);
  await sharp(src).resize({ width: 1100 }).jpeg({ quality: 84, mozjpeg: true }).toFile(tmp);
  fs.renameSync(tmp, path.join(A, out));
  const m = await sharp(path.join(A, out)).metadata();
  manifest[out] = { width: m.width, height: m.height, role: 'scène scolaire' };
}
function labelArrow(l, defs) { let b = ''; l.lines.forEach((t, i) => b += text(l.x, l.y + i * 32, t, 28, BLUE, 'start', 'bold')); b += arrow(l.tx, l.ty, l.px, l.py, BLUE, 5); b += `<circle cx="${l.px}" cy="${l.py}" r="7" fill="${BLUE}"/>`; return b; }

// ---------- PEINTURE ----------
function landscapeBase(level) {
  let b = '';
  if (level === 0) {
    b += `<g fill="none" stroke="#999" stroke-width="3" stroke-dasharray="10 8">${line(80, 300, 1120, 300, '#999', 3, '10 8')}${line(80, 470, 1120, 470, '#999', 3, '10 8')}<path d="M120,470 C260,360 380,380 520,300 C680,380 820,350 1080,470"/><path d="M180,620 C340,540 520,560 700,620 C860,680 1000,640 1120,690"/><rect x="820" y="380" width="18" height="150"/><circle cx="829" cy="350" r="60"/></g>`;
    b += text(600, 760, 'Esquisse légère : horizon, plans, éléments principaux', 26, GREEN, 'middle');
  } else {
    b += `<rect x="80" y="120" width="1040" height="180" fill="${level >= 2 ? '#BFD9F2' : '#E8F1FA'}"/>`;
    b += `<path d="M80,300 C260,220 380,240 520,300 C680,240 820,260 1120,300 L1120,470 L80,470 Z" fill="${level >= 2 ? '#8FBF8F' : '#DDEEDD'}"/>`;
    b += `<path d="M80,470 C340,420 520,450 700,470 C860,500 1000,470 1120,470 L1120,700 L80,700 Z" fill="${level >= 2 ? '#6E9E6E' : '#CFE6CF'}"/>`;
    b += `<path d="M180,620 C340,540 520,560 700,620 C860,680 1000,640 1120,690 L1120,700 L80,700 Z" fill="${level >= 2 ? '#7FB3D9' : '#DCEBF5'}"/>`;
    b += `<rect x="820" y="380" width="18" height="150" fill="#7A5A3A"/><circle cx="829" cy="350" r="60" fill="${level >= 2 ? '#3F7F3F' : '#B7D8B7'}"/>`;
    if (level >= 3) {
      b += `<circle cx="220" cy="190" r="45" fill="#F4C542"/>`;
      for (let i = 0; i < 4; i++) b += `<rect x="${300 + i * 120}" y="520" width="16" height="70" fill="#5A4632"/><circle cx="${308 + i * 120}" cy="505" r="34" fill="${i % 2 ? '#2F6F2F' : '#4F8F4F'}"/>`;
      b += `<path d="M80,470 C340,420 520,450 700,470" fill="none" stroke="#FFFFFF" stroke-width="4" opacity="0.5"/>`;
    }
    b += text(600, 760, level === 1 ? 'Grandes zones : ciel, collines, premier plan, rivière' : level === 2 ? 'Couleurs et valeurs : chaud / froid, clair / foncé' : 'Motifs : répétition, alternance, inversion ; finitions', 26, GREEN, 'middle');
  }
  return b;
}
async function peinture() {
  let b = text(600, 55, 'Observer un paysage avant de peindre', 36, BLUE, 'middle', 'bold');
  b += `<g transform="translate(0,80)">${landscapeBase(3)}</g>`;
  const labels = [
    { x: 40, y: 180, lines: ['Arrière-plan', 'couleurs froides'], tx: 220, ty: 200, px: 420, py: 250 },
    { x: 40, y: 420, lines: ['Premier plan', 'couleurs plus nettes'], tx: 220, ty: 440, px: 420, py: 600 },
    { x: 900, y: 180, lines: ['Soleil', 'couleur chaude'], tx: 900, ty: 200, px: 260, py: 270 },
    { x: 900, y: 520, lines: ['Arbres répétés', 'alternance'], tx: 900, ty: 540, px: 660, py: 590 },
  ];
  for (const l of labels) b += labelArrow(l);
  await save('peinture_observation_annotee', svg(1200, 900, b, arrowDef(BLUE)));

  b = text(600, 55, 'Nuancier de couleurs à remplir', 36, BLUE, 'middle', 'bold');
  b += text(600, 100, 'Mélange, observe, puis colorie les cases.', 26, '#333', 'middle');
  const prim = [['Jaune', '#F4D03F'], ['Rouge', '#E74C3C'], ['Bleu', '#3498DB']];
  prim.forEach((c, i) => { b += box(100 + i * 360, 150, 260, 90, c[1]); b += text(230 + i * 360, 280, c[0], 28, '#222', 'middle', 'bold'); b += box(100 + i * 360, 310, 260, 140); });
  b += text(600, 500, 'Secondaires : jaune + rouge = ?   rouge + bleu = ?   bleu + jaune = ?', 26, BLUE, 'middle');
  ['Orange ?', 'Violet ?', 'Vert ?'].forEach((t, i) => { b += box(100 + i * 360, 530, 260, 120); b += text(230 + i * 360, 690, t, 26, '#222', 'middle'); });
  b += text(600, 770, 'Ajoute une case chaude, une case froide, une case claire, une case foncée.', 24, GREEN, 'middle');
  await save('peinture_nuancier_a_remplir', svg(1200, 820, b));

  for (const [i, name] of [[0, 'peinture_etape_a_esquisse'], [1, 'peinture_etape_b_grandes_zones'], [2, 'peinture_etape_c_valeurs_couleurs'], [3, 'peinture_etape_d_motifs_finitions']]) {
    await save(name, svg(1200, 820, badge('a' + (i + 1)) + landscapeBase(i)));
  }
  b = text(600, 55, 'Pratique : un autre paysage à peindre', 36, BLUE, 'middle', 'bold');
  b += `<g transform="translate(0,80)">${landscapeBase(0)}</g>`;
  b += text(600, 860, 'Rizière / bord de rivière : utilise les mêmes étapes, pas le même modèle.', 26, GREEN, 'middle');
  await save('peinture_pratique_autre_paysage', svg(1200, 900, b));
}

// ---------- SCULPTURE ----------
function drum(level) {
  let b = '';
  b += `<ellipse cx="600" cy="640" rx="260" ry="45" fill="#DDD"/>`;
  if (level >= 1) b += `<path d="M380,260 L420,620 C420,660 780,660 780,620 L820,260 Z" fill="#D9C6A5" stroke="#7A5A3A" stroke-width="4"/>`;
  if (level >= 2) b += `<ellipse cx="600" cy="260" rx="220" ry="60" fill="#F2F2F2" stroke="#555" stroke-width="4"/>`;
  if (level >= 3) { b += `<ellipse cx="600" cy="260" rx="220" ry="60" fill="none" stroke="${RED}" stroke-width="8"/>`; for (let i = 0; i < 8; i++) { const x = 400 + i * 57; b += line(x, 285, x + 20, 360, RED, 5); } }
  if (level >= 4) { b += `<path d="M450,420 L750,420" stroke="${BLUE}" stroke-width="10"/><path d="M450,480 L750,480" stroke="${ORANGE}" stroke-width="10"/><circle cx="600" cy="540" r="28" fill="${GREEN}"/>`; b += line(880, 320, 1020, 180, '#7A5A3A', 12); b += `<circle cx="1030" cy="170" r="22" fill="#7A5A3A"/>`; }
  return b;
}
async function sculpture() {
  let b = text(600, 55, 'Observer un instrument à percussion recyclable', 36, BLUE, 'middle', 'bold');
  b += drum(4);
  const labels = [
    { x: 40, y: 180, lines: ['Membrane', 'sachet / tissu tendu'], tx: 220, ty: 200, px: 520, py: 250 },
    { x: 40, y: 420, lines: ['Corps', 'boîte / gobelet'], tx: 220, ty: 440, px: 430, py: 480 },
    { x: 900, y: 180, lines: ['Ligature', 'ruban / fil'], tx: 900, ty: 200, px: 760, py: 285 },
    { x: 900, y: 480, lines: ['Décor', 'motifs répétés'], tx: 900, ty: 500, px: 700, py: 450 },
    { x: 900, y: 680, lines: ['Baguette', 'bâton arrondi'], tx: 900, ty: 700, px: 980, py: 230 },
  ];
  for (const l of labels) b += labelArrow(l);
  await save('sculpture_observation_annotee', svg(1200, 820, b, arrowDef(BLUE)));

  b = text(600, 55, 'Plan de fabrication à compléter', 36, BLUE, 'middle', 'bold');
  const rows = [['Corps', 'Objet recyclable propre : boîte, gobelet, carton'], ['Membrane', 'Sachet, tissu, plastique souple'], ['Ligature', 'Ruban, élastique, ficelle'], ['Outils', 'Ciseaux à bouts ronds, colle, ruban'], ['Sécurité', 'Pas de bord coupant ; adulte si outil dangereux']];
  rows.forEach((r, i) => { b += box(80, 130 + i * 120, 260, 80, '#DDEEFF'); b += text(210, 180 + i * 120, r[0], 28, BLUE, 'middle', 'bold'); b += box(380, 130 + i * 120, 740, 80); b += text(410, 180 + i * 120, r[1], 24, '#333'); });
  await save('sculpture_plan_a_completer', svg(1200, 820, b));

  const names = ['sculpture_etape_a_corps_reperes', 'sculpture_etape_b_membrane', 'sculpture_etape_c_ligature_tension', 'sculpture_etape_d_decor_test'];
  for (let i = 0; i < 4; i++) {
    let bb = badge('a' + (i + 1)) + drum(i + 1);
    bb += text(600, 760, ['Choisir le corps, nettoyer, tracer les repères', 'Poser la membrane sans la déchirer', 'Tendre et ligaturer régulièrement', 'Décorer, tester le son, ajuster'][i], 26, GREEN, 'middle');
    await save(names[i], svg(1200, 820, bb));
  }
  b = text(600, 55, 'Pratique : fabriquer un shaker / maracas', 36, BLUE, 'middle', 'bold');
  b += `<path d="M500,220 C500,160 700,160 700,220 L720,560 C720,640 480,640 480,560 Z" fill="#DCEBF5" stroke="#333" stroke-width="4"/>`;
  b += `<rect x="540" y="120" width="120" height="80" rx="20" fill="#AAA" stroke="#333" stroke-width="4"/>`;
  for (let i = 0; i < 12; i++) b += `<circle cx="${540 + (i % 4) * 40}" cy="${320 + Math.floor(i / 4) * 60}" r="12" fill="#7A5A3A"/>`;
  b += text(600, 720, 'Bouteille propre + graines / capsules ; fermer solide ; décorer ; secouer en rythme.', 26, GREEN, 'middle');
  await save('sculpture_pratique_maracas', svg(1200, 820, b));
}

// ---------- MUSIQUE ----------
async function musique() {
  let b = text(600, 55, 'Écouter activement : que faut-il remarquer ?', 36, BLUE, 'middle', 'bold');
  const cards = [['Tempo', 'lent / rapide / saccadé'], ['Rythme', 'binaire / ternaire / 12/8'], ['Durée', 'long / court / silence'], ['Intensité', 'fort / doux'], ['Nuance', 'montant / descendant']];
  cards.forEach((c, i) => { const x = 80 + (i % 3) * 360, y = 150 + Math.floor(i / 3) * 260; b += box(x, y, 300, 180, '#DDEEFF'); b += text(x + 150, y + 60, c[0], 32, BLUE, 'middle', 'bold'); b += text(x + 150, y + 120, c[1], 24, '#333', 'middle'); });
  b += text(600, 745, 'Audio de séance : consigne parlée.', 22, GREY, 'middle');
  b += text(600, 775, 'Modèle chanté/joué : enseignant ou support sonore.', 22, GREY, 'middle');
  await save('musique_observation_ecoute', svg(1200, 820, b));

  b = text(600, 55, 'Préparer le rythme : compter, frapper, écouter', 36, BLUE, 'middle', 'bold');
  b += text(600, 110, 'Colorie les cases fortes, puis frappe le rythme avec les mains ou un objet sonore.', 24, '#333', 'middle');
  for (let i = 0; i < 4; i++) { b += box(120 + i * 250, 180, 180, 120); b += text(210 + i * 250, 340, String(i + 1), 30, BLUE, 'middle', 'bold'); }
  b += text(600, 420, 'Binaire : 1 - 2 | 1 - 2', 28, GREEN, 'middle');
  for (let i = 0; i < 6; i++) { b += box(80 + i * 180, 470, 140, 100); b += text(150 + i * 180, 610, String((i % 3) + 1), 28, BLUE, 'middle', 'bold'); }
  b += text(600, 700, 'Ternaire : 1 - 2 - 3 | 1 - 2 - 3', 28, GREEN, 'middle');
  await save('musique_rythme_a_completer', svg(1200, 820, b));

  const steps = [
    ['musique_etape_a_ecouter_identifier', 'Écouter le modèle et nommer les éléments', [['Tempo', 'Rythme', 'Durée', 'Intensité']]],
    ['musique_etape_b_paroles_en_rythme', 'Dire les paroles en rythme avant de chanter', [['Paroles', 'Pulsation', 'Départ', 'Fin']]],
    ['musique_etape_c_chanter_phrases', 'Chanter phrase par phrase, puis ensemble', [['Écouter', 'Répéter', 'Mémoriser', 'Ajuster']]],
    ['musique_etape_d_accompagner_nuances', 'Accompagner avec percussion et respecter les nuances', [['Percussion', 'Fort/doux', 'Ensemble', 'Présenter']]],
  ];
  for (let i = 0; i < steps.length; i++) {
    let bb = badge('a' + (i + 1)) + text(600, 140, steps[i][1], 30, BLUE, 'middle', 'bold');
    steps[i][2][0].forEach((t, j) => { bb += box(100 + j * 260, 260, 220, 160, '#EAF3EA'); bb += text(210 + j * 260, 350, t, 26, GREEN, 'middle', 'bold'); });
    bb += text(600, 620, 'Modèle vivant ou support sonore ; l’enseignant garde la pulsation.', 24, GREY, 'middle');
    await save(steps[i][0], svg(1200, 820, bb));
  }
  b = text(600, 55, 'Pratique : un autre couplet ou un autre rythme', 36, BLUE, 'middle', 'bold');
  b += box(120, 160, 960, 180, '#DDEEFF'); b += text(600, 260, 'Choisis un autre couplet du chant régional ou un nouveau rythme.', 28, BLUE, 'middle');
  b += box(120, 400, 960, 180, '#EAF3EA'); b += text(600, 500, 'Garde la même pulsation, change une nuance : fort/doux ou long/court.', 28, GREEN, 'middle');
  await save('musique_pratique_autre_couplet', svg(1200, 820, b));
}

// ---------- DANSE ----------
function foot(x, y, angle = 0, color = BLUE) { return `<g transform="translate(${x},${y}) rotate(${angle})"><ellipse cx="0" cy="0" rx="22" ry="48" fill="${color}" opacity="0.85"/><circle cx="0" cy="-58" r="12" fill="${color}" opacity="0.85"/></g>`; }
async function danse() {
  let b = text(600, 55, 'Regarder : appuis, directions, trajectoires', 36, BLUE, 'middle', 'bold');
  b += `<path d="M120,260 L1080,260" stroke="${BLUE}" stroke-width="6" marker-end="url(#arrow-${BLUE.slice(1)})"/>`;
  b += text(600, 220, 'Ligne droite', 26, BLUE, 'middle');
  b += `<path d="M180,520 C380,380 580,660 780,520 C900,440 1000,480 1080,520" fill="none" stroke="${GREEN}" stroke-width="6" marker-end="url(#arrow-${GREEN.slice(1)})"/>`;
  b += text(600, 640, 'Sinueuse', 26, GREEN, 'middle');
  b += `<circle cx="300" cy="700" r="70" fill="none" stroke="${ORANGE}" stroke-width="6" marker-end="url(#arrow-${ORANGE.slice(1)})"/>`;
  b += text(300, 790, 'Circulaire', 26, ORANGE, 'middle');
  b += `<path d="M700,700 L760,640 L820,700 L880,640 L940,700" fill="none" stroke="${RED}" stroke-width="6" marker-end="url(#arrow-${RED.slice(1)})"/>`;
  b += text(820, 790, 'Zig zag', 26, RED, 'middle');
  await save('danse_observation_trajectoires', svg(1200, 860, b, arrowDef(BLUE) + arrowDef(GREEN) + arrowDef(ORANGE) + arrowDef(RED)));

  b = text(600, 55, 'Préparer le corps et compter', 36, BLUE, 'middle', 'bold');
  const items = [['Tête / cou', 'doucement'], ['Épaules / bras', 'ouvrir'], ['Hanches / jambes', 'appuis'], ['Chevilles / pieds', 'échauffer'], ['Espace', 'distance de sécurité']];
  items.forEach((c, i) => { b += box(80, 130 + i * 120, 300, 80, '#DDEEFF'); b += text(230, 180 + i * 120, c[0], 26, BLUE, 'middle', 'bold'); b += box(420, 130 + i * 120, 700, 80); b += text(770, 180 + i * 120, c[1], 26, '#333', 'middle'); });
  await save('danse_echauffement_comptage', svg(1200, 820, b));

  b = badge('a1') + text(600, 140, 'Posture et appuis', 30, BLUE, 'middle', 'bold');
  b += foot(500, 420, -8) + foot(700, 420, 8);
  b += line(600, 220, 600, 620, '#999', 3, '10 8');
  b += text(600, 720, 'Dos droit, genoux souples, poids réparti.', 26, GREEN, 'middle');
  await save('danse_etape_a_posture_appuis', svg(1200, 820, b));

  b = badge('a2') + text(600, 140, 'Pas de base : 1 - 2 - 3', 30, BLUE, 'middle', 'bold');
  b += foot(400, 500, -10) + text(400, 600, '1', 36, BLUE, 'middle', 'bold');
  b += foot(600, 420, 0, GREEN) + text(600, 520, '2', 36, GREEN, 'middle', 'bold');
  b += foot(800, 500, 10, ORANGE) + text(800, 600, '3', 36, ORANGE, 'middle', 'bold');
  b += arrow(430, 470, 570, 430, BLUE, 4) + arrow(630, 430, 770, 470, GREEN, 4);
  await save('danse_etape_b_pas_base', svg(1200, 820, b, arrowDef(BLUE) + arrowDef(GREEN)));

  b = badge('a3') + text(600, 140, 'Ajouter une trajectoire', 30, BLUE, 'middle', 'bold');
  b += `<path d="M200,560 C400,420 600,700 800,560 C900,500 1000,520 1080,560" fill="none" stroke="${GREEN}" stroke-width="6" marker-end="url(#arrow-${GREEN.slice(1)})"/>`;
  b += foot(300, 540, -15) + foot(600, 580, 10) + foot(900, 540, -5);
  await save('danse_etape_c_trajectoires', svg(1200, 820, b, arrowDef(GREEN)));

  b = badge('a4') + text(600, 140, 'Enchaîner, présenter, ajuster', 30, BLUE, 'middle', 'bold');
  b += box(120, 240, 960, 160, '#DDEEFF'); b += text(600, 330, 'Départ → pas de base → trajectoire → fin', 28, BLUE, 'middle');
  b += box(120, 460, 960, 160, '#EAF3EA'); b += text(600, 550, 'Regarder un pair : une réussite, une amélioration.', 28, GREEN, 'middle');
  await save('danse_etape_d_enchainer', svg(1200, 820, b));

  b = text(600, 55, 'Pratique : une autre courte séquence', 36, BLUE, 'middle', 'bold');
  b += text(600, 140, 'Choisis une autre trajectoire ou un autre pas de danse de salon.', 26, '#333', 'middle');
  b += `<circle cx="600" cy="450" r="160" fill="none" stroke="${ORANGE}" stroke-width="6" marker-end="url(#arrow-${ORANGE.slice(1)})"/>`;
  b += foot(600, 290, 0) + foot(760, 450, 90) + foot(600, 610, 180) + foot(440, 450, -90);
  await save('danse_pratique_autre_sequence', svg(1200, 820, b, arrowDef(ORANGE)));
}

// ---------- ART DRAMATIQUE ----------
function silhouette(x, y, color = BLUE, emotion = 'neutre') {
  let b = `<circle cx="${x}" cy="${y}" r="38" fill="${color}"/><line x1="${x}" y1="${y + 38}" x2="${x}" y2="${y + 170}" stroke="${color}" stroke-width="14" stroke-linecap="round"/>`;
  b += line(x, y + 80, x - 70, y + 130, color, 12) + line(x, y + 80, x + 70, y + 130, color, 12);
  b += line(x, y + 170, x - 50, y + 260, color, 12) + line(x, y + 170, x + 50, y + 260, color, 12);
  if (emotion === 'joie') b += `<path d="M${x - 15},${y + 5} Q${x},${y + 22} ${x + 15},${y + 5}" stroke="white" stroke-width="4" fill="none"/>`;
  if (emotion === 'colere') b += line(x - 18, y - 8, x - 5, y - 2, 'white', 4) + line(x + 18, y - 8, x + 5, y - 2, 'white', 4);
  return b;
}
async function dramatique() {
  let b = text(600, 55, 'Observer les moyens corporels et l’espace', 36, BLUE, 'middle', 'bold');
  b += silhouette(600, 260, BLUE, 'joie');
  const labels = [
    { x: 40, y: 180, lines: ['Regard', 'direction'], tx: 220, ty: 200, px: 570, py: 250 },
    { x: 40, y: 420, lines: ['Geste', 'intention'], tx: 220, ty: 440, px: 530, py: 390 },
    { x: 900, y: 180, lines: ['Voix', 'volume / ton'], tx: 900, ty: 200, px: 640, py: 270 },
    { x: 900, y: 420, lines: ['Posture', 'émotion'], tx: 900, ty: 440, px: 640, py: 430 },
    { x: 900, y: 660, lines: ['Espace', 'entrée / sortie'], tx: 900, ty: 680, px: 700, py: 560 },
  ];
  for (const l of labels) b += labelArrow(l);
  await save('dramatique_observation_annotee', svg(1200, 820, b, arrowDef(BLUE)));

  b = text(600, 55, 'Fiche personnage à compléter', 36, BLUE, 'middle', 'bold');
  const rows = [['Qui ?', 'Nom / rôle du personnage'], ['Veut quoi ?', 'Objectif dans la scène'], ['Émotion', 'joie, peur, colère, surprise…'], ['Voix', 'fort/doux, lent/rapide, ton'], ['Geste', 'attitude, mimique, mouvement'], ['Objet / lieu', 'accessoire et espace de jeu']];
  rows.forEach((r, i) => { b += box(80, 120 + i * 110, 260, 80, '#DDEEFF'); b += text(210, 170 + i * 110, r[0], 26, BLUE, 'middle', 'bold'); b += box(380, 120 + i * 110, 740, 80); b += text(410, 170 + i * 110, r[1], 24, '#333'); });
  await save('dramatique_fiche_personnage', svg(1200, 820, b));

  b = badge('a1') + text(600, 140, 'Lire et comprendre la situation', 30, BLUE, 'middle', 'bold');
  b += box(120, 240, 960, 160, '#DDEEFF'); b += text(600, 330, 'Qui ? Où ? Quand ? Que se passe-t-il ?', 28, BLUE, 'middle');
  b += box(120, 460, 960, 160, '#EAF3EA'); b += text(600, 550, 'Choisir un conte, une nouvelle ou une courte scène.', 28, GREEN, 'middle');
  await save('dramatique_etape_a_comprendre', svg(1200, 820, b));

  b = badge('a2') + text(600, 140, 'Choisir les moyens corporels', 30, BLUE, 'middle', 'bold');
  b += silhouette(300, 300, GREEN, 'joie') + text(300, 640, 'Joie', 28, GREEN, 'middle', 'bold');
  b += silhouette(600, 300, ORANGE, 'colere') + text(600, 640, 'Colère', 28, ORANGE, 'middle', 'bold');
  b += silhouette(900, 300, BLUE, 'neutre') + text(900, 640, 'Attente', 28, BLUE, 'middle', 'bold');
  await save('dramatique_etape_b_moyens_corporels', svg(1200, 820, b));

  b = badge('a3') + text(600, 140, 'Répéter la voix et l’espace', 30, BLUE, 'middle', 'bold');
  b += box(120, 240, 420, 300, '#DDEEFF'); b += text(330, 330, 'Voix', 30, BLUE, 'middle', 'bold'); b += text(330, 390, 'articuler', 24, '#333', 'middle'); b += text(330, 440, 'projeter', 24, '#333', 'middle');
  b += box(660, 240, 420, 300, '#EAF3EA'); b += text(870, 330, 'Espace', 30, GREEN, 'middle', 'bold'); b += text(870, 390, 'entrer', 24, '#333', 'middle'); b += text(870, 440, 'sortir', 24, '#333', 'middle');
  await save('dramatique_etape_c_repeter', svg(1200, 820, b));

  b = badge('a4') + text(600, 140, 'Jouer, observer, ajuster', 30, BLUE, 'middle', 'bold');
  b += silhouette(450, 300, BLUE, 'joie') + silhouette(750, 300, GREEN, 'neutre');
  b += text(600, 640, 'Un pair observe : geste clair, voix audible, émotion lisible.', 26, GREEN, 'middle');
  await save('dramatique_etape_d_jouer_ajuster', svg(1200, 820, b));

  b = text(600, 55, 'Pratique : une autre courte situation', 36, BLUE, 'middle', 'bold');
  b += box(120, 180, 960, 160, '#DDEEFF'); b += text(600, 270, 'Exemple : au marché, un personnage cherche un objet perdu.', 28, BLUE, 'middle');
  b += box(120, 400, 960, 160, '#EAF3EA'); b += text(600, 490, 'Même méthode : comprendre, choisir, répéter, jouer, ajuster.', 28, GREEN, 'middle');
  await save('dramatique_pratique_autre_situation', svg(1200, 820, b));
}

async function common() {
  const icon = `<rect x="2" y="2" width="76" height="52" rx="12" fill="${RED}"/><path d="M31,15 L57,28 L31,41 Z" fill="white"/>`;
  await save('icone_video', svg(80, 56, icon), 160);
  for (const id of ['peinture', 'sculpture', 'musique', 'danse', 'dramatique']) {
    const url = RAW + `audio_art_t9_pilote_${id}_consigne.mp3`;
    await QR.toFile(path.join(A, `qr_audio_${id}.png`), url, { width: 360, margin: 1 });
    manifest[`qr_audio_${id}.png`] = { width: 360, height: 360, role: 'QR audio' };
  }
}

(async () => {
  await resizeScene('peinture_scene_scolaire_1100.jpg');
  await resizeScene('sculpture_scene_scolaire_1100.jpg');
  await resizeScene('musique_scene_scolaire_1100.jpg');
  await resizeScene('danse_scene_scolaire_1100.jpg');
  await resizeScene('dramatique_scene_scolaire_1100.jpg');
  await peinture(); await sculpture(); await musique(); await danse(); await dramatique(); await common();
  fs.writeFileSync(path.join(A, 'image-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Assets pilotes :', Object.keys(manifest).length);
})().catch(e => { console.error(e); process.exit(1); });
