// UNIT 9 — HOUSE (4 séances + révision + test) — Sessions 44 à 49 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "8B5E3C"; // marron
const TOTAL = 57;
const AUDIO = {
  house: "https://drive.google.com/uc?export=download&id=1L4rWJK7pOanJxBPUNfWRiXqNNneFhn8S",
  describe: "https://drive.google.com/uc?export=download&id=1Zm0X3I7ubdn6MusaDdByHuUcGaD2o6Ye",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 9 — HOUSE", title, slo,
  values: "respect, cooperation", session, materials,
});
const PARTS = [
  ["a window", "e ouindôou"], ["a door", "e dôr"], ["a wall", "e ouôl"],
  ["a roof", "e rouf"], ["a room", "e roum"], ["a ceiling", "e siling"],
  ["a light", "e laïte"], ["a balcony", "e balkoni"], ["stairs", "stèrz"],
];
function partsGrid() {
  const perRow = 3, rows = [];
  for (let i = 0; i < PARTS.length; i += perRow) {
    const chunk = PARTS.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 9 — HOUSE", COLOR, "unit9"),
    p("", { after: 100 }),
    p([run("Welcome to my house!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u9_house.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the parts of the house in English;"),
    p("• point to the parts around me;"),
    p("• describe my dream house.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect, cooperation.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 8)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F1E8E0" })] }),
        new TableRow({ children: [cell([
          p("1. Say the three meals of the day."),
          p("2. Say three things we drink.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u9_house.png", label: "The house — listen and repeat", url: AUDIO.house }], COLOR),
  ];
}

function ficheS44() {
  const meta = META("Parts of the house (1)",
    "By the end of the lesson, learners will be able to say the words: window, door, wall, roof, room.",
    "1 / 4", "picture of a house, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the three meals of the day."),
       fp("2. Say three things we eat."),
       fp("3. Eat or drink: milk?")],
      [fp("Answer."),
       fp("E.A.: 1. breakfast, lunch, dinner."),
       fp("2. rice, bread, a banana…"),
       fp("3. Drink.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Where do you sleep at night? At school? No! At …?")],
      [fp("Listen. Answer."), fp("E.A.: At home! / In the house! (Pupils answer in their own words; the teacher gives: house.)")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Parts of the house (1) ». By the end of this lesson, you will be able to say: window, door, wall, roof, room.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at this picture of a house. Listen and look at what I point to: a window… a door… a wall… a roof… a room.")],
      [fp("Look. Listen.")], "Picture study", "Picture of a house"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word after me."),
       fp("I say a word: point to it on the picture."),
       fp("I point to a part: say the word."),
       fp("We enter the house by the …?")],
      [fp("Repeat. Point. Say."),
       fp("E.A.: the right part is pointed to."),
       fp("E.A.: the word matches the part."),
       fp("E.A.: Door.")],
      "Repetition drill / “Visual aids”", "Picture of a house"),
    stepRow(["5. Synthesis"],
      [fp("So, the first parts of the house are: a window, a door, a wall, a roof, a room.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Look at OUR classroom: point to the door! point to a window! point to a wall!"),
       fp("Work in pairs: one says a part, the friend points to it on the picture or in the class. Change roles.")],
      [fp("Point. Say."),
       pAns("E.A.: the parts are pointed to correctly and named: a window, a door, a wall, a roof, a room.",
        ["a window, a door, a wall, a roof, a room"], { size: SZ.FICHE })],
      "In pairs / “Realia”", "The classroom, picture"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to five parts on the picture: say the words."),
       fp("2. Point to the door of the class!"),
       fp("3. Say the five words of today.")],
      [fp("Say. Point."),
       pAns("E.A.: the five words are said correctly.", ["five words"], { size: SZ.FICHE })],
      "Individual work", "Picture of a house"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44");
}

function ficheS45() {
  const meta = META("Parts of the house (2)",
    "By the end of the lesson, learners will be able to say the words: ceiling, light, balcony, stairs, and point to the parts around them.",
    "2 / 4", "picture of a house, the classroom and the school (“realia”)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. I point on the picture: say the words."),
       fp("2. Point to a wall of the class!"),
       fp("3. We enter the house by the …?")],
      [fp("Answer. Point."),
       fp("E.A.: 1. a window, a door, a wall, a roof, a room."),
       fp("2. A wall is pointed to."),
       fp("3. Door.")],
      "Individual work", "Picture of a house"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look UP! What is over our heads, inside the class?")],
      [fp("Look. Answer."), fp("E.A.: pupils point up; the teacher gives: the ceiling.")],
      "Whole-class work", "The classroom"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Parts of the house (2) ». By the end of this lesson, you will be able to say: ceiling, light, balcony, stairs.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the picture and at the class. Listen: a ceiling… a light… a balcony… stairs.")],
      [fp("Look. Listen.")], "Picture study / “Realia”", "Picture, the classroom"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word after me."),
       fp("I say a word: point to it (picture, class or school)."),
       fp("What is over the room?"),
       fp("What do we use to go up?")],
      [fp("Repeat. Point. Answer."),
       fp("E.A.: the right part is pointed to."),
       fp("E.A.: The ceiling."),
       fp("E.A.: The stairs.")],
      "Repetition drill / “Realia”", "Picture, the school"),
    stepRow(["5. Synthesis"],
      [fp("So, now we know nine parts of the house: a window, a door, a wall, a roof, a room, a ceiling, a light, a balcony, stairs.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game: I say a part; point to it as fast as you can (picture, class or school yard)."),
       fp("Work in pairs with the nine words: one says, one points. Change roles."),
       fp("Say the missing word: window, door, ……, roof — ceiling, ……, balcony")],
      [fp("Point. Say."),
       pAns("E.A.: wall ; light — the nine parts are known.", ["wall", "light"], { size: SZ.FICHE })],
      "Game / In pairs", "Picture, the school"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to six parts: say the words."),
       fp("2. Point to the ceiling! Point to the light!"),
       fp("3. Say the nine parts of the house.")],
      [fp("Say. Point."),
       pAns("E.A.: the nine words are said correctly.", ["nine words"], { size: SZ.FICHE })],
      "Individual work", "Picture of a house"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}

function ficheS46() {
  const meta = META("Describing a house",
    "By the end of the lesson, learners will be able to understand and say a simple description of a house (colour, number of windows…).",
    "3 / 4", "drawing of the teacher’s house (e.g. green house, three windows, red wall)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the nine parts of the house."),
       fp("2. Point to the ceiling!"),
       fp("3. Say the four colours."),
       fp("4. Count from 1 to 5.")],
      [fp("Answer."),
       fp("E.A.: 1. The nine parts are said."),
       fp("2. The ceiling is pointed to."),
       fp("3. red, blue, black, green."),
       fp("4. one … five.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at my drawing! This is MY house. Do you want to know it?")],
      [fp("Look. Answer."), fp("E.A.: Yes!")],
      "Whole-class work", "Drawing of a house"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Describing a house ». By the end of this lesson, you will be able to say a simple description of a house.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my description: “This is my house. It is green. It has three windows. It has a red wall. It has one door.”")],
      [fp("Look. Listen.")], "Modelling", "Drawing of a house"),
    stepRow(["4. Analysis"],
      [fp("What colour is my house?"),
       fp("How many windows are there?"),
       fp("What colour is the wall?"),
       fp("What words do we use to describe? Listen again: “It is …” (colour), “It has …” (number + part).")],
      [fp("Answer."),
       fp("E.A.: It is green."),
       fp("E.A.: Three windows."),
       fp("E.A.: Red."),
       fp("E.A.: It is… / It has…")],
      "Brainstorming / Modelling", "Drawing of a house"),
    stepRow(["5. Synthesis"],
      [fp("So, to describe a house we say: “This is my house. It is …” with the colour, and “It has …” with the number and the part: It has three windows.")],
      [fp("Listen. Repeat the model.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listen and say true or false (about my drawing):"),
       fp("1. It is green.  2. It has five windows."),
       fp("3. It has a red wall.  4. It has two doors."),
       fp("Then describe my drawing yourself, sentence by sentence.")],
      [fp("Answer. Describe."),
       pAns("E.A.: 1. true  2. false  3. true  4. false — then: This is the house. It is green. It has three windows…",
        ["true", "false", "It is green.", "It has three windows"], { size: SZ.FICHE })],
      "Whole-class work", "Drawing of a house"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Describe the drawing: colour, windows, wall, door."),
       fp("2. I describe a house: point to the right part."),
       fp("3. Say one sentence with “It has …”.")],
      [fp("Describe."),
       pAns("E.A.: It is … ; It has … windows ; It has a … wall — the sentences match the drawing.",
        ["It is", "It has"], { size: SZ.FICHE })],
      "Individual work", "Drawing of a house"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}

function ficheS47() {
  const meta = META("My dream house",
    "By the end of the lesson, learners will be able to draw their dream house and describe it in English.",
    "4 / 4", "drawing copy-books, coloured pencils");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Describe this drawing (colour, windows)."),
       fp("2. Say the two describing words: It … / It … ."),
       fp("3. Say five parts of the house.")],
      [fp("Answer."),
       fp("E.A.: 1. It is … It has …"),
       fp("2. It is… / It has…"),
       fp("3. Five parts are said.")],
      "Individual work", "Drawing of a house"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes. Think of the house of your dreams… big? green? with a balcony? Today you draw it!")],
      [fp("Listen. Imagine.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to draw and describe « My dream house ». By the end of this lesson, you will be able to describe your own house in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at my model again: “This is my house. It is green. It has three windows. It has a red wall.”")],
      [fp("Look. Listen.")], "Modelling", "Drawing of a house"),
    stepRow(["4. Analysis"],
      [fp("What do you say first?"),
       fp("What do you say for the colour?"),
       fp("What do you say for the windows and the door?")],
      [fp("Answer."),
       fp("E.A.: This is my house."),
       fp("E.A.: It is … (green, red…)."),
       fp("E.A.: It has … windows. It has one door.")],
      "Brainstorming", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, to present our dream house: “This is my house. It is … It has … windows. It has a … wall. It has …”")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Draw your dream house in your copy-book."),
       fp("Colour it with the colours YOU like."),
       fp("Then show your drawing to your friend and describe it: “This is my house. It is … It has …”."),
       fp("Some pupils present their house to the class.")],
      [fp("Draw. Colour. Describe."),
       pAns("E.A.: each description matches the drawing: This is my house. It is blue. It has two windows…",
        ["This is my house.", "It is", "It has"], { size: SZ.FICHE })],
      "Drawing / In pairs", "Copy-books, coloured pencils"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Show your drawing and say three sentences."),
       fp("2. Answer: What colour is your house? How many windows are there?")],
      [fp("Describe. Answer."),
       pAns("E.A.: This is my house. It is … It has … — It is … ; There are … windows.",
        ["This is my house.", "It is", "It has"], { size: SZ.FICHE })],
      "Individual work", "The drawings"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 9", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("HOUSE"),
    sub("1. The parts of the house"),
    img("u9_house.png", 340, 768 / 1408),
    partsGrid(),
    p("", { after: 100 }),
    sub("2. Point to …!"),
    pr([run("The command: "), ...kw("Point to the door!", "poïnte tou ze dôr"),
        run(" — we point to the part.")], { after: 120 }),
    sub("3. I describe a house"),
    pr([run("First: "), ...kw("This is my house.", "zis iz maï haous")]),
    pr([run("The colour: "), ...kw("It is green.", "it iz grine")]),
    pr([run("The parts: "), ...kw("It has three windows.", "it haz tsri ouindôouz"),
        run("  "), ...kw("It has a red wall.", "it haz e rèd ouôl")], { after: 140 }),
    audioBox([
      { qr: "qr_u9_house.png", label: "The house — listen and repeat", url: AUDIO.house },
      { qr: "qr_u9_describe.png", label: "I describe a house — listen and repeat", url: AUDIO.describe },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six parts on the house picture; say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Say the right word:")]),
    p("1. We enter by it. → ……"),
    p("2. It is over the house. → ……"),
    p("3. We look outside by it. → ……"),
    p("4. We use them to go up. → ……", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Point in the classroom:")]),
    p("Point to the door! — Point to a window! — Point to the ceiling! — Point to a wall!", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Describe your dream house drawing: three sentences with “This is”, “It is”, “It has”.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six words match the parts (1 point each).", ["six words"]),
    pAns("Exercise 2: 1. a door  2. a roof  3. a window  4. stairs", ["a door", "a roof", "a window", "stairs"]),
    pAns("Exercise 3: the four parts are pointed to (1 point each).", ["four parts"]),
    pAns("Exercise 4: This is my house. It is … It has … (2 points per correct sentence).",
      ["This is my house.", "It is", "It has"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s48", "SESSION 48 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 9: HOUSE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the nine parts of the house:", { after: 100 }),
    partsGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the nine parts of the house."),
    pAns("E.A.: a window, a door, a wall, a roof, a room, a ceiling, a light, a balcony, stairs.",
      ["a window, a door, a wall, a roof, a room, a ceiling, a light, a balcony, stairs."]),
    p("2. Point to the door, a window, the ceiling of the class."),
    pAns("E.A.: the parts are pointed to.", ["pointed to"]),
    p("3. What do we use to go up?"),
    pAns("E.A.: The stairs.", ["The stairs."]),
    p("4. Describe this house: (the teacher shows a drawing)."),
    pAns("E.A.: This is the house. It is … It has … windows.", ["It is", "It has"]),
    p("5. Describe YOUR dream house."),
    pAns("E.A.: This is my house. It is … It has …", ["This is my house."]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s49", "SESSION 49 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 9: HOUSE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six parts of the house; say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Say the right word:")]),
    p("1. We enter by it. → ……"),
    p("2. It is over the room, inside. → ……"),
    p("3. It gives light at night. → ……"),
    p("4. We use them to go up. → ……", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("True or false? (The teacher shows a drawing: a green house with three windows.)")]),
    p("1. It is green.   2. It is red.   3. It has three windows.   4. It has ten doors.", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Describe your dream house: three sentences.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six words match the parts (1 point each).", ["six words"]),
    pAns("Exercise 2: 1. a door  2. a ceiling  3. a light  4. stairs (1 point each)",
      ["a door", "a ceiling", "a light", "stairs"]),
    pAns("Exercise 3: 1. true  2. false  3. true  4. false (1 point each)", ["true", "false"]),
    pAns("Exercise 4: This is my house. It is … It has … (2 points per correct sentence).",
      ["This is my house.", "It is", "It has"]),
  ];
}

module.exports = function unit9() {
  return [
    ...opening(), pageBreak(),
    ...ficheS44(), pageBreak(),
    ...ficheS45(), pageBreak(),
    ...ficheS46(), pageBreak(),
    ...ficheS47(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 9", COLOR, [
      "I can say the nine parts of the house.",
      "I can point to the parts around me.",
      "I can understand: Point to the door!",
      "I can say: This is my house. It is green.",
      "I can say: It has three windows.",
      "I can draw and describe my dream house.",
    ], "Well done! See you in Unit 10: FAMILY!"),
  ];
};
module.exports.COLOR = COLOR;
