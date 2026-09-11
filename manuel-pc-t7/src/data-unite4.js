// data-unite4.js — T7 Unité IV : ÉNERGIE (séances 27 à 31)
const DOC = "Programme d'études T7 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S27 = {
  numero: 27, total: 34, unite: "IV", theme: "Énergie",
  titre: "Le concept d'énergie et les sources d'énergie",
  objectif: "définir l'énergie par ses effets et de citer les principales sources d'énergie avec leurs propriétés",
  documentation: DOC,
  support: "Images : Soleil, barrage, éolienne, bois de chauffe, panneau solaire ; bougie, lampe de poche, élastique",
  image: "images/img_seance27.png",
  imageLegende: "Figure 22 — Les grandes sources d'énergie : solaire, hydraulique, éolienne, biomasse",
  revision: {
    qa: [
      { q: "Que faut-il à une lampe pour éclairer ?", ra: "Du courant électrique fourni par une pile ou le secteur." },
      { q: "Que faut-il à un feu pour chauffer la marmite ?", ra: "Du bois ou du charbon qui brûle." },
      { q: "Que faut-il à un vélo pour avancer ?", ra: "L'effort musculaire du cycliste." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Pas de charbon : pas de repas chaud. Pas de carburant : le taxi-brousse reste au garage. Pas de pile : la radio se tait. Coupure de la JIRAMA : toute la ville s'éteint !",
      "Quel « ingrédient invisible » manque à chaque fois ?",
      "R.A. : L'énergie : ce qu'il faut fournir pour chauffer, éclairer, faire bouger.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le concept d'énergie et les sources d'énergie ». Après cette séance, vous serez capables de reconnaître l'énergie par ses effets et de citer les principales sources d'énergie avec leurs propriétés.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : la bougie allumée éclaire et chauffe ; la lampe de poche éclaire grâce à sa pile ; l'élastique tendu propulse la boulette de papier ; et sur ces images : le Soleil, une chute d'eau, une éolienne, du bois de chauffe, un panneau solaire. Dans chaque cas, cherchez : d'où vient la capacité de produire chaleur, lumière ou mouvement ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation", support: "Objets et images",
  },
  analyse: {
    qa: [
      { q: "À quoi reconnaît-on la présence d'énergie ?", ra: "À ses effets : produire un mouvement, de la chaleur ou de la lumière." },
      { q: "D'où vient l'énergie de la lampe de poche ? Du feu de cuisine ?", ra: "De la pile ; du bois qui brûle : ce sont des sources d'énergie." },
      { q: "Cite des sources naturelles d'énergie.", ra: "Le Soleil, l'eau en mouvement, le vent, la biomasse (bois, charbon, déchets végétaux), l'uranium (nucléaire)." },
      { q: "Lesquelles se renouvellent naturellement ?", ra: "Le solaire, l'hydraulique, l'éolien, la biomasse bien gérée : sources renouvelables." },
      { q: "Et le pétrole, le charbon de terre, l'uranium ?", ra: "Ils s'épuisent : sources non renouvelables." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Images, tableau",
  },
  synthese: {
    enseignant: "Donc, l'énergie est ce qu'il faut fournir pour produire un mouvement, de la chaleur ou de la lumière : on la reconnaît à ses effets. Elle provient de sources d'énergie : le Soleil (rayonnement), l'eau en mouvement (hydraulique), le vent (éolienne), la biomasse (bois, charbon de bois, déchets végétaux), et l'uranium (nucléaire). Les sources renouvelables se reconstituent naturellement (soleil, eau, vent, biomasse gérée) ; les sources non renouvelables (pétrole, charbon de terre, gaz, uranium) s'épuisent. Chaque source a ses propriétés : puissance, disponibilité, coût, pollution : les connaître aide à bien choisir.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Quel effet de l'énergie observes-tu ? (mouvement, chaleur, lumière)",
      items: [
        "a) Le fer à repasser au charbon lisse le linge.",
        "b) Le moulin à eau tourne.",
        "c) La lampe du salon éclaire.",
        "d) Le feu de bois cuit le riz et éclaire la cuisine.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Chaleur", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Mouvement", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Lumière", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Chaleur ET lumière", cle: true }, { text: " : une source peut produire plusieurs effets." }],
      ],
    },
    {
      consigne: "Renouvelable ou non renouvelable ?",
      items: [
        "a) Le vent.  b) Le pétrole.  c) Le soleil.  d) Le charbon de terre.  e) Le bois replanté.",
      ],
      corrige: [
        [{ text: "Renouvelables : " }, { text: "le vent, le soleil, le bois replanté", cle: true }, { text: ". Non renouvelables : " }, { text: "le pétrole, le charbon de terre", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : effets – sources – renouvelables – énergie – s'épuisent – mouvement.",
      items: [
        "a) L'……… se reconnaît à ses ……… : produire un ………, de la chaleur ou de la lumière.",
        "b) Elle provient de ……… d'énergie : certaines sont ………, d'autres ……… .",
      ],
      corrige: [
        [{ text: "a) L'" }, { text: "énergie", cle: true }, { text: " se reconnaît à ses " }, { text: "effets", cle: true }, { text: " : produire un " }, { text: "mouvement", cle: true }, { text: ", de la chaleur ou de la lumière." }],
        [{ text: "b) Elle provient de " }, { text: "sources", cle: true }, { text: " d'énergie : certaines sont " }, { text: "renouvelables", cle: true }, { text: ", d'autres " }, { text: "s'épuisent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Donne la définition de l'énergie par ses effets.",
        "b) Cite cinq sources d'énergie et classe-les (renouvelable / non renouvelable).",
        "c) Donne une propriété (avantage ou inconvénient) du solaire, de l'hydraulique et de la biomasse.",
        "d) Pourquoi dit-on que couper le bois sans replanter rend la biomasse non renouvelable ?",
      ],
      corrige: [
        [{ text: "a) L'énergie est " }, { text: "ce qu'il faut fournir pour produire un mouvement, de la chaleur ou de la lumière", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Renouvelables : soleil, eau, vent, biomasse gérée ; non renouvelables : pétrole (ou charbon de terre, gaz, uranium)", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Solaire : gratuit mais absent la nuit ; hydraulique : puissant mais exige un cours d'eau ; biomasse : disponible partout mais fumées et déforestation", cle: true }, { text: "." }],
        [{ text: "d) Parce que " }, { text: "la forêt ne se reconstitue plus assez vite", cle: true }, { text: " : la source s'épuise comme un stock." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["énergie", "source d'énergie", "renouvelable", "non renouvelable", "effets"],
    sections: [
      {
        titre: "1. Qu'est-ce que l'énergie ?",
        paras: [
          "L'énergie ne se voit pas directement : on la reconnaît à ses effets. Il faut de l'énergie pour :",
        ],
        puces: [
          "produire un mouvement (rouler, voler, pomper, moudre) ;",
          "produire de la chaleur (cuire, chauffer, repasser) ;",
          "produire de la lumière (éclairer).",
        ],
      },
      {
        titre: "2. Les principales sources d'énergie",
        puces: [
          "Le Soleil (énergie solaire) : gratuit, inépuisable, mais absent la nuit et par temps couvert.",
          "L'eau en mouvement (énergie hydraulique) : puissante et régulière, mais il faut un cours d'eau et des installations.",
          "Le vent (énergie éolienne) : gratuit, mais irrégulier.",
          "La biomasse (bois, charbon de bois, déchets végétaux) : disponible partout, mais fumées et risque de déforestation.",
          "L'uranium (énergie nucléaire) : très concentrée, mais déchets dangereux ; non renouvelable.",
          "Les combustibles fossiles (pétrole, gaz, charbon de terre) : pratiques mais polluants et épuisables.",
        ],
        paras: [],
      },
      {
        titre: "3. Renouvelable ou non ?",
        paras: [
          "Une source renouvelable se reconstitue naturellement à l'échelle humaine : soleil, vent, eau, biomasse bien gérée. Une source non renouvelable s'épuise : chaque litre de pétrole brûlé est perdu pour toujours.",
          "À Madagascar, plus de la moitié de l'électricité provient déjà de l'hydraulique, et le solaire progresse partout : notre île est riche en énergies renouvelables !",
        ],
      },
    ],
    saisTu: [
      "Le Soleil est la source de presque toutes les autres ! C'est lui qui évapore l'eau des océans (pluies → rivières → barrages), qui chauffe l'air inégalement (vents → éoliennes), et qui fait pousser les plantes (biomasse). Même le pétrole est du soleil fossile : des organismes marins nourris de lumière il y a des millions d'années.",
    ],
    experience: [
      "L'inventaire énergétique de la maison :",
      "1. Fais le tour de chez toi et liste tout ce qui produit mouvement, chaleur ou lumière.",
      "2. Pour chaque objet, identifie la source d'énergie : bois, charbon, pétrole, pile, secteur JIRAMA, soleil, muscles !",
      "3. Classe les sources en renouvelables et non renouvelables.",
      "4. Compte : quelle est la source la plus utilisée dans ta maison ?",
    ],
  },
  substitutions: [
    { officiel: "Documents et affiches sur l'énergie", local: "Images de journaux, dessins au tableau, objets du quotidien" },
    { officiel: "Maquettes de sources d'énergie", local: "Bougie, lampe de poche, élastique, moulinet en papier" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. On reconnaît l'énergie :  a) à sa couleur   b) à ses effets   c) à son odeur",
        "2. Une source renouvelable :  a) s'épuise   b) se reconstitue naturellement   c) n'existe pas",
        "3. Le pétrole est une source :  a) renouvelable   b) non renouvelable   c) inépuisable",
        "4. L'énergie du vent s'appelle :  a) hydraulique   b) éolienne   c) biomasse",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "à ses effets", cle: true }, { text: " (mouvement, chaleur, lumière)." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "elle se reconstitue naturellement", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "non renouvelable", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "éolienne", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Il faut de l'énergie pour produire de la lumière.",
        "2. Le Soleil est une source non renouvelable.",
        "3. La biomasse regroupe le bois et les déchets végétaux.",
        "4. Une même source peut produire plusieurs effets.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : il brille pour des milliards d'années : renouvelable." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Vrai", cle: true }, { text: " : le feu de bois chauffe ET éclaire." }],
      ],
    },
    {
      points: 6,
      consigne: "Associe chaque situation à sa source d'énergie (solaire, hydraulique, éolienne, biomasse, nucléaire) :",
      items: [
        "1. Le linge sèche au soleil.",
        "2. Le barrage d'Andekaleka produit de l'électricité.",
        "3. La pirogue à voile traverse la baie.",
        "4. Le riz cuit sur le feu de charbon de bois.",
        "5. Une centrale utilise l'uranium.",
        "6. Le chauffe-eau du toit chauffe l'eau au soleil.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Solaire", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Hydraulique", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Éolienne", cle: true }, { text: " : le vent pousse la voile." }],
        [{ text: "4. " }, { text: "Biomasse", cle: true }, { text: "." }],
        [{ text: "5. " }, { text: "Nucléaire", cle: true }, { text: "." }],
        [{ text: "6. " }, { text: "Solaire", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Le village de Soavina veut installer une nouvelle source d'électricité. Trois projets : petit barrage sur la rivière, panneaux solaires, groupe électrogène à essence.",
      items: [
        "1. Classe les trois sources : renouvelable ou non ?",
        "2. Donne un avantage et un inconvénient de chaque projet.",
        "3. Quel projet conseillerais-tu si la rivière coule toute l'année ? Justifie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Barrage et solaire : renouvelables ; groupe à essence : non renouvelable", cle: true }, { text: "." }],
        [{ text: "2. Barrage : " }, { text: "régulier / travaux coûteux", cle: true }, { text: " ; solaire : " }, { text: "simple / rien la nuit", cle: true }, { text: " ; groupe : " }, { text: "immédiat / carburant cher et polluant", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Le barrage : énergie régulière jour et nuit, sans carburant", cle: true }, { text: ", la rivière étant permanente." }],
      ],
    },
  ],
};

const S28 = {
  numero: 28, total: 34, unite: "IV", theme: "Énergie",
  titre: "Le stockage de l'énergie",
  objectif: "expliquer comment l'énergie peut être stockée dans une pile, une batterie ou un barrage hydroélectrique",
  documentation: DOC,
  support: "Piles neuve et usée, lampe, batterie de téléphone, images de barrage, bouteille d'eau percée, bassine",
  image: "images/img_seance28.png",
  imageLegende: "Figure 23 — Deux réservoirs d'énergie : la pile (chimique) et le barrage (eau en hauteur)",
  revision: {
    qa: [
      { q: "Qu'est-ce que l'énergie ?", ra: "Ce qu'il faut fournir pour produire mouvement, chaleur ou lumière." },
      { q: "Cite trois sources renouvelables.", ra: "Soleil, vent, eau en mouvement (et biomasse gérée)." },
      { q: "Quel inconvénient partagent le soleil et le vent ?", ra: "Ils sont irréguliers : pas de soleil la nuit, pas toujours de vent." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La lampe solaire de Voahangy éclaire toute la soirée… alors que le soleil est couché depuis des heures ! Et la JIRAMA fournit de l'électricité à minuit, quand la demande est faible mais que la rivière coule toujours.",
      "Comment utiliser le soleil la nuit et garder l'eau de la rivière « en réserve » ?",
      "R.A. : Il faut stocker l'énergie quelque part pour l'utiliser plus tard.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Lampe solaire",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Le stockage de l'énergie ». Après cette séance, vous serez capables d'expliquer comment la pile, la batterie et le barrage hydroélectrique mettent l'énergie en réserve.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : cette pile neuve allume la lampe ; cette pile usée ne l'allume plus : qu'est-ce qui s'est vidé ? La batterie du téléphone se recharge le jour et sert le soir. Et cette bouteille pleine, percée en bas : tant que le bouchon du trou est fermé, rien ; j'ouvre : le jet d'eau fait tourner le moulinet ! Où l'énergie attendait-elle ?",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation, expérimentation", support: "Piles, lampe, bouteille percée, moulinet",
  },
  analyse: {
    qa: [
      { q: "Que contient une pile neuve que la pile usée n'a plus ?", ra: "Une réserve d'énergie chimique, transformée en électricité à la demande." },
      { q: "Quelle différence entre pile et batterie ?", ra: "La batterie est rechargeable : on peut la remplir à nouveau d'énergie ; la pile ordinaire ne l'est pas." },
      { q: "Où l'énergie de la bouteille attendait-elle ?", ra: "Dans l'eau placée en hauteur : elle se libère quand l'eau descend." },
      { q: "Comment le barrage stocke-t-il l'énergie ?", ra: "En retenant l'eau en hauteur dans sa retenue : en descendant dans les conduites, l'eau fait tourner les turbines." },
      { q: "Pourquoi le stockage est-il si important pour le solaire et l'éolien ?", ra: "Parce que ces sources sont irrégulières : la batterie garde le surplus du jour pour la nuit." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences",
  },
  synthese: {
    enseignant: "Donc, l'énergie peut être mise en réserve pour être utilisée plus tard : c'est le stockage. La pile et la batterie stockent l'énergie sous forme chimique et la restituent en électricité ; la batterie, rechargeable, se remplit et se vide des centaines de fois : c'est elle qui équipe téléphones et lampes solaires. Le barrage hydroélectrique stocke l'énergie en retenant l'eau en hauteur : cette réserve d'eau, en descendant, fait tourner les turbines qui produisent l'électricité, à la demande, jour et nuit. Le stockage rend les énergies irrégulières (solaire, éolien) utilisables à tout moment.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Où l'énergie est-elle stockée ?",
      items: [
        "a) Dans la lampe solaire qui éclaire la nuit.",
        "b) Derrière le mur du barrage.",
        "c) Dans la radio à piles.",
        "d) Dans le téléphone chargé.",
      ],
      corrige: [
        [{ text: "a) Dans sa " }, { text: "batterie (énergie chimique)", cle: true }, { text: ", remplie le jour par le panneau." }],
        [{ text: "b) Dans " }, { text: "l'eau retenue en hauteur", cle: true }, { text: "." }],
        [{ text: "c) Dans " }, { text: "les piles (énergie chimique)", cle: true }, { text: "." }],
        [{ text: "d) Dans " }, { text: "sa batterie rechargeable", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Une pile usée a épuisé sa réserve d'énergie.",
        "b) Une batterie ne peut se remplir qu'une seule fois.",
        "c) Le barrage stocke l'énergie en retenant l'eau en hauteur.",
        "d) Le stockage permet d'utiliser le soleil même la nuit.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elle se recharge des centaines de fois." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : grâce à la batterie chargée le jour." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : batterie – hauteur – stockage – chimique – turbines – rechargeable.",
      items: [
        "a) Le ……… met l'énergie en réserve pour plus tard.",
        "b) La pile stocke une énergie ……… ; la ………, elle, est ……… .",
        "c) Le barrage retient l'eau en ……… ; en descendant, elle fait tourner les ……… .",
      ],
      corrige: [
        [{ text: "a) Le " }, { text: "stockage", cle: true }, { text: " met l'énergie en réserve pour plus tard." }],
        [{ text: "b) La pile stocke une énergie " }, { text: "chimique", cle: true }, { text: " ; la " }, { text: "batterie", cle: true }, { text: ", elle, est " }, { text: "rechargeable", cle: true }, { text: "." }],
        [{ text: "c) Le barrage retient l'eau en " }, { text: "hauteur", cle: true }, { text: " ; en descendant, elle fait tourner les " }, { text: "turbines", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Explique le trajet de l'énergie dans une lampe solaire, du soleil du matin à la lumière du soir.",
        "b) Pourquoi le barrage est-il à la fois une source et un stockage d'énergie ?",
        "c) Quelle différence essentielle y a-t-il entre une pile et une batterie ?",
        "d) Pourquoi ne faut-il jamais jeter les piles usées dans la nature ?",
      ],
      corrige: [
        [{ text: "a) Le jour, " }, { text: "le panneau charge la batterie ; le soir, la batterie restitue l'électricité", cle: true }, { text: " qui allume la lampe." }],
        [{ text: "b) Il utilise l'eau de la rivière (source hydraulique) " }, { text: "et la garde en réserve en hauteur (stockage)", cle: true }, { text: " pour produire à la demande." }],
        [{ text: "c) La batterie est " }, { text: "rechargeable, la pile ordinaire ne l'est pas", cle: true }, { text: "." }],
        [{ text: "d) Parce qu'elles contiennent " }, { text: "des produits chimiques toxiques", cle: true }, { text: " qui polluent sol et eau." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["stockage", "pile", "batterie", "barrage hydroélectrique", "réserve"],
    sections: [
      {
        titre: "1. Pourquoi stocker l'énergie ?",
        paras: [
          "Certaines sources sont irrégulières (pas de soleil la nuit, vent capricieux) et nos besoins ne coïncident pas toujours avec la production. Le stockage met l'énergie en réserve pour l'utiliser au bon moment.",
        ],
      },
      {
        titre: "2. La pile et la batterie",
        paras: [
          "La pile enferme une réserve d'énergie chimique, transformée en électricité à la demande. Une fois vidée, la pile ordinaire est morte.",
          "La batterie (ou accumulateur) est rechargeable : on peut la remplir et la vider des centaines de fois. C'est elle qui équipe téléphones, lampes solaires, motos et voitures.",
        ],
      },
      {
        titre: "3. Le barrage hydroélectrique",
        paras: [
          "Le barrage retient l'eau de la rivière dans une retenue en hauteur : cette eau est une réserve d'énergie. Quand on en a besoin, on la laisse descendre dans les conduites : elle fait tourner les turbines, qui entraînent les alternateurs producteurs d'électricité.",
          "Avantage précieux : la production se règle à la demande, jour et nuit, en ouvrant plus ou moins les vannes.",
        ],
      },
      {
        titre: "4. Bien utiliser les réserves",
        puces: [
          "Recharger les batteries de préférence quand l'énergie est abondante (le jour pour le solaire).",
          "Ne jamais jeter piles et batteries dans la nature : leurs produits chimiques sont toxiques.",
          "Économiser l'énergie stockée : éteindre ce qui ne sert pas fait durer la réserve !",
        ],
        paras: [],
      },
    ],
    saisTu: [
      "Le barrage d'Andekaleka, sur la rivière Vohitra, fournit une grande partie de l'électricité d'Antananarivo ! Et certains grands barrages du monde savent même « remonter le temps » : la nuit, quand l'électricité est abondante, ils pompent l'eau vers le haut pour la re-stocker : on appelle cela une station de pompage-turbinage.",
    ],
    experience: [
      "Le château d'eau miniature :",
      "1. Perce un petit trou près du fond d'une bouteille en plastique ; bouche-le avec le doigt et remplis la bouteille.",
      "2. Pose la bouteille en hauteur au bord d'une bassine, place ton moulinet en papier sous le trou.",
      "3. Libère le trou : le jet fait tourner le moulinet : l'énergie stockée en hauteur devient mouvement !",
      "4. Recommence avec la bouteille posée plus bas : le jet est plus faible. Plus c'est haut, plus la réserve d'énergie est grande.",
    ],
  },
  substitutions: [
    { officiel: "Maquette de barrage", local: "Bouteille percée en hauteur + moulinet en papier + bassine" },
    { officiel: "Batteries d'expérimentation", local: "Batterie de téléphone usagée (observation seulement), piles neuve et usée" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Stocker l'énergie, c'est :  a) la détruire   b) la mettre en réserve   c) la vendre",
        "2. La pile stocke une énergie :  a) chimique   b) lumineuse   c) éolienne",
        "3. La batterie se distingue de la pile car elle est :  a) plus lourde   b) rechargeable   c) plus colorée",
        "4. Le barrage stocke l'énergie grâce à :  a) l'eau en hauteur   b) le vent   c) le sable",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "la mettre en réserve", cle: true }, { text: " pour plus tard." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "chimique", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "rechargeable", cle: true }, { text: "." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "l'eau retenue en hauteur", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Une lampe solaire peut éclairer la nuit grâce à sa batterie.",
        "2. L'eau du barrage stockée en hauteur est une réserve d'énergie.",
        "3. On peut jeter les piles usées dans la rizière.",
        "4. Le stockage est inutile pour les énergies irrégulières.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Faux", cle: true }, { text: " : leurs produits toxiques polluent sol, eau et riz !" }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : c'est pour elles qu'il est le plus précieux." }],
      ],
    },
    {
      points: 6,
      consigne: "Complète avec les mots proposés : vannes – batterie – jour – turbines – chimique – hauteur.",
      items: [
        "La lampe solaire charge sa ……… le ……… ; l'énergie y attend sous forme ……… . Le barrage garde l'eau en ……… ; on ouvre les ……… et l'eau fait tourner les ……… .",
      ],
      corrige: [
        [{ text: "La lampe solaire charge sa " }, { text: "batterie", cle: true }, { text: " le " }, { text: "jour", cle: true }, { text: " ; l'énergie y attend sous forme " }, { text: "chimique", cle: true }, { text: ". Le barrage garde l'eau en " }, { text: "hauteur", cle: true }, { text: " ; on ouvre les " }, { text: "vannes", cle: true }, { text: " et l'eau fait tourner les " }, { text: "turbines", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Projet. L'école veut éclairer deux salles le soir avec des panneaux solaires.",
      items: [
        "1. Quel élément indispensable faut-il ajouter aux panneaux pour éclairer le soir ? Pourquoi ?",
        "2. Décris le trajet de l'énergie du matin au soir dans cette installation.",
        "3. Cite deux gestes pour faire durer la réserve d'énergie de l'installation.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Des batteries : sans stockage, pas d'électricité après le coucher du soleil", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Le jour, les panneaux chargent les batteries ; le soir, les batteries alimentent les lampes", cle: true }, { text: "." }],
        [{ text: "3. " }, { text: "Éteindre en sortant ; utiliser des lampes économes", cle: true }, { text: " ; n'éclairer que le temps nécessaire." }],
      ],
    },
  ],
};

const S29 = {
  numero: 29, total: 34, unite: "IV", theme: "Énergie",
  titre: "Les formes d'énergie",
  objectif: "identifier les cinq formes d'énergie : électrique, thermique, chimique, mécanique et rayonnante",
  documentation: DOC,
  support: "Lampe de poche, bougie, aliments (image), élastique, jouet à ressort, radio, images variées",
  image: "images/img_seance29.png",
  imageLegende: "Figure 24 — Les cinq formes d'énergie : rayonnante, thermique, électrique, chimique, mécanique",
  revision: {
    qa: [
      { q: "Qu'est-ce que le stockage de l'énergie ?", ra: "Sa mise en réserve pour une utilisation ultérieure." },
      { q: "Sous quelle forme la pile stocke-t-elle l'énergie ?", ra: "Sous forme chimique." },
      { q: "Quelle réserve le barrage utilise-t-il ?", ra: "L'eau retenue en hauteur." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Regardez la cour à midi : le soleil brille (lumière), le sol brûle les pieds (chaleur), le vent agite les arbres (mouvement), le repas nous attend (aliments), et la sonnerie électrique va bientôt retentir (courant) !",
      "L'énergie est partout, mais se présente-t-elle toujours sous le même « visage » ?",
      "R.A. : Non : lumière, chaleur, mouvement, aliments, électricité semblent différents.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Observation du milieu", support: "La cour de l'école",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les formes d'énergie ». Après cette séance, vous serez capables d'identifier les cinq formes d'énergie : électrique, thermique, chimique, mécanique et rayonnante.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces objets : la lampe de poche allumée (que fournit la pile au circuit ?) ; la bougie (que dégage la flamme ?) ; ces aliments et ce morceau de charbon (qu'ont-ils en réserve ?) ; ce jouet à ressort remonté qui s'élance ; le rayon de soleil qui traverse la fenêtre. Nommons ensemble ce que « transporte » chaque situation.",
    apprenants: "Observent silencieusement.",
    technique: "Démarche d'observation", support: "Objets divers",
  },
  analyse: {
    qa: [
      { q: "Quelle forme d'énergie circule dans les fils de la lampe de poche ?", ra: "L'énergie électrique, portée par le courant." },
      { q: "Quelle forme la flamme et l'eau chaude possèdent-elles ?", ra: "L'énergie thermique : la chaleur." },
      { q: "Quelle forme se cache dans les aliments, le bois, le charbon, la pile ?", ra: "L'énergie chimique, libérée par la digestion ou la combustion." },
      { q: "Quelle forme possède l'objet en mouvement ou le ressort tendu ?", ra: "L'énergie mécanique (mouvement, ou position/déformation prête à agir)." },
      { q: "Quelle forme la lumière transporte-t-elle ?", ra: "L'énergie rayonnante, celle du rayonnement du Soleil ou d'une lampe." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Objets et images",
  },
  synthese: {
    enseignant: "Donc, l'énergie se présente sous cinq formes principales. L'énergie électrique, transportée par le courant dans les circuits. L'énergie thermique, liée à la chaleur. L'énergie chimique, en réserve dans les aliments, le bois, le charbon, le pétrole et les piles. L'énergie mécanique, celle du mouvement et des objets prêts à bouger (eau en hauteur, ressort tendu, arc bandé). L'énergie rayonnante, transportée par la lumière. Une même histoire d'énergie change souvent de forme : les aliments (chimique) font courir l'athlète (mécanique) qui transpire (thermique) !",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Nomme la forme d'énergie principale de chaque situation :",
      items: [
        "a) Le courant dans les fils de la maison.",
        "b) L'eau bouillante de la marmite.",
        "c) Le riz dans l'assiette.",
        "d) La pirogue qui glisse sur l'eau.",
        "e) Le rayon de soleil.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Électrique", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Thermique", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Chimique", cle: true }, { text: " : libérée par la digestion." }],
        [{ text: "d) " }, { text: "Mécanique", cle: true }, { text: " : énergie de mouvement." }],
        [{ text: "e) " }, { text: "Rayonnante", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le charbon possède de l'énergie chimique.",
        "b) L'énergie rayonnante est transportée par la lumière.",
        "c) Un ressort tendu ne possède aucune énergie.",
        "d) L'énergie thermique est liée à la chaleur.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: " : libérée par la combustion." }],
        [{ text: "b) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Faux", cle: true }, { text: " : il a une énergie mécanique en réserve, prête à agir." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail individuel sur ardoise", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : mécanique – rayonnante – chimique – courant – thermique – formes.",
      items: [
        "a) L'énergie électrique est transportée par le ……… ; l'énergie ……… est liée à la chaleur.",
        "b) Les aliments et le bois contiennent de l'énergie ……… ; la lumière transporte l'énergie ……… .",
        "c) Le mouvement est une énergie ……… ; l'énergie existe donc sous plusieurs ……… .",
      ],
      corrige: [
        [{ text: "a) Transportée par le " }, { text: "courant", cle: true }, { text: " ; l'énergie " }, { text: "thermique", cle: true }, { text: " est liée à la chaleur." }],
        [{ text: "b) De l'énergie " }, { text: "chimique", cle: true }, { text: " ; la lumière transporte l'énergie " }, { text: "rayonnante", cle: true }, { text: "." }],
        [{ text: "c) Une énergie " }, { text: "mécanique", cle: true }, { text: " ; plusieurs " }, { text: "formes", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pour chaque objet, indique la forme d'énergie qu'il possède ou utilise, en justifiant :",
      items: [
        "a) Une pile neuve.",
        "b) Un zébu qui tire la charrette.",
        "c) Le fatapera allumé.",
        "d) Le panneau solaire au soleil (énergie reçue).",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Chimique", cle: true }, { text: " : réserve prête à devenir électricité." }],
        [{ text: "b) " }, { text: "Mécanique", cle: true }, { text: " : il produit un mouvement (nourri par l'énergie chimique de l'herbe !)." }],
        [{ text: "c) " }, { text: "Thermique", cle: true }, { text: " (et rayonnante) : chaleur et lumière du charbon qui brûle." }],
        [{ text: "d) " }, { text: "Rayonnante", cle: true }, { text: " : la lumière du Soleil reçue par le panneau." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["énergie électrique", "énergie thermique", "énergie chimique", "énergie mécanique", "énergie rayonnante"],
    sections: [
      {
        titre: "1. Les cinq formes d'énergie",
        puces: [
          "ÉLECTRIQUE : transportée par le courant dans les fils et circuits. Exemples : secteur JIRAMA, pile qui débite.",
          "THERMIQUE : liée à la chaleur. Exemples : eau bouillante, braises, fer à repasser chaud.",
          "CHIMIQUE : en réserve dans la matière. Exemples : aliments, bois, charbon, pétrole, piles et batteries.",
          "MÉCANIQUE : liée au mouvement, ou à une position/déformation prête à agir. Exemples : vent, eau qui coule, ressort tendu, eau en hauteur.",
          "RAYONNANTE : transportée par la lumière. Exemples : rayonnement du Soleil, lumière d'une lampe.",
        ],
        paras: [],
      },
      {
        titre: "2. Reconnaître la forme dominante",
        paras: [
          "Pour identifier la forme d'énergie, demande-toi ce que la situation « transporte » ou « met en réserve » : du courant ? de la chaleur ? une réserve dans la matière ? du mouvement ? de la lumière ?",
          "Certaines situations en combinent plusieurs : le feu de bois libère de l'énergie chimique en chaleur (thermique) et lumière (rayonnante).",
        ],
      },
      {
        titre: "3. Des formes faites pour se transformer",
        paras: [
          "Les formes d'énergie ne restent jamais longtemps les mêmes : les aliments (chimique) deviennent course (mécanique) et sueur (thermique) ; la pile (chimique) devient courant (électrique) puis lumière (rayonnante) dans la lampe. Ces transformations sont le sujet de la prochaine séance !",
        ],
      },
    ],
    saisTu: [
      "Ton corps est une véritable centrale énergétique : chaque jour, il transforme l'énergie chimique de tes aliments — l'équivalent d'environ 2 000 kilocalories — en mouvement, en chaleur (37 °C en permanence !) et même en électricité : les signaux de tes nerfs et les battements de ton cœur sont des impulsions électriques.",
    ],
    experience: [
      "La chasse aux cinq formes :",
      "1. Prends une feuille et trace cinq colonnes : électrique, thermique, chimique, mécanique, rayonnante.",
      "2. Pendant une journée, note chaque énergie rencontrée dans la bonne colonne (au moins trois par colonne !).",
      "3. Souligne les situations qui combinent deux formes ou plus (le feu, le soleil, ton propre corps…).",
      "4. Compare ta récolte avec celle d'un camarade.",
    ],
  },
  substitutions: [
    { officiel: "Coffret d'images pédagogiques", local: "Objets réels de la classe et de la maison, dessins au tableau" },
    { officiel: "Jouet à ressort de démonstration", local: "Élastique tendu, arc de jeu en branche souple" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. L'énergie transportée par le courant est :  a) thermique   b) électrique   c) chimique",
        "2. Les aliments contiennent de l'énergie :  a) chimique   b) rayonnante   c) électrique",
        "3. L'énergie du mouvement est :  a) mécanique   b) thermique   c) chimique",
        "4. La lumière transporte de l'énergie :  a) mécanique   b) rayonnante   c) électrique",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "électrique", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "chimique", cle: true }, { text: "." }],
        [{ text: "3. Réponse a) : ", bold: true }, { text: "mécanique", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "rayonnante", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Il existe exactement deux formes d'énergie.",
        "2. L'eau retenue en hauteur possède une énergie mécanique en réserve.",
        "3. Le feu de bois libère à la fois chaleur et lumière.",
        "4. La braise rouge ne possède aucune énergie.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : on en distingue cinq principales." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : prête à devenir mouvement." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : thermique et rayonnante." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : elle possède une énergie thermique (et rayonnante)." }],
      ],
    },
    {
      points: 6,
      consigne: "Classe ces neuf éléments dans le tableau des cinq formes : le courant de la JIRAMA – le charbon – le vent – la lumière du phare – l'eau bouillante – la pile – la chute d'eau – le rayon de soleil – la marmite brûlante.",
      items: [],
      corrige: [
        [{ text: "Électrique : ", bold: true }, { text: "le courant de la JIRAMA", cle: true }, { text: ". " }, { text: "Chimique : ", bold: true }, { text: "le charbon, la pile", cle: true }, { text: "." }],
        [{ text: "Mécanique : ", bold: true }, { text: "le vent, la chute d'eau", cle: true }, { text: ". " }, { text: "Thermique : ", bold: true }, { text: "l'eau bouillante, la marmite brûlante", cle: true }, { text: ". " }, { text: "Rayonnante : ", bold: true }, { text: "la lumière du phare, le rayon de soleil", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "L'histoire énergétique du coureur. Naina mange du riz le matin, court le 100 mètres à midi, et termine en sueur, le corps brûlant.",
      items: [
        "1. Quelle forme d'énergie le riz apporte-t-il ?",
        "2. En quelle forme est-elle transformée pendant la course ?",
        "3. Et la chaleur du corps, quelle forme est-ce ? Résume la chaîne complète.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Chimique", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Mécanique", cle: true }, { text: " : le mouvement de la course." }],
        [{ text: "3. " }, { text: "Thermique", cle: true }, { text: ". Chaîne : " }, { text: "chimique (riz) → mécanique (course) + thermique (chaleur du corps)", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S30 = {
  numero: 30, total: 34, unite: "IV", theme: "Énergie",
  titre: "Les transformations d'énergie",
  objectif: "décrire les transformations d'énergie réalisées par les appareils courants : chauffe-eau, fer à repasser, panneau solaire, groupe électrogène",
  documentation: DOC,
  support: "Lampe de poche, images : chauffe-eau, fer à repasser, panneau solaire, groupe électrogène, moulin à eau",
  image: "images/img_seance30.png",
  imageLegende: "Figure 25 — Chaque appareil transforme une forme d'énergie en une autre",
  revision: {
    qa: [
      { q: "Cite les cinq formes d'énergie.", ra: "Électrique, thermique, chimique, mécanique, rayonnante." },
      { q: "Quelle forme les aliments contiennent-ils ?", ra: "L'énergie chimique." },
      { q: "Quelle forme la lumière transporte-t-elle ?", ra: "L'énergie rayonnante." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Le groupe électrogène du marché avale de l'essence et fournit du courant ; le fer à repasser avale du courant et fournit de la chaleur ; le panneau solaire avale de la lumière et fournit du courant !",
      "Que font donc tous ces appareils avec l'énergie ?",
      "R.A. : Ils la font changer de forme : chacun est une machine à transformer l'énergie.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Images d'appareils",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Les transformations d'énergie ». Après cette séance, vous serez capables de décrire, pour chaque appareil courant, la forme d'énergie reçue et la forme d'énergie produite.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien : j'allume la lampe de poche : que reçoit l'ampoule, que produit-elle ? Sur ces images : le chauffe-eau électrique (entrée ? sortie ?), le fer à repasser, le panneau solaire, le groupe électrogène, le moulin à eau qui écrase le paddy. Pour chacun, notons dans un tableau : énergie reçue → énergie produite.",
    apprenants: "Observent silencieusement, remplissent le tableau avec l'enseignant.",
    technique: "Démarche d'observation, tableau entrées/sorties", support: "Lampe, images, tableau",
  },
  analyse: {
    qa: [
      { q: "Que reçoit et que produit l'ampoule de la lampe de poche ?", ra: "Elle reçoit de l'énergie électrique et produit de la lumière (rayonnante) et un peu de chaleur." },
      { q: "Le chauffe-eau et le fer à repasser ?", ra: "Électrique → thermique." },
      { q: "Le panneau solaire ?", ra: "Rayonnante → électrique." },
      { q: "Le groupe électrogène ?", ra: "Chimique (carburant) → mécanique (moteur) → électrique (alternateur)." },
      { q: "L'énergie disparaît-elle dans ces machines ?", ra: "Non : elle change seulement de forme ; une partie s'échappe souvent en chaleur." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Tableau entrées/sorties",
  },
  synthese: {
    enseignant: "Donc, les appareils sont des transformateurs d'énergie : chacun reçoit une forme et en produit une autre. Le chauffe-eau et le fer à repasser : électrique → thermique. La lampe : électrique → rayonnante (+ un peu de thermique). Le panneau solaire : rayonnante → électrique. Le groupe électrogène : chimique → mécanique → électrique. Le moulin à eau : mécanique (eau) → mécanique (meule). Règle d'or : l'énergie ne disparaît jamais, elle se transforme ; mais une partie s'échappe presque toujours en chaleur, c'est pourquoi les moteurs chauffent.",
    apprenants: "Écoutent.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Écris la chaîne de transformation de chaque appareil :",
      items: [
        "a) Le chauffe-eau électrique.",
        "b) Le panneau solaire.",
        "c) La lampe de poche (ampoule).",
        "d) Le groupe électrogène.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Électrique → thermique", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Rayonnante → électrique", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Électrique → rayonnante (+ thermique)", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Chimique → mécanique → électrique", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds par Vrai ou Faux :",
      items: [
        "a) Le fer à repasser transforme l'électricité en chaleur.",
        "b) L'énergie disparaît dans les appareils.",
        "c) Le panneau solaire produit de l'électricité à partir de la lumière.",
        "d) Les moteurs qui chauffent perdent une partie de l'énergie en chaleur.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : elle change de forme, sans jamais disparaître." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "d) " }, { text: "Vrai", cle: true }, { text: " : c'est de l'énergie qui n'est pas transformée en travail utile." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : thermique – transforme – électrique – disparaît – rayonnante – chaleur.",
      items: [
        "a) Un appareil ……… l'énergie : le chauffe-eau change l'énergie ……… en énergie ……… .",
        "b) Le panneau solaire change l'énergie ……… en électricité.",
        "c) L'énergie ne ……… jamais, mais une partie s'échappe souvent en ……… .",
      ],
      corrige: [
        [{ text: "a) Un appareil " }, { text: "transforme", cle: true }, { text: " l'énergie : le chauffe-eau change l'énergie " }, { text: "électrique", cle: true }, { text: " en énergie " }, { text: "thermique", cle: true }, { text: "." }],
        [{ text: "b) Le panneau solaire change l'énergie " }, { text: "rayonnante", cle: true }, { text: " en électricité." }],
        [{ text: "c) L'énergie ne " }, { text: "disparaît", cle: true }, { text: " jamais, mais une partie s'échappe souvent en " }, { text: "chaleur", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris la chaîne complète de transformation, forme par forme :",
      items: [
        "a) Du barrage à la lampe de la maison.",
        "b) De l'essence du groupe électrogène au ventilateur qu'il alimente.",
        "c) Du soleil à la radio branchée sur le panneau et sa batterie.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Mécanique (eau qui descend) → électrique (turbine + alternateur) → rayonnante (lampe)", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Chimique (essence) → mécanique (moteur) → électrique (alternateur) → mécanique (ventilateur)", cle: true }, { text: "." }],
        [{ text: "c) " }, { text: "Rayonnante (soleil) → électrique (panneau) → chimique (batterie) → électrique → sonore/mouvement de la membrane (mécanique)", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier, feuille d'évaluation",
  lecon: {
    motsCles: ["transformation d'énergie", "chaîne énergétique", "appareil", "conservation"],
    sections: [
      {
        titre: "1. Les appareils : des transformateurs d'énergie",
        paras: [
          "Chaque appareil reçoit une forme d'énergie et en restitue une autre :",
        ],
        puces: [
          "Chauffe-eau, fer à repasser : électrique → thermique.",
          "Lampe : électrique → rayonnante (+ un peu de thermique).",
          "Panneau solaire : rayonnante → électrique.",
          "Groupe électrogène : chimique → mécanique → électrique.",
          "Moteur électrique : électrique → mécanique.",
          "Moulin à eau : mécanique (eau) → mécanique (meule).",
        ],
      },
      {
        titre: "2. Les chaînes énergétiques",
        paras: [
          "On représente une transformation par une chaîne fléchée : source → appareil → énergie produite.",
          "Exemple complet : Soleil (rayonnante) → panneau (électrique) → batterie (chimique) → lampe (rayonnante). Quatre formes pour une seule histoire de lumière !",
        ],
      },
      {
        titre: "3. L'énergie se conserve",
        paras: [
          "Grande loi de la physique : l'énergie ne se crée pas et ne disparaît pas : elle se transforme. Si un appareil semble « consommer » de l'énergie, c'est qu'une partie s'échappe sous une forme moins utile, presque toujours de la chaleur : c'est pourquoi moteurs, ampoules et chargeurs chauffent.",
        ],
      },
    ],
    saisTu: [
      "Une centrale hydroélectrique transforme l'énergie avec un rendement de plus de 90 % : presque toute l'énergie de l'eau devient électricité ! À l'opposé, une vieille ampoule à filament ne transforme que 5 % de l'électricité en lumière : les 95 % restants partent en chaleur. Les lampes LED, elles, font dix fois mieux : voilà pourquoi il faut les préférer.",
    ],
    experience: [
      "Le moulinet transformateur :",
      "1. Découpe un moulinet en papier et fixe-le sur un bâton avec une épingle.",
      "2. Souffle dessus : ton souffle (mécanique) devient rotation (mécanique) : première transformation !",
      "3. Place-le sous un filet d'eau : l'eau qui tombe le fait tourner : c'est le principe exact de la turbine du barrage.",
      "4. Frotte ensuite tes mains très vite : le mouvement devient chaleur : mécanique → thermique. Tu viens de faire trois transformations d'énergie !",
    ],
  },
  substitutions: [
    { officiel: "Maquettes d'appareils énergétiques", local: "Images de journaux, appareils réels observés au marché ou à la maison" },
    { officiel: "Panneau solaire de démonstration", local: "Calculatrice solaire ou lampe solaire du commerce" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. Le fer à repasser transforme l'énergie électrique en énergie :  a) mécanique   b) thermique   c) chimique",
        "2. Le panneau solaire transforme l'énergie rayonnante en énergie :  a) électrique   b) thermique   c) chimique",
        "3. Dans les appareils, l'énergie :  a) disparaît   b) se transforme   c) se multiplie",
        "4. Le moteur électrique transforme l'électricité en :  a) lumière   b) mouvement   c) aliments",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "thermique", cle: true }, { text: "." }],
        [{ text: "2. Réponse a) : ", bold: true }, { text: "électrique", cle: true }, { text: "." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "elle se transforme", cle: true }, { text: "." }],
        [{ text: "4. Réponse b) : ", bold: true }, { text: "mouvement (mécanique)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le groupe électrogène transforme le carburant directement en lumière.",
        "2. Une partie de l'énergie s'échappe souvent en chaleur.",
        "3. Le moulin à eau transforme le mouvement de l'eau en mouvement de la meule.",
        "4. Une lampe LED gaspille plus d'énergie qu'une ampoule à filament.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Faux", cle: true }, { text: " : chimique → mécanique → électrique ; la lumière vient ensuite des lampes." }],
        [{ text: "2. " }, { text: "Vrai", cle: true }, { text: " : c'est pourquoi les appareils chauffent." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: " : mécanique → mécanique." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : la LED transforme bien mieux l'électricité en lumière." }],
      ],
    },
    {
      points: 6,
      consigne: "Écris la chaîne de transformation (formes d'énergie fléchées) :",
      items: [
        "1. La bougie allumée.",
        "2. Le ventilateur branché sur le secteur.",
        "3. Le chargeur solaire qui remplit une batterie de téléphone.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Chimique (cire) → thermique + rayonnante", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Électrique → mécanique", cle: true }, { text: " (+ un peu de thermique)." }],
        [{ text: "3. " }, { text: "Rayonnante → électrique → chimique (batterie)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Observe la figure 25, puis réponds :",
      items: [
        "1. Recopie les trois transformations représentées.",
        "2. Pour la lampe, pourquoi indique-t-on « lumière + chaleur » en sortie ?",
        "3. Invente une quatrième ligne pour le moteur électrique du ventilateur.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Lampe : électrique → rayonnante (+ thermique) ; fer : électrique → thermique ; barrage+turbine : mécanique → électrique", cle: true }, { text: "." }],
        [{ text: "2. Parce qu'" }, { text: "une partie de l'électricité part en chaleur", cle: true }, { text: " : la transformation n'est jamais parfaite." }],
        [{ text: "3. " }, { text: "Ventilateur : électrique → mécanique", cle: true }, { text: " (+ un peu de thermique)." }],
      ],
    },
  ],
};

const S31 = {
  numero: 31, total: 34, unite: "IV", theme: "Énergie",
  titre: "Projet technologique : four solaire et moulin à eau",
  objectif: "concevoir et de réaliser un four solaire simple et un moulin à eau miniature en suivant une démarche technologique",
  documentation: DOC,
  support: "Carton, papier aluminium, film plastique transparent, peinture noire ou suie, boîtes, bouteilles plastiques, bouchons, piques en bambou, colle, ciseaux",
  image: "images/img_seance31.png",
  imageLegende: "Figure 26 — Le four solaire concentre le rayonnement ; le moulin transforme le courant d'eau en rotation",
  revision: {
    qa: [
      { q: "Quelle transformation d'énergie réalise le four solaire ?", ra: "Rayonnante → thermique." },
      { q: "Et le moulin à eau ?", ra: "Mécanique (eau en mouvement) → mécanique (rotation)." },
      { q: "Rappelle la règle d'or de l'énergie.", ra: "Elle ne disparaît jamais : elle se transforme." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "À Ampefy, une association cuit du riz dans des caisses vitrées tournées vers le soleil, sans un morceau de charbon ! Et nos ancêtres écrasaient déjà le paddy grâce à la rivière et à une simple roue à aubes.",
      "Et si nous fabriquions nous-mêmes ces deux machines à transformer l'énergie ?",
      "R.A. : Construisons un four solaire et un moulin à eau miniatures !",
    ],
    apprenants: "Écoutent et répondent avec enthousiasme.",
    technique: "Lancement de projet", support: "Images, matériel de récupération",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons réaliser notre « Projet technologique : four solaire et moulin à eau ». Après cette séance, vous serez capables de concevoir un objet technique en suivant les étapes de la démarche : besoin, cahier des charges, conception, réalisation, essai, amélioration.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien ces deux schémas. Le four solaire : une boîte isolée, l'intérieur noir, un couvercle transparent, des réflecteurs en aluminium qui renvoient les rayons vers l'intérieur. Le moulin : une roue à pales fixée sur un axe qui tourne librement, placée sous le filet d'eau. Quel rôle joue chaque élément ?",
    apprenants: "Observent silencieusement les schémas.",
    technique: "Analyse technique guidée", support: "Schémas au tableau",
  },
  analyse: {
    qa: [
      { q: "Pourquoi peindre l'intérieur du four en noir ?", ra: "Le noir absorbe le rayonnement et le convertit en chaleur." },
      { q: "À quoi servent le couvercle transparent et les réflecteurs ?", ra: "Le plastique laisse entrer les rayons et retient la chaleur (effet de serre) ; les réflecteurs concentrent plus de rayons vers l'intérieur." },
      { q: "Quelles qualités faut-il aux pales du moulin ?", ra: "Larges pour recevoir l'eau, rigides, régulièrement espacées, fixées sur un axe qui tourne librement." },
      { q: "Qu'est-ce qu'un cahier des charges ?", ra: "La liste des exigences que l'objet doit respecter : fonction, matériaux, dimensions, sécurité." },
      { q: "Que fait-on si l'essai échoue ?", ra: "On cherche la cause, on améliore et on ressaie : c'est la démarche technologique." },
    ],
    technique: "Questions-réponses, analyse fonctionnelle", support: "Schémas",
  },
  synthese: {
    enseignant: "Donc, la démarche technologique suit six étapes : identifier le besoin ; rédiger le cahier des charges ; concevoir (croquis, choix des matériaux) ; réaliser ; essayer ; améliorer. Notre four solaire (rayonnante → thermique) réussit grâce à trois alliés : le noir qui absorbe, le transparent qui piège la chaleur, les réflecteurs qui concentrent. Notre moulin à eau (mécanique → mécanique) exige des pales bien placées et un axe libre. Au travail, par groupes : chaque groupe réalisera, testera et améliorera sa machine !",
    apprenants: "Écoutent puis forment les groupes.",
    technique: "Exposé puis travaux de groupes", support: "Matériel de récupération",
  },
  application: [
    {
      consigne: "Le cahier des charges du four solaire impose : « chauffer de l'eau au soleil d'au moins 15 °C en une heure, avec des matériaux de récupération, sans danger ». Vérifie chaque exigence :",
      items: [
        "a) Quelle exigence concerne la fonction ?",
        "b) Quelle exigence concerne les matériaux ?",
        "c) Quelle exigence concerne la sécurité ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Chauffer l'eau d'au moins 15 °C en une heure", cle: true }, { text: "." }],
        [{ text: "b) " }, { text: "Matériaux de récupération", cle: true }, { text: " (carton, aluminium, plastique)." }],
        [{ text: "c) " }, { text: "Sans danger", cle: true }, { text: " : pas de verre coupant, manipulation prudente de l'eau chaude." }],
      ],
    },
    {
      consigne: "Le moulin d'un groupe tourne à peine. Propose un remède pour chaque défaut :",
      items: [
        "a) Les pales sont trop petites.",
        "b) L'axe frotte contre le support.",
        "c) Le filet d'eau tombe à côté des pales.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Agrandir les pales", cle: true }, { text: " pour recevoir plus d'eau." }],
        [{ text: "b) " }, { text: "Élargir les trous ou lisser l'axe", cle: true }, { text: " pour qu'il tourne librement." }],
        [{ text: "c) " }, { text: "Déplacer la roue ou guider le filet d'eau", cle: true }, { text: " pour qu'il frappe le bord des pales." }],
      ],
    },
  ],
  applicationTechnique: "Travaux de groupes (réalisation)", applicationSupport: "Matériel de récupération",
  evaluation: [
    {
      consigne: "Complète avec les mots proposés : essai – besoin – cahier des charges – améliore – conception – réalisation.",
      items: [
        "La démarche technologique part d'un ……… ; on rédige le ……… ; viennent ensuite la ……… (croquis), la ……… (fabrication) et l'……… ; si le résultat déçoit, on ……… et on recommence.",
      ],
      corrige: [
        [{ text: "La démarche part d'un " }, { text: "besoin", cle: true }, { text: " ; on rédige le " }, { text: "cahier des charges", cle: true }, { text: " ; viennent la " }, { text: "conception", cle: true }, { text: ", la " }, { text: "réalisation", cle: true }, { text: " et l'" }, { text: "essai", cle: true }, { text: " ; si le résultat déçoit, on " }, { text: "améliore", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Réponds aux questions par une phrase complète :",
      items: [
        "a) Cite les trois « alliés » du four solaire et le rôle de chacun.",
        "b) Quelle transformation d'énergie réalise chaque machine du projet ?",
        "c) Pourquoi l'essai et l'amélioration font-ils partie de la démarche ?",
        "d) Cite une précaution de sécurité pour chaque machine.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Le noir (absorbe les rayons), le couvercle transparent (piège la chaleur), les réflecteurs (concentrent le rayonnement)", cle: true }, { text: "." }],
        [{ text: "b) Four : " }, { text: "rayonnante → thermique", cle: true }, { text: " ; moulin : " }, { text: "mécanique → mécanique", cle: true }, { text: "." }],
        [{ text: "c) Parce qu'" }, { text: "un premier prototype est rarement parfait : on mesure, on corrige, on progresse", cle: true }, { text: "." }],
        [{ text: "d) Four : " }, { text: "attention à l'eau chaude et au soleil (ne pas regarder les réflecteurs)", cle: true }, { text: " ; moulin : " }, { text: "ciseaux et piques manipulés prudemment", cle: true }, { text: "." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit + évaluation des réalisations", evaluationSupport: "Cahier, grille d'évaluation des projets",
  lecon: {
    motsCles: ["démarche technologique", "cahier des charges", "four solaire", "moulin à eau", "prototype"],
    sections: [
      {
        titre: "1. La démarche technologique en six étapes",
        puces: [
          "1. Identifier le BESOIN : à quoi l'objet servira-t-il ?",
          "2. Rédiger le CAHIER DES CHARGES : fonctions, matériaux, dimensions, sécurité.",
          "3. CONCEVOIR : croquis, choix des solutions.",
          "4. RÉALISER : fabrication soignée du prototype.",
          "5. ESSAYER : tester et mesurer les performances.",
          "6. AMÉLIORER : corriger les défauts, puis ressayer !",
        ],
        paras: [],
      },
      {
        titre: "2. Le four solaire (rayonnante → thermique)",
        paras: [
          "Le four solaire capte le rayonnement du Soleil et le convertit en chaleur grâce à trois alliés :",
        ],
        puces: [
          "l'intérieur NOIR : absorbe le rayonnement (le noir chauffe plus que le blanc) ;",
          "le couvercle TRANSPARENT : laisse entrer les rayons et retient la chaleur (effet de serre) ;",
          "les RÉFLECTEURS en aluminium : renvoient davantage de rayons vers l'intérieur ;",
          "et un bon isolant (carton double, papier froissé) garde la chaleur dans la boîte.",
        ],
      },
      {
        titre: "3. Le moulin à eau (mécanique → mécanique)",
        paras: [
          "La roue à pales reçoit l'eau en mouvement et transforme sa poussée en rotation de l'axe. Les clés de la réussite : des pales larges et régulières (bouchons ou cuillères plastiques fendues dans un bouchon de liège, ou gobelets sur un disque), un axe rectiligne qui tourne librement, et le filet d'eau dirigé sur le bord des pales.",
          "C'est le principe exact des turbines des centrales hydroélectriques, et des moulins à paddy d'autrefois !",
        ],
      },
    ],
    saisTu: [
      "Dans plusieurs régions ensoleillées du monde, dont Madagascar, des associations promeuvent les cuiseurs solaires : une famille qui cuit au soleil économise des centaines de kilos de bois ou de charbon par an : bon pour la forêt, pour la santé (moins de fumée) et pour le porte-monnaie ! Certains fours paraboliques atteignent 200 °C.",
    ],
    experience: [
      "Réalise le projet complet à la maison :",
      "1. FOUR : boîte en carton, fond tapissé de noir, parois doublées d'aluminium, couvercle en film plastique tendu ; place un petit récipient d'eau au centre, oriente vers le soleil et mesure l'échauffement toutes les 15 minutes.",
      "2. MOULIN : fends huit encoches dans un bouchon de liège, glisse-y huit pales en plastique découpé, traverse le bouchon d'une pique en bambou posée sur deux fourches : place-le sous un filet d'eau !",
      "3. Note les performances, améliore (réflecteurs plus grands ? pales plus larges ?) et compare avec tes camarades.",
    ],
  },
  substitutions: [
    { officiel: "Kit pédagogique de four solaire", local: "Carton, papier aluminium, film plastique, peinture noire ou suie de marmite" },
    { officiel: "Maquette de turbine", local: "Bouchon de liège, pales en plastique de bouteille, pique en bambou" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Choisis la bonne réponse pour chaque question :",
      items: [
        "1. La démarche technologique commence par :  a) la fabrication   b) l'identification du besoin   c) la peinture",
        "2. Le cahier des charges liste :  a) les prix du marché   b) les exigences de l'objet   c) les noms des élèves",
        "3. L'intérieur du four solaire est noir pour :  a) la beauté   b) absorber le rayonnement   c) repousser les insectes",
        "4. Le moulin à eau transforme :  a) mécanique → mécanique   b) chimique → électrique   c) thermique → rayonnante",
      ],
      corrige: [
        [{ text: "1. Réponse b) : ", bold: true }, { text: "l'identification du besoin", cle: true }, { text: "." }],
        [{ text: "2. Réponse b) : ", bold: true }, { text: "les exigences de l'objet", cle: true }, { text: " : fonction, matériaux, sécurité." }],
        [{ text: "3. Réponse b) : ", bold: true }, { text: "absorber le rayonnement", cle: true }, { text: " et le convertir en chaleur." }],
        [{ text: "4. Réponse a) : ", bold: true }, { text: "mécanique → mécanique", cle: true }, { text: "." }],
      ],
    },
    {
      points: 4,
      consigne: "Réponds par Vrai ou Faux et corrige les affirmations fausses :",
      items: [
        "1. Le couvercle transparent du four laisse entrer les rayons et retient la chaleur.",
        "2. Si l'essai échoue, le projet est terminé.",
        "3. Les réflecteurs concentrent plus de rayonnement dans le four.",
        "4. Les pales du moulin doivent être irrégulières pour mieux tourner.",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Vrai", cle: true }, { text: " : c'est l'effet de serre." }],
        [{ text: "2. " }, { text: "Faux", cle: true }, { text: " : on analyse, on améliore et on ressaie." }],
        [{ text: "3. " }, { text: "Vrai", cle: true }, { text: "." }],
        [{ text: "4. " }, { text: "Faux", cle: true }, { text: " : régulières et bien espacées pour une rotation équilibrée." }],
      ],
    },
    {
      points: 6,
      consigne: "Remets dans l'ordre les étapes du projet de Miora (moulin à eau) : (a) elle découpe et assemble les pales — (b) elle constate que la roue frotte et élargit les trous — (c) elle veut arroser son jardin grâce au canal — (d) elle dessine trois croquis et choisit le meilleur — (e) elle écrit : « la roue doit tourner sous un filet d'eau du canal, matériaux gratuits » — (f) elle place la roue sous l'eau et compte les tours.",
      items: [],
      corrige: [
        [{ text: "Ordre : " }, { text: "c (besoin) → e (cahier des charges) → d (conception) → a (réalisation) → f (essai) → b (amélioration)", cle: true }, { text: "." }],
      ],
    },
    {
      points: 6,
      consigne: "Analyse de ton four solaire : au premier essai, l'eau ne gagne que 5 °C en une heure (le cahier des charges exigeait 15 °C).",
      items: [
        "1. Le cahier des charges est-il respecté ?",
        "2. Propose trois améliorations précises et justifie chacune.",
        "3. Quelle étape de la démarche viens-tu d'accomplir en préparant ces améliorations ?",
      ],
      corrige: [
        [{ text: "1. " }, { text: "Non : 5 °C au lieu des 15 °C exigés", cle: true }, { text: "." }],
        [{ text: "2. " }, { text: "Agrandir les réflecteurs (plus de rayons), doubler l'isolation (moins de pertes), noircir le récipient (meilleure absorption)", cle: true }, { text: ", mieux orienter le four vers le soleil." }],
        [{ text: "3. " }, { text: "L'étape d'amélioration", cle: true }, { text: ", qui précède un nouvel essai." }],
      ],
    },
  ],
};

module.exports = { seances: [S27, S28, S29, S30, S31] };
