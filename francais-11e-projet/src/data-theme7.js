// ============================================================
// data-theme7.js — THÈME 7 : LE SON GN (61-70)
// Sous-discipline : Phonétique — titres et progression d'après
// la FRA officielle (« prononcer correctement le son GN »),
// mots : montagne, campagne, agneau, peigne, oignon, ligne,
// signe, cigogne + piège GN vs N, gabarit du Thème 6.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme7 = {
  numero: 7,
  nom: "Le son GN",
  sousDiscipline: "Phonétique",
  notions: "SON GN — MONTAGNE — CAMPAGNE — AGNEAU — PEIGNE — OIGNON — LIGNE — SIGNE — CIGOGNE — GN ou N — SYLLABE — RYTHME",
  competences: [
    "Repérer le son GN dans de nouveaux mots (montagne, campagne, agneau, peigne).",
    "Repérer le son GN dans d'autres mots (oignon, ligne, signe, cigogne).",
    "Distinguer le son GN du son N (gagner/nager, signe/singe).",
    "Prononcer correctement le son GN (la langue monte au palais).",
    "Réciter une comptine en articulant le son GN.",
    "Répéter des mots et des phrases en respectant le rythme.",
  ],
  seances: [
    // ================= SÉANCE 61 =================
    {
      n: 61, titre: "Le son GN — de nouveaux mots", titreFiche: "Le son GN — de nouveaux mots",
      objectif: "Repérer et prononcer le son GN dans de nouveaux mots (montagne, campagne, agneau, peigne).",
      supportFiche: "Image « nouveaux mots avec GN », peigne réel (ou image), miroir, tableau noir.",
      image: { file: "s61_son_gn.png", w: 1100, h: 560, legende: "De nouveaux mots avec GN : la montagne, la campagne, l'agneau, le peigne." },
      revision: {
        ens: ["Nommez 3 lieux du village. — Comment dit-on qu'il n'y a pas de train ?"],
        app: ["R.A. : ", { t: "la case, l'école, la boutique, le puits, le marché", r: true }, " — « ", { t: "Il n'y a pas de train", r: true }, ". »"],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer un peigne) Qu'est-ce que c'est ? Un peigne ! Écoutez bien : pei-GNE... j'entends un son nouveau, un son épais qui gratte le palais !"],
        app: ["Écoutent et répètent : peigne... GN !"],
        technique: ["Question ouverte"], support: "Peigne réel (ou image)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous découvrons le son GN dans de nouveaux mots. Après cette séance, vous le repérerez dans plein de mots nouveaux !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Nommez dans votre tête chaque dessin : que voyez-vous ?"],
        app: ["Observent silencieusement les quatre dessins (montagne, campagne, agneau, peigne)."],
        technique: ["Observation guidée"], support: "Image « nouveaux mots avec GN »",
      },
      analyse: {
        ens: { paras: [
          ["1) Qu'est-ce qui est très haut, avec de la neige au sommet ?"],
          ["2) Où trouve-t-on les grands champs, loin des maisons ?"],
          ["3) Quel petit animal blanc dit bêêê ?"],
          ["4) Quel son entend-on dans : montagne ? agneau ? peigne ? campagne ?"],
        ] },
        app: { paras: [
          ["R.A. : La ", { t: "montagne", r: true }, "."],
          ["R.A. : À ", { t: "la campagne", r: true }, "."],
          ["R.A. : ", { t: "L'agneau", r: true }, "."],
          ["R.A. : Le son ", { t: "GN", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « nouveaux mots avec GN »",
      },
      synthese: {
        ens: ["Donc : le son GN s'entend dans montagne, campagne, agneau, peigne. Ma langue monte au palais : gnnn ! Répétez !"],
        app: ["Répètent en chœur : gnnn — montagne — campagne — agneau — peigne, langue au palais."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis des mots. Si vous entendez le son GN, vous levez la main : montagne — nuit — agneau — panier — peigne — reine."],
        app: ["Lèvent la main pour montagne, agneau, peigne ; ne lèvent pas pour nuit, panier, reine."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : donnez un mot de la leçon avec GN et dites-le très bien, langue au palais."],
        app: ["R.A. : ", { t: "montagne, campagne, agneau ou peigne", r: true }, ", bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON GN : DE NOUVEAUX MOTS",
        subs: [
          { t: "A. Rappel", paras: [["Le son ", { t: "GN", k: true }, " : ma langue monte au ", { t: "palais", k: true }, " : ", { t: "gnnn", k: true }, " !"]] },
          { t: "B. De nouveaux mots", paras: [[{ t: "la montagne", k: true }, " — ", { t: "la campagne", k: true }, " — ", { t: "l'agneau", k: true }, " — ", { t: "le peigne", k: true }]] },
        ],
        retenir: ["Le son ", { t: "GN", k: true }, " se cache dans : ", { t: "montagne, campagne, agneau, peigne", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son GN :"], items: [
          ["montagne nuit"],
          ["agneau tapis"],
          ["peigne reine"],
          ["campagne banane"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque phrase avec montagne, agneau, peigne ou campagne :"], items: [
          ["a) On grimpe au sommet de la ............"],
          ["b) Le ............ dit bêêê."],
          ["c) Je me coiffe avec un ............"],
          ["d) Les grands champs, c'est la ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) montagne → GN / N"],
          ["2) nuit → GN / N"],
          ["3) cigogne → GN / N"],
          ["4) panier → GN / N"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "montagne, agneau, peigne, campagne", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "montagne", r: true }, " (1,5 pt) — b) ", { t: "agneau", r: true }, " (1,5 pt) — c) ", { t: "peigne", r: true }, " (1,5 pt) — d) ", { t: "campagne", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "GN", r: true }, " — 2) ", { t: "N", r: true }, " — 3) ", { t: "GN", r: true }, " — 4) ", { t: "N", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 62 =================
    {
      n: 62, titre: "D'autres mots avec GN", titreFiche: "D'autres mots avec GN",
      objectif: "Repérer le son GN dans d'autres mots (oignon, ligne, signe, cigogne).",
      supportFiche: "Image « encore des mots avec GN », oignon réel, règle, tableau noir.",
      image: { file: "s62_mots_gn.png", w: 1100, h: 560, legende: "Encore des mots avec GN : l'oignon, la ligne, le signe, la cigogne." },
      revision: {
        ens: ["Donnez les 4 nouveaux mots avec GN de la dernière séance. — Où est la langue pour dire GN ?"],
        app: ["R.A. : ", { t: "montagne, campagne, agneau, peigne", r: true }, " — au ", { t: "palais", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer un oignon) O...GNON ! Vous connaissez ce son maintenant ! Et avec ma règle, je trace une... ligne : li-GNE !"],
        app: ["Écoutent, retrouvent le son GN et le nomment."],
        technique: ["Question ouverte"], support: "Oignon réel, règle",
      },
      presentation: {
        ens: ["Aujourd'hui, nous ajoutons 4 nouveaux mots au panier des mots avec GN. Après cette séance, il sera bien plein !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Nommez dans votre tête chaque dessin."],
        app: ["Observent les quatre dessins (oignon, ligne, signe, cigogne)."],
        technique: ["Observation guidée"], support: "Image « encore des mots avec GN »",
      },
      analyse: {
        ens: { paras: [
          ["1) Que met-on dans le riz pour le rendre bon ?"],
          ["2) Que trace-t-on avec la règle ?"],
          ["3) Qu'observe-t-on au bord de la route ?"],
          ["4) Quel grand oiseau au long bec marche sur une patte ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "L'oignon", r: true }, "."],
          ["R.A. : Une ", { t: "ligne", r: true }, "."],
          ["R.A. : Un ", { t: "signe", r: true }, "."],
          ["R.A. : ", { t: "La cigogne", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « encore des mots avec GN »",
      },
      synthese: {
        ens: ["Donc : oignon, ligne, signe, cigogne : quatre nouveaux mots avec GN. Le son GN se cache partout !"],
        app: ["Répètent en chœur : oignon — ligne — signe — cigogne, langue au palais."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je mime, vous dites le mot : je pleure en coupant (l'oignon !), je trace droit (la ligne !), je lève la main (le signe !), je marche sur une patte (la cigogne !)."],
        app: ["Regardent les mimes et disent le mot avec GN, bien articulé."],
        technique: ["Jeu de mimes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : donnez un des 4 nouveaux mots et dites-le très bien."],
        app: ["R.A. : ", { t: "oignon, ligne, signe ou cigogne", r: true }, ", bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "2. D'AUTRES MOTS AVEC GN",
        subs: [
          { t: "A. Les nouveaux mots", paras: [[{ t: "l'oignon", k: true }, " — ", { t: "la ligne", k: true }, " — ", { t: "le signe", k: true }, " — ", { t: "la cigogne", k: true }]] },
          { t: "B. GN se cache", paras: [["Dans ", { t: "o-GNON", k: true }, ", ", { t: "li-GNE", k: true }, ", ", { t: "si-GNE", k: true }, ", ", { t: "ci-COGNE", k: true }, " !"]] },
        ],
        retenir: ["GN se cache aussi dans : ", { t: "oignon, ligne, signe, cigogne", k: true }, ". Je le dis langue au palais !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son GN :"], items: [
          ["oignon nuit"],
          ["ligne banane"],
          ["cigogne reine"],
          ["signe panier"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque phrase avec oignon, ligne, signe ou cigogne :"], items: [
          ["a) Je trace une ............ avec ma règle."],
          ["b) Le ............ fait pleurer le cuisinier."],
          ["c) Au bord de la route, il y a un ............"],
          ["d) La ............ marche sur une patte."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Répète chaque mot très bien articulé (l'enseignant valide) :"], items: [
          ["1) oignon ....... / 1,5 pt"],
          ["2) ligne ....... / 1,5 pt"],
          ["3) signe ....... / 1,5 pt"],
          ["4) cigogne ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "oignon, ligne, cigogne, signe", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "ligne", r: true }, " (1,5 pt) — b) ", { t: "oignon", r: true }, " (1,5 pt) — c) ", { t: "signe", r: true }, " (1,5 pt) — d) ", { t: "cigogne", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque mot bien articulé, langue au palais (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 63 =================
    {
      n: 63, titre: "GN ou N ?", titreFiche: "GN ou N ? — j'écoute bien",
      objectif: "Distinguer le son GN du son N (gagner/nager, signe/singe, peigne/reine).",
      supportFiche: "Image « GN ou N ? », cartes-mots, tableau noir.",
      image: { file: "s63_gn_ou_n.png", w: 1100, h: 560, legende: "GN comme dans montagne. N comme dans nuage. J'écoute bien !" },
      revision: {
        ens: ["Donnez les 4 mots avec GN d'hier. — Que met-on dans le riz ?"],
        app: ["R.A. : ", { t: "oignon, ligne, signe, cigogne", r: true }, " — ", { t: "l'oignon", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Jeu des deux coins : je dis « montagne » → courez au coin GN ! Je dis « nuit » → courez au coin N ! Prêts ?"],
        app: ["Courent au bon coin pour chaque mot, très motivés."],
        technique: ["Jeu des deux coins"], support: "Image « GN ou N ? »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous devenons détectives des sons : GN ou N ? Le GN est épais, le N est fin. À vos oreilles !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » À gauche : les mots avec GN. À droite : les mots avec N tout seul."],
        app: ["Observent les deux panneaux et lisent les mots avec l'enseignant."],
        technique: ["Observation guidée"], support: "Image « GN ou N ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « montagne », entends-tu GN ?"],
          ["2) Dans « nuage », entends-tu GN ?"],
          ["3) « gagne » : GN ou N ?"],
          ["4) « nage » : GN ou N ?"],
        ] },
        app: { paras: [
          ["R.A. : Oui, ", { t: "mon-TA-GNE", r: true }, " !"],
          ["R.A. : Non, ", { t: "N tout seul", r: true }, " !"],
          ["R.A. : ", { t: "GN", r: true }, " (ga-GNE)."],
          ["R.A. : ", { t: "N", r: true }, " (na-ge)."],
        ] },
        technique: ["Question / réponse"], support: "Image « GN ou N ? »",
      },
      synthese: {
        ens: ["Donc : GN est épais, la langue au palais : mon-TA-GNE, pei-GNE. N est fin : nuage, nage, reine. J'écoute avant de répondre !"],
        app: ["Répètent les paires en chœur : montagne/nuage, gagne/nage, peigne/reine."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Encore le jeu des deux coins : gagner — nager — peigne — reine — signe — singe !"],
        app: ["Courent au bon coin : ", { t: "gagner, peigne, signe → GN", r: true }, " ; ", { t: "nager, reine, singe → N", r: true }, "."],
        technique: ["Jeu des deux coins"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse dit un mot, répondez GN ou N."],
        app: ["R.A. : réponse correcte avec le mot répété correctement."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "3. GN OU N ?",
        subs: [
          { t: "A. Le son GN (épais)", paras: [[{ t: "mon-TA-GNE", k: true }, " — ", { t: "a-GNEAU", k: true }, " — ", { t: "pei-GNE", k: true }]] },
          { t: "B. Le son N tout seul (fin)", paras: [[{ t: "nuage", k: true }, " — ", { t: "nage", k: true }, " — ", { t: "reine", k: true }]] },
        ],
        retenir: [{ t: "GN", k: true }, " est épais (montagne), ", { t: "N", k: true }, " est fin (nuage). Dans le doute, j'écoute !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Coche GN ou N selon ce que tu entends :"], items: [
          ["1) gagner → GN / N"],
          ["2) nager → GN / N"],
          ["3) montagne → GN / N"],
          ["4) reine → GN / N"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure le mot qui contient le son GN :"], items: [
          ["1) peigne / reine"],
          ["2) ligne / lire"],
          ["3) montagne / matin"],
          ["4) signe / singe"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit 4 mots : réponds GN ou N :"], items: [
          ["1) campagne → ......."],
          ["2) banane → ......."],
          ["3) cigogne → ......."],
          ["4) chemin → ......."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "GN", r: true }, " — 2) ", { t: "N", r: true }, " — 3) ", { t: "GN", r: true }, " — 4) ", { t: "N", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "peigne", r: true }, " — 2) ", { t: "ligne", r: true }, " — 3) ", { t: "montagne", r: true }, " — 4) ", { t: "signe", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "GN", r: true }, " — 2) ", { t: "N", r: true }, " — 3) ", { t: "GN", r: true }, " — 4) ", { t: "N", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 64 =================
    {
      n: 64, titre: "Le panier des mots en GN", titreFiche: "Le panier des mots en GN",
      objectif: "Rassembler 11 mots avec GN dans le panier aux mots.",
      supportFiche: "Panier (ou boîte), cartes-mots, tableau noir.",
      image: null,
      revision: {
        ens: ["« nager » : GN ou N ? — Et « gagner » ?"],
        app: ["R.A. : ", { t: "N", r: true }, " — ", { t: "GN", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Notre panier est vide ! Remplissons-le de mots avec GN. Objectif : 15 mots au panier ! À vous de chasser ! »"],
        app: ["Cherchent des mots avec GN, enthousiastes."],
        technique: ["Défi collectif"], support: "Panier (ou boîte)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous remplissons le panier des mots en GN et nous apprenons 3 mots nouveaux : vigne, baignoire, gagner."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez : je mets montagne dans le panier. À vous ! » Chaque élève propose un mot, l'enseignant l'écrit au tableau."],
        app: ["Proposent les mots connus et découvrent les nouveaux : vigne, baignoire, gagner."],
        technique: ["Mise en commun"], support: "Panier (ou boîte)",
      },
      analyse: {
        ens: { paras: [
          ["1) Citez 2 mots avec GN de la dernière séance."],
          ["2) Où pousse le raisin ?"],
          ["3) Où se baigne-t-on à la maison ?"],
          ["4) Que fait le premier de la course ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "oignon, ligne, signe, cigogne...", r: true }, "."],
          ["R.A. : À ", { t: "la vigne", r: true }, "."],
          ["R.A. : Dans ", { t: "la baignoire", r: true }, "."],
          ["R.A. : Il ", { t: "gagne", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Panier (ou boîte)",
      },
      synthese: {
        ens: ["Donc : notre panier a 11 mots en GN : montagne, campagne, agneau, peigne, oignon, ligne, signe, cigogne, vigne, baignoire, gagner."],
        app: ["Répètent la liste du panier en chœur, en comptant sur les doigts."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du panier plein : chaque mot bien dit va dans le panier. Objectif 15 ! Le panier déborde-t-il ?"],
        app: ["Disent chacun un mot du panier ; l'enseignant compte les points jusqu'à 15."],
        technique: ["Jeu du panier plein"], support: "Panier (ou boîte)",
      },
      evaluation: {
        ens: ["3 élèves : sortez un mot du panier et dites-le très bien, langue au palais."],
        app: ["R.A. : un des 11 mots du panier, bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "4. LE PANIER DES MOTS EN GN",
        subs: [
          { t: "A. Les mots tout seuls", paras: [[{ t: "montagne — campagne — agneau — peigne — oignon — ligne — signe — cigogne — vigne — baignoire — gagner", k: true }]] },
          { t: "B. Les mots dans une phrase", paras: [["« ", { t: "L'agneau gagne la montagne.", k: true }, " »"]] },
        ],
        retenir: ["Mon panier GN est plein : ", { t: "11 mots", k: true }, " ! Je les dis tous langue au palais."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Coche les mots qui vont dans le panier GN :"], items: [
          ["1) montagne ☐"],
          ["2) baignoire ☐"],
          ["3) cigogne ☐"],
          ["4) vigne ☐"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Barre l'intrus, celui qui n'a pas de son GN :"], items: [
          ["1) vigne / panier"],
          ["2) cigogne / chemin"],
          ["3) gagner / nager"],
          ["4) oignon / reine"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Dis ces 4 mots du panier très bien articulés :"], items: [
          ["1) vigne ....... / 1,5 pt"],
          ["2) baignoire ....... / 1,5 pt"],
          ["3) gagner ....... / 1,5 pt"],
          ["4) cigogne ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["À cocher : ", { t: "montagne, baignoire, cigogne, vigne", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Intrus à barrer : 1) ", { t: "panier", r: true }, " — 2) ", { t: "chemin", r: true }, " — 3) ", { t: "nager", r: true }, " — 4) ", { t: "reine", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque mot bien articulé (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 65 =================
    {
      n: 65, titre: "Comptine GN", titreFiche: "La comptine GN",
      objectif: "Découvrir et réciter la comptine GN avec les gestes.",
      supportFiche: "Affiche « la comptine GN », tableau noir.",
      image: { file: "s65_comptine_gn.png", w: 1100, h: 620, legende: "La comptine GN : « GN, GN, la grande montagne... »" },
      revision: {
        ens: ["Citez 4 mots du panier GN. — Et le mot de la vigne, c'est quoi ?"],
        app: ["R.A. : ", { t: "montagne, campagne, agneau, peigne...", r: true }, " — ", { t: "la vigne", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« La montagne a maintenant SA comptine ! Écoutez... » L'enseignant récite avec les gestes : les mains en pic, les doigts qui grimpent."],
        app: ["Écoutent, frappent dans les mains à la fin."],
        technique: ["Narration avec gestes"], support: "Affiche « la comptine GN »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la comptine GN. Après cette séance, vous la connaîtrez par cœur !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Suivez chaque vers avec votre doigt pendant que je récite lentement."],
        app: ["Suivent les vers des yeux et du doigt, en écoutant."],
        technique: ["Écoute du modèle"], support: "Affiche « la comptine GN »",
      },
      analyse: {
        ens: { paras: [
          ["1) Quels sont les mots avec GN de la comptine ?"],
          ["2) Qui gagne le chemin ?"],
          ["3) Quel oiseau vole au loin ?"],
          ["4) Avec quoi vais-je à la maison ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "montagne, campagne, agneau, gagne, cigogne, peigne, oignon", r: true }, "."],
          ["R.A. : ", { t: "Un agneau", r: true }, "."],
          ["R.A. : ", { t: "La cigogne", r: true }, "."],
          ["R.A. : Avec ", { t: "mon peigne, mon oignon", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « la comptine GN »",
      },
      synthese: {
        ens: ["Donc : ma comptine raconte l'agneau qui gagne la montagne, la cigogne qui vole. Je la récite avec les gestes !"],
        app: ["Répètent chaque vers après l'enseignant, puis deux vers entiers."],
        technique: ["Répétition par vers"], support: "Affiche « la comptine GN »",
      },
      application: {
        ens: ["Récitons ensemble, avec les gestes : les mains en pic, les doigts qui marchent, l'oiseau qui vole, la main qui peigne !"],
        app: ["Récitent toute la comptine en chœur avec les gestes."],
        technique: ["Récitation avec gestes"], support: "Affiche « la comptine GN »",
      },
      evaluation: {
        ens: ["3 élèves récitent les deux premiers vers, seuls."],
        app: ["R.A. : les deux vers correctement, avec le sourire."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "5. LA COMPTINE GN",
        subs: [
          { t: "A. La comptine", paras: [
            ["« ", { t: "GN, GN, la grande montagne,", k: true }, " »"],
            ["« ", { t: "GN, GN, la jolie campagne.", k: true }, " »"],
          ] },
          { t: "B. La dire avec les gestes", paras: [["Je récite ", { t: "fort", k: true }, ", avec ", { t: "le sourire", k: true }, " et les ", { t: "gestes", k: true }, " !"]] },
        ],
        retenir: ["Ma comptine : « ", { t: "GN, GN, la grande montagne", k: true }, " » — je la connais par cœur !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
          ["1) « GN, GN, la grande montagne » ....... / 2 pts"],
          ["2) « GN, GN, la jolie campagne » ....... / 2 pts"],
          ["3) Je récite sans aide ....... / 2 pts"],
          ["4) Je récite avec le sourire ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
          ["1) GN, GN, la grande ............"],
          ["2) GN, GN, la jolie ............"],
          ["3) Un ............ gagne le chemin."],
          ["4) Avec mon ............, mon oignon."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["1) Un agneau gagne le chemin. VRAI / FAUX"],
          ["2) La cigogne vole tout près. VRAI / FAUX"],
          ["3) Je gagne la maison. VRAI / FAUX"],
          ["4) La montagne est petite. VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : vers 1 (2 pts) + vers 2 (2 pts) + mémoire (2 pts) + joie (2 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "montagne", r: true }, " (1,5 pt) — 2) ", { t: "campagne", r: true }, " (1,5 pt) — 3) ", { t: "agneau", r: true }, " (1,5 pt) — 4) ", { t: "peigne", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "VRAI", r: true }, " — 2) ", { t: "FAUX", r: true }, " (au loin !) — 3) ", { t: "VRAI", r: true }, " — 4) ", { t: "FAUX", r: true }, " (grande !) (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 66 =================
    {
      n: 66, titre: "Bien articuler GN", titreFiche: "Bien articuler GN",
      objectif: "Articuler correctement le son GN (la langue au palais) et le distinguer de N au miroir.",
      supportFiche: "Miroir, cartes-mots, tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez les deux premiers vers de la comptine GN."],
        app: ["Récitent : « ", { t: "GN, GN, la grande montagne, GN, GN, la jolie campagne", r: true }, ". »"],
        technique: ["Récitation"],
      },
      miseEnSituation: {
        ens: ["« Touchez le toit de votre bouche avec la langue... Voilà la maison du son GN ! gnnn ! Aujourd'hui, notre langue apprend sa place. »"],
        app: ["Touchent le palais avec la langue et essaient : gnnn !"],
        technique: ["Découverte gestuelle"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous articulons parfaitement GN au miroir : langue au palais, son épais — et attention à ne pas le confondre avec N !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez ma bouche dans le miroir. » Pour GN : la langue monte au palais, le son est épais. Pour N : le son est fin, sans monter."],
        app: ["Observent la bouche du maître, essayent au miroir et comparent."],
        technique: ["Observation au miroir"], support: "Miroir",
      },
      analyse: {
        ens: { paras: [
          ["1) Où est la langue pour dire GN ?"],
          ["2) Le son GN est fin ou épais ?"],
          ["3) Et le son N ?"],
          ["4) Dites montagne au miroir : la langue a-t-elle monté au palais ?"],
        ] },
        app: { paras: [
          ["R.A. : Au ", { t: "palais", r: true }, " (le toit de la bouche)."],
          ["R.A. : ", { t: "Épais", r: true }, "."],
          ["R.A. : ", { t: "Fin", r: true }, ", sans monter."],
          ["R.A. : ", { t: "Oui", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Miroir",
      },
      synthese: {
        ens: ["Donc : GN = langue au palais, son épais : mon-TA-GNE. N = son fin : nuage, nage. Au miroir, je vérifie ma langue !"],
        app: ["Répètent les deux règles en chœur, mains sur la gorge pour sentir le son."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du tri : je dis un mot, vous répondez « épais » si c'est GN, « fin » si c'est N : peigne — nage — oignon — reine — signe — nuit."],
        app: ["Répondent : ", { t: "peigne → épais, nage → fin, oignon → épais, reine → fin, signe → épais, nuit → fin", r: true }, "."],
        technique: ["Jeu de tri"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : dites agneau et cigogne au miroir, langue bien au palais."],
        app: ["R.A. : les deux mots bien articulés, son GN épais."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "6. BIEN ARTICULER GN",
        subs: [
          { t: "A. La place de la langue", paras: [["« Ma langue monte au ", { t: "palais", k: true }, " : ", { t: "GNE", k: true }, " ! »"]] },
          { t: "B. GN épais / N fin", paras: [[{ t: "mon-TA-GNE", k: true }, " (épais) — ", { t: "nuage", k: true }, ", ", { t: "nage", k: true }, " (fins)"]] },
        ],
        retenir: ["Pour ", { t: "GN", k: true }, ", ma langue monte au palais et le son est ", { t: "épais", k: true }, " : montaaagne !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, dis GN avec la langue au palais. L'enseignant observe :"], items: [
          ["1) Ma langue monte au palais ....... / 2 pts"],
          ["2) Mon son GN est épais ....... / 2 pts"],
          ["3) Je ne dis pas N fin ....... / 2 pts"],
          ["4) Je répète après le maître ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète après la maîtresse, en chœur puis seul :"], items: [
          ["1) mon-TA-GNE"],
          ["2) a-GNEAU"],
          ["3) o-GNON"],
          ["4) ci-COGNE"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit 2 mots : barre celui qui n'a pas de son GN :"], items: [
          ["1) peigne / nage"],
          ["2) montagne / nuage"],
          ["3) ligne / lire"],
          ["4) cigogne / reine"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : langue au palais (2 pts) + son épais (2 pts) + pas de N fin (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec le GN bien épais (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) intrus : ", { t: "nage", r: true }, " — 2) intrus : ", { t: "nuage", r: true }, " — 3) intrus : ", { t: "lire", r: true }, " — 4) intrus : ", { t: "reine", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 67 =================
    {
      n: 67, titre: "GN — bien prononcer les mots", titreFiche: "GN — bien prononcer les mots",
      objectif: "Prononcer correctement les mots avec GN dans des phrases complètes.",
      supportFiche: "Cartes-mots du panier, tableau noir.",
      image: null,
      revision: {
        ens: ["Au miroir : dites agneau et oignon, langue bien au palais. (3 élèves)"],
        app: ["Répètent chaque mot avec le GN bien épais."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["« Jeu du guide de montagne : le guide dit les mots, les randonneurs répètent sans tomber dans le piège du N fin ! Qui ne tombera pas ? »"],
        app: ["Jouent les guides et les randonneurs par deux, avec sérieux."],
        technique: ["Jeu de rôle"], support: "Cartes-mots du panier",
      },
      presentation: {
        ens: ["Aujourd'hui, nous prononçons les mots avec GN dans de vraies phrases. Après cette séance, plus aucun piège ne marche !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez les cartes-mots du panier. » Où se cache GN : au début, au milieu ou à la fin ? Cherchons ensemble !"],
        app: ["Observent les cartes et constatent : GN est presque toujours au milieu du mot."],
        technique: ["Observation guidée"], support: "Cartes-mots du panier",
      },
      analyse: {
        ens: { paras: [
          ["1) Où est GN dans montagne ?"],
          ["2) Et dans agneau ?"],
          ["3) GN peut-il être au début d'un mot ?"],
          ["4) « L'agneau gagne la montagne. » : combien de GN ?"],
        ] },
        app: { paras: [
          ["R.A. : Au ", { t: "milieu", r: true }, " (mon-TA-GNE)."],
          ["R.A. : Au ", { t: "milieu", r: true }, " (a-GNEAU)."],
          ["R.A. : Très ", { t: "rarement", r: true }, "."],
          ["R.A. : ", { t: "3", r: true }, " (agneau, gagne, montagne)."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-mots du panier",
      },
      synthese: {
        ens: ["Donc : GN se cache presque toujours au milieu des mots. Ma phrase-test : « L'agneau gagne la montagne. » 3 GN, bien épais !"],
        app: ["Répètent la phrase-test en chœur, lentement puis vite."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["En binômes : le guide dit une phrase, le randonneur répète sans piège : « L'agneau gagne la montagne. » « La cigogne vole au loin. »"],
        app: ["Jouent guide et randonneur, puis échangent les rôles."],
        technique: ["Répétition en binômes"], support: "Cartes-mots du panier",
      },
      evaluation: {
        ens: ["3 élèves : répétez la phrase-test sans vous tromper."],
        app: ["R.A. : « ", { t: "L'agneau gagne la montagne", r: true }, ". » avec les 3 GN bien épais."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "7. GN — BIEN PRONONCER LES MOTS",
        subs: [
          { t: "A. Où est GN ?", paras: [[{ t: "Au milieu", k: true }, " : mon-TA-GNE — ci-COGNE. Parfois ", { t: "à la fin", k: true }, " : « il gagne »."]] },
          { t: "B. La phrase-test", paras: [["« ", { t: "L'agneau gagne la montagne.", k: true }, " » (", { t: "3 GN", k: true }, " !)"]] },
        ],
        retenir: ["GN se cache au ", { t: "milieu", k: true }, " des mots. Je répète : « ", { t: "L'agneau gagne la montagne", k: true }, " ! »"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Répète chaque mot seul, très bien articulé (l'enseignant valide) :"], items: [
          ["1) montagne ....... / 2 pts"],
          ["2) agneau ....... / 2 pts"],
          ["3) peigne ....... / 2 pts"],
          ["4) oignon ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète chaque phrase sans te tromper (on écoute les GN) :"], items: [
          ["1) « L'agneau gagne la montagne. »"],
          ["2) « La cigogne vole au loin. »"],
          ["3) « Maman coupe un oignon. »"],
          ["4) « Je gagne avec mon peigne ! »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Dictée : la maîtresse dit 4 mots, écris-les sur ton ardoise :"], items: [
          ["1) campagne"],
          ["2) cigogne"],
          ["3) peigne"],
          ["4) montagne"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : chaque mot bien articulé = 2 pts (total 8 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec les GN bien épais (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "campagne", r: true }, " — 2) ", { t: "cigogne", r: true }, " — 3) ", { t: "peigne", r: true }, " — 4) ", { t: "montagne", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 68 =================
    {
      n: 68, titre: "Comptine GN — prononciation", titreFiche: "Comptine GN — bien prononcer",
      objectif: "Réciter la comptine GN en articulant tous les GN, sans les confondre avec N.",
      supportFiche: "Affiche « la comptine GN », miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Répétez la phrase-test : « L'agneau gagne la montagne. » (3 élèves)"],
        app: ["Répètent la phrase avec les 3 GN bien épais."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["« Aujourd'hui, la comptine GN devient un concert de montagne ! Chaque GN doit être épais comme un roc. Et attention aux pièges... »"],
        app: ["Écoutent, prêts à déjouer les pièges."],
        technique: ["Narration"], support: "Affiche « la comptine GN »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous récitons la comptine GN à la perfection. On lève la main à chaque GN, et on ne se laisse pas piéger !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite très lentement : levez la main à chaque GN entendu !"],
        app: ["Écoutent et lèvent la main aux mots montagne, campagne, agneau, gagne, cigogne, peigne, oignon."],
        technique: ["Écoute active"], support: "Affiche « la comptine GN »",
      },
      analyse: {
        ens: { paras: [
          ["1) « chemin » : GN ou N ?"],
          ["2) « gagne » : entends-tu GN ?"],
          ["3) « vole » : et là, GN ?"],
          ["4) « agneau » : où se cache GN ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "N tout seul", r: true }, " (chi-MIN), pas GN !"],
          ["R.A. : Oui : ", { t: "ga-GNE", r: true }, "."],
          ["R.A. : ", { t: "Pas de GN", r: true }, " du tout."],
          ["R.A. : Au milieu : ", { t: "a-GNEAU", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « la comptine GN »",
      },
      synthese: {
        ens: ["Donc : montagne, campagne, agneau, gagne, cigogne, peigne, oignon = GN. Mais chemin, loin, vole, bon = pas GN ! Je reste vigilant."],
        app: ["Répètent les deux listes en chœur, main levée à chaque GN."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Concert par groupes : groupe 1 les vers 1-2, groupe 2 les vers 3-4, tous ensemble les vers 5-6, main levée à chaque GN !"],
        app: ["Récitent la comptine en groupes, puis tous ensemble, sans oublier un seul GN."],
        technique: ["Concert par groupes"], support: "Affiche « la comptine GN »",
      },
      evaluation: {
        ens: ["3 élèves : récite un vers seul, les GN bien épais."],
        app: ["R.A. : le vers correctement, GN épais, pas de N fin."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "8. COMPTINE GN — PRONONCIATION",
        subs: [
          { t: "A. Les GN de la comptine", paras: [[{ t: "montagne — campagne — agneau — gagne — cigogne — peigne — oignon", k: true }]] },
          { t: "B. Attention !", paras: [["« ", { t: "chemin", k: true }, " » finit par ", { t: "N", k: true }, " tout seul, et « ", { t: "vole", k: true }, " » n'a pas de GN !"]] },
        ],
        retenir: ["Dans ma comptine, ", { t: "7 mots avec GN", k: true }, ". « ", { t: "chemin", k: true }, " », lui, finit par N !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite un vers de la comptine. La maîtresse observe :"], items: [
          ["1) Mes GN sont épais ....... / 2 pts"],
          ["2) Je lève la main à chaque GN ....... / 2 pts"],
          ["3) Je garde le rythme ....... / 2 pts"],
          ["4) Je connais le vers par cœur ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure le mot qui contient le son GN :"], items: [
          ["1) montagne / chemin"],
          ["2) gagne / vole"],
          ["3) agneau / loin"],
          ["4) campagne / bon"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) montagne → GN / N"],
          ["2) chemin → GN / N"],
          ["3) campagne → GN / N"],
          ["4) oignon → GN / N"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : GN épais (2 pts) + main levée (2 pts) + rythme (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "montagne", r: true }, " — 2) ", { t: "gagne", r: true }, " — 3) ", { t: "agneau", r: true }, " — 4) ", { t: "campagne", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "GN", r: true }, " — 2) ", { t: "N", r: true }, " — 3) ", { t: "GN", r: true }, " — 4) ", { t: "GN", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 69 =================
    {
      n: 69, titre: "Répétition rythmée GN", titreFiche: "Répétition rythmée GN",
      objectif: "Répéter des mots et des phrases avec GN en respectant le rythme (1 syllabe = 1 frappe).",
      supportFiche: "Tambourin (ou mains), tableau noir.",
      image: null,
      revision: {
        ens: ["Concert express : récitez les vers 1 et 2 de la comptine, les GN bien épais."],
        app: ["Récitent : « ", { t: "GN, GN, la grande montagne, GN, GN, la jolie campagne", r: true }, ". »"],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["« Le tambourin revient ! 1 syllabe = 1 frappe : mon-tagne... 2 frappes ! a-gneau... 2 frappes ! À vos mains ! »"],
        app: ["Frappent en même temps qu'ils répètent les mots."],
        technique: ["Jeu rythmique"], support: "Tambourin (ou mains)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous frappons le rythme des mots avec GN : chaque syllabe tombe juste, comme un pas de randonneur sur le sentier !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez et écoutez. » L'enseignant frappe montagne (2 frappes) et agneau (2 frappes) ; les élèves comptent les frappes."],
        app: ["Comptent à voix haute : 1, 2 pour chaque mot."],
        technique: ["Écoute du modèle"], support: "Tambourin (ou mains)",
      },
      analyse: {
        ens: { paras: [
          ["1) montagne : combien de frappes ?"],
          ["2) agneau : combien de frappes ?"],
          ["3) un oignon : combien de frappes ?"],
          ["4) la cigogne : combien de frappes ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "2", r: true }, " (mon-tagne)."],
          ["R.A. : ", { t: "2", r: true }, " (a-gneau)."],
          ["R.A. : ", { t: "3", r: true }, " (un-oi-gnon)."],
          ["R.A. : ", { t: "3", r: true }, " (la-ci-cogne)."],
        ] },
        technique: ["Question / réponse"], support: "Tambourin (ou mains)",
      },
      synthese: {
        ens: ["Donc : 1 syllabe = 1 frappe : montagne 2, agneau 2, un oignon 3, la cigogne 3. Le GN reste épais à chaque frappe !"],
        app: ["Répètent la règle en chœur, puis frappent les 4 mots ensemble."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du chef d'orchestre : un élève frappe le rythme d'un mot GN, la classe dit le mot en même temps !"],
        app: ["Frappent et disent les mots en suivant le chef, rythme régulier."],
        technique: ["Chef d'orchestre"], support: "Tambourin (ou mains)",
      },
      evaluation: {
        ens: ["3 élèves : frappez et dites « la campagne » avec le bon nombre de frappes."],
        app: ["R.A. : ", { t: "3 frappes", r: true }, " (la-cam-pagne), mot bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "9. RÉPÉTITION RYTHMÉE GN",
        subs: [
          { t: "A. La règle d'or", paras: [[{ t: "1 syllabe", k: true }, " = ", { t: "1 frappe", k: true }]] },
          { t: "B. Frappe et dis", paras: [[{ t: "montagne", k: true }, " (2) — ", { t: "un oignon", k: true }, " (3) — ", { t: "la cigogne", k: true }, " (3)"]] },
        ],
        retenir: ["Je frappe en même temps que je dis : ", { t: "mon-tagne : 1, 2", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Frappe et dis chaque mot, au bon rythme (l'enseignant valide) :"], items: [
          ["1) montagne ....... / 2 pts"],
          ["2) agneau ....... / 2 pts"],
          ["3) un oignon ....... / 2 pts"],
          ["4) la cigogne ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Compte les frappes de chaque mot :"], items: [
          ["1) montagne → ......."],
          ["2) agneau → ......."],
          ["3) un oignon → ......."],
          ["4) la campagne → ......."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Frappe chaque phrase en rythme, sans te presser :"], items: [
          ["1) « L'agneau gagne. »"],
          ["2) « La cigogne vole. »"],
          ["3) « Un oignon dans la campagne. »"],
          ["4) « L'agneau gagne la montagne. »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : mot dit avec le bon rythme = 2 pts (total 8 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "2", r: true }, " (mon-tagne) — 2) ", { t: "2", r: true }, " (a-gneau) — 3) ", { t: "3", r: true }, " (un-oi-gnon) — 4) ", { t: "3", r: true }, " (la-cam-pagne)."]] },
        { titre: "Exercice 3", lines: [["Rythme régulier, chaque syllabe = 1 frappe (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 70 =================
    {
      n: 70, titre: "Performance finale : le son GN", titreFiche: "Performance finale : le son GN",
      objectif: "Montrer tout ce que je sais faire avec le son GN.",
      supportFiche: "Affiches du thème, cartes-mots, trophée du champion.",
      image: { file: "s70_performance_gn.png", w: 1100, h: 520, legende: "Bravo ! Je suis champion du son GN !" },
      revision: {
        ens: ["Répétition générale : récitez toute la comptine GN avec les gestes !"],
        app: ["Récitent la comptine complète en chœur, avec les gestes."],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["« Aujourd'hui : la grande performance du son GN ! Trois épreuves, et le trophée du champion pour les meilleurs ! Prêts ? »"],
        app: ["Crient : « Prêts ! », fiers et motivés."],
        technique: ["Narration"], support: "Trophée du champion",
      },
      presentation: {
        ens: ["Trois épreuves : prononcer les mots GN, réciter la comptine, gagner le jeu GN ou N. Écoutez bien le barème de chaque épreuve."],
        app: ["Écoutent le déroulé des épreuves."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez les affiches une dernière fois. » Repassons ensemble : les 11 mots du panier, GN ou N, la comptine, le rythme."],
        app: ["Récapitulent en chœur : les mots, le piège GN/N, la comptine."],
        technique: ["Récapitulation"], support: "Affiches du thème",
      },
      analyse: {
        ens: { paras: [
          ["1) Citez 3 mots avec GN."],
          ["2) « nager » : GN ou N ?"],
          ["3) Récitez le début de la comptine."],
          ["4) Combien de frappes dans « la campagne » ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "montagne, agneau, peigne, oignon, cigogne...", r: true }, "."],
          ["R.A. : ", { t: "N", r: true }, " tout seul."],
          ["R.A. : « ", { t: "GN, GN, la grande montagne...", r: true }, " »"],
          ["R.A. : ", { t: "3", r: true }, " (la-cam-pagne)."],
        ] },
        technique: ["Question / réponse"], support: "Affiches du thème",
      },
      synthese: {
        ens: ["Donc : je repère GN, je le dis langue au palais, je ne confonds pas avec N, et je frappe le rythme. Je suis champion du son GN !"],
        app: ["Répètent le défi : « Je suis champion du son GN ! »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Répétition générale par binômes : mots + comptine + jeu GN ou N, sans aide."],
        app: ["Répètent les trois épreuves en binômes, prêts pour la performance."],
        technique: ["Répétition en binômes"], support: "Affiches du thème",
      },
      evaluation: {
        ens: ["L'enseignant fait passer les 3 épreuves et note sur 20 : /8 + /6 + /6."],
        app: ["Passent les épreuves l'un après l'autre, devant la classe."],
        technique: ["Performance individuelle"],
      },
      lecon: {
        titre: "10. LE SON GN : BILAN",
        subs: [
          { t: "A. Mes mots GN", paras: [[{ t: "montagne — campagne — agneau — peigne — oignon — ligne — signe — cigogne — vigne — baignoire — gagner", k: true }]] },
          { t: "B. Les règles gagnantes", paras: [
            ["GN : la langue au ", { t: "palais", k: true }, ", le son ", { t: "épais", k: true }, "."],
            [{ t: "N", k: true }, " tout seul : son ", { t: "fin", k: true }, " (nuage, nage, chemin)."],
          ] },
        ],
        retenir: ["Je connais mes mots en GN et mes règles : ", { t: "je suis champion du son GN !", k: true }],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 — Prononce 3 mots du panier GN, très bien articulés :"], items: [
          ["1) ............ / 1,5 pt"],
          ["2) ............ / 1,5 pt"],
          ["3) ............ / 1 pt"],
          ["4) Je parle fort et clairement ....... / 4 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 — Récite un couplet de la comptine GN :"], items: [
          ["1) Mes GN sont épais ....... / 2 pts"],
          ["2) Je déjoue les pièges (chemin, gagne) ....... / 2 pts"],
          ["3) Je connais le couplet par cœur ....... / 2 pts"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 — GN ou N ? + le rythme :"], items: [
          ["1) La maîtresse dit 2 mots : GN ou N ....... / 3 pts"],
          ["2) Frappe « la campagne » au bon rythme ....... / 3 pts"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Épreuve 1 (8 pts) : 3 mots (1,5 + 1,5 + 1) + clarté (4) — ex. : ", { t: "montagne, agneau, cigogne", r: true }, "."]] },
        { titre: "Exercice 2", lines: [["Épreuve 2 (6 pts) : GN épais (2 pts) + pièges déjoués (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 3", lines: [["Épreuve 3 (6 pts) : réponses GN/N correctes (3 pts) + rythme juste (3 pts). Bravo, le trophée GN !"]] },
      ],
    },
  ],
};

module.exports = { theme7 };
