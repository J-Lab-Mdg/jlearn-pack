// ============================================================
// image-mapping.js — association schémas / scènes ↔ séances (SVT T7)
// Clé : "unité:index" (index = position du topic dans la liste)
// ============================================================
function fig(file, legende, place = "lecon") {
  return { file, legende, place };
}

const IMG = {
  // ---- Unité I : Santé et bien-être (appareil digestif) ----
  "I:0": [
    fig("appareil-digestif.png", "Figure 1 — L'appareil digestif : les organes."),
    fig("scenes/scene-repas-malagasy.jpg", "Figure 1b — Un repas à Madagascar : le riz et ses accompagnements."),
  ],
  "I:1": [fig("roles-digestifs.png", "Figure 2 — Les rôles du tube digestif et des glandes digestives.")],
  "I:2": [fig("trajet-aliments.png", "Figure 3 — Le trajet et les transformations des aliments.")],
  "I:3": [fig("digestion-perturbee.png", "Figure 4 — Le devenir des aliments et les conséquences d'une digestion perturbée.")],

  // ---- Unité II : Reproduction humaine ----
  "II:0": [
    fig("puberte.png", "Figure 5 — La puberté : changements et capacités reproductrices."),
    fig("scenes/scene-adolescent.jpg", "Figure 5b — Un adolescent malgache : les changements de la puberté."),
  ],
  "II:1": [fig("organes-genitaux.png", "Figure 6 — Les organes génitaux internes : gonades et voies génitales.")],
  "II:2": [fig("cycle-menstruel.png", "Figure 7 — Le cycle menstruel et la période de fécondité.")],
  "II:3": [fig("fecondation.png", "Figure 8 — La fécondation et les conditions nécessaires.")],
  "II:4": [
    fig("grossesse-precoce.png", "Figure 9 — La grossesse précoce : causes, conséquences et prévention."),
    fig("scenes/scene-grossesse-precoce.jpg", "Figure 9b — Une adolescente accompagnée par un personnel de santé."),
  ],

  // ---- Unité III : Maladies infectieuses ----
  "III:0": [fig("microorganismes.png", "Figure 10 — La découverte des microorganismes.")],
  "III:1": [fig("bacteries.png", "Figure 11 — Les bactéries.")],
  "III:2": [fig("champignons.png", "Figure 12 — Les champignons.")],
  "III:3": [fig("virus-parasites.png", "Figure 13 — Les virus et les parasites.")],
  "III:4": [fig("infection-immunite.png", "Figure 14 — L'infection microbienne et l'immunité.")],
  "III:5": [fig("prevention-soins.png", "Figure 15 — Antisepsie, asepsie, antibiotiques, vaccins et sérums.")],
  "III:6": [fig("mesures-prevention.png", "Figure 16 — Prévention et lutte contre les maladies infectieuses.")],
  "III:7": [
    fig("maladies-madagascar.png", "Figure 17 — Les principales maladies infectieuses à Madagascar."),
    fig("scenes/scene-sante-communautaire.jpg", "Figure 17b — Action de santé communautaire dans un village."),
  ],

  // ---- Unité IV : Organisation des êtres vivants ----
  "IV:0": [
    fig("ecosysteme.png", "Figure 18 — Qu'est-ce qu'un écosystème ?"),
    fig("scenes/scene-foret-riz-etang.jpg", "Figure 18b — Forêt, rizière et étang : un écosystème malgache."),
  ],
  "IV:1": [fig("conditions-milieu.png", "Figure 19 — Les conditions physiques d'un milieu.")],
  "IV:2": [fig("mode-vie.png", "Figure 20 — Les modes de vie et l'adaptation des êtres vivants.")],
  "IV:3": [fig("interactions.png", "Figure 21 — Les interactions entre les êtres vivants.")],
  "IV:4": [fig("chaine-alimentaire.png", "Figure 22 — La chaîne alimentaire.")],
  "IV:5": [
    fig("extinction.png", "Figure 23 — Modification de l'environnement et menace d'extinction."),
    fig("scenes/scene-deforestation.jpg", "Figure 23b — La déforestation dans les Hautes Terres."),
  ],

  // ---- Unité V : Géologie ----
  "V:0": [fig("structure-terre.png", "Figure 24 — La structure interne de la Terre.")],
  "V:1": [fig("activites-terre.png", "Figure 25 — Les activités internes et externes de la Terre.")],
  "V:2": [
    fig("volcan-seisme.png", "Figure 26 — Volcanisme et séismes."),
    fig("scenes/scene-volcan.jpg", "Figure 26b — Un volcan et un paysage volcanique."),
  ],
  "V:3": [
    fig("tectonique-erosion.png", "Figure 27 — Tectonique, montagnes, érosion et lavakisation."),
    fig("scenes/scene-lavak-erosion.jpg", "Figure 27b — Un lavaka : ravin d'érosion des Hautes Terres."),
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
  I: [fig("appareil-digestif.png", "Figure E1 — L'appareil digestif.")],
  II: [fig("cycle-menstruel.png", "Figure E2 — Le cycle menstruel.")],
  III: [fig("microorganismes.png", "Figure E3 — Les microorganismes.")],
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
      const firstSchema = t.images.find((im) => !im.file.startsWith("scenes/"));
      t.exoImage = firstSchema || t.images[0] || null;
      t.corrigeImage = t.exoImage || null;
    }
  });
  return topics;
}

module.exports = { IMG, REVISION_IMAGES, EXAM_IMAGES, ANNEXE_IMAGES, apply };
