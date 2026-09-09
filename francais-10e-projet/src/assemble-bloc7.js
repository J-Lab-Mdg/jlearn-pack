// ============================================================
// assemble-bloc7.js — BLOC 7 : Unités 1-7 (cumulatif séances 1-99)
// Manuel Français 10e (CP2) — Collection J-Learn — skill v18
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
const { theme7 } = require("./data-theme7");
const LECONS = require("./lecons-fusionnees");
const ANNEXES = require("./annexes");

// Illustrations d'exercices (dessins scolaires plats — style mixte)
const EXO_IMAGES = {
 6: { file: "s6_devinette.png", w: 1100, h: 560, legende: "Le jeu de la devinette : qui est-ce, qui est-ce, dis-moi qui c'est !" },
 13: { file: "s13_famille.png", w: 1100, h: 560, legende: "Je nomme les membres de ma famille." },
 17: { file: "s17_possessifs.png", w: 1100, h: 560, legende: "mon ou ma ? J'entoure la bonne étiquette." },
 21: { file: "s21_son_u.png", w: 1100, h: 560, legende: "J'entoure les mots qui contiennent le son u." },
 31: { file: "s31_dents.png", w: 1100, h: 560, legende: "Le dentifrice et la brosse à dents : ce qui sert aux dents !" },
 35: { file: "s35_son_an.png", w: 1100, h: 560, legende: "J'entoure les mots qui contiennent le son an." },
};

const UNITS = [
 { th: theme1, plage: "1 à 12" },
 { th: theme2, plage: "13 à 28" },
 { th: theme3, plage: "29 à 40" },
 { th: theme4, plage: "41 à 52" },
 { th: theme5, plage: "53 à 65" },
 { th: theme6, plage: "66 à 83" },
 { th: theme7, plage: "84 à 99" },
];

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "..", "output", "Manuel_Francais_10e_V1_THEMES1-7.docx");

const noB = { top: { style: BorderStyle.NONE, size: 0, color: "auto" }, bottom: { style: BorderStyle.NONE, size: 0, color: "auto" }, left: { style: BorderStyle.NONE, size: 0, color: "auto" }, right: { style: BorderStyle.NONE, size: 0, color: "auto" }, insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "auto" }, insideVertical: { style: BorderStyle.NONE, size: 0, color: "auto" } };

// ---------------- Couverture ----------------
function couverture() {
 const c = [];
 c.push(new Paragraph({ children: [new TextRun({ text: "COLLECTION J-LEARN", font: B.FONT, size: 44, bold: true, color: B.COLORS.bleu })], alignment: AlignmentType.CENTER, spacing: { before: 600, after: 200 } }));
 c.push(new Paragraph({ children: [new TextRun({ text: "MANUEL DE FRANÇAIS", font: B.FONT, size: 72, bold: true, color: B.COLORS.rouge })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
 c.push(new Paragraph({ children: [new TextRun({ text: "CLASSE DE 10ÈME (CP2)", font: B.FONT, size: 52, bold: true, color: B.COLORS.noir })], alignment: AlignmentType.CENTER, spacing: { after: 400 } }));
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
  t("Il est entièrement conforme au programme scolaire officiel de Français pour la classe de 10ème (CP2), tel que défini par la Fiche de Répartition Annuelle : un enseignement oral, par séances de 30 minutes, alternant l'Expression Orale, la Lecture et l'Écriture."),
  t("Le manuel couvre l'ensemble de l'année : chaque thème du programme (les formules de présentation, la famille, la toilette, l'école, les cadeaux et les vêtements, le marché, les repas, la ferme... et tous les sons étudiés) y est traité en blocs de séances complets. Chaque séance de 30 minutes propose :"),
  t("1. Une fiche de préparation détaillée pour l'enseignant (objectifs, déroulement en 3 grandes étapes, matériel)."),
  t("1. Des exercices notés, variés et progressifs, sur un barème de 20 points, avec leur corrigé complet."),
  t("2. Et, après chaque groupe de séances du même grand titre, une LEÇON FUSIONNÉE de 1 à 2 pages illustrées qui rassemble tout le contenu à dicter et à faire copier dans le cahier de l'élève : le titre, les sous-titres, les mots clés et l'essentiel « À retenir »."),
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
  t([{ t: "I. Révision (3 min)", b: true }, { t: " — des questions simples sur la séance précédente ; " }, { t: "II. Nouvelle Leçon (22 min)", b: true }, { t: " — en 6 moments (mise en situation, présentation, observation, analyse, synthèse, application) ; " }, { t: "III. Évaluation (5 min)", b: true }, { t: " — de courtes questions orales de contrôle." }]),,
  t([{ t: "Conseil pratique : ", b: true }, { t: "lisez la fiche ENTIÈREMENT avant le cours. Adaptez le rythme au vôtre et à celui de votre classe." }]),
  h("B. Le contenu de la leçon"),
  t("Après les fiches d'un même grand titre (par exemple « Se présenter et présenter » ou « Le son é »), la leçon fusionnée rassemble sur une ou deux pages illustrées tout le contenu à dicter et à faire copier aux élèves, en général au moment de la synthèse de chaque séance. Elle suit des conventions de couleur constantes dans tout le manuel :"),
  t([{ t: "Titres (1., 2. ...) → ", b: true }, { t: "ROUGE", b: true, color: B.COLORS.rouge }]),,
  t([{ t: "Sous-titres (A., B. ...) → ", b: true }, { t: "VERT", b: true, color: B.COLORS.vert }]),,
  t([{ t: "Mots clés → ", b: true }, { t: "BLEU", b: true, color: B.COLORS.bleu }]),,
  t([{ t: "Conseil pratique : ", b: true }, { t: "dictez le contenu en l'expliquant. Ne dictez jamais un mot sans l'illustrer par un exemple concret." }]),,
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
 for (const { th, plage } of UNITS) {
  out.push(B.sommaireLine(`Unité ${th.numero} — ${th.nom.toUpperCase()} (Séances ${plage})`, `theme${th.numero}`, false));
  for (const s of th.seances) {
   out.push(B.sommaireLine(`Séance ${s.n} — ${s.titre} (${s.sd || th.sousDiscipline})`, `seance${s.n}`, true));
   const L = LECONS.find((x) => x.apres === s.n);
   if (L) out.push(B.sommaireLine(`Leçon ${L.num} — ${L.titreS} (Séances ${L.plage})`, L.id, false));
  }
  out.push(B.sommaireLine(`Annexes du thème ${th.numero} — conjugaison, grammaire, vocabulaire`, `theme${th.numero}annexe`, false));
 }
 return out;
}

// ---------------- Séparateur de thème ----------------
function separateurTheme(th, plage) {
 const out = [B.bookmarkPara(`theme${th.numero}`, [{ t: `UNITÉ ${th.numero} — ${th.nom.toUpperCase()}`, b: true, size: 40, color: B.COLORS.rouge }], { align: AlignmentType.CENTER, spacing: { before: 400, after: 100 } })];
 out.push(new Paragraph({ children: [new TextRun({ text: `Séances ${plage} • Expression Orale, Lecture, Écriture`, font: B.FONT, size: 28, bold: true, color: B.COLORS.vert })], alignment: AlignmentType.CENTER, spacing: { after: 300 } }));

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
   cellp([s.sd || th.sousDiscipline], W[2]),
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
function seanceBlock(s, th) {
 const out = [];
 out.push(B.bookmarkPara(`seance${s.n}`, [
  { t: `SÉANCE ${s.n}`, b: true, size: 32, color: B.COLORS.rouge },
  { t: ` — ${s.titre.toUpperCase()}`, b: true, size: 28 },
 ], { align: AlignmentType.CENTER }));

 out.push(new Paragraph({ children: [new TextRun({ text: "FICHE DE PRÉPARATION", font: B.FONT, size: 28, bold: true })], alignment: AlignmentType.CENTER, spacing: { before: 200, after: 160 } }));

 out.push(B.metaTable({
  discipline: "Français",
  sousDiscipline: s.sd || th.sousDiscipline,
  theme: th.nom,
  titreFiche: s.titreFiche,
  objectif: s.objectif,
  documentation: DOC,
  supportFiche: s.supportFiche,
  classe: "10ème (CP2)",
  seanceNum: `${s.n} / 99`,
 }));

 out.push(new Paragraph({ children: [], spacing: { after: 120 } }));
 out.push(B.deroulementTable(s));

 const exoImg = EXO_IMAGES[s.n];
 if (exoImg) {
  out.push(B.imagePara(path.join(ASSETS, exoImg.file), exoImg.w, exoImg.h, 400));
  out.push(new Paragraph({ children: [new TextRun({ text: exoImg.legende, font: B.FONT, size: 20, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
 }

 out.push(...B.exercicesParas(s.exercices));
 out.push(...B.corrigeParas(s.corrige));
 return out;
}

// ---------------- Leçon fusionnée (1 à 2 pages par grand titre) ----------------
function leconFusionneeBlock(L) {
 const out = [];
 out.push(B.bookmarkPara(L.id, [
  { t: `LEÇON ${L.num}`, b: true, size: 32, color: B.COLORS.rouge },
  { t: ` — ${L.titre}`, b: true, size: 28 },
 ], { align: AlignmentType.CENTER }));
 out.push(new Paragraph({ children: [new TextRun({ text: `Leçon commune aux séances ${L.plage} — contenu à dicter et à faire copier`, font: B.FONT, size: 22, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }));

 if (L.image) {
  out.push(B.imagePara(path.join(ASSETS, L.image.file), L.image.w, L.image.h, 500));
  out.push(new Paragraph({ children: [new TextRun({ text: L.image.legende, font: B.FONT, size: 20, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 160 } }));
 }

 for (const sub of L.subs) {
  out.push(B.p([{ t: sub.t, b: true }], { base: { size: 24, color: B.COLORS.vert }, spacing: { before: 160, after: 60 } }));
  for (const para of sub.paras) out.push(B.p(para, { base: { size: 24 } }));
  if (sub.image) {
   out.push(B.imagePara(path.join(ASSETS, sub.image.file), sub.image.w, sub.image.h, 480));
   out.push(new Paragraph({ children: [new TextRun({ text: sub.image.legende, font: B.FONT, size: 20, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 120 } }));
  }
 }

 out.push(B.p([{ t: "★ À RETENIR : ", b: true }, ...L.retenir], { base: { size: 24 }, spacing: { before: 200, after: 120 } }));
 return out;
}

// ---------------- Annexe de fin de thème ----------------
function annexeThemeBlock(th) {
  const A = ANNEXES.find((a) => a.unite === th.numero);
  const out = [];
  out.push(B.bookmarkPara(`theme${th.numero}annexe`, [
    { t: `ANNEXES DU THÈME ${th.numero}`, b: true, size: 32, color: B.COLORS.rouge },
    { t: ` — ${th.nom.toUpperCase()}`, b: true, size: 28 },
  ], { align: AlignmentType.CENTER }));
  out.push(new Paragraph({ children: [new TextRun({ text: "Résumés à conserver dans le cahier : conjugaison, grammaire et orthographe, vocabulaire.", font: B.FONT, size: 22, italics: true, color: "555555" })], alignment: AlignmentType.CENTER, spacing: { after: 200 } }));

  for (const bloc of [A.conj, A.gram, A.vocab]) {
    out.push(B.p([{ t: bloc.titre, b: true }], { base: { size: 24, color: B.COLORS.vert }, spacing: { before: 160, after: 60 } }));
    for (const ligne of bloc.lignes) out.push(B.p(ligne, { base: { size: 24 }, spacing: { after: 40 }, extra: { indent: { left: 340 } } }));
  }
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
 for (const { th, plage } of UNITS) {
  children.push(B.pageBreakPara());
  children.push(...separateurTheme(th, plage));
  children.push(B.pageBreakPara());
  for (const s of th.seances) {
   children.push(...seanceBlock(s, th));
   children.push(B.pageBreakPara());
   const L = LECONS.find((x) => x.apres === s.n);
   if (L) {
    children.push(...leconFusionneeBlock(L));
    children.push(B.pageBreakPara());
   }
  }
  children.push(...annexeThemeBlock(th));
  children.push(B.pageBreakPara());
 }
 children.push(new Paragraph({ children: [new TextRun({ text: "— FIN DU BLOC 7 (SÉANCES 1 À 99) —", font: B.FONT, size: 28, bold: true, color: B.COLORS.rouge })], alignment: AlignmentType.CENTER, spacing: { before: 600 } }));
 children.push(new Paragraph({ children: [new TextRun({ text: "À suivre : Unité 8 — La ferme.", font: B.FONT, size: 24, italics: true, color: "555555" })], alignment: AlignmentType.CENTER }));

 const doc = new Document({
  creator: "J-Lab — Collection J-Learn",
  title: "Manuel de Français 10ème (CP2) — Unités 1 à 4 (cumulatif)",
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
