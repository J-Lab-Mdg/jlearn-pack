// ============================================================
// builders.js — Système de construction docx — Normes skill v18
// Manuel Français 11e (CP1) — Collection J-Learn
// ============================================================
const {
  Paragraph, TextRun, Table, TableRow, TableCell, WidthType, AlignmentType,
  BorderStyle, VerticalAlign, ShadingType, PageBreak, Bookmark,
  InternalHyperlink, ImageRun, HeadingLevel,
} = require("docx");

const FONT = "Times New Roman";
const COLORS = {
  rouge: "C00000",   // titre de la leçon
  vert: "1E7B34",    // sous-titres de la leçon
  bleu: "1F4E79",    // mots clés de la leçon
  rose: "E9704F",    // mots clés du corrigé
  noir: "000000",
  gris: "F2F2F2",    // fond lignes de section du déroulement
};

// Durées fixes validées (30 min officielles — FRA Français 11e, répartition proportionnelle 1:6:1)
const DUREE = { rev: "3 min", nl: "22 min", eval: "5 min", totale: "30 minutes" };

// ---------- Bordures ----------
const B_NONE = { style: BorderStyle.NONE, size: 0, color: "auto" };
const B_VIS = { style: BorderStyle.SINGLE, size: 4, color: "000000" };
const noBorders = { top: B_NONE, bottom: B_NONE, left: B_NONE, right: B_NONE, insideHorizontal: B_NONE, insideVertical: B_NONE };
const gridBorders = { top: B_VIS, bottom: B_VIS, left: B_VIS, right: B_VIS, insideHorizontal: B_VIS, insideVertical: B_VIS };

// ---------- Runs ----------
// seg : string | { t, k(mot clé bleu), r(rose corrigé), b(bold), i(italic), color, size }
function segRuns(segs, base = {}) {
  const list = Array.isArray(segs) ? segs : [segs];
  return list.map((s) => {
    if (typeof s === "string") {
      return new TextRun({ text: s, font: FONT, size: base.size || 24, bold: base.bold || false, italics: base.i || false, color: base.color || COLORS.noir });
    }
    const color = s.k ? COLORS.bleu : s.r ? COLORS.rose : s.color || base.color || COLORS.noir;
    const bold = s.k || s.r || s.b || base.bold || false;
    return new TextRun({ text: s.t, font: FONT, size: s.size || base.size || 24, bold, italics: s.i || false, color });
  });
}

function p(segs, opts = {}) {
  return new Paragraph({
    children: segRuns(segs, opts.base || {}),
    alignment: opts.align,
    spacing: opts.spacing || { after: 80 },
    ...opts.extra,
  });
}

function pageBreakPara() {
  return new Paragraph({ children: [new PageBreak()] });
}

function bookmarkPara(id, segs, opts = {}) {
  const runs = segRuns(segs, opts.base || {});
  return new Paragraph({
    children: [new Bookmark({ id, children: runs })],
    alignment: opts.align,
    spacing: opts.spacing || { before: 120, after: 160 },
  });
}

// ---------- Méta-table (bordures invisibles, infos à gauche / Date-Classe-Séance-Durée à droite) ----------
function metaTable(m) {
  const W = [2300, 3400, 1900, 2100];
  const cell = (children, span, w) =>
    new TableCell({
      children,
      columnSpan: span,
      width: w ? { size: w, type: WidthType.DXA } : undefined,
      borders: { top: B_NONE, bottom: B_NONE, left: B_NONE, right: B_NONE },
      verticalAlign: VerticalAlign.CENTER,
      margins: { top: 40, bottom: 40, left: 60, right: 60 },
    });
  const row = (cells) => new TableRow({ children: cells });
  const label = (t) => p([{ t, b: true }], { base: { size: 22 }, spacing: { after: 0 } });
  const val = (segs) => p(segs, { base: { size: 22 }, spacing: { after: 0 } });
  return new Table({
    width: { size: W.reduce((a, b) => a + b, 0), type: WidthType.DXA },
    columnWidths: W,
    borders: noBorders,
    rows: [
      row([cell([label("Discipline :")], 1, W[0]), cell([val(m.discipline)], 1, W[1]), cell([label("Date :")], 1, W[2]), cell([val("________________")], 1, W[3])]),
      row([cell([label("Sous-discipline :")], 1, W[0]), cell([val(m.sousDiscipline)], 1, W[1]), cell([label("Classe :")], 1, W[2]), cell([val(m.classe)], 1, W[3])]),
      row([cell([label("Thème :")], 1, W[0]), cell([val(m.theme)], 1, W[1]), cell([label("Séance n° :")], 1, W[2]), cell([val(m.seanceNum)], 1, W[3])]),
      row([cell([label("Titre :")], 1, W[0]), cell([val(m.titreFiche)], 1, W[1]), cell([label("Durée :")], 1, W[2]), cell([val(DUREE.totale)], 1, W[3])]),
      row([cell([label("Objectif spécifique :")], 1, W[0]), cell([val(m.objectif)], 3, W[1] + W[2] + W[3])]),
      row([cell([label("Documentation :")], 1, W[0]), cell([val(m.documentation)], 3, W[1] + W[2] + W[3])]),
      row([cell([label("Support et matériel :")], 1, W[0]), cell([val(m.supportFiche)], 3, W[1] + W[2] + W[3])]),
    ],
  });
}

// ---------- Table de déroulement — 6 colonnes, 2 lignes d'en-tête, structure I / II (1-6) / III ----------
function stepCell(children, w, opts = {}) {
  return new TableCell({
    children,
    width: { size: w, type: WidthType.DXA },
    columnSpan: opts.span,
    rowSpan: opts.rowSpan,
    borders: { top: B_VIS, bottom: B_VIS, left: B_VIS, right: B_VIS },
    verticalAlign: VerticalAlign.CENTER,
    shading: opts.fill ? { type: ShadingType.CLEAR, fill: opts.fill } : undefined,
    margins: { top: 60, bottom: 60, left: 80, right: 80 },
  });
}
function cellParas(content, base = {}) {
  // content : segs (un paragraphe) OU { paras: [segs, ...] } (plusieurs paragraphes)
  if (content && typeof content === "object" && Array.isArray(content.paras)) {
    return content.paras.map((segs) => p(segs, { base, spacing: { after: 40 } }));
  }
  return [p(content, { base, spacing: { after: 40 } })];
}
function sCell(segs, w, opts = {}) {
  return stepCell(cellParas(segs, { size: 19 }), w, opts);
}

function deroulementTable(sd) {
  // sd = données de la séance (révision, sousEtapes[6], evaluation)
  const W = [1700, 2500, 2050, 1500, 1250, 700];
  const total = W.reduce((a, b) => a + b, 0);

  // En-tête ligne 1 + 2
  const head1 = new TableRow({
    tableHeader: true,
    children: [
      sCell([{ t: "Étapes et Durée", b: true }], W[0], { rowSpan: 2, fill: COLORS.gris }),
      sCell([{ t: "Déroulement de la leçon", b: true }], W[1] + W[2], { span: 2, fill: COLORS.gris }),
      sCell([{ t: "Technique et Stratégie", b: true }], W[3], { rowSpan: 2, fill: COLORS.gris }),
      sCell([{ t: "Support et Matériel", b: true }], W[4], { rowSpan: 2, fill: COLORS.gris }),
      sCell([{ t: "Observation", b: true }], W[5], { rowSpan: 2, fill: COLORS.gris }),
    ],
  });
  const head2 = new TableRow({
    tableHeader: true,
    children: [
      sCell([{ t: "Enseignant", b: true }], W[1], { fill: COLORS.gris }),
      sCell([{ t: "Apprenants", b: true }], W[2], { fill: COLORS.gris }),
    ],
  });

  // I. Révision
  const rowI = new TableRow({
    children: [
      sCell([{ t: "I. Révision", b: true }, { t: " — " + DUREE.rev }], W[0]),
      sCell(sd.revision.ens, W[1]),
      sCell(sd.revision.app, W[2]),
      sCell(sd.revision.technique, W[3]),
      sCell("—", W[4]), // exception règle skill : pas de support consultable en Révision
      sCell("", W[5]),
    ],
  });

  // II. NOUVELLE LEÇON — ligne de section fusionnée (colspan 6)
  const rowIISection = new TableRow({
    children: [stepCell([p([{ t: "II. NOUVELLE LEÇON", b: true }, { t: " — " + DUREE.nl }], { base: { size: 20 }, spacing: { after: 0 }, align: AlignmentType.LEFT })], W.reduce((a, b) => a + b, 0), { span: 6, fill: COLORS.gris })],
  });

  const sousEtapes = [
    ["1. Mise en situation", sd.miseEnSituation],
    ["2. Présentation", sd.presentation],
    ["3. Observation", sd.observation],
    ["4. Analyse", sd.analyse],
    ["5. Synthèse", sd.synthese],
    ["6. Application", sd.application],
  ];
  const subRows = sousEtapes.map(([nom, st]) =>
    new TableRow({
      children: [
        sCell([{ t: nom, b: true }], W[0]),
        sCell(st.ens, W[1]),
        sCell(st.app, W[2]),
        sCell(st.technique, W[3]),
        sCell(st.support || "Tableau noir", W[4]),
        sCell(st.observation || "", W[5]),
      ],
    })
  );

  // III. Évaluation
  const rowIII = new TableRow({
    children: [
      sCell([{ t: "III. Évaluation", b: true }, { t: " — " + DUREE.eval }], W[0]),
      sCell(sd.evaluation.ens, W[1]),
      sCell(sd.evaluation.app, W[2]),
      sCell(sd.evaluation.technique, W[3]),
      sCell(sd.evaluation.support || "Tableau noir", W[4]),
      sCell("", W[5]),
    ],
  });

  return new Table({
    width: { size: total, type: WidthType.DXA },
    columnWidths: W,
    borders: gridBorders,
    rows: [head1, head2, rowI, rowIISection, ...subRows, rowIII],
  });
}

// ---------- Leçon ----------
// lecon = { titre, subs:[{ t, paras:[segs] }], retenir:[segs] }
function leconParas(lecon) {
  const out = [];
  out.push(p([{ t: lecon.titre, b: true }], { base: { size: 28, color: COLORS.rouge }, spacing: { before: 160, after: 120 } }));
  for (const sub of lecon.subs) {
    out.push(p([{ t: sub.t, b: true }], { base: { size: 24, color: COLORS.vert }, spacing: { before: 120, after: 60 } }));
    for (const para of sub.paras) out.push(p(para, { base: { size: 24 } }));
  }
  out.push(p([{ t: "★ À RETENIR : ", b: true }, ...lecon.retenir], { base: { size: 24 }, spacing: { before: 160, after: 120 } }));
  return out;
}

// ---------- Exercices & corrigé ----------
// exo = { titre, consigne:[segs], items:[[segs]], pts }
function exercicesParas(exos) {
  const out = [p([{ t: "EXERCICES", b: true }], { base: { size: 26 }, spacing: { before: 240, after: 60 } })];
  out.push(p([{ t: "Barème total : 20 points.", i: true }], { base: { size: 22 } }));
  for (const exo of exos) {
    out.push(p([{ t: exo.titre + " ", b: true }, { t: "(" + exo.pts + " pts)", b: true }], { base: { size: 24 }, spacing: { before: 120, after: 40 } }));
    out.push(p(exo.consigne, { base: { size: 24 } }));
    for (const item of exo.items) out.push(p(item, { base: { size: 24 }, spacing: { after: 30 }, extra: { indent: { left: 340 } } }));
  }
  return out;
}

// corrige = [{ titre, lines:[[segs]] }]
function corrigeParas(corrige) {
  const out = [p([{ t: "CORRIGÉ", b: true }], { base: { size: 26 }, spacing: { before: 240, after: 60 } })];
  for (const bloc of corrige) {
    out.push(p([{ t: bloc.titre + " — ", b: true }, ...bloc.lines[0]], { base: { size: 24 } }));
    for (const line of bloc.lines.slice(1)) out.push(p(line, { base: { size: 24 }, spacing: { after: 30 }, extra: { indent: { left: 340 } } }));
  }
  return out;
}

// ---------- Image ----------
function imagePara(path, pxW, pxH, displayW) {
  const w = displayW || 520;
  const h = Math.round((pxH / pxW) * w);
  return new Paragraph({
    children: [new ImageRun({ type: "png", data: require("fs").readFileSync(path), transformation: { width: w, height: h } })],
    alignment: AlignmentType.CENTER,
    spacing: { before: 120, after: 120 },
  });
}

// ---------- Sommaire ----------
function sommaireLine(label, anchor, indent) {
  return new Paragraph({
    children: [new InternalHyperlink({ anchor, children: segRuns(label, { color: COLORS.bleu }) })],
    spacing: { after: 60 },
    indent: indent ? { left: 400 } : undefined,
  });
}

module.exports = {
  FONT, COLORS, DUREE, noBorders, gridBorders,
  segRuns, p, pageBreakPara, bookmarkPara, metaTable, deroulementTable,
  leconParas, exercicesParas, corrigeParas, imagePara, sommaireLine,
};
