// Français T5 — ANNEXES 1 à 6 + page finale
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, unitBanner, img, pageBreak, sub, cell, bookmarkTitle } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "4A235A"; // violet annexes
const SHADE = "E8DAEF";

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.BLUE }), ...(expl ? [run("  —  " + expl)] : [])]);

function head(bm, title, subtitle) {
  return [
    unitBanner(title, COLOR, bm),
    p("", { after: 80 }),
    ...(subtitle ? [p([run(subtitle, { italic: true, color: C.GRAY, size: 26 })], { center: true, after: 140 })] : []),
  ];
}

// ============ ANNEXE 1 — IMAGIER ============
function theme(imgFile, title, color, words) {
  return [
    p([run(title, { bold: true, color, size: 32 })], { after: 60 }),
    img(imgFile, 300, 768 / 1376),
    ...words.map(([w, d]) => mot(w, d)),
    p("", { after: 100 }),
  ];
}
function annexe1() {
  return [
    ...head("annex1", "ANNEXE 1 — L'IMAGIER DES 6 THÉMATIQUES",
      "Tout le lexique de l'année, thème par thème — à relire avant chaque test !"),
    ...theme("u1_environnement.png", "UNITÉ 1 — L'ENVIRONNEMENT", "1E8449", [
      ["la forêt, la rivière, la colline", "les éléments de la nature."],
      ["la dégradation", "quand la nature s'abîme : feux de brousse, déboisement, pollution."],
      ["la protection", "reboiser, trier les déchets, protéger les espèces."],
      ["le lémurien, le caméléon, le baobab", "les trésors de Madagascar."],
      ["préfixes et suffixes", "dé-/re- : déboiser, reboiser ; -tion : la protection."],
    ]),
    ...theme("u2_voyage.png", "UNITÉ 2 — LE VOYAGE", "1F618D", [
      ["les transports", "le taxi-brousse, l'autocar, la pirogue, l'avion, le train."],
      ["les établissements", "l'hôtel, le gîte, le restaurant, la gare routière."],
      ["préparer le voyage", "le billet, la valise, la gourde, la carte, la réservation."],
      ["la destination", "la plage, l'île, le parc national, les hautes terres."],
      ["les adjectifs du voyage", "magnifique, célèbre, régional → des sites régionaux !"],
    ]),
    ...theme("u3_services.png", "UNITÉ 3 — LES SERVICES PUBLICS", "6C3483", [
      ["les services", "la mairie, la poste, l'école, l'hôpital, la police, les pompiers."],
      ["le personnel", "le maire, le facteur, l'instituteur, l'infirmière, le policier."],
      ["les papiers", "l'acte de naissance, le formulaire, le guichet, le timbre."],
      ["les actions", "remplir, envoyer, délivrer, soigner, protéger, distribuer."],
    ]),
    ...theme("u4_loisirs.png", "UNITÉ 4 — LES LOISIRS", "D35400", [
      ["les familles de loisirs", "sportifs, artistiques, culturels, numériques, les jeux."],
      ["les expressions", "faire du vélo, jouer aux cartes, pratiquer un sport, aller au cinéma."],
      ["les avantages", "se distraire, se déstresser, se faire des amis."],
      ["les inconvénients", "la perte de temps, le gaspillage, la fatigue."],
      ["le fanorona", "le jeu traditionnel malgache qui muscle l'esprit !"],
    ]),
    ...theme("u5_metiers.png", "UNITÉ 5 — LES MÉTIERS", "B03A2E", [
      ["les trois secteurs", "primaire (la nature), secondaire (on transforme), tertiaire (on sert)."],
      ["les métiers", "le cultivateur, le pêcheur, le charpentier, le forgeron, la commerçante."],
      ["les lieux de travail", "la rizière, l'atelier, l'usine, le marché, le bureau, l'hôpital."],
      ["les outils", "la bêche, le filet, la scie, le marteau, l'enclume, la balance."],
      ["les matières premières", "le riz, le poisson, le bois, le coton, le fer."],
    ]),
    ...theme("u6_contes.png", "UNITÉ 6 — LES CONTES ET LÉGENDES", "AD1457", [
      ["les personnages", "le roi, la reine, la princesse, le héros, l'héroïne."],
      ["les maléfiques", "la sorcière, le sortilège, la sorcellerie."],
      ["les créatures", "le géant, le génie — comme Darafify le bienfaiteur !"],
      ["les formules", "il était une fois… ils vécurent heureux et eurent beaucoup d'enfants."],
      ["le schéma narratif", "situation initiale, élément perturbateur, péripéties, résolution, situation finale."],
    ]),
  ];
}

// ============ ANNEXE 2 — GUIDE DU RÉDACTEUR ============
function annexe2() {
  const row3 = (a, b, c, opts = {}) => new TableRow({ children: [
    cell([fp([run(a, { bold: opts.h, size: SZ.FICHE })])], { w: 2600, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(b, { bold: opts.h, size: SZ.FICHE })])], { w: 3900, shade: opts.h ? SHADE : undefined }),
    cell([fp([run(c, { bold: opts.h, size: SZ.FICHE })])], { w: 3900, shade: opts.h ? SHADE : undefined }),
  ]});
  return [
    ...head("annex2", "ANNEXE 2 — LE GUIDE DU RÉDACTEUR",
      "Les trois types de textes de l'année : décrire, expliquer, raconter."),
    sub("Le tableau des trois types de textes :"),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      row3("", "BUT ET QUESTIONS", "OUTILS ET TEMPS", { h: true }),
      row3("DESCRIPTIF (U1, U2, U3)", "faire voir : comment est-ce ? où est-ce ?",
        "adjectifs, compléments du nom, CC de lieu, prépositions — au présent."),
      row3("EXPLICATIF (U4, U5)", "faire comprendre : pourquoi ? comment ?",
        "connecteurs de cause (car, parce que, grâce à…), connecteurs d'ordre — au présent."),
      row3("NARRATIF (U6)", "raconter une histoire : que s'est-il passé ?",
        "formules du conte, connecteurs du récit (soudain…) — imparfait + passé composé."),
    ]}),
    p("", { after: 120 }),
    sub("Le plan du texte DESCRIPTIF (un lieu, un service) :"),
    p("1. Je présente (qu'est-ce que c'est ? où ?) — 2. Je décris (les parties, du général au détail) — 3. Je donne le rôle ou mon impression.", { after: 100 }),
    sub("Le plan du texte EXPLICATIF (un jeu, un métier) :"),
    p("1. La question d'accroche (« Pourquoi dit-on que… ? ») — 2. L'explication dans l'ordre (premièrement, ensuite, enfin) — 3. La justification (parce que, grâce à, donc !).", { after: 100 }),
    sub("Le plan du texte NARRATIF — le schéma narratif en 5 étapes :"),
    pr([run("1. Situation initiale ", { bold: true, color: C.BLUE }), run("(« Il était une fois… », imparfait) → ")], { after: 40 }),
    pr([run("2. Élément perturbateur ", { bold: true, color: C.RED }), run("(« Un jour… », passé composé) → ")], { after: 40 }),
    pr([run("3. Péripéties ", { bold: true, color: C.BLUE }), run("(« Alors… Soudain… ») → ")], { after: 40 }),
    pr([run("4. Résolution ", { bold: true, color: C.GREEN }), run("(« Heureusement… ») → ")], { after: 40 }),
    pr([run("5. Situation finale ", { bold: true, color: C.BLUE }), run("(« Depuis ce jour… Ils vécurent heureux. »)")], { after: 100 }),
    sub("La routine de l'écrivain, pour toutes les rédactions :"),
    p("1. Je PLANIFIE (mes idées en mots-clés, mon plan). 2. Je RÉDIGE (des phrases complètes, les connecteurs). 3. Je RELIS avec ma grille (accords, ponctuation, majuscules). 4. J'AMÉLIORE (je remplace les répétitions par des pronoms, j'enrichis avec des adjectifs et des adverbes)."),
  ];
}

// ============ ANNEXE 3 — CONJUGAISON ============
function conjTable(title, forms) {
  // forms: [ [pronom, présent, imparfait, futur, passé composé] x6 ]
  const hd = new TableRow({ children: [
    cell([fp([run(title, { bold: true, color: COLOR, size: SZ.FICHE })])], { w: 1800, shade: SHADE }),
    cell([fp([run("PRÉSENT", { bold: true, size: SZ.FICHE })])], { w: 2000, shade: SHADE }),
    cell([fp([run("IMPARFAIT", { bold: true, size: SZ.FICHE })])], { w: 2100, shade: SHADE }),
    cell([fp([run("FUTUR", { bold: true, size: SZ.FICHE })])], { w: 2100, shade: SHADE }),
    cell([fp([run("PASSÉ COMPOSÉ", { bold: true, size: SZ.FICHE })])], { w: 2400, shade: SHADE }),
  ]});
  const rows = forms.map(f => new TableRow({ children: f.map((t, i) =>
    cell([fp([run(t, { bold: i === 0, size: SZ.FICHE })])], {})) }));
  return [new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [hd, ...rows] }), p("", { after: 100 })];
}
function annexe3() {
  return [
    ...head("annex3", "ANNEXE 3 — TOUTE LA CONJUGAISON DE L'ANNÉE",
      "Les verbes du programme aux quatre temps étudiés — à consulter à chaque rédaction !"),
    ...conjTable("ÊTRE", [
      ["je", "suis", "étais", "serai", "ai été"],
      ["tu", "es", "étais", "seras", "as été"],
      ["il/elle", "est", "était", "sera", "a été"],
      ["nous", "sommes", "étions", "serons", "avons été"],
      ["vous", "êtes", "étiez", "serez", "avez été"],
      ["ils/elles", "sont", "étaient", "seront", "ont été"],
    ]),
    ...conjTable("AVOIR", [
      ["j'/je", "ai", "avais", "aurai", "ai eu"],
      ["tu", "as", "avais", "auras", "as eu"],
      ["il/elle", "a", "avait", "aura", "a eu"],
      ["nous", "avons", "avions", "aurons", "avons eu"],
      ["vous", "avez", "aviez", "aurez", "avez eu"],
      ["ils/elles", "ont", "avaient", "auront", "ont eu"],
    ]),
    ...conjTable("CHANTER (1er gr.)", [
      ["je", "chante", "chantais", "chanterai", "ai chanté"],
      ["tu", "chantes", "chantais", "chanteras", "as chanté"],
      ["il/elle", "chante", "chantait", "chantera", "a chanté"],
      ["nous", "chantons", "chantions", "chanterons", "avons chanté"],
      ["vous", "chantez", "chantiez", "chanterez", "avez chanté"],
      ["ils/elles", "chantent", "chantaient", "chanteront", "ont chanté"],
    ]),
    ...conjTable("LANCER (-cer !)", [
      ["je", "lance", "lançais", "lancerai", "ai lancé"],
      ["tu", "lances", "lançais", "lanceras", "as lancé"],
      ["il/elle", "lance", "lançait", "lancera", "a lancé"],
      ["nous", "lançons !", "lancions", "lancerons", "avons lancé"],
      ["vous", "lancez", "lanciez", "lancerez", "avez lancé"],
      ["ils/elles", "lancent", "lançaient", "lanceront", "ont lancé"],
    ]),
    ...conjTable("MANGER (-ger !)", [
      ["je", "mange", "mangeais", "mangerai", "ai mangé"],
      ["tu", "manges", "mangeais", "mangeras", "as mangé"],
      ["il/elle", "mange", "mangeait", "mangera", "a mangé"],
      ["nous", "mangeons !", "mangions", "mangerons", "avons mangé"],
      ["vous", "mangez", "mangiez", "mangerez", "avez mangé"],
      ["ils/elles", "mangent", "mangeaient", "mangeront", "ont mangé"],
    ]),
    ...conjTable("FINIR (2e gr. — comme remplir, bâtir)", [
      ["je", "finis", "finissais", "finirai", "ai fini"],
      ["tu", "finis", "finissais", "finiras", "as fini"],
      ["il/elle", "finit", "finissait", "finira", "a fini"],
      ["nous", "finissons", "finissions", "finirons", "avons fini"],
      ["vous", "finissez", "finissiez", "finirez", "avez fini"],
      ["ils/elles", "finissent", "finissaient", "finiront", "ont fini"],
    ]),
    ...conjTable("ALLER", [
      ["je", "vais", "allais", "irai", "suis allé(e)"],
      ["tu", "vas", "allais", "iras", "es allé(e)"],
      ["il/elle", "va", "allait", "ira", "est allé(e)"],
      ["nous", "allons", "allions", "irons", "sommes allé(e)s"],
      ["vous", "allez", "alliez", "irez", "êtes allé(e)s"],
      ["ils/elles", "vont", "allaient", "iront", "sont allé(e)s"],
    ]),
    ...conjTable("FAIRE", [
      ["je", "fais", "faisais", "ferai", "ai fait"],
      ["tu", "fais", "faisais", "feras", "as fait"],
      ["il/elle", "fait", "faisait", "fera", "a fait"],
      ["nous", "faisons", "faisions", "ferons", "avons fait"],
      ["vous", "faites !", "faisiez", "ferez", "avez fait"],
      ["ils/elles", "font", "faisaient", "feront", "ont fait"],
    ]),
    ...conjTable("VENIR", [
      ["je", "viens", "venais", "viendrai", "suis venu(e)"],
      ["tu", "viens", "venais", "viendras", "es venu(e)"],
      ["il/elle", "vient", "venait", "viendra", "est venu(e)"],
      ["nous", "venons", "venions", "viendrons", "sommes venu(e)s"],
      ["vous", "venez", "veniez", "viendrez", "êtes venu(e)s"],
      ["ils/elles", "viennent", "venaient", "viendront", "sont venu(e)s"],
    ]),
    ...conjTable("PRENDRE", [
      ["je", "prends", "prenais", "prendrai", "ai pris"],
      ["tu", "prends", "prenais", "prendras", "as pris"],
      ["il/elle", "prend", "prenait", "prendra", "a pris"],
      ["nous", "prenons", "prenions", "prendrons", "avons pris"],
      ["vous", "prenez", "preniez", "prendrez", "avez pris"],
      ["ils/elles", "prennent", "prenaient", "prendront", "ont pris"],
    ]),
    ...conjTable("VOIR", [
      ["je", "vois", "voyais", "verrai", "ai vu"],
      ["tu", "vois", "voyais", "verras", "as vu"],
      ["il/elle", "voit", "voyait", "verra", "a vu"],
      ["nous", "voyons", "voyions", "verrons", "avons vu"],
      ["vous", "voyez", "voyiez", "verrez", "avez vu"],
      ["ils/elles", "voient", "voyaient", "verront", "ont vu"],
    ]),
    ...conjTable("ENVOYER", [
      ["j'/je", "envoie !", "envoyais", "enverrai !", "ai envoyé"],
      ["tu", "envoies", "envoyais", "enverras", "as envoyé"],
      ["il/elle", "envoie", "envoyait", "enverra", "a envoyé"],
      ["nous", "envoyons", "envoyions", "enverrons", "avons envoyé"],
      ["vous", "envoyez", "envoyiez", "enverrez", "avez envoyé"],
      ["ils/elles", "envoient", "envoyaient", "enverront", "ont envoyé"],
    ]),
    ...conjTable("LIRE", [
      ["je", "lis", "lisais", "lirai", "ai lu"],
      ["tu", "lis", "lisais", "liras", "as lu"],
      ["il/elle", "lit", "lisait", "lira", "a lu"],
      ["nous", "lisons", "lisions", "lirons", "avons lu"],
      ["vous", "lisez", "lisiez", "lirez", "avez lu"],
      ["ils/elles", "lisent", "lisaient", "liront", "ont lu"],
    ]),
    ...conjTable("CONSTRUIRE", [
      ["je", "construis", "construisais", "construirai", "ai construit"],
      ["tu", "construis", "construisais", "construiras", "as construit"],
      ["il/elle", "construit", "construisait", "construira", "a construit"],
      ["nous", "construisons", "construisions", "construirons", "avons construit"],
      ["vous", "construisez", "construisiez", "construirez", "avez construit"],
      ["ils/elles", "construisent", "construisaient", "construiront", "ont construit"],
    ]),
    ...conjTable("SE LEVER (pronominal)", [
      ["je", "me lève", "me levais", "me lèverai", "me suis levé(e)"],
      ["tu", "te lèves", "te levais", "te lèveras", "t'es levé(e)"],
      ["il/elle", "se lève", "se levait", "se lèvera", "s'est levé(e)"],
      ["nous", "nous levons", "nous levions", "nous lèverons", "nous sommes levé(e)s"],
      ["vous", "vous levez", "vous leviez", "vous lèverez", "vous êtes levé(e)s"],
      ["ils/elles", "se lèvent", "se levaient", "se lèveront", "se sont levé(e)s"],
    ]),
    sub("Pour aller plus loin (au collège, tu découvriras…) :"),
    p("le conditionnel présent — « je chanterais, nous irions » : l'infinitif + les terminaisons de l'imparfait. Il sert à exprimer un souhait ou une condition : « Si j'étais un génie, je protégerais tous les villages ! »"),
  ];
}

// ============ ANNEXE 4 — FLASHCARDS ET JEUX ============
function annexe4() {
  const card = (recto, verso) => bullet([
    run(recto, { bold: true, color: C.BLUE }), run("  /  "), run(verso, { italic: true })]);
  return [
    ...head("annex4", "ANNEXE 4 — FLASHCARDS ET JEUX DE CLASSE",
      "Pour réviser en s'amusant, seul, en binôme ou en équipe !"),
    sub("Fabriquer les flashcards :"),
    p("1. Découpe des cartes dans du papier ou du carton (une vieille boîte fait l'affaire !)."),
    p("2. Au RECTO : le mot ou la question. Au VERSO : la réponse, la définition ou un petit dessin."),
    p("3. Range-les par unité dans une enveloppe. Pioche-en cinq chaque soir !", { after: 100 }),
    sub("Trente cartes prêtes à copier (recto / verso) :"),
    p([run("Unité 1 :", { bold: true, color: "1E8449" })], { after: 40 }),
    card("déboiser", "couper les arbres — contraire : reboiser"),
    card("la pollution", "quand l'eau, l'air ou le sol sont salis"),
    card("dé- + re-", "les préfixes contraires : défaire, refaire"),
    card("-tion", "le suffixe qui fabrique un nom : protéger → la protection"),
    card("le CC de lieu", "il dit OÙ : « Le parc se trouve à l'Est. »"),
    p([run("Unité 2 :", { bold: true, color: "1F618D" })], { after: 40 }),
    card("le taxi-brousse", "le transport en commun des routes malgaches"),
    card("sous / sur / entre / devant", "les prépositions de lieu"),
    card("régional → ?", "des sites régionaux (pluriel en -aux !)"),
    card("je vais, tu vas…", "le verbe ALLER au présent"),
    card("la brochure", "le petit livret qui présente une destination"),
    p([run("Unité 3 :", { bold: true, color: "6C3483" })], { after: 40 }),
    card("la mairie", "le service qui délivre les actes de naissance"),
    card("nous rempl…", "nous remplissons (2e groupe !)"),
    card("pour + infinitif", "le but : « Je vais à la poste pour envoyer une lettre. »"),
    card("qui, que, où", "les pronoms relatifs qui évitent les répétitions"),
    card("j'envo…", "j'envoie — mais nous envoyons !"),
    p([run("Unité 4 :", { bold: true, color: "D35400" })], { after: 40 }),
    card("faire / jouer / pratiquer / aller", "faire du vélo, jouer aux cartes, pratiquer un sport, aller au cinéma"),
    card("lent → ?", "lentement (adjectif + -ment = adverbe)"),
    card("qui ? que ? combien ?", "les pronoms interrogatifs"),
    card("nous lanç…, nous mange…", "nous lançons, nous mangeons (-cer/-ger !)"),
    card("ne … jamais / ne … plus", "la phrase négative"),
    p([run("Unité 5 :", { bold: true, color: "B03A2E" })], { after: 40 }),
    card("primaire / secondaire / tertiaire", "les trois secteurs d'activités"),
    card("grâce à / à cause de", "cause heureuse / cause fâcheuse"),
    card("car, parce que, puisque", "la cause + une phrase entière"),
    card("ils bât…", "ils bâtissent (2e groupe !)"),
    card("la matière première", "ce que la nature donne : le bois, le coton…"),
    p([run("Unité 6 :", { bold: true, color: "AD1457" })], { after: 40 }),
    card("il était une fois…", "la formule d'ouverture du conte"),
    card("les 5 étapes du schéma narratif", "situation initiale, élément perturbateur, péripéties, résolution, situation finale"),
    card("le, la, l', les + verbe", "les pronoms COD : « Il les sauve. »"),
    card("elle est parti… ?", "elle est partiE (accord avec être !)"),
    card("beau, bleu → pluriel ?", "beaux… mais bleus !"),
    p("", { after: 100 }),
    sub("Cinq jeux pour la classe :"),
    mot("1. Le mime", "un élève mime un métier ou un loisir ; la classe devine avec la bonne expression. "),
    mot("2. Le béret des mots", "deux équipes, des mots au centre ; j'annonce une définition, le premier arrivé ramasse le mot !"),
    mot("3. Le mémory", "les flashcards retournées ; retrouve la paire mot/définition."),
    mot("4. La chaîne de conjugaison", "« nous + construire ! » → « nous construisons ! ils + bâtir ! » — le plus rapide gagne."),
    mot("5. Le conte en chaîne", "chacun ajoute UNE phrase avec un outil du conteur — et le dernier place la formule de fin !"),
  ];
}

// ============ ANNEXE 5 — LES STRATÉGIES DE LECTURE (PE) ============
function annexe5() {
  return [
    ...head("annex5", "ANNEXE 5 — LES STRATÉGIES DE LECTURE",
      "L'annexe officielle du programme — les quatre techniques travaillées pendant l'année."),
    sub("1. La lecture expressive (avec respect de la prosodie) :"),
    p("Je respecte la musique de la phrase : petit arrêt après une virgule, voix qui monte à la fin d'une question, lecture par groupes de souffle, débit adapté."),
    p([run("Travaillée aux séances 10, 22, 34 et 58 — la ponctuation est ma partition !", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("2. La lecture en écho :"),
    p("L'enseignant lit une partie du texte ; les apprenants la relisent en imitant l'intonation et l'expression."),
    p([run("Travaillée à la séance 46 — l'écho muscle l'oreille !", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("3. La lecture à haute voix en paire :"),
    p("En binôme (un lecteur fort, un lecteur moins fort) : le lecteur plus fort lit d'abord une partie, puis le lecteur moins fort reprend la même partie."),
    p([run("À utiliser à chaque séance de fluidité — personne ne lit seul !", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("4. Le théâtre des lecteurs :"),
    p("En petits groupes, préparer puis présenter la lecture expressive d'un texte : chacun lit sa partie à tour de rôle (un narrateur + les personnages), de façon expressive, précise et compréhensible."),
    p([run("Travaillé à la séance 70 — le sommet de l'année !", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("Le rappel du lecteur, pour toujours :"),
    pr([run("FLUIDITÉ ", { bold: true, color: C.BLUE }), run("(je lis sans hésiter) + "),
        run("PRÉCISION ", { bold: true, color: C.BLUE }), run("(je lis tous les mots) + "),
        run("EXPRESSIVITÉ ", { bold: true, color: C.BLUE }), run("(ma voix vit) "),
        run("= une lecture qui donne envie d'écouter !", { bold: true })]),
  ];
}

// ============ ANNEXE 6 — ORTHOGRAPHE ET ACCORDS ============
function annexe6() {
  return [
    ...head("annex6", "ANNEXE 6 — ORTHOGRAPHE ET ACCORDS",
      "Toutes les règles d'accord de l'année — la boîte à malices anti-fautes !"),
    sub("1. Le pluriel des noms et des adjectifs :"),
    p("• règle générale : + s (un lac bleu → des lacs bleus) ;"),
    p("• -eau, -au → -x : un beau château → de beaux châteaux ; nouveau → nouveaux ;"),
    p("• -al → -aux : un site régional → des sites régionaux ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("bleu → bleus, fou → fous — un simple -s.")], { after: 100 }),
    sub("2. L'accord sujet-verbe :"),
    p("• je cherche le sujet avec « qui est-ce qui ? » ;"),
    p("• sujet composé relié par « et » → verbe au pluriel : « Niry et Beby VONT à l'école. » « Le roi et la reine SONT PARTIS. »", { after: 100 }),
    sub("3. L'accord du participe passé :"),
    p("• avec ÊTRE (et les pronominaux) → accord avec le sujet : elle est rentrée, ils se sont réunis ;"),
    p("• avec AVOIR → pas d'accord : elle a lancé la fleur ;"),
    pr([run("• MAIS ", { bold: true, color: C.RED }),
        run("COD placé avant le verbe → accord avec le COD : « La fleur ? Elle L'a lancéE. » « Les pirogues ? Il LES a sauvéES. »")], { after: 100 }),
    sub("4. Les verbes en -cer et -ger devant -ons :"),
    p("le ç et le ge gardiens du son : nous lançons, nous commençons — nous mangeons, nous voyageons, nous partageons.", { after: 100 }),
    sub("5. La phrase négative :"),
    p("les deux morceaux encadrent le verbe : ne … pas, ne … jamais, ne … plus. « On ne pousse jamais son camarade ! »", { after: 100 }),
    sub("6. Les adverbes en -ment :"),
    p("adjectif (souvent au féminin) + -ment : lent → lentement, courageux → courageusement, doux → doucement. L'adverbe est invariable !", { after: 100 }),
    sub("7. Les petits mots qui se ressemblent (spécial examen !) :"),
    mot("a / à", "a = verbe avoir (il a lancé) ; à = petit mot invariable (à l'école)."),
    mot("est / et", "est = verbe être (il est grand) ; et = il ajoute (le roi et la reine)."),
    mot("ou / où", "ou = choix (thé ou café) ; où = le lieu (le village où je vis)."),
    mot("son / sont", "son = à lui (son filet) ; sont = verbe être (ils sont partis)."),
    mot("le, la, les", "devant un NOM = article (le lac) ; devant un VERBE = pronom COD (je le vois) !"),
  ];
}

// ============ PAGE FINALE ============
function pageFinale() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: 48, center: true, after: 120 }),
    p([run("72 séances, 6 thématiques, 3 types de textes… TU AS TOUT TRAVERSÉ !", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    img("koto_soa.png", 300, 768 / 1376),
    p([run("Koto et Soa sont fiers de toi !", { bold: true, size: 28 })], { center: true, after: 140 }),
    p("Cette année, tu as appris à décrire ton environnement, ton île et tes services publics ;"),
    p("à expliquer un jeu et un métier ; à raconter des contes et des légendes ;"),
    p("à conjuguer, accorder, questionner, nier, relier et justifier ;"),
    p("à lire avec fluidité, précision et expressivité — en écho, en chœur et en théâtre !", { after: 140 }),
    pr([run("Tu es prêt pour le CEPE et pour le collège. ", { bold: true, size: 28 }),
        run("Continue de lire, d'écrire et de raconter !", { bold: true, color: C.RED, size: 28 })], { center: true, after: 160 }),
    p([run("Et depuis ce jour, quelque part entre les collines de Darafify et le lac de Soafara,", { italic: true, color: C.GRAY })], { center: true, after: 40 }),
    p([run("vivent des élèves devenus d'excellents lecteurs… et ils lurent heureux, beaucoup, beaucoup de livres !", { italic: true, color: C.GRAY })], { center: true, after: 160 }),
    p([run("FIN DU MANUEL — COLLECTION J-LEARN — FRANÇAIS T5", { bold: true, color: COLOR, size: 26 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    ...annexe1(), pageBreak(),
    ...annexe2(), pageBreak(),
    ...annexe3(), pageBreak(),
    ...annexe4(), pageBreak(),
    ...annexe5(), pageBreak(),
    ...annexe6(), pageBreak(),
    ...pageFinale(),
  ];
};
