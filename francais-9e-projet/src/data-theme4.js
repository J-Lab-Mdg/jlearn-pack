// =============================================================
// FRANCAIS 9e - THEME 4 : LA MAISON
// Séances 10 à 12 (/186) — ancien programme (T1, séances 1-22)
// Conjugaison au programme : AVOIR présent, AVOIR passé composé
// =============================================================
const TH4 = {
  numero: 4,
  nom: "La maison",
  source: "Programme d'études antérieur — Trimestre 1",
  periodes: [
    ["Procédés et techniques", "La description : décrire un lieu, situer les objets."],
    ["Sémantico-lexical", "Les pièces de la maison, les meubles et les objets, les matériaux de construction."],
    ["Morphosyntaxe", "Le verbe AVOIR au présent ; le verbe AVOIR au passé composé ; le pluriel des noms."],
    ["Phonie-graphie", "Le pluriel écrit : -s et -aux."],
  ],
  objectifs: [
    "Nommer les pièces, les meubles et les matériaux de la maison.",
    "Décrire sa maison et situer les objets.",
    "Conjuguer AVOIR au présent puis au passé composé.",
    "Écrire correctement le pluriel des noms.",
  ],
  seances: [
    // ---------- SÉANCE 10 ----------
    {
      n: 10, titre: "Les pièces et les meubles de la maison", titreFiche: "Les pièces et les meubles de la maison.",
      sd: "Expression Orale",
      objectif: "Nommer les pièces et les meubles et décrire sa maison",
      support: "Image d'une maison malgache, étiquettes des pièces et des meubles.",
      image: { file: "theme4_maison.png", w: 1100, h: 560, legende: "La maison : la chambre, la cuisine, le salon, la véranda." },
      lecon: {
        titre: "1. La maison et ses pièces",
        blocs: [
          { st: "A. Les pièces", txt: "la chambre — la cuisine — la salle à manger — le salon — la véranda — la cour." },
          { st: "B. Les meubles et les objets", txt: "le lit — la table — la chaise — l'armoire — le banc — la marmite — la natte." },
          { st: "C. Les matériaux", txt: "la brique — le bois — la tôle — la paille — le béton." },
        ],
        aretenir: "Pour décrire une maison, on nomme ses pièces, puis on dit ce qu'il y a dans chaque pièce.",
      },
      revision: {
        ens: "« Comment s'appelle la pièce où l'on dort ? » - Révision du lexique connu de la maison. Le professeur fait rappeler le nom de trois pièces.",
        app: "Les élèves nomment les pièces qu'ils connaissent.",
      },
      miseEnSituation: {
        ens: "Le professeur montre l'image d'une maison et demande : « Que voyez-vous dans cette maison ? »",
        app: "Les élèves nomment spontanément ce qu'ils voient.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va apprendre à nommer et à décrire les pièces et les meubles.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « Dans ma maison, il y a une cuisine et deux chambres. »",
        app: "Les élèves relèvent les noms des pièces et des objets.",
      },
      analyse: {
        ens: "Le professeur fait classer les mots en trois groupes.",
        app: "Les élèves classent les mots : pièces, meubles, matériaux.",
        technique: {
          sous: "I. Les trois groupes de mots",
          points: [
            "Les pièces : la chambre, la cuisine, le salon, la véranda.",
            "Les meubles et objets : le lit, la table, la chaise, l'armoire, la marmite.",
            "Les matériaux : la brique, le bois, la tôle, la paille.",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait récapituler la façon de décrire.",
        app: "Un élève décrit une pièce à voix haute, les autres complètent.",
        technique: {
          sous: "II. Décrire une maison",
          points: [
            "On commence par le nombre de pièces : « Ma maison a trois pièces. »",
            "On nomme chaque pièce : « Il y a une cuisine et deux chambres. »",
            "On dit ce qu'il y a dans chaque pièce : « Dans la cuisine, il y a une marmite. »",
            "On peut dire de quoi elle est construite : « Elle est en brique. »",
          ],
        },
      },
      application: {
        ens: "Le professeur fait employer le lexique dans des phrases.",
        app: "Les élèves écrivent et décrivent.",
        technique: {
          sous: "III. Application",
          points: [
            "Classez : lit, cuisine, brique, chaise, salon, tôle.",
            "Complétez : « Dans la ..., il y a une marmite. »",
            "Décrivez votre maison en trois phrases.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie le lexique et la description.",
        app: "Chaque élève produit une description correcte.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Citez trois pièces de la maison.",
            "Décrivez une pièce de votre maison en deux phrases.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Classez ces mots en pièces, meubles ou matériaux : lit — cuisine — brique — chaise — salon — tôle.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Décrivez votre maison en trois phrases (nombre de pièces, nom des pièces, un objet).", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "pièces : cuisine, salon ; meubles : lit, chaise ; matériaux : brique, tôle", r: true }, "."],
        ["Ex. 2 — ", { t: "réponse libre, ex. : Ma maison a deux pièces. Il y a une chambre et une cuisine. Dans la cuisine, il y a une marmite.", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 11 ----------
    {
      n: 11, titre: "Le verbe AVOIR au présent", titreFiche: "Le verbe AVOIR au présent.",
      sd: "Conjugaison",
      objectif: "Conjuguer et employer le verbe AVOIR au présent",
      support: "Tableau de conjugaison, phrases à compléter.",
      lecon: {
        titre: "2. AVOIR au présent de l'indicatif",
        blocs: [
          { st: "A. La conjugaison", txt: "j'ai — tu as — il/elle a — nous avons — vous avez — ils/elles ont." },
          { st: "B. Les deux emplois", txt: "la possession (J'ai un lit) et l'âge (J'ai quinze ans)." },
        ],
        aretenir: "AVOIR est un auxiliaire irrégulier ; au présent il sert à exprimer la possession et l'âge.",
      },
      revision: {
        ens: "« Comment dit-on : j'existe, tu existes ? » - Révision du verbe ÊTRE au présent. Le professeur fait rappeler sa conjugaison.",
        app: "Un élève conjugue ÊTRE au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Qui a un cahier neuf ? » et écrit la réponse au tableau : « Rabe a un cahier neuf. »",
        app: "Les élèves répondent et observent le verbe.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va conjuguer le verbe AVOIR au présent.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « J'ai une chambre. Nous avons une cuisine. »",
        app: "Les élèves relèvent les formes du verbe.",
      },
      analyse: {
        ens: "Le professeur fait repérer les formes irrégulières.",
        app: "Les élèves distinguent les formes en -ai, -as, -a et les formes en -ons, -ez, -ont.",
        technique: {
          sous: "I. Un verbe irrégulier",
          points: [
            "Au singulier : j'ai, tu as, il a (terminaisons -ai, -as, -a).",
            "Au pluriel : nous avons, vous avez, ils ont.",
            "Ne pas confondre « ils ont » (verbe) et « ils sont » (ÊTRE).",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer et employer AVOIR.",
        app: "Un élève écrit la conjugaison au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison et emplois",
          points: [
            "j'ai — tu as — il/elle a — nous avons — vous avez — ils/elles ont",
            "La possession : J'ai une table.",
            "L'âge : Ma sœur a douze ans.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait conjuguer et compléter.",
        app: "Les élèves conjuguent et complètent les phrases.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez AVOIR au présent avec nous, vous, ils.",
            "Complétez : Tu ... une chaise. Elle ... deux chambres.",
            "Écrivez une phrase avec AVOIR pour dire votre âge.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la conjugaison.",
        app: "Chaque élève conjugue correctement.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez AVOIR au présent (je, tu, ils).",
            "Complétez : Nous ... une grande cour.",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez AVOIR au présent de l'indicatif.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Complétez avec AVOIR : Tu ... une chaise. Elle ... deux chambres. Nous ... une grande cour.", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "j'ai, tu as, il a, nous avons, vous avez, ils ont", r: true }, "."],
        ["Ex. 2 — ", { t: "as / a / avons", r: true }, "."],
      ],
    },

    // ---------- SÉANCE 12 ----------
    {
      n: 12, titre: "Le verbe AVOIR au passé composé", titreFiche: "Le verbe AVOIR au passé composé.",
      sd: "Conjugaison",
      objectif: "Former et employer le passé composé du verbe AVOIR",
      support: "Tableau de conjugaison, phrases au passé.",
      lecon: {
        titre: "3. AVOIR au passé composé",
        blocs: [
          { st: "A. La formation", txt: "auxiliaire AVOIR au présent + participe passé eu : j'ai eu, tu as eu, il a eu." },
          { st: "B. L'emploi", txt: "une action terminée dans le passé : Hier, nous avons eu de la visite." },
        ],
        aretenir: "Le passé composé se forme avec l'auxiliaire au présent suivi du participe passé ; pour AVOIR, le participe passé est eu.",
      },
      revision: {
        ens: "« Comment conjugue-t-on AVOIR au présent ? » - Révision de la séance précédente. Le professeur fait rappeler les six formes.",
        app: "Les élèves conjuguent AVOIR au présent.",
      },
      miseEnSituation: {
        ens: "Le professeur demande : « Hier, qui a eu un nouveau cahier ? » et écrit : « Rasoa a eu un nouveau cahier. »",
        app: "Les élèves observent que le verbe est en deux mots.",
      },
      presentation: {
        ens: "Le professeur annonce que l'on va former le passé composé du verbe AVOIR.",
        app: "Un élève lit l'objectif écrit au tableau.",
      },
      observation: {
        ens: "Le professeur écrit : « J'ai eu une table. Nous avons eu une cuisine. »",
        app: "Les élèves repèrent l'auxiliaire et le participe passé.",
      },
      analyse: {
        ens: "Le professeur fait dégager la règle de formation.",
        app: "Les élèves séparent l'auxiliaire du participe passé.",
        technique: {
          sous: "I. La formation du passé composé",
          points: [
            "Auxiliaire au présent + participe passé.",
            "Pour AVOIR, le participe passé est eu.",
            "J'ai eu = j'ai (auxiliaire) + eu (participe passé).",
          ],
        },
      },
      synthese: {
        ens: "Le professeur fait conjuguer au passé composé.",
        app: "Un élève écrit la conjugaison au tableau, les autres vérifient.",
        technique: {
          sous: "II. Conjugaison et emploi",
          points: [
            "j'ai eu — tu as eu — il/elle a eu — nous avons eu — vous avez eu — ils/elles ont eu",
            "Le passé composé exprime une action terminée : Hier, ils ont eu de la visite.",
            "Il s'emploie souvent avec hier, la semaine passée, l'an dernier.",
          ],
        },
      },
      application: {
        ens: "Le professeur fait former le passé composé.",
        app: "Les élèves conjuguent et transforment des phrases.",
        technique: {
          sous: "III. Application",
          points: [
            "Conjuguez AVOIR au passé composé avec tu, nous, elles.",
            "Mettez au passé composé : « Nous avons une marmite. »",
            "Écrivez une phrase au passé composé avec hier.",
          ],
        },
      },
      evaluation: {
        ens: "Le professeur vérifie la formation du passé composé.",
        app: "Chaque élève forme correctement le passé composé.",
        technique: {
          sous: "IV. Évaluation",
          points: [
            "Conjuguez AVOIR au passé composé (je, il, vous).",
            "Mettez au passé composé : « Ils ont une belle maison. »",
          ],
        },
      },
      exercices: [
        { t: "Exercice 1 (10 pts)", q: "Conjuguez AVOIR au passé composé.", pts: 10 },
        { t: "Exercice 2 (10 pts)", q: "Mettez au passé composé : « Nous avons une marmite. Ils ont une belle maison. »", pts: 10 },
      ],
      corrige: [
        ["Ex. 1 — ", { t: "j'ai eu, tu as eu, il a eu, nous avons eu, vous avez eu, ils ont eu", r: true }, "."],
        ["Ex. 2 — ", { t: "Nous avons eu une marmite. Ils ont eu une belle maison.", r: true }, "."],
      ],
    },
  ],

  // ============================================================
  // ANNEXE DU THÈME 4
  // ============================================================
  annexe: {
    theme: 4,
    nom: "La maison",
    conjugaison: [
      {
        verbe: "AVOIR",
        temps: "Présent de l'indicatif",
        quand: "Pour dire ce que l'on possède, son âge, ou comme auxiliaire.",
        exemplesQuand: [
          "J'ai une chambre.",
          "Ma sœur a douze ans.",
          "Nous avons une grande cour.",
        ],
        comment: "C'est un verbe irrégulier : au singulier les terminaisons sont -ai, -as, -a ; au pluriel -ons, -ez, -ont.",
        tableau: [
          "j'ai — tu as — il/elle a",
          "nous avons — vous avez — ils/elles ont",
          "participe passé : eu",
        ],
        pourquoi: "AVOIR est l'un des deux auxiliaires du français : sans lui, on ne peut former aucun temps composé.",
        pieges: [
          ["j'ai ai, tu a", "j'ai, tu as"],
          ["ils sont une maison", "ils ont une maison"],
        ],
      },
      {
        verbe: "AVOIR",
        temps: "Passé composé",
        quand: "Pour raconter une action terminée dans le passé, souvent avec hier, la semaine passée.",
        exemplesQuand: [
          "Hier, nous avons eu de la visite.",
          "Ils ont eu une belle maison.",
        ],
        comment: "Auxiliaire AVOIR au présent + participe passé eu.",
        tableau: [
          "j'ai eu — tu as eu — il/elle a eu",
          "nous avons eu — vous avez eu — ils/elles ont eu",
        ],
        pourquoi: "Le passé composé est le temps du récit : il permet de raconter ce qui s'est passé et qui est fini.",
        pieges: [
          ["j'ai avoir", "j'ai eu"],
          ["nous avons eus", "nous avons eu"],
        ],
      },
    ],
    grammaire: [
      {
        notion: "Le pluriel des noms",
        regle: "On ajoute un s au pluriel ; les noms en -au et -eau prennent -aux.",
        exemple: "la maison / les maisons ; le couteau / les couteaux.",
        contre: "On n'écrit pas « des maison » ni « des couteaus ».",
      },
      {
        notion: "Décrire un lieu",
        regle: "On nomme d'abord l'ensemble, puis les parties, en utilisant il y a.",
        exemple: "Ma maison a deux pièces. Il y a une chambre et une cuisine.",
        contre: "Ne pas commencer par les détails sans nommer l'ensemble.",
      },
      {
        notion: "Les articles définis et indéfinis",
        regle: "le, la, les désignent une chose connue ; un, une, des désignent une chose non précisée.",
        exemple: "La cuisine est petite. Il y a une table.",
        contre: "Ne pas écrire « le maison » : maison est féminin, donc la maison.",
      },
    ],
    orthographe: [
      {
        notion: "Le pluriel écrit : -s et -aux",
        regle: "Le pluriel s'écrit -s, sauf pour les noms en -au et -eau qui prennent -aux.",
        exemples: ["les maisons", "les lits", "les couteaux", "les tableaux"],
        pieges: [
          ["des couteaus", "des couteaux"],
          ["des maison", "des maisons"],
        ],
      },
      {
        notion: "ont et sont",
        regle: "ont est le verbe AVOIR, sont est le verbe ÊTRE : on les distingue en mettant la phrase à l'imparfait.",
        exemples: ["ils ont une maison", "ils sont contents"],
        pieges: [
          ["ils sont une maison", "ils ont une maison"],
          ["ils ont fatigués", "ils sont fatigués"],
        ],
      },
    ],
    vocabulaire: [
      { champ: "Les pièces", mots: "la chambre — la cuisine — la salle à manger — le salon — la véranda — la cour" },
      { champ: "Les meubles et objets", mots: "le lit — la table — la chaise — le banc — l'armoire — la natte — la marmite" },
      { champ: "Les matériaux", mots: "la brique — le bois — la tôle — la paille — le béton — le ciment" },
      { champ: "Les verbes de la maison", mots: "habiter — construire — balayer — ranger — réparer — nettoyer" },
    ],
  },
};

module.exports = { theme4: TH4, annexe4: TH4.annexe };
