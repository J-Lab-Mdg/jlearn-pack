// data-unite5.js — T9 Unité V : LE MOUVEMENT (séances 35 à 37)
const DOC = "Programme scolaire de la classe de 3e (T9) — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S35 = {
  numero: 35, total: 39, unite: "V", theme: "Mouvement",
  titre: "Les trajectoires et la relativité du mouvement",
  objectif: "identifier les types de trajectoire d'un mobile et d'expliquer que le mouvement est relatif au référentiel choisi",
  documentation: DOC,
  support: "Bille, ficelle, craie, ventilateur ou roue de vélo, images de taxi-brousse, tableau",
  image: "images/img_seance35.png",
  imageLegende: "Figure 27 — Rectiligne, circulaire ou curviligne : la trajectoire est la ligne décrite par le mobile",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'un mobile ?", ra: "L'objet dont on étudie le mouvement." },
      { q: "Rappelle la formule de la vitesse moyenne vue en T8.", ra: "v = d ÷ t : distance parcourue divisée par la durée." },
      { q: "Qu'est-ce qu'un mouvement rectiligne uniforme ?", ra: "Un mouvement en ligne droite à vitesse constante." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Dans le taxi-brousse qui file vers Antsirabe, Naina dort profondément sur son siège. Sa voisine dit : « Il ne bouge pas d'un centimètre ! » Pourtant, le paysan au bord de la route l'a vu passer à 80 km/h !",
      "Alors, Naina est-il immobile ou en mouvement ? Qui a raison ?",
      "R.A. : Les deux ! Tout dépend de l'objet de référence choisi : le mouvement est relatif : immobile par rapport au siège, rapide par rapport à la route.",
    ],
    apprenants: "Écoutent, débattent et donnent leur avis.",
    technique: "Question problème", support: "Tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les trajectoires et la relativité du mouvement ». Après cette séance, vous serez capables de reconnaître une trajectoire rectiligne, circulaire ou curviligne, et d'expliquer pourquoi le mouvement dépend du référentiel.",
    apprenants: "Écoutent et notent le titre dans le cahier.",
    technique: "Exposé", support: "Tableau",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je lâche une craie : elle tombe en LIGNE DROITE : trajectoire rectiligne. 2) Je fais tourner une bille au bout d'une ficelle : elle décrit un CERCLE : trajectoire circulaire. 3) Je lance la craie vers l'avant : elle décrit une COURBE avant de retomber : trajectoire curviligne. 4) Maintenant, la valve de cette roue de vélo : pour moi qui tiens le cadre, elle décrit un cercle ; mais pour une fourmi assise sur la valve, la valve est immobile ! Le mouvement dépend de qui observe.",
    apprenants: "Observent, décrivent chaque trajectoire, comparent les points de vue.",
    technique: "Observation dirigée", support: "Craie, bille, ficelle, roue de vélo",
  },
  analyse: {
    qa: [
      { q: "Quelle est la trajectoire de la craie qui tombe ?", ra: "Une droite : trajectoire rectiligne." },
      { q: "Et celle de la bille au bout de la ficelle ?", ra: "Un cercle : trajectoire circulaire." },
      { q: "Et celle de la craie lancée vers l'avant ?", ra: "Une courbe quelconque : trajectoire curviligne." },
      { q: "Pour le paysan au bord de la route, Naina endormi est-il en mouvement ?", ra: "Oui : il se déplace avec le taxi-brousse par rapport au sol." },
      { q: "Et par rapport à son siège ?", ra: "Immobile : sa position par rapport au siège ne change pas." },
    ],
    technique: "Questions-réponses guidées", support: "Expériences réalisées",
  },
  synthese: {
    enseignant: "Guide les apprenants pour formuler : la trajectoire est la ligne décrite par le mobile (rectiligne, circulaire ou curviligne) ; le mouvement et le repos sont relatifs : ils dépendent du référentiel choisi.",
    apprenants: "Formulent la synthèse et la copient dans le cahier.",
    technique: "Synthèse collective", support: "Tableau, cahier",
  },
  application: [
    {
      consigne: "Donne le type de trajectoire : a) une mangue qui tombe ; b) l'extrémité de l'aiguille d'une montre ; c) une sauterelle qui bondit.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "rectiligne", cle: true }, { text: " ; b) " }, { text: "circulaire", cle: true }, { text: " ; c) " }, { text: "curviligne", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Le contrôleur marche dans le couloir du train en marche. Est-il en mouvement par rapport : a) au wagon ? b) aux rails ?",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Oui, il change de place dans le wagon", cle: true }, { text: " ; b) " }, { text: "oui aussi, et plus vite encore : les deux mouvements s'ajoutent", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète : la ligne décrite par un mobile s'appelle sa ……… ; un mouvement dont la trajectoire est un cercle est dit ……… .",
      items: [],
      corrige: [
        [{ text: "Sa " }, { text: "trajectoire", cle: true }, { text: " ; mouvement " }, { text: "circulaire", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Vrai ou faux : « Un passager assis dans un bus en marche est immobile. » Justifie.",
      items: [],
      corrige: [
        [{ text: "Réponse incomplète telle quelle : " }, { text: "c'est relatif", cle: true }, { text: " : immobile par rapport au bus, " }, { text: "en mouvement par rapport à la route", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier d'exercices",
  lecon: {
    motsCles: ["mobile", "trajectoire", "rectiligne", "circulaire", "curviligne", "référentiel", "relativité du mouvement"],
    sections: [
      {
        titre: "1. La trajectoire d'un mobile",
        paras: [
          "Quand un mobile se déplace, il occupe des positions successives. La ligne formée par toutes ces positions s'appelle la TRAJECTOIRE : c'est la « trace » que laisserait le mobile s'il écrivait en se déplaçant, comme la trace d'un vélo sur la piste sablonneuse.",
        ],
        puces: [
          "trajectoire RECTILIGNE : une ligne droite (fruit qui tombe, gouttes de pluie sans vent, ascenseur) ;",
          "trajectoire CIRCULAIRE : un cercle (valve d'une roue, extrémité d'une aiguille de montre, nacelle d'un manège) ;",
          "trajectoire CURVILIGNE : une courbe quelconque (ballon lancé, sauterelle qui bondit, papillon en vol).",
        ],
      },
      {
        titre: "2. Le référentiel : l'objet de référence",
        paras: [
          "Pour décrire un mouvement, il faut toujours préciser PAR RAPPORT À QUOI on l'observe. L'objet choisi comme référence s'appelle le RÉFÉRENTIEL. Le plus souvent, on choisit la Terre (le sol) : c'est le référentiel terrestre.",
          "Piège à éviter : dire « le mobile est en mouvement » sans préciser le référentiel n'a pas de sens en physique ! Il faut toujours dire : « en mouvement par rapport à… ».",
        ],
      },
      {
        titre: "3. La relativité du mouvement",
        paras: [
          "Un même objet peut être immobile dans un référentiel et en mouvement dans un autre : c'est la RELATIVITÉ DU MOUVEMENT. Le passager endormi du taxi-brousse est immobile par rapport à son siège, mais file à 80 km/h par rapport à la route.",
          "Même la forme de la trajectoire dépend du référentiel ! La valve d'une roue de vélo décrit un cercle par rapport au cadre du vélo… mais une curieuse courbe en arceaux (la cycloïde) par rapport à la route.",
        ],
        puces: [
          "toi, assis en classe : immobile par rapport aux murs… mais emporté par la rotation de la Terre autour du Soleil à environ 30 km par seconde ;",
          "deux taxis-brousse roulant côte à côte à la même vitesse : chacun paraît immobile pour l'autre ;",
          "conclusion : il n'existe pas de repos absolu : tout mouvement se définit par rapport à un référentiel.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Une pirogue descend le fleuve Betsiboka. Décris le mouvement du piroguier assis : a) par rapport à la pirogue ; b) par rapport à la rive. Solution : a) par rapport à la pirogue, le piroguier ne change pas de place : il est IMMOBILE ; b) par rapport à la rive, il avance avec la pirogue : il est EN MOUVEMENT. Le mouvement est bien relatif au référentiel choisi.",
          "Exemple 2 — Donne le type de trajectoire, dans le référentiel terrestre : a) d'un colis qui tombe verticalement d'un avion vu par le pilote ; b) du bout de la pale d'un ventilateur ; c) d'une pierre lancée en cloche vers un manguier. Solution : a) rectiligne (droite verticale pour le pilote qui accompagne l'avion) ; b) circulaire (la pale tourne autour de l'axe) ; c) curviligne (une courbe en cloche, appelée parabole).",
        ],
      },
    ],
    saisTu: [
      "Assis dans ta salle de classe, tu crois être immobile… mais la Terre t'emporte à environ 30 km chaque seconde autour du Soleil, soit plus de 100 000 km/h ! Tu ne le sens pas, car tout bouge avec toi : c'est exactement le principe de la relativité du mouvement.",
      "Les navigateurs malgaches d'autrefois utilisaient déjà la relativité sans le savoir : pour traverser le canal du Mozambique en boutre, ils visaient les étoiles, référentiel bien plus fiable que les vagues qui, elles, bougent avec le bateau !",
    ],
    experience: [
      "La valve mystérieuse :",
      "Matériel : une roue de vélo (vélo retourné), un morceau de chiffon clair attaché à la valve, un mur comme fond sombre.",
      "Protocole : 1. Retourne le vélo et attache le chiffon à la valve de la roue avant.",
      "2. Fais tourner lentement la roue et observe le chiffon en te plaçant face à la roue : décris la ligne qu'il décrit.",
      "3. Demande à un camarade de faire rouler le vélo le long du mur pendant que tu observes le chiffon de profil, de loin.",
      "Observation : face à la roue qui tourne sur place, le chiffon décrit un cercle ; quand le vélo roule, vu du sol, il décrit des arceaux successifs (il monte, redescend, touche presque le sol, remonte…).",
      "Conclusion : la trajectoire d'un même point dépend du référentiel : cercle par rapport au cadre du vélo, courbe en arceaux par rapport au sol : le mouvement est relatif.",
    ],
  },
  substitutions: [
    { officiel: "Table à coussin d'air", local: "Bille + ficelle, craie, roue de vélo retournée" },
    { officiel: "Logiciel de pointage vidéo", local: "Observation directe + croquis des positions à la craie" },
  ],
  exercicesNotes: [
    {
      points: 3,
      consigne: "Associe chaque mobile à sa trajectoire : 1) goutte de pluie sans vent ; 2) bout de l'aiguille d'une horloge ; 3) criquet qui saute — a) circulaire ; b) curviligne ; c) rectiligne.",
      items: [],
      corrige: [
        [{ text: "1 → " }, { text: "c", cle: true }, { text: " ; 2 → " }, { text: "a", cle: true }, { text: " ; 3 → " }, { text: "b", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 4,
      consigne: "Un car roule vers Toamasina. Le chauffeur est-il en mouvement ou immobile par rapport : a) au volant ; b) à la route ; c) à un passager assis ; d) à un cycliste qu'il dépasse ? (1 pt chacun)",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "immobile", cle: true }, { text: " ; b) " }, { text: "en mouvement", cle: true }, { text: " ; c) " }, { text: "immobile", cle: true }, { text: " ; d) " }, { text: "en mouvement (il s'en éloigne vers l'avant)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Explique en trois lignes pourquoi on dit que « le repos absolu n'existe pas », avec un exemple de ton choix.",
      items: [],
      corrige: [
        [{ text: "Tout objet " }, { text: "immobile dans un référentiel est en mouvement dans un autre", cle: true }, { text: " : l'élève assis est immobile par rapport à la classe mais " }, { text: "emporté par la Terre", cle: true }, { text: " autour du Soleil. (Accepter tout exemple cohérent : 1,5 pt définition + 1,5 pt exemple.)" }],
      ],
    },
  ],
};

const S36 = {
  numero: 36, total: 39, unite: "V", theme: "Mouvement",
  titre: "Le vecteur vitesse",
  objectif: "calculer une vitesse moyenne, de convertir km/h et m/s et de représenter le vecteur vitesse d'un mobile",
  documentation: DOC,
  support: "Règle, chronomètre ou montre, ficelle métrée, craie, tableau",
  image: "images/img_seance36.png",
  imageLegende: "Figure 28 — Le vecteur vitesse : une flèche tangente à la trajectoire, dans le sens du mouvement",
  revision: {
    qa: [
      { q: "Cite les trois types de trajectoire.", ra: "Rectiligne, circulaire, curviligne." },
      { q: "Le mouvement dépend de quoi ?", ra: "Du référentiel choisi : il est relatif." },
      { q: "Comment représente-t-on une force ? (rappel de l'Unité I)", ra: "Par un vecteur : point d'application, direction, sens, intensité." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au marché, deux chauffeurs se disputent : « Mon taxi fait du 72 km/h ! » : « Le mien fait du 25 m/s, il est plus rapide ! » Les curieux s'attroupent : qui gagne ?",
      "Comment comparer 72 km/h et 25 m/s ? Et suffit-il d'un nombre pour décrire une vitesse ?",
      "R.A. : Il faut convertir dans la même unité : 72 km/h = 20 m/s < 25 m/s : le second gagne ! Et pour tout décrire, il faut aussi la direction et le sens : c'est le vecteur vitesse.",
    ],
    apprenants: "Écoutent, proposent des méthodes de comparaison.",
    technique: "Question problème", support: "Tableau",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le vecteur vitesse ». Après cette séance, vous serez capables de calculer v = d ÷ t, de convertir km/h en m/s et de dessiner le vecteur vitesse d'un mobile.",
    apprenants: "Écoutent et notent le titre.",
    technique: "Exposé", support: "Tableau",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Jaona parcourt les 50 m de la cour en 20 s : v = 50 ÷ 20 = 2,5 m/s : c'est sa vitesse moyenne. 2) Pour convertir : 1 km = 1 000 m et 1 h = 3 600 s, donc on divise les km/h par 3,6 pour avoir des m/s : 72 ÷ 3,6 = 20 m/s. 3) Mais dire « 20 m/s » ne dit pas OÙ va le mobile ! Je dessine une flèche : son origine est sur le mobile, sa droite indique la direction, sa pointe le sens, sa longueur la valeur : c'est le VECTEUR VITESSE. 4) Sur une trajectoire courbe, la flèche est tangente à la courbe en chaque point.",
    apprenants: "Observent, calculent avec l'enseignant, reproduisent les schémas.",
    technique: "Observation dirigée et calculs guidés", support: "Cour de l'école, chronomètre, tableau",
  },
  analyse: {
    qa: [
      { q: "Quelle formule donne la vitesse moyenne ?", ra: "v = d ÷ t (distance divisée par la durée)." },
      { q: "Comment passer des km/h aux m/s ?", ra: "On divise par 3,6." },
      { q: "Et des m/s aux km/h ?", ra: "On multiplie par 3,6." },
      { q: "Quelles sont les caractéristiques du vecteur vitesse ?", ra: "Origine (position du mobile), direction, sens, et norme (la valeur de la vitesse)." },
      { q: "Comment est le vecteur vitesse sur une trajectoire circulaire ?", ra: "Tangent au cercle, dans le sens du mouvement." },
    ],
    technique: "Questions-réponses guidées", support: "Schémas au tableau",
  },
  synthese: {
    enseignant: "Guide les apprenants pour formuler : la vitesse moyenne vaut v = d ÷ t ; on convertit avec ×3,6 ou ÷3,6 ; le vecteur vitesse a quatre caractéristiques et reste tangent à la trajectoire.",
    apprenants: "Formulent la synthèse et la copient.",
    technique: "Synthèse collective", support: "Tableau, cahier",
  },
  application: [
    {
      consigne: "Un cycliste parcourt 36 km en 2 h. Calcule sa vitesse moyenne en km/h puis en m/s.",
      items: [],
      corrige: [
        [{ text: "v = 36 ÷ 2 = " }, { text: "18 km/h", cle: true }, { text: " ; 18 ÷ 3,6 = " }, { text: "5 m/s", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Convertis : a) 90 km/h en m/s ; b) 15 m/s en km/h.",
      items: [],
      corrige: [
        [{ text: "a) 90 ÷ 3,6 = " }, { text: "25 m/s", cle: true }, { text: " ; b) 15 × 3,6 = " }, { text: "54 km/h", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calculatrice",
  evaluation: [
    {
      consigne: "Complète : le vecteur vitesse a pour origine ……… ; il est toujours ……… à la trajectoire.",
      items: [],
      corrige: [
        [{ text: "La " }, { text: "position du mobile", cle: true }, { text: " ; " }, { text: "tangent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Un taxi-be roule à 45 km/h. Exprime cette vitesse en m/s.",
      items: [],
      corrige: [
        [{ text: "45 ÷ 3,6 = " }, { text: "12,5 m/s", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier d'exercices",
  lecon: {
    motsCles: ["vitesse moyenne", "m/s", "km/h", "conversion", "vecteur vitesse", "tangente", "norme"],
    sections: [
      {
        titre: "1. La vitesse moyenne : un rappel qui se précise",
        paras: [
          "La vitesse moyenne mesure la distance parcourue par unité de temps : v = d ÷ t. Avec d en mètres et t en secondes, v s'exprime en mètres par seconde (m/s) ; avec d en kilomètres et t en heures, v s'exprime en km/h.",
          "De la formule v = d ÷ t, on tire aussi d = v × t et t = d ÷ v : un triangle magique à retenir, comme pour U = R × I en électricité.",
        ],
      },
      {
        titre: "2. Convertir km/h et m/s : le nombre 3,6",
        paras: [
          "1 km/h = 1 000 m parcourus en 3 600 s, soit 1 000 ÷ 3 600 m/s. D'où la règle d'or : pour passer des km/h aux m/s, on DIVISE par 3,6 ; pour passer des m/s aux km/h, on MULTIPLIE par 3,6.",
          "Piège à éviter : ne mélange jamais les unités dans un calcul ! Si la distance est en km et le temps en secondes, convertis d'abord : sinon le résultat n'a aucun sens.",
        ],
        puces: [
          "72 km/h = 72 ÷ 3,6 = 20 m/s (un taxi-brousse rapide) ;",
          "10 m/s = 10 × 3,6 = 36 km/h (un bon sprinteur) ;",
          "repères utiles : marche ≈ 5 km/h ; cycliste ≈ 18 km/h ; son dans l'air ≈ 340 m/s ; lumière ≈ 300 000 km/s.",
        ],
      },
      {
        titre: "3. Le vecteur vitesse",
        paras: [
          "Un nombre ne suffit pas : dire « la pirogue va à 2 m/s » ne dit ni où elle va, ni dans quel sens ! Comme la force (Unité I), la vitesse se représente par un VECTEUR : une flèche notée v surmontée d'une flèche.",
          "Sur une trajectoire rectiligne, le vecteur vitesse garde la même direction ; sur une trajectoire courbe, il change de direction à chaque instant tout en restant TANGENT à la courbe : comme la pierre qui s'échappe de la fronde, droit dans la direction qu'elle avait à l'instant du lâcher.",
        ],
        puces: [
          "origine : la position du mobile à l'instant choisi ;",
          "direction : la droite tangente à la trajectoire en ce point ;",
          "sens : celui du déplacement ;",
          "norme : la valeur de la vitesse (en m/s), traduite par la longueur de la flèche à l'échelle choisie (exemple : 1 cm pour 5 m/s).",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Un taxi-brousse relie Antananarivo à Antsirabe, soit 170 km, en 3 h 24 min. Calcule sa vitesse moyenne en km/h puis en m/s. Solution : t = 3 h 24 min = 3,4 h ; v = d ÷ t = 170 ÷ 3,4 = 50 km/h ; en m/s : 50 ÷ 3,6 ≈ 13,9 m/s. La vitesse moyenne tient compte des arrêts : le compteur, lui, affiche la vitesse instantanée.",
          "Exemple 2 — Une bille tourne au bout d'une ficelle de 50 cm à la vitesse de 4 m/s. Représente son vecteur vitesse au point le plus haut du cercle (échelle : 1 cm pour 2 m/s). Solution : au point le plus haut, la tangente au cercle est HORIZONTALE : le vecteur est donc horizontal, dans le sens de rotation, d'origine la position de la bille, et de longueur 4 ÷ 2 = 2 cm. Si la ficelle casse à cet instant, la bille part horizontalement !",
        ],
      },
    ],
    saisTu: [
      "Le guépard atteint 30 m/s (108 km/h) en pointe… mais le faucon pèlerin plonge à plus de 300 km/h ! À Madagascar, le champion est le faucon de Newton, capable de piqués fulgurants sur les criquets des Hautes Terres.",
      "Le record du monde du 100 m est d'environ 9,58 s, soit une vitesse moyenne de 100 ÷ 9,58 ≈ 10,4 m/s : presque 38 km/h ! Un scooter en ville ne va souvent pas plus vite… mais lui ne s'essouffle pas au bout de dix secondes.",
    ],
    experience: [
      "Le chronométrage de la cour :",
      "Matériel : une ficelle métrée (ou un décamètre), deux repères (pierres), une montre ou un téléphone avec chronomètre, une craie.",
      "Protocole : 1. Mesure et trace à la craie une piste rectiligne de 20 m entre les deux repères.",
      "2. Chronomètre trois camarades : l'un marche, l'autre marche vite, le troisième court.",
      "3. Calcule pour chacun v = 20 ÷ t, puis convertis en km/h en multipliant par 3,6.",
      "Observation : on obtient par exemple 14 s (marche), 9 s (marche rapide), 4 s (course), soit environ 1,4 m/s (5,1 km/h), 2,2 m/s (8 km/h) et 5 m/s (18 km/h).",
      "Conclusion : la vitesse moyenne se calcule par v = d ÷ t et se convertit avec le facteur 3,6 : les ordres de grandeur trouvés correspondent bien aux repères de la leçon.",
    ],
  },
  substitutions: [
    { officiel: "Cinémomètre (radar pédagogique)", local: "Piste tracée à la craie + chronomètre de téléphone" },
    { officiel: "Table traçante", local: "Ficelle métrée et craie pour l'échelle des vecteurs" },
  ],
  exercicesNotes: [
    {
      points: 3,
      consigne: "Un camion parcourt 126 km en 1 h 45 min. Calcule sa vitesse moyenne en km/h. (1 h 45 min = 1,75 h)",
      items: [],
      corrige: [
        [{ text: "v = 126 ÷ 1,75 = " }, { text: "72 km/h", cle: true }, { text: ". (1 pt conversion du temps, 2 pts calcul)" }],
      ],
    },
    {
      points: 4,
      consigne: "Convertis : a) 54 km/h en m/s ; b) 25 m/s en km/h ; c) 108 km/h en m/s ; d) 2 m/s en km/h. (1 pt chacun)",
      items: [],
      corrige: [
        [{ text: "a) 54 ÷ 3,6 = " }, { text: "15 m/s", cle: true }, { text: " ; b) 25 × 3,6 = " }, { text: "90 km/h", cle: true }, { text: " ; c) 108 ÷ 3,6 = " }, { text: "30 m/s", cle: true }, { text: " ; d) 2 × 3,6 = " }, { text: "7,2 km/h", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Cite les quatre caractéristiques du vecteur vitesse et précise sa position par rapport à la trajectoire.",
      items: [],
      corrige: [
        [{ text: "Origine, direction, sens, norme", cle: true }, { text: " (2 pts) ; il est toujours " }, { text: "tangent à la trajectoire, dans le sens du mouvement", cle: true }, { text: " (1 pt)." }],
      ],
    },
  ],
};

const S37 = {
  numero: 37, total: 39, unite: "V", theme: "Mouvement",
  titre: "Les graphes du mouvement",
  objectif: "tracer et d'interpréter les graphes distance-temps et vitesse-temps d'un mobile",
  documentation: DOC,
  support: "Papier quadrillé, règle, crayon, tableaux de mesures, tableau de classe quadrillé",
  image: "images/img_seance37.png",
  imageLegende: "Figure 29 — Le graphe raconte le voyage : droite qui monte (uniforme), courbe qui s'incurve (accéléré ou retardé)",
  revision: {
    qa: [
      { q: "Rappelle la formule de la vitesse moyenne.", ra: "v = d ÷ t." },
      { q: "Convertis 36 km/h en m/s.", ra: "36 ÷ 3,6 = 10 m/s." },
      { q: "Qu'est-ce qu'un mouvement uniforme ?", ra: "Un mouvement à vitesse constante." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Voici le carnet de bord du taxi-brousse de Rakoto : 8 h, borne 0 ; 9 h, borne 60 ; 10 h, borne 120 ; 11 h, toujours borne 120 (pause hotely !) ; 12 h, borne 150. Des chiffres, des chiffres…",
      "Comment transformer ce tableau de chiffres en une image qui raconte tout le voyage d'un seul coup d'œil ?",
      "R.A. : En traçant un graphe distance-temps : chaque segment de droite raconte une étape : montée régulière = vitesse constante, palier horizontal = arrêt.",
    ],
    apprenants: "Écoutent et proposent des idées.",
    technique: "Question problème", support: "Tableau de mesures",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les graphes du mouvement ». Après cette séance, vous serez capables de tracer un graphe distance-temps, d'y lire la vitesse, et de reconnaître sur un graphe vitesse-temps un mouvement uniforme, accéléré ou retardé.",
    apprenants: "Écoutent et notent le titre.",
    technique: "Exposé", support: "Tableau",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Je place le temps en abscisse (horizontal) et la distance en ordonnée (vertical), puis je pointe les mesures du carnet de Rakoto et je relie. 2) De 8 h à 10 h : les points s'alignent sur une droite qui monte : distance proportionnelle au temps : mouvement UNIFORME à 60 km/h. 3) De 10 h à 11 h : palier horizontal : la distance ne change plus : ARRÊT. 4) Plus la droite est inclinée (pente forte), plus la vitesse est grande. 5) Autre graphe : la vitesse en ordonnée : horizontale = uniforme ; qui monte = accéléré ; qui descend = retardé.",
    apprenants: "Tracent le graphe en même temps sur papier quadrillé.",
    technique: "Construction guidée", support: "Papier quadrillé, règle",
  },
  analyse: {
    qa: [
      { q: "Sur un graphe distance-temps, que signifie une droite qui monte ?", ra: "Mouvement rectiligne uniforme : la vitesse est constante." },
      { q: "Et un palier horizontal ?", ra: "Le mobile est arrêté : la distance ne change plus." },
      { q: "Que traduit une pente plus forte ?", ra: "Une vitesse plus grande." },
      { q: "Sur un graphe vitesse-temps, à quoi reconnaît-on un mouvement accéléré ?", ra: "La courbe monte : la vitesse augmente." },
      { q: "Comment calculer la vitesse à partir du graphe distance-temps ?", ra: "v = distance parcourue ÷ durée sur le tronçon choisi (la pente de la droite)." },
    ],
    technique: "Questions-réponses guidées", support: "Graphes tracés",
  },
  synthese: {
    enseignant: "Guide les apprenants pour formuler : le graphe distance-temps d'un MRU est une droite dont la pente donne la vitesse ; un palier signale un arrêt ; sur le graphe vitesse-temps, horizontal = uniforme, montée = accéléré, descente = retardé.",
    apprenants: "Formulent la synthèse et la copient.",
    technique: "Synthèse collective", support: "Tableau, cahier",
  },
  application: [
    {
      consigne: "Un graphe distance-temps montre une droite passant par (0 s ; 0 m) et (5 s ; 40 m). Quelle est la nature du mouvement et la vitesse ?",
      items: [],
      corrige: [
        [{ text: "Droite : " }, { text: "mouvement rectiligne uniforme", cle: true }, { text: " ; v = 40 ÷ 5 = " }, { text: "8 m/s", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris le mouvement d'un bus dont le graphe vitesse-temps monte de 0 à 15 m/s, reste horizontal, puis descend jusqu'à 0.",
      items: [],
      corrige: [
        [{ text: "Trois phases : " }, { text: "accéléré (démarrage), uniforme (croisière), retardé (freinage)", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Papier quadrillé",
  evaluation: [
    {
      consigne: "Complète : sur un graphe distance-temps, un mouvement uniforme se traduit par une ……… ; un arrêt par un ……… .",
      items: [],
      corrige: [
        [{ text: "Une " }, { text: "droite qui monte", cle: true }, { text: " ; un " }, { text: "palier horizontal", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Sur un graphe vitesse-temps, la courbe descend. Quelle est la nature du mouvement ?",
      items: [],
      corrige: [
        [{ text: "Mouvement " }, { text: "retardé : la vitesse diminue", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier d'exercices",
  lecon: {
    motsCles: ["graphe distance-temps", "graphe vitesse-temps", "pente", "palier", "uniforme", "accéléré", "retardé"],
    sections: [
      {
        titre: "1. Du tableau de mesures au graphe",
        paras: [
          "Un tableau de mesures dit tout… mais ne montre rien. Le GRAPHE transforme les chiffres en image : on place le temps t en abscisse (axe horizontal) et la distance d en ordonnée (axe vertical), on pointe chaque couple de valeurs, puis on relie les points.",
          "Méthode pas-à-pas : 1. choisis des échelles simples (1 carreau = 1 s ; 1 carreau = 10 m) ; 2. gradue et nomme les deux axes avec leurs unités ; 3. place les points au crayon ; 4. relie-les à la règle ; 5. donne un titre au graphe.",
        ],
      },
      {
        titre: "2. Lire le graphe distance-temps",
        paras: [
          "Le graphe distance-temps raconte le voyage : chaque forme a une signification précise.",
        ],
        puces: [
          "droite qui monte : distances proportionnelles aux durées : mouvement RECTILIGNE UNIFORME ;",
          "pente de la droite : c'est la vitesse ! v = distance gagnée ÷ durée écoulée : plus la droite est raide, plus le mobile est rapide ;",
          "palier horizontal : la distance n'évolue plus : le mobile est À L'ARRÊT ;",
          "courbe qui s'incurve vers le haut : les distances par seconde augmentent : mouvement ACCÉLÉRÉ ; courbe qui s'aplatit : mouvement RETARDÉ.",
        ],
      },
      {
        titre: "3. Lire le graphe vitesse-temps",
        paras: [
          "On peut aussi porter la VITESSE en ordonnée : c'est le graphe vitesse-temps, celui qu'affichent les enregistreurs des camions modernes.",
          "Piège à éviter : ne confonds pas les deux graphes ! Sur le graphe distance-temps, un palier signifie ARRÊT ; sur le graphe vitesse-temps, un palier signifie vitesse constante, donc mouvement UNIFORME : le mobile avance toujours !",
        ],
        puces: [
          "droite horizontale : vitesse constante : mouvement uniforme ;",
          "droite qui monte : la vitesse augmente : mouvement accéléré (démarrage) ;",
          "droite qui descend : la vitesse diminue : mouvement retardé (freinage) ;",
          "un trajet réel se lit comme trois chapitres : démarrage accéléré, croisière uniforme, freinage retardé.",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Le carnet du taxi-brousse : 0 h : 0 km ; 1 h : 60 km ; 2 h : 120 km ; 3 h : 120 km ; 4 h : 150 km. Trace mentalement le graphe et décris chaque phase avec sa vitesse. Solution : de 0 à 2 h, droite qui monte : mouvement uniforme à v = 120 ÷ 2 = 60 km/h ; de 2 h à 3 h, palier : arrêt (pause) ; de 3 h à 4 h, droite moins raide : mouvement uniforme plus lent, v = 30 ÷ 1 = 30 km/h (piste dégradée).",
          "Exemple 2 — Sur un graphe distance-temps, le mobile A passe par (0 ; 0) et (4 s ; 20 m) ; le mobile B par (0 ; 0) et (4 s ; 32 m). Lequel est le plus rapide, et de combien ? Solution : vA = 20 ÷ 4 = 5 m/s ; vB = 32 ÷ 4 = 8 m/s : B est le plus rapide : sa droite est plus raide ; l'écart est de 3 m/s, soit 3 × 3,6 = 10,8 km/h.",
        ],
      },
    ],
    saisTu: [
      "Les avions de ligne et les camions modernes embarquent des « boîtes noires » qui tracent en continu le graphe vitesse-temps du véhicule : après un incident, les enquêteurs relisent ces courbes comme un livre pour reconstituer chaque seconde du trajet.",
      "La ligne ferroviaire Antananarivo-Toamasina (TCE) serpente sur 370 km à travers les falaises de l'Est : son graphe distance-temps est une succession de pentes douces et de paliers dans les gares : les cheminots l'appellent la « marche du train », un document officiel calculé pour chaque voyage !",
    ],
    experience: [
      "Le graphe de la bille d'eau :",
      "Matériel : une bouteille percée d'un petit trou (goutte-à-goutte régulier), une longue planche légèrement inclinée, une bille ou un petit ballon, une craie, un mètre.",
      "Protocole : 1. Lance doucement la bille sur le sol plat et régulier : un camarade marque à la craie sa position à chaque « goutte » du goutte-à-goutte (environ chaque seconde).",
      "2. Mesure les distances entre marques successives et dresse le tableau temps-distance totale.",
      "3. Trace le graphe distance-temps sur papier quadrillé ; recommence sur la planche inclinée.",
      "Observation : sur le sol plat, les marques sont presque régulières : le graphe est presque une droite ; sur la planche inclinée, les écarts grandissent : le graphe s'incurve vers le haut.",
      "Conclusion : le graphe distance-temps révèle la nature du mouvement d'un coup d'œil : droite = uniforme, courbe qui monte de plus en plus vite = accéléré.",
    ],
  },
  substitutions: [
    { officiel: "Enregistreur de mouvement (capteur)", local: "Goutte-à-goutte d'une bouteille percée comme métronome" },
    { officiel: "Papier millimétré", local: "Papier quadrillé de cahier (1 carreau = 1 unité)" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Trace le graphe distance-temps du piéton : 0 s : 0 m ; 10 s : 15 m ; 20 s : 30 m ; 30 s : 30 m ; 40 s : 42 m. (2 pts pour le tracé, 2 pts pour les échelles et les axes nommés)",
      items: [],
      corrige: [
        [{ text: "Tracé attendu : " }, { text: "droite montante de 0 à 20 s, palier de 20 à 30 s, droite moins raide ensuite", cle: true }, { text: " ; axes nommés t (s) et d (m) avec échelles régulières." }],
      ],
    },
    {
      points: 3,
      consigne: "À partir du graphe de l'exercice 1 : a) vitesse sur les 20 premières secondes ; b) que fait le piéton entre 20 et 30 s ? c) vitesse sur la dernière phase.",
      items: [],
      corrige: [
        [{ text: "a) v = 30 ÷ 20 = " }, { text: "1,5 m/s", cle: true }, { text: " ; b) " }, { text: "il est arrêté", cle: true }, { text: " ; c) v = 12 ÷ 10 = " }, { text: "1,2 m/s", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Un graphe vitesse-temps montre : montée de 0 à 12 m/s en 6 s, palier à 12 m/s pendant 20 s, descente jusqu'à 0 en 4 s. Nomme les trois phases du mouvement.",
      items: [],
      corrige: [
        [{ text: "1) " }, { text: "mouvement accéléré", cle: true }, { text: " (démarrage) ; 2) " }, { text: "mouvement uniforme", cle: true }, { text: " (vitesse constante) ; 3) " }, { text: "mouvement retardé", cle: true }, { text: " (freinage). (1 pt par phase)" }],
      ],
    },
  ],
};

module.exports = { seances: [S35, S36, S37] };
