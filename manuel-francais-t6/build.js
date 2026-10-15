// Manuel de Français T6 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t6.png");
  if (fs.existsSync(f)) return [img("cover_francais_t6.png", 718, 1376 / 768)];
  return [p([run("FRANÇAIS T6 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T6 (PE T6) et ses orientations pédagogiques."),
    p("Le français y est considéré comme un outil de communication, d'apprentissage et d'expression. L'année s'organise autour de six grandes thématiques proches de la vie de l'apprenant : le voyage, la vie en société, les nouvelles technologies, les sports, les événements familiaux et le monde imaginaire. Chaque thématique travaille les six composantes du programme : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
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
    tocLink("unit1", "UNITÉ 1 — LE VOYAGE (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : documentaire « Pourquoi voyager ? »"),
    tocLink("s2", "    Séance 2 — Lexique : les types de voyage et la carte de voyage"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Le train de la falaise » — le texte descriptif"),
    tocLink("s4", "    Séance 4 — Les expressions imagées : comparaison, métaphore, énumération"),
    tocLink("s5", "    Séance 5 — Les adjectifs qualificatifs : position, fonction, accord"),
    tocLink("s6", "    Séance 6 — Les marqueurs de lieu"),
    tocLink("s7", "    Séance 7 — Production orale : donner son avis sur une destination"),
    tocLink("s8", "    Séance 8 — Production écrite (1) : les idées et le plan"),
    tocLink("s9", "    Séance 9 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s10", "    Séance 10 — Lecture-fluidité : la ponctuation"),
    tocLink("s11", "    Séance 11 — Révision"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LA VIE EN SOCIÉTÉ (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : compte-rendu « La journée d'entraide »"),
    tocLink("s14", "    Séance 14 — Lexique : vivre ensemble — biens publics, patrimoine, savoir-vivre"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « Le jardin public d'Antanimena »"),
    tocLink("s16", "    Séance 16 — Les pronoms démonstratifs"),
    tocLink("s17", "    Séance 17 — La phrase impérative, l'obligation et la nécessité"),
    tocLink("s18", "    Séance 18 — Le présent, l'imparfait et les connecteurs logiques"),
    tocLink("s19", "    Séance 19 — Production orale : le compte-rendu oral"),
    tocLink("s20", "    Séance 20 — Production écrite (1) : l'affiche — les idées et le plan"),
    tocLink("s21", "    Séance 21 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s22", "    Séance 22 — Lecture-fluidité : lire un compte-rendu"),
    tocLink("s23", "    Séance 23 — Révision"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LES NOUVELLES TECHNOLOGIES (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : tutoriel « Le petit guide de Lova »"),
    tocLink("s26", "    Séance 26 — Lexique : les mots du numérique"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : « La salle informatique » — deviner un mot inconnu"),
    tocLink("s28", "    Séance 28 — L'expression de la cause"),
    tocLink("s29", "    Séance 29 — La forme négative ; l'impérative négative"),
    tocLink("s30", "    Séance 30 — Les modes verbaux : infinitif, futur simple, subjonctif"),
    tocLink("s31", "    Séance 31 — Production orale (1) : opinions et mises en garde — le débat"),
    tocLink("s32", "    Séance 32 — Production orale (2) : présenter un tutoriel"),
    tocLink("s33", "    Séance 33 — Production écrite : rédiger un mode d'emploi"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : lire un mode d'emploi"),
    tocLink("s35", "    Séance 35 — Révision"),
    tocLink("s36", "    Séance 36 — Test"),
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
      row("1", "Le voyage (texte descriptif)", "10 (S1–S10)", "S11, S12"),
      row("2", "La vie en société (textes informatif et injonctif)", "10 (S13–S22)", "S23, S24"),
      row("3", "Les nouvelles technologies (textes injonctif et explicatif)", "10 (S25–S34)", "S35, S36"),
      row("4", "Les sports (texte explicatif)", "10 (S37–S46)", "S47, S48"),
      row("5", "Les événements familiaux (texte narratif)", "10 (S49–S58)", "S59, S60"),
      row("6", "Le monde imaginaire (texte narratif)", "10 (S61–S70)", "S71, S72"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 60 séances de leçon + 6 révisions + 6 tests = 72 séances. Le français est enseigné 5 heures par semaine ; chaque thématique dure 27 heures et travaille les six composantes du programme.", { bold: true, size: SZ.FICHE })]),
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
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Francais_T6_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main();
