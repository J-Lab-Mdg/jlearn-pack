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
    tocLink("unit1", "UNIT 1 — OUR TIME (Sessions 1–10)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Describing past events: What a day! How boring!"),
    tocLink("s2", "    Session 2 — Listening: Bruno’s vacation"),
    tocLink("s3", "    Session 3 — Past continuous vs simple past (while / when)"),
    tocLink("s4", "    Session 4 — The alibi game"),
    tocLink("s5", "    Session 5 — Listening: past habits — used to"),
    tocLink("s6", "    Session 6 — Be used to + So did I! Neither did I!"),
    tocLink("s7", "    Session 7 — Reading: Titanic"),
    tocLink("s8", "    Session 8 — Writing: the cohesive paragraph + culture corner"),
    tocLink("s9", "    Session 9 — Revision"),
    tocLink("s10", "    Session 10 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit2", "UNIT 2 — FOOD (Sessions 11–22)", { bold: true, size: 26 }),
    tocLink("s11", "    Session 11 — The four food groups"),
    tocLink("s12", "    Session 12 — Describing food: fresh, raw, ripe, canned"),
    tocLink("s13", "    Session 13 — Listening: the balanced diet dialogue — quantifiers"),
    tocLink("s14", "    Session 14 — Listening: junk food — true or false?"),
    tocLink("s15", "    Session 15 — The food doctor: should + frequency adverbs"),
    tocLink("s16", "    Session 16 — Comparing foods: healthier, the best!"),
    tocLink("s17", "    Session 17 — Reading: Nutrition for children"),
    tocLink("s18", "    Session 18 — My balanced menu of the day"),
    tocLink("s19", "    Session 19 — Writing: the advice letter"),
    tocLink("s20", "    Session 20 — Food idioms and food myths"),
    tocLink("s21", "    Session 21 — Revision"),
    tocLink("s22", "    Session 22 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit3", "UNIT 3 — FAMILY (Sessions 23–32)", { bold: true, size: 26 }),
    tocLink("s23", "    Session 23 — Listening: May I come in? — permission"),
    tocLink("s24", "    Session 24 — May vs can + warnings"),
    tocLink("s25", "    Session 25 — Family relationships: close to, role model"),
    tocLink("s26", "    Session 26 — Reporting an interview: He said he was…"),
    tocLink("s27", "    Session 27 — Listening: Tanora Garan’Teen — youth problems"),
    tocLink("s28", "    Session 28 — Advice: must, have to, don’t have to"),
    tocLink("s29", "    Session 29 — Reading: the Malagasy family"),
    tocLink("s30", "    Session 30 — Writing: the family dialogue"),
    tocLink("s31", "    Session 31 — Revision"),
    tocLink("s32", "    Session 32 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit4", "UNIT 4 — HEALTHY LIFE (Sessions 33–44)", { bold: true, size: 26 }),
    tocLink("s33", "    Session 33 — Listening: at the doctor’s — traditional cures"),
    tocLink("s34", "    Session 34 — Health idioms — agreeing and disagreeing"),
    tocLink("s35", "    Session 35 — Comparing cures: comparatives and superlatives"),
    tocLink("s36", "    Session 36 — Listening: teen stress"),
    tocLink("s37", "    Session 37 — Relative pronouns: who, which, that, whose"),
    tocLink("s38", "    Session 38 — Emotional health: what makes you happy?"),
    tocLink("s39", "    Session 39 — Listening: Dear Kate — advice with should"),
    tocLink("s40", "    Session 40 — If-clause type 2: If I were the Minister of Health…"),
    tocLink("s41", "    Session 41 — Reading: how celebrities de-stress"),
    tocLink("s42", "    Session 42 — Writing: my healthy life"),
    tocLink("s43", "    Session 43 — Revision"),
    tocLink("s44", "    Session 44 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit5", "UNIT 5 — JOB AND MASS MEDIA (Sessions 45–56)", { bold: true, size: 26 }),
    tocLink("s45", "    Session 45 — Common jobs — verb + er"),
    tocLink("s46", "    Session 46 — Job skills — can, be good at"),
    tocLink("s47", "    Session 47 — The job that suits you — mingle game"),
    tocLink("s48", "    Session 48 — Listening: the job interview"),
    tocLink("s49", "    Session 49 — Simulate a job interview"),
    tocLink("s50", "    Session 50 — Reading: the job advertisement"),
    tocLink("s51", "    Session 51 — Reading: the job application email"),
    tocLink("s52", "    Session 52 — The present perfect: since and for"),
    tocLink("s53", "    Session 53 — Present perfect vs simple past"),
    tocLink("s54", "    Session 54 — Writing: job ad, CV and application letter"),
    tocLink("s55", "    Session 55 — Revision"),
    tocLink("s56", "    Session 56 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit6", "UNIT 6 — ENVIRONMENT (Sessions 57–68)", { bold: true, size: 26 }),
    tocLink("s57", "    Session 57 — Environmental issues — describing pictures"),
    tocLink("s58", "    Session 58 — Causes and consequences of pollution"),
    tocLink("s59", "    Session 59 — Listening: climate change"),
    tocLink("s60", "    Session 60 — The climate of Madagascar"),
    tocLink("s61", "    Session 61 — Tips to protect the environment — listen and tick"),
    tocLink("s62", "    Session 62 — Verbs with the gerund"),
    tocLink("s63", "    Session 63 — If-clauses type 2 and type 3"),
    tocLink("s64", "    Session 64 — Reading: water, water…"),
    tocLink("s65", "    Session 65 — Writing: our conservation poster"),
    tocLink("s66", "    Session 66 — Earth Day — here and abroad"),
    tocLink("s67", "    Session 67 — Revision"),
    tocLink("s68", "    Session 68 — Test paper"),
    p("", { after: 40 }),
    tocLink("annexes", "ANNEXES — THE TREASURE BOX OF THE EXAM YEAR", { bold: true, size: 26 }),
    tocLink("ann1", "    Annex 1 — Picture dictionary"),
    tocLink("ann2", "    Annex 2 — Songs and chants"),
    tocLink("ann3", "    Annex 3 — Pronunciation guide"),
    tocLink("ann4", "    Annex 4 — Flashcards to cut out"),
    tocLink("ann5", "    Annex 5 — Conjugation guide"),
    tocLink("ann6", "    Annex 6 — Phonetics guide (IPA and brackets)"),
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
      row("1", "Our Time", "8 (S1–S8)", "S9, S10"),
      row("2", "Food", "10 (S11–S20)", "S21, S22"),
      row("3", "Family", "8 (S23–S30)", "S31, S32"),
      row("4", "Healthy Life", "10 (S33–S42)", "S43, S44"),
      row("5", "Job and Mass Media", "10 (S45–S54)", "S55, S56"),
      row("6", "Environment", "10 (S57–S66)", "S67, S68"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 56 lesson sessions + 6 revisions + 6 test papers = 68 sessions. T9 is the exam year: every unit ends with a test paper in the exam format.", { bold: true, size: SZ.FICHE })]),
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
        ...require("./annexes")(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T9_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
