// Visuels déterministes et cohérents pour le prototype Arts T9 — séance 1.
// Les étapes d'esquisse et de modelé réutilisent exactement la même géométrie.
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const QR = require('qrcode');

const A = path.join(__dirname, '..', 'assets');
const W = 900, H = 720;
const BLUE = '#1F4E79', GREEN = '#1E7B34', RED = '#C00000', GREY = '#777777';
const FONT = 'DejaVu Sans, Arial, sans-serif';
const manifest = {};

function svg(w, h, body, defs = '') {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><defs>${defs}</defs><rect width="100%" height="100%" fill="white"/>${body}</svg>`;
}
function text(x, y, t, size = 28, color = '#222', anchor = 'start', weight = 'normal') {
  return `<text x="${x}" y="${y}" font-family="${FONT}" font-size="${size}" fill="${color}" text-anchor="${anchor}" font-weight="${weight}">${t}</text>`;
}
function line(x1, y1, x2, y2, color = BLUE, width = 4, dash = '') {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" ${dash ? `stroke-dasharray="${dash}"` : ''} stroke-linecap="round"/>`;
}
function arrow(x1, y1, x2, y2, color = BLUE, width = 5) {
  return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${color}" stroke-width="${width}" stroke-linecap="round" marker-end="url(#arrow-${color.slice(1)})"/>`;
}
function arrowDef(color = BLUE) {
  return `<marker id="arrow-${color.slice(1)}" markerUnits="userSpaceOnUse" markerWidth="18" markerHeight="18" refX="16" refY="7" orient="auto"><path d="M0,0 L17,7 L0,14 Z" fill="${color}"/></marker>`;
}
async function save(name, markup, width = 1100) {
  const svgPath = path.join(A, name + '.svg');
  const pngPath = path.join(A, name + '.png');
  fs.writeFileSync(svgPath, markup);
  await sharp(Buffer.from(markup)).resize({ width }).png().toFile(pngPath);
  const m = await sharp(pngPath).metadata();
  manifest[name + '.png'] = { width: m.width, height: m.height, role: name };
}

// 1. Photographie du modèle avec flèches d'observation.
async function observation() {
  const photo = fs.readFileSync(path.join(A, 'img_art_t9_s01_objet_1100.png')).toString('base64');
  const defs = arrowDef(BLUE) + arrowDef(RED);
  let b = `<image x="250" y="180" width="1100" height="733" href="data:image/png;base64,${photo}"/>`;
  b += text(800, 55, 'Observer avant de tracer', 38, BLUE, 'middle', 'bold');
  b += arrow(270, 125, 500, 125, RED, 6) + text(270, 95, 'Lumière', 30, RED, 'start', 'bold');
  const labels = [
    { x: 30, y: 260, lines: ['Ouverture', 'ovale'], tx: 200, ty: 280, px: 775, py: 420 },
    { x: 30, y: 470, lines: ['Partie', 'claire'], tx: 200, ty: 490, px: 680, py: 550 },
    { x: 30, y: 700, lines: ['Base', 'courbe'], tx: 200, ty: 720, px: 780, py: 760 },
    { x: 1370, y: 300, lines: ['Dégradé'], tx: 1360, ty: 315, px: 805, py: 560 },
    { x: 1370, y: 520, lines: ['Partie', 'sombre'], tx: 1360, ty: 540, px: 885, py: 560 },
    { x: 1370, y: 800, lines: ['Ombre', 'portée'], tx: 1360, ty: 820, px: 1030, py: 720 },
  ];
  for (const l of labels) {
    l.lines.forEach((t, i) => { b += text(l.x, l.y + i * 34, t, 29, BLUE, 'start', 'bold'); });
    b += arrow(l.tx, l.ty, l.px, l.py, BLUE, 5);
    b += `<circle cx="${l.px}" cy="${l.py}" r="8" fill="${BLUE}"/>`;
  }
  b += text(800, 1015, 'L’ombre portée est sur la table ; la partie sombre est sur l’objet.', 29, '#333', 'middle');
  await save('s01_v2_observation_annotee', svg(1600, 1080, b, defs), 1400);
}

// 2. Nuancier : petits repères visuels, puis grandes cases à remplir au crayon.
async function nuances() {
  let b = text(600, 55, 'Essayer trois gris avec le même crayon', 36, BLUE, 'middle', 'bold');
  b += text(600, 100, 'Observe les repères, puis remplis les grandes cases.', 27, '#333', 'middle');
  const xs = [100, 470, 840], fills = ['#E6E6E6', '#A6A6A6', '#4D4D4D'];
  const names = ['Gris clair', 'Gris moyen', 'Gris foncé'];
  const cues = ['Pression très légère', 'Pression moyenne', 'Traits plus serrés / pression appuyée'];
  xs.forEach((x, i) => {
    b += `<rect x="${x}" y="145" width="260" height="90" fill="${fills[i]}" stroke="#555" stroke-width="2"/>`;
    b += text(x + 130, 275, names[i], 30, '#222', 'middle', 'bold');
    b += `<rect x="${x}" y="310" width="260" height="230" fill="white" stroke="#222" stroke-width="3"/>`;
    b += text(x + 130, 585, cues[i], 22, '#333', 'middle');
  });
  b += text(600, 665, 'Garde une zone blanche pour comparer. Évite de tout noircir d’un coup.', 25, GREEN, 'middle');
  await save('s01_v2_nuances_a_remplir', svg(1200, 710, b), 1200);
}

// Géométrie commune du gobelet.
const topEllipse = '<ellipse cx="450" cy="170" rx="200" ry="55"/>';
const innerEllipse = '<ellipse cx="450" cy="170" rx="184" ry="46"/>';
const sides = '<path d="M250,170 L295,565 C315,620 585,620 610,565 L650,170"/>';
const bodyPath = 'M250,170 C250,225 650,225 650,170 L610,565 C585,620 315,620 295,565 Z';
function outline(color = '#333', width = 4) {
  return `<g fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round">${topEllipse}${sides}</g>`;
}
function badge(t) { return `<rect x="25" y="25" width="90" height="58" rx="12" fill="${BLUE}"/>${text(70, 65, t, 30, 'white', 'middle', 'bold')}`; }
function construction() {
  return `<g fill="none" stroke="#999" stroke-width="2.5" stroke-dasharray="10 9"><rect x="250" y="115" width="400" height="505"/>${line(450, 80, 450, 650, '#999', 2.5, '10 9')}${line(180, 170, 720, 170, '#999', 2.5, '10 9')}${line(180, 600, 720, 600, '#999', 2.5, '10 9')}</g>`;
}
async function esquisse() {
  let b = badge('a1') + construction();
  b += arrow(210, 100, 210, 620, BLUE, 4) + arrow(210, 620, 210, 100, BLUE, 4);
  b += arrow(250, 680, 650, 680, BLUE, 4) + arrow(650, 680, 250, 680, BLUE, 4);
  b += text(730, 360, 'Hauteur', 25, BLUE) + text(450, 705, 'Largeur', 25, BLUE, 'middle');
  await save('s01_v2_esquisse_1_reperes', svg(W, H, b, arrowDef(BLUE)));
  b = badge('a2') + construction() + `<g fill="none" stroke="${BLUE}" stroke-width="5">${topEllipse}</g>`;
  b += text(450, 270, 'Ovale régulier, sans pointes', 25, BLUE, 'middle');
  await save('s01_v2_esquisse_2_ouverture', svg(W, H, b));
  b = badge('a3') + construction() + `<g fill="none" stroke="#999" stroke-width="4">${topEllipse}</g><g fill="none" stroke="${BLUE}" stroke-width="5" stroke-linecap="round">${sides}</g>`;
  await save('s01_v2_esquisse_3_cotes_base', svg(W, H, b));
  b = badge('a4') + outline('#333', 4) + `<g fill="none" stroke="#777" stroke-width="2.5">${innerEllipse}</g>`;
  b += text(450, 680, 'Vérifier, puis garder un contour léger', 25, GREEN, 'middle');
  await save('s01_v2_esquisse_4_controle', svg(W, H, b));
}

// Modelé : valeurs progressives, puis ombre portée.
const defsShading = `
<linearGradient id="body-mid" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F2F2F2"/><stop offset="0.45" stop-color="#D2D2D2"/><stop offset="1" stop-color="#9A9A9A"/></linearGradient>
<linearGradient id="body-full" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#F4F4F4"/><stop offset="0.28" stop-color="#DDDDDD"/><stop offset="0.60" stop-color="#A6A6A6"/><stop offset="0.88" stop-color="#555555"/><stop offset="1" stop-color="#777777"/></linearGradient>
<linearGradient id="inside" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#4A4A4A"/><stop offset="0.65" stop-color="#8A8A8A"/><stop offset="1" stop-color="#BBBBBB"/></linearGradient>
<linearGradient id="cast" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#333333" stop-opacity="0.75"/><stop offset="1" stop-color="#777777" stop-opacity="0.08"/></linearGradient>
<pattern id="hatch" width="14" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(24)"><line x1="0" y1="0" x2="0" y2="14" stroke="#333" stroke-width="1" opacity="0.10"/></pattern>
<clipPath id="body-clip"><path d="${bodyPath}"/></clipPath>
<filter id="soft"><feGaussianBlur stdDeviation="7"/></filter>`;
function shadedCup(level, cast = false) {
  let b = '';
  if (cast) {
    b += `<path d="M420,580 C610,550 820,565 865,610 C805,655 575,650 410,615 Z" fill="url(#cast)" filter="url(#soft)"/>`;
    b += '<ellipse cx="455" cy="595" rx="160" ry="28" fill="#333" opacity="0.22" filter="url(#soft)"/>';
  }
  const fill = level === 1 ? '#F7F7F7' : level === 2 ? 'url(#body-mid)' : 'url(#body-full)';
  b += `<path d="${bodyPath}" fill="${fill}" stroke="#444" stroke-width="3"/>`;
  b += `<rect x="230" y="100" width="450" height="540" fill="url(#hatch)" clip-path="url(#body-clip)"/>`;
  b += `<ellipse cx="450" cy="170" rx="200" ry="55" fill="${level >= 3 ? 'url(#inside)' : '#D8D8D8'}" stroke="#444" stroke-width="3"/>`;
  b += `<ellipse cx="450" cy="170" rx="184" ry="46" fill="none" stroke="${level >= 3 ? '#CCCCCC' : '#999999'}" stroke-width="3"/>`;
  if (cast) b += '<path d="M295,565 C315,620 585,620 610,565" fill="none" stroke="#333" stroke-width="4"/>';
  return b;
}
async function modele() {
  let b = badge('b1') + outline('#555', 3);
  b += `<g stroke="${BLUE}" stroke-width="3" stroke-dasharray="9 8" fill="none"><path d="M380,215 L405,600"/><path d="M525,215 L510,602"/></g>`;
  b += text(320, 400, 'Clair', 26, BLUE, 'middle') + text(455, 400, 'Moyen', 26, BLUE, 'middle') + text(575, 400, 'Foncé', 26, BLUE, 'middle');
  await save('s01_v2_modele_1_zones', svg(W, H, b, defsShading));
  b = badge('b2') + shadedCup(2);
  b += text(450, 680, 'Poser doucement les premières valeurs', 25, GREEN, 'middle');
  await save('s01_v2_modele_2_premieres_valeurs', svg(W, H, b, defsShading));
  b = badge('b3') + shadedCup(3);
  b += text(450, 680, 'Renforcer les sombres, adoucir les passages', 25, GREEN, 'middle');
  await save('s01_v2_modele_3_degrade', svg(W, H, b, defsShading));
  b = badge('c') + shadedCup(3, true);
  b += arrow(790, 500, 790, 590, RED, 4) + text(870, 475, 'Ombre portée', 25, RED, 'end');
  await save('s01_v2_ombre_portee_finitions', svg(W, H, b, defsShading + arrowDef(RED)));
}

async function videosAndPractice() {
  const icon = `<rect x="2" y="2" width="76" height="52" rx="12" fill="${RED}"/><path d="M31,15 L57,28 L31,41 Z" fill="white"/>`;
  await save('s01_v2_icone_video', svg(80, 56, icon), 160);
  const box = path.join(A, 's01_v2_pratique_boite.png');
  await sharp(box).resize({ width: 1100 }).jpeg({ quality: 84, mozjpeg: true }).toFile(path.join(A, 's01_v2_pratique_boite_1100.jpg'));
  const m = await sharp(path.join(A, 's01_v2_pratique_boite_1100.jpg')).metadata();
  manifest['s01_v2_pratique_boite_1100.jpg'] = { width: m.width, height: m.height, role: 'nouvel objet à dessiner' };
  const base = 'https://raw.githubusercontent.com/J-Lab-Mdg/jlearn-pack/arena/3f402b0e-jlearn-pack/art-t9/assets/audio_art_t9_s01_consigne.mp3';
  await QR.toFile(path.join(A, 'qr_audio_art_t9_s01.png'), base, { width: 360, margin: 1 });
  manifest['qr_audio_art_t9_s01.png'] = { width: 360, height: 360, role: 'QR audio' };
  const scene = path.join(A, 'img_art_t9_s01_scene_scolaire_1100.jpg');
  const sm = await sharp(scene).metadata();
  manifest['img_art_t9_s01_scene_scolaire_1100.jpg'] = { width: sm.width, height: sm.height, role: 'scène scolaire' };
}

(async () => {
  await observation();
  await nuances();
  await esquisse();
  await modele();
  await videosAndPractice();
  fs.writeFileSync(path.join(A, 's01-v2-image-manifest.json'), JSON.stringify(manifest, null, 2));
  console.log('Assets séance 1 v2 :', Object.keys(manifest).length);
})().catch(e => { console.error(e); process.exit(1); });
