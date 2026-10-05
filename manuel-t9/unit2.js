// T9 — UNIT 2 — CLASSROOM COMMUNICATION (4 séances + révision + test) — Sessions 13 à 18 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // rouge brique
const SHADE = "FADBD8";
const TOTAL = 86;
const AUDIO = {
  classroom: "https://drive.google.com/uc?export=download&id=1T3jBAm5sm0Qxy4ZSgdQ_W_pX-2UnHzm8",
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
function classroomDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE CLASSROOM DIALOGUE (listening passage)", [
    L("Students", "(noise and chatter…)"),
    L("Teacher", "I’m waiting for you to be quiet."),
    L("Students", "(silence)"),
    L("Teacher", "We can get down to work now."),
    L("Lea", "What did she say?"),
    L("John", "She said that we could get down to work then."),
    L("Teacher", "John and Lea, please stop talking."),
    L("John & Lea", "Sorry, Teacher."),
    L("Teacher", "Mary, you are late. We started ten minutes ago, where were you?"),
    L("Mary", "Sorry, Teacher, I missed the school bus."),
    L("Teacher", "What did you say? Could you speak up, please?"),
    L("Mary", "I said that I had missed the school bus. I am really sorry!"),
    L("Teacher", "OK, take your seat."),
  ]);
}
function readingDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE READING DIALOGUE", [
    L("Teacher", "OK, we can begin."),
    L("Students", "(noise and chatter…)"),
    L("Teacher", "We won’t start until everyone is quiet."),
    L("Student 1", "What did he say?"),
    L("Student 2", "He said we wouldn’t begin until everyone was quiet."),
    L("Teacher", "Be quiet please, you two!"),
    L("Student 2", "Sorry, Teacher."),
    L("Teacher", "OK, open your books to page 10. Who wants to read?"),
    L("", "(Student 1 raises a hand as Student 3 arrives at the door…)"),
    L("Teacher", "Oh, you are late. What happened to you?"),
    L("Student 3", "(mumbles)"),
    L("Teacher", "Could you speak up, please?"),
    L("Student 3", "Nothing — I overslept."),
    L("Teacher", "Don’t let it happen again, take your seat. Now, who wanted to read?"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 2 — CLASSROOM COMMUNICATION", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("What did the teacher say?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_classroom.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• understand the teacher language: Settle down! Who is absent today? Speak up, please!;"),
    p("• report an instruction: The teacher told us to stop talking;"),
    p("• report a statement: She said that we could get down to work;"),
    p("• answer the magic question: What did she say?;"),
    p("• read a classroom dialogue and check true or false;"),
    p("• write reported sentences and my own classroom dialogue.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Sometimes a schoolmate does not hear the teacher. He asks you: “What did she say?” — and YOU can repeat the message in English. That is reported speech: you become the messenger of the class!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t9_u2_classroom.png", label: "The classroom dialogue — listen and repeat", url: AUDIO.classroom }], COLOR),
  ];
}

// ---------- S13 — Teacher language ----------
function ficheS13() {
  const meta = META("The teacher language — classroom instructions",
    "By the end of the lesson, learners will be able to understand and use the teacher’s instructions for the parts of the lesson.",
    "1 / 4", "instruction cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What are you going to do next weekend? (one plan!)"),
       fp("2. Give one prediction with “will”.")],
      [fp("Answer."),
       fp("E.A.: I am going to visit my aunt; I think it will rain.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Chinese whispers (téléphone arabe)! I whisper an instruction in English to one student. He whispers it to the next… The last student says it ALOUD. Did the message survive?")],
      [fp("Whisper. Pass the message. Say it aloud.")], "Using games", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The teacher language ». By the end of this lesson, you will understand every instruction of the class — from the first minute to the last!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Classify the instructions on the cards into five moments: WAITING TO START (Settle down now!) — STARTING (It’s time to begin!) — ATTENDANCE (Who is absent today?) — LATE ARRIVAL (Where have you been?) — DISCIPLINE (Please stop talking!).")],
      [fp("Classify the cards."),
       fp("E.A.: “Speak up please” → discipline; “Did you oversleep?” → late arrival…")],
      "Whole-class work", "Instruction cards"),
    stepRow(["4. Analysis"],
      [fp("Mime and guess: I say an instruction, you DO the action! Open your books to page 10. Stop writing — time’s up! Look this way!")],
      [fp("Listen. Act.")],
      "Using gestures", "----"),
    stepRow(["5. Synthesis"],
      [fp("So the five moments of the lesson and their instructions — and the polite answers: Sorry, Teacher! Here! I missed the bus.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mini role play: one student is the teacher for one minute! He gives three instructions, the class obeys.")],
      [fp("Role play."),
       pAns("E.A.: Settle down now! Say “here” when I call your name! This is your homework for tonight!",
        ["Settle down now!"], { size: SZ.FICHE })],
      "Role play", "Instruction cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one instruction for each moment: starting, attendance, discipline."),
       fp("2. What does the teacher say when a student arrives late?")],
      [fp("Answer."),
       pAns("E.A.: Let’s begin! Who is absent today? Please stop talking! — We started ten minutes ago, where were you?",
        ["Who is absent today?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  return [
    p([run("LESSON OF THE DAY — SESSION 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE TEACHER LANGUAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u2_classroom.png", 400, 768 / 1376),
    p([run("Waiting to start:", { bold: true })], { after: 30 }),
    vocab("I’m waiting for you to be quiet.", "aïm ouéitinng fôr iou tou bi kouaïeute"),
    vocab("Settle down now so we can start.", "sèteul daoune naou"),
    p([run("Starting the lesson:", { bold: true })], { after: 30 }),
    vocab("OK, it’s time to begin.", "ite-s taïme tou biguine"),
    vocab("Now we can get down to work.", "guète daoune tou oueurk", "= start working seriously"),
    p([run("Taking attendance:", { bold: true })], { after: 30 }),
    vocab("Say “here” when I call your name.", "séi hir ouène aï kôl iôr néime"),
    vocab("Who is absent today?", "hou ize abseunnte toudéi"),
    p([run("Late arrival:", { bold: true })], { after: 30 }),
    vocab("Where have you been?", "ouèr have iou bine"),
    vocab("Did you miss your bus? Did you oversleep?", "dide iou mise iôr beuce / ôoveursslipe"),
    vocab("Don’t let it happen again.", "dôounte lète ite hapeune eguèine"),
    p([run("Discipline:", { bold: true })], { after: 30 }),
    vocab("Please stop talking. Look this way.", "plize stope tôkinng / louk dhisse ouéi"),
    vocab("Speak up, please.", "spike eupe plize", "= talk louder!"),
    vocab("Stop writing — time’s up!", "stope raïtinng — taïmz eupe"),
    p([run("Homework:", { bold: true })], { after: 30 }),
    vocab("This is your homework for tonight.", "dhisse ize iôr hôoumoueurk fôr tounaïte"),
    vocab("There is no homework today!", "dhèr ize nôou hôoumoueurk toudéi", "😀 the best sentence!"),
  ];
}

// ---------- S14 — Listening + reported statements ----------
function ficheS14() {
  const meta = META("Listening: the classroom dialogue — She said that…",
    "By the end of the lesson, learners will be able to comprehend an oral dialogue about classroom communication and report a statement with a past introductory verb.",
    "2 / 4", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two instructions of the teacher language."),
       fp("2. What does “Speak up, please” mean?")],
      [fp("Answer."),
       fp("E.A.: Settle down! Who is absent today? — talk louder.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("One more round of chinese whispers — but this time the last student starts with: “You said that…”!")],
      [fp("Whisper. Report.")], "Using games", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « The classroom dialogue ». By the end, you will catch the story AND the magic machine: She said that…")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. Why was Mary late? 2. What did she say to the teacher? 3. What did John answer to Lea?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. She missed the school bus. 2. She said that she had missed the school bus. 3. She said that we could get down to work then.",
        ["She missed the school bus."], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("The machine: direct words → reported words. “We CAN get down to work.” → She said that we COULD get down to work. “I MISSED the bus.” → She said that she HAD MISSED the bus. The verb goes ONE STEP BACK in the past!")],
      [fp("Observe. Compare."),
       fp("E.A.: can → could; missed → had missed; will → would.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: said THAT + sentence with the verb one step back: is → was; can → could; will → would; missed → had missed. And the question: What did she say?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Transformation drill! I read a sentence, I point to student 1. S1 asks: “What did she say?” and points to student 2. S2 reports: “She said that…” Fast!")],
      [fp("Drill in chain."),
       pAns("E.A.: “It’s time to begin.” → What did she say? → She said that it was time to begin.",
        ["She said that it was time to begin."], { size: SZ.FICHE })],
      "Transformation drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Report: “I am tired,” said Koto."),
       fp("2. Report: “We will start at eight,” said the teacher.")],
      [fp("Answer."),
       pAns("E.A.: Koto said that he was tired. The teacher said that they would start at eight.",
        ["he was tired"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LESSON OF THE DAY — SESSION 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("REPORTED SPEECH: SHE SAID THAT…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    classroomDialogueBox(),
    p("", { after: 60 }),
    box("THE REPORTING MACHINE — STATEMENTS", [
      bullet([run("subject + said that + sentence (verb one step back!)", { bold: true, color: C.BLUE })]),
      bullet([run("“We can get down to work.” → "), run("She said that we could get down to work.", { bold: true, color: C.BLUE })]),
      bullet([run("“I missed the bus.” → "), run("She said that she had missed the bus.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The one-step-back table:", { bold: true })], { after: 50 }),
    bullet([run("am / is → was;   are → were", { bold: true, color: C.BLUE })]),
    bullet([run("can → could;   will → would", { bold: true, color: C.BLUE })]),
    bullet([run("play → played;   missed → had missed", { bold: true, color: C.BLUE })]),
    bullet([run("now → then;   today → that day", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("The magic question:", { bold: true })], { after: 50 }),
    bullet([...kw("What did she say?", "ouate dide chi séi"), run("  →  "), run("She said that…", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u2_classroom.png", label: "The classroom dialogue — listen and report", url: AUDIO.classroom }], COLOR),
  ];
}

// ---------- S15 — Reported imperatives + drill sergeant ----------
function ficheS15() {
  const meta = META("Reporting instructions — told / asked + person + to…",
    "By the end of the lesson, learners will be able to report the teacher’s instructions to classmates with “told/asked + somebody + to + verb”.",
    "3 / 4", "a ruler (the sergeant’s prop)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “It’s time to begin,” she said."),
       fp("2. Give the one-step-back of: can, will, is.")],
      [fp("Answer."),
       fp("E.A.: She said that it was time to begin; could, would, was.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick orders! Stand up! Touch your head! Sit down! … You obeyed. But HOW do we RETELL an order?")],
      [fp("Obey. Think.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Reporting instructions ». By the end of this lesson, you will report any order like a general!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: “Put down your pen!” → The teacher TOLD Maria TO put down her pen. “Please stop talking.” → She ASKED us TO stop talking. Where did the imperative go?")],
      [fp("Observe. Answer."),
       fp("E.A.: it became “to + verb” after told/asked + person.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: told/asked + person + TO + verb. Negative: told + person + NOT TO + verb (“Don’t be late!” → He told us not to be late). “Told” = order; “asked” = polite request with please.")],
      [fp("Build sentences."),
       fp("E.A.: She told us to open our books. She asked us to speak up.")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: order → told + person + to + verb; polite request → asked + person + to + verb; negative → not to + verb.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Drill sergeant! I give orders to two students with my sergeant voice: “Put down your pen! Listen to me!” They obey. Then I ask a third: What did I just say? If he reports correctly — HE becomes the sergeant and takes the ruler!")],
      [fp("Obey. Report. Become the sergeant!"),
       pAns("E.A.: You told Maria to put down her pen. You told Giovanni to listen to you.",
        ["You told Maria to put down her pen."], { size: SZ.FICHE })],
      "Using games (drill sergeant)", "A ruler"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Report: “Look this way!” (the teacher → us)"),
       fp("2. Report: “Please don’t forget your homework.” (she → me)")],
      [fp("Answer."),
       pAns("E.A.: The teacher told us to look that way. She asked me not to forget my homework.",
        ["not to forget"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LESSON OF THE DAY — SESSION 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("REPORTING INSTRUCTIONS: TOLD… TO…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE REPORTING MACHINE — IMPERATIVES", [
      bullet([run("told / asked + person + TO + verb", { bold: true, color: C.BLUE })]),
      bullet([run("“Put down your pen!” → "), run("You told Maria to put down her pen.", { bold: true, color: C.BLUE })]),
      bullet([run("“Please speak up.” → "), run("She asked me to speak up.", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: NOT TO + verb", { bold: true, color: C.RED }), run("  →  “Don’t be late!” → He told us not to be late.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Told or asked?", { bold: true })], { after: 50 }),
    bullet([run("told", { bold: true, color: C.BLUE }), run(" = an order, strong voice: The sergeant told us to listen!")]),
    bullet([run("asked", { bold: true, color: C.BLUE }), run(" = a polite request, with “please”: She asked us to close the door.")]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("The teacher told us "), run("to open", { bold: true, color: C.BLUE }), run(" our books to page 10.")]),
    bullet([run("She asked Mary "), run("to speak up", { bold: true, color: C.BLUE }), run(".")]),
    bullet([run("He told the class "), run("not to let", { bold: true, color: C.BLUE }), run(" it happen again.")]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("In the drill sergeant game, everyone can become the sergeant — even the quietest student! Speak with a strong, clear voice: you can do it!", { after: 40 }),
    ]),
  ];
}

// ---------- S16 — Reading + writing ----------
function ficheS16() {
  const meta = META("Reading and writing: the classroom dialogue",
    "By the end of the lesson, learners will be able to infer information from a written classroom dialogue and report instructions in a written form.",
    "4 / 4", "the dialogue (book or board), picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “Open your books!” (the teacher → us)"),
       fp("2. Told or asked — which one is polite?")],
      [fp("Answer."),
       fp("E.A.: The teacher told us to open our books; asked.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Look at the picture: a classroom, a teacher, a student at the door… Guess: what is the dialogue about?")],
      [fp("Guess."),
       fp("E.A.: a late student / the beginning of the lesson…")],
      "Using visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a classroom dialogue and then WRITE reported sentences. Reading like a detective, writing like a reporter!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the dialogue accurately. Then TRUE or FALSE — and say why! 1. Everyone has arrived on time. 2. The class is rather talkative. 3. Student 1 will be the first to read. 4. Student 3 was late because of an accident.")],
      [fp("Read. Answer T/F + why."),
       pAns("E.A.: 1. False — Student 3 was late. 2. True — noise and chatter! 3. True — he raised his hand. 4. False — he overslept.",
        ["False — he overslept."], { size: SZ.FICHE })],
      "Skimming and scanning", "The dialogue"),
    stepRow(["4. Analysis (pre-writing)"],
      [fp("Rearrange the words into reporting sentences: 1. asked / is / who / absent / he. 2. Leanne / time / it’s / begin / said / to.")],
      [fp("Rearrange."),
       pAns("E.A.: 1. He asked who is absent. 2. Leanne said it’s time to begin.",
        ["He asked who is absent."], { size: SZ.FICHE })],
      "Individual work", "Blackboard"),
    stepRow(["5. Synthesis (while-writing)"],
      [fp("Transform into reported speech: 1. He said, “Please stop talking.” 2. “Look this way,” she said. 3. “Did you miss your bus?” she asked me.")],
      [fp("Write."),
       pAns("E.A.: 1. He asked us to stop talking. 2. She told us to look that way. 3. She asked me if I had missed my bus.",
        ["He asked us to stop talking."], { size: SZ.FICHE })],
      "Individual work", "Exercise books"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Write your own mini dialogue (4 lines): the teacher gives two instructions, a student asks “What did he say?”, another student reports. Then role play it!")],
      [fp("Write. Role play."),
       pAns("E.A.: — Settle down! — What did he say? — He told us to settle down!",
        ["He told us to settle down!"], { size: SZ.FICHE })],
      "Role play", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Why was Student 3 late in the reading dialogue?"),
       fp("2. Report in writing: “Don’t let it happen again.”")],
      [fp("Answer."),
       pAns("E.A.: He overslept; The teacher told him not to let it happen again.",
        ["He overslept"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LESSON OF THE DAY — SESSION 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING AND WRITING: THE CLASS REPORTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingDialogueBox(),
    p("", { after: 60 }),
    p([run("New words of the dialogue:", { bold: true })], { after: 50 }),
    vocab("I overslept", "aï ôouveursslèpte", "I slept too long!"),
    vocab("to mumble", "tou meummbeul", "to speak without clear words"),
    vocab("to raise a hand", "tou réize e hannde", "✋ I want to speak!"),
    p("", { after: 60 }),
    box("THE WRITER’S RECIPE — REPORTED SENTENCES", [
      bullet([run("A statement → said that + one step back:", { bold: true }), run("  He said we wouldn’t begin until everyone was quiet.", { bold: true, color: C.BLUE })]),
      bullet([run("An instruction → told/asked + person + to + verb:", { bold: true }), run("  She told us to look that way.", { bold: true, color: C.BLUE })]),
      bullet([run("A yes/no question → asked + if:", { bold: true }), run("  She asked me if I had missed my bus.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Teacher — ", { bold: true, color: COLOR }), run("Settle down now! Open your books to page 12.")]),
    bullet([run("Koto — ", { bold: true, color: COLOR }), run("What did he say?")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("He told us to settle down and to open our books to page 12.")]),
    bullet([run("Koto — ", { bold: true, color: COLOR }), run("Thank you, Soa — you are the best reporter of the class!")]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 2", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The teacher language (five moments)"),
    bullet([run("Waiting: ", { bold: true }), run("Settle down! I’m waiting for you to be quiet.", { bold: true, color: C.BLUE })]),
    bullet([run("Starting: ", { bold: true }), run("It’s time to begin. We can get down to work now.", { bold: true, color: C.BLUE })]),
    bullet([run("Attendance: ", { bold: true }), run("Who is absent today? Say “here” when I call your name.", { bold: true, color: C.BLUE })]),
    bullet([run("Late arrival: ", { bold: true }), run("Where were you? Did you oversleep? Don’t let it happen again.", { bold: true, color: C.BLUE })]),
    bullet([run("Discipline and homework: ", { bold: true }), run("Please stop talking. Speak up. This is your homework for tonight.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Reported statements — said that"),
    bullet([run("said that + verb one step back:", { bold: true, color: C.BLUE }), run("  am/is → was; can → could; will → would; missed → had missed; now → then.")]),
    bullet([run("“We can start.” → She said that we could start.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Reported instructions — told/asked… to…"),
    bullet([run("told / asked + person + to + verb;", { bold: true, color: C.BLUE }), run("  negative: not to + verb.")]),
    bullet([run("“Stop talking!” → He told us to stop talking. “Don’t be late!” → He told us not to be late.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The magic questions"),
    bullet([run("What did she say? What did I just say?", { bold: true, color: C.BLUE }), run("  →  the answer is always reported speech!")]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 2 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Match the instruction with the moment: 1. Who is absent today? 2. Settle down now! 3. Did you oversleep? 4. Stop writing — time’s up! (a. waiting b. attendance c. discipline d. late arrival)")]),
    pAns("Answers: 1-b, 2-a, 3-d, 4-c.", ["1-b, 2-a, 3-d, 4-c"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Put the words in order: 1. asked / is / who / absent / he. 2. Leanne / time / it’s / begin / said / to.")]),
    pAns("Answers: 1. He asked who is absent. 2. Leanne said it’s time to begin.", ["He asked who is absent."]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Report the statements: 1. “I am tired,” said Mary. 2. “We will start at eight,” said the teacher. 3. “I missed the bus,” she said.")]),
    pAns("Answers: 1. Mary said that she was tired. 2. The teacher said that they would start at eight. 3. She said that she had missed the bus.", ["she was tired"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Report the instructions: 1. He said, “Please stop talking.” 2. “Look this way,” she said. 3. “Don’t forget your homework!” said the teacher.")]),
    pAns("Answers: 1. He asked us to stop talking. 2. She told us to look that way. 3. The teacher told us not to forget our homework.", ["not to forget"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Answer on the reading dialogue: 1. True or false: the class was quiet from the start. 2. Why was Student 3 late? 3. What page did the teacher ask to open?")]),
    pAns("Answers: 1. False — noise and chatter! 2. He overslept. 3. Page 10.", ["He overslept."]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give the five moments of the teacher language with one instruction each."),
    pAns("E.A.: waiting (Settle down!), starting (It’s time to begin), attendance (Who is absent?), late arrival (Where were you?), discipline (Stop talking!).", ["Settle down!"]),
    p("2. What does “Speak up, please” mean? And “time’s up”?"),
    pAns("E.A.: talk louder; the time is finished.", ["talk louder"]),
    p("3. Give the one-step-back of: is, can, will, missed."),
    pAns("E.A.: was, could, would, had missed.", ["was, could, would"]),
    p("4. Report: “We can get down to work,” she said."),
    pAns("E.A.: She said that we could get down to work.", ["could get down to work"]),
    p("5. Give the machine for reporting an instruction."),
    pAns("E.A.: told/asked + person + to + verb (negative: not to).", ["told/asked + person + to"]),
    p("6. Report: “Put down your pen, Maria!”"),
    pAns("E.A.: The teacher told Maria to put down her pen.", ["to put down her pen"]),
    p("7. Report: “Please don’t be late.”"),
    pAns("E.A.: She asked us not to be late.", ["not to be late"]),
    p("8. In the listening dialogue: why was Mary late, and what did she say?"),
    pAns("E.A.: she missed the school bus; she said that she had missed the school bus.", ["had missed the school bus"]),
    p("9. In the reading dialogue: why was Student 3 late?"),
    pAns("E.A.: he overslept.", ["he overslept"]),
    p("10. Your friend asks: “What did the teacher say?” — report the last instruction of today!"),
    pAns("E.A.: He told us to copy the exercise / to be quiet…", ["He told us to"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s18", "SESSION 18 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give one teacher instruction for: 1. starting the lesson 2. taking attendance 3. a late student 4. discipline.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Put the words in order: 1. asked / is / who / absent / he. 2. said / time / to / it’s / begin / she.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Report the statements: 1. “I am happy,” said Soa. 2. “We will read page 12,” said the teacher. 3. “I missed the taxi-be,” said Koto. 4. “We can start now,” she said.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Report the instructions: 1. “Open your books!” (the teacher → us) 2. “Please speak up.” (she → me) 3. “Look this way!” (he → the class) 4. “Don’t be late!” (she → us)")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a classroom dialogue (4 lines): the teacher gives two instructions; a student asks “What did she say?”; another student reports the two instructions.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 (models): Let’s begin our lesson now! / Who is absent today? / Don’t let it happen again! / Please stop talking. (1 pt each)", ["Who is absent today?"]),
    pAns("Ex.2: He asked who is absent. / She said it’s time to begin. (2 pts each)", ["He asked who is absent."]),
    pAns("Ex.3: Soa said that she was happy. / The teacher said that they would read page 12. / Koto said that he had missed the taxi-be. / She said that they could start then. (1 pt each)", ["she was happy"]),
    pAns("Ex.4: The teacher told us to open our books. / She asked me to speak up. / He told the class to look that way. / She told us not to be late. (1 pt each)", ["not to be late"]),
    pAns("Ex.5 (model): — Settle down and open your books to page 9! — What did she say? — She told us to settle down and to open our books to page 9. — Thank you! (4 pts: 2 instructions 2, reported form 2)", ["She told us to settle down"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can understand the teacher language of the five moments of the lesson.",
      "I can answer politely: Sorry, Teacher! Here!",
      "I can report a statement: She said that we could start.",
      "I can use the one-step-back table: is → was, can → could, will → would.",
      "I can report an instruction: The teacher told us to open our books.",
      "I can report a polite request: She asked me to speak up.",
      "I can read a classroom dialogue and check true or false.",
      "I can write my own classroom dialogue with reported speech.",
    ], "NEXT STOP → UNIT 3: OUR TIME!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
