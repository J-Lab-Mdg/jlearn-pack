// temoin-builder.js — helpers « nouvelle maquette lisible » (12 pt, interligne 1,5)
// Réutilisable pour la refonte complète du manuel après validation du témoin.
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, PageBreak, ImageRun, Footer, PageNumber, HeadingLevel,
} = require("docx");

const FONT = "Times New Roman";
const BLACK = "000000", GREEN = "2E7D32", PINK = "C2185B", BLUE = "1565C0", OCRE = "B25000";
const SHADE_FORMULE = "E8F5E9", SHADE_SAIS = "E3F2FD", SHADE_EXP = "FFF3E0", SHADE_ATT = "FCE4EC";

const SIZE = 24;          // 12 pt
const LINE = 360;         // interligne 1,5
const SP = { line: LINE, lineRule: "auto" };

// ---------- paragraphes ----------
function p(text, opts = {}) {
  const {
    bold = false, italics = false, color = BLACK, size = SIZE,
    align = AlignmentType.LEFT, spacingAfter = 120, spacingBefore = 0, line = LINE,
  } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line, lineRule: "auto" },
    children: [new TextRun({ text, bold, italics, color, size, font: FONT })],
  });
}

function pRuns(segments, opts = {}) {
  const { align = AlignmentType.LEFT, spacingAfter = 120, spacingBefore = 0, size = SIZE, line = LINE } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore, line, lineRule: "auto" },
    children: segments.map(s => new TextRun({
      text: s.text, bold: !!s.bold, italics: !!s.italics,
      color: s.cle ? PINK : (s.color || BLACK), size: s.size || size, font: FONT,
    })),
  });
}

// mots-clés en bleu gras
function pHighlight(text, keywords, opts = {}) {
  const { size = SIZE, spacingAfter = 120 } = opts;
  const kws = (Array.isArray(keywords) ? keywords : [keywords]).filter(Boolean);
  if (!kws.length) return p(text, { size, spacingAfter });
  const pattern = kws.map(k => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .sort((a, b) => b.length - a.length).join("|");
  const regex = new RegExp(`(${pattern})`, "gi");
  const runs = text.split(regex).filter(x => x !== "").map(part =>
    kws.some(k => k.toLowerCase() === part.toLowerCase())
      ? new TextRun({ text: part, bold: true, color: BLUE, size, font: FONT })
      : new TextRun({ text: part, size, font: FONT, color: BLACK })
  );
  return new Paragraph({ spacing: { after: spacingAfter, line: LINE, lineRule: "auto" }, children: runs });
}

function puce(text, opts = {}) {
  return pRuns([{ text: "•  ", bold: true, color: GREEN }, ...(Array.isArray(text) ? text : [{ text }])],
    { spacingAfter: opts.spacingAfter ?? 80, size: opts.size || SIZE });
}

function pageBreak() { return new Paragraph({ children: [new PageBreak()] }); }

// ---------- images ----------
function imagePara(path, widthPx, heightPx, opts = {}) {
  const { align = AlignmentType.CENTER, spacingAfter = 80, spacingBefore = 120 } = opts;
  return new Paragraph({
    alignment: align,
    spacing: { after: spacingAfter, before: spacingBefore },
    children: [new ImageRun({ type: "png", data: fs.readFileSync(path), transformation: { width: widthPx, height: heightPx } })],
  });
}
function legende(text) {
  return p(text, { italics: true, size: 20, color: "555555", align: AlignmentType.CENTER, spacingAfter: 200, line: 240 });
}

// ---------- cellules ----------
const noneBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
function cell(children, opts = {}) {
  return new TableCell({
    width: opts.width ? { size: opts.width, type: WidthType.PERCENTAGE } : undefined,
    shading: opts.shading ? { fill: opts.shading, type: ShadingType.CLEAR, color: "auto" } : undefined,
    margins: { top: 120, bottom: 120, left: 160, right: 160 },
    children,
  });
}

// ---------- titres ----------
function titreSection(text) {
  return new Paragraph({
    spacing: { before: 280, after: 160, line: LINE, lineRule: "auto" },
    children: [new TextRun({ text, bold: true, size: 28, color: GREEN, font: FONT })],
  });
}

// ---------- ENCADRÉ FORMULE ----------
// formule en gros, centrée, dans un cadre vert ; légende des lettres dessous (dans le cadre)
function encadreFormule(formule, legendes) {
  const paras = [
    p(formule, { bold: true, size: 36, color: GREEN, align: AlignmentType.CENTER, spacingAfter: 160, line: 276 }),
    ...legendes.map(l => pRuns(
      [{ text: "•  ", bold: true, color: GREEN }, ...(Array.isArray(l) ? l : [{ text: l }])],
      { size: 22, spacingAfter: 40, align: AlignmentType.CENTER, line: 300 }
    )),
  ];
  return new Table({
    alignment: AlignmentType.CENTER,
    width: { size: 80, type: WidthType.PERCENTAGE },
    borders: {
      top: { style: BorderStyle.SINGLE, size: 18, color: GREEN },
      bottom: { style: BorderStyle.SINGLE, size: 18, color: GREEN },
      left: { style: BorderStyle.SINGLE, size: 18, color: GREEN },
      right: { style: BorderStyle.SINGLE, size: 18, color: GREEN },
    },
    rows: [new TableRow({ children: [cell(paras, { shading: SHADE_FORMULE, width: 100 })] })],
  });
}

// ---------- BLOC EXEMPLE (gabarit validé) ----------
// titre "Exemple" -> énoncé -> schéma -> calcul ligne par ligne -> réponse en gras rose -> phrase
// ex = { titre?, enonce, image: {src,w,h,legende}?, calcul: ["P = m × g", ...], reponse: "P = 250 N", phrase? }
function blocExemple(ex) {
  const out = [];
  out.push(new Paragraph({
    spacing: { before: 200, after: 100, line: LINE, lineRule: "auto" },
    children: [new TextRun({ text: ex.titre || "Exemple", bold: true, size: 26, color: OCRE, font: FONT })],
  }));
  out.push(p(ex.enonce, { spacingAfter: 100 }));
  if (ex.image) {
    out.push(imagePara(ex.image.src, ex.image.w, ex.image.h, { spacingBefore: 60, spacingAfter: 40 }));
    if (ex.image.legende) out.push(legende(ex.image.legende));
  }
  const indent = { left: 720 };
  (ex.calcul || []).forEach(ligne => {
    out.push(new Paragraph({
      spacing: { after: 60, line: 320, lineRule: "auto" },
      indent,
      children: [new TextRun({ text: ligne, size: 26, font: FONT })],
    }));
  });
  if (ex.reponse) {
    out.push(new Paragraph({
      spacing: { after: 100, line: 320, lineRule: "auto" },
      indent,
      children: [new TextRun({ text: ex.reponse, bold: true, size: 28, color: PINK, font: FONT })],
    }));
  }
  if (ex.phrase) out.push(p(ex.phrase, { italics: true, spacingAfter: 200 }));
  return out;
}

// ---------- encadrés ----------
function encadre(titre, contenuParas, shade, titleColor) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [new TableRow({ children: [
      cell([
        p(titre, { bold: true, size: 24, color: titleColor, spacingAfter: 80, line: 300 }),
        ...contenuParas,
      ], { shading: shade, width: 100 }),
    ] })],
  });
}
function encadreSaisTu(texte) {
  return encadre("Le savais-tu ?", [p(texte, { size: 22, spacingAfter: 40, line: 320 })], SHADE_SAIS, BLUE);
}
function encadreAttention(texte) {
  return encadre("Attention, piège !", [p(texte, { size: 22, spacingAfter: 40, line: 320 })], SHADE_ATT, PINK);
}

// ---------- EXPÉRIENCE ILLUSTRÉE ----------
// exp = { titre, image:{src,w,h,legende}, materiel:[..], etapes:[..], observation, conclusion }
function experienceIllustree(exp) {
  const paras = [];
  paras.push(p(exp.intro || "", { size: 22, italics: true, spacingAfter: 120, line: 320 }));
  if (exp.image) {
    paras.push(imagePara(exp.image.src, exp.image.w, exp.image.h, { spacingBefore: 40, spacingAfter: 40 }));
    if (exp.image.legende) paras.push(legende(exp.image.legende));
  }
  paras.push(p("Ce qu'il te faut :", { bold: true, size: 22, color: OCRE, spacingAfter: 60, line: 300 }));
  exp.materiel.forEach(m => paras.push(puce([{ text: m }], { size: 22 })));
  paras.push(p("Ce que tu fais :", { bold: true, size: 22, color: OCRE, spacingAfter: 60, spacingBefore: 120, line: 300 }));
  exp.etapes.forEach((e, i) => paras.push(pRuns(
    [{ text: `${i + 1}.  `, bold: true, color: OCRE }, { text: e }],
    { size: 22, spacingAfter: 60, line: 320 }
  )));
  if (exp.observation) paras.push(pRuns(
    [{ text: "Ce que tu observes : ", bold: true, color: BLUE }, { text: exp.observation }],
    { size: 22, spacingAfter: 60, line: 320 }
  ));
  if (exp.conclusion) paras.push(pRuns(
    [{ text: "Conclusion : ", bold: true, color: PINK }, { text: exp.conclusion, bold: true }],
    { size: 22, spacingAfter: 40, line: 320 }
  ));
  return encadre(exp.titre || "Expérience à la maison", paras, SHADE_EXP, OCRE);
}

// ---------- tableau comparatif simple (2 colonnes, en-tête vert) ----------
function tableauComparatif(titres, lignes) {
  const headRow = new TableRow({
    children: titres.map(t => new TableCell({
      shading: { fill: GREEN, type: ShadingType.CLEAR, color: "auto" },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      width: { size: 100 / titres.length, type: WidthType.PERCENTAGE },
      children: [p(t, { bold: true, color: "FFFFFF", align: AlignmentType.CENTER, spacingAfter: 0, line: 276 })],
    })),
  });
  const rows = lignes.map((lg, i) => new TableRow({
    children: lg.map(c => new TableCell({
      shading: i % 2 ? { fill: "F1F8E9", type: ShadingType.CLEAR, color: "auto" } : undefined,
      margins: { top: 80, bottom: 80, left: 140, right: 140 },
      children: [p(c, { size: 22, spacingAfter: 0, line: 300, align: AlignmentType.CENTER })],
    })),
  }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [headRow, ...rows] });
}

// ---------- exercices / corrigés en 12 pt ----------
function exosToParas(exos) {
  const out = [];
  exos.forEach((ex, i) => {
    out.push(p(`Exercice ${i + 1}` + (ex.points ? ` (${ex.points} points)` : ""), { bold: true, size: 24, color: GREEN, spacingAfter: 60, spacingBefore: 160 }));
    out.push(p(ex.consigne, { size: SIZE, spacingAfter: 60 }));
    (ex.items || []).forEach(it => out.push(p(it, { size: SIZE, spacingAfter: 40 })));
  });
  return out;
}
function corrigeToParas(exos) {
  const out = [];
  exos.forEach((ex, i) => {
    out.push(p(`Corrigé de l'exercice ${i + 1}`, { bold: true, size: 24, color: PINK, spacingAfter: 60, spacingBefore: 160 }));
    (ex.corrige || []).forEach(ligne => {
      if (typeof ligne === "string") out.push(p(ligne, { size: SIZE, spacingAfter: 40 }));
      else out.push(pRuns(ligne.map(seg => ({ text: seg.text, bold: !!seg.bold || !!seg.cle, cle: !!seg.cle })), { size: SIZE, spacingAfter: 40 }));
    });
  });
  return out;
}

// ---------- rendu générique d'une leçon v2 (sections -> blocs) ----------
// resolveImg(src) -> chemin absolu du fichier image
// opts.saisTuOut : tableau à remplir avec les textes des blocs saisTu (ils ne sont alors PAS rendus ici)
function renderSections(sections, motsCles, resolveImg, opts = {}) {
  const out = [];
  sections.forEach(sec => {
    out.push(titreSection(sec.titre));
    (sec.blocs || []).forEach(b => {
      switch (b.type) {
        case "para":
          out.push(pHighlight(b.text, motsCles || []));
          break;
        case "definition":
          out.push(pRuns([
            { text: "Définition — ", bold: true, color: GREEN },
            { text: b.def, bold: true },
          ], { spacingAfter: 80 }));
          if (b.simple) out.push(pRuns([
            { text: "Autrement dit : ", bold: true, color: OCRE },
            { text: b.simple },
          ], { spacingAfter: 140 }));
          break;
        case "puces":
          b.items.forEach(it => out.push(puce(it)));
          break;
        case "image":
          out.push(imagePara(resolveImg(b.src), b.w, b.h));
          if (b.legende) out.push(legende(b.legende));
          break;
        case "formule":
          out.push(encadreFormule(b.formule, b.legendes || []));
          out.push(p("", { spacingAfter: 120 }));
          break;
        case "exemple":
          blocExemple({
            titre: b.titre, enonce: b.enonce,
            image: b.image ? { src: resolveImg(b.image.src), w: b.image.w, h: b.image.h, legende: b.image.legende } : null,
            calcul: b.calcul, reponse: b.reponse, phrase: b.phrase,
          }).forEach(x => out.push(x));
          break;
        case "tableau":
          out.push(tableauComparatif(b.titres, b.lignes));
          out.push(p("", { spacingAfter: 120 }));
          break;
        case "attention":
          out.push(encadreAttention(b.text));
          out.push(p("", { spacingAfter: 120 }));
          break;
        case "saisTu":
          if (opts.saisTuOut) {
            opts.saisTuOut.push(b.text);
          } else {
            out.push(encadreSaisTu(b.text));
            out.push(p("", { spacingAfter: 120 }));
          }
          break;
      }
    });
  });
  return out;
}

function renderExperience(exp, resolveImg) {
  return experienceIllustree({
    titre: exp.titre, intro: exp.intro,
    image: exp.image ? { src: resolveImg(exp.image.src), w: exp.image.w, h: exp.image.h, legende: exp.image.legende } : null,
    materiel: exp.materiel, etapes: exp.etapes,
    observation: exp.observation, conclusion: exp.conclusion,
  });
}

module.exports = {
  renderSections, renderExperience,
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, ShadingType, Footer, PageNumber, HeadingLevel,
  FONT, BLACK, GREEN, PINK, BLUE, OCRE, SIZE, LINE,
  p, pRuns, pHighlight, puce, pageBreak, imagePara, legende, cell, titreSection,
  encadreFormule, blocExemple, encadre, encadreSaisTu, encadreAttention,
  experienceIllustree, tableauComparatif, exosToParas, corrigeToParas,
};
