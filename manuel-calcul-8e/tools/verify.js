// Vérifications automatiques du manuel généré : structure des séances, réponses V2 vs V1, images, exports
const { loadSeances, V1 } = require("../src/load");
const { solveExercice } = require("../src/exo-parser");
const fs = require("fs"), path = require("path");
const { fig } = require("../src/seance-generator");
const seances = loadSeances();
let errors = 0, warns = 0;
const norm = (s) => String(s).replace(/\u00A0|\s/g, "").replace(/\*\*/g, "").replace(/\{(\d+)\/(\d+)\}/g, "$1/$2").toLowerCase();
const nums = (s) => (norm(s).match(/\d+(,\d+)?/g) || []);
seances.forEach((s) => {
  // images
  const files = [];
  if (s.image) files.push(s.image.file);
  s.lecon.forEach((b) => { if (b && b.t === "fig") files.push(b.file); });
  if (s.exercices.figure) files.push(s.exercices.figure.file);
  files.forEach((f) => { if (!fs.existsSync(fig(f))) { console.log(`S${s.num} image manquante : ${f}`); errors++; } });
  // structure exos
  const ex = s.exercices;
  if (ex.application.length !== 2 || ex.evaluation.length !== 2) { console.log(`S${s.num} : ${ex.application.length} app / ${ex.evaluation.length} eval`); warns++; }
  [...ex.application, ...ex.evaluation].forEach((e, k) => {
    if (e.items.length !== 4) { console.log(`S${s.num} ex${k + 1} : ${e.items.length} items`); warns++; }
    const isQcm = /Choisis|vrai ou faux|vraie ou fausse/i.test(e.consigne);
    if (isQcm) { if (e.v1.length !== e.items.length) { console.log(`S${s.num} ex${k + 1} QCM sans réponses`); errors++; } return; }
    const r = solveExercice(e);
    const shorts = r.shorts;
    shorts.forEach((sh, i) => {
      if (!sh || sh === "—") { console.log(`S${s.num} ex${k + 1}.${i + 1} : réponse vide`); errors++; return; }
      const v1 = (e.v1[i] || "").replace(/^\d+\.\s*/, "");
      if (v1) { const a = nums(v1), b = nums(sh); const last = a[a.length - 1]; if (last && !b.includes(last) && !norm(sh).includes(norm(last))) { console.log(`S${s.num} ex${k + 1}.${i + 1} : V1 « ${v1} » ≠ V2 « ${sh} »`); warns++; } }
    });
  });
  // leçon : présence de blocs pédagogiques
  const kinds = new Set(s.lecon.map((b) => (typeof b === "string" ? "p" : b.t)));
  if (!kinds.has("methode")) { console.log(`S${s.num} : pas de bloc Méthode`); warns++; }
  if (!kinds.has("retenir")) { console.log(`S${s.num} : pas de bloc À retenir`); warns++; }
});
console.log(`${seances.length} séances vérifiées — ${errors} erreur(s), ${warns} avertissement(s)`);
process.exit(errors ? 1 : 0);
