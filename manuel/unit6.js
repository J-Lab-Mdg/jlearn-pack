// UNIT 6 — DAYS OF THE WEEK (2 séances + révision + test) — Sessions 26 à 29 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "BF8F00"; // jaune doré
const TOTAL = 57;
const AUDIO = {
  days: "https://drive.google.com/uc?export=download&id=1SRePpIFR0s7XbU6Q3GZaAnMRrQbCf1nv",
  song: "https://drive.google.com/uc?export=download&id=1rZSe5VDKzNmqlyoeImKdI1H1pWMBQyNK",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — DAYS OF THE WEEK", title, slo,
  values: "solidarity, perseverance", session, materials,
});
const DAYS = [
  ["1", "Monday", "meundé"], ["2", "Tuesday", "tiouzdé"], ["3", "Wednesday", "ouènzdé"],
  ["4", "Thursday", "seurzdé"], ["5", "Friday", "fraïdé"], ["6", "Saturday", "sateudé"],
  ["7", "Sunday", "seundé"],
];
function daysGrid() {
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
    new TableRow({ children: DAYS.map(([n]) =>
      cell([p([run(n, { bold: true, color: COLOR, size: 36 })], { center: true, after: 10 })],
        { w: Math.floor(10400 / 7), vAlign: VerticalAlign.CENTER, shade: "FBF2DA" })) }),
    new TableRow({ children: DAYS.map(([, d, pn]) =>
      cell([p([run(d, { bold: true, color: C.BLUE, size: 24 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 18 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / 7), vAlign: VerticalAlign.CENTER })) }),
  ]});
}

function opening() {
  return [
    unitBanner("UNIT 6 — DAYS OF THE WEEK", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("Monday, Tuesday… Sunday!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_days.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the seven days of the week;"),
    p("• sing the “Days of the week” song;"),
    p("• say my favourite day.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, perseverance.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "FBF2DA" })] }),
        new TableRow({ children: [cell([
          p("1. Touch your head! Touch your nose!"),
          p("2. Sing “Head, shoulders, knees and toes”.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u6_days.png", label: "The days of the week — listen and repeat", url: AUDIO.days }], COLOR),
  ];
}

function ficheS26() {
  const meta = META("The seven days of the week — the song",
    "By the end of the lesson, learners will be able to say the seven days of the week correctly and sing the “Days of the week” song.",
    "1 / 2", "song “The days of the week” (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the eight parts of the body."),
       fp("2. I touch a part: say it."),
       fp("3. Count from 1 to 7.")],
      [fp("Answer."),
       fp("E.A.: 1. head, shoulder, knee, toe, eye, ear, nose, mouth."),
       fp("2. The part is named."),
       fp("3. one, two, three, four, five, six, seven.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today we are at school. Tomorrow, no school! How many days are in one week?")],
      [fp("Listen. Answer."), fp("E.A.: Seven days.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The seven days of the week ». By the end of this lesson, you will be able to say the seven days and sing the “Days of the week” song.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the names of the days: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.")],
      [fp("Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Listen again and repeat all together, day by day."),
       fp("Repeat row by row (bench by bench)."),
       fp("How many days did we say?"),
       fp("What is the last day of the week?")],
      [fp("Repeat. Answer."),
       fp("E.A.: pupils repeat until the pronunciation is correct."),
       fp("E.A.: Seven."),
       fp("E.A.: Sunday.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, the seven days of the week are: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. We can sing them with the “Days of the week” song.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listen to the song. Then repeat it part by part:"),
       fp("Part 1: Monday, Tuesday, Wednesday, Thursday,"),
       fp("Part 2: Friday, Saturday,"),
       fp("Part 3: Sunday the last day, Sunday the last day."),
       fp("Sing the parts alone, then sing the whole song from the beginning to the end."),
       fp("Group game: seven groups, one day each. When your day is called, say it loudly and turn around once!")],
      [fp("Listen. Sing. Play."),
       pAns("E.A.: the song is sung in the right order; each group reacts to its own day.",
        ["right order", "own day"], { size: SZ.FICHE })],
      "Song / Game (groups)", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the seven days of the week."),
       fp("2. What day comes after Monday?"),
       fp("3. Sing the song.")],
      [fp("Answer. Sing."),
       pAns("E.A.: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. — After Monday: Tuesday.",
        ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.", "Tuesday."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}

function ficheS27() {
  const meta = META("The order of the days — my favourite day",
    "By the end of the lesson, learners will be able to say the days in the right order and say their favourite day.",
    "2 / 2", "seven cards: number (1–7) on one side, day name on the other side");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the seven days of the week."),
       fp("2. How many days are in one week?"),
       fp("3. Sing the “Days of the week” song.")],
      [fp("Answer. Sing."),
       fp("E.A.: 1. Monday … Sunday."),
       fp("2. Seven."),
       fp("3. The song is sung in the right order.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I mix the days: “Friday, Monday, Sunday…”. Is it the right order?")],
      [fp("Listen. Answer."), fp("E.A.: No! Monday is the first day.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The order of the days — my favourite day ». By the end of this lesson, you will be able to say the days in the right order and say your favourite day.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the seven cards. On one side: a number (1 to 7). On the other side: a day. Card 1 → Monday. Card 7 → Sunday.")],
      [fp("Look.")], "Whole-class work", "Seven cards"),
    stepRow(["4. Analysis"],
      [fp("Card 1: what day is it?"),
       fp("Card 7: what day is it?"),
       fp("What number is Wednesday?"),
       fp("Listen: “My favourite day is Saturday.” — I love Saturday! And you? What is your favourite day?")],
      [fp("Answer."),
       fp("E.A.: Monday."),
       fp("E.A.: Sunday."),
       fp("E.A.: Three (3)."),
       fp("E.A.: My favourite day is …")],
      "Brainstorming / Modelling", "Seven cards"),
    stepRow(["5. Synthesis"],
      [fp("So, the days have an order: 1 Monday, 2 Tuesday, 3 Wednesday, 4 Thursday, 5 Friday, 6 Saturday, 7 Sunday. To ask about the favourite day: “What is your favourite day?”. The answer: “My favourite day is …”. We respect the choice of a friend: we say “Great!” or “Good!”.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Card game in pairs: one shows the NUMBER side (the cards are mixed!); the friend says the day. Change roles."),
       fp("Then say the seven days in the right order."),
       fp("Survey: ask ten friends “What is your favourite day?”. Answer “Great!” or “Good!”."),
       fp("Count the answers for each day on the board (Monday: 10, Tuesday: 12…). What is the favourite day of the class?")],
      [fp("Play. Ask. Count."),
       pAns("E.A.: the day matches the number; “My favourite day is …”; “The class’s favourite day is …”.",
        ["My favourite day is", "The class’s favourite day is"], { size: SZ.FICHE })],
      "Game (cards) / Survey", "Seven cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the days in the right order."),
       fp("2. I show card 5: what day is it?"),
       fp("3. What is your favourite day?"),
       fp("4. Ask your friend his/her favourite day.")],
      [fp("Answer."),
       pAns("E.A.: 1. Monday … Sunday.  2. Friday.  3. My favourite day is …  4. What is your favourite day? — Great!",
        ["Friday.", "My favourite day is", "What is your favourite day?", "Great!"], { size: SZ.FICHE })],
      "Individual work / In pairs", "Seven cards"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("DAYS OF THE WEEK"),
    sub("1. The seven days"),
    daysGrid(),
    p("", { after: 100 }),
    pr([run("One "), ...kw("week", "ouik"), run(" has "), ...kw("seven days", "sèvène déiz"),
        run(". The first day is "), ...kw("Monday", "meundé"),
        run(". The last day is "), ...kw("Sunday", "seundé"), run(".")], { after: 120 }),
    sub("2. The song: The days of the week"),
    p([run("Monday, Tuesday,", { italic: true })], { center: true, after: 40 }),
    p([run("Wednesday, Thursday,", { italic: true })], { center: true, after: 40 }),
    p([run("Friday, Saturday,", { italic: true })], { center: true, after: 40 }),
    p([run("Sunday the last day, Sunday the last day.", { italic: true })], { center: true, after: 40 }),
    p([run("Monday, Tuesday,", { italic: true })], { center: true, after: 40 }),
    p([run("Wednesday, Thursday,", { italic: true })], { center: true, after: 40 }),
    p([run("Friday, Saturday.", { italic: true })], { center: true, after: 80 }),
    p([run("(We sing it on a tune we know well.)", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 120 }),
    sub("3. My favourite day"),
    pr([run("The question: "), ...kw("What is your favourite day?", "ouot iz iôr féivrite déi")]),
    pr([run("The answer: "), ...kw("My favourite day is Saturday.", "maï féivrite déi iz sateudé")]),
    pr([run("A friend answers: we say "), ...kw("Great!", "gréite"), run(" or "), ...kw("Good!", "goud"),
        run(" — we respect the choice of our friends.")], { after: 140 }),
    audioBox([
      { qr: "qr_u6_days.png", label: "The days of the week — listen and repeat", url: AUDIO.days },
      { qr: "qr_u6_song.png", label: "The “Days of the week” song — the words", url: AUDIO.song },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (7 points). ", { bold: true }), run("Say the days in the right order, from Monday to Sunday.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Say the missing day:")]),
    p("1. Monday, ……, Wednesday"),
    p("2. Thursday, ……, Saturday"),
    p("3. ……, Sunday"),
    p("4. Wednesday, ……, Friday", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Match the number to the day:")]),
    p("1     3     5     6     7"),
    p("Saturday     Monday     Sunday     Wednesday     Friday", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer:")]),
    p("1. What is your favourite day?"),
    p("2. Ask your friend his/her favourite day. Answer “Great!” or “Good!”.", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (1 point per day).",
      ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]),
    pAns("Exercise 2: 1. Tuesday  2. Friday  3. Saturday  4. Thursday",
      ["Tuesday", "Friday", "Saturday", "Thursday"]),
    pAns("Exercise 3: 1–Monday ; 3–Wednesday ; 5–Friday ; 6–Saturday ; 7–Sunday",
      ["1–Monday", "3–Wednesday", "5–Friday", "6–Saturday", "7–Sunday"]),
    pAns("Exercise 4: 1. My favourite day is …  2. What is your favourite day? — Great! / Good!",
      ["My favourite day is", "What is your favourite day?", "Great! / Good!"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s28", "SESSION 28 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: DAYS OF THE WEEK", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember: one week has seven days.", { after: 100 }),
    daysGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the seven days in the right order."),
    pAns("E.A.: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.",
      ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday."]),
    p("2. What is the first day? What is the last day?"),
    pAns("E.A.: Monday. — Sunday.", ["Monday.", "Sunday."]),
    p("3. What day comes after Wednesday?"),
    pAns("E.A.: Thursday.", ["Thursday."]),
    p("4. I show card 2, card 6: say the days."),
    pAns("E.A.: Tuesday. — Saturday.", ["Tuesday.", "Saturday."]),
    p("5. What is your favourite day?"),
    pAns("E.A.: My favourite day is …", ["My favourite day is"]),
    p("6. Sing the “Days of the week” song."),
    pAns("E.A.: the song is sung in the right order.", ["right order"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s29", "SESSION 29 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 6: DAYS OF THE WEEK", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (7 points). ", { bold: true }), run("Say the seven days in the right order.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Say the missing day:")]),
    p("1. ……, Tuesday, Wednesday"),
    p("2. Friday, ……, Sunday"),
    p("3. Tuesday, ……, Thursday"),
    p("4. Saturday, ……", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("The teacher shows a number card (1–7); say the day:")]),
    p("Card 1 — Card 4 — Card 5 — Card 6 — Card 7", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer: What is your favourite day? Then ask your teacher the question.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday (1 point per day).",
      ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]),
    pAns("Exercise 2: 1. Monday  2. Saturday  3. Wednesday  4. Sunday (1 point each)",
      ["Monday", "Saturday", "Wednesday", "Sunday"]),
    pAns("Exercise 3: Monday ; Thursday ; Friday ; Saturday ; Sunday (1 point each)",
      ["Monday", "Thursday", "Friday", "Saturday", "Sunday"]),
    pAns("Exercise 4: My favourite day is … (2 points) ; What is your favourite day? (2 points)",
      ["My favourite day is", "What is your favourite day?"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS26(), pageBreak(),
    ...ficheS27(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 6", COLOR, [
      "I can say the seven days of the week.",
      "I can say the days in the right order.",
      "I can say the day of a number card (1–7).",
      "I can sing the “Days of the week” song.",
      "I can say: My favourite day is …",
      "I can answer a friend: Great! Good!",
    ], "Well done! See you in Unit 7: SCHOOL ENVIRONMENT!"),
  ];
};
module.exports.COLOR = COLOR;
