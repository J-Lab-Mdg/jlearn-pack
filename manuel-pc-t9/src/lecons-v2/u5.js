// lecons-v2/u5.js — Unité 5 MOUVEMENT, leçons reformulées « nouvelle maquette lisible »

module.exports = {

  // ================= SÉANCE 35 =================
  35: {
    objectifs: [
      "Reconnaître les trois types de trajectoires.",
      "Choisir un référentiel pour décrire un mouvement.",
      "Comprendre la relativité du mouvement.",
    ],
    motsCles: ["trajectoire", "rectiligne", "circulaire", "curviligne", "référentiel", "relativité du mouvement"],
    sections: [
      {
        titre: "1. La trajectoire : la trace du mouvement",
        blocs: [
          { type: "para", text: "Quand un objet se déplace, il occupe des positions successives. La ligne formée par toutes ces positions s'appelle la trajectoire : c'est la « trace » que laisserait l'objet s'il écrivait en se déplaçant, comme la trace d'un vélo sur la piste sablonneuse." },
          { type: "puces", items: [
            [{ text: "rectiligne : ", bold: true }, { text: "une ligne droite (fruit qui tombe, gouttes de pluie sans vent, ascenseur) ;" }],
            [{ text: "circulaire : ", bold: true }, { text: "un cercle (valve d'une roue, aiguille d'une montre, nacelle d'un manège) ;" }],
            [{ text: "curviligne : ", bold: true }, { text: "une courbe quelconque (ballon lancé, sauterelle qui bondit, papillon en vol)." }],
          ]},
        ],
      },
      {
        titre: "2. Le référentiel : par rapport à quoi ?",
        blocs: [
          { type: "para", text: "Pour décrire un mouvement, il faut toujours préciser PAR RAPPORT À QUOI on l'observe. L'objet choisi comme référence s'appelle le référentiel. Le plus souvent, on choisit la Terre (le sol) : c'est le référentiel terrestre." },
          { type: "attention", text: "Dire « le mobile est en mouvement » sans préciser le référentiel n'a pas de sens en physique ! Il faut toujours dire : « en mouvement par rapport à… »." },
        ],
      },
      {
        titre: "3. La relativité du mouvement",
        blocs: [
          { type: "para", text: "Un même objet peut être immobile dans un référentiel et en mouvement dans un autre : c'est la relativité du mouvement. Le passager endormi du taxi-brousse est immobile par rapport à son siège… mais file à 80 km/h par rapport à la route !" },
          { type: "para", text: "Même la FORME de la trajectoire dépend du référentiel ! La valve d'une roue de vélo décrit un cercle par rapport au cadre du vélo… mais une curieuse courbe en arceaux (la cycloïde) par rapport à la route." },
          { type: "puces", items: [
            "toi, assis en classe : immobile par rapport aux murs… mais emporté autour du Soleil à environ 30 km par seconde ;",
            "deux taxis-brousse roulant côte à côte à la même vitesse : chacun paraît immobile pour l'autre ;",
            "conclusion : il n'existe pas de repos absolu — tout mouvement se définit par rapport à un référentiel.",
          ]},
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une pirogue descend le fleuve Betsiboka. Décris le mouvement du piroguier assis : a) par rapport à la pirogue ; b) par rapport à la rive.",
            calcul: [
              "a) par rapport à la pirogue : il ne change pas de place → IMMOBILE",
              "b) par rapport à la rive : il avance avec la pirogue → EN MOUVEMENT",
            ],
            reponse: "Le mouvement est relatif au référentiel choisi !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Donne le type de trajectoire, dans le référentiel indiqué : a) un colis qui tombe d'un avion, vu par le pilote ; b) le bout de la pale d'un ventilateur ; d) une pierre lancée en cloche vers un manguier.",
            calcul: [
              "a) rectiligne (droite verticale pour le pilote qui accompagne l'avion)",
              "b) circulaire (la pale tourne autour de l'axe)",
              "d) curviligne (une courbe en cloche : la parabole)",
            ],
            reponse: "Rectiligne, circulaire, curviligne : les trois types !",
          },
          { type: "saisTu", text: "Assis dans ta salle de classe, tu crois être immobile… mais la Terre t'emporte à environ 30 km chaque seconde autour du Soleil, soit plus de 100 000 km/h ! Tu ne le sens pas, car tout bouge avec toi : c'est exactement le principe de la relativité du mouvement." },
          { type: "saisTu", text: "Les navigateurs malgaches d'autrefois utilisaient déjà la relativité sans le savoir : pour traverser le canal du Mozambique en boutre, ils visaient les étoiles, référentiel bien plus fiable que les vagues qui, elles, bougent avec le bateau !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience en classe : la valve mystérieuse",
      intro: "Un même point, deux trajectoires différentes : à toi de les voir !",
      materiel: [
        "une roue de vélo (vélo retourné) ;",
        "un morceau de chiffon clair attaché à la valve ;",
        "un mur comme fond sombre.",
      ],
      etapes: [
        "Retourne le vélo et attache le chiffon à la valve de la roue avant.",
        "Fais tourner lentement la roue et observe le chiffon en te plaçant face à la roue : décris la ligne qu'il décrit.",
        "Demande à un camarade de faire rouler le vélo le long du mur, pendant que tu observes le chiffon de profil, de loin.",
      ],
      observation: "Face à la roue qui tourne sur place, le chiffon décrit un cercle. Quand le vélo roule, vu du sol, il décrit des arceaux successifs (il monte, redescend, touche presque le sol, remonte…).",
      conclusion: "La trajectoire d'un même point dépend du référentiel : cercle par rapport au cadre du vélo, arceaux par rapport au sol. Le mouvement est relatif !",
    },
  },

  // ================= SÉANCE 36 =================
  36: {
    objectifs: [
      "Calculer une vitesse moyenne : v = d ÷ t.",
      "Convertir km/h et m/s avec le facteur 3,6.",
      "Représenter le vecteur vitesse.",
    ],
    motsCles: ["vitesse moyenne", "vecteur vitesse", "tangente", "km/h", "m/s", "norme"],
    sections: [
      {
        titre: "1. La vitesse moyenne",
        blocs: [
          { type: "para", text: "La vitesse moyenne mesure la distance parcourue par unité de temps :" },
          { type: "formule", formule: "v = d ÷ t", legendes: [
            [{ text: "v", bold: true, color: "2E7D32" }, { text: " = la vitesse, en m/s (ou km/h)" }],
            [{ text: "d", bold: true, color: "2E7D32" }, { text: " = la distance parcourue, en mètres (ou km)" }],
            [{ text: "t", bold: true, color: "2E7D32" }, { text: " = la durée, en secondes (ou heures)" }],
          ]},
          { type: "para", text: "On en tire aussi d = v × t et t = d ÷ v : encore un triangle magique, comme pour U = R × I en électricité !" },
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un taxi-brousse relie Antananarivo à Antsirabe, soit 170 km, en 3 h 24 min. Calcule sa vitesse moyenne en km/h, puis en m/s.",
            image: { src: "img_v2_s36_vitesse.png", w: 520, h: 223, legende: "Figure A — La vitesse moyenne : distance divisée par durée." },
            calcul: [
              "t = 3 h 24 min = 3,4 h",
              "v = d ÷ t = 170 ÷ 3,4 = 50 km/h",
              "en m/s : 50 ÷ 3,6",
            ],
            reponse: "v = 50 km/h ≈ 13,9 m/s",
            phrase: "La vitesse moyenne tient compte des arrêts ; le compteur, lui, affiche la vitesse instantanée.",
          },
        ],
      },
      {
        titre: "2. Convertir km/h et m/s : le nombre 3,6",
        blocs: [
          { type: "para", text: "1 km/h, c'est 1 000 m parcourus en 3 600 s. D'où la règle d'or : pour passer des km/h aux m/s, on DIVISE par 3,6 ; pour passer des m/s aux km/h, on MULTIPLIE par 3,6." },
          { type: "puces", items: [
            "72 km/h = 72 ÷ 3,6 = 20 m/s (un taxi-brousse rapide) ;",
            "10 m/s = 10 × 3,6 = 36 km/h (un bon sprinteur) ;",
            "repères : marche ≈ 5 km/h ; cycliste ≈ 18 km/h ; son ≈ 340 m/s ; lumière ≈ 300 000 km/s.",
          ]},
          { type: "attention", text: "Ne mélange jamais les unités dans un calcul ! Si la distance est en km et le temps en secondes, convertis d'abord : sinon le résultat n'a aucun sens." },
        ],
      },
      {
        titre: "3. Le vecteur vitesse",
        blocs: [
          { type: "para", text: "Un nombre ne suffit pas : dire « la pirogue va à 2 m/s » ne dit ni où elle va, ni dans quel sens ! Comme la force, la vitesse se représente par un vecteur : une flèche." },
          { type: "puces", items: [
            [{ text: "origine : ", bold: true }, { text: "la position du mobile à l'instant choisi ;" }],
            [{ text: "direction : ", bold: true }, { text: "la tangente à la trajectoire en ce point ;" }],
            [{ text: "sens : ", bold: true }, { text: "celui du déplacement ;" }],
            [{ text: "norme : ", bold: true }, { text: "la valeur de la vitesse, traduite par la longueur de la flèche à l'échelle choisie." }],
          ]},
          { type: "para", text: "Sur une trajectoire courbe, le vecteur vitesse change de direction à chaque instant, tout en restant tangent à la courbe : comme la pierre qui s'échappe de la fronde, droit dans la direction qu'elle avait au moment du lâcher !" },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Une bille tourne au bout d'une ficelle à la vitesse de 4 m/s. Représente son vecteur vitesse au point le plus haut du cercle (échelle : 1 cm ↔ 2 m/s).",
            calcul: [
              "au point le plus haut, la tangente au cercle est HORIZONTALE",
              "longueur de la flèche : 4 ÷ 2 = 2 cm",
            ],
            reponse: "Flèche horizontale de 2 cm, dans le sens de rotation.",
            phrase: "Si la ficelle casse à cet instant, la bille part horizontalement !",
          },
          { type: "saisTu", text: "Le guépard atteint 30 m/s (108 km/h) en pointe… mais le faucon pèlerin plonge à plus de 300 km/h ! À Madagascar, le champion est le faucon de Newton, capable de piqués fulgurants sur les criquets des Hautes Terres." },
          { type: "saisTu", text: "Le record du monde du 100 m est d'environ 9,58 s, soit une vitesse moyenne de 100 ÷ 9,58 ≈ 10,4 m/s : presque 38 km/h ! Un scooter en ville ne va souvent pas plus vite… mais lui ne s'essouffle pas au bout de dix secondes." },
        ],
      },
    ],
    experience: {
      titre: "Expérience en classe : le chronométrage de la cour",
      intro: "Mesure les vitesses de tes camarades comme un vrai chronométreur !",
      materiel: [
        "une ficelle métrée (ou un décamètre) ;",
        "deux repères (pierres) et une craie ;",
        "une montre ou un téléphone avec chronomètre.",
      ],
      etapes: [
        "Mesure et trace à la craie une piste rectiligne de 20 m entre les deux repères.",
        "Chronomètre trois camarades : l'un marche, l'autre marche vite, le troisième court.",
        "Calcule pour chacun v = 20 ÷ t, puis convertis en km/h en multipliant par 3,6.",
      ],
      observation: "On obtient par exemple 14 s (marche), 9 s (marche rapide), 4 s (course) : environ 1,4 m/s (5,1 km/h), 2,2 m/s (8 km/h) et 5 m/s (18 km/h).",
      conclusion: "La vitesse moyenne se calcule par v = d ÷ t et se convertit avec le facteur 3,6. Les ordres de grandeur correspondent bien aux repères de la leçon !",
    },
  },

  // ================= SÉANCE 37 =================
  37: {
    objectifs: [
      "Tracer un graphe distance-temps à partir d'un tableau.",
      "Lire un graphe : uniforme, arrêt, accéléré, retardé.",
      "Distinguer graphe distance-temps et graphe vitesse-temps.",
    ],
    motsCles: ["graphe", "abscisse", "ordonnée", "uniforme", "accéléré", "retardé", "palier", "pente"],
    sections: [
      {
        titre: "1. Du tableau de mesures au graphe",
        blocs: [
          { type: "para", text: "Un tableau de mesures dit tout… mais ne montre rien ! Le graphe transforme les chiffres en image : le temps t en abscisse (axe horizontal), la distance d en ordonnée (axe vertical)." },
          { type: "puces", items: [
            "1. choisis des échelles simples (1 carreau = 1 s ; 1 carreau = 10 m) ;",
            "2. gradue et nomme les deux axes avec leurs unités ;",
            "3. place les points au crayon ;",
            "4. relie-les à la règle ;",
            "5. donne un titre au graphe.",
          ]},
        ],
      },
      {
        titre: "2. Lire le graphe distance-temps",
        blocs: [
          { type: "image", src: "img_v2_s37_graphe.png", w: 500, h: 318, legende: "Figure A — Droite = mouvement uniforme ; palier = arrêt." },
          { type: "puces", items: [
            [{ text: "droite qui monte : ", bold: true }, { text: "distances proportionnelles aux durées → mouvement rectiligne UNIFORME ;" }],
            [{ text: "la pente de la droite : ", bold: true }, { text: "c'est la vitesse ! Plus la droite est raide, plus le mobile est rapide ;" }],
            [{ text: "palier horizontal : ", bold: true }, { text: "la distance n'évolue plus → le mobile est À L'ARRÊT ;" }],
            [{ text: "courbe qui s'incurve vers le haut : ", bold: true }, { text: "mouvement ACCÉLÉRÉ ; courbe qui s'aplatit : mouvement RETARDÉ." }],
          ]},
        ],
      },
      {
        titre: "3. Lire le graphe vitesse-temps",
        blocs: [
          { type: "para", text: "On peut aussi porter la VITESSE en ordonnée : c'est le graphe vitesse-temps, celui des enregistreurs de camions modernes." },
          { type: "puces", items: [
            "droite horizontale : vitesse constante → mouvement uniforme ;",
            "droite qui monte : la vitesse augmente → mouvement accéléré (démarrage) ;",
            "droite qui descend : la vitesse diminue → mouvement retardé (freinage).",
          ]},
          { type: "attention", text: "Ne confonds pas les deux graphes ! Sur le graphe distance-temps, un palier = ARRÊT. Sur le graphe vitesse-temps, un palier = vitesse constante : le mobile avance toujours !" },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Le carnet du taxi-brousse : 0 h : 0 km ; 1 h : 60 km ; 2 h : 120 km ; 3 h : 120 km ; 4 h : 150 km. Décris chaque phase, avec sa vitesse.",
            calcul: [
              "de 0 à 2 h : droite qui monte → uniforme, v = 120 ÷ 2 = 60 km/h",
              "de 2 h à 3 h : palier → arrêt (pause)",
              "de 3 h à 4 h : droite moins raide → uniforme plus lent, v = 30 ÷ 1",
            ],
            reponse: "60 km/h, puis arrêt, puis 30 km/h.",
            phrase: "La droite moins raide ? Une piste dégradée !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Sur un graphe distance-temps, le mobile A passe par (0 ; 0) et (4 s ; 20 m) ; le mobile B par (0 ; 0) et (4 s ; 32 m). Lequel est le plus rapide, et de combien ?",
            calcul: [
              "vA = 20 ÷ 4 = 5 m/s",
              "vB = 32 ÷ 4 = 8 m/s",
              "écart : 3 m/s = 3 × 3,6 km/h",
            ],
            reponse: "B est le plus rapide, de 10,8 km/h.",
            phrase: "Sa droite est plus raide : la pente, c'est la vitesse !",
          },
          { type: "saisTu", text: "Les avions de ligne et les camions modernes embarquent des « boîtes noires » qui tracent en continu le graphe vitesse-temps du véhicule : après un incident, les enquêteurs relisent ces courbes comme un livre pour reconstituer chaque seconde du trajet." },
          { type: "saisTu", text: "La ligne ferroviaire Antananarivo-Toamasina (TCE) serpente sur 370 km à travers les falaises de l'Est : son graphe distance-temps est une succession de pentes douces et de paliers dans les gares. Les cheminots l'appellent la « marche du train », un document officiel calculé pour chaque voyage !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience en classe : le graphe de la bille d'eau",
      intro: "Construis un graphe distance-temps avec un goutte-à-goutte comme chronomètre !",
      materiel: [
        "une bouteille percée d'un petit trou (goutte-à-goutte régulier) ;",
        "une longue planche légèrement inclinée ;",
        "une bille ou un petit ballon ;",
        "une craie et un mètre.",
      ],
      etapes: [
        "Lance doucement la bille sur le sol plat : un camarade marque à la craie sa position à chaque « goutte » (environ chaque seconde).",
        "Mesure les distances entre marques successives et dresse le tableau temps-distance.",
        "Trace le graphe distance-temps sur papier quadrillé.",
        "Recommence sur la planche inclinée.",
      ],
      observation: "Sur le sol plat, les marques sont presque régulières : le graphe est presque une droite. Sur la planche inclinée, les écarts grandissent : le graphe s'incurve vers le haut.",
      conclusion: "Le graphe distance-temps révèle la nature du mouvement d'un coup d'œil : droite = uniforme ; courbe qui monte de plus en plus vite = accéléré.",
    },
  },
};
