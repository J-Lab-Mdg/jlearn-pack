// T5 — UNIT 8 — IN MY HOUSE (4 séances + révision + test) — Sessions 34 à 39 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "1B5E20"; // vert foncé
const TOTAL = 49;
const AUDIO = {
  house: "https://drive.google.com/uc?export=download&id=16kBQbrPY-eLZRH3ZfGkKS9NFti-m71xc",
  rooms: "https://drive.google.com/uc?export=download&id=1zwWta9VGHmAJ8eP1GyK421LcPgDuEF-p",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 8 — IN MY HOUSE", title, slo,
  values: "mutual respect, working together", session, materials,
});
const ROOMS = [
  ["bedroom", "bèdroume"], ["bathroom", "bâssroume"], ["kitchen", "kitchène"],
  ["living room", "livinng roume"], ["dining room", "daïninng roume"],
];
const THINGS = [
  ["bed", "bède"], ["pillow", "pilô"], ["soap", "sôoupe"], ["towel", "taouol"], ["toothbrush", "toussbreuch"],
  ["stove", "stôouv"], ["cooking pot", "koukinng pote"], ["sofa", "sôoufa"], ["stool", "stoule"], ["armchair", "ârmtchèr"],
  ["table", "téibol"], ["chair", "tchèr"], ["plate", "pléite"], ["spoon", "spoune"], ["glass", "glâss"],
];
function grid(words, perRow, size) {
  const rows = [];
  for (let i = 0; i < words.length; i += perRow) {
    rows.push(new TableRow({ children: words.slice(i, i + perRow).map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function roomThingsTable() {
  const row = (room, things) => new TableRow({ children: [
    cell([p([run(room, { bold: true, color: COLOR, size: 24 })], { after: 20 })], { w: 3200, vAlign: VerticalAlign.CENTER, shade: "E4EFE5" }),
    cell([p([run(things, { size: 24 })], { after: 20 })], { w: 7200, vAlign: VerticalAlign.CENTER }),
  ]});
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      row("bedroom", "bed, pillow"),
      row("bathroom", "soap, towel, toothbrush"),
      row("kitchen", "stove, cooking pot"),
      row("living room", "sofa, stool, armchair"),
      row("dining room", "table, chair, plate, spoon, glass"),
    ],
  });
}
function houseSongBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “WELCOME TO MY HOUSE” SONG  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "E4EFE5" })] }),
      new TableRow({ children: [cell([
        p([run("Welcome to my house,", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("my family and me!", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("In the living room, I watch TV. (2x)", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("In the bathroom, I take a shower.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("In the kitchen, I cook good food.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("In the dining room, I have breakfast.", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("In the bedroom, I go to sleep.", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 8 — IN MY HOUSE", COLOR, "unit8"),
    p("", { after: 100 }),
    p([run("Welcome to my house!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u8_house.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say and read the five rooms of the house;"),
    p("• say the furniture and the objects of each room;"),
    p("• sing the “Welcome to my house” song;"),
    p("• describe a house to my friend.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, working together.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "E4EFE5" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned the parts of the house: the door, the window, the roof, the wall."),
          p("Point to the door and the windows of the classroom!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u8_house.png", label: "Welcome to my house — listen and sing", url: AUDIO.house }], COLOR),
  ];
}

function ficheS34() {
  const meta = META("The rooms of the house",
    "By the end of the lesson, learners will be able to say the five rooms of the house clearly and sing the “Welcome to my house” song.",
    "1 / 4", "big picture of a house with its rooms, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What did you have for breakfast? (Unit 7)"),
       fp("2. Name the parts of the house you know (T4)."),
       fp("3. Point to the door / the windows.")],
      [fp("Answer. Point."),
       fp("E.A.: I had …; door, window, roof, wall.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Where do we sleep at home? Where do we cook? Today, the house speaks English!")],
      [fp("Answer in their own words.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The rooms of the house ». By the end of this lesson, you will say the five rooms and sing the song of the house.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the big picture of the house on the blackboard. Listen: the bedroom… the bathroom… the kitchen… the living room… the dining room. (The teacher points to each room.)")],
      [fp("Look. Listen.")], "“Visual aids”", "Big picture of the house"),
    stepRow(["4. Analysis"],
      [fp("Repeat each room: the class, one row, one pupil."),
       fp("I say a room: point to it on the picture."),
       fp("I say a word: draw a little person in the right room on your small picture."),
       fp("Where do we sleep? Where do we cook?")],
      [fp("Repeat. Point. Draw. Answer."),
       fp("E.A.: the little person is in the right room; in the bedroom; in the kitchen.")],
      "Repetition drill / “Visual aids”", "The picture"),
    stepRow(["5. Synthesis"],
      [fp("So, the five rooms of the house are: the bedroom, the bathroom, the kitchen, the living room, the dining room.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The song! Listen to “Welcome to my house” to the end."),
       fp("Sing part by part after me, with the gestures: I watch TV (mime), I take a shower (mime), I cook good food (mime)…"),
       fp("Sing the whole song!")],
      [fp("Listen. Sing part by part. Sing the whole song with the gestures."),
       pAns("E.A.: the song is sung: “Welcome to my house, my family and me!…”",
        ["Welcome to my house"], { size: SZ.FICHE })],
      "Song / T.P.R. (act it out)", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the five rooms of the house."),
       fp("2. I say a room: point to it on the picture."),
       fp("3. Sing the song with the class.")],
      [fp("Say. Point. Sing."),
       pAns("E.A.: bedroom, bathroom, kitchen, living room, dining room — the song is sung.",
        ["bedroom, bathroom, kitchen"], { size: SZ.FICHE })],
      "Individual work", "The picture"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}

function ficheS35() {
  const meta = META("The furniture and the objects",
    "By the end of the lesson, learners will be able to say the names of the furniture and the objects, and put each one in the right room.",
    "2 / 4", "big house picture, small pictures of furniture and objects, tape or glue, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the five rooms of the house."),
       fp("2. Sing “Welcome to my house”."),
       fp("3. Where do we have breakfast?")],
      [fp("Answer. Sing."),
       fp("E.A.: the five rooms; in the dining room.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(The teacher mimes sleeping on a pillow.) What do I need to sleep? Today: the things of the house!")],
      [fp("Look. Guess.")], "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the furniture and the objects of the house. By the end of this lesson, you will say them and put them in the right room.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the small pictures and listen: in the bedroom — a bed, a pillow; in the bathroom — soap, a towel, a toothbrush; in the kitchen — a stove, a cooking pot; in the living room — a sofa, a stool, an armchair; in the dining room — a table, a chair, a plate, a spoon, a glass.")],
      [fp("Look. Listen.")], "“Visual aids” / Audio", "Small pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat each word: the class, one row, one pupil."),
       fp("I show a small picture: say the word AND the room."),
       fp("Come to the front, take a small picture, say the word, and stick it in the right room of the big house!")],
      [fp("Repeat. Say. Stick."),
       fp("E.A.: “A cooking pot — in the kitchen!” — the picture is stuck in the right room.")],
      "Repetition drill / Matching", "Big picture, small pictures, tape"),
    stepRow(["5. Synthesis"],
      [fp("So, every thing has its room: the bed is in the bedroom, the stove is in the kitchen, the sofa is in the living room…")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listening game: I say a word (towel! spoon! armchair!); point to the thing on the big picture."),
       fp("In pairs: pupil A asks “Where is the (bed)?”; pupil B answers “The (bed) is in the (bedroom).” Change roles.")],
      [fp("Point. Ask. Answer."),
       pAns("E.A.: — Where is the cooking pot? — The cooking pot is in the kitchen.",
        ["Where is the", "is in the"], { size: SZ.FICHE })],
      "Game / In pairs", "Big picture"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I show five small pictures: say the words."),
       fp("2. Where is the pillow? Where is the glass?"),
       fp("3. Name two things of the bathroom.")],
      [fp("Say. Answer."),
       pAns("E.A.: the words are said; The pillow is in the bedroom. The glass is in the dining room. — soap, towel, toothbrush.",
        ["The pillow is in the bedroom."], { size: SZ.FICHE })],
      "Individual work", "Small pictures"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}

function ficheS36() {
  const meta = META("Reading the house words",
    "By the end of the lesson, learners will be able to read all the house words fluently and match them with the pictures.",
    "3 / 4", "big house picture, word papers, tape or glue, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the five rooms."),
       fp("2. Name two things of the kitchen and two things of the living room."),
       fp("3. Where is the toothbrush?")],
      [fp("Answer."),
       fp("E.A.: the rooms; stove, cooking pot — sofa, armchair, stool; in the bathroom.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick song: “Welcome to my house” with the gestures!")],
      [fp("Sing.")], "Song", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ all the house words. By the end of this lesson, you will read them fluently, like champions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the words written on the blackboard: bedroom, bathroom, kitchen… bed, pillow, soap… Listen to me reading them, finger under the words.")],
      [fp("Look. Listen. Follow with the eyes.")],
      "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read the words after me: all together, by rows, then alone."),
       fp("Which words have “room” inside? What does it tell us?"),
       fp("I point to a word: read it!")],
      [fp("Read. Answer."),
       fp("E.A.: bedroom, bathroom, living room, dining room — they are rooms of the house!")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, we can read all the house words: the rooms and the things inside them.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Word papers game (from the syllabus): each pupil takes a paper with one word, reads it ALOUD, and sticks it under the right picture on the big house."),
       fp("The class checks: is the word in the right place?")],
      [fp("Take a paper. Read aloud. Stick it. Check together."),
       pAns("E.A.: “towel!” — the paper is stuck under the towel in the bathroom.",
        ["towel!"], { size: SZ.FICHE })],
      "Matching / Whole-class work", "Word papers, big picture, tape"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read six house words on the blackboard."),
       fp("2. I show a picture: find and read the right word."),
       fp("3. Read one line of the song.")],
      [fp("Read. Find. Read."),
       pAns("E.A.: the words are read fluently, without mistakes.",
        ["read fluently"], { size: SZ.FICHE })],
      "Individual work", "Blackboard, big picture"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}

function ficheS37() {
  const meta = META("I describe a house",
    "By the end of the lesson, learners will be able to draw a house with its rooms and furniture and describe it to a friend.",
    "4 / 4", "big sheets, pencils");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read: kitchen, armchair, toothbrush."),
       fp("2. Where is the sofa?"),
       fp("3. Sing one verse of the song.")],
      [fp("Read. Answer. Sing."),
       fp("E.A.: the words are read; The sofa is in the living room.")],
      "Individual work", "Blackboard"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Remember your dream classroom (Unit 6)? Today: your house! You will draw it and present it.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to describe a house. By the end of this lesson, you will present a house with its rooms and its furniture, all in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model: “This is my house. There is a kitchen. There is a living room. In the living room, there is a sofa. There are three chairs in the dining room.”")],
      [fp("Listen.")], "Modelling", "----"),
    stepRow(["4. Analysis"],
      [fp("What did I use to present? (There is / There are — Unit 6!)"),
       fp("Repeat the model sentences: the class, one row, one pupil."),
       fp("Draw a house with its rooms and its furniture on a big sheet.")],
      [fp("Answer. Repeat. Draw."),
       fp("E.A.: There is / There are; the drawing shows rooms and furniture.")],
      "Repetition drill / Drawing", "Big sheets, pencils"),
    stepRow(["5. Synthesis"],
      [fp("So, to describe a house: This is my house. There is a (kitchen). In the (kitchen), there is a (stove). There are (four plates) in the (dining room).")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs (from the syllabus): describe YOUR drawing to your friend. The friend listens and points to the rooms and the things on the drawing. Then change roles.")],
      [fp("Describe. Listen. Point. Change roles."),
       pAns("E.A.: This is my house. There is a bedroom. In the bedroom, there is a bed and a pillow…",
        ["This is my house.", "There is"], { size: SZ.FICHE })],
      "In pairs", "The drawings"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Describe your house in four sentences."),
       fp("2. Where is the bed in your drawing?"),
       fp("3. Read three house words.")],
      [fp("Describe. Answer. Read."),
       pAns("E.A.: the house is described with There is / There are; The bed is in the bedroom.",
        ["There is", "There are"], { size: SZ.FICHE })],
      "Individual work", "The drawings"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 8", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("IN MY HOUSE"),
    sub("1. The five rooms"),
    img("u8_house.png", 440, 768 / 1408),
    grid(ROOMS, 5, 22),
    p("", { after: 100 }),
    sub("2. The things of each room"),
    roomThingsTable(),
    p("", { after: 60 }),
    grid(THINGS, 5, 22),
    p("", { after: 100 }),
    sub("3. The song"),
    houseSongBox(),
    p("", { after: 100 }),
    sub("4. Where is…?"),
    pr([run("The question: "), ...kw("Where is the bed?", "ouèr iz ze bède")]),
    pr([run("The answer: "), ...kw("The bed is in the bedroom.", "ze bède iz ine ze bèdroume")], { after: 100 }),
    sub("5. I describe my house"),
    pr([run("This is my house. ", { bold: true, color: C.BLUE }),
        run("There is a kitchen. ", { bold: true, color: C.BLUE }),
        run("In the living room, there is a sofa. ", { bold: true, color: C.BLUE }),
        run("There are three chairs in the dining room.", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u8_house.png", label: "Welcome to my house — listen and sing", url: AUDIO.house },
      { qr: "qr_t5_u8_rooms.png", label: "The rooms and the things — listen and repeat", url: AUDIO.rooms },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Say the five rooms of the house.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("Where is it? Answer with a full sentence:")]),
    p("1. the bed → ……"),
    p("2. the cooking pot → ……"),
    p("3. the soap → ……"),
    p("4. the sofa → ……"),
    p("5. the plate → ……", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Read: bathroom — pillow — stove — armchair — toothbrush.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Sing the “Welcome to my house” song with the gestures.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: bedroom, bathroom, kitchen, living room, dining room (1 point each).", ["bedroom, bathroom, kitchen"]),
    pAns("Exercise 2: The bed is in the bedroom. The cooking pot is in the kitchen. The soap is in the bathroom. The sofa is in the living room. The plate is in the dining room.",
      ["The bed is in the bedroom."]),
    pAns("Exercise 3: the five words are read correctly (1 point each).", ["five words"]),
    pAns("Exercise 4: the song is sung with the gestures (5 points).", ["song is sung"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s38", "SESSION 38 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 8: IN MY HOUSE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the rooms and the things:", { after: 100 }),
    roomThingsTable(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Say the five rooms of the house."),
    pAns("E.A.: bedroom, bathroom, kitchen, living room, dining room.", ["bedroom, bathroom"]),
    p("2. Name two things of each room."),
    pAns("E.A.: bed/pillow — soap/towel — stove/cooking pot — sofa/armchair — table/plate…", ["bed/pillow"]),
    p("3. Where is the towel? Where is the spoon?"),
    pAns("E.A.: The towel is in the bathroom. The spoon is in the dining room.", ["The towel is in the bathroom."]),
    p("4. Read eight house words on the blackboard."),
    pAns("E.A.: the words are read fluently.", ["read fluently"]),
    p("5. Sing “Welcome to my house”."),
    pAns("E.A.: the song is sung with the gestures.", ["song is sung"]),
    p("6. Describe your house in four sentences."),
    pAns("E.A.: This is my house. There is … There are …", ["This is my house."]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s39", "SESSION 39 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 8: IN MY HOUSE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (5 points). ", { bold: true }), run("Say the five rooms of the house.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (5 points). ", { bold: true }), run("The teacher names five things: say the room of each thing (full sentence).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (5 points). ", { bold: true }), run("Read five house words on the blackboard.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (5 points). ", { bold: true }), run("Describe a house in four sentences with There is / There are.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the five rooms are said (1 point each).", ["five rooms"]),
    pAns("Exercise 2: The … is in the … (1 point each).", ["is in the"]),
    pAns("Exercise 3: the words are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 4: This is my house. There is … There are … (5 points).", ["There is", "There are"]),
  ];
}

module.exports = function unit8() {
  return [
    ...opening(), pageBreak(),
    ...ficheS34(), pageBreak(),
    ...ficheS35(), pageBreak(),
    ...ficheS36(), pageBreak(),
    ...ficheS37(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 8", COLOR, [
      "I can say the five rooms of the house.",
      "I can say the furniture and the objects of each room.",
      "I can read the house words.",
      "I can say: The bed is in the bedroom.",
      "I can sing “Welcome to my house”.",
      "I can describe a house.",
    ], "Well done! See you in Unit 9: MY FAMILY!"),
  ];
};
module.exports.COLOR = COLOR;
