// Moteur de mise en page — Manuel Mathématiques T5 (standard V3 final, 12 pt)
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Header, Footer, PageNumber, Bookmark, InternalHyperlink,
  ImageRun, TableLayoutType, Math: DocxMath, MathFraction, MathRun,
  HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType
} = require('docx');
const { pngSize } = require('./figlib');

const C = { red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', bleu2: '1565C0', pale: 'EAF2F8', paleGreen: 'E8F5E9', paleBlue: 'E3F2FD', gray: 'E7E6E6', black: '000000', white: 'FFFFFF' };
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };
const gb = { style: BorderStyle.SINGLE, size: 4, color: '808080' };
const ib = { style: BorderStyle.SINGLE, size: 4, color: 'B0B0B0' };
const borders = { top: gb, bottom: gb, left: gb, right: gb, insideHorizontal: ib, insideVertical: ib };

const tr = (text, opt = {}) => new TextRun({ text, font: 'Times New Roman', size: opt.size || 24, bold: !!opt.bold, color: opt.color || C.black, italics: !!opt.italics });
// Fractions numériques a/b -> OMML natif Word
const rich = (text, opt = {}) => {
  const out = []; let last = 0; const re = /(\d[\d ]*)\/(\d[\d ]*)/g; let m;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(tr(text.slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1].trim())], denominator: [new MathRun(m[2].trim())] })] }));
    last = re.lastIndex;
  }
  if (last < text.length) out.push(tr(text.slice(last), opt));
  return out.length ? out : [tr(text, opt)];
};
const p = (text, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.JUSTIFIED, spacing: { after: opt.after ?? 110, line: 300 }, indent: opt.indent ? { left: opt.indent } : undefined, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: rich(text, opt) });
const mixed = (parts, opt = {}) => new Paragraph({ alignment: opt.align || AlignmentType.JUSTIFIED, spacing: { after: opt.after ?? 110, line: 300 }, shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, children: parts.flatMap(([t, o]) => rich(t, o)) });
const title = (text, level = 1, bookmark) => {
  const run = tr(text, { bold: true, color: level === 1 ? C.red : C.green, size: level === 1 ? 32 : 28 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 200, after: 150 }, children });
};
const cell = (text, opt = {}) => new TableCell({
  width: opt.width ? { size: opt.width, type: WidthType.PERCENTAGE } : undefined, columnSpan: opt.span, rowSpan: opt.rowSpan,
  shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined, margins: { top: 80, bottom: 80, left: 80, right: 80 },
  children: (Array.isArray(text) ? text : [text]).map(t => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: 40 }, children: rich(t, { bold: opt.bold, color: opt.color || C.black, size: opt.size || 20 }) }))
});
const metaCell = lines => new TableCell({
  margins: { top: 80, bottom: 80, left: 80, right: 80 },
  children: lines.map(([label, val]) => new Paragraph({ spacing: { after: 60 }, children: [tr(label, { bold: true, size: 22 }), ...rich(val, { size: 22 })] }))
});
const table = (rows, columnWidths, opt = {}) => new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: opt.noBorders ? noBorders : borders, rows, columnWidths });
const bullet = text => new Paragraph({ bullet: { level: 0 }, spacing: { after: 80 }, children: rich(text) });
const correction = (label, text) => new Paragraph({ spacing: { after: 80 }, children: [tr(label, { bold: true, color: C.wine }), ...rich(text)] });
const banner = (text, fill) => new Paragraph({ spacing: { before: 180, after: 110 }, shading: { type: ShadingType.CLEAR, fill }, children: [tr('  ' + text, { bold: true, color: C.white, size: 26 })] });

// ---------- Page « Mon cahier » : trace écrite attendue, sur page Seyès ----------
const escXml = t => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
function wrapTxt(text, max) {
  // garder les nombres du type « 1 000 000 » sur une seule ligne
  while (/\d \d{3}(?!\d)/.test(text)) text = text.replace(/(\d) (\d{3})(?!\d)/g, '$1\u00A0$2');
  const words = text.split(' '); const lines = []; let cur = '';
  for (const w of words) {
    if ((cur + ' ' + w).trim().length > max) { if (cur) lines.push(cur); cur = w; }
    else cur = (cur ? cur + ' ' : '') + w;
  }
  if (cur) lines.push(cur);
  return lines;
}
function firstSentences(text, maxLen) {
  const parts = text.split('. '); let out = '';
  for (const s of parts) {
    const cand = out ? out + '. ' + s : s;
    if (cand.length > maxLen && out) break;
    out = cand;
    if (out.length > maxLen) break;
  }
  if (!/[.!?]$/.test(out)) out += '.';
  return out;
}
// date scolaire réaliste pour chaque séance (année 2026-2027, jours ouvrables)
const U_OFFSET = { 1: 0, 2: 12, 3: 25, 4: 32, 5: 41, 6: 50 };
function dateSeance(k) {
  const d = new Date(2026, 9, 5); // lundi 5 octobre 2026, rentrée
  d.setDate(d.getDate() + Math.round(k * 3.5));
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  const jours = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
  const mois = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return `${jours[d.getDay()]} ${d.getDate()} ${mois[d.getMonth()]} ${d.getFullYear()}`;
}
function cahierSvg(s) {
  const W = 1240, H = 1660, MARG = 150, STEP = 62, INK = '#1A3FA8', F = 'Sacramento, DejaVu Serif', FT = 'Tinos, DejaVu Serif';
  let b = `<rect width="100%" height="100%" fill="#FDFDF8"/>`;
  // quadrillage Seyès : interlignes fines + lignes principales + verticales
  for (let y = 100; y <= H - 50; y += STEP) {
    for (let k = 1; k <= 3; k++) b += `<line x1="30" y1="${y - k * STEP / 4}" x2="${W - 20}" y2="${y - k * STEP / 4}" stroke="#D5E2F2" stroke-width="1"/>`;
    b += `<line x1="30" y1="${y}" x2="${W - 20}" y2="${y}" stroke="#9FB9DC" stroke-width="1.6"/>`;
  }
  for (let x = 92; x < W - 20; x += STEP) b += `<line x1="${x}" y1="30" x2="${x}" y2="${H - 30}" stroke="#D5E2F2" stroke-width="1"/>`;
  b += `<line x1="${MARG}" y1="30" x2="${MARG}" y2="${H - 30}" stroke="#E08080" stroke-width="3"/>`;
  b += `<rect x="20" y="20" width="${W - 40}" height="${H - 40}" fill="none" stroke="#C8C8C8" stroke-width="2"/>`;
  let y = 100;
  // date réaliste
  b += `<text x="${(MARG + W) / 2}" y="${y}" font-family="${F}" font-size="36" fill="${INK}" text-anchor="middle">${s._date || 'Date : ……………………'}</text>`;
  y += STEP;
  // titre en MAJUSCULES souligné en rouge (taille auto pour tenir dans la page)
  const T = s.t.toUpperCase();
  // titre sur 1 ou 2 lignes, taille ajustée à la plus longue ligne (Sacramento : capitales larges)
  let tLines = [T];
  if (T.length > 26) {
    const words = T.split(' ');
    let l1 = '', l2 = '';
    for (const w of words) { if ((l1 + ' ' + w).trim().length <= Math.ceil(T.length / 2) + 4 && !l2) l1 = (l1 + ' ' + w).trim(); else l2 = (l2 + ' ' + w).trim(); }
    tLines = l2 ? [l1, l2] : [l1];
  }
  const tMax = Math.max(...tLines.map(l => l.length));
  const tSize = Math.max(28, Math.min(40, Math.floor((W - MARG - 110) / (tMax * 0.62))));
  let tw = 0;
  for (const tl of tLines) {
    b += `<text x="${(MARG + W) / 2}" y="${y}" font-family="${FT}" font-size="${tSize}" font-weight="bold" fill="${INK}" text-anchor="middle">${escXml(tl)}</text>`;
    tw = tl.length * tSize * 0.52;
    y += STEP;
  }
  y -= STEP;
  b += `<line x1="${(MARG + W) / 2 - tw / 2}" y1="${y + 8}" x2="${(MARG + W) / 2 + tw / 2}" y2="${y + 8}" stroke="#D23B3B" stroke-width="3"/>`;
  y += STEP * 2;
  const X0 = MARG + 40, USABLE = W - MARG - 90;
  const extra = (s.cahier || []).filter(bl => bl[0] !== 'noex');
  const noex = (s.cahier || []).some(bl => bl[0] === 'noex');
  const blocks = [['regle', s.def], ...extra];
  if (!noex) blocks.push(['ex', firstSentences(s.exemple, 190)]);
  const rich = (txt0, size = 36) => escXml(String(txt0)).replace(/(^|[\s\u00A0(«»])([A-ZÀ-ÖØ-Þ]{2,}(?:[\s\u00A0][A-ZÀ-ÖØ-Þ]{2,})*)(?=$|[\s\u00A0)«»,.:;!?’])/g, (m0, pre, caps) => `${pre}<tspan font-family="${FT}" font-size="${Math.round(size * 0.82)}">${caps}</tspan>`);
  const wline = (line, size = 36, color = INK, x = X0) => { b += `<text x="${x}" y="${y}" font-family="${F}" font-size="${size}" fill="${color}">${rich(line, size)}</text>`; y += STEP; };
  for (const bl of blocks) {
    if (y > H - 200) break;
    const kind = bl[0], val = bl[1];
    if (kind === 'regle') {
      const lines = wrapTxt(val, 56);
      const boxTop = y - STEP + 24, boxH = (lines.length + 1) * STEP + 14;
      b += `<rect x="${MARG + 14}" y="${boxTop}" width="${W - MARG - 70}" height="${boxH}" rx="12" fill="none" stroke="#D23B3B" stroke-width="3.5"/>`;
      b += `<text x="${X0}" y="${y}" font-family="${F}" font-size="38" font-weight="bold" fill="#D23B3B">Règle :</text>`;
      y += STEP;
      for (const l of lines) wline(l);
      y += STEP;
    } else if (kind === 'txt') {
      for (const l of wrapTxt(val, 58)) wline(l, 36, bl[2] || INK);
    } else if (kind === 'ex') {
      b += `<text x="${X0}" y="${y}" font-family="${F}" font-size="38" font-weight="bold" fill="#2E7D32">Exemple :</text>`;
      y += STEP;
      for (const l of wrapTxt(val, 58)) { if (y > H - 110) break; wline(l); }
    } else if (kind === 'vx') {
      for (const [ok, text] of val) {
        const sym = ok ? '✓' : '✗', col = ok ? '#2E7D32' : '#D23B3B';
        const lines = wrapTxt(text, 52);
        b += `<text x="${X0}" y="${y}" font-family="DejaVu Sans" font-size="34" font-weight="bold" fill="${col}">${sym}</text>`;
        lines.forEach((l, j) => wline(l, 36, j === 0 ? col : INK, X0 + 46));
      }
    } else if (kind === 'table') {
      const { groups, sub, rows } = val;
      const nc = sub.length, cw = Math.min(USABLE / nc, nc <= 4 ? 480 : 170);
      const tx = X0, tW = cw * nc;
      let ty = y - STEP + 20;
      const rowH = STEP * 0.9;
      if (groups) {
        let gx = tx;
        for (const [label, fill, span] of groups) {
          const gw = cw * span;
          b += `<rect x="${gx}" y="${ty}" width="${gw}" height="${rowH}" fill="${fill}" stroke="#444" stroke-width="2"/>`;
          b += `<text x="${gx + gw / 2}" y="${ty + rowH / 2 + 11}" font-family="${FT}" font-size="25" font-weight="bold" fill="#333" text-anchor="middle">${escXml(label)}</text>`;
          gx += gw;
        }
        ty += rowH;
      }
      sub.forEach((hcell, j) => {
        b += `<rect x="${tx + j * cw}" y="${ty}" width="${cw}" height="${rowH}" fill="#F1F5FB" stroke="#444" stroke-width="2"/>`;
        b += `<text x="${tx + j * cw + cw / 2}" y="${ty + rowH / 2 + 11}" font-family="${F}" font-size="31" font-weight="bold" fill="#1F4E79" text-anchor="middle">${rich(hcell, 31)}</text>`;
      });
      ty += rowH;
      for (const row of rows) {
        row.forEach((cellv, j) => {
          b += `<rect x="${tx + j * cw}" y="${ty}" width="${cw}" height="${rowH}" fill="white" stroke="#444" stroke-width="2"/>`;
          b += `<text x="${tx + j * cw + cw / 2}" y="${ty + rowH / 2 + 11}" font-family="${F}" font-size="31" fill="${INK}" text-anchor="middle">${rich(cellv, 31)}</text>`;
        });
        ty += rowH;
      }
      y = ty + STEP + 20; y = Math.ceil((y - 100) / STEP) * STEP + 100;
    } else if (kind === 'boxes') {
      const items = val.items, bw = 220, bh = STEP * 1.6;
      let bx = X0;
      const by = y - STEP + 20;
      for (const [digits, fill, label] of items) {
        b += `<rect x="${bx}" y="${by}" width="${bw}" height="${bh}" rx="10" fill="${fill}" stroke="#1F4E79" stroke-width="3"/>`;
        b += `<text x="${bx + bw / 2}" y="${by + bh / 2 + 16}" font-family="${F}" font-size="48" font-weight="bold" fill="${INK}" text-anchor="middle">${escXml(digits)}</text>`;
        b += `<line x1="${bx + bw / 2}" y1="${by + bh + 6}" x2="${bx + bw / 2}" y2="${by + bh + 34}" stroke="#B25000" stroke-width="2.5"/>`;
        b += `<path d="M ${bx + bw / 2 - 7} ${by + bh + 26} L ${bx + bw / 2} ${by + bh + 36} L ${bx + bw / 2 + 7} ${by + bh + 26}" fill="none" stroke="#B25000" stroke-width="2.5"/>`;
        b += `<text x="${bx + bw / 2}" y="${by + bh + 66}" font-family="${F}" font-size="28" fill="#B25000" text-anchor="middle">${escXml(label)}</text>`;
        bx += bw + 36;
      }
      y = by + bh + 80; y = Math.ceil((y - 100) / STEP) * STEP + 100 + STEP;
      if (val.lecture) for (const l of wrapTxt(val.lecture, 58)) wline(l);
    } else if (kind === 'barres') {
      for (const [n, k, label, fill] of val) {
        const bw2 = 560, bh2 = 40, by2 = y - STEP + 24, cw2 = bw2 / n;
        for (let i = 0; i < n; i++) b += `<rect x="${X0 + i * cw2}" y="${by2}" width="${cw2}" height="${bh2}" fill="${i < k ? (fill || '#F8BBD0') : 'white'}" stroke="#1F4E79" stroke-width="2.5"/>`;
        b += `<text x="${X0 + bw2 + 30}" y="${by2 + bh2 / 2 + 12}" font-family="${F}" font-size="36" font-weight="bold" fill="${INK}">${escXml(label)}</text>`;
        y += STEP;
      }
      y += STEP * 0.5; y = Math.ceil((y - 100) / STEP) * STEP + 100;
    } else if (kind === 'droite') {
      const { n, pts } = val, len = 820, ly = y + 10;
      b += `<line x1="${X0}" y1="${ly}" x2="${X0 + len}" y2="${ly}" stroke="#1F4E79" stroke-width="3.5"/>`;
      for (let i = 0; i <= n; i++) {
        const xi = X0 + i * len / n;
        b += `<line x1="${xi}" y1="${ly - 10}" x2="${xi}" y2="${ly + 10}" stroke="#1F4E79" stroke-width="2.5"/>`;
      }
      b += `<text x="${X0}" y="${ly + 46}" font-family="${F}" font-size="30" fill="#333" text-anchor="middle">0</text>`;
      b += `<text x="${X0 + len}" y="${ly + 46}" font-family="${F}" font-size="30" fill="#333" text-anchor="middle">1</text>`;
      for (const [i, label] of pts) {
        const xi = X0 + i * len / n;
        b += `<circle cx="${xi}" cy="${ly}" r="7" fill="#D23B3B"/>`;
        b += `<text x="${xi}" y="${ly - 22}" font-family="${F}" font-size="30" font-weight="bold" fill="#D23B3B" text-anchor="middle">${escXml(label)}</text>`;
      }
      y += STEP * 2;
    }
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">${b}</svg>`;
}
const page = () => new Paragraph({ children: [new PageBreak()] });
const img = (buf, widthPx = 500) => {
  const { w, h } = pngSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'png', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

function jpgSize(buf) {
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xFF) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xC0 && m <= 0xCF && m !== 0xC4 && m !== 0xC8 && m !== 0xCC) return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return { w: 1376, h: 768 };
}
const imgJpg = (buf, widthPx = 430) => {
  const { w, h } = jpgSize(buf);
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [new ImageRun({ type: 'jpg', data: buf, transformation: { width: widthPx, height: Math.round(widthPx * h / w) } })] });
};

function metaTable(s, i, total) {
  return table([new TableRow({
    children: [
      metaCell([
        ['Discipline : ', 'Mathématiques'],
        ['Composante : ', s.comp],
        ['Thème : ', s.theme],
        ['Titre : ', s.t],
        ['Objectif spécifique : ', `À la fin de la séance, l’apprenant est capable de ${s.goal}.`],
        ['Documentation : ', 'Programme d’études T5 (MEN) ; sujets d’examen CEPE ; manuel J-Learn Math T5'],
        ['Support et matériel : ', s.mat]
      ]),
      metaCell([
        ['Date : ', '_______________'],
        ['Classe : ', 'T5'],
        ['Séance n° : ', `${i} / ${total}`]
      ])
    ]
  })], [6700, 2900], { noBorders: true });
}

function deroulement(s) {
  const hdr = new TableRow({
    children: [cell('Étapes', { bold: true, fill: C.pale }), cell('Déroulement de la leçon', { bold: true, fill: C.pale, span: 2, align: AlignmentType.CENTER }), cell('Technique et stratégie', { bold: true, fill: C.pale }), cell('Support et matériel', { bold: true, fill: C.pale }), cell('Observation', { bold: true, fill: C.pale })]
  });
  const sub = new TableRow({
    children: [cell(''), cell('Enseignant', { bold: true, align: AlignmentType.CENTER }), cell('Apprenants', { bold: true, align: AlignmentType.CENTER }), cell(''), cell(''), cell('')]
  });
  const r = (etape, ens, app, tech, supp, obs) => new TableRow({ children: [cell(etape, { bold: true }), cell(ens), cell(app), cell(tech), cell(supp), cell(obs)] });
  return table([
    hdr, sub,
    r('I. Révision', s.revQ, `R.A. : ${s.revRA}`, 'Questions-réponses', 'Tableau, ardoises', 'Acquis à consolider'),
    r('II. NOUVELLE LEÇON', `Annonce : « Aujourd’hui, nous allons apprendre à ${s.goal}. »`, 'Écoutent.', 'Présentation guidée', 'Tableau', ''),
    r('1. Mise en situation', s.situation, 'Écoutent, observent et proposent des réponses.', 'Situation-problème', 'Illustration, tableau', 'Participation'),
    r('2. Présentation', `Présente le titre « ${s.t} » et l’objectif de la séance.`, 'Écoutent.', 'Explication brève', 'Tableau', ''),
    r('3. Observation', s.exemple, 'Observent l’exemple résolu.', 'Observation dirigée', 'Figure imprimée', 'Compréhension'),
    r('4. Analyse', `Guide l’analyse : ${s.concept}`, 'Expliquent la démarche et vérifient le résultat.', 'Recherche en binômes', 'Ardoises, instruments', 'Raisonnement'),
    r('5. Synthèse', `Donc, ${s.synthese}`, 'Écoutent et reformulent la règle.', 'Synthèse guidée', 'Cahier, tableau', 'Trace écrite'),
    r('6. Application', `${s.exos[0]} ${s.exos[1]}`, `${s.corr[0]} ${s.corr[1]}`, 'Travail individuel puis correction collective', 'Cahier, ardoises', 'Remédiation'),
    r('III. Évaluation', `Résous sans modèle : ${s.exos[0]} Puis justifie l’une de tes réponses.`, `${s.corr[0]} La justification s’appuie sur la règle de la leçon.`, 'Travail individuel', 'Feuille, cahier', 'Maîtrise de l’objectif')
  ], [1300, 2200, 2000, 1500, 1400, 1200]);
}

function seance(s, i, total, uNo, figBufs, cahierBuf) {
  const a = [];
  a.push(page());
  a.push(title(`SÉANCE ${i} / ${total} — ${s.t.toUpperCase()}`, 1, `u${uNo}_l${i}`));
  a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 120, after: 120 }, children: [tr('FICHE DE PRÉPARATION', { bold: true, size: 30 })] }));
  a.push(metaTable(s, i, total));
  a.push(new Paragraph({ spacing: { after: 60 }, children: [] }));
  a.push(deroulement(s));
  a.push(page());
  a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 160, after: 160 }, children: [tr(s.t.toUpperCase(), { bold: true, color: C.red, size: 32 })] }));
  const scPath = path.join(__dirname, '..', 'assets', 'scenes', `u${uNo}s${i}.jpg`);
  if (fs.existsSync(scPath)) a.push(imgJpg(fs.readFileSync(scPath), 430));
  a.push(mixed([['Objectif : ', { bold: true, color: C.wine }], [`à la fin de cette leçon, tu sauras ${s.goal}.`, { italics: true }]], { fill: C.pale }));
  a.push(banner('LA RÈGLE', C.green));
  a.push(mixed([[s.def, { bold: true }]]));
  a.push(mixed([['Autrement dit : ', { bold: true, color: C.blue }], [s.autrement, {}]]));
  a.push(p(s.concept));
  if (s.fig && figBufs[s.fig]) a.push(img(figBufs[s.fig]));
  a.push(banner('LES ÉTAPES, PAS À PAS', C.blue));
  s.method.forEach((m, k) => a.push(mixed([[`Étape ${k + 1} — `, { bold: true, color: C.blue }], [m, {}]], { after: 60 })));
  a.push(mixed([['Exemple guidé — ', { bold: true, color: C.blue }], [s.exemple, {}]]));
  a.push(banner('ATTENTION AU PIÈGE !', C.red));
  a.push(p(s.erreur, { fill: 'FDECEA' }));
  a.push(mixed([['Le savais-tu ? ', { bold: true, color: C.bleu2 }], [s.saistu, {}]], { fill: C.paleBlue }));
  a.push(title('EXERCICES', 2));
  s.exos.forEach((e, k) => a.push(p(`${k + 1}. ${e}`)));
  a.push(title('CORRIGÉS', 2));
  s.corr.forEach((c, k) => a.push(correction(`${k + 1}. `, c)));
  if (s.jeu) {
    a.push(banner('PETIT JEU', C.wine));
    a.push(p(s.jeu, { fill: 'FFF8E1' }));
  }
  if (cahierBuf) {
    a.push(page());
    a.push(new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 40 }, children: [tr('MON CAHIER', { bold: true, color: C.wine, size: 30 })] }));
    a.push(img(cahierBuf, 640));
  }
  return a;
}

function revision(u) {
  const total = u.sessions.length + 2, i = u.sessions.length + 1;
  return [page(), title(`SÉANCE ${i} / ${total} — RÉVISION DE L’UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
    title('Tableau de synthèse', 2),
    table([
      new TableRow({ children: [cell('Notion', { bold: true, fill: C.blue, color: C.white }), cell('À savoir', { bold: true, fill: C.blue, color: C.white }), cell('À savoir faire', { bold: true, fill: C.blue, color: C.white })] }),
      ...u.revision.table.map(r => new TableRow({ children: r.map(x => cell(x)) }))
    ], [2500, 3500, 3600]),
    title('Questions de révision', 2),
    ...u.revision.questions.map((q, k) => p(`${k + 1}. ${q}`, { after: 60 })),
    title('Réponses attendues', 2),
    ...u.revision.answers.map((an, k) => correction(`${k + 1}. `, an))];
}

function exam(u) {
  const total = u.sessions.length + 2, i = total;
  const pts = [4, 4, 4, 4, 4];
  return [page(), title(`SÉANCE ${i} / ${total} — SUJET D’EXAMEN FORMAT CEPE — UNITÉ ${u.roman}`, 1, `u${u.no}_l${i}`),
    p('Barème : 20 points. Présente clairement tous les calculs et toutes les constructions.'),
    ...u.exam.exos.map((e, k) => p(`Exercice ${k + 1} — ${pts[k]} points. ${e}`)),
    title('CORRIGÉ ET BARÈME', 2),
    ...u.exam.corr.map((c, k) => correction(`Exercice ${k + 1}. `, c))];
}

function frontMatter(u) {
  const ch = [];
  const coverPath = path.join(__dirname, '..', 'assets', 'cover_math_t5.png');
  if (fs.existsSync(coverPath)) {
    const buf = fs.readFileSync(coverPath);
    ch.push(new Paragraph({
      children: [new ImageRun({
        type: 'png', data: buf, transformation: { width: 794, height: 1123 },
        floating: {
          horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
          verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
          wrap: { type: TextWrappingType.NONE }, behindDocument: true
        }
      })]
    }));
    ch.push(page());
  }
  ch.push(title('MANUEL DE MATHÉMATIQUES — CLASSE DE T5', 1, 'cover'),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 250, after: 200 }, children: [tr('Collection J-Learn', { bold: true, size: 36, color: C.blue })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Programme officiel malgache — Édition 2026', { size: 26 })] }),
    page(),
    title('AVANT-PROPOS', 1, 'avant'),
    p('Ce manuel accompagne l’enseignant dans la mise en œuvre du programme officiel de Mathématiques de la classe de T5 (cinquième année du primaire). Il couvre les six composantes de la discipline en six unités : Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données, à raison de 6 heures par semaine réparties en 12 séances de 30 minutes. Conformément au programme, il privilégie une approche progressive qui part de la manipulation d’objets concrets (bâtonnets, jetons, bandes de fractions, grilles) pour aboutir aux écritures mathématiques, et place la résolution de problèmes au centre des apprentissages, en préparation directe de l’examen du CEPE.'),
    p('Chaque séance associe une fiche de préparation directement exploitable, une leçon structurée avec définition rigoureuse et reformulation simple, une figure exacte, et une série de six exercices gradués — de l’application directe au « Défi CEPE » — avec corrigé détaillé. Les situations mobilisent des repères familiers de Madagascar tout en développant la rigueur et la confiance en soi, valeurs portées par le programme.'),
    title('MODE D’EMPLOI', 1, 'mode'),
    p('La fiche suit trois grandes étapes : I. Révision ; II. Nouvelle leçon, comprenant mise en situation, présentation, observation, analyse, synthèse et application ; III. Évaluation. Aucune durée chiffrée n’est affichée : l’enseignant adapte le rythme à sa classe (volume officiel : 6 heures par semaine, soit 12 séances de 30 minutes).'),
    p('Code couleur : titre de leçon en rouge ; sous-titres en vert ; « Définition » en vert et « Autrement dit » en bleu ; « Erreur à éviter » en ocre ; corrigés en bordeaux ; encadré « Le savais-tu ? » sur fond bleu clair.'),
    title('SOMMAIRE INTERACTIF', 1, 'toc'),
    new Paragraph({ children: [new InternalHyperlink({ anchor: 'u1', children: [tr('Unité I — Nombre', { bold: true, color: C.blue })] })] }));
  u.sessions.forEach((s, i) => ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${i + 1}`, children: [tr(`Séance ${i + 1} — ${s.t}`, { color: C.blue })] })] })));
  const total = u.sessions.length + 2;
  ch.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total - 1}`, children: [tr(`Séance ${total - 1} — Révision de l’unité I`, { color: C.blue })] })] }),
    new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `u1_l${total}`, children: [tr(`Séance ${total} — Sujet d’examen`, { color: C.blue })] })] }));
  return ch;
}

async function buildUnit(u, figBufs) {
  const total = u.sessions.length + 2;
  const children = [];
  if (u.no === 1) children.push(...frontMatter(u));
  children.push(page(),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 2200, after: 200 }, children: [tr(`UNITÉ ${u.roman}`, { bold: true, color: C.blue, size: 76 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 160 }, shading: { type: ShadingType.CLEAR, fill: C.pale }, children: [new Bookmark({ id: `u${u.no}`, children: [tr(u.name.toUpperCase(), { bold: true, color: C.red, size: 56 })] })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 400 }, children: [tr('Sous-discipline du programme de Mathématiques T5', { italics: true, color: C.green, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [tr('Résultat d’apprentissage général', { bold: true, color: C.wine, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 300 }, children: rich(u.rag, { size: 24 }) }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 120 }, children: [tr('Valeurs à véhiculer', { bold: true, color: C.wine, size: 24 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 200 }, children: rich(`${u.valeurs}.`, { size: 24 }) }),
    page(),
    title(`UNITÉ ${u.roman} — ${u.name.toUpperCase()} : DANS CETTE UNITÉ`, 1),
    ...u.sessions.map((s, i) => bullet(`Séance ${i + 1} — ${s.t}`)),
    bullet(`Séance ${u.sessions.length + 1} — Révision de l’unité ${u.roman}`),
    bullet(`Séance ${u.sessions.length + 2} — Sujet d’examen format CEPE`),
    title('Tableau de bord', 2),
    table([
      new TableRow({ children: [cell('Séances', { bold: true, fill: C.blue, color: C.white }), cell('Apprentissages', { bold: true, fill: C.blue, color: C.white }), cell('Révision', { bold: true, fill: C.blue, color: C.white }), cell('Examen', { bold: true, fill: C.blue, color: C.white })] }),
      new TableRow({ children: [cell(`${total}`), cell(`${u.sessions.length}`), cell('1'), cell('1')] })
    ], [2400, 2400, 2400, 2400]));
  const sharp = require('sharp');
  const cahierBufs = [];
  for (let i = 0; i < u.sessions.length; i++) {
    u.sessions[i]._date = dateSeance((U_OFFSET[u.no] || 0) + i);
    cahierBufs[i] = await sharp(Buffer.from(cahierSvg(u.sessions[i])), { density: 96 }).png({ palette: true, colors: 128, compressionLevel: 9 }).toBuffer();
  }
  u.sessions.forEach((s, i) => children.push(...seance(s, i + 1, total, u.no, figBufs, cahierBufs[i])));
  children.push(...revision(u), ...exam(u));

  const doc = new Document({
    styles: { default: { document: { run: { font: 'Times New Roman', size: 24 }, paragraph: { spacing: { line: 300 } } } } },
    sections: [{
      properties: { page: { margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
      headers: { default: new Header({ children: [new Paragraph({ alignment: AlignmentType.RIGHT, children: [tr(`J-Learn — Mathématiques T5 — Unité ${u.roman}`, { size: 18, color: '666666' })] })] }) },
      footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('Page ', { size: 18 }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 18 })] })] }) },
      children
    }]
  });
  const out = path.join(__dirname, '..', `Manuel_Mathematiques_T5_UNITE${u.no}.docx`);
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(out, buf);
  console.log(`${out}: ${buf.length} octets`);
}

module.exports = { buildUnit, cahierSvg, dateSeance, U_OFFSET };
