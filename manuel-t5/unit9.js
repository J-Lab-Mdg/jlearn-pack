// T5 — UNIT 9 — MY FAMILY (4 séances + révision + test) — Sessions 40 à 45 / 49
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "8B5E3C"; // brun
const TOTAL = 49;
const AUDIO = {
  family: "https://drive.google.com/uc?export=download&id=162hgsy71DlffbSoHqI6ZG-V0QwtYfbJo",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 9 — MY FAMILY", title, slo,
  values: "mutual respect, working together", session, materials,
});
const WORDS = [
  ["father", "fâzeur"], ["mother", "meuzeur"], ["son", "seune"], ["daughter", "dôteur"],
  ["brother", "breuzeur"], ["sister", "sisteur"], ["family", "famili"], ["name", "néime"],
];
function wordGrid() {
  const rows = [];
  for (let i = 0; i < WORDS.length; i += 4) {
    rows.push(new TableRow({ children: WORDS.slice(i, i + 4).map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: 2600, vAlign: VerticalAlign.CENTER }),
    ) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function whoSongBox() {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE “WHO’S THIS?” SONG  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "F0E6DC" })] }),
      new TableRow({ children: [cell([
        p([run("Who, who, who is this?", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Brother, brother, it’s my brother!", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("Who, who, who is that?", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("Sister, sister, it’s my sister!", { italic: true, size: SZ.BODY })], { center: true, after: 60 }),
        p([run("Brother and sister:", { italic: true, size: SZ.BODY })], { center: true }),
        p([run("I love my brother. I love my sister.", { italic: true, size: SZ.BODY })], { center: true, after: 40 }),
      ])] }),
    ],
  });
}
function dialogueBox() {
  const line = (q, a) => [
    pr([run("— " + q, { bold: true, color: COLOR, size: SZ.BODY })], { after: 20 }),
    pr([run("— " + a, { italic: true, size: SZ.BODY })], { after: 50 }),
  ];
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE FAMILY TREE DIALOGUE (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "F0E6DC" })] }),
      new TableRow({ children: [cell([
        ...line("Who’s this?", "This is the father."),
        ...line("What’s his name?", "His name is Randria."),
        ...line("How old is he?", "He is 35 years old."),
        ...line("Who’s this?", "This is the mother."),
        ...line("What’s her name?", "Her name is Solo."),
        ...line("How old is she?", "She is 32 years old."),
      ])] }),
    ],
  });
}

function opening() {
  return [
    unitBanner("UNIT 9 — MY FAMILY", COLOR, "unit9"),
    p("", { after: 100 }),
    p([run("I love my family!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u9_family.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the family words: son, daughter, brother, sister…;"),
    p("• ask and answer: Who’s this? What’s his/her name? How old is he/she?;"),
    p("• read the family words and draw a family tree;"),
    p("• present my family to the class.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, working together.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T4)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F0E6DC" })] }),
        new TableRow({ children: [cell([
          p("In T4 we learned: mother, father, sister, brother — and the Family song."),
          p("This year we add: son, daughter — and we speak about ages and names!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t5_u9_family.png", label: "Who’s this? — listen and sing", url: AUDIO.family }], COLOR),
  ];
}

function ficheS40() {
  const meta = META("The family tree",
    "By the end of the lesson, learners will be able to sing the “Who’s this?” song and understand the family words with the family tree.",
    "1 / 4", "a big family tree, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T4.) Answer these questions:"),
       fp("1. Who lives in your house? (T4 words)"),
       fp("2. What is this? (a picture of a lion — teasing!) No — that is for Unit 10!"),
       fp("3. Count from 40 to 70.")],
      [fp("Answer. Count."),
       fp("E.A.: mother, father, sister, brother; the counting is right.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The song! Listen to “Who’s this?” and sing it with the gestures (point to a friend for “brother”, another for “sister”).")],
      [fp("Listen. Sing.")], "Song", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The family tree ». By the end of this lesson, you will understand who is who in a family, in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the big family tree. First, tell me in your own words who these people are."),
       fp("Now listen in English: Who’s this? This is the father. His name is Randria. He is 35 years old. Who’s this? This is the mother. Her name is Solo. She is 32 years old. And these are the children: two sons and two daughters.")],
      [fp("Look. Explain. Listen.")],
      "“Visual aids” / Modelling", "Big family tree"),
    stepRow(["4. Analysis"],
      [fp("Repeat the new words: son, daughter — the class, one row, one pupil."),
       fp("For a boy we say HIS name, for a girl we say HER name. Repeat: His name is Randria. Her name is Solo."),
       fp("Yes or no? (The teacher points to the mother:) Is this the father?")],
      [fp("Repeat. Answer."),
       fp("E.A.: No. This is the mother.")],
      "Repetition drill", "Family tree"),
    stepRow(["5. Synthesis"],
      [fp("So: the father and the mother have children: the boys are the sons, the girls are the daughters. We ask: Who’s this? What’s his/her name? How old is he/she?")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("I point to a person on the family tree: answer my questions!"),
       fp("Who’s this? What’s his name? How old is she?")],
      [fp("Answer."),
       pAns("E.A.: This is the father. His name is Randria. She is 32 years old.",
        ["This is the father.", "His name is"], { size: SZ.FICHE })],
      "Question-answer / “Visual aids”", "Family tree"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. I point to three persons: who are they?"),
       fp("2. Is this the mother? (pointing to the father)"),
       fp("3. Sing the “Who’s this?” song.")],
      [fp("Answer. Sing."),
       pAns("E.A.: This is the …; No. This is the father. — the song is sung.",
        ["This is the father."], { size: SZ.FICHE })],
      "Individual work", "Family tree"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}

function ficheS41() {
  const meta = META("Reading the family words — my family tree",
    "By the end of the lesson, learners will be able to read the family words fluently and draw a family tree from instructions.",
    "2 / 4", "blackboard, copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What do we call the boy child? the girl child?"),
       fp("2. Who’s this? (pointing on the family tree)"),
       fp("3. Sing one verse of the song.")],
      [fp("Answer. Sing."),
       fp("E.A.: the son; the daughter; This is the …")],
      "Individual work", "Family tree"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick song: “Who’s this?” with the gestures!")],
      [fp("Sing.")], "Song", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ the family words and DRAW a family tree in the copy-book.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the words on the blackboard: father, mother, son, daughter, brother, sister. Listen to me reading them.")],
      [fp("Look. Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Read the words after me: all together, by rows, then alone."),
       fp("I point to a word: read it!"),
       fp("Which words are for boys? Which words are for girls?")],
      [fp("Read. Answer."),
       fp("E.A.: father, son, brother — mother, daughter, sister.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, we can read all the family words. Now let’s use them to draw!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Drawing dictation (from the syllabus): draw a family tree in your copy-book with MY instructions: “a father, a mother, two sons, two daughters”. Write the words under the persons."),
       fp("Show your tree to your neighbour and read the words together.")],
      [fp("Draw. Write. Read together."),
       pAns("E.A.: the tree shows the father, the mother, two sons, two daughters, with the words written and read.",
        ["two sons, two daughters"], { size: SZ.FICHE })],
      "Drawing dictation / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read the six family words."),
       fp("2. Show the sons on your tree."),
       fp("3. How many daughters are there on your tree?")],
      [fp("Read. Show. Answer."),
       pAns("E.A.: the words are read fluently; There are two daughters.",
        ["read fluently", "There are two daughters."], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}

function ficheS42() {
  const meta = META("Who is this? — the gallery walk",
    "By the end of the lesson, learners will be able to present the members of their family from a picture: Who is this? — This is my… His/Her name is… He/She is…",
    "3 / 4", "family pictures brought by the pupils, tape");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read: daughter, brother, mother."),
       fp("2. Who’s this? What’s her name? (family tree)"),
       fp("3. For a boy: his or her?")],
      [fp("Read. Answer."),
       fp("E.A.: the words are read; This is …; his.")],
      "Individual work", "Family tree"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today, YOUR family comes to school… in pictures! Show your picture to your neighbour.")],
      [fp("Show the picture.")], "In pairs", "Family pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to present our families. By the end of this lesson, you will answer questions about YOUR family, with confidence!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model (with my picture): “This is my sister. Her name is Koly. She is 12.”")],
      [fp("Listen.")], "Modelling", "A picture"),
    stepRow(["4. Analysis"],
      [fp("Repeat the model: the class, one row, one pupil."),
       fp("What do we say for a brother? (his!) And for a sister? (her!)")],
      [fp("Repeat. Answer."),
       fp("E.A.: This is my brother. His name is … / This is my sister. Her name is …")],
      "Repetition drill", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: Who is this? — This is my (sister). Her name is (Koly). She is (12). Three little sentences and everyone knows your family!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Gallery walk (from the syllabus): team A sticks the pictures on the wall and stands next to them. Team B walks, points to a person and asks: “Who is this?” The owner answers: “This is my sister. Her name is Koly. She is 12.”"),
       fp("Then the teams change roles!")],
      [fp("Stick. Walk. Ask. Answer. Change roles."),
       pAns("E.A.: — Who is this? — This is my …. His/Her name is …. He/She is ….",
        ["Who is this?", "This is my"], { size: SZ.FICHE })],
      "“Gallery walk” / Two teams", "Pictures, tape"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Present one person of your picture in three sentences."),
       fp("2. Ask me “Who is this?” about my picture."),
       fp("3. His or her? (a sister / a father)")],
      [fp("Present. Ask. Answer."),
       pAns("E.A.: This is my … His/Her name is … He/She is … — her; his.",
        ["This is my"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}

function ficheS43() {
  const meta = META("We are a family! (role play)",
    "By the end of the lesson, learners will be able to present a whole family in a group role play, with names and ages.",
    "4 / 4", "role papers (father, mother, brothers, sisters)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Present one member of your family."),
       fp("2. Read: son, daughter, family."),
       fp("3. Sing “Who’s this?”.")],
      [fp("Present. Read. Sing."),
       fp("E.A.: This is my … His/Her name is …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today, the class becomes… families! Make groups of five.")],
      [fp("Make groups.")], "Group work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to play a family. By the end of this lesson, your group will present its family to the class, all in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model (from the syllabus): “My name is Rija. This is my brother. His name is Koto. He is 12. This is my sister. Her name is Fara. She is 14. This is my father; his name is Rabe. He is 45. This is my mother; her name is Soa. She is 44.”")],
      [fp("Listen.")], "Modelling", "----"),
    stepRow(["4. Analysis"],
      [fp("In your group, choose the roles: a father, a mother, brothers and sisters. Choose the names and the ages."),
       fp("Prepare your presentation: one pupil presents ALL the family.")],
      [fp("Choose roles, names, ages. Prepare.")],
      "“Role play” / Group work", "Role papers"),
    stepRow(["5. Synthesis"],
      [fp("Remember the model: My name is … This is my (brother). His name is … He is … — and for the girls: her / she.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Each group comes to the front and presents its family. The family members wave when they are presented!"),
       fp("The class claps and can ask one question: “Who is this?”")],
      [fp("Present the family. Wave. Ask. Clap."),
       pAns("E.A.: My name is Rija. This is my brother. His name is Koto. He is 12. This is my mother; her name is Soa…",
        ["My name is", "This is my brother."], { size: SZ.FICHE })],
      "“Role play” / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Present two members of your role-play family."),
       fp("2. What’s the name of your “father”?"),
       fp("3. How old is your “sister”?")],
      [fp("Present. Answer."),
       pAns("E.A.: This is my … His/Her name is … — His name is … — She is … years old.",
        ["His name is", "She is"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 9", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MY FAMILY"),
    sub("1. The family words"),
    img("u9_family.png", 440, 768 / 1408),
    wordGrid(),
    p("", { after: 100 }),
    sub("2. The song"),
    whoSongBox(),
    p("", { after: 100 }),
    sub("3. The questions of the family"),
    dialogueBox(),
    p("", { after: 100 }),
    sub("4. His or her?"),
    pr([run("For a boy or a man: "), ...kw("his", "hiz"), run(" — His name is Koto. "), run("He", { bold: true, color: C.BLUE }), run(" is 12.")]),
    pr([run("For a girl or a woman: "), ...kw("her", "heur"), run(" — Her name is Fara. "), run("She", { bold: true, color: C.BLUE }), run(" is 14.")], { after: 100 }),
    sub("5. I present my family"),
    pr([run("My name is Rija. ", { bold: true, color: C.BLUE }),
        run("This is my brother. His name is Koto. He is 12. ", { bold: true, color: C.BLUE }),
        run("This is my mother; her name is Soa. She is 44.", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t5_u9_family.png", label: "Who’s this? + the family dialogue — listen and repeat", url: AUDIO.family },
    ], COLOR),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("The teacher points to four persons on the family tree: who are they?")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Read: father — daughter — brother — family.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (6 points). ", { bold: true }), run("His or her? He or she?")]),
    p("1. This is my sister. …… name is Lala."),
    p("2. This is my father. …… name is Rabe."),
    p("3. My brother? …… is 12."),
    p("4. My mother? …… is 40.", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Present two members of your family (three sentences each).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: This is the father / the mother / a son / a daughter (1 point each).", ["This is the father"]),
    pAns("Exercise 2: the four words are read correctly (1 point each).", ["four words"]),
    pAns("Exercise 3: 1. Her  2. His  3. He  4. She (1.5 points each).", ["Her", "His"]),
    pAns("Exercise 4: This is my … His/Her name is … He/She is … (3 points each).", ["This is my"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s44", "SESSION 44 / 49", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 9: MY FAMILY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the family words:", { after: 100 }),
    wordGrid(),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The teacher points on the family tree: who are they?"),
    pAns("E.A.: This is the father / the mother / a son / a daughter.", ["This is the father"]),
    p("2. Read the six family words."),
    pAns("E.A.: the words are read fluently.", ["read fluently"]),
    p("3. Draw a family tree: a father, a mother, one son, two daughters."),
    pAns("E.A.: the tree is right, the words are written.", ["tree is right"]),
    p("4. Answer: What’s his name? How old is she?"),
    pAns("E.A.: His name is … She is … years old.", ["His name is"]),
    p("5. Present your family in four sentences."),
    pAns("E.A.: My name is … This is my … His/Her name is … He/She is …", ["My name is"]),
    p("6. Sing the “Who’s this?” song."),
    pAns("E.A.: the song is sung.", ["song is sung"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s45", "SESSION 45 / 49", { bold: true, size: 28, after: 60 }),
    p([run("T5 TEST PAPER — UNIT 9: MY FAMILY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("The teacher points to four persons on the family tree: who are they?")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Read four family words on the blackboard.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Answer: What’s his name? What’s her name? How old is he? How old is she? (about the family tree)")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (8 points). ", { bold: true }), run("Present your family (or your role-play family) in four sentences or more.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: This is the … (1 point each).", ["This is the"]),
    pAns("Exercise 2: the words are read correctly (1 point each).", ["read correctly"]),
    pAns("Exercise 3: His/Her name is … He/She is … years old (1 point each).", ["His/Her name is"]),
    pAns("Exercise 4: My name is … This is my … His/Her name is … He/She is … (2 points per correct sentence).", ["My name is"]),
  ];
}

module.exports = function unit9() {
  return [
    ...opening(), pageBreak(),
    ...ficheS40(), pageBreak(),
    ...ficheS41(), pageBreak(),
    ...ficheS42(), pageBreak(),
    ...ficheS43(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 9", COLOR, [
      "I can say the family words: son, daughter, brother, sister…",
      "I can read the family words.",
      "I can ask: Who’s this? What’s his/her name? How old is he/she?",
      "I can use his/her and he/she.",
      "I can present my family.",
      "I can sing the “Who’s this?” song.",
    ], "Well done! See you in Unit 10: WILD ANIMALS!"),
  ];
};
module.exports.COLOR = COLOR;
