// Manuel de Français T9 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t9.png");
  if (fs.existsSync(f)) return [img("cover_francais_t9.png", 718, 1264 / 848)];
  return [p([run("FRANÇAIS T9 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T9 (PE T9) et sa répartition annuelle. Le français y est enseigné cinq heures par semaine."),
    p("L'année s'organise autour des sept thématiques du programme : l'artisanat, les pays, le tourisme, la corruption, l'alimentation et la santé, les médias et les nouvelles technologies, les métiers et les professions. Chaque thématique travaille les six composantes : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("L'année fait pratiquer quatre grands types de textes : le texte explicatif (reportage, guide de voyage), le texte narratif (récit de voyage et son schéma actanciel), le texte argumentatif (article d'opinion, article de nutrition) et le texte administratif (compte rendu, offre d'emploi, curriculum vitae, lettre de motivation) — un programme qui prépare l'examen et la vie active."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : une règle courte, des exemples où l'essentiel est en gras, une petite explication entre crochets, puis un exercice d'application immédiat et une série « Je m'entraîne » corrigée. C'est le résumé que les apprenants recopient dans leur cahier."),
    p("Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision avec dictée préparée, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
    p("Les activités proposées sont courtes, variées et dynamiques : débats, jeux de rôle, procédé La Martinière, travail en binômes — conformément aux orientations du programme. L'enseignant valorise les connaissances antérieures et la langue maternelle pour favoriser les transferts.", { after: 160 }),
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
    p([run("La « Leçon du jour »", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Une règle courte — des exemples avec l'essentiel en gras — une explication entre crochets [comme ceci] — un exercice d'application immédiat — une série « Je m'entraîne » avec corrigés."),
    p("• La grande « LEÇON — UNITÉ » à la fin de chaque unité rassemble tout le résumé : parfaite pour la révision et le test !", { after: 120 }),
    p([run("Les six composantes du programme", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Compréhension orale — écouter et comprendre (pré-écoute, écoute, post-écoute)."),
    p("• Compréhension écrite — lire et comprendre des textes variés."),
    p("• Fonctionnement de la langue — lexique, grammaire, conjugaison, orthographe."),
    p("• Production orale — exposer, débattre, argumenter."),
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
    tocLink("unit1", "UNITÉ 1 — L'ARTISANAT (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : reportage « Chez les sculpteurs d'Ambositra »"),
    tocLink("s2", "    Séance 2 — Lexique : formes d'artisanat, outils et matériaux"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Le lamba d'Arivonimamo » — le reportage"),
    tocLink("s4", "    Séance 4 — Les connecteurs spatiaux"),
    tocLink("s5", "    Séance 5 — Le reportage : structure et caractéristiques"),
    tocLink("s6", "    Séance 6 — Demander une précision, une clarification"),
    tocLink("s7", "    Séance 7 — Production orale : débat — l'avenir de l'artisanat à Madagascar"),
    tocLink("s8", "    Séance 8 — Production écrite (1) : expliquer une forme d'artisanat — les idées et le plan"),
    tocLink("s9", "    Séance 9 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s10", "    Séance 10 — Lecture-fluidité : lire un reportage"),
    tocLink("s11", "    Séance 11 — Révision et dictée"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LES PAYS (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : guide de voyage « Bienvenue en Égypte »"),
    tocLink("s14", "    Séance 14 — Lexique : les mots des pays"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « Les sept merveilles du monde antique »"),
    tocLink("s16", "    Séance 16 — Les indicateurs chronologiques"),
    tocLink("s17", "    Séance 17 — Le guide de voyage : structure et caractéristiques"),
    tocLink("s18", "    Séance 18 — Présenter un pays : les phrases de la présentation"),
    tocLink("s19", "    Séance 19 — Production orale : exposé — les sept merveilles du monde"),
    tocLink("s20", "    Séance 20 — Production écrite (1) : mon guide de voyage — les idées et le plan"),
    tocLink("s21", "    Séance 21 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s22", "    Séance 22 — Lecture-fluidité : lire un guide de voyage"),
    tocLink("s23", "    Séance 23 — Révision et dictée"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LE TOURISME (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : récit « Ma première nuit à l'Isalo »"),
    tocLink("s26", "    Séance 26 — Lexique : les mots du tourisme"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : le récit de voyage"),
    tocLink("s28", "    Séance 28 — Le schéma actanciel : héros, objectif, opposant, adjuvant, dénouement"),
    tocLink("s29", "    Séance 29 — Les valeurs du présent"),
    tocLink("s30", "    Séance 30 — Phrases juxtaposées, coordonnées, subordonnées — les connecteurs logiques"),
    tocLink("s31", "    Séance 31 — Production orale : raconter son voyage"),
    tocLink("s32", "    Séance 32 — Production écrite (1) : mon récit de voyage — les idées et le plan"),
    tocLink("s33", "    Séance 33 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : lire un récit de voyage"),
    tocLink("s35", "    Séance 35 — Révision et dictée"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — LA CORRUPTION (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : article d'opinion « Dire non au pot-de-vin »"),
    tocLink("s38", "    Séance 38 — Lexique : les mots de l'intégrité"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : l'article d'opinion — structure et caractéristiques"),
    tocLink("s40", "    Séance 40 — Exprimer la cause, la conséquence et le but"),
    tocLink("s41", "    Séance 41 — Exprimer la condition et l'opposition"),
    tocLink("s42", "    Séance 42 — Conjugaison : six temps et modes pour argumenter"),
    tocLink("s43", "    Séance 43 — Production orale : débat — les secteurs les plus touchés"),
    tocLink("s44", "    Séance 44 — Production écrite (1) : mon article d'opinion — les idées et le plan"),
    tocLink("s45", "    Séance 45 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s46", "    Séance 46 — Lecture-fluidité : lire un article d'opinion"),
    tocLink("s47", "    Séance 47 — Révision et dictée"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — L'ALIMENTATION ET LA SANTÉ (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : chronique « Bien manger pour bien grandir »"),
    tocLink("s50", "    Séance 50 — Lexique : les nutriments et les besoins quotidiens"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : l'article de nutrition"),
    tocLink("s52", "    Séance 52 — Les pronoms indéfinis (1) : tout, certains, plusieurs"),
    tocLink("s53", "    Séance 53 — Les pronoms indéfinis (2) : quelqu'un, personne, quelques-uns"),
    tocLink("s54", "    Séance 54 — L'argumentation : thèse, arguments, exemples"),
    tocLink("s55", "    Séance 55 — Production orale : convaincre — mon assiette équilibrée"),
    tocLink("s56", "    Séance 56 — Production écrite (1) : mon article de nutrition — les idées et le plan"),
    tocLink("s57", "    Séance 57 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s58", "    Séance 58 — Lecture-fluidité : lire un article de nutrition"),
    tocLink("s59", "    Séance 59 — Révision et dictée"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("unit6", "UNITÉ 6 — LES MÉDIAS ET LES NOUVELLES TECHNOLOGIES (Séances 61–72)", { bold: true, size: 26 }),
    tocLink("s61", "    Séance 61 — Compréhension orale : compte rendu « La réunion du club informatique »"),
    tocLink("s62", "    Séance 62 — Lexique : médias, technologies et sécurité en ligne"),
    tocLink("s63", "    Séance 63 — Compréhension écrite : le compte rendu — structure et caractéristiques"),
    tocLink("s64", "    Séance 64 — Le pronom impersonnel « il » et les phrases impersonnelles"),
    tocLink("s65", "    Séance 65 — La voix active et la voix passive"),
    tocLink("s66", "    Séance 66 — Rapporter avec neutralité : du fait au compte rendu"),
    tocLink("s67", "    Séance 67 — Production orale : rendre compte d'un événement"),
    tocLink("s68", "    Séance 68 — Production écrite (1) : mon compte rendu — les idées et le plan"),
    tocLink("s69", "    Séance 69 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s70", "    Séance 70 — Lecture-fluidité : lire un compte rendu"),
    tocLink("s71", "    Séance 71 — Révision et dictée"),
    tocLink("s72", "    Séance 72 — Test"),
    p("", { after: 40 }),
    tocLink("unit7", "UNITÉ 7 — LES MÉTIERS ET LES PROFESSIONS (Séances 73–84)", { bold: true, size: 26 }),
    tocLink("s73", "    Séance 73 — Compréhension orale : l'offre d'emploi à la radio"),
    tocLink("s74", "    Séance 74 — Lexique : métiers, qualités et compétences"),
    tocLink("s75", "    Séance 75 — Compréhension écrite : offre d'emploi, CV et lettre de motivation"),
    tocLink("s76", "    Séance 76 — Conjugaison : les verbes du 3e groupe (prendre, plaire…)"),
    tocLink("s77", "    Séance 77 — L'accord du participe passé avec avoir"),
    tocLink("s78", "    Séance 78 — Les pronoms possessifs"),
    tocLink("s79", "    Séance 79 — Production orale : l'entretien d'embauche"),
    tocLink("s80", "    Séance 80 — Production écrite (1) : mon curriculum vitae"),
    tocLink("s81", "    Séance 81 — Production écrite (2) : ma lettre de motivation"),
    tocLink("s82", "    Séance 82 — Lecture-fluidité : lire une lettre de motivation"),
    tocLink("s83", "    Séance 83 — Révision et dictée"),
    tocLink("s84", "    Séance 84 — Test"),
    p("", { after: 40 }),
    tocLink("annex1", "ANNEXE 1 — L'imagier des 7 thématiques", { bold: true, size: 26 }),
    tocLink("annex2", "ANNEXE 2 — Le guide du rédacteur (expliquer, raconter, argumenter, rendre compte)", { bold: true, size: 26 }),
    tocLink("annex3", "ANNEXE 3 — Toute la conjugaison de l'année (dont subjonctif et conditionnel)", { bold: true, size: 26 }),
    tocLink("annex4", "ANNEXE 4 — Flashcards et jeux de classe", { bold: true, size: 26 }),
    tocLink("annex5", "ANNEXE 5 — Les stratégies de lecture (annexe officielle du programme)", { bold: true, size: 26 }),
    tocLink("annex6", "ANNEXE 6 — Orthographe et accords (dont le participe passé)", { bold: true, size: 26 }),
    tocLink("annex7", "ANNEXE 7 — Le tribunal des homophones", { bold: true, size: 26 }),
    tocLink("annex8", "ANNEXE 8 — Les 100 mots à ne plus jamais rater", { bold: true, size: 26 }),
    tocLink("annex9", "ANNEXE 9 — La boîte à connecteurs (logiques, spatiaux, chronologiques)", { bold: true, size: 26 }),
    tocLink("annex10", "ANNEXE 10 — Mes modèles de textes prêts à l'emploi (dont CV et lettre de motivation)", { bold: true, size: 26 }),
    tocLink("annex11", "ANNEXE 11 — La carte des merveilles : Madagascar et le monde", { bold: true, size: 26 }),
    tocLink("annex12", "ANNEXE 12 — Je m'évalue, unité par unité", { bold: true, size: 26 }),
    p("", { after: 40 }),
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
      row("1", "L'artisanat (texte explicatif : le reportage)", "10 (S1–S10)", "S11, S12"),
      row("2", "Les pays (texte explicatif : le guide de voyage)", "10 (S13–S22)", "S23, S24"),
      row("3", "Le tourisme (texte narratif : le récit de voyage)", "10 (S25–S34)", "S35, S36"),
      row("4", "La corruption (texte argumentatif : l'article d'opinion)", "10 (S37–S46)", "S47, S48"),
      row("5", "L'alimentation et la santé (texte argumentatif)", "10 (S49–S58)", "S59, S60"),
      row("6", "Les médias et les nouvelles technologies (le compte rendu)", "10 (S61–S70)", "S71, S72"),
      row("7", "Les métiers et les professions (offre d'emploi, CV, lettre)", "10 (S73–S82)", "S83, S84"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 70 séances de leçon + 7 révisions + 7 tests = 84 séances. Le français est enseigné 5 heures par semaine ; chaque thématique travaille les six composantes du programme.", { bold: true, size: SZ.FICHE })]),
  ];
}

async function main() {
  const units = [];
  for (let i = 1; i <= 7; i++) {
    if (fs.existsSync(path.join(__dirname, "unit" + i + ".js"))) {
      units.push(...require("./unit" + i)());
    }
  }
  const annex = fs.existsSync(path.join(__dirname, "annexes.js"))
    ? [pageBreak(), ...require("./annexes")()] : [];
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
        ...units,
        ...annex,
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Francais_T9_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main();
