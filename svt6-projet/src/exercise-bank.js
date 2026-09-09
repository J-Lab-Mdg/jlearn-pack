// ============================================================
// exercise-bank.js — générateurs d'exercices (types variés)
// Chaque exercice : { type, consigne, items, pointsPar, keys }
// Retourne { parts, corrige, points }  (parts : lignes affichées)
// ============================================================

const LETTRES = ["A", "B", "C", "D", "E"];

function buildExo(ex) {
  switch (ex.type) {
    case "qcm":    return qcm(ex);
    case "vf":     return vf(ex);
    case "trous":  return trous(ex);
    case "qr":     return qr(ex);
    case "appariement": return appariement(ex);
    case "completion":  return completion(ex);
    default: throw new Error("Type d'exercice inconnu : " + ex.type);
  }
}

function qcm(ex) {
  const parts = [];
  const corrige = [];
  ex.items.forEach((it, i) => {
    parts.push("" + (i + 1) + ". " + it.q);
    it.opts.forEach((o, j) => parts.push("    " + LETTRES[j] + ". " + o));
    const bonne = LETTRES[it.ok];
    corrige.push({ text: (i + 1) + ". La bonne réponse est : " + bonne + ". " + it.opts[it.ok] + (it.expl ? " — " + it.expl : ""), keys: ["La bonne réponse est : " + bonne] });
  });
  return { parts, corrige, points: ex.items.length * (ex.pointsPar || 1) };
}

function vf(ex) {
  const parts = [];
  const corrige = [];
  ex.items.forEach((it, i) => {
    parts.push("" + (i + 1) + ". " + it.txt + "  (V / F)");
    corrige.push({ text: (i + 1) + ". " + (it.rep ? "Vrai" : "Faux") + ". " + (it.expl || ""), keys: [it.rep ? "Vrai" : "Faux"] });
  });
  return { parts, corrige, points: ex.items.length * (ex.pointsPar || 1) };
}

function trous(ex) {
  const parts = ["Mots à utiliser : " + (ex.mots || []).join(", ")];
  const corrige = [];
  ex.items.forEach((it, i) => {
    const phrase = it.phrase || it.txt || "";
    const mot = it.mot || (typeof it.reponse === "string" ? it.reponse : "");
    parts.push("" + (i + 1) + ". " + phrase);
    const corrigeText = it.corrige || phrase.replace(/_{3,}/g, mot);
    corrige.push({ text: (i + 1) + ". " + corrigeText, keys: mot ? [mot] : [] });
  });
  return { parts, corrige, points: ex.items.length * (ex.pointsPar || 1) };
}

function qr(ex) {
  const parts = [];
  const corrige = [];
  ex.items.forEach((it, i) => {
    parts.push("" + (i + 1) + ". " + it.q);
    corrige.push({ text: (i + 1) + ". " + it.r, keys: [] });
  });
  return { parts, corrige, points: ex.items.length * (ex.pointsPar || 2) };
}

function appariement(ex) {
  const it = ex.items[0];
  const parts = [];
  parts.push("Colonne A");
  it.g.forEach((g, i) => parts.push("  " + (i + 1) + ". " + g));
  parts.push("Colonne B");
  it.d.forEach((d, j) => parts.push("  " + LETTRES[j] + ". " + d));
  parts.push("Écris le numéro de la colonne A devant la bonne lettre de la colonne B.");
  const corrige = it.pairs.map(([gi, dj]) => ({ text: (gi + 1) + " — " + LETTRES[dj] + " (" + it.g[gi] + " ↔ " + it.d[dj] + ")", keys: [(gi + 1) + " — " + LETTRES[dj]] }));
  return { parts, corrige, points: it.pairs.length * (ex.pointsPar || 1) };
}

function completion(ex) {
  const parts = [];
  const corrige = [];
  ex.items.forEach((it, i) => {
    parts.push("" + (i + 1) + ". " + it.debut + "  …………………………………………");
    corrige.push({ text: (i + 1) + ". " + it.debut + " " + it.suite + ".", keys: [it.suite] });
  });
  return { parts, corrige, points: ex.items.length * (ex.pointsPar || 1) };
}

// Conversion en paragraphes pour la cellule Enseignant de la fiche (sans barème)
function exosToParas(exos, B) {
  const out = [];
  exos.forEach((ex, i) => {
    const d = buildExo(ex);
    out.push(B.p("Exercice " + (i + 1), { bold: true, size: 17, color: B.BLUE, spacingAfter: 20 }));
    out.push(B.p(ex.consigne, { italics: true, size: 16, spacingAfter: 20 }));
    d.parts.forEach((line) => out.push(B.p(line, { size: 16, spacingAfter: 15 })));
    out.push(B.p("", { size: 14, spacingAfter: 30 }));
  });
  return out;
}

// Réponse brève (cellule Apprenants de la fiche)
function exosBreve(exos) {
  return exos.map((ex, i) => {
    const d = buildExo(ex);
    const lines = d.corrige.map((c) =>
      ex.type === "qcm" || ex.type === "vf" || ex.type === "appariement"
        ? c.text.split(".")[0] + "." + (c.text.match(/La bonne réponse est : ([A-D])\./) ? " " : "")
        : c.text
    );
    const br = d.corrige.map((c, j) => {
      if (ex.type === "qcm") return "" + (j + 1) + ". " + (c.text.match(/est : ([A-D])\./) || [])[1];
      if (ex.type === "vf") return "" + (j + 1) + ". " + (c.keys[0]);
      if (ex.type === "appariement") return c.text;
      if (ex.type === "qr") return "" + (j + 1) + ". " + c.text.replace(/^\d+\. /, "");
      return (ex.type === "trous" || ex.type === "completion") ? "" + (j + 1) + ". " + c.text.replace(/^\d+\. /, "") : c.text;
    });
    return "Exercice " + (i + 1) + " : " + br.join("  |  ");
  }).join("\n");
}

module.exports = { buildExo, exosToParas, exosBreve };
