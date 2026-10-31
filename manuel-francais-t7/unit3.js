// Français T7 — UNITÉ 3 — LES MÉDIAS (10 leçons + révision + test) — Séances 25 à 36 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange — les médias
const SHADE = "FAE5D3";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 3 — LES MÉDIAS", title, slo,
  values: "esprit critique, recherche de la vérité, ouverture au monde", session, materials,
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

// passage de compréhension orale (S25)
function passageFlash() {
  return box("PASSAGE D'ÉCOUTE — flash d'information « Le journal de la radio scolaire »", [
    p("Il est huit heures, voici le journal de la radio scolaire !"),
    p("Première information : la nouvelle bibliothèque du collège ouvre ses portes lundi prochain. Plus de cinq cents livres attendent les lecteurs, du conte au documentaire."),
    p("Deuxième information : hier matin, les élèves de cinquième ont planté deux cents jeunes arbres sur la colline du village. « Nous reviendrons les arroser chaque semaine », a promis le chef de classe."),
    p("Troisième information, le sport : samedi, l'équipe de football du collège rencontrera celle d'Ambohibary. Le match commencera à quinze heures sur le terrain municipal."),
    p("Et pour finir, la météo : le soleil brillera le matin, mais il pleuvra en fin d'après-midi. N'oubliez pas vos parapluies !"),
    p("C'était votre flash de huit heures. Restez à l'écoute !", { after: 40 }),
  ]);
}
// texte de lecture (S27)
function texteRedaction() {
  return box("TEXTE DE LECTURE — « Une journée à la rédaction »", [
    pr([run("Une journée à la rédaction", { bold: true, color: COLOR })], { after: 40 }),
    pr([run("Mardi, notre classe a visité la rédaction d'un grand quotidien de la capitale. Récit d'une journée au cœur de l'information.", { italic: true })], { after: 60 }),
    p("Le matin, tous les journalistes se réunissent : c'est la conférence de rédaction. Chacun propose ses sujets ; le rédacteur en chef choisit les plus importants. Puis un reporter part sur le terrain : il interroge, il observe, il note. « Une information se vérifie toujours avant d'être publiée, nous a expliqué la rédactrice. Sinon, ce n'est pas une information : c'est une rumeur. »"),
    p("L'après-midi, chacun rédige son article : un titre court, un chapeau qui résume, un corps précis. Le soir, la maquette est terminée et le journal part à l'imprimerie. Demain matin, il sera vendu dans les rues, à côté des autres quotidiens du pays."),
    p("Aujourd'hui, l'information voyage aussi sur Internet : la plupart des grands journaux malgaches ont leur site, et la presse en ligne se développe depuis les années 2000. Mais la règle d'or ne change pas : vérifier avant de publier.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 3 — LES MÉDIAS", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("Bien s'informer, c'est être libre.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_kiosque.png", 440, 0.5581),
    p("", { after: 60 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un flash d'information à la radio ;"),
    p("• nommer les médias et distinguer l'information de la rumeur ;"),
    p("• lire un article qui informe et qui raconte ;"),
    p("• employer le présent de l'indicatif dans toutes ses valeurs ;"),
    p("• employer l'imparfait dans toutes ses valeurs ;"),
    p("• accorder le participe passé employé avec avoir ;"),
    p("• présenter un flash d'information ;"),
    p("• rédiger un article sur une nouvelle de mon école ;"),
    p("• lire un bulletin d'information à haute voix.", { after: 120 }),
    pr([run("Types de textes de l'unité : ", { bold: true }),
        run("l'INFORMATIF et le NARRATIF", { bold: true, color: COLOR }),
        run(" — un article informe avec exactitude, et sait aussi raconter.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("esprit critique, recherche de la vérité, ouverture au monde.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S25 — Compréhension orale ----------
function ficheS25() {
  const meta = META("Compréhension orale : flash d'information « Le journal de la radio scolaire »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'un flash radio et retrouve, pour chaque nouvelle, qui ? quoi ? où ? quand ?",
    "1 / 12", "texte du passage, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 2 : quelles sont les trois parties du compte-rendu ?")],
      [fp("Répondent."),
       fp("R.A. : introduction, déroulement, impression finale.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Demandez : comment apprenez-vous les nouvelles chez vous ? Listez : la radio, la télévision, le journal, Internet, le bouche-à-oreille. Amenez le mot « média ».")],
      [fp("Répondent, listent."),
       fp("R.A. : la radio surtout ; la télévision ; le téléphone…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un flash d'information de la radio scolaire. » Consigne : compter les nouvelles, puis retrouver pour chacune qui ? quoi ? où ? quand ?")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le flash d'une voix de présentateur, débit régulier. Questions globales : combien de nouvelles ? Quels sont les sujets ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : trois nouvelles et la météo ; la bibliothèque, les arbres plantés, le football.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez nouvelle par nouvelle. Tableau à quatre colonnes : qui ? quoi ? où ? quand ? Faites remplir une ligne par nouvelle. Faites repérer les formules du journaliste : « Il est huit heures… », « Restez à l'écoute ! »")],
      [fp("Remplissent le tableau, relèvent les formules."),
       fp("R.A. : les élèves de 5e / ont planté 200 arbres / sur la colline / hier matin ; formules d'ouverture et de clôture du flash.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : un flash est court ; chaque nouvelle répond à qui-quoi-où-quand ; le présentateur ouvre et ferme le journal avec des formules fixes.")],
      [fp("Formulent la synthèse.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : redites la nouvelle des arbres en une seule phrase complète.")],
      [fp("Reformulent."),
       pAns("R.A. : Hier matin, les élèves de cinquième ont planté deux cents arbres sur la colline du village.", ["deux cents"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Combien de nouvelles contient ce flash ?"),
       fp("2. Qui a planté les arbres ? Quand ?"),
       fp("3. Que promet le chef de classe ?"),
       fp("4. Par quelle formule le flash se termine-t-il ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. trois nouvelles et la météo — 2. les élèves de 5e, hier matin — 3. revenir arroser chaque semaine — 4. « Restez à l'écoute ! »", ["flash"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS25() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("COMPRENDRE UN FLASH D'INFORMATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_studio.png", 440, 0.5581),
    p("", { after: 60 }),
    pr([run("🎧 Audio de la séance : ", { bold: true, size: 24 }), run("https://drive.google.com/file/d/1n3Vi-Tlsu6EsBD7PVzH4x2QA4E8HFuEr/view", { color: "1F618D", size: 22 })], { after: 120 }),
    passageFlash(),
    p("", { after: 80 }),
    sub("1. Le flash d'information : court et précis"),
    exLine([run("Il commence et finit par des "), run("formules fixes", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "« Il est huit heures, voici le journal ! » … « Restez à l'écoute ! »"),
    exLine([run("Chaque nouvelle répond à "), run("qui ? quoi ? où ? quand ?", { bold: true, color: C.SALMON, hl: true })],
      "les élèves de 5e / ont planté des arbres / sur la colline / hier matin"),
    exLine([run("Les nouvelles vont de la "), run("plus importante", { bold: true, color: C.SALMON, hl: true }), run(" à la plus légère.")],
      "la météo arrive toujours à la fin", { after: 80 }),
    sub("2. Vocabulaire — mes premiers mots des médias"),
    mot("un flash", "un très court journal : l'essentiel en une minute"),
    mot("une nouvelle", "un fait récent que l'on annonce"),
    mot("un présentateur", "le journaliste qui lit le journal"),
    mot("rester à l'écoute", "continuer d'écouter la radio"),
    p("", { after: 40 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Complète la grille de la 2e nouvelle : qui ? ……… quoi ? ……… où ? ……… quand ? ………"),
    p("2. Recopie la formule d'ouverture du flash.", { after: 60 }),
  ];
}

// ---------- S26 — Lexique ----------
function ficheS26() {
  const meta = META("Lexique : les mots des médias",
    "À la fin de la séance, l'apprenant nomme les grands médias, emploie le vocabulaire de la presse et distingue l'information vérifiée de la rumeur.",
    "2 / 12", "étiquettes, quelques journaux apportés en classe, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : à quelles questions répond chaque nouvelle d'un flash ?")],
      [fp("Répondent."),
       fp("R.A. : qui ? quoi ? où ? quand ?")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Montrez un journal papier. Demandez : comment s'appelle ce média ? Quels autres médias connaissez-vous ? Quels journaux malgaches pouvez-vous citer ?")],
      [fp("Observent, citent."),
       fp("R.A. : la presse écrite ; la radio, la télévision, Internet ; L'Express de Madagascar, Midi Madagasikara…")],
      "Observation", "Journaux"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots des médias. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Quatre colonnes au tableau : presse écrite — radio — télévision — presse en ligne. Faites classer : un quotidien, un flash, un journal télévisé, un site d'information, la une, une antenne…")],
      [fp("Classent les étiquettes."),
       fp("R.A. : quotidien et une → presse écrite ; flash → radio ; journal télévisé → télévision ; site → presse en ligne.")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Faites découvrir les mots du métier : le journaliste, le reporter, la rédaction, la source. Puis opposez : une information (vérifiée auprès d'une source) et une rumeur (répétée sans preuve). Précisez : la presse en ligne malgache se développe depuis les années 2000.")],
      [fp("Notent, donnent des exemples."),
       fp("R.A. : « on dit que… » sans preuve = une rumeur ; le journaliste vérifie à la source avant de publier.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des quatre médias et la phrase clé : une information se vérifie, une rumeur se répète.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « Je donne la définition, vous écrivez le mot. » Le journal de chaque jour ! Celui qui part sur le terrain ! La première page ! Puis une phrase avec « vérifier » en binômes.")],
      [fp("Écrivent sur l'ardoise. Rédigent."),
       pAns("R.A. : un quotidien — un reporter — la une ; exemple : Avant de publier, le journaliste vérifie sa source.", ["vérifie"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Cite les quatre grands médias."),
       fp("2. Quelle est la différence entre une information et une rumeur ?"),
       fp("3. Que fait un reporter ?"),
       fp("4. Écris une phrase avec « la une ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. presse écrite, radio, télévision, presse en ligne — 2. l'information est vérifiée, la rumeur se répète sans preuve — 3. il va sur le terrain, interroge, observe, note — 4. exemple : La photo du match est à la une du quotidien.", ["rumeur"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS26() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES MOTS DES MÉDIAS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_medias.png", 440, 0.5581),
    p("", { after: 60 }),
    imgFloat("u3_mobile.png", 170, 0.5581),
    sub("1. Vocabulaire — les quatre grands médias"),
    mot("la presse écrite", "le quotidien, l'hebdomadaire, la une, l'article"),
    mot("la radio", "le flash, le bulletin, l'antenne, l'auditeur"),
    mot("la télévision", "le journal télévisé, le reportage, le téléspectateur"),
    mot("la presse en ligne", "le site d'information, l'article en ligne — elle se développe à Madagascar depuis les années 2000"),
    p("", { after: 60 }),
    sub("2. Vocabulaire — les gens du métier"),
    mot("le journaliste", "il informe : il cherche, vérifie, écrit"),
    mot("le reporter", "il part sur le terrain : il interroge, observe, note"),
    mot("la rédaction", "l'équipe du journal et le lieu où elle travaille"),
    mot("la source", "la personne ou le document d'où vient l'information"),
    p("", { after: 60 }),
    sub("3. Information ou rumeur ?"),
    exTitre(),
    exLine([run("Une "), run("information", { bold: true, color: C.SALMON, hl: true }), run(" se "), run("vérifie", { bold: true, color: C.SALMON, hl: true }), run(" : le journaliste interroge la source.")],
      "pas de source, pas d'information"),
    exLine([run("Une "), run("rumeur", { bold: true, color: C.SALMON, hl: true }), run(" se répète : « on dit que… », sans preuve.")],
      "avant d'y croire, je demande : qui l'a vérifié ?", { after: 80 }),
    sub("4. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« écouter la radio »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« entendre la radio »   "), run("[écouter = volontaire et attentif ; entendre = sans le vouloir]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — je classe :"),
    p("Mets chaque mot dans son média : le journal télévisé — la une — le site d'information — le flash de huit heures.", { after: 60 }),
  ];
}

// ---------- S27 — Compréhension écrite ----------
function ficheS27() {
  const meta = META("Compréhension écrite : « Une journée à la rédaction » — informer et raconter",
    "À la fin de la séance, l'apprenant lit un article qui informe et qui raconte, en dégage les informations essentielles et repère ce qui relève du récit et de l'information.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez les quatre grands médias et deux mots du métier de journaliste.")],
      [fp("Répondent."),
       fp("R.A. : presse écrite, radio, télévision, presse en ligne ; reporter, rédaction…")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : comment fabrique-t-on un journal, à votre avis ? Notez les hypothèses.")],
      [fp("Émettent des hypothèses."),
       fp("R.A. : des journalistes écrivent ; on imprime ; on vend…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : Une journée à la rédaction. Ce texte informe ET raconte. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : qui a visité la rédaction ? Quand ? Que découvre-t-on ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : la classe, mardi ; la fabrication d'un journal, du matin au soir.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites suivre la journée dans l'ordre : le matin (conférence de rédaction), l'après-midi (écriture), le soir (imprimerie). Faites relever la citation sur la vérification et la règle d'or. Faites remarquer : le texte raconte une visite (récit) ET donne des informations exactes sur le métier.")],
      [fp("Relèvent, répondent."),
       fp("R.A. : « Une information se vérifie toujours avant d'être publiée » ; la règle d'or : vérifier avant de publier ; le texte est à la fois narratif et informatif.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : un bon article peut raconter pour rendre vivant, mais chaque fait rapporté doit être exact et vérifié.")],
      [fp("Formulent la synthèse.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez une phrase qui raconte et une phrase qui informe.")],
      [fp("Relèvent, justifient."),
       pAns("R.A. : raconte : « Mardi, notre classe a visité la rédaction… » ; informe : « la presse en ligne se développe depuis les années 2000 ».", ["informe"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que se passe-t-il à la conférence de rédaction ?"),
       fp("2. Que fait le reporter sur le terrain ?"),
       fp("3. Quelle est la règle d'or du journaliste ?"),
       fp("4. Recopie une phrase du texte qui raconte, et une qui informe.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. chacun propose ses sujets, le rédacteur en chef choisit — 2. il interroge, observe, note — 3. vérifier avant de publier — 4. voir entraînement.", ["règle d'or"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS27() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("UN ARTICLE QUI INFORME ET QUI RACONTE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_reporter.png", 440, 0.5581),
    p("", { after: 60 }),
    texteRedaction(),
    p("", { after: 80 }),
    sub("1. Deux forces dans le même texte"),
    exLine([run("Il "), run("raconte", { bold: true, color: C.SALMON, hl: true }), run(" : « Mardi, notre classe a visité la rédaction… »")],
      "le récit rend le texte vivant : on suit la journée"),
    exLine([run("Il "), run("informe", { bold: true, color: C.SALMON, hl: true }), run(" : « la presse en ligne se développe depuis les années 2000 ».")],
      "chaque fait est exact et vérifié", { after: 80 }),
    sub("2. La règle d'or du journaliste"),
    exTitre(),
    exLine([run("« Une information "), run("se vérifie toujours", { bold: true, color: C.SALMON, hl: true }), run(" avant d'être publiée. »")],
      "sinon, ce n'est pas une information : c'est une rumeur"),
    exLine([run("Le journal se fabrique "), run("dans l'ordre", { bold: true, color: C.SALMON, hl: true }), run(" : conférence → terrain → écriture → imprimerie.")],
      "le matin, l'après-midi, le soir : les connecteurs me guident", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Souligne en bleu une phrase qui raconte, en rouge une phrase qui informe. — 2. Recopie la règle d'or.", { after: 60 }),
  ];
}

// ---------- S28 — Grammaire : les valeurs du présent ----------
function ficheS28() {
  const meta = META("Grammaire : les valeurs du présent de l'indicatif",
    "À la fin de la séance, l'apprenant identifie les principales valeurs du présent (énonciation, habitude, vérité générale, narration, futur proche, passé récent) et les emploie.",
    "4 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelle est la règle d'or du journaliste ?")],
      [fp("Répondent."),
       fp("R.A. : vérifier avant de publier.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Le journaliste parle en direct. » / « Chaque matin, j'écoute la radio. » Demandez : les deux verbes sont au présent ; disent-ils la même chose ?")],
      [fp("Comparent."),
       fp("R.A. : non : l'un se passe maintenant, l'autre se répète tous les jours.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les valeurs du présent. Un seul temps, plusieurs emplois. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Le journaliste parle en direct. — Chaque matin, j'écoute la radio. — Une information se vérifie toujours. — Hier, le reporter arrive au marché et interroge les vendeurs. — Le journal va paraître. — Le flash vient de se terminer. Faites associer chaque phrase à sa valeur.")],
      [fp("Associent phrases et valeurs."),
       fp("R.A. : maintenant ; habitude ; vérité générale ; narration (récit rendu vivant) ; futur proche ; passé récent.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Insistez sur deux valeurs : la vérité générale (vraie hier, aujourd'hui, demain : les proverbes) et le présent de narration (un fait passé raconté au présent pour le rendre vivant — fréquent dans les articles). Faites construire aller + infinitif et venir de + infinitif.")],
      [fp("Notent, construisent des exemples."),
       fp("R.A. : L'équipe va jouer samedi (futur proche) ; les élèves viennent de planter les arbres (passé récent).")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : tableau des six valeurs avec un exemple chacun.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : donnez la valeur. « La Terre tourne autour du Soleil. » — « Je te rappelle : le match va commencer ! » — « Tous les soirs, papa lit le journal. »")],
      [fp("Écrivent la valeur, justifient."),
       pAns("R.A. : vérité générale — futur proche — habitude.", ["vérité générale"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne la valeur du présent : « Une rumeur se répète sans preuve. »"),
       fp("2. « Hier, le reporter entre dans le village et pose ses questions. »"),
       fp("3. Écris une phrase au passé récent avec « venir de ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. vérité générale — 2. présent de narration — 3. exemple : Le flash vient de se terminer.", ["narration"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS28() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VALEURS DU PRÉSENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    imgFloat("u3_temps.png", 170, 0.5581),
    sub("1. Un seul temps, plusieurs valeurs"),
    exTitre(),
    exLine([run("Le journaliste "), run("parle", { bold: true, color: C.SALMON, hl: true }), run(" en direct.")],
      "maintenant, au moment où je parle"),
    exLine([run("Chaque matin, j'"), run("écoute", { bold: true, color: C.SALMON, hl: true }), run(" la radio.")],
      "l'habitude : cela se répète"),
    exLine([run("Une information "), run("se vérifie", { bold: true, color: C.SALMON, hl: true }), run(" toujours.")],
      "la vérité générale : vraie hier, aujourd'hui et demain"),
    exLine([run("Hier, le reporter "), run("arrive", { bold: true, color: C.SALMON, hl: true }), run(" au marché et "), run("interroge", { bold: true, color: C.SALMON, hl: true }), run(" les vendeurs.")],
      "le présent de narration : c'est passé, mais on le vit !", { after: 80 }),
    sub("2. Tout près du présent : le futur proche et le passé récent"),
    exLine([run("Le journal "), run("va paraître", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "aller + infinitif = cela arrive bientôt"),
    exLine([run("Le flash "), run("vient de se terminer", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "venir de + infinitif = cela s'est passé à l'instant", { after: 80 }),
    sub("Exercice — donne la valeur de chaque présent :"),
    p("1. La Terre tourne autour du Soleil. — 2. Tous les soirs, papa lit le journal. — 3. Le match va commencer. — 4. Hier, l'équipe entre sur le terrain et marque aussitôt.", { after: 60 }),
  ];
}

// ---------- S29 — Grammaire : les valeurs de l'imparfait ----------
function ficheS29() {
  const meta = META("Grammaire : les valeurs de l'imparfait",
    "À la fin de la séance, l'apprenant identifie les principales valeurs de l'imparfait (description, habitude passée, arrière-plan du récit, hypothèse avec si) et les emploie.",
    "5 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : donnez la valeur du présent dans « Une rumeur se répète sans preuve ».")],
      [fp("Répondent."),
       fp("R.A. : vérité générale.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « La salle de rédaction était calme. Soudain, le téléphone a sonné. » Demandez : quel verbe pose le décor ? lequel fait l'action ?")],
      [fp("Comparent."),
       fp("R.A. : « était » décrit le décor ; « a sonné » est l'action soudaine.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les valeurs de l'imparfait. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : La salle était calme. — Autrefois, on lisait les nouvelles sur le papier. — Il pleuvait quand le reporter est sorti. — Si j'étais journaliste, je dirais toujours la vérité. Faites associer chaque phrase à sa valeur.")],
      [fp("Associent phrases et valeurs."),
       fp("R.A. : description ; habitude passée ; arrière-plan (action longue) ; hypothèse avec si.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Insistez : dans le récit, l'imparfait dure (arrière-plan) et le passé composé surgit (premier plan). Et après « si », l'imparfait n'est pas du passé : c'est de l'imaginaire !")],
      [fp("Notent, construisent des exemples."),
       fp("R.A. : Le vent soufflait (durée) ; l'arbre est tombé (surgissement) ; si j'avais une radio… (imaginaire).")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : tableau des quatre valeurs avec un exemple chacun.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : donnez la valeur. « Autrefois, le village n'avait pas d'électricité. » — « Le soleil brillait quand le flash a commencé. » — « Si tu écoutais la radio, tu saurais la nouvelle. »")],
      [fp("Écrivent la valeur, justifient."),
       pAns("R.A. : habitude passée — arrière-plan du récit — hypothèse avec si.", ["hypothèse"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne la valeur : « La cour était silencieuse. »"),
       fp("2. « Chaque dimanche, grand-père écoutait le journal de midi. »"),
       fp("3. Complète : « Si j'étais reporter, … »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. description — 2. habitude passée — 3. réponse libre correcte au conditionnel.", ["description"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS29() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VALEURS DE L'IMPARFAIT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Les quatre valeurs à connaître"),
    exTitre(),
    exLine([run("La salle de rédaction "), run("était", { bold: true, color: C.SALMON, hl: true }), run(" calme.")],
      "la description : je pose le décor"),
    exLine([run("Autrefois, on "), run("lisait", { bold: true, color: C.SALMON, hl: true }), run(" les nouvelles sur le papier.")],
      "l'habitude passée : cela se répétait"),
    exLine([run("Il "), run("pleuvait", { bold: true, color: C.SALMON, hl: true }), run(" quand le reporter "), run("est sorti", { bold: true })],
      "l'arrière-plan : l'imparfait dure, le passé composé surgit"),
    exLine([run("Si j'"), run("étais", { bold: true, color: C.SALMON, hl: true }), run(" journaliste, je dirais toujours la vérité.")],
      "après « si » : l'imaginaire, pas le passé !", { after: 80 }),
    sub("2. Le duo du récit : imparfait + passé composé"),
    exLine([run("Le vent "), run("soufflait", { bold: true, color: C.SALMON, hl: true }), run(" sur la colline. Soudain, un arbre "), run("est tombé", { bold: true }), run(".")],
      "le décor dure… l'événement frappe : c'est la musique du récit", { after: 80 }),
    sub("Exercice — donne la valeur de chaque imparfait :"),
    p("1. La cour était silencieuse. — 2. Chaque dimanche, grand-père écoutait le journal de midi. — 3. Si tu écoutais la radio, tu saurais la nouvelle.", { after: 60 }),
  ];
}

// ---------- S30 — Grammaire : l'accord du participe passé avec avoir ----------
function ficheS30() {
  const meta = META("Grammaire : l'accord du participe passé employé avec avoir",
    "À la fin de la séance, l'apprenant accorde le participe passé employé avec avoir lorsque le COD est placé avant le verbe.",
    "6 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel (unité 1) : avec quoi s'accorde le participe passé employé avec être ?")],
      [fp("Répondent."),
       fp("R.A. : avec le sujet : les danses sont admirées.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Elles ont écouté la radio. » / « Les affiches que les élèves ont préparées. » Demandez : pourquoi « écouté » sans accord et « préparées » avec accord ?")],
      [fp("Observent, émettent des hypothèses.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : l'accord du participe passé avec avoir. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : J'ai lu les journaux. — Les journaux que j'ai lus. — Ces nouvelles ? Je les ai entendues. Faites chercher le COD de chaque phrase et sa place (avant ou après le verbe).")],
      [fp("Cherchent le COD, observent sa place."),
       fp("R.A. : les journaux (après) ; que = les journaux (avant) ; les = les nouvelles (avant).")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites formuler les deux règles : 1. avec avoir, jamais d'accord avec le sujet ; 2. accord avec le COD seulement s'il est placé AVANT le verbe (le pronom « que », les pronoms le-la-les). Donnez le test : je pose la question « quoi ? » avant d'écrire le participe.")],
      [fp("Formulent, notent."),
       fp("R.A. : j'ai lu quoi ? « les journaux », placé après → pas d'accord ; « que j'ai lus » : que (= les journaux) est avant → accord.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les deux règles + le test du « quoi ? ».")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : accordez si nécessaire. « Elles ont (regarder) le journal télévisé. » — « Les émissions que nous avons (écouter). » — « Ces photos, le reporter les a (prendre). »")],
      [fp("Écrivent, justifient."),
       pAns("R.A. : regardé (COD après) — écoutées (que, avant) — prises (les, avant).", ["écoutées"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Accorde si nécessaire : « Nous avons (vérifier) les sources. »"),
       fp("2. « Les sources que nous avons (vérifier). »"),
       fp("3. Explique la différence entre les deux phrases.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. vérifié (COD après) — 2. vérifiées (COD avant) — 3. l'accord dépend de la place du COD.", ["vérifiées"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS30() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("L'ACCORD DU PARTICIPE PASSÉ AVEC AVOIR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Règle n°1 : jamais d'accord avec le sujet"),
    exTitre(),
    exLine([run("Elles ont "), run("écouté", { bold: true, color: C.SALMON, hl: true }), run(" la radio.")],
      "« elles » est féminin pluriel, mais le participe ne bouge pas"),
    exLine([run("J'ai "), run("lu", { bold: true, color: C.SALMON, hl: true }), run(" les journaux.")],
      "le COD « les journaux » est APRÈS le verbe → pas d'accord", { after: 80 }),
    sub("2. Règle n°2 : accord avec le COD placé AVANT"),
    exTitre(),
    exLine([run("Les journaux "), run("que", { bold: true }), run(" j'ai "), run("lus", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "que = les journaux, placé avant → accord masculin pluriel"),
    exLine([run("Ces nouvelles ? Je "), run("les", { bold: true }), run(" ai "), run("entendues", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "les = les nouvelles, placé avant → accord féminin pluriel", { after: 80 }),
    sub("3. Mon test : la question « quoi ? »"),
    exLine([run("J'ai vérifié "), run("quoi ?", { bold: true, color: C.SALMON, hl: true }), run(" — la réponse est-elle déjà écrite AVANT le participe ?")],
      "oui → j'accorde ; non → je n'accorde pas", { after: 80 }),
    sub("Exercice — accorde si nécessaire :"),
    p("1. Nous avons (vérifier) les sources. — 2. Les sources que nous avons (vérifier). — 3. Ces photos, le reporter les a (prendre).", { after: 60 }),
  ];
}

// ---------- S31 — Production orale ----------
function ficheS31() {
  const meta = META("Production orale : présenter un flash d'information",
    "À la fin de la séance, l'apprenant présente un court flash d'information : formule d'ouverture, deux ou trois nouvelles complètes, formule de clôture.",
    "7 / 12", "plan au tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles formules ouvrent et ferment un flash ? À quelles questions répond chaque nouvelle ?")],
      [fp("Répondent."),
       fp("R.A. : « Il est huit heures, voici le journal ! » / « Restez à l'écoute ! » ; qui-quoi-où-quand.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Faites écouter votre propre mini-flash de trois nouvelles de la classe (modèle du maître).")],
      [fp("Écoutent, relèvent les trois nouvelles.")],
      "Modélisation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : votre flash d'information d'une minute, sur les nouvelles vraies de l'école et du quartier. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Plan au tableau : 1. formule d'ouverture ; 2. deux ou trois nouvelles (chacune : qui-quoi-où-quand, de la plus importante à la plus légère) ; 3. formule de clôture. Voix : débit régulier, articulation nette.")],
      [fp("Notent le plan.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Chacun choisit ses nouvelles VRAIES et prépare ses mots clés. Interdire les rumeurs : chaque nouvelle doit pouvoir être vérifiée !")],
      [fp("Préparent leurs nouvelles.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels. Grille d'écoute : les formules ? les nouvelles complètes ? le débit ?")],
      [fp("Présentent leur flash. Évaluent avec la grille."),
       pAns("R.A. : Il est dix heures, voici le journal de la 5e ! Ce matin, notre classe a gagné le concours de propreté… C'était votre flash. Restez à l'écoute !", ["flash"], { size: SZ.FICHE })],
      "Passages individuels", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : faites ralentir les débits trop rapides ; faites réordonner les nouvelles mal classées.")],
      [fp("Améliorent leur passage.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. formules d'ouverture et de clôture — 2. nouvelles complètes et vraies — 3. ordre d'importance — 4. débit régulier, articulation.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31", "PRODUCTION ORALE", COLOR);
}
function lessonS31() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("PRÉSENTER UN FLASH D'INFORMATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_flash.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. Mon plan de présentateur (une minute)"),
    exLine([run("La formule d'ouverture", { bold: true, color: C.SALMON, hl: true }), run(" : « Il est dix heures, voici le journal ! »")],
      "elle annonce que le flash commence"),
    exLine([run("Deux ou trois nouvelles vraies", { bold: true, color: C.SALMON, hl: true }), run(", de la plus importante à la plus légère.")],
      "chaque nouvelle répond à qui ? quoi ? où ? quand ?"),
    exLine([run("La formule de clôture", { bold: true, color: C.SALMON, hl: true }), run(" : « C'était votre flash. Restez à l'écoute ! »")],
      "elle ferme le journal proprement", { after: 80 }),
    sub("2. La voix du présentateur"),
    exLine([run("Débit "), run("régulier", { bold: true, color: C.SALMON, hl: true }), run(", articulation "), run("nette", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "ni trop vite ni trop lentement : chaque mot doit être compris"),
    exLine([run("Une "), run("petite pause", { bold: true, color: C.SALMON, hl: true }), run(" entre deux nouvelles.")],
      "l'auditeur comprend qu'on change de sujet", { after: 80 }),
    sub("3. Un modèle complet"),
    pr([run("« Il est dix heures, voici le journal de la cinquième ! Ce matin, notre classe a gagné le concours de propreté du collège. Demain, la bibliothèque ouvrira ses portes à tous les élèves. C'était votre flash. Restez à l'écoute ! »", { italic: true })], { after: 80 }),
    sub("Exercice — à toi de présenter :"),
    p("Prépare un flash d'une minute avec deux nouvelles VRAIES de ton école ou de ton quartier. Vérifie chaque nouvelle avant de la dire !", { after: 60 }),
  ];
}

// ---------- S32 — Production écrite (1) ----------
function ficheS32() {
  const meta = META("Production écrite (1) : l'article de presse — titre, chapeau, plan",
    "À la fin de la séance, l'apprenant choisit une nouvelle vraie de son école ou de son quartier et construit le plan de son article : titre, chapeau, corps.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel (unité 1) : quelles sont les trois parties de l'article de presse ?")],
      [fp("Répondent."),
       fp("R.A. : le titre, le chapeau, le corps.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : quelles nouvelles VRAIES de l'école ou du quartier mériteraient un article ? Listez au tableau. Écartez ensemble ce qui n'est pas vérifiable.")],
      [fp("Proposent, trient."),
       fp("R.A. : la plantation d'arbres, le match de samedi, la nouvelle bibliothèque…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : un article sur une nouvelle de l'école. Aujourd'hui, le plan ; la rédaction à la prochaine séance. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Construisez l'exemple collectif : nouvelle = la plantation d'arbres. Titre court : « Deux cents arbres pour la colline ». Chapeau : une ou deux phrases (qui-quoi-où-quand). Corps : deux paragraphes (le déroulement ; les suites prévues).")],
      [fp("Participent à l'exemple."),
       fp("R.A. : chapeau : Hier matin, les élèves de 5e ont planté deux cents arbres sur la colline du village.")],
      "Exemple collectif", "Tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit SA nouvelle, remplit la carte des questions, rédige son titre, son chapeau et les deux idées de paragraphes.")],
      [fp("Construisent leur plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques titres sont lus. La classe vote : lequel donne le plus envie de lire ? Pourquoi ?")],
      [fp("Lisent, comparent, justifient.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun vérifie son chapeau avec les quatre questions, puis note sa source : qui pourra confirmer cette nouvelle ?")],
      [fp("Vérifient, notent leur source."),
       pAns("R.A. : source : le professeur principal, témoin de la plantation.", ["source"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du plan : 1. titre court et accrocheur — 2. chapeau qui répond aux quatre questions — 3. deux idées de paragraphes — 4. une source notée.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS32() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON ARTICLE (1) : TITRE, CHAPEAU, PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_article.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. Avant d'écrire : quatre gestes"),
    exLine([run("Je choisis une nouvelle VRAIE", { bold: true, color: C.SALMON, hl: true }), run(" de mon école ou de mon quartier.")],
      "une rumeur ne fait jamais un article"),
    exLine([run("Je note ma source", { bold: true, color: C.SALMON, hl: true }), run(" : qui peut confirmer ?")],
      "le professeur, le directeur, un témoin"),
    exLine([run("Je remplis la carte des questions", { bold: true, color: C.SALMON, hl: true }), run(" : qui ? quoi ? où ? quand ? comment ? pourquoi ?")], null),
    exLine([run("J'écris le plan", { bold: true, color: C.SALMON, hl: true }), run(" : titre → chapeau → corps.")],
      "deux paragraphes suffisent", { after: 80 }),
    sub("2. Un exemple de plan"),
    exLine([run("Titre : ", { bold: true }), run("« Deux cents arbres pour la colline »", { bold: true, color: C.SALMON, hl: true })],
      "court, précis, donne envie"),
    exLine([run("Chapeau : ", { bold: true }), run("Hier matin, les élèves de 5e ont planté deux cents arbres sur la colline du village.", { italic: true })],
      "qui-quoi-où-quand en une phrase"),
    exLine([run("Paragraphe 1 : ", { bold: true }), run("le déroulement de la matinée.")], null),
    exLine([run("Paragraphe 2 : ", { bold: true }), run("les suites prévues : l'arrosage chaque semaine.")], null, { after: 80 }),
    sub("Exercice — ton plan :"),
    p("Choisis une nouvelle vraie, note ta source, puis écris ton titre, ton chapeau et tes deux idées de paragraphes.", { after: 60 }),
  ];
}

// ---------- S33 — Production écrite (2) ----------
function ficheS33() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son article en huit à dix lignes, au présent, puis le relit avec la grille et l'améliore.",
    "9 / 12", "plans de la séance 32, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre plan. Quelles valeurs du présent emploierons-nous ?")],
      [fp("Relisent."),
       fp("R.A. : le présent pour informer ; le présent de narration pour raconter ; le futur proche pour les suites.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « lequipe a gagner le match ». Demandez : que faut-il corriger, puis enrichir ?")],
      [fp("Corrigent, enrichissent."),
       fp("R.A. : L'équipe du collège a gagné le match : quelle victoire !")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons l'article complet, puis nous le relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; titre, chapeau, deux paragraphes ; le présent et ses valeurs ; attention à l'accord du participe passé si un COD est placé avant (« les arbres qu'ils ont plantés »).")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle à partir du plan. Circulez : aidez à varier les phrases et à placer une citation entre guillemets.")],
      [fp("Rédigent leur article.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : les trois parties ? le présent bien employé ? l'accord du participe passé vérifié ? une citation ? majuscules et points ?")],
      [fp("Relisent, cochent, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun souligne une réussite et propose une amélioration.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : réussite = le titre accrocheur ; amélioration = préciser le quand dans le chapeau.", ["amélioration"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : structure (2) — exactitude et source (2) — valeurs du présent (2) — accords (2) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS33() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON ARTICLE (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("J'écris "), run("au présent", { bold: true, color: C.SALMON, hl: true }), run(", en choisissant la bonne valeur.")],
      "informer, raconter (présent de narration), annoncer (futur proche)"),
    exLine([run("Je place une "), run("citation", { bold: true, color: C.SALMON, hl: true }), run(" entre guillemets.")],
      "« Nous reviendrons les arroser », a promis le chef de classe"),
    exLine([run("Je surveille "), run("l'accord du participe passé", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "les arbres qu'ils ont plantés : COD avant → accord !", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes trois parties", { bold: true, color: C.SALMON, hl: true }), run(" : titre, chapeau, corps.")], null),
    exLine([run("Ma nouvelle est vraie", { bold: true, color: C.SALMON, hl: true }), run(" et ma source est citée ou connue.")], null),
    exLine([run("Mes accords", { bold: true, color: C.SALMON, hl: true }), run(" avec avoir sont vérifiés par le test « quoi ? ».")], null, { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("lequipe a gagner le match  →  L'équipe du collège "), run("a gagné", { bold: true, color: C.SALMON, hl: true }), run(" le match : "), run("quelle victoire !", { bold: true, color: C.SALMON, hl: true })],
      "je corrige ET j'enrichis : apostrophe, participe en -é, exclamation", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« la bibliotek va ouvrir cest bien » → ………", { after: 60 }),
  ];
}

// ---------- S34 — Lecture-fluidité ----------
function ficheS34() {
  const meta = META("Lecture-fluidité : lire un bulletin d'information",
    "À la fin de la séance, l'apprenant lit un bulletin d'information à haute voix : débit régulier, articulation nette, pauses entre les nouvelles.",
    "10 / 12", "texte du flash (séance 25), crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les qualités de la voix d'un présentateur ?")],
      [fp("Répondent."),
       fp("R.A. : débit régulier, articulation nette, pauses entre les nouvelles.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez la première nouvelle du flash de deux façons : trop vite et en articulant mal, puis en présentateur. Faites comparer.")],
      [fp("Comparent."),
       fp("R.A. : la deuxième lecture : on comprend chaque mot.")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire le bulletin comme à la radio. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites préparer le texte : marquer / et //, encadrer les nombres (cinq cents, deux cents, quinze heures) et les noms propres à articuler avec soin.")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Entraînement en binômes : chacun lit une nouvelle ; l'autre vérifie avec la grille (débit, articulation, pause finale).")],
      [fp("S'entraînent en binômes.")],
      "Binômes", "Grille"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages : chaque lecteur enchaîne deux nouvelles avec la pause entre les deux. La classe écoute en auditeur de radio : a-t-on tout compris ?")],
      [fp("Lisent, écoutent, évaluent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : travaillez les nombres et les liaisons difficiles ; faites reprendre les finales de phrases avalées.")],
      [fp("Reprennent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. débit régulier — 2. articulation nette (nombres, noms propres) — 3. pauses entre les nouvelles — 4. ton vivant mais neutre.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS34() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN BULLETIN D'INFORMATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_tele.png", 440, 0.5581),
    p("", { after: 60 }),
    sub("1. La voix du présentateur"),
    exLine([run("Un débit "), run("régulier", { bold: true, color: C.SALMON, hl: true }), run(" : chaque mot doit être compris du premier coup.")],
      "l'auditeur ne peut pas relire !"),
    exLine([run("Une "), run("articulation nette", { bold: true, color: C.SALMON, hl: true }), run(" pour les nombres et les noms propres.")],
      "deux cents arbres, quinze heures, Ambohibary"),
    exLine([run("Une "), run("pause", { bold: true, color: C.SALMON, hl: true }), run(" entre deux nouvelles.")],
      "on change de sujet : je respire, l'auditeur aussi"),
    exLine([run("Un ton "), run("vivant mais neutre", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "le présentateur informe : il ne joue pas la comédie", { after: 80 }),
    sub("2. Je prépare mon bulletin"),
    exLine([run("Je marque "), run("/ et //", { bold: true, color: C.SALMON, hl: true }), run(", j'encadre les nombres et les noms propres.")],
      "les pièges sont repérés avant de lire", { after: 80 }),
    sub("Exercice — prépare puis lis en présentateur :"),
    p("« Deuxième information : hier matin, les élèves de cinquième ont planté deux cents jeunes arbres sur la colline du village. Troisième information, le sport : samedi, l'équipe du collège rencontrera celle d'Ambohibary. »", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 3 : LES MÉDIAS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les quatre médias : ", { bold: true }), run("la presse écrite, la radio, la télévision, la presse en ligne.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Le métier : ", { bold: true }), run("le journaliste, le reporter, la rédaction, la source, la une, le flash.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("La règle d'or : ", { bold: true }), run("une information se vérifie, une rumeur se répète.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. L'article qui informe et qui raconte :"),
    p("Un bon article peut raconter pour rendre vivant (récit), mais chaque fait rapporté doit être exact et vérifié (information). Structure : titre → chapeau → corps, avec une citation entre guillemets.", { after: 80 }),
    sub("3. Les valeurs du présent :"),
    p("Le moment où l'on parle ; l'habitude ; la vérité générale ; le présent de narration (récit rendu vivant) ; le futur proche (aller + infinitif) ; le passé récent (venir de + infinitif).", { after: 80 }),
    sub("4. Les valeurs de l'imparfait :"),
    p("La description (décor) ; l'habitude passée ; l'arrière-plan du récit (l'imparfait dure, le passé composé surgit) ; l'hypothèse après « si » (imaginaire, pas passé).", { after: 80 }),
    sub("5. L'accord du participe passé avec avoir :"),
    p("Jamais d'accord avec le sujet. Accord avec le COD seulement s'il est placé avant le verbe : « les journaux que j'ai lus », « je les ai entendues ». Test : la question « quoi ? ».", { after: 80 }),
    sub("6. Dire et écrire comme un journaliste :"),
    p("Le flash : formule d'ouverture → nouvelles complètes (qui-quoi-où-quand) par ordre d'importance → formule de clôture. L'article : plan, présent bien employé, source vérifiée, relecture avec la grille.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces mots dans le bon média (presse écrite, radio, télévision, presse en ligne) : 1. la une 2. le flash 3. le site d'information 4. le journal télévisé.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Donne la valeur du présent : 1. « Chaque matin, j'écoute la radio. » 2. « Une information se vérifie toujours. » 3. « Le journal va paraître. » 4. « Hier, le reporter arrive au marché et interroge les vendeurs. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Donne la valeur de l'imparfait : 1. « La salle était calme. » 2. « Autrefois, on lisait les nouvelles sur le papier. » 3. « Il pleuvait quand le reporter est sorti. » 4. « Si j'étais journaliste… »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Accorde si nécessaire : 1. « Elles ont (regarder) le journal télévisé. » 2. « Les émissions que nous avons (écouter). » 3. « Ces photos, le reporter les a (prendre). » 4. « Nous avons (vérifier) les sources. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris le chapeau (une ou deux phrases) d'un article intitulé « La bibliothèque ouvre ses portes » : réponds à qui ? quoi ? où ? quand ?")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. presse écrite — 2. radio — 3. presse en ligne — 4. télévision. (1 pt chacun)", ["presse en ligne"]),
    pAns("Ex.2 : 1. habitude — 2. vérité générale — 3. futur proche — 4. présent de narration. (1 pt chacun)", ["narration"]),
    pAns("Ex.3 : 1. description — 2. habitude passée — 3. arrière-plan du récit — 4. hypothèse avec si. (1 pt chacun)", ["hypothèse"]),
    pAns("Ex.4 : 1. regardé — 2. écoutées — 3. prises — 4. vérifié. (1 pt chacun)", ["écoutées"]),
    pAns("Ex.5 : exemple : Lundi prochain, la nouvelle bibliothèque du collège ouvrira ses portes à tous les élèves. Plus de cinq cents livres les attendent. (4 pts)", ["bibliothèque"]),
  ];
}

// ---------- Révision (S35) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s35", "SÉANCE 35 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 3 : LES MÉDIAS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite les quatre grands médias."),
    pAns("R.A. : la presse écrite, la radio, la télévision, la presse en ligne.", ["médias"]),
    p("2. Quelle est la différence entre une information et une rumeur ?"),
    pAns("R.A. : l'information est vérifiée auprès d'une source ; la rumeur se répète sans preuve.", ["source"]),
    p("3. Quelles formules ouvrent et ferment un flash ?"),
    pAns("R.A. : « Il est huit heures, voici le journal ! » — « C'était votre flash. Restez à l'écoute ! »", ["flash"]),
    p("4. Cite quatre valeurs du présent, avec un exemple chacune."),
    pAns("R.A. : habitude (chaque matin, j'écoute…), vérité générale (une information se vérifie), futur proche (le journal va paraître), narration (hier, le reporter arrive…).", ["valeurs"]),
    p("5. Que fait l'imparfait dans un récit, à côté du passé composé ?"),
    pAns("R.A. : il pose l'arrière-plan qui dure ; le passé composé fait surgir l'événement.", ["arrière-plan"]),
    p("6. Que signifie l'imparfait après « si » ?"),
    pAns("R.A. : l'imaginaire, l'hypothèse — pas le passé : « si j'étais journaliste… ».", ["hypothèse"]),
    p("7. Avec avoir, le participe passé s'accorde-t-il avec le sujet ?"),
    pAns("R.A. : jamais ; il s'accorde avec le COD seulement s'il est placé avant le verbe.", ["jamais"]),
    p("8. Accorde : « les émissions que nous avons (écouter) »."),
    pAns("R.A. : écoutées — « que » (= les émissions) est placé avant.", ["écoutées"]),
    p("9. Donne le plan d'un flash d'information."),
    pAns("R.A. : formule d'ouverture, deux ou trois nouvelles complètes par ordre d'importance, formule de clôture.", ["ouverture"]),
    p("10. Quelle est la règle d'or avant de publier ?"),
    pAns("R.A. : vérifier l'information auprès d'une source.", ["vérifier"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« Hier soir, la radio annonçait une grande nouvelle : les élèves de notre collège viennent de gagner le concours de lecture. Les affiches qu'ils ont préparées décorent déjà la cour. Quelle fierté pour notre école ! »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("annonçait", { bold: true, color: C.SALMON, hl: true }), run(" [imparfait ; ç devant a], "), run("viennent de gagner", { bold: true, color: C.SALMON, hl: true }), run(" [passé récent : venir de + infinitif], "), run("préparées", { bold: true, color: C.SALMON, hl: true }), run(" [avoir + COD « qu' » placé avant → accord], "), run("Quelle fierté !", { bold: true, color: C.SALMON, hl: true }), run(" [exclamation].")], { after: 60 }),
  ];
}

// ---------- Test (S36) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s36", "SÉANCE 36 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 3 : LES MÉDIAS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : source — rumeur — reporter — une. 1. Le … part interroger les témoins. 2. « On dit que… » sans preuve : c'est une …. 3. La photo du match est à la … du journal. 4. Le journaliste cite toujours sa ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Donne la valeur du présent : 1. « Le soleil se lève à l'est. » 2. « Le flash vient de se terminer. » 3. « Tous les soirs, maman écoute les nouvelles. » 4. « Hier, l'équipe entre sur le terrain et marque aussitôt. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Donne la valeur de l'imparfait : 1. « La cour était silencieuse. » 2. « Chaque dimanche, grand-père écoutait le journal de midi. » 3. « Le vent soufflait quand l'arbre est tombé. » 4. « Si tu écoutais la radio, tu saurais la nouvelle. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Accorde si nécessaire : 1. « Nous avons (lire) les journaux. » 2. « Les nouvelles que tu as (entendre). » 3. « Ces articles, elle les a (écrire). » 4. « Ils ont (vérifier) la source. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige un mini-article (cinq à six lignes) sur une nouvelle vraie de ton école : un titre, un chapeau, un petit paragraphe avec une citation entre guillemets.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : reporter — rumeur — une — source. (1 pt chacun)", ["source"]),
    pAns("Ex.2 : 1. vérité générale — 2. passé récent — 3. habitude — 4. présent de narration. (1 pt chacun)", ["passé récent"]),
    pAns("Ex.3 : 1. description — 2. habitude passée — 3. arrière-plan du récit — 4. hypothèse avec si. (1 pt chacun)", ["arrière-plan"]),
    pAns("Ex.4 : 1. lu — 2. entendues — 3. écrits — 4. vérifié. (1 pt chacun)", ["entendues"]),
    pAns("Ex.5 : titre (1 pt), chapeau complet (1 pt), paragraphe exact au présent (1 pt), citation correcte (1 pt).", ["citation"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...ficheS32(), pageBreak(), ...lessonS32(), pageBreak(),
    ...ficheS33(), pageBreak(), ...lessonS33(), pageBreak(),
    ...ficheS34(), pageBreak(), ...lessonS34(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 3", COLOR, [
      "Je comprends un flash d'information à la radio.",
      "Je nomme les quatre grands médias et les gens du métier.",
      "Je distingue l'information vérifiée de la rumeur.",
      "Je lis un article qui informe et qui raconte.",
      "Je reconnais les valeurs du présent, dont le présent de narration.",
      "Je reconnais les valeurs de l'imparfait, dont l'hypothèse avec « si ».",
      "J'accorde le participe passé avec avoir quand le COD est placé avant.",
      "Je présente un flash d'information avec les bonnes formules.",
      "Je rédige un article exact, avec un titre, un chapeau et une citation.",
    ], "PROCHAINE ÉTAPE → UNITÉ 4 : LA DÉLINQUANCE JUVÉNILE"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
