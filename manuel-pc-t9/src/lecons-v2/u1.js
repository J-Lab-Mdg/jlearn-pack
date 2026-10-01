// lecons-v2/u1.js — Unité 1 MÉCANIQUE, leçons reformulées « nouvelle maquette lisible »
// (la séance 4 est dans data-temoin-s4.js)

module.exports = {

  // ================= SÉANCE 1 =================
  1: {
    objectifs: [
      "Reconnaître une force grâce à ses effets.",
      "Utiliser un dynamomètre pour mesurer une force.",
      "Connaître l'unité de force : le newton (N).",
    ],
    motsCles: ["force", "dynamomètre", "newton", "droite d'action", "effets dynamiques", "effet statique", "intensité"],
    sections: [
      {
        titre: "1. C'est quoi, une force ?",
        blocs: [
          { type: "definition", def: "On appelle force toute cause capable de déformer un corps, de modifier son mouvement ou de rompre son équilibre.",
            simple: "une force est une poussée ou une traction qu'un corps exerce sur un autre. On ne la voit jamais directement : on voit seulement ce qu'elle fait. Ses actions visibles s'appellent ses effets." },
          { type: "para", text: "Une force peut :" },
          { type: "puces", items: [
            "mettre un objet en mouvement (le pied qui frappe le ballon) ;",
            "arrêter un objet ou changer sa trajectoire ;",
            "déformer un objet (le doigt qui enfonce la pâte, le ressort qui s'allonge).",
          ]},
          { type: "para", text: "Les effets de mouvement s'appellent les effets dynamiques. La déformation s'appelle l'effet statique." },
        ],
      },
      {
        titre: "2. Une force, c'est toujours une action entre DEUX corps",
        blocs: [
          { type: "para", text: "Attache un fil à une caisse et tire. Quand le fil se tend, la caisse se met à bouger : le fil exerce une force sur la caisse." },
          { type: "para", text: "Le fil tendu dessine une ligne droite : on l'appelle la droite d'action de la force." },
          { type: "attention", text: "Retiens bien le vocabulaire : le fil EXERCE la force, la caisse la SUBIT. Une force est toujours l'action d'un corps sur un autre : il faut toujours pouvoir nommer les deux !" },
        ],
      },
      {
        titre: "3. Mesurer une force : le dynamomètre et le newton",
        blocs: [
          { type: "para", text: "Pour mesurer une force, on utilise un dynamomètre. À l'intérieur, il y a un ressort : plus la force est grande, plus le ressort s'allonge. La graduation donne la valeur de la force : c'est son intensité." },
          { type: "para", text: "L'unité de force s'appelle le newton (on écrit N). L'ancienne unité, le kilogramme-force, ne s'utilise plus." },
          { type: "image", src: "img_v2_s1_dynamo.png", w: 500, h: 276, legende: "Figure A — Lire un dynamomètre : l'index montre l'intensité de la force, en newtons." },
          { type: "para", text: "Quelques repères pour te faire une idée :" },
          { type: "puces", items: [
            "soulever une pomme : environ 1 N ;",
            "soulever un seau d'eau de 10 litres : environ 100 N ;",
            "un fil tiré trop fort finit par casser : toute force a une limite supportable.",
          ]},
          { type: "saisTu", text: "Le newton rend hommage à Isaac Newton (1643-1727), qui comprit que la même force fait tomber la pomme et retient la Lune autour de la Terre ! Sur ton dynamomètre, tu liras parfois « daN » : le décanewton vaut 10 N, à peu près le poids d'un kilogramme." },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un joueur frappe un ballon qui roulait vers lui. Le ballon repart dans une autre direction, un peu écrasé au moment du choc. Quels sont les effets de la force ?",
            calcul: [
              "Effet dynamique : le ballon change de direction et de vitesse.",
              "Effet statique : le ballon est déformé (écrasé) au moment du choc.",
            ],
            reponse: "Une même force peut produire plusieurs effets à la fois !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un dynamomètre suspendu à une branche indique 12 N quand on y accroche un panier. Qui exerce la force ? Sur quoi ? Le long de quelle droite ?",
            calcul: [
              "La Terre attire le panier vers le bas.",
              "Le panier tire le crochet du dynamomètre.",
              "La force s'exerce le long du ressort, qui est vertical.",
            ],
            reponse: "La droite d'action est la verticale du lieu.",
          },
          { type: "saisTu", text: "Les balances de pêcheurs des marchés malgaches sont de vrais dynamomètres à ressort : le poisson suspendu étire le ressort et l'aiguille indique directement la valeur. Mesurer une force avec un ressort : une idée vieille de trois siècles et toujours en service !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : fabrique ton dynamomètre à élastique",
      intro: "Avec un simple élastique, tu peux mesurer des forces comme un vrai physicien !",
      materiel: [
        "un élastique solide et un clou ;",
        "du fil de fer pour faire un crochet ;",
        "un carton et un feutre ;",
        "une bouteille de 0,5 L et de l'eau.",
      ],
      etapes: [
        "Fixe l'élastique au clou. Accroche au bout le crochet en fil de fer, avec le carton derrière.",
        "Suspends la bouteille de 0,5 L pleine d'eau (son poids vaut environ 5 N) : marque l'allongement sur le carton.",
        "Gradue ton carton : la moitié de l'allongement vaut environ 2,5 N, le double vaut 10 N (vérifie avec deux bouteilles).",
        "Mesure la force qu'il faut pour traîner ta trousse, un livre, une brique.",
      ],
      observation: "L'allongement grandit avec la force : deux bouteilles étirent deux fois plus qu'une. Chaque objet traîné donne une lecture différente.",
      conclusion: "Un élastique gradué mesure les forces comme un vrai dynamomètre : l'allongement traduit l'intensité en newtons.",
    },
  },

  // ================= SÉANCE 2 =================
  2: {
    objectifs: [
      "Citer les quatre caractéristiques d'une force.",
      "Dessiner une force avec un vecteur, à l'échelle.",
      "Lire un vecteur force sur un schéma.",
    ],
    motsCles: ["direction", "sens", "intensité", "point d'application", "vecteur", "échelle", "droite d'action"],
    sections: [
      {
        titre: "1. Les quatre caractéristiques d'une force",
        blocs: [
          { type: "para", text: "Pour décrire complètement une force, il faut donner quatre renseignements. Pas trois, pas deux : quatre !" },
          { type: "puces", items: [
            [{ text: "la direction : ", bold: true }, { text: "la droite le long de laquelle la force agit (sa droite d'action) ;" }],
            [{ text: "le sens : ", bold: true }, { text: "de quel côté la force pousse ou tire, sur cette droite ;" }],
            [{ text: "l'intensité : ", bold: true }, { text: "la « grandeur » de la force, en newtons, mesurée au dynamomètre ;" }],
            [{ text: "le point d'application : ", bold: true }, { text: "l'endroit précis où la force s'exerce." }],
          ]},
          { type: "attention", text: "Ne confonds pas direction et sens ! « Horizontale » est une direction. « Vers la droite » ou « vers la gauche » sont les deux sens possibles sur cette direction." },
        ],
      },
      {
        titre: "2. Le vecteur force : toute la force dans une seule flèche",
        blocs: [
          { type: "definition", def: "Le vecteur force est un segment de droite orienté qui représente une force : son origine est le point d'application, sa direction et son sens sont ceux de la force, et sa longueur est proportionnelle à l'intensité.",
            simple: "c'est une flèche-dessin qui raconte les quatre caractéristiques d'un seul coup d'œil. « Proportionnelle » veut dire : deux fois plus de newtons, une flèche deux fois plus longue." },
          { type: "para", text: "Cette flèche raconte tout :" },
          { type: "puces", items: [
            "elle part du point d'application ;",
            "elle suit la direction de la force ;",
            "elle pointe dans le bon sens ;",
            "sa longueur représente l'intensité, grâce à une échelle.",
          ]},
          { type: "para", text: "Une échelle, c'est une règle de correspondance. Par exemple « 1 cm ↔ 2 N » veut dire : chaque centimètre du dessin représente 2 newtons dans la réalité." },
        ],
      },
      {
        titre: "3. La méthode pour tracer un vecteur",
        blocs: [
          { type: "puces", items: [
            "1. Lis l'échelle (par exemple 1 cm ↔ 2 N).",
            "2. Calcule la longueur de la flèche : une force de 6 N donne 6 ÷ 2 = 3 cm.",
            "3. Place le départ de la flèche au point d'application.",
            "4. Trace à la règle, dans la bonne direction et le bon sens.",
            "5. Écris le nom du vecteur (F) et note l'échelle près du schéma.",
          ]},
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Dessine le poids d'un sac de 8 N, à l'échelle 1 cm ↔ 2 N.",
            image: { src: "img_v2_s2_vecteur.png", w: 480, h: 246, legende: "Figure A — 8 N à l'échelle 1 cm ↔ 2 N : une flèche de 4 cm." },
            calcul: [
              "longueur = 8 N ÷ 2 N = 4 cm",
              "départ : le centre de gravité G du sac",
              "direction : verticale ; sens : vers le bas",
            ],
            reponse: "Flèche verticale de 4 cm, vers le bas, nommée P.",
            phrase: "Les quatre caractéristiques sont toutes dans le dessin !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Sur un schéma à l'échelle 1 cm ↔ 5 N, un vecteur horizontal pointé vers la droite mesure 3,5 cm. Décris la force.",
            calcul: [
              "intensité = 3,5 × 5 = 17,5 N",
              "direction : horizontale ; sens : vers la droite",
              "point d'application : le départ de la flèche",
            ],
            reponse: "Force horizontale de 17,5 N, vers la droite.",
            phrase: "Lire un vecteur, c'est refaire le chemin du traçage à l'envers.",
          },
          { type: "saisTu", text: "Le mot « vecteur » vient du latin vehere, « transporter » : le vecteur transporte toutes les informations de la force dans un simple dessin ! Les ingénieurs qui ont conçu les ponts de la RN2 calculent des centaines de vecteurs forces avant de poser la première pierre." },
          { type: "saisTu", text: "Les pilotes et les marins raisonnent en vecteurs tous les jours : le vent qui pousse l'avion ou la pirogue est une force avec direction, sens et intensité. Les navigateurs austronésiens composaient déjà ces vecteurs à l'instinct en venant peupler Madagascar !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience en classe : le jeu des quatre caractéristiques",
      intro: "Un jeu à faire à deux pour apprendre à décrire les forces sans se tromper.",
      materiel: [
        "une boîte et un fil solide ;",
        "une feuille quadrillée ;",
        "ton dynamomètre à élastique (séance 1).",
      ],
      etapes: [
        "Pose la boîte sur la table et attache le fil.",
        "Tire la boîte : vers la droite, vers la gauche, en biais, doucement, fort.",
        "À chaque essai, un camarade décrit la force : direction ? sens ? intensité ? point d'application ?",
        "Dessinez chaque force sur la feuille quadrillée, à l'échelle 1 cm ↔ 1 N.",
      ],
      observation: "Chaque tirage se décrit sans hésitation avec les quatre caractéristiques. Deux forces égales de sens opposés donnent deux flèches de même longueur, opposées.",
      conclusion: "Les quatre caractéristiques suffisent à décrire n'importe quelle force, et le vecteur les résume toutes en une seule flèche.",
    },
  },

  // ================= SÉANCE 3 =================
  3: {
    objectifs: [
      "Énoncer la condition d'équilibre d'un solide soumis à deux forces.",
      "Vérifier les trois exigences : alignement, égalité, sens contraires.",
      "Expliquer pourquoi deux forces décalées font tourner un objet.",
    ],
    motsCles: ["équilibre", "directement opposées", "droite d'action", "intensité", "sens contraires", "couple de forces"],
    sections: [
      {
        titre: "1. La condition d'équilibre",
        blocs: [
          { type: "definition", def: "Un solide soumis à deux forces est en équilibre si, et seulement si, les deux forces sont directement opposées : même droite d'action, même intensité, sens contraires.",
            simple: "pour que l'objet reste immobile, les deux forces doivent se neutraliser parfaitement, comme deux équipes de tir à la corde exactement aussi fortes l'une que l'autre." },
          { type: "para", text: "Directement opposées, cela veut dire trois choses à la fois :" },
          { type: "puces", items: [
            [{ text: "même droite d'action ", bold: true }, { text: "(les deux forces sont bien alignées) ;" }],
            [{ text: "même intensité ", bold: true }, { text: "(elles sont aussi fortes l'une que l'autre) ;" }],
            [{ text: "sens contraires ", bold: true }, { text: "(elles tirent chacune de son côté)." }],
          ]},
          { type: "attention", text: "Si UNE SEULE de ces trois conditions manque, il n'y a pas d'équilibre : l'objet bouge !" },
        ],
      },
      {
        titre: "2. Des équilibres autour de toi",
        blocs: [
          { type: "puces", items: [
            "la lampe suspendue : son poids (vers le bas) et la force du fil (vers le haut) ;",
            "le livre posé sur la table : son poids et la réaction de la table ;",
            "le nœud du tir à la corde, quand les deux équipes tirent aussi fort l'une que l'autre.",
          ]},
        ],
      },
      {
        titre: "3. Attention aux forces décalées !",
        blocs: [
          { type: "para", text: "Deux forces égales et de sens contraires, mais qui ne sont pas sur la même droite, ne donnent PAS l'équilibre : elles font tourner l'objet. (On appelle cela un couple de forces : tu l'étudieras plus tard.)" },
          { type: "image", src: "img_v2_s3_equilibre.png", w: 560, h: 258, legende: "Figure A — À gauche : forces alignées, le carton est en équilibre. À droite : forces décalées, le carton tourne !" },
          { type: "para", text: "Un exemple parlant : tes deux mains qui tournent un volant exercent des forces égales et opposées… mais décalées. Résultat : le volant tourne au lieu de rester immobile !" },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une lampe de poids 4 N pend au bout d'un fil, immobile. Donne les caractéristiques de la force exercée par le fil.",
            calcul: [
              "La lampe est en équilibre sous deux forces.",
              "Les deux forces sont donc directement opposées.",
              "Force du fil : direction verticale, sens vers le haut,",
            ],
            reponse: "intensité 4 N, appliquée au point d'attache.",
            phrase: "Aucune mesure nécessaire : la condition d'équilibre donne tout !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Au tir à la corde, le nœud central reste immobile. L'équipe A tire avec 500 N. Que vaut la force de l'équipe B ? Et si le nœud glisse vers A ?",
            calcul: [
              "Nœud immobile : les deux forces sont directement opposées.",
              "Donc l'équipe B tire aussi avec 500 N.",
              "Si le nœud glisse vers A : l'équilibre est rompu,",
            ],
            reponse: "la force de A dépasse celle de B.",
          },
          { type: "saisTu", text: "Le funambule qui avance sur son fil est un champion de l'équilibre sous deux forces : son poids et la réaction du fil. Son long balancier ne le porte pas : il l'aide à replacer sans cesse la droite d'action de son poids exactement sur le fil !" },
          { type: "saisTu", text: "Les ponts suspendus, comme les grandes passerelles sur les fleuves malgaches, reposent sur des milliers d'équilibres de forces : chaque câble tire exactement aussi fort que le poids qu'il soutient. Si un seul équilibre se rompt, les ingénieurs doivent recalculer tout l'ouvrage." },
        ],
      },
    ],
    experience: {
      titre: "Expérience en classe : le duel des élastiques",
      intro: "Mets la condition d'équilibre en défaut, une exigence à la fois !",
      materiel: [
        "un carton de 10 cm × 10 cm ;",
        "deux élastiques identiques ;",
        "deux camarades.",
      ],
      etapes: [
        "Perce deux trous opposés dans le carton et attache les deux élastiques.",
        "Faites tirer les deux camarades, chacun de son côté, jusqu'à immobiliser le carton.",
        "Demande à l'un de tirer un peu plus fort : que se passe-t-il ?",
        "Décale un élastique vers un coin du carton et tirez à nouveau : que fait le carton ?",
      ],
      observation: "Le carton s'immobilise quand les élastiques sont alignés et étirés pareil. Il part du côté du plus fort si les intensités diffèrent. Il TOURNE quand les forces ne sont plus alignées.",
      conclusion: "L'équilibre exige les trois conditions à la fois : alignement, égalité des intensités, sens contraires.",
    },
  },

  // ================= SÉANCE 5 =================
  5: {
    objectifs: [
      "Mettre en évidence la poussée d'Archimède.",
      "Mesurer la poussée par la méthode des deux pesées : F = P − T.",
      "Citer les facteurs qui font varier la poussée.",
    ],
    motsCles: ["poussée d'Archimède", "poids apparent", "deux pesées", "volume immergé", "verticale", "vers le haut"],
    sections: [
      {
        titre: "1. Le liquide pousse vers le haut !",
        blocs: [
          { type: "para", text: "Essaie d'enfoncer un récipient vide dans l'eau : plus tu l'enfonces, plus c'est difficile. L'eau résiste et pousse vers le haut !" },
          { type: "definition", def: "La poussée d'Archimède est la force verticale, dirigée vers le haut, qu'un liquide en équilibre exerce sur tout corps immergé en lui.",
            simple: "« immergé » veut dire plongé dans le liquide. Dès qu'un objet entre dans l'eau, l'eau le pousse vers le haut — c'est cette force qu'on appelle poussée d'Archimède." },
          { type: "para", text: "Tu la sens tous les jours : un seau d'eau paraît léger tant qu'il est dans le puits… et « s'alourdit » dès qu'il sort de l'eau. C'est la poussée qui t'aidait !" },
        ],
      },
      {
        titre: "2. Mesurer la poussée : la méthode des deux pesées",
        blocs: [
          { type: "para", text: "On suspend un objet à un dynamomètre et on fait deux mesures : une dans l'air, une dans l'eau." },
          { type: "puces", items: [
            "dans l'air, le dynamomètre indique le poids P ;",
            "dans l'eau, il indique moins : c'est le poids apparent T.",
          ]},
          { type: "formule", formule: "F = P − T", legendes: [
            [{ text: "F", bold: true, color: "2E7D32" }, { text: " = la poussée d'Archimède, en newtons (N)" }],
            [{ text: "P", bold: true, color: "2E7D32" }, { text: " = le poids dans l'air, en newtons (N)" }],
            [{ text: "T", bold: true, color: "2E7D32" }, { text: " = le poids apparent dans l'eau, en newtons (N)" }],
          ]},
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un caillou pèse 8 N dans l'air. Plongé dans l'eau, le dynamomètre n'indique plus que 5 N. Calcule la poussée d'Archimède.",
            image: { src: "img_v2_s5_pesees.png", w: 500, h: 286, legende: "Figure A — Deux pesées : 8 N dans l'air, 5 N dans l'eau." },
            calcul: ["F = P − T", "F = 8 N − 5 N"],
            reponse: "F = 3 N",
            phrase: "La poussée vaut 3 newtons : elle est verticale, vers le haut, appliquée au centre de poussée.",
          },
        ],
      },
      {
        titre: "3. Qu'est-ce qui fait varier la poussée ?",
        blocs: [
          { type: "puces", items: [
            [{ text: "le volume immergé : ", bold: true }, { text: "plus l'objet est gros, plus la poussée est grande ;" }],
            [{ text: "la nature du liquide : ", bold: true }, { text: "l'eau salée pousse plus fort que l'eau douce ;" }],
          ]},
          { type: "attention", text: "La poussée ne dépend PAS du poids de l'objet ! Deux objets de même volume reçoivent la même poussée, même si l'un est très lourd et l'autre très léger." },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Deux boules ont le même poids (10 N). La boule A, petite, subit 2 N de poussée. La boule B a un volume deux fois plus grand. Quelle poussée subit-elle ?",
            calcul: [
              "La poussée dépend du volume immergé, pas du poids.",
              "Volume double → eau déplacée double → poussée double.",
              "F = 2 × 2 N",
            ],
            reponse: "F = 4 N",
            phrase: "À poids égal, c'est le volume qui commande !",
          },
          { type: "saisTu", text: "Dans la mer Morte, l'eau est presque dix fois plus salée que l'océan : la poussée y est si forte qu'on flotte assis en lisant son journal ! Plus près de nous, on flotte mieux dans le canal de Mozambique que dans le lac Itasy : l'eau salée pousse plus fort que l'eau douce." },
          { type: "saisTu", text: "La poussée existe aussi dans les gaz ! C'est elle qui fait monter les ballons gonflés à l'hélium et les montgolfières. Ton corps reçoit de l'air une poussée d'environ 1 N : tu « pèses » un newton de moins que dans le vide !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la balance à poussée",
      intro: "Mesure la poussée d'Archimède avec ton dynamomètre à élastique.",
      materiel: [
        "ton dynamomètre à élastique et du fil ;",
        "un caillou ;",
        "un seau d'eau ;",
        "du sel.",
      ],
      etapes: [
        "Suspends le caillou au dynamomètre et note l'allongement : c'est le poids dans l'air.",
        "Descends le caillou dans le seau d'eau, sans toucher les parois, et note le nouvel allongement.",
        "Calcule la poussée : c'est la différence des deux lectures.",
        "Recommence dans de l'eau très salée (5 cuillères de sel par litre).",
      ],
      observation: "L'allongement diminue nettement dans l'eau : le caillou semble plus léger. Dans l'eau salée, il diminue encore plus : la poussée a augmenté.",
      conclusion: "Le liquide pousse le corps immergé vers le haut : F = P − T. La poussée augmente avec la salinité du liquide.",
    },
  },

  // ================= SÉANCE 6 =================
  6: {
    objectifs: [
      "Énoncer le théorème d'Archimède.",
      "Calculer la poussée avec la formule F = ρ × V × g.",
      "Utiliser la densité d'un liquide.",
    ],
    motsCles: ["théorème d'Archimède", "liquide déplacé", "masse volumique", "densité", "centre de poussée", "volume immergé"],
    sections: [
      {
        titre: "1. Le théorème d'Archimède",
        blocs: [
          { type: "para", text: "Voici l'une des plus célèbres lois de la physique, découverte il y a 2 200 ans :" },
          { type: "definition", def: "Théorème d'Archimède : tout corps plongé dans un liquide reçoit une poussée verticale, dirigée vers le haut, dont l'intensité est égale au poids du liquide déplacé.",
            simple: "le « liquide déplacé », c'est l'eau qui a dû laisser sa place au corps. Pèse cette eau : tu connais la force qui pousse le corps vers le haut. Si le corps est entièrement sous l'eau, le volume déplacé est égal au volume du corps ; s'il flotte, c'est seulement le volume de la partie sous la surface." },
          { type: "image", src: "img_v2_s6_deplace.png", w: 520, h: 289, legende: "Figure A — Le pavé chasse 200 cm³ d'eau ; cette eau pèse 2 N : la poussée vaut 2 N." },
        ],
      },
      {
        titre: "2. La formule pour calculer la poussée",
        blocs: [
          { type: "formule", formule: "F = ρ × V × g", legendes: [
            [{ text: "ρ (rhô)", bold: true, color: "2E7D32" }, { text: " = la masse volumique du liquide, en kg/m³" }],
            [{ text: "V", bold: true, color: "2E7D32" }, { text: " = le volume immergé (liquide déplacé), en m³" }],
            [{ text: "g", bold: true, color: "2E7D32" }, { text: " ≈ 10 N/kg" }],
          ]},
          { type: "attention", text: "Avec ρ en kg/m³, le volume doit être en m³ ! Rappels : 1 L = 0,001 m³ et 1 cm³ = 0,000 001 m³. Astuce pour l'eau : chaque litre déplacé donne environ 10 N de poussée ; chaque cm³ donne 0,01 N." },
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un pavé de 200 cm³ est entièrement immergé dans l'eau (ρ = 1 000 kg/m³ ; g = 10 N/kg). Calcule la poussée.",
            calcul: [
              "V = 200 cm³ = 0,000 2 m³",
              "F = ρ × V × g",
              "F = 1 000 × 0,000 2 × 10",
            ],
            reponse: "F = 2 N",
            phrase: "Vérification avec l'astuce : 200 cm³ × 0,01 N = 2 N. C'est bien ça !",
          },
        ],
      },
      {
        titre: "3. La densité : comparer un liquide à l'eau",
        blocs: [
          { type: "definition", def: "La densité d d'un corps est le quotient de sa masse volumique par la masse volumique de l'eau ; c'est un nombre sans unité.",
            simple: "le « quotient », c'est le résultat d'une division. La densité dit si un corps est plus lourd ou plus léger que l'eau, à volume égal : d > 1, plus lourd que l'eau ; d < 1, plus léger." },
          { type: "tableau", titres: ["Liquide", "Densité"], lignes: [
            ["Eau pure", "1"],
            ["Eau de mer", "≈ 1,03"],
            ["Huile", "≈ 0,9"],
            ["Mercure", "13,6"],
          ]},
          { type: "exemple", titre: "Exemple 2",
            enonce: "Le même pavé de 200 cm³ est plongé dans l'eau de mer (d = 1,03). Que devient la poussée ?",
            calcul: ["F = d × F(eau)", "F = 1,03 × 2 N"],
            reponse: "F = 2,06 N",
            phrase: "C'est 3 % de plus. Peu pour un pavé… mais énorme pour un cargo de 50 000 tonnes : voilà pourquoi les navires s'enfoncent plus en eau douce qu'en mer !",
          },
          { type: "para", text: "La poussée se dessine comme un vecteur vertical vers le haut, appliqué au centre de poussée : le centre de gravité du liquide déplacé." },
          { type: "saisTu", text: "Archimède de Syracuse (287-212 av. J.-C.) démasqua bel et bien l'orfèvre malhonnête : la couronne déplaçait plus d'eau qu'un lingot d'or de même masse — elle contenait de l'argent, moins dense ! Il inventa aussi la vis sans fin qui monte l'eau, toujours utilisée dans certains périmètres rizicoles." },
          { type: "saisTu", text: "Sur la coque des cargos est peinte la « ligne de Plimsoll » : plusieurs traits qui indiquent l'enfoncement maximal autorisé en eau douce, en mer tropicale, en hiver… C'est le théorème d'Archimède peint sur l'acier !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : vérifie le théorème toi-même",
      intro: "Avec un caillou et un élastique, vérifie un théorème vieux de 2 200 ans !",
      materiel: [
        "une boîte à bec verseur (ou un bol plein incliné) ;",
        "un caillou et ton dynamomètre à élastique ;",
        "un verre ;",
        "une balance ou une éprouvette.",
      ],
      etapes: [
        "Remplis la boîte à ras bord du bec verseur.",
        "Immerge le caillou suspendu au dynamomètre : recueille TOUTE l'eau débordée dans le verre.",
        "Pèse l'eau recueillie ou mesure son volume (100 cm³ ↔ 1 N).",
        "Compare avec la diminution d'allongement de ton élastique.",
      ],
      observation: "La perte de poids apparent du caillou correspond au poids de l'eau débordée : les deux valeurs concordent, aux erreurs de mesure près.",
      conclusion: "La poussée d'Archimède est bien égale au poids du liquide déplacé.",
    },
  },

  // ================= SÉANCE 7 =================
  7: {
    objectifs: [
      "Prévoir si un corps flotte ou coule en comparant F et P.",
      "Utiliser le critère des densités.",
      "Expliquer le navire, le poisson et le sous-marin.",
    ],
    motsCles: ["flotte", "coule", "densité", "poussée", "poids", "vessie natatoire", "water-ballasts"],
    sections: [
      {
        titre: "1. Flotter ou couler : les trois cas possibles",
        blocs: [
          { type: "para", text: "Lâche un objet dans l'eau. Deux forces se battent : son poids P qui le tire vers le bas, et la poussée F qui le pousse vers le haut. Celle qui gagne décide de tout !" },
          { type: "image", src: "img_v2_s7_3cas.png", w: 560, h: 263, legende: "Figure A — F > P : il flotte ; F = P : il reste immobile ; F < P : il coule." },
          { type: "puces", items: [
            [{ text: "F > P : ", bold: true }, { text: "l'objet remonte et flotte (une partie sort de l'eau, et la poussée diminue jusqu'à F = P) ;" }],
            [{ text: "F < P : ", bold: true }, { text: "l'objet coule au fond ;" }],
            [{ text: "F = P : ", bold: true }, { text: "l'objet reste immobile entre deux eaux (cas très rare)." }],
          ]},
        ],
      },
      {
        titre: "2. Le critère des densités : encore plus simple",
        blocs: [
          { type: "definition", def: "Un solide plein et homogène flotte sur un liquide si sa densité est inférieure à celle du liquide ; il coule si sa densité est supérieure.",
            simple: "« homogène » veut dire fait de la même matière partout. Pour savoir s'il flotte, pas besoin de calculer les forces : il suffit de comparer les densités." },
          { type: "para", text: "En résumé :" },
          { type: "puces", items: [
            "si la densité de l'objet est plus petite que celle du liquide : il flotte ;",
            "si elle est plus grande : il coule.",
          ]},
          { type: "para", text: "Exemples : le liège (d = 0,2) et le bois (d = 0,4 à 0,9) flottent sur l'eau. Le fer (d = 7,8) coule dans l'eau… mais flotte sur le mercure (d = 13,6) !" },
          { type: "attention", text: "Alors pourquoi un navire d'acier flotte-t-il ? Parce qu'il n'est pas homogène : sa coque enferme beaucoup d'air. Sa densité MOYENNE (acier + air) est inférieure à 1. Si la coque se perce, l'eau chasse l'air… et c'est le naufrage." },
        ],
      },
      {
        titre: "3. Le poisson et le sous-marin",
        blocs: [
          { type: "para", text: "Le poisson possède une poche de gaz, la vessie natatoire. En la gonflant ou en la dégonflant, il change son VOLUME, donc la poussée F : il monte ou descend à volonté." },
          { type: "para", text: "Le sous-marin fait l'inverse : il remplit ou vide ses réservoirs d'eau (les water-ballasts). Il change son POIDS P pour plonger ou remonter." },
          { type: "para", text: "Deux stratégies opposées pour le même but : ajuster la comparaison entre F et P !" },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une boule pleine a une masse de 540 g et un volume de 200 cm³. Flotte-t-elle sur l'eau ?",
            calcul: [
              "masse volumique = 540 ÷ 200 = 2,7 g/cm³",
              "densité = 2,7, et 2,7 > 1",
            ],
            reponse: "Elle coule.",
            phrase: "C'est de l'aluminium ! Autre méthode : P = 5,4 N contre F = 2 N au maximum : P gagne, même conclusion.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un morceau de bois de densité 0,5 flotte sur l'eau. Quelle fraction de son volume est sous l'eau ?",
            calcul: [
              "À l'équilibre : F = P.",
              "Le bois est 2 fois moins dense que l'eau.",
              "Il suffit d'immerger la moitié du volume pour déplacer un poids d'eau égal au sien.",
            ],
            reponse: "50 % sous l'eau, 50 % émergés.",
          },
          { type: "saisTu", text: "La glace flotte sur l'eau : sa densité est de 0,92 ! C'est exceptionnel : presque tous les solides coulent dans leur propre liquide. Sans cette anomalie de l'eau, les lacs gèleraient par le fond et toute vie aquatique disparaîtrait en hiver dans les pays froids." },
          { type: "saisTu", text: "Les pirogues à balancier des pêcheurs vezo flottent grâce au farafatse, un bois très léger (densité proche de 0,3). Le balancier n'aide pas à flotter : il empêche de chavirer ! Densité pour la flottaison, largeur pour la stabilité : toute l'architecture navale en deux idées." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'œuf plongeur",
      intro: "Fais faire à un œuf les trois cas du cours : couler, flotter, rester entre deux eaux !",
      materiel: [
        "un œuf frais ;",
        "un grand verre et de l'eau ;",
        "du sel et une cuillère.",
      ],
      etapes: [
        "Dépose l'œuf dans le verre d'eau douce : il coule.",
        "Ajoute du sel, cuillère par cuillère, en remuant doucement : l'œuf finit par flotter.",
        "Verse délicatement de l'eau douce par-dessus l'eau salée, le long de la paroi : l'œuf se stabilise entre les deux couches.",
        "Bonus : un œuf douteux flotte même en eau douce (il contient du gaz) — c'est un test de fraîcheur !",
      ],
      observation: "Dans l'eau douce, l'œuf coule (d ≈ 1,05 > 1). Dans l'eau salée, plus dense que lui, il flotte. Entre les deux couches : F = P, il reste immobile.",
      conclusion: "Flotter ou couler n'est qu'une affaire de comparaison de densités : en changeant celle du liquide, on obtient les trois cas du cours.",
    },
  },

  // ================= SÉANCE 8 =================
  8: {
    objectifs: [
      "Calculer le travail d'une force constante : W = F × d.",
      "Distinguer travail moteur et travail résistant.",
      "Calculer le travail du poids : W = P × h.",
    ],
    motsCles: ["travail", "joule", "force constante", "travail moteur", "travail résistant", "dénivellation"],
    sections: [
      {
        titre: "1. En physique, « travailler », c'est déplacer !",
        blocs: [
          { type: "para", text: "Une force est constante si sa direction, son sens et son intensité ne changent pas. Exemple : le poids d'un objet qui tombe." },
          { type: "definition", def: "Le travail d'une force constante est le produit de l'intensité de la force par la longueur du déplacement de son point d'application, effectué dans la direction de la force : W = F × d.",
            simple: "le « produit », c'est le résultat d'une multiplication. Une force « travaille » seulement quand elle déplace quelque chose : plus la force est grande et plus le trajet est long, plus le travail est grand." },
          { type: "formule", formule: "W = F × d", legendes: [
            [{ text: "W", bold: true, color: "2E7D32" }, { text: " = le travail, en joules (J)" }],
            [{ text: "F", bold: true, color: "2E7D32" }, { text: " = la force, en newtons (N)" }],
            [{ text: "d", bold: true, color: "2E7D32" }, { text: " = le déplacement, en mètres (m)" }],
          ]},
          { type: "attention", text: "Porter un sac immobile fatigue les muscles, mais le travail est NUL : pas de déplacement, pas de travail (W = F × 0 = 0) ! En physique, « travailler », c'est déplacer." },
          { type: "puces", items: [
            [{ text: "travail moteur : ", bold: true }, { text: "la force aide le déplacement (elle est dans son sens) ;" }],
            [{ text: "travail résistant : ", bold: true }, { text: "la force s'oppose au déplacement (frottements, retenue)." }],
          ]},
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un zébu tire une charrette avec une force de 400 N, sur 250 m de route droite. Calcule le travail fourni.",
            image: { src: "img_v2_s8_zebu.png", w: 520, h: 229, legende: "Figure A — F = 400 N sur d = 250 m." },
            calcul: ["W = F × d", "W = 400 N × 250 m"],
            reponse: "W = 100 000 J = 100 kJ",
            phrase: "C'est un travail moteur : la force du zébu est dans le sens du déplacement.",
          },
        ],
      },
      {
        titre: "2. Le travail du poids : seule la hauteur compte !",
        blocs: [
          { type: "para", text: "Pour le poids, le travail ne dépend que de la dénivellation h : la différence de hauteur entre le départ et l'arrivée." },
          { type: "formule", formule: "W = P × h", legendes: [
            [{ text: "P", bold: true, color: "2E7D32" }, { text: " = le poids, en newtons (N)" }],
            [{ text: "h", bold: true, color: "2E7D32" }, { text: " = la dénivellation, en mètres (m)" }],
          ]},
          { type: "para", text: "Escalier, échelle ou pente douce : peu importe le chemin, le travail du poids est le même ! À la descente, le poids aide (travail moteur). À la montée, il s'oppose (travail résistant). Sur un trajet horizontal, h = 0 : le poids ne travaille pas." },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Une maçonne monte un seau de ciment de 15 kg au 2e étage (h = 6 m), par un escalier long de 20 m. Quel est le travail contre le poids (g = 10 N/kg) ?",
            calcul: [
              "P = m × g = 15 × 10 = 150 N",
              "W = P × h",
              "W = 150 N × 6 m",
            ],
            reponse: "W = 900 J",
            phrase: "Les 20 m de l'escalier ne comptent pas : le travail du poids ignore le chemin suivi !",
          },
          { type: "saisTu", text: "Le joule honore James Prescott Joule (1818-1889), brasseur anglais passionné de mesures. Un joule, c'est peu : soulever une petite pomme d'un mètre ! Une barre de chocolat fournit environ 1 000 000 J d'énergie : de quoi hisser cette pomme au sommet de 100 000 étages…" },
          { type: "saisTu", text: "Les monte-charges des chantiers d'Antananarivo appliquent W = P × h à chaque voyage : monter 200 kg de briques au 3e étage (9 m), c'est 2 000 × 9 = 18 000 J, quel que soit le trajet de la poulie. Les devis des entreprises de levage se calculent avec la formule de ta leçon !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : le chantier des joules",
      intro: "Compare deux « chantiers » : traîner et soulever.",
      materiel: [
        "ton dynamomètre à élastique ;",
        "ton cartable ;",
        "un mètre ou une corde étalonnée.",
      ],
      etapes: [
        "Mesure la force nécessaire pour traîner ton cartable sur le sol (par exemple 15 N).",
        "Traîne-le sur 4 m bien mesurés et calcule le travail : W = 15 × 4 = 60 J.",
        "Soulève maintenant le cartable (poids ≈ 30 N) sur 1,5 m : W = 30 × 1,5 = 45 J.",
        "Compare les deux chantiers.",
      ],
      observation: "Traîner sur 4 m a demandé plus de travail (60 J) que soulever à 1,5 m (45 J) !",
      conclusion: "Le travail combine force ET distance : une petite force sur un long trajet peut travailler plus qu'une grande force sur un trajet court.",
    },
  },

  // ================= SÉANCE 9 =================
  9: {
    objectifs: [
      "Calculer une puissance : P = W ÷ t.",
      "Utiliser le watt et convertir les durées en secondes.",
      "Comprendre que la puissance mesure la rapidité d'un travail.",
    ],
    motsCles: ["puissance", "watt", "travail", "durée", "cheval-vapeur", "joule"],
    sections: [
      {
        titre: "1. La puissance : un travail divisé par une durée",
        blocs: [
          { type: "para", text: "Deux porteurs font le même travail, mais l'un va plus vite que l'autre. Comment comparer ?" },
          { type: "definition", def: "La puissance d'une force est le quotient du travail effectué par la durée mise pour l'effectuer : P = W ÷ t.",
            simple: "le « quotient », c'est le résultat d'une division. La puissance mesure la vitesse à laquelle un travail est fait : même travail en moins de temps, puissance plus grande." },
          { type: "formule", formule: "P = W ÷ t", legendes: [
            [{ text: "P", bold: true, color: "2E7D32" }, { text: " = la puissance, en watts (W)" }],
            [{ text: "W", bold: true, color: "2E7D32" }, { text: " = le travail, en joules (J)" }],
            [{ text: "t", bold: true, color: "2E7D32" }, { text: " = la durée, en secondes (s)" }],
          ]},
          { type: "para", text: "On en déduit les deux autres formules : W = P × t et t = W ÷ P. Le triangle W / P·t rend les trois automatiques : cache la grandeur cherchée, la position des deux autres donne l'opération !" },
        ],
      },
      {
        titre: "2. Les unités : le watt… et les pièges",
        blocs: [
          { type: "para", text: "L'unité de puissance est le watt (W) : 1 watt = 1 joule par seconde. Pour les moteurs, on rencontre encore le cheval-vapeur : 1 ch = 736 W." },
          { type: "attention", text: "Le temps doit être en SECONDES ! Un travail de 3 600 J fourni en 1 heure ne fait que 3 600 ÷ 3 600 = 1 W. Convertis toujours les minutes et les heures avant de calculer : 1 min = 60 s ; 1 h = 3 600 s." },
          { type: "tableau", titres: ["Qui travaille ?", "Puissance"], lignes: [
            ["Un homme au travail soutenu", "≈ 75 W"],
            ["Un zébu de trait", "≈ 500 W"],
            ["Un motoculteur de 8 ch", "≈ 5 900 W"],
          ]},
        ],
      },
      {
        titre: "3. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Une pompe élève 100 kg d'eau (poids 1 000 N) d'une hauteur de 12 m en 40 s. Calcule sa puissance.",
            image: { src: "img_v2_s9_escalier.png", w: 500, h: 261, legende: "Figure A — La puissance : un travail… contre le chrono !" },
            calcul: [
              "W = P × h = 1 000 × 12 = 12 000 J",
              "P = W ÷ t",
              "P = 12 000 J ÷ 40 s",
            ],
            reponse: "P = 300 W",
            phrase: "Cette pompe fournit 300 joules chaque seconde.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Naina et Koto montent chacun 50 sacs au grenier : un travail de 30 000 J chacun. Naina met 10 minutes, Koto en met 15. Compare leurs puissances.",
            calcul: [
              "Naina : t = 600 s → P = 30 000 ÷ 600 = 50 W",
              "Koto : t = 900 s → P = 30 000 ÷ 900 ≈ 33 W",
            ],
            reponse: "Naina est plus puissant que Koto.",
            phrase: "Même travail, mais Naina est plus rapide : la puissance mesure la vitesse d'exécution, pas la quantité !",
          },
          { type: "saisTu", text: "Le « cheval-vapeur » fut inventé par James Watt lui-même pour vendre ses machines à vapeur : il mesura ce qu'un bon cheval de brasserie pouvait fournir en tirant… et garantit que ses machines faisaient mieux ! Ironie de l'histoire : l'unité officielle porte aujourd'hui son nom." },
          { type: "saisTu", text: "Un cycliste du Tour de France développe environ 400 W pendant des heures : cinq fois un homme ordinaire ! Lors d'un sprint, certains dépassent 1 500 W pendant quelques secondes : deux chevaux-vapeur sur deux roues… mais impossible à tenir plus de dix secondes." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : mesure ta propre puissance",
      intro: "Classe-toi sur la même échelle que le zébu et le motoculteur !",
      materiel: [
        "une balance (ou ta masse connue) ;",
        "un escalier et un mètre ;",
        "un chronomètre (téléphone).",
      ],
      etapes: [
        "Pèse-toi (par exemple 40 kg : poids 400 N) et mesure la hauteur totale de l'escalier (par exemple 3 m).",
        "Monte à fond de train pendant qu'un camarade chronomètre (par exemple 6 s).",
        "Calcule ton travail : W = 400 × 3 = 1 200 J.",
        "Calcule ta puissance : P = 1 200 ÷ 6 = 200 W. Compare avec tes camarades… et avec le zébu (500 W) !",
      ],
      observation: "Chacun trouve une valeur différente, selon sa masse et son temps.",
      conclusion: "Monter vite, c'est être puissant : la même formule P = W ÷ t classe les élèves, les zébus et les moteurs sur une seule échelle en watts !",
    },
  },
};
