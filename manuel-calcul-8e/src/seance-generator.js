// Génère une séance complète : fiche de préparation (réimportée V1 ou nouvelle) + leçon (V2) + exercices corrigés détaillés
const path = require("path");
const B = require("./builders");
const { solveExercice } = require("./exo-parser");
const { p, titled, AlignmentType, C } = B;

const ASSETS = path.join(__dirname, "..", "assets");
const fig = (name) => (name.startsWith("v1:") ? path.join(ASSETS, "import", "media", name.slice(3)) : name.startsWith("scene:") ? path.join(ASSETS, "scenes", name.slice(6)) : path.join(ASSETS, "figures", `${name}.png`));

// ---------- FICHE ----------
// s.fiche : lignes importées V1 [[cells...]] (11 lignes) ou construite par newFiche()
function buildFiche(s, total) {
  const meta = s.meta;
  const rows = [];
  const F = s.fiche;
  const rowsV1 = F.slice(2); // sauter les 2 lignes d'en-tête
  rowsV1.forEach((r) => {
    if (r.length === 1) { rows.push(B.sectionRow(r[0][0])); return; }
    const [et, ens, app, tech, sup, obs] = r;
    let etape = et[0] || "", duree = null;
    const m = etape.match(/^(.*?)\s*\((.*)\)$/); if (m) { etape = m[1]; duree = `(${m[2]})`; }
    // application/évaluation : les réponses détaillées apparaissent dans la section EXERCICES ; ici réponses courtes
    let appLines = app;
    if (/Application|ÉVALUATION/i.test(etape) && s.shortAnswers) appLines = s.shortAnswers[/Application/i.test(etape) ? "app" : "eval"] || app;
    rows.push(B.stepRow({ etape, duree, enseignant: ens, apprenants: appLines, technique: tech[0] || "", support: sup[0] || "", observation: obs }));
  });
  return [
    B.pageBreak(),
    titled(`SÉANCE ${s.num} / ${total}`, { anchor: `seance${s.num}`, size: 26 }),
    titled(s.titre, { size: 28, color: C.rouge, spacingAfter: 120 }),
    titled("FICHE DE PRÉPARATION", { size: 24 }),
    B.metaTable({ discipline: "Calcul", sousDiscipline: meta["Sous-discipline"] || s.sousDiscipline, theme: meta["Thème"] || s.theme, titre: s.titre, objectif: meta["Objectif spécifique"] || s.objectif, support: meta["Support et matériel"] || s.support, classe: "8ème", seance: `${s.num} / ${total}`, duree: meta["Durée"] || "30 min (+ 30 min d'évaluation à la séance suivante)" }),
    B.empty(80),
    B.deroulementTable(rows),
  ];
}

// ---------- LEÇON ----------
// blocs : string → paragraphe ; {t:"h"} sous-titre ; {t:"hh"} ; {t:"p"} ; {t:"ul",x:[]} ; {t:"fig",file,legende,widthCm} ;
// {t:"methode",titre,etapes:[]} ; {t:"formule",...} ; {t:"attention",x} ; {t:"retenir",x} ; {t:"table",header,rows,widths} ;
// {t:"numeration",values,opts} ; {t:"conversion",fam,list,opts} ; {t:"op",a,op,b} ; {t:"mult",a,b} ; {t:"div",a,b,mode,decimales} ; {t:"preuve9",...} ; {t:"raw",els:[]}
function renderBlocks(blocks) {
  const out = [];
  (blocks || []).forEach((blk) => {
    if (typeof blk === "string") { out.push(B.leconPara(blk)); return; }
    switch (blk.t) {
      case "h": out.push(B.leconSousTitre(blk.x)); break;
      case "hh": out.push(B.leconSousSous(blk.x)); break;
      case "p": out.push(B.leconPara(blk.x)); break;
      case "ul": blk.x.forEach((li) => out.push(B.leconPuce(li))); break;
      case "fig": out.push(...B.figure(fig(blk.file), blk.legende, { widthCm: blk.widthCm || 12, source: blk.source })); break;
      case "methode": out.push(...B.methode(blk.titre, blk.etapes)); break;
      case "formule": out.push(...B.formule(blk)); break;
      case "attention": out.push(...B.attention(blk.x)); break;
      case "retenir": out.push(...B.retenir(blk.x)); break;
      case "table": out.push(...B.dataTable(blk.header, blk.rows, { widths: blk.widths, size: blk.size || 20, center: blk.center !== false, align: AlignmentType.CENTER })); break;
      case "numeration": out.push(...B.numerationTable(blk.values, blk.opts || {})); break;
      case "conversion": out.push(...B.conversionTable(blk.fam, blk.list, blk.opts || {})); break;
      case "op": { const r = B.opPosee(blk.a, blk.op, blk.b); out.push(r.table); if (blk.legende !== null) out.push(B.legende(blk.legende || `${B.fmt(B.fmt(blk.a))} ${blk.op === "-" ? "−" : "+"} ${B.fmt(blk.b)} = ${r.resultFmt}`)); break; }
      case "mult": { const r = B.multPosee(blk.a, blk.b); out.push(r.table); out.push(B.legende(blk.legende || `${B.fmt(blk.a)} × ${B.fmt(blk.b)} = ${r.resultFmt}`)); break; }
      case "div": { const r = B.potence(blk.a, blk.b, { mode: blk.mode || "long", decimales: blk.decimales || 0 }); out.push(r.table); out.push(B.legende(blk.legende || (r.exact ? `${B.fmt(blk.a)} ÷ ${blk.b} = ${r.quotientStr}` : `${B.fmt(blk.a)} ÷ ${blk.b} : quotient ${r.quotientStr}, reste ${r.reste}`))); break; }
      case "preuve9": out.push(...B.preuve9(blk)); break;
      case "raw": out.push(...blk.els); break;
      case "exemple": out.push(p(`**Exemple :** ${blk.x}`, { size: 22, keyColor: C.noir, color: C.bleu, indent: 360, spacingAfter: 80, align: AlignmentType.JUSTIFIED })); break;
    }
  });
  return out;
}
function buildLecon(s) {
  const out = [B.pageBreak(), titled("LEÇON", { size: 22, align: AlignmentType.LEFT, spacingAfter: 40 }), B.leconTitre(s.titre, `lecon${s.num}`)];
  if (s.image) out.push(...B.figure(fig(s.image.file), s.image.legende, { widthCm: s.image.widthCm || 13 }));
  out.push(...renderBlocks(s.lecon));
  return out;
}

// ---------- EXERCICES ----------
// s.exercices = { application:[{consigne, items, v1}], evaluation:[...] , figure:{file,legende} }
function buildExercices(s) {
  const out = [titled(`EXERCICES — Séance ${s.num} : ${s.titre}`, { anchor: `exos${s.num}`, size: 26, color: C.rouge, align: AlignmentType.LEFT, spacingBefore: 200 })];
  const ex = s.exercices;
  if (ex.figure) out.push(...B.figure(fig(ex.figure.file), ex.figure.legende, { widthCm: ex.figure.widthCm || 10 }));
  const all = [];
  [["Application", ex.application], ["Évaluation", ex.evaluation]].forEach(([label, list]) => {
    out.push(p(`**${label}**`, { size: 24, keyColor: C.vert, spacingBefore: 160, keepNext: true }));
    list.forEach((e, i) => {
      const num = all.length + 1;
      out.push(p(`**Exercice ${num}** — ${e.consigne}`, { size: 22, keyColor: C.noir, spacingBefore: 100, keepNext: true }));
      e.items.forEach((it) => out.push(p(it, { size: 22, indent: 360, spacingAfter: 40 })));
      all.push({ num, e, label });
    });
  });
  out.push(p("**CORRIGÉ**", { size: 26, keyColor: C.corrige, spacingBefore: 240 }));
  const shorts = { app: [], eval: [] };
  all.forEach(({ num, e, label }) => {
    out.push(p(`**Corrigé de l'exercice ${num}** — ${e.consigne}`, { size: 22, keyColor: C.noir, spacingBefore: 140, keepNext: true }));
    const isQcm = /Choisis|vrai ou faux|vraie ou fausse/i.test(e.consigne);
    let r;
    if (isQcm) {
      r = { perItem: e.items.map((it, i) => { const ans = (e.v1[i] || "").replace(/^\d+\.\s*/, ""); return { els: [p(`**${i + 1}.** ${ans}`, { size: 21, keyColor: C.corrige, color: C.corrige, indent: 360, spacingAfter: 40 })], short: ans }; }) };
    } else r = solveExercice(e);
    const target = label === "Application" ? shorts.app : shorts.eval;
    if (r.grouped) { out.push(...r.grouped); r.shorts.forEach((sh, i) => target.push(`${i + 1}. ${sh}`)); }
    else r.perItem.forEach((o, i) => { if (!isQcm) out.push(p(`**${i + 1}.** ${e.items[i].replace(/^\d+\.\s*/, "")}`, { size: 21, keyColor: C.noir, italic: true, spacingBefore: 60, spacingAfter: 20, keepNext: true })); out.push(...o.els); target.push(`${i + 1}. ${o.short}`); });
  });
  s.shortAnswers = shorts; // pour la fiche
  return out;
}

function buildSeance(s, total) {
  const exos = buildExercices(s); // d'abord : calcule les réponses courtes pour la fiche
  return [...buildFiche(s, total), ...buildLecon(s), ...exos];
}

module.exports = { buildSeance, renderBlocks, fig };
