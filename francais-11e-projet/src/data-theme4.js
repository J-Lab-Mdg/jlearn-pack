// ============================================================
// data-theme4.js — THÈME 4 : LE SON OUI (séances 31-40)
// Sous-discipline : Phonétique — titres repris du manuel
// existant, contenu rédigé d'après la FRA officielle (« repérer
// les mots contenant le son OUI », « prononcer correctement
// le son OUI ») et les mots sources du programme FRM
// (oui, lui, huit, cuire...), gabarit du Thème 2.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme4 = {
  numero: 4,
  nom: "Le son OUI",
  sousDiscipline: "Phonétique",
  notions: "SON OUI — HUIT — NUIT — PLUIE — FRUIT — LUI — BOUCHE RONDE PUIS SOURIT — SYLLABE — RYTHME",
  competences: [
    "Repérer le son OUI dans des mots courants (oui, huit, nuit, pluie, fruit, lui).",
    "Distinguer les trois sons I, U et OUI dans un mot.",
    "Prononcer correctement le son OUI (bouche ronde puis sourire).",
    "Réciter une comptine en articulant le son OUI.",
    "Répéter des mots et des phrases en respectant le rythme.",
  ],
  seances: [
    // ================= SÉANCE 31 =================
    {
      n: 31, titre: "Découverte du son OUI", titreFiche: "Découverte du son OUI",
      objectif: "Découvrir et repérer le son OUI dans des mots courants.",
      supportFiche: "Image « le son OUI » (huit, pluie, enfant qui dit oui), tableau noir.",
      image: { file: "s31_son_oui.png", w: 1100, h: 560, legende: "J'entends OUI dans : huit, pluie, et dans « oui ! »." },
      revision: {
        ens: ["Présente-toi en 3 phrases ! (2 élèves) — Comment fait la bouche pour I ? Pour U ?"],
        app: ["R.A. : présentation complète — pour I la bouche ", { t: "sourit", r: true }, ", pour U elle est ", { t: "ronde", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Les enfants, vous savez répondre en français : je pose une question facile, répondez oui ! Avez-vous un cahier ? » Qu'est-ce que vous avez répondu ?"],
        app: ["Répondent « Oui ! » et constatent le nouveau son."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons découvrir un nouveau son : le son OUI. Après cette séance, vous serez capables de l'entendre dans des mots."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que voyez-vous sur chaque dessin ?"],
        app: ["Observent silencieusement l'image (l'enfant qui dit oui, le chiffre huit, la pluie)."],
        technique: ["Observation guidée"], support: "Image « le son OUI »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que répond l'enfant quand il est d'accord ?"],
          ["2) Combien font 7 plus 1 ?"],
          ["3) Qu'est-ce qui tombe du nuage ?"],
          ["4) Quel son entend-on dans : oui ? huit ? pluie ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Oui ! »", r: true }],
          ["R.A. : ", { t: "Huit", r: true }, "."],
          ["R.A. : La ", { t: "pluie", r: true }, "."],
          ["R.A. : Le son ", { t: "OUI", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « le son OUI »",
      },
      synthese: {
        ens: ["Donc : le son OUI s'entend dans oui, huit, pluie. C'est un son à deux étages : la bouche est ronde, puis elle sourit ! Répétez : oui, huit, pluie."],
        app: ["Répètent en chœur : oui — huit — pluie, en mimant la bouche."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis des mots. Si vous entendez le son OUI, vous hochez la tête (comme pour dire oui) : huit — riz — pluie — lune — oui."],
        app: ["Hochent la tête pour huit, pluie, oui ; ne hochent pas pour riz, lune."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Chacun donne un mot où l'on entend le son OUI. (interroger 3 à 4 élèves)"],
        app: ["R.A. : réponses acceptées : oui, huit, nuit, pluie, fruit, lui..."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON OUI",
        subs: [
          { t: "A. Comment le dire ?", paras: [["Le son ", { t: "OUI", k: true }, " : ma bouche est ", { t: "ronde", k: true }, " puis elle ", { t: "sourit", k: true }, " : ", { t: "ouiiii", k: true }, " !"]] },
          { t: "B. Des mots avec le son OUI", paras: [
            [{ t: "oui", k: true }, " — ", { t: "huit", k: true }, " — ", { t: "pluie", k: true }, " — ", { t: "nuit", k: true }, " — ", { t: "fruit", k: true }, " — ", { t: "lui", k: true }],
            ["J'écoute : dans « huit », j'entends OUI. Dans « pluie », j'entends OUI à la fin."],
          ] },
        ],
        retenir: ["Le son ", { t: "OUI", k: true }, ", bouche ronde puis sourire. Je l'entends dans : ", { t: "oui", k: true }, ", ", { t: "huit", k: true }, ", ", { t: "pluie", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son OUI :"], items: [
          ["riz huit"],
          ["pluie lune"],
          ["nuit tapis"],
          ["oui rue"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) oui → I / U / OUI"],
          ["2) riz → I / U / OUI"],
          ["3) huit → I / U / OUI"],
          ["4) lune → I / U / OUI"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Complète chaque phrase avec un mot de la leçon (oui, huit, pluie, nuit) :"], items: [
          ["a) « ............, j'ai mon cahier ! »"],
          ["b) Sept et un, cela fait ............"],
          ["c) La ............ tombe du nuage."],
          ["d) La lune brille la ............"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "huit, pluie, nuit, oui", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "I", r: true }, " — 3) ", { t: "OUI", r: true }, " — 4) ", { t: "U", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["a) ", { t: "Oui", r: true }, " (1,5 pt) — b) ", { t: "huit", r: true }, " (1,5 pt) — c) ", { t: "pluie", r: true }, " (1,5 pt) — d) ", { t: "nuit", r: true }, " (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 32 =================
    {
      n: 32, titre: "Oui dans des mots courants", titreFiche: "Le son OUI dans des mots courants",
      objectif: "Repérer le son OUI dans un stock de mots courants et le prononcer.",
      supportFiche: "Image « des mots avec OUI » (fruit, nuit, pluie, huit), tableau noir.",
      image: { file: "s32_mots_oui.png", w: 1100, h: 560, legende: "Le son OUI dans : le fruit, la nuit, la pluie, huit." },
      revision: {
        ens: ["Donnez un mot avec OUI. — Et un mot avec I ? Et un mot avec U ?"],
        app: ["R.A. : OUI : ", { t: "oui, huit, pluie", r: true }, "... — I : ", { t: "riz, tapis", r: true }, "... — U : ", { t: "lune, rue", r: true }, "..."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image du fruit) Qu'est-ce que c'est ? Un fruit ! Écoutez : fru-IT... non ! On dit : fru-OUI. Quel son cache ce mot ?"],
        app: ["Écoutent et découvrent : le son OUI dans « fruit »."],
        technique: ["Question ouverte"], support: "Image « des mots avec OUI »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous cherchons le son OUI dans plein de mots courants. Après cette séance, vous le repérerez partout !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Nommez dans votre tête chaque dessin : que voyez-vous ?"],
        app: ["Observent silencieusement les quatre dessins (fruit, nuit, pluie, huit)."],
        technique: ["Observation guidée"], support: "Image « des mots avec OUI »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que mange-t-on comme dessert sucré qui pousse sur les arbres ?"],
          ["2) Quand fait-il noir et que la lune brille ?"],
          ["3) Que dit-on quand on est d'accord ?"],
          ["4) Tous ces mots cachent le même son : lequel ?"],
        ] },
        app: { paras: [
          ["R.A. : Un ", { t: "fruit", r: true }, "."],
          ["R.A. : La ", { t: "nuit", r: true }, "."],
          ["R.A. : ", { t: "« Oui ! »", r: true }],
          ["R.A. : Le son ", { t: "OUI", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « des mots avec OUI »",
      },
      synthese: {
        ens: ["Donc : le son OUI est caché dans beaucoup de mots courants : fruit, nuit, pluie, huit, lui, oui. Je le repère, puis je le dis très bien !"],
        app: ["Répètent les 6 mots en chœur, bien articulés."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de la classe-vitrine : je montre un dessin, l'élève désigné dit le mot avec OUI bien articulé : fruit — nuit — pluie — huit. Puis chacun donne un mot de plus avec OUI."],
        app: ["Disent le mot de chaque dessin, puis proposent leurs propres mots."],
        technique: ["Jeu de désignation"], support: "Image « des mots avec OUI »",
      },
      evaluation: {
        ens: ["3 élèves : dites chacun 2 mots avec le son OUI, très bien articulés."],
        app: ["R.A. : mots acceptés : oui, huit, nuit, pluie, fruit, lui, cuire..."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON OUI DANS LES MOTS COURANTS",
        subs: [
          { t: "A. Les mots de la classe", paras: [[{ t: "le fruit", k: true }, " — ", { t: "la nuit", k: true }, " — ", { t: "la pluie", k: true }, " — ", { t: "huit", k: true }]] },
          { t: "B. Les mots de tous les jours", paras: [[{ t: "oui", k: true }, " — ", { t: "lui", k: true }, " — ", { t: "aujourd'hui", k: true }]] },
        ],
        retenir: ["Le son ", { t: "OUI", k: true }, " se cache dans : ", { t: "fruit, nuit, pluie, huit, lui, oui", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Écoute la maîtresse puis réponds :"], items: [
          ["1) Le dessert sucré qui pousse sur l'arbre : un ............"],
          ["2) Quand la lune brille : la ............"],
          ["3) L'eau qui tombe du nuage : la ............"],
          ["4) Après sept : ............"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure les mots qui contiennent le son OUI :"], items: [
          ["fruit souris"],
          ["lui lune"],
          ["aujourd'hui tapis"],
          ["pluie riz"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Complète chaque phrase avec fruit, nuit, pluie ou huit :"], items: [
          ["a) Je mange une pomme : c'est un ............"],
          ["b) Il tombe ............ gouttes de pluie."],
          ["c) Je dors bien la ............"],
          ["d) « ............ Madame, je comprends ! »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) un ", { t: "fruit", r: true }, " (2 pts) — 2) la ", { t: "nuit", r: true }, " (2 pts) — 3) la ", { t: "pluie", r: true }, " (2 pts) — 4) ", { t: "huit", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "fruit, lui, aujourd'hui, pluie", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["a) un ", { t: "fruit", r: true }, " — b) ", { t: "huit", r: true }, " — c) ", { t: "nuit", r: true }, " — d) ", { t: "Oui", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 33 =================
    {
      n: 33, titre: "Oui, I ou U ?", titreFiche: "Trois sons : I, U ou OUI ?",
      objectif: "Distinguer les trois sons I, U et OUI dans des mots connus.",
      supportFiche: "Image « I, U ou OUI ? », cartes-lettres I, U, OUI, tableau noir.",
      image: { file: "s33_oui_i_u.png", w: 1100, h: 560, legende: "Trois sons : I (bouche sourit), U (bouche ronde), OUI (ronde puis sourit)." },
      revision: {
        ens: ["Donnez 2 mots avec OUI. — Comment fait la bouche pour dire OUI ?"],
        app: ["R.A. : ", { t: "huit, pluie, fruit, nuit, oui", r: true }, " — bouche ", { t: "ronde puis elle sourit", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Écoutez : je dis riiiiz... luuune... ouiii... Est-ce le même son à chaque fois ? Combien de sons différents avez-vous entendus ?"],
        app: ["Écoutent et trouvent : trois sons différents !"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous jouons à reconnaître les trois sons : I, U et OUI. Après cette séance, votre oreille distinguera les trois !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait la bouche dans chaque panneau ?"],
        app: ["Observent silencieusement les trois panneaux et leurs indications."],
        technique: ["Observation guidée"], support: "Image « I, U ou OUI ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « riz », on entend I, U ou OUI ?"],
          ["2) Dans « lune », on entend quel son ?"],
          ["3) Dans « pluie », on entend quel son ?"],
          ["4) Pour dire OUI, la bouche fait quoi d'abord, puis quoi ?"],
        ] },
        app: { paras: [
          ["R.A. : On entend ", { t: "I", r: true }, "."],
          ["R.A. : On entend ", { t: "U", r: true }, "."],
          ["R.A. : On entend ", { t: "OUI", r: true }, "."],
          ["R.A. : Elle est ", { t: "ronde", r: true }, " d'abord, puis elle ", { t: "sourit", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « I, U ou OUI ? »",
      },
      synthese: {
        ens: ["Donc : trois sons à ne pas mélanger — I, la bouche sourit ; U, la bouche est ronde ; OUI, elle est ronde puis sourit. J'écoute bien avant de choisir !"],
        app: ["Répètent en mimant les trois bouches : iii — uuu — ouiii."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des trois coins : un coin I, un coin U, un coin OUI. Je dis un mot, chaque élève va dans le bon coin : tapis — huit — lune — pluie — riz — oui — rue — nuit."],
        app: ["Se déplacent dans le bon coin à chaque mot."],
        technique: ["Jeu des trois coins"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["« fruit » : I, U ou OUI ? — « rue » : I, U ou OUI ? — « ici » : I, U ou OUI ?"],
        app: ["R.A. : ", { t: "OUI — U — I", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. I, U OU OUI ? JE CHOISIS",
        subs: [
          { t: "A. Le son I", paras: [["La bouche ", { t: "sourit", k: true }, " : riz, tapis, souris."]] },
          { t: "B. Le son U", paras: [["La bouche est ", { t: "ronde", k: true }, " : lune, rue, salut."]] },
          { t: "C. Le son OUI", paras: [["La bouche est ", { t: "ronde puis sourit", k: true }, " : oui, huit, pluie, fruit, nuit."]] },
        ],
        retenir: ["", { t: "I", k: true }, " = sourit — ", { t: "U", k: true }, " = ronde — ", { t: "OUI", k: true }, " = ronde puis sourit !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son entendu :"], items: [
          ["1) pluie → I / U / OUI"],
          ["2) rue → I / U / OUI"],
          ["3) tapis → I / U / OUI"],
          ["4) fruit → I / U / OUI"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Barre l'intrus : le mot qui ne contient pas le son du groupe :"], items: [
          ["1) huit — riz — pluie (le son OUI)"],
          ["2) lune — nuit — souris (le son U)"],
          ["3) tapis — oui — ici (le son I)"],
          ["4) rue — fruit — salut (le son U)"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque mot à son son :"], items: [
          ["nuit • • I"],
          ["riz • • OUI"],
          ["lune • • OUI"],
          ["huit • • U"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "I", r: true }, " — 4) ", { t: "OUI", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) intrus : ", { t: "riz", r: true }, " — 2) intrus : ", { t: "souris", r: true }, " — 3) intrus : ", { t: "oui", r: true }, " — 4) intrus : ", { t: "fruit", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["nuit → ", { t: "OUI", r: true }, " — riz → ", { t: "I", r: true }, " — lune → ", { t: "U", r: true }, " — huit → ", { t: "OUI", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 34 =================
    {
      n: 34, titre: "Oui dans des mots connus", titreFiche: "Le son OUI dans les mots connus",
      objectif: "Trier des mots connus entre les trois sons I, U et OUI.",
      supportFiche: "Image « I, U ou OUI ? », trois boîtes-paniers, tableau noir.",
      image: null,
      revision: {
        ens: ["Je dis un mot, vous dites le son : pluie — riz — lune — huit — salut."],
        app: ["R.A. : ", { t: "OUI — I — U — OUI — U", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Les mots veulent encore jouer ! Aujourd'hui il y a TROIS maisons : la maison I, la maison U et la nouvelle maison OUI. Chaque mot rentre chez lui !"],
        app: ["Écoutent, curieux."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous rangeons des mots connus dans les 3 maisons : I, U et OUI. Après cette séance, aucun mot ne se perdra !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » Voici les trois maisons et les mots qui attendent devant elles. Lisez chaque mot dans votre tête."],
        app: ["Observent silencieusement les maisons et la liste des mots."],
        technique: ["Observation guidée"], support: "Image « I, U ou OUI ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) « fruit » : quelle maison ? Comment savoir ?"],
          ["2) « tapis » : quelle maison ?"],
          ["3) « rue » : quelle maison ?"],
          ["4) Comment reconnaître la maison OUI ?"],
        ] },
        app: { paras: [
          ["R.A. : La maison ", { t: "OUI", r: true }, " — j'entends oui à la fin."],
          ["R.A. : La maison ", { t: "I", r: true }, "."],
          ["R.A. : La maison ", { t: "U", r: true }, "."],
          ["R.A. : Ma bouche est ", { t: "ronde puis sourit", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « I, U ou OUI ? »",
      },
      synthese: {
        ens: ["Donc : j'écoute le mot, je regarde ma bouche, et je trouve sa maison : I, U ou OUI."],
        app: ["Répètent la méthode : j'écoute, je regarde ma bouche, je range."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des trois paniers : trois boîtes au tableau (I, U, OUI). Chaque élève reçoit un mot, le dit à voix haute et le met dans le bon panier : RIZ, HUIT, LUNE, PLUIE, TAPIS, NUIT, RUE, FRUIT."],
        app: ["Disent leur mot et le rangent dans le bon panier."],
        technique: ["Jeu des paniers"], support: "Trois boîtes-paniers",
      },
      evaluation: {
        ens: ["« lui » : quelle maison ? — « ici » : quelle maison ? — « oui » : quelle maison ?"],
        app: ["R.A. : ", { t: "OUI — I — OUI", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LES TROIS MAISONS : I, U ET OUI",
        subs: [
          { t: "A. La maison I", paras: [[{ t: "riz", k: true }, " — ", { t: "tapis", k: true }, " — ", { t: "souris", k: true }]] },
          { t: "B. La maison U", paras: [[{ t: "lune", k: true }, " — ", { t: "rue", k: true }, " — ", { t: "salut", k: true }]] },
          { t: "C. La maison OUI", paras: [[{ t: "oui", k: true }, " — ", { t: "huit", k: true }, " — ", { t: "pluie", k: true }, " — ", { t: "fruit", k: true }, " — ", { t: "nuit", k: true }]] },
        ],
        retenir: ["Trois maisons : ", { t: "I", k: true }, ", ", { t: "U", k: true }, " et ", { t: "OUI", k: true }, ". J'écoute et je range !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Range chaque mot dans sa maison (dis : maison I, maison U ou maison OUI) :"], items: [
          ["1) RIZ → I / U / OUI"],
          ["2) HUIT → I / U / OUI"],
          ["3) LUNE → I / U / OUI"],
          ["4) PLUIE → I / U / OUI"],
          ["5) TAPIS → I / U / OUI"],
          ["6) NUIT → I / U / OUI"],
          ["7) RUE → I / U / OUI"],
          ["8) FRUIT → I / U / OUI"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Trouve dans chaque phrase le mot avec OUI :"], items: [
          ["a) « La pluie tombe sur le tapis. » → .............."],
          ["b) « J'ai huit fruits dans mon panier. » → .............."],
          ["c) « La nuit, la lune brille dans la rue. » → .............."],
          ["d) « Oui, j'habite dans cette rue. » → .............."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot, tu choisis la maison :"], items: [
          ["1) « lui » → I / U / OUI"],
          ["2) « salut » → I / U / OUI"],
          ["3) « midi » → I / U / OUI"],
          ["4) « aujourd'hui » → I / U / OUI"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "I", r: true }, " — 2) ", { t: "OUI", r: true }, " — 3) ", { t: "U", r: true }, " — 4) ", { t: "OUI", r: true }, " — 5) ", { t: "I", r: true }, " — 6) ", { t: "OUI", r: true }, " — 7) ", { t: "U", r: true }, " — 8) ", { t: "OUI", r: true }, " (1 pt chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "pluie", r: true }, " (1,5 pt) — b) ", { t: "huit", r: true }, " (1,5 pt) — c) ", { t: "nuit", r: true }, " (1,5 pt) — d) ", { t: "oui / aujourd'hui", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "I", r: true }, " — 4) ", { t: "OUI", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 35 =================
    {
      n: 35, titre: "Comptine OUI", titreFiche: "La comptine OUI",
      objectif: "Écouter et mémoriser une comptine pleine de sons OUI.",
      supportFiche: "Affiche « ma comptine OUI », tableau noir.",
      image: { file: "s35_comptine_oui.png", w: 1100, h: 620, legende: "Ma comptine OUI : Petit Lui, la pluie, la nuit, huit gouttes..." },
      revision: {
        ens: ["Range ces mots dans les maisons : huit — riz — rue — pluie — lune."],
        app: ["R.A. : ", { t: "OUI — I — U — OUI — U", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Il pleut dehors ! Ding, ding, dong... Vous aimez la pluie ? Aujourd'hui, notre comptine parle de pluie, de nuit et de Petit Lui !"],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la comptine OUI. Après cette séance, vous connaîtrez tous les mots à OUI de la comptine."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite par l'enseignant, sans lire."],
        app: ["Écoutent la comptine réciter deux fois."],
        technique: ["Écoute du modèle"], support: "Affiche de la comptine",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment s'appelle le personnage de la comptine ?"],
          ["2) Combien de gouttes de pluie tombent ?"],
          ["3) Quand les gouttes tombent-elles ?"],
          ["4) Citez deux mots de la comptine avec le son OUI."],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Petit Lui", r: true }, "."],
          ["R.A. : ", { t: "Huit", r: true }, " gouttes."],
          ["R.A. : La ", { t: "nuit", r: true }, "."],
          ["R.A. : ", { t: "Lui, huit, pluie, nuit, oui", r: true }, " (deux au moins)."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de la comptine",
      },
      synthese: {
        ens: ["Donc : dans notre comptine, les mots à OUI sont : Lui, huit, pluie, nuit, oui. On les dit avec la bouche ronde puis qui sourit !"],
        app: ["Répètent les 5 mots à OUI en chœur, bien articulés."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Récitation par vers : je dis un vers, vous le répétez tous ensemble. Puis par demi-classe, puis quelques élèves seuls."],
        app: ["Répètent chaque vers en chœur, puis par groupe, puis individuellement."],
        technique: ["Répétition par vers"], support: "Affiche de la comptine",
      },
      evaluation: {
        ens: ["2 ou 3 élèves récitent les deux premiers vers seuls. On écoute les sons OUI."],
        app: ["Récitent ; la classe valide les OUI bien prononcés."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MA COMPTINE OUI",
        subs: [
          { t: "A. La comptine", paras: [
            [{ t: "Oui, oui, oui", k: true }, " ! dit Petit ", { t: "Lui", k: true }, ","],
            ["", { t: "huit", k: true }, " gouttes de ", { t: "pluie", k: true }, " tombent la ", { t: "nuit", k: true }, "."],
            ["Un ", { t: "fruit", k: true }, ", deux fruits, j'ai tout compris :"],
            [{ t: "oui, oui, oui", k: true }, ", je les dis : merci !"],
          ] },
        ],
        retenir: ["Les mots à OUI de la comptine : ", { t: "oui, Lui, huit, pluie, nuit, fruit", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
          ["Le son OUI dans « oui » bien prononcé : ....... / 2 pts"],
          ["Les mots huit, pluie, nuit bien articulés : ....... / 2 pts"],
          ["Le rythme bien respecté : ....... / 2 pts"],
          ["Les vers bien mémorisés : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
          ["a) « Oui, oui, oui ! dit Petit ............ »"],
          ["b) « ............ gouttes de pluie tombent la ............ »"],
          ["c) « Un ............, deux fruits, j'ai tout compris : »"],
          ["d) « ............, oui, oui, je les dis : merci ! »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["a) Le personnage s'appelle Petit Lui. → VRAI / FAUX"],
          ["b) Ce sont dix gouttes de pluie. → VRAI / FAUX"],
          ["c) Les gouttes tombent le jour. → VRAI / FAUX"],
          ["d) À la fin, on dit merci ! → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : son OUI (2 pts) + mots articulés (2 pts) + rythme (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "Lui", r: true }, " (1,5 pt) — b) ", { t: "Huit", r: true }, " / ", { t: "nuit", r: true }, " (1,5 pt) — c) ", { t: "fruit", r: true }, " (1,5 pt) — d) ", { t: "Oui", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["a) ", { t: "VRAI", r: true }, " (1,5 pt) — b) ", { t: "FAUX", r: true }, " (1,5 pt) — c) ", { t: "FAUX", r: true }, " (1,5 pt) — d) ", { t: "VRAI", r: true }, " (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 36 =================
    {
      n: 36, titre: "Bien articuler OUI", titreFiche: "Bien articuler le son OUI",
      objectif: "Prononcer correctement le son OUI en isolation et dans des mots.",
      supportFiche: "Image « U + I = OUI », miroir, tableau noir.",
      image: { file: "s36_articule_oui.png", w: 1100, h: 520, legende: "La bouche commence ronde (U), puis elle sourit (I) : OUI !" },
      revision: {
        ens: ["Récitez ensemble les deux premiers vers de la comptine OUI."],
        app: ["Récitent en chœur : « Oui, oui, oui ! dit Petit Lui, / huit gouttes de pluie tombent la nuit. »"],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["Regardez ma bouche : je fais la bouche ronde de U... et pendant que je souffle, je souris ! Ouuiii ! Avec votre miroir, essayez !"],
        app: ["Observent leur bouche dans le miroir et imitent."],
        technique: ["Démonstration + miroir"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous nous entraînons à très bien articuler le son OUI. Après cette séance, votre OUI sera parfait !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait la bouche du premier visage ? Et du deuxième ?"],
        app: ["Observent silencieusement les deux visages et la formule U + I = OUI."],
        technique: ["Observation guidée"], support: "Image « U + I = OUI »",
      },
      analyse: {
        ens: { paras: [
          ["1) Par quelle bouche commence le son OUI ?"],
          ["2) Par quelle bouche finit-il ?"],
          ["3) Dites ouiii en commençant rond : qui réussit ?"],
          ["4) Dites maintenant : huuuit — pluuuie. Entendez-vous le OUI ?"],
        ] },
        app: { paras: [
          ["R.A. : Par la bouche ", { t: "ronde", r: true }, " (comme U)."],
          ["R.A. : Par le ", { t: "sourire", r: true }, " (comme I)."],
          ["R.A. : (chaque élève essaie devant son miroir)"],
          ["R.A. : Oui, le OUI s'entend à la fin."],
        ] },
        technique: ["Question / réponse"], support: "Image « U + I = OUI », miroir",
      },
      synthese: {
        ens: ["Donc : OUI = U + I. La bouche commence ronde, puis elle sourit : ouiii ! Je m'entraîne lentement, puis vite !"],
        app: ["Répètent lentement puis de plus en plus vite : ouiii — huit — pluie — fruit."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du train : le train démarre lentement puis accélère ! On dit le son OUI de plus en plus vite : ou... oui... oui-oui-oui ! Puis avec les mots : huit, pluie, fruit, nuit, lui."],
        app: ["Répètent le son puis les mots, de plus en plus vite."],
        technique: ["Jeu de prononciation"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites « aujourd'hui » très bien articulé. On écoute le OUI final."],
        app: ["R.A. : aujourd'-OUIII avec le OUI bien clair."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN ARTICULER LE SON OUI",
        subs: [
          { t: "A. La recette du son OUI", paras: [[{ t: "OUI = U + I", k: true }, ". Ma bouche est ", { t: "ronde", k: true }, ", puis elle ", { t: "sourit", k: true }, " : ", { t: "ouiii", k: true }, " !"]] },
          { t: "B. Je m'entraîne", paras: [
            ["Lentement : ", { t: "ou...oui", k: true }, ". Vite : ", { t: "oui-oui-oui !", k: true }],
            ["Dans les mots : ", { t: "huit — pluie — fruit — nuit — lui — aujourd'hui", k: true }, "."],
          ] },
        ],
        retenir: ["Le son ", { t: "OUI", k: true }, " = bouche ", { t: "ronde", k: true }, " puis ", { t: "sourire", k: true }, " : ", { t: "ouiii", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, dis OUI avec la bonne bouche. L'enseignant observe :"], items: [
          ["La bouche commence ronde : ....... / 2 pts"],
          ["Elle finit en sourire : ....... / 2 pts"],
          ["Le son est clair (ni un U seul, ni un I seul) : ....... / 2 pts"],
          ["Répété 3 fois sans se tromper : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète après la maîtresse, en chœur puis seul :"], items: [
          ["1) ou...oui"],
          ["2) huuuit"],
          ["3) pluuuie"],
          ["4) aujourd'huiiii"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Je dis 3 mots : barre celui qui n'a pas de son OUI :"], items: [
          ["1) huit — lune — pluie"],
          ["2) riz — fruit — nuit"],
          ["3) lui — rue — oui"],
          ["4) aujourd'hui — tapis — cuire"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : départ rond (2 pts) + sourire final (2 pts) + clarté (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec le OUI bien articulé (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) intrus : ", { t: "lune", r: true }, " — 2) intrus : ", { t: "riz", r: true }, " — 3) intrus : ", { t: "rue", r: true }, " — 4) intrus : ", { t: "tapis", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 37 =================
    {
      n: 37, titre: "Oui — bien prononcer les mots", titreFiche: "OUI — bien prononcer les mots",
      objectif: "Prononcer correctement les mots courants contenant le son OUI.",
      supportFiche: "Cartes-mots (oui, huit, pluie, fruit, nuit, lui, aujourd'hui), miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Faites la bouche de OUI : ronde puis sourire. Barrez l'intrus : huit, pluie, lune."],
        app: ["(font le geste) — Intrus : ", { t: "lune", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Quand maman vous demande si vous avez bien mangé, que répondez-vous ? « Oui » ! Aujourd'hui, on apprend à dire tous les mots à OUI comme des champions !"],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous prononçons très bien les mots avec OUI, tout seuls et dans des phrases. Après cette séance, personne ne dira « roui » ni « loui » !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » J'écoute la maîtresse dire chaque carte-mot très bien articulée : oui — huit — pluie — fruit — nuit — lui — aujourd'hui."],
        app: ["Écoutent chaque mot attentivement."],
        technique: ["Écoute du modèle"], support: "Cartes-mots",
      },
      analyse: {
        ens: { paras: [
          ["1) Où entend-on OUI dans « huit » : au début ou à la fin ?"],
          ["2) Où entend-on OUI dans « pluie » ?"],
          ["3) Où entend-on OUI dans « aujourd'hui » ?"],
          ["4) Quel mot a un son OUI caché au milieu : « fruit » ou « lune » ?"],
        ] },
        app: { paras: [
          ["R.A. : À la ", { t: "fin", r: true }, " (et au début : le h)."],
          ["R.A. : À la ", { t: "fin", r: true }, "."],
          ["R.A. : À la ", { t: "fin", r: true }, "."],
          ["R.A. : Dans ", { t: "fruit", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-mots",
      },
      synthese: {
        ens: ["Donc : dans tous ces mots, le son OUI s'entend très clairement. Je le dis en ouvrant bien : bouche ronde puis sourire !"],
        app: ["Répètent les 7 mots en chœur, puis quelques élèves seuls."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du marchand de fruits : par binômes, un marchand, un client. Le client demande : « Je voudrais huit fruits, s'il vous plaît ! » Le marchand répond : « Oui ! Voici huit fruits ! ». Puis on échange les rôles."],
        app: ["Jouent le dialogue avec les mots à OUI bien prononcés."],
        technique: ["Jeu de rôle en binômes"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : dites cette phrase très bien : « La pluie tombe la nuit sur les huit fruits. »"],
        app: ["R.A. : phrase répétée avec tous les OUI bien clairs."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN PRONONCER LES MOTS AVEC OUI",
        subs: [
          { t: "A. Les mots tout seuls", paras: [[{ t: "oui — huit — pluie — fruit — nuit — lui — aujourd'hui", k: true }]] },
          { t: "B. Les mots dans une phrase", paras: [["« ", { t: "La pluie", k: true }, " tombe la ", { t: "nuit", k: true }, " sur les ", { t: "huit fruits", k: true }, ". »"]] },
        ],
        retenir: ["Je prononce chaque mot à ", { t: "OUI", k: true }, " avec la bouche ronde puis qui sourit."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Répète chaque mot seul, très bien articulé (l'enseignant valide) :"], items: [
          ["1) oui ....... / 2 pts"],
          ["2) huit ....... / 2 pts"],
          ["3) pluie ....... / 2 pts"],
          ["4) aujourd'hui ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète chaque phrase sans te tromper (on écoute les OUI) :"], items: [
          ["1) « Oui, j'ai huit ans ! »"],
          ["2) « La pluie tombe la nuit. »"],
          ["3) « Lui, il mange un fruit. »"],
          ["4) « Aujourd'hui, il pleut sur la rue. »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Complète chaque phrase avec le mot que la maîtresse dit :"], items: [
          ["1) « ............, je viens à l'école ! » (accord)"],
          ["2) « J'ai ............ crayons. » (le nombre)"],
          ["3) « Le ............ est sucré. » (il pousse sur l'arbre)"],
          ["4) « ............, nous avons classe. » (ce jour)"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : chaque mot bien articulé = 2 pts (total 8 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec les OUI bien clairs (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "Oui", r: true }, " — 2) ", { t: "huit", r: true }, " — 3) ", { t: "fruit", r: true }, " — 4) ", { t: "Aujourd'hui", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 38 =================
    {
      n: 38, titre: "Comptine OUI — prononciation", titreFiche: "Comptine OUI — bien prononcer",
      objectif: "Réciter la comptine OUI en articulant parfaitement tous les sons OUI.",
      supportFiche: "Affiche « ma comptine OUI », miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Dites très bien : oui — huit — pluie — fruit. (3 élèves)"],
        app: ["Répètent chaque mot avec la bouche ronde puis qui sourit."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, notre comptine devient un concert ! Chaque OUI doit s'entendre jusqu'au fond de la classe."],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous récitons la comptine OUI en travaillant la prononciation. Après cette séance, elle sera parfaite !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite très lentement par l'enseignant : les OUI sont bien gonflés !"],
        app: ["Écoutent la comptine lente et bien articulée."],
        technique: ["Écoute du modèle"], support: "Affiche de la comptine",
      },
      analyse: {
        ens: { paras: [
          ["1) Quels sont les 5 mots à OUI de la comptine ?"],
          ["2) Comment fait la bouche pour chacun ?"],
          ["3) Quel mot de la comptine a OUI caché à la fin : « compris » ou « merci » ?"],
          ["4) Écoutez : « j'ai tout compris » — le son final, c'est I ou OUI ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "oui, Lui, huit, pluie, nuit (et fruit)", r: true }, "."],
          ["R.A. : Bouche ", { t: "ronde puis sourire", r: true }, "."],
          ["R.A. : Dans ", { t: "« compris »", r: true }, "."],
          ["R.A. : C'est ", { t: "I", r: true }, " (attention, pas OUI !)."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de la comptine",
      },
      synthese: {
        ens: ["Donc : dans la comptine, je gonfle chaque OUI, mais attention : « compris » finit par I tout seul ! J'écoute ma bouche à chaque mot."],
        app: ["Répètent : huit (OUI) — compris (I) — pluie (OUI) — merci (I)."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Concert par groupes : chaque groupe réciter la comptine, tous ensemble. Le reste de la classe lève la main à chaque OUI entendu. On corrige les OUI oubliés ou mal dits."],
        app: ["Récitent en groupes ; les autres comptent et valident les OUI."],
        technique: ["Récitation en groupes"], support: "Affiche de la comptine",
      },
      evaluation: {
        ens: ["2 élèves récitent toute la comptine seuls. Grille : chaque OUI bien articulé vaut un point."],
        app: ["Récitent ; l'enseignant note chaque OUI réussi."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LA COMPTINE OUI : JE PRONONCE PARFAITEMENT",
        subs: [
          { t: "A. Les OUI de la comptine", paras: [[{ t: "oui (x4)", k: true }, " — ", { t: "Lui", k: true }, " — ", { t: "huit", k: true }, " — ", { t: "pluie", k: true }, " — ", { t: "nuit", k: true }, " — ", { t: "fruit", k: true }]] },
          { t: "B. Le piège", paras: [["Attention : dans « ", { t: "compris", k: true }, " » et « ", { t: "merci", k: true }, " », c'est I tout seul, pas OUI !"]] },
        ],
        retenir: ["Je gonfle les ", { t: "OUI", k: true }, " de la comptine, mais « compris » finit par ", { t: "I", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite toute la comptine. Grille de prononciation :"], items: [
          ["Les OUI du début (oui, oui, oui) bien gonflés : ....... / 2 pts"],
          ["Lui, huit, pluie, nuit bien articulés : ....... / 2 pts"],
          ["Le piège « compris » dit avec I seul : ....... / 2 pts"],
          ["La comptine complète sans aide : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure les mots de la comptine qui ont un son OUI :"], items: [
          ["Lui compris"],
          ["merci pluie"],
          ["nuit dit"],
          ["huit oui"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : OUI ou I à la fin ? Fais une croix :"], items: [
          ["1) pluie → OUI / I"],
          ["2) compris → OUI / I"],
          ["3) huit → OUI / I"],
          ["4) merci → OUI / I"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : OUI du début (2 pts) + mots articulés (2 pts) + piège « compris » (2 pts) + autonomie (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "Lui, pluie, nuit, huit, oui", r: true }, " (1,5 pt ; 0,5 pt offert pour 5 bonnes réponses)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "I", r: true }, " — 3) ", { t: "OUI", r: true }, " — 4) ", { t: "I", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 39 =================
    {
      n: 39, titre: "Répétition rythmée OUI", titreFiche: "Répétition rythmée des mots à OUI",
      objectif: "Répéter des mots et des phrases à OUI en respectant le rythme (syllabes).",
      supportFiche: "Tambourin (ou frappement des mains), cartes-phrases, tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez la comptine OUI en groupes. — Dans « compris », c'est OUI ou I ?"],
        app: ["Récitent en groupes. — C'est ", { t: "I", r: true }, "."],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["(frapper un rythme sur le tambourin) Écoutez le rythme : TAM-tam-tam. Maintenant avec des mots : OUI (1 frappe), plu-IE... non ! pluie (1 frappe) !"],
        app: ["Écoutent le rythme et constatent : oui = 1 frappe, 1 syllabe !"],
        technique: ["Démonstration"], support: "Tambourin",
      },
      presentation: {
        ens: ["Aujourd'hui, nous répétons les mots à OUI en suivant le rythme. Après cette séance, vous parlerez français en cadence !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant dit chaque mot en frappant le rythme : oui (1), fruit (1), pluie (1), « la pluie tombe » (3)."],
        app: ["Observent et écoutent les frappements."],
        technique: ["Démonstration"], support: "Tambourin",
      },
      analyse: {
        ens: { paras: [
          ["1) Combien de frappes pour « oui » ?"],
          ["2) Combien de frappes pour « pluie » ?"],
          ["3) Combien de frappes pour « huit fruits » ?"],
          ["4) Frappez et dites : « la pluie tombe la nuit » — combien de frappes ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "1 frappe", r: true }, " (1 syllabe)."],
          ["R.A. : ", { t: "1 frappe", r: true }, "."],
          ["R.A. : ", { t: "2 frappes", r: true }, "."],
          ["R.A. : ", { t: "6 frappes", r: true }, " (la-pluie-tombe-la-nuit)."],
        ] },
        technique: ["Question / réponse"], support: "Tambourin",
      },
      synthese: {
        ens: ["Donc : chaque syllabe = une frappe. « Oui » est court : une seule syllabe ! Je dis et je frappe en même temps."],
        app: ["Répètent la règle : 1 syllabe = 1 frappe."],
        technique: ["Travail collectif"], support: "Tambourin",
      },
      application: {
        ens: ["Jeu du chef d'orchestre : un élève dirige avec le tambourin. Tous répètent les mots au rythme du chef : oui — huit — pluie — fruit — nuit — lui. Le chef accélère ou ralentit, tout le monde suit !"],
        app: ["Suivent le rythme du chef d'orchestre."],
        technique: ["Jeu du chef d'orchestre"], support: "Tambourin",
      },
      evaluation: {
        ens: ["L'enseignant frappe 2 fois puis dit « huit fruits ». L'élève répète avec le même rythme. (3 élèves)"],
        app: ["R.A. : répétition avec le bon nombre de frappes."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LA RYTHME DES MOTS À OUI",
        subs: [
          { t: "A. 1 syllabe = 1 frappe", paras: [[{ t: "oui", k: true }, " (1) — ", { t: "huit", k: true }, " (1) — ", { t: "pluie", k: true }, " (1) — ", { t: "fruit", k: true }, " (1)"]] },
          { t: "B. Les phrases en rythme", paras: [
            ["« ", { t: "Oui", k: true }, " ! » (1 frappe)"],
            ["« ", { t: "Huit fruits", k: true }, ". » (2 frappes)"],
            ["« ", { t: "La pluie tombe la nuit", k: true }, ". » (6 frappes)"],
          ] },
        ],
        retenir: ["Une syllabe = une ", { t: "frappe", k: true }, ". « Oui » = ", { t: "1 syllabe", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Écoute puis frappe et dis en même temps (l'enseignant valide) :"], items: [
          ["1) oui ....... / 2 pts"],
          ["2) fruit ....... / 2 pts"],
          ["3) huit fruits ....... / 2 pts"],
          ["4) « la pluie tombe » ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Combien de frappes (syllabes) ? Fais une croix sous le bon nombre :"], items: [
          ["1) oui → 1 / 2 / 3"],
          ["2) pluie → 1 / 2 / 3"],
          ["3) huit → 1 / 2 / 3"],
          ["4) « oui, oui ! » → 1 / 2 / 3"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu du chef : dirigé par ton camarade, répète les 4 phrases en rythme :"], items: [
          ["1) « Oui ! » ....... / 1,5 pt"],
          ["2) « La nuit, il pleut. » ....... / 1,5 pt"],
          ["3) « Lui, il a huit fruits. » ....... / 1,5 pt"],
          ["4) « Oui-oui, aujourd'hui ! » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : mots et frappes simultanés et corrects (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "1", r: true }, " — 2) ", { t: "1", r: true }, " — 3) ", { t: "1", r: true }, " — 4) ", { t: "2", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque phrase répétée dans le rythme du chef = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 40 =================
    {
      n: 40, titre: "Performance finale — le son OUI", titreFiche: "Performance finale — le son OUI",
      objectif: "Réussir l'épreuve finale de repérage et de prononciation du son OUI.",
      supportFiche: "Cartes-mots, affiche de la comptine, tambourin, grille d'observation, tableau noir.",
      image: { file: "s40_performance_oui.png", w: 1100, h: 520, legende: "Performance finale : le son OUI, je le maîtrise !" },
      revision: {
        ens: ["Grand rappel : le son OUI, c'est quelle bouche ? Frappez : « huit fruits ». Combien de frappes ?"],
        app: ["R.A. : Bouche ", { t: "ronde puis sourire", r: true }, ". — ", { t: "2 frappes", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, c'est le grand jour : la performance finale du son OUI ! Chacun va montrer tout ce qu'il a appris."],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Au programme : 3 épreuves — trouver des mots à OUI, réciter la comptine, et dire les phrases en rythme. Après cette séance, vous serez champions du son OUI !"],
        app: ["Écoutent les consignes."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant fait une démonstration complète des 3 épreuves avec un élève volontaire."],
        app: ["Observent la démonstration et mémorisent le déroulement."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Épreuve 1 : que doit faire le champion ?"],
          ["2) Épreuve 2 : que doit-il faire avec la comptine ?"],
          ["3) Épreuve 3 : que doit-il faire avec le tambourin ?"],
          ["4) Comment gagne-t-on le trophée OUI ?"],
        ] },
        app: { paras: [
          ["R.A. : Donner des mots avec le son ", { t: "OUI", r: true }, "."],
          ["R.A. : Réciter en ", { t: "articulant les OUI", r: true }, "."],
          ["R.A. : Dire les phrases ", { t: "en rythme", r: true }, "."],
          ["R.A. : En réussissant les ", { t: "3 épreuves", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : je me souviens de tout — OUI, bouche ronde puis sourire ; les mots : huit, pluie, fruit, nuit, lui ; la comptine ; et le rythme : 1 syllabe, 1 frappe. Bonne chance, champions !"],
        app: ["Répètent le résumé en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Passage des épreuves pendant que les autres s'entraînent en binômes avec les cartes-mots. Chaque élève passe les 3 épreuves à tour de rôle."],
        app: ["Passent les épreuves individuellement ; les autres s'entraînent en binômes."],
        technique: ["Passage individuel + entraide"], support: "Cartes-mots, comptine, tambourin",
      },
      evaluation: {
        ens: ["Résultats : qui a gagné le trophée OUI ? On félicite tous les champions et on note dans la grille qui doit encore s'entraîner."],
        app: ["R.A. : chaque élève connaît son résultat et ce qu'il doit revoir."],
        technique: ["Bilan individuel"],
      },
      lecon: {
        titre: "1. LE SON OUI : JE LE MAÎTRISE",
        subs: [
          { t: "A. Tout ce que je sais", paras: [
            ["Le son ", { t: "OUI", k: true }, " : bouche ", { t: "ronde", k: true }, " puis ", { t: "sourire", k: true }, "."],
            ["Les mots : ", { t: "oui, huit, pluie, fruit, nuit, lui, aujourd'hui", k: true }, "."],
            ["Les 3 sons : ", { t: "I", k: true }, " (sourit), ", { t: "U", k: true }, " (ronde), ", { t: "OUI", k: true }, " (ronde puis sourit)."],
            ["Le rythme : ", { t: "1 syllabe = 1 frappe", k: true }, "."],
          ] },
        ],
        retenir: ["Je suis champion du son ", { t: "OUI", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 (individuel) : donne 3 mots avec le son OUI et prononce-les parfaitement :"], items: [
          ["Mot 1 : .............. ....... / 1,5 pt"],
          ["Mot 2 : .............. ....... / 1,5 pt"],
          ["Mot 3 : .............. ....... / 1 pt"],
          ["Prononciation (bouche ronde puis sourire) : ....... / 4 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 : récite un couplet de la comptine en articulant tous les OUI :"], items: [
          ["Les OUI bien gonflés : ....... / 2 pts"],
          ["Le piège « compris » dit avec I : ....... / 2 pts"],
          ["Le couplet bien mémorisé : ....... / 2 pts"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 : dis les phrases en frappant le rythme :"], items: [
          ["1) « Oui ! » ....... / 1,5 pt"],
          ["2) « La pluie tombe la nuit. » ....... / 1,5 pt"],
          ["3) « Lui, il a huit fruits. » ....... / 1,5 pt"],
          ["4) « Oui-oui, aujourd'hui ! » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale : mots réels avec OUI (4 pts) + prononciation parfaite (4 pts). Mots acceptés : oui, huit, pluie, fruit, nuit, lui, aujourd'hui, cuire..."]] },
        { titre: "Exercice 2", lines: [["Grille orale (6 pts) : OUI gonflés (2 pts) + piège « compris » (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : phrase + frappes synchronisées = 1,5 pt chacune (total 6 pts)."]] },
      ],
    },
  ],
};

module.exports = { theme4, DOC };
