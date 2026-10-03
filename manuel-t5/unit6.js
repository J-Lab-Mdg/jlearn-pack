// T5 — UNIT 6 — MY DREAM CLASSROOM (3 séances + révision + test) — Sessions 25 à 29 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "BF8F00"; // or
const TOTAL = 49;
const AUDIO = {
  numbers: "https://drive.google.com/uc?export=download&id=1H6XO5Ih70kMQYfFV3DbHw6y4XyPlii2z",
  classroom: "https://drive.google.com/uc?export=download&id=1qKWzzV4XRZUetQm8EVDT_vRAq7qR17r0",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — MY DREAM CLASSROOM", title, slo,
  values: "perseverance, unity", session, materials,
});
const TENS = [
  ["41", "forty-one"], ["43", "forty-three"], ["45", "forty-five"], ["47", "forty-seven"], ["50", "fifty"],
  ["52", "fifty-two"], ["54", "fifty-four"], ["56", "fifty-six"], ["58", "fifty-eight"], ["60", "sixty"],
  ["61", "sixty-one"], ["63", "sixty-three"], ["65", "sixty-five"], ["68", "sixty-eight"], ["70", "seventy"],
];
function numberGrid() {
  const rows = [];
  for (let i = 0; i < TENS.length; i += 5) {
    rows.push(new TableRow({ children: TENS.slice(i, i + 5).map(([n, w]) =>
      cell([p([run(n, { bold: true, color: COLOR, size: 28 })], { center: true, after: 6 }),
            p([run(w, { bold: true, color: C.BLUE, size: 22 })], { center: true, after: 16 })],
        { w: 2080, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
const WORDS = [
  ["classroom", "klâsroume"], ["headmaster", "hèdmâsteur"], ["teacher", "titcheur"], ["pupils", "pioupolz"],
  ["table", "téibol"], ["chair", "tchèr"], ["bench", "bèntch"], ["blackboard", "blakbôrd"],
];
function wordGrid() {
  const rows = [];
  for (let i = 0; i < WORDS.length; i += 4) {
    rows.push(new TableRow({ children: WORDS.slice(i, i + 4).map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 6 — MY DREAM CLASSROOM", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("There are twelve pupils!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_classroom.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• count from 40 to 70 and read these numbers;"),
    p("• play the “more or less” number game;"),
    p("• say and read the classroom words;"),
    p("• speak about my dream classroom with There is / There are.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("perseverance, unity.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F5EBD2" })] }),
        new TableRow({ children: [cell([
          p("Count from 21 to 40 with a friend."),
          p("Read: twenty-five, thirty, thirty-eight, forty.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u6_classroom.png", label: "My dream classroom — listen and repeat", url: AUDIO.classroom }], COLOR),
  ];
}

function ficheS25() {
  const meta = META("Counting from 40 to 70 — more or less!",
    "By the end of the lesson, learners will be able to count from 40 to 70, recognise fifty, sixty and seventy, and play the “more or less” game.",
    "1 / 3", "three big cards with 50, 60 and 70, copy-books, papers");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 40."),
       fp("2. Read: thirty, forty."),
       fp("3. When is your birthday? (Unit 5)")],
      [fp("Count. Read. Answer."),
       fp("E.A.: the counting and the reading are right; My birthday is on …")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Count from 1 to 40 in English. Now count from 40 to 49 in French. In English it works the same way: forty-one, forty-two…!")],
      [fp("Count.")], "“Transfer”", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to count from 40 to 70. By the end of this lesson, you will count to seventy and play a new number game!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at these big cards: 50 … “fifty”. 60 … “sixty”. 70 … “seventy”. Listen and look. (The teacher repeats several times.)")],
      [fp("Look. Listen.")], "“Visual aids” / Modelling", "Big cards 50, 60, 70"),
    stepRow(["4. Analysis"],
      [fp("Repeat after me: fifty / sixty / seventy — the class, one row, one pupil."),
       fp("Point to fifty! Point to seventy! Point to sixty!"),
       fp("Count with me: forty-one… fifty. Fifty-one… sixty. Sixty-one… seventy."),
       fp("Dictation: I say numbers between 41 and 70; write them in figures in your copy-book.")],
      [fp("Repeat. Point. Count. Write."),
       fp("E.A.: the cards are pointed to; the numbers are written: 47, 58, 63…")],
      "Repetition drill / Dictation", "Cards, copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So: 50 = fifty, 60 = sixty, 70 = seventy. After forty we count forty-one, forty-two… like before!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game “More or less” (from the syllabus): one pupil writes a secret number between 40 and 70 on a paper. The class guesses. If the guess is too high, the pupil says “less!” with the gesture (hand down). If it is too low: “more!” (hand up). Who finds the number?")],
      [fp("Write a secret number. Guess. Say “more” / “less” with the gestures."),
       pAns("E.A.: fifty-five? — less! — forty-eight? — more! — fifty-two? — yes!",
        ["more", "less"], { size: SZ.FICHE })],
      "Game (“more or less”)", "Papers"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 40 to 70."),
       fp("2. I show a card: fifty, sixty or seventy?"),
       fp("3. Write in figures: forty-six, sixty-three.")],
      [fp("Count. Answer. Write."),
       pAns("E.A.: the counting is right; 46 and 63 are written.",
        ["counting is right"], { size: SZ.FICHE })],
      "Individual work", "Cards, copy-books"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}

function ficheS26() {
  const meta = META("Reading the numbers 40 to 70",
    "By the end of the lesson, learners will be able to read the numbers 40 to 70 written in words, fluently and with the right stress.",
    "2 / 3", "cards with figures and words 40-70, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 40 to 70."),
       fp("2. I say a number (41-70): write it in figures."),
       fp("3. Play one quick round of “more or less”.")],
      [fp("Count. Write. Play."),
       fp("E.A.: the counting and the writing are right.")],
      "Individual work", "Copy-books"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Number ping-pong from 40: I say forty-four, you say forty-five!")],
      [fp("Answer.")], "Game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ the numbers 40 to 70 written in words. By the end of this lesson, you will read them fluently.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the words on the blackboard: forty, forty-one… seventy. Listen to me reading them. The strong part is at the START: FIFty, SIXty, SEventy!")],
      [fp("Look. Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read after me: all together, by rows, then alone."),
       fp("I point to a word, you read it: fifty-three? sixty-eight?"),
       fp("How do we write 55 in words?")],
      [fp("Read. Answer."),
       fp("E.A.: the words are read; fifty-five.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, we can read the numbers 40 to 70 in words: forty… fifty… sixty… seventy, and the small numbers with a dash: fifty-two, sixty-nine.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Card game (from the syllabus): each pupil comes to the front and takes one card face down on the table (a figure 40-70 OR a word). Look at your card, find the friend with the SAME number, and say your number together!")],
      [fp("Take a card. Read it. Find the pair. Say the number."),
       pAns("E.A.: “58” and “fifty-eight” find each other and say: fifty-eight!",
        ["fifty-eight!"], { size: SZ.FICHE })],
      "Game (matching pairs)", "Cards with figures and words"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read five number words on the blackboard (40-70)."),
       fp("2. I say a number: point to the word."),
       fp("3. Count from 40 to 70.")],
      [fp("Read. Point. Count."),
       pAns("E.A.: the words are read without mistakes; the right words are pointed to.",
        ["read without mistakes"], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}

function ficheS27() {
  const meta = META("My dream classroom",
    "By the end of the lesson, learners will be able to say and read the classroom words, and present their dream classroom with “There is / There are”.",
    "3 / 3", "big picture of a classroom, big sheets, pencils, small word papers, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 40 to 70."),
       fp("2. Read: fifty-five, sixty-two, seventy."),
       fp("3. Open your copybook! (Unit 3)")],
      [fp("Count. Read. Act."),
       fp("E.A.: the counting and the reading are right.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes. Imagine the most beautiful classroom of the world… What is in it? Today you will DRAW it and SPEAK about it!")],
      [fp("Imagine.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « My dream classroom ». By the end of this lesson, you will present your dream classroom in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the big picture of the classroom. Listen: “This is the classroom. This is the headmaster. This is the teacher. These are the pupils. This is a table. This is a chair. These are benches.”")],
      [fp("Look. Listen.")], "“Visual aids” / Audio", "Big picture, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat the sentences: the class, one row, one pupil."),
       fp("I say a word: point to it on the picture (headmaster! bench! blackboard!)."),
       fp("Read the words written on the picture."),
       fp("Small papers game: take a paper, read the word aloud, and stick it on the right thing on the big picture.")],
      [fp("Repeat. Point. Read. Stick."),
       fp("E.A.: the words are pointed to, read and placed correctly.")],
      "Repetition drill / Matching", "Small word papers, big picture"),
    stepRow(["5. Synthesis"],
      [fp("So, for ONE thing we say: There is … (There is a teacher.) For MANY things we say: There are … (There are twelve pupils.)")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Draw your dream classroom on a big sheet!"),
       fp("Answer my questions: Who is this? What is this? How many pupils are there?"),
       fp("Present your drawing to your friend: “This is my dream classroom. There is … There are …”")],
      [fp("Draw. Answer. Present."),
       pAns("E.A.: This is my dream classroom. There is a teacher. There are twelve pupils.",
        ["There is", "There are"], { size: SZ.FICHE })],
      "Drawing / In pairs", "Big sheets, pencils"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read four classroom words."),
       fp("2. Present your dream classroom in three sentences."),
       fp("3. How many pupils are there in your drawing?")],
      [fp("Read. Present. Answer."),
       pAns("E.A.: the words are read; There is … / There are … are used; There are … pupils.",
        ["There is", "There are"], { size: SZ.FICHE })],
      "Individual work", "The drawings"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MY DREAM CLASSROOM"),
    sub("1. The numbers 40 to 70"),
    numberGrid(),
    p("", { after: 100 }),
    sub("2. The “more or less” game"),
    pr([run("Too high? Say "), run("less!", { bold: true, color: C.BLUE }), run(" [lèss] (hand down). Too low? Say "),
        run("more!", { bold: true, color: C.BLUE }), run(" [môr] (hand up).")], { after: 100 }),
    sub("3. The classroom words"),
    img("u6_classroom.png", 440, 768 / 1408),
    wordGrid(),
    p("", { after: 100 }),
    sub("4. There is … / There are …"),
    pr([run("For ONE thing: "), ...kw("There is a teacher.", "zèr iz e titcheur")]),
    pr([run("For MANY things: "), ...kw("There are twelve pupils.", "zèr âr touèlv pioupolz")]),
    pr([run("The question: "), ...kw("How many pupils are there?", "haou mèni pioupolz âr zèr")], { after: 100 }),
    sub("5. My dream classroom"),
    pr([run("This is my dream classroom. ", { bold: true, color: C.BLUE }),
        run("There is a teacher. There are twelve pupils. ", { bold: true, color: C.BLUE }),
        run("There is a big blackboard. There are many books.", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u6_numbers.png", label: "Numbers 40 to 70 — listen and count", url: AUDIO.numbers },
      { qr: "qr_t5_u6_classroom.png", label: "My dream classroom — listen and repeat", url: AUDIO.classroom },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Count from 40 to 70.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Read these numbers: forty-four — fifty — fifty-seven — sixty-three — seventy.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The teacher points to four things or persons on the classroom picture: say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Complete with There is or There are:")]),
    p("1. …… a teacher in my classroom."),
    p("2. …… twenty benches."),
    p("3. …… a big blackboard."),
    p("4. …… fifty pupils.", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: forty-one … seventy without mistakes (5 points).", ["forty-one"]),
    pAns("Exercise 2: the five numbers are read correctly (1 point each).", ["five numbers"]),
    pAns("Exercise 3: teacher, headmaster, pupils, bench, table, chair, blackboard… (1 point each).", ["teacher, headmaster"]),
    pAns("Exercise 4: 1. There is  2. There are  3. There is  4. There are (1.5 points each).", ["There is", "There are"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s28", "SESSION 28 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: MY DREAM CLASSROOM", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the classroom words:", { after: 100 }),
    wordGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Count from 40 to 70."),
    pAns("E.A.: forty-one … seventy.", ["forty-one"]),
    p("2. Read: forty-nine, fifty-five, sixty-one, seventy."),
    pAns("E.A.: the numbers are read without mistakes.", ["read without mistakes"]),
    p("3. Play one round of “more or less” with a secret number."),
    pAns("E.A.: more! / less! are used with the gestures.", ["more!", "less!"]),
    p("4. Read six classroom words on the blackboard."),
    pAns("E.A.: the words are read fluently.", ["read fluently"]),
    p("5. Present your dream classroom in three sentences."),
    pAns("E.A.: This is my dream classroom. There is … There are …", ["There is", "There are"]),
    p("6. How many pupils are there in your class today? Count them in English!"),
    pAns("E.A.: There are … pupils.", ["There are"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s29", "SESSION 29 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 6: MY DREAM CLASSROOM", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Count from 40 to 70.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Read five numbers in words chosen by the teacher (40-70).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Read five classroom words on the blackboard.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Present your dream classroom in three sentences with There is / There are.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the counting is right (5 points).", ["counting is right"]),
    pAns("Exercise 2: the numbers are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 3: the words are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 4: This is my dream classroom. There is … There are … (5 points).", ["There is", "There are"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS25(), pageBreak(),
    ...ficheS26(), pageBreak(),
    ...ficheS27(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 6", COLOR, [
      "I can count from 40 to 70.",
      "I can read the numbers 40 to 70.",
      "I can play “more or less”.",
      "I can say and read the classroom words.",
      "I can present my dream classroom with There is / There are.",
    ], "Well done! See you in Unit 7: MEALS!"),
  ];
};
module.exports.COLOR = COLOR;
