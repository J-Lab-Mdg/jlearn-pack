// Manuel de Français T7 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t7.png");
  if (fs.existsSync(f)) return [img("cover_francais_t7.png", 718, 1264 / 848)];
  return [p([run("FRANÇAIS T7 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T7 (PE T7) et sa répartition annuelle (RAPE T7)."),
    p("Le français y est considéré comme un outil de communication, d'apprentissage et d'expression. L'année s'organise autour de six grandes thématiques proches de la vie de l'apprenant : la culture, les traditions, les médias, la délinquance juvénile, la pêche et l'environnement. Chaque thématique travaille les six composantes du programme : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("L'année fait découvrir trois grands types de textes : le texte informatif (reportage, article de presse, compte-rendu) dans les unités 1 à 3 ; le texte narratif (fait divers, témoignage) dans l'unité 4 ; le texte descriptif (portrait, guide touristique, publicité) dans les unités 5 et 6."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : le résumé que les apprenants recopient dans leur cahier."),
    p("Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
    p("Les activités proposées sont courtes, variées et dynamiques : jeux, débats, procédé La Martinière, travail en binômes — conformément aux orientations du programme. L'enseignant valorise les connaissances antérieures et la langue maternelle pour favoriser les transferts.", { after: 160 }),
  ];
}

// ---------- mode d'emploi ----------
function howToUse() {
  const line = (colorName, colorHex, txt) => pr([
    run("■ ", { color: colorHex, size: 30 }),
    run(colorName + " — ", { bold: true, color: colorHex }),
    run(txt),
  ], { after: 60 });
  return [
    p([run("MODE D'EMPLOI DU MANUEL", { bold: true, size: 32 })], { center: true, after: 160 }),
    p([run("Les trois grands moments d'une séance", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• I. Révision — questions rapides sur la séance précédente."),
    p("• II. Nouvelle leçon — six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement."),
    p("• III. Évaluation — les apprenants travaillent seuls."),
    p("• Les cases de durée sont vides (………) : l'enseignant inscrit son propre minutage.", { after: 120 }),
    p([run("Les deux types de pages de leçon", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• LEÇON DU JOUR — une page après chaque fiche : le résumé du tableau à recopier dans le cahier."),
    p("• LEÇON — UNITÉ — une grande page à la fin de l'unité : tout le résumé de l'unité. Parfaite pour la révision et le test !", { after: 120 }),
    p([run("Les six composantes du programme", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Compréhension orale — écouter et comprendre (pré-écoute, écoute, post-écoute)."),
    p("• Compréhension écrite — lire et comprendre des textes variés."),
    p("• Fonctionnement de la langue — lexique, grammaire, conjugaison, orthographe."),
    p("• Production orale — décrire, exposer, débattre."),
    p("• Production écrite — planifier, rédiger, relire, améliorer."),
    p("• Lecture-fluidité — lire à haute voix avec fluidité, précision et expressivité.", { after: 120 }),
    p([run("Les couleurs du manuel", { bold: true, size: SZ.SUB })], { after: 80 }),
    line("Rouge", C.RED, "titre de la leçon."),
    line("Vert", C.GREEN, "sous-titres de la leçon."),
    line("Bleu gras", C.BLUE, "mots clés à retenir."),
    line("Rose", C.PINK, "corrigés et réponses attendues."),
    p("", { after: 60 }),
    p("• R.A. signifie « Réponse attendue ».", { after: 160 }),
  ];
}

// ---------- sommaire ----------
function contents() {
  return [
    p([run("SOMMAIRE", { bold: true, size: 32 })], { center: true, after: 160 }),
    tocLink("overview", "L'ANNÉE EN UN COUP D'ŒIL", { bold: true, size: 26 }),
    p("", { after: 40 }),
    tocLink("unit1", "UNITÉ 1 — LA CULTURE (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : reportage « Les visages de la culture malgache »"),
    tocLink("s2", "    Séance 2 — Lexique : les éléments de la culture"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Le hira gasy, un spectacle complet » — le texte informatif"),
    tocLink("s4", "    Séance 4 — Les verbes du 1er et du 2e groupe au présent"),
    tocLink("s5", "    Séance 5 — La forme active et la forme passive"),
    tocLink("s6", "    Séance 6 — La forme passive : transformation et accord"),
    tocLink("s7", "    Séance 7 — Production orale : présenter un élément de la culture"),
    tocLink("s8", "    Séance 8 — Production écrite (1) : l'article informatif — les idées et le plan"),
    tocLink("s9", "    Séance 9 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s10", "    Séance 10 — Lecture-fluidité : lire un reportage"),
    tocLink("s11", "    Séance 11 — Révision"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LES TRADITIONS (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : compte-rendu « La fête de la moisson »"),
    tocLink("s14", "    Séance 14 — Lexique : les types de traditions et les valeurs familiales"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « Les traditions autour du riz » — le compte-rendu"),
    tocLink("s16", "    Séance 16 — La tournure impersonnelle (1) : il faut, il est important de…"),
    tocLink("s17", "    Séance 17 — La tournure impersonnelle (2) : le temps, l'heure, l'obligation"),
    tocLink("s18", "    Séance 18 — La ponctuation qui exprime : exclamation, interrogation, suspension"),
    tocLink("s19", "    Séance 19 — Production orale : présenter une tradition de sa famille"),
    tocLink("s20", "    Séance 20 — Production écrite (1) : le compte-rendu d'une fête — les idées et le plan"),
    tocLink("s21", "    Séance 21 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s22", "    Séance 22 — Lecture-fluidité : lire un compte-rendu"),
    tocLink("s23", "    Séance 23 — Révision"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LES MÉDIAS (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : flash d'information « Le journal de la radio scolaire »"),
    tocLink("s26", "    Séance 26 — Lexique : les mots des médias"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : « Une journée à la rédaction » — l'article de presse"),
    tocLink("s28", "    Séance 28 — Les valeurs du présent de l'indicatif"),
    tocLink("s29", "    Séance 29 — Les valeurs de l'imparfait"),
    tocLink("s30", "    Séance 30 — L'accord du participe passé avec avoir"),
    tocLink("s31", "    Séance 31 — Production orale : présenter un flash d'information"),
    tocLink("s32", "    Séance 32 — Production écrite (1) : l'article de presse — titre, chapeau, plan"),
    tocLink("s33", "    Séance 33 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : lire un bulletin d'information"),
    tocLink("s35", "    Séance 35 — Révision"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — LA DÉLINQUANCE JUVÉNILE (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : témoignage « Le choix de Naivo »"),
    tocLink("s38", "    Séance 38 — Lexique : adolescence, citoyenneté, prévention"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : « L'affaire du marché couvert » — le fait divers"),
    tocLink("s40", "    Séance 40 — Les pronoms indéfinis"),
    tocLink("s41", "    Séance 41 — Les pronoms possessifs"),
    tocLink("s42", "    Séance 42 — Les verbes de parole et la ponctuation du dialogue"),
    tocLink("s43", "    Séance 43 — Production orale : le débat — prévenir la délinquance juvénile"),
    tocLink("s44", "    Séance 44 — Production écrite (1) : le témoignage — les idées et le plan"),
    tocLink("s45", "    Séance 45 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s46", "    Séance 46 — Lecture-fluidité : lire un fait divers"),
    tocLink("s47", "    Séance 47 — Révision"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — LA PÊCHE (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : portrait « Rakoto, pêcheur de Mahajanga »"),
    tocLink("s50", "    Séance 50 — Lexique : les mots de la pêche"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : « Au retour de la pêche » — le texte descriptif"),
    tocLink("s52", "    Séance 52 — Les articulateurs logiques"),
    tocLink("s53", "    Séance 53 — La phrase complexe"),
    tocLink("s54", "    Séance 54 — Les pronoms relatifs simples : qui, que, où, dont"),
    tocLink("s55", "    Séance 55 — Production orale : l'interview d'un pêcheur"),
    tocLink("s56", "    Séance 56 — Production écrite (1) : le portrait d'un métier — les idées et le plan"),
    tocLink("s57", "    Séance 57 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s58", "    Séance 58 — Lecture-fluidité : lire un texte descriptif"),
    tocLink("s59", "    Séance 59 — Révision"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("unit6", "UNITÉ 6 — L'ENVIRONNEMENT (Séances 61–72)", { bold: true, size: 26 }),
    tocLink("s61", "    Séance 61 — Compréhension orale : guide « Bienvenue au parc d'Andasibe »"),
    tocLink("s62", "    Séance 62 — Lexique : protéger l'environnement ; les gestes écologiques"),
    tocLink("s63", "    Séance 63 — Compréhension écrite : « Le guide du visiteur » — publicité et guide touristique"),
    tocLink("s64", "    Séance 64 — Les indicateurs spatiaux"),
    tocLink("s65", "    Séance 65 — Les pronoms relatifs composés (1) : lequel, laquelle…"),
    tocLink("s66", "    Séance 66 — Les pronoms relatifs composés (2) : auquel, duquel…"),
    tocLink("s67", "    Séance 67 — Production orale : la publicité pour protéger la nature"),
    tocLink("s68", "    Séance 68 — Production écrite (1) : le dépliant écologique — les idées et le plan"),
    tocLink("s69", "    Séance 69 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s70", "    Séance 70 — Lecture-fluidité : lire un guide touristique"),
    tocLink("s71", "    Séance 71 — Révision"),
    tocLink("s72", "    Séance 72 — Test"),
    p("", { after: 40 }),
    tocLink("annex1", "ANNEXE 1 — L'imagier des 6 thématiques", { bold: true, size: 26 }),
    tocLink("annex2", "ANNEXE 2 — Le guide du rédacteur (informer, raconter, décrire)", { bold: true, size: 26 }),
    tocLink("annex3", "ANNEXE 3 — Toute la conjugaison de l'année", { bold: true, size: 26 }),
    tocLink("annex4", "ANNEXE 4 — Flashcards et jeux de classe", { bold: true, size: 26 }),
    tocLink("annex5", "ANNEXE 5 — Les stratégies de lecture (annexe officielle du programme)", { bold: true, size: 26 }),
    tocLink("annex6", "ANNEXE 6 — Orthographe et accords", { bold: true, size: 26 }),
    tocLink("final", "FÉLICITATIONS — page finale", { bold: true, size: 26 }),
  ];
}

// ---------- l'année en un coup d'œil ----------
function dashboard() {
  const row = (u, t, s, rt) => new TableRow({ children: [
    cell([B.fp(u)], {}), cell([B.fp(t)], {}), cell([B.fp(s)], {}), cell([B.fp(rt)], {}),
  ]});
  const h = (t, w) => cell([B.fp([run(t, { bold: true, size: SZ.FICHE })])], { w, shade: C.HDR1 });
  return [
    bookmarkTitle("overview", "L'ANNÉE EN UN COUP D'ŒIL", { bold: true, size: 32, center: true, after: 160 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Unité", 1400), h("Thématique", 4600), h("Leçons", 2200), h("+ Révision + Test", 2200)] }),
      row("1", "La culture (texte informatif)", "10 (S1–S10)", "S11, S12"),
      row("2", "Les traditions (texte informatif)", "10 (S13–S22)", "S23, S24"),
      row("3", "Les médias (texte informatif)", "10 (S25–S34)", "S35, S36"),
      row("4", "La délinquance juvénile (texte narratif)", "10 (S37–S46)", "S47, S48"),
      row("5", "La pêche (texte descriptif)", "10 (S49–S58)", "S59, S60"),
      row("6", "L'environnement (texte descriptif)", "10 (S61–S70)", "S71, S72"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 60 séances de leçon + 6 révisions + 6 tests = 72 séances. Le français est enseigné 5 heures par semaine ; chaque thématique travaille les six composantes du programme.", { bold: true, size: SZ.FICHE })]),
  ];
}

async function main() {
  const doc = new Document({
    styles: {
      default: { document: { run: { font: FONT, size: SZ.BODY } } },
      characterStyles: [{
        id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont",
        run: { color: C.BLUE, font: FONT },
      }],
    },
    sections: [{
      properties: { page: { margin: { top: 283, bottom: 283, left: 283, right: 283 } } },
      children: [...cover()],
    }, {
      properties: { page: { margin: { top: 720, bottom: 720, left: 750, right: 750 } } },
      children: [
        ...foreword(), pageBreak(),
        ...howToUse(), pageBreak(),
        ...contents(), pageBreak(),
        ...dashboard(), pageBreak(),
        ...require("./unit1")(),
        ...require("./unit2")(),
        ...require("./unit3")(),
        ...require("./unit4")(),
        ...require("./unit5")(),
        ...require("./unit6")(), pageBreak(),
        ...require("./annexes")(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Francais_T7_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main();
