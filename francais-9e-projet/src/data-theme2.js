// ============================================================
// data-theme2.js — T3 (9ème / CE) — THÈME 2 : LA FAMILLE ÉLARGIE
// Source : RAPE T3 2025-2026, Période 2 (03/11-19/12/2025). Traitement C.
// ============================================================
const DOC = "RAPE T3 — Répartition annuelle 2025-2026 (hay.education.mg)";
const st = (ens, app, technique) => ({ ens, app, technique });

const theme2 = {
  numero: 2,
  nom: "La famille élargie",
  source: "RAPE T3 2025-2026 — Période 2",
  seances: [
    {
      n: 4, titre: "Les membres de la famille élargie", titreFiche: "Nommer les membres de la famille élargie.",
      sd: "Expression Orale",
      objectif: "Nommer les membres de la famille élargie et les liens de parenté.",
      support: "Schéma de la famille, tableau noir.",
      image: { file: "theme2_famille.png", w: 1100, h: 560, legende: "La famille élargie : grands-parents, oncle, tante, cousins." },
      revision: st(["Qui vit dans ta maison ?"], ["R.A. : mon père, ma mère, mon frère…"], ["Question/réponse"]),
      miseEnSituation: st(["(montrer le schéma) Regardez cette famille. Qui sont les personnes autour de l'enfant ?"], ["Observent, répondent."], ["Observation dirigée"]),
      presentation: st(["Aujourd'hui, nous nommons la famille élargie."], ["Écoutent."], ["Exposé"]),
      observation: st(["Citez les membres de votre famille élargie."], ["mon grand-père, ma tante, mon cousin…"], ["Brainstorming"]),
      analyse: st(["Qui est le frère de ton père ?"], ["mon oncle."], ["Question/réponse"]),
      synthese: st(["La famille élargie : le grand-père, la grand-mère, l'oncle, la tante, le cousin, la cousine, la nièce."], ["Répètent, copient."], ["Répétition"]),
      application: st(["Présente un membre de ta famille élargie."], ["« Voici mon oncle. »"], ["Expression libre"]),
      evaluation: st(["Nomme trois membres de la famille élargie."], ["Répondent (individuel)."], ["Travail individuel"]),
      lecon: {
        titre: "1. La famille élargie",
        blocs: [
          { st: "A. Les adultes", txt: "le grand-père, la grand-mère, l'oncle, la tante." },
          { st: "B. Les enfants", txt: "le cousin, la cousine, la nièce, le neveu." },
        ],
        aretenir: "La famille élargie réunit les parents au-delà du père, de la mère et des frères et sœurs.",
      },
      exercices: [
        { t: "Exercice 1 (12 pts)", q: "Le frère de mon père est mon .... La sœur de ma mère est ma ....", pts: 12 },
        { t: "Exercice 2 (8 pts)", q: "Cite deux enfants de la famille élargie.", pts: 8 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "oncle, tante", r: true }, " (6 pts chacun)."],
        ["Ex. 2 — ", { t: "le cousin, la cousine", r: true }, " (4 pts chacun)."],
      ],
    },
    {
      n: 5, titre: "L'imparfait : être, avoir, faire", titreFiche: "Conjuguer être, avoir, faire à l'imparfait de l'indicatif.",
      sd: "Conjugaison",
      objectif: "Conjuguer être, avoir, faire à l'imparfait de l'indicatif.",
      support: "Tableau noir, ardoises.",
      revision: st(["Conjuguez « être » au présent."], ["je suis, tu es, il est…"], ["Interrogation orale"]),
      miseEnSituation: st(["« Quand j'étais petit, j'habitais à la campagne. » Quel temps entend-on ?"], ["Écoutent, identifient le passé."], ["Écoute active"]),
      presentation: st(["Nous conjuguons à l'imparfait."], ["Écoutent."], ["Exposé"]),
      observation: st(["Lisez : j'étais, tu étais, il était."], ["Lisent."], ["Lecture"]),
      analyse: st(["Quelle est la terminaison de « nous » ?"], ["-ions (nous étions)."], ["Analyse"]),
      synthese: st(["être : j'étais, tu étais, il était, nous étions, vous étiez, ils étaient. avoir : j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient. faire : je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient."], ["Copient le tableau."], ["Copie"]),
      application: st(["Conjuguez « avoir » à l'imparfait avec je / nous."], ["j'avais, nous avions."], ["Ardoise"]),
      evaluation: st(["Conjugue être et faire à l'imparfait (il, nous)."], ["Écrivent (individuel)."], ["Travail individuel"]),
      lecon: {
        titre: "1. L'imparfait de l'indicatif",
        blocs: [
          { st: "A. Être / Avoir", txt: "j'étais, tu étais, il était… — j'avais, tu avais, il avait…" },
          { st: "B. Faire", txt: "je faisais, tu faisais, il faisait, nous faisions, vous faisiez, ils faisaient." },
        ],
        aretenir: "L'imparfait décrit une habitude ou une situation qui dure dans le passé.",
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjugue « être » à l'imparfait : je, nous.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Conjugue « faire » à l'imparfait : il, ils.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "j'étais, nous étions", r: true }, "."],
        ["Ex. 2 — ", { t: "il faisait, ils faisaient", r: true }, "."],
      ],
    },
    {
      n: 6, titre: "Les sons [œ] et [ɛ̃]", titreFiche: "Lire les mots avec les sons [œ] (e, eu, œu) et [ɛ̃] (ain, in, eint).",
      sd: "Lecture",
      objectif: "Lire des mots avec les sons [œ] et [ɛ̃].",
      support: "Fiches-mots, tableau noir.",
      revision: st(["Lisez : œuf, matin."], ["Lisent."], ["Lecture"]),
      miseEnSituation: st(["Écoutez : neuf, fleurs, cœur. Quel son revient ?"], ["Écoutent, identifient [œ]."], ["Écoute active"]),
      presentation: st(["Nous lisons les sons [œ] et [ɛ̃]."], ["Écoutent."], ["Exposé"]),
      observation: st(["Lisez : e, eu, œu / ain, in, eint."], ["Lisent."], ["Lecture"]),
      analyse: st(["Dans « peint » et « lapin », quelles lettres font le son [ɛ̃] ?"], ["ein / in."], ["Analyse"]),
      synthese: st(["[œ] s'écrit e, eu, œu (petit, œufs, neveu, cœur). [ɛ̃] s'écrit ain, in, eint (lapin, Germain, peint, matin)."], ["Répètent, copient."], ["Synthèse"]),
      application: st(["Lis : neuf, sœur, lapin, matin, peintre."], ["Lisent à tour de rôle."], ["Lecture"]),
      evaluation: st(["Lis : œufs, neveu, lapin, peint."], ["Lisent (individuel)."], ["Lecture individuelle"]),
      lecon: {
        titre: "1. Les sons [œ] et [ɛ̃]",
        blocs: [
          { st: "A. Le son [œ]", txt: "e, eu, œu — petit, œufs, neveu, cœur, fleurs." },
          { st: "B. Le son [ɛ̃]", txt: "ain, in, eint — lapin, Germain, peint, matin, matin." },
        ],
        aretenir: "Un même son peut s'écrire de plusieurs façons.",
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Entoure le son [œ] : neveu — lapin — sœur.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Entoure le son [ɛ̃] : matin — neuf — peint.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "neveu, sœur", r: true }, "."],
        ["Ex. 2 — ", { t: "matin, peint", r: true }, "."],
      ],
    },
  ],
};

const annexe2 = {
  theme: 2,
  nom: "La famille élargie",
  conjugaison: [
    {
      verbe: "être", temps: "imparfait de l'indicatif",
      quand: "Pour décrire une situation ou une habitude dans le passé.",
      exemplesQuand: ["Quand j'étais petit, j'habitais à la campagne.", "Nous étions à la ferme."],
      comment: "Radical ét- + terminaisons : ais, ais, ait, ions, iez, aient.",
      tableau: ["j'étais", "tu étais", "il/elle était", "nous étions", "vous étiez", "ils/elles étaient"],
      pourquoi: "L'imparfait peint le décor et les habitudes du passé ; il ne dit pas quand l'action s'arrête.",
      pieges: [["nous étions", "nous étions (un « i » à -ions)"], ["ils étaaient", "ils étaient"]],
    },
    {
      verbe: "faire", temps: "imparfait de l'indicatif",
      quand: "Pour raconter une action répétée dans le passé.",
      exemplesQuand: ["Le soir, nous faisions nos devoirs."],
      comment: "Radical fais- + terminaisons de l'imparfait.",
      tableau: ["je faisais", "tu faisais", "il/elle faisait", "nous faisions", "vous faisiez", "ils/elles faisaient"],
      pourquoi: "« faire » garde son radical fais- à toutes les personnes de l'imparfait.",
      pieges: [["ils faisaient", "ils faisaient (pas de « s » après -ai)"]],
    },
  ],
  grammaire: [
    { notion: "Les adjectifs possessifs", regle: "mon, ma, mes — ton, ta, tes — son, sa, ses — notre, votre, leur…", exemple: "mon oncle, sa tante, leurs cousins.", contre: "mon tante (→ ma tante)" },
    { notion: "Les pronoms il, elle, ils, elles", regle: "ils remplacent un nom déjà cité.", exemple: "« Le chien » → « il » ; « les chaises » → « elles ».", contre: "ils pour une fille (→ elle)" },
  ],
  orthographe: [
    { notion: "Le son [œ]", regle: "s'écrit e, eu, œu.", exemples: "petit, œufs, neveu, cœur.", pieges: [["œu", "e devant une consonne double (ex : petit, belle)"]] },
    { notion: "Le son [ɛ̃]", regle: "s'écrit ain, in, eint.", exemples: "lapin, Germain, peint, matin.", pieges: [["in", "im devant p, b, m (ex : timbre, grimper)"]] },
  ],
  vocabulaire: [
    { champ: "Les adultes", mots: "le grand-père, la grand-mère, l'oncle, la tante" },
    { champ: "Les enfants", mots: "le cousin, la cousine, la nièce, le neveu" },
    { champ: "Les liens", mots: "la parenté, la famille, le mariage, la naissance" },
  ],
};

module.exports = { theme2, annexe2, DOC };
