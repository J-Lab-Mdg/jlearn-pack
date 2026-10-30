// MÉTHODES D'OR — la boîte à outils du CEPE (itération 6).
// 9 fiches illustrées : résoudre un problème, lire les grands nombres, bien poser les opérations,
// preuve par 9 dessinée, division pas à pas, fractions, durées, intervalles, checklist.
const fs = require('fs');
const path = require('path');
const L = require('./figlib');
const { head, svg, txt, box, seg, arrow, bar, dot, PINK, PINK2, GREEN, GREENL, BLUE, OCRE, BLUEL } = L;
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, ImageRun
} = require('docx');

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', pale: 'EAF2F8', white: 'FFFFFF', black: '000000' };
const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics });
const p = (text, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: opt.after ?? 100, line: 300 }, indent: opt.indent ? { left: opt.indent } : undefined, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: Array.isArray(text) ? text : [tr(text, opt)] });
const title = (text, level = 1, bookmark) => {
  const run = tr(text, { bold: true, color: level === 1 ? C.red : C.green, size: level === 1 ? 32 : 28 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 200, after: 150 }, children });
};
const banner = (text, fill) => new Paragraph({ spacing: { before: 180, after: 110 }, shading: { type: ShadingType.CLEAR, fill }, children: [tr('  ' + text, { bold: true, color: C.white, size: 26 })] });
const page = () => new Paragraph({ children: [new PageBreak()] });
const img = (buf, widthPx = 500) => {
  const { w, h } = L.pngSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'png', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};
const F = n => Math.round(n).toLocaleString('fr-FR').replace(/\u202F/g, '\u00A0');

// ---------- FIGURES ----------
const figs = {};

// F1 — les mots-indices qui choisissent l'opération
figs.m1f1 = (() => { const { s, y } = head('Les mots-indices : le texte dit quelle opération choisir', ['Certains mots de l’énoncé annoncent l’opération — mais méfiance : ils ne sont pas toujours honnêtes !']);
  const top = y + 8;
  const ops = [
    ['ADDITION  +', ['en tout, ensemble,', 'total, gagne, reçoit,', 'réunit, ajoute, de plus'], GREENL, GREEN],
    ['SOUSTRACTION  −', ['reste, perd, donne,', 'mange, dépense,', 'de moins que,', 'rendu (monnaie)'], '#FDE7EF', PINK2],
    ['MULTIPLICATION  ×', ['chacun, le kilo, le mètre', '(prix unitaire), fois,', 'par jour, paquets de,', 'rangées de'], BLUEL, BLUE],
    ['DIVISION  ÷', ['partager, combien', 'de fois, en sachets', 'de, en équipes de,', 'répartir, semaines'], '#FFF3E0', OCRE],
  ];
  let b = '';
  ops.forEach((op, i) => {
    const x = 55 + i * 228;
    b += `<rect x="${x}" y="${top}" width="216" height="196" rx="10" fill="${op[2]}" stroke="${op[3]}" stroke-width="3"/>`;
    b += txt(x + 108, top + 32, op[0], 18, op[3], 'bold', 'middle');
    op[1].forEach((l, j) => b += txt(x + 108, top + 66 + j * 29, l, 16, '#222', 'normal', 'middle'));
  });
  b += `<rect x="55" y="${top + 222}" width="890" height="92" rx="10" fill="white" stroke="${PINK2}" stroke-width="3.5"/>`;
  b += txt(500, top + 252, 'PIÈGE : « de plus que » peut cacher une SOUSTRACTION !', 20, PINK2, 'bold', 'middle');
  b += txt(500, top + 284, 'Hery a 3 billes de plus que Vola ; Hery en a 15 → Vola : 15 − 3 = 12', 18, '#222', 'normal', 'middle');
  b += `<rect x="55" y="${top + 334}" width="890" height="92" rx="10" fill="${GREENL}" stroke="${GREEN}" stroke-width="3.5"/>`;
  b += txt(500, top + 364, 'LA QUESTION CACHÉE : que dois-je calculer AVANT de répondre ?', 20, GREEN, 'bold', 'middle');
  b += txt(500, top + 396, 'le total avant la monnaie rendue, les grammes avant le partage…', 18, '#222', 'normal', 'middle');
  return svg(1000, top + 448, s + b); })();

// F2 — lire un grand nombre (compact)
figs.m2f1 = (() => { const { s, y } = head('Lire un grand nombre : tableau CDU et cache', ['Trois chiffres par classe, une classe à la fois — jusqu’aux milliards !']);
  const top = y + 6;
  let b = '';
  const pieges = [['70 : soixante-dix (60+10)', '75 → soixante-quinze'], ['80 : quatre-vingts (4×20)', '85 → quatre-vingt-cinq'], ['90 : quatre-vingt-dix (80+10)', '95 → quatre-vingt-quinze']];
  pieges.forEach((pg, i) => {
    const x = 60 + i * 298;
    b += `<rect x="${x}" y="${top}" width="286" height="78" rx="10" fill="#FDE7EF" stroke="${PINK2}" stroke-width="3"/>`;
    b += txt(x + 143, top + 31, pg[0], 19, PINK2, 'bold', 'middle');
    b += txt(x + 143, top + 63, pg[1], 18, '#222', 'normal', 'middle');
  });
  const ty = top + 106, cw = 70, x0 = 86;
  const classes = ['MILLIARDS', 'MILLIONS', 'MILLE', 'UNITÉS'];
  classes.forEach((cl, i) => {
    b += `<rect x="${x0 + i * 3 * cw}" y="${ty}" width="${3 * cw}" height="42" fill="${i === 3 ? GREENL : BLUEL}" stroke="${BLUE}" stroke-width="3"/>`;
    b += txt(x0 + i * 3 * cw + 3 * cw / 2, ty + 28, cl, 19, '#222', 'bold', 'middle');
  });
  const cdu = ['C', 'D', 'U', 'C', 'D', 'U', 'C', 'D', 'U', 'C', 'D', 'U'];
  const digs = ['6', '', '', '1', '4', '8', '3', '7', '5', '2', '0', '4'];
  cdu.forEach((c, i) => {
    const x = x0 + i * cw;
    b += `<rect x="${x}" y="${ty + 42}" width="${cw}" height="32" fill="#FFF3E0" stroke="${BLUE}" stroke-width="2"/>`;
    b += txt(x + cw / 2, ty + 42 + 23, c, 16, OCRE, 'bold', 'middle');
    b += `<rect x="${x}" y="${ty + 74}" width="${cw}" height="52" fill="white" stroke="${BLUE}" stroke-width="2.5"/>`;
    if (digs[i]) b += txt(x + cw / 2, ty + 74 + 37, digs[i], 29, '#222', 'bold', 'middle');
  });
  b += arrow(x0 + 11.4 * cw, ty + 162, x0 + 0.6 * cw, ty + 162, GREEN, 4);
  b += txt(500, ty + 190, 'ÉCRIRE : de droite à gauche (unités d’abord)', 19, GREEN, 'bold', 'middle');
  b += txt(500, ty + 220, 'LIRE : de gauche à droite, une classe à la fois', 19, PINK2, 'bold', 'middle');
  const ky = ty + 248, kx = 105, kw = 190;
  ['6', '148', '375', '204'].forEach((n, i) => {
    b += `<rect x="${kx + i * (kw + 14)}" y="${ky}" width="${kw}" height="56" fill="${i === 3 ? 'white' : '#B0BEC5'}" stroke="${BLUE}" stroke-width="3"/>`;
    b += txt(kx + i * (kw + 14) + kw / 2, ky + 39, n, 29, i === 3 ? PINK2 : '#546E7A', 'bold', 'middle');
  });
  b += txt(310, ky + 82, 'le cache ne découvre qu’une classe', 17, '#546E7A', 'normal', 'middle');
  b += txt(790, ky + 82, 'je lis : « deux cent quatre »', 19, PINK2, 'bold', 'middle');
  b += txt(500, ky + 122, 'six milliards cent quarante-huit millions trois cent', 20, GREEN, 'bold', 'middle');
  b += txt(500, ky + 150, 'soixante-quinze mille deux cent quatre', 20, GREEN, 'bold', 'middle');
  return svg(1000, ky + 178, s + b); })();

// F3 — bien poser les opérations
figs.m3f1 = (() => { const { s, y } = head('Bien poser : trois règles d’or avant de calculer', ['Le calcul posé ne trompe pas — à condition de respecter ses règles.']);
  const top = y + 10;
  let b = `<rect x="60" y="${top}" width="420" height="130" rx="10" fill="white" stroke="#C00000" stroke-width="3.5"/>`;
  b += txt(270, top + 38, '12 m + 4 km', 30, '#C00000', 'bold', 'middle');
  b += seg(150, top + 12, 390, top + 52, '#C00000', 5) + seg(150, top + 52, 390, top + 12, '#C00000', 5);
  b += txt(270, top + 78, 'INTERDIT ! On ne mélange jamais', 19, '#C00000', 'bold', 'middle');
  b += txt(270, top + 106, 'des unités différentes', 19, '#C00000', 'bold', 'middle');
  b += `<rect x="520" y="${top}" width="420" height="130" rx="10" fill="${GREENL}" stroke="${GREEN}" stroke-width="3.5"/>`;
  b += txt(730, top + 38, '12 m + 4 000 m = 4 012 m', 26, GREEN, 'bold', 'middle');
  b += txt(730, top + 78, 'on convertit D’ABORD :', 19, '#222', 'normal', 'middle');
  b += txt(730, top + 106, '4 km = 4 000 m — puis on additionne', 19, '#222', 'normal', 'middle');
  const vy = top + 158;
  b += `<rect x="60" y="${vy}" width="880" height="196" rx="10" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
  b += txt(110, vy + 34, 'LES VIRGULES S’ALIGNENT', 20, BLUE, 'bold');
  b += txt(430, vy + 40, '12,75', 26, '#222', 'bold', 'middle');
  b += txt(384, vy + 76, '+', 24, GREEN, 'bold', 'middle');
  b += txt(436, vy + 76, '3,50', 26, '#222', 'bold', 'middle');
  b += seg(390, vy + 92, 470, vy + 92, BLUE, 3);
  b += txt(430, vy + 128, '16,25', 26, GREEN, 'bold', 'middle');
  b += seg(430, vy + 18, 430, vy + 148, PINK2, 2, '7 4');
  b += txt(640, vy + 40, 'chaque chiffre reste dans sa colonne', 18, '#222', 'normal');
  b += txt(640, vy + 70, 'unités sous unités, dixièmes sous dixièmes', 18, '#222', 'normal');
  b += txt(640, vy + 108, 'on peut compléter avec des zéros :', 18, '#222', 'normal');
  b += txt(640, vy + 138, '3,5 = 3,50', 20, OCRE, 'bold');
  b += box(60, vy + 216, 880, 46, 'ATTENTION AUX ZÉROS : 13,01 × 40,1 — chaque zéro compte, aucun ne se perd !', '#FFF3E0', OCRE, 19);
  b += box(60, vy + 278, 880, 46, 'ESTIME AVANT (13 × 40 ≈ 520), VÉRIFIE APRÈS (preuve, fiche 4)', GREENL, GREEN, 19);
  // Exemple de multiplication : le dessin remplace l’explication abstraite.
  const mx = 430, my = vy + 390, md = 48;
  b += txt(500, my, 'MULTIPLICATION POSÉE : 693 × 94', 22, BLUE, 'bold', 'middle');
  '693'.split('').forEach((c, i) => b += txt(mx + (i + 2) * md, my + 48, c, 31, '#222', 'bold', 'middle'));
  b += txt(mx + md, my + 94, '×', 30, BLUE, 'bold', 'middle');
  '94'.split('').forEach((c, i) => b += txt(mx + (i + 3) * md, my + 94, c, 31, '#222', 'bold', 'middle'));
  b += seg(mx + 10, my + 112, mx + 5 * md + 10, my + 112, BLUE, 3);
  '2772'.split('').forEach((c, i) => b += txt(mx + (i + 1) * md, my + 150, c, 30, PINK2, 'bold', 'middle'));
  b += arrow(mx + 4 * md + 5, my + 98, mx + 4 * md + 5, my + 132, PINK2, 3);
  '62370'.split('').forEach((c, i) => b += txt(mx + i * md, my + 192, c, 30, OCRE, 'bold', 'middle'));
  b += arrow(mx + 3 * md + 5, my + 98, mx + 3 * md + 5, my + 174, OCRE, 3);
  b += seg(mx + 10, my + 210, mx + 5 * md + 10, my + 210, BLUE, 3);
  '65142'.split('').forEach((c, i) => b += txt(mx + i * md, my + 250, c, 32, GREEN, 'bold', 'middle'));
  b += txt(760, my + 150, '× 4 unités', 17, PINK2, 'bold');
  b += txt(760, my + 192, '× 9 dizaines', 17, OCRE, 'bold');
  b += txt(500, my + 294, 'les flèches montrent d’où vient chaque ligne', 19, BLUE, 'bold', 'middle');
  return svg(1000, my + 330, s + b); })();

// F4 — la croix de la preuve par 9
figs.m4f1 = (() => { const { s, y } = head('Le schéma de contrôle par 9', ['Réduis chaque nombre, suis les flèches et compare.']);
  const top = y + 14;
  let b = txt(250, top + 20, 'MULTIPLICATION : 47 × 73 = 3 431', 21, BLUE, 'bold', 'middle');
  b += txt(750, top + 20, 'DIVISION : 425 ÷ 7 = 60, reste 5', 21, BLUE, 'bold', 'middle');
  const croix = (cx, cy, vals) => {
    let r = seg(cx - 58, cy - 58, cx + 58, cy + 58, BLUE, 5) + seg(cx - 58, cy + 58, cx + 58, cy - 58, BLUE, 5);
    r += arrow(cx, cy - 48, cx + 48, cy - 16, PINK2, 3) + arrow(cx, cy + 48, cx + 48, cy + 16, OCRE, 3);
    r += arrow(cx - 48, cy - 16, cx - 8, cy - 3, GREEN, 3);
    r += txt(cx, cy - 74, vals[0], 32, PINK2, 'bold', 'middle');
    r += txt(cx, cy + 102, vals[1], 32, PINK2, 'bold', 'middle');
    r += txt(cx - 92, cy + 12, vals[2], 32, GREEN, 'bold', 'middle');
    r += txt(cx + 92, cy + 12, vals[3], 32, OCRE, 'bold', 'middle');
    r += txt(cx, cy - 102, 'H', 15, '#888', 'bold', 'middle');
    r += txt(cx, cy + 132, 'B', 15, '#888', 'bold', 'middle');
    r += txt(cx - 136, cy + 12, 'G', 15, '#888', 'bold', 'middle');
    r += txt(cx + 136, cy + 12, 'D', 15, '#888', 'bold', 'middle');
    return r;
  };
  b += croix(250, top + 190, ['2', '1', '2', '2']);
  b += croix(750, top + 190, ['7', '6', '2', '2']);
  b += txt(250, top + 372, '47 → 4+7 = 11 → 2 (H) ; 73 → 10 → 1 (B)', 18, '#222', 'normal', 'middle');
  b += txt(250, top + 400, 'produit 3 431 → 2 (G) ; D = H × B = 2 × 1 = 2 ✓', 18, '#222', 'normal', 'middle');
  b += txt(750, top + 372, 'diviseur 7 (H) ; quotient 60 → 6 (B)', 18, '#222', 'normal', 'middle');
  b += txt(750, top + 400, 'dividende 425 → 2 (G) ; D = (H × B) + 5 = 47 → 2 ✓', 18, '#222', 'normal', 'middle');
  b += box(80, top + 424, 840, 46, 'MULTIPLICATION : D = H × B.  DIVISION : D = (H × B) + reste.  Si G = D → résultat ✓', GREENL, GREEN, 19);
  b += box(80, top + 486, 840, 46, 'RÉDUIRE : additionner les chiffres jusqu’à un seul : 3431 → 11 → 2 (les 9 se jettent !)', '#FFF3E0', OCRE, 19);
  return svg(1000, top + 552, s + b); })();

// F5 — la division posée pas à pas
figs.m5f1 = (() => { const { s, y } = head('La division posée, étape par étape : 127 ÷ 5', ['« Dans… combien de fois… ? » — la seule question à se répéter.']);
  const top = y + 26, x = 230, dx = 46;
  let b = '';
  '127'.split('').forEach((c, i) => b += txt(x + i * dx, top + 40, c, 33, '#222', 'bold', 'middle'));
  b += seg(x + 3 * dx + 8, top - 4, x + 3 * dx + 8, top + 64, BLUE, 4);
  b += seg(x + 3 * dx + 8, top - 4, x + 3 * dx + 112, top - 4, BLUE, 4);
  b += txt(x + 3 * dx + 40, top + 40, '5', 33, PINK2, 'bold', 'middle');
  b += txt(x - 8, top - 20, '2', 34, GREEN, 'bold', 'middle');
  b += txt(x + dx - 8, top - 20, '5', 34, GREEN, 'bold', 'middle');
  b += txt(x - 44, top + 84, '−', 26, '#222', 'bold', 'middle');
  b += txt(x, top + 84, '1', 27, '#222', 'bold', 'middle');
  b += txt(x + dx, top + 84, '0', 27, '#222', 'bold', 'middle');
  b += seg(x - 54, top + 100, x + 2 * dx, top + 100, BLUE, 3);
  b += txt(x + dx - 8, top + 130, '2', 30, '#222', 'bold', 'middle');
  b += txt(x + 2 * dx - 8, top + 130, '7', 30, OCRE, 'bold', 'middle');
  b += arrow(x + 2 * dx + 30, top + 112, x + 2 * dx - 4, top + 122, OCRE, 3.5);
  b += txt(x - 44, top + 174, '−', 26, '#222', 'bold', 'middle');
  b += txt(x, top + 174, '2', 27, '#222', 'bold', 'middle');
  b += txt(x + dx, top + 174, '5', 27, '#222', 'bold', 'middle');
  b += seg(x - 54, top + 190, x + 2 * dx, top + 190, BLUE, 3);
  b += txt(x + 2 * dx - 8, top + 218, '2', 30, PINK2, 'bold', 'middle');
  const ax = 590;
  b += txt(ax, top - 16, 'Dans 12, combien de fois 5 ?', 20, '#222', 'normal');
  b += txt(ax, top + 14, '→ 2 fois, car 2 × 5 = 10 ; 12 − 10 = 2', 20, '#222', 'normal');
  b += txt(ax, top + 44, 'J’abaisse le 7 : ça fait 27.', 20, OCRE, 'bold');
  b += txt(ax, top + 74, 'Dans 27, combien de fois 5 ?', 20, '#222', 'normal');
  b += txt(ax, top + 104, '→ 5 fois, car 5 × 5 = 25 ; 27 − 25 = 2', 20, '#222', 'normal');
  b += txt(ax, top + 134, 'Quotient 25, reste 2 (2 &lt; 5 ✓)', 21, GREEN, 'bold');
  b += box(90, top + 252, 820, 48, 'PREUVE ROYALE : (5 × 25) + 2 = 125 + 2 = 127 = le dividende ✓', GREENL, GREEN, 22);
  b += box(90, top + 316, 820, 46, 'RÈGLE D’OR : le reste est toujours plus petit que le diviseur — sinon le quotient est trop petit !', '#FDE7EF', PINK2, 18);
  return svg(1000, top + 386, s + b); })();

// F6 — fractions : les 4 opérations
figs.m6f1 = (() => { const { s, y } = head('Fractions : les quatre opérations en images', ['Même dénominateur : direct. Dénominateurs différents : on passe par le produit en croix.']);
  const top = y + 8;
  let b = bar(120, top, 200, 40, 5, 1) + txt(95, top + 27, '1/5', 21, PINK2, 'bold', 'middle');
  b += txt(340, top + 27, '+', 24, GREEN, 'bold', 'middle');
  b += bar(370, top, 200, 40, 5, 2) + txt(345, top + 27, '2/5', 21, PINK2, 'bold', 'middle');
  b += txt(590, top + 27, '=', 24, GREEN, 'bold', 'middle');
  b += bar(620, top, 200, 40, 5, 3) + txt(595, top + 27, '3/5', 21, GREEN, 'bold', 'middle');
  b += txt(500, top + 66, 'MÊME dénominateur : on additionne (ou soustrait) les numérateurs, sans toucher au bas', 19, '#222', 'normal', 'middle');
  const cy = top + 130;
  b += txt(180, cy, '2', 26, PINK2, 'bold', 'middle') + seg(160, cy + 12, 200, cy + 12, '#222', 3.5) + txt(180, cy + 44, '3', 26, PINK2, 'bold', 'middle');
  b += txt(250, cy + 20, '+', 26, GREEN, 'bold', 'middle');
  b += txt(320, cy, '1', 26, OCRE, 'bold', 'middle') + seg(300, cy + 12, 340, cy + 12, '#222', 3.5) + txt(320, cy + 44, '5', 26, OCRE, 'bold', 'middle');
  b += arrow(206, cy - 4, 306, cy + 40, PINK2, 3);
  b += arrow(336, cy - 4, 216, cy + 40, OCRE, 3);
  b += txt(420, cy + 20, '=', 24, '#222', 'bold', 'middle');
  b += txt(500, cy, '2 × 5 + 1 × 3', 24, BLUE, 'bold', 'middle');
  b += txt(500, cy + 44, '3 × 5', 24, BLUE, 'bold', 'middle') + seg(452, cy + 12, 548, cy + 12, BLUE, 3);
  b += txt(600, cy + 20, '=', 24, '#222', 'bold', 'middle');
  b += txt(670, cy, '13', 26, GREEN, 'bold', 'middle') + seg(650, cy + 12, 690, cy + 12, '#222', 3.5) + txt(670, cy + 44, '15', 26, GREEN, 'bold', 'middle');
  b += txt(500, cy + 76, 'DÉNOMINATEURS DIFFÉRENTS : les flèches croisées fabriquent le nouveau dénominateur', 19, '#222', 'normal', 'middle');
  b += box(60, cy + 100, 880, 46, '× : haut × haut, bas × bas — simplifier en croix AVANT : 2/3 × 3/4 = 1/2', GREENL, GREEN, 19);
  b += box(60, cy + 160, 880, 46, '÷ : multiplier par l’INVERSE (le haut et le bas échangent) : 2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9', '#FDE7EF', PINK2, 19);
  b += box(60, cy + 220, 880, 46, 'UN ENTIER devient n/1 : 3 − 2/5 = 15/5 − 2/5 = 13/5', BLUEL, BLUE, 19);
  return svg(1000, cy + 284, s + b); })();

// F7 — durées : la base 60
figs.m7f1 = (() => { const { s, y } = head('Les durées : quand les retenues valent 60', ['Heures avec heures, minutes avec minutes — et chaque fois que 60 arrive, on échange.']);
  const top = y + 10;
  let b = `<rect x="60" y="${top}" width="440" height="180" rx="10" fill="white" stroke="${GREEN}" stroke-width="3"/>`;
  b += txt(280, top + 32, 'ADDITION (la retenue vaut 60)', 19, GREEN, 'bold', 'middle');
  b += txt(280, top + 66, '1 h 15 min + 50 min', 22, '#222', 'bold', 'middle');
  b += txt(280, top + 98, '= 1 h 65 min', 22, '#222', 'bold', 'middle');
  b += txt(280, top + 130, '65 min = 1 h 05 min', 20, OCRE, 'bold', 'middle');
  b += txt(280, top + 162, '= 2 h 05 min ✓', 22, GREEN, 'bold', 'middle');
  b += `<rect x="520" y="${top}" width="440" height="180" rx="10" fill="white" stroke="${PINK2}" stroke-width="3"/>`;
  b += txt(740, top + 32, 'SOUSTRACTION (l’emprunt vaut 60)', 19, PINK2, 'bold', 'middle');
  b += txt(740, top + 66, '2 h 30 min − 1 h 40 min', 22, '#222', 'bold', 'middle');
  b += txt(740, top + 98, '30 &lt; 40 : j’emprunte 1 h', 20, OCRE, 'bold', 'middle');
  b += txt(740, top + 130, '1 h 90 min − 1 h 40 min', 21, '#222', 'bold', 'middle');
  b += txt(740, top + 162, '= 50 min ✓', 22, GREEN, 'bold', 'middle');
  b += box(60, top + 200, 880, 46, '× et ÷ : tout convertir en MINUTES d’abord : 4 h 20 min = 260 min ; 260 ÷ 2 = 130 min = 2 h 10 min', BLUEL, BLUE, 19);
  b += box(60, top + 260, 880, 46, 'PIÈGE : 1 h 30 n’est PAS 1,30 h (c’est 1,5 h) — jamais de virgule avec les heures !', '#FFF3E0', OCRE, 19);
  return svg(1000, top + 324, s + b); })();

// F8 — piquets et intervalles
figs.m8f1 = (() => { const { s, y } = head('Piquets et intervalles : le piège des extrémités', ['Toujours dessiner un petit schéma avant de répondre — le dessin ne se trompe jamais.']);
  const top = y + 12;
  let b = '';
  for (let i = 0; i < 5; i++) b += dot(140 + i * 150, top + 40, 11, PINK2);
  for (let i = 0; i < 4; i++) b += seg(152 + i * 150, top + 40, 278 + i * 150, top + 40, BLUE, 4);
  b += txt(140, top + 84, 'piquet', 16, PINK2, 'bold', 'middle');
  b += txt(500, top + 84, 'intervalles', 17, BLUE, 'bold', 'middle');
  b += txt(740, top + 84, 'piquet', 16, PINK2, 'bold', 'middle');
  b += txt(500, top + 120, 'LIGNE OUVERTE : 5 piquets, 4 intervalles → piquets = intervalles + 1', 20, GREEN, 'bold', 'middle');
  const gy = top + 160;
  const rx = 140, ry = gy, rw = 600, rh = 150;
  b += seg(rx, ry, rx + rw, ry, BLUE, 4) + seg(rx, ry + rh, rx + rw, ry + rh, BLUE, 4);
  b += seg(rx, ry, rx, ry + rh, BLUE, 4) + seg(rx + rw, ry, rx + rw, ry + rh, BLUE, 4);
  [[rx, ry], [rx + rw / 2, ry], [rx + rw, ry], [rx + rw, ry + rh / 2], [rx + rw, ry + rh], [rx + rw / 2, ry + rh], [rx, ry + rh], [rx, ry + rh / 2]].forEach(pt => b += dot(pt[0], pt[1], 11, GREEN));
  b += txt(730, gy + 66, 'BOUCLE FERMÉE :', 20, GREEN, 'bold');
  b += txt(730, gy + 96, '8 piquets = 8 intervalles', 20, GREEN, 'bold');
  b += txt(730, gy + 126, '→ piquets = intervalles', 20, GREEN, 'bold');
  b += box(60, gy + 190, 880, 46, 'Clôture de 30 m, un piquet tous les 5 m : 30 ÷ 5 = 6 intervalles → 7 piquets', GREENL, GREEN, 19);
  b += box(60, gy + 248, 880, 46, 'Jardin CARRÉ de 20 m de côté, un arbre tous les 4 m : 80 ÷ 4 = 20 → 20 arbres', '#FFF3E0', OCRE, 19);
  return svg(1000, gy + 306, s + b); })();

// F9 — la checklist du CEPE
figs.m9f1 = (() => { const { s, y } = head('La checklist du CEPE — épreuve OPÉRATION', ['Huit réflexes à vérifier avant de rendre ta copie.']);
  const top = y + 10;
  const items = [
    'Lis le sujet DEUX FOIS avant de commencer',
    'Traite les questions UNE PAR UNE (1, 2, 3…)',
    'Identifie l’opération (+, −, ×, ÷) et cherche la question cachée',
    'Relis la leçon si besoin (fractions, conversions…)',
    'Brouillon propre : chiffres alignés, une opération par ligne',
    'Convertis les unités AVANT de calculer (m et cm jamais mélangés !)',
    'Vérifie : ordre de grandeur, puis schéma par 9 pour × et ÷',
    'Recopie et réponds en PHRASE COMPLÈTE, avec l’unité (Ar, m, kg…)',
  ];
  let b = '';
  items.forEach((it, i) => {
    const yy = top + i * 56;
    b += `<rect x="120" y="${yy}" width="30" height="30" rx="6" fill="white" stroke="${BLUE}" stroke-width="3"/>`;
    b += txt(190, yy + 24, it, 21, '#222', 'normal');
    b += txt(105, yy + 24, String(i + 1), 18, PINK2, 'bold', 'middle');
  });
  b += txt(500, top + 8 * 56 + 24, 'Coche-les dans ta tête — ou recopie-les sur ton brouillon !', 20, GREEN, 'bold', 'middle');
  return svg(1000, top + 8 * 56 + 56, s + b); })();

// ---------- CONTENU ----------
(async () => {
  const figBufs = await L.render(figs);
  const children = [];

  // page d'entrée
  children.push(page(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2000, after: 200 }, children: [tr('MÉTHODES', { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, children: [tr('D’OR', { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, shading: { type: ShadingType.CLEAR, fill: C.pale }, children: [new Bookmark({ id: 'mor', children: [tr('LA BOÎTE À OUTILS DU CEPE', { bold: true, color: C.red, size: 50 })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [tr('9 fiches illustrées — tout ce qui facilite les calculs et les problèmes', { italics: true, color: C.green, size: 26 })] }),
    p([tr('Les astuces des maîtres, rassemblées au même endroit : le cache pour lire les grands nombres,', { size: 24 })], { align: AlignmentType.CENTER, after: 60 }),
    p([tr('le schéma de contrôle par 9, la division pas à pas, les mots-indices des problèmes…', { size: 24 })], { align: AlignmentType.CENTER, after: 60 }),
    p([tr('À relire avant chaque examen — et à garder toute ta scolarité !', { size: 24, bold: true, color: C.wine })], { align: AlignmentType.CENTER, after: 300 }),
    p('Sommaire des fiches :', { bold: true, after: 80 }),
    p('1. Comment résoudre un problème — la méthode en 6 étapes', { indent: 240, after: 40 }),
    p('2. Lire un grand nombre — mots-nombres, tableau CDU et cache', { indent: 240, after: 40 }),
    p('3. Bien poser les quatre opérations — unités, virgules, zéros', { indent: 240, after: 40 }),
    p('4. La preuve par 9 — le schéma qui contrôle × et ÷', { indent: 240, after: 40 }),
    p('5. La division posée — pas à pas, avec la preuve royale', { indent: 240, after: 40 }),
    p('6. Les fractions — les quatre opérations en images', { indent: 240, after: 40 }),
    p('7. Les durées — calculer quand les retenues valent 60', { indent: 240, after: 40 }),
    p('8. Piquets et intervalles — le piège des extrémités', { indent: 240, after: 40 }),
    p('9. La checklist du CEPE — épreuve OPÉRATION', { indent: 240, after: 40 }),
  );

  // FICHE 1
  children.push(page(), title('FICHE 1 — RÉSOUDRE UN PROBLÈME : LA MÉTHODE EN 6 ÉTAPES', 1, 'mor1'));
  children.push(p('Un problème, c’est une histoire avec une question. Voici le chemin en six étapes — le même pour tous les problèmes du CEPE.'));
  children.push(p([tr('Étape 1 — Lis l’énoncé DEUX FOIS. ', { bold: true, color: C.green }), tr('La première fois pour l’histoire (qui ? quoi ? où ?), la deuxième fois pour les chiffres. Souligne les données utiles au crayon.')]));
  children.push(p([tr('Étape 2 — Barre les données inutiles. ', { bold: true, color: C.green }), tr('« Rova, qui a 12 ans, achète 4 cahiers à 800 Ar » : l’âge de Rova ne sert à rien ! Les énoncés du CEPE cachent souvent des chiffres piégeurs.')]));
  children.push(p([tr('Étape 3 — Repère la QUESTION, puis cherche la QUESTION CACHÉE. ', { bold: true, color: C.wine }), tr('C’est ce qu’il faut calculer AVANT de pouvoir répondre. « Combien lui rend-on ? » cache une autre question : « Combien a-t-elle dépensé en tout ? » — on ne rend pas la monnaie sans connaître le total !')]));
  children.push(p([tr('Étape 4 — Choisis l’opération ', { bold: true, color: C.green }), tr('avec les mots-indices ci-dessous, ou en dessinant la situation : la quantité grandit (+), diminue (−), se répète (×), se partage (÷).')]));
  children.push(p([tr('Étape 5 — Calcule au brouillon, BIEN POSÉ : ', { bold: true, color: C.green }), tr('chiffres alignés, une opération par ligne, unités converties avant (m avec m, g avec g — jamais mélangées !). Un brouillon propre, c’est un brouillon qu’on peut vérifier.')]));
  children.push(p([tr('Étape 6 — Vérifie, puis réponds en PHRASE COMPLÈTE ', { bold: true, color: C.green }), tr('avec l’unité : « On lui rend 13 900 Ar. » Une réponse sans phrase et sans unité perd des points, même juste !')]));
  children.push(img(figBufs.m1f1));
  children.push(banner('UN EXEMPLE COMPLET, DU DÉBUT À LA FIN', C.wine));
  children.push(p('« Soa achète 3 kapoaka de riz à 1 200 Ar le kapoaka et un savon à 2 500 Ar. Elle paie avec un billet de 20 000 Ar. Combien lui rend-on ? »', { italics: true, indent: 240 }));
  children.push(p('Question cachée : combien a-t-elle dépensé en tout ? On ne peut pas rendre la monnaie sans le total !', { indent: 360, color: C.wine, bold: true }));
  children.push(p('Mots-indices : « à 1 200 Ar le kapoaka » (prix unitaire → ×), « et un savon » (réunion → +), « combien lui rend-on » (écart → −).', { indent: 360 }));
  children.push(p('Démarche : 3 × 1 200 = 3 600 Ar (riz) ; 3 600 + 2 500 = 6 100 Ar (total) ; 20 000 − 6 100 = 13 900 Ar.', { indent: 360 }));
  children.push(p('Réponse : On lui rend 13 900 Ar.', { indent: 360, bold: true, color: C.green }));

  // FICHE 2
  children.push(page(), title('FICHE 2 — LIRE UN GRAND NOMBRE', 1, 'mor2'));
  children.push(p('Les enfants de T3 ont appris les mots-nombres ; les voilà revenus, et ce sont eux qui font tout le travail. Trois phrases suffisent pour lire n’importe quel nombre :'));
  children.push(p([tr('« Je révise mes mots-nombres. » ', { bold: true, color: C.green }), tr('Vingt, trente, quarante, cinquante, soixante… et les trois mots-pièges : soixante-dix (60 + 10), quatre-vingts (4 × 20), quatre-vingt-dix (80 + 10). 75 = soixante-quinze, 95 = quatre-vingt-quinze.')]));
  children.push(p([tr('« Je lis TROIS chiffres à la fois. » ', { bold: true, color: C.green }), tr('Dans chaque classe (Unités, Mille, Millions, Milliards), on lit centaines, dizaines, unités — jamais plus. Entre les classes, on dit juste « mille », « millions », « milliards ». C’est pourquoi savoir lire un nombre de 3 chiffres suffit pour lire jusqu’au milliard !')]));
  children.push(p([tr('« J’utilise le tableau et le cache. » ', { bold: true, color: C.green }), tr('Pour ÉCRIRE un nombre dicté, on entre les chiffres dans le tableau de DROITE à GAUCHE (le chiffre des unités entre le premier) — c’est ainsi qu’on évite l’erreur des classes incomplètes. Pour LIRE, on part de la gauche, et le cache (une fenêtre découpée dans un carton) ne découvre qu’une classe à la fois : aucune confusion possible entre les chiffres des différentes classes.')]));
  children.push(img(figBufs.m2f1));
  children.push(p('Astuce bonus : « trois mille » → la classe des mille commence par 3 ; complète ensuite chaque classe avec les zéros qu’il faut. « Trois mille sept » = 3 007, jamais 37 ni 3 700 !', { fill: 'FFF8E1' }));

  // FICHE 3
  children.push(page(), title('FICHE 3 — BIEN POSER LES QUATRE OPÉRATIONS', 1, 'mor3'));
  children.push(p('Une opération bien posée est à moitié calculée. Une opération mal posée est perdue d’avance — même si l’on connaît toutes ses tables.'));
  children.push(p([tr('Règle 1 — Unités de même espèce. ', { bold: true, color: C.red }), tr('On n’additionne JAMAIS des mètres avec des kilomètres, ni des francs avec des ariary : 12 m + 4 km est interdit ! On convertit d’abord tout dans la même unité (4 km = 4 000 m), puis on calcule.')]));
  children.push(p([tr('Règle 2 — Les virgules s’alignent. ', { bold: true, color: C.green }), tr('Pour additionner ou soustraire des décimaux, chaque virgule se place l’une sous l’autre ; on peut compléter avec des zéros (3,5 = 3,50). Chaque chiffre reste dans sa colonne : unités sous unités, dixièmes sous dixièmes.')]));
  children.push(p([tr('Règle 3 — Attention aux zéros. ', { bold: true, color: C.ocre }), tr('Dans 13,01 × 40,1, chaque zéro compte : aucun ne se perd, aucun ne s’invente. Les zéros « qui gardent la place » sont les gardiens du tableau de numération.')]));
  children.push(p([tr('Règle 4 — Estime AVANT, vérifie APRÈS. ', { bold: true, color: C.blue }), tr('Avant de calculer, un ordre de grandeur de tête (13 × 40 ≈ 520) ; après, la preuve (opération inverse, ou croix de la fiche 4). Le candidat qui rend sa copie sans vérifier laisse ses fautes de retenue se promener en liberté.')]));
  children.push(img(figBufs.m3f1));

  // FICHE 4
  children.push(page(), title('FICHE 4 — LA PREUVE PAR 9 : LE SCHÉMA MAGIQUE', 1, 'mor4'));
  children.push(p('La preuve par neuf contrôle une multiplication ou une division en quelques secondes. Elle se lit dans un dessin à quatre directions.'));
  children.push(p([tr('Étape 1 — RÉDUIS chaque nombre à un seul chiffre : ', { bold: true, color: C.green }), tr('additionne ses chiffres, et recommence jusqu’à un seul. 47 → 4 + 7 = 11 → 1 + 1 = 2. Astuce des calculateurs : jette les 9 au passage !')]));
  children.push(p([tr('Étape 2 — Place les nombres sur le schéma et suis les branches : ', { bold: true, color: C.green }), tr('MULTIPLICATION → en HAUT et en BAS les réduits des deux facteurs, à GAUCHE le réduit du produit. DIVISION → en HAUT le réduit du diviseur, en BAS celui du quotient, à GAUCHE celui du dividende.')]));
  children.push(p([tr('Étape 3 — Calcule la DROITE : ', { bold: true, color: C.green }), tr('multiplication → droite = haut × bas ; division → droite = (haut × bas) + reste. Si GAUCHE = DROITE, le résultat est très probablement juste ✓')]));
  children.push(img(figBufs.m4f1));
  children.push(p('Exemple de réduction rapide : 425 → 4 + 2 + 5 = 11 → 1 + 1 = 2. Et 945 : on jette le 9, 4 + 5 = 9 → on jette encore → 0 : les flèches du schéma font le contrôle !', { fill: 'FFF8E1' }));
  children.push(p([tr('Limite du schéma : ', { bold: true, color: C.red }), tr('elle ne voit pas deux chiffres simplement échangés (2 13 au lieu de 213 garde le même réduit). « Très probablement juste », donc — et pas « sûrement juste ». Pour la certitude, la preuve complète reste la reine : (diviseur × quotient) + reste = dividende.')], { fill: 'FDE7EF' }));

  // FICHE 5
  children.push(page(), title('FICHE 5 — LA DIVISION POSÉE PAS À PAS', 1, 'mor5'));
  children.push(p('La division posée s’appuie entièrement sur les tables : une seule question à se répéter, colonne après colonne — « Dans… combien de fois… ? »'));
  children.push(p([tr('Avant de commencer, encadre le quotient : ', { bold: true, color: C.green }), tr('25 × 10 < 375 < 25 × 100 → le quotient de 375 ÷ 25 a 2 chiffres. Cet encadrement évite de poser un quotient trop court.')]));
  children.push(p([tr('Les quatre gestes, répétés : ', { bold: true, color: C.green }), tr('1) prendre les chiffres du dividende de gauche à droite ; 2) demander à la table « combien de fois ? » ; 3) soustraire ; 4) abaisser le chiffre suivant.')]));
  children.push(img(figBufs.m5f1));
  children.push(p([tr('La règle d’or du reste : ', { bold: true, color: C.wine }), tr('s’il atteint ou dépasse le diviseur, c’est qu’on pouvait encore servir une tournée — le quotient était trop petit. Et la preuve royale : dividende = (diviseur × quotient) + reste. Cette égalité est la carte d’identité de la division : au CEPE, elle vaut de l’or.')], { fill: 'FFF8E1' }));

  // FICHE 6
  children.push(page(), title('FICHE 6 — FRACTIONS : LES QUATRE OPÉRATIONS', 1, 'mor6'));
  children.push(p('Quatre règles courtes — et une image pour chacune. Le dénominateur (le bas) découpe ; le numérateur (le haut) colorie.'));
  children.push(p([tr('Addition, soustraction — même dénominateur : ', { bold: true, color: C.green }), tr('on additionne (ou soustrait) les numérateurs, le bas ne change pas : 1/5 + 2/5 = 3/5.')]));
  children.push(p([tr('Addition, soustraction — dénominateurs différents : ', { bold: true, color: C.green }), tr('les flèches croisées fabriquent la fraction commune : 2/3 + 1/5 = (2 × 5 + 1 × 3)/(3 × 5) = 13/15. On multiplie « en diagonale » vers le haut, et les deux bas ensemble donnent le nouveau bas.')]));
  children.push(p([tr('Multiplication : ', { bold: true, color: C.green }), tr('haut × haut, bas × bas — et on simplifie EN CROIX avant de calculer : 2/3 × 3/4 = 1/2 (les deux 3 s’annulent).')]));
  children.push(p([tr('Division : ', { bold: true, color: C.green }), tr('diviser, c’est multiplier par l’INVERSE — le haut et le bas échangent leur place : 2/3 ÷ 3/4 = 2/3 × 4/3 = 8/9.')]));
  children.push(p([tr('Et les entiers ? ', { bold: true, color: C.green }), tr('Un entier devient une fraction sur 1 : 3 = 3/1. Donc 3 − 2/5 = 15/5 − 2/5 = 13/5.')]));
  children.push(img(figBufs.m6f1));

  // FICHE 7
  children.push(page(), title('FICHE 7 — LES DURÉES : QUAND LES RETENUES VALENT 60', 1, 'mor7'));
  children.push(p('Le temps est le grand rebelle du système décimal : il compte en 60 (secondes → minutes, minutes → heures) et en 24 (heures → jour). Toutes les techniques des grands nombres s’adaptent — il suffit de remplacer 10 par 60.'));
  children.push(p([tr('Additionner : ', { bold: true, color: C.green }), tr('heures avec heures, minutes avec minutes. Dès que les minutes atteignent 60, on les ÉCHANGE contre 1 heure : 1 h 15 + 50 min = 1 h 65 min = 2 h 05 min.')]));
  children.push(p([tr('Soustraire : ', { bold: true, color: C.green }), tr('si les minutes du haut sont trop petites, on EMPRUNTE 1 heure et on la casse en 60 minutes : 2 h 30 − 1 h 40 = 1 h 90 − 1 h 40 = 50 min.')]));
  children.push(p([tr('Multiplier ou diviser : ', { bold: true, color: C.green }), tr('tout convertir en minutes d’abord, calculer, puis reconvertir : 4 h 20 min = 260 min ; 260 ÷ 2 = 130 min = 2 h 10 min.')]));
  children.push(img(figBufs.m7f1));
  children.push(p('Piège d’or : 1 h 30 n’est PAS 1,30 h — c’est 1,5 h ! Les minutes ne sont pas des centièmes d’heure : on ne met jamais de virgule dans une durée.', { fill: 'FDE7EF', bold: true }));

  // FICHE 8
  children.push(page(), title('FICHE 8 — PIQUETS ET INTERVALLES : LE PIÈGE DES EXTRÉMITÉS', 1, 'mor8'));
  children.push(p('Des piquets le long d’une clôture, des arbres autour d’un champ, des poteaux le long d’une route : le CEPE adore ce piège. La règle tient en deux dessins.'));
  children.push(p([tr('LIGNE OUVERTE (les deux bouts ne se rejoignent pas) : ', { bold: true, color: C.green }), tr('nombre de piquets = nombre d’intervalles + 1. Cinq piquets plantés tous les 5 m n’occupent que 4 intervalles : 20 m de ligne, 5 piquets !')]));
  children.push(p([tr('BOUCLE FERMÉE (le tour d’un champ, un carrousel) : ', { bold: true, color: C.green }), tr('nombre de piquets = nombre d’intervalles. Le premier piquet et le dernier sont le même : le tour de 80 m avec un arbre tous les 4 m porte exactement 20 arbres.')]));
  children.push(p([tr('Le réflexe du champion : ', { bold: true, color: C.wine }), tr('avant de répondre, DESSINE le schéma — quelques traits et quelques points suffisent. Le dessin ne se trompe jamais ; la formule apprise par cœur, si.')], { fill: 'FFF8E1' }));
  children.push(img(figBufs.m8f1));

  // FICHE 9
  children.push(page(), title('FICHE 9 — LA CHECKLIST DU CEPE (ÉPREUVE OPÉRATION)', 1, 'mor9'));
  children.push(p('Les consignes officielles de l’épreuve, transformées en huit réflexes. Coche-les dans ta tête — ou recopie-les en haut de ton brouillon à chaque examen.'));
  children.push(img(figBufs.m9f1));
  children.push(banner('ET POUR L’ÉPREUVE DE PROBLÈMES…', C.wine));
  children.push(p('Même armure : lis deux fois, une question à la fois, cherche la question cachée (fiche 1), choisis l’opération avec les mots-indices, convertis les unités, vérifie avec le schéma par 9 (fiche 4) et la preuve royale (fiche 5) — puis réponds en phrase complète avec l’unité. Bon CEPE !', { fill: 'FFF8E1' }));

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr('J-Learn — Mathématiques T5 — Méthodes d’or', { size: 18, color: '666666' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18 })] })] }) },
      children
    }]
  });
  const out = path.join(__dirname, '..', 'Manuel_Mathematiques_T5_METHODES.docx');
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log(out, ':', fs.statSync(out).size, 'octets');
})();
