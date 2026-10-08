// data-unite2-rev.js — Révision et sujet d'examen de l'UNITÉ 2 (Séances 23 et 24)
const TOTAL = 76;

// ── SÉANCE 23 — Révision de l'unité 2 ───────────────────────────────────
const revision = {
  numero: 23, total: TOTAL,
  titre: "Révision — Unité 2 : Le plan",
  theme: "Le plan",
  tableau: [
    ["Un plan", "Un dessin qui représente un lieu vu de dessus, comme si on le regardait depuis le ciel."],
    ["La vue de dessus", "Regarder un lieu d'en haut, comme un oiseau qui vole au-dessus."],
    ["Les éléments du plan de la classe", "Les murs, la porte, les fenêtres et les meubles (tableau, bureau, pupitres)."],
    ["Les formes simples", "Sur un plan, chaque meuble est dessiné vu de dessus : le pupitre par un petit rectangle."],
    ["La flèche du Nord", "La flèche N placée en haut du plan : le Nord en haut, le Sud en bas, l'Ouest à gauche, l'Est à droite."],
    ["L'échelle", "La règle qui dit combien de centimètres sur le plan représentent un mètre dans la réalité (exemple : 1 cm = 1 m)."],
    ["La légende", "L'encart qui explique la signification des signes et des couleurs d'un plan."],
    ["Les infrastructures de l'école", "Les bâtiments (salles de classe, bureau, cantine, toilettes), la cour, le puits et le portail."],
    ["Le quartier", "L'espace autour de l'école, avec les maisons et les lieux connus (marché, église, Fokontany, routes)."],
    ["Un itinéraire", "Le chemin que l'on suit pour aller d'un endroit à un autre, par exemple de la maison à l'école."],
    ["Le plan du village", "Il montre les bâtiments, les routes, la rivière, le pont et les rizières."],
    ["Ville et village", "La ville a beaucoup plus de bâtiments, de routes, de quartiers et d'habitants que le village."],
  ],
  questions: [
    ["Qu'est-ce qu'un plan ?", "Un plan est un dessin qui représente un lieu vu de dessus."],
    ["Comment regarde-t-on un lieu sur un plan ?", "Comme si on était au-dessus, dans le ciel."],
    ["Cite trois éléments du plan de la salle de classe.", "Les murs, la porte et les pupitres (ou les fenêtres, le tableau, le bureau)."],
    ["Quelle forme a un pupitre vu de dessus ?", "Un rectangle."],
    ["Où place-t-on le Nord sur un plan, et avec quelle lettre ?", "En haut du plan, avec la lettre N."],
    ["Sur un plan orienté, où sont le Sud, l'Ouest et l'Est ?", "Le Sud en bas, l'Ouest à gauche et l'Est à droite."],
    ["À quoi sert l'échelle d'un plan ?", "Elle dit combien de centimètres sur le plan représentent un mètre dans la réalité."],
    ["Dans notre exemple, la table du maître de 2 m mesure combien sur le plan ?", "2 cm, parce que 1 cm sur le plan = 1 m dans la réalité."],
    ["Qu'est-ce que la légende d'un plan ?", "C'est l'encart qui explique la signification des signes et des couleurs du plan."],
    ["Cite trois infrastructures de l'école.", "Les salles de classe, la cantine et le portail (ou le bureau, les toilettes, la cour, le puits)."],
    ["Comment s'appelle le chemin de la maison à l'école ?", "L'itinéraire maison–école."],
    ["Quelle est la différence entre un village et une ville ?", "La ville a beaucoup plus de bâtiments, de routes, de quartiers et d'habitants."],
  ],
};

// ── SÉANCE 24 — Sujet d'examen T4, Unité 2 ─────────────────────────────
const examen = {
  numero: 24, total: TOTAL,
  titre: "Sujet d'examen T4 — Unité 2 : Le plan",
  duree: "30 minutes",
  bareme: 20,
  consigneGenerale: "Lis bien chaque consigne avant de répondre.",
  exercices: [
    {
      titre: "Exercice 1 (5 points)",
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un plan ?",
        "2. Où place-t-on le Nord sur un plan ?",
        "3. Qu'est-ce que la légende d'un plan ?",
        "4. Qu'est-ce qu'un itinéraire ?",
        "5. Cite deux infrastructures de l'école.",
      ],
      corrige: [
        "1. Un plan est un **dessin qui représente un lieu vu de dessus**. (1 point)",
        "2. Le Nord est placé **en haut du plan**, indiqué par la flèche N. (1 point)",
        "3. La légende est **l'encart qui explique la signification des signes et des couleurs** du plan. (1 point)",
        "4. Un itinéraire est **le chemin que l'on suit pour aller d'un endroit à un autre**. (1 point)",
        "5. Par exemple : **les salles de classe et la cantine** (ou le bureau, les toilettes, la cour, le portail, le puits). (1 point)",
      ],
    },
    {
      titre: "Exercice 2 (5 points)",
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Un plan est un dessin vu de côté.",
        "2. Sur un plan orienté, l'Ouest est à gauche.",
        "3. La légende n'est pas nécessaire pour lire un plan.",
        "4. L'itinéraire maison–école suit les routes et les chemins.",
        "5. Une ville a plus de bâtiments qu'un village.",
      ],
      corrige: [
        "1. **Faux** : un plan est un dessin **vu de dessus**. (1 point)",
        "2. **Vrai**. (1 point)",
        "3. **Faux** : sans légende, on ne sait pas ce que représentent les signes. (1 point)",
        "4. **Vrai**. (1 point)",
        "5. **Vrai**. (1 point)",
      ],
    },
    {
      titre: "Exercice 3 (5 points)",
      consigne: "Complète avec les mots : dessus — N — échelle — légende — pont.",
      items: [
        "Un plan est un dessin d'un lieu vu de ……… .",
        "La flèche du Nord est écrite avec la lettre ……… .",
        "La règle qui fait correspondre les centimètres du plan et les mètres de la réalité s'appelle l'……… .",
        "L'encart qui explique les signes du plan s'appelle la ……… .",
        "Pour traverser la rivière, on passe par le ……… .",
      ],
      corrige: [
        "**dessus** (1 point) / **N** (1 point) / **échelle** (1 point) / **légende** (1 point) / **pont** (1 point).",
      ],
    },
    {
      titre: "Exercice 4 (5 points)",
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Sur le plan, le pupitre est dessiné : A. en rond — B. par un petit rectangle — C. avec ses pieds",
        "2. Sur un plan orienté, le Sud est : A. en haut — B. à gauche — C. en bas",
        "3. Si 1 cm sur le plan = 1 m dans la réalité, une table de 3 m mesure sur le plan : A. 3 cm — B. 30 cm — C. 3 m",
        "4. Le chemin que l'on suit pour aller de la maison à l'école s'appelle : A. la légende — B. l'itinéraire — C. l'échelle",
        "5. Pour expliquer les signes d'un plan, on regarde : A. la légende — B. le titre — C. la flèche du Nord",
      ],
      corrige: [
        "1. Réponse **B** : un petit rectangle. (1 point)",
        "2. Réponse **C** : en bas. (1 point)",
        "3. Réponse **A** : 3 cm. (1 point)",
        "4. Réponse **B** : l'itinéraire. (1 point)",
        "5. Réponse **A** : la légende. (1 point)",
      ],
    },
  ],
};

module.exports = { revision, examen };
