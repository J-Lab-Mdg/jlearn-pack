// ============================================================
// data-theme2.js — CP2 (10ème) — UNITÉ 2 : LES TERMES RELATIFS
// À LA FAMILLE (13-28)
// Rédigé d'après la FRA 10ème (semaines 4-7 du T1) : identifier
// et nommer les membres de la famille (EO), employer les
// adjectifs possessifs (EO), lire et écrire des mots / courtes
// phrases contenant le son u puis le son eu (L/EE) — gabarit
// de l'Unité 1 (clé sd par séance).
// ============================================================

const theme2 = {
 numero: 2,
 nom: "Les termes relatifs à la famille",
 sousDiscipline: "Expression Orale",
 notions: "FAMILLE — PAPA — MAMAN — FRÈRE — SŒUR — BÉBÉ — GRAND-PÈRE — GRAND-MÈRE — ONCLE — TANTE — COUSIN — COUSINE — MON/MA — TON/TA — SON/SA — SON U — JUPE — LUNE — RUE — TORTUE — SON EU — JEU — FEU — DEUX — YEUX — CHEVEUX",
 competences: [
  "Identifier et nommer les membres proches de la famille (papa, maman, frère, sœur).",
  "Nommer les grands-parents, l'oncle, la tante, les cousins.",
  "Présenter les membres de sa famille : « Voici ma famille. »",
  "Employer correctement les adjectifs possessifs mon, ma, ton, ta, son, sa.",
  "Lire des mots et de courtes phrases contenant le son u.",
  "Écrire des mots contenant le son u.",
  "Lire des mots et de courtes phrases contenant le son eu.",
  "Écrire des mots contenant le son eu.",
 ],
 seances: [
  // ================= SÉANCE 13 =================
  {
   n: 13, titre: "Ma famille : papa, maman, frère, sœur", titreFiche: "Les membres de ma famille",
   sd: "Expression Orale",
   objectif: "Identifier et nommer les membres proches de la famille : papa, maman, frère, sœur, bébé.",
   supportFiche: "Image « ma famille », photo de famille, tableau noir.",
   image: { file: "s13_famille.png", w: 1100, h: 560, legende: "Ma famille : papa, maman, le grand frère et la petite sœur." },
   revision: {
    ens: ["Présente-toi, puis présente ton camarade : « Voici... Il/Elle s'appelle... » (2 élèves)."],
    app: ["R.A. : « ", { t: "Bonjour ! Je m'appelle...", r: true }, " » — « ", { t: "Voici... Il/Elle s'appelle...", r: true }, " »."],
    technique: ["Question / réponse"],
   },
   miseEnSituation: {
    ens: ["« Chez Rova, il y a plusieurs personnes sous le même toit : c'est SA famille. Qui y a-t-il dans une famille ? »"],
    app: ["Proposent librement : papa, maman, les enfants..."],
    technique: ["Question ouverte"], support: "Photo de famille",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons les mots de la famille : papa, maman, frère, sœur, bébé."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Regardez et observez bien cette image. » Nommez dans votre tête chaque personne : qui voyez-vous ?"],
    app: ["Observent l'image : papa, maman, le grand frère, la petite sœur."],
    technique: ["Observation guidée"], support: "Image « ma famille »",
   },
   analyse: {
    ens: { paras: [
     ["1) Qui est le père dans la famille ?"],
     ["2) Qui est la mère dans la famille ?"],
     ["3) Comment appelle-t-on le garçon de la famille ? Et la fille ?"],
     ["4) Comment appelle-t-on le tout-petit de la famille ?"],
    ] },
    app: { paras: [
     ["R.A. : ", { t: "Papa", r: true }, "."],
     ["R.A. : ", { t: "Maman", r: true }, "."],
     ["R.A. : Le ", { t: "frère", r: true }, " ; la ", { t: "sœur", r: true }, "."],
     ["R.A. : Le ", { t: "bébé", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Image « ma famille »",
   },
   synthese: {
    ens: ["Donc : dans la famille, il y a papa, maman, les frères, les sœurs et parfois un bébé."],
    app: ["Répètent les 5 mots en chœur en les montrant sur l'image."],
    technique: ["Répétition collective"], support: "Image « ma famille »",
   },
   application: {
    ens: ["Chacun votre tour, dites qui il y a dans VOTRE famille : « Dans ma famille, il y a papa, maman... »"],
    app: ["Disent leur phrase avec les membres de leur propre famille."],
    technique: ["Chaîne parlée"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["3 élèves : la maîtresse montre 3 personnes de l'image, nommez-les."],
    app: ["R.A. : ", { t: "papa, maman, frère, sœur, bébé", r: true }, " (3 mots corrects)."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "13. MA FAMILLE",
    subs: [
     { t: "A. Les mots de la famille", paras: [[{ t: "papa", k: true }, " — ", { t: "maman", k: true }, " — ", { t: "le frère", k: true }, " — ", { t: "la sœur", k: true }, " — ", { t: "le bébé", k: true }]] },
     { t: "B. Ma phrase", paras: [["« ", { t: "Dans ma famille, il y a papa, maman et mon frère.", k: true }, " »"]] },
    ],
    retenir: ["Dans ma famille, il y a ", { t: "papa, maman, mes frères et mes sœurs", k: true }, "."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Entoure les membres de la famille :"], items: [
     ["papa le vélo"],
     ["maman l'école"],
     ["la sœur le café"],
     ["le bébé la lune"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Complète avec papa, maman, frère, sœur ou bébé :"], items: [
     ["1) La ............ donne le biberon au petit."],
     ["2) Mon ............ va à l'école avec moi."],
     ["3) ............ travaille dans la rizière."],
     ["4) Ma petite ............ joue avec la poupée."],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Dis ta phrase : « Dans ma famille, il y a... » (au moins 3 personnes) :"], items: [
     ["1) Je dis « Dans ma famille... » ....... / 1,5 pt"],
     ["2) Je nomme au moins 3 personnes ....... / 1,5 pt"],
     ["3) Je parle fort ....... / 1,5 pt"],
     ["4) Je ne me trompe pas ....... / 1,5 pt"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "papa, maman, la sœur, le bébé", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "maman", r: true }, " (1,5 pt) — 2) ", { t: "frère", r: true }, " (1,5 pt) — 3) ", { t: "Papa", r: true }, " (1,5 pt) — 4) ", { t: "sœur", r: true }, " (1,5 pt)."]] },
    { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
   ],
  },

  // ================= SÉANCE 14 =================
  {
   n: 14, titre: "Grand-père, grand-mère, oncle, tante", titreFiche: "La famille élargie",
   sd: "Expression Orale",
   objectif: "Nommer les grands-parents, l'oncle, la tante, le cousin et la cousine.",
   supportFiche: "Image « la famille élargie », photo, tableau noir.",
   image: { file: "s14_grands_parents.png", w: 1100, h: 560, legende: "Le grand-père, la grand-mère, l'oncle et la tante." },
   revision: {
    ens: ["Nommez les membres proches de la famille. — Qui donne le biberon au bébé ?"],
    app: ["R.A. : ", { t: "papa, maman, frère, sœur, bébé", r: true }, " — ", { t: "maman", r: true }, "."],
    technique: ["Question / réponse"],
   },
   miseEnSituation: {
    ens: ["« Chez Koto, il y a aussi les parents de papa et maman : les vieux que l'on aime beaucoup. Comment les appelle-t-on ? »"],
    app: ["Proposent : le grand-père, la grand-mère..."],
    technique: ["Question ouverte"], support: "Photo",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons les autres membres de la famille : grand-père, grand-mère, oncle, tante, cousin, cousine."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Regardez et observez bien cette image. » Qui voyez-vous ? Observez les cheveux gris du grand-père !"],
    app: ["Observent : le grand-père, la grand-mère, l'oncle, la tante."],
    technique: ["Observation guidée"], support: "Image « la famille élargie »",
   },
   analyse: {
    ens: { paras: [
     ["1) Comment appelle-t-on le père de ton papa ?"],
     ["2) Et la mère de ta maman ?"],
     ["3) Le frère de ton papa, c'est ton... ?"],
     ["4) Et la fille de ton oncle, c'est ta... ?"],
    ] },
    app: { paras: [
     ["R.A. : Mon ", { t: "grand-père", r: true }, "."],
     ["R.A. : Ma ", { t: "grand-mère", r: true }, "."],
     ["R.A. : Mon ", { t: "oncle", r: true }, "."],
     ["R.A. : Ma ", { t: "cousine", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Image « la famille élargie »",
   },
   synthese: {
    ens: ["Donc : le père de papa ou de maman, c'est le grand-père ; leur mère, c'est la grand-mère ; leurs frères et sœurs, ce sont mes oncles et tantes ; leurs enfants, mes cousins et cousines."],
    app: ["Répètent les 6 mots en chœur."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Jeu des devinettes de famille : « La sœur de ma maman ? » (ma tante) — « Le fils de ma tante ? » (mon cousin)"],
    app: ["Répondent aux devinettes : ", { t: "la tante, le cousin, le grand-père...", r: true }, "."],
    technique: ["Jeu de devinettes"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["3 élèves : la maîtresse dit une définition, vous dites le mot de la famille."],
    app: ["R.A. : ", { t: "grand-père, grand-mère, oncle, tante, cousin, cousine", r: true }, " corrects."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "14. LA FAMILLE ÉLARGIE",
    subs: [
     { t: "A. Les grands-parents", paras: [[{ t: "le grand-père", k: true }, " — ", { t: "la grand-mère", k: true }]] },
     { t: "B. Oncles, tantes, cousins", paras: [[{ t: "l'oncle", k: true }, " — ", { t: "la tante", k: true }, " — ", { t: "le cousin", k: true }, " — ", { t: "la cousine", k: true }]] },
    ],
    retenir: ["La sœur de ma maman est ma ", { t: "tante", k: true }, " ; le fils de ma tante est mon ", { t: "cousin", k: true }, "."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots de la famille :"], items: [
     ["la tante la tasse"],
     ["l'oncle l'agneau"],
     ["le grand-père le grand sac"],
     ["la cousine la cour"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Complète avec grand-mère, oncle, tante ou cousin :"], items: [
     ["1) La mère de mon papa, c'est ma ............"],
     ["2) Le frère de ma maman, c'est mon ............"],
     ["3) La fille de mon oncle, c'est ma ............"],
     ["4) La sœur de mon papa, c'est ma ............"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Devinettes orales : dis le mot de la famille !"], items: [
     ["1) Le père de ma maman."],
     ["2) La sœur de mon papa."],
     ["3) Le fils de ma tante."],
     ["4) La mère de mon papa."],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "la tante, l'oncle, le grand-père, la cousine", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "grand-mère", r: true }, " (1,5 pt) — 2) ", { t: "oncle", r: true }, " (1,5 pt) — 3) ", { t: "cousine", r: true }, " (1,5 pt) — 4) ", { t: "tante", r: true }, " (1,5 pt)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "le grand-père", r: true }, " — 2) ", { t: "la tante", r: true }, " — 3) ", { t: "le cousin", r: true }, " — 4) ", { t: "la grand-mère", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 15 =================
  {
   n: 15, titre: "Voici ma famille", titreFiche: "Voici ma famille : je la présente",
   sd: "Expression Orale",
   objectif: "Présenter plusieurs membres de sa famille : « Voici ma famille. Voici mon papa, ma maman... »",
   supportFiche: "Image « voici ma famille », photos de familles, tableau noir.",
   image: { file: "s15_voici_famille.png", w: 1100, h: 560, legende: "« Voici ma famille : mon papa, ma maman, mon frère et ma sœur. »" },
   revision: {
    ens: ["Devinette : la sœur de ta maman ? — Le père de ta maman ?"],
    app: ["R.A. : Ma ", { t: "tante", r: true }, " — mon ", { t: "grand-père", r: true }, "."],
    technique: ["Devinettes rapides"],
   },
   miseEnSituation: {
    ens: ["« Soa montre la photo de sa famille à toute la classe : Voici ma famille ! Écoutez comment elle fait... »"],
    app: ["Écoutent la présentation modèle avec attention."],
    technique: ["Narration"], support: "Photos de familles",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons à présenter toute notre famille en une seule fois, comme Soa."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["Écoutez : « Voici ma famille. Voici mon papa, ma maman, mon frère et ma petite sœur. J'aime ma famille. » (répète deux fois)."],
    app: ["Écoutent attentivement la présentation modèle."],
    technique: ["Écoute active"], support: "Image « voici ma famille »",
   },
   analyse: {
    ens: { paras: [
     ["1) Avec quelle phrase commence la présentation ?"],
     ["2) Comment présente-t-on papa ?"],
     ["3) Comment présente-t-on maman ?"],
     ["4) Comment termine-t-on la présentation ?"],
    ] },
    app: { paras: [
     ["R.A. : « ", { t: "Voici ma famille.", r: true }, " »"],
     ["R.A. : « ", { t: "Mon papa", r: true }, ". »"],
     ["R.A. : « ", { t: "Ma maman", r: true }, ". »"],
     ["R.A. : « ", { t: "J'aime ma famille.", r: true }, " »"],
    ] },
    technique: ["Question / réponse"], support: "Image « voici ma famille »",
   },
   synthese: {
    ens: ["Donc : pour présenter ma famille, je dis « Voici ma famille », puis je nomme chaque membre : mon papa, ma maman, mon frère, ma sœur."],
    app: ["Répètent la présentation complète en chœur, avec le geste (main qui montre)."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["À ton tour : présente ta famille à ton camarade, puis 3 élèves devant la classe."],
    app: ["Présentent leur famille en binômes, puis quelques-uns devant tous."],
    technique: ["Binômes puis passage devant la classe"], support: "Photos de familles",
   },
   evaluation: {
    ens: ["3 élèves : présente ta famille en 3 phrases minimum."],
    app: ["R.A. : « ", { t: "Voici ma famille. Voici mon papa, ma maman...", r: true }, " » complet."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "15. VOICI MA FAMILLE",
    subs: [
     { t: "A. La présentation", paras: [["« ", { t: "Voici ma famille. Voici mon papa, ma maman, mon frère et ma sœur.", k: true }, " »"]] },
     { t: "B. Pour finir", paras: [["« ", { t: "J'aime ma famille.", k: true }, " »"]] },
    ],
    retenir: ["Je présente ma famille : « ", { t: "Voici ma famille...", k: true }, " » puis je nomme chacun."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Remets la présentation en ordre : numérote de 1 à 4 :"], items: [
     ["a) Voici mon papa, ma maman et ma sœur."],
     ["b) J'aime ma famille."],
     ["c) Voici ma famille."],
     ["d) Bonjour !"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Complète avec ma, mon ou Voici :"], items: [
     ["1) ............ famille est grande."],
     ["2) Voici ............ papa."],
     ["3) ............ maman cuisine bien."],
     ["4) ............ ma petite sœur."],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Présente ta famille. La maîtresse observe :"], items: [
     ["1) Je dis « Voici ma famille » ....... / 1,5 pt"],
     ["2) Je nomme au moins 3 membres ....... / 1,5 pt"],
     ["3) Je dis « J'aime ma famille » ....... / 1,5 pt"],
     ["4) Je parle fort et je souris ....... / 1,5 pt"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Ordre : 1) ", { t: "d", r: true }, " — 2) ", { t: "c", r: true }, " — 3) ", { t: "a", r: true }, " — 4) ", { t: "b", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "Ma", r: true }, " — 2) ", { t: "mon", r: true }, " — 3) ", { t: "Ma", r: true }, " — 4) ", { t: "Voici", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
   ],
  },

  // ================= SÉANCE 16 =================
  {
   n: 16, titre: "La comptine de la famille", titreFiche: "La comptine de la famille",
   sd: "Expression Orale",
   objectif: "Réciter la comptine de la famille avec les gestes et jouer à « Qui manque-t-il ? ».",
   supportFiche: "Affiche « la comptine de la famille », images des membres, tableau noir.",
   image: null,
   revision: {
    ens: ["Présente ta famille en une phrase. — Comment termine-t-on ?"],
    app: ["R.A. : « ", { t: "Voici ma famille. Voici mon papa...", r: true }, " » — « ", { t: "J'aime ma famille", r: true }, ". »"],
    technique: ["Question / réponse"],
   },
   miseEnSituation: {
    ens: ["« La famille de Rova a maintenant SA comptine ! Écoutez... » L'enseignant récite avec les gestes : main qui berce le bébé, main tendue vers papa..."],
    app: ["Écoutent, frappent dans les mains à la fin."],
    technique: ["Narration avec gestes"], support: "Affiche « la comptine de la famille »",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons la comptine de la famille, puis nous jouons à « Qui manque-t-il ? »."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Regardez et observez bien cette affiche. » Suivez chaque vers avec votre doigt pendant que je récite lentement."],
    app: ["Suivent les vers des yeux et du doigt, en écoutant."],
    technique: ["Écoute du modèle"], support: "Affiche « la comptine de la famille »",
   },
   analyse: {
    ens: { paras: [
     ["1) Qui berce le bébé dans la comptine ?"],
     ["2) Que prépare la maman ?"],
     ["3) Avec qui joue le frère ?"],
     ["4) Termine : j'aime ma..."],
    ] },
    app: { paras: [
     ["R.A. : ", { t: "La grand-mère", r: true }, "."],
     ["R.A. : Le ", { t: "riz", r: true }, "."],
     ["R.A. : Sa ", { t: "sœur", r: true }, "."],
     ["R.A. : ", { t: "famille", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Affiche « la comptine de la famille »",
   },
   synthese: {
    ens: ["Donc : ma comptine dit toute la famille : papa, maman, la grand-mère, le bébé. Je la récite avec les gestes !"],
    app: ["Répètent chaque vers après l'enseignant, avec les gestes."],
    technique: ["Répétition par vers"], support: "Affiche « la comptine de la famille »",
   },
   application: {
    ens: ["Jeu « Qui manque-t-il ? » : 5 élèves jouent les membres de la famille ; la classe ferme les yeux, un se cache : qui manque-t-il ?"],
    app: ["Ferment les yeux, ouvrent et nomment le membre caché : « C'est la grand-mère qui manque ! »"],
    technique: ["Jeu de mémoire"], support: "Images des membres",
   },
   evaluation: {
    ens: ["3 élèves récitent les deux premiers vers, seuls, avec les gestes."],
    app: ["R.A. : les deux vers correctement, avec le sourire."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "16. LA COMPTINE DE LA FAMILLE",
    subs: [
     { t: "A. La comptine", paras: [
      ["« ", { t: "Papa, maman, frère et sœur,", k: true }, " »"],
      ["« ", { t: "ma famille est mon bonheur.", k: true }, " »"],
     ] },
     { t: "B. Le jeu", paras: [["« ", { t: "Qui manque-t-il ?", k: true }, " » : je retrouve le membre caché !"]] },
    ],
    retenir: ["Ma comptine : « ", { t: "Ma famille est mon bonheur !", k: true }, " » — je la connais par cœur !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
     ["1) « Papa, maman, frère et sœur » ....... / 2 pts"],
     ["2) « ma famille est mon bonheur » ....... / 2 pts"],
     ["3) Je récite sans aide ....... / 2 pts"],
     ["4) Je fais les gestes ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
     ["1) Papa, maman, frère et ............"],
     ["2) Ma famille est mon ............"],
     ["3) La grand-mère berce le ............"],
     ["4) Papa revient de la ............"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Jeu « Qui manque-t-il ? » : réponds !"], items: [
     ["1) C'est ....... qui manque ! (le papa est caché)"],
     ["2) C'est ....... qui manque ! (le bébé est caché)"],
     ["3) C'est ....... qui manque ! (la sœur est cachée)"],
     ["4) C'est ....... qui manque ! (la grand-mère est cachée)"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Grille orale (8 pts) : vers 1 (2 pts) + vers 2 (2 pts) + mémoire (2 pts) + gestes (2 pts)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "sœur", r: true }, " (1,5 pt) — 2) ", { t: "bonheur", r: true }, " (1,5 pt) — 3) ", { t: "bébé", r: true }, " (1,5 pt) — 4) ", { t: "rizière", r: true }, " (1,5 pt)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "le papa", r: true }, " — 2) ", { t: "le bébé", r: true }, " — 3) ", { t: "la sœur", r: true }, " — 4) ", { t: "la grand-mère", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 17 =================
  {
   n: 17, titre: "Mon, ma", titreFiche: "Mon, ma : c'est chez moi !",
   sd: "Expression Orale",
   objectif: "Employer mon et ma devant les membres de la famille (mon papa, ma maman).",
   supportFiche: "Image « mon / ma », photos de familles, tableau noir.",
   image: { file: "s17_possessifs.png", w: 1100, h: 560, legende: "MON papa, MON frère — MA maman, MA sœur." },
   revision: {
    ens: ["Récite les deux premiers vers de la comptine de la famille."],
    app: ["Récitent : « ", { t: "Papa, maman, frère et sœur, ma famille est mon bonheur", r: true }, ". »"],
    technique: ["Récitation"],
   },
   miseEnSituation: {
    ens: ["(montre une photo de famille) « C'est le papa de Soa. Quand SOA en parle, elle dit : MON papa. Et quand elle parle de sa maman : MA maman. Écoutez bien ces petits mots ! »"],
    app: ["Écoutent, observent la photo."],
    technique: ["Démonstration"], support: "Photos de familles",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons les petits mots mon et ma pour parler de CE QUI EST À NOUS."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Observez et écoutez. » Mon papa. Ma maman. Mon frère. Ma sœur. Mon grand-père. Ma grand-mère. Entendez-vous la différence ?"],
    app: ["Écoutent les paires et répètent mon/ma."],
    technique: ["Écoute du modèle"], support: "Image « mon / ma »",
   },
   analyse: {
    ens: { paras: [
     ["1) Dis-tu « mon papa » ou « ma papa » ?"],
     ["2) Dis-tu « ma maman » ou « mon maman » ?"],
     ["3) « mon » ou « ma » devant « frère » ?"],
     ["4) « mon » ou « ma » devant « sœur » ?"],
    ] },
    app: { paras: [
     ["R.A. : ", { t: "Mon papa", r: true }, "."],
     ["R.A. : ", { t: "Ma maman", r: true }, "."],
     ["R.A. : ", { t: "Mon frère", r: true }, "."],
     ["R.A. : ", { t: "Ma sœur", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Image « mon / ma »",
   },
   synthese: {
    ens: ["Donc : je dis « mon » devant papa, frère, grand-père, oncle, cousin ; et « ma » devant maman, sœur, grand-mère, tante, cousine. J'écoute le mot et je choisis !"],
    app: ["Répètent les paires en chœur : mon papa, ma maman, mon frère, ma sœur."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Je dis un membre de la famille, vous répondez « mon... » ou « ma... » : papa ! maman ! oncle ! tante ! frère ! cousine !"],
    app: ["Répondent : ", { t: "mon papa, ma maman, mon oncle, ma tante, mon frère, ma cousine", r: true }, "."],
    technique: ["Jeu rapide"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["3 élèves : complète — « C'est ........ papa. C'est ........ maman. » et montre la photo."],
    app: ["R.A. : « ", { t: "mon / ma", r: true }, " » corrects."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "17. MON, MA",
    subs: [
     { t: "A. mon", paras: [[{ t: "mon papa", k: true }, " — ", { t: "mon frère", k: true }, " — ", { t: "mon grand-père", k: true }]] },
     { t: "B. ma", paras: [[{ t: "ma maman", k: true }, " — ", { t: "ma sœur", k: true }, " — ", { t: "ma grand-mère", k: true }]] },
    ],
    retenir: [{ t: "mon", k: true }, " papa, ", { t: "ma", k: true }, " maman : c'est chez moi !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Complète avec mon ou ma :"], items: [
     ["1) ........ papa"],
     ["2) ........ maman"],
     ["3) ........ sœur"],
     ["4) ........ grand-père"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Entoure la bonne réponse :"], items: [
     ["1) mon / ma tante"],
     ["2) mon / ma frère"],
     ["3) mon / ma cousine"],
     ["4) mon / ma grand-mère"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Dis la phrase complète (la maîtresse montre la photo) :"], items: [
     ["1) C'est ....... papa. (photo)"],
     ["2) C'est ....... maman. (photo)"],
     ["3) C'est ....... frère. (photo)"],
     ["4) C'est ....... sœur. (photo)"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["1) ", { t: "Mon", r: true }, " — 2) ", { t: "ma", r: true }, " — 3) ", { t: "ma", r: true }, " — 4) ", { t: "mon", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "ma", r: true }, " tante — 2) ", { t: "mon", r: true }, " frère — 3) ", { t: "ma", r: true }, " cousine — 4) ", { t: "ma", r: true }, " grand-mère (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "mon", r: true }, " — 2) ", { t: "ma", r: true }, " — 3) ", { t: "mon", r: true }, " — 4) ", { t: "ma", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 18 =================
  {
   n: 18, titre: "Ton, ta", titreFiche: "Ton, ta : et chez toi ?",
   sd: "Expression Orale",
   objectif: "Employer ton et ta pour parler de ce qui appartient à celui qu'on regarde (ton papa, ta maman).",
   supportFiche: "Photos de familles, tableau noir.",
   image: null,
   revision: {
    ens: ["« mon » ou « ma » : maman ? — frère ? — tante ? — grand-père ?"],
    app: ["R.A. : ", { t: "ma maman, mon frère, ma tante, mon grand-père", r: true }, "."],
    technique: ["Jeu rapide"],
   },
   miseEnSituation: {
    ens: ["« Rova demande à Koto : c'est ton papa sur la photo ? Le petit mot change : MON papa chez moi... TON papa chez toi ! »"],
    app: ["Écoutent, comprennent la différence moi/toi."],
    technique: ["Démonstration"], support: "Photos de familles",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons ton et ta : les petits mots pour parler de CE QUI EST À TOI."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Observez et écoutez. » (à un élève) Ton papa. Ta maman. Ton frère. Ta sœur. Ta grand-mère. Répétez chacun !"],
    app: ["Répètent ton/ta chacun leur tour."],
    technique: ["Répétition individuelle"], support: "Photos de familles",
   },
   analyse: {
    ens: { paras: [
     ["1) Comment demander à ton camarade pour son papa ?"],
     ["2) Et pour sa maman ?"],
     ["3) « ton » ou « ta » devant « sœur » ?"],
     ["4) « ton » ou « ta » devant « oncle » ?"],
    ] },
    app: { paras: [
     ["R.A. : « ", { t: "Ton papa", r: true }, " ? »"],
     ["R.A. : « Ta ", { t: "maman", r: true }, " ? »"],
     ["R.A. : Ta ", { t: "sœur", r: true }, "."],
     ["R.A. : Ton ", { t: "oncle", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Photos de familles",
   },
   synthese: {
    ens: ["Donc : ton devant papa, frère, oncle, grand-père ; ta devant maman, sœur, tante, grand-mère. Mon pour moi, ton pour toi !"],
    app: ["Répètent les paires en chœur : ton papa, ta maman, ton frère, ta sœur."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Par deux, posez les questions : « Comment s'appelle ton papa ? Ta maman ? Ta sœur ? » — Répondez avec mon/ma !"],
    app: ["Se posent les questions en binômes, répondent avec mon/ma."],
    technique: ["Dialogue à deux"], support: "Photos de familles",
   },
   evaluation: {
    ens: ["3 élèves : la maîtresse demande — « Ton oncle habite où ? Ta tante ? »"],
    app: ["R.A. : ", { t: "ton / ta", r: true }, " corrects dans la réponse complète."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "18. TON, TA",
    subs: [
     { t: "A. ton", paras: [[{ t: "ton papa", k: true }, " — ", { t: "ton frère", k: true }, " — ", { t: "ton oncle", k: true }]] },
     { t: "B. ta", paras: [[{ t: "ta maman", k: true }, " — ", { t: "ta sœur", k: true }, " — ", { t: "ta tante", k: true }]] },
    ],
    retenir: [{ t: "ton", k: true }, " papa, ", { t: "ta", k: true }, " maman : c'est chez toi !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Complète avec ton ou ta :"], items: [
     ["1) ........ papa travaille où ?"],
     ["2) ........ maman s'appelle comment ?"],
     ["3) ........ oncle habite où ?"],
     ["4) ........ sœur a quel âge ?"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Entoure la bonne réponse :"], items: [
     ["1) ton / ta grand-père"],
     ["2) ton / ta cousine"],
     ["3) ton / ta frère"],
     ["4) ton / ta tante"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Question-réponse à deux (la maîtresse observe) :"], items: [
     ["1) Je pose la question avec ton/ta ....... / 1,5 pt"],
     ["2) Je réponds avec mon/ma ....... / 1,5 pt"],
     ["3) Je regarde mon camarade ....... / 1,5 pt"],
     ["4) Je parle fort ....... / 1,5 pt"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["1) ", { t: "Ton", r: true }, " — 2) ", { t: "ta", r: true }, " — 3) ", { t: "ton", r: true }, " — 4) ", { t: "ta", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "ton", r: true }, " grand-père — 2) ", { t: "ta", r: true }, " cousine — 3) ", { t: "ton", r: true }, " frère — 4) ", { t: "ta", r: true }, " tante (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
   ],
  },

  // ================= SÉANCE 19 =================
  {
   n: 19, titre: "Son, sa", titreFiche: "Son, sa : et chez lui ?",
   sd: "Expression Orale",
   objectif: "Employer son et sa pour parler de ce qui appartient à une autre personne (son papa, sa maman).",
   supportFiche: "Photos de familles différentes, tableau noir.",
   image: null,
   revision: {
    ens: ["« ton » ou « ta » : papa ? — sœur ? — grand-mère ? — oncle ?"],
    app: ["R.A. : ", { t: "ton papa, ta sœur, ta grand-mère, ton oncle", r: true }, "."],
    technique: ["Jeu rapide"],
   },
   miseEnSituation: {
    ens: ["« Voici la photo de Lanto. Pour parler du papa de LANTO, on dit : SON papa. Et pour sa maman : SA maman. Moi-toi-lui : mon-ton-son ! »"],
    app: ["Écoutent et observent la photo de Lanto."],
    technique: ["Démonstration"], support: "Photos de familles",
   },
   presentation: {
    ens: ["Aujourd'hui, nous apprenons son et sa : les petits mots pour parler de CE QUI EST À UN AUTRE."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Observez et écoutez. » (photos de trois élèves) Voici Soa : son papa, sa maman. Voici Koto : son frère, sa sœur. Voici Fara : son oncle, sa tante."],
    app: ["Observent les photos et répètent son/sa."],
    technique: ["Observation guidée"], support: "Photos de familles",
   },
   analyse: {
    ens: { paras: [
     ["1) Le papa de Lanto, c'est « son » ou « sa » papa ?"],
     ["2) La maman de Fara, c'est « son » ou « sa » maman ?"],
     ["3) « son » ou « sa » devant « frère » ?"],
     ["4) « son » ou « sa » devant « tante » ?"],
    ] },
    app: { paras: [
     ["R.A. : Son ", { t: "papa", r: true }, "."],
     ["R.A. : Sa ", { t: "maman", r: true }, "."],
     ["R.A. : Son ", { t: "frère", r: true }, "."],
     ["R.A. : Sa ", { t: "tante", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Photos de familles",
   },
   synthese: {
    ens: ["Donc : mon pour moi, ton pour toi, son pour lui/elle. Devant papa, frère, oncle : mon, ton, son. Devant maman, sœur, tante : ma, ta, sa !"],
    app: ["Répètent les trois séries en chœur : mon-ton-son papa ; ma-ta-sa maman."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Jeu des photos : je montre la photo d'un camarade, la classe dit : « C'est SON papa, SA maman, SON frère... »"],
    app: ["Décrivent les photos des camarades avec son/sa."],
    technique: ["Jeu de description"], support: "Photos de familles",
   },
   evaluation: {
    ens: ["3 élèves : (photo de Tiana) « C'est ........ papa et ........ maman. »"],
    app: ["R.A. : « ", { t: "son / sa", r: true }, " » corrects."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "19. SON, SA",
    subs: [
     { t: "A. son", paras: [[{ t: "son papa", k: true }, " — ", { t: "son frère", k: true }, " — ", { t: "son oncle", k: true }]] },
     { t: "B. sa", paras: [[{ t: "sa maman", k: true }, " — ", { t: "sa sœur", k: true }, " — ", { t: "sa tante", k: true }]] },
    ],
    retenir: [{ t: "mon-ton-son", k: true }, " papa ; ", { t: "ma-ta-sa", k: true }, " maman !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Complète avec son ou sa :"], items: [
     ["1) Voici Lanto. C'est ........ papa."],
     ["2) C'est ........ maman."],
     ["3) C'est ........ frère."],
     ["4) C'est ........ grand-mère."],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Entoure la bonne réponse :"], items: [
     ["1) son / sa tante"],
     ["2) son / sa oncle"],
     ["3) son / sa sœur"],
     ["4) son / sa cousin"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["La triple série : dis les trois (mon, ton, son) :"], items: [
     ["1) ........ papa, ........ papa, ........ papa (moi, toi, lui)"],
     ["2) ........ maman, ........ maman, ........ maman"],
     ["3) ........ frère, ........ frère, ........ frère"],
     ["4) ........ sœur, ........ sœur, ........ sœur"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["1) ", { t: "son", r: true }, " — 2) ", { t: "sa", r: true }, " — 3) ", { t: "son", r: true }, " — 4) ", { t: "sa", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "sa", r: true }, " tante — 2) ", { t: "son", r: true }, " oncle — 3) ", { t: "sa", r: true }, " sœur — 4) ", { t: "son", r: true }, " cousin (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "mon, ton, son", r: true }, " — 2) ", { t: "ma, ta, sa", r: true }, " — 3) ", { t: "mon, ton, son", r: true }, " — 4) ", { t: "ma, ta, sa", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 20 =================
  {
   n: 20, titre: "Possessifs : le grand jeu", titreFiche: "Mon, ma, ton, ta, son, sa : le grand jeu",
   sd: "Expression Orale",
   objectif: "Consolider mon, ma, ton, ta, son, sa dans un jeu de cartes et de phrases.",
   supportFiche: "Cartes-mots et images (objets, membres de la famille), panier, tableau noir.",
   image: null,
   revision: {
    ens: ["« son » ou « sa » : frère ? — maman ? — cousin ? — tante ?"],
    app: ["R.A. : ", { t: "son frère, sa maman, son cousin, sa tante", r: true }, "."],
    technique: ["Jeu rapide"],
   },
   miseEnSituation: {
    ens: ["« Aujourd'hui : le grand jeu des possessifs ! Des cartes, un panier, et des phrases à gagner. L'équipe championne aura son diplôme ! »"],
    app: ["Crient leur motivation, prêts à jouer."],
    technique: ["Annonce du jeu"], support: "Cartes-mots et panier",
   },
   presentation: {
    ens: ["Nous rejouons tout : mon, ma, ton, ta, son, sa — avec les membres de la famille et les objets de la classe."],
    app: ["Écoutent le déroulé du jeu."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["« Observez mes cartes. » (montre une carte « papa » à un élève) À toi : TON papa. (la retourne vers la classe) De Soa : SON papa. (sur moi) MON papa."],
    app: ["Observent les trois tours de carte et répètent chaque phrase."],
    technique: ["Démonstration par cartes"], support: "Cartes-mots et panier",
   },
   analyse: {
    ens: { paras: [
     ["1) La gomme de Fara : « son » ou « sa » gomme ?"],
     ["2) Le cahier de Koto : « son » ou « sa » cahier ?"],
     ["3) Ta propre sœur : « ton » ou « ta » sœur ?"],
     ["4) Le grand-père de Soa : « son » ou « sa » grand-père ?"],
    ] },
    app: { paras: [
     ["R.A. : Sa ", { t: "gomme", r: true }, "."],
     ["R.A. : Son ", { t: "cahier", r: true }, "."],
     ["R.A. : Ta ", { t: "sœur", r: true }, "."],
     ["R.A. : Son ", { t: "grand-père", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Cartes-mots et panier",
   },
   synthese: {
    ens: ["Donc : mon-ton-son devant les mots comme papa, frère, oncle, cahier ; ma-ta-sa devant maman, sœur, tante, gomme. Je réponds vite et juste !"],
    app: ["Répètent la règle en chœur avec les gestes (main sur la poitrine : mon ; main tendue : ton ; doigt vers un camarade : son)."],
    technique: ["Répétition avec gestes"], support: "Tableau noir",
   },
   application: {
    ens: ["Grand jeu par équipes : je tire une carte et désigne un élève — l'équipe doit dire la bonne phrase en 3 secondes : (carte « maman », élève Fara) « SA maman ! »"],
    app: ["Jouent par équipes, gagnent un point par phrase juste."],
    technique: ["Jeu d'équipes"], support: "Cartes-mots et panier",
   },
   evaluation: {
    ens: ["3 élèves : 4 cartes rapides, une phrase correcte par carte."],
    app: ["R.A. : ", { t: "mon/ma/ton/ta/son/sa", r: true }, " corrects (1 pt par bonne réponse)."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "20. LES POSSESSIFS : LE JEU",
    subs: [
     { t: "A. Les six petits mots", paras: [[{ t: "mon, ma", k: true }, " (moi) — ", { t: "ton, ta", k: true }, " (toi) — ", { t: "son, sa", k: true }, " (lui, elle)"]] },
     { t: "B. La règle rapide", paras: [["papa, frère, oncle, cahier → ", { t: "mon, ton, son", k: true }, " — maman, sœur, tante, gomme → ", { t: "ma, ta, sa", k: true }]] },
    ],
    retenir: [{ t: "Mon, ton, son", k: true }, " / ", { t: "ma, ta, sa", r: true }, " : je réponds vite et juste !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Complète avec mon, ton ou son :"], items: [
     ["1) C'est ........ papa (moi)."],
     ["2) C'est ........ papa (toi)."],
     ["3) C'est ........ papa (lui)."],
     ["4) C'est ........ oncle (elle)."],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Complète avec ma, ta ou sa :"], items: [
     ["1) C'est ........ sœur (moi)."],
     ["2) C'est ........ tante (toi)."],
     ["3) C'est ........ gomme (elle)."],
     ["4) C'est ........ maman (lui)."],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Jeu éclair : réponds en 3 secondes !"], items: [
     ["1) le cahier de Tiana → ........ cahier"],
     ["2) ta pomme → ........ pomme (moi)"],
     ["3) le frère de Hery → ........ frère"],
     ["4) ma main → ........ main (toi)"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["1) ", { t: "mon", r: true }, " — 2) ", { t: "ton", r: true }, " — 3) ", { t: "son", r: true }, " — 4) ", { t: "son", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "ma", r: true }, " — 2) ", { t: "ta", r: true }, " — 3) ", { t: "sa", r: true }, " — 4) ", { t: "sa", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "son", r: true }, " — 2) ", { t: "ma", r: true }, " — 3) ", { t: "son", r: true }, " — 4) ", { t: "ta", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 21 =================
  {
   n: 21, titre: "Le son u — découverte", titreFiche: "Le son u — découverte",
   sd: "Lecture",
   objectif: "Reconnaître et lire le son u dans des mots simples (une, du, tu, salut, jupe, lune, rue, tortue).",
   supportFiche: "Étiquettes-mots, image « le son u », tableau noir.",
   image: { file: "s21_son_u.png", w: 1100, h: 560, legende: "Le son u : la jupe, la lune, la rue, la tortue." },
   revision: {
    ens: ["Jeu éclair : le cahier de Tiana ? — ta pomme (moi) ? — le frère de Hery ?"],
    app: ["R.A. : ", { t: "son cahier, ma pomme, son frère", r: true }, "."],
    technique: ["Jeu éclair"],
   },
   miseEnSituation: {
    ens: ["« Où est la tortue ? Dans la rue, sous la lune... Aujourd'hui, on lit les mots avec le son u, le son des lèvres rondes ! »"],
    app: ["Faisent les lèvres rondes : uuuu !"],
    technique: ["Découverte gestuelle"], support: "Image « le son u »",
   },
   presentation: {
    ens: ["Aujourd'hui, nous lisons des mots avec le son u : une, du, tu, salut, jupe, lune, rue, tortue."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(écrit au tableau : jupe, lune, rue, tortue — prononce chaque mot lentement en insistant sur u) Répétez : ju-upe... lu-une... ru-ue... tor-tue..."],
    app: ["Écoutent et observent les mots écrits."],
    technique: ["Écoute et observation"], support: "Mots écrits au tableau",
   },
   analyse: {
    ens: { paras: [
     ["1) Quel son entend-on dans tous ces mots ?"],
     ["2) Quelle lettre fait le son u ?"],
     ["3) Dans « tortue », où est le u : début, milieu ou fin ?"],
     ["4) Comment sont les lèvres pour dire u ?"],
    ] },
    app: { paras: [
     ["R.A. : Le son ", { t: "u", r: true }, "."],
     ["R.A. : La lettre ", { t: "u", r: true }, "."],
     ["R.A. : Au ", { t: "milieu", r: true }, " (tor-tue)."],
     ["R.A. : ", { t: "Rondes", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Mots écrits au tableau",
   },
   synthese: {
    ens: ["Donc : le son u se lit avec la lettre u, les lèvres rondes : jupe, lune, rue, tortue, une, du, tu, salut."],
    app: ["Répètent les 8 mots en chœur, lèvres bien rondes."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Lecture à tour de rôle : lisez un mot de la liste, lèvres rondes !"],
    app: ["Lisent chacun leur tour un mot affiché."],
    technique: ["Lecture individuelle à voix haute"], support: "Étiquettes-mots",
   },
   evaluation: {
    ens: ["Montre une étiquette (parmi jupe, lune, rue, tortue) et demande de la lire."],
    app: ["R.A. : lit le mot correctement."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "21. LE SON U",
    subs: [
     { t: "A. La lettre", paras: [["Le son ", { t: "u", k: true }, " se lit avec la lettre ", { t: "u", k: true }, " — lèvres rondes !"]] },
     { t: "B. Les mots", paras: [[{ t: "une", k: true }, " — ", { t: "du", k: true }, " — ", { t: "tu", k: true }, " — ", { t: "salut", k: true }, " — ", { t: "jupe", k: true }, " — ", { t: "lune", k: true }, " — ", { t: "rue", k: true }, " — ", { t: "tortue", k: true }]] },
    ],
    retenir: ["Je lis : ", { t: "jupe, lune, rue, tortue", k: true }, " — lèvres rondes !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où tu entends le son u :"], items: [
     ["1) jupe / riz"],
     ["2) lune / maman"],
     ["3) rue / papa"],
     ["4) tortue / torte"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
     ["1) une ....... / 1,5 pt"],
     ["2) salut ....... / 1,5 pt"],
     ["3) du ....... / 1,5 pt"],
     ["4) tu ....... / 1,5 pt"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : coche OUI si tu entends u :"], items: [
     ["1) tortue → OUI / NON"],
     ["2) papa → OUI / NON"],
     ["3) lune → OUI / NON"],
     ["4) frère → OUI / NON"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "jupe, lune, rue, tortue", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["Lecture correcte et fluide (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "NON", r: true }, " — 3) ", { t: "OUI", r: true }, " — 4) ", { t: "NON", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 22 =================
  {
   n: 22, titre: "Le son u — lire des mots", titreFiche: "Le son u — lire des mots",
   sd: "Lecture",
   objectif: "Lire des mots contenant le son u en position initiale, médiane et finale.",
   supportFiche: "Étiquettes-mots, ardoise, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : jupe, lune, rue, tortue. Comment sont les lèvres ?"],
    app: ["Lisent — lèvres ", { t: "rondes", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« De nouveaux mots avec u arrivent : le mur, la fumée, la plume, le bureau. À vous de les lire ! »"],
    app: ["Écoutent, prêts à lire."],
    technique: ["Annonce du défi"], support: "Étiquettes-mots",
   },
   presentation: {
    ens: ["Aujourd'hui, nous lisons d'autres mots avec le son u : mur, fumée, plume, bureau, salut."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(lit lentement chaque mot en le montrant) mur... fu-mée... plu-me... bu-reau... sa-lut... (répète chaque mot deux fois)."],
    app: ["Écoutent et suivent des yeux le mot montré."],
    technique: ["Écoute et observation"], support: "Étiquettes-mots affichées",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « mur », où est le son u ?"],
     ["2) Dans « fumée », combien de fois entends-tu u ?"],
     ["3) Dans « salut », où est le u ?"],
     ["4) Dans « bureau », dis les syllabes : où sont les u ?"],
    ] },
    app: { paras: [
     ["R.A. : Au ", { t: "milieu", r: true }, " (mu-r)."],
     ["R.A. : ", { t: "Deux fois", r: true }, " (fu-mée)."],
     ["R.A. : À ", { t: "la fin", r: true }, " (sa-lu)."],
     ["R.A. : bu-reau : le u au ", { t: "début", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Étiquettes-mots",
   },
   synthese: {
    ens: ["Donc : le u peut être au début (bureau, une), au milieu (mur, fumée, plume) ou à la fin (salut)."],
    app: ["Répètent les mots en chœur en frappant les syllabes."],
    technique: ["Répétition rythmée collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Lisez les mots à tour de rôle, chacun un mot, à voix haute et forte."],
    app: ["Lisent chacun leur tour un mot affiché."],
    technique: ["Lecture individuelle à voix haute"], support: "Étiquettes-mots",
   },
   evaluation: {
    ens: ["Présente une étiquette (mur, fumée, plume, bureau) et demande de la lire."],
    app: ["R.A. : lit le mot présenté correctement."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "22. LE SON U — LES MOTS",
    subs: [
     { t: "A. Les mots", paras: [[{ t: "mur", k: true }, " — ", { t: "fumée", k: true }, " — ", { t: "plume", k: true }, " — ", { t: "bureau", k: true }, " — ", { t: "salut", k: true }]] },
     { t: "B. Sa place", paras: [["Le u peut être au ", { t: "début", k: true }, " (une), au ", { t: "milieu", k: true }, " (mur) ou à ", { t: "la fin", k: true }, " (salut)."]] },
    ],
    retenir: ["Je lis : ", { t: "mur, fumée, plume, bureau", k: true }, " — le u est partout !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
     ["1) mur ....... / 2 pts"],
     ["2) fumée ....... / 2 pts"],
     ["3) plume ....... / 2 pts"],
     ["4) bureau ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Classe les mots selon la position du u (début / milieu / fin) :"], items: [
     ["1) salut → ............"],
     ["2) mur → ............"],
     ["3) une → ............"],
     ["4) plume → ............"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Entoure le mot que la maîtresse dit :"], items: [
     ["1) mur / amour"],
     ["2) fumée / fumier"],
     ["3) plume / pluie"],
     ["4) bureau / beau"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "fin", r: true }, " — 2) ", { t: "milieu", r: true }, " — 3) ", { t: "début", r: true }, " — 4) ", { t: "milieu", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "mur", r: true }, " — 2) ", { t: "fumée", r: true }, " — 3) ", { t: "plume", r: true }, " — 4) ", { t: "bureau", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 23 =================
  {
   n: 23, titre: "Le son u — lire des phrases", titreFiche: "Le son u — lire des phrases",
   sd: "Lecture",
   objectif: "Lire de courtes phrases contenant le son u.",
   supportFiche: "Phrases écrites sur affiche, ardoise, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : mur, fumée, plume, bureau. Où est le u dans chaque mot ?"],
    app: ["Lisent : ", { t: "milieu, milieu, milieu, début", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« Les mots avec u entrent en phrases ! Écoutez : La tortue a une jupe bleue. À vous de lire ! »"],
    app: ["Écoutent, impatients de lire les phrases."],
    technique: ["Annonce du défi"], support: "Phrases écrites sur affiche",
   },
   presentation: {
    ens: ["Aujourd'hui, nous lisons de courtes phrases qui contiennent le son u."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(lit lentement chaque phrase en pointant les mots) « Salut, papa ! »... « La tortue a une jupe. »... « Le mur de la rue est bleu. »..."],
    app: ["Suivent les phrases des yeux pendant la lecture modèle."],
    technique: ["Lecture modèle"], support: "Affiche de phrases",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « Salut, papa ! », quel mot a le son u ?"],
     ["2) Dans « La tortue a une jupe. », quels mots avec u ?"],
     ["3) Dans « Le mur de la rue est bleu. », quels mots ?"],
     ["4) Lis ta phrase préférée à voix haute."],
    ] },
    app: { paras: [
     ["R.A. : « ", { t: "Salut", r: true }, " »."],
     ["R.A. : ", { t: "tortue, une, jupe", r: true }, "."],
     ["R.A. : ", { t: "mur, rue", r: true }, " (et bleu)."],
     ["Lit sa phrase, seul, à voix haute."],
    ] },
    technique: ["Question / réponse"], support: "Affiche de phrases",
   },
   synthese: {
    ens: ["Donc : le son u se cache dans plein de mots de nos phrases : salut, tortue, une, jupe, mur, rue. Je lis en le repérant !"],
    app: ["Répètent chaque phrase après l'enseignant, puis les lisent en chœur."],
    technique: ["Répétition par phrase"], support: "Affiche de phrases",
   },
   application: {
    ens: ["Lisez les 4 phrases à tour de rôle, chacun une phrase, à voix haute et forte."],
    app: ["Lisent chacun leur tour une phrase de l'affiche."],
    technique: ["Lecture individuelle à voix haute"], support: "Affiche de phrases",
   },
   evaluation: {
    ens: ["Présente une phrase et demande de la lire et de dire quels mots ont le son u."],
    app: ["R.A. : lit la phrase et ", { t: "identifie les mots avec u", r: true }, "."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "23. LE SON U — LES PHRASES",
    subs: [
     { t: "A. Les phrases", paras: [
      ["« ", { t: "Salut, papa !", k: true }, " »"],
      ["« ", { t: "La tortue a une jupe bleue.", k: true }, " » — « ", { t: "Le mur de la rue est bleu.", k: true }, " »"],
     ] },
     { t: "B. Je repère", paras: [["Dans chaque phrase, je cherche ", { t: "les mots avec u", k: true }, " !"]] },
    ],
    retenir: ["Je lis des phrases et je repère les mots avec ", { t: "u", k: true }, "."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque phrase à voix haute (l'enseignant valide) :"], items: [
     ["1) Salut, papa ! ....... / 2 pts"],
     ["2) La tortue a une jupe. ....... / 2 pts"],
     ["3) Le mur de la rue est bleu. ....... / 2 pts"],
     ["4) Du riz pour ta mamie. ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Dans chaque phrase, entoure le mot avec le son u :"], items: [
     ["1) La jupe est jolie."],
     ["2) Une tortue dort."],
     ["3) Le chat est dans la rue."],
     ["4) La lune brille."],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Relie la phrase à son dessin (l'enseignant montre les images) :"], items: [
     ["1) La tortue marche → image : tortue / lune"],
     ["2) La lune brille → image : lune / jupe"],
     ["3) Papa est au bureau → image : bureau / rue"],
     ["4) La fumée monte → image : fumée / plume"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "jupe", r: true }, " — 2) ", { t: "une, tortue", r: true }, " — 3) ", { t: "rue", r: true }, " — 4) ", { t: "lune", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "tortue", r: true }, " — 2) ", { t: "lune", r: true }, " — 3) ", { t: "bureau", r: true }, " — 4) ", { t: "fumée", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 24 =================
  {
   n: 24, titre: "Écrire avec u", titreFiche: "Écrire des mots avec u",
   sd: "Expression Écrite",
   objectif: "Écrire des mots contenant le son u (copie, dictée).",
   supportFiche: "Ardoises, cahiers, affiche des mots de la semaine, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : salut, tortue, jupe, rue. Quel son commun ?"],
    app: ["Lisent — le son ", { t: "u", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« Vous savez LIRE le son u. Aujourd'hui, vous allez l'ÉCRIRE ! Ardoises prêtes ? »"],
    app: ["Sortent leurs ardoises, motivés."],
    technique: ["Annonce du défi"], support: "Ardoises",
   },
   presentation: {
    ens: ["Aujourd'hui, nous écrivons des mots avec u : copie puis dictée."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(écrit « tortue » au tableau lettre par lettre) Regardez : t-o-r-t-u-e. Le u est au milieu. Observez aussi : jupe, lune, salut."],
    app: ["Observent l'écriture des mots, tracent les lettres dans l'air."],
    technique: ["Observation guidée"], support: "Mots écrits au tableau",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « tortue », où est le u ?"],
     ["2) Dans « jupe », où est-il ?"],
     ["3) Trace dans l'air la lettre u."],
     ["4) Écris « lu » sur ton ardoise : montre-moi !"],
    ] },
    app: { paras: [
     ["R.A. : Au ", { t: "milieu", r: true }, "."],
     ["R.A. : Au ", { t: "milieu", r: true }, " aussi (ju-upe)."],
     ["Tracent la lettre u dans l'air avec le doigt."],
     ["Écrivent « lu » et montrent leur ardoise."],
    ] },
    technique: ["Question / réponse"], support: "Mots écrits au tableau",
   },
   synthese: {
    ens: ["Donc : pour écrire le son u, je trace la lettre u, courbe en bas : jupe, lune, rue, salut. Je copie les mots du tableau !"],
    app: ["Copient soigneusement les mots : jupe, lune, rue, salut sur l'ardoise."],
    technique: ["Copie guidée"], support: "Tableau noir",
   },
   application: {
    ens: ["Complète sur ton ardoise : j...pe (u), l...ne (u), r...e (u), sal... (u). Puis on corrige ensemble !"],
    app: ["Écrivent la lettre u manquante sur l'ardoise et corrigent collectivement."],
    technique: ["Exercice collectif"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["Dictée de mots : jupe, lune, rue, salut. Écrivez sur l'ardoise puis sur le cahier."],
    app: ["R.A. : mots correctement écrits avec la lettre ", { t: "u", r: true }, "."],
    technique: ["Dictée individuelle"],
   },
   lecon: {
    titre: "24. ÉCRIRE U",
    subs: [
     { t: "A. La lettre", paras: [["Le ", { t: "u", k: true }, " : deux montées et une courbe en bas !"]] },
     { t: "B. La dictée", paras: [["J'écris : ", { t: "jupe, lune, rue, salut", k: true }, " sans oublier le u !"]] },
    ],
    retenir: ["J'écris le ", { t: "u", k: true }, " dans tous les mots du son u !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Copie chaque mot avec son u :"], items: [
     ["1) jupe ....... / 2 pts"],
     ["2) lune ....... / 2 pts"],
     ["3) rue ....... / 2 pts"],
     ["4) salut ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Dictée sur l'ardoise (l'enseignant dicte) :"], items: [
     ["1) mur ....... / 1,5 pt"],
     ["2) une ....... / 1,5 pt"],
     ["3) tortue ....... / 1,5 pt"],
     ["4) du ....... / 1,5 pt"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Complète avec u :"], items: [
     ["1) j...pe"],
     ["2) l...ne"],
     ["3) tort...e"],
     ["4) sal...t"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Copie correcte avec la lettre u (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "mur", r: true }, " — 2) ", { t: "une", r: true }, " — 3) ", { t: "tortue", r: true }, " — 4) ", { t: "du", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "jupe", r: true }, " — 2) ", { t: "lune", r: true }, " — 3) ", { t: "tortue", r: true }, " — 4) ", { t: "salut", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 25 =================
  {
   n: 25, titre: "Le son eu — découverte", titreFiche: "Le son eu — découverte",
   sd: "Lecture",
   objectif: "Reconnaître et lire le son eu dans des mots simples (jeu, feu, deux, yeux, cheveux).",
   supportFiche: "Étiquettes-mots, image « le son eu », tableau noir.",
   image: { file: "s25_son_eu.png", w: 1100, h: 560, legende: "Le son eu : le jeu, le feu, les yeux, les cheveux." },
   revision: {
    ens: ["Lisez : jupe, lune, rue, salut. Quelle lettre pour le son u ?"],
    app: ["Lisent — la lettre ", { t: "u", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« Fermez les yeux... touchez vos cheveux... ouvrez les yeux ! Vous venez de dire deux mots avec un NOUVEAU son : eu ! »"],
    app: ["Font les gestes et découvrent les mots yeux, cheveux."],
    technique: ["Découverte gestuelle"], support: "—",
   },
   presentation: {
    ens: ["Aujourd'hui, nous découvrons le son eu : jeu, feu, deux, yeux, cheveux."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(écrit au tableau : jeu, feu, deux, yeux, cheveux — prononce chaque mot lentement) Répétez : je-eu... fe-eu... de-eux... ye-eux... che-ve-eux..."],
    app: ["Écoutent et observent les mots écrits."],
    technique: ["Écoute et observation"], support: "Mots écrits au tableau",
   },
   analyse: {
    ens: { paras: [
     ["1) Quel son entend-on dans tous ces mots ?"],
     ["2) Quelles lettres écrivent le son eu ?"],
     ["3) Combien de « yeux » as-tu ?"],
     ["4) Dis un mot avec eu : « Au feu ! » ou « Un jeu ! »"],
    ] },
    app: { paras: [
     ["R.A. : Le son ", { t: "eu", r: true }, "."],
     ["R.A. : Les lettres ", { t: "e-u", r: true }, "."],
     ["R.A. : ", { t: "Deux", r: true }, " yeux."],
     ["Répètent les mots en chœur : jeu, feu."],
    ] },
    technique: ["Question / réponse"], support: "Mots écrits au tableau",
   },
   synthese: {
    ens: ["Donc : le son eu s'écrit avec deux lettres e-u : jeu, feu, deux, yeux, cheveux. La bouche fait une petite boule : euuu !"],
    app: ["Répètent les 5 mots en chœur, bouche en petite boule."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Jeu d'écoute : je dis un mot, répondez OUI si tu entends eu : jeu — jupe — deux — lune — cheveux — rue !"],
    app: ["Répondent : ", { t: "jeu OUI, jupe NON, deux OUI, lune NON, cheveux OUI, rue NON", r: true }, "."],
    technique: ["Jeu d'écoute"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["Lit un mot (jeu, lune, feu, tortue) et demande : entends-tu eu ?"],
    app: ["R.A. : réponse correcte ", { t: "oui ou non", r: true }, "."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "25. LE SON EU",
    subs: [
     { t: "A. Les lettres", paras: [["Le son ", { t: "eu", k: true }, " s'écrit avec ", { t: "deux lettres", k: true }, " : ", { t: "e-u", k: true }, " !"]] },
     { t: "B. Les mots", paras: [[{ t: "jeu", k: true }, " — ", { t: "feu", k: true }, " — ", { t: "deux", k: true }, " — ", { t: "les yeux", k: true }, " — ", { t: "les cheveux", k: true }]] },
    ],
    retenir: ["Le son ", { t: "eu", k: true }, " : ", { t: "jeu, feu, deux, yeux, cheveux", k: true }, "."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où tu entends le son eu :"], items: [
     ["1) jeu / joue"],
     ["2) feu / fou"],
     ["3) deux / dans"],
     ["4) cheveux / cheval"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
     ["1) jeu ....... / 1,5 pt"],
     ["2) feu ....... / 1,5 pt"],
     ["3) deux ....... / 1,5 pt"],
     ["4) yeux ....... / 1,5 pt"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : coche OUI si tu entends eu :"], items: [
     ["1) cheveux → OUI / NON"],
     ["2) lune → OUI / NON"],
     ["3) deux → OUI / NON"],
     ["4) rue → OUI / NON"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "jeu, feu, deux, cheveux", r: true }, " (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["Lecture correcte et fluide (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "NON", r: true }, " — 3) ", { t: "OUI", r: true }, " — 4) ", { t: "NON", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 26 =================
  {
   n: 26, titre: "Le son eu — lire des mots", titreFiche: "Le son eu — lire des mots",
   sd: "Lecture",
   objectif: "Lire des mots contenant le son eu (seul ou avec des lettres devant).",
   supportFiche: "Étiquettes-mots, ardoise, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : jeu, feu, deux, yeux, cheveux. Quelles lettres pour eu ?"],
    app: ["Lisent — les lettres ", { t: "e-u", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« D'autres mots avec eu : la fleur, le docteur, monsieur. Des mots de grands, mais vous savez déjà lire eu ! »"],
    app: ["Écoutent, fiers de lire des mots de grands."],
    technique: ["Annonce du défi"], support: "Étiquettes-mots",
   },
   presentation: {
    ens: ["Aujourd'hui, nous lisons d'autres mots avec le son eu : fleur, docteur, facteur, voleur."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(lit lentement chaque mot en le montrant) fleur... docteur... facteur... voleur... (répète chaque mot deux fois)."],
    app: ["Écoutent et suivent des yeux le mot montré."],
    technique: ["Écoute et observation"], support: "Étiquettes-mots affichées",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « fleur », où est le son eu ?"],
     ["2) Dans « facteur », où est-il ?"],
     ["3) Qui apporte les lettres ? Le facteur ou le voleur ?"],
     ["4) Qui soigne les malades ?"],
    ] },
    app: { paras: [
     ["R.A. : À ", { t: "la fin", r: true }, " (fleu-r)."],
     ["R.A. : À ", { t: "la fin", r: true }, " (facteu-r)."],
     ["R.A. : Le ", { t: "facteur", r: true }, "."],
     ["R.A. : Le ", { t: "docteur", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Étiquettes-mots",
   },
   synthese: {
    ens: ["Donc : le son eu se lit souvent à la fin des mots : fleur, facteur, docteur, voleur — et au milieu : jeu, feu, yeux."],
    app: ["Répètent les mots en chœur, bouche en petite boule."],
    technique: ["Répétition collective"], support: "Tableau noir",
   },
   application: {
    ens: ["Lisez les mots à tour de rôle : fleur, docteur, facteur, jeu, feu."],
    app: ["Lisent chacun leur tour un mot affiché."],
    technique: ["Lecture individuelle à voix haute"], support: "Étiquettes-mots",
   },
   evaluation: {
    ens: ["Présente une étiquette (fleur, docteur, facteur) et demande de la lire."],
    app: ["R.A. : lit le mot présenté correctement."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "26. LE SON EU — LES MOTS",
    subs: [
     { t: "A. Les mots", paras: [[{ t: "la fleur", k: true }, " — ", { t: "le docteur", k: true }, " — ", { t: "le facteur", k: true }, " — ", { t: "le voleur", k: true }]] },
     { t: "B. Sa place", paras: [["Le eu est souvent à ", { t: "la fin", k: true }, " : fleur, facteur, docteur."]] },
    ],
    retenir: ["Je lis : ", { t: "fleur, docteur, facteur", k: true }, " — le eu final !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
     ["1) fleur ....... / 2 pts"],
     ["2) docteur ....... / 2 pts"],
     ["3) facteur ....... / 2 pts"],
     ["4) voleur ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Entoure le mot que la maîtresse dit :"], items: [
     ["1) fleur / flocon"],
     ["2) docteur / facteur"],
     ["3) voleur / velours"],
     ["4) jeu / joue"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Complète : qui fait quoi ? Dis la phrase :"], items: [
     ["1) Il soigne les malades : le ............"],
     ["2) Il apporte les lettres : le ............"],
     ["3) Il prend les choses cachées : le ............"],
     ["4) Elle pousse au jardin : la ............"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "fleur", r: true }, " — 2) ", { t: "docteur ou facteur", r: true }, " (les deux, selon ce qui est dit) — 3) ", { t: "voleur", r: true }, " — 4) ", { t: "jeu", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "docteur", r: true }, " — 2) ", { t: "facteur", r: true }, " — 3) ", { t: "voleur", r: true }, " — 4) ", { t: "fleur", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 27 =================
  {
   n: 27, titre: "Le son eu — lire des phrases", titreFiche: "Le son eu — lire des phrases",
   sd: "Lecture",
   objectif: "Lire de courtes phrases contenant le son eu.",
   supportFiche: "Phrases écrites sur affiche, ardoise, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : fleur, docteur, facteur. Où est le eu ?"],
    app: ["Lisent — à ", { t: "la fin", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« Les mots avec eu entrent en phrases ! Écoutez : Mon petit frère a les yeux noirs. À vous de lire ! »"],
    app: ["Écoutent, prêts à lire."],
    technique: ["Annonce du défi"], support: "Phrases écrites sur affiche",
   },
   presentation: {
    ens: ["Aujourd'hui, nous lisons de courtes phrases qui contiennent le son eu."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(lit lentement chaque phrase en pointant les mots) « Mon petit frère a les yeux noirs. »... « Le feu est rouge. »... « Papa me donne deux fleurs. »..."],
    app: ["Suivent les phrases des yeux pendant la lecture modèle."],
    technique: ["Lecture modèle"], support: "Affiche de phrases",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « Mon petit frère a les yeux noirs. », quels mots avec eu ?"],
     ["2) Dans « Le feu est rouge. », quel mot ?"],
     ["3) Dans « Papa me donne deux fleurs. », quels mots ?"],
     ["4) Lis ta phrase préférée à voix haute."],
    ] },
    app: { paras: [
     ["R.A. : ", { t: "yeux", r: true }, " (et mon, petit)."],
     ["R.A. : ", { t: "feu", r: true }, "."],
     ["R.A. : ", { t: "deux, fleurs", r: true }, "."],
     ["Lit sa phrase, seul, à voix haute."],
    ] },
    technique: ["Question / réponse"], support: "Affiche de phrases",
   },
   synthese: {
    ens: ["Donc : le son eu se cache dans nos phrases : mon, petit, yeux, feu, deux, fleurs. Je lis en le repérant !"],
    app: ["Répètent chaque phrase après l'enseignant, puis les lisent en chœur."],
    technique: ["Répétition par phrase"], support: "Affiche de phrases",
   },
   application: {
    ens: ["Lisez les 4 phrases à tour de rôle, chacun une phrase, à voix haute et forte."],
    app: ["Lisent chacun leur tour une phrase de l'affiche."],
    technique: ["Lecture individuelle à voix haute"], support: "Affiche de phrases",
   },
   evaluation: {
    ens: ["Présente une phrase et demande de la lire et de dire quels mots ont le son eu."],
    app: ["R.A. : lit la phrase et ", { t: "identifie les mots avec eu", r: true }, "."],
    technique: ["Individuel oral"],
   },
   lecon: {
    titre: "27. LE SON EU — LES PHRASES",
    subs: [
     { t: "A. Les phrases", paras: [
      ["« ", { t: "Mon petit frère a les yeux noirs.", k: true }, " »"],
      ["« ", { t: "Le feu est rouge.", k: true }, " » — « ", { t: "Papa me donne deux fleurs.", k: true }, " »"],
     ] },
     { t: "B. Je repère", paras: [["Dans chaque phrase, je cherche ", { t: "les mots avec eu", k: true }, " !"]] },
    ],
    retenir: ["Je lis des phrases et je repère les mots avec ", { t: "eu", k: true }, "."],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque phrase à voix haute (l'enseignant valide) :"], items: [
     ["1) Mon petit frère a les yeux noirs. ....... / 2 pts"],
     ["2) Le feu est rouge. ....... / 2 pts"],
     ["3) Papa me donne deux fleurs. ....... / 2 pts"],
     ["4) Ma sœur joue avec un ballon. ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Dans chaque phrase, entoure un mot avec le son eu :"], items: [
     ["1) La petite joue dans le jardin."],
     ["2) Le docteur arrive."],
     ["3) J'ai deux mains."],
     ["4) Les cheveux de maman."],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur les phrases lues :"], items: [
     ["1) Le petit frère a les yeux bleus. VRAI / FAUX"],
     ["2) Le feu est rouge. VRAI / FAUX"],
     ["3) Papa donne une fleur. VRAI / FAUX"],
     ["4) La sœur joue au ballon. VRAI / FAUX"],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "joue", r: true }, " — 2) ", { t: "docteur", r: true }, " — 3) ", { t: "deux", r: true }, " — 4) ", { t: "cheveux", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "FAUX", r: true }, " (noirs) — 2) ", { t: "VRAI", r: true }, " — 3) ", { t: "FAUX", r: true }, " (deux) — 4) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
   ],
  },

  // ================= SÉANCE 28 =================
  {
   n: 28, titre: "Écrire avec eu + bilan", titreFiche: "Écrire avec eu — bilan de l'unité",
   sd: "Expression Écrite",
   objectif: "Écrire des mots contenant le son eu (copie, dictée) et faire le bilan de l'unité famille.",
   supportFiche: "Ardoises, cahiers, affiche des mots de la semaine, tableau noir.",
   image: null,
   revision: {
    ens: ["Lisez : mon, yeux, feu, deux, fleurs. Quel son commun ?"],
    app: ["Lisent — le son ", { t: "eu", r: true }, "."],
    technique: ["Question-réponse"],
   },
   miseEnSituation: {
    ens: ["« Dernière séance de l'unité famille : on écrit les mots avec eu, puis on refait le bilan de TOUT ce qu'on a appris ! »"],
    app: ["Sortent leurs ardoises, motivés pour le bilan."],
    technique: ["Annonce du défi"], support: "Ardoises",
   },
   presentation: {
    ens: ["Aujourd'hui : écrire les mots avec eu, puis le grand bilan de l'unité 2 : la famille, les possessifs, les sons u et eu."],
    app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
   },
   observation: {
    ens: ["(écrit « cheveux » au tableau lettre par lettre) Regardez : che-ve-eux. Le eu est à la fin. Observez aussi : jeu, feu, deux."],
    app: ["Observent l'écriture des mots, tracent les lettres dans l'air."],
    technique: ["Observation guidée"], support: "Mots écrits au tableau",
   },
   analyse: {
    ens: { paras: [
     ["1) Dans « cheveux », où est le eu ?"],
     ["2) Quelles lettres écrivent le son eu ?"],
     ["3) Bilan : dis les membres de la famille que tu connais."],
     ["4) Bilan : les six petits mots possessifs ?"],
    ] },
    app: { paras: [
     ["R.A. : À ", { t: "la fin", r: true }, " (che-ve-eux)."],
     ["R.A. : Les lettres ", { t: "e-u", r: true }, "."],
     ["R.A. : ", { t: "papa, maman, frère, sœur, grand-père, grand-mère, oncle, tante...", r: true }, "."],
     ["R.A. : ", { t: "mon, ma, ton, ta, son, sa", r: true }, "."],
    ] },
    technique: ["Question / réponse"], support: "Mots écrits au tableau",
   },
   synthese: {
    ens: ["Donc : j'écris eu avec les lettres e-u : jeu, feu, deux, cheveux. Et je connais toute la famille avec mon, ma, ton, ta, son, sa !"],
    app: ["Copient soigneusement les mots : jeu, feu, deux, cheveux sur l'ardoise."],
    technique: ["Copie guidée"], support: "Tableau noir",
   },
   application: {
    ens: ["Complète sur ton ardoise : j... (eu), f... (eu), d...x (eu), chev...x (eu). Puis on corrige ensemble !"],
    app: ["Écrivent les lettres e-u manquantes et corrigent collectivement."],
    technique: ["Exercice collectif"], support: "Tableau noir",
   },
   evaluation: {
    ens: ["Dictée de bilan : jeu, deux, cheveux, ma sœur. Écrivez sur l'ardoise puis sur le cahier."],
    app: ["R.A. : mots correctement écrits avec ", { t: "eu", r: true }, "."],
    technique: ["Dictée individuelle"],
   },
   lecon: {
    titre: "28. ÉCRIRE EU — BILAN",
    subs: [
     { t: "A. La dictée", paras: [["J'écris : ", { t: "jeu, deux, cheveux", k: true }, " avec le eu bien écrit !"]] },
     { t: "B. Bilan de l'unité", paras: [[{ t: "La famille", k: true }, " + ", { t: "mon, ma, ton, ta, son, sa", k: true }, " + les sons ", { t: "u et eu", k: true }, " : tout est appris !"]] },
    ],
    retenir: ["Unité 2 réussie : ", { t: "la famille, les possessifs, les sons u et eu", k: true }, " !"],
   },
   exercices: [
    { titre: "Exercice 1", pts: 8, consigne: ["Copie chaque mot avec son eu :"], items: [
     ["1) jeu ....... / 2 pts"],
     ["2) deux ....... / 2 pts"],
     ["3) cheveux ....... / 2 pts"],
     ["4) feu ....... / 2 pts"],
    ] },
    { titre: "Exercice 2", pts: 6, consigne: ["Dictée sur l'ardoise (l'enseignant dicte) :"], items: [
     ["1) jeu ....... / 1,5 pt"],
     ["2) deux ....... / 1,5 pt"],
     ["3) cheveux ....... / 1,5 pt"],
     ["4) ma sœur ....... / 1,5 pt"],
    ] },
    { titre: "Exercice 3", pts: 6, consigne: ["Bilan : réponds oralement :"], items: [
     ["1) La mère de ton papa ? ....... / 1,5 pt"],
     ["2) « la gomme de Lanto » → ........ gomme"],
     ["3) « une » ou « deux » yeux ? ......."],
     ["4) u ou eu : la « f...leur » ? ......."],
    ] },
   ],
   corrige: [
    { titre: "Exercice 1", lines: [["Copie correcte avec les lettres e-u (2 pts chacun)."]] },
    { titre: "Exercice 2", lines: [["1) ", { t: "jeu", r: true }, " — 2) ", { t: "deux", r: true }, " — 3) ", { t: "cheveux", r: true }, " — 4) ", { t: "ma sœur", r: true }, " (1,5 pt chacun)."]] },
    { titre: "Exercice 3", lines: [["1) ", { t: "la grand-mère", r: true }, " — 2) ", { t: "sa", r: true }, " — 3) ", { t: "deux", r: true }, " — 4) ", { t: "eu", r: true }, " (1,5 pt chacun)."]] },
   ],
  },
 ],
};

module.exports = { theme2 };
