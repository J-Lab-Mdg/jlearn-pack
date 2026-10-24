// Enrichissements communs aux manuels de Géographie T4 à T9.
// Récapitulatifs géographiques après chaque unité et atlas cartographique sourcé en fin d'ouvrage.
const fs = require("fs");
const path = require("path");
const { AlignmentType, Table, TableRow, WidthType, BorderStyle } = require("docx");

const ROOT = __dirname;
const thin = { style: BorderStyle.SINGLE, size: 4, color: "B7C7D6" };
const borders = { top: thin, bottom: thin, left: thin, right: thin, insideHorizontal: thin, insideVertical: thin };
const clean = s => String(s || "").replace(/\s+/g, " ").trim();
function short(s, n = 170) {
  let out = clean(s);
  if (out.length > n) out = out.slice(0, n - 1).replace(/\s+\S*$/, "") + "…";
  const op = (out.match(/\(/g) || []).length, cp = (out.match(/\)/g) || []).length;
  if (op > cp) out += ")".repeat(op - cp);
  if (cp > op) out = "(".repeat(cp - op) + out;
  const oq = (out.match(/«/g) || []).length, cq = (out.match(/»/g) || []).length;
  if (oq > cq) out += "»".repeat(oq - cq);
  if (cq > oq) out = "«".repeat(cq - oq) + out;
  return out;
}

function localisation(titre, theme, classe) {
  const s = `${titre} ${theme}`.toLowerCase();
  if (/afrique|africain|sadc|comesa|océan indien/.test(s)) return "Afrique / océan Indien";
  if (/monde|mondial|terre|continent|océan|univers|pays développé|pays en développement|mondialisation/.test(s)) return "Monde";
  if (/madagascar|malgach|région|fokontany|exode rural|hautes terres|sambirano|toliara|toamasina|antsiranana/.test(s)) return "Madagascar";
  if (/plan|classe|école|quartier|village|localité|boussole|orientation/.test(s)) return "Échelle locale";
  if (["T4", "T5", "T6", "T9"].includes(classe)) return "Madagascar / milieu local";
  return "Échelle adaptée au thème";
}
function resume(t) {
  if (t._definition) return short(t._definition);
  if (t.synthese) return short(t.synthese);
  const paras = [];
  for (const sec of (t.lecon && t.lecon.sections) || []) {
    paras.push(...(sec.paras || []));
    for (const ss of sec.sous || []) paras.push(...(ss.paras || []));
  }
  return short(paras[0] || t.objectif || "Repérer, décrire et expliquer la répartition géographique.");
}
function row(B, cells, widths, header = false) {
  return new TableRow({
    ...(header ? { tableHeader: true } : {}),
    children: cells.map((c, i) => B.cell([B.p(c, {
      size: header ? 20 : 19, bold: header, color: header ? "FFFFFF" : undefined,
      align: header ? AlignmentType.CENTER : undefined,
    })], { shading: header ? "1F5D78" : (i === 0 ? "EDF7F3" : undefined), width: widths[i] })),
  });
}

function recapitulatifContent(B, unite, numeroUnite, classe) {
  const out = [B.pageBreak()];
  out.push(B.p(`RÉCAPITULATIF GÉOGRAPHIQUE — UNITÉ ${numeroUnite}`, {
    size: 30, bold: true, align: AlignmentType.CENTER, color: B.GREEN, after: 70,
  }));
  out.push(B.p(unite.nom.replace(/^UNITÉ \d+ — /, ""), {
    size: 27, bold: true, align: AlignmentType.CENTER, color: B.BLUE, after: 80,
  }));
  out.push(B.p("Cette synthèse relie chaque notion à son espace. Pour localiser précisément les éléments, consulte l'atlas cartographique placé dans les annexes.", {
    size: 23, italics: true, align: AlignmentType.CENTER, after: 120,
  }));
  const rows = [row(B, ["Repère géographique", "Échelle ou localisation", "Ce qu'il faut observer et expliquer", "Renvoi"], [27, 18, 43, 12], true)];
  for (const t of unite.topics || []) rows.push(row(B, [t.titre, localisation(t.titre, unite.nom, classe), resume(t), `Atlas ${classe}`], [27, 18, 43, 12]));
  out.push(new Table({ borders, width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.p("Méthode : nommer l'espace, situer les éléments, décrire leur répartition, puis expliquer les facteurs et les relations.", {
    size: 22, bold: true, color: B.GREEN, before: 100, after: 100,
  }));
  return out;
}

const ATLAS = {
  T4: [
    ["Orientation et points cardinaux", "geot4_points_cardinaux", "Échelle locale", "Utiliser le Nord, le Sud, l'Est et l'Ouest pour décrire une position."],
    ["Plans de la classe, de l'école et du village", "geot4_plan_village", "Échelle locale", "Lire le titre, la flèche du Nord, la légende, les symboles et les itinéraires."],
    ["Grands reliefs de Madagascar", "atlas_mada_relief", "Madagascar", "Distinguer Hautes Terres, montagnes, collines, vallées et plaines."],
    ["Cours d'eau, lacs, étangs et marais", "atlas_mada_hydrographie", "Madagascar / milieu local", "Repérer source, amont, aval, affluents et embouchure."],
    ["Climats et paysages de Madagascar", "atlas_mada_climats", "Madagascar", "Comparer Est humide, Hautes Terres, Ouest à saison sèche et Sud plus aride."],
    ["Formations végétales", "atlas_mada_vegetation", "Madagascar", "Localiser forêts, savanes, steppes et mangroves selon pluie, relief et littoral."],
    ["Répartition de la population", "atlas_mada_population", "Madagascar / localité", "Comparer espaces plus peuplés et moins peuplés."],
    ["Activités de la population", "atlas_mada_zones_economiques", "Madagascar", "Relier agriculture, élevage, pêche, artisanat, industrie, commerce et transport aux milieux."],
  ],
  T5: [
    ["Continents et océans", "geo5_continents", "Monde", "Situer les continents, les océans et Madagascar dans l'océan Indien."],
    ["Madagascar dans le monde", "geo5_situer_mada_monde", "Monde / océan Indien", "Repérer l'île au sud-est de l'Afrique et ses voisins."],
    ["Régions de Madagascar", "geo5_carte_regions", "Madagascar", "Lire les grands repères régionaux et les localisations citées dans les leçons."],
    ["Formes du relief", "atlas_mada_relief", "Madagascar", "Localiser massifs, Hautes Terres, plateaux, vallées et plaines côtières."],
    ["Zones climatiques", "atlas_mada_climats", "Madagascar", "Distinguer les grands domaines climatiques et leurs contrastes pluviométriques."],
    ["Climats et saisons", "atlas_mada_climats", "Madagascar", "Relier pluies, température, altitude et saison sèche."],
    ["Types de végétation — forêts", "atlas_mada_vegetation", "Madagascar", "Localiser forêt humide orientale, forêts du Nord et formations littorales."],
    ["Types de végétation — savanes et formations sèches", "atlas_mada_forets", "Madagascar", "Localiser savanes occidentales et formations épineuses du Sud."],
    ["Fleuves de Madagascar", "atlas_mada_hydrographie", "Madagascar", "Comparer cours courts de l'Est et grands bassins de l'Ouest."],
    ["Hydrographie régionale", "atlas_mada_hydrographie", "Madagascar", "Repérer les principaux fleuves et leur direction d'écoulement."],
    ["Lacs naturels", "geo5_lacs_naturels", "Madagascar", "Situer les principaux lacs et leurs usages."],
    ["Cinq grands milieux naturels", "geo5_region_hautes_terres", "Madagascar", "Comparer Hautes Terres, Nord, Est, Ouest et Sud."],
    ["Région du Nord", "geo5_region_nord", "Madagascar", "Relier reliefs, climat, végétation et activités du Nord."],
    ["Région de la côte Est", "geo5_region_cote_est", "Madagascar", "Relier humidité, forêt, fleuves, cultures et ports."],
    ["Région de la côte Ouest", "geo5_region_cote_ouest", "Madagascar", "Relier plaines, savanes, fleuves et activités de l'Ouest."],
    ["Région du Sud", "geo5_region_sud", "Madagascar", "Relier aridité, végétation épineuse, élevage et ressources."],
  ],
  T6: [
    ["Régions du Centre", "geo6_regions_centre", "Madagascar", "Localiser régions, chefs-lieux et limites du Centre."],
    ["Régions de l'Est", "geo6_regions_est", "Madagascar", "Localiser régions et chefs-lieux de la façade orientale."],
    ["Régions du Nord et de l'Ouest", "geo6_regions_nord_ouest", "Madagascar", "Localiser régions et chefs-lieux du Nord et de l'Ouest."],
    ["Régions du Sud", "geo6_regions_sud", "Madagascar", "Localiser régions et chefs-lieux du Sud."],
    ["Ressources naturelles régionales", "atlas_mada_zones_economiques", "Madagascar", "Relier eau, forêts, minerais, énergie, faune et flore aux régions."],
    ["Climat et ressources", "atlas_mada_climats", "Madagascar", "Expliquer la répartition des ressources par les milieux."],
    ["Répartition de la population", "atlas_mada_population", "Madagascar", "Identifier concentrations, vides relatifs et facteurs."],
    ["Densités de population", "atlas_mada_population", "Madagascar", "Comparer fortes et faibles densités."],
    ["Migrations et exode rural", "atlas_mada_migrations", "Madagascar", "Lire les flux entre campagnes, villes et régions."],
    ["Grandes zones économiques", "atlas_mada_zones_economiques", "Madagascar", "Localiser les spécialisations régionales."],
    ["Cultures vivrières", "atlas_mada_cultures", "Madagascar", "Localiser riz, manioc, maïs et autres cultures."],
    ["Cultures industrielles et commerciales", "atlas_mada_cultures", "Madagascar", "Localiser vanille, girofle, café, coton, canne et autres filières."],
    ["Élevage", "atlas_mada_elevage", "Madagascar", "Relier troupeaux, pâturages, eau et marchés."],
    ["Pêche", "atlas_mada_peche", "Madagascar", "Localiser façades maritimes, lacs, fleuves et zones halieutiques."],
    ["Forêts et exploitation", "atlas_mada_forets", "Madagascar", "Comparer domaines forestiers, usages et pressions."],
    ["Mines et minerais", "atlas_mada_mines", "Madagascar", "Localiser les principaux espaces miniers et leurs impacts."],
    ["Industrie", "atlas_mada_industries", "Madagascar", "Repérer les principaux centres de transformation."],
    ["Tourisme", "atlas_mada_tourisme", "Madagascar", "Localiser littoraux, parcs, paysages et pôles touristiques."],
    ["Commerce et transport", "atlas_mada_transports", "Madagascar", "Lire axes, ports, villes et connexions économiques."],
  ],
  T7: [
    ["Planisphère de repérage", "geo7_planisphere_vide", "Monde", "Placer continents, océans, équateur, tropiques et méridien d'origine."],
    ["Coordonnées géographiques", "geo7_coordonnees", "Monde", "Lire latitude, longitude, parallèles et méridiens."],
    ["Reliefs terrestres et sous-marins", "geo7_relief_profil", "Monde", "Comparer altitude, profondeur, continents et fonds océaniques."],
    ["Zones climatiques mondiales", "geo7_zones_climatiques", "Monde", "Localiser zones chaude, tempérées et froides."],
    ["Cycle et réseaux de l'eau", "geo7_cycle_eau", "Monde / bassin versant", "Relier atmosphère, continents, fleuves, nappes et océans."],
    ["Climat, hydrographie et végétation", "geo7_s32", "Monde", "Mettre en relation pluies, eaux et couvertures végétales."],
    ["Densités mondiales", "geo7_densites_mondiales", "Monde", "Localiser grands foyers, densités moyennes et faibles densités."],
    ["Flux économiques mondiaux", "geo7_flux_economiques", "Monde", "Lire échanges, pôles, réseaux et interdépendances."],
    ["Érosion, sécheresse et désertification", "geo7_s50", "Monde / Madagascar", "Localiser et comparer les principales pressions environnementales."],
    ["Déforestation et feux", "geo7_s52", "Monde / Madagascar", "Identifier espaces forestiers menacés et causes."],
    ["Gestion durable des ressources", "geo7_gestion_ressources", "Monde / territoire local", "Relier ressources, acteurs, règles et actions."],
  ],
  T8: [
    ["Pays développés", "geo8_planisphere_developpement", "Monde", "Localiser les grands pôles développés et leurs périphéries."],
    ["Pays en développement", "geo8_s14", "Monde", "Localiser les grands ensembles et reconnaître leur diversité."],
    ["Situation et régions de l'Afrique", "geo8_s23", "Afrique", "Repérer limites, façades, régions et Madagascar."],
    ["Reliefs de l'Afrique", "geo8_s24", "Afrique", "Localiser massifs, plateaux, bassins et plaines."],
    ["Climats et végétations de l'Afrique", "geo8_s25", "Afrique", "Relier équateur, pluies, climats et formations végétales."],
    ["Fleuves, lacs et deltas africains", "geo8_s26", "Afrique", "Localiser grands bassins hydrographiques et zones humides."],
    ["Population africaine", "geo8_s28", "Afrique", "Comparer concentrations, faibles densités et diversité."],
    ["Organisations régionales", "geo8_afrique_organisations", "Afrique / océan Indien", "Situer SADC, COMESA, COI et Union africaine."],
    ["Risques climatiques", "geo8_chaine_climat", "Monde / Madagascar", "Localiser sécheresses, inondations, cyclones et espaces vulnérables."],
    ["Sources d'énergie", "geo8_sources_energie", "Monde / Madagascar", "Relier gisements, potentiels renouvelables et usages."],
  ],
  T9: [
    ["Structure économique et réseaux", "geo9_reseaux_economie", "Madagascar", "Relier zones de production, villes, industries, marchés, ports et axes."],
    ["Cultures", "atlas_mada_cultures", "Madagascar", "Localiser cultures vivrières, industrielles et d'exportation."],
    ["Élevage", "atlas_mada_elevage", "Madagascar", "Localiser grands espaces pastoraux et marchés."],
    ["Pêche", "atlas_mada_peche", "Madagascar", "Localiser zones marines, lacs, fleuves et aquaculture."],
    ["Forêts", "atlas_mada_forets", "Madagascar", "Comparer forêts humides, sèches, épineuses et zones de pression."],
    ["Mines et industries", "atlas_mada_mines", "Madagascar", "Localiser ressources minières et centres de transformation."],
    ["Commerce, tourisme et transports", "atlas_mada_transports", "Madagascar", "Lire ports, routes, pôles touristiques et corridors."],
    ["Relief de Madagascar", "atlas_mada_relief", "Madagascar", "Distinguer Hautes Terres, massifs, plateaux et plaines."],
    ["Climats de Madagascar", "atlas_mada_climats", "Madagascar", "Localiser domaines humide, sec, d'altitude et semi-aride."],
    ["Types de végétation de Madagascar", "atlas_mada_vegetation", "Madagascar", "Localiser forêt humide orientale, forêts du Nord et formations littorales."],
    ["Savanes et formations sèches", "atlas_mada_forets", "Madagascar", "Localiser savanes de l'Ouest et végétation épineuse du Sud."],
    ["Hydrographie", "atlas_mada_hydrographie", "Madagascar", "Comparer fleuves de l'Est, de l'Ouest et du Sud, lacs et lagunes."],
    ["Cinq régions naturelles", "atlas_mada_regions_naturelles", "Madagascar", "Délimiter Hautes Terres, Ouest, Sud, Est et Nord."],
    ["Répartition de la population", "atlas_mada_population", "Madagascar", "Comparer densités, villes, migrations et facteurs de peuplement."],
    ["Pressions environnementales", "atlas_mada_environnement", "Madagascar", "Localiser déforestation, érosion, pollution et vulnérabilités."],
  ],
};

function atlasContent(B, classe) {
  const entries = (ATLAS[classe] || []).filter(([, id]) => fs.existsSync(path.join(ROOT, `${id}.png`)));
  const out = [B.pageBreak()];
  out.push(B.p(`ATLAS CARTOGRAPHIQUE EXPLOITABLE — ${classe}`, {
    size: 32, bold: true, align: AlignmentType.CENTER, color: B.GREEN, after: 80,
  }));
  out.push(B.p("Ces cartes récapitulent les éléments localisables étudiés dans le manuel. Chaque document doit être lu avec son titre, son orientation, sa légende, son échelle géographique et le renvoi à la page Sources.", {
    size: 24, italics: true, align: AlignmentType.CENTER, after: 160,
  }));
  entries.forEach(([titre, id, echelle, lecture], i) => {
    out.push(B.pageBreak());
    out.push(B.p(`${i + 1}. ${titre}`, { size: 28, bold: true, color: B.GREEN, after: 60 }));
    out.push(B.p(`Échelle géographique : ${echelle}`, { size: 22, bold: true, color: B.BLUE, after: 50 }));
    out.push(...B.imageBlock(path.join(ROOT, `${id}.png`), 500, `${titre} — carte ou schéma de localisation exploitable.`));
    out.push(B.p(`Lecture géographique : ${lecture}`, { size: 23, after: 60 }));
    out.push(B.p(`Source cartographique : [S2] et [S3] — adaptation pédagogique J-Learn pour ${classe}.`, { size: 19, italics: true, color: "555555", after: 100 }));
  });
  out.push(B.pageBreak());
  out.push(B.p("Sources cartographiques des annexes", { size: 30, bold: true, align: AlignmentType.CENTER, color: B.GREEN, after: 120 }));
  const sources = [
    `[S1] Programme d'études officiel ${classe}, section Géographie : notions, contenus, espaces et échelles prescrits.`,
    "[S2] Collection J-Learn, fonds cartographiques pédagogiques de Madagascar, de l'Afrique et du monde : contours, repères et localisations déjà intégrés aux manuels de la collection.",
    "[S3] Schémas thématiques des leçons et atlas géographiques scolaires de référence : reliefs, climats, végétations, hydrographie, population, ressources, activités et réseaux.",
    "[S4] Note de lecture : les limites thématiques sont des généralisations adaptées à l'enseignement ; elles ne constituent ni des limites cadastrales ni des mesures de terrain.",
  ];
  sources.forEach(s => out.push(B.p(`• ${s}`, { size: 23, after: 100 })));
  out.push(B.p("Méthode de citation : le numéro [S] indiqué sous chaque carte renvoie à cette liste regroupée en fin de manuel.", { size: 22, italics: true, after: 140 }));
  return out;
}

module.exports = { recapitulatifContent, atlasContent, ATLAS };
