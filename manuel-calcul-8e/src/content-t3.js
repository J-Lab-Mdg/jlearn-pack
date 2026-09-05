// Contenus V2 — Trimestre 3 (séances 37 à 57)
const H = require("./helpers");
const { h, hh, ul, fig, methode, formule, attention, retenir, exemple, table, numeration, conversion, op, mult, div, preuve9, ex, qcm, vf, exc, newFiche } = H;

const M = {};

// =====================================================================
// S37 / S45 — Nombres jusqu'à 1 000 000 000
// =====================================================================
M.num1000000000 = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur une droite graduée" },
  lecon: [
    h("1. La classe des millions et la classe des milliards"),
    "Après les centaines de millions vient une nouvelle classe : la **classe des milliards**. **1 000 000 000** (un milliard) = mille millions ; il s'écrit avec 10 chiffres.",
    numeration([701211979, 460756096, 600715853, 1000000000], { titre: "Tableau de numération : 701 211 979 ; 460 756 096 ; 600 715 853 ; 1 000 000 000" }),
    h("2. Lire et écrire"),
    methode("Méthode 1 — Lire", ["Je sépare les classes de 3 chiffres en partant de la droite : 701 211 979.", "Je lis : **sept cent un millions** deux cent onze **mille** neuf cent soixante-dix-neuf.", "1 000 000 000 se lit **un milliard**."]),
    methode("Méthode 2 — Écrire en chiffres", ["« deux cent quatre-vingt-neuf millions cinq cent soixante-cinq mille huit cent trente-six » → 289 | 565 | 836 → 289 565 836.", "Si une classe manque à l'oral, je l'écris avec trois 0 : « six cents millions sept cent quinze » → 600 000 715."]),
    attention("Dans « six cents millions », **cents** prend un s (il termine le nombre « six cents ») ; mais « six cent un millions » (601 000 000) : pas de s car cent est suivi de un."),
    h("3. Décomposer"),
    exemple("701 211 979 = 700 000 000 + 1 000 000 + 200 000 + 10 000 + 1 000 + 900 + 70 + 9 = (701 × 1 000 000) + (211 × 1 000) + 979."),
    h("4. Comparer"),
    methode("Méthode — Comparer", ["Nombre de chiffres d'abord : 1 000 000 000 (10 chiffres) > 999 999 999 (9 chiffres).", "Même nombre de chiffres : classe des millions d'abord. 460 756 096 et 600 715 853 → 460 < 600 donc 460 756 096 < 600 715 853."]),
    h("5. Les grands nombres autour de nous"),
    table(["Grandeur", "Valeur approximative", "Se lit"], [["Population de Madagascar (2024)", "30 000 000", "trente millions d'habitants"], ["Population du monde", "8 000 000 000", "huit milliards d'habitants"], ["Distance Terre–Lune", "384 000 km", "trois cent quatre-vingt-quatre mille kilomètres"], ["Budget d'une commune", "500 000 000 Ar", "cinq cents millions d'ariary"]], [3600, 2800, 3200], 19),
    retenir("Classes : **milliards | millions | mille | unités**. 1 milliard = 1 000 millions = 10 chiffres."),
  ],
};
M.num1000000000b = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur une droite graduée" },
  lecon: [
    h("1. Révision : le tableau de numération complet"),
    numeration([823260998, 353947547, 110242262, 353617734], { titre: "Tableau de numération : 823 260 998 ; 353 947 547 ; 110 242 262 ; 353 617 734" }),
    "823 260 998 se lit **huit cent vingt-trois millions** deux cent soixante **mille** neuf cent quatre-vingt-dix-huit.",
    h("2. Chiffre, nombre, valeur"),
    table(["Dans 823 260 998", "Chiffre des…", "Nombre de…", "Valeur du chiffre"], [["centaines de millions", "8", "8", "800 000 000"], ["dizaines de millions", "2", "82", "20 000 000"], ["unités de millions", "3", "823", "3 000 000"], ["centaines de mille", "2", "8 232", "200 000"], ["unités de mille", "0", "823 260", "0"]], [3000, 1800, 2200, 2600]),
    h("3. Encadrer et arrondir"),
    methode("Méthode — Encadrer entre deux centaines de millions", ["Je garde le chiffre des centaines de millions et je remplace le reste par des 0 : 800 000 000.", "J'ajoute 100 000 000 pour la borne supérieure : 800 000 000 < 823 260 998 < 900 000 000."]),
    methode("Méthode — Arrondir au million", ["Je regarde le chiffre des centaines de mille (2 dans 823 **2**60 998) : plus petit que 5 → je garde 823 millions.", "823 260 998 ≈ 823 000 000. De même 353 947 547 ≈ 354 000 000 (car 9 ≥ 5)."]),
    h("4. Ranger des grands nombres"),
    exemple("Ordre décroissant : 823 260 998 > 353 947 547 > 353 617 734 > 110 242 262. Pour départager 353 947 547 et 353 617 734 : même classe des millions (353), je compare la classe des mille : 947 > 617."),
    h("5. Calculer avec les grands nombres"),
    "Les techniques restent les mêmes : je pose l'opération en alignant les classes. Exemple : 353 947 547 + 110 242 262 :",
    op(353947547, "+", 110242262),
    retenir("Pour lire, écrire, comparer un grand nombre : **toujours le tableau de numération** et les classes de 3 chiffres."),
  ],
};

// =====================================================================
// S38 — Budget familial
// =====================================================================
M.budget = {
  image: { file: "v1:image100.jpg", legende: "Une famille malgache fait ses comptes à la fin du mois." },
  exoFigure: null,
  lecon: [
    h("1. Qu'est-ce qu'un budget familial ?"),
    "Le **budget familial** est le tableau de tout l'argent qui **entre** dans la famille (les **recettes** ou **gains** : salaire, vente de la récolte, petit commerce) et de tout l'argent qui **sort** (les **dépenses** : nourriture, loyer, école, transport, santé, eau et électricité).",
    table(["Recettes (gains)", "Ar", "Dépenses", "Ar"], [["Salaire du père", "150 000", "Nourriture", "95 000"], ["Vente de légumes (mère)", "44 000", "Loyer", "40 000"], ["", "", "École et fournitures", "15 000"], ["", "", "Transport", "12 000"], ["", "", "Eau, électricité, charbon", "14 000"], ["**Total des recettes**", "**194 000**", "**Total des dépenses**", "**176 000**"]], [3200, 1600, 3200, 1600]),
    h("2. Économie ou dette ?"),
    ul(["Si les **recettes sont plus grandes que les dépenses**, la famille met de l'argent de côté : c'est une **économie** (épargne).", "Si les **dépenses sont plus grandes que les recettes**, il manque de l'argent : la famille doit emprunter, c'est une **dette**.", "Un budget est **équilibré** quand recettes = dépenses."]),
    formule({ nom: "Économie", formule: "Économie = Recettes − Dépenses", abrege: "E = R − D", application: ["R = 194 000 Ar ; D = 176 000 Ar", "E = 194 000 − 176 000"], resultat: "E = 18 000 Ar" }),
    op(194000, "-", 176000),
    formule({ nom: "Dette", formule: "Dette = Dépenses − Recettes (quand D > R)", application: ["R = 180 000 Ar ; D = 195 000 Ar", "Dette = 195 000 − 180 000"], resultat: "Dette = 15 000 Ar" }),
    h("3. Retrouver une donnée"),
    formule({ nom: "Dépenses connaissant l'économie", formule: "Dépenses = Recettes − Économie", application: "R = 318 000 Ar ; E = 51 000 Ar → D = 318 000 − 51 000", resultat: "D = 267 000 Ar" }),
    formule({ nom: "Recettes connaissant l'économie", formule: "Recettes = Dépenses + Économie", application: "D = 267 000 Ar ; E = 51 000 Ar → R = 267 000 + 51 000", resultat: "R = 318 000 Ar" }),
    methode("Méthode — Résoudre un problème de budget", ["Je calcule le **total des recettes** (addition) et le **total des dépenses** (addition).", "Je compare les deux totaux.", "Je calcule la différence : économie (R − D) ou dette (D − R).", "Je rédige la phrase-réponse avec « Ar »."]),
    attention("Pour éviter la dette, il faut que les dépenses restent **plus petites** que les recettes. Économiser un peu chaque mois permet de faire face aux imprévus (maladie, rentrée scolaire)."),
    retenir("**Économie = Recettes − Dépenses**. Si les dépenses dépassent les recettes, c'est une **dette**."),
  ],
};

// =====================================================================
// S39 / S43 — Opérations sur les fractions
// =====================================================================
M.fractions_op = {
  exoFigure: { file: "fraction_disque", legende: "Quelle fraction représente cette figure ?" },
  lecon: [
    h("1. Additionner des fractions de même dénominateur"),
    methode("Méthode — Addition", ["Je vérifie que les deux fractions ont **le même dénominateur**.", "J'**additionne les numérateurs** et je **garde le dénominateur**.", "Je simplifie si possible."]),
    formule({ nom: "Addition de fractions (même dénominateur)", formule: "{a/d} + {b/d} = {a + b/d}", application: "{1/5} + {4/5} = {1 + 4/5} = {5/5}", resultat: "= 1" }),
    exemple("{8/10} + {1/10} = {9/10} ; {2/10} + {4/10} = {6/10} = {3/5}."),
    fig("droite_fractions", "Sur la droite graduée en quarts : {1/4} + {2/4} = {3/4}.", 14),
    h("2. Soustraire des fractions de même dénominateur"),
    formule({ nom: "Soustraction de fractions (même dénominateur)", formule: "{a/d} − {b/d} = {a − b/d}", application: "{8/10} − {1/10} = {8 − 1/10}", resultat: "= {7/10}" }),
    exemple("{3/4} − {1/4} = {2/4} = {1/2} ; {8/9} − {1/9} = {7/9}."),
    attention("On n'additionne **jamais les dénominateurs** : {1/4} + {1/4} = {2/4}, et non {2/8} ! Le dénominateur indique la taille des parts, qui ne change pas."),
    h("3. Multiplier une fraction par un nombre entier"),
    formule({ nom: "Multiplication par un entier", formule: "{a/d} × n = {a × n/d}", application: "{8/11} × 2 = {8 × 2/11}", resultat: "= {16/11}" }),
    "On multiplie **seulement le numérateur** : prendre 2 fois {8/11}, c'est prendre 16 onzièmes. Exemple : {2/3} × 3 = {6/3} = 2.",
    h("4. Diviser une fraction par un nombre entier"),
    formule({ nom: "Division par un entier", formule: "{a/d} ÷ n = {a/d × n}", application: "{8/11} ÷ 2 = {8/11 × 2} = {8/22}", resultat: "= {4/11}" }),
    "On multiplie **seulement le dénominateur** : partager {8/11} en 2, c'est obtenir des parts deux fois plus petites. Astuce : si le numérateur est divisible par n, on peut aussi le diviser : {8/11} ÷ 2 = {4/11}.",
    h("5. Résumé"),
    table(["Opération", "Règle", "Exemple"], [["{a/d} + {b/d}", "numérateurs additionnés, même dénominateur", "{3/7} + {3/7} = {6/7}"], ["{a/d} − {b/d}", "numérateurs soustraits, même dénominateur", "{6/11} − {3/11} = {3/11}"], ["{a/d} × n", "numérateur × n", "{4/7} × 2 = {8/7}"], ["{a/d} ÷ n", "dénominateur × n", "{4/7} ÷ 2 = {4/14} = {2/7}"]], [2200, 4400, 3000]),
    retenir("+ et − : **mêmes dénominateurs**, on opère sur les numérateurs. × entier : numérateur × n. ÷ entier : dénominateur × n."),
  ],
};
M.fractions_op2 = {
  exoFigure: { file: "fraction_disque", legende: "Quelle fraction représente cette figure ?" },
  lecon: [
    h("1. Rappel des quatre règles"),
    table(["Opération", "Règle", "Exemple"], [["Addition", "{a/d} + {b/d} = {a + b/d}", "{3/7} + {3/7} = {6/7}"], ["Soustraction", "{a/d} − {b/d} = {a − b/d}", "{6/11} − {3/11} = {3/11}"], ["Multiplication par n", "{a/d} × n = {a × n/d}", "{2/3} × 3 = {6/3} = 2"], ["Division par n", "{a/d} ÷ n = {a/d × n}", "{8/10} ÷ 3 = {8/30} = {4/15}"]], [2600, 3800, 3200]),
    h("2. Additionner des fractions de dénominateurs différents"),
    methode("Méthode — Mettre au même dénominateur avant d'additionner", ["Je cherche un dénominateur commun (le plus grand s'il est multiple de l'autre, sinon le produit des deux).", "Je transforme chaque fraction en fraction équivalente.", "J'additionne les numérateurs.", "{1/2} + {1/4} = {2/4} + {1/4} = {3/4} ; {1/3} + {1/4} = {4/12} + {3/12} = {7/12}."]),
    h("3. Fraction d'une quantité"),
    methode("Méthode — Calculer les {3/4} de 1 200 Ar", ["Je **divise** la quantité par le dénominateur : 1 200 ÷ 4 = 300 Ar (c'est {1/4}).", "Je **multiplie** par le numérateur : 300 × 3 = 900 Ar.", "Les {3/4} de 1 200 Ar font 900 Ar."]),
    div(1200, 4, "long"),
    formule({ nom: "Fraction d'une quantité", formule: "{a/d} de Q = (Q ÷ d) × a", application: "{2/3} de 3 600 Ar = (3 600 ÷ 3) × 2 = 1 200 × 2", resultat: "= 2 400 Ar" }),
    h("4. Résultat plus grand que 1"),
    exemple("{2/3} × 3 = {6/3} = 2 : la fraction {6/3} vaut exactement 2 unités. {16/11} = 1 + {5/11} : un peu plus d'une unité."),
    h("5. Simplifier le résultat"),
    "Après chaque calcul, je regarde si le résultat se simplifie : {8/30} = {4/15} (÷ 2) ; {6/7} ne se simplifie pas.",
    attention("Multiplier une fraction par un entier la rend **plus grande** ; la diviser la rend **plus petite**. {4/7} × 2 = {8/7} > {4/7} ; {4/7} ÷ 2 = {2/7} < {4/7}."),
    retenir("Dénominateurs différents → même dénominateur d'abord. Fraction d'une quantité : **÷ dénominateur, × numérateur**."),
  ],
};

// =====================================================================
// S40 (nouvelle) — Fractions décimales
// =====================================================================
M.fractions_decimales = {
  meta: { "Sous-discipline": "Arithmétique", "Thème": "Les fractions", "Objectif spécifique": "Reconnaître une fraction décimale (dénominateur 10, 100, 1 000) ; passer de l'écriture fractionnaire à l'écriture à virgule et inversement ; placer des fractions décimales dans le tableau de numération (guide pédagogique 8e, p. 118-121).", "Support et matériel": "un carré de 10 × 10 carreaux au tableau ; le tableau de numération avec les colonnes dixièmes, centièmes, millièmes", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Que vaut {1/2} de 100 ?", "50."], ["Écris 0,5 sous forme de fraction.", "{5/10} (ou {1/2})."]],
    mise: "Un carré est partagé en 100 petits carreaux. Soa en colorie 25. Quelle fraction du carré est coloriée ? Peut-on l'écrire avec une virgule ?",
    titre: "Les fractions décimales", objectifEleve: "reconnaître une fraction décimale et l'écrire sous forme de nombre à virgule, et inversement",
    observation: "le carré de 100 carreaux et le tableau de numération avec la partie décimale", support: "Carré 10 × 10 au tableau, tableau de numération",
    analyse: [["Combien de carreaux dans le carré entier ? Quelle fraction représente un carreau ?", "100 carreaux ; un carreau = {1/100} (un centième)."], ["Quelle fraction pour 25 carreaux ? une ligne de 10 carreaux ?", "{25/100} ; {10/100} = {1/10}."], ["Comment écrire {25/100} avec une virgule ?", "0,25 : le 2 dans la colonne des dixièmes, le 5 dans celle des centièmes."], ["Et {7/10} ? {3/1 000} ?", "0,7 ; 0,003."]],
    synthese: "Donc, une fraction décimale a pour dénominateur 10, 100 ou 1 000. Elle s'écrit facilement avec une virgule : le dernier chiffre du numérateur se place dans la colonne des dixièmes (pour 10), des centièmes (pour 100) ou des millièmes (pour 1 000).",
    appEns: ["Écris chaque fraction décimale sous forme de nombre à virgule.", "1. {7/10}", "2. {25/100}", "3. {308/100}", "4. {45/1 000}", "Écris chaque nombre sous forme de fraction décimale.", "1. 0,3", "2. 0,75", "3. 2,5", "4. 0,009"],
    evalEns: ["Écris chaque fraction décimale sous forme de nombre à virgule.", "1. {9/10}", "2. {6/100}", "3. {1 250/1 000}", "4. {52/10}", "Choisis la bonne réponse.", "1. {3/10} = a) 0,03 b) 0,3 c) 3,0", "2. 0,45 = a) {45/10} b) {45/100} c) {45/1 000}", "3. {1/2} est égal à : a) {5/10} b) {2/10} c) {1/10}", "4. {150/100} = a) 0,15 b) 1,5 c) 15"],
  }),
  exercices: {
    application: [
      exc("Écris chaque fraction décimale sous forme de nombre à virgule.", ["{7/10}", "{25/100}", "{308/100}", "{45/1 000}"],
        [["Dénominateur 10 : le dernier chiffre du numérateur va dans la colonne des **dixièmes**.", numeration(["0,7"], { lecture: false }), "**{7/10} = 0,7**"],
         ["Dénominateur 100 : le dernier chiffre va dans la colonne des **centièmes**.", numeration(["0,25"], { lecture: false }), "**{25/100} = 0,25**"],
         ["308 centièmes = 300 centièmes + 8 centièmes = 3 unités et 8 centièmes.", numeration(["3,08"], { lecture: false }), "**{308/100} = 3,08**"],
         ["Dénominateur 1 000 : le dernier chiffre va dans la colonne des **millièmes** ; il faut 3 chiffres après la virgule : 045.", numeration(["0,045"], { lecture: false }), "**{45/1 000} = 0,045**"]],
        ["0,7", "0,25", "3,08", "0,045"]),
      exc("Écris chaque nombre sous forme de fraction décimale.", ["0,3", "0,75", "2,5", "0,009"],
        [["Un chiffre après la virgule → dénominateur 10.", "**0,3 = {3/10}**"], ["Deux chiffres après la virgule → dénominateur 100.", "**0,75 = {75/100}** (= {3/4})"], ["2,5 = 25 dixièmes.", "**2,5 = {25/10}** (= {5/2})"], ["Trois chiffres après la virgule → dénominateur 1 000.", "**0,009 = {9/1 000}**"]],
        ["{3/10}", "{75/100}", "{25/10}", "{9/1 000}"]),
    ],
    evaluation: [
      exc("Écris chaque fraction décimale sous forme de nombre à virgule.", ["{9/10}", "{6/100}", "{1 250/1 000}", "{52/10}"],
        [[numeration(["0,9"], { lecture: false }), "**{9/10} = 0,9**"], ["6 centièmes : 0 dixième et 6 centièmes.", numeration(["0,06"], { lecture: false }), "**{6/100} = 0,06**"], ["1 250 millièmes = 1 unité et 250 millièmes.", numeration(["1,250"], { lecture: false }), "**{1 250/1 000} = 1,250 = 1,25**"], ["52 dixièmes = 5 unités et 2 dixièmes.", numeration(["5,2"], { lecture: false }), "**{52/10} = 5,2**"]],
        ["0,9", "0,06", "1,25", "5,2"]),
      qcm(["{3/10} =   a) 0,03   b) 0,3   c) 3,0", "0,45 =   a) {45/10}   b) {45/100}   c) {45/1 000}", "{1/2} est égal à :   a) {5/10}   b) {2/10}   c) {1/10}", "{150/100} =   a) 0,15   b) 1,5   c) 15"], ["b) 0,3", "b) {45/100}", "a) {5/10} = 0,5", "b) 1,5"]),
    ],
  },
  lecon: [
    h("1. Qu'est-ce qu'une fraction décimale ?"),
    "Une **fraction décimale** est une fraction dont le dénominateur est **10, 100 ou 1 000** (ou 10 000…). Ce sont les fractions qui correspondent aux colonnes du tableau de numération après la virgule.",
    fig("aire_carreaux", "Un carré partagé en 100 carreaux : un carreau = {1/100} = 0,01 ; une ligne de 10 carreaux = {10/100} = {1/10} = 0,1.", 12),
    table(["Fraction décimale", "Se lit", "Écriture à virgule", "Colonne du tableau"], [["{1/10}", "un dixième", "0,1", "dixièmes"], ["{1/100}", "un centième", "0,01", "centièmes"], ["{1/1 000}", "un millième", "0,001", "millièmes"], ["{25/100}", "vingt-cinq centièmes", "0,25", "2 dixièmes et 5 centièmes"]], [2200, 2800, 2200, 2800]),
    h("2. De la fraction décimale au nombre à virgule"),
    methode("Méthode — Écrire {308/100} avec une virgule", ["Je regarde le dénominateur : 100 → **2 chiffres** après la virgule (10 → 1 chiffre ; 1 000 → 3 chiffres).", "Je place le dernier chiffre du numérateur dans la colonne correspondante (centièmes) et les autres à gauche.", "Je complète par des 0 si nécessaire : {45/1 000} → 0,045 ; {7/10} → 0,7."]),
    numeration(["3,08", "0,7", "0,045", "12,5"], { titre: "Tableau de numération : {308/100} = 3,08 ; {7/10} = 0,7 ; {45/1 000} = 0,045 ; {125/10} = 12,5" }),
    h("3. Du nombre à virgule à la fraction décimale"),
    methode("Méthode — Écrire 2,75 en fraction décimale", ["Je compte les chiffres après la virgule : 2 → dénominateur **100**.", "J'écris tous les chiffres sans la virgule au numérateur : 275.", "2,75 = {275/100}. De même 0,3 = {3/10} et 0,009 = {9/1 000}."]),
    h("4. Décomposer un nombre décimal"),
    exemple("3,08 = 3 + {8/100} ; 12,5 = 12 + {5/10} ; 0,045 = {4/100} + {5/1 000} = {45/1 000}."),
    h("5. Fractions simples et fractions décimales"),
    "Certaines fractions simples s'écrivent facilement en fractions décimales : {1/2} = {5/10} = 0,5 ; {1/4} = {25/100} = 0,25 ; {3/4} = {75/100} = 0,75 ; {1/5} = {2/10} = 0,2.",
    attention("Le nombre de chiffres après la virgule doit correspondre au dénominateur : {45/1 000} = 0,**045** (trois chiffres), et non 0,45 !"),
    retenir("Dénominateur 10 → 1 chiffre après la virgule ; 100 → 2 chiffres ; 1 000 → 3 chiffres. {a/100} : le dernier chiffre de a va dans la colonne des centièmes."),
  ],
};

// =====================================================================
// S41 / S47 — Proportionnalité
// =====================================================================
M.proportionnalite = {
  image: { file: "v1:image108.jpg", legende: "Un vendeur de brochettes : le prix est proportionnel au nombre de brochettes." },
  exoFigure: null,
  lecon: [
    h("1. Reconnaître une situation de proportionnalité"),
    "Deux grandeurs sont **proportionnelles** quand, si l'une **double** (ou triple), l'autre **double** (ou triple) aussi ; si l'une est divisée par 2, l'autre aussi. Exemple : le nombre de brochettes et le prix payé.",
    table(["Nombre de brochettes", "1", "2", "4", "5", "10"], [["Prix (Ar)", "500", "1 000", "2 000", "2 500", "5 000"]], [3000, 1300, 1300, 1300, 1300, 1300]),
    "On passe de la première ligne à la deuxième en **multipliant toujours par le même nombre** (ici × 500) : c'est le **coefficient de proportionnalité**.",
    attention("Tout n'est pas proportionnel ! L'âge et la taille d'un enfant ne le sont pas (à 20 ans on n'est pas deux fois plus grand qu'à 10 ans). Le prix avec une remise fixe non plus."),
    h("2. Résoudre un problème de proportionnalité"),
    methode("Méthode 1 — Le passage par l'unité", ["Je calcule la valeur pour **un seul** objet : je **divise**. 4 objets coûtent 6 800 Ar → 1 objet coûte 6 800 ÷ 4 = 1 700 Ar.", "Je **multiplie** par le nombre demandé : 2 objets coûtent 1 700 × 2 = 3 400 Ar."]),
    div(6800, 4, "long"),
    mult(1700, 2),
    methode("Méthode 2 — Les propriétés de la proportionnalité", ["Si 2 objets coûtent 3 200 Ar, alors 4 objets (le double) coûtent 6 400 Ar et 1 objet (la moitié) coûte 1 600 Ar.", "Pour 5 objets : 4 objets + 1 objet = 6 400 + 1 600 = 8 000 Ar."]),
    table(["Nombre d'objets", "2", "1", "4", "5"], [["Prix (Ar)", "3 200", "1 600", "6 400", "8 000"]], [3200, 1700, 1700, 1700, 1700]),
    formule({ nom: "Prix de n objets (passage par l'unité)", formule: "Prix de n objets = {prix total/nombre d'objets} × n", application: ["4 objets coûtent 6 800 Ar ; prix de 2 objets ?", "{6 800/4} × 2 = 1 700 × 2"], resultat: "= 3 400 Ar" }),
    h("3. Partager en parts égales"),
    exemple("1 400 Ar partagés également entre 7 enfants : 1 400 ÷ 7 = 200 Ar chacun. C'est aussi une situation de proportionnalité (200 Ar par enfant)."),
    retenir("Proportionnel = **même coefficient** partout. Méthode : je passe par **l'unité** (÷ puis ×)."),
  ],
};
M.proportionnalite2 = {
  image: { file: "scene:proportionnalite_legumes.jpg", legende: "Au marché : si 1 kg de tomates coûte 2 500 Ar, 2 kg doivent coûter 5 000 Ar et 3 kg 7 500 Ar. Vérifie les étiquettes de cette marchande : sont-elles proportionnelles ?" },
  exoFigure: null,
  lecon: [
    h("1. Rappel : le tableau de proportionnalité"),
    table(["Nombre d'objets", "5", "1", "3"], [["Prix (Ar)", "8 000", "1 600", "4 800"]], [3200, 2000, 2000, 2000]),
    "Dans un tableau de proportionnalité, on passe d'une colonne à l'autre par les mêmes opérations sur les deux lignes (÷ 5 puis × 3), et d'une ligne à l'autre par le coefficient (× 1 600).",
    h("2. Trois façons de calculer"),
    methode("Méthode 1 — Passage par l'unité", ["5 objets coûtent 8 000 Ar → 1 objet : 8 000 ÷ 5 = 1 600 Ar → 3 objets : 1 600 × 3 = 4 800 Ar."]),
    div(8000, 5, "long"),
    methode("Méthode 2 — Le coefficient de proportionnalité", ["Je calcule le coefficient : prix ÷ nombre = 8 000 ÷ 5 = 1 600 (Ar par objet).", "Je multiplie n'importe quelle quantité par ce coefficient : 3 × 1 600 = 4 800 Ar ; 10 × 1 600 = 16 000 Ar."]),
    methode("Méthode 3 — Additionner ou multiplier des colonnes", ["Si je connais le prix de 2 objets (3 200 Ar) et de 3 objets (4 800 Ar), alors 5 objets coûtent 3 200 + 4 800 = 8 000 Ar.", "Si 3 objets coûtent 4 800 Ar, 6 objets (le double) coûtent 9 600 Ar."]),
    h("3. Problèmes de la vie courante"),
    exemple("Un taxi-brousse consomme 12 L d'essence pour 100 km. Combien pour 250 km ? Pour 50 km : 12 ÷ 2 = 6 L ; pour 250 km = 200 km + 50 km : 24 + 6 = 30 L."),
    exemple("Une recette pour 4 personnes demande 500 g de riz. Pour 10 personnes ? 500 ÷ 4 = 125 g par personne ; 125 × 10 = 1 250 g = 1,25 kg."),
    h("4. Reconnaître la proportionnalité"),
    table(["Situation", "Proportionnelle ?", "Pourquoi"], [["Prix et nombre de cahiers identiques", "oui", "chaque cahier coûte le même prix"], ["Distance parcourue et temps, à vitesse constante", "oui", "même distance chaque heure"], ["Âge et taille d'une personne", "non", "on ne grandit pas régulièrement toute la vie"], ["Prix d'un trajet en taxi (prise en charge + km)", "non", "il y a une partie fixe"]], [4200, 1800, 3600], 19),
    retenir("Trois méthodes : **passage par l'unité**, **coefficient**, **addition/multiplication de colonnes**. Vérifier d'abord que la situation est bien proportionnelle."),
  ],
};

// =====================================================================
// S42 — Parallélépipède rectangle
// =====================================================================
M.pave = {
  image: { file: "v1:image112.jpg", legende: "Des caisses de savon : ce sont des parallélépipèdes rectangles (des pavés)." },
  exoFigure: { file: "pave_petit", legende: "Calcule le volume de ce parallélépipède rectangle" },
  lecon: [
    h("1. Reconnaître le parallélépipède rectangle"),
    fig("pave", "Le parallélépipède rectangle (ou pavé droit) : longueur L = 7 cm, largeur l = 5 cm, hauteur h = 4 cm.", 12),
    "Le **parallélépipède rectangle** (ou **pavé droit**) est un **solide** : il a une longueur, une largeur et une hauteur (3 dimensions). Une boîte d'allumettes, une brique, une caisse, une salle de classe sont des pavés.",
    table(["Élément", "Nombre", "Description"], [["**Faces**", "6", "des rectangles, **égales deux à deux** (face de devant = face de derrière…)"], ["**Arêtes**", "12", "les segments où deux faces se rejoignent ; 4 longueurs, 4 largeurs, 4 hauteurs"], ["**Sommets**", "8", "les « coins », où trois arêtes se rencontrent"]], [1800, 1400, 6400]),
    h("2. Le volume"),
    "Le **volume** d'un solide est la place qu'il occupe dans l'espace. On le mesure en **centimètres cubes (cm³)** : 1 cm³ est le volume d'un petit cube de 1 cm de côté. Pour remplir un pavé de 7 cm × 5 cm × 4 cm, il faut 7 × 5 = 35 petits cubes par couche, et 4 couches : 35 × 4 = 140 cubes.",
    formule({ nom: "Volume du parallélépipède rectangle", formule: "Volume = Longueur × largeur × hauteur", abrege: "V = L × l × h", application: ["L = 7 cm ; l = 5 cm ; h = 4 cm", "V = 7 × 5 × 4 = 35 × 4"], resultat: "V = 140 cm³" }),
    methode("Méthode — Calculer un volume", ["Je vérifie que les trois dimensions sont dans la **même unité** (sinon je convertis).", "Je multiplie L × l, puis le résultat × h.", "J'écris l'unité **au cube** : cm³, dm³, m³."]),
    mult(35, 4),
    h("3. Les unités de volume"),
    "Chaque unité de volume vaut **1 000 fois** l'unité suivante : **1 m³ = 1 000 dm³ ; 1 dm³ = 1 000 cm³**. Dans le tableau de conversion des volumes, chaque colonne contient **3 chiffres**.",
    conversion("volume", [[1, "m³", "dm³"], ["1,5", "m³", "dm³"], [2500, "cm³", "dm³"]], {}),
    h("4. Les aires du pavé"),
    ul(["**Aire d'une face** : c'est l'aire d'un rectangle, par exemple L × l pour la base.", "**Aire latérale** (les 4 faces autour) : périmètre de la base × hauteur = (L + l) × 2 × h.", "**Aire totale** (les 6 faces) : aire latérale + 2 × aire de la base."]),
    exemple("Pavé 7 × 5 × 4 : aire de la base = 7 × 5 = 35 cm² ; aire latérale = (7 + 5) × 2 × 4 = 24 × 4 = 96 cm² ; aire totale = 96 + 2 × 35 = 166 cm²."),
    attention("Ne pas confondre : l'**aire** se mesure en cm² (surface), le **volume** en cm³ (espace). Le volume s'obtient avec **trois** dimensions multipliées."),
    retenir("Pavé : 6 faces, 12 arêtes, 8 sommets. **V = L × l × h** (en cm³, dm³, m³). 1 dm³ = 1 000 cm³."),
  ],
};

// =====================================================================
// S43 (nouvelle) — Mesure du temps (1) : jour, semaine, mois, année
// =====================================================================
M.temps1 = {
  meta: { "Sous-discipline": "Mesure", "Thème": "Mesure du temps", "Objectif spécifique": "Connaître les unités de temps supérieures à l'heure (jour, semaine, mois, trimestre, semestre, année) et leurs relations ; lire un calendrier ; calculer une durée en jours entre deux dates (guide pédagogique 8e, p. 78-81).", "Support et matériel": "un calendrier de l'année en cours ; le tableau des relations entre unités de temps", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Combien de minutes dans 1 heure ?", "60 minutes."], ["Combien d'heures dans 1 jour ?", "24 heures."]],
    mise: "Les vacances de Pâques commencent le 3 avril et se terminent le 19 avril. Combien de jours de vacances ? Et combien de semaines ?",
    titre: "La mesure du temps (1) : jour, semaine, mois, année", objectifEleve: "utiliser le jour, la semaine, le mois et l'année, lire un calendrier et calculer une durée entre deux dates",
    observation: "le calendrier affiché et le tableau des unités de temps", support: "Calendrier, tableau des unités de temps au tableau",
    note: "Faire compter les jours sur le calendrier avec le doigt, puis vérifier par le calcul (19 − 3 = 16 jours).",
    analyse: [["Combien de jours dans une semaine ? dans le mois d'avril ?", "7 jours ; 30 jours."], ["Quels mois ont 31 jours ? 30 jours ? 28 ou 29 ?", "31 : janvier, mars, mai, juillet, août, octobre, décembre. 30 : avril, juin, septembre, novembre. Février : 28 (29 les années bissextiles)."], ["Combien de jours du 3 au 19 avril ?", "19 − 3 = 16 jours."], ["16 jours, c'est combien de semaines ?", "16 ÷ 7 = 2 semaines et 2 jours."]],
    synthese: "Donc, 1 semaine = 7 jours ; 1 mois = 28, 29, 30 ou 31 jours ; 1 an = 12 mois = 365 jours (366 les années bissextiles). Pour calculer une durée entre deux dates du même mois, je soustrais les quantièmes ; d'un mois à l'autre, je compte mois par mois.",
    appEns: ["Effectue les conversions suivantes.", "1. 3 semaines = ? jours", "2. 2 ans = ? mois", "3. 48 mois = ? ans", "4. 35 jours = ? semaines", "Résous les problèmes suivants.", "1. Du 3 avril au 19 avril, combien de jours ?", "2. Du 25 mai au 10 juin, combien de jours ?", "3. Rado est né le 12 mars 2015. Quel âge a-t-il le 12 mars 2026 ?", "4. Un chantier dure 10 semaines à partir du lundi 2 février. Combien de jours ? En quel mois se termine-t-il ?"],
    evalEns: ["Effectue les conversions suivantes.", "1. 5 semaines = ? jours", "2. 3 ans = ? mois", "3. 1 an = ? jours", "4. 1 semestre = ? mois", "Choisis la bonne réponse.", "1. Le mois de février compte : a) 30 jours b) 28 ou 29 jours c) 31 jours", "2. 1 trimestre = a) 3 mois b) 4 mois c) 6 mois", "3. Une année bissextile compte : a) 365 jours b) 366 jours c) 360 jours", "4. Du 1er au 31 janvier inclus, il y a : a) 30 jours b) 31 jours c) 32 jours"],
  }),
  exercices: {
    application: [
      exc("Effectue les conversions suivantes.", ["3 semaines = ? jours", "2 ans = ? mois", "48 mois = ? ans", "35 jours = ? semaines"],
        [["1 semaine = 7 jours → 3 semaines = 7 × 3.", "**3 semaines = 21 jours**"], ["1 an = 12 mois → 2 ans = 12 × 2.", "**2 ans = 24 mois**"], ["12 mois = 1 an → 48 ÷ 12 = 4.", div(48, 12, "long"), "**48 mois = 4 ans**"], ["7 jours = 1 semaine → 35 ÷ 7 = 5.", "**35 jours = 5 semaines**"]],
        ["21 jours", "24 mois", "4 ans", "5 semaines"]),
      exc("Résous les problèmes suivants.", ["Du 3 avril au 19 avril, combien de jours ?", "Du 25 mai au 10 juin, combien de jours ?", "Rado est né le 12 mars 2015. Quel âge a-t-il le 12 mars 2026 ?", "Un chantier dure 10 semaines à partir du lundi 2 février. Combien de jours dure-t-il ? En quel mois se termine-t-il ?"],
        [["Même mois : je soustrais les quantièmes.", op(19, "-", 3, null), "**Il y a 16 jours du 3 au 19 avril** (2 semaines et 2 jours)."],
         ["Deux mois différents : je compte mois par mois. Mai a 31 jours : du 25 au 31 mai → 31 − 25 = 6 jours. Puis du 31 mai au 10 juin → 10 jours.", op(6, "+", 10, null), "**Il y a 16 jours du 25 mai au 10 juin.**"],
         ["Même jour et même mois : je soustrais les années.", op(2026, "-", 2015, null), "**Rado a 11 ans.**"],
         ["10 semaines = 7 × 10 = 70 jours.", "Février (28 jours) : du 2 février à la fin du mois → 26 jours ; reste 70 − 26 = 44 jours. Mars : 31 jours ; reste 44 − 31 = 13 jours → le chantier se termine le 13 avril.", "**Le chantier dure 70 jours et se termine en avril.**"]],
        ["16 jours", "16 jours", "11 ans", "70 jours ; en avril"]),
    ],
    evaluation: [
      exc("Effectue les conversions suivantes.", ["5 semaines = ? jours", "3 ans = ? mois", "1 an = ? jours", "1 semestre = ? mois"],
        [["7 × 5 = 35.", "**5 semaines = 35 jours**"], ["12 × 3 = 36.", "**3 ans = 36 mois**"], ["Une année ordinaire compte 365 jours (366 si elle est bissextile).", "**1 an = 365 jours**"], ["Un semestre est la moitié d'une année : 12 ÷ 2 = 6.", "**1 semestre = 6 mois**"]],
        ["35 jours", "36 mois", "365 jours", "6 mois"]),
      qcm(["Le mois de février compte :   a) 30 jours   b) 28 ou 29 jours   c) 31 jours", "1 trimestre =   a) 3 mois   b) 4 mois   c) 6 mois", "Une année bissextile compte :   a) 365 jours   b) 366 jours   c) 360 jours", "Du 1er au 31 janvier inclus, il y a :   a) 30 jours   b) 31 jours   c) 32 jours"], ["b) 28 ou 29 jours", "a) 3 mois", "b) 366 jours", "b) 31 jours"]),
    ],
  },
  lecon: [
    h("1. Les unités de temps plus grandes que l'heure"),
    table(["Unité", "Vaut…", "Repère"], [["1 jour", "24 heures", "du lever du soleil au lever suivant"], ["1 semaine", "7 jours", "lundi, mardi, mercredi, jeudi, vendredi, samedi, dimanche"], ["1 mois", "28, 29, 30 ou 31 jours", "environ 4 semaines"], ["1 trimestre", "3 mois", "un trimestre scolaire"], ["1 semestre", "6 mois", "la moitié de l'année"], ["1 an", "12 mois = 365 jours (366 si bissextile)", "de janvier à décembre"]], [2000, 3600, 4000]),
    h("2. Le calendrier"),
    fig("calendrier", "Un mois du calendrier : les jours sont rangés en semaines de 7 jours.", 11),
    methode("Méthode — Retenir le nombre de jours de chaque mois", ["Je ferme le poing : chaque **bosse** (os) est un mois de **31 jours**, chaque **creux** un mois de **30 jours** (février : 28 ou 29).", "Janvier (31), février (28/29), mars (31), avril (30), mai (31), juin (30), juillet (31), août (31), septembre (30), octobre (31), novembre (30), décembre (31)."]),
    "Une **année bissextile** revient tous les 4 ans (2024, 2028…) : février a alors 29 jours et l'année 366 jours.",
    h("3. Calculer une durée entre deux dates"),
    methode("Méthode 1 — Dates dans le même mois", ["Je soustrais les quantièmes : du 3 au 19 avril → 19 − 3 = **16 jours**.", "Si l'énoncé dit « du 3 au 19 inclus » (les deux jours comptent), j'ajoute 1 : 17 jours."]),
    methode("Méthode 2 — Dates dans deux mois différents", ["Je compte les jours **jusqu'à la fin du premier mois** : du 25 au 31 mai → 31 − 25 = 6 jours.", "J'ajoute les jours **dans le deuxième mois** : 10 jours de juin.", "Total : 6 + 10 = **16 jours**."]),
    h("4. Convertir"),
    conversion_temps_table(),
    retenir("1 semaine = 7 j ; 1 mois = 28 à 31 j ; 1 an = 12 mois = 365 j. Pour une durée entre deux dates : je compte **mois par mois**."),
  ],
};
function conversion_temps_table() { return table(["Conversion", "Opération", "Exemple"], [["semaines → jours", "× 7", "3 semaines = 21 jours"], ["jours → semaines", "÷ 7", "35 jours = 5 semaines"], ["ans → mois", "× 12", "2 ans = 24 mois"], ["mois → ans", "÷ 12", "48 mois = 4 ans"], ["ans → jours", "× 365", "2 ans = 730 jours"]], [2800, 2000, 4800]); }

// =====================================================================
// S44 — Sexagésimaux et mesure du temps (2)
// =====================================================================
M.temps2 = {
  image: { file: "v1:image116.jpg", legende: "À la gare routière : le taxi-brousse part à 5 h 48. Lire l'heure est indispensable pour ne pas le rater !" },
  exoFigure: { file: "horloge_5_08", legende: "Quelle heure indique cette horloge ?" },
  lecon: [
    h("1. Heure, minute, seconde : le système sexagésimal"),
    "Pour mesurer le temps, on ne compte pas de 10 en 10 mais **de 60 en 60** : c'est le système **sexagésimal** (sexaginta = soixante). **1 h = 60 min** et **1 min = 60 s**, donc **1 h = 3 600 s**. Et 1 jour = 24 h.",
    table(["Unité", "Symbole", "Vaut…", "Repère"], [["seconde", "s", "—", "dire « un » lentement"], ["minute", "min", "60 s", "se laver les mains soigneusement"], ["heure", "h", "60 min = 3 600 s", "un cours de calcul + une récréation"], ["jour", "j", "24 h", "un tour complet de la Terre sur elle-même"]], [1800, 1400, 3000, 3400]),
    attention("Il n'y a **pas** 100 minutes dans une heure ! 1 h 30 min n'est pas 1,30 h mais 1,5 h (une heure et demie). On n'écrit pas les durées avec une virgule."),
    h("2. Lire l'heure"),
    fig("horloge", "L'horloge : la petite aiguille indique les heures, la grande aiguille indique les minutes (chaque graduation = 1 minute, chaque chiffre = 5 minutes).", 8),
    methode("Méthode — Lire l'heure sur une horloge à aiguilles", ["Je regarde la **petite aiguille** : elle donne l'heure (le dernier chiffre qu'elle a dépassé).", "Je regarde la **grande aiguille** : je compte les minutes de 5 en 5 à partir du 12 (chiffre 1 = 5 min, 2 = 10 min… 6 = 30 min, 9 = 45 min), puis j'ajoute les petites graduations.", "L'après-midi, j'ajoute 12 : 5 h 48 le soir se dit 17 h 48."]),
    table(["Horloge", "Grande aiguille sur…", "Minutes"], [["3 h 06", "1 graduation après le 1", "6 min"], ["4 h 28", "3 graduations après le 5", "28 min"], ["7 h 07", "2 graduations après le 1", "7 min"], ["2 h 37", "2 graduations après le 7", "37 min"]], [2200, 4400, 3000]),
    h("3. Convertir des durées"),
    methode("Méthode 1 — Vers une unité plus petite : je multiplie", ["heures → minutes : **× 60** ; minutes → secondes : **× 60** ; jours → heures : **× 24**.", "2 h = 2 × 60 = 120 min ; 4 min = 4 × 60 = 240 s ; 3 jours = 3 × 24 = 72 h."]),
    methode("Méthode 2 — Vers une unité plus grande : je divise", ["minutes → heures : **÷ 60** ; secondes → minutes : **÷ 60** ; heures → jours : **÷ 24**.", "150 min = 150 ÷ 60 = 2 h reste 30 → 2 h 30 min ; 100 s = 1 min 40 s."]),
    div(150, 60, "long"),
    formule({ nom: "Convertir des heures en minutes", formule: "minutes = heures × 60", application: "6 h = 6 × 60", resultat: "= 360 min" }),
    formule({ nom: "Convertir des minutes en heures et minutes", formule: "heures = minutes ÷ 60 (le reste donne les minutes)", application: "150 min = 150 ÷ 60 → quotient 2, reste 30", resultat: "= 2 h 30 min" }),
    retenir("**1 h = 60 min ; 1 min = 60 s ; 1 j = 24 h.** Vers le plus petit : × 60 (ou × 24) ; vers le plus grand : ÷ 60 (ou ÷ 24), le reste donne l'unité inférieure."),
  ],
};

// =====================================================================
// S48 / S57 — Opérations sur les sexagésimaux
// =====================================================================
const leconDurees = (variant) => [
  h("1. Additionner des durées"),
  methode("Méthode — Addition de durées", [
    "Je pose l'addition en **colonnes** : heures sous heures, minutes sous minutes (et secondes sous secondes).",
    "J'additionne les **minutes** entre elles, puis les heures entre elles.",
    "Si le total des minutes **dépasse 60**, je retire 60 min et j'ajoute **1 h** (retenue) : 87 min = 1 h 27 min.",
  ]),
  table(["", "h", "min"], [["", "5", "45"], ["+", "3", "42"], ["=", "8", "87 → 87 − 60 = 27, retenue 1 h"], ["**Résultat**", "**9**", "**27**"]], [2400, 1400, 5200]),
  "5 h 45 min + 3 h 42 min = 8 h 87 min = **9 h 27 min**.",
  exemple("2 h 58 min + 1 h 25 min = 3 h 83 min = 4 h 23 min (83 min = 1 h 23 min)."),
  h("2. Soustraire des durées"),
  methode("Méthode — Soustraction de durées", [
    "Je pose la soustraction en colonnes, la plus grande durée en haut.",
    "Si les minutes du haut sont **plus petites** que celles du bas, j'**emprunte 1 h** que je transforme en **60 min** : 7 h 15 min = 6 h 75 min.",
    "Je soustrais les minutes, puis les heures.",
  ]),
  table(["", "h", "min"], [["", "7 → 6", "15 → 75"], ["−", "2", "40"], ["**Résultat**", "**4**", "**35**"]], [2400, 2400, 4200]),
  "7 h 15 min − 2 h 40 min = 6 h 75 min − 2 h 40 min = **4 h 35 min**.",
  ...(variant === 2 ? [
    h("3. Multiplier une durée par un nombre"),
    methode("Méthode — Multiplication d'une durée", ["Je multiplie les minutes, puis les heures, par le nombre.", "Je convertis les minutes si elles dépassent 60.", "1 h 45 min × 4 = 4 h 180 min = 4 h + 3 h = **7 h**."]),
    h("4. Diviser une durée par un nombre"),
    methode("Méthode — Division d'une durée", ["Je divise les heures ; le reste des heures est converti en minutes (× 60) et ajouté aux minutes.", "Je divise les minutes.", "7 h 30 min ÷ 3 : 7 ÷ 3 = 2 h reste 1 h = 60 min ; 60 + 30 = 90 min ; 90 ÷ 3 = 30 min → **2 h 30 min**."]),
    h("5. Calculer une heure d'arrivée ou une durée de trajet"),
    exemple("Un taxi-brousse part à 5 h 48 et roule pendant 3 h 35 min. Il arrive à 5 h 48 + 3 h 35 = 8 h 83 min = **9 h 23 min**."),
    exemple("Un film commence à 20 h 15 et finit à 22 h 05. Durée : 22 h 05 − 20 h 15 = 21 h 65 min − 20 h 15 min = **1 h 50 min**."),
  ] : [
    h("3. Vérifier"),
    "Pour vérifier une addition de durées, je fais la soustraction : 9 h 27 min − 3 h 42 min = 8 h 87 min − 3 h 42 min = 5 h 45 min ✔",
    h("4. Convertir avant de calculer"),
    exemple("5 min + 45 s + 2 min 30 s : je regroupe minutes et secondes : 7 min 75 s = 8 min 15 s."),
  ]),
  attention("La retenue en base 60 vaut **60**, pas 10 : 8 h 87 min → 9 h 27 min (et non 9 h 17 min ni 8,87 h)."),
  retenir("Heures sous heures, minutes sous minutes. **Plus de 60 min → +1 h** ; **pas assez de minutes → j'emprunte 1 h = 60 min**."),
];
M.temps3 = { image: { file: "horloge_2_37", legende: "L'horloge indique 2 h 37." }, exoFigure: { file: "horloge_3_06", legende: "Quelle heure indique cette horloge ?" }, lecon: leconDurees(1) };
M.temps4 = { image: { file: "scene:temps_gare.jpg", legende: "À la gare routière : lis l'heure sur l'horloge (petite aiguille pour les heures, grande pour les minutes). Si le trajet dure 3 h 35 min, à quelle heure le taxi-brousse arrivera-t-il ?" }, exoFigure: { file: "horloge_4_28", legende: "Quelle heure indique cette horloge ?" }, lecon: leconDurees(2) };

// =====================================================================
// S46 / S52 — Épargne et placement
// =====================================================================
M.epargne1 = {
  image: { file: "v1:image129.jpg", legende: "Une caisse d'épargne rurale : l'argent placé rapporte un intérêt." },
  exoFigure: null,
  lecon: [
    h("1. Épargner et placer"),
    "**Épargner**, c'est mettre de l'argent de côté au lieu de le dépenser. **Placer** son épargne, c'est la confier à une caisse d'épargne, une banque ou une institution de microfinance : en échange, on reçoit chaque année une somme en plus, l'**intérêt**.",
    table(["Mot", "Définition", "Exemple"], [["**Capital (C)**", "la somme placée au départ", "163 000 Ar"], ["**Taux (t)**", "le pourcentage du capital versé chaque année", "2 % (2 Ar pour 100 Ar placés)"], ["**Durée**", "le temps du placement, en années", "1 an"], ["**Intérêt (I)**", "la somme gagnée grâce au placement", "3 260 Ar"]], [2400, 4400, 2800]),
    h("2. Calculer l'intérêt d'une année"),
    "Un taux de **2 %** signifie que **100 Ar placés rapportent 2 Ar** en un an. Pour 163 000 Ar, il y a 1 630 fois 100 Ar : l'intérêt est 1 630 × 2 = 3 260 Ar.",
    formule({ nom: "Intérêt annuel", formule: "Intérêt = {Capital × taux/100}", abrege: "I = {C × t/100}", application: ["C = 163 000 Ar ; t = 2 %", "I = {163 000 × 2/100} = {326 000/100}"], resultat: "I = 3 260 Ar" }),
    methode("Méthode — Calculer un intérêt annuel", ["Je multiplie le capital par le taux : 163 000 × 2 = 326 000.", "Je divise par 100 : je déplace la virgule de 2 rangs vers la gauche (ou je supprime deux 0) : 326 000 ÷ 100 = 3 260.", "J'écris la réponse avec l'unité : l'intérêt est de 3 260 Ar."]),
    mult(163000, 2),
    h("3. Le capital après un an"),
    formule({ nom: "Capital final", formule: "Capital final = Capital + Intérêt", application: "163 000 + 3 260", resultat: "= 166 260 Ar" }),
    op(163000, "+", 3260),
    h("4. Pourquoi épargner ?"),
    ul(["Pour faire face aux **imprévus** (maladie, mauvaise récolte).", "Pour préparer une **dépense importante** (rentrée scolaire, achat d'un zébu, construction).", "Parce que l'argent placé **rapporte** : plus le taux est élevé, plus l'intérêt est grand."]),
    attention("Le taux s'applique **au capital**, pas à l'intérêt : à 10 %, 168 000 Ar rapportent 16 800 Ar (et non 10 Ar). Diviser par 100 = enlever deux zéros ou reculer la virgule de deux rangs."),
    retenir("**I = {C × t/100}** pour un an. Capital final = C + I."),
  ],
};
M.epargne2 = {
  image: { file: "scene:epargne_famille.jpg", legende: "À la maison, on met de côté une partie de l'argent : l'épargne placée à la caisse rapporte un intérêt chaque année." },
  exoFigure: null,
  lecon: [
    h("1. Rappel : l'intérêt d'une année"),
    formule({ nom: "Intérêt annuel", formule: "I = {C × t/100}", application: "C = 129 000 Ar ; t = 5 % → I = {129 000 × 5/100} = {645 000/100}", resultat: "I = 6 450 Ar par an" }),
    h("2. L'intérêt sur plusieurs années"),
    "Si le capital reste placé plusieurs années au même taux, l'intérêt de chaque année est le même : pour 3 ans, on **multiplie l'intérêt annuel par 3**.",
    formule({ nom: "Intérêt sur n années", formule: "Intérêt = {Capital × taux × durée/100}", abrege: "I = {C × t × n/100}", application: ["C = 129 000 Ar ; t = 5 % ; n = 3 ans", "I = {129 000 × 5 × 3/100} = {1 935 000/100}"], resultat: "I = 19 350 Ar" }),
    methode("Méthode — Intérêt sur plusieurs années", ["Je calcule l'intérêt d'**une** année : I₁ = C × t ÷ 100 = 6 450 Ar.", "Je multiplie par le nombre d'années : 6 450 × 3 = 19 350 Ar.", "Capital final = 129 000 + 19 350 = 148 350 Ar."]),
    mult(6450, 3),
    h("3. L'intérêt pour une partie d'année"),
    exemple("Pour 6 mois (une demi-année), l'intérêt est la **moitié** de l'intérêt annuel : 6 450 ÷ 2 = 3 225 Ar. Pour 3 mois (un quart d'année) : 6 450 ÷ 4 = 1 612,5 Ar."),
    formule({ nom: "Intérêt pour m mois", formule: "I = {C × t/100} × {m/12}", application: "6 450 × {6/12}", resultat: "= 3 225 Ar" }),
    h("4. Retrouver le capital ou le taux"),
    formule({ nom: "Taux à partir de l'intérêt", formule: "t = {I × 100/C}", application: "I = 3 260 Ar ; C = 163 000 Ar → t = {326 000/163 000}", resultat: "t = 2 %" }),
    h("5. Comparer deux placements"),
    table(["Placement", "Capital", "Taux", "Durée", "Intérêt"], [["A", "200 000 Ar", "3 %", "2 ans", "200 000 × 3 × 2 ÷ 100 = 12 000 Ar"], ["B", "150 000 Ar", "5 %", "2 ans", "150 000 × 5 × 2 ÷ 100 = 15 000 Ar"]], [1400, 2000, 1200, 1400, 3600]),
    "Le placement B rapporte plus, bien que le capital soit plus petit : le **taux** compte beaucoup.",
    retenir("**I = {C × t × n/100}** (n en années). Pour des mois : × {m/12}."),
  ],
};

// =====================================================================
// S47 — Le cube
// =====================================================================
M.cube = {
  image: { file: "scene:cube_caisses.jpg", legende: "Chez le menuisier : une caisse cubique, des petits cubes et un dé. Toutes les arêtes d'un cube ont la même longueur." },
  exoFigure: { file: "cube_petit", legende: "Calcule le volume de ce cube" },
  lecon: [
    h("1. Reconnaître le cube"),
    fig("cube", "Le cube : 6 faces carrées identiques, 12 arêtes de même longueur (ici c = 9 cm), 8 sommets.", 10),
    "Le **cube** est un parallélépipède rectangle particulier dont **toutes les arêtes ont la même longueur** : ses 6 faces sont des **carrés identiques**. Un dé à jouer, un cube de bouillon, certaines caisses sont des cubes.",
    table(["Élément", "Nombre", "Particularité"], [["Faces", "6", "des carrés tous identiques"], ["Arêtes", "12", "toutes de même longueur c"], ["Sommets", "8", "3 arêtes se rencontrent à chaque sommet"]], [2000, 1400, 6200]),
    h("2. Le volume du cube"),
    formule({ nom: "Volume du cube", formule: "Volume = côté × côté × côté", abrege: "V = c × c × c", application: ["c = 9 cm", "V = 9 × 9 × 9 = 81 × 9"], resultat: "V = 729 cm³" }),
    mult(81, 9),
    preuve9({ op: "×", a: 81, b: 9, produit: 729 }),
    methode("Méthode — Calculer le volume d'un cube", ["Je multiplie le côté par lui-même : c × c (c'est l'aire d'une face).", "Je multiplie encore par le côté : (c × c) × c.", "J'écris l'unité **au cube**."]),
    table(["Côté c", "c × c (aire d'une face)", "c × c × c (volume)"], [["2 cm", "4 cm²", "8 cm³"], ["5 cm", "25 cm²", "125 cm³"], ["10 cm", "100 cm²", "1 000 cm³ = 1 dm³"], ["11 cm", "121 cm²", "1 331 cm³"]], [2400, 3600, 3600]),
    h("3. Les aires du cube"),
    formule({ nom: "Aire d'une face", formule: "A = c × c", application: "c = 9 cm → A = 9 × 9", resultat: "A = 81 cm²" }),
    formule({ nom: "Aire totale (6 faces)", formule: "A totale = c × c × 6", application: "81 × 6", resultat: "= 486 cm²" }),
    h("4. Cube et unités de volume"),
    fig("litre_dm3", "Un cube de 1 dm de côté (10 cm) a un volume de 1 dm³ = 1 000 cm³ ; il contient exactement 1 litre.", 11),
    "Un cube de **10 cm de côté** a un volume de 10 × 10 × 10 = **1 000 cm³ = 1 dm³**. C'est le volume d'**un litre** d'eau.",
    attention("**Le cube n'est pas un carré** : le carré est plat (2 dimensions, aire en cm²), le cube est un solide (3 dimensions, volume en cm³). Quand on dessine un cube, les faces de côté paraissent penchées, mais ce sont bien des carrés."),
    retenir("Cube : 6 faces carrées identiques, 12 arêtes égales, 8 sommets. **V = c × c × c**. 1 dm³ = 1 000 cm³ = 1 L."),
  ],
};

// =====================================================================
// S49 — Partages inégaux
// =====================================================================
M.partages = {
  exoFigure: null,
  lecon: [
    h("1. Partage égal et partage inégal"),
    ul(["Dans un **partage égal**, toutes les parts sont **identiques** : 4 800 Ar entre 3 enfants → 4 800 ÷ 3 = 1 600 Ar chacun.", "Dans un **partage inégal**, les parts sont **différentes** selon une règle donnée : l'aîné reçoit 2 parts et le cadet 3 parts ; l'un a travaillé 3 jours et l'autre 4 jours…"]),
    h("2. Partage en parts proportionnelles"),
    methode("Méthode — Partager 9 500 Ar en 2 parts et 3 parts", [
      "Je compte le **nombre total de parts** : 2 + 3 = 5 parts.",
      "Je calcule la **valeur d'une part** : 9 500 ÷ 5 = 1 900 Ar.",
      "Je multiplie par le nombre de parts de chacun : 1 900 × 2 = 3 800 Ar ; 1 900 × 3 = 5 700 Ar.",
      "Je **vérifie** : 3 800 + 5 700 = 9 500 Ar ✔",
    ]),
    div(9500, 5, "long"),
    formule({ nom: "Valeur d'une part", formule: "Valeur d'une part = {somme à partager/nombre total de parts}", application: "{9 500/2 + 3} = {9 500/5}", resultat: "= 1 900 Ar" }),
    formule({ nom: "Part de chacun", formule: "Part = valeur d'une part × nombre de parts", application: "1 900 × 2 = 3 800 Ar ; 1 900 × 3 = 5 700 Ar", resultat: "3 800 Ar et 5 700 Ar" }),
    fig("fraction_disque", "Partager, c'est découper la somme en parts égales puis les distribuer : ici 5 parts, 2 pour l'un et 3 pour l'autre.", 9),
    h("3. Partage avec une différence connue"),
    methode("Méthode — L'un reçoit 800 Ar de plus que l'autre (total 3 000 Ar)", ["J'enlève la différence du total : 3 000 − 800 = 2 200 Ar : c'est deux fois la petite part.", "Petite part : 2 200 ÷ 2 = 1 100 Ar.", "Grande part : 1 100 + 800 = 1 900 Ar. Vérification : 1 100 + 1 900 = 3 000 ✔"]),
    h("4. Partage où l'un reçoit le double de l'autre"),
    exemple("3 000 Ar : Fara reçoit le double de Soa. Soa = 1 part, Fara = 2 parts → 3 parts ; 3 000 ÷ 3 = 1 000 Ar ; Soa 1 000 Ar, Fara 2 000 Ar."),
    attention("Toujours **vérifier** que la somme des parts redonne le total : c'est la preuve du partage."),
    retenir("Partage en parts : **total des parts → valeur d'une part (÷) → part de chacun (×) → vérification (+)**."),
  ],
};

// =====================================================================
// S53 — Révision cube et pavé
// =====================================================================
M.revision_solides = {
  exoFigure: { file: "pave_petit", legende: "Calcule le volume de ce solide" },
  lecon: [
    h("1. Comparer le cube et le pavé"),
    fig("cube", "Le cube : toutes les arêtes égales.", 8),
    fig("pave", "Le parallélépipède rectangle : longueur, largeur, hauteur.", 10),
    table(["", "Cube", "Parallélépipède rectangle"], [["Faces", "6 carrés identiques", "6 rectangles égaux deux à deux"], ["Arêtes", "12, toutes égales", "12 : 4 L, 4 l, 4 h"], ["Sommets", "8", "8"], ["Volume", "**V = c × c × c**", "**V = L × l × h**"], ["Aire totale", "c × c × 6", "2 × (L × l + L × h + l × h)"]], [2200, 3600, 3800]),
    h("2. Les deux formules de volume"),
    formule({ nom: "Volume du cube", formule: "V = c × c × c", application: "c = 2 cm → V = 2 × 2 × 2", resultat: "V = 8 cm³" }),
    formule({ nom: "Volume du pavé", formule: "V = L × l × h", application: "L = 14 cm ; l = 12 cm ; h = 15 cm → V = 14 × 12 × 15 = 168 × 15", resultat: "V = 2 520 cm³" }),
    mult(168, 15),
    preuve9({ op: "×", a: 168, b: 15, produit: 2520 }),
    h("3. Retrouver une dimension"),
    methode("Méthode — Hauteur connaissant le volume", ["V = L × l × h, donc **h = V ÷ (L × l)**.", "Pavé de volume 140 cm³, de base 7 cm × 5 cm : h = 140 ÷ 35 = 4 cm."]),
    div(140, 35, "long"),
    h("4. Les unités de volume"),
    conversion("volume", [[1, "dm³", "cm³"], [2520, "cm³", "dm³"], ["0,5", "m³", "dm³"]], {}),
    "Chaque colonne du tableau des volumes contient **3 chiffres** : 1 dm³ = 1 000 cm³ ; 1 m³ = 1 000 dm³ = 1 000 000 cm³.",
    h("5. Dans la vie courante"),
    exemple("Une salle de classe de 8 m × 6 m × 3 m a un volume de 8 × 6 × 3 = 144 m³. Une caisse cubique de 50 cm de côté : 50 × 50 × 50 = 125 000 cm³ = 125 dm³."),
    retenir("Cube : V = c × c × c. Pavé : V = L × l × h. Unités : cm³, dm³, m³ (× 1 000 entre chaque)."),
  ],
};

// =====================================================================
// S54 (nouvelle) — Volume, capacité, masse
// =====================================================================
M.volume_capacite_masse = {
  meta: { "Sous-discipline": "Mesure", "Thème": "Volume, capacité et masse", "Objectif spécifique": "Établir et utiliser les relations entre unités de volume, de capacité et de masse (eau) : 1 dm³ = 1 L = 1 kg ; 1 m³ = 1 000 L = 1 t ; 1 cm³ = 1 mL = 1 g ; résoudre des problèmes de réservoirs et de citernes (guide pédagogique 8e, p. 150-153).", "Support et matériel": "un cube de 1 dm de côté (carton) et une bouteille d'un litre ; le tableau volume–capacité–masse au tableau", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Volume d'un cube de 10 cm de côté ?", "1 000 cm³."], ["1 L = combien de mL ?", "1 000 mL."]],
    mise: "Une citerne cubique a 1 m de côté. Combien de litres d'eau contient-elle ? Et combien pèse cette eau ?",
    titre: "Volume, capacité et masse : 1 dm³ = 1 L = 1 kg", objectifEleve: "passer d'un volume à une capacité et à une masse d'eau, et résoudre des problèmes de réservoirs",
    observation: "le cube de 1 dm et la bouteille de 1 L, puis le tableau des correspondances", support: "Cube de 1 dm³, bouteille de 1 L, tableau volume–capacité–masse",
    note: "Si possible, verser 1 L d'eau dans le cube de 1 dm (doublé de plastique) : il est exactement plein.",
    analyse: [["Quel est le volume du cube de 1 dm ? Que contient-il ?", "1 dm³ ; exactement 1 L d'eau."], ["Combien pèse 1 L d'eau ?", "1 kg."], ["Combien de dm³ dans 1 m³ ? donc combien de litres ?", "1 000 dm³ ; 1 000 L."], ["Combien pèse 1 m³ d'eau ?", "1 000 kg = 1 tonne."]],
    synthese: "Donc, pour l'eau : 1 dm³ = 1 L = 1 kg ; 1 m³ = 1 000 L = 1 t ; 1 cm³ = 1 mL = 1 g. Pour trouver la capacité d'un réservoir, je calcule son volume en dm³ et je le lis directement en litres.",
    appEns: ["Complète.", "1. 5 dm³ = ? L", "2. 2 m³ = ? L", "3. 250 cm³ = ? mL", "4. 3 500 L = ? m³", "Résous les problèmes suivants.", "1. Une citerne cubique de 1 m de côté : capacité en L et masse de l'eau en kg ?", "2. Un bassin de 4 m × 2,5 m × 1,2 m : combien de litres ?", "3. Un seau cubique de 30 cm de côté : combien de litres ?", "4. Une bouteille de 1,5 L : quel volume en cm³ et quelle masse d'eau en g ?"],
    evalEns: ["Complète.", "1. 12 dm³ = ? L", "2. 0,5 m³ = ? L", "3. 750 mL = ? cm³", "4. 2 500 kg d'eau = ? m³", "Vrai ou faux ?", "1. 1 L d'eau pèse 1 kg.", "2. 1 m³ = 100 L.", "3. 1 cm³ = 1 mL.", "4. Un réservoir de 2 000 L a un volume de 2 m³."],
  }),
  exercices: {
    application: [
      exc("Complète.", ["5 dm³ = ? L", "2 m³ = ? L", "250 cm³ = ? mL", "3 500 L = ? m³"],
        [["1 dm³ = 1 L.", "**5 dm³ = 5 L**"], ["1 m³ = 1 000 dm³ = 1 000 L.", "**2 m³ = 2 000 L**"], ["1 cm³ = 1 mL.", "**250 cm³ = 250 mL**"], ["1 000 L = 1 m³ → 3 500 ÷ 1 000 = 3,5.", "**3 500 L = 3,5 m³**"]],
        ["5 L", "2 000 L", "250 mL", "3,5 m³"]),
      exc("Résous les problèmes suivants.", ["Une citerne cubique de 1 m de côté : quelle est sa capacité en L et la masse de l'eau qu'elle contient en kg ?", "Un bassin mesure 4 m × 2,5 m × 1,2 m. Combien de litres d'eau contient-il ?", "Un seau cubique de 30 cm de côté : combien de litres contient-il ?", "Une bouteille de 1,5 L : quel est son volume en cm³ et la masse d'eau en g ?"],
        [[formule({ nom: "Volume du cube", formule: "V = c × c × c", application: "V = 1 × 1 × 1", resultat: "V = 1 m³" }), "1 m³ = 1 000 dm³ = 1 000 L ; 1 000 L d'eau pèsent 1 000 kg = 1 t.", "**La citerne contient 1 000 L d'eau, qui pèsent 1 000 kg (1 tonne).**"],
         [formule({ nom: "Volume du pavé", formule: "V = L × l × h", application: "V = 4 × 2,5 × 1,2 = 10 × 1,2", resultat: "V = 12 m³" }), "12 m³ = 12 000 dm³ = 12 000 L.", "**Le bassin contient 12 000 L d'eau.**"],
         ["30 cm = 3 dm.", formule({ nom: "Volume du cube", formule: "V = c × c × c", application: "V = 3 × 3 × 3 = 9 × 3", resultat: "V = 27 dm³" }), "27 dm³ = 27 L.", "**Le seau contient 27 L.**"],
         ["1,5 L = 1,5 dm³ = 1 500 cm³ (× 1 000).", "1 500 cm³ d'eau pèsent 1 500 g = 1,5 kg.", "**Volume : 1 500 cm³ ; masse : 1 500 g.**"]],
        ["1 000 L ; 1 000 kg", "12 000 L", "27 L", "1 500 cm³ ; 1 500 g"]),
    ],
    evaluation: [
      exc("Complète.", ["12 dm³ = ? L", "0,5 m³ = ? L", "750 mL = ? cm³", "2 500 kg d'eau = ? m³"],
        [["**12 dm³ = 12 L**"], ["0,5 m³ = 500 dm³.", "**0,5 m³ = 500 L**"], ["1 mL = 1 cm³.", "**750 mL = 750 cm³**"], ["1 kg d'eau = 1 dm³ → 2 500 dm³ = 2,5 m³.", "**2 500 kg d'eau = 2,5 m³**"]],
        ["12 L", "500 L", "750 cm³", "2,5 m³"]),
      vf(["1 L d'eau pèse 1 kg.", "1 m³ = 100 L.", "1 cm³ = 1 mL.", "Un réservoir de 2 000 L a un volume de 2 m³."], ["Vrai", "Faux — 1 m³ = 1 000 L.", "Vrai", "Vrai"]),
    ],
  },
  lecon: [
    h("1. Le cube de 1 dm et le litre"),
    fig("litre_dm3", "Un cube de 1 dm de côté (10 cm × 10 cm × 10 cm) contient exactement 1 litre d'eau, qui pèse 1 kg.", 12),
    "Un cube de 1 dm de côté a un volume de **1 dm³** (= 1 000 cm³). Si on le remplit d'eau, il contient exactement **1 litre**. Et ce litre d'eau pèse **1 kilogramme**.",
    formule({ nom: "La relation fondamentale (eau)", formule: "1 dm³ = 1 L = 1 kg" }),
    h("2. Le tableau des correspondances"),
    table(["Volume", "Capacité", "Masse d'eau", "Exemple"], [["1 m³", "1 000 L (1 kL)", "1 000 kg = 1 t", "une citerne d'un mètre de côté"], ["1 dm³", "1 L", "1 kg", "une brique de lait"], ["1 cm³", "1 mL", "1 g", "un dé à coudre"]], [1800, 2400, 2400, 3400]),
    conversion("volume", [[1, "m³", "dm³"], [12, "m³", "dm³"], [1500, "cm³", "dm³"]], { legendeFleches: true }),
    "Dans le tableau des volumes, chaque colonne a **3 chiffres** (× 1 000). La colonne **dm³** correspond aux **litres** et aux **kilogrammes** d'eau ; la colonne **cm³** aux **millilitres** et aux **grammes**.",
    h("3. De la capacité au volume et inversement"),
    methode("Méthode — Trouver la capacité d'un réservoir", ["Je calcule le **volume** avec la formule du solide (cube : c × c × c ; pavé : L × l × h), en **dm**.", "Je lis le volume en dm³ : c'est le nombre de **litres**.", "Si le volume est en m³, je multiplie par 1 000 pour avoir des litres ; s'il est en cm³, je divise par 1 000."]),
    exemple("Bassin de 4 m × 2,5 m × 1,2 m : V = 4 × 2,5 × 1,2 = 12 m³ = 12 000 L = 12 t d'eau."),
    mult("2,5", 4),
    mult("1,2", 10),
    h("4. Attention à la matière"),
    attention("La relation 1 L = 1 kg est vraie pour **l'eau**. 1 L d'huile pèse environ 0,9 kg et 1 L de miel environ 1,4 kg. Mais 1 dm³ = 1 L est toujours vrai, quelle que soit la matière."),
    retenir("**1 dm³ = 1 L = 1 kg (eau)** ; **1 m³ = 1 000 L = 1 t** ; **1 cm³ = 1 mL = 1 g**. Volume en dm³ → litres directement."),
  ],
};

// =====================================================================
// S56 (nouvelle) — Problèmes de synthèse
// =====================================================================
M.pb_synthese = {
  meta: { "Sous-discipline": "Problèmes", "Thème": "Problèmes de synthèse", "Objectif spécifique": "Résoudre des problèmes à plusieurs étapes mobilisant les quatre opérations, les échanges, la proportionnalité, les mesures et le budget ; organiser sa démarche et présenter la solution (guide pédagogique 8e, p. 158-161).", "Support et matériel": "deux énoncés de problèmes au tableau ; la fiche « Les 4 étapes pour résoudre un problème »", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Prix de revient = ?", "Prix d'achat + frais."], ["Combien de litres dans 1 m³ ?", "1 000 L."]],
    mise: "Un marchand de Toamasina achète 150 kg de letchis à 1 200 Ar le kg, paie 30 000 Ar de transport et revend tout à 1 800 Ar le kg. Combien gagne-t-il ? Combien d'étapes faut-il ?",
    titre: "Problèmes de synthèse", objectifEleve: "résoudre un problème à plusieurs étapes en organisant vos calculs et en rédigeant la solution",
    observation: "l'énoncé au tableau et la fiche des 4 étapes", support: "Énoncés au tableau, fiche « Les 4 étapes »",
    analyse: [["Que cherche-t-on à la fin ?", "Le bénéfice du marchand."], ["Que faut-il connaître pour le calculer ?", "Le prix de revient (prix d'achat + transport) et le prix de vente total."], ["Quelles étapes, dans l'ordre ?", "1. PA = 1 200 × 150 ; 2. PR = PA + 30 000 ; 3. PV = 1 800 × 150 ; 4. B = PV − PR."], ["Comment présenter ?", "Un titre par étape, l'opération posée, la phrase-réponse finale."]],
    synthese: "Donc, dans un problème de synthèse, je pars de la question finale et je remonte : de quoi ai-je besoin ? Je numérote les étapes, je calcule l'une après l'autre et je vérifie que le résultat est raisonnable.",
    appEns: ["Résous les problèmes suivants.", "1. Un marchand achète 150 kg de letchis à 1 200 Ar le kg, paie 30 000 Ar de transport et revend tout à 1 800 Ar le kg. Quel est son bénéfice ?", "2. Une famille gagne 250 000 Ar par mois. Elle dépense 3/5 de cette somme pour la nourriture et 45 000 Ar pour le loyer. Combien économise-t-elle ?", "3. Un réservoir de 1,5 m × 1 m × 0,8 m est rempli aux 3/4. Combien de litres contient-il ?", "4. Un taxi-brousse parcourt 169 km en 3 h 15 min. Il part à 6 h 40. À quelle heure arrive-t-il, et combien de km fait-il en moyenne par heure (arrondi) ?"],
    evalEns: ["Résous les problèmes suivants.", "1. Une école achète 24 bancs à 85 000 Ar et 6 tableaux à 120 000 Ar. Elle paie 150 000 Ar de livraison. Quelle dépense totale ?", "2. Un éleveur vend 8 zébus 950 000 Ar chacun. Il place 1/4 de la somme à 5 % pendant 1 an. Quel intérêt reçoit-il ?", "3. Un terrain rectangulaire de 120 m sur 75 m est vendu 2 500 Ar le m². Quel est son prix ? Exprime son aire en ha.", "4. Un tailleur a 45 m de tissu. Il coupe 12 morceaux de 2,75 m. Quelle longueur lui reste-t-il ?"],
  }),
  exercices: {
    application: [
      exc("Résous les problèmes suivants.", ["Un marchand achète 150 kg de letchis à 1 200 Ar le kg, paie 30 000 Ar de transport et revend tout à 1 800 Ar le kg. Quel est son bénéfice ?", "Une famille gagne 250 000 Ar par mois. Elle dépense les {3/5} de cette somme pour la nourriture et 45 000 Ar pour le loyer. Combien économise-t-elle ?", "Un réservoir de 1,5 m × 1 m × 0,8 m est rempli aux {3/4}. Combien de litres d'eau contient-il ?", "Un taxi-brousse parcourt 169 km en 3 h 15 min. Il part à 6 h 40. À quelle heure arrive-t-il ? Combien de km parcourt-il en moyenne par heure (arrondi à l'unité) ?"],
        [["**Étape 1** — Prix d'achat : 1 200 × 150.", mult(1200, 150), "**Étape 2** — Prix de revient :", formule({ nom: "Prix de revient", formule: "PR = PA + F", application: "PR = 180 000 + 30 000", resultat: "PR = 210 000 Ar" }), "**Étape 3** — Prix de vente : 1 800 × 150.", mult(1800, 150), "**Étape 4** — Bénéfice :", formule({ nom: "Bénéfice", formule: "B = PV − PR", application: "B = 270 000 − 210 000", resultat: "B = 60 000 Ar" }), "**Le marchand fait un bénéfice de 60 000 Ar.**"],
         ["**Étape 1** — Nourriture : {3/5} de 250 000 = (250 000 ÷ 5) × 3 = 50 000 × 3 = 150 000 Ar.", div(250000, 5, "long"), "**Étape 2** — Dépenses totales : 150 000 + 45 000 = 195 000 Ar.", op(150000, "+", 45000, null), "**Étape 3** — Économie :", formule({ nom: "Économie", formule: "E = Recettes − Dépenses", application: "E = 250 000 − 195 000", resultat: "E = 55 000 Ar" }), "**La famille économise 55 000 Ar par mois.**"],
         ["**Étape 1** — Volume du réservoir :", formule({ nom: "Volume du pavé", formule: "V = L × l × h", application: "V = 1,5 × 1 × 0,8", resultat: "V = 1,2 m³" }), "1,2 m³ = 1 200 dm³ = 1 200 L.", "**Étape 2** — Les {3/4} de 1 200 L = (1 200 ÷ 4) × 3 = 300 × 3 = 900 L.", "**Le réservoir contient 900 L d'eau.**"],
         ["**Étape 1** — Heure d'arrivée : 6 h 40 + 3 h 15 = 9 h 55 min.", table(["", "h", "min"], [["", "6", "40"], ["+", "3", "15"], ["**=**", "**9**", "**55**"]], [1200, 1200, 1200]), "**Étape 2** — Distance par heure : 3 h 15 min = 3,25 h ; 169 ÷ 3,25 ≈ 52 (car 52 × 3,25 = 169).", "Vérification : 52 × 3 = 156 ; 52 × 0,25 = 13 ; 156 + 13 = 169 ✔", "**Il arrive à 9 h 55 et parcourt environ 52 km par heure.**"]],
        ["60 000 Ar", "55 000 Ar", "900 L", "9 h 55 ; ≈ 52 km/h"]),
    ],
    evaluation: [
      exc("Résous les problèmes suivants.", ["Une école achète 24 bancs à 85 000 Ar l'un et 6 tableaux à 120 000 Ar l'un. Elle paie 150 000 Ar de livraison. Quelle est la dépense totale ?", "Un éleveur vend 8 zébus 950 000 Ar chacun. Il place le {1/4} de la somme à 5 % pendant 1 an. Quel intérêt reçoit-il ?", "Un terrain rectangulaire de 120 m sur 75 m est vendu 2 500 Ar le m². Quel est son prix ? Exprime aussi son aire en ha.", "Un tailleur a 45 m de tissu. Il coupe 12 morceaux de 2,75 m. Quelle longueur de tissu lui reste-t-il ?"],
        [["**Étape 1** — Bancs : 85 000 × 24.", mult(85000, 24), "**Étape 2** — Tableaux : 120 000 × 6 = 720 000 Ar.", mult(120000, 6), "**Étape 3** — Total : 2 040 000 + 720 000 + 150 000.", op(2040000, "+", 720000, null), op(2760000, "+", 150000, null), "**La dépense totale est de 2 910 000 Ar.**"],
         ["**Étape 1** — Somme reçue : 950 000 × 8 = 7 600 000 Ar.", mult(950000, 8), "**Étape 2** — Capital placé : {1/4} de 7 600 000 = 7 600 000 ÷ 4 = 1 900 000 Ar.", div(7600000, 4, "long"), "**Étape 3** — Intérêt :", formule({ nom: "Intérêt annuel", formule: "I = {C × t/100}", application: "I = {1 900 000 × 5/100} = {9 500 000/100}", resultat: "I = 95 000 Ar" }), "**L'éleveur reçoit 95 000 Ar d'intérêt.**"],
         ["**Étape 1** — Aire :", formule({ nom: "Aire du rectangle", formule: "A = L × l", application: "A = 120 × 75", resultat: "A = 9 000 m²" }), mult(120, 75), "**Étape 2** — Prix : 2 500 × 9 000 = 22 500 000 Ar.", mult(2500, 9000), "**Étape 3** — En hectares : 9 000 m² → 0|90|00 → 0,9 ha (1 ha = 10 000 m²).", "**Le terrain coûte 22 500 000 Ar ; son aire est 0,9 ha.**"],
         ["**Étape 1** — Longueur coupée : 2,75 × 12.", mult("2,75", 12), "**Étape 2** — Reste : 45 − 33.", op("45", "-", "33", null), "**Il lui reste 12 m de tissu.**"]],
        ["2 910 000 Ar", "95 000 Ar", "22 500 000 Ar ; 0,9 ha", "12 m"]),
    ],
  },
  lecon: [
    h("1. Organiser sa démarche"),
    methode("Méthode — Les 4 étapes (rappel) et le plan de calcul", [
      "**Je lis** deux fois, je souligne les données, j'encadre la question finale.",
      "**Je remonte depuis la question** : « pour trouver le bénéfice, il me faut PV et PR ; pour PR, il me faut PA et les frais… ». J'obtiens la liste des étapes, que je numérote dans l'ordre du calcul.",
      "**Je calcule** chaque étape : un titre, l'opération posée ou la formule encadrée, le résultat avec son unité.",
      "**Je vérifie** l'ordre de grandeur et **je rédige** la phrase-réponse.",
    ]),
    h("2. Un exemple complet"),
    exemple("Un marchand achète 150 kg de letchis à 1 200 Ar le kg, paie 30 000 Ar de transport et revend tout à 1 800 Ar le kg. Quel est son bénéfice ?"),
    table(["Étape", "Je cherche", "Formule / opération", "Résultat"], [["1", "le prix d'achat", "PA = 1 200 × 150", "180 000 Ar"], ["2", "le prix de revient", "PR = PA + F = 180 000 + 30 000", "210 000 Ar"], ["3", "le prix de vente", "PV = 1 800 × 150", "270 000 Ar"], ["4", "le bénéfice", "B = PV − PR = 270 000 − 210 000", "**60 000 Ar**"]], [1000, 2600, 4000, 2000]),
    "Astuce : on pouvait aussi calculer le bénéfice par kg (1 800 − 1 200 = 600 Ar), le multiplier par 150 (90 000 Ar) puis retirer les frais (90 000 − 30 000 = 60 000 Ar). **Plusieurs chemins mènent au même résultat.**",
    h("3. Les formules à mobiliser"),
    table(["Domaine", "Formules"], [["Échanges", "PR = PA + F ; B = PV − PR ; Perte = PR − PV"], ["Budget", "Économie = Recettes − Dépenses"], ["Épargne", "I = C × t × n ÷ 100"], ["Proportionnalité", "passage par l'unité : ÷ puis ×"], ["Fractions d'une quantité", "{a/d} de Q = (Q ÷ d) × a"], ["Mesures", "1 km = 1 000 m ; 1 ha = 10 000 m² ; 1 dm³ = 1 L = 1 kg ; 1 h = 60 min"], ["Géométrie", "A rectangle = L × l ; V pavé = L × l × h"]], [2600, 7000]),
    h("4. Les pièges fréquents"),
    ul(["Oublier de **convertir** dans la même unité avant de calculer (m et cm, h et min).", "Confondre **prix d'achat** et **prix de revient** (les frais !).", "Multiplier là où il faut diviser : se demander si le résultat doit être **plus grand ou plus petit**.", "Oublier la **phrase-réponse** ou l'**unité**."]),
    retenir("Je pars de la **question finale**, je liste les étapes, je calcule dans l'ordre, je vérifie, je rédige."),
  ],
};

// =====================================================================
// S57 (nouvelle) — Problèmes de géométrie
// =====================================================================
M.pb_geometrie = {
  meta: { "Sous-discipline": "Géométrie", "Thème": "Problèmes de géométrie", "Objectif spécifique": "Résoudre des problèmes de périmètre, d'aire et de volume issus de la vie courante (clôture, carrelage, peinture, réservoir) en choisissant la bonne formule et en convertissant les unités (guide pédagogique 8e, p. 162-165).", "Support et matériel": "le formulaire des périmètres, aires et volumes affiché ; un plan de jardin rectangulaire avec ses dimensions au tableau", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Aire d'un carré de 6 cm de côté ?", "36 cm²."], ["Périmètre d'un rectangle de 8 m sur 3 m ?", "22 m."]],
    mise: "Le père de Hery veut clôturer son jardin rectangulaire de 25 m sur 12 m avec du grillage à 8 000 Ar le mètre, puis y planter du manioc. Faut-il le périmètre ou l'aire ? Combien coûtera le grillage ?",
    titre: "Problèmes de géométrie", objectifEleve: "choisir entre périmètre, aire et volume selon la question, appliquer la bonne formule et convertir les unités",
    observation: "le plan du jardin et le formulaire affiché", support: "Plan du jardin au tableau, formulaire",
    analyse: [["Pour la clôture, que faut-il calculer ?", "La longueur du tour : le périmètre, P = (25 + 12) × 2 = 74 m."], ["Combien coûte le grillage ?", "74 × 8 000 = 592 000 Ar."], ["Pour semer le manioc, que faut-il connaître ?", "La surface : l'aire, A = 25 × 12 = 300 m² = 3 a."], ["Quand utilise-t-on le volume ?", "Pour ce que peut contenir un solide : un réservoir, une caisse."]],
    synthese: "Donc, pour un problème de géométrie : le tour → périmètre (m) ; la surface → aire (m²) ; le contenu → volume (m³ ou L). Je choisis la formule, je vérifie les unités, je calcule et je réponds.",
    appEns: ["Résous les problèmes suivants.", "1. Jardin rectangulaire 25 m × 12 m, grillage à 8 000 Ar le mètre : coût de la clôture ?", "2. Une salle de 8 m sur 6 m est carrelée avec des carreaux de 40 cm × 40 cm. Combien de carreaux ?", "3. Un champ carré de 80 m de côté : aire en ha et en a ?", "4. Une citerne de 2 m × 1,5 m × 1,2 m : capacité en litres ?", "Choisis la bonne réponse.", "1. Pour peindre un mur, je calcule : a) le périmètre b) l'aire c) le volume", "2. Pour border un terrain de bambous, je calcule : a) le périmètre b) l'aire c) le volume", "3. Pour remplir une piscine, je calcule : a) le périmètre b) l'aire c) le volume", "4. L'unité d'une aire est : a) le m b) le m² c) le m³"],
    evalEns: ["Résous les problèmes suivants.", "1. Un terrain de football mesure 100 m sur 64 m. Un joueur en fait 5 fois le tour. Quelle distance en km ?", "2. Une rizière triangulaire a une base de 60 m et une hauteur de 45 m. Quelle est son aire en a ?", "3. Une roue de charrette a un diamètre de 80 cm. Quelle distance parcourt-elle en 100 tours (en m) ?", "4. Une caisse cubique de 60 cm de côté : volume en dm³ ? Combien de litres de riz peut-elle contenir ?"],
  }),
  exercices: {
    application: [
      exc("Résous les problèmes suivants.", ["Un jardin rectangulaire mesure 25 m sur 12 m. On le clôture avec du grillage à 8 000 Ar le mètre. Quel est le coût de la clôture ?", "Une salle de 8 m sur 6 m est carrelée avec des carreaux carrés de 40 cm de côté. Combien faut-il de carreaux ?", "Un champ carré a 80 m de côté. Quelle est son aire en ha et en a ?", "Une citerne de 2 m × 1,5 m × 1,2 m : quelle est sa capacité en litres ?"],
        [["Une clôture fait **le tour** : périmètre.", formule({ nom: "Périmètre du rectangle", formule: "P = (L + l) × 2", application: "P = (25 + 12) × 2 = 37 × 2", resultat: "P = 74 m" }), "Coût : 8 000 × 74.", mult(8000, 74), "**La clôture coûte 592 000 Ar.**"],
         ["**Étape 1** — Aire de la salle :", formule({ nom: "Aire du rectangle", formule: "A = L × l", application: "A = 8 × 6", resultat: "A = 48 m²" }), "**Étape 2** — Aire d'un carreau : 40 cm = 4 dm ; A = 4 × 4 = 16 dm².", "**Étape 3** — 48 m² = 4 800 dm² ; nombre de carreaux : 4 800 ÷ 16.", div(4800, 16, "long"), "**Il faut 300 carreaux.**"],
         [formule({ nom: "Aire du carré", formule: "A = c × c", application: "A = 80 × 80", resultat: "A = 6 400 m²" }), "6 400 m² → dans le tableau des aires : 0|64|00 → 0,64 ha = 64 a.", "**L'aire du champ est 0,64 ha, soit 64 a.**"],
         [formule({ nom: "Volume du pavé", formule: "V = L × l × h", application: "V = 2 × 1,5 × 1,2 = 3 × 1,2", resultat: "V = 3,6 m³" }), "3,6 m³ = 3 600 dm³ = 3 600 L.", "**La citerne contient 3 600 L.**"]],
        ["592 000 Ar", "300 carreaux", "0,64 ha = 64 a", "3 600 L"]),
      qcm(["Pour peindre un mur, je calcule :   a) le périmètre   b) l'aire   c) le volume", "Pour border un terrain avec des bambous, je calcule :   a) le périmètre   b) l'aire   c) le volume", "Pour remplir une piscine, je calcule :   a) le périmètre   b) l'aire   c) le volume", "L'unité d'une aire est :   a) le m   b) le m²   c) le m³"], ["b) l'aire", "a) le périmètre", "c) le volume", "b) le m²"]),
    ],
    evaluation: [
      exc("Résous les problèmes suivants.", ["Un terrain de football mesure 100 m sur 64 m. Un joueur en fait 5 fois le tour. Quelle distance parcourt-il, en km ?", "Une rizière triangulaire a une base de 60 m et une hauteur de 45 m. Quelle est son aire en a ?", "Une roue de charrette a un diamètre de 80 cm. Quelle distance parcourt-elle en 100 tours, en m ?", "Une caisse cubique a 60 cm de côté. Quel est son volume en dm³ ? Combien de litres de riz peut-elle contenir ?"],
        [[formule({ nom: "Périmètre du rectangle", formule: "P = (L + l) × 2", application: "P = (100 + 64) × 2 = 164 × 2", resultat: "P = 328 m" }), "5 tours : 328 × 5 = 1 640 m.", mult(328, 5), "1 640 m = 1,64 km.", "**Le joueur parcourt 1,64 km.**"],
         [formule({ nom: "Aire du triangle", formule: "A = {b × h/2}", application: "A = {60 × 45/2} = {2 700/2}", resultat: "A = 1 350 m²" }), mult(60, 45), "1 350 m² → 13|50 → 13,5 a.", "**L'aire de la rizière est 13,5 a.**"],
         ["Un tour = le périmètre du cercle.", formule({ nom: "Périmètre du cercle", formule: "P = D × 3,14", application: "P = 80 × 3,14", resultat: "P = 251,2 cm" }), mult("3,14", 80), "100 tours : 251,2 × 100 = 25 120 cm = 251,2 m.", "**La roue parcourt 251,2 m.**"],
         ["60 cm = 6 dm.", formule({ nom: "Volume du cube", formule: "V = c × c × c", application: "V = 6 × 6 × 6 = 36 × 6", resultat: "V = 216 dm³" }), mult(36, 6), "1 dm³ = 1 L.", "**Volume : 216 dm³ ; la caisse peut contenir 216 L de riz.**"]],
        ["1,64 km", "13,5 a", "251,2 m", "216 dm³ = 216 L"]),
    ],
  },
  lecon: [
    h("1. Périmètre, aire ou volume ?"),
    table(["La question parle de…", "Je calcule…", "Unité", "Exemples"], [["le tour, la clôture, la bordure, la distance parcourue autour", "le **périmètre**", "m, cm, km", "grillage, ruban, tour de piste, tour de roue"], ["la surface, ce qu'on recouvre, ce qu'on cultive", "l'**aire**", "m², cm², ha, a", "carrelage, peinture, rizière, tissu"], ["ce que contient un solide, la place occupée", "le **volume**", "m³, dm³, cm³ (L)", "citerne, caisse, salle, piscine"]], [3600, 1800, 1800, 2400], 19),
    h("2. Le formulaire"),
    table(["Figure", "Périmètre", "Aire"], [["Rectangle", "(L + l) × 2", "L × l"], ["Carré", "c × 4", "c × c"], ["Triangle", "a + b + c", "{b × h/2}"], ["Parallélogramme", "(a + b) × 2", "b × h"], ["Losange", "c × 4", "{D × d/2}"], ["Trapèze", "B + b + c₁ + c₂", "{(B + b) × h/2}"], ["Cercle / disque", "D × 3,14", "r × r × 3,14"]], [2600, 3200, 3800]),
    table(["Solide", "Volume", "Capacité"], [["Cube", "c × c × c", "1 dm³ = 1 L"], ["Pavé", "L × l × h", "1 m³ = 1 000 L"]], [2600, 3200, 3800]),
    h("3. Un problème résolu"),
    exemple("Le jardin de Hery : 25 m sur 12 m. Clôture à 8 000 Ar le mètre ; puis on plante du manioc. Coût du grillage ? Surface cultivée en a ?"),
    hh("Étape 1 — La clôture fait le tour : périmètre"),
    formule({ nom: "Périmètre du rectangle", formule: "P = (L + l) × 2", application: "P = (25 + 12) × 2 = 37 × 2", resultat: "P = 74 m" }),
    hh("Étape 2 — Coût du grillage"),
    mult(8000, 74),
    hh("Étape 3 — La surface cultivée : aire"),
    formule({ nom: "Aire du rectangle", formule: "A = L × l", application: "A = 25 × 12", resultat: "A = 300 m² = 3 a" }),
    "**Réponse :** le grillage coûte 592 000 Ar ; la surface cultivée est de 300 m², soit 3 a.",
    h("4. Les pièges des unités"),
    ul(["Toutes les dimensions dans la **même unité** avant de calculer : 8 m et 40 cm → 80 dm et 4 dm.", "Aire : 2 chiffres par colonne (1 m² = 100 dm²) ; volume : 3 chiffres par colonne (1 m³ = 1 000 dm³).", "Pour une capacité : je passe par le dm³ (= 1 L)."]),
    attention("Doubler les dimensions d'un carré **multiplie son périmètre par 2** mais **son aire par 4** : carré de 3 m → P = 12 m, A = 9 m² ; carré de 6 m → P = 24 m, A = 36 m²."),
    retenir("Tour → **périmètre** ; surface → **aire** ; contenu → **volume**. Même unité partout, puis la bonne formule."),
  ],
};

module.exports = M;
