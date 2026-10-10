// UNIT 10 — FAMILY (2 séances + révision + test) — Sessions 50 à 53 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "B03060"; // rose foncé
const TOTAL = 57;
const AUDIO = {
  family: "https://drive.google.com/uc?export=download&id=1uhSmlL2W3LC0IInIOndrb-gCbay88dox",
  song: "https://drive.google.com/uc?export=download&id=1FUKaZHPakDJD7b-KtEfiQOTQ5sblCDzt",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 10 — FAMILY", title, slo,
  values: "respect, mutual help", session, materials,
});
const MEMBERS = [
  ["mother", "meuzeur"], ["father", "fâzeur"], ["sister", "sisteur"],
  ["brother", "breuzeur"], ["children", "tchildrène"],
];
function membersGrid() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: MEMBERS.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2080, vAlign: VerticalAlign.CENTER }),
    ) })],
  });
}
function songBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE FAMILY SONG  ♪ (tune of “Frère Jacques”)", { bold: true, color: COLOR, size: SZ.BODY })],
          { center: true, after: 40 })], { shade: "F7E4EC" })] }),
      new TableRow({ children: [cell([
        p([run("Sister, brother, father, mother,", { bold: true, size: SZ.BODY })], { center: true }),
        p([run("Who is she? Who is she?", { bold: true, size: SZ.BODY })], { center: true }),
        p([run("She’s my sister, she’s my sister,", { bold: true, size: SZ.BODY })], { center: true }),
        p([run("Oh, I see! Oh, I see!", { bold: true, size: SZ.BODY })], { center: true, after: 80 }),
        p([run("Then we sing again with: brother (Who is he? — He’s my brother), mother (She’s my mother), father (He’s my father).",
          { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 10 — FAMILY", COLOR, "unit10"),
    p("", { after: 100 }),
    p([run("This is my family!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u10_family.png", 340, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the members of the family in English;"),
    p("• sing the Family song;"),
    p("• ask and answer: Who is he? Who is she?", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect, mutual help.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 9)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F7E4EC" })] }),
        new TableRow({ children: [cell([
          p("1. Say five parts of the house."),
          p("2. Describe a house: It is … It has …", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u10_song.png", label: "The Family song — listen and sing", url: AUDIO.song }], COLOR),
  ];
}

function ficheS50() {
  const meta = META("The members of the family",
    "By the end of the lesson, learners will be able to say the members of the family and sing the Family song.",
    "1 / 2", "family picture (father, mother, two children), family tree on the blackboard, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say five parts of the house."),
       fp("2. Describe this drawing: It is … It has …"),
       fp("3. Point to the door!")],
      [fp("Answer. Point."),
       fp("E.A.: 1. Five parts are said."),
       fp("2. It is … It has … windows."),
       fp("3. The door is pointed to.")],
      "Individual work", "Drawing of a house"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("At home, who lives with you? Your dad? Your mum? Today we say them in English!")],
      [fp("Listen. Answer in their own words.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The members of the family ». By the end of this lesson, you will be able to say the members of the family in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at this family picture: a father, a mother and two children. Look at the family tree on the blackboard. Listen: mother… father… sister… brother… children.")],
      [fp("Look. Listen.")], "Picture study (family tree)", "Family picture, blackboard"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word after me: the class, one row, one pupil."),
       fp("I point to the picture: who is this?"),
       fp("The girl is the …? The boy is the …?"),
       fp("The two children are: the sister and the …?")],
      [fp("Repeat. Answer."),
       fp("E.A.: the word matches the person."),
       fp("E.A.: The sister. The brother."),
       fp("E.A.: The brother.")],
      "Repetition drill / “Visual aids”", "Family picture"),
    stepRow(["5. Synthesis"],
      [fp("So, the members of the family are: the father, the mother and the children: the sister and the brother."),
       fp("Now, the Family song! Listen: “Sister, brother, father, mother / Who is she? Who is she? / She’s my sister, she’s my sister / Oh, I see! Oh, I see!”")],
      [fp("Listen. Sing with the teacher.")], "Singing", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Sing the song again: the class, then one row, then in pairs. Change the member: brother, mother, father."),
       fp("I point to the family picture: say the member.")],
      [fp("Sing. Say."),
       pAns("E.A.: the song is sung; the members are named: mother, father, sister, brother, children.",
        ["mother, father, sister, brother, children"], { size: SZ.FICHE })],
      "Singing / “Visual aids”", "Family picture"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the five family words."),
       fp("2. I point to the picture: who is this?"),
       fp("3. Sing one verse of the Family song.")],
      [fp("Say. Sing."),
       pAns("E.A.: mother, father, sister, brother, children — the verse is sung.",
        ["mother, father, sister, brother, children"], { size: SZ.FICHE })],
      "Individual work", "Family picture"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50");
}

function ficheS51() {
  const meta = META("Who is he? Who is she?",
    "By the end of the lesson, learners will be able to ask and answer: Who is he? Who is she? — This is my …",
    "2 / 2", "family picture, pupils’ own family drawings");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the five family words."),
       fp("2. Sing one verse of the Family song."),
       fp("3. The girl of the family is the …?")],
      [fp("Answer. Sing."),
       fp("E.A.: 1. mother, father, sister, brother, children."),
       fp("2. The verse is sung."),
       fp("3. The sister.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Sing the Family song together! Listen to the question in the song: “Who is she?”")],
      [fp("Sing.")], "Singing", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Who is he? Who is she? ». By the end of this lesson, you will be able to ask and answer about the members of the family.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the family picture. Listen to the dialogue: “— Who is he? — This is my father.” “— Who is she? — This is my mother.”")],
      [fp("Look. Listen.")], "Modelling (dialogue)", "Family picture"),
    stepRow(["4. Analysis"],
      [fp("For a man or a boy, we ask: Who is …?"),
       fp("For a woman or a girl, we ask: Who is …?"),
       fp("And we answer: This is my …"),
       fp("I point to the father: ask me the question!")],
      [fp("Answer. Ask."),
       fp("E.A.: Who is he?"),
       fp("E.A.: Who is she?"),
       fp("E.A.: This is my father / mother / sister / brother."),
       fp("E.A.: Who is he?")],
      "Brainstorming / Modelling", "Family picture"),
    stepRow(["5. Synthesis"],
      [fp("So: for a boy or a man → Who is he? For a girl or a woman → Who is she? And we answer: This is my father, this is my mother, this is my sister, this is my brother.")],
      [fp("Listen. Repeat the model.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speed-Chat! Two rows face to face. Pupils in row A point to the picture and ask: Who is he? / Who is she? Pupils in row B answer: This is my … After one minute, row A moves one step; new pairs, again!"),
       fp("Then change roles: row B asks, row A answers.")],
      [fp("Ask. Answer. Move."),
       pAns("E.A.: — Who is he? — This is my father. / — Who is she? — This is my sister.",
        ["Who is he?", "Who is she?", "This is my"], { size: SZ.FICHE })],
      "“Speed-Chat” / In pairs", "Family picture"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to the picture: Who is he? Who is she?"),
       fp("2. Ask me a question about the picture."),
       fp("3. Say the five family words.")],
      [fp("Answer. Ask."),
       pAns("E.A.: This is my … — Who is he? / Who is she? — the five words are said.",
        ["This is my", "Who is he?", "Who is she?"], { size: SZ.FICHE })],
      "Individual work", "Family picture"),
  ];
  return fiche(51, TOTAL, meta, rows, "s51");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 10", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("FAMILY"),
    sub("1. The members of the family"),
    img("u10_family.png", 320, 768 / 1408),
    membersGrid(),
    p("", { after: 100 }),
    sub("2. Who is he? Who is she?"),
    pr([run("For a boy or a man: "), ...kw("Who is he?", "hou iz hi")]),
    pr([run("For a girl or a woman: "), ...kw("Who is she?", "hou iz chi")]),
    pr([run("The answer: "), ...kw("This is my father.", "zis iz maï fâzeur"),
        run("  "), ...kw("This is my sister.", "zis iz maï sisteur")], { after: 100 }),
    sub("3. The Family song"),
    songBox(),
    p("", { after: 140 }),
    audioBox([
      { qr: "qr_u10_family.png", label: "The family — listen and repeat", url: AUDIO.family },
      { qr: "qr_u10_song.png", label: "The Family song — listen and sing", url: AUDIO.song },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher points to the family picture; say the members.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("He or she? Say the right question:")]),
    p("1. the father → Who is …?"),
    p("2. the sister → Who is …?"),
    p("3. the mother → Who is …?"),
    p("4. the brother → Who is …?", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Answer with “This is my …”: the teacher points to the picture five times.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Sing the Family song with two members (sister, brother).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: mother, father, sister, brother, children (1 point each).",
      ["mother, father, sister, brother, children"]),
    pAns("Exercise 2: 1. he  2. she  3. she  4. he (1 point each)", ["he", "she"]),
    pAns("Exercise 3: This is my … + the right member (1 point each).", ["This is my"]),
    pAns("Exercise 4: the two verses are sung (3 points each).", ["two verses"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s52", "SESSION 52 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 10: FAMILY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the members of the family:", { after: 100 }),
    membersGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the five family words."),
    pAns("E.A.: mother, father, sister, brother, children.", ["mother, father, sister, brother, children."]),
    p("2. For a girl, what is the question?"),
    pAns("E.A.: Who is she?", ["Who is she?"]),
    p("3. For a boy, what is the question?"),
    pAns("E.A.: Who is he?", ["Who is he?"]),
    p("4. The teacher points to the picture: answer."),
    pAns("E.A.: This is my father / mother / sister / brother.", ["This is my"]),
    p("5. Sing the Family song."),
    pAns("E.A.: the song is sung with the four members.", ["four members"]),
    p("6. Speed-Chat: ask and answer with a friend."),
    pAns("E.A.: — Who is he? — This is my brother.", ["Who is he?", "This is my brother."]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s53", "SESSION 53 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 10: FAMILY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("The teacher points to the family picture five times; say the members.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("He or she?")]),
    p("1. the mother   2. the brother   3. the sister   4. the father", { after: 120 }),
    pr([run("Exercise 3 (6 points). ", { bold: true }), run("Answer the teacher’s questions: Who is he? Who is she? (three questions)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Sing one verse of the Family song.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: mother, father, sister, brother, children (1 point each).",
      ["mother, father, sister, brother, children"]),
    pAns("Exercise 2: 1. she  2. he  3. she  4. he (1 point each)", ["she", "he"]),
    pAns("Exercise 3: This is my … + the right member (2 points each).", ["This is my"]),
    pAns("Exercise 4: the verse is sung correctly (5 points).", ["verse is sung"]),
  ];
}

module.exports = function unit10() {
  return [
    ...opening(), pageBreak(),
    ...ficheS50(), pageBreak(),
    ...ficheS51(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 10", COLOR, [
      "I can say: mother, father, sister, brother, children.",
      "I can ask: Who is he? Who is she?",
      "I can answer: This is my father.",
      "I can sing the Family song.",
    ], "Well done! See you in Unit 11: FARM ANIMALS AND PETS!"),
  ];
};
module.exports.COLOR = COLOR;
