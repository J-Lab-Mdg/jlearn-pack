// ============================================================
// assemble.js — Manuel Français 9e (T3/CE) V2 — assembleur multi-thèmes
// Traitement C — sources : RAPE T3 2025-2026 + ancien programme (fusion taguée)
// Usage : node src/assemble.js
// ============================================================
const fs = require("fs");
const path = require("path");
const { Document, Packer } = require("docx");
const B = require("./builders");
const { theme1, annexe1, DOC } = require("./data-theme1");
const { theme2, annexe2 } = require("./data-theme2");
const { theme3, annexe3 } = require("./data-theme3");
const { theme4, annexe4 } = require("./data-theme4");
const { theme5, annexe5 } = require("./data-theme5");
const { theme6, annexe6 } = require("./data-theme6");
const { theme7, annexe7 } = require("./data-theme7");
const { theme8, annexe8 } = require("./data-theme8");
const { theme9, annexe9 } = require("./data-theme9");
const { theme10, annexe10 } = require("./data-theme10");
const { buildAnnexe } = require("./annexes9e");
const EXTRA = require("./seances-lecture");
const EX2 = require("./seances-exercices");

const ASSETS = path.join(__dirname, "..", "assets");
let MODE = (process.argv[2] || "ALL").toUpperCase();
let OUT = path.join(__dirname, "..", "output", "Manuel_Francais_9e_V2.docx");
let TOTAL = 186;
const { COLORS } = B;
let THEMES = [{ t: theme1, a: annexe1 }, { t: theme2, a: annexe2 }, { t: theme3, a: annexe3 }, { t: theme4, a: annexe4 }, { t: theme5, a: annexe5 }, { t: theme6, a: annexe6 }, { t: theme7, a: annexe7 }, { t: theme8, a: annexe8 }, { t: theme9, a: annexe9 }, { t: theme10, a: annexe10 }];

const t = (segs, size) => B.p(segs, { base: { size: size || 22 } });

function couverture() {
  const o = [];
  o.push(B.bookmarkPara("couverture", [{ t: "COLLECTION J-LEARN", b: true, color: COLORS.rouge }], { base: { size: 24 } }));
  o.push(B.p([{ t: "MANUEL DE FRANÇAIS", b: true, color: COLORS.rouge }], { base: { size: 40 }, align: "center" }));
  o.push(B.p([{ t: "CLASSE DE 9ÈME (T3 / CE)", b: true }], { base: { size: 28 }, align: "center" }));
  o.push(B.p([{ t: "Édition 2026-2027 — Version V2", i: true }], { base: { size: 22 }, align: "center" }));
  o.push(B.p([{ t: "✓ Fiche de préparation · ✓ Leçon · ✓ Exercices notés · ✓ Corrigés détaillés · ✓ Annexes" }], { base: { size: 20 }, align: "center" }));
  o.push(B.p([{ t: "Conforme au RAPE T3 2025-2026 et au programme d'études — Madagascar", i: true }], { base: { size: 20 }, align: "center" }));
  return o;
}

function avantPropos() {
  const o = [];
  o.push(B.pageBreakPara());
  o.push(B.bookmarkPara("avantpropos", [{ t: "AVANT-PROPOS", b: true, color: COLORS.rouge }], { base: { size: 28 } }));
  o.push(t(MODE === "PE"
    ? ["Ce manuel suit le ", { t: "Programme d'Études (PE) de la classe de T3", b: true }, " (RAPE 2025-2026) : les six thématiques officielles — les aliments, la famille élargie, le temps, l'environnement scolaire, la ferme, le marché — traitées selon les six composantes (compréhension orale et écrite, production orale et écrite, fonctionnement de la langue, lecture-fluidité)."]
    : MODE === "PS"
    ? ["Ce manuel suit le ", { t: "Programme Scolaire (PS) de la classe de 9ème", b: true }, " (arrêté n° 2532/98, Programmes scolaires 2015-2016) : la maison, l'école, le village, les travaux des champs, les maladies, les métiers, le temps et les saisons, le voyage."]
    : ["Ce manuel est construit à partir de ", { t: "deux programmes officiels utilisés conjointement", b: true }, " : le Programme d'Études (RAPE T3 2025-2026) et le Programme Scolaire antérieur."]));
  o.push(t(["Chaque séance dure 30 minutes, à raison de 12 séances par semaine. Elle comprend une fiche de préparation, la leçon, des exercices notés sur 20 points et leur corrigé détaillé."]));
  o.push(t(["En fin de thème, des annexes détaillées reprennent la conjugaison (quand l'utiliser, comment la former, pourquoi), la grammaire, l'orthographe et le vocabulaire."]));
  return o;
}

function sommaire() {
  const o = [];
  o.push(B.pageBreakPara());
  o.push(B.bookmarkPara("sommaire", [{ t: "SOMMAIRE", b: true, color: COLORS.rouge }], { base: { size: 28 } }));
  THEMES.forEach(({ t: th }) => {
    o.push(B.sommaireLine("THÈME " + th.numero + " — " + th.nom.toUpperCase() + " (" + th.source + ")", "theme" + th.numero, 0));
    th.seances.forEach((s) => o.push(B.sommaireLine("Séance " + s.n + " — " + s.titre + " (" + s.sd + ")", "seance" + s.n, 1)));
    o.push(B.sommaireLine("Annexes du thème " + th.numero, "theme" + th.numero + "annexe", 1));
  });
  return o;
}

function seance(s, nomTheme) {
  const o = [];
  o.push(B.pageBreakPara());
  o.push(B.bookmarkPara("seance" + s.n, [{ t: "SÉANCE " + s.n + " / " + TOTAL, b: true, color: COLORS.rouge }], { base: { size: 24 } }));
  o.push(t([{ t: s.titre, b: true }], 24));
  o.push(B.p([{ t: "FICHE DE PRÉPARATION", b: true, color: COLORS.vert }], { base: { size: 24 } }));
  o.push(B.metaTable({
    discipline: "Français", sousDiscipline: s.sd, theme: nomTheme,
    titreFiche: s.titreFiche, objectif: s.objectif, documentation: DOC,
    supportFiche: s.support, classe: "9ème", seanceNum: s.n + " / " + TOTAL,
  }));
  o.push(B.deroulementTable(s));
  o.push(B.pageBreakPara());
  o.push(B.p([{ t: "LEÇON — " + s.lecon.titre, b: true, color: COLORS.rouge }], { base: { size: 26 } }));
  if (s.image) {
    o.push(B.imagePara(path.join(ASSETS, s.image.file), s.image.w, s.image.h, 480));
    o.push(B.p([{ t: s.image.legende, i: true }], { base: { size: 20 } }));
  }
  s.lecon.blocs.forEach((b) => {
    o.push(B.p([{ t: b.st, b: true, color: COLORS.vert }], { base: { size: 23 } }));
    o.push(t([{ t: b.txt }], 22));
  });
  o.push(B.p([{ t: "★ À RETENIR : ", b: true, color: COLORS.bleu }, { t: s.lecon.aretenir }], { base: { size: 22 } }));
  o.push(B.p([{ t: "EXERCICES NOTÉS (/20)", b: true, color: COLORS.rouge }], { base: { size: 24 } }));
  s.exercices.forEach((e) => {
    o.push(B.p([{ t: e.t, b: true }], { base: { size: 22 } }));
    o.push(t([{ t: e.q }], 22));
  });
  o.push(B.p([{ t: "CORRIGÉ", b: true, color: COLORS.vert }], { base: { size: 24 } }));
  s.corrige.forEach((c) => o.push(B.p(c, { base: { size: 22 } })));
  return o;
}

function main() {
  if (MODE === "PE") THEMES = THEMES.filter((x) => [1, 2, 3, 6, 8].includes(x.t.numero));
  if (MODE === "PS") THEMES = THEMES.filter((x) => [4, 5, 7, 9, 10].includes(x.t.numero));
  OUT = path.join(__dirname, "..", "output", MODE === "PE" ? "Manuel_Francais_9e_V2_PE.docx" : MODE === "PS" ? "Manuel_Francais_9e_V2_PS.docx" : "Manuel_Francais_9e_V2_COMPLET.docx");
  THEMES.forEach(({ t: th }) => { if (EXTRA[th.numero]) th.seances.push(...EXTRA[th.numero]);
    if (EX2[th.numero]) th.seances.push(EX2[th.numero]); });
  let SE = 0;
  THEMES.forEach(({ t: th }) => th.seances.forEach((s) => { s.n = ++SE; }));
  TOTAL = MODE === "PS" ? 186 : SE;
  const children = [];
  children.push(...couverture());
  children.push(...avantPropos());
  children.push(...sommaire());
  THEMES.forEach(({ t: th, a }) => {
    children.push(B.pageBreakPara());
    children.push(B.bookmarkPara("theme" + th.numero, [{ t: "THÈME " + th.numero + " — " + th.nom.toUpperCase(), b: true, color: COLORS.rouge }], { base: { size: 30 } }));
    children.push(B.p([{ t: "Source : " + th.source, i: true }], { base: { size: 20 } }));
    th.seances.forEach((s) => children.push(...seance(s, th.nom)));
    children.push(...buildAnnexe(a));
  });
  children.push(B.pageBreakPara());
  children.push(B.p([{ t: "FIN DES THÈMES 1-2 (SÉANCES 1 À 6). À suivre : Thème 3 — Le temps et l'environnement scolaire.", b: true, color: COLORS.rouge }], { base: { size: 22 }, align: "center" }));

  const doc = new Document({
    styles: { default: { document: { run: { font: "Times New Roman", size: 24 } } } },
    sections: [{ properties: {}, children }],
  });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  Packer.toBuffer(doc).then((buf) => {
    fs.writeFileSync(OUT, buf);
    console.log("Généré :", OUT, "(" + Math.round(buf.length / 1024) + " Ko)");
  });
}
main();
