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

  // ---------- Unité 3 — La toilette ----------
  {
    id: "lecon10", apres: 30, num: 10,
    titre: "LE VOCABULAIRE DE LA TOILETTE", titreS: "Le vocabulaire de la toilette",
    plage: "29 à 30",
    image: { file: "ia_u3_toilette.jpg", w: 1376, h: 768, legende: "Le savon, la serviette, le lavabo : je me lave les mains !" },
    subs: [
      { t: "A. Les objets de la toilette", paras: [[{ t: "le savon", k: true }, " — ", { t: "la serviette", k: true }, " — ", { t: "le lavabo", k: true }, " — ", { t: "l'eau", k: true }, " — ", { t: "la brosse", k: true }, " — ", { t: "le peigne", k: true }]] },
      { t: "B. Les gestes du bain", paras: [["« ", { t: "Je prends mon bain.", k: true }, " » — ", { t: "je me savonne", k: true }, " — ", { t: "je me rince", k: true }, " — ", { t: "je me sèche", k: true }, " — ", { t: "je suis propre", k: true }, " !"]] },
    ],
    retenir: ["Pour la toilette : ", { t: "le savon, la serviette, le lavabo, l'eau", k: true }, " — je prends mon bain et je suis ", { t: "propre", k: true }, " !"],
  },
  {
    id: "lecon11", apres: 32, num: 11,
    titre: "LES DENTS ; PROPRE OU SALE", titreS: "Les dents ; propre ou sale",
    plage: "31 à 32",
    image: { file: "ia_u3_dents.jpg", w: 1376, h: 768, legende: "Matin et soir, je me brosse les dents avec du dentifrice." },
    subs: [
      { t: "A. Les mots des dents", paras: [[{ t: "la brosse à dents", k: true }, " — ", { t: "le dentifrice", k: true }, " — ", { t: "se brosser les dents", k: true }, " : matin et soir !"]] },
      { t: "B. Propre ou sale", paras: [[{ t: "propre", k: true }, " ≠ ", { t: "sale", k: true }, " : après la toilette, ", { t: "il est propre", k: true }, ", ", { t: "elle est propre", k: true }, "."]] },
    ],
    retenir: ["Je me brosse les dents ", { t: "matin et soir", k: true }, " — et le contraire de ", { t: "propre", k: true }, ", c'est ", { t: "sale", k: true }, "."],
  },
  {
    id: "lecon12", apres: 34, num: 12,
    titre: "LA COMPTINE ET LE DIALOGUE DE LA TOILETTE", titreS: "La comptine et le dialogue de la toilette",
    plage: "33 à 34",
    image: { file: "ia_u3_comptine.jpg", w: 1376, h: 768, legende: "« Je me lave, je me lave, avec du savon... je suis propre et content ! »" },
    subs: [
      { t: "A. La comptine", paras: [["« ", { t: "Je me lave, je me lave,", k: true }, " » — « ", { t: "avec du savon ;", k: true }, " »"], ["« ", { t: "je me rince, je me sèche,", k: true }, " » — « ", { t: "je suis propre et content !", k: true }, " »"]] },
      { t: "B. Le dialogue", paras: [["« — ", { t: "Tu es propre ?", k: true }, " — ", { t: "Oui, je suis propre !", k: true }, " » — « — Montre tes mains... — ", { t: "Regarde, elles sont propres !", k: true }, " »"]] },
    ],
    retenir: ["Ma comptine : ", { t: "« Je suis propre et content ! »", k: true }, " — et le dialogue : « ", { t: "Tu es propre ? — Oui !", k: true }, " »"],
  },
  {
    id: "lecon13", apres: 37, num: 13,
    titre: "LE SON AN", titreS: "Le son an",
    plage: "35 à 37",
    image: { file: "ia_u3_son_an.jpg", w: 1376, h: 768, legende: "La lampe, la banane, le canard, le pantalon : j'entends le son an !" },
    subs: [
      { t: "A. Le son", paras: [["Le son ", { t: "an", k: true }, " : j'ouvre la bouche et je dis « aaan ! »"]] },
      { t: "B. Les mots", paras: [[{ t: "la lampe", k: true }, " — ", { t: "la banane", k: true }, " — ", { t: "le canard", k: true }, " — ", { t: "le pantalon", k: true }, " — ", { t: "la dent", k: true }, " — ", { t: "maman", k: true }, " — ", { t: "le banc", k: true }]] },
      { t: "C. Sa place", paras: [["Le son an peut être au ", { t: "milieu", k: true }, " (banane, lampe, canard) ou à ", { t: "la fin", k: true }, " (banc, dent, pantalon)."]] },
      { t: "D. Les phrases", paras: [["« ", { t: "Papa a un pantalon.", k: true }, " » — « ", { t: "La dent de Fara bouge.", k: true }, " » — « ", { t: "Le canard boit à la mare.", k: true }, " » — « ", { t: "Maman allume la lampe.", k: true }, " »"]] },
    ],
    retenir: ["Le son ", { t: "an", k: true }, " : ", { t: "lampe, banane, canard, pantalon, dent, maman", k: true }, " — bouche ouverte !"],
  },
  {
    id: "lecon14", apres: 39, num: 14,
    titre: "ÉCRIRE AN", titreS: "Écrire an",
    plage: "38 à 39",
    image: null,
    subs: [
      { t: "A. Les lettres", paras: [[{ t: "an", k: true }, " : d'abord ", { t: "a", k: true }, ", puis ", { t: "n", k: true }, " — dans dent, le son an s'écrit ", { t: "en", k: true }, "."]] },
      { t: "B. La dictée et la phrase", paras: [["J'écris : ", { t: "dent, lampe, banane, pantalon", k: true }, " — et la phrase : « ", { t: "Papa a un pantalon.", k: true }, " » (majuscule, point)."]] },
    ],
    retenir: ["J'écris le son ", { t: "an", k: true }, " : ", { t: "dent, lampe, banane, pantalon", k: true }, " — majuscule et point dans la phrase !"],
  },
  {
    id: "lecon15", apres: 40, num: 15,
    titre: "BILAN DE L'UNITÉ 3", titreS: "Bilan de l'unité 3",
    plage: "40",
    image: null,
    subs: [
      { t: "A. Ce que je sais dire", paras: [[{ t: "le savon, la serviette, le lavabo", k: true }, " — ", { t: "je prends mon bain", k: true }, " — ", { t: "je me brosse les dents", k: true }, " — ", { t: "propre / sale", k: true }]] },
      { t: "B. Ce que je sais lire et écrire", paras: [["Le son ", { t: "an", k: true }, " : ", { t: "lampe, banane, canard, pantalon, dent, maman", k: true }, " — « ", { t: "Papa a un pantalon.", k: true }, " »"]] },
    ],
    retenir: ["Unité 3 réussie : ", { t: "la toilette, les dents, la comptine et le son an", k: true }, " !"],
  },

  // ---------- Unité 4 — L'école ----------
  {
    id: "lecon16", apres: 44, num: 16,
    titre: "LE VOCABULAIRE DE LA CLASSE", titreS: "Le vocabulaire de la classe",
    plage: "41 à 44",
    image: { file: "ia_u4_ecole.jpg", w: 1376, h: 768, legende: "Dans ma classe, il y a le cahier, le crayon, la gomme et la règle !" },
    subs: [
      { t: "A. Les objets de la classe", paras: [[{ t: "le cahier", k: true }, " — ", { t: "le crayon", k: true }, " — ", { t: "la gomme", k: true }, " — ", { t: "la règle", k: true }, " — ", { t: "le tableau", k: true }, " — ", { t: "la craie", k: true }]] },
      { t: "B. Le cartable et la liste", paras: [["« ", { t: "Dans mon cartable, il y a mon cahier, mon crayon, ma gomme et ma règle.", k: true }, " » — « ", { t: "Dans ma classe, il y a..., ..., et...", k: true }, " »"]] },
      { t: "C. Les questions", paras: [["« — ", { t: "Prête-moi ta règle, s'il te plaît.", k: true }, " — ", { t: "Tiens ! — Merci ! — De rien.", k: true }, " »"], ["« — ", { t: "Qu'est-ce que c'est ?", k: true }, " (ma voix monte !) — ", { t: "C'est le cahier.", k: true }, " »"]] },
    ],
    retenir: ["Ma classe : ", { t: "cahier, crayon, gomme, règle, tableau, craie", k: true }, " — et les mots polis : ", { t: "s'il te plaît, merci", k: true }, " !"],
  },
  {
    id: "lecon17", apres: 46, num: 17,
    titre: "LA COMPTINE DE L'ÉCOLE", titreS: "La comptine de l'école",
    plage: "45 à 46",
    image: { file: "ia_u4_cartable.jpg", w: 1376, h: 768, legende: "Cahier, crayon, gomme, règle : dans mon cartable, il y a tout !" },
    subs: [
      { t: "A. La comptine", paras: [["« ", { t: "Cahier, crayon, gomme et règle,", k: true }, " » — « ", { t: "dans ma classe j'apprends mon rôle :", k: true }, " »"], ["« ", { t: "je lis, j'écris, je compte aussi,", k: true }, " » — « ", { t: "à l'école j'apprends, c'est ainsi !", k: true }, " »"]] },
    ],
    retenir: ["Ma comptine : « ", { t: "À l'école j'apprends, c'est ainsi !", k: true }, " » — et ma liste : « ", { t: "il y a..., et...", k: true }, " »."],
  },
  {
    id: "lecon18", apres: 47, num: 18,
    titre: "LE SON CH", titreS: "Le son ch",
    plage: "47",
    image: { file: "ia_u4_son_ch.jpg", w: 1376, h: 768, legende: "Le chat, le chapeau, la chaussure : j'entends le son ch !" },
    subs: [
      { t: "A. Le son", paras: [["Le son ", { t: "ch", k: true }, " s'écrit avec ", { t: "deux lettres : c-h", k: true }, " — lèvres en avant !"]] },
      { t: "B. Les mots", paras: [[{ t: "le chat", k: true }, " — ", { t: "le chapeau", k: true }, " — ", { t: "la chaussure", k: true }, " — ", { t: "la mouche", k: true }]] },
    ],
    retenir: ["Le son ", { t: "ch", k: true }, " : ", { t: "chat, chapeau, chaussure, mouche", k: true }, "."],
  },
  {
    id: "lecon19", apres: 49, num: 19,
    titre: "LE SON S (S, C, Ç) ET LE SON ON", titreS: "Le son s et le son on",
    plage: "48 à 49",
    image: { file: "ia_u4_son_on.jpg", w: 1376, h: 768, legende: "La maison, le ballon, le bonbon : j'entends le son on !" },
    subs: [
      { t: "A. Le son s : trois écritures", paras: [[{ t: "s", k: true }, " : ", { t: "salade, radis", k: true }, " — ", { t: "c", k: true }, " devant i : ", { t: "citron", k: true }, " — ", { t: "ç", k: true }, " : ", { t: "garçon", k: true }]] },
      { t: "B. Le son on", paras: [["Le son ", { t: "on", k: true }, " s'écrit ", { t: "o-n", k: true }, " — bouche ronde : ", { t: "la maison", k: true }, ", ", { t: "le ballon", k: true }, ", ", { t: "le bonbon", k: true }, ", ", { t: "le pantalon", k: true }, ", ", { t: "le mouton", k: true }]] },
    ],
    retenir: ["Le son ", { t: "s", k: true }, " s'écrit ", { t: "s, c, ç", k: true }, " — le son ", { t: "on", k: true }, " : ", { t: "maison, ballon, bonbon", k: true }, " !"],
  },
  {
    id: "lecon20", apres: 52, num: 20,
    titre: "ÉCRIRE CH ET ON — BILAN DE L'UNITÉ", titreS: "Écrire ch et on, bilan",
    plage: "50 à 52",
    image: null,
    subs: [
      { t: "A. La dictée", paras: [["J'écris : ", { t: "chat, chapeau, mouche", k: true }, " — ", { t: "ballon, maison, bonbon", k: true }]] },
      { t: "B. Bilan de l'unité", paras: [[{ t: "L'école", k: true }, " + les mots polis + les sons ", { t: "ch, s, on", k: true }, " : tout est appris !"]] },
    ],
    retenir: ["Unité 4 réussie : ", { t: "l'école, les mots polis et les sons ch, s, on", k: true }, " !"],
  },
  // ---------- Unité 5 — Les cadeaux et les vêtements ----------
  {
    id: "lecon21", apres: 55, num: 21,
    titre: "LE VOCABULAIRE DES VÊTEMENTS ET DES CADEAUX", titreS: "Le vocabulaire des vêtements et des cadeaux",
    plage: "53 à 55",
    image: { file: "ia_u5_tenue.jpg", w: 1376, h: 768, legende: "Je mets ma chemise, mes chaussures ; ma sœur tient sa robe rouge — et un beau cadeau attend sur la table !" },
    subs: [
      { t: "A. Les vêtements", paras: [[{ t: "le pantalon", k: true }, " — ", { t: "la robe", k: true }, " — ", { t: "la chemise", k: true }, " — ", { t: "le chapeau", k: true }, " — ", { t: "les chaussures", k: true }, " — ", { t: "le gilet", k: true }]] },
      { t: "B. Je m'habille", paras: [["« ", { t: "Je mets mon pantalon, je boutonne ma chemise, j'attache mes chaussures.", k: true }, " » — « ", { t: "J'enlève mon chapeau.", k: true }, " »"]] },
      { t: "C. Le cadeau", paras: [["« — ", { t: "Tiens, c'est pour toi !", k: true }, " — ", { t: "Merci pour ton beau cadeau !", k: true }, " »"]] },
    ],
    retenir: ["Mes vêtements : ", { t: "pantalon, robe, chemise, chapeau, chaussures, gilet", k: true }, " — et le mot poli : ", { t: "merci pour ton beau cadeau !", k: true }],
  },
  {
    id: "lecon22", apres: 59, num: 22,
    titre: "LE DIALOGUE, LA COMPTINE ET LA DESCRIPTION", titreS: "Le dialogue, la comptine et la description",
    plage: "56 à 59",
    image: { file: "ia_u5_cadeau.jpg", w: 1376, h: 768, legende: "« Tiens, c'est pour toi ! — Merci pour ton beau cadeau ! »" },
    subs: [
      { t: "A. Le dialogue", paras: [["« — ", { t: "Qu'est-ce que tu mets ?", k: true }, " — ", { t: "Je mets ma robe rouge.", k: true }, " — ", { t: "C'est très joli !", k: true }, " »"]] },
      { t: "B. La comptine", paras: [["« ", { t: "Pantalon, robe et chemise,", k: true }, " / ", { t: "quand je m'habille, tout me plaît ;", k: true }, " »"], ["« ", { t: "chapeau, chaussures et gilet,", k: true }, " / ", { t: "je suis beau, je suis à l'aise !", k: true }, " »"]] },
      { t: "C. Je décris", paras: [["« ", { t: "Je porte..., ..., et...", k: true }, " » — « ", { t: "C'est un cadeau. Il est joli. Je l'aime bien.", k: true }, " »"]] },
    ],
    retenir: ["« ", { t: "Qu'est-ce que tu mets ? — Je mets...", k: true }, " » + une couleur : c'est joli !"],
  },
  {
    id: "lecon23", apres: 61, num: 23,
    titre: "LE SON EIL ET LE SON AIL", titreS: "Le son eil et le son ail",
    plage: "60 à 61",
    image: { file: "ia_u5_son_eil.jpg", w: 1376, h: 768, legende: "Sous le soleil, le réveil sonne : j'ouvre grand mon oreille !" },
    subs: [
      { t: "A. Le son eil", paras: [["Le son ", { t: "eil", k: true }, " s'écrit ", { t: "e-i-l", k: true }, " : ", { t: "le soleil", k: true }, " — ", { t: "l'oreille", k: true }, " — ", { t: "le réveil", k: true }, " — ", { t: "pareille", k: true }]] },
      { t: "B. Le son ail", paras: [["Le son ", { t: "ail", k: true }, " s'écrit ", { t: "a-i-l", k: true }, " : ", { t: "le travail", k: true }, " — ", { t: "l'ail", k: true }]] },
      { t: "C. La phrase", paras: [["« ", { t: "Sous le soleil, je travaille avec le sourire.", k: true }, " »"]] },
    ],
    retenir: ["Le son ", { t: "eil", k: true }, " : ", { t: "soleil, oreille, réveil", k: true }, " — le son ", { t: "ail", k: true }, " : ", { t: "travail, ail", k: true }, " !"],
  },
  {
    id: "lecon24", apres: 63, num: 24,
    titre: "LE SON J ET LE SON Z", titreS: "Le son j et le son z",
    plage: "62 à 63",
    image: { file: "ia_u5_son_z.jpg", w: 1376, h: 768, legende: "Le zèbre et le zébu dans la savane : j'entends le son z ! Et mon doudou, mon jouet : j !"},
    subs: [
      { t: "A. Le son j", paras: [["Le son ", { t: "j", k: true }, " s'écrit avec un ", { t: "petit crochet et un point", k: true }, " : ", { t: "le jardin", k: true }, " — ", { t: "jaune", k: true }, " — ", { t: "le jouet", k: true }, " — ", { t: "le jambon", k: true }]] },
      { t: "B. Le son z", paras: [["Le son ", { t: "z", k: true }, " s'écrit ", { t: "z", k: true }, ", comme une petite vague : ", { t: "le zèbre", k: true }, " — ", { t: "le zébu", k: true }, " — ", { t: "le zigzag", k: true }]] },
    ],
    retenir: ["Le son ", { t: "j", k: true }, " : ", { t: "jardin, jouet, jambon", k: true }, " — le son ", { t: "z", k: true }, " : ", { t: "zèbre, zébu, zigzag", k: true }, " !"],
  },
  {
    id: "lecon25", apres: 65, num: 25,
    titre: "ÉCRIRE J ET Z — BILAN DE L'UNITÉ", titreS: "Écrire j et z, bilan",
    plage: "64 à 65",
    image: null,
    subs: [
      { t: "A. La dictée", paras: [["J'écris : ", { t: "jardin, jouet, jambon", k: true }, " — ", { t: "zèbre, zébu, zigzag", k: true }]] },
      { t: "B. Bilan de l'unité", paras: [[{ t: "Les vêtements et les cadeaux", k: true }, " + les sons ", { t: "eil, ail, j, z", k: true }, " : tout est appris !"]] },
    ],
    retenir: ["Unité 5 réussie : ", { t: "les vêtements, les cadeaux et les sons eil, ail, j, z", k: true }, " !"],
  },
  // ---------- Unité 6 — Le marché ----------
  {
    id: "lecon26", apres: 69, num: 26,
    titre: "LE VOCABULAIRE DU MARCHÉ", titreS: "Le vocabulaire du marché",
    plage: "66 à 69",
    image: { file: "ia_u6_marche.jpg", w: 1376, h: 768, legende: "Au marché : la marchande vend des fruits et des légumes ; la cliente met ses achats dans son panier." },
    subs: [
      { t: "A. Les fruits et les légumes", paras: [[{ t: "la banane", k: true }, " — ", { t: "la mangue", k: true }, " — ", { t: "l'ananas", k: true }, " — ", { t: "l'orange", k: true }, " / ", { t: "la tomate", k: true }, " — ", { t: "l'oignon", k: true }, " — ", { t: "le brède", k: true }]] },
      { t: "B. J'achète", paras: [["« ", { t: "J'achète du riz, de l'huile, des tomates et des bananes.", k: true }, " » — le mot ", { t: "et", k: true }, " avant le dernier !"]] },
      { t: "C. Les mots du marché", paras: [[{ t: "le marché", k: true }, " — ", { t: "l'étal", k: true }, " — ", { t: "la marchande", k: true }, " — ", { t: "la cliente", k: true }, " — ", { t: "le panier", k: true }, " — ", { t: "l'argent", k: true }]] },
    ],
    retenir: ["Au marché : ", { t: "fruits, légumes, étal, marchande, panier, argent", k: true }, " — et j'énumère : « ", { t: "j'achète..., ..., et...", k: true }, " »."],
  },
  {
    id: "lecon27", apres: 71, num: 27,
    titre: "LE DIALOGUE DU MARCHÉ", titreS: "Le dialogue du marché",
    plage: "70 à 71",
    image: { file: "ia_u6_achat.jpg", w: 1376, h: 768, legende: "« Bonjour, Madame ! Je voudrais des bananes, s'il vous plaît. — Voilà. — Merci ! »" },
    subs: [
      { t: "A. Le dialogue", paras: [["« — ", { t: "Bonjour, Madame !", k: true }, " — ", { t: "Bonjour ! Qu'est-ce que tu veux ?", k: true }, " »"], ["« — ", { t: "Je voudrais des bananes, s'il vous plaît.", k: true }, " — ", { t: "Voilà. — Merci, au revoir !", k: true }, " »"]] },
      { t: "B. Le prix", paras: [["« — ", { t: "Combien coûte le kilo de tomates ?", k: true }, " — ", { t: "Cinq cents ariary.", k: true }, " »"]] },
    ],
    retenir: ["Au marché je dis : ", { t: "bonjour, je voudrais..., s'il vous plaît, merci", k: true }, " — et je demande : ", { t: "« Combien coûte... ? »", k: true }],
  },
  {
    id: "lecon28", apres: 75, num: 28,
    titre: "LA COMPTINE DU MARCHÉ ET LA DESCRIPTION", titreS: "La comptine du marché et la description",
    plage: "72 à 75",
    image: null,
    subs: [
      { t: "A. La comptine", paras: [["« ", { t: "Au marché de mon village,", k: true }, " / ", { t: "j'achète riz et tomates ;", k: true }, " »"], ["« ", { t: "bananes, mangues et oranges,", k: true }, " / ", { t: "mon panier est plein, quel matin !", k: true }, " »"]] },
      { t: "B. Je pèse", paras: [[{ t: "le kilo", k: true }, " — ", { t: "la balance", k: true }, " — ", { t: "lourd", k: true }, " / ", { t: "léger", k: true }, " : « ", { t: "Un kilo de tomates, s'il vous plaît.", k: true }, " »"]] },
      { t: "C. Je décris", paras: [["« ", { t: "La mangue est jaune. Elle est sucrée. Je l'aime bien.", k: true }, " » — ", { t: "sucré, acide, juteux", k: true }]] },
    ],
    retenir: ["Ma comptine : « ", { t: "Mon panier est plein, quel matin !", k: true }, " » — je pèse ", { t: "un kilo", k: true }, " et je décris : ", { t: "« Il/Elle est..., je l'aime bien. »", k: true }],
  },
  {
    id: "lecon29", apres: 76, num: 29,
    titre: "LE SON OI", titreS: "Le son oi",
    plage: "76",
    image: { file: "ia_u6_son_oi.jpg", w: 1376, h: 768, legende: "L'oie, la voiture, le toit, la poire : j'entends le son oi !" },
    subs: [
      { t: "A. Le son", paras: [["Le son ", { t: "oi", k: true }, " s'écrit avec ", { t: "deux lettres : o-i", k: true }, " — la bouche passe de o à i !"]] },
      { t: "B. Les mots", paras: [[{ t: "l'oie", k: true }, " — ", { t: "la voiture", k: true }, " — ", { t: "le toit", k: true }, " — ", { t: "la poire", k: true }, " — ", { t: "trois", k: true }]] },
    ],
    retenir: ["Le son ", { t: "oi", k: true }, " : ", { t: "l'oie, la voiture, le toit, la poire", k: true }, "."],
  },
  {
    id: "lecon30", apres: 78, num: 30,
    titre: "LE SON UI ET LE SON PH", titreS: "Le son ui et le son ph",
    plage: "77 à 78",
    image: { file: "ia_u6_son_ph.jpg", w: 1376, h: 768, legende: "Le phare, l'éléphant, le dauphin, la photo : ph se prononce f !" },
    subs: [
      { t: "A. Le son ui", paras: [["Le son ", { t: "ui", k: true }, " s'écrit ", { t: "u-i", k: true }, " : ", { t: "le fruit", k: true }, " — ", { t: "la nuit", k: true }, " — ", { t: "la pluie", k: true }, " — ", { t: "cuit", k: true }]] },
      { t: "B. Le son ph", paras: [["Le son ", { t: "ph", k: true }, " s'écrit ", { t: "p-h", k: true }, " et se prononce ", { t: "f", k: true }, " : ", { t: "le phare", k: true }, " — ", { t: "l'éléphant", k: true }, " — ", { t: "le dauphin", k: true }, " — ", { t: "la photo", k: true }]] },
    ],
    retenir: ["Le son ", { t: "ui", k: true }, " : ", { t: "fruit, nuit, pluie", k: true }, " — le son ", { t: "ph = f", k: true }, " : ", { t: "phare, éléphant, dauphin, photo", k: true }, " !"],
  },
  {
    id: "lecon31", apres: 83, num: 31,
    titre: "ÉCRIRE OI, UI ET PH — BILAN DE L'UNITÉ", titreS: "Écrire oi, ui et ph, bilan",
    plage: "79 à 83",
    image: null,
    subs: [
      { t: "A. La dictée", paras: [["J'écris : ", { t: "oie, fruit, phare", k: true }, " — ", { t: "la pluie tombe sur le toit", k: true }]] },
      { t: "B. Bilan de l'unité", paras: [[{ t: "Le marché", k: true }, " (fruits, légumes, dialogue, prix) + les sons ", { t: "oi, ui, ph", k: true }, " : tout est appris !"]] },
    ],
    retenir: ["Unité 6 réussie : ", { t: "le marché, le dialogue de l'achat et les sons oi, ui, ph", k: true }, " !"],
  },
  // ---------- Unité 7 — Les repas ----------
  {
    id: "lecon32", apres: 84, num: 32,
    titre: "LE VOCABULAIRE DES REPAS", titreS: "Le vocabulaire des repas",
    plage: "84",
    image: { file: "ia_u7_repas.jpg", w: 1376, h: 768, legende: "La famille autour du grand plat de riz : brèdes, laoka, soupe, pain et bananes !" },
    subs: [
      { t: "A. Les repas", paras: [[{ t: "le petit-déjeuner", k: true }, " (le matin) — ", { t: "le déjeuner", k: true }, " (à midi) — ", { t: "le dîner", k: true }, " (le soir)"]] },
      { t: "B. Les aliments", paras: [[{ t: "le riz", k: true }, " — ", { t: "le laoka", k: true }, " — ", { t: "la viande", k: true }, " — ", { t: "les brèdes", k: true }, " — ", { t: "la soupe", k: true }, " — ", { t: "le pain", k: true }]] },
    ],
    retenir: ["Les repas malgaches : ", { t: "le riz avec le laoka — brèdes, viande, soupe, pain", k: true }, "."],
  },
  {
    id: "lecon33", apres: 86, num: 33,
    titre: "LE PETIT-DÉJEUNER, LE DÉJEUNER ET LE DÎNER", titreS: "Les repas de la journée",
    plage: "85 à 86",
    image: null,
    subs: [
      { t: "A. Le petit-déjeuner", paras: [["« ", { t: "Je mange du pain et je bois du lait.", k: true }, " » — ", { t: "le thé, la banane, l'œuf", k: true }]] },
      { t: "B. Les moments", paras: [[{ t: "le matin", k: true }, " — ", { t: "à midi", k: true }, " — ", { t: "le soir", k: true }, " : « ", { t: "À midi, je mange du riz et des brèdes.", k: true }, " »"]] },
    ],
    retenir: ["Les 3 repas : ", { t: "le matin", k: true }, ", ", { t: "à midi", k: true }, ", ", { t: "le soir", k: true }, " — et les mots ", { t: "je mange / je bois", k: true }, "."],
  },
  {
    id: "lecon34", apres: 88, num: 34,
    titre: "LE DIALOGUE DU REPAS ET LA POLITESSE", titreS: "Le dialogue du repas et la politesse",
    plage: "87 à 88",
    image: null,
    subs: [
      { t: "A. Le dialogue", paras: [["« — ", { t: "Qu'est-ce que tu manges ?", k: true }, " — ", { t: "Je mange du riz et des brèdes.", k: true }, " — ", { t: "C'est bon ?", k: true }, " — ", { t: "Oui, c'est très bon !", k: true }, " »"]] },
      { t: "B. La politesse", paras: [["Je ", { t: "me lave les mains", k: true }, " — « ", { t: "Bon appétit !", k: true }, " » — « ", { t: "Encore, s'il te plaît.", k: true }, " » — « ", { t: "Merci, c'était très bon !", k: true }, " »"]] },
    ],
    retenir: ["« ", { t: "Qu'est-ce que tu manges ? — Je mange...", k: true }, " » + la politesse : ", { t: "mains lavées, bon appétit, merci", k: true }, " !"],
  },
  {
    id: "lecon35", apres: 91, num: 35,
    titre: "LA COMPTINE DES REPAS ET LES GOÛTS", titreS: "La comptine des repas et les goûts",
    plage: "89 à 91",
    image: null,
    subs: [
      { t: "A. La comptine", paras: [["« ", { t: "Le matin, je bois du lait,", k: true }, " / ", { t: "à midi, je mange du riz ;", k: true }, " »"], ["« ", { t: "le soir, une soupe et une banane —", k: true }, " / ", { t: "bon appétit, je grandis !", k: true }, " »"]] },
      { t: "B. J'énumère", paras: [["« ", { t: "Au petit-déjeuner, je mange du pain, une banane et un œuf.", k: true }, " » — le mot ", { t: "et", k: true }, " avant le dernier !"]] },
      { t: "C. Mes goûts", paras: [["« ", { t: "J'aime la banane. Je n'aime pas le citron. Et toi ?", k: true }, " » — chacun ses goûts !"]] },
    ],
    retenir: ["Ma comptine : « ", { t: "Bon appétit, je grandis !", k: true }, " » — j'énumère avec ", { t: "et", k: true }, " et je dis mes goûts : ", { t: "« J'aime... / Je n'aime pas... »", k: true }],
  },
  {
    id: "lecon36", apres: 93, num: 36,
    titre: "LA TABLE ET LA CUISINE", titreS: "La table et la cuisine",
    plage: "92 à 93",
    image: { file: "ia_u7_cuisine.jpg", w: 1376, h: 768, legende: "Dans la cuisine : maman remue la marmite sur le feu ; je me lave les mains au bidon d'eau — ça sent bon !" },
    subs: [
      { t: "A. La table", paras: [[{ t: "la nappe", k: true }, " — ", { t: "l'assiette", k: true }, " — ", { t: "la cuillère", k: true }, " — ", { t: "le verre", k: true }, " — ", { t: "la fourchette", k: true }, " — ", { t: "le bol", k: true }]] },
      { t: "B. La cuisine", paras: [[{ t: "le feu", k: true }, " — ", { t: "la marmite", k: true }, " — ", { t: "la casserole", k: true }, " : « ", { t: "Maman allume le feu. Ça sent bon !", k: true }, " »"]] },
    ],
    retenir: ["Sur la table : ", { t: "nappe, assiette, cuillère, verre", k: true }, " — dans la cuisine : ", { t: "feu, marmite, casserole", k: true }, "."],
  },
  {
    id: "lecon37", apres: 94, num: 37,
    titre: "LE SON IN", titreS: "Le son in",
    plage: "94",
    image: { file: "ia_u7_son_in.jpg", w: 1376, h: 768, legende: "Le lapin tend la main vers le pain, dans le jardin : j'entends le son in !" },
    subs: [
      { t: "A. Le son", paras: [["Le son ", { t: "in", k: true }, " s'écrit avec ", { t: "deux lettres : i-n", k: true }, " — la voix passe par le nez !"]] },
      { t: "B. Les mots", paras: [[{ t: "la main", k: true }, " — ", { t: "le pain", k: true }, " — ", { t: "le lapin", k: true }, " — ", { t: "le vin", k: true }, " — ", { t: "le jardin", k: true }]] },
    ],
    retenir: ["Le son ", { t: "in", k: true }, " : ", { t: "la main, le pain, le lapin, le jardin", k: true }, "."],
  },
  {
    id: "lecon38", apres: 96, num: 38,
    titre: "LE SON G ET LE SON K", titreS: "Le son g et le son k",
    plage: "95 à 96",
    image: { file: "ia_u7_son_k.jpg", w: 1376, h: 768, legende: "Le coq, le café, les carottes et le kiwi : trois écritures pour le son k !" },
    subs: [
      { t: "A. Le son g", paras: [["Le son ", { t: "g", k: true }, " s'écrit ", { t: "g", k: true }, " (", { t: "gâteau, goyave", k: true }, ") ou ", { t: "g-u", k: true }, " devant e et i (", { t: "langue", k: true }, ")."]] },
      { t: "B. Le son k", paras: [["Le son ", { t: "k", k: true }, " s'écrit ", { t: "k", k: true }, " (", { t: "kilo", k: true }, "), ", { t: "c", k: true }, " (", { t: "café, carotte", k: true }, ") ou ", { t: "q-u", k: true }, " (", { t: "coq", k: true }, ") — trois écritures, un seul son !"]] },
    ],
    retenir: ["Le son ", { t: "g", k: true }, " : ", { t: "gâteau, langue", k: true }, " — le son ", { t: "k", k: true }, " s'écrit ", { t: "k, c ou qu", k: true }, " : ", { t: "kilo, café, coq", k: true }, " !"],
  },
  {
    id: "lecon39", apres: 99, num: 39,
    titre: "ÉCRIRE IN, G ET K — BILAN DE L'UNITÉ", titreS: "Écrire in, g et k, bilan",
    plage: "97 à 99",
    image: null,
    subs: [
      { t: "A. La dictée", paras: [["J'écris : ", { t: "pain, gâteau, café", k: true }, " — ", { t: "je lave mes mains avant de manger", k: true }]] },
      { t: "B. Bilan de l'unité", paras: [[{ t: "Les repas", k: true }, " (aliments, moments, politesse, table) + les sons ", { t: "in, g, k", k: true }, " : tout est appris !"]] },
    ],
    retenir: ["Unité 7 réussie : ", { t: "les repas malgaches, la politesse du repas et les sons in, g, k", k: true }, " !"],
  },
  // ---------- Unité 8 — La ferme ----------
  {
    id: "lecon40", apres: 101, num: 40,
    titre: "LES ANIMAUX DE LA FERME ET LEURS PETITS", titreS: "Les animaux de la ferme et leurs petits",
    plage: "100 à 101",
    image: { file: "ia_u8_ferme.jpg", w: 1376, h: 768, legende: "La ferme : le zébu près de sa charrette, les poules qui picorent, le cochon dans son enclos et la chèvre !" },
    subs: [
      { t: "A. Les animaux", paras: [[{ t: "la vache", k: true }, " — ", { t: "le zébu", k: true }, " — ", { t: "la poule", k: true }, " — ", { t: "le canard", k: true }, " — ", { t: "le cochon", k: true }, " — ", { t: "la chèvre", k: true }]] },
      { t: "B. Les petits", paras: [[{ t: "la vache", k: true }, " → ", { t: "le veau", k: true }, " — ", { t: "la poule", k: true }, " → ", { t: "le poussin", k: true }, " — ", { t: "le canard", k: true }, " → ", { t: "le caneton", k: true }, " — ", { t: "la chienne", k: true }, " → ", { t: "le chiot", k: true }]] },
    ],
    retenir: ["La ferme : ", { t: "vache, zébu, poule, canard, cochon, chèvre", k: true }, " — et leurs petits : ", { t: "veau, poussin, caneton", k: true }, "."],
  },
  {
    id: "lecon41", apres: 103, num: 41,
    titre: "LES TRAVAUX DES CHAMPS ET LA RIZIÈRE", titreS: "Les travaux des champs et la rizière",
    plage: "102 à 103",
    image: null,
    subs: [
      { t: "A. Les verbes", paras: [[{ t: "labourer", k: true }, " — ", { t: "semer", k: true }, " — ", { t: "planter", k: true }, " — ", { t: "arroser", k: true }, " — ", { t: "récolter", k: true }, " — dans l'ordre !"]] },
      { t: "B. La rizière", paras: [["« ", { t: "Le paysan plante le riz dans la rizière.", k: true }, " » — ", { t: "l'eau, la boue, les collines vertes", k: true }]] },
    ],
    retenir: ["Les travaux : ", { t: "labourer, semer, planter, arroser, récolter", k: true }, " — et le riz pousse dans ", { t: "la rizière", k: true }, "."],
  },
  {
    id: "lecon42", apres: 106, num: 42,
    titre: "LE DIALOGUE, LES CRIS ET LA COMPTINE DE LA FERME", titreS: "Le dialogue, les cris et la comptine de la ferme",
    plage: "104 à 106",
    image: { file: "ia_u8_poussins.jpg", w: 1376, h: 768, legende: "« Le coq chante cocorico ; la poule glousse : cot, cot, cot ! » — et le veau reste près de sa maman." },
    subs: [
      { t: "A. Le dialogue", paras: [["« — ", { t: "Qu'est-ce que tu vois ?", k: true }, " — ", { t: "Je vois la vache, le zébu et les poules.", k: true }, " » — ", { t: "« Il y a un zébu, deux poules et trois canards. »", k: true }]] },
      { t: "B. Les cris", paras: [["Le coq ", { t: "chante", k: true }, " (cocorico !) — la poule ", { t: "glousse", k: true }, " (cot, cot !) — la vache ", { t: "meugle", k: true }, " (meuh !) — le chien ", { t: "aboie", k: true }, " (ouaf !)"]] },
      { t: "C. La comptine", paras: [["« ", { t: "Dans la ferme de mon grand-père,", k: true }, " / ", { t: "le coq chante cocorico ;", k: true }, " »"], ["« ", { t: "la poule glousse : cot, cot, cot !", k: true }, " / ", { t: "et la vache meugle : meuh, meuh, meuh !", k: true }, " »"]] },
    ],
    retenir: ["« ", { t: "Qu'est-ce que tu vois ? — Je vois...", k: true }, " » + les cris : ", { t: "cocorico, cot cot, meuh, ouaf", k: true }, " !"],
  },
  {
    id: "lecon43", apres: 112, num: 43,
    titre: "COMPTER, DÉCRIRE ET PRÉSENTER MA FERME", titreS: "Compter, décrire et présenter ma ferme",
    plage: "107 à 112",
    image: null,
    subs: [
      { t: "A. Je compte et je décris", paras: [["« ", { t: "Il y a un zébu, deux poules et trois canards.", k: true }, " » — « ", { t: "La vache est noire et blanche. Elle donne du lait.", k: true }, " »"]] },
      { t: "B. Les produits", paras: [[{ t: "du lait", k: true }, " — ", { t: "des œufs", k: true }, " — ", { t: "du riz", k: true }, " — ", { t: "des légumes", k: true }, " — ", { t: "de la viande", k: true }, " : « ", { t: "Qu'est-ce que la vache donne ? — Elle donne du lait.", k: true }, " »"]] },
      { t: "C. Ma ferme idéale", paras: [["« ", { t: "Bienvenue ! Voici... Il y a... Ma ferme donne... J'aime ma ferme !", k: true }, " » — mon mini-exposé en 3 phrases."]] },
    ],
    retenir: ["Je compte avec ", { t: "« il y a »", k: true }, ", je décris avec ", { t: "« il/elle est... mange... donne... »", k: true }, " et je présente : ", { t: "« Bienvenue ! Voici... »", k: true }],
  },
  {
    id: "lecon44", apres: 113, num: 44,
    titre: "LE SON OU", titreS: "Le son ou",
    plage: "113",
    image: { file: "ia_u8_son_ou.jpg", w: 1376, h: 768, legende: "La poule, le poulet, la roue et le hibou : j'entends le son ou !" },
    subs: [
      { t: "A. Le son", paras: [["Le son ", { t: "ou", k: true }, " s'écrit avec ", { t: "deux lettres : o-u", k: true }, " — les lèvres rondes comme un petit tunnel !"]] },
      { t: "B. Les mots", paras: [[{ t: "la poule", k: true }, " — ", { t: "le poulet", k: true }, " — ", { t: "la roue", k: true }, " — ", { t: "le genou", k: true }, " — ", { t: "le pou", k: true }]] },
    ],
    retenir: ["Le son ", { t: "ou", k: true }, " : ", { t: "la poule, le poulet, la roue, le genou", k: true }, "."],
  },
  {
    id: "lecon45", apres: 115, num: 45,
    titre: "LE SON OU (2) ET LE SON ŒU", titreS: "Le son ou (2) et le son œu",
    plage: "114 à 115",
    image: { file: "ia_u8_son_oeu.jpg", w: 1376, h: 768, legende: "L'œuf dans le nid, le bœuf et sa charrette, le nœud sur la corde : voici la lettre collée œ !" },
    subs: [
      { t: "A. Le son ou (2)", paras: [[{ t: "le loup", k: true }, " — ", { t: "le hibou", k: true }, " — ", { t: "la cour", k: true }, " — ", { t: "le bisou", k: true }, " — ", { t: "doux", k: true }]] },
      { t: "B. Le son œu", paras: [["Le son ", { t: "œu", k: true }, " s'écrit ", { t: "œ", k: true }, " : un ", { t: "o et un e collés", k: true }, " — ", { t: "l'œuf", k: true }, ", ", { t: "le bœuf", k: true }, ", ", { t: "le nœud", k: true }]] },
    ],
    retenir: ["Encore ", { t: "ou", k: true }, " : ", { t: "loup, hibou, cour", k: true }, " — et ", { t: "œu", k: true }, " : ", { t: "œuf, bœuf, nœud", k: true }, " !"],
  },
  {
    id: "lecon46", apres: 116, num: 46,
    titre: "LECTURE — OU ET ŒU ENSEMBLE", titreS: "Lecture : ou et œu ensemble",
    plage: "116",
    image: null,
    subs: [
      { t: "A. Mon texte", paras: [["« ", { t: "La poule picore dans la cour.", k: true }, " » — « ", { t: "Elle pond un œuf.", k: true }, " » — « ", { t: "Le bœuf boit à la mare.", k: true }, " »"]] },
    ],
    retenir: ["Je lis ", { t: "ou", k: true }, " et ", { t: "œu", k: true }, " dans un vrai texte — je lis comme un grand !"],
  },
  {
    id: "lecon47", apres: 120, num: 47,
    titre: "ÉCRIRE OU ET ŒU — BILAN DE L'UNITÉ ET DE L'ANNÉE", titreS: "Écrire ou et œu, bilan",
    plage: "117 à 120",
    image: null,
    subs: [
      { t: "A. La dictée", paras: [["J'écris : ", { t: "poule, œuf, bœuf", k: true }, " — ", { t: "la poule pond un œuf dans la cour", k: true }]] },
      { t: "B. Bilan de l'année", paras: [[{ t: "8 unités", k: true }, " : présentation, famille, toilette, école, vêtements, marché, repas, ferme — ", { t: "120 séances, tout est appris !", k: true }]] },
    ],
    retenir: ["Unité 8 réussie : ", { t: "la ferme et les sons ou, œu", k: true }, " — et le CP2 terminé, bravo !"],
  },
];

module.exports = F;
