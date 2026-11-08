// Français T6 — ANNEXES 1 à 6 + page finale
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
      "Tout le lexique de l'année, thème par thème — à relire avant chaque test."),
    ...theme("u1_voyage.png", "UNITÉ 1 — LE VOYAGE", "1F618D", [
      ["les types de voyage", "le voyage d'étude, d'agrément, d'affaires, le pèlerinage."],
      ["la carte de voyage", "l'itinéraire, l'étape, la distance, la légende, les points cardinaux."],
      ["les transports", "le taxi-brousse, le train de la falaise, la pirogue, l'avion."],
      ["les expressions imagées", "une mer d'huile, un serpent de route — la comparaison et la métaphore."],
      ["donner son avis", "à mon avis, selon moi, je trouve que, je pense que."],
    ]),
    ...theme("u2_societe.png", "UNITÉ 2 — LA VIE EN SOCIÉTÉ", "1E8449", [
      ["les biens publics", "le jardin public, la borne-fontaine, le lavoir, l'école, la route."],
      ["le patrimoine", "ce que nous avons reçu et que nous devons transmettre."],
      ["l'entraide", "le fokontany, les travaux communautaires, le firaisankina."],
      ["le savoir-vivre", "saluer, respecter, demander la permission, remercier."],
      ["le compte-rendu", "raconter fidèlement ce qui s'est passé : qui ? quoi ? où ? quand ?"],
    ]),
    ...theme("u3_techno.png", "UNITÉ 3 — LES NOUVELLES TECHNOLOGIES", "6C3483", [
      ["les appareils", "l'ordinateur, la tablette, le téléphone portable, l'imprimante."],
      ["les gestes", "allumer, éteindre, cliquer, taper, enregistrer, télécharger."],
      ["Internet", "le réseau, le site, la recherche, le message électronique."],
      ["le mode d'emploi", "les étapes numérotées, les verbes à l'impératif ou à l'infinitif."],
      ["la mise en garde", "il ne faut pas…, ne clique jamais…, attention à…"],
    ]),
    ...theme("u4_sports.png", "UNITÉ 4 — LES SPORTS", "D35400", [
      ["les types de sport", "individuel ou collectif ; la course, la lutte, les sports de ballon."],
      ["nos sports", "la pétanque, le football, le basket-ball, le moraingy, la savika."],
      ["la règle du jeu", "le terrain, les équipes, le point, la faute, l'arbitre."],
      ["les bienfaits", "la santé, l'endurance, l'esprit d'équipe, la discipline."],
      ["la périphrase", "dire autrement pour éviter la répétition : la pétanque → le jeu de boules."],
    ]),
    ...theme("u5_famille.png", "UNITÉ 5 — LES ÉVÉNEMENTS FAMILIAUX", "B03A2E", [
      ["les événements", "la naissance, la circoncision, le mariage, le décès, le famadihana."],
      ["le mariage", "le vody ondry, le kabary, les alliances, les familles réunies."],
      ["le récit de vie", "raconter un événement vécu, dans l'ordre du temps."],
      ["les indicateurs temporels", "hier, autrefois, d'abord, ensuite, enfin, demain, l'année prochaine."],
      ["le passé simple", "le temps du récit écrit : il arriva, elle chanta, ils vécurent."],
    ]),
    ...theme("u6_imaginaire.png", "UNITÉ 6 — LE MONDE IMAGINAIRE", "AD1457", [
      ["les quatre récits", "le conte, la fable, la légende, le mythe."],
      ["les personnages", "le héros, le roi, le génie, l'animal qui parle, l'oiseau magique."],
      ["les formules", "il était une fois… / angano angano, arira arira… / depuis ce jour…"],
      ["la morale", "la leçon du récit — écrite à la fin, ou cachée entre les lignes."],
      ["la règle de trois", "l'aîné échoue, le deuxième échoue… le troisième réussit !"],
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
      "Les types de textes de l'année : décrire, informer, expliquer, raconter."),
    sub("Le tableau des types de textes :"),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      row3("", "BUT ET QUESTIONS", "OUTILS ET TEMPS", { h: true }),
      row3("DESCRIPTIF (U1)", "faire voir : comment est-ce ? où est-ce ?",
        "adjectifs qualificatifs, marqueurs de lieu, expressions imagées — au présent."),
      row3("INFORMATIF / INJONCTIF (U2, U3)", "faire savoir et faire agir : que s'est-il passé ? que faut-il faire ?",
        "phrase impérative, il faut / il est nécessaire de, connecteurs logiques, étapes numérotées."),
      row3("EXPLICATIF (U3, U4)", "faire comprendre : pourquoi ? comment ?",
        "l'expression de la cause (car, parce que, grâce à…), la périphrase — au présent."),
      row3("NARRATIF (U5, U6)", "raconter une histoire : que s'est-il passé ?",
        "formules du conte, indicateurs temporels, verbes d'action et de mouvement — imparfait, passé composé, passé simple."),
    ]}),
    p("", { after: 120 }),
    sub("Le plan du DÉPLIANT ou de la description d'un paysage (U1) :"),
    p("1. Je situe (où est-ce ? comment y va-t-on ?) — 2. Je décris du général au détail, avec des adjectifs et des expressions imagées — 3. Je donne mon avis pour donner envie.", { after: 100 }),
    sub("Le plan de l'AFFICHE (U2) :"),
    p("1. Le titre qui attire l'œil — 2. Le message essentiel en phrases impératives courtes — 3. L'illustration et les informations pratiques (lieu, date).", { after: 100 }),
    sub("Le plan du MODE D'EMPLOI (U3) et de la RÈGLE DE JEU (U4) :"),
    p("1. Le matériel ou l'appareil — 2. Les étapes numérotées, une action par étape, à l'impératif ou à l'infinitif — 3. La mise en garde : ce qu'il ne faut jamais faire.", { after: 100 }),
    sub("Le plan du RÉCIT DE VIE (U5) :"),
    p("1. Je présente l'événement (qui ? quand ? où ?) — 2. Je raconte dans l'ordre, avec les indicateurs temporels — 3. Je dis ce que j'ai ressenti.", { after: 100 }),
    sub("Le canevas du CONTE en 6 étapes (U6) :"),
    pr([run("1. La formule d'ouverture ", { bold: true, color: C.BLUE }), run("(« Il était une fois… », imparfait) → ")], { after: 40 }),
    pr([run("2. Le héros et son village ", { bold: true, color: C.BLUE }), run("(qui ? où ?) → ")], { after: 40 }),
    pr([run("3. Le problème ", { bold: true, color: C.RED }), run("(« Un jour… », le malheur arrive) → ")], { after: 40 }),
    pr([run("4. Les épreuves ", { bold: true, color: C.BLUE }), run("(la règle de trois : deux échecs, puis…) → ")], { after: 40 }),
    pr([run("5. La réussite ", { bold: true, color: C.GREEN }), run("(le héros gagne grâce à une qualité) → ")], { after: 40 }),
    pr([run("6. La formule de fin et la morale ", { bold: true, color: C.BLUE }), run("(« Depuis ce jour… »)")], { after: 100 }),
    sub("La routine de l'écrivain, pour toutes les rédactions :"),
    p("1. Je PLANIFIE (mes idées en mots-clés, mon plan). 2. Je RÉDIGE (des phrases complètes, les connecteurs). 3. Je RELIS avec ma grille (accords, ponctuation, majuscules). 4. J'AMÉLIORE (je remplace les répétitions par des pronoms ou une périphrase, j'enrichis avec des adjectifs)."),
  ];
}

// ============ ANNEXE 3 — CONJUGAISON ============
function conjTable(title, forms) {
  // forms: [ [pronom, présent, imparfait, futur, passé composé, passé simple] x6 ]
  const hd = new TableRow({ children: [
    cell([fp([run(title, { bold: true, color: COLOR, size: SZ.FICHE })])], { w: 1500, shade: SHADE }),
    cell([fp([run("PRÉSENT", { bold: true, size: SZ.FICHE })])], { w: 1650, shade: SHADE }),
    cell([fp([run("IMPARFAIT", { bold: true, size: SZ.FICHE })])], { w: 1750, shade: SHADE }),
    cell([fp([run("FUTUR", { bold: true, size: SZ.FICHE })])], { w: 1750, shade: SHADE }),
    cell([fp([run("PASSÉ COMPOSÉ", { bold: true, size: SZ.FICHE })])], { w: 2050, shade: SHADE }),
    cell([fp([run("PASSÉ SIMPLE", { bold: true, size: SZ.FICHE })])], { w: 1700, shade: SHADE }),
  ]});
  const rows = forms.map(f => new TableRow({ children: f.map((t, i) =>
    cell([fp([run(t, { bold: i === 0, size: SZ.FICHE })])], {})) }));
  return [new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [hd, ...rows] }), p("", { after: 100 })];
}
function annexe3() {
  return [
    ...head("annex3", "ANNEXE 3 — TOUTE LA CONJUGAISON DE L'ANNÉE",
      "Les verbes du programme aux cinq temps étudiés — à consulter à chaque rédaction."),
    ...conjTable("ÊTRE", [
      ["je", "suis", "étais", "serai", "ai été", "fus"],
      ["tu", "es", "étais", "seras", "as été", "fus"],
      ["il/elle", "est", "était", "sera", "a été", "fut"],
      ["nous", "sommes", "étions", "serons", "avons été", "fûmes"],
      ["vous", "êtes", "étiez", "serez", "avez été", "fûtes"],
      ["ils/elles", "sont", "étaient", "seront", "ont été", "furent"],
    ]),
    ...conjTable("AVOIR", [
      ["j'/je", "ai", "avais", "aurai", "ai eu", "eus"],
      ["tu", "as", "avais", "auras", "as eu", "eus"],
      ["il/elle", "a", "avait", "aura", "a eu", "eut"],
      ["nous", "avons", "avions", "aurons", "avons eu", "eûmes"],
      ["vous", "avez", "aviez", "aurez", "avez eu", "eûtes"],
      ["ils/elles", "ont", "avaient", "auront", "ont eu", "eurent"],
    ]),
    ...conjTable("CHANTER (1er gr.)", [
      ["je", "chante", "chantais", "chanterai", "ai chanté", "chantai"],
      ["tu", "chantes", "chantais", "chanteras", "as chanté", "chantas"],
      ["il/elle", "chante", "chantait", "chantera", "a chanté", "chanta"],
      ["nous", "chantons", "chantions", "chanterons", "avons chanté", "chantâmes"],
      ["vous", "chantez", "chantiez", "chanterez", "avez chanté", "chantâtes"],
      ["ils/elles", "chantent", "chantaient", "chanteront", "ont chanté", "chantèrent"],
    ]),
    ...conjTable("FINIR (2e gr.)", [
      ["je", "finis", "finissais", "finirai", "ai fini", "finis"],
      ["tu", "finis", "finissais", "finiras", "as fini", "finis"],
      ["il/elle", "finit", "finissait", "finira", "a fini", "finit"],
      ["nous", "finissons", "finissions", "finirons", "avons fini", "finîmes"],
      ["vous", "finissez", "finissiez", "finirez", "avez fini", "finîtes"],
      ["ils/elles", "finissent", "finissaient", "finiront", "ont fini", "finirent"],
    ]),
    ...conjTable("ALLER", [
      ["je", "vais", "allais", "irai", "suis allé(e)", "allai"],
      ["tu", "vas", "allais", "iras", "es allé(e)", "allas"],
      ["il/elle", "va", "allait", "ira", "est allé(e)", "alla"],
      ["nous", "allons", "allions", "irons", "sommes allé(e)s", "allâmes"],
      ["vous", "allez", "alliez", "irez", "êtes allé(e)s", "allâtes"],
      ["ils/elles", "vont", "allaient", "iront", "sont allé(e)s", "allèrent"],
    ]),
    ...conjTable("FAIRE", [
      ["je", "fais", "faisais", "ferai", "ai fait", "fis"],
      ["tu", "fais", "faisais", "feras", "as fait", "fis"],
      ["il/elle", "fait", "faisait", "fera", "a fait", "fit"],
      ["nous", "faisons", "faisions", "ferons", "avons fait", "fîmes"],
      ["vous", "faites !", "faisiez", "ferez", "avez fait", "fîtes"],
      ["ils/elles", "font", "faisaient", "feront", "ont fait", "firent"],
    ]),
    ...conjTable("VENIR (mouvement)", [
      ["je", "viens", "venais", "viendrai", "suis venu(e)", "vins"],
      ["tu", "viens", "venais", "viendras", "es venu(e)", "vins"],
      ["il/elle", "vient", "venait", "viendra", "est venu(e)", "vint"],
      ["nous", "venons", "venions", "viendrons", "sommes venu(e)s", "vînmes"],
      ["vous", "venez", "veniez", "viendrez", "êtes venu(e)s", "vîntes"],
      ["ils/elles", "viennent", "venaient", "viendront", "sont venu(e)s", "vinrent"],
    ]),
    ...conjTable("PARTIR (mouvement)", [
      ["je", "pars", "partais", "partirai", "suis parti(e)", "partis"],
      ["tu", "pars", "partais", "partiras", "es parti(e)", "partis"],
      ["il/elle", "part", "partait", "partira", "est parti(e)", "partit"],
      ["nous", "partons", "partions", "partirons", "sommes parti(e)s", "partîmes"],
      ["vous", "partez", "partiez", "partirez", "êtes parti(e)s", "partîtes"],
      ["ils/elles", "partent", "partaient", "partiront", "sont parti(e)s", "partirent"],
    ]),
    ...conjTable("COURIR (mouvement)", [
      ["je", "cours", "courais", "courrai !", "ai couru", "courus"],
      ["tu", "cours", "courais", "courras", "as couru", "courus"],
      ["il/elle", "court", "courait", "courra", "a couru", "courut"],
      ["nous", "courons", "courions", "courrons", "avons couru", "courûmes"],
      ["vous", "courez", "couriez", "courrez", "avez couru", "courûtes"],
      ["ils/elles", "courent", "couraient", "courront", "ont couru", "coururent"],
    ]),
    ...conjTable("PRENDRE", [
      ["je", "prends", "prenais", "prendrai", "ai pris", "pris"],
      ["tu", "prends", "prenais", "prendras", "as pris", "pris"],
      ["il/elle", "prend", "prenait", "prendra", "a pris", "prit"],
      ["nous", "prenons", "prenions", "prendrons", "avons pris", "prîmes"],
      ["vous", "prenez", "preniez", "prendrez", "avez pris", "prîtes"],
      ["ils/elles", "prennent", "prenaient", "prendront", "ont pris", "prirent"],
    ]),
    ...conjTable("DIRE", [
      ["je", "dis", "disais", "dirai", "ai dit", "dis"],
      ["tu", "dis", "disais", "diras", "as dit", "dis"],
      ["il/elle", "dit", "disait", "dira", "a dit", "dit"],
      ["nous", "disons", "disions", "dirons", "avons dit", "dîmes"],
      ["vous", "dites !", "disiez", "direz", "avez dit", "dîtes"],
      ["ils/elles", "disent", "disaient", "diront", "ont dit", "dirent"],
    ]),
    ...conjTable("VOIR", [
      ["je", "vois", "voyais", "verrai", "ai vu", "vis"],
      ["tu", "vois", "voyais", "verras", "as vu", "vis"],
      ["il/elle", "voit", "voyait", "verra", "a vu", "vit"],
      ["nous", "voyons", "voyions", "verrons", "avons vu", "vîmes"],
      ["vous", "voyez", "voyiez", "verrez", "avez vu", "vîtes"],
      ["ils/elles", "voient", "voyaient", "verront", "ont vu", "virent"],
    ]),
    ...conjTable("ÉCRIRE", [
      ["j'/je", "écris", "écrivais", "écrirai", "ai écrit", "écrivis"],
      ["tu", "écris", "écrivais", "écriras", "as écrit", "écrivis"],
      ["il/elle", "écrit", "écrivait", "écrira", "a écrit", "écrivit"],
      ["nous", "écrivons", "écrivions", "écrirons", "avons écrit", "écrivîmes"],
      ["vous", "écrivez", "écriviez", "écrirez", "avez écrit", "écrivîtes"],
      ["ils/elles", "écrivent", "écrivaient", "écriront", "ont écrit", "écrivirent"],
    ]),
    sub("Le passé simple, mode d'emploi (unité 5) :"),
    p("C'est le temps du récit écrit : on le rencontre surtout à la 3e personne, dans les contes et les récits de vie. « Le roi partit, l'oiseau chanta, ils vécurent heureux. » À l'oral, on le remplace par le passé composé.", { after: 100 }),
    sub("Le subjonctif présent, première rencontre (unité 3) :"),
    p("Après « il faut que… », le verbe change de forme : il faut que je sois prudent, que tu aies ton cahier, que nous fassions attention, que vous alliez doucement. C'est le subjonctif — tu le travailleras davantage au collège."),
  ];
}

// ============ ANNEXE 4 — FLASHCARDS ET JEUX ============
function annexe4() {
  const card = (recto, verso) => bullet([
    run(recto, { bold: true, color: C.BLUE }), run("  /  "), run(verso, { italic: true })]);
  return [
    ...head("annex4", "ANNEXE 4 — FLASHCARDS ET JEUX DE CLASSE",
      "Pour réviser en s'amusant, seul, en binôme ou en équipe."),
    sub("Fabriquer les flashcards :"),
    p("1. Découpe des cartes dans du papier ou du carton (une vieille boîte fait l'affaire)."),
    p("2. Au RECTO : le mot ou la question. Au VERSO : la réponse, la définition ou un petit dessin."),
    p("3. Range-les par unité dans une enveloppe. Pioche-en cinq chaque soir.", { after: 100 }),
    sub("Trente cartes prêtes à copier (recto / verso) :"),
    p([run("Unité 1 :", { bold: true, color: "1F618D" })], { after: 40 }),
    card("une mer d'huile", "métaphore : une mer très calme"),
    card("comparaison / métaphore", "avec « comme » / sans « comme »"),
    card("au nord, le long de, au pied de", "les marqueurs de lieu"),
    card("une forêt dense, des routes sinueuses", "l'adjectif s'accorde avec le nom !"),
    card("à mon avis, selon moi…", "les expressions pour donner son avis"),
    p([run("Unité 2 :", { bold: true, color: "1E8449" })], { after: 40 }),
    card("celui-ci, celle-là, ceux-ci", "les pronoms démonstratifs"),
    card("Respectez le jardin !", "la phrase impérative : pas de sujet exprimé"),
    card("il faut / il est nécessaire de", "l'obligation et la tournure impersonnelle"),
    card("donc, alors, c'est pourquoi", "les connecteurs logiques"),
    card("Avant, le jardin était sale. Aujourd'hui, il est propre.", "imparfait ↔ présent"),
    p([run("Unité 3 :", { bold: true, color: "6C3483" })], { after: 40 }),
    card("parce que, car, à cause de, grâce à", "l'expression de la cause"),
    card("Ne clique jamais sur ce lien !", "l'impérative négative"),
    card("allumer, cliquer, enregistrer", "les gestes du numérique (à l'infinitif dans un mode d'emploi)"),
    card("il faut que tu sois prudent", "le subjonctif après « il faut que »"),
    card("demain, nous enverrons le message", "le futur simple"),
    p([run("Unité 4 :", { bold: true, color: "D35400" })], { after: 40 }),
    card("déclarative, interrogative, exclamative, impérative", "les quatre types de phrases"),
    card("ne … rien / ne … personne", "la négation complexe"),
    card("Il n'a jamais perdu.", "au passé composé, la négation encadre l'auxiliaire"),
    card("la pétanque → ?", "le jeu de boules (la périphrase)"),
    card("le moraingy, la savika", "les sports traditionnels malgaches"),
    p([run("Unité 5 :", { bold: true, color: "B03A2E" })], { after: 40 }),
    card("il arriva, elle chanta, ils vécurent", "le passé simple, temps du récit écrit"),
    card("autrefois, hier / aujourd'hui / demain", "les indicateurs temporels"),
    card("le, la, l', les + verbe", "les pronoms COD : « Je les invite. »"),
    card("lui, leur + verbe", "les pronoms COI : « Je lui parle. »"),
    card("le famadihana, le vody ondry, le kabary", "les mots des événements familiaux"),
    p([run("Unité 6 :", { bold: true, color: "AD1457" })], { after: 40 }),
    card("conte / fable / légende / mythe", "les quatre récits du monde imaginaire"),
    card("angano angano, arira arira", "l'ouverture malgache ↔ « il était une fois »"),
    card("bondir, s'élancer, franchir", "les verbes d'action et de mouvement"),
    card("Niry et Beby ne lui parlent pas.", "négation + pronom COI, ensemble"),
    card("la morale", "la leçon du récit — écrite, ou à inférer"),
    p("", { after: 100 }),
    sub("Cinq jeux pour la classe :"),
    mot("1. Le mime du verbe", "un élève mime un verbe d'action ou de mouvement ; la classe le devine et le conjugue au temps demandé."),
    mot("2. Le béret des mots", "deux équipes, des mots au centre ; l'enseignant annonce une définition, le premier arrivé ramasse le mot."),
    mot("3. Le mémory", "les flashcards retournées ; retrouve la paire mot/définition."),
    mot("4. La chaîne du passé simple", "« il + partir ! » → « il partit ! elle + voir ! » — le plus rapide gagne."),
    mot("5. Le conte en chaîne", "chacun ajoute UNE phrase en suivant le canevas du conte — et le dernier place la formule de fin."),
  ];
}

// ============ ANNEXE 5 — LES STRATÉGIES DE LECTURE (PE) ============
function annexe5() {
  return [
    ...head("annex5", "ANNEXE 5 — LES STRATÉGIES DE LECTURE",
      "L'annexe officielle du programme — les techniques travaillées pendant l'année."),
    sub("1. La modélisation de la lecture :"),
    p("L'enseignant lit d'abord le texte à haute voix, de façon exemplaire : les apprenants écoutent comment il respire, où il s'arrête, comment sa voix monte et descend. Puis ils l'imitent."),
    p([run("Utilisée à chaque séance de lecture — on apprend d'abord avec ses oreilles.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("2. L'écoute et lecture :"),
    p("Les apprenants suivent le texte des yeux pendant que l'enseignant (ou un camarade) le lit : l'œil associe chaque mot entendu au mot écrit."),
    p([run("Utilisée en compréhension écrite, avant la lecture individuelle.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("3. La lecture en écho :"),
    p("L'enseignant lit une phrase ou un paragraphe ; les apprenants relisent aussitôt la même partie en imitant l'intonation et l'expression."),
    p([run("Travaillée aux séances de lecture-fluidité 46 et 58.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("4. La lecture à l'unisson :"),
    p("Toute la classe lit le même passage en même temps, d'une seule voix, au même rythme : personne ne se presse, personne ne reste en arrière."),
    p([run("Idéale pour les textes courts : règles, affiches, formules du conte.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("5. La lecture à haute voix expressive :"),
    p("Seul devant les autres, je lis un texte que j'ai préparé : pauses aux virgules, voix qui monte aux questions, groupes de souffle, débit adapté — pour traduire l'intention de l'auteur."),
    p([run("Le sommet de l'année : la séance 70, où chacun lit son propre conte.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("Le rappel du lecteur, pour toujours :"),
    pr([run("FLUIDITÉ ", { bold: true, color: C.BLUE }), run("(je lis sans hésiter) + "),
        run("PRÉCISION ", { bold: true, color: C.BLUE }), run("(je lis tous les mots) + "),
        run("EXPRESSIVITÉ ", { bold: true, color: C.BLUE }), run("(ma voix vit) "),
        run("= une lecture qui donne envie d'écouter.", { bold: true })]),
  ];
}

// ============ ANNEXE 6 — ORTHOGRAPHE ET ACCORDS ============
function annexe6() {
  return [
    ...head("annex6", "ANNEXE 6 — ORTHOGRAPHE ET ACCORDS",
      "Toutes les règles d'accord de l'année — la boîte anti-fautes."),
    sub("1. L'accord de l'adjectif qualificatif (unité 1) :"),
    p("• l'adjectif s'accorde en genre et en nombre avec le nom : une route sinueuse, des paysages magnifiques ;"),
    p("• avant ou après le nom, l'accord ne change pas : de hautes montagnes vertes.", { after: 100 }),
    sub("2. La phrase impérative (unités 2 et 3) :"),
    p("• pas de sujet exprimé : Respecte le jardin. Respectons-le. Respectez-le. ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("à la 2e personne du singulier, les verbes en -er perdent le s : tu manges → mange ! tu cliques → clique !")], { after: 100 }),
    sub("3. La négation (unités 3, 4 et 6) :"),
    p("• les deux morceaux encadrent le verbe : ne … pas, ne … jamais, ne … plus, ne … rien, ne … personne ;"),
    p("• au passé composé, ils encadrent l'auxiliaire : « Il n'a jamais perdu. » ;"),
    p("• avec un pronom, le pronom reste collé au verbe : « Niry et Beby ne lui parlent pas. »", { after: 100 }),
    sub("4. L'accord sujet-verbe :"),
    p("• je cherche le sujet avec « qui est-ce qui ? » ;"),
    p("• sujet composé relié par « et » → verbe au pluriel : « Le chef et ses trois fils VIVAIENT au pied des montagnes. »", { after: 100 }),
    sub("5. L'accord du participe passé :"),
    p("• avec ÊTRE → accord avec le sujet : elle est partie, ils sont venus, les familles se sont réunies ;"),
    p("• avec AVOIR → pas d'accord : elle a chanté, ils ont couru.", { after: 100 }),
    sub("6. Le passé simple sans fautes (unité 5) :"),
    p("• 1er groupe : -a, -èrent → il chanta, ils chantèrent ;"),
    p("• 2e groupe et beaucoup d'autres : -it, -irent → il finit, elle partit, ils dirent ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("être → il fut ; avoir → il eut ; venir → il vint ; faire → il fit.")], { after: 100 }),
    sub("7. Les petits mots qui se ressemblent (spécial examen !) :"),
    mot("a / à", "a = verbe avoir (il a chanté) ; à = petit mot invariable (à l'école)."),
    mot("est / et", "est = verbe être (il est grand) ; et = il ajoute (le chef et ses fils)."),
    mot("ou / où", "ou = choix (thé ou café) ; où = le lieu (le village où je vis)."),
    mot("son / sont", "son = à lui (son conte) ; sont = verbe être (ils sont partis)."),
    mot("ce / se", "ce + nom (ce village) ; se + verbe (l'oiseau se pose)."),
    mot("le, la, les / lui, leur", "devant un verbe : COD (je le vois) / COI (je lui parle) !"),
  ];
}

// ============ PAGE FINALE ============
function pageFinale() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: 48, center: true, after: 120 }),
    p([run("72 séances, 6 thématiques, 4 types de textes… TU AS TOUT TRAVERSÉ !", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    img("koto_soa.png", 300, 768 / 1376),
    p([run("Koto et Soa sont fiers de toi !", { bold: true, size: 28 })], { center: true, after: 140 }),
    p("Cette année, tu as appris à décrire un voyage et un paysage ; à informer et à faire agir"),
    p("pour la vie en société ; à expliquer un mode d'emploi, un sport et ses règles ;"),
    p("à raconter les grands événements d'une famille, puis les mondes imaginaires ;"),
    p("à conjuguer jusqu'au passé simple, à nier, à questionner, à relier et à justifier ;"),
    p("et à lire — en écho, à l'unisson, puis seul, avec expression, ton propre conte.", { after: 140 }),
    pr([run("Avec l'autonomie et la maîtrise de soi, ", { bold: true, size: 28 }),
        run("continue de lire, d'écrire et de raconter !", { bold: true, color: C.RED, size: 28 })], { center: true, after: 160 }),
    p([run("Angano angano, arira arira… ce manuel se termine,", { italic: true, color: C.GRAY })], { center: true, after: 40 }),
    p([run("mais quelque part, au pied des montagnes, l'oiseau de pluie chante encore pour les lecteurs courageux.", { italic: true, color: C.GRAY })], { center: true, after: 160 }),
    p([run("FIN DU MANUEL — COLLECTION J-LEARN — FRANÇAIS T6", { bold: true, color: COLOR, size: 26 })], { center: true }),
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
