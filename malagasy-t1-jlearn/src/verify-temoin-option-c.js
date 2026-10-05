const fs = require('fs');
const path = require('path');
const AdmZip = require('adm-zip');

const ROOT = path.resolve(__dirname, '..');
const DOCX = path.join(ROOT, 'output', 'Santionany-Feno-Malagasy-T1-Safidy-C-Fiasanny-Teny-Asa-An-tsoratra-v1.docx');
const REPORT = path.join(ROOT, 'output', 'verification-temoin-complet-option-c.json');

if (!fs.existsSync(DOCX)) throw new Error(`DOCX tsy hita : ${DOCX}`);
const zip = new AdmZip(DOCX);
const documentXml = zip.readAsText('word/document.xml');
const relationships = zip.readAsText('word/_rels/document.xml.rels');
const normalized = documentXml
  .replace(/<w:tab\/>/g, '\t')
  .replace(/<w:br\/>/g, '\n')
  .replace(/<[^>]+>/g, '')
  .replace(/&amp;/g, '&')
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/\s+/g, ' ')
  .trim();

const required = [
  'SANTIONANY FENO — SAFIDY C',
  'A. BOKIN’NY MPIANATRA',
  'B. KAHIE FANAZARANA',
  'C. KAHIE TSOTRA',
  'D. TOROLALANA HO AN’NY MPAMPIANATRA',
  'I. FAMERENANA',
  'II. LESONA VAOVAO',
  'III. TOMBANA',
  'ASEHOKO',
  'MIARA-MANAO',
  'MANAO SAMIRERY',
  'Mamaky boky i Rabe.',
  'Mianatra i Rabe.',
  'PE T1, p. 9',
  'PE T1, p. 15',
  'RAPE T1, p. 9–11',
  'E. FANAMAFISANA ISAN-KERINANDRO',
  'F. VALINY SY FANAMARINANA',
  'TSY ADIKA AO ANATY KAHIE',
  'Fitambarany : 20 minitra',
];

const forbidden = [
  'Je fais',
  'Nous faisons',
  'Tu fais',
  'Copiez la leçon',
  'Résumé à copier',
];

const missing = required.filter((value) => !normalized.includes(value));
const forbiddenFound = forbidden.filter((value) => normalized.includes(value));
const media = zip.getEntries()
  .map((entry) => entry.entryName)
  .filter((name) => name.startsWith('word/media/') && !name.endsWith('/'));
const hyperlinks = (relationships.match(/TargetMode="External"/g) || []).length;
const pageBreaks = (documentXml.match(/w:type="page"/g) || []).length;
const drawings = (documentXml.match(/<w:drawing>/g) || []).length;

const checks = {
  requiredTextComplete: missing.length === 0,
  noForbiddenFrenchRoutine: forbiddenFound.length === 0,
  fourSupportsPresent: [
    'A. BOKIN’NY MPIANATRA',
    'B. KAHIE FANAZARANA',
    'C. KAHIE TSOTRA',
    'D. TOROLALANA HO AN’NY MPAMPIANATRA',
  ].every((value) => normalized.includes(value)),
  fullSkillStructurePresent: ['I. FAMERENANA', 'II. LESONA VAOVAO', 'III. TOMBANA'].every((value) => normalized.includes(value)),
  explicitRoutinePresent: ['ASEHOKO', 'MIARA-MANAO', 'MANAO SAMIRERY'].every((value) => normalized.includes(value)),
  sourceTracePresent: ['PE T1, p. 9', 'PE T1, p. 15', 'PE T1, p. 16–17', 'RAPE T1, p. 9–11'].every((value) => normalized.includes(value)),
  requiredImagesEmbedded: media.length >= 2 && drawings >= 2,
  weeklyConsolidationPresent: normalized.includes('E. FANAMAFISANA ISAN-KERINANDRO'),
  correctionAndRemediationPresent: normalized.includes('Tondrom-panitsiana haingana') && normalized.includes('Fanarenana avy hatrany'),
  rawLinkEmbedded: hyperlinks >= 2,
  substantialPagination: pageBreaks >= 10,
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
  metrics: {
    pageBreaks,
    drawings,
    hyperlinks,
    characters: normalized.length,
  },
};

fs.writeFileSync(REPORT, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report, null, 2));
if (status !== 'PASS') process.exit(1);
