// ============================================================
// data-theme1.js — T3 (9ème / CE) — THÈME 1 : LES ALIMENTS
// Source : RAPE T3 2025-2026, Période 1 (08/09-24/10/2025).
// Contenu rédigé de zéro (Traitement C) d'après le RAPE.
// ============================================================
const DOC = "RAPE T3 — Répartition annuelle 2025-2026 (hay.education.mg)";

const st = (ens, app, technique) => ({ ens, app, technique });

const theme1 = {
  numero: 1,
  nom: "Les aliments",
  source: "RAPE T3 2025-2026 — Période 1",
  seances: [
    { // ---------------- SÉANCE 1 — Expression Orale ----------------
      n: 1, titre: "Les aliments du quotidien", titreFiche: "Nommer les aliments du quotidien.",
      sd: "Expression Orale",
      objectif: "Nommer les aliments et les plats malgaches du quotidien.",
      support: "Images d'aliments, tableau noir.",
      revision: st(["Que mangeons-nous ce matin à la maison ?"], ["R.A. : du riz, du lait, du pain…"], ["Question/réponse, collectif"]),
      miseEnSituation: st(["(montrer une image de repas) Regardez : une famille malgache prend son repas. Que voyez-vous sur la table ?"], ["Écoutent, réagissent."], ["Observation dirigée"]),
      presentation: st(["Aujourd'hui, nous découvrons les noms des aliments."], ["Écoutent."], ["Exposé"]),
      observation: st(["Citez des aliments que vous aimez."], ["le riz, la banane, le poisson, les légumes…"], ["Brainstorming"]),
      analyse: st(["Classez : fruits / légumes / plats."], ["Classement collectif au tableau."], ["Classement"]),
      synthese: st(["Les aliments : le riz, la viande, le poisson, les légumes, les fruits ; les plats malgaches : riz + ravitoto, riz + romazava."], ["Répètent, copient."], ["Répétition"]),
      application: st(["Nomme trois aliments de ton déjeuner."], ["Répondent à tour de rôle."], ["Expression libre"]),
      evaluation: st(["Chacun nomme deux aliments et un plat malgache."], ["Répondent (individuel)."], ["Travail individuel"]),
      lecon: {
        titre: "1. Les aliments",
        blocs: [
          { st: "A. Les aliments de base", txt: "le riz — la viande — le poisson — les œufs — le lait — les légumes — les fruits." },
          { st: "B. Les plats malgaches", txt: "riz + ravitoto (feuilles de manioc) — riz + romazava — riz + viande de porc aux feuilles de manioc." },
        ],
        aretenir: "Un aliment est ce que l'on mange pour grandir et être en bonne santé.",
      },
      exercices: [
        { t: "Exercice 1 (12 pts)", q: "Entoure les aliments : table — riz — banane — chaise — poisson — cahier.", pts: 12 },
        { t: "Exercice 2 (8 pts)", q: "Cite deux plats malgaches.", pts: 8 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "riz, banane, poisson", r: true }, " (4 pts chacun)."],
        ["Ex. 2 — ", { t: "riz + ravitoto, riz + romazava", r: true }, " (4 pts chacun)."],
      ],
    },
    { // ---------------- SÉANCE 2 — Conjugaison ----------------
      n: 2, titre: "Être et avoir au présent", titreFiche: "Conjuguer être et avoir au présent de l'indicatif.",
      sd: "Conjugaison",
      objectif: "Conjuguer les verbes être et avoir au présent de l'indicatif.",
      support: "Tableau noir, ardoises.",
      revision: st(["Conjuguez « manger » au présent avec je / tu / il."], ["je mange, tu manges, il mange."], ["Interrogation orale"]),
      miseEnSituation: st(["« J'ai faim. » « Tu as faim. » Quel petit mot change ?"], ["Écoutent, comparent."], ["Comparaison"]),
      presentation: st(["Nous conjuguons être et avoir au présent."], ["Écoutent."], ["Exposé"]),
      observation: st(["Lisez : je suis, tu es, il est / j'ai, tu as, il a."], ["Lisent."], ["Lecture"]),
      analyse: st(["Que remarquez-vous sur la fin des verbes ?"], ["La fin change avec la personne."], ["Découverte"]),
      synthese: st(["être : je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont. avoir : j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont."], ["Copient le tableau."], ["Copie"]),
      application: st(["Conjuguez « avoir » avec nous / vous / ils."], ["nous avons, vous avez, ils ont."], ["Ardoise"]),
      evaluation: st(["Conjugue être et avoir au présent (je, tu, il)."], ["Écrivent (individuel)."], ["Travail individuel"]),
      lecon: {
        titre: "1. Être et avoir au présent",
        blocs: [
          { st: "A. Être", txt: "je suis — tu es — il/elle est — nous sommes — vous êtes — ils/elles sont." },
          { st: "B. Avoir", txt: "j'ai — tu as — il/elle a — nous avons — vous avez — ils/elles ont." },
        ],
        aretenir: "Le verbe s'accorde toujours avec le sujet qui le commande.",
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjugue « être » au présent : je, tu, nous.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Conjugue « avoir » au présent : tu, vous, ils.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "je suis, tu es, nous sommes", r: true }, "."],
        ["Ex. 2 — ", { t: "tu as, vous avez, ils ont", r: true }, "."],
      ],
    },
    { // ---------------- SÉANCE 3 — Lecture (sons) ----------------
      n: 3, titre: "Les sons [ã] et [õ]", titreFiche: "Lire les mots avec les sons [ã] (an/en/em/am) et [õ] (on/ont/om).",
      sd: "Lecture",
      objectif: "Lire des mots et phrases avec les sons [ã] et [õ].",
      support: "Tableau noir, fiches-mots.",
      revision: st(["Lisez : maman, bonbon."], ["Lisent."], ["Lecture"]),
      miseEnSituation: st(["Écoutez : tant — temps — camps. Quel son entend-on ?"], ["Écoutent, identifient [ã]."], ["Écoute active"]),
      presentation: st(["Nous lisons les sons [ã] et [õ]."], ["Écoutent."], ["Exposé"]),
      observation: st(["Lisez : an, en, em, am / on, ont, om."], ["Lisent."], ["Lecture"]),
      analyse: st(["Dans « lampe » et « bonbon », quelles lettres font le son ?"], ["an / on."], ["Analyse"]),
      synthese: st(["[ã] s'écrit an, en, em, am (tant, temps, lampe, champ). [õ] s'écrit on, ont, om (bonbon, font, bombe)."], ["Répètent, copient."], ["Synthèse"]),
      application: st(["Lis : maman, banane, canard, pantalon, mouton."], ["Lisent à tour de rôle."], ["Lecture"]),
      evaluation: st(["Lis : lampe, banane, bonbon, mouton."], ["Lisent (individuel)."], ["Lecture individuelle"]),
      lecon: {
        titre: "1. Les sons [ã] et [õ]",
        blocs: [
          { st: "A. Le son [ã]", txt: "an, en, em, am — tant, temps, lampe, champ, banane, canard." },
          { st: "B. Le son [õ]", txt: "on, ont, om — bonbon, font, bombe, mouton, pantalon." },
        ],
        aretenir: "Un même son peut s'écrire de plusieurs façons.",
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Entoure le son [ã] : banane — bombe — lampe.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Entoure le son [õ] : mouton — tant — bonbon.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "banane, lampe", r: true }, "."],
        ["Ex. 2 — ", { t: "mouton, bonbon", r: true }, "."],
      ],
    },
  ],
};

// ---------------- ANNEXE DU THÈME 1 — nouvelle structure détaillée ----------------
const annexe1 = {
  theme: 1,
  nom: "Les aliments",
  conjugaison: [
    {
      verbe: "être", temps: "présent de l'indicatif",
      quand: "Pour dire qui l'on est, où l'on est, comment l'on est.",
      exemplesQuand: ["Je suis à table.", "Nous sommes à l'école."],
      comment: "Verbe irrégulier : radical + terminaisons propres à chaque personne.",
      tableau: ["je suis", "tu es", "il/elle est", "nous sommes", "vous êtes", "ils/elles sont"],
      pourquoi: "« être » est un verbe d'état : il relie le sujet à un état ou un lieu ; il s'accorde toujours avec le sujet.",
      pieges: [["je sont", "je suis"], ["il es", "il est"]],
    },
    {
      verbe: "avoir", temps: "présent de l'indicatif",
      quand: "Pour dire ce que l'on possède ou ce que l'on ressent (faim, soif).",
      exemplesQuand: ["J'ai faim.", "Elle a une cuillère."],
      comment: "Verbe irrégulier au présent.",
      tableau: ["j'ai", "tu as", "il/elle a", "nous avons", "vous avez", "ils/elles ont"],
      pourquoi: "« avoir » exprime la possession ; il sert aussi d'auxiliaire au passé composé.",
      pieges: [["j'ai" , "j'ai (pas de « e » à « j'ai »)"], ["ils ont", "ils ont (le « t » final)"]],
    },
  ],
  grammaire: [
    { notion: "Le nom et son déterminant", regle: "Le nom est précédé d'un déterminant : le, la, les, un, une, des.", exemple: "le riz, une banane, des légumes.", contre: "riz (sans déterminant)" },
    { notion: "Les comparatifs", regle: "plus … que / moins … que pour comparer.", exemple: "La banane est plus sucrée que le citron.", contre: "plus sucrée que le citron est (ordre des mots)" },
  ],
  orthographe: [
    { notion: "Le son [ã]", regle: "s'écrit an, en, em, am.", exemples: "tant, temps, lampe, champ.", pieges: [["en", "em devant p, m (ex : temps, champ)"]] },
    { notion: "Le son [õ]", regle: "s'écrit on, ont, om.", exemples: "bonbon, font, bombe.", pieges: [["om devant p, b, m (ex : bombe, trompette)"]] },
  ],
  vocabulaire: [
    { champ: "Les aliments", mots: "le riz, la viande, le poisson, les œufs, le lait, les légumes, les fruits" },
    { champ: "Les goûts", mots: "sucré, salé, aigre, amer" },
    { champ: "Les ustensiles", mots: "la cuillère, le couteau, le plat, le bol, le verre, la carafe" },
    { champ: "Les repas", mots: "le petit déjeuner, le déjeuner, le dîner, le goûter" },
  ],
};

module.exports = { theme1, annexe1, DOC };
