#!/usr/bin/env node
/* Générateur de la version T4 alignée sur le skill J-Learn v18.
 * Le contenu est lu uniquement depuis inventaire_lecons.json et content_bank.json.
 */
const fs = require('fs');
const path = require('path');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, PageBreak,
  Footer, PageNumber, Bookmark, InternalHyperlink, TableLayoutType, ImageRun, SectionType,
  FootnoteReferenceRun,
  Math: DocxMath, MathFraction, MathRun
} = require('docx');

const ROOT = path.join(__dirname, '..');
const PROTOTYPE = process.env.PROTOTYPE === '1';
const inventorySource = JSON.parse(fs.readFileSync(path.join(ROOT, 'inventaire_lecons.json'), 'utf8'));
const bank = JSON.parse(fs.readFileSync(path.join(__dirname, 'content_bank.json'), 'utf8'));
const styleBank = JSON.parse(fs.readFileSync(path.join(__dirname, 'pe_ps_style_bank.json'), 'utf8'));
const footnoteIds = Object.fromEntries(Object.entries(styleBank.lessons).filter(([, s]) => s.ps_note).map(([id], i) => [id, i + 1]));
const PROTOTYPE_IDS = new Set(['U1-L01', 'U4-L03', 'U5-L03']);
const inventory = PROTOTYPE
  ? { unites: inventorySource.unites.map(u => ({ ...u, lecons: u.lecons.filter(l => PROTOTYPE_IDS.has(l.id)) })).filter(u => u.lecons.length) }
  : inventorySource;
const OUT = path.join(ROOT, 'livrables', PROTOTYPE ? 'Manuel_Mathematiques_T4_JLearn_SkillV2_PROTOTYPE.docx' : 'Manuel_Mathematiques_T4_JLearn_SkillV1.docx');
const FIG_DIR = path.join(ROOT, 'assets', 'figures');
const { generate: generateFigures } = require('./figures_t4');

const C = {
  red: 'C00000', green: '2E7D32', blue: '1F4E79', wine: 'C2185B', ocre: 'B25000', salmon: 'D96C5F',
  black: '000000', white: 'FFFFFF', pale: 'EAF2F8', paleGreen: 'E8F5E9',
  paleBlue: 'E3F2FD', yellow: 'FFF8E1', gray: 'E7E6E6', line: '808080'
};
const noB = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
const noBorders = { top: noB, bottom: noB, left: noB, right: noB, insideHorizontal: noB, insideVertical: noB };
const gridB = { style: BorderStyle.SINGLE, size: 4, color: C.line };
const gridBorders = { top: gridB, bottom: gridB, left: gridB, right: gridB, insideHorizontal: gridB, insideVertical: gridB };

const tr = (text, opt = {}) => new TextRun({
  text: String(text), font: 'Times New Roman', size: opt.size || 22,
  bold: !!opt.bold, italics: !!opt.italics, color: opt.color || C.black,
  underline: opt.underline ? { type: 'single' } : undefined
});

// Transforme les fractions simples en équations Word natives.
function rich(text, opt = {}) {
  const out = []; let last = 0; const re = /(\d+)\/(\d+)/g; let m;
  while ((m = re.exec(String(text)))) {
    if (m.index > last) out.push(tr(String(text).slice(last, m.index), opt));
    out.push(new DocxMath({ children: [new MathFraction({ numerator: [new MathRun(m[1])], denominator: [new MathRun(m[2])] })] }));
    last = re.lastIndex;
  }
  if (last < String(text).length) out.push(tr(String(text).slice(last), opt));
  return out.length ? out : [tr(text, opt)];
}

function p(text, opt = {}) {
  return new Paragraph({
    alignment: opt.align || AlignmentType.JUSTIFIED,
    spacing: { before: opt.before || 0, after: opt.after == null ? 100 : opt.after, line: 300 },
    indent: opt.indent ? { left: opt.indent } : undefined,
    shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined,
    children: Array.isArray(text) ? text : rich(text, opt)
  });
}
function bullet(text, opt = {}) { return new Paragraph({ bullet: { level: 0 }, spacing: { after: 65 }, children: rich(text, opt) }); }
function numbered(text, opt = {}) { return new Paragraph({ numbering: { reference: 'lesson-number', level: 0 }, spacing: { after: 65 }, children: rich(text, opt) }); }
function heading(text, level = 1, bookmark = null) {
  const color = level === 1 ? C.red : C.green;
  const run = tr(text, { bold: true, color, size: level === 1 ? 32 : 27 });
  const children = bookmark ? [new Bookmark({ id: bookmark, children: [run] })] : [run];
  return new Paragraph({ alignment: level === 1 ? AlignmentType.CENTER : AlignmentType.LEFT, spacing: { before: 180, after: 110 }, children });
}
function page() { return new Paragraph({ children: [new PageBreak()] }); }
function cell(text, opt = {}) {
  const contents = Array.isArray(text) ? text : [text];
  return new TableCell({
    width: opt.width ? { size: opt.width, type: WidthType.PERCENTAGE } : undefined,
    columnSpan: opt.span, rowSpan: opt.rowSpan,
    shading: opt.fill ? { type: ShadingType.CLEAR, fill: opt.fill } : undefined,
    margins: { top: 80, bottom: 80, left: 90, right: 90 },
    children: contents.map(x => new Paragraph({ alignment: opt.align || AlignmentType.LEFT, spacing: { after: 35, line: 270 }, children: rich(x, { bold: opt.bold, color: opt.color || C.black, size: opt.size || 18 }) }))
  });
}
function table(rows, widths, opt = {}) {
  return new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED, borders: opt.noBorders ? noBorders : gridBorders, columnWidths: widths, rows });
}
function labelTable(leftRows, rightRows) {
  const n = Math.max(leftRows.length, rightRows.length);
  const rows = [];
  for (let i = 0; i < n; i++) {
    const l = leftRows[i] || ['', '']; const r = rightRows[i] || ['', ''];
    rows.push(new TableRow({ children: [cell(`${l[0]} ${l[1]}`, { size: 17 }), cell(`${r[0]} ${r[1]}`, { size: 17 })] }));
  }
  return table(rows, [5000, 4600], { noBorders: true });
}
function meta(lesson, unit, globalNo, total) {
  return labelTable(
    [['Discipline :', 'Mathématiques'], ['Sous-discipline :', unit.nom], ['Thème :', nominalTitle(lesson)], ['Objectif spécifique :', lesson.objectif], ['Documentation :', `PE T4 ${lesson.sources.pe} ; FRP T4 ${lesson.sources.frp}`], ['Support et matériel :', lesson.supports.join(', ')]],
    [['Date :', '________________'], ['Classe :', 'T4'], ['Séance n° :', `${globalNo} / ${total}`], ['Durée :', 'non précisée dans le PE'], ['Valeurs :', unit.valeurs.join(', ')], ['Référence :', lesson.id]]
  );
}
function row(step, teacher, learners, technique, support, observation, opt = {}) {
  return new TableRow({ children: [
    cell(step, { bold: !!opt.bold, fill: opt.fill || undefined, size: 17 }),
    cell(teacher, { size: 16 }), cell(learners, { size: 16 }), cell(technique, { size: 16 }), cell(support, { size: 16 }), cell(observation, { size: 16 })
  ] });
}
function sectionRow(text) {
  return new TableRow({ children: [cell(text, { span: 6, bold: true, fill: C.paleBlue, color: C.blue, size: 18 })] });
}
function blockItems(data, evaluation = false) {
  const source = evaluation && Array.isArray(data.evaluation) ? data.evaluation : data.exercises;
  const extras = evaluation ? [] : (data.extra_application || []);
  const items = source.concat(extras);
  while (items.length < 4) items.push(`Explique avec une phrase ou une représentation la règle utilisée dans : ${data.example}`);
  return items.slice(0, 4);
}
function blockAnswers(data, evaluation = false) {
  const source = evaluation && Array.isArray(data.evaluation_corrections) ? data.evaluation_corrections : data.corrections;
  const extras = evaluation ? [] : (data.extra_application_corrections || []);
  const items = source.concat(extras);
  while (items.length < 4) items.push(`La justification doit reprendre la règle : ${data.retain[0]}`);
  return items.slice(0, 4);
}
function exerciseBlock(data, evaluation = false) { return blockItems(data, evaluation); }
function answersBlock(data, evaluation = false) { return blockAnswers(data, evaluation); }
function exerciseText(items) { return items.map((x, i) => `${i + 1}. ${x}`).join('\n'); }
function answerText(items) { return items.map((x, i) => `${i + 1}. ${x}`).join('\n'); }
function itemParagraphs(items) { return items.map((x, i) => p(rich(`${i + 1}. ${x}`), { align: AlignmentType.LEFT, after: 65 })); }
function correctionParagraphs(items) { return items.map((x, i) => p([tr(`${i + 1}. Réponse : `, { bold: true, color: C.salmon }), ...rich(x)], { align: AlignmentType.LEFT, after: 65 })); }
const NOMINAL_TITLES = {
  'U1-L01': 'Représentation, lecture et écriture des nombres naturels jusqu’à 100 000',
  'U1-L02': 'Comparaison et rangement des nombres jusqu’à 100 000',
  'U1-L03': 'Composition et décomposition des nombres de 10 000 à 100 000',
  'U1-L04': 'Représentation d’une fraction simple',
  'U1-L05': 'Reconnaissance et production de fractions équivalentes',
  'U1-L06': 'Simplification, comparaison et rangement de fractions simples',
  'U1-L07': 'Lecture, écriture et décomposition des nombres décimaux',
  'U1-L08': 'Lien entre fractions décimales et nombres décimaux',
  'U1-L09': 'Chiffres romains : lecture et écriture de I à M',
  'U1-L10': 'Consolidation et évaluation de l’unité Nombre',
  'U2-L01': 'Sens de la multiplication',
  'U2-L02': 'Multiplication d’un nombre naturel par deux ou trois chiffres',
  'U2-L03': 'Sens de la division',
  'U2-L04': 'Division d’un nombre naturel par deux ou trois chiffres',
  'U2-L05': 'Divisibilité à partir de la division',
  'U2-L06': 'Addition et soustraction de fractions de même dénominateur',
  'U2-L07': 'Addition et soustraction de nombres décimaux',
  'U2-L08': 'Multiplication et division mentales par 10, 100 et 1 000',
  'U2-L09': 'Addition et soustraction mentales jusqu’à 1 000',
  'U2-L10': 'Consolidation et résolution de problèmes de l’unité Opération',
  'U3-L01': 'Suite non numérique à motif répété',
  'U3-L02': 'Suite non numérique à motif croissant',
  'U3-L03': 'Suite numérique : régularité, terme et rang',
  'U3-L04': 'Table de valeurs',
  'U3-L05': 'Création d’une suite numérique et justification de sa règle',
  'U3-L06': 'Sens de l’égalité',
  'U3-L07': 'Propriétés de l’égalité : commutativité, compensation, double et éléments neutres',
  'U3-L08': 'Valeur manquante dans une égalité',
  'U3-L09': 'Consolidation et évaluation de l’unité Algèbre',
  'U4-L01': 'Angles aigu, droit, obtus et plat',
  'U4-L02': 'Mesure et comparaison des angles',
  'U4-L03': 'Identification et classement des triangles',
  'U4-L04': 'Construction des triangles',
  'U4-L05': 'Identification et classement des quadrilatères',
  'U4-L06': 'Construction des quadrilatères',
  'U4-L07': 'Cercle : description et construction',
  'U4-L08': 'Propriétés des solides',
  'U4-L09': 'Patrons et objets en carton',
  'U4-L10': 'Translation simple',
  'U4-L11': 'Réflexion simple',
  'U4-L12': 'Consolidation et évaluation de l’unité Géométrie',
  'U5-L01': 'Distinction entre périmètre et surface',
  'U5-L02': 'Mesure d’une surface avec des unités carrées',
  'U5-L03': 'Aire du rectangle et du carré',
  'U5-L04': 'Aire du parallélogramme et du trapèze',
  'U5-L05': 'Aire des triangles et du losange',
  'U5-L06': 'Conversion des unités de longueur, de surface et des unités agraires',
  'U5-L07': 'Lecture de l’heure et conversion des unités de temps',
  'U5-L08': 'Problèmes de mesure et consolidation de l’unité Mesure',
  'U6-L01': 'Fiche d’enquête ou de sondage',
  'U6-L02': 'Collecte et enregistrement des réponses',
  'U6-L03': 'Tableau des effectifs',
  'U6-L04': 'Pictogramme et diagramme à bandes',
  'U6-L05': 'Comparaison des représentations et conclusion',
  'U6-L06': 'Expérience aléatoire simple',
  'U6-L07': 'Classement des événements selon leur probabilité',
  'U6-L08': 'Consolidation et évaluation de l’unité Traitement de données'
};
function nominalTitle(lesson) { return NOMINAL_TITLES[lesson.id] || lesson.titre.replace(/^\s*(Représenter|Lire|Écrire|Comparer|Ranger|Calculer|Construire|Identifier|Reconnaître|Mesurer|Convertir|Résoudre|Observer|Décrire|Créer|Trouver|Utiliser|Donner|Multiplier|Diviser|Additionner|Soustraire|Réaliser)\b/i, ''); }
function generatedApplication2(data, style) {
  return [
    `Représente ou schématise : ${data.example}`,
    `Explique la règle : ${data.retain[0]}`,
    `Justifie la propriété : ${data.retain[1] || data.retain[0]}`,
    `Indique la précaution à respecter : ${style.attention}`
  ];
}
function generatedApplication2Corrections(data, style) {
  return [
    `Une représentation correcte doit traduire : ${data.example}`,
    data.retain[0],
    data.retain[1] || data.retain[0],
    style.attention
  ];
}
function generatedEvaluation2(lesson, data, style) {
  return [
    `Résous une situation de la vie courante liée à « ${nominalTitle(lesson)} » en utilisant la règle étudiée.`,
    `Rédige les étapes de résolution à partir de l’exemple : ${data.example}`,
    `Propose un exemple qui respecte la propriété suivante : ${data.retain[0]}`,
    `Vérifie une réponse en appliquant cette consigne : ${style.attention}`
  ];
}
function generatedEvaluation2Corrections(data, style) {
  return [
    `La situation est correcte si elle utilise la règle : ${data.retain[0]}`,
    `Les étapes doivent reprendre l’exemple et aboutir à une réponse vérifiable : ${data.example}`,
    `L’exemple proposé doit respecter : ${data.retain[0]}`,
    style.attention
  ];
}
function exerciseSets(lesson, data, style) {
  const proto = Array.isArray(data.prototype_exercises) ? data.prototype_exercises : [];
  const protoAnswers = Array.isArray(data.prototype_corrections) ? data.prototype_corrections : [];
  const app1 = proto.length >= 4 ? proto.slice(0, 4) : blockItems(data, false);
  const app1Answers = protoAnswers.length >= 4 ? protoAnswers.slice(0, 4) : blockAnswers(data, false);
  const app2 = proto.length >= 8 ? proto.slice(4, 8) : generatedApplication2(data, style);
  const app2Answers = protoAnswers.length >= 8 ? protoAnswers.slice(4, 8) : generatedApplication2Corrections(data, style);
  const eval1 = blockItems(data, true);
  const eval1Answers = blockAnswers(data, true);
  const eval2 = proto.length >= 12 ? proto.slice(8, 12) : generatedEvaluation2(lesson, data, style);
  const eval2Answers = protoAnswers.length >= 12 ? protoAnswers.slice(8, 12) : generatedEvaluation2Corrections(data, style);
  return { app1, app1Answers, app2, app2Answers, eval1, eval1Answers, eval2, eval2Answers };
}

function fiche(lesson, data, unit, globalNo, total) {
  const visual = data.visual.map(r => r.join(' | ')).join('; ');
  const aItems = exerciseBlock(data, false); const aAnswers = answersBlock(data, false);
  const eItems = exerciseBlock(data, true); const eAnswers = answersBlock(data, true);
  const rows = [
    new TableRow({ children: [cell('Étapes et durée', { span: 1, bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Déroulement de la leçon', { span: 2, bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Technique et stratégie', { bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Support et matériel', { bold: true, fill: C.blue, color: C.white, size: 17 }), cell('Observation', { bold: true, fill: C.blue, color: C.white, size: 17 })] }),
    new TableRow({ children: [cell('I. Révision', { bold: true, fill: C.pale, size: 17 }), cell('Enseignant', { bold: true, fill: C.pale, size: 17 }), cell('Apprenants', { bold: true, fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 }), cell('—', { fill: C.pale, size: 17 })] }),
    row('I. Révision', `Rappelle oralement une notion de l’unité ${unit.nom}. Question : que signifie « ${data.retain[0]} » ? R.A. : ${data.retain[0]}`, 'Écoutent puis répondent oralement avec le vocabulaire déjà étudié.', 'Question-réponse, travail collectif', '—', 'La réponse montre le rappel de la notion précédente.'),
    sectionRow('II. NOUVELLE LEÇON — durée globale : non précisée dans le PE'),
    row('1. Mise en situation', `Situation : ${lesson.activite} Question de départ : que cherchons-nous à déterminer ? R.A. : ${lesson.objectif}`, 'Écoutent et répondent à l’oral.', 'Brainstorming, question-réponse, travail collectif', lesson.supports.join(', '), 'La réponse est reliée à l’objectif.'),
    row('2. Présentation', `Annonce : « Aujourd’hui, nous allons apprendre à ${lesson.objectif.toLowerCase()} »`, 'Écoutent le titre et l’objectif.', 'Présentation dialoguée, question-réponse', 'Tableau noir', 'Le titre est compris.'),
    row('3. Observation', `Observez l’exemple : ${data.example} Observez aussi le support : ${visual}.`, 'Observent silencieusement le support.', 'Observation guidée, travail de groupe', lesson.supports.join(', '), 'Aucune réponse n’est demandée à cette étape.'),
    row('4. Analyse', `Question 1 : Que montre l’exemple ? R.A. : ${data.example}\nQuestion 2 : Quelle règle faut-il retenir ? R.A. : ${data.retain[0]}\nQuestion 3 : Comment vérifier ? R.A. : ${data.retain[1] || 'représenter ou calculer avant de conclure.'}`, 'Répondent aux questions et justifient leurs procédures.', 'Question-réponse, manipulation, brainstorming, mise en commun', lesson.supports.join(', '), 'Les réponses sont confrontées et corrigées.'),
    row('5. Synthèse', `Donc, ${data.retain.join(' ')} Exemple : ${data.example}`, 'Écoutent la synthèse et la reformulent oralement.', 'Travail collectif, reformulation', 'Tableau noir, cahier', 'La trace écrite est exacte.'),
    row('6. Application', `Travail guidé.\n${exerciseText(aItems)}`, `Corrigé guidé.\n${answerText(aAnswers)}`, 'Travail individuel, correction collective', 'Cahier, ardoise, supports de la leçon', 'Repérer les erreurs de méthode.'),
    row('III. Évaluation', `Travail individuel.\n${exerciseText(eItems)}`, `Corrigé attendu.\n${answerText(eAnswers)}`, 'Travail individuel, auto-correction', 'Fiche d’évaluation, règle ou matériel indiqué', 'L’apprenant justifie sa réponse.'),
  ];
  return [
    page(),
    heading(`SÉANCE ${globalNo} / ${total} — ${nominalTitle(lesson).toUpperCase()}`, 1, `seance${globalNo}`),
    heading('FICHE DE PRÉPARATION', 2), meta(lesson, unit, globalNo, total),
    table(rows, [1500, 2700, 1700, 1500, 1400, 800]),
    p('Les étapes de la fiche sont rédigées pour être utilisées directement en classe. Les exercices de cette table ne portent pas de barème ; le barème apparaît uniquement dans la section EXERCICES.', { size: 16, italics: true, color: '666666' })
  ];
}
function figureFor(lesson) {
  const id = lesson.id;
  if (id.startsWith('U1-L01')) return 'graphic_numération_t4';
  if (id.startsWith('U1-L02') || id.startsWith('U1-L03')) return 'nombre_places';
  if (id.startsWith('U1-L04') || id.startsWith('U1-L05') || id.startsWith('U1-L06') || id.startsWith('U2-L06')) return 'fraction_parts';
  if (id.startsWith('U1-L07') || id.startsWith('U1-L08') || id.startsWith('U2-L07')) return 'decimal_table';
  if (id.startsWith('U2-L01') || id.startsWith('U2-L02')) return 'multiplication';
  if (id.startsWith('U2-L03') || id.startsWith('U2-L04') || id.startsWith('U2-L05')) return 'division';
  if (id.startsWith('U2-L08') || id.startsWith('U2-L09')) return 'conversions';
  if (id.startsWith('U3-L01') || id.startsWith('U3-L02') || id.startsWith('U3-L03') || id.startsWith('U3-L04') || id.startsWith('U3-L05')) return 'sequence';
  if (id.startsWith('U3-L06') || id.startsWith('U3-L07') || id.startsWith('U3-L08') || id.startsWith('U3-L09')) return 'equality';
  if (id.startsWith('U4-L01') || id.startsWith('U4-L02')) return 'angles';
  if (id.startsWith('U4-L03') || id.startsWith('U4-L04')) return 'triangles';
  if (id.startsWith('U4-L05') || id.startsWith('U4-L06')) return 'quadrilaterals';
  if (id.startsWith('U4-L07')) return 'circle';
  if (id.startsWith('U4-L08') || id.startsWith('U4-L09')) return 'solids';
  if (id.startsWith('U4-L10') || id.startsWith('U4-L11')) return 'transformations';
  if (id.startsWith('U4-L12')) return 'triangles';
  if (id.startsWith('U5-L01') || id.startsWith('U5-L02') || id.startsWith('U5-L03') || id.startsWith('U5-L04') || id.startsWith('U5-L05') || id.startsWith('U5-L08')) return 'area';
  if (id.startsWith('U5-L06') || id.startsWith('U5-L07')) return 'conversions';
  if (id.startsWith('U6-L01') || id.startsWith('U6-L02') || id.startsWith('U6-L03') || id.startsWith('U6-L04') || id.startsWith('U6-L05')) return 'data';
  if (id.startsWith('U6-L06') || id.startsWith('U6-L07') || id.startsWith('U6-L08')) return 'probability';
  return null;
}
function imageParagraph(file, type, width) {
  if (!fs.existsSync(file)) return null;
  const buf = fs.readFileSync(file);
  let w, h;
  if (type === 'png') { w = buf.readUInt32BE(16); h = buf.readUInt32BE(20); }
  else { w = 1365; h = 768; }
  const height = Math.max(120, Math.round(width * h / w));
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 100, after: 120 }, children: [new ImageRun({ type, data: buf, transformation: { width, height } })] });
}
function figureParagraph(name) {
  return imageParagraph(path.join(FIG_DIR, `${name}.png`), 'png', 620) || p('Support visuel à produire.', { italics: true, color: '666666' });
}
function scenesFor(lesson, unit = null) {
  const scenes = {
    'U1-L01': ['scene_u1_l01_landscape_a.png', 'scene_u1_l01_landscape_b.png'],
    'U4-L03': ['scene_u4_l03_landscape_a.png', 'scene_u4_l03_landscape_b.png'],
    'U5-L03': ['scene_u5_l03_landscape_a.png', 'scene_u5_l03_landscape_b.png']
  };
  const unitScenes = {
    'Nombre': 'scene_unit_nombre.png',
    'Opération': 'scene_unit_operation.png',
    'Algèbre': 'scene_unit_algebra.png',
    'Géométrie': 'scene_unit_geometrie.png',
    'Mesure': 'scene_unit_mesure.png',
    'Traitement de données': 'scene_unit_donnees.png'
  };
  const files = scenes[lesson.id] || (unit && unitScenes[unit.nom] ? [unitScenes[unit.nom]] : []);
  return files.map(file => path.join(ROOT, 'assets', 'scenes', file)).filter(fs.existsSync);
}
function methodFor(lesson) {
  const methods = {
    'U1-L01': {
      title: 'Méthode : lire et écrire un nombre par classes',
      steps: ['Sépare le nombre en classe des milliers et classe des unités.', 'Lis chaque classe de gauche à droite.', 'Repère la valeur de chaque chiffre dans le tableau de numération.'],
      attention: 'Un zéro garde une place dans le nombre : on ne supprime pas la position qu’il occupe.'
    },
    'U4-L03': {
      title: 'Méthode : classer un triangle',
      steps: ['Mesure ou compare les trois côtés.', 'Cherche si trois côtés, deux côtés ou aucun côté sont égaux.', 'Observe aussi les angles pour reconnaître un triangle rectangle.'],
      attention: 'Un triangle peut avoir deux propriétés : il peut être à la fois isocèle et rectangle.'
    },
    'U5-L03': {
      title: 'Méthode : calculer l’aire d’un rectangle ou d’un carré',
      steps: ['Repère la longueur et la largeur, avec la même unité.', 'Multiplie longueur × largeur.', 'Écris le résultat en unité carrée ; pour un carré, multiplie côté × côté.'],
      attention: 'Une addition des côtés calcule le périmètre, pas l’aire.'
    }
  };
  return methods[lesson.id] || { title: 'Méthode de la leçon', steps: [], attention: 'Vérifie toujours la propriété et l’unité utilisées.' };
}
function coverParagraph() {
  const file = path.join(ROOT, 'assets', 'cover_math_t4.png');
  if (!fs.existsSync(file)) return p('Illustration de couverture à produire.', { italics: true, color: '666666' });
  return new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, children: [new ImageRun({ type: 'png', data: fs.readFileSync(file), transformation: { width: 595, height: 842 } })] });
}

function modelTable(model, size = 17) {
  const widths = model.table_headers.map(() => Math.floor(9600 / model.table_headers.length));
  const rows = [new TableRow({ children: model.table_headers.map(x => cell(x, { bold: true, fill: C.blue, color: C.white, size })) })];
  model.table_rows.forEach(r => rows.push(new TableRow({ children: r.map(x => cell(x, { size })) })));
  return table(rows, widths);
}
function formulaBox(formula) {
  return new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
    borders: { top: { style: BorderStyle.SINGLE, size: 12, color: C.ocre }, bottom: { style: BorderStyle.SINGLE, size: 12, color: C.ocre }, left: { style: BorderStyle.SINGLE, size: 12, color: C.ocre }, right: { style: BorderStyle.SINGLE, size: 12, color: C.ocre }, insideHorizontal: noB, insideVertical: noB },
    rows: [new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: C.yellow }, margins: { top: 110, bottom: 110, left: 150, right: 150 }, children: [p('FORMULE', { bold: true, color: C.ocre, size: 24 }), p(formula, { align: AlignmentType.CENTER, bold: true, color: C.black, size: 24 })] })] })]
  });
}
function attentionBox(text) {
  return new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
    borders: { top: { style: BorderStyle.SINGLE, size: 12, color: C.red }, bottom: { style: BorderStyle.SINGLE, size: 12, color: C.red }, left: { style: BorderStyle.SINGLE, size: 12, color: C.red }, right: { style: BorderStyle.SINGLE, size: 12, color: C.red }, insideHorizontal: noB, insideVertical: noB },
    rows: [new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: C.yellow }, margins: { top: 110, bottom: 110, left: 150, right: 150 }, children: [p('ATTENTION', { bold: true, color: C.red, size: 24 }), p(text, { size: 22 })] })] })]
  });
}
function visualTableFromData(data, size = 20) {
  const rows = [new TableRow({ children: data.visual[0].map(x => cell(x, { bold: true, fill: C.green, color: C.white, size })) })];
  data.visual.slice(1).forEach(r => rows.push(new TableRow({ children: r.map(x => cell(x, { size })) })));
  return table(rows, data.visual[0].map(() => Math.floor(9600 / data.visual[0].length)));
}
function numberLessonTable() {
  return table([
    new TableRow({ children: [cell('Classe des mille', { span: 3, bold: true, fill: C.blue, color: C.white, size: 18, align: AlignmentType.CENTER }), cell('Classe des unités simples', { span: 3, bold: true, fill: C.blue, color: C.white, size: 18, align: AlignmentType.CENTER })] }),
    new TableRow({ children: ['C', 'D', 'U', 'C', 'D', 'U'].map(x => cell(x, { bold: true, fill: C.pale, size: 18, align: AlignmentType.CENTER })) }),
    new TableRow({ children: ['', '', '3', '0', '8', '5'].map(x => cell(x, { size: 23, align: AlignmentType.CENTER })) }),
    new TableRow({ children: ['', '', '1', '8', '4', '8'].map(x => cell(x, { size: 23, align: AlignmentType.CENTER })) }),
    new TableRow({ children: ['', '', '9', '9', '9', '9'].map(x => cell(x, { size: 23, align: AlignmentType.CENTER })) }),
    new TableRow({ children: ['', '1', '0', '0', '0', '0'].map(x => cell(x, { size: 23, align: AlignmentType.CENTER })) })
  ], [1600, 1600, 1600, 1600, 1600, 1600]);
}
function genericLessonBody(lesson, data, style, noteId) {
  const title = nominalTitle(lesson);
  const methodLabel = (style.method_title || 'Propriété et procédure').split(' — ')[0];
  const steps = [
    `MÉTHODE 1 — ${data.retain[0]}`,
    `MÉTHODE 2 — ${data.retain[1] || style.attention}`,
    `VÉRIFICATION — ${style.example}`
  ];
  const situation = [tr(lesson.activite, { color: C.black })];
  if (noteId) situation.push(new FootnoteReferenceRun(noteId));
  return [
    p(situation),
    heading(`1. ${title}`, 2), p(style.section_text),
    ...(figureFor(lesson) ? [figureParagraph(figureFor(lesson))] : []),
    p(style.example, { italics: true }),
    ...(data.visual && data.visual.length ? [visualTableFromData(data, 20)] : []),
    heading(`2. ${methodLabel}`, 2), ...steps.map(x => p([tr(x, { bold: true, color: C.green })], { align: AlignmentType.LEFT })),
    ...(style.formula ? [formulaBox(style.formula)] : []),
    attentionBox(style.attention),
    fullRetainsCard(style, data)
  ];
}
function numberLessonBody(data, noteId) {
  const situation = [tr('Au marché de Mahamasina, un prix est écrit 34 206 Ar. Comment lire ce nombre et comment l’écrire en lettres ?')];
  if (noteId) situation.push(new FootnoteReferenceRun(noteId));
  return [
    p(situation),
    heading('1. Tableau de numération', 2),
    p('Un nombre s’écrit avec les chiffres 0 à 9. Les chiffres sont groupés par classes de trois chiffres, en partant de la droite : la classe des unités simples, puis la classe des mille. Dans chaque classe, on distingue les centaines, les dizaines et les unités.'),
    p('Tableau de numération : 3 085, 1 848, 9 999 et 10 000.', { align: AlignmentType.LEFT }),
    numberLessonTable(),
    p('3 085 se lit : « trois mille quatre-vingt-cinq ». 1 848 se lit : « mille huit cent quarante-huit ». 9 999 se lit : « neuf mille neuf cent quatre-vingt-dix-neuf ». 10 000 se lit : « dix mille ».'),
    heading('2. Lecture des nombres', 2),
    p('Pour lire un nombre, je sépare les classes et je lis chaque classe dans l’ordre.'),
    p([tr('Méthode 1 — Lecture par classes : ', { bold: true, color: C.green }), tr('je sépare les classes par un espace ; je lis la classe des mille en ajoutant « mille » ; je lis la classe des unités simples ; je réunis les deux lectures.')]),
    heading('3. Écriture des nombres', 2),
    p('Pour écrire un nombre dicté, je repère le mot « mille », puis je complète chaque classe sur trois positions.'),
    p([tr('Méthode 2 — Écriture à partir des mots : ', { bold: true, color: C.green }), tr('je repère la classe des mille ; j’écris la classe des unités simples sur trois chiffres ; je complète les positions vides avec des zéros.')]),
    p('« Cinq mille vingt et un » → 5 | 021 → 5 021.'),
    heading('4. Décomposition', 2),
    p('3 085 = 3 000 + 80 + 5 = (3 × 1 000) + (8 × 10) + (5 × 1). Dans 3 085, le chiffre des unités de mille est 3, le chiffre des centaines est 0, le chiffre des dizaines est 8 et le chiffre des unités est 5.'),
    formulaBox('Décomposition : 34 206 = 30 000 + 4 000 + 200 + 6.'),
    attentionBox('Mille est invariable. Le zéro peut marquer une position vide. Il faut distinguer le chiffre d’une position du nombre total de milliers ou de centaines.'),
    fullRetainsCard({ retain: ['Un nombre se lit par classes de trois chiffres.', 'Je sépare les classes en partant de la droite.', 'Je lis la classe des mille puis la classe des unités simples.', 'Je complète les positions vides avec des zéros et je respecte la valeur de chaque chiffre.'] }, data)
  ];
}
function fullRetainsCard(style, data) {
  const inner = style.retain.slice(0, 4).map(x => p(x, { size: 24 }));
  return new Table({ width: { size: 9600, type: WidthType.DXA }, layout: TableLayoutType.FIXED,
    borders: { top: { style: BorderStyle.SINGLE, size: 12, color: C.green }, bottom: { style: BorderStyle.SINGLE, size: 12, color: C.green }, left: { style: BorderStyle.SINGLE, size: 12, color: C.green }, right: { style: BorderStyle.SINGLE, size: 12, color: C.green }, insideHorizontal: gridB, insideVertical: gridB },
    rows: [new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: C.green }, children: [p('JE RETIENS', { align: AlignmentType.CENTER, color: C.white, bold: true, size: 27 })] })] }),
      new TableRow({ children: [new TableCell({ shading: { type: ShadingType.CLEAR, fill: 'F4FBF4' }, margins: { top: 130, bottom: 130, left: 160, right: 160 }, children: inner })] })]
  });
}
function fullLesson(lesson, data, unit, globalNo, total) {
  const style = styleBank.lessons[lesson.id];
  const scene = scenesFor(lesson, unit)[0];
  const noteId = footnoteIds[lesson.id];
  const title = nominalTitle(lesson);
  const sets = exerciseSets(lesson, data, style);
  const body = lesson.id === 'U1-L01' ? numberLessonBody(data, noteId) : genericLessonBody(lesson, data, style, noteId);
  return [
    page(), heading('LEÇON', 1, `lecon${lesson.id.replace(/[^A-Za-z0-9]/g, '')}`), heading(title, 1),
    ...(scene ? [imageParagraph(scene, 'png', 620)] : []),
    ...body,
    page(), heading(`EXERCICES — Séance ${globalNo} : ${title}`, 1),
    heading('Application', 2),
    heading('Exercice 1 — Application directe', 2), ...itemParagraphs(sets.app1),
    heading('Exercice 2 — Représentation et justification', 2), ...itemParagraphs(sets.app2),
    heading('Évaluation', 2),
    heading('Exercice 3 — Réinvestissement', 2), ...itemParagraphs(sets.eval1),
    heading('Exercice 4 — Situation et transfert', 2), ...itemParagraphs(sets.eval2),
    heading('CORRIGÉ', 1),
    heading('Corrigé de l’exercice 1 — Application directe', 2), ...correctionParagraphs(sets.app1Answers),
    heading('Corrigé de l’exercice 2 — Représentation et justification', 2), ...correctionParagraphs(sets.app2Answers),
    heading('Corrigé de l’exercice 3 — Réinvestissement', 2), ...correctionParagraphs(sets.eval1Answers),
    heading('Corrigé de l’exercice 4 — Situation et transfert', 2), ...correctionParagraphs(sets.eval2Answers),
    p([tr('Mots-clés de vérification : ', { bold: true, color: C.salmon }), tr('propriété, démarche, calcul, unité, phrase-réponse.')], { fill: 'FCE4D6', italics: true })
  ];
}
function learnerLesson(lesson, data, unit, globalNo, total) {
  if (PROTOTYPE && data.prototype_model) return modelLesson(lesson, data);
  return fullLesson(lesson, data, unit, globalNo, total);
}
function unitIntro(unit, unitNo) {
  const total = unit.lecons.length;
  return [
    page(), heading(`UNITÉ ${unitNo} — ${unit.nom.toUpperCase()}`, 1, `unite${unitNo}`),
    p(`Durée officielle : ${unit.duree_officielle_heures} heures. Valeurs : ${unit.valeurs.join(', ')}.`, { align: AlignmentType.CENTER }),
    heading('Tableau de bord', 2),
    table([
      new TableRow({ children: [cell('Leçon', { bold: true, fill: C.blue, color: C.white }), cell('Titre', { bold: true, fill: C.blue, color: C.white }), cell('Support principal', { bold: true, fill: C.blue, color: C.white })] }),
      ...unit.lecons.map((l, i) => new TableRow({ children: [cell(`${i + 1}`, { size: 17 }), cell(nominalTitle(l), { size: 17 }), cell(l.supports.join(', '), { size: 17 })] }))
    ], [900, 5200, 3500]),
    p(`Cette unité comprend ${total} leçons. Chaque leçon est suivie d’exercices et d’un corrigé.`, { italics: true, color: '666666' })
  ];
}
function annexSection() {
  return [
    page(), heading('ANNEXES — COMPLÉMENTS DE L’ANCIEN PROGRAMME SCOLAIRE', 1, 'annexes'),
    p('Les leçons ci-dessous appartiennent à l’ancien programme scolaire ou développent des contenus qui ne figurent pas dans le PE T4. Elles sont conservées comme ressources documentaires facultatives. Elles ne constituent pas des compétences obligatoires du manuel PE T4.'),
    table([
      new TableRow({ children: [cell('Référence', { bold: true, fill: C.ocre, color: C.white }), cell('Leçon documentaire PS', { bold: true, fill: C.ocre, color: C.white }), cell('Statut', { bold: true, fill: C.ocre, color: C.white })] }),
      ...styleBank.annexes.map(a => new TableRow({ children: [cell(a[0], { size: 18 }), cell(a[1], { size: 18 }), cell('Annexe facultative — hors contenu obligatoire PE T4', { size: 18 })] }))
    ], [1400, 4200, 4000]),
    p('Les annexes détaillées seront rédigées avec la même structure de leçon que le corps principal, mais elles resteront séparées de la progression PE.', { italics: true, color: '666666' })
  ];
}
function coverPage() {
  return [coverParagraph()];
}
function frontMatter(units, total) {
  const toc = [page(), heading('SOMMAIRE INTERACTIF', 1, 'sommaire'), p('Clique sur une unité ou une séance pour atteindre directement sa fiche. Les liens sont des liens internes vers des signets.'), ...units.flatMap((u, ui) => {
    const arr = [new Paragraph({ children: [new InternalHyperlink({ anchor: `unite${ui + 1}`, children: [tr(`Unité ${ui + 1} — ${u.nom}`, { bold: true, color: C.blue })] })] })];
    u.lecons.forEach((l, li) => {
      const global = units.slice(0, ui).reduce((s, x) => s + x.lecons.length, 0) + li + 1;
      arr.push(new Paragraph({ indent: { left: 360 }, children: [new InternalHyperlink({ anchor: `seance${global}`, children: [tr(`Fiche ${global} — ${nominalTitle(l)}`, { color: C.blue, size: 19 })] })] }));
      arr.push(new Paragraph({ indent: { left: 720 }, children: [new InternalHyperlink({ anchor: `lecon${l.id.replace(/[^A-Za-z0-9]/g, '')}`, children: [tr(`Leçon — ${nominalTitle(l)}`, { color: C.blue, size: 18 })] })] }));
    });
    return arr;
  })];
  return [
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 400, after: 200 }, children: [tr('MATHÉMATIQUES', { bold: true, color: C.blue, size: 54 })] }),
    new Paragraph({ alignment: AlignmentType.CENTER, spacing: { after: 250 }, children: [tr('T4', { bold: true, color: C.red, size: 84 })] }),
    p('Manuel de l’apprenant et fiches de préparation enseignant', { align: AlignmentType.CENTER, size: 28, color: C.blue }),
    p('Construire à partir du PE T4 et du FRP T4 — Collection J-Learn', { align: AlignmentType.CENTER, size: 20 }),
    page(), heading('AVANT-PROPOS', 1, 'avantpropos'),
    p('Ce manuel suit les six composantes du programme officiel de mathématiques T4 : Nombre, Opération, Algèbre, Géométrie, Mesure et Traitement de données. Chaque séance articule une fiche de préparation, une leçon accessible, des exercices notés et un corrigé.'),
    p('Les contenus sont rattachés au PE T4 et au FRP T4. Les supports de manipulation et les représentations proposées dans les références sont repris ou reformulés dans les fiches concernées.'),
    p('Code couleur : titres de leçon en rouge ; sous-titres en vert ; mots-clés en bleu ; corrigés en rose/bordeaux.'),
    ...toc
  ];
}
async function main() {
  const total = inventory.unites.reduce((s, u) => s + u.lecons.length, 0);
  const expectedTotal = PROTOTYPE ? 3 : 57;
  if (total !== expectedTotal) throw new Error(`Nombre de leçons inattendu : ${total} (attendu ${expectedTotal})`);
  const generatedFigures = await generateFigures();
  console.log(`Supports visuels générés : ${generatedFigures.length}`);
  const children = [...frontMatter(inventory.unites, total)];
  let global = 0;
  inventory.unites.forEach((unit, ui) => {
    children.push(...unitIntro(unit, ui + 1));
    unit.lecons.forEach(lesson => {
      global += 1;
      const data = bank[lesson.id];
      if (!data) throw new Error(`Banque absente : ${lesson.id}`);
      children.push(...fiche(lesson, data, unit, global, total));
      children.push(...learnerLesson(lesson, data, unit, global, total));
    });
  });
  children.push(...annexSection());
  children.push(page(), heading('SOURCES ET CONTRÔLE', 1, 'sources'), p('PE T4.pdf, pages imprimées 67–77. FRP T4 Fascicule 2.pdf, pages imprimées 5–54. L’ancien programme scolaire et ses extensions sont signalés dans les notes PS et les annexes.'), p(`Le manuel contient ${total} fiches identifiées, chacune reliée à une leçon, à des exercices et à un corrigé.`));
  const doc = new Document({
    numbering: { config: [{ reference: 'lesson-number', levels: [{ level: 0, format: 'decimal', text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 180 } } } }] }] },
    styles: { default: { document: { run: { font: 'Times New Roman', size: 22 }, paragraph: { spacing: { line: 300 } } } } },
    footnotes: Object.fromEntries(Object.entries(styleBank.lessons).filter(([, s]) => s.ps_note).map(([id, s]) => [String(footnoteIds[id]), { children: [p(`Complément PS — ${s.ps_note}`, { size: 17 })] }])),
    sections: [
      {
        properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 0, right: 0, bottom: 0, left: 0 } } },
        children: coverPage()
      },
      {
        properties: { type: SectionType.NEXT_PAGE, page: { size: { width: 11906, height: 16838 }, margin: { top: 900, right: 1000, bottom: 900, left: 1000 } } },
        footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [tr('J-Learn — Mathématiques T4 — page ', { size: 17, color: '666666' }), new TextRun({ children: [PageNumber.CURRENT], font: 'Times New Roman', size: 17, color: '666666' })] })] }) },
        children
      }
    ]
  });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  const buf = await Packer.toBuffer(doc);
  fs.writeFileSync(OUT, buf);
  console.log(`${OUT}: ${buf.length} octets; ${total} séances`);
}
main().catch(err => { console.error(err); process.exit(1); });
