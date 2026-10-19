// annexes.js — Annexes du Manuel de Géographie T4
// 1. Glossaire — 2. Cartes muettes — 3. Auto-évaluation — 4. Table des illustrations — 5. Sources
const path = require("path");
const fs = require("fs");
const { AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");
const B = require("./builders");

const REPO = path.resolve(__dirname, "..", "..");
const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

// ── 1. GLOSSAIRE ────────────────────────────────────────────────────────
// Les termes marqués ★ viennent du glossaire officiel du programme d'études T4.
const GLOSSAIRE = [
  ["Amont / aval ★", "L'amont est le côté d'un cours d'eau vers la source ; l'aval est le côté vers la mer."],
  ["Artificiel (élément)", "Élément fabriqué par l'homme : maison, école, route, pirogue, poubelle…"],
  ["Carte", "Dessin réduit et exact d'un territoire, muni d'une légende et d'une échelle."],
  ["Climat", "Le temps habituel d'une région, observé sur toute l'année."],
  ["Colline", "Relief moins haut que la montagne, au sommet arrondi."],
  ["Cours d'eau", "Eau qui coule sur la terre : le ruisseau, la rivière, le fleuve."],
  ["Crue ★", "Grossissement d'un cours d'eau, qui peut sortir de son lit."],
  ["Déforestation", "La disparition de la forêt, coupée ou brûlée par l'homme."],
  ["Dégradation de l'Environnement", "L'Environnement abîmé, sali ou détruit."],
  ["Déchet", "Reste de nos activités : sacs plastiques, bouteilles, boîtes, restes de nourriture."],
  ["Échelle ★", "Le rapport entre une longueur sur la carte et la longueur réelle sur le terrain."],
  ["Embouchure", "L'endroit où le fleuve se jette dans la mer."],
  ["Environnement", "Tout ce qui nous entoure : la nature et les constructions de l'homme."],
  ["Équateur ★", "Ligne imaginaire autour de la Terre, située à égale distance des deux pôles."],
  ["Érosion", "L'usure du sol : la pluie emporte la terre des sols nus."],
  ["Estuaire", "La bouche d'un fleuve, là où la mer remonte dans le cours d'eau."],
  ["Étang", "Petite étendue d'eau peu profonde, entourée de terres."],
  ["Fady", "Interdiction traditionnelle : certains jours, lieux ou actes sont défendus par la coutume."],
  ["Forêt", "Végétation d'arbres serrés ; la forêt dense pousse dans les régions bien arrosées."],
  ["Groupe ethnique ★", "Population humaine ayant en commun une ascendance, une histoire, une culture, une langue ou un dialecte, un mode de vie."],
  ["Haie vive", "Rangée d'arbustes plantée autour d'un champ pour le protéger du vent et de l'érosion."],
  ["Inondation ★", "L'eau qui sort de son lit et recouvre les champs et les maisons."],
  ["Interrelation", "Lien entre les éléments de l'Environnement : chacun a besoin des autres."],
  ["Lac", "Grande étendue d'eau entourée de terres. Le plus grand lac de Madagascar : le lac Alaotra."],
  ["Latitude ★", "Distance, mesurée en degrés, du lieu par rapport à l'équateur."],
  ["Légende ★", "Encart expliquant la signification des lettres, signes et couleurs employés sur la carte."],
  ["Longitude ★", "Distance, mesurée en degrés, du lieu par rapport au méridien d'origine."],
  ["Mangrove", "Forêt de palétuviers qui pousse sur les côtes boueuses, entre la terre et la mer."],
  ["Marais", "Terrain mouillé, couvert d'eau et de plantes comme le roseau."],
  ["Météo", "Le temps qu'il fait aujourd'hui ou demain : soleil, pluie, vent."],
  ["Migration", "Déplacement d'habitants qui changent de lieu de vie : le départ ou l'arrivée."],
  ["Montagne", "Relief très haut, aux flancs raides et au sommet pointu."],
  ["Orientation géographique ★", "La direction de l'orient (lever du soleil) et des points cardinaux ; elle est représentée par la rose des vents ou une flèche analogue à celle d'une boussole."],
  ["Paysage", "Tout ce que nous voyons autour de nous : paysage naturel, paysage aménagé (urbain ou rural), paysage littoral, paysage marin."],
  ["Plan", "Dessin vu d'en haut d'un lieu petit (salle de classe, école, quartier, village), avec sa légende et son orientation."],
  ["Points cardinaux", "Les quatre directions principales : le Nord, le Sud, l'Est, l'Ouest."],
  ["Pollution", "Le fait de salir l'air, l'eau ou le sol de l'Environnement."],
  ["Population", "L'ensemble des habitants d'un lieu : village, ville ou pays. Madagascar compte environ 27 millions d'habitants."],
  ["Produit local", "La spécialité d'une région : la vanille d'Antalaha, le girofle de Fénérive-Est, le riz de l'Alaotra…"],
  ["Reboisement", "Le fait de replanter des arbres là où la forêt a disparu."],
  ["Réchauffement climatique", "L’augmentation lente de la température de la Terre, qui dérègle la pluie et les saisons."],
  ["Réserve naturelle", "Espace protégé où la forêt et les animaux sont en sécurité."],
  ["Relief", "L'ensemble des formes du terrain : montagnes, collines, vallées, plaines."],
  ["Rose des vents", "Figure qui montre les huit directions : les points cardinaux et les directions intermédiaires."],
  ["Savane", "Végétation d'herbes hautes avec quelques arbres."],
  ["Savoka", "Jeune végétation broussailleuse qui repousse après la coupe d'une forêt."],
  ["Source", "L'endroit où l'eau sort de terre ; c'est le début d'un cours d'eau."],
  ["Steppe", "Étendue d'herbes sèches et rares des régions peu arrosées."],
  ["Tavy", "La culture sur brûlis : on brûle la forêt pour semer."],
  ["Us et coutumes ★", "Les habitudes, les usages, les traditions d'un pays, d'un peuple, d'un milieu."],
  ["Vallée", "Le creux entre les reliefs, traversé par un cours d'eau."],
  ["Zébu", "Le bovidé à bosse de Madagascar : il laboure, porte, donne du lait et de la viande."],
];

// ── 3. AUTO-ÉVALUATION ──────────────────────────────────────────────────
const AUTO_EVAL = [
  ["Unité 1 — L'orientation géographique", [
    "Je connais les quatre points cardinaux et je sais les montrer.",
    "Je connais les quatre directions intermédiaires.",
    "Je sais dessiner une rose des vents.",
  ]],
  ["Unité 2 — Le plan", [
    "Je sais lire un plan avec sa légende.",
    "Je sais utiliser l'échelle d'un plan.",
    "Je sais tracer un itinéraire simple sur un plan.",
  ]],
  ["Unité 3 — Les éléments du paysage naturel", [
    "Je distingue les paysages terrestre, littoral et marin, urbain et rural.",
    "Je connais les climats de Madagascar.",
    "Je connais l'utilité du relief, des cours d'eau et de la végétation.",
  ]],
  ["Unité 4 — L'Environnement", [
    "Je classe les éléments de l'Environnement : vivants, non-vivants, artificiels.",
    "J'explique les causes et les conséquences de la dégradation de l'Environnement.",
    "Je connais les gestes qui protègent l'Environnement.",
  ]],
  ["Unité 5 — L'Homme et les activités quotidiennes", [
    "Je sais répartir une population par sexe et par âge.",
    "J'explique les trois variables de la croissance : naissances, décès, migrations.",
    "Je respecte les us, les coutumes et les fady.",
    "Je cite les six activités de la population.",
  ]],
];

// ── 5. SOURCES ──────────────────────────────────────────────────────────
const SOURCES = [
  ["Programme d'études officiel T4 (nouveau curriculum de Madagascar) — section GÉOGRAPHIE, pages 115 à 123.", "Le document cadre : thématiques, contenus, volumes horaires, glossaire officiel."],
  ["FRP T4 — Fascicule 2 : ressources pédagogiques officielles T4 (Mathématiques, Sciences et Technologie, Géographie) — section GÉOGRAPHIE, pages 99 à 127.", "Les supports et précis de cours officiels pour l'enseignant ; le manuel en suit la terminologie et les contenus."],
  ["Collection J-Learn — manuels scolaires pour Madagascar.", "La collection du présent ouvrage."],
];

// ── constructeurs ───────────────────────────────────────────────────────
function tRow(cells, widths, opts = {}) {
  return new TableRow({
    ...(opts.header ? { tableHeader: true } : {}),
    children: cells.map((c, i) =>
      B.cell([B.p(c, {
        bold: opts.header || opts.bold || false,
        size: opts.size || 19,
        align: opts.header ? AlignmentType.CENTER : undefined,
        color: opts.color,
      })], { shading: opts.header ? B.HEADER_BG : opts.bg, width: widths[i] })),
  });
}

function imgBlock(id, legende) {
  const imgPath = path.join(REPO, `${id}.png`);
  if (fs.existsSync(imgPath)) {
    return B.imageBlock(imgPath, 440, legende);
  }
  return [];
}

function annexesContent(topics) {
  const out = [];

  // Page d'ouverture des annexes
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("ANNEXES", "annexes", { size: 34, after: 80, align: AlignmentType.CENTER }));
  out.push(B.p("Le glossaire, les cartes muettes, l'auto-évaluation, la table des illustrations et les sources complètent le manuel.", { size: 25, italics: true, align: AlignmentType.CENTER, after: 200 }));

  // ── 1. GLOSSAIRE ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Glossaire", "glossaire", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Les termes signalés par ★ sont repris du glossaire officiel du programme d'études T4.", { size: 23, italics: true, after: 120 }));
  out.push(new Table({
    borders, width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      tRow(["Terme", "Définition"], [26, 74], { header: true }),
      ...GLOSSAIRE.map(([t, d]) => new TableRow({
        children: [
          B.cell([B.p(t, { size: 23, bold: true, color: B.BLUE })], { width: 26 }),
          B.cell([B.p(d, { size: 23 })], { width: 74 }),
        ],
      })),
    ],
  }));
  out.push(B.pEmpty());

  // ── 2. CARTES MUETTES ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Cartes muettes", "cartesmuettes", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Recopie ou complète ces dessins dans ton cahier, puis remplis les pointillés.", { size: 25, italics: true, after: 160 }));

  out.push(B.p("1. La rose des vents à compléter", { size: 26, bold: true, before: 100, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris les sept directions qui manquent — les trois autres points cardinaux et les quatre directions intermédiaires.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_rose_vents_vide", "La rose des vents à compléter."));

  out.push(B.p("2. S'orienter à Madagascar", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris les quatre points cardinaux autour de la carte, le nom de la capitale à côté de l'étoile, puis repère Nosy Be et Sainte-Marie.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_mada", "La carte muette de Madagascar : les points cardinaux, la capitale et les îles voisines à placer."));

  out.push(B.p("3. Les grands reliefs à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom des quatre grands reliefs de Madagascar dans la légende.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_reliefs", "La carte muette des grands reliefs : Hautes Terres, plaines de l'Est et de l'Ouest, Sud."));

  out.push(B.p("4. Les cours d'eau et les lacs à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : pour chaque numéro, écris s'il s'agit d'un fleuve ou d'un lac, puis donne son nom.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_hydrographie", "La carte muette des principaux cours d'eau et lacs de Madagascar."));

  out.push(B.p("5. Les climats à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom des quatre régions climatiques de Madagascar dans la légende.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_climats", "La carte muette des climats de Madagascar, avec quatre régions à nommer."));

  out.push(B.p("6. Les formations végétales à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : nomme la végétation de chaque zone, puis relie-la au climat correspondant.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_vegetation", "La carte muette des formations végétales : forêt humide, forêt littorale, savane et steppe épineuse."));

  out.push(B.p("7. La répartition de la population à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : décris les quatre zones numérotées en observant les points rouges et verts, puis complète la phrase de synthèse.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_population", "La carte muette de la répartition de la population : zones plus peuplées et moins peuplées."));

  out.push(B.p("8. Les activités de la population à compléter", { size: 26, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : nomme chaque activité représentée, puis classe-la parmi les activités de la terre, de transformation ou d'échange.", { size: 24, italics: true, after: 60 }));
  out.push(...imgBlock("geot4_carte_muette_activites", "La carte muette des activités de la population : agriculture, élevage, pêche, artisanat, industrie et échanges."));

  // ── 3. AUTO-ÉVALUATION ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Auto-évaluation", "autoevaluation", { size: 30, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Après chaque unité, coche la colonne qui correspond à ce que tu sais faire. Demande conseil à ton maître ou à ta maîtresse pour progresser.", { size: 25, italics: true, after: 160 }));
  const evalRows = [tRow(["Compétence — Je suis capable de…", "Acquis", "En cours", "À revoir"], [52, 16, 16, 16], { header: true })];
  AUTO_EVAL.forEach(([unit, comps]) => {
    evalRows.push(tRow([unit, "", "", ""], [52, 16, 16, 16], { bold: true, bg: "F5F5F5", color: B.BLUE }));
    comps.forEach((c) => evalRows.push(tRow([c, "", "", ""], [52, 16, 16, 16])));
  });
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: evalRows }));
  out.push(B.pEmpty());

  // ── 4. TABLE DES ILLUSTRATIONS ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Table des illustrations", "illustrations", { size: 30, after: 120, align: AlignmentType.CENTER }));
  const illRows = [tRow(["Séance", "Titre de la séance", "Illustration"], [10, 45, 45], { header: true })];
  topics.forEach((t) => {
    illRows.push(new TableRow({
      children: [
        B.cell([B.p(String(t.numero), { size: 22 })], { width: 10 }),
        B.cell([B.p(t.titre, { size: 22 })], { width: 45 }),
        B.cell(
          [
            B.p(t.image && t.image.legende ? t.image.legende : "—", { size: 22 }),
            ...(t.scene && t.scene.legende ? [B.p(t.scene.legende, { size: 22, color: "555555" })] : []),
          ],
          { width: 45 }
        ),
      ],
    }));
  });
  illRows.push(new TableRow({
    children: [
      B.cell([B.p("Annexe", { size: 22 })], { width: 10 }),
      B.cell([B.p("Cartes muettes", { size: 22 })], { width: 45 }),
      B.cell([B.p("La rose des vents ; l'orientation ; les reliefs ; les cours d'eau et les lacs ; les climats ; la végétation ; la population ; les activités.", { size: 22 })], { width: 45 }),
    ],
  }));
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: illRows }));
  out.push(B.pEmpty());

  // ── 5. LOHARANOM-BAOVAO (SOURCES) ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Sources", "sources", { size: 30, after: 120, align: AlignmentType.CENTER }));
  SOURCES.forEach(([s, d]) => {
    out.push(B.p(`• ${s}`, { size: 25, after: 40 }));
    out.push(B.p(d, { size: 23, italics: true, indent: 360, after: 120, color: "555555" }));
  });
  out.push(B.p("Aucune source internet n'a été utilisée pour l'élaboration de ce manuel : tous les contenus, le vocabulaire et les volumes horaires suivent fidèlement le programme d'études officiel T4 en vigueur à Madagascar.", { size: 24, italics: true, before: 80, after: 200 }));

  return out;
}

module.exports = { annexesContent };
