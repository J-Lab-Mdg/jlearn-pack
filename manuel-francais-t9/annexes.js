// Français T9 — ANNEXES (1 à 12) + page finale
const fs = require("fs");
const path = require("path");
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, cell, img, imgFloat, pageBreak,
        bookmarkTitle, unitBanner, sub } = B;
const { Table, TableRow, WidthType } = require("docx");

const DARK = "212F3D";
const UCOL = {
  u1: "AF601A", u2: "1A5276", u3: "117864", u4: "922B21",
  u5: "1E8449", u6: "6C3483", u7: "283747",
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
    p("Toute l'année de 3e en un coup d'œil : pour chaque thématique, les mots essentiels à connaître par cœur. Cache la définition et récite !", { after: 100 }),
  ];
  const blocs = [
    ["UNITÉ 1 — L'ARTISANAT", UCOL.u1, [
      ["un artisan", "celui qui crée de ses mains, dans son atelier"],
      ["la poterie", "l'argile tournée puis cuite au four"],
      ["la marqueterie", "les bois précieux assemblés en images"],
      ["la matière première", "ce que la nature donne et que la main transforme"],
      ["un reportage", "le texte du journaliste qui fait voir un lieu et entendre ses gens"],
      ["un débouché", "là où le produit trouve son acheteur"],
    ]],
    ["UNITÉ 2 — LES PAYS", UCOL.u2, [
      ["un guide de voyage", "le livre qui présente un pays : monuments, climat, cuisine"],
      ["un monument", "le grand témoin de pierre d'une histoire"],
      ["la gastronomie", "l'art de la table d'un pays"],
      ["un festival", "la grande fête culturelle qui revient chaque année"],
      ["les 7 merveilles", "les chefs-d'œuvre du monde antique, de Gizeh à Alexandrie"],
      ["la pyramide de Gizeh", "la seule merveille antique encore debout"],
    ]],
    ["UNITÉ 3 — LE TOURISME", UCOL.u3, [
      ["une destination", "le lieu vers lequel on voyage"],
      ["un hébergement", "le toit du voyageur : hôtel, gîte, bungalow"],
      ["une attraction", "ce qui attire les visiteurs : parc, plage, musée"],
      ["le schéma actanciel", "le héros, son objectif, ses opposants, ses adjuvants"],
      ["Nosy Be", "l'île aux parfums, perle du nord-ouest"],
      ["l'Isalo", "le massif aux canyons et aux piscines naturelles"],
    ]],
    ["UNITÉ 4 — LA CORRUPTION", UCOL.u4, [
      ["la corruption", "obtenir par l'argent ce que la règle refuse"],
      ["un pot-de-vin", "la somme glissée pour acheter une décision"],
      ["la fraude", "la tricherie organisée pour tromper"],
      ["la transparence", "agir au grand jour, comptes ouverts"],
      ["l'éthique", "la boussole intérieure du bien et du juste"],
      ["un article d'opinion", "le texte qui défend une thèse avec des arguments"],
    ]],
    ["UNITÉ 5 — L'ALIMENTATION ET LA SANTÉ", UCOL.u5, [
      ["un nutriment", "ce que l'aliment apporte au corps"],
      ["les protéines", "les briques qui construisent les muscles"],
      ["les glucides", "le carburant de la journée"],
      ["les vitamines", "les petites gardiennes de la santé"],
      ["un régime équilibré", "un peu de tout, jamais trop d'une seule chose"],
      ["le petit-déjeuner", "le premier plein d'énergie, à ne jamais sauter"],
    ]],
    ["UNITÉ 6 — LES MÉDIAS ET LES NTIC", UCOL.u6, [
      ["un média", "le canal qui porte l'information : presse, radio, télévision, Internet"],
      ["un compte rendu", "le texte qui rapporte fidèlement une réunion"],
      ["l'ordre du jour", "la liste des points à discuter"],
      ["une source", "l'origine d'une information — à vérifier avant de partager !"],
      ["les données personnelles", "nom, adresse, photos : mon trésor à protéger"],
      ["la cybercriminalité", "les délits commis derrière un écran"],
    ]],
    ["UNITÉ 7 — LES MÉTIERS ET LES PROFESSIONS", UCOL.u7, [
      ["un métier", "ce que l'on exerce pour vivre et pour servir"],
      ["une qualité", "ce que je suis : ponctuel, soigneux, honnête"],
      ["une compétence", "ce que je sais faire : savoir + infinitif"],
      ["une offre d'emploi", "l'annonce qui demande ; la lettre qui répond"],
      ["le curriculum vitae", "ma vie en mots-clés : formation, compétences, qualités"],
      ["la lettre de motivation", "VOUS, MOI, NOUS — et la formule de politesse"],
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
    p("Quatre grandes missions d'écriture ont traversé ton année de 3e. Avant d'écrire, je me demande : qu'est-ce que je veux faire ? Expliquer, raconter, argumenter ou rendre compte ?", { after: 100 }),
    sub("1. EXPLIQUER — le texte explicatif (unités 1 et 2)"),
    bullet([run("Le plan : ", { bold: true }), run("l'annonce de l'idée → l'explication → l'illustration → la conclusion.")]),
    bullet([run("Les outils : ", { bold: true }), run("le présent, la définition, la reformulation avec c'est-à-dire, l'exemple ; les connecteurs spatiaux du reportage : là-bas, devant, à côté de.")]),
    note("exemples : le reportage à l'atelier de poterie, la page de guide sur l'Égypte"),
    p("", { after: 60 }),
    sub("2. RACONTER — le récit de voyage (unité 3)"),
    bullet([run("Le plan : ", { bold: true }), run("le schéma actanciel : le héros, son objectif, les opposants, les adjuvants, le dénouement.")]),
    bullet([run("Les outils : ", { bold: true }), run("l'imparfait (le décor) + le passé composé (les actions) ; le présent de narration pour faire vivre ; les connecteurs : mais, alors, soudain.")]),
    note("exemple : le récit du voyage à Fianarantsoa"),
    p("", { after: 60 }),
    sub("3. ARGUMENTER — l'article d'opinion (unités 4 et 5)"),
    bullet([run("Le plan : ", { bold: true }), run("la thèse → les arguments (du plus faible au plus fort) → les exemples → la conclusion qui appelle à agir.")]),
    bullet([run("Les outils : ", { bold: true }), run("les phrases de cause, de conséquence, de but, de condition et d'opposition : parce que, donc, pour que, si, pourtant.")]),
    note("exemples : l'article contre la corruption, l'article pour le petit-déjeuner"),
    p("", { after: 60 }),
    sub("4. RENDRE COMPTE — les écrits administratifs (unités 6 et 7)"),
    bullet([run("Le compte rendu : ", { bold: true }), run("l'ouverture (quoi, quand, où, qui) → le déroulé → les décisions → la clôture ; AUCUNE opinion !")]),
    bullet([run("Le dossier de candidature : ", { bold: true }), run("le CV en mots-clés + la lettre de motivation en trois mouvements : VOUS, MOI, NOUS.")]),
    bullet([run("Les outils : ", { bold: true }), run("les tournures impersonnelles (il a été décidé), la voix passive, la formule de politesse exacte.")]),
    note("exemples : le compte rendu du club informatique, la lettre de Naina"),
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
    p("Les temps et les modes travaillés cette année, avec les verbes les plus utiles. Récite une colonne par jour : en deux semaines, tout est à toi — et prêt pour l'examen !", { after: 100 }),
    sub("1. Le présent de l'indicatif — expliquer et décrire"),
    conjTable("VISITER (1er groupe) — présent", UCOL.u3,
      ["je visite", "tu visites", "il / elle visite"],
      ["nous visitons", "vous visitez", "ils / elles visitent"]),
    p("", { after: 60 }),
    conjTable("CHOISIR (2e groupe) — présent", UCOL.u5,
      ["je choisis", "tu choisis", "il / elle choisit"],
      ["nous choisissons", "vous choisissez", "ils / elles choisissent"]),
    p("", { after: 60 }),
    conjTable("PRENDRE et SAVOIR (3e groupe) — présent", UCOL.u7,
      ["je prends — je sais", "tu prends — tu sais", "il / elle prend — il / elle sait"],
      ["nous prenons — nous savons", "vous prenez — vous savez", "ils / elles prennent — ils / elles savent"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — présent", UCOL.u1,
      ["je suis — j'ai", "tu es — tu as", "il / elle est — il / elle a"],
      ["nous sommes — nous avons", "vous êtes — vous avez", "ils / elles sont — ils / elles ont"]),
    p("", { after: 80 }),
    bullet([run("Les valeurs du présent (unité 3) : ", { bold: true }),
      run("l'action en train de se faire, l'habitude, la vérité générale — et le présent de narration qui fait vivre le récit : « Soudain, le guide s'arrête… »")]),
    p("", { after: 60 }),
    sub("2. L'imparfait — le décor du récit (unité 3)"),
    conjTable("VISITER — imparfait", UCOL.u3,
      ["je visitais", "tu visitais", "il / elle visitait"],
      ["nous visitions", "vous visitiez", "ils / elles visitaient"]),
    p("", { after: 60 }),
    conjTable("ÊTRE et AVOIR — imparfait", UCOL.u1,
      ["j'étais — j'avais", "tu étais — tu avais", "il / elle était — il / elle avait"],
      ["nous étions — nous avions", "vous étiez — vous aviez", "ils / elles étaient — ils / elles avaient"]),
    p("", { after: 80 }),
    bullet([run("Sa valeur dans le récit : ", { bold: true }),
      run("il plante le décor et dit les habitudes : « Le train grimpait lentement entre les collines. »")]),
    p("", { after: 60 }),
    sub("3. Le passé composé — les actions passées (unités 3, 6 et 7)"),
    conjTable("VISITER et PARTIR — passé composé", UCOL.u3,
      ["j'ai visité", "tu as visité", "il / elle a visité"],
      ["je suis parti(e)", "tu es parti(e)", "il est parti / elle est partie"]),
    p("", { after: 80 }),
    bullet([run("Avec ÊTRE", { bold: true }), run(" (partir, aller, venir, rester…), le participe "), run("s'accorde avec le sujet", { bold: true, color: C.SALMON, hl: true }), run(" : elle est partie, la séance a été levée.")]),
    bullet([run("Avec AVOIR", { bold: true }), run(", le participe s'accorde avec le "), run("COD placé AVANT", { bold: true, color: C.SALMON, hl: true }), run(" : la lettre que j'ai écrite — mais : j'ai écrit une lettre.")]),
    note("toute la règle à l'annexe 6 — c'est LA question d'accord de la 3e !"),
    p("", { after: 60 }),
    sub("4. Le futur simple et le futur proche — projets et promesses"),
    conjTable("VISITER — futur simple", UCOL.u2,
      ["je visiterai", "tu visiteras", "il / elle visitera"],
      ["nous visiterons", "vous visiterez", "ils / elles visiteront"]),
    p("", { after: 60 }),
    conjTable("ÊTRE, AVOIR, SAVOIR — futur simple", UCOL.u7,
      ["je serai — j'aurai — je saurai", "tu seras — tu auras — tu sauras"],
      ["il sera — il aura — il saura", "nous serons — vous aurez — ils sauront"]),
    p("", { after: 80 }),
    bullet([run("Le futur proche (unité 4) : ", { bold: true }), run("ALLER au présent + infinitif — pour l'action toute proche : « Nous allons refuser ce pot-de-vin. »")]),
    bullet([run("Quand l'utiliser ? ", { bold: true }),
      run("le futur simple pour le programme du guide (« vous visiterez les ruelles ») et les promesses de la lettre (« je serai ponctuel »).")]),
    p("", { after: 60 }),
    sub("5. L'impératif présent — conseiller et faire agir (unités 2 et 5)"),
    conjTable("VISITER / CHOISIR / FAIRE — impératif", UCOL.u5,
      ["visite ! — choisis ! — fais !", "visitons ! — choisissons ! — faisons !"],
      ["visitez ! — choisissez ! — faites !", "[pas de sujet : le conseil est direct]"]),
    p("", { after: 80 }),
    bullet([run("Attention : ", { bold: true }), run("pas de s à la 2e personne du 1er groupe : « Goûte le ravitoto », « Mange varié ».")]),
    p("", { after: 60 }),
    sub("6. Le conditionnel présent — la politesse et l'hypothèse (unité 4)"),
    conjTable("VOULOIR et POUVOIR — conditionnel présent", UCOL.u4,
      ["je voudrais — je pourrais", "tu voudrais — tu pourrais", "il / elle voudrait — il / elle pourrait"],
      ["nous voudrions — nous pourrions", "vous voudriez — vous pourriez", "ils / elles voudraient — ils / elles pourraient"]),
    p("", { after: 80 }),
    bullet([run("Ses emplois : ", { bold: true }), run("la demande polie (« Pourriez-vous m'en dire plus ? »), l'hypothèse avec si + imparfait (« Si chacun refusait, la corruption reculerait »).")]),
    p("", { after: 60 }),
    sub("7. Le subjonctif présent — après il faut que (unité 4)"),
    conjTable("ÊTRE, AVOIR, FAIRE — subjonctif présent", UCOL.u4,
      ["qu'il soit honnête", "qu'il ait le courage de dire non"],
      ["qu'il fasse son devoir", "[après : il faut que, pour que, bien que]"]),
    p("", { after: 80 }),
    bullet([run("Le déclencheur : ", { bold: true }), run("il faut que + subjonctif : « Il faut que la justice soit la même pour tous. »")]),
    p("", { after: 60 }),
    sub("8. Quel temps (ou mode) choisir ? Le guide rapide"),
    bullet([run("J'explique, je définis → ", { bold: true }), run("le présent", { bold: true, color: C.SALMON, hl: true }), run(" : « L'artisan transforme la matière première. »")]),
    bullet([run("Je pose le décor d'un récit → ", { bold: true }), run("l'imparfait", { bold: true, color: C.SALMON, hl: true }), run(" : « Le train grimpait entre les collines. »")]),
    bullet([run("Je raconte les actions passées → ", { bold: true }), run("le passé composé", { bold: true, color: C.SALMON, hl: true }), run(" : « La séance a commencé à neuf heures. »")]),
    bullet([run("J'annonce un programme, je promets → ", { bold: true }), run("le futur simple", { bold: true, color: C.SALMON, hl: true }), run(" : « Je serai ponctuel. »")]),
    bullet([run("Je conseille, je fais agir → ", { bold: true }), run("l'impératif", { bold: true, color: C.SALMON, hl: true }), run(" : « Vérifiez vos sources ! »")]),
    bullet([run("Je demande poliment, je suppose → ", { bold: true }), run("le conditionnel", { bold: true, color: C.SALMON, hl: true }), run(" : « Pourriez-vous être plus précis ? »")]),
    bullet([run("J'exprime la nécessité → ", { bold: true }), run("il faut que + subjonctif", { bold: true, color: C.SALMON, hl: true }), run(" : « Il faut que chacun fasse sa part. »")]),
    note("astuce : cherche d'abord CE QUE VEUT FAIRE ton texte, ensuite choisis le temps"),
  ];
}

// ============ ANNEXE 4 — Flashcards et jeux de classe ============
function annex4() {
  return [
    ...annexTitle("annex4", 4, "FLASHCARDS ET JEUX DE CLASSE"),
    p("Des cartes à fabriquer et des jeux prêts à l'emploi, pour réviser en s'amusant — seul, en binôme ou en classe entière.", { after: 100 }),
    sub("1. Je fabrique mes flashcards"),
    bullet([run("Recto : ", { bold: true }), run("le mot en gros (exemple : "), run("la transparence", { bold: true, color: C.SALMON, hl: true }), run(").")]),
    bullet([run("Verso : ", { bold: true }), run("la définition et une phrase exemple.")]),
    bullet([run("Où trouver les mots ? ", { bold: true }), run("Dans l'imagier de l'annexe 1 : une couleur par unité.")]),
    note("un morceau de carton, des ciseaux : dix cartes par unité suffisent"),
    p("", { after: 60 }),
    sub("2. Les jeux avec les flashcards"),
    bullet([run("Le défi des paires : ", { bold: true }), run("retrouver le mot et sa définition face cachée.")]),
    bullet([run("Le mime des métiers : ", { bold: true }), run("un joueur mime (tourner la poterie, taper le clavier, servir un client), les autres devinent le métier et une qualité qu'il demande.")]),
    bullet([run("La chaîne des unités : ", { bold: true }), run("tirer une carte, dire de quelle unité elle vient, puis une phrase avec le mot.")]),
    p("", { after: 60 }),
    sub("3. Les jeux de langue de l'année"),
    bullet([run("La Martinière : ", { bold: true }), run("le maître donne l'indice, tous écrivent la réponse sur l'ardoise, on lève ensemble.")]),
    bullet([run("Le débat minute : ", { bold: true }), run("une thèse tirée au sort (« Le tourisme fait plus de bien que de mal »), une minute pour la défendre : thèse, deux arguments, un exemple, conclusion (unités 4 et 5).")]),
    bullet([run("L'interrogatoire du reporter : ", { bold: true }), run("une question fermée, une question ouverte, puis « Peux-tu me donner un exemple concret ? » (unités 1 et 2).")]),
    bullet([run("Le test du prénom : ", { bold: true }), run("une phrase en il est lue ; si un prénom peut remplacer il, la classe crie « personnel ! », sinon « impersonnel ! » (unité 6).")]),
    bullet([run("L'entretien éclair : ", { bold: true }), run("deux chaises, un recruteur, un candidat, trois questions, deux minutes — la classe coche la grille : salutation, preuves, vouvoiement, question finale (unité 7).")]),
    bullet([run("Le tribunal des homophones : ", { bold: true }), run("a ou à ? et ou est ? L'accusé plaide, la classe juge (annexe 7).")]),
    p("", { after: 60 }),
    sub("4. Le rituel des cinq minutes"),
    bullet([run("Chaque matin : ", { bold: true }), run("trois flashcards, une question de conjugaison, un connecteur à placer dans une phrase.")]),
    note("cinq minutes par jour valent mieux qu'une heure la veille du test — surtout l'année de l'examen !"),
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
    bullet([run("3. Le surlignage : ", { bold: true }), run("je surligne les mots clés et les connecteurs : d'abord, parce que, donc, par exemple, bref…")]),
    note("ce sont les panneaux indicateurs du texte"),
    bullet([run("4. Le thème de chaque paragraphe : ", { bold: true }), run("une phrase par paragraphe : qui ? quoi ? où ?")]),
    bullet([run("5. Les idées essentielles : ", { bold: true }), run("je redis le texte en trois phrases à moi — si j'y arrive, j'ai compris.")]),
    p("", { after: 60 }),
    sub("2. Reconnaître le type du texte dès les premières lignes"),
    bullet([run("Du présent, des définitions, des « c'est-à-dire » ? ", { bold: true }), run("→ un texte explicatif : je cherche l'annonce, l'explication, l'illustration.")]),
    bullet([run("Un décor à l'imparfait, un héros, un « soudain » ? ", { bold: true }), run("→ un récit : je cherche le schéma actanciel.")]),
    bullet([run("Une thèse, des « parce que », des « donc » ? ", { bold: true }), run("→ un texte argumentatif : je cherche les arguments et les exemples.")]),
    bullet([run("Des dates, des décisions, un ton neutre ? ", { bold: true }), run("→ un écrit administratif : compte rendu, offre, CV, lettre.")]),
    p("", { after: 60 }),
    sub("3. Écouter un document en trois paliers (la méthode de l'année)"),
    bullet([run("1re écoute : ", { bold: true }), run("le sens général — de quoi s'agit-il ?")]),
    bullet([run("2e écoute : ", { bold: true }), run("les détails — je note les mots-clés, les chiffres, les noms.")]),
    bullet([run("3e écoute : ", { bold: true }), run("la vérification — je complète mes notes et je repère l'implicite.")]),
    note("dresser un plan, rédiger des notes : les deux stratégies officielles du programme"),
    p("", { after: 60 }),
    sub("4. Lire une image en cinq étapes"),
    bullet([run("1. J'observe : ", { bold: true }), run("qui, quoi, où ?")]),
    bullet([run("2. Je décris : ", { bold: true }), run("les plans, les couleurs, la lumière.")]),
    bullet([run("3. J'interprète : ", { bold: true }), run("que veut dire l'image ? Que veut-elle me faire penser ?")]),
    bullet([run("4. Je relie : ", { bold: true }), run("au texte, à la leçon, à ma vie.")]),
    bullet([run("5. Je juge : ", { bold: true }), run("l'image informe-t-elle ou cherche-t-elle à me convaincre ?")]),
    note("précieuse pour les médias de l'unité 6 : une image aussi a une source !"),
  ];
}

// ============ ANNEXE 6 — Orthographe et accords ============
function annex6() {
  return [
    ...annexTitle("annex6", 6, "ORTHOGRAPHE ET ACCORDS"),
    p("Les règles qui rapportent des points à chaque dictée et à chaque rédaction — l'accord du participe passé en tête : c'est LA règle de ton année de 3e !", { after: 100 }),
    sub("1. L'accord sujet-verbe"),
    bullet([run("Je cherche le sujet avec « qui est-ce qui ? » : ", { bold: true }), run("Les artisans du marché "), run("vendent", { bold: true, color: C.SALMON, hl: true }), run(" leurs paniers.")]),
    note("piège : le sujet éloigné ou inversé — « Sur la place dansent les lamba. »"),
    sub("2. Le participe passé avec ÊTRE (unité 6)"),
    bullet([run("Il s'accorde avec le SUJET : ", { bold: true }), run("elle est "), run("partie", { bold: true, color: C.SALMON, hl: true }), run(", les règles ont été "), run("adoptées", { bold: true, color: C.SALMON, hl: true }), run(", la séance a été "), run("levée", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    sub("3. Le participe passé avec AVOIR (unité 7)"),
    bullet([run("JAMAIS d'accord avec le sujet : ", { bold: true }), run("elle a "), run("fini", { bold: true, color: C.SALMON, hl: true }), run(" son CV.")]),
    bullet([run("Accord avec le COD placé AVANT : ", { bold: true }), run("la lettre que j'ai "), run("écrite", { bold: true, color: C.SALMON, hl: true }), run(" ; ces mesures, je les ai "), run("prises", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    note("la méthode des trois questions : quel auxiliaire ? y a-t-il un COD ? où est-il ?"),
    sub("4. Les homophones à ne plus confondre"),
    bullet([run("a / à : ", { bold: true }), run("il "), run("a", { bold: true, color: C.SALMON, hl: true }), run(" postulé (avoir) — il part "), run("à", { bold: true, color: C.SALMON, hl: true }), run(" l'aube.")]),
    note("astuce : si je peux dire « avait », c'est a sans accent"),
    bullet([run("et / est : ", { bold: true }), run("le CV "), run("et", { bold: true, color: C.SALMON, hl: true }), run(" la lettre — le dossier "), run("est", { bold: true, color: C.SALMON, hl: true }), run(" complet.")]),
    bullet([run("on / ont : ", { bold: true }), run("on", { bold: true, color: C.SALMON, hl: true }), run(" vérifie la source — ils "), run("ont", { bold: true, color: C.SALMON, hl: true }), run(" voté les règles.")]),
    bullet([run("son / sont : ", { bold: true }), run("son", { bold: true, color: C.SALMON, hl: true }), run(" atelier — les poteries "), run("sont", { bold: true, color: C.SALMON, hl: true }), run(" cuites.")]),
    bullet([run("notre / le nôtre : ", { bold: true }), run("notre", { bold: true, color: C.SALMON, hl: true }), run(" atelier (sans accent, devant le nom) — le "), run("nôtre", { bold: true, color: C.SALMON, hl: true }), run(" (accent circonflexe, tout seul !).")]),
    p("", { after: 60 }),
    sub("5. Les pièges de l'année"),
    bullet([run("L'infinitif après il faut, avant de, pour : ", { bold: true }), run("il faut "), run("vérifier", { bold: true, color: C.SALMON, hl: true }), run(" ; avant de "), run("partager", { bold: true, color: C.SALMON, hl: true }), run(".")]),
    note("astuce du remplacement : « il faut mordre » marche → c'est l'infinitif en -er, pas -é"),
    bullet([run("Le verbe impersonnel reste au singulier : ", { bold: true }), run("il "), run("manque", { bold: true, color: C.SALMON, hl: true }), run(" trois chaises (jamais « il manquent » !).")]),
    bullet([run("Les accents des mots de l'année : ", { bold: true }), run("l'éthique, la sécurité, le séjour, l'équilibre, la santé — ils portent leurs accents comme des lambas !")]),
    bullet([run("Les mots invariables à savoir : ", { bold: true }), run("toujours, jamais, pendant, pourtant, aussitôt, parmi, malgré, dehors, longtemps, désormais.", { bold: true, color: C.SALMON, hl: true })]),
    note("ils s'écrivent toujours pareil : apprends-les une fois pour toutes"),
    p("", { after: 60 }),
    sub("6. Ma relecture en trois passages"),
    bullet([run("1er passage : ", { bold: true }), run("les accords sujet-verbe.")]),
    bullet([run("2e passage : ", { bold: true }), run("les participes passés (être ? avoir ? COD avant ?) et les homophones.")]),
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
    bullet([run("ce", { bold: true, color: C.SALMON, hl: true }), run(" montre quelque chose : "), run("ce métier, ce pays", { bold: true }), run(". — "), run("se", { bold: true, color: C.SALMON, hl: true }), run(" fait partie du verbe : "), run("il se présente", { bold: true }), run(".")]),
    note("astuce : remplace par « le » → « le métier » marche : c'est CE. « il le présente » change le sens : c'est SE"),
    sub("2. ou / où"),
    bullet([run("ou", { bold: true, color: C.SALMON, hl: true }), run(" = un choix : "), run("la menuiserie ou l'hôtel", { bold: true }), run(". — "), run("où", { bold: true, color: C.SALMON, hl: true }), run(" = un lieu : "), run("l'atelier où travaille Rasoa", { bold: true }), run(".")]),
    note("astuce : si tu peux dire « ou bien », écris OU sans accent"),
    sub("3. la / là"),
    bullet([run("la", { bold: true, color: C.SALMON, hl: true }), run(" accompagne un nom : "), run("la candidature", { bold: true }), run(". — "), run("là", { bold: true, color: C.SALMON, hl: true }), run(" montre un endroit : "), run("le taxi-brousse s'arrête là !", { bold: true })]),
    sub("4. ses / ces"),
    bullet([run("ses", { bold: true, color: C.SALMON, hl: true }), run(" = les siens : "), run("l'artisan range ses outils", { bold: true }), run(". — "), run("ces", { bold: true, color: C.SALMON, hl: true }), run(" = ceux que je montre : "), run("regarde ces pyramides !", { bold: true })]),
    note("astuce : « ces pyramides-là » marche → CES ; « ses outils à lui » marche → SES"),
    sub("5. mes / mais"),
    bullet([run("mes", { bold: true, color: C.SALMON, hl: true }), run(" = les miens : "), run("mes compétences", { bold: true }), run(". — "), run("mais", { bold: true, color: C.SALMON, hl: true }), run(" = une opposition : "), run("débutant mais motivé", { bold: true }), run(".")]),
    sub("6. peu / peut / peux"),
    bullet([run("peu", { bold: true, color: C.SALMON, hl: true }), run(" = pas beaucoup. — "), run("il peut / tu peux", { bold: true, color: C.SALMON, hl: true }), run(" = le verbe pouvoir.")]),
    note("astuce : mets la phrase à l'imparfait → « il pouvait » : c'est le verbe"),
    p("", { after: 60 }),
    sub("Le grand test du tribunal (7 phrases)"),
    p("1. (Ce / Se) matin, Naina (ce / se) prépare pour l'entretien.", { after: 20 }),
    p("2. Tu choisis la réception (ou / où) la menuiserie ?", { after: 20 }),
    p("3. Voici l'hôtel (ou / où) travaille la réceptionniste.", { after: 20 }),
    p("4. Pose (la / là) lettre ici, pas (la / là) !", { after: 20 }),
    p("5. Vola a relu (ses / ces) notes ; regarde (ses / ces) belles photos de l'Isalo !", { after: 20 }),
    p("6. (Mes / Mais) parents sont fiers, (mes / mais) ils restent exigeants.", { after: 20 }),
    p("7. Il dort très (peu / peut), (mes / mais) il (peu / peut) encore réviser sa conjugaison.", { after: 40 }),
    pr([run("Corrigé : ", { bold: true, italic: true, color: C.GRAY, size: 24 }), run("1. Ce, se — 2. ou — 3. où — 4. la, là — 5. ses, ces — 6. Mes, mais — 7. peu, mais, peut.", { italic: true, color: C.GRAY, size: 24 })], { after: 60 }),
  ];
}

// ============ ANNEXE 8 — Les 100 mots à ne plus jamais rater ============
function annex8() {
  return [
    ...annexTitle("annex8", 8, "LES 100 MOTS À NE PLUS JAMAIS RATER"),
    p("Les mots que l'on écrit tous les jours… et que l'on rate tous les jours ! Étudie une famille par semaine : à la dictée comme à l'examen, ils ne te surprendront plus.", { after: 100 }),
    sub("1. Ils finissent par une lettre muette"),
    p("toujours — jamais — puis — alors — moins — dans — sans — sous — vers — temps — corps — repas — pays — fois — mois — bois — bras — dos — nid — fond — bord — champ — blanc — grand", { after: 30 }),
    note("astuce : cherche un mot de la même famille — grand → grande, champ → champêtre"),
    sub("2. Leur accent est obligatoire"),
    p("déjà — très — après — été — école — élève — père — mère — frère — derrière — première — rivière — lumière — théâtre — forêt — île — hôpital — bientôt — plutôt — tôt — côté — âge — être — fête — sécurité — éthique", { after: 30 }),
    note("astuce : l'accent circonflexe est souvent le souvenir d'un ancien « s » : forêt → forestier"),
    sub("3. Ils doublent une lettre"),
    p("terre — femme — homme — comme — comment — année — appeler — arriver — attendre — attention — personne — commencer — ennemi — belle — nouvelle — meilleur — ville — mille — aller — professionnel — honnête — grosse", { after: 30 }),
    note("les pièges inverses : nourriture, difficile, apercevoir — une seule lettre !"),
    sub("4. Ils ne s'écrivent pas comme ils se prononcent"),
    p("monsieur — femme — fils — automne — temps — sept — vingt — second — aujourd'hui — oignon — eau — beaucoup — longtemps — pied — nez — riz — tabac — estomac — rythme — curriculum", { after: 30 }),
    sub("5. Les invariables à savoir par cœur"),
    p("maintenant — pendant — souvent — surtout — aussi — assez — encore — enfin — ensuite — ensemble — pourtant — parfois — quelquefois — presque — malgré — parmi — chez — hier — demain — ici — ailleurs — dehors — dedans — partout", { after: 30 }),
    note("rituel : trois mots par jour sur l'ardoise — en un mois, les cent mots sont à toi"),
  ];
}

// ============ ANNEXE 9 — La boîte à connecteurs ============
function annex9() {
  return [
    ...annexTitle("annex9", 9, "LA BOÎTE À CONNECTEURS"),
    p("Les connecteurs sont les panneaux indicateurs du texte : ils relient les idées et guident le lecteur. Choisis le bon rayon de la boîte — c'est la grande spécialité de ton année de 3e !", { after: 100 }),
    sub("1. Pour ORGANISER les étapes (unité 2)"),
    bullet([run("d'abord, premièrement, ensuite, puis, après, enfin", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : D'abord visitez la pyramide, ensuite descendez le Nil, enfin goûtez la cuisine du Caire."),
    sub("2. Pour SITUER dans l'espace (unité 1)"),
    bullet([run("ici, là-bas, devant, derrière, à côté de, près de, au fond, au loin", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Là-bas, derrière l'atelier, sèchent les poteries ; devant, brille la vitrine."),
    sub("3. Pour EXPLIQUER la cause (unités 3 et 4)"),
    bullet([run("parce que, car, puisque, grâce à, à cause de", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Le village protège sa forêt parce qu'elle attire les visiteurs."),
    sub("4. Pour DÉDUIRE la conséquence (unités 3 et 4)"),
    bullet([run("donc, alors, c'est pourquoi, si bien que", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : La corruption ruine la confiance, donc chacun doit la refuser."),
    sub("5. Pour dire le BUT (unité 4)"),
    bullet([run("pour, afin de, pour que (+ subjonctif)", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Nous affichons les prix pour que personne ne paie en cachette."),
    sub("6. Pour poser une CONDITION (unité 4)"),
    bullet([run("si, à condition que, en cas de", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Si chacun refusait le pot-de-vin, la corruption reculerait."),
    sub("7. Pour OPPOSER (unités 4 et 5)"),
    bullet([run("mais, pourtant, cependant, au contraire, malgré", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Les beignets sont bon marché, pourtant le corps réclame mieux."),
    sub("8. Pour ILLUSTRER (toute l'année)"),
    bullet([run("par exemple, citons, comme, tel que", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Des destinations telles que Nosy Be attirent le monde entier."),
    sub("9. Pour REFORMULER et DÉFINIR (unités 1 et 2)"),
    bullet([run("c'est-à-dire, autrement dit, en d'autres termes", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : L'artisan transforme la matière première, c'est-à-dire ce que la nature lui donne."),
    sub("10. Pour CONCLURE et RÉSUMER (toute l'année)"),
    bullet([run("bref, en somme, finalement, pour conclure", { bold: true, color: C.SALMON, hl: true })]),
    note("exemple : Bref, un pays qui soigne ses artisans soigne son avenir."),
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
    ...modele("1. Le reportage (unité 1)", UCOL.u1,
      ["le lieu et la personne dès l'ouverture", "les connecteurs spatiaux pour guider l'œil", "une parole rapportée entre guillemets", "une phrase d'avenir pour finir"],
      "À Ambositra, l'atelier de Dadabe sent le palissandre. Là-bas, au fond, dorment les planches ; devant, la vitrine brille de boîtes marquetées. « Le bois parle, il suffit de l'écouter », sourit le vieil artisan. Ses petits-fils, déjà, apprennent à l'entendre.",
      "là-bas, devant, au fond, à côté de"),
    ...modele("2. La page de guide de voyage (unité 2)", UCOL.u2,
      ["le pays et sa promesse dès la première ligne", "les rubriques : monuments, climat, gastronomie", "les étapes avec d'abord, ensuite, enfin", "un conseil pratique à la fin"],
      "L'Égypte, c'est cinq mille ans d'histoire au bord du Nil. D'abord, saluez la pyramide de Gizeh, la seule merveille antique encore debout. Ensuite, descendez le fleuve jusqu'aux temples. Enfin, attablez-vous au Caire. Conseil : évitez l'été, le désert brûle !",
      "d'abord, ensuite, enfin — le présent et l'impératif du guide"),
    ...modele("3. Le récit de voyage (unité 3)", UCOL.u3,
      ["le décor à l'imparfait", "le héros et son objectif (le schéma actanciel)", "l'obstacle, puis l'adjuvant qui aide", "le dénouement et ce que le voyage a changé"],
      "Le train grimpait lentement entre les collines, et Fara rêvait déjà des toits rouges de Fianarantsoa. Mais à mi-chemin, la pluie a coupé la voie. Un vieux guide a alors montré le sentier des muletiers. Au soir, la ville s'allumait sous leurs yeux : la fatigue même semblait une récompense.",
      "l'imparfait du décor, le passé composé des actions, mais, alors"),
    ...modele("4. Le paragraphe argumentatif (unités 4 et 5)", UCOL.u4,
      ["la thèse, courte et claire", "l'argument relié par parce que ou donc", "l'exemple concret : par exemple", "la conclusion qui appelle à agir : bref"],
      "La corruption ruine notre pays. Parce que chaque pot-de-vin vole une salle de classe ou un médicament, elle frappe d'abord les plus pauvres. Par exemple, un marché truqué, c'est une route qui s'effondre à la première pluie. Bref, à chaque guichet, apprenons le mot non.",
      "parce que, donc, par exemple, bref — la marche de l'argument"),
    ...modele("5. Le compte rendu (unité 6)", UCOL.u6,
      ["l'ouverture : quoi, quand, où, qui", "le déroulé dans l'ordre", "les décisions : il a été décidé, la voix passive", "la clôture : l'heure, la signature"],
      "Le club informatique s'est réuni le samedi 12 mars, à neuf heures, en salle 3, sous la présidence de Mme la directrice ; onze membres étaient présents. Il s'agissait de la sécurité en ligne. Après discussion, il a été décidé d'adopter deux règles : un mot de passe secret et des sources vérifiées. La séance a été levée à dix heures. Le secrétaire : Hery.",
      "il s'agissait de, il a été décidé, la séance a été levée — aucune opinion !"),
    ...modele("6. Le CV et la lettre de motivation (unité 7)", UCOL.u7,
      ["le CV : six rubriques, des mots-clés, du vrai, du propre", "la lettre : VOUS (votre annonce), MOI (mes preuves), NOUS (l'entretien)", "la formule de politesse exacte", "la règle d'or : répondre point par point à l'annonce"],
      "Monsieur, j'ai lu avec attention votre annonce pour un poste d'apprenti menuisier. Votre atelier demande un jeune soigneux et ponctuel : la formation que j'ai suivie m'a appris le travail précis, et je n'ai jamais manqué un jour d'école. Je me tiens à votre disposition pour un entretien. Veuillez agréer, Monsieur, mes salutations respectueuses.",
      "VOUS-MOI-NOUS, le vouvoiement, la formule finale sans faute"),
  ];
}

// ============ ANNEXE 11 — La carte des merveilles : Madagascar et le monde ============
function annex11() {
  const carte = fs.existsSync(path.join(__dirname, "img", "carte_merveilles.png"))
    ? [img("carte_merveilles.png", 320, 1.4906)] : [];
  return [
    ...annexTitle("annex11", 11, "LA CARTE DES MERVEILLES : MADAGASCAR ET LE MONDE"),
    p("Tout le manuel sur une seule image ! Retrouve les trésors rencontrés dans les sept unités — ceux de la Grande Île et ceux du monde.", { after: 80 }),
    ...carte,
    sub("Je lis la carte de Madagascar"),
    bullet([run("Les Hautes Terres : ", { bold: true }), run("la marqueterie d'Ambositra et les ateliers de l'unité 1 ; Antananarivo, porte des voyages (unité 3).")]),
    bullet([run("Le Nord : ", { bold: true }), run("Nosy Be, l'île aux parfums, et l'hôtel des Voyageurs de Toamasina (unités 3 et 7).")]),
    bullet([run("Le Sud et l'Ouest : ", { bold: true }), run("le massif de l'Isalo et ses canyons ; Antsirabe et la menuiserie de Rasoa (unités 3 et 7).")]),
    bullet([run("La côte Est : ", { bold: true }), run("Sainte-Marie, les vanilleraies — et Fianarantsoa au bout de sa voie ferrée (unité 3).")]),
    p("", { after: 40 }),
    sub("Je lis la carte du monde (unité 2)"),
    bullet([run("Gizeh (Égypte) : ", { bold: true }), run("la grande pyramide, seule merveille antique debout.")]),
    bullet([run("Babylone (Irak) : ", { bold: true }), run("les jardins suspendus de la légende.")]),
    bullet([run("Éphèse et Halicarnasse (Turquie) : ", { bold: true }), run("le temple d'Artémis et le mausolée.")]),
    bullet([run("Olympie, Rhodes, Alexandrie : ", { bold: true }), run("la statue de Zeus, le Colosse, le phare.")]),
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
    ...unite("UNITÉ 1 — L'ARTISANAT", UCOL.u1, [
      "Je sais nommer les métiers de l'artisanat, leurs outils et leurs matières.",
      "Je sais guider l'œil du lecteur avec les connecteurs spatiaux.",
      "Je sais débattre de l'avenir de l'artisanat : avantages et problèmes.",
      "Je sais rédiger un reportage avec une parole rapportée."]),
    ...unite("UNITÉ 2 — LES PAYS", UCOL.u2, [
      "Je sais présenter un pays : histoire, climat, monuments, gastronomie.",
      "Je sais citer les 7 merveilles du monde antique.",
      "Je sais organiser un texte avec d'abord, ensuite, enfin.",
      "Je sais rédiger une page de guide de voyage."]),
    ...unite("UNITÉ 3 — LE TOURISME", UCOL.u3, [
      "Je sais retrouver le schéma actanciel : héros, objectif, opposants, adjuvants.",
      "Je sais employer les valeurs du présent, dont le présent de narration.",
      "Je sais relier mes phrases : juxtaposées, coordonnées, subordonnées.",
      "Je sais raconter un voyage avec l'imparfait et le passé composé."]),
    ...unite("UNITÉ 4 — LA CORRUPTION", UCOL.u4, [
      "Je sais employer les mots justes : fraude, pot-de-vin, transparence, éthique.",
      "Je sais exprimer la cause, la conséquence, le but, la condition, l'opposition.",
      "Je sais employer le conditionnel et le subjonctif après il faut que.",
      "Je sais défendre une thèse : arguments, exemples, conclusion."]),
    ...unite("UNITÉ 5 — L'ALIMENTATION ET LA SANTÉ", UCOL.u5, [
      "Je sais nommer les nutriments et les besoins du corps.",
      "Je sais composer un plat équilibré de chez nous.",
      "Je sais employer les pronoms indéfinis : tout, certains, personne, plusieurs.",
      "Je sais écrire un article de nutrition qui convainc."]),
    ...unite("UNITÉ 6 — LES MÉDIAS ET LES NTIC", UCOL.u6, [
      "Je sais citer les médias et les quatre règles d'or de la sécurité en ligne.",
      "Je sais reconnaître le il impersonnel avec le test du prénom.",
      "Je sais transformer la voix active en voix passive, avec l'accord.",
      "Je sais rédiger un compte rendu fidèle et neutre."]),
    ...unite("UNITÉ 7 — LES MÉTIERS ET LES PROFESSIONS", UCOL.u7, [
      "Je sais distinguer le métier, la qualité et la compétence.",
      "Je sais accorder le participe passé avec avoir (COD avant !).",
      "Je sais me présenter à un entretien d'embauche.",
      "Je sais rédiger mon CV et ma lettre de motivation — et j'en suis fier !"]),
  ];
}

// ============ Page finale ============
function finalPage() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: SZ.UNIT, color: UCOL.u5, center: true, after: 140 }),
    p([run("Tu as parcouru les 7 unités de ton année de 3e :", { bold: true, size: SZ.SUB })], { center: true, after: 100 }),
    p([run("l'artisanat — les pays — le tourisme — la corruption — l'alimentation et la santé — les médias et les NTIC — les métiers et les professions", { italic: true })], { center: true, after: 120 }),
    p([run("Tu sais maintenant expliquer, raconter, argumenter et rendre compte.", { bold: true })], { center: true, after: 80 }),
    p([run("Tu sais écouter, lire, dire et écrire — en classe, à l'examen et dans la vie.", { bold: true })], { center: true, after: 120 }),
    p([run("« Ny fahaizana no lova tsara indrindra. »", { bold: true, size: SZ.SUB, color: UCOL.u1 })], { center: true, after: 60 }),
    p([run("Le savoir est le plus bel héritage.", { italic: true, color: C.GRAY })], { center: true, after: 140 }),
    p([run("Bonne chance à l'examen — et bonne route vers le lycée !", { bold: true, size: SZ.SUB, color: UCOL.u6 })], { center: true, after: 80 }),
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
    ...annex7(), pageBreak(),
    ...annex8(), pageBreak(),
    ...annex9(), pageBreak(),
    ...annex10(), pageBreak(),
    ...annex11(), pageBreak(),
    ...annex12(), pageBreak(),
    ...finalPage(),
  ];
};
