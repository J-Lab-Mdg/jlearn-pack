// ============================================================
// image-mapping.js — association schémas / scènes ↔ séances
// Clé : "unité:index" (index = position du topic dans la liste)
// Chaque topic peut recevoir plusieurs schémas (lecons),
// une scène illustrative (scene) et une figure d'exercice (exo).
// ============================================================

function fig(file, legende, place = "lecon") {
  return { file, legende, place };
}

const IMG = {
  // ---- Unité I : Alimentation ----
  "I:0": [
    fig("aliments-familles.png", "Figure 1 — Les trois familles d'aliments."),
    fig("scenes/scene-aliments-quotidien.jpg", "Figure 1b — Le repas quotidien : des aliments de notre région."),
  ],
  "I:1": [
    fig("transformation-aliments.png", "Figure 2 — La transformation des aliments."),
    fig("scenes/scene-transformation-aliments.jpg", "Figure 2b — Cuisiner et transformer les aliments à la maison."),
  ],
  "I:2": [
    fig("conservation-aliments.png", "Figure 3 — Les techniques de conservation des aliments."),
    fig("scenes/scene-conservation-aliments.jpg", "Figure 3b — Séchage et conservation au soleil."),
  ],
  "I:3": [
    fig("avantages-conservation.png", "Figure 4 — Les avantages de la conservation et de la transformation."),
    fig("scenes/scene-avantages-conservation.jpg", "Figure 4b — Les aliments conservés profitent à toute la famille."),
  ],

  // ---- Unité II : Organisation des êtres vivants ----
  "II:0": [
    fig("viviparite.png", "Figure 5 — La viviparité : le petit naît vivant."),
    fig("scenes/scene-viviparite.jpg", "Figure 5b — Le zébu et son petit."),
  ],
  "II:1": [
    fig("oviparite.png", "Figure 6 — L'oviparité : le petit sort de l'œuf."),
    fig("scenes/scene-oviparite.jpg", "Figure 6b — La poule et ses œufs."),
  ],
  "II:2": [
    fig("ovoviviparite.png", "Figure 7 — L'ovoviviparité : les œufs conservés dans le corps."),
    fig("scenes/scene-ovoviviparite.jpg", "Figure 7b — Un poisson qui garde ses œufs dans le corps."),
  ],
  "II:3": [
    fig("reproduction-animaux.png", "Figure 8 — Comparer les trois modes de reproduction des animaux."),
    fig("scenes/scene-reproduction-animaux.jpg", "Figure 8b — Quatre animaux domestiques et leurs petits."),
  ],
  "II:4": [
    fig("fleur-pollinisation.png", "Figure 9 — La fleur et la pollinisation."),
    fig("scenes/scene-fleur-pollinisation.jpg", "Figure 9b — Les abeilles visitent les fleurs."),
  ],
  "II:5": [
    fig("cycle-plante.png", "Figure 10 — De la graine à la plante."),
    fig("scenes/scene-graine-plante.jpg", "Figure 10b — Des graines dans la terre et une jeune pousse."),
  ],
  "II:6": [
    fig("importance-reproduction-sexuee.png", "Figure 11 — Reproduction sexuée : avantages et inconvénients."),
    fig("scenes/scene-reproduction-sexuee.jpg", "Figure 11b — Des fleurs et des fruits dans un jardin."),
  ],
  "II:7": [
    fig("bouturage.png", "Figure 12 — Le bouturage pas à pas."),
    fig("scenes/scene-bouturage.jpg", "Figure 12b — Planter une bouture dans une pépinière."),
  ],
  "II:8": [
    fig("greffage.png", "Figure 13 — Le greffage pas à pas."),
    fig("scenes/scene-greffage.jpg", "Figure 13b — Un arboriculteur greffe un arbre fruitier."),
  ],
  "II:9": [
    fig("marcottage.png", "Figure 14 — Le marcottage et le choix d'une technique."),
    fig("scenes/scene-marcottage.jpg", "Figure 14b — Un arbuste marcotté dans le champ."),
  ],

  // ---- Unité III : Reproduction humaine ----
  "III:0": [
    fig("appareil-masculin.png", "Figure 15 — L'appareil reproducteur masculin : organes internes."),
  ],
  "III:1": [
    fig("appareil-feminin.png", "Figure 16 — L'appareil reproducteur féminin : organes internes."),
  ],
  "III:2": [
    fig("fonctionnement-reproduction.png", "Figure 17 — Le fonctionnement des appareils reproducteurs."),
  ],

  // ---- Unité IV : Santé et bien-être ----
  "IV:0": [
    fig("appareil-urinaire.png", "Figure 18 — L'appareil urinaire : découverte."),
  ],
  "IV:1": [
    fig("roles-appareil-urinaire.png", "Figure 19 — Les rôles des organes de l'appareil urinaire."),
  ],
  "IV:2": [
    fig("hygiene-appareil-urinaire.png", "Figure 20 — Prendre soin de l'appareil urinaire."),
    fig("scenes/scene-hygiene-appareil-urinaire.jpg", "Figure 20b — Boire de l'eau propre et garder une bonne hygiène."),
  ],

  // ---- Unité V : Environnement ----
  "V:0": [
    fig("moyens-eau.png", "Figure 21 — Les moyens d'approvisionnement en eau."),
    fig("scenes/scene-moyens-eau.jpg", "Figure 21b — Les familles vont chercher l'eau à la source."),
  ],
  "V:1": [
    fig("avantages-sources.png", "Figure 22 — Avantages et inconvénients des sources d'eau."),
    fig("scenes/scene-avantages-sources.jpg", "Figure 22b — Une fontaine et une rivière au village."),
  ],
  "V:2": [
    fig("problemes-eau.png", "Figure 23 — Les problèmes d'accès à l'eau."),
    fig("scenes/scene-problemes-eau.jpg", "Figure 23b — La saison sèche : la réserve d'eau diminue."),
  ],
  "V:3": [
    fig("bassin-versant.png", "Figure 24 — Le bassin versant : origine et circulation de l'eau."),
    fig("scenes/scene-bassin-versant.jpg", "Figure 24b — La colline, la pluie et la rivière."),
  ],
  "V:4": [
    fig("protection-bassins.png", "Figure 25 — Rôle et protection des bassins versants."),
  ],
  "V:5": [
    fig("vases-communicants.png", "Figure 26 — Le principe des vases communicants."),
    fig("scenes/scene-vases-communicants.jpg", "Figure 26b — Récipients reliés : l'eau s'équilibre."),
  ],
  "V:6": [
    fig("distribution-eau.png", "Figure 27 — La distribution de l'eau dans la ville et les champs."),
  ],

  // ---- Unité VI : Géologie ----
  "VI:0": [
    fig("decouverte-roches.png", "Figure 28 — La découverte des roches."),
    fig("scenes/scene-decouverte-roches.jpg", "Figure 28b — Observation d'échantillons de roches sur le terrain."),
  ],
  "VI:1": [
    fig("roches-magmatiques.png", "Figure 29 — Les roches magmatiques."),
    fig("scenes/scene-roches-magmatiques.jpg", "Figure 29b — Un paysage volcanique et des roches volcaniques."),
  ],
  "VI:2": [
    fig("roches-sedimentaires.png", "Figure 30 — Les roches sédimentaires."),
    fig("scenes/scene-roches-sedimentaires.jpg", "Figure 30b — Les couches de sable et d'argile."),
  ],
  "VI:3": [
    fig("roches-metamorphiques.png", "Figure 31 — Les roches métamorphiques."),
  ],
  "VI:4": [
    fig("roches-classement.png", "Figure 32 — Distinguer les trois groupes de roches."),
  ],
};

const REVISION_IMAGES = {
  I: fig("bilan-unite-I.png", "Figure R1 — Bilan de l'Unité I : Alimentation."),
  II: fig("bilan-unite-II.png", "Figure R2 — Bilan de l'Unité II : Reproduction des êtres vivants."),
  III: fig("bilan-unite-III.png", "Figure R3 — Bilan de l'Unité III : Reproduction humaine."),
  IV: fig("bilan-unite-IV.png", "Figure R4 — Bilan de l'Unité IV : Santé et bien-être."),
  V: fig("bilan-unite-V.png", "Figure R5 — Bilan de l'Unité V : Environnement."),
  VI: fig("bilan-unite-VI.png", "Figure R6 — Bilan de l'Unité VI : Géologie."),
};

const EXAM_IMAGES = {
  I: [fig("aliments-familles.png", "Figure E1 — Classer les aliments.")],
  II: [fig("reproduction-animaux.png", "Figure E2 — Modes de reproduction des animaux.")],
  III: [fig("appareil-masculin.png", "Figure E3 — L'appareil reproducteur masculin."), fig("appareil-feminin.png", "Figure E4 — L'appareil reproducteur féminin.")],
  IV: [fig("appareil-urinaire.png", "Figure E5 — L'appareil urinaire.")],
  V: [fig("vases-communicants.png", "Figure E6 — Les vases communicants.")],
  VI: [fig("roches-classement.png", "Figure E7 — Les trois groupes de roches.")],
};

const ANNEXE_IMAGES = [
  fig("bilan-unite-V.png", "Figure A1 — Schéma-bilan : l'eau et l'environnement."),
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
