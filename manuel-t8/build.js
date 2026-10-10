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
const unit7 = require("./unit7");
const annexes = require("./annexes");

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
    tocLink("unit1", "UNIT 1 — PERSONAL COMMUNICATION (Sessions 1–18)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Socializing: personal information and the WH-questions"),
    tocLink("s2", "    Session 2 — Likes and dislikes: the verbs with the gerund"),
    tocLink("s3", "    Session 3 — I’d rather…, because… — talking about preferences"),
    tocLink("s4", "    Session 4 — The feelings"),
    tocLink("s5", "    Session 5 — Asking about feelings: What’s wrong? What happened?"),
    tocLink("s6", "    Session 6 — Listening: the feelings dialogue"),
    tocLink("s7", "    Session 7 — The present continuous (temporary facts)"),
    tocLink("s8", "    Session 8 — The simple past (1): was, were, -ed"),
    tocLink("s9", "    Session 9 — The simple past (2): the rebel verbs"),
    tocLink("s10", "    Session 10 — The weekend activities"),
    tocLink("s11", "    Session 11 — Listening: my weekend plans"),
    tocLink("s12", "    Session 12 — Be going to: the plan future"),
    tocLink("s13", "    Session 13 — Will vs be going to + for/on"),
    tocLink("s14", "    Session 14 — Reading (1): the e-mail — gist"),
    tocLink("s15", "    Session 15 — Reading (2): the e-mail — details"),
    tocLink("s16", "    Session 16 — Writing: my plans paragraph"),
    tocLink("s17", "    Session 17 — Revision"),
    tocLink("s18", "    Session 18 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit2", "UNIT 2 — CLASSROOM COMMUNICATION (Sessions 19–24)", { bold: true, size: 26 }),
    tocLink("s19", "    Session 19 — The classroom instructions (Simon says)"),
    tocLink("s20", "    Session 20 — Lending and borrowing: can, may, could"),
    tocLink("s21", "    Session 21 — Reading: in the classroom"),
    tocLink("s22", "    Session 22 — Writing: my set of instructions"),
    tocLink("s23", "    Session 23 — Revision"),
    tocLink("s24", "    Session 24 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit3", "UNIT 3 — DAILY LIFE (Sessions 25–36)", { bold: true, size: 26 }),
    tocLink("s25", "    Session 25 — The daily activities and the chores"),
    tocLink("s26", "    Session 26 — Listening: Koto’s day — the present simple"),
    tocLink("s27", "    Session 27 — How often…? The frequency adverbs"),
    tocLink("s28", "    Session 28 — Transport, sequence markers and the interview"),
    tocLink("s29", "    Session 29 — The hobbies: sports, games and music"),
    tocLink("s30", "    Session 30 — Play or go + V-ing?"),
    tocLink("s31", "    Session 31 — The coordinators: and, but, or, yet, so"),
    tocLink("s32", "    Session 32 — Reading: a day in Lova’s life"),
    tocLink("s33", "    Session 33 — Writing: my daily routine"),
    tocLink("s34", "    Session 34 — Two truths and a lie!"),
    tocLink("s35", "    Session 35 — Revision"),
    tocLink("s36", "    Session 36 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit4", "UNIT 4 — FOOD (Sessions 37–48)", { bold: true, size: 26 }),
    tocLink("s37", "    Session 37 — The food and the shops"),
    tocLink("s38", "    Session 38 — Listening: at the market — the prices"),
    tocLink("s39", "    Session 39 — Countable, uncountable — some, any, no"),
    tocLink("s40", "    Session 40 — Comparatives and superlatives"),
    tocLink("s41", "    Session 41 — Bargaining prices"),
    tocLink("s42", "    Session 42 — The kitchen: ingredients, utensils, verbs"),
    tocLink("s43", "    Session 43 — Listening: the recipe — the imperatives"),
    tocLink("s44", "    Session 44 — Reading: bargaining at the market"),
    tocLink("s45", "    Session 45 — Writing: my recipe"),
    tocLink("s46", "    Session 46 — Writing: the buying dialogue"),
    tocLink("s47", "    Session 47 — Revision"),
    tocLink("s48", "    Session 48 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit5", "UNIT 5 — PREVENTIVE HEALTH (Sessions 49–57)", { bold: true, size: 26 }),
    tocLink("s49", "    Session 49 — The common illnesses"),
    tocLink("s50", "    Session 50 — Listening: at the doctor’s office — have got"),
    tocLink("s51", "    Session 51 — The cures and the advice: should"),
    tocLink("s52", "    Session 52 — The hygiene and the if clause (type 1)"),
    tocLink("s53", "    Session 53 — The hygiene posters"),
    tocLink("s54", "    Session 54 — Reading: the clean hands recitation"),
    tocLink("s55", "    Session 55 — Writing: my plan against the germs"),
    tocLink("s56", "    Session 56 — Revision"),
    tocLink("s57", "    Session 57 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit6", "UNIT 6 — MEANS OF COMMUNICATION (Sessions 58–69)", { bold: true, size: 26 }),
    tocLink("s58", "    Session 58 — The means of sharing the news"),
    tocLink("s59", "    Session 59 — Listening: the radio news"),
    tocLink("s60", "    Session 60 — The simple past of the journalists"),
    tocLink("s61", "    Session 61 — The passive voice"),
    tocLink("s62", "    Session 62 — Social media and the message acronyms"),
    tocLink("s63", "    Session 63 — Listening: the phone call"),
    tocLink("s64", "    Session 64 — From the text message to the phone call"),
    tocLink("s65", "    Session 65 — Reading: the newspaper"),
    tocLink("s66", "    Session 66 — The informal letter and the email"),
    tocLink("s67", "    Session 67 — Writing: narrating an event"),
    tocLink("s68", "    Session 68 — Revision"),
    tocLink("s69", "    Session 69 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit7", "UNIT 7 — MY CITY, MY COUNTRY (Sessions 70–81)", { bold: true, size: 26 }),
    tocLink("s70", "    Session 70 — The buildings of the city and of the country"),
    tocLink("s71", "    Session 71 — Listening: my city and my village"),
    tocLink("s72", "    Session 72 — The prepositions of place"),
    tocLink("s73", "    Session 73 — The relative clause with where"),
    tocLink("s74", "    Session 74 — Asking and giving directions"),
    tocLink("s75", "    Session 75 — The map game"),
    tocLink("s76", "    Session 76 — City and country, here and there"),
    tocLink("s77", "    Session 77 — Reading: city and country"),
    tocLink("s78", "    Session 78 — Writing (1): draw and tell"),
    tocLink("s79", "    Session 79 — Writing (2): the paragraph"),
    tocLink("s80", "    Session 80 — Revision"),
    tocLink("s81", "    Session 81 — Test paper"),
    p("", { after: 40 }),
    tocLink("annexes", "ANNEXES — THE TREASURE BOX OF THE YEAR", { bold: true, size: 26 }),
    tocLink("ann1", "    Annex 1 — Picture dictionary"),
    tocLink("ann2", "    Annex 2 — Songs and chants"),
    tocLink("ann3", "    Annex 3 — Pronunciation guide"),
    tocLink("ann4", "    Annex 4 — Flashcards to cut out"),
    tocLink("ann5", "    Annex 5 — Conjugation guide"),
    tocLink("ann6", "    Annex 6 — Phonetics guide (IPA)"),
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
      row("1", "Personal Communication", "16 (S1–S16)", "S17, S18"),
      row("2", "Classroom Communication", "4 (S19–S22)", "S23, S24"),
      row("3", "Daily Life", "10 (S25–S34)", "S35, S36"),
      row("4", "Food", "10 (S37–S46)", "S47, S48"),
      row("5", "Preventive Health", "7 (S49–S55)", "S56, S57"),
      row("6", "Means of Communication", "10 (S58–S67)", "S68, S69"),
      row("7", "My City, My Country", "10 (S70–S79)", "S80, S81"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 67 lesson sessions + 7 revisions + 7 test papers = 81 sessions (3 hours of English per week).", { bold: true, size: SZ.FICHE })]),
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
        ...unit6(), pageBreak(),
        ...unit7(), pageBreak(),
        ...annexes(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T8_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
