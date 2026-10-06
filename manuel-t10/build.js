// Manuel Anglais T10 J-Learn — assemblage
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, img, pageBreak, tocLink } = B;

// ---------- couverture (pleine page, marges 0,5 cm) ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t10.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t10.png", 718, 1248 / 864)];
  return [p([run("ANGLAIS T10 — J-LEARN", { bold: true, size: 72 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T10 English syllabus (Programme d’études T10 — classe de Seconde) and its pedagogical orientations."),
    p("T10 is the first year of the lycée: a new school, new friends, new teachers — a fresh start! The programme goes back to the real life of the students: meeting new people, the classroom, the house and the neighbourhood, health, the weather, past events, travelling in Madagascar, the Malagasy cuisine, the jobs and the phone calls. English is spoken three hours a week, and the four skills grow together."),
    p("Following the official syllabus, every listening, reading and writing activity walks through three steps: PRE- (get ready), WHILE- (do the task) and POST- (use what you learnt). Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
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
    p([run("The pre- / while- / post- steps", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• Following the T10 syllabus, every listening, reading and writing activity has three moments: PRE- (prepare the brain!), WHILE- (do the task) and POST- (consolidate and reuse). You will see these three labels inside the sheets.", { after: 120 }),
    p([run("The two kinds of lesson pages", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• LESSON OF THE DAY — one page after every preparation sheet: the board summary of that session. The students copy it in their copy-books — WITHOUT the grey words in brackets [ ]."),
    p("• LESSON — UNIT — one big page at the end of the unit: it gathers all the sessions. Perfect for the revision and the test!", { after: 120 }),
    p([run("The four skills of T10", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("• ORAL COMMUNICATION — listen (pre / while / post-listening) and speak."),
    p("• READING — read real texts and find the gist, the details and the hidden information."),
    p("• WRITING — write dialogues, forms, paragraphs and short essays."),
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
    tocLink("unit1", "UNIT 1 — MEETING NEW PEOPLE (Sessions 1–10)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Greetings, welcoming and taking leave"),
    tocLink("s2", "    Session 2 — Apologising + Where are you from?"),
    tocLink("s3", "    Session 3 — Listening: meeting new people"),
    tocLink("s4", "    Session 4 — Grammar from the dialogue: the gerund, must and have to"),
    tocLink("s5", "    Session 5 — Introducing yourself and others: personal information"),
    tocLink("s6", "    Session 6 — Listening: getting to know Fara — the two presents"),
    tocLink("s7", "    Session 7 — Reading: how people greet, here and there"),
    tocLink("s8", "    Session 8 — Writing: a first-meeting dialogue (and, also, but, however)"),
    tocLink("s9", "    Session 9 — Revision"),
    tocLink("s10", "    Session 10 — Test paper"),
    p("", { after: 40 }),
    p([run("… The next units are being added block by block …", { italic: true, color: C.GRAY, size: 24 })]),
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
      row("1", "Meeting New People", "8 (S1–S8)", "S9, S10"),
      row("2", "Classroom Communication", "6 (S11–S16)", "S17, S18"),
      row("3", "My House, My Neighbourhood", "6 (S19–S24)", "S25, S26"),
      row("4", "Health", "7 (S27–S33)", "S34, S35"),
      row("5", "The Weather", "6 (S36–S41)", "S42, S43"),
      row("6", "Narrating a Past Event", "6 (S44–S49)", "S50, S51"),
      row("7", "Travelling in Madagascar", "8 (S52–S59)", "S60, S61"),
      row("8", "Restaurants and Malagasy Cuisine", "6 (S62–S67)", "S68, S69"),
      row("9", "The Job That’s Right for You", "8 (S70–S77)", "S78, S79"),
      row("10", "Talking on the Phone", "7 (S80–S86)", "S87, S88"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 68 lesson sessions + 10 revisions + 10 test papers = 88 sessions. T10 is the first year of the lycée: the English hour is 3 hours a week, and every activity follows the pre- / while- / post- steps of the official syllabus.", { bold: true, size: SZ.FICHE })]),
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
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T10_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
