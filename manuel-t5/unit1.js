// T5 — UNIT 1 — SOCIALISING (3 séances + révision + test) — Sessions 1 à 5 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "E36C0A"; // orange
const TOTAL = 49;
const AUDIO = {
  day: "https://drive.google.com/uc?export=download&id=1pNh-HroJV7wai1XYvm-y0z02ciw3_L8N",
  rhyme: "https://drive.google.com/uc?export=download&id=1oE_Ayk2uxTUJNE7D857cohiq4xtrAU2Z",
  wishes: "https://drive.google.com/uc?export=download&id=19M0ETNiwy2kByihjjsEXvD3C96-VmbEW",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — SOCIALISING", title, slo,
  values: "self-confidence, perseverance", session, materials,
});
const DAY = [["morning", "môrning"], ["afternoon", "afteurnoune"],
  ["evening", "ivning"], ["night", "naïte"]];
function dayGrid() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: DAY.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) })],
  });
}
function rhymeBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “PARTS OF THE DAY” RHYME  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "FDEBD9" })] }),
      new TableRow({ children: [cell([
        p([run("It’s the morning. The sun is coming up.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("It’s the morning. It’s time to wake up!", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("It’s the afternoon! I smile to the sun.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("It’s the afternoon! Isn’t it fun?", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("It’s the evening, the end of the day.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("It’s the evening! The sun has gone away.", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("It’s the night. The stars begin to peep.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("It’s the night. It’s time to go to sleep.", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}
function sayItRight(text) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: [cell([
      pr([run("SAY IT RIGHT!  ", { bold: true, color: C.RED, size: SZ.BODY }), run(text, { size: SZ.BODY })], { after: 20 }),
    ], { shade: "FDECEC" })] })],
  });
}

function opening() {
  return [
    unitBanner("UNIT 1 — SOCIALISING", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Good morning! Have a nice day!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("koto_soa.png", 340, 768 / 1416),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the four parts of the day;"),
    p("• greet with Good morning, Good afternoon, Good evening;"),
    p("• wish: Good night!, Enjoy your meal!, Have a nice day!;"),
    p("• say goodbye: See you!, See you next time!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, perseverance.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (English T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "FDEBD9" })] }),
        new TableRow({ children: [cell([
          p("Hello again! Koto and Soa are one year older — and you too!"),
          p("1. Greet a friend: Hello! How are you?"),
          p("2. Answer: I’m fine, thank you.", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u1_day.png", label: "The parts of the day — listen and repeat", url: AUDIO.day }], COLOR),
  ];
}

function ficheS1() {
  const meta = META("The parts of the day",
    "By the end of the lesson, learners will be able to say the four parts of the day clearly and say the “Parts of the day” rhyme.",
    "1 / 3", "pictures of the parts of the day, 8 cards for the memory game, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T4.) Answer these questions:"),
       fp("1. Greet a friend in English."),
       fp("2. How are you?"),
       fp("3. Count from 1 to 10.")],
      [fp("Answer."),
       fp("E.A.: 1. Hello! / Good morning!"),
       fp("2. I’m fine, thank you."),
       fp("3. one … ten.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher mimes waking up and stretching.) When do we wake up? (The teacher mimes sleeping.) And when do we sleep?")],
      [fp("Look. Answer in their own words.")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The parts of the day ». By the end of this lesson, you will be able to say the four parts of the day in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the four pictures on the blackboard. Listen: morning… afternoon… evening… night.")],
      [fp("Look. Listen.")], "“Visual aids”", "Pictures of the parts of the day"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word: all the class, then one row, then one pupil."),
       fp("I say a word: point to the right picture."),
       fp("When does the sun come up?"),
       fp("When do the stars come out?")],
      [fp("Repeat. Point. Answer."),
       fp("E.A.: the right picture is pointed to."),
       fp("E.A.: In the morning."),
       fp("E.A.: At night.")],
      "Repetition drill / “Visual aids”", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So, the four parts of the day are: morning, afternoon, evening, night."),
       fp("Now the rhyme! Listen three times: “It’s the morning. The sun is coming up. It’s the morning. It’s time to wake up!…” (the four verses)")],
      [fp("Listen. Repeat verse by verse after the teacher: together three times, then alone.")],
      "Modelling / Rhyme", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Memory game with 8 cards: 4 picture cards and 4 word cards. Pupil A turns two cards. If the picture and the word match, pupil A says the word and plays again. If not, pupil B plays."),
       fp("Then I show a time on the clock: say the part of the day.")],
      [fp("Play. Say."),
       pAns("E.A.: the pairs are found and named: morning, afternoon, evening, night.",
        ["morning, afternoon, evening, night"], { size: SZ.FICHE })],
      "“Memory game” / In pairs", "8 cards, a clock"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the four parts of the day."),
       fp("2. Say the rhyme with the class."),
       fp("3. I show a picture: say the part of the day.")],
      [fp("Say."),
       pAns("E.A.: morning, afternoon, evening, night — the rhyme is said correctly.",
        ["morning, afternoon, evening, night"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}

function ficheS2() {
  const meta = META("Greetings and wishes",
    "By the end of the lesson, learners will be able to greet at the right time of the day and use the wishes: Good night!, Enjoy your meal!, Have a nice day!",
    "2 / 3", "a clock, cards with pictures (sleeping / eating / going out), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the four parts of the day."),
       fp("2. Say the “Parts of the day” rhyme."),
       fp("3. When do we sleep?")],
      [fp("Answer."),
       fp("E.A.: 1. morning, afternoon, evening, night."),
       fp("2. The rhyme is said."),
       fp("3. At night.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In T4 we said “Good morning”. But what do we say in the afternoon? Let’s find out today!")],
      [fp("Listen. Guess.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Greetings and wishes ». By the end of this lesson, you will be able to greet at the right time and wish something nice to a friend.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look at the clock: Good morning… Good afternoon… Good evening. Now the wishes: before we sleep — Good night!; before we eat — Enjoy your meal!; when a friend goes out — Have a nice day!")],
      [fp("Look. Listen.")], "Modelling / “Visual aids”", "A clock, pictures"),
    stepRow(["4. Analysis"],
      [fp("Repeat each greeting and each wish: the class, one row, one pupil."),
       fp("I show a time on the clock: say the right greeting."),
       fp("Your friend goes to bed. What do you say?"),
       fp("Your friend starts to eat. What do you say?")],
      [fp("Repeat. Answer."),
       fp("E.A.: the greeting matches the time."),
       fp("E.A.: Good night!"),
       fp("E.A.: Enjoy your meal!")],
      "Repetition drill", "A clock"),
    stepRow(["5. Synthesis"],
      [fp("So: Good morning (in the morning), Good afternoon (in the afternoon), Good evening (in the evening). The wishes: Good night!, Enjoy your meal!, Have a nice day!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Card game in pairs: pupil A shows the picture side of a card (a person sleeping / eating / going out). Pupil B says the right wish. If it is right, next card; if not, A says the answer. Then change roles."),
       fp("Group game: I whisper a wish to a pupil; the pupil mimes it; the group guesses the wish.")],
      [fp("Play. Mime. Guess."),
       pAns("E.A.: Good night! / Enjoy your meal! / Have a nice day! match the pictures and the mimes.",
        ["Good night!", "Enjoy your meal!", "Have a nice day!"], { size: SZ.FICHE })],
      "Game (cards, miming) / In pairs", "Cards with pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show three times on the clock: greet."),
       fp("2. I show three pictures: say the wish."),
       fp("3. Say the three wishes of today.")],
      [fp("Answer."),
       pAns("E.A.: Good morning / afternoon / evening — Good night! / Enjoy your meal! / Have a nice day!",
        ["Good night!", "Enjoy your meal!", "Have a nice day!"], { size: SZ.FICHE })],
      "Individual work", "A clock, cards"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}

function ficheS3() {
  const meta = META("Saying goodbye",
    "By the end of the lesson, learners will be able to say goodbye with “See you!” and “See you next time!”, recognise the greetings and wishes they hear, and read the learned words fluently.",
    "3 / 3", "pictures of different situations, word cards, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Greet me: it is the morning / the evening."),
       fp("2. Your friend eats. What do you say?"),
       fp("3. Say the four parts of the day.")],
      [fp("Answer."),
       fp("E.A.: 1. Good morning! / Good evening!"),
       fp("2. Enjoy your meal!"),
       fp("3. morning, afternoon, evening, night.")],
      "Individual work", "A clock"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher waves the hand and walks to the door.) What am I saying? In T4 we said “Goodbye!”. Today, a new way!")],
      [fp("Look. Answer: Goodbye! Bye-bye!")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Saying goodbye ». By the end of this lesson, you will be able to say “See you!” and “See you next time!” and read all the words of the unit.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("(The teacher waves and says:) See you! … See you next time! Listen and watch my gesture.")],
      [fp("Look. Listen.")], "Modelling", "----"),
    stepRow(["4. Analysis"],
      [fp("Repeat: the class, one row, one pupil."),
       fp("When do we say “See you!”?"),
       fp("Speed chat: two lines face to face. Say “See you!” — the friend answers “See you!”. Slide one step, change the words: “See you next time!”, “Bye-bye!”.")],
      [fp("Repeat. Answer. Chat."),
       fp("E.A.: when we leave a friend."),
       fp("E.A.: the goodbye expressions are exchanged correctly.")],
      "Repetition drill / “Speed chat”", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, to say goodbye we say: See you! or See you next time! And we know the greetings (Good morning / afternoon / evening) and the wishes (Good night!, Enjoy your meal!, Have a nice day!).")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listening: I say a sentence (Enjoy your meal! — Good night! — See you!); tick the right picture in your copy-book."),
       fp("Reading: read the words on the blackboard fluently, without mistakes: all together, by rows, then alone."),
       fp("In pairs: read the words to your friend; listen and correct each other kindly (peer correction).")],
      [fp("Tick. Read. Correct."),
       pAns("E.A.: the pictures match the sentences; the words are read fluently: Good morning, See you!, Have a nice day!…",
        ["read fluently"], { size: SZ.FICHE })],
      "“Peer correction” / Repetition drill", "Pictures, word cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say goodbye to me in two ways."),
       fp("2. I say a wish: point to the right picture."),
       fp("3. Read three words on the blackboard.")],
      [fp("Answer. Point. Read."),
       pAns("E.A.: See you! / See you next time! — the picture matches — the words are read correctly.",
        ["See you!", "See you next time!"], { size: SZ.FICHE })],
      "Individual work", "Pictures, blackboard"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 1", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("SOCIALISING"),
    sub("1. The parts of the day"),
    img("u1_partsday.png", 460, 384 / 1536),
    dayGrid(),
    p("", { after: 100 }),
    sub("2. The rhyme"),
    rhymeBox(),
    p("", { after: 100 }),
    sub("3. Greetings"),
    pr([run("In the morning: "), ...kw("Good morning!", "goud môrning")]),
    pr([run("In the afternoon: "), ...kw("Good afternoon!", "goud afteurnoune")]),
    pr([run("In the evening: "), ...kw("Good evening!", "goud ivning")], { after: 100 }),
    sayItRight("afterNOON — the strong part is at the END: af-teur-NOUNE."),
    p("", { after: 100 }),
    sub("4. Wishes"),
    img("u1_wishes.png", 400, 768 / 1376),
    pr([run("Before we sleep: "), ...kw("Good night!", "goud naïte")]),
    pr([run("Before we eat: "), ...kw("Enjoy your meal!", "inndjoï iôr mile")]),
    pr([run("A friend goes out: "), ...kw("Have a nice day!", "hav e naïs déi")], { after: 100 }),
    sub("5. Saying goodbye"),
    pr([...kw("See you!", "si iou"), run("   "), ...kw("See you next time!", "si iou nèkst taïme")], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u1_day.png", label: "The parts of the day — listen and repeat", url: AUDIO.day },
      { qr: "qr_t5_u1_rhyme.png", label: "The rhyme — listen and say", url: AUDIO.rhyme },
      { qr: "qr_t5_u1_wishes.png", label: "Wishes and goodbye — listen and repeat", url: AUDIO.wishes },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("The teacher points to the four pictures; say the parts of the day.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (6 points). ", { bold: true }), run("Say the right greeting or wish:")]),
    p("1. It is 8 o’clock in the morning. → ……"),
    p("2. It is the afternoon. → ……"),
    p("3. It is the evening. → ……"),
    p("4. Your friend goes to bed. → ……"),
    p("5. Your friend starts to eat. → ……"),
    p("6. Your friend goes out for the day. → ……", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Listen and tick the right picture: the teacher says four sentences (Good night! / Enjoy your meal! / See you! / Good morning!).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Say the “Parts of the day” rhyme with the actions.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: morning, afternoon, evening, night (1 point each).", ["morning, afternoon, evening, night"]),
    pAns("Exercise 2: 1. Good morning! 2. Good afternoon! 3. Good evening! 4. Good night! 5. Enjoy your meal! 6. Have a nice day!",
      ["Good morning!", "Good afternoon!", "Good evening!", "Good night!", "Enjoy your meal!", "Have a nice day!"]),
    pAns("Exercise 3: the four pictures match the sentences (1 point each).", ["four pictures"]),
    pAns("Exercise 4: the four verses are said with the actions (1.5 points each).", ["four verses"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s4", "SESSION 4 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: SOCIALISING", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember:", { after: 100 }),
    dayGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the four parts of the day."),
    pAns("E.A.: morning, afternoon, evening, night.", ["morning, afternoon, evening, night."]),
    p("2. Greet at the right time: morning / afternoon / evening."),
    pAns("E.A.: Good morning! Good afternoon! Good evening!", ["Good morning!", "Good afternoon!", "Good evening!"]),
    p("3. Say the three wishes."),
    pAns("E.A.: Good night! Enjoy your meal! Have a nice day!", ["Good night!", "Enjoy your meal!", "Have a nice day!"]),
    p("4. Say goodbye in two ways."),
    pAns("E.A.: See you! See you next time!", ["See you!", "See you next time!"]),
    p("5. Say the “Parts of the day” rhyme."),
    pAns("E.A.: the four verses are said.", ["four verses"]),
    p("6. Read the words of the unit on the blackboard."),
    pAns("E.A.: the words are read fluently, without mistakes.", ["read fluently"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s5", "SESSION 5 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 1: SOCIALISING", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("The teacher points to four pictures; say the parts of the day.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (6 points). ", { bold: true }), run("Say the right greeting or wish (the teacher shows the clock or a picture, six times).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Listen and tick the right picture (four sentences).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Say the rhyme (4 points) and read two words on the blackboard (2 points).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: morning, afternoon, evening, night (1 point each).", ["morning, afternoon, evening, night"]),
    pAns("Exercise 2: the greeting/wish matches the clock or the picture (1 point each).", ["matches"]),
    pAns("Exercise 3: the four pictures match the sentences (1 point each).", ["four pictures"]),
    pAns("Exercise 4: the rhyme is said (4 points); the words are read correctly (1 point each).", ["rhyme is said"]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(),
    ...ficheS2(), pageBreak(),
    ...ficheS3(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 1", COLOR, [
      "I can say: morning, afternoon, evening, night.",
      "I can greet: Good morning / afternoon / evening!",
      "I can wish: Good night! Enjoy your meal! Have a nice day!",
      "I can say goodbye: See you! See you next time!",
      "I can say the “Parts of the day” rhyme.",
      "I can read the words of the unit.",
    ], "Well done! See you in Unit 2: INTRODUCING ONESELF!"),
  ];
};
module.exports.COLOR = COLOR;
