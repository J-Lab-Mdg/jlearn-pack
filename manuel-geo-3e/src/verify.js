// Vérifications obligatoires (SKILL.md + technical-notes.md)
const AdmZip = require("adm-zip");
const file = process.argv[2];
const xml = new AdmZip(file).readAsText("word/document.xml");
const count = (re) => (xml.match(re) || []).length;
const text = xml.replace(/<[^>]+>/g, " ");
const bookmarks = new Set([...xml.matchAll(/<w:bookmarkStart[^>]*w:name="([^"]+)"/g)].map((m) => m[1]));
const anchors = new Set([...xml.matchAll(/<w:hyperlink[^>]*w:anchor="([^"]+)"/g)].map((m) => m[1]));
const res = {
  sectPr: count(/<w:sectPr[ >]/g),
  ns0: count(/ns0:/g),
  fiches: count(/FICHE DE PRÉPARATION/g),
  seances: count(/SÉANCE \d+ \/ \d+/g),
  hatier: count(/Hatier/gi),
  oral_cells: count(/>Oral</g),
  bepc: count(/BEPC/g),
  gridCol6_tables: count(/<w:tblGrid>(?:<w:gridCol[^>]*\/>){6}<\/w:tblGrid>/g),
  timesNewRoman: count(/Times New Roman/g),
  doubleSpaces: [...xml.matchAll(/<w:t[^>]*>([^<]*)<\/w:t>/g)].filter((m) => /\S {2,}\S/.test(m[1])).length,
  dureeSurSousEtapes: count(/>\d+\. (Mise en situation|Présentation|Observation|Analyse|Synthèse|Application)<\/w:t>[\s\S]{0,400}?>\d+ min</g),
  bookmarks: bookmarks.size, anchors: anchors.size,
  liensSansSignet: [...anchors].filter((a) => !bookmarks.has(a)),
  signetsSansLien: [...bookmarks].filter((b) => !anchors.has(b) && !/^_/.test(b)),
  images: count(/<pic:pic/g),
  datesCalendaires: (text.match(/\b\d{1,2}\/\d{1,2}\/\d{4}\b|rentrée 20\d\d/g) || []),
  metaInstructions: (text.match(/L'enseignant pose des questions|Donner un exercice|Question orale sur le thème/g) || []),
  surPrecision: (text.match(/n'écrivent rien|notent le titre|ne leur demande pas/g) || []),
  typesNommes: (text.match(/\b(QCM|Texte à trous)\b/g) || []),
};
console.log(JSON.stringify(res, null, 1));
const ok = res.sectPr === 1 && res.ns0 === 0 && res.fiches === res.seances && res.oral_cells === 0 && res.bepc === 0 && res.liensSansSignet.length === 0 && res.dureeSurSousEtapes === 0 && res.surPrecision.length === 0 && res.typesNommes.length === 0 && res.doubleSpaces === 0 && res.hatier === 0;
console.log(ok ? "✅ TOUTES LES VÉRIFICATIONS PASSENT" : "❌ ÉCHEC — corriger avant livraison");
process.exit(ok ? 0 : 1);
