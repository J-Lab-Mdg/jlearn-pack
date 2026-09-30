// Manuel Anglais T7 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink } = B;
const unit1 = require("./unit1");

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
    p("Dialogues, songs and reading texts can be listened to with a phone: scan the QR code or open the link at the bottom of the page.", { after: 160 }),
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
    p("", { after: 60 }),
    p([run("… Units 2 to 6 and the six annexes are being added block by block …", { italic: true, color: C.GRAY, size: 24 })]),
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
        ...unit1(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T7_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
