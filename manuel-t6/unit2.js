// T6 — UNIT 2 — CLASSROOM COMMUNICATION (3 séances + révision + test) — Sessions 12 à 16 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "7030A0"; // violet
const TOTAL = 74;
const AUDIO = {
  permission: "https://drive.google.com/uc?export=download&id=1_W4uBXwowY9NdQIDqOd9BV7di7GN82ab",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — CLASSROOM COMMUNICATION", title, slo,
  values: "solidarity, mutual respect", session, materials,
});

const CLARIF = [
  ["Do you understand?", "dou iou eundeurstande"],
  ["Excuse me, what is the English for …?", "èkskiouz mi, ouate iz zi inglich fôr"],
  ["What does … mean, please?", "ouate deuz … mine, plize"],
  ["Can you repeat, please?", "kane iou ripite, plize"],
  ["Could you repeat, please?", "koude iou ripite, plize"],
];
function clarifGrid() {
  const rows = CLARIF.map(([w, pn]) => new TableRow({ children: [
    cell([p([run(w, { bold: true, color: C.BLUE, size: 26 })], { after: 10 }),
          p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { after: 20 })],
      { w: 10400, vAlign: VerticalAlign.CENTER }),
  ]}));
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function permissionBox() {
  const line = (q, a) => [
    pr([run("— " + q, { bold: true, color: COLOR, size: SZ.BODY })], { after: 20 }),
    pr([run("— " + a, { italic: true, size: SZ.BODY })], { after: 50 }),
  ];
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("ASKING FOR PERMISSION (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "EFE3F5" })] }),
      new TableRow({ children: [cell([
        ...line("Excuse me teacher, may I go out, please?", "Yes, you may. But be quick!"),
        ...line("Can I open the window, please?", "Okay, go ahead."),
        ...line("May we work in pairs?", "Yes, you can. But one by one, please."),
        ...line("Can I borrow your pen?", "No, sorry, you can’t. I need it."),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 2 — CLASSROOM COMMUNICATION", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("May I go out, please?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_permission.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• follow the teacher’s instructions in English;"),
    p("• ask for clarification: Can you repeat, please? What does … mean?;"),
    p("• ask for, give and refuse permission with can and may;"),
    p("• read and write dialogues about the classroom.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "EFE3F5" })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned the classroom commands: Go to the blackboard!, Open the door!, Have a break!…"),
          p("This year we learn to ASK when we don’t understand — like real learners!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u2_permission.png", label: "Clarification and permission — listen and repeat", url: AUDIO.permission }], COLOR),
  ];
}

// ---------- S12 — Instructions + clarification ----------
function ficheS12() {
  const meta = META("Teacher’s instructions — asking for clarification",
    "By the end of the lesson, learners will be able to follow the teacher’s instructions in English and ask for clarification when they do not understand.",
    "1 / 3", "stick figures on cards, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T5 and Unit 1.) Answer these questions:"),
       fp("1. Act: Open your copybook! Go to the blackboard!"),
       fp("2. Spell “teacher”."),
       fp("3. Give your phone number.")],
      [fp("Act. Spell. Answer."),
       fp("E.A.: the commands are acted; T-E-A-C-H-E-R; It’s …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: I mime instructions WITHOUT speaking (open the book, look at the board, listen). Tell the meaning from my gestures!")],
      [fp("Guess from the gestures.")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn what to say when we do NOT understand. By the end of this lesson, you will ask for clarification in English — that is being a strong learner!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the audio and repeat the expressions: Do you understand? — Excuse me, what is the English for this word? — What does this word mean, please? — Can/Could you repeat, please?"),
       fp("Listen to instructions and show the gestures; tick the stick figure that matches what you hear (from the syllabus).")],
      [fp("Listen. Repeat. Act. Tick the right stick figure.")],
      "Audio / Using stick figures", "Stick figure cards, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("When do we use each expression? — I don’t know a word in English → “What is the English for …?” — I don’t know what an English word means → “What does … mean?” — I didn’t hear well → “Can you repeat, please?”"),
       fp("Repetition drill: the class, one row, one pupil — with polite intonation.")],
      [fp("Answer. Repeat politely."),
       fp("E.A.: each expression is matched to its situation.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, in class we NEVER stay silent when we don’t understand: we say Excuse me, and we ask — always with please!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play: in pairs, write and act a mini-dialogue: the “teacher” gives an instruction, the “pupil” doesn’t understand and asks for clarification, the “teacher” repeats, the “pupil” acts the instruction.")],
      [fp("Write. Act."),
       pAns("E.A.: — Point to the door! — Could you repeat, please? — Point to the door. — (the pupil points) — Good!",
        ["Could you repeat, please?"], { size: SZ.FICHE })],
      "Role play / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I say an instruction very fast: what do you ask?"),
       fp("2. You don’t know how to say “sakafo” in English: what do you ask?"),
       fp("3. Act: Look at the board!")],
      [fp("Ask. Act."),
       pAns("E.A.: Can you repeat, please? — Excuse me, what is the English for “sakafo”? — the instruction is acted.",
        ["Can you repeat, please?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(12, TOTAL, meta, rows, "s12");
}

// ---------- S13 — Permission ----------
function ficheS13() {
  const meta = META("Asking for and giving permission — can and may",
    "By the end of the lesson, learners will be able to ask for, give and refuse permission with “can” and “may”, with short answers (can’t/cannot).",
    "2 / 3", "signs (no smoking, no cell phone…), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What do you say when you don’t hear well?"),
       fp("2. What does “blackboard” mean? (show it!)"),
       fp("3. Give an instruction to your neighbour.")],
      [fp("Answer. Show. Order."),
       fp("E.A.: Can you repeat, please?; the pupil shows the blackboard; Open your copybook!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at these signs (no cell phone, no pets…). Tell the meaning of each sign!")],
      [fp("Tell the meaning of the signs.")], "“Visual aids”", "Signs"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to ask for PERMISSION with two little magic words: CAN and MAY. By the end of this lesson, you will ask, give and refuse permission politely.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue and repeat the sentences. Tick the sentences you hear: May I go out, please? / Can I open the window? / No, sorry, you can’t.")],
      [fp("Listen. Repeat. Tick.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: can/may + verb WITHOUT “to” (May I go out — not “to go out”)."),
       fp("To give permission: Yes, you can/may. Go ahead. — To refuse: No, sorry, you can’t/cannot. — “May” is more polite than “can”."),
       fp("The teacher answers with a GESTURE (nod yes / shake no): tell the sentence that matches!")],
      [fp("Repeat the rule. Tell the matching sentence."),
       fp("E.A.: Yes, you may. / No, you can’t.")],
      "Contextualisation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to ask — May I…? / Can I…? + please. To give — Yes, you can/may. Go ahead. To refuse — No, sorry, you can’t. And the imperative gives orders: Be quick! One by one, please!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play: build and act a dialogue “pupil ↔ teacher” with at least two permissions (one given, one refused) — use the situations: go out, open the window, borrow a pen, work in pairs.")],
      [fp("Build. Act."),
       pAns("E.A.: — May I go out, please? — Yes, but be quick! — Can I borrow your pen? — No, sorry, you can’t.",
        ["May I go out, please?"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me the permission to open the door."),
       fp("2. Refuse this permission: “Can I take your ruler?”"),
       fp("3. Correct: “May I to go out?”")],
      [fp("Ask. Refuse. Correct."),
       pAns("E.A.: May/Can I open the door, please? — No, sorry, you can’t. — May I go out? (no “to”!).",
        ["No, sorry, you can’t."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}

// ---------- S14 — Reading + writing ----------
function ficheS14() {
  const meta = META("Reading and writing a classroom dialogue",
    "By the end of the lesson, learners will be able to read a dialogue about classroom communication, then write and act their own dialogue.",
    "3 / 3", "dialogue on the blackboard, drawings of instructions");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask the permission to work in pairs."),
       fp("2. Give and refuse a permission."),
       fp("3. Ask for clarification (two ways).")],
      [fp("Ask. Answer."),
       fp("E.A.: May we work in pairs? — Yes, you may. / No, sorry… — Can you repeat…? What does … mean?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: look at the drawings — tell the classroom instruction each drawing shows.")],
      [fp("Tell the instructions.")], "“Visual aids”", "Drawings"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ and WRITE a classroom dialogue. By the end of this lesson, your dialogue will be acted in front of the class.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read the dialogue on the blackboard (pupil asks for clarification and permission, teacher answers). One pupil = one line, respect the intonation."),
       fp("Answer: what does the pupil ask? what does the teacher answer?")],
      [fp("Read aloud. Answer."),
       fp("E.A.: the gist and the details are found.")],
      "Question-answer", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Post-reading: write in your copy-book the instructions you read; correct with your neighbour (peer correction)."),
       fp("Pre-writing: rearrange the words: “please / repeat / you / can / ?” — is this sentence correct: “May I to go out?”? Correct it!"),
       fp("Complete the blanks of the dialogue on the blackboard.")],
      [fp("Write. Correct one another. Rearrange. Complete."),
       fp("E.A.: Can you repeat, please? — May I go out? — the blanks are filled.")],
      "Peer correction", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So, a good classroom dialogue: a greeting, an instruction or a question, a clarification if needed, a permission, and always please and thank you!")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("While-writing: in pairs, write YOUR classroom dialogue (6 lines or more): one instruction, one clarification, one permission."),
       fp("Post-writing: act it in front of the class!")],
      [fp("Write. Act."),
       pAns("E.A.: the dialogue contains an instruction, a clarification and a permission, and is acted with intonation.",
        ["clarification"], { size: SZ.FICHE })],
      "Role play / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read three lines of a classroom dialogue."),
       fp("2. Write: “May I go out, please?” (dictation)"),
       fp("3. Your partner doesn’t understand a word: what does he/she say?")],
      [fp("Read. Write. Answer."),
       pAns("E.A.: the reading is fluent; the sentence is written with the capital and the question mark; What does … mean, please?",
        ["question mark"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 2", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("CLASSROOM COMMUNICATION"),
    sub("1. Asking for clarification"),
    clarifGrid(),
    p("", { after: 100 }),
    sub("2. Asking for permission — can and may"),
    permissionBox(),
    p("", { after: 60 }),
    pr([run("The rule: ", { bold: true }), run("can / may + verb without “to”", { bold: true, color: C.BLUE }), run("  →  May I go out? (never “May I to go out”)!")]),
    pr([run("To give permission: "), ...kw("Yes, you can. / Yes, you may. Go ahead.", "yèss iou kane / méi. gôou euhèd")]),
    pr([run("To refuse: "), ...kw("No, sorry, you can’t.", "nôou, sori, iou kannte")]),
    pr([run("“May” is more polite than “can” — perfect for the teacher!", { italic: true, color: C.GRAY, size: 24 })], { after: 100 }),
    sub("3. The imperative"),
    pr([run("To give an order: the verb alone! "), ...kw("Be quick!", "bi kouik"), run("  "), ...kw("One by one, please!", "ouane baï ouane, plize"), run("  "), ...kw("Go ahead!", "gôou euhèd")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u2_permission.png", label: "Clarification and permission — listen and repeat", url: AUDIO.permission },
    ], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("What do you say? 1. You didn’t hear. 2. You don’t know an English word’s meaning.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Ask the permission: 1. (go out) 2. (open the window).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Answer: give the first permission, refuse the second.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Correct the mistakes: “May I to go out?” — “can i open the door”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a 4-line classroom dialogue (clarification + permission).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Can/Could you repeat, please? — What does … mean, please? (2 points each).", ["Can/Could you repeat, please?"]),
    pAns("Exercise 2: May/Can I go out, please? — May/Can I open the window, please? (2 points each).", ["May/Can I go out, please?"]),
    pAns("Exercise 3: Yes, you can/may. Go ahead. — No, sorry, you can’t. (2 points each).", ["No, sorry, you can’t."]),
    pAns("Exercise 4: May I go out? — Can I open the door? (capital C, question mark) (2 points each).", ["May I go out?"]),
    pAns("Exercise 5: a correct dialogue with please, capitals and punctuation (4 points).", ["please"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s15", "SESSION 15 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the expressions:", { after: 100 }),
    clarifGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. I give an instruction: act it! (Look at the board! Open your copybook!)"),
    pAns("E.A.: the instructions are acted.", ["acted"]),
    p("2. You don’t understand a word: ask (two different ways)."),
    pAns("E.A.: What does … mean, please? / What is the English for …?", ["What does"]),
    p("3. Ask the permission to go out, then to borrow a pen."),
    pAns("E.A.: May I go out, please? — Can I borrow your pen, please?", ["May I go out, please?"]),
    p("4. Give a permission, then refuse a permission."),
    pAns("E.A.: Yes, you may. Go ahead. — No, sorry, you can’t.", ["Go ahead."]),
    p("5. Correct: “May I to open the door?”"),
    pAns("E.A.: May I open the door? (no “to”).", ["no “to”"]),
    p("6. Write and act a 4-line classroom dialogue."),
    pAns("E.A.: the dialogue is correct and acted.", ["dialogue is correct"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s16", "SESSION 16 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Oral: act the five instructions the teacher gives.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("What do you say? 1. You didn’t hear. 2. You don’t know “vary” in English. 3. You want to go out. 4. You want to open the window. 5. Refuse: “Can I take your bag?”")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Read the classroom dialogue on the blackboard and answer two questions.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Write a classroom dialogue (5 lines or more): instruction + clarification + permission.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five instructions are acted (1 point each).", ["acted"]),
    pAns("Exercise 2: Can you repeat, please? — What is the English for “vary”? — May I go out, please? — Can I open the window, please? — No, sorry, you can’t. (1 point each).", ["What is the English for"]),
    pAns("Exercise 3: the reading is correct; the answers give the gist and details (2.5 points each).", ["gist"]),
    pAns("Exercise 4: a correct dialogue with capitals, punctuation and please (5 points).", ["please"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS12(), pageBreak(),
    ...ficheS13(), pageBreak(),
    ...ficheS14(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can follow the teacher’s instructions in English.",
      "I can ask for clarification: Can you repeat, please? What does … mean?",
      "I can ask for permission with can and may.",
      "I can give and refuse permission politely.",
      "I can read and write a classroom dialogue.",
    ], "Well done! See you in Unit 3: TIME AND WEATHER!"),
  ];
};
module.exports.COLOR = COLOR;
