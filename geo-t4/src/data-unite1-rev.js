// data-unite1-rev.js — Révision et sujet d'examen de l'UNITÉ 1 (Séances 9 et 10)
const TOTAL = 76;

// ── SÉANCE 9 — Révision de l'unité 1 ────────────────────────────────────
const revision = {
  numero: 9, total: TOTAL,
  titre: "Révision — Unité 1 : L'orientation géographique",
  theme: "L'orientation géographique",
  tableau: [
    ["L'Est", "Le côté du ciel où le soleil se lève."],
    ["L'Ouest", "Le côté du ciel où le soleil se couche."],
    ["Le Nord", "La direction pointée par l'aiguille rouge de la boussole."],
    ["Le Sud", "Le côté opposé au Nord."],
    ["Les points cardinaux", "Le Nord, le Sud, l'Est et l'Ouest."],
    ["Les directions intermédiaires", "Le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest, situées entre deux points cardinaux voisins."],
    ["Le mouvement apparent du soleil", "Le soleil semble se déplacer dans le ciel : il se lève à l'Est, est haut à midi et se couche à l'Ouest."],
    ["La boussole", "Instrument dont l'aiguille rouge pointe toujours le Nord."],
    ["Le GPS", "Appareil électronique qui indique notre position et les directions."],
    ["Un repère", "Une chose connue de tous qui nous aide à nous orienter (école, mosquée, église, grand arbre…)."],
    ["La rose des vents", "Figure en étoile qui montre les huit directions ; le Nord est en haut."],
    ["L'orientation géographique", "Chercher et reconnaître les points cardinaux autour de nous."],
  ],
  questions: [
    ["De quel côté le soleil se lève-t-il ?", "Le soleil se lève du côté de l'Est."],
    ["De quel côté le soleil se couche-t-il ?", "Le soleil se couche du côté de l'Ouest."],
    ["Où se trouve le soleil à midi ?", "À midi, le soleil est haut dans le ciel."],
    ["Qu'est-ce que le mouvement apparent du soleil ?", "C'est le trajet du soleil dans le ciel : il se lève à l'Est et se couche à l'Ouest."],
    ["Que fait l'aiguille rouge de la boussole ?", "L'aiguille rouge pointe toujours vers le Nord."],
    ["Comment s'appelle le côté opposé au Nord ?", "Le côté opposé au Nord s'appelle le Sud."],
    ["Cite les quatre points cardinaux.", "Le Nord, le Sud, l'Est et l'Ouest."],
    ["Cite les quatre directions intermédiaires.", "Le Nord-Est, le Nord-Ouest, le Sud-Est et le Sud-Ouest."],
    ["Entre quels points cardinaux se trouve le Sud-Est ?", "Le Sud-Est se trouve entre le Sud et l'Est."],
    ["Qu'est-ce qu'un repère ? Donne deux exemples.", "C'est une chose connue qui aide à s'orienter : par exemple l'école et le grand arbre du village."],
    ["Où est placé le Nord sur la rose des vents ?", "Le Nord est en haut de la rose des vents."],
    ["Combien de directions montre la rose des vents ?", "La rose des vents montre huit directions."],
  ],
};

// ── SÉANCE 10 — Sujet d'examen T4, Unité 1 ─────────────────────────────
const examen = {
  numero: 10, total: TOTAL,
  titre: "Sujet d'examen T4 — Unité 1 : L'orientation géographique",
  duree: "30 minutes",
  bareme: 20,
  consigneGenerale: "Lis bien chaque consigne avant de répondre.",
  exercices: [
    {
      titre: "Exercice 1 (5 points)",
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. De quel côté le soleil se lève-t-il ?",
        "2. Que fait l'aiguille rouge de la boussole ?",
        "3. Cite les quatre points cardinaux.",
        "4. Qu'est-ce qu'un repère ?",
        "5. Où est placé le Nord sur la rose des vents ?",
      ],
      corrige: [
        "1. Le soleil se lève du côté de l'**Est**. (1 point)",
        "2. L'aiguille rouge **pointe toujours vers le Nord**. (1 point)",
        "3. Les quatre points cardinaux sont le **Nord, le Sud, l'Est et l'Ouest**. (1 point)",
        "4. Un repère est une **chose connue de tous qui nous aide à nous orienter**. (1 point)",
        "5. Le Nord est placé **en haut**. (1 point)",
      ],
    },
    {
      titre: "Exercice 2 (5 points)",
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le soleil se couche à l'Est.",
        "2. Le côté opposé au Nord s'appelle le Sud.",
        "3. À midi, le soleil est haut dans le ciel.",
        "4. Le Nord-Ouest se trouve entre le Nord et l'Est.",
        "5. Un repère ne change pas de place.",
      ],
      corrige: [
        "1. **Faux** : le soleil se couche à l'**Ouest**. (1 point)",
        "2. **Vrai**. (1 point)",
        "3. **Vrai**. (1 point)",
        "4. **Faux** : le Nord-Ouest se trouve entre le Nord et l'**Ouest**. (1 point)",
        "5. **Vrai**. (1 point)",
      ],
    },
    {
      titre: "Exercice 3 (5 points)",
      consigne: "Complète avec les mots : boussole — Est — intermédiaires — Sud — rose.",
      items: [
        "Le matin, le soleil se lève à l'……… .",
        "La ……… trouve le Nord grâce à son aiguille rouge.",
        "Le côté opposé au Nord s'appelle le ……… .",
        "Le Nord-Est et le Sud-Ouest sont des directions ……… .",
        "La ……… des vents montre les huit directions.",
      ],
      corrige: [
        "**Est** (1 point) / **boussole** (1 point) / **Sud** (1 point) / **intermédiaires** (1 point) / **rose** (1 point).",
      ],
    },
    {
      titre: "Exercice 4 (5 points)",
      consigne: "Écris au bon endroit la direction qui manque : N, S, E, O, NE, NO, SE, SO.",
      items: [
        "1. La branche du haut de la rose des vents : ………",
        "2. La direction entre le Sud et l'Ouest : ………",
        "3. La direction entre le Nord et l'Est : ………",
        "4. Le côté où le soleil se couche : ………",
        "5. La direction opposée au Nord : ………",
      ],
      corrige: [
        "1. **N** (Nord). (1 point)",
        "2. **SO** (Sud-Ouest). (1 point)",
        "3. **NE** (Nord-Est). (1 point)",
        "4. **O** (Ouest). (1 point)",
        "5. **S** (Sud). (1 point)",
      ],
    },
  ],
};

module.exports = { revision, examen };
