// Manuel Anglais T11 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t11.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t11.png", 718, 1376 / 768)];
  return [p([run("ANGLAIS T11 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T11 English syllabus (Programme d’études T11 — classe de Première) and its pedagogical orientations."),
    p("T11 is the year of the big conversations: small talk and offering help, health issues, the mass media, communication, job skills, buying and selling, the environmental issues of Madagascar, the English-speaking world, the Malagasy customs and the tourism. The students leave the survival English of T10 and start discussing, agreeing, disagreeing and defending ideas."),
    pr([run("One book, three streams: ", { bold: true }),
        run("this handbook covers the complete série L programme (10 units, 5 hours a week). The séries S (2 hours) and OSE (3 hours) follow the same programme for UNITS 1 TO 8; units 9 and 10 carry a “Série L” banner. The writing target of the year is the essay: "),
        run("120 words for the série L, 100 words for the séries S and OSE", { bold: true }),
        run(".")]),
    pr([run("The three rubrics of the official programme: ", { bold: true }),
        run("in the PE, the contents of every unit are organised in three rubrics — "),
        run("Vocabulary items and expressions", { bold: true, color: "1E8449" }),
        run(", "),
        run("Language functions", { bold: true, color: "B9770E" }),
        run(" (what we DO with the language: offering help, agreeing, apologising…) and "),
        run("Grammar", { bold: true, color: "6C3483" }),
        run(". This book makes them visible in two places: a small coloured badge (📗 VOCABULARY, 🗣 LANGUAGE FUNCTIONS, ⚙ GRAMMAR) above the sections of every “Lesson of the day”, and a table “THIS UNIT IN THE OFFICIAL PROGRAMME (PE)” on the opening page of every unit, so the teacher can check at a glance that the official contents are covered.")]),
    p("Following the official syllabus, every listening, reading and writing activity walks through three steps: PRE- (get ready), WHILE- (do the task) and POST- (use what you learnt). Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every preparation sheet is followed by a one-page “Lesson of the day”: the summary the students copy in their copy-books."),
    pr([run("Important — the words in brackets: ", { bold: true }),
        run("the small grey words in brackets, like Hello "),
        run("[hèlôou]", { italic: true, color: C.GRAY }),
        run(", only help you SAY the word. When the students copy the lesson in their copy-books, they must "),
        run("NOT copy the words in brackets", { bold: true, color: C.RED }),
        run(".")]),
    p("Six annexes close the book: the picture dictionary, the writer’s guide (the 120-word essay and its four types), the pronunciation guide, the flashcards, the conjugation guide and the phonetics guide."),
    p("Dialogues and reading texts can be listened to with a phone: scan the QR code or open the link at the bottom of the page of each unit.", { after: 160 }),
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
    p([run("HOW TO USE THIS BOOK", { bold: true, size: 32 })], { center: true, after: 160 }),
    p([run("The three big steps of a session", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• I. Review — quick questions on the last lesson."),
    p("• II. New lesson — six small steps: Warm-up, Presentation, Observation, Analysis, Synthesis, Practice."),
    p("• III. Evaluation — the students work alone."),
    p("• The duration boxes are empty (………): the teacher writes his/her own timing.", { after: 120 }),
    p([run("The pre- / while- / post- steps", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Following the T11 syllabus, every listening, reading and writing activity has three moments: PRE- (prepare the brain!), WHILE- (do the task) and POST- (consolidate and reuse). You will see these three labels inside the sheets.", { after: 120 }),
    p([run("The two kinds of lesson pages", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• LESSON OF THE DAY — one page after every preparation sheet: the board summary of that session. The students copy it in their copy-books — WITHOUT the grey words in brackets [ ]."),
    p("• LESSON — UNIT — one big page at the end of the unit: it gathers all the sessions. Perfect for the revision and the test!", { after: 120 }),
    p([run("The four skills of T11", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• ORAL COMMUNICATION — interact with the adequate register for each situation."),
    p("• READING — analyse real texts related to the units and to the students’ interests."),
    p("• WRITING — write clear, structured short essays (120 words L / 100 words S and OSE)."),
    p("• LANGUAGE AND CULTURE — make links between English, Malagasy and French.", { after: 120 }),
    p([run("The PE rubric badges", { bold: true, size: SZ.SUB })], { after: 80 }),
    pr([run("■ ", { color: "1E8449", size: 30 }), run("📗 VOCABULARY — ", { bold: true, color: "1E8449" }), run("the words and expressions of the official programme.")], { after: 60 }),
    pr([run("■ ", { color: "B9770E", size: 30 }), run("🗣 LANGUAGE FUNCTIONS — ", { bold: true, color: "B9770E" }), run("what we do with the language: offering help, agreeing, apologising…")], { after: 60 }),
    pr([run("■ ", { color: "6C3483", size: 30 }), run("⚙ GRAMMAR — ", { bold: true, color: "6C3483" }), run("the rules and the structures.")], { after: 60 }),
    p("• The same three rubrics appear in the table “THIS UNIT IN THE OFFICIAL PROGRAMME (PE)” at the start of each unit.", { after: 120 }),
    p([run("The colours of the book", { bold: true, size: SZ.SUB })], { after: 80 }),
    line("Red", C.RED, "title of the lesson."),
    line("Green", C.GREEN, "sub-titles of the lesson."),
    line("Blue + bold", C.BLUE, "key words to remember. The small grey words in brackets help you say the word: Hello [hèlôou] — never copy them!"),
    line("Pink", C.PINK, "answer keys."),
    p("", { after: 60 }),
    p([run("The audio", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Scan the QR code with a phone, or open the link: you can listen and download the MP3 file."),
    p("• E.A. means “Expected Answer”.", { after: 160 }),
  ];
}

// ---------- sommaire (complété au fil des unités) ----------
function contents() {
  return [
    p([run("CONTENTS", { bold: true, size: 32 })], { center: true, after: 160 }),
    tocLink("overview", "OVERVIEW OF THE YEAR", { bold: true, size: 26 }),
    p("", { after: 40 }),
    tocLink("unit1", "UNIT 1 — SMALL TALK AND OFFERING HELP (Sessions 1–9)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Starting a conversation: You look familiar!"),
    tocLink("s2", "    Session 2 — Keeping the talk alive: the conversation gambits"),
    tocLink("s3", "    Session 3 — Listening: small talk at the taxi-brousse station"),
    tocLink("s4", "    Session 4 — The present perfect with for and since"),
    tocLink("s5", "    Session 5 — Offering, accepting and declining help"),
    tocLink("s6", "    Session 6 — Reading: the art of small talk, here and there"),
    tocLink("s7", "    Session 7 — Writing: my small-talk dialogue"),
    tocLink("s8", "    Session 8 — Revision"),
    tocLink("s9", "    Session 9 — Test paper"),
    tocLink("unit2", "UNIT 2 — HEALTH ISSUES (Sessions 10–18)", { bold: true, size: 26 }),
    tocLink("s10", "    Session 10 — Health issues today: the vocabulary"),
    tocLink("s11", "    Session 11 — Asking for and giving an opinion"),
    tocLink("s12", "    Session 12 — Listening: Health on air — the junk food debate"),
    tocLink("s13", "    Session 13 — Agreeing and disagreeing politely"),
    tocLink("s14", "    Session 14 — The connectors of the opinion essay"),
    tocLink("s15", "    Session 15 — Reading: clean water, strong bodies"),
    tocLink("s16", "    Session 16 — Writing: my first opinion essay"),
    tocLink("s17", "    Session 17 — Revision"),
    tocLink("s18", "    Session 18 — Test paper"),
    tocLink("unit3", "UNIT 3 — MASS MEDIA (Sessions 19–26)", { bold: true, size: 26 }),
    tocLink("s19", "    Session 19 — The news sources and the word factory (verb + -er)"),
    tocLink("s20", "    Session 20 — Talking about the news: reliable or fake?"),
    tocLink("s21", "    Session 21 — Listening: Radio Vaovao — the seven o’clock news"),
    tocLink("s22", "    Session 22 — The relative pronouns: who, which, where, whose"),
    tocLink("s23", "    Session 23 — Reading: the article and the grammar of the headlines"),
    tocLink("s24", "    Session 24 — Writing: my short article with its headline"),
    tocLink("s25", "    Session 25 — Revision"),
    tocLink("s26", "    Session 26 — Test paper"),
    tocLink("unit4", "UNIT 4 — COMMUNICATION (Sessions 27–34)", { bold: true, size: 26 }),
    tocLink("s27", "    Session 27 — The means of communication"),
    tocLink("s28", "    Session 28 — Making a polite phone call"),
    tocLink("s29", "    Session 29 — Listening: booking the school bus"),
    tocLink("s30", "    Session 30 — The negative prefixes: un- and in-"),
    tocLink("s31", "    Session 31 — Reading: the formal letter and the informal email"),
    tocLink("s32", "    Session 32 — Writing: my formal letter"),
    tocLink("s33", "    Session 33 — Revision"),
    tocLink("s34", "    Session 34 — Test paper"),
  ];
}

// ---------- tableau de bord ----------
function dashboard() {
  const { Table, TableRow, WidthType } = require("docx");
  const { cell, bookmarkTitle } = B;
  const row = (u, t, s, tot) => new TableRow({ children: [
    cell([B.fp(u)], { w: 1400 }), cell([B.fp(t)], { w: 4600 }),
    cell([B.fp(s)], { w: 2200 }), cell([B.fp(tot)], { w: 2200 }),
  ]});
  const h = (t, w) => cell([B.fp([run(t, { bold: true, size: SZ.FICHE })])], { w, shade: C.HDR1 });
  return [
    bookmarkTitle("overview", "OVERVIEW OF THE YEAR", { bold: true, size: 32, center: true, after: 160 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Unit", 1400), h("Title", 4600), h("Sessions", 2200), h("+ Revision + Test", 2200)] }),
      row("1", "Small Talk and Offering Help", "7 (S1–S7)", "S8, S9"),
      row("2", "Health Issues", "7 (S10–S16)", "S17, S18"),
      row("3", "Mass Media", "6 (S19–S24)", "S25, S26"),
      row("4", "Communication", "6 (S27–S32)", "S33, S34"),
      row("5", "Job Skills", "6 (S35–S40)", "S41, S42"),
      row("6", "Buying and Selling", "6 (S43–S48)", "S49, S50"),
      row("7", "Environmental Issues in Madagascar", "7 (S51–S57)", "S58, S59"),
      row("8", "The English-Speaking World", "7 (S60–S66)", "S67, S68"),
      row("9", "Malagasy Customs and Traditions (Série L)", "7 (S69–S75)", "S76, S77"),
      row("10", "Tourism in Madagascar (Série L)", "7 (S78–S84)", "S85, S86"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 66 lesson sessions + 10 revisions + 10 test papers = 86 sessions. The série L covers the ten units (5 hours a week); the séries S and OSE cover units 1 to 8. Every activity follows the pre- / while- / post- steps of the official syllabus.", { bold: true, size: SZ.FICHE })]),
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
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T11_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
