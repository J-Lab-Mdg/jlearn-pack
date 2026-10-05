// Manuel Anglais T9 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t9.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t9.png", 718, 1264 / 848)];
  return [p([run("ANGLAIS T9 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T9 English syllabus (Programme d’études T9) and its Pedagogical Resources Booklet."),
    p("T9 is the last year of basic education — the exam year! The students report what people said, tell long stories with the past continuous, compare the past and the present with “used to”, talk about jobs with the present perfect, write a CV and a job application letter, and defend the environment with the if clauses. English is a real instrument of communication now."),
    p("Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every preparation sheet is followed by a one-page “Lesson of the day”: the summary the students copy in their copy-books."),
    pr([run("Important — the words in brackets: ", { bold: true }),
        run("the small grey words in brackets, like Hello "),
        run("[hèlôou]", { italic: true, color: C.GRAY }),
        run(", only help you SAY the word. When the students copy the lesson in their copy-books, they must "),
        run("NOT copy the words in brackets", { bold: true, color: C.RED }),
        run(".")]),
    p("Six annexes close the book: the picture dictionary, the songs, the pronunciation guide, the flashcards, the conjugation guide and the phonetics guide."),
    p("Dialogues, songs and reading texts can be listened to with a phone: scan the QR code or open the link at the bottom of the page. In Annex 2, the traditional songs also have a YouTube link for the video version.", { after: 160 }),
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
    p([run("The two kinds of lesson pages", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• LESSON OF THE DAY — one page after every preparation sheet: the board summary of that session. The students copy it in their copy-books — WITHOUT the grey words in brackets [ ]."),
    p("• LESSON — UNIT — one big page at the end of the unit: it gathers all the sessions. Perfect for the revision and the test!", { after: 120 }),
    p([run("The four skills of T9", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• ORAL COMMUNICATION — listen (pre / while / post-listening) and speak."),
    p("• READING — read real texts, ads and letters, and find the gist and the details."),
    p("• WRITING — write dialogues, paragraphs, a CV and a letter."),
    p("• LANGUAGE AND CULTURE — make links between English, Malagasy and French.", { after: 120 }),
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
    tocLink("unit1", "UNIT 1 — PERSONAL COMMUNICATION (Sessions 1–12)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Likes and dislikes: the gerund"),
    tocLink("s2", "    Session 2 — Would you rather…? I’d rather + because"),
    tocLink("s3", "    Session 3 — Listening: James and Sofia"),
    tocLink("s4", "    Session 4 — The feelings and the caring questions"),
    tocLink("s5", "    Session 5 — Listening: Arthur and Jane — present continuous and simple past"),
    tocLink("s6", "    Session 6 — Feelings and advice: You should… (quiz trade)"),
    tocLink("s7", "    Session 7 — Weekend plans: be going to + for/on"),
    tocLink("s8", "    Session 8 — Listening: an amazing weekend — will or be going to?"),
    tocLink("s9", "    Session 9 — Reading: Sarah’s e-mail"),
    tocLink("s10", "    Session 10 — Writing: my weekend paragraph and my dialogue"),
    tocLink("s11", "    Session 11 — Revision"),
    tocLink("s12", "    Session 12 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit2", "UNIT 2 — CLASSROOM COMMUNICATION (Sessions 13–18)", { bold: true, size: 26 }),
    tocLink("s13", "    Session 13 — The teacher language (chinese whispers)"),
    tocLink("s14", "    Session 14 — Listening: the classroom dialogue — She said that…"),
    tocLink("s15", "    Session 15 — Reporting instructions: told/asked… to… (drill sergeant)"),
    tocLink("s16", "    Session 16 — Reading and writing: the class reporter"),
    tocLink("s17", "    Session 17 — Revision"),
    tocLink("s18", "    Session 18 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit3", "UNIT 3 — OUR TIME (Sessions 19–28)", { bold: true, size: 26 }),
    tocLink("s19", "    Session 19 — Describing past events: What a day! How boring!"),
    tocLink("s20", "    Session 20 — Listening: Bruno’s vacation"),
    tocLink("s21", "    Session 21 — Past continuous vs simple past (while / when)"),
    tocLink("s22", "    Session 22 — The alibi game"),
    tocLink("s23", "    Session 23 — Listening: past habits — used to"),
    tocLink("s24", "    Session 24 — Be used to + So did I! Neither did I!"),
    tocLink("s25", "    Session 25 — Reading: Titanic"),
    tocLink("s26", "    Session 26 — Writing: the cohesive paragraph + culture corner"),
    tocLink("s27", "    Session 27 — Revision"),
    tocLink("s28", "    Session 28 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit4", "UNIT 4 — FOOD (Sessions 29–40)", { bold: true, size: 26 }),
    tocLink("s29", "    Session 29 — The four food groups"),
    tocLink("s30", "    Session 30 — Describing food: fresh, raw, ripe, canned"),
    tocLink("s31", "    Session 31 — Listening: the balanced diet dialogue — quantifiers"),
    tocLink("s32", "    Session 32 — Listening: junk food — true or false?"),
    tocLink("s33", "    Session 33 — The food doctor: should + frequency adverbs"),
    tocLink("s34", "    Session 34 — Comparing foods: healthier, the best!"),
    tocLink("s35", "    Session 35 — Reading: Nutrition for children"),
    tocLink("s36", "    Session 36 — My balanced menu of the day"),
    tocLink("s37", "    Session 37 — Writing: the advice letter"),
    tocLink("s38", "    Session 38 — Food idioms and food myths"),
    tocLink("s39", "    Session 39 — Revision"),
    tocLink("s40", "    Session 40 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit5", "UNIT 5 — FAMILY (Sessions 41–50)", { bold: true, size: 26 }),
    tocLink("s41", "    Session 41 — Listening: May I come in? — permission"),
    tocLink("s42", "    Session 42 — May vs can + warnings"),
    tocLink("s43", "    Session 43 — Family relationships: close to, role model"),
    tocLink("s44", "    Session 44 — Reporting an interview: He said he was…"),
    tocLink("s45", "    Session 45 — Listening: Tanora Garan’Teen — youth problems"),
    tocLink("s46", "    Session 46 — Advice: must, have to, don’t have to"),
    tocLink("s47", "    Session 47 — Reading: the Malagasy family"),
    tocLink("s48", "    Session 48 — Writing: the family dialogue"),
    tocLink("s49", "    Session 49 — Revision"),
    tocLink("s50", "    Session 50 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit6", "UNIT 6 — HEALTHY LIFE (Sessions 51–62)", { bold: true, size: 26 }),
    tocLink("s51", "    Session 51 — Listening: at the doctor’s — traditional cures"),
    tocLink("s52", "    Session 52 — Health idioms — agreeing and disagreeing"),
    tocLink("s53", "    Session 53 — Comparing cures: comparatives and superlatives"),
    tocLink("s54", "    Session 54 — Listening: teen stress"),
    tocLink("s55", "    Session 55 — Relative pronouns: who, which, that, whose"),
    tocLink("s56", "    Session 56 — Emotional health: what makes you happy?"),
    tocLink("s57", "    Session 57 — Listening: Dear Kate — advice with should"),
    tocLink("s58", "    Session 58 — If-clause type 2: If I were the Minister of Health…"),
    tocLink("s59", "    Session 59 — Reading: how celebrities de-stress"),
    tocLink("s60", "    Session 60 — Writing: my healthy life"),
    tocLink("s61", "    Session 61 — Revision"),
    tocLink("s62", "    Session 62 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit7", "UNIT 7 — JOB AND MASS MEDIA (Sessions 63–74)", { bold: true, size: 26 }),
    tocLink("s63", "    Session 63 — Common jobs — verb + er"),
    tocLink("s64", "    Session 64 — Job skills — can, be good at"),
    tocLink("s65", "    Session 65 — The job that suits you — mingle game"),
    tocLink("s66", "    Session 66 — Listening: the job interview"),
    tocLink("s67", "    Session 67 — Simulate a job interview"),
    tocLink("s68", "    Session 68 — Reading: the job advertisement"),
    tocLink("s69", "    Session 69 — Reading: the job application email"),
    tocLink("s70", "    Session 70 — The present perfect: since and for"),
    tocLink("s71", "    Session 71 — Present perfect vs simple past"),
    tocLink("s72", "    Session 72 — Writing: job ad, CV and application letter"),
    tocLink("s73", "    Session 73 — Revision"),
    tocLink("s74", "    Session 74 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit8", "UNIT 8 — ENVIRONMENT (Sessions 75–86)", { bold: true, size: 26 }),
    tocLink("s75", "    Session 75 — Environmental issues — describing pictures"),
    tocLink("s76", "    Session 76 — Causes and consequences of pollution"),
    tocLink("s77", "    Session 77 — Listening: climate change"),
    tocLink("s78", "    Session 78 — The climate of Madagascar"),
    tocLink("s79", "    Session 79 — Tips to protect the environment — listen and tick"),
    tocLink("s80", "    Session 80 — Verbs with the gerund"),
    tocLink("s81", "    Session 81 — If-clauses type 2 and type 3"),
    tocLink("s82", "    Session 82 — Reading: water, water…"),
    tocLink("s83", "    Session 83 — Writing: our conservation poster"),
    tocLink("s84", "    Session 84 — Earth Day — here and abroad"),
    tocLink("s85", "    Session 85 — Revision"),
    tocLink("s86", "    Session 86 — Test paper"),
    p("", { after: 40 }),
    p([run("… The six annexes are being added in the final block …", { italic: true, color: C.GRAY, size: 24 })]),
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
      row("1", "Personal Communication", "10 (S1–S10)", "S11, S12"),
      row("2", "Classroom Communication", "4 (S13–S16)", "S17, S18"),
      row("3", "Our Time", "8 (S19–S26)", "S27, S28"),
      row("4", "Food", "10 (S29–S38)", "S39, S40"),
      row("5", "Family", "8 (S41–S48)", "S49, S50"),
      row("6", "Healthy Life", "10 (S51–S60)", "S61, S62"),
      row("7", "Job and Mass Media", "10 (S63–S72)", "S73, S74"),
      row("8", "Environment", "10 (S75–S84)", "S85, S86"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 70 lesson sessions + 8 revisions + 8 test papers = 86 sessions. T9 is the exam year: every unit ends with a test paper in the exam format.", { bold: true, size: SZ.FICHE })]),
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
        ...require("./unit6")(),
        ...require("./unit7")(),
        ...require("./unit8")(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T9_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
