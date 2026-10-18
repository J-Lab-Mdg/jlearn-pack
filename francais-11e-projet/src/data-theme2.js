// ============================================================
// data-theme2.js — THÈME 2 : LES SONS I ET U (séances 11-20)
// Sous-discipline : Phonétique — rédigé d'après la FRA officielle
// (« repérer les mots contenant les sons I-U », « prononcer
// correctement les sons I-U »), gabarit du Bloc 1.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme2 = {
  numero: 2,
  nom: "Les sons I et U",
  sousDiscipline: "Phonétique",
  notions: "SON I — SON U — BOUCHE SOURIT — BOUCHE RONDE — SYLLABE — COMPTINE",
  competences: [
    "Repérer le son I dans des mots connus.",
    "Repérer le son U dans des mots connus.",
    "Distinguer les sons I et U dans un mot et dans des paires proches (lit/lu, riz/rue).",
    "Prononcer correctement le son I (bouche souriante) et le son U (lèvres rondes).",
    "Réciter une comptine en articulant les sons I et U.",
  ],
  seances: [
    // ================= SÉANCE 11 — LE SON I =================
    {
      n: 11, titre: "Le son I", titreFiche: "Le son I",
      objectif: "Repérer et prononcer le son I dans des mots connus.",
      supportFiche: "Image « le son I » (souris, riz, tapis), miroir, tableau noir.",
      image: { file: "s11_son_i.png", w: 1100, h: 540, legende: "J'entends I dans : souris, riz, tapis." },
      revision: {
        ens: ["Citez 2 formules de politesse apprises la semaine passée. — Que dit-on quand on reçoit un cadeau ?"],
        app: ["R.A. : ", { t: "BONJOUR / MERCI / AU REVOIR / S'IL TE PLAÎT / PARDON", r: true }, " — ", { t: "MERCI", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image de la souris) Qu'est-ce que c'est ? Écoutez bien : sou-RIS. Quel son entend-on à la fin ?"],
        app: ["Proposent : « Une souris ! » puis écoutent et cherchent le son final."],
        technique: ["Question ouverte"], support: "Image « le son I »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons découvrir le son I. Après cette séance, vous serez capables de le repérer et de bien le dire dans des mots."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Nommez chaque image dans votre tête : que voyez-vous ?"],
        app: ["Observent silencieusement les trois images (souris, riz, tapis)."],
        technique: ["Observation guidée"], support: "Image « le son I »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que voit-on sur la première image ?"],
          ["2) Que voit-on sur la deuxième image ?"],
          ["3) Que voit-on sur la troisième image ?"],
          ["4) Quel son entend-on dans : souris ? dans : riz ? dans : tapis ?"],
        ] },
        app: { paras: [
          ["R.A. : Une ", { t: "souris", r: true }, "."],
          ["R.A. : Du ", { t: "riz", r: true }, "."],
          ["R.A. : Un ", { t: "tapis", r: true }, "."],
          ["R.A. : Le son ", { t: "I", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « le son I »",
      },
      synthese: {
        ens: ["Donc : le son I s'entend dans souris, riz, tapis, ici, midi. Pour bien dire I, la bouche sourit et s'étire : iiiii ! Répétez !"],
        app: ["Répètent en chœur : iiiii ! puis les mots : souris, riz, tapis."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis des mots. Si vous entendez le son I, vous levez la main : riz — lune — tapis — souris — lune."],
        app: ["Lèvent la main pour riz, tapis, souris ; ne lèvent pas pour lune."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Chacun donne un mot où l'on entend le son I. (interroger 3 à 4 élèves)"],
        app: ["R.A. : réponses acceptées : riz, tapis, souris, ici, midi, lis..."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON I",
        subs: [
          { t: "A. Comment le dire ?", paras: [["Pour dire le son ", { t: "I", k: true }, ", ma bouche sourit et s'étire : ", { t: "iiiii", k: true }, " !"]] },
          { t: "B. Des mots avec le son I", paras: [
            [{ t: "souris", k: true }, " — ", { t: "riz", k: true }, " — ", { t: "tapis", k: true }, " — ", { t: "ici", k: true }, " — ", { t: "midi", k: true }, " — ", { t: "lis", k: true }],
            ["J'écoute : dans « souris », j'entends I à la fin. Dans « ici », j'entends I deux fois !"],
          ] },
        ],
        retenir: ["Le son ", { t: "I", k: true }, ", ma bouche sourit. Je l'entends dans : ", { t: "souris", k: true }, ", ", { t: "riz", k: true }, ", ", { t: "tapis", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son I :"], items: [
          ["lune riz"],
          ["souris tortue"],
          ["tapis salut"],
          ["ici rue"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque mot avec la lettre i (au tableau) :"], items: [
          ["a) r...z"],
          ["b) sour...s"],
          ["c) tap...s"],
          ["d) m...di"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) riz → I / U"],
          ["2) lune → I / U"],
          ["3) tapis → I / U"],
          ["4) rue → I / U"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "riz, souris, tapis, ici", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) r", { t: "i", r: true }, "z — b) sour", { t: "i", r: true }, "s — c) tap", { t: "i", r: true }, "s — d) m", { t: "i", r: true }, "di (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "I", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "I", r: true }, " — 4) ", { t: "U", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 12 — LE SON U =================
    {
      n: 12, titre: "Le son U", titreFiche: "Le son U",
      objectif: "Repérer et prononcer le son U dans des mots connus.",
      supportFiche: "Image « le son U » (lune, tortue, rue), miroir, tableau noir.",
      image: { file: "s12_son_u.png", w: 1100, h: 540, legende: "J'entends U dans : lune, tortue, rue, salut." },
      revision: {
        ens: ["Comment dit-on le son I ? — Donnez un mot avec le son I."],
        app: ["R.A. : La bouche sourit : ", { t: "iiii", r: true }, ". — Mots acceptés : riz, tapis, souris, ici, midi..."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image de la lune) Qu'est-ce qui brille la nuit dans le ciel ? Écoutez : LU-NE. Quel son entend-on au début ?"],
        app: ["Proposent : « La lune ! » puis cherchent le son du début."],
        technique: ["Question ouverte"], support: "Image « le son U »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons découvrir le son U. Après cette séance, vous serez capables de le repérer et de bien le dire dans des mots."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que voyez-vous sur chaque panneau ?"],
        app: ["Observent silencieusement les trois images (lune, tortue, rue)."],
        technique: ["Observation guidée"], support: "Image « le son U »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que voit-on briller dans le ciel ?"],
          ["2) Quel animal marche lentement avec sa carapace ?"],
          ["3) Comment s'appelle le chemin avec des maisons ?"],
          ["4) Quel son entend-on dans : lune ? dans : tortue ? dans : rue ?"],
        ] },
        app: { paras: [
          ["R.A. : La ", { t: "lune", r: true }, "."],
          ["R.A. : La ", { t: "tortue", r: true }, "."],
          ["R.A. : La ", { t: "rue", r: true }, "."],
          ["R.A. : Le son ", { t: "U", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « le son U »",
      },
      synthese: {
        ens: ["Donc : le son U s'entend dans lune, tortue, rue, salut. Pour bien dire U, les lèvres sont rondes comme un O : uuuu ! Répétez !"],
        app: ["Répètent en chœur : uuuu ! puis les mots : lune, tortue, rue."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis des mots. Si vous entendez le son U, vous levez la main : lune — riz — salut — tapis — tortue."],
        app: ["Lèvent la main pour lune, salut, tortue ; ne lèvent pas pour riz, tapis."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Chacun donne un mot où l'on entend le son U. (interroger 3 à 4 élèves)"],
        app: ["R.A. : réponses acceptées : lune, rue, salut, tortue, minute, une, du..."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON U",
        subs: [
          { t: "A. Comment le dire ?", paras: [["Pour dire le son ", { t: "U", k: true }, ", mes lèvres sont rondes comme un O : ", { t: "uuuu", k: true }, " ! Astuce : je dis I avec les lèvres de OU !"]] },
          { t: "B. Des mots avec le son U", paras: [
            [{ t: "lune", k: true }, " — ", { t: "tortue", k: true }, " — ", { t: "rue", k: true }, " — ", { t: "salut", k: true }, " — ", { t: "minute", k: true }, " — ", { t: "une", k: true }],
            ["J'écoute : dans « lune », j'entends U au début. Dans « salut », j'entends U au milieu."],
          ] },
        ],
        retenir: ["Le son ", { t: "U", k: true }, ", mes lèvres sont rondes. Je l'entends dans : ", { t: "lune", k: true }, ", ", { t: "tortue", k: true }, ", ", { t: "rue", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son U :"], items: [
          ["riz lune"],
          ["rue souris"],
          ["salut tapis"],
          ["tortue ici"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque mot avec la lettre u (au tableau) :"], items: [
          ["a) l...ne"],
          ["b) tort...e"],
          ["c) s...lut"],
          ["d) r...e"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) lune → I / U"],
          ["2) riz → I / U"],
          ["3) salut → I / U"],
          ["4) tapis → I / U"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "lune, rue, salut, tortue", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) l", { t: "u", r: true }, "ne — b) tort", { t: "u", r: true }, "e — c) s", { t: "u", r: true }, "lut — d) r", { t: "u", r: true }, "e (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "U", r: true }, " — 2) ", { t: "I", r: true }, " — 3) ", { t: "U", r: true }, " — 4) ", { t: "I", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 13 — I OU U ? JE CHOISIS =================
    {
      n: 13, titre: "I ou U ? je choisis", titreFiche: "Le son I ou le son U ?",
      objectif: "Distinguer les sons I et U dans des mots connus.",
      supportFiche: "Image « I ou U ? », cartes-lettres I et U, tableau noir.",
      image: { file: "s13_i_ou_u.png", w: 1100, h: 540, legende: "Le son I : la bouche sourit. Le son U : la bouche est ronde." },
      revision: {
        ens: ["Le son de « lune » ? — Le son de « riz » ? — Comment fait la bouche pour U ?"],
        app: ["R.A. : ", { t: "U", r: true }, ". — ", { t: "I", r: true }, ". — Les lèvres sont ", { t: "rondes", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Écoutez bien : je dis iiiii... puis uuuu... Est-ce le même son ?"],
        app: ["Écoutent et répondent : « Non ! »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons choisir entre le son I et le son U. Après cette séance, vous ne les confondrez plus !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait la bouche du côté de I ? Et du côté de U ?"],
        app: ["Observent silencieusement les deux panneaux."],
        technique: ["Observation guidée"], support: "Image « I ou U ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « riz », on entend I ou U ?"],
          ["2) Dans « rue », on entend I ou U ?"],
          ["3) Comment est la bouche pour le son I ?"],
          ["4) Comment est la bouche pour le son U ?"],
        ] },
        app: { paras: [
          ["R.A. : On entend ", { t: "I", r: true }, "."],
          ["R.A. : On entend ", { t: "U", r: true }, "."],
          ["R.A. : La bouche ", { t: "sourit", r: true }, ", elle est étirée."],
          ["R.A. : La bouche est ", { t: "ronde", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « I ou U ? »",
      },
      synthese: {
        ens: ["Donc : I, la bouche sourit — U, la bouche est ronde. Je réécoute le mot et je choisis ! Répétez : I — U !"],
        app: ["Répètent en chœur en montrant leur bouche : iiiii (sourire) — uuuu (bouche ronde)."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des deux équipes : l'équipe I à gauche, l'équipe U à droite. Je dis un mot : l'équipe qui entend son son se lève et le répète : salut — riz — lune — midi — rue — tapis."],
        app: ["Se lèvent et répètent leur mot selon l'équipe (I ou U)."],
        technique: ["Jeu des deux équipes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["« salut » : I ou U ? — « tapis » : I ou U ?"],
        app: ["R.A. : ", { t: "U", r: true }, ". — ", { t: "I", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. I OU U ? JE CHOISIS",
        subs: [
          { t: "A. Le son I", paras: [["La bouche ", { t: "sourit", k: true }, " : riz, souris, tapis, ici."]] },
          { t: "B. Le son U", paras: [["La bouche est ", { t: "ronde", k: true }, " : lune, rue, salut, tortue."]] },
        ],
        retenir: [{ t: "I", k: true }, " : bouche qui sourit — ", { t: "U", k: true }, " : bouche ronde. J'écoute le mot, puis je choisis !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Écris I ou U dans chaque mot (au tableau) :"], items: [
          ["a) r...z"],
          ["b) l...ne"],
          ["c) s...ris"],
          ["d) tort...e"],
          ["e) tap...s"],
          ["f) r...e"],
          ["g) ic..."],
          ["h) min...te"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Barre l'intrus : le mot qui ne contient pas le son du groupe :"], items: [
          ["1) riz — lune — tapis (le son I)"],
          ["2) salut — souris — rue (le son U)"],
          ["3) lune — rue — lis (le son U)"],
          ["4) midi — minute — tortue (le son I)"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque mot à son son :"], items: [
          ["riz • • U"],
          ["lune • • I"],
          ["souris • • I"],
          ["salut • • U"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "I", r: true }, " — b) ", { t: "U", r: true }, " — c) ", { t: "I", r: true }, " — d) ", { t: "U", r: true }, " — e) ", { t: "I", r: true }, " — f) ", { t: "U", r: true }, " — g) ", { t: "I", r: true }, " — h) ", { t: "U", r: true }, " (1 pt chacun)."]] },
        { titre: "Exercice 2", lines: [["1) intrus : ", { t: "lune", r: true }, " — 2) intrus : ", { t: "souris", r: true }, " — 3) intrus : ", { t: "lis", r: true }, " — 4) intrus : ", { t: "tortue", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["riz → ", { t: "I", r: true }, " — lune → ", { t: "U", r: true }, " — souris → ", { t: "I", r: true }, " — salut → ", { t: "U", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 14 — I ET U DANS DES MOTS CONNUS =================
    {
      n: 14, titre: "I et U dans des mots connus", titreFiche: "I et U dans les mots connus",
      objectif: "Repérer le son I ou le son U dans un stock de mots connus.",
      supportFiche: "Image « I ou U ? », paniers-images (deux boîtes), tableau noir.",
      image: null,
      revision: {
        ens: ["Je dis un mot, vous dites I ou U : riz — lune — salut — midi."],
        app: ["R.A. : ", { t: "I — U — U — I", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, les mots veulent rentrer dans leur maison ! Le mot « riz » rentre dans la maison I, le mot « lune » dans la maison U."],
        app: ["Écoutent, curieux."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons ranger des mots connus dans la maison I ou la maison U. Après cette séance, vous saurez retrouver les sons I et U partout !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » Voici les deux maisons (I et U) et les mots qui attendent. Lisez chaque mot dans votre tête."],
        app: ["Observent silencieusement les deux maisons et la liste des mots."],
        technique: ["Observation guidée"], support: "Image « I ou U ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) « tortue » : I ou U ? Comment le savoir ?"],
          ["2) « tapis » : I ou U ? Comment le savoir ?"],
          ["3) Que fait la bouche dans « salut » ?"],
          ["4) Que fait la bouche dans « souris » ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "U", r: true }, " — on entend uuu au milieu."],
          ["R.A. : ", { t: "I", r: true }, " — on entend iii à la fin."],
          ["R.A. : La bouche est ", { t: "ronde", r: true }, " pour U."],
          ["R.A. : La bouche ", { t: "sourit", r: true }, " pour I."],
        ] },
        technique: ["Question / réponse"], support: "Image « I ou U ? »",
      },
      synthese: {
        ens: ["Donc : j'écoute le mot, je regarde ma bouche dans ma tête, et je trouve sa maison : I ou U."],
        app: ["Répètent la méthode : j'écoute, je regarde ma bouche, je choisis."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des paniers : deux boîtes au tableau (I et U). Je distribue un mot à chaque élève, il le dit à voix haute et le met dans le bon panier : RIZ, LUNE, TAPIS, TORTUE, SALUT, SOURIS, RUE, MIDI."],
        app: ["Disent leur mot et le rangent dans le bon panier."],
        technique: ["Jeu des paniers"], support: "Deux boîtes-paniers",
      },
      evaluation: {
        ens: ["« minute » : I ou U ? — « une » : I ou U ? — « ici » : I ou U ?"],
        app: ["R.A. : ", { t: "U — U — I", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. I ET U DANS LES MOTS CONNUS",
        subs: [
          { t: "A. La maison du son I", paras: [[{ t: "riz", k: true }, " — ", { t: "tapis", k: true }, " — ", { t: "souris", k: true }, " — ", { t: "midi", k: true }]] },
          { t: "B. La maison du son U", paras: [[{ t: "lune", k: true }, " — ", { t: "tortue", k: true }, " — ", { t: "salut", k: true }, " — ", { t: "rue", k: true }]] },
        ],
        retenir: ["Chaque son a sa maison : le son ", { t: "I", k: true }, " et le son ", { t: "U", k: true }, ". J'écoute et je range !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Range chaque mot dans sa maison (dis : maison I ou maison U) :"], items: [
          ["1) RIZ → maison I / maison U"],
          ["2) LUNE → maison I / maison U"],
          ["3) TAPIS → maison I / maison U"],
          ["4) TORTUE → maison I / maison U"],
          ["5) SALUT → maison I / maison U"],
          ["6) SOURIS → maison I / maison U"],
          ["7) RUE → maison I / maison U"],
          ["8) MIDI → maison I / maison U"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Trouve le mot avec I et le mot avec U dans chaque phrase :"], items: [
          ["a) « La souris voit la lune. » → mot avec I : .............. mot avec U : .............."],
          ["b) « La tortue marche sur le tapis. » → mot avec I : .............. mot avec U : .............."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot, tu choisis la lettre :"], items: [
          ["1) « du » → I / U"],
          ["2) « ici » → I / U"],
          ["3) « vue » → I / U"],
          ["4) « lit » → I / U"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "I", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "I", r: true }, " — 4) ", { t: "U", r: true }, " — 5) ", { t: "U", r: true }, " — 6) ", { t: "I", r: true }, " — 7) ", { t: "U", r: true }, " — 8) ", { t: "I", r: true }, " (1 pt chacun)."]] },
        { titre: "Exercice 2", lines: [["a) avec I : ", { t: "souris", r: true }, " — avec U : ", { t: "lune", r: true }, " (1,5 pt + 1,5 pt) — b) avec I : ", { t: "tapis", r: true }, " — avec U : ", { t: "tortue", r: true }, " (1,5 pt + 1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "U", r: true }, " — 2) ", { t: "I", r: true }, " — 3) ", { t: "U", r: true }, " — 4) ", { t: "I", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 15 — COMPTINE I ET U =================
    {
      n: 15, titre: "Comptine I et U", titreFiche: "La comptine I et U",
      objectif: "Réciter une comptine en prononçant correctement les sons I et U.",
      supportFiche: "Affiche « ma comptine I et U », tableau noir.",
      image: { file: "s15_comptine.png", w: 1100, h: 620, legende: "Ma comptine I et U." },
      revision: {
        ens: ["Je dis un mot, vous dites sa maison : RIZ — LUNE — TORTUE — MIDI — RUE."],
        app: ["R.A. : ", { t: "I — U — U — I — U", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Vous connaissez des comptines ! Aujourd'hui, nous apprenons une comptine avec plein de I et de U."],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous récitons la comptine I et U. Après cette séance, vous saurez la dire en articulant très bien les deux sons."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite par l'enseignant, sans lire."],
        app: ["Écoutent la comptine réciter deux fois."],
        technique: ["Écoute du modèle"], support: "Affiche de la comptine",
      },
      analyse: {
        ens: { paras: [
          ["1) Quel animal court dans la maison ?"],
          ["2) Qu'est-ce qui éclaire la rue ?"],
          ["3) Citez un mot de la comptine avec le son I."],
          ["4) Citez un mot de la comptine avec le son U."],
        ] },
        app: { paras: [
          ["R.A. : La ", { t: "souris", r: true }, "."],
          ["R.A. : La ", { t: "lune", r: true }, "."],
          ["R.A. : ", { t: "souris / petite / jolie / rigolo", r: true }, " (un au moins)."],
          ["R.A. : ", { t: "lune / toute / votre / rue", r: true }, " (un au moins)."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de la comptine",
      },
      synthese: {
        ens: ["Donc : dans notre comptine, il y a des mots avec I et des mots avec U. On articule bien : la bouche sourit pour I, elle est ronde pour U."],
        app: ["Répètent la règle en mímant les deux bouches."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Récitation par vers : je dis un vers, vous le répétez tous ensemble. Puis par demi-classe, puis quelques élèves seuls."],
        app: ["Répètent chaque vers en chœur, puis par groupe, puis individuellement."],
        technique: ["Répétition par vers"], support: "Affiche de la comptine",
      },
      evaluation: {
        ens: ["2 ou 3 élèves récitent un couplet de la comptine seuls. On écoute les sons I et U."],
        app: ["Récitent leur couplet ; la classe valide les sons I et U bien prononcés."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MA COMPTINE I ET U",
        subs: [
          { t: "A. La comptine", paras: [
            ["I, I, la petite ", { t: "souris", k: true }, ","],
            ["court dans toute la maison."],
            ["U, U, la ", { t: "jolie lune", k: true }, ","],
            ["éclaire toute votre ", { t: "rue", k: true }, "."],
            ["I et U, c'est rigolo,"],
            ["je les dis très bien : bravo !"],
          ] },
        ],
        retenir: ["Je récite en articulant : ", { t: "I", k: true }, " (bouche souriante) et ", { t: "U", k: true }, " (bouche ronde)."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers de la comptine. La maîtresse observe :"], items: [
          ["Le son I bien prononcé (souris) : ....... / 2 pts"],
          ["Le son U bien prononcé (toute) : ....... / 2 pts"],
          ["Le rythme bien respecté : ....... / 2 pts"],
          ["Les vers bien mémorisés : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Trouve dans la comptine :"], items: [
          ["a) un mot avec le son I au début : .........................."],
          ["b) un mot avec le son I au milieu : .........................."],
          ["c) un mot avec le son U au début : .........................."],
          ["d) un mot avec le son U au milieu : .........................."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["a) La souris court dans la rue. → VRAI / FAUX"],
          ["b) La lune éclaire la rue. → VRAI / FAUX"],
          ["c) Il n'y a aucun mot avec I dans la comptine. → VRAI / FAUX"],
          ["d) À la fin, on dit bravo ! → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : son I (2 pts) + son U (2 pts) + rythme (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "I (ici, il...)", r: true }, " ou ", { t: "petite / souris", r: true }, " (1,5 pt) — b) ", { t: "souris / jolie / rigolo", r: true }, " (1,5 pt) — c) ", { t: "U (U, U...)", r: true }, " ou ", { t: "lune / toute / votre / rue", r: true }, " (1,5 pt) — d) ", { t: "lune / toute / votre / rue", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["a) ", { t: "FAUX", r: true }, " (1,5 pt) — b) ", { t: "VRAI", r: true }, " (1,5 pt) — c) ", { t: "FAUX", r: true }, " (1,5 pt) — d) ", { t: "VRAI", r: true }, " (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 16 — BIEN PRONONCER I =================
    {
      n: 16, titre: "Bien prononcer I", titreFiche: "Bien prononcer le son I",
      objectif: "Prononcer correctement le son I en isolation et dans des mots.",
      supportFiche: "Image « la bouche du son I », miroir, tableau noir.",
      image: { file: "s16_bouche_i.png", w: 1000, h: 520, legende: "Pour dire I, la bouche sourit et s'étire." },
      revision: {
        ens: ["Récitez ensemble les deux premiers vers de la comptine."],
        app: ["Récitent en chœur : « I, I, la petite souris, / court dans toute la maison. »"],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["Regardez ma bouche : iiiii... Maintenant avec votre miroir, faites pareil : votre bouche sourit comme un grand sourire !"],
        app: ["Observent leur bouche dans le miroir et imitent."],
        technique: ["Démonstration + miroir"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous nous entraînons à très bien prononcer le son I. Après cette séance, votre I sera parfait !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait la bouche de ce visage ?"],
        app: ["Observent silencieusement le visage et sa bouche qui sourit."],
        technique: ["Observation guidée"], support: "Image « la bouche du son I »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que fait la bouche quand on dit I ?"],
          ["2) Est-ce que les lèvres sont rondes ?"],
          ["3) Dites iiiii en souriant très fort : qui réussit ?"],
          ["4) Dites maintenant : riiiz — taaapis. Où entend-on I ?"],
        ] },
        app: { paras: [
          ["R.A. : Elle ", { t: "sourit", r: true }, ", elle est étirée."],
          ["R.A. : Non, elles sont ", { t: "étirées", r: true }, "."],
          ["R.A. : (chaque élève essaie devant son miroir)"],
          ["R.A. : À la fin de riz, au milieu et à la fin de tapis."],
        ] },
        technique: ["Question / réponse"], support: "Image « la bouche du son I », miroir",
      },
      synthese: {
        ens: ["Donc : pour bien dire I, je souris et j'étire ma bouche : iiiii ! Puis je le garde dans les mots : riz, tapis, souris."],
        app: ["Répètent : iiiii — riz — tapis — souris, en souriant."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du sourire : chacun dit son prénom en insistant sur le son I s'il y en a un : Vaaa-leriii ? Kiiioto ? Tiiiana ? Si le prénom n'a pas de I, on ajoute : « ...iii, c'est moi ! »"],
        app: ["Disent leur prénom en articulant le son I."],
        technique: ["Jeu de prononciation"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites « souris » très bien articulé. On écoute le I final."],
        app: ["R.A. : sou-RIIII-S avec le I bien clair."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN PRONONCER LE SON I",
        subs: [
          { t: "A. La bouche du son I", paras: [["Le son ", { t: "I", k: true }, " : ma bouche ", { t: "sourit", k: true }, " et s'étire : ", { t: "iiiii", k: true }, " !"]] },
          { t: "B. Je m'entraîne", paras: [
            ["En criant : ", { t: "iiii !", k: true }, " En chuchotant : ", { t: "iiii !", k: true }],
            ["Dans les mots : ", { t: "riz — tapis — souris — midi — ici", k: true }, "."],
          ] },
        ],
        retenir: ["Le son ", { t: "I", k: true }, ", c'est un grand sourire : ", { t: "iiiii", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, dis I en souriant. L'enseignant observe :"], items: [
          ["La bouche sourit : ....... / 2 pts"],
          ["Les lèvres sont étirées (pas rondes) : ....... / 2 pts"],
          ["Le son est clair (pas un A, pas un E) : ....... / 2 pts"],
          ["Répété 3 fois sans se tromper : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète après la maîtresse, en chœur puis seul :"], items: [
          ["1) riiiz"],
          ["2) ta-piiis"],
          ["3) sou-riiis"],
          ["4) miiidi"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Je dis 3 mots : barre celui qui n'a pas de son I :"], items: [
          ["1) lis — lune — riz"],
          ["2) ici — midi — rue"],
          ["3) parti — salut — souris"],
          ["4) tapis — tortue — petit"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : sourire (2 pts) + lèvres étirées (2 pts) + clarté du son (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec le I bien articulé (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) intrus : ", { t: "lune", r: true }, " — 2) intrus : ", { t: "rue", r: true }, " — 3) intrus : ", { t: "salut", r: true }, " — 4) intrus : ", { t: "tortue", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 17 — BIEN PRONONCER U =================
    {
      n: 17, titre: "Bien prononcer U", titreFiche: "Bien prononcer le son U",
      objectif: "Prononcer correctement le son U en isolation et dans des mots.",
      supportFiche: "Image « la bouche du son U », miroir, tableau noir.",
      image: { file: "s17_bouche_u.png", w: 1000, h: 520, legende: "Pour dire U, les lèvres sont rondes comme un O. Astuce : je dis I avec les lèvres de OU !" },
      revision: {
        ens: ["Comment dit-on le son I ? — Barrez l'intrus : lune, riz, tapis."],
        app: ["R.A. : La bouche sourit : ", { t: "iiii", r: true }, ". — Intrus : ", { t: "lune", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Regardez ma bouche : uuuu... Mes lèvres sont rondes ! Avec votre miroir : faites la bouche ronde comme un O et soufflez doucement : uuuu !"],
        app: ["Faisent la bouche ronde devant leur miroir et imitent."],
        technique: ["Démonstration + miroir"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous nous entraînons à très bien prononcer le son U. Après cette séance, votre U sera magnifique !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait la bouche de ce visage ? Comparez avec le visage du son I."],
        app: ["Observent silencieusement le visage à la bouche ronde."],
        technique: ["Observation guidée"], support: "Image « la bouche du son U »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que font les lèvres quand on dit U ?"],
          ["2) Quelle est l'astuce pour trouver le U ?"],
          ["3) Dites uuuu très longtemps : qui tient 5 secondes ?"],
          ["4) Dites : luuune — ruue. Où entend-on U ?"],
        ] },
        app: { paras: [
          ["R.A. : Elles sont ", { t: "rondes", r: true }, ", comme un O."],
          ["R.A. : Je dis ", { t: "I avec les lèvres de OU", r: true }, "."],
          ["R.A. : (chaque élève essaie devant son miroir)"],
          ["R.A. : Au début de lune et de rue."],
        ] },
        technique: ["Question / réponse"], support: "Image « la bouche du son U », miroir",
      },
      synthese: {
        ens: ["Donc : pour bien dire U, mes lèvres sont rondes comme un O : uuuu ! Et je le garde dans les mots : lune, rue, salut."],
        app: ["Répètent : uuuu — lune — rue — salut, avec la bouche ronde."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de la bougie : imaginez une bougie devant vos lèvres rondes. Dites uuuu sans l'éteindre, puis dites les mots : une, du, salut, minute — toujours la bouche ronde !"],
        app: ["Disent les mots avec les lèvres bien rondes."],
        technique: ["Jeu de prononciation"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites « tortue » très bien articulé. On écoute le U."],
        app: ["R.A. : tor-TUUU-te avec le U bien clair."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN PRONONCER LE SON U",
        subs: [
          { t: "A. La bouche du son U", paras: [["Le son ", { t: "U", k: true }, " : mes lèvres sont ", { t: "rondes", k: true }, " comme un O : ", { t: "uuuu", k: true }, " ! Astuce : je dis I avec les lèvres de OU."]] },
          { t: "B. Je m'entraîne", paras: [
            ["En criant : ", { t: "uuuu !", k: true }, " En chuchotant : ", { t: "uuuu !", k: true }],
            ["Dans les mots : ", { t: "lune — rue — salut — tortue — minute", k: true }, "."],
          ] },
        ],
        retenir: ["Le son ", { t: "U", k: true }, ", c'est la bouche ronde : ", { t: "uuuu", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, dis U avec la bouche ronde. L'enseignant observe :"], items: [
          ["Les lèvres sont rondes (pas étirées) : ....... / 2 pts"],
          ["Le son est clair (pas un OU, pas un I) : ....... / 2 pts"],
          ["Tenu au moins 3 secondes : ....... / 2 pts"],
          ["Répété 3 fois sans se tromper : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète après la maîtresse, en chœur puis seul :"], items: [
          ["1) luuune"],
          ["2) ruue"],
          ["3) tor-tuuue"],
          ["4) sa-luut"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Je dis 3 mots : barre celui qui n'a pas de son U :"], items: [
          ["1) lune — lis — rue"],
          ["2) salut — souris — tortue"],
          ["3) bulle — tapis — minute"],
          ["4) vue — lit — rue"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : lèvres rondes (2 pts) + clarté du son (2 pts) + tenue du son (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec le U bien articulé (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) intrus : ", { t: "lis", r: true }, " — 2) intrus : ", { t: "souris", r: true }, " — 3) intrus : ", { t: "tapis", r: true }, " — 4) intrus : ", { t: "lit", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 18 — I ET U DANS UN MÊME MOT =================
    {
      n: 18, titre: "I et U dans un même mot", titreFiche: "I et U dans le même mot",
      objectif: "Repérer le son I et le son U à l'intérieur d'un même mot.",
      supportFiche: "Image « la tulipe » (tu-li-pe), cartes-mots, tableau noir.",
      image: { file: "s18_tulipe.png", w: 1100, h: 540, legende: "tu-li-pe : dans « tulipe », il y a le son U ET le son I !" },
      revision: {
        ens: ["Le son I, c'est quelle bouche ? — Le son U ? — Dites : iiiii — uuuu."],
        app: ["R.A. : Elle ", { t: "sourit", r: true }, ". — Elle est ", { t: "ronde", r: true }, ". — (répètent les deux sons)"],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image de la fleur) Regardez cette belle fleur : c'est une tulipe ! Tu-li-pe. Elle cache un secret : dedans, il y a DEUX sons !"],
        app: ["Écoutent, intrigués."],
        technique: ["Narration"], support: "Image « la tulipe »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous cherchons les mots qui ont le son U ET le son I ensemble. Après cette séance, vous saurez les débusquer !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » La tulipe est coupée en morceaux : tu — li — pe. Lisez chaque morceau dans votre tête."],
        app: ["Observent silencieusement la découpe en syllabes."],
        technique: ["Observation guidée"], support: "Image « la tulipe »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « tu », on entend quel son ?"],
          ["2) Dans « li », on entend quel son ?"],
          ["3) Écoutez « musique » : mu-si-que. Quels sons y cache-t-elle ?"],
          ["4) Et « lumière » : lu-mi-ère ?"],
        ] },
        app: { paras: [
          ["R.A. : Le son ", { t: "U", r: true }, "."],
          ["R.A. : Le son ", { t: "I", r: true }, "."],
          ["R.A. : ", { t: "U", r: true }, " dans mu et ", { t: "I", r: true }, " dans si."],
          ["R.A. : ", { t: "U", r: true }, " dans lu et ", { t: "I", r: true }, " dans mi."],
        ] },
        technique: ["Question / réponse"], support: "Image « la tulipe »",
      },
      synthese: {
        ens: ["Donc : certains mots cachent les DEUX sons : tulipe, musique, lumière. On coupe le mot en morceaux pour les trouver !"],
        app: ["Répètent en frappant les syllabes : tu-li-pe — mu-si-que — lu-mi-ère."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des applaudissements : je dis un mot. S'il contient U ET I, on applaudit : tulipe — lune — musique — souris — lumière."],
        app: ["Applaudissent pour tulipe, musique, lumière ; ne tiennent pas pour lune et souris."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Répétez : « Lanto a une tulipe rouge. » On écoute le U de tu et le I de li."],
        app: ["R.A. : répétition correcte avec U et I bien audibles."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. I ET U DANS LE MÊME MOT",
        subs: [
          { t: "A. Les mots à deux sons", paras: [
            [{ t: "tu-li-pe", k: true }, " : U dans tu, I dans li."],
            [{ t: "mu-si-que", k: true }, " : U dans mu, I dans si."],
            [{ t: "lu-mi-ère", k: true }, " : U dans lu, I dans mi."],
          ] },
          { t: "B. Le truc des syllabes", paras: [["Je coupe le mot en morceaux (des syllabes), je les dis un par un, et je trouve les sons cachés !"]] },
        ],
        retenir: ["Dans ", { t: "tulipe", k: true }, ", ", { t: "musique", k: true }, " et ", { t: "lumière", k: true }, ", il y a le son ", { t: "U", k: true }, " ET le son ", { t: "I", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Frappe les syllabes puis dis quel son tu entends dans chaque morceau :"], items: [
          ["1) tu-li-pe → tu : I ou U ? li : I ou U ?"],
          ["2) mu-si-que → mu : I ou U ? si : I ou U ?"],
          ["3) lu-mi-ère → lu : I ou U ? mi : I ou U ?"],
          ["4) tu-ri-ste → tu : I ou U ? ri : I ou U ?"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure les mots qui contiennent le son U ET le son I :"], items: [
          ["tulipe souris"],
          ["musique lune"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Répète chaque phrase sans te tromper (on écoute U et I) :"], items: [
          ["1) « Lanto a une tulipe rouge. »"],
          ["2) « Soa écoute de la musique. »"],
          ["3) « La lumière de la classe est allumée. »"],
          ["4) « La petite tulipe est dans la rue. »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) tu → ", { t: "U", r: true }, ", li → ", { t: "I", r: true }, " — 2) mu → ", { t: "U", r: true }, ", si → ", { t: "I", r: true }, " — 3) lu → ", { t: "U", r: true }, ", mi → ", { t: "I", r: true }, " — 4) lut → ", { t: "U", r: true }, " (1 pt par bonne réponse, 8 réponses)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "tulipe", r: true }, " (3 pts) et ", { t: "musique", r: true }, " (3 pts)."]] },
        { titre: "Exercice 3", lines: [["Répétition correcte avec U et I audibles (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 19 — DES PAIRES À NE PAS CONFONDRE =================
    {
      n: 19, titre: "Des paires à ne pas confondre", titreFiche: "Des paires à ne pas confondre",
      objectif: "Distinguer et prononcer correctement des paires de mots proches (lit/lu, vie/vue, riz/rue).",
      supportFiche: "Cartes-paires (lit-lu, vie-vue, riz-rue), miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Coupez en syllabes et trouvez les deux sons : tu-li-pe — mu-si-que."],
        app: ["R.A. : tu ", { t: "U", r: true }, " / li ", { t: "I", r: true }, " — mu ", { t: "U", r: true }, " / si ", { t: "I", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Écoutez ces deux mots : liiit... luuut... Sont-ce les mêmes mots ? Non ! Juste un son change : I devient U. Ce sont des paires !"],
        app: ["Écoutent et constatent la différence."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous jouons avec des paires de mots très proches : il ne faut pas les confondre ! Après cette séance, votre oreille sera affûtée."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » Voici les cartes des paires : lit-lu, vie-vue, riz-rue, lis-lune. J'écoute chaque paire dite par l'enseignant."],
        app: ["Écoutent chaque paire attentivement."],
        technique: ["Écoute du modèle"], support: "Cartes-paires",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « lit », on entend I ou U ?"],
          ["2) Dans « lu », on entend I ou U ?"],
          ["3) Dans « vie », on entend quel son ? Et dans « vue » ?"],
          ["4) Quand maman dit que papa « a lu », est-ce pareil qu'un « lit » ?"],
        ] },
        app: { paras: [
          ["R.A. : Le son ", { t: "I", r: true }, "."],
          ["R.A. : Le son ", { t: "U", r: true }, "."],
          ["R.A. : ", { t: "I", r: true }, " dans vie, ", { t: "U", r: true }, " dans vue."],
          ["R.A. : Non : ", { t: "lu", r: true }, " a un U, ", { t: "lit", r: true }, " a un I."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-paires",
      },
      synthese: {
        ens: ["Donc : dans les paires, seul le son change : lit-lu, vie-vue, riz-rue. Je fais bien la bouche sourire pour I et ronde pour U !"],
        app: ["Répètent chaque paire en exagérant les bouches : liiit/luuut..."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu par binômes : l'élève 1 dit un mot de la paire, l'élève 2 montre la carte I ou la carte U. Puis on échange les rôles : riz — rue — vie — lit — vue — lune."],
        app: ["Disent et montrent la bonne lettre à chaque tour."],
        technique: ["Jeu par binômes"], support: "Cartes-lettres I et U",
      },
      evaluation: {
        ens: ["Je dis une mini-histoire : « Koto dort dans son lit. Papa a lu un livre. » Qui a dit lit ? Qui a dit lu ?"],
        app: ["R.A. : Koto est dans son ", { t: "lit", r: true }, " (I) — papa a ", { t: "lu", r: true }, " (U)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. DES PAIRES À NE PAS CONFONDRE",
        subs: [
          { t: "A. Les paires pièges", paras: [
            [{ t: "lit", k: true }, " (I) — ", { t: "lu", k: true }, " (U)"],
            [{ t: "vie", k: true }, " (I) — ", { t: "vue", k: true }, " (U)"],
            [{ t: "riz", k: true }, " (I) — ", { t: "rue", k: true }, " (U)"],
          ] },
          { t: "B. Le truc", paras: [["Dans chaque paire, seul le son change : I (bouche qui sourit) ou U (bouche ronde). J'écoute, je regarde la bouche, je ne me trompe plus !"]] },
        ],
        retenir: [{ t: "lit — lu", k: true }, ", ", { t: "vie — vue", k: true }, ", ", { t: "riz — rue", k: true }, " : le son change tout !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["La maîtresse dit un mot. Tu montres (ou tu écris) la lettre : I ou U :"], items: [
          ["1) lit → I / U"],
          ["2) lu → I / U"],
          ["3) vie → I / U"],
          ["4) vue → I / U"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque phrase avec le bon mot de la paire :"], items: [
          ["a) Le chat dort dans son .............. (lit / lu)"],
          ["b) Papa a .............. le journal. (lit / lu)"],
          ["c) La .............. brille la nuit. (lune / rien)"],
          ["d) Je .............. une histoire chaque soir. (lis / lune)"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Dis chaque paire à voix haute, sans confondre (l'enseignant valide) :"], items: [
          ["1) riz — rue ....... / 1,5 pt"],
          ["2) vie — vue ....... / 1,5 pt"],
          ["3) lit — lu ....... / 1,5 pt"],
          ["4) lis — lune ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "I", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "I", r: true }, " — 4) ", { t: "U", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "lit", r: true }, " (1,5 pt) — b) ", { t: "lu", r: true }, " (1,5 pt) — c) ", { t: "lune", r: true }, " (1,5 pt) — d) ", { t: "lis", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque paire dite sans confusion = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 20 — PERFORMANCE FINALE =================
    {
      n: 20, titre: "Performance finale — I et U", titreFiche: "Performance finale — les sons I et U",
      objectif: "Réussir l'épreuve finale de distinction et de prononciation des sons I et U.",
      supportFiche: "Cartes-paires, affiche de la comptine, grille d'observation, tableau noir.",
      image: { file: "s20_performance.png", w: 1100, h: 520, legende: "Performance finale : I et U, je les maîtrise !" },
      revision: {
        ens: ["Grand rappel : le son I, c'est quelle bouche ? Le son U ? Dites les paires : lit-lu — riz-rue."],
        app: ["R.A. : Bouche qui ", { t: "sourit", r: true }, " — bouche ", { t: "ronde", r: true }, ". — (répètent les paires)"],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, c'est le grand jour : la performance finale des sons I et U ! Chacun va montrer ce qu'il sait."],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Au programme : 3 épreuves — des mots à trouver, la comptine, et les paires pièges. Après cette séance, vous serez champions des sons I et U !"],
        app: ["Écoutent les consignes."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant fait une démonstration complète des 3 épreuves avec un élève volontaire."],
        app: ["Observent la démonstration et mémorisent le déroulement."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Épreuve 1 : que doit faire le champion avec les mots ?"],
          ["2) Épreuve 2 : que doit-il faire avec la comptine ?"],
          ["3) Épreuve 3 : que doit-il faire avec les paires ?"],
          ["4) Comment gagne-t-on le trophée I + U ?"],
        ] },
        app: { paras: [
          ["R.A. : Donner des mots avec ", { t: "I", r: true }, " et avec ", { t: "U", r: true }, "."],
          ["R.A. : Réciter un couplet en ", { t: "articulant", r: true }, "."],
          ["R.A. : Dire les paires ", { t: "sans les confondre", r: true }, "."],
          ["R.A. : En réussissant les ", { t: "3 épreuves", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : je me souviens de tout — I, la bouche sourit ; U, la bouche est ronde ; je coupe les mots en syllabes ; je ne confonds pas les paires. Bonne chance, champions !"],
        app: ["Répètent le résumé en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Passage des épreuves pendant que les autres travaillent en binômes (ils s'entraident avec les cartes-paires). Chaque élève passe les 3 épreuves à tour de rôle."],
        app: ["Passent les épreuves individuellement ; les autres s'entraînent en binômes."],
        technique: ["Passage individuel + entraide"], support: "Cartes-paires, comptine",
      },
      evaluation: {
        ens: ["Résultats : qui a gagné le trophée I + U ? On félicite tous les champions et on note dans la grille qui doit encore s'entraîner."],
        app: ["R.A. : chaque élève connaît son résultat et ce qu'il doit revoir."],
        technique: ["Bilan individuel"],
      },
      lecon: {
        titre: "1. LES SONS I ET U : JE LES MAÎTRISE",
        subs: [
          { t: "A. Tout ce que je sais", paras: [
            ["Le son ", { t: "I", k: true }, " : la bouche ", { t: "sourit", k: true }, " (riz, tapis, souris, ici, midi)."],
            ["Le son ", { t: "U", k: true }, " : la bouche est ", { t: "ronde", k: true }, " (lune, rue, salut, tortue)."],
            ["Les deux ensemble : ", { t: "tulipe, musique, lumière", k: true }, "."],
            ["Les paires : ", { t: "lit-lu, vie-vue, riz-rue", k: true }, "."],
          ] },
        ],
        retenir: ["Je suis champion des sons ", { t: "I", k: true }, " et ", { t: "U", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 (individuel) : donne 3 mots avec le son I et 3 mots avec le son U :"], items: [
          ["Mot 1 avec I : .............. ....... / 1,5 pt"],
          ["Mot 2 avec I : .............. ....... / 1,5 pt"],
          ["Mot 3 avec I : .............. ....... / 1 pt"],
          ["Mots avec U (3 attendus) : ....... / 3 pts"],
          ["Prononciation claire : ....... / 1 pt"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 : récite un couplet de la comptine en articulant :"], items: [
          ["Les sons I bien articulés : ....... / 2 pts"],
          ["Les sons U bien articulés : ....... / 2 pts"],
          ["Le vers bien mémorisé : ....... / 2 pts"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 : dis chaque paire sans confondre :"], items: [
          ["1) lit — lu ....... / 1,5 pt"],
          ["2) vie — vue ....... / 1,5 pt"],
          ["3) riz — rue ....... / 1,5 pt"],
          ["4) lis — lune ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale : mots avec I corrects et bien prononcés (4 pts) + mots avec U (3 pts) + clarté (1 pt). Mots acceptés : tout mot réel contenant le son."]] },
        { titre: "Exercice 2", lines: [["Grille orale (6 pts) : sons I (2 pts) + sons U (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque paire sans confusion = 1,5 pt (total 6 pts)."]] },
      ],
    },
  ],
};

module.exports = { theme2, DOC };
