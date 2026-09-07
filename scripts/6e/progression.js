// Progression annuelle — Mathématiques 6e, Collection J-Learn
// Croisement du programme officiel, du RAPS 6e et de la progression disciplinaire.
// Aucune date calendaire (règle 11 du skill) : découpage en Périodes I à V.
// 4 h/semaine × 25 semaines ≈ 100 séances d'une heure.

module.exports = [
  {
    id: "P1",
    romain: "I",
    titre: "Nombres entiers et décimaux — Addition, soustraction, multiplication",
    theme: "Activités numériques",
    chapitres: [
      { nom: "Les nombres entiers naturels", seances: 6 },
      { nom: "Les nombres décimaux", seances: 6 },
      { nom: "Addition et soustraction", seances: 4 },
      { nom: "La multiplication", seances: 4 },
    ],
  },
  {
    id: "P2",
    romain: "II",
    titre: "Division — Droites, longueurs et premières figures",
    theme: "Activités numériques et géométriques",
    chapitres: [
      { nom: "La division euclidienne", seances: 5 },
      { nom: "La division décimale", seances: 5 },
      { nom: "Droites, parallèles et perpendiculaires", seances: 5 },
      { nom: "Mesurer des longueurs", seances: 5 },
    ],
  },
  {
    id: "P3",
    romain: "III",
    titre: "Figures usuelles, symétrie et fractions",
    theme: "Activités géométriques et numériques",
    chapitres: [
      { nom: "Cercles, triangles et quadrilatères", seances: 6 },
      { nom: "La symétrie axiale", seances: 5 },
      { nom: "Les fractions", seances: 7 },
    ],
  },
  {
    id: "P4",
    romain: "IV",
    titre: "Proportionnalité, aires, angles et données",
    theme: "Activités numériques et de mesure",
    chapitres: [
      { nom: "Proportionnalité et pourcentages", seances: 6 },
      { nom: "Les aires", seances: 5 },
      { nom: "Les angles", seances: 4 },
      { nom: "Organisation de données", seances: 4 },
    ],
  },
  {
    id: "P5",
    romain: "V",
    titre: "Solides, volumes, masses et durées",
    theme: "Activités géométriques et de mesure",
    chapitres: [
      { nom: "Le pavé droit et le cylindre", seances: 6 },
      { nom: "Volume d'un pavé droit", seances: 5 },
      { nom: "Masses et durées", seances: 6 },
    ],
  },
];
