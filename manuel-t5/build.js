// Assemblage du Manuel Anglais T5 J-Learn — V1 (en cours)
// Unités présentes : 1, 2, 3 — les suivantes sont ajoutées bloc par bloc.
const fs = require("fs");
const path = require("path");
const { Document, Packer, Table, TableRow, WidthType } = require("docx");
const B = require("./builders");
const { C, SZ, FONT, run, p, pr, pageBreak, tocLink, cell, img } = B;
const unit1 = require("./unit1");
const unit2 = require("./unit2");
const unit3 = require("./unit3");

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
    p([run("Units 4 to 10 and the Annexes are coming in the next parts of the book.", { italic: true, color: C.GRAY })]),
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
        ...unit3(),
      ],
    }],
  });
  const out = path.join(__dirname, "Manuel_Anglais_T5_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
