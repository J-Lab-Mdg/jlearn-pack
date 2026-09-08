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
const { buildAnnexe } = require("./annexes9e");

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "..", "output", "Manuel_Francais_9e_V2_THEMES1-5.docx");
const TOTAL = 186;
const { COLORS } = B;
const THEMES = [{ t: theme1, a: annexe1 }, { t: theme2, a: annexe2 }, { t: theme3, a: annexe3 }, { t: theme4, a: annexe4 }, { t: theme5, a: annexe5 }];

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
  o.push(t(["Ce manuel est construit à partir de ", { t: "deux programmes officiels utilisés conjointement", b: true }, " : la Répartition Annuelle du Programme d'Études (RAPE) de la classe de T3, année scolaire 2025-2026, et le programme d'études antérieur. Les thèmes issus d'un seul des deux programmes sont signalés dans le sommaire et en tête de thème."]));
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
