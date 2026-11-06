// Manuel de Français T3 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t3.png");
  if (fs.existsSync(f)) return [img("cover_francais_t3.png", 596, 1376 / 768, "Couverture provisoire du manuel Français T3")];
  return [p([run("FRANÇAIS T3 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T3 (PE T3) et ses orientations pédagogiques."),
    p("En T3, les apprenants découvrent la langue française, la pratiquent à l'oral comme à l'écrit et apprennent à l'apprécier. L'année s'organise autour de six grandes thématiques proches de la vie de l'apprenant : les aliments, la famille élargie, le temps, l'environnement scolaire, la ferme et le marché. Chaque thématique travaille les six composantes du programme : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : le résumé que les apprenants recopient dans leur cahier. Les textes sont courts (quatre à six phrases), les consignes sont très simples et les images nombreuses, car le T3 est le début du français écrit."),
    p("Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision avec une dictée courte préparée, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
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
    p([run("Les six composantes du programme (5 heures 50 par semaine)", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Compréhension orale (60 min) — écouter et comprendre (pré-écoute, écoute, post-écoute)."),
    p("• Compréhension écrite (60 min) — lire et comprendre de courts textes."),
    p("• Fonctionnement de la langue (60 min) — lexique, grammaire, conjugaison, orthographe."),
    p("• Production orale (60 min) — décrire, présenter, donner son avis."),
    p("• Production écrite (60 min) — écrire des phrases simples puis un petit texte."),
    p("• Lecture-fluidité (50 min) — bien prononcer les sons et lire à haute voix.", { after: 120 }),
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
    tocLink("unit1", "UNITÉ 1 — LES ALIMENTS (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : « Les trois repas de la journée »"),
    tocLink("s2", "    Séance 2 — Lexique : les aliments, les goûts et les ustensiles"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Le repas de fête »"),
    tocLink("s4", "    Séance 4 — Les adjectifs qualificatifs"),
    tocLink("s5", "    Séance 5 — Comparer : plus… que, moins… que, aussi… que"),
    tocLink("s6", "    Séance 6 — Le présent : être, avoir, faire"),
    tocLink("s7", "    Séance 7 — Le présent des verbes en -er : aimer, manger"),
    tocLink("s8", "    Séance 8 — Lecture-fluidité : les sons [ã] (an, en, em, am) et [õ] (on, om)"),
    tocLink("s9", "    Séance 9 — Production orale : mon avis sur le goût"),
    tocLink("s10", "    Séance 10 — Production écrite : mon plat préféré"),
    tocLink("s11", "    Séance 11 — Révision et dictée préparée"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LA FAMILLE ÉLARGIE (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : « La grande famille de Tiana »"),
    tocLink("s14", "    Séance 14 — Lexique : les membres de la famille élargie"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : l'arbre généalogique"),
    tocLink("s16", "    Séance 16 — Les pronoms personnels : il, elle, ils, elles"),
    tocLink("s17", "    Séance 17 — Les adjectifs possessifs"),
    tocLink("s18", "    Séance 18 — Les indicateurs de temps et de lieu"),
    tocLink("s19", "    Séance 19 — L'imparfait des verbes en -er"),
    tocLink("s20", "    Séance 20 — Lecture-fluidité : les sons [œ] (e, eu, œu) et [ɛ̃] (ain, in)"),
    tocLink("s21", "    Séance 21 — Production orale : je présente ma famille"),
    tocLink("s22", "    Séance 22 — Production écrite : ma famille"),
    tocLink("s23", "    Séance 23 — Révision et dictée préparée"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LE TEMPS (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : « La journée de Hery »"),
    tocLink("s26", "    Séance 26 — Lexique : les activités quotidiennes et les moments de la journée"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : « Du matin au soir »"),
    tocLink("s28", "    Séance 28 — Le genre : féminin et masculin"),
    tocLink("s29", "    Séance 29 — L'ordre des mots dans la phrase simple"),
    tocLink("s30", "    Séance 30 — Le présent : vouloir, pouvoir, devoir (tu) et les verbes en -er au pluriel"),
    tocLink("s31", "    Séance 31 — Lecture-fluidité : les sons [o] (eau, ot, ô) et [u] (ou)"),
    tocLink("s32", "    Séance 32 — Production orale : je raconte ma journée"),
    tocLink("s33", "    Séance 33 — Production écrite : ma journée"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : je relis mes textes de l'unité"),
    tocLink("s35", "    Séance 35 — Révision et dictée préparée"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — L'ENVIRONNEMENT SCOLAIRE (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : « Dans la cour de l'école »"),
    tocLink("s38", "    Séance 38 — Lexique : les lieux et les objets de l'école"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : « Les règles de la classe »"),
    tocLink("s40", "    Séance 40 — Les phrases interrogatives : qui ? que ? où ?"),
    tocLink("s41", "    Séance 41 — Les phrases exclamatives"),
    tocLink("s42", "    Séance 42 — Les consignes du maître : ranger, effacer, prendre, faire"),
    tocLink("s43", "    Séance 43 — Lecture-fluidité : les sons de l'école"),
    tocLink("s44", "    Séance 44 — Production orale : je pose des questions"),
    tocLink("s45", "    Séance 45 — Production écrite : les règles de notre classe"),
    tocLink("s46", "    Séance 46 — Lecture-fluidité : je lis les consignes"),
    tocLink("s47", "    Séance 47 — Révision et dictée préparée"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — LA FERME (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : « Une journée à la ferme »"),
    tocLink("s50", "    Séance 50 — Lexique : les animaux de la ferme et leurs cris"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : « Les cinq poussins »"),
    tocLink("s52", "    Séance 52 — Lexique : le mâle, la femelle, le petit — habitats et aliments"),
    tocLink("s53", "    Séance 53 — La négation : ne… pas, ne… plus, ne… jamais"),
    tocLink("s54", "    Séance 54 — Le futur proche : aller + infinitif"),
    tocLink("s55", "    Séance 55 — Lecture : les sons [œ̃] (un, um) et [y] (u)"),
    tocLink("s56", "    Séance 56 — Production orale : je raconte une journée à la ferme"),
    tocLink("s57", "    Séance 57 — Production écrite : mon petit récit « Ma journée à la ferme »"),
    tocLink("s58", "    Séance 58 — Lecture-fluidité : la comptine de la ferme (les rimes)"),
    tocLink("s59", "    Séance 59 — Révision et dictée préparée"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("unit6", "UNITÉ 6 — LE MARCHÉ (Séances 61–72)", { bold: true, size: 26 }),
    tocLink("s61", "    Séance 61 — Compréhension orale : « Le jour du marché »"),
    tocLink("s62", "    Séance 62 — Lexique : les acteurs et les endroits du marché"),
    tocLink("s63", "    Séance 63 — Compréhension écrite : « Hier, au marché »"),
    tocLink("s64", "    Séance 64 — Lexique : les produits, le prix et la qualité"),
    tocLink("s65", "    Séance 65 — Le passé composé : avoir + participe passé"),
    tocLink("s66", "    Séance 66 — Les verbes du marché au passé : hier, d'abord, puis, enfin"),
    tocLink("s67", "    Séance 67 — Lecture : le dialogue du marché"),
    tocLink("s68", "    Séance 68 — Production orale : j'achète et je marchande"),
    tocLink("s69", "    Séance 69 — Production écrite : mon récit au passé « Hier, au marché »"),
    tocLink("s70", "    Séance 70 — Lecture-fluidité : je relis les textes du marché"),
    tocLink("s71", "    Séance 71 — Révision et dictée préparée"),
    tocLink("s72", "    Séance 72 — Test"),
    p("", { after: 40 }),
    tocLink("annex1", "ANNEXE 1 — L'imagier des 6 thématiques", { bold: true, size: 26 }),
    tocLink("annex2", "ANNEXE 2 — Le guide du petit rédacteur", { bold: true, size: 26 }),
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
      row("1", "Les aliments (texte descriptif)", "10 (S1–S10)", "S11, S12"),
      row("2", "La famille élargie (texte descriptif)", "10 (S13–S22)", "S23, S24"),
      row("3", "Le temps (texte descriptif)", "10 (S25–S34)", "S35, S36"),
      row("4", "L'environnement scolaire (texte descriptif)", "10 (S37–S46)", "S47, S48"),
      row("5", "La ferme (texte narratif)", "10 (S49–S58)", "S59, S60"),
      row("6", "Le marché (texte narratif)", "10 (S61–S70)", "S71, S72"),
    ]}),
    p("", { after: 80 }),
    p([run("Total : 60 séances de leçon + 6 révisions + 6 tests = 72 séances. Le français est enseigné 5 heures 50 par semaine ; chaque thématique dure 32 heures et travaille les six composantes du programme.", { bold: true, size: SZ.FICHE })]),
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
    title: "Manuel Français T3 — J-Learn",
    subject: "Français, Trimestre scolaire T3, Madagascar",
    creator: "J-Learn",
    description: "Manuel scolaire de français T3 : 6 unités, 72 séances, exercices corrigés, audios et annexes.",
    keywords: "français, T3, J-Learn, Madagascar, manuel scolaire",
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
  const out = path.join(__dirname, "Manuel_Francais_T3_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
