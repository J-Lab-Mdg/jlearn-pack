// Français T8 — ANNEXES (1 à 12) + page finale
const fs = require("fs");
const path = require("path");
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, cell, img, imgFloat, pageBreak,
        bookmarkTitle, unitBanner, sub } = B;
const { Table, TableRow, WidthType } = require("docx");

const DARK = "212F3D";
const UCOL = {
  u1: "1A5276", u2: "922B21", u3: "6C3483", u4: "AF601A",
  u5: "117864", u6: "B7950B", u7: "283747",
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
    ["UNITÉ 1 — LE TOURISME", UCOL.u1, [
      ["un touriste", "le voyageur qui découvre une région"],
      ["un site", "un lieu remarquable que l'on visite"],
      ["un itinéraire", "le chemin prévu, étape par étape"],
      ["un guide", "celui qui connaît les lieux et les raconte"],
      ["l'Allée des Baobabs", "les géants de Morondava, au couchant"],
      ["les tsingy", "les cathédrales de pierre de Bemaraha"],
    ]],
    ["UNITÉ 2 — LES CATASTROPHES NATURELLES", UCOL.u2, [
      ["un cyclone", "la grande tempête tournante de janvier à mars"],
      ["une inondation", "l'eau qui envahit maisons et rizières"],
      ["la sécheresse", "le ciel sans pluie, la terre qui craque"],
      ["un séisme", "le tremblement de terre"],
      ["la prévention", "agir avant, pour protéger les siens"],
    ]],
    ["UNITÉ 3 — LES ARTS", UCOL.u3, [
      ["une œuvre", "ce que l'artiste crée : tableau, statue, film"],
      ["la peinture", "l'art des couleurs sur la toile"],
      ["la sculpture", "l'art de tailler le bois ou la pierre"],
      ["le septième art", "le cinéma, dans la grande classification"],
      ["expliquer", "rendre clair : définir, reformuler, donner un exemple"],
    ]],
    ["UNITÉ 4 — L'ARTISANAT", UCOL.u4, [
      ["un artisan", "celui qui crée de ses mains, dans son atelier"],
      ["la poterie", "l'argile tournée puis cuite"],
      ["la bijouterie", "l'art des parures d'argent et de corne"],
      ["la menuiserie", "l'art du bois : meubles, portes, pirogues"],
      ["la matière première", "ce que la nature donne et que la main transforme"],
    ]],
    ["UNITÉ 5 — LA CULTURE", UCOL.u5, [
      ["une cérémonie", "la grande fête qui marque un moment de la vie"],
      ["le famorana", "la fête de la circoncision"],
      ["le famadihana", "le retournement, en l'honneur des ancêtres"],
      ["les ancêtres", "les anciens de la famille, toujours honorés"],
      ["le schéma narratif", "le chemin du récit : début, nœud, dénouement"],
    ]],
    ["UNITÉ 6 — LA MUSIQUE", UCOL.u6, [
      ["la mélodie", "la suite de notes que l'on fredonne"],
      ["le rythme", "la pulsation qui fait taper du pied"],
      ["le tempo", "la vitesse de la musique"],
      ["la valiha", "la cithare de bambou, reine des cordes"],
      ["le salegy", "la musique reine du nord, rapide et joyeuse"],
    ]],
    ["UNITÉ 7 — LES NOUVELLES TECHNOLOGIES", UCOL.u7, [
      ["l'ordinateur", "écran, clavier, souris : la machine à tout faire"],
      ["le smartphone", "le téléphone intelligent"],
      ["la clé USB", "la petite mémoire que l'on branche"],
      ["télécharger", "copier un fichier d'Internet vers son appareil"],
      ["une notice", "le texte qui guide l'utilisation, pas à pas"],
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
    p("Trois familles de textes ont traversé l'année de 4e. Avant d'écrire, je me demande : qu'est-ce que je veux faire ? Faire agir, raconter ou expliquer ?", { after: 100 }),
    sub("1. FAIRE AGIR — le texte injonctif (unités 1 et 7)"),
    bullet([run("Le plan : ", { bold: true }), run("le but → le matériel ou la préparation → les étapes dans l'ordre → la sécurité.")]),
    bullet([run("Les outils : ", { bold: true }), run("l'infinitif ou l'impératif, les articulateurs chronologiques, les étapes numérotées, la défense avec ne pas.")]),
    note("exemple : l'itinéraire de visite, la notice de la lampe solaire"),
    p("", { after: 60 }),
    sub("2. RACONTER — le texte narratif (unités 2 et 5)"),
    bullet([run("Le plan : ", { bold: true }), run("la situation initiale → l'élément perturbateur → les péripéties → la situation finale.")]),
    bullet([run("Les outils : ", { bold: true }), run("l'imparfait (le décor) + le passé composé (les actions) ; les indicateurs de temps : la veille, pendant, soudain, le lendemain.")]),
    note("exemple : le récit du cyclone, le récit d'un famadihana"),
    p("", { after: 60 }),
    sub("3. EXPLIQUER — le texte explicatif (unités 3, 4 et 6)"),
    bullet([run("Le plan : ", { bold: true }), run("la question ou l'annonce de l'idée → l'explication → l'illustration → la conclusion.")]),
    bullet([run("Les outils : ", { bold: true }), run("le présent, les procédés (définition, reformulation avec c'est-à-dire, exemple), les articulateurs : vu que, grâce à, en effet, donc, bref, citons.")]),
    note("exemple : la page sur le salegy, le reportage à l'atelier de l'artisan"),
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
    p("Les temps et les modes travaillés cette année, avec les verbes les plus utiles. Récite une colonne par jour : en deux semaines, tout est à toi !", { after: 100 }),
    sub("1. Le présent de l'indicatif — le temps de l'explication"),
    conjTable("VISITER (1er groupe) — présent", UCOL.u1,
      ["je visite", "tu visites", "il / elle visite"],
      ["nous visitons", "vous visitez", "ils / elles visitent"]),
    p("", { after: 60 }),
    conjTable("CHOISIR (2e groupe) — présent", UCOL.u4,
      ["je choisis", "tu choisis", "il / elle choisit"],
      ["nous choisissons", "vous choisissez", "ils / elles choisissent"]),
    p("", { after: 60 }),
    conjTable("PRENDRE (3e groupe) — présent", UCOL.u6,
      ["je prends", "tu prends", "il / elle prend"],
      ["nous prenons", "vous prenez", "ils / elles prennent"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — présent", UCOL.u5,
      ["je suis — j'ai", "tu es — tu as", "il / elle est — il / elle a"],
      ["nous sommes — nous avons", "vous êtes — vous avez", "ils / elles sont — ils / elles ont"]),
    p("", { after: 80 }),
    bullet([run("Les valeurs du présent : ", { bold: true }),
      run("l'action en train de se faire, l'habitude, la vérité générale — c'est le temps des textes explicatifs : « La valiha est une cithare. »")]),
    p("", { after: 60 }),
    sub("2. L'imparfait de l'indicatif — le décor du récit (unité 5)"),
    conjTable("VISITER — imparfait", UCOL.u1,
      ["je visitais", "tu visitais", "il / elle visitait"],
      ["nous visitions", "vous visitiez", "ils / elles visitaient"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — imparfait", UCOL.u5,
      ["j'étais — j'avais", "tu étais — tu avais", "il / elle était — il / elle avait"],
      ["nous étions — nous avions", "vous étiez — vous aviez", "ils / elles étaient — ils / elles avaient"]),
    p("", { after: 80 }),
    bullet([run("Sa valeur dans le récit : ", { bold: true }),
      run("il plante le décor et dit les habitudes passées : « La veille du famadihana, le village ne dormait pas. »")]),
    p("", { after: 60 }),
    sub("3. Le passé composé — les actions du récit (unité 5)"),
    conjTable("VISITER et VENIR — passé composé", UCOL.u2,
      ["j'ai visité", "tu as visité", "il / elle a visité"],
      ["je suis venu(e)", "tu es venu(e)", "il est venu / elle est venue"]),
    p("", { after: 80 }),
    bullet([run("Avec ÊTRE", { bold: true }), run(" (venir, aller, partir, arriver, rester…), le participe "), run("s'accorde", { bold: true, color: C.SALMON, hl: true }), run(" : elle est venue, ils sont partis.")]),
    note("dans le récit : l'imparfait pose le décor, le passé composé fait avancer l'action"),
    p("", { after: 60 }),
    sub("4. Le futur simple — le temps de l'itinéraire (unité 1)"),
    conjTable("VISITER (1er groupe) — futur simple", UCOL.u1,
      ["je visiterai", "tu visiteras", "il / elle visitera"],
      ["nous visiterons", "vous visiterez", "ils / elles visiteront"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — futur simple", UCOL.u5,
      ["je serai — j'aurai", "tu seras — tu auras", "il / elle sera — il / elle aura"],
      ["nous serons — nous aurons", "vous serez — vous aurez", "ils / elles seront — ils / elles auront"]),
    p("", { after: 80 }),
    bullet([run("Quand l'utiliser ? ", { bold: true }),
      run("pour un programme, un projet, une promesse : « Au lever du jour, vous marcherez vers les tsingy. »")]),
    p("", { after: 60 }),
    sub("5. L'impératif présent — le temps de la consigne (unités 1 et 7)"),
    conjTable("VISITER / CHOISIR / FAIRE — impératif", UCOL.u7,
      ["visite ! — choisis ! — fais !", "visitons ! — choisissons ! — faisons !"],
      ["visitez ! — choisissez ! — faites !", "[pas de sujet : l'ordre est direct]"]),
    p("", { after: 80 }),
    bullet([run("Attention : ", { bold: true }), run("pas de s à la 2e personne du 1er groupe : « Clique ici », « Visite le parc ».")]),
    p("", { after: 60 }),
    sub("6. Le mode infinitif — le mode des notices (unité 7)"),
    conjTable("LES TROIS GROUPES — infinitif", UCOL.u7,
      ["1er groupe : -er → visiter, cliquer", "2e groupe : -ir (-issons) → choisir, finir"],
      ["3e groupe : le reste → prendre, éteindre, mettre, faire", "[la forme du dictionnaire]"]),
    p("", { after: 80 }),
    bullet([run("La phrase infinitive : ", { bold: true }),
      run("sans sujet exprimé, elle s'adresse à tous : « Allumer l'appareil. Ne pas démonter la lampe. »")]),
    p("", { after: 60 }),
    sub("7. Quel temps (ou mode) choisir ? Le guide rapide"),
    bullet([run("J'explique une vérité, je définis → ", { bold: true }), run("le présent", { bold: true, color: C.SALMON, hl: true }), run(" : « Le salegy vient du nord. »")]),
    bullet([run("Je pose le décor d'un récit → ", { bold: true }), run("l'imparfait", { bold: true, color: C.SALMON, hl: true }), run(" : « Le village ne dormait pas. »")]),
    bullet([run("Je raconte les actions passées → ", { bold: true }), run("le passé composé", { bold: true, color: C.SALMON, hl: true }), run(" : « Le cyclone a frappé la côte. »")]),
    bullet([run("J'annonce un programme → ", { bold: true }), run("le futur simple", { bold: true, color: C.SALMON, hl: true }), run(" : « Vous visiterez l'Isalo. »")]),
    bullet([run("Je parle à quelqu'un pour le faire agir → ", { bold: true }), run("l'impératif", { bold: true, color: C.SALMON, hl: true }), run(" : « Éteignez vos écrans ! »")]),
    bullet([run("J'écris une notice pour tous → ", { bold: true }), run("l'infinitif", { bold: true, color: C.SALMON, hl: true }), run(" : « Appuyer sur ON. »")]),
    note("astuce : cherche d'abord CE QUE VEUT FAIRE ton texte, ensuite choisis le temps"),
  ];
}

// ============ ANNEXE 4 — Flashcards et jeux de classe ============
function annex4() {
  return [
    ...annexTitle("annex4", 4, "FLASHCARDS ET JEUX DE CLASSE"),
    p("Des cartes à fabriquer et des jeux prêts à l'emploi, pour réviser en s'amusant — seul, en binôme ou en classe entière.", { after: 100 }),
    sub("1. Je fabrique mes flashcards"),
    bullet([run("Recto : ", { bold: true }), run("le mot en gros (exemple : "), run("la valiha", { bold: true, color: C.SALMON, hl: true }), run(").")]),
    bullet([run("Verso : ", { bold: true }), run("la définition et une phrase exemple.")]),
    bullet([run("Où trouver les mots ? ", { bold: true }), run("Dans l'imagier de l'annexe 1 : une couleur par unité.")]),
    note("un morceau de carton, des ciseaux : dix cartes par unité suffisent"),
    p("", { after: 60 }),
    sub("2. Les jeux avec les flashcards"),
    bullet([run("Le défi des paires : ", { bold: true }), run("retrouver le mot et sa définition face cachée.")]),
    bullet([run("Le mime : ", { bold: true }), run("un joueur mime le mot (tourner la poterie, jouer de la valiha, cliquer), les autres devinent.")]),
    bullet([run("La chaîne des unités : ", { bold: true }), run("tirer une carte et dire de quelle unité elle vient, puis une phrase avec le mot.")]),
    p("", { after: 60 }),
    sub("3. Les jeux de langue de l'année"),
    bullet([run("La Martinière : ", { bold: true }), run("le maître donne l'indice, tous écrivent la réponse sur l'ardoise, on lève ensemble.")]),
    bullet([run("Le guide d'un jour : ", { bold: true }), run("un élève guide la classe dans l'école : « Là-bas, derrière le manguier, à côté du puits… » — connecteurs spatiaux obligatoires (unité 4).")]),
    bullet([run("La marche à trois temps : ", { bold: true }), run("le premier annonce une idée, le deuxième l'explique avec vu que, le troisième l'illustre avec par exemple (unité 6).")]),
    bullet([run("L'interrogatoire du reporter : ", { bold: true }), run("une question fermée, une question ouverte, puis « Peux-tu me donner un exemple concret ? » (unités 2 et 4).")]),
    bullet([run("Le tribunal des homophones : ", { bold: true }), run("a ou à ? et ou est ? L'accusé plaide, la classe juge (annexe 7).")]),
    bullet([run("La notice vivante : ", { bold: true }), run("un élève lit sa notice, un autre mime chaque étape : si le mime échoue… il manque une étape !")]),
    p("", { after: 60 }),
    sub("4. Le rituel des cinq minutes"),
    bullet([run("Chaque matin : ", { bold: true }), run("trois flashcards, une question de conjugaison, un articulateur à placer dans une phrase.")]),
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
    bullet([run("3. Les articulations : ", { bold: true }), run("je repère les mots qui organisent : d'abord, ensuite, vu que, donc, par exemple, bref…")]),
    note("ce sont les panneaux indicateurs du texte"),
    bullet([run("4. Le thème de chaque paragraphe : ", { bold: true }), run("une phrase par paragraphe : qui ? quoi ? où ?")]),
    bullet([run("5. Les idées essentielles : ", { bold: true }), run("je redis le texte en trois phrases à moi — si j'y arrive, j'ai compris.")]),
    p("", { after: 60 }),
    sub("2. Reconnaître le type du texte dès les premières lignes"),
    bullet([run("Des infinitifs ou des impératifs, des étapes ? ", { bold: true }), run("→ un texte injonctif : il veut me faire agir.")]),
    bullet([run("Un décor à l'imparfait, un « soudain » ? ", { bold: true }), run("→ un récit : je cherche le schéma narratif.")]),
    bullet([run("Une question de départ, des « c'est-à-dire » ? ", { bold: true }), run("→ un texte explicatif : je cherche l'annonce, l'explication, l'illustration.")]),
    p("", { after: 60 }),
    sub("3. Lire une image en cinq étapes"),
    bullet([run("1. J'observe : ", { bold: true }), run("qui, quoi, où, quand — sans encore juger.")]),
    bullet([run("2. Je questionne : ", { bold: true }), run("que fait chaque personnage ? Que voit-on au premier plan, à l'arrière-plan ?")]),
    bullet([run("3. Nous discutons : ", { bold: true }), run("chacun dit ce qu'il comprend ; les avis peuvent différer.")]),
    bullet([run("4. Nous résumons : ", { bold: true }), run("une phrase qui dit le message de l'image.")]),
    bullet([run("5. Nous dégageons la valeur : ", { bold: true }), run("qu'est-ce que l'image nous invite à faire ou à respecter ?")]),
    p("", { after: 60 }),
    sub("4. Mes réflexes face aux mots difficiles"),
    bullet([run("Je lis la phrase entière : ", { bold: true }), run("le contexte éclaire souvent le mot.")]),
    bullet([run("Je cherche la famille : ", { bold: true }), run("tubulaire → tube ; solennel → cérémonie solennelle.")]),
    bullet([run("Je continue ma lecture : ", { bold: true }), run("un mot inconnu n'arrête pas un bon lecteur ; je vérifie au dictionnaire après.")]),
  ];
}

// ============ ANNEXE 6 — Orthographe et accords ============
function annex6() {
  return [
    ...annexTitle("annex6", 6, "ORTHOGRAPHE ET ACCORDS"),
    p("Les règles qui sauvent une copie : les accords de base, les homophones et les pièges rencontrés dans l'année.", { after: 100 }),
    sub("1. Les trois accords de base"),
    bullet([run("Le verbe s'accorde avec son sujet : ", { bold: true }), run("Les touristes "), run("arrivent", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    note("je pose toujours la question : qui est-ce qui arrive ?"),
    bullet([run("L'adjectif s'accorde avec son nom : ", { bold: true }), run("des rythmes "), run("entraînants", { bold: true, color: C.SALMON, hl: true }), run(", de grandes "), run("cérémonies", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    bullet([run("Le participe avec ÊTRE s'accorde : ", { bold: true }), run("elle est "), run("venue", { bold: true, color: C.SALMON, hl: true }), run(", ils sont "), run("partis", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    p("", { after: 60 }),
    sub("2. Les homophones à ne plus confondre"),
    bullet([run("a / à : ", { bold: true }), run("il "), run("a", { bold: true, color: C.SALMON, hl: true }), run(" visité (avoir) — il part "), run("à", { bold: true, color: C.SALMON, hl: true }), run(" l'aube.")], DARK),
    note("astuce : si je peux dire « avait », c'est a sans accent"),
    bullet([run("et / est : ", { bold: true }), run("la valiha "), run("et", { bold: true, color: C.SALMON, hl: true }), run(" la sodina — le sentier "), run("est", { bold: true, color: C.SALMON, hl: true }), run(" balisé.")]),
    bullet([run("on / ont : ", { bold: true }), run("on", { bold: true, color: C.SALMON, hl: true }), run(" visite les tsingy — ils "), run("ont", { bold: true, color: C.SALMON, hl: true }), run(" dansé toute la nuit.")]),
    bullet([run("son / sont : ", { bold: true }), run("son", { bold: true, color: C.SALMON, hl: true }), run(" atelier — les bijoux "), run("sont", { bold: true, color: C.SALMON, hl: true }), run(" terminés.")]),
    bullet([run("ou / où : ", { bold: true }), run("la poterie "), run("ou", { bold: true, color: C.SALMON, hl: true }), run(" la vannerie ? — l'atelier "), run("où", { bold: true, color: C.SALMON, hl: true }), run(" travaille Dadabe.")]),
    bullet([run("ce / se : ", { bold: true }), run("ce", { bold: true, color: C.SALMON, hl: true }), run(" tambour — la fête "), run("se", { bold: true, color: C.SALMON, hl: true }), run(" prépare.")]),
    p("", { after: 60 }),
    sub("3. Les pièges de l'année"),
    bullet([run("L'infinitif après il faut, avant de, pour : ", { bold: true }), run("il faut "), run("relire", { bold: true, color: C.SALMON, hl: true }), run(" ; avant de "), run("dormir", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    note("astuce du remplacement : « il faut mordre » marche → c'est l'infinitif en -er, pas -é"),
    bullet([run("La défense : ", { bold: true }), run("ne pas", { bold: true, color: C.SALMON, hl: true }), run(" + infinitif, les deux mots AVANT le verbe : « Ne pas démonter la lampe. »")]),
    bullet([run("Les accents de « cérémonie », « séisme », « sécheresse » : ", { bold: true }), run("les mots de l'année portent leurs accents comme des lambas !")]),
    bullet([run("Les mots invariables à savoir : ", { bold: true }), run("toujours, jamais, pendant, pourtant, aussitôt, parmi, malgré, dehors, longtemps, désormais.", { bold: true, color: C.SALMON, hl: true })]),
    note("ils s'écrivent toujours pareil : apprends-les une fois pour toutes"),
    p("", { after: 60 }),
    sub("4. Ma relecture en trois passages"),
    bullet([run("1er passage : ", { bold: true }), run("les accords sujet-verbe.")]),
    bullet([run("2e passage : ", { bold: true }), run("les homophones et les infinitifs.")]),
    bullet([run("3e passage : ", { bold: true }), run("la ponctuation et les majuscules.")]),
    note("on ne voit jamais tout d'un coup : trois petits passages valent mieux qu'un grand"),
  ];
}

// ============ ANNEXE 7 — Le tribunal des homophones ============
function annex7() {
  return [
    ...annexTitle("annex7", 7, "LE TRIBUNAL DES HOMOPHONES"),
    p("Les homophones se prononcent pareil mais ne s'écrivent pas pareil. L'annexe 6 a jugé a/à, et/est, on/ont, son/sont. Voici les autres accusés — puis le grand test !", { after: 100 }),
    sub("1. ce / se"),
    bullet([run("ce", { bold: true, color: C.SALMON, hl: true }), run(" montre quelque chose : "), run("ce tambour, ce site", { bold: true }), run(". — "), run("se", { bold: true, color: C.SALMON, hl: true }), run(" fait partie du verbe : "), run("il se connecte", { bold: true }), run(".")]),
    note("astuce : remplace par « le » → « le tambour » marche : c'est CE. « il le connecte » ne veut rien dire ici : c'est SE"),
    sub("2. ou / où"),
    bullet([run("ou", { bold: true, color: C.SALMON, hl: true }), run(" = un choix : "), run("la lumière forte ou douce", { bold: true }), run(". — "), run("où", { bold: true, color: C.SALMON, hl: true }), run(" = un lieu : "), run("le village où bat le tambour", { bold: true }), run(".")]),
    note("astuce : si tu peux dire « ou bien », écris OU sans accent"),
    sub("3. la / là"),
    bullet([run("la", { bold: true, color: C.SALMON, hl: true }), run(" accompagne un nom : "), run("la valiha", { bold: true }), run(". — "), run("là", { bold: true, color: C.SALMON, hl: true }), run(" montre un endroit : "), run("le car s'arrête là !", { bold: true })]),
    sub("4. ses / ces"),
    bullet([run("ses", { bold: true, color: C.SALMON, hl: true }), run(" = les siens : "), run("l'artisan range ses outils", { bold: true }), run(". — "), run("ces", { bold: true, color: C.SALMON, hl: true }), run(" = ceux que je montre : "), run("regarde ces baobabs !", { bold: true })]),
    note("astuce : « ces baobabs-là » marche → CES ; « ses outils à lui » marche → SES"),
    sub("5. mes / mais"),
    bullet([run("mes", { bold: true, color: C.SALMON, hl: true }), run(" = les miens : "), run("mes écouteurs", { bold: true }), run(". — "), run("mais", { bold: true, color: C.SALMON, hl: true }), run(" = une opposition : "), run("petit mais courageux", { bold: true }), run(".")]),
    sub("6. peu / peut / peux"),
    bullet([run("peu", { bold: true, color: C.SALMON, hl: true }), run(" = pas beaucoup. — "), run("il peut / tu peux", { bold: true, color: C.SALMON, hl: true }), run(" = le verbe pouvoir.")]),
    note("astuce : mets la phrase à l'imparfait → « il pouvait » : c'est le verbe"),
    p("", { after: 60 }),
    sub("Le grand test du tribunal (10 phrases)"),
    p("1. (Ce / Se) matin, le marché artisanal (ce / se) remplit vite.", { after: 20 }),
    p("2. Tu préfères la valiha (ou / où) le kabosy ?", { after: 20 }),
    p("3. Voici l'atelier (ou / où) travaille la potière.", { after: 20 }),
    p("4. Pose (la / là) clé USB ici, pas (la / là) !", { after: 20 }),
    p("5. Soa a prêté (ses / ces) écouteurs ; regarde (ses / ces) jolies photos des tsingy !", { after: 20 }),
    p("6. (Mes / Mais) parents sont fatigués, (mes / mais) ils dansent encore.", { after: 20 }),
    p("7. Il dort très (peu / peut), (mes / mais) il (peu / peut) encore jouer du tambour.", { after: 40 }),
    pr([run("Corrigé : ", { bold: true, italic: true, color: C.GRAY, size: 24 }), run("1. Ce, se — 2. ou — 3. où — 4. la, là — 5. ses, ces — 6. Mes, mais — 7. peu, mais, peut.", { italic: true, color: C.GRAY, size: 24 })], { after: 60 }),
  ];
}

// ============ ANNEXE 8 — Les 100 mots à ne plus jamais rater ============
function annex8() {
  return [
    ...annexTitle("annex8", 8, "LES 100 MOTS À NE PLUS JAMAIS RATER"),
    p("Les mots que l'on écrit tous les jours… et que l'on rate tous les jours ! Étudie une famille par semaine : au test, ils ne te surprendront plus.", { after: 100 }),
    sub("1. Ils finissent par une lettre muette"),
    p("toujours — jamais — puis — alors — moins — dans — sans — sous — vers — temps — corps — repas — pays — fois — mois — bois — bras — dos — nid — fond — bord — champ — blanc — grand", { after: 30 }),
    note("astuce : cherche un mot de la même famille — grand → grande, champ → champêtre"),
    sub("2. Leur accent est obligatoire"),
    p("déjà — très — après — été — école — élève — père — mère — frère — derrière — première — rivière — lumière — théâtre — forêt — île — hôpital — bientôt — plutôt — tôt — côté — âge — être — fête — cérémonie", { after: 30 }),
    note("astuce : l'accent circonflexe est souvent le souvenir d'un ancien « s » : forêt → forestier"),
    sub("3. Ils doublent une lettre"),
    p("terre — femme — homme — comme — comment — année — appeler — arriver — attendre — attention — personne — commencer — ennemi — belle — nouvelle — meilleur — ville — mille — aller — chienne — grosse — paresseux", { after: 30 }),
    note("les pièges inverses : nourriture, difficile, apercevoir — une seule lettre !"),
    sub("4. Ils ne s'écrivent pas comme ils se prononcent"),
    p("monsieur — femme — fils — automne — temps — sept — vingt — second — aujourd'hui — oignon — eau — beaucoup — longtemps — pied — nez — riz — tabac — estomac — rythme", { after: 30 }),
    sub("5. Les invariables à savoir par cœur"),
    p("maintenant — pendant — souvent — surtout — aussi — assez — encore — enfin — ensuite — ensemble — pourtant — parfois — quelquefois — presque — malgré — parmi — chez — hier — demain — ici — ailleurs — dehors — dedans — partout", { after: 30 }),
    note("rituel : trois mots par jour sur l'ardoise — en un mois, les cent mots sont à toi"),
  ];
}

// ============ Page finale ============
function finalPage() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: SZ.UNIT, color: UCOL.u5, center: true, after: 140 }),
    p([run("Tu as parcouru les 7 unités de ton année de 4e :", { bold: true, size: SZ.SUB })], { center: true, after: 100 }),
    p([run("le tourisme — les catastrophes naturelles — les arts — l'artisanat — la culture — la musique — les nouvelles technologies", { italic: true })], { center: true, after: 120 }),
    p([run("Tu sais maintenant faire agir, raconter et expliquer.", { bold: true })], { center: true, after: 80 }),
    p([run("Tu sais écouter, lire, dire et écrire — en classe et dans la vie.", { bold: true })], { center: true, after: 120 }),
    p([run("« Ny fahaizana no lova tsara indrindra. »", { bold: true, size: SZ.SUB, color: UCOL.u1 })], { center: true, after: 60 }),
    p([run("Le savoir est le plus bel héritage.", { italic: true, color: C.GRAY })], { center: true, after: 140 }),
    p([run("Bonne route vers la classe de 3e !", { bold: true, size: SZ.SUB, color: UCOL.u6 })], { center: true, after: 80 }),
    p([run("J-Learn — J-Lab Madagascar", { italic: true, color: C.GRAY, size: 24 })], { center: true }),
  ];
}

// ============ ANNEXE 9 — La boîte à connecteurs ============
function annex9() {
  return [
    ...annexTitle("annex9", 9, "LA BOÎTE À CONNECTEURS"),
    p("Les connecteurs sont les panneaux indicateurs du texte : ils relient les idées et guident le lecteur. Choisis le bon rayon de la boîte — c'est la grande spécialité de ton année de 4e !", { after: 100 }),
    sub("1. Pour ORGANISER les étapes (unités 1, 4 et 7)"),
    bullet([run("d'abord, premièrement, ensuite, puis, après, enfin", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : D'abord brancher la clé USB, ensuite copier le dossier, enfin la retirer."),
    sub("2. Pour EXPLIQUER la cause (unités 3, 4 et 6)"),
    bullet([run("vu que, étant donné que, parce que, car, grâce à, à cause de", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Vu que son tempo est vif, le salegy fait danser tout le monde."),
    sub("3. Pour CONFIRMER"),
    bullet([run("en effet", { bold: true, color: C.SALMON, hl: true }), run(" — toujours APRÈS l'affirmation qu'il confirme !")]),
    note("exemple : Le kabosy plaît aux jeunes : en effet, il s'apprend en quelques semaines."),
    sub("4. Pour DÉDUIRE la conséquence (unité 6)"),
    bullet([run("donc, ainsi, c'est pourquoi, alors", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Il a plu toute la nuit, donc la rivière est montée."),
    sub("5. Pour ILLUSTRER (unités 3 et 6)"),
    bullet([run("par exemple, citons, comme, tel que", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Des instruments tels que la valiha émeuvent le public."),
    sub("6. Pour REFORMULER et DÉFINIR (unités 3 et 4)"),
    bullet([run("c'est-à-dire, autrement dit, en d'autres termes", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : La valiha est une cithare tubulaire, c'est-à-dire un instrument dont les cordes courent le long d'un tube."),
    sub("7. Pour SITUER dans l'espace (unités 1 et 4)"),
    bullet([run("ici, là-bas, devant, derrière, à côté de, au fond, à gauche, au loin", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Là-bas, derrière l'atelier, sèchent les poteries ; devant, brille la vitrine."),
    sub("8. Pour ORGANISER le temps du récit (unités 2 et 5)"),
    bullet([run("la veille, pendant, au moment où, soudain, aussitôt, le lendemain", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : La veille, le ciel était lourd ; soudain, le vent s'est levé."),
    sub("9. Pour OPPOSER"),
    bullet([run("mais, pourtant, cependant, au contraire, malgré", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : La sodina ne coûte presque rien, pourtant sa voix émeut les foules."),
    sub("10. Pour CONCLURE et RÉSUMER (unité 6)"),
    bullet([run("bref, en somme, finalement, pour conclure", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Bref, un peuple qui chante garde son cœur en bonne santé."),
  ];
}

// ============ ANNEXE 10 — Mes modèles de textes prêts à l'emploi ============
function annex10() {
  const modele = (titre, color, squelette, texte, mots) => [
    sub(titre),
    ...squelette.map(s => bullet([run(s)])),
    pr([run("Modèle : ", { bold: true }), run(texte, { italic: true })], { after: 40 }),
    note("les mots qui aident : " + mots),
    p("", { after: 60 }),
  ];
  return [
    ...annexTitle("annex10", 10, "MES MODÈLES DE TEXTES PRÊTS À L'EMPLOI"),
    p("Un modèle court et annoté pour chaque texte de l'année. Avant d'écrire, relis le modèle du genre — puis écris le tien, avec tes mots.", { after: 100 }),
    ...modele("1. L'itinéraire de visite (unité 1)", UCOL.u1,
      ["le but du circuit dès la première ligne", "les étapes dans l'ordre du chemin", "l'impératif ou le futur", "un conseil pratique à la fin"],
      "Une journée à Morondava. Partez tôt : la route est longue. D'abord, visitez le marché et goûtez les beignets chauds. Ensuite, roulez vers l'Allée des Baobabs : vous arriverez pour le coucher du soleil. Enfin, restez jusqu'aux dernières lueurs. Emportez de l'eau et un chapeau !",
      "d'abord, ensuite, enfin — l'impératif du guide"),
    ...modele("2. Le récit de catastrophe (unité 2)", UCOL.u2,
      ["le décor à l'imparfait", "l'élément perturbateur avec « soudain »", "les actions au passé composé", "la situation finale et la leçon"],
      "La veille, le ciel pesait sur Manakara et la mer grondait. Soudain, dans la nuit, le cyclone a frappé. Les familles ont couru vers l'école, serrées sous les lampes. Au matin, le village comptait ses tôles — mais personne ne manquait : les consignes avaient été suivies.",
      "la veille, soudain, aussitôt, au matin"),
    ...modele("3. Le paragraphe explicatif (unités 3 et 6)", UCOL.u6,
      ["l'annonce de l'idée, courte, au présent", "l'explication : vu que, en effet", "l'illustration : par exemple, citons", "une conclusion imagée : bref"],
      "Le salegy est la musique reine du nord. Vu que son tempo est vif, impossible de rester assis quand il retentit. Citons les grandes fêtes de Nosy Be, où petits et grands dansent jusqu'au matin. Bref, là où bat le tambour, bat aussi le cœur du village.",
      "vu que, en effet, citons, bref — la marche à trois temps"),
    ...modele("4. Le reportage (unité 4)", UCOL.u4,
      ["le lieu et la personne dès l'ouverture", "les connecteurs spatiaux pour guider l'œil", "une parole rapportée entre guillemets", "une phrase d'avenir pour finir"],
      "À Ambositra, l'atelier de Dadabe sent le palissandre. Là-bas, au fond, dorment les planches ; devant, la vitrine brille de boîtes marquetées. « Le bois parle, il suffit de l'écouter », sourit le vieil artisan. Ses petits-fils, déjà, apprennent à l'entendre.",
      "là-bas, devant, au fond, à côté de"),
    ...modele("5. Le récit de cérémonie (unité 5)", UCOL.u5,
      ["la situation initiale : le village se prépare", "l'événement attendu arrive", "les péripéties : chants, danses, émotions", "la situation finale : ce qui a changé"],
      "Depuis des semaines, la famille préparait le famadihana. Le grand jour est arrivé avec les premiers accordéons. On a porté les ancêtres en dansant, on a chanté les vieux airs, on a partagé le riz gras. Le soir, chacun est rentré le cœur plus léger : la famille s'était retrouvée.",
      "depuis, le grand jour, enfin — imparfait puis passé composé"),
    ...modele("6. La notice d'utilisation (unité 7)", UCOL.u7,
      ["le titre + l'utilité", "le matériel", "les étapes numérotées à l'infinitif", "la consigne de sécurité"],
      "LA TORCHE HAZAVANA — pour éclairer le chemin du soir. MATÉRIEL : deux piles neuves. 1. Ouvrir le couvercle. 2. Placer les piles, puis refermer. 3. Appuyer sur le bouton blanc. SÉCURITÉ : ne pas laisser sous la pluie.",
      "l'infinitif, les numéros, ne pas + infinitif"),
  ];
}

// ============ ANNEXE 11 — La carte touristique et culturelle de Madagascar ============
function annex11() {
  const carte = fs.existsSync(path.join(__dirname, "img", "carte_culturelle.png"))
    ? [img("carte_culturelle.png", 300, 1.7917)] : [];
  return [
    ...annexTitle("annex11", 11, "LA CARTE TOURISTIQUE ET CULTURELLE DE MADAGASCAR"),
    p("Tout le manuel sur une seule image ! Retrouve sur la carte les trésors rencontrés dans les sept unités.", { after: 80 }),
    ...carte,
    sub("Je lis la carte"),
    bullet([run("Le Nord : ", { bold: true }), run("le salegy de Nosy Be et les plages des touristes (unités 1 et 6).")]),
    bullet([run("L'Ouest : ", { bold: true }), run("l'Allée des Baobabs de Morondava et les tsingy de Bemaraha (unité 1).")]),
    bullet([run("Les Hautes Terres : ", { bold: true }), run("la marqueterie d'Ambositra, la valiha et le famadihana (unités 4, 5 et 6).")]),
    bullet([run("La côte Est : ", { bold: true }), run("Manakara et les cyclones racontés par Lila (unité 2) ; le sambatra de Mananjary (unité 5).")]),
    bullet([run("Le Sud : ", { bold: true }), run("le parc de l'Isalo, le Grand-Sud d'Androy et sa sécheresse (unités 1 et 2).")]),
    p("", { after: 40 }),
    sub("Le jeu de la carte"),
    bullet([run("Choisis un lieu, retrouve sa leçon dans le manuel, puis présente-le en une minute — annonce, explication, exemple, bref final !")]),
  ];
}

// ============ ANNEXE 12 — Je m'évalue, unité par unité ============
function annex12() {
  const item = (t) => bullet([run(t), run("   ☆ ☆ ☆", { bold: true, color: C.SALMON })]);
  const unite = (titre, color, items) => [
    pr([run(titre, { bold: true, color: color })], { after: 40 }),
    ...items.map(item),
    p("", { after: 50 }),
  ];
  return [
    ...annexTitle("annex12", 12, "JE M'ÉVALUE, UNITÉ PAR UNITÉ"),
    p("À la fin de chaque unité, colorie tes étoiles : ☆ = j'essaie encore, ☆☆ = je sais presque, ☆☆☆ = je sais et je peux expliquer à un camarade. Sois honnête : c'est TON tableau de bord.", { after: 100 }),
    ...unite("UNITÉ 1 — LE TOURISME", UCOL.u1, [
      "Je sais présenter un site touristique de Madagascar.",
      "Je sais reconnaître un texte injonctif et son but : faire agir.",
      "Je sais employer l'impératif et le futur pour guider un visiteur.",
      "Je sais rédiger un itinéraire avec les articulateurs chronologiques."]),
    ...unite("UNITÉ 2 — LES CATASTROPHES NATURELLES", UCOL.u2, [
      "Je sais poser des questions fermées et ouvertes sur un événement.",
      "Je sais employer les indicateurs de temps et de lieu du récit.",
      "Je sais raconter une catastrophe avec l'imparfait et le passé composé.",
      "Je sais citer les gestes de prévention qui sauvent."]),
    ...unite("UNITÉ 3 — LES ARTS", UCOL.u3, [
      "Je sais citer les sortes d'art et la classification des arts.",
      "Je sais définir, reformuler avec c'est-à-dire et donner un exemple.",
      "Je sais reconnaître un texte explicatif et son registre didactique.",
      "Je sais rédiger un petit texte explicatif sur un art."]),
    ...unite("UNITÉ 4 — L'ARTISANAT", UCOL.u4, [
      "Je sais nommer les métiers de l'artisanat, leurs outils, leurs matières.",
      "Je sais guider l'œil du lecteur avec les connecteurs spatiaux.",
      "Je sais demander une précision : « Peux-tu me donner un exemple concret ? »",
      "Je sais rédiger un reportage avec une parole rapportée."]),
    ...unite("UNITÉ 5 — LA CULTURE", UCOL.u5, [
      "Je sais raconter une cérémonie de chez nous avec respect.",
      "Je sais retrouver le schéma narratif d'un récit.",
      "Je sais conjuguer les trois groupes au présent, à l'imparfait, au passé composé.",
      "Je sais écrire un récit avec l'imparfait pour le décor et le passé composé pour les actions."]),
    ...unite("UNITÉ 6 — LA MUSIQUE", UCOL.u6, [
      "Je sais employer les mots clés : mélodie, rythme, tempo, timbre.",
      "Je sais expliquer avec vu que, grâce à et en effet bien placé.",
      "Je sais déduire avec donc et bref, illustrer avec par exemple et citons.",
      "Je sais construire un paragraphe : annonce, explication, illustration."]),
    ...unite("UNITÉ 7 — LES NOUVELLES TECHNOLOGIES", UCOL.u7, [
      "Je sais employer les mots du numérique : se connecter, télécharger…",
      "Je sais écrire une phrase infinitive et une défense avec ne pas.",
      "Je sais donner une consigne de quatre manières différentes.",
      "Je sais rédiger une notice en quatre blocs — et rester maître de mon téléphone !"]),
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
    ...annex7(), pageBreak(),
    ...annex8(), pageBreak(),
    ...annex9(), pageBreak(),
    ...annex10(), pageBreak(),
    ...annex11(), pageBreak(),
    ...annex12(), pageBreak(),
    ...finalPage(),
  ];
};
