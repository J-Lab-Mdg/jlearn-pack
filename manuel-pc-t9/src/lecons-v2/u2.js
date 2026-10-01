// lecons-v2/u2.js — Unité 2 ÉLECTRICITÉ, leçons reformulées « nouvelle maquette lisible »

module.exports = {

  // ================= SÉANCE 12 =================
  12: {
    objectifs: [
      "Reconnaître un conducteur ohmique (résistor).",
      "Mesurer des couples (I, U) avec le bon branchement.",
      "Tracer la caractéristique U = f(I) : une droite qui passe par l'origine.",
    ],
    motsCles: ["conducteur ohmique", "résistor", "caractéristique", "point de fonctionnement", "ligne moyenne", "proportionnalité", "voltmètre", "ampèremètre"],
    sections: [
      {
        titre: "1. C'est quoi, un conducteur ohmique ?",
        blocs: [
          { type: "para", text: "Le conducteur ohmique, qu'on appelle aussi résistor, est un petit cylindre peint d'anneaux de couleurs. Sur les schémas, son symbole est un rectangle." },
          { type: "para", text: "Son rôle : limiter et régler le courant dans un circuit. Il y en a des dizaines dans chaque radio, chargeur ou téléphone : c'est le composant le plus répandu de l'électronique !" },
        ],
      },
      {
        titre: "2. L'expérience : mesurer des couples (I, U)",
        blocs: [
          { type: "para", text: "On alimente le résistor avec une tension que l'on fait varier (des piles en série). Pour chaque tension U, on mesure l'intensité I. Chaque couple (I, U) est un point de fonctionnement." },
          { type: "attention", text: "Le voltmètre se branche EN DÉRIVATION aux bornes du résistor. L'ampèremètre se place EN SÉRIE dans le circuit. Les inverser fausse tout… et peut abîmer l'ampèremètre !" },
        ],
      },
      {
        titre: "3. La caractéristique U = f(I)",
        blocs: [
          { type: "para", text: "On place au moins cinq points de fonctionnement sur un graphique : U en hauteur, I en largeur. À cause des petites erreurs de mesure, les points ne sont pas parfaitement alignés." },
          { type: "para", text: "On ne relie JAMAIS les points un à un ! On trace une ligne moyenne : une droite qui passe par l'origine, avec les points bien répartis de chaque côté." },
          { type: "image", src: "img_v2_s12_caracteristique.png", w: 480, h: 312, legende: "Figure A — Les points de mesure (croix roses) et la droite moyenne qui passe par l'origine." },
          { type: "para", text: "Une droite qui passe par l'origine, c'est la signature d'une proportionnalité entre U et I. C'est elle qui conduira à la loi d'Ohm, à la prochaine séance !" },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Mesures sur un résistor : (0,1 A ; 2,2 V), (0,2 A ; 3,9 V), (0,3 A ; 6,1 V), (0,4 A ; 8,0 V). Ces points sont-ils exploitables ? Que faut-il tracer ?",
            calcul: [
              "Quand I double, U double (à peu près).",
              "Les points s'alignent presque sur une droite passant par l'origine.",
            ],
            reponse: "On trace la ligne moyenne, à la règle.",
            phrase: "Les petits écarts sont des erreurs de mesure normales : on ne force pas le trait sur chaque point.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un camarade relie les points par une ligne brisée qui ne passe pas par l'origine. Quelles sont ses deux erreurs ?",
            calcul: [
              "Erreur 1 : on ne relie jamais les points un à un — on trace UNE droite moyenne.",
              "Erreur 2 : pour un conducteur ohmique, la droite passe par l'origine.",
            ],
            reponse: "Sans courant (I = 0), pas de tension : U = 0 !",
          },
          { type: "saisTu", text: "Les anneaux colorés du résistor forment un code : chaque couleur est un chiffre (noir 0, marron 1, rouge 2… blanc 9). Trois anneaux donnent la valeur en ohms, le quatrième la précision. Les électroniciens du monde entier lisent ce code arc-en-ciel d'un seul coup d'œil !" },
          { type: "saisTu", text: "Tracer une ligne moyenne au lieu de relier les points, c'est le geste fondamental de la science expérimentale : aucune mesure n'est parfaite, mais l'ensemble révèle la loi. Les scientifiques d'aujourd'hui font pareil avec leurs ordinateurs : ils appellent cela une régression linéaire !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la mine de crayon résistante",
      intro: "La mine de graphite d'un crayon est un conducteur ohmique naturel !",
      materiel: [
        "un crayon à papier, taillé aux deux bouts (avec un adulte) ;",
        "une pile plate 4,5 V ;",
        "une petite ampoule ;",
        "des fils.",
      ],
      etapes: [
        "Monte la mine en série avec la pile et l'ampoule.",
        "Observe l'éclat de la lampe avec toute la longueur de mine.",
        "Raccourcis la longueur de mine dans le circuit (pince les fils plus près l'un de l'autre).",
        "Compare l'éclat de la lampe dans chaque cas.",
      ],
      observation: "Avec toute la mine, la lampe brille faiblement. Plus la longueur de mine diminue, plus la lampe brille.",
      conclusion: "La mine s'oppose au passage du courant, et d'autant plus qu'elle est longue : tu viens de découvrir la résistance !",
    },
  },

  // ================= SÉANCE 13 =================
  13: {
    objectifs: [
      "Énoncer la loi d'Ohm : U = R × I.",
      "Calculer U, R ou I avec le triangle magique.",
      "Comprendre ce que mesure la résistance.",
    ],
    motsCles: ["loi d'Ohm", "résistance", "ohm", "proportionnelle", "ohmmètre", "volt", "ampère"],
    sections: [
      {
        titre: "1. La loi d'Ohm",
        blocs: [
          { type: "para", text: "La tension U aux bornes d'un conducteur ohmique est proportionnelle à l'intensité I du courant qui le traverse. C'est la loi d'Ohm :" },
          { type: "formule", formule: "U = R × I", legendes: [
            [{ text: "U", bold: true, color: "2E7D32" }, { text: " = la tension, en volts (V)" }],
            [{ text: "R", bold: true, color: "2E7D32" }, { text: " = la résistance, en ohms (Ω)" }],
            [{ text: "I", bold: true, color: "2E7D32" }, { text: " = l'intensité, en ampères (A)" }],
          ]},
          { type: "image", src: "img_v2_s13_circuit.png", w: 520, h: 300, legende: "Figure A — Le circuit de mesure : ampèremètre en série, voltmètre en dérivation… et le triangle magique." },
        ],
      },
      {
        titre: "2. La résistance : l'opposition au courant",
        blocs: [
          { type: "para", text: "Le nombre R s'appelle la résistance du conducteur. Elle mesure son opposition au passage du courant. Son unité : l'ohm (Ω). On peut la mesurer directement avec un ohmmètre." },
          { type: "para", text: "Pour comprendre : à tension égale, une grande résistance laisse passer un petit courant ; une petite résistance laisse passer un grand courant. Le résistor est comme un rétrécissement sur un canal : plus il est étroit, moins l'eau passe !" },
          { type: "attention", text: "Ne confonds pas le résistor (l'objet que tu tiens dans la main) et sa résistance (la grandeur physique R, en ohms)." },
        ],
      },
      {
        titre: "3. Les trois formules du triangle",
        blocs: [
          { type: "puces", items: [
            [{ text: "U = R × I : ", bold: true }, { text: "pour calculer la tension ;" }],
            [{ text: "R = U ÷ I : ", bold: true }, { text: "pour calculer la résistance ;" }],
            [{ text: "I = U ÷ R : ", bold: true }, { text: "pour calculer l'intensité." }],
          ]},
          { type: "para", text: "Le triangle magique rend les trois formules automatiques : cache la grandeur cherchée, la position des deux autres te donne l'opération !" },
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un résistor de 22 Ω est traversé par un courant de 0,2 A. Calcule la tension à ses bornes.",
            calcul: ["U = R × I", "U = 22 Ω × 0,2 A"],
            reponse: "U = 4,4 V",
            phrase: "Vérifie les unités : des ohms × des ampères = des volts. C'est bon !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Sur la caractéristique d'un résistor, on lit le point (0,3 A ; 15 V). Calcule R, puis l'intensité sous 9 V.",
            calcul: [
              "R = U ÷ I = 15 ÷ 0,3 = 50 Ω",
              "Sous 9 V : I = U ÷ R",
              "I = 9 ÷ 50",
            ],
            reponse: "I = 0,18 A",
            phrase: "Piège des petits courants : avec R = 500 Ω et U = 15 V, on trouve I = 0,03 A. Pense à le dire en milliampères : 30 mA !",
          },
          { type: "saisTu", text: "Georg Simon Ohm était un modeste professeur bavarois : quand il publia sa loi en 1827, les savants la jugèrent « indigne de la science » et il perdit son poste ! Il fallut vingt ans pour que le monde reconnaisse son génie. Aujourd'hui, chaque résistor de chaque téléphone porte silencieusement son nom." },
          { type: "saisTu", text: "La loi d'Ohm explique pourquoi les lignes de la JIRAMA transportent l'électricité sous haute tension : à puissance égale, une tension élevée permet un courant faible, donc moins de pertes par échauffement dans les longs kilomètres de câbles entre Andekaleka et Antananarivo !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'eau salée résistante",
      intro: "L'eau salée conduit le courant… plus ou moins bien : à toi de le découvrir !",
      materiel: [
        "un verre d'eau très salée et du sel ;",
        "deux clous (les électrodes) ;",
        "une pile plate 4,5 V et une petite ampoule ;",
        "des fils.",
      ],
      etapes: [
        "Plonge les deux clous dans l'eau salée, reliés en série avec la pile et l'ampoule.",
        "Écarte les clous l'un de l'autre et observe la lampe.",
        "Rapproche-les au maximum, sans qu'ils se touchent.",
        "Ajoute encore du sel et observe une dernière fois.",
      ],
      observation: "La lampe faiblit quand les clous s'écartent (le trajet dans l'eau s'allonge : R augmente). Elle brille davantage quand ils se rapprochent ou quand on ajoute du sel (R diminue).",
      conclusion: "La résistance dépend du conducteur : longueur du trajet et nature du milieu. La loi d'Ohm met tout cela en chiffres !",
    },
  },

  // ================= SÉANCE 14 =================
  14: {
    objectifs: [
      "Calculer la résistance équivalente en série : Re = R1 + R2.",
      "Calculer la résistance équivalente en dérivation : 1/Re = 1/R1 + 1/R2.",
      "Contrôler la cohérence de ses résultats.",
    ],
    motsCles: ["série", "dérivation", "résistance équivalente", "loi des nœuds", "ohmmètre"],
    sections: [
      {
        titre: "1. L'association en série : les obstacles s'additionnent",
        blocs: [
          { type: "para", text: "En série, le même courant traverse les résistors l'un après l'autre, et les tensions s'ajoutent. Résultat :" },
          { type: "formule", formule: "Re = R1 + R2", legendes: [
            [{ text: "Re est toujours PLUS GRANDE que chacune des résistances." }],
          ]},
          { type: "para", text: "Pour comprendre : deux rétrécissements l'un après l'autre sur le même canal gênent plus le passage qu'un seul. Les obstacles en file s'additionnent !" },
        ],
      },
      {
        titre: "2. L'association en dérivation : un chemin de plus",
        blocs: [
          { type: "para", text: "En dérivation, la même tension s'applique aux deux résistors, et les intensités s'ajoutent (loi des nœuds). Résultat :" },
          { type: "formule", formule: "1/Re = 1/R1 + 1/R2", legendes: [
            [{ text: "Re est toujours PLUS PETITE que la plus petite des résistances." }],
            [{ text: "Cas utile : deux résistances identiques R en dérivation → Re = R ÷ 2." }],
          ]},
          { type: "image", src: "img_v2_s14_associations.png", w: 560, h: 269, legende: "Figure A — En série : Re = R1 + R2. En dérivation : 1/Re = 1/R1 + 1/R2." },
          { type: "para", text: "Pour comprendre : deux canaux côte à côte laissent passer plus d'eau qu'un seul. Offrir un chemin de plus au courant diminue toujours la résistance totale !" },
        ],
      },
      {
        titre: "3. Vérifier et contrôler",
        blocs: [
          { type: "para", text: "La valeur calculée se vérifie avec un ohmmètre branché aux bornes de l'ensemble." },
          { type: "attention", text: "Contrôle de cohérence systématique : en série, Re dépasse la plus grande des résistances ; en dérivation, Re est inférieure à la plus petite. Un résultat qui viole ces règles est forcément faux !" },
          { type: "exemple", titre: "Exemple 1",
            enonce: "Calcule la résistance équivalente de 20 Ω et 30 Ω : a) en série ; b) en dérivation.",
            calcul: [
              "a) Re = 20 + 30 = 50 Ω",
              "b) 1/Re = 1/20 + 1/30 = 3/60 + 2/60 = 5/60",
              "b) Re = 60 ÷ 5",
            ],
            reponse: "a) Re = 50 Ω ; b) Re = 12 Ω",
            phrase: "Cohérence : 50 > 30 et 12 < 20. Tout va bien !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Deux résistors identiques en dérivation donnent une résistance équivalente de 15 Ω. Quelle est la valeur de chaque résistor ?",
            calcul: [
              "Résistances identiques en dérivation : Re = R ÷ 2",
              "Donc R = 2 × Re = 2 × 15",
            ],
            reponse: "R = 30 Ω",
            phrase: "Vérification : 1/30 + 1/30 = 2/30 = 1/15. C'est bien 15 Ω !",
          },
          { type: "saisTu", text: "Dans ta maison, tous les appareils sont branchés en dérivation sur les 220 V : chaque appareil ajouté offre un chemin de plus au courant, la résistance totale baisse… et l'intensité totale grimpe ! Voilà pourquoi trop d'appareils sur une même prise font chauffer les fils : le disjoncteur veille." },
          { type: "saisTu", text: "Les électroniciens fabriquent les valeurs qui n'existent pas en magasin en associant des résistors : besoin de 50 Ω ? Deux résistors de 100 Ω en dérivation ! Tes deux formules sont leurs outils quotidiens." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : les mines associées",
      intro: "Vérifie les deux formules d'association avec deux mines de crayon !",
      materiel: [
        "deux mines de crayon identiques ;",
        "une pile plate 4,5 V ;",
        "une petite ampoule ;",
        "des fils.",
      ],
      etapes: [
        "Monte UNE mine en série avec la pile et l'ampoule : note l'éclat (c'est ta référence).",
        "Place les deux mines bout à bout (série) et observe.",
        "Place les deux mines côte à côte, reliées ensemble aux deux extrémités (dérivation), et observe.",
        "Interprète chaque éclat avec les formules.",
      ],
      observation: "En série, la lampe faiblit (résistance doublée). En dérivation, elle brille plus qu'avec une seule mine (résistance divisée par deux).",
      conclusion: "Les associations suivent exactement les deux formules : Re = R1 + R2 en série ; Re plus petite que chaque résistance en dérivation.",
    },
  },

  // ================= SÉANCE 15 =================
  15: {
    objectifs: [
      "Lire une plaque signalétique (tension et puissance).",
      "Calculer la puissance électrique : P = U × I.",
      "Calculer le courant appelé par un appareil : I = P ÷ U.",
    ],
    motsCles: ["puissance électrique", "plaque signalétique", "tension d'usage", "watt", "courant appelé", "fusible"],
    sections: [
      {
        titre: "1. La plaque signalétique : la carte d'identité de l'appareil",
        blocs: [
          { type: "para", text: "Tout appareil électrique porte deux indications : sa tension d'usage (en volts) et sa puissance (en watts). C'est sa plaque signalétique." },
          { type: "image", src: "img_v2_s15_plaque.png", w: 480, h: 265, legende: "Figure A — La plaque signalétique du fer à repasser : 220 V ; 1 100 W." },
          { type: "para", text: "Prends le réflexe de lire ces plaques : sous l'appareil, sur le culot des lampes ou près du cordon. Deux nombres qui disent tout de la consommation !" },
        ],
      },
      {
        titre: "2. La formule de la puissance électrique",
        blocs: [
          { type: "formule", formule: "P = U × I", legendes: [
            [{ text: "P", bold: true, color: "2E7D32" }, { text: " = la puissance, en watts (W)" }],
            [{ text: "U", bold: true, color: "2E7D32" }, { text: " = la tension, en volts (V)" }],
            [{ text: "I", bold: true, color: "2E7D32" }, { text: " = l'intensité, en ampères (A)" }],
          ]},
          { type: "puces", items: [
            [{ text: "courant appelé : ", bold: true }, { text: "I = P ÷ U — indispensable pour choisir fils et fusibles ;" }],
            [{ text: "pour un conducteur ohmique : ", bold: true }, { text: "P = R × I² (en combinant avec U = R × I)." }],
          ]},
        ],
      },
      {
        titre: "3. Les ordres de grandeur",
        blocs: [
          { type: "para", text: "Règle d'or : tout ce qui CHAUFFE est gourmand ; tout ce qui éclaire ou fait du son est sobre." },
          { type: "tableau", titres: ["Appareil", "Puissance"], lignes: [
            ["Lampe DEL", "9 W"],
            ["Radio", "15 W"],
            ["Vieille ampoule", "60 W"],
            ["Fer à repasser", "1 000 W"],
            ["Bouilloire", "2 000 W"],
          ]},
          { type: "para", text: "Plus la puissance est grande, plus le courant appelé est fort." },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Quel courant appelle un fer à repasser « 220 V ; 1 100 W » ? Peut-il partager un fusible de 10 A avec une bouilloire de 2 200 W ?",
            calcul: [
              "fer : I = P ÷ U = 1 100 ÷ 220 = 5 A",
              "bouilloire : I = 2 200 ÷ 220 = 10 A",
              "ensemble : 5 + 10 = 15 A, et 15 A > 10 A",
            ],
            reponse: "Le fusible fond !",
            phrase: "Il faut brancher les deux appareils sur des lignes différentes.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un résistor de 100 Ω est traversé par 0,3 A. Calcule sa puissance dissipée de deux façons.",
            calcul: [
              "1re méthode : U = R × I = 100 × 0,3 = 30 V, puis P = U × I = 30 × 0,3 = 9 W",
              "2e méthode : P = R × I² = 100 × 0,09",
            ],
            reponse: "P = 9 W",
            phrase: "Les deux formules donnent toujours le même résultat : la seconde va juste plus vite !",
          },
          { type: "saisTu", text: "Une lampe DEL de 9 W éclaire autant que la vieille ampoule de 60 W : sept fois moins de puissance pour la même lumière ! Sur une année, la différence paie plusieurs kilos de riz. C'est pourquoi la JIRAMA et les programmes d'électrification distribuent des lampes DEL dans tout Madagascar." },
          { type: "saisTu", text: "La formule P = R × I² explique le choix des GROS câbles pour les fortes puissances : si I double, l'échauffement des fils QUADRUPLE ! Les électriciens dimensionnent chaque fil selon le courant appelé : une simple formule de 3e protège les maisons de l'incendie." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'inventaire des puissances",
      intro: "Deviens le détective des watts de ta maison !",
      materiel: [
        "un carnet et un crayon ;",
        "les plaques signalétiques de la maison (ou d'une boutique).",
      ],
      etapes: [
        "Relève les plaques signalétiques : lampes, radio, fer, téléviseur…",
        "Classe les appareils du moins puissant au plus puissant.",
        "Calcule le courant appelé par chacun : I = P ÷ U.",
        "Additionne les courants si tout fonctionnait en même temps, et compare au calibre du disjoncteur (souvent 15 ou 20 A).",
      ],
      observation: "Les appareils qui chauffent dominent largement le classement. La somme des courants dépasse parfois le calibre : impossible de tout allumer à la fois !",
      conclusion: "P = U × I permet de prévoir le courant appelé par chaque appareil, et de comprendre pourquoi le disjoncteur saute quand on branche trop de « chauffeurs » ensemble.",
    },
  },

  // ================= SÉANCE 16 =================
  16: {
    objectifs: [
      "Calculer l'énergie électrique consommée : W = P × t.",
      "Utiliser le kilowattheure et calculer un coût.",
      "Énoncer la loi de Joule : Q = R × I² × t.",
    ],
    motsCles: ["énergie électrique", "kilowattheure", "effet Joule", "loi de Joule", "compteur", "puissance"],
    sections: [
      {
        titre: "1. L'énergie consommée par un appareil",
        blocs: [
          { type: "para", text: "Un appareil de puissance P qui fonctionne pendant une durée t consomme une énergie W :" },
          { type: "formule", formule: "W = P × t", legendes: [
            [{ text: "en joules : ", bold: true }, { text: "P en watts et t en secondes" }],
            [{ text: "en kilowattheures : ", bold: true }, { text: "P en kilowatts et t en heures" }],
            [{ text: "1 kWh = 3 600 000 J" }],
          ]},
          { type: "para", text: "L'énergie de toute la maison est la somme des énergies de chaque appareil : c'est elle que mesure le compteur électrique, et que facture la JIRAMA." },
          { type: "attention", text: "Ne confonds pas puissance et énergie ! La puissance est un DÉBIT (des joules par seconde). L'énergie est la QUANTITÉ totale consommée. Une petite lampe allumée toute la nuit peut consommer plus qu'une bouilloire utilisée deux minutes !" },
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une bouilloire de 2 000 W fonctionne 30 minutes. Calcule l'énergie consommée en kWh, puis le coût à 800 Ar le kWh.",
            calcul: [
              "P = 2 kW ; t = 0,5 h",
              "W = P × t = 2 × 0,5 = 1 kWh",
              "coût = 1 × 800",
            ],
            reponse: "800 Ar",
            phrase: "Cette demi-heure de bouilloire coûte autant que 100 heures d'une lampe DEL de 10 W !",
          },
        ],
      },
      {
        titre: "2. L'effet Joule : le courant chauffe",
        blocs: [
          { type: "para", text: "Tout conducteur parcouru par un courant électrique s'échauffe : c'est l'effet Joule." },
          { type: "puces", items: [
            [{ text: "utile : ", bold: true }, { text: "chauffer (fer, réchaud), éclairer par incandescence ;" }],
            [{ text: "nuisible : ", bold: true }, { text: "pertes dans les fils, surchauffe des appareils." }],
          ]},
          { type: "para", text: "Le même phénomène cuit ton riz… et menace les installations surchargées !" },
        ],
      },
      {
        titre: "3. La loi de Joule",
        blocs: [
          { type: "para", text: "Dans un conducteur ohmique, toute l'énergie électrique reçue est transformée en chaleur Q :" },
          { type: "formule", formule: "Q = R × I² × t", legendes: [
            [{ text: "Q", bold: true, color: "2E7D32" }, { text: " = la chaleur dégagée, en joules (J)" }],
            [{ text: "R", bold: true, color: "2E7D32" }, { text: " = la résistance, en ohms (Ω)" }],
            [{ text: "I", bold: true, color: "2E7D32" }, { text: " = l'intensité, en ampères (A) — et I² = I × I !" }],
            [{ text: "t", bold: true, color: "2E7D32" }, { text: " = la durée, en secondes (s)" }],
          ]},
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un résistor de 50 Ω est traversé par 2 A pendant 5 minutes. Quelle chaleur dégage-t-il ?",
            calcul: [
              "I² = 2 × 2 = 4 ; t = 5 × 60 = 300 s",
              "Q = R × I² × t",
              "Q = 50 × 4 × 300",
            ],
            reponse: "Q = 60 000 J",
            phrase: "N'oublie jamais les conversions : le temps en secondes pour un résultat en joules !",
          },
          { type: "saisTu", text: "Sur les anciens compteurs, le disque horizontal qui tourne est freiné par un aimant et entraîné par le courant : sa vitesse est proportionnelle à la puissance consommée, et son nombre de tours compte les kWh ! Les nouveaux compteurs électroniques font le même calcul… sans une seule pièce mobile." },
          { type: "saisTu", text: "James Joule mesura l'équivalence entre travail et chaleur avec des roues à aubes agitant de l'eau dans un tonneau… pendant son voyage de noces, dit la légende ! Sa femme surveillait le thermomètre. L'unité d'énergie du monde entier est née d'une lune de miel studieuse." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : le détective du compteur",
      intro: "Compare tes calculs au vrai compteur de la maison !",
      materiel: [
        "le compteur électrique de la maison (ou d'un voisin, avec permission) ;",
        "un carnet ;",
        "ton inventaire des puissances (séance précédente).",
      ],
      etapes: [
        "Note l'index du compteur le soir, à une heure précise.",
        "Note-le le lendemain à la même heure : la différence est la consommation du jour en kWh.",
        "Estime W = P × t pour chaque appareil utilisé dans la journée.",
        "Compare ton total au relevé du compteur.",
      ],
      observation: "Le total estimé s'approche du relevé. Les appareils qui chauffent écrasent tout le reste ; les petites veilles comptent aussi sur la durée.",
      conclusion: "W = P × t rend la facture prévisible : traquer les fortes puissances et les longues durées, c'est la clé des économies d'énergie.",
    },
  },

  // ================= SÉANCE 17 =================
  17: {
    objectifs: [
      "Décrire l'installation électrique d'une maison.",
      "Expliquer le rôle du disjoncteur et des fusibles.",
      "Appliquer les règles de sécurité électrique.",
    ],
    motsCles: ["compteur", "disjoncteur", "fusible", "dérivation", "électrocution", "surcharge", "calibre"],
    sections: [
      {
        titre: "1. Le chemin du courant dans la maison",
        blocs: [
          { type: "para", text: "La ligne de la JIRAMA arrive d'abord au compteur, qui mesure l'énergie consommée. Elle traverse ensuite le disjoncteur général, puis alimente les lignes de distribution." },
          { type: "para", text: "Toutes les lignes sont branchées en dérivation : chaque appareil reçoit 220 V et fonctionne indépendamment des autres." },
          { type: "para", text: "Retrouve tes lois de 5e et 4e : la dérivation garantit la même tension partout, et les intensités des lignes s'additionnent dans le câble principal. C'est lui que surveille le disjoncteur !" },
        ],
      },
      {
        titre: "2. Les protections : disjoncteur et fusibles",
        blocs: [
          { type: "puces", items: [
            [{ text: "le disjoncteur général ", bold: true }, { text: "protège toutes les lignes de la maison ; il se réarme après l'incident ;" }],
            [{ text: "chaque fusible ", bold: true }, { text: "ne protège qu'une seule ligne : son fil fond (effet Joule !) quand le courant dépasse le calibre ;" }],
          ]},
          { type: "attention", text: "Un fusible fondu se remplace uniquement par un fusible de MÊME CALIBRE. Jamais par un fil quelconque !" },
        ],
      },
      {
        titre: "3. Les dangers et les règles d'or",
        blocs: [
          { type: "para", text: "Deux dangers principaux : l'électrocution (fil dénudé, appareil défectueux, mains mouillées) et l'incendie (lignes surchargées, vieux fils qui chauffent par effet Joule)." },
          { type: "puces", items: [
            "ne jamais toucher un fil dénudé, ni rien introduire dans une prise ;",
            "manipuler les mains sèches, loin de l'eau ;",
            "débrancher avant toute intervention ;",
            "ne JAMAIS refaire avec le secteur les expériences faites en classe avec des piles ;",
            "seul un adulte qualifié intervient sur l'installation.",
          ]},
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une ligne protégée par un fusible de 10 A alimente un fer (1 100 W), une bouilloire (2 200 W) et une lampe (100 W), sous 220 V. Que se passe-t-il si tout fonctionne ensemble ?",
            calcul: [
              "courants appelés : 5 A + 10 A + 0,45 A",
              "total ≈ 15,45 A, et 15,45 A > 10 A",
            ],
            reponse: "Le fusible fond et coupe la ligne.",
            phrase: "C'est exactement son rôle ! Solution pratique : répartir les gros appareils sur des lignes différentes.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Après la fonte d'un fusible, un voisin propose de le remplacer par un gros fil de cuivre « pour que ça ne saute plus ». Pourquoi est-ce très dangereux ?",
            calcul: [
              "Le fusible fond VOLONTAIREMENT pour couper les surintensités.",
              "Un gros fil de cuivre ne fond pas : la surcharge continue.",
              "Les fils de la ligne chauffent : Q = R × I² × t…",
            ],
            reponse: "… jusqu'à l'incendie !",
          },
          { type: "saisTu", text: "Le corps humain conduit d'autant mieux le courant qu'il est mouillé : sa résistance passe d'environ 100 000 Ω (peau sèche) à moins de 1 000 Ω (peau humide) ! Sous 220 V, la loi d'Ohm donne alors I = 0,22 A : plus de quatre fois le seuil mortel de 50 mA. Voilà pourquoi salle d'eau et électricité ne font jamais bon ménage." },
          { type: "saisTu", text: "Les installations modernes ajoutent un gardien supplémentaire : le disjoncteur différentiel. Il compare en permanence le courant qui part et celui qui revient : la moindre fuite (par exemple à travers un corps humain !) le fait couper en quelques millièmes de seconde. Une invention qui sauve des milliers de vies chaque année." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'audit sécurité (sans rien toucher !)",
      intro: "Un inventaire avec les yeux seulement : on ne touche à RIEN.",
      materiel: [
        "un carnet et un crayon ;",
        "tes yeux — et rien d'autre !",
      ],
      etapes: [
        "Observe : où sont le compteur et le disjoncteur ? Quel est le calibre indiqué ?",
        "Compte les lignes et leurs fusibles au tableau électrique.",
        "Chasse aux dangers : fils dénudés, prises cassées, multiprises surchargées, appareils près de l'eau. Note tout.",
        "Présente ta liste à un adulte : que faut-il faire réparer en priorité ?",
      ],
      observation: "La plupart des maisons révèlent au moins un point à corriger : multiprise surchargée, cordon abîmé ou prise descellée.",
      conclusion: "La sécurité électrique commence par un regard informé. Et on laisse toujours les réparations à un adulte qualifié !",
    },
  },
};
