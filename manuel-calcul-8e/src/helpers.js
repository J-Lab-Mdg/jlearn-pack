// Petits constructeurs pour écrire les contenus V2 de façon compacte
const B = require("./builders");
const { fmt } = B;

// Fiche de préparation au format V1 (lignes de cellules ; chaque cellule = liste de lignes)
function newFiche({ revision, mise, miseApp = "Les élèves écoutent et proposent une réponse.", titre, objectifEleve, observation, support, note = "", analyse, synthese, appEns, evalEns, appSupport = "Cahier, ardoise" }) {
  const qa = (pairs) => [pairs.map(([q]) => q), pairs.map(([, r]) => `R.A. : ${r}`)];
  const [rq, ra] = qa(revision), [aq, aa] = qa(analyse);
  return [
    [["Étapes et Durée"], ["Déroulement de la leçon"], ["Technique et Stratégie"], ["Support et Matériel"], ["Observation"]],
    [[], ["Enseignant"], ["Apprenants"], [], [], []],
    [["I. RÉVISION (5 min)"], rq, ra, ["Question-réponse, individuel"], ["—"], ["Calcul mental"]],
    [["II. NOUVELLE LEÇON (25 min)"]],
    [["1. Mise en situation"], [mise], [miseApp], ["Collectif, oral"], ["Tableau noir"], []],
    [["2. Présentation"], [`Aujourd'hui nous allons apprendre : « ${titre} ». Après cette séance vous serez capables de ${objectifEleve}.`], ["Les élèves écoutent."], ["Collectif, oral"], ["Tableau noir, cahier"], []],
    [["3. Observation"], [`Regardez et observez bien ${observation}.`], ["Les élèves observent silencieusement."], ["Collectif, visuel"], [support], note ? [note] : []],
    [["4. Analyse"], aq, aa, ["Question-réponse, collectif"], [support], []],
    [["5. Synthèse"], [synthese], ["Les élèves écoutent."], ["Exposé"], ["Tableau noir"], []],
    [["6. Application"], appEns, ["(voir corrigé détaillé dans la section EXERCICES)"], ["Individuel, cahier"], [appSupport], []],
    [["III. ÉVALUATION (30 min — séance suivante)"], evalEns, ["(voir corrigé détaillé dans la section EXERCICES)"], ["Individuel, feuille"], ["Cahier, feuille d'évaluation"], []],
  ];
}
// Lignes « enseignant » de la fiche à partir d'exercices
const ensLines = (exos) => exos.flatMap((e) => [e.consigne, ...e.items]);

// exercice calculé automatiquement (le parser trouve le solveur)
const ex = (consigne, items) => ({ consigne, items: items.map((it, i) => (/^\d+\. /.test(it) ? it : `${i + 1}. ${it}`)), v1: [] });
// QCM / vrai-faux : réponses fournies
const qcm = (items, answers) => ({ consigne: "Choisis la bonne réponse.", items: items.map((it, i) => `${i + 1}. ${it}`), v1: answers.map((a, i) => `${i + 1}. ${a}`) });
const vf = (items, answers) => ({ consigne: "Vrai ou faux ?", items: items.map((it, i) => `${i + 1}. ${it}`), v1: answers.map((a, i) => `${i + 1}. ${a}`) });
// exercice avec corrigé rédigé à la main : corrige = [ [lignes ou blocs] par item ], short = [résumés]
const exc = (consigne, items, corrige, short) => ({ consigne, items: items.map((it, i) => `${i + 1}. ${it}`), v1: [], corrige, short });

// blocs de leçon
const h = (x) => ({ t: "h", x }), hh = (x) => ({ t: "hh", x }), ul = (x) => ({ t: "ul", x }), fig = (file, legende, widthCm) => ({ t: "fig", file, legende, widthCm });
const methode = (titre, etapes) => ({ t: "methode", titre, etapes });
const formule = (o) => ({ t: "formule", ...o });
const attention = (x) => ({ t: "attention", x }), retenir = (x) => ({ t: "retenir", x }), exemple = (x) => ({ t: "exemple", x });
const table = (header, rows, widths, size) => ({ t: "table", header, rows, widths, size });
const numeration = (values, opts) => ({ t: "numeration", values, opts });
const conversion = (fam, list, opts) => ({ t: "conversion", fam, list, opts });
const op = (a, o, b, legende) => ({ t: "op", a, op: o, b, legende });
const mult = (a, b, legende) => ({ t: "mult", a, b, legende });
const div = (a, b, mode, decimales, legende) => ({ t: "div", a, b, mode, decimales, legende });
const preuve9 = (o) => ({ t: "preuve9", ...o });

module.exports = { newFiche, ensLines, ex, qcm, vf, exc, h, hh, ul, fig, methode, formule, attention, retenir, exemple, table, numeration, conversion, op, mult, div, preuve9, fmt };
