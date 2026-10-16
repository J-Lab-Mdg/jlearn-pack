// annexes.js — Annexes du Manuel de Géographie T6
// 1. Glossaire — 2. Cartes muettes — 3. Auto-évaluation — 4. Table des illustrations — 5. Loharanom-Baovao (sources)
const path = require("path");
const fs = require("fs");
const { AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");
const B = require("./builders");

const REPO = path.resolve(__dirname, "..", "..");
const thin = { style: BorderStyle.SINGLE, size: 4, color: "BBBBBB" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };

// ── 1. GLOSSAIRE ────────────────────────────────────────────────────────
// Le vocabulaire des six thématiques du programme d'études officiel T6 et des leçons du manuel.
const GLOSSAIRE = [
  ["Accroissement naturel", "L'excédent des naissances sur les décès d'une population pendant une année."],
  ["Architecture", "L'art de bien construire : penser la maison selon le climat et le site avant de la bâtir."],
  ["Assemblée villageoise", "La réunion des habitants d'un village qui discute et décide des affaires communes, à main levée."],
  ["Bidonville", "Quartier pauvre de la ville : maisons précaires, sans eau propre ni électricité."],
  ["Bois de chauffe", "Le bois qui cuit les repas."],
  ["Bois d'œuvre", "Le bois qui devient poutres et meubles à la scierie."],
  ["Changement climatique", "Le dérèglement du climat de la planète : sécheresses plus longues, cyclones plus violents, montée des eaux."],
  ["Chef-lieu", "La ville principale qui dirige une région ; par exemple Antananarivo pour l'Analamanga."],
  ["Commerce extérieur", "Les échanges avec les pays lointains : les exportations et les importations."],
  ["Commerce intérieur", "Le commerce à l'intérieur du pays : marchés, boutiques, taxis-brousse."],
  ["Commune", "La collectivité qui dirige plusieurs villages ou quartiers ; son chef est le maire."],
  ["Culture commerciale", "Une plante cultivée pour être vendue : girofle, vanille, café, litchi."],
  ["Culture industrielle", "Une plante cultivée pour alimenter une usine : canne à sucre, coton."],
  ["Culture vivrière", "Une plante cultivée pour nourrir la famille : riz, maïs, manioc, patate douce."],
  ["Densité de population", "Le nombre d'habitants au kilomètre carré."],
  ["Délimitation", "Le tracé des limites d'un territoire : où il commence et où il finit."],
  ["Devise", "L'argent étranger qui entre au pays quand les visiteurs changent leurs billets."],
  ["Dina", "Les règles de vie écrites et acceptées par toute la communauté d'un village ; celui qui enfreint répare et se réconcilie."],
  ["District", "La découpe administrative entre la région et la commune."],
  ["Écotourisme", "Le tourisme qui fait découvrir la nature tout en la respectant."],
  ["Élevage extensif", "De grands espaces, pâture libre, peu de soins : les zébus des Hautes Terres et du Sud-Ouest."],
  ["Élevage intensif", "Petit espace, nourriture apportée et soins : vaches laitières, poulaillers."],
  ["Émigration", "Quitter son pays ou sa région pour aller vivre ailleurs."],
  ["Entraide", "Travailler ensemble pour les tâches communes : relever un toit, battre le riz, garder le dépôt."],
  ["Espèce disparue", "Une espèce animale ou végétale qui n'existe plus, comme l'oiseau éléphant de Madagascar."],
  ["Exode rural", "Le départ des habitants de la campagne vers les villes."],
  ["Exportation", "Vendre des produits aux pays lointains : vanille, crevettes, textile, nickel."],
  ["Fady", "Une interdiction traditionnelle : ce que la coutume défend de faire en un lieu ou en un temps."],
  ["Fokontany", "La structure administrative de base : le quartier, le hameau, le village."],
  ["Immigration", "Arriver dans un pays ou une région pour s'y installer."],
  ["Importation", "Acheter des produits aux pays lointains : pétrole, machines, médicaments."],
  ["Infrastructure économique", "Un équipement qui fait vivre l'économie : route, marché couvert, atelier, dépôt."],
  ["Intelligence artificielle", "Des machines qui apprennent à partir d'exemples : traduire, reconnaître, conseiller — l'homme reste le maître."],
  ["Kabary", "L'art de bien parler des anciens : la parole qui conseille, console et décide."],
  ["Loisirs", "Les activités de repos et d'amusement du village : valiha, danses, jeux, fêtes coutumières."],
  ["Main-d'œuvre", "Les bras qui travaillent ; quand les jeunes partent en ville, la campagne en manque."],
  ["Maquette", "Le village réduit, construit en groupe avec des matériaux simples : comparer pour comprendre."],
  ["Mortalité", "Le nombre de décès pour mille habitants pendant une année."],
  ["Mouvement pendulaire", "Les déplacements quotidiens entre le domicile et le lieu de travail ou d'étude."],
  ["Natalité", "Le nombre de naissances pour mille habitants pendant une année."],
  ["Norme environnementale", "Une règle qui protège le milieu : ne pas bâtir en bas-fond, planter les berges, trier les déchets, replanter."],
  ["Notable", "Une personne respectée du village qui conseille le chef du fokontany : la doyenne, l'ancien instituteur, la sage-femme."],
  ["Pêche artisanale", "La pêche des pirogues près du bord : elle nourrit les villages."],
  ["Pêche industrielle", "Les bateaux usines au large, la congélation en mer : ventes aux villes et à l'exportation."],
  ["Population", "L'ensemble des habitants d'un lieu : village, ville, région ou pays."],
  ["Problème foncier", "Les conflits ou le manque de terres à hériter dans la campagne."],
  ["Provinces (anciennes)", "Les six anciennes grandes provinces de Madagascar, remplacées par les régions."],
  ["Pyramide des âges", "Le dessin qui montre la répartition de la population par âge et par sexe."],
  ["Réconciliation", "Le retour de la paix dans le village après la réparation d'une faute."],
  ["Reboisement", "Replanter les arbres coupés — pins, eucalyptus : un coupé, un planté."],
  ["Région administrative", "La grande découpe du territoire de Madagascar, qui en compte 24 ; chaque région a son chef-lieu."],
  ["Ressource halieutique", "Les richesses de la mer et des eaux : poissons, crevettes, langoustes."],
  ["Ressource naturelle", "Une richesse que la nature offre à l'homme : l'eau, le sol, la forêt, les animaux, les minerais."],
  ["Ressource non renouvelable", "Une ressource qui s'épuise et ne revient plus une fois utilisée : chromite, nickel, ilménite, pierres précieuses."],
  ["Ressource renouvelable", "Une ressource qui se renouvelle si on la protège : l'eau, les forêts, les animaux, l'énergie du soleil."],
  ["Secteur informel", "Les petits métiers de la ville sans contrat ni bulletin de paie : cireurs de chaussures, vendeuses à la sauvette."],
  ["Site naturel", "Un lieu que la nature a fait beau ou sacré : cascade, source, grotte, forêt."],
  ["Superficie", "La mesure de l'étendue d'un territoire, en kilomètres carrés."],
  ["Topographie", "La forme du terrain : ses pentes, ses creux, ses cours d'eau, son vent, son soleil."],
  ["Tourisme", "Les voyages des visiteurs ; ses trois formes : balnéaire (plages), culturel (traditions), écologique (parcs)."],
  ["Valiha", "La cithare de bambou de Madagascar : elle fait danser les filles du village."],
  ["Village écologique", "Un village qui gère et valorise ses ressources (eau, forêt, terre) selon des règles de vie communautaires, pour le bien des générations futures."],
  ["Zone économique", "Une région où domine une grande activité qui fait vivre ses habitants : agricole, de pêche, forestière, minière, artisanale, industrielle, touristique."],
  ["Zone franche", "Une usine qui travaille pour l'exportation, comme les ateliers textiles cousant les vêtements vendus aux pays lointains."],
];

// ── 3. AUTO-ÉVALUATION ──────────────────────────────────────────────────
const AUTO_EVAL = [
  ["Unité 1 — Les régions administratives de Madagascar", [
    "Je cite les 24 régions de Madagascar et je les situe sur la carte.",
    "Je donne le chef-lieu de chaque région, au moins de ma propre région.",
    "J'explique la hiérarchie : région, district, commune, fokontany, quartier, secteur.",
    "Je situe ma région : sa délimitation et sa superficie.",
  ]],
  ["Unité 2 — L'utilisation des ressources naturelles", [
    "Je distingue les ressources renouvelables et non renouvelables, avec des exemples.",
    "Je cite les ressources de ma région et les quatre grandes utilisations.",
    "J'explique la gestion des ressources et le déséquilibre entre population et ressources.",
    "Je donne des exemples de ressources mal exploitées et d'espèces disparues.",
    "J'explique le changement climatique et je propose des solutions ; je décris le mini-projet de l'étang piscicole.",
  ]],
  ["Unité 3 — La population malgache", [
    "Je décris la répartition inégale de la population et je calcule une densité.",
    "Je nomme les zones fortement et peu peuplées, avec leurs causes et leurs conséquences.",
    "J'explique l'évolution de la population : natalité, mortalité, accroissement naturel.",
    "Je distingue émigration, immigration et mouvement pendulaire.",
    "Je lis une pyramide des âges et j'explique les impacts de la croissance rapide sur le développement.",
  ]],
  ["Unité 4 — L'exode rural à Madagascar", [
    "Je définis l'exode rural.",
    "Je cite et j'explique les causes : pauvreté, insécurité, chômage, problèmes fonciers, manque d'infrastructures.",
    "Je décris les conséquences en milieu rural et en milieu urbain (secteur informel, bidonvilles).",
    "Je propose des solutions socio-économiques à l'exode rural.",
  ]],
  ["Unité 5 — Les grandes zones économiques et les activités économiques", [
    "Je cite les sept zones économiques et je les localise.",
    "Je distingue cultures vivrières, commerciales et industrielles ; élevage extensif et intensif ; pêche artisanale et industrielle.",
    "Je décris l'exploitation forestière et minière, et les solutions (reboisement).",
    "Je caractérise l'artisanat, l'industrie, le tourisme et leurs apports (emplois, devises).",
    "Je décrit le commerce (exportations, importations), les voies de communication et la nouvelle technologie (dont l'intelligence artificielle).",
  ]],
  ["Unité 6 — Le village écologique", [
    "Je décris un village écologique et l'organisation juridique (autorité locale, notables, droits coutumiers, Dina).",
    "Je décris l'organisation socioéconomique : modes de vie, loisirs, activités économiques.",
    "J'énumère les structures d'un village écologique : habitation, architecture, infrastructures, sites naturels.",
    "Je détermine les normes : respect de l'environnement, disposition par rapport à la topographie, respect des croyances et traditions.",
    "Je compare un village et un village écologique, et je conçois une maquette.",
  ]],
];

// ── 5. SOURCES ──────────────────────────────────────────────────────────
const SOURCES = [
  ["Programme d'études officiel T6 (nouveau curriculum de Madagascar) — section GÉOGRAPHIE, pages 164 à 182 du document.", "Le document cadre : les six thématiques, les contenus, les volumes horaires (33 heures) et les résultats d'apprentissage."],
  ["Le présent manuel suit fidèlement la terminologie du programme d'études officiel T6 (chef-lieu, fokontany, exode rural, accroissement naturel, mouvement pendulaire, Dina, village écologique…).", "Pour les chefs-lieux des régions Androy et Anosy, le manuel retient les chefs-lieux officiels : Ambovombe pour l'Androy et Taolanaro pour l'Anosy."],
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
  out.push(B.p("Les définitions reprennent le vocabulaire des six thématiques du programme d'études officiel T6 et des leçons du manuel.", { size: 19, italics: true, after: 120 }));
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

  out.push(B.p("1. Les 24 régions à compléter", { size: 22, bold: true, before: 100, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom de chaque région à côté de son numéro. Pour les régions de ta zone, ajoute le chef-lieu.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo6_carte_muette_regions", "La carte muette des 24 régions de Madagascar : vingt-quatre numéros à nommer."));

  out.push(B.p("2. La répartition de la population à compléter", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : nomme chaque zone (rouge : très peuplée ; verte : peu peuplée), puis explique pourquoi avec tes mots.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo6_carte_muette_population", "La carte muette de la répartition de la population : les points rouges pour les zones denses, les points verts pour les zones clairsemées."));

  out.push(B.p("3. Les zones économiques à compléter", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom de chaque zone économique à côté de son numéro, cite une activité et un exemple de région malgache.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo6_carte_muette_zones", "La carte muette des zones économiques : sept pictogrammes numérotés à identifier."));

  out.push(B.p("4. Le village écologique à légender", { size: 22, bold: true, before: 160, after: 60, color: B.GREEN }));
  out.push(B.p("Consigne : écris le nom de chaque élément du village écologique à côté de son numéro : la source, les rizières, l'étang, l'atelier, le marché, l'école, le dépôt de tri, la forêt replantée, les panneaux solaires.", { size: 20, italics: true, after: 60 }));
  out.push(...imgBlock("geo6_carte_muette_village", "Le plan du village écologique : neuf éléments numérotés à légender."));

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
      B.cell([B.p("Les 24 régions à compléter ; la répartition de la population à compléter ; les zones économiques à compléter ; le village écologique à légender.", { size: 18 })], { width: 45 }),
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
  out.push(B.p("Aucune source internet n'a été utilisée pour l'élaboration de ce manuel : tous les contenus, le vocabulaire et les volumes horaires suivent fidèlement le programme d'études officiel T6 en vigueur à Madagascar.", { size: 20, italics: true, before: 80, after: 200 }));

  return out;
}

module.exports = { annexesContent };
