// UNIT 5 — PARTS OF THE BODY (2 séances + révision + test) — Sessions 22 à 25 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "76923C"; // vert olive
const TOTAL = 57;
const AUDIO = {
  body: "https://drive.google.com/uc?export=download&id=1NjFO-VaoL7BL2wvFGgUXq27vO0LoRwnO",
  song: "https://drive.google.com/uc?export=download&id=1LG-51ZLBhLnr3S9r7GpjIwVENCreY2OB",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — PARTS OF THE BODY", title, slo,
  values: "care of the body, self-confidence", session, materials,
});
const PARTS = [
  ["head", "hèd"], ["shoulder", "chôouldeur"], ["knee", "ni"], ["toe", "tôou"],
  ["eye", "aï"], ["ear", "ir"], ["nose", "nôouz"], ["mouth", "maous"],
];
function partsGrid() {
  const perRow = 4, rows = [];
  for (let i = 0; i < PARTS.length; i += perRow) {
    const chunk = PARTS.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 32 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 5 — PARTS OF THE BODY", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("Head, shoulders, knees and toes!", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u5_body.png", 320, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the parts of my body in English;"),
    p("• sing “Head, shoulders, knees and toes”;"),
    p("• say: This is my head. These are my ears.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("care of the body, self-confidence.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "EDF3E0" })] }),
        new TableRow({ children: [cell([
          p("1. Do what your teacher says: Stand up! Sit down!"),
          p("2. You want to go out. What do you say?", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u5_song.png", label: "Head, shoulders, knees and toes — the words", url: AUDIO.song }], COLOR),
  ];
}

function ficheS22() {
  const meta = META("Parts of the body — the song",
    "By the end of the lesson, learners will be able to say the parts of the body and sing “Head, shoulders, knees and toes” with the actions.",
    "1 / 2", "song “Head, shoulders, knees and toes” (QR code), Picture dictionary 1, pages 8–9");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Do what I say: Stand up! Raise your hand! Sit down!"),
       fp("2. You want to go out. What do you say?"),
       fp("3. Count from 1 to 10.")],
      [fp("Do. Answer."),
       fp("E.A.: 1. The actions are done."),
       fp("2. May I go out, please?"),
       fp("3. one … ten.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Touch your head, like me. Touch your nose, like me. What are we touching?")],
      [fp("Do. Answer."), fp("E.A.: The head, the nose. (Pupils may answer in their own words; the teacher gives the English words.)")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Parts of the body — the song ». By the end of this lesson, you will be able to say the parts of the body and sing the song with the actions.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look. I say each word and I touch the part of my body: head — shoulder — knee — toe — eye — ear — nose — mouth.")],
      [fp("Look. Listen.")], "Modelling with gestures", "Picture dictionary 1, p. 8–9"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word after me and touch the part of your body."),
       fp("I touch a part without a word: say it."),
       fp("(The teacher touches the nose.)"),
       fp("(The teacher touches an ear.)"),
       fp("Now listen to the song “Head, shoulders, knees and toes” to the end.")],
      [fp("Repeat. Touch. Answer. Listen."),
       fp("E.A.: Nose!"),
       fp("E.A.: Ear!")],
      "Repetition drill with gestures", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So, the parts of the body are: head, shoulder, knee, toe, eye, ear, nose, mouth. We can sing them with the song, touching each part.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Sing the song part by part after me, touching each part of the body:"),
       fp("Part 1: Head, shoulders, knees and toes, knees and toes,"),
       fp("Part 2: Head, shoulders, knees and toes, knees and toes,"),
       fp("Part 3: And eyes and ears and mouth and nose,"),
       fp("Part 4: Head, shoulders, knees and toes, knees and toes."),
       fp("Sing faster and faster!")],
      [fp("Sing with the actions."),
       pAns("E.A.: each part of the body is touched at the right word.", ["right word"], { size: SZ.FICHE })],
      "Song with actions", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the eight parts of the body."),
       fp("2. I touch a part: say it."),
       fp("3. Sing the song with the actions.")],
      [fp("Answer. Sing."),
       pAns("E.A.: head, shoulder, knee, toe, eye, ear, nose, mouth — each word is said correctly.",
        ["head, shoulder, knee, toe, eye, ear, nose, mouth"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}

function ficheS23() {
  const meta = META("This is my head — What is this?",
    "By the end of the lesson, learners will be able to show a part of the body and say “This is my …” / “This is the …”.",
    "2 / 2", "Picture dictionary 1, pages 8–9");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the eight parts of the body."),
       fp("2. I touch a part (knee, ear): say it."),
       fp("3. Sing the song with the actions.")],
      [fp("Answer. Sing."),
       fp("E.A.: 1. head, shoulder, knee, toe, eye, ear, nose, mouth."),
       fp("2. Knee! Ear!"),
       fp("3. The song is sung with the actions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher points to his/her head.) Listen: “This is my head.” What am I showing?")],
      [fp("Listen. Answer."), fp("E.A.: Your head.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « This is my head — What is this? ». By the end of this lesson, you will be able to show a part of the body and say “This is my …”.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look. “Show me your nose!” (a pupil shows the nose). “Point to your knee!” (a pupil points). I touch my mouth and I ask: “What is this?” — “This is the mouth.” I touch my ears: “What are these?” — “These are the ears.”")],
      [fp("Look. Listen. Do.")], "Modelling with gestures", "----"),
    stepRow(["4. Analysis"],
      [fp("I say: “Show me your head!”. What do you do?"),
       fp("You show your head. What do you say?"),
       fp("I touch my nose and ask: “What is this?”. Answer."),
       fp("For TWO parts (ears, eyes), what do we say?")],
      [fp("Do. Answer."),
       fp("E.A.: We show the head."),
       fp("E.A.: This is my head."),
       fp("E.A.: This is the nose."),
       fp("E.A.: These are the ears. / These are the eyes.")],
      "Brainstorming / Modelling", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: “Show me your …!” and “Point to your …!” are commands. To answer, we show the part and we say: “This is my …” or “This is the …”. For two parts, we say: “These are …”.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Work in pairs: one gives the command (“Show me your knee!”), the friend shows and says “This is my knee.”. Change roles."),
       fp("Game “Simon says” with the body: “Simon says: touch your nose!”"),
       fp("Then answer:"),
       fp("1. (I touch my head) What is this?"),
       fp("2. (I touch my ears) What are these?"),
       fp("3. Show me your toes!")],
      [fp("Play. Answer."),
       pAns("E.A.: 1. This is the head.  2. These are the ears.  3. The pupil shows the toes and says: These are my toes.",
        ["This is the head.", "These are the ears.", "These are my toes."], { size: SZ.FICHE })],
      "Game (“Simon says”) / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Show me your shoulder!"),
       fp("2. I touch my mouth: What is this?"),
       fp("3. I touch my eyes: What are these?"),
       fp("4. Give a command to your friend with “Point to …”.")],
      [fp("Do. Answer."),
       pAns("E.A.: 1. This is my shoulder.  2. This is the mouth.  3. These are the eyes.  4. Point to your …!",
        ["This is my shoulder.", "This is the mouth.", "These are the eyes.", "Point to your"], { size: SZ.FICHE })],
      "Individual work / In pairs", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PARTS OF THE BODY"),
    sub("1. My body"),
    img("u5_body.png", 340, 768 / 1408),
    partsGrid(),
    p("", { after: 100 }),
    sub("2. The song: Head, shoulders, knees and toes"),
    p([run("Head, shoulders, knees and toes, knees and toes,", { italic: true })], { center: true, after: 40 }),
    p([run("Head, shoulders, knees and toes, knees and toes,", { italic: true })], { center: true, after: 40 }),
    p([run("And eyes and ears and mouth and nose,", { italic: true })], { center: true, after: 40 }),
    p([run("Head, shoulders, knees and toes, knees and toes.", { italic: true })], { center: true, after: 80 }),
    p("We sing and we touch each part of the body. Then we sing faster!", { after: 120 }),
    sub("3. Show me your …!"),
    pr([run("The commands: "), ...kw("Show me your nose!", "chôou mi iôr nôouz"),
        run("   "), ...kw("Point to your knee!", "poïnte tou iôr ni")]),
    pr([run("The answer: "), ...kw("This is my nose.", "zis iz maï nôouz")], { after: 100 }),
    sub("4. What is this? What are these?"),
    pr([run("For ONE part: "), ...kw("What is this?", "ouot iz zis"),
        run("  →  "), ...kw("This is the head.", "zis iz ze hèd")]),
    pr([run("For TWO parts: "), ...kw("What are these?", "ouot âr ziz"),
        run("  →  "), ...kw("These are the ears.", "ziz âr zi irz")], { after: 140 }),
    audioBox([
      { qr: "qr_u5_body.png", label: "Parts of the body — listen, repeat and touch", url: AUDIO.body },
      { qr: "qr_u5_song.png", label: "Head, shoulders, knees and toes — the words", url: AUDIO.song },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (8 points). ", { bold: true }), run("Touch the part of the body your teacher says:")]),
    p("head — shoulder — knee — toe — eye — ear — nose — mouth", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Answer the question:")]),
    p("1. (The teacher touches the head) What is this?"),
    p("2. (The teacher touches the nose) What is this?"),
    p("3. (The teacher touches the ears) What are these?"),
    p("4. (The teacher touches the eyes) What are these?", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Choose the right answer:")]),
    p("1. We see with the: eyes / ears"),
    p("2. We hear with the: nose / ears"),
    p("3. We eat with the: mouth / toe"),
    p("4. We smell with the: nose / knee", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Sing the song with the actions.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the eight parts are touched correctly (1 point each).", ["eight parts"]),
    pAns("Exercise 2: 1. This is the head.  2. This is the nose.  3. These are the ears.  4. These are the eyes.",
      ["This is the head.", "This is the nose.", "These are the ears.", "These are the eyes."]),
    pAns("Exercise 3: 1. eyes  2. ears  3. mouth  4. nose", ["eyes", "ears", "mouth", "nose"]),
    pAns("Exercise 4: the song is sung with the right actions.", ["right actions"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s24", "SESSION 24 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: PARTS OF THE BODY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the eight parts of the body:", { after: 100 }),
    partsGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the eight parts of the body and touch them."),
    pAns("E.A.: head, shoulder, knee, toe, eye, ear, nose, mouth.",
      ["head, shoulder, knee, toe, eye, ear, nose, mouth."]),
    p("2. Show me your knee!"),
    pAns("E.A.: This is my knee.", ["This is my knee."]),
    p("3. I touch my mouth: What is this?"),
    pAns("E.A.: This is the mouth.", ["This is the mouth."]),
    p("4. I touch my ears: What are these?"),
    pAns("E.A.: These are the ears.", ["These are the ears."]),
    p("5. Sing “Head, shoulders, knees and toes” with the actions."),
    pAns("E.A.: the song is sung with the right actions.", ["right actions"]),
    p("6. Play “Simon says” with the parts of the body."),
    pAns("E.A.: the rule is followed.", ["rule"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s25", "SESSION 25 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 5: PARTS OF THE BODY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (8 points). ", { bold: true }), run("Touch the part of the body your teacher says:")]),
    p("head — shoulder — knee — toe — eye — ear — nose — mouth", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("The teacher touches a part; answer with “This is the …” or “These are the …”:")]),
    p("1. (head)   2. (nose)   3. (ears)   4. (eyes)", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Choose the right answer:")]),
    p("1. Show me your …! → I show / I sing"),
    p("2. For one part we say: This is… / These are…"),
    p("3. For two parts we say: This is… / These are…"),
    p("4. In the song we touch: the parts of the body / the door", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Sing “Head, shoulders, knees and toes” with the actions.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the eight parts are touched correctly (1 point each).", ["eight parts"]),
    pAns("Exercise 2: 1. This is the head.  2. This is the nose.  3. These are the ears.  4. These are the eyes. (1 point each)",
      ["This is the head.", "This is the nose.", "These are the ears.", "These are the eyes."]),
    pAns("Exercise 3: 1. I show  2. This is…  3. These are…  4. the parts of the body (1 point each)",
      ["I show", "This is…", "These are…", "the parts of the body"]),
    pAns("Exercise 4: the song is sung in the right order, with the right actions (4 points).",
      ["right order", "right actions"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS22(), pageBreak(),
    ...ficheS23(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can say the eight parts of the body.",
      "I can touch the part my teacher says.",
      "I can say: This is my head.",
      "I can answer: What is this? — This is the …",
      "I can answer: What are these? — These are the …",
      "I can sing “Head, shoulders, knees and toes”.",
    ], "Well done! See you in Unit 6: DAYS OF THE WEEK!"),
  ];
};
module.exports.COLOR = COLOR;
