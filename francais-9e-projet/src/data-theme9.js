// =============================================================
// FRANCAIS 9e - THEME 9 : LES METIERS
// Séances 25 à 27 (/186) — ancien programme (T2-T3)
// Conjugaison : 3e groupe au présent, au passé composé, au futur simple
// =============================================================
const TH9 = {
  numero: 9,
  nom: "Les métiers",
  source: "Programme d'études antérieur — Trimestres 2 et 3",
  periodes: [
    ["Procédés et techniques", "La description : présenter un métier et ce que fait la personne."],
    ["Sémantico-lexical", "Les métiers de la ville et de la campagne, les lieux de travail, les outils, les qualités."],
    ["Morphosyntaxe", "Le 3e groupe au présent, au passé composé et au futur simple."],
    ["Phonie-graphie", "Les verbes en -dre et en -oir : prendre, voir, devoir."],
  ],
  objectifs: [
    "Nommer les métiers, les lieux de travail et les outils.",
    "Présenter un métier en deux ou trois phrases.",
    "Conjuguer les verbes du 3e groupe aux trois temps.",
    "Dire le métier que l'on veut exercer plus tard.",
  ],
  seances: [
    // ---------- SÉANCE 25 ----------
    {
      n: 25, titre: "Les métiers et les lieux de travail", titreFiche: "Nommer les métiers, les lieux de travail et les outils.",
      sd: "Expression Orale",
      objectif: "Nommer les métiers et les lieux de travail et les présenter",
      support: "Images de métiers (instituteur, cultivateur, maçon, couturière, infirmier), étiquettes.",
      image: { file: "theme9_metiers.png", w: 1100, h: 560, legende: "Les métiers : le lieu de travail et l'outil." },
      lecon: {
        titre: "1. Les métiers et les lieux de travail",
        blocs: [
          { st: "A. Les métiers", txt: "l'instituteur — le cultivateur — le maçon — la couturière — l'infirmier — le menuisier." },
          { st: "B. Les lieux et les outils", txt: "l'école, le champ, le chantier, l'atelier, le dispensaire ; la craie, l'angady, la truelle, le marteau." },
        ],
        aretenir: "Présenter un métier, c'est nommer le métier, le lieu de travail et l'activité principale.",
      },
      revision: {
        ens: "« Que fait le marchand ? » - Révision du thème 8. Le professeur fait rappeler trois verbes du marché.",
        app: "Les élèves rappellent les verbes connus.",
      },
      miseEnSituation: {
        ens: "Le professeur montre les images de métiers et demande : « Quel métier voulez-vous exercer plus tard ? »",
        app: "Les élèves répondent et justifient en une phrase.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les métiers, les lieux de travail et les outils.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « L'instituteur travaille à l'école. Le maçon travaille sur un chantier avec une truelle. »",
        app: "Les élèves relèvent les métiers, les lieux et les outils.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots en trois groupes.",
        app: "Les élèves classent : métiers, lieux, outils.",
        technique: {
          sous: "I. Trois groupes de mots",
          points: [
            "Les métiers : l'instituteur, le cultivateur, le maçon, la couturière, l'infirmier, le menuisier.",
            "Les lieux : l'école, le champ, le chantier, l'atelier, le dispensaire.",
            "Les outils : la craie, l'angady, la truelle, la machine à coudre, le marteau.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait présenter un métier.",
        app: "Un élève présente un métier, les autres devinent lequel.",
        technique: {
          sous: "II. Présenter un métier",
          points: [
            "On nomme le métier : « Mon père est maçon. »",
            "On dit où il travaille : « Il travaille sur un chantier. »",
            "On dit ce qu'il fait : « Il construit des maisons. »",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique.",
        app: "Les élèves écrivent et présentent.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : maçon, école, truelle, couturière, chantier.",
            "Associez chaque métier à son lieu : l'instituteur, le cultivateur, le menuisier.",
            "Présentez en trois phrases le métier que vous voulez exercer.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et la présentation.",
        app: "Chaque élève présente un métier correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois métiers et leur lieu de travail.",
            "Présentez un métier en trois phrases.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Associez chaque métier à son lieu de travail et à un outil : l'instituteur — le cultivateur — le menuisier.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Présentez en trois phrases le métier que vous voulez exercer plus tard.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "l'instituteur : l'école, la craie ; le cultivateur : le champ, l'angady ; le menuisier : l'atelier, le marteau", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : Je veux être infirmier. Je travaillerai au dispensaire. Je soignerai les malades.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 26 ----------
    {
      n: 26, titre: "Le 3e groupe au présent", titreFiche: "Conjuguer les verbes du 3e groupe au présent.",
      sd: "Conjugaison",
      objectif: "Conjuguer les verbes du 3e groupe au présent",
      support: "Tableau de conjugaison, liste de verbes de métiers.",
      lecon: {
        titre: "2. Le 3e groupe au présent",
        blocs: [
          { st: "A. Les trois familles", txt: "verbes en -ir (finir), en -dre (construire), en -oir (voir, devoir)." },
          { st: "B. Les verbes de métiers", txt: "je construis, je prends, je fais, je viens — ils construisent, ils prennent, ils font, ils viennent." },
        ],
        aretenir: "Le 3e groupe n'a pas une règle unique : chaque verbe se mémorise, mais ce sont les verbes les plus utiles.",
      },
      revision: {
        ens: "« Conjuguez semer au présent. » - Révision du 1er groupe. Le professeur fait rappeler les terminaisons -e, -es, -e, -ons, -ez, -ent.",
        app: "Les élèves conjuguent semer au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Le maçon construit une maison. » et demande : « Ce verbe se termine-t-il par -er ? »",
        app: "Les élèves constatent que construire n'est pas du 1er groupe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer les verbes du 3e groupe au présent.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je construis — nous construisons — ils construisent. Je prends — nous prenons — ils prennent. »",
        app: "Les élèves relèvent les terminaisons et les changements de radical.",
      },
      analyse: {
        ens: "Le professeur fait repérer les familles du 3e groupe.",
        app: "Les élèves classent les verbes selon leur terminaison d'infinitif.",
        technique: {
          sous: "I. Les familles du 3e groupe",
          points: [
            "Les verbes en -ir comme finir : je finis, nous finissons, ils finissent.",
            "Les verbes en -dre comme construire : je construis, nous construisons, ils construisent.",
            "Les verbes en -oir comme voir et devoir : je vois, je dois.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer les verbes de métiers.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. Les verbes de métiers au présent",
          points: [
            "construire : je construis, nous construisons, ils construisent",
            "prendre : je prends, nous prenons, ils prennent",
            "faire : je fais, nous faisons, ils font",
            "venir : je viens, nous venons, ils viennent",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et employer.",
        app: "Les élèves conjuguent et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez construire au présent avec nous, ils.",
            "Complétez : Le menuisier ... une table. (faire)",
            "Écrivez une phrase avec prendre au présent.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez finir au présent (je, nous, elles).",
            "Complétez : L'infirmier ... les malades. (soigner au présent)",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez au présent : construire, prendre, faire, venir.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec un verbe du 3e groupe : Le maçon ... une maison. La couturière ... une robe.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "je construis, je prends, je fais, je viens — ils construisent, ils prennent, ils font, ils viennent", r: true }, "."],
        ["Ex. 2 — ", { t: "construit / coud (ou fait)", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 27 ----------
    {
      n: 27, titre: "Le 3e groupe au passé composé et au futur simple", titreFiche: "Conjuguer les verbes du 3e groupe au passé composé et au futur simple.",
      sd: "Conjugaison",
      objectif: "Conjuguer les verbes du 3e groupe au passé composé et au futur simple",
      support: "Tableaux de conjugaison, phrases à transformer.",
      lecon: {
        titre: "3. Le 3e groupe au passé composé et au futur simple",
        blocs: [
          { st: "A. Le passé composé", txt: "auxiliaire + participe passé irrégulier : j'ai fait, il a pris, ils ont construit, il est venu." },
          { st: "B. Le futur simple", txt: "radical + -ai, -as, -a, -ons, -ez, -ont : je ferai, nous construirons, ils viendront." },
        ],
        aretenir: "Le passé composé raconte le travail accompli ; le futur simple annonce le projet professionnel.",
      },
      revision: {
        ens: "« Conjuguez construire au présent. » - Révision de la séance précédente. Le professeur fait rappeler les trois familles du 3e groupe.",
        app: "Les élèves conjuguent construire au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Hier, le maçon a construit un mur. L'an prochain, je ferai un stage. »",
        app: "Les élèves repèrent les deux temps.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer le 3e groupe au passé composé et au futur simple.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Il a pris son outil. Nous construirons une école. »",
        app: "Les élèves repèrent l'auxiliaire, le participe passé et les terminaisons du futur.",
      },
      analyse: {
        ens: "Le professeur fait dégager les deux règles.",
        app: "Les élèves séparent auxiliaire, participe passé, radical et terminaisons.",
        technique: {
          sous: "I. Deux formations",
          points: [
            "Passé composé : auxiliaire avoir ou être au présent + participe passé (j'ai pris, il a construit).",
            "Futur simple : radical + terminaisons -ai, -as, -a, -ons, -ez, -ont (nous construirons).",
            "Les participes passés du 3e groupe sont irréguliers : pris, fait, vu, venu, écrit.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer aux deux temps.",
        app: "Un élève écrit au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison",
          points: [
            "Passé composé : j'ai fait, tu as pris, il a construit, nous avons vu, ils sont venus.",
            "Futur simple : je ferai, tu prendras, il construira, nous verrons, ils viendront.",
            "Les verbes de mouvement se conjuguent avec être au passé composé : il est venu.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait transformer des phrases.",
        app: "Les élèves transforment et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Mettez au passé composé : « Le menuisier fait une table. »",
            "Mettez au futur simple : « Je viens à l'atelier. »",
            "Écrivez une phrase sur le métier que vous exercerez plus tard.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les deux temps.",
        app: "Chaque élève transforme correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Mettez au passé composé : « Ils construisent une école. »",
            "Mettez au futur simple : « Nous prenons l'outil. »",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Mettez au passé composé : « Le menuisier fait une table. Ils construisent une école. »", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Mettez au futur simple : « Je viens à l'atelier. Nous prenons l'outil. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "Le menuisier a fait une table. Ils ont construit une école.", r: true }, "."],
        ["Ex. 2 — ", { t: "Je viendrai à l'atelier. Nous prendrons l'outil.", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 9
  // ============================================================
  annexe: {
    theme: 9,
    nom: "Les métiers",
    conjugaison: [
      {
        verbe: "Le 3e groupe (construire, prendre, faire, venir)",
        temps: "Présent de l'indicatif",
        quand: "Pour dire ce que fait la personne dans son métier, maintenant ou d'habitude.",
        exemplesQuand: [
          "Le maçon construit une maison.",
          "L'infirmier vient au dispensaire chaque matin.",
        ],
        comment: "Le 3e groupe n'a pas une seule règle : on apprend chaque verbe avec ses trois familles (-ir, -dre, -oir).",
        tableau: [
          "construire : je construis, nous construisons, ils construisent",
          "prendre : je prends, nous prenons, ils prennent",
          "faire : je fais, nous faisons, ils font",
          "venir : je viens, nous venons, ils viennent",
        ],
        pourquoi: "Le 3e groupe contient les verbes les plus fréquents du français : être, avoir, faire, aller, venir, prendre, voir, dire.",
        pieges: [
          ["je construit", "je construis"],
          ["ils faisent", "ils font"],
        ],
      },
      {
        verbe: "Le 3e groupe (faire, prendre, construire, venir)",
        temps: "Passé composé et futur simple",
        quand: "Pour raconter un travail déjà fait et annoncer un projet professionnel.",
        exemplesQuand: [
          "Hier, le menuisier a fait une table.",
          "L'an prochain, je ferai un stage.",
        ],
        comment: "Passé composé : auxiliaire + participe passé irrégulier (fait, pris, construit, venu). Futur simple : radical + -ai, -as, -a, -ons, -ez, -ont.",
        tableau: [
          "passé composé : j'ai fait, tu as pris, il a construit, ils sont venus",
          "futur simple : je ferai, tu prendras, il construira, ils viendront",
          "les verbes de mouvement prennent l'auxiliaire être : il est venu",
        ],
        pourquoi: "Ces deux temps permettent de raconter le travail accompli et de parler de l'avenir professionnel.",
        pieges: [
          ["j'ai fais", "j'ai fait"],
          ["il a venu", "il est venu"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le 3e groupe",
        regle: "Le 3e groupe réunit les verbes qui ne sont ni du 1er groupe (-er) ni réguliers en -ir ; il se mémorise verbe par verbe.",
        exemple: "construire, prendre, faire, venir, voir, dire.",
        contre: "Ne pas appliquer la règle du 1er groupe : on ne dit pas « je construisse ».",
      },
      {
        notion: "L'auxiliaire être au passé composé",
        regle: "Les verbes de mouvement et d'état (aller, venir, arriver, partir, rester) se conjuguent avec être.",
        exemple: "Il est venu au chantier. Elle est partie tôt.",
        contre: "On ne dit pas « il a venu ».",
      },
      {
        notion: "Présenter un métier",
        regle: "On nomme le métier, le lieu de travail, puis l'activité principale.",
        exemple: "Mon père est maçon. Il travaille sur un chantier. Il construit des maisons.",
        contre: "Ne pas donner seulement le nom du métier sans dire ce que la personne fait.",
      },
    ],
    orthographe: [
      {
        notion: "Les participes passés irréguliers",
        regle: "Au 3e groupe, le participe passé ne suit pas la règle en -é : fait, pris, vu, venu, écrit, construit.",
        exemples: ["j'ai fait", "il a pris", "nous avons vu", "elle est venue"],
        pieges: [
          ["j'ai fais", "j'ai fait"],
          ["il a prenu", "il a pris"],
        ],
      },
      {
        notion: "Les noms de métiers au féminin",
        regle: "Beaucoup de noms de métiers forment le féminin en -e ou en -euse, -ière, -trice.",
        exemples: ["un couturier / une couturière", "un vendeur / une vendeuse", "un instituteur / une institutrice"],
        pieges: [
          ["une couturier", "une couturière"],
          ["une vendeure", "une vendeuse"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les métiers", mots: "l'instituteur — le cultivateur — le maçon — la couturière — l'infirmier — le menuisier — le marchand" },
      { champ: "Les lieux de travail", mots: "l'école — le champ — le chantier — l'atelier — le dispensaire — le bureau" },
      { champ: "Les outils", mots: "la craie — l'angady — la truelle — la machine à coudre — le marteau — la scie" },
      { champ: "Les qualités", mots: "le courage — la patience — l'habileté — le soin — la ponctualité" },
    ],
  },
};

module.exports = { theme9: TH9, annexe9: TH9.annexe };
