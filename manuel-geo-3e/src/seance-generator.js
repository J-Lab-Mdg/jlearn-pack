// Génère une séance complète : fiche de préparation + leçon + exercices
const path = require("path");
const B = require("./builders");
const { p, titled, AlignmentType } = B;

const DUREE = { total: "2 heures", revision: "15 min", lecon: "90 min", evaluation: "15 min" };
const NOTE_METHODE = "Méthode facultative : si une carte murale, un manuel illustré ou des statistiques récentes sont disponibles, les faire observer et commenter par les élèves à la place du document recopié au tableau (voir Mode d'emploi).";

function qa(pairs) {
  // une ligne par couple question / R.A.
  const ens = [], app = [];
  pairs.forEach(([q, r]) => { ens.push(q); app.push(`R.A. : ${r}`); });
  return { ens, app };
}

function buildFiche(s, total) {
  const rev = qa(s.revision);
  const ana = qa(s.analyse);
  const appExos = s.application, evalExos = s.evaluation;

  const rows = [
    B.sectionRow("I. RÉVISION"),
    B.stepRow({ etape: "Révision", duree: DUREE.revision, enseignant: rev.ens, apprenants: rev.app, technique: "Questions-réponses orales", support: "—" }),
    B.sectionRow(`II. NOUVELLE LEÇON — ${DUREE.lecon}`),
    B.stepRow({
      etape: "1. Mise en situation",
      enseignant: s.miseEnSituation.enseignant,
      apprenants: s.miseEnSituation.apprenants || ["Les élèves écoutent et répondent à l'oral."],
      technique: "Amorce orale", support: s.miseEnSituation.support || "Tableau noir",
    }),
    B.stepRow({
      etape: "2. Présentation",
      enseignant: [`Aujourd'hui nous allons apprendre : « ${s.titre} ». Après cette séance, vous serez capables de ${s.objectif}.`],
      apprenants: ["Les élèves écoutent."],
      technique: "Exposé oral", support: "Tableau noir, cahier",
    }),
    B.stepRow({
      etape: "3. Observation",
      enseignant: s.observation.enseignant,
      apprenants: ["Les élèves observent silencieusement."],
      technique: "Observation dirigée", support: s.observation.support,
      observation: [s.observation.note, NOTE_METHODE],
    }),
    B.stepRow({ etape: "4. Analyse", enseignant: ana.ens, apprenants: ana.app, technique: s.analyseTechnique || "Questionnement dirigé", support: s.observation.support }),
    B.stepRow({ etape: "5. Synthèse", enseignant: [s.synthese], apprenants: ["Les élèves écoutent."], technique: "Exposé oral", support: "Tableau noir" }),
    B.stepRow({
      etape: "6. Application",
      enseignant: appExos.flatMap((e, i) => B.exoEnonceLines(e, i + 1)),
      apprenants: appExos.flatMap((e, i) => B.exoCorrigeLines(e, i + 1)),
      technique: "Travail individuel puis correction collective", support: "Cahier, ardoise",
    }),
    B.sectionRow("III. ÉVALUATION"),
    B.stepRow({
      etape: "Évaluation", duree: DUREE.evaluation,
      enseignant: evalExos.flatMap((e, i) => B.exoEnonceLines(e, i + appExos.length + 1)),
      apprenants: evalExos.flatMap((e, i) => B.exoCorrigeLines(e, i + appExos.length + 1)),
      technique: "Travail individuel écrit", support: "Cahier, feuille d'évaluation",
    }),
  ];

  return [
    B.pageBreak(),
    titled(`SÉANCE ${s.num} / ${total}`, { anchor: `seance${s.num}`, size: 26 }),
    titled(s.titre, { size: 28, color: B.C.rouge, spacingAfter: 120 }),
    titled("FICHE DE PRÉPARATION", { size: 24 }),
    B.metaTable({
      discipline: "Géographie", theme: s.theme, titre: s.titre, objectif: s.objectif,
      documentation: s.documentation, support: s.supportGlobal || "Tableau noir, craie, cahier de l'élève",
      classe: "3ème", seance: `${s.num} / ${total}`, duree: DUREE.total,
    }),
    B.empty(80),
    B.deroulementTable(rows),
  ];
}

function buildLecon(s, assetsDir) {
  const out = [B.pageBreak(), titled("LEÇON", { size: 22, align: AlignmentType.LEFT, spacingAfter: 40 }), B.leconTitre(s.titre, `lecon${s.num}`)];
  if (s.image) out.push(...B.figure(path.join(assetsDir, s.image.file), s.image.legende, { widthCm: s.image.widthCm || 14, source: s.image.source }));
  s.lecon.forEach((blk) => {
    if (typeof blk === "string") { out.push(B.leconPara(blk)); return; }
    switch (blk.t) {
      case "h": out.push(B.leconSousTitre(blk.x)); break;
      case "hh": out.push(B.leconSousSous(blk.x)); break;
      case "p": out.push(B.leconPara(blk.x)); break;
      case "ul": blk.x.forEach((li) => out.push(B.leconPuce(li))); break;
      case "table": out.push(...B.dataTable(blk.header, blk.rows, { widths: blk.widths, source: blk.source })); break;
      case "fig": out.push(...B.figure(path.join(assetsDir, blk.file), blk.legende, { widthCm: blk.widthCm || 14, source: blk.source })); break;
    }
  });
  return out;
}

function buildSeance(s, total, assetsDir) {
  const exos = [...s.application, ...s.evaluation];
  return [...buildFiche(s, total), ...buildLecon(s, assetsDir), ...B.exercicesSection(exos)];
}

module.exports = { buildSeance, DUREE, NOTE_METHODE };
