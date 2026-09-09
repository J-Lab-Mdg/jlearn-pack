// ============================================================
// Unité I — Alimentation de l'homme (RAS : appliquer des techniques
// de conservation et de transformation des aliments) — 12 h
// ============================================================

const U = {
  num: "I",
  titre: "Alimentation de l'homme",
  ras: "Appliquer des techniques de conservation et de transformation des aliments",
  valeurs: "Rigueur, responsabilité",
  themes: ["Les aliments de notre quotidien", "La transformation des aliments",
    "La conservation des aliments", "Les avantages de la conservation et de la transformation"],
  topics: [
    {
      type: "cours",
      titre: "Les aliments de notre quotidien",
      theme: "Alimentation de l'homme",
      ras: "Appliquer des techniques de conservation et de transformation des aliments",
      valeurs: "Rigueur, responsabilité",
      objectif: "identifier les grandes familles d'aliments et citer des aliments consommés à Madagascar",
      supportMeta: "Aliments locaux (riz, manioc, fruits, légumes), photos",
      revision: [
        ["Quels repas prends-tu dans une journée ?", "Le petit déjeuner, le déjeuner et le dîner."],
        ["Pourquoi devons-nous manger chaque jour ?", "Pour grandir, avoir de l'énergie et rester en bonne santé."],
      ],
      mise: ["Qu'est-ce que tu as mangé ce matin avant de venir à l'école ?", "Du riz, du pain, du café au lait, des fruits…"],
      observation: "les aliments disposés sur la table (ou leurs photos)",
      observationSupport: "Aliments locaux (riz, manioc, banane, tomate, poisson séché) ou photos",
      technAna: "Observation guidée et questionnement",
      qa: [
        ["Que voyez-vous sur la table ?", "Des aliments : du riz, du manioc, des fruits, des légumes, du poisson, de la viande."],
        ["Tous ces aliments sont-ils d'origine végétale ?", "Non, certains sont d'origine animale (poisson, viande, œufs, lait) et d'autres d'origine végétale (riz, manioc, fruits, légumes)."],
        ["Que nous apportent les aliments ?", "Ils nous apportent de l'énergie, des éléments pour grandir et pour rester en bonne santé."],
        ["D'où viennent les aliments que nous mangeons ?", "Ils viennent de l'agriculture (riz, fruits), de l'élevage (viande, lait), de la pêche (poisson) et des marchés ou étals."],
      ],
      synthese: "Donc, les aliments que nous mangeons chaque jour servent à vivre, grandir et rester en bonne santé. Ils sont d'origine végétale ou animale et viennent de l'agriculture, de l'élevage, de la pêche et des marchés.",
      motsCles: ["aliments", "origine végétale", "origine animale", "nutrition", "énergie"],
      contenu: [
        { sousTitre: "1. Pourquoi faut-il manger ?", texte: "Les aliments sont indispensables à la vie. Ils fournissent au corps de l'énergie pour travailler, jouer et apprendre. Ils apportent aussi les éléments nécessaires pour grandir, réparer le corps et rester en bonne santé. L'ensemble de ces besoins constitue la nutrition de l'être humain.", liste: ["Manger donne de l'énergie.","Manger permet de grandir.","Manger aide le corps à se réparer et à rester en bonne santé."] },
        { sousTitre: "2. Les origines des aliments", texte: "Les aliments proviennent du monde vivant. Certains sont d'origine végétale, d'autres d'origine animale.", liste: ["Origine végétale : riz, manioc, maïs, haricot, banane, mangue, légumes.","Origine animale : poisson, viande de zébu, poulet, œufs, lait, miel."] },
        { sousTitre: "3. Les grandes familles d'aliments", texte: "Pour bien se nourrir, on classe les aliments en plusieurs familles selon leur rôle dans le corps.", liste: ["Les aliments énergétiques : riz, maïs, manioc, huile, sucre (ils donnent de l'énergie).","Les aliments bâtisseurs : viande, poisson, œufs, lait, haricot (ils font grandir et réparent le corps).","Les aliments protecteurs : fruits et légumes (ils protègent la santé et aident à lutter contre les maladies)."] },
        { sousTitre: "4. Les aliments de notre région", texte: "À Madagascar, chaque région a ses aliments habituels. Le riz est la base de beaucoup de repas, avec du manioc, du maïs, des légumes, du poisson de mer ou de rivière, et selon les endroits de la viande, des fruits ou des produits de la pêche. Manger varié, c'est se donner le meilleur pour vivre sainement." },
        { sousTitre: "Exemple", texte: "Un repas équilibré à Madagascar peut contenir :", liste: ["du riz (aliment énergétique) ;","du poisson ou de la viande (aliment bâtisseur) ;","des brèdes ou des légumes (aliments protecteurs)."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les aliments servent d'abord à…", opts: ["nous habiller", "vivre, grandir et rester en bonne santé", "nous faire dormir"], ok: 1, expl: "Les aliments nourrissent le corps et le maintiennent en bonne santé." },
          { q: "Le riz est un aliment…", opts: ["d'origine animale", "d'origine végétale", "d'origine minérale"], ok: 1, expl: "Le riz est une plante, donc un aliment d'origine végétale." },
          { q: "La viande de zébu est un aliment…", opts: ["protecteur", "énergétique", "bâtisseur"], ok: 2, expl: "La viande fournit des éléments qui font grandir et réparent le corps." },
          { q: "Les fruits et légumes sont surtout des aliments…", opts: ["protecteurs", "bâtisseurs", "énergétiques"], ok: 0, expl: "Ils protègent la santé et participent à la lutte contre les maladies." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le manioc est un aliment d'origine animale.", rep: false, expl: "Le manioc est une plante : il est d'origine végétale." },
          { txt: "Manger nous donne de l'énergie.", rep: true, expl: "Les aliments fournissent l'énergie nécessaire au corps." },
          { txt: "Le poisson est un aliment bâtisseur.", rep: true, expl: "Le poisson apporte des éléments qui font grandir et réparent le corps." },
          { txt: "Il faut manger un seul type d'aliment pour être en bonne santé.", rep: false, expl: "Une bonne nutrition demande des aliments variés." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds aux questions par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite deux aliments d'origine végétale.", r: "Deux aliments d'origine végétale sont le riz et le manioc (ou la banane, le maïs…)." },
          { q: "Cite deux aliments d'origine animale.", r: "Deux aliments d'origine animale sont le poisson et la viande de zébu (ou les œufs, le lait…)." },
          { q: "Pourquoi faut-il manger des aliments variés ?", r: "Il faut manger des aliments variés pour avoir de l'énergie, grandir et rester en bonne santé." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les aliments donnent au corps de l'", suite: "énergie" },
          { debut: "Le riz est un aliment d'origine", suite: "végétale" },
          { debut: "Les fruits et légumes sont des aliments", suite: "protecteurs" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "La transformation des aliments",
      theme: "Alimentation de l'homme",
      ras: "Appliquer des techniques de conservation et de transformation des aliments",
      valeurs: "Rigueur, responsabilité",
      objectif: "citer des techniques de transformation des aliments et expliquer à quoi elles servent",
      supportMeta: "Aliments bruts et transformés (riz cru/riz cuit, fruits, poisson), images",
      revision: [
        ["Quelles sont les deux origines des aliments ?", "L'origine végétale et l'origine animale."],
        ["Cite deux aliments bâtisseurs.", "La viande, le poisson, les œufs, le lait (deux exemples suffisent)."],
      ],
      mise: ["Quand tu manges du riz, le riz est-il toujours cru ?", "Non, le riz est généralement cuit avant d'être mangé."],
      observation: "les aliments bruts et les aliments transformés présentés en classe (ou leurs images)",
      observationSupport: "Riz cru et riz cuit, fruit frais et confiture, poisson frais et poisson séché",
      technAna: "Observation comparée et questionnement",
      qa: [
        ["Que remarquez-vous entre le riz cru et le riz cuit ?", "Le riz cru est dur et sec ; le riz cuit est mou, gonflé et prêt à être mangé."],
        ["Qu'est-ce qui a changé le riz ?", "La cuisson : c'est une technique de transformation des aliments."],
        ["Le fruit frais et la confiture sont-ils identiques ?", "Non, la confiture est faite à partir du fruit transformé (cuit, sucré)."],
        ["Comment appelle-t-on ces changements ?", "La transformation des aliments : on change un aliment pour le rendre comestible, meilleur au goût ou plus facile à conserver."],
      ],
      synthese: "Donc, la transformation des aliments consiste à modifier un aliment brut pour le rendre comestible, améliorer son goût ou sa conservation. Les techniques courantes sont la cuisson, la fermentation, le séchage, la mouture et le pressage.",
      motsCles: ["transformation des aliments", "cuisson", "fermentation", "séchage", "mouture", "pressage"],
      contenu: [
        { sousTitre: "1. Qu'est-ce que la transformation des aliments ?", texte: "Transformer un aliment, c'est le modifier pour le rendre comestible, plus savoureux ou plus facile à utiliser et à conserver. L'aliment de départ s'appelle un aliment brut ; l'aliment obtenu s'appelle un aliment transformé." },
        { sousTitre: "2. Les principales techniques de transformation", texte: "Plusieurs techniques simples sont utilisées dans la vie quotidienne et dans les régions de Madagascar.", liste: ["La cuisson : bouillir, frire, griller, rôtir (riz, manioc, viande, poisson, légumes).","La fermentation : laisser des aliments se transformer avec le temps (yaourt, pain, le lait caillé, les brèdes fermentées).","Le séchage : exposer au soleil ou à l'air (poisson séché, tomates séchées).","La mouture et le broyage : réduire en poudre ou en farine (farine de maïs, riz pilé).","Le pressage : presser pour extraire un liquide (huile de coco, jus de fruits, huile de palme)."] },
        { sousTitre: "3. Pourquoi transformer les aliments ?", texte: "La transformation rend l'aliment prêt à être mangé, améliore son goût et sa digestion, et permet parfois de le conserver plus longtemps. Elle est aussi une activité économique : elle crée des produits vendus sur les marchés (confitures, farines, huiles, poissons séchés…)." },
        { sousTitre: "4. Quelques exemples malgaches", texte: "Au village comme en ville, on transforme facilement les produits locaux.", liste: ["Le riz est cuit pour être mangé.","Le manioc peut être bouilli, frit ou transformé en farine.","Le poisson peut être séché ou frit.","Les fruits peuvent devenir des confitures ou des jus.","Le lait peut devenir du yaourt ou du caillé (mofo, fromage blanc local)."] },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Transformer un aliment, c'est…", opts: ["le jeter", "le modifier pour le rendre comestible ou meilleur", "le peindre"], ok: 1, expl: "La transformation modifie l'aliment pour le rendre meilleur à manger." },
          { q: "La cuisson est une technique de…", opts: ["transformation", "transport", "vente"], ok: 0, expl: "La cuisson transforme l'aliment brut en aliment comestible." },
          { q: "Le riz cru devient du riz cuit grâce à…", opts: ["la fermentation", "la cuisson", "le pressage"], ok: 1, expl: "La cuisson change l'aliment pour le rendre comestible." },
          { q: "Le yaourt est obtenu par…", opts: ["la fermentation", "le séchage", "la mouture"], ok: 0, expl: "Le lait fermenté donne le yaourt." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le poisson séché est un aliment transformé.", rep: true, expl: "Le séchage est une technique de transformation (et de conservation)." },
          { txt: "La mouture sert à extraire le jus d'un fruit.", rep: false, expl: "La mouture réduit en poudre ; c'est le pressage qui extrait un jus." },
          { txt: "La transformation améliore le goût des aliments.", rep: true, expl: "Elle rend souvent l'aliment plus savoureux et plus digeste." },
          { txt: "Un aliment brut est déjà prêt à être mangé.", rep: false, expl: "L'aliment brut doit souvent être transformé avant consommation." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que la transformation des aliments ?", r: "La transformation des aliments consiste à modifier un aliment brut pour le rendre comestible, meilleur au goût ou plus facile à conserver." },
          { q: "Cite deux techniques de transformation.", r: "Deux techniques de transformation sont la cuisson et la fermentation (ou le séchage, la mouture, le pressage)." },
          { q: "Donne un exemple d'aliment transformé que tu connais.", r: "Exemple : la confiture, faite à partir de fruits ; ou le pain, le poisson séché, le riz cuit…" },
        ]},
        { type: "appariement", consigne: "Relie chaque technique à son exemple.", pointsPar: 1, items: [{ g: ["Cuisson", "Fermentation", "Séchage", "Pressage"], d: ["Poisson exposé au soleil", "Riz bouilli", "Jus de fruits extrait", "Yaourt"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
      ],
    },
    {
      type: "cours",
      titre: "La conservation des aliments",
      theme: "Alimentation de l'homme",
      ras: "Appliquer des techniques de conservation et de transformation des aliments",
      valeurs: "Rigueur, responsabilité",
      objectif: "citer les techniques de conservation des aliments et expliquer leur principe",
      supportMeta: "Poisson séché, tomates séchées, confiture, bocal, images",
      revision: [
        ["Cite deux techniques de transformation des aliments.", "La cuisson et la fermentation (ou le séchage…)."],
        ["Pourquoi transforme-t-on les aliments ?", "Pour les rendre comestibles, meilleurs au goût ou plus faciles à garder."],
      ],
      mise: ["Si tu laisses du poisson frais dehors pendant deux jours, que se passe-t-il ?", "Il se gâte, il pourrit et il ne faut plus le manger."],
      observation: "les aliments conservés présentés en classe (poisson séché, tomates séchées, confiture, bocal)",
      observationSupport: "Poisson séché, tomates séchées, confiture, bocal fermé, sel",
      technAna: "Observation et questionnement",
      qa: [
        ["Pourquoi le poisson frais se gâte-t-il ?", "Parce qu'il contient des micro-organismes qui le dégradent quand il reste à l'air et à la chaleur."],
        ["Comment garde-t-on le poisson sans qu'il se gâte ?", "En le séchant au soleil, en le salant, en le fumant ou en le mettant au froid."],
        ["Que voit-on sur les tomates séchées ?", "Elles sont ridées et plus petites : l'eau a été enlevée par le soleil, ce qui les protège."],
        ["Comment s'appellent ces méthodes ?", "Les techniques de conservation des aliments."],
      ],
      synthese: "Donc, la conservation des aliments consiste à les protéger contre la dégradation pour les garder plus longtemps. Les principales techniques sont le séchage, le salage, le fumage, le froid, la conserve en bocal et l'ajout de sucre.",
      motsCles: ["conservation des aliments", "séchage", "salage", "fumage", "réfrigération", "conserve", "stérilisation"],
      contenu: [
        { sousTitre: "1. Qu'est-ce que la conservation des aliments ?", texte: "Conserver un aliment, c'est le protéger afin de pouvoir le manger plus tard sans qu'il se gâte. Les aliments frais se dégradent vite à cause des micro-organismes, de l'air, de l'eau et de la chaleur. La conservation limite ces causes." },
        { sousTitre: "2. Les techniques de conservation", liste: ["Le séchage : le soleil ou l'air enlève l'eau (poisson séché, tomates séchées, piments séchés).","Le salage : le sel empêche les micro-organismes de se développer (poisson salé, viande salée).","Le fumage : la fumée et la chaleur sèchent et protègent l'aliment (poisson fumé, kitoza).","Le froid : le réfrigérateur ou le congélateur ralentit la dégradation (viande, poisson, légumes).","La conserve et la stérilisation : l'aliment est chauffé puis mis dans un bocal fermé (confitures, légumes en conserve).","Le sucre : le sucre protège les fruits (confitures, fruits confits)."] },
        { sousTitre: "3. Le principe commun", texte: "Toutes ces techniques empêchent les micro-organismes de se développer : en enlevant l'eau (séchage), en ajoutant du sel ou du sucre, en faisant baisser la température (froid) ou en chauffant (conserve). Ainsi, l'aliment reste comestible plus longtemps." },
        { sousTitre: "4. L'hygiène de la conservation", texte: "Un aliment conservé doit être propre, bien emballé et gardé dans de bonnes conditions. Un bocal abîmé, un aliment moisi ou une odeur suspecte indiquent que l'aliment ne doit plus être consommé." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Conserver un aliment, c'est…", opts: ["le jeter", "le protéger pour le manger plus tard", "le vendre"], ok: 1, expl: "La conservation protège l'aliment contre la dégradation." },
          { q: "Le séchage enlève de l'aliment…", opts: ["l'eau", "le goût", "la couleur"], ok: 0, expl: "Sans eau, les micro-organismes ne se développent presque plus." },
          { q: "Le réfrigérateur conserve les aliments grâce…", opts: ["à la chaleur", "au froid", "au sel"], ok: 1, expl: "Le froid ralentit la dégradation des aliments." },
          { q: "Les confitures sont conservées grâce…", opts: ["au sucre", "au sable", "à la pluie"], ok: 0, expl: "Le sucre protège les fruits dans les confitures." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le poisson séché est conservé par enlèvement de l'eau.", rep: true, expl: "Le séchage enlève l'eau, ce qui protège l'aliment." },
          { txt: "Le sel favorise la dégradation des aliments.", rep: false, expl: "Le sel empêche au contraire les micro-organismes de se développer." },
          { txt: "La chaleur du soleil peut servir à conserver les aliments.", rep: true, expl: "Le soleil sert au séchage, par exemple des poissons ou des tomates." },
          { txt: "Un aliment moisi peut encore être mangé sans danger.", rep: false, expl: "Un aliment moisi est contaminé et ne doit pas être consommé." },
        ]},
      ],
      evalExos: [
        { type: "appariement", consigne: "Relie chaque technique de conservation à son principe.", pointsPar: 1, items: [{ g: ["Séchage", "Salage", "Froid", "Stérilisation"], d: ["Refroidir dans un réfrigérateur", "Exposer au soleil pour enlever l'eau", "Chauffer puis fermer dans un bocal", "Ajouter du sel"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce que la conservation des aliments ?", r: "La conservation des aliments consiste à les protéger contre la dégradation afin de pouvoir les manger plus tard." },
          { q: "Cite deux techniques de conservation.", r: "Deux techniques de conservation sont le séchage et le salage (ou le fumage, le froid, la conserve)." },
          { q: "Pourquoi ne faut-il pas manger un aliment moisi ?", r: "Parce qu'un aliment moisi est dégradé par des micro-organismes et peut rendre malade." },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Les avantages de la conservation et de la transformation",
      theme: "Alimentation de l'homme",
      ras: "Appliquer des techniques de conservation et de transformation des aliments",
      valeurs: "Rigueur, responsabilité",
      objectif: "expliquer les avantages de la conservation et de la transformation des aliments",
      supportMeta: "Produits conservés, tableaux, documents sur les marchés locaux",
      revision: [
        ["Cite deux techniques de conservation.", "Le séchage et le salage (ou le fumage, le froid…)."],
        ["Pourquoi le froid conserve-t-il les aliments ?", "Parce qu'il ralentit la dégradation causée par les micro-organismes."],
      ],
      mise: ["Si la récolte de tomates est très abondante, que peut faire la famille pour ne pas les jeter ?", "Elle peut les sécher, les transformer en sauce ou en conserve pour plus tard."],
      observation: "les documents et les produits conservés (ou leurs photos) illustrant la vie d'une famille",
      observationSupport: "Produits conservés, photos d'un marché, tableau des saisons",
      technAna: "Observation et questionnement",
      qa: [
        ["Que gagne une famille qui conserve ses aliments ?", "Elle peut garder les aliments plus longtemps, ne pas les gâcher et les manger même hors saison."],
        ["Pourquoi les produits transformés se vendent-ils ?", "Parce qu'ils sont prêts à l'emploi, meilleurs au goût et utiles, ce qui crée une activité économique."],
        ["Que se passe-t-il si on ne conserve pas les aliments ?", "Ils se gâtent, se perdent, et la famille gaspille de la nourriture et de l'argent."],
        ["La conservation est-elle utile pour la santé ?", "Oui, car elle évite de manger des aliments abîmés et permet souvent une meilleure hygiène."],
      ],
      synthese: "Donc, la conservation et la transformation des aliments présentent plusieurs avantages : elles évitent le gaspillage, permettent de manger des aliments hors saison, améliorent l'hygiène et la sécurité alimentaire, et créent des activités économiques locales.",
      motsCles: ["avantages", "gaspillage", "hors saison", "sécurité alimentaire", "activités économiques", "hygiène"],
      contenu: [
        { sousTitre: "1. Éviter le gaspillage", texte: "Grâce à la conservation, les aliments qui ne sont pas consommés tout de suite ne sont pas jetés. Une famille qui sèche ses fruits, sale son poisson ou fait des confitures utilise bien sa récolte et économise de l'argent." },
        { sousTitre: "2. Manger toute l'année", texte: "Certains aliments ne sont disponibles qu'à certaines saisons. La transformation et la conservation permettent de les retrouver plus tard : fruits séchés en saison sèche, poisson salé quand la pêche est moins abondante, tomates en conserve pendant la saison des pluies." },
        { sousTitre: "3. Une meilleure hygiène et une meilleure sécurité alimentaire", texte: "Un aliment bien conservé reste propre et sain. Éviter les aliments abîmés, c'est éviter des maladies comme les maux de ventre ou les intoxications. C'est ce qu'on appelle la sécurité alimentaire : manger des aliments sains, en quantité suffisante." },
        { sousTitre: "4. Des activités économiques", texte: "La transformation crée des produits qui se vendent : confitures, farines, huiles, poissons séchés, jus. Elle donne du travail aux familles, aux coopératives et aux commerçants, et valorise les ressources locales." },
        { sousTitre: "5. Améliorer le goût et la variété", texte: "La transformation rend les aliments plus agréables et plus variés : un fruit devient confiture, le maïs devient farine, le lait devient yaourt. On peut ainsi préparer des repas plus variés et mieux adaptés à chaque saison." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Un des avantages de la conservation est…", opts: ["de jeter les aliments", "d'éviter le gaspillage", "d'augmenter les déchets"], ok: 1, expl: "La conservation permet d'utiliser les aliments au lieu de les jeter." },
          { q: "La conservation permet de manger certains aliments…", opts: ["seulement en été", "même hors saison", "uniquement crus"], ok: 1, expl: "Les aliments conservés restent disponibles toute l'année." },
          { q: "La transformation crée des produits…", opts: ["invendables", "vendables sur les marchés", "dangereux"], ok: 1, expl: "Elle crée une activité économique locale." },
          { q: "La sécurité alimentaire, c'est…", opts: ["manger des aliments sains en quantité suffisante", "manger uniquement des conserves", "ne jamais cuire les aliments"], ok: 0, expl: "Elle assure une alimentation saine et suffisante." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Conserver les aliments permet à une famille d'économiser.", rep: true, expl: "On évite de jeter de la nourriture et de l'argent." },
          { txt: "Les aliments transformés ne peuvent jamais être vendus.", rep: false, expl: "Les produits transformés se vendent sur les marchés." },
          { txt: "Manger des aliments abîmés peut rendre malade.", rep: true, expl: "Les aliments dégradés peuvent provoquer des maladies." },
          { txt: "La transformation améliore seulement le poids des aliments.", rep: false, expl: "Elle améliore le goût, la conservation et la valorisation économique." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite un avantage de la conservation des aliments.", r: "La conservation évite le gaspillage et permet de manger les aliments même hors saison." },
          { q: "Pourquoi la transformation des aliments est-elle utile à l'économie locale ?", r: "Elle crée des produits vendables (confitures, farines, poissons séchés) qui donnent du travail et valorisent les ressources locales." },
          { q: "Qu'est-ce que la sécurité alimentaire ?", r: "C'est le fait de pouvoir manger des aliments sains, en quantité suffisante, sans risque pour la santé." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "La conservation évite le", suite: "gaspillage" },
          { debut: "Les aliments conservés se mangent même", suite: "hors saison" },
          { debut: "Manger des aliments sains en quantité suffisante, c'est la", suite: "sécurité alimentaire" },
        ]},
      ],
    },
  ],
};

module.exports = U;
