// Assemblage du Manuel Anglais T6 J-Learn — V1 (en cours)
// Unités présentes : 1 à 7 + annexes — MANUEL COMPLET.
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
const annexes = require("./annexes");

// ---------- couverture ----------
function cover() {
  const f = path.join(__dirname, "img", "cover_anglais_t6.png");
  if (fs.existsSync(f)) return [img("cover_anglais_t6.png", 718, 1264 / 843)];
  return [p([run("ANGLAIS T6 — LESSON PLAN (cover to come)", { bold: true, size: 40 })], { center: true })];
}

// ---------- avant-propos ----------
function foreword() {
  return [
    p([run("FOREWORD", { bold: true, size: 32 })], { center: true, after: 160 }),
    p("This book follows the official T6 English syllabus (Programme d’études T6) and its Pedagogical Resources Booklet."),
    p("In T6, English becomes a big subject: THREE hours every week. The pupils understand and use basic English in oral communication, read and understand short English sentences, and write short paragraphs in English."),
    p("Every session has three big steps: I. Review — II. New lesson — III. Evaluation. The teacher writes the duration of each step in the sheet."),
    p("Every preparation sheet is followed by a one-page “Lesson of the day”: the summary the pupils copy in their copy-books. At the end of each unit, one big lesson gathers everything, with pictures and pronunciation help."),
    p("Every unit has: one opening page, the preparation sheets with their lessons of the day, the big unit lesson, exercises with an answer key, one revision session, one test paper, and one “I can…” page for the pupil. Five annexes close the book — including a full conjugation guide with all the exceptions explained."),
    p("Dialogues, songs, rhymes and reading texts can be listened to with a phone: scan the QR code or open the link at the bottom of the page.", { after: 160 }),
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
    p([run("The two kinds of lesson pages", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("LESSON OF THE DAY — one page after every preparation sheet: it is the board summary of that session. The pupils copy it in their copy-books."),
    p("LESSON — UNIT — one big page at the end of the unit: it gathers all the sessions. Perfect for the revision and the test!", { after: 120 }),
    p([run("The three skills of T6", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("ORAL COMMUNICATION — listen (pre / while / post-listening) and speak."),
    p("READING — read short texts with the right intonation and punctuation."),
    p("WRITING — write words, sentences and short dialogues.", { after: 120 }),
    p([run("The colours of the book", { bold: true, size: SZ.SUB })], { after: 80 }),
    line("Red", C.RED, "title of the lesson."),
    line("Green", C.GREEN, "sub-titles of the lesson."),
    line("Blue + bold", C.BLUE, "key words to remember. The small grey words in brackets help you say the word: Hello [hèlôou]."),
    line("Pink", C.PINK, "answer keys."),
    p("", { after: 60 }),
    p([run("The audio", { bold: true, size: SZ.SUB })], { after: 80 }),
    p("Scan the QR code with a phone, or open the link: you can listen and download the MP3 file. In Annex 2, the traditional songs also have a YouTube link for the video version. E.A. means “Expected Answer”.", { after: 160 }),
  ];
}

// ---------- sommaire interactif ----------
function contents() {
  return [
    p([run("CONTENTS", { bold: true, size: 32 })], { center: true, after: 160 }),
    tocLink("unit1", "UNIT 1 — PERSONAL COMMUNICATION (Sessions 1–11)", { bold: true, size: 26 }),
    tocLink("s1", "    Session 1 — Socialising: greetings, welcoming, taking leave"),
    tocLink("s2", "    Session 2 — Personal information — the verb TO BE"),
    tocLink("s3", "    Session 3 — Introducing a friend — the verb TO HAVE"),
    tocLink("s4", "    Session 4 — The English alphabet"),
    tocLink("s5", "    Session 5 — How do you spell…?"),
    tocLink("s6", "    Session 6 — Numbers 0 to 100 — There is / There are"),
    tocLink("s7", "    Session 7 — Phone numbers — sorry and thank you"),
    tocLink("s8", "    Session 8 — Reading: “New friends at school”"),
    tocLink("s9", "    Session 9 — Writing: my first English dialogue"),
    tocLink("s10", "    Session 10 — Revision"),
    tocLink("s11", "    Session 11 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit2", "UNIT 2 — CLASSROOM COMMUNICATION (Sessions 12–16)", { bold: true, size: 26 }),
    tocLink("s12", "    Session 12 — Teacher’s instructions — asking for clarification"),
    tocLink("s13", "    Session 13 — Asking for and giving permission — can and may"),
    tocLink("s14", "    Session 14 — Reading and writing a classroom dialogue"),
    tocLink("s15", "    Session 15 — Revision"),
    tocLink("s16", "    Session 16 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit3", "UNIT 3 — TIME AND WEATHER (Sessions 17–30)", { bold: true, size: 26 }),
    tocLink("s17", "    Session 17 — The days of the week"),
    tocLink("s18", "    Session 18 — The twelve months — What month is it now?"),
    tocLink("s19", "    Session 19 — The ordinal numbers — telling the date"),
    tocLink("s20", "    Session 20 — Yesterday, today, tomorrow — was and will be"),
    tocLink("s21", "    Session 21 — What time is it? — o’clock, a.m. and p.m."),
    tocLink("s22", "    Session 22 — A quarter past, half past, a quarter to"),
    tocLink("s23", "    Session 23 — When do you…? — the time interview"),
    tocLink("s24", "    Session 24 — The four seasons"),
    tocLink("s25", "    Session 25 — What’s the weather like? — the -y adjectives"),
    tocLink("s26", "    Session 26 — Raining cats and dogs! — my favourite season"),
    tocLink("s27", "    Session 27 — Reading: “My Monday morning”"),
    tocLink("s28", "    Session 28 — Writing: my favourite season and weather"),
    tocLink("s29", "    Session 29 — Revision"),
    tocLink("s30", "    Session 30 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit4", "UNIT 4 — EVERYDAY MEALS (Sessions 31–41)", { bold: true, size: 26 }),
    tocLink("s31", "    Session 31 — The everyday food"),
    tocLink("s32", "    Session 32 — What’s for lunch?"),
    tocLink("s33", "    Session 33 — Our meal dialogue"),
    tocLink("s34", "    Session 34 — The four tastes"),
    tocLink("s35", "    Session 35 — I like, I don’t like — the jazz chant"),
    tocLink("s36", "    Session 36 — My favourite food — Quiz, quiz, trade!"),
    tocLink("s37", "    Session 37 — Food from Anglophone countries"),
    tocLink("s38", "    Session 38 — Reading: “Meals at my house”"),
    tocLink("s39", "    Session 39 — Writing: my everyday meals"),
    tocLink("s40", "    Session 40 — Revision"),
    tocLink("s41", "    Session 41 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit5", "UNIT 5 — FAMILY (Sessions 42–52)", { bold: true, size: 26 }),
    tocLink("s42", "    Session 42 — The extended family"),
    tocLink("s43", "    Session 43 — Listening: “My family”"),
    tocLink("s44", "    Session 44 — One and many — plural nouns"),
    tocLink("s45", "    Session 45 — The possessive case"),
    tocLink("s46", "    Session 46 — This, that, these, those"),
    tocLink("s47", "    Session 47 — Talking about my relatives"),
    tocLink("s48", "    Session 48 — Reading: “My grandmother Lala” (1)"),
    tocLink("s49", "    Session 49 — Reading (2): grandparents here and there"),
    tocLink("s50", "    Session 50 — Writing: my extended family"),
    tocLink("s51", "    Session 51 — Revision"),
    tocLink("s52", "    Session 52 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit6", "UNIT 6 — PEOPLE’S APPEARANCE (Sessions 53–66)", { bold: true, size: 26 }),
    tocLink("s53", "    Session 53 — The body parts (1): the head"),
    tocLink("s54", "    Session 54 — The body parts (2): trunk and limbs"),
    tocLink("s55", "    Session 55 — Simon says! — the imperatives"),
    tocLink("s56", "    Session 56 — The five senses"),
    tocLink("s57", "    Session 57 — Listening: “This is Anna”"),
    tocLink("s58", "    Session 58 — The clothes"),
    tocLink("s59", "    Session 59 — She is wearing… — the present continuous"),
    tocLink("s60", "    Session 60 — What does he look like? — the adjectives"),
    tocLink("s61", "    Session 61 — Traditional clothing here and there"),
    tocLink("s62", "    Session 62 — Reading: “Emma and her friends at the park”"),
    tocLink("s63", "    Session 63 — Present simple or present continuous?"),
    tocLink("s64", "    Session 64 — Writing: my favourite famous person"),
    tocLink("s65", "    Session 65 — Revision"),
    tocLink("s66", "    Session 66 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("unit7", "UNIT 7 — MY IMMEDIATE SURROUNDINGS (Sessions 67–74)", { bold: true, size: 26 }),
    tocLink("s67", "    Session 67 — The school buildings"),
    tocLink("s68", "    Session 68 — Listening: “Tom’s school”"),
    tocLink("s69", "    Session 69 — There is, there are — my school and Tom’s school"),
    tocLink("s70", "    Session 70 — The house furniture"),
    tocLink("s71", "    Session 71 — Reading: “My new house”"),
    tocLink("s72", "    Session 72 — Writing: my favourite place"),
    tocLink("s73", "    Session 73 — Revision"),
    tocLink("s74", "    Session 74 — T6 Test paper"),
    p("", { after: 60 }),
    tocLink("annexes", "ANNEXES", { bold: true, size: 26 }),
    tocLink("ann1", "    Annex 1 — Picture dictionary"),
    tocLink("ann2", "    Annex 2 — Songs and chants"),
    tocLink("ann3", "    Annex 3 — Pronunciation guide"),
    tocLink("ann4", "    Annex 4 — Flashcards to cut out"),
    tocLink("ann5", "    Annex 5 — Conjugation guide"),
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
      row("1", "Personal Communication", "9 (S1–S9)", "S10, S11"),
      row("2", "Classroom Communication", "3 (S12–S14)", "S15, S16"),
      row("3", "Time and Weather", "12 (S17–S28)", "S29, S30"),
      row("4", "Everyday Meals", "9 (S31–S39)", "S40, S41"),
      row("5", "Family", "9 (S42–S50)", "S51, S52"),
      row("6", "People’s Appearance", "12 (S53–S64)", "S65, S66"),
      row("7", "My Immediate Surroundings", "6 (S67–S72)", "S73, S74"),
    ]}),
    p("", { after: 80 }),
    p([run("Total: 60 lesson sessions + 7 revisions + 7 test papers = 74 sessions (3 hours of English per week).", { bold: true, size: SZ.FICHE })]),
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
  const out = path.join(__dirname, "Manuel_Anglais_T6_JLearn.docx");
  fs.writeFileSync(out, await Packer.toBuffer(doc));
  console.log("OK —", out);
}
main().catch(e => { console.error(e); process.exit(1); });
