// ============================================================
// image-mapping.js — association schémas / illustrations / scènes
// ↔ séances (SVT T7). Clé : "unité:index".
//   gen/  : illustrations générées (organes, cellules, microbes)
//   schémas SVG : processus / schémas « à légender »
//   scenes/ : contextes Madagascar
// ============================================================
function fig(file, legende, place = "lecon") {
  return { file, legende, place };
}

const IMG = {
  // ---- Unité I : Santé et bien-être (appareil digestif) ----
  "I:0": [
    fig("gen/appareil-digestif.jpg", "Figure 1 — L'appareil digestif : les organes du tube digestif et les glandes (illustration complète)."),
    fig("appareil-digestif.png", "Figure 1a — Même appareil digestif en schéma, à légender."),
    fig("scenes/scene-repas-malagasy.jpg", "Figure 1b — Un repas à Madagascar : le riz et ses accompagnements."),
  ],
  "I:1": [
    fig("gen/roles-digestifs.jpg", "Figure 2 — Les rôles du tube digestif et des glandes digestives (illustration)."),
    fig("roles-digestifs.png", "Figure 2b — Les rôles digestifs : schéma à légender."),
  ],
  "I:2": [
    fig("gen/trajet-aliments.jpg", "Figure 3 — Le trajet et les transformations des aliments (illustration)."),
    fig("trajet-aliments.png", "Figure 3b — Trajet bouche → anus : schéma à légender."),
  ],
  "I:3": [
    fig("gen/digestion-perturbee.jpg", "Figure 4 — Digestion normale et digestion perturbée (illustration)."),
    fig("digestion-perturbee.png", "Figure 4b — Le devenir des aliments et les conséquences d'une digestion perturbée."),
  ],

  // ---- Unité II : Reproduction humaine ----
  "II:0": [
    fig("gen/puberte.jpg", "Figure 5 — La puberté : changements chez le garçon et la fille (illustration)."),
    fig("puberte.png", "Figure 5a — La puberté : schéma à légender."),
    fig("scenes/scene-adolescent.jpg", "Figure 5b — Un adolescent malgache : les changements de la puberté."),
  ],
  "II:1": [
    fig("gen/appareil-masculin.jpg", "Figure 6 — L'appareil reproducteur masculin : testicules, spermiductes, prostate, urètre (illustration)."),
    fig("gen/appareil-feminin.jpg", "Figure 6b — L'appareil reproducteur féminin : ovaires, trompes, utérus, vagin (illustration)."),
    fig("organes-genitaux.png", "Figure 6c — Organes génitaux internes : schéma à légender."),
  ],
  "II:2": [
    fig("gen/cycle-menstruel.jpg", "Figure 7 — Le cycle menstruel : règles, ovulation, fécondité (illustration)."),
    fig("cycle-menstruel.png", "Figure 7b — Le cycle menstruel : schéma à légender."),
  ],
  "II:3": [
    fig("gen/fecondation.jpg", "Figure 8 — La fécondation : spermatozoïde, ovule, cellule-œuf (illustration)."),
    fig("fecondation.png", "Figure 8b — Les conditions de la fécondation : schéma à légender."),
  ],
  "II:4": [
    fig("gen/grossesse.jpg", "Figure 9 — La grossesse : utérus, embryon et futur bébé (illustration)."),
    fig("grossesse-precoce.png", "Figure 9b — La grossesse précoce : causes, conséquences et prévention (schéma)."),
    fig("scenes/scene-grossesse-precoce.jpg", "Figure 9c — Une adolescente accompagnée par un personnel de santé."),
  ],

  // ---- Unité III : Maladies infectieuses ----
  "III:0": [
    fig("gen/microorganismes.jpg", "Figure 10 — Les quatre groupes de microorganismes : bactéries, champignons, virus, parasites (illustration)."),
    fig("microorganismes.png", "Figure 10b — Les microorganismes : schéma à légender."),
  ],
  "III:1": [
    fig("gen/bacterie.jpg", "Figure 11 — La bactérie : membrane, cytoplasme et division (illustration)."),
    fig("bacteries.png", "Figure 11b — Les bactéries : schéma à légender."),
  ],
  "III:2": [
    fig("gen/champignons.jpg", "Figure 12 — Les champignons : levure, moisissure et spores (illustration)."),
    fig("champignons.png", "Figure 12b — Les champignons : schéma à légender."),
  ],
  "III:3": [
    fig("gen/virus-parasites.jpg", "Figure 13 — Les virus, les parasites et leur hôte (illustration)."),
    fig("virus-parasites.png", "Figure 13b — Les virus et les parasites : schéma à légender."),
  ],
  "III:4": [
    fig("gen/immunite.jpg", "Figure 14 — L'infection microbienne et l'immunité (illustration)."),
    fig("infection-immunite.png", "Figure 14b — Soi / non-soi et rôle des anticorps : schéma à légender."),
  ],
  "III:5": [fig("prevention-soins.png", "Figure 15 — Antisepsie, asepsie, antibiotiques, vaccins et sérums.")],
  "III:6": [fig("mesures-prevention.png", "Figure 16 — Prévention et lutte contre les maladies infectieuses.")],
  "III:7": [
    fig("maladies-madagascar.png", "Figure 17 — Les principales maladies infectieuses à Madagascar."),
    fig("scenes/scene-sante-communautaire.jpg", "Figure 17b — Action de santé communautaire dans un village."),
  ],

  // ---- Unité IV : Organisation des êtres vivants ----
  "IV:0": [
    fig("gen/ecosysteme.jpg", "Figure 18 — Qu'est-ce qu'un écosystème ? (illustration)."),
    fig("ecosysteme.png", "Figure 18a — Écosystème : schéma à légender."),
    fig("scenes/scene-foret-riz-etang.jpg", "Figure 18b — Forêt, rizière et étang : un écosystème malgache."),
  ],
  "IV:1": [fig("conditions-milieu.png", "Figure 19 — Les conditions physiques d'un milieu.")],
  "IV:2": [fig("mode-vie.png", "Figure 20 — Les modes de vie et l'adaptation des êtres vivants.")],
  "IV:3": [fig("interactions.png", "Figure 21 — Les interactions entre les êtres vivants.")],
  "IV:4": [
    fig("gen/chaine-alimentaire.jpg", "Figure 22 — La chaîne alimentaire (illustration)."),
    fig("chaine-alimentaire.png", "Figure 22b — Producteurs, consommateurs et décomposeurs : schéma à légender."),
  ],
  "IV:5": [
    fig("extinction.png", "Figure 23 — Modification de l'environnement et menace d'extinction."),
    fig("scenes/scene-deforestation.jpg", "Figure 23b — La déforestation dans les Hautes Terres."),
  ],

  // ---- Unité V : Géologie ----
  "V:0": [
    fig("gen/structure-terre.jpg", "Figure 24 — La structure interne de la Terre (illustration)."),
    fig("structure-terre.png", "Figure 24b — Croûte, manteau, noyau : schéma à légender."),
  ],
  "V:1": [fig("activites-terre.png", "Figure 25 — Les activités internes et externes de la Terre.")],
  "V:2": [
    fig("gen/volcan-seisme.jpg", "Figure 26 — Volcanisme et séismes (illustration)."),
    fig("volcan-seisme.png", "Figure 26b — Volcan et séisme : schéma à légender."),
    fig("scenes/scene-volcan.jpg", "Figure 26c — Un volcan et un paysage volcanique."),
  ],
  "V:3": [
    fig("gen/tectonique-erosion.jpg", "Figure 27 — Tectonique, montagnes, érosion et lavakisation (illustration)."),
    fig("tectonique-erosion.png", "Figure 27b — Plaques et lavaka : schéma à légender."),
    fig("scenes/scene-lavak-erosion.jpg", "Figure 27c — Un lavaka : ravin d'érosion des Hautes Terres."),
  ],
};

const REVISION_IMAGES = {
  I: fig("bilan-unite-I.png", "Figure R1 — Bilan de l'Unité I : Santé et bien-être."),
  II: fig("bilan-unite-II.png", "Figure R2 — Bilan de l'Unité II : Reproduction humaine."),
  III: fig("bilan-unite-III.png", "Figure R3 — Bilan de l'Unité III : Maladies infectieuses."),
  IV: fig("bilan-unite-IV.png", "Figure R4 — Bilan de l'Unité IV : Organisation des êtres vivants."),
  V: fig("bilan-unite-V.png", "Figure R5 — Bilan de l'Unité V : Géologie."),
};

const EXAM_IMAGES = {
  I: [fig("gen/appareil-digestif.jpg", "Figure E1 — L'appareil digestif (illustration à légender).")],
  II: [fig("gen/cycle-menstruel.jpg", "Figure E2 — Le cycle menstruel (illustration à légender).")],
  III: [fig("gen/microorganismes.jpg", "Figure E3 — Les microorganismes (illustration à légender).")],
  IV: [fig("chaine-alimentaire.png", "Figure E4 — La chaîne alimentaire.")],
  V: [fig("structure-terre.png", "Figure E5 — La structure interne de la Terre.")],
};

const ANNEXE_IMAGES = [
  fig("ecosysteme.png", "Figure A1 — Schéma-bilan : l'écosystème."),
];

function apply(unitNum, topics) {
  topics.forEach((t, i) => {
    const key = unitNum + ":" + i;
    if (IMG[key]) {
      t.images = IMG[key].slice();
      // Pour les exercices et le corrigé on prend la première figure non-scène,
      // idéalement l'illustration générée (elle est en tête de la liste).
      const firstSchema = t.images.find((im) => !im.file.startsWith("scenes/"));
      t.exoImage = firstSchema || t.images[0] || null;
      t.corrigeImage = t.exoImage || null;
    }
  });
  return topics;
}

module.exports = { IMG, REVISION_IMAGES, EXAM_IMAGES, ANNEXE_IMAGES, apply };
