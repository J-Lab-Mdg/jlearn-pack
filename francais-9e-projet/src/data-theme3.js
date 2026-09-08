// =============================================================
// FRANCAIS 9e - THEME 3 : LES ACTIVITES QUOTIDIENNES (RAPE T3 P3)
// Séances 7 à 9 (/186) - RAPE 2025-2026 période 3
// =============================================================
const TH3 = {
  numero: 3,
  nom: "Le temps et l'environnement scolaire",
  source: "RAPE T3 2025-2026 — Période 3",
  periodes: [
    ["Procédés et techniques", "La description."],
    ["Sémantico-lexical", "Le lexique du temps ; les activités de la journée en ordre chronologique (Le matin… Le soir… / D'abord, ensuite, après) ; le lexique de l'environnement scolaire (bâtiments scolaires, point d'eau)."],
    ["Morphosyntaxe", "Le genre féminin / masculin ; le présent de être, avoir, faire ; vouloir, pouvoir, devoir au présent ; la fonction des mots (sujet, verbe, complément) et l'ordre S + V + C ; mobilisation du présent et de l'imparfait."],
    ["Phonie-graphie", "Les orthographes du son [o] : eau, ot, aux, ô (seau, pot, taux, tôt) ; le son [u] : ou (sou, chou)."],
  ],
  objectifs: [
    "Nommer les activités de la journée et dire ce que l'on veut, peut ou doit faire.",
    "Conjuguer au présent les verbes vouloir, pouvoir et devoir.",
    "Former le féminin des noms et repérer les orthographes des sons [o] et [u].",
    "Construire et analyser la phrase simple S+V+C.",
    "Lire un emploi du temps, rédiger un court règlement.",
  ],
  seances: [
    // ---------- SÉANCE 7 ----------
    {
      n: 7, titre: "Dire ce que je veux, ce que je peux, ce que je dois faire", titreFiche: "Dire ce que je veux, ce que je peux, ce que je dois faire.",
      sd: "Conjugaison",
      objectif: "S'exprimer sur ses activités et ses obligations avec vouloir / pouvoir / devoir",
      support: "Images d'activités (réveil, école, corvées, sport, devoirs).",
      image: { file: "theme3_temps_ecole.png", w: 1100, h: 560, legende: "La journée : le matin, le midi, le soir ; l'école a ses lieux." },
      revision: {
        ens: "« Que fais-tu le matin avant de venir à l'école ? » - Révision des verbes du 1er groupe au présent. Le tableau des verbes en -er est rappelé.",
        app: "Chaque élève nomme une activité du matin. Un élève rappelle la conjugaison de manger au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur montre une image d'élève portant un seau d'eau et demande : « Veux-tu porter cela ? Peux-tu porter cela ? Dois-tu porter cela ? »",
        app: "Les élèves répondent spontanément et remarquent que les trois verbes n'ont pas le même sens.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va apprendre trois verbes utiles pour parler de ce que l'on veut, peut ou doit faire.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je veux aider. Je peux aider. Je dois aider. »",
        app: "Les élèves lisent les trois phrases et soulignent les trois verbes différents.",
      },
      analyse: {
        ens: "Le professeur fait distinguer les trois sens.",
        app: "Les élèves comparent et classent : vouloir = le désir ; pouvoir = la possibilité ; devoir = l'obligation.",
        technique: {
          sous: "I. Les trois verbes et leur sens",
          points: [
            "vouloir = le désir, l'envie (Je veux jouer).",
            "pouvoir = la possibilité, la capacité (Je peux courir).",
            "devoir = l'obligation, la nécessité (Je dois étudier).",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer les trois verbes au présent.",
        app: "Un élève écrit la conjugaison au tableau, les autres vérifient sur leur cahier.",
        technique: {
          sous: "II. Conjugaison au présent",
          points: [
            "vouloir : je veux, tu veux, il veut, nous voulons, vous voulez, ils veulent",
            "pouvoir : je peux, tu peux, il peut, nous pouvons, vous pouvez, ils peuvent",
            "devoir : je dois, tu dois, il doit, nous devons, vous devez, ils doivent",
            "Ces trois verbes sont irréguliers : ils ne suivent pas le modèle des verbes en -er.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et employer les trois verbes.",
        app: "Les élèves conjuguent et construisent des phrases.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez vouloir, pouvoir, devoir au présent avec nous et vous.",
            "Complétez : Je ... aider ma mère. Tu ... courir vite. Il ... faire ses devoirs.",
            "Dites une chose que vous voulez faire, une que vous pouvez faire, une que vous devez faire.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison et l'emploi des trois verbes.",
        app: "Chaque élève conjugue et produit une phrase correcte.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez vouloir et devoir au présent (je, il, nous).",
            "Complétez avec vouloir, pouvoir ou devoir : « Nous ... respecter le règlement. »",
          ],
        },
      },
    },

    // ---------- SÉANCE 8 ----------
    {
      n: 8, titre: "Le genre des noms et les sons [o] / [u]", titreFiche: "Le genre des noms et les sons [o] / [u].",
      sd: "Orthographe",
      objectif: "Former le féminin des noms et distinguer les sons [o] et [u]",
      support: "Paires de noms (ami/amie, acteur/actrice), mots contenant [o] et [u].",
      revision: {
        ens: "« Comment dit-on le féminin de grand ? » - Révision du féminin des adjectifs. Le professeur rappelle les terminaisons -e, -euse, -rice.",
        app: "Les élèves donnent le féminin de quelques adjectifs connus.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit « un ami » et demande : « Et une fille, comment dit-on ? »",
        app: "Les élèves répondent « une amie » et remarquent le e ajouté.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va former le féminin des noms et distinguer deux sons proches.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « un ami / une amie », « un acteur / une actrice », « le dos / la rue ».",
        app: "Les élèves observent les transformations et entendent la différence entre [o] (dos) et [u] (rue).",
      },
      analyse: {
        ens: "Le professeur fait dégager la règle du féminin et la différence des deux sons.",
        app: "Les élèves classent les noms selon la façon de former le féminin.",
        technique: {
          sous: "I. Le féminin des noms",
          points: [
            "En général on ajoute un e : un ami / une amie.",
            "Si le nom se termine déjà par e, il ne change pas : un élève / une élève.",
            "-teur devient souvent -trice : un acteur / une actrice.",
            "-ien devient -ienne : un musicien / une musicienne.",
            "Certains noms changent de mot : un homme / une femme.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler les règles et les deux sons.",
        app: "Un élève énonce une règle, un autre donne un exemple.",
        technique: {
          sous: "II. Les sons [o] et [u]",
          points: [
            "[o] s'écrit eau, ot, aux, ô : seau, pot, taux, tôt.",
            "[u] s'écrit ou : sou, chou, loup, sous.",
            "Pour distinguer : [o] est ouvert (seau, pot) ; [u] se dit les lèvres en avant (sou, chou).",
          ],
        },
      },
      application: {
        ens: "Le professeur fait former des féminins et identifier les sons.",
        app: "Les élèves écrivent les féminins et classent les mots selon le son entendu.",
        technique: {
          sous: "III. Application",
          points: [
            "Donnez le féminin : un ami, un acteur, un élève, un musicien.",
            "Classez selon le son [o] ou [u] : seau, sou, pot, chou, tôt, loup.",
            "Écrivez une phrase avec un nom au féminin.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la formation du féminin et la distinction des sons.",
        app: "Chaque élève écrit le féminin demandé et classe les mots.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Donnez le féminin : un acteur, un musicien, un élève.",
            "Classez selon le son [o] ou [u] : pot, chou, tôt.",
          ],
        },
      },
    },

    // ---------- SÉANCE 9 ----------
    {
      n: 9, titre: "La phrase simple sujet + verbe + complément", titreFiche: "La phrase simple sujet + verbe + complément.",
      sd: "Grammaire",
      objectif: "Construire et analyser la phrase simple S+V+C",
      support: "Phrases simples, étiquettes mots (sujet, verbe, complément).",
      revision: {
        ens: "« Qui fait l'action dans : Le chat dort ? » - Révision du sujet et du verbe. Le professeur rappelle que le sujet commande l'accord.",
        app: "Les élèves identifient le sujet et le verbe de phrases courtes.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit « Mange. » et demande : « Cette phrase est-elle complète ? »",
        app: "Les élèves répondent qu'il manque qui mange et quoi.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va construire et analyser la phrase simple S+V+C.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « L'élève lit un livre. »",
        app: "Les élèves identifient : L'élève = sujet, lit = verbe, un livre = complément.",
      },
      analyse: {
        ens: "Le professeur fait dégager les trois constituants.",
        app: "Les élèves analysent des phrases et placent les étiquettes.",
        technique: {
          sous: "I. Les trois constituants",
          points: [
            "Le sujet : qui ou quoi fait l'action (L'élève).",
            "Le verbe : l'action ou l'état (lit).",
            "Le complément : ce qui complète le verbe (un livre).",
            "L'ordre normal est : Sujet + Verbe + Complément.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler la structure S+V+C.",
        app: "Un élève énonce la structure et donne un exemple.",
        technique: {
          sous: "II. La phrase simple",
          points: [
            "Une phrase simple contient un seul verbe conjugué.",
            "Structure : Sujet + Verbe + Complément (L'élève lit un livre).",
            "Le complément peut être supprimé : L'élève lit.",
            "Le sujet et le verbe s'accordent toujours.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait construire et analyser des phrases.",
        app: "Les élèves construisent des phrases S+V+C et les analysent.",
        technique: {
          sous: "III. Application",
          points: [
            "Analysez : « Ma mère prépare le repas. » (sujet, verbe, complément)",
            "Construisez une phrase S+V+C avec le verbe manger.",
            "Complétez : « Les enfants ... (verbe) ... (complément). »",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie l'analyse et la construction.",
        app: "Chaque élève analyse une phrase et en construit une.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Analysez : « Le professeur explique la leçon. »",
            "Construisez une phrase S+V+C.",
          ],
        },
      },
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 3
  // ============================================================
  annexe: {
    theme: 3,
    nom: "Le temps et l'environnement scolaire",
    conjugaison: [
      {
        verbe: "vouloir, pouvoir, devoir",
        temps: "Présent de l'indicatif",
        quand: "Pour exprimer le désir, la possibilité ou l'obligation au moment où l'on parle.",
        exemplesQuand: [
          "Je veux aider ma mère.",
          "Je peux porter ce seau.",
          "Nous devons respecter le règlement.",
        ],
        comment: "Ces trois verbes sont irréguliers : on mémorise leurs formes, elles ne suivent pas le modèle des verbes en -er.",
        tableau: [
          "vouloir : je veux — tu veux — il/elle veut — nous voulons — vous voulez — ils/elles veulent",
          "pouvoir : je peux — tu peux — il/elle peut — nous pouvons — vous pouvez — ils/elles peuvent",
          "devoir : je dois — tu dois — il/elle doit — nous devons — vous devez — ils/elles doivent",
        ],
        pourquoi: "Ces trois verbes sont très fréquents : ils permettent d'exprimer la volonté, la capacité et l'obligation dans presque toutes les situations de la journée.",
        pieges: [
          ["je veuxe, je pouvons", "je veux, nous pouvons"],
          ["il voule, il doive", "il veut, il doit"],
        ],
      },
      {
        verbe: "Les verbes pronominaux (se lever, se laver)",
        temps: "Présent de l'indicatif",
        quand: "Pour raconter les activités que l'on fait sur soi-même au cours de la journée.",
        exemplesQuand: [
          "Je me lève à six heures.",
          "Tu te laves les mains.",
          "Ils se couchent tôt.",
        ],
        comment: "Le pronom réfléchi (me, te, se, nous, vous, se) se place juste avant le verbe conjugué.",
        tableau: [
          "je me lève — tu te lèves — il/elle se lève",
          "nous nous levons — vous vous levez — ils/elles se lèvent",
          "devant une voyelle : il s'habille, elle s'assoit",
        ],
        pourquoi: "Les verbes pronominaux sont indispensables pour décrire sa journée : se lever, se laver, s'habiller, se coucher.",
        pieges: [
          ["je lève à six heures", "je me lève à six heures"],
          ["il se habille", "il s'habille"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le féminin des noms",
        regle: "En général on ajoute un e ; -teur devient -trice ; -ien devient -ienne.",
        exemple: "un ami / une amie ; un acteur / une actrice ; un musicien / une musicienne.",
        contre: "On n'écrit pas « une ami » ni « une acteure ».",
      },
      {
        notion: "La phrase simple S+V+C",
        regle: "Une phrase simple contient un seul verbe conjugué, dans l'ordre sujet + verbe + complément.",
        exemple: "L'élève (S) lit (V) un livre (C).",
        contre: "Une phrase qui contient deux verbes conjugués n'est plus une phrase simple.",
      },
      {
        notion: "vouloir / pouvoir / devoir",
        regle: "vouloir = le désir ; pouvoir = la possibilité ; devoir = l'obligation.",
        exemple: "Je veux jouer. Je peux courir. Je dois étudier.",
        contre: "Ne pas confondre les trois sens ni les conjuguer comme des verbes en -er.",
      },
    ],
    orthographe: [
      {
        notion: "Les sons [o] et [u]",
        regle: "Le son [o] s'écrit eau, ot, aux, ô. Le son [u] s'écrit ou.",
        exemples: ["seau", "pot", "taux", "tôt", "sou", "chou", "loup"],
        pieges: [
          ["« loup » prononcé [lup]", "ou se prononce [u] : loup se dit [lu], comme sou et chou"],
          ["confondre seau et sou", "[o] est ouvert (seau, pot, tôt), [u] se dit les lèvres en avant (sou, chou)"],
        ],
      },
      {
        notion: "Le féminin : ajouter un e",
        regle: "Au féminin, on ajoute généralement un e final au nom.",
        exemples: ["un ami / une amie", "un chat / une chatte", "un lion / une lionne"],
        pieges: [
          ["une ami", "une amie"],
          ["une acteure", "une actrice"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les moments de la journée", mots: "le matin — le midi — l'après-midi — le soir — la nuit — aujourd'hui — hier — demain" },
      { champ: "L'ordre chronologique", mots: "d'abord — ensuite — après — puis — enfin — avant — pendant" },
      { champ: "L'environnement scolaire", mots: "le bâtiment scolaire — la salle de classe — la cour — le point d'eau — les latrines — le bureau du directeur — le terrain de sport" },
      { champ: "Les obligations", mots: "devoir — il faut — être obligé de — respecter — ranger — aider" },
    ],
  },
};

// ---- leçon, exercices et corrigé (structure attendue par assemble.js) ----
TH3.seances[0].lecon = {
  titre: "1. Vouloir, pouvoir et devoir au présent",
  blocs: [
    { st: "A. Le sens des trois verbes", txt: "vouloir = le désir — pouvoir = la possibilité — devoir = l'obligation." },
    { st: "B. La conjugaison", txt: "je veux / je peux / je dois — nous voulons / nous pouvons / nous devons — ils veulent / ils peuvent / ils doivent." },
  ],
  aretenir: "Vouloir exprime le désir, pouvoir la possibilité, devoir l'obligation. Ces trois verbes sont irréguliers.",
};
TH3.seances[0].exercices = [
  { t: "Exercice 1 (10 pts)", q: "Complétez avec vouloir, pouvoir ou devoir : Je ... aider ma mère. Tu ... courir vite. Nous ... respecter le règlement.", pts: 10 },
  { t: "Exercice 2 (10 pts)", q: "Conjuguez vouloir au présent avec je, nous, ils.", pts: 10 },
];
TH3.seances[0].corrige = [
  ["Ex. 1 — ", { t: "veux / peux / devons", r: true }, " (3,33 pt chacun)."],
  ["Ex. 2 — ", { t: "je veux, nous voulons, ils veulent", r: true }, "."],
];
TH3.seances[1].lecon = {
  titre: "2. Le féminin des noms et les sons [o] / [u]",
  blocs: [
    { st: "A. Former le féminin", txt: "un ami / une amie — un acteur / une actrice — un musicien / une musicienne — un élève / une élève." },
    { st: "B. Les sons [o] et [u]", txt: "[o] s'écrit o, ô, au, eau : dos, hôtel, eau, beau. [u] s'écrit u, et la graphie ou se prononce [u] : loup, sous." },
  ],
  aretenir: "Au féminin on ajoute généralement un e ; [o] et [u] sont deux sons différents qu'il ne faut pas confondre.",
};
TH3.seances[1].exercices = [
  { t: "Exercice 1 (10 pts)", q: "Donnez le féminin : un ami, un acteur, un musicien, un élève.", pts: 10 },
  { t: "Exercice 2 (10 pts)", q: "Classez selon le son [o] ou [u] : dos, rue, eau, loup, beau, mur.", pts: 10 },
];
TH3.seances[1].corrige = [
  ["Ex. 1 — ", { t: "une amie, une actrice, une musicienne, une élève", r: true }, " (2,5 pts chacun)."],
  ["Ex. 2 — ", { t: "[o] : dos, eau, beau — [u] : rue, loup, mur", r: true }, "."],
];
TH3.seances[2].lecon = {
  titre: "3. La phrase simple : sujet + verbe + complément",
  blocs: [
    { st: "A. Les trois constituants", txt: "L'élève (sujet) + lit (verbe) + un livre (complément)." },
    { st: "B. La phrase simple", txt: "Elle ne contient qu'un seul verbe conjugué ; le sujet et le verbe s'accordent toujours." },
  ],
  aretenir: "La phrase simple suit l'ordre Sujet + Verbe + Complément et ne contient qu'un seul verbe conjugué.",
};
TH3.seances[2].exercices = [
  { t: "Exercice 1 (10 pts)", q: "Analysez : « Le professeur explique la leçon. » (sujet, verbe, complément)", pts: 10 },
  { t: "Exercice 2 (10 pts)", q: "Construisez une phrase simple S+V+C avec le verbe manger.", pts: 10 },
];
TH3.seances[2].corrige = [
  ["Ex. 1 — ", { t: "sujet : Le professeur ; verbe : explique ; complément : la leçon", r: true }, "."],
  ["Ex. 2 — ", { t: "réponse libre, ex. : L'enfant mange du riz.", r: true }, " (structure S+V+C respectée)."],
];

module.exports = { theme3: TH3, annexe3: TH3.annexe };
