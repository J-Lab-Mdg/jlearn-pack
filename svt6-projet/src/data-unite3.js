// ============================================================
// Unité III — Reproduction humaine (RAS : analyser le fonctionnement
// des appareils reproducteurs mâle et femelle) — 11 h
// ============================================================

const U = {
  num: "III",
  titre: "Reproduction humaine",
  ras: "Analyser le fonctionnement des appareils reproducteurs mâle et femelle",
  valeurs: "Responsabilité, confiance en soi",
  themes: ["L'appareil reproducteur masculin : organes internes",
    "L'appareil reproducteur féminin : organes internes",
    "Le fonctionnement des appareils reproducteurs"],
  topics: [
    {
      type: "cours",
      titre: "L'appareil reproducteur masculin : organes internes",
      theme: "Reproduction humaine",
      ras: "Analyser le fonctionnement des appareils reproducteurs mâle et femelle",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "identifier les organes internes de l'appareil reproducteur masculin et leur rôle",
      supportMeta: "Schéma légendé de l'appareil reproducteur masculin, images ou vidéos",
      revision: [
        ["Qu'est-ce que la reproduction ?", "Le phénomène par lequel les êtres vivants donnent naissance à de nouveaux êtres."],
        ["Chez les animaux, quel mode de reproduction concerne l'être humain ?", "La viviparité : le bébé se développe dans le corps de la mère."],
      ],
      mise: ["Pour que naisse un bébé, de quelles cellules spéciales l'homme et la femme ont-ils besoin ?", "De cellules reproductrices : les spermatozoïdes (homme) et l'ovule (femme)."],
      observation: "le schéma légendé de l'appareil reproducteur masculin",
      observationSupport: "Schéma légendé de l'appareil reproducteur masculin (organes internes)",
      qa: [
        ["Quels organes voit-on sur le schéma ?", "Les testicules, les canaux (spermiductes), les vésicules séminales, la prostate et l'urètre."],
        ["Que produisent les testicules ?", "Les spermatozoïdes, les cellules reproductrices mâles."],
        ["Par où passent les spermatozoïdes ?", "Par les canaux (spermiductes) puis par l'urètre."],
        ["Quel est le rôle des vésicules séminales et de la prostate ?", "Elles produisent un liquide qui nourrit et transporte les spermatozoïdes (le sperme)."],
      ],
      synthese: "Donc, l'appareil reproducteur masculin comprend des organes internes : les testicules (production des spermatozoïdes), les canaux spermatiques (transport), les vésicules séminales et la prostate (liquide du sperme), et l'urètre (canal d'évacuation).",
      motsCles: ["appareil reproducteur masculin", "testicules", "spermatozoïdes", "spermiductes", "vésicules séminales", "prostate", "urètre", "sperme"],
      contenu: [
        { sousTitre: "1. Le rôle de l'appareil reproducteur masculin", texte: "L'appareil reproducteur masculin produit les cellules reproductrices mâles, les spermatozoïdes, et les conduit vers l'extérieur lors de la reproduction." },
        { sousTitre: "2. Les organes internes", liste: ["Les testicules : deux glandes qui produisent les spermatozoïdes et des hormones.","Les canaux spermatiques (spermiductes) : conduits qui transportent les spermatozoïdes.","Les vésicules séminales : glandes qui produisent une partie du liquide nourricier.","La prostate : glande qui complète le liquide du sperme.","L'urètre : canal qui évacue le sperme (et aussi l'urine)."] },
        { sousTitre: "3. Le sperme", texte: "Le sperme est un liquide composé de spermatozoïdes et de liquides produits par les vésicules séminales et la prostate. Il est évacué par l'urètre lors de l'acte de reproduction." },
        { sousTitre: "4. L'hygiène et le respect de soi", texte: "Les organes génitaux se nettoient chaque jour à l'eau claire. Il est important de respecter son corps et celui des autres, et de consulter un adulte de confiance ou un médecin en cas de doute ou de douleur." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les spermatozoïdes sont produits par…", opts: ["la prostate", "les testicules", "l'urètre"], ok: 1, expl: "Les testicules produisent les cellules reproductrices mâles." },
          { q: "Les spermiductes servent à…", opts: ["transporter les spermatozoïdes", "produire le sperme", "filtrer le sang"], ok: 0, expl: "Ce sont les conduits qui transportent les spermatozoïdes." },
          { q: "Le liquide du sperme est produit en partie par…", opts: ["les vésicules séminales et la prostate", "les reins", "les poumons"], ok: 0, expl: "Ces glandes complètent le liquide du sperme." },
          { q: "Le sperme est évacué par…", opts: ["l'urètre", "la trachée", "le canal digestif"], ok: 0, expl: "L'urètre est le canal d'évacuation." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les testicules sont des organes internes.", rep: true, expl: "Ils font partie de l'appareil reproducteur masculin." },
          { txt: "Les spermatozoïdes sont produits par la prostate.", rep: false, expl: "Ils sont produits par les testicules." },
          { txt: "Le sperme contient des spermatozoïdes.", rep: true, expl: "Le sperme est composé de spermatozoïdes et de liquides." },
          { txt: "Il faut se laver les organes génitaux chaque jour.", rep: true, expl: "L'hygiène quotidienne protège la santé." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel est le rôle des testicules ?", r: "Les testicules produisent les spermatozoïdes, les cellules reproductrices mâles." },
          { q: "Quel est le rôle de l'urètre ?", r: "L'urètre est le canal qui permet l'évacuation du sperme." },
          { q: "Que contient le sperme ?", r: "Le sperme contient des spermatozoïdes et des liquides produits par les vésicules séminales et la prostate." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les cellules reproductrices masculines sont les", suite: "spermatozoïdes" },
          { debut: "Les spermatozoïdes sont produits par les", suite: "testicules" },
          { debut: "Le sperme est évacué par l'", suite: "urètre" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "L'appareil reproducteur féminin : organes internes",
      theme: "Reproduction humaine",
      ras: "Analyser le fonctionnement des appareils reproducteurs mâle et femelle",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "identifier les organes internes de l'appareil reproducteur féminin et leur rôle",
      supportMeta: "Schéma légendé de l'appareil reproducteur féminin, images ou vidéos",
      revision: [
        ["Que produisent les testicules ?", "Les spermatozoïdes."],
        ["Par quel canal le sperme est-il évacué ?", "Par l'urètre."],
      ],
      mise: ["Où se trouve et où se développe le bébé pendant la grossesse ?", "Dans l'utérus de la mère."],
      observation: "le schéma légendé de l'appareil reproducteur féminin",
      observationSupport: "Schéma légendé de l'appareil reproducteur féminin (organes internes)",
      qa: [
        ["Quels organes voit-on sur le schéma ?", "Les ovaires, les trompes, l'utérus et le vagin."],
        ["Que produisent les ovaires ?", "Les ovules, les cellules reproductrices femelles."],
        ["Par où passe l'ovule ?", "Par la trompe de Fallope, qui le conduit vers l'utérus."],
        ["Quel est le rôle de l'utérus ?", "C'est l'organe où le bébé se développe pendant la grossesse."],
      ],
      synthese: "Donc, l'appareil reproducteur féminin comprend les ovaires (production des ovules), les trompes (conduite de l'ovule, lieu possible de la fécondation), l'utérus (développement du bébé) et le vagin (canal de sortie).",
      motsCles: ["appareil reproducteur féminin", "ovaires", "ovules", "trompes de Fallope", "utérus", "vagin"],
      contenu: [
        { sousTitre: "1. Le rôle de l'appareil reproducteur féminin", texte: "L'appareil reproducteur féminin produit les cellules reproductrices femelles, les ovules, et permet le développement du bébé dans le corps de la mère." },
        { sousTitre: "2. Les organes internes", liste: ["Les ovaires : deux glandes qui produisent les ovules et des hormones.","Les trompes de Fallope : conduits qui transportent l'ovule depuis l'ovaire ; c'est souvent là que la fécondation a lieu.","L'utérus : organe musculaire où le bébé se développe pendant la grossesse.","Le vagin : canal qui relie l'utérus à l'extérieur."] },
        { sousTitre: "3. Le trajet de l'ovule", texte: "L'ovule est libéré par un ovaire, il passe dans la trompe et arrive dans l'utérus. S'il est fécondé par un spermatozoïde, il se fixe dans l'utérus et le bébé se développe jusqu'à la naissance." },
        { sousTitre: "4. L'hygiène et le respect de soi", texte: "Une bonne hygiène quotidienne (eau, savon doux) et des vêtements propres protègent la santé. En cas de douleur ou de question, il faut en parler à un adulte de confiance ou à un médecin." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les ovules sont produits par…", opts: ["l'utérus", "les ovaires", "le vagin"], ok: 1, expl: "Les ovaires produisent les cellules reproductrices femelles." },
          { q: "La fécondation a souvent lieu dans…", opts: ["la trompe de Fallope", "l'utérus", "l'ovaire"], ok: 0, expl: "La trompe conduit l'ovule vers l'utérus et c'est là qu'a lieu la rencontre." },
          { q: "Le bébé se développe dans…", opts: ["l'ovaire", "la trompe", "l'utérus"], ok: 2, expl: "L'utérus abrite le bébé pendant la grossesse." },
          { q: "Le vagin est…", opts: ["un canal", "une glande", "un ovaire"], ok: 0, expl: "C'est le canal qui relie l'utérus à l'extérieur." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "L'utérus permet au bébé de se développer.", rep: true, expl: "C'est l'organe où le bébé grandit." },
          { txt: "Les ovaires produisent les spermatozoïdes.", rep: false, expl: "Les ovaires produisent les ovules." },
          { txt: "L'ovule passe par la trompe de Fallope.", rep: true, expl: "La trompe transporte l'ovule vers l'utérus." },
          { txt: "Le vagin est un organe externe uniquement.", rep: false, expl: "Le vagin est un canal interne qui relie l'utérus à l'extérieur." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Quel est le rôle des ovaires ?", r: "Les ovaires produisent les ovules, les cellules reproductrices femelles." },
          { q: "Quel est le rôle de l'utérus ?", r: "L'utérus est l'organe où le bébé se développe pendant la grossesse." },
          { q: "Quel est le trajet de l'ovule ?", r: "L'ovule est libéré par l'ovaire, passe dans la trompe de Fallope puis arrive dans l'utérus." },
        ]},
        { type: "appariement", consigne: "Relie chaque organe à son rôle.", pointsPar: 1, items: [{ g: ["Ovaire", "Trompe", "Utérus", "Vagin"], d: ["Développement du bébé", "Production des ovules", "Canal de sortie", "Transport de l'ovule"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Le fonctionnement des appareils reproducteurs",
      theme: "Reproduction humaine",
      ras: "Analyser le fonctionnement des appareils reproducteurs mâle et femelle",
      valeurs: "Responsabilité, confiance en soi",
      objectif: "expliquer le fonctionnement des appareils reproducteurs et la fécondation",
      supportMeta: "Schémas des deux appareils, schéma de la fécondation, vidéos",
      revision: [
        ["Que produit l'appareil reproducteur masculin ?", "Les spermatozoïdes."],
        ["Que produisent les ovaires ?", "Les ovules."],
      ],
      mise: ["Comment naît un bébé ? Quelles cellules doivent se rencontrer ?", "Un spermatozoïde et un ovule se rencontrent : c'est la fécondation, puis le bébé se développe dans l'utérus."],
      observation: "les schémas des deux appareils reproducteurs et le schéma de la fécondation",
      observationSupport: "Schémas des appareils masculin et féminin, schéma de la fécondation",
      qa: [
        ["Quelles cellules se rencontrent pour la fécondation ?", "Un spermatozoïde (cellule mâle) et un ovule (cellule femelle)."],
        ["Où a lieu la fécondation ?", "Le plus souvent dans la trompe de Fallope."],
        ["Que se passe-t-il après la fécondation ?", "L'œuf fécondé se fixe dans l'utérus et se développe : c'est le bébé."],
        ["Combien de temps dure la grossesse ?", "Environ neuf mois chez l'être humain."],
      ],
      synthese: "Donc, le fonctionnement des appareils reproducteurs permet la rencontre d'un spermatozoïde et d'un ovule : c'est la fécondation, qui a lieu dans la trompe. L'œuf fécondé se fixe dans l'utérus et le bébé s'y développe pendant environ neuf mois jusqu'à la naissance.",
      motsCles: ["fécondation", "spermatozoïde", "ovule", "œuf fécondé", "utérus", "grossesse", "naissance"],
      contenu: [
        { sousTitre: "1. Les cellules reproductrices", texte: "Chaque être humain possède des cellules reproductrices, qui portent l'information nécessaire pour former un nouvel individu.", liste: ["L'homme produit les spermatozoïdes dans les testicules.","La femme produit les ovules dans les ovaires."] },
        { sousTitre: "2. La fécondation", texte: "Lors de la rencontre d'un spermatozoïde et d'un ovule, leurs noyaux fusionnent : c'est la fécondation. La fécondation a lieu le plus souvent dans la trompe de Fallope." },
        { sousTitre: "3. Le développement du bébé", texte: "L'œuf fécondé se fixe dans l'utérus, qui devient un lieu de développement sûr. Le bébé grandit pendant la grossesse, qui dure environ neuf mois chez l'être humain. À la naissance, le bébé sort par le vagin." },
        { sousTitre: "4. L'importance du respect et de la responsabilité", texte: "Comprendre le fonctionnement de son corps aide à le respecter et à prendre soin de sa santé. Pendant la grossesse, la mère doit bien se nourrir, se reposer et consulter régulièrement. Chaque personne doit respecter son corps et celui des autres." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "La fécondation est…", opts: ["la rencontre d'un spermatozoïde et d'un ovule", "la naissance du bébé", "la production des hormones"], ok: 0, expl: "Les deux cellules reproductrices fusionnent." },
          { q: "La fécondation a lieu le plus souvent…", opts: ["dans l'utérus", "dans la trompe de Fallope", "dans l'ovaire"], ok: 1, expl: "La trompe est le lieu de rencontre habituel." },
          { q: "Le bébé se développe pendant la grossesse…", opts: ["dans l'utérus", "dans l'ovaire", "dans la trompe"], ok: 0, expl: "L'utérus abrite le bébé." },
          { q: "La grossesse chez l'être humain dure environ…", opts: ["3 mois", "9 mois", "12 mois"], ok: 1, expl: "La grossesse dure environ neuf mois." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le spermatozoïde est une cellule reproductrice mâle.", rep: true, expl: "Il est produit par les testicules." },
          { txt: "L'ovule est produit par l'utérus.", rep: false, expl: "L'ovule est produit par les ovaires." },
          { txt: "L'ovule fécondé se fixe dans l'utérus.", rep: true, expl: "L'œuf fécondé s'implante dans l'utérus." },
          { txt: "La fécondation a lieu à la naissance.", rep: false, expl: "La fécondation précède la grossesse et la naissance." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que la fécondation ?", r: "La fécondation est la rencontre et la fusion d'un spermatozoïde et d'un ovule." },
          { q: "Où se développe le bébé pendant la grossesse ?", r: "Le bébé se développe dans l'utérus de la mère." },
          { q: "Pourquoi est-il important de comprendre le fonctionnement de son corps ?", r: "Pour respecter son corps, prendre soin de sa santé et adopter des comportements responsables." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La fécondation unit un spermatozoïde et un", suite: "ovule" },
          { debut: "L'œuf fécondé se fixe dans l'", suite: "utérus" },
          { debut: "La grossesse dure environ", suite: "neuf mois" },
        ]},
      ],
    },
  ],
};

module.exports = U;
