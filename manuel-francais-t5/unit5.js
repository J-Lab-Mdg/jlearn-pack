// Français T5 — UNITÉ 5 — LES MÉTIERS (10 leçons + révision + test) — Séances 49 à 60 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // rouge brique métiers
const SHADE = "FADBD8";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 5 — LES MÉTIERS", title, slo,
  values: "autonomie, goût de l'effort et de l'excellence", session, materials,
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

// passage d'écoute (S49)
function passageMetiers() {
  return box("PASSAGE D'ÉCOUTE — Reportage : « Les mains qui font vivre le village »", [
    p("Bonjour à tous ! Aujourd'hui, notre reportage vous emmène à Ambohimahasoa, à la rencontre de celles et ceux qui font vivre le village grâce à leur travail."),
    p("Première rencontre, dans la rizière : Rasoa, cultivatrice. « Je cultive le riz et le manioc, explique-t-elle. Je me lève avant le soleil, car la terre n'attend pas ! Avec ma bêche, je retourne la terre ; au moment de la récolte, tout le village m'aide. » Son mari, lui, est pêcheur : chaque matin, il pêche dans le lac avec son filet."),
    p("Deuxième rencontre, dans l'atelier qui sent le bois : Ratovo, charpentier. « Je construis des maisons et des meubles. Mon père m'a transmis ce métier ; grâce à lui, je connais tous les secrets du bois. Mes outils ? Le marteau, la scie et le rabot. Je recommence une pièce dix fois s'il le faut, puisque un bon artisan vise toujours l'excellence ! »"),
    p("Dernière rencontre, au marché : madame Lalao, commerçante. « Je vends les légumes de Rasoa et les paniers des tisserandes. Sans le commerce, le travail des champs et des ateliers ne servirait à rien : chacun a besoin des autres ! » Cultiver, construire, vendre : trois métiers différents, une même fierté. À Ambohimahasoa, chaque main compte !", { after: 40 }),
  ]);
}
// texte de lecture (S51)
function texteCharpentier() {
  return box("TEXTE DE LECTURE — « Pourquoi dit-on que le charpentier bâtit l'avenir ? »", [
    p("Quand une nouvelle maison s'élève au village, on entend souvent : « C'est le charpentier qui bâtit l'avenir ! » Pourquoi ce beau compliment ? Ce texte va vous l'expliquer."),
    p("Quelles sont les missions du charpentier ? Il construit la charpente, c'est-à-dire le squelette de bois qui porte le toit ; il bâtit aussi des ponts, des greniers à riz et des meubles. Pour cela, il transforme une matière première, le bois, avec des outils précis : la scie pour couper, le rabot pour lisser, le marteau et les clous pour assembler. Son lieu de travail ? L'atelier, mais aussi les chantiers, au sommet des maisons !"),
    p("Quelles compétences faut-il ? D'abord des bras solides, car les poutres sont lourdes. Ensuite un œil précis : une erreur d'un centimètre, et le toit penche ! Enfin, de la patience et le goût de l'effort, puisque le bois ne pardonne pas le travail bâclé. Le charpentier apprend son métier pendant de longues années, souvent auprès d'un maître artisan."),
    p("Pourquoi ce métier est-il si important ? Parce que sans charpentier, pas de toit ; et sans toit, pas de famille à l'abri ! Grâce à son travail, les maisons traversent les cyclones et les générations. Voilà pourquoi on dit que le charpentier ne construit pas seulement des maisons : il bâtit l'avenir.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 5 — LES MÉTIERS", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("Cultiver, construire, servir : chaque main compte !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_metiers.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un reportage ou un texte explicatif sur les métiers ;"),
    p("• classer les métiers dans les trois secteurs d'activités ;"),
    p("• nommer les lieux de travail, les outils et les matières premières ;"),
    p("• exprimer la cause : grâce à, à cause de, en raison de, car, parce que, puisque ;"),
    p("• conjuguer cultiver, construire, pêcher et bâtir au présent ;"),
    p("• interviewer un professionnel et présenter un métier à l'oral ;"),
    p("• rédiger un texte explicatif sur le métier de mon choix ;"),
    p("• lire avec la bonne intonation grâce à la ponctuation !", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte EXPLICATIF", { bold: true, color: COLOR }),
        run(" — il répond aux questions Pourquoi ? Comment ? pour faire comprendre.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("l'autonomie, le goût de l'effort et de l'excellence.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S49 — Compréhension orale ----------
function ficheS49() {
  const meta = META("Compréhension orale : reportage « Les mains qui font vivre le village »",
    "À la fin de la séance, l'apprenant identifie le thème, le type et l'objectif d'un reportage sur les métiers et en relève les informations essentielles.",
    "1 / 12", "texte du reportage, photos de métiers");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Retour sur l'unité 4 : conjuguez « nous (commencer) le travail » et fabriquez l'adverbe de « lent ».")],
      [fp("Répondent."),
       fp("R.A. : nous commençons ; lentement.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Devinettes : « Je retourne la terre avec ma bêche, qui suis-je ? » ; « Je soigne les malades à l'hôpital, qui suis-je ? » Puis : quels métiers voit-on dans notre quartier ?")],
      [fp("Devinent, citent des métiers."),
       fp("R.A. : le cultivateur ; l'infirmier ; maçon, marchande, chauffeur…")],
      "Devinettes, brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Compréhension orale : un reportage sur les métiers du village ». Un reportage = un journaliste va sur place, écoute et rapporte : nous entendrons de vraies voix de travailleurs !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lecture expressive (je change de voix pour chaque personne interviewée !). Questions globales : Quel est le thème ? Qui parle ? Combien de personnes sont interviewées ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : thème = les métiers du village ; un journaliste ; trois personnes : Rasoa, Ratovo, madame Lalao.")],
      "Écoute active", "Texte"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relecture. Mots nouveaux : cultivatrice, charpentier, matière première, rabot, tisserande. Déduisez le sens par le contexte et la famille de mots : CULTIV-atrice ← cultiver ; TISSER-ande ← tisser.")],
      [fp("Déduisent le sens."),
       fp("R.A. : cultivatrice = celle qui cultive ; charpentier = celui qui construit en bois ; le rabot = l'outil qui lisse le bois.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Tableau collectif à compléter : MÉTIER / QUE FAIT-IL ? / AVEC QUOI ? / OÙ ? pour les trois interviewés. Information principale du reportage ?")],
      [fp("Complètent le tableau."),
       fp("R.A. : Rasoa cultive riz et manioc, avec sa bêche, dans la rizière ; Ratovo construit maisons et meubles, avec marteau-scie-rabot, dans l'atelier ; Lalao vend, au marché. Info principale : chaque métier est utile, chacun a besoin des autres.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez en une phrase pourquoi madame Lalao dit que « chacun a besoin des autres ».")],
      [fp("Reformulent."),
       pAns("R.A. : Sans la commerçante, les légumes de la cultivatrice et les paniers des tisserandes ne seraient pas vendus : les métiers se complètent !", ["se complètent"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel est le thème du reportage ?"),
       fp("2. Que cultive Rasoa ? Avec quel outil ?"),
       fp("3. Cite deux outils du charpentier."),
       fp("4. Pourquoi Ratovo recommence-t-il une pièce dix fois s'il le faut ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. les métiers du village — 2. le riz et le manioc, avec sa bêche — 3. le marteau, la scie (ou le rabot) — 4. puisque un bon artisan vise toujours l'excellence.", ["les métiers", "l'excellence"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}
function lessonS49() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("J'ÉCOUTE UN REPORTAGE SUR LES MÉTIERS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Le reportage :"),
    p("• Un journaliste va sur le terrain, interroge des personnes et rapporte leurs paroles."),
    p("• On y entend des interviews : les paroles sont entre guillemets « … ».", { after: 80 }),
    sub("Pour chaque métier, je retiens quatre informations :"),
    pr([run("QUI ? ", { bold: true, color: C.BLUE }), run("(le métier)  —  "),
        run("QUOI ? ", { bold: true, color: C.BLUE }), run("(les missions)  —  "),
        run("AVEC QUOI ? ", { bold: true, color: C.BLUE }), run("(les outils)  —  "),
        run("OÙ ? ", { bold: true, color: C.BLUE }), run("(le lieu de travail)")], { after: 80 }),
    sub("Mots nouveaux :"),
    mot("la cultivatrice", "celle qui cultive les champs (← cultiver)."),
    mot("le charpentier", "l'artisan qui construit en bois."),
    mot("la matière première", "ce que la nature donne et que l'on transforme : le bois, le coton…"),
    mot("le rabot", "l'outil du charpentier pour lisser le bois."),
    mot("la tisserande", "celle qui tisse les nattes et les paniers (← tisser)."),
    p("", { after: 60 }),
    pr([run("La leçon du reportage : ", { bold: true }),
        run("chaque métier est utile — chaque main compte !", { bold: true, color: COLOR })]),
  ];
}

// ---------- S50 — Lexique ----------
function ficheS50() {
  const meta = META("Lexique : les secteurs d'activités, les lieux, les outils, les matières premières",
    "À la fin de la séance, l'apprenant classe les métiers dans les trois secteurs d'activités et emploie le vocabulaire des lieux de travail, des outils et des matières premières.",
    "2 / 12", "étiquettes de métiers, photos d'outils");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les trois métiers du reportage et leur lieu de travail ?")],
      [fp("Répondent."),
       fp("R.A. : cultivatrice/rizière, charpentier/atelier, commerçante/marché.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du tri : j'affiche douze étiquettes de métiers en vrac (pêcheur, maçon, instituteur, éleveur, forgeron, facteur…). Comment les ranger en familles ? Les élèves proposent leurs classements.")],
      [fp("Proposent des classements.")],
      "Manipulation d'étiquettes", "Étiquettes"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les trois secteurs d'activités ». Les économistes rangent TOUS les métiers du monde dans trois grandes familles — nous allons apprendre lesquelles !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Tableau des trois secteurs : PRIMAIRE = on récolte ce que la nature donne (agriculture, pêche, élevage) ; SECONDAIRE = on transforme (industrie, artisanat) ; TERTIAIRE = on sert les autres (commerce, administration, école, santé). Où vont Rasoa, Ratovo, Lalao ?")],
      [fp("Classent les trois interviewés."),
       fp("R.A. : Rasoa → primaire ; Ratovo → secondaire ; Lalao → tertiaire.")],
      "Observation guidée", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("On enrichit chaque secteur : métiers, lieux de travail (rizière, port, atelier, usine, marché, bureau, hôpital), matières premières (le riz, le poisson, le bois, le coton, le fer) et outils (la bêche, le filet, la scie, l'enclume, la balance, l'ordinateur). Activités rurales (à la campagne) et urbaines (en ville).")],
      [fp("Classent les douze étiquettes, associent lieux et outils."),
       fp("R.A. : pêcheur/éleveur → primaire ; maçon/forgeron → secondaire ; instituteur/facteur → tertiaire…")],
      "Travail collaboratif", "Étiquettes, photos"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulation en carte mentale : trois branches, et pour chaque branche : métiers + lieux + outils. Remarque : le facteur et la mairie de l'unité 3 sont du secteur tertiaire !")],
      [fp("Recopient la carte mentale.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Devinette inversée : un élève donne secteur + lieu + outil, la classe trouve le métier. « Secondaire, l'atelier, l'enclume ? »")],
      [fp("Jouent."),
       fp("R.A. : le forgeron !")],
      "Jeu de devinettes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Cite les trois secteurs d'activités avec un exemple de métier chacun."),
       fp("2. Classe : infirmière, éleveur, menuisier."),
       fp("3. Associe : le filet, la balance, la bêche → pêcheur, commerçante, cultivateur."),
       fp("4. Donne une matière première et ce qu'on en fait.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. primaire (pêcheur), secondaire (charpentier), tertiaire (instituteur) — 2. tertiaire, primaire, secondaire — 3. filet→pêcheur, balance→commerçante, bêche→cultivateur — 4. le bois → des meubles (ou le coton → des vêtements).", ["primaire", "secondaire", "tertiaire"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50");
}
function lessonS50() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 50", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES TROIS SECTEURS D'ACTIVITÉS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le secteur PRIMAIRE — on récolte ce que la nature donne :"),
    p("agriculture, pêche, élevage → le cultivateur, le pêcheur, l'éleveur."),
    p("Lieux : la rizière, le lac, les pâturages. Outils : la bêche, le filet.", { after: 80 }),
    sub("2. Le secteur SECONDAIRE — on transforme les matières premières :"),
    p("industrie, artisanat → l'ouvrier, le charpentier, le forgeron, la tisserande."),
    p("Lieux : l'usine, l'atelier, le chantier. Outils : la scie, le marteau, l'enclume.", { after: 80 }),
    sub("3. Le secteur TERTIAIRE — on sert les autres :"),
    p("commerce, administration, école, santé → la commerçante, le facteur, l'instituteur, l'infirmière."),
    p("Lieux : le marché, le bureau, l'école, l'hôpital. Outils : la balance, l'ordinateur.", { after: 80 }),
    sub("Les matières premières :"),
    p("ce que la nature donne et que l'on transforme : le riz, le poisson, le bois, le coton, le fer.", { after: 80 }),
    sub("Activités rurales et urbaines :"),
    pr([run("rurales ", { bold: true, color: C.BLUE }), run("= à la campagne (cultiver, élever) ; "),
        run("urbaines ", { bold: true, color: C.BLUE }), run("= en ville (bureaux, usines, commerces).")]),
  ];
}

// ---------- S51 — Compréhension écrite ----------
function ficheS51() {
  const meta = META("Compréhension écrite : « Pourquoi dit-on que le charpentier bâtit l'avenir ? »",
    "À la fin de la séance, l'apprenant lit un texte explicatif sur un métier, complète un tableau métier/missions/compétences/lieu et distingue informations principales et secondaires.",
    "3 / 12", "texte de lecture, tableau à compléter");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Dans quel secteur travaille le charpentier ? Ses outils ?")],
      [fp("Répondent."),
       fp("R.A. : secondaire (artisanat) ; scie, rabot, marteau.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Titre au tableau : « Pourquoi dit-on que le charpentier bâtit l'avenir ? » Hypothèses : que va expliquer ce texte ?")],
      [fp("Font des hypothèses.")],
      "Anticipation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Distribution du texte. Rappel : le texte explicatif répond à Pourquoi ? Comment ?, au présent, avec des connecteurs explicatifs.")],
      [fp("Observent le texte.")], "Travail collectif", "Texte"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Vérification des hypothèses, puis questions globales : combien de paragraphes ? Quelle question ouvre chacun d'eux ?")],
      [fp("Lisent, répondent."),
       fp("R.A. : quatre paragraphes ; les questions : Quelles missions ? Quelles compétences ? Pourquoi est-il important ?")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse", "(lecture approfondie)"],
      [fp("Tableau à compléter : MÉTIER / MISSIONS / COMPÉTENCES / OUTILS / LIEU D'EXERCICE. Mots inconnus par le contexte : la charpente, la poutre, bâclé. Puis tri : information principale du texte ? informations secondaires ?")],
      [fp("Complètent le tableau, déduisent, trient."),
       fp("R.A. : missions = construire charpentes, ponts, meubles ; compétences = force, précision, patience ; info principale = le charpentier est important parce qu'il met les familles à l'abri ; secondaire = le nom des outils.")],
      "Exploitation de texte", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Repérage des connecteurs de cause dans le texte : car, puisque, parce que, grâce à. C'est l'arme secrète du texte explicatif — nous les étudierons aux séances suivantes !")],
      [fp("Soulignent les connecteurs."),
       fp("R.A. : « car les poutres sont lourdes », « puisque le bois ne pardonne pas », « Parce que sans charpentier, pas de toit », « Grâce à son travail ».")],
      "Repérage guidé", "Texte"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez avec vos mots pourquoi le charpentier « bâtit l'avenir ».")],
      [fp("Reformulent."),
       pAns("R.A. : Ses maisons protègent les familles pendant des générations : son travail d'aujourd'hui sert encore demain — il bâtit donc l'avenir !", ["l'avenir"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. À quelle question répond le texte ?"),
       fp("2. Cite deux missions du charpentier."),
       fp("3. Cite deux compétences nécessaires."),
       fp("4. Relève un connecteur de cause du texte.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Pourquoi dit-on que le charpentier bâtit l'avenir ? — 2. construire la charpente, bâtir ponts et meubles — 3. la force et la précision (ou la patience) — 4. car / puisque / parce que / grâce à.", ["Pourquoi", "grâce à"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(51, TOTAL, meta, rows, "s51");
}
function lessonS51() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 51", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE UN TEXTE EXPLICATIF SUR UN MÉTIER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Le texte explicatif sur un métier répond à cinq questions :"),
    p("1. Quelles MISSIONS ? — ce que fait le professionnel."),
    p("2. Quelles COMPÉTENCES ? — ce qu'il doit savoir faire."),
    p("3. Quels OUTILS ? — avec quoi il travaille."),
    p("4. Quel LIEU D'EXERCICE ? — où il travaille."),
    p("5. Quelle IMPORTANCE ? — pourquoi son métier est utile.", { after: 80 }),
    sub("Information principale et informations secondaires :"),
    p("• l'information PRINCIPALE = le message essentiel du texte ;"),
    p("• les informations SECONDAIRES = les détails qui complètent.", { after: 80 }),
    sub("L'arme secrète de l'explication — les connecteurs de cause :"),
    pr([run("car, parce que, puisque, grâce à", { bold: true, color: C.RED }),
        run(" — ils répondent à la question « pourquoi ? ».")], { after: 80 }),
    sub("Mots nouveaux :"),
    mot("la charpente", "le squelette de bois qui porte le toit."),
    mot("la poutre", "une grosse pièce de bois de la charpente."),
    mot("bâclé", "fait trop vite et mal. Le contraire du travail soigné !"),
  ];
}

// ---------- S52 — Cause (1) : phrase simple ----------
function ficheS52() {
  const meta = META("L'expression de la cause (1) : à cause de, grâce à, en raison de",
    "À la fin de la séance, l'apprenant exprime la cause dans la phrase simple avec à cause de, grâce à et en raison de, en choisissant la nuance qui convient.",
    "4 / 12", "corpus de phrases, étiquettes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez un connecteur de cause relevé dans le texte du charpentier.")],
      [fp("Répondent."),
       fp("R.A. : car, puisque, parce que, grâce à.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Deux phrases au tableau : « La récolte est belle GRÂCE À la pluie. » / « La route est coupée À CAUSE DE la pluie. » La même pluie… mais quelle différence ?")],
      [fp("Observent, comparent."),
       fp("R.A. : grâce à = cause heureuse ; à cause de = cause fâcheuse !")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Exprimer la cause dans la phrase simple ». La cause = ce qui explique, la réponse à « pourquoi ? ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus : « Grâce à son maître, Ratovo connaît les secrets du bois. » ; « Le marché est fermé en raison de la fête. » ; « À cause du cyclone, les pêcheurs restent au port. » Que suit chaque expression ?")],
      [fp("Observent."),
       fp("R.A. : chaque expression est suivie d'un NOM (ou d'un groupe nominal).")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Tableau des trois nuances : GRÂCE À + nom = cause positive (bravo !) ; À CAUSE DE + nom = cause négative (hélas !) ; EN RAISON DE + nom = cause neutre, officielle (les affiches de la mairie !). Manipulation : choisir la bonne expression dans six phrases.")],
      [fp("Complètent les phrases."),
       fp("R.A. : « Grâce à ses efforts, Soa a réussi. » ; « À cause de la panne, l'usine s'arrête. » ; « En raison des travaux, le bureau est fermé. »")],
      "Manipulation de phrases", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Règle récapitulative copiée au tableau + astuce : cause heureuse → grâce à ; cause fâcheuse → à cause de ; affiche officielle → en raison de.")],
      [fp("Recopient la règle.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Production : trois phrases sur les métiers, une avec chaque expression.")],
      [fp("Écrivent."),
       pAns("R.A. : Grâce à la commerçante, les légumes arrivent en ville. À cause de la sécheresse, la récolte est maigre. En raison du marché, la rue est fermée lundi.", ["Grâce à", "À cause de", "En raison de"], { size: SZ.FICHE })],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Complète : 1. « … ses bras solides, le charpentier porte les poutres. » 2. « … la pluie, le chantier est arrêté. » 3. « … l'inventaire, la boutique est fermée. » 4. Invente une phrase avec « grâce à ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Grâce à — 2. À cause de — 3. En raison de — 4. exemple : Grâce à l'instituteur, je sais lire.", ["Grâce à", "À cause de", "En raison de"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52");
}
function lessonS52() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LA CAUSE (1) : DANS LA PHRASE SIMPLE", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("La cause, c'est la réponse à « pourquoi ? »."),
    p("Dans la phrase simple, on l'exprime avec une expression + un NOM :", { after: 80 }),
    pr([run("GRÂCE À ", { bold: true, color: C.GREEN }), run("+ nom → cause "),
        run("positive ", { bold: true, color: C.GREEN }), run(": « Grâce à son maître, Ratovo connaît le bois. »")], { after: 60 }),
    pr([run("À CAUSE DE ", { bold: true, color: C.RED }), run("+ nom → cause "),
        run("négative ", { bold: true, color: C.RED }), run(": « À cause du cyclone, les pêcheurs restent au port. »")], { after: 60 }),
    pr([run("EN RAISON DE ", { bold: true, color: C.BLUE }), run("+ nom → cause "),
        run("neutre, officielle ", { bold: true, color: C.BLUE }), run(": « En raison de la fête, le marché est fermé. »")], { after: 80 }),
    sub("L'astuce de Koto :"),
    p("Je dis merci ? → grâce à. Je me plains ? → à cause de. Je lis une affiche de la mairie ? → en raison de !"),
  ];
}

// ---------- S53 — Cause (2) : car, parce que, puisque ----------
function ficheS53() {
  const meta = META("L'expression de la cause (2) : car, parce que, puisque",
    "À la fin de la séance, l'apprenant exprime la cause avec car (coordination) et avec parce que et puisque (subordination), et distingue leurs emplois.",
    "5 / 12", "corpus de phrases, étiquettes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Complétez : « … la pluie, la rizière est pleine d'eau. » (cause heureuse !)")],
      [fp("Répondent."),
       fp("R.A. : Grâce à.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase à allonger : « Le pêcheur se lève tôt. » Pourquoi ? Ajoutez la raison avec le mot de votre choix !")],
      [fp("Proposent."),
       fp("R.A. : … parce que le poisson mord à l'aube / car la mer est calme le matin…")],
      "Production orale", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « La cause avec car, parce que, puisque ». Cette fois, l'expression est suivie d'une phrase entière (sujet + verbe), pas d'un simple nom !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus du texte : « Il faut des bras solides, car les poutres sont lourdes. » ; « Le charpentier est patient, puisque le bois ne pardonne pas le travail bâclé. » ; « Le métier est important parce que sans charpentier, pas de toit ! » Que suit car/parce que/puisque ?")],
      [fp("Observent."),
       fp("R.A. : une phrase avec sujet et verbe conjugué.")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Les nuances : CAR relie deux phrases (coordination — jamais en début de phrase !) ; PARCE QUE répond à la question « pourquoi ? » (subordination — la cause est nouvelle) ; PUISQUE donne une cause que tout le monde connaît déjà (« Puisque tu es fort, porte le sac ! »). Manipulation : relier des paires de phrases des trois manières.")],
      [fp("Manipulent, transforment."),
       fp("R.A. : Je cultive tôt, car il fait frais. / Je cultive tôt parce qu'il fait frais. / Puisqu'il fait frais, je cultive tôt.")],
      "Manipulation de phrases", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Tableau récapitulatif des cinq outils de la cause (séances 52 + 53) : trois + nom, trois + phrase. La famille est complète !")],
      [fp("Recopient le tableau.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Jeu « pourquoi-parce que » en binômes : l'un pose une question métier (« Pourquoi l'éleveur se lève-t-il tôt ? »), l'autre répond avec parce que, puis reformule avec car.")],
      [fp("Jouent."),
       pAns("R.A. : Parce que les zébus ont faim le matin. → L'éleveur se lève tôt, car les zébus ont faim le matin.", ["Parce que", "car"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Relie avec car : « Le forgeron est fort. Il frappe le fer toute la journée. »"),
       fp("2. Réponds avec parce que : « Pourquoi l'infirmière se lave-t-elle les mains ? »"),
       fp("3. Commence par puisque : « Tu connais le chemin. Guide-nous. »"),
       fp("4. + nom ou + phrase ? Classe : grâce à, parce que, en raison de, car.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Le forgeron est fort, car il frappe le fer toute la journée. — 2. Parce que les microbes menacent les malades. — 3. Puisque tu connais le chemin, guide-nous. — 4. + nom : grâce à, en raison de ; + phrase : parce que, car.", ["car", "Parce que", "Puisque"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}
function lessonS53() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LA CAUSE (2) : CAR, PARCE QUE, PUISQUE", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    p("Ces trois mots sont suivis d'une PHRASE entière (sujet + verbe) :", { after: 80 }),
    pr([run("CAR ", { bold: true, color: C.RED }),
        run("— relie deux phrases, jamais en tête de phrase : « Il faut des bras solides, car les poutres sont lourdes. »")], { after: 60 }),
    pr([run("PARCE QUE ", { bold: true, color: C.RED }),
        run("— répond à « pourquoi ? », la cause est une information nouvelle : « Il est important parce qu'il met les familles à l'abri. »")], { after: 60 }),
    pr([run("PUISQUE ", { bold: true, color: C.RED }),
        run("— la cause est déjà connue de tous : « Puisque tu es fort, porte le sac ! »")], { after: 80 }),
    sub("La famille de la cause au complet :"),
    p("• + NOM : grâce à (😊), à cause de (😞), en raison de (officiel) ;"),
    p("• + PHRASE : car, parce que, puisque.", { after: 80 }),
    sub("L'astuce de Soa :"),
    p("« Pourquoi ? » → je réponds avec parce que. Tout le monde le sait déjà ? → puisque. J'ajoute la raison après une virgule ? → car."),
  ];
}

// ---------- S54 — Conjugaison ----------
function ficheS54() {
  const meta = META("Conjugaison : cultiver, pêcher, construire, bâtir au présent",
    "À la fin de la séance, l'apprenant conjugue au présent de l'indicatif les verbes des métiers : cultiver et pêcher (1er groupe), bâtir (2e groupe) et construire (3e groupe).",
    "6 / 12", "étiquettes pronoms/verbes, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conjuguez : « nous (remplir) le formulaire » (unité 3 !) et « nous (lancer) le filet » (unité 4 !).")],
      [fp("Répondent."),
       fp("R.A. : nous remplissons ; nous lançons.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Mime des verbes : cultiver, pêcher, construire, bâtir. La classe devine et donne l'infinitif.")],
      [fp("Miment, devinent.")],
      "Mime", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les verbes des métiers au présent ». Quatre verbes, trois groupes : un beau chantier de conjugaison !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(corpus)"],
      [fp("Corpus du reportage : « Je cultive le riz » ; « il pêche dans le lac » ; « Je construis des maisons » ; « le charpentier bâtit l'avenir ». Infinitifs ? Groupes ?")],
      [fp("Retrouvent les infinitifs."),
       fp("R.A. : cultiver, pêcher → 1er groupe ; bâtir (–issons !) → 2e groupe ; construire → 3e groupe.")],
      "Exploitation de corpus", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Conjugaison complète au tableau, les élèves en chœur : cultiver/pêcher (-e, -es, -e, -ons, -ez, -ent) ; bâtir comme remplir et finir (je bâtis, nous bâtissons, ils bâtissent — le -iss- au pluriel !) ; construire (je construis, tu construis, il construit, nous construisons, vous construisez, ils construisent).")],
      [fp("Répètent, épellent sur l'ardoise."),
       fp("R.A. : nous bâtissons ; ils construisent.")],
      "Observation et répétition", "Tableau, ardoises"),
    stepRow(["5. Synthèse"],
      [fp("Pièges encadrés : il bâtit (un seul t au singulier… mais nous bâtissons !) ; il construit (pas de -s à il !) ; ils construisent (le -s- revient au pluriel).")],
      [fp("Recopient le tableau de conjugaison.")],
      "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Chaîne de conjugaison : je lance un pronom et un verbe, l'élève conjugue et relance. « Nous + construire ! » → « Nous construisons ! Ils + bâtir ! »")],
      [fp("Jouent à la chaîne."),
       fp("R.A. : nous construisons, ils bâtissent, vous cultivez, elle pêche…")],
      "Jeu de chaîne", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Mets au présent : 1. Les maçons (bâtir) l'école. 2. Nous (construire) un pont. 3. Rasoa (cultiver) le manioc. 4. Vous (pêcher) au filet. 5. Je (bâtir) une cabane.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. bâtissent — 2. construisons — 3. cultive — 4. pêchez — 5. bâtis.", ["bâtissent", "construisons", "cultive", "pêchez", "bâtis"], { size: SZ.FICHE })],
      "Travail individuel", "Cahiers"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}
function lessonS54() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CULTIVER, PÊCHER, CONSTRUIRE, BÂTIR AU PRÉSENT", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("1er groupe — cultiver, pêcher (comme chanter) :"),
    p("je cultive, tu cultives, il cultive, nous cultivons, vous cultivez, ils cultivent."),
    p("je pêche, tu pêches, elle pêche, nous pêchons, vous pêchez, elles pêchent.", { after: 80 }),
    sub("2e groupe — bâtir (comme finir et remplir) :"),
    pr([run("je bâtis, tu bâtis, il bâtit, "),
        run("nous bâtissons, vous bâtissez, ils bâtissent", { bold: true, color: C.BLUE }),
        run(" — le -iss- revient au pluriel !")], { after: 80 }),
    sub("3e groupe — construire :"),
    pr([run("je construis, tu construis, il construit, "),
        run("nous construisons, vous construisez, ils construisent", { bold: true, color: C.BLUE }),
        run(".")], { after: 80 }),
    sub("Les pièges :"),
    p("• il bâtit, il construit — pas de -s à « il » !"),
    p("• nous bâtissons, ils construisent — le -iss- et le -s- reviennent au pluriel.", { after: 80 }),
    pr([run("La phrase mémo : ", { bold: true }),
        run("« Nous cultivons, vous pêchez, ils bâtissent et elles construisent : tout le village travaille ! »", { italic: true, color: COLOR })]),
  ];
}

// ---------- S55 — Production orale ----------
function ficheS55() {
  const meta = META("Production orale : interviewer un professionnel et présenter un métier",
    "À la fin de la séance, l'apprenant échange sur les métiers de ses proches, mène une interview simulée et présente un métier à l'oral avec le vocabulaire spécifique et les expressions de la cause.",
    "7 / 12", "grille d'interview, photos de métiers");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conjuguez : « ils (bâtir) » ; « nous (construire) ». Un connecteur de cause + phrase ?")],
      [fp("Répondent."),
       fp("R.A. : ils bâtissent ; nous construisons ; car / parce que / puisque.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Tour de table : quel est le métier de tes parents ou d'un proche ? Dans quel secteur ? Notre carte des métiers de la classe prend forme au tableau !")],
      [fp("Présentent un métier de leur famille.")],
      "Échange", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Interviewer comme un journaliste, présenter comme un expert ». Comme dans le reportage d'Ambohimahasoa !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(préparer l'interview)"],
      [fp("Construction collective de la grille du journaliste : Quelles sont vos missions ? Quelles compétences faut-il ? Quels outils utilisez-vous ? Où travaillez-vous ? Pourquoi aimez-vous ce métier ? + les comportements communicatifs : demander une clarification (« Pouvez-vous expliquer le mot… ? »), reformuler (« Si je comprends bien… »), demander l'avis des autres, admettre ses erreurs.")],
      [fp("Élaborent la grille, la recopient.")],
      "Travail collectif", "Grille d'interview"),
    stepRow(["4. Analyse", "(interview simulée)"],
      [fp("Jeu de rôle en binômes : un journaliste, un professionnel (le métier d'un proche qu'il connaît bien). Le journaliste interroge avec la grille et prend des notes ; le professionnel répond avec le vocabulaire des métiers. Puis on échange les rôles.")],
      [fp("Mènent l'interview, prennent des notes."),
       fp("R.A. : — Quelles sont vos missions ? — Je cultive le riz et j'élève des poulets. — Avec quels outils ? — Ma bêche et mon arrosoir.")],
      "Simulation", "Grilles, notes"),
    stepRow(["5. Synthèse", "(présentation)"],
      [fp("Des volontaires présentent LE MÉTIER de leur binôme à partir de leurs notes : métier, secteur, missions, outils, lieu, et POURQUOI ce métier est utile (avec grâce à, car, parce que !). La classe pose des questions.")],
      [fp("Présentent, répondent."),
       pAns("R.A. (exemple) : Je vous présente le métier de Naina : mécanicien. C'est un métier du secteur tertiaire. Il répare les taxis-brousse dans son garage, avec ses clés et son cric. Grâce à lui, les voyageurs arrivent entiers ! Il aime son métier parce que chaque panne est une énigme à résoudre.", ["Grâce à", "parce que"], { size: SZ.FICHE })],
      "Exposé", "Notes"),
    stepRow(["6. Entraînement"],
      [fp("Tour éclair : « Plus tard, je veux être… parce que… » — une phrase chacun !")],
      [fp("S'expriment."),
       fp("R.A. : Plus tard, je veux être infirmière, parce que je veux soigner les enfants.")],
      "Tour de parole", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille orale : ☐ j'ai posé des questions claires ☐ j'ai reformulé ☐ j'ai utilisé le vocabulaire des métiers ☐ j'ai expliqué avec un connecteur de cause ☐ j'ai répondu aux questions.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}
function lessonS55() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 55", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("INTERVIEWER ET PRÉSENTER UN MÉTIER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Les cinq questions du journaliste :"),
    p("1. Quelles sont vos missions ?"),
    p("2. Quelles compétences faut-il ?"),
    p("3. Quels outils utilisez-vous ?"),
    p("4. Où travaillez-vous ?"),
    p("5. Pourquoi aimez-vous ce métier ?", { after: 80 }),
    sub("Les bons réflexes de l'interview :"),
    p("• demander une clarification : « Pouvez-vous expliquer le mot… ? »"),
    p("• reformuler : « Si je comprends bien, vous… »"),
    p("• admettre ses erreurs : « Ah, je m'étais trompé ! »"),
    p("• demander l'avis des autres : « Et vous, qu'en pensez-vous ? »", { after: 80 }),
    sub("Pour présenter le métier ensuite :"),
    pr([run("métier + secteur + missions + outils + lieu + ", { bold: true }),
        run("pourquoi il est utile ", { bold: true, color: C.RED }),
        run("(grâce à, car, parce que !)")]),
  ];
}

// ---------- S56 — Production écrite 1 ----------
function ficheS56() {
  const meta = META("Production écrite (1) : choisir un métier et préparer le plan",
    "À la fin de la séance, l'apprenant choisit un métier, dresse sa fiche métier (missions, compétences, outils, lieu, importance) et organise le plan de son texte explicatif.",
    "8 / 12", "texte modèle du charpentier, fiche métier vierge");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les cinq questions auxquelles répond un texte explicatif sur un métier ?")],
      [fp("Répondent."),
       fp("R.A. : missions, compétences, outils, lieu d'exercice, importance.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Grand projet : « Explique le métier de ton choix ! » Métier d'un proche, métier rêvé, métier du village ou de la ville : liberté totale.")],
      [fp("Recopient le sujet, choisissent.")],
      "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Aujourd'hui : la fiche métier et le plan. Prochaine séance : la rédaction. Le modèle sous les yeux : le texte du charpentier.")],
      [fp("Écoutent.")], "Travail collectif", "Texte modèle"),
    stepRow(["3. Observation"],
      [fp("Retour au modèle : comment le texte du charpentier est-il construit ? Paragraphe 1 : la question d'accroche ; paragraphe 2 : missions + outils + lieu ; paragraphe 3 : compétences ; paragraphe 4 : importance (la réponse au pourquoi !).")],
      [fp("Retrouvent le plan du modèle."),
       fp("R.A. : accroche → missions/outils/lieu → compétences → importance.")],
      "Exploitation de modèle", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Chacun remplit sa FICHE MÉTIER : NOM du métier et secteur / MISSIONS (2-3 verbes d'action !) / COMPÉTENCES / OUTILS / LIEU D'EXERCICE / IMPORTANCE (avec grâce à ou parce que). Puis liste personnelle : vocabulaire spécifique + connecteurs de cause à utiliser.")],
      [fp("Remplissent leur fiche métier.")],
      "Brainstorming, planification guidée", "Fiche métier"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois fiches présentées. La classe vérifie : les missions sont-elles des verbes d'action ? L'importance répond-elle à « pourquoi » ?")],
      [fp("Présentent, améliorent."),
       pAns("R.A. (exemple de fiche) : la sage-femme — secteur tertiaire ; missions : accueillir les mamans, aider les bébés à naître, conseiller les familles ; compétences : savoir-faire précis, calme, douceur ; outils : stéthoscope, balance ; lieu : le centre de santé ; importance : grâce à elle, les naissances se passent bien au village.", ["sage-femme"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Finalisation : la question d'accroche de chacun, sur le modèle du charpentier. « Pourquoi dit-on que… ? » ou « Connaissez-vous le métier de… ? »")],
      [fp("Écrivent leur accroche.")],
      "Travail individuel", "Fiches"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Liste de contrôle : ☐ métier et secteur notés ☐ 2-3 missions en verbes d'action ☐ compétences, outils, lieu ☐ importance avec un connecteur de cause ☐ question d'accroche prête.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(56, TOTAL, meta, rows, "s56");
}
function lessonS56() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 56", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE EXPLICATIF (1) : LA FICHE MÉTIER ET LE PLAN", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Choisis un métier et explique-le : missions, compétences, outils, lieu d'exercice, importance.", { italic: true })], { after: 80 }),
    sub("Ma fiche métier — six cases à remplir :"),
    p("1. le MÉTIER et son secteur ;"),
    p("2. les MISSIONS — des verbes d'action : cultiver, construire, soigner, vendre… ;"),
    p("3. les COMPÉTENCES — ce qu'il faut savoir faire ;"),
    p("4. les OUTILS ;"),
    p("5. le LIEU D'EXERCICE ;"),
    p("6. l'IMPORTANCE — pourquoi ce métier est utile (grâce à, parce que !).", { after: 80 }),
    sub("Mon plan, sur le modèle du charpentier :"),
    p("1. La question d'accroche : « Pourquoi dit-on que… ? »"),
    p("2. Les missions, les outils, le lieu."),
    p("3. Les compétences."),
    p("4. L'importance du métier — la réponse au pourquoi !"),
  ];
}

// ---------- S57 — Production écrite 2 ----------
function ficheS57() {
  const meta = META("Production écrite (2) : rédiger mon texte explicatif sur un métier",
    "À la fin de la séance, l'apprenant rédige un texte explicatif sur le métier choisi, puis le relit, le corrige et l'améliore à l'aide d'une grille.",
    "9 / 12", "fiches métier de la séance 56, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les six cases de la fiche métier ?")],
      [fp("Répondent."),
       fp("R.A. : métier/secteur, missions, compétences, outils, lieu, importance.")],
      "Travail collectif", "Fiches"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Relecture de l'accroche préparée. Rappel du modèle : chaque paragraphe commence par une question ou un connecteur.")],
      [fp("Relisent leur accroche.")],
      "Écriture guidée", "----"),
    stepRow(["2. Présentation"],
      [fp("Consignes : quatre paragraphes suivant le plan, verbes au présent, au moins TROIS expressions de cause différentes, les verbes cultiver/construire/pêcher/bâtir bien conjugués si on les emploie.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse à partir de la fiche métier. Je circule : un « il bâti » sans t ? un « car » en début de phrase ? J'aiguille sans écrire à la place.")],
      [fp("Rédigent leur premier jet.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(relecture)"],
      [fp("Grille de relecture : 1. Mes quatre paragraphes suivent-ils le plan ? 2. Trois expressions de cause différentes ? 3. Les verbes au présent, bien accordés ? 4. Le vocabulaire spécifique (secteur, missions, outils) ? 5. Majuscules et ponctuation ?")],
      [fp("Relisent, corrigent.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse", "(amélioration)"],
      [fp("Échange de brouillons en binômes : le lecteur découvre-t-il bien le métier ? Peut-il citer les missions sans relire ? Il signale le passage flou.")],
      [fp("Améliorent leur texte."),
       pAns("R.A. (exemple de production) : Pourquoi dit-on que la sage-femme est la première amie des bébés ? Son métier appartient au secteur tertiaire. Au centre de santé, elle accueille les mamans, aide les bébés à naître et conseille les familles, avec son stéthoscope et sa balance. Il faut des mains douces et un grand calme, car une naissance n'attend pas ! Puisque chaque village veut voir grandir ses enfants, ce métier est précieux : grâce à la sage-femme, les naissances se passent bien. Voilà pourquoi on l'appelle la première amie des bébés !", ["car", "Puisque", "grâce à"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre avec le titre. Quelques textes sont lus à la classe — notre galerie des métiers !")],
      [fp("Recopient, présentent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage. Barème : plan en 4 paragraphes 3 pts, richesse des informations (missions, compétences, outils, lieu, importance) 3 pts, expressions de la cause 2 pts, correction de la langue 2 pts.")],
      [fp("Rendent leur production.")],
      "Travail individuel", "----"),
  ];
  return fiche(57, TOTAL, meta, rows, "s57");
}
function lessonS57() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 57", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE EXPLICATIF (2) : RÉDIGER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("La recette du texte explicatif sur un métier :"),
    p("• J'accroche avec une question : « Pourquoi dit-on que… ? »"),
    p("• J'explique les missions avec des verbes d'action au présent."),
    p("• Je précise les outils et le lieu d'exercice."),
    p("• Je justifie l'importance : grâce à, car, parce que, puisque."),
    p("• Je termine en répondant à la question du titre !", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Quatre paragraphes : accroche / missions-outils-lieu / compétences / importance."),
    p("☐ Trois expressions de cause différentes."),
    p("☐ Les verbes au présent : il bâtit, ils construisent…"),
    p("☐ Le vocabulaire des métiers : secteur, missions, matière première…"),
    p("☐ Majuscules, points, et « car » jamais en début de phrase !"),
  ];
}

// ---------- S58 — Lecture-fluidité ----------
function ficheS58() {
  const meta = META("Lecture-fluidité : la ponctuation et l'intonation",
    "À la fin de la séance, l'apprenant lit à haute voix un texte explicatif avec fluidité, expressivité et précision, en respectant les signes de ponctuation, les groupes de souffle et les variations d'intonation.",
    "10 / 12", "texte du charpentier, productions des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Les deux techniques de lecture de l'unité 4 ?")],
      [fp("Répondent."),
       fp("R.A. : la lecture en écho et la lecture chorale.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Je lis la même phrase deux fois : « Le charpentier bâtit l'avenir » — une fois plate comme une planche, une fois vivante avec les pauses et la musique. Quelle lecture donne envie d'écouter ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième — la ponctuation et l'intonation font vivre le texte !")],
      "Lecture modèle", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « La ponctuation, partition du lecteur ». Comme une partition de musique : elle dit où respirer et quand faire monter la voix.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(lecture modèle + repérage)"],
      [fp("Lecture modèle du texte du charpentier. Puis lecture silencieuse avec crayon : marquer les groupes de souffle ( / ), entourer les ? et les ! Rappel du code : , = petite pause ↑ ; . = grande pause ↓ ; ? = la voix monte ; ! = la voix s'exclame ; : = on annonce.")],
      [fp("Écoutent, marquent leur texte.")],
      "Lecture modèle, lecture silencieuse", "Texte, crayons"),
    stepRow(["4. Analyse", "(entraînement guidé)"],
      [fp("Entraînement par paragraphe : en binômes, lecture alternée — un paragraphe chacun, le camarade suit avec le doigt et signale les pauses oubliées. Attention au paragraphe 3, plein de virgules et de « car » !")],
      [fp("Lisent en binômes, se corrigent.")],
      "Lecture à haute voix en binôme", "Texte"),
    stepRow(["5. Synthèse", "(lectures expressives)"],
      [fp("Passage de volontaires : lire un paragraphe avec fluidité (sans hésiter), précision (tous les mots) et expressivité (les questions montent, « il bâtit l'avenir ! » s'exclame). La classe évalue avec la grille.")],
      [fp("Lisent, évaluent.")],
      "Lecture expressive", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Chacun lit SON texte explicatif (séance 57) à mi-voix en marquant ses groupes de souffle — prêt pour la galerie des métiers !")],
      [fp("Préparent la lecture de leur production.")],
      "Travail individuel", "Productions"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : ☐ j'ai respiré aux pauses ☐ ma voix a monté aux questions ☐ j'ai lu tous les mots sans hésiter ☐ ma lecture a donné envie d'écouter.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58");
}
function lessonS58() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 58", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LA PONCTUATION, PARTITION DU LECTEUR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le code du lecteur :"),
    pr([run(",  ", { bold: true, color: C.RED, size: 32 }), run("petite pause — je respire à peine ;")], { after: 50 }),
    pr([run(".  ", { bold: true, color: C.RED, size: 32 }), run("grande pause — la voix descend ;")], { after: 50 }),
    pr([run("?  ", { bold: true, color: C.RED, size: 32 }), run("la voix MONTE — c'est une question ;")], { after: 50 }),
    pr([run("!  ", { bold: true, color: C.RED, size: 32 }), run("la voix s'exclame — étonnement, fierté ;")], { after: 50 }),
    pr([run(":  ", { bold: true, color: C.RED, size: 32 }), run("j'annonce ce qui vient — petite pause gourmande.")], { after: 80 }),
    sub("Les groupes de souffle :"),
    p("Je découpe la phrase en morceaux qui se lisent d'un seul souffle :"),
    p("« Quand une nouvelle maison s'élève au village, / on entend souvent : / c'est le charpentier / qui bâtit l'avenir ! »", { after: 80 }),
    sub("Le trio gagnant :"),
    pr([run("fluidité ", { bold: true, color: C.BLUE }), run("+ "),
        run("précision ", { bold: true, color: C.BLUE }), run("+ "),
        run("expressivité ", { bold: true, color: C.BLUE }),
        run("= une lecture qui donne envie d'écouter !")]),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 5 : LES MÉTIERS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les trois secteurs d'activités :"),
    p("PRIMAIRE : la nature donne (agriculture, pêche, élevage) — SECONDAIRE : on transforme (industrie, artisanat) — TERTIAIRE : on sert (commerce, administration, école, santé). Avec leurs lieux de travail (rizière, atelier, usine, marché, bureau), leurs outils (bêche, filet, scie, balance) et les matières premières (riz, bois, coton, fer).", { after: 80 }),
    sub("2. Lire et écrire le texte explicatif sur un métier :"),
    p("Cinq questions : missions ? compétences ? outils ? lieu d'exercice ? importance ? Information principale et informations secondaires. Plan : accroche → missions/outils/lieu → compétences → importance.", { after: 80 }),
    sub("3. L'expression de la cause — la famille au complet :"),
    p("+ NOM : grâce à (cause heureuse), à cause de (cause fâcheuse), en raison de (officiel). + PHRASE : car (après une virgule), parce que (répond à pourquoi ?), puisque (cause connue de tous).", { after: 80 }),
    sub("4. Les verbes des métiers au présent :"),
    p("cultiver, pêcher (1er groupe : nous cultivons) ; bâtir (2e groupe : ils bâtissent !) ; construire (3e groupe : nous construisons, ils construisent).", { after: 80 }),
    sub("5. L'interview et la présentation :"),
    p("Les cinq questions du journaliste + les bons réflexes : clarifier, reformuler, admettre ses erreurs, demander l'avis des autres.", { after: 80 }),
    sub("6. La lecture expressive :"),
    p("La ponctuation est ma partition : , petite pause — . grande pause — ? la voix monte — ! la voix s'exclame. Et je découpe en groupes de souffle !"),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 5", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — Les secteurs :"),
    p("Classe dans le bon secteur : la tisserande, l'éleveur, le facteur, l'ouvrier d'usine, la pêcheuse, l'institutrice.", { after: 60 }),
    pAns("Corrigé : primaire : l'éleveur, la pêcheuse — secondaire : la tisserande, l'ouvrier d'usine — tertiaire : le facteur, l'institutrice.", ["primaire", "secondaire", "tertiaire"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Lieux, outils, matières :"),
    p("Associe chaque métier à son lieu ET à son outil : le forgeron, la commerçante, le cultivateur / l'atelier, le marché, la rizière / l'enclume, la balance, la bêche. Puis cite deux matières premières.", { after: 60 }),
    pAns("Corrigé : forgeron → atelier + enclume ; commerçante → marché + balance ; cultivateur → rizière + bêche ; matières premières : le bois, le fer (ou le riz, le coton).", ["enclume", "balance", "bêche"]),
    p("", { after: 40 }),
    sub("Exercice 3 — La cause :"),
    p("a) Complète : « … la sécheresse, la récolte est maigre. » ; « … son filet neuf, le pêcheur rapporte plus de poissons. » ; « … des travaux, la poste est fermée. » b) Relie avec car, puis avec parce que : « L'éleveur se lève tôt. Les zébus ont faim. » c) Commence par puisque : « Tu sais compter. Tiens la caisse. »", { after: 60 }),
    pAns("Corrigé : a) À cause de ; Grâce à ; En raison. b) L'éleveur se lève tôt, car les zébus ont faim. / L'éleveur se lève tôt parce que les zébus ont faim. c) Puisque tu sais compter, tiens la caisse.", ["À cause de", "Grâce à", "car", "parce que", "Puisque"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Conjugaison :"),
    p("Mets au présent : 1. Les maçons (bâtir) le pont. 2. Nous (construire) une pirogue. 3. Vous (cultiver) les collines. 4. Elle (pêcher) au lac. 5. Je (construire) une cabane. 6. Tu (bâtir) ton avenir !", { after: 60 }),
    pAns("Corrigé : 1. bâtissent — 2. construisons — 3. cultivez — 4. pêche — 5. construis — 6. bâtis.", ["bâtissent", "construisons", "cultivez", "construis"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Explique en cinq phrases le métier de ton choix : l'accroche (1), les missions et les outils (2), l'importance avec deux expressions de cause différentes (2).", { after: 60 }),
    pAns("Corrigé (exemple) : Connaissez-vous le métier de forgeron ? Dans son atelier, il transforme le fer avec son marteau et son enclume. Il fabrique les bêches et les couteaux du village. Grâce à lui, les cultivateurs ont de bons outils. Son métier est précieux parce que sans outils, pas de récolte !", ["Grâce à", "parce que"]),
  ];
}

// ---------- S59 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s59", "SÉANCE 59 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 5 : LES MÉTIERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le test !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Le métier mystère (10 min) :"),
    p("Un élève choisit un métier en secret ; la classe pose des questions fermées : « Travailles-tu dans le secteur primaire ? Utilises-tu une scie ? » Dix questions maximum pour deviner !", { after: 60 }),
    sub("Atelier 2 — Le tri des secteurs (5 min) :"),
    p("Ardoise : je dicte six métiers, les élèves écrivent 1, 2 ou 3 (le secteur). Éleveur ? Forgeron ? Infirmière ? Pêcheuse ? Ouvrier ? Commerçant ?", { after: 60 }),
    pAns("R.A. : 1 — 2 — 3 — 1 — 2 — 3.", ["1", "2", "3"]),
    p("", { after: 40 }),
    sub("Atelier 3 — La chasse à la cause (10 min) :"),
    p("Phrase de départ : « Le village admire le charpentier. » Chaque rangée ajoute la cause avec un outil différent : grâce à + nom, parce que + phrase, car + phrase, puisque en tête de phrase.", { after: 60 }),
    pAns("R.A. : …grâce à son travail soigné. / …parce qu'il bâtit des maisons solides. / Le village admire le charpentier, car ses toits résistent aux cyclones. / Puisque ses toits résistent, le village l'admire.", ["grâce à", "parce qu", "car", "Puisque"]),
    p("", { after: 40 }),
    sub("Atelier 4 — La dictée des verbes (10 min) :"),
    p("Ardoise : il bâtit — nous bâtissons — ils construisent — vous cultivez — nous construisons — elles pêchent. On épelle, on corrige, on recommence !", { after: 60 }),
    sub("Atelier 5 — L'interview éclair (10 min) :"),
    p("En binômes : trois questions du journaliste, trois réponses avec le vocabulaire des métiers, puis présentation en deux phrases au groupe. La ponctuation s'entend dans la voix !", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 5 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S60 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s60", "SÉANCE 60 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 5 : LES MÉTIERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire (4 points) :"),
    p("1. Cite les trois secteurs d'activités. 2. Classe : le menuisier, l'éleveuse, la factrice. 3. Donne l'outil du pêcheur et celui de la commerçante. 4. Qu'est-ce qu'une matière première ? Donne un exemple.", { after: 80 }),
    sub("Exercice 2 — La cause + nom (4 points) :"),
    p("Complète avec grâce à, à cause de ou en raison de : 1. « … la pluie, le chantier est arrêté. » 2. « … son maître, l'apprenti progresse vite. » 3. « … des fêtes, les bureaux sont fermés. » 4. Invente une phrase avec « grâce à ».", { after: 80 }),
    sub("Exercice 3 — La cause + phrase (4 points) :"),
    p("a) Relie avec car : « La sage-femme reste calme. Une naissance n'attend pas. » b) Réponds avec parce que : « Pourquoi le forgeron est-il fort ? » c) Commence par puisque : « Tu connais les prix. Tiens la boutique. »", { after: 80 }),
    sub("Exercice 4 — Conjugaison (4 points) :"),
    p("Mets au présent : 1. Les maçons (bâtir) l'école. 2. Nous (construire) un grenier à riz. 3. Rasoa (cultiver) le manioc. 4. Vous (pêcher) au filet.", { after: 80 }),
    sub("Exercice 5 — Expression écrite (4 points) :"),
    p("Explique un métier de ton choix en cinq ou six phrases : question d'accroche, missions (verbes d'action), outils et lieu, importance avec deux expressions de cause différentes.", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. primaire, secondaire, tertiaire — 2. secondaire, primaire, tertiaire — 3. le filet ; la balance — 4. ce que la nature donne et que l'on transforme : le bois (ou le riz, le coton, le fer). (1 pt chacun)", ["primaire", "secondaire", "tertiaire"]),
    pAns("Ex.2 : 1. À cause de — 2. Grâce à — 3. En raison — 4. exemple : Grâce à l'institutrice, je sais lire. (1 pt chacun)", ["À cause de", "Grâce à", "En raison"]),
    pAns("Ex.3 : a) La sage-femme reste calme, car une naissance n'attend pas. (1,5 pt) b) Parce qu'il frappe le fer toute la journée. (1,5 pt) c) Puisque tu connais les prix, tiens la boutique. (1 pt)", ["car", "Parce qu", "Puisque"]),
    pAns("Ex.4 : 1. bâtissent — 2. construisons — 3. cultive — 4. pêchez. (1 pt chacun)", ["bâtissent", "construisons", "cultive", "pêchez"]),
    pAns("Ex.5 : plan et accroche 1 pt, richesse des informations 1 pt, deux expressions de cause 1 pt, correction de la langue 1 pt.", ["plan"]),
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
      "Je comprends un reportage ou un texte explicatif sur les métiers.",
      "Je classe les métiers dans les trois secteurs : primaire, secondaire, tertiaire.",
      "Je connais les lieux de travail, les outils et les matières premières.",
      "Je trouve le sens des mots inconnus grâce au contexte et aux familles de mots.",
      "J'exprime la cause avec grâce à, à cause de, en raison de (+ nom).",
      "J'exprime la cause avec car, parce que, puisque (+ phrase).",
      "Je conjugue cultiver, pêcher, bâtir (ils bâtissent !) et construire au présent.",
      "J'interviewe un professionnel et je présente un métier à l'oral.",
      "Je rédige un texte explicatif sur un métier et je lis avec la bonne intonation.",
    ], "PROCHAINE ÉTAPE → UNITÉ 6 : LES CONTES ET LÉGENDES !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
