// annexes.js — les 8 annexes + table des illustrations
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
  out.push(B.p("Les grandeurs du programme de T6", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["Grandeur", "Unité légale", "Symbole", "Instrument de mesure"],
    [
      ["Masse", "kilogramme", "kg", "Balance"],
      ["Volume", "mètre cube", "m³", "Éprouvette graduée, récipient gradué"],
      ["Pression", "pascal", "Pa", "Manomètre"],
      ["Température", "degré Celsius", "°C", "Thermomètre"],
      ["Intensité du courant", "ampère", "A", "Ampèremètre (branché en série)"],
      ["Tension électrique", "volt", "V", "Voltmètre (branché en dérivation)"],
    ],
    [25, 22, 13, 40],
  ));
  out.push(B.p("Valeurs et repères à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "1 litre d'air pèse environ 1,3 g.",
    "La glace fond à 0 °C ; l'eau bout à 100 °C au niveau de la mer (≈ 96 °C à Antananarivo, ≈ 120 °C en cocotte-minute).",
    "Le corps humain est à environ 37 °C.",
    "Pile ronde : 1,5 V ; pile plate : 4,5 V ; batterie de voiture : 12 V ; secteur : 220 V.",
    "Sens conventionnel du courant : de la borne + vers la borne −, à l'extérieur du générateur.",
    "Le gaz se dilate plus que le liquide, qui se dilate plus que le solide.",
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
    ["Élément", "Symbole", "Où le rencontre-t-on ?"],
    [
      ["Hydrogène", "H", "Dans l'eau et dans le Soleil"],
      ["Carbone", "C", "Dans le charbon de bois et tous les êtres vivants"],
      ["Azote", "N", "Environ les 4/5 de l'air"],
      ["Oxygène", "O", "Environ 1/5 de l'air ; indispensable à la respiration et aux combustions"],
      ["Aluminium", "Al", "Marmites et casseroles légères"],
      ["Fer", "Fe", "Clous, tôles, outils ; bon conducteur de chaleur et d'électricité"],
      ["Cuivre", "Cu", "Fils électriques"],
      ["Or", "Au", "Bijoux ; extrait dans plusieurs régions de Madagascar"],
    ],
    [22, 14, 64],
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
    "1 daL = 10 L    •    1 hL = 100 L",
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
    ["Ampère (A)", "Unité de mesure de l'intensité du courant électrique."],
    ["Ampèremètre", "Appareil qui mesure l'intensité ; il se branche en série dans le circuit."],
    ["Chaleur", "Énergie qui passe toujours du corps le plus chaud vers le corps le plus froid."],
    ["Circuit fermé / ouvert", "Circuit dans lequel le courant circule (fermé) ou ne circule plus (ouvert)."],
    ["Compressible", "Dont on peut réduire le volume en le pressant ; propriété des gaz."],
    ["Conducteur (électrique)", "Matériau qui laisse passer le courant, comme les métaux."],
    ["Conducteur (thermique)", "Matériau qui laisse bien passer la chaleur, comme les métaux."],
    ["Conduction", "Transfert de chaleur de proche en proche, sans déplacement de matière."],
    ["Contraction", "Diminution du volume d'un corps qui refroidit."],
    ["Convection", "Transfert de chaleur par le mouvement d'un fluide : le chaud monte, le froid descend."],
    ["Court-circuit", "Contact direct entre les deux bornes du générateur : le courant devient dangereux."],
    ["Dérivation (montage en)", "Montage où chaque récepteur possède sa propre branche ; montage des maisons."],
    ["Dilatation", "Augmentation du volume d'un corps que l'on chauffe."],
    ["Électrocution", "Mort provoquée par le passage du courant électrique dans le corps."],
    ["Expansible", "Qui occupe tout le volume offert ; propriété des gaz."],
    ["Fusible", "Fil fin protecteur qui fond quand le courant est trop fort."],
    ["Générateur", "Appareil qui fournit le courant électrique : pile, batterie, secteur."],
    ["Intensité", "Grandeur qui mesure le débit du courant électrique ; unité : l'ampère."],
    ["Isolant (électrique)", "Matériau qui ne laisse pas passer le courant : plastique, bois sec, verre."],
    ["Isolant (thermique)", "Matériau qui laisse mal passer la chaleur : laine, paille, bois, air immobile."],
    ["Liquéfaction", "Passage de l'état gazeux à l'état liquide, par refroidissement ou compression."],
    ["Manomètre", "Appareil qui mesure la pression."],
    ["Masse", "Quantité de matière d'un corps ; unité : le kilogramme."],
    ["Pascal (Pa)", "Unité de mesure de la pression."],
    ["Pression", "Force exercée sur une surface ; augmente quand la surface diminue."],
    ["Rayonnement", "Transfert de chaleur à distance, sans contact ni matière ; traverse le vide."],
    ["Récepteur", "Appareil qui utilise le courant : lampe, moteur, sonnette."],
    ["Sens conventionnel", "Sens du courant : de la borne + vers la borne −, à l'extérieur du générateur."],
    ["Série (montage en)", "Montage en une seule boucle : le même courant traverse tous les récepteurs."],
    ["Surface libre", "Surface d'un liquide en contact avec l'air ; plane et horizontale au repos."],
    ["Température", "Grandeur qui indique si un corps est chaud ou froid ; unité : le degré Celsius."],
    ["Tension", "Grandeur électrique mesurée entre deux points d'un circuit ; unité : le volt."],
    ["Thermomètre", "Instrument qui mesure la température, grâce à la dilatation d'un liquide."],
    ["Volt (V)", "Unité de mesure de la tension électrique."],
    ["Voltmètre", "Appareil qui mesure la tension ; il se branche en dérivation."],
    ["Volume", "Place occupée par un corps ; unité : le mètre cube ; on utilise aussi le litre."],
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
      "Ne jamais introduire d'objet dans une prise de courant.",
      "Couper le courant au disjoncteur avant de toucher une installation ou de changer une ampoule.",
      "Ne jamais utiliser d'appareil électrique près de l'eau (douche, bassine, pluie).",
      "Ne pas surcharger une prise avec trop d'appareils : risque d'échauffement et d'incendie.",
      "Remplacer un fusible uniquement par un fusible de même calibre, jamais par un fil.",
      "Ne jamais toucher un fil tombé à terre dans la rue : prévenir un adulte et la JIRAMA.",
    ]],
    ["Sécurité avec le feu et la chaleur", [
      "Manipuler bougies, allumettes et fatapera uniquement en présence d'un adulte.",
      "Utiliser une pince ou un chiffon sec et épais pour saisir un objet chaud.",
      "Orienter les manches des marmites vers l'intérieur du foyer : un manche qui dépasse peut être accroché.",
      "Ne jamais verser d'eau sur de l'huile enflammée : étouffer avec un couvercle.",
      "En cas de brûlure : passer la zone sous l'eau fraîche pendant plusieurs minutes et prévenir un adulte.",
    ]],
    ["Sécurité pendant les expériences", [
      "Lire toute l'expérience avant de commencer et préparer le matériel.",
      "Réaliser les expériences du manuel avec un adulte quand cela est indiqué.",
      "Ne jamais goûter un produit ; se laver les mains après chaque manipulation.",
      "Travailler sur une surface stable, loin du bord de la table.",
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
      "Je sais citer les propriétés des solides, des liquides et des gaz.",
      "Je sais montrer que l'air existe et qu'il a une masse.",
      "Je connais les unités de la masse et du volume, et je sais convertir.",
      "Je sais expliquer ce qu'est la pression et donner des exemples.",
    ]],
    ["Unité II — Électricité", [
      "Je sais monter un circuit simple et le schématiser avec les symboles.",
      "Je connais le sens conventionnel du courant.",
      "Je sais comparer les montages en série et en dérivation.",
      "Je connais les dangers du courant du secteur et les règles de sécurité.",
      "Je sais chercher une panne simple et mesurer intensité et tension.",
    ]],
    ["Unité III — Chaleur", [
      "Je sais distinguer chaleur et température.",
      "Je sais classer les matériaux en conducteurs et isolants thermiques.",
      "Je sais reconnaître conduction, convection et rayonnement.",
      "Je sais expliquer comment conserver la chaleur (thermos, boîte isotherme).",
      "Je sais décrire la dilatation des solides, des liquides et des gaz.",
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
    ["Air (existence, masse)", "3, 4"], ["Ampère, ampèremètre", "20"], ["Balance", "5"],
    ["Bilame", "30"], ["Chaleur (définition, effets)", "23"], ["Changement d'état", "8, 23"],
    ["Circuit électrique simple", "11"], ["Circuit fermé, circuit ouvert", "11"],
    ["Compressibilité des gaz", "3"], ["Conducteurs électriques", "12, 24"],
    ["Conducteurs thermiques", "24"], ["Conduction", "25"], ["Contraction", "30, 31"],
    ["Convection", "26"], ["Courant de convection", "26"], ["Court-circuit", "17"],
    ["Cuiseur solaire", "27"], ["Dangers du courant", "18"], ["Dérivation (montage en)", "15, 16"],
    ["Dilatation des gaz", "31"], ["Dilatation des liquides", "31"], ["Dilatation des solides", "30"],
    ["Ébullition (température d')", "8, 23"], ["Électrisation, électrocution", "18"],
    ["Expansibilité des gaz", "3"], ["Fusible", "17"], ["Gaz (propriétés)", "3, 4"],
    ["Générateur", "11"], ["Intensité du courant", "20"], ["Interrupteur", "11, 12"],
    ["Isolant thermique", "24, 28, 29"], ["Kilogramme", "5"], ["Liquéfaction", "8"],
    ["Liquides (propriétés)", "2"], ["Litre", "6"], ["Manomètre", "7"], ["Masse", "5"],
    ["Mètre cube", "6"], ["Pannes électriques", "19"], ["Pascal", "7"], ["Pile", "11, 12, 20"],
    ["Pression", "7, 8"], ["Rayonnement", "27"], ["Récepteur", "11"], ["Schéma électrique", "12"],
    ["Sens conventionnel du courant", "13"], ["Série (montage en)", "14, 16"],
    ["Solides (propriétés)", "1"], ["Surface libre", "2"], ["Symboles normalisés", "12"],
    ["Température", "23"], ["Tension électrique", "20"], ["Thermomètre", "23, 31"],
    ["Thermos (bouteille)", "28, 29"], ["Vase d'expansion", "31"], ["Volt, voltmètre", "20"],
    ["Volume", "6"],
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
    "Ministère de l'Éducation Nationale (Madagascar), Programme d'études de la classe de T6 — Sciences Physiques.",
    "Ministère de l'Éducation Nationale (Madagascar), Guide pédagogique du curriculum de l'enseignement fondamental.",
    "Collection J-Learn, Manuels des classes du fondamental — Sciences et technologie.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Webographie", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "education.gov.mg — site officiel du Ministère de l'Éducation Nationale de Madagascar.",
    "fondation-lamap.org — La main à la pâte : expériences scientifiques simples pour la classe.",
    "phet.colorado.edu — simulations gratuites de circuits électriques et d'états de la matière (en français).",
    "vikidia.org — encyclopédie adaptée aux 8-13 ans, articles de sciences physiques.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Table des illustrations", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  figures.forEach(f => out.push(B.p(f, { size: 20, spacingAfter: 30 })));
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8 };
