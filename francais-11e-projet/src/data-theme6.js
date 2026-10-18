// ============================================================
// data-theme6.js — THÈME 6 : LE VILLAGE (51-60)
// Sous-discipline : Langage — titres et progression d'après
// la FRA officielle (parler de son village, dire ce qu'il y a,
// se situer, dialoguer au marché), gabarit du Thème 5.
// ============================================================

const DOC = "Programme officiel RAPS — Français 11ème";

const theme6 = {
  numero: 6,
  nom: "Le village",
  sousDiscipline: "Langage",
  notions: "VILLAGE — CASE — ÉCOLE — BOUTIQUE — PUITS — MARCHÉ — ÉGLISE — IL Y A — IL N'Y A PAS — OÙ HABITES-TU ? — PORTE — FENÊTRE — TOIT — SUR — SOUS — DANS — DEVANT — DERRIÈRE — PROPRE",
  competences: [
    "Nommer les lieux du village (la case, l'école, la boutique, le puits, le marché, l'église).",
    "Dire où l'on habite : « J'habite dans un village. »",
    "Dire ce qu'il y a et ce qu'il n'y a pas dans son village.",
    "Poser et répondre à la question « Où habites-tu ? ».",
    "Décrire sa maison (porte, fenêtre, toit, murs).",
    "Situer les choses avec sur, sous, dans, devant, derrière.",
    "Jouer le dialogue du marché avec les mots polis.",
    "Dire les actions pour garder le village propre.",
  ],
  seances: [
    // ================= SÉANCE 51 =================
    {
      n: 51, titre: "Mon village", titreFiche: "Mon village",
      objectif: "Nommer les lieux du village et dire où l'on habite.",
      supportFiche: "Affiche « Mon village », tableau noir.",
      image: { file: "s51_mon_village.png", w: 1100, h: 560, legende: "Mon village à Madagascar : les cases, l'école, la boutique et le puits." },
      revision: {
        ens: ["Donnez 2 mots avec le son U de la leçon passée. — Comment sont les lèvres pour dire U ?"],
        app: ["R.A. : ", { t: "jupe, mur, plume, fumée, bureau", r: true }, " — lèvres ", { t: "rondes", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Où habitez-vous ? Moi, j'habite près de l'école, dans un village. Aujourd'hui, nous partons visiter le village de Soa ! »"],
        app: ["Écoutent, curieux de découvrir le village."],
        technique: ["Narration"], support: "Affiche « Mon village »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons à nommer les lieux du village et à dire où nous habitons. Après cette séance, chacun pourra dire : « J'habite dans un village. »"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Que voyez-vous dans ce village ?"],
        app: ["Observent l'affiche : les cases, l'école, la boutique, le puits, l'arbre."],
        technique: ["Observation guidée"], support: "Affiche « Mon village »",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment s'appellent les petites maisons du village ?"],
          ["2) Où les enfants vont-ils pour apprendre ?"],
          ["3) Où achète-t-on du sucre et du savon ?"],
          ["4) Où va-t-on chercher de l'eau ?"],
        ] },
        app: { paras: [
          ["R.A. : Des ", { t: "cases", r: true }, "."],
          ["R.A. : À ", { t: "l'école", r: true }, "."],
          ["R.A. : À ", { t: "la boutique", r: true }, ", au ", { t: "marché", r: true }, "."],
          ["R.A. : Au ", { t: "puits", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « Mon village »",
      },
      synthese: {
        ens: ["Donc : dans le village, il y a des cases, une école, une boutique, un puits et un marché. Je dis : « J'habite dans un village. »"],
        app: ["Répètent en chœur : case — école — boutique — puits — marché, puis la phrase complète."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Chacun votre tour, dites : « J'habite dans un village. Mon village a une école et un puits. »"],
        app: ["Disent leur phrase l'un après l'autre, à voix forte."],
        technique: ["Chaîne parlée"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : nommez 2 lieux du village, puis dites où vous habitez."],
        app: ["R.A. : ", { t: "la case, l'école, la boutique, le puits, le marché", r: true }, " + « ", { t: "J'habite dans un village", r: true }, ". »"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "1. MON VILLAGE",
        subs: [
          { t: "A. Les mots du village", paras: [[{ t: "la case", k: true }, " — ", { t: "l'école", k: true }, " — ", { t: "la boutique", k: true }, " — ", { t: "le puits", k: true }, " — ", { t: "le marché", k: true }, " — ", { t: "l'église", k: true }]] },
          { t: "B. Dire où j'habite", paras: [
            ["« — ", { t: "Où habites-tu ?", k: true }, " »"],
            ["« — ", { t: "J'habite dans un village.", k: true }, " » ou « — ", { t: "J'habite en ville.", k: true }, " »"],
          ] },
        ],
        retenir: ["Le village a des ", { t: "cases, une école, une boutique, un puits, un marché", k: true }, ". Je dis : « ", { t: "J'habite dans un village", k: true }, ". »"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les lieux du village :"], items: [
          ["l'école le riz"],
          ["le puits la jupe"],
          ["la boutique la lune"],
          ["le marché le mur"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète chaque phrase avec case, école, puits ou marché :"], items: [
          ["a) Les habitants habitent dans une ............"],
          ["b) Les enfants apprennent à l'............"],
          ["c) On tire de l'eau au ............"],
          ["d) On achète des bananes au ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Réponds aux questions de la maîtresse :"], items: [
          ["1) Où habites-tu ?"],
          ["2) Qu'est-ce qu'il y a dans ton village ?"],
          ["3) Où vas-tu pour acheter du savon ?"],
          ["4) Où vas-tu chercher de l'eau ?"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "l'école, le puits, la boutique, le marché", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["a) ", { t: "case", r: true }, " (1,5 pt) — b) ", { t: "école", r: true }, " (1,5 pt) — c) ", { t: "puits", r: true }, " (1,5 pt) — d) ", { t: "marché", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["Réponses orales : 1) ", { t: "J'habite dans un village", r: true }, " — 2) ", { t: "Il y a une école, un puits...", r: true }, " — 3) ", { t: "À la boutique", r: true }, " — 4) ", { t: "Au puits", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 52 =================
    {
      n: 52, titre: "Les lieux du village", titreFiche: "Les lieux du village : je les connais",
      objectif: "Nommer les lieux du village et dire ce qu'on y fait.",
      supportFiche: "Cartes-mots des lieux, affiche du village, tableau noir.",
      image: null,
      revision: {
        ens: ["Nommez les lieux du village vus hier. — Où va-t-on chercher de l'eau ?"],
        app: ["R.A. : ", { t: "la case, l'école, la boutique, le puits, le marché", r: true }, " — au ", { t: "puits", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["Jeu des devinettes : « On y apprend... c'est quoi ? L'école ! » À vous de deviner les autres !"],
        app: ["Devinent : l'école, puis écoutent les devinettes suivantes avec enthousiasme."],
        technique: ["Jeu de devinettes"], support: "Cartes-mots des lieux",
      },
      presentation: {
        ens: ["Aujourd'hui, nous relions chaque lieu du village à ce qu'on y fait. Après cette séance, vous connaîtrez le métier de chaque lieu !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez bien ces cartes-mots. » Lisez chaque lieu avec moi : école... puits... marché... église..."],
        app: ["Lisent chaque carte à haute voix, puis les observent."],
        technique: ["Lecture des cartes"], support: "Cartes-mots des lieux",
      },
      analyse: {
        ens: { paras: [
          ["1) Que fait-on à l'école ?"],
          ["2) Que fait-on au puits ?"],
          ["3) Que fait-on au marché ?"],
          ["4) Que fait-on à l'église ?"],
        ] },
        app: { paras: [
          ["R.A. : On y ", { t: "apprend", r: true }, "."],
          ["R.A. : On y ", { t: "tire de l'eau", r: true }, "."],
          ["R.A. : On y ", { t: "achète et on y vend", r: true }, "."],
          ["R.A. : On y ", { t: "prie", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Cartes-mots des lieux",
      },
      synthese: {
        ens: ["Donc : à l'école, on apprend ; au puits, on tire de l'eau ; au marché, on achète et on vend ; à l'église, on prie."],
        app: ["Répètent les 4 couples lieu + action en chœur, puis avec les cartes."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Je dis une action, vous dites le lieu : apprendre ? tirer de l'eau ? acheter du riz ? prier ?"],
        app: ["Répondent : ", { t: "l'école, le puits, le marché, l'église", r: true }, "."],
        technique: ["Jeu rapide"], support: "Cartes-mots des lieux",
      },
      evaluation: {
        ens: ["3 élèves : choisissez un lieu et dites ce qu'on y fait."],
        app: ["R.A. : ex. « À la boutique, on achète du sucre. » (lieu + action corrects)"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "2. LES LIEUX DU VILLAGE",
        subs: [
          { t: "A. Les lieux et leurs actions", paras: [
            [{ t: "l'école", k: true }, " : on y ", { t: "apprend", k: true }, " — ", { t: "le puits", k: true }, " : on y ", { t: "tire de l'eau", k: true }],
            [{ t: "le marché", k: true }, " : on y ", { t: "achète et on y vend", k: true }, " — ", { t: "l'église", k: true }, " : on y ", { t: "prie", k: true }],
          ] },
          { t: "B. Les devinettes", paras: [["« — ", { t: "On y achète du sucre.", k: true }, " — ", { t: "La boutique !", k: true }, " »"]] },
        ],
        retenir: ["Chaque lieu du village a son travail : ", { t: "l'école on y apprend, le puits on y tire de l'eau", k: true }, "."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure la bonne réponse :"], items: [
          ["1) On achète du riz : la boutique / le puits"],
          ["2) On apprend : l'école / le marché"],
          ["3) On prie : l'église / la case"],
          ["4) On tire de l'eau : le puits / la boutique"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec apprendre, eau, acheter ou prier :"], items: [
          ["1) À l'école, je vais ............"],
          ["2) Au puits, je vais tirer de l'............"],
          ["3) Au marché, je vais ............ des bananes"],
          ["4) À l'église, je vais ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Devinettes orales : dis le lieu !"], items: [
          ["1) On y vend des légumes."],
          ["2) On y apprend à lire."],
          ["3) On y tire de l'eau avec un seau."],
          ["4) On y prie le dimanche."],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "la boutique", r: true }, " — 2) ", { t: "l'école", r: true }, " — 3) ", { t: "l'église", r: true }, " — 4) ", { t: "le puits", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "apprendre", r: true }, " — 2) ", { t: "eau", r: true }, " — 3) ", { t: "acheter", r: true }, " — 4) ", { t: "prier", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "le marché", r: true }, " — 2) ", { t: "l'école", r: true }, " — 3) ", { t: "le puits", r: true }, " — 4) ", { t: "l'église", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 53 =================
    {
      n: 53, titre: "Il y a / Il n'y a pas", titreFiche: "Il y a / Il n'y a pas",
      objectif: "Dire ce qu'il y a et ce qu'il n'y a pas dans son village.",
      supportFiche: "Image « il y a / il n'y a pas », affiche du village.",
      image: { file: "s53_il_y_a.png", w: 1100, h: 560, legende: "Dans mon village, il y a une école. Il n'y a pas de train." },
      revision: {
        ens: ["Que fait-on au marché ? — Et à l'église ?"],
        app: ["R.A. : On y ", { t: "achète et on y vend", r: true }, " — on y ", { t: "prie", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Le cousin de Koto vient de la grande ville. Il demande : y a-t-il un train dans votre village ? » Comment répondre ?"],
        app: ["Proposent : « Non, il n'y a pas de train ! »"],
        technique: ["Narration questionnante"], support: "Image « il y a / il n'y a pas »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons deux formules magiques : « il y a » pour dire ce qui existe, « il n'y a pas » pour dire ce qui n'existe pas."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez bien cette image. » À gauche : il y a quoi ? À droite : il n'y a pas quoi ?"],
        app: ["Observent les deux panneaux : à gauche l'école et le puits, à droite le train barré."],
        technique: ["Observation guidée"], support: "Image « il y a / il n'y a pas »",
      },
      analyse: {
        ens: { paras: [
          ["1) Dans le village de Soa, qu'est-ce qu'il y a ?"],
          ["2) Y a-t-il un train dans le village ?"],
          ["3) Y a-t-il des arbres dans le village ?"],
          ["4) Dans ton village, y a-t-il un marché ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Il y a des cases, une école, une boutique et un puits", r: true }, "."],
          ["R.A. : Non, ", { t: "il n'y a pas de train", r: true }, "."],
          ["R.A. : Oui, ", { t: "il y a des arbres", r: true }, "."],
          ["R.A. : ", { t: "Oui, il y a un marché. / Non, il n'y a pas de marché", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Image « il y a / il n'y a pas »",
      },
      synthese: {
        ens: ["Donc : « il y a » dit ce qui existe : il y a une école. « Il n'y a pas » dit ce qui n'existe pas : il n'y a pas de train."],
        app: ["Répètent les deux formules en chœur avec des gestes : pouce levé pour il y a, pouce bas pour il n'y a pas."],
        technique: ["Travail collectif avec gestes"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu des deux coins : je dis une phrase, vous courez au coin « il y a » si c'est vrai, au coin « il n'y a pas » si c'est faux : il y a des cases ? il y a un avion ?"],
        app: ["Courent au bon coin pour chaque phrase et la répètent correctement."],
        technique: ["Jeu des deux coins"], support: "Affiche du village",
      },
      evaluation: {
        ens: ["3 élèves : dites une phrase vraie sur votre village avec il y a ou il n'y a pas."],
        app: ["R.A. : ex. « ", { t: "Il y a un puits", r: true }, ". » / « ", { t: "Il n'y a pas de train", r: true }, ". »"],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "3. IL Y A / IL N'Y A PAS",
        subs: [
          { t: "A. Dire ce qu'il y a", paras: [["« ", { t: "Dans mon village, il y a une école.", k: true }, " »"]] },
          { t: "B. Dire ce qu'il n'y a pas", paras: [["« ", { t: "Il n'y a pas de train.", k: true }, " »"]] },
        ],
        retenir: [{ t: "Il y a", k: true }, " = ça existe. ", { t: "Il n'y a pas", k: true }, " = ça n'existe pas."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Sur l'affiche du village : Vrai ou Faux ? Entoure :"], items: [
          ["1) Il y a un puits. VRAI / FAUX"],
          ["2) Il y a un train. VRAI / FAUX"],
          ["3) Il y a une école. VRAI / FAUX"],
          ["4) Il y a un avion. VRAI / FAUX"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec il y a ou il n'y a pas :"], items: [
          ["1) Dans mon village, ............ une école."],
          ["2) ............ de train dans mon village."],
          ["3) ............ des cases rondes."],
          ["4) ............ d'avion ici."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["La maîtresse dit un mot : dis une phrase avec il y a ou il n'y a pas :"], items: [
          ["1) ton école"],
          ["2) le train"],
          ["3) les cases"],
          ["4) le puits"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "VRAI", r: true }, " — 2) ", { t: "FAUX", r: true }, " — 3) ", { t: "VRAI", r: true }, " — 4) ", { t: "FAUX", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "il y a", r: true }, " — 2) ", { t: "il n'y a pas", r: true }, " — 3) ", { t: "il y a", r: true }, " — 4) ", { t: "il n'y a pas", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Réponses libres : « ", { t: "Il y a une école", r: true }, ". » / « ", { t: "Il n'y a pas de train", r: true }, ". »... (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 54 =================
    {
      n: 54, titre: "Où habites-tu ? Le dialogue", titreFiche: "Où habites-tu ? — le dialogue",
      objectif: "Poser la question « Où habites-tu ? » et y répondre dans un petit dialogue.",
      supportFiche: "Dialogue écrit au tableau, ballon (ou balle de papier).",
      image: null,
      revision: {
        ens: ["Terminez : « Dans mon village, ... une école. » — « Il n'y a pas de ... »"],
        app: ["R.A. : « ", { t: "il y a", r: true }, " une école. » — « ", { t: "train", r: true }, ". »"],
        technique: ["Phrase à compléter"],
      },
      miseEnSituation: {
        ens: ["Jeu du ballon : je lance le ballon et je demande « Où habites-tu ? ». Celui qui le reçoit répond : « J'habite dans un village. »"],
        app: ["Reçoivent le ballon et répondent à tour de rôle, ravis."],
        technique: ["Jeu du ballon"], support: "Ballon (ou balle de papier)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons tout le dialogue du nouveau voisin : la question et les réponses."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Écoutez le dialogue entre Lanto et Soa, puis observez-le au tableau. »"],
        app: ["Écoutent le dialogue lu deux fois, puis le suivent des yeux au tableau."],
        technique: ["Écoute du modèle"], support: "Dialogue écrit au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Quelle question pose Lanto ?"],
          ["2) Comment répond Soa ?"],
          ["3) Que demande encore Lanto ?"],
          ["4) Que répond Soa ?"],
        ] },
        app: { paras: [
          ["R.A. : « ", { t: "Où habites-tu ?", r: true }, " »"],
          ["R.A. : « ", { t: "J'habite dans un village, près du marché", r: true }, ". »"],
          ["R.A. : « ", { t: "Qu'est-ce qu'il y a dans ton village ?", r: true }, " »"],
          ["R.A. : « ", { t: "Il y a une école et un puits", r: true }, ". »"],
        ] },
        technique: ["Question / réponse"], support: "Dialogue écrit au tableau",
      },
      synthese: {
        ens: ["Donc : pour demander, je dis « Où habites-tu ? ». Pour répondre, je dis « J'habite... » et je peux ajouter « il y a... »."],
        app: ["Répètent question et réponse en chœur, puis par deux."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["À deux : l'un pose la question, l'autre répond avec SON village. Puis on échange les rôles !"],
        app: ["Jouent le dialogue à deux, puis échangent les rôles."],
        technique: ["Dialogue à deux"], support: "Dialogue écrit au tableau",
      },
      evaluation: {
        ens: ["3 binômes jouent le dialogue complet devant la classe."],
        app: ["R.A. : question et réponses correctes, voix forte."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "4. OÙ HABITES-TU ?",
        subs: [
          { t: "A. La question et la réponse", paras: [
            ["« — ", { t: "Où habites-tu ?", k: true }, " — ", { t: "J'habite dans un village.", k: true }, " »"],
            ["« — ", { t: "J'habite en ville.", k: true }, " »"],
          ] },
          { t: "B. Le dialogue complet", paras: [
            ["« — ", { t: "Qu'est-ce qu'il y a dans ton village ?", k: true }, " »"],
            ["« — ", { t: "Il y a une école et un puits.", k: true }, " »"],
          ] },
        ],
        retenir: ["Pour demander : « ", { t: "Où habites-tu ?", k: true }, " ». Pour répondre : « ", { t: "J'habite...", k: true }, " »."],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Remets le dialogue en ordre : numérote de 1 à 4 :"], items: [
          ["a) Qu'est-ce qu'il y a dans ton village ?"],
          ["b) Où habites-tu ?"],
          ["c) Il y a une école et un puits."],
          ["d) J'habite dans un village, près du marché."],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète le dialogue avec Où, habites, il y a, Il y a :"], items: [
          ["1) — ............ habites-tu ?"],
          ["2) — J'............ dans un village."],
          ["3) — Qu'est-ce qu'............ dans ton village ?"],
          ["4) — ............ une école et un puits."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Joue le dialogue à deux. La maîtresse observe :"], items: [
          ["1) Je parle fort et clairement ....... / 1,5 pt"],
          ["2) Je pose la bonne question ....... / 1,5 pt"],
          ["3) Je donne la bonne réponse ....... / 1,5 pt"],
          ["4) Je regarde mon camarade ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Ordre : 1) ", { t: "b", r: true }, " — 2) ", { t: "d", r: true }, " — 3) ", { t: "a", r: true }, " — 4) ", { t: "c", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "Où", r: true }, " — 2) ", { t: "habites", r: true }, " — 3) ", { t: "il y a", r: true }, " — 4) ", { t: "Il y a", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 55 =================
    {
      n: 55, titre: "La comptine du village", titreFiche: "La comptine du village",
      objectif: "Réciter la comptine du village avec joie, en articulant bien.",
      supportFiche: "Affiche « la comptine du village », tableau noir.",
      image: { file: "s55_comptine_village.png", w: 1100, h: 620, legende: "La comptine du village : « Mon village, c'est mon chez-moi ! »" },
      revision: {
        ens: ["Posez la question du voisin à votre camarade. — Et sa réponse ?"],
        app: ["R.A. : « ", { t: "Où habites-tu ?", r: true }, " » — « ", { t: "J'habite dans un village", r: true }, ". »"],
        technique: ["Question / réponse en binômes"],
      },
      miseEnSituation: {
        ens: ["« Notre village a maintenant SA comptine ! Écoutez... » L'enseignant récite la comptine avec de grands gestes."],
        app: ["Écoutent, frappent dans les mains à la fin."],
        technique: ["Narration avec gestes"], support: "Affiche « la comptine du village »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons la comptine de notre village. Après cette séance, vous la connaîtrez par cœur !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette affiche. » Suivez chaque vers avec votre doigt pendant que je récite lentement."],
        app: ["Suivent les vers des yeux et du doigt, en écoutant."],
        technique: ["Écoute du modèle"], support: "Affiche « la comptine du village »",
      },
      analyse: {
        ens: { paras: [
          ["1) Où dorment les cases ?"],
          ["2) Qu'est-ce qui ouvre ses grands livres ?"],
          ["3) Où l'eau rit-elle ?"],
          ["4) Que dis-je au marché ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Sous le toit", r: true }, "."],
          ["R.A. : ", { t: "L'école", r: true }, "."],
          ["R.A. : ", { t: "Au puits", r: true }, "."],
          ["R.A. : ", { t: "Bonjour", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « la comptine du village »",
      },
      synthese: {
        ens: ["Donc : ma comptine raconte mon village : le chez-moi, le toit, l'école, le puits, le marché. Je la récite avec le cœur !"],
        app: ["Répètent chaque vers après l'enseignant, puis deux vers entiers."],
        technique: ["Répétition par vers"], support: "Affiche « la comptine du village »",
      },
      application: {
        ens: ["Récitons ensemble, avec les gestes : les mains en toit, les pages qui tournent, l'eau qui chante, la main qui salue !"],
        app: ["Récitent toute la comptine en chœur avec les gestes."],
        technique: ["Récitation avec gestes"], support: "Affiche « la comptine du village »",
      },
      evaluation: {
        ens: ["3 élèves récitent les deux premiers vers, seuls."],
        app: ["R.A. : les deux vers correctement, avec le sourire."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "5. LA COMPTINE DU VILLAGE",
        subs: [
          { t: "A. La comptine", paras: [
            ["« ", { t: "Mon village, c'est mon chez-moi,", k: true }, " »"],
            ["« ", { t: "mes cases dorment sous le toit.", k: true }, " »"],
          ] },
          { t: "B. La dire avec le cœur", paras: [["Je récite ", { t: "fort", k: true }, ", avec ", { t: "le sourire", k: true }, " et les ", { t: "gestes", k: true }, " !"]] },
        ],
        retenir: ["Ma comptine : « ", { t: "Mon village, c'est mon chez-moi", k: true }, " » — je la connais par cœur !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Récite les deux premiers vers. La maîtresse observe :"], items: [
          ["1) « Mon village, c'est mon chez-moi » ....... / 2 pts"],
          ["2) « mes cases dorment sous le toit » ....... / 2 pts"],
          ["3) Je récite sans aide ....... / 2 pts"],
          ["4) Je récite avec le sourire ....... / 2 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète les vers de la comptine :"], items: [
          ["1) Mon village, c'est mon ............"],
          ["2) Mes cases dorment sous le ............"],
          ["3) Au puits, l'eau ............ quand on arrive."],
          ["4) Au marché, je dis ............"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Vrai ou Faux (entoure) — sur la comptine :"], items: [
          ["1) L'école ouvre ses grands livres. VRAI / FAUX"],
          ["2) L'eau pleure au puits. VRAI / FAUX"],
          ["3) Au marché, je dis au revoir. VRAI / FAUX"],
          ["4) Mon village est plein d'amour. VRAI / FAUX"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Grille orale (8 pts) : vers 1 (2 pts) + vers 2 (2 pts) + mémoire (2 pts) + joie (2 pts)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "chez-moi", r: true }, " (1,5 pt) — 2) ", { t: "toit", r: true }, " (1,5 pt) — 3) ", { t: "rit", r: true }, " (1,5 pt) — 4) ", { t: "bonjour", r: true }, " (1,5 pt)."]] },
        { titre: "Exercice 3", lines: [["1) ", { t: "VRAI", r: true }, " — 2) ", { t: "FAUX", r: true }, " (elle rit !) — 3) ", { t: "FAUX", r: true }, " (bonjour !) — 4) ", { t: "VRAI", r: true }, " (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 56 =================
    {
      n: 56, titre: "Ma maison dans le village", titreFiche: "Ma maison dans le village",
      objectif: "Nommer les parties de la maison et décrire sa maison.",
      supportFiche: "Affiche « Mon village », maquette simple de case (carton), tableau noir.",
      image: null,
      revision: {
        ens: ["Récitez les deux premiers vers de la comptine du village."],
        app: ["Récitent : « ", { t: "Mon village, c'est mon chez-moi, mes cases dorment sous le toit", r: true }, ". »"],
        technique: ["Récitation"],
      },
      miseEnSituation: {
        ens: ["« Soa fait visiter sa case : entrez ! Regardez : voici la porte, la fenêtre... Aujourd'hui, nous décrivons nos maisons ! »"],
        app: ["Écoutent et observent l'affiche avec intérêt."],
        technique: ["Narration"], support: "Affiche « Mon village »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons les parties de la maison : la porte, la fenêtre, le toit, les murs — et chacun décrit sa maison."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez les cases de l'affiche. » Montrez la porte... le toit... la fenêtre..."],
        app: ["Montrent chaque partie sur l'affiche en la nommant."],
        technique: ["Observation guidée"], support: "Affiche « Mon village »",
      },
      analyse: {
        ens: { paras: [
          ["1) Comment entre-t-on dans la maison ?"],
          ["2) Par où entre la lumière ?"],
          ["3) Qu'est-ce qui couvre la maison ?"],
          ["4) Qu'est-ce qui tient le toit ?"],
        ] },
        app: { paras: [
          ["R.A. : Par ", { t: "la porte", r: true }, "."],
          ["R.A. : Par ", { t: "la fenêtre", r: true }, "."],
          ["R.A. : ", { t: "Le toit", r: true }, "."],
          ["R.A. : ", { t: "Les murs", r: true }, "."],
        ] },
        technique: ["Question / réponse"], support: "Affiche « Mon village »",
      },
      synthese: {
        ens: ["Donc : la maison a une porte, des fenêtres, un toit et des murs. Je décris : « Ma maison a une porte et deux fenêtres. »"],
        app: ["Répètent les 4 mots en chœur, puis la phrase de description."],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Chacun votre tour : décrivez votre maison en une phrase : « Ma maison a ... portes et ... fenêtres. »"],
        app: ["Disent leur phrase avec les nombres de leur maison."],
        technique: ["Chaîne parlée"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : nommez 2 parties de la maison et dites une phrase de description."],
        app: ["R.A. : ", { t: "porte, fenêtre, toit, murs", r: true }, " + phrase correcte."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "6. MA MAISON",
        subs: [
          { t: "A. Les parties de la maison", paras: [[{ t: "la porte", k: true }, " — ", { t: "la fenêtre", k: true }, " — ", { t: "le toit", k: true }, " — ", { t: "le mur", k: true }]] },
          { t: "B. Décrire ma maison", paras: [["« ", { t: "Ma maison a une porte et deux fenêtres.", k: true }, " »"]] },
        ],
        retenir: ["Ma maison a ", { t: "une porte, des fenêtres, un toit, des murs", k: true }, ". Je sais la décrire !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Entoure les parties de la maison :"], items: [
          ["la porte la banane"],
          ["le toit la plume"],
          ["la fenêtre le puits"],
          ["le mur la lune"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec porte, fenêtre, toit ou murs :"], items: [
          ["1) J'ouvre la ............ pour entrer."],
          ["2) La lumière entre par la ............"],
          ["3) La pluie tombe sur le ............"],
          ["4) Les ............ sont solides."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Décris ta maison — réponds aux questions :"], items: [
          ["1) Combien de portes a ta maison ?"],
          ["2) Combien de fenêtres ?"],
          ["3) De quelle couleur est le toit ?"],
          ["4) Aimes-tu ta maison ?"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Mots à entourer : ", { t: "la porte, le toit, la fenêtre, le mur", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "porte", r: true }, " — 2) ", { t: "fenêtre", r: true }, " — 3) ", { t: "toit", r: true }, " — 4) ", { t: "murs", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Réponses libres : « Elle a deux portes. » / « Trois fenêtres. » / « Le toit est rouge. » / « Oui ! » (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 57 =================
    {
      n: 57, titre: "Où est le chat ?", titreFiche: "Où est le chat ? (sur, sous, dans, derrière)",
      objectif: "Situer les choses avec : sur, sous, dans, devant, derrière.",
      supportFiche: "Image « où est le chat ? », cahier et table de la classe.",
      image: { file: "s57_ou_est_chat.png", w: 1100, h: 560, legende: "Le chat est sur la table, sous la table, dans la boîte, derrière l'arbre." },
      revision: {
        ens: ["Nommez les parties de la maison. — Par où entre-t-on ?"],
        app: ["R.A. : ", { t: "la porte, la fenêtre, le toit, les murs", r: true }, " — par ", { t: "la porte", r: true }, "."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Miaou ! Le chat de Koto se cache partout ! Où est-il ? Sur le toit ? Sous la table ? Cherchons-le ! »"],
        app: ["Cherchent du regard et proposent des réponses, amusés."],
        technique: ["Narration jeu"], support: "Image « où est le chat ? »",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons les mots de la cachette : sur, sous, dans, devant, derrière. Avec eux, on trouve tout !"],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Regardez et observez bien cette image. » Où est le chat dans chaque dessin ? Suivez ses cachettes !"],
        app: ["Observent les 4 dessins : sur la table, sous la table, dans la boîte, derrière l'arbre."],
        technique: ["Observation guidée"], support: "Image « où est le chat ? »",
      },
      analyse: {
        ens: { paras: [
          ["1) Où est le chat sur le premier dessin ?"],
          ["2) Et sur le deuxième dessin ?"],
          ["3) Sur le troisième dessin ?"],
          ["4) Sur le quatrième dessin ?"],
        ] },
        app: { paras: [
          ["R.A. : Il est ", { t: "sur", r: true }, " la table."],
          ["R.A. : Il est ", { t: "sous", r: true }, " la table."],
          ["R.A. : Il est ", { t: "dans", r: true }, " la boîte."],
          ["R.A. : Il est ", { t: "derrière", r: true }, " l'arbre."],
        ] },
        technique: ["Question / réponse"], support: "Image « où est le chat ? »",
      },
      synthese: {
        ens: ["Donc : sur = dessus ; sous = en dessous ; dans = à l'intérieur ; devant = de face ; derrière = caché au fond. Le chat est sur le toit !"],
        app: ["Répètent les 5 mots avec des gestes : main dessus, main dessous, mains qui enferment, main devant, pouce par-dessus l'épaule."],
        technique: ["Travail collectif avec gestes"], support: "Tableau noir",
      },
      application: {
        ens: ["Jeu « Où est Koto ? » : un élève se cache, la classe dit où il est : « Koto est sous la table ! »"],
        app: ["Se cachent et disent la position de leurs camarades avec le bon mot."],
        technique: ["Jeu de cache-cache"], support: "La classe",
      },
      evaluation: {
        ens: ["3 élèves : la maîtresse place un cahier, vous dites où il est."],
        app: ["R.A. : « Le cahier est ", { t: "sur / sous / dans / devant", r: true }, " ... » (mot correct)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "7. OÙ EST LE CHAT ?",
        subs: [
          { t: "A. Les mots pour situer", paras: [[{ t: "sur", k: true }, " — ", { t: "sous", k: true }, " — ", { t: "dans", k: true }, " — ", { t: "devant", k: true }, " — ", { t: "derrière", k: true }]] },
          { t: "B. Dire où est le chat", paras: [["« ", { t: "Le chat est sur le toit.", k: true }, " » — « ", { t: "Le chat est sous la table.", k: true }, " »"]] },
        ],
        retenir: ["Je situe avec ", { t: "sur, sous, dans, devant, derrière", k: true }, " : « Le chat est ", { t: "dans", k: true }, " la boîte ! »"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Sur l'image : coche la bonne réponse :"], items: [
          ["1) Le chat est ... la table. (sur / derrière)"],
          ["2) Le chat est ... la table. (sous / dans)"],
          ["3) Le chat est ... la boîte. (dans / sur)"],
          ["4) Le chat est ... l'arbre. (derrière / sous)"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec sur, sous, dans ou derrière :"], items: [
          ["1) Le chat est monté ............ le toit."],
          ["2) Le chat se cache ............ le lit."],
          ["3) Le chat dort ............ le panier."],
          ["4) Le chat attend ............ la porte."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Place le cahier comme la maîtresse le dit, puis dis où il est :"], items: [
          ["1) sur la table"],
          ["2) sous la chaise"],
          ["3) dans le sac"],
          ["4) derrière ton dos"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "sur", r: true }, " — 2) ", { t: "sous", r: true }, " — 3) ", { t: "dans", r: true }, " — 4) ", { t: "derrière", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "sur", r: true }, " — 2) ", { t: "sous", r: true }, " — 3) ", { t: "dans", r: true }, " — 4) ", { t: "derrière", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Phrase correcte avec le bon mot de position (1,5 pt chacun) : « Il est sur la table. »..."]] },
      ],
    },

    // ================= SÉANCE 58 =================
    {
      n: 58, titre: "Au marché du village", titreFiche: "Au marché du village : le dialogue",
      objectif: "Jouer le dialogue du marché pour acheter des fruits.",
      supportFiche: "Fruits réels ou dessinés (papaye, bananes, mangues, arachides), tableau noir.",
      image: null,
      revision: {
        ens: ["Où est le chat quand il est dans la boîte ? — Et quand il est sur le toit ?"],
        app: ["R.A. : Il est ", { t: "dans", r: true }, " la boîte — ", { t: "sur", r: true }, " le toit."],
        technique: ["Question / réponse"],
      },
      miseEnSituation: {
        ens: ["« Ce matin, Fara va au marché pour sa maman. Écoutez ce qu'elle dit à la vendeuse... »"],
        app: ["Écoutent le dialogue du marché avec attention."],
        technique: ["Narration"], support: "Fruits réels ou dessinés",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons le dialogue du marché : demander ce qu'on veut avec les mots polis, remercier, dire au revoir."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Écoutez le dialogue, puis observez-le au tableau. » Quels mots polis entendez-vous ?"],
        app: ["Repèrent : bonjour, s'il vous plaît, merci, au revoir."],
        technique: ["Écoute du modèle"], support: "Dialogue écrit au tableau",
      },
      analyse: {
        ens: { paras: [
          ["1) Que veut acheter Fara ?"],
          ["2) Quels mots polis dit-elle ?"],
          ["3) Que répond la vendeuse ?"],
          ["4) Que dit Fara en partant ?"],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "Une papaye", r: true }, "."],
          ["R.A. : ", { t: "Bonjour, s'il vous plaît, merci", r: true }, "."],
          ["R.A. : « ", { t: "Voilà la papaye. C'est tout ?", r: true }, " »"],
          ["R.A. : « ", { t: "Au revoir !", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Dialogue écrit au tableau",
      },
      synthese: {
        ens: ["Donc : au marché, je dis bonjour, je demande avec « s'il vous plaît », je remercie, je dis au revoir. Les mots polis ouvrent tous les paniers !"],
        app: ["Répètent le dialogue en chœur, puis par deux avec les fruits."],
        technique: ["Travail collectif"], support: "Fruits réels ou dessinés",
      },
      application: {
        ens: ["À deux : l'un est vendeur, l'autre achète des bananes. Puis on échange les rôles !"],
        app: ["Jouent le dialogue avec les fruits, puis échangent les rôles."],
        technique: ["Jeu de rôle à deux"], support: "Fruits réels ou dessinés",
      },
      evaluation: {
        ens: ["3 binômes jouent le dialogue du marché devant la classe."],
        app: ["R.A. : dialogue complet avec les mots polis, voix forte."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "8. AU MARCHÉ",
        subs: [
          { t: "A. Au marché, on trouve", paras: [[{ t: "la papaye", k: true }, " — ", { t: "les bananes", k: true }, " — ", { t: "les mangues", k: true }, " — ", { t: "les arachides", k: true }, " — ", { t: "le riz", k: true }]] },
          { t: "B. Le dialogue du marché", paras: [
            ["« — ", { t: "Bonjour, madame ! — Une papaye, s'il vous plaît.", k: true }, " »"],
            ["« — ", { t: "Voilà la papaye. — Merci ! Au revoir !", k: true }, " »"],
          ] },
        ],
        retenir: ["Au marché, je dis ", { t: "bonjour, s'il vous plaît, merci, au revoir", k: true }, " : les mots polis !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Remets le dialogue du marché en ordre : numérote de 1 à 4 :"], items: [
          ["a) — Une papaye, s'il vous plaît."],
          ["b) — Bonjour, madame !"],
          ["c) — Oui, merci ! Au revoir !"],
          ["d) — Voilà la papaye. C'est tout ?"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Entoure ce qu'on trouve au marché :"], items: [
          ["la papaye la porte"],
          ["les bananes la fenêtre"],
          ["les mangues le toit"],
          ["les arachides la lune"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Joue le dialogue à deux. La maîtresse observe :"], items: [
          ["1) Je dis bonjour et s'il vous plaît ....... / 1,5 pt"],
          ["2) Je demande ce que je veux ....... / 1,5 pt"],
          ["3) Je dis merci et au revoir ....... / 1,5 pt"],
          ["4) Je parle fort et clairement ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Ordre : 1) ", { t: "b", r: true }, " — 2) ", { t: "a", r: true }, " — 3) ", { t: "d", r: true }, " — 4) ", { t: "c", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["Mots à entourer : ", { t: "la papaye, les bananes, les mangues, les arachides", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, "."]] },
      ],
    },

    // ================= SÉANCE 59 =================
    {
      n: 59, titre: "Un village propre", titreFiche: "Un village propre",
      objectif: "Dire les actions pour garder le village propre.",
      supportFiche: "Balai, poubelle (ou panier), tableau noir.",
      image: null,
      revision: {
        ens: ["Jouez le début du dialogue du marché : que dit Fara à la vendeuse ?"],
        app: ["R.A. : « ", { t: "Bonjour, madame ! Une papaye, s'il vous plaît.", r: true }, " »"],
        technique: ["Jeu de rôle express"],
      },
      miseEnSituation: {
        ens: ["« Le chef du village cherche des champions de la propreté ! Qui sait garder le village propre ? Aujourd'hui, nous devenons gardiens du village ! »"],
        app: ["Écoutent, motivés à l'idée d'être champions."],
        technique: ["Narration"], support: "Balai, poubelle (ou panier)",
      },
      presentation: {
        ens: ["Aujourd'hui, nous apprenons les actions de la propreté : balayer, jeter les déchets à la poubelle, laver les mains, arroser le jardin."],
        app: ["Écoutent."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez mes gestes. » L'enseignant mime : balayer, jeter à la poubelle, laver les mains, arroser."],
        app: ["Observent les mimes et nomment les actions connues."],
        technique: ["Mime des actions"], support: "Balai, poubelle (ou panier)",
      },
      analyse: {
        ens: { paras: [
          ["1) Que fait-on avec le balai ?"],
          ["2) Où jette-t-on les déchets ?"],
          ["3) Quand se lave-t-on les mains ?"],
          ["4) Que dit-on d'un village propre ?"],
        ] },
        app: { paras: [
          ["R.A. : On ", { t: "balaie", r: true }, " la cour."],
          ["R.A. : Dans ", { t: "la poubelle", r: true }, "."],
          ["R.A. : ", { t: "Avant de manger", r: true }, ", après les toilettes."],
          ["R.A. : Il est ", { t: "beau et sain", r: true }, " !"],
        ] },
        technique: ["Question / réponse"], support: "Balai, poubelle (ou panier)",
      },
      synthese: {
        ens: ["Donc : je balaie la cour, je jette les déchets à la poubelle, je me lave les mains. Un village propre, c'est un village beau et sain !"],
        app: ["Répètent les 4 actions en chœur en les mimant."],
        technique: ["Travail collectif avec mimes"], support: "Tableau noir",
      },
      application: {
        ens: ["Chacun votre tour, engagez-vous : « Je balaie devant ma case. » « Je jette les déchets à la poubelle. »"],
        app: ["Disent leur phrase d'engagement, main sur le cœur."],
        technique: ["Chaîne parlée"], support: "Tableau noir",
      },
      evaluation: {
        ens: ["3 élèves : dites 2 actions pour un village propre."],
        app: ["R.A. : ", { t: "balayer, jeter à la poubelle, laver les mains, arroser", r: true }, " (2 actions correctes)."],
        technique: ["Individuel oral"],
      },
      lecon: {
        titre: "9. UN VILLAGE PROPRE",
        subs: [
          { t: "A. Les bonnes actions", paras: [[{ t: "balayer la cour", k: true }, " — ", { t: "jeter les déchets à la poubelle", k: true }, " — ", { t: "laver les mains", k: true }, " — ", { t: "arroser le jardin", k: true }]] },
          { t: "B. Je m'engage", paras: [["« ", { t: "Je balaie devant ma case.", k: true }, " » — « ", { t: "Je jette les déchets à la poubelle.", k: true }, " »"]] },
        ],
        retenir: ["Un village propre est ", { t: "beau et sain", k: true }, " : je ", { t: "balaie", k: true }, ", je ", { t: "jette à la poubelle", k: true }, ", je ", { t: "me lave les mains", k: true }, " !"],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Vrai ou Faux (entoure) — pour un village propre :"], items: [
          ["1) Je jette les déchets par terre. VRAI / FAUX"],
          ["2) Je balaie la cour. VRAI / FAUX"],
          ["3) Je me lave les mains avant de manger. VRAI / FAUX"],
          ["4) Je jette les papiers dans la poubelle. VRAI / FAUX"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Complète avec balaie, poubelle, lave ou arrosons :"], items: [
          ["1) Koto ............ la cour avec le balai."],
          ["2) Je jette les déchets dans la ............"],
          ["3) Fara ............ les mains avant de manger."],
          ["4) Nous ............ le jardin avec l'eau du puits."],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Ton engagement : complète et dis ta phrase :"], items: [
          ["1) Je balaie ............"],
          ["2) Je jette ............"],
          ["3) Je me lave ............"],
          ["4) Nous arrosons ............"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["1) ", { t: "FAUX", r: true }, " — 2) ", { t: "VRAI", r: true }, " — 3) ", { t: "VRAI", r: true }, " — 4) ", { t: "VRAI", r: true }, " (2 pts chacun)."]] },
        { titre: "Exercice 2", lines: [["1) ", { t: "balaie", r: true }, " — 2) ", { t: "poubelle", r: true }, " — 3) ", { t: "lave", r: true }, " — 4) ", { t: "arrosons", r: true }, " (1,5 pt chacun)."]] },
        { titre: "Exercice 3", lines: [["Réponses libres : « ...devant ma case. » / « ...les déchets à la poubelle. » / « ...les mains. » / « ...le jardin. » (1,5 pt chacun)."]] },
      ],
    },

    // ================= SÉANCE 60 =================
    {
      n: 60, titre: "Performance finale : mon village", titreFiche: "Performance finale : mon village",
      objectif: "Montrer tout ce que je sais dire sur mon village.",
      supportFiche: "Affiche du village, cartes des lieux, trophée du champion.",
      image: { file: "s60_performance_village.png", w: 1100, h: 520, legende: "Bravo ! Je connais mon village et je sais en parler !" },
      revision: {
        ens: ["Répétition générale : récitons toute la comptine du village avec les gestes !"],
        app: ["Récitent la comptine complète en chœur, avec les gestes."],
        technique: ["Récitation collective"],
      },
      miseEnSituation: {
        ens: ["« Aujourd'hui : la grande performance du village ! Trois épreuves, et le trophée du champion pour les meilleurs ! Prêts ? »"],
        app: ["Crient : « Prêts ! », fiers et motivés."],
        technique: ["Narration"], support: "Trophée du champion",
      },
      presentation: {
        ens: ["Trois épreuves : nommer les lieux, dire il y a / il n'y a pas, jouer le marché. Écoutez bien le barème de chaque épreuve."],
        app: ["Écoutent le déroulé des épreuves."], technique: ["Annonce orale"], support: "Tableau noir",
      },
      observation: {
        ens: ["« Observez l'affiche une dernière fois. » Repassons ensemble : les lieux, il y a / il n'y a pas, le dialogue du marché."],
        app: ["Récapitulent en chœur : les lieux, les formules, le dialogue."],
        technique: ["Récapitulation"], support: "Affiche du village",
      },
      analyse: {
        ens: { paras: [
          ["1) Quels sont les lieux du village ?"],
          ["2) Comment dire ce qu'il y a ? Ce qu'il n'y a pas ?"],
          ["3) Comment acheter une papaye au marché ?"],
          ["4) Récitez le début de la comptine."],
        ] },
        app: { paras: [
          ["R.A. : ", { t: "La case, l'école, la boutique, le puits, le marché", r: true }, "."],
          ["R.A. : « ", { t: "Il y a...", r: true }, " » / « ", { t: "Il n'y a pas...", r: true }, " »"],
          ["R.A. : « ", { t: "Bonjour, une papaye, s'il vous plaît. Merci !", r: true }, " »"],
          ["R.A. : « ", { t: "Mon village, c'est mon chez-moi...", r: true }, " »"],
        ] },
        technique: ["Question / réponse"], support: "Affiche du village",
      },
      synthese: {
        ens: ["Donc : je sais nommer les lieux, dire il y a / il n'y a pas, jouer le marché et réciter ma comptine. Je suis champion de mon village !"],
        app: ["Répètent le défi : « Je suis champion de mon village ! »"],
        technique: ["Travail collectif"], support: "Tableau noir",
      },
      application: {
        ens: ["Répétition générale par binômes : lieux + phrases + mini-dialogue, sans aide."],
        app: ["Répètent les trois épreuves en binômes, prêts pour la performance."],
        technique: ["Répétition en binômes"], support: "Affiche du village",
      },
      evaluation: {
        ens: ["L'enseignant fait passer les 3 épreuves et note sur 20 : /8 + /6 + /6."],
        app: ["Passent les épreuves l'un après l'autre, devant la classe."],
        technique: ["Performance individuelle"],
      },
      lecon: {
        titre: "10. MON VILLAGE : BILAN",
        subs: [
          { t: "A. Les lieux", paras: [[{ t: "la case — l'école — la boutique — le puits — le marché — l'église", k: true }]] },
          { t: "B. Les phrases gagnantes", paras: [
            ["« ", { t: "J'habite dans un village.", k: true }, " » — « ", { t: "Il y a une école.", k: true }, " »"],
            ["« ", { t: "Il n'y a pas de train.", k: true }, " » — « ", { t: "Où habites-tu ?", k: true }, " »"],
          ] },
        ],
        retenir: ["Je connais mon village et je sais en parler : ", { t: "je suis champion de mon village !", k: true }],
      },
      exercices: [
        { titre: "Exercice 1", pts: 8, consigne: ["Épreuve 1 — Nomme 3 lieux du village, bien prononcés :"], items: [
          ["1) ............ / 1,5 pt"],
          ["2) ............ / 1,5 pt"],
          ["3) ............ / 1 pt"],
          ["4) Je parle fort et clairement ....... / 4 pts"],
        ] },
        { titre: "Exercice 2", pts: 6, consigne: ["Épreuve 2 — Dis tes phrases avec il y a et il n'y a pas :"], items: [
          ["1) « Dans mon village, il y a ............ » / 1,5 pt"],
          ["2) « Il y a ............ » / 1,5 pt"],
          ["3) « Il n'y a pas de ............ » / 1,5 pt"],
          ["4) Je parle sans aide ....... / 1,5 pt"],
        ] },
        { titre: "Exercice 3", pts: 6, consigne: ["Épreuve 3 — Joue le dialogue du marché avec un camarade :"], items: [
          ["1) Je dis bonjour et s'il vous plaît ....... / 1,5 pt"],
          ["2) Je demande ce que je veux ....... / 1,5 pt"],
          ["3) Je dis merci et au revoir ....... / 1,5 pt"],
          ["4) Je joue sans lire ....... / 1,5 pt"],
        ] },
      ],
      corrige: [
        { titre: "Exercice 1", lines: [["Épreuve 1 (8 pts) : 3 lieux (1,5 + 1,5 + 1) + clarté (4) — ex. : ", { t: "la case, l'école, le puits", r: true }, "."]] },
        { titre: "Exercice 2", lines: [["Épreuve 2 (6 pts) : 1,5 pt par phrase correcte — ex. : ", { t: "il y a un puits / il n'y a pas de train", r: true }, "."]] },
        { titre: "Exercice 3", lines: [["Grille orale (6 pts) : ", { t: "1,5 pt par critère validé", r: true }, ". Bravo, le trophée du village !"]] },
      ],
    },
  ],
};

module.exports = { theme6 };
