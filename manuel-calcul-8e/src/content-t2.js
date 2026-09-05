// Contenus V2 — Trimestre 2 (séances 20 à 36)
const H = require("./helpers");
const { h, hh, ul, fig, methode, formule, attention, retenir, exemple, table, numeration, conversion, op, mult, div, preuve9, ex, qcm, vf, exc, newFiche } = H;

const M = {};

// ---------- gabarit numération grands nombres ----------
function leconGrandsNombres({ classes, exemples, lecture, nouveauNombre, droite }) {
  return [
    h(`1. Les classes : ${classes}`),
    `Les chiffres d'un grand nombre sont groupés par **classes de 3 chiffres** en partant de la droite. ${nouveauNombre}`,
    numeration(exemples, { titre: `Tableau de numération : ${exemples.map(H.fmt).join(" ; ")}` }),
    h("2. Lire et écrire"),
    methode("Méthode 1 — Lire un grand nombre", ["Je sépare les classes par un espace tous les 3 chiffres en partant de la **droite**.", "Je lis chaque classe comme un nombre de 1 à 999, suivi du **nom de sa classe** : « … milliards », « … millions », « … mille » ; la classe des unités simples se lit sans nom.", lecture]),
    methode("Méthode 2 — Écrire en chiffres un nombre dicté", ["Je repère les mots **milliard(s)**, **million(s)** et **mille** : ils séparent les classes.", "J'écris la première classe telle quelle, puis **chaque classe suivante sur 3 chiffres** (je complète par des 0 à gauche si besoin).", "Je vérifie en relisant le nombre."]),
    attention("« Million » et « milliard » prennent un **s** au pluriel (deux millions, trois milliards), mais **« mille » est invariable**. Si une classe est absente à l'oral (« sept millions cinq cent deux »), je l'écris quand même avec des 0 : 7 **000** 502."),
    h("3. Décomposer"),
    exemple(`${H.fmt(exemples[0])} = ${decomp(exemples[0])}.`),
    h("4. Comparer, ranger, encadrer"),
    methode("Méthode — Comparer deux grands nombres", ["Le nombre qui a **le plus de chiffres** est le plus grand.", "Même nombre de chiffres : je compare **classe par classe en partant de la gauche**, puis chiffre par chiffre dans la première classe différente.", `${H.fmt(exemples[1])} et ${H.fmt(exemples[2])} : ${H.fmt(exemples[1])} ${exemples[1] > exemples[2] ? ">" : "<"} ${H.fmt(exemples[2])}.`]),
    fig(droite.file, droite.legende, 15),
    retenir("Je lis et j'écris **classe par classe** (3 chiffres chacune). Je compare d'abord le nombre de chiffres, puis les classes de gauche à droite."),
  ];
}
function decomp(n) { const s = String(n); const parts = []; for (let i = 0; i < s.length; i++) { const d = +s[i]; if (d) parts.push(`(${d} × ${H.fmt(Math.pow(10, s.length - 1 - i))})`); } return parts.join(" + "); }

M.num10000000 = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur une droite graduée" },
  lecon: leconGrandsNombres({ classes: "millions, mille, unités", exemples: [3672887, 7033502, 6170759, 10000000], lecture: "3 672 887 → **trois millions** six cent soixante-douze **mille** huit cent quatre-vingt-sept.", nouveauNombre: "Après la classe des mille vient la **classe des millions** : 1 000 000 = mille mille = un million (7 chiffres). 10 000 000 (dix millions) a 8 chiffres.", droite: { file: "droite_1000000", legende: "La droite graduée : de la même façon, entre 3 000 000 et 4 000 000, chaque graduation vaut 100 000." } }),
};
M.num100000000 = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur une droite graduée" },
  lecon: leconGrandsNombres({ classes: "millions (jusqu'aux centaines de millions), mille, unités", exemples: [52054974, 86368056, 92909363, 100000000], lecture: "52 054 974 → **cinquante-deux millions** cinquante-quatre **mille** neuf cent soixante-quatorze.", nouveauNombre: "La classe des millions peut avoir jusqu'à 3 chiffres : 100 000 000 (cent millions) a 9 chiffres.", droite: { file: "droite_1000000", legende: "Sur une droite graduée de 10 000 000 en 10 000 000, 52 054 974 est un peu après 50 000 000." } }),
};
M.num100000000b = {
  exoFigure: { file: "droite_1000000", legende: "Repérer des nombres sur une droite graduée" },
  lecon: [
    ...leconGrandsNombres({ classes: "millions, mille, unités (révision)", exemples: [82935925, 43831666, 39193944, 69224390], lecture: "82 935 925 → **quatre-vingt-deux millions** neuf cent trente-cinq **mille** neuf cent vingt-cinq.", nouveauNombre: "Nous révisons les nombres jusqu'à 100 000 000 en insistant sur le rôle des 0 et sur la valeur de chaque chiffre.", droite: { file: "droite_1000000", legende: "Placer un nombre sur la droite : je repère d'abord les deux graduations qui l'encadrent." } }),
    h("5. Chiffre et nombre de…"),
    table(["Dans 82 935 925", "Chiffre des…", "Nombre de…"], [["dizaines de millions", "8", "8"], ["unités de millions", "2", "82"], ["centaines de mille", "9", "829"], ["dizaines de mille", "3", "8 293"]], [3200, 3000, 3400]),
    "Pour trouver **le nombre de** dizaines de mille, je cache tous les chiffres à droite des dizaines de mille : 8 293|5 925 → 8 293.",
    h("6. Arrondir un grand nombre"),
    methode("Méthode — Arrondir au million le plus proche", ["Je regarde le chiffre des centaines de mille : s'il est **5 ou plus**, j'augmente le chiffre des millions de 1 ; sinon je le garde.", "Je remplace tous les chiffres suivants par des 0 : 82 935 925 ≈ 83 000 000 ; 43 831 666 ≈ 44 000 000 ; 39 193 944 ≈ 39 000 000."]),
  ],
};

// =====================================================================
// S21 — Décimaux : multiplication et division
// =====================================================================
M.decimaux_multdiv = {
  exoFigure: { file: "droite_decimaux", legende: "Vérifier l'ordre de grandeur d'un résultat" },
  lecon: [
    h("1. Multiplier un nombre décimal par un entier"),
    methode("Méthode — Multiplication d'un décimal", [
      "Je pose la multiplication **comme avec des entiers**, sans tenir compte de la virgule (les chiffres alignés à droite).",
      "Je calcule le produit.",
      "Je **compte le nombre de chiffres après la virgule** dans les facteurs (ici 2 dans 141,71) et je place la virgule au produit pour qu'il ait le **même nombre de chiffres après la virgule**.",
    ]),
    mult("141,71", 7),
    "Vérification par l'ordre de grandeur : 141,71 × 7 ≈ 140 × 7 = 980. Le résultat 991,97 est proche ✔",
    preuve9({ op: "×", a: 14171, b: 7, produit: 99197 }),
    "Pour la preuve par 9, on ne tient pas compte de la virgule : on travaille avec 14 171 × 7 = 99 197.",
    h("2. Multiplier deux nombres décimaux"),
    exemple("2,5 × 1,2 : je calcule 25 × 12 = 300 ; il y a 1 + 1 = 2 chiffres après la virgule dans les facteurs → 3,00 = 3."),
    mult("2,5", "1,2"),
    h("3. Multiplier ou diviser par 10, 100, 1 000"),
    table(["Opération", "Je déplace la virgule…", "Exemple"], [["× 10 ; × 100 ; × 1 000", "vers la **droite** de 1, 2, 3 rangs (je complète par des 0)", "4,75 × 100 = 475 ; 3,2 × 1 000 = 3 200"], ["÷ 10 ; ÷ 100 ; ÷ 1 000", "vers la **gauche** de 1, 2, 3 rangs (je complète par des 0)", "47,5 ÷ 10 = 4,75 ; 8 ÷ 1 000 = 0,008"]], [2600, 4000, 3000]),
    h("4. Diviser un nombre décimal par un entier"),
    methode("Méthode — Division d'un décimal par un entier", [
      "Je pose la division à la potence comme avec des entiers.",
      "Je divise la **partie entière** normalement.",
      "Au moment d'**abaisser le premier chiffre après la virgule**, je **place la virgule au quotient**.",
      "Je continue la division jusqu'au dernier chiffre (je peux ajouter des 0 après la virgule au dividende pour continuer).",
    ]),
    div("1202,94", 3, "long"),
    "Vérification : 400,98 × 3 = 1 202,94 ✔",
    hh("Diviser un entier quand la division ne tombe pas juste"),
    exemple("7 ÷ 4 : 7 = 4 × 1 reste 3. J'écris la virgule au quotient et j'ajoute un 0 au reste : 30 ÷ 4 = 7 reste 2 ; 20 ÷ 4 = 5 reste 0. Donc 7 ÷ 4 = 1,75."),
    div(7, 4, "long", 2),
    preuve9({ op: "÷", a: 120294, b: 3, q: 40098, r: 0 }),
    attention("Dans la multiplication, la virgule se place **à la fin** en comptant les décimales. Dans la division, la virgule se place au quotient **au moment où l'on passe la virgule du dividende**."),
    retenir("× : je calcule sans virgule puis je compte les décimales. ÷ : je pose la virgule au quotient en abaissant le premier chiffre décimal."),
  ],
};

// =====================================================================
// S22 (nouvelle) — Problèmes : situations multiplicatives et de partage
// =====================================================================
M.pb_multiplicatifs = {
  meta: { "Sous-discipline": "Problèmes", "Thème": "Situations multiplicatives et de partage", "Objectif spécifique": "Reconnaître dans un énoncé une situation multiplicative (addition répétée, prix de plusieurs objets) ou une situation de partage / groupement ; choisir entre multiplication et division ; résoudre des problèmes à deux étapes (guide pédagogique 8e, p. 30-33 et 66-69).", "Support et matériel": "trois énoncés au tableau ; le tableau « Je cherche… / J'utilise… » complété avec la multiplication et la division", "Durée": "30 min" },
  fiche: newFiche({
    revision: [["Combien font 25 × 4 ?", "100."], ["Combien font 360 ÷ 6 ?", "60."]],
    mise: "Une marchande vend des œufs à 600 Ar pièce. Un client en achète 12. Une autre cliente paie 4 800 Ar : combien d'œufs a-t-elle achetés ? Quelle opération pour chaque question ?",
    titre: "Problèmes : situations multiplicatives et de partage", objectifEleve: "reconnaître si un problème se résout par une multiplication ou par une division, et résoudre des problèmes à deux étapes",
    observation: "les énoncés et le tableau « Je cherche… / J'utilise… » complété", support: "Tableau noir, énoncés, tableau des opérations",
    analyse: [["Pour le premier client, que cherche-t-on ?", "Le prix de 12 œufs : 12 fois 600 Ar, c'est une multiplication : 600 × 12 = 7 200 Ar."], ["Pour la deuxième cliente ?", "Combien de fois 600 dans 4 800 : c'est une division : 4 800 ÷ 600 = 8 œufs."], ["Quels mots indiquent une multiplication ? une division ?", "Multiplication : fois, chacun, le double, le triple, par. Division : partager, répartir, chacun reçoit, combien de fois, la moitié, le tiers."], ["Que faire quand il y a deux questions ?", "Je résous étape par étape : la première réponse sert à la deuxième."]],
    synthese: "Donc, je multiplie quand je répète plusieurs fois la même quantité ; je divise quand je partage en parts égales ou quand je cherche combien de fois une quantité est contenue dans une autre. Dans un problème à deux étapes, je traite les questions l'une après l'autre.",
    appEns: ["Résous les problèmes suivants.", "1. Un cahier coûte 1 250 Ar. Combien coûtent 24 cahiers ?", "2. On partage 3 696 kg de riz entre 8 familles. Combien reçoit chaque famille ?", "3. Un car fait 15 voyages par jour avec 18 passagers. Combien de passagers en une journée ?", "4. Une école reçoit 1 440 livres à répartir également dans 12 classes. Combien de livres par classe ?", "Choisis la bonne réponse.", "1. « Le triple de 45 » se calcule par : a) 45 + 3 b) 45 × 3 c) 45 ÷ 3", "2. « Répartir 600 Ar entre 4 enfants » se calcule par : a) 600 × 4 b) 600 − 4 c) 600 ÷ 4", "3. « Combien de paquets de 6 dans 54 ? » : a) 54 × 6 b) 54 ÷ 6 c) 54 − 6", "4. 8 boîtes de 12 crayons : a) 8 + 12 b) 12 ÷ 8 c) 12 × 8"],
    evalEns: ["Résous les problèmes suivants.", "1. Un ouvrier gagne 8 500 Ar par jour. Combien gagne-t-il en 26 jours ?", "2. Une coopérative met 2 700 kg de café dans des sacs de 60 kg. Combien de sacs ?", "3. Une famille achète 3 kg de viande à 18 000 Ar le kg et 5 kg de riz à 2 400 Ar le kg. Quelle dépense totale ?", "4. Un commerçant achète 25 sacs de charbon à 12 000 Ar. Il paie 20 000 Ar de transport. Quel est le prix de revient d'un sac ?", "Vrai ou faux ?", "1. « Chacun reçoit » indique un partage, donc une division.", "2. Multiplier, c'est additionner plusieurs fois le même nombre.", "3. Pour trouver le prix de 7 objets identiques, on divise le prix d'un objet par 7.", "4. Dans un problème à deux étapes, la première réponse sert souvent à la deuxième."],
  }),
  exercices: {
    application: [
      exc("Résous les problèmes suivants.", ["Un cahier coûte 1 250 Ar. Combien coûtent 24 cahiers ?", "On partage 3 696 kg de riz entre 8 familles. Combien reçoit chaque famille ?", "Un car fait 15 voyages par jour avec 18 passagers à chaque voyage. Combien de passagers transporte-t-il en une journée ?", "Une école reçoit 1 440 livres à répartir également dans 12 classes. Combien de livres par classe ?"],
        [["24 fois le prix d'un cahier : **multiplication**.", mult(1250, 24), preuve9({ op: "×", a: 1250, b: 24, produit: 30000 }), "**24 cahiers coûtent 30 000 Ar.**"],
         ["Partage en 8 parts égales : **division**.", div(3696, 8, "long"), preuve9({ op: "÷", a: 3696, b: 8, q: 462, r: 0 }), "**Chaque famille reçoit 462 kg de riz.**"],
         ["15 voyages de 18 passagers : **multiplication**.", mult(18, 15), preuve9({ op: "×", a: 18, b: 15, produit: 270 }), "**Le car transporte 270 passagers par jour.**"],
         ["Répartir également : **division** (2 chiffres au diviseur : multiples de 12 → 12, 24, 36, 48, 60, 72, 84, 96, 108).", div(1440, 12, "long"), preuve9({ op: "÷", a: 1440, b: 12, q: 120, r: 0 }), "**Chaque classe reçoit 120 livres.**"]],
        ["30 000 Ar", "462 kg", "270 passagers", "120 livres"]),
      qcm(["« Le triple de 45 » se calcule par :   a) 45 + 3   b) 45 × 3   c) 45 ÷ 3", "« Répartir 600 Ar entre 4 enfants » se calcule par :   a) 600 × 4   b) 600 − 4   c) 600 ÷ 4", "« Combien de paquets de 6 dans 54 ? » se calcule par :   a) 54 × 6   b) 54 ÷ 6   c) 54 − 6", "8 boîtes de 12 crayons, c'est :   a) 8 + 12   b) 12 ÷ 8   c) 12 × 8"], ["b) 45 × 3 = 135", "c) 600 ÷ 4 = 150 Ar", "b) 54 ÷ 6 = 9 paquets", "c) 12 × 8 = 96 crayons"]),
    ],
    evaluation: [
      exc("Résous les problèmes suivants.", ["Un ouvrier gagne 8 500 Ar par jour. Combien gagne-t-il en 26 jours ?", "Une coopérative met 2 700 kg de café dans des sacs de 60 kg. Combien de sacs remplit-elle ?", "Une famille achète 3 kg de viande à 18 000 Ar le kg et 5 kg de riz à 2 400 Ar le kg. Quelle est la dépense totale ?", "Un commerçant achète 25 sacs de charbon à 12 000 Ar le sac. Il paie 20 000 Ar de transport. Quel est le prix de revient d'un sac ?"],
        [["26 fois 8 500 Ar : multiplication.", mult(8500, 26), preuve9({ op: "×", a: 8500, b: 26, produit: 221000 }), "**L'ouvrier gagne 221 000 Ar en 26 jours.**"],
         ["Combien de fois 60 kg dans 2 700 kg : division.", div(2700, 60, "long"), preuve9({ op: "÷", a: 2700, b: 60, q: 45, r: 0 }), "**Elle remplit 45 sacs.**"],
         ["**Étape 1** — Prix de la viande : 18 000 × 3 = 54 000 Ar.", mult(18000, 3), "**Étape 2** — Prix du riz : 2 400 × 5 = 12 000 Ar.", mult(2400, 5), "**Étape 3** — Dépense totale : 54 000 + 12 000.", op(54000, "+", 12000, null), "**La dépense totale est de 66 000 Ar.**"],
         ["**Étape 1** — Prix d'achat des 25 sacs : 12 000 × 25 = 300 000 Ar.", mult(12000, 25), "**Étape 2** — Prix de revient total = prix d'achat + frais.", formule({ nom: "Prix de revient", formule: "PR = PA + Frais", application: "PR = 300 000 + 20 000", resultat: "PR = 320 000 Ar" }), "**Étape 3** — Prix de revient d'un sac : 320 000 ÷ 25.", div(320000, 25, "long"), "**Le prix de revient d'un sac est de 12 800 Ar.**"]],
        ["221 000 Ar", "45 sacs", "66 000 Ar", "12 800 Ar"]),
      vf(["« Chacun reçoit » indique un partage, donc une division.", "Multiplier, c'est additionner plusieurs fois le même nombre.", "Pour trouver le prix de 7 objets identiques, on divise le prix d'un objet par 7.", "Dans un problème à deux étapes, la première réponse sert souvent à la deuxième."], ["Vrai", "Vrai", "Faux — On multiplie le prix d'un objet par 7.", "Vrai"]),
    ],
  },
  lecon: [
    h("1. Multiplication ou division ?"),
    table(["Je cherche…", "Mots de l'énoncé", "J'utilise…"], [
      ["le total de plusieurs quantités identiques", "fois, chacun coûte, par jour, le double, le triple, 12 boîtes de 6", "une **multiplication**"],
      ["la valeur d'une part quand on partage", "partager, répartir également, chacun reçoit, la moitié, le tiers", "une **division** (partage)"],
      ["combien de fois une quantité est contenue dans une autre", "combien de paquets, combien de sacs, combien de voyages", "une **division** (groupement)"],
    ], [3200, 3800, 2600], 19),
    h("2. Deux sens de la division"),
    exemple("**Partage** : 3 696 kg de riz pour 8 familles → 3 696 ÷ 8 = 462 kg par famille (je cherche la valeur d'une part). **Groupement** : 2 700 kg de café en sacs de 60 kg → 2 700 ÷ 60 = 45 sacs (je cherche le nombre de parts)."),
    h("3. Les problèmes à deux étapes"),
    methode("Méthode — Résoudre un problème à plusieurs étapes", [
      "Je lis l'énoncé et je repère **toutes** les données et la question finale.",
      "Je me demande : **que dois-je connaître d'abord** pour répondre ? C'est la question intermédiaire (étape 1).",
      "Je calcule l'étape 1, puis j'utilise son résultat pour l'étape 2 (et éventuellement 3).",
      "J'écris une phrase-réponse pour la question finale, avec l'unité.",
    ]),
    exemple("Une marchande achète 12 œufs à 600 Ar pièce et les revend 8 400 Ar en tout. Quel est son bénéfice ? Étape 1 : prix d'achat = 600 × 12 = 7 200 Ar. Étape 2 : bénéfice = 8 400 − 7 200 = 1 200 Ar."),
    mult(600, 12),
    op(8400, "-", 7200),
    attention("Toujours vérifier que le résultat est **raisonnable** : 12 œufs ne peuvent pas coûter 72 Ar ni 720 000 Ar. L'ordre de grandeur (600 × 10 ≈ 6 000) permet de repérer une erreur de zéro."),
    retenir("Multiplication : **répéter** une quantité. Division : **partager** ou **grouper**. Problème à deux étapes : je cherche d'abord ce qui manque."),
  ],
};

// =====================================================================
// S23 — Les fractions
// =====================================================================
M.fractions = {
  image: { file: "v1:image56.jpg", legende: "Une maman partage une galette entre ses enfants : chacun reçoit une fraction de la galette." },
  exoFigure: { file: "fraction_disque", legende: "Quelle fraction du disque est coloriée ?" },
  lecon: [
    h("1. Qu'est-ce qu'une fraction ?"),
    "Quand on partage une unité (une galette, un segment, une surface) en **parts égales** et qu'on en prend quelques-unes, on obtient une **fraction**.",
    fig("fraction_disque", "Le disque est partagé en 4 parts égales ; 3 parts sont coloriées : la fraction coloriée est {3/4} (trois quarts).", 12),
    formule({ nom: "Écriture d'une fraction", formule: "{numérateur/dénominateur} = {nombre de parts prises/nombre de parts égales dans l'unité}", application: ["{3/4} : le dénominateur 4 indique que l'unité est partagée en 4 parts égales ;", "le numérateur 3 indique que l'on prend 3 de ces parts."] }),
    h("2. Lire et écrire une fraction"),
    table(["Fraction", "Se lit", "Fraction", "Se lit"], [["{1/2}", "un demi", "{1/3}", "un tiers"], ["{1/4}", "un quart", "{2/5}", "deux cinquièmes"], ["{3/10}", "trois dixièmes", "{7/100}", "sept centièmes"], ["{5/8}", "cinq huitièmes", "{4/6}", "quatre sixièmes"]], [1600, 3200, 1600, 3200]),
    "À partir de 5, le dénominateur se lit avec la terminaison **-ième** : cinquième, sixième, septième… « 2 sur 3 » s'écrit {2/3} et se lit « deux tiers ».",
    fig("droite_fractions", "Sur la droite graduée, l'unité est partagée en parts égales : {1/4}, {2/4}, {3/4} puis 1 = {4/4}.", 14),
    h("3. Fractions équivalentes"),
    "Deux fractions sont **équivalentes** quand elles représentent la même quantité : {1/2} = {2/4} = {3/6} (la moitié de la galette, qu'elle soit coupée en 2, en 4 ou en 6).",
    methode("Méthode — Trouver une fraction équivalente", ["Je **multiplie** (ou je divise) **le numérateur et le dénominateur par le même nombre** : la fraction ne change pas de valeur.", "{2/6} = {2 × 4/6 × 4} = {8/24}."]),
    h("4. Simplifier une fraction"),
    methode("Méthode — Simplifier", ["Je cherche un nombre qui **divise à la fois** le numérateur et le dénominateur (2, 3, 5, 9…).", "Je divise les deux par ce nombre : {4/12} = {4 ÷ 4/12 ÷ 4} = {1/3}.", "Quand on ne peut plus simplifier, la fraction est **irréductible**."]),
    attention("On ne simplifie **jamais** en divisant seulement le numérateur ou seulement le dénominateur !"),
    h("5. Fraction et nombre décimal"),
    exemple("{3/10} = 0,3 ; {25/100} = 0,25 ; {1/2} = {5/10} = 0,5 ; {3/4} = {75/100} = 0,75."),
    retenir("{numérateur/dénominateur} : parts prises / parts égales. Multiplier ou diviser **les deux termes** par un même nombre donne une fraction **équivalente**."),
  ],
};

// =====================================================================
// S24 — Échanges (1) : prix d'achat, frais, prix de revient
// =====================================================================
M.echanges1 = {
  image: { file: "v1:image61.jpg", legende: "Transport de mangues du village vers la ville : le transport est un frais qui s'ajoute au prix d'achat." },
  exoFigure: null,
  lecon: [
    h("1. Le vocabulaire des échanges"),
    table(["Mot", "Définition", "Exemple"], [["**Prix d'achat (PA)**", "ce que le commerçant paie pour acheter la marchandise", "des mangues achetées 69 000 Ar au village"], ["**Frais (F)**", "les dépenses en plus : transport, emballage, taxes, entreposage", "8 000 Ar de taxi-brousse"], ["**Prix de revient (PR)**", "ce que la marchandise a coûté **en tout** au commerçant", "69 000 + 8 000 = 77 000 Ar"], ["**Prix de vente (PV)**", "ce que le client paie au commerçant", "78 000 Ar en ville"]], [2600, 4200, 2800], 19),
    h("2. Le prix de revient"),
    formule({ nom: "Prix de revient", formule: "Prix de revient = Prix d'achat + Frais", abrege: "PR = PA + F", application: ["PA = 69 000 Ar ; F = 8 000 Ar", "PR = 69 000 + 8 000"], resultat: "PR = 77 000 Ar" }),
    op(69000, "+", 8000),
    hh("Formules dérivées"),
    formule({ nom: "Retrouver le prix d'achat", formule: "PA = PR − F", application: "PR = 77 000 Ar ; F = 8 000 Ar → PA = 77 000 − 8 000", resultat: "PA = 69 000 Ar" }),
    formule({ nom: "Retrouver les frais", formule: "F = PR − PA", application: "PR = 77 000 Ar ; PA = 69 000 Ar → F = 77 000 − 69 000", resultat: "F = 8 000 Ar" }),
    h("3. Bénéfice ou perte ?"),
    "Le commerçant compare le **prix de vente** au **prix de revient** :",
    ul(["Si **PV > PR**, il gagne de l'argent : c'est un **bénéfice**. **Bénéfice = PV − PR**.", "Si **PV < PR**, il perd de l'argent : c'est une **perte**. **Perte = PR − PV**.", "Si PV = PR, il n'y a ni bénéfice ni perte."]),
    formule({ nom: "Bénéfice", formule: "Bénéfice = Prix de vente − Prix de revient", abrege: "B = PV − PR", application: ["PV = 78 000 Ar ; PR = 77 000 Ar", "B = 78 000 − 77 000"], resultat: "B = 1 000 Ar" }),
    methode("Méthode — Résoudre un problème d'échange", ["Je calcule d'abord le **prix de revient** : PR = PA + F.", "Je compare PV et PR : le plus grand des deux dit s'il y a bénéfice ou perte.", "Je calcule la différence et je rédige : « Le commerçant fait un bénéfice de … Ar » ou « … une perte de … Ar »."]),
    attention("Ne pas comparer le prix de vente au **prix d'achat** : il faut d'abord ajouter les frais ! Acheter 69 000 Ar et revendre 75 000 Ar avec 8 000 Ar de frais, ce n'est pas un bénéfice : PR = 77 000 Ar > 75 000 Ar, c'est une **perte** de 2 000 Ar."),
    retenir("**PR = PA + F**. Bénéfice = PV − PR (si PV > PR) ; Perte = PR − PV (si PV < PR)."),
  ],
};

// =====================================================================
// S25 — Parallélogramme et losange
// =====================================================================
M.parallelogramme_losange = {
  exoFigure: null,
  lecon: [
    h("1. Le parallélogramme"),
    fig("parallelogramme", "Le parallélogramme ABCD : base b = 10 cm, hauteur h = 7 cm (perpendiculaire à la base).", 13),
    "Un **parallélogramme** est un quadrilatère dont les **côtés opposés sont parallèles** ; ils sont aussi de **même longueur**. Ses angles opposés sont égaux. Le rectangle est un parallélogramme particulier (avec 4 angles droits).",
    "La **hauteur** est la distance entre deux côtés opposés : on la trace **perpendiculairement** à la base avec l'équerre.",
    formule({ nom: "Périmètre du parallélogramme", formule: "P = (côté 1 + côté 2) × 2", application: "Côtés 10 cm et 8 cm : P = (10 + 8) × 2 = 18 × 2", resultat: "P = 36 cm" }),
    formule({ nom: "Aire du parallélogramme", formule: "Aire = base × hauteur", abrege: "A = b × h", application: "b = 10 cm ; h = 7 cm : A = 10 × 7", resultat: "A = 70 cm²" }),
    "Pourquoi b × h ? En découpant le triangle de gauche et en le recollant à droite, le parallélogramme devient un **rectangle** de même base et de même hauteur.",
    methode("Méthode — Calculer l'aire d'un parallélogramme", ["Je repère la **base** (un côté) et la **hauteur** (perpendiculaire à cette base, en pointillés).", "Je vérifie que les deux sont dans la même unité.", "Je multiplie : A = b × h, en cm² ou m²."]),
    h("2. Le losange"),
    fig("losange", "Le losange : 4 côtés égaux ; ses diagonales D et d sont perpendiculaires et se coupent en leur milieu.", 12),
    "Un **losange** est un parallélogramme dont les **4 côtés ont la même longueur**. Ses **diagonales** (la grande D et la petite d) sont **perpendiculaires** et se coupent en leur milieu. Le carré est un losange particulier.",
    formule({ nom: "Périmètre du losange", formule: "P = côté × 4", abrege: "P = c × 4", application: "c = 6 cm : P = 6 × 4", resultat: "P = 24 cm" }),
    formule({ nom: "Aire du losange", formule: "Aire = {grande diagonale × petite diagonale/2}", abrege: "A = {D × d/2}", application: "D = 8 cm ; d = 6 cm : A = {8 × 6/2} = {48/2}", resultat: "A = 24 cm²" }),
    "Pourquoi ÷ 2 ? Le losange occupe exactement la **moitié** du rectangle de côtés D et d qui l'entoure.",
    h("3. Comparer les quadrilatères"),
    table(["Figure", "Côtés", "Angles", "Aire"], [["Rectangle", "opposés parallèles et égaux", "4 angles droits", "L × l"], ["Carré", "4 côtés égaux", "4 angles droits", "c × c"], ["Parallélogramme", "opposés parallèles et égaux", "opposés égaux", "b × h"], ["Losange", "4 côtés égaux", "opposés égaux", "{D × d/2}"]], [2400, 3200, 2200, 1800]),
    retenir("Parallélogramme : **A = b × h**. Losange : **A = {D × d/2}**, P = c × 4."),
  ],
};

// =====================================================================
// S26 — Angles
// =====================================================================
M.angles = {
  image: { file: "v1:image68.jpg", legende: "Un charpentier vérifie l'angle d'un toit." },
  exoFigure: { file: "rapporteur", legende: "Mesurer un angle avec le rapporteur" },
  lecon: [
    h("1. Rappel : qu'est-ce qu'un angle ?"),
    "Un angle est formé par **deux demi-droites de même origine** : l'origine est le **sommet**, les demi-droites sont les **côtés**. L'unité de mesure des angles est le **degré (°)**. Un tour complet mesure 360°, un demi-tour (angle plat) 180°, un quart de tour (angle droit) 90°.",
    fig("angles", "Angle aigu (< 90°), droit (90°), obtus (entre 90° et 180°), plat (180°).", 15),
    h("2. Mesurer un angle avec le rapporteur"),
    fig("rapporteur", "Le rapporteur : le centre est placé sur le sommet, le 0 sur un côté, on lit la mesure sur l'autre côté (ici 75°).", 12),
    methode("Méthode — Mesurer un angle", [
      "Je place le **centre** du rapporteur exactement sur le **sommet** de l'angle.",
      "Je fais coïncider le **zéro** d'une graduation avec **un côté** de l'angle (je prolonge le côté au crayon s'il est trop court).",
      "Je lis la mesure là où **l'autre côté** coupe la graduation, **sur la même échelle** que celle qui commence à 0.",
      "Je vérifie avec le bon sens : un angle aigu doit mesurer moins de 90°, un angle obtus plus de 90°.",
    ]),
    attention("Le rapporteur porte **deux graduations** (0 → 180 dans les deux sens). Si l'angle est visiblement aigu et que je lis 105°, je me suis trompé d'échelle : la bonne mesure est 75°."),
    h("3. Construire un angle de mesure donnée"),
    methode("Méthode — Construire un angle de 30°", ["Je trace une demi-droite [Ox) : ce sera le premier côté, O le sommet.", "Je place le centre du rapporteur sur O et le zéro sur [Ox).", "Je marque un point A en face de la graduation 30°.", "Je trace la demi-droite [OA) : l'angle xOA mesure 30°."]),
    h("4. Comparer et classer des angles"),
    table(["Angle", "Mesure", "Exemple dans la vie"], [["nul", "0°", "deux aiguilles superposées"], ["aigu", "entre 0° et 90°", "la pointe d'un toit, un coin de triangle équilatéral (60°)"], ["droit", "90°", "le coin d'un cahier, le mur et le sol"], ["obtus", "entre 90° et 180°", "un éventail ouvert, une chaise inclinée"], ["plat", "180°", "une règle posée à plat : les deux côtés sont alignés"]], [1600, 2800, 5200]),
    "Pour **comparer** deux angles, je compare leurs mesures en degrés : 75° < 100°. Attention : la longueur des côtés dessinés ne change **pas** la mesure de l'angle !",
    retenir("Centre sur le sommet, zéro sur un côté, lecture sur l'autre côté. Aigu < 90° = droit < obtus < 180° = plat."),
  ],
};

// =====================================================================
// S27 — Capacité (1) : litre et sous-multiples
// =====================================================================
function fixCapacite(exos) { [...exos.application, ...exos.evaluation].forEach((e) => { e.items = e.items.map((t) => t.replace(/(\d)\s*hl\b/g, "$1 hL").replace(/(\d)\s*dal\b/g, "$1 daL").replace(/(\d)\s*dl\b/g, "$1 dL").replace(/(\d)\s*cl\b/g, "$1 cL").replace(/(\d)\s*ml\b/g, "$1 mL").replace(/(\d)\s*l\b/g, "$1 L").replace(/\? l$/, "? L").replace(/\? (hl|dal|dl|cl|ml)$/, (m, u) => "? " + ({ hl: "hL", dal: "daL", dl: "dL", cl: "cL", ml: "mL" }[u]))); e.v1 = e.v1.map((t) => t.replace(/\bl = /g, "L = ").replace(/(\d) l\b/g, "$1 L")); }); }
M.capacite1 = {
  image: { file: "v1:image71.png", legende: "Un récipient gradué : on lit le niveau du liquide sur la graduation." },
  exoFigure: { file: "recipient", legende: "Quel niveau indique ce récipient ?" },
  fixItems: fixCapacite,
  lecon: [
    h("1. La notion de capacité"),
    "La **capacité** d'un récipient est la **quantité de liquide** (eau, lait, huile, pétrole) qu'il peut contenir. L'unité principale est le **litre (L)**.",
    "Repères : une petite cuillère ≈ 5 mL ; un verre ≈ 20 cL ; une bouteille d'eau = 1,5 L ; un seau ≈ 10 L ; un bidon jaune ≈ 20 L ; un fût ≈ 200 L.",
    fig("recipient", "Le récipient gradué : chaque graduation vaut 10 cL ; le niveau est à 60 cL.", 8),
    h("2. Les sous-multiples du litre"),
    table(["Unité", "Symbole", "Valeur", "On l'utilise pour…"], [["litre", "L", "1 L", "l'eau, le lait, l'essence"], ["décilitre", "dL", "{1/10} de litre : 1 L = 10 dL", "un petit verre"], ["centilitre", "cL", "{1/100} de litre : 1 L = 100 cL", "les boissons en bouteille (33 cL)"], ["millilitre", "mL", "{1/1 000} de litre : 1 L = 1 000 mL", "les médicaments, le parfum"]], [1800, 1400, 3600, 2800]),
    attention("On écrit le litre avec un **L majuscule** pour ne pas le confondre avec le chiffre 1 : 5 L, 25 cL, 250 mL."),
    h("3. Le tableau de conversion des capacités"),
    conversion("capacite", [[1, "L", "mL"], [757, "cL", "L"], [394, "dL", "cL"], [13563, "mL", "L"]], {}),
    methode("Méthode — Convertir une capacité", ["Je place le chiffre des unités dans la colonne de l'unité donnée (un chiffre par colonne).", "Vers la **droite** : j'ajoute des 0 → 394 dL = 3 940 cL.", "Vers la **gauche** : je place la virgule juste après le chiffre de l'unité demandée → 757 cL = 7,57 L ; 13 563 mL = 13,563 L."]),
    h("4. Estimer puis mesurer"),
    "Avant de mesurer, on peut **estimer** une capacité à vue d'œil en la comparant à un récipient connu (un verre, une bouteille), puis vérifier avec un **récipient gradué** (verre doseur, éprouvette).",
    retenir("**1 L = 10 dL = 100 cL = 1 000 mL**. Même tableau que pour les longueurs : 0 vers la droite, virgule vers la gauche."),
  ],
};

// =====================================================================
// S29 — Comparer et ranger des fractions
// =====================================================================
M.fractions_comparer = {
  exoFigure: { file: "fraction_disque", legende: "Quelle fraction représente cette figure ?" },
  lecon: [
    h("1. Comparer des fractions de même dénominateur"),
    methode("Méthode 1 — Même dénominateur", ["Quand deux fractions ont **le même dénominateur**, les parts ont la même taille : la plus grande fraction est celle qui a **le plus grand numérateur**.", "{9/10} > {8/10} car 9 > 8 ; {1/4} < {2/4} car 1 < 2 ; {4/7} = {4/7}."]),
    fig("droite_fractions", "Sur la droite graduée en quarts : {1/4} < {2/4} < {3/4} < 1.", 14),
    h("2. Comparer des fractions de même numérateur"),
    methode("Méthode 2 — Même numérateur", ["Quand deux fractions ont **le même numérateur**, la plus grande est celle qui a **le plus petit dénominateur** : les parts sont plus grandes quand l'unité est coupée en moins de morceaux.", "{1/3} > {1/4} (un tiers de galette est plus gros qu'un quart) ; {5/6} > {5/8}."]),
    h("3. Comparer à l'unité"),
    ul(["Si numérateur < dénominateur, la fraction est **plus petite que 1** : {3/4} < 1.", "Si numérateur = dénominateur, la fraction **vaut 1** : {4/4} = 1.", "Si numérateur > dénominateur, la fraction est **plus grande que 1** : {9/2} > 1 (c'est 4 unités et demie)."]),
    h("4. Dénominateurs différents : mettre au même dénominateur"),
    methode("Méthode 3 — Fractions équivalentes", ["Je cherche un dénominateur commun (souvent le plus grand des deux, s'il est multiple de l'autre).", "Je transforme chaque fraction en fraction équivalente (je multiplie numérateur et dénominateur par le même nombre).", "Je compare les numérateurs. Exemple : {2/3} et {5/6} → {2/3} = {4/6} ; 4 < 5 donc {2/3} < {5/6}."]),
    h("5. Ranger des fractions"),
    exemple("Ranger par ordre croissant {7/10}, {2/10}, {9/10}, {5/10} → {2/10} < {5/10} < {7/10} < {9/10}."),
    h("6. Simplifier pour comparer"),
    exemple("{12/16} = {12 ÷ 4/16 ÷ 4} = {3/4} ; {45/10} = {45 ÷ 5/10 ÷ 5} = {9/2}. Une fraction simplifiée est plus facile à comparer et à placer sur la droite."),
    retenir("Même dénominateur → je compare les numérateurs. Même numérateur → le plus petit dénominateur gagne. Sinon → même dénominateur d'abord."),
  ],
};

// =====================================================================
// S30 — Échanges (2) : prix de vente, bénéfice, perte
// =====================================================================
M.echanges2 = {
  image: { file: "scene:echanges_ville.jpg", legende: "Les mangues arrivées en ville par taxi-brousse sont revendues 500 Ar pièce : le prix de vente doit dépasser le prix de revient pour faire un bénéfice." },
  exoFigure: null,
  lecon: [
    h("1. Rappel : du prix d'achat au prix de vente"),
    table(["Étape", "Formule", "Exemple (mangues)"], [["1. Prix de revient", "**PR = PA + F**", "69 000 + 9 000 = 78 000 Ar"], ["2a. Bénéfice (si PV > PR)", "**B = PV − PR**", "84 000 − 78 000 = 6 000 Ar"], ["2b. Perte (si PV < PR)", "**Perte = PR − PV**", "78 000 − 72 000 = 6 000 Ar"]], [3000, 3000, 3600]),
    h("2. Trouver le prix de vente"),
    "Le commerçant fixe souvent son prix de vente **à partir du bénéfice qu'il veut faire** :",
    formule({ nom: "Prix de vente avec bénéfice", formule: "Prix de vente = Prix de revient + Bénéfice", abrege: "PV = PR + B", application: ["PR = 78 000 Ar ; bénéfice voulu 6 000 Ar", "PV = 78 000 + 6 000"], resultat: "PV = 84 000 Ar" }),
    formule({ nom: "Prix de vente avec perte", formule: "Prix de vente = Prix de revient − Perte", abrege: "PV = PR − Perte", application: ["PR = 78 000 Ar ; perte 6 000 Ar", "PV = 78 000 − 6 000"], resultat: "PV = 72 000 Ar" }),
    h("3. Retrouver le prix de revient ou le prix d'achat"),
    formule({ nom: "Prix de revient à partir du prix de vente", formule: "PR = PV − B   ou   PR = PV + Perte", application: ["Vendu 84 000 Ar avec 6 000 Ar de bénéfice :", "PR = 84 000 − 6 000"], resultat: "PR = 78 000 Ar" }),
    formule({ nom: "Prix d'achat", formule: "PA = PR − F", application: "PR = 78 000 Ar ; F = 9 000 Ar → PA = 78 000 − 9 000", resultat: "PA = 69 000 Ar" }),
    h("4. Le schéma des échanges"),
    table(["", "PA", "+ F", "= PR", "+ B ou − Perte", "= PV"], [["Mangues", "69 000", "9 000", "78 000", "+ 6 000", "84 000"], ["Riz", "120 000", "15 000", "135 000", "− 5 000", "130 000"]], [1500, 1600, 1500, 1700, 2200, 1500]),
    methode("Méthode — Choisir la bonne formule", ["J'écris les données connues sous les lettres PA, F, PR, B (ou Perte), PV.", "Je repère la lettre inconnue et je choisis la formule qui la donne.", "Je remplace les lettres par les nombres, je calcule (opération posée), je rédige la phrase-réponse en Ar."]),
    attention("« De moins que » exprime une comparaison, pas toujours une soustraction : « Fara a 12 ans ; elle a 10 ans **de moins que** Paul » → Paul a 12 **+** 10 = 22 ans. De même « il a vendu avec 5 000 Ar de perte » signifie PV = PR **−** 5 000, mais « il a acheté 5 000 Ar de moins que le prix de vente » signifie PA = PV − 5 000."),
    retenir("**PV = PR + B** ou **PV = PR − Perte** ; **PR = PA + F**. J'identifie l'inconnue avant de choisir la formule."),
  ],
};

// =====================================================================
// S31 — Trapèze
// =====================================================================
M.trapeze = {
  exoFigure: null,
  lecon: [
    h("1. Reconnaître un trapèze"),
    fig("trapeze", "Le trapèze : grande base B = 10 cm, petite base b = 6 cm, hauteur h = 4 cm, côtés obliques 5 cm.", 13),
    "Un **trapèze** est un quadrilatère qui a **deux côtés parallèles**, appelés les **bases** : la **grande base (B)** et la **petite base (b)**. Les deux autres côtés sont les **côtés obliques**. La **hauteur (h)** est la distance entre les deux bases (perpendiculaire).",
    ul(["**Trapèze rectangle** : un côté oblique est perpendiculaire aux bases (deux angles droits).", "**Trapèze isocèle** : les deux côtés obliques ont la même longueur."]),
    h("2. Le périmètre"),
    formule({ nom: "Périmètre du trapèze", formule: "P = grande base + petite base + côté 1 + côté 2", abrege: "P = B + b + c₁ + c₂", application: ["B = 10 cm ; b = 6 cm ; c₁ = c₂ = 5 cm", "P = 10 + 6 + 5 + 5"], resultat: "P = 26 cm" }),
    h("3. L'aire"),
    "Deux trapèzes identiques, dont l'un est retourné, forment un **parallélogramme** de base (B + b) et de hauteur h. L'aire du trapèze est donc la **moitié** de (B + b) × h.",
    formule({ nom: "Aire du trapèze", formule: "Aire = {(grande base + petite base) × hauteur/2}", abrege: "A = {(B + b) × h/2}", application: ["B = 10 cm ; b = 6 cm ; h = 4 cm", "A = {(10 + 6) × 4/2} = {16 × 4/2} = {64/2}"], resultat: "A = 32 cm²" }),
    methode("Méthode — Calculer l'aire d'un trapèze", ["J'**additionne** les deux bases : B + b.", "Je **multiplie** par la hauteur h.", "Je **divise** par 2. Je n'oublie pas l'unité au carré (cm², m²)."]),
    attention("La hauteur n'est **pas** le côté oblique (sauf dans un trapèze rectangle). Dans la formule de l'aire, il faut la hauteur !"),
    retenir("**P = B + b + c₁ + c₂** ; **A = {(B + b) × h/2}**."),
  ],
};

// =====================================================================
// S32 — Capacité (2) : multiples du litre
// =====================================================================
M.capacite2 = {
  image: { file: "v1:image83.png", legende: "Des récipients de capacités différentes : bouteille, seau, bidon, fût." },
  exoFigure: { file: "recipient", legende: "Quel niveau indique ce récipient ?" },
  fixItems: fixCapacite,
  lecon: [
    h("1. Les multiples du litre"),
    "Pour les grandes quantités (citerne, réservoir, bassin), on utilise les **multiples du litre** : le **décalitre (daL)**, l'**hectolitre (hL)** et le **kilolitre (kL)**.",
    table(["Unité", "Symbole", "Valeur", "Exemple"], [["kilolitre", "kL", "1 000 L", "une citerne d'eau de 5 kL = 5 000 L"], ["hectolitre", "hL", "100 L", "un fût de pétrole ≈ 2 hL"], ["décalitre", "daL", "10 L", "un seau de 1 daL"], ["litre", "L", "1 L", "une bouteille"]], [2000, 1400, 2000, 4200]),
    h("2. Le tableau complet des capacités"),
    conversion("capacite", [[834, "hL", "cL"], [886, "daL", "mL"], [20, "hL", "daL"], [284, "dL", "hL"], ["2,5", "kL", "L"]], {}),
    methode("Méthode — Convertir avec de grands écarts", ["Je compte les colonnes entre l'unité donnée et l'unité demandée : de hL à cL il y a 4 colonnes → j'ajoute **4 zéros** : 834 hL = 8 340 000 cL.", "De dL à hL il y a 3 colonnes vers la gauche → je place la virgule 3 rangs plus à gauche : 284 dL = 0,284 hL.", "J'écris le résultat avec un espace entre les classes : 8 340 000 cL."]),
    h("3. Problèmes de capacité"),
    exemple("Une citerne de 2,5 kL alimente une école qui consomme 180 L par jour. Combien de jours dure la réserve ? 2,5 kL = 2 500 L ; 2 500 ÷ 180 = 13 jours (reste 160 L)."),
    div(2500, 180, "long"),
    attention("Quand on convertit vers une unité **plus grande**, le nombre devient **plus petit** : 20 hL = 200 daL mais 20 hL = 2 kL. Vérifie toujours le sens de la flèche !"),
    retenir("1 kL = 10 hL = 100 daL = 1 000 L. Le tableau des capacités va de kL à mL, **un chiffre par colonne**."),
  ],
};

// =====================================================================
// S34 — Comparer et ranger des fractions (2)
// =====================================================================
M.fractions_comparer2 = {
  exoFigure: { file: "fraction_disque", legende: "Quelle fraction représente cette figure ?" },
  lecon: [
    h("1. Rappel des trois règles de comparaison"),
    table(["Situation", "Règle", "Exemple"], [["Même dénominateur", "le plus grand numérateur gagne", "{7/12} > {2/12}"], ["Même numérateur", "le plus petit dénominateur gagne", "{3/5} > {3/8}"], ["Dénominateurs différents", "je mets au même dénominateur puis je compare les numérateurs", "{3/4} et {5/8} → {6/8} > {5/8}"]], [2800, 4200, 2600]),
    h("2. Mettre au même dénominateur"),
    methode("Méthode — Trouver un dénominateur commun", [
      "Je regarde si le plus grand dénominateur est **un multiple** du plus petit : 8 = 4 × 2 → je transforme {3/4} en {6/8}.",
      "Sinon, je **multiplie les deux dénominateurs** entre eux : pour {2/3} et {3/5}, dénominateur commun 15 → {2/3} = {10/15} et {3/5} = {9/15} ; donc {2/3} > {3/5}.",
      "Je compare les numérateurs.",
    ]),
    h("3. Ranger une série de fractions"),
    methode("Méthode — Ranger par ordre croissant", ["Je mets toutes les fractions au même dénominateur.", "Je range les numérateurs du plus petit au plus grand.", "J'écris les fractions **d'origine** dans cet ordre, séparées par le signe <.", "Exemple : {1/2}, {3/8}, {3/4} → {4/8}, {3/8}, {6/8} → {3/8} < {1/2} < {3/4}."]),
    fig("droite_fractions", "Placer {3/8}, {1/2} et {3/4} sur la droite graduée en huitièmes confirme l'ordre.", 14),
    h("4. Simplifier avant de comparer"),
    exemple("{20/8} = {20 ÷ 4/8 ÷ 4} = {5/2} ; {4/8} = {1/2}. Une fraction irréductible est plus simple à comparer."),
    h("5. Fractions plus grandes que 1"),
    "{5/2} = 2 unités et {1/2} : on peut l'écrire 2 + {1/2} = 2,5. Une fraction dont le numérateur est plus grand que le dénominateur est **plus grande que 1**.",
    retenir("Même dénominateur → numérateurs ; même numérateur → petit dénominateur ; sinon → même dénominateur. Simplifier d'abord rend tout plus facile."),
  ],
};

// =====================================================================
// S35 — Cercle et disque
// =====================================================================
M.cercle = {
  image: { file: "v1:image92.jpg", legende: "Une roue de charrette : le cercle est la ligne du bord, le disque est toute la surface." },
  exoFigure: null,
  lecon: [
    h("1. Le cercle et le disque"),
    fig("cercle", "Le cercle de centre O : rayon r = OA = 6 cm ; diamètre D = 12 cm (D = 2 × r).", 11),
    ul(["Le **cercle** est la **ligne** formée par tous les points situés à la même distance du **centre** O. Cette distance est le **rayon (r)**.", "Le **disque** est la **surface** limitée par le cercle (la partie pleine).", "Le **diamètre (D)** est un segment qui passe par le centre et joint deux points du cercle : **D = 2 × r**.", "Une **corde** joint deux points du cercle sans passer par le centre ; un **arc** est une portion du cercle."]),
    methode("Méthode — Tracer un cercle au compas", ["J'écarte le compas de la longueur du rayon (je mesure sur la règle).", "Je pique la pointe sèche sur le centre O.", "Je fais tourner le compas sans changer l'écartement."]),
    h("2. Le périmètre du cercle"),
    "Le périmètre du cercle (sa **circonférence**) mesure environ **3,14 fois** son diamètre. Ce nombre 3,14 s'appelle **π** (pi).",
    formule({ nom: "Périmètre du cercle", formule: "Périmètre = diamètre × 3,14 = 2 × rayon × 3,14", abrege: "P = D × 3,14 = 2 × r × 3,14", application: ["r = 5 cm → D = 10 cm", "P = 10 × 3,14"], resultat: "P = 31,4 cm" }),
    mult("3,14", 10),
    h("3. L'aire du disque"),
    formule({ nom: "Aire du disque", formule: "Aire = rayon × rayon × 3,14", abrege: "A = r × r × 3,14", application: ["r = 5 cm", "A = 5 × 5 × 3,14 = 25 × 3,14"], resultat: "A = 78,5 cm²" }),
    mult("3,14", 25),
    methode("Méthode — Ne pas confondre les deux formules", ["Pour le **périmètre** (une longueur, en cm), j'utilise le **diamètre** une fois : D × 3,14.", "Pour l'**aire** (une surface, en cm²), j'utilise le **rayon deux fois** : r × r × 3,14.", "Si l'énoncé donne le diamètre et demande l'aire, je calcule d'abord r = D ÷ 2."]),
    exemple("Rayon 4 cm : P = 2 × 4 × 3,14 = 8 × 3,14 = 25,12 cm ; A = 4 × 4 × 3,14 = 16 × 3,14 = 50,24 cm²."),
    retenir("D = 2 × r. **P = D × 3,14** ; **A = r × r × 3,14**."),
  ],
};

// =====================================================================
// S36 — Capacité (3) : problèmes
// =====================================================================
M.capacite3 = {
  image: { file: "v1:image96.png", legende: "Vendeur d'huile au marché : les mesures de 1 L, 50 cL et 25 cL." },
  exoFigure: { file: "recipient", legende: "Quel niveau indique ce récipient ?" },
  fixItems: fixCapacite,
  lecon: [
    h("1. Le tableau complet : de kL à mL"),
    conversion("capacite", [[102, "daL", "mL"], [881, "hL", "daL"], [633, "cL", "hL"], ["1,5", "L", "cL"]], {}),
    h("2. Additionner et soustraire des capacités"),
    methode("Méthode — Opérer sur des capacités", ["Je **convertis toutes les capacités dans la même unité** (la plus petite, pour éviter les virgules).", "Je pose l'opération.", "Je reconvertis le résultat dans l'unité demandée."]),
    exemple("Un bidon contient 20 L. On verse 3 bouteilles de 150 cL. Reste-t-il de la place ? 3 × 150 cL = 450 cL = 4,5 L ; 20 − 4,5 = 15,5 L de place."),
    op("20", "-", "4,5"),
    h("3. Multiplier et diviser des capacités"),
    exemple("Un vendeur d'huile remplit des bouteilles de 75 cL à partir d'un fût de 1,5 hL. Combien de bouteilles ? 1,5 hL = 150 L = 15 000 cL ; 15 000 ÷ 75 = 200 bouteilles."),
    div(15000, 75, "long"),
    preuve9({ op: "÷", a: 15000, b: 75, q: 200, r: 0 }),
    h("4. Le prix d'une capacité"),
    exemple("L'huile coûte 8 000 Ar le litre. Combien coûtent 25 cL ? 25 cL = {25/100} L = 0,25 L ; 8 000 × 0,25 = 2 000 Ar. Autre façon : 1 L = 4 fois 25 cL → 8 000 ÷ 4 = 2 000 Ar."),
    attention("Avant toute opération, les capacités doivent être **dans la même unité**. 20 L − 450 cL n'a pas de sens tant qu'on n'a pas converti !"),
    retenir("Même unité d'abord, puis l'opération, puis la conversion finale. 1 hL = 100 L ; 1 L = 100 cL = 1 000 mL."),
  ],
};

module.exports = M;
