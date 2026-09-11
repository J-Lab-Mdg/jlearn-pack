// annexes.js — T7 : les 8 annexes + table des illustrations
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");

const { cell, p } = B;

function titreAnnexe(no, titre, anchor) {
  return [
    B.heading(`ANNEXE ${no} — ${titre}`, { anchorId: anchor, size: 28, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 160 }),
  ];
}

function tbl(headers, lignes, widths) {
  const head = new TableRow({ children: headers.map((h, i) =>
    cell([p(h, { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: widths[i] })) });
  const rows = [head, ...lignes.map(l => new TableRow({ children: l.map((v, i) =>
    cell([p(v, { size: 19, spacingAfter: 20 })], { width: widths[i] })) }))];
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows });
}

// ---------------- Annexe 1 : Formules et grandeurs ----------------
function annexe1() {
  const out = titreAnnexe(1, "Formules et grandeurs physiques", "annexe1");
  out.push(B.p("Les grandeurs du programme de T7", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["Grandeur", "Unité légale", "Symbole", "Instrument de mesure"],
    [
      ["Masse", "kilogramme", "kg", "Balance"],
      ["Volume", "mètre cube", "m³", "Éprouvette graduée, déplacement d'eau"],
      ["Masse volumique", "g/cm³ ou kg/L", "—", "Balance + éprouvette (calcul)"],
      ["Densité", "sans unité", "d", "Rapport à l'eau (calcul)"],
      ["Tension électrique", "volt", "V", "Voltmètre (branché en dérivation)"],
      ["Intensité du courant", "ampère", "A", "Ampèremètre (branché en série)"],
      ["Durée", "seconde", "s", "Chronomètre, montre"],
      ["Longueur / distance", "mètre", "m", "Règle, mètre ruban"],
    ],
    [27, 21, 12, 40],
  ));
  out.push(B.p("Les formules à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Masse volumique = masse ÷ volume (en g/cm³ si masse en g et volume en cm³).",
    "Densité = masse volumique de la substance ÷ masse volumique de l'eau (nombre sans unité).",
    "En série : U = U1 + U2 (tensions additives) et I identique en tout point.",
    "En dérivation : U identique sur chaque branche et I = I1 + I2 (intensités additives).",
    "Piles en série : les tensions s'ajoutent (3 × 1,5 V = 4,5 V).",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Valeurs et repères à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Masse volumique de l'eau : 1 g/cm³ = 1 kg/L (densité 1).",
    "Huile ≈ 0,9 ; bois sec 0,4 à 0,8 ; aluminium 2,7 ; fer 7,8 ; or 19,3 (densités).",
    "Un corps flotte si sa densité est inférieure à 1 ; il coule si elle est supérieure à 1.",
    "Pile ronde : 1,5 V ; pile plate : 4,5 V ; batterie de voiture : 12 V ; secteur : 220 V (danger !).",
    "Les lignes de champ magnétique sortent du pôle Nord et entrent au pôle Sud.",
    "Mouvement uniforme : distances égales ; accéléré : croissantes ; retardé : décroissantes (à durées égales).",
    "L'énergie ne disparaît jamais : elle se transforme.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 2 : Tableau périodique simplifié ----------------
function annexe2(rootDir) {
  const out = titreAnnexe(2, "Tableau périodique simplifié", "annexe2");
  out.push(B.p("Toute la matière qui nous entoure est faite d'éléments chimiques. Voici les plus courants, présentés simplement pour préparer les classes suivantes.", {
    size: 21, spacingAfter: 120, align: AlignmentType.JUSTIFIED,
  }));
  const imgPath = path.join(rootDir, "images/img_annexe_periodique.png");
  if (fs.existsSync(imgPath)) {
    const buf = fs.readFileSync(imgPath);
    const w = 500, iw = buf.readUInt32BE(16), ih = buf.readUInt32BE(20);
    out.push(B.imagePara(imgPath, w, Math.round(ih * (w / iw))));
    out.push(B.legende("Les 20 premiers éléments du tableau périodique, avec leur symbole"));
  }
  out.push(B.p("Quelques éléments à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  out.push(tbl(
    ["Élément", "Symbole", "Où le rencontre-t-on en T7 ?"],
    [
      ["Hydrogène", "H", "Dans l'eau et dans le Soleil"],
      ["Carbone", "C", "Charbon de bois, tous les êtres vivants, combustions"],
      ["Azote", "N", "Environ les 4/5 de l'air"],
      ["Oxygène", "O", "1/5 de l'air ; indispensable aux combustions (transformations chimiques)"],
      ["Sodium", "Na", "Avec le chlore, il forme le sel de cuisine dissous dans l'eau de mer"],
      ["Chlore", "Cl", "Dans le sel (chlorure de sodium) et le Sûr'Eau"],
      ["Aluminium", "Al", "Marmites légères ; masse volumique 2,7 g/cm³ ; non attiré par l'aimant"],
      ["Fer", "Fe", "Clous, noyau d'électroaimant ; 7,8 g/cm³ ; attiré par l'aimant ; rouille"],
      ["Cuivre", "Cu", "Fils électriques et spires des bobines ; non attiré par l'aimant"],
      ["Or", "Au", "Bijoux ; 19,3 g/cm³ : le champion de la masse volumique"],
      ["Uranium", "U", "Source d'énergie des centrales nucléaires ; non renouvelable"],
    ],
    [20, 13, 67],
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 3 : Conversions d'unités ----------------
function annexe3() {
  const out = titreAnnexe(3, "Tableaux de conversion d'unités", "annexe3");
  out.push(B.p("Les masses", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["t", "q", "—", "kg", "hg", "dag", "g", "dg", "cg", "mg"],
    [["1", "0", "0", "0", "", "", "", "", "", ""], ["", "", "", "1", "0", "0", "0", "", "", ""]],
    [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  ));
  out.push(B.p("1 t = 1 000 kg    •    1 kg = 1 000 g    •    1 g = 1 000 mg", { size: 21, spacingBefore: 60, spacingAfter: 160 }));

  out.push(B.p("Les volumes et les capacités", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["m³", "", "", "dm³ (= L)", "", "", "cm³ (= mL)"],
    [["1", "0", "0", "0", "", "", ""], ["", "", "", "1", "0", "0", "0"]],
    [15, 14, 14, 15, 14, 14, 14],
  ));
  [
    "1 m³ = 1 000 dm³ = 1 000 L",
    "1 dm³ = 1 L    •    1 cm³ = 1 mL",
    "1 L = 100 cL = 1 000 mL",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les unités électriques", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 A = 1 000 mA    •    0,25 A = 250 mA",
    "1 V = 1 000 mV    •    1 kV = 1 000 V",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les durées et longueurs", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 min = 60 s    •    1 h = 60 min = 3 600 s",
    "1 m = 100 cm    •    1 km = 1 000 m",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("La méthode pour convertir", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1. Écris le chiffre des unités dans la colonne de l'unité de départ.",
    "2. Écris un chiffre par colonne, vers la gauche.",
    "3. Complète avec des zéros jusqu'à la colonne de l'unité demandée.",
    "Exemple : 2,5 kg en g → 2 dans la colonne kg, 5 dans la colonne hg, zéros jusqu'à g : 2 500 g.",
  ].forEach(t => out.push(B.p(t, { size: 21, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 4 : Glossaire ----------------
function annexe4() {
  const out = titreAnnexe(4, "Glossaire des mots de la physique-chimie", "annexe4");
  const defs = [
    ["Aimant", "Objet qui attire le fer et l'acier ; possède un pôle Nord et un pôle Sud."],
    ["Ampère (A)", "Unité de mesure de l'intensité du courant électrique."],
    ["Biomasse", "Matière d'origine vivante utilisée comme source d'énergie : bois, charbon de bois, déchets végétaux."],
    ["Bobine", "Enroulement de fil conducteur isolé ; parcourue par un courant, elle se comporte comme un aimant."],
    ["Boussole", "Aiguille aimantée pivotante qui s'aligne sur le champ magnétique et indique le nord."],
    ["Cahier des charges", "Liste des exigences qu'un objet technique doit respecter : fonction, matériaux, sécurité."],
    ["Champ magnétique", "Zone d'influence invisible créée autour d'un aimant ou d'une bobine sous courant."],
    ["Circuit mixte", "Circuit combinant des dipôles en série et d'autres en dérivation."],
    ["Combustion", "Transformation chimique au cours de laquelle une substance brûle avec le dioxygène."],
    ["Décantation", "Séparation d'un mélange hétérogène par repos : le plus dense se dépose."],
    ["Densité", "Rapport entre la masse volumique d'une substance et celle de l'eau ; sans unité."],
    ["Dérivation (montage en)", "Montage à plusieurs branches ; la tension y est unique et les intensités s'ajoutent."],
    ["Dipôle", "Composant électrique à deux bornes : pile, lampe, interrupteur, moteur."],
    ["Dissolution", "Passage d'un soluté dans un solvant pour former une solution homogène."],
    ["Distillation", "Séparation par ébullition puis condensation : on récupère le solvant pur et le soluté."],
    ["Électroaimant", "Bobine enroulée sur un noyau de fer : aimant puissant commandé par le courant."],
    ["Énergie", "Ce qu'il faut fournir pour produire un mouvement, de la chaleur ou de la lumière."],
    ["Éolienne", "Machine qui transforme l'énergie du vent en électricité."],
    ["Évaporation", "Départ du solvant en vapeur ; le soluté dissous reste et cristallise."],
    ["Filtration", "Séparation par un filtre qui retient les particules solides ; le liquide clair est le filtrat."],
    ["Flottabilité", "Capacité d'un corps à flotter : il flotte si sa masse volumique est inférieure à celle de l'eau."],
    ["Formes d'énergie", "Électrique, thermique, chimique, mécanique, rayonnante."],
    ["Fragmentation", "Division d'un corps en morceaux ou en poudre ; transformation physique."],
    ["Intensité", "Grandeur qui mesure le débit du courant ; unité : l'ampère ; se mesure en série."],
    ["Lignes de champ", "Courbes dessinées par la limaille autour d'un aimant ; sortent du pôle Nord."],
    ["Limaille de fer", "Poudre de fer qui rend visible le champ magnétique."],
    ["Masse volumique", "Masse d'une unité de volume d'une matière : masse ÷ volume (g/cm³ ou kg/L)."],
    ["Mélange hétérogène", "Mélange dont on distingue les constituants à l'œil nu."],
    ["Mélange homogène", "Mélange dont on ne distingue pas les constituants à l'œil nu."],
    ["Miscibles (liquides)", "Liquides qui se mélangent complètement, comme l'eau et le sirop."],
    ["Mobile", "Objet dont on étudie le mouvement."],
    ["Mouvement accéléré", "Mouvement dont la vitesse augmente : distances croissantes à durées égales."],
    ["Mouvement rectiligne", "Mouvement dont la trajectoire est une ligne droite."],
    ["Mouvement retardé", "Mouvement dont la vitesse diminue : distances décroissantes à durées égales."],
    ["Mouvement uniforme", "Mouvement à vitesse constante : distances égales à durées égales."],
    ["Multimètre", "Appareil réunissant voltmètre et ampèremètre (et d'autres fonctions)."],
    ["Neutralisation", "Transformation chimique entre un acide et une base (vinaigre et cendre)."],
    ["Oxydation", "Transformation chimique du fer à l'air humide : formation de la rouille."],
    ["Pôles (d'un aimant)", "Extrémités où l'attraction est la plus forte : pôle Nord et pôle Sud."],
    ["Précipitation", "Apparition d'un solide (précipité) lors d'une transformation chimique : eau de chaux troublée."],
    ["Pressage", "Extraction d'un liquide contenu dans un solide par une forte pression."],
    ["Renouvelable (source)", "Source d'énergie qui se reconstitue naturellement : soleil, vent, eau, biomasse gérée."],
    ["Saturée (solution)", "Solution qui ne peut plus dissoudre de soluté supplémentaire."],
    ["Série (montage en)", "Montage en une seule boucle ; l'intensité y est unique et les tensions s'ajoutent."],
    ["Soluté", "Substance dissoute dans le solvant (le sel dans l'eau salée)."],
    ["Solution", "Mélange homogène obtenu par dissolution."],
    ["Solvant", "Liquide qui dissout le soluté (l'eau dans l'eau salée)."],
    ["Stockage de l'énergie", "Mise en réserve de l'énergie : pile, batterie, eau du barrage en hauteur."],
    ["Tamisage", "Séparation de solides selon la taille des grains grâce à un tamis."],
    ["Tension", "Grandeur électrique mesurée entre deux points ; unité : le volt ; se mesure en dérivation."],
    ["Trajectoire", "Ligne formée par les positions successives d'un mobile."],
    ["Transformation chimique", "Transformation où des substances disparaissent et de nouvelles apparaissent."],
    ["Transformation physique", "Transformation où la matière change de forme ou d'état sans changer de nature."],
    ["Volt (V)", "Unité de mesure de la tension électrique."],
  ];
  defs.forEach(([mot, def]) => out.push(B.pRuns(
    [{ text: mot + " : ", bold: true, color: B.BLUE }, { text: def }],
    { size: 21, spacingAfter: 50 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 5 : Mémo sécurité ----------------
function annexe5() {
  const out = titreAnnexe(5, "Mémo sécurité", "annexe5");
  out.push(B.p("À l'école comme à la maison, les sciences s'apprennent en toute sécurité. Ces règles doivent être connues par cœur.", {
    italics: true, size: 21, spacingAfter: 120, align: AlignmentType.JUSTIFIED,
  }));
  const blocs = [
    ["Sécurité électrique", [
      "Ne JAMAIS toucher une prise, un fil dénudé ou un appareil électrique avec les mains mouillées.",
      "Nos expériences se font uniquement avec des piles (1,5 V ou 4,5 V), jamais avec le secteur (220 V : danger de mort).",
      "Ne jamais introduire d'objet dans une prise de courant.",
      "Ne pas laisser une bobine ou un électroaimant branché longtemps : la pile chauffe et s'use.",
      "Ne jamais toucher un fil tombé à terre dans la rue : prévenir un adulte et la JIRAMA.",
      "Ne pas surcharger une prise avec trop d'appareils : risque d'échauffement et d'incendie.",
    ]],
    ["Sécurité avec le feu et les produits", [
      "Manipuler bougies, allumettes et fatapera uniquement en présence d'un adulte.",
      "Les expériences de combustion se font sur une surface dégagée, loin de tout produit inflammable.",
      "Ne jamais goûter un produit d'expérience ; se laver les mains après chaque manipulation.",
      "Attention à l'eau bouillante et à la vapeur lors des expériences d'évaporation et de distillation.",
      "Ne jamais verser d'eau sur de l'huile enflammée : étouffer avec un couvercle.",
      "En cas de brûlure : passer la zone sous l'eau fraîche pendant plusieurs minutes et prévenir un adulte.",
    ]],
    ["Sécurité pendant les projets et les expériences", [
      "Lire toute l'expérience avant de commencer et préparer le matériel.",
      "Manier ciseaux, piques et outils de découpe avec prudence ; se faire aider pour percer.",
      "Ne pas regarder le soleil, ni son reflet dans les réflecteurs du four solaire.",
      "L'eau chauffée au four solaire peut brûler : la manipuler comme une casserole chaude.",
      "Garder les aimants loin des téléphones, cartes et boussoles de navigation.",
      "Ranger et nettoyer le poste de travail à la fin.",
    ]],
  ];
  for (const [titre, regles] of blocs) {
    out.push(B.p(titre, { bold: true, size: 23, color: B.RED, spacingBefore: 120, spacingAfter: 60 }));
    regles.forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 6 : Auto-évaluation ----------------
function annexe6() {
  const out = titreAnnexe(6, "Fiche d'auto-évaluation", "annexe6");
  out.push(B.p("Coche « Oui » si tu sais faire sans aide, « Presque » s'il te faut encore le manuel, « Pas encore » si tu dois retravailler la notion.", {
    italics: true, size: 20, spacingAfter: 120,
  }));
  const items = [
    ["Unité I — Matière", [
      "Je sais calculer une masse volumique et une densité.",
      "Je sais prédire si un corps flotte ou coule.",
      "Je sais distinguer mélange homogène et hétérogène, et employer solvant, soluté, solution.",
      "Je sais choisir la bonne technique de séparation parmi les six.",
      "Je sais distinguer transformation physique et transformation chimique.",
    ]],
    ["Unité II — Électricité et magnétisme", [
      "Je sais reconnaître et schématiser les circuits en série, en dérivation et mixtes.",
      "Je sais appliquer les quatre lois de la tension et de l'intensité.",
      "Je connais les pôles des aimants et la règle attraction/répulsion.",
      "Je sais mettre en évidence un champ magnétique et utiliser une boussole.",
      "Je sais fabriquer et expliquer une bobine et un électroaimant.",
    ]],
    ["Unité III — Mouvement", [
      "Je sais définir un mobile et relever ses positions à intervalles réguliers.",
      "Je sais identifier un mouvement uniforme, accéléré ou retardé sur un relevé.",
    ]],
    ["Unité IV — Énergie", [
      "Je sais reconnaître l'énergie à ses effets et citer les sources d'énergie.",
      "Je sais expliquer le stockage de l'énergie (pile, batterie, barrage).",
      "Je connais les cinq formes d'énergie.",
      "Je sais écrire la chaîne de transformation d'un appareil.",
      "Je sais suivre la démarche technologique (four solaire, moulin à eau).",
    ]],
  ];
  const rows = [new TableRow({ children: [
    cell([p("Je suis capable de…", { bold: true, size: 19, spacingAfter: 20 })], { shading: "DDEEFF", width: 64 }),
    cell([p("Oui", { bold: true, size: 19, spacingAfter: 20, align: AlignmentType.CENTER })], { shading: "DDEEFF", width: 12 }),
    cell([p("Presque", { bold: true, size: 19, spacingAfter: 20, align: AlignmentType.CENTER })], { shading: "DDEEFF", width: 12 }),
    cell([p("Pas encore", { bold: true, size: 19, spacingAfter: 20, align: AlignmentType.CENTER })], { shading: "DDEEFF", width: 12 }),
  ]})];
  for (const [unite, lignes] of items) {
    rows.push(new TableRow({ children: [
      cell([p(unite, { bold: true, size: 19, color: B.GREEN, spacingAfter: 20 })], { shading: "E8F0E4", colSpan: 4 }),
    ]}));
    lignes.forEach(t => rows.push(new TableRow({ children: [
      cell([p(t, { size: 19, spacingAfter: 20 })], { width: 64 }),
      cell([p("☐", { size: 24, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 12 }),
      cell([p("☐", { size: 24, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 12 }),
      cell([p("☐", { size: 24, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 12 }),
    ]})));
  }
  out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.p("Conseil : refais cette auto-évaluation avant chaque examen d'unité, puis avant l'examen blanc.", {
    italics: true, size: 20, spacingBefore: 120,
  }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 7 : Index ----------------
function annexe7() {
  const out = titreAnnexe(7, "Index alphabétique", "annexe7");
  out.push(B.p("Le numéro renvoie à la séance où la notion est étudiée.", { italics: true, size: 20, spacingAfter: 120 }));
  const entries = [
    ["Aimant, pôles", "18"], ["Ampère, intensité", "16, 17"], ["Association de piles", "14"],
    ["Batterie", "28"], ["Barrage hydroélectrique", "27, 28, 30"], ["Biomasse", "27"],
    ["Bobine (faces Nord/Sud)", "20"], ["Boussole", "19"], ["Cahier des charges", "31"],
    ["Champ magnétique", "19"], ["Circuit en dérivation", "13, 15, 16"], ["Circuit en série", "13, 15, 16"],
    ["Circuit mixte", "13, 17"], ["Cocktail à étages", "2"], ["Combustion", "10"],
    ["Décantation", "6"], ["Densité", "2, 3"], ["Dissolution", "5, 9"], ["Distillation", "7"],
    ["Électroaimant", "21"], ["Énergie (concept, sources)", "27"], ["Éolienne", "27"],
    ["Évaporation", "7"], ["Filtration", "6"], ["Flottabilité", "3"], ["Formes d'énergie", "29"],
    ["Four solaire", "31"], ["Lignes de champ", "19"], ["Limaille de fer", "19"],
    ["Lois de la tension", "15, 17"], ["Lois de l'intensité", "16, 17"], ["Masse volumique", "1, 3"],
    ["Mélange hétérogène", "4"], ["Mélange homogène", "4"], ["Miscibilité", "5"],
    ["Mobile", "24"], ["Moteur électrique", "21"], ["Moulin à eau", "30, 31"],
    ["Mouvement accéléré", "25"], ["Mouvement rectiligne", "24, 25"], ["Mouvement retardé", "25"],
    ["Mouvement uniforme", "25"], ["Multimètre", "15, 16, 17"], ["Neutralisation", "10"],
    ["Oxydation (rouille)", "10"], ["Panneau solaire", "30"], ["Pile (stockage)", "28"],
    ["Précipitation", "10"], ["Pressage", "8"], ["Relevé de positions", "24, 25"],
    ["Renouvelable (source)", "27"], ["Saturation (solution)", "5"], ["Schéma normalisé", "14"],
    ["Solvant, soluté, solution", "5"], ["Sonnerie électrique", "21"], ["Stockage de l'énergie", "28"],
    ["Tamisage", "8"], ["Techniques de séparation", "6, 7, 8"], ["Tension, volt", "14, 15, 17"],
    ["Trajectoire", "24"], ["Transformation chimique", "10"], ["Transformation d'énergie", "30"],
    ["Transformation physique", "9"],
  ];
  entries.forEach(([mot, ref]) => out.push(B.pRuns(
    [{ text: mot, bold: true }, { text: "  —  séance(s) " + ref }],
    { size: 20, spacingAfter: 30 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 8 : Bibliographie / Webographie + Table des illustrations ----------------
function annexe8(figures) {
  const out = titreAnnexe(8, "Bibliographie et webographie", "annexe8");
  out.push(B.p("Bibliographie", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  [
    "Ministère de l'Éducation Nationale (Madagascar), Programme d'études de la classe de T7 — Sciences Physiques.",
    "Ministère de l'Éducation Nationale (Madagascar), Guide pédagogique du curriculum de l'enseignement fondamental.",
    "Collection J-Learn, Manuels des classes du fondamental — Sciences et technologie.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Webographie", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "education.gov.mg — site officiel du Ministère de l'Éducation Nationale de Madagascar.",
    "fondation-lamap.org — La main à la pâte : expériences scientifiques simples pour la classe.",
    "phet.colorado.edu — simulations gratuites de circuits électriques, densité et énergie (en français).",
    "vikidia.org — encyclopédie adaptée aux 8-13 ans, articles de sciences physiques.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Table des illustrations", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  figures.forEach(f => out.push(B.p(f, { size: 20, spacingAfter: 30 })));
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8 };
