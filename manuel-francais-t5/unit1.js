// Français T5 — UNITÉ 1 — L'ENVIRONNEMENT (10 leçons + révision + test) — Séances 1 à 12 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1E8449"; // vert environnement
const SHADE = "D5F5E3";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 1 — L'ENVIRONNEMENT", title, slo,
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

// passage de compréhension orale (S1)
function passageAnja() {
  return box("PASSAGE D'ÉCOUTE — « Le village d'Anjà et sa forêt »", [
    p("Le village d'Anjà se trouve au pied d'une grande montagne grise, dans le sud des hautes terres. D'abord, on aperçoit les rizières vertes qui brillent au soleil, le long de la rivière. Ensuite, derrière les maisons en terre rouge, commence la forêt du village : une forêt épaisse, fraîche et pleine de vie. Dans les arbres, on voit des familles de lémuriens qui sautent de branche en branche. Les oiseaux chantent du matin au soir."),
    p("Autrefois, la colline voisine était couverte d'arbres. Mais les feux de brousse ont tout détruit : aujourd'hui, la terre est nue et rouge, et la pluie emporte la bonne terre des champs. Alors, les habitants d'Anjà ont pris une grande décision : la forêt du village est devenue une aire protégée. Chaque année, à la saison des pluies, les enfants de l'école plantent de jeunes arbres sur la colline : c'est le reboisement. Enfin, des barrières de feux protègent la forêt pendant la saison sèche."),
    p("Grâce à ces efforts, la forêt d'Anjà est sauvée. Les visiteurs viennent de loin pour l'admirer. Le village est fier de son trésor vert.", { after: 40 }),
  ]);
}
// texte de lecture (S3)
function texteAndasibe() {
  return box("TEXTE DE LECTURE — « Le parc national d'Andasibe »", [
    p("À une centaine de kilomètres à l'est d'Antananarivo se trouve le parc national d'Andasibe, l'une des plus belles aires protégées de Madagascar. Pour commencer, le visiteur découvre une forêt humide, haute et sombre, traversée par de petits sentiers de terre brune."),
    p("Premièrement, la végétation étonne : des arbres géants couverts de mousse, des fougères larges comme des parasols, des orchidées blanches accrochées aux branches. Ensuite, la faune émerveille : l'indri, le plus grand des lémuriens, lance son chant puissant au lever du jour ; des caméléons minuscules se cachent sous les feuilles ; des grenouilles dorées sautent au bord des ruisseaux."),
    p("Cependant, autour du parc, le paysage change : des collines nues, des champs brûlés par les feux de brousse, des villages où le bois devient rare. La déforestation menace la région ; c'est pourquoi les guides du parc apprennent aux visiteurs et aux enfants des écoles les gestes de la préservation : planter, protéger, ne jamais brûler la forêt."),
    p("Pour conclure, Andasibe est un trésor national. Sa conservation dépend de chacun de nous : si la forêt disparaît, l'indri disparaîtra avec elle.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 1 — L'ENVIRONNEMENT", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Notre île est un trésor vert !", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_environnement.png", 440, 768 / 1376),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un texte descriptif sur l'environnement, à l'oral et à l'écrit ;"),
    p("• employer les mots de la dégradation et de la protection de l'environnement ;"),
    p("• utiliser les mots de transition, les compléments du nom et les compléments circonstanciels de lieu ;"),
    p("• conjuguer les verbes voir, apercevoir, regarder, se trouver au présent et à l'imparfait ;"),
    p("• décrire un environnement à l'oral, puis rédiger mon propre texte descriptif ;"),
    p("• lire à haute voix avec fluidité et expressivité.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte DESCRIPTIF", { bold: true, color: COLOR }),
        run(" — décrire un phénomène ou un lieu (introduction → développement → conclusion).")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("le respect des biens communs et le sens de la responsabilité.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S1 — Compréhension orale ----------
function ficheS1() {
  const meta = META("Compréhension orale : « Le village d'Anjà et sa forêt »",
    "À la fin de la séance, l'apprenant détermine le sens des mots inconnus et dégage les informations essentielles d'un texte descriptif entendu.",
    "1 / 12", "texte du passage, photographies de forêts et de collines dégradées");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Première séance de français de l'unité ! Observez l'image au tableau (une forêt). Dites un mot français que cette image vous rappelle — un mot chacun, sans répéter !")],
      [fp("Répondent."),
       fp("R.A. : arbre, forêt, vert, oiseau, pluie, montagne…")],
      "Travail collectif", "Photographie"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Montrez deux photos : une forêt verte / une colline brûlée. Que voyez-vous ? Que s'est-il passé ? Aujourd'hui, nous allons écouter l'histoire d'un village qui a sauvé sa forêt.")],
      [fp("Observent, émettent des hypothèses.")], "Observation guidée", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : Le village d'Anjà et sa forêt ». Consigne : écoutez bien, sans écrire ; nous chercherons ensemble le sens des mots nouveaux.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage lentement, de manière expressive (ou faites écouter l'enregistrement). Questions globales : De quoi parle le texte ? Quel lieu est décrit ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : le texte parle d'un village et de sa forêt ; le lieu décrit est le village d'Anjà.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez le passage. Au tableau, notez les mots difficiles : feux de brousse, aire protégée, reboisement, barrières de feux. Faites deviner le sens grâce au contexte et aux photos : « les enfants plantent de jeunes arbres » → que veut dire reboisement ?")],
      [fp("Déduisent le sens des mots inconnus."),
       fp("R.A. : reboisement = planter de nouveau des arbres ; aire protégée = zone où la nature est protégée ; barrières de feux = bandes de terrain qui arrêtent le feu.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Questions détaillées : Quels éléments composent le paysage d'Anjà ? Qu'est-il arrivé à la colline voisine ? Quels sont les gestes de protection du village ? Distinguez l'information principale (le village protège sa forêt) des informations secondaires.")],
      [fp("Répondent. Récapitulent."),
       fp("R.A. : rizières, rivière, maisons, forêt, lémuriens ; les feux de brousse ont détruit la colline ; aire protégée + reboisement + barrières de feux.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez le passage en deux ou trois phrases, avec vos propres mots. Deux ou trois binômes présentent leur résumé.")],
      [fp("Résument oralement."),
       pAns("R.A. : Le village d'Anjà possède une belle forêt pleine de lémuriens. Les feux de brousse ont détruit la colline voisine. Alors le village a protégé sa forêt et replante des arbres chaque année.", ["protégé sa forêt"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel lieu le texte décrit-il ?"),
       fp("2. Cite deux dangers pour la forêt."),
       fp("3. Cite deux gestes de protection."),
       fp("4. Que veut dire « reboisement » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le village d'Anjà et sa forêt — 2. les feux de brousse, la déforestation — 3. l'aire protégée, le reboisement, les barrières de feux — 4. planter de nouveaux arbres.", ["reboisement"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCOUTER ET COMPRENDRE UN TEXTE DESCRIPTIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageAnja(),
    p("", { after: 80 }),
    sub("Pour comprendre un texte entendu :"),
    p("• J'écoute d'abord SANS écrire : de quoi parle le texte ? quel lieu est décrit ?"),
    p("• À la deuxième écoute, je repère les détails : les éléments du paysage, les actions."),
    p("• Je devine le sens des mots inconnus grâce au contexte et aux images."),
    p("• Je distingue l'information principale des informations secondaires."),
    p("• Je résume le texte en deux ou trois phrases, avec mes propres mots.", { after: 80 }),
    sub("Mes premiers mots de l'unité :"),
    mot("le reboisement", "planter de nouveaux arbres"),
    mot("une aire protégée", "une zone où la nature est protégée"),
    mot("les feux de brousse", "les feux qui brûlent les collines et les champs"),
    mot("les barrières de feux", "des bandes de terrain nu qui arrêtent le feu"),
  ];
}

// ---------- S2 — Lexique : dégradation et protection ----------
function ficheS2() {
  const meta = META("Lexique : la dégradation et la protection de l'environnement",
    "À la fin de la séance, l'apprenant emploie correctement les mots et expressions relatifs à la dégradation et à la protection de l'environnement.",
    "2 / 12", "étiquettes de mots, photographies, deux affiches (danger / protection)");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de la séance 1 : Que fait le village d'Anjà pour sa forêt ? Que veut dire « reboisement » ?")],
      [fp("Répondent."),
       fp("R.A. : il protège sa forêt (aire protégée, barrières de feux) ; reboisement = planter de nouveaux arbres.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu des deux affiches : au tableau, une affiche « LA FORÊT EN DANGER » (dessin de fumée) et une affiche « LA FORÊT PROTÉGÉE » (dessin d'arbre). Je montre des photos : où va chaque photo ?")],
      [fp("Classent les photos.")], "Observation guidée", "Affiches, photos"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Lexique : la dégradation et la protection de l'environnement ». À la fin de la séance, vous saurez nommer les dangers ET les remèdes !")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Famille 1 — la DÉGRADATION : la pollution, la déforestation, la désertification, les feux de brousse, le changement climatique. Je lis chaque mot ; la classe répète ; on cherche un exemple local pour chacun.")],
      [fp("Répètent. Donnent des exemples."),
       fp("R.A. : la pollution → les ordures dans la rivière ; la déforestation → on coupe les arbres pour le charbon…")],
      "Travail collectif", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Famille 2 — la PROTECTION : le reboisement, la préservation, la conservation, la nature, les aires protégées, les barrières de feux. Observez : dégradation, déforestation, désertification… que remarque-t-on ? (le préfixe dé- = destruction) ; préservation, conservation → le suffixe -tion fabrique des noms d'action.")],
      [fp("Observent la formation des mots."),
       fp("R.A. : dé- indique souvent une perte, une destruction ; -tion transforme l'action en nom.")],
      "Observation et manipulation", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Tableau à deux colonnes recopié dans le cahier : DANGERS / REMÈDES. Chaque mot est placé dans sa colonne, avec un petit dessin ou un exemple.")],
      [fp("Recopient. Complètent.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez les phrases : 1. Couper toutes les forêts, c'est la … . 2. Planter de nouveaux arbres, c'est le … . 3. La fumée des voitures cause la … . 4. Le parc d'Andasibe est une … .")],
      [fp("Complètent."),
       pAns("R.A. : 1. déforestation — 2. reboisement — 3. pollution — 4. aire protégée.", ["déforestation", "reboisement", "pollution", "aire protégée"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Classe ces six mots dans le bon panier (DANGER ou PROTECTION) : feux de brousse, conservation, désertification, barrières de feux, changement climatique, préservation.")],
      [fp("Classent."),
       pAns("R.A. : DANGER → feux de brousse, désertification, changement climatique ; PROTECTION → conservation, barrières de feux, préservation.", ["DANGER", "PROTECTION"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES MOTS DE L'ENVIRONNEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La dégradation de l'environnement (les dangers) :"),
    mot("la pollution", "l'air, l'eau ou le sol sont salis"),
    mot("la déforestation", "on coupe les forêts"),
    mot("la désertification", "la terre devient sèche comme un désert"),
    mot("les feux de brousse", "les feux qui brûlent collines et champs"),
    mot("le changement climatique", "le climat de la planète se dérègle"),
    p("", { after: 60 }),
    sub("La protection de l'environnement (les remèdes) :"),
    mot("le reboisement", "planter de nouveaux arbres"),
    mot("la préservation", "garder la nature en bon état"),
    mot("la conservation", "protéger pour longtemps"),
    mot("une aire protégée", "un parc, une réserve naturelle"),
    mot("les barrières de feux", "des bandes de terrain qui arrêtent le feu"),
    p("", { after: 60 }),
    sub("La fabrique des mots :"),
    pr([run("dé- ", { bold: true, color: C.RED }), run("= destruction, perte → "),
        run("déforestation, désertification", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("-tion ", { bold: true, color: C.RED }), run("= nom d'action → "),
        run("pollution, préservation, conservation", { bold: true, color: C.BLUE })], { after: 40 }),
  ];
}

// ---------- S3 — Compréhension écrite : le texte descriptif ----------
function ficheS3() {
  const meta = META("Compréhension écrite : « Le parc national d'Andasibe » — le texte descriptif",
    "À la fin de la séance, l'apprenant repère les informations d'un article descriptif et identifie le but, les caractéristiques et la structure du texte descriptif.",
    "3 / 12", "texte photocopié ou recopié au tableau, photographies du parc");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Dictée éclair de quatre mots de la séance 2 : déforestation, reboisement, pollution, aire protégée.")],
      [fp("Écrivent sur l'ardoise."),
       fp("R.A. : orthographe correcte des quatre mots.")],
      "Travail individuel", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-lecture)"],
      [fp("Connaissez-vous un parc national de Madagascar ? Lequel ? Qu'espère-t-on y voir ? Aujourd'hui, nous lisons un article sur le parc d'Andasibe.")],
      [fp("Répondent, partagent leurs connaissances.")], "Brainstorming", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribution du texte. Consigne : lecture silencieuse, puis nous chercherons comment ce texte est construit.")],
      [fp("Lisent silencieusement.")], "Lecture silencieuse", "Texte"),
    stepRow(["3. Observation", "(lecture guidée)"],
      [fp("Questions globales : De quoi parle le texte ? Quel lieu est décrit ? Puis questions détaillées : Quels sont les éléments de la végétation ? de la faune ? Quel danger menace la région ?")],
      [fp("Répondent en citant le texte."),
       fp("R.A. : le parc d'Andasibe ; arbres géants, fougères, orchidées ; l'indri, les caméléons, les grenouilles ; la déforestation et les feux de brousse.")],
      "Questionnement progressif", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Le texte DESCRIPTIF : quel est son BUT ? (décrire un lieu). Ses CARACTÉRISTIQUES ? (indications de lieu, groupes nominaux avec compléments du nom, adjectifs qualificatifs, verbes d'état au présent ou à l'imparfait). Sa STRUCTURE ? Repérez les trois parties : introduction, développement, conclusion. Soulignez les mots de transition : pour commencer, premièrement, ensuite, cependant, pour conclure.")],
      [fp("Annotent le texte, repèrent les trois parties."),
       fp("R.A. : introduction = 1er paragraphe ; développement = végétation + faune + dangers ; conclusion = dernier paragraphe.")],
      "Repérage et annotation", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Distinguons : information principale (Andasibe est un trésor à protéger) / informations secondaires (les orchidées blanches, les grenouilles dorées…). Récapitulons le schéma du texte descriptif au tableau.")],
      [fp("Recopient le schéma.")], "Travail collectif", "Tableau"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : résumez le texte en trois phrases avec vos propres mots.")],
      [fp("Résument par écrit."),
       pAns("R.A. : Le parc d'Andasibe est une aire protégée près d'Antananarivo. On y voit une forêt magnifique, l'indri et beaucoup d'animaux rares. Mais la déforestation menace la région, alors chacun doit protéger la forêt.", ["aire protégée"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Quel est le but d'un texte descriptif ?"),
       fp("2. Cite ses trois parties."),
       fp("3. Relève dans le texte un adjectif qualificatif et une indication de lieu.")],
      [fp("Répondent."),
       pAns("R.A. : 1. décrire un phénomène ou un lieu — 2. introduction, développement, conclusion — 3. ex. : « forêt humide » ; « à l'est d'Antananarivo ».", ["introduction, développement, conclusion"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LE TEXTE DESCRIPTIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteAndasibe(),
    p("", { after: 80 }),
    sub("Le texte descriptif :"),
    pr([run("But : ", { bold: true }), run("décrire un phénomène ou un lieu", { bold: true, color: C.BLUE }),
        run(" (une forêt, un parc, une ville, une plage…).")], { after: 50 }),
    pr([run("Caractéristiques : ", { bold: true }), run("des indications de lieu, des groupes nominaux avec compléments du nom, des adjectifs qualificatifs, des verbes d'état au présent ou à l'imparfait.")], { after: 50 }),
    pr([run("Structure : ", { bold: true })], { after: 30 }),
    p("• l'introduction — on présente le lieu ;"),
    p("• le développement — on décrit les éléments un à un (végétation, faune, activités…) ;"),
    p("• la conclusion — on donne une impression générale.", { after: 80 }),
    sub("Pour bien lire un article :"),
    p("• Je lis d'abord silencieusement, en entier."),
    p("• Je cherche l'information principale, puis les informations secondaires."),
    p("• Je souligne les mots de transition : ils montrent le chemin du texte."),
  ];
}

// ---------- S4 — Les mots de transition ----------
function ficheS4() {
  const meta = META("Fonctionnement de la langue : les mots de transition",
    "À la fin de la séance, l'apprenant identifie les mots de transition, précise leur rôle et les emploie pour organiser une description.",
    "4 / 12", "corpus extrait du texte d'Andasibe, étiquettes de mots de transition");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quelles sont les trois parties du texte descriptif ?")],
      [fp("Répondent."),
       fp("R.A. : introduction, développement, conclusion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu de la recette en désordre : « Enfin je mange. D'abord je lave le riz. Ensuite je le fais cuire. » Remettez les phrases dans l'ordre. Quels mots vous ont aidés ?")],
      [fp("Remettent en ordre."),
       fp("R.A. : d'abord → ensuite → enfin ; ce sont ces petits mots qui donnent l'ordre.")],
      "Travail collectif", "Étiquettes"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les mots de transition ». Ce sont les panneaux indicateurs du texte : ils organisent les idées.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus au tableau (extrait d'Andasibe) : « Pour commencer, le visiteur découvre… Premièrement, la végétation étonne… Ensuite, la faune émerveille… Pour conclure, Andasibe est un trésor. » Relevez les mots soulignés : où sont-ils placés ? À quoi servent-ils ?")],
      [fp("Relèvent et observent."),
       fp("R.A. : en tête de phrase, suivis d'une virgule ; ils indiquent l'ordre des idées.")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Classons la boîte à outils : POUR OUVRIR (d'abord, premièrement, pour commencer) / POUR CONTINUER (ensuite, puis, de plus) / POUR FERMER (enfin, pour conclure, finalement). Remarque : après le mot de transition, on met une virgule.")],
      [fp("Classent les étiquettes."),
       fp("R.A. : trois familles — ouvrir, continuer, fermer.")],
      "Observation et manipulation", "Étiquettes"),
    stepRow(["5. Synthèse"],
      [fp("Recopions le tableau des trois familles dans le cahier, avec un exemple pour chaque famille.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Complétez : « … , je me lève. … , je balaie la cour. … , je pars à l'école. » Puis transformez : ajoutez des mots de transition à cette description : « On voit la rivière. On aperçoit les rizières. La forêt commence. »")],
      [fp("Complètent, transforment."),
       pAns("R.A. : D'abord, je me lève. Ensuite, je balaie la cour. Enfin, je pars à l'école. — D'abord, on voit la rivière. Ensuite, on aperçoit les rizières. Enfin, la forêt commence.", ["D'abord", "Ensuite", "Enfin"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris trois phrases pour décrire ton trajet vers l'école, avec un mot de transition différent dans chaque phrase.")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : Premièrement, je traverse le village. Ensuite, je longe la rivière. Pour finir, j'arrive à l'école.", ["Premièrement", "Ensuite", "Pour finir"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES MOTS DE TRANSITION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p("Les mots de transition sont les panneaux indicateurs du texte : ils organisent les idées et montrent le chemin au lecteur.", { after: 80 }),
    sub("Pour ouvrir :"),
    pr([run("d'abord, premièrement, pour commencer", { bold: true, color: C.BLUE })], { after: 60 }),
    sub("Pour continuer :"),
    pr([run("ensuite, puis, de plus, après", { bold: true, color: C.BLUE })], { after: 60 }),
    sub("Pour fermer :"),
    pr([run("enfin, finalement, pour conclure", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("La règle d'or :"),
    pr([run("Le mot de transition se place en tête de phrase et il est suivi d'une "),
        run("virgule", { bold: true, color: C.RED }), run(".")], { after: 60 }),
    pr([run("Exemple : ", { bold: true }),
        run("D'abord,", { bold: true, color: C.BLUE }),
        run(" on aperçoit les rizières. "),
        run("Ensuite,", { bold: true, color: C.BLUE }),
        run(" la forêt commence. "),
        run("Enfin,", { bold: true, color: C.BLUE }),
        run(" on arrive au village.")]),
  ];
}

// ---------- S5 — Compléments du nom et CC de lieu ----------
function ficheS5() {
  const meta = META("Fonctionnement de la langue : le complément du nom et le complément circonstanciel de lieu",
    "À la fin de la séance, l'apprenant relève et emploie les compléments du nom et les compléments circonstanciels de lieu pour préciser et situer les éléments d'une description.",
    "5 / 12", "corpus extrait des textes étudiés, photographies de paysages");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Citez un mot de transition pour ouvrir, un pour continuer, un pour fermer.")],
      [fp("Répondent."),
       fp("R.A. : d'abord — ensuite — enfin.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Devinette : « la forêt » — de quelle forêt est-ce que je parle ? Impossible de savoir ! Et si je dis « la forêt du village » ? « la forêt de l'Est » ? Qu'est-ce qui a changé ?")],
      [fp("Comparent."),
       fp("R.A. : les mots ajoutés après « de » précisent de quelle forêt on parle.")],
      "Travail collectif", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Le complément du nom et le complément circonstanciel de lieu » — deux outils pour préciser et pour situer.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus 1 : « la forêt du village — les enfants de l'école — un chant d'oiseau — les sentiers de terre brune ». Observez : nom + petit mot (de, du, de la, des) + nom. Le deuxième nom précise le premier : c'est le COMPLÉMENT DU NOM.")],
      [fp("Observent, relèvent la construction."),
       fp("R.A. : nom + de/du/des + nom ; il apporte une précision (origine, matière, appartenance).")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Corpus 2 : « Le village se trouve au pied de la montagne. Dans les arbres, on voit des lémuriens. Les grenouilles sautent au bord des ruisseaux. » Posez la question OÙ ? : la réponse est le COMPLÉMENT CIRCONSTANCIEL DE LIEU. Relevez-les.")],
      [fp("Posent la question « où ? », relèvent."),
       fp("R.A. : au pied de la montagne — dans les arbres — au bord des ruisseaux.")],
      "Observation et manipulation", "Corpus"),
    stepRow(["5. Synthèse"],
      [fp("Récapitulons : le complément du nom PRÉCISE un nom (la forêt du village) ; le CC de lieu SITUE l'action (où ?). Les deux enrichissent la description. Trace écrite au cahier.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("1. Ajoutez un complément du nom : les rizières …, le chant …, les maisons … . 2. Complétez avec un CC de lieu : Les zébus dorment … . On aperçoit la rivière … .")],
      [fp("Complètent."),
       pAns("R.A. (exemples) : les rizières du vallon, le chant des oiseaux, les maisons du village — Les zébus dorment sous le tamarinier. On aperçoit la rivière au fond de la vallée.", ["du vallon", "des oiseaux", "sous le tamarinier"], { size: SZ.FICHE })],
      "Exercices guidés puis autonomes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Dans la phrase : « Au sommet de la colline, les arbres de la forêt protègent les champs du village. » — relève un CC de lieu et deux compléments du nom.")],
      [fp("Relèvent."),
       pAns("R.A. : CC de lieu → Au sommet de la colline ; compléments du nom → de la forêt, du village.", ["Au sommet de la colline"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("PRÉCISER ET SITUER : COMPLÉMENT DU NOM ET CC DE LIEU", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le complément du nom — pour PRÉCISER :"),
    pr([run("nom + de / du / de la / des + nom", { bold: true, color: C.RED })], { after: 40 }),
    pr([run("la forêt ", { size: SZ.BODY }), run("du village", { bold: true, color: C.BLUE }),
        run("  •  le chant "), run("des oiseaux", { bold: true, color: C.BLUE }),
        run("  •  les sentiers "), run("de terre brune", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("2. Le complément circonstanciel de lieu — pour SITUER :"),
    pr([run("Je pose la question : ", { size: SZ.BODY }), run("OÙ ?", { bold: true, color: C.RED })], { after: 40 }),
    mot("au pied de la montagne", "le village se trouve au pied de la montagne"),
    mot("dans les arbres", "dans les arbres, on voit des lémuriens"),
    mot("au bord des ruisseaux", "les grenouilles sautent au bord des ruisseaux"),
    p("", { after: 60 }),
    sub("À retenir :"),
    p("• Le complément du nom précise un nom : quelle forêt ? → la forêt du village."),
    p("• Le CC de lieu situe l'action : où ? → au sommet de la colline."),
    p("• Ces deux outils enrichissent la description !"),
  ];
}

// ---------- S6 — Conjugaison : voir, apercevoir, regarder, se trouver ----------
function ficheS6() {
  const meta = META("Conjugaison : voir, apercevoir, regarder, se trouver — présent et imparfait",
    "À la fin de la séance, l'apprenant conjugue et emploie les verbes de description voir, apercevoir, regarder et se trouver au présent et à l'imparfait de l'indicatif.",
    "6 / 12", "tableaux de conjugaison, corpus, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Dans « les arbres de la colline », où est le complément du nom ? Et dans « Les oiseaux chantent dans la forêt », où est le CC de lieu ?")],
      [fp("Répondent."),
       fp("R.A. : de la colline ; dans la forêt.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Mimez : je VOIS (yeux grands ouverts), j'APERÇOIS (main en visière, c'est loin !), je REGARDE (je tourne la tête et j'observe). Quelle différence entre voir et regarder ?")],
      [fp("Miment, comparent."),
       fp("R.A. : voir = sans effort ; regarder = avec attention ; apercevoir = voir de loin ou un court instant.")],
      "Mime", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Les verbes de la description : voir, apercevoir, regarder, se trouver — au présent et à l'imparfait ».")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : « On voit des lémuriens. On aperçoit les rizières. Le village se trouve au pied de la montagne. Autrefois, la colline était verte : on voyait des arbres partout. » Quels verbes ? À quels temps ?")],
      [fp("Relèvent."),
       fp("R.A. : voit, aperçoit, se trouve → présent ; voyait → imparfait (autrefois).")],
      "Exploitation de texte", "Corpus"),
    stepRow(["4. Analyse"],
      [fp("Tableaux au tableau noir : VOIR (je vois, tu vois, il voit, nous voyons, vous voyez, ils voient / imparfait : je voyais…) ; APERCEVOIR (j'aperçois, nous apercevons, ils aperçoivent / j'apercevais…) — attention au ç devant o ! ; REGARDER (1er groupe régulier) ; SE TROUVER (verbe pronominal : je me trouve, tu te trouves…). L'imparfait sert à décrire AUTREFOIS.")],
      [fp("Lisent, répètent, épellent les formes difficiles."),
       fp("R.A. : j'aperçois avec ç ; nous voyons avec y ; je me trouvais…")],
      "Observation et manipulation", "Tableaux de conjugaison"),
    stepRow(["5. Synthèse"],
      [fp("Recopions les quatre tableaux (présent + imparfait). Règle : dans une description, le présent dit MAINTENANT, l'imparfait dit AUTREFOIS.")],
      [fp("Recopient.")], "Travail collectif", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoise ! Conjuguez : 1. nous (voir, présent) — 2. j'(apercevoir, présent) — 3. ils (regarder, imparfait) — 4. le parc (se trouver, présent) — 5. on (voir, imparfait).")],
      [fp("Écrivent sur l'ardoise."),
       pAns("R.A. : 1. nous voyons — 2. j'aperçois — 3. ils regardaient — 4. le parc se trouve — 5. on voyait.", ["nous voyons", "j'aperçois", "ils regardaient", "se trouve", "on voyait"], { size: SZ.FICHE })],
      "Procédé La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Écris deux phrases : une au présent avec « apercevoir », une à l'imparfait avec « se trouver ».")],
      [fp("Rédigent."),
       pAns("R.A. (exemple) : De la fenêtre, j'aperçois les rizières. Autrefois, le marché se trouvait près de la rivière.", ["j'aperçois", "se trouvait"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  const t = (title, rows) => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell([p([run(title, { bold: true, color: C.WHITE, size: SZ.FICHE })], { center: true, after: 20 })], { colSpan: 3, shade: COLOR })] }),
      ...rows.map(r => new TableRow({ children: r.map((x, i) => cell([p([run(x, { size: SZ.FICHE, bold: i === 0, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })])) })),
    ],
  });
  return [
    p([run("LEÇON DU JOUR — SÉANCE 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LES VERBES DE LA DESCRIPTION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p("Dans une description, le présent dit MAINTENANT ; l'imparfait dit AUTREFOIS.", { after: 80 }),
    t("VOIR — présent / imparfait", [
      ["je", "vois", "voyais"], ["tu", "vois", "voyais"], ["il, elle, on", "voit", "voyait"],
      ["nous", "voyons", "voyions"], ["vous", "voyez", "voyiez"], ["ils, elles", "voient", "voyaient"],
    ]),
    p("", { after: 60 }),
    t("APERCEVOIR — présent / imparfait (attention au ç !)", [
      ["j'", "aperçois", "apercevais"], ["tu", "aperçois", "apercevais"], ["il, elle, on", "aperçoit", "apercevait"],
      ["nous", "apercevons", "apercevions"], ["vous", "apercevez", "aperceviez"], ["ils, elles", "aperçoivent", "apercevaient"],
    ]),
    p("", { after: 60 }),
    t("REGARDER (1er groupe) / SE TROUVER (pronominal)", [
      ["je", "regarde — regardais", "me trouve — me trouvais"],
      ["il, elle, on", "regarde — regardait", "se trouve — se trouvait"],
      ["nous", "regardons — regardions", "nous trouvons — nous trouvions"],
      ["ils, elles", "regardent — regardaient", "se trouvent — se trouvaient"],
    ]),
    p("", { after: 60 }),
    sub("Les nuances :"),
    mot("voir", "sans effort : on voit la montagne"),
    mot("regarder", "avec attention : je regarde le lémurien"),
    mot("apercevoir", "de loin, un instant : j'aperçois le toit de l'école"),
    mot("se trouver", "pour situer : le parc se trouve à l'est"),
  ];
}

// ---------- S7 — Production orale ----------
function ficheS7() {
  const meta = META("Production orale : décrire un environnement",
    "À la fin de la séance, l'apprenant décrit oralement un environnement et ses éléments avec un vocabulaire précis, et présente un court exposé comparant un milieu protégé et un milieu dégradé.",
    "7 / 12", "photographies panoramiques, plan simple d'exposé au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Conjuguez à l'oral : « apercevoir » avec je, puis « se trouver » avec nous, au présent.")],
      [fp("Répondent."),
       fp("R.A. : j'aperçois ; nous nous trouvons.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Affichez une grande photographie (paysage malgache). Pluie d'idées : tous les mots utiles pour la décrire. Je note tout au tableau.")],
      [fp("Proposent le vocabulaire."),
       fp("R.A. : rizières, collines, rivière, forêt, village, vert, sec…")],
      "Brainstorming", "Photographie"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Décrire un environnement à l'oral ». Objectif : parler clairement, situer les éléments, organiser ses idées avec les mots de transition.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Modèle de l'enseignant : je décris la photo en trois temps — D'abord, au premier plan… Ensuite, au fond… Enfin, mon impression. J'utilise la voix, les gestes, je montre les éléments.")],
      [fp("Écoutent et observent les comportements verbaux et non verbaux.")],
      "Modélisation", "Photographie"),
    stepRow(["4. Analyse"],
      [fp("Construisons ensemble le PLAN de l'exposé : 1. je présente le lieu — 2. je décris (je situe avec les CC de lieu) — 3. je conclus. Puis préparation en binômes : un exposé « Deux collines » (l'une protégée, l'autre dégradée) ; chaque binôme rédige ses notes (pas de phrases complètes, des mots clés !).")],
      [fp("Dressent un plan, rédigent des notes.")],
      "Travail collaboratif", "Plan au tableau"),
    stepRow(["5. Synthèse"],
      [fp("Passage des binômes devant la classe (2 minutes). Consignes d'écoute pour les autres : une question ou une remarque par exposé. Rappel : poser des questions, demander une clarification, admettre ses erreurs — avec respect !")],
      [fp("Présentent, posent des questions, répondent aux remarques."),
       pAns("R.A. (exemple) : D'abord, la première colline se trouve près du village : elle est verte, on aperçoit des arbres et des oiseaux. Ensuite, la deuxième colline est nue : les feux de brousse ont tout brûlé. Enfin, il faut planter des arbres pour la sauver !", ["D'abord", "Ensuite", "Enfin"], { size: SZ.FICHE })],
      "Exposé, interaction orale", "Notes"),
    stepRow(["6. Entraînement"],
      [fp("Défi éclair individuel : décrire en trois phrases le chemin de l'école (avec un CC de lieu et un mot de transition).")],
      [fp("Décrivent spontanément.")],
      "Travail individuel", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille d'évaluation orale : 1. j'ai organisé mes idées (transitions) — 2. j'ai situé les éléments (CC de lieu) — 3. j'ai parlé fort et clairement — 4. j'ai regardé mon public.")],
      [fp("S'auto-évaluent avec la grille.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DÉCRIRE UN LIEU À L'ORAL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan de mon exposé :"),
    p("1. Je présente le lieu — « Voici la colline de mon village. »"),
    p("2. Je décris les éléments un à un — je situe avec les CC de lieu : au premier plan, au fond, à gauche, au sommet…"),
    p("3. Je conclus — mon impression : « C'est un endroit magnifique à protéger ! »", { after: 80 }),
    sub("Mes outils de présentateur :"),
    p("• des notes courtes (des mots clés, pas des phrases !) ;"),
    p("• les mots de transition : d'abord, ensuite, enfin ;"),
    p("• la voix claire, les gestes, le regard vers le public ;"),
    p("• je peux poser des questions, demander une clarification, admettre mes erreurs, demander l'avis de mes camarades.", { after: 80 }),
    sub("Pour situer dans l'image :"),
    pr([run("au premier plan — au second plan — au fond — à gauche — à droite — au centre — au sommet — au pied", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S8 — Production écrite 1 : le plan ----------
function ficheS8() {
  const meta = META("Production écrite (1) : chercher les idées et bâtir le plan",
    "À la fin de la séance, l'apprenant dégage la structure d'un modèle de texte descriptif, recherche ses idées et élabore un plan simple (introduction, développement, conclusion).",
    "8 / 12", "modèle de texte descriptif (Andasibe), photographies, grille de plan");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quelles sont les trois parties d'un exposé ou d'un texte descriptif ?")],
      [fp("Répondent."),
       fp("R.A. : introduction, développement, conclusion.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Pour construire une maison, que fait le maçon avant de poser les briques ? (un plan !) Pour écrire un texte, c'est pareil.")],
      [fp("Répondent.")], "Travail collectif", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Écrire un texte descriptif (1) : chercher les idées et bâtir le plan ». Sujet de l'unité : « Décris un lieu de ton village ou de ton quartier que tu veux protéger. »")],
      [fp("Écoutent, recopient le sujet.")], "Travail collectif", "Tableau"),
    stepRow(["3. Observation"],
      [fp("Retour au modèle d'Andasibe : retrouvons sa charpente. Introduction = où ? quoi ? Développement = végétation / animaux / dangers. Conclusion = impression + appel à protéger.")],
      [fp("Dégagent la structure du modèle."),
       fp("R.A. : le plan du texte apparaît : 3 blocs, chacun avec sa mission.")],
      "Exploitation de texte", "Modèle"),
    stepRow(["4. Analyse"],
      [fp("Recherche d'idées : chacun choisit son lieu (la rivière, la colline, le marché, la forêt…). Pluie d'idées personnelle : je note tous les mots qui me viennent (éléments, couleurs, sons, animaux, dangers). Puis je trie : qu'est-ce qui va dans l'introduction ? le développement ? la conclusion ?")],
      [fp("Cherchent leurs idées, les trient dans la grille de plan.")],
      "Brainstorming, planification guidée", "Grille de plan"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : deux ou trois apprenants lisent leur plan. La classe vérifie : les trois parties sont-elles là ? Le vocabulaire de l'unité est-il prêt (2 mots de la protection ou de la dégradation au minimum) ?")],
      [fp("Présentent leur plan, améliorent."),
       pAns("R.A. (exemple de plan) : Intro : la rivière de mon village, à l'est. — Dév. : l'eau claire, les arbres au bord, les femmes qui lavent ; danger : les ordures (pollution). — Concl. : un trésor à préserver.", ["pollution", "préserver"], { size: SZ.FICHE })],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun complète son plan : un titre + trois ou quatre mots clés par partie + les verbes de description à utiliser (voir, apercevoir, se trouver).")],
      [fp("Finalisent leur plan.")],
      "Travail individuel", "Grille de plan"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérifie ton plan avec la liste : ☐ mon lieu est choisi ☐ 3 parties ☐ des mots de l'unité ☐ des CC de lieu prévus.")],
      [fp("Cochent la liste de contrôle.")],
      "Auto-évaluation", "Liste de contrôle"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}
function lessonS8() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCRIRE UN TEXTE DESCRIPTIF (1) : LE PLAN", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    pr([run("Sujet : ", { bold: true, color: C.RED }),
        run("Décris un lieu de ton village ou de ton quartier que tu veux protéger.", { italic: true })], { after: 80 }),
    sub("Avant d'écrire, je bâtis mon plan :"),
    p("1. INTRODUCTION — je présente le lieu : où se trouve-t-il ? qu'est-ce que c'est ?"),
    p("2. DÉVELOPPEMENT — je décris les éléments un à un : la végétation, les animaux, les personnes, les couleurs, les sons… et le danger qui menace."),
    p("3. CONCLUSION — mon impression générale et mon appel : protégeons ce lieu !", { after: 80 }),
    sub("Ma boîte à outils d'écrivain :"),
    p("• les mots de l'unité : pollution, déforestation, reboisement, préservation… ;"),
    p("• les mots de transition : d'abord, ensuite, enfin ;"),
    p("• les compléments du nom : la rivière du village, le chant des oiseaux ;"),
    p("• les CC de lieu : au bord de l'eau, au pied de la colline ;"),
    p("• les verbes de description : on voit, on aperçoit, se trouve."),
  ];
}

// ---------- S9 — Production écrite 2 : rédaction ----------
function ficheS9() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige un premier jet de texte descriptif à partir de son plan, puis le relit et l'améliore.",
    "9 / 12", "plans de la séance 8, grille de relecture au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Relisez votre plan de la séance 8. Qui me rappelle les trois parties du texte descriptif ?")],
      [fp("Relisent, répondent."),
       fp("R.A. : introduction, développement, conclusion.")],
      "Travail collectif", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Phrase de départ offerte à tous : « Au cœur de mon village se trouve un endroit que j'aime. » À vos plumes !")],
      [fp("Recopient la phrase de départ s'ils le souhaitent.")], "Écriture guidée", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Rédiger le premier jet ». Consignes : suivre son plan, une partie = un paragraphe, huit à dix phrases en tout.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(rédaction)"],
      [fp("Rédaction silencieuse. Je circule, j'aide les apprenants en difficulté : rappeler le plan, souffler un complément du nom, corriger un « aperçois » sans ç…")],
      [fp("Rédigent leur premier jet.")],
      "Écriture guidée", "Cahiers d'essai"),
    stepRow(["4. Analyse", "(relecture)"],
      [fp("Grille de relecture au tableau : 1. Mes trois parties sont-elles visibles ? 2. Ai-je mis des mots de transition ? 3. Des CC de lieu ? 4. Deux mots de l'unité ? 5. Les verbes voir/apercevoir/se trouver sont-ils bien conjugués ? 6. Majuscules et points ?")],
      [fp("Relisent leur texte avec la grille, corrigent.")],
      "Relecture guidée", "Grille"),
    stepRow(["5. Synthèse"],
      [fp("Échange de cahiers en binômes : chacun lit le texte de son voisin et propose UNE amélioration gentille (un mot plus précis, une transition qui manque…).")],
      [fp("Lisent, conseillent, améliorent."),
       pAns("R.A. (exemple de production) : Au cœur de mon village se trouve la rivière Ikopa. D'abord, on aperçoit l'eau claire qui brille entre les arbres du rivage. Ensuite, on voit les enfants du quartier qui jouent au bord de l'eau. Mais la pollution menace notre rivière : des ordures flottent près du lavoir. Enfin, je rêve d'une rivière propre : la préservation de ce trésor dépend de nous tous !", ["D'abord", "Ensuite", "Enfin", "pollution", "préservation"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["6. Entraînement"],
      [fp("Mise au propre du texte amélioré, avec le titre choisi.")],
      [fp("Recopient au propre.")],
      "Travail individuel", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassage des textes. Barème annoncé : structure 3 pts, vocabulaire de l'unité 2 pts, outils de la langue (transitions, CC, compléments du nom) 3 pts, correction de la langue 2 pts.")],
      [fp("Rendent leur production.")],
      "Travail individuel", "----"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}
function lessonS9() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 9", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ÉCRIRE UN TEXTE DESCRIPTIF (2) : RÉDIGER ET AMÉLIORER", { bold: true, size: 36, color: COLOR })], { center: true, after: 140 }),
    sub("Les étapes de l'écrivain :"),
    p("1. Je suis mon plan : une partie = un paragraphe."),
    p("2. J'écris mon premier jet sans m'arrêter trop longtemps."),
    p("3. Je relis avec la grille de relecture."),
    p("4. J'améliore : un mot plus précis, une transition, un détail."),
    p("5. Je recopie au propre, avec un beau titre.", { after: 80 }),
    sub("Ma grille de relecture :"),
    p("☐ Mes trois parties sont visibles (intro, développement, conclusion)."),
    p("☐ J'ai mis des mots de transition (d'abord, ensuite, enfin…)."),
    p("☐ J'ai situé avec des CC de lieu (au bord de…, au pied de…)."),
    p("☐ J'ai employé au moins deux mots de l'unité (pollution, reboisement…)."),
    p("☐ Mes verbes voir, apercevoir, se trouver sont bien conjugués."),
    p("☐ Majuscules, points, virgules après les transitions."),
  ];
}

// ---------- S10 — Lecture-fluidité ----------
function ficheS10() {
  const meta = META("Lecture-fluidité : la ponctuation et la lecture expressive",
    "À la fin de la séance, l'apprenant lit à haute voix un texte descriptif avec fluidité, précision et expressivité, en respectant les signes de ponctuation.",
    "10 / 12", "texte d'Andasibe, enregistrement ou lecture modèle de l'enseignant");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Quelles sont les étapes de l'écrivain ? (plan → premier jet → relecture → amélioration → propre)")],
      [fp("Répondent.")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Je lis une phrase deux fois : une fois d'une voix plate et sans pause, une fois avec pauses et expression. Quelle lecture préférez-vous ? Pourquoi ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième ! Les pauses et la voix donnent du sens.")],
      "Modélisation", "----"),
    stepRow(["2. Présentation"],
      [fp("Annonce : « Lire à haute voix avec fluidité et expressivité ». Nos outils : les signes de ponctuation.")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Au tableau, les six signes et leur rôle : le point (grande pause, voix qui descend), la virgule (petite pause), le point-virgule (pause moyenne), les deux points (annonce : on ouvre grand !), le point d'interrogation (voix qui monte), le point d'exclamation (émotion !). Lecture modèle du texte d'Andasibe : repérez mes pauses et mes groupes de souffle.")],
      [fp("Écoutent, marquent les pauses sur leur texte (/ = virgule, // = point).")],
      "Modélisation, repérage", "Texte annoté"),
    stepRow(["4. Analyse"],
      [fp("Entraînement par groupes de phrases : chaque rangée lit une phrase en respectant la ponctuation. Je corrige la prononciation, le rythme, l'intonation montante des questions.")],
      [fp("Lisent par groupes de souffle, s'entraînent.")],
      "Lecture répétée", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Lecture individuelle : trois ou quatre volontaires lisent un paragraphe en continu. La classe évalue avec trois critères : fluidité (sans hésiter), précision (tous les mots), expressivité (la voix vit !).")],
      [fp("Lisent à haute voix ; évaluent leurs pairs avec bienveillance.")],
      "Lecture à haute voix", "Grille simple"),
    stepRow(["6. Entraînement"],
      [fp("Nouveau défi : lire son PROPRE texte descriptif (séance 9) à son binôme, avec les techniques travaillées.")],
      [fp("Lisent leur production, s'auto-évaluent.")],
      "Binômes", "Productions des élèves"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Associe chaque signe à son rôle : . , ; : ? ! ↔ grande pause / petite pause / pause moyenne / annonce / question (voix qui monte) / émotion.")],
      [fp("Associent."),
       pAns("R.A. : point → grande pause ; virgule → petite pause ; point-virgule → pause moyenne ; deux points → annonce ; point d'interrogation → question ; point d'exclamation → émotion.", ["grande pause", "petite pause"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}
function lessonS10() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIRE À HAUTE VOIX : LA PONCTUATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Les signes de ponctuation et leur rôle :"),
    mot("le point  .", "grande pause — la voix descend"),
    mot("la virgule  ,", "petite pause"),
    mot("le point-virgule  ;", "pause moyenne"),
    mot("les deux points  :", "j'annonce quelque chose"),
    mot("le point d'interrogation  ?", "question — la voix monte"),
    mot("le point d'exclamation  !", "émotion, surprise, joie"),
    p("", { after: 80 }),
    sub("Les secrets du bon lecteur :"),
    p("• Je prépare ma lecture en silence et je marque mes pauses ( / et // )."),
    p("• Je respire aux groupes de souffle, jamais au milieu d'un mot !"),
    p("• Ma voix vit : elle monte aux questions, elle s'exclame aux « ! »."),
    p("• Fluidité (sans hésiter) + précision (tous les mots) + expressivité (la voix) = lecture réussie !"),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 1 : L'ENVIRONNEMENT (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Dangers : ", { bold: true }), run("la pollution, la déforestation, la désertification, les feux de brousse, le changement climatique.", { bold: true, color: C.BLUE })], { after: 40 }),
    pr([run("Remèdes : ", { bold: true }), run("le reboisement, la préservation, la conservation, les aires protégées, les barrières de feux.", { bold: true, color: C.BLUE })], { after: 80 }),
    sub("2. Le texte descriptif :"),
    p("But : décrire un lieu. Structure : introduction → développement → conclusion. Caractéristiques : indications de lieu, compléments du nom, adjectifs qualificatifs, verbes d'état au présent ou à l'imparfait.", { after: 80 }),
    sub("3. Les mots de transition :"),
    p("Ouvrir : d'abord, premièrement, pour commencer — Continuer : ensuite, puis, de plus — Fermer : enfin, pour conclure. Toujours une virgule après !", { after: 80 }),
    sub("4. Préciser et situer :"),
    p("Le complément du nom précise : la forêt du village. Le CC de lieu situe (où ?) : au pied de la montagne, dans les arbres, au bord des ruisseaux.", { after: 80 }),
    sub("5. Les verbes de la description :"),
    p("voir (je vois, nous voyons / je voyais), apercevoir (j'aperçois ç !, nous apercevons / j'apercevais), regarder (1er groupe), se trouver (je me trouve / je me trouvais). Présent = maintenant ; imparfait = autrefois.", { after: 80 }),
    sub("6. Écrire et lire :"),
    p("J'écris avec un plan, je relis avec ma grille, j'améliore. Je lis à haute voix en respectant la ponctuation : fluidité, précision, expressivité !"),
  ];
}

// ---------- exercices supplémentaires ----------
function exercises() {
  return [
    p([run("EXERCICES SUPPLÉMENTAIRES — UNITÉ 1", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire :"),
    p("Complète : 1. Couper les forêts, c'est la … . 2. Le feu qui brûle la colline est un … . 3. Planter de nouveaux arbres, c'est le … . 4. Un parc national est une … .", { after: 60 }),
    pAns("Corrigé : 1. déforestation — 2. feu de brousse — 3. reboisement — 4. aire protégée.", ["déforestation", "reboisement"]),
    p("", { after: 40 }),
    sub("Exercice 2 — Les mots de transition :"),
    p("Remets la description dans l'ordre et ajoute d'abord / ensuite / enfin : « on arrive au sommet — on traverse la rizière — on monte le sentier ».", { after: 60 }),
    pAns("Corrigé : D'abord, on traverse la rizière. Ensuite, on monte le sentier. Enfin, on arrive au sommet.", ["D'abord", "Ensuite", "Enfin"]),
    p("", { after: 40 }),
    sub("Exercice 3 — Complément du nom ou CC de lieu ?"),
    p("Souligne et classe : 1. Les arbres de la forêt sont géants. 2. Les lémuriens dorment dans les arbres. 3. On entend le chant des oiseaux. 4. Au bord de la rivière, l'herbe est verte.", { after: 60 }),
    pAns("Corrigé : compléments du nom → de la forêt, des oiseaux ; CC de lieu → dans les arbres, au bord de la rivière.", ["de la forêt", "dans les arbres"]),
    p("", { after: 40 }),
    sub("Exercice 4 — Conjugaison :"),
    p("Mets au temps demandé : 1. nous (voir, présent) 2. elles (apercevoir, présent) 3. on (se trouver, imparfait) 4. vous (regarder, imparfait) 5. j'(apercevoir, imparfait).", { after: 60 }),
    pAns("Corrigé : 1. nous voyons — 2. elles aperçoivent — 3. on se trouvait — 4. vous regardiez — 5. j'apercevais.", ["voyons", "aperçoivent", "se trouvait"]),
    p("", { after: 40 }),
    sub("Exercice 5 — Expression écrite :"),
    p("Décris en quatre phrases la cour de ton école : une phrase d'introduction, deux phrases de description (avec un CC de lieu et un complément du nom), une phrase de conclusion.", { after: 60 }),
    pAns("Corrigé (exemple) : Voici la cour de mon école. Au centre de la cour, un grand manguier donne de l'ombre. On entend les rires des élèves près du préau. C'est un endroit joyeux que nous gardons propre !", ["Au centre de la cour", "des élèves"]),
  ];
}

// ---------- S11 — Révision ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s11", "SÉANCE 11 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 1 : L'ENVIRONNEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Toute l'unité en une séance — en route pour le test !", { italic: true, color: C.GRAY })], { center: true, after: 120 }),
    sub("Atelier 1 — Le panier de mots (10 min) :"),
    p("Deux paniers au tableau : DANGERS / REMÈDES. Chaque élève vient placer une étiquette : pollution, reboisement, feux de brousse, conservation, désertification, barrières de feux, changement climatique, préservation, déforestation, aire protégée.", { after: 60 }),
    pAns("R.A. : DANGERS → pollution, feux de brousse, désertification, changement climatique, déforestation ; REMÈDES → reboisement, conservation, barrières de feux, préservation, aire protégée.", ["DANGERS", "REMÈDES"]),
    p("", { after: 40 }),
    sub("Atelier 2 — La phrase enrichie (10 min) :"),
    p("Phrase de départ : « On voit la forêt. » Chaque rangée l'enrichit : rangée 1 ajoute un complément du nom, rangée 2 un CC de lieu, rangée 3 un mot de transition, rangée 4 met le verbe à l'imparfait.", { after: 60 }),
    pAns("R.A. : Ensuite, du sommet de la colline, on voyait la forêt du village.", ["on voyait", "du village"]),
    p("", { after: 40 }),
    sub("Atelier 3 — Conjugaison en chaîne (10 min) :"),
    p("Un élève lance : « je vois » ; son voisin continue : « tu vois »… puis on change de verbe (apercevoir au présent, se trouver à l'imparfait, regarder à l'imparfait).", { after: 60 }),
    sub("Atelier 4 — Lecture chrono (10 min) :"),
    p("En binômes : lire le 1er paragraphe d'Andasibe avec fluidité et expressivité. Le binôme coche : pauses respectées ? voix vivante ? tous les mots lus ?", { after: 60 }),
    sub("Atelier 5 — Le plan éclair (10 min) :"),
    p("Sujet surprise : « Décris le marché de ton village. » En cinq minutes, bâtis le plan (intro / développement / conclusion) avec trois mots clés par partie. Mise en commun rapide.", { after: 60 }),
    pr([run("Demain : le TEST de l'unité 1 — relis ta grande leçon récapitulative !", { bold: true, color: C.RED })]),
  ];
}

// ---------- S12 — Test ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s12", "SÉANCE 12 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 1 : L'ENVIRONNEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    p([run("Durée : ……… — Note : … / 20", { bold: true })], { center: true, after: 140 }),
    sub("Exercice 1 — Vocabulaire (4 points) :"),
    p("Complète avec le mot qui convient : 1. Les … brûlent les collines pendant la saison sèche. 2. Le parc d'Andasibe est une … . 3. Planter de jeunes arbres, c'est le … . 4. Les fumées des usines causent la … .", { after: 80 }),
    sub("Exercice 2 — Les mots de transition (3 points) :"),
    p("Complète la description : « … , on aperçoit la rivière. … , on traverse les rizières du vallon. … , on arrive à la forêt protégée. »", { after: 80 }),
    sub("Exercice 3 — Grammaire (4 points) :"),
    p("a) Relève le complément du nom et le CC de lieu : « Au sommet de la colline, les arbres de la forêt dansent dans le vent. » b) Enrichis la phrase « On voit les oiseaux. » avec un complément du nom ET un CC de lieu.", { after: 80 }),
    sub("Exercice 4 — Conjugaison (4 points) :"),
    p("Conjugue : 1. nous (voir, présent) — 2. j'(apercevoir, présent) — 3. le village (se trouver, imparfait) — 4. elles (regarder, imparfait).", { after: 80 }),
    sub("Exercice 5 — Expression écrite (5 points) :"),
    p("Décris en cinq ou six phrases un lieu de ton village que tu veux protéger : introduction (1 phrase), développement (3-4 phrases avec un mot de transition, un CC de lieu et un mot de l'unité), conclusion (1 phrase).", { after: 120 }),
    p([run("CORRIGÉ", { bold: true, color: C.PINK, size: 32 })], { center: true, after: 80 }),
    pAns("Ex.1 : 1. feux de brousse — 2. aire protégée — 3. reboisement — 4. pollution. (1 pt chacun)", ["feux de brousse", "aire protégée", "reboisement", "pollution"]),
    pAns("Ex.2 : D'abord / Ensuite / Enfin (ou équivalents : Premièrement, Puis, Pour conclure…). (1 pt chacun)", ["D'abord", "Ensuite", "Enfin"]),
    pAns("Ex.3 : a) complément du nom → de la forêt ; CC de lieu → Au sommet de la colline, dans le vent. b) exemple : Du haut du rocher, on voit les oiseaux de la forêt. (2 pts + 2 pts)", ["de la forêt", "Au sommet de la colline"]),
    pAns("Ex.4 : 1. nous voyons — 2. j'aperçois — 3. le village se trouvait — 4. elles regardaient. (1 pt chacun)", ["nous voyons", "j'aperçois", "se trouvait", "regardaient"]),
    pAns("Ex.5 : structure 2 pts (3 parties), outils de la langue 2 pts (transition + CC de lieu + mot de l'unité), correction de la langue 1 pt.", ["structure"]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(), ...lessonS1(), pageBreak(),
    ...ficheS2(), pageBreak(), ...lessonS2(), pageBreak(),
    ...ficheS3(), pageBreak(), ...lessonS3(), pageBreak(),
    ...ficheS4(), pageBreak(), ...lessonS4(), pageBreak(),
    ...ficheS5(), pageBreak(), ...lessonS5(), pageBreak(),
    ...ficheS6(), pageBreak(), ...lessonS6(), pageBreak(),
    ...ficheS7(), pageBreak(), ...lessonS7(), pageBreak(),
    ...ficheS8(), pageBreak(), ...lessonS8(), pageBreak(),
    ...ficheS9(), pageBreak(), ...lessonS9(), pageBreak(),
    ...ficheS10(), pageBreak(), ...lessonS10(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNITÉ 1", COLOR, [
      "Je comprends un texte descriptif entendu et je devine les mots inconnus grâce au contexte.",
      "Je connais les mots de la dégradation (pollution, déforestation…) et de la protection (reboisement, préservation…).",
      "Je reconnais le texte descriptif : but, caractéristiques, structure en trois parties.",
      "J'organise mes idées avec les mots de transition : d'abord, ensuite, enfin.",
      "Je précise avec le complément du nom et je situe avec le CC de lieu.",
      "Je conjugue voir, apercevoir, regarder, se trouver au présent et à l'imparfait.",
      "Je décris un lieu à l'oral avec un plan et des notes.",
      "Je rédige un texte descriptif : plan, premier jet, relecture, amélioration.",
      "Je lis à haute voix avec fluidité, précision et expressivité.",
    ], "PROCHAINE ÉTAPE → UNITÉ 2 : LE VOYAGE !"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
