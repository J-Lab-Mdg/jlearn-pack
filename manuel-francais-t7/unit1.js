// Français T7 — UNITÉ 1 — LA CULTURE (10 leçons + révision + test) — Séances 1 à 12 / 72
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // brique — la culture
const SHADE = "FADBD8";
const TOTAL = 72;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 1 — LA CULTURE", title, slo,
  values: "fierté nationale, respect du patrimoine, ouverture d'esprit", session, materials,
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

// passage de compréhension orale (S1)
function passageVisages() {
  return box("PASSAGE D'ÉCOUTE — reportage « Les visages de la culture malgache »", [
    p("Ce matin, notre reportage vous emmène à la découverte de la culture malgache. La culture, c'est tout ce qu'un peuple invente, partage et transmet : sa nourriture, son habitat, ses vêtements, sa langue, ses danses, ses rites et son artisanat."),
    p("Premier visage : la nourriture. Sur les hautes terres, le romazava mijote dans les marmites ; sur la côte, le poisson cuit dans le lait de coco. Deuxième visage : l'habitat. Les maisons de brique rouge de l'Imerina ne ressemblent pas aux cases de bois de l'Est ni aux maisons de ravinala de la côte. Troisième visage : le vêtement. Le lamba, porté sur l'épaule, accompagne les grands moments de la vie. Quatrième visage : la langue malgache, parlée d'un bout à l'autre de l'île, avec ses proverbes pleins de sagesse."),
    p("Il faut citer encore les danses et les musiques — le salegy du Nord, l'afindrafindrao des fêtes —, les rites qui marquent la vie, et l'artisanat : paniers tressés, bois sculpté, soie tissée. Tout cela forme notre patrimoine, c'est-à-dire l'héritage reçu des anciens. Ce trésor ne vit que si les jeunes le connaissent, le respectent et le transmettent à leur tour.", { after: 40 }),
  ]);
}
// texte de lecture (S3)
function texteHiraGasy() {
  return box("TEXTE DE LECTURE — article de presse « Le hira gasy, un spectacle complet »", [
    pr([run("Le hira gasy, un spectacle complet", { bold: true, color: COLOR })], { after: 40 }),
    pr([run("Dimanche, des centaines de spectateurs ont assisté à un grand hira gasy à Mahamasina. Retour sur un art qui unit la parole, la musique et la danse.", { italic: true })], { after: 60 }),
    p("Dès le matin, les familles s'installent en cercle autour de la scène. Les artistes arrivent en cortège, vêtus de rouge et de blanc. Le spectacle commence toujours par le kabary : un aîné salue le public et demande la parole avec politesse. Les spectateurs écoutent ce discours avec respect, car l'art de bien parler est très admiré à Madagascar."),
    p("Ensuite viennent les chants et les danses. Les violons, les trompettes et les tambours accompagnent les chanteurs. Les paroles donnent des conseils : respecter les parents, aimer le travail, aider son voisin. Le public applaudit, rit, répond. À la fin, les danseurs bondissent sur la scène et le public retient son souffle."),
    p("Le hira gasy est transmis de génération en génération, souvent dans la même famille. « Mon grand-père chantait déjà, explique un artiste. Nous continuons, pour que ce trésor ne meure pas. » Un spectacle à voir au moins une fois dans sa vie.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 1 — LA CULTURE", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Notre culture est notre trésor.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre un reportage sur la culture malgache ;"),
    p("• nommer les éléments de la culture : nourriture, habitat, vêtements, langue, danses, rites, artisanat ;"),
    p("• reconnaître le texte informatif : titre, chapeau, corps de l'article ;"),
    p("• conjuguer les verbes du 1er et du 2e groupe au présent ;"),
    p("• reconnaître et employer la forme active et la forme passive ;"),
    p("• présenter un élément de la culture avec une bonne intonation ;"),
    p("• rédiger un court article informatif ;"),
    p("• lire un reportage à haute voix en respectant la ponctuation.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte INFORMATIF", { bold: true, color: COLOR }),
        run(" — donner des informations exactes (titre → chapeau → corps).")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("fierté nationale, respect du patrimoine, ouverture d'esprit.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S1 — Compréhension orale ----------
function ficheS1() {
  const meta = META("Compréhension orale : reportage « Les visages de la culture malgache »",
    "À la fin de la séance, l'apprenant détermine le sens des mots inconnus et dégage les informations essentielles d'un reportage entendu sur la culture.",
    "1 / 12", "texte du passage, photographies (plats, maisons, lamba, danses), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Première séance de l'année. Demandez : qu'est-ce qui rend notre région unique ? Un plat ? Une danse ? Une fête ? Chaque volontaire répond en une phrase.")],
      [fp("Répondent."),
       fp("R.A. : chez nous, on prépare le koba ; on danse le salegy ; on tisse des paniers…")],
      "Travail collectif", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Affichez les photographies : un plat, une maison, un lamba, une danse. Demandez : quel est le point commun de ces images ? Amenez le mot « culture ». Notez les hypothèses au tableau.")],
      [fp("Observent, émettent des hypothèses."),
       fp("R.A. : ce sont des choses de chez nous ; c'est la culture malgache…")],
      "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : un reportage intitulé Les visages de la culture malgache ». Consigne : écouter sans écrire ; nous chercherons ensemble le sens des mots nouveaux.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le passage lentement, de manière expressive (ou faites écouter l'enregistrement). Questions globales : de quoi parle le reportage ? Combien de « visages » de la culture sont cités ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : le reportage parle de la culture malgache ; il cite la nourriture, l'habitat, le vêtement, la langue, puis les danses, les rites et l'artisanat.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez le passage. Notez au tableau : patrimoine, rite, artisanat, transmettre. Faites déduire le sens par le contexte : le patrimoine est « l'héritage reçu des anciens »… Puis questions guides : quoi ? où ? qui ? pour quoi faire ?")],
      [fp("Déduisent le sens des mots inconnus."),
       fp("R.A. : patrimoine = l'héritage reçu des anciens ; rite = une cérémonie qui marque la vie ; artisanat = les objets faits à la main ; transmettre = donner aux plus jeunes.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Questions détaillées : quels sont les éléments de la culture cités ? Donnez un exemple pour chacun. Que faut-il faire pour que ce trésor vive ? Distinguez l'information principale des exemples.")],
      [fp("Répondent. Récapitulent."),
       fp("R.A. : nourriture (romazava), habitat (maisons de brique), vêtement (lamba), langue, danses (salegy), rites, artisanat (paniers) ; il faut connaître, respecter et transmettre.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : reformulez le reportage en deux ou trois phrases, avec vos propres mots. Quelques binômes présentent leur résumé à la classe.")],
      [fp("Résument oralement."),
       pAns("R.A. : La culture malgache a plusieurs visages : la nourriture, l'habitat, le vêtement, la langue, les danses et l'artisanat. C'est notre patrimoine. Les jeunes doivent le transmettre.", ["patrimoine"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Cite cinq éléments de la culture entendus dans le reportage."),
       fp("2. Que veut dire « patrimoine » ?"),
       fp("3. Que doivent faire les jeunes pour que la culture vive ?"),
       fp("4. Quel élément de notre culture préfères-tu ? Pourquoi ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. la nourriture, l'habitat, le vêtement, la langue, les danses (ou rites, artisanat) — 2. l'héritage reçu des anciens — 3. le connaître, le respecter, le transmettre — 4. réponse libre justifiée.", ["patrimoine"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS1() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("ÉCOUTER UN REPORTAGE SUR LA CULTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageVisages(),
    p("", { after: 80 }),
    sub("Pour comprendre un document entendu :"),
    p("• J'écoute d'abord sans écrire : de quoi parle le document ?"),
    p("• À la deuxième écoute, je repère les détails avec les questions guides : quoi ? où ? qui ? pour quoi faire ?"),
    p("• Je devine le sens des mots inconnus grâce au contexte : le patrimoine, c'est « l'héritage reçu des anciens »."),
    p("• Je reformule l'essentiel avec mes propres mots.", { after: 80 }),
    sub("Vocabulaire — mes premiers mots de l'unité :"),
    mot("la culture", "tout ce qu'un peuple invente, partage et transmet"),
    mot("le patrimoine", "l'héritage reçu des anciens"),
    mot("un rite", "une cérémonie qui marque un moment de la vie"),
    mot("l'artisanat", "les objets faits à la main : paniers, bois sculpté, soie"),
    mot("transmettre", "donner aux plus jeunes ce que l'on a reçu"),
  ];
}

// ---------- S2 — Lexique ----------
function ficheS2() {
  const meta = META("Lexique : les éléments de la culture",
    "À la fin de la séance, l'apprenant nomme et classe les éléments de la culture (nourriture, habitat, vêtements, langue, danses, rites, artisanat) et les emploie dans des phrases.",
    "2 / 12", "photographies, étiquettes de mots, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de la séance 1 : quels sont les visages de la culture cités dans le reportage ? Que veut dire « patrimoine » ?")],
      [fp("Répondent."),
       fp("R.A. : la nourriture, l'habitat, le vêtement, la langue, les danses… ; le patrimoine est l'héritage des anciens.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du tri : distribuez des étiquettes (romazava, lamba, salegy, case en ravinala, kabary, panier tressé, famadihana…). Consigne : regroupez les mots qui vont ensemble.")],
      [fp("Trient les étiquettes, proposent des familles de mots.")],
      "Jeu d'étiquettes", "Étiquettes"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les éléments de la culture. Aujourd'hui, nous allons classer tous ces mots en sept familles. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Tracez sept colonnes au tableau : nourriture, habitat, vêtements, langue, danses et musiques, rites, artisanat. Faites venir des volontaires placer les étiquettes.")],
      [fp("Placent les étiquettes dans les colonnes."),
       fp("R.A. : romazava → nourriture ; lamba → vêtements ; salegy → danses ; kabary → langue…")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Pour chaque colonne, faites ajouter un ou deux mots nouveaux. Attirez l'attention : on dit « la langue malgache » (la langue que l'on parle) ; le mot « langage » désigne la manière de parler.")],
      [fp("Enrichissent les colonnes. Notent la nuance."),
       fp("R.A. : nourriture : le ravitoto, le koba ; habitat : la maison de brique ; rites : la circoncision, le famadihana…")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des sept familles. Chaque apprenant souligne les trois mots qu'il préfère.")],
      [fp("Recopient, soulignent.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Procédé La Martinière : « Je donne la famille, vous écrivez un mot. » Nourriture ! Vêtements ! Rites ! Puis en binômes : une phrase avec deux mots du tableau.")],
      [fp("Écrivent sur l'ardoise. Rédigent une phrase."),
       pAns("R.A. : Pendant le famadihana, ma grand-mère porte son plus beau lamba.", ["famadihana"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe ces mots : salegy, ravitoto, panier tressé, case en bois."),
       fp("2. Cite deux rites malgaches."),
       fp("3. Écris une phrase avec « artisanat »."),
       fp("4. Complète : le … est l'héritage reçu des anciens.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. danse — nourriture — artisanat — habitat — 2. la circoncision, le famadihana — 3. exemple : L'artisanat de ma région est célèbre pour ses paniers. — 4. patrimoine.", ["patrimoine"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS2() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES ÉLÉMENTS DE LA CULTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Vocabulaire — les sept familles de la culture :"),
    mot("la nourriture", "le romazava, le ravitoto, le koba, le poisson au lait de coco"),
    mot("l'habitat", "la maison de brique rouge, la case en bois, la maison de ravinala"),
    mot("les vêtements", "le lamba, le chapeau de paille, le lambahoany"),
    mot("la langue", "le malgache, les proverbes, le kabary"),
    mot("les danses et musiques", "le salegy, l'afindrafindrao, le hira gasy, la valiha"),
    mot("les rites", "la circoncision, le famadihana, le mariage traditionnel"),
    mot("l'artisanat", "le panier tressé, le bois sculpté, la soie tissée"),
    p("", { after: 80 }),
    sub("On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« la langue malgache »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« le langage malgache » — le langage, c'est la manière de parler ; la langue, c'est ce que parle un peuple.")], { after: 80 }),
    sub("Je retiens :"),
    p("La culture d'un peuple regroupe sept grandes familles. Chaque région de Madagascar a ses plats, ses maisons, ses danses : c'est notre richesse commune.", { after: 60 }),
  ];
}

// ---------- S3 — Compréhension écrite ----------
function ficheS3() {
  const meta = META("Compréhension écrite : « Le hira gasy, un spectacle complet » — le texte informatif",
    "À la fin de la séance, l'apprenant lit un article de presse, en dégage les informations essentielles et identifie la structure du texte informatif : titre, chapeau, corps.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez les sept familles de la culture. Dans quelle famille placez-vous le hira gasy ?")],
      [fp("Répondent."),
       fp("R.A. : les danses et musiques — et aussi la langue, car il y a le kabary !")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : qui a déjà vu un hira gasy ? Où ? Qu'est-ce qu'on y voit ? Qu'est-ce qu'on y entend ?")],
      [fp("Partagent leurs expériences.")],
      "Échange oral", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « C'est un article de presse, un texte informatif. Nous allons apprendre à le lire comme des journalistes. »")],
      [fp("Observent le document.")], "Travail collectif", "Texte"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : quel est le titre ? Que raconte l'article ? Où et quand le spectacle a-t-il eu lieu ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : titre : « Le hira gasy, un spectacle complet » ; un grand hira gasy a eu lieu dimanche à Mahamasina.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites repérer les trois parties : le titre (court et accrocheur), le chapeau (en italique : il résume l'article), le corps (les paragraphes). Puis : dans quel ordre se déroule le spectacle ? Relevez les mots qui le montrent (dès le matin, ensuite, à la fin).")],
      [fp("Repèrent la structure. Relèvent les connecteurs."),
       fp("R.A. : titre, chapeau, corps ; ordre : le kabary, puis les chants et danses, enfin le bond des danseurs ; mots : dès le matin, ensuite, à la fin.")],
      "Analyse guidée", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : à quoi sert chaque partie de l'article ? Pourquoi le journaliste cite-t-il les paroles d'un artiste entre guillemets ?")],
      [fp("Formulent."),
       fp("R.A. : le titre attire, le chapeau résume, le corps détaille ; la citation rend l'article vivant et vrai.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relisez le dernier paragraphe. Pourquoi le hira gasy ne meurt-il pas ? Reformulez la réponse avec vos mots.")],
      [fp("Relisent, reformulent."),
       pAns("R.A. : parce qu'il est transmis de génération en génération, souvent dans la même famille.", ["transmis"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Donne les trois parties d'un article de presse."),
       fp("2. Par quoi commence toujours le hira gasy ?"),
       fp("3. Que conseillent les paroles des chants ?"),
       fp("4. Pourquoi dit-on que le hira gasy est « un spectacle complet » ?")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. le titre, le chapeau, le corps — 2. par le kabary — 3. respecter les parents, aimer le travail, aider son voisin — 4. parce qu'il unit la parole, la musique et la danse.", ["chapeau"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS3() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN ARTICLE DE PRESSE — LE TEXTE INFORMATIF", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteHiraGasy(),
    p("", { after: 80 }),
    sub("La structure du texte informatif (l'article de presse) :"),
    pr([run("1. Le titre", { bold: true, color: C.SALMON, hl: true }), run(" — court et accrocheur : il donne envie de lire.")], { after: 40 }),
    pr([run("2. Le chapeau", { bold: true, color: C.SALMON, hl: true }), run(" — deux ou trois phrases, souvent en italique : il résume l'article (qui ? quoi ? où ? quand ?).")], { after: 40 }),
    pr([run("3. Le corps", { bold: true, color: C.SALMON, hl: true }), run(" — les paragraphes qui détaillent, dans l'ordre, avec des connecteurs : dès le matin, ensuite, à la fin.")], { after: 80 }),
    sub("Je retiens :"),
    p("• Le texte informatif donne des informations exactes et vérifiées : il répond aux questions qui ? quoi ? où ? quand ? comment ?"),
    p("• La citation entre guillemets rend l'article vivant : ce sont les paroles exactes d'une personne.", { after: 60 }),
  ];
}

// ---------- S4 — Grammaire : verbes 1er et 2e groupe ----------
function ficheS4() {
  const meta = META("Les verbes du 1er et du 2e groupe au présent",
    "À la fin de la séance, l'apprenant distingue les verbes du 1er et du 2e groupe et les conjugue correctement au présent de l'indicatif.",
    "4 / 12", "phrases du texte de la séance 3, tableau de conjugaison, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les trois parties d'un article de presse ? À quoi sert le chapeau ?")],
      [fp("Répondent."),
       fp("R.A. : titre, chapeau, corps ; le chapeau résume l'article.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Les familles s'installent. Le public applaudit. Les danseurs bondissent. » Soulignez les verbes. Demandez : quel est leur infinitif ?")],
      [fp("Trouvent les infinitifs."),
       fp("R.A. : s'installer, applaudir, bondir.")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Les verbes du 1er groupe (-er) et du 2e groupe (-ir, avec -issons à nous). Nous allons apprendre à les reconnaître et à les conjuguer au présent. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Conjuguez « danser » et « applaudir » au tableau, en colonne. Faites encadrer les terminaisons : -e, -es, -e, -ons, -ez, -ent / -is, -is, -it, -issons, -issez, -issent.")],
      [fp("Encadrent les terminaisons, lisent à voix haute.")],
      "Observation guidée", "Tableau de conjugaison"),
    stepRow(["4. Analyse"],
      [fp("Question piège : « partir » finit par -ir : est-il du 2e groupe ? Vérification : nous partons (et non « nous partissons ») → 3e groupe. Règle : 2e groupe = -ir ET -issons à « nous ».")],
      [fp("Testent avec « nous »."),
       fp("R.A. : finir → nous finissons : 2e groupe ; partir → nous partons : pas 2e groupe.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler la règle complète et recopier les deux tableaux de conjugaison avec les terminaisons en couleur.")],
      [fp("Formulent, recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « tu / chanter », « nous / choisir », « ils / grandir », « vous / préparer ». Puis deux phrases à compléter au tableau.")],
      [fp("Écrivent sur l'ardoise."),
       pAns("R.A. : tu chantes — nous choisissons — ils grandissent — vous préparez.", ["choisissons"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe : tisser, réfléchir, danser, réussir (1er ou 2e groupe ?)."),
       fp("2. Conjugue : « Les artisans (tisser) la soie. »"),
       fp("3. Conjugue : « Nous (choisir) un beau lamba. »"),
       fp("4. Explique pourquoi « courir » n'est pas du 2e groupe.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. tisser et danser : 1er groupe ; réfléchir et réussir : 2e groupe — 2. tissent — 3. choisissons — 4. parce qu'on dit « nous courons », sans -issons.", ["-issons"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS4() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES VERBES DU 1er ET DU 2e GROUPE AU PRÉSENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le 1er groupe : infinitif en -er"),
    pr([run("danser : ", { bold: true }), run("je danse, tu danses, il/elle danse, nous dansons, vous dansez, ils/elles ", {}), run("dansent", { bold: true, color: C.SALMON, hl: true })], { after: 40 }),
    p("Terminaisons : -e, -es, -e, -ons, -ez, -ent.", { after: 80 }),
    sub("Le 2e groupe : infinitif en -ir, avec -issons à « nous »"),
    pr([run("applaudir : ", { bold: true }), run("j'applaudis, tu applaudis, il/elle applaudit, nous ", {}), run("applaudissons", { bold: true, color: C.SALMON, hl: true }), run(", vous applaudissez, ils/elles applaudissent")], { after: 40 }),
    p("Terminaisons : -is, -is, -it, -issons, -issez, -issent.", { after: 80 }),
    sub("Le test du 2e groupe :"),
    p("• Je mets le verbe avec « nous » : finir → nous finissons → 2e groupe."),
    p("• partir → nous partons (pas de -issons) → ce n'est PAS le 2e groupe.", { after: 80 }),
    sub("Vocabulaire — des verbes de la culture :"),
    mot("tisser", "1er groupe : les artisans tissent la soie"),
    mot("sculpter", "1er groupe : il sculpte le bois"),
    mot("réussir", "2e groupe : nous réussissons la fête"),
    mot("grandir", "2e groupe : les enfants grandissent avec les contes"),
  ];
}

// ---------- S5 — Grammaire : forme active / passive ----------
function ficheS5() {
  const meta = META("La forme active et la forme passive",
    "À la fin de la séance, l'apprenant distingue une phrase à la forme active d'une phrase à la forme passive et identifie le complément d'agent.",
    "5 / 12", "phrases du texte, étiquettes sujet/verbe/complément, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("La Martinière : « nous / finir », « elles / danser », « tu / choisir ». Rappel du test du 2e groupe.")],
      [fp("Écrivent sur l'ardoise."),
       fp("R.A. : nous finissons — elles dansent — tu choisis.")],
      "La Martinière", "Ardoises"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Les artisans tissent la soie. » / « La soie est tissée par les artisans. » Demandez : ces deux phrases disent-elles la même chose ? Qu'est-ce qui change ?")],
      [fp("Comparent."),
       fp("R.A. : le sens est le même, mais l'ordre des mots change.")],
      "Observation", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « La forme active et la forme passive. À la forme active, le sujet fait l'action ; à la forme passive, le sujet subit l'action. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Sous chaque phrase, faites identifier : qui fait l'action ? qui la subit ? Introduisez les mots : forme active, forme passive, complément d'agent (introduit par « par »).")],
      [fp("Identifient."),
       fp("R.A. : actif : les artisans (sujet) font l'action ; passif : la soie (sujet) subit l'action ; « par les artisans » = complément d'agent.")],
      "Analyse guidée", "Étiquettes"),
    stepRow(["4. Analyse"],
      [fp("Faites observer le verbe passif : être + participe passé (est tissée). Autres exemples du texte : « le hira gasy est transmis de génération en génération ». Qui transmet ? Parfois l'agent n'est pas dit.")],
      [fp("Observent."),
       fp("R.A. : au passif, le verbe se forme avec être + participe passé ; le complément d'agent peut être absent.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : comment reconnaître une phrase passive ? (être + participe passé ; le sujet subit ; agent avec « par » ou absent). Recopier la trace écrite.")],
      [fp("Formulent, recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Jeu : levez la main droite si la phrase est active, la gauche si elle est passive. « Le public applaudit les danseurs. » « Le kabary est écouté avec respect. » « Les paniers sont tressés par les femmes. » « Les enfants apprennent les chants. »")],
      [fp("Jouent, justifient."),
       pAns("R.A. : active — passive — passive — active.", ["passive"], { size: SZ.FICHE })],
      "Jeu de réponse", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Active ou passive ? « Le lamba est porté par la mariée. »"),
       fp("2. Active ou passive ? « Les aînés transmettent les proverbes. »"),
       fp("3. Souligne le complément d'agent : « Ce bois est sculpté par mon oncle. »"),
       fp("4. Écris une phrase passive sans complément d'agent.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. passive — 2. active — 3. par mon oncle — 4. exemple : Le spectacle est annoncé depuis une semaine.", ["complément d'agent"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS5() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA FORME ACTIVE ET LA FORME PASSIVE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La forme active : le sujet fait l'action."),
    pr([run("Les artisans ", { bold: true, color: C.SALMON, hl: true }), run("tissent la soie. → Les artisans agissent.")], { after: 80 }),
    sub("La forme passive : le sujet subit l'action."),
    pr([run("La soie ", { bold: true, color: C.SALMON, hl: true }), run("est tissée par les artisans. → La soie ne fait rien : elle subit.")], { after: 40 }),
    p("• Le verbe passif = être + participe passé : est tissée, sont transmis, était admiré."),
    pr([run("• Celui qui fait l'action est le "), run("complément d'agent", { bold: true, color: C.SALMON, hl: true }), run(", introduit par « par » : par les artisans.")], { after: 40 }),
    p("• Parfois, l'agent n'est pas dit : « Le hira gasy est transmis de génération en génération. »", { after: 80 }),
    sub("Je retiens :"),
    p("• Pour reconnaître le passif, je cherche : être + participe passé, et je demande : le sujet agit-il ou subit-il ?"),
    p("• Le passif met en valeur ce qui subit l'action : « La soie est tissée » parle d'abord de la soie.", { after: 60 }),
  ];
}

// ---------- S6 — Grammaire : passif transformation et accord ----------
function ficheS6() {
  const meta = META("La forme passive : transformation et accord",
    "À la fin de la séance, l'apprenant transforme une phrase active en phrase passive (et inversement) et accorde le participe passé avec le sujet.",
    "6 / 12", "étiquettes de phrases, tableau, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Active ou passive ? « Les tambours accompagnent les chanteurs. » « La fête est préparée par tout le village. » Comment se forme le verbe passif ?")],
      [fp("Répondent."),
       fp("R.A. : active ; passive ; être + participe passé.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Défi : « Le village prépare la fête. » Qui peut dire la même chose en commençant par « La fête… » ?")],
      [fp("Essaient."),
       fp("R.A. : La fête est préparée par le village.")],
      "Défi oral", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous apprenons à transformer l'actif en passif, en trois étapes, et à accorder le participe passé. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Décomposez au tableau avec des flèches : 1. le COD devient sujet ; 2. le verbe devient être + participe passé (au même temps) ; 3. le sujet devient complément d'agent avec « par ».")],
      [fp("Suivent la transformation, répètent les trois étapes.")],
      "Démonstration", "Flèches au tableau"),
    stepRow(["4. Analyse"],
      [fp("Faites observer l'accord : « La fête est préparée » (féminin singulier) ; « Les chants sont appris » (masculin pluriel). Règle : au passif, le participe s'accorde avec le sujet. Attention au temps de « être » : prépare → est préparée ; préparait → était préparée.")],
      [fp("Observent, accordent."),
       fp("R.A. : préparée (f. sing.), appris (m. pl.) ; le participe s'accorde avec le sujet.")],
      "Analyse guidée", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier les trois étapes et la règle d'accord, avec un exemple au présent et un à l'imparfait.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : transformez. « Les femmes tressent les paniers. » « Mon oncle sculpte cette statue. » Puis dans l'autre sens : « Les proverbes sont transmis par les aînés. »")],
      [fp("Transforment."),
       pAns("R.A. : Les paniers sont tressés par les femmes. — Cette statue est sculptée par mon oncle. — Les aînés transmettent les proverbes.", ["sont tressés"], { size: SZ.FICHE })],
      "Binômes", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Transforme au passif : « Les enfants apprennent les chants. »"),
       fp("2. Transforme au passif : « Le tailleur coud la robe. »"),
       fp("3. Accorde : « Les danses sont (admiré) de tous. »"),
       fp("4. Transforme à l'actif : « Le kabary est prononcé par un aîné. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. Les chants sont appris par les enfants. — 2. La robe est cousue par le tailleur. — 3. admirées — 4. Un aîné prononce le kabary.", ["admirées"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS6() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA FORME PASSIVE : TRANSFORMATION ET ACCORD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Transformer l'actif en passif : trois étapes."),
    p("Phrase active : Le village prépare la fête."),
    pr([run("1. ", { bold: true }), run("Le COD devient sujet", { bold: true, color: C.SALMON, hl: true }), run(" : la fête → en tête de phrase.")], { after: 40 }),
    pr([run("2. ", { bold: true }), run("Le verbe devient être + participe passé", { bold: true, color: C.SALMON, hl: true }), run(", au même temps : prépare → est préparée.")], { after: 40 }),
    pr([run("3. ", { bold: true }), run("Le sujet devient complément d'agent", { bold: true, color: C.SALMON, hl: true }), run(" : par le village.")], { after: 40 }),
    p("Phrase passive : La fête est préparée par le village.", { after: 80 }),
    sub("L'accord du participe passé au passif :"),
    p("• Au passif, le participe passé s'accorde toujours avec le sujet :"),
    p("• La fête est préparée. — Les chants sont appris. — Les danses sont admirées.", { after: 80 }),
    sub("Attention au temps de « être » :"),
    p("• Présent : La fête est préparée. • Imparfait : La fête était préparée. • Futur : La fête sera préparée.", { after: 60 }),
  ];
}

// ---------- S7 — Production orale ----------
function ficheS7() {
  const meta = META("Production orale : présenter un élément de la culture",
    "À la fin de la séance, l'apprenant présente oralement un élément de la culture malgache en soignant l'intonation des phrases interrogatives et exclamatives.",
    "7 / 12", "photographies, grille d'écoute simple au tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Transforme au passif : « Les femmes tissent le lamba. » Rappel des trois étapes.")],
      [fp("Répondent."),
       fp("R.A. : Le lamba est tissé par les femmes.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Dites deux fois la même phrase : « Le hira gasy est magnifique » — d'abord d'une voix plate, puis avec enthousiasme. Demandez : quelle version donne envie d'écouter ? Pourquoi ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième ; la voix monte et descend, elle est vivante.")],
      "Écoute comparée", "----"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : présenter un élément de la culture en une minute. Outils : la voix qui monte pour les questions, la voix forte pour les exclamations. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Modèle de l'enseignant : « Connaissez-vous le salegy ? (voix qui monte) C'est la danse du Nord. On la danse aux mariages et aux fêtes. Quel rythme entraînant ! (voix forte) » Faites repérer le plan : question d'accroche → trois informations → exclamation finale.")],
      [fp("Écoutent, repèrent le plan."),
       fp("R.A. : une question pour accrocher, des informations, une exclamation pour finir.")],
      "Modélisation", "----"),
    stepRow(["4. Analyse"],
      [fp("Faites répéter en chœur une phrase interrogative (voix qui monte ↗) et une phrase exclamative (volume plus fort). Corrigez l'intonation, pas seulement les mots.")],
      [fp("Répètent avec la bonne intonation.")],
      "Répétition guidée", "----"),
    stepRow(["5. Synthèse"],
      [fp("Chaque apprenant choisit son élément (un plat, une danse, un objet d'artisanat, un rite) et prépare ses trois phrases d'information. Passez dans les rangs.")],
      [fp("Préparent leur présentation.")],
      "Travail individuel", "Brouillons"),
    stepRow(["6. Entraînement"],
      [fp("Présentations : une minute chacun, en petits groupes puis quelques volontaires devant la classe. Le public utilise la grille : accroche ? informations ? intonation ?")],
      [fp("Présentent, s'écoutent, s'évaluent."),
       pAns("R.A. : Connaissez-vous le koba ? C'est un gâteau de riz, d'arachide et de sucre. On l'enveloppe dans des feuilles de banane. On le vend sur tous les marchés. Quel délice !", ["Quel délice !"], { size: SZ.FICHE })],
      "Exposés courts", "Grille d'écoute"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Observation continue pendant les présentations : plan respecté (accroche, informations, exclamation), intonation montante sur la question, volume sur l'exclamation, vocabulaire de l'unité réutilisé.")],
      [fp("Présentent individuellement."),
       fp("R.A. : présentation d'une minute avec question d'accroche, deux ou trois informations exactes et une exclamation finale.")],
      "Observation", "Grille"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7", "PRODUCTION ORALE", COLOR);
}
function lessonS7() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("PRÉSENTER UN ÉLÉMENT DE LA CULTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Le plan de ma présentation (une minute) :"),
    pr([run("1. L'accroche", { bold: true, color: C.SALMON, hl: true }), run(" — une question : « Connaissez-vous le salegy ? » (la voix monte ↗)")], { after: 40 }),
    pr([run("2. Les informations", { bold: true, color: C.SALMON, hl: true }), run(" — deux ou trois phrases exactes : ce que c'est, où, quand, comment.")], { after: 40 }),
    pr([run("3. L'exclamation finale", { bold: true, color: C.SALMON, hl: true }), run(" — « Quel rythme entraînant ! » (le volume augmente)")], { after: 80 }),
    sub("L'intonation, la musique de la phrase :"),
    p("• Phrase interrogative : la voix monte à la fin ↗ « Connaissez-vous le koba ? »"),
    p("• Phrase exclamative : le volume augmente ! « Quel délice ! »"),
    p("• Phrase déclarative : la voix descend doucement à la fin ↘", { after: 80 }),
    sub("Vocabulaire — pour présenter :"),
    mot("une accroche", "la phrase qui attire l'attention du public"),
    mot("l'intonation", "la musique de la voix : elle monte, elle descend"),
    mot("présenter", "faire connaître quelque chose au public"),
  ];
}

// ---------- S8 — Production écrite (1) ----------
function ficheS8() {
  const meta = META("Production écrite (1) : l'article informatif — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit un sujet culturel, rassemble ses idées et construit le plan de son article : titre, chapeau, corps.",
    "8 / 12", "texte de la séance 3 (modèle), brouillons, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : les trois parties de l'article de presse ? Le rôle de chacune ?")],
      [fp("Répondent."),
       fp("R.A. : le titre attire, le chapeau résume, le corps détaille.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Annoncez le projet : « Vous êtes journalistes ! Chacun va écrire un petit article pour faire connaître un élément de notre culture. » Listez des sujets possibles au tableau.")],
      [fp("Proposent des sujets."),
       fp("R.A. : le famadihana, le koba, la valiha, les paniers de ma région, l'afindrafindrao…")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui : les idées et le plan. La rédaction, ce sera à la prochaine séance. Un bon article se prépare avant de s'écrire ! »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Relisez le modèle (séance 3). Faites compléter la carte des questions au tableau : quoi ? qui ? où ? quand ? comment ? pourquoi ? — avec les réponses du texte sur le hira gasy.")],
      [fp("Complètent la carte des questions."),
       fp("R.A. : quoi ? un spectacle ; qui ? les mpihira gasy ; où ? à Mahamasina ; comment ? kabary, chants, danses…")],
      "Analyse du modèle", "Carte des questions"),
    stepRow(["4. Analyse"],
      [fp("Chacun choisit son sujet et remplit sa propre carte des questions au brouillon : au moins quatre réponses. Passez aider les hésitants.")],
      [fp("Remplissent leur carte d'idées.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Faites construire le plan en trois lignes : 1. mon titre (court) ; 2. mon chapeau (une ou deux phrases qui résument) ; 3. mon corps (deux paragraphes : décrire / expliquer pourquoi c'est important).")],
      [fp("Écrivent leur plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : chacun lit son plan à son voisin. Le voisin vérifie avec la liste : le titre donne-t-il envie ? le chapeau répond-il à qui-quoi-où ? Améliorez.")],
      [fp("Se relisent mutuellement, améliorent."),
       pAns("R.A. : titre : « Le koba, roi des marchés » ; chapeau : Sur tous les marchés de l'île, on vend ce gâteau enveloppé de feuilles de banane.", ["chapeau"], { size: SZ.FICHE })],
      "Binômes", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du brouillon : un sujet choisi, une carte d'au moins quatre réponses, un plan en trois lignes (titre, chapeau, deux paragraphes).")],
      [fp("Présentent leur brouillon."),
       fp("R.A. : plan complet et prêt pour la rédaction de la séance 9.")],
      "Contrôle des brouillons", "----"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS8() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON ARTICLE INFORMATIF (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Avant d'écrire, je prépare !"),
    pr([run("1. Je choisis mon sujet", { bold: true, color: C.SALMON, hl: true }), run(" : un plat, une danse, un rite, un objet d'artisanat de ma région.")], { after: 40 }),
    pr([run("2. Je remplis ma carte des questions", { bold: true, color: C.SALMON, hl: true }), run(" : quoi ? qui ? où ? quand ? comment ? pourquoi ?")], { after: 40 }),
    pr([run("3. J'écris mon plan en trois lignes", { bold: true, color: C.SALMON, hl: true }), run(" : le titre → le chapeau → le corps (deux paragraphes).")], { after: 80 }),
    sub("Mon plan d'article :"),
    p("• Le titre : court et accrocheur. Exemple : « Le koba, roi des marchés »."),
    p("• Le chapeau : une ou deux phrases qui résument (qui ? quoi ? où ?)."),
    p("• Paragraphe 1 : je décris (ce que c'est, comment c'est fait)."),
    p("• Paragraphe 2 : j'explique pourquoi c'est important pour notre culture.", { after: 60 }),
  ];
}

// ---------- S9 — Production écrite (2) ----------
function ficheS9() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son article informatif à partir de son plan, puis le relit et l'améliore avec la grille de relecture.",
    "9 / 12", "plans de la séance 8, grille de relecture au tableau, cahiers");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : les trois lignes du plan ? Que doit contenir le chapeau ?")],
      [fp("Répondent."),
       fp("R.A. : titre, chapeau, corps ; le chapeau résume : qui, quoi, où.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Chacun relit son plan. Question : par quelle partie commence-t-on la rédaction ? (Par le corps : le titre définitif vient souvent en dernier !)")],
      [fp("Relisent leur plan.")],
      "Mise en train", "Brouillons"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Rédaction aujourd'hui : huit à dix lignes. Puis relecture avec la grille : c'est le secret des bons journalistes. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rédigez collectivement les deux premières phrases d'un article exemple au tableau, en suivant un plan affiché. Montrez comment une idée de la carte devient une phrase complète.")],
      [fp("Participent à la rédaction collective.")],
      "Modélisation", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle : huit à dix lignes, au présent. Encouragez : une phrase passive au moins (« Le koba est vendu sur tous les marchés »), un connecteur (d'abord, ensuite, enfin).")],
      [fp("Rédigent leur premier jet.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Affichez la grille de relecture : 1. mes trois parties sont-elles là ? 2. mes verbes sont-ils bien conjugués ? 3. mes phrases commencent par une majuscule et finissent par un point ? 4. ai-je une phrase passive ? Chacun coche.")],
      [fp("Se relisent avec la grille, corrigent.")],
      "Auto-correction", "Grille de relecture"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : le voisin lit, souligne au crayon ce qu'il ne comprend pas, propose une amélioration. Puis chacun recopie une phrase améliorée.")],
      [fp("S'entre-corrigent, améliorent."),
       pAns("R.A. : premier jet : « le koba cest bon » → amélioré : « Le koba est un délicieux gâteau de riz et d'arachide. »", ["amélioré"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez les articles. Critères : structure (titre, chapeau, corps) /2 ; informations exactes et claires /1 ; conjugaison et accords /1 ; une phrase passive correcte /1. Total /5.")],
      [fp("Rendent leur article."),
       fp("R.A. : article de huit à dix lignes, en trois parties, au présent, avec une phrase passive.")],
      "Correction notée", "----"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS9() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 9", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON ARTICLE INFORMATIF (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("Je rédige (huit à dix lignes) :"),
    p("• J'écris au présent de l'indicatif."),
    p("• Je transforme chaque idée de ma carte en phrase complète."),
    p("• J'emploie au moins une phrase passive : « Le koba est vendu sur tous les marchés. »"),
    p("• Je relie mes idées : d'abord, ensuite, enfin.", { after: 80 }),
    sub("Ma grille de relecture :"),
    pr([run("1. ", { bold: true }), run("Mes trois parties", { bold: true, color: C.SALMON, hl: true }), run(" sont là : titre, chapeau, corps.")], { after: 40 }),
    pr([run("2. ", { bold: true }), run("Mes verbes", { bold: true, color: C.SALMON, hl: true }), run(" sont bien conjugués (1er groupe : -ent ; 2e groupe : -issent).")], { after: 40 }),
    pr([run("3. ", { bold: true }), run("Mes phrases", { bold: true, color: C.SALMON, hl: true }), run(" commencent par une majuscule et finissent par un point.")], { after: 40 }),
    pr([run("4. ", { bold: true }), run("Ma phrase passive", { bold: true, color: C.SALMON, hl: true }), run(" est bien accordée : « Les paniers sont tressés… »")], { after: 80 }),
    sub("Le conseil du journaliste :"),
    p("Le titre définitif s'écrit souvent en dernier, quand on sait exactement ce que dit l'article !", { after: 60 }),
  ];
}

// ---------- S10 — Lecture-fluidité ----------
function ficheS10() {
  const meta = META("Lecture-fluidité : lire un reportage",
    "À la fin de la séance, l'apprenant lit un extrait de reportage à haute voix, avec fluidité, en respectant la ponctuation et les groupes de souffle.",
    "10 / 12", "texte de la séance 3, chronomètre éventuel");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : que fait la voix devant un point d'interrogation ? Devant un point d'exclamation ? Devant une virgule ?")],
      [fp("Répondent."),
       fp("R.A. : elle monte ; elle devient plus forte ; elle fait une petite pause.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez un passage du texte deux fois : une fois sans respecter la ponctuation (tout d'un souffle), une fois correctement. Demandez : quelle lecture comprend-on le mieux ?")],
      [fp("Comparent."),
       fp("R.A. : la deuxième ; les pauses aident à comprendre.")],
      "Écoute comparée", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire comme un journaliste de radio — ni trop vite, ni trop lentement, en respirant aux bons endroits. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites marquer au crayon sur le texte : / pour la virgule (petite pause), // pour le point (grande pause). Faites entourer les points d'interrogation et d'exclamation.")],
      [fp("Marquent leur texte.")],
      "Préparation du texte", "Texte, crayons"),
    stepRow(["4. Analyse"],
      [fp("Lecture en écho : vous lisez une phrase avec la bonne intonation, la classe répète. Insistez sur la citation : « Mon grand-père chantait déjà » — on change légèrement la voix.")],
      [fp("Répètent en écho.")],
      "Lecture en écho", "Texte"),
    stepRow(["5. Synthèse"],
      [fp("Lecture en binômes : chacun lit un paragraphe, le voisin suit avec le doigt et note les oublis de pause. On échange les rôles.")],
      [fp("Lisent, s'écoutent, se corrigent.")],
      "Binômes", "Texte"),
    stepRow(["6. Entraînement"],
      [fp("Quelques volontaires lisent devant la classe « comme à la radio ». Applaudissements. Valorisez : fluidité, pauses, intonation de la citation.")],
      [fp("Lisent devant la classe."),
       fp("R.A. : lecture fluide, pauses aux virgules et aux points, voix changée pour la citation.")],
      "Lecture publique", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille d'observation : mots correctement lus, respect des pauses (/, //), intonation des phrases interrogatives et exclamatives, voix de la citation.")],
      [fp("Lisent individuellement."),
       fp("R.A. : lecture d'un paragraphe sans hésitation majeure, ponctuation respectée.")],
      "Observation", "Grille"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS10() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN REPORTAGE À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("La ponctuation guide ma voix :"),
    pr([run("• La virgule ( , )", { bold: true, color: C.SALMON, hl: true }), run(" → petite pause : je marque / sur mon texte.")], { after: 40 }),
    pr([run("• Le point ( . )", { bold: true, color: C.SALMON, hl: true }), run(" → grande pause, la voix descend : je marque //.")], { after: 40 }),
    pr([run("• Le point d'interrogation ( ? )", { bold: true, color: C.SALMON, hl: true }), run(" → la voix monte.")], { after: 40 }),
    pr([run("• Le point d'exclamation ( ! )", { bold: true, color: C.SALMON, hl: true }), run(" → la voix devient plus forte.")], { after: 40 }),
    pr([run("• Les guillemets « … »", { bold: true, color: C.SALMON, hl: true }), run(" → je change légèrement de voix : quelqu'un parle.")], { after: 80 }),
    sub("Pour lire comme un journaliste de radio :"),
    p("• Je prépare mon texte : je marque les pauses au crayon."),
    p("• Je lis par groupes de souffle, ni trop vite ni trop lentement."),
    p("• Je regarde mon public de temps en temps."),
    p("• Je m'entraîne : plus on lit, mieux on lit !", { after: 60 }),
  ];
}

// ---------- grande leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 1 : LA CULTURE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Les sept familles : ", { bold: true }), run("la nourriture, l'habitat, les vêtements, la langue, les danses et musiques, les rites, l'artisanat.", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("Les mots du patrimoine : ", { bold: true }), run("la culture, le patrimoine, un rite, transmettre, une coutume.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le texte informatif (l'article de presse) :"),
    p("But : informer avec exactitude. Structure : le titre (court, accrocheur) → le chapeau (résumé : qui ? quoi ? où ? quand ?) → le corps (paragraphes détaillés, connecteurs). La citation entre guillemets rend l'article vivant.", { after: 80 }),
    sub("3. Les verbes du 1er et du 2e groupe au présent :"),
    p("1er groupe (-er) : je danse, nous dansons, ils dansent. 2e groupe (-ir avec -issons) : je finis, nous finissons, ils finissent. Test : « nous » → -issons ? alors 2e groupe.", { after: 80 }),
    sub("4. La forme active et la forme passive :"),
    p("Active : le sujet agit (Les artisans tissent la soie). Passive : le sujet subit (La soie est tissée par les artisans). Verbe passif = être + participe passé ; le participe s'accorde avec le sujet ; le complément d'agent est introduit par « par ».", { after: 80 }),
    sub("5. Présenter à l'oral :"),
    p("Plan : accroche (question, voix qui monte) → informations exactes → exclamation finale (volume). L'intonation est la musique de la phrase.", { after: 80 }),
    sub("6. Écrire un article :"),
    p("Je prépare (carte des questions, plan en trois lignes), je rédige au présent, je relis avec la grille : parties, conjugaison, majuscules et points, phrase passive accordée.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces mots dans la bonne famille (nourriture, habitat, danses, artisanat) : 1. la case en ravinala 2. le salegy 3. le ravitoto 4. le panier tressé.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Conjugue au présent : 1. Les enfants (grandir) avec les contes. 2. Nous (choisir) un lamba. 3. Les femmes (tisser) la soie. 4. Vous (préparer) le romazava.")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Active ou passive ? 1. « Le kabary est écouté avec respect. » 2. « Les aînés transmettent les proverbes. » 3. « Les paniers sont tressés par les femmes. » 4. « Le public applaudit les danseurs. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Transforme au passif : 1. « Mon oncle sculpte cette statue. » 2. « Le village prépare la fête. » N'oublie pas l'accord du participe passé !")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris le chapeau (deux phrases) d'un article intitulé « La valiha, reine des instruments » : réponds à qui ? quoi ? où ?")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. habitat — 2. danses — 3. nourriture — 4. artisanat. (1 pt chacun)", ["artisanat"]),
    pAns("Ex.2 : 1. grandissent — 2. choisissons — 3. tissent — 4. préparez. (1 pt chacun)", ["choisissons"]),
    pAns("Ex.3 : 1. passive — 2. active — 3. passive — 4. active. (1 pt chacun)", ["passive"]),
    pAns("Ex.4 : 1. Cette statue est sculptée par mon oncle. — 2. La fête est préparée par le village. (2 pts chacune, accord compris)", ["est sculptée"]),
    pAns("Ex.5 : exemple : La valiha accompagne les fêtes malgaches depuis des siècles. Cet instrument de bambou est fabriqué par des artisans de tout le pays. (information + réponses à qui-quoi-où : 4 pts)", ["La valiha"]),
  ];
}

// ---------- Révision (S11) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s11", "SÉANCE 11 / 72", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION — UNITÉ 1 : LA CULTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite les sept familles de la culture, avec un exemple chacune."),
    pAns("R.A. : nourriture (romazava), habitat (maison de brique), vêtements (lamba), langue (kabary), danses (salegy), rites (famadihana), artisanat (panier tressé).", ["artisanat"]),
    p("2. Que veut dire « patrimoine » ? Que doivent faire les jeunes pour qu'il vive ?"),
    pAns("R.A. : l'héritage reçu des anciens ; le connaître, le respecter, le transmettre.", ["transmettre"]),
    p("3. Donne les trois parties de l'article de presse et le rôle de chacune."),
    pAns("R.A. : le titre attire, le chapeau résume (qui ? quoi ? où ? quand ?), le corps détaille.", ["chapeau"]),
    p("4. À quoi servent les guillemets dans un article ?"),
    pAns("R.A. : ils encadrent une citation : les paroles exactes d'une personne.", ["citation"]),
    p("5. Comment reconnaît-on un verbe du 2e groupe ?"),
    pAns("R.A. : infinitif en -ir ET -issons avec « nous » : finir → nous finissons.", ["-issons"]),
    p("6. Conjugue au présent : « nous (réussir) », « elles (danser) », « tu (choisir) »."),
    pAns("R.A. : nous réussissons, elles dansent, tu choisis.", ["réussissons"]),
    p("7. Quelle est la différence entre la forme active et la forme passive ?"),
    pAns("R.A. : à l'active, le sujet fait l'action ; à la passive, il la subit (être + participe passé).", ["subit"]),
    p("8. Transforme au passif : « Les enfants apprennent les chants. »"),
    pAns("R.A. : Les chants sont appris par les enfants.", ["sont appris"]),
    p("9. Avec quoi s'accorde le participe passé employé avec « être » ?"),
    pAns("R.A. : avec le sujet : les danses sont admirées.", ["le sujet"]),
    p("10. Donne le plan d'une présentation orale réussie."),
    pAns("R.A. : une accroche (question, voix qui monte), des informations exactes, une exclamation finale.", ["accroche"]),
  ];
}

// ---------- Test (S12) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s12", "SÉANCE 12 / 72", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 1 : LA CULTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : patrimoine — rite — artisanat — transmettre. 1. Le famadihana est un … important. 2. Les paniers tressés font partie de l'…. 3. La culture est notre … commun. 4. Les aînés doivent … leurs savoirs aux jeunes.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Conjugue au présent : 1. Nous (applaudir) les danseurs. 2. Les artisans (sculpter) le bois. 3. Tu (réfléchir) avant de parler. 4. Vous (danser) l'afindrafindrao.")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Active ou passive ? 1. « Le lamba est porté par la mariée. » 2. « Ma tante prépare le koba. » 3. « Les chants sont appris dès l'enfance. » 4. Souligne le complément d'agent de la phrase 1.")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Transforme au passif et accorde : 1. « Les femmes tissent les lambas. » 2. « Un aîné prononce le kabary. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige un mini-article (cinq à six lignes) sur un plat de ta région : un titre, un chapeau d'une phrase, un petit paragraphe avec une phrase passive.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : rite — artisanat — patrimoine — transmettre. (1 pt chacun)", ["patrimoine"]),
    pAns("Ex.2 : 1. applaudissons — 2. sculptent — 3. réfléchis — 4. dansez. (1 pt chacun)", ["applaudissons"]),
    pAns("Ex.3 : 1. passive — 2. active — 3. passive — 4. « par la mariée ». (1 pt chacun)", ["par la mariée"]),
    pAns("Ex.4 : 1. Les lambas sont tissés par les femmes. — 2. Le kabary est prononcé par un aîné. (2 pts chacune, accord compris)", ["sont tissés"]),
    pAns("Ex.5 : titre (1 pt), chapeau qui résume (1 pt), paragraphe clair au présent (1 pt), phrase passive correcte (1 pt).", ["phrase passive"]),
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
      "Je comprends un reportage sur la culture malgache.",
      "Je nomme les sept familles de la culture, avec des exemples.",
      "Je reconnais l'article de presse : titre, chapeau, corps.",
      "Je conjugue les verbes du 1er et du 2e groupe au présent.",
      "Je distingue la forme active et la forme passive.",
      "Je transforme une phrase active en phrase passive et j'accorde le participe.",
      "Je présente un élément de la culture avec la bonne intonation.",
      "Je rédige un petit article informatif et je le relis avec la grille.",
      "Je lis un reportage à haute voix en respectant la ponctuation.",
    ], "PROCHAINE ÉTAPE → UNITÉ 2 : LES TRADITIONS"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
