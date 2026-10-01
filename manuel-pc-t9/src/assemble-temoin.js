// assemble-temoin.js — Séance témoin 4 « nouvelle maquette lisible » (PC T9)
const path = require("path");
const fs = require("fs");
const T = require("./temoin-builder");
const S = require("./data-temoin-s4");
const { AlignmentType, Footer, Paragraph, TextRun, PageNumber } = require("docx");

const ROOT = path.join(__dirname, "..");
const IMG = (f) => path.join(ROOT, "images", f);
const children = [];

// ---------- page de titre ----------
children.push(T.p("", { spacingAfter: 1200 }));
children.push(T.p("MANUEL DE PHYSIQUE-CHIMIE — CLASSE DE T9 (3e)", {
  bold: true, size: 30, color: T.GREEN, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(T.p("SÉANCE TÉMOIN — NOUVELLE MAQUETTE", {
  bold: true, size: 40, color: T.PINK, align: AlignmentType.CENTER, spacingAfter: 300,
}));
children.push(T.p("Séance 4 : Le poids d'un corps et le centre de gravité", {
  bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 500,
}));
children.push(T.p("Ce document montre la nouvelle présentation : écriture plus grande (12 pt), lignes aérées, explications très simples, formules encadrées, exemples calculés ligne par ligne et expérience illustrée.", {
  italics: true, size: 22, align: AlignmentType.CENTER, spacingAfter: 300,
}));
children.push(T.p("J-Learn • Édition 2026", { size: 22, color: "555555", align: AlignmentType.CENTER }));
children.push(T.pageBreak());

// ---------- en-tête de séance ----------
children.push(T.p(S.unite, { bold: true, size: 22, color: T.OCRE, spacingAfter: 60 }));
children.push(T.p(`Séance ${S.numero} — ${S.titre}`, { bold: true, size: 32, color: T.GREEN, spacingAfter: 200 }));
children.push(T.p("Ce que tu vas apprendre :", { bold: true, size: 24, spacingAfter: 80 }));
S.objectifs.forEach(o => children.push(T.puce([{ text: o }])));
children.push(T.p("", { spacingAfter: 120 }));

// ---------- leçon ----------
S.sections.forEach(sec => {
  children.push(T.titreSection(sec.titre));
  sec.blocs.forEach(b => {
    switch (b.type) {
      case "para":
        children.push(T.pHighlight(b.text, S.motsCles));
        break;
      case "puces":
        b.items.forEach(it => children.push(T.puce(it)));
        break;
      case "image":
        children.push(T.imagePara(IMG(b.src), b.w, b.h));
        if (b.legende) children.push(T.legende(b.legende));
        break;
      case "formule":
        children.push(T.encadreFormule(b.formule, b.legendes));
        children.push(T.p("", { spacingAfter: 120 }));
        break;
      case "exemple":
        T.blocExemple({
          titre: b.titre, enonce: b.enonce,
          image: b.image ? { src: IMG(b.image.src), w: b.image.w, h: b.image.h, legende: b.image.legende } : null,
          calcul: b.calcul, reponse: b.reponse, phrase: b.phrase,
        }).forEach(x => children.push(x));
        break;
      case "tableau":
        children.push(T.tableauComparatif(b.titres, b.lignes));
        children.push(T.p("", { spacingAfter: 120 }));
        break;
      case "attention":
        children.push(T.encadreAttention(b.text));
        children.push(T.p("", { spacingAfter: 120 }));
        break;
      case "saisTu":
        children.push(T.encadreSaisTu(b.text));
        children.push(T.p("", { spacingAfter: 120 }));
        break;
    }
  });
});

// ---------- expérience ----------
children.push(T.experienceIllustree({
  titre: S.experience.titre,
  intro: S.experience.intro,
  image: { src: IMG(S.experience.image.src), w: S.experience.image.w, h: S.experience.image.h, legende: S.experience.image.legende },
  materiel: S.experience.materiel,
  etapes: S.experience.etapes,
  observation: S.experience.observation,
  conclusion: S.experience.conclusion,
}));
children.push(T.pageBreak());

// ---------- exercices ----------
children.push(T.p("EXERCICES", { bold: true, size: 30, color: T.GREEN, spacingAfter: 120 }));
T.exosToParas(S.exercices).forEach(x => children.push(x));
children.push(T.pageBreak());
children.push(T.p("CORRIGÉS", { bold: true, size: 30, color: T.PINK, spacingAfter: 120 }));
T.corrigeToParas(S.exercices).forEach(x => children.push(x));

// ---------- document ----------
const doc = new T.Document({
  creator: "J-Learn",
  title: "Séance témoin 4 — Physique-Chimie T9 (nouvelle maquette)",
  description: "Séance témoin : nouvelle présentation lisible du manuel de Physique-Chimie T9 J-Learn.",
  styles: {
    default: { document: { run: { font: T.FONT, size: T.SIZE } } },
    paragraphStyles: [{
      id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { font: T.FONT, size: 32, bold: true, color: T.GREEN },
      paragraph: { spacing: { before: 240, after: 160 } },
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 1417, bottom: 1417, left: 1417, right: 1417 } } },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "J-Learn — Séance témoin PC T9 — page ", size: 18, font: T.FONT, color: "555555" }),
            new TextRun({ children: [PageNumber.CURRENT], size: 18, font: T.FONT, color: "555555" }),
          ],
        })],
      }),
    },
    children,
  }],
});

T.Packer.toBuffer(doc).then(buf => {
  const outDir = path.join(ROOT, "livrables");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, "Temoin_Seance4_PC_T9_JLearn.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
