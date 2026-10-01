// data-temoin-s4.js — Séance 4 reformulée « nouvelle maquette lisible »
// Langage très simple, phrases courtes, gabarit formule + exemples ligne par ligne.
const path = require("path");
const IMG = (f) => path.join(__dirname, "..", "images", f);

module.exports = {
  numero: 4,
  unite: "UNITÉ 1 — MÉCANIQUE",
  titre: "Le poids d'un corps et le centre de gravité",
  objectifs: [
    "Faire la différence entre la masse et le poids.",
    "Calculer le poids avec la formule P = m × g.",
    "Trouver le centre de gravité G d'un objet.",
  ],
  motsCles: ["poids", "masse", "newton", "dynamomètre", "centre de gravité", "verticale", "intensité de la pesanteur"],

  sections: [
    // ------------------------------------------------------------------
    {
      titre: "1. La masse et le poids : ce n'est pas la même chose !",
      blocs: [
        { type: "para", text: "Prends un sac de riz dans tes mains. Il contient de la matière : des grains de riz. La quantité de matière dans le sac, c'est sa masse. La masse se mesure en kilogrammes (kg), avec une balance." },
        { type: "para", text: "Maintenant, lâche le sac : il tombe ! Pourquoi ? Parce que la Terre l'attire vers le bas. Cette force d'attraction, c'est le poids. Le poids se mesure en newtons (N), avec un appareil appelé dynamomètre." },
        { type: "para", text: "Retiens bien la différence : ta masse ne change jamais, où que tu ailles. Mais ton poids change selon l'endroit où tu te trouves, parce que l'attraction n'est pas partout la même." },
        { type: "image", src: "img_t4_terre_lune.png", w: 560, h: 314, legende: "Figure 1 — Le même sac de 20 kg : son poids est 200 N sur la Terre, mais seulement 32 N sur la Lune." },
        { type: "tableau", titres: ["", "La masse", "Le poids"], lignes: [
          ["C'est quoi ?", "La quantité de matière", "La force qui attire vers le bas"],
          ["Son unité", "le kilogramme (kg)", "le newton (N)"],
          ["On la mesure avec…", "une balance", "un dynamomètre"],
          ["Ça change selon le lieu ?", "Non, jamais", "Oui (Terre, Lune…)"],
        ]},
        { type: "attention", text: "Dans la vie de tous les jours, on dit « ce sac pèse 25 kilos ». En physique, c'est faux ! Les kilogrammes mesurent la masse. Le poids, lui, se mesure en newtons." },
      ],
    },
    // ------------------------------------------------------------------
    {
      titre: "2. Comment calculer le poids ? Une formule simple",
      blocs: [
        { type: "para", text: "Le poids et la masse sont liés par une formule très simple. Pour trouver le poids, on multiplie la masse par un nombre appelé g (l'intensité de la pesanteur)." },
        { type: "formule", formule: "P = m × g", legendes: [
          [{ text: "P", bold: true, color: "2E7D32" }, { text: " = le poids, en newtons (N)" }],
          [{ text: "m", bold: true, color: "2E7D32" }, { text: " = la masse, en kilogrammes (kg)" }],
          [{ text: "g", bold: true, color: "2E7D32" }, { text: " ≈ 10 N/kg sur la Terre (et 1,6 N/kg sur la Lune)" }],
        ]},
        { type: "exemple", titre: "Exemple 1", enonce: "Un sac de riz a une masse m = 25 kg. Quel est son poids sur la Terre ?",
          image: { src: "img_t4_sac.png", w: 360, h: 247, legende: "Figure 2 — Le sac de riz de 25 kg et son poids P." },
          calcul: ["P = m × g", "P = 25 kg × 10 N/kg"],
          reponse: "P = 250 N",
          phrase: "Le poids du sac de riz est 250 newtons." },
        { type: "exemple", titre: "Exemple 2", enonce: "On emporte un bidon d'eau de 20 kg sur la Lune. Sur la Lune, g = 1,6 N/kg. Quel est son poids là-bas ?",
          calcul: ["P = m × g", "P = 20 kg × 1,6 N/kg"],
          reponse: "P = 32 N",
          phrase: "Sur la Lune, le bidon ne « pèse » plus que 32 newtons, au lieu de 200 newtons sur la Terre. Sa masse, elle, est toujours de 20 kg !" },
        { type: "para", text: "Et si on connaît le poids, mais pas la masse ? On retourne la formule : on divise le poids par g." },
        { type: "formule", formule: "m = P ÷ g", legendes: [
          [{ text: "La même formule, écrite dans l'autre sens." }],
        ]},
        { type: "exemple", titre: "Exemple 3", enonce: "Le dynamomètre indique que le poids d'un ananas est P = 4,5 N. Quelle est sa masse ?",
          calcul: ["m = P ÷ g", "m = 4,5 N ÷ 10 N/kg"],
          reponse: "m = 0,45 kg",
          phrase: "L'ananas a une masse de 0,45 kg, c'est-à-dire 450 grammes." },
        { type: "saisTu", text: "La valeur de g varie un petit peu sur Terre : environ 9,78 N/kg à l'équateur et 9,83 N/kg aux pôles. Un sac de riz « pèse » donc un tout petit peu moins à Antsiranana qu'au pôle Nord ! Pour nos calculs de 3e, g ≈ 10 N/kg suffit largement." },
      ],
    },
    // ------------------------------------------------------------------
    {
      titre: "3. Le poids se dessine avec une flèche",
      blocs: [
        { type: "para", text: "Le poids est une force. On ne la voit pas, mais on peut la dessiner ! En physique, une force se représente par une flèche appelée vecteur." },
        { type: "para", text: "Pour dessiner le poids d'un objet, il faut connaître quatre choses :" },
        { type: "puces", items: [
          [{ text: "son point de départ : ", bold: true }, { text: "un point spécial de l'objet, appelé G (le centre de gravité) ;" }],
          [{ text: "sa direction : ", bold: true }, { text: "toujours la verticale ;" }],
          [{ text: "son sens : ", bold: true }, { text: "toujours vers le bas ;" }],
          [{ text: "sa valeur : ", bold: true }, { text: "le nombre de newtons, calculé avec P = m × g." }],
        ]},
        { type: "image", src: "img_t4_poids.png", w: 540, h: 336, legende: "Figure 3 — Le poids de la brique : une flèche qui part de G et pointe vers le bas." },
      ],
    },
    // ------------------------------------------------------------------
    {
      titre: "4. Le centre de gravité G : le point d'équilibre",
      blocs: [
        { type: "para", text: "Le centre de gravité G, c'est le point où tout le poids de l'objet semble rassemblé. Si tu poses l'objet en équilibre sur un doigt exactement sous G, il ne tombe pas !" },
        { type: "para", text: "Pour les objets simples et réguliers, G est facile à trouver :" },
        { type: "image", src: "img_t4_centres.png", w: 620, h: 233, legende: "Figure 4 — Le point G d'une boule, d'une brique, d'une règle et d'un anneau." },
        { type: "para", text: "Regarde bien l'anneau : son point G est au milieu du trou, là où il n'y a pas de matière ! Le centre de gravité n'est donc pas toujours « dans » l'objet." },
        { type: "para", text: "Et pour un objet de forme quelconque, comme un morceau de carton découpé ? On utilise la méthode du fil à plomb : c'est l'expérience ci-dessous." },
        { type: "saisTu", text: "Les porteuses malgaches placent instinctivement leur fardeau pour que son centre de gravité soit exactement au-dessus de leur colonne vertébrale : ainsi le poids est porté sans effort des bras. Des études ont montré qu'elles peuvent porter jusqu'à 20 % de leur propre masse… presque sans dépenser plus d'énergie !" },
      ],
    },
  ],

  // ------------------------------------------------------------------
  experience: {
    titre: "Expérience à la maison : trouve le point G d'un carton",
    intro: "Découpe un carton en forme de Madagascar et trouve son centre de gravité, comme un vrai physicien !",
    image: { src: "img_t4_filaplomb.png", w: 600, h: 305, legende: "Figure 5 — Les 3 étapes de la méthode du fil à plomb." },
    materiel: [
      "un morceau de carton (découpe la forme de Madagascar, ou n'importe quelle forme) ;",
      "une épingle ou un clou fin ;",
      "un fil avec un petit caillou attaché au bout (c'est le « fil à plomb ») ;",
      "un stylo et une règle.",
    ],
    etapes: [
      "Perce deux petits trous près du bord du carton, à deux endroits différents (appelle-les A et B).",
      "Suspends le carton par le trou A avec l'épingle. Accroche aussi le fil à plomb à l'épingle. Attends que tout s'arrête de bouger, puis trace au stylo le trait vertical indiqué par le fil.",
      "Recommence la même chose avec le trou B : tu obtiens un deuxième trait.",
      "Le point où les deux traits se croisent, c'est G ! Pour vérifier, pose le carton sur la pointe d'un stylo, exactement sous ce point.",
    ],
    observation: "Le carton tient en équilibre sur la pointe du stylo, sans tomber.",
    conclusion: "Le point de croisement est bien le centre de gravité G : c'est là que s'applique le poids du carton.",
  },

  // ------------------------------------------------------------------
  // Exercices (lettrage a, b, d — jamais c)
  exercices: [
    {
      points: 4,
      consigne: "QCM — Recopie la bonne réponse pour chaque question (1 point par réponse).",
      items: [
        "1. Le poids d'un objet s'applique : a) en haut de l'objet   b) au centre de gravité G   d) au sol.",
        "2. La direction du poids est : a) horizontale   b) verticale   d) quelconque.",
        "3. Le point G d'une boule est : a) à son centre   b) sur sa surface   d) en bas.",
        "4. Le point G d'un anneau est : a) dans la matière   b) hors de la matière   d) inexistant.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true },
         { text: " ; 3. " }, { text: "a", cle: true }, { text: " ; 4. " }, { text: "b", cle: true },
         { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un bidon de 25 kg est posé au sol (g = 10 N/kg). Calcule son poids, puis décris le vecteur poids que tu dessinerais (échelle : 1 cm ↔ 100 N).",
      items: [],
      corrige: [
        [{ text: "P = m × g" }],
        [{ text: "P = 25 kg × 10 N/kg" }],
        [{ text: "P = 250 N", cle: true }],
        [{ text: "Le vecteur part de " }, { text: "G", cle: true }, { text: ", direction verticale, sens vers le bas, longueur " }, { text: "2,5 cm", cle: true }, { text: " (car 250 N ÷ 100 N = 2,5 cm)." }],
      ],
    },
    {
      points: 3,
      consigne: "Pourquoi un bus chargé sur le toit se renverse-t-il plus facilement dans les virages qu'un bus chargé en soute (en bas) ?",
      items: [],
      corrige: [
        [{ text: "La charge placée en hauteur " }, { text: "élève le centre de gravité", cle: true }, { text: " du bus. Dans un virage, le poids sort plus vite de la base d'appui : " }, { text: "l'équilibre est moins stable", cle: true }, { text: "." }],
      ],
    },
  ],
};
