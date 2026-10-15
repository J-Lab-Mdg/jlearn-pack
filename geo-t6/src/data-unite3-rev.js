// data-unite3-rev.js — Révision et sujet d'examen de l'UNITÉ 3 (Séances 37 et 38)
const TOTAL = 78;

// ── SÉANCE 37 — Révision de l'unité 3 ──────────────────────────────────
const revision = {
  numero: 37, total: TOTAL,
  titre: "Révision — Unité 3 : La population malgache",
  theme: "La population malgache",
  tableau: [
    ["La répartition de la population", "La manière dont les habitants occupent le territoire ; à Madagascar, elle est très inégale."],
    ["La carte de répartition", "Une carte, lue grâce à sa légende, qui montre où les hommes sont nombreux ou rares."],
    ["La densité", "Le nombre d'habitants par kilomètre carré : population ÷ superficie."],
    ["Les zones à forte densité", "Les Hautes Terres centrales, la côte est et le nord du pays."],
    ["Les zones à faible densité", "L'Ouest et le Sud-Ouest secs, et le Grand Sud aride."],
    ["Les causes de l'inégale répartition", "Le climat et l'eau, la fertilité des terres, le relief, les villes et les routes."],
    ["Les conséquences de l'inégale répartition", "Des Hautes Terres encombrées où les terres se morcellent, des espaces de l'Ouest presque vides."],
    ["La natalité", "Le nombre de naissances pendant une année ; elle est forte à Madagascar."],
    ["La mortalité", "Le nombre de décès pendant une année ; elle baisse grâce aux soins et à la vaccination."],
    ["L'accroissement naturel", "La natalité moins la mortalité ; fort à Madagascar : la population double en une génération."],
    ["La migration", "Quitter son lieu habituel pour aller s'installer ailleurs."],
    ["L'émigration", "Le départ d'un habitant de son lieu d'origine."],
    ["L'immigration", "L'arrivée d'un nouvel habitant dans un lieu d'accueil."],
    ["Le mouvement pendulaire", "Le va-et-vient quotidien entre le domicile et le lieu de travail ou d'étude."],
    ["L'exode rural", "Le départ définitif des campagnes vers les villes (unité 4)."],
    ["Les causes des migrations", "Les causes économiques, socioculturelles et les catastrophes naturelles."],
    ["Les conséquences des migrations", "L'accroissement de la population urbaine et la domination des émigrants dans les villes."],
    ["La structure de la population", "La répartition des habitants par âge et par sexe."],
    ["La pyramide des âges", "Le dessin en barres qui classe les habitants par tranches d'âge, hommes à gauche, femmes à droite."],
    ["Une population jeune", "Une population avec beaucoup d'enfants : plus de 4 Malgaches sur 10 ont moins de quinze ans."],
    ["Les impacts de la croissance rapide", "Infrastructures insuffisantes, manque d'emploi, insécurité, pauvreté."],
    ["Population et développement", "Une croissance non préparée freine le développement ; une population instruite et soignée est une force."],
  ],
  questions: [
    ["Qu'est-ce que la répartition de la population ?", "C'est la manière dont les habitants occupent le territoire."],
    ["À quoi sert la légende d'une carte de répartition ?", "Elle explique ce que montrent les couleurs et les signes de la carte."],
    ["Qu'est-ce que la densité ? Comment la calcule-t-on ?", "C'est le nombre d'habitants par km² : on divise la population par la superficie."],
    ["Cite deux zones à forte densité de Madagascar.", "Les Hautes Terres centrales et la côte est (aussi le nord)."],
    ["Cite deux zones à faible densité.", "L'Ouest (ou Sud-Ouest) et le Grand Sud aride."],
    ["Cite deux causes de la répartition inégale.", "Le climat (pluies ou sécheresse) et la présence des villes et des routes."],
    ["Qu'est-ce que l'accroissement naturel ?", "C'est la natalité moins la mortalité."],
    ["Pourquoi la population malgache croît-elle vite ?", "Parce que la natalité est forte et que la mortalité baisse grâce aux soins."],
    ["Qu'est-ce qu'une migration ?", "C'est quitter son lieu habituel pour s'installer ailleurs."],
    ["Quelle est la différence entre émigration et immigration ?", "L'émigration est le départ d'un lieu ; l'immigration est l'arrivée dans un lieu."],
    ["Qu'est-ce que le mouvement pendulaire ?", "C'est le va-et-vient quotidien entre le domicile et le lieu de travail ou d'étude."],
    ["Cite les trois familles de causes des migrations.", "Les causes économiques, socioculturelles et les catastrophes naturelles."],
    ["Cite deux conséquences des migrations.", "L'accroissement de la population urbaine et la domination des émigrants."],
    ["Comment est la pyramide des âges de Madagascar, et que signifie-t-elle ?", "À base large et sommet fin : une population jeune."],
    ["Cite trois impacts de la croissance rapide de la population.", "Les infrastructures insuffisantes, le manque d'emploi, la pauvreté (et l'insécurité)."],
  ],
};

// ── SÉANCE 38 — Sujet d'examen T6, Unité 3 ─────────────────────────────
const examen = {
  numero: 38, total: TOTAL,
  titre: "Sujet d'examen T6 — Unité 3 : La population malgache",
  duree: "30 minutes",
  bareme: 20,
  consigneGenerale: "Lis bien chaque consigne avant de répondre.",
  exercices: [
    {
      titre: "Exercice 1 (5 points)",
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la répartition de la population ?",
        "2. Qu'est-ce que la densité ?",
        "3. Qu'est-ce que l'accroissement naturel ?",
        "4. Qu'est-ce que le mouvement pendulaire ?",
        "5. Qu'est-ce qu'une population jeune ?",
      ],
      corrige: [
        "1. C'est **la manière dont les habitants occupent le territoire**. (1 point)",
        "2. C'est **le nombre d'habitants par kilomètre carré**. (1 point)",
        "3. C'est **la natalité moins la mortalité**. (1 point)",
        "4. C'est **le va-et-vient quotidien entre le domicile et le lieu de travail ou d'étude**. (1 point)",
        "5. C'est **une population avec beaucoup d'enfants** et peu d'anciens. (1 point)",
      ],
    },
    {
      titre: "Exercice 2 (5 points)",
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La population malgache se répartit également sur tout le territoire.",
        "2. On calcule la densité en divisant la population par la superficie.",
        "3. Émigrer, c'est arriver dans un nouveau lieu.",
        "4. Celui qui fait un trajet pendulaire revient chez lui le soir.",
        "5. La pyramide des âges de Madagascar a une base étroite.",
      ],
      corrige: [
        "1. **Faux** : la répartition est très inégale. (1 point)",
        "2. **Vrai** : habitants ÷ km². (1 point)",
        "3. **Faux** : émigrer, c'est partir de chez soi ; arriver, c'est immigrer. (1 point)",
        "4. **Vrai** : c'est un trajet quotidien. (1 point)",
        "5. **Faux** : sa base est très large, signe d'une population jeune. (1 point)",
      ],
    },
    {
      titre: "Exercice 3 (5 points)",
      consigne: "Complète avec les mots : densité — immigration — accroissement naturel — jeune.",
      items: [
        "Le nombre d'habitants par kilomètre carré s'appelle la ……… .",
        "Arriver et s'installer dans un nouveau lieu, c'est l'……… .",
        "La natalité moins la mortalité, c'est l'……… .",
        "La population malgache est une population ……… .",
      ],
      corrige: [
        "1. la **densité**. (1,25 point)",
        "2. l'**immigration**. (1,25 point)",
        "3. l'**accroissement naturel**. (1,25 point)",
        "4. **jeune**. (1,25 point)",
      ],
    },
    {
      titre: "Exercice 4 (5 points)",
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les zones les plus peuplées de Madagascar sont : A. l'Ouest et le Sud — B. les Hautes Terres et la côte est — C. les sommets",
        "2. La mortalité baisse grâce : A. aux centres de santé et à la vaccination — B. aux cyclones — C. au chômage",
        "3. Une cause de migration : A. rester chez soi — B. chercher du travail — C. dormir tôt",
        "4. Une conséquence des migrations dans les villes : A. la population urbaine augmente — B. les villes se vident — C. plus personne ne bouge",
        "5. La population malgache double environ : A. chaque année — B. tous les vingt-cinq ans — C. tous les siècles",
      ],
      corrige: [
        "1. Réponse **B** : les Hautes Terres et la côte est. (1 point)",
        "2. Réponse **A** : les centres de santé et la vaccination. (1 point)",
        "3. Réponse **B** : chercher du travail. (1 point)",
        "4. Réponse **A** : la population urbaine augmente vite. (1 point)",
        "5. Réponse **B** : tous les vingt-cinq ans, une génération. (1 point)",
      ],
    },
  ],
};

module.exports = { revision, examen };
