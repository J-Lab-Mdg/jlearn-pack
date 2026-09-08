// annexes.js — Annexe de fin de thème : conjugaison, résumé grammaire et orthographe, résumé vocabulaire
// Chaque unité reçoit une page « ANNEXES DU THÈME N » insérée après sa dernière leçon fusionnée.
// segs : string | { t, b, i, k (mot clé bleu), r (réponse corrigé rose) }

module.exports = [
  {
    unite: 1,
    conj: {
      titre: "A. Conjugaison — s'appeler et être au présent",
      lignes: [
        ["« ", { t: "je m'appelle", k: true }, " — ", { t: "tu t'appelles", k: true }, " — ", { t: "il / elle s'appelle", k: true }, " »"],
        ["« ", { t: "je suis", k: true }, " — ", { t: "tu es", k: true }, " — ", { t: "il est", k: true }, " / ", { t: "elle est", k: true }, " »"],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Garçon : ", { t: "il", k: true }, " — fille : ", { t: "elle", k: true }, ". Pour poser une question, ma voix ", { t: "monte", k: true }, " : « Qui est-ce ? »"],
        ["Les accents sur le e : ", { t: "é", k: true }, " (aigu) — ", { t: "è", k: true }, " (grave) — ", { t: "ê", k: true }, " (circonflexe)."],
        ["Les formules de politesse prennent ", { t: "une majuscule", k: true }, " : Bonjour ! Merci ! Pardon !"],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["Les formules : ", { t: "bonjour", k: true }, " — ", { t: "bonsoir", k: true }, " — ", { t: "au revoir", k: true }, " — ", { t: "merci", k: true }, " — ", { t: "s'il te plaît", k: true }, " — ", { t: "pardon", k: true }],
        ["Se présenter : ", { t: "je m'appelle... — j'ai... ans — je viens de...", k: true }],
        ["Mots du son é : ", { t: "bébé, école, vélo, télé, café", k: true }, " — mots du son è, ê : ", { t: "mère, père, frère, forêt, fête", k: true }],
      ],
    },
  },
  {
    unite: 2,
    conj: {
      titre: "A. Conjugaison — avoir au présent",
      lignes: [
        ["« ", { t: "j'ai", k: true }, " — ", { t: "tu as", k: true }, " — ", { t: "il a", k: true }, " / ", { t: "elle a", k: true }, " »"],
        ["« ", { t: "nous avons", k: true }, " — ", { t: "vous avez", k: true }, " — ", { t: "ils ont", k: true }, " / ", { t: "elles ont", k: true }, " »"],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Devant un garçon ou un mot « masculin » : ", { t: "mon, ton, son", k: true }, " (mon papa)."],
        ["Devant une fille ou un mot « féminin » : ", { t: "ma, ta, sa", k: true }, " (ma maman)."],
        ["Plusieurs : ", { t: "mes frères, tes sœurs, ses cousins", k: true }, " — le pluriel marque le nombre."],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["La famille proche : ", { t: "papa, maman, le frère, la sœur, le bébé", k: true }],
        ["La famille élargie : ", { t: "le grand-père, la grand-mère, l'oncle, la tante, le cousin, la cousine", k: true }],
        ["Mots du son u : ", { t: "jupe, lune, rue, tortue, mur, bureau", k: true }, " — mots du son eu : ", { t: "jeu, feu, deux, yeux, cheveux, fleur", k: true }],
      ],
    },
  },
  {
    unite: 3,
    conj: {
      titre: "A. Conjugaison — se laver au présent",
      lignes: [
        ["« ", { t: "je me lave", k: true }, " — ", { t: "tu te laves", k: true }, " — ", { t: "il se lave", k: true }, " / ", { t: "elle se lave", k: true }, " »"],
        ["« ", { t: "nous nous lavons", k: true }, " — ", { t: "vous vous lavez", k: true }, " — ", { t: "ils se lavent", k: true }, " / ", { t: "elles se lavent", k: true }, " »"],
        ["Être propre : ", { t: "je suis propre", k: true }, " — ", { t: "tu es propre", k: true }, " — ", { t: "il / elle est propre", k: true }, "."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "an", k: true }, " s'écrit ", { t: "an", k: true }, " (lampe, banane, canard) ou ", { t: "en", k: true }, " (dent, vent)."],
        ["Ouvrir la bouche et baisser la mâchoire pour bien dire ", { t: "an", k: true }, " : « aaan ! »"],
        ["Une brosse, une serviette, une baignoire — un peigne, un savon, un lavabo : ", { t: "un ou une", k: true }, " selon le mot."],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["La toilette : ", { t: "le savon, la serviette, le lavabo, l'eau, la baignoire, le peigne, la brosse", k: true }],
        ["Les dents : ", { t: "la brosse à dents, le dentifrice, se brosser les dents", k: true }, " — propre ≠ ", { t: "sale", k: true }],
        ["Mots du son an : ", { t: "lampe, banane, pantalon, canard, dent, maman", k: true }],
      ],
    },
  },
];
