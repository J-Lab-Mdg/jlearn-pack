// Français T7 — UNITÉ 5 — L'AGRICULTURE ET L'ÉLEVAGE (10 leçons + révision + test) — Séances 49 à 60 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "7D6608"; // olive — l'agriculture et l'élevage
const SHADE = "F5EFD5";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 5 — L'AGRICULTURE ET L'ÉLEVAGE", title, slo,
  values: "amour du travail de la terre, persévérance, fierté des produits du pays", session, materials,
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

// passage de compréhension orale (S49)
function passageFerme() {
  return box("PASSAGE D'ÉCOUTE — reportage « La ferme-école de Mahitsy »", [
    p("Ce matin, notre reportage vous emmène à la ferme-école de Mahitsy, où des jeunes apprennent les métiers de la terre. Dès l'entrée, les odeurs se mélangent : le foin coupé, la terre mouillée, le lait frais."),
    p("Dans la rizière, les plants d'un vert tendre se balancent sous le vent. Plus loin, les zébus ruminent paisiblement, pendant que les poules picorent autour du poulailler. Au potager, les jeunes récoltent des tomates bien rouges et des brèdes fraîches. « Ici, la terre nourrit celui qui la travaille », explique le directeur."),
    p("À Madagascar, l'agriculture et l'élevage font vivre la grande majorité des familles. Le riz reste notre aliment de base : chacun en mange en moyenne plus de cent kilos par an ! La ferme-école forme les paysans de demain : des jeunes fiers de leurs mains et de leur pays.", { after: 40 }),
  ]);
}
// texte de lecture (S51)
function texteRiziere() {
  return box("TEXTE DE LECTURE — description « La rizière de mon grand-père »", [
    pr([run("La rizière de mon grand-père", { bold: true, color: COLOR })], { after: 40 }),
    p("La rizière de mon grand-père s'étend au pied de la colline, juste derrière le village. De loin, elle ressemble à un grand miroir vert posé sur la terre rouge."),
    p("Au premier plan, les jeunes plants paraissent fragiles : ils plient sous la brise, puis se redressent doucement. L'eau fraîche monte jusqu'aux chevilles et la boue, tiède et molle, glisse entre les orteils. Plus loin, la digue étroite semble un fil tendu entre les carrés verts ; deux zébus y avancent lentement, l'air tranquille."),
    p("Le matin, la rizière sent la terre mouillée et l'herbe coupée. On entend le clapotis de l'eau, le chant des petits oiseaux et, parfois, le rire des repiqueuses. À la saison de la moisson, tout devient doré : le vert tendre se change en or, et l'air prend le parfum du riz nouveau."),
    p("Quand ma grand-mère cuit ce riz, le soir, son goût me paraît plus doux que tous les autres. Grand-père sourit et répète : « Cette rizière est notre trésor ; elle semble petite, mais elle nourrit toute la famille. »", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 5 — L'AGRICULTURE ET L'ÉLEVAGE", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("La terre nourrit celui qui la travaille.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_rizieres.png", 440, 0.5581),
    p("", { after: 60 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un reportage sur une ferme-école ;"),
    p("• nommer les cultures, les élevages, les outils et les produits de la terre ;"),
    p("• connaître les richesses agricoles de Madagascar : riz, litchi, vanille, girofle, cacao ;"),
    p("• lire une description qui éveille les cinq sens ;"),
    p("• employer les verbes attributifs : être, sembler, paraître, devenir… ;"),
    p("• enrichir mes phrases avec les adjectifs qualificatifs et les champs lexicaux ;"),
    p("• nuancer avec les adverbes : lentement, très, plus… que… ;"),
    p("• présenter un produit de ma région ;"),
    p("• rédiger une description avec les cinq sens.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte DESCRIPTIF", { bold: true, color: COLOR }),
        run(" — faire voir, entendre, sentir, toucher et goûter avec des mots.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("amour du travail de la terre, persévérance, fierté des produits du pays.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S49 — Compréhension orale ----------
function ficheS49() {
  const meta = META("Compréhension orale : reportage « La ferme-école de Mahitsy »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'un reportage entendu et relève les mots qui éveillent les sens.",
    "1 / 12", "texte du passage, photographies (rizière, zébus, potager), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 4 : quels sont les trois gestes de la prévention ?")],
      [fp("Répondent."),
       fp("R.A. : refuser, s'éloigner, prévenir un adulte de confiance.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Affichez les photographies : une rizière, des zébus, un potager. Demandez : que cultive-t-on et qu'élève-t-on dans notre région ?")],
      [fp("Observent, répondent."),
       fp("R.A. : le riz, le manioc, les brèdes ; les zébus, les poules…")],
      "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un reportage, La ferme-école de Mahitsy. » Consigne : écouter sans écrire ; repérer ce que l'on voit, entend et sent à la ferme.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le reportage lentement, de manière expressive. Questions globales : où sommes-nous ? Qui apprend quoi ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : à la ferme-école de Mahitsy ; des jeunes apprennent les métiers de la terre.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites relever les mots des sens : les odeurs (foin, terre mouillée, lait), les images (vert tendre, tomates bien rouges), les sons (le vent). Puis les informations : qui fait vivre l'agriculture ? Quelle place pour le riz ?")],
      [fp("Relèvent, classent."),
       fp("R.A. : l'agriculture fait vivre la grande majorité des familles ; le riz est l'aliment de base : plus de cent kilos par personne et par an.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites remarquer : le reporter décrit avec les sens pour nous faire visiter la ferme, et il informe avec des faits exacts. Faites expliquer : « La terre nourrit celui qui la travaille. »")],
      [fp("Récapitulent, expliquent."),
       fp("R.A. : celui qui travaille la terre avec courage récolte de quoi vivre.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : redites le reportage en trois phrases : le lieu, ce qu'on y voit et sent, ce qu'on y apprend.")],
      [fp("Reformulent."),
       pAns("R.A. : À Mahitsy, une ferme-école forme les jeunes. On y voit des rizières, des zébus et un potager. L'agriculture fait vivre la plupart des familles malgaches.", ["ferme-école"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Où se passe le reportage ? Qui y apprend ?"),
       fp("2. Cite deux odeurs et deux images entendues."),
       fp("3. Quelle est la place du riz à Madagascar ?"),
       fp("4. Explique la phrase du directeur.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. à la ferme-école de Mahitsy ; des jeunes — 2. le foin, la terre mouillée ; le vert tendre, les tomates rouges — 3. l'aliment de base : plus de cent kilos par personne et par an — 4. le travail de la terre fait vivre.", ["aliment de base"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS49() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("ÉCOUTER UN REPORTAGE QUI DÉCRIT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_ferme.png", 440, 0.5581),
    p("", { after: 60 }),
    pr([run("🎧 Audio de la séance : ", { bold: true, size: 24 }), run("https://drive.google.com/file/d/1f6pm-K8s8Hw7i7GXRNmO1UZF40NTp5_u/view", { color: "1F618D", size: 22 })], { after: 120 }),
    passageFerme(),
    p("", { after: 80 }),
    sub("1. J'écoute avec mes cinq sens"),
    exLine([run("Les "), run("odeurs", { bold: true, color: C.SALMON, hl: true }), run(" : le foin coupé, la terre mouillée, le lait frais.")],
      "je ferme les yeux : je suis à la ferme !"),
    exLine([run("Les "), run("images", { bold: true, color: C.SALMON, hl: true }), run(" : le vert tendre des plants, les tomates bien rouges.")],
      "les couleurs peignent le tableau"),
    exLine([run("Les "), run("informations", { bold: true, color: C.SALMON, hl: true }), run(" : l'agriculture fait vivre la grande majorité des familles.")],
      "un reportage décrit ET informe", { after: 80 }),
    sub("2. Vocabulaire — mes premiers mots de la ferme"),
    mot("une ferme-école", "une ferme où l'on apprend les métiers de la terre"),
    mot("l'aliment de base", "ce que l'on mange tous les jours : chez nous, le riz — plus de cent kilos par personne et par an !"),
    mot("ruminer", "mâcher longtemps, comme le zébu"),
    mot("picorer", "piquer la nourriture çà et là, comme la poule"),
    p("", { after: 40 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Complète : « Ici, la terre nourrit ………. »"),
    p("2. Cite deux odeurs et deux animaux entendus dans le reportage.", { after: 60 }),
  ];
}

// ---------- S50 — Lexique ----------
function ficheS50() {
  const meta = META("Lexique : cultures, élevages, outils et produits",
    "À la fin de la séance, l'apprenant nomme et classe les cultures vivrières, les cultures de rente, les élevages et les outils, et connaît les grandes richesses agricoles du pays.",
    "2 / 12", "étiquettes de mots, photographies, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quel est l'aliment de base à Madagascar ? Combien en mange-t-on par personne et par an ?")],
      [fp("Répondent."),
       fp("R.A. : le riz ; plus de cent kilos.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du marché : chaque apprenant cite un produit de la terre ou de l'élevage de sa région. Notez tout au tableau.")],
      [fp("Citent des produits."),
       fp("R.A. : riz, manioc, brèdes, litchis, poulet, lait, miel…")],
      "Tour de classe", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots de l'agriculture et de l'élevage. Nous allons classer toutes ces richesses. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Quatre colonnes : cultures vivrières (pour se nourrir) — cultures de rente (pour vendre) — élevages — outils. Faites classer les mots du tableau et complétez : riz, manioc, maïs, brèdes / litchi, vanille, girofle, café, cacao / zébu, porc, volaille, abeille / angady, charrue, arrosoir.")],
      [fp("Classent, découvrent « vivrier » et « de rente »."),
       fp("R.A. : le manioc se mange (vivrier) ; la vanille se vend (rente).")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Faites découvrir la carte des richesses : le litchi de la côte est, expédié vers l'Europe au moment de Noël ; la vanille du Nord-Est, parmi les plus réputées du monde ; le girofle et le poivre ; le cacao d'Ambanja, apprécié des grands chocolatiers. Fierté nationale !")],
      [fp("Situent, s'étonnent, notent."),
       fp("R.A. : nos produits voyagent dans le monde entier ; la vanille malgache est célèbre.")],
      "Découverte guidée", "Carte, photographies"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des quatre familles et les produits phares du pays.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « Je donne l'indice, vous écrivez le mot. » On le repique dans l'eau ! La gousse noire et parfumée ! L'animal aux grandes cornes ! La bêche malgache ! Puis une phrase avec « culture de rente ».")],
      [fp("Écrivent sur l'ardoise. Rédigent."),
       pAns("R.A. : le riz — la vanille — le zébu — l'angady ; exemple : Le litchi est une culture de rente de la côte est.", ["culture de rente"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe : le manioc, la vanille, le zébu, l'angady."),
       fp("2. Quelle est la différence entre culture vivrière et culture de rente ?"),
       fp("3. Cite trois produits malgaches connus dans le monde."),
       fp("4. Écris une phrase avec « élevage ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. vivrière — rente — élevage — outil — 2. l'une se mange, l'autre se vend — 3. la vanille, le litchi, le girofle (ou le cacao) — 4. exemple : L'élevage de zébus fait la fierté de notre région.", ["vivrière"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS50() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 50", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("CULTURES, ÉLEVAGES, OUTILS ET PRODUITS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_marche.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. Vocabulaire — les quatre familles"),
    mot("les cultures vivrières", "pour se nourrir : le riz, le manioc, le maïs, les brèdes"),
    mot("les cultures de rente", "pour vendre : le litchi, la vanille, le girofle, le café, le cacao"),
    mot("les élevages", "le zébu, le porc, la volaille, l'abeille, la pisciculture"),
    mot("les outils", "l'angady (la bêche malgache), la charrue, la herse, l'arrosoir"),
    p("", { after: 60 }),
    sub("2. Les richesses qui font notre fierté"),
    exTitre(),
    exLine([run("Le "), run("litchi", { bold: true, color: C.SALMON, hl: true }), run(" de la côte est part vers l'Europe au moment de Noël.")],
      "Madagascar est l'un des tout premiers fournisseurs du monde"),
    exLine([run("La "), run("vanille", { bold: true, color: C.SALMON, hl: true }), run(" du Nord-Est parfume les desserts du monde entier.")],
      "parmi les plus réputées de la planète"),
    exLine([run("Le "), run("cacao", { bold: true, color: C.SALMON, hl: true }), run(" d'Ambanja est recherché par les grands chocolatiers.")],
      "un cacao fin, rare et délicat"),
    exLine([run("Le "), run("girofle", { bold: true, color: C.SALMON, hl: true }), run(" et le "), run("poivre", { bold: true, color: C.SALMON, hl: true }), run(" voyagent depuis nos côtes.")],
      "les épices, trésors de la Grande Île", { after: 80 }),
    sub("3. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« cultiver un champ, élever des animaux »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« élever un champ »   "), run("[on cultive les plantes ; on élève les animaux]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — je classe :"),
    p("Mets chaque mot dans sa famille : la vanille — le manioc — l'angady — la volaille — le cacao — la charrue.", { after: 60 }),
  ];
}

// ---------- S51 — Compréhension écrite ----------
function ficheS51() {
  const meta = META("Compréhension écrite : « La rizière de mon grand-père » — décrire avec les cinq sens",
    "À la fin de la séance, l'apprenant lit un texte descriptif, repère son organisation spatiale et relève les notations des cinq sens.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez deux cultures de rente et deux cultures vivrières.")],
      [fp("Répondent."),
       fp("R.A. : vanille, litchi ; riz, manioc.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : fermez les yeux ; que voit-on, qu'entend-on, que sent-on dans une rizière ?")],
      [fp("Évoquent leurs souvenirs."),
       fp("R.A. : le vert, l'eau, la boue, les oiseaux…")],
      "Évocation", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : une description, La rizière de mon grand-père. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : que décrit le texte ? Qui décrit ? À quels moments ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : la rizière du grand-père ; un petit-fils ; le matin et à la moisson.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites relever : l'organisation spatiale (de loin, au premier plan, plus loin) ; les cinq sens (vue : miroir vert ; toucher : boue tiède ; ouïe : clapotis ; odorat : terre mouillée ; goût : riz plus doux) ; la comparaison (« comme un grand miroir vert »).")],
      [fp("Relèvent, classent dans un tableau des sens."),
       fp("R.A. : chaque sens a ses mots ; les indicateurs spatiaux organisent la description.")],
      "Questionnement progressif", "Tableau des cinq sens"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : le texte descriptif fait voir, entendre, sentir, toucher, goûter ; il s'organise dans l'espace (de loin → de près) et peut suivre le temps (le matin → la moisson).")],
      [fp("Formulent la synthèse.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez une notation pour chaque sens.")],
      [fp("Relèvent, présentent."),
       pAns("R.A. : vue : miroir vert ; ouïe : clapotis ; odorat : terre mouillée ; toucher : boue tiède ; goût : riz plus doux.", ["clapotis"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Où se trouve la rizière ?"),
       fp("2. Relève les trois indicateurs d'espace du début."),
       fp("3. Donne une notation de la vue, une de l'ouïe, une de l'odorat."),
       fp("4. Recopie la comparaison du premier paragraphe.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. au pied de la colline, derrière le village — 2. de loin, au premier plan, plus loin — 3. miroir vert ; clapotis ; terre mouillée — 4. « elle ressemble à un grand miroir vert ».", ["miroir"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(51, TOTAL, meta, rows, "s51", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS51() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 51", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("DÉCRIRE AVEC LES CINQ SENS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_vanille.png", 440, 0.5581),
    p("", { after: 60 }),
    texteRiziere(),
    p("", { after: 80 }),
    sub("1. Le texte descriptif : un tableau fait de mots"),
    exLine([run("Il s'organise dans "), run("l'espace", { bold: true, color: C.SALMON, hl: true }), run(" : de loin → au premier plan → plus loin.")],
      "l'œil du lecteur se promène comme une caméra"),
    exLine([run("Il peut suivre "), run("le temps", { bold: true, color: C.SALMON, hl: true }), run(" : le matin → à la moisson.")],
      "le même lieu change de couleurs", { after: 80 }),
    sub("2. Les cinq sens, mes cinq pinceaux"),
    exLine([run("La vue", { bold: true, color: C.SALMON, hl: true }), run(" : un grand miroir vert, le vert qui se change en or.")], null),
    exLine([run("L'ouïe", { bold: true, color: C.SALMON, hl: true }), run(" : le clapotis de l'eau, le rire des repiqueuses.")], null),
    exLine([run("L'odorat", { bold: true, color: C.SALMON, hl: true }), run(" : la terre mouillée, le parfum du riz nouveau.")], null),
    exLine([run("Le toucher", { bold: true, color: C.SALMON, hl: true }), run(" : l'eau fraîche, la boue tiède et molle.")], null),
    exLine([run("Le goût", { bold: true, color: C.SALMON, hl: true }), run(" : un riz plus doux que tous les autres.")],
      "cinq sens = un lecteur qui est VRAIMENT dans la rizière", { after: 80 }),
    sub("3. La comparaison embellit"),
    exLine([run("La rizière ressemble à "), run("un grand miroir vert", { bold: true, color: C.SALMON, hl: true }), run(" ; la digue semble "), run("un fil tendu", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "comparer, c'est créer une image dans la tête du lecteur", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Souligne les indicateurs d'espace du début. — 2. Relève une notation pour chaque sens. — 3. Encadre les deux comparaisons.", { after: 60 }),
  ];
}

// ---------- S52 — Grammaire : les verbes attributifs ----------
function ficheS52() {
  const meta = META("Grammaire : les verbes attributifs — être, sembler, paraître, devenir…",
    "À la fin de la séance, l'apprenant reconnaît les verbes attributifs, identifie l'attribut du sujet et l'accorde correctement.",
    "4 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez les cinq sens et une notation du texte pour chacun.")],
      [fp("Répondent."),
       fp("R.A. : vue (miroir vert), ouïe (clapotis), odorat (terre mouillée), toucher (boue tiède), goût (riz doux).")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Les plants paraissent fragiles. » / « Les jeunes récoltent des tomates. » Demandez : dans quelle phrase le verbe dit-il COMMENT EST le sujet, et non ce qu'il FAIT ?")],
      [fp("Comparent."),
       fp("R.A. : « paraissent fragiles » décrit les plants ; « récoltent » est une action.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les verbes attributifs, les verbes qui décrivent. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : La rizière est verte. — Les plants paraissent fragiles. — La digue semble un fil. — Tout devient doré. — Les zébus restent calmes. — Elle a l'air tranquille. Faites souligner les verbes et encadrer ce qui décrit le sujet.")],
      [fp("Soulignent, encadrent."),
       fp("R.A. : être, paraître, sembler, devenir, rester, avoir l'air + un mot qui décrit le sujet.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Nommez l'attribut du sujet : il décrit le sujet à travers le verbe. Règle d'or : l'attribut s'accorde avec le sujet. Nuances : être (état), sembler/paraître/avoir l'air (impression), devenir (changement), rester/demeurer (continuité).")],
      [fp("Notent les nuances et la règle d'accord."),
       fp("R.A. : La rizière est verte ; les rizières sont vertes ; tout devient doré.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : la liste des verbes attributifs, la définition de l'attribut, la règle d'accord.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : accordez l'attribut. « Les tomates semblent (mûr). » — « La boue reste (tiède). » — « Les zébus ont l'air (tranquille). »")],
      [fp("Accordent, justifient."),
       pAns("R.A. : mûres — tiède — tranquilles.", ["mûres"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Souligne les verbes attributifs : « Le lait est frais ; les jeunes travaillent ; la récolte paraît belle. »"),
       fp("2. Accorde : « Les gousses de vanille deviennent (noir et parfumé). »"),
       fp("3. Quelle nuance apporte « devenir » par rapport à « être » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. est, paraît — 2. noires et parfumées — 3. devenir marque le changement d'état.", ["noires"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS52() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VERBES ATTRIBUTIFS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Des verbes qui décrivent, pas des verbes d'action"),
    exTitre(),
    exLine([run("Les jeunes "), run("récoltent", { bold: true }), run(" des tomates.")],
      "récolter = une action : le sujet FAIT quelque chose"),
    exLine([run("Les plants "), run("paraissent fragiles", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "paraître ne fait rien : il décrit COMMENT EST le sujet", { after: 80 }),
    sub("2. La famille des verbes attributifs"),
    exLine([run("être", { bold: true, color: C.SALMON, hl: true }), run(" : La rizière est verte.")], "l'état"),
    exLine([run("sembler, paraître, avoir l'air", { bold: true, color: C.SALMON, hl: true }), run(" : La digue semble un fil.")], "l'impression"),
    exLine([run("devenir", { bold: true, color: C.SALMON, hl: true }), run(" : Tout devient doré.")], "le changement"),
    exLine([run("rester, demeurer", { bold: true, color: C.SALMON, hl: true }), run(" : Les zébus restent calmes.")], "la continuité", { after: 80 }),
    sub("3. L'attribut s'accorde avec le sujet"),
    exTitre(),
    exLine([run("La tomate semble mûr"), run("e", { bold: true, color: C.SALMON, hl: true }), run(".  →  Les tomates semblent mûr"), run("es", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "l'attribut suit le sujet en genre et en nombre, comme avec être", { after: 80 }),
    sub("Exercice — accorde l'attribut :"),
    p("1. Les gousses de vanille deviennent (noir). — 2. La boue reste (tiède). — 3. Les zébus ont l'air (tranquille). — 4. La récolte paraît (beau).", { after: 60 }),
  ];
}

// ---------- S53 — Grammaire : adjectifs et champs lexicaux ----------
function ficheS53() {
  const meta = META("Grammaire : les adjectifs qualificatifs et les champs lexicaux",
    "À la fin de la séance, l'apprenant enrichit une description avec des adjectifs bien accordés et construit un champ lexical.",
    "5 / 12", "corpus, textes des séances 49 et 51, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez quatre verbes attributifs. Avec quoi s'accorde l'attribut ?")],
      [fp("Répondent."),
       fp("R.A. : être, sembler, devenir, rester ; avec le sujet.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « une rizière » puis « une grande rizière verte et paisible ». Demandez : qu'est-ce qui a changé ? Que voit-on mieux ?")],
      [fp("Comparent."),
       fp("R.A. : les adjectifs font voir la taille, la couleur, l'atmosphère.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les adjectifs qualificatifs et les champs lexicaux — les couleurs de la description. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites relever dans le texte S51 des adjectifs et leur place : épithète à côté du nom (les jeunes plants, l'eau fraîche) ; attribut après un verbe attributif (paraissent fragiles). Rappel des accords : tiède et molle ; bien rouges.")],
      [fp("Relèvent, distinguent épithète et attribut."),
       fp("R.A. : l'adjectif s'accorde toujours avec le nom ou le sujet qu'il qualifie.")],
      "Relevé guidé", "Texte S51"),
    stepRow(["4. Analyse"],
      [fp("Introduisez le champ lexical : la famille de mots d'un même thème. Faites construire le champ lexical de la rizière (eau, boue, plants, repiquage, digue, moisson…) puis celui de l'élevage (zébu, troupeau, étable, ruminer, traire…).")],
      [fp("Construisent deux champs lexicaux."),
       fp("R.A. : un texte descriptif réussi puise ses mots dans le champ lexical de son thème.")],
      "Construction collective", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : épithète / attribut, règle d'accord, définition du champ lexical avec deux exemples.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : enrichissez avec deux adjectifs accordés. « des tomates » — « une digue » — « des gousses ». Puis trouvez trois mots du champ lexical du marché.")],
      [fp("Enrichissent, cherchent."),
       pAns("R.A. : des tomates rondes et bien rouges ; une digue étroite et glissante ; des gousses noires et parfumées ; marché : étal, marchande, panier.", ["parfumées"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Accorde : « des brèdes (frais) », « une terre (rouge et fertile) »."),
       fp("2. Souligne l'épithète et encadre l'attribut : « La jeune repiqueuse semble fatiguée. »"),
       fp("3. Donne quatre mots du champ lexical de la moisson.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. fraîches ; rouge et fertile — 2. épithète : jeune ; attribut : fatiguée — 3. faucille, épi, gerbe, battage (ou doré, grenier…).", ["fraîches"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS53() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES ADJECTIFS ET LES CHAMPS LEXICAUX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_litchis.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. L'adjectif donne des couleurs au nom"),
    exTitre(),
    exLine([run("une rizière  →  une "), run("grande", { bold: true, color: C.SALMON, hl: true }), run(" rizière "), run("verte et paisible", { bold: true, color: C.SALMON, hl: true })],
      "trois adjectifs : on voit la taille, la couleur, l'atmosphère"),
    exLine([run("Épithète", { bold: true, color: C.SALMON, hl: true }), run(" : collé au nom — l'eau "), run("fraîche", { bold: true }), run(", les "), run("jeunes", { bold: true }), run(" plants.")], null),
    exLine([run("Attribut", { bold: true, color: C.SALMON, hl: true }), run(" : après un verbe attributif — les plants paraissent "), run("fragiles", { bold: true }), run(".")],
      "dans les deux cas, l'adjectif S'ACCORDE : la boue tiède et molle", { after: 80 }),
    sub("2. Le champ lexical : la famille de mots d'un thème"),
    exTitre(),
    exLine([run("La rizière : ", { bold: true }), run("l'eau, la boue, les plants, le repiquage, la digue, la moisson", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "tous ces mots parlent du même monde"),
    exLine([run("L'élevage : ", { bold: true }), run("le zébu, le troupeau, l'étable, ruminer, traire", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "pour décrire un thème, je puise dans son champ lexical", { after: 80 }),
    sub("Exercice — enrichis et accorde :"),
    p("1. des tomates (rond, rouge) → ……… — 2. une terre (rouge, fertile) → ……… — 3. des brèdes (frais) → ……… — 4. Donne quatre mots du champ lexical du marché.", { after: 60 }),
  ];
}

// ---------- S54 — Grammaire : les adverbes ----------
function ficheS54() {
  const meta = META("Grammaire : les adverbes de manière, d'intensité et de comparaison",
    "À la fin de la séance, l'apprenant forme les adverbes en -ment, nuance avec les adverbes d'intensité et construit des comparaisons.",
    "6 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : accordez : « les gousses (noir) », « la récolte paraît (beau) ».")],
      [fp("Répondent."),
       fp("R.A. : noires ; belle.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Les zébus avancent. » / « Les zébus avancent lentement. » Demandez : qu'apporte le mot ajouté ? Peut-il changer de forme ?")],
      [fp("Comparent, testent."),
       fp("R.A. : il dit COMMENT ils avancent ; il ne change jamais : il est invariable.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les adverbes — manière, intensité, comparaison. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : avancer lentement, plier doucement, travailler courageusement (manière) ; très parfumé, trop mûr, assez grand (intensité) ; plus doux que, moins cher que, aussi vert que (comparaison). Faites classer en trois familles.")],
      [fp("Classent les adverbes."),
       fp("R.A. : manière (comment ?), intensité (à quel point ?), comparaison (par rapport à quoi ?).")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("La fabrique des adverbes en -ment : adjectif au féminin + -ment (lente → lentement, douce → doucement, courageuse → courageusement). Attention : vrai → vraiment. Et la règle d'or : l'adverbe est invariable.")],
      [fp("Fabriquent des adverbes, notent."),
       fp("R.A. : fraîche → fraîchement ; fière → fièrement ; elles avancent lentement (invariable !).")],
      "Fabrique des adverbes", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les trois familles, la fabrique du -ment, la règle d'invariabilité, le trio plus/moins/aussi… que.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : fabriquez l'adverbe (doux, courageux, fier) ; puis comparez : « la vanille / le sucre (parfumé) ».")],
      [fp("Fabriquent, comparent."),
       pAns("R.A. : doucement, courageusement, fièrement ; La vanille est plus parfumée que le sucre.", ["doucement"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Fabrique l'adverbe : lent, joyeux, vrai."),
       fp("2. Complète avec plus/moins/aussi… que : « Le litchi est … sucré … le citron. »"),
       fp("3. Pourquoi écrit-on « elles travaillent courageusement » sans accord ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. lentement, joyeusement, vraiment — 2. plus sucré que — 3. l'adverbe est invariable.", ["invariable"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS54() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES ADVERBES : MANIÈRE, INTENSITÉ, COMPARAISON", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    imgFloat("u5_epices.png", 170, 0.5581),
    sub("1. Trois familles d'adverbes"),
    exTitre(),
    exLine([run("Les zébus avancent "), run("lentement", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "la manière : comment ?"),
    exLine([run("Le cacao d'Ambanja est "), run("très", { bold: true, color: C.SALMON, hl: true }), run(" recherché.")],
      "l'intensité : à quel point ? (très, trop, assez, peu)"),
    exLine([run("Le riz nouveau semble "), run("plus", { bold: true, color: C.SALMON, hl: true }), run(" doux "), run("que", { bold: true, color: C.SALMON, hl: true }), run(" les autres.")],
      "la comparaison : plus… que, moins… que, aussi… que", { after: 80 }),
    sub("2. La fabrique des adverbes en -ment"),
    exLine([run("lente", { bold: true }), run(" → "), run("lentement", { bold: true, color: C.SALMON, hl: true }), run("   /   douce → "), run("doucement", { bold: true, color: C.SALMON, hl: true }), run("   /   fière → "), run("fièrement", { bold: true, color: C.SALMON, hl: true })],
      "adjectif au FÉMININ + -ment"),
    exLine([run("vrai → "), run("vraiment", { bold: true, color: C.SALMON, hl: true })],
      "quand l'adjectif finit par une voyelle, pas de féminin", { after: 80 }),
    sub("3. La règle d'or : l'adverbe est invariable"),
    exTitre(),
    exLine([run("Elle travaille courageusement.  →  Elles travaillent "), run("courageusement", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "pas de -s, pas de -es : l'adverbe ne s'accorde jamais", { after: 80 }),
    sub("Exercice — fabrique et compare :"),
    p("1. Fabrique l'adverbe : doux → ……… ; joyeux → ……… ; vrai → ……… — 2. Compare : « Le litchi est ……… sucré ……… le citron. » — 3. Complète : « Les repiqueuses chantent (joyeux) ………. »", { after: 60 }),
  ];
}

// ---------- S55 — Production orale ----------
function ficheS55() {
  const meta = META("Production orale : présenter un produit de sa région",
    "À la fin de la séance, l'apprenant présente un produit de sa région en le décrivant avec les sens, des adjectifs précis et une comparaison.",
    "7 / 12", "plan au tableau, produits ou photographies");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : fabriquez l'adverbe de « fier » ; comparez « la vanille / le sucre ».")],
      [fp("Répondent."),
       fp("R.A. : fièrement ; la vanille est plus parfumée que le sucre.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Présentez vous-même un produit (modèle du maître) : le miel de la région, décrit avec trois sens et une comparaison. Faites relever ce qui a plu.")],
      [fp("Écoutent, relèvent."),
       fp("R.A. : les sens, la comparaison, la fierté dans la voix.")],
      "Modélisation", "Produit ou photo"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : présenter un produit de sa région en une minute, comme au marché ou à la foire agricole. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Plan au tableau : 1. je nomme le produit et sa région ; 2. je le décris avec trois sens au moins (couleur, odeur, goût…) ; 3. je compare et je conclus avec fierté. Rappel : adjectifs accordés, adverbes pour nuancer.")],
      [fp("Notent le plan.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Chacun choisit son produit (litchi, miel, fromage, café, légumes…) et prépare ses mots clés : deux adjectifs, un adverbe, une comparaison.")],
      [fp("Préparent leurs mots clés.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels. Grille d'écoute : les trois sens ? les adjectifs accordés ? la comparaison ?")],
      [fp("Présentent, évaluent."),
       pAns("R.A. : Voici le miel de ma région ! Il est doré comme le soleil, son parfum est très délicat et son goût reste longtemps en bouche. Il est plus doux que le sucre. Goûtez-le fièrement !", ["plus doux que"], { size: SZ.FICHE })],
      "Passages individuels", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : enrichissez les présentations trop pauvres en adjectifs ; faites ajouter une comparaison à ceux qui l'ont oubliée.")],
      [fp("Améliorent leur présentation.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. produit et région nommés — 2. trois sens au moins — 3. adjectifs accordés et une comparaison — 4. voix fière et vivante.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55", "PRODUCTION ORALE", COLOR);
}
function lessonS55() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 55", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("PRÉSENTER UN PRODUIT DE MA RÉGION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_presentation.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. Mon plan de marchand fier (une minute)"),
    exLine([run("Je nomme", { bold: true, color: C.SALMON, hl: true }), run(" le produit et sa région.")], "« Voici le miel de ma région ! »"),
    exLine([run("Je décris avec trois sens", { bold: true, color: C.SALMON, hl: true }), run(" au moins.")], "la couleur, le parfum, le goût"),
    exLine([run("Je compare et je conclus", { bold: true, color: C.SALMON, hl: true }), run(" avec fierté.")], "« Il est plus doux que le sucre ! »", { after: 80 }),
    sub("2. Mes outils de la description orale"),
    exLine([run("Deux "), run("adjectifs accordés", { bold: true, color: C.SALMON, hl: true }), run(" : doré, délicat…")], null),
    exLine([run("Un "), run("adverbe", { bold: true, color: C.SALMON, hl: true }), run(" : très parfumé, vraiment sucré…")], null),
    exLine([run("Une "), run("comparaison", { bold: true, color: C.SALMON, hl: true }), run(" : doré comme le soleil.")],
      "la comparaison fait voir et donne envie", { after: 80 }),
    sub("3. Un modèle complet"),
    pr([run("« Voici le miel de ma région ! Il est doré comme le soleil. Son parfum est très délicat et son goût reste longtemps en bouche. Il est plus doux que le sucre. Goûtez-le : vous ne l'oublierez pas ! »", { italic: true })], { after: 80 }),
    sub("Exercice — à toi de présenter :"),
    p("Complète pour un produit de chez toi : « Voici ……… ! Il est ……… comme ………. Son ……… est très ………. Il est plus ……… que ………. »", { after: 60 }),
  ];
}

// ---------- S56 — Production écrite (1) ----------
function ficheS56() {
  const meta = META("Production écrite (1) : décrire avec les cinq sens — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit un lieu de la campagne, remplit sa carte des cinq sens et construit le plan de sa description.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : comment s'organise la description de la rizière ? Quels sont les cinq sens ?")],
      [fp("Répondent."),
       fp("R.A. : dans l'espace (de loin → de près) et dans le temps ; vue, ouïe, odorat, toucher, goût.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : quel lieu de la campagne connaissez-vous bien (rizière, marché, étable, potager, verger…) ? Listez au tableau.")],
      [fp("Proposent."),
       fp("R.A. : la rizière de ma tante, le marché du vendredi, le parc à zébus…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : décrire un lieu avec les cinq sens. Aujourd'hui : les idées et le plan. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Construisez l'exemple collectif : le marché du village. Carte des cinq sens au tableau : vue (pyramides de tomates), ouïe (les marchandes appellent), odorat (épices, poisson séché), toucher (paniers rugueux), goût (banane offerte).")],
      [fp("Participent à la carte collective.")],
      "Exemple collectif", "Tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit SON lieu, remplit sa carte des cinq sens (au moins un mot par sens), puis écrit son plan : vue d'ensemble (de loin) → détails (de près) → impression finale.")],
      [fp("Remplissent leur carte, écrivent le plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques cartes sont lues. La classe vérifie : les cinq sens sont-ils là ? Les mots appartiennent-ils au champ lexical du lieu ?")],
      [fp("Lisent, vérifient.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun prépare sa comparaison : « … comme … ». Quelques comparaisons sont partagées.")],
      [fp("Créent leur comparaison."),
       pAns("R.A. : Les pyramides de tomates brillent comme des braises.", ["comme"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification : 1. un lieu précis — 2. la carte des cinq sens complète — 3. le plan en trois temps — 4. une comparaison prête.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(56, TOTAL, meta, rows, "s56", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS56() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 56", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MA DESCRIPTION (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Avant d'écrire : trois gestes"),
    exLine([run("Je choisis un lieu que je connais bien", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "une rizière, le marché, l'étable, le verger"),
    exLine([run("Je remplis ma carte des cinq sens", { bold: true, color: C.SALMON, hl: true }), run(" : au moins un mot par sens.")],
      "vue, ouïe, odorat, toucher, goût"),
    exLine([run("J'écris mon plan en trois temps", { bold: true, color: C.SALMON, hl: true }), run(" : de loin → de près → mon impression.")],
      "comme une caméra qui s'approche", { after: 80 }),
    sub("2. Un exemple de carte (le marché du village)"),
    exLine([run("Vue : ", { bold: true }), run("des pyramides de tomates bien rouges.")], null),
    exLine([run("Ouïe : ", { bold: true }), run("les marchandes appellent joyeusement les clients.")], null),
    exLine([run("Odorat : ", { bold: true }), run("les épices et le poisson séché.")], null),
    exLine([run("Toucher : ", { bold: true }), run("les paniers rugueux, les mangues lisses.")], null),
    exLine([run("Goût : ", { bold: true }), run("la banane offerte par la marchande.")],
      "et ma comparaison : les tomates brillent comme des braises", { after: 80 }),
    sub("Exercice — ta carte et ton plan :"),
    p("Choisis ton lieu. Remplis ta carte des cinq sens (un mot par sens au moins), puis écris ton plan : de loin → de près → impression finale.", { after: 60 }),
  ];
}

// ---------- S57 — Production écrite (2) ----------
function ficheS57() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige sa description en huit à dix lignes, avec verbes attributifs, adjectifs accordés, adverbes et comparaison, puis la relit avec la grille.",
    "9 / 12", "plans de la séance 56, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre carte. Quels outils de la description allons-nous employer ?")],
      [fp("Relisent."),
       fp("R.A. : les verbes attributifs, les adjectifs accordés, les adverbes, la comparaison.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « le marché cest grand il y a des tomate ». Demandez : corrigez, puis enrichissez avec un sens et un adjectif.")],
      [fp("Corrigent, enrichissent."),
       fp("R.A. : Le marché semble immense : des tomates bien rouges brillent sur les étals.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons la description complète, puis nous la relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; le plan en trois temps ; les cinq sens ; au moins deux verbes attributifs, quatre adjectifs accordés, deux adverbes, une comparaison. Le présent convient bien à la description.")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle à partir de la carte. Circulez : chassez les répétitions de « il y a » ; proposez sembler, paraître, devenir.")],
      [fp("Rédigent leur description.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : les trois temps du plan ? les cinq sens ? les accords des adjectifs ? les adverbes invariables ? la comparaison ?")],
      [fp("Relisent, cochent, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun souligne la plus belle image du voisin et propose une amélioration.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : plus belle image : « un grand miroir vert » ; amélioration : ajouter le goût, oublié.", ["image"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : plan (2) — cinq sens (3) — accords (2) — comparaison (1) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(57, TOTAL, meta, rows, "s57", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS57() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 57", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MA DESCRIPTION (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("Je suis mon plan : "), run("de loin → de près → mon impression", { bold: true, color: C.SALMON, hl: true }), run(".")], null),
    exLine([run("Je varie les verbes : "), run("sembler, paraître, devenir, rester", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "la chasse au « il y a » est ouverte !"),
    exLine([run("Je place ma "), run("comparaison", { bold: true, color: C.SALMON, hl: true }), run(" et mes "), run("adverbes", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "brille comme…, lentement, très parfumé", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes cinq sens", { bold: true, color: C.SALMON, hl: true }), run(" sont tous présents.")], "le goût est souvent l'oublié : vérifie !"),
    exLine([run("Mes adjectifs", { bold: true, color: C.SALMON, hl: true }), run(" sont accordés, mes "), run("adverbes", { bold: true, color: C.SALMON, hl: true }), run(" invariables.")], null),
    exLine([run("Mon impression finale", { bold: true, color: C.SALMON, hl: true }), run(" ferme la description.")], null, { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("le marché cest grand il y a des tomate  →  Le marché "), run("semble immense", { bold: true, color: C.SALMON, hl: true }), run(" : des tomates "), run("bien rouges", { bold: true, color: C.SALMON, hl: true }), run(" brillent sur les étals.")],
      "je corrige ET j'enrichis : verbe attributif, adjectifs accordés, image", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« la riziere cest joli il y a de l'eau » → ………", { after: 60 }),
  ];
}

// ---------- S58 — Lecture-fluidité ----------
function ficheS58() {
  const meta = META("Lecture-fluidité : lire un texte descriptif",
    "À la fin de la séance, l'apprenant lit une description à haute voix, lentement, en mettant en valeur les images et les mots des sens.",
    "10 / 12", "texte de la séance 51, crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : comment lit-on le décor dans un récit ? Et une description ?")],
      [fp("Répondent."),
       fp("R.A. : lentement, en laissant le temps de voir.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez le deuxième paragraphe de la rizière de deux façons : pressée, puis lente et imagée. Demandez : quelle lecture fait « voir » la rizière ?")],
      [fp("Comparent."),
       fp("R.A. : la lecture lente : chaque image a le temps de naître.")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire une description comme un peintre qui montre son tableau. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites préparer le texte : marquer / et // ; surligner les mots des sens et les comparaisons, à mettre en valeur par un très léger ralenti.")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Entraînement en binômes : chacun lit un paragraphe ; l'autre ferme les yeux et dit ce qu'il a « vu ».")],
      [fp("S'entraînent, se racontent les images.")],
      "Binômes", "----"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels. La classe écoute les yeux fermés : quelles images sont nées ? Quels mots les ont fait naître ?")],
      [fp("Lisent, écoutent, échangent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : faites ralentir les lecteurs pressés ; travaillez la mise en valeur des comparaisons.")],
      [fp("Reprennent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. lecture lente et posée — 2. pauses respectées — 3. mots des sens mis en valeur — 4. les auditeurs ont « vu » le lieu.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS58() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 58", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN TEXTE DESCRIPTIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je lis comme un peintre qui montre son tableau"),
    exLine([run("Je lis "), run("lentement", { bold: true, color: C.SALMON, hl: true }), run(" : chaque image doit avoir le temps de naître.")],
      "une description pressée ne fait rien voir"),
    exLine([run("Je mets en valeur les "), run("mots des sens", { bold: true, color: C.SALMON, hl: true }), run(" : vert tendre, clapotis, terre mouillée.")],
      "un très léger ralenti suffit"),
    exLine([run("Je soigne les "), run("comparaisons", { bold: true, color: C.SALMON, hl: true }), run(" : « comme un grand miroir vert ».")],
      "c'est le moment où l'auditeur voit le mieux", { after: 80 }),
    sub("2. Le test des yeux fermés"),
    exLine([run("Mon voisin écoute "), run("les yeux fermés", { bold: true, color: C.SALMON, hl: true }), run(", puis raconte ce qu'il a vu.")],
      "s'il a vu la rizière, ma lecture est réussie !", { after: 80 }),
    sub("Exercice — prépare puis lis lentement :"),
    p("« Le matin, la rizière sent la terre mouillée et l'herbe coupée. On entend le clapotis de l'eau, le chant des petits oiseaux et, parfois, le rire des repiqueuses. »", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 5 : L'AGRICULTURE ET L'ÉLEVAGE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les quatre familles : ", { bold: true }), run("cultures vivrières (riz, manioc), cultures de rente (litchi, vanille, girofle, cacao), élevages (zébu, volaille), outils (angady, charrue).", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Nos fiertés : ", { bold: true }), run("le riz aliment de base (plus de cent kilos par personne et par an), le litchi de la côte est, la vanille du Nord-Est, le cacao d'Ambanja.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le texte descriptif :"),
    p("Faire voir, entendre, sentir, toucher, goûter. Organisation : dans l'espace (de loin → de près) et dans le temps. La comparaison crée l'image : « comme un grand miroir vert ».", { after: 80 }),
    sub("3. Les verbes attributifs :"),
    p("Être, sembler, paraître, avoir l'air, devenir, rester, demeurer : ils décrivent le sujet au lieu de dire une action. L'attribut s'accorde avec le sujet : les tomates semblent mûres.", { after: 80 }),
    sub("4. Les adjectifs et les champs lexicaux :"),
    p("L'adjectif (épithète ou attribut) s'accorde toujours. Le champ lexical est la famille de mots d'un thème : pour décrire la rizière, je puise dans ses mots (eau, boue, repiquage, digue, moisson).", { after: 80 }),
    sub("5. Les adverbes :"),
    p("Manière (lentement : adjectif au féminin + -ment), intensité (très, trop, assez), comparaison (plus… que, moins… que, aussi… que). L'adverbe est invariable.", { after: 80 }),
    sub("6. Dire et écrire :"),
    p("Présenter un produit : nommer → décrire avec trois sens → comparer et conclure avec fierté. Rédiger une description : carte des cinq sens, plan en trois temps, verbes attributifs, comparaison.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces mots (culture vivrière, culture de rente, élevage, outil) : 1. la vanille 2. le manioc 3. l'angady 4. la volaille.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Souligne le verbe attributif et accorde l'attribut : 1. « Les gousses deviennent (noir). » 2. « La boue reste (tiède). » 3. « Les zébus ont l'air (calme). » 4. « La récolte paraît (beau). »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Donne quatre mots du champ lexical de la rizière, puis enrichis avec deux adjectifs accordés : « des tomates ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Fabrique l'adverbe (doux, courageux), puis compare : « le litchi / le citron (sucré) » ; « la vanille / le sucre (parfumé) ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Décris le marché de ton village en trois phrases : une pour la vue, une pour l'odorat, une pour l'ouïe — avec une comparaison.")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. rente — 2. vivrière — 3. outil — 4. élevage. (1 pt chacun)", ["rente"]),
    pAns("Ex.2 : 1. deviennent noires — 2. reste tiède — 3. ont l'air calmes — 4. paraît belle. (1 pt chacun)", ["noires"]),
    pAns("Ex.3 : eau, boue, repiquage, digue (ou plants, moisson) ; des tomates rondes et bien rouges. (2 pts + 2 pts)", ["repiquage"]),
    pAns("Ex.4 : doucement, courageusement ; le litchi est plus sucré que le citron ; la vanille est plus parfumée que le sucre. (1 pt chacun)", ["doucement"]),
    pAns("Ex.5 : exemple : De loin, les étals brillent comme des braises. Les épices parfument toute la place. Les marchandes appellent joyeusement les clients. (3 sens + comparaison : 4 pts)", ["comme"]),
  ];
}

// ---------- Révision (S59) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s59", "SÉANCE 59 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 5 : L'AGRICULTURE ET L'ÉLEVAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_cacao.png", 440, 0.5581),
    p("", { after: 60 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Quelle est la différence entre une culture vivrière et une culture de rente ? Donne deux exemples de chaque."),
    pAns("R.A. : la vivrière se mange (riz, manioc) ; la rente se vend (vanille, litchi).", ["rente"]),
    p("2. Cite trois produits malgaches réputés dans le monde et leur région."),
    pAns("R.A. : le litchi de la côte est, la vanille du Nord-Est, le cacao d'Ambanja.", ["Ambanja"]),
    p("3. Quels sont les cinq sens de la description ? Donne une notation pour chacun."),
    pAns("R.A. : vue (miroir vert), ouïe (clapotis), odorat (terre mouillée), toucher (boue tiède), goût (riz doux).", ["cinq sens"]),
    p("4. Comment s'organise une description réussie ?"),
    pAns("R.A. : dans l'espace (de loin → de près) et parfois dans le temps, avec une impression finale.", ["espace"]),
    p("5. Cite cinq verbes attributifs."),
    pAns("R.A. : être, sembler, paraître, devenir, rester (avoir l'air, demeurer).", ["sembler"]),
    p("6. Avec quoi s'accorde l'attribut du sujet ? Accorde : « les tomates semblent (mûr) »."),
    pAns("R.A. : avec le sujet ; les tomates semblent mûres.", ["mûres"]),
    p("7. Qu'est-ce qu'un champ lexical ? Donne trois mots du champ lexical de l'élevage."),
    pAns("R.A. : la famille de mots d'un même thème ; zébu, troupeau, étable (ruminer, traire).", ["champ lexical"]),
    p("8. Comment fabrique-t-on un adverbe en -ment ? Fabrique : lent, fier."),
    pAns("R.A. : adjectif au féminin + -ment ; lentement, fièrement.", ["lentement"]),
    p("9. L'adverbe s'accorde-t-il ? Justifie avec « elles chantent joyeusement »."),
    pAns("R.A. : non, il est invariable : joyeusement ne prend jamais de -s.", ["invariable"]),
    p("10. Donne le plan de la présentation d'un produit."),
    pAns("R.A. : je nomme, je décris avec trois sens, je compare et je conclus avec fierté.", ["je compare"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« À l'aube, la rizière paraît calme et verte. Les jeunes plants deviennent peu à peu dorés, et les zébus avancent lentement sur la digue étroite. Le riz nouveau semble plus parfumé que jamais. »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("paraît", { bold: true, color: C.SALMON, hl: true }), run(" [verbe attributif ; accent circonflexe sur le î], "), run("calme et verte", { bold: true, color: C.SALMON, hl: true }), run(" [attributs accordés avec « la rizière »], "), run("lentement", { bold: true, color: C.SALMON, hl: true }), run(" [adverbe invariable : lente + -ment], "), run("plus parfumé que", { bold: true, color: C.SALMON, hl: true }), run(" [la comparaison].")], { after: 60 }),
  ];
}

// ---------- Test (S60) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s60", "SÉANCE 60 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 5 : L'AGRICULTURE ET L'ÉLEVAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : vivrière — rente — élevage — angady. 1. Le manioc est une culture …. 2. La vanille est une culture de …. 3. Le zébu appartient à l'…. 4. Le paysan retourne la terre avec son ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Souligne le verbe attributif et accorde : 1. « Les mangues paraissent (lisse). » 2. « La terre reste (fertile). » 3. « Les récoltes deviennent (abondant). » 4. « Le miel semble (doré). »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Relève les notations des sens : « Le matin, l'étable sent le foin frais. On entend le souffle paisible des zébus et leur peau paraît douce sous la main. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Fabrique l'adverbe : joyeux, vrai. Puis compare : « le cacao d'Ambanja / les autres cacaos (fin) ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Décris en cinq lignes un lieu de la campagne que tu aimes : plan de loin → de près, trois sens au moins, une comparaison, une impression finale.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : vivrière — rente — élevage — angady. (1 pt chacun)", ["angady"]),
    pAns("Ex.2 : 1. paraissent lisses — 2. reste fertile — 3. deviennent abondantes — 4. semble doré. (1 pt chacun)", ["abondantes"]),
    pAns("Ex.3 : odorat : le foin frais ; ouïe : le souffle paisible ; toucher : la peau douce. (+ vue acceptée : 4 pts)", ["odorat"]),
    pAns("Ex.4 : joyeusement, vraiment ; le cacao d'Ambanja est plus fin que les autres. (1 pt + 1 pt + 2 pts)", ["plus fin que"]),
    pAns("Ex.5 : plan (1 pt), trois sens (1,5 pt), comparaison (0,5 pt), impression finale et langue correcte (1 pt).", ["comparaison"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS49(), pageBreak(), ...lessonS49(), pageBreak(),
    ...ficheS50(), pageBreak(), ...lessonS50(), pageBreak(),
    ...ficheS51(), pageBreak(), ...lessonS51(), pageBreak(),
    ...ficheS52(), pageBreak(), ...lessonS52(), pageBreak(),
    ...ficheS53(), pageBreak(), ...lessonS53(), pageBreak(),
    ...ficheS54(), pageBreak(), ...lessonS54(), pageBreak(),
    ...ficheS55(), pageBreak(), ...lessonS55(), pageBreak(),
    ...ficheS56(), pageBreak(), ...lessonS56(), pageBreak(),
    ...ficheS57(), pageBreak(), ...lessonS57(), pageBreak(),
    ...ficheS58(), pageBreak(), ...lessonS58(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 5", COLOR, [
      "Je comprends un reportage sur une ferme-école.",
      "Je classe cultures vivrières, cultures de rente, élevages et outils.",
      "Je connais les richesses agricoles de Madagascar et j'en suis fier.",
      "Je lis une description et je relève les notations des cinq sens.",
      "J'emploie les verbes attributifs et j'accorde l'attribut avec le sujet.",
      "J'enrichis mes phrases avec des adjectifs accordés et des champs lexicaux.",
      "Je fabrique les adverbes en -ment et je compare avec plus/moins/aussi… que.",
      "Je présente un produit de ma région avec les sens et une comparaison.",
      "Je rédige une description organisée, du lointain au proche.",
    ], "PROCHAINE ÉTAPE → UNITÉ 6 : LA PÊCHE"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
