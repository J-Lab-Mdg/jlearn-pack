// data-unite2-rev.js — Révision et sujet d'examen de l'UNITÉ 2 (Séances 25 et 26)
const TOTAL = 76;

// ── SÉANCE 25 — Révision de l'unité 2 ──────────────────────────────────
const revision = {
  numero: 25, total: TOTAL,
  titre: "Révision — Unité 2 : L'île de Madagascar dans le monde",
  theme: "L'île de Madagascar dans le monde",
  tableau: [
    ["Une île", "Une étendue de terre entourée d'eau de tous les côtés ; Madagascar est une île."],
    ["L'océan Indien", "L'océan qui entoure Madagascar ; Madagascar en est la plus grande île."],
    ["L'Afrique", "Le continent le plus proche de Madagascar ; il se trouve à l'ouest."],
    ["Le canal de Mozambique", "Le bras de mer qui sépare Madagascar de l'Afrique, large d'environ 400 km."],
    ["La superficie de Madagascar", "Environ 590 000 km² : la 4e plus grande île du monde, longue de 1 580 km."],
    ["L'équateur", "La ligne imaginaire qui passe au nord de Madagascar."],
    ["Le tropique du Capricorne", "La ligne imaginaire qui traverse le Sud de Madagascar, près de Toliara."],
    ["L'hémisphère Sud", "La moitié sud de la Terre : Madagascar s'y trouve entièrement ; c'est un pays tropical."],
    ["Le cap d'Ambre", "Le point le plus au nord de Madagascar."],
    ["Le cap Sainte-Marie", "Le point le plus au sud de Madagascar."],
    ["Nosy Be", "La plus grande île malgache, au nord-ouest : « l'île aux parfums » (ylang-ylang)."],
    ["L'île Sainte-Marie", "L'île longue et étroite à l'est, au nord de Toamasina, célèbre pour ses baleines."],
    ["Nosy Mangabe et Nosy Anakao", "Nosy Mangabe : réserve naturelle au nord-est, dans la baie d'Antongil ; Nosy Anakao : au sud-ouest, près de Toliara."],
    ["Les îles éparses", "Cinq petites îles isolées du territoire malgache : Glorieuses, Juan de Nova, Europa, Bassas da India (canal de Mozambique) et Tromelin (est)."],
    ["Les îles voisines", "Les Comores et Mayotte au nord-ouest, les Seychelles au nord, Maurice et La Réunion à l'est, les Maldives au nord-est."],
    ["Les éléments d'une carte", "Le titre, la légende, l'échelle, l'orientation, la source, la date et l'auteur."],
    ["L'échelle", "Elle sert à calculer les distances réelles : sur notre carte, 1 cm = 50 km."],
    ["Le quadrillage", "Un rectangle de 9 cm de large et 18 cm de haut, partagé en carreaux de 3 cm : colonnes A, B, C et lignes 1 à 6."],
    ["Les points de repère", "Les cases qui guident le contour : cap d'Ambre vers C6, cap Sainte-Marie vers B1, Nosy Be vers A4, Sainte-Marie vers C4."],
    ["La carte complète", "Le contour en courbes douces, les îles, le tropique en pointillés, le titre, la légende et l'échelle."],
  ],
  questions: [
    ["Qu'est-ce qu'une île ?", "C'est une étendue de terre entourée d'eau de tous les côtés."],
    ["Dans quel océan se trouve Madagascar ?", "Dans l'océan Indien."],
    ["Quel continent se trouve à l'ouest de Madagascar ?", "L'Afrique, séparée de Madagascar par le canal de Mozambique."],
    ["Quel est le rang de Madagascar parmi les grandes îles du monde ?", "C'est la quatrième plus grande île du monde."],
    ["Où passe l'équateur par rapport à Madagascar ?", "Il passe au nord de Madagascar."],
    ["Quelle ligne imaginaire traverse le Sud de Madagascar ?", "Le tropique du Capricorne, près de Toliara."],
    ["Dans quel hémisphère se trouve Madagascar ?", "Entièrement dans l'hémisphère Sud."],
    ["Comment s'appellent les points extrêmes au nord et au sud de Madagascar ?", "Le cap d'Ambre au nord et le cap Sainte-Marie au sud."],
    ["Quelle est la plus grande île malgache après la Grande Île ?", "Nosy Be, au nord-ouest, « l'île aux parfums »."],
    ["Pourquoi l'île Sainte-Marie est-elle célèbre ?", "Parce que les baleines à bosse viennent dans ses eaux de juillet à septembre."],
    ["Cite trois îles éparses.", "Les Glorieuses, Juan de Nova et Europa (aussi Bassas da India et Tromelin)."],
    ["Cite trois îles voisines de Madagascar.", "Les Comores, Maurice et La Réunion (aussi Mayotte, les Seychelles, les Maldives)."],
    ["Cite quatre éléments d'une carte.", "Le titre, la légende, l'échelle et l'orientation (aussi la source, la date et l'auteur)."],
    ["Quelles sont les dimensions du rectangle du quadrillage ?", "9 cm de large et 18 cm de haut, en carreaux de 3 cm."],
    ["Dans quelle case place-t-on le cap d'Ambre ?", "Vers la case C6, tout en haut du quadrillage."],
  ],
};

// ── SÉANCE 26 — Sujet d'examen T5, Unité 2 ─────────────────────────────
const examen = {
  numero: 26, total: TOTAL,
  titre: "Sujet d'examen T5 — Unité 2 : L'île de Madagascar dans le monde",
  duree: "30 minutes",
  bareme: 20,
  consigneGenerale: "Lis bien chaque consigne avant de répondre.",
  exercices: [
    {
      titre: "Exercice 1 (5 points)",
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une île ?",
        "2. Dans quel océan se trouve Madagascar ?",
        "3. Quel continent se trouve à l'ouest de Madagascar ?",
        "4. Quelle est la plus grande île malgache après la Grande Île ?",
        "5. Dans quel hémisphère se trouve Madagascar ?",
      ],
      corrige: [
        "1. Une **île** est une étendue de terre entourée d'eau de tous les côtés. (1 point)",
        "2. Madagascar se trouve dans l'**océan Indien**. (1 point)",
        "3. Le continent **africain** se trouve à l'ouest de Madagascar. (1 point)",
        "4. C'est **Nosy Be**, « l'île aux parfums ». (1 point)",
        "5. Madagascar se trouve entièrement dans l'**hémisphère Sud**. (1 point)",
      ],
    },
    {
      titre: "Exercice 2 (5 points)",
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le canal de Mozambique sépare Madagascar de l'Afrique.",
        "2. L'équateur traverse le milieu de Madagascar.",
        "3. Les baleines à bosse viennent près de l'île Sainte-Marie.",
        "4. Tromelin se trouve à l'ouest de Madagascar.",
        "5. Sur notre carte, 1 cm représente 50 km.",
      ],
      corrige: [
        "1. **Vrai**. (1 point)",
        "2. **Faux** : l'équateur passe au nord de Madagascar. (1 point)",
        "3. **Vrai** : de juillet à septembre. (1 point)",
        "4. **Faux** : Tromelin se trouve à l'est de Madagascar. (1 point)",
        "5. **Vrai**. (1 point)",
      ],
    },
    {
      titre: "Exercice 3 (5 points)",
      consigne: "Complète avec les mots : Mozambique — Capricorne — éparses — Maurice — légende.",
      items: [
        "Le canal de ……… sépare Madagascar de l'Afrique.",
        "Le tropique du ……… traverse le Sud de l'île.",
        "Les Glorieuses et Juan de Nova sont des îles ……… .",
        "……… est une île voisine située à l'est de Madagascar.",
        "Le tableau qui explique les signes d'une carte s'appelle la ……… .",
      ],
      corrige: [
        "canal de **Mozambique** (1 point) / tropique du **Capricorne** (1 point) / îles **éparses** (1 point) / **Maurice** (1 point) / la **légende** (1 point).",
      ],
    },
    {
      titre: "Exercice 4 (5 points)",
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Madagascar est la : A. 2e plus grande île du monde — B. 4e plus grande île du monde — C. plus petite île du monde",
        "2. Nosy Be se trouve : A. au nord-ouest — B. à l'est — C. au sud-est",
        "3. Le cap d'Ambre se place vers la case : A. B1 — B. A4 — C. C6",
        "4. Les Seychelles se trouvent : A. au nord de Madagascar — B. à l'ouest — C. au sud",
        "5. Le quadrillage de la carte se trace avec : A. une règle graduée — B. un compas — C. une corde",
      ],
      corrige: [
        "1. Réponse **B** : la 4e plus grande île du monde. (1 point)",
        "2. Réponse **A** : au nord-ouest. (1 point)",
        "3. Réponse **C** : vers la case C6, tout en haut. (1 point)",
        "4. Réponse **A** : au nord de Madagascar. (1 point)",
        "5. Réponse **A** : avec une règle graduée. (1 point)",
      ],
    },
  ],
};

module.exports = { revision, examen };
