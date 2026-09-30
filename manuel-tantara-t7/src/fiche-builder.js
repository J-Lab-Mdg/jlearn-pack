// fiche-builder.js — mandrafitra ny Paragraph[] ho an'ny fiche Tantara iray manontolo
// (takela-panomanan-desona + lesona + tahirin-kevitra + fanazaran-tena + valiny)
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");
const SARY = require("./sary-counter");
const IMG2 = require("./images2-map");
const IMG3 = require("./images3-map");
const EXO = require("./exo-images-map");
const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

function raOnlyParas(qa, opts = {}) {
  const { size = 18 } = opts;
  return qa.map(({ ra }) => B.pRuns([{ text: "V.A. : ", bold: true }, { text: ra }], { size, spacingAfter: 40 }));
}

function buildTakela(S, rootDir) {
  const steps = [];

  // I. Famerenana
  steps.push({
    etape: "I. Famerenana",
    enseignant: S.famerenana.qa.map(({ q }) => B.p(q, { italics: true, size: 22, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.famerenana.qa),
    technique: S.famerenana.technique,
    support: S.famerenana.support || "—",
  });

  // II. LESONA VAOVAO
  steps.push({ section: "II. LESONA VAOVAO" });

  steps.push({
    etape: "1. Fanentanana",
    enseignant: S.fanentanana.mpampianatra.map((t) => B.p(t, { size: 22, spacingAfter: 30 })),
    apprenants: [B.p(S.fanentanana.mpianatra, { size: 22, spacingAfter: 20 })],
    technique: S.fanentanana.technique,
    support: S.fanentanana.support,
  });

  steps.push({
    etape: "2. Fampahafantarana ny lesona",
    enseignant: [B.p(S.fampahafantarana.mpampianatra, { size: 22, spacingAfter: 20 })],
    apprenants: [B.p(S.fampahafantarana.mpianatra, { size: 22, spacingAfter: 20 })],
    technique: S.fampahafantarana.technique,
    support: S.fampahafantarana.support,
  });

  steps.push({
    etape: "3. Fandinihana ny tahirin-kevitra",
    enseignant: [B.p(S.fandinihana.mpampianatra, { size: 22, spacingAfter: 20 })],
    apprenants: [B.p(S.fandinihana.mpianatra, { size: 22, spacingAfter: 20 })],
    technique: S.fandinihana.technique,
    support: S.fandinihana.support,
  });

  steps.push({
    etape: "4. Famakafakana",
    enseignant: S.famakafakana.qa.map(({ q }) => B.p(q, { italics: true, size: 22, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.famakafakana.qa),
    technique: S.famakafakana.technique,
    support: S.famakafakana.support,
  });

  steps.push({
    etape: "5. Famintinana",
    enseignant: [B.p(S.famintinana.mpampianatra, { size: 22, spacingAfter: 20 })],
    apprenants: [B.p(S.famintinana.mpianatra, { size: 22, spacingAfter: 20 })],
    technique: S.famintinana.technique,
    support: S.famintinana.support,
  });

  steps.push({
    etape: "6. Fampiharana",
    enseignant: B.exosToParas(S.fampiharana),
    apprenants: B.corrigeToParas(S.fampiharana),
    technique: S.fampiharanaTechnique,
    support: S.fampiharanaSupport,
  });

  // III. Tombana
  steps.push({
    etape: "III. Tombana",
    enseignant: B.exosToParas(S.tombana),
    apprenants: B.corrigeToParas(S.tombana),
    technique: S.tombanaTechnique,
    support: S.tombanaSupport,
  });

  const meta = {
    discipline: "Tantara",
    theme: S.lohahevitra,
    titre: S.titre,
    objectif: "Amin'ny fiafaran'ny seho, ny mpianatra dia afaka " + S.tanjona.trim() + ".",
    documentation: S.fanovozanKevitra,
    support: S.fitaovana,
    classe: "T7",
    seanceNo: `${S.numero === 1 ? "voalohany" : "faha-" + S.numero} (${S.numero}/${S.total})`,
  };

  return [
    B.heading(`SEHO ${S.numero} / ${S.total}`, {
      anchorId: `seho${String(S.numero).padStart(2, "0")}`,
      size: 30, align: AlignmentType.CENTER, spacingAfter: 60,
    }),
    B.p(S.titre, { bold: true, size: 28, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.p("TAKELA-PANOMANAN-DESONA", { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.metaTable(meta),
    B.p("", { size: 10, spacingAfter: 60 }),
    B.deroulementTable(steps),
  ];
}

function pushImage(out, rootDir, image, legende, anchor) {
  const imgPath = path.join(rootDir, image);
  if (!fs.existsSync(imgPath)) return;
  const dim = sizeOf(imgPath);
  const w = 480;
  const h = Math.round(dim.height * (w / dim.width));
  out.push(B.imagePara(imgPath, w, h, { alt: legende || "Sary fanazavana" }));
  if (legende) out.push(B.legende(`Sary ${SARY.add(legende, anchor)} — ${legende}`));
}

function buildLesona(S, rootDir) {
  const anchor = `seho${String(S.numero).padStart(2, "0")}`;
  const out = [B.pageBreak()];
  out.push(B.p("LESONA", { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p(S.titre, { bold: true, size: 30, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));

  if (S.image) pushImage(out, rootDir, S.image, S.imageLegende, anchor);

  const kws = S.lesona.motsCles || [];
  for (const sec of S.lesona.sections) {
    out.push(B.p(sec.titre, { bold: true, size: 26, color: B.GREEN, spacingAfter: 80, spacingBefore: 80 }));
    (sec.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 24 })));
    (sec.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 24 })));
    for (const ss of sec.sousSections || []) {
      out.push(B.p(ss.titre, { bold: true, size: 24, spacingAfter: 60, spacingBefore: 60 }));
      (ss.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 24 })));
      (ss.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 24 })));
    }
  }

  // Sary faha-2 (famintinana an-tsary ny lesona)
  const im2 = IMG2[S.numero];
  if (im2) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    pushImage(out, rootDir, im2.image, im2.legende, anchor);
  }

  // Encadré « Fantatrao ve ? » : SUPPRIMÉ (décision J-Lab 2026-09-28) — plus aucun rendu.

  // Encadré « Tahirin-kevitra hodinihina » (document historique + questions)
  if (S.lesona.tahirinKevitra && S.lesona.tahirinKevitra.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.encadreExperience(S.lesona.tahirinKevitra.map(t =>
      B.p(t, { size: 24, spacingAfter: 40, italics: t.startsWith("«") }))));
  }

  // Sary faha-3 (ho an'ny lesona feno votoaty)
  const im3 = IMG3[S.numero];
  if (im3) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    pushImage(out, rootDir, im3.image, im3.legende, anchor);
  }

  // Rakibolana kely (petit lexique MG ⇄ terme officiel)
  if (S.rakibolana && S.rakibolana.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.p("Rakibolana kely", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
    const { cell, p } = B;
    const rows = [
      new TableRow({ children: [
        cell([p("Teny malagasy", { bold: true, size: 22, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
        cell([p("Terme officiel (français)", { bold: true, size: 22, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
      ]}),
      ...S.rakibolana.map(s => new TableRow({ children: [
        cell([p(s.mg, { size: 22, spacingAfter: 20 })], { width: 50 }),
        cell([p(s.fr, { size: 22, spacingAfter: 20 })], { width: 50 }),
      ]})),
    ];
    out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  }

  return out;
}

function buildFanazarantena(S, rootDir) {
  const anchor = `seho${String(S.numero).padStart(2, "0")}`;
  const out = [B.pageBreak()];
  const total = S.fanazarantena.reduce((a, e) => a + (e.points || 0), 0);
  out.push(B.p("FANAZARAN-TENA", { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.p(`Totaly : ${total} isa`, { italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.exosToParas(S.fanazarantena, { size: 24, numerote: true }));

  // Fanazaran-tena an-tsary (fanampiny, tsy isaina isa)
  const exo = EXO[S.numero];
  if (exo) {
    out.push(B.p("", { size: 10, spacingAfter: 60 }));
    out.push(B.p("FANAMPINY — FANAZARAN-TENA AN-TSARY (tsy isaina isa)", {
      bold: true, size: 24, color: B.GREEN, align: AlignmentType.CENTER, spacingAfter: 80,
    }));
    pushImage(out, rootDir, exo.image, exo.legende, anchor);
    exo.consigne.forEach(t => out.push(B.p(t, { size: 24, spacingAfter: 40 })));
  }

  out.push(B.p("", { size: 10, spacingAfter: 60 }));
  out.push(B.p("VALINY", { bold: true, size: 28, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.corrigeToParas(S.fanazarantena, { size: 24, numerote: true }));
  if (exo) {
    out.push(B.p("Valin'ny fanampiny an-tsary :", { bold: true, size: 24, color: B.PINK, spacingBefore: 80, spacingAfter: 40 }));
    exo.valiny.forEach(t => out.push(B.p(t, { size: 24, color: B.PINK, spacingAfter: 40 })));
  }
  return out;
}

function buildFiche(S, rootDir) {
  return [
    ...buildTakela(S, rootDir),
    ...buildLesona(S, rootDir),
    ...buildFanazarantena(S, rootDir),
  ];
}

// ---------- Seho manokana : Famerenana sy Fanadinana ----------
function buildFanadinana(S) {
  const out = [];
  out.push(B.heading(`SEHO ${S.numero} / ${S.total}`, {
    anchorId: `seho${String(S.numero).padStart(2, "0")}`,
    size: 30, align: AlignmentType.CENTER, spacingAfter: 60,
  }));
  out.push(B.p(S.titre, { bold: true, size: 28, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.p(S.lohahevitra, { italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 160 }));

  // I. Famerenana — ny tsara ho tadidina
  out.push(B.p("I. FAMERENANA — NY TSARA HO TADIDINA", { bold: true, size: 26, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.encadre("Famintinana", S.famerenana.map(t => B.p("\u2022 " + t, { size: 24, spacingAfter: 50 })), "E8F0E4", B.GREEN));
  out.push(B.p("", { size: 10, spacingAfter: 80 }));

  // II. Laza adina
  const total = S.laza.reduce((a, e) => a + (e.points || 0), 0);
  out.push(B.p("II. LAZA ADINA", { bold: true, size: 26, color: B.GREEN, spacingAfter: 40 }));
  out.push(B.p(`Totaly : ${total} isa — Fanamarihana : ny mpampianatra no mamaritra ny faharetan'ny adina.`, { italics: true, size: 24, spacingAfter: 100 }));
  S.laza.forEach((ex, i) => {
    out.push(B.p(`Fanontaniana faha ${i + 1}` + (ex.points ? ` (${ex.points} isa)` : ""), { bold: true, size: 24, spacingAfter: 40 }));
    out.push(B.p(ex.consigne, { italics: true, size: 24, spacingAfter: 30 }));
    (ex.items || []).forEach(it => out.push(B.p(it, { size: 24, spacingAfter: 20 })));
    out.push(B.p("", { size: 8, spacingAfter: 40 }));
  });

  // III. Valiny
  out.push(B.pageBreak());
  out.push(B.p("VALINY SY SEDRA FANITSIANA", { bold: true, size: 28, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  S.laza.forEach((ex, i) => {
    out.push(B.p(`Valin'ny fanontaniana faha ${i + 1}`, { bold: true, size: 24, color: B.PINK, spacingAfter: 40 }));
    (ex.corrige || []).forEach(ligne => {
      out.push(B.pRuns(ligne.map(seg => ({
        text: seg.text, bold: !!seg.bold || !!seg.cle,
        color: seg.cle ? B.PINK : (seg.color || B.BLACK),
      })), { size: 24, spacingAfter: 30 }));
    });
    out.push(B.p("", { size: 8, spacingAfter: 40 }));
  });
  return out;
}

module.exports = { buildFiche, buildTakela, buildLesona, buildFanazarantena, buildFanadinana };
