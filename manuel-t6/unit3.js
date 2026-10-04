// T6 — UNIT 3 — TIME AND WEATHER (12 séances + révision + test) — Sessions 17 à 30 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "00838F"; // bleu canard
const SHADE = "DFF0F2";
const TOTAL = 74;
const AUDIO = {
  days: "https://drive.google.com/uc?export=download&id=1UsGvOFCPUTTSD6lphgFuJYEevGWZbBXX",
  time: "https://drive.google.com/uc?export=download&id=1SDJWiYDyioKGv_NizgructMer-nWORjI",
  weather: "https://drive.google.com/uc?export=download&id=1lsbDStkPFaPDFOgMyEIgVHzBSo6YeFUc",
  reading: "https://drive.google.com/uc?export=download&id=1jvrB0lK-N5EmjA-s7c0Rn8_GZ0OkIrZu",
};
const bullet = (runs, o = {}) => pr(
  [run("\u2022  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });

const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — TIME AND WEATHER", title, slo,
  values: "solidarity, mutual respect", session, materials,
});

// ---------- données ----------
const DAYS = [["Monday", "meundé"], ["Tuesday", "tiouzdé"], ["Wednesday", "ouènzdé"],
  ["Thursday", "seurzdé"], ["Friday", "fraïdé"], ["Saturday", "sateudé"], ["Sunday", "seundé"]];
const MONTHS = [
  ["January", "djanioueri"], ["February", "fébioueri"], ["March", "mârtch"], ["April", "éiprol"],
  ["May", "méi"], ["June", "djoune"], ["July", "djoulaï"], ["August", "ôgueuste"],
  ["September", "sèptèmbeur"], ["October", "oktôoubeur"], ["November", "novèmbeur"], ["December", "dissèmbeur"],
];
const ORDINALS = [
  ["1st", "first"], ["2nd", "second"], ["3rd", "third"], ["4th", "fourth"], ["5th", "fifth"],
  ["10th", "tenth"], ["12th", "twelfth"], ["20th", "twentieth"], ["21st", "twenty-first"],
  ["30th", "thirtieth"], ["31st", "thirty-first"], ["", ""],
];
const SEASONS = [
  ["summer", "seumeur", "hot, rain, sun"],
  ["autumn", "ôteume", "cold, red leaves"],
  ["winter", "ouinnteur", "freezing, cloud, drizzle, snow"],
  ["spring", "sprinng", "cool, flowers, trees, grass"],
];
const WEATHER_ADJ = [
  ["sunny", "seuni"], ["windy", "ouinndi"], ["cloudy", "klaoudi"], ["rainy", "réini"],
  ["snowy", "snôoui"], ["foggy", "fogui"], ["hot", "hote"], ["cold", "kôoulde"],
];

function grid(items, perRow, size = 26) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function songBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { center: true, after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE DAYS OF THE WEEK SONG  ♪ (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("Monday, Tuesday,"),
        L("Wednesday, Thursday,"),
        L("Friday, Saturday,"),
        L("Sunday, the last day,"),
        L("Sunday, the last day!"),
      ])] }),
    ],
  });
}
function dateDialogueBox() {
  const line = (q, a) => [
    pr([run("— " + q, { bold: true, color: COLOR, size: SZ.BODY })], { after: 20 }),
    pr([run("— " + a, { italic: true, size: SZ.BODY })], { after: 50 }),
  ];
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE DATE DIALOGUE (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        ...line("What day is today?", "Today is Monday, the 1st of April."),
        ...line("What month is it now?", "We are in April."),
        ...line("What day was yesterday?", "Yesterday was Sunday."),
        ...line("What day will be tomorrow?", "Tomorrow will be Tuesday."),
      ])] }),
    ],
  });
}
function timeConvBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("TWO TIME CONVERSATIONS (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("Tony: What time is it now?"),
        L("Samantha: (yawn) It’s midnight."),
        L("Tony: Okay, please wake me up at half past five."),
        p("", { after: 40 }),
        L("Tony: I have a meeting tomorrow morning."),
        L("Samantha: What time is your meeting?"),
        L("Tony: My meeting is at nine o’clock."),
      ])] }),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — TIME AND WEATHER", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("What time is it? What’s the weather like?", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u3_seasons.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the days, the months and the date (with the ordinal numbers up to 31st);"),
    p("• use to be in the present, the PAST (was) and the FUTURE (will be);"),
    p("• count up to thousands, millions and billions;"),
    p("• tell the time: o’clock, a quarter/half past/to, a.m. and p.m.;"),
    p("• describe the four seasons and the weather;"),
    p("• read and write about time, seasons and weather.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: SHADE })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned the parts of the day, the twelve months and the birthdays (My birthday is on June 12)."),
          p("This year we tell the FULL date, the TIME on the clock, and the weather of the four seasons!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u3_days.png", label: "Days, months and the date dialogue — listen and repeat", url: AUDIO.days }], COLOR),
  ];
}

// ---------- S17 — Days of the week ----------
function ficheS17() {
  const meta = META("The days of the week",
    "By the end of the lesson, learners will be able to say the seven days of the week (with the song) and answer “What day is today?”.",
    "1 / 12", "a calendar, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Unit 2.) Answer these questions:"),
       fp("1. Ask the permission to open the door."),
       fp("2. (T5!) Say the days of the week you remember."),
       fp("3. Spell “Monday”.")],
      [fp("Ask. Say. Spell."),
       fp("E.A.: May I open the door, please?; Monday, Tuesday…; M-O-N-D-A-Y.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at this calendar. Tell me everything it shows! (days, weeks, numbers, months…)")],
      [fp("Observe. Tell.")], "Eliciting technique", "Calendar"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the seven days of the week with a song. By the end of this lesson, you will answer: What day is today?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: I read the lyrics sentence by sentence — repeat. Then listen to the song and repeat: “Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday, the last day!”")],
      [fp("Repeat the lyrics. Sing.")],
      "Repetition drill / Song", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: I say the days one by one — the class, one row, one pupil repeat. Group competition for the best pronunciation!"),
       fp("Careful: in English, the days take a CAPITAL letter: Monday, not monday!"),
       fp("I point to a day on the calendar: name it!")],
      [fp("Repeat. Compete. Name the days."),
       fp("E.A.: the days are pronounced clearly, with the capital letter rule known.")],
      "Repetition drill / Group competition", "Calendar, blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, the week has seven days, they take a capital letter, and the question is: What day is today? — Today is …")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game: “I am the first day of school in the week. Who am I?” — “I am the last day. Who am I?”"),
       fp("Chain: one pupil says a day, the next says the following day — fast, around the class!")],
      [fp("Guess. Say the chain."),
       pAns("E.A.: Monday! — Sunday! — the chain is fast and correct.",
        ["Monday!"], { size: SZ.FICHE })],
      "Guessing / Chain drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Sing the days song."),
       fp("2. What day is today?"),
       fp("3. Which day comes after Thursday? before Sunday?")],
      [fp("Sing. Answer."),
       pAns("E.A.: the song is sung; Today is …; Friday; Saturday.",
        ["Today is"], { size: SZ.FICHE })],
      "Individual work", "Calendar"),
  ];
  return fiche(17, TOTAL, meta, rows, "s17");
}

// ---------- S18 — Months ----------
function ficheS18() {
  const meta = META("The twelve months — What month is it now?",
    "By the end of the lesson, learners will be able to say the twelve months, answer “What month is it now? — We are in…” and guess a month from a description.",
    "2 / 12", "a calendar, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Sing the days song."),
       fp("2. What day is today? What day was yesterday?"),
       fp("3. Write “Wednesday” (capital letter!).")],
      [fp("Sing. Answer. Write."),
       fp("E.A.: Today is …; Yesterday was …; Wednesday.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("How many months are there in one year? Count them on your fingers — in English!")],
      [fp("Count.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to master the twelve months. By the end of this lesson, you will answer “What month is it now?” and guess months like detectives!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Repetition drill (from the syllabus): I say the twelve months one by one — repeat: January, February, March, April, May, June, July, August, September, October, November, December.")],
      [fp("Listen. Repeat.")],
      "Repetition drill", "Calendar"),
    stepRow(["4. Analysis"],
      [fp("The months also take a CAPITAL letter!"),
       fp("Group competition: each row says three months in order — best pronunciation wins."),
       fp("The question: What month is it now? — We are in … And: What month is Christmas? — December!")],
      [fp("Repeat. Compete. Answer."),
       fp("E.A.: We are in …; December.")],
      "Group competition", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: 12 months, capital letters, We are in + month, and the preposition IN for months (in April) — ON for days (on Monday).")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game (from the syllabus): “I am the second month of the year. Who am I?” — “I am the month of Christmas.” — “I am the first month.” Now YOU make a riddle for the class!")],
      [fp("Guess. Make riddles."),
       pAns("E.A.: February! — December! — January! — the riddles are correct.",
        ["February!"], { size: SZ.FICHE })],
      "Guessing / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the twelve months in order."),
       fp("2. What month is it now?"),
       fp("3. In or on? (… Monday, … June)")],
      [fp("Say. Answer."),
       pAns("E.A.: the months are in order; We are in …; on Monday, in June.",
        ["We are in"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}

// ---------- S19 — Ordinals + date ----------
function ficheS19() {
  const meta = META("The ordinal numbers — telling the date",
    "By the end of the lesson, learners will be able to use the ordinal numbers up to 31st and ask and state the date: What date is today? — Today is Monday, the 1st of April.",
    "3 / 12", "a calendar, number cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the twelve months."),
       fp("2. What month is it now?"),
       fp("3. Count from 20 to 31.")],
      [fp("Say. Answer. Count."),
       fp("E.A.: the months are in order; We are in …; twenty… thirty-one.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Line up five pupils: who is FIRST? SECOND? THIRD? — today, the numbers take a rank!")],
      [fp("Line up. Answer.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to tell the DATE like English speakers, with the ordinal numbers: first, second, third… thirty-first.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look at the blackboard: 1st = first, 2nd = second, 3rd = third, 4th = fourth… 20th = twentieth, 21st = twenty-first, 31st = thirty-first."),
       fp("Listen to the date dialogue: “What day is today? — Today is Monday, the 1st of April.”")],
      [fp("Listen. Observe the endings -st, -nd, -rd, -th.")],
      "Modelling / Audio", "Blackboard, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: most ordinals = number + th (fourth, tenth); the specials: first, second, third — and 21st, 22nd, 23rd follow the specials!"),
       fp("Transformation drill: I say “five” → say “fifth”! “twelve” → “twelfth”! “thirty” → “thirtieth”!"),
       fp("The date = day + the + ordinal + of + month: Monday, the 3rd of June.")],
      [fp("Repeat. Transform. Build dates."),
       fp("E.A.: fifth, twelfth, thirtieth; the date is built correctly.")],
      "Transformation drill", "Number cards"),
    stepRow(["5. Synthesis"],
      [fp("So: What date is today? — Today is + day, the + ordinal + of + month. What date was yesterday? — Yesterday was …")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Calendar game (from the syllabus): I point to a date at random on the calendar — tell it! Group competition."),
       fp("Short dates on the board: “12/06” — say it in words: “the twelfth of June”!")],
      [fp("Tell the dates. Compete."),
       pAns("E.A.: Today is Tuesday, the twenty-first of October. — the twelfth of June.",
        ["the twelfth of June"], { size: SZ.FICHE })],
      "Group competition", "Calendar"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say: 1st, 3rd, 5th, 12th, 21st, 31st."),
       fp("2. What date is today?"),
       fp("3. Read this short date: 02/01.")],
      [fp("Say. Answer. Read."),
       pAns("E.A.: first, third, fifth, twelfth, twenty-first, thirty-first; Today is …; the second of January.",
        ["the second of January"], { size: SZ.FICHE })],
      "Individual work", "Calendar"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}

// ---------- S20 — was/will be + big numbers ----------
function ficheS20() {
  const meta = META("Yesterday, today, tomorrow — was and will be",
    "By the end of the lesson, learners will be able to use “to be” in the past (was/were) and the future (will be) to talk about days and dates, with the sequence markers, and count to thousands and millions.",
    "4 / 12", "calendar, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What date is today?"),
       fp("2. Ordinal of: nine, twenty, thirty-one."),
       fp("3. In or on? (… the 5th of May)")],
      [fp("Answer."),
       fp("E.A.: Today is …; ninth, twentieth, thirty-first; on.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Three words on the board: YESTERDAY — TODAY — TOMORROW. Which one is the past? the present? the future?")],
      [fp("Answer.")], "Eliciting technique", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to travel in time! By the end of this lesson, you will use WAS for yesterday and WILL BE for tomorrow — and count HUGE numbers.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the date dialogue again: “What day WAS yesterday? — Yesterday WAS Sunday. What day WILL BE tomorrow? — Tomorrow WILL BE Tuesday.” Find the three tenses!")],
      [fp("Listen. Identify is / was / will be.")],
      "Audio / Eliciting", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: present — is/are; past — was/were; future — will be (all persons!). Negative: wasn’t / won’t be. Question: Was it…? Will it be…?"),
       fp("Sequence markers: first, next, after, last — “The day before Monday is Sunday. The day after Monday is Tuesday.”"),
       fp("Big numbers: 1 000 = one thousand, 1 000 000 = one million, 1 000 000 000 = one billion. Say: 2 000, 5 000 000!")],
      [fp("Repeat. Transform. Say the big numbers."),
       fp("E.A.: two thousand; five million.")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: yesterday → was, today → is, tomorrow → will be. And English big numbers: thousand, million, billion — no “s” after a number (two thousand, not two thousands)!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Time machine game in pairs: one asks with the calendar — What day was the 1st of this month? What day will be the 25th? — the other answers with was/will be."),
       fp("Transformation drill: “Today is Friday.” → say it for yesterday! → for tomorrow!")],
      [fp("Ask. Answer. Transform."),
       pAns("E.A.: Yesterday was Thursday. — Tomorrow will be Saturday.",
        ["Yesterday was Thursday."], { size: SZ.FICHE })],
      "In pairs / Transformation drill", "Calendar"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: Yesterday …… Monday. Tomorrow …… Wednesday."),
       fp("2. Say: 3 000 — 10 000 000."),
       fp("3. The day before Friday is…?")],
      [fp("Complete. Say. Answer."),
       pAns("E.A.: was; will be; three thousand, ten million; Thursday.",
        ["will be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}

// ---------- S21 — Time 1: o'clock, a.m./p.m. ----------
function ficheS21() {
  const meta = META("What time is it? — o’clock, a.m. and p.m.",
    "By the end of the lesson, learners will be able to ask and tell the time with “o’clock”, “a.m.” and “p.m.”, using a watch or a clock.",
    "5 / 12", "a clock (real or drawn), pictures of the school day");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What day was yesterday? What day will be tomorrow?"),
       fp("2. Say: 4 000 — 2 000 000."),
       fp("3. What date is today?")],
      [fp("Answer."),
       fp("E.A.: was …, will be …; four thousand, two million; Today is …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the pictures (we start school, the break, we finish class, dinner). What do they show?")],
      [fp("Observe. Tell.")], "Using pictures", "Pictures (annex)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to tell the TIME in English. By the end of this lesson, you will read the clock: It’s seven o’clock!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look (from the syllabus): We start school at 7 o’clock a.m. Our break is at a quarter past ten a.m. We finish class at half past four p.m. We have dinner at seven o’clock p.m."),
       fp("Now, from these pictures, draw the way of telling the time in English!")],
      [fp("Listen. Observe. Draw the rule together.")],
      "Eliciting technique", "Pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules: full hour → It’s + hour + o’clock. Morning → a.m.; afternoon/evening → p.m. A watch is on the arm; a clock is on the wall!"),
       fp("Compare with French: is it the same way? (language transfer)"),
       fp("Question drill: When do we start school? When do we eat dinner? — in order, then randomly!")],
      [fp("Repeat. Compare. Answer."),
       fp("E.A.: We start school at seven o’clock a.m. — We eat dinner at seven o’clock p.m.")],
      "Language transfer / Question-answer", "Clock"),
    stepRow(["5. Synthesis"],
      [fp("So: What time is it? / What’s the time? — It’s + hour + o’clock (+ a.m./p.m.). And “When do you…?” — At + time.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Clock game: I move the hands of the clock to a full hour — What time is it? The fastest row answers!"),
       fp("In pairs: When do you wake up? When do you eat dinner? — answer with a.m./p.m.")],
      [fp("Answer fast. Ask and answer in pairs."),
       pAns("E.A.: It’s nine o’clock a.m.! — I wake up at six o’clock a.m.",
        ["It’s nine o’clock"], { size: SZ.FICHE })],
      "Game / In pairs", "Clock"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What time is it? (I show three full hours)"),
       fp("2. a.m. or p.m.? (we eat dinner)"),
       fp("3. Watch or clock? (I show my arm / the wall)")],
      [fp("Answer."),
       pAns("E.A.: It’s … o’clock; p.m.; a watch / a clock.",
        ["o’clock"], { size: SZ.FICHE })],
      "Individual work", "Clock"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}

// ---------- S22 — Time 2: quarter/half past/to ----------
function ficheS22() {
  const meta = META("A quarter past, half past, a quarter to",
    "By the end of the lesson, learners will be able to tell the time with “past” and “to” (quarter, half, minutes) and with the short way (nine twenty-five).",
    "6 / 12", "a clock, flashcards showing times, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What time is it? (full hour on the clock)"),
       fp("2. a.m. or p.m.? (the break at school)"),
       fp("3. When do we start school?")],
      [fp("Answer."),
       fp("E.A.: It’s … o’clock; a.m.; At seven o’clock a.m.")],
      "Individual work", "Clock"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Cut an orange (or draw a circle): a half! a quarter! — the clock works the same way.")],
      [fp("Observe.")], "Using pictures", "Drawing"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to tell ALL the times, even 10:15 and 8:45. By the end of this lesson, no clock can resist you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the two conversations (Tony and Samantha) and repeat the time expressions: It’s midnight. Wake me up at half past five. My meeting is at nine o’clock."),
       fp("Tick the time you hear: 5:30 or 5:15?")],
      [fp("Listen. Repeat. Tick the right time.")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules with the clock picture: minutes 1–30 → past (ten past nine, a quarter past ten, half past four); minutes 31–59 → to (twenty to five, a quarter to nine)."),
       fp("The short way: It’s nine twenty-five (9:25). And the special times: noon/midday (12:00), midnight (00:00)."),
       fp("Drill with flashcards: I show a time — tell it two ways if you can!")],
      [fp("Repeat. Tell the times."),
       fp("E.A.: It’s a quarter past ten / It’s ten fifteen.")],
      "Transformation drill / Flashcards", "Clock, flashcards"),
    stepRow(["5. Synthesis"],
      [fp("So: past for the first half, to for the second half, quarter = 15, half = 30 — or simply hour + minutes: nine twenty-five!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs, with flashcards: one shows a time, the other tells it — then swap. At least six times each!"),
       fp("Role play: act the Tony and Samantha conversations with YOUR times.")],
      [fp("Show. Tell. Act."),
       pAns("E.A.: — What time is it? — It’s half past four. / It’s a quarter to nine.",
        ["half past four"], { size: SZ.FICHE })],
      "In pairs / Role play", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Tell these times: 7:00 — 10:15 — 4:30 — 8:45."),
       fp("2. Tell 9:25 the short way."),
       fp("3. What is “midnight”?")],
      [fp("Tell. Answer."),
       pAns("E.A.: seven o’clock, a quarter past ten, half past four, a quarter to nine; nine twenty-five; 00:00.",
        ["a quarter to nine"], { size: SZ.FICHE })],
      "Individual work", "Clock"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}

// ---------- S23 — Interview habits ----------
function ficheS23() {
  const meta = META("When do you…? — the time interview",
    "By the end of the lesson, learners will be able to interview schoolmates about their daily habits related to time, complete a chart and report the findings to the class.",
    "7 / 12", "interview charts in the copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Tell these times: 6:30 — 12:15 — 5:45."),
       fp("2. What time is it now (about)?"),
       fp("3. When do we finish class?")],
      [fp("Tell. Answer."),
       fp("E.A.: half past six, a quarter past twelve, a quarter to six; It’s about …; At half past four p.m.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick poll: who wakes up before six o’clock? Raise your hand!")],
      [fp("Raise hands.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today you become JOURNALISTS: you will interview your schoolmates about their time habits and report to the class!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the interview chart (from the syllabus): Questions / Answers — “When do we start school? — We start school at…” “When do you eat dinner? — I eat dinner at…” Copy it and add two questions of yours (wake up? go to bed?).")],
      [fp("Copy the chart. Add questions.")],
      "Modelling", "Blackboard, copy-books"),
    stepRow(["4. Analysis"],
      [fp("The question: When do you + verb? The answer: I + verb + at + time."),
       fp("Practise the model with me: When do you wake up? — I wake up at five o’clock.")],
      [fp("Repeat the model."),
       fp("E.A.: the question and answer forms are correct.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, a good interview: ask “When do you…?”, listen, WRITE the time in the chart — then report: “Fara eats dinner at seven o’clock.”")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Interview time! Walk in the classroom, interview THREE schoolmates, complete your chart."),
       fp("Report your findings to the class: “Koto wakes up at half past five. He eats dinner at seven o’clock p.m.”")],
      [fp("Interview. Complete the chart. Report."),
       pAns("E.A.: the chart is completed; the report uses “He/She + verb-s + at + time”.",
        ["at + time"], { size: SZ.FICHE })],
      "Interview / Personalisation", "Charts"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me a time question."),
       fp("2. Report one finding of your interview."),
       fp("3. Complete: She eats dinner …… seven o’clock.")],
      [fp("Ask. Report. Complete."),
       pAns("E.A.: When do you…? — Koto wakes up at… — at.",
        ["When do you"], { size: SZ.FICHE })],
      "Individual work", "Charts"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}

// ---------- S24 — Seasons ----------
function ficheS24() {
  const meta = META("The four seasons",
    "By the end of the lesson, learners will be able to name the four seasons with their key words and match pictures with seasons.",
    "8 / 12", "pictures of the four seasons, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. When do you wake up?"),
       fp("2. Tell the time: 3:15 p.m."),
       fp("3. What month is it now?")],
      [fp("Answer."),
       fp("E.A.: I wake up at …; It’s a quarter past three p.m.; We are in …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: circle the word that does NOT belong: book – sky – rain! (from the syllabus)")],
      [fp("Circle the intruder.")], "Game", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to discover the FOUR SEASONS. By the end of this lesson, you will match every picture to its season.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen and look at the four pictures: SUMMER — hot, rain, sun. AUTUMN — cold, red leaves. WINTER — freezing, cloud, drizzle, snow. SPRING — cool, flowers, trees, grass."),
       fp("I describe a picture — guess which one it is!")],
      [fp("Listen. Match the words to the pictures. Guess.")],
      "Using pictures / Audio", "Season pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat the seasons and their key words: the class, one row, one pupil."),
       fp("Guess the season from my GESTURE: I shiver (winter!), I fan myself (summer!)…"),
       fp("Draw the four seasons in your copy-book (one tree, four ways!).")],
      [fp("Repeat. Guess from gestures. Draw."),
       fp("E.A.: the seasons are named with their words.")],
      "Using gesture / Guessing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So: summer (hot), autumn (cold, red leaves), winter (freezing, snow), spring (cool, flowers). In Madagascar, do we have the same seasons? Let’s talk about it!")],
      [fp("Listen. Discuss.")], "Contextualisation", "----"),
    stepRow(["6. Practice"],
      [fp("Picture matching (from the syllabus): match each picture with its season — in groups, then correction together."),
       fp("Share your feeling: “In winter I am sad. In summer I am happy!” (feelings adjectives: happy, sad, angry…)")],
      [fp("Match. Share feelings."),
       pAns("E.A.: the pictures are matched; In summer I am happy.",
        ["In summer I am happy."], { size: SZ.FICHE })],
      "Group work / Personalisation", "Season pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the four seasons."),
       fp("2. Which season has red leaves? snow?"),
       fp("3. Say one feeling for one season.")],
      [fp("Name. Answer."),
       pAns("E.A.: summer, autumn, winter, spring; autumn; winter; In spring I am happy.",
        ["autumn"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}

// ---------- S25 — Weather ----------
function ficheS25() {
  const meta = META("What’s the weather like? — the -y adjectives",
    "By the end of the lesson, learners will be able to ask and describe the weather with the adjectives in -y (sunny, windy, cloudy…) and the contracted form “it’s”.",
    "9 / 12", "weather pictures or stick figures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the four seasons and one word for each."),
       fp("2. Which season do you like? (feeling)"),
       fp("3. The intruder: sun – cloud – copybook?")],
      [fp("Answer."),
       fp("E.A.: summer hot…; In … I am happy; copybook.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look out of the window! What do you see in the sky?")],
      [fp("Look. Tell.")], "Contextualisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to describe the WEATHER like the radio! By the end of this lesson, you will answer: What’s the weather like?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen: What’s the weather like? — It’s sunny. How’s the weather today? — It’s cloudy and a bit windy."),
       fp("Observe the magic: sun → sunny, wind → windy, cloud → cloudy, snow → snowy, fog → foggy… What happens to the word?")],
      [fp("Listen. Observe the formation.")],
      "Eliciting technique", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules: noun + y = adjective (sunny, foggy); verb + y too (sleepy!). And the contracted form: it is → it’s."),
       fp("Transformation drill: rain → …? snow → …? wind → …?"),
       fp("T: What’s the weather like in winter? — S: It’s cold! (from the syllabus) What’s the weather like? (pointing to a picture) — It’s …!")],
      [fp("Transform. Answer."),
       fp("E.A.: rainy, snowy, windy; It’s freezing / It’s sunny…")],
      "Transformation drill", "Weather pictures"),
    stepRow(["5. Synthesis"],
      [fp("So: What’s the weather like? / How’s the weather today? — It’s + adjective. And to make many weather adjectives: word + y!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Weather reporter game: each group gets a picture (or stick figure) and presents the weather to the class: “Good morning! Today it’s cloudy and cold. Tomorrow will be sunny!”")],
      [fp("Present the weather report."),
       pAns("E.A.: Today it’s rainy and windy. — the -y adjectives are used correctly.",
        ["It’s rainy"], { size: SZ.FICHE })],
      "Role play / Group work", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Make the adjective: sun, fog, cloud."),
       fp("2. What’s the weather like today (really)?"),
       fp("3. What’s the weather like in winter?")],
      [fp("Transform. Answer."),
       pAns("E.A.: sunny, foggy, cloudy; It’s …; It’s cold / freezing.",
        ["sunny, foggy, cloudy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}

// ---------- S26 — Idioms + favourite season ----------
function ficheS26() {
  const meta = META("Raining cats and dogs! — my favourite season",
    "By the end of the lesson, learners will be able to understand the weather idioms and describe their favourite season orally.",
    "10 / 12", "season pictures, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What’s the weather like today?"),
       fp("2. Adjective of: rain, snow."),
       fp("3. Present a 2-line weather report.")],
      [fp("Answer. Present."),
       fp("E.A.: It’s …; rainy, snowy; Today it’s …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("A funny picture in words: imagine cats and dogs falling from the sky! What can it mean?")],
      [fp("Imagine. Guess.")], "Guessing", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, two English secrets (the idioms) and YOUR favourite season. By the end of this lesson, you will speak about the season you love.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen: “It’s raining cats and dogs!” = it’s raining A LOT. “…come rain or shine” = whatever happens! Match each idiom with its season or situation.")],
      [fp("Listen. Match. Guess the meaning.")],
      "Guessing", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("When can we say “It’s raining cats and dogs” in Madagascar? (the rainy season!)"),
       fp("Model for the favourite season: “My favourite season is summer. It’s hot and sunny. I am happy. I play with my friends… come rain or shine!”")],
      [fp("Answer. Listen to the model.")],
      "Modelling / Contextualisation", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, to describe a season: the name, the weather (it’s + adjectives), my feeling (I am…), what I do. Four sentences = a beautiful description!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Personalisation: prepare and tell YOUR favourite season to your group (4 sentences or more). The group asks one question each."),
       fp("The best descriptions are told to the whole class!")],
      [fp("Describe. Ask. Tell."),
       pAns("E.A.: My favourite season is … It’s … I am … I …",
        ["My favourite season is"], { size: SZ.FICHE })],
      "Personalisation / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What does “It’s raining cats and dogs” mean?"),
       fp("2. Describe your favourite season (3 sentences)."),
       fp("3. Use “come rain or shine” in a sentence.")],
      [fp("Answer. Describe."),
       pAns("E.A.: it’s raining a lot; My favourite season is …; I go to school, come rain or shine!",
        ["raining a lot"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}

// ---------- S27 — Reading ----------
function ficheS27() {
  const meta = META("Reading: “My Monday morning”",
    "By the end of the lesson, learners will be able to read a text about date, time and weather fluently and get explicit information from it.",
    "11 / 12", "the reading text, a calendar");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Describe your favourite season."),
       fp("2. Tell the time: 8:30."),
       fp("3. What date is today?")],
      [fp("Answer."),
       fp("E.A.: My favourite season…; half past eight / eight thirty; Today is …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: observe the calendar — find today, a holiday, a special event. What information does a calendar give?")],
      [fp("Observe. Discuss.")], "Contextualisation", "Calendar"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a text with EVERYTHING inside: a date, times, weather. By the end of this lesson, you will find all its information.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: listen to the audio while following the text “My Monday morning”, then read it aloud, one sentence per pupil — with the right intonation!")],
      [fp("Listen. Follow. Read aloud.")],
      "Audio / Reading", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Get the explicit information: What time does he/she wake up? What day is it? What was yesterday? When does he/she leave? What’s the weather like?"),
       fp("Find in the text: one time, one date, two weather words, one past form (was).")],
      [fp("Answer. Find."),
       fp("E.A.: seven o’clock; Monday, the 3rd of June; Sunday; eight thirty; cloudy, windy; was.")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, a text about a day tells: the date, the times, the weather — exactly what we learned in this unit!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Post-reading: compare — in June, is it cold in Madagascar? And in an Anglophone country like England? (their summer!) Discuss."),
       fp("Use the calendar: find the 3rd of June — what day is it THIS year?")],
      [fp("Compare. Use the calendar."),
       pAns("E.A.: in Madagascar June is the cool season; in England June is summer!",
        ["cool season"], { size: SZ.FICHE })],
      "Contextualisation", "Calendar"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read five sentences of the text."),
       fp("2. Two information questions (time, weather)."),
       fp("3. Find the future form… is there one? (No — but say the tomorrow sentence yourself!)")],
      [fp("Read. Answer. Create."),
       pAns("E.A.: the reading is fluent; It’s seven o’clock, it’s cloudy; Tomorrow will be Tuesday!",
        ["Tomorrow will be Tuesday!"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}

// ---------- S28 — Writing ----------
function ficheS28() {
  const meta = META("Writing: my favourite season and weather",
    "By the end of the lesson, learners will be able to write correct sentences about date, time, seasons and weather, and a short paragraph about their favourite season.",
    "12 / 12", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read two sentences of “My Monday morning”."),
       fp("2. Spell “weather”."),
       fp("3. What’s the weather like today?")],
      [fp("Read. Spell. Answer."),
       fp("E.A.: fluent reading; W-E-A-T-H-E-R; It’s …")],
      "Individual work", "Text"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: unscramble the letters — “nusny” (sunny!), “retwin” (winter!). Unscramble the words: “cold / is / it / today”.")],
      [fp("Unscramble.")], "Unscrambling", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE about our favourite season. By the end of this lesson, your paragraph will be read to the class!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Dictation: “Today is Monday, the 3rd of June.” “It’s half past eight.” “It’s cloudy and windy.” — write, then peer correction with the model on the blackboard."),
       fp("Match the vocabulary items with the stick figures (sun, cloud, rain…).")],
      [fp("Write. Correct one another. Match.")],
      "Dictation / Peer correction", "Copy-books"),
    stepRow(["4. Analysis"],
      [fp("Complete the blanks to get a paragraph: “My favourite season is ……. It’s …… and ……. I am ……. I …… with my friends.”"),
       fp("Check together: capital letters (days, months!), punctuation, it’s + adjective.")],
      [fp("Complete. Check the rules."),
       fp("E.A.: the paragraph is completed correctly.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, our writing plan: 1. my season — 2. its weather — 3. my feeling — 4. what I do. With capitals and periods!")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("While-writing: write YOUR paragraph (4 sentences or more) about your favourite season and its weather."),
       fp("Check your writing in pairs (peer correction)."),
       fp("Post-writing: read your paragraph aloud to the class!")],
      [fp("Write. Correct in pairs. Read aloud."),
       pAns("E.A.: My favourite season is summer. It’s hot and sunny. I am happy. I swim with my friends.",
        ["My favourite season is summer."], { size: SZ.FICHE })],
      "Personalisation / Peer correction", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write the date of today (full words)."),
       fp("2. Write one weather sentence with an -y adjective."),
       fp("3. Read your paragraph.")],
      [fp("Write. Read."),
       pAns("E.A.: Today is …, the … of …; It’s sunny.; the paragraph is read.",
        ["It’s sunny."], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("TIME AND WEATHER"),
    sub("1. The days and the months (capital letters!)"),
    grid(DAYS, 4),
    p("", { after: 60 }),
    grid(MONTHS, 4),
    p("", { after: 60 }),
    songBox(),
    p("", { after: 100 }),
    sub("2. The ordinal numbers and the date"),
    grid(ORDINALS.map(([a, b]) => [a ? `${a} — ${b}` : "", ""]), 4),
    p("", { after: 60 }),
    dateDialogueBox(),
    p("", { after: 60 }),
    pr([run("The rule: ", { bold: true }), run("on", { bold: true, color: C.BLUE }), run(" + day (on Monday) — "), run("in", { bold: true, color: C.BLUE }), run(" + month (in June).")]),
    pr([run("The three tenses of TO BE: ", { bold: true }), run("yesterday → was", { bold: true, color: C.BLUE }), run(" — "), run("today → is", { bold: true, color: C.BLUE }), run(" — "), run("tomorrow → will be", { bold: true, color: C.BLUE })]),
    pr([run("The sequence markers: ", { bold: true }), run("first, next, after, last — the day before / the day after", { bold: true, color: C.BLUE })], { after: 60 }),
    pr([run("The big numbers: ", { bold: true }), ...kw("one thousand (1 000)", "ouane saouzande"), run("  "), ...kw("one million", "ouane milieune"), run("  "), ...kw("one billion", "ouane bilieune")], { after: 100 }),
    sub("3. Telling the time"),
    img("u3_clocks.png", 460, 768 / 1408),
    pr([...kw("What time is it? / What’s the time?", "ouate taïme iz ite"), run("  →  "), ...kw("It’s seven o’clock.", "its sèvène oklok")]),
    pr([run("Minutes 1–30: "), run("past", { bold: true, color: C.BLUE }), run(" — ten past nine, a quarter past ten, half past four.")]),
    pr([run("Minutes 31–59: "), run("to", { bold: true, color: C.BLUE }), run(" — twenty to five, a quarter to nine.")]),
    pr([run("The short way: "), ...kw("It’s nine twenty-five.", "its naïne touènti-faïv")]),
    pr([run("Morning: "), run("a.m.", { bold: true, color: C.BLUE }), run(" — afternoon and evening: "), run("p.m.", { bold: true, color: C.BLUE }), run("  Special: "), ...kw("noon", "noune"), run(" (12:00), "), ...kw("midnight", "midnaïte"), run(" (00:00).")]),
    pr([run("On the arm: "), ...kw("a watch", "e ouotch"), run(" — on the wall: "), ...kw("a clock", "e klok")], { after: 60 }),
    timeConvBox(),
    p("", { after: 100 }),
    sub("4. The four seasons"),
    img("u3_seasons.png", 440, 768 / 1408),
    ...SEASONS.map(([s, pn, words]) =>
      pr([...kw(s, pn), run("  →  "), run(words, { italic: true, color: C.GRAY })], { after: 30 })),
    p("", { after: 80 }),
    sub("5. The weather"),
    pr([...kw("What’s the weather like?", "ouots ze ouèzeur laïk"), run("  /  "), ...kw("How’s the weather today?", "haouz ze ouèzeur toudé"), run("  →  "), ...kw("It’s sunny!", "its seuni")], { after: 40 }),
    grid(WEATHER_ADJ, 4),
    p("", { after: 40 }),
    pr([run("The magic rule: ", { bold: true }), run("word + y = adjective", { bold: true, color: C.BLUE }), run("  →  sun → sunny, fog → foggy, sleep → sleepy!")]),
    pr([run("The feelings: ", { bold: true }), run("to be happy, sad, angry…", { bold: true, color: C.BLUE })], { after: 60 }),
    pr([run("The idioms: ", { bold: true }), run("It’s raining cats and dogs!", { bold: true, color: C.BLUE }), run(" = it’s raining a lot — "), run("…come rain or shine", { bold: true, color: C.BLUE }), run(" = whatever happens.")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u3_days.png", label: "Days, months and the date — listen and repeat", url: AUDIO.days },
      { qr: "qr_t6_u3_time.png", label: "Telling the time — listen and repeat", url: AUDIO.time },
      { qr: "qr_t6_u3_weather.png", label: "Seasons and weather — listen and repeat", url: AUDIO.weather },
    ], COLOR),
  ];
}

// ---------- lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 50 });
  return [
    p([run("READING — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("MY MONDAY MORNING", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("This morning, I wake up and look at my watch. It’s seven o’clock. I feel a little cold, so I stay in bed for a few minutes. Then I ask, “What day is today?” It is Monday, the 3rd of June. Yesterday was Sunday, and I was at home with my family."),
        L("After that, I get ready for school and leave at eight thirty. Outside, the weather is cloudy and a bit windy. I ask my friend, “How’s the weather today?” She says, “It’s not very nice, but it’s okay.” We laugh and walk to school together."),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("What time does she wake up? What date is it? What was yesterday? When does she leave? What’s the weather like?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u3_reading.png", label: "My Monday morning — listen and read", url: AUDIO.reading }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Write the date of today in full words, then the ordinals: 3rd, 12th, 21st, 31st.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: was, is or will be? 1. Yesterday …… Tuesday. 2. Today …… Wednesday. 3. Tomorrow …… Thursday. 4. Last Sunday I …… at home.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Tell (or write) these times: 6:00 — 9:15 — 2:30 — 7:45.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Make the -y adjectives and complete: sun → It’s …… ; rain → It’s …… ; cloud → It’s …… ; wind → It’s …… .")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences about your favourite season.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Today is …, the … of … — third, twelfth, twenty-first, thirty-first (0.5 point each ordinal).", ["third, twelfth"]),
    pAns("Exercise 2: 1. was  2. is  3. will be  4. was (1 point each).", ["will be"]),
    pAns("Exercise 3: six o’clock — a quarter past nine — half past two — a quarter to eight (1 point each).", ["a quarter past nine"]),
    pAns("Exercise 4: sunny — rainy — cloudy — windy (1 point each).", ["sunny — rainy"]),
    pAns("Exercise 5: My favourite season is … It’s … I am … I … (1 point per correct sentence).", ["My favourite season is"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s29", "SESSION 29 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: TIME AND WEATHER", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the days and the weather words:", { after: 100 }),
    grid(DAYS, 4),
    p("", { after: 60 }),
    grid(WEATHER_ADJ, 4),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Sing the days song, then say the twelve months."),
    pAns("E.A.: the song and the months are correct.", ["the months are correct"]),
    p("2. What date is today? What day was yesterday? What day will be tomorrow?"),
    pAns("E.A.: Today is …, the … of … — Yesterday was … — Tomorrow will be …", ["Tomorrow will be"]),
    p("3. Say the ordinals: 1st, 2nd, 3rd, 5th, 20th, 31st."),
    pAns("E.A.: first, second, third, fifth, twentieth, thirty-first.", ["thirty-first"]),
    p("4. Tell these times: 7:00 — 10:15 — 4:30 — 8:45 — 9:25."),
    pAns("E.A.: seven o’clock, a quarter past ten, half past four, a quarter to nine, nine twenty-five.", ["nine twenty-five"]),
    p("5. When do you wake up? When do we start school?"),
    pAns("E.A.: I wake up at … — At seven o’clock a.m.", ["I wake up at"]),
    p("6. Name the four seasons with two words each."),
    pAns("E.A.: summer — hot, sun; autumn — cold, red leaves; winter — freezing, snow; spring — cool, flowers.", ["freezing"]),
    p("7. What’s the weather like today? And in winter?"),
    pAns("E.A.: It’s … — It’s cold/freezing.", ["It’s"]),
    p("8. What does “It’s raining cats and dogs” mean?"),
    pAns("E.A.: it’s raining a lot.", ["raining a lot"]),
    p("9. Describe your favourite season (4 sentences)."),
    pAns("E.A.: My favourite season is … It’s … I am … I …", ["My favourite season"]),
    p("10. Say: 2 000 — 3 000 000 — 1 000 000 000."),
    pAns("E.A.: two thousand, three million, one billion.", ["one billion"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s30", "SESSION 30 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 3: TIME AND WEATHER", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: answer — What day is today? What date is today? What day was yesterday? What day will be tomorrow?")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Write these times in words: 8:00 — 11:15 — 3:30 — 6:45.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete with the right adjective: 1. There is a lot of sun: it’s …… 2. There is a lot of wind: it’s …… 3. In winter, it’s …… 4. There are clouds: it’s ……")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Read the text “My Monday morning” and answer two questions (time and weather).")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (4 sentences) about your favourite season.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Today is … — Today is …, the … of … — Yesterday was … — Tomorrow will be … (1 point each).", ["Yesterday was"]),
    pAns("Exercise 2: eight o’clock — a quarter past eleven — half past three — a quarter to seven (1 point each).", ["half past three"]),
    pAns("Exercise 3: 1. sunny  2. windy  3. cold/freezing  4. cloudy (1 point each).", ["cloudy"]),
    pAns("Exercise 4: It’s seven o’clock / eight thirty — cloudy and a bit windy (2 points each).", ["cloudy and a bit windy"]),
    pAns("Exercise 5: 4 correct sentences with capitals and punctuation (1 point each).", ["capitals"]),
  ];
}

// ---------- leçons du jour (une par fiche) ----------
function dayLesson(sessionNo, title, children) {
  return [
    p([run(`LESSON OF THE DAY — SESSION ${sessionNo}`, { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    ...children,
  ];
}
function lessonS17() {
  return dayLesson(17, "THE DAYS OF THE WEEK", [
    grid(DAYS, 4),
    p("", { after: 60 }),
    pr([run("The rules:", { bold: true })], { after: 30 }),
    bullet([run("A CAPITAL letter always: Monday, not monday!")]),
    bullet([run("on", { bold: true, color: C.BLUE }), run(" + day: on Monday I go to school, on Sunday I rest.")]),
    bullet([run("The weekend = Saturday and Sunday; the week days = Monday to Friday.")], { after: 60 }),
    pr([run("The question:", { bold: true })], { after: 30 }),
    bullet([...kw("What day is it today?", "ouate déi iz ite toudé"), run("  →  "), ...kw("It’s Tuesday.", "its tiouzdé")], { after: 60 }),
    songBox(),
  ]);
}
function lessonS18() {
  return dayLesson(18, "THE TWELVE MONTHS", [
    img("u3_calendar.png", 360, 768 / 1408),
    grid(MONTHS, 4),
    p("", { after: 60 }),
    pr([run("The rules:", { bold: true })], { after: 30 }),
    bullet([run("A CAPITAL letter always: June, not june!")]),
    bullet([run("in", { bold: true, color: C.BLUE }), run(" + month: my birthday is in June; school starts in September.")]),
    bullet([run("The seasons of the months: December–February = summer in Madagascar!", { italic: true, color: C.GRAY, size: 24 })], { after: 60 }),
    pr([run("The questions:", { bold: true })], { after: 30 }),
    bullet([...kw("What month is it now?", "ouate meunce iz ite naou"), run("  →  "), ...kw("It’s September.", "its sèptèmbeur")]),
    bullet([...kw("When is your birthday?", "ouène iz iôr beursdé"), run("  →  "), ...kw("It’s in June!", "its ine djoune")]),
  ]);
}
function lessonS19() {
  return dayLesson(19, "THE ORDINAL NUMBERS — THE DATE", [
    grid(ORDINALS.map(([a, b]) => [a ? `${a} — ${b}` : "", ""]), 4),
    p("", { after: 60 }),
    pr([run("The rules:", { bold: true })], { after: 30 }),
    bullet([run("number + th", { bold: true, color: C.BLUE }), run(": fourth, tenth, twentieth…")]),
    bullet([run("But "), run("1st first, 2nd second, 3rd third", { bold: true, color: C.RED }), run(" are special!")]),
    bullet([run("Careful: ", { bold: true, color: C.RED }), run("21st twenty-first, 31st thirty-first — the little word wins at the end.")]),
    bullet([run("The date: "), run("on", { bold: true, color: C.BLUE }), run(" + date: my birthday is on June 10th [djoune ze tènce].")], { after: 60 }),
    dateDialogueBox(),
  ]);
}
function lessonS20() {
  return dayLesson(20, "YESTERDAY, TODAY, TOMORROW", [
    pr([run("The three tenses of TO BE:", { bold: true })], { after: 30 }),
    bullet([run("yesterday → was", { bold: true, color: C.BLUE }), run(":  "), ...kw("Yesterday was Sunday.", "yèsteudé ouoz seundé")]),
    bullet([run("today → is", { bold: true, color: C.BLUE }), run(":  "), ...kw("Today is Monday.", "toudé iz meundé")]),
    bullet([run("tomorrow → will be", { bold: true, color: C.BLUE }), run(":  "), ...kw("Tomorrow will be Tuesday.", "toumorôou ouil bi tiouzdé")], { after: 60 }),
    pr([run("The sequence markers:", { bold: true })], { after: 30 }),
    bullet([run("first, next, after, last", { bold: true, color: C.BLUE }), run(" — the day before Monday is Sunday; the day after Monday is Tuesday.")], { after: 60 }),
    pr([run("The big numbers:", { bold: true })], { after: 30 }),
    bullet([...kw("one thousand (1 000)", "ouane saouzande"), run("   "), ...kw("one million", "ouane milieune"), run("   "), ...kw("one billion", "ouane bilieune")]),
    bullet([run("Example: "), run("There are three hundred and sixty-five days in one year!", { bold: true, color: C.BLUE })]),
  ]);
}
function lessonS21() {
  return dayLesson(21, "WHAT TIME IS IT? — O’CLOCK, A.M. AND P.M.", [
    img("u3_clocks.png", 380, 768 / 1408),
    pr([run("The question:", { bold: true })], { after: 30 }),
    bullet([...kw("What time is it? / What’s the time?", "ouate taïme iz ite"), run("  →  "), ...kw("It’s seven o’clock.", "its sèvène oklok")], { after: 60 }),
    pr([run("The day in two halves:", { bold: true })], { after: 30 }),
    bullet([run("Morning: "), run("a.m.", { bold: true, color: C.BLUE }), run(" — 7 a.m. = seven in the morning.")]),
    bullet([run("Afternoon and evening: "), run("p.m.", { bold: true, color: C.BLUE }), run(" — 7 p.m. = seven in the evening.")]),
    bullet([run("Special: "), ...kw("noon", "noune"), run(" (12:00) and "), ...kw("midnight", "midnaïte"), run(" (00:00).")], { after: 60 }),
    bullet([run("On the arm: "), ...kw("a watch", "e ouotch"), run("  —  on the wall: "), ...kw("a clock", "e klok")], { after: 60 }),
    audioBox([{ qr: "qr_t6_u3_time.png", label: "Telling the time — listen and repeat", url: AUDIO.time }], COLOR),
  ]);
}
function lessonS22() {
  return dayLesson(22, "A QUARTER PAST, HALF PAST, A QUARTER TO", [
    pr([run("The two halves of the clock:", { bold: true })], { after: 30 }),
    bullet([run("Minutes 1–30: ", { bold: true }), run("past", { bold: true, color: C.BLUE }), run(" — ten past nine (9:10), a quarter past ten (10:15).")]),
    bullet([run("half past", { bold: true, color: C.BLUE }), run(" = 30 minutes: half past four (4:30).")]),
    bullet([run("Minutes 31–59: ", { bold: true }), run("to", { bold: true, color: C.BLUE }), run(" — twenty to five (4:40), a quarter to nine (8:45).")], { after: 60 }),
    pr([run("The short way:", { bold: true })], { after: 30 }),
    bullet([...kw("It’s nine twenty-five.", "its naïne touènti-faïv"), run(" — we just read the numbers!")], { after: 60 }),
    timeConvBox(),
  ]);
}
function lessonS23() {
  return dayLesson(23, "WHEN DO YOU…? — THE TIME INTERVIEW", [
    pr([run("The interview questions:", { bold: true })], { after: 30 }),
    bullet([...kw("When do you get up?", "ouène dou iou guète eup"), run("  →  "), ...kw("At six o’clock.", "ate siks oklok")]),
    bullet([...kw("When do you go to school?", "ouène dou iou gôou tou skoule"), run("  →  "), ...kw("At half past seven.", "ate hâf paste sèvène")]),
    bullet([...kw("When do you have lunch?", "ouène dou iou hav leunntch"), run("  →  "), ...kw("At noon!", "ate noune")], { after: 60 }),
    pr([run("The three little words:", { bold: true })], { after: 30 }),
    bullet([run("at", { bold: true, color: C.BLUE }), run(" + time: at noon, at six o’clock.")]),
    bullet([run("on", { bold: true, color: C.BLUE }), run(" + day: on Friday, on Monday morning.")]),
    bullet([run("in", { bold: true, color: C.BLUE }), run(" + month or season: in June, in winter.")], { after: 60 }),
    bullet([run("For the interview, I note the answers and report: ", { italic: true, color: C.GRAY, size: 24 }), run("She gets up at six.", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS24() {
  return dayLesson(24, "THE FOUR SEASONS", [
    img("u3_seasons.png", 380, 768 / 1408),
    ...SEASONS.map(([s, pn, words]) =>
      pr([...kw(s, pn), run("  →  "), run(words, { italic: true, color: C.GRAY })], { after: 30 })),
    p("", { after: 40 }),
    pr([run("The rules:", { bold: true })], { after: 30 }),
    bullet([run("in", { bold: true, color: C.BLUE }), run(" + season: in summer it is hot; in winter it is cold.")]),
    bullet([run("The seasons stay small (no capital letter): summer, winter.")]),
    bullet([run("The question: "), ...kw("What season do you like?", "ouate sizeune dou iou laïk"), run("  →  "), ...kw("I like spring!", "aï laïk sprinng")]),
  ]);
}
function lessonS25() {
  return dayLesson(25, "WHAT’S THE WEATHER LIKE?", [
    img("u3_weather.png", 380, 768 / 1408),
    pr([run("The two questions:", { bold: true })], { after: 30 }),
    bullet([...kw("What’s the weather like?", "ouots ze ouèzeur laïk"), run("  →  "), ...kw("It’s sunny!", "its seuni")]),
    bullet([...kw("How’s the weather today?", "haouz ze ouèzeur toudé"), run("  →  "), ...kw("It’s cloudy and windy.", "its klaoudi annde ouinndi")], { after: 40 }),
    grid(WEATHER_ADJ, 4),
    p("", { after: 40 }),
    pr([run("The magic rule:", { bold: true })], { after: 30 }),
    bullet([run("word + y = adjective", { bold: true, color: C.BLUE }), run("  →  sun → sunny, wind → windy, fog → foggy, rain → rainy!")]),
    bullet([run("We always start with "), run("It’s …", { bold: true, color: C.BLUE }), run(" — It’s hot! It’s cold! It’s raining!")]),
  ]);
}
function lessonS26() {
  return dayLesson(26, "RAINING CATS AND DOGS! — MY FAVOURITE SEASON", [
    pr([run("The idioms:", { bold: true })], { after: 30 }),
    bullet([run("It’s raining cats and dogs!", { bold: true, color: C.BLUE }), run(" = it’s raining a lot!")]),
    bullet([run("…come rain or shine", { bold: true, color: C.BLUE }), run(" = whatever happens.")], { after: 60 }),
    pr([run("The feelings and the weather:", { bold: true })], { after: 30 }),
    bullet([run("to be happy, sad, angry, sleepy…", { bold: true, color: C.BLUE }), run(" — the weather changes my feelings!")]),
    bullet([run("Example: "), run("It is rainy, so I am sleepy. It is sunny, so I am happy!", { bold: true, color: C.BLUE })], { after: 60 }),
    pr([run("My favourite season:", { bold: true })], { after: 30 }),
    bullet([...kw("My favourite season is spring, because it is cool and there are flowers.", "maï féivrite sizeune iz sprinng")]),
    bullet([run("The word "), run("because", { bold: true, color: C.BLUE }), run(" gives the reason — always add it!")]),
  ]);
}
function lessonS27() {
  return dayLesson(27, "READING DAY: “MY MONDAY MORNING”", [
    pr([run("The key words of the text:", { bold: true })], { after: 30 }),
    bullet([...kw("to wake up", "tou ouéik eup"), run("  —  to open the eyes in the morning")]),
    bullet([...kw("a watch", "e ouotch"), run("  —  the little clock on the arm")]),
    bullet([...kw("cloudy", "klaoudi"), run("  and  "), ...kw("windy", "ouinndi"), run("  —  two weather words")], { after: 60 }),
    pr([run("How to read well:", { bold: true })], { after: 30 }),
    bullet([run("Find the day, the date and the times.")]),
    bullet([run("Watch the tenses: was = yesterday, is = today.")]),
    bullet([run("Read the dialogue lines with a friendly voice.")], { after: 60 }),
    bullet([run("The text uses everything of Unit 3: the date, the time, was/is, and the weather!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS28() {
  return dayLesson(28, "WRITING DAY: MY FAVOURITE SEASON", [
    pr([run("The plan of my paragraph:", { bold: true })], { after: 30 }),
    bullet([run("1. My favourite season is…")]),
    bullet([run("2. because… (the reason).")]),
    bullet([run("3. The weather: it is…, it is…")]),
    bullet([run("4. What I do: I play…, I visit…, I drink…")], { after: 60 }),
    pr([run("The writing rules:", { bold: true })], { after: 30 }),
    bullet([run("A CAPITAL letter for the months and the days (June, Monday).")]),
    bullet([run("But the seasons themselves stay small: summer, winter!")], { after: 60 }),
    pr([run("Model:", { bold: true })], { after: 30 }),
    pr([run("My favourite season is winter, because it is cool. It is often cloudy and foggy in Antananarivo. I drink hot milk and I read books.", { italic: true })]),
  ]);
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS17(), pageBreak(), ...lessonS17(), pageBreak(),
    ...ficheS18(), pageBreak(), ...lessonS18(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can say the days and the months (with capital letters).",
      "I can tell the date with the ordinal numbers (1st to 31st).",
      "I can use was, is and will be.",
      "I can count to thousands, millions and billions.",
      "I can tell the time: o’clock, quarter/half past, quarter to, a.m./p.m.",
      "I can name the four seasons and describe the weather.",
      "I can make -y adjectives: sun → sunny.",
      "I can read and write about time, seasons and weather.",
    ], "Well done! See you in Unit 4: EVERYDAY MEALS!"),
  ];
};
module.exports.COLOR = COLOR;
