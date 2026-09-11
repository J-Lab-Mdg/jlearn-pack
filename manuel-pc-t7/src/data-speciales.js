// data-speciales.js — T7 : révisions (11, 22, 32), examens d'unité (12, 23, 33),
// révision+examen combinés (26) et examen blanc final (34)

// ============================================================ S11 — RÉVISION UNITÉ I
const S11 = {
  numero: 11, total: 34, unite: "I", type: "revision",
  titre: "Révision de l'Unité I — Matière",
  image: "images/img_unite1.png",
  imageLegende: "La matière : masse volumique, mélanges et transformations",
  recap: [
    {
      ref: "Séances 1 à 3 — Masse volumique, densité, flottabilité",
      motsCles: ["masse volumique", "densité", "flotte", "coule"],
      points: [
        "La masse volumique d'une matière est la masse d'une unité de volume : masse volumique = masse ÷ volume (g/cm³ ou kg/L).",
        "Eau : 1 g/cm³ ; huile : 0,9 ; fer : 7,8 ; or : 19,3.",
        "La densité est le rapport à l'eau : nombre sans unité (eau = 1).",
        "Un corps flotte si sa masse volumique est inférieure à celle de l'eau (d < 1) ; il coule si elle est supérieure (d > 1).",
        "Un objet creux rempli d'air (bateau, bouteille bouchée) flotte : sa masse volumique moyenne est faible.",
      ],
    },
    {
      ref: "Séances 4 et 5 — Mélanges, dissolution, miscibilité",
      motsCles: ["homogène", "hétérogène", "solvant", "soluté", "solution", "miscibles"],
      points: [
        "Mélange homogène : on ne distingue pas les constituants (eau salée, air). Mélange hétérogène : on les distingue (eau boueuse, eau + huile).",
        "Dissolution : le soluté (sel) se disperse dans le solvant (eau) pour donner une solution ; la masse se conserve.",
        "Quand le solvant ne peut plus dissoudre, la solution est saturée.",
        "Liquides miscibles : eau + sirop ; non miscibles : eau + huile.",
      ],
    },
    {
      ref: "Séances 6 à 8 — Les techniques de séparation",
      motsCles: ["décantation", "filtration", "évaporation", "distillation", "tamisage", "pressage"],
      points: [
        "Décantation : laisser reposer, le plus dense se dépose (ou les liquides non miscibles s'étagent).",
        "Filtration : le filtre retient les particules solides ; le liquide clair est le filtrat.",
        "Évaporation : le solvant part en vapeur, le soluté cristallise (salines).",
        "Distillation : ébullition + condensation : on récupère le solvant pur ET le soluté.",
        "Tamisage : tri des solides selon la taille des grains. Pressage : extraction d'un liquide d'un solide (jus, lait de coco).",
      ],
    },
    {
      ref: "Séances 9 et 10 — Transformations physiques et chimiques",
      motsCles: ["transformation physique", "transformation chimique", "combustion", "oxydation"],
      points: [
        "Transformation physique : la matière change de forme ou d'état mais reste la même (fusion, déformation, fragmentation, dissolution) ; souvent réversible.",
        "Transformation chimique : de nouvelles substances apparaissent (combustion, rouille/oxydation, précipitation, neutralisation) ; généralement irréversible.",
        "Signes d'une transformation chimique : changement de couleur, gaz, précipité, chaleur/lumière.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Calculs de masse volumique et de densité :",
      items: [
        "1. Un objet : masse 540 g, volume 200 cm³. Calcule sa masse volumique.",
        "2. Donne sa densité. Flotte-t-il ou coule-t-il ?",
        "3. Un litre d'un liquide pèse 0,8 kg : masse volumique ? position par rapport à l'eau ?",
        "4. Rappelle la masse volumique de l'eau.",
        "5. Pourquoi la densité n'a-t-elle pas d'unité ?",
      ],
      corrige: [
        [{ text: "1. 540 ÷ 200 = " }, { text: "2,7 g/cm³", cle: true }, { text: "." }],
        [{ text: "2. d = " }, { text: "2,7 : il coule", cle: true }, { text: " (d > 1)." }],
        [{ text: "3. " }, { text: "0,8 kg/L : il flotterait au-dessus de l'eau", cle: true }, { text: " (non miscible)." }],
        [{ text: "4. " }, { text: "1 g/cm³ (1 kg/L)", cle: true }, { text: "." }],
        [{ text: "5. C'est " }, { text: "un rapport de deux masses volumiques", cle: true }, { text: " : les unités se simplifient." }],
      ],
    },
    {
      points: 5,
      consigne: "Vocabulaire des mélanges. Complète :",
      items: [
        "1. Dans l'eau sucrée : l'eau est le ………, le sucre le ………, l'eau sucrée la ……… .",
        "2. Eau + huile : mélange ……… ; liquides ……… .",
        "3. Une solution qui ne peut plus dissoudre est ……… .",
        "4. 20 g de sel dans 180 g d'eau : masse de la solution ?",
        "5. L'air est-il un mélange homogène ou hétérogène ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Solvant, soluté, solution", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Hétérogène ; non miscibles", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Saturée", cle: true }, { text: "." }],
        [{ text: "4. 180 + 20 = " }, { text: "200 g : la masse se conserve", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Homogène", cle: true }, { text: " : on ne distingue pas ses gaz." }],
      ],
    },
    {
      points: 5,
      consigne: "Choisis la technique de séparation adaptée :",
      items: [
        "1. Récolter le sel de l'eau de mer.",
        "2. Enlever le sable d'une eau boueuse.",
        "3. Obtenir de l'eau pure à partir d'eau salée.",
        "4. Séparer le gravier du sable.",
        "5. Extraire le lait de coco du coco râpé.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Évaporation", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Décantation puis filtration", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Distillation", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Tamisage", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Pressage", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Physique ou chimique ? Classe et justifie brièvement :",
      items: [
        "1. La glace qui fond.",
        "2. Le papier qui brûle.",
        "3. Le clou qui rouille.",
        "4. Le sucre qui se dissout.",
        "5. Cite deux signes d'une transformation chimique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Physique : changement d'état", cle: true }, { text: ", l'eau reste de l'eau." }],
        [{ text: "2. " }, { text: "Chimique : combustion", cle: true }, { text: ", cendres et gaz nouveaux." }],
        [{ text: "3. " }, { text: "Chimique : oxydation", cle: true }, { text: ", la rouille est une substance nouvelle." }],
        [{ text: "4. " }, { text: "Physique : dissolution", cle: true }, { text: ", le sucre reste du sucre." }],
        [{ text: "5. " }, { text: "Changement de couleur, dégagement de gaz", cle: true }, { text: " (ou précipité, chaleur/lumière)." }],
      ],
    },
  ],
};

// ============================================================ S12 — EXAMEN No 1
const S12 = {
  numero: 12, total: 34, unite: "I", type: "examen",
  titre: "Examen de l'Unité I — Matière",
  sousTitre: "SUJET D'EXAMEN No 1",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Donne la formule de la masse volumique et son unité. (1 pt)",
        "2. Qu'est-ce que la densité d'une substance ? (1 pt)",
        "3. Donne la définition d'un mélange homogène. (1 pt)",
        "4. Quelle est la différence entre transformation physique et chimique ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Masse volumique = masse ÷ volume ; en g/cm³ ou kg/L", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Le rapport de sa masse volumique à celle de l'eau ; sans unité", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Un mélange dont on " }, { text: "ne distingue pas les constituants à l'œil nu", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Physique : " }, { text: "la matière reste la même ; chimique : de nouvelles substances apparaissent", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. Un corps de densité 0,5 coule dans l'eau.",
        "2. Le filtrat d'une eau salée filtrée reste salé.",
        "3. La distillation comprend une ébullition puis une condensation.",
        "4. La combustion est une transformation physique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : d < 1, il flotte. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : le sel dissous traverse le filtre. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est une transformation chimique. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Techniques de séparation. Associe chaque mélange à la bonne technique (décantation, filtration, évaporation, distillation) : (1 pt par bonne réponse)",
      items: [
        "1. Eau + huile.",
        "2. Café moulu dans l'eau chaude.",
        "3. Eau de mer, pour récolter le sel.",
        "4. Eau salée, pour obtenir de l'eau potable.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Décantation", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Filtration", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Évaporation", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Distillation", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Expérience. Ravaka verse 15 g de sel dans 135 g d'eau et remue jusqu'à disparition complète du sel.",
      items: [
        "1. Nomme le solvant, le soluté et la solution. (1,5 pt)",
        "2. Quelle est la masse de la solution ? Justifie. (1,5 pt)",
        "3. Comment Ravaka peut-elle faire réapparaître le sel ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Solvant : " }, { text: "l'eau", cle: true }, { text: " ; soluté : " }, { text: "le sel", cle: true }, { text: " ; solution : " }, { text: "l'eau salée", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 135 + 15 = " }, { text: "150 g : la masse du soluté se conserve", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Par " }, { text: "évaporation de l'eau", cle: true }, { text: " : le sel cristallise. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Problème. Un bijoutier vérifie un lingotin : masse 386 g ; plongé dans une éprouvette contenant 50 mL d'eau, le niveau monte à 70 mL.",
      items: [
        "1. Quel est le volume du lingotin ? (1 pt)",
        "2. Calcule sa masse volumique. (1,5 pt)",
        "3. L'or a une masse volumique de 19,3 g/cm³. Le lingotin est-il en or pur ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. 70 − 50 = " }, { text: "20 cm³", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. 386 ÷ 20 = " }, { text: "19,3 g/cm³", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Oui : sa masse volumique est exactement celle de l'or", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
  ],
};

// ============================================================ S22 — RÉVISION UNITÉ II
const S22 = {
  numero: 22, total: 34, unite: "II", type: "revision",
  titre: "Révision de l'Unité II — Électricité et magnétisme",
  image: "images/img_unite2.png",
  imageLegende: "Circuits, lois électriques, aimants et électroaimants",
  recap: [
    {
      ref: "Séances 13 et 14 — Circuits et schémas",
      motsCles: ["série", "dérivation", "mixte", "schéma normalisé"],
      points: [
        "Série : une seule boucle ; une panne arrête tout. Dérivation : plusieurs branches ; chaque récepteur est indépendant. Mixte : combinaison des deux.",
        "Le schéma normalisé utilise les symboles internationaux (pile : trait long +, trait court − ; lampe : cercle et croix).",
        "Piles en série (+ contre −) : les tensions s'ajoutent : 3 × 1,5 V = 4,5 V ; une pile inversée retranche sa tension.",
      ],
    },
    {
      ref: "Séances 15 à 17 — Les quatre lois des circuits",
      motsCles: ["additivité", "unicité", "tension", "intensité"],
      points: [
        "Tension (volts, voltmètre en dérivation) : ADDITIVE en série (U = U1 + U2), UNIQUE en dérivation (U = U1 = U2).",
        "Intensité (ampères, ampèremètre en série) : UNIQUE en série (I partout), ADDITIVE en dérivation (I = I1 + I2).",
        "Méthode des problèmes : identifier le montage, choisir la loi, calculer, vérifier la cohérence.",
      ],
    },
    {
      ref: "Séances 18 et 19 — Aimants et champ magnétique",
      motsCles: ["pôles", "attraction", "répulsion", "champ magnétique", "boussole"],
      points: [
        "L'aimant attire le fer et l'acier seulement ; ses deux pôles (Nord, Sud) sont à ses extrémités.",
        "Pôles différents : attraction ; pôles identiques : répulsion. Impossible d'isoler un pôle.",
        "La limaille dessine les lignes de champ : elles sortent du pôle Nord, entrent au pôle Sud, serrées là où le champ est fort.",
        "La boussole s'aligne sur le champ magnétique ; loin de tout aimant, elle suit le champ terrestre et indique le nord.",
      ],
    },
    {
      ref: "Séances 20 et 21 — Bobines et électroaimants",
      motsCles: ["bobine", "électroaimant", "noyau de fer", "moteur", "sonnerie"],
      points: [
        "Une bobine parcourue par un courant se comporte comme un aimant : faces Nord et Sud, inversables avec le courant ; aimant temporaire.",
        "L'électroaimant (bobine + noyau de fer) est beaucoup plus puissant ; il se commande avec le courant.",
        "Le moteur électrique transforme l'électricité en rotation ; la sonnerie utilise un électroaimant et un contact qui se coupe à chaque frappe.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Les circuits. Un circuit mixte comporte une pile, L1 en série, puis L2 et L3 en dérivation.",
      items: [
        "1. Que se passe-t-il si L1 grille ?",
        "2. Que se passe-t-il si L2 grille ?",
        "3. Où placer un interrupteur pour commander tout le circuit ?",
        "4. Trois piles de 1,5 V en série : tension totale ?",
        "5. Dessine (ou décris) le symbole normalisé de la pile.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Tout s'éteint", cle: true }, { text: " : L1 est sur le passage obligatoire." }],
        [{ text: "2. " }, { text: "Seule L2 s'éteint", cle: true }, { text: " : L1 et L3 restent allumées." }],
        [{ text: "3. " }, { text: "En série sur la boucle principale", cle: true }, { text: " (avant le premier nœud)." }],
        [{ text: "4. " }, { text: "4,5 V", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Un trait long (+) et un trait court épais (−)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Les lois des circuits. Applique la bonne loi :",
      items: [
        "1. En série : pile 9 V, U1 = 4 V. Calcule U2.",
        "2. En dérivation : pile 6 V. Que valent U1 et U2 ?",
        "3. En série : I = 0,3 A avant L1. Après L2 ?",
        "4. En dérivation : I1 = 0,4 A, I2 = 0,3 A. Courant principal ?",
        "5. Comment se branchent le voltmètre et l'ampèremètre ?",
      ],
      corrige: [
        [{ text: "1. U2 = 9 − 4 = " }, { text: "5 V", cle: true }, { text: " (additivité)." }],
        [{ text: "2. U1 = U2 = " }, { text: "6 V", cle: true }, { text: " (unicité)." }],
        [{ text: "3. " }, { text: "0,3 A", cle: true }, { text: " (unicité en série)." }],
        [{ text: "4. I = 0,4 + 0,3 = " }, { text: "0,7 A", cle: true }, { text: " (additivité)." }],
        [{ text: "5. Voltmètre " }, { text: "en dérivation", cle: true }, { text: " ; ampèremètre " }, { text: "en série", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Aimants et champ magnétique :",
      items: [
        "1. Quels matériaux l'aimant attire-t-il ?",
        "2. Pôle Nord face à pôle Nord : que se passe-t-il ?",
        "3. Comment s'appellent les lignes dessinées par la limaille ?",
        "4. Dans quel sens sont-elles orientées ?",
        "5. Pourquoi la boussole indique-t-elle le nord ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le fer et l'acier", cle: true }, { text: " seulement." }],
        [{ text: "2. " }, { text: "Répulsion", cle: true }, { text: " : pôles identiques." }],
        [{ text: "3. " }, { text: "Les lignes de champ", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Elles sortent du pôle Nord et entrent au pôle Sud", cle: true }, { text: "." }],
        [{ text: "5. Elle s'aligne sur " }, { text: "le champ magnétique terrestre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Bobines et électroaimants. Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "1. Une bobine sans courant attire les trombones.",
        "2. Le noyau de fer amplifie le champ de la bobine.",
        "3. On ne peut pas éteindre un électroaimant.",
        "4. Le moteur électrique transforme l'électricité en mouvement.",
        "5. Dans la sonnerie, le courant se coupe à chaque frappe du marteau.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : sans courant, pas de magnétisme." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : il suffit de couper le courant." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Vrai", cle: true }, { text: " : c'est ce qui entretient la vibration." }],
      ],
    },
  ],
};

// ============================================================ S23 — EXAMEN No 2
const S23 = {
  numero: 23, total: 34, unite: "II", type: "examen",
  titre: "Examen de l'Unité II — Électricité et magnétisme",
  sousTitre: "SUJET D'EXAMEN No 2",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Qu'est-ce qu'un circuit mixte ? (1 pt)",
        "2. Énonce la loi d'additivité de la tension. (1 pt)",
        "3. Énonce la loi d'additivité de l'intensité. (1 pt)",
        "4. Qu'est-ce qu'un électroaimant ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Un circuit qui " }, { text: "combine série et dérivation", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. En série, " }, { text: "la tension du générateur est la somme des tensions des récepteurs", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. En dérivation, " }, { text: "l'intensité principale est la somme des intensités des branches", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Une bobine enroulée sur un noyau de fer", cle: true }, { text: ", aimant commandé par le courant. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. En dérivation, toutes les branches reçoivent la même tension.",
        "2. En série, l'intensité diminue après chaque lampe.",
        "3. Deux pôles Sud se repoussent.",
        "4. Les lignes de champ sortent du pôle Sud.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: " : loi d'unicité. (1 pt)" }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : elle est la même en tout point. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : pôles identiques. (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : elles sortent du pôle Nord. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Calculs. (1 pt par bonne réponse)",
      items: [
        "1. Quatre piles de 1,5 V en série, bien orientées : tension totale ?",
        "2. En série : pile 6 V, U1 = 2,5 V. Calcule U2.",
        "3. En dérivation : I = 0,8 A, I1 = 0,5 A. Calcule I2.",
        "4. En série : l'ampèremètre indique 0,2 A près de la pile. Et entre les deux lampes ?",
      ],
      corrige: [
        [{ text: "1. 4 × 1,5 = " }, { text: "6 V", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. U2 = 6 − 2,5 = " }, { text: "3,5 V", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. I2 = 0,8 − 0,5 = " }, { text: "0,3 A", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "0,2 A", cle: true }, { text: " : unicité de l'intensité. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Circuit mixte. Une pile de 12 V alimente L1 (en série), puis L2 et L3 en dérivation. On donne U1 = 5 V, I = 0,6 A, I2 = 0,4 A.",
      items: [
        "1. Calcule la tension aux bornes de L2 et de L3. (1,5 pt)",
        "2. Calcule I3. (1,5 pt)",
        "3. Quelle intensité traverse L1 ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. 12 − 5 = 7 V ; U2 = U3 = " }, { text: "7 V", cle: true }, { text: " (additivité puis unicité). (1,5 pt)" }],
        [{ text: "2. I3 = 0,6 − 0,4 = " }, { text: "0,2 A", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "0,6 A", cle: true }, { text: " : tout le courant principal. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Magnétisme. Faly fabrique un électroaimant : 40 spires de fil isolé autour d'un gros clou, branchées sur une pile plate.",
      items: [
        "1. Cite les trois éléments et le rôle du noyau. (1,5 pt)",
        "2. L'électroaimant attire 8 trombones. Donne deux moyens d'en attirer plus. (1,5 pt)",
        "3. Que se passe-t-il quand Faly débranche la pile ? Pourquoi ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Bobine (fil isolé), noyau (clou), pile ; le noyau concentre et amplifie le champ", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. " }, { text: "Augmenter le nombre de spires ; augmenter la tension (piles en série)", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Les trombones tombent : sans courant, plus de champ magnétique", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S26 — RÉVISION + EXAMEN No 3 (Unité III)
const S26 = {
  numero: 26, total: 34, unite: "III", type: "revisionExamen",
  titre: "Révision et Examen de l'Unité III — Mouvement",
  sousTitre: "SUJET D'EXAMEN No 3",
  image: "images/img_unite3.png",
  imageLegende: "Le mouvement : relevés de positions et types de mouvements rectilignes",
  recap: [
    {
      ref: "Séance 24 — Le mobile et le relevé de positions",
      motsCles: ["mobile", "trajectoire", "positions", "intervalles réguliers"],
      points: [
        "Le mobile est l'objet dont on étudie le mouvement ; sa trajectoire est la ligne qu'il décrit (droite : mouvement rectiligne).",
        "On relève ses positions M0, M1, M2… à des intervalles de temps égaux, et on les rassemble dans un tableau.",
        "Les intervalles réguliers permettent de comparer les distances parcourues à chaque durée.",
      ],
    },
    {
      ref: "Séance 25 — Uniforme, accéléré, retardé",
      motsCles: ["uniforme", "accéléré", "retardé", "distances"],
      points: [
        "Mouvement uniforme : distances égales à chaque intervalle : vitesse constante.",
        "Mouvement accéléré : distances croissantes : la vitesse augmente (fruit qui tombe, descente).",
        "Mouvement retardé : distances décroissantes : la vitesse diminue (freinage, montée).",
        "Un trajet réel enchaîne souvent les trois phases : démarrage, croisière, freinage.",
      ],
    },
  ],
  consignes: [
    "Réponds d'abord aux exercices de révision oralement, puis traite le sujet ci-dessous par écrit.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Qu'est-ce qu'un mobile ? (1 pt)",
        "2. Qu'est-ce qu'un mouvement rectiligne ? (1 pt)",
        "3. Pourquoi relever les positions à intervalles de temps égaux ? (1,5 pt)",
        "4. À quoi reconnaît-on un mouvement uniforme sur un relevé ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Un objet dont on étudie le mouvement", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Un mouvement dont " }, { text: "la trajectoire est une ligne droite", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Pour pouvoir " }, { text: "comparer les distances parcourues pendant des durées égales", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "4. " }, { text: "Les distances entre positions successives sont égales", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse ; corrige les affirmations fausses)",
      items: [
        "1. Dans un mouvement accéléré, les distances par seconde augmentent.",
        "2. Un véhicule qui freine a un mouvement uniforme.",
        "3. M0 désigne la position de départ.",
        "4. Les intervalles de temps du relevé peuvent être quelconques.",
        "5. Une pirogue à allure constante en ligne droite a un mouvement rectiligne uniforme.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : retardé. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : ils doivent être égaux. (1 pt)" }],
        [{ text: "5. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Analyse de relevés. Chaque relevé est fait toutes les secondes ; identifie le mouvement : (des calculs sont attendus)",
      items: [
        "1. Positions : 0 ; 20 ; 40 ; 60 ; 80 cm. (1,5 pt)",
        "2. Positions : 0 ; 5 ; 15 ; 30 ; 50 cm. (1,5 pt)",
        "3. Positions : 0 ; 30 ; 50 ; 62 ; 68 cm. (2 pt)",
      ],
      corrige: [
        [{ text: "1. Distances 20 ; 20 ; 20 ; 20 : " }, { text: "mouvement uniforme", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. Distances 5 ; 10 ; 15 ; 20 : " }, { text: "mouvement accéléré", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Distances 30 ; 20 ; 12 ; 6 : " }, { text: "mouvement retardé", cle: true }, { text: ". (2 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Problème. Une bille descend une gouttière : on marque sa position chaque seconde : M0 = 0 cm ; M1 = 6 cm ; M2 = 18 cm ; M3 = 36 cm.",
      items: [
        "1. Calcule les distances parcourues à chaque seconde. (2 pt)",
        "2. Identifie le type de mouvement et justifie. (1,5 pt)",
        "3. La gouttière est ensuite posée à plat : la bille parcourt 10 cm chaque seconde. Quel est ce mouvement ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "6 ; 12 ; 18 cm", cle: true }, { text: " : (6−0, 18−6, 36−18). (2 pt)" }],
        [{ text: "2. " }, { text: "Accéléré : les distances augmentent", cle: true }, { text: " à chaque seconde. (1,5 pt)" }],
        [{ text: "3. " }, { text: "Rectiligne uniforme : distances égales", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
  ],
};

// ============================================================ S32 — RÉVISION UNITÉ IV
const S32 = {
  numero: 32, total: 34, unite: "IV", type: "revision",
  titre: "Révision de l'Unité IV — Énergie",
  image: "images/img_unite4.png",
  imageLegende: "Sources, formes, stockage et transformations de l'énergie",
  recap: [
    {
      ref: "Séance 27 — Concept et sources d'énergie",
      motsCles: ["énergie", "sources", "renouvelable", "non renouvelable"],
      points: [
        "L'énergie se reconnaît à ses effets : produire mouvement, chaleur ou lumière.",
        "Sources : Soleil, eau en mouvement (hydraulique), vent (éolienne), biomasse, uranium (nucléaire), combustibles fossiles.",
        "Renouvelables : soleil, eau, vent, biomasse gérée ; non renouvelables : pétrole, charbon de terre, gaz, uranium.",
      ],
    },
    {
      ref: "Séance 28 — Le stockage de l'énergie",
      motsCles: ["stockage", "pile", "batterie", "barrage"],
      points: [
        "Le stockage met l'énergie en réserve : pile et batterie (forme chimique ; la batterie est rechargeable).",
        "Le barrage retient l'eau en hauteur : réserve d'énergie libérée à la demande dans les turbines.",
        "Le stockage rend utilisables les sources irrégulières (solaire la nuit grâce à la batterie).",
      ],
    },
    {
      ref: "Séance 29 — Les formes d'énergie",
      motsCles: ["électrique", "thermique", "chimique", "mécanique", "rayonnante"],
      points: [
        "Électrique (courant), thermique (chaleur), chimique (aliments, bois, piles), mécanique (mouvement, réserve de position), rayonnante (lumière).",
        "Une situation peut combiner plusieurs formes : le feu = thermique + rayonnante.",
      ],
    },
    {
      ref: "Séances 30 et 31 — Transformations et projets",
      motsCles: ["transformation", "chaîne énergétique", "four solaire", "moulin à eau"],
      points: [
        "Les appareils transforment l'énergie : chauffe-eau et fer (électrique → thermique), panneau solaire (rayonnante → électrique), groupe électrogène (chimique → mécanique → électrique).",
        "L'énergie ne disparaît jamais : elle se transforme ; une partie s'échappe souvent en chaleur.",
        "Démarche technologique : besoin → cahier des charges → conception → réalisation → essai → amélioration.",
        "Four solaire : noir qui absorbe, couvercle transparent (effet de serre), réflecteurs. Moulin : pales régulières, axe libre.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Sources d'énergie. Réponds :",
      items: [
        "1. À quoi reconnaît-on l'énergie ?",
        "2. Cite trois sources renouvelables.",
        "3. Cite deux sources non renouvelables.",
        "4. Quelle source alimente le barrage d'Andekaleka ?",
        "5. Pourquoi la biomasse mal gérée devient-elle non renouvelable ?",
      ],
      corrige: [
        [{ text: "1. À " }, { text: "ses effets : mouvement, chaleur, lumière", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Soleil, vent, eau en mouvement", cle: true }, { text: " (biomasse gérée)." }],
        [{ text: "3. " }, { text: "Pétrole, charbon de terre", cle: true }, { text: " (gaz, uranium)." }],
        [{ text: "4. " }, { text: "L'énergie hydraulique", cle: true }, { text: " : l'eau de la rivière Vohitra." }],
        [{ text: "5. Parce que " }, { text: "la forêt coupée sans replanter ne se reconstitue plus", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Formes d'énergie. Donne la forme principale :",
      items: [
        "1. Le courant du secteur.",
        "2. Le charbon de bois.",
        "3. La chute d'eau.",
        "4. La marmite bouillante.",
        "5. Le rayon de soleil.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Électrique", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Chimique", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Mécanique", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Thermique", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Rayonnante", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Stockage et transformations :",
      items: [
        "1. Sous quelle forme la batterie stocke-t-elle l'énergie ?",
        "2. Comment le barrage stocke-t-il l'énergie ?",
        "3. Écris la chaîne du panneau solaire.",
        "4. Écris la chaîne du groupe électrogène.",
        "5. Pourquoi les moteurs chauffent-ils ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Chimique", cle: true }, { text: ", restituée en électricité." }],
        [{ text: "2. " }, { text: "En retenant l'eau en hauteur", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Rayonnante → électrique", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Chimique → mécanique → électrique", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Une partie de l'énergie s'échappe en chaleur", cle: true }, { text: " : transformation jamais parfaite." }],
      ],
    },
    {
      points: 5,
      consigne: "Projets technologiques. Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "1. La démarche technologique commence par la réalisation.",
        "2. L'intérieur du four solaire est noir pour absorber le rayonnement.",
        "3. Les réflecteurs du four éloignent les rayons.",
        "4. Le moulin à eau transforme mécanique → mécanique.",
        "5. Après un essai raté, on abandonne le projet.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle commence par l'identification du besoin." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : ils les concentrent vers l'intérieur." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Faux", cle: true }, { text: " : on améliore et on ressaie." }],
      ],
    },
  ],
};

// ============================================================ S33 — EXAMEN No 4
const S33 = {
  numero: 33, total: 34, unite: "IV", type: "examen",
  titre: "Examen de l'Unité IV — Énergie",
  sousTitre: "SUJET D'EXAMEN No 4",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Comment reconnaît-on la présence d'énergie ? (1 pt)",
        "2. Qu'est-ce qu'une source renouvelable ? (1 pt)",
        "3. Cite les cinq formes d'énergie. (1 pt)",
        "4. Énonce la règle d'or : que devient l'énergie dans les appareils ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. À ses effets : " }, { text: "production de mouvement, de chaleur ou de lumière", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Une source qui " }, { text: "se reconstitue naturellement", cle: true }, { text: " (soleil, vent, eau…). (1 pt)" }],
        [{ text: "3. " }, { text: "Électrique, thermique, chimique, mécanique, rayonnante", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Elle ne disparaît jamais : " }, { text: "elle se transforme", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. Le pétrole est une source renouvelable.",
        "2. La batterie est rechargeable, la pile ordinaire non.",
        "3. Le panneau solaire transforme la lumière en électricité.",
        "4. L'eau du barrage stockée en hauteur ne contient aucune énergie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : il s'épuise. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : rayonnante → électrique. (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est une réserve d'énergie mécanique. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Chaînes de transformation. Écris chaque chaîne avec les formes d'énergie : (1 pt par bonne réponse)",
      items: [
        "1. Le fer à repasser électrique.",
        "2. La lampe de poche (ampoule).",
        "3. Le groupe électrogène.",
        "4. Le moteur du ventilateur.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Électrique → thermique", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Électrique → rayonnante (+ thermique)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Chimique → mécanique → électrique", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Électrique → mécanique", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Le village solaire. Un village installe des panneaux solaires et des batteries pour éclairer l'école le soir.",
      items: [
        "1. Pourquoi les batteries sont-elles indispensables ? (1,5 pt)",
        "2. Décris la chaîne complète, du soleil du matin à la lampe du soir. (1,5 pt)",
        "3. Cite un geste pour économiser la réserve. (1 pt)",
      ],
      corrige: [
        [{ text: "1. Parce que " }, { text: "le soleil est absent le soir : sans stockage, pas de lumière", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. " }, { text: "Rayonnante (soleil) → électrique (panneau) → chimique (batterie) → électrique → rayonnante (lampe)", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Éteindre en sortant", cle: true }, { text: " (ou lampes économes). (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Projet technologique. Le four solaire de ton groupe doit chauffer l'eau de 15 °C en une heure ; au premier essai, il ne gagne que 8 °C.",
      items: [
        "1. Quelle transformation d'énergie le four réalise-t-il ? (1 pt)",
        "2. Rappelle le rôle du noir, du couvercle transparent et des réflecteurs. (1,5 pt)",
        "3. Le cahier des charges est-il respecté ? Que faut-il faire ensuite ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Rayonnante → thermique", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Le noir absorbe, le transparent piège la chaleur (effet de serre), les réflecteurs concentrent les rayons", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Non (8 < 15) : améliorer (réflecteurs, isolation, orientation) puis refaire l'essai", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
  ],
};

// ============================================================ S34 — EXAMEN BLANC FINAL
const S34 = {
  numero: 34, total: 34, unite: null, type: "examen",
  titre: "Examen blanc final — Tout le programme de T7",
  sousTitre: "EXAMEN BLANC DE FIN D'ANNÉE",
  consignes: [
    "Cet examen couvre les quatre unités de l'année : Matière ; Électricité et magnétisme ; Mouvement ; Énergie.",
    "Durée conseillée : une séance complète. Gère bien ton temps : ne reste pas bloqué sur une question.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "MATIÈRE — Questions. (1 pt par bonne réponse)",
      items: [
        "1. Un objet : masse 300 g, volume 120 cm³. Calcule sa masse volumique.",
        "2. Flotte-t-il ou coule-t-il dans l'eau ? Justifie.",
        "3. Quelle technique sépare l'eau et l'huile ?",
        "4. Quelle technique donne de l'eau pure à partir d'eau salée ?",
        "5. Le clou qui rouille : transformation physique ou chimique ?",
      ],
      corrige: [
        [{ text: "1. 300 ÷ 120 = " }, { text: "2,5 g/cm³", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Il coule : 2,5 > 1", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "La décantation", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "La distillation", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Chimique : la rouille est une substance nouvelle", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "ÉLECTRICITÉ — Un circuit mixte : pile 9 V ; L1 en série (U1 = 3 V) ; L2 et L3 en dérivation ; I = 0,5 A ; I2 = 0,3 A.",
      items: [
        "1. Calcule U2 et U3. (1,5 pt)",
        "2. Calcule I3. (1,5 pt)",
        "3. Que se passe-t-il si L1 grille ? (1 pt)",
        "4. Et si L3 grille ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. 9 − 3 = 6 V ; U2 = U3 = " }, { text: "6 V", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. I3 = 0,5 − 0,3 = " }, { text: "0,2 A", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Tout s'éteint", cle: true }, { text: " : L1 est en série. (1 pt)" }],
        [{ text: "4. " }, { text: "L1 et L2 restent allumées", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "MAGNÉTISME — Réponds : (1 pt par bonne réponse)",
      items: [
        "1. Que se passe-t-il entre deux pôles Nord face à face ?",
        "2. D'où sortent les lignes de champ d'un aimant ?",
        "3. Sur quoi la boussole s'aligne-t-elle en pleine nature ?",
        "4. Qu'est-ce qui différencie l'électroaimant de la bobine seule ?",
        "5. Quelle transformation d'énergie le moteur électrique réalise-t-il ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Répulsion", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Du pôle Nord", cle: true }, { text: " (elles entrent au pôle Sud). (1 pt)" }],
        [{ text: "3. Sur " }, { text: "le champ magnétique terrestre", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Le noyau de fer, qui amplifie le champ", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Électrique → mécanique", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "MOUVEMENT — Un relevé de positions toutes les secondes donne : M0 = 0 ; M1 = 25 cm ; M2 = 45 cm ; M3 = 60 cm ; M4 = 70 cm.",
      items: [
        "1. Qui appelle-t-on « mobile » dans une telle étude ? (1 pt)",
        "2. Calcule les distances parcourues à chaque seconde. (2 pt)",
        "3. Identifie le type de mouvement et justifie. (2 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'objet dont on étudie le mouvement", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "25 ; 20 ; 15 ; 10 cm", cle: true }, { text: ". (2 pt)" }],
        [{ text: "3. " }, { text: "Mouvement retardé : les distances diminuent", cle: true }, { text: " à durées égales. (2 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "ÉNERGIE — Réponds : (1 pt par bonne réponse)",
      items: [
        "1. Cite deux sources renouvelables et une non renouvelable.",
        "2. Quelle forme d'énergie contiennent les aliments ?",
        "3. Écris la chaîne de transformation du panneau solaire.",
        "4. Comment le barrage stocke-t-il l'énergie ?",
        "5. Quelle est la première étape de la démarche technologique ?",
      ],
      corrige: [
        [{ text: "1. Renouvelables : " }, { text: "soleil, vent (ou eau, biomasse gérée)", cle: true }, { text: " ; non renouvelable : " }, { text: "pétrole", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Chimique", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Rayonnante → électrique", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "En retenant l'eau en hauteur", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Identifier le besoin", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

module.exports = {
  S11, S12, S22, S23, S26, S32, S33, S34,
  revisions: [S11, S22, S32],
  examens: [S12, S23, S26, S33, S34],
};
