// data-unite5.js — UNITÉ 5 : LES GRANDES ZONES ÉCONOMIQUES ET LES ACTIVITÉS ÉCONOMIQUES (Séances 51 à 57)
// Contenu rédactionnel conforme au Programme d'études officiel T6 — Géographie (p. 177-181)
const TOTAL = 78;

const S51 = {
  numero: 51, total: TOTAL,
  titre: "Les grandes zones économiques de Madagascar",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les sept grandes zones économiques de Madagascar et de donner un exemple d'activité pour chacune.",
  image: { id: "geo6_zones_economiques", legende: "Les sept grandes zones économiques de Madagascar." },
  scene: { file: "scene_s51_zones.jpg", mode: "document", legende: "Document : à l'arrêt du taxi-brousse, papa montre aux jumeaux les richesses qui voyagent : sacs de riz, poissons, planches, gemmes, paniers, tissus et valises de visiteurs." },
  revisionOuverture: [
    ["Cite les quatre solutions face à l'exode rural.", "Renforcer la sécurité, créer des emplois, installer des infrastructures, implanter des villes nouvelles."],
    ["Quel est le but final de ces solutions ?", "L'équilibre entre la ville et la campagne : choisir librement où vivre."],
  ],
  miseEnSituation: {
    texte: "À l'arrêt du taxi-brousse, avant le départ, papa fait le tour du véhicule avec Hery et Miora. « Regardez ce qui voyage avec nous : des sacs de riz de Marovoay, des caisses de poissons de la côte, des planches de la forêt, des pierres du Sud, des paniers de raphia, des ballots de tissus de l'usine… et trois visiteurs étrangers qui vont voir les lémuriens ! Chaque richesse vient d'une zone économique différente. Notre pays en compte sept. »",
    question: "Quelles sont les grandes zones où les Malgaches produisent leurs richesses ?",
    ra: "Sept grandes zones économiques : la zone agricole, la zone de pêche, la zone forestière, la zone minière, la zone artisanale, la zone industrielle et la zone touristique.",
    support: "Carte des zones économiques (page Leçon)",
  },
  presentation: "Aujourd'hui, nous commençons l'unité 5 : les grandes zones économiques et les activités économiques. Nous allons apprendre : « Les grandes zones économiques de Madagascar ». Après cette séance, vous serez capables de citer les sept zones et un exemple d'activité pour chacune.",
  observation: "Observez bien la carte des zones économiques : chaque couleur marque une zone où domine une activité.",
  supportObservation: "Carte des zones économiques (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une zone économique ?", "C'est une région où domine une grande activité qui fait vivre ses habitants."],
    ["Que produit la zone agricole ?", "Le riz, le maïs, le manioc, le café, la vanille… tout ce que la terre donne."],
    ["Et la zone de pêche ?", "Les poissons, les crevettes, les langoustes de la mer et des rivières."],
    ["Que donne la zone forestière ?", "Le bois de chauffe et le bois d'œuvre des forêts."],
    ["Que extrait la zone minière ?", "Le nickel, la chromite, l'ilménite, les saphirs et les autres minerais."],
    ["Cite les trois dernières zones.", "La zone artisanale (paniers, sculptures), la zone industrielle (usines) et la zone touristique (visiteurs, hôtels)."],
  ],
  synthese: "Donc, Madagascar compte sept grandes zones économiques : agricole, de pêche, forestière, minière, artisanale, industrielle et touristique. Chaque zone vit de l'activité qui y domine.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une zone économique ?",
        "2. Cite les sept grandes zones économiques de Madagascar.",
        "3. Donne un produit de la zone agricole.",
        "4. Donne une activité de la zone touristique.",
      ],
      corrige: [
        "1. C'est **une région où domine une grande activité** qui fait vivre ses habitants.",
        "2. Les zones **agricole, de pêche, forestière, minière, artisanale, industrielle et touristique**.",
        "3. Par exemple : **le riz** (aussi le maïs, le manioc, la vanille, le café).",
        "4. Par exemple : **les visites des parcs à lémuriens** (aussi les hôtels, les plages, les guides).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La pêche fait partie des zones économiques de Madagascar.",
        "2. L'artisanat n'est pas une activité économique.",
        "3. Les usines appartiennent à la zone industrielle.",
        "4. Les visiteurs étrangers font vivre la zone touristique.",
      ],
      corrige: [
        "1. **Vrai** : la zone de pêche est la deuxième zone.",
        "2. **Faux** : paniers, sculptures et tissus sont des richesses vendues.",
        "3. **Vrai** : la zone industrielle regroupe les usines.",
        "4. **Vrai** : ils apportent des devises au pays.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : agricole — minière — touristique — industrielle.",
      items: [
        "La zone ……… produit le riz et la vanille.",
        "La zone ……… extrait le nickel et les saphirs.",
        "Les usines textiles forment la zone ……… .",
        "La zone ……… accueille les visiteurs des plages et des parcs.",
      ],
      corrige: [
        "zone **agricole** / zone **minière** / zone **industrielle** / zone **touristique**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Madagascar compte : A. 3 zones économiques — B. 7 zones économiques — C. 24 zones économiques",
        "2. Les crevettes viennent de la zone : A. de pêche — B. forestière — C. artisanale",
        "3. Le bois d'œuvre vient de la zone : A. industrielle — B. forestière — C. touristique",
        "4. Les paniers de raphia viennent de la zone : A. artisanale — B. minière — C. agricole",
        "5. Une zone économique est une région où domine : A. une activité — B. une montagne — C. un fleuve",
      ],
      corrige: [
        "1. Réponse **B** : sept grandes zones.",
        "2. Réponse **A** : la mer et les rivières.",
        "3. Réponse **B** : les forêts.",
        "4. Réponse **A** : le travail des mains.",
        "5. Réponse **A** : une grande activité qui fait vivre la région.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des régions, des richesses",
        paras: [
          "Une zone économique est une région où domine une grande activité : celle qui occupe la plupart des habitants et rapporte le plus.",
          "À Madagascar, la nature varie d'une région à l'autre — plaines rizicoles, mers poissonneuses, forêts, sous-sol riche, villes actives. Chaque région a donc développé sa propre richesse.",
        ],
        exemples: [
          "Les sacs de riz de Marovoay prennent le taxi-brousse vers les villes.",
          "Les caisses de poissons partent glacées vers les marchés de l'intérieur.",
        ],
      },
      {
        titre: "2. Les sept zones en un tour",
        paras: [
          "La zone agricole nourrit le pays : riz, maïs, manioc, café, vanille, girofle. La zone de pêche remplit les marchés de poissons, de crevettes et de langoustes.",
          "La zone forestière fournit le bois de chauffe et le bois d'œuvre. La zone minière extrait nickel, chromite, ilménite et pierres précieuses. La zone artisanale produit paniers, sculptures et tissus faits main. La zone industrielle regroupe les usines. Enfin, la zone touristique accueille les visiteurs venus des quatre coins du monde.",
        ],
        exemples: [
          "À l'arrêt du taxi-brousse, on voit les produits des sept zones alignés.",
          "Les visiteurs étrangers montent dans la voiture pour aller voir les lémuriens.",
        ],
      },
      {
        titre: "3. Des zones qui se complètent",
        paras: [
          "Ces sept zones ne se remplacent pas : elles se complètent. Les unes nourrissent, les autres habillent, construisent ou font entrer de l'argent au pays.",
          "La séance suivante localisera chaque zone sur la carte et cherchera pourquoi une activité domine ici plutôt qu'ailleurs.",
        ],
        exemples: [
          "Le riz de la zone agricole nourrit les ouvriers de la zone industrielle.",
          "La zone touristique fait connaître les beautés des autres zones.",
        ],
      },
    ],
  },
  motsCles: ["zone économique", "activité", "production", "richesse", "sept zones"],
  questionsRevision: [
    ["Cite les sept grandes zones économiques de Madagascar.", "Agricole, de pêche, forestière, minière, artisanale, industrielle et touristique."],
    ["Donne un produit de la zone minière.", "Le nickel (aussi la chromite, l'ilménite, les saphirs)."],
  ],
};

const S52 = {
  numero: 52, total: TOTAL,
  titre: "Localiser les zones économiques sur la carte",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de localiser les zones économiques sur la carte de Madagascar et d'expliquer pourquoi une activité domine dans une région.",
  image: { id: "geo6_localisation_zones", legende: "Chaque région vit de la richesse que sa nature lui offre." },
  scene: { file: "scene_s52_carte_zones.jpg", mode: "document", legende: "Document : devant la grande carte murale, Mme Randriamampionona fait placer aux élèves les symboles des sept zones économiques." },
  revisionOuverture: [
    ["Cite les sept grandes zones économiques de Madagascar.", "Agricole, de pêche, forestière, minière, artisanale, industrielle et touristique."],
    ["Donne un produit de la zone minière.", "Le nickel (aussi la chromite, l'ilménite, les saphirs)."],
  ],
  miseEnSituation: {
    texte: "Classe de Mme Randriamampionona. Sur la grande carte murale, chaque élève à son tour place un symbole : un épi de riz sur les Hautes Terres, un poisson sur les côtes, un arbre sur l'est, un pic de mine à l'est et dans le Sud, un panier sur les Hautes Terres, une roue d'usine sur les grandes villes, un parasol sur Nosy Be. « Pourquoi le riz ici et le parasol là-bas ? demande la maîtresse. — Parce que la nature et les hommes ne sont pas les mêmes partout ! » répond Hery.",
    question: "Pourquoi une activité domine-t-elle dans une région plutôt qu'ailleurs ?",
    ra: "Parce que chaque région offre des conditions différentes : climat, sols, mer, forêts, sous-sol, villes. L'activité qui domine est celle que la région permet le mieux.",
    support: "Carte de localisation des zones (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Localiser les zones économiques sur la carte ». Après cette séance, vous serez capables de placer les sept zones sur la carte et d'expliquer leur emplacement.",
  observation: "Observez bien la carte : chaque symbole marque la zone où une activité domine ; cherchez ce qui explique sa place.",
  supportObservation: "Carte de localisation des zones (page Leçon)",
  analyse: [
    ["Où domine la zone agricole ?", "Sur les Hautes Terres (riz), dans le Nord-Ouest (Marovoay) et autour du lac Alaotra."],
    ["Pourquoi le riz y pousse-t-il bien ?", "Parce que la pluie y tombe assez et que les vallées offrent des plaines inondables."],
    ["Où se trouve la zone de pêche ?", "Sur toutes les côtes, surtout à l'ouest (crevettes) et au sud-ouest (langoustes)."],
    ["Pourquoi la forêt domine-t-elle à l'est ?", "Parce que la pluie y tombe presque toute l'année : la forêt tropicale y pousse épaisse."],
    ["Pourquoi les usines sont-elles dans les grandes villes ?", "Parce qu'elles y trouvent les ouvriers, les routes, les ports et l'électricité."],
    ["Pourquoi le tourisme domine-t-il à Nosy Be ?", "Parce que l'île offre plages, soleil et mer chaude que les visiteurs recherchent."],
  ],
  synthese: "Donc, chaque zone occupe la région que la nature et les hommes lui offrent : l'agriculture dans les plaines arrosées, la pêche sur les côtes, la forêt à l'est, les mines là où le sous-sol est riche, les usines et l'artisanat dans les villes, le tourisme sur les plages et dans les parcs.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Où domine la zone forestière ? Pourquoi ?",
        "2. Pourquoi la pêche domine-t-elle sur les côtes ?",
        "3. Pourquoi les usines s'installent-elles dans les grandes villes ?",
        "4. Pourquoi les visiteurs vont-ils à Nosy Be ?",
      ],
      corrige: [
        "1. **À l'est**, où **la pluie tombe presque toute l'année**.",
        "2. Parce que **la mer est là**, pleine de poissons, de crevettes et de langoustes.",
        "3. Parce qu'elles y trouvent **les ouvriers, les transports et l'électricité**.",
        "4. Parce que l'île offre **plages, soleil et mer chaude**.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le riz domine dans les plaines arrosées des Hautes Terres.",
        "2. Les mines s'installent n'importe où, sans regarder le sous-sol.",
        "3. La forêt tropicale couvre surtout la côte est.",
        "4. Les plages attirent les visiteurs.",
      ],
      corrige: [
        "1. **Vrai** : pluie et vallées inondables.",
        "2. **Faux** : elles suivent les gisements du sous-sol.",
        "3. **Vrai** : la pluie de l'est la fait pousser.",
        "4. **Vrai** : c'est la zone touristique balnéaire.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : côtes — villes — est — plages.",
      items: [
        "La zone de pêche domine sur les ……… .",
        "La forêt tropicale dense couvre surtout la côte ……… .",
        "Les usines s'installent dans les grandes ……… .",
        "Les visiteurs recherchent les ……… de Nosy Be.",
      ],
      corrige: [
        "les **côtes** / la côte **est** / les grandes **villes** / les **plages**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le riz domine : A. dans le désert — B. dans les plaines arrosées — C. sur les sommets",
        "2. La forêt dense pousse à l'est grâce : A. à la pluie fréquente — B. au froid — C. au sable",
        "3. Les usines s'installent près : A. des ports et des villes — B. des lémuriens — C. des volcans",
        "4. Nosy Be est une île : A. industrielle — B. touristique — C. minière",
        "5. Une activité domine une région quand : A. la région s'y prête — B. le hasard le veut — C. personne ne travaille",
      ],
      corrige: [
        "1. Réponse **B** : pluie et vallées.",
        "2. Réponse **A** : il y pleut presque toute l'année.",
        "3. Réponse **A** : ouvriers, routes, électricité.",
        "4. Réponse **B** : plages et soleil.",
        "5. Réponse **A** : climat, sols, mer ou sous-sol s'y prêtent.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Lire la carte des zones",
        paras: [
          "Sur la carte des zones économiques, chaque symbole a sa place : l'épi de riz sur les plaines, le poisson sur les côtes, l'arbre à l'est, le pic de mine sur les gisements, le panier et la roue sur les villes, le parasol sur les plages.",
          "Lire cette carte, c'est répondre à deux questions : où ? et pourquoi là ?",
        ],
        exemples: [
          "Les élèves de Mme Randriamampionona placent les symboles un à un.",
          "L'épi de riz trouve sa place sur les Hautes Terres, pas dans le Grand Sud.",
        ],
      },
      {
        titre: "2. La nature décide d'abord",
        paras: [
          "Le climat et le sol commandent l'agriculture : le riz veut de l'eau, la vanille et le girofle veulent la chaleur humide du nord-est, le manioc supporte la sécheresse du Sud.",
          "La mer commande la pêche, la forêt suit la pluie de l'est, les mines suivent les gisements du sous-sol : nickel à l'est, chromite au nord-ouest, ilménite au sud-est, saphirs dans le Sud.",
        ],
        exemples: [
          "La côte est, arrosée presque toute l'année, porte la grande forêt.",
          "Les crevettes abondent sur les côtes ouest, aux eaux chaudes et calmes.",
        ],
      },
      {
        titre: "3. Les hommes décident aussi",
        paras: [
          "Les hommes ajoutent leur part : les usines s'installent dans les grandes villes, où tout arrive — ouvriers, ports, électricité. L'artisanat prospère près des matières premières et des marchés.",
          "Le tourisme choisit les beautés : plages de Nosy Be, collines royales, parcs à lémuriens. Zone après zone, la carte raconte le travail de tout un peuple.",
        ],
        exemples: [
          "Les zones franches de textile entourent Antananarivo.",
          "Les sculpteurs s'installent près des forêts et des grandes routes touristiques.",
        ],
      },
    ],
  },
  motsCles: ["localiser", "carte", "symbole", "légende", "conditions naturelles"],
  questionsRevision: [
    ["Pourquoi une activité domine-t-elle dans une région ?", "Parce que la nature (climat, sols, mer, sous-sol) et les hommes (villes, routes) s'y prêtent."],
    ["Où domine la zone touristique balnéaire ?", "Sur les côtes et les îles au soleil, comme Nosy Be."],
  ],
};

const S53 = {
  numero: 53, total: TOTAL,
  titre: "Les cultures vivrières et les cultures commerciales",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de distinguer les cultures vivrières des cultures commerciales et de citer les principales cultures de Madagascar.",
  image: { id: "geo6_cultures", legende: "Cultures vivrières : pour manger. Cultures commerciales : pour vendre." },
  scene: { file: "scene_s53_cultures.jpg", mode: "document", legende: "Document : dans la rizière familiale, la récolte du riz rassemble tous les cousins ; les sacs partiront au marché." },
  revisionOuverture: [
    ["Pourquoi une activité domine-t-elle dans une région ?", "Parce que la nature (climat, sols, mer, sous-sol) et les hommes (villes, routes) s'y prêtent."],
    ["Où domine la zone touristique balnéaire ?", "Sur les côtes et les îles au soleil, comme Nosy Be."],
  ],
  miseEnSituation: {
    texte: "Récolte du riz dans la rizière familiale. Les faucilles chantent, les gerbes s'entassent, les cousins battent le paddy. « Ce riz, explique maman Rasoa, nourrira la famille toute l'année : c'est une culture vivrière. » Dans le coin du champ, quelques rangs de girofle séchent au soleil. « Le girofle, lui, ne se mange pas chez nous : il part au marché, puis vers les pays lointains. C'est une culture commerciale : on la cultive pour la vendre. »",
    question: "Quelle est la différence entre une culture vivrière et une culture commerciale ?",
    ra: "La culture vivrière nourrit la famille qui la cultive (riz, maïs, manioc) ; la culture commerciale est cultivée pour être vendue, au marché ou à l'étranger (girofle, vanille, café).",
    support: "Schéma des cultures (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les cultures vivrières et les cultures commerciales ». Après cette séance, vous serez capables de distinguer les deux et de citer les principales cultures de Madagascar.",
  observation: "Observez bien le schéma : d'un côté l'assiette de la famille (vivrier), de l'autre l'étal du marché et le bateau (commercial).",
  supportObservation: "Schéma des cultures (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une culture vivrière ?", "C'est une plante cultivée pour nourrir la famille : le riz, le maïs, le manioc, la patate douce."],
    ["Qu'est-ce qu'une culture commerciale ?", "C'est une plante cultivée pour être vendue : le girofle, la vanille, le café, le litchi."],
    ["Quelle est la première culture vivrière de Madagascar ?", "Le riz, l'aliment de base de tous les Malgaches."],
    ["Où pousse la vanille ?", "Sur la côte nord-est, dans la région de la SAVA, au climat chaud et humide."],
    ["Où cultive-t-on le café ?", "Sur les pentes de l'est, où la pluie est généreuse."],
    ["Le manioc pousse-t-il partout ?", "Presque : il supporte la sécheresse du Sud, là où le riz échoue."],
  ],
  synthese: "Donc, les cultures vivrières nourrissent les familles (riz, maïs, manioc) et les cultures commerciales rapportent de l'argent (girofle, vanille, café, litchi). Madagascar cultive les deux, dans les régions que leur climat désigne.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une culture vivrière ?",
        "2. Qu'est-ce qu'une culture commerciale ?",
        "3. Cite trois cultures vivrières de Madagascar.",
        "4. Cite trois cultures commerciales.",
      ],
      corrige: [
        "1. C'est **une plante cultivée pour nourrir la famille**.",
        "2. C'est **une plante cultivée pour être vendue**.",
        "3. **Le riz, le maïs et le manioc** (aussi la patate douce).",
        "4. **Le girofle, la vanille et le café** (aussi le litchi, le poivre).",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le riz est la culture vivrière principale de Madagascar.",
        "2. La vanille se cultive pour manger chez soi.",
        "3. Le manioc supporte la sécheresse du Sud.",
        "4. Le girofle part vers les pays lointains.",
      ],
      corrige: [
        "1. **Vrai** : c'est l'aliment de base.",
        "2. **Faux** : on la cultive pour la vendre.",
        "3. **Vrai** : il pousse là où le riz échoue.",
        "4. **Vrai** : c'est une culture commerciale d'exportation.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : vivrière — commerciale — riz — vanille.",
      items: [
        "Le ……… nourrit la famille : c'est une culture vivrière.",
        "La ……… part au marché : c'est une culture ……… .",
        "L'aliment de base des Malgaches est le ……… .",
        "Une culture qui rapporte de l'argent est une culture ……… .",
      ],
      corrige: [
        "Le **riz** / la **vanille**, culture **commerciale** / le **riz** / **commerciale**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Le maïs et le manioc sont des cultures : A. vivrières — B. commerciales — C. minières",
        "2. La vanille pousse surtout : A. dans le Grand Sud — B. sur la côte nord-est — C. au sommet des monts",
        "3. Le café aime : A. la pluie généreuse de l'est — B. le sable sec — C. la neige",
        "4. Une culture vivrière sert d'abord : A. à nourrir — B. à exporter — C. à décorer",
        "5. Culture commerciale veut dire : A. cultivée pour vendre — B. cultivée pour jouer — C. cultivée en ville",
      ],
      corrige: [
        "1. Réponse **A** : elles nourrissent les familles.",
        "2. Réponse **B** : la SAVA, chaud et humide.",
        "3. Réponse **A** : les pentes arrosées de l'est.",
        "4. Réponse **A** : l'assiette familiale.",
        "5. Réponse **A** : marché et exportation.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Cultiver pour manger",
        paras: [
          "Les cultures vivrières nourrissent ceux qui les cultivent. La première d'entre elles est le riz, l'aliment de base de Madagascar : chaque famille en produit ou en achète.",
          "Le maïs, le manioc, la patate douce et les légumes complètent l'assiette. Le manioc, robuste, nourrit les régions sèches où le riz ne pousse pas.",
        ],
        exemples: [
          "La récolte du riz rassemble tous les cousins dans la rizière familiale.",
          "Dans le Grand Sud, le manioc grillé remplace le riz les années sèches.",
        ],
      },
      {
        titre: "2. Cultiver pour vendre",
        paras: [
          "Les cultures commerciales rapportent de l'argent. Le girofle et la vanille de la côte nord-est partent vers les pays lointains, où l'on parfume gâteaux et pâtisseries.",
          "Le café des pentes de l'est, le litchi de décembre, le poivre et la cannelle remplissent aussi les bateaux. Ces cultures rapportent des devises au pays.",
        ],
        exemples: [
          "Les rangs de girofle séchent au soleil avant le marché.",
          "Les caisses de litchis rouges s'entassent au port en saison.",
        ],
      },
      {
        titre: "3. Deux cultures, un équilibre",
        paras: [
          "Vivrières et commerciales se complètent : les premières nourrissent, les secondes rapportent l'argent du sel, du savon, des habits et de l'école.",
          "Beaucoup de paysans malgaches cultivent les deux : un champ de riz pour la famille, quelques rangs de girofle ou de café pour le marché.",
        ],
        exemples: [
          "Maman Rasoa vend le girofle pour acheter les cahiers des jumeaux.",
          "Le panier de la marchande mêle riz du village et épices des côtes.",
        ],
      },
    ],
  },
  motsCles: ["culture vivrière", "culture commerciale", "riz", "vanille", "girofle"],
  questionsRevision: [
    ["Quelle différence entre culture vivrière et commerciale ?", "La vivrière nourrit la famille ; la commerciale est cultivée pour être vendue."],
    ["Où cultive-t-on la vanille et le girofle ?", "Sur la côte nord-est (région SAVA), chaude et humide."],
  ],
};

const S54 = {
  numero: 54, total: TOTAL,
  titre: "Les cultures industrielles ; l'agriculture malgache",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de citer les cultures industrielles et de caractériser l'agriculture malgache.",
  image: { id: "geo6_cultures_industrielles", legende: "Cultures industrielles : des champs pour les usines ; l'agriculture malgache, encore artisanale." },
  scene: { file: "scene_s54_industrielles.jpg", mode: "document", legende: "Document : à l'usine sucrière? plutôt : les camions chargent la canne à sucre des grandes plantations de la côte ouest, direction l'usine." },
  revisionOuverture: [
    ["Quelle différence entre culture vivrière et commerciale ?", "La vivrière nourrit la famille ; la commerciale est cultivée pour être vendue."],
    ["Où cultive-t-on la vanille et le girofle ?", "Sur la côte nord-est (région SAVA), chaude et humide."],
  ],
  miseEnSituation: {
    texte: "Sur la route de Mahajanga, le taxi-brousse de papa longe des champs de canne à sucre à perte de vue, verts et hauts comme des bambous. Des camions chargés de cannes roulent vers l'usine, dont la fumée se voit de loin. « Toute cette canne ne se mange pas telle quelle, dit papa. Elle devient du sucre à l'usine. C'est une culture industrielle : cultivée pour nourrir une usine. Chez nous, la plupart des paysans cultivent avec la houe et la pluie : notre agriculture reste artisanale. »",
    question: "Quelles sont les cultures industrielles, et comment décrire l'agriculture malgache ?",
    ra: "Les cultures industrielles alimentent les usines : canne à sucre, coton. L'agriculture malgache reste surtout artisanale : petites parcelles, outils simples, travail à la main, dépendance à la pluie.",
    support: "Schéma cultures industrielles et agriculture (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « Les cultures industrielles ; l'agriculture malgache ». Après cette séance, vous serez capables de citer les cultures industrielles et de caractériser l'agriculture de notre pays.",
  observation: "Observez bien le schéma : à gauche, la grande plantation et l'usine ; à droite, la petite parcelle cultivée à la houe.",
  supportObservation: "Schéma cultures industrielles et agriculture (page Leçon)",
  analyse: [
    ["Qu'est-ce qu'une culture industrielle ?", "C'est une plante cultivée en grande quantité pour alimenter une usine."],
    ["Que devient la canne à sucre ?", "Elle devient du sucre à l'usine sucrière."],
    ["Que fait-on du coton ?", "L'usine textile le file et le tisse en tissus."],
    ["Où sont les grandes plantations ?", "Sur les plaines de la côte ouest et du nord, près des usines."],
    ["Comment la plupart des paysans cultivent-ils ?", "Avec des outils simples, la houe et l'angady, à la main, sur de petites parcelles."],
    ["De quoi l'agriculture malgache dépend-elle beaucoup ?", "De la pluie : sans irrigation, une sécheresse ruine la récolte."],
  ],
  synthese: "Donc, les cultures industrielles (canne à sucre, coton) alimentent les usines. Mais l'agriculture malgache reste surtout artisanale : petites parcelles, outils simples, travail manuel, et une grande dépendance à la pluie.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce qu'une culture industrielle ?",
        "2. Que devient la canne à sucre ?",
        "3. Avec quels outils la plupart des paysans cultivent-ils ?",
        "4. De quoi la récolte dépend-elle surtout, sans irrigation ?",
      ],
      corrige: [
        "1. C'est **une plante cultivée pour alimenter une usine**.",
        "2. Elle devient **du sucre** à l'usine sucrière.",
        "3. **La houe et l'angady**, à la main.",
        "4. **De la pluie** : sans elle, la récolte est ruinée.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le coton alimente l'industrie textile.",
        "2. L'agriculture malgache est entièrement mécanisée.",
        "3. La plupart des paysans travaillent de petites parcelles.",
        "4. Une sécheresse peut ruiner la récolte.",
      ],
      corrige: [
        "1. **Vrai** : filage et tissage.",
        "2. **Faux** : elle reste surtout artisanale, à la main.",
        "3. **Vrai** : quelques rangs par famille.",
        "4. **Vrai** : sans irrigation, tout dépend du ciel.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : industrielle — sucre — houe — pluie.",
      items: [
        "La canne à sucre donne le ……… à l'usine : c'est une culture ……… .",
        "Le paysan malgache cultive surtout avec la ……… .",
        "Sans irrigation, la récolte dépend de la ……… .",
      ],
      corrige: [
        "le **sucre** / culture **industrielle** / la **houe** / la **pluie**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Une culture industrielle alimente : A. une usine — B. une école — C. un zoo",
        "2. Le coton devient : A. du sucre — B. des tissus — C. du pétrole",
        "3. L'angady et la houe sont : A. des outils agricoles — B. des avions — C. des usines",
        "4. L'agriculture malgache est surtout : A. artisanale — B. robotisée — C. industrielle",
        "5. Les grandes plantations de canne se trouvent : A. sur la côte ouest — B. au sommet des monts — C. sous la mer",
      ],
      corrige: [
        "1. Réponse **A** : sucrerie, filature.",
        "2. Réponse **B** : l'usine textile file et tisse.",
        "3. Réponse **A** : les outils du paysan.",
        "4. Réponse **A** : petites parcelles, travail manuel.",
        "5. Réponse **A** : les plaines du nord-ouest.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Des champs pour les usines",
        paras: [
          "Les cultures industrielles sont cultivées en grandes quantités pour alimenter les usines. La canne à sucre des plaines de la côte ouest devient du sucre dans les sucreries.",
          "Le coton, lui, file vers les usines textiles qui le transforment en fil puis en tissus. Ces cultures emploient de nombreux ouvriers agricoles et font tourner des usines entières.",
        ],
        exemples: [
          "Les camions de canne montent vers l'usine dont la fumée se voit de loin.",
          "Les champs de canne verts s'étendent à perte de vue sur la route de Mahajanga.",
        ],
      },
      {
        titre: "2. Une agriculture surtout artisanale",
        paras: [
          "Pourtant, la plupart des paysans malgaches cultivent autrement : de petites parcelles, une houe ou une angady, le travail des mains et le souvenir des ancêtres.",
          "Ni tracteurs, ni irrigation pour beaucoup : la pluie décide de la récolte. Une saison sèche trop longue, et l'assiette familiale se vide.",
        ],
        exemples: [
          "La rizière familiale se laboure à l'angady, comme du temps des arrière-grands-parents.",
          "Les paysans regardent le ciel plus souvent que le champ.",
        ],
      },
      {
        titre: "3. Caractériser, puis améliorer",
        paras: [
          "Résumons : l'agriculture malgache est artisanale, extensive, dépendante de la pluie, et elle nourrit pourtant la grande majorité des habitants.",
          "Son avenir est dans les techniques améliorées vues à l'unité 4 — semis en lignes, compost, irrigation — et dans l'irrigation des plaines : produire plus, sans attendre tout du ciel.",
        ],
        exemples: [
          "La parcelle d'essai du moniteur agricole a doublé sa récolte.",
          "Les plaines irriguées du lac Alaotra rizicultent deux fois par an.",
        ],
      },
    ],
  },
  motsCles: ["culture industrielle", "canne à sucre", "coton", "agriculture artisanale", "irrigation"],
  questionsRevision: [
    ["Cite les deux principales cultures industrielles.", "La canne à sucre et le coton."],
    ["Caractérise l'agriculture malgache en trois traits.", "Artisanale (outils simples), petites parcelles, dépendante de la pluie."],
  ],
};

const S55 = {
  numero: 55, total: TOTAL,
  titre: "L'élevage extensif et l'élevage intensif",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de distinguer l'élevage extensif de l'élevage intensif et de citer les régions d'élevage de Madagascar.",
  image: { id: "geo6_elevage", legende: "Extensif : de grands espaces, peu de soins. Intensif : peu d'espace, beaucoup de soins." },
  scene: { file: "scene_s55_elevage.jpg", mode: "document", legende: "Document : chez le laitier d'Antsirabe, les vaches laitières attendent la traite dans l'étable propre ; à côté, le berger garde les zébus du grand-père sur la colline." },
  revisionOuverture: [
    ["Cite les deux principales cultures industrielles.", "La canne à sucre et le coton."],
    ["Caractérise l'agriculture malgache en trois traits.", "Artisanale (outils simples), petites parcelles, dépendante de la pluie."],
  ],
  miseEnSituation: {
    texte: "Visite chez le laitier d'Antsirabe. Dans l'étable propre, douze vaches laitières attendent la traite : « Ici, les bêtes ne sortent presque pas, explique le laitier. Je leur apporte à manger, je les soigne, je les lave. Avec peu de place, je produis beaucoup de lait. » Le soir, sur la colline de grand-père Maitso, le berger garde les zébus qui paissent libres sur des kilomètres : « Mes bêtes se nourrissent seules, dit grand-père. De grands espaces, peu de soins : l'élevage des ancêtres. »",
    question: "Quelle est la différence entre ces deux élevages ?",
    ra: "Le laitier pratique l'élevage intensif : peu d'espace, bêtes nourries et soignées, forte production. Grand-père pratique l'élevage extensif : grands espaces, pâture libre, peu de soins.",
    support: "Schéma élevage extensif et intensif (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'élevage extensif et l'élevage intensif ». Après cette séance, vous serez capables de distinguer les deux et de citer les grandes régions d'élevage.",
  observation: "Observez bien le schéma : à gauche, la colline aux zébus qui paissent ; à droite, l'étable propre du laitier.",
  supportObservation: "Schéma élevage extensif et intensif (page Leçon)",
  analyse: [
    ["Qu'est-ce que l'élevage extensif ?", "Un élevage sur de grands espaces, où les bêtes se nourrissent seules, avec peu de soins."],
    ["Qu'est-ce que l'élevage intensif ?", "Un élevage en petit espace, où le paysan apporte la nourriture et donne beaucoup de soins."],
    ["Où sont les grands troupeaux de zébus ?", "Dans le Sud-Ouest et sur les Hautes Terres, là où l'herbe pousse."],
    ["Que produit l'élevage intensif d'Antsirabe ?", "Du lait frais, vendu chaque matin en ville."],
    ["Pourquoi le zébu est-il si important ?", "C'est la richesse des campagnes : travail des champs, lait, viande, fêtes et dot des ancêtres."],
    ["Quel élevage produit le plus sur peu d'espace ?", "L'élevage intensif, grâce aux soins et à la nourriture apportée."],
  ],
  synthese: "Donc, l'élevage extensif utilise de grands espaces avec peu de soins (zébus du Sud-Ouest et des Hautes Terres) ; l'élevage intensif produit beaucoup sur peu d'espace, avec nourriture et soins (vaches laitières d'Antsirabe, poulaillers).",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Qu'est-ce que l'élevage extensif ?",
        "2. Qu'est-ce que l'élevage intensif ?",
        "3. Où paissent les grands troupeaux de zébus ?",
        "4. Que produit l'élevage intensif d'Antsirabe ?",
      ],
      corrige: [
        "1. C'est **un élevage sur de grands espaces**, où les bêtes se nourrissent seules.",
        "2. C'est **un élevage en petit espace**, avec nourriture apportée et soins donnés.",
        "3. **Dans le Sud-Ouest et sur les Hautes Terres**.",
        "4. **Du lait frais**, vendu chaque matin en ville.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Dans l'élevage extensif, le berger apporte tout à manger aux bêtes.",
        "2. L'élevage intensif produit beaucoup sur peu d'espace.",
        "3. Le zébu est la richesse traditionnelle des campagnes.",
        "4. Les poulaillers modernes pratiquent l'élevage intensif.",
      ],
      corrige: [
        "1. **Faux** : les bêtes paissent seules sur de grands espaces.",
        "2. **Vrai** : nourriture et soins multiplient la production.",
        "3. **Vrai** : travail, lait, viande, fêtes.",
        "4. **Vrai** : nourriture apportée, soins, petits espaces.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : extensif — intensif — zébus — lait.",
      items: [
        "Les grands troupeaux de ……… paissent libres : c'est l'élevage ……… .",
        "L'étable du laitier produit du ……… : c'est l'élevage ……… .",
      ],
      corrige: [
        "troupeaux de **zébus** / élevage **extensif** / du **lait** / élevage **intensif**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Élevage extensif veut dire : A. de grands espaces — B. une étable — C. un appartement",
        "2. Dans l'élevage intensif, le paysan : A. attend la pluie — B. apporte nourriture et soins — C. part en ville",
        "3. Le zébu sert : A. aux champs, au lait et aux fêtes — B. à rien — C. à voler",
        "4. Les vaches laitières d'Antsirabe donnent : A. du jus — B. du lait — C. du charbon",
        "5. Sur peu d'espace, l'élevage qui produit le plus est : A. extensif — B. intensif — C. fantôme",
      ],
      corrige: [
        "1. Réponse **A** : la pâture libre.",
        "2. Réponse **B** : il soigne et nourrit.",
        "3. Réponse **A** : la richesse des campagnes.",
        "4. Réponse **B** : vendu frais chaque matin.",
        "5. Réponse **B** : grâce aux soins.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. L'élevage des grands espaces",
        paras: [
          "L'élevage extensif est celui des grands espaces : les zébus paissent libres sur les collines des Hautes Terres et les plaines du Sud-Ouest, gardés par un berger.",
          "L'herbe nourrit les bêtes, le soleil les soigne ; le paysan intervient peu. C'est l'élevage traditionnel, celui des ancêtres.",
        ],
        exemples: [
          "Les zébus de grand-père montent sur la colline au lever du jour.",
          "Dans le Sud-Ouest, les hardes comptent parfois des centaines de têtes.",
        ],
      },
      {
        titre: "2. L'élevage des soins",
        paras: [
          "L'élevage intensif, lui, se passe en petit espace : étable, poulailler, clapier. Le paysan apporte la nourriture, vaccine, abreuve, nettoie.",
          "Bien nourries et bien soignées, les bêtes produisent beaucoup : le laitier d'Antsirabe tire des bidons de lait chaque matin, les poulaillers fournissent les marchés en poulets et en œufs.",
        ],
        exemples: [
          "Douze vanches laitières? Non : douze vaches laitières propres et rondes attendent la traite.",
          "Le poulailler du voisin livre cent poulets par mois au marché.",
        ],
      },
      {
        titre: "3. Deux modèles pour le pays",
        paras: [
          "Les deux élevages ont leur place : l'extensif garde la tradition et les grands espaces ; l'intensif nourrit les villes en lait, en viande et en œufs.",
          "L'avenir est sans doute entre les deux : de bons pâturages entretenus, des bêtes soignées, des races améliorées — produire plus, sans perdre l'esprit des ancêtres.",
        ],
        exemples: [
          "Le berger de grand-père apprend à vacciner les veaux au dispensaire animal.",
          "Le laitier achète une génisse améliorée pour doubler sa traite.",
        ],
      },
    ],
  },
  motsCles: ["élevage extensif", "élevage intensif", "zébu", "étable", "pâture"],
  questionsRevision: [
    ["Quelle différence entre élevage extensif et intensif ?", "Extensif : grands espaces, pâture libre, peu de soins. Intensif : petit espace, nourriture apportée, beaucoup de soins."],
    ["Que produit l'élevage intensif ?", "Beaucoup sur peu d'espace : lait, viande, œufs."],
  ],
};

const S56 = {
  numero: 56, total: TOTAL,
  titre: "La pêche artisanale et la pêche industrielle",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de comparer la pêche artisanale et la pêche industrielle et d'expliquer leur importance.",
  image: { id: "geo6_peche", legende: "La pirogue du village et le grand bateau usine : deux pêches, deux mondes." },
  scene: { file: "scene_s56_peche.jpg", mode: "document", legende: "Document : au port de Toamasina, cousin Tojo montre aux jumeaux les pirogues des pêcheurs d'un côté, les grands bateaux de pêche de l'autre." },
  revisionOuverture: [
    ["Quelle différence entre élevage extensif et intensif ?", "Extensif : grands espaces, pâture libre, peu de soins. Intensif : petit espace, nourriture apportée, beaucoup de soins."],
    ["Que produit l'élevage intensif ?", "Beaucoup sur peu d'espace : lait, viande, œufs."],
  ],
  miseEnSituation: {
    texte: "Vacances chez cousin Tojo, au port de Toamasina. D'un côté du quai, les pirogues des pêcheurs reviennent, voiles triangulaires gonflées, caisses de poissons fraîches portées à dos d'homme. De l'autre, d'immenses bateaux blancs, usines flottantes, déchargent des tonnes de crevettes congelées dans des camions frigorifiques. « Deux mondes, dit Tojo. Le pêcheur en pirogue nourrit son village ; le grand bateau nourrit les pays lointains. Mais sans le petit, pas de poisson frais au marché ; sans le grand, pas de devises pour le pays. »",
    question: "Quelles différences entre la pêche artisanale et la pêche industrielle ?",
    ra: "La pêche artisanale se pratique en pirogue, près des côtes, avec des outils simples : elle nourrit les villages. La pêche industrielle utilise de grands bateaux usines, au large : elle vend en ville et à l'étranger.",
    support: "Schéma pêche artisanale et industrielle (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « La pêche artisanale et la pêche industrielle ». Après cette séance, vous serez capables de comparer les deux pêches et d'expliquer leur importance pour Madagascar.",
  observation: "Observez bien le schéma : la pirogue près du bord, le grand bateau au large ; les deux poissons ne finissent pas dans les mêmes assiettes.",
  supportObservation: "Schéma pêche artisanale et industrielle (page Leçon)",
  analyse: [
    ["Comment pêche le pêcheur artisan ?", "En pirogue, près du bord, avec des filets, des lignes et des pièges simples."],
    ["Que fait le bateau industriel ?", "Il pêche au large, des semaines durant, et congele à bord : c'est une usine flottante."],
    ["Où va le poisson de la pirogue ?", "Au village et au marché voisin : il nourrit les familles."],
    ["Où vont les crevettes du grand bateau ?", "Dans les camions frigorifiques, puis vers les villes et les pays lointains."],
    ["Quelle pêche rapporte des devises ?", "La pêche industrielle, qui exporte crevettes et langoustes."],
    ["Pourquoi protéger les deux ?", "Parce que l'une nourrit le peuple et l'autre enrichit le pays : la mer doit nourrir les deux, sans être vidée."],
  ],
  synthese: "Donc, la pêche artisanale (pirogues, côtes, outils simples) nourrit les villages ; la pêche industrielle (bateaux usines, large, congélation) vend aux villes et à l'étranger. Les deux sont importantes — à condition de respecter la mer.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Comment pêche le pêcheur artisan ?",
        "2. Qu'est-ce qu'un bateau usine ?",
        "3. Où va le poisson de la pêche artisanale ?",
        "4. Quelle pêche rapporte des devises au pays ?",
      ],
      corrige: [
        "1. **En pirogue, près du bord**, avec des filets et des lignes.",
        "2. C'est **un grand bateau qui pêche au large et congele à bord**.",
        "3. **Au village et au marché voisin**.",
        "4. **La pêche industrielle**, qui exporte crevettes et langoustes.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. La pêche artisanale utilise de grands bateaux frigorifiques.",
        "2. La pêche industrielle congèle le poisson en mer.",
        "3. La pêche artisanale nourrit les villages du bord de mer.",
        "4. Les crevettes exportées rapportent des devises.",
      ],
      corrige: [
        "1. **Faux** : elle utilise des pirogues et des outils simples.",
        "2. **Vrai** : ce sont des usines flottantes.",
        "3. **Vrai** : le poisson frais va au marché local.",
        "4. **Vrai** : vendues aux pays lointains.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : artisanale — industrielle — pirogue — devises.",
      items: [
        "Le pêcheur en ……… pratique la pêche ……… .",
        "Le bateau usine pratique la pêche ……… .",
        "Ses exportations rapportent des ……… au pays.",
      ],
      corrige: [
        "en **pirogue** / pêche **artisanale** / pêche **industrielle** / des **devises**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. La pêche artisanale se fait : A. au large — B. près du bord — C. dans le désert",
        "2. Le bateau usine congele : A. à terre — B. en mer — C. jamais",
        "3. Le poisson frais du village vient de : A. la pirogue — B. l'avion — C. la mine",
        "4. Crevettes et langoustes exportées sont : A. des devises — B. des cailloux — C. des nuages",
        "5. Pour que la mer nourrisse tout le monde, il faut : A. la vider — B. la respecter — C. la peindre",
      ],
      corrige: [
        "1. Réponse **B** : le long des côtes.",
        "2. Réponse **B** : usine flottante.",
        "3. Réponse **A** : la pêche artisanale.",
        "4. Réponse **A** : de l'argent qui entre au pays.",
        "5. Réponse **B** : pêcher sans surpêche.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. La pêche des villages",
        paras: [
          "La pêche artisanale est la pêche des pirogues : le pêcheur part au lever du jour, près du bord, avec ses filets, ses lignes et ses pièges à langoustes.",
          "Sa pêche nourrit sa famille et le village ; le surplus sèche au soleil ou part au marché voisin. Des dizaines de milliers de familles vivent ainsi sur les côtes.",
        ],
        exemples: [
          "Les pirogues à voile triangulaire rentrent au port de Toamasina à midi.",
          "Le poisson sèche sur les nattes, la crevette se vend au marché du bord de mer.",
        ],
      },
      {
        titre: "2. La pêche des grands bateaux",
        paras: [
          "La pêche industrielle se pratique au large, sur des bateaux énormes qui restent en mer des semaines : filets géants, ponts de travail, salles de congélation.",
          "Ces usines flottantes déchargent des tonnes de crevettes et de poissons congelés, partis vers les villes et l'exportation. Elles emploient des équipages entiers et rapportent des devises.",
        ],
        exemples: [
          "Les camions frigorifiques font la file au pied des bateaux blancs.",
          "Une partie de la pêche part vers les pays lointains en conteneurs réfrigérés.",
        ],
      },
      {
        titre: "3. Deux pêches, une seule mer",
        paras: [
          "Artisanale ou industrielle, les deux pêches comptent : l'une nourrit le peuple, l'autre enrichit le pays.",
          "Mais la mer n'est pas infinie : sans règles — saisons, mailles des filets, zones protégées — la surpêche videra les deux. Pêcher beaucoup, oui ; pêcher pour toujours, voilà la règle.",
        ],
        exemples: [
          "Les dina des villages de pêcheurs interdisent de pêcher pendant la ponte.",
          "Tojo apprend aux enfants à remettre à l'eau les poissons trop petits.",
        ],
      },
    ],
  },
  motsCles: ["pêche artisanale", "pêche industrielle", "pirogue", "bateau usine", "devises"],
  questionsRevision: [
    ["Cite deux différences entre pêche artisanale et industrielle.", "La pirogue près du bord contre le bateau usine au large ; le marché du village contre l'exportation."],
    ["Pourquoi faut-il des règles de pêche ?", "Pour éviter la surpêche et que la mer nourrisse toujours les générations."],
  ],
};

const S57 = {
  numero: 57, total: TOTAL,
  titre: "L'exploitation forestière",
  theme: "Les grandes zones économiques et les activités économiques",
  objectif: "Être capable de décrire les types d'exploitation forestière et la situation forestière de Madagascar.",
  image: { id: "geo6_foret_exploitation", legende: "Bois de chauffe, bois d'œuvre, reboisement : la forêt entre les mains des hommes." },
  scene: { file: "scene_s57_foret.jpg", mode: "document", legende: "Document : sur la route de l'est, les camions chargés de grumes descendent de la forêt ; sur la colline replantée, les jeunes pins poussent en lignes." },
  revisionOuverture: [
    ["Cite deux différences entre pêche artisanale et industrielle.", "La pirogue près du bord contre le bateau usine au large ; le marché du village contre l'exportation."],
    ["Pourquoi faut-il des règles de pêche ?", "Pour éviter la surpêche et que la mer nourrisse toujours les générations."],
  ],
  miseEnSituation: {
    texte: "Sur la route de l'est, le taxi-brousse croise des camions chargés de grumes — de gros troncs fraîchement coupés. « Ce bois-là deviendra des meubles et des poutres, dit papa. C'est le bois d'œuvre. » Un peu plus loin, une femme descend du sentier, un fagot de bois de chauffe sur la tête : « Et ce bois-là cuira le riz de ce soir. » Puis, sur une colline, la surprise : des milliers de jeunes pins alignés comme des écoliers. « C'est la forêt qu'on replante, sourit papa. Couper, oui ; mais planter aussi. »",
    question: "Comment les hommes exploitent-ils la forêt, et dans quel état est la forêt malgache ?",
    ra: "Ils exploitent le bois de chauffe et le bois d'œuvre, parfois trop : la forêt malgache recule chaque année. Le reboisement — pins et eucalyptus — tente de rattraper les coupes.",
    support: "Schéma de l'exploitation forestière (page Leçon)",
  },
  presentation: "Aujourd'hui, nous allons apprendre : « L'exploitation forestière ». Après cette séance, vous serez capables de citer les types d'exploitation et de décrire la situation forestière de Madagascar.",
  observation: "Observez bien le schéma : le fagot de bois de chauffe, la grume de bois d'œuvre, la scierie — et la colline replantée.",
  supportObservation: "Schéma de l'exploitation forestière (page Leçon)",
  analyse: [
    ["Quels sont les deux grands usages du bois ?", "Le bois de chauffe, pour cuire et se chauffer ; le bois d'œuvre, pour construire et meubler."],
    ["Qu'est-ce que le bois d'œuvre ?", "Les gros troncs travaillés à la scierie : poutres, planches, meubles."],
    ["Où se coupent les bois précieux ?", "Dans les forêts de l'est, où poussent palissandre, ébène et bois de rose."],
    ["Quel est le problème de la forêt malgache ?", "Elle recule chaque année : coupes, brûlis (tavy), feux de brousse."],
    ["Qu'est-ce que le reboisement ?", "Replanter des arbres — pins, eucalyptus — là où on a coupé."],
    ["Pourquoi l'eucalyptus est-il utile ?", "Il pousse vite et redonne du bois de chauffe en quelques années."],
  ],
  synthese: "Donc, la forêt malgache donne le bois de chauffe et le bois d'œuvre. Mais coupée plus vite qu'elle ne pousse — tavy, feux, coupes excessives —, elle recule d'année en année. Le reboisement doit rattraper les coupes : un arbre coupé, un arbre planté.",
  appExos: [
    {
      consigne: "Réponds par une phrase complète.",
      items: [
        "1. Quelle différence entre bois de chauffe et bois d'œuvre ?",
        "2. Cite deux bois précieux des forêts de l'est.",
        "3. Pourquoi la forêt malgache recule-t-elle ?",
        "4. Qu'est-ce que le reboisement ?",
      ],
      corrige: [
        "1. Le bois de chauffe **cuit les repas** ; le bois d'œuvre **construit et meuble**.",
        "2. **Le palissandre et l'ébène** (aussi le bois de rose).",
        "3. À cause des **coupes excessives, du tavy et des feux de brousse**.",
        "4. C'est **replanter des arbres** là où on a coupé.",
      ],
    },
    {
      consigne: "Dis si chaque phrase est vraie ou fausse.",
      items: [
        "1. Le bois de chauffe sert à construire des meubles.",
        "2. Le tavy détruit la forêt.",
        "3. L'eucalyptus pousse vite et redonne du bois.",
        "4. La forêt malgache s'agrandit chaque année.",
      ],
      corrige: [
        "1. **Faux** : il sert à cuire et se chauffer.",
        "2. **Vrai** : la culture sur brûlis la brûle.",
        "3. **Vrai** : bois de chauffe en quelques années.",
        "4. **Faux** : elle recule, coupée plus vite qu'elle ne pousse.",
      ],
    },
  ],
  evalExos: [
    {
      consigne: "Complète avec les mots : chauffe — œuvre — tavy — reboisement.",
      items: [
        "Le bois de ……… cuit le riz du soir.",
        "Le bois d'……… devient poutres et meubles.",
        "La culture sur brûlis, le ………, détruit la forêt.",
        "Replanter les arbres coupés s'appelle le ……… .",
      ],
      corrige: [
        "bois de **chauffe** / bois d'**œuvre** / le **tavy** / le **reboisement**.",
      ],
    },
    {
      consigne: "Entoure la bonne réponse.",
      items: [
        "1. Les grumes sont : A. de gros troncs coupés — B. des petits oiseaux — C. des cailloux",
        "2. Le palissandre et l'ébène sont : A. des bois précieux — B. des épices — C. des minerais",
        "3. La forêt malgache recule à cause : A. des coupes et des feux — B. des lémuriens — C. de la pluie",
        "4. L'eucalyptus est planté parce qu'il : A. pousse vite — B. chante — C. vole",
        "5. La règle d'or de la forêt : A. un coupé, un planté — B. tout couper — C. tout brûler",
      ],
      corrige: [
        "1. Réponse **A** : elles partent à la scierie.",
        "2. Réponse **A** : bois d'œuvre de grande valeur.",
        "3. Réponse **A** : coupes excessives, tavy, feux.",
        "4. Réponse **A** : bois de chauffe en quelques années.",
        "5. Réponse **A** : la forêt reste pour les enfants.",
      ],
    },
  ],
  lecon: {
    sections: [
      {
        titre: "1. Les deux bois de la vie",
        paras: [
          "Chaque jour, Madagascar brûle du bois de chauffe : le riz, les brèdes et l'eau chaude de millions de familles cuisent au feu de bois.",
          "Le bois d'œuvre, lui, sort de la forêt en grumes : les troncs descendent à la scierie, qui les débite en planches et poutres. Les bois précieux de l'est — palissandre, ébène, bois de rose — se vendent très cher.",
        ],
        exemples: [
          "Le fagot de la femme monte au village sur sa tête.",
          "Les camions de grumes descendent la route de l'est vers les scieries.",
        ],
      },
      {
        titre: "2. Une forêt qui recule",
        paras: [
          "La situation forestière de Madagascar est inquiétante : la forêt primaire ne couvre plus qu'une petite partie du pays, et elle recule encore chaque année.",
          "Les coupes excessives, le tavy, les feux de brousse et le bois de chauffe des villes grignotent la forêt. Avec elle disparaissent les lémuriens, les orchidées et l'eau des rivières.",
        ],
        exemples: [
          "Les collines dénudées de l'unité 2 racontent la forêt disparue.",
          "Le corridor forestier de l'est se rétrécit comme une peau de chagrin.",
        ],
      },
      {
        titre: "3. Couper sans tuer : le reboisement",
        paras: [
          "L'exploitation raisonnée a ses règles : couper les arbres mûrs seulement, protéger les forêts classées, planter après la coupe.",
          "Le reboisement — pins des Hautes Terres, eucalyptus autour des villes — crée des forêts de production qui donnent du bois sans toucher la forêt naturelle. Un arbre coupé, un arbre planté : la règle d'or de la forêt.",
        ],
        exemples: [
          "Les jeunes pins de la colline poussent alignés comme des écoliers.",
          "Les eucalyptus de grand-père redonnent du bois de chauffe depuis vingt ans.",
        ],
      },
    ],
  },
  motsCles: ["exploitation forestière", "bois de chauffe", "bois d'œuvre", "déforestation", "reboisement"],
  questionsRevision: [
    ["Cite les deux grands usages du bois.", "Le bois de chauffe (cuisson) et le bois d'œuvre (construction, meubles)."],
    ["Comment décrire la situation forestière de Madagascar ?", "Inquiétante : la forêt recule chaque année, coupée et brûlée plus vite qu'elle ne pousse."],
  ],
};

module.exports = { topics: [S51, S52, S53, S54, S55, S56, S57] };

