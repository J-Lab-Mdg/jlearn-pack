// Manuel Anglais T8 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink } = B;
const unit1 = require("./unit1");
const unit2 = require("./unit2");
const unit3 = require("./unit3");
const unit4 = require("./unit4");
const unit5 = require("./unit5");
const unit6 = require("./unit6");

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t8.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t8.png", 718, 1264 / 843)];
  return [p([run("ANGLAIS T8 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T8 English syllabus (Programme d’études T8) and its Pedagogical Resources Booklet."),
    p("In T8, the students take a big step: they express feelings, talk about the past with the simple past, make plans with “be going to” and “will”, compare things, talk about health, daily life and their country — and they read e-mails and real texts, and write short paragraphs. English is taught THREE hours every week."),
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
    p([run("The three skills of T8", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• ORAL COMMUNICATION — listen (pre / while / post-listening) and speak."),
    p("• READING — read e-mails and texts and find the gist and the details."),
    p("• WRITING — write sentences, dialogues and short paragraphs.", { after: 120 }),
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
    tocLink("unit1", "UNIT 1 — PERSONAL COMMUNICATION (Sessions 1–15)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — The feelings"),
    tocLink("s2", "    Session 2 — Asking about feelings: What’s wrong? What happened?"),
    tocLink("s3", "    Session 3 — Listening: the feelings dialogue"),
    tocLink("s4", "    Session 4 — The present continuous (temporary facts)"),
    tocLink("s5", "    Session 5 — The simple past (1): was, were, -ed"),
    tocLink("s6", "    Session 6 — The simple past (2): the rebel verbs"),
    tocLink("s7", "    Session 7 — The weekend activities"),
    tocLink("s8", "    Session 8 — Listening: my weekend plans"),
    tocLink("s9", "    Session 9 — Be going to: the plan future"),
    tocLink("s10", "    Session 10 — Will vs be going to + for/on"),
    tocLink("s11", "    Session 11 — Reading (1): the e-mail — gist"),
    tocLink("s12", "    Session 12 — Reading (2): the e-mail — details"),
    tocLink("s13", "    Session 13 — Writing: my plans paragraph"),
    tocLink("s14", "    Session 14 — Revision"),
    tocLink("s15", "    Session 15 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit2", "UNIT 2 — CLASSROOM COMMUNICATION (Sessions 16–21)", { bold: true, size: 26 }),
    tocLink("s16", "    Session 16 — The classroom instructions (Simon says)"),
    tocLink("s17", "    Session 17 — Lending and borrowing: can, may, could"),
    tocLink("s18", "    Session 18 — Reading: in the classroom"),
    tocLink("s19", "    Session 19 — Writing: my set of instructions"),
    tocLink("s20", "    Session 20 — Revision"),
    tocLink("s21", "    Session 21 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit3", "UNIT 3 — DAILY LIFE (Sessions 22–33)", { bold: true, size: 26 }),
    tocLink("s22", "    Session 22 — The daily activities and the chores"),
    tocLink("s23", "    Session 23 — Listening: Koto’s day — the present simple"),
    tocLink("s24", "    Session 24 — How often…? The frequency adverbs"),
    tocLink("s25", "    Session 25 — Transport, sequence markers and the interview"),
    tocLink("s26", "    Session 26 — The hobbies: sports, games and music"),
    tocLink("s27", "    Session 27 — Play or go + V-ing?"),
    tocLink("s28", "    Session 28 — The coordinators: and, but, or, yet, so"),
    tocLink("s29", "    Session 29 — Reading: a day in Lova’s life"),
    tocLink("s30", "    Session 30 — Writing: my daily routine"),
    tocLink("s31", "    Session 31 — Two truths and a lie!"),
    tocLink("s32", "    Session 32 — Revision"),
    tocLink("s33", "    Session 33 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit4", "UNIT 4 — FOOD (Sessions 34–45)", { bold: true, size: 26 }),
    tocLink("s34", "    Session 34 — The food and the shops"),
    tocLink("s35", "    Session 35 — Listening: at the market — the prices"),
    tocLink("s36", "    Session 36 — Countable, uncountable — some, any, no"),
    tocLink("s37", "    Session 37 — Comparatives and superlatives"),
    tocLink("s38", "    Session 38 — Bargaining prices"),
    tocLink("s39", "    Session 39 — The kitchen: ingredients, utensils, verbs"),
    tocLink("s40", "    Session 40 — Listening: the recipe — the imperatives"),
    tocLink("s41", "    Session 41 — Reading: bargaining at the market"),
    tocLink("s42", "    Session 42 — Writing: my recipe"),
    tocLink("s43", "    Session 43 — Writing: the buying dialogue"),
    tocLink("s44", "    Session 44 — Revision"),
    tocLink("s45", "    Session 45 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit5", "UNIT 5 — PREVENTIVE HEALTH (Sessions 46–54)", { bold: true, size: 26 }),
    tocLink("s46", "    Session 46 — The common illnesses"),
    tocLink("s47", "    Session 47 — Listening: at the doctor’s office — have got"),
    tocLink("s48", "    Session 48 — The cures and the advice: should"),
    tocLink("s49", "    Session 49 — The hygiene and the if clause (type 1)"),
    tocLink("s50", "    Session 50 — The hygiene posters"),
    tocLink("s51", "    Session 51 — Reading: the clean hands recitation"),
    tocLink("s52", "    Session 52 — Writing: my plan against the germs"),
    tocLink("s53", "    Session 53 — Revision"),
    tocLink("s54", "    Session 54 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit6", "UNIT 6 — MEANS OF COMMUNICATION (Sessions 55–66)", { bold: true, size: 26 }),
    tocLink("s55", "    Session 55 — The means of sharing the news"),
    tocLink("s56", "    Session 56 — Listening: the radio news"),
    tocLink("s57", "    Session 57 — The simple past of the journalists"),
    tocLink("s58", "    Session 58 — The passive voice"),
    tocLink("s59", "    Session 59 — Social media and the message acronyms"),
    tocLink("s60", "    Session 60 — Listening: the phone call"),
    tocLink("s61", "    Session 61 — From the text message to the phone call"),
    tocLink("s62", "    Session 62 — Reading: the newspaper"),
    tocLink("s63", "    Session 63 — The informal letter and the email"),
    tocLink("s64", "    Session 64 — Writing: narrating an event"),
    tocLink("s65", "    Session 65 — Revision"),
    tocLink("s66", "    Session 66 — Test paper"),
    p("", { after: 60 }),
    p([run("… The next units and the six annexes are being added block by block …", { italic: true, color: C.GRAY, size: 24 })]),
  ];
}

// ---------- tableau de bord ----------
function dashboard() {
  const { Table, TableRow, WidthType } = require("docx");
  const { cell } = B;
  const row = (u, t, s, tot) => new TableRow({ children: [
    cell([B.fp(u)], { w: 1400 }), cell([B.fp(t)], { w: 4600 }),
    cell([B.fp(s)], { w: 2200 }), cell([B.fp(tot)], { w: 2200 }),
  ]});
  const h = (t, w) => cell([B.fp([run(t, { bold: true, size: SZ.FICHE })])], { w, shade: C.HDR1 });
  return [
    p([run("OVERVIEW OF THE YEAR", { bold: true, size: 32 })], { center: true, after: 160 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Unit", 1400), h("Title", 4600), h("Sessions", 2200), h("+ Revision + Test", 2200)] }),
      row("1", "Personal Communication", "13 (S1–S13)", "S14, S15"),
      row("2", "Classroom Communication", "4 (S16–S19)", "S20, S21"),
      row("3", "Daily Life", "10 (S22–S31)", "S32, S33"),
      row("4", "Food", "10 (S34–S43)", "S44, S45"),
      row("5", "Preventive Health", "7 (S46–S52)", "S53, S54"),
      row("6", "Means of Communication", "10 (S55–S64)", "S65, S66"),
      row("7", "My City, My Country", "10 (S67–S76)", "S77, S78"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 64 lesson sessions + 7 revisions + 7 test papers = 78 sessions (3 hours of English per week).", { bold: true, size: SZ.FICHE })]),
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
        ...unit1(), pageBreak(),
        ...unit2(), pageBreak(),
        ...unit3(), pageBreak(),
        ...unit4(), pageBreak(),
        ...unit5(), pageBreak(),
        ...unit6(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T8_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
