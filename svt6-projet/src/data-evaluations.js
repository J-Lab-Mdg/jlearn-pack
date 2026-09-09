// ============================================================
// data-evaluations.js — séances de révision et sujets d'examen
// par unité (1 révision + 1 sujet d'examen 6e par unité)
// ============================================================

const revisions = {
  I: {
    titre: "Révision — Unité I : Alimentation de l'homme",
    tableau: [
      ["Les aliments", "Les aliments donnent de l'énergie, font grandir et protègent la santé."],
      ["Origines", "Végétale (riz, fruits, légumes) et animale (viande, poisson, œufs, lait)."],
      ["Familles", "Énergétiques (riz, manioc), bâtisseurs (viande, poisson), protecteurs (fruits, légumes)."],
      ["Transformation", "Modifier l'aliment brut : cuisson, fermentation, séchage, mouture, pressage."],
      ["Conservation", "Protéger l'aliment : séchage, salage, fumage, froid, conserve, sucre."],
      ["Avantages", "Pas de gaspillage, aliments hors saison, hygiène, sécurité alimentaire, économie locale."],
    ],
    questions: [
      ["Pourquoi faut-il manger des aliments variés ?", "Pour avoir de l'énergie, grandir et rester en bonne santé."],
      ["Quelle est la différence entre transformer et conserver un aliment ?", "Transformer modifie l'aliment (cuisson, fermentation…) ; conserver le protège pour le manger plus tard."],
      ["Cite une technique de conservation et son principe.", "Le séchage : on enlève l'eau pour empêcher les micro-organismes de se développer."],
      ["Quel est un avantage de la transformation des aliments ?", "Elle crée des produits vendables et améliore l'économie locale."],
    ],
  },
  II: {
    titre: "Révision — Unité II : Organisation des êtres vivants",
    tableau: [
      ["Viviparité", "L'embryon se développe dans le corps de la mère ; le petit naît vivant (zébu, chien, humain)."],
      ["Oviparité", "La femelle pond des œufs ; le petit se développe dans l'œuf et sort par éclosion (poule, poisson, papillon)."],
      ["Ovoviviparité", "Les œufs restent dans le corps de la femelle ; le petit naît vivant (guppy, certains requins et serpents)."],
      ["Fleur", "Étamines (pollen) et pistil (ovules) ; pollinisation par le vent ou les insectes."],
      ["Cycle de la plante", "Graine → germination → plante → fleur → fruit et graines."],
      ["Multiplication végétative", "Bouturage, greffage, marcottage : plantes identiques à la mère, sans graine."],
    ],
    questions: [
      ["Compare le mode de reproduction de la poule et du zébu.", "La poule est ovipare (elle pond des œufs) ; le zébu est vivipare (le veau naît vivant)."],
      ["Qu'est-ce que la pollinisation ?", "Le transport du pollen des étamines vers le pistil, par le vent ou les insectes."],
      ["Explique la différence entre bouturage et greffage.", "Le bouturage plante un morceau de tige ; le greffage unit un greffon (variété) à un porte-greffe (racines)."],
      ["Quel est l'avantage de la reproduction sexuée ?", "Elle produit des plantes variées, mieux adaptées au milieu."],
    ],
  },
  III: {
    titre: "Révision — Unité III : Reproduction humaine",
    tableau: [
      ["Appareil masculin", "Testicules (spermatozoïdes), spermiductes (transport), vésicules séminales et prostate (sperme), urètre (sortie)."],
      ["Appareil féminin", "Ovaires (ovules), trompes (transport et fécondation), utérus (développement du bébé), vagin."],
      ["Fécondation", "Rencontre d'un spermatozoïde et d'un ovule, le plus souvent dans la trompe."],
      ["Grossesse", "L'œuf fécondé se fixe dans l'utérus ; le bébé se développe environ neuf mois."],
    ],
    questions: [
      ["Quel est le rôle des testicules ?", "Ils produisent les spermatozoïdes."],
      ["Quel est le rôle des ovaires ?", "Ils produisent les ovules."],
      ["Où se développe le bébé pendant la grossesse ?", "Dans l'utérus."],
      ["Qu'est-ce que la fécondation ?", "La rencontre et la fusion d'un spermatozoïde et d'un ovule."],
    ],
  },
  IV: {
    titre: "Révision — Unité IV : Santé et bien-être",
    tableau: [
      ["Appareil urinaire", "Reins (filtration du sang), uretères (transport), vessie (stockage), urètre (sortie)."],
      ["Rôle", "Éliminer les déchets du sang sous forme d'urine et maintenir l'eau du corps."],
      ["Hygiène", "Boire de l'eau, uriner dès le besoin, se laver chaque jour, porter des vêtements propres."],
      ["Signes d'alerte", "Douleur ou brûlure en urinant, urine anormale, envie fréquente : consulter un médecin."],
    ],
    questions: [
      ["Cite les organes de l'appareil urinaire.", "Les reins, les uretères, la vessie et l'urètre."],
      ["Pourquoi faut-il boire de l'eau ?", "Pour aider les reins à éliminer les déchets du sang."],
      ["Pourquoi ne faut-il pas se retenir d'uriner ?", "Parce que l'urine qui stagne peut favoriser les infections."],
      ["Que faire en cas de douleur en urinant ?", "En parler à un adulte et consulter un médecin."],
    ],
  },
  V: {
    titre: "Révision — Unité V : Environnement",
    tableau: [
      ["Approvisionnement", "Source, fontaine, rivière, lac, puits/forage, réseau (robinet)."],
      ["Problèmes d'accès", "Éloignement, pénurie en saison sèche, pollution, manque d'infrastructures."],
      ["Bassin versant", "Zone délimitée par des crêtes où toute l'eau de pluie s'écoule vers une même rivière."],
      ["Rôle du bassin", "Collecter, diriger et réguler l'eau ; eau potable, irrigation, hydroélectricité."],
      ["Protection", "Reboiser, éviter les brûlis et la pollution, économiser l'eau."],
      ["Vases communicants", "Dans des récipients reliés, le liquide s'établit au même niveau (gravité) ; château d'eau, irrigation."],
    ],
    questions: [
      ["Cite deux moyens d'approvisionnement en eau.", "La source et le puits (ou la rivière, la fontaine…)."],
      ["Décris la circulation de l'eau dans un bassin versant.", "La pluie ruisselle sur les versants, s'infiltre en partie et alimente la rivière qui draine le bassin."],
      ["Pourquoi le château d'eau est-il en hauteur ?", "Pour que l'eau descende par gravité vers les habitations (principe des vases communicants)."],
      ["Cite deux solutions pour améliorer l'accès à l'eau.", "Construire des puits et protéger les sources ; reboiser et économiser l'eau."],
    ],
  },
  VI: {
    titre: "Révision — Unité VI : Géologie",
    tableau: [
      ["Roche", "Matière solide naturelle formée de minéraux."],
      ["Magmatiques", "Refroidissement du magma : granite, basalte."],
      ["Sédimentaires", "Accumulation de sédiments : grès, calcaire, argile, souvent en couches, fossiles possibles."],
      ["Métamorphiques", "Transformation par chaleur et pression : marbre, gneiss."],
      ["Classement", "Couleur, dureté, grains, couches, feuillets, fossiles."],
    ],
    questions: [
      ["Qu'est-ce qu'une roche ?", "Une matière solide naturelle formée de minéraux."],
      ["Cite un exemple pour chaque groupe.", "Magmatique : granite ; sédimentaire : grès ; métamorphique : marbre."],
      ["Comment reconnaît-on une roche sédimentaire ?", "Elle est souvent en couches et peut contenir des fossiles."],
      ["Comment se forme le marbre ?", "Par transformation du calcaire sous l'effet de la chaleur et de la pression."],
    ],
  },
};

// Sujets d'examen 6e : mélange de types, barème par exercice
const examens = {
  I: {
    titre: "Sujet d'examen 6e — Unité I : Alimentation de l'homme",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "Le riz est un aliment…", opts: ["bâtisseur", "énergétique", "protecteur"], ok: 1, expl: "Le riz donne surtout de l'énergie." },
        { q: "La viande de zébu est un aliment…", opts: ["bâtisseur", "énergétique", "protecteur"], ok: 0, expl: "Elle fait grandir et répare le corps." },
        { q: "La confiture est obtenue par…", opts: ["fermentation", "séchage", "cuisson avec du sucre"], ok: 2, expl: "Le fruit est cuit avec du sucre." },
        { q: "Le poisson est conservé au village par…", opts: ["séchage", "congélation", "mouture"], ok: 0, expl: "Le séchage au soleil est courant." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "La conservation évite le gaspillage.", rep: true, expl: "Les aliments sont utilisés au lieu d'être jetés." },
        { txt: "Le froid accélère la dégradation des aliments.", rep: false, expl: "Le froid ralentit la dégradation." },
        { txt: "La transformation crée des produits vendables.", rep: true, expl: "Confitures, farines, huiles…" },
        { txt: "Un aliment moisi peut être mangé sans danger.", rep: false, expl: "Il peut rendre malade." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Qu'est-ce que la conservation des aliments ?", r: "La conservation des aliments consiste à les protéger pour pouvoir les manger plus tard." },
        { q: "Cite deux avantages de la transformation des aliments.", r: "Elle améliore le goût et crée des activités économiques locales." },
        { q: "Pourquoi faut-il manger des aliments variés ?", r: "Pour avoir de l'énergie, grandir et rester en bonne santé." },
      ]},
      { type: "appariement", consigne: "Relie chaque technique à son exemple.", pointsPar: 1, items: [{ g: ["Cuisson", "Fermentation", "Séchage", "Froid"], d: ["Poisson exposé au soleil", "Riz bouilli", "Viande au réfrigérateur", "Lait caillé"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "La conservation des aliments permet de les manger", suite: "plus tard" },
        { debut: "Manger des aliments sains en quantité suffisante, c'est la", suite: "sécurité alimentaire" },
        { debut: "Les aliments transformés se vendent sur les", suite: "marchés" },
      ]},
    ],
  },
  II: {
    titre: "Sujet d'examen 6e — Unité II : Organisation des êtres vivants",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "La poule est un animal…", opts: ["ovipare", "vivipare", "ovovivipare"], ok: 0, expl: "Elle pond des œufs." },
        { q: "Le zébu est un animal…", opts: ["ovipare", "vivipare", "ovovivipare"], ok: 1, expl: "Le veau naît vivant." },
        { q: "Le pollen est produit par…", opts: ["les étamines", "le pistil", "les pétales"], ok: 0, expl: "Les étamines sont les organes mâles." },
        { q: "Le marcottage consiste à…", opts: ["enraciner une branche encore attachée à la mère", "unir un greffon à un porte-greffe", "semer des graines"], ok: 0, expl: "La marcotte développe des racines avant d'être séparée." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "L'oviparité consiste à pondre des œufs.", rep: true, expl: "La femelle pond des œufs dehors." },
        { txt: "Le greffon donne les racines.", rep: false, expl: "C'est le porte-greffe qui donne les racines." },
        { txt: "La pollinisation se fait par le vent ou les insectes.", rep: true, expl: "Le pollen est transporté jusqu'au pistil." },
        { txt: "La graine germe sans eau.", rep: false, expl: "L'eau est indispensable à la germination." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Quelle est la différence entre oviparité et ovoviviparité ?", r: "En oviparité les œufs sont pondus dehors ; en ovoviviparité ils restent dans le corps de la femelle." },
        { q: "Décris le cycle de développement d'une plante.", r: "La graine germe, la plante grandit, fleurit et produit un fruit contenant de nouvelles graines." },
        { q: "Quel est l'intérêt du greffage ?", r: "Il permet d'obtenir une variété précise de fruits sur un pied résistant." },
      ]},
      { type: "appariement", consigne: "Relie chaque technique à son exemple.", pointsPar: 1, items: [{ g: ["Bouturage", "Greffage", "Marcottage", "Semis"], d: ["Manguier greffé", "Branche enracinée", "Graine de haricot", "Bouture de manioc"], pairs: [[0, 3], [1, 0], [2, 1], [3, 2]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le petit ovipare sort de l'œuf par l'", suite: "éclosion" },
        { debut: "Les ovules se trouvent dans le", suite: "pistil" },
        { debut: "La multiplication végétative donne des plantes", suite: "identiques" },
      ]},
    ],
  },
  III: {
    titre: "Sujet d'examen 6e — Unité III : Reproduction humaine",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "Les spermatozoïdes sont produits par…", opts: ["les testicules", "les ovaires", "l'utérus"], ok: 0, expl: "Les testicules produisent les cellules mâles." },
        { q: "Les ovules sont produits par…", opts: ["les testicules", "les ovaires", "la vessie"], ok: 1, expl: "Les ovaires produisent les cellules femelles." },
        { q: "Le bébé se développe dans…", opts: ["l'utérus", "la trompe", "le vagin"], ok: 0, expl: "L'utérus abrite le bébé." },
        { q: "La fécondation a lieu le plus souvent…", opts: ["dans la trompe", "dans l'ovaire", "dans l'urètre"], ok: 0, expl: "La trompe est le lieu de rencontre." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Le sperme contient des spermatozoïdes.", rep: true, expl: "Le sperme est composé de spermatozoïdes et de liquides." },
        { txt: "L'utérus produit les ovules.", rep: false, expl: "Les ovaires produisent les ovules." },
        { txt: "La grossesse dure environ neuf mois.", rep: true, expl: "C'est la durée habituelle chez l'être humain." },
        { txt: "L'urètre évacue aussi l'urine.", rep: true, expl: "L'urètre sert à l'évacuation du sperme et de l'urine." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Décris le trajet du sperme.", r: "Les spermatozoïdes sont produits par les testicules, passent par les spermiductes et sortent par l'urètre." },
        { q: "Décris le trajet de l'ovule.", r: "L'ovule est libéré par l'ovaire, passe dans la trompe puis arrive dans l'utérus." },
        { q: "Qu'est-ce que la fécondation ?", r: "La fécondation est la rencontre et la fusion d'un spermatozoïde et d'un ovule." },
      ]},
      { type: "appariement", consigne: "Relie chaque organe à son rôle.", pointsPar: 1, items: [{ g: ["Testicules", "Ovaires", "Trompe", "Utérus"], d: ["Développement du bébé", "Production des spermatozoïdes", "Production des ovules", "Transport de l'ovule"], pairs: [[0, 1], [1, 2], [2, 3], [3, 0]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le spermatozoïde est la cellule reproductrice", suite: "mâle" },
        { debut: "L'ovule est la cellule reproductrice", suite: "femelle" },
        { debut: "L'œuf fécondé se fixe dans l'", suite: "utérus" },
      ]},
    ],
  },
  IV: {
    titre: "Sujet d'examen 6e — Unité IV : Santé et bien-être",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "Le sang est filtré par…", opts: ["les reins", "la vessie", "les uretères"], ok: 0, expl: "Les reins fabriquent l'urine en filtrant le sang." },
        { q: "L'urine est stockée dans…", opts: ["la vessie", "l'urètre", "l'estomac"], ok: 0, expl: "La vessie est la poche de stockage." },
        { q: "Pour protéger l'appareil urinaire, il faut…", opts: ["boire assez d'eau", "boire très peu", "se retenir d'uriner"], ok: 0, expl: "L'eau aide les reins." },
        { q: "En cas de brûlure en urinant, il faut…", opts: ["consulter un médecin", "ne rien faire", "boire moins"], ok: 0, expl: "C'est un signe d'alerte." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "L'urine élimine les déchets du sang.", rep: true, expl: "Les déchets filtrés passent dans l'urine." },
        { txt: "La vessie filtre le sang.", rep: false, expl: "La vessie stocke l'urine." },
        { txt: "Se laver chaque jour protège la santé.", rep: true, expl: "L'hygiène quotidienne évite les infections." },
        { txt: "Une urine avec du sang est normale.", rep: false, expl: "C'est un signe qui doit faire consulter." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Cite les quatre organes de l'appareil urinaire.", r: "Les reins, les uretères, la vessie et l'urètre." },
        { q: "Explique le rôle de la vessie.", r: "La vessie stocke l'urine avant son évacuation par l'urètre." },
        { q: "Pourquoi est-il important de boire de l'eau ?", r: "L'eau aide les reins à filtrer le sang et à éliminer les déchets." },
      ]},
      { type: "appariement", consigne: "Relie chaque organe à son rôle.", pointsPar: 1, items: [{ g: ["Reins", "Uretères", "Vessie", "Urètre"], d: ["Canal de sortie", "Filtrent le sang", "Transportent l'urine", "Stockent l'urine"], pairs: [[0, 1], [1, 2], [2, 3], [3, 0]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "L'urine est produite par les", suite: "reins" },
        { debut: "Il faut uriner dès que le besoin se fait", suite: "sentir" },
        { debut: "Les signes anormaux doivent conduire à", suite: "consulter" },
      ]},
    ],
  },
  V: {
    titre: "Sujet d'examen 6e — Unité V : Environnement",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "Un bassin versant est délimité par…", opts: ["les crêtes", "les maisons", "les puits"], ok: 0, expl: "Les lignes de partage sont les crêtes." },
        { q: "Le château d'eau fonctionne grâce…", opts: ["à la gravité", "au vent", "à la chaleur"], ok: 0, expl: "L'eau descend par gravité." },
        { q: "La déforestation provoque…", opts: ["un ruissellement rapide et l'érosion", "plus d'eau dans les nappes", "des rivières plus propres"], ok: 0, expl: "Sans forêt, l'eau file vite et emporte le sol." },
        { q: "Dans les vases communicants, l'eau…", opts: ["s'établit au même niveau", "monte toujours plus haut", "disparaît"], ok: 0, expl: "L'eau cherche l'équilibre." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "L'eau de la rivière provient de la pluie du bassin versant.", rep: true, expl: "La pluie alimente les rivières et les sources." },
        { txt: "L'éloignement du point d'eau n'est pas un problème.", rep: false, expl: "Il rend l'accès difficile." },
        { txt: "Le reboisement protège le bassin versant.", rep: true, expl: "Les arbres retiennent l'eau et le sol." },
        { txt: "L'irrigation se fait uniquement avec des pompes électriques.", rep: false, expl: "Elle se fait souvent par gravité, avec des canaux." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Qu'est-ce qu'un bassin versant ?", r: "Une zone délimitée par des crêtes où toute l'eau de pluie s'écoule vers une même rivière." },
        { q: "Énonce le principe des vases communicants.", r: "Dans des récipients reliés entre eux, le liquide s'établit au même niveau." },
        { q: "Cite deux problèmes d'accès à l'eau.", r: "L'éloignement des points d'eau et la pollution (ou la pénurie saisonnière)." },
      ]},
      { type: "appariement", consigne: "Relie chaque élément à son rôle.", pointsPar: 1, items: [{ g: ["Source", "Château d'eau", "Irrigation", "Reboisement"], d: ["Distribue l'eau en hauteur", "Eau qui sort du sol", "Arrose les champs", "Protège le bassin"], pairs: [[0, 1], [1, 0], [2, 2], [3, 3]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le bassin versant collecte, dirige et régule l'", suite: "eau" },
        { debut: "L'eau rentre dans les maisons par les", suite: "canalisations" },
        { debut: "L'eau de pluie s'infiltre dans le sol grâce au", suite: "reboisement" },
      ]},
    ],
  },
  VI: {
    titre: "Sujet d'examen 6e — Unité VI : Géologie",
    exercices: [
      { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
        { q: "Le granite est une roche…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 0, expl: "Il vient du magma." },
        { q: "Le grès est une roche…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 1, expl: "Il est formé de sable cimenté." },
        { q: "Le marbre vient du calcaire transformé, c'est une roche…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 2, expl: "Chaleur et pression le transforment." },
        { q: "Les fossiles se trouvent surtout dans…", opts: ["les roches sédimentaires", "le magma", "le basalte"], ok: 0, expl: "Les sédiments peuvent contenir des restes fossilisés." },
      ]},
      { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
        { txt: "Les roches magmatiques viennent du refroidissement du magma.", rep: true, expl: "Le magma durcit en refroidissant." },
        { txt: "Le calcaire est une roche métamorphique.", rep: false, expl: "Le calcaire est sédimentaire." },
        { txt: "Le basalte est une roche volcanique.", rep: true, expl: "C'est une roche magmatique de surface." },
        { txt: "Les roches sont toutes identiques.", rep: false, expl: "Elles diffèrent par leur origine et leurs caractères." },
      ]},
      { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
        { q: "Comment se forment les roches sédimentaires ?", r: "Les sédiments s'accumulent, se tassent et se cimentent avec le temps." },
        { q: "Comment se forme le marbre ?", r: "Le marbre se forme par transformation du calcaire sous l'effet de la chaleur et de la pression." },
        { q: "Cite un usage des roches.", r: "Le granite sert à la construction ; le marbre aux revêtements ; l'argile aux briques." },
      ]},
      { type: "appariement", consigne: "Relie chaque roche à son groupe.", pointsPar: 1, items: [{ g: ["Granite", "Grès", "Marbre", "Basalte"], d: ["Sédimentaire", "Magmatique (surface)", "Métamorphique", "Magmatique (profondeur)"], pairs: [[0, 3], [1, 0], [2, 2], [3, 1]] }] },
      { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
        { debut: "Le granite possède des grains", suite: "visibles" },
        { debut: "Les roches sédimentaires sont souvent en", suite: "couches" },
        { debut: "La chaleur et la pression transforment les roches en roches", suite: "métamorphiques" },
      ]},
    ],
  },
};

module.exports = { revisions, examens };
