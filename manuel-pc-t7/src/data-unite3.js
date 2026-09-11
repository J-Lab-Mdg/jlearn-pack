// data-unite3.js — T7 Unité III : MOUVEMENT (séances 24 et 25)
const DOC = "Programme d'études T7 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S24 = {
  numero: 24, total: 34, unite: "III", theme: "Mouvement",
  titre: "Le mobile et le relevé de ses positions",
  objectif: "définir un mobile et de relever ses positions successives à des intervalles de temps réguliers sur une trajectoire rectiligne",
  documentation: DOC,
  support: "Bille ou petite voiture, plan incliné, mètre ruban ou règle, craie, montre ou métronome (battements réguliers)",
  image: "images/img_seance24.png",
  imageLegende: "Figure 20 — Les positions M0, M1, M2… du mobile relevées à chaque seconde sur une droite graduée",
  revision: {
    qa: [
      { q: "Comment mesure-t-on une longueur, et en quelle unité ?", ra: "Avec une règle ou un mètre ruban ; en mètres (m) ou centimètres (cm)." },
      { q: "Comment mesure-t-on une durée ?", ra: "Avec une montre ou un chronomètre ; en secondes (s), minutes, heures." },
      { q: "Un objet peut-il être immobile pour l'un et en mouvement pour l'autre ?", ra: "Oui : le passager du taxi-brousse est immobile par rapport au siège, en mouvement par rapport à la route." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au bord de la RN7, Mahery regarde passer les véhicules : un camion lent, un taxi-brousse rapide, un vélo qui accélère dans la descente. Il aimerait décrire précisément leurs mouvements, mais comment « attraper » un mouvement qui ne s'arrête jamais ?",
      "Comment garder une trace écrite du mouvement d'un objet ?",
      "R.A. : En notant où il se trouve à intervalles réguliers, comme des photos prises régulièrement.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le mobile et le relevé de ses positions ». Après cette séance, vous serez capables de définir un mobile et de relever ses positions successives à intervalles de temps réguliers sur une droite.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : cette bille descend doucement la gouttière posée sur la table. Un camarade frappe dans ses mains chaque seconde ; à chaque battement, je marque à la craie la position de la bille. À la fin, mesurons les distances entre les marques M0, M1, M2, M3… et reportons-les dans un tableau.",
    apprenants: "Observent silencieusement, puis participent aux mesures.",
    technique: "Démarche d'observation, expérimentation", support: "Bille, gouttière, craie, mètre",
  },
  analyse: {
    qa: [
      { q: "Comment appelle-t-on l'objet dont on étudie le mouvement ?", ra: "Un mobile." },
      { q: "Que représente chaque marque de craie ?", ra: "Une position du mobile à un instant donné." },
      { q: "Pourquoi frapper des mains à intervalles réguliers ?", ra: "Pour relever les positions à des durées égales : c'est la condition pour comparer les distances." },
      { q: "Comment nomme-t-on les positions successives ?", ra: "M0 (départ), M1, M2, M3… avec les instants t = 0 s, 1 s, 2 s…" },
      { q: "Quelle est la trajectoire de la bille dans la gouttière droite ?", ra: "Une ligne droite : le mouvement est rectiligne." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Relevé au sol, tableau de mesures",
  },
  synthese: {
    enseignant: "Donc, un mobile est un objet dont on étudie le mouvement : bille, voiture, coureur, goutte de pluie. Pour décrire son mouvement, on relève ses positions successives M0, M1, M2… à des intervalles de temps égaux, sur sa trajectoire. Si la trajectoire est une ligne droite, le mouvement est rectiligne. Le relevé de positions (positions et distances dans un tableau) est la photographie complète du mouvement : c'est à partir de lui que nous étudierons, à la prochaine séance, les différents types de mouvements.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Vocabulaire : réponds aux questions.",
      items: [
        "a) Comment appelle-t-on l'objet dont on étudie le mouvement ?",
        "b) Comment appelle-t-on la ligne décrite par le mobile ?",
        "c) Comment doit-on choisir les instants du relevé ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Un mobile", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Sa trajectoire", cle: true }, { text: " ; en ligne droite, le mouvement est rectiligne." }],
        [{ text: "c) " }, { text: "À intervalles de temps égaux", cle: true }, { text: " (par exemple toutes les secondes)." }],
      ],
    },
    {
      consigne: "Un mobile part de M0 = 0 cm. Relevé toutes les secondes : M1 = 12 cm, M2 = 24 cm, M3 = 36 cm.",
      items: [
        "a) Quelle distance parcourt-il entre M0 et M1 ? Entre M1 et M2 ? Entre M2 et M3 ?",
        "b) Que remarques-tu ?",
      ],
      corrige: [
        [{ text: "a) M0M1 = " }, { text: "12 cm", cle: true }, { text: " ; M1M2 = 24 − 12 = " }, { text: "12 cm", cle: true }, { text: " ; M2M3 = 36 − 24 = " }, { text: "12 cm", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Les distances sont égales à chaque seconde", cle: true }, { text: " : le mobile avance toujours au même rythme." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau de mesures",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : intervalles – mobile – positions – rectiligne – trajectoire – réguliers.",
      items: [
        "a) Un ……… est un objet dont on étudie le mouvement.",
        "b) On relève ses ……… successives à des ……… de temps ……… .",
        "c) Si la ……… est une droite, le mouvement est ……… .",
      ],
      corrige: [
        [{ text: "a) Un " }, { text: "mobile", cle: true }, { text: " est un objet dont on étudie le mouvement." }],
        [{ text: "b) On relève ses " }, { text: "positions", cle: true }, { text: " successives à des " }, { text: "intervalles", cle: true }, { text: " de temps " }, { text: "réguliers", cle: true }, { text: "." }],
        [{ text: "c) Si la " }, { text: "trajectoire", cle: true }, { text: " est une droite, le mouvement est " }, { text: "rectiligne", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un cycliste passe devant des bornes plantées le long d'une route droite. On note sa position toutes les 2 secondes : M0 = 0 m ; M1 = 10 m ; M2 = 20 m ; M3 = 30 m.",
      items: [
        "a) Qui est le mobile ? Quelle est sa trajectoire ?",
        "b) L'intervalle de temps du relevé est-il régulier ? Lequel est-il ?",
        "c) Présente le relevé dans un tableau (instants et positions).",
      ],
      corrige: [
        [{ text: "a) Le mobile est " }, { text: "le cycliste", cle: true }, { text: " ; sa trajectoire est " }, { text: "une ligne droite (mouvement rectiligne)", cle: true }, { text: "." }],
        [{ text: "b) Oui : " }, { text: "2 secondes entre chaque relevé", cle: true }, { text: "." }],
        [{ text: "c) t (s) : 0 ; 2 ; 4 ; 6 : " }, { text: "positions : 0 m ; 10 m ; 20 m ; 30 m", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["mobile", "position", "trajectoire", "rectiligne", "intervalles réguliers"],
    sections: [
      {
        titre: "1. Le mobile",
        paras: [
          "Un mobile est un objet dont on étudie le mouvement : une bille qui roule, un taxi-brousse sur la route, un coureur sur la piste, la Lune autour de la Terre.",
        ],
      },
      {
        titre: "2. La trajectoire",
        paras: [
          "La trajectoire est la ligne formée par toutes les positions successives du mobile. Quand cette ligne est droite, le mouvement est rectiligne : c'est le cas que nous étudions cette année.",
        ],
      },
      {
        titre: "3. Le relevé des positions",
        paras: [
          "Pour décrire un mouvement avec précision, on relève les positions du mobile à des intervalles de temps égaux (chaque seconde, par exemple) :",
        ],
        puces: [
          "on note les positions M0 (départ), M1, M2, M3… sur la trajectoire ;",
          "on note les instants correspondants : t = 0 s, 1 s, 2 s, 3 s… ;",
          "on mesure les distances entre positions successives ;",
          "on rassemble le tout dans un tableau de relevé.",
        ],
      },
      {
        titre: "4. Pourquoi des intervalles réguliers ?",
        paras: [
          "Si les durées sont toutes égales, comparer les distances M0M1, M1M2, M2M3 suffit pour savoir si le mobile va toujours aussi vite, accélère ou ralentit : c'est l'objet de la prochaine séance !",
        ],
      },
    ],
    saisTu: [
      "Avant le cinéma, le photographe Étienne-Jules Marey inventa en 1882 le « fusil photographique » : douze photos par seconde sur la même plaque ! Ses images d'oiseaux en vol et de chevaux au galop sont exactement des relevés de positions à intervalles réguliers : la science du mouvement a donné naissance au cinéma.",
    ],
    experience: [
      "Le relevé de positions dans la cour :",
      "1. Trace à la craie une ligne droite de 10 mètres, graduée tous les mètres.",
      "2. Un camarade marche « au métronome » le long de la ligne pendant qu'un autre frappe des mains chaque seconde.",
      "3. À chaque battement, un troisième note la position atteinte.",
      "4. Dressez le tableau du relevé, puis recommencez avec une marche qui accélère : comparez les deux tableaux !",
    ],
  },
  substitutions: [
    { officiel: "Table à coussin d'air et éclateur", local: "Bille sur gouttière de bambou, camarade frappant la seconde" },
    { officiel: "Chronomètre", local: "Battements réguliers des mains, comptage « mille-un, mille-deux »" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Un mobile est :  a) un téléphone   b) un objet dont on étudie le mouvement   c) toujours une voiture",
        "2. La ligne décrite par le mobile s'appelle :  a) la position   b) la trajectoire   c) la distance",
        "3. Un mouvement rectiligne suit :  a) un cercle   b) une droite   c) un zigzag",
        "4. Les positions doivent être relevées :  a) au hasard   b) à intervalles de temps égaux   c) une seule fois",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "un objet dont on étudie le mouvement", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "la trajectoire", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "une droite", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "à intervalles de temps égaux", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. M0 désigne la position de départ du mobile.",
        "2. Un relevé de positions peut se faire avec des durées inégales.",
        "3. Une bille qui descend une gouttière droite a un mouvement rectiligne.",
        "4. Le tableau de relevé contient les instants et les positions.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : les intervalles doivent être réguliers pour comparer les distances." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Un mobile est relevé toutes les secondes : M0 = 0 cm ; M1 = 8 cm ; M2 = 16 cm ; M3 = 24 cm ; M4 = 32 cm.",
      items: [
        "1. Calcule les distances parcourues à chaque seconde.",
        "2. Que remarques-tu ?",
        "3. Où sera vraisemblablement le mobile à t = 5 s ?",
      ],
      corrige: [
        [{ text: "1. M0M1 = M1M2 = M2M3 = M3M4 = " }, { text: "8 cm", cle: true }, { text: " à chaque seconde." }],
        [{ text: "2. " }, { text: "Les distances sont toutes égales", cle: true }, { text: " : le mobile garde le même rythme." }],
        [{ text: "3. À " }, { text: "40 cm", cle: true }, { text: " : 32 + 8." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 20, puis réponds :",
      items: [
        "1. Combien de positions ont été relevées, et à quel intervalle de temps ?",
        "2. Que représente l'écart entre deux repères successifs ?",
        "3. Organise le relevé de la figure dans un tableau instants/positions.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Sept positions (M0 à M6), une par seconde", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "La distance parcourue par le mobile pendant une seconde", cle: true }, { text: "." }],
        [{ text: "3. t (s) : 0, 1, 2, 3, 4, 5, 6 → " }, { text: "positions M0 à M6 régulièrement espacées", cle: true }, { text: " sur la droite graduée." }],
      ],
    },
  ],
};

const S25 = {
  numero: 25, total: 34, unite: "III", theme: "Mouvement",
  titre: "Mouvements rectilignes : uniforme, accéléré, retardé",
  objectif: "distinguer les mouvements rectilignes uniforme, accéléré et retardé à partir d'un relevé de positions",
  documentation: DOC,
  support: "Relevés de positions au tableau, bille, gouttière (à plat, inclinée montante et descendante), craie, mètre",
  image: "images/img_seance25.png",
  imageLegende: "Figure 21 — Trois relevés : distances égales (uniforme), croissantes (accéléré), décroissantes (retardé)",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un mobile ?", ra: "Un objet dont on étudie le mouvement." },
      { q: "Comment relève-t-on les positions d'un mobile ?", ra: "À intervalles de temps égaux, en notant M0, M1, M2… sur la trajectoire." },
      { q: "Qu'est-ce qu'un mouvement rectiligne ?", ra: "Un mouvement dont la trajectoire est une ligne droite." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans la descente d'Ambohijanahary, le vélo de Toky va de plus en plus vite sans pédaler ; sur le plat, il roule bien régulièrement ; puis dans la montée, il ralentit… jusqu'à devoir poser le pied !",
      "Ces trois moments du trajet décrivent-ils le même type de mouvement ?",
      "R.A. : Non : tantôt il accélère, tantôt il garde son allure, tantôt il ralentit.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Anecdote contextualisée", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les mouvements rectilignes uniforme, accéléré et retardé ». Après cette séance, vous serez capables de reconnaître chaque type de mouvement à partir d'un relevé de positions.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces trois expériences avec la bille et la gouttière : à plat après une pichenette ; en descente ; lancée dans la montée. À chaque battement de seconde, nous marquons la position. Observez l'espacement des marques dans chaque cas : égal ? croissant ? décroissant ?",
    apprenants: "Observent silencieusement, participent au marquage.",
    technique: "Démarche d'observation, expérimentation", support: "Bille, gouttière, craie, relevés",
  },
  analyse: {
    qa: [
      { q: "À plat, comment sont les distances entre positions successives ?", ra: "Égales : la bille parcourt la même distance à chaque seconde." },
      { q: "Comment appelle-t-on ce mouvement ?", ra: "Un mouvement rectiligne uniforme." },
      { q: "En descente, comment évoluent les distances ?", ra: "Elles augmentent : le mobile va de plus en plus vite : mouvement accéléré." },
      { q: "Dans la montée, comment évoluent-elles ?", ra: "Elles diminuent : le mobile ralentit : mouvement retardé (ou ralenti)." },
      { q: "Que suffit-il donc de comparer dans un relevé pour identifier le mouvement ?", ra: "Les distances parcourues pendant des durées égales." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Les trois relevés",
  },
  synthese: {
    enseignant: "Donc, sur une trajectoire rectiligne, trois types de mouvements se reconnaissent au relevé de positions à intervalles de temps égaux. Mouvement uniforme : les distances parcourues sont égales : le mobile garde la même vitesse. Mouvement accéléré : les distances augmentent : la vitesse croît. Mouvement retardé : les distances diminuent : la vitesse décroît. Un même trajet réel enchaîne souvent les trois : le taxi-brousse démarre (accéléré), roule sur la route droite (uniforme), freine au village (retardé).",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Identifie le type de mouvement de chaque relevé (intervalles de 1 s) :",
      items: [
        "a) Distances successives : 5 cm ; 5 cm ; 5 cm ; 5 cm.",
        "b) Distances successives : 2 cm ; 5 cm ; 9 cm ; 14 cm.",
        "c) Distances successives : 20 cm ; 14 cm ; 8 cm ; 3 cm.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Uniforme", cle: true }, { text: " : distances égales." }],
        [{ text: "b) " }, { text: "Accéléré", cle: true }, { text: " : distances croissantes." }],
        [{ text: "c) " }, { text: "Retardé", cle: true }, { text: " : distances décroissantes." }],
      ],
    },
    {
      consigne: "Associe chaque situation au bon type de mouvement :",
      items: [
        "a) Un fruit qui tombe de l'arbre.",
        "b) Un taxi-brousse qui freine à l'entrée du village.",
        "c) Une pirogue qui glisse à allure constante sur le lac calme.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Accéléré", cle: true }, { text: " : il va de plus en plus vite en tombant." }],
        [{ text: "b) " }, { text: "Retardé", cle: true }, { text: " : sa vitesse diminue." }],
        [{ text: "c) " }, { text: "Uniforme", cle: true }, { text: " : même allure, ligne droite." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : retardé – égales – uniforme – augmentent – accéléré – diminuent.",
      items: [
        "a) Mouvement ……… : les distances parcourues à chaque seconde sont ……… .",
        "b) Mouvement ……… : elles ……… ; le mobile va de plus en plus vite.",
        "c) Mouvement ……… : elles ……… ; le mobile ralentit.",
      ],
      corrige: [
        [{ text: "a) Mouvement " }, { text: "uniforme", cle: true }, { text: " : les distances sont " }, { text: "égales", cle: true }, { text: "." }],
        [{ text: "b) Mouvement " }, { text: "accéléré", cle: true }, { text: " : elles " }, { text: "augmentent", cle: true }, { text: "." }],
        [{ text: "c) Mouvement " }, { text: "retardé", cle: true }, { text: " : elles " }, { text: "diminuent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un mobile est relevé toutes les secondes : positions 0 ; 4 cm ; 12 cm ; 24 cm ; 40 cm.",
      items: [
        "a) Calcule les distances parcourues à chaque seconde.",
        "b) Identifie le type de mouvement. Justifie.",
        "c) Invente un relevé de cinq positions pour un mouvement retardé.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "4 ; 8 ; 12 ; 16 cm", cle: true }, { text: " : (4−0, 12−4, 24−12, 40−24)." }],
        [{ text: "b) " }, { text: "Accéléré : les distances augmentent régulièrement", cle: true }, { text: "." }],
        [{ text: "c) Par exemple : " }, { text: "0 ; 16 ; 28 ; 36 ; 40 cm (distances 16, 12, 8, 4 : décroissantes)", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["mouvement uniforme", "mouvement accéléré", "mouvement retardé", "distances", "vitesse"],
    sections: [
      {
        titre: "1. La clé de lecture d'un relevé",
        paras: [
          "Sur un relevé à intervalles de temps égaux, il suffit de comparer les distances parcourues entre positions successives pour connaître le type de mouvement.",
        ],
      },
      {
        titre: "2. Les trois mouvements rectilignes",
        puces: [
          "Uniforme : distances ÉGALES : la vitesse ne change pas. Exemple : pirogue glissant régulièrement, goutte de pluie en fin de chute.",
          "Accéléré : distances CROISSANTES : la vitesse augmente. Exemple : fruit qui tombe, vélo dans la descente, taxi-brousse qui démarre.",
          "Retardé : distances DÉCROISSANTES : la vitesse diminue. Exemple : véhicule qui freine, bille lancée dans une montée, pirogue qui accoste.",
        ],
        paras: [],
      },
      {
        titre: "3. Les mouvements de la vie réelle",
        paras: [
          "Un trajet réel enchaîne les trois types : le taxi-brousse démarre (accéléré), maintient son allure sur la route droite (uniforme), puis freine à l'arrivée (retardé). Savoir découper un mouvement en phases est le premier pas de toute la mécanique !",
        ],
      },
    ],
    saisTu: [
      "C'est Galilée qui, vers 1600, étudia le mouvement accéléré en faisant rouler des billes sur des plans inclinés : faute de chronomètre, il mesurait le temps... en chantant à rythme régulier et en pesant l'eau qui s'écoulait d'un robinet ! Il découvrit ainsi que la chute des corps est un mouvement uniformément accéléré.",
    ],
    experience: [
      "Les trois mouvements de la bille :",
      "1. Pose une gouttière (bambou fendu, rail) bien à plat : pichenette, et marque les positions chaque seconde : distances égales ?",
      "2. Incline la gouttière en descente : lâche la bille sans pousser : les marques s'écartent de plus en plus !",
      "3. Incline-la en montée et lance la bille vers le haut : les marques se resserrent.",
      "4. Étiquette tes trois relevés : uniforme, accéléré, retardé.",
    ],
  },
  substitutions: [
    { officiel: "Rail à coussin d'air", local: "Gouttière de bambou fendu ou deux règles jointives" },
    { officiel: "Chronomètre électronique", local: "Battements des mains réguliers, comptage à voix haute" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Dans un mouvement uniforme, les distances par seconde sont :  a) croissantes   b) égales   c) décroissantes",
        "2. Un fruit qui tombe a un mouvement :  a) uniforme   b) accéléré   c) retardé",
        "3. Un véhicule qui freine a un mouvement :  a) accéléré   b) uniforme   c) retardé",
        "4. Pour identifier le mouvement, on compare :  a) les couleurs   b) les distances à durées égales   c) les masses",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "égales", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "accéléré", cle: true }, { text: "." }],
        [{ text: "3. Réponse c) : ", bold: true }, { text: "retardé", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "les distances parcourues à durées égales", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Dans un mouvement retardé, la vitesse augmente.",
        "2. Une pirogue à allure constante en ligne droite a un mouvement rectiligne uniforme.",
        "3. Un même trajet peut enchaîner les trois types de mouvements.",
        "4. Des distances 3, 6, 10, 15 cm par seconde indiquent un mouvement uniforme.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle diminue ; c'est dans l'accéléré qu'elle augmente." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : démarrage, croisière, freinage." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : elles augmentent : mouvement accéléré." }],
      ],
    },
    {
      points: 6,
      consigne: "Pour chaque relevé (intervalles d'une seconde), calcule les distances successives et identifie le mouvement :",
      items: [
        "1. Positions : 0 ; 15 ; 30 ; 45 ; 60 cm.",
        "2. Positions : 0 ; 25 ; 45 ; 60 ; 70 cm.",
        "3. Positions : 0 ; 3 ; 9 ; 18 ; 30 cm.",
      ],
      corrige: [
        [{ text: "1. Distances 15 ; 15 ; 15 ; 15 : " }, { text: "mouvement uniforme", cle: true }, { text: "." }],
        [{ text: "2. Distances 25 ; 20 ; 15 ; 10 : " }, { text: "mouvement retardé", cle: true }, { text: "." }],
        [{ text: "3. Distances 3 ; 6 ; 9 ; 12 : " }, { text: "mouvement accéléré", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Le trajet du taxi-brousse. Entre Antananarivo et Ambatolampy, un taxi-brousse : (1) démarre de la gare ; (2) roule à allure constante sur la RN7 ; (3) freine à l'arrivée.",
      items: [
        "1. Nomme le type de mouvement de chaque phase.",
        "2. Pour la phase 2, le relevé donne 25 m toutes les secondes : que peux-tu dire de sa vitesse ?",
        "3. Dessine (ou décris) l'allure des positions relevées pendant la phase 3.",
      ],
      corrige: [
        [{ text: "1. (1) " }, { text: "Accéléré", cle: true }, { text: " ; (2) " }, { text: "uniforme", cle: true }, { text: " ; (3) " }, { text: "retardé", cle: true }, { text: "." }],
        [{ text: "2. Elle est " }, { text: "constante : 25 m par seconde", cle: true }, { text: "." }],
        [{ text: "3. Des repères " }, { text: "de plus en plus rapprochés", cle: true }, { text: " : les distances par seconde diminuent jusqu'à l'arrêt." }],
      ],
    },
  ],
};

module.exports = { seances: [S24, S25] };
