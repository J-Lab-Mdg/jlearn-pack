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

  {
    unite: 4,
    conj: {
      titre: "A. Conjugaison — aller au présent",
      lignes: [
        ["« ", { t: "je vais", k: true }, " — ", { t: "tu vas", k: true }, " — ", { t: "il va", k: true }, " / ", { t: "elle va", k: true }, " »"],
        ["« ", { t: "nous allons", k: true }, " — ", { t: "vous allez", k: true }, " — ", { t: "ils vont", k: true }, " / ", { t: "elles vont", k: true }, " »"],
        ["À l'école : ", { t: "je vais", k: true }, " en classe — ", { t: "nous allons", k: true }, " apprendre."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "ch", k: true }, " s'écrit ", { t: "c-h", k: true }, " (chat, chapeau, mouche) — lèvres en avant !"],
        ["Le son ", { t: "s", k: true }, " s'écrit ", { t: "s", k: true }, " (salade), ", { t: "c", k: true }, " devant i (citron) ou ", { t: "ç", k: true }, " (garçon) : même son !"],
        ["Le son ", { t: "on", k: true }, " s'écrit ", { t: "o-n", k: true }, " (ballon, maison) — question avec ma voix qui ", { t: "monte", k: true }, " : « Qu'est-ce que c'est ? »"],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["La classe : ", { t: "le cahier, le crayon, la gomme, la règle, le tableau, la craie, le cartable", k: true }],
        ["Mots polis : ", { t: "s'il te plaît, tiens, merci, de rien", k: true }, " — question : ", { t: "Qu'est-ce que c'est ? — C'est...", k: true }],
        ["Mots du son ch : ", { t: "chat, chapeau, chaussure, mouche", k: true }, " — du son on : ", { t: "maison, ballon, bonbon, pantalon, mouton", k: true }],
      ],
    },
  },
  {
    unite: 5,
    conj: {
      titre: "A. Conjugaison — porter au présent",
      lignes: [
        ["« ", { t: "je porte", k: true }, " — ", { t: "tu portes", k: true }, " — ", { t: "il porte", k: true }, " / ", { t: "elle porte", k: true }, " »"],
        ["« ", { t: "nous portons", k: true }, " — ", { t: "vous portez", k: true }, " — ", { t: "ils portent", k: true }, " / ", { t: "elles portent", k: true }, " »"],
        ["À l'école : ", { t: "je porte", k: true }, " mon cartable — ", { t: "nous portons", k: true }, " nos chapeaux."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "eil", k: true }, " s'écrit ", { t: "e-i-l", k: true }, " (soleil, oreille, réveil) — le son ", { t: "ail", k: true }, " s'écrit ", { t: "a-i-l", k: true }, " (travail, ail) : même finale, un e ou un a devant !"],
        ["Le son ", { t: "j", k: true }, " s'écrit ", { t: "j", k: true }, " avec un point dessous (jardin, jouet) — le son ", { t: "z", k: true }, " s'écrit ", { t: "z", k: true }, " (zèbre, zébu, zigzag)."],
        ["Pour décrire : « ", { t: "Je porte..., il est..., elle est...", k: true }, " » — et je dis merci : « ", { t: "Merci pour ton beau cadeau !", k: true }, " »"],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["Les vêtements : ", { t: "le pantalon, la robe, la chemise, le chapeau, les chaussures, le gilet", k: true }],
        ["Le cadeau : ", { t: "tiens, c'est pour toi, merci, joli, j'aime bien", k: true }, " — gestes : ", { t: "je mets, j'enlève, je boutonne, j'attache, je porte", k: true }],
        ["Mots des sons : ", { t: "soleil, oreille, réveil, travail, ail, jardin, jaune, jouet, jambon, zèbre, zébu, zigzag", k: true }],
      ],
    },
  },
  {
    unite: 6,
    conj: {
      titre: "A. Conjugaison — acheter au présent",
      lignes: [
        ["« ", { t: "j'achète", k: true }, " — ", { t: "tu achètes", k: true }, " — ", { t: "il achète", k: true }, " / ", { t: "elle achète", k: true }, " »"],
        ["« ", { t: "nous achetons", k: true }, " — ", { t: "vous achetez", k: true }, " — ", { t: "ils achètent", k: true }, " / ", { t: "elles achètent", k: true }, " »"],
        ["Au marché : ", { t: "j'achète", k: true }, " du riz — ", { t: "nous achetons", k: true }, " des fruits."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "oi", k: true }, " s'écrit ", { t: "o-i", k: true }, " (oie, toit, poire) — le son ", { t: "ui", k: true }, " s'écrit ", { t: "u-i", k: true }, " (fruit, nuit, pluie)."],
        ["Le son ", { t: "ph", k: true }, " s'écrit ", { t: "p-h", k: true }, " et se prononce ", { t: "f", k: true }, " (phare, éléphant, dauphin, photo)."],
        ["Pour énumérer : « ", { t: "J'achète..., ..., et...", k: true }, " » — pour demander un prix : « ", { t: "Combien coûte... ? — ... ariary.", k: true }, " »"],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["Les fruits : ", { t: "la banane, la mangue, l'ananas, l'orange, le citron, la pomme", k: true }, " — les légumes : ", { t: "la tomate, l'oignon, la carotte, le chou, la pomme de terre, le brède", k: true }],
        ["Le marché : ", { t: "l'étal, la marchande, la cliente, le panier, l'argent, le kilo, la balance, lourd, léger", k: true }],
        ["Mots des sons : ", { t: "oie, voiture, toit, poire, trois, fruit, nuit, pluie, cuit, phare, éléphant, dauphin, photo", k: true }],
      ],
    },
  },
  {
    unite: 7,
    conj: {
      titre: "A. Conjugaison — manger au présent",
      lignes: [
        ["« ", { t: "je mange", k: true }, " — ", { t: "tu manges", k: true }, " — ", { t: "il mange", k: true }, " / ", { t: "elle mange", k: true }, " »"],
        ["« ", { t: "nous mangeons", k: true }, " — ", { t: "vous mangez", k: true }, " — ", { t: "ils mangent", k: true }, " / ", { t: "elles mangent", k: true }, " »"],
        ["Au repas : ", { t: "je mange", k: true }, " du riz — ", { t: "nous mangeons", k: true }, " des brèdes."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "in", k: true }, " s'écrit ", { t: "i-n", k: true }, " et se prononce par le nez (main, pain, lapin, jardin)."],
        ["Le son ", { t: "g", k: true }, " s'écrit ", { t: "g", k: true }, " (gâteau) ou ", { t: "g-u", k: true }, " devant e et i (langue) — le son ", { t: "k", k: true }, " s'écrit ", { t: "k, c ou qu", k: true }, " (kilo, café, coq)."],
        ["Les moments du repas : ", { t: "le matin, à midi, le soir", k: true }, " — et la politesse : ", { t: "bon appétit, s'il te plaît, merci", k: true }, "."],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["Les repas : ", { t: "le petit-déjeuner, le déjeuner, le dîner", k: true }, " — les aliments : ", { t: "le riz, le laoka, la viande, les brèdes, la soupe, le pain, le lait", k: true }],
        ["La table et la cuisine : ", { t: "la nappe, l'assiette, la cuillère, le verre, le bol, le feu, la marmite, la casserole", k: true }],
        ["Mots des sons : ", { t: "main, pain, lapin, jardin, gâteau, goyave, langue, guitare, café, carotte, coq, kilo", k: true }],
      ],
    },
  },
  {
    unite: 8,
    conj: {
      titre: "A. Conjugaison — avoir au présent",
      lignes: [
        ["« ", { t: "j'ai", k: true }, " — ", { t: "tu as", k: true }, " — ", { t: "il a", k: true }, " / ", { t: "elle a", k: true }, " »"],
        ["« ", { t: "nous avons", k: true }, " — ", { t: "vous avez", k: true }, " — ", { t: "ils ont", k: true }, " / ", { t: "elles ont", k: true }, " »"],
        ["À la ferme : ", { t: "j'ai", k: true }, " un zébu — ", { t: "nous avons", k: true }, " cinq poules."],
      ],
    },
    gram: {
      titre: "B. Grammaire et orthographe",
      lignes: [
        ["Le son ", { t: "ou", k: true }, " s'écrit ", { t: "o-u", k: true }, " (poule, roue, genou, loup, hibou) — le son ", { t: "œu", k: true }, " s'écrit ", { t: "œ", k: true }, ", un o et un e collés (œuf, bœuf, nœud)."],
        ["Pour compter : « ", { t: "Il y a + nombre + animal", k: true }, " » — pour décrire : « ", { t: "Il/Elle est..., il/elle mange..., il/elle donne...", k: true }, " »"],
        ["Les verbes des champs, dans l'ordre : ", { t: "labourer, semer, planter, arroser, récolter", k: true }, "."],
      ],
    },
    vocab: {
      titre: "C. Vocabulaire du thème",
      lignes: [
        ["Les animaux : ", { t: "la vache, le zébu, la poule, le canard, le cochon, la chèvre", k: true }, " — les petits : ", { t: "le veau, le poussin, le caneton, le chaton, le chiot", k: true }],
        ["La ferme : ", { t: "la rizière, le paysan, la charrette, la mare", k: true }, " — les produits : ", { t: "du lait, des œufs, du riz, des légumes, de la viande", k: true }],
        ["Mots des sons : ", { t: "poule, poulet, roue, genou, loup, hibou, cour, bisou, doux, œuf, bœuf, nœud", k: true }],
      ],
    },
  },
];
