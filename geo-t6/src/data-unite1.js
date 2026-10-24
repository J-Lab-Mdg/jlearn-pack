// data-unite1.js — UNITÉ 1 : LES RÉGIONS ADMINISTRATIVES DE MADAGASCAR (Séances 1 à 8)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 168-169)
const TOTAL = 78;

const S1 = {
  numero: 1, total: TOTAL,
  titre: "La division administrative de Madagascar",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable d'expliquer la division administrative de Madagascar : les 24 régions, les districts, les communes, les fokontany.",
  image: { id: "geo6_division_admin", legende: "La division administrative de Madagascar, du plus grand au plus petit découpage." },
  scene: { file: "scene_s01_division.jpg", mode: "document", legende: "Document : le taxi-brousse de papa quitte Antsirabe ; sur le panneau de l'arrêt, la carte des 24 régions de Madagascar." },
  revisionOuverture: [
    ["Quelle est la capitale de Madagascar ?", "La capitale de Madagascar est Antananarivo."],
    ["Dans quelle ville habitons-nous ?", "Nous habitons à Antsirabe, une grande ville des Hautes Terres."],
  ],
  miseEnSituation: {
    texte: "Hery et Miora sont des jumeaux de onze ans. Leur papa est chauffeur de taxi-brousse à Antsirabe. Ce matin, toute la famille part pour Antananarivo. Au bord de la route, juste après Antsirabe, un grand panneau annonce : « Bienvenue dans la région Vakinankaratra ». Un peu plus loin, un autre panneau écrit : « Vous entrez dans la région Analamanga ». Hery demande : « Papa, pourquoi la route change-t-elle de région ? »",
    question: "Pourquoi voit-on des panneaux qui annoncent des régions différentes sur la route ?",
    ra: "Parce que Madagascar est découpé en 24 régions : en roulant, on passe d'une région à une autre.",
    support: "Schéma de la division administrative (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La division administrative de Madagascar ». Après cette séance, vous serez capables d'expliquer comment Madagascar est découpé : les régions, les districts, les communes et les fokontany.",
  observation: "Observez bien le schéma qui montre les découpages de Madagascar, du plus grand au plus petit, et le document de la famille devant le panneau d'une région.",
  supportObservation: "Schéma de la division administrative et panneau de région (page Leçon)",
  analyse: [
    ["Pourquoi découpe-t-on un pays en plusieurs parties ?", "Pour mieux l'organiser, le diriger et le développer : chaque partie a des responsables et des services."],
    ["Comment appelle-t-on les grandes parties de Madagascar ?", "Ce sont les régions : Madagascar compte 24 régions."],
    ["Qui dirige chaque région ?", "La région est dirigée depuis son chef-lieu, la ville principale."],
    ["Comment appelle-t-on le découpage à l'intérieur d'une région ?", "La région est découpée en districts."],
    ["Et à l'intérieur d'un district, trouve-t-on quoi ?", "Le district regroupe plusieurs communes."],
    ["Quel est le plus petit découpage de tous ?", "Le plus petit découpage, c'est le fokontany : le village à la campagne, le quartier en ville."],
  ],
  synthese: "Donc, Madagascar est découpé en 24 régions administratives. Chaque région est dirigée depuis son chef-lieu, et découpée en districts ; chaque district regroupe des communes ; et la commune est partagée en fokontany : les villages à la campagne, les quartiers en ville.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Combien de régions administratives compte Madagascar ?",
        "2. Comment appelle-t-on la ville principale qui dirige une région ?",
        "3. Comment appelle-t-on le découpage à l'intérieur d'une région ?",
        "4. Quel est le plus petit découpage de Madagascar ?",
      ],
      corrige: [
        "1. Madagascar compte **24 régions** administratives.",
        "2. C'est le **chef-lieu** de la région.",
        "3. La région est découpée en **districts**.",
        "4. Le plus petit découpage, c'est le **fokontany**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Madagascar compte 12 régions administratives.",
        "2. Le chef-lieu est la ville principale d'une région.",
        "3. Le district regroupe plusieurs communes.",
        "4. En ville, le fokontany correspond au quartier.",
      ],
      corrige: [
        "1. **Faux** : Madagascar compte 24 régions administratives.",
        "2. **Vrai** : le chef-lieu dirige la région.",
        "3. **Vrai** : le district regroupe plusieurs communes.",
        "4. **Vrai** : en ville, le quartier est un fokontany.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : régions — chef-lieu — districts — fokontany.",
      items: [
        "Madagascar est découpé en 24 ……… .",
        "Chaque région est dirigée depuis son ……… .",
        "Chaque région est découpée en ……… .",
        "Le village ou le quartier s'appelle le ……… .",
      ],
      corrige: [
        "24 **régions** / un **chef-lieu** / des **districts** / le **fokontany**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Madagascar compte : A. 6 régions — B. 24 régions — C. 44 régions",
        "2. Le chef-lieu est : A. la ville principale de la région — B. un village perdu — C. une montagne",
        "3. Le district regroupe : A. des régions — B. des communes — C. des pays",
        "4. À la campagne, le fokontany est souvent : A. un village — B. un immeuble — C. une île",
        "5. Le découpage sert à : A. séparer les familles — B. mieux organiser le pays — C. fermer les routes",
      ],
      corrige: [
        "1. Réponse **B** : 24 régions.",
        "2. Réponse **A** : la ville principale de la région.",
        "3. Réponse **B** : des communes.",
        "4. Réponse **A** : un village.",
        "5. Réponse **B** : mieux organiser le pays.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Pourquoi découper le pays ?",
        paras: [
          "Madagascar est une grande île : environ 587 000 kilomètres carrés et des millions d'habitants. Pour bien organiser le pays, on le découpe en plusieurs parties.",
          "Chaque partie a ses responsables et ses services : écoles, centres de santé, routes, marchés. C'est ce qu'on appelle la division administrative du pays.",
        ],
        exemples: [
          "Les panneaux au bord des routes annoncent quand on change de région, comme celui que Hery a vu près d'Antsirabe.",
          "Le taxi-brousse de papa traverse ainsi plusieurs régions pendant un seul voyage.",
        ],
      },
      {
        titre: "2. Les 24 régions et leurs chefs-lieux",
        paras: [
          "Madagascar compte 24 régions administratives. La région est le plus grand découpage du pays.",
          "Chaque région porte un nom et possède un chef-lieu : la ville principale qui la dirige. Par exemple, la région Analamanga a pour chef-lieu Antananarivo, et la région Vakinankaratra a pour chef-lieu Antsirabe.",
        ],
        exemples: [
          "Antananarivo, la capitale de Madagascar, est le chef-lieu de la région Analamanga.",
          "Antsirabe, où habite la famille de Hery, est le chef-lieu de la région Vakinankaratra.",
        ],
      },
      {
        titre: "3. Du district au fokontany",
        paras: [
          "À l'intérieur de chaque région, le territoire est encore découpé en districts, puis en communes.",
          "Enfin, chaque commune est partagée en fokontany : à la campagne, le fokontany correspond souvent à un village ; en ville, c'est un quartier. Un très grand quartier peut même être partagé en secteurs.",
        ],
        exemples: [
          "Le quartier Mahazoarivo, à Antsirabe, est un fokontany de la commune d'Antsirabe.",
          "Maman Rasoa connaît bien son fokontany : c'est là que l'on note les naissances des nouveau-nés du quartier.",
        ],
      },
    ],
  },
  motsCles: ["division administrative", "région", "chef-lieu", "district", "commune", "fokontany"],
  questionsRevision: [
    ["Combien de régions administratives compte Madagascar ?", "Madagascar compte 24 régions administratives."],
    ["Cite les découpages du plus grand au plus petit.", "La région, le district, la commune, puis le fokontany."],
  ],
};

const S2 = {
  numero: 2, total: TOTAL,
  titre: "Les chefs-lieux (1) : les régions du Centre",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable de citer les six régions du Centre de Madagascar avec leurs chefs-lieux.",
  image: { id: "geo6_regions_centre", legende: "Les six régions du Centre et leurs chefs-lieux." },
  scene: { file: "scene_s02_centre.jpg", mode: "document", legende: "Document : arrivée à Antananarivo, la capitale, chef-lieu de la région Analamanga." },
  revisionOuverture: [
    ["Combien de régions administratives compte Madagascar ?", "Madagascar compte 24 régions administratives."],
    ["Comment appelle-t-on la ville principale qui dirige une région ?", "C'est le chef-lieu de la région."],
  ],
  miseEnSituation: {
    texte: "Le taxi-brousse arrive à Antananarivo. Du haut d'une colline, Miora regarde la grande ville qui s'étend : les maisons à perte de vue, les rues animées, les rizières autour. « Nous voici dans la région Analamanga, dit papa. Sa capitale, c'est Antananarivo. » Hery ouvre la carte du manuel : « Montre-moi notre région à nous ! » Papa pointe le doigt au sud : « La nôtre, c'est la Vakinankaratra, avec Antsirabe pour chef-lieu. »",
    question: "Quelles sont les régions du Centre de Madagascar et leurs chefs-lieux ?",
    ra: "Le Centre compte six régions : Analamanga (Antananarivo), Vakinankaratra (Antsirabe), Itasy (Miarinarivo), Bongolava (Tsiroanomandidy), Amoron'i Mania (Ambositra) et Haute Matsiatra (Fianarantsoa).",
    support: "Carte des régions du Centre (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les chefs-lieux (1) : les régions du Centre ». Après cette séance, vous serez capables de citer les six régions du Centre avec leurs chefs-lieux.",
  observation: "Observez bien la carte des régions du Centre, et le document de l'arrivée à Antananarivo.",
  supportObservation: "Carte des régions du Centre (page Leçon)",
  analyse: [
    ["Quelle est la région de la capitale Antananarivo ?", "C'est la région Analamanga."],
    ["Quel est le chef-lieu de la Vakinankaratra ?", "Le chef-lieu de la Vakinankaratra est Antsirabe."],
    ["Où habite la famille de Hery ?", "La famille de Hery habite à Antsirabe, en Vakinankaratra."],
    ["Quel est le chef-lieu de l'Itasy ?", "Le chef-lieu de l'Itasy est Miarinarivo."],
    ["Quel est le chef-lieu de la Bongolava ?", "Le chef-lieu de la Bongolava est Tsiroanomandidy."],
    ["Comment s'appellent les deux régions plus au sud du Centre ?", "Ce sont l'Amoron'i Mania, avec Ambositra, et la Haute Matsiatra, avec Fianarantsoa."],
  ],
  synthese: "Donc, le Centre de Madagascar compte six régions : l'Analamanga (Antananarivo), la Vakinankaratra (Antsirabe), l'Itasy (Miarinarivo), la Bongolava (Tsiroanomandidy), l'Amoron'i Mania (Ambositra) et la Haute Matsiatra (Fianarantsoa).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle est la région d'Antananarivo ?",
        "2. Quel est le chef-lieu de la Vakinankaratra ?",
        "3. Quel est le chef-lieu de la Haute Matsiatra ?",
        "4. Combien de régions compte le Centre de Madagascar ?",
      ],
      corrige: [
        "1. Antananarivo est le chef-lieu de la région **Analamanga**.",
        "2. Le chef-lieu de la Vakinankaratra est **Antsirabe**.",
        "3. Le chef-lieu de la Haute Matsiatra est **Fianarantsoa**.",
        "4. Le Centre compte **six** régions.",
      ],
    },
    {
      consigne: "Complète : écris le chef-lieu de chaque région du Centre.",
      items: [
        "1. Analamanga : ………",
        "2. Vakinankaratra : ………",
        "3. Itasy : ………",
        "4. Bongolava : ………",
      ],
      corrige: [
        "1. Analamanga : **Antananarivo**.",
        "2. Vakinankaratra : **Antsirabe**.",
        "3. Itasy : **Miarinarivo**.",
        "4. Bongolava : **Tsiroanomandidy**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque région à son chef-lieu.",
      items: [
        "Analamanga — — Ambositra",
        "Vakinankaratra — — Antananarivo",
        "Amoron'i Mania — — Fianarantsoa",
        "Haute Matsiatra — — Antsirabe",
      ],
      corrige: [
        "Analamanga — **Antananarivo** ; Vakinankaratra — **Antsirabe** ; Amoron'i Mania — **Ambositra** ; Haute Matsiatra — **Fianarantsoa**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le chef-lieu de l'Itasy est : A. Ihosy — B. Miarinarivo — C. Morondava",
        "2. Le chef-lieu de la Bongolava est : A. Tsiroanomandidy — B. Maevatanana — C. Antsirabe",
        "3. Antananarivo est le chef-lieu de : A. la Vakinankaratra — B. l'Analamanga — C. l'Itasy",
        "4. Le Centre de Madagascar compte : A. 4 régions — B. 5 régions — C. 6 régions",
        "5. La famille de Hery habite à : A. Antananarivo — B. Antsirabe — C. Fianarantsoa",
      ],
      corrige: [
        "1. Réponse **B** : Miarinarivo.",
        "2. Réponse **A** : Tsiroanomandidy.",
        "3. Réponse **B** : l'Analamanga.",
        "4. Réponse **C** : 6 régions.",
        "5. Réponse **B** : Antsirabe, en Vakinankaratra.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le chef-lieu, la ville qui dirige",
        paras: [
          "Dans chaque région, une ville est choisie pour diriger la région : c'est le chef-lieu. C'est là que se trouvent les principaux bureaux et services de la région.",
          "Le chef-lieu est souvent la plus grande ville, la plus animée et la mieux desservie de la région.",
        ],
        exemples: [
          "Antananarivo, la capitale du pays, est le chef-lieu de la région Analamanga.",
          "Antsirabe, célèbre pour ses sources d'eau chaude, est le chef-lieu de la Vakinankaratra.",
        ],
      },
      {
        titre: "2. Les six régions du Centre",
        paras: [
          "Le Centre de Madagascar, la zone des Hautes Terres, compte six régions.",
          "Ce sont : l'Analamanga (Antananarivo), la Vakinankaratra (Antsirabe), l'Itasy (Miarinarivo), la Bongolava (Tsiroanomandidy), l'Amoron'i Mania (Ambositra) et la Haute Matsiatra (Fianarantsoa).",
        ],
        exemples: [
          "Sur la carte, les six régions du Centre forment comme le cœur de l'île, autour d'Antananarivo.",
          "Fianarantsoa, au sud du Centre, est la capitale du riz et de l'enseignement.",
        ],
      },
      {
        titre: "3. Antananarivo, la capitale",
        paras: [
          "Antananarivo, que tout le monde appelle Tana, est la plus grande ville de Madagascar : plus d'un million d'habitants.",
          "Capitale du pays, c'est là que se prennent les grandes décisions pour toute l'île. C'est aussi le chef-lieu de la région Analamanga.",
        ],
        exemples: [
          "Du haut de la colline de la Reine, on voit toute la ville d'Antananarivo qui s'étend entre les collines.",
          "Le taxi-brousse de papa gare à la gare routière d'Analamanga, près du grand marché.",
        ],
      },
    ],
  },
  motsCles: ["chef-lieu", "Analamanga", "Vakinankaratra", "Itasy", "Bongolava", "Amoron'i Mania", "Haute Matsiatra"],
  questionsRevision: [
    ["Cite trois régions du Centre avec leurs chefs-lieux.", "L'Analamanga (Antananarivo), la Vakinankaratra (Antsirabe) et l'Itasy (Miarinarivo)."],
    ["Quelle est la région de la capitale ?", "La capitale Antananarivo est le chef-lieu de la région Analamanga."],
  ],
};

const S3 = {
  numero: 3, total: TOTAL,
  titre: "Les chefs-lieux (2) : les régions de l'Est",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable de citer les cinq régions de l'Est de Madagascar avec leurs chefs-lieux.",
  image: { id: "geo6_regions_est", legende: "Les cinq régions de l'Est et leurs chefs-lieux." },
  scene: { file: "scene_s03_est.jpg", mode: "document", legende: "Document : au port de Toamasina, le cousin Tojo regarde les grands bateaux ; Toamasina est le chef-lieu de l'Atsinanana." },
  revisionOuverture: [
    ["Cite trois régions du Centre avec leurs chefs-lieux.", "L'Analamanga (Antananarivo), la Vakinankaratra (Antsirabe) et l'Itasy (Miarinarivo)."],
    ["Qu'est-ce qu'un chef-lieu ?", "C'est la ville principale qui dirige une région."],
  ],
  miseEnSituation: {
    texte: "Ce soir, à la maison, le téléphone sonne. C'est Tojo, le cousin de Hery et Miora, qui appelle depuis Toamasina. « Vous entendez la mer ? demande-t-il. Je suis au port, il y a des bateaux du monde entier ! » Hery cherche Toamasina sur la carte : la ville est posée au bord de l'océan Indien. « Tojo habite la région Atsinanana, explique papa. Et il y a d'autres régions le long de la côte Est. »",
    question: "Quelles sont les régions de l'Est de Madagascar et leurs chefs-lieux ?",
    ra: "L'Est compte cinq régions : Ambatosoa (Maroantsetra), Analanjirofo (Fenoarivo-Atsinanana), Atsinanana (Toamasina), Alaotra-Mangoro (Ambatondrazaka) et Atsimo-Atsinanana (Farafangana).",
    support: "Carte des régions de l'Est (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les chefs-lieux (2) : les régions de l'Est ». Après cette séance, vous serez capables de citer les cinq régions de l'Est avec leurs chefs-lieux.",
  observation: "Observez bien la carte des régions de l'Est, et le document du port de Toamasina où se trouve Tojo.",
  supportObservation: "Carte des régions de l'Est (page Leçon)",
  analyse: [
    ["Dans quelle région habite Tojo ?", "Tojo habite la région Atsinanana, dont le chef-lieu est Toamasina."],
    ["Comment s'appelle le chef-lieu de l'Ambatosoa ?", "Le chef-lieu de l'Ambatosoa est Maroantsetra."],
    ["Quel est le chef-lieu de l'Analanjirofo ?", "Le chef-lieu de l'Analanjirofo est Fenoarivo-Atsinanana."],
    ["Quel est le chef-lieu de l'Alaotra-Mangoro ?", "Le chef-lieu de l'Alaotra-Mangoro est Ambatondrazaka."],
    ["Où se trouve l'Atsimo-Atsinanana ?", "C'est la région du Sud-Est ; son chef-lieu est Farafangana."],
    ["Pourquoi dit-on que les régions de l'Est sont face à l'océan ?", "Parce qu'elles bordent toutes l'océan Indien, à l'est de l'île."],
  ],
  synthese: "Donc, l'Est de Madagascar compte cinq régions : l'Ambatosoa (Maroantsetra), l'Analanjirofo (Fenoarivo-Atsinanana), l'Atsinanana (Toamasina), l'Alaotra-Mangoro (Ambatondrazaka) et l'Atsimo-Atsinanana (Farafangana).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le chef-lieu de l'Atsinanana ?",
        "2. Quel est le chef-lieu de l'Ambatosoa ?",
        "3. Quel est le chef-lieu de l'Atsimo-Atsinanana ?",
        "4. Combien de régions compte l'Est de Madagascar ?",
      ],
      corrige: [
        "1. Le chef-lieu de l'Atsinanana est **Toamasina**.",
        "2. Le chef-lieu de l'Ambatosoa est **Maroantsetra**.",
        "3. Le chef-lieu de l'Atsimo-Atsinanana est **Farafangana**.",
        "4. L'Est compte **cinq** régions.",
      ],
    },
    {
      consigne: "Complète : écris le chef-lieu de chaque région de l'Est.",
      items: [
        "1. Atsinanana : ………",
        "2. Analanjirofo : ………",
        "3. Alaotra-Mangoro : ………",
        "4. Atsimo-Atsinanana : ………",
      ],
      corrige: [
        "1. Atsinanana : **Toamasina**.",
        "2. Analanjirofo : **Fenoarivo-Atsinanana**.",
        "3. Alaotra-Mangoro : **Ambatondrazaka**.",
        "4. Atsimo-Atsinanana : **Farafangana**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque région à son chef-lieu.",
      items: [
        "Atsinanana — — Maroantsetra",
        "Ambatosoa — — Toamasina",
        "Alaotra-Mangoro — — Farafangana",
        "Atsimo-Atsinanana — — Ambatondrazaka",
      ],
      corrige: [
        "Atsinanana — **Toamasina** ; Ambatosoa — **Maroantsetra** ; Alaotra-Mangoro — **Ambatondrazaka** ; Atsimo-Atsinanana — **Farafangana**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Toamasina est le chef-lieu de : A. l'Analanjirofo — B. l'Atsinanana — C. l'Ambatosoa",
        "2. Le chef-lieu de l'Analanjirofo est : A. Fenoarivo-Atsinanana — B. Mananjary — C. Toamasina",
        "3. L'Alaotra-Mangoro est la région : A. du port — B. du lac Alaotra — C. du cap sud",
        "4. Les régions de l'Est bordent : A. le canal de Mozambique — B. l'océan Indien — C. l'océan Atlantique",
        "5. Le cousin Tojo habite : A. Farafangana — B. Maroantsetra — C. Toamasina",
      ],
      corrige: [
        "1. Réponse **B** : l'Atsinanana.",
        "2. Réponse **A** : Fenoarivo-Atsinanana.",
        "3. Réponse **B** : du lac Alaotra, le plus grand lac de Madagascar.",
        "4. Réponse **B** : l'océan Indien.",
        "5. Réponse **C** : Toamasina.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Cinq régions face à l'océan Indien",
        paras: [
          "La côte Est de Madagascar, longue et étroite, est découpée en cinq régions qui bordent toutes l'océan Indien.",
          "Ce sont, du nord au sud : l'Ambatosoa (Maroantsetra), l'Analanjirofo (Fenoarivo-Atsinanana), l'Atsinanana (Toamasina), l'Alaotra-Mangoro (Ambatondrazaka) et l'Atsimo-Atsinanana (Farafangana).",
        ],
        exemples: [
          "La région Alaotra-Mangoro porte le nom du lac Alaotra, le pays du riz.",
          "L'Atsimo-Atsinanana veut dire « le Sud-Est » : c'est la région la plus au sud de la côte Est.",
        ],
      },
      {
        titre: "2. Toamasina, le grand port",
        paras: [
          "Toamasina, chef-lieu de la région Atsinanana, est le premier port de Madagascar.",
          "C'est par Toamasina qu'entrent et sortent la plupart des marchandises du pays : conteneurs, camions, produits d'exportation comme la vanille, le girofle et le litchi.",
        ],
        exemples: [
          "Du port de Toamasina, Tojo voit les grands bateaux qui chargent les marchandises pour l'exportation.",
          "La route nationale qui relie Antananarivo à Toamasina est l'une des plus fréquentées de l'île.",
        ],
      },
      {
        titre: "3. Le pays du litchi et du lac",
        paras: [
          "L'Analanjirofo, autour de Fenoarivo-Atsinanana, est le pays du litchi : ses fruits rouges partent chaque saison vers les marchés lointains.",
          "L'Alaotra-Mangoro, autour d'Ambatondrazaka, entoure le lac Alaotra : c'est le grand grenier à riz de Madagascar.",
        ],
        exemples: [
          "Les rizières du lac Alaotra nourrissent une grande partie du pays.",
          "Maroantsetra, chef-lieu de l'Ambatosoa, est la porte de la presqu'île de Masoala, couverte de forêt.",
        ],
      },
    ],
  },
  motsCles: ["Atsinanana", "Toamasina", "Analanjirofo", "Alaotra-Mangoro", "Ambatosoa", "Atsimo-Atsinanana"],
  questionsRevision: [
    ["Cite trois régions de l'Est avec leurs chefs-lieux.", "L'Atsinanana (Toamasina), l'Analanjirofo (Fenoarivo-Atsinanana) et l'Alaotra-Mangoro (Ambatondrazaka)."],
    ["Quelle est la ville portuaire de l'Est ?", "C'est Toamasina, le premier port de Madagascar."],
  ],
};

const S4 = {
  numero: 4, total: TOTAL,
  titre: "Les chefs-lieux (3) : les régions du Nord et de l'Ouest",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable de citer les sept régions du Nord et de l'Ouest de Madagascar avec leurs chefs-lieux.",
  image: { id: "geo6_regions_nord_ouest", legende: "Les sept régions du Nord et de l'Ouest et leurs chefs-lieux." },
  scene: { file: "scene_s04_nord_ouest.jpg", mode: "document", legende: "Document : sur la route de Mahajanga, le taxi-brousse croise des baobabs géants ; Mahajanga est le chef-lieu du Boeny." },
  revisionOuverture: [
    ["Cite trois régions de l'Est avec leurs chefs-lieux.", "L'Atsinanana (Toamasina), l'Analanjirofo (Fenoarivo-Atsinanana) et l'Alaotra-Mangoro (Ambatondrazaka)."],
    ["Quel est le premier port de Madagascar ?", "C'est Toamasina, chef-lieu de la région Atsinanana."],
  ],
  miseEnSituation: {
    texte: "Grandes vacances ! Papa a accepté un long trajet : il conduit son taxi-brousse jusqu'à Mahajanga, sur la côte ouest. La route descend des Hautes Terres, traverse des savanes, longe des baobabs. « Regardez, dit Miora, ces arbres ont l'air plantés à l'envers ! » À l'entrée de Mahajanga, un panneau annonce la région Boeny. Puis le voyage continue jusqu'à Antsiranana, tout au nord : la famille a traversé sept régions !",
    question: "Quelles sont les régions du Nord et de l'Ouest de Madagascar et leurs chefs-lieux ?",
    ra: "Le Nord et l'Ouest comptent sept régions : DIANA (Antsiranana), SAVA (Sambava), Sofia (Antsohihy), Betsiboka (Maevatanana), Boeny (Mahajanga), Melaky (Maintirano) et Menabe (Morondava).",
    support: "Carte des régions du Nord et de l'Ouest (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les chefs-lieux (3) : les régions du Nord et de l'Ouest ». Après cette séance, vous serez capables de citer les sept régions du Nord et de l'Ouest avec leurs chefs-lieux.",
  observation: "Observez bien la carte des régions du Nord et de l'Ouest, et le document des baobabs sur la route de Mahajanga.",
  supportObservation: "Carte des régions du Nord et de l'Ouest (page Leçon)",
  analyse: [
    ["Quel est le chef-lieu de la région Boeny ?", "Le chef-lieu du Boeny est Mahajanga."],
    ["Comment s'appelle la région la plus au nord de Madagascar ?", "C'est la région DIANA, dont le chef-lieu est Antsiranana."],
    ["Quel est le chef-lieu de la SAVA ?", "Le chef-lieu de la SAVA est Sambava."],
    ["Quel est le chef-lieu du Menabe ?", "Le chef-lieu du Menabe est Morondava, la ville des baobabs."],
    ["Où se trouve la région Melaky ?", "La Melaky est sur la côte ouest ; son chef-lieu est Maintirano."],
    ["Quelles sont les deux régions traversées entre Antsirabe et Mahajanga ?", "On traverse la Vakinankaratra puis la Betsiboka (Maevatanana) avant d'entrer dans le Boeny."],
  ],
  synthese: "Donc, le Nord et l'Ouest de Madagascar comptent sept régions : la DIANA (Antsiranana), la SAVA (Sambava), la Sofia (Antsohihy), la Betsiboka (Maevatanana), le Boeny (Mahajanga), le Melaky (Maintirano) et le Menabe (Morondava).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le chef-lieu de la DIANA ?",
        "2. Quel est le chef-lieu du Menabe ?",
        "3. Quel est le chef-lieu de la Sofia ?",
        "4. Combien de régions comptent le Nord et l'Ouest ensemble ?",
      ],
      corrige: [
        "1. Le chef-lieu de la DIANA est **Antsiranana**.",
        "2. Le chef-lieu du Menabe est **Morondava**.",
        "3. Le chef-lieu de la Sofia est **Antsohihy**.",
        "4. Le Nord et l'Ouest comptent **sept** régions.",
      ],
    },
    {
      consigne: "Complète : écris le chef-lieu de chaque région.",
      items: [
        "1. Boeny : ………",
        "2. SAVA : ………",
        "3. Melaky : ………",
        "4. Betsiboka : ………",
      ],
      corrige: [
        "1. Boeny : **Mahajanga**.",
        "2. SAVA : **Sambava**.",
        "3. Melaky : **Maintirano**.",
        "4. Betsiboka : **Maevatanana**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque région à son chef-lieu.",
      items: [
        "DIANA — — Mahajanga",
        "Boeny — — Antsiranana",
        "Menabe — — Antsohihy",
        "Sofia — — Morondava",
      ],
      corrige: [
        "DIANA — **Antsiranana** ; Boeny — **Mahajanga** ; Menabe — **Morondava** ; Sofia — **Antsohihy**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Mahajanga est le chef-lieu du : A. Menabe — B. Boeny — C. Melaky",
        "2. La SAVA est la région : A. de la vanille — B. du riz — C. du port principal",
        "3. Le chef-lieu du Melaky est : A. Maintirano — B. Morondava — C. Maevatanana",
        "4. Antsiranana se trouve : A. au sud — B. au centre — C. tout au nord de Madagascar",
        "5. Les baobabs célèbres se trouvent sur la route de : A. Toamasina — B. Morondava — C. Fianarantsoa",
      ],
      corrige: [
        "1. Réponse **B** : le Boeny.",
        "2. Réponse **A** : la SAVA, avec Sambava, Antalaha, Vohémar et Andapa, est le pays de la vanille.",
        "3. Réponse **A** : Maintirano.",
        "4. Réponse **C** : tout au nord de l'île.",
        "5. Réponse **B** : Morondava, dans le Menabe, avec son allée des baobabs.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Au nord : DIANA et SAVA",
        paras: [
          "Tout au nord de l'île, la région DIANA a pour chef-lieu Antsiranana, qu'on appelle aussi Diégo-Suarez, au bord d'une magnifique baie.",
          "À côté, la région SAVA doit son nom à ses quatre grandes villes : Sambava, Antalaha, Vohémar et Andapa. Son chef-lieu est Sambava, la capitale de la vanille.",
        ],
        exemples: [
          "La baie d'Antsiranana est l'une des plus belles baies du monde.",
          "La vanille de la SAVA est vendue très loin : elle parfume les gâteaux et les crèmes glacées.",
        ],
      },
      {
        titre: "2. À l'ouest : de la Sofia au Menabe",
        paras: [
          "En descendant la côte ouest, on traverse la Sofia (Antsohihy), la Betsiboka (Maevatanana), le Boeny (Mahajanga), le Melaky (Maintirano) et le Menabe (Morondava).",
          "Mahajanga, chef-lieu du Boeny, est un grand port au bord du canal de Mozambique ; Morondava, chef-lieu du Menabe, est célèbre pour son allée des baobabs.",
        ],
        exemples: [
          "Le taxi-brousse de papa longe des savanes et des baobabs sur la route de Mahajanga.",
          "L'estuaire rouge de la Betsiboka, près de Mahajanga, doit sa couleur à la terre rouge des Hautes Terres.",
        ],
      },
      {
        titre: "3. Sept régions bien différentes",
        paras: [
          "Les sept régions du Nord et de l'Ouest sont très différentes : ports de pêche, plantations de vanille, savanes à zébus, forêts sèches.",
          "Mais toutes ont un chef-lieu qui les dirige : Antsiranana, Sambava, Antsohihy, Maevatanana, Mahajanga, Maintirano et Morondava.",
        ],
        exemples: [
          "Papa compte les régions traversées sur ses doigts : Vakinankaratra, Betsiboka, Boeny… le voyage en fait voir beaucoup !",
          "Maevatanana, chef-lieu de la Betsiboka, est connue pour sa chaleur : c'est l'une des villes les plus chaudes de l'île.",
        ],
      },
    ],
  },
  motsCles: ["DIANA", "Antsiranana", "SAVA", "Sambava", "Boeny", "Mahajanga", "Menabe", "Morondava"],
  questionsRevision: [
    ["Cite trois régions du Nord ou de l'Ouest avec leurs chefs-lieux.", "La DIANA (Antsiranana), le Boeny (Mahajanga) et le Menabe (Morondava)."],
    ["Quelle est la capitale de la vanille ?", "C'est Sambava, chef-lieu de la région SAVA."],
  ],
};

const S5 = {
  numero: 5, total: TOTAL,
  titre: "Les chefs-lieux (4) : les régions du Sud",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable de citer les six régions du Sud de Madagascar avec leurs chefs-lieux.",
  image: { id: "geo6_regions_sud", legende: "Les six régions du Sud et leurs chefs-lieux." },
  scene: { file: "scene_s05_sud.jpg", mode: "document", legende: "Document : les pirogues à voile de Toliara, chef-lieu de l'Atsimo-Andrefana, au bord du canal de Mozambique." },
  revisionOuverture: [
    ["Cite trois régions du Nord ou de l'Ouest avec leurs chefs-lieux.", "La DIANA (Antsiranana), le Boeny (Mahajanga) et le Menabe (Morondava)."],
    ["Quelle est la capitale de la vanille ?", "C'est Sambava, chef-lieu de la région SAVA."],
  ],
  miseEnSituation: {
    texte: "À l'école, Mme Randriamampionona déroule une grande carte de Madagascar. « Il nous reste le Sud à explorer, dit-elle. Qui connaît une ville du Grand Sud ? » Tantely, le nouveau, lève la main : « Moi, je viens de Toliara ! Là-bas, les pirogues à voire glissent sur l'eau au soleil couchant. » La maîtresse sourit : « Très bien, Tantely. Toliara est le chef-lieu d'une grande région : l'Atsimo-Andrefana. »",
    question: "Quelles sont les régions du Sud de Madagascar et leurs chefs-lieux ?",
    ra: "Le Sud compte six régions : Ihorombe (Ihosy), Vatovavy (Mananjary), Fitovinany (Manakara), Atsimo-Andrefana (Toliara), Androy (Ambovombe) et Anosy (Taolanaro).",
    support: "Carte des régions du Sud (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les chefs-lieux (4) : les régions du Sud ». Après cette séance, vous serez capables de citer les six régions du Sud avec leurs chefs-lieux.",
  observation: "Observez bien la carte des régions du Sud, et le document des pirogues à voile de Toliara.",
  supportObservation: "Carte des régions du Sud (page Leçon)",
  analyse: [
    ["De quelle ville vient Tantely ?", "Tantely vient de Toliara, chef-lieu de l'Atsimo-Andrefana."],
    ["Quel est le chef-lieu de l'Ihorombe ?", "Le chef-lieu de l'Ihorombe est Ihosy."],
    ["Quel est le chef-lieu du Vatovavy ?", "Le chef-lieu du Vatovavy est Mananjary."],
    ["Quel est le chef-lieu du Fitovinany ?", "Le chef-lieu du Fitovinany est Manakara."],
    ["Quel est le chef-lieu de l'Androy ?", "Le chef-lieu de l'Androy est Ambovombe."],
    ["Où se trouve Taolanaro ?", "Taolanaro, chef-lieu de l'Anosy, est tout au sud-est de Madagascar, au bord de la mer."],
  ],
  synthese: "Donc, le Sud de Madagascar compte six régions : l'Ihorombe (Ihosy), le Vatovavy (Mananjary), le Fitovinany (Manakara), l'Atsimo-Andrefana (Toliara), l'Androy (Ambovombe) et l'Anosy (Taolanaro).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quel est le chef-lieu de l'Atsimo-Andrefana ?",
        "2. Quel est le chef-lieu de l'Androy ?",
        "3. Quel est le chef-lieu de l'Anosy ?",
        "4. Combien de régions compte le Sud de Madagascar ?",
      ],
      corrige: [
        "1. Le chef-lieu de l'Atsimo-Andrefana est **Toliara**.",
        "2. Le chef-lieu de l'Androy est **Ambovombe**.",
        "3. Le chef-lieu de l'Anosy est **Taolanaro**.",
        "4. Le Sud compte **six** régions.",
      ],
    },
    {
      consigne: "Complète : écris le chef-lieu de chaque région.",
      items: [
        "1. Ihorombe : ………",
        "2. Vatovavy : ………",
        "3. Fitovinany : ………",
        "4. Anosy : ………",
      ],
      corrige: [
        "1. Ihorombe : **Ihosy**.",
        "2. Vatovavy : **Mananjary**.",
        "3. Fitovinany : **Manakara**.",
        "4. Anosy : **Taolanaro**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Relie chaque région à son chef-lieu.",
      items: [
        "Atsimo-Andrefana — — Ambovombe",
        "Androy — — Toliara",
        "Ihorombe — — Taolanaro",
        "Anosy — — Ihosy",
      ],
      corrige: [
        "Atsimo-Andrefana — **Toliara** ; Androy — **Ambovombe** ; Ihorombe — **Ihosy** ; Anosy — **Taolanaro**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Toliara est le chef-lieu de : A. l'Androy — B. l'Atsimo-Andrefana — C. l'Anosy",
        "2. Le chef-lieu du Fitovinany est : A. Manakara — B. Mananjary — C. Farafangana",
        "3. Ambovombe est le chef-lieu de : A. l'Ihorombe — B. l'Anosy — C. l'Androy",
        "4. Taolanaro se trouve : A. au nord-ouest — B. au sud-est — C. au centre",
        "5. Le Grand Sud est connu pour : A. ses neiges — B. ses épines et son soleil — C. ses grandes forêts humides",
      ],
      corrige: [
        "1. Réponse **B** : l'Atsimo-Andrefana.",
        "2. Réponse **A** : Manakara.",
        "3. Réponse **C** : l'Androy.",
        "4. Réponse **B** : au sud-est, au bord de la mer.",
        "5. Réponse **B** : le Grand Sud est le pays du soleil, des plantes épineuses et des zébus.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Six régions sous le soleil du Sud",
        paras: [
          "Le Grand Sud de Madagascar compte six régions : l'Ihorombe (Ihosy), le Vatovavy (Mananjary), le Fitovinany (Manakara), l'Atsimo-Andrefana (Toliara), l'Androy (Ambovombe) et l'Anosy (Taolanaro).",
          "C'est la partie la plus chaude et la plus sèche de l'île : le pays des plantes épineuses, des zébus et du soleil.",
        ],
        exemples: [
          "À Toliara, le ciel souvent dégagé et le littoral lumineux caractérisent le paysage côtier.",
          "L'Androy, autour d'Ambovombe, est le pays des tombes royales et des chantres de zébus.",
        ],
      },
      {
        titre: "2. Toliara, perle du Sud",
        paras: [
          "Toliara, chef-lieu de l'Atsimo-Andrefana, est le grand port du Sud, au bord du canal de Mozambique.",
          "Ses pirogues à voile, appelées les « boutres », glissent sur l'eau : on les reconnaît de loin à leurs voiles colorées.",
        ],
        exemples: [
          "La ville de Toliara est surnommée « la ville du soleil ».",
          "Près de Toliara s'étendent des dunes de sable blanc et des récifs de corail.",
        ],
      },
      {
        titre: "3. Taolanaro, au bout de l'île",
        paras: [
          "Taolanaro, chef-lieu de l'Anosy, se trouve à l'extrême sud-est de Madagascar, là où la côte sud tourne vers l'est.",
          "Autour d'elle poussent les Norfolk, ces grands arbres qui bordent la mer, et les forêts de la région abritent des plantes uniques au monde.",
        ],
        exemples: [
          "La Pointe du Sud, près de Taolanaro, marque la pointe la plus au sud de la grande île.",
          "Mananjary et Manakara, chefs-lieux du Vatovavy et du Fitovinany, sont deux ports actifs de la côte sud-est.",
        ],
      },
    ],
  },
  motsCles: ["Ihorombe", "Ihosy", "Vatovavy", "Fitovinany", "Atsimo-Andrefana", "Toliara", "Androy", "Anosy"],
  questionsRevision: [
    ["Cite trois régions du Sud avec leurs chefs-lieux.", "L'Atsimo-Andrefana (Toliara), l'Androy (Ambovombe) et l'Anosy (Taolanaro)."],
    ["Quelle ville est surnommée « la ville du soleil » ?", "C'est Toliara, chef-lieu de l'Atsimo-Andrefana."],
  ],
};

const S6 = {
  numero: 6, total: TOTAL,
  titre: "Les districts et les communes",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable d'expliquer ce qu'est un district et ce qu'est une commune, et de situer son district et sa commune.",
  image: { id: "geo6_districts_communes", legende: "Les districts et les communes d'une région : l'exemple de la Vakinankaratra." },
  scene: { file: "scene_s06_district.jpg", mode: "document", legende: "Document : devant les bureaux du district d'Antsirabe, on lit les affiches officielles ; le district découpe la région." },
  revisionOuverture: [
    ["Cite trois régions du Sud avec leurs chefs-lieux.", "L'Atsimo-Andrefana (Toliara), l'Androy (Ambovombe) et l'Anosy (Taolanaro)."],
    ["Qu'est-ce qu'un chef-lieu ?", "C'est la ville principale qui dirige une région."],
  ],
  miseEnSituation: {
    texte: "Maman Rasoa doit renouveler le permis de son stand du marché. « Viens avec moi, dit-elle à Hery. Nous allons aux bureaux du district. » Devant le grand bâtiment, une pancarte indique : « District d'Antsirabe ». Hery demande : « C'est quoi, un district ? — C'est un morceau de notre région, la Vakinankaratra, explique maman. Notre région est trop grande pour être dirigée d'un seul endroit : elle est découpée en districts, et notre district regroupe plusieurs communes. »",
    question: "Qu'est-ce qu'un district ? Qu'est-ce qu'une commune ?",
    ra: "Le district est un découpage de la région ; il regroupe plusieurs communes, urbaines ou rurales.",
    support: "Schéma des districts et des communes (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les districts et les communes ». Après cette séance, vous serez capables d'expliquer ce qu'est un district, ce qu'est une commune, et de nommer votre district et votre commune.",
  observation: "Observez bien le schéma qui montre les districts et les communes d'une région, et le document des bureaux du district d'Antsirabe.",
  supportObservation: "Schéma des districts et des communes (page Leçon)",
  analyse: [
    ["Où maman Rasoa va-t-elle renouveler son permis ?", "Aux bureaux du district d'Antsirabe."],
    ["Qu'est-ce qu'un district ?", "C'est un découpage de la région : il regroupe plusieurs communes."],
    ["Combien y a-t-il de communes dans un district ?", "Un district regroupe plusieurs communes : parfois cinq, parfois dix ou plus."],
    ["Quelles sont les deux sortes de communes ?", "Il y a des communes urbaines, autour des villes, et des communes rurales, autour des villages."],
    ["Quelle est la différence entre la commune urbaine et la commune rurale ?", "La commune urbaine concentre les quartiers d'une ville ; la commune rurale regroupe plusieurs villages."],
    ["Où se trouvent les services importants du district ?", "Ils se trouvent au chef-lieu du district, souvent la plus grande ville du secteur."],
  ],
  synthese: "Donc, la région est découpée en districts, et chaque district regroupe plusieurs communes. La commune urbaine rassemble les quartiers d'une ville ; la commune rurale regroupe des villages. Notre district à nous est le district d'Antsirabe, dans la région Vakinankaratra.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un district ?",
        "2. Que regroupe un district ?",
        "3. Quelles sont les deux sortes de communes ?",
        "4. Comment s'appelle ton district ?",
      ],
      corrige: [
        "1. Le district est un **découpage de la région**.",
        "2. Un district regroupe plusieurs **communes**.",
        "3. Les communes **urbaines** et les communes **rurales**.",
        "4. Réponse personnelle : par exemple, le district d'Antsirabe.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le district est plus grand que la région.",
        "2. Un district regroupe plusieurs communes.",
        "3. La commune rurale regroupe des villages.",
        "4. La commune urbaine est découpée en quartiers.",
      ],
      corrige: [
        "1. **Faux** : le district est un morceau de la région, il est plus petit.",
        "2. **Vrai** : le district regroupe plusieurs communes.",
        "3. **Vrai** : la commune rurale regroupe des villages.",
        "4. **Vrai** : la commune urbaine est découpée en quartiers.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : région — district — communes — villages.",
      items: [
        "Le ……… est découpé en districts.",
        "Chaque district regroupe plusieurs ……… .",
        "La commune rurale regroupe des ……… .",
        "Le plus grand découpage est la ……… .",
      ],
      corrige: [
        "La **région** est découpée en districts / plusieurs **communes** / des **villages** / la **région**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le district est : A. plus grand que la région — B. un découpage de la région — C. un quartier",
        "2. Les communes sont regroupées dans : A. un district — B. un fokontany — C. un secteur",
        "3. La commune rurale regroupe : A. des quartiers — B. des villages — C. des immeubles",
        "4. Les services du district se trouvent souvent : A. au chef-lieu du district — B. dans chaque village — C. à l'étranger",
        "5. Maman Rasoa renouvelle son permis : A. au marché — B. aux bureaux du district — C. à l'école",
      ],
      corrige: [
        "1. Réponse **B** : un découpage de la région.",
        "2. Réponse **A** : un district.",
        "3. Réponse **B** : des villages.",
        "4. Réponse **A** : au chef-lieu du district.",
        "5. Réponse **B** : aux bureaux du district.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le district, un morceau de la région",
        paras: [
          "Une région est trop grande pour être dirigée d'un seul endroit : on la découpe donc en districts.",
          "Madagascar compte plus d'une centaine de districts. Chaque district a son chef-lieu, où se trouvent ses bureaux et ses services.",
        ],
        exemples: [
          "La région Vakinankaratra est découpée en plusieurs districts, dont celui d'Antsirabe.",
          "C'est au district que maman Rasoa renouvelle le permis de son stand du marché.",
        ],
      },
      {
        titre: "2. La commune, la collectivité de proximité",
        paras: [
          "Chaque district regroupe plusieurs communes. La commune s'occupe de la vie de tous les jours : les écoles, les marchés, les fonts, les routes locales.",
          "Il y a deux sortes de communes : la commune urbaine, qui rassemble les quartiers d'une ville, et la commune rurale, qui regroupe plusieurs villages.",
        ],
        exemples: [
          "La commune urbaine d'Antsirabe est découpée en quartiers.",
          "Aux alentours, des communes rurales regroupent les villages des rizières et des collines.",
        ],
      },
      {
        titre: "3. Mon district, ma commune",
        paras: [
          "Chaque habitant habite dans une commune, et cette commune fait partie d'un district, qui fait partie d'une région.",
          "Connaître son district et sa commune, c'est savoir où trouver les services : l'école, le centre de santé, les bureaux où l'on fait les papiers.",
        ],
        exemples: [
          "Une adresse administrative précise successivement la commune, le district et la région.",
          "Le district accueille plusieurs services administratifs importants.",
        ],
      },
    ],
  },
  motsCles: ["district", "commune", "commune urbaine", "commune rurale", "chef-lieu de district"],
  questionsRevision: [
    ["Qu'est-ce qu'un district ?", "C'est un découpage de la région qui regroupe plusieurs communes."],
    ["Quelle est la différence entre commune urbaine et commune rurale ?", "La commune urbaine rassemble les quartiers d'une ville ; la commune rurale regroupe des villages."],
  ],
};

const S7 = {
  numero: 7, total: TOTAL,
  titre: "Les fokontany, les quartiers et les secteurs",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable d'expliquer ce qu'est un fokontany et de situer son quartier ou son village, avec ses secteurs.",
  image: { id: "geo6_fokontany", legende: "Le fokontany : le village à la campagne, le quartier en ville, et ses secteurs." },
  scene: { file: "scene_s07_fokontany.jpg", mode: "document", legende: "Document : la réunion du fokontany sous le grand arbre : le chef de fokontany note les nouvelles familles du quartier." },
  revisionOuverture: [
    ["Qu'est-ce qu'un district ?", "C'est un découpage de la région qui regroupe plusieurs communes."],
    ["Quelle est la différence entre commune urbaine et commune rurale ?", "La commune urbaine rassemble les quartiers d'une ville ; la commune rurale regroupe des villages."],
  ],
  miseEnSituation: {
    texte: "Samedi soir, un homme frappe à la porte : c'est le chef de fokontany du quartier Mahazoarivo. « Bonsoir ! Je fais le tour des familles : une nouvelle famille est arrivée dans notre quartier, je dois la noter sur mon registre. » Après son départ, Miora demande : « C'est quoi, un fokontany ? — C'est notre quartier, répond papa. Mahazoarivo est un fokontany de la commune d'Antsirabe : c'est le plus petit découpage de tous. »",
    question: "Qu'est-ce qu'un fokontany ? À quoi sert-il ?",
    ra: "Le fokontany est le plus petit découpage : le village à la campagne, le quartier en ville. Il sert à connaître et à organiser la vie des habitants de très près.",
    support: "Schéma du fokontany, du quartier et du secteur (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les fokontany, les quartiers et les secteurs ». Après cette séance, vous serez capables d'expliquer ce qu'est un fokontany, qui est le chef de fokontany, et ce qu'est un secteur.",
  observation: "Observez bien le schéma qui montre le fokontany en milieu rural et en milieu urbain, et le document de la réunion sous le grand arbre.",
  supportObservation: "Schéma du fokontany et réunion du quartier (page Leçon)",
  analyse: [
    ["Qui est venu frapper à la porte de la famille ?", "Le chef du fokontany Mahazoarivo, leur quartier."],
    ["Qu'est-ce qu'un fokontany ?", "C'est le plus petit découpage : le village à la campagne, le quartier en ville."],
    ["Que fait le chef de fokontany ?", "Il note les familles, les naissances et les événements du quartier, et il fait le lien entre les habitants et la commune."],
    ["Pourquoi le chef de fokontany fait-il le tour des familles ?", "Pour tenir son registre à jour : il doit connaître toutes les familles de son fokontany."],
    ["Qu'est-ce qu'un secteur ?", "C'est une part d'un très grand quartier : un fokontany trop grand peut être partagé en secteurs."],
    ["À quoi sert le fokontany pour les habitants ?", "C'est à ce niveau qu'on connaît le mieux les habitants : c'est le premier lien entre la famille et les services."],
  ],
  synthese: "Donc, le fokontany est le plus petit découpage de Madagascar : le village à la campagne, le quartier en ville. Le chef de fokontany connaît toutes les familles et note les événements du quartier. Un très grand quartier peut être partagé en secteurs.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'un fokontany ?",
        "2. Que fait le chef de fokontany ?",
        "3. Qu'est-ce qu'un secteur ?",
        "4. Comment s'appelle ton fokontany ?",
      ],
      corrige: [
        "1. Le fokontany est le **plus petit découpage** : le village à la campagne, le quartier en ville.",
        "2. Il **note les familles et les événements** du quartier et fait le lien avec la commune.",
        "3. Un secteur est **une part d'un très grand quartier**.",
        "4. Réponse personnelle : par exemple, Mahazoarivo.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le fokontany est plus grand que la commune.",
        "2. À la campagne, le fokontany correspond souvent à un village.",
        "3. Le chef de fokontany note les naissances du quartier.",
        "4. Un très grand quartier peut être partagé en secteurs.",
      ],
      corrige: [
        "1. **Faux** : le fokontany est le plus petit découpage, il fait partie de la commune.",
        "2. **Vrai** : à la campagne, le village est un fokontany.",
        "3. **Vrai** : c'est son rôle, avec l'aide de la commune.",
        "4. **Vrai** : c'est le rôle des secteurs.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : fokontany — quartier — village — secteurs.",
      items: [
        "Le plus petit découpage de Madagascar est le ……… .",
        "En ville, le fokontany correspond à un ……… .",
        "À la campagne, le fokontany correspond souvent à un ……… .",
        "Un très grand quartier peut être partagé en ……… .",
      ],
      corrige: [
        "le **fokontany** / un **quartier** / un **village** / en **secteurs**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le fokontany est : A. plus grand que la région — B. le plus petit découpage — C. un pays",
        "2. Le chef de fokontany : A. connaît toutes les familles — B. dirige le pays — C. garde la forêt",
        "3. En milieu urbain, le fokontany est : A. un village — B. un quartier — C. une région",
        "4. Le secteur est : A. une part de quartier — B. un district — C. une commune",
        "5. Le registre du fokontany note : A. les familles et leurs événements — B. les notes de l'école — C. les prix du marché",
      ],
      corrige: [
        "1. Réponse **B** : le plus petit découpage.",
        "2. Réponse **A** : connaît toutes les familles de son quartier.",
        "3. Réponse **B** : un quartier.",
        "4. Réponse **A** : une part d'un très grand quartier.",
        "5. Réponse **A** : les familles et leurs événements.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Le fokontany, le plus petit découpage",
        paras: [
          "La commune est partagée en fokontany : c'est le plus petit découpage de Madagascar.",
          "À la campagne, chaque village est souvent un fokontany ; en ville, chaque quartier est un fokontany. Madagascar compte des milliers de fokontany.",
        ],
        exemples: [
          "Le quartier Mahazoarivo, où habite la famille de Hery, est un fokontany d'Antsirabe.",
          "Dans le village de grand-père Maitso, tout le monde se connaît : c'est un seul fokontany.",
        ],
      },
      {
        titre: "2. Le chef de fokontany",
        paras: [
          "À la tête de chaque fokontany, il y a un chef de fokontany. Il est choisi parmi les habitants du quartier ou du village.",
          "Il tient le registre : il note les familles, les naissances, les décès et les arrivées. C'est lui qui fait le lien entre les habitants et la commune.",
        ],
        exemples: [
          "Le chef de fokontany de Mahazoarivo fait le tour des familles pour tenir son registre à jour.",
          "Quand une nouvelle famille arrive, elle va se faire connaître auprès du chef de fokontany.",
        ],
      },
      {
        titre: "3. Les quartiers et les secteurs",
        paras: [
          "En ville, un quartier très peuplé peut être trop grand pour un seul fokontany : on le partage alors en plusieurs fokontany ou en secteurs.",
          "Le secteur est donc une part d'un très grand quartier. Chaque secteur garde son responsable, qui travaille avec le chef de fokontany.",
        ],
        exemples: [
          "Dans les grands quartiers d'Antananarivo, les secteurs s'appellent par des numéros : secteur un, secteur deux…",
          "Grâce aux secteurs, même un quartier immense reste bien organisé.",
        ],
      },
    ],
  },
  motsCles: ["fokontany", "chef de fokontany", "quartier", "secteur", "registre"],
  questionsRevision: [
    ["Qu'est-ce qu'un fokontany ?", "C'est le plus petit découpage de Madagascar : le village à la campagne, le quartier en ville."],
    ["Quel est le rôle du chef de fokontany ?", "Il note les familles et les événements du quartier et fait le lien avec la commune."],
  ],
};

const S8 = {
  numero: 8, total: TOTAL,
  titre: "Situer sa région : délimitation et superficie",
  theme: "Les régions administratives de Madagascar",
  objectif: "Être capable de situer sa région sur la carte, de parler de sa délimitation et de sa superficie, et de remplir sa fiche d'identité.",
  image: { id: "geo6_ma_region", legende: "Situer sa région : la délimitation à tracer et la fiche d'identité à remplir." },
  scene: { file: "scene_s08_ma_region.jpg", mode: "document", legende: "Document : Hery et Miora tracent la carte de leur région, la Vakinankaratra, sur une grande feuille quadrillée." },
  revisionOuverture: [
    ["Qu'est-ce qu'un fokontany ?", "C'est le plus petit découpage de Madagascar : le village à la campagne, le quartier en ville."],
    ["Quel est le rôle du chef de fokontany ?", "Il note les familles et les événements du quartier et fait le lien avec la commune."],
  ],
  miseEnSituation: {
    texte: "Mme Randriamampionona distribue une grande feuille quadrillée à chaque élève. « Trace le contour de Madagascar, puis entoure ta région, écrit son nom, son chef-lieu, et note tout ce que tu sais sur elle. » Miora sourit : la Vakinankaratra est facile à trouver, au centre de l'île, juste au sud d'Antananarivo. « Et sa superficie ? demande la maîtresse. Est-elle grande, petite, plus grande que l'Itasy ? »",
    question: "Comment situer sa région et parler de sa délimitation et de sa superficie ?",
    ra: "On situe sa région sur la carte par ses voisins ; sa délimitation est sa frontière ; sa superficie est la mesure de son étendue en kilomètres carrés.",
    support: "Carte « situer sa région » et fiche d'identité (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Situer sa région : délimitation et superficie ». Après cette séance, vous serez capables de situer votre région, de tracer sa délimitation et de donner sa fiche d'identité complète.",
  observation: "Observez bien la carte où il faut situer sa région, la fiche d'identité à remplir, et le document des élèves qui tracent leur carte.",
  supportObservation: "Carte de Madagascar et fiche d'identité de la région (page Leçon)",
  analyse: [
    ["Comment situer la Vakinankaratra sur la carte ?", "Elle se trouve au centre de l'île, juste au sud de la région Analamanga."],
    ["Qu'est-ce que la délimitation d'une région ?", "C'est sa frontière : la ligne qui sépare la région des régions voisines."],
    ["Qu'est-ce que la superficie ?", "C'est la mesure de l'étendue d'un territoire, en kilomètres carrés."],
    ["Quelle est la superficie de Madagascar ?", "Madagascar mesure environ 587 000 kilomètres carrés."],
    ["Les 24 régions ont-elles toutes la même superficie ?", "Non : certaines sont très vastes, comme l'Atsimo-Andrefana ; d'autres sont petites, comme l'Itasy."],
    ["Que peut-on écrire dans la fiche d'identité de sa région ?", "Son nom, son chef-lieu, ses régions voisines, sa superficie, son district et sa commune."],
  ],
  synthese: "Donc, on situe sa région grâce à ses voisins sur la carte. Sa délimitation est la ligne qui la sépare des autres régions. Sa superficie mesure son étendue en kilomètres carrés : Madagascar en compte environ 587 000, partagés entre 24 régions de tailles différentes.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que la délimitation d'une région ?",
        "2. Qu'est-ce que la superficie ?",
        "3. Quelle est la superficie de Madagascar ?",
        "4. Cite une région très vaste et une région petite.",
      ],
      corrige: [
        "1. La délimitation est **la frontière** qui sépare la région des régions voisines.",
        "2. La superficie est **la mesure de l'étendue** d'un territoire, en kilomètres carrés.",
        "3. Madagascar mesure environ **587 000 kilomètres carrés**.",
        "4. L'**Atsimo-Andrefana** est très vaste ; l'**Itasy** est petite.",
      ],
    },
    {
      consigne: "Remplis la fiche d'identité de ta région (réponses personnelles).",
      items: [
        "1. Le nom de ma région : ………",
        "2. Son chef-lieu : ………",
        "3. Une région voisine : ………",
        "4. Mon district et ma commune : ………",
      ],
      corrige: [
        "1. Exemple : la **Vakinankaratra**.",
        "2. Exemple : **Antsirabe**.",
        "3. Exemple : l'**Analamanga**.",
        "4. Exemple : le district et la commune **d'Antsirabe**.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : délimitation — superficie — voisines — kilomètres carrés.",
      items: [
        "La frontière d'une région s'appelle sa ……… .",
        "La mesure de l'étendue d'un territoire est sa ……… .",
        "On mesure la superficie en ……… .",
        "Pour situer ma région, je regarde les régions ……… sur la carte.",
      ],
      corrige: [
        "sa **délimitation** / sa **superficie** / en **kilomètres carrés** / les régions **voisines**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La superficie de Madagascar est d'environ : A. 587 000 km² — B. 58 000 km² — C. 5 870 000 km²",
        "2. La délimitation d'une région est : A. son nom — B. sa frontière — C. son chef-lieu",
        "3. La région la plus vaste de Madagascar est : A. l'Itasy — B. l'Atsimo-Andrefana — C. l'Ambatosoa",
        "4. Pour situer ma région, je regarde : A. ses voisines — B. la mer — C. le soleil",
        "5. La fiche d'identité d'une région contient : A. son nom et son chef-lieu — B. seulement son nom — C. les notes de l'école",
      ],
      corrige: [
        "1. Réponse **A** : environ 587 000 kilomètres carrés.",
        "2. Réponse **B** : sa frontière.",
        "3. Réponse **B** : l'Atsimo-Andrefana, dans le Sud-Ouest.",
        "4. Réponse **A** : ses régions voisines.",
        "5. Réponse **A** : son nom, son chef-lieu, et d'autres renseignements.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La délimitation : la frontière de la région",
        paras: [
          "Sur une carte, chaque région est entourée d'une ligne : c'est sa délimitation, sa frontière.",
          "La délimitation sépare la région de ses voisines. Sur le terrain, elle suit parfois une rivière, une montagne ou une route.",
        ],
        exemples: [
          "La Vakinankaratra est délimitée au nord par l'Analamanga, dont la frontière passe entre Antananarivo et Antsirabe.",
          "Tracer la délimitation des 24 régions sur une carte, c'est un bon exercice de géographe !",
        ],
      },
      {
        titre: "2. La superficie : l'étendue de la région",
        paras: [
          "La superficie mesure l'étendue d'un territoire. On l'exprime en kilomètres carrés, notés km².",
          "Madagascar mesure environ 587 000 km². Cette grande île est partagée entre 24 régions de tailles très différentes.",
        ],
        exemples: [
          "L'Atsimo-Andrefana, dans le Sud-Ouest, est la région la plus vaste.",
          "L'Itasy, autour de Miarinarivo, est l'une des plus petites.",
        ],
      },
      {
        titre: "3. La fiche d'identité de ma région",
        paras: [
          "Pour bien situer sa région, on remplit sa fiche d'identité : son nom, son chef-lieu, ses régions voisines, sa superficie.",
          "On ajoute son district, sa commune et son fokontany : ainsi, chacun sait exactement où il habite dans le grand découpage de Madagascar.",
        ],
        exemples: [
          "Une fiche territoriale indique la région, le chef-lieu, le district, la commune et le fokontany.",
          "Miora dessine la frontière de la région au feutre rouge sur sa carte.",
        ],
      },
    ],
  },
  motsCles: ["délimitation", "frontière", "superficie", "kilomètres carrés", "fiche d'identité"],
  questionsRevision: [
    ["Qu'est-ce que la délimitation d'une région ?", "C'est sa frontière : la ligne qui la sépare des régions voisines."],
    ["Quelle est la superficie de Madagascar ?", "Environ 587 000 kilomètres carrés."],
  ],
};

module.exports = { topics: [S1, S2, S3, S4, S5, S6, S7, S8] };
