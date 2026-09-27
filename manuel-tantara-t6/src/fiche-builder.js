// fiche-builder.js — mandrafitra ny Paragraph[] ho an'ny fiche Tantara iray manontolo
// (takela-panomanan-desona + lesona + tahirin-kevitra + fanazaran-tena + valiny)
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");
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
    enseignant: S.famerenana.qa.map(({ q }) => B.p(q, { italics: true, size: 18, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.famerenana.qa),
    technique: S.famerenana.technique,
    support: S.famerenana.support || "—",
  });

  // II. LESONA VAOVAO
  steps.push({ section: "II. LESONA VAOVAO" });

  steps.push({
    etape: "1. Fanentanana",
    enseignant: S.fanentanana.mpampianatra.map((t) => B.p(t, { size: 18, spacingAfter: 30 })),
    apprenants: [B.p(S.fanentanana.mpianatra, { size: 18, spacingAfter: 20 })],
    technique: S.fanentanana.technique,
    support: S.fanentanana.support,
  });

  steps.push({
    etape: "2. Fampahafantarana ny lesona",
    enseignant: [B.p(S.fampahafantarana.mpampianatra, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.fampahafantarana.mpianatra, { size: 18, spacingAfter: 20 })],
    technique: S.fampahafantarana.technique,
    support: S.fampahafantarana.support,
  });

  steps.push({
    etape: "3. Fandinihana ny tahirin-kevitra",
    enseignant: [B.p(S.fandinihana.mpampianatra, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.fandinihana.mpianatra, { size: 18, spacingAfter: 20 })],
    technique: S.fandinihana.technique,
    support: S.fandinihana.support,
  });

  steps.push({
    etape: "4. Famakafakana",
    enseignant: S.famakafakana.qa.map(({ q }) => B.p(q, { italics: true, size: 18, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.famakafakana.qa),
    technique: S.famakafakana.technique,
    support: S.famakafakana.support,
  });

  steps.push({
    etape: "5. Famintinana",
    enseignant: [B.p(S.famintinana.mpampianatra, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.famintinana.mpianatra, { size: 18, spacingAfter: 20 })],
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
    sousDiscipline: "Histoire",
    theme: S.lohahevitra,
    titre: S.titre,
    objectif: "Amin'ny fiafaran'ny seansa, ny mpianatra dia afaka " + S.tanjona.trim() + ".",
    documentation: S.fanovozanKevitra,
    support: S.fitaovana,
    classe: "T6",
    seanceNo: `${S.numero} / ${S.total}`,
  };

  return [
    B.heading(`SEANSA ${S.numero} / ${S.total}`, {
      anchorId: `seansa${String(S.numero).padStart(2, "0")}`,
      size: 30, align: AlignmentType.CENTER, spacingAfter: 60,
    }),
    B.p(S.titre, { bold: true, size: 26, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.p("TAKELA-PANOMANAN-DESONA", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.metaTable(meta),
    B.p("", { size: 10, spacingAfter: 60 }),
    B.deroulementTable(steps),
  ];
}

function buildLesona(S, rootDir) {
  const out = [B.pageBreak()];
  out.push(B.p("LESONA", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p(S.titre, { bold: true, size: 28, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));

  if (S.image) {
    const imgPath = path.join(rootDir, S.image);
    if (fs.existsSync(imgPath)) {
      const dim = sizeOf(imgPath);
      const w = 480;
      const h = Math.round(dim.height * (w / dim.width));
      out.push(B.imagePara(imgPath, w, h));
      if (S.imageLegende) out.push(B.legende(S.imageLegende));
    }
  }

  const kws = S.lesona.motsCles || [];
  for (const sec of S.lesona.sections) {
    out.push(B.p(sec.titre, { bold: true, size: 24, color: B.GREEN, spacingAfter: 80, spacingBefore: 80 }));
    (sec.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 22 })));
    (sec.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 22 })));
    for (const ss of sec.sousSections || []) {
      out.push(B.p(ss.titre, { bold: true, size: 22, spacingAfter: 60, spacingBefore: 60 }));
      (ss.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 22 })));
      (ss.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 22 })));
    }
  }

  // Encadré « Fantatrao ve ? »
  if (S.lesona.fantatraoVe && S.lesona.fantatraoVe.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.encadreSaisTu(S.lesona.fantatraoVe.map(t => B.p(t, { size: 20, spacingAfter: 40 }))));
  }

  // Encadré « Tahirin-kevitra hodinihina » (document historique + questions)
  if (S.lesona.tahirinKevitra && S.lesona.tahirinKevitra.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.encadreExperience(S.lesona.tahirinKevitra.map(t =>
      B.p(t, { size: 20, spacingAfter: 40, italics: t.startsWith("«") }))));
  }

  // Rakibolana kely (petit lexique MG ⇄ terme officiel)
  if (S.rakibolana && S.rakibolana.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.p("Rakibolana kely", { bold: true, size: 21, color: B.GREEN, spacingAfter: 60 }));
    const { cell, p } = B;
    const rows = [
      new TableRow({ children: [
        cell([p("Teny malagasy", { bold: true, size: 19, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
        cell([p("Terme officiel (français)", { bold: true, size: 19, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
      ]}),
      ...S.rakibolana.map(s => new TableRow({ children: [
        cell([p(s.mg, { size: 19, spacingAfter: 20 })], { width: 50 }),
        cell([p(s.fr, { size: 19, spacingAfter: 20 })], { width: 50 }),
      ]})),
    ];
    out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  }

  return out;
}

function buildFanazarantena(S) {
  const out = [B.pageBreak()];
  const total = S.fanazarantena.reduce((a, e) => a + (e.points || 0), 0);
  out.push(B.p("FANAZARAN-TENA", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.p(`Totaly : ${total} isa`, { italics: true, size: 20, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.exosToParas(S.fanazarantena, { size: 20, numerote: true }));
  out.push(B.p("", { size: 10, spacingAfter: 60 }));
  out.push(B.p("VALINY", { bold: true, size: 26, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...B.corrigeToParas(S.fanazarantena, { size: 20, numerote: true }));
  return out;
}

function buildFiche(S, rootDir) {
  return [
    ...buildTakela(S, rootDir),
    ...buildLesona(S, rootDir),
    ...buildFanazarantena(S),
  ];
}

module.exports = { buildFiche, buildTakela, buildLesona, buildFanazarantena };
