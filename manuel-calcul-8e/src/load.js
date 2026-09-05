// Fusion : import V1 (fiches, énoncés, corrigés) + contenus V2 (leçons, exercices nouveaux, images)
const fs = require("fs");
const path = require("path");
const { PROGRESSION } = require("./progression");

const V1 = JSON.parse(fs.readFileSync(path.join(__dirname, "..", "assets", "import", "seances-v1.json"), "utf8"));
const CONTENT = {};
["t1", "t2", "t3"].forEach((f) => { const file = path.join(__dirname, `content-${f}.js`); if (fs.existsSync(file)) Object.assign(CONTENT, require(file)); });

// Découpe la section EXERCICES V1 en { application:[{consigne,items,v1}], evaluation:[...] , figure }
function parseExosV1(s) {
  const txt = s.exos.map((it) => it.t || "");
  const ia = txt.indexOf("Application"), ie = txt.indexOf("Évaluation"), ic = txt.indexOf("Corrigé");
  const parse = (seg) => { const ex = []; seg.forEach((t) => { if (!t) return; if (/^\d+\. /.test(t)) ex[ex.length - 1].items.push(t); else ex.push({ consigne: t, items: [] }); }); return ex; };
  const application = parse(txt.slice(ia + 1, ie)), evaluation = parse(txt.slice(ie + 1, ic));
  const cor = txt.slice(ic + 1).filter((t) => /^\d+\. /.test(t)); let k = 0;
  [...application, ...evaluation].forEach((e) => { e.v1 = cor.slice(k, k + e.items.length); k += e.items.length; });
  const imgItem = s.exos.find((it) => it.img);
  const legende = imgItem ? (s.exos[s.exos.indexOf(imgItem) + 1] || {}).t : null;
  return { application, evaluation, figureV1: imgItem ? { file: `v1:${imgItem.img[0]}`, legende } : null };
}

function loadSeances() {
  return PROGRESSION.map((pr, i) => {
    const num = i + 1;
    const v1 = pr.v1 ? V1[String(pr.v1)] : null;
    const c = CONTENT[pr.id];
    if (!c) { if (process.env.ONLY) return null; throw new Error(`Contenu V2 manquant : ${pr.id}`); }
    const s = { num, id: pr.id, v1num: pr.v1, titre: pr.titre, meta: v1 ? { ...v1.meta } : {}, fiche: v1 ? v1.fiche : null, lecon: c.lecon, image: c.image || null, exercices: null };
    if (v1) {
      s.meta["Titre"] = pr.titre;
      const ex = parseExosV1(v1);
      s.exercices = { application: ex.application, evaluation: ex.evaluation, figure: c.exoFigure === null ? null : c.exoFigure || ex.figureV1 };
      // remplacements / ajouts d'exercices V2
      if (c.exercices) {
        if (c.exercices.application) s.exercices.application = c.exercices.application;
        if (c.exercices.evaluation) s.exercices.evaluation = c.exercices.evaluation;
      }
      if (c.fixItems) c.fixItems(s.exercices);
    } else {
      s.fiche = c.fiche; s.meta = c.meta;
      s.exercices = { application: c.exercices.application, evaluation: c.exercices.evaluation, figure: c.exoFigure || null };
    }
    if (c.meta) Object.assign(s.meta, c.meta);
    if (c.ficheFix) c.ficheFix(s.fiche);
    return s;
  }).filter(Boolean);
}
module.exports = { loadSeances, V1, CONTENT };
