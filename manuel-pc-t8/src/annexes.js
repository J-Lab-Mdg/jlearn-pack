// annexes.js — T8 : les 8 annexes + table des illustrations
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
  out.push(B.p("Les grandeurs du programme de T8", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["Grandeur", "Unité légale", "Symbole", "Instrument / méthode"],
    [
      ["Masse", "kilogramme", "kg", "Balance"],
      ["Masse molaire", "gramme par mole", "g/mol", "Somme des masses molaires atomiques"],
      ["Quantité de matière", "mole", "mol", "Calcul : n = m ÷ M"],
      ["Tension efficace", "volt", "V", "Voltmètre (position alternatif)"],
      ["Période", "seconde", "s", "Oscillogramme (durée d'un motif)"],
      ["Fréquence", "hertz", "Hz", "Calcul : f = 1 ÷ T"],
      ["Vitesse", "mètre par seconde", "m/s", "Calcul : v = d ÷ t"],
      ["Poids (force)", "newton", "N", "Dynamomètre"],
      ["Intensité de pesanteur", "newton par kilogramme", "N/kg", "g ≈ 10 N/kg sur Terre"],
      ["Poussée d'Archimède", "newton", "N", "Différence des poids (air − eau)"],
    ],
    [27, 21, 12, 40],
  ));
  out.push(B.p("Les formules à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Nombre de moles : n = m ÷ M (masse en g, masse molaire en g/mol).",
    "Volume d'un gaz aux CNTP : V = n × 22,4 L.",
    "Fréquence : f = 1 ÷ T ; tension efficace : Ueff ≈ Umax ÷ 1,41.",
    "Transformateur : U2 ÷ U1 = N2 ÷ N1 (nombres de spires).",
    "Vitesse : v = d ÷ t ; d = v × t ; t = d ÷ v.",
    "Conversions de vitesse : km/h → m/s : diviser par 3,6 ; m/s → km/h : multiplier par 3,6.",
    "Poids : P = m × g (masse en kg, g en N/kg, poids en N).",
    "Poussée d'Archimède : PA = ρliquide × Vimmergé × g = poids du liquide déplacé.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Valeurs et repères à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Nombre d'Avogadro : 6,02 × 10²³ entités par mole.",
    "Masses molaires atomiques : H = 1 ; C = 12 ; N = 14 ; O = 16 ; S = 32 ; Cl = 35,5 ; Ca = 40 ; Fe = 56 ; Cu = 63,5 (g/mol).",
    "Volume molaire des gaz : 22,4 L/mol aux conditions normales (CNTP).",
    "Secteur à Madagascar : 220 V efficaces ; 50 Hz ; T = 0,02 s ; Umax ≈ 310 V.",
    "Intensité de pesanteur : Terre g ≈ 10 N/kg ; Lune ≈ 1,6 N/kg ; Mars ≈ 3,7 N/kg.",
    "Masse volumique de l'eau : 1 000 kg/m³ (1 g/cm³ ; 1 kg/L).",
    "Vitesse du son dans l'air : environ 340 m/s ; vitesse de la lumière : 300 000 km/s.",
    "Un corps flotte si sa masse volumique moyenne est inférieure à celle du liquide.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 2 : Tableau périodique simplifié ----------------
function annexe2(rootDir) {
  const out = titreAnnexe(2, "Tableau périodique simplifié", "annexe2");
  out.push(B.p("Le tableau périodique classe les éléments par numéro atomique croissant ; chaque colonne rassemble une famille aux propriétés voisines. En T8, tu travailles surtout avec les 20 premiers éléments.", {
    size: 21, spacingAfter: 120, align: AlignmentType.JUSTIFIED,
  }));
  const imgPath = path.join(rootDir, "images/img_annexe_periodique.png");
  if (fs.existsSync(imgPath)) {
    const buf = fs.readFileSync(imgPath);
    const w = 500, iw = buf.readUInt32BE(16), ih = buf.readUInt32BE(20);
    out.push(B.imagePara(imgPath, w, Math.round(ih * (w / iw))));
    out.push(B.legende("Les 20 premiers éléments du tableau périodique, avec leur symbole"));
  }
  out.push(B.p("Les éléments du programme de T8", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  out.push(tbl(
    ["Élément", "Symbole", "Formule électronique", "Valence", "Où le rencontre-t-on ?"],
    [
      ["Hydrogène", "H", "(K)1", "1", "Eau H2O, dihydrogène H2, acides"],
      ["Carbone", "C", "(K)2 (L)4", "4", "Charbon, CO2, êtres vivants"],
      ["Azote", "N", "(K)2 (L)5", "3", "4/5 de l'air (N2), ammoniac NH3"],
      ["Oxygène", "O", "(K)2 (L)6", "2", "1/5 de l'air (O2), eau, oxydes"],
      ["Sodium", "Na", "(K)2 (L)8 (M)1", "1", "Sel de cuisine ; ion Na+"],
      ["Soufre", "S", "(K)2 (L)8 (M)6", "2", "Sulfure de fer, SO2, allumettes"],
      ["Chlore", "Cl", "(K)2 (L)8 (M)7", "1", "Sel (ion Cl−), Sûr'Eau"],
      ["Calcium", "Ca", "(K)2 (L)8 (M)8 (N)2", "2", "Calcaire, os ; ion Ca2+"],
      ["Fer", "Fe", "—", "2 ou 3", "Clous, tôle ; ions Fe2+ et Fe3+"],
      ["Cuivre", "Cu", "—", "2", "Fils électriques ; ion Cu2+ (bleu)"],
    ],
    [17, 10, 25, 10, 38],
  ));
  out.push(B.p("Les grandes familles à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "Colonne 1 — les alcalins (Li, Na, K) : métaux mous, très réactifs, 1 électron externe.",
    "Avant-dernière colonne — les halogènes (F, Cl, Br, I) : très réactifs, 7 électrons externes, forment les sels.",
    "Dernière colonne — les gaz nobles (He, Ne, Ar) : stables et inertes, couche externe pleine.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
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

  out.push(B.p("Les vitesses", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "km/h → m/s : diviser par 3,6.    Exemple : 72 km/h = 20 m/s.",
    "m/s → km/h : multiplier par 3,6.    Exemple : 15 m/s = 54 km/h.",
    "Repères : marche ≈ 5 km/h ; vélo ≈ 15 km/h ; taxi-brousse ≈ 60 km/h ; son ≈ 1 224 km/h.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les unités électriques et de fréquence", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 V = 1 000 mV    •    1 kV = 1 000 V    •    20 kV = 20 000 V",
    "1 A = 1 000 mA",
    "1 kHz = 1 000 Hz    •    f = 1 ÷ T (T en secondes, f en hertz)",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les forces et les durées", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 daN = 10 N (le décanewton, souvent gravé sur les dynamomètres).",
    "Poids d'une masse de 100 g sur Terre ≈ 1 N.",
    "1 min = 60 s    •    1 h = 60 min = 3 600 s    •    1 h 30 = 1,5 h",
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
    ["Alternateur", "Machine qui produit un courant alternatif grâce à un aimant tournant près d'une bobine."],
    ["Amplitude", "« Hauteur » des oscillations d'une onde ; elle traduit le volume du son ou la luminosité."],
    ["Anion", "Ion négatif : atome ou groupe d'atomes qui a gagné des électrons (Cl−, OH−, SO4²−)."],
    ["Atome", "Grain de matière élémentaire ; chaque élément chimique a son type d'atome et son symbole."],
    ["Cation", "Ion positif : atome ou groupe d'atomes qui a perdu des électrons (Na+, Cu2+, Fe3+)."],
    ["Chambre noire", "Boîte percée d'un petit trou qui forme une image renversée : ancêtre de l'appareil photo."],
    ["CNTP", "Conditions normales de température et de pression, où une mole de gaz occupe 22,4 L."],
    ["Couche électronique", "Niveau où se répartissent les électrons : K (2 max), L (8 max), M (8 max en T8)."],
    ["Courant alternatif", "Courant qui change périodiquement de sens et de valeur (secteur, alternateur)."],
    ["Courant continu", "Courant de sens et de valeur constants (pile, batterie, panneau solaire)."],
    ["Diode", "Composant qui ne laisse passer le courant que dans un sens (le sens passant)."],
    ["Dynamomètre", "Instrument à ressort qui mesure les forces, donc les poids, en newtons."],
    ["Éclipse", "Disparition passagère d'un astre : de Soleil (la Lune s'interpose), de Lune (la Terre s'interpose)."],
    ["Effet Joule", "Échauffement de tout conducteur parcouru par un courant ; perte d'énergie fréquente."],
    ["Élément chimique", "Espèce d'atomes désignée par un symbole : H, O, C, N, S, Cl, Fe, Ca, Cu…"],
    ["Famille chimique", "Colonne du tableau périodique : éléments aux propriétés voisines (alcalins, halogènes, gaz nobles)."],
    ["Flottabilité", "Capacité d'un corps à flotter : masse volumique moyenne inférieure à celle du liquide."],
    ["Formule brute", "Écriture d'une molécule avec les symboles et le nombre d'atomes : H2O, CO2, NH3."],
    ["Formule électronique", "Répartition des électrons d'un atome sur ses couches : Cl : (K)2 (L)8 (M)7."],
    ["Fréquence", "Nombre de vibrations ou de motifs par seconde ; unité : le hertz (Hz)."],
    ["Fusible / disjoncteur", "Dispositifs de sécurité qui coupent le courant en cas de surintensité."],
    ["Haute tension", "Tension très élevée (des milliers de volts) utilisée pour transporter l'électricité en limitant les pertes."],
    ["Induction électromagnétique", "Production d'un courant par le mouvement d'un aimant près d'une bobine."],
    ["Ion", "Atome ou groupe d'atomes chargé électriquement, par perte ou gain d'électrons."],
    ["Liaison covalente", "Mise en commun d'une paire d'électrons entre deux atomes dans une molécule."],
    ["Longueur d'onde", "Distance entre deux crêtes successives d'une onde (deux rides sur l'eau)."],
    ["Masse molaire", "Masse d'une mole d'une substance, en g/mol : M(H2O) = 18 g/mol."],
    ["Mole", "Paquet de 6,02 × 10²³ entités (nombre d'Avogadro) : l'unité de comptage du chimiste."],
    ["Molécule", "Assemblage d'atomes liés par des liaisons covalentes : H2O, CO2, O2…"],
    ["MRU", "Mouvement rectiligne uniforme : trajectoire droite et vitesse constante."],
    ["Newton (N)", "Unité de mesure des forces, donc du poids."],
    ["Nombre d'Avogadro", "6,02 × 10²³ : le nombre d'entités contenues dans une mole."],
    ["Ombre portée", "Tache sombre projetée par un objet opaque sur un écran ou le sol."],
    ["Ombre propre", "Partie non éclairée de l'objet lui-même."],
    ["Onde", "Vibration qui se propage : son, lumière, rides à la surface de l'eau."],
    ["Opaque", "Qui ne laisse pas passer la lumière (bois, métal, carton)."],
    ["Période (T)", "Durée d'un motif complet d'une tension alternative, en secondes ; f = 1 ÷ T."],
    ["Pénombre", "Zone partiellement éclairée entre l'ombre et la lumière, avec une source étendue."],
    ["Phases de la Lune", "Formes apparentes de la Lune selon la portion visible de sa moitié éclairée (cycle ≈ 29,5 jours)."],
    ["Poids", "Force d'attraction de la Terre sur un objet : verticale, vers le bas ; P = m × g."],
    ["Poids apparent", "Poids mesuré dans un liquide : poids réel diminué de la poussée d'Archimède."],
    ["Pont de diodes", "Montage de quatre diodes qui redresse les deux alternances d'un courant alternatif."],
    ["Poussée d'Archimède", "Force verticale vers le haut exercée par un liquide, égale au poids du liquide déplacé."],
    ["Précipité", "Solide qui apparaît lors d'un test d'identification d'ion (bleu : Cu2+ ; vert : Fe2+ ; rouille : Fe3+)."],
    ["Produit (d'une réaction)", "Substance nouvelle qui apparaît pendant une réaction chimique."],
    ["Propagation rectiligne", "La lumière se propage en ligne droite dans un milieu transparent et homogène."],
    ["Rayon lumineux", "Droite fléchée modélisant le trajet de la lumière, tracée à la règle."],
    ["Réactif", "Substance qui disparaît (est consommée) pendant une réaction chimique."],
    ["Redressement", "Transformation d'un courant alternatif en courant de sens unique grâce à des diodes."],
    ["Sens passant", "Sens dans lequel une diode laisse passer le courant."],
    ["Source primaire", "Objet qui produit sa propre lumière : Soleil, flamme, lampe, luciole."],
    ["Source secondaire", "Objet qui renvoie la lumière reçue : Lune, miroir, objets éclairés."],
    ["Symbole chimique", "Une ou deux lettres représentant un élément : Fe pour le fer, Ca pour le calcium."],
    ["Tension efficace (Ueff)", "Valeur d'une tension alternative indiquée par le voltmètre ; Ueff ≈ Umax ÷ 1,41."],
    ["Tension maximale (Umax)", "Valeur crête atteinte par une tension alternative."],
    ["Transformateur", "Appareil à deux bobines qui élève ou abaisse une tension alternative."],
    ["Translucide", "Qui laisse passer la lumière sans laisser voir les formes (calque, verre dépoli)."],
    ["Transparent", "Qui laisse passer la lumière et laisse voir les formes (vitre, eau claire)."],
    ["Valence", "Nombre de liaisons qu'un atome peut former : H : 1 ; O : 2 ; N : 3 ; C : 4."],
    ["Vitesse", "Distance parcourue par unité de temps : v = d ÷ t, en m/s ou km/h."],
    ["Volume molaire", "Volume d'une mole de gaz : 22,4 L aux CNTP, identique pour tous les gaz."],
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
      "Le secteur 220 V est mortel : nos expériences se font uniquement avec des piles ou les très basses tensions des maquettes.",
      "Ne JAMAIS toucher une prise, un fil dénudé ou un appareil électrique avec les mains mouillées ; jamais d'appareil près de l'eau.",
      "Ne jamais introduire d'objet dans une prise de courant.",
      "Ne jamais toucher un fil tombé à terre : prévenir un adulte et la JIRAMA.",
      "Ne jamais ouvrir un chargeur ou une alimentation, même débranchés.",
      "Ne pas surcharger une prise avec trop d'appareils : échauffement, risque d'incendie ; respecter fusibles et disjoncteurs.",
    ]],
    ["Sécurité en chimie", [
      "Ne jamais goûter ni sentir directement un produit d'expérience ; se laver les mains après chaque manipulation.",
      "L'acide chlorhydrique brûle la peau et les yeux : manipulation par l'enseignant, en petite quantité, rinçage abondant en cas de contact.",
      "Les combustions (carbone, soufre) se font dehors ou sous aération : le dioxyde de soufre est irritant.",
      "Manipuler bougies, allumettes et fatapera uniquement en présence d'un adulte.",
      "Le test du dihydrogène (aboiement) se fait sur de très petites quantités, tube ouvert loin du visage.",
      "Étiqueter les flacons, ne jamais transvaser un produit dans une bouteille de boisson.",
    ]],
    ["Sécurité en optique et pendant les projets", [
      "Ne JAMAIS regarder le Soleil directement, ni à travers la chambre noire, ni pendant une éclipse (lunettes spéciales obligatoires).",
      "Ne pas diriger une lampe ou un laser vers les yeux de quelqu'un.",
      "Manier ciseaux, cutter et piques avec prudence ; se faire aider pour percer.",
      "Les essais de flottaison se font dans une bassine, jamais seul au bord d'une rivière ou d'un canal.",
      "Attention aux doigts avec les dynamomètres et les masses suspendues.",
      "Ranger et nettoyer le poste de travail à la fin de chaque expérience.",
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
      "Je connais les symboles H, O, C, N, S, Cl, Fe, Ca, Cu et je sais écrire une formule électronique.",
      "Je sais représenter un atome selon Lewis et donner sa valence.",
      "Je sais lire le tableau périodique et reconnaître les grandes familles.",
      "Je sais écrire une formule brute et expliquer la liaison covalente.",
      "Je sais calculer une masse molaire, un nombre de moles (n = m ÷ M) et utiliser 22,4 L.",
      "Je connais les ions du programme et leurs tests d'identification.",
      "Je sais écrire une réaction en toutes lettres et nommer réactifs et produits.",
    ]],
    ["Unité II — Électricité", [
      "Je sais expliquer l'alternateur et l'induction électromagnétique.",
      "Je sais lire Umax, T sur un oscillogramme et calculer f et Ueff.",
      "Je sais utiliser la relation du transformateur U2 ÷ U1 = N2 ÷ N1.",
      "Je sais expliquer le transport en haute tension et citer les règles de sécurité.",
      "Je sais expliquer la diode, le redressement et comparer continu et alternatif.",
    ]],
    ["Unité III — Mouvement et force", [
      "Je sais calculer v, d ou t et convertir km/h ↔ m/s.",
      "Je sais lire et tracer un graphique distance-temps.",
      "Je sais mesurer un poids au dynamomètre et appliquer P = m × g.",
      "Je sais calculer une poussée d'Archimède et expliquer la flottabilité.",
    ]],
    ["Unité IV — Énergie, lumière et son", [
      "Je sais expliquer les pertes énergétiques et citer les techniques de conservation.",
      "Je sais classer sources primaires/secondaires et objets opaques/translucides/transparents.",
      "Je sais énoncer la propagation rectiligne et tracer un rayon lumineux.",
      "Je sais interpréter ombres, chambre noire, phases de la Lune et éclipses.",
      "Je sais distinguer amplitude, fréquence et longueur d'onde pour le son et la lumière.",
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
    ["Alternateur, dynamo", "12"], ["Amplitude (onde)", "32"], ["Anion, cation", "8"],
    ["Archimède (poussée d')", "24, 25"], ["Atome, élément, symbole", "1"],
    ["Avogadro (nombre d')", "6"], ["Chambre noire", "31"], ["CNTP, volume molaire", "7"],
    ["Combustions (C, S)", "9"], ["Couches K, L, M", "2"], ["Courant alternatif", "12, 13, 17"],
    ["Courant continu", "17"], ["Diode, sens passant", "16"], ["Dynamomètre", "22, 23"],
    ["Éclipses", "31"], ["Effet Joule", "15, 28"], ["Familles chimiques", "4"],
    ["Flottabilité, pirogue", "25"], ["Formule brute", "5"], ["Formule électronique", "2"],
    ["Fréquence (électricité)", "13"], ["Fréquence (son, lumière)", "32"],
    ["Frottements (pertes)", "28"], ["Graphique distance-temps", "21"],
    ["Haute tension, transport", "15"], ["Induction électromagnétique", "12"],
    ["Ions et tests", "8"], ["Isolation thermique", "28"], ["Lewis (représentation de)", "3"],
    ["Liaison covalente", "5"], ["Longueur d'onde", "32"], ["Lumière (sources)", "29"],
    ["Masse molaire", "7"], ["Masse et poids", "22, 23"], ["Mole", "6"],
    ["Molécules (H2O, CO2, NH3…)", "5"], ["MRU (mouvement rectiligne uniforme)", "20"],
    ["Newton (unité)", "22"], ["Ombre propre, ombre portée", "31"],
    ["Ondes sonores et lumineuses", "32"], ["Opaque, translucide, transparent", "29"],
    ["P = m × g", "23"], ["Période, Umax, Ueff", "13"], ["Pertes énergétiques", "15, 28"],
    ["Phases de la Lune", "31"], ["Poids apparent", "24"], ["Pont de diodes", "16"],
    ["Propagation rectiligne", "30"], ["Rayon lumineux", "30"],
    ["Réaction chimique (réactifs, produits)", "9"], ["Redressement", "16"],
    ["Sécurité électrique", "15"], ["Tableau périodique", "2, 4"],
    ["Tension alternative", "13"], ["Tests d'identification des ions", "8"],
    ["Transformateur", "14"], ["Valence", "3"], ["Vitesse (v = d ÷ t)", "20, 21"],
    ["Conversions km/h ↔ m/s", "20"],
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
    "Ministère de l'Éducation Nationale (Madagascar), Programme d'études de la classe de T8 — Sciences Physiques.",
    "Ministère de l'Éducation Nationale (Madagascar), Guide pédagogique du curriculum de l'enseignement fondamental.",
    "Collection J-Learn, Manuels des classes du fondamental — Sciences et technologie.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Webographie", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "education.gov.mg — site officiel du Ministère de l'Éducation Nationale de Madagascar.",
    "fondation-lamap.org — La main à la pâte : expériences scientifiques simples pour la classe.",
    "phet.colorado.edu — simulations gratuites : circuits alternatifs, densité, ondes (en français).",
    "vikidia.org — encyclopédie adaptée aux 8-13 ans, articles de sciences physiques.",
    "ptable.com — tableau périodique interactif en français.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Table des illustrations", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  figures.forEach(f => out.push(B.p(f, { size: 20, spacingAfter: 30 })));
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8 };
