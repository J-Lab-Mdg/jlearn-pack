// ============================================================
// seance-generator.js — génère le contenu d'une séance
// (fiche + leçon + exercices notés + corrigé)
// ============================================================
const B = require("./builders");
const EB = require("./exercise-bank");

const TNR = B.FONT;

function linesToParas(lines, size = 18) {
  if (Array.isArray(lines)) return lines.map((l) => B.p(l, { size, spacingAfter: 25 }));
  if (!lines) return [B.p("", { size: 16 })];
  return [B.p(lines, { size, spacingAfter: 25 })];
}

// Support fixe selon l'étape
function supportFor(etape, topic) {
  switch (etape) {
    case "revision": return "";
    case "mise":     return topic.supportMise || "Tableau noir";
    case "pres":     return "Tableau noir, cahier";
    case "obs":      return topic.observationSupport || "Tableau noir";
    case "ana":      return topic.observationSupport || "Tableau noir";
    case "syn":      return "Tableau noir";
    case "app":      return topic.supportApp || "Cahier, ardoise";
    case "eval":     return "Cahier, feuille d'évaluation";
    default: return "";
  }
}

function techniqueFor(etape, topic) {
  switch (etape) {
    case "revision": return "Questionnement oral";
    case "mise":     return topic.technMise || "Questionnement oral";
    case "pres":     return "Exposé";
    case "obs":      return "Observation dirigée en groupe";
    case "ana":      return topic.technAna || "Questionnement dirigé en groupe";
    case "syn":      return "Exposé magistral, synthèse collective";
    case "app":      return "Exercices individuels ou en groupe";
    case "eval":     return "Évaluation écrite individuelle";
    default: return "";
  }
}

function buildRevision(topic) {
  const pairs = topic.revision || [];
  const enseignant = pairs.map(([q]) => B.p(q, { size: 18, spacingAfter: 25 }));
  const apprenants = pairs.map(([, ra]) => B.p("R.A. : " + ra, { size: 18, spacingAfter: 25 }));
  return B.stepRow({
    etape: [B.p("I. RÉVISION", { bold: true, size: 18, color: B.BLUE })],
    enseignant: enseignant.length ? enseignant : [B.p("Que retenez-vous de la séance précédente ?", { size: 18 })],
    apprenants: apprenants.length ? apprenants : [B.p("R.A. : réponse libre attendue.", { size: 18 })],
    technique: techniqueFor("revision", topic),
    support: supportFor("revision", topic),
    observation: "",
  });
}

function buildMiseEnSituation(topic) {
  const mise = topic.mise;
  let enseignant, apprenants;
  if (Array.isArray(mise)) {
    enseignant = [B.p(mise[0], { size: 18, spacingAfter: 25 })];
    apprenants = [B.p("R.A. : " + mise[1], { size: 18, spacingAfter: 25 })];
  } else {
    enseignant = [B.p(mise || "", { size: 18, spacingAfter: 25 })];
    apprenants = [B.p("Les élèves écoutent et répondent à l'oral.", { size: 18, spacingAfter: 25 })];
  }
  return B.stepRow({
    etape: [B.p("1. Mise en situation", { bold: true, size: 18 })],
    enseignant, apprenants,
    technique: techniqueFor("mise", topic),
    support: supportFor("mise", topic),
    observation: topic.obsMise || "",
  });
}

function buildPresentation(topic) {
  const obj = String(topic.objectif || "").trim();
  const prep = /^[aeiouyàâäéèêëîïôöùûü]/i.test(obj) ? "d'" : "de ";
  return B.stepRow({
    etape: [B.p("2. Présentation", { bold: true, size: 18 })],
    enseignant: [B.p("Aujourd'hui nous allons apprendre : « " + topic.titre + " ». Après cette séance vous serez capables " + prep + obj + ".", { size: 18, spacingAfter: 25 })],
    apprenants: [B.p("Les élèves écoutent.", { size: 18, spacingAfter: 25 })],
    technique: techniqueFor("pres", topic),
    support: supportFor("pres", topic),
    observation: "",
  });
}

function buildObservation(topic) {
  return B.stepRow({
    etape: [B.p("3. Observation", { bold: true, size: 18 })],
    enseignant: [B.p("Regardez et observez bien " + topic.observation + ".", { size: 18, spacingAfter: 25 })],
    apprenants: [B.p("Les élèves observent silencieusement.", { size: 18, spacingAfter: 25 })],
    technique: techniqueFor("obs", topic),
    support: supportFor("obs", topic),
    observation: topic.obsNote || "",
  });
}

function buildAnalyse(topic) {
  const enseignant = (topic.qa || []).map(([q]) => B.p(q, { size: 18, spacingAfter: 25 }));
  const apprenants = (topic.qa || []).map(([, ra]) => B.p("R.A. : " + ra, { size: 18, spacingAfter: 25 }));
  return B.stepRow({
    etape: [B.p("4. Analyse", { bold: true, size: 18 })],
    enseignant,
    apprenants,
    technique: techniqueFor("ana", topic),
    support: supportFor("ana", topic),
    observation: "",
  });
}

function buildSynthese(topic) {
  return B.stepRow({
    etape: [B.p("5. Synthèse", { bold: true, size: 18 })],
    enseignant: [B.p(topic.synthese, { size: 18, spacingAfter: 25 })],
    apprenants: [B.p("Les élèves écoutent.", { size: 18, spacingAfter: 25 })],
    technique: techniqueFor("syn", topic),
    support: supportFor("syn", topic),
    observation: "",
  });
}

function buildApplicationStep(appExos, topic) {
  return B.stepRow({
    etape: [B.p("6. Application", { bold: true, size: 18 })],
    enseignant: EB.exosToParas(appExos, B),
    apprenants: [B.p(EB.exosBreve(appExos), { size: 15, spacingAfter: 25 })],
    technique: techniqueFor("app", topic),
    support: supportFor("app", topic),
    observation: "",
  });
}

function buildEvaluationStep(evalExos, topic) {
  return B.stepRow({
    etape: [B.p("III. ÉVALUATION", { bold: true, size: 18, color: B.BLUE })],
    enseignant: EB.exosToParas(evalExos, B),
    apprenants: [B.p(EB.exosBreve(evalExos), { size: 15, spacingAfter: 25 })],
    technique: techniqueFor("eval", topic),
    support: supportFor("eval", topic),
    observation: "",
  });
}

// --- Page LEÇON ---
function buildLecon(topic, anchor) {
  const out = [new B.Paragraph({ children: [new B.PageBreak()] })];
  out.push(B.leconTitre(topic.titre, anchor));
  (topic.images || []).forEach((im) => {
    if (im && im.file) out.push(...B.imageParas(im.file, im.legende));
  });
  (topic.contenu || []).forEach((bloc) => {
    if (bloc.sousTitre) out.push(B.leconSousTitre(bloc.sousTitre));
    if (bloc.texte) out.push(B.pHighlight(bloc.texte, topic.motsCles, B.BLUE, { size: 21 }));
    (bloc.liste || []).forEach((it) => {
      out.push(B.pHighlight("• " + it, topic.motsCles, B.BLUE, { size: 20, spacingAfter: 50, indent: { left: 360 } }));
    });
    (bloc.exemples || []).forEach((ex) => {
      out.push(B.sousSection(ex));
    });
    if (bloc.sousSection) {
      out.push(B.sousSection(bloc.sousSection));
    }
  });
  return out;
}

// --- Section EXERCICES (avec barème) ---
function buildExosSection(appExos, evalExos, anchor, topic) {
  const all = [...appExos, ...evalExos];
  const out = [];
  out.push(B.sectionHeading("EXERCICES", anchor, { size: 24 }));
  let total = 0;
  const exoImg = topic && topic.exoImage;
  const corrImg = topic && topic.corrigeImage;
  all.forEach((ex, i) => {
    const d = EB.buildExo(ex);
    total += d.points;
    if (i === 0 && exoImg && exoImg.file) {
      out.push(...B.imageParas(exoImg.file, "Observe la figure puis réponds. " + (exoImg.legende || "")));
    }
    out.push(B.p("Exercice " + (i + 1) + " (" + d.points + " points)", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    out.push(B.p(ex.consigne, { italics: true, size: 19, spacingAfter: 30 }));
    d.parts.forEach((line) => out.push(B.p(line, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  out.push(B.p("TOTAL : " + total + " points", { bold: true, size: 21, align: B.AlignmentType.CENTER, spacingAfter: 160 }));
  out.push(B.sectionHeading("CORRIGÉ", null, { size: 24 }));
  if (corrImg && corrImg.file) {
    out.push(...B.imageParas(corrImg.file, "Corrigé — même figure que l'exercice 1. " + (corrImg.legende || "")));
  }
  all.forEach((ex, i) => {
    const d = EB.buildExo(ex);
    out.push(B.p("Exercice " + (i + 1) + " — corrigé", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    d.corrige.forEach((c) => {
      out.push(B.pHighlight(c.text, c.keys, B.PINK, { size: 19, spacingAfter: 25 }));
    });
    out.push(B.p("", { size: 14 }));
  });
  return out;
}

// --- Séance complète ---
function generateSeanceDocContent(topic, seanceNum, totalSeances) {
  const appExos = topic.appExos || [];
  const evalExos = topic.evalExos || [];
  const meta = {
    discipline: "Sciences de la vie et de la terre",
    theme: topic.theme,
    titre: topic.titre,
    objectif: topic.objectif,
    documentation: "Programme d'Études — Classe de T6 (SVT), DCRP",
    support: topic.supportMeta || "",
    date: "____________",
    classe: "T6",
    seance: seanceNum + " / " + totalSeances,
    duree: "____________", // durée laissée à l'enseignant (demande utilisateur)
    ras: topic.ras || "",
    valeurs: topic.valeurs || "—",
  };
  const steps = [
    buildRevision(topic),
    B.sectionRow("II. NOUVELLE LEÇON"),
    buildMiseEnSituation(topic),
    buildPresentation(topic),
    buildObservation(topic),
    buildAnalyse(topic),
    buildSynthese(topic),
    buildApplicationStep(appExos, topic),
    buildEvaluationStep(evalExos, topic),
  ];
  const anchor = "seance" + seanceNum;
  const fiche = B.buildFichePage(meta, steps, seanceNum, totalSeances);
  const lecon = buildLecon(topic, anchor);
  const exos = buildExosSection(appExos, evalExos, null, topic);
  return [...fiche, ...lecon, ...exos];
}

module.exports = { generateSeanceDocContent };
