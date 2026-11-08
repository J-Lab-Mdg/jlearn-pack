// Français T2 — ANNEXES 1 à 6 + page finale
const B = require("./builders");
const { C, SZ, run, p, pr, pAns, fp, unitBanner, img, pageBreak, sub, cell, bookmarkTitle } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "4A235A"; // violet annexes
const SHADE = "E8DAEF";

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const mot = (word, expl) => bullet([
  run(word, { bold: true, color: C.SALMON, hl: true }), ...(expl ? [run("  —  " + expl)] : [])]);
function head(bm, title, subtitle) {
  return [
    unitBanner(title, COLOR, bm),
    p("", { after: 80 }),
    ...(subtitle ? [p([run(subtitle, { italic: true, color: C.GRAY, size: 26 })], { center: true, after: 140 })] : []),
  ];
}

// ============ ANNEXE 1 — IMAGIER ============
function theme(imgFile, title, color, words) {
  return [
    p([run(title, { bold: true, color, size: 32 })], { after: 60 }),
    img(imgFile, 300, 502 / 900),
    ...words.map(([w, d]) => mot(w, d)),
    p("", { after: 100 }),
  ];
}
function annexe1() {
  return [
    ...head("annex1", "ANNEXE 1 — L'IMAGIER DES 6 THÉMATIQUES",
      "Tout le lexique de l'année, thème par thème — à relire avant chaque test."),
    ...theme("u1_politesse.png", "UNITÉ 1 — LES FORMULES DE POLITESSE", "D35400", [
      ["les cinq mots magiques", "bonjour, merci, s'il vous plaît, pardon, au revoir."],
      ["saluer", "Bonjour, madame ! Bonjour, monsieur ! Au revoir !"],
      ["se présenter", "Je m'appelle Tiana."],
      ["les quatre petits verbes", "je veux, je peux, je fais, je dois."],
      ["l'alphabet", "26 lettres ; les 6 voyelles : a, e, i, o, u, y."],
    ]),
    ...theme("u2_famille.png", "UNITÉ 2 — LA PRÉSENTATION DE LA FAMILLE", "884EA0", [
      ["la famille", "papa (le père), maman (la mère), le frère, la sœur, le fils, la fille."],
      ["présenter", "voici, voilà : Voici ma mère. Voilà mon père."],
      ["il / elle s'appelle", "Il s'appelle Naly. Elle s'appelle Lalao."],
      ["mon, ma — son, sa", "mon père, ma mère ; son frère, sa sœur."],
      ["la majuscule des prénoms", "Tiana, Hery, Naly, Lalao."],
    ]),
    ...theme("u3_maison.png", "UNITÉ 3 — LA FAMILLE RESTREINTE", "2471A3", [
      ["les parents", "le papa et la maman, ensemble."],
      ["les enfants", "le fils, la fille… et le bébé, le tout-petit !"],
      ["être", "je suis, tu es, il est, elle est."],
      ["avoir", "j'ai, tu as, il a, elle a : J'ai un frère."],
      ["aller", "je vais, tu vas, il va : Comment vas-tu ? Je vais bien !"],
    ]),
    ...theme("u4_journee.png", "UNITÉ 4 — LES HABITUDES QUOTIDIENNES", "148F77", [
      ["les actions du jour", "je me réveille, je me lève, je me lave, je me coiffe, je m'habille, je mange, je dors."],
      ["les quatre moments", "le matin, à midi, le soir, la nuit."],
      ["les verbes en -er", "je mange, tu manges, il mange."],
      ["le verbe finir", "je finis, tu finis, il finit."],
      ["ma journée", "Le matin, je me lave. À midi, je mange. La nuit, je dors."],
    ]),
    ...theme("u5_pieces.png", "UNITÉ 5 — LA MAISON", "A04000", [
      ["les parties", "la porte, la fenêtre, le toit, le mur."],
      ["les pièces", "la cuisine, la chambre, la salle."],
      ["les meubles", "la table, la chaise, le lit, l'armoire."],
      ["il y a", "Dans la cuisine, il y a une table."],
      ["les mots du lieu", "sur, sous, dans, devant, derrière."],
    ]),
    ...theme("u6_classe.png", "UNITÉ 6 — LES OBJETS DE LA SALLE DE CLASSE", "B7950B", [
      ["les meubles de la classe", "le tableau, le banc, le bureau."],
      ["les fournitures", "le cahier, le livre, le stylo, le crayon, la gomme, la règle, l'ardoise, le cartable."],
      ["les articles", "un, une, des / le, la, les."],
      ["les mots qui décrivent", "grand, petit, joli, propre, bleu, rouge, noir, jaune."],
      ["l'accord", "un cahier bleu, une règle bleue, des cahiers bleus."],
    ]),
  ];
}

// ============ ANNEXE 2 — LE GUIDE DU PETIT ÉCRIVAIN ============
function annexe2() {
  const stepBox = (n, title, lines) => [
    pr([run(n + ". " + title, { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    ...lines.map(l => p("• " + l)),
    p("", { after: 80 }),
  ];
  return [
    ...head("annex2", "ANNEXE 2 — LE GUIDE DU PETIT ÉCRIVAIN",
      "Mes premiers pas pour bien écrire — à relire avant chaque production écrite."),
    ...stepBox("1", "Je tiens bien mon crayon", [
      "Je m'assois droit, les deux pieds au sol.",
      "Je tiens le crayon sans serrer trop fort.",
      "Mon autre main tient le cahier ou l'ardoise.",
    ]),
    ...stepBox("2", "Les trois règles de la belle copie", [
      "Je regarde bien le modèle, lettre par lettre.",
      "J'écris lentement et proprement.",
      "Je compare mon mot avec le modèle : pareil ? bravo !",
    ]),
    ...stepBox("3", "Ma phrase bien habillée", [
      "La MAJUSCULE au début : Le matin…",
      "Le point (ou le !) à la fin : …je me lave.",
      "La virgule après le moment ou le lieu : Le matin, je me lave.",
      "L'apostrophe quand le e s'en va : j'ai, l'école, je m'appelle.",
    ]),
    ...stepBox("4", "Avant d'écrire, je me demande", [
      "Un ou une ? → un lit, une table.",
      "Un seul ou plusieurs ? → des chaises, avec le s !",
      "Le mot qui décrit s'accorde : une règle bleue, des cahiers bleus.",
      "Les prénoms prennent une majuscule : Tiana, Hery.",
    ]),
    ...stepBox("5", "Mes modèles de phrases de l'année", [
      "Bonjour, madame ! Je m'appelle… Merci ! Au revoir !",
      "Voici ma mère. Il s'appelle Naly. Je suis sa fille.",
      "J'ai un frère. Ma famille va bien.",
      "Le matin, je me lave. À midi, je mange du riz.",
      "Dans la cuisine, il y a une table. Le livre est sur la table.",
      "J'ai un cahier bleu. Ma règle est jolie.",
    ]),
  ];
}

// ============ ANNEXE 3 — CONJUGAISON ============
function conjTable(title, forms, note) {
  // forms: [ [pronom, forme] x4 ] — au présent seulement (T2 !)
  const hd = new TableRow({ children: [
    cell([fp([run(title, { bold: true, color: COLOR, size: SZ.FICHE })])], { w: 5200, shade: SHADE }),
    cell([fp([run("PRÉSENT", { bold: true, size: SZ.FICHE })])], { w: 5200, shade: SHADE }),
  ]});
  const rows = forms.map(f => new TableRow({ children: [
    cell([fp([run(f[0], { bold: true, size: SZ.FICHE })])], {}),
    cell([fp([run(f[1], { size: SZ.FICHE })])], {}),
  ]}));
  return [
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [hd, ...rows] }),
    ...(note ? [pr([run(note, { italic: true, color: C.GRAY, size: 22 })], { after: 80 })] : [p("", { after: 100 })]),
  ];
}
function annexe3() {
  return [
    ...head("annex3", "ANNEXE 3 — TOUTE LA CONJUGAISON DE L'ANNÉE",
      "Tous les verbes du programme, au présent — mes petites échelles à redire chaque jour."),
    ...conjTable("ÊTRE", [
      ["je", "je suis la fille de Naly"],
      ["tu", "tu es mon frère"],
      ["il", "il est le papa"],
      ["elle", "elle est la maman"],
    ], "Je suis son frère. Elle est ma sœur. (unités 2 et 3)"),
    ...conjTable("AVOIR", [
      ["j'", "j'ai un frère (j'ai, jamais « je ai » !)"],
      ["tu", "tu as une sœur"],
      ["il", "il a un stylo"],
      ["elle", "elle a trois enfants"],
    ], "J'ai un cahier bleu. La maman a trois enfants. (unités 3 et 6)"),
    ...conjTable("ALLER", [
      ["je", "je vais à l'école"],
      ["tu", "tu vas à la maison — Comment vas-tu ?"],
      ["il", "il va bien"],
      ["elle", "elle va chez Vola"],
    ], "Le bébé va bien. Je vais bien, merci ! (unité 3)"),
    ...conjTable("LES VERBES EN -ER : MANGER", [
      ["je", "je mange du riz"],
      ["tu", "tu manges une banane (avec le s !)"],
      ["il", "il mange à midi"],
      ["elle", "elle mange le soir"],
    ], "La chanson -e, -es, -e : laver, chanter, danser font pareil ! (unité 4)"),
    ...conjTable("FINIR", [
      ["je", "je finis mes devoirs"],
      ["tu", "tu finis ta soupe"],
      ["il", "il finit son riz"],
      ["elle", "elle finit la soupe"],
    ], "La chanson s-s-t : je finis, tu finis, il finit. (unité 4)"),
    ...conjTable("LES QUATRE PETITS VERBES DE LA POLITESSE", [
      ["je veux", "Je veux une banane, s'il vous plaît."],
      ["je peux", "Je peux entrer, s'il vous plaît ?"],
      ["je fais", "Je fais mes devoirs."],
      ["je dois", "Je dois dire bonjour."],
    ], "Avec il / elle : il veut, il peut, il fait, il doit. (unité 1)"),
  ];
}

// ============ ANNEXE 4 — FLASHCARDS ET JEUX ============
function annexe4() {
  const jeu = (titre, desc) => [
    pr([run(titre, { bold: true, color: COLOR, size: 26 })], { after: 30 }),
    p(desc, { after: 80 }),
  ];
  return [
    ...head("annex4", "ANNEXE 4 — FLASHCARDS ET JEUX DE CLASSE",
      "Tous les jeux du manuel, à refaire sans modération — cinq minutes suffisent !"),
    p([run("Comment fabriquer les flashcards ?", { bold: true, size: SZ.SUB })], { after: 60 }),
    p("• Découpez des cartes dans du carton ou du papier épais."),
    p("• D'un côté : le dessin (ou l'objet collé). De l'autre : le mot en gros."),
    p("• Faites les cartes de l'année : les mots magiques, la famille, les actions du jour, la maison, les fournitures.", { after: 120 }),
    p([run("Les jeux du manuel", { bold: true, size: SZ.SUB })], { after: 80 }),
    ...jeu("1. Le jeu de tri", "Deux ou trois boîtes au tableau (par exemple : parents / enfants, meubles / fournitures, maison de UN / maison de UNE). Chaque apprenant tire une carte et la pose dans la bonne boîte."),
    ...jeu("2. Les maisons des sons", "Dessinez une maison par son ([ɛ̃], [u], [e], [wa], [k], [g], [j]). Dites un mot : les apprenants montrent la bonne maison avec la main."),
    ...jeu("3. La chaîne orale", "Chaque apprenant dit sa phrase et passe la parole à son voisin : « Je m'appelle… », « J'ai un frère… », « Le matin, je me lave… »."),
    ...jeu("4. Le mime", "Un apprenant mime une action de la journée (se laver, se coiffer, dormir), la classe dit le mot en français."),
    ...jeu("5. Le jeu du chef", "Un apprenant donne un ordre avec un mot du lieu (« Mets le ballon sous la chaise ! »), un autre exécute, la classe valide."),
    ...jeu("6. La devinette", "« Il est grand, il est noir, le maître écrit dessus : qui est-ce ? » Chacun invente sa devinette pour son voisin."),
    ...jeu("7. La lecture-éclair", "Montrez les étiquettes-mots de plus en plus vite : la classe lit en chœur, puis un par un. Trois tours : lentement, normalement, rapidement."),
    ...jeu("8. Le vrai / faux du pouce", "Lisez une phrase sur le texte écouté : pouce levé si c'est vrai, pouce baissé si c'est faux."),
    ...jeu("9. Les comptines de l'année", "Les mots magiques (U1), la famille (U2), la journée (U4), la maison (U5), les fournitures (U6) — à chanter en début de séance."),
    ...jeu("10. La paire magique", "Montrez un objet : « Voici un cahier. » L'apprenant répond : « C'est le cahier de… ! » Pour bien choisir entre un et le."),
  ];
}

// ============ ANNEXE 5 — LES STRATÉGIES DE LECTURE (PE) ============
function annexe5() {
  const strat = (titre, desc) => [
    pr([run(titre, { bold: true, color: COLOR, size: 26 })], { after: 30 }),
    p(desc, { after: 80 }),
  ];
  return [
    ...head("annex5", "ANNEXE 5 — LES STRATÉGIES DE LECTURE",
      "Comment aider chaque apprenant à devenir un bon lecteur — pour l'enseignant."),
    ...strat("1. La conscience phonologique d'abord", "Avant de lire les lettres, on joue avec les sons : frapper les syllabes dans les mains (pa-pa, ma-man), repérer un son dans un mot entendu, trier les mots par son. C'est la base de l'année T2."),
    ...strat("2. L'alphabet en fil rouge", "On chante l'alphabet à chaque séance de lecture. On nomme les lettres, on les écrit en l'air, sur l'ardoise. Les 6 voyelles (a, e, i, o, u, y) sont les reines des syllabes."),
    ...strat("3. Des syllabes aux mots", "consonne + voyelle = syllabe (ma, pa, ri) ; syllabe + syllabe = mot (mer-ci, bon-jour). Les lettres mobiles et les étiquettes-syllabes permettent de construire et déconstruire les mots."),
    ...strat("4. Les maisons des sons", "Chaque graphie étudiée a sa maison au tableau : [ɛ̃] in-im, [u] ou, [e] é/-er/-ez, [wa] oi, [k] c/qu/q, [g] g, [j] y/ill/il, et le h muet. On y range les mots rencontrés, toute l'année."),
    ...strat("5. La lecture modèle, puis l'écho", "Le maître lit d'abord (modèle), la classe répète (écho), puis des volontaires lisent seuls. On lit chaque texte au moins trois fois : lentement, normalement, couramment."),
    ...strat("6. Les trois secrets du bon lecteur", "1. Je ne coupe pas les mots. 2. Je respire aux points. 3. Je lis comme je parle. À rappeler avant chaque lecture à voix haute."),
    ...strat("7. L'autocorrection bienveillante", "L'apprenant qui se trompe relit lui-même, avec l'aide du maître : on corrige la prononciation, le débit et l'intonation sans jamais se moquer. Le voisin peut aider : c'est l'entraide !"),
    ...strat("8. L'ardoise et le PLM", "Procédé La Martinière : le maître dit, les apprenants écrivent sur l'ardoise, lèvent l'ardoise ensemble, on corrige tout de suite. Rapide, joyeux, efficace."),
  ];
}

// ============ ANNEXE 6 — ORTHOGRAPHE ET SONS DE L'ANNÉE ============
function annexe6() {
  const ligne = (son, graphies, exemples) => new TableRow({ children: [
    cell([fp([run(son, { bold: true, size: SZ.FICHE })])], { w: 2200 }),
    cell([fp([run(graphies, { bold: true, color: C.BLUE, size: SZ.FICHE })])], { w: 2600 }),
    cell([fp([run(exemples, { size: SZ.FICHE })])], { w: 5600 }),
  ]});
  return [
    ...head("annex6", "ANNEXE 6 — ORTHOGRAPHE ET SONS DE L'ANNÉE",
      "Tous les sons étudiés et les petites règles d'écriture — mon mémo de fin d'année."),
    p([run("Les sons de l'année", { bold: true, size: SZ.SUB })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [
        cell([fp([run("LE SON", { bold: true, size: SZ.FICHE })])], { w: 2200, shade: SHADE }),
        cell([fp([run("SES HABITS", { bold: true, size: SZ.FICHE })])], { w: 2600, shade: SHADE }),
        cell([fp([run("MES MOTS", { bold: true, size: SZ.FICHE })])], { w: 5600, shade: SHADE }),
      ]}),
      ligne("[ɛ̃]", "in, im", "le matin, cinq, le lapin, le timbre (unité 1)"),
      ligne("[u]", "ou", "bonjour, le jour, la poule, rouge (unité 1)"),
      ligne("[e]", "-er, -ez, é", "parler, vous parlez, le bébé, l'école (unités 2 et 3)"),
      ligne("[wa]", "oi", "moi, toi, le soir, trois, la poire (unité 4)"),
      ligne("[k]", "qu, q, c", "quatre, le coq, la cour, la cuisine (unités 4 et 5)"),
      ligne("[g]", "g", "la gare, le garçon, la mangue, grand (unité 5)"),
      ligne("h muet", "h (il se tait !)", "l'homme, l'heure, je m'habille, Hery (unité 6)"),
      ligne("[j]", "y, ill, il", "le crayon, la fille, la famille, le soleil (unité 6)"),
    ]}),
    p("", { after: 120 }),
    p([run("Mes petites règles d'écriture", { bold: true, size: SZ.SUB })], { after: 80 }),
    mot("la MAJUSCULE", "au début de la phrase et aux prénoms : Bonjour, Tiana !"),
    mot("le point", "à la fin de la phrase : Je vais bien. (ou le ! : Merci !)"),
    mot("la virgule", "après le moment ou le lieu : Le matin, je me lave."),
    mot("l'apostrophe", "quand le e s'en va : j'ai, l'école, je m'appelle, s'il vous plaît."),
    mot("le s du pluriel", "des chaises, les fenêtres — il se voit mais ne s'entend pas !"),
    mot("le e de l'accord", "une règle bleue, une petite gomme, ma règle est jolie."),
    mot("les accents", "é (le petit chapeau qui monte : le bébé) et è (le chapeau penché : la mère, le frère)."),
    mot("œ collés", "la sœur — deux lettres qui se tiennent la main !"),
    p("", { after: 80 }),
    p([run("Les dictées de l'année", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Unité 1 : « Bonjour, madame ! Merci, Tiana. »"),
    p("• Unité 2 : « Voici mon père. Il s'appelle Naly. »"),
    p("• Unité 3 : « J'ai une sœur. Le bébé va bien. »"),
    p("• Unité 4 : « Le soir, je mange du riz. Je finis ma soupe. »"),
    p("• Unité 5 : « Voici ma maison. Le lit est dans la chambre. »"),
    p("• Unité 6 : « J'ai un cahier bleu. Ma règle est jolie. »"),
  ];
}

// ============ PAGE FINALE ============
function pageFinale() {
  return [
    bookmarkTitle("final", "FÉLICITATIONS !", { bold: true, size: 48, center: true, after: 120 }),
    p([run("72 séances, 6 thématiques, l'alphabet, les syllabes, 8 sons… TU AS TOUT TRAVERSÉ !", { bold: true, color: COLOR, size: 32 })], { center: true, after: 140 }),
    img("u6_presente.png", 300, 502 / 900),
    p([run("Tiana, Hery et toute la famille sont fiers de toi !", { bold: true, size: 28 })], { center: true, after: 140 }),
    p("Cette année, tu as appris à saluer avec les cinq mots magiques ;"),
    p("à présenter ta famille : voici ma mère, voilà mon père ;"),
    p("à dire je suis, j'ai, je vais — tes trois verbes amis ;"),
    p("à raconter ta journée, du matin à la nuit ;"),
    p("à décrire ta maison, pièce par pièce, avec « il y a » ;"),
    p("et à prendre soin de tes affaires d'école, comme un grand.", { after: 140 }),
    pr([run("Tu sais maintenant lire des syllabes, des mots et des phrases : ", { bold: true, size: 28 }),
        run("continue de lire et d'écrire chaque jour !", { bold: true, color: C.RED, size: 28 })], { center: true, after: 160 }),
    p([run("Ce manuel se termine, mais le français, lui, commence à peine :", { italic: true, color: C.GRAY })], { center: true, after: 40 }),
    p([run("l'année prochaine, en T3, de nouvelles histoires t'attendent !", { italic: true, color: C.GRAY })], { center: true, after: 160 }),
    p([run("FIN DU MANUEL — COLLECTION J-LEARN — FRANÇAIS T2", { bold: true, color: COLOR, size: 26 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    ...annexe1(), pageBreak(),
    ...annexe2(), pageBreak(),
    ...annexe3(), pageBreak(),
    ...annexe4(), pageBreak(),
    ...annexe5(), pageBreak(),
    ...annexe6(), pageBreak(),
    ...pageFinale(),
  ];
};
