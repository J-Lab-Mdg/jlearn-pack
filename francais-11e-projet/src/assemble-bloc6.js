// ============================================================
// assemble-bloc6.js — BLOC 2 (cumulatif) : Thèmes 1 + 2
// Manuel Français 11e (CP1) — Séances 1 à 60 — skill v18
// ============================================================
const path = require("path");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, VerticalAlign,
} = require("docx");
const B = require("./builders");
const { theme1, DOC } = require("./data-theme1");
const { theme2 } = require("./data-theme2");
const { theme3 } = require("./data-theme3");
const { theme4 } = require("./data-theme4");
const { theme5 } = require("./data-theme5");
const { theme6 } = require("./data-theme6");

const THEMES = [theme1, theme2, theme3, theme4, theme5, theme6];
const TOTAL = THEMES.reduce((a, t) => a + t.seances.length, 0); // 20

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "..", "output", "Manuel_Francais_11e_V1_THEMES1-6.docx");

const noB = { top: { style: BorderStyle.NONE, size: 0, color: "auto" }, bottom: { style: BorderStyle.NONE, size: 0, color: "auto" }, left: { style: BorderStyle.NONE, size: 0, color: "auto" }, right: { style: BorderStyle.NONE, size: 0, color: "auto" }, insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" }, insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" } };

// ---------------- Couverture ----------------
function couverture() {
  const c = [];
  c.push(new Paragraph({ children: [new TextRun({ text: "COLLECTION J-LEARN", font: B.FONT, size: 44, bold: true, color: B.COLORS.bleu })], alignment: AlignmentType.CENTER, spacing: { before: 600, after: 200 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "MANUEL DE FRANÇAIS", font: B.FONT, size: 72, bold: true, color: B.COLORS.rouge })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "CLASSE DE 11ÈME (CP1)", font: B.FONT, size: 52, bold: true, color: B.COLORS.noir })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }));
  c.push(B.imagePara(path.join(ASSETS, "cover_hero.png"), 1100, 560, 460));
  c.push(new Paragraph({ children: [new TextRun({ text: "√ Fiche de préparation", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 60 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "√ Contenu de la leçon", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 60 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "√ Exercices notés", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 60 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "√ Corrigés détaillés", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "« Apprendre, c'est une vie, pas un choix. » — J-Learn", font: B.FONT, size: 24, italics: true, color: "666666" })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "Conforme au programme officiel", font: B.FONT, size: 26, bold: true, color: B.COLORS.vert })], alignment: AlignmentType.CENTER, spacing: { after: 100 } }));
  c.push(new Paragraph({ children: [new TextRun({ text: "J-Learn — j.lab.mdg@gmail.com — Éditeur : J-Lab", font: B.FONT, size: 22, color: "666666" })], alignment: AlignmentType.CENTER }));
  return c;
}

// ---------------- Avant-propos ----------------
function avantPropos() {
  const t = (text, opts = {}) => new Paragraph({ children: [new TextRun({ text, font: B.FONT, size: 24, ...opts })], spacing: { after: 120 }, alignment: AlignmentType.JUSTIFIED });
  return [
    B.bookmarkPara("avant_propos", [{ t: "AVANT-PROPOS", b: true, size: 32 }], { align: AlignmentType.CENTER }),
    t("Ce manuel a été conçu par l'équipe de J-Lab dans le cadre de la Collection J-Learn, une collection de manuels scolaires numériques pensée pour accompagner les enseignants malgaches au quotidien, en classe."),
    t("Il est entièrement conforme au programme scolaire officiel de Français pour la classe de 11ème (CP1), tel que défini par la Fiche de Répartition Annuelle : un enseignement oral, par séances de 30 minutes, alternant le Langage et la Phonétique."),
    t("Le manuel couvre l'ensemble de l'année : chaque thème du programme (salutations, présentation, le village, la famille, la maison, les points cardinaux, la ferme, le cultivateur... et tous les sons étudiés) y est traité en blocs de séances complets. Chaque séance est organisée en 4 parties :"),
    t("1. Une fiche de préparation détaillée pour l'enseignant (objectifs, déroulement en 3 grandes étapes, matériel)."),
    t("2. Le contenu de la leçon à copier au tableau et dans le cahier de l'élève."),
    t("3. Des exercices notés, variés et progressifs, sur un barème de 20 points."),
    t("4. Le corrigé complet, avec le détail du barème."),
    t("Tous les exemples, prénoms et situations utilisés dans ce manuel s'inscrivent dans le quotidien malgache (le village, le marché, la famille, l'école), afin que chaque élève puisse se reconnaître dans ce qu'il apprend."),
    t("Nous remercions chaleureusement les enseignants qui utilisent ce manuel : leur travail quotidien auprès des plus jeunes élèves est essentiel, et nous espérons que cet outil leur fera gagner du temps dans la préparation de leurs cours tout en enrichissant leurs séances."),
    t("— L'équipe J-Lab", { bold: true }),
  ];
}

// ---------------- Mode d'emploi ----------------
function modeEmploi() {
  const h = (text) => new Paragraph({ children: [new TextRun({ text, font: B.FONT, size: 26, bold: true, color: B.COLORS.vert })], spacing: { before: 200, after: 80 } });
  const t = (segs, opts = {}) => new Paragraph({ children: B.segRuns(segs, { size: 24, ...(opts.base || {}) }), spacing: { after: 100 }, alignment: AlignmentType.JUSTIFIED });
  return [
    B.bookmarkPara("mode_emploi", [{ t: "MODE D'EMPLOI — COMMENT UTILISER CE MANUEL", b: true, size: 32 }], { align: AlignmentType.CENTER }),
    h("A. La fiche de préparation"),
    t("Chaque séance commence par une fiche de préparation. Elle indique la discipline, la sous-discipline, le thème, le titre, la durée, l'objectif spécifique, la documentation de référence et le matériel nécessaire."),
    t("Le déroulement de la séance suit toujours 3 grandes étapes : "),
    [{ t: "I. Révision (4 min)", b: true }, { t: " — des questions simples sur la séance précédente ; " }, { t: "II. Nouvelle Leçon (22 min)", b: true }, { t: " — en 6 moments (mise en situation, présentation, observation, analyse, synthèse, application) ; " }, { t: "III. Évaluation (4 min)", b: true }, { t: " — de courtes questions orales de contrôle." }],
    t([{ t: "Conseil pratique : ", b: true }, { t: "lisez la fiche ENTIÈREMENT avant le cours. Adaptez le rythme au vôtre et à celui de votre classe." }]),
    h("B. Le contenu de la leçon"),
    t("Après la fiche de préparation, le contenu de la leçon est à dicter et à faire copier aux élèves, en général au moment de la synthèse. Ce contenu suit des conventions de couleur constantes dans tout le manuel :"),
    [{ t: "Titres (1., 2. ...) → ", b: true }, { t: "ROUGE", b: true, color: B.COLORS.rouge }],
    [{ t: "Sous-titres (A., B. ...) → ", b: true }, { t: "VERT", b: true, color: B.COLORS.vert }],
    [{ t: "Mots clés → ", b: true }, { t: "BLEU", b: true, color: B.COLORS.bleu }],
    [{ t: "Conseil pratique : ", b: true }, { t: "dictez le contenu en l'expliquant. Ne dictez jamais un mot sans l'illustrer par un exemple concret." }],
    h("C. Les exercices et la correction"),
    t("Chaque séance propose 2 à 3 exercices notés sur un barème total de 20 points, avec des formats variés (entourer, compléter, relier, jouer, mimer). Dans le corrigé, seuls les mots clés de la réponse sont en rose ; le reste du texte reste en noir."),
    t([{ t: "Conseil pratique : ", b: true }, { t: "corrigez collectivement en classe une fois que tous les élèves ont terminé, en faisant participer les élèves à l'oral." }]),
    h("D. Navigation dans le document"),
    t("La table des matières, juste après cette page, est cliquable : un clic sur un titre amène directement à la séance voulue, dans Word comme dans un PDF. Chaque thème commence par une page de séparation qui présente le tableau de bord des séances du thème, les compétences visées et les notions travaillées."),
  ];
}

// ---------------- Sommaire ----------------
function sommaire() {
  const out = [B.bookmarkPara("sommaire", [{ t: "TABLE DES MATIÈRES", b: true, size: 32 }], { align: AlignmentType.CENTER })];
  out.push(B.sommaireLine("Avant-propos", "avant_propos", false));
  out.push(B.sommaireLine("Mode d'emploi — comment utiliser ce manuel", "mode_emploi", false));
  for (const th of THEMES) {
    const first = th.seances[0].n, last = th.seances[th.seances.length - 1].n;
    out.push(B.sommaireLine(`Thème ${th.numero} — ${th.nom.toUpperCase()} (Séances ${first} à ${last} — ${th.sousDiscipline})`, `theme${th.numero}`, false));
    for (const s of th.seances) {
      out.push(B.sommaireLine(`Séance ${s.n} — ${s.titre} (${th.sousDiscipline})`, `seance${s.n}`, true));
    }
  }
  return out;
}

// ---------------- Séparateur de thème ----------------
function separateurTheme(th) {
  const first = th.seances[0].n, last = th.seances[th.seances.length - 1].n;
  const out = [B.bookmarkPara(`theme${th.numero}`, [{ t: `THÈME ${th.numero} — ${th.nom.toUpperCase()}`, b: true, size: 40, color: B.COLORS.rouge }], { align: AlignmentType.CENTER, spacing: { before: 400, after: 100 } })];
  out.push(new Paragraph({ children: [new TextRun({ text: `Séances ${first} à ${last} • ${th.sousDiscipline}`, font: B.FONT, size: 28, bold: true, color: B.COLORS.vert })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }));

  out.push(new Paragraph({ children: [new TextRun({ text: "Tableau de bord du thème", font: B.FONT, size: 26, bold: true })], spacing: { before: 200, after: 100 } }));
  const W = [900, 5138, 2000, 1600];
  const cell = (children, w, opts = {}) => new TableCell({
    children, width: { size: w, type: WidthType.DXA },
    borders: { top: { style: BorderStyle.SINGLE, size: 4 }, bottom: { style: BorderStyle.SINGLE, size: 4 }, left: { style: BorderStyle.SINGLE, size: 4 }, right: { style: BorderStyle.SINGLE, size: 4 } },
    verticalAlign: VerticalAlign.CENTER, shading: opts.head ? { type: "clear", fill: "F2F2F2" } : undefined,
    margins: { top: 40, bottom: 40, left: 80, right: 80 },
  });
  const cellp = (segs, w, opts = {}) => cell([new Paragraph({ children: B.segRuns(segs, { size: 22, bold: opts.b }), spacing: { after: 0 }, alignment: opts.center ? AlignmentType.CENTER : undefined })], w, opts);
  const rows = [new TableRow({ tableHeader: true, children: [
    cellp([{ t: "N°", b: true }], W[0], { head: true, center: true }),
    cellp([{ t: "Titre de la séance", b: true }], W[1], { head: true }),
    cellp([{ t: "Sous-discipline", b: true }], W[2], { head: true }),
    cellp([{ t: "Durée", b: true }], W[3], { head: true, center: true }),
  ] })];
  for (const s of th.seances) {
    rows.push(new TableRow({ children: [
      cellp([String(s.n)], W[0], { center: true }),
      cellp([s.titre], W[1]),
      cellp([th.sousDiscipline], W[2]),
      cellp([B.DUREE.totale], W[3], { center: true }),
    ] }));
  }
  out.push(new Table({ width: { size: W.reduce((a, b) => a + b, 0), type: WidthType.DXA }, columnWidths: W, borders: noB, rows }));

  out.push(new Paragraph({ children: [new TextRun({ text: "Compétences visées", font: B.FONT, size: 26, bold: true })], spacing: { before: 300, after: 100 } }));
  for (const comp of th.competences) {
    out.push(new Paragraph({ children: [new TextRun({ text: "• ", font: B.FONT, size: 24 }), new TextRun({ text: comp, font: B.FONT, size: 24 })], spacing: { after: 60 }, indent: { left: 340 } }));
  }
  out.push(new Paragraph({ children: [new TextRun({ text: "Notions travaillées", font: B.FONT, size: 26, bold: true })], spacing: { before: 240, after: 100 } }));
  out.push(new Paragraph({ children: [new TextRun({ text: th.notions, font: B.FONT, size: 24, bold: true, color: B.COLORS.bleu })], spacing: { after: 100 } }));
  return out;
}

// ---------------- Une séance complète ----------------
function seanceBlock(th, s) {
  const out = [];
  out.push(B.bookmarkPara(`seance${s.n}`, [
    { t: `SÉANCE ${s.n}`, b: true, size: 32, color: B.COLORS.rouge },
    { t: ` — ${s.titre.toUpperCase()}`, b: true, size: 28 },
  ], { align: AlignmentType.CENTER }));

  out.push(new Paragraph({ children: [new TextRun({ text: "FICHE DE PRÉPARATION", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { before: 200, after: 160 } }));

  out.push(B.metaTable({
    discipline: "Français",
    sousDiscipline: th.sousDiscipline,
    theme: th.nom,
    titreFiche: s.titreFiche,
    objectif: s.objectif,
    documentation: DOC,
    supportFiche: s.supportFiche,
    classe: "11ème (CP1)",
    seanceNum: `${s.n} / ${TOTAL}`,
  }));

  out.push(new Paragraph({ children: [], spacing: { after: 120 } }));
  out.push(B.deroulementTable(s));

  out.push(B.pageBreakPara());
  out.push(new Paragraph({ children: [new TextRun({ text: "CONTENU DE LA LEÇON", font: B.FONT, size: 30, bold: true })], alignment: AlignmentType.CENTER, spacing: { after: 160 } }));

  if (s.image) {
    out.push(B.imagePara(path.join(ASSETS, s.image.file), s.image.w, s.image.h, 480));
    out.push(new Paragraph({ children: [new TextRun({ text: s.image.legende, font: B.FONT, size: 20, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 160 } }));
  }

  out.push(...B.leconParas(s.lecon));
  out.push(...B.exercicesParas(s.exercices));
  out.push(...B.corrigeParas(s.corrige));
  return out;
}

// ---------------- Assemblage ----------------
async function main() {
  const children = [];
  children.push(...couverture());
  children.push(B.pageBreakPara());
  children.push(...avantPropos());
  children.push(B.pageBreakPara());
  children.push(...modeEmploi());
  children.push(B.pageBreakPara());
  children.push(...sommaire());
  children.push(B.pageBreakPara());
  for (const th of THEMES) {
    children.push(...separateurTheme(th));
    children.push(B.pageBreakPara());
    for (const s of th.seances) {
      children.push(...seanceBlock(th, s));
      children.push(B.pageBreakPara());
    }
  }
  children.push(new Paragraph({ children: [new TextRun({ text: "— FIN DU BLOC 6 (SÉANCES 1 À 60) —", font: B.FONT, size: 28, bold: true, color: B.COLORS.rouge })], alignment: AlignmentType.CENTER, spacing: { before: 600 } }));
  children.push(new Paragraph({ children: [new TextRun({ text: "À suivre : Thème 7 — Le son GN (Phonétique).", font: B.FONT, size: 24, italics: true, color: "555555" })], alignment: AlignmentType.CENTER }));

  const doc = new Document({
    creator: "J-Lab — Collection J-Learn",
    title: "Manuel de Français 11ème (CP1) — Thèmes 1 à 6",
    description: "Manuel J-Learn conforme au programme officiel RAPS — Madagascar",
    styles: { default: { document: { run: { font: B.FONT, size: 24 } } } },
    sections: [{
      properties: {
        page: {
          size: { width: 11906, height: 16838 }, // A4
          margin: { top: 1134, right: 1134, bottom: 1134, left: 1134 },
        },
      },
      children,
    }],
  });

  const buf = await Packer.toBuffer(doc);
  require("fs").writeFileSync(OUT, buf);
  console.log("Généré :", OUT, `(${(buf.length / 1024).toFixed(0)} Ko)`);
}

main().catch((e) => { console.error(e); process.exit(1); });
