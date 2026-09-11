// special-builder.js — séances de révision, sujets d'examen d'unité et examen blanc final
const B = require("./builders");
const { AlignmentType } = require("docx");
const path = require("path");
const fs = require("fs");

const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

function header(S) {
  return [
    B.heading(`SÉANCE ${S.numero} / ${S.total}`, {
      anchorId: `seance${String(S.numero).padStart(2, "0")}`,
      size: 30, align: AlignmentType.CENTER, spacingAfter: 60,
    }),
    B.p(S.titre, { bold: true, size: 26, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }),
  ];
}

function maybeImage(S, rootDir, out) {
  if (!S.image) return;
  const imgPath = path.join(rootDir, S.image);
  if (!fs.existsSync(imgPath)) return;
  const dim = sizeOf(imgPath);
  const w = 420;
  const h = Math.round(dim.height * (w / dim.width));
  out.push(B.imagePara(imgPath, w, h));
  if (S.imageLegende) out.push(B.legende(S.imageLegende));
}

// ---------- Séance de révision ----------
function buildRevision(S, rootDir) {
  const out = [...header(S)];
  maybeImage(S, rootDir, out);

  out.push(B.p("Objectif : réactiver et consolider toutes les connaissances de l'unité avant l'examen.", {
    italics: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 160,
  }));

  // L'essentiel à retenir
  out.push(B.p("L'ESSENTIEL À RETENIR", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 120 }));
  for (const bloc of S.recap) {
    out.push(B.p(bloc.ref, { bold: true, size: 22, color: B.GREEN, spacingAfter: 60, spacingBefore: 60 }));
    (bloc.points || []).forEach(t => out.push(B.pHighlight("• " + t, bloc.motsCles || [], { size: 21 })));
  }

  // Exercices de révision + corrigé
  out.push(B.pageBreak());
  const total = S.exercices.reduce((a, e) => a + (e.points || 0), 0);
  out.push(B.p("EXERCICES DE RÉVISION", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.p(`Total : ${total} points`, { italics: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.exosToParas(S.exercices, { size: 20, numerote: true }));
  out.push(B.p("", { size: 10, spacingAfter: 60 }));
  out.push(B.p("CORRIGÉ", { bold: true, size: 26, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.corrigeToParas(S.exercices, { size: 20, numerote: true }));
  return out;
}

// ---------- Sujet d'examen (unité ou examen blanc) ----------
function buildExamen(S, rootDir) {
  const out = [...header(S)];
  const total = S.exercices.reduce((a, e) => a + (e.points || 0), 0);

  out.push(B.p(S.sousTitre || "SUJET D'EXAMEN", { bold: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p(`Note : …… / ${total}`, { bold: true, size: 22, align: AlignmentType.CENTER, spacingAfter: 60 }));
  if (S.consignes && S.consignes.length) {
    out.push(B.p("Consignes :", { bold: true, size: 20, spacingAfter: 40 }));
    S.consignes.forEach(t => out.push(B.p("• " + t, { size: 20, spacingAfter: 30 })));
    out.push(B.p("", { size: 10, spacingAfter: 60 }));
  }
  out.push(...B.exosToParas(S.exercices, { size: 20, numerote: true }));

  // Corrigé sur page séparée
  out.push(B.pageBreak());
  out.push(B.p("CORRIGÉ ET BARÈME", { bold: true, size: 26, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.corrigeToParas(S.exercices, { size: 20, numerote: true }));
  return out;
}

function buildSpeciale(S, rootDir) {
  if (S.type === "revision") return buildRevision(S, rootDir);
  return buildExamen(S, rootDir);
}

module.exports = { buildSpeciale, buildRevision, buildExamen };
