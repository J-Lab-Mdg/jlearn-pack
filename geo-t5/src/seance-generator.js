// seance-generator.js — Génère le contenu docx d'une séance (fiche + leçon + exercices)
// Flux conforme au skill : exercices générés EN PREMIER, puis fiche, puis leçon, puis EXERCICES notés.
const B = require("./builders");
const { Paragraph, TextRun, AlignmentType } = require("docx");
const path = require("path");
const fs = require("fs");

const REPO = path.resolve(__dirname, "..", "..");

// Répartition proportionnelle I/II/III pour une séance de 30 minutes
const DUREES = { I: "3 min", II: "22 min", III: "5 min" };

// Paragraphe de leçon avec plusieurs mots clés colorés en bleu + gras.
// Un mot clé contenant une majuscule est recherché en respectant la casse
// (pour ne pas colorer le verbe « est » quand on cherche « Est »).
function pKw(text, keywords, opts = {}) {
  const { size = 21, after = 100 } = opts;
  const kws = (keywords || []).filter(Boolean);
  if (!kws.length) return B.p(text, { size, after });
  const escaped = kws.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = String(text).split(regex);
  const runs = parts.map((part) => {
    if (!part) return null;
    const hit = kws.some((k) => (/[A-ZÀ-Ý]/.test(k) ? part === k : part.toLowerCase() === k.toLowerCase()));
    if (!hit) return new TextRun({ text: part, size, font: B.FONT });
    return new TextRun({ text: part, bold: true, color: B.BLUE, size, font: B.FONT });
  }).filter(Boolean);
  return new Paragraph({ spacing: { after }, children: runs });
}

// Bloc LEÇON d'un topic : titre rouge + image + sections numérotées vertes + mots clés bleus
function leconBlock(topic) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.leconTitre(topic.titre));
  if (topic.image) {
    const imgPath = path.join(REPO, `${topic.image.id}.png`);
    if (fs.existsSync(imgPath)) {
      out.push(...B.imageBlock(imgPath, 430, topic.image.legende));
    }
  }
  // Scène semi-réaliste en « document d'observation » : sous le schéma, avant la leçon
  if (topic.scene && topic.scene.mode === "document") {
    const scPath = path.join(REPO, "geo-t5", "scenes", topic.scene.file);
    if (fs.existsSync(scPath)) {
      out.push(...B.sceneBlock(scPath, 450, topic.scene.legende));
    }
  }
  (topic.lecon.sections || []).forEach((sec) => {
    out.push(B.leconSousTitre(sec.titre));
    (sec.paras || []).forEach((tx) => out.push(pKw(tx, topic.motsCles)));
    (sec.sous || []).forEach((ss) => {
      out.push(B.leconSousSousTitre(ss.titre));
      (ss.paras || []).forEach((tx) => out.push(pKw(tx, topic.motsCles)));
      (ss.exemples || []).forEach((ex) => out.push(B.p("• " + ex, { size: 20, after: 60, indent: 480 })));
    });
    (sec.exemples || []).forEach((ex) => out.push(B.p("• " + ex, { size: 20, after: 60, indent: 360 })));
  });
  // Scène semi-réaliste en illustration de fin de leçon
  if (topic.scene && topic.scene.mode === "illustration") {
    const scPath = path.join(REPO, "geo-t5", "scenes", topic.scene.file);
    if (fs.existsSync(scPath)) {
      out.push(...B.sceneBlock(scPath, 450, topic.scene.legende));
    }
  }
  return out;
}

// Bloc EXERCICES notés (après la leçon) : consignes + items + barème, puis corrigé
function exercicesBlock(topic) {
  const out = [];
  const exos = [...(topic.appExos || []), ...(topic.evalExos || [])];
  const totalPts = exos.length * 5;
  out.push(B.p("EXERCICES", { size: 24, bold: true, before: 160, after: 60 }));
  exos.forEach((ex, i) => {
    out.push(B.p(`Exercice ${i + 1} (${ex.points || 5} points)`, { size: 21, bold: true, after: 30 }));
    out.push(B.p(ex.consigne, { size: 20, italics: true, after: 40 }));
    (ex.items || []).forEach((it) => out.push(B.p(it, { size: 20, after: 30 })));
  });
  out.push(B.p(`Total : ${totalPts} points`, { size: 20, bold: true, after: 120 }));
  out.push(B.p("CORRIGÉ", { size: 22, bold: true, before: 120, after: 60 }));
  exos.forEach((ex, i) => {
    out.push(B.p(`Corrigé de l'exercice ${i + 1} (${ex.points || 5} points) :`, { size: 20, bold: true, after: 30 }));
    (ex.corrige || []).forEach((c) => out.push(B.p(c, { size: 20, after: 30, kwColor: B.CORRIGE })));
  });
  return out;
}

// Fiche de préparation complète d'une séance
function ficheBlock(topic, prevQuestions) {
  const out = [];
  out.push(B.pageBreak());
  out.push(B.p(`SÉANCE ${topic.numero} / ${topic.total}`, {
    size: 22, bold: true, align: AlignmentType.CENTER, after: 40,
  }));
  out.push(B.headingWithBookmark(topic.titre, `seance${topic.numero}`, {
    size: 26, align: AlignmentType.CENTER, after: 160,
  }));
  out.push(B.p("FICHE DE PRÉPARATION", { size: 24, bold: true, align: AlignmentType.CENTER, after: 120 }));

  out.push(B.metaTable({
    discipline: "Géographie",
    theme: topic.theme,
    titre: topic.titre,
    objectif: topic.objectif,
    documentation: topic.documentation || "Programme d'études officiel T5 — Géographie",
    classe: "T5",
    seanceNum: topic.numero,
    total: topic.total,
    duree: "30 minutes",
  }));
  out.push(B.pEmpty());

  // Étapes
  const steps = [];
  // I. RÉVISION
  const revQ = (prevQuestions && prevQuestions.length ? prevQuestions : topic.revisionOuverture) || [];
  steps.push(B.stepRow({
    etape: "I. RÉVISION", duree: DUREES.I,
    enseignant: revQ.map(([q]) => q),
    apprenants: revQ.map(([, ra]) => `R.A. : ${ra}`),
    technique: "Questions-réponses orales",
    support: "—",
  }));
  // II. NOUVELLE LEÇON (ligne de section)
  steps.push(B.sectionRow("II. NOUVELLE LEÇON", DUREES.II));
  // 1. Mise en situation
  const mes = topic.miseEnSituation;
  const mesEns = [];
  if (mes.texte) mesEns.push(mes.texte);
  if (mes.question) mesEns.push(mes.question);
  const mesApp = [];
  if (mes.ra) mesApp.push(`R.A. : ${mes.ra}`);
  else mesApp.push("Les élèves écoutent et répondent à l'oral.");
  steps.push(B.stepRow({
    etape: "1. Mise en situation",
    enseignant: mesEns, apprenants: mesApp,
    technique: mes.texte ? "Récit et questions" : "Question orale",
    support: mes.support || "Tableau noir",
  }));
  // 2. Présentation
  steps.push(B.stepRow({
    etape: "2. Présentation",
    enseignant: [topic.presentation],
    apprenants: ["Les élèves écoutent."],
    technique: "Annonce du titre et de l'objectif",
    support: "Tableau noir, cahier",
  }));
  // 3. Observation
  steps.push(B.stepRow({
    etape: "3. Observation",
    enseignant: [topic.observation],
    apprenants: ["Les élèves observent silencieusement."],
    technique: "Observation silencieuse",
    support: topic.supportObservation,
  }));
  // 4. Analyse — une ligne par couple question / R.A.
  steps.push(B.stepRow({
    etape: "4. Analyse",
    enseignant: topic.analyse.map(([q]) => q),
    apprenants: topic.analyse.map(([, ra]) => `R.A. : ${ra}`),
    technique: "Questions-réponses",
    support: topic.supportObservation,
  }));
  // 5. Synthèse
  steps.push(B.stepRow({
    etape: "5. Synthèse",
    enseignant: [topic.synthese],
    apprenants: ["Les élèves écoutent."],
    technique: "Explication",
    support: "Tableau noir",
  }));
  // 6. Application
  steps.push(B.stepRow({
    etape: "6. Application",
    enseignant: B.exosToParas(topic.appExos),
    apprenants: B.corrigeToParas(topic.appExos),
    technique: "Exercices écrits",
    support: topic.supportApplication || "Cahier, ardoise",
  }));
  // III. ÉVALUATION
  steps.push(B.stepRow({
    etape: "III. ÉVALUATION", duree: DUREES.III,
    enseignant: B.exosToParas(topic.evalExos),
    apprenants: B.corrigeToParas(topic.evalExos),
    technique: "Exercices écrits",
    support: "Cahier, feuille d'évaluation",
  }));

  out.push(B.deroulementTable(steps));
  return out;
}

// Contenu complet d'une séance
function generateSeanceDocContent(topic, prevQuestions) {
  return [
    ...ficheBlock(topic, prevQuestions),
    ...leconBlock(topic),
    ...exercicesBlock(topic),
  ];
}

module.exports = { generateSeanceDocContent, pKw };
