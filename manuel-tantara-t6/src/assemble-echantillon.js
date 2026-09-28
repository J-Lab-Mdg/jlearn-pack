// assemble-echantillon.js — mamokatra ny taratasy vavolombelona : Seho 1 feno
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildFiche } = require("./fiche-builder");
const S1 = require("./fiche01-data");
const { AlignmentType } = require("docx");

const ROOT = path.join(__dirname, "..");

const children = [
  // Pejy fampidirana ny santionany
  B.p("COLLECTION J-LEARN", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200, spacingBefore: 1200 }),
  B.p("Boky Tantara — Kilasy T6", { bold: true, size: 36, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 200 }),
  B.p("SANTIONANY VAVOLOMBELONA — Seho 1", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 120 }),
  B.p("Famaritana ny Tantara : ny toetrany sy ny tombontsoa entiny", { size: 24, align: AlignmentType.CENTER, spacingAfter: 400 }),
  B.p("Version V1 — ho fankatoavana alohan'ny famokarana feno", { italics: true, size: 20, align: AlignmentType.CENTER }),
  B.pageBreak(),
  ...buildFiche(S1, ROOT),
];

const doc = new B.Document({
  styles: {
    default: { document: { run: { font: B.FONT, size: 22 } } },
    characterStyles: [{
      id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont",
      run: { color: "0563C1", underline: {} },
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
    children,
  }],
});

B.Packer.toBuffer(doc).then(buf => {
  const out = path.join(ROOT, "livrables", "Echantillon_Seho1_Tantara_T6_JLearn.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
});
