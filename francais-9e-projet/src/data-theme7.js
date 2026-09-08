// =============================================================
// FRANCAIS 9e - THEME 7 : LES TRAVAUX DES CHAMPS - LES MALADIES
// Séances 19 à 21 (/186) — ancien programme (T2)
// Conjugaison : 1er groupe au présent, au passé composé, au futur simple
// =============================================================
const TH7 = {
  numero: 7,
  nom: "Les travaux des champs et les maladies",
  source: "Programme d'études antérieur — Trimestre 2",
  periodes: [
    ["Procédés et techniques", "La narration : raconter les travaux des champs et une visite au dispensaire."],
    ["Sémantico-lexical", "Les travaux des champs, les outils, les maladies et les soins."],
    ["Morphosyntaxe", "Le 1er groupe au présent, au passé composé et au futur simple."],
    ["Phonie-graphie", "Ne pas confondre l'infinitif en -er et le participe passé en -é."],
  ],
  objectifs: [
    "Nommer les travaux des champs, les outils et les maladies.",
    "Raconter des travaux et une visite au dispensaire.",
    "Conjuguer les verbes du 1er groupe aux trois temps.",
    "Distinguer l'infinitif -er du participe passé -é.",
  ],
  seances: [
    // ---------- SÉANCE 19 ----------
    {
      n: 19, titre: "Les travaux des champs", titreFiche: "Les travaux des champs.",
      sd: "Expression Orale",
      objectif: "Nommer et raconter les travaux des champs",
      support: "Images des travaux de la rizière, étiquettes des outils.",
      lecon: {
        titre: "1. Les travaux des champs",
        blocs: [
          { st: "A. Les travaux", txt: "labourer — semer — repiquer — sarcler — récolter — battre le riz — vanner." },
          { st: "B. Les lieux", txt: "la rizière — le champ — le talus — le canal d'irrigation." },
          { st: "C. Les outils", txt: "l'angady — la bêche — la houe — la faucille — le van — le pilon." },
        ],
        aretenir: "Les travaux des champs se font dans un ordre précis : labourer, semer, repiquer, sarcler, récolter.",
      },
      revision: {
        ens: "« Que fait-on à la ferme ? » - Révision du thème 6. Le professeur fait rappeler trois travaux de la ferme.",
        app: "Les élèves citent les travaux connus.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'une rizière et demande : « Que font ces cultivateurs ? »",
        app: "Les élèves nomment les travaux visibles.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer et raconter les travaux des champs.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « D'abord, le cultivateur laboure la rizière avec l'angady. Ensuite, il repique les plants. »",
        app: "Les élèves relèvent les verbes, les outils et les lieux.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots en trois groupes.",
        app: "Les élèves classent : travaux, lieux, outils.",
        technique: {
          sous: "I. Trois groupes de mots",
          points: [
            "Les travaux : labourer, semer, repiquer, sarcler, récolter.",
            "Les lieux : la rizière, le champ, le talus, le canal.",
            "Les outils : l'angady, la bêche, la houe, la faucille, le van.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait raconter les travaux dans l'ordre.",
        app: "Un élève raconte, les autres complètent.",
        technique: {
          sous: "II. L'ordre des travaux",
          points: [
            "D'abord, on laboure la rizière.",
            "Ensuite, on sème puis on repique les plants.",
            "Après, on sarcle les mauvaises herbes.",
            "Enfin, on récolte, on bat le riz et on le vanne.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique.",
        app: "Les élèves écrivent et racontent.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : rizière, angady, semer, faucille, récolter.",
            "Nommez l'outil pour : labourer, couper le riz, vanner.",
            "Racontez en trois phrases les travaux de la rizière.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et le récit.",
        app: "Chaque élève produit un récit correct.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois travaux des champs dans l'ordre.",
            "Nommez deux outils du cultivateur.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Classez ces mots en travaux, lieux ou outils : rizière — angady — semer — faucille — récolter — champ.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Racontez en trois phrases les travaux de la rizière, dans l'ordre.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "travaux : semer, récolter ; lieux : rizière, champ ; outils : angady, faucille", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : D'abord, le cultivateur laboure la rizière. Ensuite, il repique les plants. Enfin, il récolte le riz.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 20 ----------
    {
      n: 20, titre: "Le 1er groupe au présent", titreFiche: "Le 1er groupe au présent.",
      sd: "Conjugaison",
      objectif: "Conjuguer les verbes du 1er groupe au présent",
      support: "Tableau de conjugaison, liste de verbes du thème.",
      lecon: {
        titre: "2. Le 1er groupe au présent",
        blocs: [
          { st: "A. La règle", txt: "On enlève -er et on ajoute : -e, -es, -e, -ons, -ez, -ent." },
          { st: "B. Exemple", txt: "semer : je sème, tu sèmes, il sème, nous semons, vous semez, ils sèment." },
        ],
        aretenir: "Tous les verbes en -er suivent la même règle, sauf aller qui est irrégulier.",
      },
      revision: {
        ens: "« Conjuguez AVOIR au présent. » - Révision des verbes irréguliers. Le professeur fait rappeler les six formes.",
        app: "Les élèves conjuguent AVOIR au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Le cultivateur sème le riz. » et demande : « Et nous ? »",
        app: "Les élèves répondent : « Nous semons le riz. »",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer les verbes du 1er groupe au présent.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je sème — nous semons — ils sèment. »",
        app: "Les élèves relèvent les terminaisons.",
      },
      analyse: {
        ens: "Le professeur fait dégager la règle.",
        app: "Les élèves séparent le radical des terminaisons.",
        technique: {
          sous: "I. La règle du 1er groupe",
          points: [
            "On enlève la terminaison -er de l'infinitif.",
            "On ajoute : -e, -es, -e, -ons, -ez, -ent.",
            "Attention au verbe aller : je vais, tu vas, il va.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer plusieurs verbes du thème.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. Les verbes du thème",
          points: [
            "semer : je sème, nous semons, ils sèment",
            "récolter : je récolte, nous récoltons, ils récoltent",
            "nettoyer : je nettoie, nous nettoyons, ils nettoient",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et employer.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez semer au présent avec tu, nous, elles.",
            "Complétez : Le cultivateur ... la rizière. (labourer)",
            "Écrivez une phrase avec récolter au présent.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez sarcler au présent (je, vous, ils).",
            "Complétez : Nous ... le riz en fin de saison.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez semer et récolter au présent de l'indicatif.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec un verbe du 1er groupe : Le cultivateur ... la rizière. Nous ... le riz.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "je sème, tu sèmes, il sème, nous semons, vous semez, ils sèment — je récolte, nous récoltons, ils récoltent", r: true }, "."],
        ["Ex. 2 — ", { t: "laboure / récoltons", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 21 ----------
    {
      n: 21, titre: "Les maladies et le 1er groupe au passé composé", titreFiche: "Les maladies et le 1er groupe au passé composé.",
      sd: "Lecture",
      objectif: "Nommer les maladies et conjuguer le 1er groupe au passé composé",
      support: "Images de situations de santé, phrases à compléter.",
      lecon: {
        titre: "3. Les maladies et le passé composé",
        blocs: [
          { st: "A. Les maladies", txt: "la fièvre — la toux — le paludisme — la diarrhée — le rhume." },
          { st: "B. Les soins", txt: "aller au dispensaire — consulter — prendre des médicaments — se reposer." },
          { st: "C. Le passé composé", txt: "auxiliaire + participe passé en -é : Hier, nous avons consulté l'infirmier." },
        ],
        aretenir: "Le passé composé sert à raconter ce qui s'est passé ; le participe passé des verbes en -er se termine par -é.",
      },
      revision: {
        ens: "« Conjuguez semer au présent. » - Révision de la séance précédente. Le professeur fait rappeler les terminaisons.",
        app: "Les élèves conjuguent semer au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Que fais-tu quand tu as de la fièvre ? » puis écrit : « Hier, Rasoa a consulté l'infirmier. »",
        app: "Les élèves répondent et observent le temps du verbe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les maladies et employer le passé composé.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Nous avons consulté l'infirmier. Il a donné des médicaments. »",
        app: "Les élèves repèrent l'auxiliaire et le participe passé.",
      },
      analyse: {
        ens: "Le professeur fait dégager la règle et le lexique.",
        app: "Les élèves séparent l'auxiliaire du participe passé et nomment les maladies.",
        technique: {
          sous: "I. Le lexique et la règle",
          points: [
            "Les maladies : la fièvre, la toux, le paludisme, la diarrhée.",
            "Les soins : consulter, prendre des médicaments, se reposer.",
            "Le passé composé : auxiliaire au présent + participe passé en -é.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer et raconter.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison et récit",
          points: [
            "j'ai consulté — tu as consulté — il a consulté — nous avons consulté — vous avez consulté — ils ont consulté",
            "Le participe passé des verbes en -er se termine par -é.",
            "On raconte avec hier, ce matin, la semaine passée.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et raconter.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez soigner au passé composé avec nous.",
            "Mettez au passé composé : « Nous allons au dispensaire. »",
            "Racontez en deux phrases une visite au dispensaire.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et la conjugaison.",
        app: "Chaque élève produit un récit correct.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez deux maladies et deux soins.",
            "Mettez au passé composé : « Ils prennent des médicaments. »",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Citez deux maladies et deux soins.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Mettez au passé composé : « Nous allons au dispensaire. Ils prennent des médicaments. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "maladies : la fièvre, le paludisme ; soins : consulter, se reposer", r: true }, "."],
        ["Ex. 2 — ", { t: "Nous sommes allés au dispensaire. Ils ont pris des médicaments.", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 7
  // ============================================================
  annexe: {
    theme: 7,
    nom: "Les travaux des champs et les maladies",
    conjugaison: [
      {
        verbe: "Les verbes du 1er groupe (semer, récolter)",
        temps: "Présent de l'indicatif",
        quand: "Pour dire ce que l'on fait maintenant ou ce que l'on fait d'habitude.",
        exemplesQuand: [
          "Je sème le riz.",
          "Nous récoltons en fin de saison.",
        ],
        comment: "On enlève -er de l'infinitif et on ajoute : -e, -es, -e, -ons, -ez, -ent.",
        tableau: [
          "je sème — tu sèmes — il/elle sème",
          "nous semons — vous semez — ils/elles sèment",
        ],
        pourquoi: "Le 1er groupe est le plus nombreux du français : connaître sa règle permet de conjuguer des milliers de verbes.",
        pieges: [
          ["je seme sans accent", "je sème (accent grave)"],
          ["nous semmons", "nous semons"],
        ],
      },
      {
        verbe: "Les verbes du 1er groupe (consulter, soigner)",
        temps: "Passé composé",
        quand: "Pour raconter une action terminée, comme une visite au dispensaire.",
        exemplesQuand: [
          "Hier, nous avons consulté l'infirmier.",
          "Ils ont soigné l'enfant malade.",
        ],
        comment: "Auxiliaire avoir au présent + participe passé en -é.",
        tableau: [
          "j'ai soigné — tu as soigné — il/elle a soigné",
          "nous avons soigné — vous avez soigné — ils/elles ont soigné",
        ],
        pourquoi: "Le passé composé est le temps du récit : sans lui, on ne peut pas raconter ce qui s'est passé.",
        pieges: [
          ["nous avons soigner", "nous avons soigné"],
          ["j'ai consulté chez l'infirmier", "j'ai consulté l'infirmier"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le 1er groupe",
        regle: "Les verbes dont l'infinitif se termine par -er suivent la même conjugaison, sauf aller.",
        exemple: "semer, récolter, sarcler, soigner.",
        contre: "aller n'est pas du 1er groupe : je vais, tu vas, il va.",
      },
      {
        notion: "Le récit dans l'ordre",
        regle: "On raconte les travaux avec d'abord, ensuite, après, enfin.",
        exemple: "D'abord, on laboure. Ensuite, on sème.",
        contre: "Ne pas commencer par la récolte : l'ordre des travaux doit être respecté.",
      },
      {
        notion: "Les verbes de soin",
        regle: "consulter, soigner, prendre des médicaments, se reposer s'emploient avec un complément de personne.",
        exemple: "L'infirmier soigne l'enfant.",
        contre: "Ne pas confondre soigner (donner des soins) et guérir (retrouver la santé).",
      },
    ],
    orthographe: [
      {
        notion: "-er ou -é ?",
        regle: "L'infinitif se termine par -er, le participe passé par -é. On remplace par un verbe du 3e groupe : si on dit faire, c'est -er ; si on dit fait, c'est -é.",
        exemples: ["Je vais semer (faire)", "J'ai semé (fait)"],
        pieges: [
          ["j'ai semer", "j'ai semé"],
          ["je vais semé", "je vais semer"],
        ],
      },
      {
        notion: "Les verbes en -ger et -cer",
        regle: "Devant a et o, manger garde le e (nous mangeons) et commencer prend une cédille (nous commençons).",
        exemples: ["nous mangeons", "nous commençons"],
        pieges: [
          ["nous mangons", "nous mangeons"],
          ["nous commencons", "nous commençons"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les travaux des champs", mots: "labourer — semer — repiquer — sarcler — récolter — battre — vanner" },
      { champ: "Les lieux", mots: "la rizière — le champ — le talus — le canal d'irrigation — la digue" },
      { champ: "Les outils", mots: "l'angady — la bêche — la houe — la faucille — le van — le pilon" },
      { champ: "Les maladies", mots: "la fièvre — la toux — le paludisme — la diarrhée — le rhume" },
      { champ: "Les soins", mots: "le dispensaire — consulter — l'infirmier — les médicaments — se reposer" },
    ],
  },
};

module.exports = { theme7: TH7, annexe7: TH7.annexe };
