// annexes9e.js — Annexes de fin de thème, structure détaillée demandée (V2) :
// A. Conjugaison détaillée (quand / comment / pourquoi / pièges)
// B. Résumé grammaire   C. Résumé orthographe   D. Résumé vocabulaire
const B = require("./builders");
const { COLORS } = B;

const H = (txt) => B.p([{ t: txt, b: true, color: COLORS.rouge }], { base: { size: 26 } });
const SH = (txt) => B.p([{ t: txt, b: true, color: COLORS.vert }], { base: { size: 23 } });
const RUB = (txt) => [{ t: txt + " ", b: true, color: COLORS.bleu }];

function conjBlock(c) {
  const o = [];
  o.push(SH(c.verbe + " — " + c.temps));
  o.push(B.p([...RUB("Quand l'utiliser :"), { t: c.quand }], { base: { size: 21 } }));
  const eq = Array.isArray(c.exemplesQuand) ? c.exemplesQuand : [c.exemplesQuand];
  o.push(B.p(eq.map((e, i) => [{ t: "« " + e + " »", i: true, color: COLORS.bleu }].concat(i < eq.length - 1 ? [" / "] : [])).flat(), { base: { size: 21 } }));
  o.push(B.p([...RUB("Comment le former :"), { t: c.comment }], { base: { size: 21 } }));
  c.tableau.forEach((f) => o.push(B.p([{ t: "• " + f, color: COLORS.noir }], { base: { size: 21 } })));
  o.push(B.p([...RUB("Pourquoi :"), { t: c.pourquoi }], { base: { size: 21 } }));
  c.pieges.forEach(([faux, juste]) =>
    o.push(B.p([{ t: "✗ " + faux, color: "808080" }, { t: " → Écris : " }, { t: juste, r: true }], { base: { size: 21 } })));
  o.push(B.p("", { base: { size: 10 } }));
  return o;
}

function buildAnnexe(a) {
  const o = [];
  o.push(B.pageBreakPara());
  o.push(B.bookmarkPara("theme" + a.theme + "annexe",
    [{ t: "ANNEXES DU THÈME " + a.theme + " — " + a.nom.toUpperCase(), b: true, color: COLORS.rouge }],
    { base: { size: 28 } }));

  o.push(H("A. Conjugaison détaillée"));
  a.conjugaison.forEach((c) => o.push(...conjBlock(c)));

  o.push(H("B. Résumé grammaire"));
  a.grammaire.forEach((g) => {
    o.push(SH(g.notion));
    o.push(B.p([{ t: g.regle }], { base: { size: 21 } }));
    o.push(B.p([{ t: "Exemple : ", b: true }, { t: g.exemple, color: COLORS.bleu }], { base: { size: 21 } }));
    if (g.contre) o.push(B.p([{ t: "Attention : ", b: true }, { t: g.contre, r: true }], { base: { size: 21 } }));
  });

  o.push(H("C. Résumé orthographe"));
  a.orthographe.forEach((g) => {
    o.push(SH(g.notion));
    o.push(B.p([{ t: g.regle }], { base: { size: 21 } }));
    o.push(B.p([{ t: "Exemples : ", b: true }, { t: Array.isArray(g.exemples) ? g.exemples.join(", ") : g.exemples, color: COLORS.bleu }], { base: { size: 21 } }));
    (g.pieges || []).forEach(([q, j]) => o.push(B.p([{ t: "Piège : ", b: true }, { t: q + " → " }, { t: j, r: true }], { base: { size: 21 } })));
  });

  o.push(H("D. Résumé vocabulaire"));
  a.vocabulaire.forEach((v) => {
    o.push(B.p([{ t: v.champ + " : ", b: true, color: COLORS.vert }, { t: v.mots, color: COLORS.bleu }], { base: { size: 21 } }));
  });
  return o;
}

module.exports = { buildAnnexe };
