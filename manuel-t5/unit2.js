// T5 — UNIT 2 — INTRODUCING ONESELF (2 séances + révision + test) — Sessions 6 à 9 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "7030A0"; // violet
const TOTAL = 49;
const AUDIO = {
  dialogue: "https://drive.google.com/uc?export=download&id=1Wu9GgUtjxwcjPtP9LiUXYwurxdGf_Gf2",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — INTRODUCING ONESELF", title, slo,
  values: "respect, unity", session, materials,
});
function songBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “WHAT’S YOUR NAME?” SONG  ♪ (from T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "EFE3F7" })] }),
      new TableRow({ children: [cell([
        p([run("Hello, what’s your name?", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("My name is… (2x)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Nice to meet you.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Nice to meet you too.", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}
function dialogueBox() {
  const line = (who, text) => pr([run(who + " : ", { bold: true, color: COLOR }), run(text, { italic: true })], { after: 40 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE DIALOGUES (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "EFE3F7" })] }),
      new TableRow({ children: [cell([
        p([run("Dialogue A", { bold: true })], { after: 40 }),
        line("Tiana", "Andry, where are you from?"),
        line("Andry", "I’m from Madagascar. And you?"),
        line("Tiana", "I’m from Madagascar, too."),
        p("", { after: 40 }),
        p([run("Dialogue B", { bold: true })], { after: 40 }),
        line("Jery", "Liva, where do you live?"),
        line("Liva", "I live in Ampasimbe. And you Jery, where do you live?"),
        line("Jery", "I live in Mahatazana."),
        p("", { after: 20 }),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 2 — INTRODUCING ONESELF", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Where are you from?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_fromlive.png", 400, 768 / 1416),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask and answer: Where are you from? — I’m from …;"),
    p("• ask and answer: Where do you live? — I live in …;"),
    p("• introduce myself: name, age, where I am from, where I live.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect, unity.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 1 + T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "EFE3F7" })] }),
        new TableRow({ children: [cell([
          p("1. What’s your name? — My name is …"),
          p("2. How old are you? — I’m …"),
          p("3. Greet at the right time of the day.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u2_dialogue.png", label: "Where are you from? — listen and repeat", url: AUDIO.dialogue }], COLOR),
  ];
}

function ficheS6() {
  const meta = META("Where are you from? Where do you live?",
    "By the end of the lesson, learners will be able to ask and answer “Where are you from?” and “Where do you live?” with the right sentence intonation.",
    "1 / 2", "7 numbered papers with village names, a small ball, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the four parts of the day."),
       fp("2. Greet me: it is the afternoon."),
       fp("3. Say a wish to a friend.")],
      [fp("Answer."),
       fp("E.A.: 1. morning, afternoon, evening, night."),
       fp("2. Good afternoon!"),
       fp("3. Have a nice day! / Good night! / Enjoy your meal!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Sing the “What’s your name?” song from T4: “Hello, what’s your name? My name is… Nice to meet you. Nice to meet you too.”")],
      [fp("Sing together.")], "Singing", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Where are you from? Where do you live? ». By the end of this lesson, you will be able to say where you are from and where you live.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen: Where are you from? — I’m from Madagascar. Where do you live? — I live in Ampasimbe. Listen to the music of the question: the voice goes down at the end.")],
      [fp("Listen.")], "Modelling", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat the questions and the answers: the class, one row, one pupil."),
       fp("Lottery game (from the syllabus): seven pupils draw a number (1 to 7); each number is a village name (Tanambao, Sambaina, Morombe, Ambalavola, Ampasika, Sambava, Ankazobe). I ask: Where are you from? The pupil answers with the village of the number."),
       fp("Then the same with: Where do you live? — I live in …")],
      [fp("Repeat. Play. Answer."),
       fp("E.A.: I’m from Tanambao. / I live in Sambava. — the intonation is right.")],
      "Repetition drill / Game (lottery)", "7 numbered papers"),
    stepRow(["5. Synthesis"],
      [fp("So: Where are you from? — I’m from … (my home place). Where do you live? — I live in … (the place where I live now).")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Ball game in a circle (outside or in class): the pupil with the ball asks: “Hello, where do you live?”, throws the ball; the catcher answers: “Hello, I live in…”, then asks “And you? Where do you live?” and throws again."),
       fp("Change the question: Where are you from?")],
      [fp("Ask. Throw. Answer."),
       pAns("E.A.: — Where do you live? — I live in … / — Where are you from? — I’m from …",
        ["Where do you live?", "I live in", "Where are you from?", "I’m from"], { size: SZ.FICHE })],
      "Game (ball) / Circle", "A small ball"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where are you from?"),
       fp("2. Where do you live?"),
       fp("3. Ask me one of the two questions.")],
      [fp("Answer. Ask."),
       pAns("E.A.: I’m from … — I live in … — the question is asked with the right intonation.",
        ["I’m from", "I live in"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}

function ficheS7() {
  const meta = META("I introduce myself",
    "By the end of the lesson, learners will be able to read the dialogues fluently and introduce themselves confidently: name, age, where they are from, where they live.",
    "2 / 2", "dialogues on the blackboard, copy-books, a plastic bottle");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Where are you from?"),
       fp("2. Where do you live?"),
       fp("3. Ask your friend one question.")],
      [fp("Answer. Ask."),
       fp("E.A.: 1. I’m from …"),
       fp("2. I live in …"),
       fp("3. Where are you from? / Where do you live?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to the two dialogues on the audio: Tiana and Andry; Jery and Liva.")],
      [fp("Listen.")], "Whole-class work", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the dialogues and introduce ourselves. By the end of this lesson, you will be able to say who you are, all in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the dialogues on the blackboard. Listen to me reading them, sentence by sentence.")],
      [fp("Look. Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read the dialogues after me: all together, by rows, then alone."),
       fp("In pairs: read dialogue B and REPLACE the places with your own places."),
       fp("Listen and correct each other kindly (peer correction). Then read aloud for the class."),
       fp("True or false (in the copy-book): I say “Koto, where do you live?” — Koto answers “I live in Ankora.” In your copy-book: “Koto: I live in Anosy.” True or false?")],
      [fp("Read. Replace. Correct. Circle."),
       fp("E.A.: the dialogue is read with the real places; false — Koto lives in Ankora.")],
      "“Peer correction” / In pairs", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So, to introduce myself I say: My name is … I’m … (age). I’m from … I live in … Nice to meet you!")],
      [fp("Listen. Repeat the model.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Spin-the-bottle game (from the syllabus), in groups of 10 in a circle: spin the bottle. The pupil the bottle points to introduces himself/herself: name, age, where from, where he/she lives, and finishes with “Nice to meet you!”"),
       fp("The others answer: “Nice to meet you, too!” Spin again!")],
      [fp("Play. Introduce yourself."),
       pAns("E.A.: My name is … I’m 9. I’m from … I live in … Nice to meet you! — Nice to meet you, too!",
        ["My name is", "I’m from", "I live in", "Nice to meet you!"], { size: SZ.FICHE })],
      "Game (bottle) / Group work", "A plastic bottle"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Introduce yourself in four sentences."),
       fp("2. Read two lines of the dialogue."),
       fp("3. I say a sentence about a pupil: true or false?")],
      [fp("Introduce yourself. Read. Answer."),
       pAns("E.A.: My name is … I’m … I’m from … I live in … — the reading is fluent — true/false is right.",
        ["My name is", "I’m from", "I live in"], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 2", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("INTRODUCING ONESELF"),
    sub("1. The song (do you remember?)"),
    songBox(),
    p("", { after: 100 }),
    sub("2. Where are you from? Where do you live?"),
    img("u2_fromlive.png", 380, 768 / 1416),
    pr([run("The question: "), ...kw("Where are you from?", "ouèr âr iou frome")]),
    pr([run("The answer: "), ...kw("I’m from Madagascar.", "aïm frome madagaskar")]),
    pr([run("The question: "), ...kw("Where do you live?", "ouèr dou iou live")]),
    pr([run("The answer: "), ...kw("I live in Ampasimbe.", "aï live ine ampasimbé")], { after: 100 }),
    sub("3. The dialogues"),
    dialogueBox(),
    p("", { after: 100 }),
    sub("4. I introduce myself"),
    pr([run("My name is … I’m … (age). ", { bold: true, color: C.BLUE }),
        run("I’m from … I live in … ", { bold: true, color: C.BLUE }),
        run("Nice to meet you!", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u2_dialogue.png", label: "Where are you from? + the dialogues — listen and repeat", url: AUDIO.dialogue },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Answer the teacher’s questions: Where are you from? Where do you live? (two questions, asked twice)")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Read dialogue A with a friend, each one a role.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("True or false? (The teacher reads; circle in the copy-book.)")]),
    p("1. Andry is from Madagascar."),
    p("2. Tiana is from France."),
    p("3. Liva lives in Ampasimbe."),
    p("4. Jery lives in Ampasimbe.", { after: 120 }),
    pr([run("Exercise 4 (8 points). ", { bold: true }), run("Introduce yourself in four sentences: name, age, from, live.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: I’m from … / I live in … (1 point each answer).", ["I’m from", "I live in"]),
    pAns("Exercise 2: the dialogue is read fluently, with the right roles (4 points).", ["read fluently"]),
    pAns("Exercise 3: 1. true  2. false  3. true  4. false (1 point each)", ["true", "false"]),
    pAns("Exercise 4: My name is … (2) I’m … (2) I’m from … (2) I live in … (2).",
      ["My name is", "I’m from", "I live in"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s8", "SESSION 8 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: INTRODUCING ONESELF", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the two questions and the two answers:", { after: 100 }),
    pr([...kw("Where are you from?", "ouèr âr iou frome"), run("  →  "), ...kw("I’m from …", "aïm frome")]),
    pr([...kw("Where do you live?", "ouèr dou iou live"), run("  →  "), ...kw("I live in …", "aï live ine")], { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Where are you from?"),
    pAns("E.A.: I’m from …", ["I’m from"]),
    p("2. Where do you live?"),
    pAns("E.A.: I live in …", ["I live in"]),
    p("3. Read dialogue B with a friend, with YOUR places."),
    pAns("E.A.: the dialogue is read with the pupils’ real places.", ["real places"]),
    p("4. Introduce yourself in four sentences."),
    pAns("E.A.: My name is … I’m … I’m from … I live in …", ["My name is"]),
    p("5. Sing the “What’s your name?” song."),
    pAns("E.A.: the song is sung.", ["song is sung"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s9", "SESSION 9 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 2: INTRODUCING ONESELF", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Answer: Where are you from? Where do you live?")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Ask the teacher the two questions.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("True or false? (The teacher reads four sentences about the dialogues.)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (8 points). ", { bold: true }), run("Introduce yourself in four sentences and finish with “Nice to meet you!”.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: I’m from … / I live in … (2 points each).", ["I’m from", "I live in"]),
    pAns("Exercise 2: Where are you from? / Where do you live? with the right intonation (2 points each).",
      ["Where are you from?", "Where do you live?"]),
    pAns("Exercise 3: true/false match the dialogues (1 point each).", ["true"]),
    pAns("Exercise 4: My name is … (2) I’m … (2) I’m from … (2) I live in … + Nice to meet you! (2).",
      ["My name is", "Nice to meet you!"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS6(), pageBreak(),
    ...ficheS7(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can ask: Where are you from? Where do you live?",
      "I can answer: I’m from … I live in …",
      "I can read the dialogues.",
      "I can introduce myself in four sentences.",
    ], "Well done! See you in Unit 3: CLASSROOM LANGUAGE!"),
  ];
};
module.exports.COLOR = COLOR;
