// Français T4 — ANNEXES 1 à 6 + page finale
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
    ...head("annex1", "ANNEXE 1 — L'IMAGIER DES 5 THÉMATIQUES",
      "Tout le lexique de l'année, thème par thème — à relire avant chaque test."),
    ...theme("u1_ville.png", "UNITÉ 1 — LA VILLE ET LE VILLAGE", "1E8449", [
      ["la ville", "le bâtiment, le magasin, le trottoir, la circulation, le marché."],
      ["le village", "la rizière, le puits, le manguier, la place, le calme."],
      ["comparer", "plus … que, moins … que, comme : la ville est plus bruyante que le village."],
      ["les prépositions de lieu", "dans, sur, sous, à côté de, près de, loin de."],
      ["les homonymes et les synonymes", "des mots qui sonnent pareil / des mots qui veulent dire pareil."],
    ]),
    ...theme("u2_loisirs.png", "UNITÉ 2 — LES LOISIRS", "CA6F1E", [
      ["les types de loisirs", "le jeu, le sport, la lecture, la musique, la promenade, la pêche."],
      ["les démonstratifs", "ce ballon, cet arbre, cette corde, ces billes — je montre du doigt."],
      ["les pronoms COD", "le, la, les, l' : ce livre, je le lis ; ces billes, je les lance."],
      ["dire ce qu'on aime", "j'aime…, je préfère… car / parce que…"],
      ["le tableau du loisir", "Où ? Quand ? Quoi ? Comment ? — pour tout présenter."],
    ]),
    ...theme("u3_saisons.png", "UNITÉ 3 — LE TEMPS ET LES SAISONS", "21618C", [
      ["le calendrier", "les jours, les mois, les saisons de l'année."],
      ["le temps qu'il fait", "il pleut, il fait chaud, il fait froid, le soleil, les nuages, le vent."],
      ["les adverbes de temps", "avant, après, pendant."],
      ["comparer le temps", "plus, moins, aussi … que ; le plus, le moins (le superlatif)."],
      ["le futur proche", "aller + infinitif : demain, il va pleuvoir."],
    ]),
    ...theme("u4_tenues.png", "UNITÉ 4 — LES TENUES VESTIMENTAIRES", "7D3C98", [
      ["les vêtements", "le chapeau, la chemise, le pull, le pantalon, la jupe, les chaussures."],
      ["les accessoires", "l'écharpe, le parapluie, le sac, la ceinture, le lamba."],
      ["la tenue selon le temps", "chaleur → léger ; pluie → imperméable et bottes ; froid → pull et bonnet."],
      ["les déterminants", "un, une, des — le, la, l', les : j'apprends chaque nom avec le sien."],
      ["dire non", "ne … pas autour du verbe ; et un, une, des → de : pas de bottes."],
    ]),
    ...theme("u5_marche.png", "UNITÉ 5 — LE COMMERCE", "A93226", [
      ["les commerces", "la boulangerie, la boucherie, la pâtisserie, l'épicerie (les PPN)."],
      ["les commerçants", "le boulanger, le boucher, le pâtissier, l'épicier, la marchande."],
      ["acheter poliment", "je veux…, s'il vous plaît ; combien ça coûte ? ; merci beaucoup !"],
      ["les mots du récit", "hier, avant-hier, demain — d'abord, ensuite, enfin."],
      ["l'imparfait", "raconter hier : j'étais, j'avais, j'allais, j'achetais."],
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
      "Les types de textes de l'année : décrire, informer, raconter."),
    sub("Le tableau des types de textes :"),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      row3("", "BUT ET QUESTIONS", "OUTILS ET TEMPS", { h: true }),
      row3("DESCRIPTIF (U1, U4)", "faire voir : comment est-ce ? comment est-il habillé ?",
        "adjectifs accordés, prépositions de lieu, comparaison (plus … que, comme) — au présent."),
      row3("INFORMATIF (U2, U3)", "faire savoir : où ? quand ? quoi ? comment ?",
        "le tableau des questions, les adverbes de temps (avant, après, pendant), la forme impersonnelle (il pleut) — présent et futur proche."),
      row3("NARRATIF SIMPLE (U5)", "raconter une histoire vraie et simple : que s'est-il passé ?",
        "hier et les indicateurs temporels, d'abord / ensuite / enfin, les possessifs — l'imparfait."),
    ]}),
    p("", { after: 120 }),
    sub("Le plan de la LETTRE PERSONNELLE et du TEXTE DESCRIPTIF (U1) :"),
    p("1. Je salue et je présente (qui ? où ?) — 2. Je décris avec des adjectifs accordés et des prépositions de lieu — 3. Je compare (plus … que, comme) et je termine poliment.", { after: 100 }),
    sub("Le plan de la PRÉSENTATION D'UN LOISIR (U2) :"),
    p("1. Je nomme mon loisir préféré — 2. Je réponds au tableau : où ? quand ? quoi ? comment ? — 3. Je dis pourquoi je l'aime : j'aime… parce que…", { after: 100 }),
    sub("Le plan du BULLETIN MÉTÉO et de la SAISON (U3) :"),
    p("1. Le jour et le lieu — 2. Le temps qu'il fait (il pleut, il fait chaud…) — 3. Le temps qu'il va faire : demain, il va faire froid — et un conseil.", { after: 100 }),
    sub("Le plan de la DESCRIPTION D'UNE TENUE (U4) :"),
    p("1. Je présente la personne — 2. Je décris de la tête aux pieds, avec les couleurs accordées — 3. Je dis pourquoi cette tenue convient au temps.", { after: 100 }),
    sub("Le plan du RÉCIT D'ACHAT (U5) :"),
    pr([run("1. LE DÉBUT ", { bold: true, color: C.BLUE }), run("(hier, où ? avec qui ?) → ")], { after: 40 }),
    pr([run("2. LES ACTIONS ", { bold: true, color: C.BLUE }), run("(d'abord…, ensuite…, avec la politesse du client) → ")], { after: 40 }),
    pr([run("3. LA FIN ", { bold: true, color: C.GREEN }), run("(enfin… + un sentiment : j'étais fier !)")], { after: 100 }),
    sub("La routine de l'écrivain, pour toutes les rédactions :"),
    p("1. Je PLANIFIE (mes idées en mots-clés, mon plan). 2. Je RÉDIGE (des phrases complètes, majuscule et point). 3. Je RELIS avec ma grille (accords, déterminants, négation). 4. J'AMÉLIORE (j'ajoute un adjectif, une comparaison, un sentiment)."),
  ];
}

// ============ ANNEXE 3 — CONJUGAISON ============
function conjTable(title, forms) {
  // forms: [ [pronom, présent, futur proche, imparfait] x6 ]
  const hd = new TableRow({ children: [
    cell([fp([run(title, { bold: true, color: COLOR, size: SZ.FICHE })])], { w: 1800, shade: SHADE }),
    cell([fp([run("PRÉSENT", { bold: true, size: SZ.FICHE })])], { w: 2500, shade: SHADE }),
    cell([fp([run("FUTUR PROCHE", { bold: true, size: SZ.FICHE })])], { w: 3300, shade: SHADE }),
    cell([fp([run("IMPARFAIT", { bold: true, size: SZ.FICHE })])], { w: 2800, shade: SHADE }),
  ]});
  const rows = forms.map(f => new TableRow({ children: f.map((t, i) =>
    cell([fp([run(t, { bold: i === 0, size: SZ.FICHE })])], {})) }));
  return [new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [hd, ...rows] }), p("", { after: 100 })];
}
function annexe3() {
  return [
    ...head("annex3", "ANNEXE 3 — TOUTE LA CONJUGAISON DE L'ANNÉE",
      "Les verbes du programme aux trois temps étudiés — à consulter à chaque rédaction."),
    sub("Quand utiliser chaque temps ?"),
    mot("le PRÉSENT", "ce qui se passe maintenant, ou ce qui est toujours vrai : Fara habite à Antsirabe. Il pleut."),
    mot("le FUTUR PROCHE", "ce qui va bientôt arriver : aller + infinitif — demain, il va pleuvoir ; je vais acheter du pain."),
    mot("l'IMPARFAIT", "raconter et décrire dans le passé : hier, maman était malade ; avant, nous allions au village."),
    p("", { after: 100 }),
    ...conjTable("ÊTRE", [
      ["je", "suis", "vais être", "étais"],
      ["tu", "es", "vas être", "étais"],
      ["il/elle", "est", "va être", "était"],
      ["nous", "sommes", "allons être", "étions"],
      ["vous", "êtes", "allez être", "étiez"],
      ["ils/elles", "sont", "vont être", "étaient"],
    ]),
    ...conjTable("AVOIR", [
      ["j'/je", "ai", "vais avoir", "avais"],
      ["tu", "as", "vas avoir", "avais"],
      ["il/elle", "a", "va avoir", "avait"],
      ["nous", "avons", "allons avoir", "avions"],
      ["vous", "avez", "allez avoir", "aviez"],
      ["ils/elles", "ont", "vont avoir", "avaient"],
    ]),
    ...conjTable("ALLER", [
      ["je", "vais", "vais aller", "allais"],
      ["tu", "vas", "vas aller", "allais"],
      ["il/elle", "va", "va aller", "allait"],
      ["nous", "allons", "allons aller", "allions"],
      ["vous", "allez", "allez aller", "alliez"],
      ["ils/elles", "vont", "vont aller", "allaient"],
    ]),
    ...conjTable("ACHETER (1er gr.)", [
      ["j'/je", "achète", "vais acheter", "achetais"],
      ["tu", "achètes", "vas acheter", "achetais"],
      ["il/elle", "achète", "va acheter", "achetait"],
      ["nous", "achetons", "allons acheter", "achetions"],
      ["vous", "achetez", "allez acheter", "achetiez"],
      ["ils/elles", "achètent", "vont acheter", "achetaient"],
    ]),
    ...conjTable("JOUER (1er gr.)", [
      ["je", "joue", "vais jouer", "jouais"],
      ["tu", "joues", "vas jouer", "jouais"],
      ["il/elle", "joue", "va jouer", "jouait"],
      ["nous", "jouons", "allons jouer", "jouions"],
      ["vous", "jouez", "allez jouer", "jouiez"],
      ["ils/elles", "jouent", "vont jouer", "jouaient"],
    ]),
    ...conjTable("FINIR (2e gr.)", [
      ["je", "finis", "vais finir", "finissais"],
      ["tu", "finis", "vas finir", "finissais"],
      ["il/elle", "finit", "va finir", "finissait"],
      ["nous", "finissons", "allons finir", "finissions"],
      ["vous", "finissez", "allez finir", "finissiez"],
      ["ils/elles", "finissent", "vont finir", "finissaient"],
    ]),
    ...conjTable("CHOISIR (2e gr.)", [
      ["je", "choisis", "vais choisir", "choisissais"],
      ["tu", "choisis", "vas choisir", "choisissais"],
      ["il/elle", "choisit", "va choisir", "choisissait"],
      ["nous", "choisissons", "allons choisir", "choisissions"],
      ["vous", "choisissez", "allez choisir", "choisissiez"],
      ["ils/elles", "choisissent", "vont choisir", "choisissaient"],
    ]),
    ...conjTable("ATTENDRE (-re)", [
      ["j'/je", "attends", "vais attendre", "attendais"],
      ["tu", "attends", "vas attendre", "attendais"],
      ["il/elle", "attend", "va attendre", "attendait"],
      ["nous", "attendons", "allons attendre", "attendions"],
      ["vous", "attendez", "allez attendre", "attendiez"],
      ["ils/elles", "attendent", "vont attendre", "attendaient"],
    ]),
    ...conjTable("VENDRE (-re)", [
      ["je", "vends", "vais vendre", "vendais"],
      ["tu", "vends", "vas vendre", "vendais"],
      ["il/elle", "vend", "va vendre", "vendait"],
      ["nous", "vendons", "allons vendre", "vendions"],
      ["vous", "vendez", "allez vendre", "vendiez"],
      ["ils/elles", "vendent", "vont vendre", "vendaient"],
    ]),
    pr([run("Le secret de l'imparfait : ", { bold: true, color: C.RED }),
        run("une seule chanson pour tous les verbes : "),
        run("-ais, -ais, -ait, -ions, -iez, -aient.", { bold: true, color: C.RED })], { after: 60 }),
    pr([run("Le secret du futur proche : ", { bold: true, color: C.RED }),
        run("je conjugue seulement "), run("aller", { bold: true }),
        run(" — le deuxième verbe reste à l'infinitif : nous allons manger.")]),
  ];
}

// ============ ANNEXE 4 — FLASHCARDS ET JEUX ============
function annexe4() {
  const card = (recto, verso) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: [
      cell([p([run(recto, { bold: true, size: SZ.FICHE })], { center: true, after: 20 })], { w: 5200, shade: "FDF2E9" }),
      cell([p([run(verso, { italic: true, size: SZ.FICHE })], { center: true, after: 20 })], { w: 5200 }),
    ]})],
  });
  return [
    ...head("annex4", "ANNEXE 4 — FLASHCARDS ET JEUX DE CLASSE",
      "À découper ou à recopier : le recto pour la question, le verso pour la réponse."),
    p([run("Unité 1 :", { bold: true, color: "1E8449" })], { after: 40 }),
    card("plus … que / moins … que / comme", "la comparaison : la ville est plus bruyante que le village"),
    card("dans, sur, sous, à côté de, près de, loin de", "les prépositions de lieu"),
    card("vert / verte — heureux / heureuse", "l'accord de l'adjectif, et les féminins irréguliers"),
    card("un journal → des journaux", "les pluriels irréguliers en -aux"),
    card("je chante, tu finis", "le présent du 1er et du 2e groupe"),
    p([run("Unité 2 :", { bold: true, color: "CA6F1E" })], { after: 40 }),
    card("ce, cet, cette, ces", "les démonstratifs — je montre du doigt"),
    card("ce livre, je LE lis ; ces billes, je LES lance", "les pronoms COD : le, la, les, l'"),
    card("J'aime… / Je préfère… parce que…", "dire son loisir préféré et le justifier"),
    card("Où ? Quand ? Quoi ? Comment ?", "le tableau pour présenter un loisir"),
    p([run("Unité 3 :", { bold: true, color: "21618C" })], { after: 40 }),
    card("il pleut, il fait chaud, il neige", "la forme impersonnelle — le « il » du ciel"),
    card("quel / quelle / quels / quelles", "les interrogatifs : Quel temps fait-il ?"),
    card("le plus chaud, le moins froid", "le superlatif"),
    card("demain, il va pleuvoir", "le futur proche : aller + infinitif"),
    card("avant, après, pendant", "les adverbes de temps"),
    p([run("Unité 4 :", { bold: true, color: "7D3C98" })], { after: 40 }),
    card("un, une, des — le, la, l', les", "les déterminants : chaque nom avec le sien"),
    card("Il ne porte pas DE bonnet.", "la négation : ne … pas, et des → de"),
    card("une robe verte, des chaussettes blanches", "la couleur après le nom, accordée"),
    card("chaleur / pluie / froid → ?", "la tenue adaptée au temps"),
    p([run("Unité 5 :", { bold: true, color: "A93226" })], { after: 40 }),
    card("boulanger → boulangerie, boucher → boucherie", "le commerçant et son commerce en -erie"),
    card("« Je veux…, s'il vous plaît. Merci ! »", "la commande polie"),
    card("Le boulanger / rend la monnaie.", "groupe sujet / groupe verbal — « qui est-ce qui ? »"),
    card("d'abord, ensuite, enfin", "les perles qui mettent le récit en ordre"),
    card("j'étais, j'avais, j'allais", "l'imparfait : -ais, -ais, -ait, -ions, -iez, -aient"),
    p("", { after: 100 }),
    sub("Cinq jeux pour la classe :"),
    mot("1. Le mime du loisir", "un élève mime un loisir ou un geste ; la classe devine et fait une phrase : « Tu joues au ballon ! »"),
    mot("2. Le béret des mots", "deux équipes, des mots au centre ; l'enseignant annonce une définition, le premier arrivé ramasse le mot."),
    mot("3. Le mémory", "les flashcards retournées ; retrouve la paire recto/verso."),
    mot("4. La chaîne de l'imparfait", "« hier, je + être ! » → « j'étais ! hier, nous + aller ! » — le plus rapide gagne."),
    mot("5. Le marché de la classe", "un étal, des pièces en papier : on joue le client et le commerçant, avec toute la politesse."),
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
    p([run("La grande stratégie de l'année — travaillée aux séances 10, 22, 34, 46 et 58.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("4. La lecture à l'unisson :"),
    p("Toute la classe lit le même passage en même temps, d'une seule voix, au même rythme : personne ne se presse, personne ne reste en arrière."),
    p([run("Idéale pour les textes courts : comptines, bulletins météo, dialogues du marché.", { italic: true, color: C.GRAY })], { after: 100 }),
    sub("5. Les groupes de souffle et la ponctuation :"),
    p("Je lis les mots par petits paquets qui vont ensemble, sans couper au milieu ; je respire à la virgule, je m'arrête au point, ma voix monte au point d'interrogation."),
    p([run("Posée dès la séance 10 — et utilisée toute l'année.", { italic: true, color: C.GRAY })], { after: 100 }),
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
    p("• l'adjectif s'accorde en genre et en nombre avec le nom : une rue calme, des rizières vertes ;"),
    pr([run("• attention aux irréguliers : ", { bold: true, color: C.RED }),
        run("heureux → heureuse, blanc → blanche, beau → belle ; un journal → des journaux.")], { after: 100 }),
    sub("2. Les déterminants (unité 4) :"),
    p("• j'apprends chaque nom avec son déterminant : un pull, une robe, des bottes ;"),
    p("• devant une voyelle : l'imperméable, l'écharpe — et ma devient mon : mon épicerie.", { after: 100 }),
    sub("3. La négation (unité 4) :"),
    p("• les deux morceaux encadrent le verbe : il ne porte pas de bonnet ;"),
    p("• devant une voyelle, ne devient n' : je n'aime pas ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("un, une, des deviennent "), run("de", { bold: true }),
        run(" : je ne prends pas de sandales.")], { after: 100 }),
    sub("4. Les adjectifs de couleur (unité 4) :"),
    p("• après le nom, et accordés : un pull bleu, une veste bleue, des chaussettes blanches.", { after: 100 }),
    sub("5. L'accord sujet-verbe (unité 5) :"),
    p("• je cherche le groupe sujet avec « qui est-ce qui ? » ;"),
    p("• sujet au pluriel → verbe au pluriel : « Les marchandes du marché VENDENT des légumes. »", { after: 100 }),
    sub("6. L'imparfait sans fautes (unité 5) :"),
    p("• les terminaisons uniques : -ais, -ais, -ait, -ions, -iez, -aient ;"),
    pr([run("• attention ! ", { bold: true, color: C.RED }),
        run("avec « il » ou « elle », jamais de s : elle était, il avait, elle allait.")], { after: 100 }),
    sub("7. Les petits mots qui se ressemblent (les homonymes de l'unité 1 — spécial examen !) :"),
    mot("a / à", "a = verbe avoir (il a un panier) ; à = petit mot invariable (à l'école)."),
    mot("est / et", "est = verbe être (il est grand) ; et = il ajoute (Fara et Naivo)."),
    mot("ou / où", "ou = choix (thé ou café) ; où = le lieu (le village où je vis)."),
    mot("son / sont", "son = à lui (son panier) ; sont = verbe être (ils sont partis)."),
    mot("mer / mère / maire", "la mer bleue ; ma mère ; le maire de la ville — trois mots, un seul son !"),
    mot("vert / vers / verre", "la couleur verte ; vers la maison ; un verre d'eau."),
  ];
}

// ============ PAGE FINALE ============
function pageFinale() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: 48, center: true, after: 120 }),
    p([run("60 séances, 5 thématiques, 3 temps de conjugaison… TU AS TOUT TRAVERSÉ !", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    img("u5_marche.png", 300, 768 / 1376),
    p([run("Fara, Naivo et Lalao sont fiers de toi !", { bold: true, size: 28 })], { center: true, after: 140 }),
    p("Cette année, tu as appris à décrire la ville et le village, et à les comparer ;"),
    p("à présenter tes loisirs et à dire pourquoi tu les aimes ;"),
    p("à parler du temps qu'il fait, des saisons, et de demain avec le futur proche ;"),
    p("à choisir ta tenue, à dire oui et non, à accorder les couleurs ;"),
    p("et à raconter hier avec l'imparfait — d'abord, ensuite, enfin — comme un vrai conteur.", { after: 140 }),
    pr([run("Avec la politesse et l'honnêteté, ", { bold: true, size: 28 }),
        run("continue de lire, d'écrire et de raconter !", { bold: true, color: C.RED, size: 28 })], { center: true, after: 160 }),
    p([run("Ce manuel se termine, mais le marché, lui, ouvre chaque matin :", { italic: true, color: C.GRAY })], { center: true, after: 40 }),
    p([run("quelque part, un panier t'attend — et une nouvelle histoire à raconter.", { italic: true, color: C.GRAY })], { center: true, after: 160 }),
    p([run("FIN DU MANUEL — COLLECTION J-LEARN — FRANÇAIS T4", { bold: true, color: COLOR, size: 26 })], { center: true }),
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
