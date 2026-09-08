// =============================================================
// FRANCAIS 9e - THEME 6 : LA FERME
// Séances 16 à 18 (/186) — RAPE T3 2025-2026, Période 4
// Procédé : la narration - Négations - Futur proche - Passé composé
// Phonie : [œ̃] (un, um) et [y] (u, eu, ût)
// =============================================================
const TH6 = {
  numero: 6,
  nom: "La ferme",
  source: "RAPE T3 2025-2026 — Période 4",
  periodes: [
    ["Procédés et techniques", "La narration : raconter les travaux de la ferme dans l'ordre."],
    ["Sémantico-lexical", "Les animaux (volailles, bovins, ovins), les habitats, les aliments, les mâles, les femelles et les petits, les activités et les outils."],
    ["Morphosyntaxe", "La phrase simple ; les négations ne…pas, ne…plus, ne…jamais ; le futur proche ; le passé composé."],
    ["Phonie-graphie", "Le son [œ̃] s'écrit un, um (lundi, parfum) ; le son [y] s'écrit u, eu, ût (pu, eu, fût)."],
  ],
  objectifs: [
    "Nommer les animaux de la ferme, leurs habitats et leurs petits.",
    "Raconter les travaux de la ferme dans l'ordre.",
    "Employer les trois formes de la négation.",
    "Former le futur proche et le passé composé.",
    "Repérer les orthographes des sons [œ̃] et [y].",
  ],
  seances: [
    // ---------- SÉANCE 16 ----------
    {
      n: 16, titre: "Les animaux de la ferme et leurs petits", titreFiche: "Les animaux de la ferme et leurs petits.",
      sd: "Expression Orale",
      objectif: "Nommer les animaux de la ferme, leurs habitats et leurs petits",
      support: "Images d'animaux de la ferme, étiquettes (mâle, femelle, petit, habitat).",
      lecon: {
        titre: "1. Les animaux de la ferme",
        blocs: [
          { st: "A. Les volailles", txt: "le coq — la poule — le poussin — le canard — le caneton ; habitat : le poulailler." },
          { st: "B. Les bovins", txt: "le bœuf — la vache — le veau ; habitat : l'étable." },
          { st: "C. Les ovins et caprins", txt: "le bouc — la chèvre — le chevreau ; l'agneau est le petit du mouton." },
          { st: "D. Les aliments et les outils", txt: "la provende — la semoule — l'herbe — l'abreuvoir — la soubique." },
        ],
        aretenir: "Chaque animal de la ferme a un nom pour le mâle, un nom pour la femelle, un nom pour le petit et un habitat.",
      },
      revision: {
        ens: "« Quels animaux y a-t-il chez vous ? » - Révision du lexique du village. Le professeur fait rappeler trois noms d'animaux.",
        app: "Les élèves citent les animaux qu'ils connaissent.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'une ferme et demande : « Où dorment ces animaux ? »",
        app: "Les élèves répondent et nomment les habitats visibles.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va nommer les animaux de la ferme, leurs petits et leurs habitats.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Le coq et la poule vivent dans le poulailler. Le poussin est leur petit. »",
        app: "Les élèves relèvent les noms des animaux, des petits et des habitats.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots en quatre colonnes.",
        app: "Les élèves classent : mâle, femelle, petit, habitat.",
        technique: {
          sous: "I. Le mâle, la femelle, le petit, l'habitat",
          points: [
            "Volailles : le coq — la poule — le poussin — le poulailler.",
            "Bovins : le bœuf — la vache — le veau — l'étable.",
            "Caprins : le bouc — la chèvre — le chevreau.",
            "Nourriture et outils : la provende, la semoule, l'abreuvoir, la soubique.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait raconter une journée à la ferme.",
        app: "Un élève raconte, les autres complètent dans l'ordre.",
        technique: {
          sous: "II. Raconter les travaux de la ferme",
          points: [
            "D'abord, on nourrit les volailles avec la provende.",
            "Ensuite, on nettoie l'étable.",
            "Après, on donne de l'eau dans l'abreuvoir.",
            "Enfin, on ramasse les œufs.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique et raconter.",
        app: "Les élèves écrivent et racontent.",
        technique: {
          sous: "III. Application",
          points: [
            "Donnez la femelle et le petit : le coq, le bœuf, le bouc.",
            "Nommez l'habitat : la poule, la vache.",
            "Racontez en trois phrases les travaux du matin à la ferme.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et le récit.",
        app: "Chaque élève produit un récit correct.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Donnez le petit de la poule et le petit de la vache.",
            "Racontez deux travaux de la ferme dans l'ordre.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Donnez la femelle et le petit de : le coq — le bœuf — le bouc.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Racontez en trois phrases les travaux du matin à la ferme, dans l'ordre.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "la poule / le poussin ; la vache / le veau ; la chèvre / le chevreau", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : D'abord, je nourris les volailles. Ensuite, je nettoie l'étable. Enfin, je ramasse les œufs.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 17 ----------
    {
      n: 17, titre: "Les trois formes de la négation", titreFiche: "Les trois formes de la négation.",
      sd: "Grammaire",
      objectif: "Employer ne…pas, ne…plus et ne…jamais",
      support: "Phrases affirmatives à transformer, sons [œ̃] et [y].",
      lecon: {
        titre: "2. La phrase négative",
        blocs: [
          { st: "A. Les trois négations", txt: "ne…pas (négation simple) — ne…plus (ce qui a cessé) — ne…jamais (ce qui n'arrive à aucun moment)." },
          { st: "B. La place", txt: "ne se place avant le verbe, pas, plus, jamais après : Je ne nourris pas les poules." },
          { st: "C. Devant une voyelle", txt: "ne devient n' : Il n'a plus de provende." },
        ],
        aretenir: "La négation encadre le verbe ; le choix entre pas, plus et jamais dépend du sens.",
      },
      revision: {
        ens: "« Dites le contraire de : Je nourris les poules. » - Révision de la phrase affirmative. Le professeur fait rappeler l'ordre S+V+C.",
        app: "Les élèves donnent le contraire de phrases simples.",
      },
      miseEnSituation: {
        ens: "Le professeur écrit : « Le coq chante. » puis demande : « Et s'il est malade ? » Il écrit : « Le coq ne chante plus. »",
        app: "Les élèves observent la différence de sens.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va apprendre les trois formes de la négation.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je ne nettoie pas l'étable. Je ne la nettoie plus. Je ne la nettoie jamais. »",
        app: "Les élèves relèvent les trois négations et leur place.",
      },
      analyse: {
        ens: "Le professeur fait distinguer les trois sens.",
        app: "Les élèves comparent et expliquent chaque négation.",
        technique: {
          sous: "I. Trois négations, trois sens",
          points: [
            "ne…pas : la négation simple (Je ne nourris pas les poules).",
            "ne…plus : ce qui a cessé (Il ne chante plus depuis hier).",
            "ne…jamais : ce qui n'arrive à aucun moment (Elle ne sort jamais).",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler la place de la négation.",
        app: "Un élève énonce la règle, un autre donne un exemple.",
        technique: {
          sous: "II. La place et l'élision",
          points: [
            "ne se place avant le verbe, pas, plus, jamais après.",
            "Devant une voyelle, ne devient n' : Il n'a plus de semoule.",
            "Le mot de remplace un, une, des dans la négation : Je n'ai pas de vache.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait transformer des phrases.",
        app: "Les élèves transforment et complètent.",
        technique: {
          sous: "III. Application",
          points: [
            "Mettez à la forme négative : « Je nettoie l'étable. »",
            "Complétez avec ne…plus ou ne…jamais : « Le coq ... chante depuis lundi. »",
            "Dites une chose que vous ne faites jamais à la ferme.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie l'emploi des trois négations.",
        app: "Chaque élève transforme correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Mettez à la forme négative : « Il a de la provende. »",
            "Complétez avec ne…jamais : « Elle ... sort le soir. »",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Mettez à la forme négative : « Je nettoie l'étable. Il a de la provende. »", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec ne…pas, ne…plus ou ne…jamais : « Le coq ... chante depuis lundi. Elle ... sort le soir. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "Je ne nettoie pas l'étable. Il n'a pas de provende.", r: true }, "."],
        ["Ex. 2 — ", { t: "ne chante plus / ne sort jamais", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 18 ----------
    {
      n: 18, titre: "Le futur proche et le passé composé", titreFiche: "Le futur proche et le passé composé.",
      sd: "Conjugaison",
      objectif: "Former le futur proche et le passé composé et repérer les sons [œ̃] et [y]",
      support: "Tableaux de conjugaison, liste de mots contenant [œ̃] et [y].",
      lecon: {
        titre: "3. Futur proche, passé composé, sons [œ̃] et [y]",
        blocs: [
          { st: "A. Le futur proche", txt: "aller au présent + infinitif : Je vais nourrir les poules." },
          { st: "B. Le passé composé", txt: "auxiliaire au présent + participe passé : J'ai nettoyé l'étable." },
          { st: "C. Les sons", txt: "[œ̃] s'écrit un, um : lundi, parfum. [y] s'écrit u, eu, ût : pu, eu, fût." },
        ],
        aretenir: "Le futur proche exprime ce qui va se faire tout de suite ; le passé composé exprime ce qui est déjà fait.",
      },
      revision: {
        ens: "« Conjuguez aller au présent. » - Révision du verbe aller. Le professeur fait rappeler les six formes.",
        app: "Les élèves conjuguent aller au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Que vas-tu faire maintenant ? » puis : « Qu'as-tu fait ce matin ? »",
        app: "Les élèves répondent et observent les deux temps.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va former le futur proche et le passé composé.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Je vais nourrir les poules. J'ai nettoyé l'étable. »",
        app: "Les élèves repèrent les deux éléments de chaque temps.",
      },
      analyse: {
        ens: "Le professeur fait dégager les deux règles de formation.",
        app: "Les élèves séparent l'auxiliaire du verbe qui suit.",
        technique: {
          sous: "I. Deux temps composés de deux éléments",
          points: [
            "Futur proche : aller au présent + infinitif (Je vais nourrir).",
            "Passé composé : avoir ou être au présent + participe passé (J'ai nettoyé).",
            "Le participe passé des verbes en -er se termine par -é.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer et repérer les sons.",
        app: "Un élève écrit au tableau, les autres classent les mots selon le son.",
        technique: {
          sous: "II. Les sons [œ̃] et [y]",
          points: [
            "[œ̃] s'écrit un ou um : lundi, matin, parfum.",
            "[y] s'écrit u, eu ou ût : pu, eu, fût, rue, sûr.",
            "Attention : lundi contient [œ̃] et non [y].",
          ],
        },
      },
      application: {
        ens: "Le professeur fait former les deux temps et classer les sons.",
        app: "Les élèves conjuguent et classent.",
        technique: {
          sous: "III. Application",
          points: [
            "Mettez au futur proche : « Je nourris les poules. »",
            "Mettez au passé composé : « Nous nettoyons l'étable. »",
            "Classez selon le son [œ̃] ou [y] : lundi, pu, parfum, rue.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie les deux temps et les sons.",
        app: "Chaque élève forme les temps et classe les mots.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Mettez au futur proche puis au passé composé : « Il nourrit les volailles. »",
            "Classez selon le son [œ̃] ou [y] : matin, eu, parfum.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Mettez au futur proche puis au passé composé : « Je nourris les poules. Nous nettoyons l'étable. »", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Classez selon le son [œ̃] ou [y] : lundi — pu — parfum — rue — matin — eu.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "Je vais nourrir les poules / J'ai nourri les poules. Nous allons nettoyer l'étable / Nous avons nettoyé l'étable.", r: true }, "."],
        ["Ex. 2 — ", { t: "[œ̃] : lundi, parfum, matin — [y] : pu, rue, eu", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 6
  // ============================================================
  annexe: {
    theme: 6,
    nom: "La ferme",
    conjugaison: [
      {
        verbe: "Le futur proche (aller + infinitif)",
        temps: "Futur proche",
        quand: "Pour annoncer une action qui va se faire tout de suite ou très bientôt.",
        exemplesQuand: [
          "Je vais nourrir les poules.",
          "Nous allons nettoyer l'étable.",
        ],
        comment: "On conjugue aller au présent, puis on ajoute l'infinitif du verbe.",
        tableau: [
          "je vais nourrir — tu vas nourrir — il/elle va nourrir",
          "nous allons nourrir — vous allez nourrir — ils/elles vont nourrir",
        ],
        pourquoi: "Le futur proche est très simple à former et s'emploie tous les jours pour annoncer ce que l'on va faire.",
        pieges: [
          ["je vais je nourris", "je vais nourrir"],
          ["il va à nourrir", "il va nourrir"],
        ],
      },
      {
        verbe: "Le passé composé (1er groupe)",
        temps: "Passé composé",
        quand: "Pour raconter une action terminée, comme les travaux déjà faits à la ferme.",
        exemplesQuand: [
          "J'ai nettoyé l'étable.",
          "Nous avons ramassé les œufs.",
        ],
        comment: "Auxiliaire avoir ou être au présent + participe passé en -é pour les verbes du 1er groupe.",
        tableau: [
          "j'ai nourri — tu as nourri — il/elle a nourri",
          "nous avons nourri — vous avez nourri — ils/elles ont nourri",
        ],
        pourquoi: "Le passé composé est le temps du récit : il permet de raconter les travaux de la journée, dans l'ordre.",
        pieges: [
          ["j'ai nettoyer", "j'ai nettoyé"],
          ["nous avons nettoyés l'étable", "nous avons nettoyé l'étable"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "La négation",
        regle: "La négation encadre le verbe : ne…pas, ne…plus, ne…jamais.",
        exemple: "Je ne nourris pas les poules. Il ne chante plus. Elle ne sort jamais.",
        contre: "Ne pas oublier le ne : « Je nourris pas » est incorrect à l'écrit.",
      },
      {
        notion: "de dans la phrase négative",
        regle: "Dans la négation, un, une, des deviennent de.",
        exemple: "J'ai une vache. → Je n'ai pas de vache.",
        contre: "On n'écrit pas « Je n'ai pas une vache » dans ce sens.",
      },
      {
        notion: "La narration dans l'ordre",
        regle: "On raconte avec d'abord, ensuite, après, enfin.",
        exemple: "D'abord, je nourris les volailles. Ensuite, je nettoie l'étable.",
        contre: "Ne pas mélanger les étapes : le récit perd son ordre.",
      },
    ],
    orthographe: [
      {
        notion: "Le son [œ̃]",
        regle: "Le son [œ̃] s'écrit un ou um.",
        exemples: ["lundi", "matin", "parfum", "un"],
        pieges: [
          ["londi", "lundi"],
          ["parfun", "parfum"],
        ],
      },
      {
        notion: "Le son [y]",
        regle: "Le son [y] s'écrit u, eu ou ût.",
        exemples: ["pu", "eu", "fût", "rue", "sûr"],
        pieges: [
          ["confondre lundi [œ̃] et pu [y]", "lundi se prononce [lœ̃di], pu se prononce [py]"],
          ["sur (préposition) écrit sûr", "sûr prend un accent circonflexe quand il signifie certain"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les volailles", mots: "le coq — la poule — le poussin — le canard — le caneton — l'œuf" },
      { champ: "Les bovins et caprins", mots: "le bœuf — la vache — le veau — le bouc — la chèvre — le chevreau" },
      { champ: "Les habitats", mots: "le poulailler — l'étable — la bergerie — l'enclos — la cour" },
      { champ: "La nourriture et les outils", mots: "la provende — la semoule — l'herbe — l'abreuvoir — la soubique — la pelle" },
      { champ: "Les travaux", mots: "nourrir — nettoyer — soigner — ramasser — traire — garder" },
    ],
  },
};

module.exports = { theme6: TH6, annexe6: TH6.annexe };
