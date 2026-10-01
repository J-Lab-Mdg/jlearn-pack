// Manuel Anglais T7 J-Learn — assemblage
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
const annexes = require("./annexes");

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t7.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t7.png", 718, 1264 / 843)];
  return [p([run("ANGLAIS T7 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T7 English syllabus (Programme d’études T7) and its Pedagogical Resources Booklet."),
    p("In T7, the pupils go further: they talk about their dreams and goals, give opinions, borrow and lend politely, describe people and places, and read and write real English texts. English is taught THREE hours every week."),
    p("Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every preparation sheet is followed by a one-page “Lesson of the day”: the summary the pupils copy in their copy-books."),
    pr([run("Important — the words in brackets: ", { bold: true }),
        run("the small grey words in brackets, like Hello "),
        run("[hèlôou]", { italic: true, color: C.GRAY }),
        run(", only help you SAY the word. When the pupils copy the lesson in their copy-books, they must "),
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
    p("• III. Evaluation — the pupils work alone."),
    p("• The duration boxes are empty (………): the teacher writes his/her own timing.", { after: 120 }),
    p([run("The two kinds of lesson pages", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• LESSON OF THE DAY — one page after every preparation sheet: the board summary of that session. The pupils copy it in their copy-books — WITHOUT the grey words in brackets [ ]."),
    p("• LESSON — UNIT — one big page at the end of the unit: it gathers all the sessions. Perfect for the revision and the test!", { after: 120 }),
    p([run("The three skills of T7", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• ORAL COMMUNICATION — listen (pre / while / post-listening) and speak."),
    p("• READING — read texts and find the gist and the details."),
    p("• WRITING — write sentences, instructions and short paragraphs.", { after: 120 }),
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
    tocLink("unit1", "UNIT 1 — PERSONAL COMMUNICATION (Sessions 1–17)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — The names of jobs"),
    tocLink("s2", "    Session 2 — What’s your dream? — I want to… / I’d like to…"),
    tocLink("s3", "    Session 3 — The infinitive after want, would like, wish"),
    tocLink("s4", "    Session 4 — The gerund after be good at, be bad at"),
    tocLink("s5", "    Session 5 — The dream job interview (speed chat)"),
    tocLink("s6", "    Session 6 — Introducing others"),
    tocLink("s7", "    Session 7 — Countries and nationalities"),
    tocLink("s8", "    Session 8 — WH-questions: who, where, what"),
    tocLink("s9", "    Session 9 — Listening: the interview with Maria and Tom"),
    tocLink("s10", "    Session 10 — Asking and giving opinion"),
    tocLink("s11", "    Session 11 — Speaking practice: opinions and dream jobs"),
    tocLink("s12", "    Session 12 — Reading (1): “My Dream Job” — the gist"),
    tocLink("s13", "    Session 13 — Reading (2): details, new words, “Women and work”"),
    tocLink("s14", "    Session 14 — Writing (1): sentences about dreams"),
    tocLink("s15", "    Session 15 — Writing (2): my introduction paragraph"),
    tocLink("s16", "    Session 16 — Revision"),
    tocLink("s17", "    Session 17 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit2", "UNIT 2 — CLASSROOM COMMUNICATION (Sessions 18–30)", { bold: true, size: 26 }),
    tocLink("s18", "    Session 18 — Classroom instructions: affirmative commands"),
    tocLink("s19", "    Session 19 — Negative commands: Don’t…!"),
    tocLink("s20", "    Session 20 — Lend, borrow, give back"),
    tocLink("s21", "    Session 21 — Can / May I borrow your…, please?"),
    tocLink("s22", "    Session 22 — Could you lend me a/an…, please?"),
    tocLink("s23", "    Session 23 — Here you are! — the words of giving"),
    tocLink("s24", "    Session 24 — Intonation with yes/no questions"),
    tocLink("s25", "    Session 25 — Role play: my own borrowing dialogue"),
    tocLink("s26", "    Session 26 — Reading (1): “In the classroom”"),
    tocLink("s27", "    Session 27 — Reading (2): questions and answers"),
    tocLink("s28", "    Session 28 — Writing: my classroom instructions"),
    tocLink("s29", "    Session 29 — Revision"),
    tocLink("s30", "    Session 30 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit3", "UNIT 3 — COMMON FOOD (Sessions 31–51)", { bold: true, size: 26 }),
    tocLink("s31", "    Session 31 — Common food: vocabulary and colours"),
    tocLink("s32", "    Session 32 — The three meals"),
    tocLink("s33", "    Session 33 — The food verbs (present simple)"),
    tocLink("s34", "    Session 34 — The four tastes — What a delicious meal!"),
    tocLink("s35", "    Session 35 — Listening: “What’s for lunch?”"),
    tocLink("s36", "    Session 36 — My eating habits (1): frequency adverbs"),
    tocLink("s37", "    Session 37 — My eating habits (2): the food interview"),
    tocLink("s38", "    Session 38 — Likes and dislikes (+ gerund)"),
    tocLink("s39", "    Session 39 — Preferences and comparatives"),
    tocLink("s40", "    Session 40 — Offering food: Would you like…?"),
    tocLink("s41", "    Session 41 — Quantities: some, a lot of, a little"),
    tocLink("s42", "    Session 42 — Healthy food: the pyramid"),
    tocLink("s43", "    Session 43 — Listening: Jack’s full English breakfast"),
    tocLink("s44", "    Session 44 — Food from here and there"),
    tocLink("s45", "    Session 45 — Reading (1): “Tovo tries British food”"),
    tocLink("s46", "    Session 46 — Reading (2): details, inference, new words"),
    tocLink("s47", "    Session 47 — Reading (3): reading fluently"),
    tocLink("s48", "    Session 48 — Writing (1): perfect food sentences"),
    tocLink("s49", "    Session 49 — Writing (2): my food paragraph"),
    tocLink("s50", "    Session 50 — Revision"),
    tocLink("s51", "    Session 51 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit4", "UNIT 4 — FAMILY (Sessions 52–65)", { bold: true, size: 26 }),
    tocLink("s52", "    Session 52 — The extended family"),
    tocLink("s53", "    Session 53 — Married, single, engaged…"),
    tocLink("s54", "    Session 54 — Listening: Emma’s family picture"),
    tocLink("s55", "    Session 55 — The family riddles (possessive ’s)"),
    tocLink("s56", "    Session 56 — What does he look like?"),
    tocLink("s57", "    Session 57 — What kind of person is she?"),
    tocLink("s58", "    Session 58 — Listening: my role model"),
    tocLink("s59", "    Session 59 — Grammar: compound adjectives"),
    tocLink("s60", "    Session 60 — Listen and draw!"),
    tocLink("s61", "    Session 61 — Reading (1): “Sarah’s family”"),
    tocLink("s62", "    Session 62 — Reading (2): details, inference, crossword"),
    tocLink("s63", "    Session 63 — Writing: my extended family"),
    tocLink("s64", "    Session 64 — Revision"),
    tocLink("s65", "    Session 65 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit5", "UNIT 5 — MEANS OF COMMUNICATION (Sessions 66–83)", { bold: true, size: 26 }),
    tocLink("s66", "    Session 66 — The means of communication"),
    tocLink("s67", "    Session 67 — The communication verbs"),
    tocLink("s68", "    Session 68 — Listening: how people communicate nowadays"),
    tocLink("s69", "    Session 69 — Do you watch TV? (Yes/No questions)"),
    tocLink("s70", "    Session 70 — When? With who? (WH-questions)"),
    tocLink("s71", "    Session 71 — The present progressive"),
    tocLink("s72", "    Session 72 — Habit or happening now?"),
    tocLink("s73", "    Session 73 — And, but, or, so (coordinators)"),
    tocLink("s74", "    Session 74 — The interview"),
    tocLink("s75", "    Session 75 — Reporting: Andry watches TV…"),
    tocLink("s76", "    Session 76 — Reading (1): a radio interview"),
    tocLink("s77", "    Session 77 — Reading (2): details and coordinators"),
    tocLink("s78", "    Session 78 — Reading (3): on air! Acting out"),
    tocLink("s79", "    Session 79 — Writing (1): my six questions"),
    tocLink("s80", "    Session 80 — Writing (2): the report"),
    tocLink("s81", "    Session 81 — Writing (3): presenting the report"),
    tocLink("s82", "    Session 82 — Revision"),
    tocLink("s83", "    Session 83 — Test paper"),
    p("", { after: 40 }),
    tocLink("unit6", "UNIT 6 — THE ENVIRONMENT (Sessions 84–99)", { bold: true, size: 26 }),
    tocLink("s84", "    Session 84 — Around my house"),
    tocLink("s85", "    Session 85 — The local buildings"),
    tocLink("s86", "    Session 86 — The surroundings: garden, gate, fence, flag"),
    tocLink("s87", "    Session 87 — The furniture verbs"),
    tocLink("s88", "    Session 88 — Listening: a walk in our town"),
    tocLink("s89", "    Session 89 — This, that, these, those"),
    tocLink("s90", "    Session 90 — The prepositions of place"),
    tocLink("s91", "    Session 91 — The map of the town"),
    tocLink("s92", "    Session 92 — I describe my surroundings"),
    tocLink("s93", "    Session 93 — Reading (1): “My town, Greenhill”"),
    tocLink("s94", "    Session 94 — Reading (2): the map of Greenhill"),
    tocLink("s95", "    Session 95 — Reading (3): Greenhill and our towns"),
    tocLink("s96", "    Session 96 — Writing (1): my favourite place (draft)"),
    tocLink("s97", "    Session 97 — Writing (2): the final text"),
    tocLink("s98", "    Session 98 — Revision"),
    tocLink("s99", "    Session 99 — Test paper"),
    p("", { after: 40 }),
    tocLink("annexes", "ANNEXES", { bold: true, size: 26 }),
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
      row("1", "Personal Communication", "15 (S1–S15)", "S16, S17"),
      row("2", "Classroom Communication", "11 (S18–S28)", "S29, S30"),
      row("3", "Common Food", "19 (S31–S49)", "S50, S51"),
      row("4", "Family", "12 (S52–S63)", "S64, S65"),
      row("5", "Means of Communication", "16 (S66–S81)", "S82, S83"),
      row("6", "The Environment", "14 (S84–S97)", "S98, S99"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 87 lesson sessions + 6 revisions + 6 test papers = 99 sessions (3 hours of English per week).", { bold: true, size: SZ.FICHE })]),
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
        ...annexes(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T7_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
