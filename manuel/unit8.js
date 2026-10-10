// UNIT 8 — MEALS (2 séances + révision + test) — Sessions 40 à 43 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "1B5E20"; // vert foncé
const TOTAL = 57;
const AUDIO = {
  food: "https://drive.google.com/uc?export=download&id=1DnO5-lncYNtG9Sah-o6eo7SpsdBmQvl_",
  meals3: "https://drive.google.com/uc?export=download&id=1UEFxEPIvRKACM3wwxMb04lSrDAkbGFV4",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 8 — MEALS", title, slo,
  values: "respect, cooperation", session, materials,
});
const EAT = [["rice", "raïs"], ["corn", "kôrn"], ["bread", "brèd"], ["soup", "soup"],
  ["a carrot", "e karotte"], ["a potato", "e potéitôou"], ["green leaves", "grine livz"],
  ["a banana", "e banâna"], ["an orange", "eune orindj"]];
const DRINK = [["water", "ouôteur"], ["tea", "ti"], ["coffee", "kofi"],
  ["milk", "milk"], ["juice", "djous"]];
function grid(items, perRow) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 8 — MEALS", COLOR, "unit8"),
    p("", { after: 100 }),
    p([run("Rice, bread, milk… yum!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u8_meals.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the food and the drinks in English;"),
    p("• mime “to eat” and “to drink”;"),
    p("• say the three meals: breakfast, lunch, dinner.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect, cooperation.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 7)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "E3F0E4" })] }),
        new TableRow({ children: [cell([
          p("1. I show an object: What is this?"),
          p("2. Say the four colours.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u8_food.png", label: "Food and drinks — listen and repeat", url: AUDIO.food }], COLOR),
  ];
}

function ficheS40() {
  const meta = META("Food and drinks",
    "By the end of the lesson, learners will be able to say the food and drink words and mime “to eat” and “to drink”.",
    "1 / 2", "pictures of food and drinks, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. I show an object: What is this?"),
       fp("2. Say the four colours."),
       fp("3. You want a pencil. What do you say?")],
      [fp("Answer."),
       fp("E.A.: 1. This is a …"),
       fp("2. red, blue, black, green."),
       fp("3. I need a pencil.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher mimes eating.) What am I doing? (The teacher mimes drinking.) And now?")],
      [fp("Look. Answer."), fp("E.A.: You eat. You drink. (Pupils answer in their own words; the teacher gives: to eat, to drink.)")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Food and drinks ». By the end of this lesson, you will be able to say the food and drink words in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the pictures of food. Listen: rice… corn… bread… soup… a carrot… a potato… green leaves… a banana… an orange. Now the drinks: water… tea… coffee… milk… juice.")],
      [fp("Look. Listen.")], "“Visual aids”", "Pictures of food and drinks"),
    stepRow(["4. Analysis"],
      [fp("I say a word: point to the right picture."),
       fp("I point to a picture: say the word."),
       fp("Which words are DRINKS?"),
       fp("Mime: to eat! to drink!")],
      [fp("Point. Say. Mime."),
       fp("E.A.: the right picture is pointed to."),
       fp("E.A.: the word matches the picture."),
       fp("E.A.: water, tea, coffee, milk, juice."),
       fp("E.A.: pupils mime eating and drinking.")],
      "“Visual aids” / Miming", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So, we EAT: rice, corn, bread, soup, a carrot, a potato, green leaves, a banana, an orange. We DRINK: water, tea, coffee, milk, juice.")],
      [fp("Listen. Repeat.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listen and mime: “Rice!” (mime eating rice), “Juice!” (mime drinking)…"),
       fp("Game in two teams: a pupil mimes a food or a drink; the team guesses the word in English."),
       fp("Then answer: eat or drink?"),
       fp("1. milk  2. bread  3. soup  4. water")],
      [fp("Mime. Guess. Answer."),
       pAns("E.A.: 1. drink  2. eat  3. eat  4. drink",
        ["drink", "eat"], { size: SZ.FICHE })],
      "Game (miming) / Teams", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to five pictures: say the words."),
       fp("2. Say three things we drink."),
       fp("3. Mime “to eat a banana”.")],
      [fp("Say. Mime."),
       pAns("E.A.: the five words are said; water, tea, coffee, milk or juice; the miming is right.",
        ["five words"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}

function ficheS41() {
  const meta = META("Breakfast, lunch, dinner",
    "By the end of the lesson, learners will be able to say the three meals of the day and the everyday food.",
    "2 / 2", "three pictures of the meals of the day (local food), food cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say five things we eat."),
       fp("2. Say three things we drink."),
       fp("3. Mime “to drink tea”.")],
      [fp("Answer. Mime."),
       fp("E.A.: 1. rice, bread, corn, a banana, an orange…"),
       fp("2. water, milk, juice…"),
       fp("3. The miming is right.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In the morning, before school, do you eat? And at midday? And in the evening?")],
      [fp("Listen. Answer."), fp("E.A.: Yes! (Pupils answer in their own words.)")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Breakfast, lunch, dinner ». By the end of this lesson, you will be able to say the three meals of the day.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the three pictures: the meal of the morning, the meal of midday, the meal of the evening. Listen: breakfast… lunch… dinner.")],
      [fp("Look. Listen.")], "“Visual aids”", "Three pictures of the meals"),
    stepRow(["4. Analysis"],
      [fp("I say a meal: point to the right picture."),
       fp("The meal of the morning is …?"),
       fp("The meal of midday is …?"),
       fp("The meal of the evening is …?")],
      [fp("Point. Answer."),
       fp("E.A.: the right picture is pointed to."),
       fp("E.A.: Breakfast."),
       fp("E.A.: Lunch."),
       fp("E.A.: Dinner.")],
      "“Visual aids” / Brainstorming", "Three pictures"),
    stepRow(["5. Synthesis"],
      [fp("So, the three meals of the day are: breakfast in the morning, lunch at midday, dinner in the evening.")],
      [fp("Listen. Repeat.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Card game: a pupil draws a food card and mimes the food; the friends guess the word."),
       fp("Then choose the right answer:"),
       fp("1. In the morning: lunch / breakfast"),
       fp("2. At midday: lunch / dinner"),
       fp("3. In the evening: dinner / breakfast"),
       fp("4. For breakfast I eat: rice / a schoolbag")],
      [fp("Play. Answer."),
       pAns("E.A.: 1. breakfast  2. lunch  3. dinner  4. rice",
        ["breakfast", "lunch", "dinner", "rice"], { size: SZ.FICHE })],
      "Game (cards, miming)", "Food cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the three meals of the day."),
       fp("2. When do we eat breakfast?"),
       fp("3. Mime a food; the class guesses.")],
      [fp("Answer. Mime."),
       pAns("E.A.: breakfast, lunch, dinner — in the morning — the food is guessed in English.",
        ["breakfast, lunch, dinner", "in the morning"], { size: SZ.FICHE })],
      "Individual work", "Food cards"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 8", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MEALS"),
    sub("1. To eat"),
    pr([run("The action: "), ...kw("to eat", "tou ite"), run(" — we mime with the hand and the mouth.")]),
    grid(EAT, 3),
    p("", { after: 100 }),
    sub("2. To drink"),
    pr([run("The action: "), ...kw("to drink", "tou drink"), run(" — we mime with the glass.")]),
    grid(DRINK, 5),
    p("", { after: 100 }),
    img("u8_meals.png", 320, 768 / 1408),
    sub("3. The three meals of the day"),
    pr([run("In the morning: "), ...kw("breakfast", "brèkfeust")]),
    pr([run("At midday: "), ...kw("lunch", "leuntch")]),
    pr([run("In the evening: "), ...kw("dinner", "dineur")], { after: 100 }),
    pr([run("We can say: "), run("For breakfast, I eat rice. I drink milk.", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_u8_food.png", label: "Food and drinks — listen and repeat", url: AUDIO.food },
      { qr: "qr_u8_meals3.png", label: "Breakfast, lunch, dinner — listen and repeat", url: AUDIO.meals3 },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six pictures; say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Eat or drink? Say the right action:")]),
    p("1. bread   2. juice   3. soup   4. milk   5. a carrot", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Choose the right answer:")]),
    p("1. In the morning we eat: breakfast / dinner"),
    p("2. At midday we eat: lunch / breakfast"),
    p("3. In the evening we eat: dinner / lunch"),
    p("4. We drink: water / bread"),
    p("5. We eat: rice / tea", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Mime two foods and two drinks; the class guesses.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six words match the pictures (1 point each).", ["six words"]),
    pAns("Exercise 2: 1. eat  2. drink  3. eat  4. drink  5. eat", ["eat", "drink"]),
    pAns("Exercise 3: 1. breakfast  2. lunch  3. dinner  4. water  5. rice",
      ["breakfast", "lunch", "dinner", "water", "rice"]),
    pAns("Exercise 4: the mimed words are guessed in English (1 point each).", ["guessed in English"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s42", "SESSION 42 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 8: MEALS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember: we EAT food, we DRINK drinks.", { after: 100 }),
    grid(EAT, 3), p("", { after: 60 }), grid(DRINK, 5),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say five things we eat."),
    pAns("E.A.: rice, corn, bread, soup, a carrot, a potato, green leaves, a banana, an orange (five of them).",
      ["rice", "bread", "banana"]),
    p("2. Say the five drinks."),
    pAns("E.A.: water, tea, coffee, milk, juice.", ["water, tea, coffee, milk, juice."]),
    p("3. Say the three meals of the day."),
    pAns("E.A.: breakfast, lunch, dinner.", ["breakfast, lunch, dinner."]),
    p("4. When do we eat dinner?"),
    pAns("E.A.: In the evening.", ["In the evening."]),
    p("5. Mime “to eat” and “to drink”."),
    pAns("E.A.: the two actions are mimed.", ["two actions"]),
    p("6. What do you eat for breakfast?"),
    pAns("E.A.: I eat … (rice, bread…). I drink … (milk, tea…).", ["I eat", "I drink"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s43", "SESSION 43 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 8: MEALS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six pictures of food and drinks; say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Eat or drink?")]),
    p("1. rice   2. water   3. an orange   4. coffee", { after: 120 }),
    pr([run("Exercise 3 (6 points). ", { bold: true }), run("Say the meal:")]),
    p("1. In the morning → ……"),
    p("2. At midday → ……"),
    p("3. In the evening → ……", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer: What do you eat for breakfast? What do you drink?")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six words match the pictures (1 point each).", ["six words"]),
    pAns("Exercise 2: 1. eat  2. drink  3. eat  4. drink (1 point each)", ["eat", "drink"]),
    pAns("Exercise 3: 1. breakfast  2. lunch  3. dinner (2 points each)", ["breakfast", "lunch", "dinner"]),
    pAns("Exercise 4: I eat … (2 points) ; I drink … (2 points).", ["I eat", "I drink"]),
  ];
}

module.exports = function unit8() {
  return [
    ...opening(), pageBreak(),
    ...ficheS40(), pageBreak(),
    ...ficheS41(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 8", COLOR, [
      "I can say the food: rice, bread, corn…",
      "I can say the drinks: water, milk, juice…",
      "I can mime “to eat” and “to drink”.",
      "I can say: breakfast, lunch, dinner.",
      "I can say what I eat for breakfast.",
    ], "Well done! See you in Unit 9: HOUSE!"),
  ];
};
module.exports.COLOR = COLOR;
