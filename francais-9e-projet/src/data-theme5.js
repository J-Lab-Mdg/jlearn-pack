// =============================================================
// FRANCAIS 9e - THEME 5 : LE VILLAGE
// Séances 13 à 15 (/186) — ancien programme (T1, séances 50-62)
// Conjugaison au programme : ÊTRE futur simple, AVOIR futur simple
// =============================================================
const TH5 = {
  numero: 5,
  nom: "Le village",
  source: "Programme d'études antérieur — Trimestre 1",
  periodes: [
    ["Procédés et techniques", "La description : décrire un lieu et situer les éléments."],
    ["Sémantico-lexical", "Les lieux du village, les personnes, les activités villageoises."],
    ["Morphosyntaxe", "Le verbe ÊTRE au futur simple ; le verbe AVOIR au futur simple."],
    ["Phonie-graphie", "Les terminaisons du futur simple : -ai, -as, -a, -ons, -ez, -ont."],
  ],
  objectifs: [
    "Nommer les lieux et les personnes du village.",
    "Décrire son village et situer les lieux les uns par rapport aux autres.",
    "Conjuguer ÊTRE et AVOIR au futur simple.",
    "Écrire correctement les terminaisons du futur simple.",
  ],
  seances: [
    // ---------- SÉANCE 13 ----------
    {
      seanceNum: "Séance 13",
      titreFiche: "Les lieux du village",
      objectif: "Nommer les lieux du village et les situer",
      documentation: "Programme d'études de la classe de 9e (T3) et RAPE T3 2025-2026.",
      supportFiche: "Image d'un village malgache, étiquettes des lieux.",
      lecon: {
        titre: "1. Le village et ses lieux",
        blocs: [
          { st: "A. Les lieux", txt: "l'école — le marché — l'église — le dispensaire — le puits — la route — les rizières." },
          { st: "B. Les personnes", txt: "le chef de village — le cultivateur — le marchand — l'instituteur — l'infirmier." },
          { st: "C. Situer", txt: "à côté de — en face de — derrière — au bord de — au milieu de." },
        ],
        aretenir: "Pour décrire un village, on nomme ses lieux, ses personnes, et on dit où ils se trouvent.",
      },
      revision: {
        ens: "« Quels lieux y a-t-il dans votre village ? » - Révision du lexique du thème 4 (la maison) pour opposer la maison et le village. Le professeur fait rappeler trois mots.",
        app: "Les élèves citent les lieux qu'ils connaissent.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'un village et demande : « Où vont les habitants de ce village ? »",
        app: "Les élèves répondent en nommant les lieux visibles.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va apprendre à nommer et à situer les lieux du village.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « L'école est à côté du marché. Le puits est derrière l'église. »",
        app: "Les élèves relèvent les noms de lieux et les mots qui situent.",
      },
      analyse: {
        ens: "Le professeur fait distinguer les lieux, les personnes et les mots de situation.",
        app: "Les élèves classent les mots en trois groupes.",
        technique: {
          sous: "I. Trois groupes de mots",
          points: [
            "Les lieux : l'école, le marché, l'église, le dispensaire, le puits.",
            "Les personnes : le chef de village, le cultivateur, le marchand.",
            "Les mots pour situer : à côté de, en face de, derrière, au bord de.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler la description d'un village.",
        app: "Un élève décrit le village de l'image, les autres complètent.",
        technique: {
          sous: "II. Décrire un village",
          points: [
            "On nomme les lieux : « Dans mon village, il y a une école et un marché. »",
            "On les situe : « L'école est à côté du marché. »",
            "On nomme les personnes : « Le cultivateur travaille dans les rizières. »",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique et situer.",
        app: "Les élèves écrivent des phrases de description.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : école, cultivateur, puits, marchand, église.",
            "Complétez : « Le dispensaire est ... de l'école. » (à côté)",
            "Décrivez votre village en trois phrases.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et la situation des lieux.",
        app: "Chaque élève produit une description correcte.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois lieux du village.",
            "Situez deux lieux l'un par rapport à l'autre.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Classez ces mots en lieux ou personnes : école — cultivateur — puits — marchand — église — instituteur.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Décrivez votre village en trois phrases en situant deux lieux.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "lieux : école, puits, église ; personnes : cultivateur, marchand, instituteur", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : Dans mon village, il y a une école et un marché. L'école est à côté du marché. Le puits est derrière l'église.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 14 ----------
    {
      seanceNum: "Séance 14",
      titreFiche: "Le verbe ÊTRE au futur simple",
      objectif: "Conjuguer et employer le verbe ÊTRE au futur simple",
      documentation: "Programme d'études de la classe de 9e (T3) et RAPE T3 2025-2026.",
      supportFiche: "Tableau de conjugaison, phrases à compléter.",
      lecon: {
        titre: "2. ÊTRE au futur simple",
        blocs: [
          { st: "A. La conjugaison", txt: "je serai — tu seras — il/elle sera — nous serons — vous serez — ils/elles seront." },
          { st: "B. L'emploi", txt: "un état à venir : Demain, nous serons au marché." },
        ],
        aretenir: "Le futur simple exprime ce qui sera ; pour ÊTRE, le radical est ser- et les terminaisons sont -ai, -as, -a, -ons, -ez, -ont.",
      },
      revision: {
        ens: "« Conjuguez ÊTRE au présent. » - Révision du présent de ÊTRE. Le professeur fait rappeler les six formes.",
        app: "Les élèves conjuguent ÊTRE au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Où serez-vous demain ? » et écrit : « Demain, nous serons à l'école. »",
        app: "Les élèves observent la forme du verbe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer ÊTRE au futur simple.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je serai cultivateur. Nous serons au marché. »",
        app: "Les élèves relèvent les formes et les terminaisons.",
      },
      analyse: {
        ens: "Le professeur fait repérer le radical et les terminaisons.",
        app: "Les élèves séparent le radical ser- des terminaisons.",
        technique: {
          sous: "I. Le radical et les terminaisons",
          points: [
            "Le radical de ÊTRE au futur est ser-.",
            "Les terminaisons sont : -ai, -as, -a, -ons, -ez, -ont.",
            "Ces terminaisons sont les mêmes pour tous les verbes au futur simple.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer et employer le futur simple.",
        app: "Un élève écrit la conjugaison au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison et emploi",
          points: [
            "je serai — tu seras — il/elle sera — nous serons — vous serez — ils/elles seront",
            "Le futur simple exprime un état à venir : Demain, ils seront au village.",
            "Il s'emploie avec demain, la semaine prochaine, l'an prochain.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et compléter.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez ÊTRE au futur simple avec tu, nous, elles.",
            "Complétez : Demain, je ... au marché.",
            "Écrivez une phrase au futur simple avec demain.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez ÊTRE au futur simple (je, il, vous).",
            "Complétez : L'an prochain, nous ... en 8e.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez ÊTRE au futur simple de l'indicatif.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec ÊTRE au futur : Demain, je ... au marché. L'an prochain, nous ... en 8e.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "je serai, tu seras, il sera, nous serons, vous serez, ils seront", r: true }, "."],
        ["Ex. 2 — ", { t: "serai / serons", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 15 ----------
    {
      seanceNum: "Séance 15",
      titreFiche: "Le verbe AVOIR au futur simple",
      objectif: "Conjuguer et employer le verbe AVOIR au futur simple",
      documentation: "Programme d'études de la classe de 9e (T3) et RAPE T3 2025-2026.",
      supportFiche: "Tableau de conjugaison, phrases à compléter.",
      lecon: {
        titre: "3. AVOIR au futur simple",
        blocs: [
          { st: "A. La conjugaison", txt: "j'aurai — tu auras — il/elle aura — nous aurons — vous aurez — ils/elles auront." },
          { st: "B. L'emploi", txt: "une possession à venir : Demain, nous aurons un nouveau puits." },
        ],
        aretenir: "Le radical de AVOIR au futur est aur- ; les terminaisons sont les mêmes que pour les autres verbes.",
      },
      revision: {
        ens: "« Conjuguez ÊTRE au futur simple. » - Révision de la séance précédente. Le professeur fait rappeler les terminaisons du futur.",
        app: "Les élèves conjuguent ÊTRE au futur simple.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Qu'aurez-vous l'an prochain ? » et écrit : « Nous aurons une nouvelle salle. »",
        app: "Les élèves observent la forme du verbe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer AVOIR au futur simple.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « J'aurai un cahier. Ils auront un puits. »",
        app: "Les élèves relèvent les formes et les terminaisons.",
      },
      analyse: {
        ens: "Le professeur fait repérer le radical aur- et comparer avec le futur de ÊTRE.",
        app: "Les élèves comparent les deux conjugaisons et constatent les mêmes terminaisons.",
        technique: {
          sous: "I. Le radical et les terminaisons",
          points: [
            "Le radical de AVOIR au futur est aur-.",
            "Les terminaisons sont -ai, -as, -a, -ons, -ez, -ont.",
            "Je + aurai s'écrit j'aurai (élision devant la voyelle).",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer et employer AVOIR au futur.",
        app: "Un élève écrit la conjugaison au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison et emploi",
          points: [
            "j'aurai — tu auras — il/elle aura — nous aurons — vous aurez — ils/elles auront",
            "Le futur simple exprime une possession à venir.",
            "Exemple : L'an prochain, le village aura un dispensaire.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et compléter.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez AVOIR au futur simple avec nous, vous, ils.",
            "Complétez : Demain, tu ... un nouveau cahier.",
            "Écrivez une phrase au futur simple avec l'an prochain.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez AVOIR au futur simple (je, elle, nous).",
            "Complétez : Bientôt, ils ... un dispensaire.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez AVOIR au futur simple de l'indicatif.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec AVOIR au futur : Demain, tu ... un nouveau cahier. Bientôt, ils ... un dispensaire.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "j'aurai, tu auras, il aura, nous aurons, vous aurez, ils auront", r: true }, "."],
        ["Ex. 2 — ", { t: "auras / auront", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 5
  // ============================================================
  annexe: {
    theme: 5,
    nom: "Le village",
    conjugaison: [
      {
        verbe: "ÊTRE",
        temps: "Futur simple",
        quand: "Pour parler d'un état ou d'une situation à venir.",
        exemplesQuand: [
          "Demain, nous serons au marché.",
          "Je serai cultivateur.",
        ],
        comment: "On prend le radical ser- et on ajoute les terminaisons du futur : -ai, -as, -a, -ons, -ez, -ont.",
        tableau: [
          "je serai — tu seras — il/elle sera",
          "nous serons — vous serez — ils/elles seront",
        ],
        pourquoi: "Le futur simple permet de faire des projets et des prévisions, ce qui est très utile pour parler de l'avenir du village.",
        pieges: [
          ["je serais (conditionnel)", "je serai (futur)"],
          ["nous serons pas", "nous ne serons pas"],
        ],
      },
      {
        verbe: "AVOIR",
        temps: "Futur simple",
        quand: "Pour parler d'une possession à venir.",
        exemplesQuand: [
          "L'an prochain, le village aura un dispensaire.",
          "J'aurai un nouveau cahier.",
        ],
        comment: "On prend le radical aur- et on ajoute les terminaisons du futur.",
        tableau: [
          "j'aurai — tu auras — il/elle aura",
          "nous aurons — vous aurez — ils/elles auront",
        ],
        pourquoi: "AVOIR au futur sert aussi d'auxiliaire pour former le futur antérieur ; il faut donc le connaître parfaitement.",
        pieges: [
          ["je aurai", "j'aurai"],
          ["ils aurons", "ils auront"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le futur simple",
        regle: "Le futur simple se forme avec le radical du verbe suivi des terminaisons -ai, -as, -a, -ons, -ez, -ont.",
        exemple: "je serai, tu auras, il ira.",
        contre: "Ne pas confondre le futur (je serai) et le conditionnel (je serais).",
      },
      {
        notion: "Situer dans l'espace",
        regle: "On situe un lieu avec à côté de, en face de, derrière, devant, au bord de, au milieu de.",
        exemple: "L'école est à côté du marché.",
        contre: "Ne pas écrire « à côté du » devant un nom féminin sans accord : à côté de la maison.",
      },
      {
        notion: "Les indicateurs de temps du futur",
        regle: "Demain, bientôt, la semaine prochaine, l'an prochain appellent le futur simple.",
        exemple: "Demain, nous serons au marché.",
        contre: "Ne pas employer le présent après demain : « Demain, nous sommes » est incorrect ici.",
      },
    ],
    orthographe: [
      {
        notion: "Les terminaisons du futur simple",
        regle: "Au futur simple, les terminaisons sont toujours -ai, -as, -a, -ons, -ez, -ont.",
        exemples: ["je serai", "tu auras", "nous aurons", "ils seront"],
        pieges: [
          ["je serais demain", "je serai demain"],
          ["nous seront", "nous serons"],
        ],
      },
      {
        notion: "L'élision devant une voyelle",
        regle: "je et le, la deviennent j', l' devant une voyelle ou un h muet.",
        exemples: ["j'aurai", "l'école", "l'église"],
        pieges: [
          ["je aurai", "j'aurai"],
          ["le école", "l'école"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les lieux du village", mots: "l'école — le marché — l'église — le dispensaire — le puits — la route — la rizière" },
      { champ: "Les personnes", mots: "le chef de village — le cultivateur — le marchand — l'instituteur — l'infirmier — le voisin" },
      { champ: "Situer", mots: "à côté de — en face de — devant — derrière — au bord de — au milieu de" },
      { champ: "Le temps du futur", mots: "demain — bientôt — la semaine prochaine — l'an prochain — plus tard" },
    ],
  },
};

module.exports = { theme5: TH5, annexe5: TH5.annexe };
