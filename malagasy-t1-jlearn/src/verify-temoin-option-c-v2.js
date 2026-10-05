const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ROOT = path.resolve(__dirname, '..');
const DOCX = path.join(ROOT, 'output', 'Santionany-Feno-Malagasy-T1-Safidy-C-Rr-v2.docx');
const REPORT = path.join(ROOT, 'output', 'verification-santionany-feno-option-c-Rr-v2.json');

if (!fs.existsSync(DOCX)) throw new Error(`DOCX tsy hita : ${DOCX}`);
const zip = new AdmZip(DOCX);
const xml = zip.readAsText('word/document.xml');
const rels = zip.readAsText('word/_rels/document.xml.rels');
const text = xml.replace(/<w:tab\/>/g, '\t').replace(/<w:br\/>/g, '\n').replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/\s+/g, ' ').trim();

const required = [
  'SANTIONANY FENO — SAFIDY C',
  'ASA AN-TSORATRA — ampidirina ao ny FIASAN’NY TENY',
  'R/r',
  'Inona avy ireo teny manomboka amin’ny feo r hita amin’ny sary?',
  'Fanoratana ny R/r',
  'Misotro rano i Rabe.',
  'Inona no niova?',
  'Sorabaventy no manomboka ny fehezanteny sy ny anaran’olona.',
  'Araho.',
  'Tohizo.',
  'Soraty samirery.',
  'i ...akoto',
  'ny ...onono',
  'ny o...ana',
  'i ...asoa',
  'TAKELA-PANOMANAN-DESONA',
  'Zana-taranja : Asa an-tsoratra',
  'Fahaiza-manao ampidirina : Fiasan’ny teny',
  'I. FAMERENANA',
  'II. LESONA VAOVAO',
  'III. TOMBANA',
  'ASEHOKO',
  'MIARA-MANAO',
  'MANAO SAMIRERY',
  'Asa atao ao anaty kahie tsotra',
  'FANAMAFISANA ISAN-KERINANDRO',
];
const forbidden = [
  'TAKELA-PANOMANANA SY FIFANDRAISANA AMIN’NY PE/RAPE',
  'A. BOKIN’NY MPIANATRA',
  'B. KAHIE FANAZARANA',
  'Je fais', 'Nous faisons', 'Tu fais',
  'Lazao am-bava',
  'DINIHO NY SARY',
];
const missing = required.filter((value) => !text.includes(value));
const forbiddenFound = forbidden.filter((value) => text.includes(value));
const media = zip.getEntries().map((e) => e.entryName).filter((n) => n.startsWith('word/media/') && !n.endsWith('/'));
const pageBreaks = (xml.match(/w:type="page"/g) || []).length;
const drawings = (xml.match(/<w:drawing>/g) || []).length;
const hyperlinks = (rels.match(/TargetMode="External"/g) || []).length;

const checks = {
  requiredTextComplete: missing.length === 0,
  forbiddenTechnicalHeadingsAbsent: forbiddenFound.length === 0,
  correctSkillTitle: text.includes('TAKELA-PANOMANAN-DESONA'),
  planningMergedIntoTeacherGuide: text.includes('TOROLALANA HO AN’NY MPAMPIANATRA') && text.includes('TAKELA-PANOMANAN-DESONA'),
  correctSubdisciplineHierarchy: text.includes('Zana-taranja : Asa an-tsoratra') && text.includes('Fahaiza-manao ampidirina : Fiasan’ny teny'),
  fadingScaffoldPresent: ['Araho.', 'Tohizo.', 'Soraty samirery.'].every((v) => text.includes(v)),
  fullSkillStructurePresent: ['I. FAMERENANA', 'II. LESONA VAOVAO', 'III. TOMBANA'].every((v) => text.includes(v)),
  imagesEmbedded: media.length >= 3 && drawings >= 4,
  weeklyConsolidationPresent: text.includes('FANAMAFISANA ISAN-KERINANDRO'),
  rawAndOfficialLinksEmbedded: hyperlinks >= 2,
  substantialPagination: pageBreaks >= 9,
};
const status = Object.values(checks).every(Boolean) ? 'PASS' : 'FAIL';
const report = {
  status,
  file: path.relative(ROOT, DOCX),
  size: fs.statSync(DOCX).size,
  checks,
  missing,
  forbiddenFound,
  media,
  metrics: { pageBreaks, drawings, hyperlinks, characters: text.length },
};
fs.writeFileSync(REPORT, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (status !== 'PASS') process.exit(1);
