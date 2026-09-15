// annexes.js — T9 : les 8 annexes + table des illustrations
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
  out.push(B.p("Les grandeurs du programme de T9", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(tbl(
    ["Grandeur", "Unité légale", "Symbole", "Instrument / méthode"],
    [
      ["Force, poids, poussée", "newton", "N", "Dynamomètre"],
      ["Travail", "joule", "J", "Calcul : W = F × d"],
      ["Puissance mécanique", "watt", "W", "Calcul : P = W ÷ t"],
      ["Tension électrique", "volt", "V", "Voltmètre (en dérivation)"],
      ["Intensité du courant", "ampère", "A", "Ampèremètre (en série)"],
      ["Résistance", "ohm", "Ω", "Ohmmètre, ou R = U ÷ I"],
      ["Puissance électrique", "watt", "W", "Calcul : P = U × I"],
      ["Énergie électrique", "joule / kilowattheure", "J / kWh", "Compteur ; W = P × t"],
      ["Angle d'incidence", "degré", "°", "Rapporteur (depuis la normale)"],
      ["Quantité de matière", "mole", "mol", "Calcul : n = m ÷ M"],
      ["Concentration massique", "gramme par litre", "g/L", "Calcul : Cm = m ÷ V"],
      ["Concentration molaire", "mole par litre", "mol/L", "Calcul : C = n ÷ V"],
    ],
    [27, 21, 12, 40],
  ));
  out.push(B.p("Les formules à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Poids : P = m × g (g ≈ 10 N/kg sur Terre).",
    "Poussée d'Archimède : F = ρ × V × g = poids du liquide déplacé ; F = poids réel − poids apparent.",
    "Densité d'un corps = masse volumique du corps ÷ masse volumique de l'eau (sans unité) ; un solide homogène flotte si d(solide) < d(liquide).",
    "Travail d'une force constante : W = F × d (joules) ; travail du poids : W = P × h (h : dénivellation).",
    "Puissance : P = W ÷ t (watts) ; 1 ch = 736 W.",
    "Loi d'Ohm : U = R × I ; R = U ÷ I ; I = U ÷ R.",
    "Associations : série : Re = R1 + R2 ; dérivation : 1/Re = 1/R1 + 1/R2.",
    "Puissance électrique : P = U × I ; pour un conducteur ohmique : P = R × I².",
    "Énergie : W = P × t ; 1 kWh = 3 600 000 J ; loi de Joule : Q = R × I² × t.",
    "Réflexion : r = i (angles mesurés depuis la normale).",
    "Mole : n = m ÷ M ; gaz aux conditions normales : V = n × 22,4 L.",
    "Concentrations : Cm = m ÷ V (g/L) ; C = n ÷ V (mol/L) ; Cm = C × M.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Valeurs et repères à connaître", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  [
    "Intensité de pesanteur : Terre g ≈ 10 N/kg ; Lune ≈ 1,6 N/kg.",
    "Masse volumique de l'eau : 1 000 kg/m³ (1 kg/L) ; densités : liège 0,2 ; glace 0,92 ; fer 7,8 ; mercure 13,6.",
    "Secteur JIRAMA : 220 V ; 50 Hz.",
    "Nombre d'Avogadro : 6,02 × 10²³ entités par mole ; volume molaire : 22,4 L/mol aux conditions normales.",
    "Masses molaires atomiques : H = 1 ; C = 12 ; N = 14 ; O = 16 ; Na = 23 ; S = 32 ; Cl = 35,5 ; Ca = 40 ; Fe = 56 ; Cu = 63,5 (g/mol).",
    "Échelle de pH : 0 à 14 ; acide < 7 ; neutre = 7 ; basique > 7 ; BBT : jaune / vert / bleu.",
    "Alcanes : CnH2n+2 : CH4, C2H6, C3H8, C4H10.",
    "Spectre de la lumière blanche : violet, indigo, bleu, vert, jaune, orangé, rouge (le violet est le plus dévié).",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 2 : Tableau périodique et échelle de pH ----------------
function annexe2(rootDir) {
  const out = titreAnnexe(2, "Tableau périodique simplifié et échelle de pH", "annexe2");
  out.push(B.p("Le tableau périodique classe les éléments par numéro atomique croissant ; chaque colonne rassemble une famille aux propriétés voisines. En T9, il te sert surtout à lire les masses molaires pour tes calculs de moles.", {
    size: 21, spacingAfter: 120, align: AlignmentType.JUSTIFIED,
  }));
  const imgPath = path.join(rootDir, "images/img_annexe_periodique.png");
  if (fs.existsSync(imgPath)) {
    const buf = fs.readFileSync(imgPath);
    const w = 500, iw = buf.readUInt32BE(16), ih = buf.readUInt32BE(20);
    out.push(B.imagePara(imgPath, w, Math.round(ih * (w / iw))));
    out.push(B.legende("Les 20 premiers éléments du tableau périodique, avec leur symbole"));
  }
  out.push(B.p("Les éléments les plus utiles en T9", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  out.push(tbl(
    ["Élément", "Symbole", "Masse molaire (g/mol)", "Où le rencontre-t-on ?"],
    [
      ["Hydrogène", "H", "1", "Eau H2O, alcanes, ion H+ des acides"],
      ["Carbone", "C", "12", "Alcanes, CO2, suie des combustions"],
      ["Azote", "N", "14", "4/5 de l'air (N2)"],
      ["Oxygène", "O", "16", "1/5 de l'air (O2), eau, oxydes"],
      ["Sodium", "Na", "23", "Sel NaCl ; soude NaOH ; ion Na+"],
      ["Soufre", "S", "32", "Sulfure de fer FeS"],
      ["Chlore", "Cl", "35,5", "Sel (ion Cl−), acide chlorhydrique HCl"],
      ["Fer", "Fe", "56", "Clous, Fe3O4, rouille ; ions Fe2+ / Fe3+"],
      ["Cuivre", "Cu", "63,5", "Fils électriques ; ion Cu2+ (précipité bleu)"],
    ],
    [17, 10, 20, 53],
  ));
  const phPath = path.join(rootDir, "images/img_annexe_ph.png");
  if (fs.existsSync(phPath)) {
    out.push(B.p("L'échelle de pH", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
    const buf = fs.readFileSync(phPath);
    const w = 500, iw = buf.readUInt32BE(16), ih = buf.readUInt32BE(20);
    out.push(B.imagePara(phPath, w, Math.round(ih * (w / iw))));
    out.push(B.legende("L'échelle de pH de 0 à 14, avec les couleurs du BBT et des exemples de la vie courante"));
  }
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

  out.push(B.p("Les unités mécaniques", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 daN = 10 N (le décanewton, souvent gravé sur les dynamomètres) ; poids d'une masse de 100 g ≈ 1 N.",
    "1 kJ = 1 000 J    •    1 ch = 736 W (unité pratique des moteurs).",
    "1 min = 60 s    •    1 h = 60 min = 3 600 s    •    1 h 30 = 1,5 h.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les unités électriques", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "1 V = 1 000 mV    •    1 kV = 1 000 V",
    "1 A = 1 000 mA    •    50 mA suffisent à tuer : prudence !",
    "1 kΩ = 1 000 Ω    •    1 MΩ = 1 000 000 Ω",
    "1 kW = 1 000 W    •    1 kWh = 3 600 000 J (l'unité du compteur JIRAMA).",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Les unités chimiques", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "n (mol) = m (g) ÷ M (g/mol) ; V (gaz, L) = n × 22,4 aux conditions normales.",
    "Cm (g/L) = C (mol/L) × M (g/mol).",
    "Exemple : NaCl à 0,1 mol/L → Cm = 0,1 × 58,5 = 5,85 g/L.",
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
    ["Alcane", "Hydrocarbure de formule CnH2n+2 : méthane CH4, éthane, propane, butane C4H10."],
    ["Archimède (poussée d')", "Force verticale, vers le haut, égale au poids du liquide déplacé, exercée sur tout corps immergé."],
    ["BBT", "Bleu de bromothymol : indicateur coloré : jaune en milieu acide, vert au neutre, bleu en milieu basique."],
    ["Caractéristique", "Courbe U = f(I) d'un dipôle ; pour un résistor : droite passant par l'origine."],
    ["Centre de gravité", "Point d'application du poids d'un corps ; noté G."],
    ["Centre de poussée", "Point d'application de la poussée d'Archimède."],
    ["Combustion complète", "Combustion avec assez de dioxygène : flamme bleue, produits CO2 et H2O."],
    ["Combustion incomplète", "Combustion en manque d'air : flamme jaune, carbone (suie) et monoxyde de carbone CO."],
    ["Concentration massique", "Masse de soluté par litre de solution : Cm = m ÷ V, en g/L."],
    ["Concentration molaire", "Nombre de moles de soluté par litre : C = n ÷ V, en mol/L ; notée [X] pour l'espèce X."],
    ["Conducteur ohmique", "Dipôle (résistor) qui suit la loi d'Ohm U = R × I ; symbole : un rectangle."],
    ["Densité", "Rapport de la masse volumique d'un corps à celle de l'eau ; sans unité."],
    ["Disjoncteur", "Interrupteur automatique qui protège TOUTE l'installation ; il se réarme après incident."],
    ["Dynamomètre", "Instrument à ressort qui mesure l'intensité d'une force, en newtons."],
    ["Effet Joule", "Échauffement de tout conducteur parcouru par un courant électrique."],
    ["Équation-bilan", "Écriture symbolique équilibrée d'une réaction : les atomes se conservent (Fe + S → FeS)."],
    ["Équilibre (2 forces)", "État d'un solide soumis à deux forces directement opposées : même droite, sens contraires, même intensité."],
    ["Filtre coloré", "Écran transparent qui ne laisse passer que la lumière de sa couleur et absorbe les autres."],
    ["Force", "Action capable de déformer un objet ou de modifier son mouvement ; représentée par un vecteur."],
    ["Fusible", "Fil calibré qui fond (effet Joule) en cas de surintensité : il protège UNE ligne de distribution."],
    ["Image virtuelle", "Image que l'on voit mais qu'on ne peut pas recueillir sur un écran (miroir plan)."],
    ["Ion", "Atome ou groupe d'atomes chargé : cation (+) comme Na+, H+ ; anion (−) comme Cl−, OH−."],
    ["Kilowattheure", "Unité pratique d'énergie : 1 kWh = 3 600 000 J : l'unité du compteur électrique."],
    ["Ligne moyenne", "Droite tracée au plus près des points expérimentaux, jamais en ligne brisée."],
    ["Loi de Joule", "L'énergie reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t."],
    ["Loi d'Ohm", "La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité : U = R × I."],
    ["Masse molaire", "Masse d'une mole d'une espèce chimique, en g/mol ; s'additionne pour une molécule."],
    ["Mirage", "Illusion due à la réfraction dans les couches d'air chaud : on croit voir une flaque reflétant le ciel."],
    ["Mole", "Paquet de 6,02 × 10²³ entités (nombre d'Avogadro) : l'unité de quantité de matière."],
    ["Neutralisation", "Réaction entre un acide et une base : H+ + OH− → H2O ; il se forme un sel et de l'eau."],
    ["Normale", "Perpendiculaire au miroir (ou à la surface) au point d'incidence : origine des angles."],
    ["pH", "Nombre de 0 à 14 qui mesure l'acidité : < 7 acide, 7 neutre, > 7 basique."],
    ["Plan d'incidence", "Plan contenant le rayon incident et la normale ; les rayons réfléchi et réfracté y restent."],
    ["Poids", "Force d'attraction de la Terre : verticale, vers le bas, appliquée au centre de gravité ; P = m × g."],
    ["Puissance", "Quotient du travail (ou de l'énergie) par la durée : P = W ÷ t, en watts."],
    ["Réflexion", "Renvoi de la lumière par une surface polie : r = i."],
    ["Réfraction", "Changement de direction de la lumière à la traversée de la surface entre deux milieux transparents."],
    ["Résistance", "Grandeur R (en ohms) qui mesure l'opposition d'un conducteur au passage du courant."],
    ["Saturée (solution)", "Solution qui ne peut plus dissoudre de soluté supplémentaire."],
    ["Solution ionique", "Solution contenant des ions mobiles : elle conduit le courant électrique."],
    ["Spectre", "Bande des sept couleurs obtenue en décomposant la lumière blanche (prisme, gouttes de pluie)."],
    ["Travail", "Effet d'une force dont le point d'application se déplace : W = F × d, en joules."],
    ["Vecteur", "Flèche qui représente une force : origine, direction, sens et longueur proportionnelle à l'intensité."],
    ["Volume molaire", "Volume d'une mole de gaz : 22,4 L aux conditions normales de température et de pression."],
  ];
  defs.forEach(([mot, def]) => out.push(B.pRuns(
    [{ text: mot + " : ", bold: true, color: B.BLUE }, { text: def }],
    { size: 20, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Annexe 5 : Mémo sécurité ----------------
function annexe5() {
  const out = titreAnnexe(5, "Mémo sécurité", "annexe5");
  out.push(B.p("Des règles à respecter TOUJOURS, en classe comme à la maison.", { italics: true, size: 20, spacingAfter: 120 }));
  const blocs = [
    ["Sécurité électrique", [
      "Les expériences du manuel se font UNIQUEMENT avec des piles ; ne JAMAIS les refaire avec le courant du secteur (220 V : mortel).",
      "Ne JAMAIS toucher une prise, un fil dénudé ou un appareil électrique avec les mains mouillées ; jamais d'appareil près de l'eau.",
      "Ne jamais introduire d'objet dans une prise de courant.",
      "Ne jamais toucher un fil tombé à terre : prévenir un adulte et la JIRAMA.",
      "Remplacer un fusible uniquement par un fusible de même calibre : jamais un fil quelconque.",
      "Ne pas surcharger une prise : échauffement des fils (loi de Joule !), risque d'incendie.",
      "Débrancher tout appareil avant de le nettoyer ou de l'ouvrir ; seul un adulte qualifié intervient sur l'installation.",
    ]],
    ["Sécurité en chimie", [
      "Ne jamais goûter ni sentir directement un produit d'expérience ; se laver les mains après chaque manipulation.",
      "L'acide chlorhydrique et la soude brûlent la peau et les yeux : manipulation par l'enseignant, petites quantités, rinçage abondant à l'eau en cas de contact.",
      "Toujours aérer la pièce où brûle un réchaud, une bougie ou un charbon : le monoxyde de carbone est invisible, inodore et mortel.",
      "Jamais de braises ni de réchaud allumé dans une chambre fermée pour la nuit.",
      "Une flamme jaune et une marmite qui noircit signalent une combustion incomplète : faire régler le brûleur.",
      "Étiqueter les flacons ; ne jamais transvaser un produit dans une bouteille de boisson.",
      "Manipuler bougies, allumettes et brûleurs uniquement en présence d'un adulte.",
    ]],
    ["Sécurité en mécanique et en optique", [
      "Attention aux doigts avec les dynamomètres, ressorts et masses suspendues ; ne pas se placer sous une charge.",
      "Les essais de flottaison se font dans une bassine, jamais seul au bord d'une rivière ou d'un canal.",
      "Ne JAMAIS regarder le Soleil directement, ni dans un miroir, ni à travers une lentille : brûlure définitive de la rétine.",
      "Ne pas envoyer le reflet du miroir dans les yeux d'une personne ; ne jamais diriger un laser vers un visage.",
      "Se protéger du soleil aux heures chaudes : les ultraviolets, invisibles, brûlent la peau.",
      "Manier ciseaux et cutter avec prudence ; ranger le poste de travail après chaque expérience.",
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
    ["Unité I — Mécanique", [
      "Je sais définir une force, la mesurer au dynamomètre et donner ses quatre caractéristiques.",
      "Je sais représenter une force par un vecteur à l'échelle.",
      "Je sais énoncer la condition d'équilibre sous deux forces.",
      "Je sais appliquer P = m × g et placer le centre de gravité.",
      "Je sais calculer la poussée d'Archimède (deux pesées, F = ρ × V × g) et prévoir si un corps flotte.",
      "Je sais calculer un travail (W = F × d ; W = P × h) et une puissance (P = W ÷ t).",
    ]],
    ["Unité II — Électricité", [
      "Je sais tracer une caractéristique en ligne moyenne.",
      "Je sais appliquer la loi d'Ohm U = R × I dans les trois sens.",
      "Je sais calculer Re en série et en dérivation.",
      "Je sais lire une plaque signalétique et calculer P = U × I et le courant appelé.",
      "Je sais calculer une énergie (W = P × t, kWh) et énoncer la loi de Joule.",
      "Je sais décrire l'installation domestique et citer les règles de sécurité.",
    ]],
    ["Unité III — Optique", [
      "Je sais énoncer les deux lois de la réflexion et mesurer i et r depuis la normale.",
      "Je sais construire l'image donnée par un miroir plan et citer ses caractéristiques.",
      "Je sais décrire la réfraction et interpréter le mirage.",
      "Je sais décrire la décomposition par le prisme et citer les sept couleurs.",
      "Je sais expliquer la couleur des objets, l'effet d'un filtre et le disque de Newton.",
    ]],
    ["Unité IV — Chimie", [
      "Je sais définir la mole et calculer n = m ÷ M et V = n × 22,4.",
      "Je sais équilibrer une équation-bilan et en tirer les bilans molaire et massique.",
      "Je sais citer les alcanes et distinguer combustion complète et incomplète.",
      "Je sais calculer Cm et C et reconnaître une solution ionique.",
      "Je sais classer une solution avec le pH ou le BBT et interpréter la neutralisation.",
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
  out.push(B.p("Conseil : refais cette auto-évaluation avant chaque examen d'unité, puis avant l'examen blanc. Le BEPC se prépare toute l'année !", {
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
    ["Alcanes (CnH2n+2)", "30"], ["Archimède (poussée d')", "5, 6"], ["Archimède (théorème d')", "6"],
    ["Associations de résistors", "14"], ["Avogadro (nombre d')", "28"],
    ["BBT (bleu de bromothymol)", "32"], ["Butane, méthane", "30"],
    ["Caractéristique U = f(I)", "12"], ["Centre de gravité", "4"], ["Centre de poussée", "6"],
    ["Combustion complète / incomplète", "30"], ["Compteur électrique", "16, 17"],
    ["Concentrations (Cm, C)", "31"], ["Corps flottants", "7"], ["Couleur des objets", "24"],
    ["Décomposition de la lumière", "23"], ["Densité", "6, 7"], ["Dénivellation (travail du poids)", "8"],
    ["Disjoncteur", "17"], ["Disque de Newton", "25"], ["Dynamomètre", "1"],
    ["Effet Joule", "16"], ["Énergie électrique (W = P × t)", "16"], ["Équation-bilan", "29"],
    ["Équilibre sous deux forces", "3"], ["Filtres colorés", "24"],
    ["Force (caractéristiques)", "1, 2"], ["Fusible", "17"],
    ["Image du miroir plan", "21"], ["Infrarouge, ultraviolet", "23"],
    ["Installation domestique", "17"], ["Kilowattheure", "16"],
    ["Ligne moyenne", "12"], ["Loi de Joule", "16"], ["Loi d'Ohm (U = R × I)", "13"],
    ["Masse molaire", "28"], ["Mirage", "22"], ["Miroir plan (lois)", "20"],
    ["Mole", "28"], ["Monoxyde de carbone", "30"], ["Neutralisation (H+ + OH−)", "32"],
    ["Newton (unité)", "1"], ["Normale, plan d'incidence", "20, 22"],
    ["pH (échelle de)", "32"], ["Plaque signalétique", "15"], ["Poids (P = m × g)", "4"],
    ["Puissance électrique (P = U × I)", "15"], ["Puissance mécanique (P = W ÷ t)", "9"],
    ["Réflexion (lois)", "20"], ["Réfraction", "22"], ["Résistance, résistor", "12, 13"],
    ["Sécurité électrique", "17"], ["Solutions aqueuses et ioniques", "31"],
    ["Spectre (sept couleurs)", "23"], ["Sulfure de fer (Fe + S)", "29"],
    ["Travail (W = F × d)", "8"], ["Vecteur force", "2"], ["Volume molaire (22,4 L)", "28"],
    ["Watt, cheval-vapeur", "9"],
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
    "Ministère de l'Éducation Nationale (Madagascar), Programme scolaire de la classe de 3e — Sciences Physiques.",
    "Ministère de l'Éducation Nationale (Madagascar), Guide pédagogique du curriculum de l'enseignement fondamental.",
    "Collection J-Learn, Manuels des classes du fondamental — Sciences et technologie.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));
  out.push(B.p("Webographie", { bold: true, size: 22, color: B.GREEN, spacingBefore: 120, spacingAfter: 80 }));
  [
    "education.gov.mg — site officiel du Ministère de l'Éducation Nationale de Madagascar.",
    "fondation-lamap.org — La main à la pâte : expériences scientifiques simples pour la classe.",
    "phet.colorado.edu — simulations gratuites : loi d'Ohm, circuits, densité, couleurs (en français).",
    "vikidia.org — encyclopédie adaptée aux 8-13 ans, articles de sciences physiques.",
    "ptable.com — tableau périodique interactif en français.",
  ].forEach(t => out.push(B.p("• " + t, { size: 21, spacingAfter: 40 })));

  out.push(B.p("Table des illustrations", { bold: true, size: 22, color: B.GREEN, spacingBefore: 160, spacingAfter: 80 }));
  figures.forEach(f => out.push(B.p(f, { size: 20, spacingAfter: 30 })));
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8 };
