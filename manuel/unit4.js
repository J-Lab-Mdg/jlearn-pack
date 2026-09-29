// UNIT 4 — CLASSROOM LANGUAGE (2 séances + révision + test) — Sessions 18 à 21 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "C0504D"; // brique
const TOTAL = 57;
const AUDIO = {
  commands: "https://drive.google.com/uc?export=download&id=1oeU_-z2JGD7PNLX1ORtTxZmK9MhpjvAF",
  permission: "https://drive.google.com/uc?export=download&id=1umZszJYwRUWDQ1EA63K5NdQCQ71GEMKE",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — CLASSROOM LANGUAGE", title, slo,
  values: "responsibility, self-confidence", session, materials,
});

function opening() {
  return [
    unitBanner("UNIT 4 — CLASSROOM LANGUAGE", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Stand up! Sit down! Listen!", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u4_classroom.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• understand and do the commands of the class;"),
    p("• play “Simon says”;"),
    p("• ask for permission: May I go out, please?", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("responsibility, self-confidence.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 3)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F8E6E5" })] }),
        new TableRow({ children: [cell([
          p("1. Count from 1 to 10."),
          p("2. How many doors are there in the class?", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u4_commands.png", label: "Classroom commands — listen and repeat", url: AUDIO.commands }], COLOR),
  ];
}

function ficheS18() {
  const meta = META("Classroom commands",
    "By the end of the lesson, learners will be able to understand, say and do the classroom commands in English.",
    "1 / 2", "Picture dictionary 1, page 50; audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 1 to 20."),
       fp("2. I show 4 pens: How many pens are there?"),
       fp("3. Show me six!"),
       fp("4. Say the “One, two” rhyme.")],
      [fp("Answer."),
       fp("E.A.: 1. one … twenty."),
       fp("2. There are 4 pens."),
       fp("3. The pupil shows six objects."),
       fp("4. The rhyme is said with the actions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at me. (The teacher stands up, then sits down, then raises a hand, without a word.) What am I doing?")],
      [fp("Look. Answer."), fp("E.A.: You stand up. You sit down. You raise your hand.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Classroom commands ». By the end of this lesson, you will be able to understand, say and do the classroom commands in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look. I say each command and I do the action: “Stand up!” (I stand up). “Sit down!” (I sit down). “Look at the board!”, “Be quiet!”, “Listen to me, please!”, “Raise your hand!”, “Line up!”, “Come here!”, “Go back to your seat!”")],
      [fp("Look. Listen.")], "Modelling with gestures", "Picture dictionary 1, p. 50"),
    stepRow(["4. Analysis"],
      [fp("I do the action without a word: say the command."),
       fp("(The teacher stands up.)"),
       fp("(The teacher puts a finger on the lips.)"),
       fp("(The teacher raises a hand.)"),
       fp("Now repeat each command after me, with the action.")],
      [fp("Answer. Repeat with the action."),
       fp("E.A.: Stand up!"),
       fp("E.A.: Be quiet!"),
       fp("E.A.: Raise your hand!"),
       fp("E.A.: pupils repeat and act.")],
      "Modelling with gestures / Repetition drill", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, in the class we use commands: Stand up! Sit down! Look at the board! Be quiet! Stop talking! Listen to me, please! Raise your hand! Line up! Come here! Go back to your seat! We listen and we do the action.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Do what I say: “Stand up!” — “Sit down!” — “Raise your hand!” — “Be quiet!”…"),
       fp("Game “Simon says”: do the action ONLY if I say “Simon says” first."),
       fp("“Simon says: stand up!” → stand up."),
       fp("“Sit down!” (without Simon says) → do not move!")],
      [fp("Listen. Do the actions. Play."),
       pAns("E.A.: pupils do the action only after “Simon says”; a pupil who moves at the wrong time sits out one round.",
        ["Simon says"], { size: SZ.FICHE })],
      "Game (“Simon says”)", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I say three commands: do them."),
       fp("2. I do an action: say the command."),
       fp("3. Give a command to your friend.")],
      [fp("Do. Say."),
       pAns("E.A.: the actions match the commands; the commands are said correctly (Stand up!, Sit down!, Come here!…).",
        ["Stand up!", "Sit down!", "Come here!"], { size: SZ.FICHE })],
      "Individual work / In pairs", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}

function ficheS19() {
  const meta = META("Asking for permission",
    "By the end of the lesson, learners will be able to ask for permission to go out and reply in English.",
    "2 / 2", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Do what I say:"),
       fp("1. Stand up! — Sit down!"),
       fp("2. Raise your hand!"),
       fp("3. I put a finger on my lips: say the command."),
       fp("4. Play one round of “Simon says”.")],
      [fp("Do. Say."),
       fp("E.A.: 1–2. The actions are done."),
       fp("3. Be quiet!"),
       fp("4. The rule is followed.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Koto wants to go out of the class. He raises his hand. What must he say to the teacher?")],
      [fp("Listen. Answer."), fp("E.A.: He must ask the teacher. (Pupils may answer in their own words; the teacher gives the English sentence.)")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Asking for permission ». By the end of this lesson, you will be able to ask for permission to go out and reply in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look. A pupil raises the hand and asks: “May I go out, please?”. I answer: “Yes, go ahead.” Another pupil asks: “May I go out, please?”. I answer: “No, not now.”")],
      [fp("Look. Listen.")], "Modelling with gestures", "----"),
    stepRow(["4. Analysis"],
      [fp("What is the question of the pupil?"),
       fp("What are my two answers?"),
       fp("“Yes, go ahead.” — can the pupil go out?"),
       fp("“No, not now.” — can the pupil go out?")],
      [fp("Answer."),
       fp("E.A.: May I go out, please?"),
       fp("E.A.: Yes, go ahead. / No, not now."),
       fp("E.A.: Yes."),
       fp("E.A.: No.")],
      "Brainstorming / Whole-class work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So, to ask for permission to go out, we raise the hand and we say: “May I go out, please?”. The teacher answers: “Yes, go ahead.” or “No, not now.”")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play in pairs: one is the teacher, one is the pupil."),
       fp("The pupil raises the hand: “May I go out, please?”."),
       fp("The teacher answers: “Yes, go ahead.” or “No, not now.”."),
       fp("Change roles."),
       fp("Then choose the right answer:"),
       fp("1. To go out, I say: May I go out, please? / Stand up!"),
       fp("2. “Yes, go ahead.” means: I can go / I cannot go"),
       fp("3. “No, not now.” means: I can go / I cannot go")],
      [fp("Play the roles. Do the exercise."),
       pAns("E.A.: 1. May I go out, please?  2. I can go  3. I cannot go",
        ["May I go out, please?", "I can go", "I cannot go"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. You want to go out. What do you say?"),
       fp("2. May I go out, please? (answer yes)"),
       fp("3. May I go out, please? (answer no)"),
       fp("4. Play the scene with your friend.")],
      [fp("Answer. Play."),
       pAns("E.A.: 1. May I go out, please?  2. Yes, go ahead.  3. No, not now.  4. The scene is played with the hand raised.",
        ["May I go out, please?", "Yes, go ahead.", "No, not now."], { size: SZ.FICHE })],
      "Individual work / In pairs", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}

function lesson() {
  const cmd = (en, pn, what) => pr([run("• ", { bold: true }), ...kw(en, pn), run("  →  " + what)]);
  return [
    p([run("LESSON — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("CLASSROOM LANGUAGE"),
    sub("1. The commands of the class"),
    cmd("Stand up!", "stand eup", "I stand."),
    cmd("Sit down!", "site daoun", "I sit."),
    cmd("Look at the board!", "louk at ze bôrd", "I look at the board."),
    cmd("Be quiet!", "bi kouaïeut", "I stop the noise."),
    cmd("Stop talking!", "stop tôking", "I stop talking."),
    cmd("Listen to me, please!", "lisseun tou mi, plize", "I listen."),
    cmd("Raise your hand!", "réiz iôr hand", "I raise my hand."),
    cmd("Line up!", "laïn eup", "I stand in a line."),
    cmd("Come here!", "kam hire", "I come to the teacher."),
    cmd("Go back to your seat!", "gôou bak tou iôr site", "I go to my seat."),
    p("", { after: 100 }),
    img("u4_classroom.png", 320, 768 / 1408),
    sub("2. The game “Simon says”"),
    p("Do the action ONLY if you hear “Simon says” first."),
    pr([run("“Simon says: stand up!”", { italic: true }), run("  →  stand up. ")]),
    pr([run("“Sit down!”", { italic: true }), run(" (without Simon says)  →  do not move!")], { after: 120 }),
    sub("3. Asking for permission"),
    pr([run("I raise my hand and I say: "), ...kw("May I go out, please?", "méi aï gôou aout, plize")]),
    pr([run("The teacher says yes: "), ...kw("Yes, go ahead.", "yès, gôou euhèd")]),
    pr([run("The teacher says no: "), ...kw("No, not now.", "nôou, not naou")], { after: 140 }),
    audioBox([
      { qr: "qr_u4_commands.png", label: "Classroom commands — listen and repeat", url: AUDIO.commands },
      { qr: "qr_u4_permission.png", label: "May I go out, please? — listen and repeat", url: AUDIO.permission },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Do what your teacher says:")]),
    p("Stand up! — Raise your hand! — Be quiet! — Sit down! — Look at the board!", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Say the command for each action:")]),
    p("1. The teacher wants you on your feet. → ……"),
    p("2. The teacher wants no noise. → ……"),
    p("3. The teacher wants a line. → ……"),
    p("4. The teacher wants you near him/her. → ……"),
    p("5. The teacher wants you at your place. → ……", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Choose the right answer:")]),
    p("1. To go out, I say: May I go out, please? / Line up!"),
    p("2. Before the question, I: raise my hand / run"),
    p("3. “Yes, go ahead.” → I: go out / sit down"),
    p("4. “No, not now.” → I: go out / stay in class"),
    p("5. “Simon says: sit down!” → I: sit down / do not move", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Play the scene with a friend: teacher and pupil, question and answer.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five actions are done correctly (1 point each).", ["five actions"]),
    pAns("Exercise 2: 1. Stand up!  2. Be quiet! / Stop talking!  3. Line up!  4. Come here!  5. Go back to your seat!",
      ["Stand up!", "Be quiet!", "Line up!", "Come here!", "Go back to your seat!"]),
    pAns("Exercise 3: 1. May I go out, please?  2. raise my hand  3. go out  4. stay in class  5. sit down",
      ["May I go out, please?", "raise my hand", "go out", "stay in class", "sit down"]),
    pAns("Exercise 4: the question and one answer are said correctly, with the hand raised.", ["hand raised"]),
  ];
}

function revision() {
  const t = (a, b) => new TableRow({ children: [
    cell([fp([run(a, { bold: true, size: SZ.FICHE })])], { w: 4200 }),
    cell([fp(b)], { w: 6200 }),
  ]});
  return [
    B.bookmarkTitle("s20", "SESSION 20 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: CLASSROOM LANGUAGE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the words of Unit 4:", { after: 100 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [
        cell([fp([run("We hear…", { bold: true, size: SZ.FICHE })])], { w: 4200, shade: C.HDR1 }),
        cell([fp([run("We do…", { bold: true, size: SZ.FICHE })])], { w: 6200, shade: C.HDR1 }),
      ]}),
      t("Stand up! / Sit down!", "we stand / we sit"),
      t("Look at the board!", "we look at the board"),
      t("Be quiet! / Stop talking!", "we stop the noise"),
      t("Listen to me, please!", "we listen"),
      t("Raise your hand!", "we raise the hand"),
      t("Line up! / Come here! / Go back to your seat!", "we line up / we come / we go to our seat"),
      t("May I go out, please?", "we ask for permission"),
      t("Yes, go ahead. / No, not now.", "the answers of the teacher"),
    ]}),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Do what I say: Stand up! Raise your hand! Sit down!"),
    pAns("E.A.: the actions are done correctly.", ["actions"]),
    p("2. I put a finger on my lips: say the command."),
    pAns("E.A.: Be quiet! / Stop talking!", ["Be quiet!", "Stop talking!"]),
    p("3. You want to go out. What do you say?"),
    pAns("E.A.: May I go out, please?", ["May I go out, please?"]),
    p("4. Give two answers of the teacher."),
    pAns("E.A.: Yes, go ahead. / No, not now.", ["Yes, go ahead.", "No, not now."]),
    p("5. Play one round of “Simon says” with the class."),
    pAns("E.A.: the rule is followed.", ["rule"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s21", "SESSION 21 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 4: CLASSROOM LANGUAGE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("Do what your teacher says:")]),
    p("Stand up! — Look at the board! — Raise your hand! — Be quiet! — Line up! — Go back to your seat!", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Say the command:")]),
    p("1. The teacher wants you on your feet. → ……"),
    p("2. The teacher wants you to listen. → ……"),
    p("3. The teacher wants you near him/her. → ……"),
    p("4. The teacher wants no talking. → ……"),
    p("5. The teacher wants you seated. → ……", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Choose the right answer:")]),
    p("1. I want to go out: May I go out, please? / Come here!"),
    p("2. First I: raise my hand / stand on the bench"),
    p("3. “Yes, go ahead.”: I go out / I stay"),
    p("4. “No, not now.”: I go out / I stay"),
    p("5. “Simon says: raise your hand!”: I raise my hand / I do not move", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Play the scene with your teacher: ask for permission; answer as a teacher.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six actions are done correctly (1 point each).", ["six actions"]),
    pAns("Exercise 2: 1. Stand up!  2. Listen to me, please!  3. Come here!  4. Stop talking! / Be quiet!  5. Sit down! (1 point each)",
      ["Stand up!", "Listen to me, please!", "Come here!", "Stop talking! / Be quiet!", "Sit down!"]),
    pAns("Exercise 3: 1. May I go out, please?  2. raise my hand  3. I go out  4. I stay  5. I raise my hand (1 point each)",
      ["May I go out, please?", "raise my hand", "I go out", "I stay", "I raise my hand"]),
    pAns("Exercise 4: question with the hand raised (2 points); one correct answer (2 points).",
      ["hand raised", "correct answer"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS18(), pageBreak(),
    ...ficheS19(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can do the commands: Stand up! Sit down! …",
      "I can say the commands to a friend.",
      "I can play “Simon says”.",
      "I can ask: May I go out, please?",
      "I can understand: Yes, go ahead. / No, not now.",
    ], "Well done! See you in Unit 5: PARTS OF THE BODY!"),
  ];
};
module.exports.COLOR = COLOR;
