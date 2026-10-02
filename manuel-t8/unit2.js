// T8 — UNIT 2 — CLASSROOM COMMUNICATION (4 séances + révision + test) — Sessions 16 à 21 / 78
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // rouge brique
const SHADE = "FADBD8";
const TOTAL = 78;
const AUDIO = {
  instructions: "https://drive.google.com/uc?export=download&id=1ao6ChEnrNlM2iWGbjK_OCHsqFsPaq5gG",
  borrow: "https://drive.google.com/uc?export=download&id=10e2G8fifuL61XKPNxAdvNexwV4ZauXys",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — CLASSROOM COMMUNICATION", title, slo,
  values: "self-confidence, mutual respect", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const vocab = (word, pron, expl) => bullet([
  ...kw(word, pron), ...(expl ? [run("  —  " + expl)] : [])]);
function box(title, children, shade = SHADE) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(title, { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade })] }),
      new TableRow({ children: [cell(children)] }),
    ],
  });
}
function borrowDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE BORROWING DIALOGUE (listening passage)", [
    L("Koto", "Excuse me, Fara! Can I borrow your ruler, please?"),
    L("Fara", "Of course! Here you are."),
    L("Koto", "Thank you! Oh no… I also forgot my blue pen. Could you lend me a pen, please?"),
    L("Fara", "Sorry, I have only one pen. Ask Hery!"),
    L("Koto", "Hery, may I borrow your blue pen, please?"),
    L("Hery", "Sure! Here you are. But please give it back before sport time."),
    L("Koto", "No problem! … Hery, here is your pen. Thank you very much!"),
    L("Hery", "You’re welcome, Koto!"),
  ]);
}
function instructionsDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("IN THE CLASSROOM (reading dialogue)", [
    L("Teacher", "Good morning, class! Sit down, please. Open your books at page ten."),
    L("Students", "Yes, Madam!"),
    L("Teacher", "Naly, come to the board, please. Write the date."),
    L("Naly", "Excuse me, Vero, you’re on the way!"),
    L("Vero", "Oh, sorry! Go ahead."),
    L("Teacher", "Very good, Naly! Now go back to your seat. Everybody, listen carefully and repeat after me. Don’t talk, please!"),
    L("Students", "Yes, Madam!"),
    L("Teacher", "Well done, class! Now close your books and work in pairs."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 2 — CLASSROOM COMMUNICATION", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Could you lend me a pen, please?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_stickfigures.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• follow the classroom instructions: affirmative and negative commands;"),
    p("• say politely: Excuse me, you’re on the way!;"),
    p("• borrow and lend school things: Can / May I borrow…? Could you lend me…?;"),
    p("• use the magic answers: Here you are! — Here is your…, thank you very much!;"),
    p("• make my voice go UP in yes/no questions (the intonation);"),
    p("• read a classroom dialogue and act it out;"),
    p("• write my own set of classroom instructions.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 1)", [
      p("In Unit 1, you talked about feelings and plans: I feel happy! I am going to visit my grandmother."),
      p("In Unit 2, the classroom speaks English: every instruction, every polite request — in English, with confidence!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u2_instructions.png", label: "The classroom instructions — listen and do", url: AUDIO.instructions }], COLOR),
  ];
}

// ---------- S16 — Classroom instructions ----------
function ficheS16() {
  const meta = META("The classroom instructions — affirmative and negative commands",
    "By the end of the lesson, learners will be able to follow the teacher’s oral instructions and react to them.",
    "1 / 4", "stick figures, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 1.) Answer these questions:"),
       fp("1. How are you feeling today?"),
       fp("2. What are you going to do after school?")],
      [fp("Answer."),
       fp("E.A.: I feel great!; I am going to help my mother.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: watch my gestures and guess the instruction! (T mimes: stand up… open a book… finger on the lips…)")],
      [fp("Watch. Guess from gestures.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The classroom instructions ». By the end of this lesson, your body will understand English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the instructions and TICK the stick figures you hear: stand up, sit down, raise your hand, come to the board… Then listen and repeat.")],
      [fp("Listen. Tick the stick figures. Repeat.")],
      "Drawing stick-figures / Audio", "Stick figures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Observe the two families: AFFIRMATIVE commands (Stand up! Listen carefully!) and NEGATIVE commands (DON’T talk! DON’T run!). And the polite sentence: “Excuse me, you’re on the way!”")],
      [fp("Observe. Classify + / −."),
       fp("E.A.: Open your books → + ; Don’t run → −.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the command = the verb first! Affirmative: verb… Negative: Don’t + verb… Listen and PERFORM the instructions with your body.")],
      [fp("Listen. Perform. Copy.")], "Whole-class work", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Simon says! “Simon says: stand up!” → you stand. “Sit down!” without Simon → don’t move! The last standing student wins.")],
      [fp("Play Simon says."),
       pAns("E.A.: correct reactions to the commands, with and without “Simon says”.",
        ["correct reactions"], { size: SZ.FICHE })],
      "Simon says", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two affirmative and two negative commands."),
       fp("2. What do you say when a classmate blocks your way?")],
      [fp("Answer."),
       pAns("E.A.: Stand up! Listen! Don’t talk! Don’t run!; Excuse me, you’re on the way!",
        ["Don’t talk!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LESSON OF THE DAY — SESSION 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CLASSROOM INSTRUCTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u2_stickfigures.png", 420, 768 / 1408),
    box("AFFIRMATIVE COMMANDS (verb first!)", [
      vocab("Stand up! / Sit down!", "stannde eup / site daoune"),
      vocab("Open / Close your books!", "ôoupeune / clôouz iôr bouks"),
      vocab("Raise your hand!", "réiz iôr hannde"),
      vocab("Come to the board! / Go back to your seat!", "keume tou dhe bôrde / gôou bak tou iôr siite"),
      vocab("Listen carefully! / Repeat after me!", "lisseune kèrfouli / ripite afteur mi"),
      vocab("Work in pairs!", "oueurk inne pèrz"),
    ]),
    p("", { after: 60 }),
    box("NEGATIVE COMMANDS: DON’T + VERB", [
      bullet([run("Don’t talk!", { bold: true, color: C.RED }), run("   "), run("Don’t run in the classroom!", { bold: true, color: C.RED }), run("   "), run("Don’t forget your books!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE POLITE SENTENCE", [
      bullet([...kw("Excuse me, you’re on the way!", "ikskiouz mi, iour onne dhe ouéi"), run("  —  "), run("Oh, sorry! Go ahead.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u2_instructions.png", label: "Listen and do — the instructions", url: AUDIO.instructions }], COLOR),
  ];
}

// ---------- S17 — Lending and borrowing ----------
function ficheS17() {
  const meta = META("Lending and borrowing — can, may, could",
    "By the end of the lesson, learners will be able to borrow and lend school things politely with can/may/could.",
    "2 / 4", "school things, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one negative command."),
       fp("2. Simon says: raise your hand!")],
      [fp("Answer. React."),
       fp("E.A.: Don’t talk!; (hand raised!)")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: write down all the school things you know in one minute: a pen, a ruler… Go!")],
      [fp("Write school things."),
       fp("E.A.: a pen, a ruler, a book, a slate, an eraser…")],
      "Brainstorming", "Notebooks"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn how to BORROW and LEND politely. By the end of this lesson, you will never be blocked without a pen again!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue: 1. What does Koto borrow first? 2. Who lends the blue pen? 3. What must Koto do before sport time? Then listen and repeat.")],
      [fp("Listen. Answer. Repeat."),
       fp("E.A.: a ruler; Hery; give the pen back.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Observe the polite ladder: Can I borrow…? (friendly) → May I borrow…? (polite) → COULD you lend me…? (super polite!). And the answers: Here you are! — Here is your…, thank you very much! BORROW = I take; LEND = I give; GIVE BACK = I return!")],
      [fp("Observe. Find the structures."),
       fp("E.A.: can/may I + verb; could you + verb.")],
      "Eliciting technique", "Dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: Can/May I borrow your…, please? — Could you lend me a…, please? — Here you are! — and always GIVE BACK with: Here is your…, thank you very much! Your voice goes UP ↗ at the end of these yes/no questions!")],
      [fp("Listen. Repeat with intonation. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill then role play: replace ruler/pen with YOUR school things and act the dialogue in pairs — real objects in hand!")],
      [fp("Substitute. Role play."),
       pAns("E.A.: May I borrow your eraser, please? — Sure! Here you are!",
        ["Here you are!"], { size: SZ.FICHE })],
      "Substitution drill / Role play", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask to borrow a ruler in two polite ways."),
       fp("2. What do you say when you give the thing back?")],
      [fp("Answer."),
       pAns("E.A.: Can/May I borrow your ruler, please? Could you lend me a ruler, please?; Here is your ruler, thank you very much!",
        ["thank you very much!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(17, TOTAL, meta, rows, "s17");
}
function lessonS17() {
  return [
    p([run("LESSON OF THE DAY — SESSION 17", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LENDING AND BORROWING", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    borrowDialogueBox(),
    p("", { after: 60 }),
    box("THE THREE VERBS", [
      vocab("to borrow", "tou borôou", "I TAKE for a moment"),
      vocab("to lend", "tou lènnde", "I GIVE for a moment"),
      vocab("to give back", "tou guive bak", "I RETURN — always!"),
    ]),
    p("", { after: 60 }),
    box("THE POLITE LADDER (with the voice UP ↗)", [
      bullet([run("Can I borrow your ruler, please? ↗", { bold: true, color: C.BLUE }), run("  — friendly")]),
      bullet([run("May I borrow your pen, please? ↗", { bold: true, color: C.BLUE }), run("  — polite")]),
      bullet([run("Could you lend me a pen, please? ↗", { bold: true, color: C.BLUE }), run("  — super polite!")]),
      bullet([run("Answers: "), run("Of course! Here you are.", { bold: true, color: C.GREEN }), run("  /  "), run("Sorry, I have only one.", { bold: true, color: C.GREEN })]),
      bullet([run("Giving back: "), run("Here is your pen, thank you very much!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u2_borrow.png", label: "The borrowing dialogue — listen and role play", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S18 — Reading ----------
function ficheS18() {
  const meta = META("Reading — the classroom dialogue",
    "By the end of the lesson, learners will be able to read a classroom dialogue aloud comprehensibly and infer information from it.",
    "3 / 4", "dialogue in the book, stick figures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Borrow or lend: Fara gives her ruler — she …s it."),
       fp("2. Ask super politely for a blue pen.")],
      [fp("Answer."),
       fp("E.A.: lends; Could you lend me a blue pen, please?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: match the stick figures with the instructions: this figure sits… this one raises the hand… Which instructions will be in our dialogue?")],
      [fp("Match. Predict.")], "Using visual aids", "Stick figures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a classroom dialogue — teacher and students. By the end of this lesson, you will read it aloud like actors!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the dialogue once. Tick the right option: the scene happens a) at the market b) in the classroom c) at home. The class is a) noisy b) polite and active.")],
      [fp("Read. Tick the gist options."),
       fp("E.A.: in the classroom; polite and active.")],
      "Silent reading", "Dialogue"),
    stepRow(["4. Analysis"],
      [fp("Read again and tick the details: 1. The books open at page… 8 / 10 / 12? 2. Who comes to the board? 3. Who is on the way? 4. The last instruction is…?")],
      [fp("Read. Tick the details."),
       fp("E.A.: page 10; Naly; Vero; work in pairs.")],
      "Question-answer", "Dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So a dialogue reads with the VOICE of each person: the teacher’s calm voice, the students’ answers — and the polite music: please ↗, sorry, well done!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Act out the dialogue with a classmate (teacher/student roles). Then build a NEW dialogue: change the page, the names, the instructions — and act it out!")],
      [fp("Act out. Build a new dialogue."),
       pAns("E.A.: clear reading, correct instructions in the new dialogue.",
        ["clear reading"], { size: SZ.FICHE })],
      "Role play", "Dialogue"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read four lines of the dialogue aloud."),
       fp("2. Give two details of the dialogue.")],
      [fp("Answer."),
       pAns("E.A.: comprehensible reading; page 10, Naly at the board…",
        ["page 10"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}
function lessonS18() {
  return [
    p([run("LESSON OF THE DAY — SESSION 18", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: IN THE CLASSROOM", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    instructionsDialogueBox(),
    p("", { after: 60 }),
    box("WHAT WE READ", [
      bullet([run("The scene: "), run("a polite and active English classroom", { bold: true, color: C.BLUE })]),
      bullet([run("The instructions heard: "), run("sit down, open your books (page 10!), come to the board, go back, listen, repeat, don’t talk, close your books, work in pairs", { bold: true, color: C.BLUE })]),
      bullet([run("The polite music: "), run("please — Excuse me, you’re on the way! — Oh, sorry! — Well done!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("ACTOR’S TIP", [
      p([run("Each person has a voice: the teacher speaks slowly and clearly; the students answer together with energy. Change your voice — the dialogue comes alive!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S19 — Writing ----------
function ficheS19() {
  const meta = META("Writing — my set of classroom instructions",
    "By the end of the lesson, learners will be able to write a set of meaningful classroom instructions and act them out.",
    "4 / 4", "notebooks, small papers for the random game");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue: which page do they open?"),
       fp("2. Give the last instruction of the teacher.")],
      [fp("Answer."),
       fp("E.A.: page 10; work in pairs.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: read the instructions on the board for one minute… now I erase them! How many can you remember?")],
      [fp("Memorize. Recall.")], "Memory game", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE our own classroom instructions. By the end of this lesson, YOU will be the teacher!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-writing (1): write all the instructions you remember — affirmative AND negative. Check the verb-first form!")],
      [fp("Write the remembered instructions.")],
      "Individual writing", "Notebooks"),
    stepRow(["4. Analysis"],
      [fp("While-writing (2): invent two NEW instructions for our class (be creative: “Water the plants!” “Don’t sleep in English class!”). Then peer correct: exchange notebooks and check with the checklist (capital letter, verb first, ! at the end).")],
      [fp("Invent. Peer correct."),
       fp("E.A.: meaningful corrected instructions.")],
      "Peer correction", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("So a good instruction: verb first, short and clear, ! at the end — and Don’t + verb for the negative. A set of instructions makes the class work!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The random game: fold your instructions into a box; pick one at random and ACT it out — the class guesses and says the instruction! Then build a teacher-student dialogue from your instructions and perform it.")],
      [fp("Pick. Act. Perform the dialogue."),
       pAns("E.A.: instructions acted and guessed; dialogue performed.",
        ["dialogue performed"], { size: SZ.FICHE })],
      "Role play", "Paper box"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write four meaningful instructions (two affirmative, two negative)."),
       fp("2. Read them aloud like a teacher!")],
      [fp("Answer."),
       pAns("E.A.: Stand up! Open your books! Don’t talk! Don’t run! — read with confidence.",
        ["Stand up!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LESSON OF THE DAY — SESSION 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY CLASSROOM INSTRUCTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE INSTRUCTION RECIPE", [
      bullet([run("1. The verb FIRST: ", { bold: true }), run("Open… Listen… Come…", { bold: true, color: C.BLUE })]),
      bullet([run("2. Short and clear: ", { bold: true }), run("Open your books at page ten!", { bold: true, color: C.BLUE })]),
      bullet([run("3. Negative: ", { bold: true }), run("Don’t + verb: Don’t talk!", { bold: true, color: C.BLUE })]),
      bullet([run("4. The music: ", { bold: true }), run("end with “!” — and add “please” for the politeness.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY SET OF INSTRUCTIONS (model)", [
      bullet([run("Stand up and say good morning!", { italic: true })]),
      bullet([run("Take your English books, please!", { italic: true })]),
      bullet([run("Work in pairs and help each other!", { italic: true })]),
      bullet([run("Don’t shout — raise your hand!", { italic: true })]),
      bullet([run("Don’t forget to give back what you borrow!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("Today YOU gave the instructions. Speaking English in front of the class = self-confidence. Bravo, teacher!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 2", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("CLASSROOM COMMUNICATION"),
    sub("1. The classroom instructions"),
    bullet([run("Stand up! Sit down! Open your books! Raise your hand! Come to the board! Listen carefully! Repeat after me! Work in pairs!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The negative commands"),
    bullet([run("DON’T + verb: Don’t talk! Don’t run in the classroom!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The polite sentence"),
    bullet([run("Excuse me, you’re on the way! — Oh, sorry! Go ahead.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Lending and borrowing"),
    bullet([run("borrow (I take) — lend (I give) — give back (I return!)", { bold: true, color: C.BLUE })]),
    bullet([run("Can / May I borrow your…, please? — Could you lend me a…, please?", { bold: true, color: C.BLUE })]),
    bullet([run("Here you are! — Here is your…, thank you very much!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The intonation of yes/no questions"),
    bullet([run("The voice goes UP at the end: Can I borrow your pen, please? ↗", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u2_instructions.png", label: "The classroom instructions", url: AUDIO.instructions },
      { qr: "qr_t8_u2_borrow.png", label: "The borrowing dialogue", url: AUDIO.borrow },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Affirmative or negative? Write + or −: 1. Don’t run! 2. Raise your hand! 3. Don’t forget your slate! 4. Work in pairs!")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Put in order: 1. please / borrow / Can / your / I / ruler / ? 2. lend / you / Could / a / me / pen / please / ?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete the dialogue: “… I borrow your eraser, please?” — “Of course! … you are.” — “… is your eraser, thank you very …!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Borrow, lend or give back? 1. Hery …s his pen to Koto. 2. Koto …s the pen from Hery. 3. Before sport, Koto must … the pen. 4. “Excuse me, you’re on the …!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four instructions for your dream classroom (two affirmative, two negative).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: − + − + (1 point each).", ["− + − +"]),
    pAns("Exercise 2: Can I borrow your ruler, please? — Could you lend me a pen, please? (2 points each).", ["Can I borrow"]),
    pAns("Exercise 3: May/Can — Here — Here — much (1 point each).", ["Here"]),
    pAns("Exercise 4: 1. lends  2. borrows  3. give back  4. way (1 point each).", ["lends"]),
    pAns("Exercise 5: four meaningful instructions, verb first (1 point each).", ["verb first"]),
  ];
}

// ---------- S20 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s20", "SESSION 20 / 78", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give five classroom instructions."),
    pAns("E.A.: Stand up! Sit down! Open your books! Listen! Repeat!", ["Stand up!"]),
    p("2. Make two negative commands."),
    pAns("E.A.: Don’t talk! Don’t run in the classroom!", ["Don’t talk!"]),
    p("3. What do you say when someone blocks your way? And the answer?"),
    pAns("E.A.: Excuse me, you’re on the way! — Oh, sorry! Go ahead.", ["Excuse me"]),
    p("4. Give the polite ladder for borrowing (three steps)."),
    pAns("E.A.: Can I borrow…? May I borrow…? Could you lend me…?", ["Could you lend me"]),
    p("5. The difference between borrow and lend?"),
    pAns("E.A.: borrow = I take; lend = I give.", ["borrow = I take"]),
    p("6. In the dialogue: what must Koto do before sport time?"),
    pAns("E.A.: give the pen back to Hery.", ["give the pen back"]),
    p("7. What do you say when you give the thing back?"),
    pAns("E.A.: Here is your pen, thank you very much!", ["Here is your pen"]),
    p("8. How does the voice move in a yes/no question?"),
    pAns("E.A.: it goes UP at the end ↗.", ["UP"]),
    p("9. Give the recipe of a good written instruction."),
    pAns("E.A.: verb first, short and clear, “!” — Don’t + verb for the negative.", ["verb first"]),
    p("10. Act: ask your neighbour for a school thing, take it, give it back — all in English!"),
    pAns("E.A.: complete polite exchange with the three steps.", ["polite exchange"]),
  ];
}

// ---------- S21 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s21", "SESSION 21 / 78", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: perform the instructions the teacher says (four instructions, with and without “Simon says”).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Write + or −: 1. Don’t sleep! 2. Come to the board! 3. Repeat after me! 4. Don’t shout!")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: “… I borrow your slate, please?” — “Sure! … you are.” — “… is your slate, thank you very …!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Role play in pairs: borrow two school things politely and give them back (the teacher listens to the intonation ↗).")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a set of four meaningful classroom instructions (two affirmative, two negative).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: four correct reactions (1 point each).", ["four correct reactions"]),
    pAns("Exercise 2: − + + − (1 point each).", ["− + + −"]),
    pAns("Exercise 3: May/Can — Here — Here — much (1 point each).", ["May/Can"]),
    pAns("Exercise 4: polite requests + here you are + give back + rising intonation (4 points).", ["rising intonation"]),
    pAns("Exercise 5: four correct instructions, verb first (1 point each).", ["four correct instructions"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...ficheS17(), pageBreak(), ...lessonS17(), pageBreak(),
    ...ficheS18(), pageBreak(), ...lessonS18(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can follow the classroom instructions with my body.",
      "I can give affirmative and negative commands.",
      "I can say: Excuse me, you’re on the way!",
      "I can borrow politely: Can / May I borrow…? Could you lend me…?",
      "I can answer: Here you are! — and always give back!",
      "I can make my voice go up in yes/no questions.",
      "I can read and act a classroom dialogue.",
      "I can write my own set of classroom instructions.",
    ], "NEXT STOP → UNIT 3: DAILY LIFE!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
