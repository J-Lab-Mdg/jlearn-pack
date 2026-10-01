// lecons-v2/u4.js — Unité 4 CHIMIE, leçons reformulées « nouvelle maquette lisible »

module.exports = {

  // ================= SÉANCE 28 =================
  28: {
    objectifs: [
      "Comprendre ce qu'est une mole.",
      "Calculer avec la masse molaire : n = m ÷ M.",
      "Utiliser le volume molaire des gaz : 22,4 L.",
    ],
    motsCles: ["mole", "nombre d'Avogadro", "masse molaire", "volume molaire", "entités", "conditions normales"],
    sections: [
      {
        titre: "1. La mole : le paquet du chimiste",
        blocs: [
          { type: "para", text: "Les atomes sont bien trop petits pour être comptés un par un. Alors les chimistes les comptent par paquets ! Un paquet s'appelle une mole." },
          { type: "para", text: "Une mole contient toujours 6,02 × 10²³ entités (atomes, molécules ou ions). Ce nombre géant s'appelle le nombre d'Avogadro." },
          { type: "para", text: "C'est la même idée qu'au marché : on ne compte pas les grains de riz un à un, on les vend au kapoaka ! La mole est le « kapoaka » du chimiste : un paquet toujours identique, assez gros pour être pesé." },
          { type: "image", src: "img_v2_s28_mole.png", w: 540, h: 259, legende: "Figure A — Trois tas très différents, mais le même nombre de molécules dans chacun !" },
        ],
      },
      {
        titre: "2. La masse molaire : combien pèse une mole ?",
        blocs: [
          { type: "para", text: "La masse molaire M, c'est la masse d'une mole, en grammes par mole (g/mol). Quelques valeurs à connaître : H : 1 ; C : 12 ; N : 14 ; O : 16 ; Na : 23 ; S : 32 ; Cl : 35,5 ; Fe : 56." },
          { type: "para", text: "Pour une molécule, on additionne : M(H₂O) = 2 × 1 + 16 = 18 g/mol. M(CO₂) = 12 + 2 × 16 = 44 g/mol." },
          { type: "formule", formule: "n = m ÷ M", legendes: [
            [{ text: "n", bold: true, color: "2E7D32" }, { text: " = le nombre de moles, en mol" }],
            [{ text: "m", bold: true, color: "2E7D32" }, { text: " = la masse, en grammes (g)" }],
            [{ text: "M", bold: true, color: "2E7D32" }, { text: " = la masse molaire, en g/mol — et à l'envers : m = n × M" }],
          ]},
          { type: "exemple", titre: "Exemple 1",
            enonce: "Combien de moles dans 9 g d'eau ? Et quelle masse pèsent 3 mol de sel NaCl ?",
            calcul: [
              "M(H₂O) = 2 × 1 + 16 = 18 g/mol",
              "n = m ÷ M = 9 ÷ 18 = 0,5 mol",
              "M(NaCl) = 23 + 35,5 = 58,5 g/mol",
              "m = n × M = 3 × 58,5",
            ],
            reponse: "n = 0,5 mol ; m = 175,5 g",
          },
        ],
      },
      {
        titre: "3. Le volume molaire des gaz",
        blocs: [
          { type: "para", text: "Dans les conditions normales de température et de pression, une mole de n'importe quel gaz occupe 22,4 litres." },
          { type: "formule", formule: "n = V ÷ 22,4", legendes: [
            [{ text: "V en litres (L) — valable pour TOUS les gaz !" }],
          ]},
          { type: "attention", text: "22,4 L valent pour tous les gaz : une mole de dioxygène, de méthane ou de CO₂ occupe le même volume ! Mais cette règle ne vaut que pour les gaz, jamais pour les liquides ni les solides." },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Quel volume occupent 8 g de dioxygène O₂ aux conditions normales ?",
            calcul: [
              "M(O₂) = 2 × 16 = 32 g/mol",
              "n = 8 ÷ 32 = 0,25 mol",
              "V = n × 22,4 = 0,25 × 22,4",
            ],
            reponse: "V = 5,6 L",
            phrase: "Le chemin masse → moles → volume passe TOUJOURS par les moles : c'est la plaque tournante de la chimie !",
          },
          { type: "saisTu", text: "6,02 × 10²³, c'est inimaginable : si toute la population de la Terre comptait un grain par seconde, jour et nuit, il faudrait plus de deux millions d'années pour compter une seule mole de grains de riz ! Et pourtant, une mole d'eau tient dans trois cuillères à soupe." },
          { type: "saisTu", text: "Amedeo Avogadro, avocat italien devenu physicien, émit son hypothèse sur les gaz en 1811… et personne ne le crut pendant cinquante ans ! Le nombre qui porte son nom ne fut mesuré qu'après sa mort. Depuis 2019, il est même FIXÉ par définition : c'est lui qui définit la mole." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : pèse une mole !",
      intro: "Une mole d'eau, de sel et de sucre, côte à côte sur la table de la cuisine.",
      materiel: [
        "une balance de cuisine ;",
        "un verre gradué ;",
        "de l'eau, du sel, du sucre.",
      ],
      etapes: [
        "Pèse 18 g d'eau (18 mL) : voilà UNE mole d'eau.",
        "Pèse 58,5 g de sel : une mole de NaCl.",
        "Pèse 342 g de sucre (saccharose) : encore une mole !",
        "Aligne les trois tas côte à côte et compare.",
      ],
      observation: "Trois tas de tailles très différentes : trois cuillères d'eau, une petite poignée de sel, un tiers de kilo de sucre… et pourtant le MÊME nombre de molécules dans chacun !",
      conclusion: "La mole compte toujours 6,02 × 10²³ entités. C'est la masse molaire, propre à chaque espèce chimique, qui change d'un tas à l'autre.",
    },
  },

  // ================= SÉANCE 29 =================
  29: {
    objectifs: [
      "Reconnaître une réaction chimique (un corps nouveau apparaît).",
      "Écrire et équilibrer une équation-bilan.",
      "Établir les bilans molaire et massique.",
    ],
    motsCles: ["réaction chimique", "équation-bilan", "équilibrée", "conservation", "sulfure de fer", "coefficients"],
    sections: [
      {
        titre: "1. La réaction fer + soufre",
        blocs: [
          { type: "para", text: "Chauffe un mélange de fer et de soufre : il s'embrase et donne un corps nouveau, le sulfure de fer FeS, qui n'est plus attiré par l'aimant. Une réaction chimique a eu lieu !" },
          { type: "para", text: "Avant le chauffage, le mélange est encore séparable : l'aimant retire le fer. Après la réaction, plus rien à séparer : un CORPS NOUVEAU est né, avec des propriétés nouvelles. C'est le signe sûr d'une transformation chimique." },
        ],
      },
      {
        titre: "2. L'équation-bilan",
        blocs: [
          { type: "para", text: "On écrit la réaction avec les formules chimiques : Fe + S → FeS. L'équation doit être équilibrée : chaque sorte d'atome est en nombre égal des deux côtés, car les atomes se réarrangent sans jamais disparaître." },
          { type: "para", text: "La méthode d'équilibrage, en quatre étapes :" },
          { type: "puces", items: [
            "1. écris les formules correctes (on ne les modifie JAMAIS) ;",
            "2. compte chaque sorte d'atome des deux côtés ;",
            "3. ajuste uniquement les coefficients devant les formules ;",
            "4. recompte pour vérifier.",
          ]},
        ],
      },
      {
        titre: "3. Les bilans : moles et masses",
        blocs: [
          { type: "image", src: "img_v2_s29_bilan.png", w: 540, h: 253, legende: "Figure A — La masse totale se conserve : 56 g + 32 g = 88 g." },
          { type: "puces", items: [
            [{ text: "bilan molaire : ", bold: true }, { text: "1 mol Fe + 1 mol S → 1 mol FeS ;" }],
            [{ text: "bilan massique : ", bold: true }, { text: "56 g + 32 g → 88 g (la masse totale se conserve) ;" }],
            [{ text: "pour un gaz : ", bold: true }, { text: "1 mol = 22,4 L aux conditions normales (bilan volumique)." }],
          ]},
          { type: "exemple", titre: "Exemple 1",
            enonce: "Équilibre la combustion du carbone dans le dioxygène, puis établis le bilan massique pour 12 g de carbone.",
            calcul: [
              "C + O₂ → CO₂ (déjà équilibrée : 1 C et 2 O de chaque côté)",
              "bilan molaire : 1 mol C + 1 mol O₂ → 1 mol CO₂",
              "bilan massique : 12 g + 32 g → 44 g",
            ],
            reponse: "12 + 32 = 44 : la masse se conserve !",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "On fait réagir 28 g de fer avec du soufre. Quelle masse de soufre faut-il ? Quelle masse de FeS obtient-on ?",
            calcul: [
              "n(Fe) = 28 ÷ 56 = 0,5 mol",
              "il faut autant de moles de soufre : m(S) = 0,5 × 32 = 16 g",
              "on obtient 0,5 mol de FeS : m(FeS) = 0,5 × 88",
            ],
            reponse: "m(S) = 16 g ; m(FeS) = 44 g",
            phrase: "Contrôle : 28 + 16 = 44 g. Lavoisier est content !",
          },
          { type: "saisTu", text: "« Rien ne se perd, rien ne se crée, tout se transforme » : la célèbre loi de conservation de la masse fut établie par Antoine Lavoisier vers 1785, à force de pesées d'une précision maniaque. Toute équation-bilan que tu équilibres rend hommage à sa balance !" },
          { type: "saisTu", text: "Les hauts fourneaux, les cimenteries et les usines d'engrais calculent leurs approvisionnements avec des équations-bilans géantes : combien de tonnes de minerai pour tant de tonnes de fer ? La question de ton exercice, multipliée par un million !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la conservation en direct (avec un adulte)",
      intro: "Vérifie la loi de Lavoisier avec un citron et un ballon de baudruche !",
      materiel: [
        "une balance de cuisine ;",
        "un citron et du bicarbonate de soude ;",
        "une petite bouteille ;",
        "un ballon de baudruche.",
      ],
      etapes: [
        "Pèse ensemble le citron et une cuillère de bicarbonate : note la masse totale.",
        "Dans la bouteille, verse le jus sur le bicarbonate et coiffe aussitôt du ballon.",
        "Repèse l'ensemble fermé pendant que ça mousse.",
        "Ouvre le ballon et repèse une dernière fois.",
      ],
      observation: "Ça mousse, le ballon gonfle (du CO₂ se forme). Fermé, la masse n'a PAS changé. Ouvert, la masse diminue : le gaz s'est échappé dans l'air.",
      conclusion: "Les atomes se réarrangent sans disparaître : la masse se conserve tant que rien ne s'échappe. La balance de Lavoisier ne ment jamais !",
    },
  },

  // ================= SÉANCE 30 =================
  30: {
    objectifs: [
      "Connaître la famille des alcanes : CnH2n+2.",
      "Écrire et équilibrer une combustion complète.",
      "Reconnaître la combustion incomplète et ses dangers.",
    ],
    motsCles: ["alcanes", "hydrocarbures", "combustion complète", "combustion incomplète", "monoxyde de carbone", "méthane", "butane"],
    sections: [
      {
        titre: "1. La famille des alcanes",
        blocs: [
          { type: "para", text: "Les alcanes sont des hydrocarbures : des molécules faites uniquement de carbone et d'hydrogène. Leur formule générale :" },
          { type: "formule", formule: "CnH2n+2", legendes: [
            [{ text: "méthane CH₄ • éthane C₂H₆ • propane C₃H₈ • butane C₄H₁₀ (le gaz en bouteille)" }],
          ]},
          { type: "para", text: "La formule générale est une machine à fabriquer les formules : pour n = 5, C₅H₁₂ (pentane) ; pour n = 8, C₈H₁₈ (octane, dans l'essence). Vérifie toujours : deux fois le carbone, plus deux !" },
        ],
      },
      {
        titre: "2. La combustion complète : flamme bleue",
        blocs: [
          { type: "para", text: "Avec assez de dioxygène, l'alcane brûle avec une flamme bleue. Les produits : du dioxyde de carbone et de l'eau. Exemple : CH₄ + 2 O₂ → CO₂ + 2 H₂O." },
          { type: "para", text: "Pour équilibrer une combustion, suis toujours le même ordre :" },
          { type: "puces", items: [
            "1. équilibre le carbone (autant de CO₂ que de C) ;",
            "2. équilibre l'hydrogène (H₂O = la moitié des H) ;",
            "3. compte les O nécessaires et ajuste le O₂ en dernier.",
          ]},
          { type: "exemple", titre: "Exemple 1",
            enonce: "Équilibre la combustion complète du propane C₃H₈.",
            calcul: [
              "étape 1 : 3 carbones → 3 CO₂",
              "étape 2 : 8 hydrogènes → 4 H₂O",
              "étape 3 : à droite, 6 + 4 = 10 atomes O, soit 5 O₂",
            ],
            reponse: "C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O",
            phrase: "Recompte final : C : 3 = 3 ; H : 8 = 8 ; O : 10 = 10. Parfait !",
          },
        ],
      },
      {
        titre: "3. La combustion incomplète : danger !",
        blocs: [
          { type: "para", text: "Si le dioxygène manque : flamme jaune, dépôt de carbone (la suie)… et du monoxyde de carbone CO, un gaz invisible et inodore qui se fixe sur le sang à la place du dioxygène. C'est l'asphyxie mortelle." },
          { type: "image", src: "img_v2_s30_flammes.png", w: 520, h: 289, legende: "Figure A — Flamme bleue : combustion complète. Flamme jaune + suie : combustion incomplète." },
          { type: "puces", items: [
            "toujours aérer la pièce où brûle un réchaud ou un charbon ;",
            "flamme jaune + marmite noircie = brûleur à régler ;",
            "jamais de braises ni de réchaud dans une chambre fermée.",
          ]},
          { type: "exemple", titre: "Exemple 2",
            enonce: "La marmite de Voahangy noircit et la flamme du réchaud à gaz est jaune. Diagnostique et conseille.",
            calcul: [
              "suie + flamme jaune = combustion INCOMPLÈTE",
              "le brûleur manque de dioxygène (trous encrassés ou air mal réglé)",
            ],
            reponse: "Nettoyer le brûleur, rouvrir l'arrivée d'air, aérer !",
            phrase: "Le CO invisible accompagne souvent la suie visible.",
          },
          { type: "saisTu", text: "Le méthane est aussi le « biogaz » : dans les digesteurs, les bouses de zébu et les déchets fermentent à l'abri de l'air et libèrent du CH₄ que l'on brûle pour cuisiner ! Plusieurs villages malgaches s'éclairent déjà grâce à leurs zébus : l'énergie est dans la bouse." },
          { type: "saisTu", text: "Le monoxyde de carbone est surnommé le « tueur silencieux » : sans couleur, sans odeur, il se fixe sur l'hémoglobine 200 fois mieux que le dioxygène ! Un seul réflexe sauve : AÉRER, toujours, partout où quelque chose brûle." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : la bougie détective (avec un adulte)",
      intro: "Trois gestes pour prouver ce que produit une flamme !",
      materiel: [
        "une bougie et des allumettes (adulte) ;",
        "une soucoupe bien froide ;",
        "un bocal ;",
        "de l'eau de chaux (eau + chaux éteinte décantée).",
      ],
      etapes: [
        "Tiens la soucoupe froide 2 secondes AU-DESSUS de la flamme.",
        "Tiens-la maintenant 2 secondes DANS la flamme jaune.",
        "Verse un fond d'eau de chaux dans le bocal et coiffe la bougie allumée.",
        "Interprète chaque indice.",
      ],
      observation: "Au-dessus : de la buée (l'eau de combustion). Dans la flamme : un rond noir (du carbone : combustion incomplète au cœur de la flamme). Sous le bocal : la flamme meurt et l'eau de chaux se trouble (CO₂).",
      conclusion: "La bougie brûle comme un alcane : eau + CO₂ en combustion complète, suie dès que l'air manque. Trois preuves en trois gestes !",
    },
  },

  // ================= SÉANCE 31 =================
  31: {
    objectifs: [
      "Définir solution, soluté, solvant, saturation.",
      "Calculer les concentrations : Cm = m ÷ V et C = n ÷ V.",
      "Reconnaître une solution ionique (test de conduction).",
    ],
    motsCles: ["solution aqueuse", "soluté", "solvant", "saturée", "concentration massique", "concentration molaire", "ions"],
    sections: [
      {
        titre: "1. La solution aqueuse",
        blocs: [
          { type: "para", text: "Dissoudre un soluté (solide, liquide ou gaz) dans le solvant eau donne une solution aqueuse. Quand l'eau n'accepte plus de soluté, la solution est saturée." },
        ],
      },
      {
        titre: "2. Les concentrations",
        blocs: [
          { type: "formule", formule: "Cm = m ÷ V", legendes: [
            [{ text: "Cm", bold: true, color: "2E7D32" }, { text: " = la concentration massique, en g/L" }],
            [{ text: "m en grammes, V en litres" }],
          ]},
          { type: "formule", formule: "C = n ÷ V", legendes: [
            [{ text: "C", bold: true, color: "2E7D32" }, { text: " = la concentration molaire, en mol/L" }],
            [{ text: "le pont entre les deux : Cm = C × M" }],
          ]},
          { type: "para", text: "On note [X] la concentration molaire de l'espèce X : [Na⁺], [Cl⁻]… Bien lire les unités : g/L se calcule avec la masse ; mol/L avec le nombre de moles." },
          { type: "exemple", titre: "Exemple 1",
            enonce: "On dissout 11,7 g de NaCl dans 500 mL d'eau. Calcule Cm puis C (M = 58,5 g/mol).",
            image: { src: "img_v2_s31_concentration.png", w: 500, h: 261, legende: "Figure A — 11,7 g de sel dans 0,5 L d'eau." },
            calcul: [
              "V = 0,5 L",
              "Cm = m ÷ V = 11,7 ÷ 0,5 = 23,4 g/L",
              "n = 11,7 ÷ 58,5 = 0,2 mol",
              "C = n ÷ V = 0,2 ÷ 0,5",
            ],
            reponse: "Cm = 23,4 g/L ; C = 0,4 mol/L",
            phrase: "Vérification : Cm = C × M = 0,4 × 58,5 = 23,4 g/L. Tout concorde !",
          },
        ],
      },
      {
        titre: "3. Les solutions ioniques",
        blocs: [
          { type: "para", text: "Une solution conduit le courant si la dissolution a libéré des ions mobiles : NaCl → Na⁺ + Cl⁻. C'est une solution ionique." },
          { type: "attention", text: "« Dissous » ne veut pas dire « ionique » ! Le sucre se dissout parfaitement, mais reste en molécules neutres : sa solution ne conduit pas le courant. Seule la présence d'IONS libres fait passer le courant." },
          { type: "exemple", titre: "Exemple 2",
            enonce: "Quelle masse de sucre (M = 342 g/mol) faut-il pour préparer 2 L de solution à 0,1 mol/L ? Cette solution conduira-t-elle le courant ?",
            calcul: [
              "n = C × V = 0,1 × 2 = 0,2 mol",
              "m = n × M = 0,2 × 342",
            ],
            reponse: "m = 68,4 g ; et NON, elle ne conduit pas.",
            phrase: "Le sucre se dissout en molécules neutres, sans ions : la lampe du test reste éteinte.",
          },
          { type: "saisTu", text: "La solution de réhydratation orale (eau + sucre + sel aux bonnes concentrations) sauve chaque année des millions d'enfants atteints de diarrhée : l'OMS la classe parmi les plus grandes découvertes médicales du 20e siècle. Une simple question de concentration !" },
          { type: "saisTu", text: "L'eau de mer du canal de Mozambique contient environ 35 g de sels par litre : les salines de Toliara la concentrent au soleil, bassin après bassin, jusqu'à la saturation (360 g/L)… et le sel cristallise ! Les paludiers pilotent des concentrations sans le savoir." },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : prépare une vraie SRO",
      intro: "Fabrique la solution de réhydratation qui sauve le plus de vies au monde !",
      materiel: [
        "1 L d'eau bouillie puis refroidie (bouteille graduée) ;",
        "du sucre et du sel ;",
        "une cuillère à café ;",
        "un récipient propre.",
      ],
      etapes: [
        "Verse le litre d'eau exactement dans le récipient propre.",
        "Ajoute 6 cuillères à café rases de sucre (≈ 25 g) et une demi-cuillère de sel (≈ 3 g) : remue jusqu'à dissolution complète.",
        "Calcule tes concentrations massiques.",
        "Goûte une gorgée : contrôle qualité !",
      ],
      observation: "Tout se dissout, la solution est limpide. Concentrations : sucre ≈ 25 g/L, sel ≈ 3 g/L. Au goût, « pas plus salée que les larmes » : exactement le contrôle des centres de santé.",
      conclusion: "Une concentration se prépare, se calcule et se contrôle : tu viens de fabriquer, avec la précision d'un chimiste, la solution qui sauve le plus de vies au monde.",
    },
  },

  // ================= SÉANCE 32 =================
  32: {
    objectifs: [
      "Classer une solution avec l'échelle de pH.",
      "Utiliser le BBT et les indicateurs naturels.",
      "Expliquer la neutralisation : H⁺ + OH⁻ → H₂O.",
    ],
    motsCles: ["pH", "acide", "basique", "neutre", "BBT", "neutralisation", "indicateur coloré"],
    sections: [
      {
        titre: "1. L'échelle de pH",
        blocs: [
          { type: "para", text: "Le pH, un nombre de 0 à 14, classe toutes les solutions :" },
          { type: "puces", items: [
            [{ text: "pH < 7 : ", bold: true }, { text: "solution acide (les ions H⁺ dominent) ;" }],
            [{ text: "pH = 7 : ", bold: true }, { text: "solution neutre ;" }],
            [{ text: "pH > 7 : ", bold: true }, { text: "solution basique (les ions OH⁻ dominent)." }],
          ]},
          { type: "image", src: "img_v2_s32_ph.png", w: 560, h: 235, legende: "Figure A — L'échelle de pH et quelques repères de la vie courante." },
          { type: "attention", text: "Les DEUX extrémités de l'échelle brûlent : l'acide fort (pH 0) comme la base forte (pH 14) ! Plus on s'éloigne de 7, plus la solution est dangereuse." },
        ],
      },
      {
        titre: "2. Le BBT et les indicateurs colorés",
        blocs: [
          { type: "para", text: "Le bleu de bromothymol (BBT) prend trois couleurs : jaune en milieu acide, vert au neutre, bleu en milieu basique. À défaut, le jus de bougainvillée ou de chou rouge change aussi de couleur selon le milieu !" },
        ],
      },
      {
        titre: "3. La neutralisation",
        blocs: [
          { type: "para", text: "Verser une base dans un acide (ou l'inverse) fait réagir les ions :" },
          { type: "formule", formule: "H⁺ + OH⁻ → H₂O", legendes: [
            [{ text: "acide + base → sel + eau" }],
          ]},
          { type: "para", text: "Pour HCl + NaOH, les ions Na⁺ et Cl⁻ restent « spectateurs » : ils assistent à la réaction sans y participer. Au point neutre (pH = 7), il ne reste que de l'eau salée ! Après évaporation : du sel NaCl." },
          { type: "puces", items: [
            "sécurité : jamais d'acide ou de base concentrés sans adulte ; rincer abondamment en cas de contact ;",
            "applications : comprimé contre les brûlures d'estomac, chaulage des sols acides.",
          ]},
        ],
      },
      {
        titre: "4. Des exemples pour bien comprendre",
        blocs: [
          { type: "exemple", titre: "Exemple 1",
            enonce: "Trois verres contiennent du jus de citron, de l'eau pure et de l'eau de cendre. Le BBT y prend les couleurs jaune, verte et bleue. Attribue chaque pH : 2 ; 7 ; 11.",
            calcul: [
              "jaune = acide → jus de citron, pH 2",
              "vert = neutre → eau pure, pH 7",
              "bleu = basique → eau de cendre, pH 11",
            ],
            reponse: "Citron : 2 ; eau pure : 7 ; eau de cendre : 11.",
            phrase: "Le BBT trie l'échelle en trois zones d'un seul coup d'œil.",
          },
          { type: "exemple", titre: "Exemple 2",
            enonce: "On verse peu à peu de la soude (NaOH) dans de l'acide chlorhydrique contenant du BBT. Décris les couleurs successives, et ce qui reste après évaporation au point vert.",
            calcul: [
              "au départ : JAUNE (milieu acide)",
              "les OH⁻ détruisent peu à peu les H⁺ : H⁺ + OH⁻ → H₂O",
              "au point exact de neutralisation : VERT (pH 7)",
              "une goutte de trop : BLEU (basique)",
            ],
            reponse: "Après évaporation au point vert : du sel NaCl.",
            phrase: "Acide + base → sel + eau !",
          },
          { type: "saisTu", text: "Ton estomac est un réacteur à pH 2 : plus acide que le jus de citron ! Sa paroi se protège par un mucus renouvelé sans cesse. Les fourmis attaquent à l'acide formique, et certaines plantes de la forêt malgache se défendent avec des sucs basiques : la guerre chimique existe dans la nature depuis toujours." },
          { type: "saisTu", text: "Les riziculteurs malgaches pratiquent la neutralisation à l'échelle des champs : sur un sol trop acide, le riz pousse mal ; on épand de la chaux (basique) pour remonter le pH vers la neutralité : c'est le chaulage. Ta réaction H⁺ + OH⁻ → H₂O, version hectares !" },
        ],
      },
    ],
    experience: {
      titre: "Expérience à la maison : l'indicateur bougainvillée",
      intro: "Le BBT du chimiste pousse aussi dans la cour !",
      materiel: [
        "des bractées bien colorées de bougainvillée (ou du chou rouge) ;",
        "de l'eau chaude et un filtre (tissu) ;",
        "trois gobelets ;",
        "du citron et de l'eau de cendre filtrée.",
      ],
      etapes: [
        "Écrase les bractées dans un peu d'eau chaude et filtre : voilà ton indicateur.",
        "Répartis-le dans les trois gobelets : citron dans le premier, eau de cendre dans le deuxième, rien dans le troisième (le témoin).",
        "Neutralisation maison : verse PEU À PEU l'eau de cendre dans le gobelet au citron, en remuant.",
        "Teste d'autres liquides : vinaigre, savon, eau de riz.",
      ],
      observation: "L'indicateur change nettement de couleur en milieu acide et en milieu basique. Pendant la neutralisation, la teinte repasse par celle du témoin : le point neutre !",
      conclusion: "Une simple fleur de jardin détecte acides et bases, et signale même le point de neutralisation.",
    },
  },
};
