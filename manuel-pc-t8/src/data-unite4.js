// data-unite4.js — T8 Unité IV : ÉNERGIE, LUMIÈRE ET SON (séances 28 à 32)
const DOC = "Programme d'études T8 — Sciences Physiques (MEN Madagascar) ; manuel J-Learn";

const S28 = {
  numero: 28, total: 34, unite: "IV", theme: "Énergie",
  titre: "Énergies renouvelables et non renouvelables ; pertes et conservation",
  objectif: "distinguer les énergies renouvelables des énergies non renouvelables, expliquer les pertes énergétiques d'un système et élaborer une fiche synthèse des techniques de conservation",
  documentation: DOC,
  support: "Lampe à incandescence et lampe DEL, marmite avec et sans couvercle, roue de vélo, documents, papier kraft",
  image: "images/img_seance28.png",
  imageLegende: "Figure 22 — Toute machine perd de l'énergie : effet Joule, frottements, rayonnement… mais on peut réduire les pertes !",
  revision: {
    qa: [
      { q: "Cite les formes d'énergie vues en T7.", ra: "Électrique, thermique, chimique, mécanique, rayonnante." },
      { q: "Que fait un appareil électrique comme le fer à repasser ?", ra: "Il transforme l'énergie électrique en énergie thermique." },
      { q: "Qu'est-ce que l'effet Joule ?", ra: "L'échauffement d'un conducteur traversé par un courant." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Maman constate : « La vieille ampoule chauffe tellement qu'on ne peut pas la toucher, et la marmite sans couvercle met une éternité à bouillir : quel gâchis de charbon ! » Dans les deux cas, de l'énergie payée… part dans la nature.",
      "Où va l'énergie « perdue », et comment limiter ce gaspillage ?",
      "R.A. : Elle se disperse en chaleur (effet Joule, frottements) ou en rayonnement ; on peut réduire les pertes par des techniques adaptées.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Pertes énergétiques et techniques de conservation ». Après cette séance, vous serez capables d'expliquer les pertes d'un système et de dresser une fiche synthèse des remèdes.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien trois systèmes. 1) Électrique : la vieille ampoule éclaire ET brûle les doigts ; la DEL éclaire autant en restant froide. 2) Thermique : deux marmites identiques sur le même feu : celle AVEC couvercle bout bien avant l'autre. 3) Mécanique : je lance la roue de vélo : bien huilée elle tourne longtemps ; frein légèrement serré, elle s'arrête vite et la jante chauffe.",
    apprenants: "Observent et comparent les trois couples d'expériences.",
    technique: "Expérimentation, comparaison", support: "Lampes, marmites, roue",
  },
  analyse: {
    qa: [
      { q: "Dans l'ampoule, où part l'énergie perdue ?", ra: "En chaleur : c'est l'effet Joule dans le filament (plus de 90 % de pertes !)." },
      { q: "Dans la marmite sans couvercle ?", ra: "La chaleur s'échappe avec la vapeur et par rayonnement : perte thermique." },
      { q: "Et dans la roue freinée ?", ra: "Le frottement transforme l'énergie mécanique en chaleur : la jante chauffe." },
      { q: "Cite les trois grandes causes de pertes.", ra: "L'effet Joule, les frottements, le rayonnement (et les fuites de chaleur)." },
      { q: "Quels remèdes proposes-tu ?", ra: "Isolation thermique (couvercle, laine, double paroi), lubrification et roulements, surfaces polies/réfléchissantes, conducteurs adaptés, lampes DEL." },
    ],
    technique: "Questions-réponses, démarche d'investigation", support: "Expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, aucune machine ne transmet toute l'énergie reçue : une partie se perd, presque toujours en chaleur. Trois coupables principaux : l'effet Joule dans les circuits électriques, les frottements dans les mécanismes, le rayonnement et les fuites thermiques. L'énergie perdue n'est pas détruite : elle se disperse et devient inutilisable. Les techniques de conservation réduisent ces pertes : isolation thermique (couvercle, laine de verre, thermos), lubrification et roulements à billes, polissage des surfaces, matériaux réfléchissants, gros fils conducteurs et lampes DEL. Votre mission : dresser en groupe la fiche synthèse « pertes → remèdes », que vous garderez toute la vie : économiser l'énergie, c'est économiser l'argent et protéger la nature !",
    apprenants: "Élaborent en groupe la fiche synthèse sur kraft.", technique: "Exposé, travail de groupe", support: "Papier kraft, feutres",
  },
  application: [
    {
      consigne: "Pour chaque situation, nomme la cause de la perte : a) le moteur mal graissé chauffe ; b) la rallonge trop fine devient tiède ; c) la maison en tôle est un four le jour, une glacière la nuit.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "frottements", cle: true }, { text: " ; b) " }, { text: "effet Joule", cle: true }, { text: " ; c) " }, { text: "fuites thermiques / rayonnement (aucune isolation)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Propose un remède pour chacune des trois situations.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "lubrifier (huile, graisse) ou monter des roulements", cle: true }, { text: " ; b) " }, { text: "utiliser un fil plus gros (section adaptée)", cle: true }, { text: " ; c) " }, { text: "isoler (faux plafond, matériaux isolants, peinture réfléchissante)", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail de groupe", applicationSupport: "Fiche synthèse kraft",
  evaluation: [
    {
      consigne: "Complète : dans un circuit électrique, la perte par échauffement s'appelle l'effet ……… ; dans un mécanisme, les ……… transforment l'énergie mécanique en ……… ; on les réduit par la ……… .",
      items: [],
      corrige: [
        [{ text: "L'effet " }, { text: "Joule", cle: true }, { text: " ; les " }, { text: "frottements", cle: true }, { text: " transforment l'énergie en " }, { text: "chaleur", cle: true }, { text: " ; on les réduit par la " }, { text: "lubrification", cle: true }, { text: " (et les roulements)." }],
      ],
    },
    {
      consigne: "Ta famille cuisine au charbon. Propose trois gestes concrets pour consommer moins de charbon, en citant la perte évitée.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "couvercle sur la marmite (fuite de vapeur)", cle: true }, { text: " ; " }, { text: "foyer amélioré isolé (rayonnement et fuites)", cle: true }, { text: " ; " }, { text: "abriter le foyer du vent / éteindre dès la fin (pertes inutiles)", cle: true }, { text: ". (1 point par geste justifié)" }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["énergie renouvelable", "énergie non renouvelable", "perte énergétique", "effet Joule", "frottement", "rayonnement", "isolation", "fiche synthèse"],
    sections: [
      {
        titre: "1. L'énergie se perd en chemin",
        paras: [
          "Toute machine reçoit de l'énergie et n'en transmet qu'une partie utile : le reste se disperse, presque toujours en chaleur. L'énergie n'est pas détruite : elle devient inutilisable.",
          "On résume la situation par une chaîne : énergie reçue = énergie utile + énergie perdue. Le rapport entre l'utile et le reçu s'appelle le rendement : plus il est proche de 100 %, meilleure est la machine.",
        ],
      },
      {
        titre: "2. Les trois grandes causes de pertes",
        paras: [],
        puces: [
          "l'effet Joule : tout conducteur parcouru par un courant chauffe (ampoules, fils trop fins, moteurs) ;",
          "les frottements : pièces qui glissent ou roulent l'une sur l'autre (axes, freins, engrenages) ;",
          "le rayonnement et les fuites thermiques : la chaleur s'échappe des objets chauds (marmite ouverte, maison non isolée).",
        ],
      },
      {
        titre: "3. Les techniques de conservation",
        paras: [
          "À chaque cause de perte répond une parade : c'est un vrai jeu de détective : identifier la fuite, choisir la technique.",
        ],
        puces: [
          "isolation thermique : couvercle, thermos, laine, double paroi, foyer amélioré ;",
          "matériaux réfléchissants : parois brillantes qui renvoient le rayonnement ;",
          "lubrification (huile, graisse) et roulements à billes contre les frottements ;",
          "polissage des surfaces en contact ;",
          "en électricité : fils de section suffisante, lampes DEL, appareils économes.",
        ],
      },
      {
        titre: "4. Énergies renouvelables et non renouvelables",
        paras: [
          "Avant de savoir économiser l'énergie, il faut savoir d'où elle vient. On classe les sources d'énergie en deux grandes familles, selon que la nature les reconstitue vite… ou pas.",
          "Une énergie est RENOUVELABLE quand sa source se reconstitue naturellement à l'échelle d'une vie humaine : elle ne s'épuise pas si on l'exploite raisonnablement. Une énergie est NON RENOUVELABLE quand sa source, formée en des millions d'années, s'épuise à mesure qu'on la consomme : une fois brûlée, elle est perdue pour des générations.",
        ],
        puces: [
          "renouvelables : le soleil (panneaux solaires, chauffe-eau), le vent (éoliennes), l'eau des rivières et des barrages (hydroélectricité, comme à Andekaleka), la biomasse gérée durablement (bois replanté, biogaz), la chaleur de la Terre (géothermie) ;",
          "non renouvelables : le pétrole et ses dérivés (essence, gazole, pétrole lampant), le charbon de terre (houille), le gaz naturel et le gaz butane, l'uranium des centrales nucléaires ;",
          "attention au charbon de bois : il n'est renouvelable QUE si l'on replante les arbres au même rythme qu'on les coupe : sinon la forêt disparaît plus vite qu'elle ne repousse ;",
          "Piège à éviter : « renouvelable » ne veut pas dire « gratuite » ni « disponible à chaque instant » : le soleil se couche, le vent tombe, le barrage dépend de la pluie : il faut souvent stocker ou combiner plusieurs sources.",
        ],
      },
      {
        titre: "5. Exemples résolus",
        paras: [
          "Exemple 1 — Le moteur d'une pompe chauffe et grince. Identifie les deux causes de pertes et propose une solution pour chacune. Solution : le grincement révèle des FROTTEMENTS : lubrifier les axes (huile, graisse) ; l'échauffement du moteur vient surtout de l'EFFET JOULE dans ses bobinages : vérifier que les fils d'alimentation sont de section suffisante et le moteur adapté à la charge.",
          "Exemple 2 — Une famille utilise un foyer traditionnel « trois pierres » ouvert au vent. Explique pourquoi elle consomme beaucoup de charbon et propose deux améliorations. Solution : la chaleur s'échappe par rayonnement et par le vent (fuites thermiques). Améliorations : foyer amélioré fermé (type kamado ou fatana mitsitsy) qui garde la chaleur autour de la marmite, et couvercle sur la marmite : jusqu'à la moitié du charbon économisé.",
          "Exemple 3 — Classe ces sources d'énergie en renouvelables et non renouvelables : soleil, gazole, vent, charbon de terre, eau du barrage d'Andekaleka, gaz butane. Solution : renouvelables : soleil, vent, eau du barrage (le cycle de l'eau les reconstitue sans cesse) ; non renouvelables : gazole, charbon de terre, gaz butane (issus de gisements fossiles formés en des millions d'années : ils s'épuisent).",
        ],
      },
    ],
    saisTu: [
      "Une ampoule à incandescence transforme à peine 5 % de l'électricité en lumière : 95 % partent en chaleur ! La lampe DEL fait dix fois mieux : voilà pourquoi le monde entier a abandonné les vieilles ampoules en une décennie.",
      "Les foyers améliorés (fatana mitsitsy) diffusés à Madagascar réduisent la consommation de charbon de 30 à 50 % : bon pour le budget des familles… et pour les forêts de la Grande Île !",
      "La majeure partie de l'électricité du réseau d'Antananarivo est d'origine hydraulique, grâce aux barrages comme Andekaleka sur la rivière Vohitra : une énergie renouvelable fournie par le cycle de l'eau… tant que les pluies arrosent les hautes terres !",
    ],
    experience: [
      "Le duel des marmites :",
      "Matériel : deux casseroles identiques, la même quantité d'eau, le même feu, un couvercle, une montre, un linge épais.",
      "Protocole : 1. Fais chauffer l'eau dans les deux casseroles sur le même type de feu : l'une couverte, l'autre non.",
      "2. Chronomètre pour chacune le temps nécessaire pour atteindre l'ébullition.",
      "3. Bonus : entoure l'une des casseroles d'un linge épais côté vent et recommence.",
      "Observation : la casserole couverte bout nettement plus vite : souvent 25 % de temps (donc de combustible) en moins ; le linge coupe-vent améliore encore le résultat.",
      "Conclusion : couvercle et isolation limitent les fuites thermiques : de simples gestes de conservation d'énergie font des économies bien réelles.",
    ],
  },
  substitutions: [
    { officiel: "Calorimètre de laboratoire", local: "Deux casseroles identiques + couvercle + montre" },
    { officiel: "Banc d'essai des frottements", local: "Roue de vélo retournée : libre, freinée, huilée" },
    { officiel: "Wattmètre", local: "Comparaison au toucher (prudence !) : ampoule chaude contre DEL froide" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe chaque perte à son remède : effet Joule, frottement, fuite thermique, rayonnement — a) couvercle isolant ; b) paroi réfléchissante ; c) lubrification ; d) fil conducteur plus gros.",
      items: [],
      corrige: [
        [{ text: "Effet Joule → " }, { text: "d", cle: true }, { text: " ; frottement → " }, { text: "c", cle: true }, { text: " ; fuite thermique → " }, { text: "a", cle: true }, { text: " ; rayonnement → " }, { text: "b", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi les câbles de transport de la JIRAMA sont épais ET sous haute tension, en citant la perte évitée.",
      items: [],
      corrige: [
        [{ text: "Les deux choix réduisent " }, { text: "l'effet Joule", cle: true }, { text: " : câble épais → moins de résistance ; haute tension → " }, { text: "courant plus faible, donc moins d'échauffement", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Classe en renouvelables et non renouvelables : soleil, pétrole lampant, vent, charbon de terre, eau d'un barrage, gaz butane. Justifie en une phrase.",
      items: [],
      corrige: [
        [{ text: "Renouvelables : " }, { text: "soleil, vent, eau d'un barrage", cle: true }, { text: " (sources reconstituées en permanence par la nature). Non renouvelables : " }, { text: "pétrole lampant, charbon de terre, gaz butane", cle: true }, { text: " (gisements fossiles qui " }, { text: "s'épuisent", cle: true }, { text: "). (0,5 point par source bien classée + 1 point pour la justification)" }],
      ],
    },
  ],
};

const S29 = {
  numero: 29, total: 34, unite: "IV", theme: "Lumière et son",
  titre: "Sources et récepteurs de lumière",
  objectif: "distinguer les sources primaires des sources secondaires et de classer les objets en opaques, translucides et transparents",
  documentation: DOC,
  support: "Bougie ou lampe, miroir, verre, papier calque ou sachet plastique, carton, papier aluminium, objets divers",
  image: "images/img_seance29.png",
  imageLegende: "Figure 23 — Feu, lampe, lune, lucioles : sources primaires et sources secondaires de lumière dans la nuit malgache",
  revision: {
    qa: [
      { q: "Cite des objets qui « donnent » de la lumière.", ra: "Le Soleil, une lampe, un feu, une bougie, une luciole." },
      { q: "Vois-tu un objet dans le noir complet ?", ra: "Non : sans lumière, aucune vision." },
      { q: "Que fait un miroir avec la lumière ?", ra: "Il la renvoie (il la réfléchit)." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "La nuit, la pleine lune éclaire si bien le village qu'on marche sans lampe ! Pourtant, l'astronome affirme : « La Lune n'émet aucune lumière : elle est aussi éteinte qu'un caillou. » Les enfants protestent : ils la voient briller !",
      "La Lune produit-elle sa lumière, ou la reçoit-elle d'ailleurs ?",
      "R.A. : Elle ne fait que renvoyer la lumière du Soleil : c'est une source secondaire.",
    ],
    apprenants: "Écoutent et débattent brièvement.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Sources et récepteurs de lumière ». Après cette séance, vous serez capables de distinguer sources primaires et secondaires et de classer les objets selon leur comportement face à la lumière.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien, volets fermés. 1) J'allume la bougie : on la voit, elle produit sa lumière. 2) J'éclaire le miroir avec la torche : il « brille » ; j'éteins : il redevient sombre. 3) Je place devant la torche successivement : la vitre (on voit tout à travers), le papier calque (on devine la lumière, pas les formes), le carton (rien ne passe). Notez chaque comportement.",
    apprenants: "Observent, testent d'autres objets (sachet, tissu, aluminium), remplissent un tableau.",
    technique: "Expérimentation, classification", support: "Torche, objets variés",
  },
  analyse: {
    qa: [
      { q: "Quand voit-on un objet ?", ra: "Quand de la lumière va de l'objet jusqu'à notre œil : émise par lui, ou renvoyée par lui." },
      { q: "Qu'est-ce qu'une source primaire ?", ra: "Un objet qui produit la lumière qu'il émet : Soleil, flamme, lampe, luciole, éclair." },
      { q: "Qu'est-ce qu'une source secondaire ?", ra: "Un objet qui renvoie (diffuse) la lumière reçue : Lune, miroir, mur clair, la page de ton livre." },
      { q: "Qu'est-ce qu'un objet transparent ? translucide ? opaque ?", ra: "Transparent : laisse passer la lumière et on voit les formes (vitre, eau claire). Translucide : laisse passer la lumière sans laisser voir les formes (calque, verre dépoli). Opaque : ne laisse rien passer (carton, métal, bois)." },
      { q: "Un récepteur de lumière, c'est quoi ?", ra: "Ce qui reçoit la lumière et réagit : l'œil, la peau qui bronze, le panneau solaire, la plante." },
    ],
    technique: "Questions-réponses, classification", support: "Tableau de classement",
  },
  synthese: {
    enseignant: "Donc, on ne voit un objet que si de la lumière va de lui à notre œil. Deux cas : la source primaire produit sa propre lumière (Soleil, flammes, lampes, lucioles) ; la source secondaire renvoie la lumière qu'elle reçoit (Lune, miroirs, murs, tous les objets éclairés !). Face à la lumière, les objets se classent en trois familles : transparents (la lumière passe, on distingue les formes), translucides (la lumière passe, les formes non) et opaques (rien ne passe : il y a une ombre derrière). Enfin, les récepteurs de lumière réagissent quand ils la reçoivent : l'œil bien sûr, mais aussi le panneau solaire, la peau, les plantes. Sans le savoir, la Lune nous rend un service de miroir géant !",
    apprenants: "Écoutent et recopient le classement.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Classe en source primaire ou secondaire : le Soleil, la Lune, une luciole, un miroir au soleil, l'écran allumé d'un téléphone, la neige éclairée.",
      items: [],
      corrige: [
        [{ text: "Primaires : " }, { text: "Soleil, luciole, écran allumé", cle: true }, { text: " ; secondaires : " }, { text: "Lune, miroir, neige", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Classe : vitre propre, papier calque, porte en bois, eau claire, sachet plastique blanc, tôle.",
      items: [],
      corrige: [
        [{ text: "Transparents : " }, { text: "vitre, eau claire", cle: true }, { text: " ; translucides : " }, { text: "calque, sachet blanc", cle: true }, { text: " ; opaques : " }, { text: "porte, tôle", cle: true }, { text: "." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, tableau",
  evaluation: [
    {
      consigne: "Vrai ou Faux ? Corrige si nécessaire :",
      items: [
        "a) La Lune est une source primaire.",
        "b) Un objet translucide laisse voir nettement les formes.",
        "c) On voit un mur parce qu'il diffuse la lumière reçue.",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " : elle renvoie la lumière du Soleil : source secondaire." }],
        [{ text: "b) " }, { text: "Faux", cle: true }, { text: " : il laisse passer la lumière mais brouille les formes ; c'est le transparent qui laisse voir." }],
        [{ text: "c) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Cite deux récepteurs de lumière et ce qu'ils font de la lumière reçue.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "l'œil (il forme les images de la vision)", cle: true }, { text: " ; " }, { text: "le panneau solaire (il produit de l'électricité)", cle: true }, { text: " ; la plante (photosynthèse) ; la peau (elle brunit)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["source primaire", "source secondaire", "transparent", "translucide", "opaque", "récepteur"],
    sections: [
      {
        titre: "1. Voir un objet",
        paras: [
          "On ne voit un objet que si de la lumière va de cet objet jusqu'à l'œil : soit il la produit, soit il la renvoie.",
          "Conséquence surprenante : dans une pièce absolument noire, tu ne vois RIEN, même après des heures : sans lumière qui entre dans l'œil, pas de vision. L'œil ne « lance » pas de rayons, il en reçoit !",
        ],
      },
      {
        titre: "2. Sources primaires et secondaires",
        paras: [
          "Le test pour les distinguer : « produirait-il de la lumière tout seul dans le noir total ? » Oui → source primaire ; non → source secondaire.",
        ],
        puces: [
          "source primaire : produit sa lumière : Soleil, étoiles, flammes, lampes, lucioles, éclairs ;",
          "source secondaire : renvoie la lumière reçue : Lune, miroirs, murs, nuages… et tous les objets éclairés.",
        ],
      },
      {
        titre: "3. Le comportement des objets",
        paras: [],
        puces: [
          "transparent : laisse passer la lumière, on voit les formes (vitre, eau claire, air) ;",
          "translucide : laisse passer la lumière, on ne voit pas les formes (calque, verre dépoli, sachet) ;",
          "opaque : arrête la lumière : il fait une ombre (bois, métal, carton, corps humain).",
        ],
      },
      {
        titre: "4. Les récepteurs de lumière",
        paras: [
          "Un récepteur réagit à la lumière reçue : l'œil (vision), la peau (bronzage), le panneau solaire (électricité), la plante (photosynthèse), la pellicule photo.",
        ],
      },
      {
        titre: "5. Exemples résolus",
        paras: [
          "Exemple 1 — La Lune brille fort les soirs de pleine lune. Est-elle une source primaire ? Justifie. Solution : non : la Lune ne produit aucune lumière ; elle renvoie la lumière du Soleil, comme un immense miroir de roche grise. C'est une source secondaire — dans le noir total (sans Soleil), elle serait invisible.",
          "Exemple 2 — Classe : vitre propre, papier calque, planche de bois, eau boueuse. Solution : vitre : transparente (formes visibles) ; calque : translucide (lumière oui, formes non) ; planche : opaque (ombre) ; eau boueuse : translucide, voire opaque si très chargée : la frontière dépend de l'épaisseur et de la concentration.",
        ],
      },
    ],
    saisTu: [
      "La lumière de la Lune met 1,3 seconde à nous parvenir… mais c'est de la lumière solaire qui a d'abord voyagé 8 minutes du Soleil à la Lune ! Et certaines étoiles que tu vois la nuit ont peut-être déjà disparu : leur lumière voyage depuis des milliers d'années.",
      "Les lucioles et certains poissons des abysses fabriquent leur propre lumière par réaction chimique : la bioluminescence. Ce sont des sources primaires vivantes — et froides : aucune énergie perdue en chaleur !",
    ],
    experience: [
      "Le trieur de lumière :",
      "Matériel : une torche, un mur clair, une caisse d'objets variés : verre, sachet plastique, tissu, aluminium, bouteille d'eau, carton…",
      "Protocole : 1. Le soir, éclaire chaque objet placé entre la torche et le mur.",
      "2. Lis le résultat sur le mur : ombre noire nette, lueur diffuse, ou presque pas d'ombre.",
      "3. Classe la caisse en trois tas : opaque, translucide, transparent.",
      "Observation : ombre noire nette → opaque ; lueur diffuse → translucide ; presque pas d'ombre → transparent.",
      "Conclusion : l'ombre portée est le révélateur du comportement optique d'un objet : chaque matériau traite la lumière à sa façon.",
    ],
  },
  substitutions: [
    { officiel: "Banc d'optique avec lanterne", local: "Torche ou lampe de téléphone dans une salle assombrie" },
    { officiel: "Plaques d'essai calibrées", local: "Vitre, papier calque ou sachet, carton : trio local transparent/translucide/opaque" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Une source secondaire : a) produit sa lumière b) renvoie la lumière reçue c) absorbe tout. 2. Le papier calque est : a) transparent b) translucide c) opaque. 3. La Lune brille car : a) elle brûle b) elle renvoie la lumière du Soleil c) elle est électrique. 4. L'œil est : a) une source b) un récepteur c) un miroir.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "b", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Explique pourquoi on voit la page blanche d'un livre en plein jour, mais plus du tout dans une pièce noire.",
      items: [],
      corrige: [
        [{ text: "La page est une " }, { text: "source secondaire : elle diffuse la lumière qu'elle reçoit", cle: true }, { text: " ; dans le noir, " }, { text: "aucune lumière à renvoyer", cle: true }, { text: " → on ne la voit plus." }],
      ],
    },
    {
      points: 3,
      consigne: "Donne un exemple d'objet translucide utile dans une maison malgache et explique son intérêt.",
      items: [],
      corrige: [
        [{ text: "Exemples : " }, { text: "tôle translucide ou plaque ondulée claire du toit", cle: true }, { text: " : elle " }, { text: "laisse entrer la lumière du jour", cle: true }, { text: " tout en cachant l'intérieur ; rideau clair, verre dépoli de la salle d'eau…" }],
      ],
    },
  ],
};

const S30 = {
  numero: 30, total: 34, unite: "IV", theme: "Lumière et son",
  titre: "La propagation rectiligne de la lumière",
  objectif: "montrer que la lumière se propage en ligne droite et de tracer la marche d'un rayon lumineux",
  documentation: DOC,
  support: "Torche ou bougie, trois cartons percés, ficelle, règle, farine ou fumée d'encens, tuyau souple",
  image: "images/img_seance30.png",
  imageLegende: "Figure 24 — L'œil ne voit la flamme que si les trous des cartons sont alignés : la lumière va tout droit",
  revision: {
    qa: [
      { q: "Qu'est-ce qu'une source primaire ?", ra: "Un objet qui produit sa propre lumière." },
      { q: "Que fait un objet opaque ?", ra: "Il arrête la lumière : il crée une ombre derrière lui." },
      { q: "Dans quel milieu la lumière du Soleil nous parvient-elle ?", ra: "À travers l'espace puis l'air : des milieux transparents." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au petit matin, les rayons du soleil traversent les trous de la paroi de la case : dans l'air poussiéreux, on voit des « barres de lumière » parfaitement droites, comme tracées à la règle !",
      "La lumière suit-elle toujours des lignes droites ? Peut-on le prouver ?",
      "R.A. : Oui, dans un milieu transparent et homogène : nous allons le démontrer avec les cartons percés.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « La propagation rectiligne de la lumière ». Après cette séance, vous serez capables de démontrer ce principe et de tracer la marche d'un rayon lumineux.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien deux expériences. 1) J'aligne trois cartons percés d'un trou entre la bougie et l'œil de Vony : elle voit la flamme. Je décale légèrement le carton du milieu : elle ne voit plus rien ! Passons une ficelle tendue dans les trois trous alignés : elle est parfaitement droite. 2) Je regarde la flamme à travers le tuyau droit : je la vois ; je plie le tuyau : plus rien.",
    apprenants: "Observent, refont l'expérience, vérifient l'alignement à la ficelle.",
    technique: "Expérimentation, démarche d'investigation", support: "Cartons percés, bougie, tuyau",
  },
  analyse: {
    qa: [
      { q: "Que faut-il pour voir la flamme à travers les cartons ?", ra: "Que les trois trous soient parfaitement alignés avec la flamme et l'œil." },
      { q: "Que prouve l'expérience ?", ra: "La lumière ne contourne pas les obstacles : elle se propage en ligne droite." },
      { q: "Dans quelles conditions ce principe est-il valable ?", ra: "Dans un milieu transparent ET homogène (air calme, eau pure, verre)." },
      { q: "Comment modélise-t-on le trajet de la lumière ?", ra: "Par le rayon lumineux : une droite fléchée indiquant le sens de propagation, de la source vers l'objet éclairé." },
      { q: "Un faisceau, c'est quoi ?", ra: "Un ensemble de rayons : celui de la torche s'élargit en cône." },
    ],
    technique: "Questions-réponses, modélisation", support: "Montage, tableau noir",
  },
  synthese: {
    enseignant: "Donc, le principe est établi : dans un milieu transparent et homogène, la lumière se propage en ligne droite. Preuves : les trous alignés des cartons, le tuyau qui ne « voit » plus quand on le plie, les rayons droits du matin dans la poussière. Pour représenter ce trajet, on trace un rayon lumineux : une droite avec une flèche, orientée de la source vers le récepteur : c'est un modèle, la lumière elle-même est invisible en vol ! Un ensemble de rayons forme un faisceau. Ce principe simple explique des merveilles : les ombres, les éclipses, la chambre noire : tout le programme de la prochaine séance !",
    apprenants: "Écoutent et s'entraînent à tracer des rayons à la règle.", technique: "Exposé", support: "Tableau noir, règle",
  },
  application: [
    {
      consigne: "Réponds :",
      items: [
        "a) Énonce le principe de propagation de la lumière.",
        "b) Comment représente-t-on un rayon lumineux ?",
      ],
      corrige: [
        [{ text: "a) " }, { text: "Dans un milieu transparent et homogène, la lumière se propage en ligne droite", cle: true }, { text: "." }],
        [{ text: "b) Par une " }, { text: "droite fléchée", cle: true }, { text: ", orientée " }, { text: "de la source vers l'objet éclairé", cle: true }, { text: " ; on la trace à la règle." }],
      ],
    },
    {
      consigne: "Explique pourquoi on ne voit plus la flamme quand on plie le tuyau.",
      items: [],
      corrige: [
        [{ text: "La lumière " }, { text: "ne peut pas suivre le coude", cle: true }, { text: " : elle va tout droit et " }, { text: "heurte la paroi du tuyau", cle: true }, { text: " au lieu d'atteindre l'œil." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, règle",
  evaluation: [
    {
      consigne: "Complète : la lumière se propage en ……… dans un milieu ……… et ……… ; on modélise son trajet par un ……… tracé à la règle avec une ……… .",
      items: [],
      corrige: [
        [{ text: "En " }, { text: "ligne droite", cle: true }, { text: " dans un milieu " }, { text: "transparent", cle: true }, { text: " et " }, { text: "homogène", cle: true }, { text: " ; par un " }, { text: "rayon lumineux", cle: true }, { text: " avec une " }, { text: "flèche", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Décris une expérience simple prouvant la propagation rectiligne, avec le matériel de ta maison.",
      items: [],
      corrige: [
        [{ text: "Exemple : " }, { text: "trois cartons percés alignés entre une bougie et l'œil", cle: true }, { text: " : on voit la flamme seulement si les trous sont alignés (vérification à la " }, { text: "ficelle tendue", cle: true }, { text: ") ; ou le tuyau droit puis plié." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["propagation rectiligne", "milieu transparent homogène", "rayon lumineux", "faisceau"],
    sections: [
      {
        titre: "1. Le principe",
        paras: [
          "Dans un milieu transparent et homogène (air calme, eau pure, verre, vide), la lumière se propage en ligne droite.",
          "Chaque mot compte : « transparent » (la lumière passe) et « homogène » (le milieu est partout identique). Au-dessus d'une route surchauffée, l'air n'est plus homogène : la lumière se courbe, et naissent les mirages !",
        ],
      },
      {
        titre: "2. Les preuves expérimentales",
        paras: [],
        puces: [
          "les cartons percés : on ne voit la source que si tous les trous sont alignés ;",
          "le tuyau : droit, on voit ; plié, on ne voit plus ;",
          "les rayons du soleil dans la poussière ou la brume : des lignes droites.",
        ],
      },
      {
        titre: "3. Le modèle du rayon lumineux",
        paras: [
          "Le rayon lumineux est une droite fléchée représentant le trajet de la lumière, orientée de la source vers le récepteur. Il se trace toujours à la règle. Un ensemble de rayons forme un faisceau (parallèle, convergent ou divergent).",
          "Règles du schéma d'optique : trait à la règle, flèche au milieu du rayon, sens de la source vers l'œil. Un schéma soigné, c'est déjà la moitié de la réponse !",
        ],
      },
      {
        titre: "4. Exemples résolus",
        paras: [
          "Exemple 1 — Rakoto tient trois cartons percés et ne voit la bougie que dans une seule position. Explique. Solution : la lumière se propage en ligne droite : l'œil ne reçoit la lumière de la flamme que si les trois trous et la flamme sont exactement alignés. Le moindre décalage bloque le trajet rectiligne.",
          "Exemple 2 — Pourquoi ne peut-on pas voir ce qui se passe derrière un mur, alors qu'on entend ? Solution : la lumière va en ligne droite et le mur opaque l'arrête : aucun rayon ne contourne l'obstacle. Le son, lui, est une vibration qui contourne les obstacles et se réfléchit : voir exige l'alignement, entendre non.",
        ],
      },
    ],
    saisTu: [
      "La lumière est la championne du monde de vitesse : 300 000 km par seconde ! En une seconde, elle ferait sept fois et demie le tour de la Terre. Rien dans l'Univers ne va plus vite qu'elle : c'est la limite absolue découverte par Einstein.",
      "Les géomètres et les maçons utilisent la propagation rectiligne tous les jours : viser un piquet, tendre un cordeau, contrôler l'alignement d'un mur… et le rayon laser des topographes n'est qu'un rayon lumineux très concentré !",
    ],
    experience: [
      "Le viseur à trois cartes :",
      "Matériel : trois cartes identiques, une aiguille, trois supports (savon ou pâte), une bougie, une ficelle.",
      "Protocole : 1. Perce un trou au même endroit dans les trois cartes (plie-les ensemble, coupe le coin du pli).",
      "2. Plante-les verticalement sur leurs supports, espacées de 20 cm.",
      "3. Aligne les trous pour voir la flamme, puis vérifie l'alignement en passant la ficelle tendue par les trois trous.",
      "4. Décale la carte du milieu d'un centimètre.",
      "Observation : trous alignés : la flamme est visible ; carte décalée d'un seul centimètre : plus rien.",
      "Conclusion : la lumière ne contourne pas les obstacles : elle suit une ligne parfaitement droite, matérialisée par la ficelle tendue.",
    ],
  },
  substitutions: [
    { officiel: "Banc d'optique et diaphragmes", local: "Trois cartes ou cartons percés plantés dans du savon, bougie ou torche" },
    { officiel: "Générateur de fumée", local: "Poussière de craie tapotée ou encens : les faisceaux deviennent visibles" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Vrai ou Faux (1 point chacun) : a) La lumière peut contourner un carton. b) Le rayon lumineux se trace à la règle. c) La flèche du rayon va de l'œil vers la source. d) Dans l'eau pure, la lumière va en ligne droite.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "Faux", cle: true }, { text: " ; b) " }, { text: "Vrai", cle: true }, { text: " ; c) " }, { text: "Faux", cle: true }, { text: " (de la source vers l'objet éclairé) ; d) " }, { text: "Vrai", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Amina se cache derrière un mur. Explique, à l'aide du principe de propagation, pourquoi elle ne voit plus la lampe de la cour.",
      items: [],
      corrige: [
        [{ text: "La lumière de la lampe " }, { text: "va en ligne droite et le mur opaque l'arrête", cle: true }, { text: " : aucun rayon " }, { text: "ne peut contourner le mur", cle: true }, { text: " pour atteindre son œil." }],
      ],
    },
    {
      points: 3,
      consigne: "Trace le schéma : une bougie B, deux cartons percés C1 et C2, un œil O. Place les trous pour que l'œil voie la flamme.",
      items: [],
      corrige: [
        [{ text: "Les quatre éléments " }, { text: "B, trou de C1, trou de C2 et O parfaitement alignés", cle: true }, { text: " sur une même droite ; rayon fléché de B vers O." }],
      ],
    },
  ],
};

const S31 = {
  numero: 31, total: 34, unite: "IV", theme: "Lumière et son",
  titre: "Ombres, chambre noire, phases de la Lune et éclipses",
  objectif: "appliquer la propagation rectiligne de la lumière aux ombres, à la chambre noire, aux phases de la Lune et aux éclipses",
  documentation: DOC,
  support: "Torche, ballon (Lune), globe ou gros fruit (Terre), boîte percée avec calque (chambre noire), objets opaques",
  image: "images/img_seance31.png",
  imageLegende: "Figure 25 — Ombre propre, ombre portée, éclipses : la géométrie des rayons rectilignes explique le ciel",
  revision: {
    qa: [
      { q: "Énonce le principe de propagation de la lumière.", ra: "En ligne droite dans un milieu transparent et homogène." },
      { q: "Que fait un objet opaque éclairé ?", ra: "Il arrête la lumière et crée une zone d'ombre." },
      { q: "La Lune est-elle une source primaire ?", ra: "Non : elle renvoie la lumière du Soleil." },
    ],
    technique: "Questions-réponses orales", support: "Ardoise",
  },
  miseEnSituation: {
    enseignant: [
      "Le soir, l'ombre de Fara s'allonge démesurément sur la route ; à midi, elle se blottit sous ses pieds. Et sa grand-mère raconte qu'un jour, en plein après-midi, le Soleil s'est « éteint » quelques minutes : les poules sont allées se coucher !",
      "Ombres qui changent, Lune qui croît et décroît, Soleil qui disparaît : un seul principe peut-il expliquer tout cela ?",
      "R.A. : Oui : la propagation rectiligne de la lumière.",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tableau noir",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Ombres, chambre noire, phases de la Lune et éclipses ». Après cette séance, vous serez capables d'interpréter tous ces phénomènes par des tracés de rayons.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien, salle assombrie. 1) La torche éclaire le ballon : sa moitié éclairée brille, sa moitié arrière est sombre (ombre propre) ; sur le mur, une tache sombre (ombre portée). 2) La boîte percée d'un trou, fermée par du calque : pointée vers la bougie… une image renversée apparaît ! 3) Je fais tourner le ballon-Lune autour du globe-Terre, la torche-Soleil fixe : regardez la partie éclairée visible changer de forme ; et quand les trois s'alignent : plus de lumière !",
    apprenants: "Observent les trois expériences, manipulent la maquette Soleil-Terre-Lune.",
    technique: "Expérimentation, simulation par maquette", support: "Torche, ballon, globe, chambre noire",
  },
  analyse: {
    qa: [
      { q: "Distingue ombre propre et ombre portée.", ra: "Ombre propre : la face non éclairée de l'objet lui-même. Ombre portée : la zone sombre projetée sur l'écran ou le sol derrière lui." },
      { q: "Qu'est-ce que la zone d'ombre ? la pénombre ?", ra: "La zone d'ombre ne reçoit aucune lumière de la source ; la pénombre n'en reçoit qu'une partie (source étendue)." },
      { q: "Pourquoi l'image de la chambre noire est-elle renversée ?", ra: "Les rayons vont tout droit et se croisent au petit trou : le haut de l'objet arrive en bas de l'image." },
      { q: "Qu'est-ce qui explique les phases de la Lune ?", ra: "La Lune, toujours à moitié éclairée par le Soleil, montre à la Terre une portion variable de sa moitié brillante selon sa position sur son orbite." },
      { q: "Et les éclipses ?", ra: "Éclipse de Soleil : la Lune s'interpose entre Soleil et Terre (son ombre balaie la Terre). Éclipse de Lune : la Terre s'interpose et la Lune traverse son ombre ; totale ou partielle selon l'alignement." },
    ],
    technique: "Questions-réponses, simulation", support: "Maquette, schémas au tableau",
  },
  synthese: {
    enseignant: "Donc, la propagation rectiligne explique le ciel entier ! L'objet opaque éclairé présente une ombre propre (sa face sombre) et projette une ombre portée ; entre lumière et ombre, la pénombre si la source est étendue. La chambre noire forme une image renversée car les rayons se croisent dans le petit trou. La Lune est toujours à moitié éclairée : selon sa position autour de la Terre, nous voyons plus ou moins de cette moitié : nouvelle lune, croissant, quartier, pleine lune : les phases, sur un cycle d'environ 29,5 jours. Enfin, les alignements parfaits produisent les éclipses : de Soleil quand l'ombre de la Lune touche la Terre, de Lune quand la Lune plonge dans l'ombre de la Terre : totales ou partielles. La grand-mère de Fara avait vu une éclipse totale de Soleil !",
    apprenants: "Écoutent et recopient les schémas.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Sur le schéma d'une balle éclairée par une lampe, place : ombre propre, ombre portée, zone éclairée.",
      items: [],
      corrige: [
        [{ text: "Zone éclairée : " }, { text: "face tournée vers la lampe", cle: true }, { text: " ; ombre propre : " }, { text: "face arrière de la balle", cle: true }, { text: " ; ombre portée : " }, { text: "tache sombre sur l'écran derrière", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Pendant une éclipse de Soleil, dans quel ordre sont alignés les trois astres ?",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Soleil – Lune – Terre", cle: true }, { text: " : l'ombre de la Lune balaie une partie de la Terre." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, schémas",
  evaluation: [
    {
      consigne: "Complète : la face non éclairée d'un objet est son ombre ……… ; la tache sombre sur l'écran est l'ombre ……… ; l'image de la chambre noire est ……… car les rayons se ……… dans le trou.",
      items: [],
      corrige: [
        [{ text: "Ombre " }, { text: "propre", cle: true }, { text: " ; ombre " }, { text: "portée", cle: true }, { text: " ; image " }, { text: "renversée", cle: true }, { text: " car les rayons se " }, { text: "croisent", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Explique la différence entre une éclipse de Lune et une pleine lune ordinaire, alors que dans les deux cas les trois astres sont presque alignés.",
      items: [],
      corrige: [
        [{ text: "À la pleine lune ordinaire, l'alignement est " }, { text: "imparfait : la Lune passe au-dessus ou au-dessous de l'ombre de la Terre", cle: true }, { text: " ; à l'éclipse, l'alignement est parfait et " }, { text: "la Lune traverse l'ombre terrestre", cle: true }, { text: " : elle s'assombrit." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["ombre propre", "ombre portée", "pénombre", "chambre noire", "phases de la Lune", "éclipse"],
    sections: [
      {
        titre: "1. Les ombres",
        paras: [
          "Un objet opaque éclairé présente : une zone éclairée (face vers la source), une ombre propre (sa face non éclairée), et projette une ombre portée sur l'écran derrière lui. Avec une source étendue apparaît la pénombre, zone partiellement éclairée.",
          "Les ombres existent PARCE QUE la lumière va en ligne droite : l'objet opaque bloque les rayons, et la zone privée de lumière dessine exactement le contour de l'objet.",
        ],
      },
      {
        titre: "2. La chambre noire",
        paras: [
          "Boîte fermée percée d'un petit trou : les rayons issus de l'objet se croisent dans le trou et forment sur le fond une image renversée : c'est l'ancêtre de l'appareil photo.",
          "Pourquoi renversée ? Le rayon du haut de l'objet file en ligne droite à travers le trou et atterrit en BAS du fond ; celui du bas atterrit en HAUT : le croisement des rayons retourne l'image.",
        ],
      },
      {
        titre: "3. Les phases de la Lune",
        paras: [
          "La Lune, éclairée à moitié par le Soleil, tourne autour de la Terre en 29,5 jours : nous voyons une portion variable de sa moitié brillante : nouvelle lune, premier croissant, premier quartier, pleine lune, dernier quartier…",
          "Piège à éviter : les phases ne sont PAS l'ombre de la Terre sur la Lune ! C'est simplement l'angle sous lequel nous voyons la moitié éclairée. L'ombre de la Terre n'intervient que lors des éclipses de Lune.",
        ],
      },
      {
        titre: "4. Les éclipses",
        paras: [],
        puces: [
          "éclipse de Soleil : alignement Soleil-Lune-Terre : l'ombre de la Lune balaie la Terre (totale ou partielle) ;",
          "éclipse de Lune : alignement Soleil-Terre-Lune : la Lune traverse l'ombre de la Terre et rougit ;",
          "ATTENTION : ne jamais regarder le Soleil directement, éclipse ou pas !",
        ],
      },
      {
        titre: "5. Exemples résolus",
        paras: [
          "Exemple 1 — Ce soir, la Lune est un fin croissant. Naivo affirme : « C'est l'ombre de la Terre. » A-t-il raison ? Solution : non : le croissant est une PHASE : nous voyons de biais la moitié éclairée de la Lune. Preuve : l'ombre de la Terre est ronde, or le bord sombre du croissant est courbé dans l'autre sens ; et une éclipse de Lune n'a lieu qu'à la pleine lune.",
          "Exemple 2 — Dans la chambre noire, l'image d'un arbre est renversée et petite. Que faire pour l'agrandir ? Solution : reculer le fond (allonger la boîte) ou rapprocher la chambre de l'arbre : l'image grandit car les rayons s'écartent après le trou. Trace deux rayons à la règle pour t'en convaincre !",
        ],
      },
    ],
    saisTu: [
      "Le 21 juin 2001, une éclipse totale de Soleil a traversé le sud de Madagascar : en pleine après-midi, la nuit est tombée quelques minutes près de Toliara, les étoiles sont apparues et la température a chuté ! La prochaine éclipse totale visible depuis la Grande Île se fera attendre : note-le, c'est un spectacle unique… à observer uniquement avec des lunettes spéciales.",
      "Le calendrier lunaire rythme encore bien des activités à Madagascar : les pêcheurs choisissent leurs nuits selon la lune, et le mois lunaire de 29,5 jours est à l'origine du mot « mois » dans presque toutes les langues du monde.",
    ],
    experience: [
      "Ta chambre noire :",
      "Matériel : une boîte de conserve propre (ou boîte en carton), une aiguille, du papier calque ou un sachet translucide, un élastique, un tissu sombre, une bougie.",
      "Protocole : 1. Perce un trou d'aiguille au centre du fond de la boîte.",
      "2. Ferme l'autre extrémité avec le calque bien tendu (élastique).",
      "3. Sous le tissu sombre, vise une fenêtre très éclairée ou la bougie.",
      "4. Agrandis légèrement le trou et recompare.",
      "Observation : l'image apparaît nette et RENVERSÉE sur le calque ; avec un trou plus grand, elle devient plus lumineuse mais floue.",
      "Conclusion : les rayons rectilignes se croisent dans le trou : petite ouverture = image nette et renversée. Ton œil fonctionne exactement sur ce principe — image renversée comprise, que le cerveau remet à l'endroit !",
    ],
  },
  substitutions: [
    { officiel: "Maquette Soleil-Terre-Lune motorisée", local: "Torche (Soleil), orange ou globe (Terre), citron vert ou balle (Lune) manipulés à la main" },
    { officiel: "Chambre noire d'optique", local: "Boîte de conserve ou carton + trou d'aiguille + papier calque" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "Associe : ombre propre, ombre portée, pénombre, chambre noire — a) image renversée ; b) face non éclairée de l'objet ; c) zone partiellement éclairée ; d) tache sombre sur l'écran.",
      items: [],
      corrige: [
        [{ text: "Ombre propre → " }, { text: "b", cle: true }, { text: " ; ombre portée → " }, { text: "d", cle: true }, { text: " ; pénombre → " }, { text: "c", cle: true }, { text: " ; chambre noire → " }, { text: "a", cle: true }, { text: ". (1 point par association)" }],
      ],
    },
    {
      points: 3,
      consigne: "Dessine l'alignement des trois astres pour une éclipse de Lune et indique où se trouve l'ombre.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Soleil – Terre – Lune alignés", cle: true }, { text: " ; la Lune est plongée dans " }, { text: "le cône d'ombre de la Terre", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "À midi, ton ombre est courte ; à 17 h, elle est très longue. Explique avec un schéma de rayons.",
      items: [],
      corrige: [
        [{ text: "Les rayons vont en ligne droite : à midi le Soleil est " }, { text: "haut, l'ombre portée est courte", cle: true }, { text: " ; le soir il est " }, { text: "bas sur l'horizon : les rayons rasants allongent l'ombre", cle: true }, { text: "." }],
      ],
    },
  ],
};

const S32 = {
  numero: 32, total: 34, unite: "IV", theme: "Lumière et son",
  titre: "Ondes sonores et ondes lumineuses : les caractéristiques",
  objectif: "distinguer les caractéristiques d'une onde lumineuse et d'une onde sonore : amplitude, fréquence, longueur d'onde",
  documentation: DOC,
  support: "Tambour ou boîte tendue d'un sachet, grains de riz, élastiques, corde, bassine d'eau, valiha ou guitare artisanale",
  image: "images/img_seance32.png",
  imageLegende: "Figure 26 — Une onde et ses caractéristiques : amplitude et longueur d'onde ; la fréquence fait le grave et l'aigu",
  revision: {
    qa: [
      { q: "Comment est produit un son ?", ra: "Par la vibration d'un objet : peau du tambour, corde, air dans une flûte." },
      { q: "Rappelle la définition de la fréquence (électricité).", ra: "Le nombre de motifs (cycles) par seconde, en hertz." },
      { q: "Cite une source sonore naturelle et une artificielle.", ra: "Naturelle : tonnerre, voix, vagues ; artificielle : radio, sonnerie, moteur." },
    ],
    technique: "Questions-réponses orales", support: "—",
  },
  miseEnSituation: {
    enseignant: [
      "Au concert du village, le valiha égrène des notes aiguës et cristallines, tandis que le gros tambour fait vibrer la poitrine avec ses notes graves. Et quand le musicien joue plus fort, le son porte plus loin, mais reste grave ou aigu de la même façon.",
      "Qu'est-ce qui fait qu'un son est fort ou faible, grave ou aigu ?",
      "R.A. : Deux caractéristiques différentes de l'onde sonore : l'amplitude (fort/faible) et la fréquence (grave/aigu).",
    ],
    apprenants: "Écoutent et répondent à l'oral.",
    technique: "Question problème", support: "Tambour, valiha ou corde tendue",
  },
  presentation: {
    enseignant: "Aujourd'hui nous allons apprendre : « Ondes sonores et ondes lumineuses ». Après cette séance, vous serez capables de distinguer l'amplitude, la fréquence et la longueur d'onde, pour le son et pour la lumière.",
    apprenants: "Écoutent.", technique: "Présentation orale", support: "Tableau noir, cahier",
  },
  observation: {
    enseignant: "Regardez et observez bien. 1) Des grains de riz sur la peau du tambour : je frappe doucement, ils sautillent à peine ; fort, ils bondissent : la vibration a une amplitude plus grande. 2) L'élastique tendu court vibre vite : son aigu ; long et détendu, il vibre lentement : son grave : c'est la fréquence. 3) Une pierre dans la bassine : des rides circulaires régulières s'éloignent : la distance entre deux rides successives, c'est la longueur d'onde. 4) Enfin, souvenez-vous de l'arc-en-ciel : la lumière blanche contient toutes les couleurs : chaque couleur correspond à une fréquence différente de l'onde lumineuse.",
    apprenants: "Observent, frappent, pincent, mesurent les rides.",
    technique: "Expérimentation, observation", support: "Tambour, riz, élastiques, bassine",
  },
  analyse: {
    qa: [
      { q: "Qu'est-ce qu'une onde ?", ra: "Une vibration qui se propage : rides sur l'eau, son dans l'air, lumière." },
      { q: "Que traduit l'amplitude pour le son ?", ra: "L'intensité sonore : grande amplitude = son fort ; petite = son faible." },
      { q: "Et la fréquence pour le son ?", ra: "La hauteur : haute fréquence = son aigu ; basse fréquence = son grave. En hertz." },
      { q: "Qu'est-ce que la longueur d'onde ?", ra: "La distance entre deux crêtes successives de l'onde (deux rides sur l'eau)." },
      { q: "Et pour la lumière, que traduisent amplitude et fréquence ?", ra: "L'amplitude : la luminosité (intensité lumineuse) ; la fréquence : la couleur." },
      { q: "Le son et la lumière voyagent-ils pareil ?", ra: "Non ! Le son a besoin d'un milieu matériel (air, eau, solide) et va à 340 m/s dans l'air ; la lumière traverse le vide à 300 000 km/s." },
    ],
    technique: "Questions-réponses, comparaison", support: "Expériences, tableau",
  },
  synthese: {
    enseignant: "Donc, le son et la lumière sont des ondes : des vibrations qui se propagent. Trois caractéristiques les décrivent. L'amplitude : la « hauteur » des oscillations : elle donne le volume sonore pour le son, la luminosité pour la lumière. La fréquence : le nombre de vibrations par seconde (hertz) : elle donne la hauteur du son (grave 100 Hz, aigu 5 000 Hz) et la couleur de la lumière (le rouge vibre moins vite que le bleu). La longueur d'onde : la distance entre deux crêtes successives, comme entre deux rides sur l'eau. Grande différence entre nos deux ondes : le son exige un milieu matériel (pas de son dans le vide !) et rampe à 340 m/s dans l'air, quand la lumière file à 300 000 km/s même dans le vide : voilà pourquoi l'éclair arrive avant le tonnerre !",
    apprenants: "Écoutent et recopient le tableau comparatif.", technique: "Exposé", support: "Tableau noir",
  },
  application: [
    {
      consigne: "Pour chaque changement, indique la caractéristique modifiée : a) je frappe le tambour plus fort ; b) je raccourcis la corde du valiha ; c) je baisse la flamme de la lampe.",
      items: [],
      corrige: [
        [{ text: "a) " }, { text: "l'amplitude augmente (son plus fort)", cle: true }, { text: " ; b) " }, { text: "la fréquence augmente (note plus aiguë)", cle: true }, { text: " ; c) " }, { text: "l'amplitude de l'onde lumineuse diminue (moins lumineux)", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "L'orage gronde : tu vois l'éclair puis, 3 secondes après, tu entends le tonnerre. À quelle distance est l'orage (v son = 340 m/s) ?",
      items: [],
      corrige: [
        [{ text: "d = 340 × 3 = " }, { text: "1 020 m ≈ 1 km", cle: true }, { text: " (la lumière, quasi instantanée, sert de top départ)." }],
      ],
    },
  ],
  applicationTechnique: "Travail en binôme", applicationSupport: "Ardoise, calcul posé",
  evaluation: [
    {
      consigne: "Complète le tableau : pour le SON, l'amplitude traduit ……… et la fréquence traduit ……… ; pour la LUMIÈRE, l'amplitude traduit ……… et la fréquence traduit ……… .",
      items: [],
      corrige: [
        [{ text: "Son : amplitude → " }, { text: "l'intensité (fort/faible)", cle: true }, { text: " ; fréquence → " }, { text: "la hauteur (grave/aigu)", cle: true }, { text: ". Lumière : amplitude → " }, { text: "la luminosité", cle: true }, { text: " ; fréquence → " }, { text: "la couleur", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Vrai ou Faux : « Le son peut se propager dans le vide, comme la lumière. » Justifie.",
      items: [],
      corrige: [
        [{ text: "" }, { text: "Faux", cle: true }, { text: " : le son a besoin d'un " }, { text: "milieu matériel qui vibre (air, eau, solide)", cle: true }, { text: " ; la lumière, elle, traverse le vide (le Soleil nous éclaire à travers l'espace vide)." }],
      ],
    },
  ],
  evaluationTechnique: "Travail individuel écrit", evaluationSupport: "Cahier",
  lecon: {
    motsCles: ["onde", "amplitude", "fréquence", "longueur d'onde", "intensité", "hauteur", "couleur"],
    sections: [
      {
        titre: "1. Le son et la lumière : des ondes",
        paras: [
          "Une onde est une vibration qui se propage, comme les rides à la surface de l'eau. Le son est la vibration de l'air (ou de l'eau, ou d'un solide) ; la lumière est une onde qui se propage même dans le vide.",
          "Attention : l'onde transporte de l'énergie, pas de la matière ! Le bouchon posé sur l'eau monte et descend au passage des rides, mais ne voyage pas avec elles.",
        ],
      },
      {
        titre: "2. Les trois caractéristiques",
        paras: [],
        puces: [
          "l'amplitude : la hauteur des oscillations → volume du son, luminosité de la lumière ;",
          "la fréquence : le nombre de vibrations par seconde (Hz) → hauteur du son (grave/aigu), couleur de la lumière ;",
          "la longueur d'onde : la distance entre deux crêtes successives.",
        ],
      },
      {
        titre: "3. Sons graves, sons aigus",
        paras: [
          "L'oreille humaine entend environ de 20 Hz (très grave) à 20 000 Hz (très aigu). Le gros tambour vibre lentement (grave), la petite corde du valiha vibre vite (aigu).",
          "Ne confonds pas les deux réglages : fort/faible dépend de l'AMPLITUDE ; grave/aigu dépend de la FRÉQUENCE. On peut jouer une note grave très fort et une note aiguë tout doucement !",
        ],
      },
      {
        titre: "4. Deux ondes très différentes",
        paras: [
          "Le son exige un milieu matériel et se propage à 340 m/s dans l'air. La lumière traverse le vide à 300 000 km/s. D'où le décalage éclair-tonnerre : 3 secondes d'écart ≈ 1 km de distance.",
        ],
      },
      {
        titre: "5. Exemples résolus",
        paras: [
          "Exemple 1 — Pendant l'orage, Vola compte 9 secondes entre l'éclair et le tonnerre. À quelle distance est l'orage ? Solution : la lumière arrive quasi instantanément ; le son parcourt 340 m/s. Distance = 340 × 9 = 3 060 m ≈ 3 km. Règle rapide : 3 secondes ≈ 1 km ✔.",
          "Exemple 2 — Deux cordes de valiha : l'une vibre à 200 Hz, l'autre à 800 Hz, avec la même force de pincement. Compare les deux sons. Solution : même amplitude : même volume sonore ; fréquences différentes : la corde à 800 Hz donne un son quatre fois plus « rapide », donc nettement plus AIGU ; celle à 200 Hz sonne plus grave.",
        ],
      },
    ],
    saisTu: [
      "Les chauves-souris de nos grottes « voient avec les oreilles » : elles émettent des ultrasons jusqu'à 100 000 Hz — cinq fois trop aigus pour ton oreille — et écoutent l'écho pour chasser dans le noir total ! Les baleines à bosse du canal de Sainte-Marie, elles, chantent si grave que leurs chants portent à des dizaines de kilomètres sous l'eau.",
      "Sur la Lune, sans atmosphère, le silence est absolu : aucun son ne peut s'y propager. Les astronautes d'Apollo communiquaient par radio… c'est-à-dire par ondes de la famille de la lumière, qui, elles, traversent le vide !",
    ],
    experience: [
      "L'orchestre des ondes :",
      "Matériel : élastiques d'épaisseurs différentes, une boîte ouverte, un sachet plastique, un bol, des grains de riz, une bassine d'eau.",
      "Protocole : 1. Tends les élastiques sur la boîte ouverte et pince-les un à un.",
      "2. Tends le sachet sur le bol, pose quelques grains de riz dessus, puis crie fort au-dessus.",
      "3. Dans la bassine, laisse tomber des gouttes d'eau régulières et observe les rides.",
      "Observation : l'élastique fin et tendu sonne aigu (haute fréquence), l'épais sonne grave ; les grains de riz dansent quand tu cries (l'amplitude transporte l'énergie) ; les rides sont régulièrement espacées : c'est la longueur d'onde.",
      "Conclusion : fréquence, amplitude et longueur d'onde se voient et s'entendent dans trois expériences de cuisine : les ondes sont partout autour de toi.",
    ],
  },
  substitutions: [
    { officiel: "Oscilloscope et microphone", local: "Grains de riz sur membrane tendue : l'amplitude devient visible" },
    { officiel: "Diapason", local: "Élastiques tendus de différentes longueurs, valiha, flûte de bambou" },
    { officiel: "Cuve à ondes", local: "Bassine d'eau calme + gouttes régulières : rides = ondes visibles" },
  ],
  exercicesNotes: [
    {
      points: 4,
      consigne: "QCM : 1. Un son fort a une grande : a) fréquence b) amplitude c) longueur. 2. Un son aigu a une haute : a) fréquence b) amplitude c) température. 3. La couleur de la lumière dépend de : a) l'amplitude b) la fréquence c) la vitesse. 4. Dans le vide se propage : a) le son b) la lumière c) les deux.",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "b", cle: true }, { text: " ; 2. " }, { text: "a", cle: true }, { text: " ; 3. " }, { text: "b", cle: true }, { text: " ; 4. " }, { text: "b", cle: true }, { text: ". (1 point par réponse)" }],
      ],
    },
    {
      points: 3,
      consigne: "Classe ces sources sonores en naturelles et artificielles : tonnerre, sonnerie du lycée, vagues de Foulpointe, klaxon, chant du coq, radio.",
      items: [],
      corrige: [
        [{ text: "Naturelles : " }, { text: "tonnerre, vagues, chant du coq", cle: true }, { text: " ; artificielles : " }, { text: "sonnerie, klaxon, radio", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Tu vois l'éclair et tu comptes 6 secondes avant le tonnerre. L'orage se rapproche-t-il s'il n'était qu'à 1 km il y a cinq minutes ? Calcule.",
      items: [],
      corrige: [
        [{ text: "d = 340 × 6 = " }, { text: "2 040 m ≈ 2 km", cle: true }, { text: " : l'orage " }, { text: "s'éloigne", cle: true }, { text: " (il était à 1 km)." }],
      ],
    },
  ],
};

module.exports = { seances: [S28, S29, S30, S31, S32] };
