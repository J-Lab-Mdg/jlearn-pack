// T5 — UNIT 10 — WILD ANIMALS (2 séances + révision + test) — Sessions 46 à 49 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "B03060"; // framboise
const TOTAL = 49;
const AUDIO = {
  animals: "https://drive.google.com/uc?export=download&id=1XR2r-mUSkfr0pryR6QyCF5OJ3aiv5pb_",
  numbers: "https://drive.google.com/uc?export=download&id=1t46MXejhSLzzIcaAdDCvM5BS3HefnLl5",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 10 — WILD ANIMALS", title, slo,
  values: "love of effort, striving for the best", session, materials,
});
const ANIMALS = [
  ["a crocodile", "e krokodaïol"], ["a monkey", "e monnki"], ["a snake", "e snéike"], ["a bird", "e beurde"],
  ["an elephant", "ane élifannte"], ["a lion", "e laïeune"], ["a turtle", "e teurtol"], ["an owl", "ane aoul"],
  ["a bear", "e bèr"], ["a giraffe", "e djirâf"], ["a zebra", "e zibra"], ["a wolf", "e woulf"],
  ["a chameleon", "e kamilieune"],
];
function animalGrid() {
  const rows = [];
  for (let i = 0; i < ANIMALS.length; i += 4) {
    const slice = ANIMALS.slice(i, i + 4);
    rows.push(new TableRow({ children: slice.concat(Array(4 - slice.length).fill(null)).map((it) =>
      it ? cell([p([run(it[0], { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 10 }),
                 p([run(`[${it[1]}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
          { w: 2600, vAlign: VerticalAlign.CENTER })
        : cell([p("")], { w: 2600 }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
const TENS = [
  ["71", "seventy-one"], ["75", "seventy-five"], ["79", "seventy-nine"], ["80", "eighty"],
  ["82", "eighty-two"], ["86", "eighty-six"], ["89", "eighty-nine"], ["90", "ninety"],
  ["91", "ninety-one"], ["95", "ninety-five"], ["99", "ninety-nine"], ["100", "one hundred"],
];
function numberGrid() {
  const rows = [];
  for (let i = 0; i < TENS.length; i += 4) {
    rows.push(new TableRow({ children: TENS.slice(i, i + 4).map(([n, w]) =>
      cell([p([run(n, { bold: true, color: COLOR, size: 28 })], { center: true, after: 6 }),
            p([run(w, { bold: true, color: C.BLUE, size: 22 })], { center: true, after: 16 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 10 — WILD ANIMALS", COLOR, "unit10"),
    p("", { after: 100 }),
    p([run("What is this? — This is a lion!", { bold: true, color: COLOR, size: 42 })], { center: true, after: 120 }),
    img("u10_animals.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say and read the names of thirteen wild animals;"),
    p("• count from 71 to 100;"),
    p("• answer: How many … are there? — There are …", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("love of effort, striving for the best.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F5E1E9" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned the farm animals and the pets: a cat, a dog, a zebu, a hen, a duck, a sheep, a pig…"),
          p("This year: the WILD animals — the animals of the forest and the savanna!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u10_animals.png", label: "Wild animals — listen and repeat", url: AUDIO.animals }], COLOR),
  ];
}

function ficheS46() {
  const meta = META("The wild animals",
    "By the end of the lesson, learners will be able to say and read the names of the wild animals, recognise them and answer “What is this?”.",
    "1 / 2", "pictures of wild animals, true/false cards, copy-books, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T4.) Answer these questions:"),
       fp("1. Name three farm animals or pets."),
       fp("2. What is this? (a picture of a cat)"),
       fp("3. Present one member of your family. (Unit 9)")],
      [fp("Answer."),
       fp("E.A.: a cat, a dog, a zebu…; This is a cat; This is my …")],
      "Individual work", "Pictures"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher mimes a big elephant with the trunk.) What animal am I? Today: the wild animals!")],
      [fp("Look. Guess.")], "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The wild animals ». By the end of this lesson, you will say and read thirteen animal names — like the chameleon of Madagascar!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the pictures and listen: a crocodile, a monkey, a snake, a bird, an elephant, a lion, a turtle, an owl, a bear, a giraffe, a zebra, a wolf, a chameleon.")],
      [fp("Look. Listen.")], "“Visual aids” / Audio", "Pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word until the pronunciation is good: the class, one row, one pupil."),
       fp("Read the pairs on the blackboard (from the syllabus): snake – giraffe / bird – bear / lion – chameleon / owl – wolf."),
       fp("In pairs, then in groups: read the words one after the other; listen and correct each other kindly. A mistake? Start the list again!"),
       fp("Listening: I say a word — circle it in your copy-book. Then swap copy-books with your neighbour and correct.")],
      [fp("Repeat. Read. Correct each other. Circle. Swap and check."),
       fp("E.A.: the words are read fluently; the right words are circled.")],
      "Repetition drill / “Peer correction”", "Blackboard, copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So, we know thirteen wild animals — and we can read their names!")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("True or false cards (from the syllabus): each group gets cards with a picture AND a name — some are right, some are WRONG (a picture of a bird with the word “Chameleon”!). Read the card, say TRUE or FALSE, and give the right name."),
       fp("Read-and-draw: each group reads a word on the blackboard and draws the animal. The class looks and says the name!"),
       fp("Mime game: I whisper an animal to a pupil; the pupil mimes; the class guesses.")],
      [fp("Read. Say true or false. Correct. Draw. Mime. Guess."),
       pAns("E.A.: False! This is a bird. — the drawings match the words — the mimes are guessed: a monkey!",
        ["This is a bird."], { size: SZ.FICHE })],
      "Game (true/false, miming) / Group work", "True/false cards, big sheets"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show five pictures: say the animals."),
       fp("2. Read four animal words."),
       fp("3. What is this? (a picture of a turtle)")],
      [fp("Say. Read. Answer."),
       pAns("E.A.: the animals are named clearly; the words are read; This is a turtle.",
        ["This is a turtle."], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}

function ficheS47() {
  const meta = META("Counting to 100 — How many animals are there?",
    "By the end of the lesson, learners will be able to count from 71 to 100 and answer “How many … are there?” with “There are …”.",
    "2 / 2", "big cards with 80, 90 and 100, a small ball, pictures of many animals, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name five wild animals."),
       fp("2. Read: crocodile, owl, zebra."),
       fp("3. Count from 40 to 70. (Unit 6)")],
      [fp("Answer. Read. Count."),
       fp("E.A.: the animals are named; the words are read; the counting is right.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Count from 70 to 100 in Malagasy. Do you see? It works the same way in English: seventy, seventy-one, seventy-two… (language transfer)")],
      [fp("Count. Compare.")], "“Transfer”", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to count to ONE HUNDRED — and count the wild animals! By the end of this lesson, you will say: There are 80 zebras!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at these big cards: 80 … “eighty”. 90 … “ninety”. 100 … “one hundred”! Listen and look. (Repeat several times.)")],
      [fp("Look. Listen.")], "“Visual aids” / Modelling", "Big cards 80, 90, 100"),
    stepRow(["4. Analysis"],
      [fp("Repeat after me: eighty / ninety / one hundred — the class, one row, one pupil."),
       fp("Point to eighty! Point to one hundred! Point to ninety!"),
       fp("Count with me: seventy-one… eighty… ninety… one hundred!")],
      [fp("Repeat. Point. Count."),
       fp("E.A.: the cards are pointed to; the counting is right.")],
      "Repetition drill", "Cards"),
    stepRow(["5. Synthesis"],
      [fp("So: 80 = eighty, 90 = ninety, 100 = one hundred. And to count things: How many … are there? — There are …")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Ball game in the schoolyard (from the syllabus): I hold the ball and say a number, for example “72”. I throw the ball to a pupil: the pupil says the NEXT number in English. A mistake? We say the right number and start with a new number. Up to 100!"),
       fp("Counting the animals: look at my picture full of animals. “How many zebras are there?” — “There are 80 zebras.” Now in pairs, ask and answer with other animals and numbers — count the animals yourselves!")],
      [fp("Play. Say the next number. Ask. Count. Answer."),
       pAns("E.A.: 72 → seventy-three! — How many birds are there? — There are one hundred birds.",
        ["How many", "There are"], { size: SZ.FICHE })],
      "Game (ball) / In pairs", "A small ball, animal pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 71 to 100."),
       fp("2. I show a card: eighty, ninety or one hundred?"),
       fp("3. How many … are there? (a picture)")],
      [fp("Count. Answer."),
       pAns("E.A.: the counting is right; There are … (animals).",
        ["There are"], { size: SZ.FICHE })],
      "Individual work", "Cards, pictures"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 10", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("WILD ANIMALS"),
    sub("1. Thirteen wild animals"),
    img("u10_animals.png", 440, 768 / 1408),
    animalGrid(),
    p("", { after: 100 }),
    sub("2. What is this?"),
    pr([run("The question: "), ...kw("What is this?", "ouate iz ziss")]),
    pr([run("The answer: "), ...kw("This is a lion.", "ziss iz e laïeune")], { after: 100 }),
    sub("3. The numbers 71 to 100"),
    numberGrid(),
    p("", { after: 100 }),
    sub("4. How many are there?"),
    pr([run("The question: "), ...kw("How many zebras are there?", "haou mèni zibraz âr zèr")]),
    pr([run("The answer: "), ...kw("There are eighty zebras.", "zèr âr éiti zibraz")], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u10_animals.png", label: "Wild animals — listen and repeat", url: AUDIO.animals },
      { qr: "qr_t5_u10_numbers.png", label: "Numbers 71 to 100 — listen and count", url: AUDIO.numbers },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher shows five animal pictures: say the names.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Read: crocodile — elephant — giraffe — owl — chameleon.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("True or false? (The teacher shows four cards with a picture and a name; correct the false ones.)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Count from 71 to 100 (4 points), then answer: How many … are there? (2 points)")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five animals are named clearly (1 point each).", ["five animals"]),
    pAns("Exercise 2: the five words are read correctly (1 point each).", ["five words"]),
    pAns("Exercise 3: true/false is right; the false cards are corrected: “False! This is a …” (1 point each).", ["False!"]),
    pAns("Exercise 4: seventy-one … one hundred; There are … (animals).", ["one hundred", "There are"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s48", "SESSION 48 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 10: WILD ANIMALS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the animals:", { after: 100 }),
    animalGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The teacher shows six pictures: say the animals."),
    pAns("E.A.: a crocodile, a monkey, a lion, an owl, a zebra, a chameleon…", ["a crocodile"]),
    p("2. Read six animal words on the blackboard."),
    pAns("E.A.: the words are read fluently.", ["read fluently"]),
    p("3. What is this? (three pictures)"),
    pAns("E.A.: This is a … / This is an elephant.", ["This is a"]),
    p("4. Count from 71 to 100."),
    pAns("E.A.: seventy-one … one hundred.", ["one hundred"]),
    p("5. How many turtles are there? (a picture)"),
    pAns("E.A.: There are … turtles.", ["There are"]),
    p("6. Mime an animal for your group!"),
    pAns("E.A.: the animal is guessed in English.", ["guessed"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s49", "SESSION 49 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 10: WILD ANIMALS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher shows five animal pictures: say the names.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Read five animal words on the blackboard.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Count from 71 to 100.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Answer: What is this? (2 points) How many … are there? (3 points)")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the animals are named clearly (1 point each).", ["named clearly"]),
    pAns("Exercise 2: the words are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 3: seventy-one … one hundred (5 points).", ["one hundred"]),
    pAns("Exercise 4: This is a … — There are … (animals).", ["This is a", "There are"]),
  ];
}

module.exports = function unit10() {
  return [
    ...opening(), pageBreak(),
    ...ficheS46(), pageBreak(),
    ...ficheS47(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 10", COLOR, [
      "I can say thirteen wild animals.",
      "I can read the animal words.",
      "I can answer: What is this? — This is a …",
      "I can count from 71 to 100.",
      "I can say: There are … (animals).",
    ], "Well done! You finished the T5 English year! See you in T6!"),
  ];
};
module.exports.COLOR = COLOR;
