const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const AdmZip = require('adm-zip');
const sharp = require('sharp');
const D = require('./data-fiche-temoin');

const ROOT = path.resolve(__dirname, '..');
const DOCX = path.join(ROOT, 'output', 'Fiche-Temoin-Malagasy-T1-CONFORME-SKILL-v18.docx');
const IMAGE = path.join(ROOT, 'assets', 'img_malagasy_t1_seance01.png');
const REPORT = path.join(ROOT, 'output', 'verification-fiche-temoin.json');

function count(source, regex) {
  return (source.match(regex) || []).length;
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function textNodes(xml) {
  return [...xml.matchAll(/<w:t(?:\s[^>]*)?>([\s\S]*?)<\/w:t>/g)].map((m) => m[1]);
}

async function main() {
  assert(fs.existsSync(DOCX), `DOCX absent : ${DOCX}`);
  const docxBuffer = fs.readFileSync(DOCX);
  const docxSha256 = crypto.createHash('sha256').update(docxBuffer).digest('hex');
  const zip = new AdmZip(docxBuffer);
  const entries = zip.getEntries();
  assert(entries.length > 0, 'Archive DOCX vide');
  for (const entry of entries) entry.getData();

  const xml = zip.readAsText('word/document.xml');
  const styles = zip.readAsText('word/styles.xml');
  const relationships = zip.readAsText('word/_rels/document.xml.rels');
  const contentTypes = zip.readAsText('[Content_Types].xml');
  const allText = textNodes(xml).join('\n');
  const tables = xml.match(/<w:tbl>[\s\S]*?<\/w:tbl>/g) || [];
  const deroulement = tables.find((table) => table.includes('Fizotry ny Lesona'));
  assert(deroulement, 'Table de déroulement introuvable');

  const sectPr = count(xml, /<w:sectPr[\s>]/g);
  const ns0 = count(xml, /\bns0:/g);
  const tnr = count(xml + styles, /Times New Roman/gi);
  const doubleSpaces = textNodes(xml).filter((value) => / {2,}/.test(value));
  const gridCols = count(deroulement, /<w:gridCol\b/g);
  const deroulementRows = deroulement.match(/<w:tr>[\s\S]*?<\/w:tr>/g) || [];
  const splittableRows = deroulementRows.filter((row) => !row.includes('<w:cantSplit/>'));
  const takelaTitles = count(allText, /TAKELA-PANOMANAN-DESONA/g);
  const oldWrongTitle = count(allText, /TAKELA-PANOMANANA NY LESONA/gi);

  const bookmarkNames = new Set(
    [...xml.matchAll(/<w:bookmarkStart[^>]*w:name="([^"]+)"/g)].map((m) => m[1])
      .filter((name) => !name.startsWith('_')),
  );
  const anchors = new Set([...xml.matchAll(/w:anchor="([^"]+)"/g)].map((m) => m[1]));
  const bookmarksWithoutLink = [...bookmarkNames].filter((name) => !anchors.has(name));
  const linksWithoutBookmark = [...anchors].filter((name) => !bookmarkNames.has(name));

  const requiredLabels = [
    'I. FAMERENANA',
    'II. LESONA VAOVAO',
    '1. Fitarihan-tsaina',
    '2. Fanolorana',
    '3. Fandinihana',
    '4. Famakafakana',
    '5. Fandravonana',
    '6. Fampiharana',
    'III. TOMBANA',
    'Dingana sy Faharetany',
    'Fizotry ny Lesona',
    'Mpampianatra',
    'Mpianatra',
    'Tetika Amam-paika',
    'Fitaovana',
    'Fanamarihana',
  ];
  const missingLabels = requiredLabels.filter((label) => !allText.includes(label));

  const forbiddenSubstepDurations = [
    'Fitarihan-tsaina —',
    'Fanolorana —',
    'Fandinihana —',
    'Famakafakana —',
    'Fandravonana —',
    'Fampiharana —',
  ].filter((needle) => allText.includes(needle) && allText.slice(allText.indexOf(needle), allText.indexOf(needle) + 70).includes('minitra'));

  assert(D.exercises.length === 4, 'Quatre exercices attendus au total');
  for (const exercise of D.exercises) {
    assert(exercise.items.length >= 4, `Exercice ${exercise.numero} : moins de 4 items`);
    assert(exercise.answers.length === exercise.items.length, `Exercice ${exercise.numero} : corrigé incomplet`);
  }
  const score = D.exercises.reduce((sum, exercise) => sum + exercise.score, 0);

  const imageMeta = await sharp(IMAGE).metadata();
  const imageSize = fs.statSync(IMAGE).size;
  const imageEntries = entries.filter((entry) => !entry.isDirectory && entry.entryName.startsWith('word/media/'));
  const undefinedMediaEntries = imageEntries.filter((entry) => entry.entryName.endsWith('.undefined'));
  const pngRelationships = count(relationships, /Target="media\/[^"]+\.png"/g);
  const pngContentTypes = count(contentTypes, /ContentType="image\/png" Extension="png"/g);

  const visibleDatePatterns = [
    /\b\d{1,2}[/-]\d{1,2}[/-]\d{2,4}\b/g,
    /\b(?:janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)\s+\d{4}\b/gi,
  ];
  const visibleDates = visibleDatePatterns.flatMap((pattern) => allText.match(pattern) || []);

  const checks = {
    docxBytes: docxBuffer.length,
    docxSha256,
    archiveEntries: entries.length,
    sectPr,
    ns0,
    timesNewRomanOccurrences: tnr,
    doubleSpaceTextNodes: doubleSpaces.length,
    deroulementGridColumns: gridCols,
    deroulementRowCount: deroulementRows.length,
    splittableDeroulementRows: splittableRows.length,
    takelaTitleOccurrences: takelaTitles,
    wrongTitleOccurrences: oldWrongTitle,
    bookmarks: [...bookmarkNames],
    internalAnchors: [...anchors],
    bookmarksWithoutLink,
    linksWithoutBookmark,
    missingRequiredLabels: missingLabels,
    forbiddenSubstepDurations,
    exerciseCount: D.exercises.length,
    exerciseItemCounts: D.exercises.map((exercise) => exercise.items.length),
    correctionItemCounts: D.exercises.map((exercise) => exercise.answers.length),
    totalScore: score,
    imageWidthPx: imageMeta.width,
    imageHeightPx: imageMeta.height,
    imageBytes: imageSize,
    embeddedImageEntries: imageEntries.map((entry) => entry.entryName),
    undefinedMediaEntries: undefinedMediaEntries.map((entry) => entry.entryName),
    pngRelationships,
    pngContentTypes,
    visibleCalendarDates: visibleDates,
    forbiddenPublisherOccurrences: count(allText, /Hatier|MINESEB/gi),
    forbiddenSupportOralOccurrences: count(xml, />Oral</g),
  };

  assert(sectPr === 1, `sectPr=${sectPr}, attendu 1`);
  assert(ns0 === 0, `ns0=${ns0}, attendu 0`);
  assert(tnr > 0, 'Times New Roman absent');
  assert(doubleSpaces.length === 0, `Doubles espaces : ${doubleSpaces.length}`);
  assert(gridCols === 6, `Table déroulement : ${gridCols} colonnes, attendu 6`);
  assert(splittableRows.length === 0, `Lignes de déroulement sécables : ${splittableRows.length}`);
  assert(takelaTitles === 1, `Titre TAKELA : ${takelaTitles}, attendu 1`);
  assert(oldWrongTitle === 0, 'Ancien titre incorrect détecté');
  assert(bookmarkNames.size === anchors.size, 'Nombre de signets différent du nombre de liens internes');
  assert(bookmarksWithoutLink.length === 0, `Signets sans lien : ${bookmarksWithoutLink.join(', ')}`);
  assert(linksWithoutBookmark.length === 0, `Liens sans signet : ${linksWithoutBookmark.join(', ')}`);
  assert(missingLabels.length === 0, `Libellés absents : ${missingLabels.join(', ')}`);
  assert(forbiddenSubstepDurations.length === 0, 'Durée individuelle détectée sur une sous-étape');
  assert(score === 20, `Barème total=${score}, attendu 20`);
  assert(imageMeta.width <= 1100, `Image trop large : ${imageMeta.width}px`);
  assert(imageEntries.length === 1, `Images incorporées : ${imageEntries.length}, attendu 1`);
  assert(undefinedMediaEntries.length === 0, `Extension média indéfinie : ${undefinedMediaEntries.map((entry) => entry.entryName).join(', ')}`);
  assert(pngRelationships === 1, `Relation PNG : ${pngRelationships}, attendu 1`);
  assert(pngContentTypes >= 1, 'Type de contenu PNG absent');
  assert(visibleDates.length === 0, `Date calendaire précise détectée : ${visibleDates.join(', ')}`);
  assert(checks.forbiddenPublisherOccurrences === 0, 'Référence éditeur interdite détectée');
  assert(checks.forbiddenSupportOralOccurrences === 0, 'Support “Oral” détecté');

  fs.writeFileSync(REPORT, `${JSON.stringify({ status: 'PASS', docx: path.relative(ROOT, DOCX), checks }, null, 2)}\n`);
  console.log(JSON.stringify({ status: 'PASS', ...checks }, null, 2));
}

main().catch((error) => {
  const failure = { status: 'FAIL', error: error.message };
  fs.mkdirSync(path.dirname(REPORT), { recursive: true });
  fs.writeFileSync(REPORT, `${JSON.stringify(failure, null, 2)}\n`);
  console.error(JSON.stringify(failure, null, 2));
  process.exit(1);
});
