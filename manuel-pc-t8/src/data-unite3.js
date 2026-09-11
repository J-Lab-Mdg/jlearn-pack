// data-unite3.js — T8 Unité III : MOUVEMENT, FORCE ET INTERACTION (séances 20 à 25)
const DOC = "Programme d'études T8 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S20 = {
  numero: 20, total: 34, unite: "III", theme: "Mouvement",
  titre: "La vitesse et le mouvement rectiligne uniforme",
  objectif: "déterminer la vitesse d'un mobile en mouvement rectiligne uniforme et de convertir ses unités",
  documentation: DOC,
  support: "Petite voiture ou bille, règle graduée ou mètre ruban, chronomètre ou comptage régulier, craie",
  image: "images/img_seance20.png",
  imageLegende: "Figure 16 — MRU : des distances égales à chaque seconde ; v = d ÷ t",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un mobile, vu en T7 ?", ra: "Un objet dont on étudie le mouvement." },
      { q: "Qu'est-ce qu'un mouvement rectiligne uniforme ?", ra: "Un mouvement en ligne droite où le mobile parcourt des distances égales pendant des durées égales." },
      { q: "Comment relève-t-on les positions d'un mobile ?", ra: "À intervalles de temps réguliers : M0, M1, M2… sur la trajectoire." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Le taxi-brousse Antananarivo–Antsirabe met 4 heures pour 170 km. Le compteur du chauffeur affiche parfois 60, parfois 80. Mais Nirina veut UN nombre pour comparer ce voyage à celui de l'an dernier.",
      "Comment mesurer « la rapidité » d'un mobile par un seul nombre ?",
      "R.A. : Par sa vitesse : la distance parcourue divisée par la durée du parcours.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La vitesse et le mouvement rectiligne uniforme ». Après cette séance, vous serez capables de calculer une vitesse et de convertir les km/h en m/s.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : la petite voiture descend la planche inclinée puis roule sur le sol plat. Sur le plat, nous marquons sa position chaque seconde : M0, M1, M2, M3… Mesurons : M0M1 = 2 m ; M1M2 = 2 m ; M2M3 = 2 m. Les distances sont égales pour des durées égales.",
    apprenants: "Participent au relevé, mesurent les distances.",
    technique: "Expérimentation, observation", support: "Voiture, règle, craie",
  },
  analyse: {
    qa: [
      { q: "Le mouvement observé sur le plat est-il uniforme ?", ra: "Oui : distances égales pendant des durées égales, sur une droite : c'est un MRU." },
      { q: "Comment définir la vitesse ?", ra: "v = d ÷ t : distance parcourue divisée par la durée du parcours." },
      { q: "Quelles sont les unités de la vitesse ?", ra: "Le mètre par seconde (m/s) dans le SI ; le kilomètre par heure (km/h) au quotidien." },
      { q: "Comment passer des m/s aux km/h ?", ra: "On multiplie par 3,6 (1 m/s = 3,6 km/h) ; en sens inverse, on divise par 3,6." },
      { q: "Que vaut la vitesse de notre voiture ?", ra: "v = 2 m ÷ 1 s = 2 m/s, soit 7,2 km/h." },
    ],
    technique: "Questions-réponses, analyse dimensionnelle", support: "Relevé, tableau noir",
  },
  synthese: {
    enseignant: "Donc, dans un mouvement rectiligne uniforme (MRU), le mobile suit une droite et parcourt des distances égales pendant des durées égales : sa vitesse est constante. La vitesse se calcule par v = d ÷ t : v en mètres par seconde (m/s) si d est en mètres et t en secondes. L'analyse dimensionnelle nous guide : des mètres divisés par des secondes donnent bien des m/s ! Pour convertir : 1 m/s = 3,6 km/h (car 3 600 s dans une heure et 1 000 m dans un km). La formule se retourne : d = v × t et t = d ÷ v. Le sens du mouvement, lui, est donné par le point de départ et le point d'arrivée.",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Calcule :",
      items: [
        "a) La vitesse d'un cycliste qui parcourt 120 m en 20 s.",
        "b) Cette vitesse en km/h.",
      ],
      corrige: [
        [{ text: "a) v = 120 ÷ 20 = " }, { text: "6 m/s", cle: true }, { text: "." }],
        [{ text: "b) 6 × 3,6 = " }, { text: "21,6 km/h", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Convertis : 72 km/h en m/s ; 15 m/s en km/h.",
      items: [],
      corrige: [
        [{ text: "72 ÷ 3,6 = " }, { text: "20 m/s", cle: true }, { text: " ; 15 × 3,6 = " }, { text: "54 km/h", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : dans un MRU, le mobile parcourt des ……… égales pendant des ……… égales ; sa vitesse v = ……… est ……… .",
      items: [],
      corrige: [
        [{ text: "Des " }, { text: "distances", cle: true }, { text: " égales pendant des " }, { text: "durées", cle: true }, { text: " égales ; v = " }, { text: "d ÷ t", cle: true }, { text: " est " }, { text: "constante", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le taxi-brousse parcourt 170 km en 4 h (arrêts compris). Calcule sa vitesse moyenne en km/h puis en m/s.",
      items: [],
      corrige: [
        [{ text: "v = 170 ÷ 4 = " }, { text: "42,5 km/h", cle: true }, { text: " ; 42,5 ÷ 3,6 ≈ " }, { text: "11,8 m/s", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["vitesse", "MRU", "m/s", "km/h", "v = d ÷ t", "analyse dimensionnelle"],
    sections: [
      {
        titre: "1. Le mouvement rectiligne uniforme",
        paras: [
          "Un mobile est en mouvement rectiligne uniforme (MRU) quand il suit une ligne droite en parcourant des distances égales pendant des durées égales : sa vitesse est constante.",
        ],
      },
      {
        titre: "2. La vitesse",
        paras: [
          "La vitesse mesure la distance parcourue par unité de temps : v = d ÷ t.",
        ],
        puces: [
          "v en mètres par seconde (m/s), d en mètres, t en secondes ;",
          "au quotidien : le kilomètre par heure (km/h) ;",
          "conversions : 1 m/s = 3,6 km/h ; km/h ÷ 3,6 → m/s.",
        ],
      },
      {
        titre: "3. Les trois formules sœurs",
        paras: [
          "v = d ÷ t ; d = v × t ; t = d ÷ v. L'analyse dimensionnelle (mètres, secondes) permet de vérifier qu'on ne s'est pas trompé de formule.",
        ],
      },
      {
        titre: "4. Le sens du mouvement",
        paras: [
          "Le sens du déplacement va du point de départ vers le point d'arrivée : en inversant départ et arrivée, on inverse le sens, mais la valeur de la vitesse reste la même.",
        ],
      },
    ],
    saisTu: [
      "Le guépard atteint 30 m/s (108 km/h), mais seulement sur 400 mètres ! Sur un marathon, l'homme le battrait. Quant à l'escargot, ses 0,001 m/s le classent parmi les mobiles les plus lents… mais son mouvement peut être parfaitement uniforme !",
    ],
    experience: [
      "Ta vitesse de marche :",
      "1. Mesure 20 mètres dans la cour (20 grands pas d'un adulte ≈ 15 m : utilise plutôt un mètre ou une corde étalonnée).",
      "2. Marche normalement en comptant les secondes (« mille-un, mille-deux… »).",
      "3. Calcule v = 20 ÷ t. Environ 1,4 m/s ? C'est la vitesse de marche humaine : 5 km/h !",
      "4. Recommence en marchant vite, puis en courant : compare.",
    ],
  },
  substitutions: [
    { officiel: "Chronomètre électronique", local: "Comptage régulier à voix haute, montre à trotteuse ou téléphone" },
    { officiel: "Mobile autoporteur", local: "Petite voiture, bille sur gouttière de bambou, ou marcheur dans la cour" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Calcule (2 points par calcul) : a) la vitesse d'un coureur qui fait 100 m en 12,5 s ; b) la distance parcourue en 3 h par un camion roulant à 60 km/h.",
      items: [],
      corrige: [
        [{ text: "a) v = 100 ÷ 12,5 = " }, { text: "8 m/s (28,8 km/h)", cle: true }, { text: " ; b) d = 60 × 3 = " }, { text: "180 km", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Une pirogue parcourt 9 km en 1 h 30 min. Calcule sa vitesse en km/h.",
      items: [],
      corrige: [
        [{ text: "1 h 30 = 1,5 h ; v = 9 ÷ 1,5 = " }, { text: "6 km/h", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Vérifie par analyse dimensionnelle que d = v × t donne bien des mètres si v est en m/s et t en s.",
      items: [],
      corrige: [
        [{ text: "(m/s) × s = " }, { text: "m", cle: true }, { text: " : les secondes se simplifient, il reste des mètres : la formule est cohérente." }],
      ],
    },
  ],
};

const S21 = {
  numero: 21, total: 34, unite: "III", theme: "Mouvement",
  titre: "Problèmes de vitesse et graphique distance-temps",
  objectif: "résoudre des situations-problèmes impliquant la vitesse et de représenter la distance en fonction du temps",
  documentation: DOC,
  support: "Papier quadrillé, règle, relevés de positions, énoncés de problèmes",
  image: "images/img_seance21.png",
  imageLegende: "Figure 17 — Le graphique distance-temps d'un MRU : une droite passant par l'origine",
  revision: {
    qa: [
      { q: "Rappelle les trois formules reliant v, d et t.", ra: "v = d ÷ t ; d = v × t ; t = d ÷ v." },
      { q: "Convertis 36 km/h en m/s.", ra: "36 ÷ 3,6 = 10 m/s." },
      { q: "Qu'est-ce qu'un MRU ?", ra: "Un mouvement rectiligne à vitesse constante." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Vola part à vélo de Moramanga à 7 h, à 15 km/h. Son frère Solo part en moto à 8 h, à 45 km/h, sur la même route. Leur mère demande : « À quelle heure Solo rattrapera-t-il Vola ? » Grand silence dans la famille…",
      "Comment résoudre méthodiquement un problème de vitesse ?",
      "R.A. : En organisant les données (v, d, t), en appliquant les formules, ou en traçant un graphique.",
    ],
    apprenants: "Écoutent et proposent des idées.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Problèmes de vitesse et graphique distance-temps ». Après cette séance, vous serez capables de résoudre des situations-problèmes et de lire ou tracer un graphique distance-temps.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ce relevé d'un cycliste : t = 0 s, d = 0 m ; t = 1 s, d = 10 m ; t = 2 s, d = 20 m ; t = 3 s, d = 30 m… Plaçons ces points sur un quadrillage : temps en abscisse, distance en ordonnée. Que forment les points ? Une droite parfaite qui passe par l'origine !",
    apprenants: "Placent les points sur leur papier quadrillé, tracent la droite.",
    technique: "Représentation graphique", support: "Papier quadrillé, règle",
  },
  analyse: {
    qa: [
      { q: "Pourquoi les points sont-ils alignés ?", ra: "La distance est proportionnelle au temps : c'est la marque du MRU." },
      { q: "Que représente la pente de la droite ?", ra: "La vitesse : plus la droite monte vite, plus le mobile est rapide." },
      { q: "Comment lire la vitesse sur le graphique ?", ra: "On lit d pour un temps donné : v = d ÷ t ; ici 30 m en 3 s : v = 10 m/s." },
      { q: "Quelle est la méthode pour un problème de vitesse ?", ra: "1) Noter les données avec leurs unités ; 2) convertir si besoin ; 3) choisir la formule ; 4) calculer ; 5) vérifier la vraisemblance." },
      { q: "Et pour le problème de Vola et Solo ?", ra: "En 1 h, Vola a fait 15 km d'avance ; Solo gagne 30 km/h sur elle : il la rattrape en 30 minutes, à 8 h 30." },
    ],
    technique: "Questions-réponses, résolution guidée", support: "Graphique, tableau noir",
  },
  synthese: {
    enseignant: "Donc, le graphique distance-temps d'un MRU est une droite passant par l'origine : distance et temps sont proportionnels, et la pente de la droite représente la vitesse. Droite raide = mobile rapide ; droite douce = mobile lent ; droite horizontale = mobile arrêté ! Pour résoudre un problème de vitesse, appliquez la méthode en cinq étapes : noter les données, convertir les unités (tout en m et s, ou tout en km et h !), choisir la bonne formule (v = d ÷ t ; d = v × t ; t = d ÷ v), calculer, vérifier. Avec cette méthode, même le problème de la poursuite se résout sans peine.",
    apprenants: "Écoutent et recopient la méthode.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un camion roule à vitesse constante : le graphique de sa distance passe par les points (0 ; 0) et (2 h ; 90 km).",
      items: [
        "a) Quelle est sa vitesse ?",
        "b) Quelle distance aura-t-il parcourue en 5 h ?",
      ],
      corrige: [
        [{ text: "a) v = 90 ÷ 2 = " }, { text: "45 km/h", cle: true }, { text: "." }],
        [{ text: "b) d = 45 × 5 = " }, { text: "225 km", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Combien de temps faut-il à un piéton (5 km/h) pour parcourir 12 km ?",
      items: [],
      corrige: [
        [{ text: "t = d ÷ v = 12 ÷ 5 = 2,4 h = " }, { text: "2 h 24 min", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Papier quadrillé, calcul posé",
  evaluation: [
    {
      consigne: "Sur un graphique distance-temps, trois droites A, B, C partent de l'origine ; A est la plus raide, C presque horizontale. Classe les mobiles du plus rapide au plus lent.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "A (le plus rapide), puis B, puis C", cle: true }, { text: " : la pente représente la vitesse." }],
      ],
    },
    {
      consigne: "Un bus quitte Fianarantsoa à 6 h à 50 km/h vers Ambalavao (56 km). À quelle heure arrive-t-il ?",
      items: [],
      corrige: [
        [{ text: "t = 56 ÷ 50 = 1,12 h ≈ " }, { text: "1 h 07 min", cle: true }, { text: " ; arrivée vers " }, { text: "7 h 07", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["graphique distance-temps", "proportionnalité", "pente", "méthode de résolution"],
    sections: [
      {
        titre: "1. Le graphique distance-temps",
        paras: [
          "Pour un MRU, la courbe de la distance parcourue en fonction du temps est une droite passant par l'origine : d est proportionnelle à t (d = v × t). La pente de la droite représente la vitesse.",
        ],
        puces: [
          "droite raide → grande vitesse ;",
          "droite douce → petite vitesse ;",
          "palier horizontal → arrêt.",
        ],
      },
      {
        titre: "2. La méthode des cinq étapes",
        paras: [],
        puces: [
          "1) Noter les données avec leurs unités ;",
          "2) Convertir pour rendre les unités cohérentes ;",
          "3) Choisir la formule : v = d ÷ t ; d = v × t ; t = d ÷ v ;",
          "4) Calculer en posant l'opération ;",
          "5) Vérifier : le résultat est-il vraisemblable ?",
        ],
      },
      {
        titre: "3. Problèmes types",
        paras: [
          "Trouver une durée de trajet, comparer deux mobiles, calculer une heure d'arrivée, résoudre une poursuite : tous se ramènent aux trois formules et, souvent, un graphique rend la solution visible d'un coup d'œil.",
        ],
      },
    ],
    saisTu: [
      "Les contrôleurs aériens et les capitaines de cargos utilisent exactement tes formules v, d, t pour croiser les routes de dizaines d'avions ou de navires — souvent d'abord sur un graphique, comme toi ! La sécurité du canal du Mozambique en dépend chaque jour.",
    ],
    experience: [
      "La course graphique :",
      "1. Dans la cour, marque une piste de 20 m avec un repère tous les 5 m.",
      "2. Un camarade marche à allure régulière : note son temps de passage à chaque repère.",
      "3. Trace le graphique distance-temps : est-ce une droite ? Calcule sa vitesse par la pente.",
      "4. Recommence avec un coureur et superpose les deux droites : compare les pentes !",
    ],
  },
  substitutions: [
    { officiel: "Papier millimétré", local: "Papier quadrillé de cahier (1 carreau = 1 unité)" },
    { officiel: "Chronomètre multiple", local: "Plusieurs élèves comptant à voix haute, chacun posté à un repère" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Un relevé donne : t = 0 min, d = 0 km ; t = 10 min, d = 6 km ; t = 20 min, d = 12 km ; t = 30 min, d = 18 km. a) Le mouvement est-il uniforme ? b) Calcule la vitesse en km/h.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Oui : 6 km toutes les 10 min (distance proportionnelle au temps)", cle: true }, { text: ". b) 18 km en 0,5 h → v = " }, { text: "36 km/h", cle: true }, { text: ". (2 points chaque)" }],
      ],
    },
    {
      points: 3,
      consigne: "Deux villages sont distants de 24 km. Naina part à pied (6 km/h), Koto à vélo (18 km/h) du même point. Quel écart de temps entre leurs arrivées ?",
      items: [],
      corrige: [
        [{ text: "Naina : 24 ÷ 6 = 4 h ; Koto : 24 ÷ 18 ≈ 1 h 20 min ; écart ≈ " }, { text: "2 h 40 min", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Trace l'allure du graphique distance-temps d'un piéton qui marche 10 min, s'arrête 5 min, puis repart.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Droite montante, puis palier horizontal (arrêt), puis droite montante", cle: true }, { text: " à nouveau." }],
      ],
    },
  ],
};

const S22 = {
  numero: 22, total: 34, unite: "III", theme: "Force et interaction",
  titre: "Le poids d'un corps",
  objectif: "mettre en évidence le poids d'un corps et de le mesurer avec un dynamomètre",
  documentation: DOC,
  support: "Dynamomètre, divers objets (pierre, fruit, trousse), ficelle, balance",
  image: "images/img_seance22.png",
  imageLegende: "Figure 18 — La mangue tombe toujours vers le bas : le poids, force d'attraction de la Terre, se mesure au dynamomètre",
  revision: {
    qa: [
      { q: "Que se passe-t-il quand tu lâches un objet ?", ra: "Il tombe vers le sol, toujours vers le bas." },
      { q: "Qu'est-ce que la masse d'un corps et son unité ?", ra: "La quantité de matière qu'il contient ; en kilogrammes (kg)." },
      { q: "Avec quel instrument mesure-t-on une masse ?", ra: "Une balance." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Sous le grand manguier de l'école, les mangues mûres tombent une à une : jamais vers le haut, jamais de travers : toujours droit vers le sol ! Et pour retenir un seau plein au-dessus du puits, il faut tirer fort : quelque chose tire le seau vers le bas.",
      "Qu'est-ce qui attire ainsi tous les objets vers le sol, et comment le mesurer ?",
      "R.A. : La Terre attire tous les corps : cette force est le poids ; on la mesure au dynamomètre.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le poids d'un corps ». Après cette séance, vous serez capables de mettre en évidence le poids et de le mesurer avec un dynamomètre.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Je lâche une pierre : elle tombe verticalement. Je la suspends à un élastique : l'élastique s'étire vers le bas. Je l'accroche maintenant à ce dynamomètre : le ressort s'allonge et l'aiguille indique une valeur. Plus l'objet est « lourd », plus l'allongement est grand : essayons avec la trousse, puis le gros caillou.",
    apprenants: "Observent, lisent les valeurs, un élève répète les mesures.",
    technique: "Expérimentation, démarche d'investigation", support: "Dynamomètre, objets",
  },
  analyse: {
    qa: [
      { q: "Pourquoi la pierre tombe-t-elle ?", ra: "Parce que la Terre l'attire : cette force d'attraction est le poids." },
      { q: "Dans quelle direction le poids agit-il ?", ra: "Verticalement, vers le bas (vers le centre de la Terre)." },
      { q: "Quel instrument mesure le poids ?", ra: "Le dynamomètre : son ressort s'étire proportionnellement à la force." },
      { q: "Quelle est l'unité du poids ?", ra: "Le newton (N) : le poids est une force, pas une masse !" },
      { q: "Poids et masse, est-ce pareil ?", ra: "Non : la masse (kg) mesure la quantité de matière ; le poids (N) mesure la force d'attraction terrestre." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Dynamomètre, tableau noir",
  },
  synthese: {
    enseignant: "Donc, le poids d'un corps est la force avec laquelle la Terre l'attire. Il agit verticalement, vers le bas, et s'applique en permanence : c'est lui qui fait tomber la mangue, tendre la corde du puits, couler la pierre. On le mesure avec un dynamomètre — un ressort étalonné — et il s'exprime en newtons (N), l'unité de force. Ne confondez plus : la masse, en kilogrammes, mesurée à la balance, dit « combien de matière » ; le poids, en newtons, mesuré au dynamomètre, dit « avec quelle force la Terre attire ». La séance prochaine, nous découvrirons le lien précis entre les deux !",
    apprenants: "Écoutent et recopient.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Quelle est la direction du poids ?",
        "b) Quel instrument le mesure, et en quelle unité ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Verticale, vers le bas", cle: true }, { text: "." }],
        [{ text: "b) Le " }, { text: "dynamomètre", cle: true }, { text: ", en " }, { text: "newtons (N)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Sépare ce qui décrit la masse et ce qui décrit le poids : se mesure en kg ; est une force ; se mesure à la balance ; se mesure en N ; attire vers le bas ; quantité de matière.",
      items: [],
      corrige: [
        [{ text: "Masse : " }, { text: "kg, balance, quantité de matière", cle: true }, { text: " ; poids : " }, { text: "force, newtons, attire vers le bas", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) Le poids se mesure en kilogrammes.",
        "b) Le poids d'un corps agit verticalement vers le bas.",
        "c) La balance mesure le poids.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : en newtons ; les kilogrammes mesurent la masse." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : la balance mesure la masse ; le dynamomètre mesure le poids." }],
      ],
    },
    {
      consigne: "Décris une expérience simple mettant en évidence l'existence du poids.",
      items: [],
      corrige: [
        [{ text: "Exemple : " }, { text: "lâcher un objet : il tombe verticalement", cle: true }, { text: " ; ou " }, { text: "le suspendre à un élastique qui s'étire vers le bas", cle: true }, { text: " : une force l'attire vers la Terre." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["poids", "force", "newton", "dynamomètre", "verticale", "attraction terrestre"],
    sections: [
      {
        titre: "1. La Terre attire les corps",
        paras: [
          "Tout objet lâché tombe verticalement vers le sol : la Terre exerce sur lui une force d'attraction. Cette force est le poids du corps, noté P.",
        ],
      },
      {
        titre: "2. Les caractéristiques du poids",
        paras: [],
        puces: [
          "direction : la verticale ;",
          "sens : vers le bas (vers le centre de la Terre) ;",
          "unité : le newton (N) ;",
          "instrument de mesure : le dynamomètre (ressort étalonné).",
        ],
      },
      {
        titre: "3. Poids ou masse ? Ne plus confondre !",
        paras: [
          "La masse (en kg, à la balance) mesure la quantité de matière : elle ne change pas si l'on change de lieu. Le poids (en N, au dynamomètre) mesure la force d'attraction : il changerait sur la Lune !",
        ],
      },
    ],
    saisTu: [
      "Sur la Lune, ta masse resterait la même, mais ton poids serait divisé par six ! Les astronautes d'Apollo faisaient des bonds de trois mètres sans effort. Et dans la Station spatiale, en chute libre permanente, les objets « flottent » : on parle d'impesanteur.",
    ],
    experience: [
      "Fabrique ton dynamomètre :",
      "1. Suspends un élastique solide à un clou, avec un crochet en fil de fer en bas.",
      "2. Accroche un sachet contenant 100 g de riz : marque l'allongement sur un carton derrière. Puis 200 g, 300 g…",
      "3. Ta graduation est prête : chaque marque correspond à environ 1 N, 2 N, 3 N.",
      "4. Mesure le poids d'objets divers et compare avec tes camarades.",
    ],
  },
  substitutions: [
    { officiel: "Dynamomètre de laboratoire", local: "Élastique + carton gradué avec des masses de riz connues (100 g ≈ 1 N)" },
    { officiel: "Masses marquées", local: "Sachets de riz ou de sable pesés au marché (100 g, 200 g, 500 g)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Le poids est : a) une masse b) une force c) un volume. 2. Il se mesure avec : a) une balance b) un dynamomètre c) un thermomètre. 3. Son unité est : a) le kg b) le newton c) le litre. 4. Sa direction est : a) horizontale b) verticale c) quelconque.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Un fil à plomb de maçon indique la verticale. Explique le lien avec le poids.",
      items: [],
      corrige: [
        [{ text: "Le plomb est tiré " }, { text: "verticalement vers le bas par son poids", cle: true }, { text: " : le fil tendu matérialise donc " }, { text: "la direction du poids, la verticale", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Amina dit : « Je pèse 40 kilos. » Corrige scientifiquement sa phrase.",
      items: [],
      corrige: [
        [{ text: "40 kg est " }, { text: "sa masse", cle: true }, { text: " ; son poids vaut environ " }, { text: "400 N", cle: true }, { text: " (comme nous le verrons : P = m × g)." }],
      ],
    },
  ],
};

const S23 = {
  numero: 23, total: 34, unite: "III", theme: "Force et interaction",
  titre: "La relation entre le poids et la masse : P = m × g",
  objectif: "établir la relation entre le poids et la masse d'un corps et de l'utiliser dans des calculs",
  documentation: DOC,
  support: "Dynamomètre, masses marquées (ou sachets pesés), balance, papier quadrillé",
  image: "images/img_seance23.png",
  imageLegende: "Figure 19 — Le graphique du poids en fonction de la masse : une droite de pente g ≈ 10 N/kg",
  revision: {
    qa: [
      { q: "Qu'est-ce que le poids d'un corps ?", ra: "La force d'attraction que la Terre exerce sur lui ; en newtons." },
      { q: "Quelle différence entre masse et poids ?", ra: "Masse en kg (balance, quantité de matière) ; poids en N (dynamomètre, force)." },
      { q: "Que signifie un graphique en droite passant par l'origine ?", ra: "Que les deux grandeurs sont proportionnelles." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché de gros, le sac de riz de 50 kg demande deux hommes pour être soulevé ; le sachet de 500 g se soulève d'un doigt. Plus la masse est grande, plus la Terre semble tirer fort…",
      "Existe-t-il une relation précise entre la masse d'un corps et son poids ?",
      "R.A. : Oui : le poids est proportionnel à la masse : P = m × g.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La relation entre le poids et la masse ». Après cette séance, vous serez capables d'établir et d'utiliser la relation P = m × g.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien l'expérience : je suspends au dynamomètre des masses de plus en plus grandes et je note : 100 g → 1 N ; 200 g → 2 N ; 300 g → 3 N ; 500 g → 5 N ; 1 kg → 10 N. Reportons ces couples (m ; P) sur le quadrillage : les points s'alignent sur une droite qui passe par l'origine !",
    apprenants: "Notent les mesures, placent les points, tracent la droite.",
    technique: "Expérimentation, représentation graphique", support: "Dynamomètre, masses, quadrillage",
  },
  analyse: {
    qa: [
      { q: "Que montre le graphique ?", ra: "Une droite passant par l'origine : le poids est proportionnel à la masse." },
      { q: "Que vaut le coefficient de proportionnalité ?", ra: "P ÷ m = 10 N/kg environ : c'est l'intensité de la pesanteur g." },
      { q: "Écris la relation.", ra: "P = m × g, avec P en N, m en kg, g ≈ 10 N/kg sur Terre (9,8 N/kg précisément)." },
      { q: "Comment retrouver m connaissant P ?", ra: "m = P ÷ g." },
      { q: "g est-il le même partout ?", ra: "Presque sur Terre (9,8) ; mais 1,6 N/kg sur la Lune : le poids y est six fois plus faible, la masse inchangée." },
    ],
    technique: "Questions-réponses, exploitation graphique", support: "Graphique, tableau noir",
  },
  synthese: {
    enseignant: "Donc, l'expérience le prouve : le poids d'un corps est proportionnel à sa masse. La relation s'écrit P = m × g : P en newtons, m en kilogrammes, et g l'intensité de la pesanteur, environ 10 N/kg sur Terre (9,8 pour être précis). Le graphique du poids en fonction de la masse est une droite passant par l'origine, dont la pente est g. Les formules sœurs : m = P ÷ g et g = P ÷ m. Retenez l'ordre de grandeur : 1 kg « pèse » environ 10 N ; un élève de 40 kg a un poids d'environ 400 N. Et sur la Lune, où g vaut 1,6 N/kg, il ne pèserait que 64 N — avec la même masse de 40 kg !",
    apprenants: "Écoutent et recopient les formules.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Avec g = 10 N/kg, calcule :",
      items: [
        "a) Le poids d'un sac de riz de 25 kg.",
        "b) La masse d'un régime de bananes dont le poids est 80 N.",
      ],
      corrige: [
        [{ text: "a) P = 25 × 10 = " }, { text: "250 N", cle: true }, { text: "." }],
        [{ text: "b) m = 80 ÷ 10 = " }, { text: "8 kg", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un dynamomètre indique 4,9 N pour une masse de 500 g. Calcule g et commente.",
      items: [],
      corrige: [
        [{ text: "g = P ÷ m = 4,9 ÷ 0,5 = " }, { text: "9,8 N/kg", cle: true }, { text: " : c'est la valeur précise de la pesanteur terrestre." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : le poids est ……… à la masse ; P = ……… ; sur Terre, g ≈ ……… ; le graphique de P en fonction de m est une ……… passant par ……… .",
      items: [],
      corrige: [
        [{ text: "" }, { text: "proportionnel", cle: true }, { text: " ; P = " }, { text: "m × g", cle: true }, { text: " ; g ≈ " }, { text: "10 N/kg", cle: true }, { text: " ; une " }, { text: "droite", cle: true }, { text: " passant par " }, { text: "l'origine", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Sur la Lune (g = 1,6 N/kg), quel serait le poids d'un cartable de 6 kg ? Et sa masse ?",
      items: [],
      corrige: [
        [{ text: "P = 6 × 1,6 = " }, { text: "9,6 N", cle: true }, { text: " ; la masse reste " }, { text: "6 kg", cle: true }, { text: " : elle ne dépend pas du lieu." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["P = m × g", "intensité de la pesanteur", "proportionnalité", "newton par kilogramme"],
    sections: [
      {
        titre: "1. L'expérience décisive",
        paras: [
          "En mesurant le poids de masses croissantes, on constate : 100 g → 1 N ; 500 g → 5 N ; 1 kg → 10 N. Le graphique de P en fonction de m est une droite passant par l'origine : poids et masse sont proportionnels.",
        ],
      },
      {
        titre: "2. La relation P = m × g",
        paras: [
          "P = m × g, avec P en newtons (N), m en kilogrammes (kg) et g l'intensité de la pesanteur : g ≈ 10 N/kg sur Terre (9,8 N/kg précisément). g est la pente de la droite.",
        ],
        puces: [
          "m = P ÷ g pour retrouver la masse ;",
          "g = P ÷ m pour déterminer la pesanteur d'un lieu.",
        ],
      },
      {
        titre: "3. Le poids change, la masse reste",
        paras: [
          "g dépend du lieu : 9,8 N/kg sur Terre, 1,6 N/kg sur la Lune, 3,7 N/kg sur Mars. En voyageant, un corps garde sa masse mais change de poids !",
        ],
      },
    ],
    saisTu: [
      "La légende raconte que Newton comprit la gravitation en voyant tomber une pomme dans son jardin, en 1666. Il montra que la force qui fait tomber la pomme est la même qui retient la Lune autour de la Terre ! L'unité de force porte son nom : le newton.",
    ],
    experience: [
      "Vérifie P = m × g :",
      "1. Reprends ton dynamomètre à élastique étalonné (séance précédente).",
      "2. Mesure le poids de sachets de 100, 200, 300 et 500 g.",
      "3. Trace P en fonction de m sur papier quadrillé : obtiens-tu une droite ?",
      "4. Calcule la pente P ÷ m pour chaque point : retrouve-tu environ 10 N/kg ?",
    ],
  },
  substitutions: [
    { officiel: "Jeu de masses marquées en laiton", local: "Sachets de riz ou sable pesés au marché ou à la balance de cuisine" },
    { officiel: "Dynamomètre à cadran", local: "Dynamomètre artisanal à élastique gradué (1 N par 100 g)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Avec g = 10 N/kg, complète (1 point par case) : a) m = 3 kg, P = ? ; b) m = 0,7 kg, P = ? ; c) P = 45 N, m = ? ; d) P = 620 N, m = ?",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "30 N", cle: true }, { text: " ; b) " }, { text: "7 N", cle: true }, { text: " ; c) " }, { text: "4,5 kg", cle: true }, { text: " ; d) " }, { text: "62 kg", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Un astronaute de 80 kg se pose sur Mars (g = 3,7 N/kg). Calcule son poids sur Terre puis sur Mars.",
      items: [],
      corrige: [
        [{ text: "Terre : 80 × 10 = " }, { text: "800 N", cle: true }, { text: " ; Mars : 80 × 3,7 = " }, { text: "296 N", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Le graphique de P en fonction de m d'une planète inconnue passe par le point (2 kg ; 18 N). Détermine g et identifie la planète (Terre ? Lune ? Mars ?).",
      items: [],
      corrige: [
        [{ text: "g = 18 ÷ 2 = " }, { text: "9 N/kg ≈ 10", cle: true }, { text: " : c'est (presque) " }, { text: "la Terre", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S24 = {
  numero: 24, total: 34, unite: "III", theme: "Force et interaction",
  titre: "La poussée d'Archimède",
  objectif: "mettre en évidence la poussée d'Archimède et de calculer son intensité",
  documentation: DOC,
  support: "Dynamomètre, pierre, ficelle, récipient gradué, eau, balance",
  image: "images/img_seance24.png",
  imageLegende: "Figure 20 — La pierre « pèse moins » dans l'eau : le liquide la pousse vers le haut : c'est la poussée d'Archimède",
  revision: {
    qa: [
      { q: "Rappelle la relation entre poids et masse.", ra: "P = m × g, avec g ≈ 10 N/kg." },
      { q: "Qu'est-ce que la masse volumique, vue en T7 ?", ra: "La masse d'une unité de volume : ρ = m ÷ V, en kg/L ou g/cm³." },
      { q: "Pourquoi certains corps flottent-ils ?", ra: "Nous l'avons vu qualitativement : leur masse volumique est inférieure à celle de l'eau. Aujourd'hui, nous découvrons la force qui l'explique." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au bord de la rivière, Tovo soulève sans effort un gros galet sous l'eau… mais dès qu'il sort le galet de la rivière, ses bras plient sous la charge ! Le même galet semble bien plus léger dans l'eau.",
      "L'eau rendrait-elle les objets plus légers ? Que se passe-t-il vraiment ?",
      "R.A. : L'eau exerce sur le galet une force vers le haut : la poussée d'Archimède.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La poussée d'Archimède ». Après cette séance, vous serez capables de la mettre en évidence et de calculer son intensité.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien l'expérience en trois temps. 1) La pierre suspendue au dynamomètre pèse 3 N dans l'air. 2) Je la plonge entièrement dans l'eau, sans toucher le fond : le dynamomètre n'indique plus que 2 N ! 3) L'eau du récipient est montée : la pierre a déplacé 100 mL d'eau, soit 100 g, dont le poids vaut 1 N. Comparez la « perte » de poids (3 − 2 = 1 N) et le poids de l'eau déplacée (1 N)…",
    apprenants: "Observent, relèvent les trois valeurs, comparent.",
    technique: "Expérimentation, démarche d'investigation", support: "Dynamomètre, pierre, récipient gradué",
  },
  analyse: {
    qa: [
      { q: "Pourquoi le dynamomètre indique-t-il moins dans l'eau ?", ra: "L'eau pousse la pierre vers le haut avec une force : la poussée d'Archimède PA." },
      { q: "Comment calculer PA à partir des mesures ?", ra: "PA = poids dans l'air − poids apparent dans l'eau = 3 − 2 = 1 N." },
      { q: "Que vaut le poids du liquide déplacé ?", ra: "100 mL d'eau = 0,1 kg → P = 0,1 × 10 = 1 N : exactement PA !" },
      { q: "Énonce la règle découverte.", ra: "La poussée d'Archimède est égale au poids du liquide déplacé par le corps immergé." },
      { q: "Écris la formule.", ra: "PA = ρliquide × Vimmergé × g, avec ρ en kg/L (ou kg/m³), V en L (ou m³), g ≈ 10 N/kg." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Mesures, tableau noir",
  },
  synthese: {
    enseignant: "Donc, tout corps plongé dans un liquide reçoit une force verticale dirigée vers le haut : la poussée d'Archimède. Son intensité est égale au poids du liquide déplacé : PA = ρ liquide × V immergé × g. Dans notre expérience : la pierre a déplacé 0,1 L d'eau (ρ = 1 kg/L) : PA = 1 × 0,1 × 10 = 1 N, exactement la perte de poids apparente mesurée ! Cette force explique pourquoi le galet paraît léger sous l'eau, pourquoi il est facile de porter un camarade dans la piscine… et, à la prochaine séance, pourquoi les pirogues flottent.",
    apprenants: "Écoutent et recopient la formule.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Un objet pèse 5 N dans l'air et 3,5 N entièrement immergé dans l'eau.",
      items: [
        "a) Calcule la poussée d'Archimède.",
        "b) Déduis-en le volume d'eau déplacée (g = 10 N/kg ; ρeau = 1 kg/L).",
      ],
      corrige: [
        [{ text: "a) PA = 5 − 3,5 = " }, { text: "1,5 N", cle: true }, { text: "." }],
        [{ text: "b) PA = ρ × V × g → V = 1,5 ÷ (1 × 10) = 0,15 L = " }, { text: "150 mL", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Calcule la poussée d'Archimède sur un objet de 2 L entièrement immergé dans l'eau.",
      items: [],
      corrige: [
        [{ text: "PA = 1 × 2 × 10 = " }, { text: "20 N", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète : la poussée d'Archimède est une force ……… dirigée vers le ……… ; son intensité est égale au ……… du liquide ……… .",
      items: [],
      corrige: [
        [{ text: "Une force " }, { text: "verticale", cle: true }, { text: " dirigée vers le " }, { text: "haut", cle: true }, { text: " ; égale au " }, { text: "poids", cle: true }, { text: " du liquide " }, { text: "déplacé", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Une pierre de 600 g (V = 0,2 L) est immergée dans l'eau. Calcule son poids, la poussée d'Archimède, puis son poids apparent.",
      items: [],
      corrige: [
        [{ text: "P = 0,6 × 10 = " }, { text: "6 N", cle: true }, { text: " ; PA = 1 × 0,2 × 10 = " }, { text: "2 N", cle: true }, { text: " ; poids apparent = 6 − 2 = " }, { text: "4 N", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["poussée d'Archimède", "poids apparent", "liquide déplacé", "PA = ρ × V × g"],
    sections: [
      {
        titre: "1. Une force qui pousse vers le haut",
        paras: [
          "Tout corps plongé dans un liquide reçoit de sa part une force verticale, dirigée vers le haut : la poussée d'Archimède PA. C'est elle qui « allège » les corps immergés : poids apparent = poids réel − PA.",
        ],
      },
      {
        titre: "2. Le principe d'Archimède",
        paras: [
          "L'intensité de la poussée est égale au poids du liquide déplacé par le corps :",
          "PA = ρ liquide × V immergé × g",
        ],
        puces: [
          "ρ liquide : masse volumique du liquide (1 kg/L pour l'eau) ;",
          "V immergé : volume de la partie immergée du corps ;",
          "g ≈ 10 N/kg.",
        ],
      },
      {
        titre: "3. La mesure en pratique",
        paras: [
          "Au dynamomètre : PA = poids dans l'air − poids apparent dans l'eau. Au récipient gradué : la montée du niveau donne le volume déplacé, donc le poids d'eau correspondant. Les deux méthodes donnent le même résultat !",
        ],
      },
    ],
    saisTu: [
      "« Eurêka ! » (« J'ai trouvé ! ») : c'est en prenant son bain qu'Archimède, savant grec de Syracuse (3e siècle avant J.-C.), comprit son principe : il devait vérifier si la couronne du roi Hiéron était en or pur… sans la fondre. L'eau déplacée le trahit : l'orfèvre avait triché !",
    ],
    experience: [
      "L'expérience d'Archimède au seau :",
      "1. Suspends une pierre à ton dynamomètre artisanal : note son poids dans l'air.",
      "2. Plonge-la dans un seau rempli à ras bord posé dans une bassine : recueille l'eau débordée.",
      "3. Note le poids apparent, puis pèse l'eau débordée (100 g ≈ 1 N).",
      "4. Compare la perte de poids et le poids de l'eau recueillie : Eurêka ?",
    ],
  },
  substitutions: [
    { officiel: "Éprouvette graduée et vase à trop-plein", local: "Bouteille coupée graduée à la seringue + seau rempli à ras bord dans une bassine" },
    { officiel: "Dynamomètre de précision", local: "Dynamomètre à élastique étalonné avec des sachets pesés" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Un solide pèse 8 N dans l'air, 6 N dans l'eau. Calcule : a) la poussée d'Archimède ; b) le volume immergé ; c) la masse du solide ; d) sa masse volumique (V total = volume immergé).",
      items: [],
      corrige: [
        [{ text: "a) PA = 8 − 6 = " }, { text: "2 N", cle: true }, { text: " ; b) V = 2 ÷ 10 = 0,2 L = " }, { text: "200 mL", cle: true }, { text: " ; c) m = 8 ÷ 10 = " }, { text: "0,8 kg", cle: true }, { text: " ; d) ρ = 0,8 ÷ 0,2 = " }, { text: "4 kg/L", cle: true }, { text: ". (1 point par étape)" }],
      ],
    },
    {
      points: 3,
      consigne: "Pourquoi est-il plus facile de soulever un ami dans l'eau de la piscine que sur la terre ferme ?",
      items: [],
      corrige: [
        [{ text: "Dans l'eau, " }, { text: "la poussée d'Archimède le pousse vers le haut", cle: true }, { text: " : son " }, { text: "poids apparent est fortement réduit", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "La poussée est-elle plus grande dans l'eau douce ou dans l'eau de mer (ρ = 1,03 kg/L) pour un même volume immergé ? Justifie par la formule.",
      items: [],
      corrige: [
        [{ text: "PA = ρ × V × g : à V égal, " }, { text: "ρ plus grand → PA plus grande : dans l'eau de mer", cle: true }, { text: " ; c'est pourquoi on y flotte mieux !" }],
      ],
    },
  ],
};

const S25 = {
  numero: 25, total: 34, unite: "III", theme: "Force et interaction",
  titre: "Les conditions de flottabilité : construis ta mini-pirogue",
  objectif: "prévoir si un corps flotte ou coule et de concevoir un objet flottant selon un cahier des charges",
  documentation: DOC,
  support: "Divers objets (bois, clou, bouchon, boule d'argile), bassine d'eau, papier aluminium ou fer blanc, pâte à modeler ou argile",
  image: "images/img_seance25.png",
  imageLegende: "Figure 21 — Flotter ou couler ? Le duel du poids et de la poussée d'Archimède : le défi de la mini-pirogue",
  revision: {
    qa: [
      { q: "Rappelle le principe d'Archimède.", ra: "PA = poids du liquide déplacé = ρ liquide × V immergé × g." },
      { q: "Quelles sont les deux forces qui agissent sur un corps dans l'eau ?", ra: "Son poids (vers le bas) et la poussée d'Archimède (vers le haut)." },
      { q: "Rappelle la masse volumique de l'eau.", ra: "1 kg/L (1 000 kg/m³, 1 g/cm³)." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Sur le canal des Pangalanes, une pirogue chargée de plusieurs centaines de kilos flotte tranquillement… alors qu'un simple clou de dix grammes coule aussitôt ! Et pourtant la pirogue en bois est mille fois plus lourde que le clou.",
      "Flotter ou couler : qu'est-ce qui décide vraiment ?",
      "R.A. : Le duel entre le poids du corps et la poussée d'Archimède, c'est-à-dire la comparaison des masses volumiques… et la forme !",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les conditions de flottabilité ». Après cette séance, vous serez capables de prévoir si un corps flotte et de construire une mini-pirogue selon un cahier des charges.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. Je plonge : le morceau de bois (il flotte), le clou (il coule), le bouchon (il flotte), la boule d'argile (elle coule). Maintenant, la surprise : je reprends la MÊME argile, je l'aplatis en forme de barque creuse… et elle flotte ! Même matière, même masse : seule la forme a changé.",
    apprenants: "Observent, prédisent avant chaque essai, notent flotte/coule.",
    technique: "Expérimentation, démarche d'investigation", support: "Objets, bassine, argile",
  },
  analyse: {
    qa: [
      { q: "Quand un corps homogène flotte-t-il ?", ra: "Quand sa masse volumique est inférieure à celle du liquide : ρ corps < ρ liquide." },
      { q: "Et en termes de forces ?", ra: "Il flotte si la poussée d'Archimède peut égaler son poids : PA ≥ P ; il coule si PA maximale < P." },
      { q: "Pourquoi la boule d'argile coule-t-elle et la barque d'argile flotte-t-elle ?", ra: "La forme creuse déplace beaucoup plus d'eau : le poids de l'eau déplacée atteint le poids de la barque." },
      { q: "Pourquoi les navires en acier flottent-ils ?", ra: "Leur coque creuse (pleine d'air) donne un grand volume immergé : la masse volumique moyenne devient inférieure à celle de l'eau." },
      { q: "Qu'est-ce qu'un corps en suspension entre deux eaux ?", ra: "Un corps dont la masse volumique égale celle du liquide : PA = P, il reste où on le place." },
    ],
    technique: "Questions-réponses, expérimentation", support: "Bassine, tableau noir",
  },
  synthese: {
    enseignant: "Donc, la flottabilité résulte du duel entre le poids P (vers le bas) et la poussée d'Archimède PA (vers le haut). Corps homogène : il flotte si ρ corps < ρ liquide, coule si ρ corps > ρ liquide, reste en suspension si égalité. Mais la forme change tout : en creusant un matériau dense, on augmente le volume d'eau qu'il peut déplacer : quand le poids de l'eau déplacée atteint le propre poids de l'objet, il flotte ! C'est le secret des pirogues, des navires en acier… et de votre défi du jour : construire la mini-pirogue en aluminium ou en argile qui portera la plus grande cargaison de cailloux. Cahier des charges : elle doit flotter, rester stable, et embarquer au moins 20 cailloux !",
    apprenants: "Écoutent puis passent au défi de conception en groupes.", technique: "Exposé, démarche de conception technologique", support: "Matériaux du défi",
  },
  application: [
    {
      consigne: "Prédis (ρ eau = 1 g/cm³) : flotte ou coule ?",
      items: [
        "a) Bois d'eucalyptus : ρ = 0,7 g/cm³.",
        "b) Verre : ρ = 2,5 g/cm³.",
        "c) Glace : ρ = 0,92 g/cm³.",
      ],
      corrige: [
        [{ text: "a) 0,7 < 1 : " }, { text: "flotte", cle: true }, { text: "." }],
        [{ text: "b) 2,5 > 1 : " }, { text: "coule", cle: true }, { text: "." }],
        [{ text: "c) 0,92 < 1 : " }, { text: "flotte", cle: true }, { text: " (à peine : un iceberg est presque tout immergé !)." }],
      ],
    },
    {
      consigne: "Une barque pèse 50 N. Quel volume d'eau doit-elle déplacer au minimum pour flotter (g = 10 N/kg) ?",
      items: [],
      corrige: [
        [{ text: "Il faut PA = 50 N → V = 50 ÷ (1 × 10) = " }, { text: "5 L", cle: true }, { text: " d'eau déplacée." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe (défi pirogue)", applicationSupport: "Bassine, aluminium, argile, cailloux",
  evaluation: [
    {
      consigne: "Complète : un corps homogène flotte si sa ……… est ……… à celle du liquide ; il flotte aussi, quelle que soit sa matière, si le ……… de l'eau déplacée atteint son propre ……… .",
      items: [],
      corrige: [
        [{ text: "Sa " }, { text: "masse volumique", cle: true }, { text: " est " }, { text: "inférieure", cle: true }, { text: " ; si le " }, { text: "poids", cle: true }, { text: " de l'eau déplacée atteint son propre " }, { text: "poids", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique pourquoi une boule de pâte coule alors que la même pâte en forme de barque flotte.",
      items: [],
      corrige: [
        [{ text: "La barque creuse " }, { text: "déplace un volume d'eau beaucoup plus grand", cle: true }, { text: " : le poids de l'eau déplacée " }, { text: "atteint le poids de la pâte", cle: true }, { text: " ; PA = P : elle flotte." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit + évaluation du prototype", evaluationSupport: "Cahier, grille du défi",
  lecon: {
    motsCles: ["flottabilité", "masse volumique", "cahier des charges", "conception technologique", "suspension"],
    sections: [
      {
        titre: "1. Les trois cas de la flottabilité",
        paras: [
          "Pour un corps homogène plongé dans un liquide :",
        ],
        puces: [
          "ρ corps < ρ liquide → il flotte (PA équilibre P avant l'immersion totale) ;",
          "ρ corps > ρ liquide → il coule (PA maximale < P) ;",
          "ρ corps = ρ liquide → il reste en suspension entre deux eaux.",
        ],
      },
      {
        titre: "2. Le pouvoir de la forme",
        paras: [
          "Un matériau plus dense que l'eau peut flotter si on lui donne une forme creuse : le volume immergé augmente, donc l'eau déplacée aussi. Dès que le poids de l'eau déplacée égale le poids de l'objet, il flotte. C'est le principe de la pirogue, du navire en acier, du bac des Pangalanes.",
        ],
      },
      {
        titre: "3. La démarche de conception technologique",
        paras: [
          "Concevoir un objet, c'est suivre un cahier des charges (ce que l'objet DOIT faire), imaginer une solution, construire un prototype, le tester, puis l'améliorer. Le défi de la mini-pirogue suit exactement cette démarche : flotter, être stable, porter 20 cailloux !",
        ],
      },
    ],
    saisTu: [
      "Les pirogues à balancier malgaches, les lakana, descendent en droite ligne des embarcations austronésiennes venues d'Indonésie il y a plus de mille ans ! Le balancier n'aide pas à flotter : il empêche le chavirement en élargissant la base : stabilité et flottabilité sont deux problèmes différents que nos ancêtres avaient déjà résolus.",
    ],
    experience: [
      "Le concours de la mini-pirogue :",
      "1. Avec une feuille d'aluminium (ou de l'argile), chaque équipe façonne une pirogue de même masse.",
      "2. Pose-la sur l'eau, puis charge-la caillou par caillou (tous semblables).",
      "3. Note la cargaison maximale avant naufrage : l'équipe gagnante explique sa forme.",
      "4. Améliore ton prototype : bords plus hauts ? fond plus large ? Recommence : c'est la démarche de l'ingénieur !",
    ],
  },
  substitutions: [
    { officiel: "Bassin d'essai de laboratoire", local: "Grande bassine, cuvette ou demi-fût propre" },
    { officiel: "Maquettes de coques normalisées", local: "Feuilles d'aluminium de cuisine, fer blanc de boîtes, argile ou pâte des rizières" },
    { officiel: "Masses de charge calibrées", local: "Cailloux triés de taille semblable ou billes" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Vrai ou Faux (1 point chacun) : a) Un corps plus dense que l'eau coule toujours, quelle que soit sa forme. b) L'acier peut flotter sous forme de coque creuse. c) Un corps en suspension a la même masse volumique que le liquide. d) Le balancier de la pirogue sert à la faire flotter.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " (la forme creuse permet de flotter) ; b) " }, { text: "Vrai", cle: true }, { text: " ; c) " }, { text: "Vrai", cle: true }, { text: " ; d) " }, { text: "Faux", cle: true }, { text: " (il assure la stabilité)." }],
      ],
    },
    {
      points: 3,
      consigne: "Une mini-pirogue en aluminium pèse 0,5 N à vide. Chargée, elle déplace au maximum 0,3 L d'eau. Quelle cargaison maximale (en N puis en g) peut-elle porter ?",
      items: [],
      corrige: [
        [{ text: "PA max = 1 × 0,3 × 10 = 3 N ; cargaison = 3 − 0,5 = " }, { text: "2,5 N ≈ 250 g", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "L'œuf frais coule dans l'eau douce mais flotte dans l'eau très salée. Explique.",
      items: [],
      corrige: [
        [{ text: "Le sel augmente la " }, { text: "masse volumique de l'eau", cle: true }, { text: " : elle dépasse celle de l'œuf → " }, { text: "ρ œuf < ρ eau salée : il flotte", cle: true }, { text: "." }],
      ],
    },
  ],
};

module.exports = { seances: [S20, S21, S22, S23, S24, S25] };
