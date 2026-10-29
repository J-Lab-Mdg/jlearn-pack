// Français T7 — UNITÉ 2 — LES TRADITIONS (10 leçons + révision + test) — Séances 13 à 24 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet — les traditions
const SHADE = "E8DAEF";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 2 — LES TRADITIONS", title, slo,
  values: "respect des anciens, fihavanana, sens du partage", session, materials,
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

// passage de compréhension orale (S13)
function passageMoisson() {
  return box("PASSAGE D'ÉCOUTE — compte-rendu « La fête de la moisson »", [
    p("Samedi dernier, le village d'Ambohitsoa a célébré le santabary, la fête du premier riz de l'année. Dès l'aube, les familles se sont rassemblées sur la grande place, vêtues de leurs plus beaux lambas."),
    p("La fête a commencé par le kabary du doyen : il a remercié les ancêtres et souhaité une bonne récolte à tous. Ensuite, les jeunes filles ont pilé le riz nouveau pendant que les femmes préparaient le repas. À midi, chaque famille a partagé son plat avec ses voisins : personne n'a mangé seul. L'après-midi, les chants et les jeux ont rempli le village. Il fallait voir la joie des enfants !"),
    p("À la tombée de la nuit, chacun est rentré chez soi, heureux d'avoir partagé ce moment. Comme le disait une grand-mère : « Tant que nous fêterons le riz nouveau ensemble, notre village restera une seule famille. »", { after: 40 }),
  ]);
}
// texte de lecture (S15)
function texteRiz() {
  return box("TEXTE DE LECTURE — compte-rendu « Les traditions autour du riz »", [
    pr([run("Les traditions autour du riz", { bold: true, color: COLOR })], { after: 40 }),
    pr([run("Vendredi dernier, notre classe a passé la journée dans les rizières d'Antanimena. Voici le compte-rendu de notre sortie.", { italic: true })], { after: 60 }),
    p("Le matin, nous avons observé le repiquage. Les familles du village travaillaient ensemble, dans la boue jusqu'aux genoux : c'est le valin-tanana, l'entraide. « Aujourd'hui, nous repiquons le champ de l'un ; demain, tout le monde viendra dans le mien », nous a expliqué une paysanne."),
    p("Ensuite, un vieil agriculteur nous a parlé des coutumes. Dans ce village, il existe des fady : certains jours, il est interdit de travailler la terre, par respect pour les ancêtres. « Le riz est un don des anciens, nous a confié Rakoto. Ici, personne ne le gaspille, pas même un grain. »"),
    p("À la fin de la journée, nous sommes rentrés fatigués mais fiers : nous avions compris que, chez nous, le riz n'est pas seulement une nourriture. C'est un lien entre les vivants et les anciens, et entre les familles d'un même village.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 2 — LES TRADITIONS", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Nos traditions nous relient aux anciens.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre le compte-rendu d'une fête traditionnelle ;"),
    p("• nommer les traditions : fêtes, rites familiaux, entraide, fady ;"),
    p("• reconnaître le compte-rendu : introduction, déroulement, impression finale ;"),
    p("• employer la phrase impersonnelle : il faut, il est important de… ;"),
    p("• faire la transformation impersonnelle ;"),
    p("• utiliser la ponctuation qui exprime : ! ? … ;"),
    p("• présenter une tradition de ma famille ;"),
    p("• rédiger le compte-rendu d'une fête ;"),
    p("• lire un compte-rendu à haute voix.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le COMPTE-RENDU", { bold: true, color: COLOR }),
        run(" — raconter fidèlement un événement vécu, dans l'ordre (introduction → déroulement → impression).")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("respect des anciens, fihavanana, sens du partage.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S13 — Compréhension orale ----------
function ficheS13() {
  const meta = META("Compréhension orale : compte-rendu « La fête de la moisson »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'un compte-rendu entendu et reconstitue l'ordre des événements.",
    "1 / 12", "texte du passage, photographies (rizière, pilon, fête), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 1 : qu'est-ce que la culture ? Citez deux rites malgaches étudiés.")],
      [fp("Répondent."),
       fp("R.A. : tout ce qu'un peuple invente, partage et transmet ; le famadihana, la circoncision…")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Affichez les photographies : une rizière, un pilon, une fête de village. Demandez : quelle fête célèbre le premier riz de l'année ? Amenez le mot « santabary ».")],
      [fp("Observent, émettent des hypothèses."),
       fp("R.A. : c'est la fête de la moisson ; chez nous on l'appelle le santabary…")],
      "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : le compte-rendu d'une fête, La fête de la moisson. » Consigne : écouter sans écrire et repérer l'ordre des événements.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage lentement, de manière expressive. Questions globales : de quel événement parle-t-on ? Où ? Quand ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : la fête du premier riz (santabary), au village d'Ambohitsoa, samedi dernier.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites relever les étapes dans l'ordre : que s'est-il passé d'abord ? ensuite ? à la fin ? Notez au tableau : dès l'aube → le kabary → le repas partagé → les chants → le retour.")],
      [fp("Relèvent les étapes, les remettent en ordre."),
       fp("R.A. : d'abord le rassemblement et le kabary du doyen ; ensuite le riz pilé et le repas partagé ; enfin les chants, les jeux et le retour.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites remarquer : celui qui parle a assisté à la fête ; il raconte dans l'ordre, au passé, sans rien inventer. C'est un compte-rendu. Quels mots montrent le temps qui passe ?")],
      [fp("Répondent. Récapitulent."),
       fp("R.A. : samedi dernier, dès l'aube, ensuite, à midi, l'après-midi, à la tombée de la nuit.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : racontez la fête en trois phrases, dans l'ordre, au passé. Quelques binômes présentent.")],
      [fp("Résument oralement."),
       pAns("R.A. : Samedi, le village a fêté le santabary. Le doyen a prononcé un kabary, puis chaque famille a partagé son repas. La journée s'est terminée par des chants.", ["santabary"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel événement est raconté ? Où et quand ?"),
       fp("2. Remets dans l'ordre : le repas partagé — le kabary — les chants."),
       fp("3. Pourquoi dit-on que personne n'a mangé seul ?"),
       fp("4. Quelle phrase de la grand-mère as-tu retenue ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le santabary, à Ambohitsoa, samedi dernier — 2. kabary → repas → chants — 3. chaque famille a partagé son plat avec ses voisins — 4. « Tant que nous fêterons le riz nouveau ensemble… »", ["kabary"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS13() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("COMPRENDRE UN COMPTE-RENDU ENTENDU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageMoisson(),
    p("", { after: 80 }),
    sub("1. Le compte-rendu : j'écoute comme un témoin"),
    exLine([run("Celui qui parle "), run("a vu l'événement", { bold: true, color: C.SALMON, hl: true }), run(" : il raconte fidèlement.")],
      "il n'invente rien, il rapporte"),
    exLine([run("Il raconte "), run("dans l'ordre", { bold: true, color: C.SALMON, hl: true }), run(" : dès l'aube → ensuite → à la fin.")],
      "les mots du temps sont mes repères d'écoute"),
    exLine([run("Il parle "), run("au passé", { bold: true, color: C.SALMON, hl: true }), run(" : le village a célébré, les familles se sont rassemblées.")],
      "l'événement est terminé", { after: 80 }),
    sub("2. Vocabulaire — les mots de la fête"),
    mot("la moisson", "la récolte du riz mûr"),
    mot("le santabary", "la fête du premier riz de l'année"),
    mot("le doyen", "la personne la plus âgée, la plus respectée"),
    mot("piler le riz", "écraser le riz dans le grand mortier de bois"),
    mot("partager", "donner une part à chacun : personne ne mange seul"),
    p("", { after: 40 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Remets dans l'ordre : les chants — le kabary du doyen — le repas partagé."),
    p("2. Complète : « Tant que nous fêterons le riz nouveau ensemble, notre village restera ………. »", { after: 60 }),
  ];
}

// ---------- S14 — Lexique ----------
function ficheS14() {
  const meta = META("Lexique : les types de traditions ; le fady ; les valeurs familiales",
    "À la fin de la séance, l'apprenant nomme les grands types de traditions malgaches, explique ce qu'est un fady et emploie ces mots dans des phrases.",
    "2 / 12", "étiquettes de mots, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de la séance 13 : quel événement avons-nous écouté ? Dans quel ordre s'est-il déroulé ?")],
      [fp("Répondent."),
       fp("R.A. : le santabary ; le kabary, puis le repas partagé, puis les chants.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : quelles traditions existent dans vos familles ? Notez les propositions au tableau sans les classer.")],
      [fp("Proposent librement."),
       fp("R.A. : le famadihana, la demande en mariage, l'entraide aux champs, les interdits…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les types de traditions. Nous allons classer tout cela, et découvrir un mot important : le fady. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Tracez quatre colonnes : les fêtes — les rites familiaux — l'entraide — les fady. Faites classer les propositions du tableau.")],
      [fp("Classent les mots dans les colonnes."),
       fp("R.A. : santabary → fêtes ; famadihana → rites familiaux ; valin-tanana → entraide ; interdits → fady.")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Expliquez le fady : un interdit transmis par les anciens, que la communauté respecte. Faites trouver trois sortes d'exemples : fady d'un lieu, fady d'un jour, fady d'un groupe. Insistez sur le respect dû aux coutumes des autres régions.")],
      [fp("Donnent des exemples, notent."),
       fp("R.A. : dans tel village, il est interdit de travailler la terre le mardi ; sur tel lac, il est interdit de pêcher ; dans telle famille, on ne mange pas tel aliment.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des quatre types. Ajoutez les mots des valeurs : le fihavanana (le lien fraternel), l'entraide, le respect des anciens.")],
      [fp("Recopient, complètent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Procédé La Martinière : « Je donne la définition, vous écrivez le mot. » Un interdit des anciens ! La fête du premier riz ! L'entraide aux champs ! Puis en binômes : une phrase avec « fady » ou « fihavanana ».")],
      [fp("Écrivent sur l'ardoise. Rédigent une phrase."),
       pAns("R.A. : Dans le village de mon grand-père, il est fady de travailler la terre le jeudi.", ["fady"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Qu'est-ce qu'un fady ? Donne un exemple."),
       fp("2. Classe : le santabary, le valin-tanana, le famadihana."),
       fp("3. Que veut dire « fihavanana » ?"),
       fp("4. Écris une phrase avec « tradition »." )],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. un interdit transmis par les anciens ; ex. : ne pas pêcher sur tel lac — 2. fête — entraide — rite familial — 3. le lien fraternel entre les personnes — 4. exemple : Ma famille garde la tradition du repas partagé.", ["fihavanana"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS14() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES TRADITIONS, LE FADY, LES VALEURS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Vocabulaire — les quatre types de traditions"),
    mot("les fêtes", "le santabary, le nouvel an malgache (alahamady)"),
    mot("les rites familiaux", "le famadihana, la circoncision, la demande en mariage"),
    mot("l'entraide", "le valin-tanana : aujourd'hui chez toi, demain chez moi"),
    mot("les fady", "les interdits transmis par les anciens"),
    p("", { after: 60 }),
    sub("2. Le fady : un interdit qui vient des anciens"),
    exTitre(),
    exLine([run("Dans ce village, il est "), run("fady", { bold: true, color: C.SALMON, hl: true }), run(" de travailler la terre le mardi.")],
      "fady d'un jour"),
    exLine([run("Sur ce lac, il est "), run("fady", { bold: true, color: C.SALMON, hl: true }), run(" de pêcher.")],
      "fady d'un lieu"),
    exLine([run("Dans cette famille, on ne mange pas cet aliment.")],
      "fady d'un groupe — chaque région a les siens : je les respecte, même ailleurs que chez moi", { after: 80 }),
    sub("3. Vocabulaire — les mots des valeurs"),
    mot("le fihavanana", "le lien fraternel qui unit les personnes"),
    mot("le respect des anciens", "écouter, saluer, laisser parler d'abord"),
    p("", { after: 40 }),
    sub("4. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« une personne âgée, un ancien »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« un vieux »   "), run("[la politesse fait partie du respect des anciens]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — je classe :"),
    p("Mets chaque mot dans son type : le famadihana — le valin-tanana — l'alahamady — « il est interdit de pêcher ici ».", { after: 60 }),
  ];
}

// ---------- S15 — Compréhension écrite ----------
function ficheS15() {
  const meta = META("Compréhension écrite : « Les traditions autour du riz » — le compte-rendu",
    "À la fin de la séance, l'apprenant lit un compte-rendu, en dégage les informations essentielles et identifie sa structure : introduction, déroulement, impression finale.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : qu'est-ce qu'un fady ? Citez les quatre types de traditions.")],
      [fp("Répondent."),
       fp("R.A. : un interdit des anciens ; fêtes, rites familiaux, entraide, fady.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : qui a déjà participé au repiquage du riz ? Comment les familles s'organisent-elles ?")],
      [fp("Racontent brièvement."),
       fp("R.A. : on travaille ensemble ; les voisins viennent aider…")],
      "Échange oral", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : le compte-rendu d'une sortie scolaire, Les traditions autour du riz. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : qui raconte ? quel événement ? quand ?")],
      [fp("Lisent silencieusement. Répondent."),
       fp("R.A. : la classe raconte sa sortie dans les rizières d'Antanimena, vendredi dernier.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites repérer la structure : l'introduction (qui ? quoi ? où ? quand ?), le déroulement dans l'ordre (le matin, ensuite, à la fin), l'impression finale. Faites relever une citation et les mots « valin-tanana » et « fady ».")],
      [fp("Repèrent, soulignent, répondent."),
       fp("R.A. : introduction = les deux premières phrases ; déroulement = le repiquage puis les coutumes ; impression = « fatigués mais fiers » ; citation = « Le riz est un don des anciens… ».")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : le compte-rendu rapporte fidèlement un événement vécu, dans l'ordre, au passé, et se termine par une impression. Comparez avec l'article de presse de l'unité 1.")],
      [fp("Formulent la synthèse."),
       fp("R.A. : l'article informe sur un sujet ; le compte-rendu raconte un événement auquel l'auteur a assisté.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez les trois moments du déroulement et l'expression qui montre l'impression finale.")],
      [fp("Relèvent, présentent."),
       pAns("R.A. : le matin le repiquage ; ensuite les explications sur les fady ; à la fin le retour — « fatigués mais fiers ».", ["fiers"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Qui a écrit ce compte-rendu ? Quand a eu lieu la sortie ?"),
       fp("2. Qu'est-ce que le valin-tanana ?"),
       fp("3. Quel fady existe dans ce village ?"),
       fp("4. Recopie la phrase qui donne l'impression finale.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. la classe ; vendredi dernier — 2. l'entraide pour les travaux des champs — 3. certains jours, il est interdit de travailler la terre — 4. « nous sommes rentrés fatigués mais fiers… ».", ["valin-tanana"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS15() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LE COMPTE-RENDU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteRiz(),
    p("", { after: 80 }),
    sub("1. Le compte-rendu a trois parties"),
    exLine([run("L'introduction", { bold: true, color: C.SALMON, hl: true }), run(" : qui ? quoi ? où ? quand ?")],
      "« Vendredi dernier, notre classe a passé la journée dans les rizières… »"),
    exLine([run("Le déroulement", { bold: true, color: C.SALMON, hl: true }), run(" : les événements dans l'ordre.")],
      "le matin → ensuite → à la fin de la journée"),
    exLine([run("L'impression finale", { bold: true, color: C.SALMON, hl: true }), run(" : ce que l'on a ressenti.")],
      "« fatigués mais fiers »", { after: 80 }),
    sub("2. Le compte-rendu dit la vérité"),
    exTitre(),
    exLine([run("L'auteur "), run("a assisté", { bold: true, color: C.SALMON, hl: true }), run(" à l'événement et n'invente rien.")],
      "c'est sa grande différence avec le conte"),
    exLine([run("Il écrit "), run("au passé", { bold: true, color: C.SALMON, hl: true }), run(" : nous avons observé, les familles travaillaient.")],
      "passé composé pour les actions, imparfait pour le décor", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Souligne l'introduction. — 2. Numérote les trois moments du déroulement. — 3. Encadre l'impression finale.", { after: 60 }),
  ];
}

// ---------- S16 — Grammaire : la phrase impersonnelle ----------
function ficheS16() {
  const meta = META("Grammaire : la phrase impersonnelle",
    "À la fin de la séance, l'apprenant reconnaît le « il » impersonnel et construit des phrases impersonnelles correctes.",
    "4 / 12", "phrases au tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les trois parties du compte-rendu ?")],
      [fp("Répondent."),
       fp("R.A. : introduction, déroulement, impression finale.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Il arrive demain. » / « Il pleut sur les rizières. » Demandez : dans quelle phrase peut-on remplacer « il » par un prénom ?")],
      [fp("Essaient, comparent."),
       fp("R.A. : « Naina arrive demain » est possible ; « Naina pleut » est impossible !")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : la phrase impersonnelle. Le il qui ne désigne personne. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus au tableau : Il pleut. — Il faut respecter les fady. — Il est important de saluer les anciens. — Il existe des coutumes anciennes. Faites chercher qui est « il ».")],
      [fp("Constatent que « il » ne remplace rien."),
       fp("R.A. : ce « il » ne désigne ni une personne ni une chose : il est impersonnel.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites classer : verbes toujours impersonnels (pleuvoir, neiger, falloir) ; tournures impersonnelles (il est + adjectif + de…, il existe, il arrive). Le verbe reste toujours au singulier.")],
      [fp("Classent, notent la règle."),
       fp("R.A. : avec le il impersonnel, le verbe est toujours à la 3e personne du singulier.")],
      "Classement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites copier la trace écrite : le il impersonnel ne désigne personne ; il sert à parler du temps qu'il fait, de l'obligation (il faut), du jugement (il est important de…).")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : personnel ou impersonnel ? « Il pile le riz. » — « Il faut partager. » — « Il neige sur l'Ankaratra. » — « Il salue le doyen. » Puis chacun écrit une phrase avec « il est important de ».")],
      [fp("Lèvent l'ardoise, justifient."),
       pAns("R.A. : personnel — impersonnel — impersonnel — personnel ; exemple : Il est important de respecter les fady du village.", ["impersonnel"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Souligne les phrases impersonnelles : « Il écoute le kabary. » « Il faut écouter le kabary. » « Il pleut. »"),
       fp("2. Complète : Il est interdit de … / Il faut …"),
       fp("3. Pourquoi dit-on que ce « il » est impersonnel ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. « Il faut écouter le kabary. » et « Il pleut. » — 2. réponses libres correctes — 3. parce qu'il ne désigne ni une personne ni une chose.", ["impersonnel"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS16() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA PHRASE IMPERSONNELLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le « il » impersonnel ne désigne personne"),
    exTitre(),
    exLine([run("Il pleut", { bold: true, color: C.SALMON, hl: true }), run(" sur les rizières.")],
      "qui pleut ? personne ! ce « il » ne remplace rien"),
    exLine([run("Il faut", { bold: true, color: C.SALMON, hl: true }), run(" respecter les fady.")],
      "« il faut » = l'obligation"),
    exLine([run("Il est important de", { bold: true, color: C.SALMON, hl: true }), run(" saluer les anciens.")],
      "« il est + adjectif + de » = le jugement", { after: 80 }),
    sub("2. Le test pour reconnaître le « il » impersonnel"),
    exLine([run("Il arrive demain. → "), run("Naina arrive demain.", { bold: true })], "remplacement possible → il PERSONNEL"),
    exLine([run("Il pleut. → "), run("Naina pleut ??", { bold: true })], "remplacement impossible → il IMPERSONNEL !", { after: 80 }),
    sub("3. Le verbe reste au singulier"),
    exTitre(),
    exLine([run("Il "), run("existe", { bold: true, color: C.SALMON, hl: true }), run(" des coutumes très anciennes.")],
      "même si « des coutumes » est au pluriel, le verbe suit « il »", { after: 80 }),
    sub("Exercice — personnel ou impersonnel ?"),
    p("1. Il pile le riz. — 2. Il faut partager. — 3. Il neige sur l'Ankaratra. — 4. Complète : « Il est interdit de ……… »", { after: 60 }),
  ];
}

// ---------- S17 — Grammaire : la transformation impersonnelle ----------
function ficheS17() {
  const meta = META("Grammaire : la transformation impersonnelle",
    "À la fin de la séance, l'apprenant transforme une phrase personnelle en phrase impersonnelle et accorde correctement le verbe.",
    "5 / 12", "phrases au tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : comment reconnaît-on le « il » impersonnel ? Donnez deux exemples.")],
      [fp("Répondent."),
       fp("R.A. : on ne peut pas le remplacer par un prénom ; il pleut, il faut…")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Un malheur est arrivé. » / « Il est arrivé un malheur. » Demandez : que dit chaque phrase ? Qu'est-ce qui a changé ?")],
      [fp("Comparent."),
       fp("R.A. : le sens est le même ; le sujet « un malheur » est passé après le verbe, « il » a pris sa place.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : la transformation impersonnelle. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Une fête a été organisée. → Il a été organisé une fête. / Des coutumes existent ici. → Il existe ici des coutumes. Faites repérer les trois changements.")],
      [fp("Repèrent les changements."),
       fp("R.A. : « il » devient le sujet ; le vrai sujet passe après le verbe ; le verbe se met au singulier.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites verbaliser les trois étapes et insistez : le verbe s'accorde avec « il », donc toujours au singulier, même si le sujet réel est au pluriel : « Il est arrivé des invités. »")],
      [fp("Formulent les étapes, notent."),
       fp("R.A. : 1. il prend la place du sujet ; 2. le sujet réel passe après le verbe ; 3. le verbe reste au singulier.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : la transformation impersonnelle met l'action en avant ; on la rencontre souvent dans les règlements et les comptes-rendus : « Il est interdit de… », « Il a été décidé de… ».")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : transformez. « Une décision a été prise. » — « Des chants ont été chantés. » — « Un kabary a été prononcé. »")],
      [fp("Transforment, lèvent l'ardoise."),
       pAns("R.A. : Il a été pris une décision. — Il a été chanté des chants. — Il a été prononcé un kabary.", ["Il a été"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Transforme : « Une grande fête a été organisée au village. »"),
       fp("2. Transforme : « Des invités sont arrivés. »"),
       fp("3. Pourquoi le verbe reste-t-il au singulier ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Il a été organisé une grande fête au village. — 2. Il est arrivé des invités. — 3. parce qu'il s'accorde avec le « il » impersonnel.", ["singulier"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(17, TOTAL, meta, rows, "s17", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS17() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 17", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA TRANSFORMATION IMPERSONNELLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Transformer : trois étapes"),
    pr([run("Une fête a été organisée.  →  ", { bold: true }), run("Il", { bold: true, color: C.SALMON, hl: true }), run(" a été organisé ", { bold: true }), run("une fête", { bold: true, color: C.SALMON, hl: true }), run(".", { bold: true })], { after: 50 }),
    exLine([run("1. "), run("« Il » prend la place du sujet", { bold: true, color: C.SALMON, hl: true }), run(".")], "le il impersonnel se met en tête"),
    exLine([run("2. "), run("Le sujet réel passe après le verbe", { bold: true, color: C.SALMON, hl: true }), run(".")], "une fête glisse derrière"),
    exLine([run("3. "), run("Le verbe se met au singulier", { bold: true, color: C.SALMON, hl: true }), run(".")], "il s'accorde avec « il », pas avec le sujet réel", { after: 80 }),
    sub("2. Attention au pluriel !"),
    exTitre(),
    exLine([run("Des invités sont arrivés.  →  Il "), run("est arrivé", { bold: true, color: C.SALMON, hl: true }), run(" des invités.")],
      "« des invités » est au pluriel, mais le verbe reste au singulier"),
    exLine([run("Il "), run("a été décidé", { bold: true, color: C.SALMON, hl: true }), run(" de replanter les rizières.")],
      "tournure fréquente dans les comptes-rendus et les règlements", { after: 80 }),
    sub("Exercice — je transforme comme dans l'exemple :"),
    p("1. « Une décision a été prise. » → ……… — 2. « Un kabary a été prononcé. » → ……… — 3. « Des chants ont été chantés. » → ………", { after: 60 }),
  ];
}

// ---------- S18 — Grammaire : la ponctuation expressive ----------
function ficheS18() {
  const meta = META("Grammaire : la ponctuation qui exprime — exclamation, interrogation, suspension",
    "À la fin de la séance, l'apprenant emploie correctement le point d'exclamation, le point d'interrogation et les points de suspension pour exprimer une émotion ou une attente.",
    "6 / 12", "phrases au tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : transformez « Une fête a été organisée » en phrase impersonnelle.")],
      [fp("Répondent."),
       fp("R.A. : Il a été organisé une fête.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez sans ponctuation : « quelle belle moisson ». Lisez-la de trois manières (plate, joyeuse, interrogative). Demandez : qu'est-ce qui change ?")],
      [fp("Écoutent, comparent."),
       fp("R.A. : la voix change le sens ; à l'écrit, c'est la ponctuation qui le montre.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : la ponctuation qui exprime : ! ? … »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Quelle belle moisson ! — Pourquoi respecte-t-on ce fady ? — Grand-mère murmura : « C'était il y a si longtemps… » Faites associer chaque signe à ce qu'il exprime.")],
      [fp("Associent signe et expression."),
       fp("R.A. : ! = joie, surprise, ordre ; ? = question ; … = hésitation, souvenir, attente.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites trouver d'autres emplois : l'ordre (Écoutez le doyen !), l'étonnement (Pas un grain gaspillé !), la phrase laissée en suspens. À l'oral : la voix monte avec ?, devient plus forte avec !, s'éteint doucement avec …")],
      [fp("Proposent des exemples, notent."),
       fp("R.A. : les signes expressifs traduisent à l'écrit ce que la voix fait à l'oral.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : trois signes pour exprimer : ! (émotion, ordre), ? (question), … (hésitation, attente). Un compte-rendu vivant en contient quelques-uns, bien choisis.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : ajoutez le bon signe. « Comme le riz nouveau sent bon » — « Qui a préparé le repas » — « Je me souviens encore de ce jour » Puis lecture expressive des trois phrases.")],
      [fp("Écrivent, lisent avec le ton."),
       pAns("R.A. : Comme le riz nouveau sent bon ! — Qui a préparé le repas ? — Je me souviens encore de ce jour…", ["!"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Ajoute la ponctuation : « Quelle joie » — « Où a lieu la fête » — « Il hésita puis se tut »"),
       fp("2. Qu'exprime chaque signe choisi ?"),
       fp("3. Écris une phrase exclamative sur une fête de ton village.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Quelle joie ! — Où a lieu la fête ? — Il hésita puis se tut… — 2. joie / question / hésitation — 3. exemple : Quelle ambiance pendant le santabary !", ["exclamative"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS18() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 18", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA PONCTUATION QUI EXPRIME : ! ? …", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Trois signes, trois expressions"),
    exTitre(),
    exLine([run("Quelle belle moisson "), run("!", { bold: true, color: C.SALMON, hl: true })],
      "l'exclamation : joie, surprise, ordre — la voix devient plus forte"),
    exLine([run("Pourquoi respecte-t-on ce fady "), run("?", { bold: true, color: C.SALMON, hl: true })],
      "l'interrogation : la voix monte à la fin"),
    exLine([run("Grand-mère murmura : « C'était il y a si longtemps"), run("…", { bold: true, color: C.SALMON, hl: true }), run(" »")],
      "la suspension : hésitation, souvenir, attente — la voix s'éteint doucement", { after: 80 }),
    sub("2. La même phrase, trois sens"),
    exLine([run("Tu viens à la fête"), run(".", { bold: true })], "je constate"),
    exLine([run("Tu viens à la fête"), run("?", { bold: true, color: C.SALMON, hl: true })], "je demande"),
    exLine([run("Tu viens à la fête"), run("!", { bold: true, color: C.SALMON, hl: true })], "je m'exclame ou j'ordonne — la ponctuation change tout !", { after: 80 }),
    sub("Exercice — ajoute ! ? ou … :"),
    p("1. Comme le riz nouveau sent bon ……… — 2. Qui a préparé le repas ……… — 3. Je me souviens encore de ce jour ………", { after: 60 }),
  ];
}

// ---------- S19 — Production orale ----------
function ficheS19() {
  const meta = META("Production orale : présenter une tradition de sa famille",
    "À la fin de la séance, l'apprenant présente oralement une tradition de sa famille en trois temps : situer, raconter, expliquer pourquoi il y tient.",
    "7 / 12", "plan au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : qu'expriment ! ? et … ? Comment la voix les traduit-elle ?")],
      [fp("Répondent."),
       fp("R.A. : émotion, question, hésitation ; plus fort, voix qui monte, voix qui s'éteint.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Racontez brièvement une tradition de votre propre famille (modèle du maître). Demandez : qu'avez-vous retenu ?")],
      [fp("Écoutent, relèvent les informations."),
       fp("R.A. : quand elle a lieu, ce qu'on fait, pourquoi le maître y tient.")],
      "Modélisation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : présenter une tradition de sa famille, en une minute. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Dégagez le plan au tableau : 1. je situe (quelle tradition ? quand ? où ?) ; 2. je raconte ce qu'on fait ; 3. je dis pourquoi j'y tiens. Rappelez l'intonation expressive de la séance 18.")],
      [fp("Notent le plan.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Chacun choisit sa tradition et prépare ses trois temps au brouillon (mots clés seulement, pas de phrases entières).")],
      [fp("Préparent leurs mots clés.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse", "(passage)"],
      [fp("Faites passer un maximum d'apprenants. Grille d'écoute pour la classe : les trois temps sont-ils là ? La voix est-elle expressive ?")],
      [fp("Présentent. Écoutent, évaluent avec la grille."),
       pAns("R.A. : Chaque année en juin, ma famille se réunit pour le famadihana. Nous chantons, nous dansons, nous changeons les lambas. J'y tiens parce que toute la famille se retrouve !", ["famadihana"], { size: SZ.FICHE })],
      "Passages individuels", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : faites reformuler les présentations trop rapides ; encouragez une exclamation finale expressive.")],
      [fp("Reformulent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. les trois temps (situer, raconter, pourquoi) — 2. voix expressive — 3. phrases correctes — 4. regard vers le public.")],
      [fp("S'auto-évaluent avec la grille.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19", "PRODUCTION ORALE", COLOR);
}
function lessonS19() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("PRÉSENTER UNE TRADITION DE MA FAMILLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Mon plan en trois temps (une minute)"),
    exLine([run("Je situe", { bold: true, color: C.SALMON, hl: true }), run(" : quelle tradition ? quand ? où ?")], "« Chaque année en juin, ma famille… »"),
    exLine([run("Je raconte", { bold: true, color: C.SALMON, hl: true }), run(" : ce que l'on fait, dans l'ordre.")], "deux ou trois actions suffisent"),
    exLine([run("Je dis pourquoi j'y tiens", { bold: true, color: C.SALMON, hl: true }), run(".")], "je termine par une exclamation : la voix est plus forte !", { after: 80 }),
    sub("2. Un modèle complet"),
    pr([run("« Chaque année en juin, ma famille se réunit au village pour le famadihana. Nous chantons, nous dansons et nous changeons les lambas de nos ancêtres. J'y tiens beaucoup, parce que toute la famille se retrouve. Quelle belle journée ! »", { italic: true })], { after: 80 }),
    sub("3. Vocabulaire — pour raconter à l'oral"),
    mot("situer", "dire quand et où cela se passe"),
    mot("tenir à quelque chose", "y être attaché : j'y tiens !"),
    p("", { after: 40 }),
    sub("Exercice — à toi de présenter :"),
    p("Complète pour ta famille : « Chaque année, ……… Nous ……… J'y tiens parce que ……… Quelle ……… ! »", { after: 60 }),
  ];
}

// ---------- S20 — Production écrite (1) ----------
function ficheS20() {
  const meta = META("Production écrite (1) : le compte-rendu d'une fête — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit un événement vécu, rassemble ses idées avec les questions guides et construit le plan de son compte-rendu.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : les trois parties du compte-rendu ? Le temps des verbes ?")],
      [fp("Répondent."),
       fp("R.A. : introduction, déroulement, impression finale ; le passé (passé composé, imparfait).")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : à quelle fête ou cérémonie avez-vous assisté récemment ? Listez les propositions au tableau.")],
      [fp("Proposent."),
       fp("R.A. : un mariage, le santabary, une fête de l'école, un famadihana…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : le compte-rendu d'une fête. Aujourd'hui : les idées et le plan ; la rédaction aura lieu à la prochaine séance. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Construisez ensemble un exemple : la fête de fin d'année de l'école. Remplissez la carte des questions : qui ? quoi ? où ? quand ? Puis listez les moments dans l'ordre.")],
      [fp("Participent à l'exemple collectif."),
       fp("R.A. : introduction = la classe, la fête, la cour, vendredi ; déroulement = les discours, les danses, le goûter ; impression = joie.")],
      "Exemple collectif", "Tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit SON événement vécu, remplit sa carte des questions, puis écrit son plan en trois lignes : introduction / trois moments dans l'ordre / impression finale.")],
      [fp("Remplissent la carte, écrivent le plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques plans sont lus. La classe vérifie : les questions ont-elles toutes une réponse ? Les moments sont-ils dans l'ordre ?")],
      [fp("Lisent, vérifient, corrigent.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun améliore son plan : ajouter un détail vrai (une phrase entendue, un plat, un vêtement) qui rendra le compte-rendu vivant.")],
      [fp("Complètent leur plan."),
       pAns("R.A. : détail ajouté : « Grand-père a dit : Le riz nouveau a toujours le goût de l'enfance. »", ["détail"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du plan : 1. l'introduction répond à qui-quoi-où-quand — 2. trois moments dans l'ordre — 3. une impression finale est prévue.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS20() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON COMPTE-RENDU (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Avant d'écrire : trois gestes"),
    exLine([run("Je choisis un événement que j'ai vécu", { bold: true, color: C.SALMON, hl: true }), run(".")], "un mariage, le santabary, une fête de l'école — jamais inventé !"),
    exLine([run("Je remplis ma carte des questions", { bold: true, color: C.SALMON, hl: true }), run(" : qui ? quoi ? où ? quand ?")], "ce sera mon introduction"),
    exLine([run("Je liste les moments dans l'ordre", { bold: true, color: C.SALMON, hl: true }), run(" : d'abord, ensuite, enfin.")], "ce sera mon déroulement", { after: 80 }),
    sub("2. Un exemple de plan"),
    exLine([run("Introduction : ", { bold: true }), run("Samedi dernier, notre quartier a fêté le santabary.", { italic: true })], "qui ? quoi ? où ? quand ?"),
    exLine([run("Déroulement : ", { bold: true }), run("le kabary → le repas partagé → les chants.")], "trois moments, dans l'ordre"),
    exLine([run("Impression : ", { bold: true }), run("une journée inoubliable.")], "ce que j'ai ressenti"),
    exLine([run("Mon détail vrai : ", { bold: true }), run("« Le riz nouveau a toujours le goût de l'enfance », a dit grand-père.", { italic: true })], "un détail vécu rend le compte-rendu vivant", { after: 80 }),
    sub("Exercice — ton plan en trois lignes :"),
    p("Choisis une fête que tu as vécue. Écris l'introduction (une phrase), les trois moments, l'impression finale.", { after: 60 }),
  ];
}

// ---------- S21 — Production écrite (2) ----------
function ficheS21() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son compte-rendu au passé, en huit à dix lignes, puis le relit et l'améliore avec la grille.",
    "9 / 12", "plans de la séance 20, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre plan. Quels temps allons-nous employer ?")],
      [fp("Relisent leur plan."),
       fp("R.A. : le passé composé pour les actions, l'imparfait pour le décor.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez au tableau : « on a manger du riz cété bien ». Demandez : que faut-il améliorer ?")],
      [fp("Critiquent, proposent."),
       fp("R.A. : orthographe, majuscule, phrase plus riche : « Nous avons mangé le riz nouveau : quel régal ! »")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons le compte-rendu complet, puis nous le relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; les trois parties ; les connecteurs du temps ; une phrase impersonnelle (« Il fallait voir… », « Il a été organisé… ») ; une ponctuation expressive bien choisie.")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle à partir du plan. Circulez, aidez à transformer les mots clés en phrases complètes.")],
      [fp("Rédigent leur compte-rendu.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : les trois parties ? les verbes au passé ? la phrase impersonnelle ? la ponctuation expressive ? les majuscules et les points ?")],
      [fp("Relisent, cochent la grille, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun souligne une réussite et propose une amélioration chez son voisin.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : réussite = le détail vrai ; amélioration = ajouter « ensuite » entre deux moments.", ["amélioration"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : structure (2) — temps du passé (2) — phrase impersonnelle (1) — ponctuation expressive (1) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS21() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON COMPTE-RENDU (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("J'écris "), run("au passé", { bold: true, color: C.SALMON, hl: true }), run(" : passé composé pour les actions, imparfait pour le décor.")], "« Le soleil brillait. Le doyen a pris la parole. »"),
    exLine([run("Je relie les moments : "), run("d'abord, ensuite, enfin", { bold: true, color: C.SALMON, hl: true }), run(".")], "le lecteur suit la journée pas à pas"),
    exLine([run("J'emploie une "), run("phrase impersonnelle", { bold: true, color: C.SALMON, hl: true }), run(".")], "« Il fallait voir la joie des enfants ! »", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes trois parties", { bold: true, color: C.SALMON, hl: true }), run(" : introduction, déroulement, impression.")], null),
    exLine([run("Mes verbes", { bold: true, color: C.SALMON, hl: true }), run(" sont au passé.")], "a célébré, se sont rassemblées, brillait"),
    exLine([run("Ma ponctuation expressive", { bold: true, color: C.SALMON, hl: true }), run(" est bien choisie : ! ? …")], "une ou deux, pas plus", { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("on a manger du riz cété bien  →  Nous avons mangé le riz nouveau : "), run("quel régal !", { bold: true, color: C.SALMON, hl: true })],
      "je corrige ET j'enrichis : une vraie phrase, une exclamation", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« la fete cété joli on a danser » → ………", { after: 60 }),
  ];
}

// ---------- S22 — Lecture-fluidité ----------
function ficheS22() {
  const meta = META("Lecture-fluidité : lire un compte-rendu à haute voix",
    "À la fin de la séance, l'apprenant lit un compte-rendu à haute voix, avec une voix expressive qui respecte la ponctuation.",
    "10 / 12", "texte de la séance 15, crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : que fait la voix devant ! ? et … ?")],
      [fp("Répondent."),
       fp("R.A. : plus forte, elle monte, elle s'éteint doucement.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez un paragraphe du texte de la séance 15 de deux façons : plate puis expressive. Demandez : quelle lecture donne envie d'écouter ?")],
      [fp("Comparent."),
       fp("R.A. : la lecture expressive, qui suit la ponctuation.")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire un compte-rendu comme si on y était. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites marquer le texte au crayon : / pour la virgule, // pour le point ; entourer ! ? … et les guillemets des citations.")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Lecture en binômes : chacun lit un paragraphe, l'autre suit avec la grille (pauses, voix expressive, citations).")],
      [fp("S'entraînent en binômes.")],
      "Binômes", "Grille"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages devant la classe. Insistez sur le changement de voix pour les citations : « Le riz est un don des anciens… »")],
      [fp("Lisent devant la classe, écoutent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : faites relire les phrases avalées trop vite ; travaillez la respiration par groupes de souffle.")],
      [fp("Relisent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. pauses respectées — 2. voix expressive sur ! ? … — 3. changement de voix pour la citation — 4. débit régulier.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS22() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN COMPTE-RENDU À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Ma voix suit la ponctuation expressive"),
    exLine([run("Il fallait voir la joie des enfants "), run("!", { bold: true, color: C.SALMON, hl: true })], "la voix devient plus forte"),
    exLine([run("« C'était il y a si longtemps"), run("…", { bold: true, color: C.SALMON, hl: true }), run(" »")], "la voix s'éteint doucement"),
    exLine([run("« Le riz est un don des anciens »", { bold: true, color: C.SALMON, hl: true }), run(", nous a confié Rakoto.")], "citation : je change légèrement de voix", { after: 80 }),
    sub("2. Je prépare ma lecture"),
    exLine([run("Je marque "), run("/ et //", { bold: true, color: C.SALMON, hl: true }), run(" au crayon, j'entoure ! ? … et les guillemets.")],
      "un texte préparé se lit deux fois mieux"),
    exLine([run("Je lis par "), run("groupes de souffle", { bold: true, color: C.SALMON, hl: true }), run(", comme si je racontais à un ami.")],
      "ni trop vite, ni trop lentement", { after: 80 }),
    sub("Exercice — marque puis lis à haute voix :"),
    p("« À midi, chaque famille a partagé son plat avec ses voisins : personne n'a mangé seul. Il fallait voir la joie des enfants ! »", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 2 : LES TRADITIONS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les traditions : ", { bold: true }), run("les fêtes (santabary, alahamady), les rites familiaux (famadihana, circoncision), l'entraide (valin-tanana), les fady.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les valeurs : ", { bold: true }), run("le fihavanana, le respect des anciens, le sens du partage.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le compte-rendu :"),
    p("Raconter fidèlement un événement vécu, au passé, dans l'ordre. Structure : introduction (qui ? quoi ? où ? quand ?) → déroulement (d'abord, ensuite, enfin) → impression finale.", { after: 80 }),
    sub("3. La phrase impersonnelle :"),
    p("Le « il » impersonnel ne désigne personne : il pleut, il faut, il est important de… Le verbe reste toujours au singulier. Test : si « il » ne peut pas être remplacé par un prénom, il est impersonnel.", { after: 80 }),
    sub("4. La transformation impersonnelle :"),
    p("Une fête a été organisée → Il a été organisé une fête. « Il » prend la place du sujet, le sujet réel passe après le verbe, le verbe se met au singulier.", { after: 80 }),
    sub("5. La ponctuation qui exprime :"),
    p("! = émotion ou ordre (voix plus forte) ; ? = question (voix qui monte) ; … = hésitation ou attente (voix qui s'éteint).", { after: 80 }),
    sub("6. Écrire et dire :"),
    p("Présenter une tradition : situer → raconter → dire pourquoi j'y tiens. Rédiger un compte-rendu : plan, passé composé et imparfait, une phrase impersonnelle, une ponctuation expressive bien choisie.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces traditions (fête, rite familial, entraide, fady) : 1. le valin-tanana 2. le santabary 3. « il est interdit de pêcher sur ce lac » 4. le famadihana.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Personnel ou impersonnel ? 1. « Il pile le riz nouveau. » 2. « Il faut respecter les anciens. » 3. « Il pleut sur la rizière. » 4. « Il raconte la fête. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Transforme en phrase impersonnelle : 1. « Une décision a été prise. » 2. « Des invités sont arrivés. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Ajoute ! ? ou … : 1. « Quelle belle fête » 2. « Où se déroule le santabary » 3. « Grand-mère se souvenait » 4. « Écoutez le doyen »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris l'introduction (une ou deux phrases) du compte-rendu d'une fête de ton village : réponds à qui ? quoi ? où ? quand ?")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. entraide — 2. fête — 3. fady — 4. rite familial. (1 pt chacun)", ["fady"]),
    pAns("Ex.2 : 1. personnel — 2. impersonnel — 3. impersonnel — 4. personnel. (1 pt chacun)", ["impersonnel"]),
    pAns("Ex.3 : 1. Il a été pris une décision. — 2. Il est arrivé des invités. (2 pts chacune)", ["Il a été pris"]),
    pAns("Ex.4 : 1. ! — 2. ? — 3. … — 4. ! (1 pt chacun)", ["!"]),
    pAns("Ex.5 : exemple : Dimanche dernier, les habitants d'Ambohitsoa ont célébré le santabary sur la place du village. (qui-quoi-où-quand : 4 pts)", ["santabary"]),
  ];
}

// ---------- Révision (S23) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s23", "SÉANCE 23 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 2 : LES TRADITIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite les quatre types de traditions, avec un exemple chacun."),
    pAns("R.A. : fêtes (santabary), rites familiaux (famadihana), entraide (valin-tanana), fady (interdit de pêcher sur tel lac).", ["valin-tanana"]),
    p("2. Qu'est-ce qu'un fady ? Donne les trois sortes d'exemples."),
    pAns("R.A. : un interdit transmis par les anciens ; fady d'un lieu, d'un jour, d'un groupe.", ["fady"]),
    p("3. Quelles sont les trois parties du compte-rendu ?"),
    pAns("R.A. : l'introduction (qui-quoi-où-quand), le déroulement dans l'ordre, l'impression finale.", ["déroulement"]),
    p("4. Quelle est la grande différence entre le compte-rendu et le conte ?"),
    pAns("R.A. : le compte-rendu rapporte fidèlement un événement réel et vécu ; il n'invente rien.", ["fidèlement"]),
    p("5. Comment reconnaît-on le « il » impersonnel ?"),
    pAns("R.A. : on ne peut pas le remplacer par un prénom : « il pleut », « il faut ».", ["impersonnel"]),
    p("6. Complète : Il est important de … / Il est interdit de …"),
    pAns("R.A. : réponses libres correctes : Il est important de saluer les anciens.", ["important"]),
    p("7. Transforme : « Une grande fête a été organisée. »"),
    pAns("R.A. : Il a été organisé une grande fête.", ["Il a été organisé"]),
    p("8. Pourquoi le verbe reste-t-il au singulier dans « Il est arrivé des invités » ?"),
    pAns("R.A. : parce qu'il s'accorde avec le « il » impersonnel, pas avec le sujet réel.", ["singulier"]),
    p("9. Qu'expriment ! ? et … ? Que fait la voix pour chacun ?"),
    pAns("R.A. : émotion/ordre (voix plus forte), question (voix qui monte), hésitation/attente (voix qui s'éteint).", ["voix"]),
    p("10. Donne le plan d'une présentation orale d'une tradition."),
    pAns("R.A. : je situe, je raconte, je dis pourquoi j'y tiens — et je termine par une exclamation.", ["je situe"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« Samedi dernier, il a été organisé une grande fête au village. Il fallait voir la joie des enfants ! Les anciens ont raconté l'histoire de la moisson, et chaque famille a partagé son repas avec ses voisins. »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("il a été organisé", { bold: true, color: C.SALMON, hl: true }), run(" [tournure impersonnelle : verbe au singulier], "), run("fallait", { bold: true, color: C.SALMON, hl: true }), run(" [imparfait de falloir : -ait], "), run("ont raconté", { bold: true, color: C.SALMON, hl: true }), run(" [passé composé avec avoir], "), run("ses voisins", { bold: true, color: C.SALMON, hl: true }), run(" [ses = les voisins de la famille].")], { after: 60 }),
  ];
}

// ---------- Test (S24) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s24", "SÉANCE 24 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 2 : LES TRADITIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : fady — fihavanana — santabary — valin-tanana. 1. Le … est la fête du premier riz. 2. Grâce au …, les voisins repiquent ensemble. 3. Sur ce lac, pêcher est un …. 4. Le … unit les familles du village.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Souligne les phrases impersonnelles : 1. « Il salue le doyen. » 2. « Il faut écouter les anciens. » 3. « Il existe des coutumes très anciennes. » 4. « Il prépare le repas. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Transforme en phrase impersonnelle : 1. « Un kabary a été prononcé. » 2. « Des chants ont été chantés. » Attention au singulier !")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Ajoute ! ? ou … et dis ce que le signe exprime : 1. « Quelle moisson » 2. « Qui a pilé le riz » 3. « C'était il y a si longtemps »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige le compte-rendu d'une fête que tu as vécue (cinq à six lignes) : introduction, deux moments dans l'ordre, impression finale. Emploie une phrase impersonnelle.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : santabary — valin-tanana — fady — fihavanana. (1 pt chacun)", ["fihavanana"]),
    pAns("Ex.2 : phrases 2 et 3. (2 pts chacune)", ["impersonnelles"]),
    pAns("Ex.3 : 1. Il a été prononcé un kabary. — 2. Il a été chanté des chants. (2 pts chacune, singulier compris)", ["Il a été prononcé"]),
    pAns("Ex.4 : 1. ! (émotion) — 2. ? (question) — 3. … (souvenir, hésitation). (au choix 4 pts)", ["émotion"]),
    pAns("Ex.5 : introduction complète (1 pt), moments dans l'ordre au passé (1 pt), impression finale (1 pt), phrase impersonnelle correcte (1 pt).", ["impersonnelle"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...ficheS17(), pageBreak(), ...lessonS17(), pageBreak(),
    ...ficheS18(), pageBreak(), ...lessonS18(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 2", COLOR, [
      "Je comprends le compte-rendu d'une fête traditionnelle.",
      "Je nomme les quatre types de traditions, avec des exemples.",
      "J'explique ce qu'est un fady et je respecte ceux des autres régions.",
      "Je reconnais le compte-rendu : introduction, déroulement, impression finale.",
      "Je reconnais le « il » impersonnel grâce au test du prénom.",
      "Je fais la transformation impersonnelle en gardant le verbe au singulier.",
      "J'emploie la ponctuation qui exprime : ! ? …",
      "Je présente une tradition de ma famille en trois temps.",
      "Je rédige le compte-rendu d'une fête vécue et je le relis avec la grille.",
    ], "PROCHAINE ÉTAPE → UNITÉ 3 : LES MÉDIAS"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
