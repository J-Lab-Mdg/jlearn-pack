// Contenus V2 — Trimestre 1 (séances 1 à 19)
const H = require("./helpers");
const { h, hh, ul, fig, methode, formule, attention, retenir, exemple, table, numeration, conversion, op, mult, div, preuve9, ex, qcm, vf, exc, newFiche, ensLines } = H;

const M = {};

// =====================================================================
// S1 — Les nombres jusqu'à 10 000
// =====================================================================
M.num10000 = {
  image: { file: "v1:image2.jpg", legende: "Au marché de Mahamasina, à Antananarivo : les prix s'écrivent avec des nombres de 4 chiffres." },
  exoFigure: { file: "scene:exos_nombres.jpg", legende: "Au tableau : 3 085, 1 848 et 9 999 placés dans le tableau de numération (UM, C, D, U).", widthCm: 11 },
  lecon: [
    h("1. Les classes et le tableau de numération"),
    "Un nombre s'écrit avec des **chiffres** (0, 1, 2, 3, 4, 5, 6, 7, 8, 9). Les chiffres sont groupés par **classes de 3 chiffres**, en partant de la droite : la **classe des unités simples**, puis la **classe des mille**.",
    "Dans chaque classe, il y a trois rangs : les **centaines (C)**, les **dizaines (D)** et les **unités (U)**.",
    numeration([3085, 1848, 9999, 10000], { titre: "Tableau de numération : 3 085, 1 848, 9 999 et 10 000" }),
    retenir("Pour écrire un nombre en chiffres, on laisse un **petit espace entre les classes** : 3 085 (et non 3085). Le chiffre 0 marque un rang vide : dans 3 085, il n'y a pas de centaine."),
    h("2. Lire et écrire un nombre"),
    methode("Méthode 1 — Lire un nombre écrit en chiffres", [
      "Je sépare les classes par un petit espace tous les 3 chiffres en partant de la droite : 3085 → 3 085.",
      "Je lis la classe des mille en ajoutant le mot « mille » : **trois mille**.",
      "Je lis la classe des unités simples : **quatre-vingt-cinq**.",
      "3 085 se lit : **trois mille quatre-vingt-cinq**.",
    ]),
    methode("Méthode 2 — Écrire en chiffres un nombre dicté", [
      "Je repère le mot « mille » : ce qui est avant est la classe des mille, ce qui est après est la classe des unités.",
      "J'écris la classe des mille, puis la classe des unités **sur 3 chiffres** (je complète avec des 0).",
      "« Cinq mille vingt et un » → 5 | 021 → **5 021**.",
    ]),
    attention("« Mille » est invariable : on écrit **deux mille** (sans s). On ne dit pas « un mille » : 1 848 se lit **mille huit cent quarante-huit**. « Cent » prend un s seulement s'il termine le nombre : deux cents, mais deux cent trois."),
    h("3. Décomposer un nombre"),
    exemple("3 085 = 3 000 + 80 + 5 = (3 × 1 000) + (8 × 10) + (5 × 1)."),
    "Dans 3 085 : le chiffre des unités de mille est 3, le chiffre des centaines est 0, le chiffre des dizaines est 8, le chiffre des unités est 5.",
    h("4. Comparer et ranger des nombres"),
    methode("Méthode — Comparer deux nombres", [
      "Je compte les chiffres : **le nombre qui a le plus de chiffres est le plus grand** (2 286 > 777).",
      "S'ils ont le même nombre de chiffres, je compare **chiffre par chiffre en partant de la gauche** : 3 085 et 3 008 → 3 = 3, 0 = 0, 8 > 0 donc 3 085 > 3 008.",
      "Signes : **>** « plus grand que », **<** « plus petit que », **=** « égal à ». La pointe du signe est toujours tournée vers le plus petit nombre.",
    ]),
    "**Ranger par ordre croissant**, c'est du plus petit au plus grand ; **par ordre décroissant**, du plus grand au plus petit.",
    h("5. Repérer un nombre sur la droite graduée"),
    fig("droite_10000", "Sur cette droite, une graduation vaut 1 000 : 3 085 est un peu après 3 000 ; 7 500 est au milieu entre 7 000 et 8 000.", 15),
  ],
};

// =====================================================================
// S2 — L'addition
// =====================================================================
M.addition = {
  image: { file: "v1:image5.jpg", legende: "À la cantine scolaire : pour connaître le nombre total de repas servis, on additionne." },
  exoFigure: null,
  lecon: [
    h("1. Le sens de l'addition"),
    "L'addition permet de **réunir** plusieurs quantités pour trouver le **total**. Le résultat d'une addition s'appelle la **somme** ; les nombres que l'on additionne sont les **termes**.",
    exemple("La cantine a servi 1 245 repas lundi et 1 380 repas mardi. En tout : 1 245 + 1 380 = 2 625 repas."),
    "Mots qui indiquent une addition : en tout, au total, la somme, ensemble, de plus, augmenter, ajouter, gagner.",
    h("2. Poser et calculer une addition"),
    methode("Méthode 1 — L'addition posée sans retenue", [
      "Je pose les nombres **en colonnes** : unités sous unités, dizaines sous dizaines, centaines sous centaines, mille sous mille.",
      "Je calcule **de droite à gauche**, colonne par colonne.",
    ]),
    op(1245, "+", 1380, null),
    methode("Méthode 2 — L'addition posée avec retenue", [
      "Quand le total d'une colonne dépasse 9, j'écris le chiffre des unités et je **retiens** la dizaine : je l'écris en petit (en rouge) en haut de la colonne suivante.",
      "Exemple : 7 804 + 9 879. Unités : 4 + 9 = 13, j'écris 3 et je retiens 1. Dizaines : 1 + 0 + 7 = 8. Centaines : 8 + 8 = 16, j'écris 6, je retiens 1. Mille : 1 + 7 + 9 = 17.",
    ]),
    op(7804, "+", 9879),
    h("3. Les propriétés de l'addition"),
    ul(["**On peut changer l'ordre des termes** sans changer la somme : 25 + 8 = 8 + 25 = 33.", "**On peut regrouper les termes** pour calculer plus vite : 17 + 25 + 3 = (17 + 3) + 25 = 20 + 25 = 45.", "**Ajouter 0 ne change rien** : 356 + 0 = 356."]),
    h("4. Vérifier une addition"),
    methode("Méthode 1 — Refaire le calcul dans l'autre sens", ["Je recalcule en additionnant de bas en haut : si je trouve la même somme, le calcul est juste."]),
    methode("Méthode 2 — La soustraction", ["Somme − un terme = l'autre terme : 17 683 − 9 879 = 7 804 ✔"]),
    methode("Méthode 3 — La preuve par 9", [
      "Je calcule la somme des chiffres de chaque terme, et je recommence jusqu'à obtenir un seul chiffre (si je trouve 9, j'écris 0).",
      "7 804 → 7 + 8 + 0 + 4 = 19 → 1 + 9 = 10 → 1. 9 879 → 9 + 8 + 7 + 9 = 33 → 6. Somme des deux : 1 + 6 = 7.",
      "Résultat 17 683 → 1 + 7 + 6 + 8 + 3 = 25 → 7. On trouve 7 des deux côtés : l'addition est juste.",
    ]),
    retenir("Additionner, c'est réunir. Je pose toujours **unités sous unités** et je n'oublie pas la **retenue**."),
  ],
};

// =====================================================================
// S3 — La soustraction
// =====================================================================
M.soustraction = {
  image: { file: "scene:soustraction_marche.jpg", legende: "Au marché : la marchande de riz rend la monnaie. Pour savoir combien rendre, elle soustrait : 3 067 − 2 826." },
  exoFigure: null,
  lecon: [
    h("1. Le sens de la soustraction"),
    "La soustraction permet de **retirer** une quantité, de calculer **ce qui reste**, ou de trouver **la différence** (l'écart) entre deux nombres. Le résultat s'appelle la **différence**.",
    "Mots qui indiquent une soustraction : il reste, la différence, l'écart, de moins, diminuer, enlever, perdre, dépenser, combien manque-t-il.",
    attention("On soustrait toujours **le plus petit nombre du plus grand** : 3 067 − 2 826 est possible, mais on ne peut pas calculer 2 826 − 3 067 avec les nombres que nous connaissons. L'ordre des termes ne peut pas être changé."),
    h("2. Poser et calculer une soustraction"),
    methode("Méthode 1 — Soustraction posée sans retenue", ["Je pose le plus grand nombre en haut, unités sous unités, et je soustrais colonne par colonne de droite à gauche."]),
    op(2625, "-", 2410),
    methode("Méthode 2 — Soustraction posée avec retenue (méthode par compensation)", [
      "Quand le chiffre du haut est plus petit que le chiffre du bas, **j'ajoute 10 au chiffre du haut** (petit 1 rouge devant lui) et, pour compenser, **j'ajoute 1 au chiffre du bas de la colonne suivante** (petit 1 rouge sous le chiffre).",
      "Exemple : 3 067 − 2 826. Unités : 7 − 6 = 1. Dizaines : 6 − 2 = 4. Centaines : 0 est plus petit que 8 → 10 − 8 = 2, et je reporte 1 sous le 2 des mille. Mille : 3 − (2 + 1) = 0.",
    ]),
    op(3067, "-", 2826),
    h("3. Vérifier une soustraction"),
    methode("Méthode — L'addition", ["Différence + nombre soustrait = nombre de départ : 241 + 2 826 = 3 067 ✔ C'est la preuve de la soustraction."]),
    retenir("Soustraire, c'est retirer ou comparer. Le plus grand nombre se place en haut ; la retenue s'ajoute **en bas dans la colonne suivante**."),
  ],
};

// =====================================================================
// S4 (nouvelle) — Problèmes : choisir l'opération
// =====================================================================
M.pb_choisir_op = {
  meta: { "Sous-discipline": "Problèmes", "Thème": "Situations additives et soustractives", "Objectif spécifique": "Reconnaître dans un énoncé une situation additive ou soustractive ; choisir l'opération qui convient ; rédiger la solution d'un problème (opération, phrase-réponse) (guide pédagogique 8e, p. 12-13 et 20-23).", "Support et matériel": "trois énoncés courts écrits au tableau, un tableau à deux colonnes « Je cherche… / J'utilise… »", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Ajoute 25 à 348.", "373."], ["Enlève 19 à 500.", "481."]],
    mise: "Fara a 3 450 Ar dans sa tirelire. Sa grand-mère lui donne 1 500 Ar. Puis elle achète un cahier à 1 200 Ar. Combien lui reste-t-il ? Quelles opérations faut-il faire ?",
    titre: "Problèmes : choisir l'opération", objectifEleve: "reconnaître si un problème se résout par une addition ou par une soustraction, et rédiger la solution",
    observation: "les trois énoncés écrits au tableau et le tableau « Je cherche… / J'utilise… »", support: "Tableau noir avec les énoncés et le tableau « Je cherche… / J'utilise… »",
    note: "Faire souligner les données et encadrer la question avant de choisir l'opération.",
    analyse: [["Dans le premier énoncé, que cherche-t-on ?", "Le total, ce que Fara possède après le cadeau : on additionne."], ["Dans le deuxième, que cherche-t-on ?", "Ce qui reste après l'achat : on soustrait."], ["Quels mots aident à reconnaître une addition ? une soustraction ?", "Addition : en tout, au total, de plus, gagne. Soustraction : il reste, de moins, dépense, la différence, combien manque-t-il."], ["Comment présente-t-on la solution ?", "L'opération posée, le calcul en ligne avec l'unité, puis une phrase-réponse."]],
    synthese: "Donc, pour résoudre un problème, je lis l'énoncé deux fois, je repère les données et la question, je choisis l'opération (addition pour réunir ou ajouter ; soustraction pour retirer, comparer ou compléter), je calcule et j'écris une phrase-réponse.",
    appEns: ["Résous les problèmes suivants.", "1. Un car transporte 1 235 passagers le matin et 2 480 l'après-midi. Combien de passagers en tout ?", "2. Un réservoir contient 5 000 L d'eau. On en utilise 3 275 L. Combien reste-t-il ?", "3. Un marchand a 2 500 mangues. Il en vend 1 830. Combien lui en reste-t-il ?", "4. Bema mesure 1 245 mm et son frère 1 380 mm. Quelle est leur différence de taille ?", "Choisis la bonne réponse.", "1. « Il reste » indique : a) une addition b) une soustraction c) une multiplication", "2. « En tout » indique : a) une soustraction b) une addition c) aucune opération", "3. Pour trouver un écart entre deux nombres, je fais : a) une addition b) une soustraction c) les deux", "4. Un problème se termine par : a) un dessin b) une phrase-réponse c) rien"],
    evalEns: ["Résous les problèmes suivants.", "1. Une école compte 1 246 filles et 1 098 garçons. Combien d'élèves en tout ?", "2. Un livre a 3 060 pages. Nirina en a lu 1 875. Combien de pages lui reste-t-il à lire ?", "3. Un commerçant avait 4 500 Ar de monnaie. Après une vente, il a 6 250 Ar. Combien a-t-il encaissé ?", "4. Une piste mesure 8 400 m. Rado a déjà parcouru 5 950 m. Quelle distance lui reste-t-il ?", "Vrai ou faux ?", "1. « Diminuer de » indique une soustraction.", "2. On peut toujours changer l'ordre des termes d'une soustraction.", "3. « Gagner » indique une addition.", "4. Avant de calculer, il faut repérer la question du problème."],
  }),
  exercices: {
    application: [
      exc("Résous les problèmes suivants.", ["Un car transporte 1 235 passagers le matin et 2 480 l'après-midi. Combien de passagers en tout ?", "Un réservoir contient 5 000 L d'eau. On en utilise 3 275 L. Combien reste-t-il ?", "Un marchand a 2 500 mangues. Il en vend 1 830. Combien lui en reste-t-il ?", "Bema mesure 1 245 mm et son frère 1 380 mm. Quelle est leur différence de taille ?"],
        [["Je cherche le **total** (« en tout ») : j'additionne.", op(1235, "+", 2480, null), "1 235 + 2 480 = 3 715 passagers.", "**Le car transporte 3 715 passagers en tout.**"],
         ["Je cherche **ce qui reste** : je soustrais.", op(5000, "-", 3275, null), "5 000 − 3 275 = 1 725 L.", "**Il reste 1 725 L d'eau.**"],
         ["« Il en vend » → il en a moins : je soustrais.", op(2500, "-", 1830, null), "2 500 − 1 830 = 670 mangues.", "**Il lui reste 670 mangues.**"],
         ["Je cherche la **différence** (l'écart) : je soustrais le plus petit du plus grand.", op(1380, "-", 1245, null), "1 380 − 1 245 = 135 mm.", "**Son frère mesure 135 mm de plus que Bema.**"]],
        ["3 715 passagers", "1 725 L", "670 mangues", "135 mm"]),
      qcm(["« Il reste » indique :   a) une addition   b) une soustraction   c) une multiplication", "« En tout » indique :   a) une soustraction   b) une addition   c) aucune opération", "Pour trouver un écart entre deux nombres, je fais :   a) une addition   b) une soustraction   c) les deux", "Un problème se termine par :   a) un dessin   b) une phrase-réponse   c) rien"], ["b) une soustraction", "b) une addition", "b) une soustraction", "b) une phrase-réponse"]),
    ],
    evaluation: [
      exc("Résous les problèmes suivants.", ["Une école compte 1 246 filles et 1 098 garçons. Combien d'élèves en tout ?", "Un livre a 3 060 pages. Nirina en a lu 1 875. Combien de pages lui reste-t-il à lire ?", "Un commerçant avait 4 500 Ar de monnaie. Après une vente, il a 6 250 Ar. Combien a-t-il encaissé ?", "Une piste mesure 8 400 m. Rado a déjà parcouru 5 950 m. Quelle distance lui reste-t-il ?"],
        [["Total : addition.", op(1246, "+", 1098, null), "**L'école compte 2 344 élèves.**"],
         ["Ce qui reste : soustraction.", op(3060, "-", 1875, null), "**Il lui reste 1 185 pages à lire.**"],
         ["Je cherche ce qui a été **ajouté** entre 4 500 et 6 250 : c'est la différence.", op(6250, "-", 4500, null), "**Il a encaissé 1 750 Ar.**"],
         ["Ce qui reste à parcourir : soustraction.", op(8400, "-", 5950, null), "**Il lui reste 2 450 m à parcourir.**"]],
        ["2 344 élèves", "1 185 pages", "1 750 Ar", "2 450 m"]),
      vf(["« Diminuer de » indique une soustraction.", "On peut toujours changer l'ordre des termes d'une soustraction.", "« Gagner » indique une addition.", "Avant de calculer, il faut repérer la question du problème."], ["Vrai", "Faux — L'ordre ne peut pas être changé : on soustrait le plus petit du plus grand.", "Vrai", "Vrai"]),
    ],
  },
  lecon: [
    h("1. Lire et comprendre un problème"),
    methode("Méthode — Les 4 étapes pour résoudre un problème", [
      "**Je lis** l'énoncé deux fois. Je souligne les **données** (les nombres et leur unité) et j'encadre la **question**.",
      "**Je choisis l'opération** grâce au sens de la question (voir le tableau ci-dessous).",
      "**Je calcule** : j'écris l'opération en ligne avec l'unité, puis je la pose en colonnes.",
      "**Je réponds** par une **phrase-réponse** complète qui reprend la question : « Le car transporte 3 715 passagers en tout. »",
    ]),
    h("2. Addition ou soustraction ?"),
    table(["Je cherche…", "Mots de l'énoncé", "J'utilise…"], [
      ["le total, ce qu'on a réuni", "en tout, au total, ensemble, la somme", "une **addition**"],
      ["ce qu'on a après avoir ajouté", "de plus, gagne, reçoit, augmente", "une **addition**"],
      ["ce qui reste après avoir retiré", "il reste, enlève, dépense, perd, diminue", "une **soustraction**"],
      ["la différence, l'écart entre deux nombres", "de plus que, de moins que, la différence, combien manque-t-il", "une **soustraction**"],
      ["ce qui a été ajouté (le complément)", "avait… a maintenant…, pour arriver à", "une **soustraction**"],
    ], [3000, 3600, 3000], 19),
    attention("Le mot « plus » ne veut pas toujours dire additionner ! « Bema a 135 mm de **plus** que Fara ; Bema mesure 1 380 mm. Combien mesure Fara ? » → on cherche le plus petit : 1 380 − 135 = 1 245 mm. C'est une soustraction."),
    h("3. Un exemple rédigé"),
    exemple("Fara a 3 450 Ar. Sa grand-mère lui donne 1 500 Ar, puis elle achète un cahier à 1 200 Ar. Combien lui reste-t-il ?"),
    hh("Étape 1 — Ce que Fara possède après le cadeau (addition)"),
    op(3450, "+", 1500),
    hh("Étape 2 — Ce qui reste après l'achat (soustraction)"),
    op(4950, "-", 1200),
    "**Phrase-réponse :** il reste 3 750 Ar à Fara.",
    retenir("Additionner pour **réunir** ou **ajouter** ; soustraire pour **retirer**, **comparer** ou **compléter**. Toujours terminer par une phrase-réponse avec l'unité."),
  ],
};

// =====================================================================
// S5 — Droite, demi-droite, segment
// =====================================================================
M.droites = {
  exoFigure: { file: "angles", legende: "Les quatre types d'angles" },
  lecon: [
    h("1. La droite"),
    "Une **droite** est une ligne qui **ne s'arrête jamais** : elle n'a ni début ni fin, elle se prolonge à l'infini des deux côtés. On la note (d) ou (AB) si elle passe par les points A et B. On ne peut pas mesurer sa longueur.",
    fig("droites", "Droite, demi-droite et segment de droite", 13),
    h("2. La demi-droite"),
    "Une **demi-droite** a **une seule extrémité**, appelée **origine** ; de l'autre côté elle se prolonge à l'infini. On la note [Ox) : le crochet [ indique l'origine O, la parenthèse ) indique le côté infini.",
    h("3. Le segment de droite"),
    "Un **segment** est une portion de droite limitée par **deux extrémités**. On le note [AB]. Sa **longueur** se mesure avec la règle graduée et se note AB : par exemple AB = 5 cm.",
    table(["", "Droite", "Demi-droite", "Segment"], [["Extrémités", "aucune", "une (l'origine)", "deux"], ["Notation", "(d) ou (AB)", "[Ox)", "[AB]"], ["Longueur mesurable ?", "non", "non", "oui"]], [2400, 2400, 2400, 2400]),
    methode("Méthode — Tracer et nommer un segment de 5 cm", ["Je place un point A et j'écris sa lettre.", "Je pose le 0 de la règle sur A et je marque un point B en face de la graduation 5.", "Je trace le trait de A à B avec la règle : c'est le segment [AB], et j'écris AB = 5 cm."]),
    h("4. Les angles"),
    "Deux demi-droites de même origine forment un **angle**. L'origine commune est le **sommet** de l'angle, les demi-droites sont ses **côtés**. La mesure d'un angle s'exprime en **degrés (°)**.",
    fig("angles", "Angle aigu (moins de 90°), angle droit (90°), angle obtus (entre 90° et 180°), angle plat (180°)", 15),
    ul(["**Angle droit** : 90°, on le marque par un petit carré. On le vérifie avec l'équerre.", "**Angle aigu** : plus petit que l'angle droit.", "**Angle obtus** : plus grand que l'angle droit, plus petit que l'angle plat.", "**Angle plat** : 180°, ses deux côtés forment une droite.", "**Angle nul** : 0°, ses deux côtés sont confondus."]),
    retenir("Droite : aucune extrémité. Demi-droite : une origine. Segment : deux extrémités, on peut le mesurer. Un angle droit mesure 90°."),
  ],
};

// =====================================================================
// S6 — Mesures de longueur (1)
// =====================================================================
const LONGUEUR_CONV = [[942, "km", "dam"], [312, "cm", "dm"], ["0,742", "m", "mm"], [13563, "mm", "m"], [586, "cm", "hm"]];
M.longueur = {
  image: { file: "v1:image15.jpg", legende: "Au marché, la marchande mesure le lamba avec un mètre-ruban." },
  exoFigure: null,
  lecon: [
    h("1. Les instruments de mesure"),
    fig("regle", "La règle graduée : pour les petites longueurs (cahier, crayon). 1 cm = 10 mm.", 14),
    fig("metre_ruban", "Le mètre-ruban et le décamètre : pour le tissu, le corps, un terrain.", 14),
    ul(["Pour mesurer un crayon ou un cahier : la **règle graduée** (en cm et mm).", "Pour mesurer un tissu, le tour de taille : le **mètre-ruban**.", "Pour mesurer une salle, un terrain : le **double-décamètre** (20 m) ou la **chaîne d'arpenteur**.", "Pour la distance entre deux villes : on compte en **kilomètres** avec le compteur de la voiture."]),
    h("2. Le tableau des unités de longueur"),
    "L'unité principale de longueur est le **mètre (m)**. Les unités plus grandes sont les **multiples** : décamètre (dam), hectomètre (hm), kilomètre (km). Les unités plus petites sont les **sous-multiples** : décimètre (dm), centimètre (cm), millimètre (mm).",
    "**Chaque unité vaut 10 fois l'unité qui est juste à sa droite** : 1 m = 10 dm, 1 dm = 10 cm, 1 cm = 10 mm ; 1 km = 10 hm = 100 dam = 1 000 m.",
    conversion("longueur", [[1, "km", "m"], [1, "m", "cm"], [1, "m", "mm"]], { resultats: true, explication: false }),
    h("3. Convertir avec le tableau"),
    methode("Méthode 1 — Convertir avec le tableau de conversion", [
      "Je trace le tableau et j'écris les unités de km à mm.",
      "J'écris le nombre : **le chiffre des unités dans la colonne de l'unité donnée** (un seul chiffre par colonne, les autres chiffres à gauche).",
      "**Vers la droite** (unité plus petite) : je **complète avec des 0** jusqu'à la colonne de l'unité demandée. 942 km → 942 **00** dam = 94 200 dam.",
      "**Vers la gauche** (unité plus grande) : je **place la virgule juste après le chiffre de la colonne de l'unité demandée**. 13 563 mm → 13,563 m.",
      "S'il y a déjà une virgule, je la **déplace** : vers la droite en ajoutant des 0 si besoin (0,742 m → 742 mm, la virgule disparaît) ; vers la gauche en la reculant.",
    ]),
    conversion("longueur", LONGUEUR_CONV, {}),
    methode("Méthode 2 — Convertir en multipliant ou en divisant par 10, 100, 1 000", [
      "Je compte de combien de colonnes je me déplace : 1 colonne = × 10 ou ÷ 10 ; 2 colonnes = × 100 ou ÷ 100 ; 3 colonnes = × 1 000 ou ÷ 1 000.",
      "Vers une unité plus petite (à droite) : **je multiplie** : 584 cm = 584 × 10 mm = 5 840 mm.",
      "Vers une unité plus grande (à gauche) : **je divise** : 742 mm = 742 ÷ 1 000 m = 0,742 m.",
    ]),
    attention("Quand on va vers une unité **plus petite**, le nombre devient **plus grand** (il faut plus de petites unités) ; quand on va vers une unité **plus grande**, le nombre devient **plus petit**. 1 m = 100 cm : le nombre 100 est plus grand mais le cm est plus petit !"),
    retenir("Vers la **droite** → j'ajoute des 0 (ou je déplace la virgule vers la droite). Vers la **gauche** → je place la virgule juste après le chiffre de l'unité demandée."),
  ],
};

// =====================================================================
// S7 (nouvelle) — Mesures de longueur (2) : multiples du mètre
// =====================================================================
M.longueur2 = {
  meta: { "Sous-discipline": "Mesure", "Thème": "Mesures de longueur", "Objectif spécifique": "Connaître et utiliser les multiples du mètre (dam, hm, km) ; convertir des longueurs avec des nombres décimaux ; calculer des distances et des périmètres dans des problèmes (guide pédagogique 8e, p. 42-43).", "Support et matériel": "le tableau des unités de longueur au tableau ; une carte simplifiée avec trois distances (Antananarivo–Antsirabe 169 km ; Antsirabe–Ambositra 91 km ; Ambositra–Fianarantsoa 148 km)", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Convertis 3 m en cm.", "300 cm."], ["Convertis 2 500 mm en m.", "2,5 m."]],
    mise: "Un taxi-brousse part d'Antananarivo pour Fianarantsoa en passant par Antsirabe et Ambositra. Le chauffeur note : 169 km, 91 km, 148 km. Quelle distance totale parcourt-il ? Et en mètres ?",
    titre: "Les mesures de longueur (2) : multiples du mètre et distances", objectifEleve: "utiliser les multiples du mètre, convertir des longueurs avec virgule et résoudre des problèmes de distances et de périmètres",
    observation: "la carte avec les trois distances et le tableau de conversion", support: "Carte simplifiée au tableau, tableau de conversion",
    analyse: [["Quelle unité utilise-t-on pour les distances entre villes ?", "Le kilomètre (km)."], ["Combien de mètres dans 1 km ? dans 1 hm ? dans 1 dam ?", "1 km = 1 000 m ; 1 hm = 100 m ; 1 dam = 10 m."], ["Comment convertir 169 km en m ?", "Vers la droite de 3 colonnes : j'ajoute trois 0 → 169 000 m."], ["Comment écrire 2 500 m en km ?", "Vers la gauche de 3 colonnes : virgule après le chiffre des km → 2,500 km = 2,5 km."]],
    synthese: "Donc, les multiples du mètre sont le décamètre (10 m), l'hectomètre (100 m) et le kilomètre (1 000 m). Pour convertir, j'utilise le tableau : des 0 vers la droite, la virgule vers la gauche. Pour un problème de distance, je convertis d'abord toutes les longueurs dans la même unité.",
    appEns: ["Effectue les conversions suivantes.", "1. 169 km = ? m", "2. 3,5 km = ? m", "3. 2 500 m = ? km", "4. 75 dam = ? hm", "Résous les problèmes suivants.", "1. Antananarivo–Antsirabe 169 km, Antsirabe–Ambositra 91 km, Ambositra–Fianarantsoa 148 km. Distance totale ?", "2. Un terrain rectangulaire mesure 2 dam sur 15 m. Quel est son périmètre en m ?", "3. Une piste de 4,5 km est déjà goudronnée sur 2 800 m. Quelle longueur reste à goudronner en m ?", "4. Un coureur fait 12 tours d'une piste de 400 m. Quelle distance en km ?"],
    evalEns: ["Effectue les conversions suivantes.", "1. 8 km = ? dam", "2. 0,25 km = ? m", "3. 4 750 m = ? km", "4. 36 hm = ? km", "Vrai ou faux ?", "1. 1 km = 100 m.", "2. 1 hm = 100 m.", "3. 2,5 km = 2 500 m.", "4. Pour convertir des km en m, on ajoute 3 zéros."],
  }),
  exercices: {
    application: [
      ex("Effectue les conversions suivantes.", ["169 km = ? m", "3,5 km = ? m", "2 500 m = ? km", "75 dam = ? hm"]),
      exc("Résous les problèmes suivants.", ["Antananarivo–Antsirabe 169 km, Antsirabe–Ambositra 91 km, Ambositra–Fianarantsoa 148 km. Quelle est la distance totale ?", "Un terrain rectangulaire mesure 2 dam sur 15 m. Quel est son périmètre en m ?", "Une piste de 4,5 km est déjà goudronnée sur 2 800 m. Quelle longueur reste-t-il à goudronner, en m ?", "Un coureur fait 12 tours d'une piste de 400 m. Quelle distance parcourt-il, en km ?"],
        [["Toutes les distances sont en km : j'additionne.", op(169, "+", 91, null), op(260, "+", 148, null), "**La distance totale est de 408 km.**"],
         ["Je convertis dans la même unité : 2 dam = 20 m.", formule({ nom: "Périmètre du rectangle", formule: "P = (L + l) × 2", application: "P = (20 + 15) × 2 = 35 × 2", resultat: "P = 70 m" }), "**Le périmètre du terrain est de 70 m.**"],
         ["4,5 km = 4 500 m (virgule déplacée de 3 rangs vers la droite, complétée par des 0).", op(4500, "-", 2800, null), "**Il reste 1 700 m à goudronner.**"],
         ["12 tours × 400 m :", mult(400, 12), "4 800 m = 4,8 km (virgule placée après le chiffre des km).", "**Le coureur parcourt 4,8 km.**"]],
        ["408 km", "70 m", "1 700 m", "4,8 km"]),
    ],
    evaluation: [
      ex("Effectue les conversions suivantes.", ["8 km = ? dam", "0,25 km = ? m", "4 750 m = ? km", "36 hm = ? km"]),
      vf(["1 km = 100 m.", "1 hm = 100 m.", "2,5 km = 2 500 m.", "Pour convertir des km en m, on ajoute 3 zéros."], ["Faux — 1 km = 1 000 m.", "Vrai", "Vrai", "Vrai"]),
    ],
  },
  lecon: [
    h("1. Les multiples du mètre"),
    table(["Unité", "Symbole", "Valeur en mètres", "On l'utilise pour…"], [["kilomètre", "km", "1 000 m", "la distance entre deux villes"], ["hectomètre", "hm", "100 m", "la longueur d'une piste, d'un grand terrain"], ["décamètre", "dam", "10 m", "la longueur d'une cour, d'une salle"], ["mètre", "m", "1 m", "la hauteur d'une porte, la longueur d'un lamba"]], [2200, 1400, 2400, 3600]),
    "Repères : un pas d'adulte ≈ 1 m ; un terrain de football ≈ 1 hm de long ; 1 km ≈ 12 à 15 minutes de marche.",
    h("2. Convertir des longueurs avec virgule"),
    methode("Méthode — Déplacer la virgule dans le tableau", [
      "J'écris le nombre en mettant **le chiffre juste avant la virgule dans la colonne de l'unité donnée** : pour 3,5 km, le 3 est dans la colonne km et le 5 dans la colonne hm.",
      "Vers une unité plus petite : je **déplace la virgule vers la droite** ; si elle arrive après le dernier chiffre, je **complète avec des 0** et je ne mets plus de virgule : 3,5 km = 3 500 m.",
      "Vers une unité plus grande : je **place la virgule juste après le chiffre de l'unité demandée** : 2 500 m → 2,500 km = 2,5 km (les 0 à la fin de la partie décimale peuvent être supprimés).",
    ]),
    conversion("longueur", [["3,5", "km", "m"], [2500, "m", "km"], ["0,25", "km", "m"], [75, "dam", "hm"], [36, "hm", "km"]], {}),
    h("3. Résoudre un problème de distance"),
    methode("Méthode — Problème avec plusieurs unités", ["Je **convertis toutes les longueurs dans la même unité** (souvent la plus petite, pour éviter les virgules).", "Je fais l'opération (addition pour un total, soustraction pour ce qui reste, multiplication pour des tours répétés).", "Je donne la réponse dans l'unité demandée, avec une phrase."]),
    exemple("Une piste de 4,5 km est goudronnée sur 2 800 m. Reste à goudronner ? 4,5 km = 4 500 m ; 4 500 − 2 800 = 1 700 m. Il reste 1,7 km à goudronner."),
    retenir("1 km = 10 hm = 100 dam = 1 000 m. Avant de calculer, je mets toutes les longueurs **dans la même unité**."),
  ],
};

// =====================================================================
// S8 — Nombres jusqu'à 1 000 000 (1)
// =====================================================================
M.num1000000 = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur la droite graduée de 0 à 1 000 000" },
  lecon: [
    h("1. La classe des mille et la classe des unités"),
    "Jusqu'à 999 999, un nombre a **deux classes** : la **classe des mille** (à gauche) et la **classe des unités simples** (à droite). Chaque classe a 3 rangs : centaines, dizaines, unités.",
    numeration([703946, 856470, 25843, 999999], { titre: "Tableau de numération : 703 946, 856 470, 25 843 et 999 999" }),
    "**1 000 000** (un million) est le plus petit nombre à 7 chiffres : il commence une nouvelle classe, la classe des millions.",
    h("2. Lire et écrire"),
    methode("Méthode — Lire un grand nombre", ["Je sépare les classes par un espace tous les 3 chiffres en partant de la droite.", "Je lis la classe des mille puis je dis « mille », puis je lis la classe des unités.", "703 946 → **sept cent trois mille neuf cent quarante-six**. 856 470 → **huit cent cinquante-six mille quatre cent soixante-dix**."]),
    attention("Quand la classe des unités commence par un ou deux 0, je n'oublie pas de les écrire : « quatre cent mille sept » s'écrit 400 **007** (la classe des unités doit avoir 3 chiffres)."),
    h("3. Décomposer"),
    exemple("703 946 = 700 000 + 3 000 + 900 + 40 + 6 = (7 × 100 000) + (3 × 1 000) + (9 × 100) + (4 × 10) + 6."),
    "Attention à la différence entre **chiffre** et **nombre** : dans 703 946, le **chiffre des dizaines de mille** est 0, mais le **nombre de dizaines de mille** est 70 (il y a 70 paquets de 10 000 dans 703 946).",
    h("4. Comparer et ranger"),
    methode("Méthode — Comparer", ["Le nombre qui a **le plus de chiffres** est le plus grand : 1 000 000 > 999 999.", "Même nombre de chiffres : je compare **classe par classe**, puis chiffre par chiffre, **en partant de la gauche** : 797 136 < 801 571 car 7 < 8 aux centaines de mille."]),
    fig("droite_1000000", "Sur la droite graduée de 100 000 en 100 000 : 350 000 est au milieu entre 300 000 et 400 000.", 15),
    retenir("Deux classes : **mille | unités**. Je lis classe par classe et j'écris chaque classe sur **3 chiffres**."),
  ],
};

// =====================================================================
// S9 — La multiplication
// =====================================================================
M.multiplication = {
  image: { file: "v1:image27.jpg", legende: "Le tailleur d'Antsirabe coupe 9 morceaux de 242 cm de tissu : il multiplie pour trouver la longueur totale." },
  exoFigure: null,
  lecon: [
    h("1. Le sens de la multiplication"),
    "La multiplication remplace une **addition répétée** du même nombre : 242 + 242 + 242 + 242 + 242 + 242 + 242 + 242 + 242 = 242 × 9. Le résultat s'appelle le **produit** ; les nombres multipliés sont les **facteurs**.",
    "Mots qui indiquent une multiplication : fois, chacun, chaque, le double, le triple, par (3 boîtes de 12 → 12 × 3).",
    h("2. Poser une multiplication"),
    methode("Méthode 1 — Multiplier par un nombre d'un chiffre", [
      "Je pose le grand nombre en haut, le petit en bas, unités sous unités.",
      "Je multiplie **chaque chiffre du haut** par le chiffre du bas, de droite à gauche, en gardant les retenues dans ma tête (ou en petit au-dessus).",
      "242 × 9 : 2 × 9 = 18, j'écris 8, je retiens 1 ; 4 × 9 = 36, + 1 = 37, j'écris 7, je retiens 3 ; 2 × 9 = 18, + 3 = 21, j'écris 21.",
    ]),
    mult(242, 9),
    methode("Méthode 2 — Multiplier par un nombre de deux ou trois chiffres", [
      "Je multiplie d'abord par le **chiffre des unités** du bas : c'est le premier produit partiel.",
      "Je multiplie par le **chiffre des dizaines** : j'écris ce deuxième produit partiel **décalé d'un rang vers la gauche** (car je multiplie par des dizaines). Pour les centaines, je décale de deux rangs.",
      "J'**additionne** les produits partiels.",
      "356 × 79 : 356 × 9 = 3 204 ; 356 × 7 = 2 492 (décalé d'un rang, c'est 24 920) ; 3 204 + 24 920 = 28 124.",
    ]),
    mult(356, 79),
    h("3. Les propriétés de la multiplication"),
    ul(["**On peut changer l'ordre des facteurs** : 356 × 79 = 79 × 356.", "**Multiplier par 1** ne change pas le nombre ; **multiplier par 0** donne 0.", "**Multiplier par 10, 100, 1 000** : j'ajoute 1, 2 ou 3 zéros : 47 × 100 = 4 700.", "**Multiplier par 20, 300** : je multiplie par 2 (ou 3), puis j'ajoute les zéros : 15 × 300 = 45 × 100 = 4 500."]),
    h("4. Vérifier une multiplication : la preuve par 9"),
    methode("Méthode — La preuve par 9 de la multiplication", [
      "Je trace une croix. Je calcule la **somme des chiffres du premier facteur** et je la réduis à un seul chiffre (**si je trouve 9, j'écris 0**) : je l'écris en **haut**.",
      "Même chose pour le deuxième facteur : en **bas**.",
      "Je multiplie haut × bas, je réduis à un chiffre : j'écris à **gauche**.",
      "Je réduis la somme des chiffres du **produit** : j'écris à **droite**.",
      "Si **gauche = droite**, la multiplication est probablement juste. Si gauche ≠ droite, elle est sûrement fausse.",
    ]),
    preuve9({ op: "×", a: 356, b: 79, produit: 28124 }),
    preuve9({ op: "×", a: 242, b: 9, produit: 2178 }),
    retenir("Multiplier, c'est additionner plusieurs fois le même nombre. Avec deux chiffres au multiplicateur, le deuxième produit partiel est **décalé d'un rang**. La preuve par 9 vérifie le résultat."),
  ],
};

// =====================================================================
// S10 — La division (1)
// =====================================================================
M.division = {
  image: { file: "scene:division_cantine.jpg", legende: "À la cantine, la cuisinière répartit 3 696 gâteaux en 6 plateaux identiques : elle divise." },
  exoFigure: null,
  lecon: [
    h("1. Le sens de la division"),
    "Diviser, c'est **partager en parts égales** (3 696 gâteaux pour 6 classes : combien par classe ?) ou chercher **combien de fois** un nombre est contenu dans un autre (combien de paquets de 6 dans 3 696 ?).",
    "Vocabulaire : **dividende ÷ diviseur = quotient**, et il peut rester un **reste**. 185 ÷ 10 : dividende 185, diviseur 10, quotient 18, reste 5. **Le reste est toujours plus petit que le diviseur.** Si le reste est 0, la division est **exacte**.",
    attention("On ne peut **jamais diviser par 0**."),
    h("2. Poser une division « à la potence »"),
    methode("Méthode 1 — La potence détaillée (on écrit les soustractions)", [
      "Je trace la potence : le **dividende à gauche**, le **diviseur à droite** de la barre verticale ; le quotient s'écrira sous le diviseur.",
      "Je prends autant de chiffres du dividende qu'il faut pour contenir le diviseur : dans 3 696, je prends 3 (trop petit), puis 36.",
      "**Combien de fois 6 dans 36 ?** 6 fois. J'écris 6 au quotient, je calcule 6 × 6 = 36, je l'écris sous 36 et je **soustrais** : reste 0.",
      "J'**abaisse** le chiffre suivant (9) : dans 09, combien de fois 6 ? 1 fois. J'écris 1, 1 × 6 = 6, 9 − 6 = 3.",
      "J'abaisse le 6 : 36 ÷ 6 = 6 fois, 36 − 36 = 0. Il n'y a plus de chiffre à abaisser : c'est fini. Quotient 616, reste 0.",
    ]),
    div(3696, 6, "long"),
    methode("Méthode 2 — La potence rapide (on n'écrit que les restes)", ["Je fais la soustraction de tête et j'écris seulement le reste, suivi du chiffre abaissé. C'est plus rapide quand on connaît bien ses tables."]),
    div(3696, 6, "court"),
    hh("Une division avec reste : 185 ÷ 10"),
    div(185, 10, "long"),
    h("3. Combien de chiffres au quotient ?"),
    "Avant de calculer, je peux prévoir le **nombre de chiffres du quotient** : je compte combien de chiffres du dividende il me faut pour le premier partage, et chaque chiffre abaissé ensuite donne un chiffre de plus. 3 696 ÷ 6 : je pars de « 36 » (2 chiffres), il reste 2 chiffres à abaisser → le quotient a **3 chiffres**.",
    h("4. Vérifier une division"),
    methode("Méthode 1 — La multiplication", ["**(quotient × diviseur) + reste = dividende** : (18 × 10) + 5 = 180 + 5 = 185 ✔"]),
    methode("Méthode 2 — La preuve par 9 de la division", [
      "En **haut** de la croix : la somme réduite des chiffres du **diviseur** ; en **bas** : celle du **quotient**.",
      "À **gauche** : haut × bas, **plus le reste réduit**, le tout réduit à un chiffre.",
      "À **droite** : la somme réduite des chiffres du **dividende**. Si gauche = droite, la division est juste.",
    ]),
    preuve9({ op: "÷", a: 185, b: 10, q: 18, r: 5 }),
    preuve9({ op: "÷", a: 3696, b: 6, q: 616, r: 0 }),
    retenir("Dividende = (quotient × diviseur) + reste, avec **reste < diviseur**. Je pose la division à la potence et je vérifie par la multiplication ou la preuve par 9."),
  ],
};

// =====================================================================
// S11 (nouvelle) — La division (2) : deux chiffres au diviseur
// =====================================================================
M.division2 = {
  meta: { "Sous-discipline": "Arithmétique", "Thème": "La division", "Objectif spécifique": "Diviser par un nombre de deux chiffres ; déterminer le nombre de chiffres du quotient ; utiliser les multiples du diviseur ; vérifier par la preuve (guide pédagogique 8e, p. 60-65).", "Support et matériel": "la division 8 945 ÷ 23 posée au tableau, la table des multiples de 23 (23, 46, 69, 92, 115, 138, 161, 184, 207)", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Combien de fois 7 dans 52 ?", "7 fois (49), reste 3."], ["Divise 96 par 8.", "12."]],
    mise: "Une coopérative a récolté 8 945 kg de riz qu'elle répartit également entre 23 familles. Combien de kg reçoit chaque famille ? Le diviseur a deux chiffres : comment faire ?",
    titre: "La division (2) : deux chiffres au diviseur", objectifEleve: "poser et calculer une division dont le diviseur a deux chiffres, prévoir le nombre de chiffres du quotient et vérifier le résultat",
    observation: "la division posée au tableau et la table des multiples de 23", support: "Division posée au tableau, table des multiples du diviseur",
    note: "Faire écrire d'abord la table des multiples du diviseur : elle évite les essais.",
    analyse: [["Combien de chiffres du dividende faut-il prendre pour commencer ?", "89 est plus grand que 23 : je commence avec 2 chiffres."], ["Combien de chiffres aura le quotient ?", "Je pars de 89 (2 chiffres), il reste 2 chiffres à abaisser : 3 chiffres."], ["Combien de fois 23 dans 89 ?", "3 fois (69) ; 4 fois ferait 92, trop grand. Reste 20."], ["Comment vérifier ?", "(388 × 23) + 21 = 8 945 ; ou la preuve par 9."]],
    synthese: "Donc, pour diviser par un nombre de deux chiffres, j'écris d'abord la table des multiples du diviseur, je prévois le nombre de chiffres du quotient, puis je procède comme avec un chiffre : je cherche, j'écris, je soustrais, j'abaisse.",
    appEns: ["Effectue les divisions suivantes et donne le quotient et le reste.", "1. 8 945 ÷ 23 = ?", "2. 756 ÷ 12 = ?", "3. 1 508 ÷ 25 = ?", "4. 6 240 ÷ 48 = ?", "Choisis la bonne réponse.", "1. Dans 5 874 ÷ 32, le quotient a : a) 2 chiffres b) 3 chiffres c) 4 chiffres", "2. Combien de fois 23 dans 150 ? a) 5 b) 6 c) 7", "3. Le reste de 100 ÷ 15 est : a) 10 b) 5 c) 15", "4. Si le reste est égal au diviseur : a) c'est normal b) le quotient est trop petit c) le quotient est trop grand"],
    evalEns: ["Effectue les divisions suivantes et donne le quotient et le reste.", "1. 4 375 ÷ 15 = ?", "2. 987 ÷ 21 = ?", "3. 7 300 ÷ 36 = ?", "4. 2 000 ÷ 64 = ?", "Vrai ou faux ?", "1. Le reste peut être plus grand que le diviseur.", "2. 8 945 ÷ 23 a un quotient de 3 chiffres.", "3. Pour vérifier une division : quotient × diviseur + reste = dividende.", "4. La table des multiples du diviseur aide à trouver chaque chiffre du quotient."],
  }),
  exercices: {
    application: [
      ex("Effectue les divisions suivantes et donne le quotient et le reste.", ["8 945 ÷ 23 = ?", "756 ÷ 12 = ?", "1 508 ÷ 25 = ?", "6 240 ÷ 48 = ?"]),
      qcm(["Dans 5 874 ÷ 32, le quotient a :   a) 2 chiffres   b) 3 chiffres   c) 4 chiffres", "Combien de fois 23 dans 150 ?   a) 5   b) 6   c) 7", "Le reste de 100 ÷ 15 est :   a) 10   b) 5   c) 15", "Si le reste est égal au diviseur :   a) c'est normal   b) le quotient est trop petit   c) le quotient est trop grand"], ["b) 3 chiffres (58 ÷ 32 → 1er chiffre, puis 7 et 4 abaissés)", "b) 6 (6 × 23 = 138 ; 7 × 23 = 161 trop grand)", "a) 10 (6 × 15 = 90, reste 10)", "b) le quotient est trop petit : on peut encore retirer une fois le diviseur"]),
    ],
    evaluation: [
      ex("Effectue les divisions suivantes et donne le quotient et le reste.", ["4 375 ÷ 15 = ?", "987 ÷ 21 = ?", "7 300 ÷ 36 = ?", "2 000 ÷ 64 = ?"]),
      vf(["Le reste peut être plus grand que le diviseur.", "8 945 ÷ 23 a un quotient de 3 chiffres.", "Pour vérifier une division : quotient × diviseur + reste = dividende.", "La table des multiples du diviseur aide à trouver chaque chiffre du quotient."], ["Faux — Le reste est toujours plus petit que le diviseur.", "Vrai", "Vrai", "Vrai"]),
    ],
  },
  lecon: [
    h("1. Préparer la division : la table des multiples du diviseur"),
    "Quand le diviseur a deux chiffres, je commence par écrire ses **multiples** (je l'ajoute à lui-même) : cela me donne tout de suite le bon chiffre du quotient.",
    table(["× 1", "× 2", "× 3", "× 4", "× 5", "× 6", "× 7", "× 8", "× 9"], [["23", "46", "69", "92", "115", "138", "161", "184", "207"]], Array(9).fill(1060)),
    h("2. Prévoir le nombre de chiffres du quotient"),
    methode("Méthode — Compter les chiffres du quotient", ["Je cherche le plus petit « morceau » de gauche du dividende qui est **plus grand ou égal au diviseur** : pour 8 945 ÷ 23, c'est 89 (2 chiffres).", "Chaque chiffre restant du dividende donnera un chiffre de plus au quotient : 8 9|4 5 → 1 + 2 = **3 chiffres** au quotient.", "Cela permet de vérifier à la fin que je n'ai pas oublié un chiffre (par exemple un 0 au quotient)."]),
    h("3. Calculer"),
    methode("Méthode — La potence avec deux chiffres au diviseur", [
      "Dans 89, combien de fois 23 ? Je regarde la table : 69 (× 3) ≤ 89 < 92 (× 4) → **3**. J'écris 3 au quotient, 89 − 69 = 20.",
      "J'abaisse le 4 : 204. Dans 204, combien de fois 23 ? 184 (× 8) ≤ 204 < 207 (× 9) → **8**. 204 − 184 = 20.",
      "J'abaisse le 5 : 205. Dans 205, combien de fois 23 ? 184 (× 8) → **8**. 205 − 184 = 21. Plus rien à abaisser : reste 21.",
      "Le reste 21 est bien plus petit que 23 ✔",
    ]),
    div(8945, 23, "long"),
    attention("Si à une étape le nombre abaissé est **plus petit que le diviseur**, j'écris **0 au quotient** et j'abaisse le chiffre suivant. Exemple : 6 240 ÷ 48 → 62 ÷ 48 = 1 (reste 14) ; 144 ÷ 48 = 3 (reste 0) ; j'abaisse 0 : 0 ÷ 48 = **0**. Quotient 130."),
    div(6240, 48, "long"),
    h("4. Vérifier"),
    formule({ nom: "Preuve de la division", formule: "(quotient × diviseur) + reste = dividende", application: "(388 × 23) + 21 = 8 924 + 21", resultat: "= 8 945 ✔" }),
    preuve9({ op: "÷", a: 8945, b: 23, q: 388, r: 21 }),
    retenir("Table des multiples → nombre de chiffres du quotient → je cherche, j'écris, je soustrais, j'abaisse → je vérifie."),
  ],
};

// =====================================================================
// S12 — Rectangle et carré
// =====================================================================
M.rectangle_carre = {
  image: { file: "v1:image27.jpg", legende: "Chez le tailleur d'Antsirabe : les morceaux de tissu sont des rectangles et des carrés." },
  exoFigure: null,
  lecon: [
    h("1. Le rectangle"),
    fig("rectangle", "Le rectangle : 4 angles droits ; les côtés opposés sont parallèles et de même longueur (marqués par les petits traits rouges).", 13),
    "Le grand côté s'appelle la **longueur (L)**, le petit côté la **largeur (l)**.",
    h("2. Le carré"),
    fig("carre", "Le carré : 4 côtés de même longueur et 4 angles droits. C'est un rectangle particulier.", 10),
    h("3. Le périmètre"),
    "Le **périmètre** est la **longueur du contour** de la figure : c'est ce que l'on parcourt quand on fait le tour. Il s'exprime en unités de longueur (cm, m…).",
    formule({ nom: "Périmètre du rectangle", formule: "Périmètre = (Longueur + largeur) × 2", abrege: "P = (L + l) × 2", application: ["Rectangle de 8 cm sur 4 cm :", "P = (8 + 4) × 2 = 12 × 2"], resultat: "P = 24 cm" }),
    formule({ nom: "Périmètre du carré", formule: "Périmètre = côté × 4", abrege: "P = c × 4", application: ["Carré de côté 5 m :", "P = 5 × 4"], resultat: "P = 20 m" }),
    h("4. L'aire"),
    "L'**aire** est la mesure de la **surface** occupée par la figure. On la mesure en comptant les carreaux d'un centimètre de côté (cm²) : 1 cm² est l'aire d'un carré de 1 cm de côté.",
    fig("aire_carreaux", "Un rectangle de 6 cm sur 4 cm contient 6 × 4 = 24 carreaux de 1 cm² : son aire est 24 cm².", 14),
    formule({ nom: "Aire du rectangle", formule: "Aire = Longueur × largeur", abrege: "A = L × l", application: ["Rectangle de 8 cm sur 4 cm :", "A = 8 × 4"], resultat: "A = 32 cm²" }),
    formule({ nom: "Aire du carré", formule: "Aire = côté × côté", abrege: "A = c × c", application: ["Carré de côté 5 m :", "A = 5 × 5"], resultat: "A = 25 m²" }),
    attention("Ne pas confondre : le **périmètre** se mesure en **cm, m** (une longueur) ; l'**aire** se mesure en **cm², m²** (une surface). Les deux dimensions doivent être dans la **même unité** avant de calculer."),
    h("5. Trouver une dimension inconnue"),
    methode("Méthode — Retrouver la largeur quand on connaît l'aire et la longueur", ["Aire = L × l, donc **l = Aire ÷ L**. Un rectangle a une aire de 32 cm² et une longueur de 8 cm : l = 32 ÷ 8 = 4 cm.", "De même, si je connais le périmètre et la longueur : **l = (P ÷ 2) − L**. P = 24 cm, L = 8 cm : l = 12 − 8 = 4 cm."]),
    retenir("P rectangle = (L + l) × 2 ; A rectangle = L × l ; P carré = c × 4 ; A carré = c × c."),
  ],
};

// =====================================================================
// S13 (nouvelle) — Unités d'aire et mesures agraires
// =====================================================================
M.aires_unites = {
  meta: { "Sous-discipline": "Mesure", "Thème": "Mesures d'aire", "Objectif spécifique": "Construire le tableau des unités d'aire (km² → mm²) ; comprendre que chaque unité vaut 100 fois la suivante ; convertir des aires ; connaître et utiliser les mesures agraires (ha, a, ca) (guide pédagogique 8e, p. 72-73).", "Support et matériel": "un carré de 1 dm de côté en carton quadrillé en cm² ; le tableau des unités d'aire au tableau", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Aire d'un rectangle de 7 cm sur 5 cm ?", "35 cm²."], ["Aire d'un carré de 9 m de côté ?", "81 m²."]],
    mise: "Le père de Soa possède une rizière de 2 ha. Sur un papier officiel, la surface est écrite en m². Combien de m² cela fait-il ? Et un carré de 1 dm de côté, combien contient-il de cm² ?",
    titre: "Les unités d'aire et les mesures agraires", objectifEleve: "convertir des aires avec le tableau des unités d'aire (deux chiffres par colonne) et utiliser l'hectare, l'are et le centiare",
    observation: "le carré de 1 dm quadrillé en cm² et le tableau des unités d'aire", support: "Carré de 1 dm² quadrillé, tableau des unités d'aire au tableau",
    note: "Faire compter les carreaux : 10 rangées de 10 → 100 cm² dans 1 dm². D'où les 2 chiffres par colonne.",
    analyse: [["Combien de cm² dans 1 dm² ?", "10 × 10 = 100 cm²."], ["Alors, combien de dm² dans 1 m² ? de m² dans 1 dam² ?", "100 dm² ; 100 m²."], ["Dans le tableau des aires, combien de chiffres par colonne ?", "Deux chiffres (car on multiplie par 100 à chaque colonne)."], ["Que valent 1 ha, 1 a, 1 ca ?", "1 ha = 1 hm² = 10 000 m² ; 1 a = 1 dam² = 100 m² ; 1 ca = 1 m²."]],
    synthese: "Donc, les unités d'aire vont de 100 en 100 : dans le tableau, chaque colonne contient deux chiffres. Les mesures agraires servent pour les terrains : l'hectare (hm²), l'are (dam²) et le centiare (m²).",
    appEns: ["Effectue les conversions suivantes.", "1. 3 m² = ? cm²", "2. 2 ha = ? m²", "3. 45 000 m² = ? ha", "4. 7 dm² = ? mm²", "Choisis la bonne réponse.", "1. 1 dm² = a) 10 cm² b) 100 cm² c) 1 000 cm²", "2. 1 ha = a) 100 m² b) 1 000 m² c) 10 000 m²", "3. 1 a = a) 1 dam² b) 1 hm² c) 1 m²", "4. Dans le tableau des aires, chaque colonne contient : a) 1 chiffre b) 2 chiffres c) 3 chiffres"],
    evalEns: ["Effectue les conversions suivantes.", "1. 5 ha = ? a", "2. 12 000 m² = ? ha", "3. 2,5 m² = ? dm²", "4. 350 a = ? ha", "Résous les problèmes suivants.", "1. Un champ rectangulaire mesure 250 m sur 80 m. Quelle est son aire en ha ?", "2. Une parcelle de 3 ha est partagée en 4 parts égales. Quelle est l'aire d'une part en m² ?", "3. Une cour carrée a 12 m de côté. Quelle est son aire en a ?", "4. Un jardin de 1 200 m² : combien de fois plus petit qu'un hectare ?"],
  }),
  exercices: {
    application: [
      ex("Effectue les conversions suivantes.", ["3 m² = ? cm²", "2 ha = ? m²", "45 000 m² = ? ha", "7 dm² = ? mm²"]),
      qcm(["1 dm² =   a) 10 cm²   b) 100 cm²   c) 1 000 cm²", "1 ha =   a) 100 m²   b) 1 000 m²   c) 10 000 m²", "1 a =   a) 1 dam²   b) 1 hm²   c) 1 m²", "Dans le tableau des aires, chaque colonne contient :   a) 1 chiffre   b) 2 chiffres   c) 3 chiffres"], ["b) 100 cm²", "c) 10 000 m²", "a) 1 dam²", "b) 2 chiffres"]),
    ],
    evaluation: [
      ex("Effectue les conversions suivantes.", ["5 ha = ? a", "12 000 m² = ? ha", "2,5 m² = ? dm²", "350 a = ? ha"]),
      exc("Résous les problèmes suivants.", ["Un champ rectangulaire mesure 250 m sur 80 m. Quelle est son aire en ha ?", "Une parcelle de 3 ha est partagée en 4 parts égales. Quelle est l'aire d'une part en m² ?", "Une cour carrée a 12 m de côté. Quelle est son aire en a ?", "Un jardin de 1 200 m² : combien de fois est-il plus petit qu'un hectare ?"],
        [[formule({ nom: "Aire du rectangle", formule: "A = L × l", application: "A = 250 × 80", resultat: "A = 20 000 m²" }), "20 000 m² → dans le tableau, je place la virgule après la colonne hm² (2 chiffres par colonne) : 2|00|00 → 2 ha.", "**L'aire du champ est de 2 ha.**"],
         ["3 ha = 30 000 m² (j'ajoute deux colonnes de 2 zéros).", div(30000, 4, "long"), "**Chaque part mesure 7 500 m².**"],
         [formule({ nom: "Aire du carré", formule: "A = c × c", application: "A = 12 × 12", resultat: "A = 144 m²" }), "144 m² → 1|44 → 1,44 a (1 a = 100 m²).", "**L'aire de la cour est de 1,44 a.**"],
         ["1 ha = 10 000 m².", div(10000, 1200, "long"), "10 000 ÷ 1 200 ≈ 8 (reste 400).", "**Le jardin est environ 8 fois plus petit qu'un hectare.**"]],
        ["2 ha", "7 500 m²", "1,44 a", "environ 8 fois"]),
    ],
  },
  lecon: [
    h("1. Les unités d'aire"),
    "L'unité principale d'aire est le **mètre carré (m²)** : c'est l'aire d'un carré de 1 m de côté. Comme pour les longueurs, il y a des multiples (dam², hm², km²) et des sous-multiples (dm², cm², mm²).",
    fig("aire_carreaux", "Un carré de 1 dm de côté contient 10 × 10 = 100 carreaux de 1 cm : 1 dm² = 100 cm².", 12),
    retenir("**1 m² = 100 dm² = 10 000 cm²**. Chaque unité d'aire vaut **100 fois** l'unité qui la suit : dans le tableau, **chaque colonne contient 2 chiffres**."),
    h("2. Le tableau des unités d'aire"),
    conversion("aire", [[3, "m²", "cm²"], [7, "dm²", "mm²"], ["2,5", "m²", "dm²"], [45000, "m²", "hm²"]], {}),
    methode("Méthode — Convertir une aire", [
      "Je trace le tableau avec **2 cases par colonne** (dizaines et unités de chaque unité).",
      "J'écris le nombre : le chiffre des unités **dans la case de droite** de la colonne de l'unité donnée.",
      "Vers la droite : je complète par des 0, **deux 0 par colonne** : 3 m² → 3 00 00 cm² = 30 000 cm².",
      "Vers la gauche : je place la virgule après la case de droite de la colonne demandée : 45 000 m² → 4|50|00 → 4,5 hm².",
    ]),
    h("3. Les mesures agraires"),
    "Pour mesurer les **terrains** (rizières, champs, parcelles), on utilise les **mesures agraires** :",
    fig("hectare", "L'hectare, l'are et le centiare", 14),
    table(["Mesure agraire", "Symbole", "Unité d'aire", "Valeur en m²"], [["hectare", "ha", "hm²", "10 000 m² (carré de 100 m de côté)"], ["are", "a", "dam²", "100 m² (carré de 10 m de côté)"], ["centiare", "ca", "m²", "1 m²"]], [2400, 1400, 2000, 3800]),
    conversion("agraire", [[2, "ha", "m²"], [5, "ha", "a"], [350, "a", "ha"], [12000, "m²", "ha"]], {}),
    exemple("1 ha = 100 a = 10 000 ca. Une rizière de 2 ha mesure 20 000 m² ; un jardin de 1 200 m² mesure 12 a."),
    retenir("Aires : 2 chiffres par colonne, × 100 vers la droite, ÷ 100 vers la gauche. **1 ha = 10 000 m² ; 1 a = 100 m² ; 1 ca = 1 m².**"),
  ],
};

// =====================================================================
// S14 — Mesures de masse
// =====================================================================
M.masse = {
  image: { file: "v1:image33.jpg", legende: "Un vendeur de vanille pèse sa marchandise sur une balance." },
  exoFigure: null,
  lecon: [
    h("1. La notion de masse"),
    "La **masse** d'un objet indique la **quantité de matière** qu'il contient : c'est ce que l'on mesure quand on « pèse ». Dans la vie courante on dit « poids », mais le mot exact est **masse**.",
    "Repères : un sac de riz ≈ 50 kg ; un pain ≈ 250 g ; une pièce de 100 Ar ≈ 5 g ; un zébu ≈ 300 kg ; un camion chargé ≈ 10 t.",
    h("2. Les instruments : les balances"),
    fig("balance_roberval", "La balance Roberval : on pose l'objet sur un plateau et des masses marquées sur l'autre jusqu'à l'équilibre.", 14),
    ul(["La **balance Roberval** : deux plateaux ; l'équilibre est atteint quand l'aiguille est au milieu (plateaux à la même hauteur). La masse de l'objet = la somme des masses marquées.", "La **balance romaine** : un seul plateau (ou crochet) et un **curseur** que l'on déplace sur une tige graduée.", "La **bascule** et le **pèse-personne** : un cadran ou un écran indique directement la masse.", "La **balance électronique** du marché : affichage numérique en kg et g."]),
    methode("Méthode — Peser avec la balance Roberval", ["Je pose l'objet sur le plateau de gauche.", "Je pose des masses marquées sur le plateau de droite, de la plus lourde à la plus légère, jusqu'à l'équilibre.", "J'additionne les masses marquées : 1 kg + 500 g = 1 500 g = 1,5 kg."]),
    h("3. Le tableau des unités de masse"),
    "L'unité principale de masse est le **gramme (g)** ; dans la vie courante on utilise surtout le **kilogramme (kg)** : 1 kg = 1 000 g. Comme pour les longueurs, chaque unité vaut **10 fois** l'unité qui la suit.",
    conversion("masse", [[1, "kg", "g"], [827, "kg", "g"], [379, "g", "kg"], [803, "dag", "kg"], ["2,5", "hg", "g"]], {}),
    methode("Méthode 1 — Convertir avec le tableau", ["J'écris le chiffre des unités dans la colonne de l'unité donnée (un chiffre par colonne).", "Vers la droite : j'ajoute des 0 → 827 kg = 827 000 g.", "Vers la gauche : je place la virgule après le chiffre de la colonne demandée → 379 g = 0,379 kg ; 803 dag = 8,03 kg."]),
    methode("Méthode 2 — Multiplier ou diviser", ["1 colonne : × 10 ou ÷ 10 ; 2 colonnes : × 100 ou ÷ 100 ; 3 colonnes : × 1 000 ou ÷ 1 000.", "994 hg = 994 × 100 g = 99 400 g ; 273 dag = 273 ÷ 10 hg = 27,3 hg."]),
    h("4. Les grandes masses : le quintal et la tonne"),
    "Pour les charges lourdes (sacs de riz, camions, zébus), on utilise le **quintal (q)** et la **tonne (t)** : **1 q = 100 kg** et **1 t = 1 000 kg = 10 q**.",
    conversion("masseT", [[3, "t", "kg"], [45, "q", "kg"], [2500, "kg", "t"]], { legendeFleches: false }),
    attention("Dans le tableau des grandes masses, il n'y a **pas d'unité** entre le quintal et le kilogramme : la colonne reste vide mais elle compte ! 1 q = 100 kg (2 colonnes), 1 t = 1 000 kg (3 colonnes)."),
    h("5. Problèmes de masse"),
    methode("Méthode — Masse brute, tare et masse nette", ["La **masse brute** est la masse de la marchandise **avec** son emballage ; la **tare** est la masse de l'emballage seul ; la **masse nette** est la masse de la marchandise seule.", "**Masse nette = masse brute − tare** ; **Masse brute = masse nette + tare**."]),
    formule({ nom: "Masse nette", formule: "Masse nette = Masse brute − Tare", abrege: "Mn = Mb − T", application: ["Un sac de riz pèse 52 kg avec le sac ; le sac vide pèse 500 g = 0,5 kg.", "Mn = 52 − 0,5"], resultat: "Mn = 51,5 kg" }),
    retenir("1 kg = 1 000 g ; 1 t = 1 000 kg ; 1 q = 100 kg. Masse nette = masse brute − tare. Conversion : 0 vers la droite, virgule vers la gauche."),
  ],
};

// =====================================================================
// S15 — Nombres jusqu'à 1 000 000 (2)
// =====================================================================
M.num1000000b = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur la droite graduée de 0 à 1 000 000" },
  lecon: [
    h("1. Rappel : le tableau de numération"),
    numeration([145147, 412193, 930248, 100000], { titre: "Tableau de numération : 145 147, 412 193, 930 248 et 100 000" }),
    h("2. Décomposer de plusieurs façons"),
    methode("Méthode 1 — Décomposition additive", ["Je donne la valeur de chaque chiffre selon son rang : 145 147 = 100 000 + 40 000 + 5 000 + 100 + 40 + 7."]),
    methode("Méthode 2 — Décomposition multiplicative", ["Je multiplie chaque chiffre par la valeur de son rang : 145 147 = (1 × 100 000) + (4 × 10 000) + (5 × 1 000) + (1 × 100) + (4 × 10) + (7 × 1)."]),
    methode("Méthode 3 — Décomposition par classes", ["145 147 = (145 × 1 000) + 147 : il y a 145 mille et 147 unités."]),
    h("3. Chiffre et nombre"),
    table(["Question sur 145 147", "Réponse", "Comment je trouve"], [["Chiffre des dizaines de mille ?", "4", "Je lis la colonne D de la classe des mille"], ["Nombre de dizaines de mille ?", "14", "Je cache tout ce qui est à droite des dizaines de mille : 14|5 147"], ["Nombre de centaines ?", "1 451", "Je cache tout ce qui est à droite des centaines : 1 451|47"], ["Nombre de mille ?", "145", "Je cache la classe des unités : 145|147"]], [3400, 1400, 4800]),
    h("4. Ranger et encadrer"),
    methode("Méthode — Ranger des nombres", ["Je compare les nombres deux à deux (nombre de chiffres, puis chiffre par chiffre depuis la gauche).", "Ordre croissant : du plus petit au plus grand avec le signe < ; ordre décroissant : avec le signe >.", "Exemple : 412 193 < 435 689 < 930 248."]),
    methode("Méthode — Encadrer un nombre", ["Entre deux dizaines de mille consécutives : 140 000 < 145 147 < 150 000.", "Entre deux centaines de mille : 100 000 < 145 147 < 200 000."]),
    h("5. Arrondir"),
    "**Arrondir** un nombre, c'est le remplacer par le nombre « rond » le plus proche. 145 147 arrondi au millier le plus proche : 145 000 (car 147 < 500) ; arrondi à la dizaine de mille : 150 000 (car 5 147 ≥ 5 000).",
    retenir("Le **chiffre** occupe un rang ; le **nombre** de dizaines, de centaines… se lit en cachant les chiffres de droite."),
  ],
};

// =====================================================================
// S16 — Nombres décimaux
// =====================================================================
M.decimaux = {
  exoFigure: { file: "droite_decimaux", legende: "Repérer des nombres décimaux sur la droite graduée" },
  lecon: [
    h("1. Qu'est-ce qu'un nombre décimal ?"),
    "Un **nombre décimal** a une **partie entière** et une **partie décimale**, séparées par une **virgule**. Dans **308,67**, la partie entière est 308 et la partie décimale est 67 : 308,67 se lit « trois cent huit **virgule** soixante-sept » ou « trois cent huit unités et soixante-sept centièmes ».",
    "Après la virgule, les rangs sont les **dixièmes** (1/10 d'unité), les **centièmes** (1/100) et les **millièmes** (1/1 000).",
    numeration(["308,67", "9,85", "0,742", "12,5"], { titre: "Tableau de numération des décimaux : 308,67 ; 9,85 ; 0,742 ; 12,5" }),
    exemple("308,67 = 308 + {6/10} + {7/100} = 308 + 0,6 + 0,07. Le chiffre des dixièmes est 6, le chiffre des centièmes est 7."),
    retenir("**Un entier est aussi un décimal** : 25 = 25,0 = 25,00. Et **ajouter des 0 à la fin de la partie décimale ne change pas le nombre** : 3,5 = 3,50 = 3,500."),
    h("2. Comparer des nombres décimaux"),
    methode("Méthode — Comparer deux décimaux", [
      "Je compare d'abord les **parties entières** : la plus grande partie entière donne le plus grand nombre (97,30 < 449,24).",
      "Si les parties entières sont égales, je compare les **dixièmes**, puis les **centièmes**… (7,4 > 7,35 car 4 dixièmes > 3 dixièmes).",
      "Astuce : je peux compléter avec des 0 pour avoir le même nombre de chiffres après la virgule : 7,40 et 7,35 → 40 > 35.",
    ]),
    attention("Un nombre décimal avec **plus de chiffres** n'est pas forcément plus grand : 7,4 > 7,35 !"),
    h("3. Encadrer un nombre décimal"),
    methode("Méthode — Encadrer entre deux entiers consécutifs", ["Je prends la partie entière : c'est le nombre entier juste **avant**.", "J'ajoute 1 : c'est le nombre entier juste **après**.", "163,41 → 163 < 163,41 < 164."]),
    fig("droite_decimaux", "8,7 est entre 8 et 9 (7 graduations après 8) ; 9,85 est entre 9,8 et 9,9.", 15),
    h("4. Passer d'une écriture à l'autre"),
    ul(["**Fraction décimale → décimal** : {67/100} = 0,67 ; {5/10} = 0,5 ; {3/1 000} = 0,003.", "**Décimal → fraction décimale** : 9,85 = {985/100} ; 0,742 = {742/1 000}."]),
    retenir("Partie entière **,** partie décimale (dixièmes, centièmes, millièmes). Pour comparer : la partie entière d'abord, puis chiffre par chiffre après la virgule."),
  ],
};

// =====================================================================
// S17 — Décimaux : addition et soustraction
// =====================================================================
M.decimaux_addsous = {
  exoFigure: { file: "droite_decimaux", legende: "Vérifier l'ordre de grandeur d'un résultat sur la droite graduée" },
  lecon: [
    h("1. Poser une addition de décimaux"),
    methode("Méthode — Additionner des nombres décimaux", [
      "Je pose les nombres **virgule sous virgule** : ainsi les unités sont sous les unités, les dixièmes sous les dixièmes…",
      "Si un nombre a moins de chiffres après la virgule, je **complète avec des 0** : 236,3 → 236,30.",
      "Je calcule **comme avec des entiers**, de droite à gauche, avec les retenues.",
      "Je **place la virgule au résultat**, juste sous les autres virgules.",
    ]),
    op("359,71", "+", "236,34"),
    op("47,5", "+", "8,75"),
    h("2. Poser une soustraction de décimaux"),
    methode("Méthode — Soustraire des nombres décimaux", [
      "Le plus grand nombre en haut, **virgule sous virgule**, je complète les parties décimales avec des 0 pour qu'elles aient le même nombre de chiffres.",
      "Je soustrais comme avec des entiers (retenue : petit 1 en haut, petit 1 en bas dans la colonne suivante).",
      "Je place la virgule au résultat sous les autres virgules.",
    ]),
    op("497,06", "-", "83,65"),
    op("50", "-", "12,75", "50 − 12,75 = 37,25 (j'écris 50 sous la forme 50,00)"),
    h("3. Vérifier le résultat"),
    methode("Méthode 1 — L'ordre de grandeur", ["J'arrondis les nombres à l'entier : 359,71 + 236,34 ≈ 360 + 236 = 596. Le résultat 596,05 est proche : c'est cohérent."]),
    methode("Méthode 2 — L'opération inverse", ["Pour la soustraction : 413,41 + 83,65 = 497,06 ✔"]),
    attention("L'erreur la plus fréquente est d'aligner les nombres **à droite** au lieu d'aligner les **virgules** : 47,5 + 8,75 n'est pas 47,5 + 87,5 !"),
    retenir("**Virgule sous virgule**, je complète par des 0, je calcule comme avec des entiers, et je remets la virgule."),
  ],
};

// =====================================================================
// S18 — Le triangle
// =====================================================================
M.triangle = {
  exoFigure: null,
  lecon: [
    h("1. Reconnaître un triangle"),
    "Un **triangle** est une figure plane fermée qui a **3 côtés**, **3 sommets** et **3 angles**. On le nomme par ses trois sommets : le triangle ABC.",
    fig("triangle", "Le triangle ABC : base b = 8 cm, hauteur h = 5 cm (en pointillés rouges, perpendiculaire à la base).", 12),
    h("2. Les différents triangles"),
    table(["Triangle", "Propriété", "Comment le reconnaître"], [["quelconque", "3 côtés de longueurs différentes", "aucun côté égal"], ["isocèle", "2 côtés de même longueur", "deux petits traits identiques sur deux côtés"], ["équilatéral", "3 côtés de même longueur", "les 3 côtés portent le même trait ; ses 3 angles mesurent 60°"], ["rectangle", "un angle droit", "le petit carré au sommet de l'angle droit"]], [2200, 3400, 4000]),
    h("3. La hauteur"),
    "La **hauteur** d'un triangle est le segment qui part d'un sommet et arrive **perpendiculairement** sur le côté opposé (appelé la **base**). On la trace avec l'équerre. Un triangle a trois hauteurs.",
    methode("Méthode — Tracer la hauteur avec l'équerre", ["Je pose un côté de l'angle droit de l'équerre sur la base [BC].", "Je fais glisser l'équerre jusqu'à ce que l'autre côté de l'angle droit passe par le sommet A.", "Je trace le trait de A jusqu'à la base : c'est la hauteur, je marque l'angle droit."]),
    h("4. Le périmètre"),
    formule({ nom: "Périmètre du triangle", formule: "Périmètre = côté 1 + côté 2 + côté 3", abrege: "P = a + b + c", application: ["Triangle de côtés 6 cm, 8 cm et 7 cm :", "P = 6 + 8 + 7"], resultat: "P = 21 cm" }),
    "Cas particuliers : triangle **équilatéral** de côté c → P = c × 3 ; triangle **isocèle** de côtés égaux a et de base b → P = (a × 2) + b.",
    h("5. L'aire"),
    "Un triangle est la **moitié d'un rectangle** de même base et de même hauteur : son aire est donc la moitié de « base × hauteur ».",
    formule({ nom: "Aire du triangle", formule: "Aire = {base × hauteur/2}", abrege: "A = {b × h/2}", application: ["Triangle de base 8 cm et de hauteur 5 cm :", "A = {8 × 5/2} = {40/2}"], resultat: "A = 20 cm²" }),
    attention("Pour l'aire, il faut la **hauteur**, pas un côté quelconque ! Dans un triangle rectangle, les deux côtés de l'angle droit sont une base et sa hauteur."),
    retenir("P = a + b + c ; **A = {b × h/2}**. La hauteur est perpendiculaire à la base."),
  ],
};

// =====================================================================
// S19 — Droites parallèles, perpendiculaires, sécantes
// =====================================================================
M.paralleles = {
  image: { file: "v1:image48.jpg", legende: "La charpente d'une maison : des poutres parallèles, d'autres perpendiculaires." },
  exoFigure: { file: "paralleles", legende: "Parallèles, sécantes, perpendiculaires" },
  lecon: [
    h("1. Droites sécantes"),
    "Deux droites sont **sécantes** quand elles **se coupent en un point**. Ce point est leur **point d'intersection**.",
    fig("paralleles", "Droites parallèles (elles ne se coupent jamais), sécantes (un point commun), perpendiculaires (angle droit).", 15),
    h("2. Droites perpendiculaires"),
    "Deux droites sont **perpendiculaires** quand elles se coupent en formant un **angle droit** (90°). On note (d1) ⊥ (d2). Les droites perpendiculaires sont des droites sécantes particulières.",
    methode("Méthode — Tracer une perpendiculaire avec l'équerre", ["Je pose un côté de l'angle droit de l'équerre **le long de la droite** (d).", "Je fais glisser l'équerre jusqu'au point par lequel doit passer la perpendiculaire.", "Je trace le long de l'autre côté de l'angle droit : cette droite est perpendiculaire à (d). Je marque l'angle droit par un petit carré."]),
    h("3. Droites parallèles"),
    "Deux droites sont **parallèles** quand elles **ne se coupent jamais**, même prolongées très loin : elles restent toujours à la même distance l'une de l'autre. On note (d1) // (d2).",
    methode("Méthode — Tracer une parallèle avec la règle et l'équerre", ["Je place l'équerre avec un côté de l'angle droit sur la droite (d), et je cale la règle contre l'autre côté.", "Je tiens la règle bien fixe et je **fais glisser l'équerre le long de la règle** jusqu'au point voulu.", "Je trace le long du côté de l'équerre : la nouvelle droite est parallèle à (d)."]),
    h("4. Dans la vie courante"),
    ul(["Les rails du chemin de fer, les bords d'une règle, les lignes d'un cahier : **parallèles**.", "Les bords d'une porte, les côtés d'un carreau, le mur et le sol : **perpendiculaires**.", "Deux routes qui se croisent : **sécantes**."]),
    table(["", "Sécantes", "Perpendiculaires", "Parallèles"], [["Nombre de points communs", "1", "1", "0"], ["Angle formé", "quelconque", "90°", "—"], ["Notation", "—", "(d1) ⊥ (d2)", "(d1) // (d2)"], ["Instrument pour vérifier", "règle", "équerre", "règle + équerre"]], [2800, 2200, 2300, 2300]),
    retenir("Sécantes : un point commun. Perpendiculaires : sécantes à angle droit (⊥). Parallèles : jamais de point commun (//)."),
  ],
};

module.exports = M;
