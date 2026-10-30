// Français T7 — ANNEXES (1 à 6) + page finale
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, cell, img, imgFloat, pageBreak,
        bookmarkTitle, unitBanner, sub } = B;
const { Table, TableRow, WidthType } = require("docx");

const DARK = "212F3D";
const UCOL = {
  u1: "B03A2E", u2: "6C3483", u3: "D35400", u4: "1F618D",
  u5: "7D6608", u6: "117864", u7: "1E8449",
};

const annexTitle = (id, no, title) => [
  bookmarkTitle(id, "ANNEXE " + no, { bold: true, size: 28, color: C.GRAY, after: 40 }),
  p([run(title, { bold: true, size: SZ.TITLE, color: DARK })], { center: true, after: 140 }),
];
const bullet = (runs, color = DARK, o = {}) => pr(
  [run("•  ", { bold: true, color, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl, color) => bullet([
  run(word, { bold: true, color: C.SALMON, hl: true }),
  ...(expl ? [run("  —  " + expl)] : [])], color);
const note = (t) => pr([run("[" + t + "]", { italic: true, color: C.GRAY, size: 26 })], { after: 60 });

const themeBand = (label, color) => new Table({
  width: { size: 10400, type: WidthType.DXA },
  rows: [new TableRow({ children: [cell(
    [p([run(label, { bold: true, color: C.WHITE, size: SZ.SUB })], { center: true })],
    { shade: color })] })],
});

// table de conjugaison compacte : titre + 2 colonnes de formes
function conjTable(titre, color, colA, colB) {
  const line = (t) => fp(t, { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(titre, { bold: true, color: C.WHITE, size: SZ.BODY })], { center: true })],
        { shade: color, columnSpan: 2 })] }),
      new TableRow({ children: [
        cell(colA.map(line)), cell(colB.map(line)),
      ] }),
    ],
  });
}

// ============ ANNEXE 1 — L'imagier des 7 thématiques ============
function annex1() {
  const out = [
    ...annexTitle("annex1", 1, "L'IMAGIER DES 7 THÉMATIQUES"),
    p("Toute l'année en un coup d'œil : pour chaque thématique, les mots essentiels à connaître par cœur. Cache la définition et récite !", { after: 100 }),
  ];
  const blocs = [
    ["UNITÉ 1 — LA CULTURE", UCOL.u1, [
      ["la culture", "tout ce qu'un peuple crée : art, langage, technique"],
      ["le patrimoine", "le trésor reçu des anciens, à transmettre"],
      ["le hira gasy", "le grand spectacle chanté et dansé des Hautes Terres"],
      ["le famadihana", "la fête du retournement, en l'honneur des ancêtres"],
      ["la circoncision", "la fête du famorana (sambatra sur la côte est)"],
      ["un artisan", "celui qui crée de ses mains"],
    ]],
    ["UNITÉ 2 — LES US ET COUTUMES", UCOL.u2, [
      ["une coutume", "une habitude que tout un village partage"],
      ["un fady", "un interdit transmis par les anciens"],
      ["le tsodrano", "la bénédiction des aînés"],
      ["le fihavanana", "le lien fraternel qui unit les Malgaches"],
      ["un proverbe", "une phrase courte pleine de sagesse (ohabolana)"],
    ]],
    ["UNITÉ 3 — LES MÉDIAS", UCOL.u3, [
      ["un média", "un moyen d'informer : journal, radio, télévision, Internet"],
      ["un journaliste", "celui qui cherche, vérifie et raconte l'information"],
      ["la une", "la première page du journal"],
      ["une rumeur", "une nouvelle non vérifiée : on s'en méfie !"],
      ["la presse en ligne", "les journaux que l'on lit sur Internet"],
    ]],
    ["UNITÉ 4 — LA DÉLINQUANCE", UCOL.u4, [
      ["la délinquance", "les actes interdits par la loi"],
      ["un mineur", "une personne de moins de dix-huit ans"],
      ["la réinsertion", "le chemin du retour vers une vie honnête"],
      ["la prévention", "agir avant, pour éviter le pire"],
      ["un témoin", "celui qui a vu et qui peut raconter"],
    ]],
    ["UNITÉ 5 — L'AGRICULTURE ET L'ÉLEVAGE", UCOL.u5, [
      ["la rizière", "le champ de riz, en terrasses ou dans la plaine"],
      ["le zébu", "le grand bœuf à bosse, richesse de nos campagnes"],
      ["la récolte", "ce que le paysan ramasse après des mois de travail"],
      ["la vanille", "notre épice célèbre dans le monde entier"],
      ["le litchi", "le fruit de la côte est, exporté à Noël"],
    ]],
    ["UNITÉ 6 — LA PÊCHE", UCOL.u6, [
      ["la pirogue", "la barque légère du pêcheur"],
      ["le filet", "l'outil que l'on jette et que l'on relève plein"],
      ["la mareyeuse", "celle qui achète le poisson au retour des pirogues"],
      ["la marée", "la mer qui monte et qui descend"],
      ["le large", "loin de la côte, en pleine mer"],
    ]],
    ["UNITÉ 7 — L'ENVIRONNEMENT", UCOL.u7, [
      ["une espèce endémique", "qui vit à Madagascar et nulle part ailleurs"],
      ["le reboisement", "replanter des arbres là où on a coupé"],
      ["l'érosion", "la terre nue que l'eau des pluies emporte"],
      ["le tri des déchets", "séparer pour jeter proprement"],
      ["le parc national", "un espace protégé où la nature est reine"],
    ]],
  ];
  for (const [label, color, words] of blocs) {
    out.push(themeBand(label, color));
    out.push(p("", { after: 40 }));
    for (const [w, e] of words) out.push(mot(w, e, color));
    out.push(p("", { after: 80 }));
  }
  return out;
}

// ============ ANNEXE 2 — Le guide du rédacteur ============
function annex2() {
  return [
    ...annexTitle("annex2", 2, "LE GUIDE DU RÉDACTEUR"),
    p("Quatre familles de textes ont traversé l'année. Avant d'écrire, je me demande : qu'est-ce que je veux faire ? Informer, raconter, décrire ou faire agir ?", { after: 100 }),
    sub("1. INFORMER — le texte informatif (unités 1, 2, 3)"),
    bullet([run("Le plan : ", { bold: true }), run("de quoi je parle → les faits exacts → d'où vient l'information.")]),
    bullet([run("Les outils : ", { bold: true }), run("le présent, des faits vérifiés, un vocabulaire précis.", { })]),
    note("exemple : un article sur le hira gasy, une page sur la presse en ligne"),
    p("", { after: 60 }),
    sub("2. RACONTER — le texte narratif (unités 3 et 4)"),
    bullet([run("Le plan : ", { bold: true }), run("la situation de départ → l'événement qui dérange → les actions → la fin.")]),
    bullet([run("Les outils : ", { bold: true }), run("l'imparfait (le décor) + le passé composé ou le présent (les actions) ; les mots du temps : d'abord, soudain, alors, enfin.")]),
    note("exemple : le récit d'un fait divers, l'histoire d'une réinsertion réussie"),
    p("", { after: 60 }),
    sub("3. DÉCRIRE — le texte descriptif (unités 5 et 6)"),
    bullet([run("Le plan : ", { bold: true }), run("une vue d'ensemble → les détails organisés (comme une caméra) → une image finale.")]),
    bullet([run("Les outils : ", { bold: true }), run("les cinq sens, les verbes attributifs (être, sembler, devenir), les adjectifs, les comparaisons ; pour le portrait : physique → gestes → caractère → une parole.")]),
    note("exemple : la rizière à l'aube, le portrait de Rakoto"),
    p("", { after: 60 }),
    sub("4. FAIRE AGIR — le texte injonctif et publicitaire (unité 7)"),
    bullet([run("Le plan : ", { bold: true }), run("un slogan → un constat → des gestes à l'impératif → une devise finale.")]),
    bullet([run("Les outils : ", { bold: true }), run("l'impératif direct, les exclamations, les mots qui font rêver, la répétition du slogan.")]),
    note("exemple : le dépliant écologique, la publicité pour Andasibe"),
    p("", { after: 80 }),
    sub("Ma méthode, quel que soit le texte :"),
    bullet([run("1. Je cherche mes idées. 2. Je fais mon plan. 3. Je rédige. 4. Je relis avec la grille. 5. J'améliore.", { bold: true })]),
    note("les cinq pas travaillés dans toutes les unités : ils ne changent jamais"),
  ];
}

// ============ ANNEXE 3 — Toute la conjugaison de l'année ============
function annex3() {
  return [
    ...annexTitle("annex3", 3, "TOUTE LA CONJUGAISON DE L'ANNÉE"),
    p("Les temps travaillés cette année, avec les verbes les plus utiles. Récite une colonne par jour : en deux semaines, tout est à toi !", { after: 100 }),
    sub("1. Le présent de l'indicatif"),
    conjTable("PLANTER (1er groupe) — présent", UCOL.u7,
      ["je plante", "tu plantes", "il / elle plante"],
      ["nous plantons", "vous plantez", "ils / elles plantent"]),
    p("", { after: 60 }),
    conjTable("FINIR (2e groupe) — présent", UCOL.u5,
      ["je finis", "tu finis", "il / elle finit"],
      ["nous finissons", "vous finissez", "ils / elles finissent"]),
    p("", { after: 60 }),
    conjTable("PRENDRE (3e groupe) — présent", UCOL.u6,
      ["je prends", "tu prends", "il / elle prend"],
      ["nous prenons", "vous prenez", "ils / elles prennent"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — présent", UCOL.u1,
      ["je suis — j'ai", "tu es — tu as", "il / elle est — il / elle a"],
      ["nous sommes — nous avons", "vous êtes — vous avez", "ils / elles sont — ils / elles ont"]),
    p("", { after: 80 }),
    bullet([run("Les valeurs du présent (unité 3) : ", { bold: true }),
      run("l'action en train de se faire, l'habitude, la vérité générale, le présent du reportage.")]),
    note("exemple : « La mer monte. » (maintenant) / « Chaque nuit, Rakoto part au large. » (habitude)"),
    p("", { after: 60 }),
    sub("2. L'imparfait de l'indicatif"),
    conjTable("PLANTER — imparfait", UCOL.u7,
      ["je plantais", "tu plantais", "il / elle plantait"],
      ["nous plantions", "vous plantiez", "ils / elles plantaient"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — imparfait", UCOL.u1,
      ["j'étais — j'avais", "tu étais — tu avais", "il / elle était — il / elle avait"],
      ["nous étions — nous avions", "vous étiez — vous aviez", "ils / elles étaient — ils / elles avaient"]),
    p("", { after: 80 }),
    bullet([run("Les valeurs de l'imparfait (unité 3) : ", { bold: true }),
      run("le décor du récit, l'habitude passée, la description dans le passé.")]),
    note("exemple : « Autrefois, le village n'avait ni radio ni journaux. »"),
    p("", { after: 60 }),
    sub("3. Le passé composé"),
    conjTable("PLANTER et VENIR — passé composé", UCOL.u4,
      ["j'ai planté", "tu as planté", "il / elle a planté"],
      ["je suis venu(e)", "tu es venu(e)", "il est venu / elle est venue"]),
    p("", { after: 80 }),
    bullet([run("Avec ÊTRE", { bold: true }), run(" (venir, aller, partir, arriver, rester…), le participe "), run("s'accorde", { bold: true, color: C.SALMON, hl: true }), run(" : elle est venue, ils sont partis.")]),
    p("", { after: 60 }),
    sub("4. L'impératif présent — le temps du dépliant !"),
    conjTable("PLANTER / FINIR / FAIRE — impératif", UCOL.u7,
      ["plante ! — finis ! — fais !", "plantons ! — finissons ! — faisons !"],
      ["plantez ! — finissez ! — faites !", "[pas de sujet : l'ordre est direct]"]),
    p("", { after: 80 }),
    sub("5. Les verbes attributifs (unité 5)"),
    bullet([run("être, sembler, paraître, devenir, rester, demeurer", { bold: true, color: C.SALMON, hl: true }),
      run(" relient le sujet à sa qualité : « La rizière "), run("semble", { bold: true }), run(" calme. »")]),
    note("l'adjectif attribut s'accorde avec le sujet : la rizière semble calme, les plants deviennent dorés"),
  ];
}

// ============ ANNEXE 4 — Flashcards et jeux de classe ============
function annex4() {
  return [
    ...annexTitle("annex4", 4, "FLASHCARDS ET JEUX DE CLASSE"),
    p("Des cartes à fabriquer et des jeux prêts à l'emploi, pour réviser en s'amusant — seul, en binôme ou en classe entière.", { after: 100 }),
    sub("1. Je fabrique mes flashcards"),
    bullet([run("Recto : ", { bold: true }), run("le mot en gros (exemple : "), run("la mareyeuse", { bold: true, color: C.SALMON, hl: true }), run(").")]),
    bullet([run("Verso : ", { bold: true }), run("la définition et une phrase exemple.")]),
    bullet([run("Où trouver les mots ? ", { bold: true }), run("Dans l'imagier de l'annexe 1 : une couleur par unité.")]),
    note("un morceau de carton, des ciseaux : dix cartes par unité suffisent"),
    p("", { after: 60 }),
    sub("2. Les jeux avec les flashcards"),
    bullet([run("Le défi des paires : ", { bold: true }), run("retrouver le mot et sa définition face cachée.")]),
    bullet([run("Le mime : ", { bold: true }), run("un joueur mime le mot (hisser la voile, trier les déchets), les autres devinent.")]),
    bullet([run("La chaîne des unités : ", { bold: true }), run("tirer une carte et dire de quelle unité elle vient, puis une phrase avec le mot.")]),
    p("", { after: 60 }),
    sub("3. Les jeux de langue de l'année"),
    bullet([run("La Martinière : ", { bold: true }), run("le maître donne l'indice, tous écrivent la réponse sur l'ardoise, on lève ensemble.")]),
    bullet([run("La chaîne des relatifs : ", { bold: true }), run("le premier dit « Voici la pirogue… », le suivant enchaîne « …que mon père a construite », le troisième « …dont la voile est rouge »…")]),
    bullet([run("Le marché aux articulateurs : ", { bold: true }), run("relier deux phrases tirées au sort avec car, donc, mais ou pourtant — et justifier !")]),
    bullet([run("Le guide d'un jour : ", { bold: true }), run("un élève guide la classe dans l'école : « À gauche, derrière la porte… » — indicateurs spatiaux obligatoires.")]),
    bullet([run("Le tribunal des homophones : ", { bold: true }), run("a ou à ? et ou est ? L'accusé plaide, la classe juge.")]),
    p("", { after: 60 }),
    sub("4. Le rituel des cinq minutes"),
    bullet([run("Chaque matin : ", { bold: true }), run("trois flashcards, une question de conjugaison, un relatif à compléter.")]),
    note("cinq minutes par jour valent mieux qu'une heure la veille du test"),
  ];
}

// ============ ANNEXE 5 — Les stratégies de lecture ============
function annex5() {
  return [
    ...annexTitle("annex5", 5, "LES STRATÉGIES DE LECTURE"),
    p("D'après les orientations officielles du programme, reformulées pour toi. Devant un texte nouveau, je ne me jette pas sur les mots : j'avance par étapes.", { after: 100 }),
    sub("1. Lire un texte en cinq étapes"),
    bullet([run("1. La lecture silencieuse : ", { bold: true }), run("je lis une première fois, sans bruit, sans m'arrêter aux mots difficiles.")]),
    bullet([run("2. La vue d'ensemble : ", { bold: true }), run("de quoi parle le texte ? Le titre, les paragraphes et les mots répétés me le disent.")]),
    bullet([run("3. Les articulations : ", { bold: true }), run("je repère les mots qui organisent : d'abord, ensuite, car, donc, mais…")]),
    note("ce sont les panneaux indicateurs du texte"),
    bullet([run("4. Le thème de chaque paragraphe : ", { bold: true }), run("une phrase par paragraphe : qui ? quoi ? où ?")]),
    bullet([run("5. Les idées essentielles : ", { bold: true }), run("je redis le texte en trois phrases à moi — si j'y arrive, j'ai compris.")]),
    p("", { after: 60 }),
    sub("2. Lire une image en cinq étapes"),
    bullet([run("1. J'observe : ", { bold: true }), run("qui, quoi, où, quand — sans encore juger.")]),
    bullet([run("2. Je questionne : ", { bold: true }), run("que fait chaque personnage ? Que voit-on au premier plan, à l'arrière-plan ?")]),
    bullet([run("3. Nous discutons : ", { bold: true }), run("chacun dit ce qu'il comprend ; les avis peuvent différer.")]),
    bullet([run("4. Nous résumons : ", { bold: true }), run("une phrase qui dit le message de l'image.")]),
    bullet([run("5. Nous dégageons la valeur : ", { bold: true }), run("qu'est-ce que l'image nous invite à faire ou à respecter ?")]),
    p("", { after: 60 }),
    sub("3. Mes réflexes face aux mots difficiles"),
    bullet([run("Je lis la phrase entière : ", { bold: true }), run("le contexte éclaire souvent le mot.")]),
    bullet([run("Je cherche la famille : ", { bold: true }), run("reboiser → bois ; l'érosion → éroder, user.")]),
    bullet([run("Je continue ma lecture : ", { bold: true }), run("un mot inconnu n'arrête pas un bon lecteur ; je vérifie au dictionnaire après.")]),
  ];
}

// ============ ANNEXE 6 — Orthographe et accords ============
function annex6() {
  return [
    ...annexTitle("annex6", 6, "ORTHOGRAPHE ET ACCORDS"),
    p("Les règles qui sauvent une copie : les accords de base, les homophones et les pièges rencontrés dans l'année.", { after: 100 }),
    sub("1. Les trois accords de base"),
    bullet([run("Le verbe s'accorde avec son sujet : ", { bold: true }), run("Les pirogues "), run("rentrent", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    note("je pose toujours la question : qui est-ce qui rentre ?"),
    bullet([run("L'adjectif s'accorde avec son nom : ", { bold: true }), run("des collines "), run("vertes", { bold: true, color: C.SALMON, hl: true }), run(", de jeunes plants "), run("dorés", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    bullet([run("Le participe avec ÊTRE s'accorde : ", { bold: true }), run("elle est "), run("venue", { bold: true, color: C.SALMON, hl: true }), run(", ils sont "), run("partis", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    p("", { after: 60 }),
    sub("2. Les homophones à ne plus confondre"),
    bullet([run("a / à : ", { bold: true }), run("il "), run("a", { bold: true, color: C.SALMON, hl: true }), run(" pêché (avoir) — il part "), run("à", { bold: true, color: C.SALMON, hl: true }), run(" l'aube.")], DARK),
    note("astuce : si je peux dire « avait », c'est a sans accent"),
    bullet([run("et / est : ", { bold: true }), run("le riz "), run("et", { bold: true, color: C.SALMON, hl: true }), run(" le manioc — la mer "), run("est", { bold: true, color: C.SALMON, hl: true }), run(" calme.")]),
    bullet([run("on / ont : ", { bold: true }), run("on", { bold: true, color: C.SALMON, hl: true }), run(" trie les déchets — ils "), run("ont", { bold: true, color: C.SALMON, hl: true }), run(" planté mille arbres.")]),
    bullet([run("son / sont : ", { bold: true }), run("son", { bold: true, color: C.SALMON, hl: true }), run(" filet — les filets "), run("sont", { bold: true, color: C.SALMON, hl: true }), run(" réparés.")]),
    bullet([run("ou / où : ", { bold: true }), run("la ligne "), run("ou", { bold: true, color: C.SALMON, hl: true }), run(" le filet ? — le port "), run("où", { bold: true, color: C.SALMON, hl: true }), run(" je suis né.")]),
    bullet([run("ce / se : ", { bold: true }), run("ce", { bold: true, color: C.SALMON, hl: true }), run(" métier — la plage "), run("se", { bold: true, color: C.SALMON, hl: true }), run(" réveille.")]),
    p("", { after: 60 }),
    sub("3. Les pièges de l'année"),
    bullet([run("que s'élide, qui jamais : ", { bold: true }), run("l'homme "), run("qu'", { bold: true, color: C.SALMON, hl: true }), run("on attend, l'homme "), run("qui", { bold: true, color: C.SALMON, hl: true }), run(" arrive.")]),
    bullet([run("à laquelle, de laquelle ", { bold: true }), run("ne se contractent pas ; "), run("auquel, duquel, auxquels, desquels", { bold: true, color: C.SALMON, hl: true }), run(" si.")]),
    bullet([run("Les mots invariables à savoir : ", { bold: true }), run("toujours, jamais, pendant, pourtant, aussitôt, parmi, malgré, dehors, longtemps, désormais.", { bold: true, color: C.SALMON, hl: true })]),
    note("ils s'écrivent toujours pareil : apprends-les une fois pour toutes"),
    p("", { after: 60 }),
    sub("4. Ma relecture en trois passages"),
    bullet([run("1er passage : ", { bold: true }), run("les accords sujet-verbe.")]),
    bullet([run("2e passage : ", { bold: true }), run("les homophones.")]),
    bullet([run("3e passage : ", { bold: true }), run("la ponctuation et les majuscules.")]),
    note("on ne voit jamais tout d'un coup : trois petits passages valent mieux qu'un grand"),
  ];
}

// ============ Page finale ============
function finalPage() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: SZ.UNIT, color: UCOL.u7, center: true, after: 140 }),
    p([run("Tu as parcouru les 7 unités de ton année de 5e :", { bold: true, size: SZ.SUB })], { center: true, after: 100 }),
    p([run("la culture — les us et coutumes — les médias — la délinquance — l'agriculture et l'élevage — la pêche — l'environnement", { italic: true })], { center: true, after: 120 }),
    p([run("Tu sais maintenant informer, raconter, décrire et faire agir.", { bold: true })], { center: true, after: 80 }),
    p([run("Tu sais écouter, lire, dire et écrire — en classe et dans la vie.", { bold: true })], { center: true, after: 120 }),
    p([run("« Ny fahaizana no lova tsara indrindra. »", { bold: true, size: SZ.SUB, color: UCOL.u1 })], { center: true, after: 60 }),
    p([run("Le savoir est le plus bel héritage.", { italic: true, color: C.GRAY })], { center: true, after: 140 }),
    p([run("Bonne route vers la classe de 4e !", { bold: true, size: SZ.SUB, color: UCOL.u6 })], { center: true, after: 80 }),
    p([run("J-Learn — J-Lab Madagascar", { italic: true, color: C.GRAY, size: 24 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    ...annex1(), pageBreak(),
    ...annex2(), pageBreak(),
    ...annex3(), pageBreak(),
    ...annex4(), pageBreak(),
    ...annex5(), pageBreak(),
    ...annex6(), pageBreak(),
    ...finalPage(),
  ];
};
