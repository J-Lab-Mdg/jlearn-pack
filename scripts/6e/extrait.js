// Extrait de relecture du Manuel de Mathématiques 6e — Collection J-Learn
// Produit un court document (une séance illustrée + une révision de période)
// destiné au contrôle de mise en page avant validation des illustrations.
// Exécution : node scripts/6e/extrait.js

const fs = require("fs");
const path = require("path");
const {
  Document, Packer, convertMillimetersToTwip,
} = require("docx");
const B = require("./builders");
const {
  C, FONT, Paragraph, TextRun, AlignmentType,
} = B;

// build.js exporte ses briques lorsqu'il est chargé comme module.
const M = require("./build");

const progression = require("./progression");
const revisions = require("./revisions");

// --- sélection : la séance sur le cercle (P III) et la révision de P III
const p3 = require("./seances-p3");
const per3 = progression.find((p) => p.id === "P3");
const seance = p3.find((s) => s.titre === "Le cercle : vocabulaire et constructions");
const totalLocal = per3.chapitres.reduce((a, c) => a + c.seances, 0);

const children = [];

children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { before: 200, after: 100 },
  children: [new TextRun({
    text: "EXTRAIT DE RELECTURE", font: FONT, size: 40, bold: true, color: C.titre })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 60 },
  children: [new TextRun({
    text: "Manuel de Mathématiques — Classe de 6e", font: FONT, size: 26, bold: true })],
}));
children.push(new Paragraph({
  alignment: AlignmentType.CENTER, spacing: { after: 300 },
  children: [new TextRun({
    text: "Une fiche de préparation illustrée et une fiche de révision, "
        + "présentées telles qu'elles apparaissent dans le manuel complet.",
    font: FONT, size: 20, italics: true, color: C.gris })],
}));

children.push(...M.batirSeance(seance, 43, per3, 1, totalLocal));
children.push(...M.batirRevision(revisions.P3.revision, per3));

const doc = new Document({
  creator: "Collection J-Learn",
  title: "Extrait de relecture — Mathématiques 6e",
  styles: {
    default: {
      document: { run: { font: FONT, size: 21 } },
      heading1: { run: { font: FONT, size: 32, bold: true, color: C.titre } },
      heading2: { run: { font: FONT, size: 28, bold: true, color: C.titre } },
    },
  },
  sections: [{
    properties: {
      page: {
        margin: {
          top: convertMillimetersToTwip(18), bottom: convertMillimetersToTwip(18),
          left: convertMillimetersToTwip(16), right: convertMillimetersToTwip(16),
        },
      },
    },
    children,
  }],
});

const outDir = path.join(__dirname, "..", "..", "telechargements");
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "Extrait-relecture-Maths-6e.docx");
Packer.toBuffer(doc).then((buf) => {
  fs.writeFileSync(outFile, buf);
  console.log(`OK  ${outFile}  ${(buf.length / 1024).toFixed(0)} Ko`);
});
