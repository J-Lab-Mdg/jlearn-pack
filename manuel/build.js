// Assemblage du Manuel Anglais T4 J-Learn — V1 (en cours)
// Unités présentes : 1, 2 — les suivantes sont ajoutées bloc par bloc.
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, pageBreak, tocLink, cell, img, noBorders } = B;
const unit1 = require("./unit1");
const unit2 = require("./unit2");
const unit3 = require("./unit3");
const unit4 = require("./unit4");
const unit5 = require("./unit5");
const unit6 = require("./unit6");
const unit7 = require("./unit7");
const unit8 = require("./unit8");
const unit9 = require("./unit9");
const unit10 = require("./unit10");
const unit11 = require("./unit11");
const annexes = require("./annexes");

// ---------- couverture ----------
function cover() {
  return [
    img("cover_anglais_t4.png", 455, 1264 / 843),
  ];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T4 English syllabus of the Ministry of National Education of Madagascar (Programme d’études T4) and its Pedagogical Resources Booklet."),
    p("English starts in T4. This year, the pupils listen and speak: they greet, say their name, count, sing and play in English."),
    p("Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every unit has: one opening page, the preparation sheets, one lesson with pictures and pronunciation help, exercises with an answer key, one revision session, one test paper, and one “I can…” page for the pupil."),
    p("Songs and dialogues can be listened to with a phone: scan the QR code or open the link at the bottom of the page.", { after: 160 }),
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
    p("I. Review — quick questions on the last lesson."),
    p("II. New lesson — six small steps: Warm-up, Presentation, Observation, Analysis, Synthesis, Practice."),
    p("III. Evaluation — the pupils work alone."),
    p("The duration boxes are empty (………): the teacher writes his/her own timing.", { after: 120 }),
    p([run("The colours of the book", { bold: true, size: SZ.SUB })], { after: 80 }),
    line("Red", C.RED, "title of the lesson."),
    line("Green", C.GREEN, "sub-titles of the lesson."),
    line("Blue + bold", C.BLUE, "key words to remember. The small grey words in brackets help you say the word: Hello [hèlôou]."),
    line("Pink", C.PINK, "answer keys."),
    p("", { after: 60 }),
    p([run("The audio", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("Scan the QR code with a phone, or open the link: you can listen and download the MP3 file. E.A. means “Expected Answer”.", { after: 160 }),
  ];
}

// ---------- sommaire interactif ----------
function contents() {
  return [
    p([run("CONTENTS", { bold: true, size: 32 })], { center: true, after: 160 }),
    tocLink("unit1", "UNIT 1 — SOCIALISING (Sessions 1–8)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Greetings"),
    tocLink("s2", "    Session 2 — Saying goodbye"),
    tocLink("s3", "    Session 3 — Introducing yourself: What’s your name?"),
    tocLink("s4", "    Session 4 — Introducing yourself: How old are you?"),
    tocLink("s5", "    Session 5 — Thanking"),
    tocLink("s6", "    Session 6 — Apologizing"),
    tocLink("s7", "    Session 7 — Revision"),
    tocLink("s8", "    Session 8 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit2", "UNIT 2 — THE ALPHABET (Sessions 9–12)", { bold: true, size: 26 }),
    tocLink("s9", "    Session 9 — The letters A to M"),
    tocLink("s10", "    Session 10 — The letters N to Z, the Alphabet Song"),
    tocLink("s11", "    Session 11 — Revision"),
    tocLink("s12", "    Session 12 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit3", "UNIT 3 — NUMBERS (Sessions 13–17)", { bold: true, size: 26 }),
    tocLink("s13", "    Session 13 — Numbers 1 to 10, the “One, two” rhyme"),
    tocLink("s14", "    Session 14 — Numbers 11 to 20, the ball game"),
    tocLink("s15", "    Session 15 — How many … are there?"),
    tocLink("s16", "    Session 16 — Revision"),
    tocLink("s17", "    Session 17 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit4", "UNIT 4 — CLASSROOM LANGUAGE (Sessions 18–21)", { bold: true, size: 26 }),
    tocLink("s18", "    Session 18 — Classroom commands"),
    tocLink("s19", "    Session 19 — Asking for permission"),
    tocLink("s20", "    Session 20 — Revision"),
    tocLink("s21", "    Session 21 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit5", "UNIT 5 — PARTS OF THE BODY (Sessions 22–25)", { bold: true, size: 26 }),
    tocLink("s22", "    Session 22 — Parts of the body, the song"),
    tocLink("s23", "    Session 23 — This is my head — What is this?"),
    tocLink("s24", "    Session 24 — Revision"),
    tocLink("s25", "    Session 25 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit6", "UNIT 6 — DAYS OF THE WEEK (Sessions 26–29)", { bold: true, size: 26 }),
    tocLink("s26", "    Session 26 — The seven days, the song"),
    tocLink("s27", "    Session 27 — The order of the days, my favourite day"),
    tocLink("s28", "    Session 28 — Revision"),
    tocLink("s29", "    Session 29 — T4 Test paper"),
    p("", { after: 60 }),
    tocLink("unit7", "UNIT 7 — SCHOOL ENVIRONMENT (Sessions 30–39)", { bold: true, size: 26 }),
    tocLink("s30", "    Session 30 — School things (1)"),
    tocLink("s31", "    Session 31 — School things (2)"),
    tocLink("s32", "    Session 32 — What is this? — This is a book"),
    tocLink("s33", "    Session 33 — The memory game (Kim’s game)"),
    tocLink("s34", "    Session 34 — Colours (1): red, blue, black, green"),
    tocLink("s35", "    Session 35 — Colours (2): find something red!"),
    tocLink("s36", "    Session 36 — What do you need? — I need …"),
    tocLink("s37", "    Session 37 — At the shop (role play)"),
    tocLink("s38", "    Session 38 — Revision"),
    tocLink("s39", "    Session 39 — T4 Test paper"),
    p("", { after: 40 }),
    tocLink("unit8", "UNIT 8 — MEALS (Sessions 40–43)", { bold: true, size: 26 }),
    tocLink("s40", "    Session 40 — Food and drinks"),
    tocLink("s41", "    Session 41 — Breakfast, lunch, dinner"),
    tocLink("s42", "    Session 42 — Revision"),
    tocLink("s43", "    Session 43 — T4 Test paper"),
    p("", { after: 40 }),
    tocLink("unit9", "UNIT 9 — HOUSE (Sessions 44–49)", { bold: true, size: 26 }),
    tocLink("s44", "    Session 44 — Parts of the house (1)"),
    tocLink("s45", "    Session 45 — Parts of the house (2)"),
    tocLink("s46", "    Session 46 — Describing a house"),
    tocLink("s47", "    Session 47 — My dream house"),
    tocLink("s48", "    Session 48 — Revision"),
    tocLink("s49", "    Session 49 — T4 Test paper"),
    p("", { after: 40 }),
    tocLink("unit10", "UNIT 10 — FAMILY (Sessions 50–53)", { bold: true, size: 26 }),
    tocLink("s50", "    Session 50 — The members of the family, the Family song"),
    tocLink("s51", "    Session 51 — Who is he? Who is she?"),
    tocLink("s52", "    Session 52 — Revision"),
    tocLink("s53", "    Session 53 — T4 Test paper"),
    p("", { after: 40 }),
    tocLink("unit11", "UNIT 11 — FARM ANIMALS AND PETS (Sessions 54–57)", { bold: true, size: 26 }),
    tocLink("s54", "    Session 54 — Farm animals and pets"),
    tocLink("s55", "    Session 55 — What is this? Draw me a cat!"),
    tocLink("s56", "    Session 56 — Revision"),
    tocLink("s57", "    Session 57 — T4 Test paper"),
    p("", { after: 40 }),
    tocLink("annexes", "ANNEXES — The treasure box of the year", { bold: true, size: 26 }),
    tocLink("ann1", "    Annex 1 — Picture dictionary"),
    tocLink("ann2", "    Annex 2 — Songs and rhymes"),
    tocLink("ann3", "    Annex 3 — Pronunciation guide"),
    tocLink("ann4", "    Annex 4 — Flashcards to cut out"),
  ];
}

// ---------- tableau de bord ----------
function dashboard() {
  const row = (u, t, s, tot) => new TableRow({ children: [
    cell([B.fp(u)], { w: 1400 }), cell([B.fp(t)], { w: 4600 }),
    cell([B.fp(s)], { w: 2200 }), cell([B.fp(tot)], { w: 2200 }),
  ]});
  const h = (t, w) => cell([B.fp([run(t, { bold: true, size: SZ.FICHE })])], { w, shade: C.HDR1 });
  return [
    p([run("OVERVIEW OF THE YEAR", { bold: true, size: 32 })], { center: true, after: 160 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Unit", 1400), h("Title", 4600), h("Sessions", 2200), h("+ Revision + Test", 2200)] }),
      row("1", "Socialising", "6 (S1–S6)", "S7, S8"),
      row("2", "The Alphabet", "2 (S9–S10)", "S11, S12"),
      row("3", "Numbers", "3 (S13–S15)", "S16, S17"),
      row("4", "Classroom Language", "2 (S18–S19)", "S20, S21"),
      row("5", "Parts of the Body", "2 (S22–S23)", "S24, S25"),
      row("6", "Days of the Week", "2 (S26–S27)", "S28, S29"),
      row("7", "School Environment", "8 (S30–S37)", "S38, S39"),
      row("8", "Meals", "2 (S40–S41)", "S42, S43"),
      row("9", "House", "4 (S44–S47)", "S48, S49"),
      row("10", "Family", "2 (S50–S51)", "S52, S53"),
      row("11", "Farm Animals and Pets", "2 (S54–S55)", "S56, S57"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 35 lesson sessions + 11 revisions + 11 test papers = 57 sessions (1 hour of English per week).", { bold: true, size: SZ.FICHE })]),
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
      properties: { page: { margin: { top: 720, bottom: 720, left: 750, right: 750 } } },
      children: [
        ...cover(), pageBreak(),
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
        ...unit8(), pageBreak(),
        ...unit9(), pageBreak(),
        ...unit10(), pageBreak(),
        ...unit11(), pageBreak(),
        ...annexes(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T4_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
