// markdown.js — export lisible (Markdown) d'un manuel PE / PS / ALL.
// Usage : node src/markdown.js PE|PS|ALL
const fs = require("fs");
const path = require("path");
const MODE = (process.argv[2] || "ALL").toUpperCase();

const T1 = require("./data-theme1"), T2 = require("./data-theme2"), T3 = require("./data-theme3"),
  T4 = require("./data-theme4"), T5 = require("./data-theme5"), T6 = require("./data-theme6"),
  T7 = require("./data-theme7"), T8 = require("./data-theme8"), T9 = require("./data-theme9"),
  T10 = require("./data-theme10"), T11 = require("./data-theme11");
const EXTRA = require("./seances-lecture");
const EX2 = require("./seances-exercices");

let THEMES = [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11].map((m, i) => ({
  t: m[Object.keys(m).find((k) => k.startsWith("theme"))], a: m[Object.keys(m).find((k) => k.startsWith("annexe"))],
}));
if (MODE === "PE") THEMES = [1, 2, 3, 11, 6, 8].map((n) => THEMES.find((x) => x.t.numero === n));
if (MODE === "PS") THEMES = [4, 5, 7, 9, 10].map((n) => THEMES.find((x) => x.t.numero === n));

const SD_PE = { "Expression Orale": "Production orale", "Conjugaison": "Fonctionnement de la langue", "Grammaire": "Fonctionnement de la langue", "Orthographe": "Fonctionnement de la langue", "Lecture": "Compréhension écrite", "Exercices": "Production écrite" };
const sd = (x) => (MODE === "PE" ? (SD_PE[x] || x) : x);

let SE = 0;
THEMES.forEach(({ t }) => { if (EXTRA[t.numero]) t.seances.push(...EXTRA[t.numero]); if (EX2[t.numero]) t.seances.push(EX2[t.numero]); });
THEMES.forEach(({ t }) => t.seances.forEach((s) => { s.n = ++SE; }));

const o = [];
o.push("# Manuel de Français — 9ème (T3 / CE) — " + (MODE === "PE" ? "Programme d'Études (PE)" : MODE === "PS" ? "Programme Scolaire (PS)" : "Version complète"));
o.push("");
o.push(MODE === "PE" ? "Conforme au Programme d'Études T3 (RAPE 2025-2026) : six thématiques, six composantes." : MODE === "PS" ? "Conforme au Programme Scolaire (arrêté n° 2532/98, Programmes scolaires 2015-2016)." : "Fusion des deux programmes officiels.");
o.push("");
o.push("## Sommaire");
THEMES.forEach(({ t }) => {
  o.push("- **Thème " + t.numero + " — " + t.nom + "** (" + t.source + ")");
  t.seances.forEach((s) => o.push("  - Séance " + s.n + " : " + s.titre + " — " + sd(s.sd)));
  o.push("  - Annexes du thème " + t.numero);
});
o.push("");

function step(label, stp) {
  if (!stp) return;
  o.push("**" + label + "**");
  if (stp.ens) o.push("- Enseignant : " + stp.ens);
  if (stp.app) o.push("- Apprenants : " + stp.app);
  if (stp.technique && stp.technique.sous) {
    o.push("  - *" + stp.technique.sous + "*");
    (stp.technique.points || []).forEach((p) => o.push("    - " + p));
  }
  o.push("");
}

THEMES.forEach(({ t, a }) => {
  o.push("---");
  o.push("## THÈME " + t.numero + " — " + t.nom.toUpperCase());
  o.push("*Source : " + t.source + "*");
  o.push("");
  t.seances.forEach((s) => {
    o.push("### Séance " + s.n + " / " + (MODE === "PS" ? 186 : SE) + " — " + s.titre + "  [" + sd(s.sd) + "]");
    o.push("**Objectif :** " + s.objectif);
    o.push("**Support :** " + s.support);
    o.push("");
    if (s.lecon) {
      o.push("#### Leçon : " + s.lecon.titre);
      (s.lecon.blocs || []).forEach((b) => o.push("- **" + b.st + "** : " + b.txt));
      o.push("> **À retenir :** " + s.lecon.aretenir);
      o.push("");
    }
    step("I. Révision", s.revision);
    step("II. Mise en situation", s.miseEnSituation);
    step("III. Présentation", s.presentation);
    step("IV. Observation", s.observation);
    step("V. Analyse", s.analyse);
    step("VI. Synthèse", s.synthese);
    step("VII. Application", s.application);
    step("VIII. Évaluation", s.evaluation);
    if (s.exercices) {
      o.push("#### Exercices notés");
      s.exercices.forEach((e) => o.push("- **" + e.t + "** " + e.q));
      o.push("");
      o.push("<details><summary>Corrigé</summary>");
      o.push("");
      s.corrige.forEach((c) => o.push("- " + c.map((seg) => (typeof seg === "string" ? seg : seg.t)).join("")));
      o.push("");
      o.push("</details>");
      o.push("");
    }
  });
  if (a) {
    o.push("### Annexes du thème " + a.theme + " — " + a.nom);
    o.push("#### A. Conjugaison détaillée");
    a.conjugaison.forEach((c) => {
      o.push("**" + c.verbe + " — " + c.temps + "**");
      o.push("- *Quand l'utiliser :* " + c.quand);
      (Array.isArray(c.exemplesQuand) ? c.exemplesQuand : [c.exemplesQuand]).forEach((e) => o.push("  - « " + e + " »"));
      o.push("- *Comment le former :* " + c.comment);
      c.tableau.forEach((f) => o.push("  - " + (Array.isArray(f) ? f.join(" | ") : f)));
      o.push("- *Pourquoi :* " + c.pourquoi);
      (c.pieges || []).forEach((p) => o.push("  - ✗ " + p[0] + " → écris : **" + p[1] + "**"));
      o.push("");
    });
    o.push("#### B. Grammaire");
    a.grammaire.forEach((g) => { o.push("- **" + g.notion + "** : " + g.regle + " *Ex. :* " + g.exemple + (g.contre ? " *Attention :* " + g.contre : "")); });
    o.push("");
    o.push("#### C. Orthographe");
    a.orthographe.forEach((g) => { o.push("- **" + g.notion + "** : " + g.regle + " *Ex. :* " + (Array.isArray(g.exemples) ? g.exemples.join(", ") : g.exemples)); (g.pieges || []).forEach((p) => o.push("  - ✗ " + p[0] + " → " + p[1])); });
    o.push("");
    o.push("#### D. Vocabulaire");
    a.vocabulaire.forEach((v) => { o.push("- **" + v.champ + "** : " + v.mots); });
    o.push("");
  }
});

const out = path.join(__dirname, "..", "output", "Manuel_Francais_9e_V2_" + MODE + ".md");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, o.join("\n"), "utf-8");
console.log("Généré :", out, "(" + Math.round(o.join("\n").length / 1024) + " Ko)");
