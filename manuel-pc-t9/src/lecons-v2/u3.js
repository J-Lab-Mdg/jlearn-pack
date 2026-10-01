// lecons-v2/u3.js — Unité 3 OPTIQUE, leçons reformulées « nouvelle maquette lisible »

module.exports = {

  // ================= SÉANCE 20 =================
  20: {
    objectifs: [
      "Reconnaître le phénomène de réflexion.",
      "Nommer les éléments du schéma : normale, angles i et r.",
      "Énoncer et utiliser les deux lois de la réflexion.",
    ],
    motsCles: ["réflexion", "normale", "point d'incidence", "angle d'incidence", "angle de réflexion", "plan d'incidence", "diffuse"],
    sections: [
      {
        titre: "1. C'est quoi, la réflexion ?",
        blocs: [
          { type: "definition", def: "La réflexion est le changement de direction que subit la lumière lorsqu'elle rencontre une surface polie, qui la renvoie dans son milieu de départ.",
            simple: "« polie » veut dire parfaitement lisse et brillante (miroir, eau calme, métal brillant). La lumière y rebondit dans une direction précise, comme une balle sur un sol dur." },
          { type: "attention", text: "Ne confonds pas ! Une surface polie RÉFLÉCHIT la lumière dans une direction précise : on y voit des images. Une surface mate (mur, papier) DIFFUSE la lumière dans toutes les directions : on voit l'objet, mais pas d'image." },
        ],
      },
      {
        titre: "2. Le vocabulaire du schéma",
        blocs: [
          { type: "image", src: "img_v2_s20_reflexion.png", w: 540, h: 326, legende: "Figure A — Le rayon rebondit sur le miroir : r = i, toujours mesurés depuis la normale." },
          { type: "puces", items: [
            [{ text: "le point d'incidence I : ", bold: true }, { text: "là où le rayon frappe le miroir ;" }],
            [{ text: "la normale : ", bold: true }, { text: "la droite perpendiculaire au miroir, en I ;" }],
            [{ text: "l'angle d'incidence i : ", bold: true }, { text: "entre le rayon incident et la normale ;" }],
            [{ text: "l'angle de réflexion r : ", bold: true }, { text: "entre le rayon réfléchi et la normale ;" }],
            [{ text: "le plan d'incidence : ", bold: true }, { text: "le plan qui contient le rayon incident et la normale." }],
          ]},
        ],
      },
      {
        titre: "3. Les deux lois de la réflexion",
        blocs: [
          { type: "puces", items: [
            [{ text: "1re loi : ", bold: true }, { text: "le rayon réfléchi est dans le plan d'incidence ;" }],
            [{ text: "2e loi : ", bold: true }, { text: "l'angle de réflexion est égal à l'angle d'incidence : r = i." }],
          ]},
          { type: "attention", text: "Les angles i et r se mesurent TOUJOURS par rapport à la normale, jamais par rapport au miroir ! Un rayon qui rase le miroir a un GRAND angle d'incidence." },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un rayon frappe un miroir plan en faisant un angle de 35° avec la NORMALE. Donne l'angle de réflexion, puis l'angle entre le rayon réfléchi et le miroir.",
            calcul: [
              "2e loi : r = i = 35°",
              "angle avec le miroir : 90 − 35",
            ],
            reponse: "r = 35° ; angle avec le miroir = 55°",
            phrase: "Vérifie toujours de quel angle parle l'énoncé : normale ou miroir !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un rayon frappe le miroir en faisant 20° avec la SURFACE du miroir. Calcule i et r, puis l'angle total entre le rayon incident et le rayon réfléchi.",
            calcul: [
              "i = 90 − 20 = 70°, donc r = 70°",
              "angle entre les deux rayons : i + r = 70 + 70",
            ],
            reponse: "140°",
            phrase: "Le passage par la normale évite toute confusion.",
          },
          { type: "saisTu", text: "Les astronautes des missions Apollo ont déposé sur la Lune des rétroréflecteurs : des miroirs en coin qui renvoient la lumière exactement d'où elle vient. Depuis, des laboratoires envoient des éclairs laser sur la Lune et chronomètrent l'aller-retour : la distance Terre-Lune est mesurée au centimètre près — 384 400 km en moyenne !" },
          { type: "saisTu", text: "Les phares maritimes utilisent des miroirs et des lentilles pour concentrer la lumière d'une simple lampe en un faisceau visible à 50 km. Le grand phare du cap Sainte-Marie, à la pointe sud de Madagascar, guide ainsi les navires du canal de Mozambique grâce aux lois de la réflexion !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : le billard de lumière",
      intro: "Vérifie la loi r = i avec une lampe de poche et un rapporteur !",
      materiel: [
        "un petit miroir et de la pâte adhésive ;",
        "une lampe de poche et un carton fendu d'une fente fine ;",
        "une feuille, un rapporteur, un crayon.",
      ],
      etapes: [
        "Pose la feuille sur la table et dresse le miroir dessus, tenu par la pâte.",
        "Fabrique un pinceau de lumière : le carton fendu devant la lampe.",
        "Trace le rayon incident, le point I et la normale au rapporteur ; mesure i et r pour trois inclinaisons différentes.",
        "Défi : avec deux miroirs, fais faire un demi-tour complet à la lumière !",
      ],
      observation: "Pour chaque essai, r = i à un ou deux degrés près (erreurs de tracé). Avec deux miroirs à 90°, la lumière repart parallèlement à son arrivée.",
      conclusion: "La lumière rebondit comme une boule de billard parfaite : l'angle de réflexion égale toujours l'angle d'incidence.",
    },
  },

  // ================= SÉANCE 21 =================
  21: {
    objectifs: [
      "Construire l'image d'un objet dans un miroir plan.",
      "Citer les caractéristiques de l'image.",
      "Comprendre pourquoi l'image est « virtuelle ».",
    ],
    motsCles: ["image", "symétrique", "miroir plan", "virtuelle", "même grandeur", "gauche et droite inversées"],
    sections: [
      {
        titre: "1. Où est l'image ?",
        blocs: [
          { type: "definition", def: "L'image d'un point donnée par un miroir plan est le symétrique de ce point par rapport au plan du miroir. Cette image est virtuelle : elle ne peut pas être recueillie sur un écran.",
            simple: "« symétrique » : même distance derrière le miroir que l'objet devant. « Virtuelle » veut dire « pas vraiment là » : les rayons semblent venir de derrière le miroir, mais aucune lumière ne s'y trouve. Pour un objet entier, on construit le symétrique de chacun de ses points." },
          { type: "image", src: "img_v2_s21_miroir.png", w: 520, h: 302, legende: "Figure A — L'image est derrière le miroir, à la même distance que l'objet." },
          { type: "para", text: "La méthode de construction : de chaque point de l'objet, trace la perpendiculaire au miroir, puis reporte la même distance de l'autre côté. C'est la symétrie orthogonale de tes cours de maths !" },
        ],
      },
      {
        titre: "2. Les caractéristiques de l'image",
        blocs: [
          { type: "puces", items: [
            "même grandeur que l'objet ;",
            "située derrière le miroir, à la même distance que l'objet ;",
            "virtuelle : on ne peut pas la recueillir sur un écran ;",
            "gauche et droite inversées.",
          ]},
          { type: "attention", text: "« Virtuelle » veut dire : aucune lumière ne se trouve réellement derrière le miroir ! Les rayons réfléchis SEMBLENT venir de là. L'œil s'y trompe… l'écran jamais." },
        ],
      },
      {
        titre: "3. L'expérience des deux bougies",
        blocs: [
          { type: "para", text: "Une vitre sert de miroir semi-transparent. On place une bougie éteinte derrière la vitre, au symétrique d'une bougie allumée : la bougie éteinte semble s'allumer ! Elle matérialise la position et la grandeur de l'image." },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Naina se tient à 1,5 m d'un miroir plan. À quelle distance d'elle se trouve son image ? Elle recule de 0,5 m : et maintenant ?",
            calcul: [
              "L'image est à 1,5 m DERRIÈRE le miroir.",
              "distance Naina-image : 1,5 + 1,5 = 3 m",
              "après recul : 2 m de chaque côté : 2 + 2",
            ],
            reponse: "3 m, puis 4 m",
            phrase: "L'image recule en même temps qu'elle !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Sur l'avant des ambulances, le mot AMBULANCE est écrit à l'envers. Pourquoi ?",
            calcul: [
              "Le conducteur devant voit l'ambulance dans son rétroviseur.",
              "C'est une image dans un miroir plan : gauche et droite inversées.",
              "Le mot pré-inversé redevient lisible après réflexion.",
            ],
            reponse: "On inverse l'inversion !",
          },
          { type: "saisTu", text: "Léonard de Vinci écrivait ses carnets « en miroir » : de droite à gauche, avec des lettres retournées ! Pour lire ses milliers de pages de notes scientifiques, il faut… un miroir plan. Gaucher, il évitait ainsi d'étaler l'encre — et gardait ses idées à l'abri des curieux." },
          { type: "saisTu", text: "Le périscope des sous-marins n'est que deux miroirs plans inclinés à 45° dans un tube : la lumière descend d'un miroir à l'autre et l'observateur voit au-dessus de la surface en restant caché dessous. Tu peux en fabriquer un avec deux miroirs de poche et une boîte de dentifrice !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la bougie fantôme (avec un adulte)",
      intro: "Fais « brûler » une bougie éteinte grâce à une simple vitre !",
      materiel: [
        "une vitre (ou le verre d'un cadre photo) et deux livres pour la tenir debout ;",
        "deux bougies identiques ;",
        "une règle ;",
        "des allumettes (manipulées par un adulte).",
      ],
      etapes: [
        "Pose la vitre debout entre les deux livres, sur la table.",
        "Place la bougie allumée devant, la bougie éteinte derrière.",
        "Déplace la bougie éteinte jusqu'à la voir « brûler » à travers la vitre.",
        "Mesure les distances des deux bougies à la vitre. (Variante sans flamme : deux bouchons identiques et une lampe de poche.)",
      ],
      observation: "La flamme semble danser sur la bougie éteinte exactement quand les deux distances à la vitre sont égales. L'illusion est parfaite depuis n'importe quel angle.",
      conclusion: "L'image du miroir plan est bien le symétrique de l'objet : même distance, même grandeur… et virtuelle : la seconde bougie ne brûle pas !",
    },
  },

  // ================= SÉANCE 22 =================
  22: {
    objectifs: [
      "Reconnaître le phénomène de réfraction.",
      "Savoir que le rayon se rapproche de la normale en entrant dans l'eau.",
      "Expliquer le crayon cassé, le poisson déplacé et le mirage.",
    ],
    motsCles: ["réfraction", "milieux transparents", "normale", "rayon réfracté", "mirage", "réflexion"],
    sections: [
      {
        titre: "1. C'est quoi, la réfraction ?",
        blocs: [
          { type: "definition", def: "La réfraction est le changement brusque de direction que subit la lumière lorsqu'elle traverse la surface séparant deux milieux transparents différents.",
            simple: "un milieu « transparent » laisse passer la lumière (air, eau, verre). En passant de l'un à l'autre, le rayon se plie d'un coup, comme une paille qui semble cassée dans un verre d'eau." },
          { type: "image", src: "img_v2_s22_refraction.png", w: 520, h: 326, legende: "Figure A — En entrant dans l'eau, le rayon se rapproche de la normale (40° → 29°)." },
          { type: "puces", items: [
            "en entrant dans l'eau (ou le verre), le rayon se rapproche de la normale ;",
            "en sortant vers l'air, il s'en écarte.",
          ]},
          { type: "attention", text: "Ne confonds pas ! La réflexion renvoie la lumière dans le MÊME milieu. La réfraction la laisse PASSER dans l'autre milieu, en la déviant. À la surface de l'eau, les deux se produisent en même temps !" },
        ],
      },
      {
        titre: "2. La première loi de la réfraction",
        blocs: [
          { type: "para", text: "Le rayon réfracté est situé dans le plan d'incidence. (La relation exacte entre les angles sera étudiée au lycée.)" },
          { type: "para", text: "Cas particulier à connaître : un rayon qui arrive PERPENDICULAIREMENT à la surface (le long de la normale) traverse sans être dévié." },
        ],
      },
      {
        titre: "3. Les conséquences… et le mirage",
        blocs: [
          { type: "para", text: "La réfraction explique le crayon « cassé » dans le verre d'eau, la pièce qui réapparaît au fond de la cuvette, et le poisson vu plus haut que sa position réelle." },
          { type: "para", text: "Le mirage : au-dessus d'une route surchauffée, les couches d'air chaud, moins denses, courbent peu à peu les rayons venus du ciel, qui remontent vers l'œil. La « flaque » sur la route, c'est l'image réfractée du ciel !" },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un pêcheur au harpon vise un poisson là où il le voit. Va-t-il le toucher ? Où doit-il viser ?",
            calcul: [
              "Les rayons venus du poisson s'écartent de la normale en sortant de l'eau.",
              "L'œil voit donc le poisson PLUS HAUT que sa position réelle.",
            ],
            reponse: "Il doit viser EN DESSOUS de l'image.",
            phrase: "Les pêcheurs au harpon le savent d'expérience : c'est de la réfraction appliquée !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Un rayon entre dans l'eau avec un angle d'incidence de 40°. L'angle réfracté est-il plus grand ou plus petit que 40° ? Et si le rayon arrive le long de la normale ?",
            calcul: [
              "L'eau est plus réfringente que l'air : le rayon se RAPPROCHE de la normale.",
              "angle réfracté < 40° (environ 29° en réalité)",
            ],
            reponse: "Plus petit. Le long de la normale : aucune déviation.",
          },
          { type: "saisTu", text: "Les fibres optiques qui transportent Internet sous les océans utilisent la réfraction à l'envers : la lumière qui tente de sortir du cœur de verre est intégralement renvoyée à l'intérieur (réflexion totale) et rebondit sur des milliers de kilomètres ! Un seul cheveu de verre porte des millions de conversations — y compris entre Madagascar et le monde, via le câble sous-marin." },
          { type: "saisTu", text: "Le Soleil que tu vois se coucher est déjà… couché ! L'atmosphère courbe les rayons par réfraction et nous montre le Soleil environ deux minutes après son passage réel sous l'horizon." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la pièce magique",
      intro: "Fais réapparaître une pièce cachée… sans la toucher !",
      materiel: [
        "une pièce de monnaie et une cuvette opaque ;",
        "de l'eau ;",
        "un camarade ;",
        "un crayon et un verre (pour le bonus).",
      ],
      etapes: [
        "Pose la pièce au fond de la cuvette vide. Recule jusqu'à ce que le bord cache tout juste la pièce.",
        "Sans bouger la tête, fais verser doucement de l'eau par ton camarade.",
        "Observe la pièce.",
        "Bonus : plonge le crayon dans le verre d'eau et observe la « cassure » sous plusieurs angles.",
      ],
      observation: "À mesure que l'eau monte, la pièce « remonte » et redevient visible. Le crayon paraît brisé à la surface, et la partie immergée semble plus haute et plus grosse.",
      conclusion: "La lumière se courbe en changeant de milieu : la réfraction déplace les images. Ce que l'œil voit sous l'eau n'est jamais exactement là où c'est !",
    },
  },

  // ================= SÉANCE 23 =================
  23: {
    objectifs: [
      "Décrire l'expérience du prisme.",
      "Citer les sept couleurs du spectre dans l'ordre.",
      "Expliquer l'arc-en-ciel.",
    ],
    motsCles: ["prisme", "spectre", "décompose", "arc-en-ciel", "infrarouge", "ultraviolet", "réfraction"],
    sections: [
      {
        titre: "1. L'expérience du prisme",
        blocs: [
          { type: "para", text: "Un pinceau de lumière blanche traverse un prisme de verre… et s'étale sur l'écran en une magnifique bande colorée : le spectre de la lumière blanche." },
          { type: "image", src: "img_v2_s23_prisme.png", w: 540, h: 288, legende: "Figure A — Le prisme étale la lumière blanche en sept couleurs." },
          { type: "para", text: "Pourquoi le prisme trie-t-il les couleurs ? Parce que la réfraction dévie chaque couleur différemment : le violet est plus dévié que le rouge. Deux réfractions (à l'entrée et à la sortie du prisme) suffisent à étaler tout l'éventail." },
          { type: "attention", text: "Le prisme ne FABRIQUE pas les couleurs : il SÉPARE les couleurs que la lumière blanche contient déjà !" },
        ],
      },
      {
        titre: "2. Le spectre et l'arc-en-ciel",
        blocs: [
          { type: "definition", def: "Le spectre de la lumière blanche est l'ensemble des couleurs obtenues par sa décomposition : violet, indigo, bleu, vert, jaune, orangé et rouge.",
            simple: "« décomposer », c'est séparer sans rien détruire : le prisme trie les couleurs déjà présentes. Elles passent insensiblement de l'une à l'autre ; le violet est le plus dévié, le rouge le moins." },
          { type: "para", text: "L'arc-en-ciel, c'est le spectre du Soleil fabriqué par les gouttes de pluie ! Chaque goutte agit comme un mini-prisme : réfraction en entrant, réflexion au fond, réfraction en sortant." },
          { type: "para", text: "Pour voir un arc-en-ciel, il faut avoir le Soleil DANS LE DOS : cherche-le après l'averse, face aux nuages qui s'éloignent !" },
        ],
      },
      {
        titre: "3. Au-delà du visible",
        blocs: [
          { type: "puces", items: [
            [{ text: "l'infrarouge (IR) : ", bold: true }, { text: "au-delà du rouge — invisible, il transporte de la chaleur (braises, télécommandes) ;" }],
            [{ text: "l'ultraviolet (UV) : ", bold: true }, { text: "au-delà du violet — invisible, il brunit et brûle la peau (prudence au soleil !)." }],
          ]},
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Dans le spectre, quelle couleur est la plus déviée ? La moins déviée ?",
            calcul: [
              "Le violet est le plus dévié de sa direction.",
              "Le rouge est le moins dévié.",
            ],
            reponse: "Violet : le plus dévié ; rouge : le moins dévié.",
            phrase: "Entre les deux : tout l'éventail des couleurs.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Amina affirme : « Le prisme fabrique les couleurs. » Réfute cette phrase avec deux arguments expérimentaux.",
            calcul: [
              "1) Un second prisme inversé recompose du BLANC : s'il fabriquait des couleurs, il en ferait d'autres !",
              "2) Une lumière déjà rouge traversant un prisme reste rouge : rien à trier.",
            ],
            reponse: "Le prisme SÉPARE des couleurs qui existent déjà.",
          },
          { type: "saisTu", text: "C'est Isaac Newton, en 1666, qui perça le secret avec deux prismes : le premier étalait les couleurs, le second les recombinait en lumière blanche ! Newton choisit de compter sept couleurs — comme les sept notes de musique — alors que le spectre est en réalité continu." },
          { type: "saisTu", text: "En analysant le spectre de la lumière des étoiles, les astronomes lisent leur composition chimique, leur température et même leur vitesse — sans jamais les toucher ! L'hélium a d'ailleurs été découvert dans le spectre du Soleil (hélios en grec) avant d'être trouvé sur Terre." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'arc-en-ciel de plafond",
      intro: "Fabrique un prisme liquide avec une bassine et un miroir !",
      materiel: [
        "une bassine d'eau ;",
        "un miroir de poche ;",
        "le soleil du matin et un mur (ou plafond) clair ;",
        "un CD pour la variante.",
      ],
      etapes: [
        "Remplis la bassine et cale le miroir incliné dedans, face au soleil.",
        "Oriente le reflet vers le mur ou le plafond clair.",
        "Ajuste lentement l'inclinaison du miroir jusqu'à voir la bande colorée.",
        "Variante : incline un CD au soleil et observe les reflets.",
      ],
      observation: "Un spectre complet apparaît sur le mur : violet d'un côté, rouge de l'autre. Le CD étale lui aussi de vraies irisations.",
      conclusion: "L'eau au-dessus du miroir forme un prisme liquide : la lumière blanche du Soleil contient toutes les couleurs, et une simple bassine suffit à le prouver !",
    },
  },

  // ================= SÉANCE 24 =================
  24: {
    objectifs: [
      "Expliquer la couleur d'un objet par ce qu'il renvoie et absorbe.",
      "Prévoir l'effet d'un filtre coloré.",
      "Prévoir la couleur perçue selon l'éclairage.",
    ],
    motsCles: ["diffuse", "absorbe", "filtre", "lumière blanche", "couleur perçue", "renvoie"],
    sections: [
      {
        titre: "1. Pourquoi un objet a-t-il une couleur ?",
        blocs: [
          { type: "definition", def: "La couleur d'un objet est celle des lumières qu'il diffuse ; les autres lumières reçues sont absorbées.",
            simple: "« diffuser » = renvoyer dans toutes les directions ; « absorber » = garder (et transformer en chaleur). La couleur d'un objet, c'est simplement ce qu'il renvoie de la lumière reçue." },
          { type: "tableau", titres: ["Objet", "Ce qu'il fait"], lignes: [
            ["Objet rouge", "renvoie le rouge, absorbe le reste"],
            ["Objet blanc", "renvoie toutes les couleurs"],
            ["Objet noir", "absorbe tout (il chauffe au soleil !)"],
          ]},
          { type: "attention", text: "La couleur n'est pas DANS l'objet : elle naît de la rencontre entre la lumière reçue et la matière. Change la lumière, la couleur change !" },
        ],
      },
      {
        titre: "2. Les filtres colorés",
        blocs: [
          { type: "para", text: "Un filtre coloré ne laisse passer que la lumière de sa couleur et absorbe les autres : un filtre rouge ne transmet que du rouge." },
          { type: "para", text: "Filtre et objet obéissent à la même logique : l'un trie la lumière TRANSMISE, l'autre la lumière RENVOYÉE. Ce qui n'est pas gardé est absorbé (et devient chaleur)." },
        ],
      },
      {
        titre: "3. La couleur dépend de l'éclairage",
        blocs: [
          { type: "para", text: "Un objet ne peut renvoyer que les couleurs qu'il reçoit ! Un tissu vert éclairé en lumière rouge paraît noir : il reçoit du rouge, et ne sait renvoyer que du vert." },
          { type: "para", text: "La règle en deux questions : 1) Que reçoit l'objet ? 2) Que peut-il renvoyer ? Ce qui est renvoyé fait la couleur perçue." },
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Un drapeau blanc et rouge est éclairé en lumière rouge. Quelles couleurs voit-on ?",
            calcul: [
              "partie blanche : reçoit du rouge, sait tout renvoyer → renvoie du rouge",
              "partie rouge : renvoie aussi le rouge",
            ],
            reponse: "Le drapeau paraît entièrement rouge !",
            phrase: "Impossible de distinguer les deux zones.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Pourquoi un citron vert paraît-il noir derrière un filtre rouge ?",
            calcul: [
              "le filtre rouge ne laisse passer que du rouge",
              "le citron vert ne sait renvoyer que du vert",
              "il reçoit du rouge, l'absorbe tout, ne renvoie rien",
            ],
            reponse: "L'œil perçoit du NOIR.",
            phrase: "Deux tris successifs sans couleur commune = noir.",
          },
          { type: "saisTu", text: "Pourquoi porte-t-on du blanc en été et du sombre en hiver ? Le blanc renvoie presque toute la lumière du soleil : il reste frais. Le noir l'absorbe et la transforme en chaleur. Les toits blanchis à la chaux des pays chauds appliquent cette physique… depuis des siècles !" },
          { type: "saisTu", text: "Les lampes orangées de certains éclairages publics rendaient toutes les voitures grises ou orange : impossible de distinguer un véhicule bleu d'un vert la nuit ! Les témoins d'accidents se trompaient souvent de couleur. L'éclairage moderne à DEL blanches a rendu leurs couleurs aux villes." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la boîte à couleurs",
      intro: "Observe le monde à travers des filtres de bonbons !",
      materiel: [
        "une boîte en carton et des ciseaux ;",
        "des objets colorés variés (bouchons, tissus, papiers) ;",
        "du cellophane rouge, vert et bleu (emballages de bonbons) ;",
        "une lampe de poche.",
      ],
      etapes: [
        "Découpe une fenêtre dans la boîte et tapisse le fond d'objets colorés.",
        "Couvre la fenêtre du cellophane rouge et éclaire à travers : note la couleur perçue de chaque objet.",
        "Recommence avec le vert, puis le bleu.",
        "Dresse le tableau final : objet réel / couleur sous chaque filtre.",
      ],
      observation: "Les objets de la couleur du filtre restent éclatants. Les autres s'assombrissent ; certains paraissent franchement noirs (le bleu sous filtre rouge !).",
      conclusion: "La couleur perçue dépend de la lumière reçue ET de ce que l'objet sait renvoyer : la « vraie » couleur n'existe qu'en lumière blanche.",
    },
  },

  // ================= SÉANCE 25 =================
  25: {
    objectifs: [
      "Expliquer la recomposition avec le disque de Newton.",
      "Définir fréquence et longueur d'onde.",
      "Utiliser la relation v = λ × f.",
    ],
    motsCles: ["disque de Newton", "persistance", "recompose", "fréquence", "longueur d'onde", "hertz", "période", "onde"],
    sections: [
      {
        titre: "1. Le disque de Newton",
        blocs: [
          { type: "para", text: "C'est un disque divisé en secteurs peints aux sept couleurs du spectre. Fais-le tourner très vite : il paraît blanc grisâtre. Les couleurs se recomposent !" },
          { type: "para", text: "L'explication : l'œil garde chaque image environ un dixième de seconde (la persistance des impressions lumineuses). Si le disque montre toutes ses couleurs en moins d'un dixième de seconde, l'œil les additionne au lieu de les distinguer." },
          { type: "para", text: "La boucle est bouclée : le prisme décompose la lumière blanche (S23), les objets et filtres la trient (S24), le disque de Newton la recompose (S25). Le blanc contient tout !" },
        ],
      },
      {
        titre: "2. Lumière et son : des ondes",
        blocs: [
          { type: "para", text: "La lumière et le son sont des ondes : des vibrations qui se propagent, comme les rides à la surface de l'eau." },
          { type: "definition", def: "La fréquence f d'une onde est le nombre de vibrations effectuées par seconde ; elle se mesure en hertz (Hz). La longueur d'onde λ est la distance parcourue par l'onde pendant une période.",
            simple: "la « période » est la durée d'une seule vibration. Fréquence élevée = vibrations rapides ; grande longueur d'onde = vagues très espacées." },
          { type: "para", text: "Trois grandeurs décrivent donc une onde :" },
          { type: "puces", items: [
            [{ text: "la période T : ", bold: true }, { text: "la durée d'une vibration, en secondes ;" }],
            [{ text: "la fréquence f : ", bold: true }, { text: "le nombre de vibrations par seconde, en hertz (Hz) — f = 1 ÷ T ;" }],
            [{ text: "la longueur d'onde λ (lambda) : ", bold: true }, { text: "la distance parcourue par l'onde pendant une période, en mètres." }],
          ]},
          { type: "image", src: "img_v2_s25_onde.png", w: 540, h: 252, legende: "Figure A — La longueur d'onde λ : la distance entre deux crêtes." },
          { type: "formule", formule: "v = λ × f", legendes: [
            [{ text: "v", bold: true, color: "2E7D32" }, { text: " = la vitesse de l'onde, en m/s" }],
            [{ text: "λ", bold: true, color: "2E7D32" }, { text: " = la longueur d'onde, en mètres (m)" }],
            [{ text: "f", bold: true, color: "2E7D32" }, { text: " = la fréquence, en hertz (Hz)" }],
          ]},
          { type: "attention", text: "Ne confonds pas les deux vitesses ! Le son : environ 340 m/s dans l'air. La lumière : 300 000 km/s (3 × 10⁸ m/s), presque un million de fois plus vite. C'est pourquoi l'éclair arrive avant le tonnerre !" },
          { type: "puces", items: [
            "lumière visible : du violet (≈ 400 nm) au rouge (≈ 800 nm) ;",
            "son : plus la fréquence est grande, plus le son est aigu — l'oreille perçoit de 20 Hz à 20 000 Hz ;",
            "exemple : le la du diapason vibre à 440 Hz → λ = 340 ÷ 440 ≈ 0,77 m.",
          ]},
        ],
      },
      {
        titre: "3. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Le disque de Rija tourne lentement : il voit encore les couleurs défiler. Que doit-il changer, et pourquoi ?",
            calcul: [
              "Il faut que le cycle des 7 couleurs dure moins d'un dixième de seconde.",
              "Donc plus de dix tours par seconde environ.",
            ],
            reponse: "Tourner PLUS VITE.",
            phrase: "En dessous, l'œil suit chaque couleur ; au-dessus, il les fusionne en blanc grisâtre.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Pourquoi le disque paraît-il blanc GRISÂTRE et jamais blanc pur ?",
            calcul: [
              "Les peintures ne sont pas parfaites : chaque secteur absorbe une partie de la lumière (leçon S24 !).",
              "La somme des couleurs affaiblies donne un blanc assombri.",
            ],
            reponse: "Du gris clair.",
            phrase: "Avec de vraies lumières colorées superposées, le blanc serait pur.",
          },
          { type: "exemple", titre: "Exemple 3",
            enonce: "Une station de radio émet à la fréquence f = 100 MHz (100 × 10⁶ Hz). Les ondes radio se propagent à 3 × 10⁸ m/s. Calcule la longueur d'onde.",
            calcul: [
              "λ = v ÷ f",
              "λ = (3 × 10⁸) ÷ (100 × 10⁶)",
            ],
            reponse: "λ = 3 m",
            phrase: "Voilà pourquoi les antennes FM mesurent quelques mètres : leur taille est liée à la longueur d'onde !",
          },
          { type: "saisTu", text: "Le cinéma exploite la même persistance des impressions que le disque de Newton : 24 images fixes par seconde suffisent pour que l'œil voie un mouvement continu ! Dessins animés, écrans et téléviseurs : toute l'image animée repose sur cette « lenteur » de notre œil." },
          { type: "saisTu", text: "L'écran de ton téléphone recompose toutes ses couleurs avec seulement TROIS lumières : rouge, verte et bleue ! Chaque pixel est un trio de points minuscules dont l'œil additionne les éclats. Le blanc de l'écran, c'est rouge + vert + bleu à pleine puissance. Newton aurait adoré !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : fabrique ton disque de Newton",
      intro: "Recompose la lumière blanche avec du carton et des crayons de couleur !",
      materiel: [
        "un carton rigide, un compas, des ciseaux ;",
        "des crayons ou peintures des 7 couleurs ;",
        "une ficelle solide (ou un crayon pour la variante toupie).",
      ],
      etapes: [
        "Découpe un disque de 10 cm et divise-le en 7 secteurs égaux (environ 51° chacun).",
        "Colorie-les : violet, indigo, bleu, vert, jaune, orangé, rouge.",
        "Perce deux trous près du centre, passe la ficelle en boucle : torsade puis tire en rythme.",
        "Observe le disque à pleine vitesse, puis pendant qu'il ralentit.",
      ],
      observation: "À grande vitesse, les couleurs fondent en blanc grisâtre. Au ralentissement, elles réapparaissent une à une.",
      conclusion: "L'œil additionne les couleurs présentées plus vite que sa persistance : les sept couleurs du spectre recomposent bien la lumière blanche.",
    },
  },
};
