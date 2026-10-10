// Français T5 — UNITÉ 4 — LES LOISIRS (10 leçons + révision + test) — Séances 37 à 48 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange loisirs
const SHADE = "FDEBD0";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 4 — LES LOISIRS", title, slo,
  values: "courage, solidarité", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.BLUE }), ...(expl ? [run("  —  " + expl)] : [])]);
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

// passage d'écoute (S37)
function passageLoisirs() {
  return box("PASSAGE D'ÉCOUTE — « Pourquoi avons-nous besoin des loisirs ? »", [
    p("Pourquoi, après l'école et les travaux de la maison, courons-nous jouer au ballon ou écouter de la musique ? Parce que les loisirs sont une nourriture pour le corps et pour l'esprit !"),
    p("D'abord, les loisirs nous aident à nous détendre. Après une longue journée, une promenade ou une chanson chasse la fatigue : on dit qu'elle nous déstresse. Ensuite, les loisirs nous font grandir : la lecture enrichit notre vocabulaire, le dessin éduque notre œil, le sport muscle notre corps et notre courage. Enfin, les loisirs nous rapprochent des autres : dans une équipe de football, on apprend la solidarité ; autour d'un jeu de fanorona, les grands-parents transmettent leur sagesse aux petits-enfants."),
    p("Attention cependant : un loisir mal choisi peut devenir un piège. Trop de jeux vidéo fatiguent les yeux et font perdre un temps précieux ; certains passe-temps gaspillent l'argent de la famille. Ainsi, le secret est simple : choisir de bons loisirs, et leur donner leur juste place — après le travail !", { after: 40 }),
  ]);
}
// texte de lecture (S39)
function texteFanorona() {
  return box("TEXTE DE LECTURE — « Le fanorona, le jeu qui muscle l'esprit »", [
    p("Connaissez-vous le fanorona ? C'est le jeu traditionnel le plus célèbre de Madagascar. Pourquoi passionne-t-il petits et grands depuis des siècles ? Parce qu'il muscle l'esprit comme le sport muscle le corps !"),
    p("Comment joue-t-on ? Le fanorona se joue à deux, sur un plateau de lignes croisées. Chaque joueur reçoit vingt-deux pions : les blancs et les noirs. Premièrement, chacun place ses pions sur les points du plateau. Ensuite, les joueurs déplacent leurs pions l'un après l'autre, le long des lignes. Pour capturer les pions de l'adversaire, on avance vers eux ou on s'en éloigne : c'est la grande ruse du fanorona ! Enfin, le gagnant est celui qui capture tous les pions de l'autre."),
    p("Pourquoi ce jeu est-il si précieux ? En effet, le fanorona apprend à réfléchir avant d'agir, à prévoir les coups de l'adversaire, à perdre avec le sourire et à gagner avec modestie. Il ne coûte rien : un plateau tracé sur le sol et quelques cailloux suffisent. Donc, le fanorona n'est pas une perte de temps : c'est une école de patience et d'intelligence, que nos ancêtres nous ont offerte.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 4 — LES LOISIRS", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Jouer, lire, danser : grandir en s'amusant !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_loisirs.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un texte explicatif sur les loisirs ;"),
    p("• nommer les loisirs, leurs avantages et leurs inconvénients ;"),
    p("• employer les synonymes, les antonymes et la formation des mots ;"),
    p("• préciser avec les adverbes, interroger, utiliser le sujet composé et la phrase négative ;"),
    p("• conjuguer les verbes en -cer et -ger au présent (nous lançons, nous nageons !) ;"),
    p("• expliquer les règles d'un jeu à l'oral et à l'écrit ;"),
    p("• lire en écho et en chœur avec toute la classe !", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte EXPLICATIF", { bold: true, color: COLOR }),
        run(" — il répond aux questions Pourquoi ? Comment ? pour faire comprendre.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("le courage et la solidarité.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S37 — Compréhension orale ----------
function ficheS37() {
  const meta = META("Compréhension orale : « Pourquoi avons-nous besoin des loisirs ? »",
    "À la fin de la séance, l'apprenant identifie le sujet et le type d'un texte explicatif entendu et en dégage les informations essentielles.",
    "1 / 12", "texte du passage, images de loisirs");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Retour sur l'unité 3 : reliez « Voici le terrain. Nous jouons sur ce terrain. »")],
      [fp("Répondent."),
       fp("R.A. : Voici le terrain où nous jouons.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Sondage éclair : que faites-vous quand les devoirs sont finis ? Je note les réponses au tableau — notre premier nuage de loisirs !")],
      [fp("Répondent."),
       fp("R.A. : football, chansons, dessin, jeux…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Compréhension orale : Pourquoi avons-nous besoin des loisirs ? ». Remarquez le titre : c'est une QUESTION — le texte va nous EXPLIQUER la réponse.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lecture expressive. Questions globales : Quel est le sujet du texte ? Que cherche-t-il à faire : raconter, décrire ou expliquer ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : le sujet = les loisirs ; le texte explique pourquoi nous en avons besoin → texte explicatif.")],
      "Écoute active", "Texte"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relecture. Mots nouveaux : se détendre, se déstresser, transmettre, gaspiller. Déduisez le sens par le contexte et la formation des mots : DÉ-stresser = enlever le stress (le préfixe dé- de l'unité 1 !).")],
      [fp("Déduisent le sens."),
       fp("R.A. : se détendre = se reposer ; se déstresser = chasser le stress ; gaspiller = perdre, dépenser pour rien.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Carte mentale au tableau : LES LOISIRS au centre ; trois branches « bienfaits » (se détendre, grandir, se rapprocher des autres) et une branche « dangers » (perte de temps, gaspillage, fatigue). Information principale et informations secondaires.")],
      [fp("Complètent la carte mentale."),
       fp("R.A. : carte complétée ; info principale = les loisirs sont utiles s'ils sont bien choisis.")],
      "Travail collectif", "Carte mentale"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez le texte en deux phrases avec vos propres mots.")],
      [fp("Résument."),
       pAns("R.A. : Les loisirs nous détendent, nous font grandir et nous rapprochent des autres. Mais il faut bien les choisir et jouer après le travail !", ["Les loisirs"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. À quelle question le texte répond-il ?"),
       fp("2. Cite deux bienfaits des loisirs."),
       fp("3. Cite un danger d'un loisir mal choisi."),
       fp("4. Que veut dire « se déstresser » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Pourquoi avons-nous besoin des loisirs ? — 2. se détendre, grandir (ou se faire des amis) — 3. la perte de temps, le gaspillage d'argent, la fatigue — 4. chasser le stress, se détendre.", ["Pourquoi", "se détendre"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCOUTER UN TEXTE EXPLICATIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageLoisirs(),
    p("", { after: 80 }),
    sub("Le texte explicatif — premier contact :"),
    p("• Son but : expliquer, informer, faire comprendre."),
    p("• Son indice : il répond à une question — Pourquoi ? Comment ?"),
    p("• Son temps préféré : le présent de l'indicatif.", { after: 80 }),
    sub("Mes premiers mots de l'unité :"),
    mot("se détendre", "se reposer, relâcher le corps"),
    mot("se déstresser", "chasser le stress (dé- = enlever !)"),
    mot("transmettre", "donner ce que l'on sait"),
    mot("gaspiller", "dépenser pour rien"),
    mot("un passe-temps", "une activité pour les moments libres"),
  ];
}

// ---------- S38 — Lexique : les loisirs ----------
function ficheS38() {
  const meta = META("Lexique : les loisirs, leurs avantages et leurs inconvénients",
    "À la fin de la séance, l'apprenant nomme les différents types de loisirs, emploie leurs expressions, et utilise la synonymie, l'antonymie et la formation des mots.",
    "2 / 12", "étiquettes, images de loisirs, deux affiches (avantages / inconvénients)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez deux bienfaits des loisirs entendus à la séance 37.")],
      [fp("Répondent."),
       fp("R.A. : se détendre, grandir, se faire des amis…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du mime : un élève mime un loisir (pêche, danse, lecture, tricot…), la classe devine !")],
      [fp("Miment, devinent.")], "Mime", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les mots des loisirs » — les familles, les expressions, et deux outils magiques : les synonymes et les antonymes.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Classement en familles au tableau : SPORTIFS (sport, randonnée, pêche…), ARTISTIQUES (musique, danse, dessin, théâtre, tricot, écriture), CULTURELS (cinéma, lecture), NUMÉRIQUES (jeux vidéo), et les jeux (cartes, fanorona). Les expressions justes : FAIRE du vélo, JOUER aux jeux vidéo / aux cartes, PRATIQUER un sport, ALLER au cinéma / au théâtre, LIRE, ÉCRIRE.")],
      [fp("Classent, répètent les bonnes expressions."),
       fp("R.A. : faire du, jouer à/aux, pratiquer, aller au — chaque loisir a son verbe !")],
      "Observation guidée", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Les deux affiches : AVANTAGES (se distraire, se déstresser, se faire des amis) / INCONVÉNIENTS (perte de temps, gaspillage d'argent, fatigue). Puis les outils : SYNONYMES = presque le même sens (se distraire ≈ s'amuser ; passe-temps ≈ loisir) ; ANTONYMES = le contraire (avantage ≠ inconvénient ; gagner ≠ perdre) ; FORMATION DES MOTS : distraire → distraction, se promener → promenade ; dé- (déstresser), -age (gaspillage), -tion (distraction).")],
      [fp("Classent, trouvent synonymes et antonymes."),
       fp("R.A. : les paires correctes ; les suffixes fabriquent des noms.")],
      "Observation et manipulation", "Affiches"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les familles de loisirs, les expressions justes, trois paires de synonymes et trois paires d'antonymes.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("1. Trouvez le synonyme : s'amuser = ? ; un loisir = ? 2. Trouvez l'antonyme : gagner ≠ ? ; un avantage ≠ ? 3. Choisissez le bon verbe : … du vélo ; … aux cartes ; … un sport.")],
      [fp("Répondent."),
       pAns("R.A. : 1. se distraire ; un passe-temps — 2. perdre ; un inconvénient — 3. faire du vélo ; jouer aux cartes ; pratiquer un sport.", ["se distraire", "perdre", "faire", "jouer", "pratiquer"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Classe ces mots (AVANTAGE ou INCONVÉNIENT) : se faire des amis, perte de temps, se déstresser, fatigue, gaspillage d'argent, se distraire.")],
      [fp("Classent."),
       pAns("R.A. : AVANTAGES → se faire des amis, se déstresser, se distraire ; INCONVÉNIENTS → perte de temps, fatigue, gaspillage d'argent.", ["AVANTAGES", "INCONVÉNIENTS"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES MOTS DES LOISIRS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les familles de loisirs :"),
    mot("sportifs", "le sport, la randonnée, la pêche, la promenade, le vélo"),
    mot("artistiques", "la musique, la danse, le dessin, le théâtre, le tricot, l'écriture"),
    mot("culturels", "le cinéma, la lecture"),
    mot("numériques", "les jeux vidéo"),
    mot("les jeux", "les cartes, le fanorona, la marelle"),
    p("", { after: 60 }),
    sub("Chaque loisir a son verbe :"),
    pr([run("FAIRE du vélo — JOUER aux cartes — PRATIQUER un sport — ALLER au cinéma — LIRE, ÉCRIRE", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("Avantages et inconvénients :"),
    pr([run("☀ Avantages : ", { bold: true, color: C.GREEN }), run("se distraire, se déstresser, se faire des amis.")], { after: 40 }),
    pr([run("⚠ Inconvénients : ", { bold: true, color: C.RED }), run("la perte de temps, le gaspillage d'argent, la fatigue.")], { after: 80 }),
    sub("Mes outils de vocabulaire :"),
    mot("les synonymes", "presque le même sens : s'amuser ≈ se distraire"),
    mot("les antonymes", "le contraire : gagner ≠ perdre ; avantage ≠ inconvénient"),
    mot("la formation des mots", "distraire → distraction ; gaspiller → gaspillage ; dé- = enlever"),
  ];
}

// ---------- S39 — Compréhension écrite : le fanorona + texte explicatif ----------
function ficheS39() {
  const meta = META("Compréhension écrite : « Le fanorona » — le texte explicatif",
    "À la fin de la séance, l'apprenant identifie le but, les caractéristiques et la structure du texte explicatif et repère les règles et le déroulement d'un jeu.",
    "3 / 12", "texte photocopié ou recopié, un plateau de fanorona (ou dessin)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Donnez un synonyme de « s'amuser » et un antonyme de « gagner ».")],
      [fp("Répondent."),
       fp("R.A. : se distraire ; perdre.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Je montre un plateau de fanorona (ou son dessin). Qui sait y jouer ? Qui peut expliquer UNE règle ? Vérifions avec le texte !")],
      [fp("Partagent ce qu'ils savent.")], "Brainstorming", "Plateau"),
    stepRow(["2. Présentation"],
      [fp("Distribution du texte. Lecture silencieuse. Mission : découvrir comment un texte EXPLIQUE un jeu.")],
      [fp("Lisent silencieusement.")], "Lecture silencieuse", "Texte"),
    stepRow(["3. Observation", "(lecture guidée)"],
      [fp("Questions : À quelles questions le texte répond-il ? (Pourquoi ce jeu passionne-t-il ? Comment joue-t-on ?) Relevez : le matériel, le nombre de joueurs, les étapes du jeu, le but du jeu.")],
      [fp("Répondent en citant le texte."),
       fp("R.A. : 2 joueurs, 22 pions chacun, un plateau ; placer → déplacer → capturer ; gagner = capturer tous les pions.")],
      "Questionnement progressif", "Texte"),
    stepRow(["4. Analyse"],
      [fp("La carte d'identité du texte EXPLICATIF : BUT → expliquer, informer, faire comprendre ; CARACTÉRISTIQUES → il répond à Pourquoi ? Comment ?, verbes au présent de l'indicatif, connecteurs explicatifs (car, parce que, en effet, ainsi, donc) ; STRUCTURE → introduction (la question), développement (l'explication), conclusion. Soulignez les connecteurs explicatifs du texte !")],
      [fp("Soulignent, vérifient les trois parties."),
       fp("R.A. : parce que, en effet, donc… ; question posée dans l'introduction, réponse développée, conclusion.")],
      "Repérage et annotation", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Comparons nos deux types de textes : DESCRIPTIF (unités 1-3 : il décrit, répond à « c'est comment ? ») / EXPLICATIF (il explique, répond à « pourquoi ? comment ? »). Tableau comparatif au cahier.")],
      [fp("Recopient le tableau comparatif.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez les règles du fanorona en trois phrases avec vos propres mots.")],
      [fp("Résument."),
       pAns("R.A. : Le fanorona se joue à deux avec vingt-deux pions chacun. On déplace les pions le long des lignes pour capturer ceux de l'adversaire. Le gagnant est celui qui prend tous les pions de l'autre.", ["vingt-deux pions"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel est le but d'un texte explicatif ? 2. À quelles questions répond-il ? 3. Cite deux connecteurs explicatifs. 4. Combien de pions reçoit chaque joueur de fanorona ?")],
      [fp("Répondent."),
       pAns("R.A. : 1. expliquer, faire comprendre — 2. Pourquoi ? Comment ? — 3. parce que, en effet (ou car, ainsi, donc) — 4. vingt-deux.", ["Pourquoi ? Comment ?", "parce que"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE TEXTE EXPLICATIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteFanorona(),
    p("", { after: 80 }),
    sub("La carte d'identité du texte explicatif :"),
    pr([run("But : ", { bold: true }), run("expliquer, informer, faire comprendre.", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("Caractéristiques : ", { bold: true }), run("il répond aux questions "), run("Pourquoi ? Comment ?", { bold: true, color: C.RED }), run(" — verbes au présent de l'indicatif.")], { after: 40 }),
    pr([run("Structure : ", { bold: true }), run("introduction (la question) → développement (l'explication) → conclusion.")], { after: 80 }),
    sub("Les connecteurs explicatifs :"),
    pr([run("car, parce que, en effet, ainsi, donc", { bold: true, color: C.BLUE }),
        run(" — ils collent les raisons aux idées !")], { after: 80 }),
    sub("Descriptif ou explicatif ?"),
    p("• Le texte DESCRIPTIF répond à « c'est comment ? » — il peint un tableau."),
    p("• Le texte EXPLICATIF répond à « pourquoi ? comment ? » — il allume la lumière !"),
  ];
}

// ---------- S40 — Les adverbes ----------
function ficheS40() {
  const meta = META("Fonctionnement de la langue : les adverbes",
    "À la fin de la séance, l'apprenant identifie les adverbes, précise leur rôle et les emploie pour préciser une explication.",
    "4 / 12", "corpus, étiquettes d'adverbes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez deux connecteurs explicatifs et les deux questions du texte explicatif.")],
      [fp("Répondent."),
       fp("R.A. : parce que, donc… ; Pourquoi ? Comment ?")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Démonstration théâtrale : je marche, puis je marche LENTEMENT, puis je marche VITE. Qu'est-ce qui a changé dans la phrase « je marche » ?")],
      [fp("Observent, comparent."),
       fp("R.A. : un mot a précisé COMMENT je marche.")],
      "Démonstration", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les adverbes » — les petits mots invariables qui précisent le verbe, comme les épices précisent le goût !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « Les joueurs déplacent lentement leurs pions. Niry gagne souvent. On joue beaucoup au fanorona ici. Le gagnant sourit modestement. Demain, nous jouerons encore. » Relevez les mots qui précisent : comment ? combien ? quand ? où ?")],
      [fp("Relèvent."),
       fp("R.A. : lentement (comment), souvent/demain/encore (quand), beaucoup (combien), ici (où).")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Les quatre familles d'adverbes : MANIÈRE (lentement, vite, bien, mal, modestement), TEMPS (souvent, toujours, demain, encore, jamais), QUANTITÉ (beaucoup, peu, trop, assez), LIEU (ici, là, partout). La fabrique des adverbes en -MENT : lent → lentement ; modeste → modestement ; facile → facilement. Règle d'or : l'adverbe est INVARIABLE — il ne s'accorde jamais !")],
      [fp("Classent, fabriquent des adverbes en -ment."),
       fp("R.A. : adjectif (souvent au féminin) + -ment : douce → doucement.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les quatre familles + la fabrique en -ment + la règle d'invariabilité.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("1. Fabriquez l'adverbe : rapide → ? ; courageux → ? ; facile → ? 2. Complétez avec un adverbe de la bonne famille : « Elle lit … (quantité). Il joue … (manière). Nous gagnons … (temps). »")],
      [fp("Fabriquent, complètent."),
       pAns("R.A. : 1. rapidement, courageusement, facilement — 2. beaucoup ; bien (ou lentement…) ; souvent.", ["rapidement", "courageusement", "beaucoup", "souvent"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris deux phrases sur ton loisir préféré, chacune avec un adverbe d'une famille différente.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Je joue souvent au football. Je dribble rapidement vers le but.", ["souvent", "rapidement"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES ADVERBES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p("L'adverbe est un petit mot INVARIABLE qui précise le verbe — comme l'épice précise le goût !", { after: 80 }),
    sub("Les quatre familles :"),
    mot("la manière (comment ?)", "lentement, vite, bien, mal, modestement"),
    mot("le temps (quand ?)", "souvent, toujours, demain, encore, jamais"),
    mot("la quantité (combien ?)", "beaucoup, peu, trop, assez"),
    mot("le lieu (où ?)", "ici, là, partout"),
    p("", { after: 80 }),
    sub("La fabrique des adverbes en -MENT :"),
    pr([run("adjectif + -ment : ", { bold: true, color: C.RED }),
        run("lent → lentement ; facile → facilement ; douce → doucement ; courageuse → courageusement", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("La règle d'or :"),
    pr([run("L'adverbe ne s'accorde JAMAIS : ", { size: SZ.BODY }),
        run("elles jouent bien — ils lisent beaucoup.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S41 — Pronoms interrogatifs, sujet composé, phrase négative ----------
function ficheS41() {
  const meta = META("Fonctionnement de la langue : interroger, sujet composé et phrase négative",
    "À la fin de la séance, l'apprenant pose des questions avec les pronoms interrogatifs, emploie le sujet composé et transforme des phrases affirmatives en phrases négatives.",
    "5 / 12", "corpus, étiquettes, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Fabriquez l'adverbe de « facile » et de « courageux ».")],
      [fp("Répondent."),
       fp("R.A. : facilement ; courageusement.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du détective : je pense à un loisir mystère. Posez-moi des questions pour deviner ! (Qui le pratique ? Que faut-il ? Combien de joueurs ?)")],
      [fp("Posent des questions.")], "Jeu de devinettes", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « La phrase dans tous ses états : interroger, doubler le sujet, dire non ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(les pronoms interrogatifs)"],
      [fp("Corpus 1 : « QUI gagne la partie ? QUE faut-il pour jouer ? C'est QUOI, le fanorona ? COMBIEN de pions reçoit chaque joueur ? » Les pronoms interrogatifs ouvrent les questions : qui ? (une personne), que/quoi ? (une chose), combien ? (une quantité).")],
      [fp("Relèvent, posent leurs propres questions."),
       fp("R.A. : qui → personne ; que, quoi → chose ; combien → quantité.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse", "(sujet composé + négation)"],
      [fp("Corpus 2 : « Niry ET Beby vont au terrain. Le chien et le chat sont dans la cour. » Deux sujets reliés par ET = un SUJET COMPOSÉ → le verbe se met au PLURIEL ! Corpus 3 : la machine à dire non : « Je joue. → Je NE joue PAS. Il gagne toujours. → Il NE gagne JAMAIS. Elle a encore des pions. → Elle N'a PLUS de pions. » Les lunettes de la négation : ne … pas, ne … jamais, ne … plus (n' devant une voyelle !).")],
      [fp("Transforment, accordent."),
       fp("R.A. : sujet composé → verbe au pluriel ; négation en deux morceaux autour du verbe.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les trois outils — pronoms interrogatifs (qui, que, quoi, combien), sujet composé (ET → pluriel), phrase négative (ne … pas / jamais / plus).")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("1. Posez la question : « … gagne souvent ? » ; « … de cartes as-tu ? » 2. Accordez : « Soa et Lova (jouer) au fanorona. » 3. À la forme négative : « Je gaspille mon argent. » ; « Il joue encore. »")],
      [fp("Répondent."),
       pAns("R.A. : 1. Qui ; Combien — 2. jouent — 3. Je ne gaspille pas mon argent. Il ne joue plus.", ["Qui", "Combien", "jouent", "ne gaspille pas", "ne joue plus"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris : une question avec « combien », une phrase avec un sujet composé, et sa transformation négative.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Combien de joueurs faut-il ? — Koto et Soa pratiquent la danse. — Koto et Soa ne pratiquent pas la danse.", ["Combien", "ne pratiquent pas"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}
function lessonS41() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("INTERROGER, DOUBLER LE SUJET, DIRE NON", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("1. Les pronoms interrogatifs :"),
    mot("Qui ?", "pour une personne : Qui gagne la partie ?"),
    mot("Que ? Quoi ?", "pour une chose : Que faut-il pour jouer ? C'est quoi ?"),
    mot("Combien ?", "pour une quantité : Combien de pions reçoit chaque joueur ?"),
    p("", { after: 60 }),
    sub("2. Le sujet composé :"),
    pr([run("Deux sujets reliés par ET → le verbe passe au PLURIEL !", { bold: true, color: C.RED })], { after: 40 }),
    pr([run("Niry et Beby ", { bold: true, color: C.BLUE }), run("vont", { bold: true, color: C.RED }),
        run(" à l'école. — "), run("Le chien et le chat ", { bold: true, color: C.BLUE }),
        run("sont", { bold: true, color: C.RED }), run(" dans la cour.")], { after: 80 }),
    sub("3. La phrase négative — les lunettes du NON :"),
    mot("ne … pas", "Je ne joue pas ce soir."),
    mot("ne … jamais", "Il ne gagne jamais sans réfléchir."),
    mot("ne … plus", "Elle n'a plus de pions."),
    p("", { after: 40 }),
    pr([run("Attention : ", { bold: true, color: C.RED }),
        run("devant une voyelle, ne devient n' : il n'écoute pas, elle n'aime plus.")]),
  ];
}

// ---------- S42 — Conjugaison : les verbes en -cer et -ger ----------
function ficheS42() {
  const meta = META("Conjugaison : les verbes en -cer et -ger au présent de l'indicatif",
    "À la fin de la séance, l'apprenant conjugue correctement les verbes en -cer (ç devant o) et en -ger (ge devant o) au présent de l'indicatif.",
    "6 / 12", "tableaux de conjugaison, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("À la forme négative : « Nous jouons encore. »")],
      [fp("Répondent."),
       fp("R.A. : Nous ne jouons plus.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Énigme au tableau : « nous lancons » ou « nous lançons » ? « nous nagons » ou « nous nageons » ? Votez ! Puis vérifions pourquoi.")],
      [fp("Votent, cherchent."),
       fp("R.A. : nous lançons, nous nageons — mais pourquoi ?")],
      "Vote et vérification", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les verbes en -cer et -ger au présent » — deux familles avec un petit secret à la personne NOUS.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus loisirs : « Je lance le ballon. Nous lançons les pions. Tu nages à la rivière. Nous nageons ensemble. On commence la partie. Nous commençons le match. Ils voyagent. Nous voyageons. » Comparez : que se passe-t-il avec NOUS ?")],
      [fp("Comparent."),
       fp("R.A. : -cer → ç devant -ons ; -ger → ge devant -ons.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Le secret du son : sans cédille, « lancons » se lirait [lankon] ! Sans e, « nagons » se lirait [nagon] ! La cédille et le e gardien protègent les sons [s] et [j] devant o. Tableaux : LANCER (je lance, tu lances, il lance, nous lançons, vous lancez, ils lancent) ; NAGER (je nage, nous nageons…) ; aussi : commencer, placer, avancer / manger, voyager, partager, ranger.")],
      [fp("Comprennent la règle du son, épellent."),
       fp("R.A. : ç et ge = gardiens du son devant o.")],
      "Observation et manipulation", "Tableaux"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : la règle des deux gardiens + les deux tableaux + la liste des verbes amis (commencer, placer, avancer, manger, voyager, partager, ranger).")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoise ! 1. nous (commencer) — 2. nous (manger) — 3. nous (avancer) — 4. nous (voyager) — 5. nous (partager).")],
      [fp("Écrivent."),
       pAns("R.A. : 1. nous commençons — 2. nous mangeons — 3. nous avançons — 4. nous voyageons — 5. nous partageons.", ["commençons", "mangeons", "avançons", "voyageons", "partageons"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris deux phrases sur un jeu avec « nous » : une avec un verbe en -cer, une avec un verbe en -ger.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Nous plaçons nos pions sur le plateau. Nous partageons le goûter après la partie.", ["plaçons", "partageons"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}
function lessonS42() {
  const t = (title, rows) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell([p([run(title, { bold: true, color: C.WHITE, size: SZ.FICHE })], { center: true, after: 20 })], { colSpan: 2, shade: COLOR })] }),
      ...rows.map(r => new TableRow({ children: r.map((x, i) => cell([p([run(x, { size: SZ.FICHE, bold: i === 0, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })])) })),
    ],
  });
  return [
    p([run("LEÇON DU JOUR — SÉANCE 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES VERBES EN -CER ET -GER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le secret des deux gardiens :"),
    pr([run("Devant le O de -ons : ", { size: SZ.BODY }),
        run("le C prend une cédille (ç)", { bold: true, color: C.RED }),
        run(" et "), run("le G garde son E", { bold: true, color: C.RED }),
        run(" — pour protéger les sons [s] et [j] !")], { after: 80 }),
    t("LANCER — présent", [
      ["je lance", "nous lançons  ← ç !"],
      ["tu lances", "vous lancez"],
      ["il, elle lance", "ils, elles lancent"],
    ]),
    p("", { after: 60 }),
    t("NAGER — présent", [
      ["je nage", "nous nageons  ← ge !"],
      ["tu nages", "vous nagez"],
      ["il, elle nage", "ils, elles nagent"],
    ]),
    p("", { after: 80 }),
    sub("Les verbes amis :"),
    pr([run("-cer : ", { bold: true }), run("commencer, placer, avancer → nous commençons, nous plaçons, nous avançons", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("-ger : ", { bold: true }), run("manger, voyager, partager, ranger → nous mangeons, nous voyageons, nous partageons, nous rangeons", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S43 — Production orale ----------
function ficheS43() {
  const meta = META("Production orale : échanger sur les loisirs et exposer",
    "À la fin de la séance, l'apprenant échange sur ses loisirs préférés en justifiant ses choix, compare des loisirs et présente un court exposé explicatif.",
    "7 / 12", "images de loisirs, grille d'exposé");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conjuguez : « nous (commencer) la partie » ; « nous (partager) le ballon ».")],
      [fp("Répondent."),
       fp("R.A. : nous commençons ; nous partageons.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Le baromètre des loisirs : chaque élève écrit son loisir préféré sur un papier ; on compte et on classe au tableau. Quel est le champion de la classe ?")],
      [fp("Votent, comptent.")], "Sondage", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Échanger, comparer, exposer ». Objectif : justifier son choix (parce que…), comparer (avantages/limites), exposer (expliquer un loisir à la classe).")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(discussion)"],
      [fp("Débat guidé : « Mon loisir préféré et pourquoi ». Chaque avis = une expression d'opinion + un connecteur explicatif : « Je préfère la lecture parce qu'elle enrichit mon vocabulaire. » On reformule l'avis du voisin avant de donner le sien !")],
      [fp("Échangent, justifient, reformulent."),
       fp("R.A. : Je pense que le football est le meilleur loisir, car on y apprend la solidarité. — Si je comprends bien, tu dis que…")],
      "Discussion", "----"),
    stepRow(["4. Analyse", "(comparaison + préparation)"],
      [fp("Tableau comparatif collectif : deux loisirs (ex. jeux vidéo / football) — avantages et limites de chacun. Puis préparation d'exposé en binômes : expliquer UN loisir (règles, déroulement, bienfaits) avec le plan : 1. c'est quoi ? — 2. comment ? — 3. pourquoi c'est bien ?")],
      [fp("Comparent, préparent leurs notes.")],
      "Travail collaboratif", "Grille d'exposé"),
    stepRow(["5. Synthèse", "(exposés)"],
      [fp("Passage des binômes (2 minutes) : posture droite, gestes qui montrent, intonation vivante. La classe pose des questions avec les pronoms interrogatifs : Qui peut y jouer ? Combien de joueurs ? Que faut-il ?")],
      [fp("Exposent, répondent."),
       pAns("R.A. (exemple) : Nous allons vous expliquer la randonnée. C'est une longue marche dans la nature. D'abord, on prépare la gourde et le chapeau ; ensuite, on marche lentement vers les collines. Pourquoi c'est bien ? Parce que la randonnée muscle les jambes et déstresse ! Donc, marchez avec nous dimanche !", ["parce que", "Donc"], { size: SZ.FICHE })],
      "Exposé, simulation", "----"),
    stepRow(["6. Entraînement"],
      [fp("Tour éclair : une phrase « avantage » et une phrase « limite » sur le loisir de son choix.")],
      [fp("S'expriment.")],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille orale : ☐ j'ai justifié (parce que, car) ☐ j'ai comparé (avantage/limite) ☐ ma posture et mes gestes ont aidé ☐ j'ai répondu aux questions.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43");
}
function lessonS43() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 43", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCHANGER ET EXPOSER SUR LES LOISIRS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Pour justifier mon choix :"),
    pr([run("Je préfère … ", { bold: true, color: C.BLUE }),
        run("parce que / car ", { bold: true, color: C.RED }),
        run("…", { bold: true, color: C.BLUE })], { after: 40 }),
    p("« Je préfère la lecture parce qu'elle enrichit mon vocabulaire. »", { after: 80 }),
    sub("Pour comparer deux loisirs :"),
    p("• les avantages de l'un ET de l'autre ;"),
    p("• leurs limites : « Les jeux vidéo amusent, mais ils fatiguent les yeux. »", { after: 80 }),
    sub("Le plan de mon exposé explicatif :"),
    p("1. C'est quoi ? — je présente le loisir."),
    p("2. Comment ? — les règles, le déroulement, le matériel."),
    p("3. Pourquoi c'est bien ? — les bienfaits, avec parce que, en effet, donc !", { after: 80 }),
    sub("Mon corps parle aussi :"),
    p("• posture droite, gestes qui montrent, intonation vivante, regard vers le public !"),
  ];
}

// ---------- S44 — Production écrite 1 ----------
function ficheS44() {
  const meta = META("Production écrite (1) : inventer mon jeu et préparer le plan",
    "À la fin de la séance, l'apprenant invente un jeu ou choisit une activité de loisir, identifie ses règles, ses étapes et ses objectifs, et prépare le plan de son texte explicatif.",
    "8 / 12", "modèle du fanorona, grille de plan");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les trois parties du texte explicatif ?")],
      [fp("Répondent."),
       fp("R.A. : introduction (la question), développement (l'explication), conclusion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Grand projet : « Invente un jeu (ou choisis ton loisir) et explique-le en trois paragraphes ! » Les inventeurs sont libres : jeu de cour, jeu de pions, course originale…")],
      [fp("Recopient le sujet, rêvent déjà !")], "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Aujourd'hui : les idées et le plan. Prochaine séance : la rédaction (15 à 20 lignes).")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Retour au modèle du fanorona : retrouvez les ingrédients de l'explication — le matériel, le nombre de joueurs, les étapes (premièrement, ensuite, enfin), le but du jeu, les bienfaits.")],
      [fp("Listent les ingrédients."),
       fp("R.A. : matériel, joueurs, étapes, but, bienfaits — 5 ingrédients !")],
      "Exploitation de texte", "Texte modèle"),
    stepRow(["4. Analyse"],
      [fp("Chacun invente ou choisit, puis remplit la grille : NOM du jeu / MATÉRIEL / JOUEURS / RÈGLES et ÉTAPES (3 ou 4, dans l'ordre !) / BUT du jeu / BIENFAITS (avec parce que…). Plan en trois paragraphes : 1. présentation (c'est quoi ?) — 2. règles et déroulement (comment ?) — 3. bienfaits (pourquoi ?).")],
      [fp("Inventent, remplissent la grille.")],
      "Brainstorming, planification guidée", "Grille de plan"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois inventeurs présentent leur grille. La classe vérifie : les étapes sont-elles dans l'ordre ? Le but est-il clair ? Un bienfait est-il justifié ?")],
      [fp("Présentent, améliorent."),
       pAns("R.A. (exemple de grille) : « La course aux sandales » — matériel : les sandales de l'équipe ; joueurs : deux équipes de cinq ; étapes : poser les sandales au bout du terrain, courir une à une, rapporter, passer le relais ; but : l'équipe la plus rapide gagne ; bienfait : on court beaucoup, donc on muscle les jambes !", ["La course aux sandales"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Finalisation : un titre amusant + les connecteurs prévus (premièrement, ensuite, enfin ; parce que, donc).")],
      [fp("Finalisent leur plan.")],
      "Travail individuel", "Grille"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Liste de contrôle : ☐ mon jeu a un nom ☐ matériel et joueurs notés ☐ 3-4 étapes dans l'ordre ☐ but clair ☐ un bienfait justifié.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44");
}
function lessonS44() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 44", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE EXPLICATIF (1) : INVENTER ET PLANIFIER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Invente un jeu (ou choisis une activité de loisir) et explique-le en trois paragraphes.", { italic: true })], { after: 80 }),
    sub("Les cinq ingrédients de l'explication d'un jeu :"),
    p("1. le MATÉRIEL — que faut-il ?"),
    p("2. les JOUEURS — combien ? qui ?"),
    p("3. les RÈGLES et les ÉTAPES — dans l'ordre : premièrement, ensuite, enfin ;"),
    p("4. le BUT — comment gagne-t-on ?"),
    p("5. les BIENFAITS — pourquoi ce jeu est-il bon ? (parce que, en effet, donc)", { after: 80 }),
    sub("Mon plan en trois paragraphes :"),
    p("1. C'est quoi ? — je présente mon jeu et son nom."),
    p("2. Comment ? — matériel, joueurs, règles, étapes, but."),
    p("3. Pourquoi ? — les bienfaits justifiés !"),
  ];
}

// ---------- S45 — Production écrite 2 ----------
function ficheS45() {
  const meta = META("Production écrite (2) : rédiger mon texte explicatif",
    "À la fin de la séance, l'apprenant rédige un premier jet de 15 à 20 lignes expliquant son jeu en trois paragraphes, puis le relit, le corrige et l'améliore.",
    "9 / 12", "grilles de la séance 44, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les cinq ingrédients de l'explication d'un jeu ?")],
      [fp("Répondent."),
       fp("R.A. : matériel, joueurs, règles/étapes, but, bienfaits.")],
      "Travail collectif", "Grilles"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase d'ouverture offerte : « Connaissez-vous … ? C'est un jeu qui … » — une question pour accrocher le lecteur, comme le texte du fanorona !")],
      [fp("Adaptent la phrase.")], "Écriture guidée", "----"),
    stepRow(["2. Présentation"],
      [fp("Consignes : trois paragraphes, 15 à 20 lignes, verbes au présent, connecteurs d'ordre ET connecteurs explicatifs.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse. Je circule : un « nous commençons » sans cédille ? une étape dans le désordre ? J'aiguille sans écrire à la place.")],
      [fp("Rédigent leur premier jet.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(relecture)"],
      [fp("Grille de relecture : 1. Mes trois paragraphes ? 2. Les étapes dans l'ordre avec connecteurs ? 3. Un « parce que » ou « donc » pour les bienfaits ? 4. Un adverbe au moins ? 5. Une phrase négative (ce qu'il ne faut PAS faire : « On ne pousse jamais ! ») ? 6. Les -cer/-ger avec nous ?")],
      [fp("Relisent, corrigent.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse", "(amélioration)"],
      [fp("Échange de brouillons en binômes : le camarade joue le jeu dans sa tête — comprend-il toutes les règles ? Il signale le passage flou.")],
      [fp("Testent le texte du voisin, améliorent."),
       pAns("R.A. (exemple de production) : Connaissez-vous la course aux sandales ? C'est un jeu que nous avons inventé dans notre cour. Il faut deux équipes de cinq joueurs et les sandales de tous. Premièrement, nous plaçons les sandales au bout du terrain. Ensuite, chaque joueur court, rapporte une sandale et passe le relais. On ne pousse jamais son camarade ! Enfin, l'équipe qui rapporte toutes les sandales gagne. Ce jeu est merveilleux parce qu'il muscle les jambes et apprend la solidarité. Donc, à vos sandales !", ["Premièrement", "ne pousse jamais", "parce qu"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre avec le titre. Quelques textes sont lus à la classe !")],
      [fp("Recopient, présentent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage. Barème : structure en 3 paragraphes 3 pts, clarté des règles 2 pts, outils de la langue (connecteurs, adverbe, négation, -cer/-ger) 3 pts, correction 2 pts.")],
      [fp("Rendent leur production.")],
      "Travail individuel", "----"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}
function lessonS45() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE EXPLICATIF (2) : RÉDIGER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("La recette du bon texte explicatif :"),
    p("• J'accroche avec une question : « Connaissez-vous … ? »"),
    p("• J'explique dans l'ordre : premièrement, ensuite, enfin."),
    p("• Je justifie les bienfaits : parce que, en effet, donc."),
    p("• Je précise avec un adverbe : lentement, beaucoup, souvent."),
    p("• J'interdis avec la négation : « On ne pousse jamais ! »", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Trois paragraphes : c'est quoi ? / comment ? / pourquoi ?"),
    p("☐ Les étapes dans l'ordre, avec les connecteurs."),
    p("☐ Un connecteur explicatif pour les bienfaits."),
    p("☐ Un adverbe, une phrase négative."),
    p("☐ nous commençons (ç !), nous partageons (ge !)."),
    p("☐ 15 à 20 lignes, majuscules et points."),
  ];
}

// ---------- S46 — Lecture-fluidité ----------
function ficheS46() {
  const meta = META("Lecture-fluidité : la lecture en écho et la lecture chorale",
    "À la fin de la séance, l'apprenant lit un texte explicatif avec fluidité, expressivité et précision, grâce à la lecture en écho et à la lecture chorale.",
    "10 / 12", "texte du fanorona, productions des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : les trois qualités du bon lecteur ?")],
      [fp("Répondent."),
       fp("R.A. : fluidité, précision, expressivité.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu de l'écho : je dis une phrase avec une intonation ; la classe la répète EXACTEMENT comme moi — voix qui monte, pause, sourire dans la voix !")],
      [fp("Répètent en écho.")], "Lecture en écho", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Deux nouvelles techniques : la lecture en écho et la lecture chorale ». Comme un chant à plusieurs voix !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(lecture en écho)"],
      [fp("Texte du fanorona : je lis une phrase, la classe la relit en écho avec la même musique. Attention aux questions : « Comment joue-t-on ? » — la voix monte ! Phrase par phrase, paragraphe 2 entier.")],
      [fp("Relisent en écho, imitent l'intonation.")],
      "Lecture en écho", "Texte"),
    stepRow(["4. Analyse", "(lecture chorale)"],
      [fp("Lecture chorale : toute la classe lit ENSEMBLE le paragraphe 3 — même rythme, mêmes pauses, comme un seul lecteur ! Puis par groupes : les filles lisent les questions, les garçons les réponses.")],
      [fp("Lisent en chœur, se synchronisent.")],
      "Lecture chorale", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Lectures individuelles : des volontaires lisent un passage en continu — l'écho et le chœur ont-ils amélioré la fluidité ? La classe observe les progrès.")],
      [fp("Lisent, constatent leurs progrès.")],
      "Lecture à haute voix", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : lecture en écho de SON texte explicatif (séance 45) — l'auteur lit, le binôme fait l'écho !")],
      [fp("Lisent leurs productions en écho.")],
      "Binômes", "Productions"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Auto-évaluation : ☐ j'ai suivi le rythme du chœur ☐ mon écho a copié l'intonation ☐ j'ai lu sans hésiter ☐ ma voix a posé les questions (↗).")],
      [fp("Cochent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}
function lessonS46() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE EN ÉCHO, LIRE EN CHŒUR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La lecture en écho :"),
    p("• Le maître (ou un camarade) lit une phrase avec sa musique : pauses, intonation, expression."),
    p("• Je la relis EXACTEMENT pareil — je suis son écho !"),
    p("• L'écho muscle l'oreille : j'apprends la musique de la phrase.", { after: 80 }),
    sub("La lecture chorale :"),
    p("• Toute la classe lit ensemble, comme un seul lecteur."),
    p("• Même rythme, mêmes pauses, même souffle."),
    p("• Le chœur donne du courage : personne ne lit seul, tout le monde progresse !", { after: 80 }),
    sub("Le rappel du lecteur :"),
    pr([run("fluidité ", { bold: true, color: C.BLUE }), run("(sans hésiter) + "),
        run("précision ", { bold: true, color: C.BLUE }), run("(tous les mots) + "),
        run("expressivité ", { bold: true, color: C.BLUE }), run("(la voix vit) = lecture réussie !")]),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 4 : LES LOISIRS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots des loisirs :"),
    p("Familles : sportifs, artistiques, culturels, numériques, jeux. Expressions : faire du vélo, jouer aux cartes, pratiquer un sport, aller au cinéma. Avantages : se distraire, se déstresser, se faire des amis — Inconvénients : perte de temps, gaspillage d'argent, fatigue. Synonymes (s'amuser ≈ se distraire), antonymes (gagner ≠ perdre), formation des mots (gaspiller → gaspillage).", { after: 80 }),
    sub("2. Le texte explicatif :"),
    p("But : expliquer, faire comprendre. Il répond à Pourquoi ? Comment ?, au présent de l'indicatif. Structure : introduction (question), développement, conclusion. Connecteurs explicatifs : car, parce que, en effet, ainsi, donc.", { after: 80 }),
    sub("3. Les adverbes :"),
    p("Invariables ! Manière (lentement), temps (souvent), quantité (beaucoup), lieu (ici). Fabrique : adjectif + -ment → facilement.", { after: 80 }),
    sub("4. La phrase dans tous ses états :"),
    p("Pronoms interrogatifs : qui ? que ? quoi ? combien ? — Sujet composé : Niry et Beby VONT à l'école (verbe au pluriel !) — Négation : ne … pas, ne … jamais, ne … plus.", { after: 80 }),
    sub("5. Les verbes en -cer et -ger :"),
    p("Devant -ons : ç et ge gardiens du son ! nous lançons, nous commençons, nous plaçons — nous nageons, nous mangeons, nous voyageons, nous partageons.", { after: 80 }),
    sub("6. Expliquer un jeu :"),
    p("Les cinq ingrédients : matériel, joueurs, règles/étapes, but, bienfaits. Trois paragraphes : c'est quoi ? comment ? pourquoi ? Et pour lire : l'écho et le chœur !"),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 4", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire :"),
    p("Choisis le bon verbe : 1. … du vélo. 2. … aux jeux vidéo. 3. … un sport. 4. … au théâtre. Puis donne un synonyme de « passe-temps » et un antonyme d'« avantage ».", { after: 60 }),
    pAns("Corrigé : 1. faire — 2. jouer — 3. pratiquer — 4. aller ; synonyme : loisir ; antonyme : inconvénient.", ["faire", "jouer", "pratiquer", "aller"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Les adverbes :"),
    p("a) Fabrique l'adverbe : lent, courageux, doux. b) Souligne l'adverbe et donne sa famille : « Nous jouons souvent ici, et nous gagnons beaucoup. »", { after: 60 }),
    pAns("Corrigé : a) lentement, courageusement, doucement. b) souvent (temps), ici (lieu), beaucoup (quantité).", ["lentement", "courageusement", "doucement"]),
    p("", { after: 40 }),
    sub("Exercice 3 — La phrase :"),
    p("a) Pose la question : « … de pions faut-il ? » ; « … a gagné ? » b) Accorde : « Soa et Niry (jouer) dans la cour. » c) À la forme négative : « Nous gaspillons notre temps. » ; « Il joue encore. »", { after: 60 }),
    pAns("Corrigé : a) Combien ; Qui. b) jouent. c) Nous ne gaspillons pas notre temps. Il ne joue plus.", ["Combien", "Qui", "jouent", "ne joue plus"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Conjugaison -cer / -ger :"),
    p("Mets au présent avec « nous » : lancer, manger, commencer, voyager, placer, ranger.", { after: 60 }),
    pAns("Corrigé : nous lançons, nous mangeons, nous commençons, nous voyageons, nous plaçons, nous rangeons.", ["lançons", "mangeons", "commençons", "voyageons"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Explique en cinq phrases un jeu de ton choix : la question d'accroche (1), les règles dans l'ordre (3 avec premièrement/ensuite/enfin), le bienfait justifié (1 avec parce que).", { after: 60 }),
    pAns("Corrigé (exemple) : Connaissez-vous la marelle ? Premièrement, on trace les cases sur le sol. Ensuite, on lance le caillou et on saute à cloche-pied. Enfin, le premier arrivé au ciel gagne. Ce jeu est excellent parce qu'il muscle les jambes et apprend l'équilibre !", ["Premièrement", "parce qu"]),
  ];
}

// ---------- S47 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s47", "SÉANCE 47 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 4 : LES LOISIRS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le test !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Le mime des loisirs (10 min) :"),
    p("Un élève mime, la classe devine le loisir AVEC la bonne expression : « Tu fais du vélo ! Tu joues aux cartes ! Tu pratiques la danse ! »", { after: 60 }),
    sub("Atelier 2 — Synonymes-antonymes éclair (5 min) :"),
    p("Ardoise : synonyme de « se distraire » ? antonyme de « gagner » ? de « avantage » ? nom formé sur « gaspiller » ?", { after: 60 }),
    pAns("R.A. : s'amuser — perdre — inconvénient — gaspillage.", ["s'amuser", "perdre"]),
    p("", { after: 40 }),
    sub("Atelier 3 — La phrase gymnaste (10 min) :"),
    p("Phrase de départ : « Koto lance le ballon. » Rangée 1 ajoute un sujet composé, rangée 2 un adverbe, rangée 3 passe au négatif, rangée 4 pose la question avec « qui ».", { after: 60 }),
    pAns("R.A. : Koto et Soa lancent le ballon. / Ils lancent souvent le ballon. / Ils ne lancent jamais le ballon. / Qui lance le ballon ?", ["lancent", "souvent", "ne lancent jamais", "Qui"]),
    p("", { after: 40 }),
    sub("Atelier 4 — Le chœur des -cer/-ger (10 min) :"),
    p("Lecture chorale de la comptine de conjugaison : « Nous lançons, nous plaçons, nous commençons ! Nous nageons, nous mangeons, nous partageons ! » — puis chaque rangée épelle un verbe.", { after: 60 }),
    sub("Atelier 5 — L'explication minute (10 min) :"),
    p("En binômes : expliquer la marelle (ou un jeu de la cour) en quatre phrases avec premièrement / ensuite / enfin / parce que. Les meilleurs passent au tableau !", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 4 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S48 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s48", "SÉANCE 48 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 4 : LES LOISIRS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire (4 points) :"),
    p("1. Choisis le bon verbe : « … du vélo » ; « … aux cartes ». 2. Donne un synonyme de « s'amuser ». 3. Donne un antonyme d'« avantage ». 4. Cite un inconvénient d'un loisir mal choisi.", { after: 80 }),
    sub("Exercice 2 — Les adverbes (4 points) :"),
    p("a) Fabrique l'adverbe : rapide → ? ; facile → ? b) Souligne les adverbes et indique leur famille : « Nous jouons souvent ici. »", { after: 80 }),
    sub("Exercice 3 — La phrase (4 points) :"),
    p("a) Pose la question : « … de joueurs faut-il ? » b) Accorde : « Le chien et le chat (être) dans la cour. » c) Transforme : « Il gagne toujours. » → négation avec jamais.", { after: 80 }),
    sub("Exercice 4 — Conjugaison (4 points) :"),
    p("Mets au présent : 1. nous (commencer) la partie. 2. nous (nager) à la rivière. 3. nous (placer) les pions. 4. nous (voyager) en autocar.", { after: 80 }),
    sub("Exercice 5 — Expression écrite (4 points) :"),
    p("Explique un jeu de ton choix en cinq ou six phrases : question d'accroche, règles dans l'ordre (premièrement, ensuite, enfin), but du jeu, bienfait justifié (parce que).", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. faire ; jouer — 2. se distraire — 3. inconvénient — 4. perte de temps / gaspillage / fatigue. (1 pt chacun)", ["faire", "se distraire", "inconvénient"]),
    pAns("Ex.2 : a) rapidement, facilement (2 pts). b) souvent → temps ; ici → lieu (2 pts).", ["rapidement", "facilement", "souvent", "ici"]),
    pAns("Ex.3 : a) Combien (1 pt). b) sont (1,5 pt). c) Il ne gagne jamais. (1,5 pt)", ["Combien", "sont", "ne gagne jamais"]),
    pAns("Ex.4 : 1. nous commençons — 2. nous nageons — 3. nous plaçons — 4. nous voyageons. (1 pt chacun)", ["commençons", "nageons", "plaçons", "voyageons"]),
    pAns("Ex.5 : structure et ordre 1,5 pt, connecteurs 1 pt, bienfait justifié 0,5 pt, correction de la langue 1 pt.", ["structure"]),
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
      "Je comprends un texte explicatif : il répond à Pourquoi ? Comment ?",
      "Je connais les familles de loisirs et leurs verbes : faire du, jouer aux, pratiquer, aller au.",
      "J'utilise les synonymes, les antonymes et la formation des mots.",
      "Je précise avec les adverbes (invariables !) : lentement, souvent, beaucoup, ici.",
      "J'interroge avec qui, que, quoi, combien et j'accorde le sujet composé.",
      "Je transforme à la forme négative : ne … pas, ne … jamais, ne … plus.",
      "Je conjugue les -cer/-ger : nous lançons, nous nageons !",
      "J'explique un jeu en trois paragraphes : c'est quoi ? comment ? pourquoi ?",
      "Je lis en écho et en chœur avec fluidité et expressivité.",
    ], "PROCHAINE ÉTAPE → UNITÉ 5 : LES MÉTIERS !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
