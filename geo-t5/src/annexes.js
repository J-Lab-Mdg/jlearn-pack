// annexes.js — Annexes du Manuel de Géographie T5
// 1. Glossaire — 2. Cartes muettes — 3. Auto-évaluation — 4. Table des illustrations — 5. Loharanom-Baovao (sources)
const path = require("path");
const fs = require("fs");
const { AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");
const B = require("./builders");

const REPO = path.resolve(__dirname, "..", "..");
const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

// ── 1. GLOSSAIRE ────────────────────────────────────────────────────────
// Le programme d'études officiel T5 ne comporte pas de glossaire distinct : les
// définitions suivent le vocabulaire des cinq thématiques et les leçons du manuel.
const GLOSSAIRE = [
  ["Antarctique", "Le continent glacé qui entoure le pôle Sud ; l'océan Antarctique baigne ses côtes."],
  ["Aplati aux pôles", "La Terre n'est pas une sphère parfaite : elle est légèrement aplatie aux deux pôles, comme une orange."],
  ["Barrage", "Ouvrage qui retient l'eau d'un cours d'eau pour former un lac artificiel."],
  ["Cardinal (point)", "Une des quatre directions principales : le Nord, le Sud, l'Est et l'Ouest."],
  ["Carte", "Dessin réduit et exact d'un territoire, muni d'un titre, d'une légende, d'une échelle et d'une orientation."],
  ["Cercle polaire", "Ligne imaginaire proche de chaque pôle : le cercle polaire arctique au nord, le cercle polaire antarctique au sud."],
  ["Circonférence", "La longueur du tour complet d'une sphère. Celle de la Terre mesure environ 40 000 kilomètres."],
  ["Climat", "Le temps habituel d'une région, observé sur de longues années."],
  ["Colline", "Relief moins haut que la montagne, au sommet arrondi ; très fréquente sur les Hautes Terres."],
  ["Continent", "Très grande étendue de terre entourée d'océans. La Terre en compte sept : l'Afrique, l'Amérique du Nord, l'Amérique du Sud, l'Antarctique, l'Asie, l'Europe et l'Océanie."],
  ["Cours d'eau", "Eau qui coule sur la terre : le ruisseau, la rivière, le fleuve."],
  ["Diamètre", "La longueur d'un trait qui traverse une sphère de part en part en passant par le centre. Celui de la Terre mesure environ 12 742 kilomètres."],
  ["Échanges", "Les produits et les services qui circulent entre la ville et la campagne : le riz et la viande vers la ville, les outils et les services vers la campagne."],
  ["Échelle", "Le rapport entre une longueur sur la carte et la longueur réelle sur le terrain."],
  ["Équateur", "Ligne imaginaire autour de la Terre, à égale distance des deux pôles ; elle partage le globe en deux hémisphères."],
  ["Estuaire", "L'endroit où la mer remonte dans la bouche d'un fleuve, comme celle de la Betsiboka à Mahajanga."],
  ["Fleuve", "Grand cours d'eau qui se jette dans la mer. Le plus long de Madagascar est le Mangoky, avec 821 kilomètres."],
  ["Forêt sèche", "La forêt de l'Ouest et du Sud de Madagascar, avec ses baobabs et ses plantes épineuses qui économisent l'eau."],
  ["Forêt tropicale humide", "La forêt dense et verte toute l'année de la Côte Est, où il pleut beaucoup."],
  ["Globe terrestre", "La maquette sphérique de la Terre, sur laquelle on lit les continents, les océans et les lignes imaginaires."],
  ["Hémisphère", "Chacune des deux moitiés de la Terre séparées par l'équateur : l'hémisphère Nord et l'hémisphère Sud."],
  ["Interdépendance", "Le fait que la ville et la campagne ont besoin l'une de l'autre pour vivre."],
  ["Île", "Une terre entourée d'eau de tous les côtés. Madagascar est la quatrième plus grande île du monde."],
  ["Îles éparses", "Les petites îles dispersées dans l'océan Indien qui appartiennent à Madagascar."],
  ["Lac artificiel", "Étendue d'eau créée par l'homme derrière un barrage, pour l'élevage des poissons, l'irrigation ou l'électricité."],
  ["Lac naturel", "Étendue d'eau entourée de terres, comme le lac Alaotra, le plus grand de Madagascar."],
  ["Légende", "Encart qui explique la signification des signes et des couleurs employés sur une carte."],
  ["Littoral", "La bordure d'une terre au contact de la mer."],
  ["Massif", "Un groupe de montagnes réunies. Les trois grands massifs de Madagascar : le Tsaratanana, l'Ankaratra et l'Andringitra."],
  ["Méridien", "Demi-cercle imaginaire qui joint les deux pôles. Le méridien de Greenwich sert de méridien d'origine."],
  ["Milieu rural", "Le milieu de la campagne : villages et hameaux dispersés, nature proche, familles qui vivent des champs."],
  ["Milieu urbain", "Le milieu de la ville : population nombreuse et serrée, immeubles, rues animées et services nombreux."],
  ["Montagne", "Relief très haut, aux flancs raides. Le toit de Madagascar est le Maromokotra, dans le Tsaratanana, avec 2 876 mètres."],
  ["Océan", "Vaste étendue d'eau salée entre les continents. La Terre en compte cinq : le Pacifique, l'Atlantique, l'Indien, l'Arctique et l'Antarctique."],
  ["Océan Indien", "L'océan qui baigne Madagascar, entre l'Afrique à l'ouest, l'Asie au nord et l'Océanie à l'est."],
  ["Parallèle", "Ligne imaginaire parallèle à l'équateur ; les tropiques et les cercles polaires sont des parallèles."],
  ["Plaine", "Grande étendue plate et basse, souvent située près des côtes et des grands fleuves."],
  ["Planisphère", "Carte qui représente toute la surface de la Terre sur une surface plane."],
  ["Plateau", "Étendue plate et élevée, bordée par des pentes raides."],
  ["Pôle (Nord ou Sud)", "Chacune des deux extrémités de l'axe de rotation de la Terre."],
  ["Population", "L'ensemble des habitants d'un lieu : village, ville ou pays."],
  ["Prairie", "Étendue d'herbes où paissent les troupeaux, surtout sur les Hautes Terres."],
  ["Région naturelle", "Partie d'un pays qui possède son propre relief, son climat, sa végétation et ses activités."],
  ["Ressource naturelle", "Une richesse que la nature offre à l'homme : l'eau, le sol, la forêt, les animaux, les minerais, le soleil."],
  ["Ressource non renouvelable", "Ressource qui s'épuise et ne revient plus une fois utilisée : la chromite, le nickel, l'ilménite, les pierres précieuses."],
  ["Ressource renouvelable", "Ressource qui se renouvelle si on la protège : l'eau, les forêts, les animaux, l'énergie du soleil."],
  ["Révolution", "Le mouvement de la Terre autour du soleil, en 365 jours et un quart ; c'est lui qui explique les saisons."],
  ["Rotation", "Le mouvement de la Terre sur elle-même, en 24 heures ; c'est lui qui explique le jour et la nuit."],
  ["Saison", "Chacune des parties de l'année : l'hiver, le printemps, l'été et l'automne. À Madagascar : la saison des pluies et la saison sèche."],
  ["Savane", "Végétation d'herbes hautes avec quelques arbres, dans les régions sèches de l'Ouest et du Sud."],
  ["Soleil", "L'étoile qui éclaire et chauffe la Terre ; il est la source de la chaleur, de la lumière et de la vie."],
  ["Superficie", "La mesure de l'étendue d'un territoire. Celle de la Terre est d'environ 510 millions de kilomètres carrés."],
  ["Tropique", "Parallèle situé entre l'équateur et un cercle polaire : le tropique du Cancer au nord, le tropique du Capricorne au sud. Ce dernier traverse le sud de Madagascar."],
  ["Vallée", "Le creux allongé entre les reliefs, suivi par un cours d'eau."],
  ["Végétation", "L'ensemble des plantes d'une région : forêts, prairies, savanes."],
];

// ── 3. AUTO-ÉVALUATION ──────────────────────────────────────────────────
const AUTO_EVAL = [
  ["Unité 1 — La planète Terre", [
    "Je décris la forme de la Terre et je cite ses dimensions.",
    "J'utilise le globe terrestre et le planisphère.",
    "Je nomme les lignes imaginaires du globe : équateur, tropiques, cercles polaires, méridien de Greenwich.",
    "J'explique la rotation, la révolution, le jour et la nuit, les saisons.",
    "Je cite le rôle du soleil pour la vie sur Terre.",
  ]],
  ["Unité 2 — L'île de Madagascar dans le monde", [
    "Je situe Madagascar dans le monde et par rapport à l'Afrique.",
    "Je cite les îles qui appartiennent à Madagascar et les îles voisines.",
    "Je lis une carte de Madagascar en cherchant ses sept éléments.",
    "Je trace le contour de Madagascar à l'aide d'un quadrillage.",
  ]],
  ["Unité 3 — Les milieux naturels à Madagascar", [
    "Je nomme les formes du relief et les trois grands massifs.",
    "Je décris le climat tropical et les zones climatiques de Madagascar.",
    "Je cite les principaux fleuves et lacs et leur utilité.",
    "Je distingue les types de végétation et je connais leurs problèmes.",
    "Je nomme les cinq régions naturelles et leurs caractères.",
  ]],
  ["Unité 4 — Les ressources naturelles", [
    "Je définis une ressource naturelle et je cite des exemples.",
    "Je distingue les ressources renouvelables et les ressources non renouvelables.",
    "J'explique l'importance des ressources et leurs problèmes.",
    "Je propose des gestes pour préserver les ressources naturelles.",
  ]],
  ["Unité 5 — La vie rurale et la vie urbaine", [
    "Je décris les caractéristiques des milieux rural et urbain.",
    "Je cite les activités de chaque milieu.",
    "J'explique l'interdépendance de la ville et de la campagne.",
    "Je cite les problèmes de chaque milieu et les solutions pour améliorer la vie.",
    "Je propose des gestes pour protéger l'environnement rural et urbain.",
  ]],
];

// ── 5. SOURCES ──────────────────────────────────────────────────────────
const SOURCES = [
  ["Programme d'études officiel T5 (nouveau curriculum de Madagascar) — section GÉOGRAPHIE, pages 155 à 169.", "Le document cadre : les cinq thématiques, les contenus, les volumes horaires et les résultats d'apprentissage."],
  ["FRP T5 — Fascicule 2 : ressources pédagogiques officielles T5 — section GÉOGRAPHIE, pages 99 à 134.", "Les supports et précis de cours officiels pour l'enseignant ; le manuel en suit la terminologie et les contenus."],
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
  out.push(B.headingWithBookmark("ANNEXES", "annexes", { size: 30, after: 80, align: AlignmentType.CENTER }));
  out.push(B.p("Le glossaire, les cartes muettes, l'auto-évaluation, la table des illustrations et les sources complètent le manuel.", { size: 21, italics: true, align: AlignmentType.CENTER, after: 200 }));

  // ── 1. GLOSSAIRE ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Glossaire", "glossaire", { size: 26, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Les définitions reprennent le vocabulaire des cinq thématiques du programme d'études officiel T5 et des leçons du manuel.", { size: 19, italics: true, after: 120 }));
  out.push(new Table({
    borders, width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [
      tRow(["Terme", "Définition"], [26, 74], { header: true }),
      ...GLOSSAIRE.map(([t, d]) => new TableRow({
        children: [
          B.cell([B.p(t, { size: 19, bold: true, color: B.BLUE })], { width: 26 }),
          B.cell([B.p(d, { size: 19 })], { width: 74 }),
        ],
      })),
    ],
  }));
  out.push(B.pEmpty());

  // ── 2. CARTES MUETTES ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Cartes muettes", "cartesmuettes", { size: 26, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Recopie ou complète ces cartes dans ton cahier, puis remplis les pointillés.", { size: 21, italics: true, after: 160 }));

  out.push(B.p("1. Le planisphère à compléter", { size: 22, bold: true, before: 100, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom des sept continents et des cinq océans, puis le nom de la ligne imaginaire pointillée.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo5_planisphere_vide", "Le planisphère à compléter : les continents, les océans et l'équateur."));

  out.push(B.p("2. L'océan Indien à compléter", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom du continent, de l'océan, de la grande île et des cinq îles voisines numérotées.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo5_ocean_indien_vide", "L'océan Indien à compléter : le continent, la grande île et les îles voisines."));

  out.push(B.p("3. La carte de Madagascar à compléter", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris les quatre points cardinaux, le nom de la capitale, des deux îles et de la ligne imaginaire pointillée.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo5_carte_muette_mada", "La carte muette de Madagascar : les points cardinaux, la capitale, les îles et le tropique."));

  out.push(B.p("4. La carte des régions naturelles à compléter", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom des cinq régions naturelles de Madagascar dans la légende.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo5_carte_muette_regions", "La carte muette des régions naturelles : cinq régions à nommer dans la légende."));

  // ── 3. AUTO-ÉVALUATION ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Auto-évaluation", "autoevaluation", { size: 26, after: 120, align: AlignmentType.CENTER }));
  out.push(B.p("Après chaque unité, coche la colonne qui correspond à ce que tu sais faire. Demande conseil à ton maître ou à ta maîtresse pour progresser.", { size: 21, italics: true, after: 160 }));
  const evalRows = [tRow(["Compétence — Je suis capable de…", "Acquis", "En cours", "À revoir"], [52, 16, 16, 16], { header: true })];
  AUTO_EVAL.forEach(([unit, comps]) => {
    evalRows.push(tRow([unit, "", "", ""], [52, 16, 16, 16], { bold: true, bg: "F5F5F5", color: B.BLUE }));
    comps.forEach((c) => evalRows.push(tRow([c, "", "", ""], [52, 16, 16, 16])));
  });
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: evalRows }));
  out.push(B.pEmpty());

  // ── 4. TABLE DES ILLUSTRATIONS ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Table des illustrations", "illustrations", { size: 26, after: 120, align: AlignmentType.CENTER }));
  const illRows = [tRow(["Séance", "Titre de la séance", "Illustration"], [10, 45, 45], { header: true })];
  topics.forEach((t) => {
    illRows.push(new TableRow({
      children: [
        B.cell([B.p(String(t.numero), { size: 18 })], { width: 10 }),
        B.cell([B.p(t.titre, { size: 18 })], { width: 45 }),
        B.cell(
          [
            B.p(t.image && t.image.legende ? t.image.legende : "—", { size: 18 }),
            ...(t.scene && t.scene.legende
              ? [B.p(t.scene.legende.replace(/^Document\s*:\s*/, ""), { size: 18, color: "555555" })]
              : []),
          ],
          { width: 45 }
        ),
      ],
    }));
  });
  illRows.push(new TableRow({
    children: [
      B.cell([B.p("Annexe", { size: 18 })], { width: 10 }),
      B.cell([B.p("Cartes muettes", { size: 18 })], { width: 45 }),
      B.cell([B.p("Le planisphère à compléter ; l'océan Indien à compléter ; la carte muette de Madagascar ; la carte des régions naturelles à compléter.", { size: 18 })], { width: 45 }),
    ],
  }));
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows: illRows }));
  out.push(B.pEmpty());

  // ── 5. LOHARANOM-BAOVAO (SOURCES) ──
  out.push(B.pageBreak());
  out.push(B.headingWithBookmark("Loharanom-Baovao (sources)", "sources", { size: 26, after: 120, align: AlignmentType.CENTER }));
  SOURCES.forEach(([s, d]) => {
    out.push(B.p(`• ${s}`, { size: 21, after: 40 }));
    out.push(B.p(d, { size: 19, italics: true, indent: 360, after: 120, color: "555555" }));
  });
  out.push(B.p("Aucune source internet n'a été utilisée pour l'élaboration de ce manuel : tous les contenus, le vocabulaire et les volumes horaires suivent fidèlement le programme d'études officiel T5 en vigueur à Madagascar.", { size: 20, italics: true, before: 80, after: 200 }));

  return out;
}

module.exports = { annexesContent };
