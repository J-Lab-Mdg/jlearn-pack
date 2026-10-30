// Français T7 — UNITÉ 6 — LA PÊCHE (10 leçons + révision + test) — Séances 61 à 72 / 84
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, discBadge, img, imgFloat, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "117864"; // vert-bleu — la pêche
const SHADE = "D1F2EB";
const TOTAL = 84;
const META = (title, slo, session, materials) => ({
  theme: "UNITÉ 6 — LA PÊCHE", title, slo,
  values: "courage, respect de la mer, solidarité des gens de mer", session, materials,
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

// passage de compréhension orale (S61)
function passageRakoto() {
  return box("PASSAGE D'ÉCOUTE — portrait « Rakoto, pêcheur de Mahajanga »", [
    p("Sur la plage de Mahajanga, tout le monde connaît Rakoto. C'est un homme de cinquante ans, grand et sec, au visage creusé par le soleil et le sel. Ses mains larges, couvertes de petites cicatrices, racontent trente années de mer."),
    p("Chaque nuit, bien avant l'aube, Rakoto pousse sa pirogue sur le sable, car les poissons mordent mieux au lever du jour. Il hisse la voile rapiécée, vérifie ses filets et ses lignes, puis disparaît dans le noir. Il rentre quand le soleil brûle, la pirogue chargée de capitaines et de thons que les mareyeuses attendent déjà."),
    p("La mer est généreuse, mais elle est exigeante. « Elle nourrit ma famille depuis trente ans, dit Rakoto, pourtant je ne la quitte jamais des yeux : celui qui ne respecte pas la mer ne vieillit pas sur la mer. » Le soir, il répare ses filets avec son fils, à qui il transmet son métier, ses secrets et sa prudence.", { after: 40 }),
  ]);
}
// texte de lecture (S63)
function texteRetourPeche() {
  return box("TEXTE DE LECTURE — description « Au retour de la pêche »", [
    pr([run("Au retour de la pêche", { bold: true, color: COLOR })], { after: 40 }),
    p("Vers dix heures, la plage s'éveille d'un coup. Au large, les voiles blanches grossissent une à une : les pirogues rentrent. Sur le sable, les mareyeuses se pressent déjà, leurs grandes bassines sur la tête."),
    p("La première pirogue glisse sur la vague et racle doucement le sable. Les pêcheurs sautent dans l'eau, qui leur monte jusqu'aux genoux, et tirent la coque à grands cris. Au fond de la pirogue, c'est un trésor qui brille : des capitaines argentés, des thons luisants, quelques crabes qui agitent encore leurs pinces."),
    p("Alors la plage devient un marché. On pèse, on discute, on rit. L'air sent le sel, le poisson frais et le feu de bois sur lequel grillent déjà les premières sardines. Les enfants courent entre les bassines, pendant que les anciens examinent les filets, car une maille déchirée se répare le jour même."),
    p("À midi, les pirogues reposent en ligne sur le sable, comme de grands poissons fatigués. La mer, elle, recommence à attendre ses pêcheurs.", { after: 40 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNITÉ 6 — LA PÊCHE", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("Celui qui respecte la mer vieillit sur la mer.", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    p([run("Dans cette unité, je vais apprendre à :", { bold: true })], { after: 60 }),
    p("• comprendre le portrait d'un pêcheur ;"),
    p("• nommer les gens, les outils et les produits de la pêche ;"),
    p("• lire une description vivante du retour de la pêche ;"),
    p("• relier mes idées avec les articulateurs logiques : car, donc, mais, pourtant ;"),
    p("• construire des phrases complexes ;"),
    p("• employer les pronoms relatifs simples : qui, que, où, dont ;"),
    p("• mener l'interview d'un professionnel ;"),
    p("• rédiger le portrait d'un métier ;"),
    p("• lire un portrait à haute voix.", { after: 120 }),
    pr([run("Type de texte de l'unité : ", { bold: true }),
        run("le texte DESCRIPTIF (le portrait)", { bold: true, color: COLOR }),
        run(" — décrire une personne : son physique, ses gestes, son caractère.")], { after: 80 }),
    pr([run("Valeurs à véhiculer : ", { bold: true }),
        run("courage, respect de la mer, solidarité des gens de mer.", { italic: true })], { after: 80 }),
  ];
}

// ---------- S61 — Compréhension orale ----------
function ficheS61() {
  const meta = META("Compréhension orale : portrait « Rakoto, pêcheur de Mahajanga »",
    "À la fin de la séance, l'apprenant dégage les informations essentielles d'un portrait entendu : physique, gestes quotidiens, caractère.",
    "1 / 12", "texte du passage, photographies (pirogue, filets, port), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel de l'unité 5 : citez trois verbes attributifs et les cinq sens de la description.")],
      [fp("Répondent."),
       fp("R.A. : être, sembler, devenir ; vue, ouïe, odorat, toucher, goût.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route", "(pré-écoute)"],
      [fp("Affichez les photographies : une pirogue, des filets, un port. Demandez : que fait un pêcheur, du soir au matin ? Quels dangers affronte-t-il ?")],
      [fp("Observent, répondent."),
       fp("R.A. : il part de nuit, il jette ses filets ; il affronte le vent, les vagues…")],
      "Brainstorming", "Photographies"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Compréhension orale : le portrait d'un pêcheur, Rakoto, pêcheur de Mahajanga. » Consigne : écouter sans écrire ; repérer son physique, ses gestes, son caractère.")],
      [fp("Écoutent la consigne.")], "Travail collectif", "----"),
    stepRow(["3. Observation", "(1re écoute)"],
      [fp("Lisez le portrait lentement, de manière expressive. Questions globales : qui est Rakoto ? Où vit-il ? Depuis combien de temps pêche-t-il ?")],
      [fp("Écoutent. Répondent."),
       fp("R.A. : un pêcheur de cinquante ans, à Mahajanga ; il pêche depuis trente ans.")],
      "Écoute active", "Texte du passage"),
    stepRow(["4. Analyse", "(2e écoute)"],
      [fp("Relisez. Tableau à trois colonnes : le physique (grand et sec, visage creusé, mains larges) ; les gestes (pousse la pirogue, hisse la voile, répare les filets) ; le caractère (courageux, prudent, généreux avec son fils).")],
      [fp("Remplissent les trois colonnes."),
       fp("R.A. : le portrait peint le corps, les gestes ET le caractère.")],
      "Questionnement progressif", "Tableau à colonnes"),
    stepRow(["5. Synthèse"],
      [fp("Faites expliquer la phrase de Rakoto : « Celui qui ne respecte pas la mer ne vieillit pas sur la mer. » Faites remarquer la transmission : il apprend le métier à son fils.")],
      [fp("Expliquent, récapitulent."),
       fp("R.A. : la mer nourrit, mais elle est dangereuse : la prudence sauve ; le métier se transmet de père en fils.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : redites le portrait en trois phrases : son physique, sa journée, son caractère.")],
      [fp("Reformulent."),
       pAns("R.A. : Rakoto est un pêcheur grand et sec, au visage creusé par le sel. Il part avant l'aube et rentre quand le soleil brûle. Il est courageux mais toujours prudent.", ["prudent"], { size: SZ.FICHE })],
      "Binômes", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Décris le physique de Rakoto (deux détails)."),
       fp("2. Pourquoi part-il avant l'aube ?"),
       fp("3. Que font les mareyeuses ?"),
       fp("4. Explique la phrase : « Celui qui ne respecte pas la mer ne vieillit pas sur la mer. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. grand et sec ; visage creusé ; mains couvertes de cicatrices — 2. les poissons mordent mieux au lever du jour — 3. elles attendent le poisson pour le vendre — 4. la prudence est la première qualité du marin.", ["mareyeuses"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61", "COMPRÉHENSION ORALE", COLOR);
}
function lessonS61() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 61", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("COMPRENDRE UN PORTRAIT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    passageRakoto(),
    p("", { after: 80 }),
    sub("1. Le portrait : décrire une personne en trois touches"),
    exLine([run("Le physique", { bold: true, color: C.SALMON, hl: true }), run(" : grand et sec, le visage creusé par le soleil et le sel.")],
      "des détails qui racontent une vie"),
    exLine([run("Les gestes", { bold: true, color: C.SALMON, hl: true }), run(" : il pousse sa pirogue, hisse la voile, répare ses filets.")],
      "les gestes quotidiens peignent le métier"),
    exLine([run("Le caractère", { bold: true, color: C.SALMON, hl: true }), run(" : courageux, prudent, fidèle à la mer.")],
      "souvent révélé par une parole : « je ne la quitte jamais des yeux »", { after: 80 }),
    sub("2. Vocabulaire — mes premiers mots de la mer"),
    mot("la pirogue", "la barque légère du pêcheur, poussée sur le sable"),
    mot("hisser la voile", "monter la voile en tirant"),
    mot("la mareyeuse", "celle qui achète le poisson au retour pour le revendre"),
    mot("une cicatrice", "la marque laissée sur la peau par une blessure"),
    p("", { after: 40 }),
    sub("Exercice — j'ai bien écouté :"),
    p("1. Complète : « Celui qui ne respecte pas la mer ………. »"),
    p("2. Relève un détail du physique, un geste et un trait de caractère de Rakoto.", { after: 60 }),
  ];
}

// ---------- S62 — Lexique ----------
function ficheS62() {
  const meta = META("Lexique : les mots de la pêche",
    "À la fin de la séance, l'apprenant nomme les gens, les outils, les embarcations et les produits de la pêche, et les emploie dans des phrases.",
    "2 / 12", "étiquettes de mots, photographies, tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les trois touches du portrait ?")],
      [fp("Répondent."),
       fp("R.A. : le physique, les gestes, le caractère.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Jeu du port : chaque apprenant cite un mot qui fait penser à la pêche. Notez tout au tableau.")],
      [fp("Citent des mots."),
       fp("R.A. : pirogue, filet, poisson, mer, marché…")],
      "Tour de classe", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lexique : les mots de la pêche. Nous allons organiser le port ! »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Quatre colonnes : les gens — les embarcations — les outils — les produits. Faites classer et complétez : pêcheur, mareyeuse, patron de pêche / pirogue, boutre, chalutier / filet, ligne, hameçon, nasse, harpon / capitaine, thon, crevette, crabe, poulpe.")],
      [fp("Classent les étiquettes."),
       fp("R.A. : la nasse est un piège tressé ; le chalutier est le grand bateau des sociétés de pêche.")],
      "Manipulation", "Tableau à colonnes"),
    stepRow(["4. Analyse"],
      [fp("Enrichissez : la marée (haute, basse), le large, la côte. Distinguez la pêche traditionnelle (pirogue, près de la côte) et la pêche industrielle (chalutiers, crevettes exportées). Rappel de l'unité 2 : sur certains lacs et rivages, des fady règlent la pêche ; et partout, on laisse grandir les petits poissons.")],
      [fp("Notent, font le lien avec les fady."),
       fp("R.A. : respecter la mer, c'est aussi respecter les coutumes et ne pas tout prendre.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites recopier le tableau des quatre familles et les mots de la mer (marée, large, côte).")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("La Martinière : « Je donne l'indice, vous écrivez le mot. » Le crochet au bout de la ligne ! Celle qui revend le poisson ! Le piège tressé ! Puis une phrase avec « marée » en binômes.")],
      [fp("Écrivent sur l'ardoise. Rédigent."),
       pAns("R.A. : l'hameçon — la mareyeuse — la nasse ; exemple : À marée basse, les enfants ramassent les crabes.", ["marée"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Classe : la nasse, le thon, la mareyeuse, le boutre."),
       fp("2. Quelle est la différence entre la pêche traditionnelle et la pêche industrielle ?"),
       fp("3. Pourquoi laisse-t-on grandir les petits poissons ?"),
       fp("4. Écris une phrase avec « le large ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. outil — produit — gens — embarcation — 2. la pirogue près de la côte / les chalutiers des sociétés — 3. pour que la mer reste généreuse demain — 4. exemple : Les pirogues partent au large avant l'aube.", ["au large"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62", "VOCABULAIRE (LEXIQUE)", COLOR);
}
function lessonS62() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("VOCABULAIRE (LEXIQUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES MOTS DE LA PÊCHE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Vocabulaire — les quatre familles du port"),
    mot("les gens", "le pêcheur, la mareyeuse, le patron de pêche"),
    mot("les embarcations", "la pirogue, le boutre, le chalutier"),
    mot("les outils", "le filet, la ligne, l'hameçon, la nasse, le harpon"),
    mot("les produits", "le capitaine, le thon, la crevette, le crabe, le poulpe"),
    p("", { after: 60 }),
    sub("2. Vocabulaire — les mots de la mer"),
    mot("la marée", "la mer qui monte (marée haute) et qui descend (marée basse)"),
    mot("le large", "loin de la côte, en pleine mer"),
    mot("la pêche traditionnelle", "en pirogue, près de la côte, pour nourrir la famille et le marché"),
    mot("la pêche industrielle", "les chalutiers des sociétés ; nos crevettes partent vers le monde entier"),
    p("", { after: 60 }),
    sub("3. Respecter la mer"),
    exTitre(),
    exLine([run("Sur certains rivages, des "), run("fady", { bold: true, color: C.SALMON, hl: true }), run(" règlent la pêche.")],
      "souviens-toi de l'unité 2 : les coutumes protègent souvent la nature"),
    exLine([run("On laisse grandir "), run("les petits poissons", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "qui prend tout aujourd'hui n'aura rien demain", { after: 80 }),
    sub("4. On dit… / À éviter…"),
    pr([run("On dit : ", { bold: true, color: C.GREEN }), run("« pêcher du poisson »", { bold: true })], { after: 40 }),
    pr([run("À éviter : ", { bold: true, color: C.RED }), run("« chasser du poisson »   "), run("[on chasse sur terre ; on pêche dans l'eau]", { italic: true, color: C.GRAY, size: 26 })], { after: 80 }),
    sub("Exercice — je classe :"),
    p("Mets chaque mot dans sa famille : le harpon — la crevette — le boutre — la mareyeuse — la nasse — le poulpe.", { after: 60 }),
  ];
}

// ---------- S63 — Compréhension écrite ----------
function ficheS63() {
  const meta = META("Compréhension écrite : « Au retour de la pêche » — le texte descriptif",
    "À la fin de la séance, l'apprenant lit une description de scène, suit son organisation dans l'espace et le temps et relève les images.",
    "3 / 12", "texte de lecture (un exemplaire par binôme), tableau");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez un mot de chaque famille du port.")],
      [fp("Répondent."),
       fp("R.A. : pêcheur, pirogue, filet, thon.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : qu'est-ce qui se passe sur la plage quand les pirogues rentrent ? Qui attend ? Que fait-on du poisson ?")],
      [fp("Racontent."),
       fp("R.A. : les mareyeuses attendent ; on pèse, on vend, on grille…")],
      "Échange oral", "----"),
    stepRow(["2. Présentation"],
      [fp("Distribuez le texte. Annoncez : « Compréhension écrite : une description de scène, Au retour de la pêche. »")],
      [fp("Reçoivent le texte.")], "Travail en binômes", "Texte de lecture"),
    stepRow(["3. Observation", "(lecture silencieuse)"],
      [fp("Lecture silencieuse. Questions globales : quel moment décrit le texte ? De quelle heure à quelle heure ?")],
      [fp("Lisent. Répondent."),
       fp("R.A. : le retour des pirogues, de dix heures à midi.")],
      "Lecture silencieuse", "Texte"),
    stepRow(["4. Analyse"],
      [fp("Faites suivre l'organisation : dans l'espace (au large → sur le sable → au fond de la pirogue) et dans le temps (vers dix heures → alors → à midi). Faites relever les images : « un trésor qui brille », « comme de grands poissons fatigués », et les sens (l'air sent le sel…).")],
      [fp("Relèvent, classent."),
       fp("R.A. : la description avance comme une caméra et se termine par une image.")],
      "Questionnement progressif", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Faites formuler : décrire une scène vivante, c'est organiser l'espace et le temps, convoquer les sens et offrir des images. Faites expliquer : « une maille déchirée se répare le jour même ».")],
      [fp("Formulent, expliquent."),
       fp("R.A. : les gens de mer sont prévoyants : demain, il faudra repartir.")],
      "Travail collectif", "----"),
    stepRow(["6. Entraînement"],
      [fp("En binômes : relevez une notation de l'ouïe, une de l'odorat et une comparaison.")],
      [fp("Relèvent, présentent."),
       pAns("R.A. : les grands cris des pêcheurs ; l'air sent le sel et le poisson frais ; « comme de grands poissons fatigués ».", ["comparaison"], { size: SZ.FICHE })],
      "Binômes", "Texte"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Dans quel ordre la caméra avance-t-elle ? (trois lieux)"),
       fp("2. Que trouve-t-on au fond de la pirogue ?"),
       fp("3. Pourquoi la plage devient-elle un marché ?"),
       fp("4. Recopie la comparaison finale.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. au large → sur le sable → au fond de la pirogue — 2. capitaines, thons, crabes — 3. on pèse, on discute, on vend le poisson — 4. « comme de grands poissons fatigués ».", ["au large"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63", "COMPRÉHENSION ÉCRITE", COLOR);
}
function lessonS63() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("COMPRÉHENSION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("DÉCRIRE UNE SCÈNE VIVANTE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    texteRetourPeche(),
    p("", { after: 80 }),
    sub("1. La description avance comme une caméra"),
    exLine([run("Dans l'espace : "), run("au large → sur le sable → au fond de la pirogue", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "du plus loin au plus près"),
    exLine([run("Dans le temps : "), run("vers dix heures → alors → à midi", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "la scène vit, elle bouge", { after: 80 }),
    sub("2. Les sens et les images font vivre la scène"),
    exLine([run("L'air "), run("sent le sel et le poisson frais", { bold: true, color: C.SALMON, hl: true }), run(".")], "l'odorat"),
    exLine([run("Au fond de la pirogue, "), run("c'est un trésor qui brille", { bold: true, color: C.SALMON, hl: true }), run(".")], "l'image transforme le poisson en trésor"),
    exLine([run("Les pirogues reposent "), run("comme de grands poissons fatigués", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "la comparaison finale ferme la scène en beauté", { after: 80 }),
    sub("Exercice — je retrouve dans le texte :"),
    p("1. Numérote les trois lieux de la caméra. — 2. Relève une notation d'ouïe et une d'odorat. — 3. Encadre les deux images (trésor, poissons fatigués).", { after: 60 }),
  ];
}

// ---------- S64 — Grammaire : les articulateurs logiques ----------
function ficheS64() {
  const meta = META("Grammaire : les articulateurs logiques",
    "À la fin de la séance, l'apprenant relie ses idées avec les articulateurs logiques : car, donc, mais, pourtant, c'est pourquoi, ainsi.",
    "4 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quels mots organisaient le temps dans nos textes ? (unités 1 et 2)")],
      [fp("Répondent."),
       fp("R.A. : d'abord, ensuite, enfin, puis…")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Rakoto part avant l'aube. Les poissons mordent au lever du jour. » Demandez : quel petit mot peut relier ces deux idées ?")],
      [fp("Proposent."),
       fp("R.A. : « car » : Rakoto part avant l'aube CAR les poissons mordent au lever du jour.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les articulateurs logiques — les mots qui relient les idées. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Il part tôt CAR les poissons mordent à l'aube. — La mer est mauvaise, DONC les pirogues restent au port. — La mer nourrit, MAIS elle est exigeante. — Il est fatigué, POURTANT il répare ses filets. Faites trouver le rôle de chaque mot.")],
      [fp("Associent chaque articulateur à son rôle."),
       fp("R.A. : car = la cause ; donc = la conséquence ; mais / pourtant = l'opposition.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Complétez la famille : parce que (cause), c'est pourquoi, ainsi (conséquence), cependant (opposition). Montrez la nuance : « pourtant » marque une opposition plus forte, presque étonnante.")],
      [fp("Notent, construisent des exemples."),
       fp("R.A. : La maille est déchirée, c'est pourquoi on la répare le jour même.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le tableau des articulateurs en trois familles : cause, conséquence, opposition.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : reliez. « Le vent se lève … les pêcheurs rentrent. » — « La pirogue est vieille … elle tient la mer. » — « Il vend bien son poisson … il est frais. »")],
      [fp("Relient, justifient."),
       pAns("R.A. : donc (c'est pourquoi) — mais (pourtant) — car (parce qu'il).", ["donc"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Relie avec car, donc ou pourtant : « La mer est dangereuse … Rakoto la respecte. »"),
       fp("2. « Il fait nuit … les pirogues partent déjà. »"),
       fp("3. Indique la famille de chaque articulateur employé.")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. donc (conséquence) — 2. pourtant (opposition) — 3. selon les choix justifiés.", ["conséquence"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS64() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 64", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES ARTICULATEURS LOGIQUES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Trois familles pour relier les idées"),
    exTitre(),
    exLine([run("La cause : "), run("car, parce que", { bold: true, color: C.SALMON, hl: true }), run(" — Rakoto part tôt "), run("car", { bold: true }), run(" les poissons mordent à l'aube.")],
      "je donne la raison"),
    exLine([run("La conséquence : "), run("donc, c'est pourquoi, ainsi", { bold: true, color: C.SALMON, hl: true }), run(" — La mer est mauvaise, "), run("donc", { bold: true }), run(" les pirogues restent au port.")],
      "je donne le résultat"),
    exLine([run("L'opposition : "), run("mais, pourtant, cependant", { bold: true, color: C.SALMON, hl: true }), run(" — La mer nourrit, "), run("mais", { bold: true }), run(" elle est exigeante.")],
      "je montre le contraste", { after: 80 }),
    sub("2. La nuance de « pourtant »"),
    exLine([run("Il est épuisé, "), run("pourtant", { bold: true, color: C.SALMON, hl: true }), run(" il répare encore ses filets.")],
      "une opposition forte, presque étonnante : on ne s'y attendait pas", { after: 80 }),
    sub("3. Cause ou conséquence ? Le sens décide"),
    exLine([run("Il part tôt "), run("car", { bold: true, color: C.SALMON, hl: true }), run(" les poissons mordent.")], "après car : la raison"),
    exLine([run("Les poissons mordent, "), run("donc", { bold: true, color: C.SALMON, hl: true }), run(" il part tôt.")],
      "après donc : le résultat — les mêmes idées, reliées dans les deux sens !", { after: 80 }),
    sub("Exercice — relie avec le bon articulateur :"),
    p("1. Le vent se lève ……… les pêcheurs rentrent. — 2. La pirogue est vieille ……… elle tient la mer. — 3. Son poisson se vend bien ……… il est frais. — 4. Il fait encore nuit ……… les pirogues partent déjà.", { after: 60 }),
  ];
}

// ---------- S65 — Grammaire : la phrase complexe ----------
function ficheS65() {
  const meta = META("Grammaire : la phrase complexe",
    "À la fin de la séance, l'apprenant distingue phrase simple et phrase complexe et construit des phrases complexes par juxtaposition, coordination et subordination.",
    "5 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : citez un articulateur de cause, un de conséquence, un d'opposition.")],
      [fp("Répondent."),
       fp("R.A. : car ; donc ; pourtant.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « La pirogue glisse. » / « La pirogue glisse et les pêcheurs sautent dans l'eau. » Faites compter les verbes conjugués dans chaque phrase.")],
      [fp("Comptent."),
       fp("R.A. : un verbe, puis deux verbes : la seconde phrase est « double ».")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : la phrase complexe — une phrase qui contient plusieurs verbes conjugués. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Les pirogues rentrent, les mareyeuses se pressent. — La plage s'anime et le marché commence. — Les pêcheurs rentrent quand le soleil brûle. Faites compter les verbes et observer les liens : virgule, « et », « quand ».")],
      [fp("Comptent, observent les trois liens."),
       fp("R.A. : chaque phrase a deux verbes conjugués : deux propositions.")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Nommez les trois constructions : la juxtaposition (virgule, deux-points), la coordination (et, mais, donc, car), la subordination (quand, parce que, qui, que…). Méthode : je compte les verbes conjugués → je repère le lien.")],
      [fp("Notent la méthode et les trois constructions."),
       fp("R.A. : virgule = juxtaposées ; et/mais = coordonnées ; quand/parce que = subordonnée.")],
      "Questionnement", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : phrase simple (un verbe conjugué) / phrase complexe (plusieurs) ; les trois constructions avec un exemple chacune.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : simple ou complexe ? « Les voiles blanches grossissent au large. » — « On pèse, on discute, on rit. » — « Rakoto sourit parce que la pêche est bonne. » Puis : reliez « La mer se calme. Les pirogues repartent. » des trois façons.")],
      [fp("Analysent, construisent."),
       pAns("R.A. : simple — complexe (juxtaposition) — complexe (subordination) ; La mer se calme, les pirogues repartent. / … et les pirogues repartent. / Quand la mer se calme, les pirogues repartent.", ["complexe"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Souligne les verbes conjugués : « Les enfants courent pendant que les anciens examinent les filets. »"),
       fp("2. Cette phrase est-elle simple ou complexe ? Pourquoi ?"),
       fp("3. Construis une phrase complexe avec « et », une avec « parce que ».")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. courent, examinent — 2. complexe : deux verbes conjugués — 3. réponses libres correctes.", ["deux verbes"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(65, TOTAL, meta, rows, "s65", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS65() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 65", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LA PHRASE COMPLEXE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je compte les verbes conjugués"),
    exTitre(),
    exLine([run("La pirogue "), run("glisse", { bold: true, color: C.SALMON, hl: true }), run(" sur la vague.")],
      "un seul verbe conjugué → phrase SIMPLE"),
    exLine([run("La pirogue "), run("glisse", { bold: true, color: C.SALMON, hl: true }), run(" et les pêcheurs "), run("sautent", { bold: true, color: C.SALMON, hl: true }), run(" dans l'eau.")],
      "deux verbes conjugués → phrase COMPLEXE", { after: 80 }),
    sub("2. Trois façons de construire une phrase complexe"),
    exLine([run("La juxtaposition", { bold: true, color: C.SALMON, hl: true }), run(" : On pèse, on discute, on rit.")],
      "une simple virgule relie les propositions"),
    exLine([run("La coordination", { bold: true, color: C.SALMON, hl: true }), run(" : La plage s'anime et le marché commence.")],
      "et, mais, donc, car font le pont"),
    exLine([run("La subordination", { bold: true, color: C.SALMON, hl: true }), run(" : Les pêcheurs rentrent quand le soleil brûle.")],
      "quand, parce que, qui, que… : une proposition dépend de l'autre", { after: 80 }),
    sub("3. La même idée, trois constructions"),
    exLine([run("La mer se calme, les pirogues repartent.")], "juxtaposées"),
    exLine([run("La mer se calme "), run("et", { bold: true, color: C.SALMON, hl: true }), run(" les pirogues repartent.")], "coordonnées"),
    exLine([run("Quand", { bold: true, color: C.SALMON, hl: true }), run(" la mer se calme, les pirogues repartent.")], "subordonnée — à toi de choisir la musique de ta phrase !", { after: 80 }),
    sub("Exercice — simple ou complexe ?"),
    p("1. Les voiles blanches grossissent au large. — 2. On pèse, on discute, on rit. — 3. Rakoto sourit parce que la pêche est bonne. — 4. Relie des trois façons : « Le vent tombe. Les pirogues partent. »", { after: 60 }),
  ];
}

// ---------- S66 — Grammaire : les pronoms relatifs simples ----------
function ficheS66() {
  const meta = META("Grammaire : les pronoms relatifs simples — qui, que, où, dont",
    "À la fin de la séance, l'apprenant relie deux phrases avec le pronom relatif simple qui convient et évite les répétitions.",
    "6 / 12", "corpus de phrases, ardoises");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les trois constructions de la phrase complexe ?")],
      [fp("Répondent."),
       fp("R.A. : juxtaposition, coordination, subordination.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « Rakoto est un pêcheur. Tout le port connaît ce pêcheur. » Demandez : comment éviter la répétition ?")],
      [fp("Proposent."),
       fp("R.A. : Rakoto est un pêcheur QUE tout le port connaît.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Grammaire : les pronoms relatifs simples — qui, que, où, dont. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Corpus : Le pêcheur QUI rentre est fatigué. — Le poisson QUE j'achète est frais. — La plage OÙ accostent les pirogues s'anime. — La pirogue DONT la voile est rapiécée tient la mer. Faites chercher le rôle de chaque relatif.")],
      [fp("Observent, cherchent les rôles."),
       fp("R.A. : qui = sujet ; que = COD ; où = lieu (ou temps) ; dont = complément avec « de ».")],
      "Corpus", "Tableau"),
    stepRow(["4. Analyse"],
      [fp("Méthode du choix : je remets la deuxième phrase à plat. « Le pêcheur rentre » → le pêcheur est sujet → QUI. « J'achète le poisson » → COD → QUE. « La voile DE la pirogue » → avec de → DONT. Attention : que + voyelle = qu' ; qui ne s'élide jamais.")],
      [fp("Appliquent la méthode, notent les pièges."),
       fp("R.A. : l'homme qu'on attend (que + on) ; l'homme qui arrive (jamais qu'arrive).")],
      "Méthode guidée", "Tableau"),
    stepRow(["5. Synthèse"],
      [fp("Trace écrite : le tableau qui/que/où/dont avec le rôle et un exemple chacun.")],
      [fp("Recopient.")],
      "Travail individuel", "Cahiers"),
    stepRow(["6. Entraînement"],
      [fp("Ardoises : complétez. « Le filet … il répare est déchiré. » — « Le port … je suis né sent le sel. » — « Un métier … il est fier. » — « La mareyeuse … attend sur le sable. »")],
      [fp("Complètent, justifient."),
       pAns("R.A. : qu'(e) — où — dont — qui.", ["dont"], { size: SZ.FICHE })],
      "La Martinière", "Ardoises"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("1. Relie avec un relatif : « La mer nourrit la famille. Rakoto respecte la mer. »"),
       fp("2. Complète : « Le village … nous passons les vacances est un port. »"),
       fp("3. Complète : « Un pêcheur … le courage est connu. »")],
      [fp("Répondent individuellement."),
       pAns("R.A. : 1. La mer que Rakoto respecte nourrit la famille. — 2. où — 3. dont.", ["que"], { size: SZ.FICHE })],
      "Travail individuel", "----"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66", "GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR);
}
function lessonS66() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("GRAMMAIRE (FONCTIONNEMENT DE LA LANGUE)", COLOR),
    p("", { after: 40 }),
    p([run("LES PRONOMS RELATIFS SIMPLES : QUI, QUE, OÙ, DONT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Relier deux phrases sans répéter"),
    pr([run("Rakoto est un pêcheur. Tout le port connaît ce pêcheur.  →  Rakoto est un pêcheur ", { bold: true }), run("que", { bold: true, color: C.SALMON, hl: true }), run(" tout le port connaît.", { bold: true })], { after: 60 }),
    sub("2. Les quatre relatifs simples"),
    exLine([run("QUI", { bold: true, color: C.SALMON, hl: true }), run(" = sujet : Le pêcheur "), run("qui rentre", { bold: true }), run(" est fatigué.")],
      "le pêcheur rentre : il fait l'action"),
    exLine([run("QUE", { bold: true, color: C.SALMON, hl: true }), run(" = COD : Le poisson "), run("que j'achète", { bold: true }), run(" est frais.")],
      "j'achète le poisson : il subit l'action"),
    exLine([run("OÙ", { bold: true, color: C.SALMON, hl: true }), run(" = le lieu ou le temps : La plage "), run("où accostent les pirogues", { bold: true }), run(".")],
      "aussi pour le temps : le jour où la mer s'est fâchée"),
    exLine([run("DONT", { bold: true, color: C.SALMON, hl: true }), run(" = complément avec « de » : La pirogue "), run("dont la voile est rapiécée", { bold: true }), run(".")],
      "la voile DE la pirogue → dont", { after: 80 }),
    sub("3. Le piège de l'élision"),
    exLine([run("l'homme "), run("qu'", { bold: true, color: C.SALMON, hl: true }), run("on attend")], "que + voyelle = qu'"),
    exLine([run("l'homme "), run("qui", { bold: true, color: C.SALMON, hl: true }), run(" arrive")], "qui ne s'élide JAMAIS : jamais « qu'arrive » !", { after: 80 }),
    sub("Exercice — complète avec qui, que, où, dont :"),
    p("1. Le filet ……… il répare est déchiré. — 2. Le port ……… je suis né sent le sel. — 3. Un métier ……… il est fier. — 4. La mareyeuse ……… attend sur le sable.", { after: 60 }),
  ];
}

// ---------- S67 — Production orale ----------
function ficheS67() {
  const meta = META("Production orale : l'interview d'un pêcheur",
    "À la fin de la séance, l'apprenant prépare et joue une interview : questions variées, formules de politesse, écoute des réponses.",
    "7 / 12", "plan au tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : complétez : « le métier … il est fier », « la plage … il travaille ».")],
      [fp("Répondent."),
       fp("R.A. : dont ; où.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : si Rakoto entrait dans la classe, quelles questions voudriez-vous lui poser ? Notez-les brutes au tableau.")],
      [fp("Proposent des questions.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production orale : l'interview d'un pêcheur, jouée en binômes — un journaliste, un pêcheur. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Structurez l'interview : 1. saluer et se présenter ; 2. poser des questions variées (métier, journée, dangers, fierté) avec est-ce que / comment / pourquoi ; 3. remercier. Rappel : écouter la réponse avant la question suivante !")],
      [fp("Notent le plan et les types de questions.")],
      "Travail collectif", "Plan au tableau"),
    stepRow(["4. Analyse", "(préparation)"],
      [fp("En binômes : préparer cinq questions et imaginer les réponses à partir du portrait de la séance 61.")],
      [fp("Préparent questions et réponses.")],
      "Binômes", "Brouillons"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Les binômes jouent l'interview. Grille d'écoute : politesse ? questions variées ? réponses écoutées ?")],
      [fp("Jouent, évaluent."),
       pAns("R.A. : Bonjour, monsieur, merci de nous recevoir. Pourquoi partez-vous si tôt ? — Parce que les poissons mordent à l'aube. — Et quel est le moment dont vous êtes le plus fier ?", ["Pourquoi"], { size: SZ.FICHE })],
      "Jeux de rôles", "Grille d'écoute"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : variez les débuts de questions ; bannissez les questions fermées en série (oui/non).")],
      [fp("Améliorent leurs questions.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. salutations et remerciements — 2. cinq questions variées — 3. écoute réelle des réponses — 4. voix claire et polie.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67", "PRODUCTION ORALE", COLOR);
}
function lessonS67() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ORALE", COLOR),
    p("", { after: 40 }),
    p([run("L'INTERVIEW D'UN PÊCHEUR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Le plan de mon interview"),
    exLine([run("Je salue et je me présente", { bold: true, color: C.SALMON, hl: true }), run(".")], "« Bonjour monsieur, merci de nous recevoir. »"),
    exLine([run("Je pose des questions variées", { bold: true, color: C.SALMON, hl: true }), run(" : le métier, la journée, les dangers, la fierté.")],
      "comment ? pourquoi ? depuis quand ? qu'est-ce que… ?"),
    exLine([run("Je remercie", { bold: true, color: C.SALMON, hl: true }), run(" pour finir.")], "« Merci d'avoir partagé votre expérience ! »", { after: 80 }),
    sub("2. La règle d'or : écouter la réponse"),
    exLine([run("Ma question suivante peut "), run("rebondir", { bold: true, color: C.SALMON, hl: true }), run(" sur la réponse.")],
      "« Vous parlez des tempêtes… laquelle vous a le plus marqué ? »"),
    exLine([run("J'évite les questions "), run("fermées", { bold: true, color: C.SALMON, hl: true }), run(" en série.")],
      "« Aimez-vous la mer ? — Oui. » : l'interview s'arrête ! préfère « pourquoi aimez-vous la mer ? »", { after: 80 }),
    sub("3. Un modèle de questions"),
    pr([run("« Depuis quand êtes-vous pêcheur ? Comment se passe votre journée ? Quel danger craignez-vous le plus ? Quel est le moment dont vous êtes le plus fier ? Que conseillez-vous aux jeunes ? »", { italic: true })], { after: 80 }),
    sub("Exercice — prépare ton interview :"),
    p("Écris cinq questions variées pour un pêcheur (ou un autre professionnel de ta région) : commence chacune par un mot interrogatif différent.", { after: 60 }),
  ];
}

// ---------- S68 — Production écrite (1) ----------
function ficheS68() {
  const meta = META("Production écrite (1) : le portrait d'un métier — les idées et le plan",
    "À la fin de la séance, l'apprenant choisit un professionnel de sa région et construit le plan de son portrait : physique, gestes, caractère.",
    "8 / 12", "tableau, brouillons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : quelles sont les trois touches du portrait de Rakoto ?")],
      [fp("Répondent."),
       fp("R.A. : le physique, les gestes, le caractère.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Demandez : quels métiers admirez-vous dans votre quartier ? Listez : la marchande, le forgeron, la couturière, le charpentier, la sage-femme…")],
      [fp("Proposent des métiers.")],
      "Brainstorming", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Production écrite : le portrait d'un professionnel que vous admirez. Aujourd'hui : les idées et le plan. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Construisez l'exemple collectif : la couturière du quartier. Trois colonnes : physique (petites lunettes, doigts rapides) ; gestes (mesure, coupe, pique à la machine) ; caractère (patiente, précise, souriante). Ajoutez une parole : « Un vêtement bien cousu dure dix ans. »")],
      [fp("Participent à l'exemple collectif.")],
      "Exemple collectif", "Tableau"),
    stepRow(["4. Analyse", "(travail individuel)"],
      [fp("Chacun choisit SON professionnel et remplit ses trois colonnes + une parole entendue (ou imaginée avec respect).")],
      [fp("Remplissent leur plan.")],
      "Travail individuel", "Brouillons"),
    stepRow(["5. Synthèse"],
      [fp("Mise en commun : quelques plans sont lus. La classe vérifie : les trois touches ? des détails précis plutôt que des généralités ?")],
      [fp("Lisent, vérifient.")],
      "Mise en commun", "----"),
    stepRow(["6. Entraînement"],
      [fp("Chacun prépare une phrase avec un relatif : « C'est un homme qui… », « C'est un métier dont… ».")],
      [fp("Préparent leur phrase."),
       pAns("R.A. : C'est une femme dont les doigts ne s'arrêtent jamais.", ["dont"], { size: SZ.FICHE })],
      "Travail individuel", "Brouillons"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Vérification du plan : 1. physique (deux détails) — 2. gestes du métier (trois) — 3. caractère (deux traits) — 4. une parole et une phrase avec relatif prêtes.")],
      [fp("S'auto-évaluent, corrigent.")],
      "Auto-évaluation", "Plans"),
  ];
  return fiche(68, TOTAL, meta, rows, "s68", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS68() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 68", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON PORTRAIT D'UN MÉTIER (1) : LES IDÉES ET LE PLAN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Avant d'écrire : trois gestes"),
    exLine([run("Je choisis un professionnel que j'admire", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "la marchande, le forgeron, la couturière, le charpentier…"),
    exLine([run("Je remplis mes trois colonnes", { bold: true, color: C.SALMON, hl: true }), run(" : physique, gestes, caractère.")],
      "des détails précis, pas des généralités"),
    exLine([run("Je note une parole", { bold: true, color: C.SALMON, hl: true }), run(" de la personne.")],
      "une parole vraie peint mieux qu'un long discours", { after: 80 }),
    sub("2. Un exemple de plan (la couturière)"),
    exLine([run("Physique : ", { bold: true }), run("petites lunettes, doigts rapides et précis.")], null),
    exLine([run("Gestes : ", { bold: true }), run("elle mesure, elle coupe, elle pique à la machine.")], null),
    exLine([run("Caractère : ", { bold: true }), run("patiente, précise, toujours souriante.")], null),
    exLine([run("Sa parole : ", { bold: true }), run("« Un vêtement bien cousu dure dix ans. »", { italic: true })],
      "et ma phrase avec relatif : c'est une femme dont les doigts ne s'arrêtent jamais", { after: 80 }),
    sub("Exercice — ton plan :"),
    p("Choisis ton professionnel. Remplis les trois colonnes (physique, gestes, caractère), note sa parole et prépare une phrase avec qui, que, où ou dont.", { after: 60 }),
  ];
}

// ---------- S69 — Production écrite (2) ----------
function ficheS69() {
  const meta = META("Production écrite (2) : rédiger, relire, améliorer",
    "À la fin de la séance, l'apprenant rédige son portrait en huit à dix lignes, avec des relatifs, des articulateurs et une parole rapportée, puis le relit avec la grille.",
    "9 / 12", "plans de la séance 68, grille de relecture");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : relisez votre plan. Quels outils de l'unité emploierons-nous ?")],
      [fp("Relisent."),
       fp("R.A. : les relatifs (qui, que, où, dont), les articulateurs (car, mais, pourtant), la parole rapportée.")],
      "Questions rapides", "Plans"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Écrivez : « cest une dame elle coud bien ». Demandez : corrigez, puis reliez avec un relatif.")],
      [fp("Corrigent, relient."),
       fp("R.A. : C'est une dame qui coud à merveille.")],
      "Observation guidée", "Tableau"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Aujourd'hui, nous rédigeons le portrait complet, puis nous le relisons avec la grille. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Rappelez les attentes : huit à dix lignes ; les trois touches ; au moins deux pronoms relatifs, deux articulateurs logiques, une parole rapportée ; le présent de description.")],
      [fp("Notent les attentes.")],
      "Travail collectif", "Tableau"),
    stepRow(["4. Analyse", "(rédaction)"],
      [fp("Rédaction individuelle. Circulez : transformez les phrases hachées en phrases complexes bien reliées.")],
      [fp("Rédigent leur portrait.")],
      "Travail individuel", "Cahiers"),
    stepRow(["5. Synthèse", "(relecture)"],
      [fp("Relecture avec la grille : les trois touches ? les relatifs bien choisis ? la parole bien ponctuée ? les accords ?")],
      [fp("Relisent, cochent, corrigent.")],
      "Auto-évaluation", "Grille"),
    stepRow(["6. Entraînement"],
      [fp("Échange des cahiers en binômes : chacun souligne le meilleur détail du voisin et propose une amélioration.")],
      [fp("Lisent, conseillent."),
       pAns("R.A. : meilleur détail : « les doigts rapides » ; amélioration : remplacer deux « et » par « mais » et « car ».", ["détail"], { size: SZ.FICHE })],
      "Binômes", "Cahiers"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Ramassez quelques productions. Critères : trois touches (3) — relatifs (2) — articulateurs (1) — parole rapportée (2) — correction de la langue (2).")],
      [fp("Remettent leur production.")],
      "Évaluation du maître", "Productions"),
  ];
  return fiche(69, TOTAL, meta, rows, "s69", "PRODUCTION ÉCRITE", COLOR);
}
function lessonS69() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 69", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("PRODUCTION ÉCRITE", COLOR),
    p("", { after: 40 }),
    p([run("MON PORTRAIT D'UN MÉTIER (2) : RÉDIGER, RELIRE, AMÉLIORER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Je rédige (huit à dix lignes)"),
    exLine([run("Je peins les "), run("trois touches", { bold: true, color: C.SALMON, hl: true }), run(" : physique → gestes → caractère.")], null),
    exLine([run("Je relie avec des "), run("relatifs", { bold: true, color: C.SALMON, hl: true }), run(" et des "), run("articulateurs", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "une femme dont les doigts…, patiente mais exigeante, car…"),
    exLine([run("Je place "), run("sa parole", { bold: true, color: C.SALMON, hl: true }), run(" entre guillemets.")],
      "« Un vêtement bien cousu dure dix ans », répète-t-elle", { after: 80 }),
    sub("2. Je relis avec ma grille"),
    exLine([run("Mes trois touches", { bold: true, color: C.SALMON, hl: true }), run(" sont là, avec des détails précis.")], null),
    exLine([run("Mes relatifs", { bold: true, color: C.SALMON, hl: true }), run(" sont bien choisis : qui (sujet), que (COD), où (lieu), dont (de).")], null),
    exLine([run("Ma parole rapportée", { bold: true, color: C.SALMON, hl: true }), run(" est bien ponctuée.")], null, { after: 80 }),
    sub("3. J'améliore : un exemple"),
    exLine([run("cest une dame elle coud bien  →  C'est une dame "), run("qui coud à merveille", { bold: true, color: C.SALMON, hl: true }), run(" et "), run("dont", { bold: true, color: C.SALMON, hl: true }), run(" tout le quartier admire le travail.")],
      "je corrige ET je relie : un relatif vaut mieux que deux phrases hachées", { after: 80 }),
    sub("Exercice — améliore comme dans l'exemple :"),
    p("« cest un pecheur il est courageu tout le monde le connait » → ………", { after: 60 }),
  ];
}

// ---------- S70 — Lecture-fluidité ----------
function ficheS70() {
  const meta = META("Lecture-fluidité : lire un portrait",
    "À la fin de la séance, l'apprenant lit un portrait à haute voix, en détachant les détails et en donnant sa voix à la personne citée.",
    "10 / 12", "texte de la séance 61, crayons");
  const rows = [
    stepRow(["I. Révision", "Durée : ………"],
      [fp("Rappel : comment lit-on une description ? Et une citation ?")],
      [fp("Répondent."),
       fp("R.A. : lentement, en mettant les images en valeur ; en changeant de voix.")],
      "Questions rapides", "----"),
    sectionRow("II. NOUVELLE LEÇON — Durée : ………"),
    stepRow(["1. Mise en route"],
      [fp("Lisez le premier paragraphe du portrait de Rakoto en détachant chaque détail (grand et sec / le visage creusé / les mains larges). Faites remarquer l'effet.")],
      [fp("Écoutent, remarquent."),
       fp("R.A. : chaque détail devient une petite image.")],
      "Modélisation", "Texte"),
    stepRow(["2. Présentation"],
      [fp("Annoncez : « Lecture-fluidité : lire un portrait pour faire exister la personne. »")],
      [fp("Écoutent.")], "Travail collectif", "----"),
    stepRow(["3. Observation"],
      [fp("Faites préparer le texte : marquer / et // ; souligner les détails du physique à détacher ; encadrer la parole de Rakoto, à lire avec une voix grave et calme.")],
      [fp("Préparent leur texte.")],
      "Préparation", "Crayons"),
    stepRow(["4. Analyse", "(entraînement)"],
      [fp("Entraînement en binômes : chacun lit un paragraphe ; l'autre évalue : détails détachés ? voix de Rakoto différente ?")],
      [fp("S'entraînent en binômes.")],
      "Binômes", "Grille"),
    stepRow(["5. Synthèse", "(passages)"],
      [fp("Passages individuels. La classe écoute : a-t-on « vu » Rakoto ? Quel détail a le mieux existé ?")],
      [fp("Lisent, échangent.")],
      "Passages individuels", "----"),
    stepRow(["6. Entraînement"],
      [fp("Remédiation : retravaillez la phrase longue du deuxième paragraphe par groupes de souffle.")],
      [fp("Reprennent, améliorent.")],
      "Travail collectif", "----"),
    stepRow(["III. Évaluation", "Durée : ………"],
      [fp("Grille : 1. détails détachés — 2. pauses respectées — 3. voix de la citation — 4. débit posé.")],
      [fp("S'auto-évaluent.")],
      "Auto-évaluation", "Grille"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70", "LECTURE (LECTURE-FLUIDITÉ)", COLOR);
}
function lessonS70() {
  return [
    p([run("LEÇON DU JOUR — SÉANCE 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    discBadge("LECTURE (LECTURE-FLUIDITÉ)", COLOR),
    p("", { after: 40 }),
    p([run("LIRE UN PORTRAIT À HAUTE VOIX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    sub("1. Chaque détail est une petite image"),
    exLine([run("Je "), run("détache les détails", { bold: true, color: C.SALMON, hl: true }), run(" : grand et sec / le visage creusé / les mains larges.")],
      "une micro-pause après chaque détail : l'auditeur a le temps de voir"),
    exLine([run("Je donne "), run("sa voix", { bold: true, color: C.SALMON, hl: true }), run(" à la personne citée.")],
      "Rakoto parle d'une voix grave et calme : je change de voix pour lui"),
    exLine([run("Je garde un "), run("débit posé", { bold: true, color: C.SALMON, hl: true }), run(".")],
      "un portrait se peint, il ne se court pas", { after: 80 }),
    sub("2. Je prépare ma lecture"),
    exLine([run("Je marque / et //, je souligne les détails, j'encadre la parole.")],
      "la phrase longue se découpe en groupes de souffle", { after: 80 }),
    sub("Exercice — prépare puis lis en détachant :"),
    p("« C'est un homme de cinquante ans, grand et sec, au visage creusé par le soleil et le sel. Ses mains larges, couvertes de petites cicatrices, racontent trente années de mer. »", { after: 60 }),
  ];
}

// ---------- Leçon récapitulative ----------
function bigLesson() {
  return [
    unitBanner("LEÇON — UNITÉ 6 : LA PÊCHE (récapitulatif)", COLOR),
    p("", { after: 80 }),
    sub("1. Les mots de l'unité :"),
    pr([run("Le port : ", { bold: true }), run("les gens (pêcheur, mareyeuse), les embarcations (pirogue, boutre, chalutier), les outils (filet, ligne, hameçon, nasse), les produits (capitaine, thon, crevette, crabe).", { bold: true, color: C.SALMON })], { after: 40 }),
    pr([run("La mer : ", { bold: true }), run("la marée, le large, la côte ; pêche traditionnelle et pêche industrielle ; respecter la mer et laisser grandir les petits poissons.", { bold: true, color: C.SALMON })], { after: 80 }),
    sub("2. Le portrait :"),
    p("Décrire une personne en trois touches : le physique, les gestes, le caractère — et souvent une parole qui la révèle. La description de scène avance comme une caméra, dans l'espace et dans le temps.", { after: 80 }),
    sub("3. Les articulateurs logiques :"),
    p("La cause (car, parce que), la conséquence (donc, c'est pourquoi, ainsi), l'opposition (mais, pourtant, cependant).", { after: 80 }),
    sub("4. La phrase complexe :"),
    p("Plusieurs verbes conjugués. Trois constructions : la juxtaposition (virgule), la coordination (et, mais, donc, car), la subordination (quand, parce que, qui, que…).", { after: 80 }),
    sub("5. Les pronoms relatifs simples :"),
    p("QUI (sujet), QUE (COD, s'élide en qu'), OÙ (lieu ou temps), DONT (complément avec « de » : la pirogue dont la voile est rapiécée).", { after: 80 }),
    sub("6. Dire et écrire :"),
    p("L'interview : saluer → questions variées qui rebondissent → remercier. Le portrait écrit : trois touches, deux relatifs, des articulateurs, une parole rapportée.", { after: 80 }),
  ];
}

// ---------- Exercices ----------
function exercises() {
  return [
    p([run("EXERCICES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Classe ces mots (gens, embarcation, outil, produit) : 1. la nasse 2. le boutre 3. la mareyeuse 4. le poulpe.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Relie avec car, donc, mais ou pourtant : 1. « La mer est mauvaise … les pirogues restent au port. » 2. « Il est épuisé … il répare ses filets. » 3. « Il part tôt … les poissons mordent à l'aube. » 4. « La pirogue est vieille … elle tient la mer. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Simple ou complexe ? Souligne les verbes conjugués : 1. « Les voiles grossissent au large. » 2. « On pèse, on discute, on rit. » 3. « Les enfants courent pendant que les anciens examinent les filets. » 4. « La plage s'anime et le marché commence. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Complète avec qui, que, où, dont : 1. « Le filet … il répare. » 2. « Le port … je suis né. » 3. « Un métier … il est fier. » 4. « La mareyeuse … attend sur le sable. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Écris le début d'un portrait (trois phrases) d'un professionnel de ta région : une phrase pour le physique, une pour un geste, une avec un pronom relatif.")]),
    p("", { after: 140 }),
    p([run("Total : 20 points", { bold: true })], { after: 160 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : 1. outil — 2. embarcation — 3. gens — 4. produit. (1 pt chacun)", ["embarcation"]),
    pAns("Ex.2 : 1. donc — 2. pourtant — 3. car — 4. mais. (1 pt chacun)", ["pourtant"]),
    pAns("Ex.3 : 1. simple (grossissent) — 2. complexe (pèse, discute, rit) — 3. complexe (courent, examinent) — 4. complexe (s'anime, commence). (1 pt chacun)", ["complexe"]),
    pAns("Ex.4 : 1. qu' — 2. où — 3. dont — 4. qui. (1 pt chacun)", ["dont"]),
    pAns("Ex.5 : exemple : Le forgeron du marché est un homme large d'épaules. Chaque matin, il bat le fer rouge sur l'enclume. C'est un homme que tout le quartier respecte. (3 touches + relatif : 4 pts)", ["relatif"]),
  ];
}

// ---------- Révision (S71) ----------
function revision() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s71", "SÉANCE 71 / 84", { bold: true, size: 28, after: 60 }),
    p([run("RÉVISION ET DICTÉE — UNITÉ 6 : LA PÊCHE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Je réponds :", { bold: true })], { after: 80 }),
    p("1. Cite les quatre familles du port, avec un exemple chacune."),
    pAns("R.A. : gens (mareyeuse), embarcations (pirogue), outils (nasse), produits (thon).", ["mareyeuse"]),
    p("2. Quelles sont les trois touches du portrait ?"),
    pAns("R.A. : le physique, les gestes, le caractère.", ["caractère"]),
    p("3. Donne un articulateur de cause, deux de conséquence, deux d'opposition."),
    pAns("R.A. : car (parce que) ; donc, c'est pourquoi ; mais, pourtant.", ["pourtant"]),
    p("4. Qu'est-ce qu'une phrase complexe ?"),
    pAns("R.A. : une phrase qui contient plusieurs verbes conjugués.", ["verbes conjugués"]),
    p("5. Cite les trois constructions de la phrase complexe, avec un exemple."),
    pAns("R.A. : juxtaposition (On pèse, on rit.), coordination (…et…), subordination (…quand…).", ["subordination"]),
    p("6. Quel est le rôle de qui ? de que ? de où ? de dont ?"),
    pAns("R.A. : sujet ; COD ; lieu ou temps ; complément avec « de ».", ["COD"]),
    p("7. Complète : « la pirogue … la voile est rapiécée », « le jour … la mer s'est fâchée »."),
    pAns("R.A. : dont ; où.", ["dont"]),
    p("8. Lequel des deux s'élide : qui ou que ? Donne un exemple."),
    pAns("R.A. : que → qu' : l'homme qu'on attend ; qui ne s'élide jamais.", ["qu'"]),
    p("9. Donne le plan d'une interview réussie."),
    pAns("R.A. : saluer et se présenter, questions variées qui rebondissent, remercier.", ["rebondissent"]),
    p("10. Pourquoi laisse-t-on grandir les petits poissons ?"),
    pAns("R.A. : pour que la mer reste généreuse demain : qui prend tout aujourd'hui n'aura rien.", ["généreuse"]),
    p("", { after: 80 }),
    p([run("Dictée préparée (étudiée la veille, dictée en classe) :", { bold: true, color: COLOR })], { after: 60 }),
    pr([run("« Rakoto est un pêcheur que tout le port connaît. Sa pirogue, dont la voile est rapiécée, affronte la mer depuis trente ans. Il part avant l'aube, car les poissons mordent mieux au lever du jour, pourtant il ne quitte jamais la mer des yeux. »", { italic: true })], { after: 60 }),
    pr([run("Je prépare ma dictée : ", { bold: true }), run("j'étudie les mots "), run("que tout le port connaît", { bold: true, color: C.SALMON, hl: true }), run(" [relatif que : le port connaît Rakoto], "), run("dont la voile", { bold: true, color: C.SALMON, hl: true }), run(" [la voile DE la pirogue → dont], "), run("car", { bold: true, color: C.SALMON, hl: true }), run(" [articulateur de cause], "), run("pourtant", { bold: true, color: C.SALMON, hl: true }), run(" [opposition forte].")], { after: 60 }),
  ];
}

// ---------- Test (S72) ----------
function testPaper() {
  const B2 = require("./builders");
  return [
    B2.bookmarkTitle("s72", "SÉANCE 72 / 84", { bold: true, size: 28, after: 60 }),
    p([run("TEST — UNITÉ 6 : LA PÊCHE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 60 }),
    pr([run("Durée : ………        ", { bold: true }), run("Total : 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercice 1 (4 points). ", { bold: true }), run("Complète avec : mareyeuse — marée — nasse — large. 1. Les pirogues partent au … avant l'aube. 2. À … basse, on ramasse les crabes. 3. La … attend le poisson sur le sable. 4. Le pêcheur relève sa … pleine de crevettes.")]),
    p("", { after: 120 }),
    pr([run("Exercice 2 (4 points). ", { bold: true }), run("Relie avec l'articulateur demandé : 1. (cause) « Les pirogues restent au port … la tempête approche. » 2. (conséquence) « Le poisson est frais, … il se vend vite. » 3. (opposition) « Il est fatigué, … il sourit. » 4. Indique la famille de « c'est pourquoi ».")]),
    p("", { after: 120 }),
    pr([run("Exercice 3 (4 points). ", { bold: true }), run("Transforme ces deux phrases simples en une phrase complexe, de deux façons différentes : « Le vent tombe. Les pirogues partent. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 4 (4 points). ", { bold: true }), run("Complète avec qui, que, où, dont : 1. « Le métier … il est fier. » 2. « La plage … accostent les pirogues. » 3. « Le thon … brille au fond de la pirogue. » 4. « Les filets … il répare chaque soir. »")]),
    p("", { after: 120 }),
    pr([run("Exercice 5 (4 points). ", { bold: true }), run("Rédige le portrait d'un professionnel de ta région (cinq à six lignes) : physique, gestes, caractère, une parole rapportée et un pronom relatif.")]),
    p("", { after: 140 }),
    p([run("CORRIGÉ", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 : large — marée — mareyeuse — nasse. (1 pt chacun)", ["nasse"]),
    pAns("Ex.2 : 1. car (parce que) — 2. donc (c'est pourquoi) — 3. pourtant (mais) — 4. conséquence. (1 pt chacun)", ["conséquence"]),
    pAns("Ex.3 : Le vent tombe et les pirogues partent. / Quand le vent tombe, les pirogues partent. (ou juxtaposition) (2 pts chacune)", ["Quand"]),
    pAns("Ex.4 : 1. dont — 2. où — 3. qui — 4. qu'(e). (1 pt chacun)", ["dont"]),
    pAns("Ex.5 : trois touches (2 pts), parole rapportée (1 pt), relatif correct (1 pt).", ["touches"]),
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
      "Je comprends le portrait d'un pêcheur.",
      "Je nomme les gens, les embarcations, les outils et les produits de la pêche.",
      "Je lis une description de scène qui avance comme une caméra.",
      "Je relie mes idées avec car, donc, mais, pourtant.",
      "Je distingue phrase simple et phrase complexe.",
      "Je construis des phrases complexes des trois façons.",
      "J'emploie qui, que, où, dont sans me tromper.",
      "Je mène une interview polie, avec des questions qui rebondissent.",
      "Je rédige le portrait d'un métier en trois touches.",
    ], "PROCHAINE ÉTAPE → UNITÉ 7 : L'ENVIRONNEMENT"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
