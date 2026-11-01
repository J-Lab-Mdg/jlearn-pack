// Manuel de Français T8 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink, bookmarkTitle, cell } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_francais_t8.png");
  if (fs.existsSync(f)) return [img("cover_francais_t8.png", 718, 1264 / 848)];
  return [p([run("FRANÇAIS T8 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("AVANT-PROPOS", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("Ce manuel suit fidèlement le programme d'études officiel de français de la classe de T8 (PE T8), sa répartition annuelle (RAPE T8) et le fascicule de ressources pédagogiques (FRP Français T8)."),
    p("Le français y est considéré comme un outil de communication, d'apprentissage et d'expression. L'année s'organise autour des sept thématiques du programme : le tourisme, les catastrophes naturelles, les arts, l'artisanat, la culture, la musique et les nouvelles technologies. Chaque thématique travaille les six composantes : la compréhension orale, la compréhension écrite, le fonctionnement de la langue, la production orale, la production écrite et la lecture-fluidité."),
    p("L'année fait découvrir trois grands types de textes : le texte injonctif (règlement, itinéraire, notice, dépliant), le texte narratif (récit, schéma narratif) et le texte explicatif (reportage, chronique, texte documentaire)."),
    p("Chaque séance suit trois grands moments : I. Révision — II. Nouvelle leçon — III. Évaluation. La nouvelle leçon avance en six petits pas : mise en route, présentation, observation, analyse, synthèse, entraînement. L'enseignant inscrit lui-même la durée de chaque étape dans la fiche."),
    p("Chaque fiche de préparation est suivie d'une « Leçon du jour » d'une page : une règle courte, des exemples où l'essentiel est en gras, une petite explication entre crochets, puis un exercice d'application immédiat. C'est le résumé que les apprenants recopient dans leur cahier."),
    p("Chaque unité se termine par une grande leçon récapitulative, des exercices supplémentaires, une séance de révision avec dictée préparée, un test noté sur 20 et une page « Je sais… » pour l'auto-évaluation."),
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
    p([run("La « Leçon du jour »", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Une règle courte — des exemples avec l'essentiel en gras — une explication entre crochets [comme ceci] — un exercice d'application immédiat."),
    p("• La grande « LEÇON — UNITÉ » à la fin de chaque unité rassemble tout le résumé : parfaite pour la révision et le test !", { after: 120 }),
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
    tocLink("unit1", "UNITÉ 1 — LE TOURISME (Séances 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Séance 1 — Compréhension orale : consignes du guide « Bienvenue à l'Allée des baobabs »"),
    tocLink("s2", "    Séance 2 — Lexique : les mots du tourisme"),
    tocLink("s3", "    Séance 3 — Compréhension écrite : « Visiter les Tsingy de Bemaraha » — le texte injonctif"),
    tocLink("s4", "    Séance 4 — L'impératif présent"),
    tocLink("s5", "    Séance 5 — Les trois façons de donner une consigne : infinitif, impératif, présent et futur"),
    tocLink("s6", "    Séance 6 — Les articulateurs chronologiques et spatiaux"),
    tocLink("s7", "    Séance 7 — Production orale : jouer le guide — conseiller un visiteur"),
    tocLink("s8", "    Séance 8 — Production écrite (1) : le règlement de visite — les idées et le plan"),
    tocLink("s9", "    Séance 9 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s10", "    Séance 10 — Lecture-fluidité : lire un texte injonctif"),
    tocLink("s11", "    Séance 11 — Révision et dictée"),
    tocLink("s12", "    Séance 12 — Test"),
    p("", { after: 40 }),
    tocLink("unit2", "UNITÉ 2 — LES CATASTROPHES NATURELLES (Séances 13–24)", { bold: true, size: 26 }),
    tocLink("s13", "    Séance 13 — Compréhension orale : dialogue « Lila et Meva » — après le cyclone"),
    tocLink("s14", "    Séance 14 — Lexique : les fléaux naturels"),
    tocLink("s15", "    Séance 15 — Compréhension écrite : « La sécheresse de Marombahy » — le texte narratif"),
    tocLink("s16", "    Séance 16 — La phrase interrogative : question totale, question partielle"),
    tocLink("s17", "    Séance 17 — Les temps du récit"),
    tocLink("s18", "    Séance 18 — Les indicateurs de temps et de lieu"),
    tocLink("s19", "    Séance 19 — Production orale : interroger un témoin, raconter une catastrophe"),
    tocLink("s20", "    Séance 20 — Production écrite (1) : le récit d'une catastrophe — les idées et le plan"),
    tocLink("s21", "    Séance 21 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s22", "    Séance 22 — Lecture-fluidité : lire un récit de manière expressive"),
    tocLink("s23", "    Séance 23 — Révision et dictée"),
    tocLink("s24", "    Séance 24 — Test"),
    p("", { after: 40 }),
    tocLink("unit3", "UNITÉ 3 — LES ARTS (Séances 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Séance 25 — Compréhension orale : chronique « Les sept arts »"),
    tocLink("s26", "    Séance 26 — Lexique : les mots des arts"),
    tocLink("s27", "    Séance 27 — Compréhension écrite : le texte explicatif"),
    tocLink("s28", "    Séance 28 — Les procédés explicatifs : définir, illustrer, reformuler"),
    tocLink("s29", "    Séance 29 — Le présent de vérité générale et l'énonciateur neutre"),
    tocLink("s30", "    Séance 30 — Les connecteurs logiques de l'explication"),
    tocLink("s31", "    Séance 31 — Production orale : expliquer un art à la classe"),
    tocLink("s32", "    Séance 32 — Production écrite (1) : le paragraphe explicatif — les idées et le plan"),
    tocLink("s33", "    Séance 33 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s34", "    Séance 34 — Lecture-fluidité : lire un texte explicatif"),
    tocLink("s35", "    Séance 35 — Révision et dictée"),
    tocLink("s36", "    Séance 36 — Test"),
    p("", { after: 40 }),
    tocLink("unit4", "UNITÉ 4 — L'ARTISANAT (Séances 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Séance 37 — Compréhension orale : reportage « Chez les potières d'Ambatolampy »"),
    tocLink("s38", "    Séance 38 — Lexique : formes d'artisanat, outils et matériaux"),
    tocLink("s39", "    Séance 39 — Compréhension écrite : « Améliorer l'artisanat malgache » — le reportage"),
    tocLink("s40", "    Séance 40 — Les connecteurs spatiaux"),
    tocLink("s41", "    Séance 41 — Les moyens grammaticaux pour expliquer"),
    tocLink("s42", "    Séance 42 — Les articulateurs logiques d'ordre"),
    tocLink("s43", "    Séance 43 — Production orale : demander une précision, une clarification"),
    tocLink("s44", "    Séance 44 — Production écrite (1) : le reportage sur un artisan — les idées et le plan"),
    tocLink("s45", "    Séance 45 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s46", "    Séance 46 — Lecture-fluidité : lire un reportage"),
    tocLink("s47", "    Séance 47 — Révision et dictée"),
    tocLink("s48", "    Séance 48 — Test"),
    p("", { after: 40 }),
    tocLink("unit5", "UNITÉ 5 — LA CULTURE (Séances 49–60)", { bold: true, size: 26 }),
    tocLink("s49", "    Séance 49 — Compréhension orale : récit « Le grand famadihana de septembre »"),
    tocLink("s50", "    Séance 50 — Lexique : les fêtes et les rites"),
    tocLink("s51", "    Séance 51 — Compréhension écrite : un récit et son schéma narratif"),
    tocLink("s52", "    Séance 52 — Le schéma narratif : situation initiale, péripéties, situation finale"),
    tocLink("s53", "    Séance 53 — Les indices du texte narratif : personnages, indicateurs chronologiques"),
    tocLink("s54", "    Séance 54 — Conjugaison : présent, imparfait, passé composé (les trois groupes)"),
    tocLink("s55", "    Séance 55 — Production orale : raconter une fête traditionnelle"),
    tocLink("s56", "    Séance 56 — Production écrite (1) : écrire un récit — les idées et le plan"),
    tocLink("s57", "    Séance 57 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s58", "    Séance 58 — Lecture-fluidité : lire un récit"),
    tocLink("s59", "    Séance 59 — Révision et dictée"),
    tocLink("s60", "    Séance 60 — Test"),
    p("", { after: 40 }),
    tocLink("unit6", "UNITÉ 6 — LA MUSIQUE (Séances 61–72)", { bold: true, size: 26 }),
    tocLink("s61", "    Séance 61 — Compréhension orale : chronique « Pourquoi la musique nous fait du bien »"),
    tocLink("s62", "    Séance 62 — Lexique : les mots de la musique"),
    tocLink("s63", "    Séance 63 — Compréhension écrite : « Le salegy, une musique qui fait danser le Nord »"),
    tocLink("s64", "    Séance 64 — Les articulateurs pour expliquer"),
    tocLink("s65", "    Séance 65 — Les articulateurs pour déduire et pour illustrer"),
    tocLink("s66", "    Séance 66 — La progression du texte explicatif : annonce, explication, illustration"),
    tocLink("s67", "    Séance 67 — Production orale : présenter sa musique préférée"),
    tocLink("s68", "    Séance 68 — Production écrite (1) : le texte explicatif sur un instrument — les idées et le plan"),
    tocLink("s69", "    Séance 69 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s70", "    Séance 70 — Lecture-fluidité : lire un texte explicatif"),
    tocLink("s71", "    Séance 71 — Révision et dictée"),
    tocLink("s72", "    Séance 72 — Test"),
    p("", { after: 40 }),
    tocLink("unit7", "UNITÉ 7 — LES NOUVELLES TECHNOLOGIES (Séances 73–84)", { bold: true, size: 26 }),
    tocLink("s73", "    Séance 73 — Compréhension orale : notice orale « Ton premier courriel »"),
    tocLink("s74", "    Séance 74 — Lexique : les mots des nouvelles technologies"),
    tocLink("s75", "    Séance 75 — Compréhension écrite : la notice technique et le dépliant"),
    tocLink("s76", "    Séance 76 — Le mode infinitif et la phrase infinitive"),
    tocLink("s77", "    Séance 77 — Les structures pour donner une consigne"),
    tocLink("s78", "    Séance 78 — Les articulateurs : et, ensuite, puis, après, enfin"),
    tocLink("s79", "    Séance 79 — Production orale : expliquer un geste technique"),
    tocLink("s80", "    Séance 80 — Production écrite (1) : la notice d'utilisation — les idées et le plan"),
    tocLink("s81", "    Séance 81 — Production écrite (2) : rédiger, relire, améliorer"),
    tocLink("s82", "    Séance 82 — Lecture-fluidité : lire une notice"),
    tocLink("s83", "    Séance 83 — Révision et dictée"),
    tocLink("s84", "    Séance 84 — Test"),
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
      row("1", "Le tourisme (texte injonctif)", "10 (S1–S10)", "S11, S12"),
      row("2", "Les catastrophes naturelles (texte narratif)", "10 (S13–S22)", "S23, S24"),
      row("3", "Les arts (texte explicatif)", "10 (S25–S34)", "S35, S36"),
      row("4", "L'artisanat (texte explicatif : le reportage)", "10 (S37–S46)", "S47, S48"),
      row("5", "La culture (texte narratif)", "10 (S49–S58)", "S59, S60"),
      row("6", "La musique (texte explicatif)", "10 (S61–S70)", "S71, S72"),
      row("7", "Les nouvelles technologies (texte injonctif)", "10 (S73–S82)", "S83, S84"),
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
  const out = path.join(__dirname, "Manuel_Francais_T8_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main();
