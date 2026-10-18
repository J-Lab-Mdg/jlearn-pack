// ============================================================
// data-theme1.js — CP2 (10ème) — UNITÉ 1 : LES FORMULES DE
// PRÉSENTATION (1-12)
// Sous-disciplines variables (EO / Lecture / Écriture) via la
// clé sd par séance — contenu repris du manuel existant
// « Francais_10e_JLearn_V2 » (fiches 1-4, 12 jours), enrichi
// et mis aux normes skill v18 (barème /20, ≥4 items).
// ============================================================

const DOC = "Programme officiel RAPS — Français 10ème";

const theme1 = {
  numero: 1,
  nom: "Les formules de présentation",
  sousDiscipline: "Expression Orale",
  notions: "BONJOUR — JE M'APPELLE — VOICI — IL/ELLE S'APPELLE — QUI EST-CE ? — C'EST — DIALOGUE — AU REVOIR — SON É — SONS È, Ê — BÉBÉ — ÉCOLE — VÉLO — CAFÉ — MÈRE — FÊTE",
  competences: [
    "Se présenter en donnant son prénom : « Bonjour ! Je m'appelle... »",
    "Présenter une autre personne : « Voici... Il/Elle s'appelle... »",
    "Jouer un dialogue complet de présentation (bonjour, prénom, au revoir).",
    "Demander et dire qui est une personne : « Qui est-ce ? — C'est... »",
    "Reconnaître et lire le son é dans des mots et de courtes phrases.",
    "Reconnaître et lire les sons è et ê dans des mots.",
    "Écrire des mots et de courtes phrases avec é, è, ê.",
  ],
  seances: [
    // ================= SÉANCE 1 =================
    {
      n: 1, titre: "Je m'appelle...", titreFiche: "Se présenter : « Je m'appelle... »",
      sd: "Expression Orale",
      objectif: "Se présenter en donnant son prénom : « Bonjour ! Je m'appelle... ».",
      supportFiche: "Image « je me présente », ardoise, tableau noir.",
      image: { file: "s1_je_mappelle.png", w: 1100, h: 560, legende: "« Bonjour ! Je m'appelle Rova. »" },
      revision: {
        ens: ["Bonjour les enfants ! Comment allez-vous aujourd'hui ?"],
        app: ["R.A. : « Bonjour maître/maîtresse ! Nous allons bien, merci ! »"],
        technique: ["Salutation collective"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image d'un enfant qui lève la main) Regardez cette image. Cet enfant se présente à ses camarades. Que dit-il, à votre avis ?"],
        app: ["Observent et proposent librement (en malgache ou en français)."],
        technique: ["Question ouverte"], support: "Image « je me présente »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à nous présenter en français : dire notre prénom."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["Écoutez bien : « Bonjour ! Je m'appelle Rova. » (répète la phrase deux fois, lentement, en pointant l'image)."],
        app: ["Écoutent attentivement sans répéter."],
        technique: ["Écoute active"], support: "Image + phrase modèle au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Que dit l'enfant pour dire bonjour ?"],
          ["2) Que dit-il ensuite pour donner son prénom ?"],
          ["3) Répète la phrase complète."],
          ["4) Où pose-t-on la main quand on se présente ?"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Bonjour !", r: true }, " »"],
          ["R.A. : « ", { t: "Je m'appelle Rova.", r: true }, " »"],
          ["R.A. : « ", { t: "Bonjour ! Je m'appelle...", r: true }, " » (+ prénom)."],
          ["R.A. : Sur ", { t: "la poitrine", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « je me présente »",
      },
      synthese: {
        ens: ["Donc : pour se présenter, on dit : « Bonjour ! Je m'appelle... » et on donne son prénom, la main sur la poitrine. Répétez en chœur trois fois !"],
        app: ["Répètent la phrase en chœur en mimant le geste (main sur la poitrine)."],
        technique: ["Répétition collective avec geste"], support: "Tableau noir",
      },
      application: {
        ens: ["À ton tour ! Lève-toi et dis : « Bonjour ! Je m'appelle... » avec ton prénom. (fait passer 5 à 6 élèves)"],
        app: ["Se lèvent chacun leur tour et disent la phrase avec leur propre prénom."],
        technique: ["Passage individuel devant la classe"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["L'enseignant demande à chaque élève, à tour de rôle : « Comment tu t'appelles ? »"],
        app: ["R.A. : « ", { t: "Je m'appelle...", r: true }, " » (+ prénom)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. SE PRÉSENTER",
        subs: [
          { t: "A. La formule", paras: [["« ", { t: "Bonjour ! Je m'appelle Rova.", k: true }, " »"]] },
          { t: "B. Le geste", paras: [["Je dis mon prénom avec la main sur ", { t: "la poitrine", k: true }, "."]] },
        ],
        retenir: ["Pour se présenter : « ", { t: "Bonjour ! Je m'appelle...", k: true }, " » + mon prénom."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure la phrase pour se présenter :"], items: [
          ["1) Bonjour ! Je m'appelle Rova."],
          ["2) Au revoir, maman !"],
          ["3) Merci, maîtresse !"],
          ["4) Bonjour ! Je m'appelle Soa."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec je m'appelle :"], items: [
          ["1) Bonjour ! ............ Koto."],
          ["2) ............ Fara."],
          ["3) Bonjour ! ............ Hery."],
          ["4) ............ Tiana."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Lève-toi et présente-toi. La maîtresse observe :"], items: [
          ["1) Je dis « Bonjour ! » ....... / 1,5 pt"],
          ["2) Je dis « Je m'appelle... » ....... / 1,5 pt"],
          ["3) Je donne mon prénom ....... / 1,5 pt"],
          ["4) Je parle fort ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Phrases à entourer : ", { t: "1 et 4", r: true }, " (4 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "Je m'appelle", r: true }, " (1,5 pt) — 2) ", { t: "Je m'appelle", r: true }, " (1,5 pt) — 3) ", { t: "Je m'appelle", r: true }, " (1,5 pt) — 4) ", { t: "Je m'appelle", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 2 =================
    {
      n: 2, titre: "Voici... Il / Elle s'appelle...", titreFiche: "Présenter quelqu'un : « Voici... Il/Elle s'appelle... »",
      sd: "Expression Orale",
      objectif: "Présenter une autre personne : « Voici... Il/Elle s'appelle... » (garçon / fille).",
      supportFiche: "Images de deux enfants (garçon, fille), ardoise, tableau noir.",
      image: { file: "s2_voici.png", w: 1100, h: 560, legende: "Voici Koto. Il s'appelle Koto. — Voici Soa. Elle s'appelle Soa." },
      revision: {
        ens: ["Comment tu t'appelles ? (tour de classe rapide)"],
        app: ["R.A. : « ", { t: "Je m'appelle...", r: true }, " » (chaque élève donne son prénom)."],
        technique: ["Question-réponse rapide"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image de deux enfants côte à côte : Koto et Soa) Voici deux enfants. Comment pouvons-nous les présenter à la classe ?"],
        app: ["Observent et essaient de répondre librement."],
        technique: ["Observation collective"], support: "Image « voici Koto et Soa »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre à présenter une autre personne : un garçon ou une fille."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["Écoute : « Voici Koto. Il s'appelle Koto. » — « Voici Soa. Elle s'appelle Soa. » (répète chaque phrase deux fois en montrant l'image correspondante)."],
        app: ["Écoutent attentivement."],
        technique: ["Écoute active"], support: "Images + phrases modèles au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Quel mot utilise-t-on pour présenter un garçon : « Il » ou « Elle » ?"],
          ["2) Quel mot utilise-t-on pour présenter une fille ?"],
          ["3) Présente Koto avec la formule complète."],
          ["4) Présente Soa avec la formule complète."],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Il", r: true }, " s'appelle Koto. »"],
          ["R.A. : « ", { t: "Elle", r: true }, " s'appelle Soa. »"],
          ["R.A. : « ", { t: "Voici Koto. Il s'appelle Koto.", r: true }, " »"],
          ["R.A. : « ", { t: "Voici Soa. Elle s'appelle Soa.", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Images de deux enfants",
      },
      synthese: {
        ens: ["Donc : pour présenter un garçon, je dis « Voici... Il s'appelle... ». Pour présenter une fille, je dis « Voici... Elle s'appelle... ». Mimez le geste de présentation !"],
        app: ["Répètent les deux phrases en chœur en reproduisant le geste (main tendue vers le camarade)."],
        technique: ["Mime et répétition collective"], support: "Tableau noir",
      },
      application: {
        ens: ["Par deux, présente ton/ta camarade à la classe avec « Voici... Il/Elle s'appelle... »."],
        app: ["Travaillent en binômes, puis 4 binômes présentent devant la classe."],
        technique: ["Travail en binôme"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Montre l'image d'un garçon puis d'une fille et demande : « Présente cet enfant. »"],
        app: ["R.A. : « ", { t: "Voici... Il/Elle s'appelle...", r: true }, " » correct."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "2. PRÉSENTENTER QUELQU'UN",
        subs: [
          { t: "A. Un garçon", paras: [["« ", { t: "Voici Koto. Il s'appelle Koto.", k: true }, " »"]] },
          { t: "B. Une fille", paras: [["« ", { t: "Voici Soa. Elle s'appelle Soa.", k: true }, " »"]] },
        ],
        retenir: ["Garçon : ", { t: "Il s'appelle...", k: true }, ". Fille : ", { t: "Elle s'appelle...", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Choisis le bon mot (entoure Il ou Elle) :"], items: [
          ["1) Voici Hery. (Il / Elle) s'appelle Hery."],
          ["2) Voici Fara. (Il / Elle) s'appelle Fara."],
          ["3) Voici Lanto. (Il / Elle) s'appelle Lanto."],
          ["4) Voici Tiana. (Il / Elle) s'appelle Tiana."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec Voici, Il ou Elle :"], items: [
          ["1) ............ Koto. Il s'appelle Koto."],
          ["2) Voici Soa. ............ s'appelle Soa."],
          ["3) ............ Fara. Elle s'appelle Fara."],
          ["4) Voici Hery. ............ s'appelle Hery."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Présente ton/ta camarade. La maîtresse observe :"], items: [
          ["1) Je dis « Voici... » ....... / 1,5 pt"],
          ["2) Je choisis Il ou Elle ....... / 1,5 pt"],
          ["3) Je dis « s'appelle... » + prénom ....... / 1,5 pt"],
          ["4) Je fais le geste de présentation ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "Il", r: true }, " — 2) ", { t: "Elle", r: true }, " — 3) ", { t: "Il", r: true }, " — 4) ", { t: "Elle", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "Voici", r: true }, " — 2) ", { t: "Elle", r: true }, " — 3) ", { t: "Voici", r: true }, " — 4) ", { t: "Il", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 3 =================
    {
      n: 3, titre: "Le dialogue de présentation", titreFiche: "Dialogue de présentation complet",
      sd: "Expression Orale",
      objectif: "Utiliser un dialogue complet : se saluer, se présenter, se dire au revoir.",
      supportFiche: "Deux marionnettes (ou images d'enfants), dialogue écrit au tableau.",
      image: { file: "s3_dialogue.png", w: 1100, h: 560, legende: "« — Bonjour ! — Bonjour ! Comment tu t'appelles ? — Je m'appelle Rova. Et toi ? »" },
      revision: {
        ens: ["Présente-moi ton voisin ou ta voisine."],
        app: ["R.A. : « ", { t: "Voici... Il/Elle s'appelle...", r: true }, " »"],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["(fait mimer avec deux marionnettes une rencontre entre deux enfants) Regardez : ces deux enfants se rencontrent. Que se disent-ils, à votre avis ?"],
        app: ["Observent et proposent des idées librement."],
        technique: ["Mime / observation"], support: "Deux marionnettes (ou images)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous allons apprendre tout un dialogue : se saluer, se présenter, puis se dire au revoir."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(fait le dialogue avec les marionnettes) « — Bonjour ! — Bonjour ! Comment tu t'appelles ? — Je m'appelle Rova. Et toi ? — Je m'appelle Koto. — Au revoir, Koto ! — Au revoir, Rova ! » (répète lentement deux fois)."],
        app: ["Écoutent attentivement le dialogue complet."],
        technique: ["Écoute active"], support: "Marionnettes + dialogue écrit au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment commence-t-on le dialogue ?"],
          ["2) Quelle question pose-t-on pour connaître le prénom ?"],
          ["3) Comment termine-t-on le dialogue ?"],
          ["4) Et que dit-on après « Je m'appelle Rova » pour poser la même question ?"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Bonjour !", r: true }, " »"],
          ["R.A. : « ", { t: "Comment tu t'appelles ?", r: true }, " »"],
          ["R.A. : « ", { t: "Au revoir !", r: true }, " »"],
          ["R.A. : « ", { t: "Et toi ?", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Dialogue écrit au tableau",
      },
      synthese: {
        ens: ["Donc : un dialogue de présentation a 3 parties : 1) Bonjour ! 2) Comment tu t'appelles ? — Je m'appelle... Et toi ? 3) Au revoir !"],
        app: ["Répètent le dialogue en chœur, par moitié de classe, chaque groupe tenant un rôle."],
        technique: ["Jeu de rôle collectif en deux groupes"], support: "Dialogue écrit au tableau",
      },
      application: {
        ens: ["Par deux, jouez le dialogue complet avec vos propres prénoms."],
        app: ["Travaillent en binômes ; 3 binômes jouent le dialogue devant la classe."],
        technique: ["Jeu de rôle en binôme"], support: "Dialogue écrit au tableau",
      },
      evaluation: {
        ens: ["L'enseignant choisit un élève au hasard et joue avec lui le dialogue complet."],
        app: ["R.A. : répond aux répliques du dialogue avec son prénom."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "3. LE DIALOGUE DE PRÉSENTATION",
        subs: [
          { t: "A. Le dialogue", paras: [
            ["« — ", { t: "Bonjour !", k: true }, " — ", { t: "Bonjour ! Comment tu t'appelles ?", k: true }, " »"],
            ["« — ", { t: "Je m'appelle Rova. Et toi ?", k: true }, " — ", { t: "Je m'appelle Koto.", k: true }, " »"],
          ] },
          { t: "B. Pour finir", paras: [["« — ", { t: "Au revoir, Koto !", k: true }, " — ", { t: "Au revoir, Rova !", k: true }, " »"]] },
        ],
        retenir: ["Un dialogue : ", { t: "Bonjour ! → Comment tu t'appelles ? → Je m'appelle... → Au revoir !", k: true }],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Remets le dialogue dans l'ordre : numérote de 1 à 4 :"], items: [
          ["a) Je m'appelle Soa."],
          ["b) Bonjour !"],
          ["c) Au revoir !"],
          ["d) Comment tu t'appelles ?"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète le dialogue :"], items: [
          ["1) — ............ !"],
          ["2) — Comment tu ............ ?"],
          ["3) — Je ............ Rova. Et toi ?"],
          ["4) — ............, Koto !"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Joue le dialogue avec un camarade. La maîtresse observe :"], items: [
          ["1) Je dis bonjour ....... / 1,5 pt"],
          ["2) Je pose la question ....... / 1,5 pt"],
          ["3) Je réponds avec mon prénom ....... / 1,5 pt"],
          ["4) Je dis au revoir ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Ordre : 1) ", { t: "b", r: true }, " — 2) ", { t: "d", r: true }, " — 3) ", { t: "a", r: true }, " — 4) ", { t: "c", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "Bonjour", r: true }, " — 2) ", { t: "t'appelles", r: true }, " — 3) ", { t: "m'appelle", r: true }, " — 4) ", { t: "Au revoir", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 4 =================
    {
      n: 4, titre: "Qui est-ce ? C'est... (un garçon)", titreFiche: "« Qui est-ce ? C'est... » — un garçon",
      sd: "Expression Orale",
      objectif: "Utiliser « Qui est-ce ? — C'est... » pour identifier un garçon.",
      supportFiche: "Image d'un garçon (Koto), ardoise, tableau noir.",
      image: null,
      revision: {
        ens: ["Présente-toi à la classe."],
        app: ["R.A. : « ", { t: "Bonjour ! Je m'appelle...", r: true }, " » (chaque élève interrogé répond)."],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["(cache une image derrière son dos puis la montre soudainement : un garçon nommé Koto) Regardez cette image. Qui est-ce, à votre avis ?"],
        app: ["Observent et essaient de deviner ou de nommer l'enfant."],
        technique: ["Jeu de découverte"], support: "Image d'un garçon",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à demander et à dire qui est une personne sur une image."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["Écoute : « Qui est-ce ? — C'est Koto. » (répète la question et la réponse deux fois en montrant l'image)."],
        app: ["Écoutent attentivement."],
        technique: ["Écoute active"], support: "Image + phrase modèle au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle question pose-t-on pour demander le nom d'une personne sur une image ?"],
          ["2) Comment répond-on ?"],
          ["3) Répète la question avec l'intonation qui monte."],
          ["4) Répète la réponse complète."],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Qui est-ce ?", r: true }, " »"],
          ["R.A. : « ", { t: "C'est Koto.", r: true }, " »"],
          ["R.A. : « ", { t: "Qui est-ce ?", r: true }, " » (voix qui monte)."],
          ["R.A. : « ", { t: "C'est Koto.", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Image d'un garçon",
      },
      synthese: {
        ens: ["Donc : pour demander qui est une personne, je dis « Qui est-ce ? ». Pour répondre, je dis « C'est... » + le prénom. L'intonation monte sur la question !"],
        app: ["Répètent la question-réponse en chœur en exagérant l'intonation montante."],
        technique: ["Répétition collective avec intonation"], support: "Tableau noir",
      },
      application: {
        ens: ["(montre différentes images de garçons connus de la classe) Qui est-ce ? (à tour de rôle)"],
        app: ["Répondent chacun leur tour : « C'est... » (+ prénom)."],
        technique: ["Travail collectif oral, tour de classe"], support: "Images de garçons",
      },
      evaluation: {
        ens: ["Montre l'image d'un garçon et demande : « Qui est-ce ? »"],
        app: ["R.A. : « ", { t: "C'est...", r: true }, " » (+ prénom)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "4. QUI EST-CE ?",
        subs: [
          { t: "A. La question et la réponse", paras: [["« — ", { t: "Qui est-ce ?", k: true }, " — ", { t: "C'est Koto.", k: true }, " »"]] },
          { t: "B. L'intonation", paras: [["Sur « ", { t: "Qui est-ce ?", k: true }, " », ma voix ", { t: "monte", k: true }, " !"]] },
        ],
        retenir: ["Question : « ", { t: "Qui est-ce ?", k: true }, " » Réponse : « ", { t: "C'est...", k: true }, " » + prénom."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Regarde les images (un garçon) et réponds :"], items: [
          ["1) Qui est-ce ? — ............ (Koto)"],
          ["2) Qui est-ce ? — ............ (Hery)"],
          ["3) Qui est-ce ? — ............ (Lanto)"],
          ["4) Qui est-ce ? — ............ (Rova)"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Remets dans l'ordre : numérote de 1 à 4 :"], items: [
          ["a) C'est Koto."],
          ["b) C'est Hery."],
          ["c) Qui est-ce ?"],
          ["d) Qui est-ce ?"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu : montre une image à ton camarade, pose la question, un troisième répond :"], items: [
          ["1) Je pose « Qui est-ce ? » ....... / 1,5 pt"],
          ["2) Mon camarade répond « C'est... » ....... / 1,5 pt"],
          ["3) Mon intonation monte ....... / 1,5 pt"],
          ["4) Je parle fort et clairement ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "C'est Koto", r: true }, " — 2) ", { t: "C'est Hery", r: true }, " — 3) ", { t: "C'est Lanto", r: true }, " — 4) ", { t: "C'est Rova", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Ordre : 1) ", { t: "c", r: true }, " — 2) ", { t: "a", r: true }, " — 3) ", { t: "d", r: true }, " — 4) ", { t: "b", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 5 =================
    {
      n: 5, titre: "Qui est-ce ? C'est... (une fille)", titreFiche: "« Qui est-ce ? C'est... » — une fille",
      sd: "Expression Orale",
      objectif: "Utiliser « Qui est-ce ? — C'est... » pour identifier une fille (la question ne change jamais).",
      supportFiche: "Image d'une fille (Fara), plusieurs images d'enfants, ardoise.",
      image: null,
      revision: {
        ens: ["(montre l'image d'un garçon) Qui est-ce ?"],
        app: ["R.A. : « ", { t: "C'est...", r: true }, " » (+ prénom du garçon)."],
        technique: ["Question-réponse rapide"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image d'une fille, Fara) Regardez cette image. Qui est-ce ?"],
        app: ["Observent et essaient de répondre."],
        technique: ["Observation collective"], support: "Image d'une fille",
      },
      presentation: {
        ens: ["Aujourd'hui, nous continuons avec « Qui est-ce ? C'est... », mais pour une fille."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["Écoute : « Qui est-ce ? — C'est Fara. » (répète deux fois en montrant l'image)."],
        app: ["Écoutent attentivement."],
        technique: ["Écoute active"], support: "Image + phrase modèle au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Est-ce que la question « Qui est-ce ? » change quand on parle d'une fille ?"],
          ["2) Que change-t-on dans la réponse ?"],
          ["3) Pose la question pour cette image."],
          ["4) Donne la réponse complète."],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Non, la question reste la même", r: true }, "."],
          ["R.A. : Seulement ", { t: "le prénom", r: true }, " : « C'est Fara. »"],
          ["R.A. : « ", { t: "Qui est-ce ?", r: true }, " »"],
          ["R.A. : « ", { t: "C'est Fara.", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Image d'une fille",
      },
      synthese: {
        ens: ["Donc : « Qui est-ce ? » ne change jamais, garçon ou fille. Seul le prénom change dans la réponse : « C'est... »."],
        app: ["Répondent en chœur « C'est... » à chaque image montrée rapidement."],
        technique: ["Jeu de réponse rapide collectif"], support: "Plusieurs images d'enfants",
      },
      application: {
        ens: ["(montre plusieurs images de filles de la classe) Qui est-ce ? (à tour de rôle)"],
        app: ["Répondent chacun leur tour : « C'est... » (+ prénom)."],
        technique: ["Travail collectif oral, tour de classe"], support: "Images de filles",
      },
      evaluation: {
        ens: ["Montre l'image d'une fille et demande : « Qui est-ce ? »"],
        app: ["R.A. : « ", { t: "C'est...", r: true }, " » (+ prénom)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "5. QUI EST-CE ? (UNE FILLE)",
        subs: [
          { t: "A. La même question", paras: [["« — ", { t: "Qui est-ce ?", k: true }, " — ", { t: "C'est Fara.", k: true }, " »"]] },
          { t: "B. La règle", paras: [["La question ", { t: "ne change jamais", k: true }, ". Seul ", { t: "le prénom", k: true }, " change."]] },
        ],
        retenir: ["Garçon ou fille : toujours « ", { t: "Qui est-ce ? — C'est...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Regarde les images (une fille) et réponds :"], items: [
          ["1) Qui est-ce ? — ............ (Fara)"],
          ["2) Qui est-ce ? — ............ (Soa)"],
          ["3) Qui est-ce ? — ............ (Tiana)"],
          ["4) Qui est-ce ? — ............ (Aina)"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Vrai ou Faux (entoure) :"], items: [
          ["1) On dit « C'est Fara. » pour une fille. VRAI / FAUX"],
          ["2) La question change pour une fille. VRAI / FAUX"],
          ["3) On dit « C'est Koto. » pour un garçon. VRAI / FAUX"],
          ["4) Seul le prénom change dans la réponse. VRAI / FAUX"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Jeu de réponse rapide : la maîtresse montre 4 images, réponds :"], items: [
          ["1) Image 1 → « ............ »"],
          ["2) Image 2 → « ............ »"],
          ["3) Image 3 → « ............ »"],
          ["4) Image 4 → « ............ »"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "C'est Fara", r: true }, " — 2) ", { t: "C'est Soa", r: true }, " — 3) ", { t: "C'est Tiana", r: true }, " — 4) ", { t: "C'est Aina", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "VRAI", r: true }, " — 2) ", { t: "FAUX", r: true }, " — 3) ", { t: "VRAI", r: true }, " — 4) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["« ", { t: "C'est...", r: true }, " » + le bon prénom pour chaque image (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 6 =================
    {
      n: 6, titre: "Qui est-ce ? La devinette", titreFiche: "« Qui est-ce ? C'est... » — consolidation en jeu",
      sd: "Expression Orale",
      objectif: "Consolider « Qui est-ce ? C'est... » avec des images mélangées, en jeu de devinette et en comptine.",
      supportFiche: "Plusieurs images d'enfants (garçons et filles), ardoise, tableau noir.",
      image: { file: "s6_devinette.png", w: 1100, h: 560, legende: "Le jeu de la devinette : « Qui est-ce, qui est-ce, dis-moi qui c'est ! »" },
      revision: {
        ens: ["(montre l'image d'une fille) Qui est-ce ?"],
        app: ["R.A. : « ", { t: "C'est...", r: true }, " » (+ prénom)."],
        technique: ["Question-réponse rapide"],
      },
      miseEnSituation: {
        ens: ["Propose un jeu : « Devine qui c'est ! » avec plusieurs images cachées. Nous allons jouer à la devinette avec « Qui est-ce ? »."],
        app: ["Écoutent la règle du jeu avec intérêt."],
        technique: ["Annonce du jeu"], support: "Plusieurs images d'enfants",
      },
      presentation: {
        ens: ["Aujourd'hui, nous consolidons « Qui est-ce ? C'est... » avec des images de garçons et de filles mélangées — et nous apprenons une petite comptine !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(montre successivement 4 images : 2 garçons, 2 filles en posant à chaque fois « Qui est-ce ? » et en donnant la réponse)."],
        app: ["Observent et écoutent chaque question-réponse."],
        technique: ["Observation collective"], support: "4 images d'enfants + tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Rappelle-moi : quelle est la question pour demander le nom ?"],
          ["2) Et la réponse ?"],
          ["3) « Qui est-ce ? » change-t-il entre un garçon et une fille ?"],
          ["4) Apprends la comptine : « Qui est-ce, qui est-ce, dis-moi qui c'est ! »"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Qui est-ce ?", r: true }, " »"],
          ["R.A. : « ", { t: "C'est...", r: true }, " » + le prénom."],
          ["R.A. : ", { t: "Non", r: true }, ", il ne change jamais."],
          ["Répètent la comptine en chœur avec l'enseignant."],
        ] },
        technique: ["Question / réponse"], support: "4 images d'enfants",
      },
      synthese: {
        ens: ["Donc : « Qui est-ce ? C'est... » fonctionne pour un garçon comme pour une fille. Seul le prénom change. Et la comptine fixe tout dans la mémoire !"],
        app: ["Chantent la comptine en chœur avec l'enseignant."],
        technique: ["Comptine collective"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu de devinette par groupes de 3 : un élève montre une image cachée, le deuxième demande « Qui est-ce ? », le troisième répond « C'est... »."],
        app: ["Jouent en petits groupes de 3, puis quelques groupes rejouent devant la classe."],
        technique: ["Jeu en groupe de 3"], support: "Images d'enfants",
      },
      evaluation: {
        ens: ["Montre une dernière image (garçon ou fille) et demande : « Qui est-ce ? »"],
        app: ["R.A. : « ", { t: "C'est...", r: true }, " » (+ prénom)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "6. QUI EST-CE ? — LE JEU",
        subs: [
          { t: "A. Les deux cas", paras: [["« — ", { t: "Qui est-ce ?", k: true }, " — ", { t: "C'est Koto.", k: true }, " » (garçon)"], ["« — ", { t: "Qui est-ce ?", k: true }, " — ", { t: "C'est Fara.", k: true }, " » (fille)"]] },
          { t: "B. La comptine", paras: [["« ", { t: "Qui est-ce, qui est-ce, dis-moi qui c'est !", k: true }, " »"]] },
        ],
        retenir: ["« ", { t: "Qui est-ce ? C'est...", k: true }, " » : pour un garçon comme pour une fille."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Observe chaque image, écris la question puis la réponse :"], items: [
          ["1) ............ ? — C'est Koto. (garçon)"],
          ["2) ............ ? — C'est Fara. (fille)"],
          ["3) ............ ? — C'est Lanto. (garçon)"],
          ["4) ............ ? — C'est Tiana. (fille)"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Associe : relie le garçon ou la fille à la bonne réponse :"], items: [
          ["1) un garçon → C'est Koto. / C'est Fara."],
          ["2) une fille → C'est Koto. / C'est Fara."],
          ["3) un garçon → C'est Hery. / C'est Soa."],
          ["4) une fille → C'est Lanto. / C'est Aina."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Joue la devinette en groupe de 3. La maîtresse observe :"], items: [
          ["1) Je cache l'image ....... / 1,5 pt"],
          ["2) Mon camarade pose la question ....... / 1,5 pt"],
          ["3) Je réponds « C'est... » ....... / 1,5 pt"],
          ["4) On échange les rôles ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "Qui est-ce", r: true }, " — 2) ", { t: "Qui est-ce", r: true }, " — 3) ", { t: "Qui est-ce", r: true }, " — 4) ", { t: "Qui est-ce", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "C'est Koto.", r: true }, " — 2) ", { t: "C'est Fara.", r: true }, " — 3) ", { t: "C'est Hery.", r: true }, " — 4) ", { t: "C'est Aina.", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 7 =================
    {
      n: 7, titre: "Le son é — découverte", titreFiche: "Le son é — découverte",
      sd: "Lecture",
      objectif: "Reconnaître et lire le son é dans des mots simples (bébé, école).",
      supportFiche: "Étiquettes-mots, image d'un bébé et d'une école, tableau noir.",
      image: { file: "s7_son_e.png", w: 1100, h: 560, legende: "Le son é : le bébé, l'école, le café, le vélo." },
      revision: {
        ens: ["Fait réciter les voyelles déjà connues : a, i, o, u."],
        app: ["Récitent les voyelles collectivement."],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image d'un bébé) Regardez cette image. Savez-vous comment on dit ce mot en français ?"],
        app: ["Observent et essaient de répondre."],
        technique: ["Observation collective"], support: "Image d'un bébé",
      },
      presentation: {
        ens: ["Aujourd'hui, nous découvrons un nouveau son : le son é."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(écrit au tableau : bébé, école — prononce chaque mot lentement en insistant sur le son é) Répétez : bé-bé... é-co-le..."],
        app: ["Écoutent et observent les mots écrits au tableau."],
        technique: ["Écoute et observation"], support: "Mots écrits au tableau + images",
      },
      analyse: {
        ens: { paras: [
          ["1) Quel son entend-on plusieurs fois dans « bébé » ?"],
          ["2) Où voit-on la lettre qui fait ce son dans « bébé » : au début, au milieu ou à la fin ?"],
          ["3) Et dans « école », où est-il ?"],
          ["4) Comment s'appelle la lettre qui fait le son é ?"],
        ] },
        app: { paras: [
          ["R.A. : le son ", { t: "é", r: true }, "."],
          ["R.A. : Au début ", { t: "et à la fin", r: true }, "."],
          ["R.A. : Au ", { t: "début", r: true }, "."],
          ["R.A. : La lettre ", { t: "é", r: true }, " (e accent aigu)."],
        ] },
        technique: ["Question / réponse"], support: "Mots écrits au tableau",
      },
      synthese: {
        ens: ["Donc : le son é s'écrit avec la lettre « é » (e accent aigu). On l'entend dans bébé, école. Touchez votre oreille quand vous l'entendez !"],
        app: ["Touchent leur oreille quand ils entendent le son é dans les mots prononcés (bébé, papa, école, mama, café)."],
        technique: ["Jeu d'écoute avec geste"], support: "Tableau noir",
      },
      application: {
        ens: ["(distribue des étiquettes-mots : bébé, école, café, vélo, télé) Levez la main quand vous entendez le son é."],
        app: ["Écoutent chaque mot lu et lèvent la main s'ils entendent é (bébé, école, café, vélo, télé : tous !)."],
        technique: ["Jeu d'écoute collectif"], support: "Étiquettes-mots",
      },
      evaluation: {
        ens: ["Lit un mot à voix haute (parmi bébé, papa, école, mama) et demande si l'élève entend le son é."],
        app: ["R.A. : réponse correcte ", { t: "oui ou non", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "7. LE SON É",
        subs: [
          { t: "A. La lettre", paras: [["Le son ", { t: "é", k: true }, " s'écrit avec la lettre « ", { t: "é", k: true }, " » (e accent aigu)."]] },
          { t: "B. Les mots", paras: [[{ t: "bébé", k: true }, " — ", { t: "école", k: true }]] },
        ],
        retenir: ["Le son ", { t: "é", k: true }, " : je l'entends dans ", { t: "bébé, école", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots où tu entends le son é :"], items: [
          ["1) bébé / baba"],
          ["2) école / colo"],
          ["3) café / cari"],
          ["4) vélo / vali"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Lis à voix haute (l'enseignant valide) :"], items: [
          ["1) bébé ....... / 1,5 pt"],
          ["2) école ....... / 1,5 pt"],
          ["3) café ....... / 1,5 pt"],
          ["4) vélo ....... / 1,5 pt"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : coche OUI si tu entends é, NON sinon :"], items: [
          ["1) télé → OUI / NON"],
          ["2) mama → OUI / NON"],
          ["3) école → OUI / NON"],
          ["4) riz → OUI / NON"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "bébé, école, café, vélo", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Lecture correcte et fluide (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "OUI", r: true }, " — 2) ", { t: "NON", r: true }, " — 3) ", { t: "OUI", r: true }, " — 4) ", { t: "NON", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 8 =================
    {
      n: 8, titre: "Le son é — lire des mots", titreFiche: "Le son é — lire des mots",
      sd: "Lecture",
      objectif: "Lire des mots contenant le son é en position initiale, médiane et finale.",
      supportFiche: "Étiquettes-mots (vélo, télé, café, école), ardoise, tableau noir.",
      image: null,
      revision: {
        ens: ["Comment s'écrit le son é ?"],
        app: ["R.A. : Avec la lettre « ", { t: "é", r: true }, " », e accent aigu."],
        technique: ["Question-réponse rapide"],
      },
      miseEnSituation: {
        ens: ["(montre les étiquettes-mots vélo, télé, café) Regardez ces mots. Que remarquez-vous ?"],
        app: ["Observent et remarquent la présence du é."],
        technique: ["Observation collective"], support: "Étiquettes-mots",
      },
      presentation: {
        ens: ["Aujourd'hui, nous lisons plusieurs mots avec le son é : vélo, télé, café, école."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(lit lentement chaque mot en le montrant) vé-lo... té-lé... ca-fé... é-co-le... (répète chaque mot deux fois)."],
        app: ["Écoutent et suivent des yeux le mot montré."],
        technique: ["Écoute et observation"], support: "Étiquettes-mots affichées au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « vélo », où est le son é : au début, au milieu ou à la fin ?"],
          ["2) Dans « café », où est le son é ?"],
          ["3) Dans « école », où est-il ?"],
          ["4) Dans « télé », combien de fois entend-on é ?"],
        ] },
        app: { paras: [
          ["R.A. : Au ", { t: "début", r: true }, " (vé)."],
          ["R.A. : À ", { t: "la fin", r: true }, "."],
          ["R.A. : Au ", { t: "début", r: true }, "."],
          ["R.A. : ", { t: "Deux fois", r: true }, " (té-lé)."],
        ] },
        technique: ["Question / réponse"], support: "Étiquettes-mots",
      },
      synthese: {
        ens: ["Donc : le son é peut se trouver au début (école), au milieu (télé) ou à la fin (café) d'un mot."],
        app: ["Répètent les 4 mots en chœur en frappant une fois dans les mains à chaque syllabe."],
        technique: ["Répétition rythmée collective"], support: "Tableau noir",
      },
      application: {
        ens: ["Lisez les 4 mots (vélo, télé, café, école) à tour de rôle."],
        app: ["Lisent chacun leur tour un des mots affichés."],
        technique: ["Lecture individuelle à voix haute"], support: "Étiquettes-mots",
      },
      evaluation: {
        ens: ["Présente une étiquette-mot (parmi vélo, télé, café, école) et demande de la lire."],
        app: ["Lisent le mot présenté individuellement."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "8. LE SON É — LES MOTS",
        subs: [
          { t: "A. Les mots", paras: [[{ t: "vélo", k: true }, " — ", { t: "télé", k: true }, " — ", { t: "café", k: true }, " — ", { t: "école", k: true }]] },
          { t: "B. Sa place", paras: [["Le son é peut être au ", { t: "début", k: true }, " (école), au ", { t: "milieu", k: true }, " (télé) ou à ", { t: "la fin", k: true }, " (café)."]] },
        ],
        retenir: ["Je lis : ", { t: "vélo, télé, café, école", k: true }, " — le é est partout !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
          ["1) vélo ....... / 2 pts"],
          ["2) télé ....... / 2 pts"],
          ["3) café ....... / 2 pts"],
          ["4) école ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Classe les mots selon la position du son é (début / milieu / fin) :"], items: [
          ["1) école → ............"],
          ["2) café → ............"],
          ["3) télé → ............"],
          ["4) vélo → ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Frappe les syllabes de chaque mot (vé-lo : 2 frappes) :"], items: [
          ["1) vélo → ............ frappes"],
          ["2) télé → ............ frappes"],
          ["3) café → ............ frappes"],
          ["4) école → ............ frappes"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "début", r: true }, " — 2) ", { t: "fin", r: true }, " — 3) ", { t: "milieu", r: true }, " — 4) ", { t: "début", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "2", r: true }, " — 2) ", { t: "2", r: true }, " — 3) ", { t: "2", r: true }, " — 4) ", { t: "3", r: true }, " (é-co-le) (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 9 =================
    {
      n: 9, titre: "Le son é — lire des phrases", titreFiche: "Le son é — lire des phrases",
      sd: "Lecture",
      objectif: "Lire de courtes phrases contenant le son é.",
      supportFiche: "Phrases écrites sur affiche, ardoise, tableau noir.",
      image: { file: "s9_phrases_e.png", w: 1100, h: 620, legende: "Je lis des phrases avec le son é." },
      revision: {
        ens: ["Lisez : vélo, télé, café, école. Où est le é dans chaque mot ?"],
        app: ["Lisent et répondent : ", { t: "début, milieu, fin, début", r: true }, "."],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["« Aujourd'hui, les mots avec é se mettent en phrases ! Écoutez : le bébé va à l'école. À vous de lire ! »"],
        app: ["Écoutent, impatients de lire des phrases."],
        technique: ["Annonce du défi"], support: "Phrases écrites sur affiche",
      },
      presentation: {
        ens: ["Aujourd'hui, nous lisons de courtes phrases qui contiennent le son é."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(lit lentement chaque phrase de l'affiche en pointant les mots) « Le bébé est à l'école. »... « Papa boit un café. »..."],
        app: ["Suivent les phrases des yeux pendant la lecture modèle."],
        technique: ["Lecture modèle"], support: "Affiche de phrases",
      },
      analyse: {
        ens: { paras: [
          ["1) Lis la première phrase : où est le mot avec é ?"],
          ["2) Dans « Papa boit un café », quel mot contient le son é ?"],
          ["3) Dans « J'ai un vélo », quel mot contient le son é ?"],
          ["4) Dans « La télé est allumée. », y a-t-il un autre mot avec é que « télé » ?"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "bébé", r: true }, " » et « ", { t: "école", r: true }, " »."],
          ["R.A. : « ", { t: "café", r: true }, " »."],
          ["R.A. : « ", { t: "vélo", r: true }, " »."],
          ["R.A. : Oui, ", { t: "allumée", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de phrases",
      },
      synthese: {
        ens: ["Donc : le son é se cache dans plein de mots de nos phrases : bébé, école, café, vélo, télé, allumée. Je lis en le repérant !"],
        app: ["Répètent chaque phrase après l'enseignant, puis les lisent en chœur."],
        technique: ["Répétition par phrase"], support: "Affiche de phrases",
      },
      application: {
        ens: ["Lisez les 4 phrases à tour de rôle, chacun une phrase, à voix haute et forte."],
        app: ["Lisent chacun leur tour une phrase de l'affiche."],
        technique: ["Lecture individuelle à voix haute"], support: "Affiche de phrases",
      },
      evaluation: {
        ens: ["Présente une phrase et demande à l'élève de la lire et de dire quel mot contient le son é."],
        app: ["R.A. : lit la phrase et ", { t: "identifie le mot avec é", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "9. LE SON É — LES PHRASES",
        subs: [
          { t: "A. Les phrases", paras: [
            ["« ", { t: "Le bébé est à l'école.", k: true }, " »"],
            ["« ", { t: "Papa boit un café.", k: true }, " » — « ", { t: "J'ai un vélo.", k: true }, " »"],
          ] },
          { t: "B. Je repère", paras: [["Dans chaque phrase, je cherche ", { t: "les mots avec é", k: true }, " !"]] },
        ],
        retenir: ["Je lis des phrases et je repère les mots avec ", { t: "é", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque phrase à voix haute (l'enseignant valide) :"], items: [
          ["1) Le bébé est à l'école. ....... / 2 pts"],
          ["2) Papa boit un café. ....... / 2 pts"],
          ["3) J'ai un vélo. ....... / 2 pts"],
          ["4) La télé est allumée. ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Dans chaque phrase, entoure le mot avec le son é :"], items: [
          ["1) Le bébé pleure."],
          ["2) L'école est grande."],
          ["3) Mon café est chaud."],
          ["4) Le vélo de papa."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Relie la phrase à son dessin (l'enseignant montre les images) :"], items: [
          ["1) Le bébé dort → image : bébé au lit / bébé à vélo"],
          ["2) Papa boit un café → image : tasse / école"],
          ["3) J'ai un vélo → image : vélo / gomme"],
          ["4) L'école est là → image : bâtiment / lune"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "bébé", r: true }, " — 2) ", { t: "école", r: true }, " — 3) ", { t: "café", r: true }, " — 4) ", { t: "vélo", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "bébé au lit", r: true }, " — 2) ", { t: "tasse", r: true }, " — 3) ", { t: "vélo", r: true }, " — 4) ", { t: "bâtiment", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 10 =================
    {
      n: 10, titre: "Les sons è, ê — découverte", titreFiche: "Les sons è, ê — découverte",
      sd: "Lecture",
      objectif: "Reconnaître les sons è et ê et les distinguer du é (mère, père, frère, forêt, fête).",
      supportFiche: "Étiquettes-mots, image d'une famille, tableau noir.",
      image: { file: "s10_sons_ea.png", w: 1100, h: 560, legende: "Les sons è et ê : la mère, le père, la forêt, la fête." },
      revision: {
        ens: ["Lisez : bébé, école, café. Comment s'appelle l'accent du é ?"],
        app: ["Lisent — c'est l'accent ", { t: "aigu", r: true }, "."],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["(montrer l'image d'une famille) Voici la famille de Rova : la mère, le père... Entendez-vous ? Le son change un petit peu ! Il est plus ouvert : è."],
        app: ["Écoutent et répètent mère, père en sentant la différence."],
        technique: ["Observation collective"], support: "Image d'une famille",
      },
      presentation: {
        ens: ["Aujourd'hui, nous découvrons deux nouveaux sons : è (accent grave) et ê (accent circonflexe)."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(écrit au tableau : mère, père, frère, forêt, fête — prononce chaque mot lentement) Répétez : mè-re... pè-re... fo-rêt... fê-te..."],
        app: ["Écoutent et observent les mots écrits."],
        technique: ["Écoute et observation"], support: "Mots écrits au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « mère », quel son entend-on : é ou è ?"],
          ["2) Quelle lettre porte l'accent dans « forêt » ?"],
          ["3) « fête » : quel accent voyez-vous sur le e ?"],
          ["4) Le son è est-il plus fermé ou plus ouvert que é ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "è", r: true }, "."],
          ["R.A. : Le ", { t: "t", r: true }, " final, avec ê (forêt)."],
          ["R.A. : L'accent ", { t: "circonflexe", r: true }, " (ê)."],
          ["R.A. : Plus ", { t: "ouvert", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Mots écrits au tableau",
      },
      synthese: {
        ens: ["Donc : è (accent grave) et ê (accent circonflexe) font un son plus ouvert que é. On l'entend dans mère, père, frère, forêt, fête."],
        app: ["Répètent les 5 mots en chœur, bouche bien ouverte."],
        technique: ["Répétition collective"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu d'écoute : je dis un mot, répondez « é » si c'est le son fermé, « è » si c'est le son ouvert : café — mère — télé — père — vélo — fête !"],
        app: ["Répondent : ", { t: "café → é, mère → è, télé → é, père → è, vélo → é, fête → ê", r: true }, "."],
        technique: ["Jeu d'écoute"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Lit un mot (mère, café, fête, école) et demande : é ou è ?"],
        app: ["R.A. : réponse correcte ", { t: "é / è / ê", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "10. LES SONS È, Ê",
        subs: [
          { t: "A. Les lettres", paras: [["« ", { t: "è", k: true }, " » accent grave — « ", { t: "ê", k: true }, " » accent circonflexe : le son ", { t: "ouvert", k: true }, " !"]] },
          { t: "B. Les mots", paras: [[{ t: "mère", k: true }, " — ", { t: "père", k: true }, " — ", { t: "frère", k: true }, " — ", { t: "forêt", k: true }, " — ", { t: "fête", k: true }]] },
        ],
        retenir: ["è et ê = le son ", { t: "ouvert", k: true }, " de ", { t: "mère, forêt, fête", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les mots avec le son è ou ê :"], items: [
          ["1) mère / moto"],
          ["2) père / papa"],
          ["3) forêt / fusée"],
          ["4) fête / fini"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Lis chaque mot à voix haute (l'enseignant valide) :"], items: [
          ["1) mère ....... / 1,5 pt"],
          ["2) frère ....... / 1,5 pt"],
          ["3) forêt ....... / 1,5 pt"],
          ["4) fête ....... / 1,5 pt"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : coche é, è ou ê :"], items: [
          ["1) café → é / è / ê"],
          ["2) père → é / è / ê"],
          ["3) fête → é / è / ê"],
          ["4) télé → é / è / ê"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "mère, père, forêt, fête", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Lecture correcte et fluide (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "é", r: true }, " — 2) ", { t: "è", r: true }, " — 3) ", { t: "ê", r: true }, " — 4) ", { t: "é", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 11 =================
    {
      n: 11, titre: "Sons è, ê — lire des mots et des phrases", titreFiche: "Sons è, ê — lire des phrases",
      sd: "Lecture",
      objectif: "Lire des mots et de courtes phrases contenant les sons è et ê.",
      supportFiche: "Phrases écrites sur affiche, étiquettes-mots, tableau noir.",
      image: null,
      revision: {
        ens: ["Lisez : mère, père, frère, forêt, fête. Quel accent voyez-vous sur chaque e ?"],
        app: ["Lisent : accent ", { t: "grave (è)", r: true }, " et accent ", { t: "circonflexe (ê)", r: true }, "."],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["« Les mots avec è et ê entrent en phrases ! Écoutez : toute la famille est à la fête. À vous de lire ! »"],
        app: ["Écoutent, prêts à lire."],
        technique: ["Annonce du défi"], support: "Phrases écrites sur affiche",
      },
      presentation: {
        ens: ["Aujourd'hui, nous lisons de courtes phrases avec les sons è et ê."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(lit lentement chaque phrase en pointant les mots) « Ma mère fait une fête. »... « Le frère va dans la forêt. »..."],
        app: ["Suivent les phrases des yeux pendant la lecture modèle."],
        technique: ["Lecture modèle"], support: "Affiche de phrases",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « Ma mère fait une fête. », quels mots ont le son è ou ê ?"],
          ["2) Dans « Le frère va dans la forêt. », quels mots ?"],
          ["3) « Le père arrive. » : quel mot avec è ?"],
          ["4) Et « La fête commence. » ?"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "mère", r: true }, " » et « ", { t: "fête", r: true }, " »."],
          ["R.A. : « ", { t: "frère", r: true }, " » et « ", { t: "forêt", r: true }, " »."],
          ["R.A. : « ", { t: "père", r: true }, " »."],
          ["R.A. : « ", { t: "fête", r: true }, " »."],
        ] },
        technique: ["Question / réponse"], support: "Affiche de phrases",
      },
      synthese: {
        ens: ["Donc : je lis les phrases en repérant d'abord les mots avec è et ê : mère, père, frère, forêt, fête."],
        app: ["Répètent chaque phrase après l'enseignant, puis les lisent en chœur."],
        technique: ["Répétition par phrase"], support: "Affiche de phrases",
      },
      application: {
        ens: ["Lisez les 4 phrases à tour de rôle, à voix haute et forte."],
        app: ["Lisent chacun leur tour une phrase de l'affiche."],
        technique: ["Lecture individuelle à voix haute"], support: "Affiche de phrases",
      },
      evaluation: {
        ens: ["Présente une phrase et demande de la lire et de dire quels mots ont è ou ê."],
        app: ["R.A. : lit la phrase et ", { t: "identifie les mots avec è/ê", r: true }, "."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "11. SONS È, Ê — LES PHRASES",
        subs: [
          { t: "A. Les phrases", paras: [
            ["« ", { t: "Ma mère fait une fête.", k: true }, " »"],
            ["« ", { t: "Le frère va dans la forêt.", k: true }, " » — « ", { t: "Le père arrive.", k: true }, " »"],
          ] },
          { t: "B. Je repère", paras: [["Dans chaque phrase, je cherche ", { t: "les mots avec è, ê", k: true }, " !"]] },
        ],
        retenir: ["Je lis des phrases et je repère les mots avec ", { t: "è et ê", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Lis chaque phrase à voix haute (l'enseignant valide) :"], items: [
          ["1) Ma mère fait une fête. ....... / 2 pts"],
          ["2) Le frère va dans la forêt. ....... / 2 pts"],
          ["3) Le père arrive. ....... / 2 pts"],
          ["4) La fête commence. ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Dans chaque phrase, entoure le mot avec è ou ê :"], items: [
          ["1) Ma mère chante."],
          ["2) La forêt est grande."],
          ["3) Mon frère joue."],
          ["4) Le père revient."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Classe : é ou è / ê ?"], items: [
          ["1) mère → é / è"],
          ["2) vélo → é / è"],
          ["3) forêt → é / è"],
          ["4) café → é / è"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Lecture correcte et fluide (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "mère", r: true }, " — 2) ", { t: "forêt", r: true }, " — 3) ", { t: "frère", r: true }, " — 4) ", { t: "père", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "è", r: true }, " — 2) ", { t: "é", r: true }, " — 3) ", { t: "ê", r: true }, " — 4) ", { t: "é", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 12 =================
    {
      n: 12, titre: "Écrire avec é, è, ê", titreFiche: "Écrire des mots avec é, è, ê",
      sd: "Expression Écrite",
      objectif: "Écrire des mots et de courtes phrases contenant é, è, ê (copie, dictée).",
      supportFiche: "Ardoises, cahiers, affiche des mots de la semaine, tableau noir.",
      image: null,
      revision: {
        ens: ["Lisez : mère, école, fête, vélo. Classez : é ou è/ê ?"],
        app: ["Lisent : ", { t: "école é, vélo é, mère è, fête ê", r: true }, "."],
        technique: ["Question-réponse"],
      },
      miseEnSituation: {
        ens: ["« Cette semaine, vous avez LU les sons é, è, ê. Aujourd'hui, vous allez les ÉCRIRE ! Ardoises prêtes ? »"],
        app: ["Sortent leurs ardoises, motivés."],
        technique: ["Annonce du défi"], support: "Ardoises",
      },
      presentation: {
        ens: ["Aujourd'hui, nous écrivons des mots et une petite phrase avec é, è et ê : copie puis dictée."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["(écrit le mot « mère » au tableau en insistant sur l'accent) Regardez bien : m-è-r-e. L'accent grave est au-dessus du e. Observez aussi : école, fête."],
        app: ["Observent l'écriture des mots au tableau, tracent les lettres dans l'air."],
        technique: ["Observation guidée"], support: "Mots écrits au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans « mère », quelle lettre porte l'accent grave ?"],
          ["2) Dans « école », où est placé l'accent aigu ?"],
          ["3) Dans « fête », quel accent voyons-nous ?"],
          ["4) Trace dans l'air : è, puis é, puis ê."],
        ] },
        app: { paras: [
          ["R.A. : Le premier ", { t: "e", r: true }, " (m-è-r-e)."],
          ["R.A. : Tout en haut, au ", { t: "début", r: true }, " du mot."],
          ["R.A. : L'accent ", { t: "circonflexe", r: true }, " (ê)."],
          ["Tracent les trois lettres dans l'air avec le doigt."],
        ] },
        technique: ["Question / réponse"], support: "Mots écrits au tableau",
      },
      synthese: {
        ens: ["Donc : pour écrire é, è, ê, je pose bien l'accent au-dessus du e : é (aigu), è (grave), ê (circonflexe). Je copie les mots du tableau !"],
        app: ["Copient soigneusement les mots : mère, école, fête, vélo sur l'ardoise."],
        technique: ["Copie guidée"], support: "Tableau noir",
      },
      application: {
        ens: ["Complète sur ton ardoise : m...re (è), caf... (é), f...te (ê), v...lo (é). Puis on corrige ensemble !"],
        app: ["Écrivent les accents manquants sur l'ardoise et corrigent collectivement."],
        technique: ["Exercice collectif"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["Dictée de mots : mère, école, fête, vélo. Écrivez sur l'ardoise puis sur le cahier."],
        app: ["R.A. : mots correctement écrits avec leurs ", { t: "accents", r: true }, "."],
        technique: ["Dictée individuelle"],
      },
      lecon: {
        titre: "12. ÉCRIRE É, È, Ê",
        subs: [
          { t: "A. Les trois accents", paras: [[{ t: "é", k: true }, " aigu — ", { t: "è", k: true }, " grave — ", { t: "ê", k: true }, " circonflexe"]] },
          { t: "B. La dictée", paras: [["J'écris : ", { t: "mère, école, fête, vélo", k: true }, " avec les accents bien placés !"]] },
        ],
        retenir: ["J'écris les accents : ", { t: "é, è, ê", k: true }, ", au-dessus du e, sans les oublier !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Copie chaque mot avec son accent :"], items: [
          ["1) mère ....... / 2 pts"],
          ["2) école ....... / 2 pts"],
          ["3) fête ....... / 2 pts"],
          ["4) vélo ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Dictée sur l'ardoise (l'enseignant dicte) :"], items: [
          ["1) père ....... / 1,5 pt"],
          ["2) café ....... / 1,5 pt"],
          ["3) forêt ....... / 1,5 pt"],
          ["4) bébé ....... / 1,5 pt"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Complète avec é, è ou ê :"], items: [
          ["1) m...re → é / è / ê"],
          ["2) caf... → é / è / ê"],
          ["3) f...te → é / è / ê"],
          ["4) v...lo → é / è / ê"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Copie correcte avec l'accent bien placé (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "père", r: true }, " — 2) ", { t: "café", r: true }, " — 3) ", { t: "forêt", r: true }, " — 4) ", { t: "bébé", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "è", r: true }, " — 2) ", { t: "é", r: true }, " — 3) ", { t: "ê", r: true }, " — 4) ", { t: "é", r: true }, " (1,5 pt chacun)."]] },
      ],
    },
  ],
};

module.exports = { theme1, DOC };
