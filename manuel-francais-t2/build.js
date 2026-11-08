// Manuel de Français T2 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t2.png");
  if (fs.existsSync(f)) return [img("cover_francais_t2.png", 596, 1376 / 768, "Couverture provisoire du manuel Francais T2")];
  return [p([run("FRANÇAIS T2 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T2 (PE T2) et ses orientations pédagogiques."),
    p("La classe de T2 est la première année du français écrit : en T1, les apprenants n'ont pratiqué la langue qu'à l'oral. L'année s'organise autour de six grandes thématiques très proches de la vie de l'apprenant : les formules de politesse, la présentation de la famille, la famille restreinte, les habitudes quotidiennes, la maison et les objets de la salle de classe. Chaque thématique travaille les six composantes du programme : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("Parce que tout commence cette année, l'oral domine : mimes, gestes, comptines, jeux et dialogues très courts. L'écrit avance à tout petits pas : l'alphabet et les syllabes en fil rouge, puis copier, compléter, remettre en ordre — jamais plus de deux à quatre phrases. Les textes de lecture ont trois ou quatre phrases très simples, et les images sont partout."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : le résumé que les apprenants recopient (ou observent, en début d'année) dans leur cahier. Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision avec une dictée très courte préparée, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
    p("Les activités proposées sont courtes, variées et dynamiques : jeux, comptines, saynètes, manipulations d'objets et d'étiquettes — conformément aux orientations du programme. L'enseignant valorise les connaissances antérieures et la langue maternelle pour favoriser les transferts.", { after: 160 }),
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
    p([run("Les six composantes du programme (5 heures 50 par semaine)", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Compréhension orale (60 min) — écouter et comprendre (pré-écoute, écoute, post-écoute)."),
    p("• Compréhension écrite (60 min) — lire et comprendre de très courts textes."),
    p("• Fonctionnement de la langue (60 min) — lexique, grammaire, conjugaison, orthographe."),
    p("• Production orale (60 min) — saluer, se présenter, raconter, décrire."),
    p("• Production écrite (60 min) — écrire des syllabes, copier et compléter des phrases."),
    p("• Lecture-fluidité (50 min) — l'alphabet, les syllabes, les sons, la lecture à haute voix.", { after: 120 }),
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
    tocLink("unit1", "UNITÉ 1 — LES FORMULES DE POLITESSE (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : « Bonjour, monsieur ! »"),
    tocLink("s2", "    Séance 2 — Lexique : les cinq mots magiques"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Merci, Hery ! »"),
    tocLink("s4", "    Séance 4 — Je veux, je peux"),
    tocLink("s5", "    Séance 5 — Je fais, je dois"),
    tocLink("s6", "    Séance 6 — Lecture : l'alphabet"),
    tocLink("s7", "    Séance 7 — Lecture : les syllabes"),
    tocLink("s8", "    Séance 8 — Lecture : les sons [ɛ̃] (in, im) et [u] (ou)"),
    tocLink("s9", "    Séance 9 — Production orale : je salue et je me présente"),
    tocLink("s10", "    Séance 10 — Production écrite : je copie et je complète"),
    tocLink("s11", "    Séance 11 — Révision et dictée préparée"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LA PRÉSENTATION DE LA FAMILLE (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : « Voici ma famille ! »"),
    tocLink("s14", "    Séance 14 — Lexique : les mots de la famille"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « La famille de Hery »"),
    tocLink("s16", "    Séance 16 — Je, tu, il, elle — il s'appelle, elle s'appelle"),
    tocLink("s17", "    Séance 17 — Mon, ma — son, sa"),
    tocLink("s18", "    Séance 18 — Lecture : les syllabes de la famille et la majuscule des prénoms"),
    tocLink("s19", "    Séance 19 — Lecture : le son [e] écrit -er et -ez"),
    tocLink("s20", "    Séance 20 — Je suis son frère, elle est ma sœur"),
    tocLink("s21", "    Séance 21 — Production orale : je présente ma famille"),
    tocLink("s22", "    Séance 22 — Production écrite : mes phrases de présentation"),
    tocLink("s23", "    Séance 23 — Révision et dictée préparée"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LA FAMILLE RESTREINTE (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : « La famille de Vola »"),
    tocLink("s26", "    Séance 26 — Lexique : les parents, les enfants, le bébé"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : « Les parents et les enfants »"),
    tocLink("s28", "    Séance 28 — Le verbe être au présent"),
    tocLink("s29", "    Séance 29 — Le verbe avoir au présent"),
    tocLink("s30", "    Séance 30 — Le verbe aller au présent"),
    tocLink("s31", "    Séance 31 — Lecture : le son [e] écrit é"),
    tocLink("s32", "    Séance 32 — Lecture-fluidité : je lis de mieux en mieux"),
    tocLink("s33", "    Séance 33 — Production orale : je parle de ma famille"),
    tocLink("s34", "    Séance 34 — Production écrite : mes phrases avec être, avoir, aller"),
    tocLink("s35", "    Séance 35 — Révision et dictée préparée"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — LES HABITUDES QUOTIDIENNES (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : « La journée de Hery »"),
    tocLink("s38", "    Séance 38 — Lexique : les actions de la journée"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : « Le matin de Tiana »"),
    tocLink("s40", "    Séance 40 — Les verbes en -er au présent"),
    tocLink("s41", "    Séance 41 — Le matin, à midi, le soir, la nuit"),
    tocLink("s42", "    Séance 42 — Le verbe finir au présent"),
    tocLink("s43", "    Séance 43 — Lecture : le son [wa] écrit oi"),
    tocLink("s44", "    Séance 44 — Lecture : le son [k] écrit q et qu"),
    tocLink("s45", "    Séance 45 — Production orale : je raconte ma journée"),
    tocLink("s46", "    Séance 46 — Production écrite : j'écris ma journée"),
    tocLink("s47", "    Séance 47 — Révision et dictée préparée"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — LA MAISON (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : « La maison de Tiana »"),
    tocLink("s50", "    Séance 50 — Lexique : les parties, les pièces et les meubles"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : « Dans la maison »"),
    tocLink("s52", "    Séance 52 — Un ou une, le ou la — le genre"),
    tocLink("s53", "    Séance 53 — Le pluriel : les, des et le s"),
    tocLink("s54", "    Séance 54 — Sur, sous, dans, devant, derrière"),
    tocLink("s55", "    Séance 55 — Lecture : le son [k] écrit c"),
    tocLink("s56", "    Séance 56 — Lecture : le son [g] écrit g"),
    tocLink("s57", "    Séance 57 — Production orale : je présente ma maison"),
    tocLink("s58", "    Séance 58 — Production écrite : j'écris ma maison"),
    tocLink("s59", "    Séance 59 — Révision et dictée préparée"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("unit6", "UNITÉ 6 — LES OBJETS DE LA SALLE DE CLASSE (Séances 61–72)", { bold: true, size: 26 }),
    tocLink("s61", "    Séance 61 — Compréhension orale : « Dans ma classe »"),
    tocLink("s62", "    Séance 62 — Lexique : les meubles de la classe et les fournitures"),
    tocLink("s63", "    Séance 63 — Compréhension écrite : « Le cartable de Hery »"),
    tocLink("s64", "    Séance 64 — Les articles : le, la, les — un, une, des"),
    tocLink("s65", "    Séance 65 — Les petits mots qui décrivent"),
    tocLink("s66", "    Séance 66 — L'accord : un cahier bleu, une règle bleue"),
    tocLink("s67", "    Séance 67 — Lecture : le h muet"),
    tocLink("s68", "    Séance 68 — Lecture : le son [j]"),
    tocLink("s69", "    Séance 69 — Production orale : je présente mes affaires"),
    tocLink("s70", "    Séance 70 — Production écrite : j'écris mes affaires"),
    tocLink("s71", "    Séance 71 — Révision et dictée préparée"),
    tocLink("s72", "    Séance 72 — Test"),
    p("", { after: 40 }),
    tocLink("annex1", "ANNEXE 1 — L'imagier des 6 thématiques", { bold: true, size: 26 }),
    tocLink("annex2", "ANNEXE 2 — Le guide du petit écrivain", { bold: true, size: 26 }),
    tocLink("annex3", "ANNEXE 3 — Toute la conjugaison de l'année", { bold: true, size: 26 }),
    tocLink("annex4", "ANNEXE 4 — Flashcards et jeux de classe", { bold: true, size: 26 }),
    tocLink("annex5", "ANNEXE 5 — Les stratégies de lecture", { bold: true, size: 26 }),
    tocLink("annex6", "ANNEXE 6 — Orthographe et sons de l'année", { bold: true, size: 26 }),
    p("", { after: 40 }),
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
      row("1", "Les formules de politesse (le dialogue)", "10 (S1–S10)", "S11, S12"),
      row("2", "La présentation de la famille (la présentation)", "10 (S13–S22)", "S23, S24"),
      row("3", "La famille restreinte (le portrait de famille)", "10 (S25–S34)", "S35, S36"),
      row("4", "Les habitudes quotidiennes (le récit du quotidien)", "10 (S37–S46)", "S47, S48"),
      row("5", "La maison (la description)", "10 (S49–S58)", "S59, S60"),
      row("6", "Les objets de la salle de classe (la description)", "10 (S61–S70)", "S71, S72"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 60 séances de leçon + 6 révisions + 6 tests = 72 séances. Le français est enseigné 5 heures 50 par semaine ; chaque thématique dure 32 heures et travaille les six composantes du programme. T2 est la première année du français écrit : l'alphabet et les syllabes sont travaillés en fil rouge toute l'année.", { bold: true, size: SZ.FICHE })]),
  ];
}

async function main() {
  const units = [];
  for (let i = 1; i <= 6; i++) {
    const f = path.join(__dirname, `unit${i}.js`);
    if (fs.existsSync(f)) units.push(...require(`./unit${i}`)());
  }
  const annexFile = path.join(__dirname, "annexes.js");
  const annexes = fs.existsSync(annexFile) ? [pageBreak(), ...require("./annexes")()] : [];
  const doc = new Document({
    title: "Manuel Français T2 — J-Learn",
    subject: "Français, Trimestre scolaire T2, Madagascar",
    creator: "J-Learn",
    description: "Manuel scolaire de français T2 : 6 unités, 72 séances, exercices corrigés, audios et annexes.",
    keywords: "français, T2, J-Learn, Madagascar, manuel scolaire",
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
  const out = path.join(__dirname, "Manuel_Francais_T2_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
