// UNIT 3 — NUMBERS (3 séances + révision + test) — Sessions 13 à 17 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "00838F"; // bleu-vert
const TOTAL = 57;
const AUDIO = {
  numbers: "https://drive.google.com/uc?export=download&id=1s99QLOuT7yDOPe0IV1cnA-TzyBya0WDB",
  rhyme: "https://drive.google.com/uc?export=download&id=1HctvxUvAx6_baroHpwvV_KLb3HHL2uZb",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — NUMBERS", title, slo,
  values: "self-confidence, perseverance", session, materials,
});
const NUM = [
  ["1", "one", "ouane"], ["2", "two", "tou"], ["3", "three", "tsri"],
  ["4", "four", "fôr"], ["5", "five", "faïv"], ["6", "six", "siks"],
  ["7", "seven", "sèvène"], ["8", "eight", "éit"], ["9", "nine", "naïn"],
  ["10", "ten", "tène"], ["11", "eleven", "ilèvène"], ["12", "twelve", "touèlv"],
  ["13", "thirteen", "seurtine"], ["14", "fourteen", "fôrtine"], ["15", "fifteen", "fiftine"],
  ["16", "sixteen", "sikstine"], ["17", "seventeen", "sèvènetine"], ["18", "eighteen", "éitine"],
  ["19", "nineteen", "naïntine"], ["20", "twenty", "touènti"],
];
function numberGrid(items) {
  const perRow = 5, rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([d, w, pn]) =>
      cell([p([run(d, { bold: true, color: COLOR, size: 40 })], { center: true, after: 10 }),
            p([run(w, { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 3 — NUMBERS", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("1, 2, 3… twenty!", { bold: true, color: COLOR, size: 48 })], { center: true, after: 120 }),
    img("u3_numbers.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• count from 1 to 20 in English;"),
    p("• say the “One, two” rhyme;"),
    p("• ask and answer: How many … are there?", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, perseverance.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 2)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "DFF2F4" })] }),
        new TableRow({ children: [cell([
          p("1. Say the letters from A to E."),
          p("2. Spell your name, letter by letter.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u3_numbers.png", label: "Numbers 1 to 20 — listen and repeat", url: AUDIO.numbers }], COLOR),
  ];
}

function ficheS13() {
  const meta = META("Numbers 1 to 10 — the “One, two” rhyme",
    "By the end of the lesson, learners will be able to say the numbers 1 to 10 correctly.",
    "1 / 3", "number line on the board, small objects (pens, chalk), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How many letters are in the English alphabet?"),
       fp("2. Say the letters from A to E."),
       fp("3. Spell your name."),
       fp("4. Sing the Alphabet Song.")],
      [fp("Answer."),
       fp("E.A.: 1. Twenty-six (26)."),
       fp("2. A, B, C, D, E."),
       fp("3. The name is spelt letter by letter."),
       fp("4. The song is sung in the right order.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Koto has pencils. He counts them. Listen: “One, two, three…”. What is Koto doing?")],
      [fp("Listen. Answer."), fp("E.A.: He is counting.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Numbers 1 to 10 ». By the end of this lesson, you will be able to say the numbers 1 to 10 correctly.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the number line on the board: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10. Listen to the “One, two” rhyme to the end.")],
      [fp("Look. Listen.")], "Whole-class work", "Number line, audio"),
    stepRow(["4. Analysis"],
      [fp("How many numbers are on the board? Count in Malagasy first."),
       fp("Listen to the rhyme part by part. Which numbers do you hear?"),
       fp("I point to a number. Say it after me: one, two, three…"),
       fp("What number comes after five?")],
      [fp("Answer. Repeat."),
       fp("E.A.: Ten numbers."),
       fp("E.A.: one, two, three, four… ten."),
       fp("E.A.: pupils repeat each number."),
       fp("E.A.: Six.")],
      "Brainstorming / Repetition drill", "Number line"),
    stepRow(["5. Synthesis"],
      [fp("So, the numbers 1 to 10 are: one, two, three, four, five, six, seven, eight, nine, ten. We can say them with the rhyme: “One, two, what do you do? Three, four, count some more! Five, six, clap your hands! Seven, eight, stand up straight! Nine, ten, once again!”")],
      [fp("Listen. Repeat the rhyme part by part, with the actions.")],
      "Rhyme with actions", "Blackboard, audio"),
    stepRow(["6. Practice"],
      [fp("Say the rhyme with the actions, group by group."),
       fp("I point to a number on the line: say it."),
       fp("Count these objects: (show 3 pens, 5 chalks, 7 pencils)."),
       fp("Say the missing number: 1, 2, …, 4 — 5, …, 7 — 8, 9, …")],
      [fp("Say the rhyme. Count."),
       pAns("E.A.: three pens ; five chalks ; seven pencils.", ["three", "five", "seven"], { size: SZ.FICHE }),
       pAns("E.A.: three ; six ; ten.", ["three", "six", "ten"], { size: SZ.FICHE })],
      "Game / Group work", "Number line, objects"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 1 to 10."),
       fp("2. I show fingers: say the number."),
       fp("3. Say the rhyme with the actions.")],
      [fp("Answer."),
       pAns("E.A.: one, two, three, four, five, six, seven, eight, nine, ten — each number is said correctly.",
        ["one, two, three, four, five, six, seven, eight, nine, ten"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}

function ficheS14() {
  const meta = META("Numbers 11 to 20 — the ball game",
    "By the end of the lesson, learners will be able to say the numbers 11 to 20 correctly.",
    "2 / 3", "number line 11–20 on the board, ball");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 10."),
       fp("2. What number comes after seven?"),
       fp("3. I show fingers (4, 6, 9): say the number."),
       fp("4. Say the “One, two” rhyme.")],
      [fp("Answer."),
       fp("E.A.: 1. one … ten."),
       fp("2. Eight."),
       fp("3. four ; six ; nine."),
       fp("4. The rhyme is said with the actions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Soa counts her class: “… nine, ten…”. But there are more pupils! What numbers come after ten?")],
      [fp("Listen. Answer."), fp("E.A.: Eleven, twelve… (or in Malagasy; the teacher gives the English words).")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Numbers 11 to 20 ». By the end of this lesson, you will be able to say the numbers 11 to 20 correctly.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the number line on the board: 11, 12, 13, 14, 15, 16, 17, 18, 19, 20. Listen: eleven, twelve, thirteen…")],
      [fp("Look. Listen.")], "Whole-class work", "Number line 11–20"),
    stepRow(["4. Analysis"],
      [fp("I point to a number. Say it after me."),
       fp("Which numbers end with the sound “-teen”?"),
       fp("What is the last number of the line?"),
       fp("A pupil points to a number: the class says it.")],
      [fp("Repeat. Answer."),
       fp("E.A.: thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen."),
       fp("E.A.: Twenty."),
       fp("E.A.: pupils say the numbers pointed to.")],
      "Repetition drill / Whole-class work", "Number line 11–20"),
    stepRow(["5. Synthesis"],
      [fp("So, the numbers 11 to 20 are: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty. Now we can count from 1 to 20.")],
      [fp("Listen. Count together from 1 to 20.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Go to the yard. Make a circle."),
       fp("Ball game: I hold the ball and say “one”. I throw it to a pupil: he/she says “two” and throws it to a friend."),
       fp("Continue up to “twenty”."),
       fp("Start again from another number (e.g. “eleven”).")],
      [fp("Play. Count."),
       pAns("E.A.: each pupil says the next number correctly, up to twenty.", ["next number", "twenty"], { size: SZ.FICHE })],
      "Game (ball throw)", "Ball"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 11 to 20."),
       fp("2. Count from 1 to 20."),
       fp("3. Say the missing number: 11, 12, …, 14 — 15, …, 17 — 18, 19, …")],
      [fp("Answer."),
       pAns("E.A.: thirteen ; sixteen ; twenty — each number is said correctly.",
        ["thirteen", "sixteen", "twenty"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}

function ficheS15() {
  const meta = META("How many … are there?",
    "By the end of the lesson, learners will be able to show quantities and ask and answer the question “How many … are there?”.",
    "3 / 3", "pens, pencils, copybooks, slates (objects to count, 1 to 20)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 20."),
       fp("2. What number comes after twelve?"),
       fp("3. I show objects (5 pens): count them."),
       fp("4. How old are you?")],
      [fp("Answer."),
       fp("E.A.: 1. one … twenty."),
       fp("2. Thirteen."),
       fp("3. one, two, three, four, five."),
       fp("4. I’m …… (age).")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at my table: there are pens on it. Do you know how many?")],
      [fp("Listen. Count. Answer."), fp("E.A.: pupils count and give the number.")],
      "Whole-class work", "Pens"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « How many … are there? ». By the end of this lesson, you will be able to show quantities and ask and answer the question “How many … are there?”.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look. I show 3 pens and I ask: “How many pens are there?”. I answer: “There are 3 pens.” I point to tables: “How many tables are there?” — “There are 4 tables.”")],
      [fp("Look. Listen.")], "Modelling", "Pens, tables"),
    stepRow(["4. Analysis"],
      [fp("What is my question?"),
       fp("What is the answer?"),
       fp("I say: “SHOW ME FIVE”. What do you do?"),
       fp("Now ask me the question with “pencils”.")],
      [fp("Answer. Show."),
       fp("E.A.: How many pens are there?"),
       fp("E.A.: There are 3 pens."),
       fp("E.A.: pupils show five objects (pens, slates…)."),
       fp("E.A.: How many pencils are there?")],
      "Brainstorming / Modelling", "Objects"),
    stepRow(["5. Synthesis"],
      [fp("So, to ask about a quantity, we say: “How many … are there?”. The answer is: “There are …” with the number: There are 3 pens. There are 4 tables.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game “Show me!”: I say “Show me five!” — show five objects. “Show me two!” — show two objects."),
       fp("Work in pairs: one shows objects and asks “How many … are there?”; the friend answers “There are …”. Change the number of objects. Change roles.")],
      [fp("Play. Ask and answer in pairs."),
       pAns("E.A.: “How many pens are there?” — “There are 6 pens.” (the number matches the objects).",
        ["How many", "There are"], { size: SZ.FICHE })],
      "Game / In pairs", "Objects 1 to 20"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show 7 pencils: How many pencils are there?"),
       fp("2. Show me ten!"),
       fp("3. Ask your friend a question with “How many”."),
       fp("4. How old are you?")],
      [fp("Answer."),
       pAns("E.A.: 1. There are 7 pencils.  2. The pupil shows ten objects.  3. How many … are there?  4. I’m ……",
        ["There are 7 pencils.", "How many", "I’m"], { size: SZ.FICHE })],
      "Individual work / In pairs", "Objects"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("NUMBERS"),
    sub("1. Numbers 1 to 10"),
    numberGrid(NUM.slice(0, 10)),
    p("", { after: 100 }),
    sub("2. The “One, two” rhyme"),
    p([run("One, two, what do you do?", { italic: true })], { center: true, after: 40 }),
    p([run("Three, four, count some more!", { italic: true })], { center: true, after: 40 }),
    p([run("Five, six, clap your hands!", { italic: true })], { center: true, after: 40 }),
    p([run("Seven, eight, stand up straight!", { italic: true })], { center: true, after: 40 }),
    p([run("Nine, ten, once again!", { italic: true })], { center: true, after: 120 }),
    sub("3. Numbers 11 to 20"),
    numberGrid(NUM.slice(10)),
    p("", { after: 100 }),
    sub("4. How many … are there?"),
    pr([run("To ask about a quantity: "), ...kw("How many pens are there?", "haou mèni pènz âr zèr")]),
    pr([run("The answer: "), ...kw("There are 3 pens.", "zèr âr tsri pènz")]),
    pr([run("Show a quantity: "), ...kw("Show me five!", "chôou mi faïv")], { after: 140 }),
    audioBox([
      { qr: "qr_u3_numbers.png", label: "Numbers 1 to 20 — listen and repeat", url: AUDIO.numbers },
      { qr: "qr_u3_rhyme.png", label: "The “One, two” rhyme — listen and repeat", url: AUDIO.rhyme },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Say the missing number:")]),
    p("1. one, two, ……, four"),
    p("2. five, ……, seven"),
    p("3. ……, nine, ten"),
    p("4. eleven, ……, thirteen"),
    p("5. eighteen, nineteen, ……", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Match the digit to the word:")]),
    p("3     7     12     15     20"),
    p("twenty     three     fifteen     seven     twelve", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Count and answer:")]),
    p("1. ✏✏✏✏ — How many pencils are there?"),
    p("2. 🖊🖊 — How many pens are there?"),
    p("3. 📕📕📕📕📕📕 — How many books are there?"),
    p("4. Show me nine!"),
    p("5. Show me sixteen!", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Say the rhyme and do the actions.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: three ; six ; eight ; twelve ; twenty", ["three", "six", "eight", "twelve", "twenty"]),
    pAns("Exercise 2: 3–three ; 7–seven ; 12–twelve ; 15–fifteen ; 20–twenty",
      ["3–three", "7–seven", "12–twelve", "15–fifteen", "20–twenty"]),
    pAns("Exercise 3: 1. There are 4 pencils.  2. There are 2 pens.  3. There are 6 books.  4–5. The pupil shows 9, then 16 objects.",
      ["There are 4 pencils.", "There are 2 pens.", "There are 6 books."]),
    pAns("Exercise 4: the rhyme is said in the right order, with the actions.", ["right order"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s16", "SESSION 16 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: NUMBERS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember: we can count from 1 to 20 in English.", { after: 100 }),
    numberGrid(NUM.slice(0, 10)),
    numberGrid(NUM.slice(10)),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Count from 1 to 10."),
    pAns("E.A.: one, two, three, four, five, six, seven, eight, nine, ten.",
      ["one, two, three, four, five, six, seven, eight, nine, ten."]),
    p("2. Count from 11 to 20."),
    pAns("E.A.: eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty.",
      ["eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty."]),
    p("3. Say the “One, two” rhyme with the actions."),
    pAns("E.A.: the rhyme is said in the right order.", ["right order"]),
    p("4. I show 5 slates: How many slates are there?"),
    pAns("E.A.: There are 5 slates.", ["There are 5 slates."]),
    p("5. Show me twelve!"),
    pAns("E.A.: the pupil shows twelve objects.", ["twelve"]),
    p("6. How old are you?"),
    pAns("E.A.: I’m …… (real age).", ["I’m"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 3: NUMBERS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("Say the missing numbers:")]),
    p("one, ……, three, four, ……, six, seven, ……, nine, ten,"),
    p("eleven, ……, thirteen, fourteen, ……, sixteen, seventeen, eighteen, ……, twenty", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Match the digit to the word:")]),
    p("2     8     11     14"),
    p("fourteen     two     eleven     eight", { after: 120 }),
    pr([run("Exercise 3 (6 points). ", { bold: true }), run("Count and answer with “There are …”:")]),
    p("1. ✏✏✏ — How many pencils are there?"),
    p("2. 📕📕📕📕📕 — How many books are there?"),
    p("3. 🖊🖊🖊🖊🖊🖊🖊 — How many pens are there?", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Say with your teacher: count from 1 to 20 and say the “One, two” rhyme.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: two ; five ; eight ; twelve ; fifteen ; nineteen (1 point each)",
      ["two", "five", "eight", "twelve", "fifteen", "nineteen"]),
    pAns("Exercise 2: 2–two ; 8–eight ; 11–eleven ; 14–fourteen (1 point each)",
      ["2–two", "8–eight", "11–eleven", "14–fourteen"]),
    pAns("Exercise 3: 1. There are 3 pencils.  2. There are 5 books.  3. There are 7 pens. (2 points each)",
      ["There are 3 pencils.", "There are 5 books.", "There are 7 pens."]),
    pAns("Exercise 4: counting 1–20 without mistake (2 points); the rhyme in the right order (2 points)",
      ["without mistake", "right order"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS13(), pageBreak(),
    ...ficheS14(), pageBreak(),
    ...ficheS15(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can count from 1 to 10.",
      "I can count from 11 to 20.",
      "I can say the “One, two” rhyme.",
      "I can ask: How many … are there?",
      "I can answer: There are …",
      "I can show a quantity: Show me five!",
    ], "Well done! See you in Unit 4: CLASSROOM LANGUAGE!"),
  ];
};
module.exports.COLOR = COLOR;
