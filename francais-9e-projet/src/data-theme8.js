// =============================================================
// FRANCAIS 9e - THEME 8 : LE MARCHE
// Séances 22 à 24 (/186) — RAPE T3 2025-2026, Période 5
// Procédé : la narration - Indicateurs - Imparfait - Interrogation
// =============================================================
const TH8 = {
  numero: 8,
  nom: "Le marché",
  source: "RAPE T3 2025-2026 — Période 5",
  periodes: [
    ["Procédés et techniques", "La narration : raconter une scène de marché."],
    ["Sémantico-lexical", "Les acteurs du commerce, les lieux, les marchandises, le prix et la qualité, les expressions du commerce."],
    ["Morphosyntaxe", "Les indicateurs temporels, chronologiques et spatiaux ; les verbes du marché ; l'imparfait ; la phrase interrogative."],
    ["Phonie-graphie", "L'accent aigu et l'accent grave : é, è."],
  ],
  objectifs: [
    "Nommer les acteurs, les lieux et les marchandises du marché.",
    "Raconter une scène de marché dans l'ordre.",
    "Situer dans le temps et dans l'espace avec les indicateurs.",
    "Poser des questions fermées et ouvertes.",
    "Employer l'imparfait pour décrire une habitude passée.",
  ],
  seances: [
    // ---------- SÉANCE 22 ----------
    {
      n: 22, titre: "Les acteurs et les marchandises du marché", titreFiche: "Nommer les acteurs et les marchandises du marché.",
      sd: "Expression Orale",
      objectif: "Nommer les acteurs, les lieux et les marchandises du marché",
      support: "Image d'un marché malgache, étiquettes des marchandises, prix fictifs.",
      image: { file: "theme8_marche.png", w: 1100, h: 560, legende: "Au marché : le marchand et le client discutent le prix." },
      lecon: {
        titre: "1. Les acteurs et les marchandises du marché",
        blocs: [
          { st: "A. Les acteurs", txt: "le marchand — le vendeur — le grossiste — le détaillant — l'épicier — le client." },
          { st: "B. Les lieux et les marchandises", txt: "l'épicerie, la boucherie, l'étal ; la tomate, la pomme de terre, le riz, l'huile." },
        ],
        aretenir: "Au marché, celui qui vend est le marchand et celui qui achète est le client ; le prix se discute.",
      },
      revision: {
        ens: "« Où achète-t-on du riz et des légumes ? » - Révision du lexique des aliments (thème 1). Le professeur fait rappeler trois noms d'aliments.",
        app: "Les élèves citent les aliments connus et le lieu d'achat.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'un marché et demande : « Qui vend ? Qui achète ? »",
        app: "Les élèves nomment les personnes visibles sur l'image.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les acteurs et les marchandises du marché.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Le marchand vend des tomates. Le client demande le prix. »",
        app: "Les élèves relèvent les noms des personnes, des lieux et des marchandises.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots en trois groupes.",
        app: "Les élèves classent : acteurs, lieux, marchandises.",
        technique: {
          sous: "I. Trois groupes de mots",
          points: [
            "Les acteurs : le marchand, le vendeur, le grossiste, le détaillant, l'épicier, le client.",
            "Les lieux : le marché, l'épicerie, la boucherie, l'étal.",
            "Les marchandises : la tomate, la pomme de terre, le riz, l'huile, le savon.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait jouer une scène de marché.",
        app: "Deux élèves jouent le marchand et le client, les autres observent.",
        technique: {
          sous: "II. Les expressions du commerce",
          points: [
            "Le client demande : « Combien coûte la tomate ? »",
            "Le marchand répond : « Deux mille ariary le kilo. »",
            "Le client marchande : « C'est trop cher, faites un effort. »",
            "On conclut : « Je prends un kilo, s'il vous plaît. »",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique et jouer la scène.",
        app: "Les élèves écrivent et jouent.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : épicier, tomate, boucherie, client, riz.",
            "Complétez : « Combien ... ce kilo de pommes de terre ? »",
            "Jouez une scène de marché en quatre répliques.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et le dialogue.",
        app: "Chaque élève produit un dialogue correct.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois acteurs du commerce et deux lieux.",
            "Écrivez deux répliques d'un dialogue au marché.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Classez ces mots en acteurs, lieux ou marchandises : épicier — tomate — boucherie — client — riz — détaillant.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Écrivez un dialogue de quatre répliques entre un marchand et un client (question sur le prix, réponse, marchandage, achat).", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "acteurs : épicier, client, détaillant ; lieux : boucherie ; marchandises : tomate, riz", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : « Combien coûte la tomate ? — Deux mille ariary le kilo. — C'est trop cher. — Je vous la laisse à mille huit cents. »", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 23 ----------
    {
      n: 23, titre: "Les indicateurs et l'imparfait", titreFiche: "Situer dans le temps et dans l'espace et employer l'imparfait.",
      sd: "Grammaire",
      objectif: "Employer les indicateurs temporels, chronologiques et spatiaux et l'imparfait",
      support: "Phrases à compléter, image d'un marché avec des étals.",
      lecon: {
        titre: "2. Les indicateurs et l'imparfait",
        blocs: [
          { st: "A. Les trois familles d'indicateurs", txt: "temporels (hier, demain) — chronologiques (d'abord, ensuite) — spatiaux (devant, derrière)." },
          { st: "B. L'imparfait", txt: "Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient. Je vendais, nous vendions, ils vendaient." },
        ],
        aretenir: "L'imparfait exprime une habitude ou une description dans le passé ; les indicateurs situent le récit.",
      },
      revision: {
        ens: "« Comment dit-on ce que l'on faisait autrefois ? » - Révision du présent et du passé composé. Le professeur fait rappeler la formation du passé composé.",
        app: "Les élèves rappellent la formation du passé composé.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Autrefois, ma mère allait au marché tous les samedis. » et demande : « Est-ce terminé ou habituel ? »",
        app: "Les élèves répondent que c'était une habitude.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va situer dans le temps et dans l'espace et employer l'imparfait.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Hier, devant l'épicerie, le marchand vendait des tomates. »",
        app: "Les élèves relèvent les indicateurs et la forme du verbe.",
      },
      analyse: {
        ens: "Le professeur fait classer les indicateurs et dégager la règle de l'imparfait.",
        app: "Les élèves classent les indicateurs en trois groupes.",
        technique: {
          sous: "I. Les trois familles d'indicateurs",
          points: [
            "Temporels : aujourd'hui, hier, demain, dans trois jours.",
            "Chronologiques : d'abord, ensuite, après, enfin.",
            "Spatiaux : devant, derrière, au milieu de, à côté de.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer à l'imparfait.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. L'imparfait",
          points: [
            "Terminaisons : -ais, -ais, -ait, -ions, -iez, -aient.",
            "vendre : je vendais, nous vendions, ils vendaient.",
            "L'imparfait exprime une habitude ou une description dans le passé.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait compléter et conjuguer.",
        app: "Les élèves complètent et conjuguent.",
        technique: {
          sous: "III. Application",
          points: [
            "Complétez avec un indicateur : « ... , le marchand range son étal. » (hier)",
            "Mettez à l'imparfait : « Le client marchande. »",
            "Décrivez en deux phrases le marché de votre quartier autrefois.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les indicateurs et l'imparfait.",
        app: "Chaque élève complète et conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez un indicateur de chaque famille.",
            "Mettez à l'imparfait : « Nous allons au marché. »",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Citez un indicateur temporel, un indicateur chronologique et un indicateur spatial.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Mettez à l'imparfait : « Le client marchande. Nous allons au marché. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "temporel : hier ; chronologique : ensuite ; spatial : devant", r: true }, "."],
        ["Ex. 2 — ", { t: "Le client marchandait. Nous allions au marché.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 24 ----------
    {
      n: 24, titre: "La phrase interrogative", titreFiche: "Poser des questions fermées et ouvertes.",
      sd: "Grammaire",
      objectif: "Former les questions fermées et ouvertes et employer les formules de politesse",
      support: "Dialogues de marché, étiquettes des mots interrogatifs.",
      lecon: {
        titre: "3. La phrase interrogative",
        blocs: [
          { st: "A. Les deux sortes de questions", txt: "question fermée : Est-ce que vous vendez du riz ? — question ouverte : Quel est le prix ?" },
          { st: "B. Les mots interrogatifs", txt: "est-ce que — quel, quelle — pourquoi — quand — combien ; politesse : s'il vous plaît." },
        ],
        aretenir: "La question fermée appelle oui ou non ; la question ouverte demande une précision.",
      },
      revision: {
        ens: "« Comment pose-t-on une question ? » - Révision de la phrase affirmative. Le professeur fait rappeler l'ordre S+V+C.",
        app: "Les élèves transforment une phrase affirmative en question.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Est-ce que la tomate est fraîche ? Pourquoi ce prix ? » et demande quelle différence il y a.",
        app: "Les élèves remarquent que la première appelle oui ou non.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va poser des questions fermées et ouvertes.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Est-ce que vous vendez du riz ? Quel est le prix ? Combien de kilos voulez-vous ? »",
        app: "Les élèves relèvent les mots interrogatifs.",
      },
      analyse: {
        ens: "Le professeur fait distinguer les deux sortes de questions.",
        app: "Les élèves classent les questions en fermées et ouvertes.",
        technique: {
          sous: "I. Questions fermées et questions ouvertes",
          points: [
            "Question fermée : la réponse est oui ou non (Est-ce que vous vendez du riz ?).",
            "Question ouverte : elle commence par quel, pourquoi, quand, combien (Quel est le prix ?).",
            "Les formules de politesse : s'il te plaît, s'il vous plaît, merci.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler les mots interrogatifs.",
        app: "Un élève énonce la règle, un autre donne un exemple.",
        technique: {
          sous: "II. Les mots interrogatifs",
          points: [
            "est-ce que : pour une question fermée.",
            "quel, quelle, quels, quelles : pour demander une précision.",
            "pourquoi, quand, combien : pour demander la cause, le moment, la quantité.",
          ],
        },
      },
      application: {
        ens: "Le professeur faire former les deux sortes de questions.",
        app: "Les élèves transforment et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Transformez en question fermée : « Vous avez des tomates. »",
            "Complétez : « ... coûte ce kilo de riz ? » (combien)",
            "Écrivez deux questions à poser à un marchand, avec s'il vous plaît.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les deux sortes de questions.",
        app: "Chaque élève forme une question de chaque sorte.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Posez une question fermée sur la qualité d'une marchandise.",
            "Posez une question ouverte sur le prix.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Transformez en question fermée : « Vous avez des tomates. Le riz est frais. »", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec un mot interrogatif : « ... coûte ce kilo de riz ? ... voulez-vous de kilos ? »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "Est-ce que vous avez des tomates ? Est-ce que le riz est frais ?", r: true }, "."],
        ["Ex. 2 — ", { t: "Combien / Combien", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 8
  // ============================================================
  annexe: {
    theme: 8,
    nom: "Le marché",
    conjugaison: [
      {
        verbe: "Les verbes du marché (vendre, acheter, marchander)",
        temps: "Imparfait de l'indicatif",
        quand: "Pour décrire une habitude passée ou une scène en train de se dérouler autrefois.",
        exemplesQuand: [
          "Autrefois, ma mère allait au marché tous les samedis.",
          "Le marchand vendait des tomates devant l'épicerie.",
        ],
        comment: "On prend le radical de la 1re personne du pluriel au présent et on ajoute : -ais, -ais, -ait, -ions, -iez, -aient.",
        tableau: [
          "je vendais — tu vendais — il/elle vendait",
          "nous vendions — vous vendiez — ils/elles vendaient",
          "acheter : j'achetais, nous achetions, ils achetaient",
        ],
        pourquoi: "L'imparfait est le temps de la description et de l'habitude : il permet de raconter comment les choses se passaient avant.",
        pieges: [
          ["nous vendions écrit nous vendons", "nous vendions (imparfait) / nous vendons (présent)"],
          ["je marchande hier", "je marchandais hier"],
        ],
      },
      {
        verbe: "Prendre et demander",
        temps: "Présent de l'indicatif",
        quand: "Pour demander et choisir au marché, dans un dialogue.",
        exemplesQuand: [
          "Je prends un kilo de tomates.",
          "Nous demandons le prix.",
        ],
        comment: "prendre est du 3e groupe : je prends, tu prends, il prend, nous prenons, vous prenez, ils prennent.",
        tableau: [
          "je prends — tu prends — il/elle prend",
          "nous prenons — vous prenez — ils/elles prennent",
          "demander (1er groupe) : je demande, nous demandons, ils demandent",
        ],
        pourquoi: "Ces deux verbes sont au cœur du dialogue commercial : on demande le prix, puis on prend la marchandise.",
        pieges: [
          ["je prend", "je prends"],
          ["ils prendent", "ils prennent"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "La phrase interrogative",
        regle: "La question fermée appelle oui ou non (est-ce que) ; la question ouverte utilise quel, pourquoi, quand, combien.",
        exemple: "Est-ce que vous vendez du riz ? Quel est le prix ?",
        contre: "Ne pas mélanger les deux : « Est-ce que quel est le prix ? » est incorrect.",
      },
      {
        notion: "Les indicateurs",
        regle: "Les indicateurs temporels situent dans le temps, les chronologiques ordonnent, les spatiaux situent dans l'espace.",
        exemple: "Hier, d'abord devant l'épicerie, le marchand a installé son étal.",
        contre: "Ne pas confondre devant (espace) et avant (temps).",
      },
      {
        notion: "Les formules de politesse",
        regle: "s'il te plaît (tu), s'il vous plaît (vous), merci, excusez-moi.",
        exemple: "Un kilo de riz, s'il vous plaît.",
        contre: "Ne pas écrire « s'il te plait » sans accent sur le i de plaît.",
      },
    ],
    orthographe: [
      {
        notion: "é et è",
        regle: "L'accent aigu é marque le son [e] fermé ; l'accent grave è marque le son [ɛ] ouvert.",
        exemples: ["acheter", "préférer", "l'épicerie", "mère"],
        pieges: [
          ["acheter écrit achetter", "acheter s'écrit avec un seul t"],
          ["épicerie écrit epicerie", "épicerie prend un accent aigu"],
        ],
      },
      {
        notion: "L'accord de quel",
        regle: "quel s'accorde en genre et en nombre avec le nom : quel, quelle, quels, quelles.",
        exemples: ["quel prix", "quelle marchandise", "quels légumes"],
        pieges: [
          ["quel est la qualité", "quelle est la qualité"],
          ["quel tomates", "quelles tomates"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les acteurs", mots: "le marchand — le vendeur — le grossiste — le détaillant — l'épicier — le client" },
      { champ: "Les lieux", mots: "le marché — l'épicerie — la boucherie — l'étal — le stand" },
      { champ: "Les marchandises", mots: "la tomate — la pomme de terre — le riz — l'huile — le savon — l'oignon" },
      { champ: "Le commerce", mots: "le prix — le kilo — la monnaie — marchander — la qualité — vendre — acheter" },
      { champ: "Les indicateurs", mots: "aujourd'hui — hier — demain — d'abord — ensuite — devant — derrière — au milieu de" },
    ],
  },
};

module.exports = { theme8: TH8, annexe8: TH8.annexe };
