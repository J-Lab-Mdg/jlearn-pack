// ============================================================
// Unité VI — Géologie (RAS : différencier les 3 groupes de roches) — 8 h
// ============================================================

const U = {
  num: "VI",
  titre: "Géologie",
  ras: "Différencier les 3 groupes de roches",
  valeurs: "Goût de l'excellence, rigueur",
  themes: ["La découverte des roches", "Les roches magmatiques", "Les roches sédimentaires",
    "Les roches métamorphiques", "Distinguer les 3 groupes de roches"],
  topics: [
    {
      type: "cours",
      titre: "La découverte des roches",
      theme: "Géologie",
      ras: "Différencier les 3 groupes de roches",
      valeurs: "Goût de l'excellence, rigueur",
      objectif: "observer et décrire des roches de l'environnement proche",
      supportMeta: "Échantillons de roches (granite, calcaire, sable, argile), loupe",
      revision: [
        ["Qu'est-ce qu'un minéral ?", "Un élément naturel qui constitue les roches du sol."],
        ["Où trouve-t-on des roches autour de nous ?", "Dans les montagnes, les rivières, les champs, les routes, les maisons."],
      ],
      mise: ["Regarde les pierres du chemin : sont-elles toutes identiques ?", "Non, certaines sont dures, d'autres friables, de couleurs et de textures différentes."],
      observation: "les échantillons de roches et de minéraux",
      observationSupport: "Échantillons : granite, calcaire, grès, argile, sable, loupe",
      qa: [
        ["Que voyez-vous sur les échantillons ?", "Des roches de couleurs, de duretés et de grains différents."],
        ["Comment décrire une roche ?", "Par sa couleur, sa dureté, ses grains (gros ou fins) et sa texture."],
        ["De quoi sont faites les roches ?", "De minéraux assemblés."],
        ["Où les trouve-t-on ?", "Dans le sous-sol, les montagnes, les rivières, et partout dans l'environnement."],
      ],
      synthese: "Donc, une roche est une matière solide naturelle formée de minéraux. Les roches sont partout autour de nous : montagnes, sols, rivières, constructions. On les décrit par leur couleur, leur dureté, leurs grains et leur texture.",
      motsCles: ["roches", "minéraux", "couleur", "dureté", "texture", "grains"],
      contenu: [
        { sousTitre: "1. Qu'est-ce qu'une roche ?", texte: "Une roche est une matière solide naturelle, formée de minéraux assemblés. Le granite, le calcaire, le grès ou l'argile sont des roches. Les roches forment la croûte terrestre et se rencontrent partout : montagnes, collines, sols, rivières." },
        { sousTitre: "2. Observer une roche", texte: "Pour décrire une roche, on observe plusieurs caractères.", liste: ["La couleur : gris, noir, blanc, rouge, jaune…","La dureté : se raye-t-elle facilement ? est-elle dure ?","Les grains : gros, moyens, fins, visibles à la loupe ou non.","La texture : lisse, rugueuse, feuilletée, stratifiée…"] },
        { sousTitre: "3. Les usages des roches", texte: "Les roches servent dans la vie quotidienne : pierres de construction, sable et gravier du béton, argile des briques, calcaire de la chaux, granit des dalles. Les minéraux extraits des roches servent aussi à fabriquer des objets." },
        { sousTitre: "4. Les trois grandes familles", texte: "Selon leur origine, on distingue trois groupes de roches : les roches magmatiques, les roches sédimentaires et les roches métamorphiques. Nous allons les découvrir dans les séances suivantes." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Une roche est formée de…", opts: ["minéraux", "animaux", "nuages"], ok: 0, expl: "Les roches sont des assemblages de minéraux." },
          { q: "Pour décrire une roche, on observe…", opts: ["sa couleur, sa dureté et ses grains", "son poids seulement", "son prix"], ok: 0, expl: "Plusieurs caractères permettent de la décrire." },
          { q: "Les roches se trouvent…", opts: ["partout dans l'environnement", "uniquement sous la mer", "seulement en ville"], ok: 0, expl: "Montagnes, sols, rivières…" },
          { q: "Une roche est…", opts: ["une matière solide naturelle", "un liquide", "un gaz"], ok: 0, expl: "Les roches sont des matières solides." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le granite est une roche.", rep: true, expl: "Le granite est une roche magmatique très répandue." },
          { txt: "Les roches sont toutes identiques.", rep: false, expl: "Elles diffèrent par leur origine, couleur, dureté et texture." },
          { txt: "Le sable est un grain de roche.", rep: true, expl: "Le sable provient de l'usure des roches." },
          { txt: "Les roches ne servent à rien.", rep: false, expl: "Elles servent à la construction, aux briques, au ciment…" },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Qu'est-ce qu'une roche ?", r: "Une roche est une matière solide naturelle formée de minéraux." },
          { q: "Cite trois caractères permettant de décrire une roche.", r: "La couleur, la dureté et la texture (les grains) permettent de décrire une roche." },
          { q: "Donne un usage des roches dans la vie quotidienne.", r: "Les roches servent à construire des maisons, des routes et des ponts (ou à fabriquer du ciment, des briques…)." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Une roche est formée de", suite: "minéraux" },
          { debut: "On observe la couleur, la dureté et les", suite: "grains" },
          { debut: "Les roches forment la", suite: "croûte terrestre" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Les roches magmatiques",
      theme: "Géologie",
      ras: "Différencier les 3 groupes de roches",
      valeurs: "Goût de l'excellence, rigueur",
      objectif: "expliquer l'origine des roches magmatiques et citer des exemples",
      supportMeta: "Échantillons de granite et de basalte, schéma du volcan",
      revision: [
        ["Qu'est-ce qu'une roche ?", "Une matière solide naturelle formée de minéraux."],
        ["Comment décrit-on une roche ?", "Par sa couleur, sa dureté, ses grains et sa texture."],
      ],
      mise: ["Dans les régions volcaniques, on trouve des pierres noires et dures. D'où viennent-elles ?", "Elles proviennent du refroidissement du magma, la roche fondue qui sort des volcans."],
      observation: "les échantillons de granite et de basalte, et le schéma d'un volcan",
      observationSupport: "Échantillons de granite et de basalte, schéma d'un volcan (magma, lave)",
      qa: [
        ["Que montrent les échantillons ?", "Le granite, gris avec des grains visibles ; le basalte, noir et plus fin."],
        ["D'où viennent ces roches ?", "Du magma : roche en fusion venue des profondeurs de la Terre."],
        ["Que se passe-t-il quand le magma refroidit ?", "Il durcit et devient une roche : une roche magmatique."],
        ["Pourquoi le granite et le basalte sont-ils différents ?", "Parce que le magma refroidit plus ou moins vite et à des profondeurs différentes."],
      ],
      synthese: "Donc, les roches magmatiques se forment par refroidissement du magma. Si le magma refroidit lentement en profondeur, il donne des roches à gros grains comme le granite ; s'il refroidit vite en surface (lave), il donne des roches à grains fins comme le basalte.",
      motsCles: ["roches magmatiques", "magma", "lave", "refroidissement", "granite", "basalte"],
      contenu: [
        { sousTitre: "1. L'origine des roches magmatiques", texte: "Sous la croûte terrestre se trouve le magma, une roche en fusion très chaude. Quand le magma refroidit, il durcit et forme une roche magmatique. Si le magma sort en surface, on parle de lave." },
        { sousTitre: "2. Les deux types", liste: ["Roches magmatiques de profondeur : le magma refroidit lentement sous terre, les minéraux ont le temps de grossir → roches à grains visibles (ex. granite).","Roches magmatiques de surface (volcaniques) : la lave refroidit vite à l'air ou dans l'eau, les grains sont fins → roches noires ou sombres (ex. basalte)."] },
        { sousTitre: "3. Des exemples", texte: "Le granite est une roche grise, rose ou blanche à grains visibles, très répandue sur les Hautes Terres de Madagascar (Antananarivo, Antsirabe…). Le basalte est une roche sombre, plus fine, que l'on trouve dans les zones volcaniques (Ankaratra, régions volcaniques)." },
        { sousTitre: "4. L'utilisation", texte: "Le granite est utilisé pour les constructions, les dalles, les monuments ; le basalte sert au concassé, à la construction de routes et à l'ornement." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les roches magmatiques se forment par…", opts: ["le refroidissement du magma", "l'accumulation de sable", "la cuisson d'argile"], ok: 0, expl: "Le magma en fusion refroidit et durcit." },
          { q: "Le granite est une roche…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 0, expl: "C'est une roche magmatique de profondeur." },
          { q: "Le basalte vient…", opts: ["d'une lave qui refroidit vite", "du sable tassé", "des coquillages"], ok: 0, expl: "Le basalte est une roche volcanique." },
          { q: "Le magma est…", opts: ["une roche en fusion", "de l'eau chaude", "du sable"], ok: 0, expl: "C'est la roche fondue des profondeurs." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le basalte est une roche à grains fins.", rep: true, expl: "Il refroidit vite, donc les grains sont fins." },
          { txt: "Le granite possède des grains visibles.", rep: true, expl: "Son refroidissement lent laisse grossir les cristaux." },
          { txt: "Les roches magmatiques se forment à partir du sable.", rep: false, expl: "Elles se forment à partir du magma." },
          { txt: "Il n'y a pas de roches magmatiques à Madagascar.", rep: false, expl: "Le granite et le basalte y sont présents." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment se forment les roches magmatiques ?", r: "Elles se forment par le refroidissement et la solidification du magma." },
          { q: "Pourquoi le granite a-t-il des gros grains ?", r: "Parce que son magma refroidit lentement en profondeur, ce qui laisse grossir les minéraux." },
          { q: "Cite deux roches magmatiques.", r: "Le granite et le basalte sont deux roches magmatiques." },
        ]},
        { type: "appariement", consigne: "Relie chaque roche à son origine.", pointsPar: 1, items: [{ g: ["Granite", "Basalte", "Magma", "Lave"], d: ["Roche en fusion en profondeur", "Refroidit vite en surface", "Refroidit lentement", "Magma sorti en surface"], pairs: [[0, 2], [1, 1], [2, 0], [3, 3]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Les roches sédimentaires",
      theme: "Géologie",
      ras: "Différencier les 3 groupes de roches",
      valeurs: "Goût de l'excellence, rigueur",
      objectif: "expliquer l'origine des roches sédimentaires et citer des exemples",
      supportMeta: "Échantillons de grès, de calcaire, d'argile, schéma en couches",
      revision: [
        ["Comment se forment les roches magmatiques ?", "Par le refroidissement du magma."],
        ["Cite une roche magmatique.", "Le granite (ou le basalte)."],
      ],
      mise: ["Au bord des rivières, le sable et l'argile s'accumulent. Que deviennent-ils avec le temps ?", "Ils se tassent et se cimentent : ils forment des roches sédimentaires."],
      observation: "les échantillons de grès, de calcaire et d'argile, et le schéma des couches",
      observationSupport: "Échantillons : grès, calcaire, argile ; schéma de dépôt en couches",
      qa: [
        ["Que voit-on sur les échantillons ?", "Des roches souvent en couches, formées de petits éléments (grains de sable, débris, restes d'êtres vivants)."],
        ["D'où viennent ces éléments ?", "De l'érosion : l'eau et le vent usent les roches, transportent les débris qui se déposent au fond des lacs, des rivières ou des mers."],
        ["Comment deviennent-ils des roches ?", "Ils s'accumulent, se tassent et se cimentent avec le temps : c'est la formation des roches sédimentaires."],
        ["Cite des exemples.", "Le grès (sable cimenté), le calcaire (débris de coquillages), l'argile."],
      ],
      synthese: "Donc, les roches sédimentaires se forment par l'accumulation de sédiments (sable, boue, débris de coquillages) qui se tassent et se cimentent. Le grès, le calcaire et l'argile sont des roches sédimentaires, souvent disposées en couches.",
      motsCles: ["roches sédimentaires", "sédiments", "érosion", "dépôt", "grès", "calcaire", "argile", "couches", "fossiles"],
      contenu: [
        { sousTitre: "1. La formation des roches sédimentaires", texte: "L'eau et le vent usent les roches : c'est l'érosion. Les débris (sable, boue, gravier) sont transportés par les rivières et se déposent au fond des lacs, des mers ou des deltas. Avec le temps, ces sédiments s'empilent, se tassent et se cimentent en roches." },
        { sousTitre: "2. Les caractères des roches sédimentaires", liste: ["Elles sont souvent disposées en couches (strates).","Elles sont formées de grains ou de débris liés.","Elles peuvent contenir des fossiles (restes d'êtres vivants).","Elles sont souvent plus tendres que les roches magmatiques."] },
        { sousTitre: "3. Des exemples", liste: ["Le grès : formé de grains de sable cimentés.","Le calcaire : formé de débris de coquillages ou de boues calcaires.","L'argile : formée de particules très fines déposées dans l'eau.","Le gravier et le sable : sédiments meubles qui deviendront des roches."] },
        { sousTitre: "4. À Madagascar", texte: "On trouve des grès dans certaines régions (ex. formations gréseuses), des calcaires dans les zones côtières et karstiques, et des argiles un peu partout, utilisées pour les briques et la poterie." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les roches sédimentaires se forment par…", opts: ["l'accumulation de sédiments", "le refroidissement du magma", "la fusion des métaux"], ok: 0, expl: "Les sédiments se déposent puis se cimentent." },
          { q: "Le grès est formé…", opts: ["de grains de sable cimentés", "de magma", "de fer fondu"], ok: 0, expl: "Le grès vient du sable." },
          { q: "L'érosion est…", opts: ["l'usure des roches par l'eau et le vent", "la fonte des roches", "le refroidissement de la lave"], ok: 0, expl: "L'érosion fournit les sédiments." },
          { q: "Une roche sédimentaire peut contenir…", opts: ["des fossiles", "du magma", "de la lave"], ok: 0, expl: "Les restes d'êtres vivants peuvent s'y fossiliser." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Les roches sédimentaires sont souvent en couches.", rep: true, expl: "Les sédiments s'empilent en strates." },
          { txt: "Le calcaire provient du magma.", rep: false, expl: "Le calcaire vient de débris et de boues sédimentaires." },
          { txt: "Le sable est un sédiment.", rep: true, expl: "Le sable est un débris de roche transporté par l'eau." },
          { txt: "Les roches sédimentaires se forment en un jour.", rep: false, expl: "Leur formation demande beaucoup de temps." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment se forment les roches sédimentaires ?", r: "Les sédiments (sable, boue, débris) s'accumulent, se tassent et se cimentent avec le temps." },
          { q: "Cite trois roches sédimentaires.", r: "Le grès, le calcaire et l'argile sont trois roches sédimentaires." },
          { q: "Pourquoi trouve-t-on des fossiles dans certaines roches ?", r: "Parce que les restes d'êtres vivants se déposent avec les sédiments et se fossilisent." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Les roches sédimentaires se forment par l'accumulation de", suite: "sédiments" },
          { debut: "Le grès est formé de sable", suite: "cimenté" },
          { debut: "Les roches sédimentaires sont souvent en", suite: "couches" },
        ]},
      ],
    },
    {
      type: "cours",
      titre: "Les roches métamorphiques",
      theme: "Géologie",
      ras: "Différencier les 3 groupes de roches",
      valeurs: "Goût de l'excellence, rigueur",
      objectif: "expliquer l'origine des roches métamorphiques et citer des exemples",
      supportMeta: "Échantillons de marbre et de gneiss, photos de strates déformées",
      revision: [
        ["Comment se forment les roches sédimentaires ?", "Par l'accumulation de sédiments qui se tassent et se cimentent."],
        ["Cite une roche sédimentaire.", "Le grès (ou le calcaire, l'argile)."],
      ],
      mise: ["Une roche peut-elle changer après sa formation ?", "Oui : sous l'effet de la chaleur et de la pression, une roche peut se transformer en une autre roche."],
      observation: "les échantillons de marbre et de gneiss, et les photos de roches déformées",
      observationSupport: "Échantillons de marbre et de gneiss, photos de strates plissées",
      qa: [
        ["Que montrent les échantillons ?", "Le marbre, blanc et cristallin ; le gneiss, avec des bandes de minéraux."],
        ["D'où viennent-ils ?", "De la transformation d'autres roches sous l'effet de la chaleur et de la pression : ce sont des roches métamorphiques."],
        ["Quelle roche donne le marbre ?", "Le calcaire transformé par la chaleur et la pression."],
        ["Qu'est-ce qui caractérise le gneiss ?", "Des bandes ou feuillets de minéraux visibles."],
      ],
      synthese: "Donc, les roches métamorphiques se forment par la transformation de roches déjà existantes, sous l'effet de la chaleur et de la pression dans les profondeurs. Le calcaire devient du marbre, le granite peut devenir du gneiss. Elles sont souvent dures et peuvent présenter des feuillets.",
      motsCles: ["roches métamorphiques", "transformation", "chaleur", "pression", "marbre", "gneiss", "feuillets"],
      contenu: [
        { sousTitre: "1. La transformation des roches", texte: "Dans les profondeurs de la Terre, les roches peuvent être soumises à une forte chaleur et à une forte pression. Elles se transforment alors, sans fondre, en de nouvelles roches : les roches métamorphiques. Le mot « métamorphique » vient du grec et signifie « qui change de forme »." },
        { sousTitre: "2. Des exemples de transformations", liste: ["Le calcaire, soumis à la chaleur et à la pression, devient du marbre.","L'argile peut devenir du schiste ou des roches plus dures.","Le granite peut se transformer en gneiss.","Le grès peut devenir du quartzite."] },
        { sousTitre: "3. Les caractères des roches métamorphiques", liste: ["Elles sont souvent très dures.","Elles peuvent présenter des feuillets ou des bandes (gneiss, schiste).","Leurs minéraux sont souvent visibles et orientés.","Elles ont parfois des cristaux brillants (marbre, quartzite)."] },
        { sousTitre: "4. Les usages", texte: "Le marbre est utilisé pour les constructions, les revêtements et les sculptures. Le gneiss sert dans la construction et le pavage. À Madagascar, on trouve du gneiss et du marbre dans les Hautes Terres et dans plusieurs régions." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Les roches métamorphiques se forment par…", opts: ["la transformation sous chaleur et pression", "l'accumulation de sable", "le refroidissement de la lave"], ok: 0, expl: "Chaleur et pression transforment les roches existantes." },
          { q: "Le marbre vient de la transformation du…", opts: ["calcaire", "granite", "sable"], ok: 0, expl: "Le calcaire devient du marbre." },
          { q: "Une caractéristique du gneiss est…", opts: ["des bandes de minéraux", "des couches de sable", "une couleur noire de lave"], ok: 0, expl: "Le gneiss montre des feuillets ou bandes." },
          { q: "Le mot « métamorphique » signifie…", opts: ["qui change de forme", "qui fond", "qui coule"], ok: 0, expl: "La roche change de forme sans fondre." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le marbre est une roche métamorphique.", rep: true, expl: "Il provient du calcaire transformé." },
          { txt: "Les roches métamorphiques fondent au cours de la transformation.", rep: false, expl: "Elles se transforment sans fondre." },
          { txt: "La pression peut transformer une roche.", rep: true, expl: "Chaleur et pression sont les moteurs de la transformation." },
          { txt: "Le calcaire est une roche métamorphique.", rep: false, expl: "Le calcaire est sédimentaire ; c'est le marbre qui est métamorphique." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Comment se forment les roches métamorphiques ?", r: "Elles se forment par transformation d'une roche existante sous l'effet de la chaleur et de la pression." },
          { q: "Quelle roche donne le marbre ?", r: "Le calcaire, transformé par la chaleur et la pression, donne le marbre." },
          { q: "Cite deux roches métamorphiques.", r: "Le marbre et le gneiss sont deux roches métamorphiques." },
        ]},
        { type: "appariement", consigne: "Relie chaque roche à sa transformation.", pointsPar: 1, items: [{ g: ["Calcaire", "Argile", "Granite", "Marbre"], d: ["Se transforme en gneiss", "Devient du marbre", "Est déjà métamorphique", "Peut devenir du schiste"], pairs: [[0, 1], [1, 3], [2, 0], [3, 2]] }] },
      ],
    },
    {
      type: "cours",
      titre: "Distinguer les 3 groupes de roches",
      theme: "Géologie",
      ras: "Différencier les 3 groupes de roches",
      valeurs: "Goût de l'excellence, rigueur",
      objectif: "classer des roches selon leur origine et comparer leurs propriétés",
      supportMeta: "Échantillons des 3 groupes, tableau comparatif, loupe",
      revision: [
        ["Comment se forment les roches magmatiques ?", "Par le refroidissement du magma."],
        ["Comment se forment les roches métamorphiques ?", "Par transformation sous chaleur et pression."],
      ],
      mise: ["Voici trois pierres : granite, grès, marbre. Comment les classer ?", "En observant leur origine : volcanique/magma, sédiment/sable, transformation de roche."],
      observation: "les échantillons des trois groupes et le tableau comparatif",
      observationSupport: "Échantillons : granite, grès, marbre ; tableau comparatif des 3 groupes",
      qa: [
        ["Quels sont les trois groupes de roches ?", "Les roches magmatiques, sédimentaires et métamorphiques."],
        ["Quelle est l'origine du granite, du grès, du marbre ?", "Magma pour le granite, sédiments pour le grès, transformation du calcaire pour le marbre."],
        ["Comment distinguer les groupes ?", "Par leur origine, leur texture, leurs grains, leurs couches ou leurs feuillets."],
        ["Comment peut-on classer une roche trouvée près de chez soi ?", "En l'observant (grains, couches, dureté, couleur) et en la comparant aux exemples."],
      ],
      synthese: "Donc, les trois groupes de roches se distinguent par leur origine : magma (magmatiques), sédiments (sédimentaires), transformation (métamorphiques). On les reconnaît grâce à leurs grains, leurs couches, leur dureté et leur texture.",
      motsCles: ["roches magmatiques", "roches sédimentaires", "roches métamorphiques", "origine", "classement"],
      contenu: [
        { sousTitre: "1. Le tableau comparatif", liste: ["Roches magmatiques : origine = refroidissement du magma ; caractères = grains visibles (granite) ou fins (basalte) ; exemples = granite, basalte.","Roches sédimentaires : origine = accumulation de sédiments ; caractères = souvent en couches, peuvent contenir des fossiles ; exemples = grès, calcaire, argile.","Roches métamorphiques : origine = transformation par chaleur et pression ; caractères = dures, parfois à feuillets ou bandes ; exemples = marbre, gneiss."] },
        { sousTitre: "2. Comment reconnaître une roche ?", liste: ["Observer la couleur.","Tester la dureté (griffe, frappe).","Observer les grains à la loupe (gros, fins, cristaux).","Chercher des couches ou des feuillets.","Chercher des fossiles (roches sédimentaires).","Comparer avec les exemples connus."] },
        { sousTitre: "3. L'importance du classement", texte: "Classer les roches aide à comprendre l'histoire de la Terre et le sous-sol de notre région. Cela sert aussi à choisir les matériaux de construction : granite pour les dalles, calcaire et argile pour le ciment et les briques, marbre pour les revêtements." },
        { sousTitre: "4. Les roches de la région", texte: "Dans chaque région, on peut observer et classer des roches : granite et gneiss dans les Hautes Terres, basalte dans les zones volcaniques, grès et calcaires dans certaines régions, argile et sable presque partout." },
      ],
      appExos: [
        { type: "qcm", consigne: "Encercle la bonne réponse.", pointsPar: 1, items: [
          { q: "Le granite appartient au groupe…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 0, expl: "Il vient du refroidissement du magma." },
          { q: "Le grès appartient au groupe…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 1, expl: "Il est formé de sable cimenté." },
          { q: "Le marbre appartient au groupe…", opts: ["magmatique", "sédimentaire", "métamorphique"], ok: 2, expl: "Il vient du calcaire transformé." },
          { q: "Les fossiles se trouvent surtout dans…", opts: ["les roches sédimentaires", "les roches magmatiques", "le magma"], ok: 0, expl: "Les sédiments peuvent renfermer des restes d'êtres vivants." },
        ]},
        { type: "vf", consigne: "Écris V si l'affirmation est vraie, F si elle est fausse.", pointsPar: 1, items: [
          { txt: "Le basalte est une roche magmatique.", rep: true, expl: "C'est une roche volcanique issue de la lave." },
          { txt: "Le calcaire est une roche métamorphique.", rep: false, expl: "Le calcaire est sédimentaire ; le marbre est métamorphique." },
          { txt: "Les roches métamorphiques sont souvent dures.", rep: true, expl: "Chaleur et pression les durcissent souvent." },
          { txt: "Toutes les roches ont la même origine.", rep: false, expl: "Elles ont trois origines différentes." },
        ]},
      ],
      evalExos: [
        { type: "qr", consigne: "Réponds par une phrase complète.", pointsPar: 2, items: [
          { q: "Cite les trois groupes de roches et leur origine.", r: "Les roches magmatiques (refroidissement du magma), sédimentaires (accumulation de sédiments) et métamorphiques (transformation par chaleur et pression)." },
          { q: "Comment reconnaître une roche sédimentaire ?", r: "Elle est souvent en couches, formée de grains, et peut contenir des fossiles." },
          { q: "Donne un exemple pour chaque groupe.", r: "Magmatique : le granite ; sédimentaire : le grès ; métamorphique : le marbre." },
        ]},
        { type: "completion", consigne: "Complète les phrases.", pointsPar: 1, items: [
          { debut: "Le granite est une roche", suite: "magmatique" },
          { debut: "Le grès est une roche", suite: "sédimentaire" },
          { debut: "Le marbre est une roche", suite: "métamorphique" },
        ]},
      ],
    },
  ],
};

module.exports = U;
