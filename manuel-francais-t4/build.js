// Manuel de Français T4 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t4.png");
  if (fs.existsSync(f)) return [img("cover_francais_t4.png", 718, 1264 / 848)];
  return [p([run("FRANÇAIS T4 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T4 (PE T4) et ses orientations pédagogiques."),
    p("Le français y est considéré comme un outil de communication, d'apprentissage et d'expression. L'année s'organise autour de cinq grandes thématiques proches de la vie de l'apprenant : la ville et le village, les loisirs, le temps et les saisons, les tenues vestimentaires selon les saisons, et le commerce. Chaque thématique travaille les six composantes du programme : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : le résumé que les apprenants recopient dans leur cahier."),
    p("Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision avec une dictée préparée, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
    p("Les activités proposées sont courtes, variées et dynamiques : jeux, chansons, saynètes, jeux de rôle — conformément aux orientations du programme. L'enseignant valorise les connaissances antérieures et la langue maternelle pour favoriser les transferts.", { after: 160 }),
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
    p([run("Les six composantes du programme (5 heures par semaine)", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Compréhension orale (45 min) — écouter et comprendre (pré-écoute, écoute, post-écoute)."),
    p("• Compréhension écrite (45 min) — lire et comprendre des textes variés."),
    p("• Fonctionnement de la langue (60 min) — lexique, grammaire, conjugaison, orthographe."),
    p("• Production orale (45 min) — décrire, présenter, discuter."),
    p("• Production écrite (60 min) — planifier, rédiger, relire, améliorer."),
    p("• Lecture-fluidité (45 min) — lire à haute voix avec fluidité, précision et expressivité.", { after: 120 }),
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
    tocLink("unit1", "UNITÉ 1 — LA VILLE ET LE VILLAGE (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : documentaire « Deux enfants, deux maisons »"),
    tocLink("s2", "    Séance 2 — Lexique : les mots de la ville et du village"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « La lettre de Fara » — synonymes et homonymes"),
    tocLink("s4", "    Séance 4 — La comparaison : plus… que, moins… que, comme"),
    tocLink("s5", "    Séance 5 — Les prépositions de lieu : dans, sur, sous, à côté de, près de, loin de"),
    tocLink("s6", "    Séance 6 — L'accord des adjectifs qualificatifs ; les adjectifs irréguliers"),
    tocLink("s7", "    Séance 7 — Le présent des verbes du 1er et du 2e groupe"),
    tocLink("s8", "    Séance 8 — Production orale : je présente ma ville ou mon village"),
    tocLink("s9", "    Séance 9 — Production écrite : je décris ma ville ou mon village"),
    tocLink("s10", "    Séance 10 — Lecture-fluidité : la ponctuation de base"),
    tocLink("s11", "    Séance 11 — Révision et dictée préparée"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LES LOISIRS (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : « Le dimanche de la famille Rakoto »"),
    tocLink("s14", "    Séance 14 — Lexique : les types de loisirs"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « Dimanche au lac »"),
    tocLink("s16", "    Séance 16 — Les déterminants démonstratifs : ce, cet, cette, ces"),
    tocLink("s17", "    Séance 17 — Les pronoms COD : le, la, l', les"),
    tocLink("s18", "    Séance 18 — Exprimer ses goûts : j'aime, je préfère… parce que"),
    tocLink("s19", "    Séance 19 — Production orale : nous discutons de nos loisirs préférés"),
    tocLink("s20", "    Séance 20 — Production écrite (1) : les idées et le plan"),
    tocLink("s21", "    Séance 21 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s22", "    Séance 22 — Lecture-fluidité : lire un texte sur les loisirs"),
    tocLink("s23", "    Séance 23 — Révision et dictée préparée"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LE TEMPS ET LES SAISONS (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : le bulletin météo"),
    tocLink("s26", "    Séance 26 — Lexique : les jours, les mois, les saisons"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : « Les deux saisons de Madagascar »"),
    tocLink("s28", "    Séance 28 — Les adverbes de temps : avant, après, pendant"),
    tocLink("s29", "    Séance 29 — Les déterminants interrogatifs : quel, quelle, quels, quelles"),
    tocLink("s30", "    Séance 30 — Les comparatifs et les superlatifs"),
    tocLink("s31", "    Séance 31 — La forme impersonnelle ; le futur proche"),
    tocLink("s32", "    Séance 32 — Production orale : je présente la météo"),
    tocLink("s33", "    Séance 33 — Production écrite : ma saison préférée"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : lire un bulletin météo"),
    tocLink("s35", "    Séance 35 — Révision et dictée préparée"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — LES TENUES VESTIMENTAIRES (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : « La valise de Mamy »"),
    tocLink("s38", "    Séance 38 — Lexique : les vêtements et les accessoires"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : « S'habiller selon le temps »"),
    tocLink("s40", "    Séance 40 — L'accord des déterminants"),
    tocLink("s41", "    Séance 41 — Les phrases affirmatives et négatives"),
    tocLink("s42", "    Séance 42 — Décrire une tenue : les adjectifs de couleur"),
    tocLink("s43", "    Séance 43 — Production orale (1) : je décris une tenue"),
    tocLink("s44", "    Séance 44 — Production orale (2) : je conseille une tenue selon le temps"),
    tocLink("s45", "    Séance 45 — Production écrite : ma tenue préférée"),
    tocLink("s46", "    Séance 46 — Lecture-fluidité : lire une description"),
    tocLink("s47", "    Séance 47 — Révision et dictée préparée"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — LE COMMERCE (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : récit « Au marché avec maman »"),
    tocLink("s50", "    Séance 50 — Lexique : les commerçants et leurs commerces"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : « La course de Lalao » — le récit"),
    tocLink("s52", "    Séance 52 — Le groupe sujet et le groupe verbal"),
    tocLink("s53", "    Séance 53 — Les indicateurs temporels et chronologiques"),
    tocLink("s54", "    Séance 54 — Les adjectifs possessifs"),
    tocLink("s55", "    Séance 55 — L'imparfait : être, avoir, aller et les verbes en -er"),
    tocLink("s56", "    Séance 56 — Production orale : je passe une commande (jeu de rôle)"),
    tocLink("s57", "    Séance 57 — Production écrite : je raconte un achat"),
    tocLink("s58", "    Séance 58 — Lecture-fluidité : lire un récit"),
    tocLink("s59", "    Séance 59 — Révision et dictée préparée"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("annex1", "ANNEXE 1 — L'imagier des 5 thématiques", { bold: true, size: 26 }),
    tocLink("annex2", "ANNEXE 2 — Le guide du rédacteur (décrire, informer, raconter)", { bold: true, size: 26 }),
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
      row("1", "La ville et le village (textes descriptif et informatif)", "10 (S1–S10)", "S11, S12"),
      row("2", "Les loisirs (textes descriptif et informatif)", "10 (S13–S22)", "S23, S24"),
      row("3", "Le temps et les saisons (textes descriptif et informatif)", "10 (S25–S34)", "S35, S36"),
      row("4", "Les tenues vestimentaires selon les saisons (textes descriptif et informatif)", "10 (S37–S46)", "S47, S48"),
      row("5", "Le commerce (texte narratif simple)", "10 (S49–S58)", "S59, S60"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 50 séances de leçon + 5 révisions + 5 tests = 60 séances. Le français est enseigné 5 heures par semaine ; chaque thématique dure 33 heures et travaille les six composantes du programme.", { bold: true, size: SZ.FICHE })]),
  ];
}

async function main() {
  const units = [];
  for (let i = 1; i <= 5; i++) {
    const f = path.join(__dirname, `unit${i}.js`);
    if (fs.existsSync(f)) units.push(...require(`./unit${i}`)());
  }
  const annexFile = path.join(__dirname, "annexes.js");
  const annexes = fs.existsSync(annexFile) ? [pageBreak(), ...require("./annexes")()] : [];
  const doc = new Document({
    title: "Manuel Français T4 — J-Learn",
    subject: "Français, Trimestre 4 (CE), Madagascar",
    creator: "J-Learn",
    description: "Manuel scolaire de français T4 : 5 unités, 60 séances, exercices corrigés, audios et annexes.",
    keywords: "français, T4, J-Learn, Madagascar, manuel scolaire",
    styles: {
      default: {
        document: { run: { font: FONT, size: SZ.BODY, language: { value: "fr-FR" } } },
        heading1: { run: { font: FONT, color: "000000" }, paragraph: {} },
        heading2: { run: { font: FONT, color: "000000" }, paragraph: {} },
      },
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
        ...annexes,
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Francais_T4_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main();
