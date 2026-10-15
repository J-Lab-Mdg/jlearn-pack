// data-unite3.js — UNITÉ 3 : LA POPULATION MALGACHE (Séances 27 à 31)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 172-174)
const TOTAL = 78;

const S27 = {
  numero: 27, total: TOTAL,
  titre: "La répartition de la population malgache",
  theme: "La population malgache",
  objectif: "Être capable de lire une carte de la répartition de la population malgache et de montrer que cette répartition est inégale.",
  image: { id: "geo6_repartition_population", legende: "La répartition de la population malgache : des régions très peuplées, d'autres presque vides." },
  scene: { file: "scene_s27_repartition.jpg", mode: "document", legende: "Document : sur les Hautes Terres, le taxi-brousse de papa croise des villages serrés les uns aux autres, au milieu des rizières." },
  revisionOuverture: [
    ["Cite les quatre étapes du mini-projet.", "Observer, choisir, monter et présenter."],
    ["Que se passe-t-il quand la population grandit plus vite que les ressources ?", "C'est le déséquilibre : la vie devient plus difficile pour tout le monde."],
  ],
  miseEnSituation: {
    texte: "Papa conduit son taxi-brousse d'Antsirabe à Morondava, chez leur cousine Volana. Sur les Hautes Terres, les villages se suivent sans interruption : rizières, collines cultivées, marchés bondés. « On dirait que tout le pays habite ici ! » s'étonne Hery. Mais après Miandrivazo, le paysage change : brousse sèche, quelques zébus au loin, une maison tous les dix kilomètres. « Ici, il y a plus de zébus que d'hommes », plaisante un passager.",
    question: "Pourquoi y a-t-il tant de monde sur les Hautes Terres et si peu plus à l'ouest ?",
    ra: "Parce que les habitants ne se répartissent pas également sur le territoire : la population malgache est très inégalement répartie.",
    support: "Carte de la répartition de la population (page Leçon)",
  },
  presentation: "Aujourd'hui, nous commençons l'unité 3 : la population malgache. Nous allons apprendre : « La répartition de la population malgache ». Après cette séance, vous serez capables de lire une carte de répartition et de dire où les habitants sont nombreux.",
  observation: "Observez bien la carte de la répartition de la population de Madagascar : les zones foncées sont très peuplées, les zones claires le sont peu.",
  supportObservation: "Carte de la répartition de la population (page Leçon)",
  analyse: [
    ["Que montre une carte de répartition de la population ?", "Elle montre où les habitants sont nombreux et où ils sont rares."],
    ["Comment lit-on cette carte ?", "Grâce à sa légende : les couleurs foncées marquent les zones peuplées, les couleurs claires les zones peu peuplées."],
    ["Où les habitants sont-ils les plus nombreux ?", "Sur les Hautes Terres centrales, autour d'Antananarivo et d'Antsirabe, sur la côte est et dans le nord."],
    ["Où sont-ils les moins nombreux ?", "Dans l'Ouest et le Sud-Ouest secs, et dans le Grand Sud aride."],
    ["Peut-on compter les habitants d'un pays ?", "Oui : Madagascar compte environ 30 millions d'habitants aujourd'hui."],
    ["Cette population se répartit-elle également partout ?", "Non : la répartition est inégale, très inégale même."],
  ],
  synthese: "Donc, la population malgache, environ 30 millions d'habitants, se répartit de manière très inégale : les Hautes Terres, la côte est et le nord concentrent les hommes, tandis que l'Ouest et le Sud restent peu peuplés.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la répartition de la population ?",
        "2. Combien d'habitants compte environ Madagascar ?",
        "3. Où la population malgache est-elle la plus nombreuse ?",
        "4. À quoi sert la légende d'une carte ?",
      ],
      corrige: [
        "1. C'est **la manière dont les habitants occupent le territoire** d'un pays.",
        "2. Madagascar compte **environ 30 millions d'habitants**.",
        "3. Sur **les Hautes Terres centrales**, sur la côte est et dans le nord.",
        "4. Elle **explique la signification des couleurs** et des signes de la carte.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La population malgache se répartit également sur tout le territoire.",
        "2. Les Hautes Terres centrales sont très peuplées.",
        "3. La côte est est une zone peuplée.",
        "4. On ne peut pas savoir où vivent les habitants d'un pays.",
      ],
      corrige: [
        "1. **Faux** : la répartition est très inégale.",
        "2. **Vrai** : autour d'Antananarivo et d'Antsirabe.",
        "3. **Vrai** : autour de Toamasina notamment.",
        "4. **Faux** : la carte de répartition le montre.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : population — inégale — Hautes Terres — légende.",
      items: [
        "La ……… de Madagascar compte environ 30 millions d'habitants.",
        "Cette population se répartit de façon très ……… .",
        "Les ……… centrales sont la grande zone peuplée du pays.",
        "La ……… de la carte explique ce que montrent les couleurs.",
      ],
      corrige: [
        "La **population** / très **inégale** / les **Hautes Terres** / la **légende**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une carte de répartition montre : A. les routes — B. où vivent les habitants — C. la pluie",
        "2. Madagascar compte environ : A. 3 millions — B. 30 millions — C. 300 millions d'habitants",
        "3. Les zones peu peuplées sont : A. l'Ouest et le Sud — B. les Hautes Terres — C. la côte est",
        "4. Sur la carte, une zone foncée est : A. vide — B. très peuplée — C. une forêt",
        "5. La grande ville de la côte est est : A. Toamasina — B. Toliara — C. Maintirano",
      ],
      corrige: [
        "1. Réponse **B** : où vivent les habitants.",
        "2. Réponse **B** : environ 30 millions.",
        "3. Réponse **A** : l'Ouest et le Sud.",
        "4. Réponse **B** : très peuplée.",
        "5. Réponse **A** : Toamasina.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Lire une carte de répartition",
        paras: [
          "Pour savoir où vivent les habitants d'un pays, on lit une carte de la répartition de la population.",
          "Sur cette carte, une légende explique les couleurs : les zones foncées montrent les régions très peuplées, les zones claires montrent les régions peu peuplées. Un seul point représente souvent des milliers d'habitants.",
        ],
        exemples: [
          "Sur la carte de Madagascar, une large tache foncée couvre les Hautes Terres centrales.",
          "Le Grand Sud, lui, reste presque blanc : très peu d'habitants au kilomètre carré.",
        ],
      },
      {
        titre: "2. Une répartition très inégale",
        paras: [
          "Madagascar compte environ 30 millions d'habitants. Mais ces habitants ne se répartissent pas partout de la même façon.",
          "Les Hautes Terres centrales, autour d'Antananarivo et d'Antsirabe, la côte est autour de Toamasina et le nord autour d'Antsiranana sont les grandes zones peuplées du pays. À l'inverse, l'Ouest et le Sud-Ouest secs, ainsi que le Grand Sud aride, restent faiblement peuplés.",
        ],
        exemples: [
          "Sur la route d'Antsirabe à Antananarivo, les villages se suivent sans arrêt.",
          "Après Miandrivazo, vers l'ouest, on roule des kilomètres sans croiser une maison.",
        ],
      },
      {
        titre: "3. À retenir",
        paras: [
          "La répartition de la population, c'est la manière dont les habitants occupent le territoire.",
          "À Madagascar, cette répartition est inégale : certaines régions sont très peuplées, d'autres presque vides. La séance suivante mesurera cette inégalité avec un outil précis : la densité.",
        ],
        exemples: [
          "La foule du marché d'Antsirabe et le silence des collines de l'Ouest racontent la même différence.",
        ],
      },
    ],
  },
  motsCles: ["répartition", "population", "carte", "légende", "inégale"],
  questionsRevision: [
    ["Où se concentre la population malgache ?", "Sur les Hautes Terres centrales, la côte est et le nord."],
    ["Comment s'appelle la partie de la carte qui explique les couleurs ?", "La légende."],
  ],
};

const S28 = {
  numero: 28, total: TOTAL,
  titre: "La densité et les zones peuplées",
  theme: "La population malgache",
  objectif: "Être capable d'expliquer la notion de densité, de la calculer et de citer les zones à forte et à faible densité.",
  image: { id: "geo6_densite", legende: "La densité : le nombre d'habitants par kilomètre carré." },
  scene: { file: "scene_s28_densite.jpg", mode: "document", legende: "Document : samedi matin au marché Asabotsy d'Antsirabe : chez maman Rasoa, la foule est si dense qu'on avance difficilement entre les étals." },
  revisionOuverture: [
    ["Où se concentre la population malgache ?", "Sur les Hautes Terres centrales, la côte est et le nord."],
    ["Comment s'appelle la partie de la carte qui explique les couleurs ?", "La légende."],
  ],
  miseEnSituation: {
    texte: "Samedi matin, Miora aide sa maman au marché Asabotsy d'Antsirabe. Impossible d'avancer : les paniers frottent les étals, les pieds écrasent les pieds. « Quelle foule ! » soupire Miora. Le soir, de retour à la campagne chez grand-père Maitso, la fillette retrouve les grandes collines calmes et presque vides. Le même pays, le même jour : sur un kilomètre carré de marché, des milliers de personnes ; sur un kilomètre carré de colline, quelques familles seulement.",
    question: "Comment mesurer et comparer le nombre d'habitants d'un lieu à l'autre ?",
    ra: "Grâce à la densité : on divise le nombre d'habitants par la superficie. Le marché est dense, la colline ne l'est pas.",
    support: "Schéma de la densité (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La densité et les zones peuplées ». Après cette séance, vous serez capables de calculer une densité et de citer les zones à forte et à faible densité de Madagascar.",
  observation: "Observez bien le schéma qui compare deux carrés de même taille, un kilomètre carré chacun : l'un presque vide, l'autre couvert de points.",
  supportObservation: "Schéma de la densité (page Leçon)",
  analyse: [
    ["Qu'est-ce que la densité ?", "C'est le nombre d'habitants par kilomètre carré."],
    ["Comment la calcule-t-on ?", "On divise le nombre d'habitants par la superficie du territoire en kilomètres carrés."],
    ["Une région de 10 000 km² compte 500 000 habitants. Quelle est sa densité ?", "500 000 divisé par 10 000, cela fait 50 habitants par km²."],
    ["Quelles sont les zones à forte densité de Madagascar ?", "Les Hautes Terres centrales, la côte est et le nord du pays."],
    ["Quelles sont les zones à faible densité ?", "L'Ouest, le Sud-Ouest et le Grand Sud aride."],
    ["La densité est-elle la même partout à Madagascar ?", "Non : très forte sur les Hautes Terres, très faible à l'Ouest."],
  ],
  synthese: "Donc, la densité mesure la population d'un territoire : c'est le nombre d'habitants par kilomètre carré. Elle est très forte sur les Hautes Terres et la côte est, très faible dans l'Ouest et le Grand Sud.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la densité d'une population ?",
        "2. Comment calcule-t-on la densité ?",
        "3. Cite deux zones à forte densité de Madagascar.",
        "4. Cite deux zones à faible densité.",
      ],
      corrige: [
        "1. C'est **le nombre d'habitants par kilomètre carré**.",
        "2. On **divise le nombre d'habitants par la superficie** en km².",
        "3. **Les Hautes Terres centrales** et **la côte est** (aussi le nord).",
        "4. **L'Ouest** et **le Grand Sud** (aussi le Sud-Ouest).",
      ],
    },
    {
      consigne: "Calcule et écris la réponse.",
      items: [
        "1. Une région de 2 000 km² compte 100 000 habitants. Quelle est sa densité ?",
        "2. Une autre région de 20 000 km² compte aussi 100 000 habitants. Quelle est sa densité ?",
        "3. Laquelle des deux régions est la plus peuplée au km² ?",
        "4. Dans quelle région faudrait-il construire plus d'écoles ?",
      ],
      corrige: [
        "1. 100 000 ÷ 2 000 = **50 habitants par km²**.",
        "2. 100 000 ÷ 20 000 = **5 habitants par km²**.",
        "3. **La première** : sa densité est dix fois plus forte.",
        "4. **Dans la première**, où vivent beaucoup plus d'habitants au km².",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : densité — kilomètre carré — forte — faible.",
      items: [
        "Le nombre d'habitants par ……… s'appelle la ……… .",
        "Sur les Hautes Terres centrales, la densité est très ……… .",
        "Dans le Grand Sud aride, la densité est très ……… .",
        "Pour trouver la densité, on divise le nombre d'habitants par la ……… (superficie / densité).",
      ],
      corrige: [
        "par **kilomètre carré** / la **densité** / très **forte** / très **faible** / la **superficie**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La densité s'exprime en : A. habitants par km² — B. km² par habitant — C. francs",
        "2. Une région de 5 000 km² et 250 000 habitants a une densité de : A. 25 — B. 50 — C. 500 hab/km²",
        "3. La zone la plus densément peuplée de Madagascar : A. Melaky — B. les Hautes Terres — C. le Grand Sud",
        "4. Une zone à faible densité est : A. presque vide — B. bondée — C. une ville",
        "5. Si la population augmente et que la superficie ne change pas, la densité : A. baisse — B. ne change pas — C. augmente",
      ],
      corrige: [
        "1. Réponse **A** : habitants par km².",
        "2. Réponse **B** : 250 000 ÷ 5 000 = 50 hab/km².",
        "3. Réponse **B** : les Hautes Terres centrales.",
        "4. Réponse **A** : presque vide d'habitants.",
        "5. Réponse **C** : elle augmente.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La densité : un nombre qui mesure la foule",
        paras: [
          "La densité est le nombre d'habitants par kilomètre carré. Elle dit si un territoire est peuplé ou vide.",
          "Pour la calculer, on divise le nombre d'habitants par la superficie du territoire : densité = nombre d'habitants ÷ superficie (en km²).",
        ],
        exemples: [
          "Une région de 10 000 km² qui compte 500 000 habitants a une densité de 50 habitants par km².",
          "Le marché Asabotsy est dense : des milliers de personnes sur quelques centaines de mètres carrés.",
        ],
      },
      {
        titre: "2. Les zones à forte densité",
        paras: [
          "À Madagascar, les zones à forte densité sont les Hautes Terres centrales, surtout la région d'Antananarivo et celle d'Antsirabe, où l'on compte des centaines d'habitants au kilomètre carré.",
          "La côte est, autour de Toamasina, et le nord, autour d'Antsiranana, sont aussi des régions bien peuplées.",
        ],
        exemples: [
          "Dans la campagne d'Antsirabe, les villages se touchent presque.",
          "La moyenne de Madagascar est d'environ 50 habitants par km² : les Hautes Terres dépassent largement cette moyenne.",
        ],
      },
      {
        titre: "3. Les zones à faible densité",
        paras: [
          "À l'inverse, l'Ouest et le Sud-Ouest, secs et chauds, comptent parfois moins de dix habitants au kilomètre carré.",
          "Le Grand Sud aride reste aussi une zone à faible densité : la terre y nourrit difficilement ses habitants.",
        ],
        exemples: [
          "Dans certaines régions de l'Ouest, on parcourt des dizaines de kilomètres sans rencontrer un village.",
          "Ces espaces presque vides contrastent avec la foule des marchés des Hautes Terres.",
        ],
      },
    ],
  },
  motsCles: ["densité", "kilomètre carré", "forte densité", "faible densité", "superficie"],
  questionsRevision: [
    ["Qu'est-ce que la densité ?", "C'est le nombre d'habitants par kilomètre carré."],
    ["Cite une zone à forte densité et une zone à faible densité.", "Forte : les Hautes Terres centrales ; faible : le Grand Sud."],
  ],
};

const S29 = {
  numero: 29, total: TOTAL,
  titre: "Les causes de la répartition inégale",
  theme: "La population malgache",
  objectif: "Être capable d'expliquer les causes de la répartition inégale de la population malgache et ses conséquences.",
  image: { id: "geo6_causes_repartition", legende: "Pourquoi les hommes se concentrent dans certaines régions." },
  scene: { file: "scene_s29_causes.jpg", mode: "document", legende: "Document : sur la route de l'Est, la pluie arrose les bananeraies et les rizières : ici, la terre nourrit facilement les hommes." },
  revisionOuverture: [
    ["Qu'est-ce que la densité ?", "C'est le nombre d'habitants par kilomètre carré."],
    ["Cite une zone à forte densité et une zone à faible densité.", "Forte : les Hautes Terres centrales ; faible : le Grand Sud."],
  ],
  miseEnSituation: {
    texte: "Sur la route de Toamasina, chez leur cousin Tojo, la pluie tambourine sur le toit du taxi-brousse. Partout, ça verdit : bananeraies, rizières, cannes à sucre. « Tu vois, dit papa à Hery, là où la pluie tombe régulièrement, la terre nourrit bien les hommes. Alors les familles s'installent, les villages grandissent. Mais dans le Grand Sud, où il pleut rarement, la terre est avare : peu de récoltes, peu d'habitants. »",
    question: "Pourquoi les hommes sont-ils nombreux ici et rares ailleurs ?",
    ra: "Parce que le climat, la terre, les villes et les routes ne se répartissent pas également : les hommes s'installent là où la vie est plus facile.",
    support: "Schéma des causes de la répartition (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les causes de la répartition inégale ». Après cette séance, vous serez capables d'expliquer pourquoi certaines régions sont peuplées et d'autres non.",
  observation: "Observez bien le schéma : à gauche, ce qui attire les hommes ; à droite, ce qui les éloigne.",
  supportObservation: "Schéma des causes de la répartition (page Leçon)",
  analyse: [
    ["Pourquoi la côte est est-elle bien peuplée ?", "Parce que la pluie y tombe régulièrement et que tout y pousse facilement."],
    ["Pourquoi les Hautes Terres sont-elles très peuplées ?", "Parce que le climat y est doux et que les vallées se prêtent à la riziculture depuis toujours."],
    ["Pourquoi l'Ouest est-il peu peuplé ?", "Parce qu'il y fait sec et chaud : la terre nourrit mal les hommes."],
    ["Et le Grand Sud ?", "L'eau y manque : la sécheresse rend la vie difficile, les habitants sont rares."],
    ["Les villes jouent-elles un rôle ?", "Oui : les hommes s'installent près des villes, des ports et des routes, où l'on trouve du travail."],
    ["Quelle conséquence sur les Hautes Terres ?", "Elles sont encombrées : les terres se morcellent, les collines se dénudent."],
  ],
  synthese: "Donc, la répartition inégale s'explique par le climat, la fertilité des terres, le relief et la présence des villes et des routes. Résultat : des Hautes Terres encombrées, des espaces de l'Ouest presque vides.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Pourquoi les hommes s'installent-ils sur la côte est ?",
        "2. Pourquoi le Grand Sud est-il peu peuplé ?",
        "3. Pourquoi les familles s'installent-elles près des villes ?",
        "4. Que devient la terre des Hautes Terres, trop partagée ?",
      ],
      corrige: [
        "1. Parce que **la pluie y tombe régulièrement** et que tout y pousse.",
        "2. Parce que **l'eau y manque** : la sécheresse rend la vie difficile.",
        "3. Parce qu'on y trouve **du travail, les écoles et les marchés**.",
        "4. Elle se **morcelle** : les parcelles deviennent trop petites, les collines se dénudent.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le climat explique une partie de la répartition de la population.",
        "2. Les terres fertiles attirent les hommes.",
        "3. Les régions sèches de l'Ouest sont très peuplées.",
        "4. Les routes n'ont aucune importance pour les hommes.",
      ],
      corrige: [
        "1. **Vrai** : pluies et chaleur commandent les récoltes.",
        "2. **Vrai** : là où la terre nourrit, les familles s'installent.",
        "3. **Faux** : elles comptent peu d'habitants au km².",
        "4. **Faux** : on s'installe le long des routes, près des villes.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : pluie — sécheresse — villes — morcellent.",
      items: [
        "Sur la côte est, la ……… tombe régulièrement : tout y pousse.",
        "Dans le Grand Sud, la ……… chasse les habitants.",
        "Les hommes s'installent près des ……… , des ports et des routes.",
        "Sur les Hautes Terres, trop partagées, les terres se ……… .",
      ],
      corrige: [
        "la **pluie** / la **sécheresse** / des **villes** / se **morcellent**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La côte est est peuplée parce que : A. il y pleut régulièrement — B. il y fait très froid — C. il n'y a pas d'eau",
        "2. Le Grand Sud est peu peuplé à cause de : A. la neige — B. la sécheresse — C. la foule",
        "3. Les Hautes Terres centrales sont : A. vides — B. encombrées — C. sous la mer",
        "4. Les terres trop partagées deviennent : A. immenses — B. de plus en plus petites — C. fertiles",
        "5. Les hommes s'installent loin : A. des routes — B. des villes — C. des marchés",
      ],
      corrige: [
        "1. Réponse **A** : il y pleut régulièrement.",
        "2. Réponse **B** : la sécheresse.",
        "3. Réponse **B** : encombrées, très peuplées.",
        "4. Réponse **B** : de plus en plus petites.",
        "5. Aucune : les hommes s'installent **près** des routes, des villes et des marchés.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le climat et l'eau",
        paras: [
          "Les hommes s'installent d'abord là où l'eau tombe du ciel. Sur la côte est, la pluie est régulière : bananeraies, rizières et caféiers y poussent sans peine.",
          "Sur les Hautes Terres, le climat est doux et les pluies suffisantes pour la rizière. Mais dans l'Ouest chaud et sec, et surtout dans le Grand Sud aride, la terre est avare : peu de récoltes, donc peu d'habitants.",
        ],
        exemples: [
          "Le taxi-brousse de papa quitte la pluie de Toamasina pour retrouver le soleil sec de l'Ouest.",
          "Les villageois du Grand Sud marchent parfois très loin pour chercher de l'eau.",
        ],
      },
      {
        titre: "2. Les terres et le relief",
        paras: [
          "Les hommes se concentrent aussi là où la terre est fertile : les vallées des Hautes Terres et les plaines de l'est nourrissent bien les familles.",
          "À l'inverse, les plateaux rocailleux, les grandes forêts denses et les zones marécageuses éloignent les habitants.",
        ],
        exemples: [
          "Les larges vallées de riziers des Hautes Terres portent des villages serrés.",
          "Certaines régions de l'Ouest n'offrent que des buissons épineux et peu d'eau.",
        ],
      },
      {
        titre: "3. Les villes, les routes et les conséquences",
        paras: [
          "Enfin, les hommes s'installent près des villes, des ports et le long des grandes routes : là, on trouve du travail, des écoles et des marchés.",
          "Cette répartition inégale a des conséquences : sur les Hautes Terres, les terres se morcellent et les collines se dénudent, car elles sont trop partagées ; dans l'Ouest, de vastes espaces restent presque inhabités et sous-utilisés.",
        ],
        exemples: [
          "Autour d'Antananarivo, la ville déborde sur les collines : tout le monde veut y habiter.",
          "De grandes terres de l'Ouest attendent encore des bras pour être mises en valeur.",
        ],
      },
    ],
  },
  motsCles: ["causes", "climat", "terres fertiles", "villes", "morcellement"],
  questionsRevision: [
    ["Cite deux causes de la répartition inégale.", "Le climat (la pluie ou la sécheresse) et la présence des villes et des routes."],
    ["Que devient une région trop peuplée ?", "Les terres se morcellent, la vie devient difficile."],
  ],
};

const S30 = {
  numero: 30, total: TOTAL,
  titre: "L'évolution de la population : natalité, mortalité, accroissement naturel",
  theme: "La population malgache",
  objectif: "Être capable d'expliquer la natalité, la mortalité et l'accroissement naturel, et de décrire l'évolution du nombre de la population malgache.",
  image: { id: "geo6_accroissement", legende: "Naissances et décès : comment grandit la population." },
  scene: { file: "scene_s30_evolution.jpg", mode: "document", legende: "Document : au centre de santé du quartier, l'infirmière pèse un nouveau-né pendant que les jeunes mamans patientent." },
  revisionOuverture: [
    ["Cite deux causes de la répartition inégale.", "Le climat (la pluie ou la sécheresse) et la présence des villes et des routes."],
    ["Que devient une région trop peuplée ?", "Les terres se morcellent, la vie devient difficile."],
  ],
  miseEnSituation: {
    texte: "Chez les voisins, on fête la naissance de la petite Ravaa : c'est le cinquième enfant de la famille. Le même jour, au village, on accompagne un vieil oncle qui s'éteint, entouré des siens. « Ce soir, compte sur tes doigts, dit papa à Miora : cinq enfants sont nés dans notre quartier ce mois-ci, un seul ancien nous a quittés. Alors, le quartier grandit ou il rétrécit ? »",
    question: "Comment évolue le nombre des habitants d'un pays ?",
    ra: "Chaque année, les naissances sont plus nombreuses que les décès : la population malgache grandit vite.",
    support: "Schéma de l'accroissement naturel (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'évolution de la population : natalité, mortalité, accroissement naturel ». Après cette séance, vous serez capables d'expliquer comment le nombre des Malgaches évolue.",
  observation: "Observez bien le schéma : les naissances arrivent d'un côté, les décès partent de l'autre, et le total grandit.",
  supportObservation: "Schéma de l'accroissement naturel (page Leçon)",
  analyse: [
    ["Qu'est-ce que la natalité ?", "C'est le nombre de naissances dans un pays pendant une année."],
    ["Et la mortalité ?", "C'est le nombre de décès pendant la même année."],
    ["Qu'est-ce que l'accroissement naturel ?", "C'est la différence entre la natalité et la mortalité : naissances moins décès."],
    ["À Madagascar, laquelle est la plus forte ?", "La natalité : les familles sont nombreuses, les bébés aussi."],
    ["Pourquoi la mortalité baisse-t-elle ?", "Grâce aux centres de santé, à la vaccination et à l'eau propre, on meurt moins jeune."],
    ["Alors, que fait la population ?", "Elle croît vite : elle double en une génération, à peu près tous les vingt-cinq ans."],
  ],
  synthese: "Donc, la population évolue par les naissances et les décès : l'accroissement naturel, c'est la natalité moins la mortalité. À Madagascar, la natalité reste forte et la mortalité baisse : la population croît très vite.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la natalité ?",
        "2. Qu'est-ce que la mortalité ?",
        "3. Comment obtient-on l'accroissement naturel ?",
        "4. Pourquoi la population malgache croît-elle vite ?",
      ],
      corrige: [
        "1. C'est **le nombre de naissances** pendant une année.",
        "2. C'est **le nombre de décès** pendant une année.",
        "3. En **retranchant la mortalité de la natalité**.",
        "4. Parce que **la natalité est forte** et que **la mortalité baisse** grâce aux soins.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. L'accroissement naturel, c'est la mortalité moins la natalité.",
        "2. La vaccination fait baisser la mortalité.",
        "3. À Madagascar, la population double en une génération.",
        "4. Quand la natalité égale la mortalité, la population ne grandit plus.",
      ],
      corrige: [
        "1. **Faux** : c'est la natalité moins la mortalité.",
        "2. **Vrai** : les enfants meurent beaucoup moins qu'avant.",
        "3. **Vrai** : à peu près tous les vingt-cinq ans.",
        "4. **Vrai** : l'accroissement naturel devient nul.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : natalité — mortalité — accroissement naturel — vite.",
      items: [
        "Le nombre de naissances par année, c'est la ……… .",
        "Le nombre de décès par année, c'est la ……… .",
        "La natalité moins la mortalité, c'est l'……… .",
        "Grâce à lui, la population malgache grandit très ……… .",
      ],
      corrige: [
        "la **natalité** / la **mortalité** / l'**accroissement naturel** / très **vite**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La natalité, ce sont : A. les décès — B. les naissances — C. les mariages",
        "2. L'accroissement naturel est fort quand : A. la natalité dépasse la mortalité — B. la mortalité dépasse la natalité — C. les deux sont égales",
        "3. La mortalité baisse grâce : A. aux cyclones — B. aux centres de santé — C. au chômage",
        "4. La population malgache double environ : A. tous les siècles — B. tous les vingt-cinq ans — C. chaque année",
        "5. Une population qui double vite a besoin : A. de moins d'écoles — B. du même nombre d'écoles — C. de plus d'écoles",
      ],
      corrige: [
        "1. Réponse **B** : les naissances.",
        "2. Réponse **A** : la natalité dépasse la mortalité.",
        "3. Réponse **B** : aux centres de santé et à la vaccination.",
        "4. Réponse **B** : tous les vingt-cinq ans, une génération.",
        "5. Réponse **C** : il faut construire plus d'écoles, de dispensaires, de routes.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La natalité et la mortalité",
        paras: [
          "Chaque année, des enfants naissent : c'est la natalité. Chaque année, des personnes meurent : c'est la mortalité.",
          "À Madagascar, la natalité est forte : les familles comptent souvent cinq ou six enfants. La mortalité, elle, baisse grâce aux centres de santé, à la vaccination et à l'eau propre : on vit plus longtemps qu'autrefois.",
        ],
        exemples: [
          "La petite Ravaa est la cinquième enfant de sa famille.",
          "Le dispensaire du quartier vaccine les bébés contre les grandes maladies.",
        ],
      },
      {
        titre: "2. L'accroissement naturel",
        paras: [
          "L'accroissement naturel, c'est la différence entre la natalité et la mortalité : accroissement naturel = natalité − mortalité.",
          "Quand la natalité dépasse largement la mortalité, la population croît vite. C'est le cas de Madagascar : la population double en une génération, à peu près tous les vingt-cinq ans.",
        ],
        exemples: [
          "Cinq naissances et un décès dans le quartier en un mois : le quartier grandit.",
          "Il faudra deux fois plus de riz, d'écoles et de maisons pour les enfants de Ravaa.",
        ],
      },
      {
        titre: "3. Les hommes bougent aussi",
        paras: [
          "Le nombre des habitants change aussi par les mouvements des hommes : les arrivées et les départs.",
          "Quand les arrivées sont plus nombreuses que les départs, la population augmente encore ; dans le cas contraire, elle diminue. Ces mouvements s'appellent les migrations : nous les étudierons à la séance suivante.",
        ],
        exemples: [
          "Un jeune frère part travailler à Antananarivo : le village compte un habitant de moins.",
          "Une famille vient s'installer près du marché : le quartier compte des habitants de plus.",
        ],
      },
    ],
  },
  motsCles: ["natalité", "mortalité", "accroissement naturel", "génération", "croissance"],
  questionsRevision: [
    ["Qu'est-ce que l'accroissement naturel ?", "C'est la natalité moins la mortalité."],
    ["En combien de temps la population malgache double-t-elle ?", "En une génération, à peu près tous les vingt-cinq ans."],
  ],
};

const S31 = {
  numero: 31, total: TOTAL,
  titre: "La migration : émigration et immigration",
  theme: "La population malgache",
  objectif: "Être capable d'expliquer la notion de migration et de distinguer l'émigration de l'immigration.",
  image: { id: "geo6_migration", legende: "Émigrer, immigrer : deux mots pour un seul voyage." },
  scene: { file: "scene_s31_migration.jpg", mode: "document", legende: "Document : à la gare routière, Rado fait ses adieux à sa famille, une valise à la main : il part chercher du travail à Antananarivo." },
  revisionOuverture: [
    ["Qu'est-ce que l'accroissement naturel ?", "C'est la natalité moins la mortalité."],
    ["En combien de temps la population malgache double-t-elle ?", "En une génération, à peu près tous les vingt-cinq ans."],
  ],
  miseEnSituation: {
    texte: "À la gare routière d'Antsirabe, Rado, le grand frère de Hery, serre sa famille dans ses bras. Une valise, une couverture, un peu d'argent : il part à Antananarivo, où un oncle lui a trouvé du travail dans un atelier. « Tu reviendras quand ? » demande Miora. « Pour les vacances », répond Rado en souriant, mais son regard est déjà loin. Le taxi-brousse démarre dans un nuage de poussière.",
    question: "Comment s'appelle le départ de Rado ? Et son arrivée à Antananarivo ?",
    ra: "Rado quitte Antsirabe : c'est un émigrant. Il arrive à Antananarivo : c'est un immigrant. Son voyage s'appelle une migration.",
    support: "Schéma de la migration (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La migration : émigration et immigration ». Après cette séance, vous serez capables d'expliquer ces trois mots et de les utiliser correctement.",
  observation: "Observez bien le schéma : deux lieux, une flèche, un voyageur ; le même voyage porte deux noms différents selon le lieu d'où on le regarde.",
  supportObservation: "Schéma de la migration (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une migration ?", "C'est le fait de quitter son lieu habituel pour aller s'installer ailleurs."],
    ["Qu'est-ce que l'émigration ?", "C'est le départ d'un habitant de son lieu d'origine."],
    ["Qu'est-ce que l'immigration ?", "C'est l'arrivée d'un nouvel habitant dans un lieu d'accueil."],
    ["Rado quitte Antsirabe : comment s'appelle-t-il pour sa ville ?", "C'est un émigrant : il émigre d'Antsirabe."],
    ["Et pour Antananarivo, sa ville d'accueil ?", "C'est un immigrant : il immigre à Antananarivo."],
    ["Un même voyageur peut-il être les deux ?", "Oui : émigrant au départ, immigrant à l'arrivée."],
  ],
  synthese: "Donc, migrer, c'est quitter son lieu habituel pour s'installer ailleurs. Vu du lieu de départ, c'est une émigration ; vu du lieu d'arrivée, c'est une immigration.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une migration ?",
        "2. Qu'est-ce que l'émigration ?",
        "3. Qu'est-ce que l'immigration ?",
        "4. Comment appelle-t-on celui qui quitte son village pour la ville ?",
      ],
      corrige: [
        "1. C'est **le fait de quitter son lieu habituel** pour s'installer ailleurs.",
        "2. C'est **le départ** d'un habitant de son lieu d'origine.",
        "3. C'est **l'arrivée** d'un nouvel habitant dans un lieu d'accueil.",
        "4. Pour son village, c'est un **émigrant** ; pour la ville, un **immigrant**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Émigrer, c'est arriver dans un nouveau lieu.",
        "2. Immigrer, c'est s'installer dans un nouveau lieu.",
        "3. Le même voyageur est émigrant et immigrant.",
        "4. Migrer, c'est faire un simple voyage en taxi-brousse pour la journée.",
      ],
      corrige: [
        "1. **Faux** : émigrer, c'est partir de chez soi.",
        "2. **Vrai** : on immigre dans un lieu d'accueil.",
        "3. **Vrai** : émigrant au départ, immigrant à l'arrivée.",
        "4. **Faux** : migrer, c'est s'installer ailleurs, pas juste visiter.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : migration — émigration — immigration — émigrant.",
      items: [
        "Quitter son lieu habituel pour s'installer ailleurs, c'est une ……… .",
        "Le départ de Rado d'Antsirabe est une ……… .",
        "Son arrivée à Antananarivo est une ……… .",
        "Pour sa famille restée au village, Rado est un ……… .",
      ],
      corrige: [
        "une **migration** / une **émigration** / une **immigration** / un **émigrant**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Migrer, c'est : A. s'installer ailleurs — B. rester chez soi — C. faire les courses",
        "2. L'émigration est vue : A. du lieu d'arrivée — B. du lieu de départ — C. de l'école",
        "3. L'immigration est vue : A. du lieu d'arrivée — B. du lieu de départ — C. du taxi-brousse",
        "4. Rado à Antananarivo est : A. un émigrant — B. un immigrant — C. un touriste",
        "5. Si beaucoup d'habitants partent d'un village, sa population : A. augmente — B. diminue — C. ne change pas",
      ],
      corrige: [
        "1. Réponse **A** : s'installer ailleurs.",
        "2. Réponse **B** : du lieu de départ.",
        "3. Réponse **A** : du lieu d'arrivée.",
        "4. Réponse **B** : un immigrant pour la capitale.",
        "5. Réponse **B** : elle diminue.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Migrer : partir s'installer ailleurs",
        paras: [
          "Une migration, c'est le fait de quitter son lieu habituel pour aller vivre ailleurs, pour longtemps ou pour toujours.",
          "Les hommes ont toujours migré : pour trouver une terre, du travail, ou pour rejoindre leur famille. À Madagascar, les migrations sont très nombreuses.",
        ],
        exemples: [
          "Rado quitte Antsirabe pour l'atelier d'un oncle à Antananarivo.",
          "Une famille de la côte vient s'installer dans la capitale pour vendre ses tissus.",
        ],
      },
      {
        titre: "2. L'émigration : le regard du lieu quitté",
        paras: [
          "L'émigration, c'est le départ des habitants d'un lieu. Celui qui part est un émigrant.",
          "Pour Antsirabe, le départ de Rado est une émigration : la ville compte un habitant de moins, sa famille et ses amis lui disent au revoir.",
        ],
        exemples: [
          "Beaucoup de jeunes quittent les campagnes : on dit qu'ils émigrent vers les villes.",
          "Un village qui perd ses jeunes par émigration se vide peu à peu.",
        ],
      },
      {
        titre: "3. L'immigration : le regard du lieu d'accueil",
        paras: [
          "L'immigration, c'est l'arrivée de nouveaux habitants dans un lieu. Celui qui arrive est un immigrant.",
          "Pour Antananarivo, l'arrivée de Rado est une immigration : la ville compte un habitant de plus, un nouvel ouvrier, un nouveau client des marchés.",
        ],
        exemples: [
          "Les grands chantiers attirent des travailleurs immigrants.",
          "Les villes qui reçoivent beaucoup d'immigrants grandissent vite.",
        ],
      },
    ],
  },
  motsCles: ["migration", "émigration", "immigration", "émigrant", "immigrant"],
  questionsRevision: [
    ["Quelle différence entre émigration et immigration ?", "L'émigration est le départ d'un lieu ; l'immigration est l'arrivée dans un lieu."],
    ["Comment appelle-t-on celui qui arrive dans une nouvelle ville ?", "Un immigrant."],
  ],
};

module.exports = { topics: [S27, S28, S29, S30, S31] };

