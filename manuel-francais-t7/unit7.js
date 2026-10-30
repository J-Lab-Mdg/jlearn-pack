// Français T7 — UNITÉ 7 — L'ENVIRONNEMENT (10 leçons + révision + test) — Séances 73 à 84 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1E8449"; // vert — l'environnement
const SHADE = "D5F5E3";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 7 — L'ENVIRONNEMENT", title, slo,
  values: "respect de la nature, responsabilité, amour du pays", session, materials,
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

// passage de compréhension orale (S73)
function passageAndasibe() {
  return box("PASSAGE D'ÉCOUTE — le guide : « Bienvenue au parc d'Andasibe »", [
    p("« Bonjour à tous, et bienvenue au parc d'Andasibe ! Je m'appelle Hery, je serai votre guide ce matin. Avancez doucement derrière moi, sur le sentier qui s'enfonce dans la forêt humide."),
    p("Écoutez… Ce chant puissant, au-dessus de nos têtes, c'est l'indri, le plus grand lémurien du monde. Il vit ici, et nulle part ailleurs : c'est une espèce endémique de Madagascar. Levez les yeux : à gauche, sur la branche, une famille entière nous observe !"),
    p("Au bord du sentier, vous voyez des orchidées, des fougères géantes et des caméléons qui changent de couleur. Toute cette vie dépend de la forêt. C'est pourquoi, dans le parc, trois règles simples : on ne jette rien, on ne cueille rien, on ne fait pas de feu."),
    p("Cette forêt protège aussi les hommes : elle retient l'eau des pluies et empêche l'érosion des collines. Protéger le parc, c'est protéger nos villages. Allez, suivez-moi : l'indri nous appelle ! »", { after: 40 }),
  ]);
}
// texte de lecture (S75)
function texteGuideVisiteur() {
  return box("TEXTE DE LECTURE — « Le guide du visiteur » (publicité et guide touristique)", [
    pr([run("VENEZ RESPIRER LA FORÊT D'ANDASIBE !", { bold: true, color: COLOR })], { after: 40 }),
    p("À trois heures de route d'Antananarivo, un trésor vous attend : la forêt humide d'Andasibe, le royaume de l'indri. Venez écouter son chant au lever du jour : un souvenir auquel personne n'échappe !"),
    pr([run("Votre visite, pas à pas", { bold: true, color: COLOR })], { after: 40 }),
    p("À l'entrée du parc, l'accueil vous remet un plan. Derrière le bâtiment commence le sentier principal, le long duquel fleurissent les orchidées. Au sommet de la colline, un point de vue domine toute la vallée. Plus loin, au bord du lac, une plate-forme permet d'observer les oiseaux."),
    pr([run("Les règles du parc", { bold: true, color: COLOR })], { after: 40 }),
    p("Restez sur les sentiers. Ne jetez rien, ne cueillez rien, ne nourrissez pas les animaux. Les guides auxquels vous ferez appel connaissent chaque arbre : faites-leur confiance !"),
    p("Andasibe vous attend. La forêt dont Madagascar est fier n'existe nulle part ailleurs : venez, regardez, protégez.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 7 — L'ENVIRONNEMENT", COLOR, "unit7"),
    p("", { after: 100 }),
    p([run("Protéger la forêt, c'est protéger nos villages.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre la visite guidée d'un parc naturel ;"),
    p("• nommer les mots de l'environnement et les gestes écologiques ;"),
    p("• lire une publicité et un guide touristique ;"),
    p("• situer avec les indicateurs spatiaux ;"),
    p("• employer les pronoms relatifs composés : lequel, laquelle, auquel, duquel… ;"),
    p("• créer une publicité orale pour protéger la nature ;"),
    p("• rédiger un dépliant écologique ;"),
    p("• lire un guide touristique à haute voix.", { after: 120 }),
    pr([run("Types de texte de l'unité : ", { bold: true }),
        run("le texte INJONCTIF et PUBLICITAIRE", { bold: true, color: COLOR }),
        run(" — convaincre, guider, faire agir.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("respect de la nature, responsabilité envers les générations futures, amour du pays.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S73 — Compréhension orale ----------
function ficheS73() {
  const meta = META("Compréhension orale : le guide « Bienvenue au parc d'Andasibe »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'une visite guidée : lieux, espèces, règles du parc.",
    "1 / 12", "texte du passage, photographies (indri, forêt, caméléon), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 6 : complétez : « la pirogue … la voile est rapiécée », « le port … je suis né ».")],
      [fp("Répondent."),
       fp("R.A. : dont ; où.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Affichez les photographies : un indri, la forêt humide, un caméléon. Demandez : qui a déjà visité un parc naturel ? Que fait un guide ?")],
      [fp("Observent, répondent."),
       fp("R.A. : il montre le chemin, explique, raconte les animaux…")],
      "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : la visite guidée du parc d'Andasibe. » Consigne : repérer les lieux, les espèces et les règles du parc.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage avec le ton enthousiaste du guide. Questions globales : qui parle ? Où sommes-nous ? Quel animal entend-on ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : Hery, un guide ; au parc d'Andasibe ; l'indri, le plus grand lémurien du monde.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Tableau à trois colonnes : les espèces (indri, orchidées, fougères, caméléons) ; les règles (ne rien jeter, ne rien cueillir, pas de feu) ; les services de la forêt (elle retient l'eau, empêche l'érosion). Expliquez « espèce endémique » : qui vit là et nulle part ailleurs.")],
      [fp("Remplissent les colonnes."),
       fp("R.A. : l'indri est endémique : il n'existe qu'à Madagascar.")],
      "Questionnement progressif", "Tableau à colonnes"),
    stepRow(["5. Synthèse"],
      [fp("Faites expliquer : « Protéger le parc, c'est protéger nos villages. » Faites remarquer les indications du guide : derrière moi, à gauche, au bord du sentier, au-dessus de nos têtes.")],
      [fp("Expliquent, relèvent."),
       fp("R.A. : la forêt retient l'eau et protège les collines ; le guide situe tout dans l'espace.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : redites les trois règles du parc, puis une raison de les respecter.")],
      [fp("Reformulent."),
       pAns("R.A. : on ne jette rien, on ne cueille rien, on ne fait pas de feu — parce que toute la vie de la forêt en dépend.", ["règles"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Qui est Hery et que fait-il ?"),
       fp("2. Pourquoi dit-on que l'indri est une espèce endémique ?"),
       fp("3. Cite les trois règles du parc."),
       fp("4. Comment la forêt protège-t-elle les villages ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le guide du parc — 2. il vit à Madagascar et nulle part ailleurs — 3. ne rien jeter, ne rien cueillir, pas de feu — 4. elle retient l'eau des pluies et empêche l'érosion.", ["endémique"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(73, TOTAL, meta, rows, "s73", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS73() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 73", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("COMPRENDRE UNE VISITE GUIDÉE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageAndasibe(),
    p("", { after: 80 }),
    sub("1. Le guide organise sa visite"),
    exLine([run("Il accueille", { bold: true, color: C.SALMON, hl: true }), run(" : « Bonjour à tous, et bienvenue ! »")], "il se présente et met à l'aise"),
    exLine([run("Il situe", { bold: true, color: C.SALMON, hl: true }), run(" : derrière moi, à gauche, au bord du sentier, au-dessus de nos têtes.")],
      "les visiteurs savent toujours où regarder"),
    exLine([run("Il explique et fait agir", { bold: true, color: C.SALMON, hl: true }), run(" : les trois règles du parc.")],
      "on ne jette rien, on ne cueille rien, on ne fait pas de feu", { after: 80 }),
    sub("2. Vocabulaire — mes premiers mots de la nature"),
    mot("une espèce endémique", "qui vit à Madagascar et nulle part ailleurs : l'indri, par exemple"),
    mot("la forêt humide", "la grande forêt de l'Est, toujours verte et pleine de vie"),
    mot("l'érosion", "la terre des collines que l'eau emporte quand rien ne la retient"),
    p("", { after: 40 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Complète : « Protéger le parc, c'est protéger ………. »"),
    p("2. Relève deux expressions du guide qui situent dans l'espace.", { after: 60 }),
  ];
}

// ---------- S74 — Lexique ----------
function ficheS74() {
  const meta = META("Lexique : protéger l'environnement ; les gestes écologiques",
    "À la fin de la séance, l'apprenant emploie les mots de l'environnement : menaces, protections, gestes écologiques du quotidien.",
    "2 / 12", "étiquettes de mots, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : que veut dire « espèce endémique » ? Citez-en une.")],
      [fp("Répondent."),
       fp("R.A. : qui ne vit qu'à Madagascar ; l'indri.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : qu'est-ce qui abîme la nature autour de nous ? Notez tout au tableau.")],
      [fp("Citent."),
       fp("R.A. : les feux, les déchets, la coupe des arbres…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : protéger l'environnement — les menaces, les protections, les gestes de chacun. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Deux colonnes au tableau. Les menaces : la déforestation, les feux de brousse, l'érosion, la pollution, les déchets. Les protections : le reboisement, les parcs nationaux, le tri des déchets, les pépinières. Faites associer chaque menace à sa protection.")],
      [fp("Classent, associent."),
       fp("R.A. : déforestation → reboisement ; déchets → tri ; espèces menacées → parcs.")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Les gestes écologiques du quotidien : je jette mes déchets à la poubelle, j'économise l'eau, je plante un arbre chaque année, je protège les jeunes pousses, je n'allume jamais de feu près de la forêt. Famille de mots : reboiser, le reboisement, un arbre reboisé.")],
      [fp("Notent, complètent la famille de mots."),
       fp("R.A. : déboiser = couper ; reboiser = replanter.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les deux colonnes (menaces / protections) et cinq gestes écologiques.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « La terre que l'eau emporte ! » « Replanter des arbres ! » « Le contraire de reboiser ! » Puis une phrase avec « trier ses déchets ».")],
      [fp("Écrivent, rédigent."),
       pAns("R.A. : l'érosion — le reboisement — déboiser ; exemple : À la maison, nous trions nos déchets chaque soir.", ["trions"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe : le reboisement, les feux de brousse, le tri des déchets, l'érosion."),
       fp("2. Associe chaque menace à sa protection."),
       fp("3. Cite trois gestes écologiques que tu peux faire cette semaine."),
       fp("4. Emploie « espèce endémique » dans une phrase.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. protection — menace — protection — menace — 2. associations correctes — 3. jeter à la poubelle, économiser l'eau, planter un arbre — 4. exemple : Le caméléon est une espèce endémique que le monde nous envie.", ["endémique"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(74, TOTAL, meta, rows, "s74", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS74() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 74", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("PROTÉGER L'ENVIRONNEMENT : LES MOTS ET LES GESTES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Vocabulaire — les menaces"),
    mot("la déforestation", "la forêt que l'on coupe sans replanter"),
    mot("les feux de brousse", "les feux qui dévorent collines et forêts"),
    mot("l'érosion", "la terre nue que l'eau des pluies emporte"),
    mot("la pollution", "les déchets et les fumées qui salissent l'eau, l'air et la terre"),
    p("", { after: 60 }),
    sub("2. Vocabulaire — les protections"),
    mot("le reboisement", "replanter des arbres là où on a coupé"),
    mot("le parc national", "un espace protégé où la nature est reine : Andasibe, Isalo…"),
    mot("le tri des déchets", "séparer pour jeter proprement ou réutiliser"),
    mot("la pépinière", "le jardin où grandissent les jeunes arbres avant d'être plantés"),
    p("", { after: 60 }),
    sub("3. Mes gestes écologiques de la semaine"),
    exLine([run("Je jette mes déchets "), run("à la poubelle", { bold: true, color: C.SALMON, hl: true }), run(".")], "jamais par terre, jamais dans la rivière"),
    exLine([run("J'", { }), run("économise l'eau", { bold: true, color: C.SALMON, hl: true }), run(" et je ferme le robinet.")], null),
    exLine([run("Je "), run("plante un arbre", { bold: true, color: C.SALMON, hl: true }), run(" chaque année et je protège les jeunes pousses.")],
      "un arbre planté aujourd'hui = de l'ombre et de l'eau pour demain", { after: 80 }),
    sub("4. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« protéger l'environnement »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« protéger à l'environnement »   "), run("[protéger est direct : on protège quelque chose]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — menace ou protection ?"),
    p("Classe puis associe : la déforestation — le tri des déchets — l'érosion — le reboisement — la pollution — le parc national.", { after: 60 }),
  ];
}

// ---------- S75 — Compréhension écrite ----------
function ficheS75() {
  const meta = META("Compréhension écrite : « Le guide du visiteur » — publicité et guide touristique",
    "À la fin de la séance, l'apprenant lit un guide touristique, repère ses parties (accroche, itinéraire, règles) et les procédés de la publicité.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez deux menaces et leurs protections.")],
      [fp("Répondent."),
       fp("R.A. : déforestation → reboisement ; déchets → tri.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : avez-vous déjà vu une affiche ou un dépliant qui invite à visiter un lieu ? Comment attire-t-il l'œil ?")],
      [fp("Répondent."),
       fp("R.A. : grandes lettres, belles photos, phrases courtes…")],
      "Échange oral", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : Le guide du visiteur — moitié publicité, moitié guide. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : que veut ce texte ? Quelles sont ses parties (titres en couleur) ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : il veut faire venir les visiteurs ; accroche, itinéraire, règles, phrase finale.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites relever les procédés publicitaires : l'impératif (venez, restez, faites-leur confiance), les points d'exclamation, les mots qui font rêver (trésor, royaume). Puis le guide pratique : les lieux dans l'ordre (entrée → sentier → sommet → lac) et les indications spatiales.")],
      [fp("Relèvent, classent."),
       fp("R.A. : la publicité fait rêver ET le guide renseigne précisément.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : un texte publicitaire veut faire agir : il interpelle (impératif), il séduit (mots qui font rêver), il rassure (renseignements précis). Faites expliquer la devise finale : « venez, regardez, protégez ».")],
      [fp("Formulent, expliquent."),
       fp("R.A. : trois impératifs qui résument la visite idéale.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez trois impératifs et deux mots qui font rêver.")],
      [fp("Relèvent, présentent."),
       pAns("R.A. : venez, restez, faites — trésor, royaume.", ["impératifs"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Que veut obtenir ce texte ?"),
       fp("2. Cite les quatre étapes de la visite, dans l'ordre."),
       fp("3. Relève une règle du parc."),
       fp("4. Pourquoi la phrase finale est-elle efficace ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. faire venir des visiteurs au parc — 2. entrée → sentier → sommet → lac — 3. restez sur les sentiers / ne jetez rien — 4. trois impératifs courts, faciles à retenir.", ["impératifs"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(75, TOTAL, meta, rows, "s75", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS75() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 75", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UNE PUBLICITÉ ET UN GUIDE TOURISTIQUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteGuideVisiteur(),
    p("", { after: 80 }),
    sub("1. Les armes de la publicité"),
    exLine([run("L'impératif", { bold: true, color: C.SALMON, hl: true }), run(" interpelle : Venez ! Restez ! Protégez !")], "le texte te parle directement"),
    exLine([run("Les mots qui font rêver", { bold: true, color: C.SALMON, hl: true }), run(" : un trésor, le royaume de l'indri.")], "la forêt devient un pays de conte"),
    exLine([run("Les points d'exclamation", { bold: true, color: C.SALMON, hl: true }), run(" donnent l'enthousiasme.")], null, { after: 80 }),
    sub("2. Le guide renseigne précisément"),
    exLine([run("Les étapes dans l'ordre : "), run("l'entrée → le sentier → le sommet → le lac", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "le visiteur sait toujours où il est"),
    exLine([run("Les règles claires : "), run("restez sur les sentiers, ne jetez rien", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "un bon guide protège aussi le lieu qu'il fait aimer", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Encadre trois impératifs. — 2. Souligne deux mots qui font rêver. — 3. Numérote les quatre étapes de la visite.", { after: 60 }),
  ];
}

// ---------- S76 — Grammaire : les indicateurs spatiaux ----------
function ficheS76() {
  const meta = META("Grammaire : les indicateurs spatiaux",
    "À la fin de la séance, l'apprenant situe des lieux et des objets avec les indicateurs spatiaux et organise une description dans l'espace.",
    "4 / 12", "corpus de phrases, plan du parc dessiné au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez trois armes de la publicité.")],
      [fp("Répondent."),
       fp("R.A. : l'impératif, les mots qui font rêver, les points d'exclamation.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Dessinez le plan du parc au tableau (entrée, sentier, colline, lac). Demandez : où est le lac ? Où est le point de vue ?")],
      [fp("Situent."),
       fp("R.A. : au bord du sentier, au sommet de la colline…")],
      "Observation guidée", "Plan au tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les indicateurs spatiaux — les mots qui situent dans l'espace. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus tiré des textes : derrière le bâtiment, au bord du lac, au sommet de la colline, au-dessus de nos têtes, à gauche, le long du sentier, plus loin. Faites classer : position (devant, derrière, sur, sous, entre), proximité (près de, au bord de, à côté de), hauteur (au sommet de, au-dessus de, au-dessous de), direction (vers, à gauche, à droite, tout droit).")],
      [fp("Relèvent, classent."),
       fp("R.A. : quatre familles d'indicateurs.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Montrez le rôle dans la description : les indicateurs guident l'œil du lecteur, comme la caméra de l'unité 6. Faites décrire le plan du parc en enchaînant : à l'entrée… derrière… le long du… au sommet…")],
      [fp("Décrivent le plan en chaîne."),
       fp("R.A. : la description devient un itinéraire clair.")],
      "Questionnement", "Plan au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : les quatre familles d'indicateurs spatiaux avec deux exemples chacune.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : complétez. « … la colline, un point de vue domine la vallée. » — « Les orchidées fleurissent … du sentier. » — « … nos têtes, l'indri chante. »")],
      [fp("Complètent."),
       pAns("R.A. : Au sommet de — le long (au bord) — Au-dessus de.", ["Au sommet"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Relève trois indicateurs spatiaux dans « Le guide du visiteur »."),
       fp("2. Classe-les dans leur famille."),
       fp("3. Décris le chemin de ta maison à l'école avec quatre indicateurs spatiaux.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1-2. derrière (position), au sommet de (hauteur), au bord de (proximité) — 3. production libre avec quatre indicateurs.", ["indicateurs"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(76, TOTAL, meta, rows, "s76", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS76() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 76", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES INDICATEURS SPATIAUX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Quatre familles pour situer"),
    exTitre(),
    exLine([run("La position : "), run("devant, derrière, sur, sous, entre", { bold: true, color: C.SALMON, hl: true }), run(" — Derrière le bâtiment commence le sentier.")], null),
    exLine([run("La proximité : "), run("près de, au bord de, à côté de", { bold: true, color: C.SALMON, hl: true }), run(" — Au bord du lac, une plate-forme.")], null),
    exLine([run("La hauteur : "), run("au sommet de, au-dessus de, au-dessous de", { bold: true, color: C.SALMON, hl: true }), run(" — Au-dessus de nos têtes, l'indri chante.")], null),
    exLine([run("La direction : "), run("vers, à gauche, à droite, tout droit, le long de", { bold: true, color: C.SALMON, hl: true }), run(" — Le long du sentier fleurissent les orchidées.")], null, { after: 80 }),
    sub("2. Les indicateurs guident l'œil du lecteur"),
    exLine([run("À l'entrée", { bold: true, color: C.SALMON, hl: true }), run(", on reçoit le plan ; "), run("derrière", { bold: true, color: C.SALMON, hl: true }), run(" le bâtiment, le sentier ; "), run("au sommet", { bold: true, color: C.SALMON, hl: true }), run(", le point de vue ; "), run("plus loin", { bold: true, color: C.SALMON, hl: true }), run(", le lac.")],
      "enchaînés, ils transforment la description en itinéraire — comme la caméra de l'unité 6", { after: 80 }),
    sub("Exercice — complète avec un indicateur spatial :"),
    p("1. ……… la colline, un point de vue domine la vallée. — 2. Les orchidées fleurissent ……… du sentier. — 3. ……… nos têtes, l'indri chante. — 4. Décris le chemin de ta maison à l'école avec quatre indicateurs.", { after: 60 }),
  ];
}

// ---------- S77 — Grammaire : relatifs composés (1) ----------
function ficheS77() {
  const meta = META("Grammaire : les pronoms relatifs composés (1) — lequel, laquelle, lesquels, lesquelles",
    "À la fin de la séance, l'apprenant emploie lequel, laquelle, lesquels, lesquelles après une préposition, en accordant avec le nom remplacé.",
    "5 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : complétez avec un relatif simple : « la forêt … protège les villages », « le parc … nous visitons ».")],
      [fp("Répondent."),
       fp("R.A. : qui ; que.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Voici la plate-forme. On observe les oiseaux depuis cette plate-forme. » Essayez qui/que : cela ne marche pas ! Pourquoi ?")],
      [fp("Essaient, constatent."),
       fp("R.A. : il y a une préposition (depuis) : il faut un autre relatif.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les pronoms relatifs composés — lequel, laquelle, lesquels, lesquelles. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : la plate-forme depuis LAQUELLE on observe les oiseaux — le sentier sur LEQUEL nous marchons — les règles sans LESQUELLES le parc mourrait — les arbres entre LESQUELS passe le sentier. Faites observer : préposition + relatif composé, accordé avec le nom.")],
      [fp("Observent, dégagent la règle."),
       fp("R.A. : lequel (masc. sing.), laquelle (fém. sing.), lesquels, lesquelles.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Méthode : 1. je repère la préposition (sur, dans, depuis, avec, sans, entre, pour) ; 2. je cherche le genre et le nombre du nom ; 3. j'accorde. La forêt dans … vivent les indris → fém. sing. → dans laquelle.")],
      [fp("Appliquent la méthode."),
       fp("R.A. : le lac au bord duquel… viendra à la prochaine séance ; aujourd'hui : préposition simple + lequel.")],
      "Méthode guidée", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le tableau des quatre formes et la méthode en trois pas.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : complétez. « le sentier sur … nous marchons » — « la pépinière dans … grandissent les plants » — « les collines vers … montent les nuages ».")],
      [fp("Complètent, accordent."),
       pAns("R.A. : lequel — laquelle — lesquelles.", ["laquelle"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Complète : « la plate-forme depuis … on observe les oiseaux »."),
       fp("2. « les règles sans … le parc mourrait »."),
       fp("3. Relie : « Voici le sentier. Les orchidées fleurissent le long de ce sentier. » (aide : le long duquel viendra demain ; utilise « sur lequel » avec une autre idée)"),
       fp("4. Pourquoi écrit-on « laquelle » et non « lequel » dans la phrase 1 ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. laquelle — 2. lesquelles — 3. exemple : Voici le sentier sur lequel fleurissent les orchidées. — 4. plate-forme est féminin singulier.", ["laquelle"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(77, TOTAL, meta, rows, "s77", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS77() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 77", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES RELATIFS COMPOSÉS (1) : LEQUEL, LAQUELLE…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Quand qui et que ne suffisent plus"),
    pr([run("Voici la plate-forme. On observe les oiseaux "), run("depuis", { bold: true }), run(" cette plate-forme.  →  la plate-forme "), run("depuis laquelle", { bold: true, color: C.SALMON, hl: true }), run(" on observe les oiseaux.")], { after: 60 }),
    exLine([run("Après une "), run("préposition", { bold: true, color: C.SALMON, hl: true }), run(" (sur, dans, depuis, avec, sans, entre, pour), j'emploie un relatif composé.")],
      "qui et que ne se construisent pas après une préposition de lieu ou de manière", { after: 80 }),
    sub("2. Quatre formes, un accord"),
    exLine([run("LEQUEL", { bold: true, color: C.SALMON, hl: true }), run(" : le sentier "), run("sur lequel", { bold: true }), run(" nous marchons.")], "masculin singulier"),
    exLine([run("LAQUELLE", { bold: true, color: C.SALMON, hl: true }), run(" : la forêt "), run("dans laquelle", { bold: true }), run(" vivent les indris.")], "féminin singulier"),
    exLine([run("LESQUELS", { bold: true, color: C.SALMON, hl: true }), run(" : les arbres "), run("entre lesquels", { bold: true }), run(" passe le sentier.")], "masculin pluriel"),
    exLine([run("LESQUELLES", { bold: true, color: C.SALMON, hl: true }), run(" : les règles "), run("sans lesquelles", { bold: true }), run(" le parc mourrait.")], "féminin pluriel", { after: 80 }),
    sub("3. Ma méthode en trois pas"),
    exLine([run("1. Je repère la préposition. 2. Je cherche le genre et le nombre du nom. 3. J'accorde.")],
      "la pépinière dans … → féminin singulier → dans laquelle", { after: 80 }),
    sub("Exercice — complète :"),
    p("1. le sentier sur ……… nous marchons — 2. la pépinière dans ……… grandissent les plants — 3. les collines vers ……… montent les nuages — 4. les règles sans ……… rien ne tient.", { after: 60 }),
  ];
}

// ---------- S78 — Grammaire : relatifs composés (2) ----------
function ficheS78() {
  const meta = META("Grammaire : les pronoms relatifs composés (2) — auquel, duquel…",
    "À la fin de la séance, l'apprenant emploie les formes contractées auquel, auxquels, auxquelles, duquel, desquels, desquelles.",
    "6 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : complétez : « la forêt dans … », « les arbres entre … ».")],
      [fp("Répondent."),
       fp("R.A. : laquelle ; lesquels.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « à + lequel » et « de + lequel ». Rappelez : à + le = au, de + le = du. Que va-t-il se passer ici ?")],
      [fp("Devinent."),
       fp("R.A. : les mots se contractent : auquel, duquel.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les relatifs composés contractés — auquel, duquel et leur famille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : le souvenir AUQUEL personne n'échappe — les guides AUXQUELS vous ferez appel — le sentier le long DUQUEL fleurissent les orchidées — les arbres AUXQUELS nous tenons. Faites construire le tableau : à + lequel = auquel ; à + lesquels = auxquels ; à + lesquelles = auxquelles ; de + lequel = duquel ; etc. Attention : à laquelle et de laquelle ne se contractent PAS.")],
      [fp("Construisent le tableau."),
       fp("R.A. : seules les formes avec le/les se contractent, comme au et du.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Montrez les emplois : après les verbes avec à (tenir à, penser à, faire appel à) → auquel… ; après les locutions avec de (au bord de, le long de, à côté de, au sommet de) → duquel… Le lac au bord DUQUEL on observe les oiseaux.")],
      [fp("Appliquent, construisent des exemples."),
       fp("R.A. : les arbres auxquels nous tenons ; la colline au sommet de laquelle…")],
      "Méthode guidée", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le tableau des contractions + deux exemples types (verbe avec à, locution avec de).")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : complétez. « le projet … je pense » — « les guides … nous faisons appel » — « le lac au bord … nous campons ».")],
      [fp("Complètent."),
       pAns("R.A. : auquel — auxquels — duquel.", ["auquel"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Contracte : à + lesquels ; de + lesquelles ; à + laquelle."),
       fp("2. Complète : « un souvenir … personne n'échappe »."),
       fp("3. Complète : « la rivière au bord … nous plantons des arbres »."),
       fp("4. Construis une phrase avec « auxquelles ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. auxquels, desquelles, à laquelle (pas de contraction) — 2. auquel — 3. de laquelle — 4. exemple : Les règles auxquelles nous obéissons protègent le parc.", ["auxquelles"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(78, TOTAL, meta, rows, "s78", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS78() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 78", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES RELATIFS COMPOSÉS (2) : AUQUEL, DUQUEL…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. La contraction, comme au et du"),
    exLine([run("à + lequel = "), run("auquel", { bold: true, color: C.SALMON, hl: true }), run("   •   à + lesquels = "), run("auxquels", { bold: true, color: C.SALMON, hl: true }), run("   •   à + lesquelles = "), run("auxquelles", { bold: true, color: C.SALMON, hl: true })], null),
    exLine([run("de + lequel = "), run("duquel", { bold: true, color: C.SALMON, hl: true }), run("   •   de + lesquels = "), run("desquels", { bold: true, color: C.SALMON, hl: true }), run("   •   de + lesquelles = "), run("desquelles", { bold: true, color: C.SALMON, hl: true })], null),
    exLine([run("MAIS : "), run("à laquelle, de laquelle", { bold: true, color: C.SALMON, hl: true }), run(" ne se contractent pas.")],
      "comme « à la » et « de la » : le féminin singulier reste entier", { after: 80 }),
    sub("2. Quand les employer ?"),
    exLine([run("Après un verbe avec à", { bold: true, color: C.SALMON, hl: true }), run(" (tenir à, penser à, faire appel à) : les arbres "), run("auxquels", { bold: true }), run(" nous tenons.")], null),
    exLine([run("Après une locution avec de", { bold: true, color: C.SALMON, hl: true }), run(" (au bord de, le long de, au sommet de) : le lac au bord "), run("duquel", { bold: true }), run(" on campe.")],
      "la colline au sommet de laquelle… : féminin, pas de contraction", { after: 80 }),
    sub("3. Deux phrases modèles à retenir"),
    exLine([run("Un souvenir "), run("auquel", { bold: true, color: C.SALMON, hl: true }), run(" personne n'échappe.")], "échapper À"),
    exLine([run("Le sentier le long "), run("duquel", { bold: true, color: C.SALMON, hl: true }), run(" fleurissent les orchidées.")], "le long DE", { after: 80 }),
    sub("Exercice — complète :"),
    p("1. le projet ……… je pense — 2. les guides ……… nous faisons appel — 3. le lac au bord ……… nous campons — 4. la rivière au bord ……… nous plantons des arbres.", { after: 60 }),
  ];
}

// ---------- S79 — Production orale ----------
function ficheS79() {
  const meta = META("Production orale : une publicité pour protéger la nature",
    "À la fin de la séance, l'apprenant présente une courte publicité orale : slogan, impératifs, arguments, enthousiasme.",
    "7 / 12", "plan au tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez les armes de la publicité vues à la séance 75.")],
      [fp("Répondent."),
       fp("R.A. : impératif, mots qui font rêver, exclamations.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lancez : la radio du village vous offre trente secondes pour défendre la nature. Que dites-vous ? Premières idées au tableau.")],
      [fp("Proposent des idées.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : une publicité de trente secondes pour protéger la nature. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Structurez la publicité : 1. un slogan court et frappant ; 2. un argument (pourquoi protéger) ; 3. deux gestes à l'impératif ; 4. le slogan répété. Modèle : « Un arbre planté, un village sauvé ! »")],
      [fp("Notent la structure.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("En binômes : choisir une cause (reboisement, propreté, feux de brousse, protection des lémuriens) et rédiger la publicité : slogan + argument + deux impératifs.")],
      [fp("Préparent leur publicité.")],
      "Binômes", "Brouillons"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Chaque binôme joue sa publicité. Grille d'écoute : slogan frappant ? impératifs ? enthousiasme ?")],
      [fp("Jouent, évaluent."),
       pAns("R.A. : Un arbre planté, un village sauvé ! La forêt retient l'eau de nos rizières. Plantez un arbre chaque année ! Protégez les jeunes pousses ! Un arbre planté, un village sauvé !", ["slogan"], { size: SZ.FICHE })],
      "Jeux de rôles", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : raccourcissez les slogans trop longs ; remplacez « il faut » par un impératif direct.")],
      [fp("Améliorent leur publicité.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. slogan court et frappant — 2. un argument clair — 3. deux impératifs — 4. voix enthousiaste.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(79, TOTAL, meta, rows, "s79", "PRODUCTION ORALE", COLOR);
}
function lessonS79() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 79", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("MA PUBLICITÉ POUR PROTÉGER LA NATURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. La recette des trente secondes"),
    exLine([run("Un slogan", { bold: true, color: C.SALMON, hl: true }), run(" court et frappant : « Un arbre planté, un village sauvé ! »")],
      "il doit rester dans l'oreille"),
    exLine([run("Un argument", { bold: true, color: C.SALMON, hl: true }), run(" : la forêt retient l'eau de nos rizières.")], "pourquoi agir : une raison vraie"),
    exLine([run("Deux gestes à l'impératif", { bold: true, color: C.SALMON, hl: true }), run(" : Plantez un arbre ! Protégez les jeunes pousses !")], null),
    exLine([run("Le slogan répété", { bold: true, color: C.SALMON, hl: true }), run(" pour finir.")], "la répétition grave le message", { after: 80 }),
    sub("2. Les pièges à éviter"),
    exLine([run("Le slogan trop long s'oublie.")], "six à huit mots suffisent"),
    exLine([run("« Il faut protéger… » est mou : préfère "), run("l'impératif direct", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "Protégez ! Plantez ! Triez ! — la publicité te parle, à TOI", { after: 80 }),
    sub("Exercice — ta publicité :"),
    p("Choisis ta cause (reboisement, propreté, feux de brousse, lémuriens). Écris : un slogan, un argument, deux impératifs — puis répète ton slogan. Entraîne-toi à la dire avec enthousiasme en trente secondes.", { after: 60 }),
  ];
}

// ---------- S80 — Production écrite (1) ----------
function ficheS80() {
  const meta = META("Production écrite (1) : le dépliant écologique — les idées et le plan",
    "À la fin de la séance, l'apprenant construit le plan d'un dépliant écologique : titre, slogan, arguments, gestes, devise finale.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelle est la recette de la publicité de trente secondes ?")],
      [fp("Répondent."),
       fp("R.A. : slogan, argument, impératifs, slogan répété.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Montrez la structure du « Guide du visiteur » : accroche, parties titrées, règles, devise finale. Annoncez : nous ferons pareil pour notre village ou notre école.")],
      [fp("Observent la structure modèle.")],
      "Observation guidée", "Texte de la séance 75"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : un dépliant écologique. Aujourd'hui : les idées et le plan. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Construisez le plan type au tableau : 1. le titre et le slogan ; 2. le constat (une menace locale) ; 3. trois gestes à l'impératif ; 4. la devise finale. Exemple collectif : « Notre école propre ! »")],
      [fp("Participent à l'exemple collectif."),
       fp("R.A. : constat : la cour est salie par les papiers ; gestes : jette, trie, balaie…")],
      "Exemple collectif", "Tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit SA cause (école propre, reboisement de la colline, protection de la rivière…) et remplit son plan : titre, slogan, constat, trois gestes, devise.")],
      [fp("Remplissent leur plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques plans lus. La classe vérifie : le slogan est-il court ? les gestes sont-ils à l'impératif ? le constat est-il local et vrai ?")],
      [fp("Lisent, vérifient.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun prépare une phrase avec un relatif composé pour son dépliant : « la rivière au bord de laquelle… », « les arbres auxquels… ».")],
      [fp("Préparent leur phrase."),
       pAns("R.A. : La colline au sommet de laquelle nous plantons mille arbres.", ["laquelle"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du plan : 1. titre + slogan — 2. constat local — 3. trois gestes à l'impératif — 4. devise finale et phrase avec relatif composé prêtes.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(80, TOTAL, meta, rows, "s80", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS80() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 80", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON DÉPLIANT ÉCOLOGIQUE (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le plan du dépliant"),
    exLine([run("Le titre et le slogan", { bold: true, color: C.SALMON, hl: true }), run(" : « Notre école propre ! »")], "court, frappant, positif"),
    exLine([run("Le constat", { bold: true, color: C.SALMON, hl: true }), run(" : une menace locale et vraie.")],
      "la cour salie, la colline nue, la rivière encombrée"),
    exLine([run("Trois gestes à l'impératif", { bold: true, color: C.SALMON, hl: true }), run(" : Jette ! Trie ! Plante !")], null),
    exLine([run("La devise finale", { bold: true, color: C.SALMON, hl: true }), run(" : « Venez, agissez, protégez ! »")],
      "trois impératifs, comme dans le guide d'Andasibe", { after: 80 }),
    sub("2. Je choisis une cause proche de moi"),
    exLine([run("L'école propre, la colline à reboiser, la rivière à protéger…")],
      "on convainc mieux quand on parle de ce qu'on voit tous les jours", { after: 80 }),
    sub("3. Ma phrase élégante avec un relatif composé"),
    exLine([run("La colline "), run("au sommet de laquelle", { bold: true, color: C.SALMON, hl: true }), run(" nous plantons mille arbres.")], null),
    exLine([run("Les arbres "), run("auxquels", { bold: true, color: C.SALMON, hl: true }), run(" notre village doit son eau.")],
      "une belle phrase donne du sérieux à ton dépliant", { after: 80 }),
    sub("Exercice — ton plan :"),
    p("Choisis ta cause. Écris : le titre, le slogan, le constat, trois gestes à l'impératif, la devise finale — et prépare une phrase avec un relatif composé.", { after: 60 }),
  ];
}

// ---------- S81 — Production écrite (2) ----------
function ficheS81() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son dépliant écologique complet et le relit avec la grille : impératifs, indicateurs spatiaux, relatif composé.",
    "9 / 12", "plans de la séance 80, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre plan. Quels outils de l'unité emploierons-nous ?")],
      [fp("Relisent."),
       fp("R.A. : impératifs, indicateurs spatiaux, relatifs composés, mots qui font rêver.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « il faut qu'on jette pas les déchets dans la rivière ». Demandez : transformez en phrase de dépliant, directe et correcte.")],
      [fp("Transforment."),
       fp("R.A. : Ne jetez plus vos déchets dans la rivière !")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons le dépliant complet, puis nous le relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; le plan complet ; au moins trois impératifs, deux indicateurs spatiaux, un relatif composé ; des phrases courtes et enthousiastes.")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle. Circulez : chassez les « il faut », raccourcissez les slogans, vérifiez l'accord des relatifs composés.")],
      [fp("Rédigent leur dépliant.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : le plan complet ? les impératifs bien conjugués ? le relatif composé bien accordé ? l'orthographe ?")],
      [fp("Relisent, cochent, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun entoure le meilleur slogan du voisin et propose une amélioration.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : slogan retenu : « Une colline verte, un village riche ! » ; amélioration : remplacer « il faut trier » par « Triez ! ».", ["slogan"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : plan complet (3) — impératifs (2) — indicateurs spatiaux (1) — relatif composé (2) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(81, TOTAL, meta, rows, "s81", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS81() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 81", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON DÉPLIANT ÉCOLOGIQUE (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("Je suis mon plan : "), run("titre → slogan → constat → trois gestes → devise", { bold: true, color: C.SALMON, hl: true }), run(".")], null),
    exLine([run("Je parle "), run("directement", { bold: true, color: C.SALMON, hl: true }), run(" au lecteur, à l'impératif.")],
      "Triez ! Plantez ! Protégez ! — jamais « il faut que »"),
    exLine([run("Je situe avec des "), run("indicateurs spatiaux", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "au bord de la rivière, au sommet de la colline", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes impératifs", { bold: true, color: C.SALMON, hl: true }), run(" sont bien conjugués (jette / jetez, trie / triez).")], null),
    exLine([run("Mon relatif composé", { bold: true, color: C.SALMON, hl: true }), run(" est bien accordé.")],
      "la rivière au bord de laquelle… : féminin, pas de contraction"),
    exLine([run("Mes phrases sont "), run("courtes et enthousiastes", { bold: true, color: C.SALMON, hl: true }), run(".")], null, { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("il faut qu'on jette pas les déchets dans la rivière  →  "), run("Ne jetez plus vos déchets dans la rivière !", { bold: true, color: C.SALMON, hl: true })],
      "direct, correct, frappant : voilà la phrase de dépliant", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« il faut planter des arbres sur la colline parce que sinon la terre part avec la pluie » → ………", { after: 60 }),
  ];
}

// ---------- S82 — Lecture-fluidité ----------
function ficheS82() {
  const meta = META("Lecture-fluidité : lire un guide touristique",
    "À la fin de la séance, l'apprenant lit un guide touristique à haute voix avec le ton de l'enthousiasme : impératifs lancés, exclamations vivantes.",
    "10 / 12", "texte de la séance 75, crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : sur quel ton lit-on une publicité ?")],
      [fp("Répondent."),
       fp("R.A. : avec enthousiasme : on veut donner envie.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez l'accroche deux fois : d'une voix plate, puis en guide enthousiaste. Faites comparer.")],
      [fp("Écoutent, comparent."),
       fp("R.A. : la seconde donne envie de partir tout de suite !")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire un guide touristique — la voix qui fait voyager. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites préparer le texte : marquer / et // ; entourer les points d'exclamation (voix qui monte) ; souligner les impératifs à lancer ; repérer les titres des parties, à annoncer clairement.")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Entraînement en binômes : l'un lit la partie publicité (enthousiasme), l'autre la partie règles (voix claire et ferme). Puis on échange.")],
      [fp("S'entraînent, échangent les rôles.")],
      "Binômes", "Grille"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels. La classe écoute : a-t-on envie de visiter Andasibe ? Les règles sont-elles claires ?")],
      [fp("Lisent, échangent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : retravaillez la devise finale « venez, regardez, protégez » : trois impératifs détachés, le dernier plus lent.")],
      [fp("Reprennent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. enthousiasme de la publicité — 2. clarté des règles — 3. exclamations vivantes — 4. devise finale détachée.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(82, TOTAL, meta, rows, "s82", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS82() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 82", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN GUIDE TOURISTIQUE À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. La voix qui fait voyager"),
    exLine([run("La publicité se lit avec "), run("enthousiasme", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "Venez respirer la forêt d'Andasibe ! — la voix sourit"),
    exLine([run("Les exclamations "), run("montent", { bold: true, color: C.SALMON, hl: true }), run(", les impératifs se "), run("lancent", { bold: true, color: C.SALMON, hl: true }), run(".")], null),
    exLine([run("Les règles se lisent d'une voix "), run("claire et ferme", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "on change de ton : le lecteur entend qu'on passe aux choses sérieuses", { after: 80 }),
    sub("2. La devise finale se détache"),
    exLine([run("« venez, / regardez, / protégez »", { bold: true, color: C.SALMON, hl: true })],
      "trois impératifs détachés, le dernier plus lent : c'est le message à retenir", { after: 80 }),
    sub("Exercice — prépare puis lis avec deux tons :"),
    p("« À trois heures de route d'Antananarivo, un trésor vous attend ! » (enthousiasme) — puis : « Restez sur les sentiers. Ne jetez rien, ne cueillez rien. » (voix ferme)", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 7 : L'ENVIRONNEMENT (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les menaces : ", { bold: true }), run("la déforestation, les feux de brousse, l'érosion, la pollution.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les protections : ", { bold: true }), run("le reboisement, les parcs nationaux, le tri des déchets, la pépinière ; les espèces endémiques (l'indri, le caméléon).", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. La publicité et le guide touristique :"),
    p("La publicité interpelle (impératif), séduit (mots qui font rêver), s'exclame. Le guide renseigne : étapes dans l'ordre, règles claires, devise finale.", { after: 80 }),
    sub("3. Les indicateurs spatiaux :"),
    p("Quatre familles : position (devant, derrière, entre), proximité (près de, au bord de), hauteur (au sommet de, au-dessus de), direction (vers, à gauche, le long de). Enchaînés, ils transforment la description en itinéraire.", { after: 80 }),
    sub("4. Les relatifs composés :"),
    p("Après une préposition : lequel, laquelle, lesquels, lesquelles (le sentier sur lequel…). Avec à et de, contraction : auquel, auxquels, auxquelles ; duquel, desquels, desquelles — mais à laquelle et de laquelle restent entiers.", { after: 80 }),
    sub("5. Dire et écrire :"),
    p("La publicité orale : slogan court, argument vrai, impératifs, slogan répété. Le dépliant écologique : titre, slogan, constat local, trois gestes, devise finale.", { after: 80 }),
    sub("6. La valeur de l'unité :"),
    p("Protéger la forêt, c'est protéger nos villages : la nature de Madagascar est un trésor dont nous sommes les gardiens.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Menace ou protection ? 1. l'érosion 2. le reboisement 3. les feux de brousse 4. le tri des déchets.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Complète avec un indicateur spatial : 1. « … la colline, un point de vue domine la vallée. » 2. « Les orchidées fleurissent … du sentier. » 3. « … nos têtes, l'indri chante. » 4. « … du lac, une plate-forme. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Complète avec lequel, laquelle, lesquels ou lesquelles : 1. « le sentier sur … nous marchons » 2. « la forêt dans … vivent les indris » 3. « les règles sans … le parc mourrait » 4. « les arbres entre … passe le sentier ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Complète avec auquel, auxquels, duquel ou de laquelle : 1. « un souvenir … personne n'échappe » 2. « les guides … nous faisons appel » 3. « le lac au bord … nous campons » 4. « la rivière au bord … nous plantons des arbres ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris le début de ton dépliant : un slogan, un constat (une phrase) et deux gestes à l'impératif.")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. menace — 2. protection — 3. menace — 4. protection. (1 pt chacun)", ["protection"]),
    pAns("Ex.2 : 1. Au sommet de — 2. le long (au bord) — 3. Au-dessus de — 4. Au bord. (1 pt chacun)", ["Au-dessus"]),
    pAns("Ex.3 : 1. lequel — 2. laquelle — 3. lesquelles — 4. lesquels. (1 pt chacun)", ["laquelle"]),
    pAns("Ex.4 : 1. auquel — 2. auxquels — 3. duquel — 4. de laquelle. (1 pt chacun)", ["duquel"]),
    pAns("Ex.5 : exemple : Une colline verte, un village riche ! Chaque pluie emporte la terre de notre colline nue. Plantez un arbre ! Protégez les jeunes pousses ! (slogan 1 pt, constat 1 pt, impératifs 2 pts)", ["slogan"]),
  ];
}

// ---------- Révision (S83) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s83", "SÉANCE 83 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 7 : L'ENVIRONNEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite deux menaces pour la nature et leurs protections."),
    pAns("R.A. : déforestation → reboisement ; déchets → tri (feux → surveillance, espèces → parcs).", ["reboisement"]),
    p("2. Que veut dire « espèce endémique » ? Donne un exemple."),
    pAns("R.A. : qui vit à Madagascar et nulle part ailleurs ; l'indri.", ["endémique"]),
    p("3. Comment la forêt protège-t-elle les villages ?"),
    pAns("R.A. : elle retient l'eau des pluies et empêche l'érosion.", ["érosion"]),
    p("4. Cite les quatre familles d'indicateurs spatiaux, avec un exemple chacune."),
    pAns("R.A. : position (derrière), proximité (au bord de), hauteur (au sommet de), direction (le long de).", ["position"]),
    p("5. Quand emploie-t-on un relatif composé ?"),
    pAns("R.A. : après une préposition : le sentier sur lequel nous marchons.", ["préposition"]),
    p("6. Donne les quatre formes simples du relatif composé."),
    pAns("R.A. : lequel, laquelle, lesquels, lesquelles.", ["lesquelles"]),
    p("7. Contracte : à + lequel ; de + lesquels. Lesquelles ne se contractent pas ?"),
    pAns("R.A. : auquel ; desquels ; à laquelle et de laquelle restent entières.", ["auquel"]),
    p("8. Quelles sont les armes de la publicité ?"),
    pAns("R.A. : l'impératif, les mots qui font rêver, les exclamations, le slogan répété.", ["slogan"]),
    p("9. Donne le plan du dépliant écologique."),
    pAns("R.A. : titre + slogan, constat local, trois gestes à l'impératif, devise finale.", ["constat"]),
    p("10. Cite trois gestes écologiques que tu fais toi-même."),
    pAns("R.A. : je jette à la poubelle, j'économise l'eau, je plante un arbre.", ["poubelle"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« Au sommet de la colline, derrière le village, s'étend la forêt dans laquelle vivent les lémuriens. Les arbres auxquels nous tenons retiennent l'eau et protègent la terre contre l'érosion. Plantons chaque année de jeunes arbres : c'est un trésor auquel nos enfants auront droit. »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("dans laquelle", { bold: true, color: C.SALMON, hl: true }), run(" [féminin singulier, pas de contraction], "), run("auxquels", { bold: true, color: C.SALMON, hl: true }), run(" [à + lesquels : tenir à], "), run("auquel", { bold: true, color: C.SALMON, hl: true }), run(" [à + lequel : avoir droit à], "), run("l'érosion", { bold: true, color: C.SALMON, hl: true }), run(" [la terre que l'eau emporte], "), run("s'étend", { bold: true, color: C.SALMON, hl: true }), run(" [verbe s'étendre, d muet].")], { after: 60 }),
  ];
}

// ---------- Test (S84) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s84", "SÉANCE 84 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 7 : L'ENVIRONNEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : endémique — reboisement — érosion — trier. 1. L'indri est une espèce … de Madagascar. 2. Sans arbres, l'… emporte la terre des collines. 3. Le … rend vie aux collines nues. 4. À la maison, nous apprenons à … nos déchets.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Complète avec un indicateur spatial de la famille demandée : 1. (hauteur) « … de la colline, un point de vue. » 2. (proximité) « … du lac, une plate-forme. » 3. (position) « … le bâtiment commence le sentier. » 4. (direction) « Les orchidées fleurissent … du sentier. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Complète avec le relatif composé qui convient : 1. « le sentier sur … nous marchons » 2. « la pépinière dans … grandissent les plants » 3. « les guides … nous faisons appel » 4. « le lac au bord … nous campons ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Transforme en phrases de dépliant (impératif direct) : 1. « il faut jeter les déchets à la poubelle » 2. « il faut qu'on protège les jeunes pousses ». Puis relie : 3-4. « Voici la rivière. Nous plantons des arbres au bord de cette rivière. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige ton dépliant écologique (cinq à six lignes) : slogan, constat local, trois gestes à l'impératif, devise finale, avec un relatif composé.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : endémique — érosion — reboisement — trier. (1 pt chacun)", ["érosion"]),
    pAns("Ex.2 : 1. Au sommet — 2. Au bord — 3. Derrière — 4. le long. (1 pt chacun)", ["Au sommet"]),
    pAns("Ex.3 : 1. lequel — 2. laquelle — 3. auxquels — 4. duquel. (1 pt chacun)", ["auxquels"]),
    pAns("Ex.4 : 1. Jetez vos déchets à la poubelle ! — 2. Protégez les jeunes pousses ! — 3-4. Voici la rivière au bord de laquelle nous plantons des arbres. (impératifs 2 pts, relatif 2 pts)", ["de laquelle"]),
    pAns("Ex.5 : plan complet (2 pts), impératifs (1 pt), relatif composé correct (1 pt).", ["plan"]),
  ];
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS73(), pageBreak(), ...lessonS73(), pageBreak(),
    ...ficheS74(), pageBreak(), ...lessonS74(), pageBreak(),
    ...ficheS75(), pageBreak(), ...lessonS75(), pageBreak(),
    ...ficheS76(), pageBreak(), ...lessonS76(), pageBreak(),
    ...ficheS77(), pageBreak(), ...lessonS77(), pageBreak(),
    ...ficheS78(), pageBreak(), ...lessonS78(), pageBreak(),
    ...ficheS79(), pageBreak(), ...lessonS79(), pageBreak(),
    ...ficheS80(), pageBreak(), ...lessonS80(), pageBreak(),
    ...ficheS81(), pageBreak(), ...lessonS81(), pageBreak(),
    ...ficheS82(), pageBreak(), ...lessonS82(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 7", COLOR, [
      "Je comprends la visite guidée d'un parc naturel.",
      "Je connais les menaces et les protections de la nature.",
      "Je pratique les gestes écologiques du quotidien.",
      "Je lis une publicité et un guide touristique.",
      "Je situe avec les indicateurs spatiaux des quatre familles.",
      "J'emploie lequel, laquelle, lesquels, lesquelles après une préposition.",
      "Je contracte auquel, auxquels, duquel, desquels sans me tromper.",
      "Je crée une publicité orale avec un slogan frappant.",
      "Je rédige un dépliant écologique complet.",
    ], "BRAVO ! TU AS TERMINÉ LES 7 UNITÉS → ANNEXES"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
