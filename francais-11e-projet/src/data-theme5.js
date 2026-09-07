// ============================================================
// data-theme5.js — THÈME 5 : LE SON U — NOUVEAUX MOTS (41-50)
// Sous-discipline : Phonétique — titres repris du manuel
// existant (coquille « nouveau mots » corrigée), contenu
// rédigé d'après la FRA officielle (« repérer les mots
// contenant le son U », « prononcer correctement le son U »),
// gabarit du Thème 4.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme5 = {
  numero: 5,
  nom: "Le son U — nouveaux mots",
  sousDiscipline: "Phonétique",
  notions: "SON U — JUPE — MUR — PLUME — FUMÉE — BUREAU — U ou OU — ROUE — LOUP — BONJOUR — SYLLABE — RYTHME",
  competences: [
    "Repérer le son U dans de nouveaux mots (jupe, mur, plume, fumée, bureau).",
    "Repérer le son U dans les mots de la classe (bureau, un cahier, une gomme, du papier).",
    "Distinguer le son U du son OU (rue/roue, du/doux, bonjour).",
    "Prononcer correctement le son U (lèvres rondes).",
    "Réciter une comptine en articulant le son U.",
    "Répéter des mots et des phrases en respectant le rythme.",
  ],
  seances: [
    // ================= SÉANCE 41 =================
    {
      n: 41, titre: "Le son U — nouveaux mots", titreFiche: "Le son U — de nouveaux mots",
      objectif: "Repérer et prononcer le son U dans de nouveaux mots (jupe, mur, plume, fumée).",
      supportFiche: "Image « nouveaux mots avec U », miroir, tableau noir.",
      image: { file: "s41_son_u_nouveaux.png", w: 1100, h: 560, legende: "De nouveaux mots avec U : la jupe, le mur, la plume, la fumée." },
      revision: {
        ens: ["Le son OUI, c'est quelle bouche ? Donnez 2 mots avec OUI. — Et 2 mots avec U du thème passé ?"],
        app: ["R.A. : Ronde ", { t: "puis elle sourit", r: true }, ". — ", { t: "oui, huit, pluie, fruit, nuit", r: true }, ". — ", { t: "lune, rue, salut, tortue", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image de la jupe) Qu'est-ce que c'est ? Une jupe ! Écoutez bien : ju-UU-pe... j'entends un son que vous connaissez !"],
        app: ["Écoutent et proposent : « le son U ! »"],
        technique: ["Question ouverte"], support: "Image « nouveaux mots avec U »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous retrouvons le son U dans de nouveaux mots. Après cette séance, vous le repérerez dans plein de mots nouveaux !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Nommez dans votre tête chaque dessin : que voyez-vous ?"],
        app: ["Observent silencieusement les quatre dessins (jupe, mur, plume, fumée)."],
        technique: ["Observation guidée"], support: "Image « nouveaux mots avec U »",
      },
      analyse: {
        ens: { paras: [
          ["1) Qu'est-ce que les filles portent à la taille ?"],
          ["2) Qu'est-ce qui est construit en briques autour de la cour ?"],
          ["3) Avec quoi écrit-on à la plume ?"],
          ["4) Quel son entend-on dans : jupe ? mur ? plume ? fumée ?"],
        ] },
        app: { paras: [
          ["R.A. : Une ", { t: "jupe", r: true }, "."],
          ["R.A. : Un ", { t: "mur", r: true }, "."],
          ["R.A. : Une ", { t: "plume", r: true }, "."],
          ["R.A. : Le son ", { t: "U", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « nouveaux mots avec U »",
      },
      synthese: {
        ens: ["Donc : le son U s'entend aussi dans de nouveaux mots : jupe, mur, plume, fumée. Mes lèvres sont rondes : uuuu ! Répétez !"],
        app: ["Répètent en chœur : uuuu — jupe — mur — plume — fumée, lèvres rondes."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis des mots. Si vous entendez le son U, vous levez la main : jupe — riz — mur — lune — fumée — huit."],
        app: ["Lèvent la main pour jupe, mur, fumée, lune ; ne lèvent pas pour riz, huit."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : donnez un mot de la leçon avec U et dites-le très bien, lèvres rondes."],
        app: ["R.A. : ", { t: "jupe, mur, plume ou fumée", r: true }, ", bien prononcé."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON U : DE NOUVEAUX MOTS",
        subs: [
          { t: "A. Rappel", paras: [["Le son ", { t: "U", k: true }, " : mes lèvres sont ", { t: "rondes", k: true }, " : ", { t: "uuuu", k: true }, " !"]] },
          { t: "B. De nouveaux mots", paras: [[{ t: "la jupe", k: true }, " — ", { t: "le mur", k: true }, " — ", { t: "la plume", k: true }, " — ", { t: "la fumée", k: true }]] },
        ],
        retenir: ["Le son ", { t: "U", k: true }, " se cache aussi dans : ", { t: "jupe, mur, plume, fumée", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son U :"], items: [
          ["jupe riz"],
          ["mur pluie"],
          ["fumée tapis"],
          ["plume huit"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque phrase avec jupe, mur, plume ou fumée :"], items: [
          ["a) Soa porte une jolie ............"],
          ["b) Le chat grimpe sur le ............"],
          ["c) J'écris avec une ............"],
          ["d) La ............ monte de la cheminée."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son que tu entends :"], items: [
          ["1) mur → I / U / OUI"],
          ["2) huit → I / U / OUI"],
          ["3) plume → I / U / OUI"],
          ["4) tapis → I / U / OUI"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "jupe, mur, fumée, plume", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "jupe", r: true }, " (1,5 pt) — b) ", { t: "mur", r: true }, " (1,5 pt) — c) ", { t: "plume", r: true }, " (1,5 pt) — d) ", { t: "fumée", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "U", r: true }, " — 2) ", { t: "OUI", r: true }, " — 3) ", { t: "U", r: true }, " — 4) ", { t: "I", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 42 =================
    {
      n: 42, titre: "U dans les mots de la classe", titreFiche: "Le son U dans les mots de la classe",
      objectif: "Repérer le son U dans les mots usuels de la classe (bureau, un, une, du).",
      supportFiche: "Image « dans ma classe, j'entends U », objets réels de la classe, tableau noir.",
      image: { file: "s42_classe_u.png", w: 1100, h: 560, legende: "Dans ma classe, j'entends U : le bureau, un cahier, une gomme, du papier." },
      revision: {
        ens: ["Donnez les 4 nouveaux mots avec U de la dernière séance. — Comment fait la bouche ?"],
        app: ["R.A. : ", { t: "jupe, mur, plume, fumée", r: true }, " — lèvres ", { t: "rondes", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Devinez : il y a des mots avec U cachés dans notre classe, juste devant vous ! Le mot du professeur, par exemple : bu-reau !"],
        app: ["Écoutent et cherchent du regard autour d'eux."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous retrouvons le son U dans les mots de notre classe. Après cette séance, vous l'entendrez partout autour de vous !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que voyez-vous ? Tout cela, c'est le matériel de notre classe !"],
        app: ["Observent silencieusement les objets (bureau, cahier, gomme, papier)."],
        technique: ["Observation guidée"], support: "Image « dans ma classe »",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment s'appelle la table du maître ou de la maîtresse ?"],
          ["2) Comment demande-t-on un cahier, poliment et en français ?"],
          ["3) Et une gomme ?"],
          ["4) Où entend-on U dans ces mots ?"],
        ] },
        app: { paras: [
          ["R.A. : Le ", { t: "bureau", r: true }, "."],
          ["R.A. : « ", { t: "Un cahier", r: true }, ", s'il vous plaît. »"],
          ["R.A. : « ", { t: "Une gomme", r: true }, ", s'il vous plaît. »"],
          ["R.A. : Dans ", { t: "bu-reau, un, une, du", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « dans ma classe »",
      },
      synthese: {
        ens: ["Donc : dans la classe, j'entends U dans bureau, un cahier, une gomme, du papier. Le son U vit aussi dans les petits mots : un, une, du !"],
        app: ["Répètent en chœur : bureau — un — une — du, lèvres rondes."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du petit marchand de la classe : un élève est le gardien du matériel. Les autres demandent : « Un cahier, s'il te plaît ! », « Une gomme, s'il te plaît ! ». Le gardien donne l'objet si la phrase a bien un, une ou du."],
        app: ["Demandent le matériel avec les mots à U bien prononcés."],
        technique: ["Jeu de rôle"], support: "Objets de la classe",
      },
      evaluation: {
        ens: ["La maîtresse montre 3 objets de la classe. Chaque fois, faites une phrase avec un, une ou du."],
        app: ["R.A. : phrases du type ", { t: "« Un cahier », « une gomme », « du papier »", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE SON U DANS LES MOTS DE LA CLASSE",
        subs: [
          { t: "A. Les objets", paras: [[{ t: "le bureau", k: true }, " — ", { t: "le mur", k: true }, " de la classe"]] },
          { t: "B. Les petits mots", paras: [[{ t: "un", k: true }, " cahier — ", { t: "une", k: true }, " gomme — ", { t: "du", k: true }, " papier"]] },
        ],
        retenir: ["J'entends ", { t: "U", k: true }, " dans : ", { t: "bureau", k: true }, ", ", { t: "un", k: true }, ", ", { t: "une", k: true }, ", ", { t: "du", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où l'on entend le son U :"], items: [
          ["bureau tableau"],
          ["une le"],
          ["du la"],
          ["gomme cahier"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec un, une ou du :"], items: [
          ["a) « ............ papier, s'il te plaît ! »"],
          ["b) « ............ gomme, s'il vous plaît ! »"],
          ["c) « ............ cahier, s'il te plaît ! »"],
          ["d) « Le maître est à son ............ » (la table)"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu oral : demande poliment 4 objets de la classe. Chaque phrase doit avoir un, une ou du :"], items: [
          ["Objet 1 : « ............ » ....... / 1,5 pt"],
          ["Objet 2 : « ............ » ....... / 1,5 pt"],
          ["Objet 3 : « ............ » ....... / 1,5 pt"],
          ["Objet 4 : « ............ » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "bureau, une, du", r: true }, " (2 pts) et ", { t: "gomme", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "Du", r: true }, " (1,5 pt) — b) ", { t: "Une", r: true }, " (1,5 pt) — c) ", { t: "Un", r: true }, " (1,5 pt) — d) ", { t: "bureau", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque phrase polie avec un / une / du correct = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 43 =================
    {
      n: 43, titre: "U ou OU ? je fais la différence", titreFiche: "Le son U ou le son OU ?",
      objectif: "Distinguer le son U (rue) du son OU (roue, bonjour) dans des mots connus.",
      supportFiche: "Image « U ou OU ? », miroir, tableau noir.",
      image: { file: "s43_u_ou_ou.png", w: 1100, h: 560, legende: "U : rue, jupe, du. OU : roue, loup, bonjour !" },
      revision: {
        ens: ["Demandez le matériel : un cahier, une gomme, du papier ! (3 élèves)"],
        app: ["Répètent les 3 phrases avec ", { t: "un, une, du", r: true }, " bien prononcés."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Écoutez bien : rrrue... rrroue... Est-ce le même son ? Non ! Un son est court (U), l'autre est long (OU). Et « bonjour » ? Il cache le OU !"],
        app: ["Écoutent et constatent les deux sons différents."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la différence entre le son U et le son OU. Après cette séance, vous ne les mélangerez plus !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Comparez les deux panneaux : quels mots du côté U ? Quels mots du côté OU ?"],
        app: ["Observent silencieusement les deux panneaux et leurs mots."],
        technique: ["Observation guidée"], support: "Image « U ou OU ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « rue », on entend U ou OU ?"],
          ["2) Dans « roue », on entend quel son ?"],
          ["3) Dans « bonjour », on entend U ou OU ?"],
          ["4) Le son OU est-il court ou long ?"],
        ] },
        app: { paras: [
          ["R.A. : On entend ", { t: "U", r: true }, ", le son court."],
          ["R.A. : On entend ", { t: "OU", r: true }, ", le son long."],
          ["R.A. : On entend ", { t: "OU", r: true }, "."],
          ["R.A. : Il est ", { t: "long", r: true }, " : oooou."],
        ] },
        technique: ["Question / réponse"], support: "Image « U ou OU ? »",
      },
      synthese: {
        ens: ["Donc : deux sons à ne pas confondre — U, court, lèvres très rondes (rue, jupe, du) ; OU, long (roue, loup, bonjour). J'écoute la longueur du son !"],
        app: ["Répètent en chœur : rue-roue — du-doux — bu-bonjour, en exagérant."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des deux coins : coin U et coin OU. Je dis un mot, chacun court au bon coin : rue — roue — jupe — loup — du — bonjour — fumée — doux."],
        app: ["Se déplacent dans le bon coin à chaque mot."],
        technique: ["Jeu des deux coins"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["« salut » : U ou OU ? — « bonjour » : U ou OU ? — « une » : U ou OU ?"],
        app: ["R.A. : ", { t: "U — OU — U", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. U OU OU ? JE FAIS LA DIFFÉRENCE",
        subs: [
          { t: "A. Le son U (court)", paras: [["Lèvres très rondes, son court : ", { t: "rue, jupe, du, une, lune", k: true }, "."]] },
          { t: "B. Le son OU (long)", paras: [["Son long comme dans « ", { t: "Bonjour", k: true }, " » : ", { t: "roue, loup, doux, bonjour", k: true }, "."]] },
        ],
        retenir: [{ t: "U", k: true }, " = court (rue) — ", { t: "OU", k: true }, " = long (roue, bonjour). J'écoute la longueur !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["La maîtresse dit un mot. Fais une croix (X) sous le son entendu :"], items: [
          ["1) roue → U / OU"],
          ["2) rue → U / OU"],
          ["3) bonjour → U / OU"],
          ["4) jupe → U / OU"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Range chaque mot dans le bon panier (U ou OU) :"], items: [
          ["1) loup → U / OU"],
          ["2) du → U / OU"],
          ["3) fumée → U / OU"],
          ["4) doux → U / OU"],
          ["5) bureau → U / OU"],
          ["6) cour → U / OU"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Répète chaque paire sans confondre (l'enseignant valide) :"], items: [
          ["1) rue — roue ....... / 2 pts"],
          ["2) du — doux ....... / 2 pts"],
          ["3) « Salut, bonjour ! » ....... / 2 pts"],
          ["Les deux sons sont bien distincts à chaque fois."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "OU", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "OU", r: true }, " — 4) ", { t: "U", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "OU", r: true }, " — 2) ", { t: "U", r: true }, " — 3) ", { t: "U", r: true }, " — 4) ", { t: "OU", r: true }, " — 5) ", { t: "U", r: true }, " — 6) ", { t: "OU", r: true }, " (1 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque paire sans confusion = 2 pts (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 44 =================
    {
      n: 44, titre: "U dans des mots connus", titreFiche: "Le son U dans les mots connus",
      objectif: "Retrouver tous les mots avec U appris depuis le début de l'année.",
      supportFiche: "Image « U ou OU ? », panier-images, tableau noir.",
      image: null,
      revision: {
        ens: ["« salut » : U ou OU ? — « roue » ? — « bureau » ? — « cour » ?"],
        app: ["R.A. : ", { t: "U — OU — U — OU", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Depuis le début de l'année, vous avez collectionné plein de mots avec U ! Aujourd'hui, on les réunit tous dans le grand panier des mots à U."],
        app: ["Écoutent, curieux de compter leurs mots."],
        technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous retrouvons TOUS les mots avec U que nous connaissons. Après cette séance, votre panier de mots sera très plein !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant affiche ou dessine les images-mots connues (lune, rue, tortue, tulipe, musique, jupe, mur, plume, fumée, bureau). Les élèves regardent en silence."],
        app: ["Observent silencieusement le stock d'images-mots."],
        technique: ["Observation guidée"], support: "Images-mots connues",
      },
      analyse: {
        ens: { paras: [
          ["1) Donnez un mot avec U vu dans le thème des salutations."],
          ["2) Donnez un mot avec U du thème I et U."],
          ["3) Donnez un nouveau mot avec U de cette semaine."],
          ["4) Quel est le mot le plus long de votre panier ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "salut", r: true }, " (accepter tout mot correct)."],
          ["R.A. : ", { t: "lune, rue, tortue, tulipe, musique", r: true }, "..."],
          ["R.A. : ", { t: "jupe, mur, plume, fumée, bureau", r: true }, "..."],
          ["R.A. : ", { t: "bureau", r: true }, " ou ", { t: "musique", r: true }, " (réponse argumentée acceptée)."],
        ] },
        technique: ["Question / réponse"], support: "Images-mots connues",
      },
      synthese: {
        ens: ["Donc : notre panier contient au moins dix mots avec U : lune, rue, salut, tortue, tulipe, musique, jupe, mur, plume, fumée, bureau. Bravo !"],
        app: ["Répètent le panier complet en chœur, bien articulé."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du panier plein : chaque élève dit un mot avec U ; s'il est nouveau et correct, on le met au panier (au tableau). Si un mot est répété, on le signale : « déjà dans le panier ! ». Objectif : 15 mots."],
        app: ["Proposent leurs mots ; la classe valide et compte."],
        technique: ["Jeu de stock"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Chacun écrit (au tableau ou sur ardoise) 2 mots avec U de sa mémoire, lèvres rondes en les disant."],
        app: ["R.A. : deux mots corrects avec U, bien prononcés."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MON PANIER DE MOTS À U",
        subs: [
          { t: "A. Les mots du début de l'année", paras: [[{ t: "lune", k: true }, " — ", { t: "rue", k: true }, " — ", { t: "salut", k: true }, " — ", { t: "tortue", k: true }, " — ", { t: "tulipe", k: true }, " — ", { t: "musique", k: true }]] },
          { t: "B. Les nouveaux mots", paras: [[{ t: "jupe", k: true }, " — ", { t: "mur", k: true }, " — ", { t: "plume", k: true }, " — ", { t: "fumée", k: true }, " — ", { t: "bureau", k: true }]] },
        ],
        retenir: ["Mon panier de mots à ", { t: "U", k: true }, " est plein : 11 mots et plus !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Coche les mots qui vont dans le panier des mots à U :"], items: [
          ["lune ☐ riz ☐"],
          ["bureau ☐ tapis ☐"],
          ["fumée ☐ huit ☐"],
          ["tortue ☐ souris ☐"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Trouve l'intrus (le mot sans U) :"], items: [
          ["1) lune — rue — riz — jupe"],
          ["2) mur — muraille — midi — fumée"],
          ["3) tulipe — tortue — train — musique"],
          ["4) bureau — un — bonjour — une"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu oral : 4 élèves ajoutent chacun un mot nouveau (non dit en classe) au panier des mots à U :"], items: [
          ["Élève 1 : « ............ » ....... / 1,5 pt"],
          ["Élève 2 : « ............ » ....... / 1,5 pt"],
          ["Élève 3 : « ............ » ....... / 1,5 pt"],
          ["Élève 4 : « ............ » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots cochés : ", { t: "lune, bureau, fumée, tortue", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) intrus : ", { t: "riz", r: true }, " — 2) intrus : ", { t: "midi", r: true }, " — 3) intrus : ", { t: "train", r: true }, " — 4) intrus : ", { t: "bonjour", r: true }, " (son OU !) (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque mot nouveau et correct avec U = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 45 =================
    {
      n: 45, titre: "Comptine U", titreFiche: "La comptine U",
      objectif: "Écouter et mémoriser une comptine pleine de sons U.",
      supportFiche: "Affiche « ma comptine U », tableau noir.",
      image: { file: "s45_comptine_u.png", w: 1100, h: 620, legende: "Ma comptine U : la jupe de ma poupée, la plume envolée..." },
      revision: {
        ens: ["Donnez 3 mots de votre panier à U. — « roue » : U ou OU ?"],
        app: ["R.A. : mots du panier — ", { t: "OU", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["La plume de l'enseignant s'est envolée ! Elle vole au-dessus du toit... Aujourd'hui, notre comptine parle de la plume envolée !"],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la comptine U. Après cette séance, vous connaîtrez tous ses mots à U."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite par l'enseignant, sans lire."],
        app: ["Écoutent la comptine réciter deux fois."],
        technique: ["Écoute du modèle"], support: "Affiche de la comptine",
      },
      analyse: {
        ens: { paras: [
          ["1) Sur qui est la jupe de la comptine ?"],
          ["2) Qu'est-ce qui est envolé ?"],
          ["3) Que font la bulle et la fumée ?"],
          ["4) Citez trois mots de la comptine avec le son U."],
        ] },
        app: { paras: [
          ["R.A. : De ma ", { t: "poupée", r: true }, "."],
          ["R.A. : La ", { t: "plume", r: true }, "."],
          ["R.A. : Elles montent au-dessus du ", { t: "toit carré", r: true }, "."],
          ["R.A. : ", { t: "jupe, poupée, plume, bulle, fumée, du, carré, lundi, répète", r: true }, " (trois au moins)."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de la comptine",
      },
      synthese: {
        ens: ["Donc : dans notre comptine, plein de mots ont le son U. On les dit lèvres rondes : uuuu !"],
        app: ["Répètent les mots à U de la comptine en chœur, bien articulés."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Récitation par vers : je dis un vers, vous le répétez tous ensemble. Puis par demi-classe, puis quelques élèves seuls."],
        app: ["Répètent chaque vers en chœur, puis par groupe, puis individuellement."],
        technique: ["Répétition par vers"], support: "Affiche de la comptine",
      },
      evaluation: {
        ens: ["2 ou 3 élèves récitent les deux premiers vers seuls. On écoute les sons U."],
        app: ["Récitent ; la classe valide les U bien prononcés."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MA COMPTINE U",
        subs: [
          { t: "A. La comptine", paras: [
            [{ t: "U, U", k: true }, ", la ", { t: "jupe", k: true }, " de ma ", { t: "poupée", k: true }, ","],
            ["U, U, la ", { t: "plume", k: true }, " envolée."],
            ["Une ", { t: "bulle", k: true }, " et de la ", { t: "fumée", k: true }],
            ["montent au-", { t: "du", k: true }, "sus du toit carré."],
            [{ t: "Lundi", k: true }, ", mardi, je répète :"],
            ["U, ma bouche est ronde, c'est parfait !"],
          ] },
        ],
        retenir: ["Les mots à ", { t: "U", k: true }, " de la comptine : ", { t: "jupe, poupée, plume, bulle, fumée, du, lundi", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
          ["Le son U bien prononcé (jupe, poupée) : ....... / 2 pts"],
          ["Le son U de plume, envolée bien clair : ....... / 2 pts"],
          ["Le rythme bien respecté : ....... / 2 pts"],
          ["Les vers bien mémorisés : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
          ["a) « U, U, la jupe de ma ............ »"],
          ["b) « U, U, la ............ envolée. »"],
          ["c) « Une ............ et de la fumée »"],
          ["d) « ............, mardi, je répète : »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["a) La jupe est celle de ma poupée. → VRAI / FAUX"],
          ["b) La plume est cachée. → VRAI / FAUX"],
          ["c) La bulle et la fumée montent. → VRAI / FAUX"],
          ["d) Ma bouche est carrée pour dire U. → VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : son U (2 pts) + clarté (2 pts) + rythme (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "poupée", r: true }, " (1,5 pt) — b) ", { t: "plume", r: true }, " (1,5 pt) — c) ", { t: "bulle", r: true }, " (1,5 pt) — d) ", { t: "Lundi", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["a) ", { t: "VRAI", r: true }, " (1,5 pt) — b) ", { t: "FAUX", r: true }, " (1,5 pt) — c) ", { t: "VRAI", r: true }, " (1,5 pt) — d) ", { t: "FAUX", r: true }, " (ronde !) (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 46 =================
    {
      n: 46, titre: "Bien articuler U", titreFiche: "Bien articuler le son U",
      objectif: "Prononcer parfaitement le son U et ne pas le confondre avec OU ou I.",
      supportFiche: "Miroir, image « U ou OU ? », tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez ensemble les deux premiers vers de la comptine U."],
        app: ["Récitent en chœur : « U, U, la jupe de ma poupée, / U, U, la plume envolée. »"],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["Regardez ma bouche : je fais trois essais. Uuuu (lèvres rondes)... ouuu (bouche très ouverte)... iii (grand sourire). Trois sons différents ! Aujourd'hui, seul le premier nous intéresse : UUUU !"],
        app: ["Observent et imitent les trois essais."],
        technique: ["Démonstration + miroir"], support: "Miroir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous devenons des experts du son U : ni OU, ni I. Après cette séance, votre U sera le plus rond de l'école !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » (avec le miroir) Regardez vos lèvres quand vous dites uuuu : que forment-elles ?"],
        app: ["Observent leurs lèvres rondes dans le miroir."],
        technique: ["Observation + miroir"], support: "Miroir",
      },
      analyse: {
        ens: { paras: [
          ["1) Que font tes lèvres quand tu dis U ?"],
          ["2) Et quand tu dis OU, elles sont où ?"],
          ["3) Disons uuuu puis ouuu : lequel est le plus long ?"],
          ["4] Dis juuuupe : où entend-on le U ?"],
        ] },
        app: { paras: [
          ["R.A. : Elles sont ", { t: "rondes et serrées", r: true }, "."],
          ["R.A. : Elles s'ouvrent ", { t: "plus grand", r: true }, "."],
          ["R.A. : C'est ", { t: "ouuu", r: true }, ", le son long."],
          ["R.A. : Au début : ", { t: "juuu-pe", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Miroir",
      },
      synthese: {
        ens: ["Donc : pour bien dire U, lèvres rondes et serrées, son court : uuuu ! Pas ouuu (trop long), pas iiiii (sourire). Je m'entraîne !"],
        app: ["Répètent : uuuu — jupe — mur — une — du, avec contrôle miroir."],
        technique: ["Travail collectif"], support: "Miroir",
      },
      application: {
        ens: ["Jeu du garde-robe : je nomme un vêtement ou un mot à U ; s'il contient U, tout le monde fait la bouche ronde ; sinon, grande bouche OU : jupe — roue — mur — loup — une — bonjour — plume — doux."],
        app: ["Faisent la bonne bouche à chaque mot."],
        technique: ["Jeu de prononciation"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites « la fumée » très bien articulé. On écoute le U de fu-UU-me."],
        app: ["R.A. : fu-UUU-me avec le U bien rond et court."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN ARTICULER LE SON U",
        subs: [
          { t: "A. Les trois voisins", paras: [[{ t: "U", k: true }, " (rond, court) — ", { t: "OU", k: true }, " (long) — ", { t: "I", k: true }, " (sourire) : trois sons différents !"]] },
          { t: "B. Mon U parfait", paras: [["Lèvres ", { t: "rondes et serrées", k: true }, ", son court : ", { t: "uuuu", k: true }, ". Dans les mots : ", { t: "jupe, mur, une, du, fumée", k: true }, "."]] },
        ],
        retenir: ["Mon ", { t: "U", k: true }, " : lèvres rondes, son ", { t: "court", k: true }, " — ni ", { t: "OU", k: true }, ", ni ", { t: "I", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Devant ton miroir, dis U avec les lèvres rondes. L'enseignant observe :"], items: [
          ["Les lèvres rondes et serrées : ....... / 2 pts"],
          ["Le son court (pas un OU long) : ....... / 2 pts"],
          ["Pas un I (pas de sourire) : ....... / 2 pts"],
          ["Répété 3 fois sans se tromper : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète après la maîtresse, en chœur puis seul :"], items: [
          ["1) juuupe"],
          ["2) fuuuumée"],
          ["3) buuureau"],
          ["4) uuu-ne gomme"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit 3 mots : barre celui qui n'a pas de son U :"], items: [
          ["1) mur — roue — une"],
          ["2) du — loup — jupe"],
          ["3) plume — bonjour — fumée"],
          ["4) bureau — doux — tortue"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : lèvres rondes (2 pts) + son court (2 pts) + pas de sourire (2 pts) + répétition (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec le U bien rond et court (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) intrus : ", { t: "roue", r: true }, " (OU) — 2) intrus : ", { t: "loup", r: true }, " (OU) — 3) intrus : ", { t: "bonjour", r: true }, " (OU) — 4) intrus : ", { t: "doux", r: true }, " (OU) (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 47 =================
    {
      n: 47, titre: "U — bien prononcer les mots", titreFiche: "U — bien prononcer les mots",
      objectif: "Prononcer correctement tous les mots à U appris, seuls et dans des phrases.",
      supportFiche: "Cartes-mots du panier à U, miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Faites votre U parfait : lèvres rondes, son court ! Barrez l'intrus : mur — roue — fumée."],
        app: ["(font le geste) — Intrus : ", { t: "roue", r: true }, " (OU)."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, notre panier de mots à U passe l'examen ! Chaque mot doit se dire avec le plus beau U du monde."],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous prononçons parfaitement les mots à U, tout seuls et dans des phrases. Après cette séance, personne ne confondra plus rue et roue !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » J'écoute la maîtresse dire les cartes-mots très bien articulées : lune — rue — salut — tortue — tulipe — musique — jupe — mur — plume — fumée — bureau."],
        app: ["Écoutent chaque mot attentivement."],
        technique: ["Écoute du modèle"], support: "Cartes-mots",
      },
      analyse: {
        ens: { paras: [
          ["1) Où est le U dans « lune » : au début ou à la fin ?"],
          ["2) Où est le U dans « salut » ?"],
          ["3) Où est le U dans « jupe » ?"],
          ["4) Dites la phrase : « Lulu a une jupe bleue. » Combien de U entend-on ?"],
        ] },
        app: { paras: [
          ["R.A. : Au ", { t: "début", r: true }, "."],
          ["R.A. : À la ", { t: "fin", r: true }, " (le son court : u)."],
          ["R.A. : Au ", { t: "début", r: true }, "."],
          ["R.A. : Trois ", { t: "U", r: true }, " (Lu, une, jupe)."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-mots",
      },
      synthese: {
        ens: ["Donc : le son U peut être au début, au milieu ou à la fin d'un mot. Je l'écoute et je le dis avec mes lèvres rondes partout !"],
        app: ["Répètent les 11 mots du panier en chœur, puis quelques élèves seuls."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du styliste : par binômes, un client commande sa tenue : « Je voudrais une jupe, s'il vous plaît ! ». Le styliste répond : « Une jupe, voilà ! ». Puis on commande le mur de la maison, la plume, etc."],
        app: ["Jouent le dialogue avec les mots à U bien prononcés."],
        technique: ["Jeu de rôle en binômes"], support: "Cartes-mots",
      },
      evaluation: {
        ens: ["3 élèves : dites très bien : « Une plume est sur le mur du bureau. »"],
        app: ["R.A. : phrase répétée avec tous les U bien clairs."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. BIEN PRONONCER LES MOTS À U",
        subs: [
          { t: "A. Les mots tout seuls", paras: [[{ t: "lune — rue — salut — tortue — tulipe — musique — jupe — mur — plume — fumée — bureau", k: true }]] },
          { t: "B. Les mots dans une phrase", paras: [["« ", { t: "Une plume", k: true }, " est sur le ", { t: "mur du bureau", k: true }, ". »"]] },
        ],
        retenir: ["Le son ", { t: "U", k: true }, " peut être au début, au milieu ou à la fin. Je le dis ", { t: "lèvres rondes", k: true }, " partout !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Répète chaque mot seul, très bien articulé (l'enseignant valide) :"], items: [
          ["1) lune ....... / 2 pts"],
          ["2) salut ....... / 2 pts"],
          ["3) jupe ....... / 2 pts"],
          ["4) bureau ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Répète chaque phrase sans te tromper (on écoute les U) :"], items: [
          ["1) « Lulu a une jupe bleue. »"],
          ["2) « La plume est sur le mur. »"],
          ["3) « Une tortue dans la rue ! »"],
          ["4) « Du lundi au mardi, je joue de la musique. »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Complète chaque phrase avec le mot que la maîtresse dit :"], items: [
          ["1) « La ............ monte de la cheminée. »"],
          ["2) « Le chat dort près du ............ »"],
          ["3) « J'écris avec une ............ »"],
          ["4) « Le maître est à son ............ »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : chaque mot bien articulé = 2 pts (total 8 pts)."]] },
        { titre: "Exercice 2", lines: [["Répétition correcte avec les U bien clairs (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "fumée", r: true }, " — 2) ", { t: "mur", r: true }, " — 3) ", { t: "plume", r: true }, " — 4) ", { t: "bureau", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 48 =================
    {
      n: 48, titre: "Comptine U — prononciation", titreFiche: "Comptine U — bien prononcer",
      objectif: "Réciter la comptine U en articulant parfaitement tous les sons U.",
      supportFiche: "Affiche « ma comptine U », miroir, tableau noir.",
      image: null,
      revision: {
        ens: ["Dites très bien : lune — salut — jupe — bureau. (3 élèves)"],
        app: ["Répètent chaque mot lèvres rondes."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, notre comptine U devient un concert ! Chaque U doit être rond comme une bulle de savon."],
        app: ["Écoutent, enthousiastes."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous récitons la comptine U en travaillant la prononciation. Après cette séance, elle sera parfaite !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » J'écoute la comptine dite très lentement par l'enseignant : chaque U est bien gonflé !"],
        app: ["Écoutent la comptine lente et bien articulée."],
        technique: ["Écoute du modèle"], support: "Affiche de la comptine",
      },
      analyse: {
        ens: { paras: [
          ["1) Quels sont les mots à U de la comptine ?"],
          ["2) « carré » et « parfait » : U ou I à la fin ?"],
          ["3) « répète » : U ou I ?"],
          ["4) Écoutez « au-dessus » : entend-on U ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "jupe, poupée, plume, bulle, fumée, du, lundi", r: true }, "."],
          ["R.A. : C'est ", { t: "I", r: true }, " (é final), pas U !"],
          ["R.A. : C'est ", { t: "I", r: true }, " (é), pas U !"],
          ["R.A. : Oui, ", { t: "de-sUU-s", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de la comptine",
      },
      synthese: {
        ens: ["Donc : je gonfle chaque U de la comptine, mais attention aux fins en é : carré, parfait, répète — c'est I, pas U !"],
        app: ["Répètent : du (U) — carré (I) — lundi (U) — parfait (I)."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Concert par groupes : chaque groupe récite la comptine, tous ensemble. Le reste de la classe lève la main à chaque U entendu. On corrige les U oubliés ou mal dits."],
        app: ["Récitent en groupes ; les autres comptent et valident les U."],
        technique: ["Récitation en groupes"], support: "Affiche de la comptine",
      },
      evaluation: {
        ens: ["2 élèves récitent toute la comptine seuls. Grille : chaque U bien articulé vaut un point."],
        app: ["Récitent ; l'enseignant note chaque U réussi."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LA COMPTINE U : JE PRONONCE PARFAITEMENT",
        subs: [
          { t: "A. Les U de la comptine", paras: [[{ t: "U (x4)", k: true }, " — ", { t: "jupe", k: true }, " — ", { t: "poupée", k: true }, " — ", { t: "plume", k: true }, " — ", { t: "bulle", k: true }, " — ", { t: "fumée", k: true }, " — ", { t: "du", k: true }, " — ", { t: "lundi", k: true }]] },
          { t: "B. Le piège", paras: [["Attention : dans « ", { t: "carré", k: true }, " », « ", { t: "parfait", k: true }, " » et « ", { t: "répète", k: true }, " », c'est é (I), pas U !"]] },
        ],
        retenir: ["Je gonfle les ", { t: "U", k: true }, " de la comptine — mais « carré » finit par ", { t: "I", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite toute la comptine. Grille de prononciation :"], items: [
          ["Les U du début (U, U) bien ronds : ....... / 2 pts"],
          ["jupe, poupée, plume, bulle, fumée bien clairs : ....... / 2 pts"],
          ["Les pièges carré et parfait dit avec é : ....... / 2 pts"],
          ["La comptine complète sans aide : ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure les mots de la comptine qui ont un son U :"], items: [
          ["jupe carré"],
          ["fumée parfait"],
          ["du répète"],
          ["bulle envolée"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : U ou é (I) à la fin ? Fais une croix :"], items: [
          ["1) poupée → U / é (I)"],
          ["2) lundi → U / é (I)"],
          ["3) carré → U / é (I)"],
          ["4) bureau → U / é (I)"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : U ronds (2 pts) + mots clairs (2 pts) + pièges (2 pts) + autonomie (2 pts)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "jupe, fumée, du, bulle", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "é (I)", r: true }, " — 2) ", { t: "U", r: true }, " (et é final) — 3) ", { t: "é (I)", r: true }, " — 4) ", { t: "U", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 49 =================
    {
      n: 49, titre: "Répétition rythmée U", titreFiche: "Répétition rythmée des mots à U",
      objectif: "Répéter des mots et des phrases à U en respectant le rythme (syllabes).",
      supportFiche: "Tambourin (ou frappement des mains), cartes-phrases, tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez la comptine U en groupes. — Dans « carré », c'est U ou é ?"],
        app: ["Récitent en groupes. — C'est ", { t: "é (I)", r: true }, "."],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["(frapper le tambourin) Écoutez : ju-UU-pe = 2 frappes ! fu-UU-mée = 3 frappes ! Aujourd'hui, on dit les mots à U en cadence !"],
        app: ["Écoutent le rythme des mots."],
        technique: ["Démonstration"], support: "Tambourin",
      },
      presentation: {
        ens: ["Aujourd'hui, nous répétons les mots à U en suivant le rythme. Après cette séance, vous parlerez français en cadence !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant dit chaque mot en frappant : lune (2), salut (2), jupe (2), plume (2), bureau (2), « une plume bleue » (4)."],
        app: ["Observent et écoutent les frappements."],
        technique: ["Démonstration"], support: "Tambourin",
      },
      analyse: {
        ens: { paras: [
          ["1) Combien de frappes pour « lune » ?"],
          ["2) Combien de frappes pour « plume » ?"],
          ["3) Combien de frappes pour « une jupe » ?"],
          ["4) Frappez et dites : « la fumée du bureau » — combien de frappes ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "2 frappes", r: true }, " (lu-ne)."],
          ["R.A. : ", { t: "2 frappes", r: true }, " (plu-me)."],
          ["R.A. : ", { t: "3 frappes", r: true }, " (u-ne-jupe → 3 syllabes)."],
          ["R.A. : ", { t: "6 frappes", r: true }, " (la-fu-mée-du-bu-reau)."],
        ] },
        technique: ["Question / réponse"], support: "Tambourin",
      },
      synthese: {
        ens: ["Donc : chaque syllabe = une frappe. Je coupe le mot en morceaux et je frappe en même temps que je dis !"],
        app: ["Répètent la règle : 1 syllabe = 1 frappe."],
        technique: ["Travail collectif"], support: "Tambourin",
      },
      application: {
        ens: ["Jeu du chef d'orchestre : un élève dirige avec le tambourin. Tous répètent les mots au rythme du chef : lune — jupe — plume — fumée — bureau — salut. Le chef accélère ou ralentit, tout le monde suit !"],
        app: ["Suivent le rythme du chef d'orchestre."],
        technique: ["Jeu du chef d'orchestre"], support: "Tambourin",
      },
      evaluation: {
        ens: ["L'enseignant frappe 3 fois puis dit « une jupe ». L'élève répète avec le même rythme. (3 élèves)"],
        app: ["R.A. : répétition avec le bon nombre de frappes."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LE RYTHME DES MOTS À U",
        subs: [
          { t: "A. Frapper les syllabes", paras: [[{ t: "lu-ne", k: true }, " (2) — ", { t: "ju-pe", k: true }, " (2) — ", { t: "fu-mée", k: true }, " (3) — ", { t: "bu-reau", k: true }, " (2)"]] },
          { t: "B. Les phrases en rythme", paras: [
            ["« ", { t: "Une jupe", k: true }, ". » (3 frappes)"],
            ["« ", { t: "Une plume sur le mur", k: true }, ". » (6 frappes)"],
          ] },
        ],
        retenir: ["Une syllabe = une ", { t: "frappe", k: true }, ". Je frappe en disant !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Écoute puis frappe et dis en même temps (l'enseignant valide) :"], items: [
          ["1) lune ....... / 2 pts"],
          ["2) fumée ....... / 2 pts"],
          ["3) une jupe ....... / 2 pts"],
          ["4) « la plume sur le mur » ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Combien de frappes (syllabes) ? Fais une croix sous le bon nombre :"], items: [
          ["1) jupe → 1 / 2 / 3"],
          ["2) fumée → 1 / 2 / 3"],
          ["3) bureau → 1 / 2 / 3"],
          ["4) « une tortue » → 2 / 3 / 4"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu du chef : dirigé par ton camarade, répète les 4 phrases en rythme :"], items: [
          ["1) « La lune ! » ....... / 1,5 pt"],
          ["2) « Une jupe et une plume. » ....... / 1,5 pt"],
          ["3) « La fumée du bureau. » ....... / 1,5 pt"],
          ["4) « Salut, lundi ! » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Validation orale : mots et frappes simultanés et corrects (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "2", r: true }, " — 2) ", { t: "3", r: true }, " (fu-mée : 2 syllabes... attention ! 1 si on dit « fumée » vite — réponse attendue : ", { t: "2", r: true }, ") — 3) ", { t: "2", r: true }, " — 4) ", { t: "4", r: true }, " (u-ne-tor-tue : 4). Réponses : 1) 2 — 2) 2 — 3) 2 — 4) 4."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque phrase répétée dans le rythme du chef = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 50 =================
    {
      n: 50, titre: "Performance finale — le son U", titreFiche: "Performance finale — le son U",
      objectif: "Réussir l'épreuve finale de repérage et de prononciation du son U (et sa différence avec OU).",
      supportFiche: "Cartes-mots, affiche de la comptine, tambourin, grille d'observation, tableau noir.",
      image: { file: "s50_performance_u.png", w: 1100, h: 520, legende: "Performance finale : le son U, je le maîtrise !" },
      revision: {
        ens: ["Grand rappel : le son U, c'est quelle bouche ? U et OU, quelle différence ? Frappez : « une jupe »."],
        app: ["R.A. : Lèvres ", { t: "rondes", r: true }, ". — U ", { t: "court", r: true }, ", OU ", { t: "long", r: true }, ". — ", { t: "3 frappes", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Aujourd'hui, c'est le grand jour : la performance finale du son U ! Chacun va montrer tout ce qu'il a appris."],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Au programme : 3 épreuves — le panier de mots à U, la comptine, et U ou OU en rythme. Après cette séance, vous serez champions du son U !"],
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
          ["3) Épreuve 3 : que doit-il faire avec U et OU ?"],
          ["4) Comment gagne-t-on le trophée U ?"],
        ] },
        app: { paras: [
          ["R.A. : Donner des mots avec le son ", { t: "U", r: true }, "."],
          ["R.A. : Réciter en ", { t: "articulant les U", r: true }, "."],
          ["R.A. : Les dire en ", { t: "rythme sans les confondre", r: true }, "."],
          ["R.A. : En réussissant les ", { t: "3 épreuves", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : je me souviens de tout — U, lèvres rondes et son court ; OU, long ; mes 11 mots du panier ; la comptine ; et le rythme : 1 syllabe, 1 frappe. Bonne chance, champions !"],
        app: ["Répètent le résumé en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Passage des épreuves pendant que les autres s'entraînent en binômes avec les cartes-mots. Chaque élève passe les 3 épreuves à tour de rôle."],
        app: ["Passent les épreuves individuellement ; les autres s'entraînent en binômes."],
        technique: ["Passage individuel + entraide"], support: "Cartes-mots, comptine, tambourin",
      },
      evaluation: {
        ens: ["Résultats : qui a gagné le trophée U ? On félicite tous les champions et on note dans la grille qui doit encore s'entraîner."],
        app: ["R.A. : chaque élève connaît son résultat et ce qu'il doit revoir."],
        technique: ["Bilan individuel"],
      },
      lecon: {
        titre: "1. LE SON U : JE LE MAÎTRISE",
        subs: [
          { t: "A. Tout ce que je sais", paras: [
            ["Le son ", { t: "U", k: true }, " : lèvres ", { t: "rondes", k: true }, ", son ", { t: "court", k: true }, " (ni OU, ni I)."],
            ["Mon panier : ", { t: "lune, rue, salut, tortue, tulipe, musique, jupe, mur, plume, fumée, bureau", k: true }, "."],
            ["La différence : ", { t: "rue", k: true }, " (U court) / ", { t: "roue", k: true }, ", ", { t: "bonjour", k: true }, " (OU long)."],
            ["Le rythme : ", { t: "1 syllabe = 1 frappe", k: true }, "."],
          ] },
        ],
        retenir: ["Je suis champion du son ", { t: "U", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 (individuel) : donne 3 mots avec le son U (pas OU !) et prononce-les parfaitement :"], items: [
          ["Mot 1 : .............. ....... / 1,5 pt"],
          ["Mot 2 : .............. ....... / 1,5 pt"],
          ["Mot 3 : .............. ....... / 1 pt"],
          ["Prononciation (lèvres rondes, son court) : ....... / 4 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 : récite un couplet de la comptine en articulant tous les U :"], items: [
          ["Les U bien ronds : ....... / 2 pts"],
          ["Les pièges (carré, parfait) dit avec é : ....... / 2 pts"],
          ["Le couplet bien mémorisé : ....... / 2 pts"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 : dis chaque paire ou phrase en frappant le rythme, sans confondre U et OU :"], items: [
          ["1) rue — roue ....... / 1,5 pt"],
          ["2) « Une jupe, s'il vous plaît. » ....... / 1,5 pt"],
          ["3) « La fumée du bureau. » ....... / 1,5 pt"],
          ["4) « Salut, bonjour ! » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale : mots réels avec U (4 pts) + prononciation parfaite (4 pts). Mots acceptés : tout mot du panier ou nouveau correct (jamais un mot à OU)."]] },
        { titre: "Exercice 2", lines: [["Grille orale (6 pts) : U ronds (2 pts) + pièges (2 pts) + mémoire (2 pts)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : paires sans confusion et frappes synchronisées = 1,5 pt chacune (total 6 pts)."]] },
      ],
    },
  ],
};

module.exports = { theme5, DOC };
