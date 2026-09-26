// data-speciales.js — T9 : révisions (10, 18, 26), examens d'unité (11, 19, 27),
// révision+examen combinés (33) et examen blanc final (34)

// ============================================================ S10 — RÉVISION UNITÉ I
const S10 = {
  numero: 10, total: 39, unite: "I", type: "revision",
  titre: "Révision de l'Unité I — Mécanique",
  image: "images/img_unite1.png",
  imageLegende: "La mécanique : forces, équilibre, Archimède, travail et puissance",
  recap: [
    {
      ref: "Séances 1 et 2 — La force et ses caractéristiques",
      motsCles: ["force", "dynamomètre", "newton", "vecteur", "caractéristiques"],
      points: [
        "Une force est une action capable de déformer un objet ou de modifier son mouvement ; elle se mesure au dynamomètre, en newtons (N) : le kilogramme-force ne s'utilise plus.",
        "Quatre caractéristiques : droite d'action (direction), sens, point d'application, intensité.",
        "On représente une force par un vecteur : une flèche partant du point d'application, sur la droite d'action, dans le bon sens, de longueur proportionnelle à l'intensité (échelle).",
      ],
    },
    {
      ref: "Séance 3 — Équilibre sous deux forces",
      motsCles: ["équilibre", "forces directement opposées"],
      points: [
        "Un solide soumis à deux forces est en équilibre si elles sont directement opposées : même droite d'action, sens contraires, même intensité.",
        "Exemple : la lampe suspendue : le poids (vers le bas) et la tension du fil (vers le haut) se compensent.",
      ],
    },
    {
      ref: "Séance 4 — Poids et centre de gravité",
      motsCles: ["poids", "centre de gravité", "verticale", "P = m × g"],
      points: [
        "Le poids est l'attraction de la Terre : force verticale, dirigée vers le bas, appliquée au centre de gravité G.",
        "P = m × g avec g ≈ 10 N/kg : une masse de 1 kg pèse environ 10 N.",
        "Ne pas confondre : la masse (kg, invariable) et le poids (N, dépend du lieu : plus faible sur la Lune).",
      ],
    },
    {
      ref: "Séances 5, 6 et 7 — Poussée d'Archimède et corps flottants",
      motsCles: ["poussée d'Archimède", "F = ρ × V × g", "théorème", "densité", "flotte", "coule"],
      points: [
        "Tout corps plongé dans un liquide reçoit une poussée verticale, vers le haut : F = P(réel) − T(apparent) ; elle dépend du volume immergé et du liquide, pas de la profondeur.",
        "Théorème d'Archimède : la poussée est égale au poids du liquide déplacé : F = ρ × V × g ; elle s'applique au centre de poussée.",
        "Densité d'un corps = masse volumique du corps ÷ masse volumique de l'eau (sans unité).",
        "Corps flottants : F > P : il flotte ; F < P : il coule ; F = P : entre deux eaux ; pour un solide homogène : il flotte si sa densité est inférieure à celle du liquide.",
      ],
    },
    {
      ref: "Séances 8 et 9 — Travail et puissance",
      motsCles: ["travail", "W = F × d", "joule", "moteur", "résistant", "puissance", "watt"],
      points: [
        "Travail d'une force constante dont le point d'application se déplace sur sa droite d'action : W = F × d, en joules (J) ; moteur (+) si la force aide le déplacement, résistant (−) si elle s'y oppose.",
        "Le travail du poids ne dépend que de la dénivellation h : W = P × h, quel que soit le chemin suivi.",
        "Puissance : P = W ÷ t, en watts (W) : la rapidité à fournir un travail ; 1 ch = 736 W.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Forces et équilibre. Réponds :",
      items: [
        "1. Cite les quatre caractéristiques d'une force.",
        "2. Avec quel appareil et en quelle unité mesure-t-on une force ?",
        "3. À quelle condition un solide soumis à deux forces est-il en équilibre ?",
        "4. Représente (en mots) le poids d'un sac : direction, sens, point d'application.",
        "5. Un vecteur de 3 cm représente 6 N ; quelle est l'échelle ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Droite d'action, sens, point d'application, intensité", cle: true }, { text: "." }],
        [{ text: "2. Au " }, { text: "dynamomètre", cle: true }, { text: ", en " }, { text: "newtons (N)", cle: true }, { text: "." }],
        [{ text: "3. Les deux forces doivent être " }, { text: "directement opposées : même droite d'action, sens contraires, même intensité", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Verticale, vers le bas, appliquée au centre de gravité G", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "1 cm pour 2 N", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Poids et masse (g = 10 N/kg) :",
      items: [
        "1. Calcule le poids d'un sac de riz de 25 kg.",
        "2. Quelle est la masse d'un colis qui pèse 180 N ?",
        "3. La masse d'un objet change-t-elle sur la Lune ? Et son poids ?",
        "4. Où s'applique le poids d'un objet ?",
        "5. Quelle est la direction du poids ?",
      ],
      corrige: [
        [{ text: "1. P = 25 × 10 = " }, { text: "250 N", cle: true }, { text: "." }],
        [{ text: "2. m = 180 ÷ 10 = " }, { text: "18 kg", cle: true }, { text: "." }],
        [{ text: "3. La masse " }, { text: "ne change pas", cle: true }, { text: " ; le poids " }, { text: "diminue (g plus petit)", cle: true }, { text: "." }],
        [{ text: "4. Au " }, { text: "centre de gravité G", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "La verticale du lieu", cle: true }, { text: ", vers le bas." }],
      ],
    },
    {
      points: 5,
      consigne: "Poussée d'Archimède (g = 10 N/kg ; eau : 1 000 kg/m³) :",
      items: [
        "1. Énonce le théorème d'Archimède.",
        "2. Un solide pèse 12 N dans l'air et 9 N immergé : calcule la poussée.",
        "3. Déduis-en le volume immergé.",
        "4. Un solide homogène de densité 0,7 est lâché dans l'eau : que fait-il ?",
        "5. Et s'il avait une densité de 1,3 ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La poussée est verticale, vers le haut, égale au poids du liquide déplacé", cle: true }, { text: "." }],
        [{ text: "2. F = 12 − 9 = " }, { text: "3 N", cle: true }, { text: "." }],
        [{ text: "3. V = F ÷ (ρ × g) = 3 ÷ 10 000 = " }, { text: "0,0003 m³ = 0,3 L", cle: true }, { text: "." }],
        [{ text: "4. 0,7 < 1 : " }, { text: "il flotte", cle: true }, { text: "." }],
        [{ text: "5. 1,3 > 1 : " }, { text: "il coule", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Travail et puissance :",
      items: [
        "1. Donne la formule du travail d'une force constante et son unité.",
        "2. Un zébu tire avec 300 N sur 200 m : calcule son travail.",
        "3. Une porteuse monte un seau de 60 N sur une dénivellation de 5 m par un sentier de 40 m : calcule le travail du poids à vaincre.",
        "4. Ce travail est fourni en 50 s : calcule la puissance.",
        "5. Convertis 3 ch en watts.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "W = F × d, en joules (J)", cle: true }, { text: "." }],
        [{ text: "2. W = 300 × 200 = " }, { text: "60 000 J = 60 kJ", cle: true }, { text: "." }],
        [{ text: "3. Seule la dénivellation compte : W = 60 × 5 = " }, { text: "300 J", cle: true }, { text: "." }],
        [{ text: "4. P = 300 ÷ 50 = " }, { text: "6 W", cle: true }, { text: "." }],
        [{ text: "5. 3 × 736 = " }, { text: "2 208 W", cle: true }, { text: "." }],
      ],
    },
  ],
};

// ============================================================ S11 — EXAMEN UNITÉ I
const S11 = {
  numero: 11, total: 39, unite: "I", type: "examen",
  titre: "Examen de l'Unité I — Mécanique",
  sousTitre: "SUJET D'EXAMEN No 1",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs (g = 10 N/kg).",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Cite les quatre caractéristiques d'une force. (1 pt)",
        "2. Qu'appelle-t-on forces directement opposées ? (1 pt)",
        "3. Énonce le théorème d'Archimède. (1 pt)",
        "4. Donne la définition de la puissance d'une force. (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Droite d'action, sens, point d'application, intensité", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Deux forces de " }, { text: "même droite d'action, de sens contraires et de même intensité", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. Tout corps plongé dans un liquide reçoit une " }, { text: "poussée verticale vers le haut égale au poids du liquide déplacé", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Le quotient du travail par la durée : P = W ÷ t", cle: true }, { text: ", en watts. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. L'intensité d'une force se mesure en kilogrammes.",
        "2. Le poids s'applique au centre de gravité.",
        "3. La poussée d'Archimède augmente avec la profondeur.",
        "4. Le travail du poids ne dépend que de la dénivellation.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : en newtons, au dynamomètre. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : elle dépend du volume immergé et du liquide, pas de la profondeur. (1 pt)" }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : W = P × h, quel que soit le chemin. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "La lampe suspendue. Une lampe de masse 800 g pend au bout de son fil, immobile.",
      items: [
        "1. Calcule le poids de la lampe. (1,5 pt)",
        "2. Quelles forces s'exercent sur elle ? (1,5 pt)",
        "3. Que vaut la tension du fil ? Justifie. (1 pt)",
      ],
      corrige: [
        [{ text: "1. P = 0,8 × 10 = " }, { text: "8 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. " }, { text: "Son poids (vers le bas) et la tension du fil (vers le haut)", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "8 N : à l'équilibre, les deux forces sont directement opposées", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Archimède au port. Un bloc pèse 50 N dans l'air ; immergé dans l'eau, le dynamomètre indique 30 N.",
      items: [
        "1. Calcule la poussée d'Archimède. (1,5 pt)",
        "2. Calcule le volume du bloc (eau : 1 000 kg/m³). (1,5 pt)",
        "3. Ce bloc, abandonné dans l'eau, flotte-t-il ? Justifie. (1 pt)",
      ],
      corrige: [
        [{ text: "1. F = 50 − 30 = " }, { text: "20 N", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. V = F ÷ (ρ × g) = 20 ÷ 10 000 = " }, { text: "0,002 m³ = 2 L", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Non : F (20 N) < P (50 N) : il coule", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Le chantier. Un treuil hisse un sac de ciment de 400 N au 2e étage, à 6 m, en 40 s.",
      items: [
        "1. Calcule le travail fourni contre le poids. (1,5 pt)",
        "2. Calcule la puissance du treuil. (1,5 pt)",
        "3. Un second treuil fait le même travail en 20 s : lequel est le plus puissant ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. W = 400 × 6 = " }, { text: "2 400 J", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. P = 2 400 ÷ 40 = " }, { text: "60 W", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Le second : " }, { text: "120 W, deux fois plus puissant (même travail en deux fois moins de temps)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S18 — RÉVISION UNITÉ II
const S18 = {
  numero: 18, total: 39, unite: "II", type: "revision",
  titre: "Révision de l'Unité II — Électricité",
  image: "images/img_unite2.png",
  imageLegende: "L'électricité : loi d'Ohm, associations, puissance, énergie et sécurité",
  recap: [
    {
      ref: "Séances 12 et 13 — Résistor, caractéristique et loi d'Ohm",
      motsCles: ["résistor", "caractéristique", "ligne moyenne", "loi d'Ohm", "ohm"],
      points: [
        "Le conducteur ohmique (résistor) : cylindre à anneaux colorés, symbole rectangulaire.",
        "Sa caractéristique U = f(I) : au moins 5 points de fonctionnement, tracé en ligne moyenne : une droite passant par l'origine.",
        "Loi d'Ohm : U = R × I ; R est la résistance, en ohms (Ω) : la pente de la caractéristique ; R = U ÷ I ; I = U ÷ R.",
      ],
    },
    {
      ref: "Séance 14 — Associations de résistors",
      motsCles: ["série", "dérivation", "résistance équivalente"],
      points: [
        "En série : Re = R1 + R2 : plus grande que chaque résistance.",
        "En dérivation : 1/Re = 1/R1 + 1/R2 : plus petite que la plus petite.",
        "Vérification possible à l'ohmmètre aux bornes de l'ensemble.",
      ],
    },
    {
      ref: "Séances 15 et 16 — Puissance et énergie électriques",
      motsCles: ["P = U × I", "plaque signalétique", "W = P × t", "kilowattheure", "loi de Joule"],
      points: [
        "Plaque signalétique : tension d'usage (V) et puissance consommée (W) ; courant appelé : I = P ÷ U.",
        "P = U × I ; pour un conducteur ohmique : P = R × I².",
        "Énergie : W = P × t ; unité pratique : le kilowattheure : 1 kWh = 3 600 000 J ; le compteur totalise les kWh facturés par la JIRAMA.",
        "Loi de Joule : l'énergie reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t.",
      ],
    },
    {
      ref: "Séance 17 — L'installation domestique et la sécurité",
      motsCles: ["compteur", "disjoncteur", "fusible", "dérivation", "sécurité"],
      points: [
        "Trajet : ligne JIRAMA → compteur → disjoncteur général → lignes de distribution en dérivation (chaque appareil sous 220 V).",
        "Le disjoncteur protège toute l'installation ; chaque fusible ne protège qu'une ligne (il fond par effet Joule).",
        "Sécurité : mains sèches, ne jamais toucher fils dénudés ni prises, débrancher avant d'intervenir, ne jamais refaire au secteur les expériences faites avec des piles.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Caractéristique et loi d'Ohm :",
      items: [
        "1. Quelle est l'allure de la caractéristique d'un résistor ?",
        "2. Pourquoi trace-t-on une ligne moyenne ?",
        "3. Un résistor de 30 Ω est traversé par 0,4 A : calcule U.",
        "4. Sous 12 V, un résistor laisse passer 0,06 A : calcule R.",
        "5. Quelle intensité traverse 500 Ω sous 10 V ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Une droite passant par l'origine", cle: true }, { text: "." }],
        [{ text: "2. Parce que les points sont " }, { text: "entachés d'erreurs de mesure", cle: true }, { text: " : jamais de ligne brisée." }],
        [{ text: "3. U = 30 × 0,4 = " }, { text: "12 V", cle: true }, { text: "." }],
        [{ text: "4. R = 12 ÷ 0,06 = " }, { text: "200 Ω", cle: true }, { text: "." }],
        [{ text: "5. I = 10 ÷ 500 = " }, { text: "0,02 A = 20 mA", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Associations. R1 = 20 Ω et R2 = 60 Ω :",
      items: [
        "1. Calcule Re en série.",
        "2. Calcule Re en dérivation.",
        "3. En dérivation, pourquoi Re est-elle inférieure à 20 Ω ?",
        "4. L'ensemble série est alimenté sous 16 V : calcule I.",
        "5. Comment vérifier expérimentalement Re ?",
      ],
      corrige: [
        [{ text: "1. Re = 20 + 60 = " }, { text: "80 Ω", cle: true }, { text: "." }],
        [{ text: "2. 1/Re = 1/20 + 1/60 = 4/60 : Re = " }, { text: "15 Ω", cle: true }, { text: "." }],
        [{ text: "3. Le courant dispose de " }, { text: "plusieurs chemins : l'opposition diminue", cle: true }, { text: "." }],
        [{ text: "4. I = 16 ÷ 80 = " }, { text: "0,2 A", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "À l'ohmmètre, appliqué aux bornes de l'ensemble", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Puissance et énergie :",
      items: [
        "1. Que signifie « 220 V ; 1 500 W » sur un fer à repasser ?",
        "2. Calcule le courant appelé par ce fer.",
        "3. Il fonctionne 2 h : calcule l'énergie en kWh.",
        "4. Énonce la loi de Joule.",
        "5. Un fil de 3 Ω parcouru par 5 A pendant 2 min : calcule Q.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Tension d'usage 220 V, puissance consommée 1 500 W", cle: true }, { text: "." }],
        [{ text: "2. I = 1 500 ÷ 220 ≈ " }, { text: "6,8 A", cle: true }, { text: "." }],
        [{ text: "3. W = 1,5 × 2 = " }, { text: "3 kWh", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "L'énergie reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t", cle: true }, { text: "." }],
        [{ text: "5. Q = 3 × 25 × 120 = " }, { text: "9 000 J", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Installation et sécurité :",
      items: [
        "1. Décris le trajet du courant de la rue à une prise.",
        "2. Pourquoi les lignes sont-elles en dérivation ?",
        "3. Différence de rôle disjoncteur / fusible ?",
        "4. Pourquoi ne jamais remplacer un fusible par un fil quelconque ?",
        "5. Cite deux règles de sécurité électrique.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Ligne JIRAMA → compteur → disjoncteur général → ligne en dérivation (fusible) → prise", cle: true }, { text: "." }],
        [{ text: "2. Pour que chaque appareil " }, { text: "reçoive 220 V et fonctionne indépendamment", cle: true }, { text: "." }],
        [{ text: "3. Disjoncteur : " }, { text: "toute l'installation", cle: true }, { text: " ; fusible : " }, { text: "une seule ligne", cle: true }, { text: "." }],
        [{ text: "4. Un fil quelconque " }, { text: "ne fond pas au bon calibre : plus de protection", cle: true }, { text: " : risque d'incendie." }],
        [{ text: "5. " }, { text: "Mains sèches ; ne jamais toucher un fil dénudé ; débrancher avant d'intervenir", cle: true }, { text: " (deux au choix)." }],
      ],
    },
  ],
};

// ============================================================ S19 — EXAMEN UNITÉ II
const S19 = {
  numero: 19, total: 39, unite: "II", type: "examen",
  titre: "Examen de l'Unité II — Électricité",
  sousTitre: "SUJET D'EXAMEN No 2",
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
        "1. Énonce la loi d'Ohm. (1 pt)",
        "2. Donne la formule de la résistance équivalente en série puis en dérivation. (1 pt)",
        "3. Que représentent les deux indications d'une plaque signalétique ? (1 pt)",
        "4. Énonce la loi de Joule. (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La tension aux bornes d'un conducteur ohmique est proportionnelle à l'intensité : U = R × I", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Série : " }, { text: "Re = R1 + R2", cle: true }, { text: " ; dérivation : " }, { text: "1/Re = 1/R1 + 1/R2", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "La tension d'usage et la puissance consommée en fonctionnement normal", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "L'énergie électrique reçue par un conducteur ohmique est intégralement convertie en chaleur : Q = R × I² × t", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. La caractéristique d'un résistor est une droite passant par l'origine.",
        "2. En dérivation, Re est plus grande que R1 et R2.",
        "3. 1 kWh = 3 600 000 J.",
        "4. Un fusible protège toute l'installation de la maison.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : plus petite que la plus petite. (1 pt)" }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : une seule ligne ; c'est le disjoncteur qui protège tout. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Loi d'Ohm. Un résistor porte la caractéristique suivante : (0,1 A ; 4,4 V), (0,2 A ; 8,8 V), (0,3 A ; 13,2 V).",
      items: [
        "1. Montre que ces mesures respectent la loi d'Ohm. (1,5 pt)",
        "2. Calcule la résistance R. (1,5 pt)",
        "3. Prévois la tension pour 0,5 A. (1 pt)",
      ],
      corrige: [
        [{ text: "1. U ÷ I = " }, { text: "44 pour chaque couple : U est proportionnelle à I", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. R = " }, { text: "44 Ω", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. U = 44 × 0,5 = " }, { text: "22 V", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Associations. R1 = 40 Ω et R2 = 10 Ω sont montés en dérivation sous 8 V.",
      items: [
        "1. Calcule la résistance équivalente. (1,5 pt)",
        "2. Calcule l'intensité totale. (1,5 pt)",
        "3. Les mêmes en série sous 8 V : calcule la nouvelle intensité. (1 pt)",
      ],
      corrige: [
        [{ text: "1. 1/Re = 1/40 + 1/10 = 5/40 : Re = " }, { text: "8 Ω", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. I = 8 ÷ 8 = " }, { text: "1 A", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Re = 50 Ω : I = 8 ÷ 50 = " }, { text: "0,16 A", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "La facture. Chaque jour, la famille utilise : une bouilloire (2 000 W, 30 min), 5 lampes (60 W chacune, 4 h), un téléviseur (100 W, 3 h).",
      items: [
        "1. Calcule l'énergie quotidienne totale en kWh. (2 pt)",
        "2. Calcule l'énergie mensuelle (30 jours). (1 pt)",
        "3. Calcule le montant si le kWh coûte 600 ariary. (1 pt)",
      ],
      corrige: [
        [{ text: "1. Bouilloire : 1 kWh ; lampes : 5 × 0,06 × 4 = 1,2 kWh ; TV : 0,3 kWh ; total = " }, { text: "2,5 kWh", cle: true }, { text: ". (2 pt)" }],
        [{ text: "2. 2,5 × 30 = " }, { text: "75 kWh", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. 75 × 600 = " }, { text: "45 000 ariary", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S26 — RÉVISION UNITÉ III
const S26 = {
  numero: 26, total: 39, unite: "III", type: "revision",
  titre: "Révision de l'Unité III — Optique",
  image: "images/img_unite3.png",
  imageLegende: "L'optique : réflexion, réfraction, spectre et couleurs",
  recap: [
    {
      ref: "Séances 20 et 21 — Réflexion et image du miroir plan",
      motsCles: ["réflexion", "normale", "r = i", "image virtuelle", "symétrique"],
      points: [
        "Les angles se mesurent par rapport à la normale (perpendiculaire au miroir au point d'incidence).",
        "1re loi : le rayon réfléchi est dans le plan d'incidence ; 2e loi : r = i.",
        "L'image d'un objet est le symétrique de l'objet par rapport au miroir : même grandeur, virtuelle (non recueillable sur écran), gauche et droite inversées : expérience des deux bougies.",
      ],
    },
    {
      ref: "Séance 22 — Réfraction et mirage",
      motsCles: ["réfraction", "rayon réfracté", "plan d'incidence", "mirage"],
      points: [
        "La réfraction est le changement de direction de la lumière à la traversée de la surface entre deux milieux transparents.",
        "1re loi (seule au programme) : le rayon réfracté est dans le plan d'incidence ; air → eau : il se rapproche de la normale ; eau → air : il s'en écarte.",
        "Conséquences : crayon « cassé », pièce qui réapparaît, poisson vu plus haut ; mirage : les rayons se courbent dans l'air chaud au ras du sol et l'on croit voir une flaque reflétant le ciel.",
      ],
    },
    {
      ref: "Séance 23 — Décomposition de la lumière blanche",
      motsCles: ["prisme", "spectre", "sept couleurs", "infrarouge", "ultraviolet"],
      points: [
        "Le prisme (ou la goutte de pluie) décompose la lumière blanche en un spectre : violet, indigo, bleu, vert, jaune, orangé, rouge ; le violet est le plus dévié.",
        "Au-delà du visible : l'infrarouge (chaleur) et l'ultraviolet (brûle la peau) : lumières invisibles.",
      ],
    },
    {
      ref: "Séances 24 et 25 — Couleurs, recomposition, fréquence et longueur d'onde",
      motsCles: ["absorption", "filtre", "disque de Newton", "recomposition", "fréquence", "longueur d'onde"],
      points: [
        "Lumière et son sont des ondes : v = λ × f ; le son se propage à environ 340 m/s, la lumière à 3 × 10⁸ m/s.",
        "Un objet renvoie sa couleur et absorbe les autres ; blanc renvoie tout, noir absorbe tout ; la couleur perçue dépend de l'éclairage (tissu vert en lumière rouge : noir).",
        "Un filtre ne laisse passer que la lumière de sa couleur.",
        "Le disque de Newton en rotation rapide paraît blanc grisâtre : la persistance des impressions lumineuses recompose le blanc : la lumière blanche est un mélange de toutes les couleurs.",
      ],
    },
  ],
  exercices: [
    {
      points: 5,
      consigne: "Réflexion :",
      items: [
        "1. Énonce les deux lois de la réflexion.",
        "2. Un rayon arrive à 25° de la normale : que vaut r ?",
        "3. Un rayon fait 30° avec la surface du miroir : calcule i.",
        "4. Que fait un rayon arrivant le long de la normale ?",
        "5. L'angle entre rayon incident et réfléchi vaut 100° : calcule i.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le rayon réfléchi est dans le plan d'incidence ; r = i", cle: true }, { text: "." }],
        [{ text: "2. r = " }, { text: "25°", cle: true }, { text: "." }],
        [{ text: "3. i = 90 − 30 = " }, { text: "60°", cle: true }, { text: "." }],
        [{ text: "4. Il " }, { text: "repart sur lui-même", cle: true }, { text: " (i = r = 0°)." }],
        [{ text: "5. i = 100 ÷ 2 = " }, { text: "50°", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Image du miroir plan :",
      items: [
        "1. Donne les quatre caractéristiques de l'image.",
        "2. Un chat est à 1,2 m du miroir : à quelle distance de lui est son image ?",
        "3. Pourquoi dit-on que l'image est virtuelle ?",
        "4. Décris l'expérience des deux bougies.",
        "5. Pourquoi AMBULANCE s'écrit-elle à l'envers sur les capots ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Symétrique, même grandeur, virtuelle, gauche-droite inversées", cle: true }, { text: "." }],
        [{ text: "2. 1,2 + 1,2 = " }, { text: "2,4 m", cle: true }, { text: "." }],
        [{ text: "3. Elle " }, { text: "ne peut pas être recueillie sur un écran", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "La bougie éteinte placée au symétrique derrière la vitre semble allumée : elle matérialise l'image", cle: true }, { text: "." }],
        [{ text: "5. Le rétroviseur " }, { text: "inverse gauche et droite : la double inversion rend le mot lisible", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Réfraction :",
      items: [
        "1. Définis la réfraction.",
        "2. Énonce sa première loi.",
        "3. Air → eau : le rayon se rapproche ou s'écarte de la normale ?",
        "4. Pourquoi le poisson paraît-il plus haut qu'il n'est ?",
        "5. Explique le mirage en deux phrases.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le changement de direction de la lumière à la traversée de la surface entre deux milieux transparents", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Le rayon réfracté est dans le plan d'incidence", cle: true }, { text: "." }],
        [{ text: "3. Il " }, { text: "se rapproche de la normale", cle: true }, { text: "." }],
        [{ text: "4. Les rayons venant du poisson " }, { text: "sont déviés à la surface : l'œil les prolonge en ligne droite", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "L'air chaud au ras du sol courbe les rayons du ciel vers l'œil : on croit voir une flaque qui reflète le ciel", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Lumière et couleurs :",
      items: [
        "1. Cite les sept couleurs du spectre dans l'ordre.",
        "2. Quelle couleur est la plus déviée par le prisme ?",
        "3. Pourquoi un tissu rouge est-il rouge en lumière blanche ?",
        "4. Que devient-il en lumière verte ?",
        "5. Pourquoi le disque de Newton paraît-il blanc en tournant vite ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Violet, indigo, bleu, vert, jaune, orangé, rouge", cle: true }, { text: "." }],
        [{ text: "2. Le " }, { text: "violet", cle: true }, { text: "." }],
        [{ text: "3. Il " }, { text: "renvoie le rouge et absorbe les autres couleurs", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Noir : il absorbe le vert et ne reçoit pas de rouge à renvoyer", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "La persistance des impressions lumineuses superpose les couleurs dans l'œil : leur mélange redonne le blanc", cle: true }, { text: "." }],
      ],
    },
  ],
};

// ============================================================ S27 — EXAMEN UNITÉ III
const S27 = {
  numero: 27, total: 39, unite: "III", type: "examen",
  titre: "Examen de l'Unité III — Optique",
  sousTitre: "SUJET D'EXAMEN No 3",
  consignes: [
    "Durée conseillée : une séance. Lis bien chaque question avant de répondre.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Fais des schémas soignés à la règle.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 4,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Énonce les deux lois de la réflexion. (1 pt)",
        "2. Qu'est-ce que le plan d'incidence ? (1 pt)",
        "3. Définis la réfraction de la lumière. (1 pt)",
        "4. Qu'est-ce que le spectre de la lumière blanche ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Le rayon réfléchi est dans le plan d'incidence ; l'angle de réflexion égale l'angle d'incidence", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Le plan contenant le rayon incident et la normale au point d'incidence", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Le changement de direction de la lumière à la traversée de la surface entre deux milieux transparents", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "La bande des sept couleurs obtenue en décomposant la lumière blanche", cle: true }, { text: " (violet → rouge). (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse)",
      items: [
        "1. L'image donnée par un miroir plan peut être projetée sur un écran.",
        "2. En passant de l'eau à l'air, le rayon s'écarte de la normale.",
        "3. Le rouge est la couleur la plus déviée par le prisme.",
        "4. Un objet noir absorbe toutes les couleurs.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : elle est virtuelle. (1 pt)" }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : c'est le violet ; le rouge est le moins dévié. (1 pt)" }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : c'est pourquoi il chauffe au soleil. (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Réflexion. Un rayon frappe un miroir plan avec un angle d'incidence de 55°.",
      items: [
        "1. Que vaut l'angle de réflexion ? Cite la loi utilisée. (1,5 pt)",
        "2. Calcule l'angle entre le rayon réfléchi et la surface du miroir. (1,5 pt)",
        "3. On incline le miroir pour que i devienne 40° : de combien a tourné le rayon réfléchi par rapport au rayon incident fixe ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. r = " }, { text: "55° (2e loi : r = i)", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 90 − 55 = " }, { text: "35°", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. L'angle total passe de 110° à 80° : le rayon a tourné de " }, { text: "30° (le double des 15° d'inclinaison)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Miroir et image. Naina (1,5 m) se tient à 80 cm d'un grand miroir plan.",
      items: [
        "1. Où se trouve son image et quelle est sa taille ? (1,5 pt)",
        "2. Naina recule de 20 cm : à quelle distance de lui passe son image ? (1,5 pt)",
        "3. Il tient une pancarte « OUI » : qu'observe-t-il dans le miroir ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "À 80 cm derrière le miroir, taille 1,5 m (même grandeur)", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 1 m + 1 m = " }, { text: "2 m", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. Le mot apparaît " }, { text: "inversé gauche-droite (IUO retourné)", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 4,
      consigne: "Couleurs. Un drapeau porte trois bandes : blanche, rouge et verte.",
      items: [
        "1. En lumière blanche, explique la couleur de la bande rouge. (1,5 pt)",
        "2. On éclaire le drapeau en lumière rouge : donne la couleur perçue de chaque bande. (1,5 pt)",
        "3. Quel instrument permettrait de décomposer la lumière blanche du projecteur, et qu'obtiendrait-on ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. Elle " }, { text: "renvoie la lumière rouge et absorbe toutes les autres couleurs", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. Blanche → " }, { text: "rouge", cle: true }, { text: " ; rouge → " }, { text: "rouge", cle: true }, { text: " ; verte → " }, { text: "noire", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Un prisme : on obtiendrait le spectre des sept couleurs", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S33 — RÉVISION + EXAMEN UNITÉ IV
const S33 = {
  numero: 33, total: 39, unite: "IV", type: "revisionExamen",
  titre: "Révision et Examen de l'Unité IV — Chimie",
  sousTitre: "SUJET D'EXAMEN No 4",
  image: "images/img_unite4.png",
  imageLegende: "La chimie : moles, équations-bilans, combustions, solutions et pH",
  recap: [
    {
      ref: "Séance 28 — La mole",
      motsCles: ["mole", "Avogadro", "masse molaire", "volume molaire"],
      points: [
        "Une mole = 6,02 × 10²³ entités ; masse molaire M en g/mol (H : 1 ; C : 12 ; O : 16 ; Na : 23 ; S : 32 ; Cl : 35,5 ; Fe : 56) ; n = m ÷ M.",
        "Volume molaire des gaz : 22,4 L/mol aux conditions normales : n = V ÷ 22,4.",
      ],
    },
    {
      ref: "Séance 29 — L'équation-bilan",
      motsCles: ["équation-bilan", "conservation des atomes", "bilan molaire", "bilan massique"],
      points: [
        "L'équation-bilan s'équilibre : les atomes se conservent : Fe + S → FeS.",
        "Bilan molaire : 1 mol + 1 mol → 1 mol ; bilan massique : 56 g + 32 g → 88 g : la masse se conserve.",
      ],
    },
    {
      ref: "Séance 30 — Alcanes et combustions",
      motsCles: ["CnH2n+2", "butane", "combustion complète", "incomplète", "CO"],
      points: [
        "Alcanes : CH4, C2H6, C3H8, C4H10 (formule générale CnH2n+2).",
        "Combustion complète : flamme bleue : CO2 + H2O (CH4 + 2 O2 → CO2 + 2 H2O) ; incomplète : flamme jaune, carbone + monoxyde de carbone CO : gaz invisible, inodore, mortel : toujours aérer !",
      ],
    },
    {
      ref: "Séances 31 et 32 — Solutions, concentration, pH",
      motsCles: ["soluté", "Cm = m ÷ V", "C = n ÷ V", "solution ionique", "pH", "BBT", "neutralisation"],
      points: [
        "Solution = soluté + solvant ; Cm = m ÷ V (g/L) ; C = n ÷ V (mol/L) ; Cm = C × M ; une solution ionique conduit le courant (ions mobiles).",
        "pH : < 7 acide (H+ majoritaires), 7 neutre, > 7 basique (OH− majoritaires) ; BBT : jaune / vert / bleu.",
        "Neutralisation : H+ + OH− → H2O ; Na+ et Cl− spectateurs : il se forme du sel et de l'eau.",
      ],
    },
  ],
  consignes: [
    "Revois d'abord le récapitulatif ci-dessus, puis traite le sujet d'examen par écrit.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "LA MOLE — Calculs (1 pt par réponse) :",
      items: [
        "1. Calcule M(H2O).",
        "2. Calcule M(CO2).",
        "3. Combien de moles dans 116 g de butane C4H10 ?",
        "4. Quel volume occupent 2,5 mol de gaz aux conditions normales ?",
        "5. Rappelle le nombre d'Avogadro.",
      ],
      corrige: [
        [{ text: "1. 2 + 16 = " }, { text: "18 g/mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. 12 + 32 = " }, { text: "44 g/mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. M = 58 g/mol : n = 116 ÷ 58 = " }, { text: "2 mol", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. 2,5 × 22,4 = " }, { text: "56 L", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "6,02 × 10²³ entités par mole", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "ÉQUATION-BILAN — La réaction fer-soufre :",
      items: [
        "1. Écris l'équation-bilan. (1 pt)",
        "2. Donne le bilan molaire. (1 pt)",
        "3. Donne le bilan massique (Fe : 56 ; S : 32). (1 pt)",
        "4. Quelle masse de FeS obtient-on à partir de 14 g de fer ? (1 pt)",
        "5. Équilibre : … H2 + … O2 → … H2O. (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Fe + S → FeS", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "1 mol de fer + 1 mol de soufre → 1 mol de sulfure de fer", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "56 g + 32 g → 88 g", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. 14 g = 0,25 mol → 0,25 × 88 = " }, { text: "22 g", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "2 H2 + O2 → 2 H2O", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "COMBUSTIONS — Le gaz butane :",
      items: [
        "1. Donne la formule du butane et sa famille. (1 pt)",
        "2. Quels sont les produits de sa combustion complète ? (1 pt)",
        "3. Quelle couleur de flamme signale une combustion incomplète ? (1 pt)",
        "4. Quels produits dangereux apparaissent alors ? (1 pt)",
        "5. Cite une règle de sécurité contre le monoxyde de carbone. (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "C4H10, famille des alcanes (CnH2n+2)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. " }, { text: "Dioxyde de carbone et eau", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Une flamme jaune", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Le carbone (suie) et le monoxyde de carbone CO", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "Toujours aérer la pièce ; jamais de réchaud ou de braises dans une chambre fermée", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "SOLUTIONS ET pH — On dissout 5,85 g de NaCl dans 0,5 L de solution (Na : 23 ; Cl : 35,5) :",
      items: [
        "1. Calcule la concentration massique. (1 pt)",
        "2. Calcule la concentration molaire. (1 pt)",
        "3. Cette solution conduit-elle le courant ? Pourquoi ? (1 pt)",
        "4. Le BBT y devient vert : conclus sur son pH. (1 pt)",
        "5. Écris l'équation de la neutralisation d'un acide par une base. (1 pt)",
      ],
      corrige: [
        [{ text: "1. Cm = 5,85 ÷ 0,5 = " }, { text: "11,7 g/L", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. C = 11,7 ÷ 58,5 = " }, { text: "0,2 mol/L", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Oui : la dissolution libère des ions mobiles Na+ et Cl−", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Vert = neutre : pH = 7", cle: true }, { text: ". (1 pt)" }],
        [{ text: "5. " }, { text: "H+ + OH− → H2O", cle: true }, { text: ". (1 pt)" }],
      ],
    },
  ],
};

// ============================================================ S34 — EXAMEN BLANC FINAL
const S38 = {
  numero: 38, total: 39, unite: "V", type: "revisionExamen",
  titre: "Révision et Examen de l'Unité V — Mouvement",
  sousTitre: "SUJET D'EXAMEN No 5",
  image: "images/img_unite5.png",
  imageLegende: "Le mouvement : trajectoires, relativité, vecteur vitesse et graphes",
  recap: [
    {
      ref: "Séance 35 — Trajectoires et relativité",
      motsCles: ["trajectoire", "rectiligne", "circulaire", "curviligne", "référentiel", "relativité"],
      points: [
        "La trajectoire est la ligne décrite par le mobile : rectiligne (droite), circulaire (cercle) ou curviligne (courbe).",
        "Le mouvement se décrit toujours PAR RAPPORT à un référentiel : un passager est immobile par rapport au bus, en mouvement par rapport à la route.",
        "Le repos absolu n'existe pas : mouvement et trajectoire dépendent du référentiel choisi.",
      ],
    },
    {
      ref: "Séance 36 — Le vecteur vitesse",
      motsCles: ["v = d ÷ t", "3,6", "vecteur", "tangent"],
      points: [
        "Vitesse moyenne : v = d ÷ t ; conversions : km/h ÷ 3,6 → m/s ; m/s × 3,6 → km/h.",
        "Le vecteur vitesse a quatre caractéristiques : origine (le mobile), direction, sens, norme.",
        "Il est toujours tangent à la trajectoire, dans le sens du mouvement.",
      ],
    },
    {
      ref: "Séance 37 — Les graphes du mouvement",
      motsCles: ["distance-temps", "vitesse-temps", "pente", "palier"],
      points: [
        "Graphe distance-temps : droite qui monte = uniforme (la pente donne la vitesse) ; palier = arrêt.",
        "Graphe vitesse-temps : horizontal = uniforme ; montée = accéléré ; descente = retardé.",
        "Un trajet réel enchaîne démarrage accéléré, croisière uniforme, freinage retardé.",
      ],
    },
  ],
  consignes: [
    "Réponds d'abord aux exercices de révision oralement, puis traite le sujet ci-dessous par écrit.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs.",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "Questions de cours. Réponds par une phrase complète :",
      items: [
        "1. Qu'est-ce que la trajectoire d'un mobile ? (1 pt)",
        "2. Pourquoi dit-on que le mouvement est relatif ? (1,5 pt)",
        "3. Cite les quatre caractéristiques du vecteur vitesse. (1,5 pt)",
        "4. Sur un graphe distance-temps, que signifie un palier horizontal ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "La ligne décrite par le mobile au cours de son mouvement", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. Parce qu'il " }, { text: "dépend du référentiel choisi", cle: true }, { text: " : immobile par rapport à l'un, en mouvement par rapport à l'autre. (1,5 pt)" }],
        [{ text: "3. " }, { text: "Origine, direction, sens, norme", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "4. " }, { text: "Le mobile est à l'arrêt", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "Vrai ou Faux ? (1 pt par bonne réponse ; corrige les affirmations fausses)",
      items: [
        "1. La valve d'une roue de vélo décrit un cercle par rapport au cadre.",
        "2. 36 km/h est plus rapide que 12 m/s.",
        "3. Le vecteur vitesse est toujours tangent à la trajectoire.",
        "4. Sur un graphe vitesse-temps, un palier signifie que le mobile est arrêté.",
        "5. Une pente plus forte du graphe distance-temps traduit une vitesse plus grande.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : 36 km/h = 10 m/s < 12 m/s." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : il signifie vitesse constante : mouvement uniforme." }],
        [{ text: "5. " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 5,
      consigne: "Calculs. Un taxi-brousse parcourt 216 km en 3 h.",
      items: [
        "a) Calcule sa vitesse moyenne en km/h. (1,5 pt)",
        "b) Convertis-la en m/s. (1,5 pt)",
        "c) À cette vitesse, quelle distance parcourt-il en 15 s ? (2 pts)",
      ],
      corrige: [
        [{ text: "a) v = 216 ÷ 3 = " }, { text: "72 km/h", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "b) 72 ÷ 3,6 = " }, { text: "20 m/s", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "c) d = v × t = 20 × 15 = " }, { text: "300 m", cle: true }, { text: ". (2 pts)" }],
      ],
    },
    {
      points: 5,
      consigne: "Graphe. Un cycliste part de la borne 0 : à 10 s il est à 60 m ; à 20 s à 120 m ; à 30 s il est toujours à 120 m ; à 40 s à 150 m.",
      items: [
        "a) Trace le graphe distance-temps. (2 pts)",
        "b) Nature du mouvement et vitesse sur les 20 premières secondes ? (2 pts)",
        "c) Que fait le cycliste entre 20 et 30 s ? (1 pt)",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Droite montante jusqu'à 20 s, palier jusqu'à 30 s, droite moins raide ensuite", cle: true }, { text: " ; axes t (s) et d (m) gradués. (2 pts)" }],
        [{ text: "b) Droite : " }, { text: "mouvement rectiligne uniforme", cle: true }, { text: " ; v = 120 ÷ 20 = " }, { text: "6 m/s", cle: true }, { text: ". (2 pts)" }],
        [{ text: "c) " }, { text: "Il est arrêté", cle: true }, { text: " : la distance ne change plus. (1 pt)" }],
      ],
    },
  ],
};

const S34 = {
  numero: 39, total: 39, unite: null, type: "examen",
  titre: "Examen blanc final — Tout le programme de T9",
  sousTitre: "EXAMEN BLANC DE FIN D'ANNÉE",
  consignes: [
    "Cet examen couvre les cinq unités de l'année : Mécanique ; Électricité ; Optique ; Chimie ; Mouvement.",
    "Durée conseillée : une séance complète. Gère bien ton temps : ne reste pas bloqué sur une question.",
    "Écris tes réponses au stylo, proprement, sur ta copie. Pose tous tes calculs (g = 10 N/kg).",
    "Le corrigé et le barème se trouvent à la page suivante : ne les regarde qu'après avoir terminé.",
  ],
  exercices: [
    {
      points: 5,
      consigne: "MÉCANIQUE — Le radeau. Un radeau de bois pèse 1 200 N et flotte sur le canal.",
      items: [
        "1. Quelles forces s'exercent sur le radeau immobile ? (1 pt)",
        "2. Que vaut la poussée d'Archimède ? Justifie. (1,5 pt)",
        "3. Le bois a une densité de 0,6 : pourquoi flotte-t-il ? (1 pt)",
        "4. On hisse une caisse de 200 N à bord depuis le quai, 2 m plus haut : calcule le travail fourni. (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Son poids (vers le bas) et la poussée d'Archimède (vers le haut)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. F = P = " }, { text: "1 200 N : à l'équilibre, les deux forces sont directement opposées", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Sa densité (0,6) est inférieure à celle de l'eau (1)", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. W = 200 × 2 = " }, { text: "400 J", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "ÉLECTRICITÉ — Le circuit. Deux résistors R1 = 30 Ω et R2 = 20 Ω sont montés en série sous 10 V.",
      items: [
        "1. Calcule la résistance équivalente. (1 pt)",
        "2. Calcule l'intensité du courant. (1,5 pt)",
        "3. Calcule la puissance totale consommée. (1,5 pt)",
        "4. Le circuit fonctionne 5 h : calcule l'énergie en joules. (1 pt)",
      ],
      corrige: [
        [{ text: "1. Re = 30 + 20 = " }, { text: "50 Ω", cle: true }, { text: ". (1 pt)" }],
        [{ text: "2. I = 10 ÷ 50 = " }, { text: "0,2 A", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. P = U × I = 10 × 0,2 = " }, { text: "2 W", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "4. W = 2 × 5 × 3 600 = " }, { text: "36 000 J", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "OPTIQUE — Miroir et couleurs.",
      items: [
        "1. Un rayon arrive sur un miroir plan avec i = 42° : que vaut r ? (1 pt)",
        "2. Vola est à 1,5 m du miroir : à quelle distance d'elle se trouve son image ? (1,5 pt)",
        "3. Cite les sept couleurs du spectre. (1,5 pt)",
        "4. De quelle couleur paraît un tissu bleu éclairé en lumière rouge ? Pourquoi ? (1 pt)",
      ],
      corrige: [
        [{ text: "1. r = " }, { text: "42°", cle: true }, { text: " (r = i). (1 pt)" }],
        [{ text: "2. 1,5 + 1,5 = " }, { text: "3 m", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "3. " }, { text: "Violet, indigo, bleu, vert, jaune, orangé, rouge", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "4. " }, { text: "Noir : il absorbe le rouge et ne reçoit aucun bleu à renvoyer", cle: true }, { text: ". (1 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "CHIMIE — Le réchaud. On brûle complètement 1 mol de méthane CH4 (C : 12 ; H : 1 ; O : 16).",
      items: [
        "1. Écris l'équation-bilan de la combustion complète. (1,5 pt)",
        "2. Quel volume de CO2 se dégage aux conditions normales ? (1 pt)",
        "3. La flamme devient jaune : quels produits dangereux se forment ? (1 pt)",
        "4. Le BBT ajouté à une solution la colore en jaune : acide, neutre ou basique ? Quel ion majoritaire ? (1,5 pt)",
      ],
      corrige: [
        [{ text: "1. " }, { text: "CH4 + 2 O2 → CO2 + 2 H2O", cle: true }, { text: ". (1,5 pt)" }],
        [{ text: "2. 1 mol : " }, { text: "22,4 L", cle: true }, { text: ". (1 pt)" }],
        [{ text: "3. " }, { text: "Le carbone (suie) et le monoxyde de carbone CO", cle: true }, { text: ". (1 pt)" }],
        [{ text: "4. " }, { text: "Acide : ions H+ majoritaires", cle: true }, { text: ". (1,5 pt)" }],
      ],
    },
    {
      points: 5,
      consigne: "MOUVEMENT — Le retour. Le taxi-brousse du retour parcourt 90 km en 1 h 15 min (1,25 h).",
      items: [
        "a) Calcule sa vitesse moyenne en km/h puis en m/s. (2 pts)",
        "b) Sur le graphe distance-temps du trajet, un palier de 20 min apparaît : que s'est-il passé ? (1 pt)",
        "c) Le passager assis est-il en mouvement par rapport au chauffeur ? par rapport à la route ? (2 pts)",
      ],
      corrige: [
        [{ text: "a) v = 90 ÷ 1,25 = " }, { text: "72 km/h", cle: true }, { text: " ; 72 ÷ 3,6 = " }, { text: "20 m/s", cle: true }, { text: ". (2 pts)" }],
        [{ text: "b) " }, { text: "Le véhicule était à l'arrêt", cle: true }, { text: " : la distance n'a pas évolué pendant 20 min. (1 pt)" }],
        [{ text: "c) " }, { text: "Immobile par rapport au chauffeur", cle: true }, { text: " ; " }, { text: "en mouvement par rapport à la route", cle: true }, { text: " : le mouvement est relatif. (2 pts)" }],
      ],
    },
  ],
};

module.exports = { seances: [S10, S11, S18, S19, S26, S27, S33, S38, S34] };
