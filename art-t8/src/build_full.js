// Manuel complet Arts T8 : 36 parties détaillées, fiches, pratique et annexes.
// Reprend à l'identique les conventions du manuel T9 (typo, grille, sommaire par signets, bloc vidéo compact)
// et le correctif de compatibilité Word du commit 097fd24 (cellules durcies, footer à paragraphe terminal).
const fs = require('fs'), path = require('path'), sharp = require('sharp');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
  HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType, VerticalAlign,
  ExternalHyperlink, InternalHyperlink, Bookmark, PageBreak, TableLayoutType, SectionType,
  Header, Footer, PageNumber, LineRuleType,
} = require('docx');
const { parts, domains, sessions, validate } = require('./curriculum');
const ped = require('./pedagogy');
const media = require('./media_reuse');
const { shortTitles } = require('./titles_short');
const lessons = require('./data_all');
const audioTexts = require('./audio_texts');
const { note: videoNote, fmt } = require('../../art-t9/src/manual_v2/video_notes');

const ROOT = path.join(__dirname, '../..');
const A8 = path.join(ROOT, 'art-t8/assets');
const A9 = path.join(ROOT, 'art-t9/assets');
const OUT = process.env.ART_T8_OUT || path.join(ROOT, 'art-t8/output/Art_T8_Manuel_Complet.docx');
const driveFile = path.join(__dirname, 'drive_audio_t8.json');
const driveAudio = fs.existsSync(driveFile) ? JSON.parse(fs.readFileSync(driveFile, 'utf8')) : null;
const FONT = 'Times New Roman';
const S = { body: 28, table: 28, small: 26, h3: 32, h2: 32, h1: 36, title: 44, cover: 52 };
const C = { black: '000000', blue: '15558B', green: '179B61', accent: 'D59A24', grey: '555555', light: 'EAF3EA', head: 'DDEEFF', warn: 'FFF4E5' };
const OFFICIAL_URL = 'https://web.facebook.com/profile.php?id=61575599505051';
const videoId = (v) => v.url.split('v=')[1];
const sourceLabel = (text) => String(text).replace(/^PE T8, /, 'Programme d’Arts, ');
const dims = new Map();
// Toutes les images sont référencées par chemin absolu : T8 neuf ou T9 réutilisé, sans copie.
async function loadDims(files) { for (const f of new Set(files)) { if (!f) continue; const m = await sharp(f).metadata(); dims.set(f, { w: m.width, h: m.height }); } }
function run(text, o = {}) { return new TextRun({ text: String(text), font: FONT, size: o.size ?? S.body, bold: o.bold, italics: o.italics, color: o.color ?? C.black, underline: o.underline }); }
function p(text, o = {}) { return new Paragraph({ alignment: o.align, spacing: { before: o.before ?? 0, after: o.after ?? 120, line: o.line ?? 280 }, indent: o.indent, children: Array.isArray(text) ? text : [run(text, o)] }); }
function pRuns(children, o = {}) { return new Paragraph({ alignment: o.align, spacing: { before: o.before ?? 0, after: o.after ?? 120, line: o.line ?? 280 }, children }); }
function mark(text, bookmark, o = {}) { return new Paragraph({ heading: o.heading, alignment: o.align, spacing: { before: o.before ?? 0, after: o.after ?? 80 }, children: [new Bookmark({ id: bookmark, children: [run(text, o)] })] }); }
function h1(text, bookmark) { const r = run(text.toLocaleUpperCase('fr-FR'), { bold: true, color: C.blue, size: S.h1 }); const children = bookmark ? [new Bookmark({ id: bookmark, children: [r] })] : [r]; return new Paragraph({ heading: HeadingLevel.HEADING_1, spacing: { before: 320, after: 220 }, children }); }
function h2(text, bookmark) { const r = run(text.toLocaleUpperCase('fr-FR'), { bold: true, color: C.green, size: S.h2 }); const children = bookmark ? [new Bookmark({ id: bookmark, children: [r] })] : [r]; return new Paragraph({ heading: HeadingLevel.HEADING_2, spacing: { before: 300, after: 180 }, children }); }
function h3(text) { return new Paragraph({ heading: HeadingLevel.HEADING_3, spacing: { before: 240, after: 140 }, children: [run(text.toLocaleUpperCase('fr-FR'), { bold: true, size: S.h3, color: C.blue })] }); }
function bullet(text, o = {}) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 60, line: 280 }, children: [run(text, { size: o.size ?? S.body, color: o.color })] }); }
function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }
function phrase(text) { return new Paragraph({ spacing: { before: 120, after: 180, line: 280 }, children: [run('À retenir : ', { bold: true, color: C.green }), run(text)] }); }
function noBorders() { const n = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' }; return { top: n, bottom: n, left: n, right: n, insideHorizontal: n, insideVertical: n }; }
function thinBorders() { const b = { style: BorderStyle.SINGLE, size: 4, color: '999999' }; return { top: b, bottom: b, left: b, right: b, insideHorizontal: b, insideVertical: b }; }
// Correctif Word 097fd24 : une cellule ne reçoit que des Paragraph/objets docx, jamais de texte brut.
function cell(children, o = {}) {
  const kids = (Array.isArray(children) ? children : [children]).map((c) => {
    if (c == null) return p('—', { size: S.table, after: 0 });
    if (typeof c === 'string' || typeof c === 'number') return p(String(c), { size: S.table, after: 0 });
    return c;
  });
  if (!kids.length) kids.push(p('—', { size: S.table, after: 0 }));
  if (!(kids[kids.length - 1] instanceof Paragraph)) kids.push(p('', { after: 0, line: 20 }));
  return new TableCell({ columnSpan: o.colSpan, rowSpan: o.rowSpan, verticalAlign: o.vAlign ?? VerticalAlign.TOP, width: o.width ? { size: o.width, type: WidthType.DXA } : undefined, shading: o.fill ? { type: ShadingType.CLEAR, fill: o.fill } : undefined, margins: { top: 60, bottom: 60, left: 80, right: 80 }, children: kids });
}
function table(widths, rows, borders = thinBorders()) { return new Table({ borders, width: { size: widths.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: widths, layout: TableLayoutType.FIXED, rows }); }
function img(file, width = 540, caption, alt) {
  const d = dims.get(file); if (!d) throw new Error('Image sans dims ' + file);
  const height = Math.round(width * d.h / d.w);
  const ext = path.extname(file).toLowerCase(); const type = ext === '.jpg' || ext === '.jpeg' ? 'jpg' : 'png';
  const desc = alt || caption || path.basename(file);
  const out = [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 90, after: 50 }, children: [new ImageRun({ type, data: fs.readFileSync(file), transformation: { width, height }, altText: { title: desc, description: desc, name: path.basename(file) } })] })];
  if (caption) out.push(p(caption, { align: AlignmentType.CENTER, italics: true, size: S.small, color: C.grey, after: 120 }));
  return out;
}
function inlineImg(file, width, alt) { const d = dims.get(file); if (!d) throw new Error('Image sans dims ' + file); const height = Math.round(width * d.h / d.w); const ext = path.extname(file).toLowerCase(); const type = ext === '.jpg' || ext === '.jpeg' ? 'jpg' : 'png'; return new ImageRun({ type, data: fs.readFileSync(file), transformation: { width, height }, altText: { title: alt, description: alt, name: path.basename(file) } }); }
function hr() { return new Paragraph({ spacing: { before: 120, after: 120 }, border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: '999999', space: 1 } }, children: [] }); }
function linkPara(url, label, o = {}) { return new Paragraph({ spacing: { after: o.after ?? 70, line: 280 }, children: [new ExternalHyperlink({ link: url, children: [run(label, { color: C.blue, underline: {}, size: o.size ?? S.body, bold: o.bold })] })] }); }
function internal(label, anchor) { return new Paragraph({ spacing: { after: 60, line: 280 }, children: [new InternalHyperlink({ anchor, children: [run(label, { color: C.blue, underline: {}, size: S.body })] })] }); }
function headCell(text, o = {}) { return cell([p(text, { bold: true, size: S.small, align: AlignmentType.CENTER, after: 0 })], { width: o.width, colSpan: o.colSpan, rowSpan: o.rowSpan, fill: C.head, vAlign: VerticalAlign.CENTER }); }
function ra(text) { return pRuns([run('R.A. : ', { bold: true, size: S.table, color: C.blue }), run(text, { size: S.table })], { after: 50 }); }
function errTable(rows) { const widths = [3300, 3300, 3600]; const header = new TableRow({ tableHeader: true, children: ['Erreur fréquente', 'Attendu', 'Aide simple pour l’enseignant'].map((t, j) => cell([p(t, { bold: true, size: S.table, after: 0 })], { width: widths[j], fill: C.head })) }); const body = rows.map((r) => new TableRow({ children: r.map((t, j) => cell([p(t, { size: S.table, after: 0 })], { width: widths[j] })) })); return table(widths, [header, ...body]); }
function evalGrid(p0) {
  const obs = ped.checks[p0.id]; const widths = [2300, 4300, 1200, 1200, 1200];
  const header = new TableRow({ tableHeader: true, children: [headCell('Critère', { width: widths[0] }), headCell('Ce que j’observe dans la production', { width: widths[1] }), headCell('Acquis', { width: widths[2] }), headCell('En cours', { width: widths[3] }), headCell('À revoir', { width: widths[4] })] });
  const rows = p0.practice.criteria.map((c, i) => new TableRow({ children: [cell([p(c, { bold: true, size: S.table, after: 0 })], { width: widths[0] }), cell([p(obs[i] || c, { size: S.table, after: 0 })], { width: widths[1] }), ...[2, 3, 4].map((j) => cell([p('☐', { align: AlignmentType.CENTER, size: S.table, after: 0 })], { width: widths[j] }))] }));
  return table(widths, [header, ...rows]);
}
const sessLabel = (p0) => 'S' + p0.session + (p0.part ? (p0.part === 'Première heure' ? 'a' : 'b') : '');

// ---------- Fiche de préparation A–E (gabarit T9) ----------
const W = [1100, 2475, 2475, 1400, 1150, 1600];
function metaTable(ps) {
  const left = []; const L = (label, val) => left.push(pRuns([run(label + ' ', { bold: true, size: S.table }), run(val, { size: S.table })], { after: 50 }));
  L('Discipline :', 'Arts'); L('Sous-discipline :', ps.map((x) => x.domain).join(' puis ')); L('Thème :', ps.map((x) => x.theme).join(' / ')); L('Titre :', ps.map((x) => x.title).join(' / ')); L('Objectif spécifique :', ps.map((x) => x.objective).join(' ')); L('Support et matériel :', ps.map((x) => x.materials).join(' ; '));
  const right = [pRuns([run('Date : ', { bold: true, size: S.table }), run('_______', { size: S.table })], { after: 50 }), pRuns([run('Classe : ', { bold: true, size: S.table }), run('T8', { size: S.table })], { after: 50 }), pRuns([run('Séance n° : ', { bold: true, size: S.table }), run(String(ps[0].session)), ], { after: 50 }), pRuns([run('Durée : ', { bold: true, size: S.table }), run(ps.reduce((s, x) => s + x.minutes, 0) + ' min', { size: S.table })], { after: 50 })];
  return table([7000, 3200], [new TableRow({ children: [cell(left, { width: 7000 }), cell(right, { width: 3200 })] })], noBorders());
}
function deroulementHeader() {
  return [
    new TableRow({ tableHeader: true, children: [headCell('Étapes et Durée', { width: W[0], rowSpan: 2 }), headCell('Déroulement de la leçon', { colSpan: 2 }), headCell('Technique et Stratégie', { width: W[3], rowSpan: 2 }), headCell('Support et Matériel', { width: W[4], rowSpan: 2 }), headCell('Observation', { width: W[5], rowSpan: 2 })] }),
    new TableRow({ tableHeader: true, children: [cell([p('Enseignant', { bold: true, size: S.small, align: AlignmentType.CENTER, after: 0 })], { width: W[1], fill: 'F5F5F5', vAlign: VerticalAlign.CENTER }), cell([p('Apprenants', { bold: true, size: S.small, align: AlignmentType.CENTER, after: 0 })], { width: W[2], fill: 'F5F5F5', vAlign: VerticalAlign.CENTER })] }),
  ];
}
function row6(stage, ens, app, tech, support) { return new TableRow({ children: [cell(String(stage).split('\n').map((l, i) => p(l, { bold: true, size: S.table, after: i === 0 ? 30 : 0 })), { width: W[0] }), cell(Array.isArray(ens) ? ens : [p(ens, { size: S.table, after: 0 })], { width: W[1] }), cell(Array.isArray(app) ? app : [p(app, { size: S.table, after: 0 })], { width: W[2] }), cell([p(tech, { size: S.table, after: 0 })], { width: W[3] }), cell([p(support, { size: S.table, after: 0 })], { width: W[4] }), cell([p('—', { size: S.table, after: 0 })], { width: W[5] })] }); }
function deroulementTable(d) {
  const I = d.minutes === 60 ? 5 : 10, III = d.minutes === 60 ? 10 : 15; const obs = ped.checks[d.id];
  const rows = [...deroulementHeader(), row6('I. Révision\n' + I + ' min', d.review.flatMap(([q, a]) => [p(q, { bold: true, size: S.table, after: 30 }), ra(a)]), 'Les élèves répondent à l’oral ; un élève reformule.', 'Question orale', 'Tableau noir')];
  const f = ped.flow(d);
  rows.push(row6('Mise en situation\n' + f[0].minutes + ' min', d.situation + ' ' + f[0].detail, [p('Les élèves écoutent et répondent à l’oral.', { size: S.table, after: 40 }), ra(d.situationAnswer)], 'Question orale', d.observe.support));
  rows.push(row6('Présentation de l’objectif\n' + f[1].minutes + ' min', 'Aujourd’hui : « ' + d.title + ' ». ' + d.objective + ' ' + f[1].detail, 'Les élèves nomment la tâche.', 'Annonce claire', 'Tableau noir'));
  rows.push(row6('Observation / écoute\n' + f[2].minutes + ' min', d.observe.phrase + ' ' + f[2].detail + ' Support : ' + d.observe.support, 'Les élèves observent ou écoutent.', 'Observation', d.observe.support));
  rows.push(row6('Analyse / essai guidé\n' + f[3].minutes + ' min', d.questions.map((q) => q[0]).join(' ') + ' ' + f[3].detail, d.questions.map((q) => ra(q[1])), 'Questions guidées', d.observe.support));
  rows.push(row6('Synthèse\n' + f[4].minutes + ' min', 'À retenir : ' + d.understand.join(' ') + ' ' + f[4].detail, 'Un élève reformule la règle.', 'Reformulation orale', 'Tableau noir'));
  rows.push(row6('Application / transfert\n' + f[5].minutes + ' min', d.practice.title + '. ' + d.practice.consigne + ' ' + f[5].detail, [p('Production individuelle, puis auto-vérification :', { size: S.table, after: 40 }), ...obs.map((c) => p('☐ ' + c, { size: S.table, after: 30 }))], 'Travail individuel', 'Feuille et matériel'));
  rows.push(row6('III. Évaluation\n' + III + ' min', d.eval + ' ' + (d.minutes === 60 ? 'Rotation courte ; observation par groupes.' : 'Rotation de 4–6 élèves ou binômes ; les autres poursuivent la tâche et s’auto-vérifient.'), [p('Présentation et auto-vérification.', { size: S.table, after: 40 }), ...obs.map((c) => p('Critère : ' + c, { size: S.table, after: 30 }))], 'Présentation orale', 'Grille d’évaluation'));
  return table(W, rows);
}
function fiche(ps, opts = {}) {
  const pivot = ps.length > 1; const s = ps[0].session;
  const out = [...(opts.noBreak ? [] : [pageBreak()]), h1('FICHE SÉANCE ' + s, 'bm_s' + s), p(ps.map((x) => shortTitles[x.id]).join(' / '), { bold: true, color: C.accent, size: S.h2, after: 120 }), metaTable(ps)];
  out.push(h2('Repères pédagogiques'));
  for (const p0 of ps) { out.push(p(p0.domain + (p0.part ? ' — ' + p0.part : '') + ' : ' + p0.objective, { bold: true, size: S.body })); for (const u of p0.understand) out.push(bullet(u)); }
  out.push(h2('Matériel et sécurité'));
  for (const p0 of ps) { out.push(bullet('☐ Kit : ' + ped.kit[p0.domain])); out.push(bullet('☐ Matériel spécifique : ' + p0.materials)); out.push(bullet('☐ Sécurité : ' + p0.safety, { color: C.accent })); out.push(bullet('☐ Ancrage local : ' + ped.local[p0.id])); }
  out.push(h3('Variantes selon la classe')); for (const v of ped.variants[s]) out.push(bullet(v));
  out.push(h2('Déroulement'));
  out.push(p('Pas de note chiffrée obligatoire. L’évaluation sert à observer, encourager et faire ajuster.', { italics: true, size: S.body }));
  for (const p0 of ps) { if (pivot) out.push(h3('Bloc ' + p0.part + ' — ' + p0.domain + ' (' + p0.minutes + ' min)')); out.push(deroulementTable(p0)); }
  out.push(h3('Différenciation'));
  const dw = [2200, 8000]; const drows = [new TableRow({ tableHeader: true, children: [headCell('Niveau / moment', { width: dw[0] }), headCell('Action concrète', { width: dw[1] })] })];
  for (const [k, label] of [['soutien', 'Soutien'], ['standard', 'Standard'], ['defi', 'Défi'], ['remediation', 'Remédiation']]) drows.push(new TableRow({ children: [cell([p(label, { bold: true, size: S.table, after: 0 })], { width: dw[0] }), cell([p(ped.differentiation[k], { size: S.table, after: 0 })], { width: dw[1] })] }));
  out.push(table(dw, drows));
  for (const p0 of ps) out.push(p('Exigence prioritaire si le temps manque (' + p0.id + ') : ' + ped.checks[p0.id][0] + '.', { size: S.small, color: C.grey }));
  out.push(h2('Erreurs et aides')); out.push(errTable(ps.flatMap((x) => x.errors).slice(0, 6)));
  out.push(h2('Évaluation', 'bm_eval_s' + s));
  out.push(p('Une case par critère. Pas de note chiffrée.', { size: S.body }));
  for (const p0 of ps) { out.push(evalGrid(p0)); out.push(p('Tâche courte de transfert : ' + ped.transfer[p0.id], { size: S.body })); }
  return out;
}
function videoSection(d) {
  if (!d.videos.length) return [];
  const out = [hr(), p('Vidéos d’appoint', { bold: true, size: S.body, after: 80 })];
  d.videos.forEach((v, i) => {
    const n = videoNote(videoId(v)) || { title: v.title, url: v.url };
    const cue = n.start != null && n.start > 0 ? (n.end != null ? ' — ' + fmt(n.start) + '–' + fmt(n.end) : ' — démarrer à ' + fmt(n.start)) : '';
    const label = n.title + cue;
    out.push(pRuns([run((i + 1) + '. ', { bold: true }), inlineImg(path.join(A9, 'manual/icons/youtube.png'), 20, 'Icône YouTube'), run(' '), new ExternalHyperlink({ link: n.url, children: [run(label, { bold: true, color: C.blue, underline: {} })] })], { after: 40 }));
    out.push(linkPara(n.url, n.url, { size: S.small, after: 160 }));
  });
  return out;
}
function lecon(d, opts = {}) {
  const m = media.resolveMedia(parts.find((x) => x.id === d.id)); const gm = ped.guidedMinutes(d);
  const out = [...(opts.noBreak ? [] : [pageBreak()]), h1('LEÇON', 'bm_lecon_' + d.id), p(shortTitles[d.id], { bold: true, color: C.blue, size: S.h2, after: 220 }), p('Séance ' + d.session + ' · ' + d.domain + ' · ' + d.minutes + ' min', { size: S.small, color: C.grey })];
  out.push(...img(m.scene, 560, null, d.sceneAlt));
  out.push(h2(d.observe.title)); out.push(p(d.observe.phrase)); for (const b of d.observe.bullets) out.push(bullet(b));
  out.push(...img(m.diagrams.observe, 540, d.observe.support, d.observe.title + ' — ' + d.observe.phrase));
  out.push(h2(d.prep.title)); out.push(p(d.prep.phrase)); out.push(p(d.prep.text));
  out.push(...img(m.diagrams.prepare, 540, 'Préparation à compléter ou à essayer avant la production.', d.prep.title + ' — ' + d.prep.phrase));
  out.push(h2('Production guidée'));
  d.steps.forEach((s, i) => { const st = 'step_' + 'abcd'[i]; out.push(h3('abcd'[i] + '. ' + s.title + ' (essai guidé ~' + gm[i] + ' min)')); out.push(p(s.text)); out.push(phrase(s.phrase)); out.push(...img(m.diagrams[st], 540, 'Étape ' + 'abcd'[i] + ' — ' + s.title, 'Étape ' + 'abcd'[i] + ' : ' + s.title + ' — ' + s.phrase)); });
  out.push(pRuns([run('Mots clés : ', { bold: true, color: C.blue }), run(d.keywords.join(' · '), { color: C.blue, bold: true })], { before: 100 }));
  out.push(p('Ancrage local : ' + ped.local[d.id], { size: S.small, color: C.grey }));
  return out;
}
function pratique(d) {
  const m = media.resolveMedia(parts.find((x) => x.id === d.id)); const obs = ped.checks[d.id];
  const consigne = d.practice.trace || d.practice.consigne;
  const out = [pageBreak(), h1('PRATIQUE', 'bm_pratique_' + d.id), p(shortTitles[d.id], { bold: true, color: C.blue, size: S.h2, after: 220 }), p(consigne, { size: S.body, after: 180 }), ...img(m.diagrams.practice, 540, 'Production : ' + d.practice.title, d.practice.title + ' — ' + consigne)];
  out.push(h2('Critères de réussite')); for (const c of obs) out.push(bullet('☐ ' + c, { color: C.green }));
  const audio = driveAudio?.files?.[d.id];
  if (audio) {
    out.push(pRuns([new ExternalHyperlink({ link: audio.url, children: [run('▶ Écouter la consigne audio', { size: 20, color: C.blue, underline: {} })] }), run(' · ', { size: 26, color: C.grey }), new InternalHyperlink({ anchor: 'bm_tr_' + d.id, children: [run('Texte', { size: 20, color: C.blue, underline: {} })] })], { after: 45, line: 230 }));
    const qrFile = path.join(A8, 'qr', d.id + '_audio.png');
    if (fs.existsSync(qrFile)) out.push(...img(qrFile, 80, null, 'QR code vers la consigne audio ' + d.id));
  }
  out.push(...videoSection(d));
  return out;
}

// ---------- Sections propres au manuel complet ----------
function cover() {
  return [
    p('ARTS T8', { bold: true, align: AlignmentType.CENTER, color: C.blue, size: S.cover, before: 600, after: 200 }),
    p('J-Learn', { bold: true, align: AlignmentType.CENTER, color: C.green, size: S.cover, after: 300 }),
    p('Manuel enseignant · 33 séances de 2 h · 66 h · 36 parties', { align: AlignmentType.CENTER, size: S.h2, after: 200 }),
    p('Dessin · Peinture · Sculpture · Musique · Danse · Art dramatique', { align: AlignmentType.CENTER, size: S.h2, after: 300 }),
    p('Madagascar — Programme officiel d’Arts T8', { align: AlignmentType.CENTER, size: S.body, after: 200 }),
    p('Chaque partie : fiche de préparation, leçon détaillée, pratique, critères observables et consigne audio.', { align: AlignmentType.CENTER, size: S.body, after: 200 }),
  ];
}
function rights() {
  return [pageBreak(), h1('AUTHENTICITÉ ET DROITS', 'bm_droits'),
    p('Publication J-Learn. Les ressources externes (vidéos, instruments, exemples culturels) restent la propriété de leurs auteurs et sont citées en sources.', { size: S.body }),
    p('ATTENTION REVENTES : vérifier l’authenticité d’un exemplaire avant achat. Un exemplaire authentique provient du canal officiel J-Learn ; les copies non autorisées peuvent être incomplètes ou modifiées.', { bold: true, color: C.accent, size: S.body }),
    linkPara(OFFICIAL_URL, 'Canal officiel J-Learn (vente / authenticité)', { bold: true }),
    ...img(path.join(A9, 'manual/qr/official_jlearn.png'), 130, 'QR code du canal officiel J-Learn.', 'QR code vers le canal officiel J-Learn'),
    p('© 2026 J-Learn — Tous droits réservés.', { bold: true, align: AlignmentType.CENTER, size: S.body, before: 120 })];
}
function cadrage() {
  const out = [pageBreak(), h1('CADRAGE DU MANUEL', 'bm_cadrage')];
  out.push(h2('1. Source retenue et divergence écartée'));
  out.push(p('Deux versions du programme donnent des volumes horaires différents. La version PDF, confirmée dans deux tableaux, sert de base à la répartition.', { size: S.body }));
  const w = [3400, 3400, 3400];
  const rows = [new TableRow({ tableHeader: true, children: [headCell('Élément', { width: w[0] }), headCell('Version PDF — retenue', { width: w[1] }), headCell('Version DOCX — écartée', { width: w[2] })] })];
  for (const r of [['Volume hebdomadaire', '2 h par semaine (p. 214 et tableau p. 4)', '1 h 30 par semaine'], ['Durée par sous-discipline', '11 heures (6 fois dans les tableaux Arts)', '13 heures'], ['Total Arts', '66 h', '72 h'], ['Séances de 2 h', '33 séances', 'non compatible']]) {
    rows.push(new TableRow({ children: r.map((t, j) => cell([p(t, { size: S.table, bold: j === 0, after: 0 })], { width: w[j], fill: j === 1 ? C.light : undefined })) }));
  }
  out.push(table(w, rows));
  out.push(h2('2. Architecture retenue'));
  for (const t of [
    '66 h = 33 séances de 2 h. Six sous-disciplines de 11 h chacune.',
    'Chaque sous-discipline occupe 5 séances pleines (10 h) plus une demi-séance (1 h) : 36 parties de leçon au total.',
    'Trois séances charnières uniquement : S6, S17 et S28. La première heure clôt une sous-discipline, la seconde heure ouvre la suivante.',
    'Ordre des sous-disciplines : dessin, peinture, sculpture, musique, danse, art dramatique. Il diffère de celui du T9.',
    'Séance 6 conservée : S6a clôt le dessin par l’analyse d’une œuvre, S6b ouvre la peinture par l’atelier couleur.',
  ]) out.push(bullet(t));
  out.push(h2('3. Conventions reprises du manuel T9'));
  for (const t of [
    'Times New Roman ; corps et tableaux 14 pt, sous-titres 16 pt, minimum 13 pt.',
    'Titres brefs en majuscules au format DOMAINE : OBJET.',
    'Sommaire interactif par signets, sans champ de table des matières natif.',
    'Grille Acquis / En cours / À revoir, sans case binaire de réussite et sans note chiffrée obligatoire.',
    'Fiche de préparation A–E, leçon illustrée, pratique de transfert, bloc « Vidéos d’appoint » compact.',
    'Une seule version enseignant : pas de version élève séparée, pas de portfolio.',
    'Crédits et authenticité selon la convention des manuels de géographie du dépôt.',
  ]) out.push(bullet(t));
  out.push(h2('4. Conventions de production'));
  for (const t of [
    'Les 36 parties sont détaillées : préparation de séance, leçon, pratique de transfert, critères observables, adaptations et consigne audio française.',
    'Les médias réutilisés et créés sont recensés dans l’annexe ; aucune scène IA n’est présentée comme documentaire et aucune vidéo n’est présentée comme intégralement visionnée.',
  ]) out.push(bullet(t));
  out.push(h2('5. Contrôles finaux'));
  for (const t of [
    '33 séances, 66 h et 36 parties ; charnières S6, S17 et S28 seulement.',
    'Les 36 consignes audio sont liées au dossier Drive et à l’archive ZIP en un clic.',
    'Le contrôle automatique du DOCX et des QR est documenté dans le rapport de build.',
  ]) out.push(bullet(t));
  return out;
}
function repartition() {
  const out = [pageBreak(), h1('RÉPARTITION OFFICIELLE', 'bm_repartition'), p('33 séances de 2 h = 66 h. Six sous-disciplines de 11 h. Trois séances charnières : S6, S17, S28. Cela donne 36 parties de leçon.', { size: S.body })];
  const widths = [2400, 2600, 1400, 1800, 2000];
  const rows = [new TableRow({ tableHeader: true, children: [headCell('Sous-discipline', { width: widths[0] }), headCell('Séances / parties', { width: widths[1] }), headCell('Durée', { width: widths[2] }), headCell('Charnière', { width: widths[3] }), headCell('Page de référence', { width: widths[4] })] })];
  const map = { Dessin: ['S1–S5 + S6a', 'S6a', 'p. 216–218'], Peinture: ['S6b + S7–S11', 'S6b', 'p. 218–220'], Sculpture: ['S12–S16 + S17a', 'S17a', 'p. 221–222'], Musique: ['S17b + S18–S22', 'S17b', 'p. 223–225'], Danse: ['S23–S27 + S28a', 'S28a', 'p. 225–226'], 'Art dramatique': ['S28b + S29–S33', 'S28b', 'p. 226–228'] };
  for (const d of domains) { const m = map[d]; rows.push(new TableRow({ children: [cell([p(d, { bold: true, size: S.table, after: 0 })], { width: widths[0] }), cell([p(m[0], { size: S.table, after: 0 })], { width: widths[1] }), cell([p('11 h', { size: S.table, after: 0 })], { width: widths[2] }), cell([p(m[1], { size: S.table, after: 0 })], { width: widths[3] }), cell([p(m[2], { size: S.table, after: 0 })], { width: widths[4] })] })); }
  out.push(table(widths, rows));
  out.push(h2('Détail des trois séances charnières'));
  const pw = [1400, 4400, 4400];
  const prow = [new TableRow({ tableHeader: true, children: [headCell('Séance', { width: pw[0] }), headCell('Première heure — clôture', { width: pw[1] }), headCell('Seconde heure — ouverture', { width: pw[2] })] })];
  for (const s of [6, 17, 28]) { const ps = sessions.find((x) => x.session === s).parts; prow.push(new TableRow({ children: [cell([p('S' + s, { bold: true, size: S.table, after: 0 })], { width: pw[0] }), ...ps.map((x, j) => cell([p(shortTitles[x.id], { bold: true, size: S.table, after: 30 }), p(x.objective, { size: S.table, after: 0 })], { width: pw[j + 1] }))] })); }
  out.push(table(pw, prow));
  out.push(p('Chaque bloc d’une heure suit un profil allégé : 5 min de révision, 45 min de nouvelle leçon, 10 min d’évaluation. La seconde heure est une micro-tâche de préparation, pas une production complète supplémentaire.', { size: S.body, before: 120 }));
  return out;
}
function sommaire() {
  const out = [pageBreak(), h1('SOMMAIRE INTERACTIF', 'bm_sommaire'), p('Leçons, fiches et ressources.', { size: S.body })];
  out.push(h2('Ouverture et annexes'));
  for (const [label, anchor] of [['Authenticité et droits', 'bm_droits'], ['Répartition officielle', 'bm_repartition'], ['Progression par compétences', 'bm_progression'], ['Curriculum des 36 parties', 'bm_curriculum'], ['Audio Drive et ZIP', 'bm_audio'], ['Transcriptions audio', 'bm_transcripts'], ['Réutilisation des médias', 'bm_medias'], ['Glossaire', 'bm_glossaire'], ['Sources et ressources', 'bm_sources'], ['Contrôle terrain', 'bm_terrain']]) out.push(internal(label, anchor));
  for (const d of domains) {
    const ps = parts.filter((x) => x.domain === d);
    out.push(h2(d + ' — 11 h'));
    out.push(p(ps.map(sessLabel).join(' · '), { size: S.body, color: C.grey }));
    for (const p0 of ps) out.push(internal(sessLabel(p0) + ' — ' + shortTitles[p0.id] + '  ▸ fiche, leçon, pratique, audio', 'bm_plan_' + p0.id));
  }
  return out;
}
function curriculumSection() {
  const out = [pageBreak(), h1('CURRICULUM DES 36 PARTIES', 'bm_curriculum'), p('Chaque partie indique le titre, le résultat visé, les contenus, l’objectif, la démarche, la page de référence et les médias.', { size: S.body })];
  const w = [1500, 8700];
  for (const d of domains) {
    const ps = parts.filter((x) => x.domain === d);
    out.push(h2(d + ' — 11 h — ' + ps.map(sessLabel).join(' · ')));
    for (const p0 of ps) {
      out.push(mark(sessLabel(p0) + ' — ' + shortTitles[p0.id], 'bm_plan_' + p0.id, { bold: true, color: C.blue, size: S.h3, heading: HeadingLevel.HEADING_3, before: 180, after: 80 }));
      const rows = [];
      const line = (label, val) => rows.push(new TableRow({ children: [cell([p(label, { bold: true, size: S.table, after: 0 })], { width: w[0], fill: C.head }), cell(Array.isArray(val) ? val : [p(val, { size: S.table, after: 0 })], { width: w[1] })] }));
      line('Durée', p0.minutes + ' min' + (p0.part ? ' — ' + p0.part : ' — séance pleine'));
      line('Titre long', p0.title);
      line('Résultat visé', p0.rag);
      line('Contenus PE', p0.contents.join(' · '));
      line('Objectif', p0.objective);
      line('Démarche', p0.demarche);
      line('Référence', sourceLabel(p0.pe));
      line('Médias', p0.media === 'new' ? 'Créé pour le T8 — ' + p0.mediaNote : 'Réutilisé du T9 (partie ' + p0.mediaFrom + ') — ' + p0.mediaNote);
      line('Dans le manuel', [p('Fiche, leçon détaillée, pratique de transfert et consigne audio.', { size: S.table, after: 0 })]);
      out.push(table(w, rows));
    }
  }
  return out;
}
function mediasAnnex() {
  const out = [pageBreak(), h1('RÉUTILISATION DES MÉDIAS', 'bm_medias'),
    p('Réutiliser une scène existante lorsque le contenu correspond ; créer une scène nouvelle pour les sujets qui ne sont pas couverts. Les fichiers sont référencés en place, sans duplication.', { size: S.body })];
  const st = media.validate(parts);
  out.push(p(st.reused + ' parties sur 36 réutilisent des visuels T9 ; ' + st.created + ' parties demandent une création T8.', { bold: true, size: S.body }));
  out.push(h2('Parties réutilisées du T9'));
  const w = [1300, 3200, 1300, 4400];
  const rows = [new TableRow({ tableHeader: true, children: [headCell('T8', { width: w[0] }), headCell('Titre T8', { width: w[1] }), headCell('Source T9', { width: w[2] }), headCell('Motif de réutilisation', { width: w[3] })] })];
  for (const p0 of parts.filter((x) => x.media === 'reused')) rows.push(new TableRow({ children: [cell([p(sessLabel(p0), { bold: true, size: S.table, after: 0 })], { width: w[0] }), cell([p(shortTitles[p0.id], { size: S.table, after: 0 })], { width: w[1] }), cell([p(p0.mediaFrom, { size: S.table, after: 0 })], { width: w[2] }), cell([p(media.reuse[p0.id].why, { size: S.table, after: 0 })], { width: w[3] })] }));
  out.push(table(w, rows));
  out.push(h2('Médias spécifiques au T8'));
  const w2 = [1300, 3200, 5700];
  const rows2 = [new TableRow({ tableHeader: true, children: [headCell('T8', { width: w2[0] }), headCell('Titre T8', { width: w2[1] }), headCell('Pourquoi le média est propre au T8', { width: w2[2] })] })];
  for (const p0 of parts.filter((x) => x.media === 'new')) rows2.push(new TableRow({ children: [cell([p(sessLabel(p0), { bold: true, size: S.table, after: 0 })], { width: w2[0] }), cell([p(shortTitles[p0.id], { size: S.table, after: 0 })], { width: w2[1] }), cell([p(media.toCreate[p0.id], { size: S.table, after: 0 })], { width: w2[2] })] }));
  out.push(table(w2, rows2));
  out.push(h2('Médias produits dans ce manuel complet'));
  for (const t of [
    'Six scènes réalistes générées par IA (s01, s05, s09, s19, s22, s26), chacune explicitement créditée comme illustration et non comme photographie documentaire.',
    'Schémas explicatifs déterministes séparés des scènes réalistes ; fichiers reproductibles et modifiables, adaptés aux contenus spécifiques T8.',
  ]) out.push(bullet(t));
  return out;
}
function progressionAnnex() {
  const out = [pageBreak(), h1('PROGRESSION PAR COMPÉTENCES', 'bm_progression'), p('Vue d’ensemble des apprentissages et des preuves observables. La progression : observer, essayer, transférer, apprécier, réinvestir.', { size: S.body })];
  const widths = [1500, 2200, 2500, 1500, 2500];
  const rows = [new TableRow({ tableHeader: true, children: [headCell('Sous-discipline', { width: widths[0] }), headCell('Référence', { width: widths[1] }), headCell('Résultats d’apprentissage', { width: widths[2] }), headCell('Séances', { width: widths[3] }), headCell('Preuves observables', { width: widths[4] })] })];
  for (const r of ped.progression) rows.push(new TableRow({ children: [cell([p(r.domain, { bold: true, size: S.table, after: 0 })], { width: widths[0] }), cell([p(sourceLabel(r.pe), { size: S.table, after: 0 })], { width: widths[1] }), cell([p(r.rag, { size: S.table, after: 0 })], { width: widths[2] }), cell([p(r.sessions, { size: S.table, after: 0 })], { width: widths[3] }), cell([p(r.evidence, { size: S.table, after: 0 })], { width: widths[4] })] }));
  out.push(table(widths, rows));
  return out;
}
function glossaireAnnex() {
  const out = [pageBreak(), h1('GLOSSAIRE', 'bm_glossaire'), p('Définitions courtes pour préparer l’explication et la reformulation.', { size: S.body })];
  const widths = [2600, 7600];
  const rows = [new TableRow({ tableHeader: true, children: [headCell('Terme', { width: widths[0] }), headCell('Définition / repère', { width: widths[1] })] })];
  for (const [t, d] of ped.glossary) rows.push(new TableRow({ children: [cell([p(t, { bold: true, size: S.table, after: 0 })], { width: widths[0] }), cell([p(d, { size: S.table, after: 0 })], { width: widths[1] })] }));
  out.push(table(widths, rows));
  return out;
}
function sourcesAnnex() {
  const out = [pageBreak(), h1('SOURCES ET RESSOURCES', 'bm_sources')];
  out.push(h2('Programmes et documents de référence'));
  out.push(bullet('Programme officiel d’Arts, version PDF : dessin p. 216–218 ; peinture p. 218–220 ; sculpture p. 221–222 ; musique p. 223–225 ; danse p. 225–226 ; art dramatique p. 226–228 ; démarches p. 228–229.'));
  out.push(bullet('Volume horaire : « VOLUME HORAIRE : 2 h par semaine » (p. imprimée 214) et tableau de répartition hebdomadaire (p. imprimée 4) ; « Durée : 11 heures » pour chacune des six sous-disciplines.'));
  out.push(bullet('FRP_T8_ARTS.pdf (39 pages) : sodina et instruments malagasy (p. 18) ; antsiva et Rakoto Frah (p. 19) ; monophonie (p. 21), polyphonie (p. 22) ; hip-hop et dancehall (p. 24–25). La conque est aussi nommée bankora, angaroa, antsiva-be, anjombe, maromogny, beabobo ou maromena ; la page distingue antsiva lahy et antsiva vavy.'));
  out.push(bullet('Manuel Arts T9 J-Learn : gabarit de mise en page, fiche A–E, grille d’évaluation, schémas et scènes réutilisés.'));
  out.push(h2('Ressources vidéo externes'));
  for (const v of [...new Map(lessons.flatMap((x) => x.videos || []).map((v) => [v.url, v])).values()]) { const n = videoNote(videoId(v)); if (!n) continue; out.push(pRuns([run(n.title + ' — ' + (n.channel || 'YouTube') + '. ', { bold: true, size: S.body }), new ExternalHyperlink({ link: n.url, children: [run('Lien', { color: C.blue, underline: {}, size: S.body })] })], { after: 40 })); out.push(p(n.rep + ' Repli : ' + n.offline, { size: S.small, color: C.grey, after: 100 })); }
  out.push(p('Liens et repères contrôlés le 2 novembre 2026 à partir des résultats disponibles en ligne. Ouvrir les vidéos avant la séance ; aucun visionnage intégral n’est revendiqué.', { size: S.small, color: C.grey }));
  out.push(h2('Crédits visuels'));
  out.push(p('Manuel complet : 6 scènes T8 générées par IA (s01, s05, s09, s19, s22, s26) et des schémas explicatifs déterministes produits par script pour les parties propres au programme. Les illustrations IA ne sont pas des photographies documentaires. Les scènes et schémas réutilisés sont issus du manuel T9 ; leurs crédits restent ceux du manuel source.', { size: S.body }));
  return out;
}
function terrainAnnex() {
  const out = [pageBreak(), h1('CONTRÔLE TERRAIN À RÉALISER', 'bm_terrain'), p('À vérifier sur le poste enseignant avant duplication ; l’environnement de génération ne dispose pas d’un rendu Word complet.', { italics: true, size: S.body })];
  for (const t of ['☐ Ouvrir ce .docx dans Word desktop et confirmer qu’il s’ouvre sans message de réparation.', '☐ Cliquer cinq entrées du sommaire et vérifier la navigation par signets.', '☐ Imprimer la fiche séance 1 et la leçon s01 : contrôler tableaux, images et césures.', '☐ Vérifier la lisibilité des sept schémas à l’impression A4.', '☐ Ouvrir les deux liens vidéo et vérifier le repère conseillé.', '☐ Contrôler la pagination et les veuves/orphelines dans Word.', '☐ Scanner le QR du canal officiel J-Learn.']) out.push(bullet(t));
  out.push(p('Le document a passé la validation XSD du schéma WordprocessingML, le contrôle structurel (aucun texte brut dans un conteneur element-only, aucun tableau dans un paragraphe, pieds de page à paragraphe terminal, identifiants d’image uniques) et le contrôle typographique. Ces contrôles ne remplacent pas une ouverture réelle dans Word.', { size: S.small, color: C.grey, before: 120 }));
  return out;
}
function audioDriveSection() {
  const out = [pageBreak(), h1('AUDIO DRIVE ET ZIP', 'bm_audio'), p('Les consignes audio françaises sont hébergées sur Google Drive. Un lien et un QR par partie figurent dans la pratique ; le dossier et le ZIP complet sont accessibles ci-dessous.', { size: S.body })];
  if (driveAudio?.zip_url) out.push(linkPara(driveAudio.zip_url, 'Télécharger les 36 audios — ZIP en un clic', { bold: true }));
  if (driveAudio?.folder_url) out.push(linkPara(driveAudio.folder_url, 'Ouvrir le dossier Drive Arts T8'));
  const qr = path.join(A8, 'qr', 'audio_zip.png');
  if (fs.existsSync(qr)) out.push(...img(qr, 130, 'QR code du ZIP audio.', 'QR code vers le ZIP audio Google Drive'));
  out.push(p('Les audios sont des consignes parlées, pas des modèles chantés ou instrumentaux. Pour travailler hors ligne ou sans smartphone, utiliser la transcription de l’annexe suivante.', { size: S.body }));
  return out;
}
function transcriptsAnnex() {
  const out = [pageBreak(), h1('TEXTES DES CONSIGNES AUDIO', 'bm_transcripts'), p('Texte français correspondant à chaque consigne audio, pour préparer ou conduire la séance sans téléphone.', { size: S.body })];
  for (const t of audioTexts) {
    out.push(mark(shortTitles[t.id] || t.id, 'bm_tr_' + t.id, { bold: true, color: C.blue, size: S.h3, heading: HeadingLevel.HEADING_3, before: 140, after: 50 }));
    out.push(p(t.text, { size: S.body }));
  }
  return out;
}
async function main() {
  const v = validate(); console.log('Curriculum T8 OK', v);
  console.log('Pédagogie complète OK', ped.validatePedagogy(lessons));
  console.log('Médias OK', media.validate(parts));
  if (lessons.length !== 36 || audioTexts.length !== 36) throw new Error('36 parties et 36 textes audio requis');
  const draft = process.env.ART_T8_AUDIO_DRAFT === '1';
  if (!draft && (!driveAudio || Object.keys(driveAudio.files || {}).length !== 36 || !driveAudio.zip_url)) throw new Error('Manifeste Drive T8 incomplet : 36 fichiers et ZIP requis');
  const files = [path.join(A9, 'manual/qr/official_jlearn.png'), path.join(A9, 'manual/icons/youtube.png')];
  for (const d of lessons) {
    const m = media.resolveMedia(parts.find((x) => x.id === d.id));
    files.push(m.scene, ...Object.values(m.diagrams));
    const qr = path.join(A8, 'qr', d.id + '_audio.png');
    if (fs.existsSync(qr)) files.push(qr);
    for (const f of [m.scene, ...Object.values(m.diagrams)]) if (!fs.existsSync(f)) throw new Error('Fichier média absent pour ' + d.id + ' : ' + f);
    if (!draft && !fs.existsSync(qr)) throw new Error('QR audio absent pour ' + d.id + ' : ' + qr);
  }
  const zipQr = path.join(A8, 'qr', 'audio_zip.png');
  if (fs.existsSync(zipQr)) files.push(zipQr);
  if (!draft && !fs.existsSync(zipQr)) throw new Error('QR ZIP audio absent : ' + zipQr);
  await loadDims(files);
  const header = new Header({ children: [p('ARTS T8 — J-Learn · Manuel complet', { align: AlignmentType.CENTER, size: S.small, color: C.grey, after: 0 })] });
  const globalFooter = new Footer({ children: [pRuns([run('© 2026 J-Learn — Tous droits réservés · Page ', { size: S.small, color: C.grey }), new TextRun({ children: [PageNumber.CURRENT], font: FONT, size: S.small, color: C.grey })], { align: AlignmentType.CENTER, after: 0 })] });
  const pageProps = { type: SectionType.NEXT_PAGE, page: { margin: { top: 850, bottom: 1800, left: 850, right: 850, header: 360, footer: 360 }, size: { width: 11906, height: 16838 } } };
  const sec = (children, footer) => ({ properties: pageProps, headers: { default: header }, footers: { default: footer || globalFooter }, children });
  const sections = [sec(cover()), sec(sommaire())];
  // Le contenu d’apprentissage précède les annexes : chaque partie dispose de sa leçon et pratique détaillées.
  for (const d of lessons) sections.push(sec([...lecon(d, { noBreak: true }), ...pratique(d)]));
  // Une fiche A–E par séance ; les séances 6, 17 et 28 réunissent uniquement leurs deux demi-parties.
  for (const group of sessions) {
    const ps = group.parts.map((x) => lessons.find((d) => d.id === x.id));
    sections.push(sec(fiche(ps, { noBreak: true })));
  }
  sections.push(sec([
    ...rights(), ...cadrage(), ...repartition(), ...curriculumSection(), ...mediasAnnex(),
    ...progressionAnnex(), ...glossaireAnnex(), ...audioDriveSection(), ...transcriptsAnnex(), ...sourcesAnnex(), ...terrainAnnex(),
  ]));
  const doc = new Document({ creator: 'J-Learn', title: 'Arts T8 J-Learn — Manuel enseignant complet', description: 'Arts T8 Madagascar : 33 séances, 66 heures, 36 parties détaillées, audios français, QR et ZIP.', styles: { default: { document: { run: { font: FONT, size: S.body } } } }, sections });
  const buf = await Packer.toBuffer(doc);
  fs.mkdirSync(path.dirname(OUT), { recursive: true }); fs.writeFileSync(OUT, buf);
  console.log('Écrit', OUT, buf.length, 'octets — sections:', sections.length, 'parties:', lessons.length);
}
main().catch((e) => { console.error(e); process.exit(1); });
