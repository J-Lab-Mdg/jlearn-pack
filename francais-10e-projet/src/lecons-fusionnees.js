// lecons-fusionnees.js — Leçons fusionnées par grand titre (structure A)
// Chaque leçon rassemble, sur 1 à 2 pages illustrées, le contenu à dicter des
// séances du même grand titre. Elle apparaît après la fiche marquée par `apres`.
// segs : string | { t, b, i, k (mot clé bleu), r (réponse corrigé rose), color, size }

const F = [
  {
    id: "lecon1", apres: 6, num: 1,
    titre: "SE PRÉSENTER ET PRÉSENTER",
    titreS: "Se présenter et présenter",
    plage: "1 à 6",
    image: { file: "ia_u1_presentation.jpg", w: 1376, h: 768, legende: "Rova se présente devant la classe : « Bonjour ! Je m'appelle Rova. »" },
    subs: [
      {
        t: "A. Se présenter",
        paras: [
          ["« ", { t: "Bonjour ! Je m'appelle Rova.", k: true }, " » — je dis mon prénom avec la main sur ", { t: "la poitrine", k: true }, "."],
        ],
      },
      {
        t: "B. Présenter quelqu'un",
        paras: [
          ["Un garçon : « ", { t: "Voici Koto. Il s'appelle Koto.", k: true }, " » — une fille : « ", { t: "Voici Soa. Elle s'appelle Soa.", k: true }, " »"],
        ],
      },
      {
        t: "C. Le dialogue de présentation",
        paras: [
          ["« — ", { t: "Bonjour !", k: true }, " — ", { t: "Bonjour ! Comment tu t'appelles ?", k: true }, " »"],
          ["« — ", { t: "Je m'appelle Rova. Et toi ?", k: true }, " — ", { t: "Je m'appelle Koto.", k: true }, " »"],
          ["« — ", { t: "Au revoir, Koto !", k: true }, " — ", { t: "Au revoir, Rova !", k: true }, " »"],
        ],
        image: { file: "ia_u1_dialogue.jpg", w: 1376, h: 768, legende: "Le dialogue : bonjour — comment tu t'appelles ? — je m'appelle... — au revoir !" },
      },
      {
        t: "D. Qui est-ce ?",
        paras: [
          ["« — ", { t: "Qui est-ce ?", k: true }, " — ", { t: "C'est Koto.", k: true }, " » (un garçon) — « — ", { t: "C'est Fara.", k: true }, " » (une fille)"],
          ["Sur « ", { t: "Qui est-ce ?", k: true }, " », ma voix ", { t: "monte", k: true }, " ! La question ", { t: "ne change jamais", k: true }, " : seul ", { t: "le prénom", k: true }, " change."],
          ["La comptine du jeu : « ", { t: "Qui est-ce, qui est-ce, dis-moi qui c'est !", k: true }, " »"],
        ],
      },
    ],
    retenir: ["Se présenter : « ", { t: "Bonjour ! Je m'appelle...", k: true }, " » — Présenter : « ", { t: "Voici... Il/Elle s'appelle...", k: true }, " » — Deviner : « ", { t: "Qui est-ce ? C'est...", k: true }, " »"],
  },
  {
    id: "lecon2", apres: 9, num: 2,
    titre: "LE SON É",
    titreS: "Le son é",
    plage: "7 à 9",
    image: { file: "ia_u1_son_e.jpg", w: 1376, h: 768, legende: "Le vélo, le bébé, l'école, le café : j'entends le son é !" },
    subs: [
      {
        t: "A. La lettre",
        paras: [
          ["Le son ", { t: "é", k: true }, " s'écrit avec la lettre « ", { t: "é", k: true }, " » (e accent aigu)."],
        ],
      },
      {
        t: "B. Les mots",
        paras: [
          [{ t: "bébé", k: true }, " — ", { t: "école", k: true }, " — ", { t: "vélo", k: true }, " — ", { t: "télé", k: true }, " — ", { t: "café", k: true }],
        ],
      },
      {
        t: "C. Sa place dans le mot",
        paras: [
          ["Le son é peut être au ", { t: "début", k: true }, " (école), au ", { t: "milieu", k: true }, " (télé) ou à ", { t: "la fin", k: true }, " (café)."],
        ],
      },
      {
        t: "D. Les phrases",
        paras: [
          ["« ", { t: "Le bébé est à l'école.", k: true }, " » — « ", { t: "Papa boit un café.", k: true }, " » — « ", { t: "J'ai un vélo.", k: true }, " »"],
          ["Dans chaque phrase, je cherche ", { t: "les mots avec é", k: true }, " !"],
        ],
      },
    ],
    retenir: ["Le son ", { t: "é", k: true }, " : ", { t: "bébé, école, vélo, télé, café", k: true }, " — au début, au milieu ou à la fin du mot !"],
  },
  {
    id: "lecon3", apres: 11, num: 3,
    titre: "LES SONS È ET Ê",
    titreS: "Les sons è et ê",
    plage: "10 à 11",
    image: { file: "ia_u1_sons_ee.jpg", w: 1376, h: 768, legende: "Ma mère, mon père, mon frère : j'entends le son ouvert è !" },
    subs: [
      {
        t: "A. Les lettres",
        paras: [
          ["« ", { t: "è", k: true }, " » accent grave — « ", { t: "ê", k: true }, " » accent circonflexe : le son ", { t: "ouvert", k: true }, " !"],
        ],
      },
      {
        t: "B. Les mots",
        paras: [
          [{ t: "mère", k: true }, " — ", { t: "père", k: true }, " — ", { t: "frère", k: true }, " — ", { t: "forêt", k: true }, " — ", { t: "fête", k: true }],
        ],
      },
      {
        t: "C. Les phrases",
        paras: [
          ["« ", { t: "Ma mère fait une fête.", k: true }, " » — « ", { t: "Le frère va dans la forêt.", k: true }, " » — « ", { t: "Le père arrive.", k: true }, " »"],
          ["Dans chaque phrase, je cherche ", { t: "les mots avec è, ê", k: true }, " !"],
        ],
      },
    ],
    retenir: ["è et ê = le son ", { t: "ouvert", k: true }, " de ", { t: "mère, père, frère, forêt, fête", k: true }, "."],
  },
  {
    id: "lecon4", apres: 12, num: 4,
    titre: "ÉCRIRE É, È ET Ê",
    titreS: "Écrire é, è et ê",
    plage: "12",
    image: null,
    subs: [
      {
        t: "A. Les trois accents",
        paras: [
          [{ t: "é", k: true }, " accent aigu — ", { t: "è", k: true }, " accent grave — ", { t: "ê", k: true }, " accent circonflexe"],
        ],
      },
      {
        t: "B. La dictée",
        paras: [
          ["J'écris : ", { t: "mère, école, fête, vélo", k: true }, " avec les accents bien placés !"],
        ],
      },
    ],
    retenir: ["J'écris les accents ", { t: "é, è, ê", k: true }, " au-dessus du e, sans les oublier !"],
  },
  {
    id: "lecon5", apres: 16, num: 5,
    titre: "MA FAMILLE",
    titreS: "Ma famille",
    plage: "13 à 16",
    image: { file: "ia_u2_famille.jpg", w: 1376, h: 768, legende: "Dans ma famille, il y a mon papa, ma maman, mon frère, ma sœur... et le bébé !" },
    subs: [
      {
        t: "A. Les mots de la famille",
        paras: [
          [{ t: "papa", k: true }, " — ", { t: "maman", k: true }, " — ", { t: "le frère", k: true }, " — ", { t: "la sœur", k: true }, " — ", { t: "le bébé", k: true }],
        ],
      },
      {
        t: "B. La famille élargie",
        paras: [
          [{ t: "le grand-père", k: true }, " — ", { t: "la grand-mère", k: true }, " — ", { t: "l'oncle", k: true }, " — ", { t: "la tante", k: true }, " — ", { t: "le cousin", k: true }, " — ", { t: "la cousine", k: true }],
          ["La sœur de ma maman est ma ", { t: "tante", k: true }, " ; le fils de ma tante est mon ", { t: "cousin", k: true }, "."],
        ],
      },
      {
        t: "C. Voici ma famille",
        paras: [
          ["« ", { t: "Voici ma famille. Voici mon papa, ma maman, mon frère et ma sœur.", k: true }, " »"],
          ["« ", { t: "J'aime ma famille.", k: true }, " »"],
        ],
      },
      {
        t: "D. La comptine et le jeu",
        paras: [
          ["« ", { t: "Papa, maman, frère et sœur,", k: true }, " » — « ", { t: "ma famille est mon bonheur.", k: true }, " »"],
          ["Le jeu « ", { t: "Qui manque-t-il ?", k: true }, " » : je retrouve le membre de la famille caché !"],
        ],
      },
    ],
    retenir: ["Dans ma famille, il y a ", { t: "papa, maman, mes frères et mes sœurs", k: true }, " — et ", { t: "j'aime ma famille", k: true }, " !"],
  },
  {
    id: "lecon6", apres: 20, num: 6,
    titre: "MON, MA, TON, TA, SON, SA",
    titreS: "Mon, ma, ton, ta, son, sa",
    plage: "17 à 20",
    image: { file: "ia_u2_possessifs.jpg", w: 1376, h: 768, legende: "Mon cahier, sa gomme : les petits mots qui disent à qui c'est !" },
    subs: [
      {
        t: "A. mon, ma (moi)",
        paras: [
          [{ t: "mon papa", k: true }, " — ", { t: "mon frère", k: true }, " — ", { t: "mon grand-père", k: true }, " / ", { t: "ma maman", k: true }, " — ", { t: "ma sœur", k: true }, " — ", { t: "ma grand-mère", k: true }],
        ],
      },
      {
        t: "B. ton, ta (toi)",
        paras: [
          [{ t: "ton papa", k: true }, " — ", { t: "ton frère", k: true }, " — ", { t: "ton oncle", k: true }, " / ", { t: "ta maman", k: true }, " — ", { t: "ta sœur", k: true }, " — ", { t: "ta tante", k: true }],
        ],
      },
      {
        t: "C. son, sa (lui, elle)",
        paras: [
          [{ t: "son papa", k: true }, " — ", { t: "son frère", k: true }, " — ", { t: "son oncle", k: true }, " / ", { t: "sa maman", k: true }, " — ", { t: "sa sœur", k: true }, " — ", { t: "sa tante", k: true }],
        ],
      },
      {
        t: "D. La règle rapide",
        paras: [
          ["papa, frère, oncle, cahier → ", { t: "mon, ton, son", k: true }, " — maman, sœur, tante, gomme → ", { t: "ma, ta, sa", k: true }],
        ],
      },
    ],
    retenir: [{ t: "Mon, ton, son", k: true }, " devant un garçon — ", { t: "ma, ta, sa", k: true }, " devant une fille : je réponds vite et juste !"],
  },
  {
    id: "lecon7", apres: 24, num: 7,
    titre: "LE SON U",
    titreS: "Le son u",
    plage: "21 à 24",
    image: { file: "ia_u2_son_u.jpg", w: 1376, h: 768, legende: "La jupe, la lune, la rue, la tortue : j'entends le son u !" },
    subs: [
      {
        t: "A. La lettre",
        paras: [
          ["Le son ", { t: "u", k: true }, " se lit avec la lettre ", { t: "u", k: true }, " — lèvres rondes !"],
        ],
      },
      {
        t: "B. Les mots",
        paras: [
          [{ t: "une", k: true }, " — ", { t: "du", k: true }, " — ", { t: "tu", k: true }, " — ", { t: "salut", k: true }, " — ", { t: "jupe", k: true }, " — ", { t: "lune", k: true }, " — ", { t: "rue", k: true }, " — ", { t: "tortue", k: true }],
          [{ t: "mur", k: true }, " — ", { t: "fumée", k: true }, " — ", { t: "plume", k: true }, " — ", { t: "bureau", k: true }],
        ],
      },
      {
        t: "C. Sa place dans le mot",
        paras: [
          ["Le u peut être au ", { t: "début", k: true }, " (une), au ", { t: "milieu", k: true }, " (mur) ou à ", { t: "la fin", k: true }, " (salut)."],
        ],
      },
      {
        t: "D. Les phrases",
        paras: [
          ["« ", { t: "Salut, papa !", k: true }, " » — « ", { t: "La tortue a une jupe bleue.", k: true }, " » — « ", { t: "Le mur de la rue est bleu.", k: true }, " »"],
          ["Dans chaque phrase, je cherche ", { t: "les mots avec u", k: true }, " !"],
        ],
      },
      {
        t: "E. J'écris le u",
        paras: [
          ["Le ", { t: "u", k: true }, " : deux montées et une courbe en bas ! J'écris : ", { t: "jupe, lune, rue, salut", k: true }, " sans oublier le u !"],
        ],
      },
    ],
    retenir: ["Je lis et j'écris : ", { t: "jupe, lune, rue, tortue, mur, bureau", k: true }, " — lèvres rondes pour le son ", { t: "u", k: true }, " !"],
  },
  {
    id: "lecon8", apres: 27, num: 8,
    titre: "LE SON EU",
    titreS: "Le son eu",
    plage: "25 à 27",
    image: { file: "ia_u2_son_eu.jpg", w: 1376, h: 768, legende: "Le jeu, le feu, deux fleurs, les yeux : j'entends le son eu !" },
    subs: [
      {
        t: "A. Les lettres",
        paras: [
          ["Le son ", { t: "eu", k: true }, " s'écrit avec ", { t: "deux lettres", k: true }, " : ", { t: "e-u", k: true }, " !"],
        ],
      },
      {
        t: "B. Les mots",
        paras: [
          [{ t: "jeu", k: true }, " — ", { t: "feu", k: true }, " — ", { t: "deux", k: true }, " — ", { t: "les yeux", k: true }, " — ", { t: "les cheveux", k: true }],
          [{ t: "la fleur", k: true }, " — ", { t: "le docteur", k: true }, " — ", { t: "le facteur", k: true }, " — ", { t: "le voleur", k: true }],
        ],
      },
      {
        t: "C. Sa place dans le mot",
        paras: [
          ["Le eu est souvent à ", { t: "la fin", k: true }, " : fleur, facteur, docteur."],
        ],
      },
      {
        t: "D. Les phrases",
        paras: [
          ["« ", { t: "Mon petit frère a les yeux noirs.", k: true }, " » — « ", { t: "Le feu est rouge.", k: true }, " » — « ", { t: "Papa me donne deux fleurs.", k: true }, " »"],
          ["Dans chaque phrase, je cherche ", { t: "les mots avec eu", k: true }, " !"],
        ],
      },
    ],
    retenir: ["Le son ", { t: "eu", k: true }, " : ", { t: "jeu, feu, deux, yeux, cheveux, fleur", k: true }, " — souvent à la fin du mot !"],
  },
  {
    id: "lecon9", apres: 28, num: 9,
    titre: "ÉCRIRE EU — BILAN DE L'UNITÉ",
    titreS: "Écrire eu et bilan de l'unité",
    plage: "28",
    image: null,
    subs: [
      {
        t: "A. La dictée",
        paras: [
          ["J'écris : ", { t: "jeu, deux, cheveux", k: true }, " avec le eu bien écrit !"],
        ],
      },
      {
        t: "B. Bilan de l'unité",
        paras: [
          [{ t: "La famille", k: true }, " + ", { t: "mon, ma, ton, ta, son, sa", k: true }, " + les sons ", { t: "u et eu", k: true }, " : tout est appris !"],
        ],
      },
    ],
    retenir: ["Unité 2 réussie : ", { t: "la famille, les possessifs, les sons u et eu", k: true }, " !"],
  },
];

module.exports = F;
