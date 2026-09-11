// data-speciales.js — T8 : révisions (10, 18, 26), examens d'unité (11, 19, 27),
// révision+examen combinés (33) et examen blanc final (34)

// ============================================================ S10 — RÉVISION UNITÉ I
const S10 = {
  numero: 10, total: 34, unite: "I", type: "revision",
  titre: "Révision de l'Unité I — Matière",
  image: "images/img_unite1.png",
  imageLegende: "La matière : atomes, molécules, mole et réactions chimiques",
  recap: [
    {
      ref: "Séances 1 à 4 — Éléments, classification, Lewis, familles",
      motsCles: ["élément", "symbole", "formule électronique", "Lewis", "valence", "famille"],
      points: [
        "Un élément chimique est représenté par un symbole : H, O, C, N, S, Cl, Fe, Ca, Cu (majuscule, puis éventuellement minuscule).",
        "Les électrons se répartissent en couches K (2 max), L (8 max), M (8 max pour les 20 premiers éléments) : c'est la formule électronique, ex. Cl : (K)2 (L)8 (M)7.",
        "La représentation de Lewis montre les électrons de la couche externe ; la valence est le nombre de liaisons que peut former l'atome (H : 1, O : 2, N : 3, C : 4).",
        "Le tableau périodique classe les éléments par numéro atomique croissant ; une colonne = une famille aux propriétés voisines (alcalins, halogènes, gaz nobles…).",
      ],
    },
    {
      ref: "Séance 5 — Molécules et liaison covalente",
      motsCles: ["molécule", "liaison covalente", "formule brute"],
      points: [
        "Une molécule est un assemblage d'atomes liés par des liaisons covalentes : mise en commun de paires d'électrons.",
        "La formule brute indique la nature et le nombre des atomes : H2O, CO2, NH3, O2, N2, H2, SO2.",
        "Chaque atome respecte sa valence : l'oxygène forme 2 liaisons, l'azote 3, le carbone 4, l'hydrogène 1.",
      ],
    },
    {
      ref: "Séances 6 et 7 — Mole, masse molaire, volume molaire",
      motsCles: ["mole", "nombre d'Avogadro", "masse molaire", "volume molaire"],
      points: [
        "La mole est le paquet du chimiste : 6,02 × 10²³ entités (nombre d'Avogadro).",
        "La masse molaire M (g/mol) : H = 1 ; C = 12 ; N = 14 ; O = 16 ; S = 32 ; Cl = 35,5 ; Ca = 40 ; Fe = 56 ; Cu = 63,5 ; pour une molécule, on additionne : M(H2O) = 18 g/mol.",
        "Nombre de moles : n = m ÷ M.",
        "Volume molaire des gaz : 22,4 L/mol dans les conditions normales (CNTP) : le même pour tous les gaz !",
      ],
    },
    {
      ref: "Séance 8 — Les ions et leurs tests",
      motsCles: ["ion", "cation", "anion", "test d'identification"],
      points: [
        "Un ion est un atome (ou groupe d'atomes) qui a perdu des électrons (cation, +) ou gagné des électrons (anion, −).",
        "Cations : H+, Na+, NH4+, Ca2+, Cu2+, Zn2+, Fe2+, Fe3+ ; anions : Cl−, OH−, SO4²−, CO3²−.",
        "Tests à la soude : Cu2+ → précipité bleu ; Fe2+ → vert ; Fe3+ → rouille ; Zn2+ → blanc. Cl− : précipité blanc au nitrate d'argent ; CO3²− : effervescence avec un acide.",
      ],
    },
    {
      ref: "Séance 9 — Réactifs et produits d'une réaction",
      motsCles: ["réaction chimique", "réactif", "produit", "écriture littérale"],
      points: [
        "Dans une réaction chimique, les réactifs disparaissent et les produits apparaissent.",
        "Écriture littérale : fer + soufre → sulfure de fer ; carbone + dioxygène → dioxyde de carbone ; soufre + dioxygène → dioxyde de soufre.",
        "Acide chlorhydrique + fer → dihydrogène (qui aboie à la flamme) ; acide + calcaire → dioxyde de carbone (qui trouble l'eau de chaux).",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Symboles et formules électroniques :",
      items: [
        "1. Donne les symboles : oxygène, fer, chlore, calcium, cuivre.",
        "2. Écris la formule électronique de l'oxygène (8 électrons).",
        "3. Écris celle du chlore (17 électrons).",
        "4. Combien d'électrons externes possède le carbone (6 électrons) ?",
        "5. Quelle est la valence de l'azote ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "O, Fe, Cl, Ca, Cu", cle: true }, { text: "." }],
        [{ text: "2. O : " }, { text: "(K)2 (L)6", cle: true }, { text: "." }],
        [{ text: "3. Cl : " }, { text: "(K)2 (L)8 (M)7", cle: true }, { text: "." }],
        [{ text: "4. C : (K)2 (L)4 → " }, { text: "4 électrons externes", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "3", cle: true }, { text: " : l'azote forme trois liaisons (NH3)." }],
      ],
    },
    {
      points: 5,
      consigne: "Molécules et moles :",
      items: [
        "1. Que signifie la formule brute CO2 ?",
        "2. Calcule M(CO2). (C = 12 ; O = 16)",
        "3. Calcule le nombre de moles dans 88 g de CO2.",
        "4. Quel volume occupent ces moles de gaz aux CNTP ?",
        "5. Rappelle le nombre d'Avogadro.",
      ],
      corrige: [
        [{ text: "1. Une molécule formée d'" }, { text: "un atome de carbone et deux atomes d'oxygène", cle: true }, { text: "." }],
        [{ text: "2. 12 + 2 × 16 = " }, { text: "44 g/mol", cle: true }, { text: "." }],
        [{ text: "3. n = 88 ÷ 44 = " }, { text: "2 mol", cle: true }, { text: "." }],
        [{ text: "4. 2 × 22,4 = " }, { text: "44,8 L", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "6,02 × 10²³ entités par mole", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Ions et tests. Réponds :",
      items: [
        "1. Différence entre cation et anion ?",
        "2. Quel ion donne un précipité bleu avec la soude ?",
        "3. Et un précipité vert ? un précipité couleur rouille ?",
        "4. Comment identifier l'ion chlorure Cl− ?",
        "5. Quel gaz se dégage quand un acide attaque le calcaire, et comment le reconnaître ?",
      ],
      corrige: [
        [{ text: "1. Cation : " }, { text: "charge + (perte d'électrons)", cle: true }, { text: " ; anion : " }, { text: "charge − (gain d'électrons)", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Cu2+", cle: true }, { text: "." }],
        [{ text: "3. Vert : " }, { text: "Fe2+", cle: true }, { text: " ; rouille : " }, { text: "Fe3+", cle: true }, { text: "." }],
        [{ text: "4. Avec " }, { text: "le nitrate d'argent : précipité blanc qui noircit à la lumière", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Le dioxyde de carbone : il trouble l'eau de chaux", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Réactions chimiques. Écris en toutes lettres (réactifs → produits) :",
      items: [
        "1. La combustion du carbone dans le dioxygène.",
        "2. La réaction du fer avec le soufre.",
        "3. L'action de l'acide chlorhydrique sur le fer (nomme le gaz et son test).",
        "4. La combustion du soufre.",
        "5. Souligne les réactifs de la réaction 2.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "carbone + dioxygène → dioxyde de carbone", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "fer + soufre → sulfure de fer", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "acide chlorhydrique + fer → chlorure de fer + dihydrogène", cle: true }, { text: " ; le dihydrogène " }, { text: "aboie à l'approche d'une flamme", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "soufre + dioxygène → dioxyde de soufre", cle: true }, { text: "." }],
        [{ text: "5. Réactifs : " }, { text: "le fer et le soufre", cle: true }, { text: "." }],
      ],
    },
  ],
};

// ============================================================ S11 — EXAMEN UNITÉ I
const S11 = {
  numero: 11, total: 34, unite: "I", type: "examen",
  titre: "Examen de l'Unité I — Matière",
  sousTitre: "SUJET D'EXAMEN No 1",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Donne le symbole du calcium et celui du cuivre. (1 pt)",
        "2. Qu'appelle-t-on valence d'un atome ? (1 pt)",
        "3. Qu'est-ce qu'une liaison covalente ? (1 pt)",
        "4. Donne la définition de la mole. (1 pt)",
      ],
      corrige: [
        [{ text: "1. Calcium : " }, { text: "Ca", cle: true }, { text: " ; cuivre : " }, { text: "Cu", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Le " }, { text: "nombre de liaisons que l'atome peut former", cle: true }, { text: " (électrons manquants sur la couche externe). (1 pt)" }],
        [{ text: "3. La " }, { text: "mise en commun d'une paire d'électrons", cle: true }, { text: " entre deux atomes. (1 pt)" }],
        [{ text: "4. Un paquet de " }, { text: "6,02 × 10²³ entités", cle: true }, { text: " (atomes, molécules…). (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. La couche K peut contenir au maximum 8 électrons.",
        "2. Dans une même colonne du tableau périodique, les éléments forment une famille.",
        "3. La formule brute de l'ammoniac est NH3.",
        "4. L'ion Fe3+ donne un précipité bleu avec la soude.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : K en contient 2 au maximum. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : précipité couleur rouille ; le bleu, c'est Cu2+. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Formules électroniques. Soit le sodium Na (11 électrons) et l'oxygène O (8 électrons) : ",
      items: [
        "1. Écris la formule électronique du sodium. (1,5 pt)",
        "2. Écris celle de l'oxygène. (1,5 pt)",
        "3. Combien d'électrons externes chacun possède-t-il ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Na : " }, { text: "(K)2 (L)8 (M)1", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. O : " }, { text: "(K)2 (L)6", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Na : " }, { text: "1 électron externe", cle: true }, { text: " ; O : " }, { text: "6 électrons externes", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Calculs molaires. On dispose de 36 g d'eau (H = 1 ; O = 16).",
      items: [
        "1. Calcule la masse molaire de l'eau H2O. (1 pt)",
        "2. Calcule le nombre de moles contenues dans les 36 g. (1,5 pt)",
        "3. Combien de molécules d'eau cela représente-t-il ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. M = 2 × 1 + 16 = " }, { text: "18 g/mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. n = 36 ÷ 18 = " }, { text: "2 mol", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. 2 × 6,02 × 10²³ = " }, { text: "1,204 × 10²⁴ molécules", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Expérience. Naina chauffe un mélange de poudre de fer et de fleur de soufre ; le mélange rougeoie puis laisse un solide gris qui n'est plus attiré par l'aimant.",
      items: [
        "1. Écris la réaction en toutes lettres. (1,5 pt)",
        "2. Nomme les réactifs et le produit. (1,5 pt)",
        "3. Pourquoi le solide obtenu n'est-il plus attiré par l'aimant ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "fer + soufre → sulfure de fer", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. Réactifs : " }, { text: "le fer et le soufre", cle: true }, { text: " ; produit : " }, { text: "le sulfure de fer", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. C'est " }, { text: "une substance nouvelle : le fer n'existe plus en tant que tel", cle: true }, { text: " dans le produit. (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S18 — RÉVISION UNITÉ II
const S18 = {
  numero: 18, total: 34, unite: "II", type: "revision",
  titre: "Révision de l'Unité II — Électricité",
  image: "images/img_unite2.png",
  imageLegende: "Le courant alternatif : de l'alternateur à la prise, du transformateur à la diode",
  recap: [
    {
      ref: "Séance 12 — L'alternateur et la dynamo",
      motsCles: ["alternateur", "induction", "courant alternatif", "dynamo"],
      points: [
        "Un aimant qui tourne près d'une bobine produit un courant : c'est l'induction électromagnétique.",
        "L'alternateur produit un courant alternatif, qui change de sens périodiquement : les deux DEL tête-bêche clignotent alternativement.",
        "La dynamo du vélo est un petit alternateur ; les centrales utilisent des alternateurs géants.",
      ],
    },
    {
      ref: "Séance 13 — Tension alternative : Umax, Ueff, T, f",
      motsCles: ["Umax", "Ueff", "période", "fréquence", "hertz"],
      points: [
        "La tension alternative varie comme une vague : Umax est sa valeur crête ; Ueff (mesurée au voltmètre) vaut environ Umax ÷ 1,41.",
        "La période T est la durée d'un motif complet (en s) ; la fréquence f est le nombre de motifs par seconde (en Hz) ; f = 1 ÷ T.",
        "Le secteur à Madagascar : 220 V efficaces, 50 Hz (T = 0,02 s ; Umax ≈ 310 V).",
      ],
    },
    {
      ref: "Séance 14 — Le transformateur",
      motsCles: ["transformateur", "primaire", "secondaire", "élévateur", "abaisseur"],
      points: [
        "Le transformateur change la valeur d'une tension alternative : deux bobines (primaire, secondaire) sur un noyau de fer.",
        "U2 ÷ U1 = N2 ÷ N1 : plus de spires au secondaire → élévateur ; moins → abaisseur.",
        "Il ne fonctionne qu'en alternatif : en continu, pas de variation, donc pas d'induction.",
      ],
    },
    {
      ref: "Séance 15 — Production, transport, sécurité",
      motsCles: ["centrale", "haute tension", "pertes Joule", "disjoncteur", "terre"],
      points: [
        "Centrales hydrauliques (Andekaleka), thermiques, solaires : toutes tournent un alternateur (sauf le solaire photovoltaïque, qui donne du continu).",
        "On transporte en haute tension pour réduire les pertes par effet Joule, puis on abaisse près des maisons (220 V).",
        "Sécurité : fusibles et disjoncteurs coupent les surintensités ; la prise de terre évacue les fuites ; jamais d'appareil électrique près de l'eau.",
      ],
    },
    {
      ref: "Séances 16 et 17 — Diode, redressement, continu et alternatif",
      motsCles: ["diode", "sens passant", "redressement", "pont de diodes"],
      points: [
        "La diode ne laisse passer le courant que dans un sens (sens passant).",
        "Une diode seule supprime la moitié des alternances (redressement simple) ; le pont de 4 diodes retourne les alternances négatives (redressement double).",
        "Continu (pile, batterie, panneau solaire) : sens et valeur constants. Alternatif (secteur, alternateur) : sens et valeur variables, transformable.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "L'alternateur. Réponds :",
      items: [
        "1. Que faut-il faire bouger pour produire un courant induit ?",
        "2. Comment s'appelle ce phénomène ?",
        "3. Pourquoi les deux DEL tête-bêche clignotent-elles chacune à leur tour ?",
        "4. Cite deux machines de la vie courante contenant un alternateur ou une dynamo.",
        "5. Quelle est la source d'énergie de l'alternateur d'Andekaleka ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Un aimant près d'une bobine (ou l'inverse)", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "L'induction électromagnétique", cle: true }, { text: "." }],
        [{ text: "3. Le courant " }, { text: "change de sens à chaque demi-tour", cle: true }, { text: " : chaque DEL ne conduit que dans un sens." }],
        [{ text: "4. " }, { text: "La dynamo de vélo, le groupe électrogène", cle: true }, { text: " (ou l'alternateur de voiture)." }],
        [{ text: "5. " }, { text: "L'eau (énergie hydraulique de la rivière Vohitra)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Tension alternative. Le secteur de Madagascar est en 220 V / 50 Hz :",
      items: [
        "1. Que signifie 50 Hz ?",
        "2. Calcule la période T.",
        "3. 220 V est-elle la tension maximale ? Explique.",
        "4. Calcule Umax.",
        "5. Quel appareil mesure Ueff ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "50 motifs (allers-retours) par seconde", cle: true }, { text: "." }],
        [{ text: "2. T = 1 ÷ 50 = " }, { text: "0,02 s", cle: true }, { text: "." }],
        [{ text: "3. Non : c'est " }, { text: "la tension efficace", cle: true }, { text: ", celle qu'indique le voltmètre." }],
        [{ text: "4. Umax ≈ 220 × 1,41 ≈ " }, { text: "310 V", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Le voltmètre (en position alternatif)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Transformateur. Un transformateur : primaire 1 000 spires sous 220 V ; secondaire 50 spires :",
      items: [
        "1. Calcule la tension au secondaire.",
        "2. Est-il élévateur ou abaisseur ?",
        "3. Fonctionne-t-il avec une pile ? Pourquoi ?",
        "4. Cite une utilisation de ce transformateur.",
        "5. Pourquoi transporte-t-on le courant en haute tension ?",
      ],
      corrige: [
        [{ text: "1. U2 = 220 × 50 ÷ 1 000 = " }, { text: "11 V", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Abaisseur", cle: true }, { text: " (moins de spires au secondaire)." }],
        [{ text: "3. " }, { text: "Non : la pile fournit du continu, pas de variation → pas d'induction", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Chargeur, alimentation de radio ou de lampe basse tension", cle: true }, { text: "." }],
        [{ text: "5. Pour " }, { text: "réduire les pertes par effet Joule dans les câbles", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Diode et sécurité. Réponds :",
      items: [
        "1. Quelle est la propriété essentielle de la diode ?",
        "2. Que devient un courant alternatif après une seule diode ?",
        "3. Quel montage redresse les deux alternances ?",
        "4. Quel dispositif protège une installation contre les surintensités ?",
        "5. Cite deux règles de sécurité électrique à la maison.",
      ],
      corrige: [
        [{ text: "1. Elle " }, { text: "ne laisse passer le courant que dans un sens", cle: true }, { text: "." }],
        [{ text: "2. Un courant " }, { text: "haché : une alternance sur deux est supprimée", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Le pont de quatre diodes", cle: true }, { text: " (redressement double alternance)." }],
        [{ text: "4. " }, { text: "Le fusible ou le disjoncteur", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Jamais d'appareil près de l'eau ; ne jamais toucher un fil dénudé", cle: true }, { text: " (débrancher avant de réparer ; prise de terre…)." }],
      ],
    },
  ],
};

// ============================================================ S19 — EXAMEN UNITÉ II
const S19 = {
  numero: 19, total: 34, unite: "II", type: "examen",
  titre: "Examen de l'Unité II — Électricité",
  sousTitre: "SUJET D'EXAMEN No 2",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Qu'est-ce que l'induction électromagnétique ? (1 pt)",
        "2. Définis la période d'une tension alternative. (1 pt)",
        "3. Quel est le rôle d'un transformateur ? (1 pt)",
        "4. Qu'est-ce que le sens passant d'une diode ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. La " }, { text: "production d'un courant par le mouvement d'un aimant près d'une bobine", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. La " }, { text: "durée d'un motif complet", cle: true }, { text: ", en secondes. (1 pt)" }],
        [{ text: "3. " }, { text: "Changer la valeur d'une tension alternative", cle: true }, { text: " (élever ou abaisser). (1 pt)" }],
        [{ text: "4. Le " }, { text: "sens dans lequel la diode laisse passer le courant", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. La dynamo du vélo produit un courant alternatif.",
        "2. Le transformateur fonctionne aussi avec une batterie.",
        "3. Ueff est plus petite que Umax.",
        "4. Le pont de quatre diodes supprime une alternance sur deux.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il exige une tension alternative. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : Ueff ≈ Umax ÷ 1,41. (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : il retourne les alternances négatives (redressement double). (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Lecture d'oscillogramme. Une tension alternative a un motif qui dure 0,04 s et monte jusqu'à 14 V :",
      items: [
        "1. Donne la période T. (1 pt)",
        "2. Calcule la fréquence f. (1,5 pt)",
        "3. Donne Umax et calcule Ueff. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. T = " }, { text: "0,04 s", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. f = 1 ÷ 0,04 = " }, { text: "25 Hz", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Umax = " }, { text: "14 V", cle: true }, { text: " ; Ueff ≈ 14 ÷ 1,41 ≈ " }, { text: "10 V", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Transformateur. Un poste de quartier abaisse la tension de 20 000 V à 220 V ; le primaire compte 10 000 spires :",
      items: [
        "1. Calcule le nombre de spires du secondaire. (2 pts)",
        "2. Pourquoi la JIRAMA transporte-t-elle en 20 000 V et non en 220 V ? (1 pt)",
        "3. Cite le dispositif de sécurité qui coupe le courant en cas de surintensité chez toi. (1 pt)",
      ],
      corrige: [
        [{ text: "1. N2 = 10 000 × 220 ÷ 20 000 = " }, { text: "110 spires", cle: true }, { text: ". (2 pts)" }],
        [{ text: "2. La haute tension " }, { text: "réduit le courant, donc les pertes par effet Joule", cle: true }, { text: " dans les câbles. (1 pt)" }],
        [{ text: "3. " }, { text: "Le disjoncteur (ou le fusible)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Montage. Miora branche une DEL (avec sa résistance) sur une pile, puis sur la sortie très basse tension alternative d'un transformateur d'école.",
      items: [
        "1. Sur la pile : la DEL s'allume dans un branchement, pas dans l'autre. Explique. (1,5 pt)",
        "2. Sur l'alternatif : la DEL clignote (faiblement) — pourquoi ? (1,5 pt)",
        "3. Que doit ajouter Miora pour transformer cet alternatif en courant toujours de même sens ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. La DEL est " }, { text: "une diode : elle ne conduit que dans le sens passant", cle: true }, { text: " ; branchée à l'envers, elle bloque. (1,5 pt)" }],
        [{ text: "2. L'alternatif " }, { text: "change de sens 50 fois par seconde : la DEL ne conduit qu'une alternance sur deux", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Un pont de quatre diodes (redresseur)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S26 — RÉVISION UNITÉ III
const S26 = {
  numero: 26, total: 34, unite: "III", type: "revision",
  titre: "Révision de l'Unité III — Mouvement et force",
  image: "images/img_unite3.png",
  imageLegende: "Vitesse, poids et poussée d'Archimède : la mécanique du quotidien",
  recap: [
    {
      ref: "Séances 20 et 21 — Vitesse, MRU, graphiques",
      motsCles: ["vitesse", "MRU", "v = d ÷ t", "km/h", "m/s", "graphique"],
      points: [
        "La vitesse : v = d ÷ t ; d = v × t ; t = d ÷ v. Unités : m/s ou km/h.",
        "Conversions : km/h → m/s : diviser par 3,6 ; m/s → km/h : multiplier par 3,6.",
        "Mouvement rectiligne uniforme (MRU) : trajectoire droite et vitesse constante.",
        "Graphique distance-temps : le MRU donne une droite ; plus la pente est forte, plus la vitesse est grande ; un palier horizontal = arrêt.",
        "Méthode des problèmes : données → formule → conversion → calcul → phrase réponse.",
      ],
    },
    {
      ref: "Séances 22 et 23 — Le poids et la relation P = m × g",
      motsCles: ["poids", "newton", "dynamomètre", "masse", "g = 10 N/kg"],
      points: [
        "Le poids est la force d'attraction de la Terre sur un objet : direction verticale, sens vers le bas ; il se mesure au dynamomètre, en newtons (N).",
        "La masse (kg, mesurée à la balance) ne change pas ; le poids dépend de l'astre.",
        "P = m × g avec g ≈ 10 N/kg sur Terre : la courbe P(m) est une droite passant par l'origine.",
        "Sur la Lune g ≈ 1,6 N/kg ; sur Mars g ≈ 3,7 N/kg : même masse, poids différent.",
      ],
    },
    {
      ref: "Séances 24 et 25 — Poussée d'Archimède et flottabilité",
      motsCles: ["poussée d'Archimède", "poids apparent", "flotte", "coule", "pirogue"],
      points: [
        "Tout corps plongé dans un liquide reçoit une poussée verticale, vers le haut : la poussée d'Archimède : PA = ρliquide × Vimmergé × g.",
        "Elle égale le poids du liquide déplacé ; d'où le poids apparent réduit dans l'eau.",
        "Un corps flotte si sa masse volumique moyenne est inférieure à celle du liquide (ou si PA peut égaler son poids) ; il coule sinon.",
        "La forme creuse (pirogue, navire d'acier) augmente le volume immergé possible : la masse volumique moyenne devient faible → flottaison.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Vitesse. Un taxi-brousse parcourt 170 km en 4 h, puis 90 km en 1 h 30 :",
      items: [
        "1. Calcule la vitesse moyenne sur la première étape.",
        "2. Calcule-la sur la seconde.",
        "3. Convertis cette seconde vitesse en m/s.",
        "4. Quelle distance ferait-il en 2 h 30 à 60 km/h ?",
        "5. Sur le graphique distance-temps, à quoi reconnaît-on la pause déjeuner ?",
      ],
      corrige: [
        [{ text: "1. v = 170 ÷ 4 = " }, { text: "42,5 km/h", cle: true }, { text: "." }],
        [{ text: "2. v = 90 ÷ 1,5 = " }, { text: "60 km/h", cle: true }, { text: "." }],
        [{ text: "3. 60 ÷ 3,6 ≈ " }, { text: "16,7 m/s", cle: true }, { text: "." }],
        [{ text: "4. d = 60 × 2,5 = " }, { text: "150 km", cle: true }, { text: "." }],
        [{ text: "5. À " }, { text: "un palier horizontal : la distance ne change plus", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Poids. Un sac de riz a une masse de 25 kg (g = 10 N/kg) :",
      items: [
        "1. Calcule son poids sur Terre.",
        "2. Quelle serait sa masse sur la Lune ?",
        "3. Et son poids sur la Lune (g = 1,6 N/kg) ?",
        "4. Quel instrument mesure un poids ? Dans quelle unité ?",
        "5. Donne la direction et le sens du poids.",
      ],
      corrige: [
        [{ text: "1. P = 25 × 10 = " }, { text: "250 N", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "25 kg : la masse ne change pas", cle: true }, { text: "." }],
        [{ text: "3. P = 25 × 1,6 = " }, { text: "40 N", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Le dynamomètre, en newtons (N)", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Verticale, vers le bas (vers le centre de la Terre)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Poussée d'Archimède. Une pierre pèse 8 N dans l'air et 5 N une fois plongée dans l'eau :",
      items: [
        "1. Calcule la poussée d'Archimède.",
        "2. Que représente cette valeur pour le liquide ?",
        "3. Donne la direction et le sens de cette poussée.",
        "4. Calcule le volume immergé (ρeau = 1 000 kg/m³ ; g = 10 N/kg).",
        "5. La pierre flotterait-elle dans un liquide plus dense que l'eau ? À quelle condition ?",
      ],
      corrige: [
        [{ text: "1. PA = 8 − 5 = " }, { text: "3 N", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Le poids de l'eau déplacée", cle: true }, { text: " par la pierre." }],
        [{ text: "3. " }, { text: "Verticale, vers le haut", cle: true }, { text: "." }],
        [{ text: "4. V = PA ÷ (ρ × g) = 3 ÷ 10 000 = " }, { text: "0,0003 m³ = 0,3 L", cle: true }, { text: "." }],
        [{ text: "5. Oui, " }, { text: "si la poussée atteint son poids : liquide de masse volumique supérieure à celle de la pierre", cle: true }, { text: " (comme le fer flotte sur le mercure)." }],
      ],
    },
    {
      points: 5,
      consigne: "Flottabilité. Réponds :",
      items: [
        "1. Donne la condition de flottaison avec les masses volumiques.",
        "2. Pourquoi un navire d'acier flotte-t-il alors que l'acier coule ?",
        "3. Pourquoi la pirogue chargée s'enfonce-t-elle davantage ?",
        "4. Un œuf coule dans l'eau douce et flotte dans l'eau très salée : explique.",
        "5. Cite l'exclamation célèbre attribuée à Archimède.",
      ],
      corrige: [
        [{ text: "1. Le corps flotte si " }, { text: "sa masse volumique (moyenne) est inférieure à celle du liquide", cle: true }, { text: "." }],
        [{ text: "2. Sa " }, { text: "coque creuse pleine d'air abaisse sa masse volumique moyenne", cle: true }, { text: " sous celle de l'eau." }],
        [{ text: "3. Il faut " }, { text: "déplacer plus d'eau pour que la poussée égale le poids augmenté", cle: true }, { text: "." }],
        [{ text: "4. L'eau salée est " }, { text: "plus dense : la poussée augmente", cle: true }, { text: " et dépasse le poids de l'œuf." }],
        [{ text: "5. " }, { text: "« Eurêka ! » (J'ai trouvé !)", cle: true }, { text: "." }],
      ],
    },
  ],
};

// ============================================================ S27 — EXAMEN UNITÉ III
const S27 = {
  numero: 27, total: 34, unite: "III", type: "examen",
  titre: "Examen de l'Unité III — Mouvement et force",
  sousTitre: "SUJET D'EXAMEN No 3",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Donne la formule de la vitesse et ses unités. (1 pt)",
        "2. Qu'est-ce qu'un mouvement rectiligne uniforme ? (1 pt)",
        "3. Définis le poids d'un objet. (1 pt)",
        "4. Énonce la règle de la poussée d'Archimède. (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "v = d ÷ t ; en m/s ou km/h", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Un mouvement à " }, { text: "trajectoire droite et vitesse constante", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. La " }, { text: "force d'attraction de la Terre", cle: true }, { text: " sur l'objet, verticale, vers le bas, en newtons. (1 pt)" }],
        [{ text: "4. Tout corps plongé dans un liquide reçoit " }, { text: "une poussée verticale vers le haut égale au poids du liquide déplacé", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Conversions et vrai/faux : (1 pt par bonne réponse)",
      items: [
        "1. Convertis 72 km/h en m/s.",
        "2. Convertis 25 m/s en km/h.",
        "3. Vrai ou Faux : la masse d'un objet change sur la Lune.",
        "4. Vrai ou Faux : sur un graphique distance-temps, une droite plus pentue signifie une vitesse plus grande.",
      ],
      corrige: [
        [{ text: "1. 72 ÷ 3,6 = " }, { text: "20 m/s", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. 25 × 3,6 = " }, { text: "90 km/h", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : la masse ne change pas, c'est le poids qui change. (1 pt)" }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Problème de vitesse. Un cycliste quitte Moramanga à 7 h et roule à 18 km/h vers un village situé à 27 km :",
      items: [
        "1. Calcule la durée du trajet. (1,5 pt)",
        "2. À quelle heure arrive-t-il ? (1 pt)",
        "3. Exprime sa vitesse en m/s. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. t = 27 ÷ 18 = " }, { text: "1,5 h = 1 h 30", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 7 h + 1 h 30 = " }, { text: "8 h 30", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. 18 ÷ 3,6 = " }, { text: "5 m/s", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Le poids. Complète le tableau : un bidon d'eau a une masse de 20 kg (g Terre = 10 N/kg ; g Lune = 1,6 N/kg) :",
      items: [
        "1. Poids du bidon sur Terre. (1,5 pt)",
        "2. Masse et poids du bidon sur la Lune. (1,5 pt)",
        "3. Quelle est l'allure de la courbe du poids en fonction de la masse ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. P = 20 × 10 = " }, { text: "200 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. Masse : " }, { text: "20 kg (inchangée)", cle: true }, { text: " ; poids : 20 × 1,6 = " }, { text: "32 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Une droite passant par l'origine", cle: true }, { text: " (P proportionnel à m). (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Archimède. Un objet pèse 12 N dans l'air ; suspendu au dynamomètre et immergé entièrement dans l'eau, l'appareil indique 9 N :",
      items: [
        "1. Calcule la poussée d'Archimède. (1 pt)",
        "2. Calcule le volume de l'objet (ρeau = 1 000 kg/m³ ; g = 10 N/kg). (1,5 pt)",
        "3. Cet objet flotterait-il si on le lâchait ? Justifie. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. PA = 12 − 9 = " }, { text: "3 N", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. V = 3 ÷ (1 000 × 10) = " }, { text: "0,0003 m³ = 0,3 L", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Non : la poussée maximale (3 N) reste inférieure au poids (12 N)", cle: true }, { text: " : il coule. (1,5 pt)" }],
      ],
    },
  ],
};

// ============================================================ S33 — RÉVISION + EXAMEN UNITÉ IV
const S33 = {
  numero: 33, total: 34, unite: "IV", type: "revisionExamen",
  titre: "Révision et Examen de l'Unité IV — Énergie, lumière et son",
  sousTitre: "SUJET D'EXAMEN No 4",
  image: "images/img_unite4.png",
  imageLegende: "Énergie, lumière et son : pertes, rayons, ombres et ondes",
  recap: [
    {
      ref: "Séance 28 — Pertes énergétiques et conservation",
      motsCles: ["effet Joule", "frottement", "rayonnement", "isolation", "lubrification"],
      points: [
        "Toute machine perd de l'énergie, surtout en chaleur : effet Joule (circuits), frottements (mécanismes), rayonnement et fuites thermiques.",
        "Remèdes : isolation (couvercle, laine, foyer amélioré), surfaces réfléchissantes, lubrification et roulements, fils de bonne section, lampes DEL.",
      ],
    },
    {
      ref: "Séances 29 et 30 — Sources de lumière et propagation rectiligne",
      motsCles: ["source primaire", "source secondaire", "opaque", "translucide", "transparent", "rayon"],
      points: [
        "Source primaire : produit sa lumière (Soleil, flamme, lampe) ; source secondaire : la renvoie (Lune, miroir, objets éclairés).",
        "Objets : transparents (formes visibles), translucides (lumière sans formes), opaques (rien ne passe : ombre).",
        "Dans un milieu transparent et homogène, la lumière se propage en ligne droite ; on la modélise par le rayon lumineux (droite fléchée, tracée à la règle).",
      ],
    },
    {
      ref: "Séance 31 — Ombres, chambre noire, phases de la Lune, éclipses",
      motsCles: ["ombre propre", "ombre portée", "chambre noire", "phases", "éclipse"],
      points: [
        "Ombre propre : face non éclairée de l'objet ; ombre portée : tache sombre projetée ; pénombre avec une source étendue.",
        "Chambre noire : les rayons se croisent dans le petit trou → image renversée.",
        "Phases de la Lune : portion visible de la moitié éclairée, cycle d'environ 29,5 jours.",
        "Éclipse de Soleil : Soleil-Lune-Terre alignés ; éclipse de Lune : Soleil-Terre-Lune : la Lune traverse l'ombre de la Terre.",
      ],
    },
    {
      ref: "Séance 32 — Ondes sonores et lumineuses",
      motsCles: ["onde", "amplitude", "fréquence", "longueur d'onde"],
      points: [
        "Amplitude → volume du son / luminosité ; fréquence (Hz) → hauteur du son (grave/aigu) / couleur de la lumière ; longueur d'onde : distance entre deux crêtes.",
        "Le son exige un milieu matériel (340 m/s dans l'air) ; la lumière traverse le vide (300 000 km/s) : l'éclair précède le tonnerre.",
      ],
    },
  ],
  consignes: [
    "Revois d'abord le récapitulatif ci-dessus, puis traite le sujet d'examen par écrit.",
    "Écris tes réponses au stylo, proprement, sur ta copie.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "ÉNERGIE — Réponds : (1 pt par bonne réponse)",
      items: [
        "1. Comment s'appelle l'échauffement d'un fil parcouru par un courant ?",
        "2. Quelle perte la lubrification combat-elle ?",
        "3. Pourquoi couvrir la marmite économise-t-il du combustible ?",
        "4. Cite un avantage de la lampe DEL sur la vieille ampoule.",
        "5. L'énergie « perdue » est-elle détruite ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'effet Joule", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Les frottements", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Il " }, { text: "réduit les fuites de chaleur (vapeur, rayonnement)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Elle " }, { text: "perd beaucoup moins d'énergie en chaleur", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Non : elle se disperse en chaleur inutilisable", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "LUMIÈRE — Classe et explique : (1 pt par bonne réponse)",
      items: [
        "1. La Lune : source primaire ou secondaire ?",
        "2. Le papier calque : transparent, translucide ou opaque ?",
        "3. Énonce le principe de propagation de la lumière.",
        "4. Pourquoi l'image de la chambre noire est-elle renversée ?",
        "5. Donne l'ordre des astres lors d'une éclipse de Soleil.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Secondaire : elle renvoie la lumière du Soleil", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Translucide", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "En ligne droite dans un milieu transparent et homogène", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Les rayons " }, { text: "se croisent dans le petit trou", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Soleil – Lune – Terre", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "OMBRES — Une balle opaque est éclairée par une lampe ; derrière elle, un écran :",
      items: [
        "1. Nomme la zone sombre sur la balle elle-même. (1 pt)",
        "2. Nomme la tache sombre sur l'écran. (1 pt)",
        "3. Que devient cette tache si on approche la balle de la lampe ? (1 pt)",
        "4. Qu'est-ce que la pénombre et quand apparaît-elle ? (2 pts)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'ombre propre", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "L'ombre portée", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Elle " }, { text: "s'agrandit", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. Une zone " }, { text: "partiellement éclairée, entre ombre et lumière, avec une source étendue", cle: true }, { text: ". (2 pts)" }],
      ],
    },
    {
      points: 5,
      consigne: "SON — Réponds :",
      items: [
        "1. Quelle caractéristique distingue un son fort d'un son faible ? (1 pt)",
        "2. Et un son grave d'un son aigu ? (1 pt)",
        "3. Le son se propage-t-il dans le vide ? (1 pt)",
        "4. Tu comptes 4 secondes entre l'éclair et le tonnerre : à quelle distance est l'orage (v = 340 m/s) ? (2 pts)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "L'amplitude", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "La fréquence", cle: true }, { text: " (aigu = haute fréquence). (1 pt)" }],
        [{ text: "3. " }, { text: "Non : il exige un milieu matériel", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. d = 340 × 4 = " }, { text: "1 360 m ≈ 1,4 km", cle: true }, { text: ". (2 pts)" }],
      ],
    },
  ],
};

// ============================================================ S34 — EXAMEN BLANC FINAL
const S34 = {
  numero: 34, total: 34, unite: null, type: "examen",
  titre: "Examen blanc final — Tout le programme de T8",
  sousTitre: "EXAMEN BLANC DE FIN D'ANNÉE",
  consignes: [
    "Cet examen couvre les quatre unités de l'année : Matière ; Électricité ; Mouvement et force ; Énergie, lumière et son.",
    "Durée conseillée : une séance complète. Gère bien ton temps : ne reste pas bloqué sur une question.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "MATIÈRE — Questions. (1 pt par bonne réponse)",
      items: [
        "1. Écris la formule électronique du soufre S (16 électrons).",
        "2. Calcule la masse molaire du dioxyde de soufre SO2 (S = 32 ; O = 16).",
        "3. Calcule le nombre de moles dans 32 g de SO2.",
        "4. Quel ion donne un précipité bleu avec la soude ?",
        "5. Écris en toutes lettres la combustion du carbone.",
      ],
      corrige: [
        [{ text: "1. S : " }, { text: "(K)2 (L)8 (M)6", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. 32 + 2 × 16 = " }, { text: "64 g/mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. n = 32 ÷ 64 = " }, { text: "0,5 mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Cu2+ (ion cuivre II)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "carbone + dioxygène → dioxyde de carbone", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "ÉLECTRICITÉ — Le secteur 220 V / 50 Hz alimente un chargeur :",
      items: [
        "1. Calcule la période du secteur. (1 pt)",
        "2. Calcule Umax (Ueff × 1,41). (1 pt)",
        "3. Le transformateur du chargeur : primaire 2 200 spires, secondaire 90 spires : calcule la tension de sortie. (1,5 pt)",
        "4. Quel composant transforme ensuite l'alternatif en courant de sens unique, et quel montage redresse les deux alternances ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. T = 1 ÷ 50 = " }, { text: "0,02 s", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Umax ≈ 220 × 1,41 ≈ " }, { text: "310 V", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. U2 = 220 × 90 ÷ 2 200 = " }, { text: "9 V", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "4. " }, { text: "La diode", cle: true }, { text: " ; le " }, { text: "pont de quatre diodes", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "MOUVEMENT — Un camion relie Antananarivo à Toamasina (350 km) en 7 h :",
      items: [
        "1. Calcule sa vitesse moyenne en km/h. (1,5 pt)",
        "2. Convertis-la en m/s. (1,5 pt)",
        "3. À cette vitesse, quelle distance parcourt-il en 2 h 30 ? (2 pts)",
      ],
      corrige: [
        [{ text: "1. v = 350 ÷ 7 = " }, { text: "50 km/h", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 50 ÷ 3,6 ≈ " }, { text: "13,9 m/s", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. d = 50 × 2,5 = " }, { text: "125 km", cle: true }, { text: ". (2 pts)" }],
      ],
    },
    {
      points: 5,
      consigne: "FORCE — Un bloc de masse 3 kg est suspendu à un dynamomètre (g = 10 N/kg) :",
      items: [
        "1. Calcule son poids dans l'air. (1,5 pt)",
        "2. Immergé dans l'eau, le dynamomètre indique 26 N : calcule la poussée d'Archimède. (1,5 pt)",
        "3. Donne la direction et le sens de cette poussée, puis la condition pour qu'un corps flotte. (2 pts)",
      ],
      corrige: [
        [{ text: "1. P = 3 × 10 = " }, { text: "30 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. PA = 30 − 26 = " }, { text: "4 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Verticale, vers le haut", cle: true }, { text: " ; il flotte si " }, { text: "sa masse volumique moyenne est inférieure à celle du liquide", cle: true }, { text: ". (2 pts)" }],
      ],
    },
    {
      points: 5,
      consigne: "LUMIÈRE ET SON — Réponds : (1 pt par bonne réponse)",
      items: [
        "1. La flamme d'une bougie : source primaire ou secondaire ?",
        "2. Énonce le principe de propagation rectiligne.",
        "3. Donne l'ordre des astres lors d'une éclipse de Lune.",
        "4. Quelle caractéristique de l'onde sonore fait le grave et l'aigu ?",
        "5. Pourquoi voit-on l'éclair avant d'entendre le tonnerre ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Primaire : elle produit sa lumière", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "La lumière se propage en ligne droite dans un milieu transparent et homogène", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Soleil – Terre – Lune", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "La fréquence", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. La lumière (300 000 km/s) est " }, { text: "immensément plus rapide que le son (340 m/s)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

module.exports = { seances: [S10, S11, S18, S19, S26, S27, S33, S34] };
