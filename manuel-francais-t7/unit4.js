// Français T7 — UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE (10 leçons + révision + test) — Séances 37 à 48 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu — la délinquance juvénile
const SHADE = "D4E6F1";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE", title, slo,
  values: "respect de la loi, responsabilité, solidarité", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.SALMON, hl: true }), ...(expl ? [run("  —  " + expl)] : [])]);
const exLine = (runs, note, o = {}) => pr([
  run("–  ", { bold: true, color: COLOR }), ...runs,
  ...(note ? [run("   [" + note + "]", { italic: true, color: C.GRAY, size: 26 })] : []),
], { after: o.after != null ? o.after : 60 });
const exTitre = () => pr([run("Exemples :", { italic: true })], { after: 50 });
function box(title, children, shade = SHADE) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(title, { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade })] }),
      new TableRow({ children: [cell(children)] }),
    ],
  });
}

// passage de compréhension orale (S37)
function passageNaivo() {
  return box("PASSAGE D'ÉCOUTE — témoignage « Le choix de Naivo »", [
    p("Je m'appelle Naivo et j'ai quinze ans. L'année dernière, des garçons plus âgés traînaient chaque soir au coin de ma rue. Ils ne travaillaient pas, ils n'allaient plus à l'école. Un soir, l'un d'eux m'a tendu une cigarette qui n'était pas du tabac : c'était de la drogue. Il souriait : « Essaie, tout le monde le fait. »"),
    p("J'ai eu peur, mais j'ai dit non. Ce soir-là, j'ai tout raconté à mon oncle. Il ne m'a pas grondé ; il m'a écouté, puis il m'a inscrit au club de football du quartier. Aujourd'hui, je m'entraîne trois fois par semaine et mes notes ont remonté."),
    p("Ces garçons, eux, n'ont pas eu ma chance. Deux ont été arrêtés pour vol au marché. La drogue leur avait promis le bonheur ; elle leur a apporté la dépendance, les dettes et les mauvaises affaires. Moi, j'ai choisi l'école et le sport. Chacun est responsable de ses choix : les miens m'ont sauvé.", { after: 40 }),
  ]);
}
// texte de lecture (S39)
function texteFaitDivers() {
  return box("TEXTE DE LECTURE — fait divers « L'affaire du marché couvert »", [
    pr([run("L'affaire du marché couvert", { bold: true, color: COLOR })], { after: 40 }),
    pr([run("Mardi, en plein midi, un adolescent a été surpris en train de voler au marché couvert. Retour sur une affaire qui a secoué le quartier.", { italic: true })], { after: 60 }),
    p("Ce mardi-là, le marché était bondé et les marchandes criaient leurs prix comme à l'ordinaire. Soudain, une voix a retenti : « Au voleur ! » Un garçon de seize ans venait de saisir le porte-monnaie d'une marchande de légumes. Il a couru entre les étals, mais deux porteurs l'ont rattrapé près de la sortie."),
    p("Au poste, le garçon a avoué : il avait quitté l'école depuis un an, son père était sans travail et il passait ses journées avec une bande du quartier. « Je ne voulais pas devenir un voleur, a-t-il murmuré. Je ne savais plus quoi faire de mes journées. »"),
    p("Parce qu'il est mineur, le juge des enfants n'a pas choisi la prison : il a décidé une mesure de rééducation. Depuis, le garçon apprend la menuiserie dans un centre de formation. Le chef du centre l'affirme : personne n'est perdu pour toujours, chacun mérite une seconde chance.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Chacun est responsable de ses choix.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre le témoignage d'un jeune ;"),
    p("• nommer les formes, les causes et les remèdes de la délinquance juvénile ;"),
    p("• parler de la drogue sans détour : ses pièges, ses dangers, comment dire non ;"),
    p("• lire un fait divers : le texte narratif ;"),
    p("• employer les pronoms indéfinis et les pronoms possessifs ;"),
    p("• écrire un dialogue avec les verbes de parole ;"),
    p("• débattre : écouter, donner son avis, respecter l'avis des autres ;"),
    p("• rédiger un témoignage ;"),
    p("• lire un récit à haute voix.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte NARRATIF", { bold: true, color: COLOR }),
        run(" — raconter des faits réels ou imaginaires, dans l'ordre du temps.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("respect de la loi, responsabilité, solidarité.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S37 — Compréhension orale ----------
function ficheS37() {
  const meta = META("Compréhension orale : témoignage « Le choix de Naivo »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'un témoignage entendu et identifie le choix du narrateur et ses conséquences.",
    "1 / 12", "texte du passage, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 3 : quelle est la règle d'or du journaliste ? Qu'est-ce qu'une rumeur ?")],
      [fp("Répondent."),
       fp("R.A. : vérifier avant de publier ; une rumeur se répète sans preuve.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Demandez : que peut-il arriver à un jeune qui quitte l'école et passe ses journées dans la rue ? Accueillez toutes les réponses avec sérieux ; annoncez que l'unité parlera de ces dangers sans détour.")],
      [fp("Répondent, échangent."),
       fp("R.A. : il s'ennuie ; il suit de mauvaises bandes ; il peut voler, toucher à la drogue…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : le témoignage d'un jeune de quinze ans, Le choix de Naivo. » Consigne : écouter sans écrire ; repérer le choix que Naivo a fait.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le témoignage d'une voix simple et sincère. Questions globales : qui parle ? Que lui est-il arrivé ? Qu'a-t-il décidé ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : Naivo, 15 ans ; on lui a proposé de la drogue ; il a dit non et a choisi le football et l'école.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites relever : la proposition (« Essaie, tout le monde le fait »), la réaction de Naivo (peur, refus, parole à l'oncle), l'aide reçue (écoute, club de football), le destin des autres garçons (vol, arrestation, dépendance).")],
      [fp("Relèvent, comparent les deux destins."),
       fp("R.A. : Naivo a parlé à un adulte de confiance ; les autres ont suivi la bande et la drogue les a conduits au vol.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites dégager les trois gestes qui ont protégé Naivo : dire non tout de suite ; parler à un adulte de confiance ; remplir ses journées (sport, école). Faites expliquer la dernière phrase : « Chacun est responsable de ses choix. »")],
      [fp("Dégagent les trois gestes, expliquent."),
       fp("R.A. : dire non, parler, s'occuper ; nos choix décident de notre avenir.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : redites le témoignage en trois phrases : la proposition, le refus, le résultat.")],
      [fp("Reformulent."),
       pAns("R.A. : Un garçon a proposé de la drogue à Naivo. Naivo a refusé et en a parlé à son oncle. Aujourd'hui, il joue au football et réussit à l'école.", ["refusé"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que propose le garçon plus âgé à Naivo ?"),
       fp("2. Quels sont les trois gestes qui ont protégé Naivo ?"),
       fp("3. Qu'est-il arrivé aux garçons de la bande ?"),
       fp("4. Explique : « La drogue leur avait promis le bonheur ; elle leur a apporté la dépendance. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. une cigarette de drogue — 2. dire non, parler à un adulte, s'inscrire au club — 3. deux ont été arrêtés pour vol — 4. la drogue trompe : elle attire puis elle enchaîne.", ["dépendance"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS37() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("COMPRENDRE UN TÉMOIGNAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageNaivo(),
    p("", { after: 80 }),
    sub("1. Le témoignage : une personne raconte SA vérité"),
    exLine([run("Celui qui parle dit "), run("je", { bold: true, color: C.SALMON, hl: true }), run(" : il a vécu les faits.")],
      "« Je m'appelle Naivo et j'ai quinze ans. »"),
    exLine([run("Il raconte "), run("au passé, dans l'ordre", { bold: true, color: C.SALMON, hl: true }), run(" : l'année dernière → un soir → aujourd'hui.")],
      "les indices de temps guident mon écoute"),
    exLine([run("Il termine par la "), run("leçon", { bold: true, color: C.SALMON, hl: true }), run(" qu'il a tirée.")],
      "« Chacun est responsable de ses choix. »", { after: 80 }),
    sub("2. Les trois gestes qui ont protégé Naivo"),
    exLine([run("Dire NON tout de suite", { bold: true, color: C.SALMON, hl: true }), run(", sans discuter.")],
      "« tout le monde le fait » est un mensonge pour te piéger"),
    exLine([run("Parler à un adulte de confiance", { bold: true, color: C.SALMON, hl: true }), run(" : un parent, un oncle, un professeur.")],
      "garder le secret, c'est rester seul face au danger"),
    exLine([run("Remplir ses journées", { bold: true, color: C.SALMON, hl: true }), run(" : l'école, le sport, un club.")],
      "l'ennui est la porte d'entrée des mauvaises bandes", { after: 80 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Complète : « La drogue leur avait promis ……… ; elle leur a apporté ………, ……… et ………. »"),
    p("2. Cite les trois gestes qui ont protégé Naivo.", { after: 60 }),
  ];
}

// ---------- S38 — Lexique ----------
function ficheS38() {
  const meta = META("Lexique : adolescence, citoyenneté, drogue, prévention",
    "À la fin de la séance, l'apprenant emploie le vocabulaire de la délinquance juvénile (formes, causes, remèdes) et le vocabulaire de la prévention de la drogue.",
    "2 / 12", "étiquettes de mots, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quels sont les trois gestes qui ont protégé Naivo ?")],
      [fp("Répondent."),
       fp("R.A. : dire non, parler à un adulte, remplir ses journées.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez « délinquance juvénile » au tableau. Faites découper : juvénile = des jeunes ; délinquance = les actes contraires à la loi. Demandez des exemples entendus dans le témoignage.")],
      [fp("Décomposent le mot, citent."),
       fp("R.A. : le vol, la drogue, les bandes…")],
      "Observation du mot", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots de la délinquance et de la prévention. Nous parlerons de tout, clairement : c'est la meilleure protection. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Trois colonnes : les formes — les causes — les remèdes. Faites classer : le vol, la pauvreté, le centre de formation, les bandes, l'ennui, le club de sport, la drogue, l'abandon de l'école, la rééducation, les conflits familiaux…")],
      [fp("Classent les étiquettes."),
       fp("R.A. : formes : vol, bandes, drogue ; causes : pauvreté, ennui, abandon scolaire, conflits familiaux ; remèdes : sport, formation, rééducation.")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Précisez deux notions : le mineur (moins de dix-huit ans : la justice cherche à le rééduquer, pas à le briser) ; la dépendance (quand on ne peut plus s'arrêter : la drogue rend dépendant, coûte cher et détruit la santé et les études). Vocabulaire du refus : refuser, dire non, s'éloigner, prévenir un adulte.")],
      [fp("Notent, reformulent."),
       fp("R.A. : un mineur délinquant a droit à une seconde chance ; la dépendance enchaîne ; on peut toujours dire non.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des trois colonnes et les mots de la prévention.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « Je donne la définition, vous écrivez le mot. » Moins de dix-huit ans ! Ne plus pouvoir s'arrêter ! Apprendre un métier pour repartir ! Puis une phrase avec « refuser » en binômes.")],
      [fp("Écrivent sur l'ardoise. Rédigent."),
       pAns("R.A. : un mineur — la dépendance — la formation (ou la réinsertion) ; exemple : Naivo a refusé la cigarette et a prévenu son oncle.", ["refusé"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Cite deux formes, deux causes et deux remèdes de la délinquance juvénile."),
       fp("2. Qu'est-ce que la dépendance ?"),
       fp("3. Que fait la justice avec un mineur délinquant ?"),
       fp("4. Écris une phrase avec « prévention ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. vol et drogue ; pauvreté et ennui ; sport et formation — 2. ne plus pouvoir s'arrêter — 3. elle le rééduque pour le réinsérer — 4. exemple : La prévention commence par la parole en classe.", ["prévention"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS38() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("DÉLINQUANCE, DROGUE, PRÉVENTION : LES MOTS POUR COMPRENDRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Vocabulaire — la délinquance juvénile"),
    mot("la délinquance juvénile", "les actes contraires à la loi commis par des jeunes"),
    mot("les formes", "le vol, les bandes, les armes blanches, la drogue"),
    mot("les causes", "la pauvreté, l'ennui, l'abandon de l'école, les conflits familiaux"),
    mot("les remèdes", "l'école, le sport, la formation, la rééducation"),
    mot("un mineur", "un jeune de moins de dix-huit ans — la justice le rééduque pour lui donner une seconde chance"),
    p("", { after: 60 }),
    sub("2. La drogue : ce qu'il faut savoir, sans détour"),
    exLine([run("La drogue "), run("promet", { bold: true, color: C.SALMON, hl: true }), run(" le plaisir, elle "), run("apporte", { bold: true, color: C.SALMON, hl: true }), run(" la dépendance.")],
      "la dépendance = ne plus pouvoir s'arrêter"),
    exLine([run("Elle coûte cher : pour payer, certains finissent par "), run("voler", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "c'est le chemin exact des garçons du témoignage"),
    exLine([run("Elle détruit "), run("la santé, les études, la confiance", { bold: true, color: C.SALMON, hl: true }), run(" de la famille.")],
      "aucun « essai » n'est sans danger : le piège commence à la première fois", { after: 80 }),
    sub("3. Vocabulaire — la prévention : mes trois armes"),
    mot("refuser", "dire non tout de suite, sans discuter ni s'excuser"),
    mot("s'éloigner", "quitter le lieu, changer de chemin"),
    mot("prévenir un adulte de confiance", "un parent, un professeur : parler n'est pas trahir, c'est se protéger"),
    p("", { after: 40 }),
    sub("4. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« un jeune en danger, à protéger »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« un bon à rien »   "), run("[personne n'est perdu : chacun mérite une seconde chance]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — je classe :"),
    p("Mets chaque mot dans sa colonne (forme, cause, remède) : le vol — l'ennui — le club de sport — la drogue — les conflits familiaux — la formation.", { after: 60 }),
  ];
}

// ---------- S39 — Compréhension écrite ----------
function ficheS39() {
  const meta = META("Compréhension écrite : « L'affaire du marché couvert » — le fait divers et le texte narratif",
    "À la fin de la séance, l'apprenant lit un fait divers, en dégage les informations essentielles et repère les marques du texte narratif : indices de temps, imparfait et passé composé.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez deux causes et deux remèdes de la délinquance juvénile.")],
      [fp("Répondent."),
       fp("R.A. : pauvreté, ennui ; sport, formation.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : qu'est-ce qu'un fait divers dans un journal ? Donnez des exemples de titres entendus à la radio.")],
      [fp("Répondent."),
       fp("R.A. : un petit événement de la vie : un vol, un accident, un incendie…")],
      "Échange oral", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : un fait divers, L'affaire du marché couvert. C'est un texte narratif : il raconte. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : que s'est-il passé ? où ? quand ? qui est en cause ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : un vol de porte-monnaie, au marché couvert, mardi à midi, par un garçon de seize ans.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites relever : les indices de temps (ce mardi-là, soudain, depuis) ; le duo des temps (le marché était bondé / une voix a retenti) ; les causes du geste (école quittée, père sans travail, bande) ; la décision du juge (rééducation, pas la prison).")],
      [fp("Relèvent, répondent."),
       fp("R.A. : l'imparfait pose le décor, le passé composé fait surgir l'action ; le juge des enfants choisit la rééducation car le garçon est mineur.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : le texte narratif raconte des faits dans l'ordre du temps, avec des indices temporels ; dans le récit au passé, l'imparfait dure et le passé composé surgit. Faites discuter la phrase finale : « chacun mérite une seconde chance ».")],
      [fp("Formulent, discutent."),
       fp("R.A. : punir ne suffit pas : il faut former et réinsérer.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez une phrase à l'imparfait (décor) et une phrase au passé composé (action).")],
      [fp("Relèvent, justifient."),
       pAns("R.A. : décor : « le marché était bondé » ; action : « une voix a retenti ».", ["décor"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que s'est-il passé au marché couvert ? Quand ?"),
       fp("2. Pourquoi le garçon a-t-il volé ?"),
       fp("3. Pourquoi le juge n'a-t-il pas choisi la prison ?"),
       fp("4. Relève un indice de temps et une phrase à l'imparfait.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. un vol de porte-monnaie, mardi à midi — 2. école quittée, père sans travail, bande, journées vides — 3. il est mineur : la justice le rééduque — 4. « ce mardi-là » ; « le marché était bondé ».", ["mineur"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS39() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LE FAIT DIVERS ET LE TEXTE NARRATIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteFaitDivers(),
    p("", { after: 80 }),
    sub("1. Le texte narratif : raconter dans l'ordre du temps"),
    exLine([run("Il raconte des "), run("faits", { bold: true, color: C.SALMON, hl: true }), run(", réels ou imaginaires.")],
      "le fait divers raconte un fait réel et récent"),
    exLine([run("Les "), run("indices de temps", { bold: true, color: C.SALMON, hl: true }), run(" jalonnent le récit : ce mardi-là, soudain, depuis.")],
      "je les souligne : ils donnent l'ordre des événements", { after: 80 }),
    sub("2. Le duo des temps du récit"),
    exTitre(),
    exLine([run("Le marché "), run("était", { bold: true, color: C.SALMON, hl: true }), run(" bondé, les marchandes "), run("criaient", { bold: true, color: C.SALMON, hl: true }), run(" leurs prix.")],
      "l'imparfait pose le décor qui dure"),
    exLine([run("Soudain, une voix "), run("a retenti", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "le passé composé fait surgir l'action — soudain est son ami fidèle", { after: 80 }),
    sub("3. Comprendre, pas seulement juger"),
    exLine([run("Les causes : ", { bold: true }), run("école quittée, père sans travail, bande, journées vides.")],
      "le récit explique sans excuser"),
    exLine([run("La réponse de la justice : ", { bold: true }), run("rééducation et formation", { bold: true, color: C.SALMON, hl: true }), run(", car il est mineur.")],
      "« personne n'est perdu pour toujours »", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Souligne trois indices de temps. — 2. Relève une phrase-décor (imparfait) et une phrase-action (passé composé). — 3. Recopie la décision du juge.", { after: 60 }),
  ];
}

// ---------- S40 — Grammaire : les pronoms indéfinis ----------
function ficheS40() {
  const meta = META("Grammaire : les pronoms indéfinis",
    "À la fin de la séance, l'apprenant reconnaît et emploie les pronoms indéfinis (quelqu'un, personne, rien, chacun, tous, certains, plusieurs, aucun).",
    "4 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quels temps forment le duo du récit ? Quel est le rôle de chacun ?")],
      [fp("Répondent."),
       fp("R.A. : l'imparfait (décor) et le passé composé (action).")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Quelqu'un a crié au marché. » Demandez : sait-on qui ? Amenez l'idée : un pronom qui désigne sans préciser.")],
      [fp("Répondent."),
       fp("R.A. : non, on ne sait pas qui : la personne reste indéfinie.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les pronoms indéfinis. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Quelqu'un a vu la scène. — Personne n'est perdu pour toujours. — Rien n'excuse le vol. — Chacun mérite une seconde chance. — Tous veulent aider. — Certains ont quitté l'école. Faites souligner les pronoms et chercher ce qu'ils désignent.")],
      [fp("Soulignent, constatent l'imprécision."),
       fp("R.A. : ils désignent des personnes ou des choses sans les nommer précisément.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites classer : singulier (quelqu'un, personne, rien, chacun, aucun → verbe au singulier) et pluriel (tous, certains, plusieurs → verbe au pluriel). Attention : personne, rien, aucun s'emploient avec « ne ».")],
      [fp("Classent, notent les deux pièges."),
       fp("R.A. : « Chacun est » (singulier) ; « Personne NE mérite d'être abandonné ».")],
      "Classement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : liste des pronoms indéfinis en deux colonnes (singulier / pluriel) + la règle du « ne ».")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : complétez. « … n'a le droit de voler. » — « … sont restés au club après l'entraînement. » — « … est responsable de ses choix. »")],
      [fp("Complètent, justifient l'accord."),
       pAns("R.A. : Personne — Plusieurs (ou Certains, Tous) — Chacun.", ["Personne"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Souligne les pronoms indéfinis : « Quelqu'un a prévenu le gardien ; personne n'a été blessé ; tous sont rentrés chez eux. »"),
       fp("2. Accorde : « Chacun (être) responsable de ses choix. »"),
       fp("3. Écris une phrase avec « rien ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. quelqu'un, personne, tous — 2. est — 3. exemple : Rien ne remplace le dialogue avec les parents.", ["Chacun"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS40() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES PRONOMS INDÉFINIS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Désigner sans préciser"),
    exTitre(),
    exLine([run("Quelqu'un", { bold: true, color: C.SALMON, hl: true }), run(" a crié au marché.")],
      "qui ? on ne sait pas : la personne reste indéfinie"),
    exLine([run("Certains", { bold: true, color: C.SALMON, hl: true }), run(" ont quitté l'école, "), run("plusieurs", { bold: true, color: C.SALMON, hl: true }), run(" sont restés.")],
      "des jeunes, sans dire lesquels", { after: 80 }),
    sub("2. Singulier ou pluriel ? Le verbe suit le pronom"),
    exLine([run("Chacun "), run("est", { bold: true, color: C.SALMON, hl: true }), run(" responsable de ses choix.")],
      "chacun, quelqu'un, personne, rien, aucun → verbe au SINGULIER"),
    exLine([run("Tous "), run("veulent", { bold: true, color: C.SALMON, hl: true }), run(" aider le quartier.")],
      "tous, certains, plusieurs → verbe au PLURIEL", { after: 80 }),
    sub("3. Le piège du « ne »"),
    exTitre(),
    exLine([run("Personne "), run("n'", { bold: true, color: C.SALMON, hl: true }), run("est perdu pour toujours.")],
      "personne, rien, aucun travaillent toujours avec « ne »"),
    exLine([run("Rien "), run("n'", { bold: true, color: C.SALMON, hl: true }), run("excuse le vol.")],
      "mais pas de « pas » en plus : « rien ne… », jamais « rien ne… pas »", { after: 80 }),
    sub("Exercice — complète avec le bon pronom indéfini :"),
    p("1. ……… n'a le droit de voler. — 2. ……… est responsable de ses choix. — 3. ……… sont restés au club après l'entraînement. — 4. ……… ne remplace le dialogue.", { after: 60 }),
  ];
}

// ---------- S41 — Grammaire : les pronoms possessifs ----------
function ficheS41() {
  const meta = META("Grammaire : les pronoms possessifs",
    "À la fin de la séance, l'apprenant remplace un groupe nominal par le pronom possessif qui convient, selon le possesseur et la chose possédée.",
    "5 / 12", "corpus de phrases, tableau des pronoms, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : accordez : « Chacun (être) responsable » ; « Tous (vouloir) aider ».")],
      [fp("Répondent."),
       fp("R.A. : est ; veulent.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Mon quartier a un terrain de sport ; ton quartier n'en a pas. » Demandez : comment éviter de répéter « quartier » ?")],
      [fp("Proposent."),
       fp("R.A. : « … le tien n'en a pas. »")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les pronoms possessifs — le mien, le tien, le sien… »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Mes choix m'ont sauvé ; les tiens te sauveront. — Ton école organise un club ; la nôtre aussi. — Leurs amis traînent dehors ; les leurs étudient. Faites retrouver ce que remplace chaque pronom.")],
      [fp("Retrouvent les groupes remplacés."),
       fp("R.A. : les tiens = tes choix ; la nôtre = notre école ; les leurs = leurs amis.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Construisez le tableau complet : le mien, la mienne, les miens, les miennes / le tien… / le sien… / le nôtre, la nôtre, les nôtres / le vôtre… / le leur, la leur, les leurs. Deux règles : le pronom varie selon le POSSESSEUR et selon la chose POSSÉDÉE ; accent circonflexe sur nôtre et vôtre.")],
      [fp("Complètent le tableau, notent les règles."),
       fp("R.A. : « ma classe → la mienne » ; « vos amis → les vôtres ».")],
      "Construction du tableau", "Tableau des pronoms"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des pronoms possessifs et les deux règles.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : remplacez. « mes parents → … » ; « votre quartier → … » ; « ses notes → … » ; « nos choix → … »")],
      [fp("Remplacent, justifient."),
       pAns("R.A. : les miens — le vôtre — les siennes — les nôtres.", ["les nôtres"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplace : « Mon frère choisit bien ses amis ; … choisit mal … . » (ton frère / ses amis)"),
       fp("2. Complète : « Votre équipe a gagné ; … a perdu. » (notre équipe)"),
       fp("3. Pourquoi écrit-on « la nôtre » avec un accent circonflexe ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le tien choisit mal les siens — 2. la nôtre — 3. l'accent distingue le pronom (la nôtre) du déterminant (notre).", ["le tien"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS41() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES PRONOMS POSSESSIFS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Remplacer sans répéter"),
    exTitre(),
    exLine([run("Mon quartier a un terrain de sport ; "), run("le tien", { bold: true, color: C.SALMON, hl: true }), run(" n'en a pas.")],
      "le tien = ton quartier : plus de répétition !"),
    exLine([run("Mes choix m'ont sauvé ; "), run("les tiens", { bold: true, color: C.SALMON, hl: true }), run(" te sauveront.")],
      "les tiens = tes choix", { after: 80 }),
    sub("2. Le tableau des pronoms possessifs"),
    exLine([run("à moi : "), run("le mien, la mienne, les miens, les miennes", { bold: true, color: C.SALMON, hl: true })], null),
    exLine([run("à toi : "), run("le tien, la tienne, les tiens, les tiennes", { bold: true, color: C.SALMON, hl: true })], null),
    exLine([run("à lui / à elle : "), run("le sien, la sienne, les siens, les siennes", { bold: true, color: C.SALMON, hl: true })], null),
    exLine([run("à nous : "), run("le nôtre, la nôtre, les nôtres", { bold: true, color: C.SALMON, hl: true })], "accent circonflexe sur le ô !"),
    exLine([run("à vous : "), run("le vôtre, la vôtre, les vôtres", { bold: true, color: C.SALMON, hl: true })], "accent circonflexe aussi"),
    exLine([run("à eux / à elles : "), run("le leur, la leur, les leurs", { bold: true, color: C.SALMON, hl: true })], "jamais de « s » à leur au singulier", { after: 80 }),
    sub("3. La double variation"),
    exLine([run("ma classe → "), run("la mienne", { bold: true, color: C.SALMON, hl: true }), run("   /   vos amis → "), run("les vôtres", { bold: true, color: C.SALMON, hl: true })],
      "le pronom change selon le possesseur ET selon la chose possédée", { after: 80 }),
    sub("Exercice — remplace par un pronom possessif :"),
    p("1. mes parents → ……… — 2. votre quartier → ……… — 3. ses notes → ……… — 4. « Votre équipe a gagné ; (notre équipe) ……… a perdu. »", { after: 60 }),
  ];
}

// ---------- S42 — Grammaire : les verbes de parole ----------
function ficheS42() {
  const meta = META("Grammaire : les verbes de parole et la ponctuation du dialogue",
    "À la fin de la séance, l'apprenant emploie des verbes de parole variés et ponctue correctement un dialogue : deux-points, guillemets, tirets, incises.",
    "6 / 12", "corpus au tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : remplacez par un pronom possessif : « nos choix », « sa bande ».")],
      [fp("Répondent."),
       fp("R.A. : les nôtres, la sienne.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Relisez dans le fait divers : « Je ne voulais pas devenir un voleur, a-t-il murmuré. » Demandez : quel verbe indique qu'il parle ? Comment parle-t-il ?")],
      [fp("Répondent."),
       fp("R.A. : « a murmuré » : il parle à voix basse, avec honte.")],
      "Observation guidée", "Texte S39"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les verbes de parole et la ponctuation du dialogue. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : dire (neutre), demander (question), répondre, s'écrier (fort), murmurer (bas), avouer (reconnaître une faute), conseiller. Faites mimer la nuance de chacun à voix haute.")],
      [fp("Liser, miment les nuances."),
       fp("R.A. : chaque verbe peint la voix et le sentiment de celui qui parle.")],
      "Corpus et mime", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites observer la ponctuation : les deux-points annoncent les paroles ; les guillemets les encadrent ; le tiret marque le changement de personne ; l'incise (a-t-il murmuré) se glisse dans la phrase, avec sujet inversé.")],
      [fp("Repèrent les quatre signes."),
       fp("R.A. : Il souriait : « Essaie ! » — « Non », a répondu Naivo.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : la liste des verbes de parole avec leur nuance + le schéma de ponctuation du dialogue.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : remplacez « dit » par un verbe plus précis. « Au voleur ! dit la marchande. » — « C'est ma faute, dit le garçon à voix basse. » — « Pourquoi as-tu volé ? dit le juge. »")],
      [fp("Proposent des verbes nuancés."),
       pAns("R.A. : s'écrie la marchande — murmure (ou avoue) le garçon — demande le juge.", ["s'écrie"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Récris avec la bonne ponctuation : Naivo répond non merci"),
       fp("2. Remplace « dit » : « Essaie, dit le garçon avec insistance. »"),
       fp("3. À quoi sert le tiret dans un dialogue ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Naivo répond : « Non, merci. » — 2. insiste (ou répète) — 3. il marque le changement de personne qui parle.", ["tiret"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS42() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VERBES DE PAROLE ET LE DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Des verbes qui peignent la voix"),
    exTitre(),
    exLine([run("« Au voleur ! », "), run("s'écrie", { bold: true, color: C.SALMON, hl: true }), run(" la marchande.")],
      "s'écrier = crier fort, sous le coup de l'émotion"),
    exLine([run("« Je ne savais plus quoi faire », "), run("murmure", { bold: true, color: C.SALMON, hl: true }), run(" le garçon.")],
      "murmurer = parler tout bas"),
    exLine([run("« Pourquoi as-tu volé ? », "), run("demande", { bold: true, color: C.SALMON, hl: true }), run(" le juge.")],
      "demander = poser une question"),
    exLine([run("« C'est ma faute », "), run("avoue", { bold: true, color: C.SALMON, hl: true }), run("-t-il.")],
      "avouer = reconnaître sa faute — bien plus précis que « dit » !", { after: 80 }),
    sub("2. La ponctuation du dialogue : quatre signes"),
    exLine([run("Les deux-points ( : )", { bold: true, color: C.SALMON, hl: true }), run(" annoncent les paroles.")], "Il souriait : « Essaie. »"),
    exLine([run("Les guillemets ( « » )", { bold: true, color: C.SALMON, hl: true }), run(" encadrent les paroles.")], null),
    exLine([run("Le tiret ( — )", { bold: true, color: C.SALMON, hl: true }), run(" marque le changement de personne.")], "— Non, merci.  — Allez, essaie !"),
    exLine([run("L'incise", { bold: true, color: C.SALMON, hl: true }), run(" se glisse dans la phrase : « Non », "), run("a répondu Naivo", { bold: true }), run(".")],
      "le sujet s'inverse : a-t-il murmuré, répondit-elle", { after: 80 }),
    sub("Exercice — améliore le dialogue :"),
    p("Récris en remplaçant « dit » par un verbe précis et en ponctuant : 1. « Essaie dit le garçon avec insistance » — 2. « Non merci dit Naivo d'une voix ferme » — 3. « Quelle horreur dit la marchande très fort »", { after: 60 }),
  ];
}

// ---------- S43 — Production orale ----------
function ficheS43() {
  const meta = META("Production orale : le débat — prévenir la délinquance juvénile",
    "À la fin de la séance, l'apprenant participe à un débat : il donne son avis avec des formules correctes, écoute et respecte l'avis des autres.",
    "7 / 12", "sujet au tableau, bâton de parole");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez trois verbes de parole et leur nuance.")],
      [fp("Répondent."),
       fp("R.A. : s'écrier (fort), murmurer (bas), avouer (reconnaître).")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez le sujet : « Comment protéger les jeunes de notre quartier de la délinquance ? » Faites rappeler les causes vues en séance 38 : le débat cherchera les remèdes.")],
      [fp("Relisent les causes."),
       fp("R.A. : ennui, pauvreté, abandon de l'école, bandes…")],
      "Lancement", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : le débat. » Donnez les règles d'or : demander la parole, écouter sans couper, respecter l'avis contraire, parler pour construire.")],
      [fp("Écoutent les règles.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Affichez les formules : « Je pense que… parce que… » ; « Je suis d'accord avec… » ; « Je ne suis pas d'accord, parce que… » ; « Et si on… ? » Faites-les répéter.")],
      [fp("Répètent les formules.")],
      "Formules au tableau", "Tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("En binômes : préparer deux propositions concrètes (un club de sport, des activités le samedi, parler aux adultes, aider un camarade en difficulté…) avec un argument chacune.")],
      [fp("Préparent leurs propositions.")],
      "Binômes", "Brouillons"),
    stepRow(["5. Synthèse", "(débat)"],
      [fp("Animez le débat avec le bâton de parole. Notez les propositions au tableau. Faites reformuler les avis mal exprimés avec les formules.")],
      [fp("Débattent en respectant les règles."),
       pAns("R.A. : Je pense qu'il faut un terrain de sport ouvert le soir, parce que l'ennui pousse vers les bandes. — Je suis d'accord, et si on créait aussi un club de lecture ?", ["parce que"], { size: SZ.FICHE })],
      "Débat réglé", "Bâton de parole"),
    stepRow(["6. Entraînement"],
      [fp("Concluez : faites voter la classe pour les trois meilleures propositions et récapitulez-les en phrases complètes.")],
      [fp("Votent, récapitulent.")],
      "Vote et synthèse", "Tableau"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. j'ai demandé la parole — 2. j'ai utilisé une formule d'avis — 3. j'ai donné un argument (parce que…) — 4. j'ai écouté sans couper.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43", "PRODUCTION ORALE", COLOR);
}
function lessonS43() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 43", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("LE DÉBAT : DONNER SON AVIS, ÉCOUTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Les règles d'or du débat"),
    exLine([run("Je demande la parole", { bold: true, color: C.SALMON, hl: true }), run(" et j'attends mon tour.")], "on débat avec des idées, pas avec du bruit"),
    exLine([run("J'écoute sans couper", { bold: true, color: C.SALMON, hl: true }), run(".")], "écouter, c'est déjà respecter"),
    exLine([run("Je respecte l'avis contraire", { bold: true, color: C.SALMON, hl: true }), run(" : je réponds à l'idée, jamais à la personne.")], null, { after: 80 }),
    sub("2. Mes formules pour débattre"),
    exLine([run("Je pense que…", { bold: true, color: C.SALMON, hl: true }), run(" il faut un terrain de sport, "), run("parce que…", { bold: true, color: C.SALMON, hl: true }), run(" l'ennui pousse vers les bandes.")],
      "un avis vaut par son argument : toujours un « parce que »"),
    exLine([run("Je suis d'accord avec…", { bold: true, color: C.SALMON, hl: true }), run(" Hanta, et j'ajoute que…")], "on peut construire sur l'idée d'un autre"),
    exLine([run("Je ne suis pas d'accord, parce que…", { bold: true, color: C.SALMON, hl: true })], "le désaccord poli fait avancer le débat"),
    exLine([run("Et si on… ?", { bold: true, color: C.SALMON, hl: true }), run(" créait un club le samedi ?")], "la proposition ouvre une solution", { after: 80 }),
    sub("3. Notre sujet"),
    pr([run("« Comment protéger les jeunes de notre quartier de la délinquance ? »", { italic: true }), run("  Pistes : le sport, les clubs, l'entraide entre camarades, la parole avec les adultes.")], { after: 80 }),
    sub("Exercice — prépare ton intervention :"),
    p("Complète : « Je pense que ……… parce que ………. Et si on ……… ? »", { after: 60 }),
  ];
}

// ---------- S44 — Production écrite (1) ----------
function ficheS44() {
  const meta = META("Production écrite (1) : le témoignage — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit un fait vécu ou observé et construit le plan de son témoignage : situation, événement, leçon tirée.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : comment est construit le témoignage de Naivo ?")],
      [fp("Répondent."),
       fp("R.A. : il se présente, il raconte le fait, il tire la leçon.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : avez-vous déjà vu ou vécu un moment où il fallait faire un bon choix (refuser une triche, rendre un objet trouvé, défendre un camarade) ? Listez des situations sans nommer personne.")],
      [fp("Proposent des situations."),
       fp("R.A. : un objet trouvé rendu ; une bagarre évitée ; une triche refusée…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : votre témoignage. Aujourd'hui, les idées et le plan ; la rédaction à la prochaine séance. » Règle de respect : on ne cite jamais le vrai nom d'une personne mise en cause.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Dégagez le plan au tableau : 1. la situation (je me présente, je situe : quand ? où ?) ; 2. l'événement (ce qui s'est passé, dans l'ordre, avec une parole rapportée) ; 3. la leçon (ce que j'ai appris).")],
      [fp("Notent le plan.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit son fait, note ses mots clés pour les trois parties et prépare la parole qu'il rapportera entre guillemets.")],
      [fp("Construisent leur plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques plans sont lus. La classe vérifie : les trois parties ? une leçon claire à la fin ?")],
      [fp("Lisent, vérifient.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun rédige sa dernière phrase : la leçon, avec un pronom indéfini si possible (chacun, personne, rien…).")],
      [fp("Rédigent leur phrase de leçon."),
       pAns("R.A. : Depuis ce jour, je sais que personne ne regrette d'avoir dit la vérité.", ["personne"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du plan : 1. situation complète (quand, où) — 2. événement dans l'ordre — 3. une parole à rapporter — 4. une leçon en dernière phrase.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS44() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 44", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON TÉMOIGNAGE (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Avant d'écrire : trois gestes"),
    exLine([run("Je choisis un fait vécu ou observé", { bold: true, color: C.SALMON, hl: true }), run(" : un moment où il fallait bien choisir.")],
      "objet rendu, triche refusée, camarade défendu"),
    exLine([run("Je protège les personnes", { bold: true, color: C.SALMON, hl: true }), run(" : jamais le vrai nom de quelqu'un que je mets en cause.")],
      "le témoignage raconte, il ne dénonce pas"),
    exLine([run("Je prépare mes trois parties", { bold: true, color: C.SALMON, hl: true }), run(" : la situation → l'événement → la leçon.")],
      "comme Naivo", { after: 80 }),
    sub("2. Un exemple de plan"),
    exLine([run("La situation : ", { bold: true }), run("l'année dernière, sur le chemin de l'école.")], "je me présente et je situe"),
    exLine([run("L'événement : ", { bold: true }), run("un portefeuille trouvé → la tentation → la parole de mon amie → l'objet rendu.")],
      "dans l'ordre, avec une parole : « Rends-le, m'a-t-elle conseillé. »"),
    exLine([run("La leçon : ", { bold: true }), run("chacun est responsable de ses choix.")],
      "un pronom indéfini donne de la force à la leçon", { after: 80 }),
    sub("Exercice — ton plan en trois lignes :"),
    p("Choisis ton fait. Écris la situation (une phrase), les étapes de l'événement, la parole à rapporter et ta leçon finale.", { after: 60 }),
  ];
}

// ---------- S45 — Production écrite (2) ----------
function ficheS45() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son témoignage en huit à dix lignes, au passé, avec une parole rapportée, puis le relit avec la grille.",
    "9 / 12", "plans de la séance 44, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre plan. Quels temps pour le récit ? Comment ponctuer la parole rapportée ?")],
      [fp("Relisent."),
       fp("R.A. : imparfait (décor) et passé composé (actions) ; deux-points et guillemets.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « il ma proposer de tricher jai dit non ». Demandez : corrigez, puis enrichissez.")],
      [fp("Corrigent, enrichissent."),
       fp("R.A. : Il m'a proposé de tricher : j'ai refusé aussitôt.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons le témoignage complet, puis nous le relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; le « je » du témoin ; les trois parties ; une parole rapportée avec un verbe de parole précis ; la leçon finale avec un pronom indéfini.")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle à partir du plan. Circulez : aidez à choisir le bon verbe de parole et à placer l'incise.")],
      [fp("Rédigent leur témoignage.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : les trois parties ? les temps du récit ? la parole bien ponctuée ? la leçon finale ? majuscules et points ?")],
      [fp("Relisent, cochent, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun souligne une réussite et propose une amélioration.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : réussite = le verbe « m'a conseillé » ; amélioration = préciser le lieu dans la situation.", ["réussite"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : structure (2) — temps du récit (2) — parole rapportée (2) — leçon finale (2) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS45() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON TÉMOIGNAGE (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("J'écris avec "), run("je", { bold: true, color: C.SALMON, hl: true }), run(" : c'est MON témoignage.")], null),
    exLine([run("J'emploie le "), run("duo du récit", { bold: true, color: C.SALMON, hl: true }), run(" : imparfait pour le décor, passé composé pour les actions.")],
      "« Le soir tombait. Un garçon s'est approché. »"),
    exLine([run("Je rapporte une "), run("parole", { bold: true, color: C.SALMON, hl: true }), run(" avec un verbe précis.")],
      "« Rends-le », m'a-t-elle conseillé.", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes trois parties", { bold: true, color: C.SALMON, hl: true }), run(" : situation, événement, leçon.")], null),
    exLine([run("Ma parole rapportée", { bold: true, color: C.SALMON, hl: true }), run(" : deux-points, guillemets, verbe de parole.")], null),
    exLine([run("Ma leçon finale", { bold: true, color: C.SALMON, hl: true }), run(" avec un pronom indéfini.")],
      "« Personne ne regrette d'avoir dit la vérité. »", { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("il ma proposer de tricher jai dit non  →  Il m'a proposé de tricher : "), run("j'ai refusé aussitôt", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "je corrige (m'a proposé, j'ai) ET j'enrichis (refuser aussitôt, plus fort que dire non)", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« on a trouver un portefeuille on la rendu » → ………", { after: 60 }),
  ];
}

// ---------- S46 — Lecture-fluidité ----------
function ficheS46() {
  const meta = META("Lecture-fluidité : lire un fait divers à haute voix",
    "À la fin de la séance, l'apprenant lit un récit à haute voix en rendant le contraste décor/action et en changeant de voix pour les paroles rapportées.",
    "10 / 12", "texte de la séance 39, crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quels signes encadrent les paroles ? Que fait la voix pour une incise ?")],
      [fp("Répondent."),
       fp("R.A. : les guillemets ; l'incise se lit plus bas et plus vite.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez le deuxième paragraphe du fait divers de deux façons : d'une voix égale, puis en rendant le contraste (décor calme / action vive). Faites comparer.")],
      [fp("Comparent."),
       fp("R.A. : la deuxième : on entend le décor qui dure et l'action qui surgit.")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire un récit comme un conteur de faits vrais. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites préparer le texte : marquer / et // ; surligner « soudain » (accélération) ; encadrer les paroles rapportées (changement de voix) et les incises (voix plus basse).")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Entraînement en binômes : l'un lit le décor lentement, l'autre enchaîne l'action plus vite ; puis échange des rôles.")],
      [fp("S'entraînent en binômes.")],
      "Binômes", "Grille"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels sur le paragraphe de leur choix. La classe évalue : contraste décor/action ? voix des paroles ?")],
      [fp("Lisent, évaluent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : retravaillez « Au voleur ! » (s'écrier : fort) et « Je ne voulais pas devenir un voleur » (murmurer : bas).")],
      [fp("Reprennent les deux répliques.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. pauses respectées — 2. contraste décor lent / action vive — 3. changement de voix pour les paroles — 4. incises plus basses.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS46() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN FAIT DIVERS À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Ma voix raconte"),
    exLine([run("Le décor (imparfait) se lit "), run("lentement", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "« Le marché était bondé… » : on installe la scène"),
    exLine([run("L'action (passé composé) "), run("accélère", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "« Soudain, une voix a retenti ! » : le mot soudain donne le signal"),
    exLine([run("Les paroles rapportées : je "), run("change de voix", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "« Au voleur ! » fort ; « Je ne voulais pas… » tout bas"),
    exLine([run("L'incise se lit "), run("plus bas et plus vite", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "« …, a-t-il murmuré. » : une parenthèse de la voix", { after: 80 }),
    sub("2. Je prépare ma lecture"),
    exLine([run("Je marque / et //, je surligne "), run("soudain", { bold: true, color: C.SALMON, hl: true }), run(", j'encadre les paroles.")],
      "le contraste décor/action fait vivre le récit", { after: 80 }),
    sub("Exercice — prépare puis lis en contrastant :"),
    p("« Ce mardi-là, le marché était bondé et les marchandes criaient leurs prix comme à l'ordinaire. Soudain, une voix a retenti : Au voleur ! »", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 4 : LA DÉLINQUANCE JUVÉNILE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("La délinquance juvénile : ", { bold: true }), run("les formes (vol, bandes, drogue), les causes (pauvreté, ennui, abandon scolaire, conflits familiaux), les remèdes (école, sport, formation, rééducation).", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("La prévention : ", { bold: true }), run("refuser, s'éloigner, prévenir un adulte de confiance ; la drogue promet le plaisir et apporte la dépendance.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le texte narratif et le fait divers :"),
    p("Raconter des faits dans l'ordre du temps, avec des indices temporels (ce mardi-là, soudain, depuis). Dans le récit au passé : l'imparfait pose le décor qui dure, le passé composé fait surgir l'action.", { after: 80 }),
    sub("3. Les pronoms indéfinis :"),
    p("Ils désignent sans préciser : quelqu'un, personne, rien, chacun, aucun (verbe au singulier) ; tous, certains, plusieurs (verbe au pluriel). Personne, rien, aucun s'emploient avec « ne ».", { after: 80 }),
    sub("4. Les pronoms possessifs :"),
    p("Le mien, la tienne, les siens, le nôtre, la vôtre, les leurs… Ils varient selon le possesseur ET la chose possédée. Accent circonflexe sur nôtre et vôtre.", { after: 80 }),
    sub("5. Les verbes de parole et le dialogue :"),
    p("S'écrier, murmurer, demander, avouer, conseiller : chaque verbe peint la voix. Ponctuation : deux-points, guillemets, tirets, incise avec sujet inversé (a-t-il murmuré).", { after: 80 }),
    sub("6. Dire et écrire :"),
    p("Le débat : demander la parole, écouter, « je pense que… parce que… ». Le témoignage : la situation → l'événement → la leçon, au passé, avec une parole rapportée.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces mots (forme, cause ou remède de la délinquance) : 1. le vol 2. l'ennui 3. la formation 4. les conflits familiaux.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Complète avec un pronom indéfini : 1. « … n'excuse le vol. » 2. « … est responsable de ses choix. » 3. « … sont restés au club. » 4. « … a prévenu le gardien. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Remplace par un pronom possessif : 1. mes choix 2. votre quartier 3. ses amis 4. « Ton école a un club ; (notre école) … aussi. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Récris avec un verbe de parole précis et la bonne ponctuation : 1. « Au voleur dit la marchande très fort » 2. « C'est ma faute dit le garçon tout bas »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris la fin d'un témoignage (deux phrases) : la leçon que tu tires d'un bon choix, avec un pronom indéfini.")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. forme — 2. cause — 3. remède — 4. cause. (1 pt chacun)", ["cause"]),
    pAns("Ex.2 : 1. Rien — 2. Chacun — 3. Plusieurs (ou Tous, Certains) — 4. Quelqu'un. (1 pt chacun)", ["Chacun"]),
    pAns("Ex.3 : 1. les miens — 2. le vôtre — 3. les siens — 4. la nôtre. (1 pt chacun)", ["la nôtre"]),
    pAns("Ex.4 : 1. « Au voleur ! », s'écrie la marchande. — 2. « C'est ma faute », murmure (ou avoue) le garçon. (2 pts chacune)", ["s'écrie"]),
    pAns("Ex.5 : exemple : Depuis ce jour, je choisis mes amis avec soin. Personne ne regrette d'avoir dit non au danger. (leçon claire + pronom indéfini : 4 pts)", ["Personne"]),
  ];
}

// ---------- Révision (S47) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s47", "SÉANCE 47 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 4 : LA DÉLINQUANCE JUVÉNILE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite deux formes, deux causes et deux remèdes de la délinquance juvénile."),
    pAns("R.A. : vol et drogue ; ennui et pauvreté ; sport et formation.", ["remèdes"]),
    p("2. Que fait la justice avec un mineur délinquant ? Pourquoi ?"),
    pAns("R.A. : elle le rééduque et le réinsère, car il a moins de dix-huit ans et mérite une seconde chance.", ["rééduque"]),
    p("3. Quels sont les trois gestes de la prévention face à la drogue ?"),
    pAns("R.A. : refuser tout de suite, s'éloigner, prévenir un adulte de confiance.", ["refuser"]),
    p("4. Dans un récit au passé, quel est le rôle de l'imparfait ? du passé composé ?"),
    pAns("R.A. : l'imparfait pose le décor qui dure ; le passé composé fait surgir l'action.", ["décor"]),
    p("5. Cite trois pronoms indéfinis au singulier et deux au pluriel."),
    pAns("R.A. : chacun, personne, rien (quelqu'un, aucun) ; tous, plusieurs (certains).", ["chacun"]),
    p("6. Complète : « Personne … mérite d'être abandonné. »"),
    pAns("R.A. : ne — personne, rien, aucun s'emploient avec « ne ».", ["ne"]),
    p("7. Remplace : « mes choix », « votre équipe », « leurs amis »."),
    pAns("R.A. : les miens, la vôtre, les leurs.", ["les leurs"]),
    p("8. Pourquoi « la nôtre » prend-il un accent circonflexe ?"),
    pAns("R.A. : l'accent distingue le pronom possessif (la nôtre) du déterminant (notre).", ["accent"]),
    p("9. Donne trois verbes de parole avec leur nuance."),
    pAns("R.A. : s'écrier (fort), murmurer (bas), avouer (reconnaître sa faute).", ["murmurer"]),
    p("10. Donne deux formules du débat."),
    pAns("R.A. : « Je pense que… parce que… » ; « Je ne suis pas d'accord, parce que… ».", ["parce que"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« Ce soir-là, des garçons plus âgés traînaient au coin de la rue. L'un d'eux m'a tendu une cigarette suspecte, mais j'ai refusé aussitôt. Chacun est responsable de ses choix : les miens m'ont conduit vers le sport et l'école. »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("traînaient", { bold: true, color: C.SALMON, hl: true }), run(" [imparfait du décor ; accent circonflexe sur le î], "), run("m'a tendu", { bold: true, color: C.SALMON, hl: true }), run(" [passé composé de l'action], "), run("Chacun est", { bold: true, color: C.SALMON, hl: true }), run(" [pronom indéfini : verbe au singulier], "), run("les miens", { bold: true, color: C.SALMON, hl: true }), run(" [pronom possessif : mes choix].")], { after: 60 }),
  ];
}

// ---------- Test (S48) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s48", "SÉANCE 48 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 4 : LA DÉLINQUANCE JUVÉNILE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : dépendance — mineur — prévention — rééducation. 1. Un jeune de moins de dix-huit ans est un …. 2. La drogue conduit à la …. 3. Le juge des enfants choisit la …. 4. Dire non et prévenir un adulte, c'est la ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Souligne les pronoms indéfinis et accorde les verbes : 1. « Chacun (être) responsable. » 2. « Tous (vouloir) un terrain de sport. » 3. « Personne ne (mériter) d'être abandonné. » 4. « Plusieurs (rester) au club. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Remplace par un pronom possessif : 1. « Mon frère choisit bien ses amis ; (ton frère) … choisit mal (ses amis) …. » 2. « Nos choix nous protègent ; (leurs choix) … les ont trahis. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Ponctue ce dialogue et remplace les deux « dit » : « Essaie dit le garçon avec insistance — Non merci dit Naivo d'une voix ferme »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige un court témoignage (cinq à six lignes) : un moment où tu as fait (ou vu) un bon choix. Situation, événement avec une parole rapportée, leçon finale.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : mineur — dépendance — rééducation — prévention. (1 pt chacun)", ["prévention"]),
    pAns("Ex.2 : 1. Chacun est — 2. Tous veulent — 3. Personne ne mérite — 4. Plusieurs sont restés. (1 pt chacun)", ["Chacun est"]),
    pAns("Ex.3 : 1. le tien … les siens — 2. les leurs. (2 pts puis 2 pts)", ["le tien"]),
    pAns("Ex.4 : « Essaie ! », insiste le garçon. — « Non, merci », répond (ou réplique) Naivo d'une voix ferme. (2 pts chacune)", ["insiste"]),
    pAns("Ex.5 : situation (1 pt), événement au passé (1 pt), parole rapportée bien ponctuée (1 pt), leçon finale (1 pt).", ["leçon"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...ficheS39(), pageBreak(), ...lessonS39(), pageBreak(),
    ...ficheS40(), pageBreak(), ...lessonS40(), pageBreak(),
    ...ficheS41(), pageBreak(), ...lessonS41(), pageBreak(),
    ...ficheS42(), pageBreak(), ...lessonS42(), pageBreak(),
    ...ficheS43(), pageBreak(), ...lessonS43(), pageBreak(),
    ...ficheS44(), pageBreak(), ...lessonS44(), pageBreak(),
    ...ficheS45(), pageBreak(), ...lessonS45(), pageBreak(),
    ...ficheS46(), pageBreak(), ...lessonS46(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 4", COLOR, [
      "Je comprends le témoignage d'un jeune.",
      "Je nomme les formes, les causes et les remèdes de la délinquance juvénile.",
      "Je connais les dangers de la drogue et les trois gestes pour dire non.",
      "Je lis un fait divers et je repère le duo imparfait / passé composé.",
      "J'emploie les pronoms indéfinis avec le bon accord.",
      "J'emploie les pronoms possessifs : le mien, la nôtre, les leurs…",
      "J'écris un dialogue avec des verbes de parole précis.",
      "Je débats en écoutant et en argumentant avec « parce que ».",
      "Je rédige un témoignage : situation, événement, leçon.",
    ], "PROCHAINE ÉTAPE → UNITÉ 5 : L'AGRICULTURE ET L'ÉLEVAGE"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
