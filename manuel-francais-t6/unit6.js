// Français T6 — UNITÉ 6 — LE MONDE IMAGINAIRE (10 leçons + révision + test) — Séances 61 à 72 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "AD1457"; // magenta monde imaginaire
const SHADE = "F8BBD0";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 6 — LE MONDE IMAGINAIRE", title, slo,
  values: "autonomie, maîtrise de soi", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.SALMON, hl: true }), ...(expl ? [run("  —  " + expl)] : [])]);
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

// conte de compréhension orale (S61)
function conteFaralahy() {
  return box("PASSAGE D'ÉCOUTE — conte « Faralahy et l'oiseau de pluie »", [
    p("Il était une fois, au pied des grandes montagnes, un village heureux où les rizières brillaient comme des miroirs. Mais un jour, la pluie cessa. Les rizières se fendirent, le fleuve devint un fil, et le vieux chef annonça : « Seul l'oiseau de pluie, qui vit au sommet de la montagne, peut nous sauver. Qui ira le chercher ? »"),
    p("L'aîné de ses trois fils partit le premier. Il courut si vite qu'il ne vit pas le vieux caméléon tombé dans une crevasse. « Je n'ai pas de temps à perdre ! » lança-t-il. Au sommet, l'oiseau s'envola avant même qu'il tendît la main. Le deuxième fils grimpa à son tour, bondit sur l'oiseau pour l'attraper — et ne saisit qu'une plume. Il redescendit furieux."),
    p("Alors partit Faralahy, le plus jeune. Il marcha d'un pas égal, sans courir. Quand il traversa la crevasse, il entendit une petite voix : c'était le caméléon. Faralahy le souleva doucement et le posa sur une branche. « Tu avances sans te presser et tu t'arrêtes pour les petits, dit le caméléon. Monte : l'oiseau n'attend que ceux-là. » Au sommet, Faralahy s'assit, ouvrit la main et attendit sans bouger. L'oiseau de pluie vint s'y poser de lui-même."),
    p("Le soir, quand Faralahy rentra au village, l'oiseau chanta sur son épaule — et la pluie tomba enfin sur les rizières. Depuis ce jour, on dit dans le village : la pluie ne vient pas à celui qui court, elle vient à celui qui sait attendre.", { after: 40 }),
  ]);
}
// fable de lecture (S63)
function fableCameleon() {
  return box("TEXTE DE LECTURE — fable « Le merle et le caméléon »", [
    p("Un merle et un caméléon vivaient sur le même tamarinier, au bord du chemin."),
    p("« Que tu es lent ! se moquait le merle. Moi, je traverse le village en un battement d'ailes ; toi, tu mets la journée pour changer de branche. »"),
    p("« Je ne vais pas vite, répondait le caméléon, mais je regarde devant et je pense à l'après. »"),
    p("Un matin, des enfants tendirent un piège sous l'arbre : des graines dorées sur un filet caché. Le merle fonça sans regarder ; le filet se referma sur lui. Le caméléon, arrivé bien plus tard, fit le tour du piège de ses gros yeux prudents, avança une patte, la retira, et s'en alla manger plus loin. Le soir, les enfants relâchèrent le merle, trop maigre à leur goût — mais il y perdit ses plus belles plumes."),
    p("Depuis ce jour, le merle ne se moque plus de personne."),
    p("Morale : rien ne sert de courir ; qui regarde devant et pense à l'après arrive entier.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 6 — LE MONDE IMAGINAIRE", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("Angano, angano… il était une fois.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_imaginaire.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un conte, une fable, une légende ou un mythe, avec la grille Début / Milieu / Fin ;"),
    p("• repérer les informations explicites et implicites et résumer les péripéties ;"),
    p("• employer les mots du monde imaginaire : le héros, la formule magique, il était une fois… ;"),
    p("• rendre mes récits vivants avec les verbes d'action et de mouvement ;"),
    p("• employer la forme négative et les pronoms COI (lui, leur) sans me tromper ;"),
    p("• inférer la morale d'une histoire et donner mon opinion sur son utilité ;"),
    p("• raconter un conte en public, à plusieurs ;"),
    p("• construire un conte ensemble, puis inventer le mien ;"),
    p("• lire mon conte à haute voix, avec expression.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte NARRATIF", { bold: true, color: COLOR }),
        run(" — la narration : le conte, la fable, la légende, le mythe.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("l'autonomie et la maîtrise de soi.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S61 — Compréhension orale ----------
function ficheS61() {
  const meta = META("Compréhension orale : conte « Faralahy et l'oiseau de pluie »",
    "À la fin de la séance, l'apprenant repère les informations explicites et implicites d'un conte entendu avec la grille Début / Milieu / Fin et résume les péripéties dans ses propres mots.",
    "1 / 12", "texte du conte, grille Début/Milieu/Fin au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 5 : les trois parties d'un récit et le temps de chacune.")],
      [fp("Répondent."),
       fp("R.A. : situation initiale (imparfait), événements (passé simple), situation finale.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Demandez : qui vous raconte des histoires, le soir ? Comment commencent les angano en malgache ? Faites le lien : « Angano angano, arira arira… » — en français, on dit « Il était une fois ».")],
      [fp("Répondent, partagent."),
       fp("R.A. : grand-mère raconte les angano ; « il était une fois » ouvre le conte.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un conte — Faralahy et l'oiseau de pluie ». Tracez la nouvelle grille : DÉBUT (qui ? où ? quand ?) — MILIEU (qu'est-ce qui a troublé la paix ? comment la rétablir ?) — FIN (quelle est l'issue ?).")],
      [fp("Écoutent, copient la grille.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Racontez le conte avec la voix du conteur (ou faites écouter l'enregistrement). Questions globales : qui est le héros ? quel est le problème du village ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : Faralahy, le plus jeune des trois fils ; la pluie a cessé, la sécheresse menace.")],
      "Écoute active", "Texte du conte"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites compléter la grille : DÉBUT (un village au pied des montagnes, il était une fois, le chef et ses trois fils) — MILIEU (la pluie cessa ; il faut ramener l'oiseau de pluie ; les deux aînés échouent, Faralahy réussit) — FIN (la pluie revient). Puis l'implicite : pourquoi l'oiseau se pose-t-il sur la main de Faralahy et pas sur celle des aînés ?")],
      [fp("Complètent, déduisent l'implicite."),
       fp("R.A. : parce que Faralahy est patient et bon : il ne court pas, il aide le caméléon, il sait attendre.")],
      "Complétion", "Grille au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites résumer les péripéties dans l'ordre, avec leurs propres mots : l'échec de l'aîné (trop pressé), l'échec du deuxième (trop brutal), la réussite de Faralahy (patience et bonté). Expliquez les mots : une crevasse, se fendre, d'un pas égal.")],
      [fp("Résument les péripéties."),
       fp("R.A. : trois tentatives ; seule la troisième réussit — c'est la règle de trois du conte.")],
      "Résumé", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : racontez le conte en trois phrases — une pour le début, une pour le milieu, une pour la fin.")],
      [fp("Résument à trois phrases."),
       pAns("R.A. : Il était une fois un village que la sécheresse menaçait. Les deux aînés échouèrent, mais Faralahy, patient et bon, ramena l'oiseau de pluie. La pluie revint sur les rizières.", ["Faralahy"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplis la grille : début, milieu, fin."),
       fp("2. Donne une information implicite du conte."),
       fp("3. Résume les trois tentatives en une phrase chacune.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. un village, le chef, ses trois fils / la sécheresse, la quête de l'oiseau / la pluie revient. 2. l'oiseau choisit les patients et les bons. 3. l'aîné court et échoue ; le deuxième bondit et échoue ; Faralahy attend et réussit.", ["implicite"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS61() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 61", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("ÉCOUTER UN CONTE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_conteur.png", 440, 768 / 1376),
    p("", { after: 60 }),
    conteFaralahy(),
    p("", { after: 80 }),
    sub("Ma nouvelle grille d'écoute :"),
    p("• DÉBUT — qui ? où ? quand ? : un village heureux, le chef, ses trois fils ;"),
    p("• MILIEU — qu'est-ce qui a troublé la paix ? comment la rétablir ? : la pluie cessa ; il faut ramener l'oiseau de pluie ;"),
    p("• FIN — quelle est l'issue ? : la pluie revient, le village est sauvé.", { after: 60 }),
    imgFloat("b6_heros.png", 170, 768 / 1376),
    sub("Les péripéties :"),
    p("Ce sont les aventures du milieu : l'échec de l'aîné, l'échec du deuxième, la réussite de Faralahy. Dans les contes, la troisième tentative est souvent la bonne !", { after: 60 }),
    sub("Explicite ou implicite ?"),
    p("• explicite : « la pluie cessa » — c'est dit ;"),
    p("• implicite : l'oiseau choisit Faralahy parce qu'il est patient et bon — cela se comprend entre les lignes.", { after: 60 }),
    sub("Du malgache au français :"),
    p("« Angano angano, arira arira… » → « Il était une fois… » — chaque langue a sa formule pour ouvrir la porte de l'imaginaire.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("« La pluie ne vient pas à celui qui court, elle vient à celui qui sait attendre. »")]),
  ];
}

// ---------- S62 — Lexique ----------
function ficheS62() {
  const meta = META("Lexique : les mots du monde imaginaire",
    "À la fin de la séance, l'apprenant distingue le conte, la fable, la légende et le mythe, et emploie les mots et formules du récit imaginaire.",
    "2 / 12", "étiquettes de mots, tableau en quatre colonnes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Redis la grille du conte : début, milieu, fin.")],
      [fp("Répondent."),
       fp("R.A. : qui/où/quand ; la paix troublée et sa réparation ; l'issue.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : connaissez-vous des histoires où les animaux parlent ? des histoires qui expliquent un lieu (un lac, une pierre) ? des histoires de dieux et de héros ? Elles ne portent pas le même nom…")],
      [fp("Citent des histoires."),
       fp("R.A. : les angano, l'histoire du lac sacré, les histoires des ancêtres des rois…")],
      "Brainstorming", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots du monde imaginaire ». Objectif : distinguer les quatre grands récits — conte, fable, légende, mythe — et leurs mots.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Tableau en quatre colonnes : le CONTE (récit merveilleux inventé : héros, épreuves, fin heureuse — Faralahy) ; la FABLE (courte histoire d'animaux qui parlent + une morale — le merle et le caméléon) ; la LÉGENDE (histoire attachée à un lieu ou un personnage réel, embellie — la légende d'un lac) ; le MYTHE (très ancien récit qui explique le monde : la création, le soleil, la mort).")],
      [fp("Classent des titres d'histoires dans les colonnes."),
       fp("R.A. : animaux + morale → fable ; lieu réel embelli → légende.")],
      "Complétion", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Les mots du conte : le héros, l'épreuve, la quête (ce qu'on part chercher), la formule magique, le personnage merveilleux. Les formules du temps imaginaire : il était une fois, il y a bien longtemps, un jour, alors, depuis ce jour — le conte voyage dans le temps, loin d'aujourd'hui.")],
      [fp("Relèvent les formules dans le conte de la S61."),
       fp("R.A. : « Il était une fois », « un jour », « depuis ce jour ».")],
      "Questions-réponses", "Texte de la S61"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les quatre colonnes et les formules. Astuce : la fable a une morale écrite ; le conte cache souvent la sienne — c'est à nous de la trouver.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu : conte, fable, légende ou mythe ? « Des animaux discutent et l'histoire finit par une leçon. » — « On raconte pourquoi ce rocher a la forme d'une femme. » — « Un garçon part chercher un oiseau magique. » — « Un récit très ancien explique d'où vient la nuit. »")],
      [fp("Classent."),
       pAns("R.A. : fable — légende — conte — mythe.", ["fable"], { size: SZ.FICHE })],
      "Jeux", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quelle différence entre un conte et une fable ?"),
       fp("2. Quelle différence entre une légende et un mythe ?"),
       fp("3. Donne trois formules du temps imaginaire.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le conte est un long récit merveilleux ; la fable, une courte histoire d'animaux avec une morale écrite. 2. la légende s'attache à un lieu ou un personnage ; le mythe explique le monde. 3. il était une fois, il y a bien longtemps, depuis ce jour.", ["morale"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS62() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES MOTS DU MONDE IMAGINAIRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_heros.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("Les quatre grands récits :"),
    mot("le conte", "un récit merveilleux inventé : un héros, des épreuves, une fin heureuse (l'angano)"),
    mot("la fable", "une courte histoire d'animaux qui parlent, avec une morale écrite"),
    mot("la légende", "une histoire attachée à un lieu ou un personnage réel, embellie au fil du temps"),
    mot("le mythe", "un très ancien récit qui explique le monde : le soleil, la nuit, la mort"),
    p("", { after: 60 }),
    imgFloat("b6_fable.png", 170, 768 / 1376),
    sub("Les mots du conte :"),
    mot("le héros, l'épreuve, la quête", "celui qui part ; ce qu'il affronte ; ce qu'il cherche"),
    mot("le personnage merveilleux", "l'animal qui parle, l'esprit, l'oiseau magique"),
    p("", { after: 60 }),
    sub("Les formules du voyage dans le temps :"),
    p("il était une fois — il y a bien longtemps — un jour — alors — depuis ce jour."),
    p("En malgache : « Angano angano, arira arira… »", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("la fable écrit sa morale ; le conte cache la sienne — c'est au lecteur de la trouver.")]),
    p("", { after: 60 }),
    sub("Vocabulaire — on dit… / à éviter… :"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« raconter un conte », « raconter une histoire »" + ".")], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« dire un conte »" + ".")]),
  ];
}

// ---------- S63 — Compréhension écrite ----------
function ficheS63() {
  const meta = META("Compréhension écrite : fable « Le merle et le caméléon » — inférer la morale",
    "À la fin de la séance, l'apprenant repère les informations explicites et implicites d'une fable et infère sa morale.",
    "3 / 12", "texte de la fable (un par binôme si possible)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conte, fable, légende ou mythe ? « Un rocher qui ressemble à une vieille femme » — « Le hérisson et le rat discutent ».")],
      [fp("Répondent."),
       fp("R.A. : légende ; fable.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Rappelez le proverbe du caméléon : « Fais comme le tanalahy : regarde devant, pense à l'après. » Que veut-il dire ? Aujourd'hui, une fable le met en scène.")],
      [fp("Expliquent le proverbe."),
       fp("R.A. : avancer prudemment, réfléchir avant d'agir.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension écrite : la fable Le merle et le caméléon ». Consigne : lecture silencieuse ; repérer qui parle, ce qui arrive, et la leçon de l'histoire.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : qui sont les personnages ? que reproche le merle au caméléon ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : un merle moqueur et un caméléon prudent ; le merle se moque de sa lenteur.")],
      "Lecture silencieuse", "Texte de la fable"),
    stepRow(["4. Analyse", "(lecture analytique)"],
      [fp("La grille : DÉBUT (deux voisins sur le tamarinier, le moqueur et le prudent) — MILIEU (le piège ; le merle fonce et se fait prendre, le caméléon observe et s'écarte) — FIN (le merle est relâché, mais y perd ses plumes… et sa moquerie). L'explicite : le filet se referma. L'implicite : pourquoi le merle ne se moque-t-il plus ? Puis la MORALE : elle est écrite — faites-la reformuler avec leurs mots, et reliez-la au proverbe du tanalahy.")],
      [fp("Analysent, reformulent la morale."),
       fp("R.A. : il a compris que la prudence vaut mieux que la vitesse ; qui réfléchit avant d'agir s'épargne bien des pièges.")],
      "Lecture analytique", "Texte de la fable"),
    stepRow(["5. Synthèse"],
      [fp("Dégagez : la fable = des animaux qui parlent, une histoire courte, une morale écrite à la fin. La morale du conte, elle, se devine (Faralahy !). Les deux histoires de l'unité disent presque la même chose : la maîtrise de soi mène plus loin que la précipitation.")],
      [fp("Récapitulent, comparent conte et fable."),
       fp("R.A. : Faralahy et le caméléon gagnent tous deux par la patience.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : trouvez une situation de votre vie où la morale de la fable s'applique (à l'école, au jeu, au marché). Quelques binômes racontent.")],
      [fp("Transposent la morale."),
       pAns("R.A. : En calcul, celui qui se jette sur la réponse se trompe souvent ; celui qui relit son opération arrive entier !", ["morale"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplis la grille : début, milieu, fin."),
       fp("2. Recopie la morale et redis-la avec tes mots."),
       fp("3. Donne une information implicite de la fable.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. deux voisins / le piège, la capture du merle / le merle libéré et guéri de sa moquerie. 2. rien ne sert de courir ; réfléchir avant d'agir protège. 3. le merle a eu honte — il ne se moque plus de personne.", ["implicite"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS63() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UNE FABLE, TROUVER LA MORALE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_fable.png", 440, 768 / 1376),
    p("", { after: 60 }),
    fableCameleon(),
    p("", { after: 80 }),
    sub("La fable :"),
    p("une histoire courte, des animaux qui parlent comme des humains, et une morale — la leçon de l'histoire — écrite à la fin.", { after: 60 }),
    imgFloat("b6_conteur.png", 170, 768 / 1376),
    sub("Inférer la morale, c'est :"),
    p("la deviner quand elle n'est pas écrite : je regarde qui gagne, qui perd, et pourquoi. Dans le conte de Faralahy, la morale se devine : la patience et la bonté sont récompensées.", { after: 60 }),
    sub("Du proverbe à la fable :"),
    p("« Fais comme le tanalahy : regarde devant, pense à l'après. » — la sagesse malgache et la fable disent la même chose, chacune à sa manière.", { after: 60 }),
    sub("Vocabulaire — mots du texte :"),
    mot("se moquer", "rire de quelqu'un pour le rabaisser"),
    mot("un piège", "ce qui est caché pour attraper"),
    mot("prudent", "qui réfléchit avant d'agir"),
    p("", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("qui regarde devant et pense à l'après arrive entier.")]),
  ];
}

// ---------- S64 — Les verbes d'action et de mouvement ----------
function ficheS64() {
  const meta = META("Les verbes d'action et de mouvement",
    "À la fin de la séance, l'apprenant identifie les verbes d'action et de mouvement et les emploie pour rendre ses récits vivants.",
    "4 / 12", "verbes relevés dans le conte et la fable");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("La morale de la fable, avec tes mots ?")],
      [fp("Répondent."),
       fp("R.A. : réfléchir avant d'agir vaut mieux que courir.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Comparez au tableau : « Le deuxième fils alla vers l'oiseau » / « Le deuxième fils bondit sur l'oiseau ». Quelle phrase fait voir la scène ? Pourquoi ?")],
      [fp("Comparent."),
       fp("R.A. : bondit — on voit le mouvement, la brutalité.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Les verbes d'action et de mouvement ». Ce sont les muscles du récit : ils font bouger les personnages sous les yeux du lecteur.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Chasse aux verbes dans le conte et la fable : courir, grimper, bondir, s'envoler, traverser, marcher, redescendre, foncer, se refermer, soulever, poser, saisir, tendre… Classez en deux familles : les verbes de MOUVEMENT (un déplacement : courir, grimper, s'envoler, traverser, foncer, ramper) et les verbes d'ACTION (un geste : saisir, soulever, poser, tendre, ouvrir, frapper).")],
      [fp("Relèvent, classent."),
       fp("R.A. : mouvement = on se déplace ; action = on fait un geste.")],
      "Analyse", "Textes de l'unité"),
    stepRow(["4. Analyse"],
      [fp("La nuance fait l'image : marcher ≠ courir ≠ bondir ≠ ramper — même déplacement, images différentes. Remplacez le verbe plat par un verbe précis : « L'aîné alla au sommet » → courut, grimpa, se précipita. Rappelez : au passé simple, ces verbes font avancer le récit (il bondit, il saisit, il s'envola).")],
      [fp("Améliorent des phrases."),
       fp("R.A. : « Le merle fonça sur les graines » est plus vivant que « le merle alla vers les graines ».")],
      "Complétion", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les deux familles et la règle d'or du conteur : un verbe précis vaut mieux que trois adjectifs.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu du mime : un apprenant mime un verbe (ramper, bondir, saisir, grimper…), la classe le devine et l'emploie dans une phrase de conte au passé simple.")],
      [fp("Miment, devinent, formulent."),
       pAns("R.A. : Le héros rampa sous les racines du grand figuier.", ["rampa"], { size: SZ.FICHE })],
      "Jeux — mime", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe : traverser — saisir — s'envoler — poser — foncer — ouvrir."),
       fp("2. Remplace le verbe plat : « Le héros alla en haut de la montagne. »"),
       fp("3. Écris une phrase de conte avec un verbe de mouvement et un verbe d'action au passé simple.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. mouvement : traverser, s'envoler, foncer ; action : saisir, poser, ouvrir. 2. grimpa (courut, se hissa). 3. Il bondit sur le rocher et saisit la plume d'or.", ["bondit"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS64() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 64", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VERBES D'ACTION ET DE MOUVEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_heros.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("Deux familles :"),
    mot("les verbes de mouvement", "un déplacement : courir, grimper, bondir, s'envoler, traverser, foncer, ramper, redescendre"),
    mot("les verbes d'action", "un geste : saisir, soulever, poser, tendre, ouvrir, frapper, construire"),
    p("", { after: 60 }),
    imgFloat("b4_foot.png", 170, 768 / 1376),
    sub("La nuance fait l'image :"),
    p("marcher ≠ courir ≠ bondir ≠ ramper — même déplacement, quatre images différentes :"),
    p("• « Faralahy marcha d'un pas égal » → le calme ;"),
    p("• « Le merle fonça sans regarder » → l'imprudence.", { after: 60 }),
    sub("Au passé simple, ils font avancer le récit :"),
    p("il bondit, il saisit, il s'envola, il traversa, il souleva.", { after: 60 }),
    sub("La règle d'or du conteur :"),
    p("un verbe précis vaut mieux que trois adjectifs : « il se précipita » en dit plus que « il alla très très vite ».", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("les verbes d'action et de mouvement sont les muscles du récit : ils font voir la scène.")]),
  ];
}

// ---------- S65 — Forme négative et pronoms COI ----------
function ficheS65() {
  const meta = META("La forme négative et les pronoms COI (lui, leur)",
    "À la fin de la séance, l'apprenant emploie correctement les phrases négatives (y compris au passé composé) et les pronoms COI, ensemble, pour interdire et éviter les répétitions.",
    "5 / 12", "phrases des textes de l'unité au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Mouvement ou action ? bondir — saisir — ramper — ouvrir.")],
      [fp("Répondent."),
       fp("R.A. : mouvement, action, mouvement, action.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Dans les contes, il y a toujours un interdit : « N'ouvre jamais cette porte ! » « Ne parle à personne en chemin ! » Qui se souvient d'un interdit de conte ? Que se passe-t-il quand le héros désobéit ?")],
      [fp("Citent des interdits."),
       fp("R.A. : le héros désobéit… et l'aventure commence !")],
      "Brainstorming", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « La forme négative et les pronoms COI ». Deux outils déjà rencontrés — aujourd'hui, on les emploie ensemble, sans se tromper.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(la négation — rappel et approfondissement)"],
      [fp("Rappel des deux schémas au passé composé : « Le merle n'a pas regardé. » « Faralahy n'a jamais couru. » « Il n'a rien saisi. » « Ils n'ont vu personne. » — pas/jamais/plus/rien entre l'auxiliaire et le participe ; personne après. Et l'interdit du conte à l'impérative négative : « N'ouvre jamais cette porte ! »")],
      [fp("Redisent les schémas."),
       fp("R.A. : ne + auxiliaire + pas/jamais/rien + participe ; personne après le participe.")],
      "Questions-réponses", "Tableau"),
    stepRow(["4. Analyse", "(les COI — avec la négation)"],
      [fp("Corpus : « Niry et Beby parlent au merle → Niry et Beby lui parlent → Niry et Beby ne lui parlent pas. » « Vous demandez des crayons aux voisins → Vous leur demandez des crayons → Vous ne leur demandez rien. » Dégagez l'ordre : ne + pronom (lui/leur) + verbe + pas/rien/jamais. Au passé composé : « Je ne lui ai rien dit. »")],
      [fp("Transforment en chaîne."),
       fp("R.A. : le pronom reste collé au verbe, la négation entoure le tout.")],
      "Complétion", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : à qui ? → lui (une personne), leur (plusieurs) ; ordre à la négative : ne + lui/leur + verbe + pas. Et l'interdit du conte : impérative négative, qui prépare l'aventure.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu de l'interdit magique : chaque binôme écrit l'interdit d'un conte (impérative négative) + une phrase avec un COI à la forme négative sur son héros.")],
      [fp("Écrivent, lisent."),
       pAns("R.A. : « Ne réponds jamais à la voix de la forêt ! » — Le héros ne lui répondit pas… la première nuit.", ["jamais"], { size: SZ.FICHE })],
      "Binômes — jeu", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Mets à la forme négative : « Niry et Beby lui parlent. »"),
       fp("2. Remplace et nie : « Vous demandez des crayons aux voisins. » (avec rien)"),
       fp("3. Écris l'interdit d'un conte avec ne … jamais.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Niry et Beby ne lui parlent pas. 2. Vous ne leur demandez rien. 3. N'ouvre jamais la calebasse rouge !", ["ne lui parlent pas"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(65, TOTAL, meta, rows, "s65", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS65() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 65", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA NÉGATION ET LES PRONOMS COI, ENSEMBLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b3_interdits.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("Rappel — la négation au passé composé :"),
    p("• « Le merle n'a pas regardé. » « Il n'a rien saisi. » — pas, jamais, plus, rien avant le participe ;"),
    p("• « Ils n'ont vu personne. » — personne après le participe.", { after: 60 }),
    imgFloat("b6_fable.png", 170, 768 / 1376),
    sub("Les pronoms COI : à qui ? → lui, leur"),
    p("• Niry et Beby parlent au merle. → Niry et Beby lui parlent."),
    p("• Vous demandez des crayons aux voisins. → Vous leur demandez des crayons.", { after: 60 }),
    sub("Les deux ensemble — l'ordre à retenir :"),
    p("ne + lui / leur + verbe + pas (rien, jamais)"),
    p("• Niry et Beby ne lui parlent pas."),
    p("• Vous ne leur demandez rien."),
    p("• Je ne lui ai rien dit. (au passé composé)", { after: 60 }),
    sub("L'interdit du conte :"),
    p("l'impérative négative ouvre l'aventure : « N'ouvre jamais cette porte ! » « Ne parle à personne en chemin ! »", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("le pronom reste collé au verbe ; la négation entoure le tout : ne lui parle pas, ne leur dis rien.")]),
  ];
}

// ---------- S66 — Production orale (1) : la morale et l'utilité des contes ----------
function ficheS66() {
  const meta = META("Production orale (1) : inférer la morale, donner son opinion sur l'utilité des contes",
    "À la fin de la séance, l'apprenant infère la morale d'un conte, d'une fable ou d'une légende et émet son opinion sur leur utilité.",
    "6 / 12", "conte et fable de l'unité, courtes histoires supplémentaires");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("L'ordre des mots : « Niry et Beby / parlent / ne / lui / pas ».")],
      [fp("Répondent."),
       fp("R.A. : Niry et Beby ne lui parlent pas.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Relisez la fin du conte de Faralahy. La morale n'est pas écrite comme dans la fable — et pourtant tout le monde la connaît. Comment avons-nous fait ?")],
      [fp("Répondent."),
       fp("R.A. : on a regardé qui réussit et pourquoi.")],
      "Questions-réponses", "Texte de la S61"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Inférer la morale, donner son opinion ». La méthode au tableau : 1. qui gagne ? qui perd ? 2. grâce à quoi ? à cause de quoi ? 3. la leçon en une phrase.")],
      [fp("Copient la méthode.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation"],
      [fp("Entraînement guidé sur deux courtes histoires que vous racontez : a) un enfant partage son riz avec un inconnu, qui se révèle être un ancien généreux en retour ; b) une fille se vante de tout savoir et se perd en forêt pour n'avoir pas écouté les anciens. En groupes : appliquez la méthode, formulez chaque morale.")],
      [fp("Infèrent les morales."),
       fp("R.A. : a) qui partage ne perd jamais ; b) qui n'écoute personne se perd tout seul.")],
      "Travail de groupes", "----"),
    stepRow(["4. Analyse", "(l'opinion)"],
      [fp("Débat court : à quoi servent les contes et les fables ? Sont-ils seulement pour les petits ? Outils affichés : à mon avis, je trouve que… parce que… ; c'est vrai, mais…. Guidez vers les usages : transmettre la sagesse, apprendre sans punir, faire voyager, garder la langue et la mémoire.")],
      [fp("Débattent."),
       fp("R.A. : les contes instruisent en amusant ; ils gardent la sagesse des anciens.")],
      "Échanges en grand groupe", "Affiche d'expressions"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez la méthode d'inférence et les opinions entendues. Reliez aux proverbes : chez nous aussi, la sagesse voyage en histoires courtes.")],
      [fp("Récapitulent.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chacun choisit la morale qu'il préfère (conte, fable ou histoire du jour) et explique en deux phrases pourquoi elle lui parle.")],
      [fp("Choisissent, justifient."),
       pAns("R.A. : Je choisis « qui partage ne perd jamais », parce que chez nous, le riz offert revient toujours d'une manière ou d'une autre.", ["partage"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Observation continue : morale correctement inférée (2 pts), opinion avec cause (2 pts), écoute (1 pt).")],
      [fp("Participent.")],
      "Observation continue", "Grille d'observation"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66", "PRODUCTION ORALE", COLOR);
}
function lessonS66() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("INFÉRER LA MORALE, DIRE SON OPINION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_fable.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("Ma méthode pour trouver la morale cachée :"),
    p("1. Qui gagne ? qui perd ?"),
    p("2. Grâce à quoi ? à cause de quoi ?"),
    p("3. Je dis la leçon en une phrase.", { after: 60 }),
    imgFloat("b3_debat.png", 170, 768 / 1376),
    sub("Exemples :"),
    p("• Faralahy gagne grâce à sa patience → la patience et la bonté sont récompensées ;"),
    p("• le merle perd à cause de sa précipitation → réfléchir avant d'agir protège.", { after: 60 }),
    sub("À quoi servent les contes ?"),
    p("• ils transmettent la sagesse des anciens ;"),
    p("• ils apprennent sans punir : la leçon passe par l'histoire ;"),
    p("• ils font voyager et gardent la mémoire de la langue.", { after: 60 }),
    sub("Mon opinion, toujours avec sa cause :"),
    p("« À mon avis, les contes ne sont pas que pour les petits, parce que la sagesse n'a pas d'âge. »", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("la morale se cache dans la victoire du héros : qui gagne, et grâce à quoi ?")]),
  ];
}

// ---------- S67 — Production orale (2) : raconter un conte en public ----------
function ficheS67() {
  const meta = META("Production orale (2) : raconter un conte en public, à plusieurs",
    "À la fin de la séance, l'apprenant raconte un conte devant la classe, en prenant en charge une partie du conte (début, milieu ou fin).",
    "7 / 12", "conte de la séance 61 découpé en trois parties");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("La méthode pour inférer une morale ?")],
      [fp("Répondent."),
       fp("R.A. : qui gagne, qui perd ; grâce à quoi ; la leçon en une phrase.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Racontez les deux premières phrases du conte de Faralahy : une fois d'une voix plate, une fois en conteur (la voix qui baisse, les silences, les gestes). Quel conteur écoute-t-on jusqu'au bout ?")],
      [fp("Comparent."),
       fp("R.A. : le second — la voix fait vivre le conte.")],
      "Modélisation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Raconter un conte en public, à trois ». Chaque trio se partage le conte : le DÉBUT (l'un pose le décor), le MILIEU (le deuxième mène les péripéties), la FIN (le troisième donne l'issue et laisse deviner la morale). On raconte avec ses mots — on ne récite pas par cœur.")],
      [fp("Forment les trios, se répartissent les parties.")], "Travail collectif", "Texte découpé"),
    stepRow(["3. Observation", "(les secrets du conteur)"],
      [fp("Dégagez les secrets : la formule d'ouverture (« Angano angano… Il était une fois ») ; la voix qui change avec les personnages ; les verbes de mouvement dits avec le geste ; le silence avant le moment important ; la formule de clôture (« Depuis ce jour… »).")],
      [fp("Notent les secrets."),
       fp("R.A. : formules, voix, gestes, silences.")],
      "Observation guidée", "Tableau"),
    stepRow(["4. Analyse", "(répétition)"],
      [fp("Répétition en trios : chacun raconte sa partie, les deux autres vérifient — rien d'oublié ? les enchaînements sont-ils fluides (« Alors… », « Pendant ce temps… ») ? Les trios se chronomètrent : trois minutes en tout.")],
      [fp("Répètent, enchaînent.")],
      "Travail de groupes", "----"),
    stepRow(["5. Synthèse", "(le spectacle)"],
      [fp("Les trios racontent devant la classe. Le public écoute en conteur exigeant : il relève une réussite par trio (une voix, un geste, un silence réussi).")],
      [fp("Racontent, écoutent."),
       fp("R.A. : chaque trio va au bout de son conte ; le public relève les réussites.")],
      "Présentation", "----"),
    stepRow(["6. Entraînement"],
      [fp("Retour collectif : qu'est-ce qui fait un bon conteur ? Trois secrets retenus au tableau — ils serviront pour la lecture expressive de la séance 70.")],
      [fp("Dégagent."),
       pAns("R.A. : la formule d'ouverture qui installe le silence ; la voix qui change ; la pause avant « l'oiseau vint s'y poser ».", ["la pause"], { size: SZ.FICHE })],
      "Travail collectif", "Tableau"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Barème par conteur : sa partie est complète (2 pts), enchaînement fluide avec les autres (1 pt), voix et gestes de conteur (2 pts).")],
      [fp("Racontent en trios.")],
      "Présentation notée", "Grille"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67", "PRODUCTION ORALE", COLOR);
}
function lessonS67() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("RACONTER UN CONTE EN PUBLIC", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_conteur.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("À trois, on se partage le conte :"),
    p("• le premier pose le DÉBUT : le décor, les personnages — « Il était une fois… » ;"),
    p("• le deuxième mène le MILIEU : les péripéties, l'une après l'autre ;"),
    p("• le troisième donne la FIN : l'issue… et laisse deviner la morale.", { after: 60 }),
    imgFloat("b2_expose.png", 170, 768 / 1376),
    sub("Les secrets du conteur :"),
    p("• la formule d'ouverture installe le silence : « Angano angano… » ;"),
    p("• la voix change avec les personnages ;"),
    p("• le geste accompagne les verbes de mouvement : bondir, s'envoler… ;"),
    p("• le silence se place juste avant le moment important ;"),
    p("• la formule de clôture referme l'histoire : « Depuis ce jour… »", { after: 60 }),
    sub("On raconte, on ne récite pas :"),
    p("je garde l'ordre des péripéties, mais je choisis mes mots — c'est mon conte pendant que je le raconte.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("le conteur ne lit pas une histoire : il la fait vivre devant ceux qui l'écoutent.")]),
  ];
}

// ---------- S68 — Production écrite (1) : le conte construit ensemble ----------
function ficheS68() {
  const meta = META("Production écrite (1) : construire un conte ensemble — le cadavre exquis",
    "À la fin de la séance, l'apprenant construit un conte en collaboration, en mobilisant l'orthographe, la grammaire et la structure du récit.",
    "8 / 12", "feuilles pliables pour le jeu, grille Début/Milieu/Fin au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les trois parties que se partagent les conteurs ?")],
      [fp("Répondent."),
       fp("R.A. : le début (décor), le milieu (péripéties), la fin (issue).")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Annoncez le jeu du « cadavre exquis » : chacun écrit une partie d'histoire SANS voir ce que les autres ont écrit — puis on déplie, et on découvre un conte… surprenant ! Règle d'or : des phrases complètes et correctes, sinon le conte déplié ne tient pas debout.")],
      [fp("Écoutent la règle du jeu.")],
      "Jeu de « cadavre exquis »", "Feuilles pliables"),
    stepRow(["2. Présentation", "(le canevas)"],
      [fp("Canevas au tableau, une ligne par écrivain : 1. « Il était une fois » + un héros + un lieu. 2. Un jour + ce qui trouble la paix. 3. Alors le héros + un verbe de mouvement + où il va. 4. Il rencontre + un personnage merveilleux + son conseil ou son interdit. 5. L'épreuve + un verbe d'action. 6. « Depuis ce jour » + l'issue.")],
      [fp("Copient leur ligne de canevas.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(le jeu, premier tour)"],
      [fp("Par groupes de six : chacun écrit sa ligne, plie la feuille, la passe au voisin. Circulez : phrases complètes, passé simple ou présent cohérent sur chaque ligne, majuscules et points.")],
      [fp("Écrivent, plient, passent.")],
      "Jeu — écriture", "Feuilles"),
    stepRow(["4. Analyse", "(lecture et réparation)"],
      [fp("Chaque groupe déplie et lit son conte à voix haute — on rit, puis on répare : les groupes réécrivent les enchaînements pour que l'histoire tienne debout (accorder les personnages, ajuster les pronoms — lui, leur, le, la —, lier les lignes par alors, mais, depuis ce jour).")],
      [fp("Lisent, repèrent les ruptures, réparent."),
       fp("R.A. : le héros de la ligne 1 doit rester le même jusqu'à la ligne 6 !")],
      "Travail de groupes", "Feuilles"),
    stepRow(["5. Synthèse"],
      [fp("Dégagez ce que le jeu a montré : un conte tient par sa COHÉRENCE — le même héros, le même fil, des phrases qui s'enchaînent. C'est exactement ce qu'il faudra pour le conte individuel de la prochaine séance.")],
      [fp("Récapitulent.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chaque groupe met au propre son conte réparé et lui donne un titre. Affichage au mur ; la classe vote pour le conte le plus cohérent et le plus drôle.")],
      [fp("Mettent au propre, votent."),
       pAns("R.A. : « Le zébu qui voulait voler » — six lignes, un seul héros, une vraie fin.", ["cohérent"], { size: SZ.FICHE })],
      "Travail de groupes", "Feuilles"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Par groupe : six lignes complètes et correctes (2 pts), conte réparé cohérent (2 pts), titre trouvé (1 pt).")],
      [fp("Remettent leur conte collectif.")],
      "Travail collaboratif", "----"),
  ];
  return fiche(68, TOTAL, meta, rows, "s68", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS68() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 68", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("UN CONTE CONSTRUIT ENSEMBLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_ecriture.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("Le jeu du cadavre exquis :"),
    p("chacun écrit une ligne du conte sans voir les autres, on plie, on passe — puis on déplie et on découvre l'histoire !", { after: 60 }),
    imgFloat("b2_equipe_affiche.png", 170, 768 / 1376),
    sub("Le canevas du conte (une ligne par écrivain) :"),
    p("1. « Il était une fois » + un héros + un lieu ;"),
    p("2. « Un jour » + ce qui trouble la paix ;"),
    p("3. « Alors » le héros + un verbe de mouvement + où il va ;"),
    p("4. Il rencontre un personnage merveilleux + son conseil ou son interdit ;"),
    p("5. L'épreuve + un verbe d'action ;"),
    p("6. « Depuis ce jour » + l'issue.", { after: 60 }),
    sub("Ce que le jeu apprend :"),
    p("• des phrases complètes, sinon le conte ne tient pas debout ;"),
    p("• la COHÉRENCE : un seul héros, un seul fil, du début à la fin ;"),
    p("• les pronoms (le, la, lui, leur) et les mots de liaison recousent l'histoire.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("écrire ensemble, c'est veiller chacun à sa phrase — et tous à la même histoire.")]),
  ];
}

// ---------- S69 — Production écrite (2) : inventer mon conte ----------
function ficheS69() {
  const meta = META("Production écrite (2) : inventer mon conte",
    "À la fin de la séance, l'apprenant invente un conte mettant en avant son monde imaginaire (lieu, personnages, paysages) en respectant la structure du récit.",
    "9 / 12", "canevas de la séance 68, grille de relecture au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les six lignes du canevas du conte ?")],
      [fp("Répondent."),
       fp("R.A. : héros et lieu ; la paix troublée ; le départ ; la rencontre ; l'épreuve ; l'issue.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(mon monde imaginaire)"],
      [fp("Fermez les yeux : votre monde imaginaire — quel lieu ? (une forêt qui chante, une île sous le lac, un village dans les nuages…) quels personnages ? quels paysages ? Chacun note trois idées, les siennes.")],
      [fp("Imaginent, notent."),
       fp("R.A. : une forêt où les arbres parlent ; un zébu d'argent ; une rivière qui remonte la montagne…")],
      "Brainstorming individuel", "Cahiers"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Inventer mon conte ». Consigne : dix à douze lignes, le canevas en six étapes, un interdit ou un conseil du personnage merveilleux, des verbes de mouvement et d'action, une morale qu'on devine (sans l'écrire… ou une seule phrase à la fin, comme la fable).")],
      [fp("Écoutent la consigne.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(le plan)"],
      [fp("Chacun remplit son canevas en six lignes courtes — le squelette du conte. Circulez : le héros est-il le même partout ? l'épreuve correspond-elle au trouble du début ?")],
      [fp("Remplissent leur canevas.")],
      "Travail individuel", "Cahiers"),
    stepRow(["4. Analyse", "(premier jet)"],
      [fp("Rédaction du premier jet : le canevas devient un récit — l'imparfait pour le décor, le passé simple (ou le présent du conteur) pour les actions, les formules du conte, un pronom pour éviter une répétition.")],
      [fp("Rédigent leur premier jet.")],
      "Rédaction individuelle", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture guidée)"],
      [fp("Grille au tableau : 1. mes six étapes sont-elles là ? 2. mon héros est-il le même du début à la fin ? 3. ai-je un interdit ou un conseil ? 4. mes verbes font-ils voir la scène ? 5. ma morale se devine-t-elle ? 6. majuscules, points, accords ? Relecture individuelle puis croisée.")],
      [fp("Relisent, corrigent."),
       fp("R.A. : mon héros s'appelait Soa au début et Vola à la fin — je corrige !")],
      "Relecture guidée", "Grille au tableau"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre, titre, et — pour ceux qui veulent — un dessin du monde imaginaire. Annoncez : à la prochaine séance, chacun lira son conte à haute voix, en conteur.")],
      [fp("Mettent au propre, illustrent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Remise des contes. Barème : six étapes présentes (2 pts), cohérence du héros et du fil (1 pt), interdit ou conseil (1 pt), verbes vivants et langue correcte (1 pt).")],
      [fp("Remettent leur conte.")],
      "Travail individuel", "----"),
  ];
  return fiche(69, TOTAL, meta, rows, "s69", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS69() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 69", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("INVENTER MON CONTE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b6_ecriture.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("D'abord, mon monde imaginaire :"),
    p("• un LIEU à moi : une forêt qui chante, une île sous le lac, un village dans les nuages ;"),
    p("• des PERSONNAGES : un héros qui me ressemble, un personnage merveilleux ;"),
    p("• des PAYSAGES : ce qu'on voit, ce qu'on entend, ce qu'on sent.", { after: 60 }),
    imgFloat("b6_heros.png", 170, 768 / 1376),
    sub("Puis le canevas en six étapes :"),
    p("le héros et son lieu → la paix troublée → le départ → la rencontre (conseil ou interdit !) → l'épreuve → l'issue.", { after: 60 }),
    sub("Mes outils d'écrivain :"),
    p("• l'imparfait pour le décor, le passé simple pour les actions ;"),
    p("• les formules : il était une fois, un jour, alors, depuis ce jour ;"),
    p("• des verbes qui font voir : bondir, saisir, s'envoler ;"),
    p("• un pronom pour éviter une répétition.", { after: 60 }),
    sub("Ma grille de relecture :"),
    p("1. Six étapes ? 2. Le même héros partout ? 3. Un interdit ou un conseil ? 4. Des verbes vivants ? 5. Une morale qu'on devine ? 6. Majuscules, points, accords ?", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("mon conte est réussi si un camarade peut en deviner la morale sans que je la lui dise.")]),
  ];
}

// ---------- S70 — Lecture expressive ----------
function ficheS70() {
  const meta = META("Lecture-fluidité : lire son conte avec expression",
    "À la fin de la séance, l'apprenant lit un texte préparé avec confiance, prosodie et précision, pour traduire l'intention de l'auteur.",
    "10 / 12", "contes des apprenants (séance 69), conte et fable de l'unité");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les secrets du conteur (séance 67) ?")],
      [fp("Répondent."),
       fp("R.A. : formules, voix qui change, gestes, silence avant le moment fort.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Modélisez sur la fable : lisez la moquerie du merle d'une voix moqueuse, la réponse du caméléon d'une voix lente et posée, la morale gravement. C'est la prosodie : la mélodie de la voix traduit l'intention de l'auteur.")],
      [fp("Écoutent, repèrent les changements de voix."),
       fp("R.A. : chaque personnage a sa musique.")],
      "Modélisation de la lecture", "Texte de la S63"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lire son conte avec expression ». Aujourd'hui, chacun prépare puis lit SON conte. Objectifs : confiance, précision, prosodie — et autocorrections rapides si l'on trébuche.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(préparer sa lecture)"],
      [fp("Chacun prépare son texte : marquer d'un trait les pauses (après les points, avant le moment fort), souligner les paroles des personnages (changement de voix), entourer les mots difficiles à lire exactement. Rappel des signes : le point-virgule aussi demande une pause, entre la virgule et le point.")],
      [fp("Annotent leur conte.")],
      "Travail individuel", "Contes des apprenants"),
    stepRow(["4. Analyse", "(lecture répétée)"],
      [fp("En binômes : deux lectures chacun de son propre conte. Le camarade suit et vérifie : les mots exacts ? les pauses marquées ? la voix des personnages ? l'autocorrection rapide en cas d'erreur ?")],
      [fp("Lisent, se corrigent, relisent.")],
      "Lecture répétée", "Contes des apprenants"),
    stepRow(["5. Synthèse", "(lectures publiques)"],
      [fp("Lectures devant la classe (sur deux séances si besoin) : la formule d'ouverture posément, les péripéties avec vie, la dernière phrase lentement. Le public devine la morale de chaque conte — preuve que la lecture a porté l'intention de l'auteur.")],
      [fp("Lisent en public, écoutent, devinent les morales."),
       fp("R.A. : les morales sont devinées — les contes ont parlé.")],
      "Lecture à haute voix", "----"),
    stepRow(["6. Entraînement"],
      [fp("Retour : qu'est-ce qui a rendu les meilleures lectures vivantes ? Trois réussites au tableau.")],
      [fp("Dégagent."),
       pAns("R.A. : la pause avant l'épreuve ; la voix du personnage merveilleux ; la morale lue lentement.", ["la pause"], { size: SZ.FICHE })],
      "Travail collectif", "Tableau"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Lecture notée de son conte : précision et autocorrections (2 pts), pauses et ponctuation (1 pt), prosodie — voix des personnages, moment fort (2 pts).")],
      [fp("Lisent individuellement.")],
      "Travail individuel", "Contes des apprenants"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS70() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE MON CONTE AVEC EXPRESSION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("b1_lecture.png", 440, 768 / 1376),
    p("", { after: 60 }),
    sub("La prosodie :"),
    p("c'est la mélodie de la voix : elle traduit l'intention de l'auteur — la moquerie du merle, le calme du caméléon, la gravité de la morale.", { after: 60 }),
    imgFloat("b6_conteur.png", 170, 768 / 1376),
    sub("Je prépare ma lecture :"),
    p("• je marque les pauses d'un trait : après les points, avant le moment fort ;"),
    p("• je souligne les paroles des personnages : je changerai de voix ;"),
    p("• j'entoure les mots difficiles : je les lirai exactement ;"),
    p("• le point-virgule aussi demande sa pause — entre la virgule et le point.", { after: 60 }),
    sub("Je lis avec confiance :"),
    p("• la formule d'ouverture posément — elle installe le silence ;"),
    p("• les péripéties avec vie — les verbes de mouvement s'entendent ;"),
    p("• la dernière phrase lentement — c'est elle qui reste ;"),
    p("• si je trébuche, je me corrige vite et je continue.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("une lecture expressive réussie : le public devine la morale sans qu'on la lui dise.")]),
  ];
}

// ---------- La grande leçon ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 6 : LE MONDE IMAGINAIRE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les quatre grands récits :"),
    pr([run("le conte ", { bold: true, color: C.SALMON }), run("(merveilleux, morale cachée), "), run("la fable ", { bold: true, color: C.SALMON }), run("(animaux, morale écrite), "), run("la légende ", { bold: true, color: C.SALMON }), run("(un lieu réel embelli), "), run("le mythe ", { bold: true, color: C.SALMON }), run("(l'explication du monde).")], { after: 80 }),
    sub("2. La grille du conte :"),
    p("DÉBUT (qui, où, quand) → MILIEU (la paix troublée ; comment la rétablir — les péripéties) → FIN (l'issue).", { after: 80 }),
    sub("3. Les mots et formules :"),
    p("le héros, la quête, l'épreuve, le personnage merveilleux ; il était une fois, un jour, alors, depuis ce jour — « Angano angano, arira arira… »", { after: 80 }),
    sub("4. Les verbes d'action et de mouvement :"),
    p("mouvement (courir, bondir, s'envoler, traverser) ; action (saisir, soulever, tendre, ouvrir) — les muscles du récit.", { after: 80 }),
    sub("5. La négation et les pronoms COI, ensemble :"),
    p("ne + lui/leur + verbe + pas (rien, jamais) : « Niry et Beby ne lui parlent pas. » « Vous ne leur demandez rien. » L'interdit du conte : « N'ouvre jamais cette porte ! »", { after: 80 }),
    sub("6. La morale :"),
    p("je la trouve en trois questions : qui gagne ? grâce à quoi ? quelle leçon en une phrase ?", { after: 80 }),
    sub("7. À l'oral et à l'écrit :"),
    p("raconter à plusieurs (début, milieu, fin — les secrets du conteur) ; écrire ensemble (le cadavre exquis et la cohérence) ; inventer son conte (le canevas en six étapes) ; le lire avec prosodie.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Conte, fable, légende ou mythe ? 1. Un très ancien récit raconte d'où vient la nuit. 2. Le hérisson et le rat discutent, et l'histoire finit par une leçon écrite. 3. On raconte pourquoi le lac du village est salé. 4. Un garçon part chercher un oiseau magique et revient vainqueur.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Complète la grille du conte de Faralahy : 1. Début : qui ? où ? 2. Milieu : qu'est-ce qui a troublé la paix ? 3. Milieu : comment la rétablir ? 4. Fin : quelle est l'issue ?")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Mouvement ou action ? Classe : bondir — saisir — traverser — ouvrir — ramper — soulever — s'envoler — tendre.")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Remets les mots en ordre, puis mets à la forme négative : 1. « parlent / lui / Niry et Beby » (+ ne … pas). 2. « demandez / Vous / des crayons / leur » (+ ne … rien). 3. Mets à la forme négative : « Le héros lui a répondu. » 4. Écris l'interdit d'un conte avec ne … jamais.")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Lis : « Un enfant partagea son riz avec un vieil inconnu. L'hiver venu, l'inconnu remplit son grenier. » 1. Qui gagne ? 2. Grâce à quoi ? 3. Écris la morale en une phrase. 4. Cette morale est-elle écrite ou inférée ?")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : mythe — fable — légende — conte. (1 pt chacun)", ["mythe"]),
    pAns("Ex.2 : 1. Faralahy et sa famille, un village au pied des montagnes. 2. la pluie cessa. 3. ramener l'oiseau de pluie. 4. la pluie revient, le village est sauvé. (1 pt chacun)", ["l'oiseau de pluie"]),
    pAns("Ex.3 : mouvement : bondir, traverser, ramper, s'envoler ; action : saisir, ouvrir, soulever, tendre. (0,5 pt chacun)", ["bondir"]),
    pAns("Ex.4 : 1. Niry et Beby ne lui parlent pas. 2. Vous ne leur demandez rien. 3. Le héros ne lui a pas répondu. 4. exemple : Ne bois jamais l'eau de la source noire ! (1 pt chacun)", ["ne lui parlent pas"]),
    pAns("Ex.5 : 1. l'enfant. 2. grâce à son partage, à sa générosité. 3. qui partage ne perd jamais. 4. inférée — elle n'est pas écrite. (1 pt chacun)", ["inférée"]),
  ];
}

// ---------- Révision (S71) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s71", "SÉANCE 71 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 6 : LE MONDE IMAGINAIRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Donne les quatre grands récits du monde imaginaire et une différence entre eux."),
    pAns("R.A. : le conte (merveilleux), la fable (animaux + morale écrite), la légende (lieu réel embelli), le mythe (explique le monde).", ["légende"]),
    p("2. Donne la grille d'écoute du conte."),
    pAns("R.A. : début (qui, où, quand) ; milieu (la paix troublée, comment la rétablir) ; fin (l'issue).", ["l'issue"]),
    p("3. Que sont les péripéties ?"),
    pAns("R.A. : les aventures du milieu du conte, l'une après l'autre.", ["péripéties"]),
    p("4. Donne trois formules du conte, en français — et la formule malgache."),
    pAns("R.A. : il était une fois, un jour, depuis ce jour ; « Angano angano, arira arira ».", ["Angano"]),
    p("5. Mouvement ou action ? bondir, saisir, s'envoler, poser."),
    pAns("R.A. : mouvement, action, mouvement, action.", ["mouvement"]),
    p("6. Remplace puis nie : « Vous demandez des crayons aux voisins. »"),
    pAns("R.A. : Vous leur demandez des crayons → Vous ne leur demandez rien.", ["ne leur demandez rien"]),
    p("7. Mets à la forme négative : « Niry et Beby lui parlent. » « Ils ont vu quelqu'un. »"),
    pAns("R.A. : Niry et Beby ne lui parlent pas. Ils n'ont vu personne.", ["personne"]),
    p("8. Comment trouve-t-on une morale cachée ? (les trois questions)"),
    pAns("R.A. : qui gagne ? grâce à quoi ? quelle leçon en une phrase ?", ["qui gagne"]),
    p("9. Donne trois secrets du conteur."),
    pAns("R.A. : la formule d'ouverture, la voix qui change avec les personnages, le silence avant le moment fort.", ["le silence"]),
    p("10. Donne les six étapes du canevas d'un conte."),
    pAns("R.A. : le héros et son lieu ; la paix troublée ; le départ ; la rencontre (conseil ou interdit) ; l'épreuve ; l'issue.", ["l'épreuve"]),
  ];
}

// ---------- Test (S72) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s72", "SÉANCE 72 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 6 : LE MONDE IMAGINAIRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : morale — héros — légende — il était une fois. 1. Le conte commence souvent par « … ». 2. Le … part affronter l'épreuve. 3. La fable se termine par une …. 4. L'histoire du rocher en forme de femme est une ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Lis : « Il était une fois une rivière qui chantait. Un jour, elle se tut : un rocher lui fermait la gorge. La petite Vola grimpa sur la colline, souleva le rocher et le roula au loin. Depuis ce jour, la rivière chante pour Vola. » 1. Début : qui ? où ? 2. Qu'est-ce qui a troublé la paix ? 3. Comment la paix revient-elle ? 4. Relève un verbe de mouvement et un verbe d'action.")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Mets à la forme négative : 1. « Vola lui parle. » 2. « Vous leur demandez de l'aide. » (avec rien) 3. « Elle a rencontré quelqu'un. » (avec personne) 4. Écris l'interdit d'un conte avec ne … jamais.")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Infère la morale du texte de l'exercice 2 : 1. Qui gagne ? 2. Grâce à quoi ? 3. Écris la morale en une phrase. 4. Conte ou fable ? Justifie.")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris le début d'un conte de ton monde imaginaire (quatre à cinq lignes) : « il était une fois » + un héros + un lieu, puis « un jour » + ce qui trouble la paix, avec un verbe de mouvement.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : il était une fois — héros — morale — légende. (1 pt chacun)", ["morale"]),
    pAns("Ex.2 : 1. une rivière qui chantait, près d'une colline ; la petite Vola. 2. un rocher a fait taire la rivière. 3. Vola soulève le rocher et le roule au loin. 4. grimpa (mouvement) ; souleva (action). (1 pt chacun)", ["souleva"]),
    pAns("Ex.3 : 1. Vola ne lui parle pas. 2. Vous ne leur demandez rien. 3. Elle n'a rencontré personne. 4. exemple : N'entre jamais dans la grotte aux chauves-souris ! (1 pt chacun)", ["rien"]),
    pAns("Ex.4 : 1. Vola (et la rivière). 2. grâce à son courage, à son effort. 3. qui agit avec courage rend la vie à son village. 4. un conte : récit merveilleux, morale non écrite. (1 pt chacun)", ["courage"]),
    pAns("Ex.5 : formule d'ouverture + héros + lieu (2 pts) ; la paix troublée avec un verbe de mouvement (1 pt) ; correction de la langue (1 pt).", ["formule"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS61(), pageBreak(), ...lessonS61(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...ficheS64(), pageBreak(), ...lessonS64(), pageBreak(),
    ...ficheS65(), pageBreak(), ...lessonS65(), pageBreak(),
    ...ficheS66(), pageBreak(), ...lessonS66(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...ficheS68(), pageBreak(), ...lessonS68(), pageBreak(),
    ...ficheS69(), pageBreak(), ...lessonS69(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 6", COLOR, [
      "Je distingue le conte, la fable, la légende et le mythe.",
      "Je comprends un conte avec la grille Début / Milieu / Fin et je résume les péripéties.",
      "Je repère l'explicite et je devine l'implicite.",
      "J'emploie les formules du conte : il était une fois, un jour, depuis ce jour…",
      "Je rends mes récits vivants avec les verbes d'action et de mouvement.",
      "J'emploie la négation et les pronoms lui, leur sans me tromper : ne lui parle pas !",
      "J'infère la morale : qui gagne ? grâce à quoi ? quelle leçon ?",
      "Je raconte un conte en public et j'invente le mien, en six étapes.",
      "Je lis mon conte avec confiance, précision et prosodie.",
    ], "BRAVO ! LES 72 SÉANCES SONT TERMINÉES → LES ANNEXES T'ATTENDENT"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
