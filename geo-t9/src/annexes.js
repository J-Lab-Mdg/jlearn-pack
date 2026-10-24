// annexes.js — Annexes du Manuel de Géographie T9
const path = require("path");
const fs = require("fs");
const { AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");
const B = require("./builders");
const { UNITES } = require("./curriculum");

const REPO = path.resolve(__dirname, "..", "..");
const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

function tRow(cells, widths, opts = {}) {
  return new TableRow({
    ...(opts.header ? { tableHeader: true } : {}),
    children: cells.map((c, i) => B.cell([B.p(c, {
      bold: opts.header || opts.bold || false, size: opts.size || 20,
      align: opts.header ? AlignmentType.CENTER : undefined, color: opts.color,
    })], { shading: opts.header ? B.HEADER_BG : opts.bg, width: widths[i] })),
  });
}
function imgBlock(id, legende) {
  const p = path.join(REPO, `${id}.png`);
  return fs.existsSync(p) ? B.imageBlock(p, 500, legende) : [];
}

const ANNEXES = [
  ["Relief de Madagascar", "geo9_relief_madagascar", "Identifie massifs, plateaux, plaines et pentes ; relie-les aux activités."],
  ["Climats et végétations", "geo9_climats_vegetation", "Localise les grands climats et associe à chacun une végétation dominante."],
  ["Hydrographie malgache", "geo9_hydrographie", "Distingue fleuves de l'Est et de l'Ouest, puis place lacs et lagunes."],
  ["Cinq régions naturelles", "geo9_regions_naturelles", "Délimite Hautes Terres, Ouest, Sud, Est et Nord ; complète la légende."],
  ["Réseaux et activités économiques", "geo9_reseaux_economie", "Relie production, industrie, transport, commerce, tourisme et télécommunications."],
  ["Répartition de la population", "geo9_population", "Décris les contrastes de densité et propose des facteurs explicatifs."],
  ["Méthode du devoir composé", "geo9_devoir_compose", "Suis les quatre étapes pour préparer une réponse organisée."],
  ["Mini-projet de petite entreprise", "geo9_projet_pme", "Construis une activité locale viable, inclusive et respectueuse de l'environnement."],
];

const SOURCES = [
  ["Programme d'études T9 — section Géographie, pages PDF 191 à 210 du document de référence.", "Source des six thématiques, des contenus, des résultats d'apprentissage et des 64 heures officielles."],
  ["Collection J-Learn — éditions GEO T5, GEO T6, GEO T8 et GEO T9.", "Les scènes semi-réalistes validées ont été sélectionnées selon les thèmes ; les 64 schémas et les 8 annexes de GEO T9 ont été composés ou adaptés pour le présent ouvrage."],
  ["Atlas et vocabulaire géographiques scolaires de référence.", "Appui pour les définitions, les cartes, les régions naturelles, les activités économiques et les indicateurs démographiques."],
  ["Principes de développement durable et de gestion de projet.", "Appui pour la protection de l'environnement, la lutte contre la pauvreté et l'étude de faisabilité."],
];

function annexesContent(topics) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("ANNEXES", "annexes", { size: 34, after: 80, align: AlignmentType.CENTER }));
  out.push(B.p("Glossaire, cartes et schémas d'activités, auto-évaluation, table des illustrations et sources.", { size: 25, italics: true, align: AlignmentType.CENTER, after: 200 }));

  // Glossaire dynamique : une notion fondamentale par leçon.
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Glossaire", "glossaire", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Les 64 notions fondamentales des six thématiques sont classées par ordre alphabétique.", { size: 23, italics: true, after: 120 }));
  const gloss = topics.map(t => [t._terme.charAt(0).toUpperCase() + t._terme.slice(1), t._definition])
    .sort((a, b) => a[0].localeCompare(b[0], "fr"));
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: [
    tRow(["Terme", "Définition"], [28, 72], { header: true }),
    ...gloss.map(([term, def]) => new TableRow({ children: [
      B.cell([B.p(term, { size: 22, bold: true, color: B.BLUE })], { width: 28 }),
      B.cell([B.p(def, { size: 22 })], { width: 72 }),
    ] })),
  ] }));

  // Huit activités cartographiques et synthétiques.
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Cartes et schémas d'activités", "cartesmuettes", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Observe, complète et explique chaque document dans ton cahier.", { size: 25, italics: true, after: 160 }));
  ANNEXES.forEach(([titre, id, consigne], i) => {
    out.push(B.p(`${i + 1}. ${titre}`, { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
    out.push(B.p(`Consigne : ${consigne}`, { size: 24, italics: true, after: 60 }));
    out.push(...imgBlock(id, `${titre} — document d'activité GEO T9.`));
  });

  // Auto-évaluation.
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Auto-évaluation", "autoevaluation", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Après chaque unité, coche la colonne correspondant à ce que tu sais faire.", { size: 25, italics: true, after: 160 }));
  const evalRows = [tRow(["Je suis capable de…", "Acquis", "En cours", "À revoir"], [55, 15, 15, 15], { header: true })];
  UNITES.forEach((u, ui) => {
    evalRows.push(tRow([`Unité ${ui + 1} — ${u.nom.replace(/^UNITÉ \d+ — /, "")}`, "", "", ""], [55, 15, 15, 15], { bold: true, bg: "F5F5F5", color: B.BLUE }));
    const selected = [...u.topics.slice(0, 3), u.topics[u.topics.length - 1]];
    selected.forEach(t => evalRows.push(tRow([`Définir ${t._terme} et l'appliquer à une situation géographique.`, "", "", ""], [55, 15, 15, 15])));
  });
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: evalRows }));

  // Table des illustrations.
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Table des illustrations", "illustrations", { size: 30, after: 120, align: AlignmentType.CENTER }));
  const illRows = [tRow(["Séance", "Titre", "Illustrations"], [10, 40, 50], { header: true })];
  topics.forEach(t => illRows.push(new TableRow({ children: [
    B.cell([B.p(String(t.numero), { size: 21 })], { width: 10 }),
    B.cell([B.p(t.titre, { size: 21 })], { width: 40 }),
    B.cell([B.p(t.image.legende, { size: 21 }), B.p(t.scene.legende.replace(/^Document d'observation\s*:\s*/, ""), { size: 21, color: "555555" })], { width: 50 }),
  ] })));
  illRows.push(tRow(["Annexes", "Huit documents", ANNEXES.map(a => a[0]).join(" ; ") + "."], [10, 40, 50]));
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: illRows }));

  // Sources.
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Sources", "sources", { size: 30, after: 120, align: AlignmentType.CENTER }));
  SOURCES.forEach(([source, usage]) => {
    out.push(B.p(`• ${source}`, { size: 25, after: 40 }));
    out.push(B.p(usage, { size: 23, italics: true, indent: 360, after: 120, color: "555555" }));
  });
  out.push(B.p("Les six thématiques, les contenus et les 64 heures reprennent le programme T9 ; les formulations pédagogiques, les exercices, les corrigés, les schémas et les annexes constituent l'édition J-Learn.", { size: 24, italics: true, before: 80, after: 200 }));
  return out;
}

module.exports = { annexesContent };
