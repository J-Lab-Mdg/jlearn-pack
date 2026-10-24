// Français T5 — UNITÉ 3 — LES SERVICES PUBLICS (10 leçons + révision + test) — Séances 25 à 36 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet services publics
const SHADE = "E8DAEF";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 3 — LES SERVICES PUBLICS", title, slo,
  values: "respect des biens communs, sens de la responsabilité", session, materials,
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

// reportage d'écoute (S25)
function reportagePoste() {
  return box("PASSAGE D'ÉCOUTE — Reportage « Une matinée au bureau de poste »", [
    p("Il est huit heures à Ambositra. Le bureau de poste ouvre ses portes, et les usagers entrent déjà : une grand-mère qui vient chercher un mandat, un commerçant qui envoie un colis, des élèves qui achètent des timbres pour le concours de cartes postales."),
    p("Derrière le guichet, madame Hanta accueille chacun avec le sourire. Elle pèse les colis, vend les timbres et aide la grand-mère à remplir le formulaire du mandat. À côté d'elle, monsieur Solo trie le courrier : les lettres partent chaque soir vers toutes les régions de l'île. Dehors, le facteur attache son grand sac jaune sur son vélo : il part distribuer les lettres dans les quartiers, pour relier les familles."),
    p("Le bureau de poste rend mille services à la population : il transporte le courrier, il verse les mandats, il garde l'argent sur les livrets d'épargne. C'est un bien commun : chacun doit le respecter, car il appartient à tous !", { after: 40 }),
  ]);
}
// article de lecture (S27)
function articleMairie() {
  return box("TEXTE DE LECTURE — Article « La mairie, la maison de tous »", [
    p("Au centre du village, sur la grande place, se dresse la mairie. C'est un bâtiment clair, que l'on reconnaît de loin grâce au drapeau qui flotte sur son toit. Les habitants y viennent chaque jour pour leurs papiers de la vie quotidienne."),
    p("Dans la première salle se trouve le guichet de l'état civil : c'est ici que les parents déclarent les naissances et que l'on prépare la carte d'identité. L'employée qui tient ce guichet remplit les registres avec soin, car ces documents accompagnent chaque habitant toute sa vie. Dans le bureau voisin, le maire reçoit les villageois qui ont un problème à régler : une route abîmée, un puits à réparer, une école à agrandir."),
    p("La mairie rend des services que personne d'autre ne peut rendre : elle délivre les actes de naissance, elle organise les grands travaux du village, elle protège les biens communs. Les pompiers et le commissariat, où l'on court en cas de danger, travaillent main dans la main avec elle."),
    p("La mairie est la maison de tous : on y entre poliment, on attend son tour, et on garde la place propre. Respecter les services publics, c'est se respecter soi-même !", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 3 — LES SERVICES PUBLICS", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("Au service de tous, respectés par tous !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_services.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un reportage ou un article sur un service public ;"),
    p("• nommer les services publics et expliquer leurs rôles ;"),
    p("• conjuguer les verbes d'action remplir, envoyer, lire au présent ;"),
    p("• exprimer le but avec le complément circonstanciel de but ;"),
    p("• relier mes phrases avec les pronoms relatifs qui, que, où ;"),
    p("• présenter un service public à l'oral et donner mon avis ;"),
    p("• rédiger un court texte descriptif sur un service public.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte DESCRIPTIF", { bold: true, color: COLOR }),
        run(" — décrire un lieu, ses usagers, ses missions et son fonctionnement.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("le respect des biens communs et le sens de la responsabilité.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S25 — Compréhension orale ----------
function ficheS25() {
  const meta = META("Compréhension orale : « Une matinée au bureau de poste »",
    "À la fin de la séance, l'apprenant détermine le sens des mots inconnus et repère les informations essentielles d'un reportage entendu sur un service public.",
    "1 / 12", "texte du reportage, photographies (poste, facteur, guichet)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Retour sur l'unité 2 : citez un moyen de transport urbain et une préposition de lieu.")],
      [fp("Répondent."),
       fp("R.A. : le taxi-be, le cyclopousse… ; dans, près de, sur…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Qui a déjà accompagné un parent à la poste ? à la mairie ? au centre de santé ? Qu'y fait-on ? Aujourd'hui, un reportage nous emmène au bureau de poste.")],
      [fp("Partagent leurs expériences.")], "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Compréhension orale : Une matinée au bureau de poste ». Consigne : écouter pour découvrir QUI y travaille et QUELS services il rend.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lecture expressive du reportage. Questions globales : De quel service public s'agit-il ? Qui y travaille ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : le bureau de poste d'Ambositra ; madame Hanta au guichet, monsieur Solo au tri, le facteur.")],
      "Écoute active", "Texte du reportage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relecture. Mots difficiles au tableau : un usager, un mandat, un guichet, un formulaire, trier. Faites déduire le sens par le contexte : « la grand-mère vient chercher un mandat » → de l'argent envoyé par la poste !")],
      [fp("Déduisent le sens des mots."),
       fp("R.A. : usager = personne qui utilise le service ; guichet = la fenêtre où l'on est servi ; formulaire = papier à remplir ; trier = ranger par destination.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Grille des informations essentielles : LIEU / USAGERS / PERSONNEL / MISSIONS. Quels services la poste rend-elle à la population ? Information principale : la poste est un bien commun au service de tous.")],
      [fp("Complètent la grille."),
       fp("R.A. : missions → transporter le courrier, verser les mandats, garder l'épargne ; usagers → grand-mère, commerçant, élèves.")],
      "Travail collectif", "Grille au tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez le reportage en une ou deux phrases avec vos propres mots.")],
      [fp("Résument."),
       pAns("R.A. : Au bureau de poste d'Ambositra, les employés accueillent les usagers, trient le courrier et versent les mandats : la poste rend de grands services à tous.", ["bureau de poste"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel service public le reportage décrit-il ?"),
       fp("2. Cite deux personnes qui y travaillent et leur tâche."),
       fp("3. Cite deux services rendus à la population."),
       fp("4. Que veut dire « usager » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le bureau de poste — 2. madame Hanta au guichet, le facteur qui distribue — 3. transporter le courrier, verser les mandats — 4. la personne qui utilise un service public.", ["bureau de poste", "facteur"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}
function lessonS25() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCOUTER UN REPORTAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    reportagePoste(),
    p("", { after: 80 }),
    sub("Dans un reportage sur un service public, je repère :"),
    p("• le LIEU — où sommes-nous ?"),
    p("• les USAGERS — qui vient utiliser le service ?"),
    p("• le PERSONNEL — qui y travaille, et que fait chacun ?"),
    p("• les MISSIONS — quels services sont rendus à la population ?", { after: 80 }),
    sub("Mes premiers mots de l'unité :"),
    mot("un usager", "la personne qui utilise le service public"),
    mot("le guichet", "la fenêtre où l'on est servi"),
    mot("un formulaire", "le papier à remplir"),
    mot("un mandat", "de l'argent envoyé par la poste"),
    mot("trier le courrier", "ranger les lettres par destination"),
  ];
}

// ---------- S26 — Lexique : les services publics et leurs rôles ----------
function ficheS26() {
  const meta = META("Lexique : les services publics et leurs rôles",
    "À la fin de la séance, l'apprenant nomme les différents services publics et explique leurs rôles dans la vie quotidienne.",
    "2 / 12", "images des services publics, étiquettes métiers et missions");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Qui travaille au bureau de poste, et que fait chacun ?")],
      [fp("Répondent."),
       fp("R.A. : la guichetière, le trieur, le facteur…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu « Où vais-je ? » : « J'ai de la fièvre… » (au centre de santé !) « Je veux une carte d'identité… » « Au feu ! » « On m'a volé mon vélo… » « Je veux apprendre à lire… »")],
      [fp("Devinent le bon service."),
       fp("R.A. : hôpital/CSB, mairie, pompiers, commissariat, école.")],
      "Jeu de devinettes", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les services publics et leurs rôles ». Un service PUBLIC appartient à tous et sert tout le monde — c'est un bien commun !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Tableau à trois colonnes avec images : SERVICE / QUI Y TRAVAILLE ? / SON RÔLE. L'école (le maître → instruire les enfants), l'hôpital ou le CSB (le médecin, l'infirmière → soigner les malades), la mairie (le maire, les employés → délivrer les papiers, organiser le village).")],
      [fp("Observent, complètent avec l'enseignant."),
       fp("R.A. : chaque service a son personnel et sa mission.")],
      "Observation guidée", "Images"),
    stepRow(["4. Analyse"],
      [fp("Suite du tableau : le bureau de poste (le facteur, la guichetière → transporter le courrier, verser les mandats), la banque (le banquier → garder l'argent, prêter), le commissariat (les policiers → protéger les habitants), la caserne des pompiers (les pompiers → éteindre les incendies, secourir). Mots de la vie quotidienne : faire la queue, attendre son tour, un carnet de santé, un acte de naissance, un livret d'épargne.")],
      [fp("Associent services, métiers et missions."),
       fp("R.A. : associations correctes des sept services.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le tableau des sept services publics avec leur rôle, recopié dans le cahier.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez : 1. On déclare une naissance à la … . 2. Les … éteignent les incendies. 3. Le … distribue les lettres. 4. À la …, on garde son argent sur un livret d'épargne.")],
      [fp("Complètent."),
       pAns("R.A. : 1. mairie — 2. pompiers — 3. facteur — 4. banque.", ["mairie", "pompiers", "facteur", "banque"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Associe chaque situation au bon service : une dent qui fait mal / une lettre à envoyer / un incendie / une carte d'identité / un voleur aperçu.")],
      [fp("Associent."),
       pAns("R.A. : centre de santé — bureau de poste — caserne des pompiers — mairie — commissariat.", ["centre de santé", "mairie"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}
function lessonS26() {
  const t = (rows) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: ["LE SERVICE", "QUI Y TRAVAILLE ?", "SON RÔLE"].map(h =>
        cell([p([run(h, { bold: true, color: C.WHITE, size: SZ.FICHE })], { center: true, after: 20 })], { shade: COLOR })) }),
      ...rows.map(r => new TableRow({ children: r.map((x, i) => cell([p([run(x, { size: SZ.FICHE, bold: i === 0, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })])) })),
    ],
  });
  return [
    p([run("LEÇON DU JOUR — SÉANCE 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES SERVICES PUBLICS ET LEURS RÔLES", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    t([
      ["l'école", "le maître, la maîtresse", "instruire les enfants"],
      ["l'hôpital, le CSB", "le médecin, l'infirmière", "soigner les malades"],
      ["la mairie", "le maire, les employés", "délivrer les papiers, organiser le village"],
      ["le bureau de poste", "le facteur, la guichetière", "transporter le courrier, verser les mandats"],
      ["la banque", "le banquier", "garder l'argent, prêter"],
      ["le commissariat", "les policiers", "protéger les habitants"],
      ["la caserne", "les pompiers", "éteindre les incendies, secourir"],
    ]),
    p("", { after: 80 }),
    sub("Les mots de la vie quotidienne :"),
    mot("faire la queue, attendre son tour", "au guichet, chacun son tour !"),
    mot("un acte de naissance", "le papier officiel de la naissance"),
    mot("un carnet de santé", "le carnet des soins et des vaccins"),
    mot("un livret d'épargne", "le carnet où l'on garde son argent"),
    p("", { after: 60 }),
    pr([run("À retenir : ", { bold: true }),
        run("un service public appartient à tous et sert tout le monde : c'est un bien commun que chacun doit respecter.", { italic: true, color: COLOR })]),
  ];
}

// ---------- S27 — Compréhension écrite : la mairie ----------
function ficheS27() {
  const meta = META("Compréhension écrite : « La mairie, la maison de tous »",
    "À la fin de la séance, l'apprenant repère les informations essentielles d'un article descriptif sur un service public : lieu, usagers, missions, fonctionnement.",
    "3 / 12", "texte photocopié ou recopié au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Dictée éclair : le guichet, le facteur, la mairie, un usager.")],
      [fp("Écrivent sur l'ardoise.")],
      "Procédé La Martinière", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Qu'y a-t-il au-dessus de la mairie de notre commune ? Pourquoi dit-on que la mairie est « la maison de tous » ? Vérifions dans l'article !")],
      [fp("Émettent des hypothèses.")], "Brainstorming", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribution du texte. Lecture silencieuse, puis chasse aux informations.")],
      [fp("Lisent silencieusement.")], "Lecture silencieuse", "Texte"),
    stepRow(["3. Observation", "(lecture guidée)"],
      [fp("Questions : De quel service public s'agit-il ? Où se trouve-t-il ? Qui y travaille ? Qui y vient, et pourquoi ? Quels services rend-il à la population ?")],
      [fp("Répondent en citant le texte."),
       fp("R.A. : la mairie, au centre du village ; le maire et les employés ; les habitants pour leurs papiers ; état civil, carte d'identité, grands travaux.")],
      "Questionnement progressif", "Texte"),
    stepRow(["4. Analyse"],
      [fp("C'est un texte descriptif : retrouvez ses preuves (présent de description, indications de lieu : au centre du village, dans la première salle ; groupes nominaux précis : le guichet de l'état civil). Observez aussi ces petites phrases : « un bâtiment QUE l'on reconnaît », « l'employée QUI tient ce guichet », « le commissariat OÙ l'on court » — des phrases reliées ! Nous les étudierons bientôt.")],
      [fp("Relèvent les caractéristiques, observent qui/que/où."),
       fp("R.A. : texte descriptif confirmé ; les petits mots qui/que/où relient les phrases.")],
      "Repérage et annotation", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Information principale : la mairie rend des services essentiels et mérite le respect. Informations secondaires : le drapeau, le puits… Grille LIEU / USAGERS / MISSIONS / FONCTIONNEMENT complétée.")],
      [fp("Distinguent, récapitulent.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("Résumé du texte en deux phrases avec vos propres mots.")],
      [fp("Résument par écrit."),
       pAns("R.A. : La mairie, au centre du village, délivre les papiers des habitants et organise les grands travaux. C'est la maison de tous, que chacun doit respecter.", ["la maison de tous"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que déclare-t-on au guichet de l'état civil ? 2. Qui le maire reçoit-il ? 3. Cite deux autres services publics nommés dans le texte. 4. Relève une indication de lieu.")],
      [fp("Répondent."),
       pAns("R.A. : 1. les naissances — 2. les villageois qui ont un problème — 3. les pompiers, le commissariat — 4. au centre du village (ou : dans la première salle…).", ["les naissances", "au centre du village"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE UN ARTICLE SUR UN SERVICE PUBLIC", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    articleMairie(),
    p("", { after: 80 }),
    sub("Ma grille de lecture :"),
    p("• le LIEU — au centre du village, sur la grande place ;"),
    p("• les USAGERS — les habitants qui viennent pour leurs papiers ;"),
    p("• les MISSIONS — l'état civil, la carte d'identité, les grands travaux ;"),
    p("• le FONCTIONNEMENT — le guichet, les registres, le bureau du maire.", { after: 80 }),
    sub("J'ai remarqué des phrases reliées :"),
    pr([run("« un bâtiment ", { italic: true }), run("que", { bold: true, color: C.RED }),
        run(" l'on reconnaît » — « l'employée ", { italic: true }), run("qui", { bold: true, color: C.RED }),
        run(" tient ce guichet » — « le commissariat ", { italic: true }), run("où", { bold: true, color: C.RED }),
        run(" l'on court »", { italic: true })], { after: 50 }),
    p("Ces petits mots s'appellent les pronoms relatifs — rendez-vous à la séance 30 !"),
  ];
}

// ---------- S28 — Conjugaison : remplir, envoyer, lire ----------
function ficheS28() {
  const meta = META("Conjugaison : remplir, envoyer, lire au présent de l'indicatif",
    "À la fin de la séance, l'apprenant conjugue et emploie les verbes d'action remplir, envoyer et lire au présent de l'indicatif pour décrire les missions des services publics.",
    "4 / 12", "tableaux de conjugaison, ardoises, corpus");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez trois services publics et leur rôle en une phrase chacun.")],
      [fp("Répondent."),
       fp("R.A. : la poste transporte le courrier ; l'école instruit…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Mime du guichet : je REMPLIS un formulaire (geste d'écrire), j'ENVOIE une lettre (geste de poster), je LIS le registre (geste de lire). La classe devine les trois verbes.")],
      [fp("Devinent."),
       fp("R.A. : remplir, envoyer, lire — les verbes d'action du guichet !")],
      "Mime", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Trois verbes d'action au présent : remplir, envoyer, lire ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « La grand-mère remplit le formulaire. Les commerçants envoient des colis. L'employée lit le registre. Nous remplissons nos carnets. J'envoie une carte postale. » Relevez les verbes et leur sujet.")],
      [fp("Relèvent."),
       fp("R.A. : remplit, envoient, lit, remplissons, envoie — tous au présent.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Tableaux : REMPLIR (2e groupe : je remplis, tu remplis, il remplit, nous remplissons, vous remplissez, ils remplissent — le -ISS aux personnes du pluriel !) ; ENVOYER (j'envoie, tu envoies, il envoie, nous envoyons, vous envoyez, ils envoient — le Y devient I sauf avec nous et vous !) ; LIRE (je lis, tu lis, il lit, nous lisons, vous lisez, ils lisent — le S au pluriel).")],
      [fp("Observent les pièges, épellent."),
       fp("R.A. : nous remplissons (ISS) ; j'envoie (pas de s à je !) ; ils lisent.")],
      "Observation et manipulation", "Tableaux"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les trois tableaux + les trois pièges encadrés en rouge.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoise ! 1. nous (remplir) — 2. j'(envoyer) — 3. ils (lire) — 4. vous (envoyer) — 5. elle (remplir).")],
      [fp("Écrivent."),
       pAns("R.A. : 1. nous remplissons — 2. j'envoie — 3. ils lisent — 4. vous envoyez — 5. elle remplit.", ["remplissons", "j'envoie", "lisent", "envoyez"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris trois phrases sur le bureau de poste avec les trois verbes de la leçon.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Les usagers remplissent les formulaires. Le commerçant envoie un colis. La guichetière lit les adresses.", ["remplissent", "envoie", "lit"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  const t = (title, rows) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell([p([run(title, { bold: true, color: C.WHITE, size: SZ.FICHE })], { center: true, after: 20 })], { colSpan: 2, shade: COLOR })] }),
      ...rows.map(r => new TableRow({ children: r.map((x, i) => cell([p([run(x, { size: SZ.FICHE, bold: i === 0, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })])) })),
    ],
  });
  return [
    p([run("LEÇON DU JOUR — SÉANCE 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("REMPLIR, ENVOYER, LIRE AU PRÉSENT", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    t("REMPLIR (2e groupe) — le -ISS- au pluriel !", [
      ["je remplis", "nous remplissons"],
      ["tu remplis", "vous remplissez"],
      ["il, elle remplit", "ils, elles remplissent"],
    ]),
    p("", { after: 60 }),
    t("ENVOYER — le Y devient I (sauf avec nous et vous) !", [
      ["j'envoie", "nous envoyons"],
      ["tu envoies", "vous envoyez"],
      ["il, elle envoie", "ils, elles envoient"],
    ]),
    p("", { after: 60 }),
    t("LIRE — le S au pluriel !", [
      ["je lis", "nous lisons"],
      ["tu lis", "vous lisez"],
      ["il, elle lit", "ils, elles lisent"],
    ]),
    p("", { after: 80 }),
    sub("Au service public, ces verbes travaillent dur :"),
    pr([run("Les usagers ", { size: SZ.BODY }), run("remplissent", { bold: true, color: C.BLUE }),
        run(" les formulaires ; la poste "), run("envoie", { bold: true, color: C.BLUE }),
        run(" les lettres ; l'employée "), run("lit", { bold: true, color: C.BLUE }), run(" les registres.")]),
  ];
}

// ---------- S29 — Le complément circonstanciel de but ----------
function ficheS29() {
  const meta = META("Fonctionnement de la langue : le complément circonstanciel de but",
    "À la fin de la séance, l'apprenant relève les compléments circonstanciels de but, explique leur fonction et les emploie pour exprimer la mission d'un service public.",
    "5 / 12", "corpus, étiquettes");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conjuguez : « nous (remplir) », « ils (envoyer) ».")],
      [fp("Répondent."),
       fp("R.A. : nous remplissons ; ils envoient.")],
      "Travail collectif", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Question surprise : POURQUOI le facteur attache-t-il son sac sur son vélo ? (pour distribuer les lettres !) Pourquoi venez-vous à l'école ? Toutes vos réponses commencent par le même petit mot…")],
      [fp("Répondent."),
       fp("R.A. : pour ! Pour apprendre, pour lire, pour réussir…")],
      "Questionnement", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Le complément circonstanciel de but » — il répond à la question POUR QUOI FAIRE ? DANS QUEL BUT ?")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « Le facteur part pour distribuer les lettres. Les habitants viennent à la mairie pour leurs papiers. On court au commissariat pour signaler un danger. L'école existe afin d'instruire les enfants. » Relevez les groupes qui expriment le but.")],
      [fp("Relèvent."),
       fp("R.A. : pour distribuer les lettres, pour leurs papiers, pour signaler un danger, afin d'instruire les enfants.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Deux fabriques du CC de but : POUR (ou AFIN DE) + verbe à l'infinitif (pour soigner, afin de protéger) ; POUR + nom (pour leurs papiers, pour un mandat). Sa fonction : expliquer la MISSION, l'objectif de l'action. C'est le complément préféré des services publics !")],
      [fp("Construisent des CC de but."),
       fp("R.A. : pour + infinitif ou nom ; afin de + infinitif.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : la question (pour quoi faire ?), les deux fabriques, trois exemples des services publics.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez avec un CC de but : 1. Les pompiers s'entraînent … . 2. La grand-mère va à la poste … . 3. On plante des arbres … (souvenez-vous de l'unité 1 !).")],
      [fp("Complètent."),
       pAns("R.A. (exemples) : 1. pour éteindre les incendies — 2. pour chercher son mandat — 3. pour protéger l'environnement (afin de sauver la forêt).", ["pour éteindre", "pour chercher"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris deux phrases sur deux services publics différents, chacune avec un CC de but (une fois « pour + infinitif », une fois « afin de + infinitif »).")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Le médecin examine les enfants pour protéger leur santé. La mairie répare le puits afin de donner de l'eau propre au village.", ["pour protéger", "afin de donner"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE COMPLÉMENT CIRCONSTANCIEL DE BUT", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Il répond à la question : ", { size: SZ.BODY }),
        run("POUR QUOI FAIRE ? DANS QUEL BUT ?", { bold: true, color: C.RED })], { after: 80 }),
    sub("Les deux fabriques du but :"),
    mot("pour / afin de + infinitif", "Le facteur part pour distribuer les lettres."),
    mot("pour + nom", "Les habitants viennent à la mairie pour leurs papiers."),
    p("", { after: 80 }),
    sub("Le complément préféré des services publics :"),
    p("• L'école existe pour instruire les enfants."),
    p("• Le CSB vaccine afin de protéger la santé de tous."),
    p("• Les policiers patrouillent pour protéger les habitants."),
    p("• On plante des arbres pour sauver la forêt (bravo, unité 1 !).", { after: 80 }),
    pr([run("Astuce : ", { bold: true, color: C.RED }),
        run("le CC de but explique la MISSION d'une action : c'est lui qui répond quand on demande « pourquoi faire ? ».")]),
  ];
}

// ---------- S30 — Les pronoms relatifs qui, que, où ----------
function ficheS30() {
  const meta = META("Fonctionnement de la langue : les pronoms relatifs qui, que, où",
    "À la fin de la séance, l'apprenant repère les pronoms relatifs qui, que, où et transforme deux phrases simples en une phrase complexe pour éviter les répétitions.",
    "6 / 12", "corpus, étiquettes de phrases à relier");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Complète avec un CC de but : « Les pompiers arrivent vite … ».")],
      [fp("Répondent."),
       fp("R.A. : pour éteindre le feu / afin de secourir les habitants.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrases qui bégaient : « Voici le facteur. Le facteur distribue les lettres. » Comment éviter de répéter « le facteur » ? « Voici le facteur QUI distribue les lettres ! » Le bégaiement a disparu !")],
      [fp("Proposent, découvrent."),
       fp("R.A. : on relie les deux phrases avec un petit mot.")],
      "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les pronoms relatifs qui, que, où » — les agrafes de la phrase : elles relient les idées et chassent les répétitions.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus (texte de la mairie) : « l'employée QUI tient ce guichet » — « un bâtiment QUE l'on reconnaît de loin » — « le commissariat OÙ l'on court en cas de danger ». Observez ce que remplace chaque pronom.")],
      [fp("Relèvent, observent."),
       fp("R.A. : qui = l'employée ; que = le bâtiment ; où = le commissariat (un lieu).")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("La règle des trois agrafes : QUI remplace le sujet (l'employée tient le guichet → l'employée QUI tient le guichet) ; QUE remplace le complément (on reconnaît le bâtiment → le bâtiment QUE l'on reconnaît) ; OÙ remplace un lieu (on court au commissariat → le commissariat OÙ l'on court). Entraînement collectif : relier « Voici l'infirmière. L'infirmière vaccine les bébés. » / « C'est la poste. J'envoie mes lettres à la poste. »")],
      [fp("Transforment deux phrases simples en phrase complexe."),
       fp("R.A. : Voici l'infirmière qui vaccine les bébés. C'est la poste où j'envoie mes lettres.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les trois pronoms avec leur rôle + un exemple chacun, encadrés.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Reliez : 1. Voici le maire. Le maire reçoit les villageois. 2. C'est un formulaire. La grand-mère remplit ce formulaire. 3. Voilà l'école. Nous apprenons à lire à l'école.")],
      [fp("Relient."),
       pAns("R.A. : 1. Voici le maire qui reçoit les villageois. 2. C'est un formulaire que la grand-mère remplit. 3. Voilà l'école où nous apprenons à lire.", ["qui reçoit", "que la grand-mère remplit", "où nous apprenons"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris trois phrases sur les services publics : une avec QUI, une avec QUE, une avec OÙ.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Le pompier est un héros qui sauve des vies. La carte d'identité est un papier que la mairie délivre. Le CSB est l'endroit où l'on vaccine les enfants.", ["qui sauve", "que la mairie délivre", "où l'on vaccine"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES PRONOMS RELATIFS : QUI, QUE, OÙ", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    p("Les pronoms relatifs sont les agrafes de la phrase : ils relient deux phrases en une et chassent les répétitions !", { after: 80 }),
    sub("QUI — remplace le sujet :"),
    pr([run("Voici le facteur. Le facteur distribue les lettres. → Voici le facteur ", { size: SZ.BODY }),
        run("qui distribue les lettres", { bold: true, color: C.BLUE }), run(".")], { after: 60 }),
    sub("QUE — remplace le complément :"),
    pr([run("On reconnaît ce bâtiment. → le bâtiment ", { size: SZ.BODY }),
        run("que l'on reconnaît", { bold: true, color: C.BLUE }), run(".")], { after: 60 }),
    sub("OÙ — remplace un lieu :"),
    pr([run("On court au commissariat. → le commissariat ", { size: SZ.BODY }),
        run("où l'on court", { bold: true, color: C.BLUE }), run(" en cas de danger.")], { after: 80 }),
    sub("La phrase qui bégaie, la phrase qui brille :"),
    pr([run("✗ ", { bold: true, color: C.RED }), run("« Voici l'infirmière. L'infirmière vaccine les bébés. »", { italic: true })], { after: 30 }),
    pr([run("✓ ", { bold: true, color: C.GREEN }), run("« Voici l'infirmière "), run("qui", { bold: true, color: C.BLUE }), run(" vaccine les bébés ! »")]),
  ];
}

// ---------- S31 — Production orale ----------
function ficheS31() {
  const meta = META("Production orale : présenter un service public et donner son avis",
    "À la fin de la séance, l'apprenant participe efficacement à un échange oral sur les services publics et présente un service public qu'il connaît, en donnant son avis.",
    "7 / 12", "photographies des services publics, grille d'exposé");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Reliez à l'oral : « Voici le CSB. On soigne les malades au CSB. »")],
      [fp("Répondent."),
       fp("R.A. : Voici le CSB où l'on soigne les malades.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Photo-langage : quatre photos de services publics affichées. Chacun choisit en silence celle qui lui semble la plus utile au village.")],
      [fp("Choisissent.")], "Observation guidée", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Échanger et présenter un service public ». Nouvelles armes du débatteur : je pense que…, je trouve que…, à mon avis… — et les comportements d'or : poser des questions, demander une clarification, admettre ses erreurs, reformuler l'idée d'un camarade.")],
      [fp("Écoutent, répètent les expressions.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation", "(discussion)"],
      [fp("Débat guidé : « Quel service public est le plus utile dans notre vie quotidienne ? » Chaque avis commence par une expression d'opinion et se termine par une raison (avec un CC de but : … pour soigner les malades !).")],
      [fp("Échangent, reformulent les idées des autres."),
       fp("R.A. : À mon avis, le CSB est le plus utile, car il existe pour soigner les malades. — Je trouve que l'école passe en premier, afin d'instruire tous les enfants !")],
      "Discussion", "----"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("Préparation du compte rendu : en binômes, choisir un service public que l'on connaît (visite réelle ou imaginée). Plan : 1. le lieu et le personnel — 2. ce qu'on y fait (verbes d'action !) — 3. son rôle (CC de but) — 4. mon avis. Notes en mots clés.")],
      [fp("Préparent leurs notes.")],
      "Travail collaboratif", "Grille d'exposé"),
    stepRow(["5. Synthèse", "(exposés)"],
      [fp("Passage des binômes (2 minutes). Jeu de rôle bonus : un binôme joue la scène du guichet (l'usager poli et la guichetière). La classe pose des questions et demande des précisions.")],
      [fp("Présentent, jouent, répondent."),
       pAns("R.A. (exemple) : Nous présentons le bureau de poste, qui se trouve près du marché. Les employés pèsent les colis et versent les mandats. La poste existe pour relier les familles. À notre avis, c'est un trésor du village !", ["À notre avis", "pour relier"], { size: SZ.FICHE })],
      "Exposé, jeu de rôle", "----"),
    stepRow(["6. Entraînement"],
      [fp("Tour éclair : chacun donne son avis en une phrase : « Je pense que… parce que… ».")],
      [fp("S'expriment.")],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille orale : ☐ j'ai utilisé une expression d'avis ☐ j'ai expliqué le rôle (but) ☐ j'ai posé une question à un camarade ☐ j'ai parlé clairement.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCHANGER ET DONNER SON AVIS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les expressions pour donner son avis :"),
    mot("Je pense que…", "Je pense que l'école est essentielle."),
    mot("Je trouve que…", "Je trouve que les pompiers sont courageux."),
    mot("À mon avis…", "À mon avis, le CSB rend le plus grand service."),
    p("", { after: 80 }),
    sub("Les comportements d'or de la discussion :"),
    p("• je pose des questions : « Peux-tu préciser ? » ;"),
    p("• je demande une clarification : « Que veux-tu dire par… ? » ;"),
    p("• j'admets mes erreurs : « C'est vrai, je me suis trompé. » ;"),
    p("• je demande l'avis des autres : « Et toi, qu'en penses-tu ? » ;"),
    p("• je reformule : « Si je comprends bien, tu dis que… ».", { after: 80 }),
    sub("Le plan de mon compte rendu :"),
    p("1. Le lieu et le personnel — 2. Ce qu'on y fait — 3. Son rôle (pour… afin de…) — 4. Mon avis !"),
  ];
}

// ---------- S32 — Production écrite 1 : le plan ----------
function ficheS32() {
  const meta = META("Production écrite (1) : préparer mon texte sur un service public",
    "À la fin de la séance, l'apprenant choisit un service public, dégage la structure du modèle et organise ses idées selon un plan simple (présentation, description, rôle du service).",
    "8 / 12", "texte modèle de la mairie, grille de plan");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez une expression pour donner son avis et un comportement d'or de la discussion.")],
      [fp("Répondent."),
       fp("R.A. : à mon avis… ; reformuler, poser des questions…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Annonce du sujet : « Décris un service public, réel ou imaginaire, et explique son rôle. » Aujourd'hui, le plan ; à la prochaine séance, la rédaction !")],
      [fp("Recopient le sujet.")], "Travail collectif", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Objectif : un plan en trois parties — présentation, description, rôle du service.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Retour au modèle « La mairie, la maison de tous » : retrouvez la charpente. Présentation = où ? quoi ? Description = les salles, le personnel, les usagers. Rôle = les services rendus + l'appel au respect.")],
      [fp("Dégagent la structure."),
       fp("R.A. : trois blocs bien visibles dans le modèle.")],
      "Observation guidée", "Texte modèle"),
    stepRow(["4. Analyse"],
      [fp("Chacun choisit son service (le CSB, l'école, la poste, le commissariat… ou un service imaginaire : la bibliothèque volante !). Organisation des idées dans la grille : lieu / personnel / actions (remplir, envoyer, lire, soigner…) / rôle (CC de but) / une phrase avec qui, que ou où.")],
      [fp("Choisissent, organisent leurs idées.")],
      "Organisation des idées", "Grille de plan"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois plans lus. Vérification collective : trois parties ? verbes d'action ? CC de but prévu ? pronom relatif prévu ?")],
      [fp("Présentent, améliorent."),
       pAns("R.A. (exemple de plan) : Présentation : le CSB, près du marché. — Description : la salle d'attente, l'infirmière qui vaccine, le médecin. — Rôle : soigner les malades, protéger la santé ; respect du lieu.", ["CSB", "qui vaccine"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Finalisation du plan : un titre + trois ou quatre mots clés par partie.")],
      [fp("Finalisent.")],
      "Travail individuel", "Grille"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Liste de contrôle : ☐ service choisi ☐ 3 parties ☐ verbes d'action listés ☐ CC de but prévu ☐ pronom relatif prévu.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}
function lessonS32() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE SUR UN SERVICE PUBLIC (1) : LE PLAN", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Décris un service public, réel ou imaginaire, et explique son rôle.", { italic: true })], { after: 80 }),
    sub("Le plan en trois parties :"),
    p("1. PRÉSENTATION — quel service ? où se trouve-t-il ?"),
    p("2. DESCRIPTION — les lieux, le personnel, les usagers, les actions."),
    p("3. RÔLE DU SERVICE — ses missions (pour…, afin de…) et l'appel au respect !", { after: 80 }),
    sub("Ma boîte à outils :"),
    p("• le lexique de l'unité : guichet, usager, formulaire, acte de naissance… ;"),
    p("• les verbes d'action au présent : remplir, envoyer, lire, soigner, protéger ;"),
    p("• le CC de but : pour soigner les malades, afin de protéger la santé ;"),
    p("• les pronoms relatifs : l'infirmière qui vaccine, le guichet que l'on voit, la salle où l'on attend."),
  ];
}

// ---------- S33 — Production écrite 2 : rédaction ----------
function ficheS33() {
  const meta = META("Production écrite (2) : rédiger et enrichir mon texte",
    "À la fin de la séance, l'apprenant rédige un premier jet descriptif sur un service public, l'enrichit avec le vocabulaire spécifique, les verbes d'action et les pronoms relatifs, puis le relit et l'améliore.",
    "9 / 12", "plans de la séance 32, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Relisez votre plan. Les trois parties du texte ?")],
      [fp("Répondent."),
       fp("R.A. : présentation, description, rôle du service.")],
      "Travail collectif", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase d'ouverture offerte : « Au cœur de notre village se trouve …, un lieu que tout le monde connaît. »")],
      [fp("Adaptent la phrase.")], "Écriture guidée", "----"),
    stepRow(["2. Présentation"],
      [fp("Consignes : suivre le plan, une partie = un paragraphe, huit à dix phrases.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse. Je circule : un verbe d'action oublié ? un « nous remplissons » sans -iss- ? J'aide sans écrire à la place !")],
      [fp("Rédigent leur premier jet.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(enrichissement)"],
      [fp("Mission enrichissement : relisez et ajoutez si besoin — UN pronom relatif (qui, que, où), UN CC de but, UN mot précis du lexique. Un texte enrichi est un texte qui brille !")],
      [fp("Enrichissent leur texte.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse", "(amélioration)"],
      [fp("Relecture avec la grille, puis échange de cahiers en binômes : une amélioration proposée chacun.")],
      [fp("Relisent, conseillent, améliorent."),
       pAns("R.A. (exemple de production) : Au cœur de notre village se trouve le CSB, un lieu que tout le monde connaît. Dans la salle d'attente, les mamans patientent avec leurs bébés. L'infirmière, qui porte une blouse blanche, remplit les carnets de santé ; le médecin examine les malades avec douceur. Le CSB existe pour soigner et pour protéger la santé de tous. C'est un bien commun : gardons-le propre et respectons la file d'attente !", ["que tout le monde connaît", "qui porte", "pour soigner"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre avec le titre.")],
      [fp("Recopient au propre.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage. Barème : structure 3 pts, lexique 2 pts, outils de la langue (verbes d'action, CC de but, pronom relatif) 3 pts, correction 2 pts.")],
      [fp("Rendent leur production.")],
      "Travail individuel", "----"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}
function lessonS33() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MON TEXTE SUR UN SERVICE PUBLIC (2) : RÉDIGER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("La mission enrichissement :"),
    p("Un premier jet est une maison en briques ; l'enrichissement, c'est la peinture ! J'ajoute :"),
    p("• UN pronom relatif : « l'infirmière, qui porte une blouse blanche, … » ;"),
    p("• UN CC de but : « … pour protéger la santé de tous » ;"),
    p("• UN mot précis du lexique : le carnet de santé, le guichet, l'usager.", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Mes trois parties : présentation, description, rôle."),
    p("☐ Mes verbes d'action au présent (remplissent, envoie, lit…)."),
    p("☐ Mon CC de but (pour…, afin de…)."),
    p("☐ Mon pronom relatif (qui, que, où)."),
    p("☐ Le lexique des services publics."),
    p("☐ Majuscules, points, virgules."),
  ];
}

// ---------- S34 — Lecture-fluidité ----------
function ficheS34() {
  const meta = META("Lecture-fluidité : prononciation, intonation, pauses",
    "À la fin de la séance, l'apprenant lit à haute voix un texte descriptif sur les services publics avec fluidité, précision et expressivité.",
    "10 / 12", "texte de la mairie, productions des apprenants");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel du code : que signifient / , // et ↗ dans un texte préparé ?")],
      [fp("Répondent."),
       fp("R.A. : petite pause, grande pause, la voix monte.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Virelangue d'échauffement : « Le facteur farceur refuse les affreuses factures. » Trois fois, de plus en plus vite — articulez !")],
      [fp("Répètent en articulant.")], "Jeu d'articulation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Lire un texte sur un service public avec fluidité, précision et expressivité ». Trois outils : la prononciation, l'intonation, les pauses.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Lecture modèle du texte de la mairie. Consigne : marquez les pauses et les groupes de souffle ; repérez où ma voix monte (« Respecter les services publics, c'est se respecter soi-même ! »).")],
      [fp("Annotent pendant l'écoute.")],
      "Lecture modèle", "Texte annoté"),
    stepRow(["4. Analyse"],
      [fp("Entraînement par groupes de phrases : attention à la prononciation des mots longs (com-mis-sa-riat, é-tat ci-vil, re-gistres). Lecture par rangées, puis en binômes.")],
      [fp("S'entraînent, articulent les mots difficiles.")],
      "Lecture répétée", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Lectures individuelles d'un paragraphe en continu. Évaluation par les pairs : fluidité / précision / expressivité.")],
      [fp("Lisent, échangent leurs observations.")],
      "Lecture à haute voix", "Grille simple"),
    stepRow(["6. Entraînement"],
      [fp("Chacun prépare puis présente la lecture expressive de SON texte (séance 33) à son binôme.")],
      [fp("Préparent, présentent, s'auto-évaluent.")],
      "Binômes", "Productions"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Auto-évaluation : ☐ j'ai bien prononcé les mots longs ☐ j'ai respecté les pauses ☐ ma voix a vécu (! et ?) ☐ j'ai lu sans hésiter.")],
      [fp("Cochent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}
function lessonS34() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("BIEN PRONONCER, BIEN LIRE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Mes trois outils de lecteur :"),
    mot("la prononciation", "j'articule chaque syllabe : com-mis-sa-riat, é-tat ci-vil"),
    mot("l'intonation", "ma voix monte aux « ? » et s'enflamme aux « ! »"),
    mot("les pauses", "petit arrêt à la virgule, grand arrêt au point"),
    p("", { after: 80 }),
    sub("Mon virelangue d'échauffement :"),
    pr([run("« Le facteur farceur refuse les affreuses factures. »", { italic: true, bold: true, color: C.BLUE })], { after: 80 }),
    sub("Les mots longs de l'unité — je les découpe :"),
    p("• le com-mis-sa-riat — l'é-tat ci-vil — le for-mu-laire — les re-gistres — la gui-che-tière", { after: 80 }),
    pr([run("La phrase à faire vivre : ", { bold: true }),
        run("« Respecter les services publics, c'est se respecter soi-même ! »", { italic: true, color: C.BLUE })]),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 3 : LES SERVICES PUBLICS (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les services publics et leurs rôles :"),
    p("L'école instruit ; l'hôpital et le CSB soignent ; la mairie délivre les papiers et organise le village ; la poste transporte le courrier et verse les mandats ; la banque garde l'argent ; le commissariat protège ; les pompiers secourent. Un service public est un bien commun !", { after: 80 }),
    sub("2. Les mots de la vie quotidienne :"),
    pr([run("l'usager, le guichet, le formulaire, le mandat, l'acte de naissance, le carnet de santé, le livret d'épargne, faire la queue, attendre son tour.", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("3. Les verbes d'action au présent :"),
    p("remplir (nous remplissons — le -iss- !), envoyer (j'envoie — le y devient i !), lire (ils lisent — le s !).", { after: 80 }),
    sub("4. Le complément circonstanciel de but :"),
    p("Il répond à « pour quoi faire ? » : pour + infinitif ou nom, afin de + infinitif. L'école existe pour instruire les enfants.", { after: 80 }),
    sub("5. Les pronoms relatifs :"),
    p("QUI remplace le sujet (le facteur qui distribue), QUE remplace le complément (le bâtiment que l'on reconnaît), OÙ remplace un lieu (le commissariat où l'on court). Deux phrases simples → une phrase complexe !", { after: 80 }),
    sub("6. Donner son avis :"),
    p("Je pense que…, je trouve que…, à mon avis… — et toujours une raison avec le but : « À mon avis, le CSB est essentiel, car il existe pour protéger la santé. »"),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 3", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire :"),
    p("Associe : 1. le facteur 2. l'infirmière 3. le maire 4. le pompier — a. vaccine les bébés b. éteint l'incendie c. distribue le courrier d. délivre les actes de naissance.", { after: 60 }),
    pAns("Corrigé : 1-c, 2-a, 3-d, 4-b.", ["1-c", "2-a"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Conjugaison :"),
    p("Mets au présent : 1. nous (remplir) les formulaires. 2. vous (envoyer) un colis. 3. elles (lire) les registres. 4. j'(envoyer) une lettre. 5. tu (remplir) ton carnet.", { after: 60 }),
    pAns("Corrigé : 1. remplissons — 2. envoyez — 3. lisent — 4. envoie — 5. remplis.", ["remplissons", "envoyez", "lisent"]),
    p("", { after: 40 }),
    sub("Exercice 3 — Le CC de but :"),
    p("Complète : 1. On va à la poste … . 2. Les policiers patrouillent … . 3. La mairie répare le puits … .", { after: 60 }),
    pAns("Corrigé (exemples) : 1. pour envoyer une lettre — 2. pour protéger les habitants — 3. afin de donner de l'eau au village.", ["pour envoyer", "afin de"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Les pronoms relatifs :"),
    p("Relie en une phrase : 1. Voici le guichet. On achète les timbres au guichet. 2. C'est l'employée. L'employée remplit les registres. 3. Voilà le formulaire. La grand-mère remplit ce formulaire.", { after: 60 }),
    pAns("Corrigé : 1. Voici le guichet où l'on achète les timbres. 2. C'est l'employée qui remplit les registres. 3. Voilà le formulaire que la grand-mère remplit.", ["où l'on achète", "qui remplit", "que la grand-mère"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Décris en quatre phrases le service public de ton choix : présentation (1), description avec un verbe d'action et un pronom relatif (2), rôle avec un CC de but (1).", { after: 60 }),
    pAns("Corrigé (exemple) : Près du marché se trouve le bureau de poste. La guichetière, qui sourit toujours, pèse les colis des usagers. Le facteur lit les adresses et part sur son vélo. La poste existe pour relier toutes les familles de l'île !", ["qui sourit", "pour relier"]),
  ];
}

// ---------- S35 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s35", "SÉANCE 35 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 3 : LES SERVICES PUBLICS", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le test !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Qui fait quoi ? (10 min) :"),
    p("Jeu de mime : un élève mime un métier des services publics (facteur, pompier, infirmière, guichetière, policier, maître) ; la classe devine le métier, le service ET sa mission en une phrase complète.", { after: 60 }),
    pAns("R.A. : C'est le facteur, du bureau de poste, qui distribue les lettres pour relier les familles !", ["facteur", "pour relier"]),
    p("", { after: 40 }),
    sub("Atelier 2 — La chaîne des verbes (10 min) :"),
    p("Remplir, envoyer, lire : conjugaison en chaîne au présent. Gare aux pièges : nous rempliss…, j'envoi…, ils lis… !", { after: 60 }),
    pAns("R.A. : nous remplissons, j'envoie, ils lisent.", ["remplissons", "envoie", "lisent"]),
    p("", { after: 40 }),
    sub("Atelier 3 — L'agrafeuse (10 min) :"),
    p("Au tableau, des paires de phrases qui bégaient. Chaque rangée les agrafe avec qui, que ou où : « Voici l'école. Nous aimons l'école. » / « C'est le CSB. On vaccine au CSB. » / « Voilà le maire. Le maire reçoit les villageois. »", { after: 60 }),
    pAns("R.A. : Voici l'école que nous aimons. C'est le CSB où l'on vaccine. Voilà le maire qui reçoit les villageois.", ["que nous aimons", "où l'on vaccine", "qui reçoit"]),
    p("", { after: 40 }),
    sub("Atelier 4 — Le tribunal des buts (10 min) :"),
    p("Chaque binôme défend un service public : « Il faut garder notre service, pour… afin de… ! » — deux CC de but par plaidoirie, et une expression d'avis.", { after: 60 }),
    sub("Atelier 5 — Lecture éclair (10 min) :"),
    p("Lecture expressive du dernier paragraphe de « La mairie, la maison de tous » : la phrase finale doit soulever la classe !", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 3 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S36 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s36", "SÉANCE 36 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 3 : LES SERVICES PUBLICS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire (4 points) :"),
    p("Complète : 1. À la poste, l'usager attend son tour au … . 2. La grand-mère … un formulaire pour son mandat. 3. On déclare les naissances au guichet de l'… … . 4. Les … éteignent les incendies.", { after: 80 }),
    sub("Exercice 2 — Conjugaison (4 points) :"),
    p("Mets au présent : 1. nous (remplir) — 2. j'(envoyer) — 3. ils (lire) — 4. vous (envoyer).", { after: 80 }),
    sub("Exercice 3 — Le CC de but (4 points) :"),
    p("a) Souligne le CC de but : « Le facteur part tôt pour distribuer le courrier. » b) Complète avec un CC de but : « Les villageois vont à la mairie … » ; « L'infirmière vaccine les bébés … ».", { after: 80 }),
    sub("Exercice 4 — Les pronoms relatifs (4 points) :"),
    p("Relie en une phrase : 1. Voici le facteur. Le facteur distribue les lettres. 2. C'est un papier. La mairie délivre ce papier. 3. Voilà la salle. On attend dans cette salle. 4. Complète librement : « L'école est un lieu … ».", { after: 80 }),
    sub("Exercice 5 — Expression écrite (4 points) :"),
    p("Décris en cinq phrases un service public de ton village : présentation (1), description (2-3 avec un verbe d'action et un pronom relatif), rôle (1 avec un CC de but).", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. guichet — 2. remplit — 3. état civil — 4. pompiers. (1 pt chacun)", ["guichet", "remplit", "état civil", "pompiers"]),
    pAns("Ex.2 : 1. nous remplissons — 2. j'envoie — 3. ils lisent — 4. vous envoyez. (1 pt chacun)", ["remplissons", "j'envoie", "lisent", "envoyez"]),
    pAns("Ex.3 : a) pour distribuer le courrier (2 pts). b) exemples : pour leurs papiers / afin de protéger leur santé (1 pt chacun)", ["pour distribuer le courrier"]),
    pAns("Ex.4 : 1. Voici le facteur qui distribue les lettres. 2. C'est un papier que la mairie délivre. 3. Voilà la salle où l'on attend. 4. exemple : L'école est un lieu où l'on apprend à lire. (1 pt chacun)", ["qui distribue", "que la mairie délivre", "où l'on attend"]),
    pAns("Ex.5 : structure 1,5 pt, outils de la langue 1,5 pt (verbe d'action + pronom relatif + CC de but), correction 1 pt.", ["structure"]),
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
      "Je comprends un reportage ou un article sur un service public.",
      "Je connais les services publics, leur personnel et leurs rôles.",
      "Je conjugue remplir (nous remplissons !), envoyer (j'envoie !) et lire au présent.",
      "J'exprime le but : pour + infinitif, afin de + infinitif, pour + nom.",
      "Je relie mes phrases avec qui, que, où et je chasse les répétitions.",
      "Je donne mon avis : je pense que, je trouve que, à mon avis.",
      "Je présente un service public à l'oral avec un plan.",
      "Je rédige un texte descriptif : présentation, description, rôle du service.",
      "Je lis avec une bonne prononciation, des pauses et de l'expressivité.",
    ], "PROCHAINE ÉTAPE → UNITÉ 4 : LES LOISIRS !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
