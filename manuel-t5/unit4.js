// T5 — UNIT 4 — PARTS OF THE BODY (2 séances + révision + test) — Sessions 14 à 17 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "C0504D"; // rouge brique
const TOTAL = 49;
const AUDIO = {
  body: "https://drive.google.com/uc?export=download&id=1S_ddCrOf1ILZoAUnkidm_y1Gr-m4KvJP",
  finger: "https://drive.google.com/uc?export=download&id=17OUhSkIGUafhyZsqLvSWWwVUlXlHDaoL",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — PARTS OF THE BODY", title, slo,
  values: "unity, love of effort", session, materials,
});
const WORDS = [
  ["hair", "hèr"], ["face", "féiss"], ["cheeks", "tchiks"], ["neck", "nèk"],
  ["teeth", "tiss"], ["back", "bak"], ["belly", "bèli"], ["arms", "ârmz"],
  ["hands", "handz"], ["fingers", "finngueurz"], ["legs", "lègz"], ["feet", "fite"],
];
function wordGrid() {
  const rows = [];
  for (let i = 0; i < WORDS.length; i += 4) {
    rows.push(new TableRow({ children: WORDS.slice(i, i + 4).map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function fingerRhymeBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “ONE LITTLE FINGER” RHYME  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "F6E2E1" })] }),
      new TableRow({ children: [cell([
        p([run("Chorus:", { bold: true, size: SZ.BODY })], { center: true, after: 20 }),
        p([run("One little finger, one little finger,", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("one little finger, tap, tap, tap!", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Point your finger up, up.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Point your finger down, down.", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("Put it on your hair, hair. (Chorus)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Put it on your cheek, cheek. (Chorus)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Put it on your hand, hand. (Chorus)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Put it on your leg, leg. (Chorus)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Put it on your foot, foot.", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("Put it on your leg, leg. Put it on your hand, hand.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Put it on your cheek, cheek. Put it on your hair, hair.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Now let’s wave goodbye, goodbye!", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 4 — PARTS OF THE BODY", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Show me your hands!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_body.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say twelve new parts of the body;"),
    p("• read the names of the body parts;"),
    p("• say and act the “One little finger” rhyme;"),
    p("• answer: What am I doing? — You are touching your …", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("unity, love of effort.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F6E2E1" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned: head, eyes, nose, ears, mouth, shoulders, knees and toes."),
          p("Sing “Head, shoulders, knees and toes” to warm up!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u4_finger.png", label: "One little finger — listen and act", url: AUDIO.finger }], COLOR),
  ];
}

function ficheS14() {
  const meta = META("The parts of the body",
    "By the end of the lesson, learners will be able to say the twelve new parts of the body clearly, read them on the picture and act the “One little finger” rhyme.",
    "1 / 2", "big picture of the body with labels, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T4.) Answer these questions:"),
       fp("1. Touch your head / your nose / your ears."),
       fp("2. Sing “Head, shoulders, knees and toes”."),
       fp("3. Open your copybook! (Unit 3)")],
      [fp("Act. Sing."),
       fp("E.A.: the right parts are touched."),
       fp("E.A.: the song is sung; the copybook is opened.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher points to his/her hair.) Do you know this word in English? Today, twelve new parts of the body!")],
      [fp("Look. Guess.")], "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The parts of the body ». By the end of this lesson, you will be able to say and read twelve new parts of the body.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the big picture. Listen: hair, face, cheeks, neck, teeth, back, belly, arms, hands, fingers, legs, feet. (The teacher points to each part on the picture and on his/her own body.)")],
      [fp("Look. Listen.")], "“Visual aids” / Audio", "Big picture, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word and touch the part: the class, one row, one pupil."),
       fp("Read the names of the body parts on the picture."),
       fp("In pairs: pupil A says “Point to the… (back, legs, feet…)”; pupil B points to the part. Then change roles.")],
      [fp("Repeat. Touch. Read. Point."),
       fp("E.A.: the words are read; the right parts are pointed to.")],
      "Repetition drill / In pairs", "Big picture with labels"),
    stepRow(["5. Synthesis"],
      [fp("So, the new parts of the body are: hair, face, cheeks, neck, teeth, back, belly, arms, hands, fingers, legs, feet."),
       fp("Careful! One foot → two feet. One tooth → many teeth.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The rhyme! Listen to “One little finger” and watch my actions: tap, tap, tap — up — down — put it on your hair…"),
       fp("Say the rhyme with the actions, verse by verse, then all together.")],
      [fp("Listen. Act. Say the rhyme."),
       pAns("E.A.: the rhyme is said with the right actions on hair, cheek, hand, leg, foot.",
        ["hair, cheek, hand, leg, foot"], { size: SZ.FICHE })],
      "Rhyme / T.P.R. (act it out)", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to six parts on the picture: say the words."),
       fp("2. Read three words on the blackboard."),
       fp("3. Say one verse of the rhyme with the actions.")],
      [fp("Say. Read. Act."),
       pAns("E.A.: the parts are named clearly; the words are read without mistakes.",
        ["named clearly"], { size: SZ.FICHE })],
      "Individual work", "Big picture"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}

function ficheS15() {
  const meta = META("This is my… — What am I doing?",
    "By the end of the lesson, learners will be able to answer “Show me your…” with “This is my…” and say “You are touching your…” in the game.",
    "2 / 2", "the picture of the body, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. I point to my cheek / my neck / my belly: what is it?"),
       fp("2. Say the “One little finger” rhyme."),
       fp("3. What is the plural of “foot”?")],
      [fp("Answer."),
       fp("E.A.: 1. cheek, neck, belly."),
       fp("2. The rhyme is said."),
       fp("3. feet.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick rhyme: “One little finger” with the actions, faster and faster!")],
      [fp("Say the rhyme. Act.")], "Rhyme", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to speak about OUR body. By the end of this lesson, you will be able to say “This is my…” and “You are touching your…”.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen. (The teacher says:) Show me your hand! (and a pupil shows the hand:) This is my hand. (The teacher touches his/her nose:) I’m touching my nose.")],
      [fp("Look. Listen.")], "Modelling", "----"),
    stepRow(["4. Analysis"],
      [fp("Repeat the model sentences: the class, one row, one pupil."),
       fp("In pairs: pupil A says “Show me your (eye, nose, ear, hand, teeth…)”; pupil B shows the part and says “This is my (eye…)” / “These are my (teeth…)”. Change roles."),
       fp("Now repeat my gesture and my words: “I’m touching my eyes.” “I’m touching my nose.”")],
      [fp("Repeat. Show. Say."),
       fp("E.A.: This is my hand. / These are my teeth. / I’m touching my nose.")],
      "Repetition drill / In pairs", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: Show me your hand! → This is my hand. For two parts: These are my hands. And for the action: I’m touching my nose. / You are touching your nose.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game “What am I doing?”: I touch a part of my body and ask “What am I doing?”"),
       fp("Then one pupil comes to the front, touches a part, and asks the class: “What am I doing?”")],
      [fp("Answer. Play."),
       pAns("E.A.: You are touching your… (hair, cheek, back, belly…).",
        ["You are touching your"], { size: SZ.FICHE })],
      "Game / Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Show me your fingers / your teeth!"),
       fp("2. I touch my neck: what am I doing?"),
       fp("3. Read four body words on the blackboard.")],
      [fp("Show. Answer. Read."),
       pAns("E.A.: These are my fingers / my teeth. — You are touching your neck. — the words are read without mistakes.",
        ["These are my fingers", "You are touching your neck."], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PARTS OF THE BODY"),
    sub("1. Twelve new words"),
    img("u4_body.png", 440, 768 / 1408),
    wordGrid(),
    p("", { after: 100 }),
    sub("2. One or two?"),
    pr([run("one foot ", { bold: true, color: C.BLUE }), run("→ two "), run("feet", { bold: true, color: C.BLUE }),
        run("     one tooth ", { bold: true, color: C.BLUE }), run("→ many "), run("teeth", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The rhyme"),
    fingerRhymeBox(),
    p("", { after: 100 }),
    sub("4. Speaking about my body"),
    pr([run("Show me your hand! ", { bold: true, color: C.BLUE }), run("→ "), ...kw("This is my hand.", "ziss iz maï hande")]),
    pr([run("Show me your teeth! ", { bold: true, color: C.BLUE }), run("→ "), ...kw("These are my teeth.", "ziz âr maï tiss")]),
    pr([run("What am I doing? ", { bold: true, color: C.BLUE }), run("→ "), ...kw("You are touching your nose.", "iou âr teutchinng iôr nôouz")], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u4_body.png", label: "The parts of the body — listen and repeat", url: AUDIO.body },
      { qr: "qr_t5_u4_finger.png", label: "One little finger — listen and act", url: AUDIO.finger },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six parts of the body on the picture: say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Show and say:")]),
    p("1. Show me your hand! → ……"),
    p("2. Show me your teeth! → ……"),
    p("3. Show me your fingers! → ……"),
    p("4. Show me your cheek! → ……", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The teacher touches four parts: say “You are touching your …”.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Say the “One little finger” rhyme with the actions (4 points) and read two body words (2 points).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the six parts are named clearly (1 point each).", ["six parts"]),
    pAns("Exercise 2: 1. This is my hand. 2. These are my teeth. 3. These are my fingers. 4. This is my cheek.",
      ["This is my hand.", "These are my teeth."]),
    pAns("Exercise 3: You are touching your … (1 point each).", ["You are touching your"]),
    pAns("Exercise 4: the rhyme is said with the actions; the words are read correctly.", ["rhyme is said"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s16", "SESSION 16 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: PARTS OF THE BODY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the twelve words:", { after: 100 }),
    wordGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The teacher points to six parts on the picture: say the words."),
    pAns("E.A.: hair, face, cheeks, neck, teeth, back, belly, arms, hands, fingers, legs, feet.", ["hair, face, cheeks, neck"]),
    p("2. Show me your hands! Show me your teeth!"),
    pAns("E.A.: These are my hands. These are my teeth.", ["These are my hands."]),
    p("3. The teacher touches a part: what is he/she doing?"),
    pAns("E.A.: You are touching your …", ["You are touching your"]),
    p("4. Say the “One little finger” rhyme with the actions."),
    pAns("E.A.: the rhyme is said with the actions.", ["rhyme is said"]),
    p("5. Read six body words on the blackboard."),
    pAns("E.A.: the words are read fluently, without mistakes.", ["read fluently"]),
    p("6. Puzzle game (in groups): put the pieces of the body picture together and name each part."),
    pAns("E.A.: the puzzle is done; the parts are named.", ["puzzle is done"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 4: PARTS OF THE BODY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("The teacher points to six parts on the picture: say the words.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Show and say: Show me your … (four parts).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The teacher touches four parts: say “You are touching your …”.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Say the rhyme with the actions (4 points) and read two body words (2 points).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the parts are named clearly (1 point each).", ["named clearly"]),
    pAns("Exercise 2: This is my … / These are my … (1 point each).", ["This is my"]),
    pAns("Exercise 3: You are touching your … (1 point each).", ["You are touching your"]),
    pAns("Exercise 4: the rhyme is said with the actions; the reading is correct.", ["rhyme is said"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS14(), pageBreak(),
    ...ficheS15(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can say twelve new parts of the body.",
      "I can read the names of the body parts.",
      "I can say: This is my … / These are my …",
      "I can say: You are touching your …",
      "I can say the “One little finger” rhyme.",
    ], "Well done! See you in Unit 5: MY BIRTHDAY!"),
  ];
};
module.exports.COLOR = COLOR;
