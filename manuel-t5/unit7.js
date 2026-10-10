// T5 — UNIT 7 — MEALS (2 séances + révision + test) — Sessions 30 à 33 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "2E74B5"; // bleu
const TOTAL = 49;
const AUDIO = {
  meals: "https://drive.google.com/uc?export=download&id=1lY36Mkf5YKZyiAHOqcqdW9EIbykkZ8ZE",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 7 — MEALS", title, slo,
  values: "mutual respect, working together", session, materials,
});
const WORDS = [
  ["cassava", "kassâva"], ["sweet potato", "souite potéitô"], ["meat", "mite"], ["chicken", "tchikène"],
  ["fish", "fich"], ["green beans", "grine binz"], ["onion", "onieune"], ["tomato", "tomâtô"],
  ["apple", "apol"], ["peach", "pitch"], ["pineapple", "païnapol"], ["rice", "raïss"],
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
// Board game 12 cases (d'après le FRP/PE)
function boardGame() {
  const sq = (no, label, special) => cell([
    p([run(no, { bold: true, color: COLOR, size: 24 })], { center: true, after: 6 }),
    p([run(label, { bold: !!special, italic: !special, color: special ? C.RED : "000000", size: special ? 20 : 24 })],
      { center: true, after: 16 }),
  ], { w: 2600, vAlign: VerticalAlign.CENTER, shade: special ? "FDECEC" : "EAF1F8" });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [sq("1", "START!", true), sq("2", "cassava"), sq("3", "chicken"), sq("4", "tomato")] }),
      new TableRow({ children: [sq("5", "LOSE A TURN", true), sq("6", "fish"), sq("7", "meat"), sq("8", "apple")] }),
      new TableRow({ children: [sq("9", "GO BACK TO START", true), sq("10", "sweet potato"), sq("11", "pineapple"), sq("12", "FINISH!", true)] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 7 — MEALS", COLOR, "unit7"),
    p("", { after: 100 }),
    p([run("What did you have for breakfast?", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u7_food.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say and read the names of everyday food;"),
    p("• play the food board game;"),
    p("• say what I ate: I had … for breakfast / lunch / dinner.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, working together.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "E3EDF7" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned: rice, bread, milk, water, tea, banana, orange, egg…"),
          p("And the three meals: breakfast (morning), lunch (midday), dinner (evening).", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u7_meals.png", label: "Meals — listen and repeat", url: AUDIO.meals }], COLOR),
  ];
}

function ficheS30() {
  const meta = META("Everyday food",
    "By the end of the lesson, learners will be able to say, recognise, read and write the names of everyday food.",
    "1 / 2", "real food or food pictures, blackboard, copy-books, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T4.) Answer these questions:"),
       fp("1. Name three foods you know in English."),
       fp("2. What are the three meals of the day?"),
       fp("3. Before we eat, what do we wish? (Unit 1)")],
      [fp("Answer."),
       fp("E.A.: 1. rice, bread, milk, banana…"),
       fp("2. breakfast, lunch, dinner."),
       fp("3. Enjoy your meal!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher shows a real cassava or a picture.) Mmm! Do you like this? Today we learn the food words in English!")],
      [fp("Look. Answer in their own words.")],
      "“Visual aids”", "Real food or pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Everyday food ». By the end of this lesson, you will say and read the names of the food you eat every day.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the food (or the pictures) and listen: cassava, sweet potato, meat, chicken, fish… the vegetables: green beans, onion, tomato… the fruits: apple, peach, pineapple.")],
      [fp("Look. Listen.")], "“Visual aids” / Audio", "Food or pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word: the class, one row, one pupil."),
       fp("I say a word: point to the right food or picture."),
       fp("Read the words written on the blackboard."),
       fp("Write the words in your copy-book. Then listen: I say a word — circle the word you hear.")],
      [fp("Repeat. Point. Read. Write. Circle."),
       fp("E.A.: the right foods are pointed to; the words are read and circled correctly.")],
      "Repetition drill / Dictation", "Blackboard, copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So, our everyday food: cassava, sweet potato, meat, chicken, fish; the vegetables: green beans, onion, tomato; the fruits: apple, peach, pineapple.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game in pairs: pupil A mimes eating a food (a big pineapple? a small green bean?); pupil B guesses the food in English. Change roles.")],
      [fp("Mime. Guess."),
       pAns("E.A.: pineapple! / fish! / sweet potato!…",
        ["pineapple!"], { size: SZ.FICHE })],
      "Game (miming) / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show five foods or pictures: say the words."),
       fp("2. Read four food words on the blackboard."),
       fp("3. I say a word: circle it in your copy-book.")],
      [fp("Say. Read. Circle."),
       pAns("E.A.: the foods are named clearly; the words are read and circled without mistakes.",
        ["named clearly"], { size: SZ.FICHE })],
      "Individual work", "Pictures, copy-books"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}

function ficheS31() {
  const meta = META("What did you have for breakfast?",
    "By the end of the lesson, learners will be able to ask and answer “What did you have for breakfast / lunch / dinner?” with “I had … for …”.",
    "2 / 2", "the food board game, a die, small stones or beans, two puppets");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the three vegetables and the three fruits of the lesson."),
       fp("2. Read: cassava, chicken, pineapple."),
       fp("3. What are the three meals of the day?")],
      [fp("Answer. Read."),
       fp("E.A.: green beans, onion, tomato — apple, peach, pineapple; breakfast, lunch, dinner.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Board game (from the syllabus), in groups: put your bean on START. Throw the die and move. If you stop on a food square, say the food name in English! Right answer: stay. Wrong answer: go back two squares. Careful with the special squares!")],
      [fp("Play. Say the food names.")],
      "“Board game” / Group work", "Board game, a die, beans"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to say what we ATE. By the end of this lesson, you will ask and answer: What did you have for breakfast? — I had … for breakfast.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("First, tell me in your own words what you ate this morning."),
       fp("Now watch the two puppets! (The teacher plays:) — What did you have for breakfast? — I had cassava for breakfast. — What did you have for breakfast? — I had rice for breakfast.")],
      [fp("Answer. Look. Listen.")],
      "Role play (puppets)", "Two puppets"),
    stepRow(["4. Analysis"],
      [fp("Repeat the question and the answer: the class, one row, one pupil."),
       fp("Now YOU: what did you have for breakfast this morning?"),
       fp("And for lunch yesterday? And for dinner?")],
      [fp("Repeat. Answer."),
       fp("E.A.: I had (rice / cassava / tea…) for breakfast / lunch / dinner.")],
      "Repetition drill", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: What did you have for breakfast / lunch / dinner? — I had … for breakfast / lunch / dinner. “Had” tells us it is FINISHED — we already ate it!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speed chat (from the syllabus): two lines face to face. Line A asks: “What did you have for breakfast?”; line B answers: “I had … for breakfast.” Slide one step to the left, change the question: lunch! dinner! Then the lines change roles.")],
      [fp("Ask. Answer. Slide. Change roles."),
       pAns("E.A.: — What did you have for lunch? — I had rice and chicken for lunch.",
        ["What did you have for", "I had"], { size: SZ.FICHE })],
      "“Speed chat”", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What did you have for breakfast?"),
       fp("2. What did you have for dinner?"),
       fp("3. Ask me the question with “lunch”.")],
      [fp("Answer. Ask."),
       pAns("E.A.: I had … for breakfast / dinner. — What did you have for lunch?",
        ["I had", "What did you have for lunch?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 7", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MEALS"),
    sub("1. Everyday food"),
    img("u7_food.png", 440, 768 / 1408),
    wordGrid(),
    p("", { after: 100 }),
    sub("2. The food board game"),
    pr([run("Throw the die, move your bean, and "), run("say the food name", { bold: true, color: C.BLUE }),
        run(" of your square! Wrong answer? Go back two squares!")], { after: 80 }),
    boardGame(),
    p("", { after: 100 }),
    sub("3. What did you have…?"),
    pr([run("The question: "), ...kw("What did you have for breakfast?", "ouate dide iou hav for brèkfeuste")]),
    pr([run("The answer: "), ...kw("I had cassava for breakfast.", "aï hade kassâva for brèkfeuste")]),
    pr([run("Also: "), ...kw("for lunch", "for leunntch"), run("  (midday) — "), ...kw("for dinner", "for dineur"), run("  (evening)")], { after: 80 }),
    pr([run("Careful! ", { bold: true, color: C.RED }), run("Today I "), run("have", { bold: true, color: C.BLUE }),
        run(" rice. Yesterday I "), run("had", { bold: true, color: C.BLUE }), run(" rice — it is finished!")], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u7_meals.png", label: "Meals — listen and repeat", url: AUDIO.meals },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher shows six foods or pictures: say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Read: sweet potato — green beans — chicken — pineapple.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Sort the words: which are vegetables? which are fruits? (onion, apple, tomato, peach)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Answer with a full sentence:")]),
    p("1. What did you have for breakfast?"),
    p("2. What did you have for lunch?"),
    p("3. What did you have for dinner?", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six foods are named clearly (1 point each).", ["six foods"]),
    pAns("Exercise 2: the four words are read correctly (1 point each).", ["four words"]),
    pAns("Exercise 3: vegetables: onion, tomato — fruits: apple, peach (1 point each).", ["onion, tomato", "apple, peach"]),
    pAns("Exercise 4: I had … for breakfast / lunch / dinner (2 points each).", ["I had"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s32", "SESSION 32 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 7: MEALS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the food words:", { after: 100 }),
    wordGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The teacher shows six foods or pictures: say the words."),
    pAns("E.A.: cassava, meat, fish, tomato, apple, pineapple…", ["cassava, meat"]),
    p("2. Read six food words on the blackboard."),
    pAns("E.A.: the words are read fluently.", ["read fluently"]),
    p("3. Name the three vegetables and the three fruits."),
    pAns("E.A.: green beans, onion, tomato — apple, peach, pineapple.", ["green beans, onion, tomato"]),
    p("4. What did you have for breakfast? for lunch? for dinner?"),
    pAns("E.A.: I had … for breakfast / lunch / dinner.", ["I had"]),
    p("5. Play one round of the food board game with your group."),
    pAns("E.A.: the game is played; the food names are said.", ["game is played"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s33", "SESSION 33 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 7: MEALS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher shows six foods or pictures: say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Read four food words on the blackboard.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The teacher says four words: circle them in the copy-book.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Answer: What did you have for breakfast / lunch / dinner? (three full answers)")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the foods are named clearly (1 point each).", ["named clearly"]),
    pAns("Exercise 2: the words are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 3: the right words are circled (1 point each).", ["circled"]),
    pAns("Exercise 4: I had … for breakfast / lunch / dinner (2 points each).", ["I had"]),
  ];
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS30(), pageBreak(),
    ...ficheS31(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 7", COLOR, [
      "I can say the names of everyday food.",
      "I can read the food words.",
      "I can sort vegetables and fruits.",
      "I can say: I had … for breakfast / lunch / dinner.",
      "I can ask: What did you have for …?",
    ], "Well done! See you in Unit 8: IN MY HOUSE!"),
  ];
};
module.exports.COLOR = COLOR;
