// Assemblage du Manuel Anglais T5 J-Learn — version complète (10 unités + annexes)
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, pageBreak, tocLink, cell, img } = B;
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
const annexes = require("./annexes");

// ---------- couverture ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t5.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t5.png", 455, 1264 / 843)];
  return [p([run("ANGLAIS T5 — LESSON PLAN (cover to come)", { bold: true, size: 40 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T5 English syllabus of the Ministry of National Education of Madagascar (Programme d’études T5) and its Pedagogical Resources Booklet."),
    p("In T5, the pupils continue English: they speak more, they start to read the words and sentences they know, and they play, sing and act in English."),
    p("Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every unit has: one opening page, the preparation sheets, one lesson with pictures and pronunciation help, exercises with an answer key, one revision session, one test paper, and one “I can…” page for the pupil."),
    p("Songs, rhymes and dialogues can be listened to with a phone: scan the QR code or open the link at the bottom of the page.", { after: 160 }),
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
    tocLink("unit1", "UNIT 1 — SOCIALISING (Sessions 1–5)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — The parts of the day"),
    tocLink("s2", "    Session 2 — Greetings and wishes"),
    tocLink("s3", "    Session 3 — Saying goodbye"),
    tocLink("s4", "    Session 4 — Revision"),
    tocLink("s5", "    Session 5 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit2", "UNIT 2 — INTRODUCING ONESELF (Sessions 6–9)", { bold: true, size: 26 }),
    tocLink("s6", "    Session 6 — Where are you from? Where do you live?"),
    tocLink("s7", "    Session 7 — I introduce myself"),
    tocLink("s8", "    Session 8 — Revision"),
    tocLink("s9", "    Session 9 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit3", "UNIT 3 — CLASSROOM LANGUAGE (Sessions 10–13)", { bold: true, size: 26 }),
    tocLink("s10", "    Session 10 — The classroom commands"),
    tocLink("s11", "    Session 11 — I read and give the commands"),
    tocLink("s12", "    Session 12 — Revision"),
    tocLink("s13", "    Session 13 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit4", "UNIT 4 — PARTS OF THE BODY (Sessions 14–17)", { bold: true, size: 26 }),
    tocLink("s14", "    Session 14 — The parts of the body"),
    tocLink("s15", "    Session 15 — This is my… — What am I doing?"),
    tocLink("s16", "    Session 16 — Revision"),
    tocLink("s17", "    Session 17 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit5", "UNIT 5 — MY BIRTHDAY IS ON… (Sessions 18–24)", { bold: true, size: 26 }),
    tocLink("s18", "    Session 18 — Reading the numbers 1 to 20"),
    tocLink("s19", "    Session 19 — The twelve months of the year"),
    tocLink("s20", "    Session 20 — Reading the months, my favourite month"),
    tocLink("s21", "    Session 21 — Counting from 21 to 40"),
    tocLink("s22", "    Session 22 — Reading 21 to 40, my birthday is on…"),
    tocLink("s23", "    Session 23 — Revision"),
    tocLink("s24", "    Session 24 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit6", "UNIT 6 — MY DREAM CLASSROOM (Sessions 25–29)", { bold: true, size: 26 }),
    tocLink("s25", "    Session 25 — Counting from 40 to 70, more or less!"),
    tocLink("s26", "    Session 26 — Reading the numbers 40 to 70"),
    tocLink("s27", "    Session 27 — My dream classroom"),
    tocLink("s28", "    Session 28 — Revision"),
    tocLink("s29", "    Session 29 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit7", "UNIT 7 — MEALS (Sessions 30–33)", { bold: true, size: 26 }),
    tocLink("s30", "    Session 30 — Everyday food"),
    tocLink("s31", "    Session 31 — What did you have for breakfast?"),
    tocLink("s32", "    Session 32 — Revision"),
    tocLink("s33", "    Session 33 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit8", "UNIT 8 — IN MY HOUSE (Sessions 34–39)", { bold: true, size: 26 }),
    tocLink("s34", "    Session 34 — The rooms of the house"),
    tocLink("s35", "    Session 35 — The furniture and the objects"),
    tocLink("s36", "    Session 36 — Reading the house words"),
    tocLink("s37", "    Session 37 — I describe a house"),
    tocLink("s38", "    Session 38 — Revision"),
    tocLink("s39", "    Session 39 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit9", "UNIT 9 — MY FAMILY (Sessions 40–45)", { bold: true, size: 26 }),
    tocLink("s40", "    Session 40 — The family tree"),
    tocLink("s41", "    Session 41 — Reading the family words, my family tree"),
    tocLink("s42", "    Session 42 — Who is this? — the gallery walk"),
    tocLink("s43", "    Session 43 — We are a family! (role play)"),
    tocLink("s44", "    Session 44 — Revision"),
    tocLink("s45", "    Session 45 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("unit10", "UNIT 10 — WILD ANIMALS (Sessions 46–49)", { bold: true, size: 26 }),
    tocLink("s46", "    Session 46 — The wild animals"),
    tocLink("s47", "    Session 47 — Counting to 100, how many animals?"),
    tocLink("s48", "    Session 48 — Revision"),
    tocLink("s49", "    Session 49 — T5 Test paper"),
    p("", { after: 60 }),
    tocLink("annexes", "ANNEXES", { bold: true, size: 26 }),
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
      row("1", "Socialising", "3 (S1–S3)", "S4, S5"),
      row("2", "Introducing Oneself", "2 (S6–S7)", "S8, S9"),
      row("3", "Classroom Language", "2 (S10–S11)", "S12, S13"),
      row("4", "Parts of the Body", "2 (S14–S15)", "S16, S17"),
      row("5", "My Birthday", "5 (S18–S22)", "S23, S24"),
      row("6", "My Dream Classroom", "3 (S25–S27)", "S28, S29"),
      row("7", "Meals", "2 (S30–S31)", "S32, S33"),
      row("8", "In My House", "4 (S34–S37)", "S38, S39"),
      row("9", "My Family", "4 (S40–S43)", "S44, S45"),
      row("10", "Wild Animals", "2 (S46–S47)", "S48, S49"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 29 lesson sessions + 10 revisions + 10 test papers = 49 sessions (1 hour of English per week).", { bold: true, size: SZ.FICHE })]),
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
        ...annexes(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T5_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
