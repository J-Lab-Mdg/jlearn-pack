// Français T6 — UNITÉ 4 — LES SPORTS (10 leçons + révision + test) — Séances 37 à 48 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange sports
const SHADE = "FDEBD0";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 4 — LES SPORTS", title, slo,
  values: "persévérance, goût de l'effort", session, materials,
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

// passage de compréhension orale (S37)
function passageReportage() {
  return box("PASSAGE D'ÉCOUTE — reportage « La finale de pétanque d'Ambohidava »", [
    p("Dimanche après-midi, sur le terrain de pétanque du marché d'Ambohidava, tout le village retenait son souffle. En finale du tournoi annuel, l'équipe des jeunes affrontait celle des anciens — et les anciens, ici, ne perdent presque jamais."),
    p("La partie s'est jouée en triplette, trois joueurs de chaque côté. Pendant deux heures, les boules d'acier ont claqué sous les applaudissements. À douze points partout, le jeune Naivo, treize ans, s'est avancé pour la dernière boule. Le cochonnet était loin, collé contre la boule des anciens. Naivo a respiré un grand coup, puis il a tiré : un carreau ! La boule des anciens a volé, la sienne a pris sa place. Treize à douze — les jeunes ont gagné."),
    p("« J'ai raté ce tir cent fois à l'entraînement, a souri Naivo, le trophée dans les bras. Alors je l'ai recommencé cent fois. » Le doyen des anciens lui a serré la main : dans ce sport où les Malgaches comptent parmi les meilleurs du monde, la relève est prête.", { after: 40 }),
  ]);
}
// texte de lecture (S39)
function texteBienfaits() {
  return box("TEXTE DE LECTURE — « Pourquoi faire du sport ? »", [
    p("Pourquoi les médecins, les enseignants et les parents répètent-ils tous la même chose : « Fais du sport » ? Parce que le corps est fait pour bouger. Quand on court, le cœur devient plus fort, les muscles se développent et l'endurance grandit : on peut faire un effort plus longtemps sans se fatiguer. Le soir, on dort mieux."),
    p("Mais le sport ne travaille pas que le corps. Il apprend la persévérance : on rate, on recommence, on progresse. Il donne confiance en soi et il rapproche : sur un terrain, on trouve des coéquipiers, des adversaires qu'on respecte, souvent des amis."),
    p("Attention pourtant à l'excès. Celui qui s'entraîne sans repos finit par se blesser : les muscles aussi ont besoin de dormir. Et celui qui ne pense qu'au ballon oublie ses leçons — un sportif qui néglige l'école se ferme des portes."),
    p("La règle d'or tient en un mot : l'équilibre. Du sport pour le corps et pour l'esprit, du repos pour les muscles, du temps pour les études. C'est à ce prix que le sport rend plus fort — sur le terrain et en dehors.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 4 — LES SPORTS", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("On rate, on recommence, on progresse.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_sports.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un reportage et un texte explicatif sur le sport, avec la grille où ? quand ? quoi ? comment ? ;"),
    p("• employer les mots du sport : les types de sport, les règles de jeu, les comportements du sportif ;"),
    p("• reconnaître et employer les quatre types de phrases et leurs formes ;"),
    p("• utiliser la négation au passé composé : je n'ai pas gagné, il n'a jamais abandonné ;"),
    p("• étoffer mes explications avec la périphrase : le ballon rond, la petite reine… ;"),
    p("• donner mon opinion, poser des questions et exposer les bienfaits d'un sport ;"),
    p("• inventer un nouveau sport et rédiger ses règles de jeu ;"),
    p("• lire un reportage et une règle de jeu à haute voix.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte EXPLICATIF", { bold: true, color: COLOR }),
        run(" (expliquer pourquoi et comment).")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("la persévérance et le goût de l'effort.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S37 — Compréhension orale ----------
function ficheS37() {
  const meta = META("Compréhension orale : reportage « La finale de pétanque d'Ambohidava »",
    "À la fin de la séance, l'apprenant repère les informations importantes d'un reportage sportif entendu et déduit le sens des mots inconnus.",
    "1 / 12", "texte du passage, grille où/quand/quoi/comment au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 3 : redis les étapes d'un tutoriel de ton choix, avec les connecteurs.")],
      [fp("Répondent."),
       fp("R.A. : D'abord allumer le téléphone, ensuite ouvrir l'appareil photo, enfin appuyer sur le bouton.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Demandez : quels sports pratique-t-on dans notre région ? Lesquels avez-vous déjà regardés avec le village entier ? Introduisez le mot : un reportage (un récit vivant d'un événement réel, comme à la radio).")],
      [fp("Répondent, partagent."),
       fp("R.A. : le football, la pétanque, la course ; on écoute les matchs à la radio.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un reportage — La finale de pétanque d'Ambohidava ». Tracez la grille : Où ? Quand ? Quoi ? Comment ? Rappelez la méthode des mots inconnus : décomposition, contexte, dictionnaire.")],
      [fp("Écoutent, copient la grille.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage avec le ton du reporter (ou faites écouter l'enregistrement). Questions globales : de quel événement s'agit-il ? qui gagne ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : la finale du tournoi de pétanque ; l'équipe des jeunes, grâce au tir de Naivo.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Faites compléter la grille : Où ? (le terrain du marché d'Ambohidava) Quand ? (dimanche après-midi) Quoi ? (la finale du tournoi annuel) Comment ? (en triplette, 13 à 12, sur un carreau). Puis les mots du jeu par le contexte : une triplette (trois joueurs), le cochonnet (la petite boule qu'on vise), un carreau (le tir qui chasse la boule et prend sa place).")],
      [fp("Complètent la grille, déduisent les mots."),
       fp("R.A. : une triplette = une équipe de trois ; le cochonnet = la petite boule cible.")],
      "Complétion", "Grille au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites résumer le reportage avec la grille, puis interrogez sur la valeur : que nous apprend la phrase de Naivo — « J'ai raté ce tir cent fois, alors je l'ai recommencé cent fois » ?")],
      [fp("Résument. Dégagent la valeur."),
       fp("R.A. : la persévérance : on rate, on recommence, on réussit.")],
      "Reformulation", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : rejouez l'interview — un reporter pose trois questions (où ? comment ? que ressens-tu ?), Naivo répond. Quelques binômes présentent.")],
      [fp("Jouent l'interview."),
       pAns("R.A. : — Où la finale s'est-elle jouée ? — Sur le terrain du marché. — Comment as-tu réussi ? — J'ai respiré un grand coup et j'ai tiré, comme à l'entraînement.", ["l'entraînement"], { size: SZ.FICHE })],
      "Binômes — jeu de rôle", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Remplis la grille : où ? quand ? quoi ? comment ?"),
       fp("2. Que veut dire « une triplette » ? « le cochonnet » ?"),
       fp("3. Quelle qualité du sportif la phrase de Naivo montre-t-elle ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. au marché d'Ambohidava — dimanche après-midi — la finale de pétanque — en triplette, 13 à 12. 2. une équipe de trois ; la petite boule qu'on vise. 3. la persévérance.", ["persévérance"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS37() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("ÉCOUTER UN REPORTAGE SPORTIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageReportage(),
    p("", { after: 80 }),
    sub("Le reportage :"),
    p("C'est le récit vivant d'un événement réel, fait par un témoin : on entend le lieu, le moment, les actions, l'émotion.", { after: 60 }),
    sub("Ma grille d'écoute :"),
    p("• Où ? — le terrain du marché d'Ambohidava ;"),
    p("• Quand ? — dimanche après-midi ;"),
    p("• Quoi ? — la finale du tournoi de pétanque ;"),
    p("• Comment ? — en triplette, 13 à 12, sur un dernier tir.", { after: 60 }),
    sub("Mots du texte (devinés par le contexte) :"),
    mot("une triplette", "une équipe de trois joueurs"),
    mot("le cochonnet", "la petite boule que l'on vise"),
    mot("un carreau", "le tir qui chasse la boule adverse et prend sa place"),
    mot("la relève", "ceux qui prendront la suite des anciens"),
    p("", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("« J'ai raté cent fois, alors j'ai recommencé cent fois » — c'est la persévérance, la première qualité du sportif.")]),
  ];
}

// ---------- S38 — Lexique ----------
function ficheS38() {
  const meta = META("Lexique : les mots du sport",
    "À la fin de la séance, l'apprenant nomme les types de sport, les mots des règles de jeu et les comportements du sportif, et parle des avantages et des inconvénients du sport.",
    "2 / 12", "images de sports, étiquettes de mots");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Redis la grille du reportage de la séance 37.")],
      [fp("Répondent."),
       fp("R.A. : au marché — dimanche — la finale de pétanque — en triplette, 13 à 12.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Affichez des images : football, course, pétanque, lutte. Question : lesquels se jouent en équipe ? lesquels se jouent seul ?")],
      [fp("Observent, trient."),
       fp("R.A. : le football en équipe ; la course seul.")],
      "Observation guidée", "Images"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots du sport ». Objectif : nommer les sports, les mots des règles et les qualités du sportif.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Classement d'étiquettes en trois familles : LES TYPES DE SPORT — collectifs (le football, le basket, le rugby), individuels (la course, la natation, la pétanque), de chez nous (le moraingy, la savika) ; LES MOTS DES RÈGLES — le terrain, l'équipe, l'arbitre, la faute, le point, le but, gagner, perdre, égalité ; LE COMPORTEMENT DU SPORTIF — s'entraîner, persévérer, respecter l'arbitre et l'adversaire, le fair-play, encourager.")],
      [fp("Classent les étiquettes."),
       fp("R.A. : trois familles — les sports, les règles, le comportement.")],
      "Jeux", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Débattez brièvement : quels sont les avantages du sport ? (la santé, l'endurance, les amis, la confiance) ses inconvénients si l'on exagère ? (les blessures, la fatigue, les leçons négligées). Notez en deux colonnes + / –.")],
      [fp("Proposent, classent."),
       fp("R.A. : + un cœur plus fort, des amis ; – des blessures si l'on ne se repose pas.")],
      "Questions-réponses", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez les familles et les deux colonnes. Insistez : le bon sportif gagne sans se vanter et perd sans accuser — c'est le fair-play.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu « Qui suis-je ? » : « Je siffle les fautes. » — « On me marque entre deux poteaux. » — « Je me joue à trois contre trois, avec des boules d'acier. » Puis chaque binôme invente une devinette.")],
      [fp("Devinent, inventent."),
       pAns("R.A. : l'arbitre ; le but ; la pétanque en triplette.", ["l'arbitre"], { size: SZ.FICHE })],
      "Binômes — jeu", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne un sport collectif, un sport individuel et un sport de chez nous."),
       fp("2. Emploie dans une phrase : l'arbitre, la faute."),
       fp("3. Donne un avantage et un inconvénient du sport.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le football ; la course ; le moraingy. 2. L'arbitre a sifflé une faute contre notre équipe. 3. il rend le cœur plus fort ; trop d'entraînement blesse.", ["moraingy"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS38() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES MOTS DU SPORT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Les types de sport :"),
    mot("les sports collectifs", "le football, le basket, le rugby — on joue en équipe"),
    mot("les sports individuels", "la course, la natation, la pétanque — on se mesure seul"),
    mot("les sports de chez nous", "le moraingy (la boxe traditionnelle), la savika (l'affrontement du zébu)"),
    p("", { after: 60 }),
    sub("2. Les mots des règles de jeu :"),
    mot("le terrain, l'équipe, l'arbitre", "le lieu, les joueurs, celui qui fait respecter les règles"),
    mot("la faute, le point, le but", "ce qui est interdit ; ce que l'on marque"),
    mot("gagner, perdre, l'égalité", "les trois issues d'un match"),
    p("", { after: 60 }),
    sub("3. Le comportement du sportif :"),
    mot("s'entraîner, persévérer", "recommencer jusqu'à réussir"),
    mot("le fair-play", "gagner sans se vanter, perdre sans accuser"),
    mot("respecter, encourager", "l'arbitre, l'adversaire, ses coéquipiers"),
    p("", { after: 60 }),
    sub("4. Avantages et inconvénients :"),
    p("+ un cœur plus fort, l'endurance, la confiance, des amis ;"),
    p("– si l'on exagère : les blessures, la fatigue, les leçons négligées.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("le sport rend plus fort quand il reste équilibré : de l'effort, du repos, du temps pour l'école.")]),
  ];
}

// ---------- S39 — Compréhension écrite ----------
function ficheS39() {
  const meta = META("Compréhension écrite : « Pourquoi faire du sport ? » — le texte explicatif",
    "À la fin de la séance, l'apprenant repère les informations d'un texte explicatif, déduit le sens des mots inconnus et dégage la structure de l'explication.",
    "3 / 12", "texte de lecture (un par binôme si possible), un dictionnaire");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Type de sport ? la natation — le rugby — la savika.")],
      [fp("Répondent."),
       fp("R.A. : individuel, collectif, de chez nous.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Demandez : pourquoi vous dit-on de faire du sport ? Notez trois réponses au tableau — nous vérifierons si le texte les confirme.")],
      [fp("Proposent des hypothèses."),
       fp("R.A. : pour être en bonne santé ; pour s'amuser ; pour devenir fort.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension écrite : Pourquoi faire du sport ? ». Consigne : lecture silencieuse ; souligner les mots inconnus.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : à quelle question le texte répond-il ? Combien de paragraphes ? Que fait chacun ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : pourquoi faire du sport ; quatre paragraphes — le corps, l'esprit, l'excès, l'équilibre.")],
      "Lecture silencieuse", "Texte de lecture"),
    stepRow(["4. Analyse", "(lecture analytique)"],
      [fp("Mots inconnus avec la méthode : l'endurance (contexte : « faire un effort plus longtemps » → la résistance à l'effort) ; se blesser (famille de blessure) ; l'excès (contraire de l'équilibre → le trop). Puis la structure de l'explication : une question au départ, une réponse avec parce que, des exemples, une conclusion. Relevez les marques : « Pourquoi… ? », « Parce que », « Attention pourtant », « La règle d'or ».")],
      [fp("Déduisent, relèvent la structure."),
       fp("R.A. : question → explication → mise en garde → conclusion.")],
      "Analyse", "Texte + dictionnaire"),
    stepRow(["5. Synthèse"],
      [fp("Dégagez : le texte explicatif répond à pourquoi ? comment ? avec des causes, des exemples et souvent un plan visible. Vérifiez les hypothèses de départ : confirmées ?")],
      [fp("Récapitulent, vérifient leurs hypothèses."),
       fp("R.A. : nos trois idées sont dans le texte, et il ajoute la mise en garde contre l'excès.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez chaque paragraphe en une phrase, avec vos propres mots. Quelques binômes lisent leur résumé en quatre phrases.")],
      [fp("Résument."),
       pAns("R.A. : Le sport fortifie le corps. Il forme aussi l'esprit et donne des amis. Trop de sport blesse et fait oublier l'école. Le secret, c'est l'équilibre.", ["l'équilibre"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne deux bienfaits du sport pour le corps et un pour l'esprit."),
       fp("2. Que risque celui qui s'entraîne sans repos ?"),
       fp("3. Que veut dire « l'endurance » ? Comment l'as-tu deviné ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. un cœur plus fort, un meilleur sommeil ; la confiance en soi. 2. il finit par se blesser. 3. la résistance à l'effort ; grâce au contexte (« faire un effort plus longtemps »).", ["l'endurance"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS39() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN TEXTE EXPLICATIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteBienfaits(),
    p("", { after: 80 }),
    sub("La structure de l'explication :"),
    p("1. une QUESTION : « Pourquoi faire du sport ? » ;"),
    p("2. une RÉPONSE avec des causes : « Parce que le corps est fait pour bouger » ;"),
    p("3. des EXEMPLES : le cœur, les muscles, le sommeil, les amis ;"),
    p("4. une CONCLUSION : « La règle d'or tient en un mot : l'équilibre. »", { after: 60 }),
    sub("Les indices du texte explicatif :"),
    p("pourquoi ? comment ? — parce que, car, grâce à — des exemples — un plan visible (paragraphes).", { after: 60 }),
    sub("Mots du texte :"),
    mot("l'endurance", "la résistance à l'effort — faire un effort longtemps sans se fatiguer"),
    mot("se blesser", "se faire mal (de la famille de blessure)"),
    mot("l'excès", "le trop — le contraire de l'équilibre"),
    mot("négliger", "ne pas s'occuper de ce qui compte"),
  ];
}

// ---------- S40 — Les types de phrases ----------
function ficheS40() {
  const meta = META("Les types de phrases : déclarative, interrogative, exclamative, impérative",
    "À la fin de la séance, l'apprenant identifie la structure des quatre types de phrases et les emploie pour communiquer efficacement.",
    "4 / 12", "phrases du reportage et du texte au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les quatre parties du texte « Pourquoi faire du sport ? » ?")],
      [fp("Répondent."),
       fp("R.A. : question, réponse avec causes, mise en garde, conclusion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Corpus au tableau : 1. « Les jeunes ont gagné la finale. » 2. « Qui a tiré la dernière boule ? » 3. « Quel tir magnifique ! » 4. « Entraînez-vous tous les jours. » Question : ces phrases font-elles la même chose ?")],
      [fp("Comparent."),
       fp("R.A. : non — l'une raconte, l'une demande, l'une s'exclame, l'une ordonne.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Les types de phrases ». Chaque phrase a un type, selon ce qu'elle fait : déclarer, interroger, exclamer, ordonner.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Étude de la structure : DÉCLARATIVE — sujet + verbe, finit par un point ; INTERROGATIVE — trois constructions : Est-ce que les jeunes ont gagné ? / Les jeunes ont-ils gagné ? / Qui a gagné ? — finit par « ? » ; EXCLAMATIVE — Quel tir ! Comme il joue bien ! — finit par « ! » ; IMPÉRATIVE — verbe sans sujet : Entraînez-vous ! — ordre ou conseil.")],
      [fp("Relèvent les structures."),
       fp("R.A. : l'interrogative a trois constructions ; l'impérative n'a pas de sujet.")],
      "Analyse", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Transformation en chaîne : « Naivo s'entraîne chaque matin. » → interrogez (trois façons), exclamez, ordonnez. Faites remarquer les mots interrogatifs : qui, que, où, quand, comment, combien, pourquoi.")],
      [fp("Transforment."),
       fp("R.A. : Est-ce que Naivo s'entraîne ? / Naivo s'entraîne-t-il ? / Quand s'entraîne-t-il ? — Comme il s'entraîne ! — Entraîne-toi chaque matin !")],
      "Complétion", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez le tableau des quatre types : rôle, structure, signe final. Insistez : le type se choisit selon ce qu'on veut faire — informer, demander, s'émerveiller, faire agir.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu du reporter : en binômes, trois questions sur le sport préféré du camarade (trois constructions différentes), une exclamation sur sa réponse, un conseil à l'impératif.")],
      [fp("Jouent, questionnent."),
       pAns("R.A. : Quel sport préfères-tu ? Est-ce que tu t'entraînes ? Où joues-tu ? — Quel beau choix ! — Persévère !", ["Persévère"], { size: SZ.FICHE })],
      "Binômes — jeu", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne le type : « Respecte l'arbitre. » — « L'équipe a perdu ? » — « Quelle finale ! » — « Le match commence à trois heures. »"),
       fp("2. Pose la question de trois façons : « Le match est fini. »"),
       fp("3. Écris un conseil de sportif à l'impérative.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. impérative, interrogative, exclamative, déclarative. 2. Est-ce que le match est fini ? / Le match est-il fini ? / Quand le match finit-il ? 3. Repose-toi après l'effort.", ["impérative"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS40() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES QUATRE TYPES DE PHRASES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. La phrase déclarative — pour informer :"),
    p("Sujet + verbe, point final. « Les jeunes ont gagné la finale. »", { after: 60 }),
    sub("2. La phrase interrogative — pour demander (trois constructions) :"),
    p("• Est-ce que les jeunes ont gagné ?"),
    p("• Les jeunes ont-ils gagné ? (inversion)"),
    p("• Qui a gagné ? Quand ? Comment ? Pourquoi ? (mot interrogatif)", { after: 60 }),
    sub("3. La phrase exclamative — pour l'émotion :"),
    p("« Quel tir magnifique ! » « Comme il joue bien ! »", { after: 60 }),
    sub("4. La phrase impérative — pour faire agir :"),
    p("Verbe sans sujet : « Entraînez-vous tous les jours. » « Respecte l'arbitre. »", { after: 60 }),
    sub("Je choisis le type selon ce que je veux faire :"),
    p("informer → déclarative ; demander → interrogative ; m'émerveiller → exclamative ; conseiller, ordonner → impérative.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("le signe final est l'indice du type : . pour déclarer, ? pour demander, ! pour s'exclamer, . ou ! pour ordonner.")]),
  ];
}

// ---------- S41 — Formes de phrases, négation au passé composé ----------
function ficheS41() {
  const meta = META("Les formes de phrases ; la négation au passé composé",
    "À la fin de la séance, l'apprenant distingue la forme affirmative et la forme négative et place correctement la négation au passé composé.",
    "5 / 12", "phrases du reportage au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les quatre types de phrases, avec un exemple sportif chacun.")],
      [fp("Répondent."),
       fp("R.A. : L'équipe gagne. / Qui gagne ? / Quelle équipe ! / Gagnez !")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Naivo a raté son tir. » / « Naivo n'a pas raté son tir. » Même type (déclaratif) — qu'est-ce qui change ?")],
      [fp("Comparent."),
       fp("R.A. : la première affirme, la seconde nie : c'est la forme de la phrase.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Les formes de phrases ; la négation au passé composé ». Tout type de phrase a deux formes : affirmative ou négative.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus au passé composé : 1. « Je n'ai pas gagné. » 2. « Il n'a jamais abandonné. » 3. « Nous n'avons rien perdu. » 4. « Elle n'a plus rejoué. » 5. « Ils n'ont vu personne sur le terrain. » Faites encadrer l'auxiliaire et le participe passé, puis entourer les deux mots de la négation : où se placent-ils ?")],
      [fp("Encadrent, observent."),
       fp("R.A. : pas, jamais, plus, rien se placent entre l'auxiliaire et le participe ; personne se place après le participe.")],
      "Analyse", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Dégagez les deux schémas : sujet + ne + auxiliaire + pas/jamais/plus/rien + participe passé ; MAIS sujet + ne + auxiliaire + participe passé + personne. Entraînez la transformation : « L'équipe a perdu. » → avec jamais ; « L'arbitre a sifflé. » → avec rien (L'arbitre n'a rien sifflé) ; « J'ai rencontré le champion. » → avec personne.")],
      [fp("Transforment."),
       fp("R.A. : L'équipe n'a jamais perdu. — Je n'ai rencontré personne.")],
      "Complétion", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : la forme (affirmative/négative) se combine avec tous les types ; au passé composé, la négation entoure l'auxiliaire — sauf personne, qui attend la fin.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu du mauvais perdant et du bon perdant : le mauvais dit « Je n'ai rien raté ! L'arbitre n'a jamais sifflé juste ! » — le bon dit la même chose avec fair-play, à la forme affirmative. Les binômes écrivent puis jouent les deux versions.")],
      [fp("Écrivent, jouent."),
       pAns("R.A. : J'ai raté quelques tirs ; l'arbitre a bien fait son travail. Nous ferons mieux la prochaine fois !", ["fair-play"], { size: SZ.FICHE })],
      "Binômes — jeu de rôle", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Mets à la forme négative (passé composé) : « Nous avons perdu. » (avec jamais)"),
       fp("2. « Elle a vu quelqu'un. » → avec personne."),
       fp("3. « J'ai tout raté. » → avec rien.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Nous n'avons jamais perdu. 2. Elle n'a vu personne. 3. Je n'ai rien raté.", ["personne"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS41() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("FORMES DE PHRASES — LA NÉGATION AU PASSÉ COMPOSÉ", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Tout type de phrase a deux formes :"),
    p("• affirmative : « Naivo a raté son tir. »"),
    p("• négative : « Naivo n'a pas raté son tir. »", { after: 60 }),
    sub("La négation au passé composé — schéma 1 :"),
    p("sujet + ne + auxiliaire + pas / jamais / plus / rien + participe passé"),
    p("« Je n'ai pas gagné. » — « Il n'a jamais abandonné. » — « Nous n'avons rien perdu. » — « Elle n'a plus rejoué. »", { after: 60 }),
    sub("Schéma 2 — personne attend la fin :"),
    p("sujet + ne + auxiliaire + participe passé + personne"),
    p("« Ils n'ont vu personne sur le terrain. » — « Je n'ai rencontré personne. »", { after: 60 }),
    sub("Attention :"),
    p("• ne devient n' devant une voyelle : « Il n'a jamais… » ;"),
    p("• on ne dit pas « Je n'ai vu pas » : pas se place avant le participe.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("au passé composé, la négation entoure l'auxiliaire — sauf personne, qui se place après le participe passé.")]),
  ];
}

// ---------- S42 — La périphrase ----------
function ficheS42() {
  const meta = META("La périphrase : étoffer l'explication, éviter la répétition",
    "À la fin de la séance, l'apprenant comprend le rôle de la périphrase et l'emploie pour étoffer ses explications et éviter les répétitions.",
    "6 / 12", "phrases d'exemple au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Mets au passé composé négatif : « voir quelqu'un » (personne) ; « tout gagner » (rien).")],
      [fp("Répondent."),
       fp("R.A. : Je n'ai vu personne ; je n'ai rien gagné.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez : « Le football est populaire. Le football se joue partout. Le football rapproche les villages. » Qu'est-ce qui gêne ? Comment améliorer sans changer le sens ?")],
      [fp("Repèrent la répétition."),
       fp("R.A. : « le football » revient trois fois ; on peut le remplacer.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « La périphrase ». Définition simple : un groupe de mots qui remplace un mot, en le décrivant. « Le ballon rond » = le football.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : le ballon rond (le football) ; le ballon ovale (le rugby) ; la petite reine (le vélo, la bicyclette) ; les boules d'acier (la pétanque) ; la boxe de chez nous (le moraingy) ; l'île Rouge (Madagascar). Faites deviner chaque périphrase : d'où vient l'image ?")],
      [fp("Devinent, expliquent l'image."),
       fp("R.A. : le ballon de football est rond ; celui du rugby est ovale ; Madagascar a la terre rouge.")],
      "Jeux", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Dégagez les deux rôles : 1. ÉVITER LA RÉPÉTITION — « Le football est populaire. Le ballon rond se joue partout. » ; 2. ÉTOFFER L'EXPLICATION — la périphrase décrit en nommant : « la pétanque, ce jeu de boules d'acier venu du Sud de la France » apprend quelque chose au lecteur. Mise en garde : une périphrase doit rester claire — si personne ne comprend, on garde le mot.")],
      [fp("Reformulent les rôles."),
       fp("R.A. : la périphrase remplace ET explique.")],
      "Analyse", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : la périphrase = un groupe de mots qui décrit à la place d'un mot ; elle évite la répétition et enrichit l'explication ; elle doit rester compréhensible.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Atelier : chaque binôme invente une périphrase pour : la natation, la course, l'arbitre, son village. La classe devine et vote pour la plus claire.")],
      [fp("Inventent, devinent."),
       pAns("R.A. : la natation = le sport de l'eau ; l'arbitre = l'homme au sifflet ; la course = le sport des jambes.", ["l'homme au sifflet"], { size: SZ.FICHE })],
      "Binômes — jeu", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que désignent : le ballon rond ? la petite reine ? l'île Rouge ?"),
       fp("2. Améliore en évitant la répétition : « La pétanque est notre fierté. La pétanque se joue partout. »"),
       fp("3. Invente une périphrase pour « l'école ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le football, le vélo, Madagascar. 2. La pétanque est notre fierté. Le jeu des boules d'acier se joue partout. 3. la maison du savoir.", ["la maison du savoir"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS42() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA PÉRIPHRASE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La périphrase, c'est :"),
    p("un groupe de mots qui remplace un mot, en le décrivant.", { after: 60 }),
    sub("Des périphrases à connaître :"),
    mot("le ballon rond", "le football"),
    mot("le ballon ovale", "le rugby"),
    mot("la petite reine", "le vélo, la bicyclette"),
    mot("les boules d'acier", "la pétanque"),
    mot("la boxe de chez nous", "le moraingy"),
    mot("l'île Rouge", "Madagascar"),
    p("", { after: 60 }),
    sub("Ses deux rôles :"),
    p("1. éviter la répétition : « Le football est populaire. Le ballon rond se joue partout. » ;"),
    p("2. étoffer l'explication : la périphrase apprend quelque chose en nommant — « la pétanque, ce jeu de boules d'acier ».", { after: 60 }),
    sub("Mise en garde :"),
    p("Une périphrase doit rester claire. Si le lecteur ne comprend plus de quoi on parle, on garde le mot simple.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("la périphrase décrit à la place de nommer : elle évite la répétition et enrichit l'explication.")]),
  ];
}

// ---------- S43 — Production orale (1) ----------
function ficheS43() {
  const meta = META("Production orale (1) : opinions et questions sur un sport défini",
    "À la fin de la séance, l'apprenant partage son opinion et pose des questions correctes concernant un sport bien défini.",
    "7 / 12", "un sport choisi par l'enseignant (affiche ou document), expressions utiles");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Que désignent « le ballon rond » et « les boules d'acier » ?")],
      [fp("Répondent."),
       fp("R.A. : le football ; la pétanque.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Présentez le sport du jour (choisi par vous : la pétanque, le football, le basket…) avec une affiche ou un court document. Premier tour : qui le pratique ? qui l'a déjà regardé ?")],
      [fp("Réagissent.")],
      "Échanges en grand groupe", "Affiche / document"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : opinions et questions ». Affichez les outils : l'opinion (à mon avis, je trouve que… parce que…) et les questions (les trois constructions de l'interrogative, les mots qui, où, quand, comment, combien, pourquoi).")],
      [fp("Lisent les outils.")], "Travail collectif", "Affiche d'expressions"),
    stepRow(["3. Observation"],
      [fp("Modelez : « À mon avis, la pétanque est un vrai sport, parce qu'elle demande de l'adresse et du calme. Et vous, qu'en pensez-vous ? Combien de joueurs faut-il ? » Faites remarquer : une opinion + une cause, puis une question qui relance.")],
      [fp("Observent le modèle."),
       fp("R.A. : l'opinion est suivie d'une cause ; la question fait parler les autres.")],
      "Modélisation", "----"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("En groupes : préparez une opinion (avec cause) sur le sport du jour et trois questions de trois constructions différentes à poser à la classe.")],
      [fp("Préparent."),
       fp("R.A. : Est-ce qu'on joue par équipes ? Les femmes jouent-elles aussi ? Où s'entraîne-t-on ?")],
      "Travail collaboratif", "Cahiers"),
    stepRow(["5. Synthèse", "(échanges)"],
      [fp("Conduisez l'échange en grand groupe : chaque groupe donne son opinion et pose ses questions ; les autres répondent. Exigez les constructions correctes et le parce que.")],
      [fp("Échangent, répondent."),
       fp("R.A. : échanges construits — opinions justifiées, questions correctes, réponses complètes.")],
      "Échanges en grand groupe", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Synthèse éclair : chaque apprenant formule en une phrase ce qu'il a appris sur le sport du jour grâce aux questions des autres.")],
      [fp("Formulent."),
       pAns("R.A. : Grâce aux questions, j'ai appris qu'une triplette compte trois joueurs et que les filles jouent aussi.", ["Grâce aux"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Observation continue : une opinion avec cause (2 pts), trois questions correctes de constructions différentes (2 pts), écoute (1 pt).")],
      [fp("Participent.")],
      "Observation continue", "Grille d'observation"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43", "PRODUCTION ORALE", COLOR);
}
function lessonS43() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 43", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("DONNER SON OPINION, POSER DES QUESTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Mon opinion, toujours avec sa cause :"),
    p("• À mon avis, la pétanque est un vrai sport, parce qu'elle demande de l'adresse et du calme."),
    p("• Je trouve que le football rapproche les villages, car tout le monde y joue.", { after: 60 }),
    sub("Mes questions — les trois constructions :"),
    p("• Est-ce que l'on joue par équipes ?"),
    p("• Les femmes jouent-elles aussi ? (inversion)"),
    p("• Combien de joueurs faut-il ? Où s'entraîne-t-on ? (mot interrogatif)", { after: 60 }),
    sub("Pour relancer l'échange :"),
    p("• Et vous, qu'en pensez-vous ?"),
    p("• Qui n'est pas d'accord ? Pourquoi ?", { after: 60 }),
    sub("Dans l'échange :"),
    p("• j'écoute la réponse jusqu'au bout ;"),
    p("• je réponds par une phrase complète, pas par un seul mot.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("une bonne question fait parler les autres ; une bonne opinion donne toujours sa raison.")]),
  ];
}

// ---------- S44 — Production orale (2) : l'exposé ----------
function ficheS44() {
  const meta = META("Production orale (2) : exposer les bienfaits d'un sport de son choix",
    "À la fin de la séance, l'apprenant présente un exposé sur les bienfaits d'un sport de son choix en respectant les règles et usages de la langue.",
    "8 / 12", "texte de la séance 39 comme réservoir d'idées, plan d'exposé au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Pose la même question de trois façons : « Le sport rend plus fort. »")],
      [fp("Répondent."),
       fp("R.A. : Est-ce que le sport rend plus fort ? / Le sport rend-il plus fort ? / Pourquoi le sport rend-il plus fort ?")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Chacun choisit son sport (celui qu'il pratique ou qu'il aime). Tour éclair : « Mon sport, c'est… »")],
      [fp("Choisissent, annoncent.")],
      "Travail individuel", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « L'exposé : les bienfaits de mon sport ». Plan au tableau : 1. je présente le sport (avec une périphrase !) ; 2. trois bienfaits, chacun avec sa cause ; 3. une mise en garde contre l'excès ; 4. une phrase de conclusion qui invite.")],
      [fp("Copient le plan.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(préparation)"],
      [fp("Préparation individuelle avec le réservoir d'idées de la séance 39 (le cœur, l'endurance, le sommeil, la confiance, les amis…). Exigez des phrases complètes et au moins une périphrase, une cause, une phrase exclamative.")],
      [fp("Préparent leurs notes.")],
      "Travail individuel", "Cahiers"),
    stepRow(["4. Analyse", "(répétition)"],
      [fp("Répétition en binômes : l'un expose, l'autre suit la grille — le plan est-il respecté ? la périphrase ? les causes ? la voix porte-t-elle ? Puis on échange.")],
      [fp("Répètent, se conseillent.")],
      "Travail collaboratif", "Grille d'écoute"),
    stepRow(["5. Synthèse", "(exposés)"],
      [fp("Passage des exposés (2 minutes chacun, sur plusieurs séances si besoin). Le public note un bienfait entendu et pose une question à la fin de chaque exposé.")],
      [fp("Exposent, écoutent, questionnent."),
       fp("R.A. : exposés structurés ; le public pose des questions correctes.")],
      "Présentation", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Retour collectif : qu'est-ce qui a rendu les meilleurs exposés convaincants ? Trois secrets au tableau.")],
      [fp("Dégagent les réussites."),
       pAns("R.A. : un plan visible ; des causes à chaque bienfait ; une conclusion qui donne envie d'essayer.", ["causes"], { size: SZ.FICHE })],
      "Travail collectif", "Tableau"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Barème de l'exposé : plan respecté (1 pt), trois bienfaits avec causes (2 pts), périphrase employée (1 pt), voix et regard (1 pt).")],
      [fp("Exposent individuellement.")],
      "Présentation notée", "Grille"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44", "PRODUCTION ORALE", COLOR);
}
function lessonS44() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 44", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("EXPOSER LES BIENFAITS D'UN SPORT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan de mon exposé :"),
    p("1. Je PRÉSENTE mon sport — avec une périphrase : « Je vais vous parler du ballon rond… » ;"),
    p("2. Je donne TROIS BIENFAITS, chacun avec sa cause : « D'abord, le football fortifie le cœur, parce qu'on court sans arrêt. » ;"),
    p("3. Je METS EN GARDE contre l'excès : « Mais il ne faut pas s'entraîner sans repos. » ;"),
    p("4. Je CONCLUS en invitant : « Venez essayer : le terrain est à tout le monde ! »", { after: 60 }),
    sub("Mes outils de langue :"),
    p("• une périphrase pour présenter ;"),
    p("• parce que, car, grâce à pour les causes ;"),
    p("• une phrase exclamative pour convaincre ;"),
    p("• les connecteurs : d'abord, ensuite, enfin.", { after: 60 }),
    sub("Devant le public :"),
    p("• je regarde la classe, pas mes notes ;"),
    p("• je parle assez fort, sans courir ;"),
    p("• à la fin, je réponds aux questions.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("un exposé convainc quand chaque bienfait a sa cause — et quand la voix donne envie d'essayer.")]),
  ];
}

// ---------- S45 — Production écrite ----------
function ficheS45() {
  const meta = META("Production écrite : inventer un nouveau sport et rédiger ses règles de jeu",
    "À la fin de la séance, l'apprenant construit des phrases d'explication à partir d'images et rédige les règles de jeu d'un sport inventé en respectant les conventions de la langue.",
    "9 / 12", "images séquentielles, règles de jeu modèles, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Le plan d'un exposé sur les bienfaits d'un sport ?")],
      [fp("Répondent."),
       fp("R.A. : présenter (périphrase), trois bienfaits avec causes, mise en garde, conclusion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(des images aux phrases)"],
      [fp("Affichez trois images : un joueur qui lance — un panier posé au sol — deux équipes face à face. Consigne : une phrase d'explication par image (déclarative, au présent).")],
      [fp("Construisent les phrases."),
       fp("R.A. : Le joueur lance le ballon. — On marque dans le panier posé au sol. — Deux équipes s'affrontent.")],
      "Jeux", "Images"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Inventer un nouveau sport et rédiger ses règles de jeu ». Exemple au tableau : LE SOBIKA-BALL — un sport inventé avec un panier (sobika) et un ballon de chiffon. Lisez le modèle de règles : nom, matériel, terrain, joueurs, règles numérotées, but du jeu.")],
      [fp("Découvrent le modèle.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(la forme des règles de jeu)"],
      [fp("Dégagez la forme : un NOM de sport ; le MATÉRIEL et le TERRAIN (phrases déclaratives) ; le NOMBRE DE JOUEURS ; quatre ou cinq RÈGLES numérotées — dont au moins une interdiction à la forme négative ; le BUT DU JEU (comment on gagne).")],
      [fp("Relèvent la forme."),
       fp("R.A. : les règles sont numérotées ; une interdiction est à la forme négative.")],
      "Observation guidée", "Modèle au tableau"),
    stepRow(["4. Analyse", "(premier jet)"],
      [fp("En binômes : inventez votre sport (avec le matériel de chez nous : sobika, corde, ballon de chiffon, bâtons…) et rédigez le premier jet. Circulez : vérifiez les phrases complètes, la numérotation, l'interdiction négative.")],
      [fp("Inventent, rédigent.")],
      "Rédaction en binômes", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture guidée)"],
      [fp("Grille au tableau : 1. mon sport a-t-il un nom ? 2. matériel, terrain, joueurs sont-ils précisés ? 3. mes règles sont-elles numérotées et claires ? 4. une interdiction à la forme négative ? 5. le but du jeu dit-il comment gagner ? Relecture croisée entre binômes.")],
      [fp("Relisent, corrigent."),
       fp("R.A. : nous avons oublié le nombre de joueurs ; nous l'ajoutons.")],
      "Relecture guidée", "Grille au tableau"),
    stepRow(["6. Entraînement"],
      [fp("Test grandeur nature : chaque binôme lit ses règles à un autre binôme, qui doit expliquer le jeu avec ses propres mots — si l'explication est fausse, une règle manque de clarté. Mise au propre.")],
      [fp("Testent, améliorent, mettent au propre."),
       pAns("R.A. : ils ont cru qu'on pouvait courir avec le ballon ; nous ajoutons : « Il est interdit de courir en portant le ballon. »", ["interdit"], { size: SZ.FICHE })],
      "Binômes — test", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Remise des règles de jeu. Barème : nom + matériel + terrain + joueurs (1 pt), quatre règles numérotées et claires (2 pts), une interdiction négative (1 pt), but du jeu (1 pt).")],
      [fp("Remettent leur travail.")],
      "Travail individuel", "----"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS45() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("RÉDIGER DES RÈGLES DE JEU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La forme des règles de jeu :"),
    p("• le NOM du sport ;"),
    p("• le MATÉRIEL et le TERRAIN (phrases déclaratives au présent) ;"),
    p("• le NOMBRE DE JOUEURS ;"),
    p("• quatre ou cinq RÈGLES numérotées — dont une interdiction à la forme négative ;"),
    p("• le BUT DU JEU : comment on gagne.", { after: 60 }),
    sub("Modèle — un sport inventé :"),
    p("LE SOBIKA-BALL", { after: 30 }),
    p("Matériel : un panier (sobika) et un ballon de chiffon. Terrain : la cour, partagée en deux camps."),
    p("Joueurs : deux équipes de cinq."),
    p("1. On se fait des passes à la main ; le ballon ne touche pas le sol."),
    p("2. Il est interdit de courir en portant le ballon."),
    p("3. On ne bouscule personne : toute poussée donne le ballon à l'autre équipe."),
    p("4. Pour marquer, on lance le ballon dans la sobika du camp adverse."),
    p("But du jeu : la première équipe à dix paniers gagne la partie.", { after: 60 }),
    sub("Ma grille de relecture :"),
    p("1. Nom, matériel, terrain, joueurs ? 2. Règles numérotées et claires ? 3. Une interdiction négative ? 4. Le but du jeu ? 5. Mes phrases sont-elles complètes ?", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("une règle de jeu réussie se vérifie en jouant : si les joueurs se disputent, une règle manque de clarté.")]),
  ];
}

// ---------- S46 — Lecture-fluidité ----------
function ficheS46() {
  const meta = META("Lecture-fluidité : lire un reportage et une règle de jeu",
    "À la fin de la séance, l'apprenant lit un reportage et une règle de jeu avec précision et un rythme adapté, en s'appuyant sur la ponctuation.",
    "10 / 12", "reportage de la séance 37, règles de jeu des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Le code des signes : la virgule, le point, les deux-points, le point d'exclamation.")],
      [fp("Répondent."),
       fp("R.A. : pause courte ; pause longue ; annonce ; la voix s'anime.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez la fin du reportage d'une voix plate, puis avec la voix du reporter (suspense, exclamation). Quelle version donne envie d'écouter ?")],
      [fp("Comparent."),
       fp("R.A. : la seconde — on vit le match.")],
      "Modélisation de la lecture", "Texte de la S37"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : le reportage et la règle de jeu ». Deux lectures différentes : le reportage se lit avec vie ; la règle de jeu se lit posément, étape par étape.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Repérage dans le reportage : les virgules du récit, les deux-points avant « un carreau ! », l'exclamation, les guillemets de la citation de Naivo (on change de voix). Dans une règle de jeu : les numéros détachés, le point ferme après chaque règle.")],
      [fp("Repèrent."),
       fp("R.A. : « puis il a tiré : un carreau ! » — les deux-points préparent, l'exclamation éclate.")],
      "Lecture analytique", "Textes"),
    stepRow(["4. Analyse", "(lecture modèle puis répétée)"],
      [fp("Lecture modèle du deuxième paragraphe du reportage. Lecture répétée en binômes : deux lectures chacun — le camarade suit du doigt, note les mots déformés, vérifie la voix de la citation.")],
      [fp("Lisent, se corrigent, relisent.")],
      "Lecture répétée", "Texte de la S37"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulez : précision des mots (treize à douze, le cochonnet), rythme vivant pour le reportage, rythme posé pour la règle, autocorrections rapides.")],
      [fp("Récapitulent. Copient.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chaque binôme lit ses propres règles de jeu (séance 45) à la classe : numéros détachés, interdiction lue avec force. La classe doit pouvoir redire le but du jeu.")],
      [fp("Lisent leurs règles."),
       pAns("R.A. : lecture posée ; la classe redit le but du sobika-ball sans erreur.", ["but"], { size: SZ.FICHE })],
      "Lecture à haute voix", "Règles des apprenants"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Lecture individuelle notée : six lignes du reportage — précision, ponctuation, rythme, voix de la citation.")],
      [fp("Lisent individuellement."),
       pAns("R.A. : lecture fluide et vivante ; « un carreau ! » lu avec l'exclamation.", ["carreau"], { size: SZ.FICHE })],
      "Travail individuel", "Texte de la S37"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS46() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN REPORTAGE, LIRE UNE RÈGLE DE JEU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Deux textes, deux voix :"),
    p("• le REPORTAGE se lit avec vie : le rythme suit le match, l'exclamation éclate, la citation change de voix ;"),
    p("• la RÈGLE DE JEU se lit posément : chaque numéro détaché, un point ferme après chaque règle.", { after: 60 }),
    sub("Les signes et leur code :"),
    mot("la virgule ,", "pause courte — le récit respire"),
    mot("les deux-points :", "on prépare ce qui vient : « il a tiré : un carreau ! »"),
    mot("le point d'exclamation !", "l'émotion du match"),
    mot("les guillemets « »", "quelqu'un parle : je change de voix"),
    p("", { after: 60 }),
    sub("Pour une lecture fluide :"),
    p("• je lis chaque mot et chaque chiffre avec précision : treize à douze ;"),
    p("• je me corrige vite, sans longue pause ;"),
    p("• je m'entraîne : deux lectures valent mieux qu'une.", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("lire un reportage, c'est faire revivre le match ; lire une règle, c'est permettre de jouer sans dispute.")]),
  ];
}

// ---------- La grande leçon ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 4 : LES SPORTS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les types de sport : ", { bold: true }), run("collectifs (football, basket, rugby), individuels (course, natation, pétanque), de chez nous (moraingy, savika).", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les règles de jeu : ", { bold: true }), run("le terrain, l'équipe, l'arbitre, la faute, le point, le but.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Le sportif : ", { bold: true }), run("s'entraîner, persévérer, le fair-play, respecter, encourager.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le texte explicatif :"),
    p("il répond à pourquoi ? comment ? — une question, une réponse avec des causes, des exemples, une conclusion.", { after: 80 }),
    sub("3. Les quatre types de phrases :"),
    p("déclarative (informer), interrogative (trois constructions), exclamative (l'émotion), impérative (faire agir).", { after: 80 }),
    sub("4. Les formes de phrases — la négation au passé composé :"),
    p("sujet + ne + auxiliaire + pas/jamais/plus/rien + participe passé ; mais personne se place après le participe : « Je n'ai vu personne. »", { after: 80 }),
    sub("5. La périphrase :"),
    p("un groupe de mots qui décrit à la place d'un mot : le ballon rond, la petite reine, l'île Rouge — elle évite la répétition et étoffe l'explication.", { after: 80 }),
    sub("6. À l'oral et à l'écrit :"),
    p("l'échange : une opinion + sa cause, des questions correctes ; l'exposé : présenter (périphrase), trois bienfaits avec causes, mise en garde, conclusion ; les règles de jeu : nom, matériel, terrain, joueurs, règles numérotées, une interdiction négative, le but du jeu.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : arbitre — fair-play — s'entraîner — collectif. 1. Le football est un sport …. 2. L'… siffle les fautes. 3. Pour progresser, il faut … chaque semaine. 4. Féliciter le vainqueur quand on a perdu, c'est le ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Donne le type de chaque phrase : 1. « Quelle finale ! » 2. « L'équipe s'entraîne le samedi. » 3. « Respectez l'arbitre. » 4. « Combien de joueurs compte une triplette ? »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Mets au passé composé négatif : 1. « Nous avons perdu. » (jamais) 2. « Elle a rencontré quelqu'un. » (personne) 3. « J'ai tout gagné. » (rien) 4. « Ils ont rejoué. » (plus)")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Que désignent ces périphrases ? 1. le ballon rond 2. la petite reine 3. les boules d'acier 4. l'île Rouge. ")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Pose la question de trois façons : « La finale a lieu dimanche. » Puis écris une interdiction de règle de jeu à la forme négative.")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : collectif — arbitre — s'entraîner — fair-play. (1 pt chacun)", ["fair-play"]),
    pAns("Ex.2 : 1. exclamative — 2. déclarative — 3. impérative — 4. interrogative. (1 pt chacun)", ["exclamative"]),
    pAns("Ex.3 : 1. Nous n'avons jamais perdu. 2. Elle n'a rencontré personne. 3. Je n'ai rien gagné. 4. Ils n'ont plus rejoué. (1 pt chacun)", ["personne"]),
    pAns("Ex.4 : le football — le vélo — la pétanque — Madagascar. (1 pt chacun)", ["Madagascar"]),
    pAns("Ex.5 : Est-ce que la finale a lieu dimanche ? / La finale a-t-elle lieu dimanche ? / Quand la finale a-t-elle lieu ? (3 pts) ; exemple : « Il est interdit de bousculer l'adversaire. » / « Ne bousculez personne. » (1 pt)", ["dimanche"]),
  ];
}

// ---------- Révision (S47) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s47", "SÉANCE 47 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 4 : LES SPORTS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Donne un sport collectif, un sport individuel et un sport traditionnel malgache."),
    pAns("R.A. : le football ; la natation ; le moraingy (ou la savika).", ["moraingy"]),
    p("2. Qu'est-ce que le fair-play ?"),
    pAns("R.A. : gagner sans se vanter, perdre sans accuser ; respecter l'arbitre et l'adversaire.", ["fair-play"]),
    p("3. À quelles questions répond un texte explicatif ? Donne deux de ses indices."),
    pAns("R.A. : pourquoi ? comment ? — parce que, des exemples, un plan en paragraphes.", ["pourquoi"]),
    p("4. Donne les quatre types de phrases avec un exemple sportif chacun."),
    pAns("R.A. : L'équipe gagne. / L'équipe gagne-t-elle ? / Quelle équipe ! / Gagnez !", ["types"]),
    p("5. Pose la question de trois façons : « Naivo s'entraîne. »"),
    pAns("R.A. : Est-ce que Naivo s'entraîne ? / Naivo s'entraîne-t-il ? / Quand Naivo s'entraîne-t-il ?", ["inversion"]),
    p("6. Mets au passé composé négatif : « voir quelqu'un » (personne) ; « tout perdre » (rien)."),
    pAns("R.A. : Je n'ai vu personne. / Je n'ai rien perdu.", ["personne"]),
    p("7. Où se place « personne » dans la négation au passé composé ? Et « jamais » ?"),
    pAns("R.A. : personne après le participe passé ; jamais entre l'auxiliaire et le participe.", ["participe"]),
    p("8. Qu'est-ce qu'une périphrase ? Donne deux exemples."),
    pAns("R.A. : un groupe de mots qui décrit à la place d'un mot — le ballon rond, la petite reine.", ["périphrase"]),
    p("9. Donne le plan d'un exposé sur les bienfaits d'un sport."),
    pAns("R.A. : présenter (périphrase), trois bienfaits avec causes, mise en garde, conclusion.", ["bienfaits"]),
    p("10. Que doit contenir une règle de jeu complète ?"),
    pAns("R.A. : le nom, le matériel, le terrain, les joueurs, des règles numérotées (dont une interdiction négative), le but du jeu.", ["but du jeu"]),
  ];
}

// ---------- Test (S48) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s48", "SÉANCE 48 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 4 : LES SPORTS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : persévérer — terrain — faute — individuel. 1. La course est un sport …. 2. Les deux équipes entrent sur le …. 3. Bousculer l'adversaire est une …. 4. Rater puis recommencer, c'est ….")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Lis : « Pourquoi la pétanque plaît-elle à tous ? Parce qu'elle se joue à tout âge. Quelle adresse il faut ! Essayez-la. » Donne le type de chacune des quatre phrases.")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Mets au passé composé négatif : 1. « L'équipe a abandonné. » (jamais) 2. « Nous avons vu quelqu'un au stade. » (personne) 3. « Il a tout raté. » (rien) 4. « Elles ont rejoué. » (plus)")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Périphrases : 1-2. Que désignent « le ballon ovale » et « la boxe de chez nous » ? 3. Invente une périphrase pour « la natation ». 4. Améliore en évitant la répétition : « Le vélo est pratique. Le vélo ne coûte presque rien. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige les règles d'un sport inventé : le nom, le matériel, deux règles numérotées dont une interdiction à la forme négative, et le but du jeu.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : individuel — terrain — faute — persévérer. (1 pt chacun)", ["persévérer"]),
    pAns("Ex.2 : interrogative — déclarative — exclamative — impérative. (1 pt chacun)", ["interrogative"]),
    pAns("Ex.3 : 1. L'équipe n'a jamais abandonné. 2. Nous n'avons vu personne au stade. 3. Il n'a rien raté. 4. Elles n'ont plus rejoué. (1 pt chacun)", ["personne"]),
    pAns("Ex.4 : 1. le rugby — 2. le moraingy — 3. exemple : le sport de l'eau — 4. Le vélo est pratique. La petite reine ne coûte presque rien. (1 pt chacun)", ["la petite reine"]),
    pAns("Ex.5 : nom + matériel (1 pt) ; deux règles numérotées (1 pt) ; interdiction négative (1 pt) ; but du jeu (1 pt).", ["interdiction"]),
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
      "Je comprends un reportage sportif avec la grille où ? quand ? quoi ? comment ?",
      "J'emploie les mots du sport : les types de sport, les règles, le comportement du sportif.",
      "Je connais les avantages du sport et les risques de l'excès.",
      "Je reconnais et j'emploie les quatre types de phrases.",
      "Je pose une question de trois façons différentes.",
      "Je place la négation au passé composé : je n'ai pas gagné ; je n'ai vu personne.",
      "J'étoffe mes explications avec la périphrase : le ballon rond, la petite reine…",
      "J'expose les bienfaits d'un sport avec un plan et des causes.",
      "J'invente un sport et je rédige ses règles de jeu.",
    ], "PROCHAINE ÉTAPE → UNITÉ 5 : LES ÉVÉNEMENTS FAMILIAUX"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
