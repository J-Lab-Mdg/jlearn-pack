// T5 — UNIT 5 — MY BIRTHDAY IS ON… (5 séances + révision + test) — Sessions 18 à 24 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "76923C"; // vert olive
const TOTAL = 49;
const AUDIO = {
  numbers: "https://drive.google.com/uc?export=download&id=1g2bC2W2qoha6rmYqjGznnIBfHit3TUUN",
  months: "https://drive.google.com/uc?export=download&id=1CyD5EY7e8HeRRKH-IC0t98IHLx3NNFpl",
  birthday: "https://drive.google.com/uc?export=download&id=1Z-mu6mXFzZGiTzrML0qmeEqKjV9PR72G",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — MY BIRTHDAY IS ON…", title, slo,
  values: "self-confidence, mutual respect", session, materials,
});
const MONTHS = [
  ["January", "djanioueri"], ["February", "fébioueri"], ["March", "mârtch"], ["April", "éiprol"],
  ["May", "méi"], ["June", "djoune"], ["July", "djoulaï"], ["August", "ôgueuste"],
  ["September", "sèptèmbeur"], ["October", "oktôoubeur"], ["November", "novèmbeur"], ["December", "dissèmbeur"],
];
function monthGrid() {
  const rows = [];
  for (let i = 0; i < MONTHS.length; i += 4) {
    rows.push(new TableRow({ children: MONTHS.slice(i, i + 4).map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
const TENS = [
  ["21", "twenty-one"], ["22", "twenty-two"], ["23", "twenty-three"], ["24", "twenty-four"], ["25", "twenty-five"],
  ["26", "twenty-six"], ["27", "twenty-seven"], ["28", "twenty-eight"], ["29", "twenty-nine"], ["30", "thirty"],
  ["31", "thirty-one"], ["32", "thirty-two"], ["33", "thirty-three"], ["34", "thirty-four"], ["35", "thirty-five"],
  ["36", "thirty-six"], ["37", "thirty-seven"], ["38", "thirty-eight"], ["39", "thirty-nine"], ["40", "forty"],
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
function monthsSongBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “MONTHS OF THE YEAR” SONG  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "EAF0DD" })] }),
      new TableRow({ children: [cell([
        p([run("January, February, March and April,", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("May, June, July and August,", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("September, October, November, December:", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("these are the months of the year!", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
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
    unitBanner("UNIT 5 — MY BIRTHDAY IS ON…", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("Happy birthday!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_birthday.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• read the numbers 1 to 20 and count to 40;"),
    p("• say and read the 12 months of the year;"),
    p("• say my favourite month;"),
    p("• say my birthday: My birthday is on … It is a …", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "EAF0DD" })] }),
        new TableRow({ children: [cell([
          p("In T4 we counted from 1 to 20: one, two, three… twenty."),
          p("Count to 20 with a friend: one says 1, the other says 2… Who says 20?", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u5_months.png", label: "The months of the year — listen and sing", url: AUDIO.months }], COLOR),
  ];
}

function ficheS18() {
  const meta = META("Reading the numbers 1 to 20",
    "By the end of the lesson, learners will be able to read the numbers 1 to 20 written in words, fluently and with the right stress.",
    "1 / 5", "papers with the numbers 1 to 20 in words, blackboard, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 10."),
       fp("2. Count from 11 to 20."),
       fp("3. Show me your fingers! (Unit 4)")],
      [fp("Answer. Show."),
       fp("E.A.: one … ten; eleven … twenty."),
       fp("E.A.: These are my fingers.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Number ping-pong: I say a number, you say the next one. One! — … Five! — … Twelve! — …")],
      [fp("Answer: two! six! thirteen!")],
      "Game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ the numbers 1 to 20 written in words. By the end of this lesson, you will read them fluently, like little champions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the words on the blackboard: one, two, three… twenty. Listen to me reading them. Listen to the strong part: thirTEEN, fourTEEN… but TWENty!")],
      [fp("Look. Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read after me: all together, by rows, then alone."),
       fp("I point to a word, you read it: eleven? sixteen? twenty?"),
       fp("Which words end with “-teen”?")],
      [fp("Read. Answer."),
       fp("E.A.: the words are read; thirteen, fourteen… nineteen end with -teen.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, we can read the numbers 1 to 20 in words. The numbers 13 to 19 end with -teen and the strong part is at the END.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs (from the syllabus): take a paper with the numbers 1 to 20 in words. Pupil A reads the numbers in English; pupil B listens carefully and corrects the mistakes. Then change roles: B reads, A corrects.")],
      [fp("Read. Listen. Correct each other kindly."),
       pAns("E.A.: the numbers are read fluently: one, two… twenty; the friends correct each other.",
        ["read fluently"], { size: SZ.FICHE })],
      "“Peer correction” / In pairs", "Papers with the numbers in words"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read five number words on the blackboard."),
       fp("2. I say a number: point to the word."),
       fp("3. Count from 1 to 20.")],
      [fp("Read. Point. Count."),
       pAns("E.A.: the words are read without mistakes; the right words are pointed to.",
        ["read without mistakes"], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}

function ficheS19() {
  const meta = META("The twelve months of the year",
    "By the end of the lesson, learners will be able to say the twelve months of the year clearly and sing the “Months of the Year” song.",
    "2 / 5", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read these words: seven, twelve, eighteen."),
       fp("2. Count from 1 to 20."),
       fp("3. What month is it now?")],
      [fp("Read. Count. Answer in their own words."),
       fp("E.A.: the words are read; the counting is right.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("How many months are there in one year? Let’s count them on our fingers!")],
      [fp("Count: twelve!")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The twelve months of the year ». By the end of this lesson, you will be able to say the twelve months and sing the song.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the twelve months: January, February, March, April, May, June, July, August, September, October, November, December.")],
      [fp("Listen.")], "Modelling / Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Listen again and repeat together, month by month, until the pronunciation is good."),
       fp("Repeat by rows, then alone."),
       fp("Now say the months in Malagasy, and compare: the English name and the Malagasy name are like cousins! (language transfer)")],
      [fp("Repeat. Compare."),
       fp("E.A.: the twelve months are pronounced clearly; the pupils see the months are alike.")],
      "Repetition drill / “Language transfer”", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, the twelve months of the year are: January, February, March, April, May, June, July, August, September, October, November, December.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The song! Listen to the “Months of the Year” song to the end."),
       fp("Listen part by part and sing each part."),
       fp("Sing the whole song from the beginning to the end.")],
      [fp("Listen. Sing part by part. Sing the whole song."),
       pAns("E.A.: the song is sung: “January, February, March and April…”.",
        ["January, February, March and April"], { size: SZ.FICHE })],
      "Song / Audio", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the twelve months in order."),
       fp("2. I say a month in Malagasy: say it in English."),
       fp("3. Sing the song with the class.")],
      [fp("Say. Sing."),
       pAns("E.A.: the months are said in order and clearly; the song is sung.",
        ["said in order"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}

function ficheS20() {
  const meta = META("Reading the months — My favourite month",
    "By the end of the lesson, learners will be able to read the twelve months fluently and say their favourite month.",
    "3 / 5", "12 papers with the month names, big sheets, pencils");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the twelve months in order."),
       fp("2. Sing the “Months of the Year” song."),
       fp("3. What month comes after June?")],
      [fp("Answer. Sing."),
       fp("E.A.: 1. January … December."),
       fp("3. July.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick song: sing the “Months of the Year” song, and clap on YOUR birth month!")],
      [fp("Sing. Clap.")], "Song", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ the months and say our favourite month. By the end of this lesson, you will read the twelve months and say the month you like best.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the twelve months written on the blackboard. Listen to me reading them. Careful with the strong part: JAnuary, FEbruary, sepTEMber, ocTOber, noVEMber, deCEMber!")],
      [fp("Look. Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read the months after me: all together, by rows, then alone."),
       fp("Group game (from the syllabus): the class makes 12 groups. Each group takes a paper with one month and draws a picture for this month (example: June → a picture of Independence Day!). The class looks at the drawing and reads the month."),
       fp("Now listen: My favourite month is December. “Favourite” = the one I like best. What is YOUR favourite month?")],
      [fp("Read. Draw. Guess. Answer."),
       fp("E.A.: the months are read; My favourite month is …")],
      "Group work / Modelling", "12 papers, big sheets, pencils"),
    stepRow(["5. Synthesis"],
      [fp("So: What is your favourite month? — My favourite month is (December). And when a friend answers, we say “Great!” or “Good!” — we respect the choice of our friend.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game: ask your neighbour “What is your favourite month?”; the neighbour answers “My favourite month is …”; you say “Great!” — then the neighbour asks the next pupil.")],
      [fp("Ask. Answer. Respect the choice."),
       pAns("E.A.: — What is your favourite month? — My favourite month is … — Great! / Good!",
        ["What is your favourite month?", "My favourite month is", "Great!"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read six months on the blackboard."),
       fp("2. What is your favourite month?"),
       fp("3. Ask me my favourite month.")],
      [fp("Read. Answer. Ask."),
       pAns("E.A.: the months are read fluently; My favourite month is …; the question is asked.",
        ["My favourite month is"], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}

function ficheS21() {
  const meta = META("Counting from 21 to 40",
    "By the end of the lesson, learners will be able to count from 21 to 40 and recognise the numbers thirty and forty.",
    "4 / 5", "two big cards with 30 and 40, copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 20."),
       fp("2. Read: fifteen, nineteen, twenty."),
       fp("3. What is your favourite month?")],
      [fp("Count. Read. Answer."),
       fp("E.A.: the counting and the reading are right; My favourite month is …")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Count from 1 to 20 in English. Now count from 21 to 29 in French. Ready for the same numbers in English? It works the same way!")],
      [fp("Count.")], "“Transfer”", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to count from 21 to 40. By the end of this lesson, you will count to forty!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at this big card: 30. Listen: “thirty”. Look at this card: 40. Listen: “forty”. Now listen: twenty-one, twenty-two, twenty-three… twenty-nine, thirty!")],
      [fp("Look. Listen.")], "“Visual aids” / Modelling", "Big cards 30 and 40"),
    stepRow(["4. Analysis"],
      [fp("Repeat after me: thirty / forty — the class, one row, one pupil."),
       fp("I say a number: point to the right card (thirty or forty)."),
       fp("Count with me: twenty-one… thirty. Thirty-one… forty."),
       fp("Dictation: I say numbers between 21 and 40; write them in figures in your copy-book.")],
      [fp("Repeat. Point. Count. Write."),
       fp("E.A.: the cards are pointed to; the numbers are written: 25, 32, 40…")],
      "Repetition drill / Dictation", "Cards, copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So: 21 = twenty-one, 30 = thirty, 40 = forty. After twenty we say twenty-one, twenty-two… like in French!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Hide-and-seek (from the syllabus), in the schoolyard: two teams, A and B. Team B hides. Team A counts to FORTY in English, then looks for the friends of team B. Then change roles!")],
      [fp("Count to forty. Play."),
       pAns("E.A.: the team counts: one, two… thirty-nine, forty! before looking.",
        ["forty!"], { size: SZ.FICHE })],
      "Game (hide-and-seek) / Two teams", "The schoolyard"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 21 to 40."),
       fp("2. I show a card: thirty or forty?"),
       fp("3. Write in figures: twenty-five, thirty-eight.")],
      [fp("Count. Answer. Write."),
       pAns("E.A.: the counting is right; 25 and 38 are written.",
        ["counting is right"], { size: SZ.FICHE })],
      "Individual work", "Cards, copy-books"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}

function ficheS22() {
  const meta = META("Reading 21 to 40 — My birthday is on…",
    "By the end of the lesson, learners will be able to read the numbers 21 to 40 in words and say the date of their birthday with the calendar.",
    "5 / 5", "cards with figures and words 21-40, a calendar, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 21 to 40."),
       fp("2. Say the twelve months."),
       fp("3. Read: thirty, forty.")],
      [fp("Count. Say. Read."),
       fp("E.A.: the counting, the months and the reading are right.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Card game (from the syllabus): each pupil takes one card face down on the table (a figure 21-40 OR a word twenty-one…forty). Find the friend with the SAME number and say your number together!")],
      [fp("Take a card. Find the pair. Say the number.")],
      "Game (matching pairs)", "Cards with figures and words"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the numbers 21 to 40 and learn to say our BIRTHDAY. By the end of this lesson, you will say: My birthday is on …")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the words on the blackboard: twenty-one… forty. Listen to me reading them."),
       fp("Now listen (audio): When is your birthday? — My birthday is on October 22. It is a Monday.")],
      [fp("Look. Listen.")], "Modelling / Audio", "Blackboard, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Read the numbers after me: together, by rows, alone."),
       fp("In pairs: pupil A reads and points to the words 21 to 40; pupil B listens and corrects. Change roles."),
       fp("Look at the calendar: my birthday is on October 22. What day is it this year? (The teacher shows:) It is a Monday.")],
      [fp("Read. Correct. Look at the calendar."),
       fp("E.A.: the numbers are read; the day is found on the calendar.")],
      "“Peer correction” / “Visual aids”", "Calendar, papers"),
    stepRow(["5. Synthesis"],
      [fp("So: When is your birthday? — My birthday is on (month + number): My birthday is on March 5. And with the calendar: It is a (Thursday).")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard, calendar"),
    stepRow(["6. Practice"],
      [fp("Everyone speaks! Each pupil says: “My birthday is on …”, looks at the calendar and adds: “It is a …”. I help the pupils who are not sure of their date.")],
      [fp("Say the birthday. Look at the calendar. Say the day."),
       pAns("E.A.: My birthday is on (June 15). It is a (Sunday).",
        ["My birthday is on"], { size: SZ.FICHE })],
      "Individual speaking / “Visual aids”", "Calendar"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read four numbers in words (21-40)."),
       fp("2. When is your birthday?"),
       fp("3. Ask a friend: When is your birthday?")],
      [fp("Read. Answer. Ask."),
       pAns("E.A.: the numbers are read; My birthday is on … It is a …; the question is asked.",
        ["My birthday is on", "It is a"], { size: SZ.FICHE })],
      "Individual work", "Calendar"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MY BIRTHDAY IS ON…"),
    sub("1. The numbers 21 to 40"),
    numberGrid(),
    p("", { after: 60 }),
    sayItRight("thirTEEN (13) — the strong part at the END. THIRty (30) — the strong part at the START!"),
    p("", { after: 100 }),
    sub("2. The twelve months of the year"),
    monthGrid(),
    p("", { after: 100 }),
    sub("3. The song"),
    monthsSongBox(),
    p("", { after: 100 }),
    sub("4. My favourite month"),
    pr([run("The question: "), ...kw("What is your favourite month?", "ouate iz iôr féivrite monnss")]),
    pr([run("The answer: "), ...kw("My favourite month is December.", "maï féivrite monnss iz dissèmbeur")]),
    pr([run("We respect the choice: "), ...kw("Great!", "gréite"), run("  "), ...kw("Good!", "goud")], { after: 100 }),
    sub("5. My birthday"),
    img("u5_birthday.png", 420, 768 / 1408),
    pr([run("The question: "), ...kw("When is your birthday?", "ouène iz iôr beurssdéi")]),
    pr([run("The answer: "), ...kw("My birthday is on October 22.", "maï beurssdéi iz one oktôoubeur touènti-tou")]),
    pr([run("With the calendar: "), ...kw("It is a Monday.", "ite iz e manndéi")], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u5_numbers.png", label: "Numbers 1 to 40 — listen and count", url: AUDIO.numbers },
      { qr: "qr_t5_u5_months.png", label: "The months of the year — listen and sing", url: AUDIO.months },
      { qr: "qr_t5_u5_birthday.png", label: "My birthday — listen and repeat", url: AUDIO.birthday },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Read these numbers: twelve — nineteen — twenty-four — thirty — forty.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Count from 21 to 40 without a mistake.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Say the months in order: which month comes after…?")]),
    p("1. after March? → ……"),
    p("2. after July? → ……"),
    p("3. after September? → ……"),
    p("4. after December? → ……", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Answer: What is your favourite month? (2 points) When is your birthday? (2 points) It is a …? (2 points)")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five numbers are read correctly (1 point each).", ["five numbers"]),
    pAns("Exercise 2: twenty-one, twenty-two … thirty-nine, forty (5 points).", ["twenty-one", "forty"]),
    pAns("Exercise 3: 1. April  2. August  3. October  4. January.", ["April", "August", "October", "January"]),
    pAns("Exercise 4: My favourite month is … — My birthday is on … — It is a …",
      ["My favourite month is", "My birthday is on", "It is a"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s23", "SESSION 23 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: MY BIRTHDAY IS ON…", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the months:", { after: 100 }),
    monthGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Count from 1 to 40."),
    pAns("E.A.: one, two … thirty-nine, forty.", ["thirty-nine, forty."]),
    p("2. Read: seventeen, twenty-three, thirty-six, forty."),
    pAns("E.A.: the numbers are read without mistakes.", ["read without mistakes"]),
    p("3. Sing the “Months of the Year” song."),
    pAns("E.A.: the song is sung.", ["song is sung"]),
    p("4. Read the twelve months on the blackboard."),
    pAns("E.A.: the months are read fluently.", ["read fluently"]),
    p("5. What is your favourite month?"),
    pAns("E.A.: My favourite month is …", ["My favourite month is"]),
    p("6. When is your birthday? What day is it this year?"),
    pAns("E.A.: My birthday is on … It is a …", ["My birthday is on", "It is a"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s24", "SESSION 24 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 5: MY BIRTHDAY IS ON…", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Read five numbers in words chosen by the teacher (between 1 and 40).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Count from 21 to 40.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Say the twelve months in order (3 points) and read two months on the blackboard (2 points).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Answer: What is your favourite month? When is your birthday? It is a …?")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the numbers are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 2: twenty-one … forty without mistakes (5 points).", ["twenty-one"]),
    pAns("Exercise 3: January … December in order; the reading is correct.", ["January"]),
    pAns("Exercise 4: My favourite month is … (1) My birthday is on … (2) It is a … (2).",
      ["My favourite month is", "My birthday is on"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS18(), pageBreak(),
    ...ficheS19(), pageBreak(),
    ...ficheS20(), pageBreak(),
    ...ficheS21(), pageBreak(),
    ...ficheS22(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can read the numbers 1 to 20 in words.",
      "I can count from 21 to 40.",
      "I can say and read the twelve months.",
      "I can sing the “Months of the Year” song.",
      "I can say my favourite month.",
      "I can say: My birthday is on … It is a …",
    ], "Well done! See you in Unit 6: MY DREAM CLASSROOM!"),
  ];
};
module.exports.COLOR = COLOR;
