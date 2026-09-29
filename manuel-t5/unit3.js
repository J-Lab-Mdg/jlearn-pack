// T5 — UNIT 3 — CLASSROOM LANGUAGE (2 séances + révision + test) — Sessions 10 à 13 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "00838F"; // bleu canard
const TOTAL = 49;
const AUDIO = {
  commands: "https://drive.google.com/uc?export=download&id=1k4mXIALWcMYHQ9AMSpFzhNucvSruYH6m",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — CLASSROOM LANGUAGE", title, slo,
  values: "care for others, tolerance", session, materials,
});
const COMMANDS = [
  ["Go to the blackboard!", "gôou tou ze blakbôrd"],
  ["Clean the blackboard!", "kline ze blakbôrd"],
  ["Open the door!", "ôoupeune ze dôr"],
  ["Close the door!", "klôouz ze dôr"],
  ["Open your copybook!", "ôoupeune iôr kopibouk"],
  ["Close your copybook!", "klôouz iôr kopibouk"],
  ["Open the windows!", "ôoupeune ze ouindôouz"],
  ["Close the windows!", "klôouz ze ouindôouz"],
  ["Go to the library!", "gôou tou ze laïbreri"],
  ["Go to the cafeteria!", "gôou tou ze kafétiria"],
  ["Have a break!", "hav e bréik"],
];
function commandTable() {
  const rows = [];
  for (let i = 0; i < COMMANDS.length; i += 2) {
    const pair = COMMANDS.slice(i, i + 2);
    rows.push(new TableRow({ children: pair.concat(pair.length < 2 ? [null] : []).map((c) =>
      c ? cell([
        p([run(c[0], { bold: true, color: C.BLUE, size: SZ.BODY })], { after: 10 }),
        p([run(`[${c[1]}]`, { italic: true, color: C.GRAY, size: 20 })], { after: 20 }),
      ], { w: 5200, vAlign: VerticalAlign.CENTER })
        : cell([p("")], { w: 5200 }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 3 — CLASSROOM LANGUAGE", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("Open your copybook!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_commands.png", 400, 768 / 1416),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• understand and follow the classroom commands;"),
    p("• give the commands to my friends;"),
    p("• read the commands and match them with pictures.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("care for others, tolerance.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "DFF3F5" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned: Stand up! Sit down! Listen! Repeat! Look!"),
          p("Play “Simon says” with these commands to warm up!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u3_commands.png", label: "Classroom commands — listen and act", url: AUDIO.commands }], COLOR),
  ];
}

function ficheS10() {
  const meta = META("The classroom commands",
    "By the end of the lesson, learners will be able to understand the classroom commands and act them out correctly.",
    "1 / 2", "the classroom (door, windows, blackboard), copybooks, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Commands from T4.) Do what I say:"),
       fp("1. Stand up! — Sit down!"),
       fp("2. Look at the blackboard!"),
       fp("3. Listen and repeat: “See you!”")],
      [fp("Act. Repeat."),
       fp("E.A.: the commands are followed."),
       fp("E.A.: “See you!” is repeated.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher opens the door and says nothing, then looks at the class.) What did I do? Today, the classroom speaks English!")],
      [fp("Look. Answer in their own words.")],
      "Miming", "The classroom"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The classroom commands ». By the end of this lesson, you will be able to understand and follow the commands in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Watch and listen. (The teacher says each command and DOES it:) Go to the blackboard! Clean the blackboard! Open the door! Close the door! Open your copybook! Close your copybook! Open the windows! Close the windows! Go to the library! Go to the cafeteria! Have a break!")],
      [fp("Look. Listen.")], "Modelling / Miming", "The classroom, a copybook"),
    stepRow(["4. Analysis"],
      [fp("Repeat each command with the gesture: the class, one row, one pupil."),
       fp("I say a command: one pupil does it."),
       fp("I do an action: say the command."),
       fp("What is the opposite of “Open the door!”?")],
      [fp("Repeat. Act. Say."),
       fp("E.A.: the actions match the commands."),
       fp("E.A.: Close the door!")],
      "Repetition drill / T.P.R. (act it out)", "The classroom"),
    stepRow(["5. Synthesis"],
      [fp("So, in the classroom we can say: Go to…! Clean…! Open…! Close…! Have a break! The command starts with the action word.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game “Teacher says” (like Simon says): if I say “Teacher says: open your copybook!”, do it. If I only say “Open your copybook!”, do NOT move!"),
       fp("Speed round: faster and faster!")],
      [fp("Play. Act."),
       pAns("E.A.: the pupils act only after “Teacher says”; the actions are right.",
        ["Teacher says"], { size: SZ.FICHE })],
      "Game (“Teacher says”)", "The classroom"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I say three commands: act them out."),
       fp("2. I mime two actions: say the commands."),
       fp("3. Give one command to the class.")],
      [fp("Act. Say. Command."),
       pAns("E.A.: the actions and the commands match: Open the windows! / Go to the blackboard!…",
        ["Open the windows!", "Go to the blackboard!"], { size: SZ.FICHE })],
      "Individual work", "The classroom"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}

function ficheS11() {
  const meta = META("I read and give the commands",
    "By the end of the lesson, learners will be able to read the commands, match them with pictures and give the commands to their friends.",
    "2 / 2", "command cards (words), picture cards, the classroom");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Do what I say:"),
       fp("1. Open your copybook!"),
       fp("2. Close the windows!"),
       fp("3. What do I say before the pause? (mime resting)")],
      [fp("Act. Answer."),
       fp("E.A.: the actions are done."),
       fp("3. Have a break!")],
      "Whole-class work", "The classroom"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick game of “Teacher says” with the commands of the last session.")],
      [fp("Play.")], "Game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today you will READ the commands and GIVE the commands yourselves. You are the teachers today!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the commands written on the blackboard. Listen to me reading them, one by one, finger under the words.")],
      [fp("Look. Listen. Follow with the eyes.")],
      "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read the commands after me: all together, by rows, then alone."),
       fp("Matching: on one side the pictures, on the other side the command cards. Come and match a picture with its command, then read it."),
       fp("Which word says the action in “Clean the blackboard!”?")],
      [fp("Read. Match."),
       fp("E.A.: the pictures and the commands match; the command is read."),
       fp("E.A.: “Clean”.")],
      "Matching / “Visual aids”", "Picture cards, command cards"),
    stepRow(["5. Synthesis"],
      [fp("So, we can read the commands and we know: the first word is the action (Go, Clean, Open, Close, Have).")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: pupil A picks a command card, reads it aloud; pupil B does the action. Then change roles."),
       fp("Group game: one pupil is “the teacher” and gives three commands to the group; the group acts. Everyone has a turn to be the teacher!")],
      [fp("Read. Act. Command."),
       pAns("E.A.: the commands are read and given clearly; the actions are right: Go to the library!…",
        ["Go to the library!"], { size: SZ.FICHE })],
      "In pairs / Group work", "Command cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read two command cards."),
       fp("2. Give two commands to the class."),
       fp("3. Match three pictures with three commands.")],
      [fp("Read. Command. Match."),
       pAns("E.A.: the reading is fluent; the commands are given clearly; the matching is right.",
        ["reading is fluent"], { size: SZ.FICHE })],
      "Individual work", "Cards"),
  ];
  return fiche(11, TOTAL, meta, rows, "s11");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("CLASSROOM LANGUAGE"),
    sub("1. The commands"),
    img("u3_commands.png", 380, 768 / 1416),
    commandTable(),
    p("", { after: 100 }),
    sub("2. How does a command work?"),
    pr([run("The command starts with the "), run("action word", { bold: true, color: C.BLUE }),
        run(": "), run("Go", { bold: true }), run(" — "), run("Clean", { bold: true }),
        run(" — "), run("Open", { bold: true }), run(" — "), run("Close", { bold: true }),
        run(" — "), run("Have", { bold: true }), run(".")], { after: 100 }),
    pr([run("Opposites: ", { bold: true }), run("Open the door! ", { bold: true, color: C.BLUE }),
        run("⇄ "), run("Close the door!", { bold: true, color: C.BLUE })], { after: 140 }),
    sub("3. Be polite!"),
    pr([run("With a friend, you can add "), run("please", { bold: true, color: C.BLUE }),
        run(" [pliz]: "), run("Open the door, please!", { italic: true })], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u3_commands.png", label: "Classroom commands — listen and act", url: AUDIO.commands },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher says five commands: act them out.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("The teacher mimes five actions: say the commands.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Match the pictures with the commands and read them.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Say the opposites:")]),
    p("1. Open the door! → ……"),
    p("2. Close your copybook! → ……"),
    p("3. Open the windows! → ……"),
    p("4. Close the door! → ……"),
    p("5. Open your copybook! → ……", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five actions match the commands (1 point each).", ["five actions"]),
    pAns("Exercise 2: the five commands match the mimes (1 point each).", ["five commands"]),
    pAns("Exercise 3: the pictures and the commands match; the reading is right (1 point each).", ["match"]),
    pAns("Exercise 4: 1. Close the door! 2. Open your copybook! 3. Close the windows! 4. Open the door! 5. Close your copybook!",
      ["Close the door!", "Open your copybook!", "Close the windows!"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s12", "SESSION 12 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: CLASSROOM LANGUAGE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the commands:", { after: 100 }),
    commandTable(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The teacher says five commands: act them out."),
    pAns("E.A.: the actions are right.", ["actions are right"]),
    p("2. Give three commands to a friend."),
    pAns("E.A.: Go to the blackboard! / Open the door! / Have a break!…", ["Go to the blackboard!"]),
    p("3. Say the opposite: Open the windows!"),
    pAns("E.A.: Close the windows!", ["Close the windows!"]),
    p("4. Read four command cards."),
    pAns("E.A.: the commands are read fluently.", ["read fluently"]),
    p("5. Play one round of “Teacher says” with your group."),
    pAns("E.A.: the game is played; the actions follow only “Teacher says”.", ["Teacher says"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s13", "SESSION 13 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 3: CLASSROOM LANGUAGE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher says five commands: act them out.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("The teacher mimes five actions: say the commands.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Read five command cards.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Say the opposite of five commands said by the teacher.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the actions match the commands (1 point each).", ["actions match"]),
    pAns("Exercise 2: the commands match the mimes (1 point each).", ["commands match"]),
    pAns("Exercise 3: the reading is fluent and correct (1 point each).", ["reading is fluent"]),
    pAns("Exercise 4: Open ⇄ Close correctly used (1 point each).", ["Open", "Close"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS10(), pageBreak(),
    ...ficheS11(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can understand the classroom commands.",
      "I can act out the commands.",
      "I can give the commands to my friends.",
      "I can read the commands.",
    ], "Well done! See you in Unit 4: PARTS OF THE BODY!"),
  ];
};
module.exports.COLOR = COLOR;
