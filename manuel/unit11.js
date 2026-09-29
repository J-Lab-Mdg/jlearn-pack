// UNIT 11 — FARM ANIMALS AND PETS (2 séances + révision + test) — Sessions 54 à 57 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "1F3864"; // bleu nuit
const TOTAL = 57;
const AUDIO = {
  animals: "https://drive.google.com/uc?export=download&id=1pOIvtk9r1K7LURxTa3vNAqEqphBeFSzw",
  game: "https://drive.google.com/uc?export=download&id=15Z-Mi5KkGxi3_lukg4wQQPVfnuRxYngh",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 11 — FARM ANIMALS AND PETS", title, slo,
  values: "love of effort, looking for the best", session, materials,
});
const ANIMALS = [
  ["a cat", "e kate"], ["a dog", "e dog"], ["a zebu", "e zibou"],
  ["a hen", "e hène"], ["a pig", "e pig"], ["a fish", "e fich"],
  ["a duck", "e deuk"], ["a goose", "e gous"], ["a rabbit", "e rabite"],
  ["a sheep", "e chipe"], ["a goat", "e gôoute"], ["a horse", "e hôrs"],
  ["a chicken", "e tchikène"], ["a turkey", "e teurki"],
];
function animalsGrid() {
  const perRow = 4, rows = [];
  for (let i = 0; i < ANIMALS.length; i += perRow) {
    const chunk = ANIMALS.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: 2600 }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 11 — FARM ANIMALS AND PETS", COLOR, "unit11"),
    p("", { after: 100 }),
    p([run("Cat, dog, zebu… and you?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u11_animals.png", 300, 1370 / 768),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the farm animals and the pets in English;"),
    p("• answer: What is this? — It is a cat;"),
    p("• play the animal games: draw, mime, true or false.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("love of effort, looking for the best.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 10)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "E2E8F4" })] }),
        new TableRow({ children: [cell([
          p("1. Say the five family words."),
          p("2. Ask and answer: Who is he? — This is my …", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u11_animals.png", label: "The animals — listen and repeat", url: AUDIO.animals }], COLOR),
  ];
}

function ficheS54() {
  const meta = META("Farm animals and pets",
    "By the end of the lesson, learners will be able to say the names of the farm animals and the pets in English.",
    "1 / 2", "big picture of the animals, animal cards, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the five family words."),
       fp("2. I point to the family picture: Who is she?"),
       fp("3. Sing one verse of the Family song.")],
      [fp("Answer. Sing."),
       fp("E.A.: 1. mother, father, sister, brother, children."),
       fp("2. This is my …"),
       fp("3. The verse is sung.")],
      "Individual work", "Family picture"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher imitates a cat: “Meow!”) What is it? (Then a dog: “Woof!”) And this?")],
      [fp("Listen. Guess."), fp("E.A.: pupils guess in their own words; the teacher gives: a cat! a dog!")],
      "Miming / Game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Farm animals and pets ». By the end of this lesson, you will be able to say the names of the animals in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the big picture. Listen: a cat… a dog… a zebu… a hen… a pig… a fish… a duck… a goose… a rabbit… a sheep… a goat… a horse… a chicken… a turkey.")],
      [fp("Look. Listen.")], "“Visual aids”", "Big picture of the animals"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word after me: all the class, then one row, then one pupil alone."),
       fp("I say an animal: point to it on the picture."),
       fp("I point to an animal: say the name."),
       fp("Which animals live in your home or your yard?")],
      [fp("Repeat. Point. Say."),
       fp("E.A.: the right animal is pointed to."),
       fp("E.A.: the name matches the animal."),
       fp("E.A.: a cat, a dog, a hen… (pupils answer).")],
      "Repetition drill / “Visual aids”", "Big picture"),
    stepRow(["5. Synthesis"],
      [fp("So, the farm animals and the pets are: a cat, a dog, a zebu, a hen, a pig, a fish, a duck, a goose, a rabbit, a sheep, a goat, a horse, a chicken, a turkey.")],
      [fp("Listen. Repeat.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game in groups: I show an animal card with a name said aloud — true or false? The group speaker answers and corrects."),
       fp("Example: (picture of a cat) “This is a dog.” True or false?")],
      [fp("Play. Answer."),
       pAns("E.A.: False! This is a cat. — the groups correct the wrong names.",
        ["False! This is a cat."], { size: SZ.FICHE })],
      "Game (cards) / Group work", "Animal cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to eight animals: say the names."),
       fp("2. Say four animals of the yard."),
       fp("3. The big animal with horns of Madagascar is the …?")],
      [fp("Say."),
       pAns("E.A.: the eight names are said — a hen, a duck, a goose, a turkey… — a zebu.",
        ["eight names", "a zebu"], { size: SZ.FICHE })],
      "Individual work", "Big picture"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}

function ficheS55() {
  const meta = META("What is this? Draw me a cat!",
    "By the end of the lesson, learners will be able to answer “What is this?” about an animal and react to “Draw me a …!”.",
    "2 / 2", "animal cards, slates, chalk");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. I point to six animals: say the names."),
       fp("2. Say three pets."),
       fp("3. True or false: (picture of a hen) “This is a hen.”")],
      [fp("Answer."),
       fp("E.A.: 1. The six names are said."),
       fp("2. a cat, a dog, a fish, a rabbit."),
       fp("3. True!")],
      "Individual work", "Animal cards"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("A pupil comes to the front and mimes an animal. What is it?")],
      [fp("Mime. Guess."), fp("E.A.: A cat! A horse! …")],
      "Miming / Game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « What is this? Draw me a cat! ». By the end of this lesson, you will be able to ask and answer about the animals and draw the animal I say.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the dialogue (I show a card): “— What is this? — It is a cat.” (Another card:) “— What is this? — It is a zebu.” Now listen to the command: “Draw me a cat!” (The teacher draws a cat on the blackboard.)")],
      [fp("Look. Listen.")], "Modelling", "Animal cards, blackboard"),
    stepRow(["4. Analysis"],
      [fp("What is the question for an animal?"),
       fp("What is the answer?"),
       fp("What do you do when I say “Draw me a dog!”?"),
       fp("I show a card: ask me the question!")],
      [fp("Answer. Ask."),
       fp("E.A.: What is this?"),
       fp("E.A.: It is a … (cat, dog…)."),
       fp("E.A.: We draw a dog."),
       fp("E.A.: What is this?")],
      "Brainstorming / Modelling", "Animal cards"),
    stepRow(["5. Synthesis"],
      [fp("So: the question is “What is this?”, the answer is “It is a …”. And with “Draw me a …!”, we draw the animal.")],
      [fp("Listen. Repeat the model.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game 1 — Draw me a …! : “Draw me a cat!” Draw on your slate, then show your drawing."),
       fp("Game 2 — Mime: a pupil mimes an animal; the class asks “What is this?” and guesses: “It is a …!”"),
       fp("Game 3 — in pairs with the cards: one asks, one answers. Change roles.")],
      [fp("Draw. Mime. Ask. Answer."),
       pAns("E.A.: — What is this? — It is a cat. / The drawing matches the animal.",
        ["What is this?", "It is a cat."], { size: SZ.FICHE })],
      "Games (drawing, miming) / In pairs", "Slates, chalk, animal cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show four cards: What is this?"),
       fp("2. Draw me a fish!"),
       fp("3. Say six animal names.")],
      [fp("Answer. Draw."),
       pAns("E.A.: It is a … (four answers) — the fish is drawn — six names are said.",
        ["It is a"], { size: SZ.FICHE })],
      "Individual work", "Animal cards, slates"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 11", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("FARM ANIMALS AND PETS"),
    sub("1. The animals"),
    img("u11_animals.png", 300, 1370 / 768),
    animalsGrid(),
    p("", { after: 100 }),
    sub("2. What is this?"),
    pr([run("The question: "), ...kw("What is this?", "ouate iz zis")]),
    pr([run("The answer: "), ...kw("It is a cat.", "it iz e kate"),
        run("  "), ...kw("It is a zebu.", "it iz e zibou")], { after: 100 }),
    sub("3. Draw me a …!"),
    pr([run("The command: "), ...kw("Draw me a cat!", "drô mi e kate"),
        run(" — we draw the animal on the slate.")], { after: 140 }),
    audioBox([
      { qr: "qr_u11_animals.png", label: "The animals — listen and repeat", url: AUDIO.animals },
      { qr: "qr_u11_game.png", label: "What is this? Draw me a…! — listen and repeat", url: AUDIO.game },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (7 points). ", { bold: true }), run("The teacher points to seven animals on the picture; say the names.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("True or false? (The teacher shows a card and says a name.)")]),
    p("1. (a cat) “This is a cat.”"),
    p("2. (a dog) “This is a hen.”"),
    p("3. (a zebu) “This is a zebu.”"),
    p("4. (a duck) “This is a horse.”", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Answer: What is this? (four cards)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Draw me a hen! Then mime an animal for the class.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the seven names match the animals (1 point each).", ["seven names"]),
    pAns("Exercise 2: 1. true  2. false (It is a dog.)  3. true  4. false (It is a duck.) (1 point each)",
      ["true", "false"]),
    pAns("Exercise 3: It is a … + the right animal (1 point each).", ["It is a"]),
    pAns("Exercise 4: the hen is drawn (3 points); the mimed animal is guessed (2 points).", ["hen is drawn"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s56", "SESSION 56 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 11: FARM ANIMALS AND PETS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the fourteen animals:", { after: 100 }),
    animalsGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the fourteen animals."),
    pAns("E.A.: a cat, a dog, a zebu, a hen, a pig, a fish, a duck, a goose, a rabbit, a sheep, a goat, a horse, a chicken, a turkey.",
      ["a cat", "a zebu", "a turkey"]),
    p("2. The teacher shows a card: What is this?"),
    pAns("E.A.: It is a …", ["It is a"]),
    p("3. True or false: (a goat) “This is a sheep.”"),
    pAns("E.A.: False! It is a goat.", ["False! It is a goat."]),
    p("4. Draw me a zebu!"),
    pAns("E.A.: the zebu is drawn on the slate.", ["zebu is drawn"]),
    p("5. Mime an animal; the class guesses."),
    pAns("E.A.: the class asks “What is this?” and answers “It is a …!”", ["What is this?", "It is a"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s57", "SESSION 57 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 11: FARM ANIMALS AND PETS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (7 points). ", { bold: true }), run("The teacher points to seven animals; say the names.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("True or false? (The teacher shows four cards and says the names.)")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Answer: What is this? (five cards)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Draw me a cat! Draw me a fish!")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the seven names match the animals (1 point each).", ["seven names"]),
    pAns("Exercise 2: true / false + the correction: It is a … (1 point each).", ["It is a"]),
    pAns("Exercise 3: It is a … + the right animal (1 point each).", ["It is a"]),
    pAns("Exercise 4: the two animals are drawn (2 points each).", ["two animals"]),
  ];
}

module.exports = function unit11() {
  return [
    ...opening(), pageBreak(),
    ...ficheS54(), pageBreak(),
    ...ficheS55(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 11", COLOR, [
      "I can say the fourteen farm animals and pets.",
      "I can answer: What is this? — It is a cat.",
      "I can play: Draw me a …!",
      "I can mime an animal for my friends.",
      "I finished ALL the units of English T4! HURRAY!",
    ], "CONGRATULATIONS! You finished the year! Koto and Soa are proud of you!"),
  ];
};
module.exports.COLOR = COLOR;
