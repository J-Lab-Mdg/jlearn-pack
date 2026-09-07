// ============================================================
// data-theme3.js — THÈME 3 : SE PRÉSENTER (séances 21-30)
// Sous-discipline : Langage — titres repris du manuel existant,
// contenu rédigé d'après la FRA officielle (« employer les
// formules de présentation pour se présenter / présenter
// quelqu'un », « employer les structures : Qui est-ce »).
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme3 = {
  numero: 3,
  nom: "Se présenter",
  sousDiscipline: "Langage",
  notions: "JE M'APPELLE — J'AI ... ANS — J'HABITE À — QUI EST-CE ? C'EST... — IL S'APPELLE — ELLE S'APPELLE",
  competences: [
    "Employer les formules de présentation pour se présenter (je m'appelle...).",
    "Dire son âge et répondre à la question « Tu as quel âge ? ».",
    "Dire où l'on habite (je suis de... / j'habite à...).",
    "Faire sa présentation complète en 3 phrases.",
    "Employer la structure « Qui est-ce ? — C'est... » pour présenter quelqu'un.",
    "Présenter un camarade (il s'appelle... / elle s'appelle...).",
  ],
  seances: [
    // ================= SÉANCE 21 =================
    {
      n: 21, titre: "Je m'appelle...", titreFiche: "Se présenter — je m'appelle...",
      objectif: "Se présenter en disant son prénom : « Je m'appelle... ».",
      supportFiche: "Image « je m'appelle », tableau noir.",
      image: { file: "s21_jemappelle.png", w: 1100, h: 520, legende: "Bonjour ! Je m'appelle Rova !" },
      revision: {
        ens: ["Donnez 2 mots avec le son I et 2 mots avec le son U. — Comment fait la bouche pour I ?"],
        app: ["R.A. : I : ", { t: "riz, tapis, souris", r: true }, "... — U : ", { t: "lune, rue, salut", r: true }, "... — Elle ", { t: "sourit", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Un nouvel élève arrive dans la classe. La maîtresse lui demande son prénom. Que doit-il dire ?"],
        app: ["Proposent librement leurs idées : « Je m'appelle... » ou « Mon prénom est... »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à nous présenter : « Je m'appelle... ». Après cette séance, vous serez capables de dire votre prénom comme les grands !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que fait l'élève devant la classe ? Que dit-elle ?"],
        app: ["Observent silencieusement l'image, puis répondent."],
        technique: ["Observation guidée"], support: "Image « je m'appelle »",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment Rova commence-t-elle sa présentation ?"],
          ["2) Comment dit-elle son prénom ?"],
          ["3) Koto veut se présenter à son tour. Que dit-il ?"],
          ["4) Et toi, comment tu dis ton prénom ?"],
        ] },
        app: { paras: [
          ["R.A. : Elle dit ", { t: "« Bonjour ! »", r: true }, "."],
          ["R.A. : ", { t: "« Je m'appelle Rova. »", r: true }],
          ["R.A. : ", { t: "« Je m'appelle Koto. »", r: true }],
          ["R.A. : ", { t: "« Je m'appelle... »", r: true }, " (chaque élève essaie)."],
        ] },
        technique: ["Question / réponse"], support: "Image « je m'appelle »",
      },
      synthese: {
        ens: ["Donc : pour me présenter, je dis : « Bonjour, je m'appelle... » suivi de mon prénom. Répétez après moi !"],
        app: ["Répètent en chœur : « Bonjour, je m'appelle... »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Tour de classe rapide : chaque élève se lève, dit « Bonjour, je m'appelle... » avec son prénom, puis se rassoit. On avance vite comme une vague !"],
        app: ["Se présentent chacun à leur tour en une phrase."],
        technique: ["Tour de classe"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["La maîtresse montre 3 élèves : chacun dit sa présentation complète de la séance."],
        app: ["R.A. : ", { t: "« Bonjour, je m'appelle... »", r: true }, " + le prénom de l'élève."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. JE M'APPELLE...",
        subs: [
          { t: "A. La formule magique", paras: [["Pour me présenter, je dis : « ", { t: "Bonjour, je m'appelle", k: true }, " ", { t: "Rova", k: true }, ". »"]] },
          { t: "B. Mon prénom et mon nom", paras: [
            ["Mon prénom : ", { t: "Je m'appelle Rova", k: true }, "."],
            ["Mon prénom et mon nom : ", { t: "Je m'appelle Rakotoarisoa Rova", k: true }, "."],
          ] },
        ],
        retenir: ["Je me présente avec : « ", { t: "Bonjour, je m'appelle...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète le dialogue (au tableau) :"], items: [
          ["La maîtresse : « Bonjour ! Comment tu t'appelles ? »"],
          ["L'élève : « ........................, je ........................ Koto. »"],
          ["La maîtresse : « Bienvenue Koto ! Et toi, la petite ? »"],
          ["Fara : « ........................, je m'........................ Fara. »"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Pour se présenter, on dit « Je m'appelle... ». → VRAI / FAUX"],
          ["b) On se présente sans dire bonjour. → VRAI / FAUX"],
          ["c) « Je m'appelle Rova » : Rova est un prénom. → VRAI / FAUX"],
          ["d) On dit « Tu m'appelles » pour se présenter. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu oral : à tour de rôle, présente-toi en une phrase complète. L'enseignant valide :"], items: [
          ["Élève 1 : « Bonjour, je m'appelle ............ » ....... / 2 pts"],
          ["Élève 2 : « Bonjour, je m'appelle ............ » ....... / 2 pts"],
          ["Élève 3 : « Bonjour, je m'appelle ............ » ....... / 2 pts"],
          ["La formule complète est respectée (bonjour + je m'appelle + prénom)."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["L'élève : « ", { t: "Bonjour", r: true }, ", je ", { t: "m'appelle", r: true }, " Koto. » — Fara : « ", { t: "Bonjour", r: true }, ", je m'", { t: "appelle", r: true }, " Fara. » (2 pts chacune)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " (1,5 pt) — b) ", { t: "FAUX", r: true }, " (1,5 pt) — c) ", { t: "VRAI", r: true }, " (1,5 pt) — d) ", { t: "FAUX", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque présentation complète vaut 2 pts (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 22 =================
    {
      n: 22, titre: "Tu as quel âge ? / j'ai... ans", titreFiche: "Dire son âge",
      objectif: "Demander l'âge et dire son âge : « Tu as quel âge ? — J'ai ... ans ».",
      supportFiche: "Cartes-chiffres (6, 7, 8), image « anniversaire », tableau noir.",
      image: null,
      revision: {
        ens: ["Présente-toi en une phrase ! (3 élèves)"],
        app: ["R.A. : ", { t: "« Bonjour, je m'appelle... »", r: true }, " + prénom."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Koto se présente : « Je m'appelle Koto ». La maîtresse demande encore quelque chose : elle veut savoir si Koto a 6 ans ou 7 ans. Que demande-t-elle ?"],
        app: ["Proposent : « Tu as quel âge ? »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à demander l'âge et à répondre : « Tu as quel âge ? — J'ai ... ans ». Après cette séance, vous saurez dire votre âge en français."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant joue une scène avec un élève volontaire : « — Bonjour ! — Bonjour ! — Tu as quel âge ? — J'ai 7 ans. »"],
        app: ["Observent et écoutent la scène modèle."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle question l'enseignant a-t-il posée ?"],
          ["2) Quelle a été la réponse de l'élève ?"],
          ["3) Hery a 8 ans. Que dit-il quand on lui demande son âge ?"],
          ["4) Et toi, tu as quel âge ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Tu as quel âge ? »", r: true }],
          ["R.A. : ", { t: "« J'ai 7 ans. »", r: true }],
          ["R.A. : ", { t: "« J'ai 8 ans. »", r: true }],
          ["R.A. : ", { t: "« J'ai ... ans. »", r: true }, " (plusieurs élèves répondent)."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-chiffres",
      },
      synthese: {
        ens: ["Donc : pour demander l'âge, je dis « Tu as quel âge ? ». Pour répondre, je dis « J'ai ... ans ». Répétez le dialogue !"],
        app: ["Répètent en chœur : « Tu as quel âge ? — J'ai 7 ans ! »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de la boule de neige par binômes : A demande « Tu as quel âge ? », B répond « J'ai ... ans », puis on échange les rôles. Ensuite on change de binôme !"],
        app: ["Se posent la question et répondent, puis changent de binôme."],
        technique: ["Jeu de rôle en binômes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["La maîtresse montre une carte-chiffre (8). L'élève fait sa phrase complète."],
        app: ["R.A. : ", { t: "« J'ai 8 ans. »", r: true }],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. TU AS QUEL ÂGE ? J'AI ... ANS",
        subs: [
          { t: "A. Pour demander", paras: [["Je demande : « ", { t: "Tu as quel âge", k: true }, " ? »"]] },
          { t: "B. Pour répondre", paras: [["Je réponds : « ", { t: "J'ai", k: true }, " ", { t: "7 ans", k: true }, ". »"]] },
          { t: "C. La présentation complète", paras: [["« Bonjour, je m'appelle Koto. ", { t: "J'ai 7 ans", k: true }, ". »"]] },
        ],
        retenir: ["Question : « ", { t: "Tu as quel âge ?", k: true }, " » — Réponse : « ", { t: "J'ai ... ans.", k: true }, " »"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète les dialogues (au tableau) :"], items: [
          ["a) Rova : « Tu as quel .............. ? »"],
          ["b) Koto : « J'.............. 7 .............. »"],
          ["c) La maîtresse : « Et toi Soa ? »"],
          ["d) Soa : « J'.............. 6 .............. »"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Pour demander l'âge : « Tu as quel âge ? » → VRAI / FAUX"],
          ["b) Pour répondre : « J'ai 7 ans. » → VRAI / FAUX"],
          ["c) On répond : « Je suis 7 ans. » → VRAI / FAUX"],
          ["d) Avant de répondre, on peut dire bonjour. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse montre une carte-chiffre. Tu fais ta phrase complète :"], items: [
          ["Carte « 6 » → « ............ » ....... / 1,5 pt"],
          ["Carte « 7 » → « ............ » ....... / 1,5 pt"],
          ["Carte « 8 » → « ............ » ....... / 1,5 pt"],
          ["La phrase est complète et correcte (« J'ai ... ans. »)."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) quel ", { t: "âge", r: true }, " — b) J'", { t: "ai", r: true }, " 7 ", { t: "ans", r: true }, " — c) (question) — d) J'", { t: "ai", r: true }, " 6 ", { t: "ans", r: true }, " (2 pts chacune)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "VRAI", r: true }, " — c) ", { t: "FAUX", r: true }, " — d) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["« J'ai 6 ans. » / « J'ai 7 ans. » / « J'ai 8 ans. » (1,5 pt chacune)."]] },
      ],
    },

    // ================= SÉANCE 23 =================
    {
      n: 23, titre: "Je suis de... / je viens de...", titreFiche: "Dire d'où l'on vient, où l'on habite",
      objectif: "Dire où l'on habite : « J'habite à... » / « Je suis de... ».",
      supportFiche: "Image « j'habite à » (maison + panneau du village), tableau noir.",
      image: { file: "s23_jhabite.png", w: 1100, h: 520, legende: "J'habite à Antsirabe ! Je suis d'Antsirabe." },
      revision: {
        ens: ["« Tu as quel âge ? » (à 3 élèves) — Fais ta présentation en 2 phrases (prénom + âge)."],
        app: ["R.A. : ", { t: "« J'ai ... ans. »", r: true }, " — ", { t: "« Je m'appelle..., j'ai ... ans. »", r: true }],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Un élève d'une autre école demande à Tiana : « Tu viens d'où ? ». Que doit répondre Tiana ?"],
        app: ["Proposent leurs idées (nom du village, de la ville...)."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à dire où nous habitons : « J'habite à... » et « Je suis de... ». Après cette séance, vous saurez compléter votre présentation !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que voit-on à côté de l'enfant ? Que dit l'enfant ?"],
        app: ["Observent silencieusement l'image, puis répondent."],
        technique: ["Observation guidée"], support: "Image « j'habite à »",
      },
      analyse: {
        ens: { paras: [
          ["1) Où habite l'enfant de l'image ?"],
          ["2) Comment le dit-il ?"],
          ["3) Une autre façon de dire la même chose ?"],
          ["4) Et toi, tu habites où ?"],
        ] },
        app: { paras: [
          ["R.A. : À ", { t: "Antsirabe", r: true }, "."],
          ["R.A. : ", { t: "« J'habite à Antsirabe. »", r: true }],
          ["R.A. : ", { t: "« Je suis d'Antsirabe. »", r: true }, " / ", { t: "« Je viens d'Antsirabe. »", r: true }],
          ["R.A. : ", { t: "« J'habite à... »", r: true }, " (chaque élève avec son village)."],
        ] },
        technique: ["Question / réponse"], support: "Image « j'habite à »",
      },
      synthese: {
        ens: ["Donc : pour dire où j'habite, je dis « J'habite à... » ou « Je suis de... ». Répétez avec le nom de votre village !"],
        app: ["Répètent en chœur puis individuellement avec leur village."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu du voyageur : un élève fait semblant d'arriver en classe et demande « Tu viens d'où ? ». L'élève désigné répond avec son village. Puis on change de voyageur."],
        app: ["Demandent et répondent avec leur village."],
        technique: ["Jeu de rôle"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites où vous habitez en une phrase complète."],
        app: ["R.A. : ", { t: "« J'habite à... »", r: true }, " / ", { t: "« Je suis de... »", r: true }, " + village."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. J'HABITE À... / JE SUIS DE...",
        subs: [
          { t: "A. Dire où j'habite", paras: [["Je dis : « ", { t: "J'habite à", k: true }, " ", { t: "Antsirabe", k: true }, ". »"]] },
          { t: "B. Dire d'où je viens", paras: [["Je peux dire aussi : « ", { t: "Je suis de", k: true }, " ", { t: "Antsirabe", k: true }, ". » ou « ", { t: "Je viens de", k: true }, " Antsirabe. »"]] },
        ],
        retenir: ["Pour dire mon village : « ", { t: "J'habite à...", k: true }, " » ou « ", { t: "Je suis de...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec le nom de ton village ou de ta ville :"], items: [
          ["a) J'habite à .........................."],
          ["b) Je suis de .........................."],
          ["c) Je viens de .........................."],
          ["d) Mon camarade habite à .........................."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) « J'habite à Antsirabe » dit où je vis. → VRAI / FAUX"],
          ["b) On dit « J'habite dans à Fenoarivo ». → VRAI / FAUX"],
          ["c) « Je viens de Mahajanga » = mon village est Mahajanga. → VRAI / FAUX"],
          ["d) On peut demander « Tu viens d'où ? ». → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque question à sa réponse :"], items: [
          ["Tu viens d'où ? • • J'ai 7 ans."],
          ["Tu as quel âge ? • • Je m'appelle Rova."],
          ["Comment tu t'appelles ? • • J'habite à Toamasina."],
          ["(une réponse en trop : « Bonjour ! »)"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Réponses libres : le nom du village/la ville de l'élève (2 pts chacune). Exemples : ", { t: "Fenoarivo, Antsirabe, Mahajanga, Toamasina, Fianarantsoa", r: true }, "."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "FAUX", r: true }, " — c) ", { t: "VRAI", r: true }, " — d) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Tu viens d'où ? → ", { t: "J'habite à Toamasina", r: true }, " — Tu as quel âge ? → ", { t: "J'ai 7 ans", r: true }, " — Comment tu t'appelles ? → ", { t: "Je m'appelle Rova", r: true }, " (2 pts chacune)."]] },
      ],
    },

    // ================= SÉANCE 24 =================
    {
      n: 24, titre: "Ma présentation en 3 phrases", titreFiche: "Ma présentation en 3 phrases",
      objectif: "Faire sa présentation complète : prénom, âge, village.",
      supportFiche: "Affiche « ma présentation en 3 phrases », tableau noir.",
      image: { file: "s24_3phrases.png", w: 1100, h: 620, legende: "1. Bonjour ! Je m'appelle Soa. 2. J'ai 7 ans. 3. J'habite à Fianarantsoa." },
      revision: {
        ens: ["« Tu viens d'où ? » (à 3 élèves) — Répondez en une phrase complète."],
        app: ["R.A. : ", { t: "« J'habite à... / Je suis de... »", r: true }, " + village."],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Un monsieur visite notre école. Il demande : « Présentez-vous, les enfants ! ». Comment fait-on une vraie présentation complète ?"],
        app: ["Proposent : on dit son prénom, son âge, son village..."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons faire notre présentation complète en 3 phrases. Après cette séance, vous saurez vous présenter comme des champions !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Lisiez chaque phrase dans votre tête : que contient la présentation de Soa ?"],
        app: ["Observent silencieusement les 3 phrases de l'affiche."],
        technique: ["Observation guidée"], support: "Affiche « ma présentation »",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle est la première phrase de Soa ?"],
          ["2) Quelle est la deuxième phrase ?"],
          ["3) Quelle est la troisième phrase ?"],
          ["4) Dans quel ordre dit-on les 3 phrases ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Bonjour ! Je m'appelle Soa. »", r: true }],
          ["R.A. : ", { t: "« J'ai 7 ans. »", r: true }],
          ["R.A. : ", { t: "« J'habite à Fianarantsoa. »", r: true }],
          ["R.A. : Le ", { t: "prénom", r: true }, ", puis l'", { t: "âge", r: true }, ", puis le ", { t: "village", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « ma présentation »",
      },
      synthese: {
        ens: ["Donc : ma présentation complète = bonjour + je m'appelle... + j'ai ... ans + j'habite à... Trois phrases bien dans cet ordre !"],
        app: ["Répètent le schéma des 3 phrases en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Chaque élève prépare sa présentation en 3 phrases (1 minute de préparation), puis 4 ou 5 élèves la disent devant la classe. Les autres vérifient : 3 phrases bien dans l'ordre ?"],
        app: ["Préparent, puis présentent ; la classe vérifie l'ordre et les 3 phrases."],
        technique: ["Présentation individuelle"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["2 élèves volontaires font leur présentation complète. La classe compte les phrases et valide."],
        app: ["R.A. : présentation complète : ", { t: "je m'appelle... / j'ai ... ans / j'habite à...", r: true }],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MA PRÉSENTATION EN 3 PHRASES",
        subs: [
          { t: "A. Les 3 phrases", paras: [
            ["1. « ", { t: "Bonjour ! Je m'appelle", k: true }, " Soa. » (mon prénom)"],
            ["2. « ", { t: "J'ai 7 ans", k: true }, ". » (mon âge)"],
            ["3. « ", { t: "J'habite à Fianarantsoa", k: true }, ". » (mon village)"],
          ] },
          { t: "B. L'ordre", paras: [["Toujours : ", { t: "prénom", k: true }, " → ", { t: "âge", k: true }, " → ", { t: "village", k: true }, "."]] },
        ],
        retenir: ["Ma présentation : ", { t: "prénom", k: true }, " + ", { t: "âge", k: true }, " + ", { t: "village", k: true }, ", dans cet ordre !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Remets les phrases de la présentation de Lanto dans le bon ordre (1, 2, 3) :"], items: [
          ["« J'habite à Mahajanga. » → n° ...."],
          ["« Bonjour ! Je m'appelle Lanto. » → n° ...."],
          ["« J'ai 8 ans. » → n° ...."],
          ["Ensuite, dis la présentation complète de Lanto à voix haute !"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète la présentation de Fara :"], items: [
          ["a) « Bonjour ! Je m'.............. Fara. »"],
          ["b) « J'.............. 6 ans. »"],
          ["c) « J'.............. à Fenoarivo. »"],
          ["d) « Au .............. Madame ! »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["À toi ! Dis ta présentation complète en 3 phrases devant la classe :"], items: [
          ["Phrase 1 (mon prénom) : ....... / 2 pts"],
          ["Phrase 2 (mon âge) : ....... / 2 pts"],
          ["Phrase 3 (mon village) : ....... / 2 pts"],
          ["L'ordre des 3 phrases est respecté."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Ordre : phrase 2 → ", { t: "n° 1", r: true }, " (2 pts) — phrase 3 → ", { t: "n° 2", r: true }, " (2 pts) — phrase 1 → ", { t: "n° 3", r: true }, " (2 pts) — puis récitation complète (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) m'", { t: "appelle", r: true }, " — b) J'", { t: "ai", r: true }, " — c) J'", { t: "habite", r: true }, " — d) Au ", { t: "revoir", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale : chaque phrase correcte vaut 2 pts (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 25 =================
    {
      n: 25, titre: "Parler de moi ou d'un autre", titreFiche: "Parler de moi ou à quelqu'un d'autre",
      objectif: "Distinguer « je » (moi) et « tu » (l'autre) dans les questions et les réponses.",
      supportFiche: "Deux marionnettes (ou deux élèves volontaires), tableau noir.",
      image: null,
      revision: {
        ens: ["Fais ta présentation complète ! (2 élèves) — Citez les 3 phrases dans l'ordre."],
        app: ["R.A. : ", { t: "« Je m'appelle... / J'ai ... ans. / J'habite à... »", r: true }],
        technique: ["Individuel oral"],
      },
      miseEnSituation: {
        ens: ["Soa dit : « Je m'appelle Soa ». Elle demande à Koto : « Et toi ? ». Est-ce que Koto répond « Je m'appelle Soa » ? Pourquoi non ?"],
        app: ["Proposent : non, il dit son propre prénom..."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la différence entre parler de moi (« je ») et parler à l'autre (« tu »). Après cette séance, vous ne mélangerez plus les deux !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » Deux élèves volontaires jouent le dialogue montré par l'enseignant : « — Comment tu t'appelles ? — Je m'appelle Koto. — Tu as quel âge ? — J'ai 7 ans. »"],
        app: ["Observent le dialogue joué devant la classe."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Quand Soa demande, quel mot utilise-t-elle : « tu » ou « je » ?"],
          ["2) Quand Koto répond, quel mot utilise-t-il : « tu » ou « je » ?"],
          ["3) « Tu t'appelles comment ? » : qui parle de qui ?"],
          ["4) « Je m'appelle Koto » : qui parle de qui ?"],
        ] },
        app: { paras: [
          ["R.A. : Elle utilise ", { t: "« tu »", r: true }, " (l'autre)."],
          ["R.A. : Il utilise ", { t: "« je »", r: true }, " (moi)."],
          ["R.A. : On demande le ", { t: "prénom de l'autre", r: true }, "."],
          ["R.A. : Je parle ", { t: "de moi", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : « je », c'est pour parler de moi. « Tu », c'est pour parler à l'autre. Je demande avec « tu », je réponds avec « je » !"],
        app: ["Répètent la règle : je = moi, tu = l'autre."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des questions en chaîne : l'élève 1 demande à l'élève 2 « Comment tu t'appelles ? Tu as quel âge ? Tu viens d'où ? ». L'élève 2 répond avec « je », puis pose les questions à l'élève 3. Et ainsi de suite !"],
        app: ["Questionnent avec « tu » et répondent avec « je » en chaîne."],
        technique: ["Jeu en chaîne"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Si je dis « Tu as quel âge ? », je parle de moi ou de l'autre ? — Et si je réponds « J'ai 7 ans » ?"],
        app: ["R.A. : De ", { t: "l'autre", r: true }, ". — De ", { t: "moi", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. PARLER DE MOI OU À L'AUTRE",
        subs: [
          { t: "A. « JE » : moi", paras: [["Je réponds avec ", { t: "« je »", k: true }, " : ", { t: "« Je m'appelle Koto. »", k: true }, ", ", { t: "« J'ai 7 ans. »", k: true }]] },
          { t: "B. « TU » : l'autre", paras: [["Je demande avec ", { t: "« tu »", k: true }, " : ", { t: "« Tu t'appelles comment ? »", k: true }, ", ", { t: "« Tu as quel âge ? »", k: true }]] },
        ],
        retenir: ["", { t: "Je", k: true }, " = moi — ", { t: "tu", k: true }, " = l'autre. Je demande avec ", { t: "tu", k: true }, ", je réponds avec ", { t: "je", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec je ou tu :"], items: [
          ["a) « Comment .............. t'appelles ? »"],
          ["b) « .............. m'appelle Rova. »"],
          ["c) « .............. as quel âge ? »"],
          ["d) « .............. ai 6 ans. »"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Pour demander le prénom : « Tu t'appelles comment ? » → VRAI / FAUX"],
          ["b) Pour répondre : « Tu m'appelles Koto. » → VRAI / FAUX"],
          ["c) « J'ai 7 ans » parle de moi. → VRAI / FAUX"],
          ["d) « Tu as quel âge ? » parle de moi. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Le maître ou la maîtresse dit une phrase. Tu réponds : je ou tu ?"], items: [
          ["1) « ....... m'appelle Soa. »"],
          ["2) « ....... viens d'où ? » (question à l'autre)"],
          ["3) « .......... as quel âge ? » (question à l'autre)"],
          ["4) « ........ ai 7 ans. »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "tu", r: true }, " — b) ", { t: "Je", r: true }, " — c) ", { t: "Tu", r: true }, " — d) ", { t: "Je", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "FAUX", r: true }, " — c) ", { t: "VRAI", r: true }, " — d) ", { t: "FAUX", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "Je", r: true }, " — 2) ", { t: "Tu", r: true }, " — 3) ", { t: "Tu", r: true }, " — 4) ", { t: "Je", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 26 =================
    {
      n: 26, titre: "Qui est-ce ? c'est...", titreFiche: "Qui est-ce ? — C'est...",
      objectif: "Employer la structure « Qui est-ce ? — C'est... » pour identifier quelqu'un.",
      supportFiche: "Images d'élèves et d'adultes de l'école, tableau noir.",
      image: { file: "s26_quiestce.png", w: 1100, h: 520, legende: "Qui est-ce ? — C'est Koto !" },
      revision: {
        ens: ["Complète : « Comment ....... t'appelles ? » / « ....... m'appelle Soa. » — Qui parle dans chaque phrase ?"],
        app: ["R.A. : ", { t: "tu", r: true }, " (l'autre) / ", { t: "je", r: true }, " (moi)."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image en cachant un visage) Regardez, quelqu'un se cache derrière le rideau de la classe ! Comment demande-t-on son nom à la classe ?"],
        app: ["Proposent : « Qui est-ce ? » / « C'est qui ? »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la structure « Qui est-ce ? — C'est... ». Après cette séance, vous saurez deviner et présenter des personnes !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Que demandent les deux enfants ? Que répond le deuxième enfant ?"],
        app: ["Observent silencieusement l'image, puis répondent."],
        technique: ["Observation guidée"], support: "Image « Qui est-ce ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle question pose le premier enfant ?"],
          ["2) Que répond le deuxième enfant ?"],
          ["3) Si c'est une fille qui se cache, que répond-on ? (« C'est... »)"],
          ["4) Devine : (montrer l'image de la directrice) Qui est-ce ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Qui est-ce ? »", r: true }],
          ["R.A. : ", { t: "« C'est Koto ! »", r: true }],
          ["R.A. : ", { t: "« C'est Fara ! »", r: true }, " (avec le prénom)."],
          ["R.A. : ", { t: "« C'est la directrice ! »", r: true }],
        ] },
        technique: ["Question / réponse"], support: "Images d'élèves et d'adultes",
      },
      synthese: {
        ens: ["Donc : pour demander qui c'est, je dis « Qui est-ce ? ». Pour répondre, je dis « C'est... » avec le prénom ou le nom de la personne."],
        app: ["Répètent : « Qui est-ce ? — C'est... »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des devinettes images : je montre une image en la cachant presque, les élèves demandent « Qui est-ce ? » en chœur, puis un élève devine : « C'est... »."],
        app: ["Demandent en chœur et devinent individuellement."],
        technique: ["Jeu de devinettes"], support: "Images cachées",
      },
      evaluation: {
        ens: ["(montrer une image d'élève) « Qui est-ce ? » — (montrer une autre) « Qui est-ce ? »"],
        app: ["R.A. : ", { t: "« C'est... »", r: true }, " + le bon prénom."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. QUI EST-CE ? C'EST...",
        subs: [
          { t: "A. Pour demander", paras: [["Je demande : « ", { t: "Qui est-ce", k: true }, " ? » (c'est qui ?)"]] },
          { t: "B. Pour répondre", paras: [["Je réponds : « ", { t: "C'est", k: true }, " Koto. » / « ", { t: "C'est", k: true }, " la directrice. »"]] },
        ],
        retenir: ["Question : « ", { t: "Qui est-ce ?", k: true }, " » — Réponse : « ", { t: "C'est...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète les dialogues :"], items: [
          ["a) « Qui .............. ? »"],
          ["b) « .............. Koto ! »"],
          ["c) « .............. est-ce ? » (une autre façon de demander)"],
          ["d) « C'est .............. la maîtresse ! » (prénom ou mot qui va avec)"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Pour demander : « Qui est-ce ? » → VRAI / FAUX"],
          ["b) Pour répondre : « C'est Rova. » → VRAI / FAUX"],
          ["c) On répond : « Qui est Koto ! » → VRAI / FAUX"],
          ["d) « C'est... » sert à présenter quelqu'un. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu de devinettes : la maîtresse montre 4 images. Devine à chaque fois :"], items: [
          ["Image 1 → « C'est .............. » ....... / 1,5 pt"],
          ["Image 2 → « C'est .............. » ....... / 1,5 pt"],
          ["Image 3 → « C'est .............. » ....... / 1,5 pt"],
          ["Image 4 → « C'est .............. » ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) « Qui ", { t: "est-ce", r: true }, " ? » — b) « ", { t: "C'est", r: true }, " Koto ! » — c) « ", { t: "Qui", r: true }, " est-ce ? » — d) « C'est ", { t: "Madame / Monsieur", r: true }, " la maîtresse ! » (2 pts chacune)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "VRAI", r: true }, " — c) ", { t: "FAUX", r: true }, " — d) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : chaque bonne devination avec « C'est... » = 1,5 pt (total 6 pts)."]] },
      ],
    },

    // ================= SÉANCE 27 =================
    {
      n: 27, titre: "C'est... (ma famille)", titreFiche: "Présenter sa famille",
      objectif: "Présenter les membres de sa famille : « C'est mon papa / ma maman / mon frère / ma sœur ».",
      supportFiche: "Image « ma famille », dessins ou photos de famille apportés par les élèves (facultatif).",
      image: { file: "s27_famille.png", w: 1100, h: 560, legende: "C'est mon papa, ma maman, mon frère, ma sœur... c'est ma famille !" },
      revision: {
        ens: ["(montrer une image) « Qui est-ce ? » — Répondez tous en chœur !"],
        app: ["R.A. : ", { t: "« C'est... »", r: true }, " + le nom de la personne."],
        technique: ["Question / réponse collective"],
      },
      miseEnSituation: {
        ens: ["Rova montre une photo à son amie : « Regarde ! ». Comment Rova présente-t-elle les personnes de sa photo ?"],
        app: ["Proposent : « C'est ma maman... », « C'est mon papa... »"],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à présenter les membres de notre famille : « C'est mon... / C'est ma... ». Après cette séance, vous saurez présenter votre famille en français !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Combien de personnes voyez-vous ? Qui sont-elles ?"],
        app: ["Observent silencieusement l'image de la famille, puis comptent et nomment."],
        technique: ["Observation guidée"], support: "Image « ma famille »",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment dit-on « papa » avec « mon » ou « ma » ?"],
          ["2) Comment dit-on « maman » : mon ou ma ?"],
          ["3) Le frère : « mon frère » ou « ma frère » ?"],
          ["4) La sœur : « mon sœur » ou « ma sœur » ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Mon papa »", r: true }, "."],
          ["R.A. : ", { t: "« Ma maman »", r: true }, "."],
          ["R.A. : ", { t: "« Mon frère »", r: true }, "."],
          ["R.A. : ", { t: "« Ma sœur »", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « ma famille »",
      },
      synthese: {
        ens: ["Donc : pour présenter ma famille, je dis « C'est mon papa, ma maman, mon frère, ma sœur ». Mon pour les garçons et les hommes, ma pour les filles et les femmes !"],
        app: ["Répètent en chœur : mon papa — ma maman — mon frère — ma sœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Chaque élève mime une personne de sa famille (le papa avec une grande voix, le bébé qui pleure...). Les autres devinent : « C'est ton papa ! » / « C'est ta petite sœur ! »"],
        app: ["Miment et devinent en utilisant « C'est ton/ta... »."],
        technique: ["Jeu de mime"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : montrez (ou mimez) et dites deux membres de votre famille en phrases complètes."],
        app: ["R.A. : ", { t: "« C'est mon papa. »", r: true }, " / ", { t: "« C'est ma sœur. »", r: true }, "..."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MA FAMILLE : C'EST MON... / C'EST MA...",
        subs: [
          { t: "A. Avec MON (garçon / homme)", paras: [[{ t: "C'est mon papa", k: true }, ". — ", { t: "C'est mon frère", k: true }, "."]] },
          { t: "B. Avec MA (fille / femme)", paras: [[{ t: "C'est ma maman", k: true }, ". — ", { t: "C'est ma sœur", k: true }, "."]] },
        ],
        retenir: ["Je présente ma famille : « C'est ", { t: "mon", k: true }, " papa, ", { t: "ma", k: true }, " maman, ", { t: "mon", k: true }, " frère, ", { t: "ma", k: true }, " sœur. »"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec mon ou ma :"], items: [
          ["a) C'est ....... maman."],
          ["b) C'est ....... papa."],
          ["c) C'est ....... frère."],
          ["d) C'est ....... sœur."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) On dit « ma papa ». → VRAI / FAUX"],
          ["b) On dit « mon frère ». → VRAI / FAUX"],
          ["c) « C'est ma maman » présente ma famille. → VRAI / FAUX"],
          ["d) MON va avec les filles. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie chaque membre de la famille au bon mot :"], items: [
          ["papa • • ma"],
          ["sœur • • ma"],
          ["maman • • mon"],
          ["frère • • mon"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "ma", r: true }, " — b) ", { t: "mon", r: true }, " — c) ", { t: "mon", r: true }, " — d) ", { t: "ma", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "FAUX", r: true }, " — b) ", { t: "VRAI", r: true }, " — c) ", { t: "VRAI", r: true }, " — d) ", { t: "FAUX", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["papa → ", { t: "mon", r: true }, " — sœur → ", { t: "ma", r: true }, " — maman → ", { t: "ma", r: true }, " — frère → ", { t: "mon", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 28 =================
    {
      n: 28, titre: "Il s'appelle... / elle s'appelle...", titreFiche: "Présenter un camarade",
      objectif: "Présenter quelqu'un : « Il s'appelle... » (garçon) / « Elle s'appelle... » (fille).",
      supportFiche: "Image « présenter un camarade », tableau noir.",
      image: null,
      revision: {
        ens: ["Complète : C'est ....... maman. — C'est ....... frère. — Présente deux membres de ta famille."],
        app: ["R.A. : ", { t: "ma", r: true }, " — ", { t: "mon", r: true }, " — phrases complètes acceptées."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Un monsieur demande à Soa : « Et ton camarade à côté, comment s'appelle-t-il ? ». Soa peut-elle dire « Je m'appelle Koto » ? Que doit-elle dire ?"],
        app: ["Proposent leurs idées (« Il s'appelle Koto »...)."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à présenter un autre élève : « Il s'appelle... » pour un garçon, « Elle s'appelle... » pour une fille. Après cette séance, vous saurez présenter vos camarades !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant montre Koto puis Fara et dit : « Il s'appelle Koto. — Elle s'appelle Fara. » Écoutez bien les deux phrases."],
        app: ["Écoutent les deux phrases modèles."],
        technique: ["Démonstration"], support: "Tableau noir",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle phrase pour présenter un garçon ?"],
          ["2) Quelle phrase pour présenter une fille ?"],
          ["3) « Il », c'est pour qui ? Et « elle » ?"],
          ["4) Présente ton voisin ou ta voisine !"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Il s'appelle... »", r: true }],
          ["R.A. : ", { t: "« Elle s'appelle... »", r: true }],
          ["R.A. : « Il » = ", { t: "un garçon", r: true }, ", « elle » = ", { t: "une fille", r: true }, "."],
          ["R.A. : ", { t: "« Il/Elle s'appelle... »", r: true }, " + le bon prénom."],
        ] },
        technique: ["Question / réponse"], support: "Tableau noir",
      },
      synthese: {
        ens: ["Donc : pour présenter un garçon, je dis « Il s'appelle... ». Pour présenter une fille, je dis « Elle s'appelle... ». Je ne dis jamais « je » pour un autre !"],
        app: ["Répètent : il s'appelle — elle s'appelle."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Par binômes : A présente B (« Il/Elle s'appelle..., il/elle a ... ans »), puis B présente A. On vérifie : garçon = il, fille = elle !"],
        app: ["Se présentent mutuellement avec « il » ou « elle »."],
        technique: ["Jeu en binômes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["(montrer 2 élèves, un garçon et une fille) Présente-les en deux phrases complètes."],
        app: ["R.A. : ", { t: "« Il s'appelle... — Elle s'appelle... »", r: true }, " + prénoms."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. IL S'APPELLE... / ELLE S'APPELLE...",
        subs: [
          { t: "A. Présenter un garçon", paras: [[{ t: "Il s'appelle", k: true }, " Koto. (il = un garçon)"]] },
          { t: "B. Présenter une fille", paras: [[{ t: "Elle s'appelle", k: true }, " Fara. (elle = une fille)"]] },
        ],
        retenir: ["Garçon : « ", { t: "Il s'appelle...", k: true }, " » — Fille : « ", { t: "Elle s'appelle...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Complète avec il ou elle :"], items: [
          ["a) .............. s'appelle Rova. (une fille)"],
          ["b) .............. s'appelle Lanto. (un garçon)"],
          ["c) .............. a 7 ans, c'est une fille."],
          ["d) .............. habite à Antsirabe, c'est un garçon."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX :"], items: [
          ["a) Pour un garçon : « Il s'appelle Koto. » → VRAI / FAUX"],
          ["b) Pour une fille : « Il s'appelle Soa. » → VRAI / FAUX"],
          ["c) « Elle s'appelle Fara. » : Fara est une fille. → VRAI / FAUX"],
          ["d) Pour présenter un autre, on dit « Je m'appelle ». → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Présente tes 2 camarades désignés par la maîtresse (2 phrases complètes) :"], items: [
          ["Camarade 1 (garçon) : « .............. » ....... / 1,5 pt"],
          ["Camarade 2 (fille) : « .............. » ....... / 1,5 pt"],
          ["Le mot il / elle est bien choisi à chaque fois."],
          ["Les prénoms sont corrects."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["a) ", { t: "Elle", r: true }, " — b) ", { t: "Il", r: true }, " — c) ", { t: "Elle", r: true }, " — d) ", { t: "Il", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "FAUX", r: true }, " — c) ", { t: "VRAI", r: true }, " — d) ", { t: "FAUX", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["« Il s'appelle... » + prénom (1,5 pt) — « Elle s'appelle... » + prénom (1,5 pt) — choix il/elle (1,5 pt) — prénoms corrects (1,5 pt)."]] },
      ],
    },

    // ================= SÉANCE 29 =================
    {
      n: 29, titre: "Devinettes de personnes", titreFiche: "Devinettes de personnes",
      objectif: "Identifier une personne d'après sa présentation décrite (jeu d'écoute).",
      supportFiche: "Cartes-présentations, tableau noir.",
      image: null,
      revision: {
        ens: ["Complète : garçon → « ....... s'appelle... » ; fille → « ....... s'appelle... »"],
        app: ["R.A. : ", { t: "Il", r: true }, " — ", { t: "Elle", r: true }, "."],
        technique: ["Question / réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Écoutez cette devinette : « Cette personne est une fille. Elle a 7 ans. Elle s'appelle... Soa ? Fara ? Koto ? ». Qui est-ce ?"],
        app: ["Écoutent et proposent une réponse."],
        technique: ["Question ouverte"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui, nous jouons aux devinettes : j'écoute la présentation et je trouve qui c'est. Après cette séance, votre oreille sera très entraînée aux présentations !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien. » L'enseignant lit une carte-présentation complète : « Il s'appelle Lanto. Il a 8 ans. Il habite à Mahajanga. » Les élèves écoutent sans répondre."],
        app: ["Écoutent attentivement la carte-présentation."],
        technique: ["Écoute du modèle"], support: "Cartes-présentations",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans la carte écoutée : garçon ou fille ? (il ou elle ?)"],
          ["2) Comment s'appelle-t-il ?"],
          ["3) Quel âge a-t-il ?"],
          ["4) Où habite-t-il ?"],
        ] },
        app: { paras: [
          ["R.A. : Un garçon (", { t: "il", r: true }, ")."],
          ["R.A. : Il s'appelle ", { t: "Lanto", r: true }, "."],
          ["R.A. : Il a ", { t: "8 ans", r: true }, "."],
          ["R.A. : Il habite à ", { t: "Mahajanga", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-présentations",
      },
      synthese: {
        ens: ["Donc : dans une devinette, j'écoute les 3 indices (il/elle, l'âge, le village) et je trouve la personne. J'écoute avant de répondre !"],
        app: ["Répètent les 3 indices à chercher."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Grand jeu de devinettes : 3 élèves reçoivent une carte chacun. L'enseignant lit une carte ; les élèves cherchent qui c'est et répondent par une phrase complète : « C'est... ! Il/Elle s'appelle... »"],
        app: ["Écoutent chaque carte et devinent en phrases complètes."],
        technique: ["Jeu de devinettes"], support: "Cartes-présentations",
      },
      evaluation: {
        ens: ["Dernière devinette : « Elle a 6 ans. Elle habite à Toamasina. Elle s'appelle Fara. » Qui est-ce ? Fais ta phrase complète."],
        app: ["R.A. : ", { t: "« C'est Fara ! Elle s'appelle Fara. »", r: true }],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. LES DEVINETTES DE PERSONNES",
        subs: [
          { t: "A. Les 3 indices", paras: [
            ["1. ", { t: "Il ou elle", k: true }, " ? (garçon ou fille)"],
            ["2. ", { t: "Quel âge", k: true }, " ?"],
            ["3. ", { t: "Où habite-t-il / elle", k: true }, " ?"],
          ] },
          { t: "B. Ma réponse", paras: [["Je réponds avec une phrase complète : « ", { t: "C'est...", k: true }, " ! ", { t: "Il/Elle s'appelle...", k: true }, " »"]] },
        ],
        retenir: ["Dans une devinette, je cherche 3 indices : ", { t: "il/elle", k: true }, ", l'", { t: "âge", k: true }, ", le ", { t: "village", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Écoute la carte du maître ou de la maîtresse puis réponds :"], items: [
          ["Carte 1 : « Elle s'appelle Tiana. Elle a 7 ans. Elle habite à Fianarantsoa. » → Fille ou garçon ? ......."],
          ["Carte 1 : Comment s'appelle-t-elle ? ......."],
          ["Carte 2 : « Il s'appelle Hery. Il a 8 ans. Il habite à Antsirabe. » → Garçon ou fille ? ......."],
          ["Carte 2 : Où habite-t-il ? ......."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure VRAI ou FAUX (d'après la carte 2) :"], items: [
          ["a) Il s'appelle Hery. → VRAI / FAUX"],
          ["b) Elle a 8 ans. → VRAI / FAUX"],
          ["c) Il habite à Fianarantsoa. → VRAI / FAUX"],
          ["d) C'est une fille. → VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["À toi d'inventer ! Décris un camarade (sans dire son prénom), la classe devine :"], items: [
          ["Mes indices : il ou elle : .............. âge : .............. village : .............."],
          ["Ma phrase devinette complète (dit à voix haute)."],
          ["La classe devine : « C'est... ! »"],
          ["La devinette a bien 3 indices et une réponse complète."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) Une ", { t: "fille", r: true }, " (2 pts) — 2) Elle s'appelle ", { t: "Tiana", r: true }, " (2 pts) — 3) Un ", { t: "garçon", r: true }, " (2 pts) — 4) Il habite à ", { t: "Antsirabe", r: true }, " (2 pts)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "VRAI", r: true }, " — b) ", { t: "FAUX", r: true }, " — c) ", { t: "FAUX", r: true }, " — d) ", { t: "FAUX", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Validation orale : 3 indices présents (3 pts) + devinette claire et réponse complète (3 pts)."]] },
      ],
    },

    // ================= SÉANCE 30 =================
    {
      n: 30, titre: "Bilan — se présenter et présenter", titreFiche: "Bilan — se présenter et présenter quelqu'un",
      objectif: "Réutiliser toutes les formules de présentation en contexte varié (bilan).",
      supportFiche: "Affiche « je sais me présenter », cartes-présentations, tableau noir.",
      image: { file: "s30_bilan.png", w: 1100, h: 720, legende: "L'affiche récapitulative : se présenter et présenter quelqu'un." },
      revision: {
        ens: ["Quiz rapide : une question, une réponse ! « Comment tu t'appelles ? » / « Tu as quel âge ? » / « Tu viens d'où ? » / « Qui est-ce ? »"],
        app: ["Répondent chacun à une question avec les formules complètes."],
        technique: ["Quiz rapide"],
      },
      miseEnSituation: {
        ens: ["Vous savez maintenant tout dire : votre prénom, votre âge, votre village, et présenter vos camarades ! Aujourd'hui, grand bilan avec un jeu de présentation."],
        app: ["Écoutent, motivés."], technique: ["Narration"], support: "Tableau noir",
      },
      presentation: {
        ens: ["Aujourd'hui : bilan du thème. Au programme : la présentation complète, la présentation d'un camarade et le grand jeu des cartes. Après cette séance, le thème 3 sera terminé !"],
        app: ["Écoutent les consignes."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Lisiez les phrases de l'affiche : que contient une présentation ? Et une présentation de camarade ?"],
        app: ["Observent silencieusement l'affiche récapitulative."],
        technique: ["Observation guidée"], support: "Affiche « je sais me présenter »",
      },
      analyse: {
        ens: { paras: [
          ["1) Les 3 phrases pour se présenter ?"],
          ["2) La phrase pour présenter un garçon ?"],
          ["3) La phrase pour présenter une fille ?"],
          ["4) La question pour demander qui c'est ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "« Je m'appelle... / J'ai ... ans. / J'habite à... »", r: true }],
          ["R.A. : ", { t: "« Il s'appelle... »", r: true }],
          ["R.A. : ", { t: "« Elle s'appelle... »", r: true }],
          ["R.A. : ", { t: "« Qui est-ce ? »", r: true }],
        ] },
        technique: ["Question / réponse"], support: "Affiche « je sais me présenter »",
      },
      synthese: {
        ens: ["Donc : résumé final — je me présente en 3 phrases, je présente un camarade avec il/elle s'appelle, je demande avec « Qui est-ce ? ». Répétons tout une dernière fois !"],
        app: ["Répètent toutes les formules en chœur."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Grand jeu final par groupes de 3 : chaque groupe prépare une petite scène — un élève arrive dans une nouvelle école, il se présente, un camarade le présente à la classe : « Il s'appelle..., il a ... ans, il habite à... ». Chaque groupe joue sa scène."],
        app: ["Jouent leur scène de présentation complète devant la classe."],
        technique: ["Mini-théâtre en groupes"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["2 élèves tirés au sort : « Présente-toi en 3 phrases, puis présente ton camarade. »"],
        app: ["R.A. : présentation complète + ", { t: "« Il/Elle s'appelle... »", r: true }, " avec les bons indices."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. JE SAIS ME PRÉSENTER ET PRÉSENTER",
        subs: [
          { t: "A. Me présenter", paras: [
            ["« ", { t: "Bonjour ! Je m'appelle", k: true }, " .... »"],
            ["« ", { t: "J'ai ... ans", k: true }, ". » — « ", { t: "J'habite à ...", k: true }, ". »"],
          ] },
          { t: "B. Présenter un autre", paras: [
            ["Garçon : « ", { t: "Il s'appelle", k: true }, " .... » — Fille : « ", { t: "Elle s'appelle", k: true }, " .... »"],
            ["Demander : « ", { t: "Qui est-ce", k: true }, " ? » — Répondre : « ", { t: "C'est...", k: true }, " »"],
          ] },
        ],
        retenir: ["Je me présente en ", { t: "3 phrases", k: true }, " et je présente un camarade avec ", { t: "il / elle s'appelle", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Relie chaque question à sa réponse :"], items: [
          ["Comment tu t'appelles ? • • J'habite à Antsirabe."],
          ["Tu as quel âge ? • • Je m'appelle Rova."],
          ["Tu viens d'où ? • • C'est la directrice."],
          ["Qui est-ce ? • • J'ai 6 ans."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète la scène du nouvel élève :"], items: [
          ["a) « Bonjour ! Je m'.............. Hery. »"],
          ["b) « J'.............. 7 ans. »"],
          ["c) « J'.............. à Toamasina. »"],
          ["Son camarade présente : « .............. s'appelle Hery. »"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu oral final : présente-toi en 3 phrases, puis présente ton voisin ou ta voisine en 1 phrase :"], items: [
          ["Ma présentation complète (3 phrases) ....... / 3 pts"],
          ["La présentation de mon voisin ou de ma voisine ....... / 2 pts"],
          ["Il / elle bien choisi ....... / 1 pt"],
          ["Validation par l'enseignant."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Comment tu t'appelles ? → ", { t: "Je m'appelle Rova", r: true }, " — Tu as quel âge ? → ", { t: "J'ai 6 ans", r: true }, " — Tu viens d'où ? → ", { t: "J'habite à Antsirabe", r: true }, " — Qui est-ce ? → ", { t: "C'est la directrice", r: true }, " (2 pts chacune)."]] },
        { titre: "Exercice 2", lines: [["a) m'", { t: "appelle", r: true }, " — b) J'", { t: "ai", r: true }, " — c) J'", { t: "habite", r: true }, " — d) ", { t: "Il", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale : présentation complète (3 pts) + présentation du camarade (2 pts) + il/elle correct (1 pt)."]] },
      ],
    },
  ],
};

module.exports = { theme3, DOC };
