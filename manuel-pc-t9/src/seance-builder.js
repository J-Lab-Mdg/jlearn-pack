// seance-builder.js — construit les Paragraph[] d'une séance complète (fiche + leçon + exercices + corrigé)
const B = require("./builders");
const T = require("./temoin-builder");
const LECONS2 = require("./lecons-v2");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");
const sizeOf = (p) => {
  // lecture dimensions PNG (IHDR)
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

function qaParas(qa, opts = {}) {
  const { size = 18 } = opts;
  const out = [];
  qa.forEach(({ q, ra }) => {
    out.push(B.pRuns([{ text: q, italics: true }], { size, spacingAfter: 20 }));
    out.push(B.pRuns([{ text: "R.A. : ", bold: true }, { text: ra }], { size, spacingAfter: 40 }));
  });
  return out;
}

function raOnlyParas(qa, opts = {}) {
  const { size = 18 } = opts;
  return qa.map(({ ra }) => B.pRuns([{ text: "R.A. : ", bold: true }, { text: ra }], { size, spacingAfter: 40 }));
}

function buildFiche(S, rootDir) {
  const steps = [];

  // I. Révision
  steps.push({
    etape: "I. Révision",
    enseignant: S.revision.qa.map(({ q }) => B.p(q, { italics: true, size: 18, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.revision.qa),
    technique: S.revision.technique,
    support: S.revision.support || "—",
  });

  // II. NOUVELLE LEÇON — ligne de section
  steps.push({ section: "II. NOUVELLE LEÇON" });

  // 1. Mise en situation
  steps.push({
    etape: "1. Mise en situation",
    enseignant: S.miseEnSituation.enseignant.map((t, i) =>
      B.p(t, { size: 18, spacingAfter: 30, italics: t.startsWith("R.A.") ? false : i > 0 && !t.startsWith("R.A.") })),
    apprenants: [B.p(S.miseEnSituation.apprenants, { size: 18, spacingAfter: 20 })],
    technique: S.miseEnSituation.technique,
    support: S.miseEnSituation.support,
  });

  // 2. Présentation
  steps.push({
    etape: "2. Présentation",
    enseignant: [B.p(S.presentation.enseignant, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.presentation.apprenants, { size: 18, spacingAfter: 20 })],
    technique: S.presentation.technique,
    support: S.presentation.support,
  });

  // 3. Observation
  steps.push({
    etape: "3. Observation",
    enseignant: [B.p(S.observation.enseignant, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.observation.apprenants, { size: 18, spacingAfter: 20 })],
    technique: S.observation.technique,
    support: S.observation.support,
  });

  // 4. Analyse
  steps.push({
    etape: "4. Analyse",
    enseignant: S.analyse.qa.map(({ q }) => B.p(q, { italics: true, size: 18, spacingAfter: 30 })),
    apprenants: raOnlyParas(S.analyse.qa),
    technique: S.analyse.technique,
    support: S.analyse.support,
  });

  // 5. Synthèse
  steps.push({
    etape: "5. Synthèse",
    enseignant: [B.p(S.synthese.enseignant, { size: 18, spacingAfter: 20 })],
    apprenants: [B.p(S.synthese.apprenants, { size: 18, spacingAfter: 20 })],
    technique: S.synthese.technique,
    support: S.synthese.support,
  });

  // 6. Application
  steps.push({
    etape: "6. Application",
    enseignant: B.exosToParas(S.application),
    apprenants: B.corrigeToParas(S.application),
    technique: S.applicationTechnique,
    support: S.applicationSupport,
  });

  // III. Évaluation
  steps.push({
    etape: "III. Évaluation",
    enseignant: B.exosToParas(S.evaluation),
    apprenants: B.corrigeToParas(S.evaluation),
    technique: S.evaluationTechnique,
    support: S.evaluationSupport,
  });

  const meta = {
    discipline: "Sciences Physiques",
    sousDiscipline: "Physique-Chimie",
    theme: S.theme,
    titre: S.titre,
    objectif: (() => {
      const o = S.objectif.trim();
      const el = /^[aeéèêiouyh]/i.test(o) ? "d'" : "de ";
      return "À la fin de la séance, l'apprenant sera capable " + el + o + ".";
    })(),
    documentation: S.documentation,
    support: S.support,
    classe: "T9",
    seanceNo: `${S.numero} / ${S.total}`,
  };

  return [
    B.heading(`SÉANCE ${S.numero} / ${S.total}`, {
      anchorId: `seance${String(S.numero).padStart(2, "0")}`,
      size: 30, align: AlignmentType.CENTER, spacingAfter: 60,
    }),
    B.p(S.titre, { bold: true, size: 26, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.p("FICHE DE PRÉPARATION", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 160 }),
    B.metaTable(meta),
    B.p("", { size: 10, spacingAfter: 60 }),
    B.deroulementTable(steps),
  ];
}

// ---------- leçon « nouvelle maquette lisible » (12 pt, blocs) ----------
function buildLeconV2(S, L2, rootDir) {
  const resolveImg = (src) => path.join(rootDir, "images", src);
  const out = [B.pageBreak()];
  out.push(T.p("LEÇON", { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(T.p(S.titre, { bold: true, size: 32, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }));

  // Image d'illustration en tête de leçon (conservée)
  if (S.image) {
    const imgPath = path.join(rootDir, S.image);
    if (fs.existsSync(imgPath)) {
      const dim = sizeOf(imgPath);
      const w = 480;
      const h = Math.round(dim.height * (w / dim.width));
      out.push(T.imagePara(imgPath, w, h, { spacingBefore: 40 }));
      if (S.imageLegende) out.push(T.legende(S.imageLegende));
    }
  }

  // Objectifs « Ce que tu vas apprendre »
  if (L2.objectifs && L2.objectifs.length) {
    out.push(T.p("Ce que tu vas apprendre :", { bold: true, size: 24, spacingAfter: 80 }));
    L2.objectifs.forEach(o => out.push(T.puce([{ text: o }])));
    out.push(T.p("", { spacingAfter: 80 }));
  }

  // Sections en blocs
  out.push(...T.renderSections(L2.sections, L2.motsCles || [], resolveImg));

  // Expérience illustrée
  if (L2.experience) {
    out.push(T.p("", { spacingAfter: 60 }));
    out.push(T.renderExperience(L2.experience, resolveImg));
  }

  // Tableau Matériel de substitution (conservé)
  if (S.substitutions && S.substitutions.length) {
    out.push(B.p("", { size: 10, spacingAfter: 120 }));
    out.push(B.p("Matériel de substitution", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
    const { cell, p } = B;
    const rows = [
      new TableRow({ children: [
        cell([p("Matériel du programme", { bold: true, size: 20, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
        cell([p("Équivalent local", { bold: true, size: 20, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
      ]}),
      ...S.substitutions.map(s => new TableRow({ children: [
        cell([p(s.officiel, { size: 20, spacingAfter: 20 })], { width: 50 }),
        cell([p(s.local, { size: 20, spacingAfter: 20 })], { width: 50 }),
      ]})),
    ];
    out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  }

  return out;
}

function buildLecon(S, rootDir) {
  const L2 = LECONS2[S.numero];
  if (L2) return buildLeconV2(S, L2, rootDir);
  const out = [B.pageBreak()];
  out.push(B.p("LEÇON", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p(S.titre, { bold: true, size: 28, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));

  // Image en tête de leçon
  if (S.image) {
    const imgPath = path.join(rootDir, S.image);
    if (fs.existsSync(imgPath)) {
      const dim = sizeOf(imgPath);
      const w = 480; // ~12,7 cm dans la page
      const h = Math.round(dim.height * (w / dim.width));
      out.push(B.imagePara(imgPath, w, h));
      if (S.imageLegende) out.push(B.legende(S.imageLegende));
    }
  }

  const kws = S.lecon.motsCles || [];
  for (const sec of S.lecon.sections) {
    out.push(B.p(sec.titre, { bold: true, size: 24, color: B.GREEN, spacingAfter: 80, spacingBefore: 80 }));
    (sec.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 22 })));
    (sec.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 22 })));
    for (const ss of sec.sousSections || []) {
      out.push(B.p(ss.titre, { bold: true, size: 22, spacingAfter: 60, spacingBefore: 60 }));
      (ss.paras || []).forEach(t => out.push(B.pHighlight(t, kws, { size: 22 })));
      (ss.puces || []).forEach(t => out.push(B.pHighlight("• " + t, kws, { size: 22 })));
    }
  }

  // Encadré "Le savais-tu ?"
  if (S.lecon.saisTu && S.lecon.saisTu.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.encadreSaisTu(S.lecon.saisTu.map(t => B.p(t, { size: 20, spacingAfter: 40 }))));
  }

  // Encadré "Expérience à la maison"
  if (S.lecon.experience && S.lecon.experience.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.encadreExperience(S.lecon.experience.map(t => B.p(t, { size: 20, spacingAfter: 40 }))));
  }

  // Tableau Matériel de substitution
  if (S.substitutions && S.substitutions.length) {
    out.push(B.p("", { size: 10, spacingAfter: 40 }));
    out.push(B.p("Matériel de substitution", { bold: true, size: 21, color: B.GREEN, spacingAfter: 60 }));
    const { cell, p } = B;
    const rows = [
      new TableRow({ children: [
        cell([p("Matériel du programme", { bold: true, size: 19, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
        cell([p("Équivalent local", { bold: true, size: 19, spacingAfter: 20 })], { shading: "EEEEEE", width: 50 }),
      ]}),
      ...S.substitutions.map(s => new TableRow({ children: [
        cell([p(s.officiel, { size: 19, spacingAfter: 20 })], { width: 50 }),
        cell([p(s.local, { size: 19, spacingAfter: 20 })], { width: 50 }),
      ]})),
    ];
    out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  }

  return out;
}

function buildExercices(S) {
  const L2 = LECONS2[S.numero];
  const exos = (L2 && L2.exercices) ? L2.exercices : S.exercicesNotes;
  const out = [B.pageBreak()];
  const total = exos.reduce((a, e) => a + (e.points || 0), 0);
  out.push(T.p("EXERCICES", { bold: true, size: 28, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(T.p(`Total : ${total} points`, { italics: true, size: 22, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...T.exosToParas(exos));
  out.push(T.p("", { spacingAfter: 60 }));
  out.push(T.p("CORRIGÉ", { bold: true, size: 28, color: B.PINK, align: AlignmentType.CENTER, spacingAfter: 120 }));
  out.push(...T.corrigeToParas(exos));
  return out;
}

function buildSeance(S, rootDir) {
  return [
    ...buildFiche(S, rootDir),
    ...buildLecon(S, rootDir),
    ...buildExercices(S),
  ];
}

module.exports = { buildSeance, buildFiche, buildLecon, buildExercices, qaParas };
