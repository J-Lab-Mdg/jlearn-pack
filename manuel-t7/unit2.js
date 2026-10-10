// T7 — UNIT 2 — CLASSROOM COMMUNICATION (11 séances + révision + test) — Sessions 18 à 30 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "B03A2E"; // rouge brique
const SHADE = "FADBD8";
const TOTAL = 99;
const AUDIO = {
  instructions: "https://drive.google.com/uc?export=download&id=1Q6-YFZ6oIGc7r3kGEVCzO6hZT79tA8OH",
  borrow: "https://drive.google.com/uc?export=download&id=16LJw7G78aDu2cES2aFSTL3a6zBZOzbsB",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — CLASSROOM COMMUNICATION", title, slo,
  values: "solidarity, mutual respect", session, materials,
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
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("THE BORROWING DIALOGUE (from the syllabus)", [
    L("Anna: Hi, Sarah! Can I borrow your pen, please?"),
    L("Sarah: Sure! Here you are."),
    L("Anna: Thank you! By the way, could you lend me an eraser too, please?"),
    L("Sarah: Of course. Just make sure to give it back when you’re done."),
    L("Anna: I will. Here is your pen back. Thanks again!"),
    L("Sarah: No problem!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 2 — CLASSROOM COMMUNICATION", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Can I borrow your pen, please?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_borrow.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• follow the teacher’s oral instructions;"),
    p("• give affirmative and negative commands: Stand up! Don’t talk!;"),
    p("• borrow and lend school things politely;"),
    p("• use Can / May I borrow…? and Could you lend me…?;"),
    p("• say Here you are! and give things back with thanks;"),
    p("• make my voice go UP in yes/no questions;"),
    p("• read a dialogue about classroom communication;"),
    p("• write a set of meaningful classroom instructions.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, mutual respect.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 1)", [
      p("In Unit 1 we talked about our dreams and goals, we introduced our friends and we gave our opinion."),
      p("In Unit 2, we learn the language OF the classroom: instructions, and borrowing and lending — with a big smile and a “please”!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u2_instructions.png", label: "Classroom instructions — listen and do", url: AUDIO.instructions }], COLOR),
  ];
}

// ---------- S18 — Classroom instructions (affirmative) ----------
function ficheS18() {
  const meta = META("Classroom instructions — affirmative commands",
    "By the end of the lesson, learners will be able to follow and give classroom instructions.",
    "1 / 11", "stick figures, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 1.) Answer these questions:"),
       fp("1. What would you like to be? Why?"),
       fp("2. Introduce your neighbour.")],
      [fp("Answer."),
       fp("E.A.: I’d like to be… because…; This is… He/She is…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: the teacher makes gestures (stand up, sit down, open a book…). Guess the meaning of the instructions from the gestures!")],
      [fp("Watch. Guess.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Classroom instructions ». By the end of this lesson, you will understand and give the orders of the classroom!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the classroom instructions. Tick the stick figures that correspond to what you hear.")],
      [fp("Listen. Tick the right stick figures.")],
      "Audio / Drawing stick-figures", "Stick figures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat the classroom instructions after the audio: Stand up! Sit down! Open your books! Close your books! Listen carefully! Repeat after me! Raise your hand! Come to the board!"),
       fp("Then listen and PERFORM the instructions.")],
      [fp("Repeat. Perform the actions.")],
      "Repetition drill", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So: a command starts with the VERB, without “to” and without a subject: Stand up! Open your books! Add “please” to be polite.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-listening: play the Simon says game! “Simon says: stand up!” → do it. No “Simon says” → don’t move!")],
      [fp("Play Simon says."),
       pAns("E.A.: the pupils perform only the “Simon says” instructions.",
        ["Simon says"], { size: SZ.FICHE })],
      "Simon says", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Recall five classroom instructions."),
       fp("2. Follow my instructions: stand up — raise your hand — sit down.")],
      [fp("Recall. Perform."),
       pAns("E.A.: five correct commands; the actions are performed.",
        ["Stand up!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(18, TOTAL, meta, rows, "s18");
}
function lessonS18() {
  return [
    p([run("LESSON OF THE DAY — SESSION 18", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CLASSROOM INSTRUCTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u2_instructions.png", 420, 768 / 1408),
    p([run("The commands of the classroom:", { bold: true })], { after: 50 }),
    vocab("Stand up!", "stannde eup", "I get up from my chair."),
    vocab("Sit down!", "site daoune", "I sit on my chair."),
    vocab("Open your books!", "ôoupeune iôr bouks"),
    vocab("Close your books!", "clôouz iôr bouks"),
    vocab("Listen carefully!", "lisseune kèrfouli"),
    vocab("Repeat after me!", "ripite afteur mi"),
    vocab("Raise your hand!", "réiz iôr hannde", "I put my hand up to speak."),
    vocab("Come to the board!", "keume tou ze bôrde"),
    vocab("Work in pairs!", "oueurk ine pèrz", "I work with my neighbour."),
    vocab("Be quiet, please!", "bi kouaïeute pliiz"),
    p("", { after: 60 }),
    box("THE RULE OF THE COMMAND", [
      p([run("Verb first — no “to”, no subject!", { bold: true, color: C.BLUE, size: 30 })], { center: true, after: 30 }),
      p([run("Stand up! — Open your books! — and “please” makes it polite.", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_instructions.png", label: "Classroom instructions — listen and do", url: AUDIO.instructions }], COLOR),
  ];
}

// ---------- S19 — Negative commands ----------
function ficheS19() {
  const meta = META("Negative commands — Don’t…!",
    "By the end of the lesson, learners will be able to give and follow negative commands.",
    "2 / 11", "stick figures, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three classroom instructions."),
       fp("2. Follow: stand up — come to the board — sit down.")],
      [fp("Answer. Perform."),
       fp("E.A.: correct commands and actions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime a pupil who talks, runs, writes on the desk… Ask: is it good? What do we tell him?")],
      [fp("Watch. React."),
       fp("E.A.: No! Stop!")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Negative commands ». By the end of this lesson, you will say what we must NOT do — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the end of the audio: Don’t talk! Don’t run in the classroom! Don’t write on the desk! Don’t forget your homework! What little word starts every command?")],
      [fp("Listen. Answer."),
       fp("E.A.: Don’t + verb.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Find the rule: Don’t + verb = negative command. Don’t = do not."),
       fp("Transform: Talk! → Don’t talk! Run! → Don’t run!")],
      [fp("Give the rule. Transform."),
       fp("E.A.: Don’t + verb; correct transformations.")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to say NO to an action — Don’t + verb: Don’t talk! Don’t be late! Don’t forget your homework!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Simon says, version 2: with affirmative AND negative commands! “Simon says: don’t sit down!” Then in pairs: write two class rules with Don’t.")],
      [fp("Play. Write two rules."),
       pAns("E.A.: Don’t run in the classroom. Don’t write on the desk.",
        ["Don’t"], { size: SZ.FICHE })],
      "Simon says / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Transform into negative commands: 1. Talk! 2. Open the window! 3. Be late!")],
      [fp("Transform."),
       pAns("E.A.: Don’t talk! — Don’t open the window! — Don’t be late!",
        ["Don’t talk!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LESSON OF THE DAY — SESSION 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("NEGATIVE COMMANDS: DON’T…!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RULE", [
      p([run("Don’t + verb  (Don’t = do not)", { bold: true, color: C.BLUE, size: 32 })], { center: true, after: 40 }),
      p([run("The same for everybody: you, we, they — Don’t never changes!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The classroom rules:", { bold: true })], { after: 50 }),
    bullet([...kw("Don’t talk during the lesson!", "dôonnte tôk diourinng ze lèsseune")]),
    bullet([...kw("Don’t run in the classroom!", "dôonnte reune ine ze classroume")]),
    bullet([...kw("Don’t write on the desk!", "dôonnte raïte one ze dèsk")]),
    bullet([...kw("Don’t forget your homework!", "dôonnte feurguète iôr hôoumoueurk")]),
    bullet([...kw("Don’t be late!", "dôonnte bi léite")]),
    p("", { after: 60 }),
    p([run("The transformation:", { bold: true })], { after: 50 }),
    bullet([run("Talk!  →  ", { size: SZ.BODY }), run("Don’t talk!", { bold: true, color: C.BLUE })]),
    bullet([run("Open the window!  →  ", { size: SZ.BODY }), run("Don’t open the window!", { bold: true, color: C.BLUE })]),
    bullet([run("Be late!  →  ", { size: SZ.BODY }), run("Don’t be late!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("SIMON SAYS — VERSION 2", [
      p([run("“Simon says: don’t sit down!” → I stay standing!", { italic: true, size: SZ.BODY })], { after: 20 }),
      p([run("No “Simon says”? Then I don’t move at all!", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 20 }),
    ]),
  ];
}

// ---------- S20 — Lend and borrow ----------
function ficheS20() {
  const meta = META("Lend and borrow — the school things",
    "By the end of the lesson, learners will be able to use lend, borrow and give back with the school things vocabulary.",
    "3 / 11", "school things (pen, eraser, ruler…), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two negative commands."),
       fp("2. What is the rule of the command?")],
      [fp("Answer."),
       fp("E.A.: Don’t…! ; verb first, no subject.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: write down all the school things that you know (2 minutes). Who has the longest list?")],
      [fp("Write the school things."),
       fp("E.A.: a pen, a pencil, an eraser, a ruler, a book, a notebook, a bag, a pencil case…")],
      "Brainstorming", "Copy-books"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Lend and borrow ». By the end of this lesson, you will share your school things in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Watch: I take Soa’s pen — I BORROW her pen. Soa gives me her pen — she LENDS me her pen. Same action, two directions!")],
      [fp("Watch. Understand the two directions.")],
      "Demonstration", "A pen"),
    stepRow(["4. Analysis"],
      [fp("Find the difference: borrow = I TAKE something for a moment; lend = I GIVE something for a moment."),
       fp("And after? I GIVE it BACK!")],
      [fp("Explain the three verbs."),
       fp("E.A.: borrow = take for a time; lend = give for a time; give back = return.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: I borrow FROM my friend; my friend lends TO me; and I always give the thing back!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Object game: pass real school things around: “I borrow Koto’s ruler.” — “I lend my ruler to Soa.” — “I give the ruler back.”")],
      [fp("Play with the objects. Speak."),
       pAns("E.A.: the three verbs are used correctly with the school things.",
        ["borrow / lend / give back"], { size: SZ.FICHE })],
      "Object game", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete with borrow, lend or give back: 1. Can I … your pen? 2. I can … you my eraser. 3. Don’t forget to … my book!")],
      [fp("Answer."),
       pAns("E.A.: borrow — lend — give back.", ["give back"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}
function lessonS20() {
  return [
    p([run("LESSON OF THE DAY — SESSION 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LEND, BORROW, GIVE BACK", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The three magic verbs of sharing:", { bold: true })], { after: 50 }),
    vocab("to borrow", "tou borôou", "I TAKE something for a moment: I borrow your pen."),
    vocab("to lend", "tou lènnde", "I GIVE something for a moment: I lend you my pen."),
    vocab("to give back", "tou guive bak", "I RETURN the thing: I give your pen back."),
    p("", { after: 60 }),
    box("THE TWO DIRECTIONS", [
      p([run("borrow = the thing comes TO me   ⟵", { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 30 }),
      p([run("lend = the thing goes FROM me   ⟶", { bold: true, color: C.GREEN, size: 28 })], { center: true, after: 30 }),
      p([run("…and at the end, the thing always goes home: I give it back!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My school things:", { bold: true })], { after: 50 }),
    bullet([...kw("a pen, a pencil, an eraser", "e pène, e pènsil, ane iréizeur")]),
    bullet([...kw("a ruler, a book, a notebook", "e rouleur, e bouk, e nôoutbouk")]),
    bullet([...kw("a bag, a pencil case, a pencil sharpener", "e bag, e pènsil kéiss, e pènsil charpneur")]),
    p("", { after: 60 }),
    p([run("Examples:", { bold: true })], { after: 50 }),
    bullet([run("I "), run("borrow", { bold: true, color: C.BLUE }), run(" an eraser "), run("from", { bold: true }), run(" Sarah.")]),
    bullet([run("Sarah "), run("lends", { bold: true, color: C.GREEN }), run(" an eraser "), run("to", { bold: true }), run(" me.")]),
    bullet([run("After the lesson, I "), run("give it back", { bold: true, color: C.RED }), run(". Thank you, Sarah!")]),
  ];
}

// ---------- S21 — Can / May I borrow…? ----------
function ficheS21() {
  const meta = META("Can / May I borrow your…, please?",
    "By the end of the lesson, learners will be able to ask to borrow something politely with can and may.",
    "4 / 11", "audio (QR code), school things");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the difference between lend and borrow?"),
       fp("2. Name five school things.")],
      [fp("Answer."),
       fp("E.A.: borrow = take, lend = give; correct school things.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Show a pupil’s pen: I need this pen… What must I say? Just “Give me!”? Is it polite?")],
      [fp("React."),
       fp("E.A.: no! We must ask politely.")], "Contextualisation", "A pen"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Can I borrow your pen, please? ». By the end of this lesson, you will borrow anything — politely!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue between Anna and Sarah. Answer: what does Anna borrow? What does Sarah answer?")],
      [fp("Listen. Answer."),
       fp("E.A.: a pen (and an eraser); Sure! Here you are.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Listen and repeat the question: “Can I borrow your pen, please?” Find the structure."),
       fp("Variant: “May I borrow your ruler, please?” — may is very polite.")],
      [fp("Repeat. Give the structure."),
       fp("E.A.: Can/May + I + borrow + your + thing + please?")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Can I borrow your…, please? / May I borrow your…, please? Answers: Sure! / Of course! / Here you are.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill: pen → Can I borrow your pen, please? ruler → Can I borrow your ruler, please? Then real objects around the class.")],
      [fp("Transform. Ask and give."),
       pAns("E.A.: — May I borrow your eraser, please? — Sure! Here you are.",
        ["May I borrow"], { size: SZ.FICHE })],
      "Substitution drill / In pairs", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask to borrow my book, politely."),
       fp("2. Answer your friend who asks for your pencil.")],
      [fp("Ask. Answer."),
       pAns("E.A.: Can/May I borrow your book, please? — Of course! Here you are.",
        ["Here you are."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}
function lessonS21() {
  return [
    p([run("LESSON OF THE DAY — SESSION 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CAN I BORROW YOUR…, PLEASE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u2_borrow.png", 400, 768 / 1408),
    p([run("To ask politely:", { bold: true })], { after: 50 }),
    bullet([...kw("Can I borrow your pen, please?", "kane aï borôou iôr pène pliiz")]),
    bullet([...kw("May I borrow your ruler, please?", "méi aï borôou iôr rouleur pliiz"), run("  (very polite)")]),
    p("", { after: 40 }),
    p([run("To answer yes:", { bold: true, color: C.GREEN })], { after: 50 }),
    bullet([...kw("Sure! Here you are.", "chour — hir iou âr")]),
    bullet([...kw("Of course!", "ov côrss")]),
    p("", { after: 40 }),
    p([run("To answer no, kindly:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([...kw("I’m sorry, I only have one.", "aïm sori aï ôounli hav ouane")]),
    p("", { after: 60 }),
    box("THE STRUCTURE", [
      p([run("Can / May  +  I  +  borrow  +  your + thing  +  please?", { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 30 }),
      p([run("“Please” at the end opens every door!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_borrow.png", label: "The borrowing dialogue — listen and repeat", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S22 — Could you lend me…? ----------
function ficheS22() {
  const meta = META("Could you lend me a/an…, please?",
    "By the end of the lesson, learners will be able to ask someone to lend them something, using could for politeness.",
    "5 / 11", "audio (QR code), school things");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask to borrow my ruler (two ways)."),
       fp("2. Answer yes.")],
      [fp("Ask. Answer."),
       fp("E.A.: Can/May I borrow your ruler, please? — Sure! Here you are.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen again to Anna: “Could you lend me an eraser too, please?” — a new question! Who gives in this question, Anna or Sarah?")],
      [fp("Listen. Answer."),
       fp("E.A.: Sarah gives — she lends.")],
      "Audio", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Could you lend me…? ». By the end of this lesson, you will have TWO polite questions for borrowing!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Compare on the board: “Can I borrow your eraser?” / “Could you lend me an eraser?” Who is the subject? Which verb?")],
      [fp("Compare. Answer."),
       fp("E.A.: Can I + borrow (me) / Could you + lend (you); same result!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Find out the use and the structure of the modals: can = simple and friendly; could = softer, more polite. Modal + subject + verb (base form).")],
      [fp("Give the rule."),
       fp("E.A.: could is the polite “can”; after a modal, the verb never changes.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Could you lend me a pencil, please? = the most polite question. Answer: Of course! Here you are.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill: eraser → Could you lend me an eraser, please? pencil → … Then chain around the class with real objects — don’t forget a or an!")],
      [fp("Transform. Ask in the chain."),
       pAns("E.A.: Could you lend me a ruler / an eraser, please? — Of course!",
        ["Could you lend me"], { size: SZ.FICHE })],
      "Substitution drill / Chain", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me to lend you a book (with could)."),
       fp("2. What is more polite: can or could?")],
      [fp("Ask. Answer."),
       pAns("E.A.: Could you lend me a book, please? — could.",
        ["could"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LESSON OF THE DAY — SESSION 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COULD YOU LEND ME…, PLEASE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("My two polite questions:", { bold: true })], { after: 50 }),
    bullet([run("1. ", { bold: true }), ...kw("Can I borrow your pen, please?", "kane aï borôou iôr pène pliiz"), run("  (I take)")]),
    bullet([run("2. ", { bold: true }), ...kw("Could you lend me a pen, please?", "koud iou lènnde mi e pène pliiz"), run("  (you give)")]),
    p("", { after: 60 }),
    box("THE MODALS: CAN AND COULD", [
      bullet([run("can", { bold: true, color: C.BLUE }), run(" = simple and friendly: "), run("Can I borrow…?", { bold: true })]),
      bullet([run("could", { bold: true, color: C.BLUE }), run(" = softer, MORE polite: "), run("Could you lend me…?", { bold: true })]),
      bullet([run("After a modal, the verb stays in its base form: "), run("can borrow, could lend", { bold: true, color: C.GREEN }), run(" — never “could lends”!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Careful — a or an:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([run("Could you lend me "), run("a", { bold: true, color: C.BLUE }), run(" pencil / "), run("a", { bold: true, color: C.BLUE }), run(" ruler, please?")]),
    bullet([run("Could you lend me "), run("an", { bold: true, color: C.BLUE }), run(" eraser, please?  (an + vowel sound)")]),
    p("", { after: 60 }),
    box("FROM THE DIALOGUE", [
      p([run("Anna: Could you lend me an eraser too, please?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Sarah: Of course. Just make sure to give it back when you’re done.", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_borrow.png", label: "The borrowing dialogue — listen again", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S23 — Here you are! Give it back! ----------
function ficheS23() {
  const meta = META("Here you are! — giving, giving back and thanking",
    "By the end of the lesson, learners will be able to give something, give it back and thank properly.",
    "6 / 11", "school things, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask with can, then with could."),
       fp("2. a or an: … eraser, … ruler?")],
      [fp("Ask. Answer."),
       fp("E.A.: Can I borrow…? Could you lend me…?; an eraser, a ruler.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I lend my pen to a pupil and say NOTHING. Then I lend it again and say: “Here you are!” Which is better?")],
      [fp("Compare."),
       fp("E.A.: the words make it kind.")], "Demonstration", "A pen"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the words of GIVING: here you are, here is your… back, thank you very much. By the end of this lesson, your sharing will be perfect from start to finish!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the dialogue again. Find: what does Sarah say when she gives the pen? What does Anna say when she returns it?")],
      [fp("Listen. Find."),
       fp("E.A.: “Here you are.” — “Here is your pen back. Thanks again!”")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Build the full sharing story on the board: 1. ask (Can I…?) → 2. give (Here you are!) → 3. thank (Thank you!) → 4. give back (Here is your… back!) → 5. answer (No problem!).")],
      [fp("Build the five steps.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Here you are! when I give; Here is your pen back, thank you very much! when I return; No problem! / You’re welcome! to finish.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The full circuit in pairs with a real object: ask — give — thank — use — give back — thank again!")],
      [fp("Play the full circuit."),
       pAns("E.A.: — Could you lend me a ruler, please? — Sure, here you are! — Thank you! … — Here is your ruler back, thank you very much! — No problem!",
        ["Here is your ruler back"], { size: SZ.FICHE })],
      "Role play / In pairs", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give me your pen with the right words."),
       fp("2. I give it back to you — answer me!")],
      [fp("Give. Answer."),
       pAns("E.A.: Here you are! — Thank you very much! / No problem!",
        ["Here you are!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HERE YOU ARE! — THE WORDS OF GIVING", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The five steps of perfect sharing:", { bold: true })], { after: 50 }),
    bullet([run("1. I ask: ", { bold: true, color: C.GREEN }), run("Could you lend me a ruler, please?", { bold: true, color: C.BLUE })]),
    bullet([run("2. My friend gives: ", { bold: true, color: C.GREEN }), ...kw("Here you are!", "hir iou âr")]),
    bullet([run("3. I thank: ", { bold: true, color: C.GREEN }), ...kw("Thank you! / Thanks!", "tenk iou — tenks")]),
    bullet([run("4. I give back: ", { bold: true, color: C.GREEN }), ...kw("Here is your ruler back, thank you very much!", "hir iz iôr rouleur bak")]),
    bullet([run("5. My friend answers: ", { bold: true, color: C.GREEN }), ...kw("No problem! / You’re welcome!", "nôou probleume — iôr ouèlkeume")]),
    p("", { after: 60 }),
    borrowDialogueBox(),
    p("", { after: 60 }),
    bullet([run("The golden promise: ", { bold: true }), run("“Just make sure to give it back when you’re done.”", { italic: true }), run(" — I always keep it!")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_borrow.png", label: "The borrowing dialogue — the giving words", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S24 — Intonation with yes/no questions ----------
function ficheS24() {
  const meta = META("Intonation with yes/no questions",
    "By the end of the lesson, learners will be able to make their voice go UP at the end of yes/no questions.",
    "7 / 11", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Play the five steps of sharing with me."),
       fp("2. What do I answer to “Thank you very much”?")],
      [fp("Play. Answer."),
       fp("E.A.: full circuit; No problem! / You’re welcome!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to me: “Can I borrow your pen.” (flat) / “Can I borrow your pen? ↗” (going up). Which one is a real question?")],
      [fp("Listen. Choose."),
       fp("E.A.: the second — the voice goes UP.")],
      "Listening discrimination", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to work on the MUSIC of English: the intonation of yes/no questions. By the end of this lesson, your questions will really sound like questions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the dialogue again. Focus on the questions: “Can I borrow your pen, please? ↗” — “Could you lend me an eraser too, please? ↗”. Where does the voice go?")],
      [fp("Listen. Answer."),
       fp("E.A.: the voice goes UP at the end.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Find the rule: yes/no questions (answer = yes or no) → voice UP ↗. WH-questions (who, where, what — Unit 1) → voice DOWN ↘.")],
      [fp("Give the rule. Give examples."),
       fp("E.A.: Can I…? ↗ — Where are you from? ↘")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: if the answer is yes or no, my voice goes UP at the end. Draw the arrow ↗ over the questions!")],
      [fp("Repeat with the arrows.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Repetition drill with gestures: hand goes up with the voice! Can I borrow your pen? ↗ Do you have a ruler? ↗ Is it your book? ↗ Then WH for contrast: Where are you from? ↘")],
      [fp("Repeat with the hand."),
       pAns("E.A.: clear rising intonation on yes/no questions.",
        ["↗"], { size: SZ.FICHE })],
      "Repetition drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Read these questions with the right intonation: 1. May I borrow your eraser? 2. What is your name? 3. Could you lend me a pencil?")],
      [fp("Read."),
       pAns("E.A.: 1 ↗ — 2 ↘ — 3 ↗.", ["1 ↗"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MUSIC OF QUESTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RULE", [
      bullet([run("Yes/no question (answer = yes or no) → the voice goes "), run("UP ↗", { bold: true, color: C.GREEN, size: 30 })]),
      bullet([run("WH-question (who, where, what) → the voice goes "), run("DOWN ↘", { bold: true, color: C.RED, size: 30 })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Voice UP ↗ :", { bold: true, color: C.GREEN })], { after: 50 }),
    bullet([...kw("Can I borrow your pen, please? ↗", "kane aï borôou iôr pène pliiz")]),
    bullet([...kw("Could you lend me an eraser? ↗", "koud iou lènnde mi ane iréizeur")]),
    bullet([...kw("Do you have a ruler? ↗", "dou iou hav e rouleur")]),
    bullet([...kw("Is it your book? ↗", "iz ite iôr bouk")]),
    p("", { after: 40 }),
    p([run("Voice DOWN ↘ :", { bold: true, color: C.RED })], { after: 50 }),
    bullet([...kw("Where are you from? ↘", "ouèr âr iou frome")]),
    bullet([...kw("What is your job? ↘", "ouate iz iôr djob")]),
    p("", { after: 60 }),
    box("THE HAND TRICK", [
      p([run("I raise my hand with my voice: the hand goes UP, the voice goes UP!", { italic: true, size: SZ.BODY })], { center: true, after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_borrow.png", label: "Listen to the rising questions of the dialogue", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S25 — Role play: the borrowing dialogue ----------
function ficheS25() {
  const meta = META("Role play — my own borrowing dialogue",
    "By the end of the lesson, learners will be able to build and act out their own borrowing dialogue.",
    "8 / 11", "school things, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Which questions go UP?"),
       fp("2. Ask me a rising question.")],
      [fp("Answer. Ask."),
       fp("E.A.: yes/no questions; Can I…? ↗")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen one last time to Anna and Sarah — and repeat each line with the same intonation, like actors!")],
      [fp("Listen. Repeat like actors.")], "Repetition drill", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today, the stage is yours: you will play the dialogue AND create your own version!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Role play the original dialogue in pairs (Anna and Sarah). Change roles once.")],
      [fp("Act the original dialogue.")],
      "Role play", "The dialogue"),
    stepRow(["4. Analysis"],
      [fp("Now REPLACE the words: pen → ruler? eraser → pencil sharpener? Hi, Sarah → Hi, Koto? Build your own dialogue in pairs with the same skeleton.")],
      [fp("Replace. Write your version."),
       fp("E.A.: same structure, new school things and names.")],
      "Substitution drill", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("The skeleton of every borrowing dialogue: greet → ask (can/could) → give (here you are) → thank → give back → No problem!")],
      [fp("Check your dialogue with the skeleton.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Act out your own dialogue in front of the class, with real objects and rising intonation! The class listens and answers: what did he/she borrow?")],
      [fp("Perform. Listen. Answer."),
       pAns("E.A.: complete dialogues, polite questions, ↗ intonation, things given back!",
        ["polite questions"], { size: SZ.FICHE })],
      "Role play / Group performance", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say your dialogue without reading."),
       fp("2. The class checks the five steps of sharing.")],
      [fp("Perform by heart."),
       pAns("E.A.: the five steps are all there.", ["five steps"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}
function lessonS25() {
  return [
    p([run("LESSON OF THE DAY — SESSION 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY OWN BORROWING DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The skeleton — I keep it, I change the words:", { bold: true })], { after: 50 }),
    bullet([run("1. Greet: ", { bold: true, color: C.GREEN }), run("Hi, …!", { bold: true, color: C.BLUE })]),
    bullet([run("2. Ask: ", { bold: true, color: C.GREEN }), run("Can I borrow your …, please? ↗", { bold: true, color: C.BLUE })]),
    bullet([run("3. Give: ", { bold: true, color: C.GREEN }), run("Sure! Here you are.", { bold: true, color: C.BLUE })]),
    bullet([run("4. Ask again: ", { bold: true, color: C.GREEN }), run("Could you lend me a/an … too, please? ↗", { bold: true, color: C.BLUE })]),
    bullet([run("5. Promise: ", { bold: true, color: C.GREEN }), run("Of course. Just make sure to give it back!", { bold: true, color: C.BLUE })]),
    bullet([run("6. Give back: ", { bold: true, color: C.GREEN }), run("Here is your … back. Thanks again! — No problem!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("A NEW VERSION (example)", [
      p([run("Koto: Hi, Soa! Can I borrow your ruler, please?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Soa: Sure! Here you are.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Koto: Thank you! By the way, could you lend me a pencil sharpener too, please?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Soa: Of course. Just make sure to give it back when you’re done.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Koto: I will. Here is your ruler back. Thanks again!", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Soa: No problem!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u2_borrow.png", label: "The model dialogue — listen before acting", url: AUDIO.borrow }], COLOR),
  ];
}

// ---------- S26 — Reading (1) ----------
function classroomReadingBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("IN THE CLASSROOM (reading dialogue)", [
    L("Teacher: Good morning, class! Sit down, please. Open your books at page ten."),
    L("Rija: Excuse me, Madam. I don’t have my book today."),
    L("Teacher: Don’t worry, Rija. Bora, can you share your book with Rija, please?"),
    L("Bora: Of course! Here you are."),
    L("Rija: Thank you, Bora! By the way, could you lend me a pen too, please?"),
    L("Bora: Sure. But please give it back after the lesson."),
    L("Rija: I will. Thanks a lot!"),
    L("Teacher: Very good, children. Now listen carefully and repeat after me. And don’t write on the desks, please!"),
    L("(After the lesson.)"),
    L("Rija: Here is your pen back, Bora. Thank you very much!"),
    L("Bora: No problem!"),
  ]);
}
function ficheS26() {
  const meta = META("Reading (1) — a dialogue about classroom communication",
    "By the end of the lesson, learners will be able to read a dialogue about classroom communication and find its gist.",
    "9 / 11", "reading dialogue (in the book), stick figures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say your borrowing dialogue by heart."),
       fp("2. Give one negative command.")],
      [fp("Perform. Answer."),
       fp("E.A.: correct dialogue; Don’t…!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: match the classroom instructions with the pictures / stick figures (sit down, open your books, raise your hand…).")],
      [fp("Match.")], "Matching game", "Stick figures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a dialogue that happens in a classroom like ours. By the end of this lesson, you will find its gist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the dialogue “In the classroom” once. Tick the right option: the dialogue is about a) food b) borrowing at school c) family.")],
      [fp("Read. Tick."),
       fp("E.A.: b) borrowing at school.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Tick the right options about the details: Who has no book? What does Rija borrow? When must he give the pen back?")],
      [fp("Read again. Tick."),
       fp("E.A.: Rija; a book (shared) and a pen; after the lesson.")],
      "Detailed reading", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So the gist: at school, when we forget something, we ask politely, we share, and we give back — that is solidarity!")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-reading: act out the dialogue with classmates (teacher, Rija, Bora). Rising intonation on the questions!")],
      [fp("Act out."),
       pAns("E.A.: lively acting, ↗ questions, clear commands.",
        ["act out"], { size: SZ.FICHE })],
      "Role play", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In one sentence, what is the dialogue about?"),
       fp("2. Find one affirmative and one negative command in the text.")],
      [fp("Answer. Find."),
       pAns("E.A.: sharing school things politely; Sit down, please! / Don’t write on the desks!",
        ["Sit down, please!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}
function lessonS26() {
  return [
    p([run("LESSON OF THE DAY — SESSION 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: “IN THE CLASSROOM”", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    classroomReadingBox(),
    p("", { after: 60 }),
    p([run("The gist (the main idea):", { bold: true })], { after: 50 }),
    bullet([run("At school we "), run("ask politely, we share, and we give back", { bold: true, color: C.BLUE }), run(" — that is solidarity!")]),
    p("", { after: 40 }),
    p([run("I found in the text:", { bold: true })], { after: 50 }),
    bullet([run("an affirmative command: "), run("Sit down, please!", { bold: true, color: C.GREEN })]),
    bullet([run("a negative command: "), run("Don’t write on the desks!", { bold: true, color: C.RED })]),
    bullet([run("a can-question: "), run("Can you share your book with Rija, please?", { bold: true, color: C.BLUE })]),
    bullet([run("a could-question: "), run("Could you lend me a pen too, please?", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S27 — Reading (2) ----------
function ficheS27() {
  const meta = META("Reading (2) — questions, answers and a new dialogue",
    "By the end of the lesson, learners will be able to answer questions on the dialogue and build a new one.",
    "10 / 11", "reading dialogue (in the book)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of “In the classroom”?"),
       fp("2. Who lends a pen?")],
      [fp("Answer."),
       fp("E.A.: sharing politely at school; Bora.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Books closed! Quick quiz: who says “Here you are”? who says “No problem”? who says “Don’t worry”?")],
      [fp("Answer from memory."),
       fp("E.A.: Bora — Bora — the teacher.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we work the text in depth: answer real questions, then create a NEW dialogue with a classmate.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Read the dialogue again and answer with full sentences: 1. Why does Rija need help? 2. What does the teacher ask Bora? 3. What does Rija promise?")],
      [fp("Read. Answer."),
       fp("E.A.: He doesn’t have his book. — To share her book. — To give the pen back after the lesson.")],
      "Detailed reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Hunt in the text: all the polite words (please, thank you, thanks a lot, no problem). How many can you find?")],
      [fp("Hunt. Count."),
       fp("E.A.: please ×3, thank you / thanks ×3, no problem ×1…")],
      "Text hunt", "Text"),
    stepRow(["5. Synthesis"],
      [fp("A good classroom dialogue = commands + polite borrowing + thanks. Our new dialogues will have the same ingredients!")],
      [fp("List the ingredients.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Build a NEW dialogue with a classmate: change the school things, the names, add one new command. Act it out!")],
      [fp("Build. Act out."),
       pAns("E.A.: new dialogue with commands, can/could, thanks — acted with intonation.",
        ["new dialogue"], { size: SZ.FICHE })],
      "Role play / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Answer: what does Bora ask Rija to do with the pen?"),
       fp("2. Read Bora’s lines with the right intonation.")],
      [fp("Answer. Read."),
       pAns("E.A.: to give it back after the lesson; correct reading.",
        ["give it back"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LESSON OF THE DAY — SESSION 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("QUESTIONS ON THE TEXT — MY ANSWERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("I answer with FULL sentences:", { bold: true })], { after: 50 }),
    bullet([run("Why does Rija need help? — "), run("Because he doesn’t have his book.", { bold: true, color: C.BLUE })]),
    bullet([run("What does the teacher ask Bora? — "), run("She asks her to share her book with Rija.", { bold: true, color: C.BLUE })]),
    bullet([run("What does Rija borrow? — "), run("He borrows a pen.", { bold: true, color: C.BLUE })]),
    bullet([run("What does Rija promise? — "), run("He promises to give the pen back after the lesson.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("The polite words I found in the text:", { bold: true })], { after: 50 }),
    bullet([...kw("please", "pliiz"), run("  — three times!")]),
    bullet([...kw("thank you / thanks a lot / thank you very much", "tenk iou — tenks e lote")]),
    bullet([...kw("no problem", "nôou probleume")]),
    bullet([...kw("don’t worry", "dôonnte oueuri"), run("  — to comfort a friend")]),
    p("", { after: 60 }),
    box("MY NEW DIALOGUE CHECKLIST", [
      bullet([run("one command (Sit down! / Open…!)")]),
      bullet([run("one negative command (Don’t…!)")]),
      bullet([run("one can-question and one could-question ↗")]),
      bullet([run("here you are — thank you — give back — no problem!")], { after: 20 }),
    ]),
  ];
}

// ---------- S28 — Writing ----------
function ficheS28() {
  const meta = META("Writing — a set of meaningful classroom instructions",
    "By the end of the lesson, learners will be able to write classroom instructions correctly and build a dialogue with them.",
    "11 / 11", "copy-books, small papers for the draw");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the ingredients of a classroom dialogue."),
       fp("2. Spell “borrow”.")],
      [fp("Answer."),
       fp("E.A.: commands + polite borrowing + thanks; B-O-R-R-O-W.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: read the series of classroom instructions on the board and MEMORIZE them (1 minute)… now I erase everything!")],
      [fp("Read. Memorize.")], "Memory game", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today, our final mission of Unit 2: WRITE your own set of classroom instructions — and turn them into a dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-writing (1): write out all the instructions you remember. Compare with your neighbour: who remembered more?")],
      [fp("Write from memory. Compare."),
       fp("E.A.: Stand up! Sit down! Open your books! Don’t talk!…")],
      "Individual writing", "Copy-books"),
    stepRow(["4. Analysis"],
      [fp("While-writing (2): write TWO other instructions of your own (one affirmative, one negative). Peer correct: exchange and check — verb first? Don’t + verb? capital letter? exclamation mark?")],
      [fp("Write. Peer correct."),
       fp("E.A.: correct new commands, checked by a peer.")],
      "Peer correction", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("A good written instruction: Verb first (or Don’t + verb) + ! at the end. Short, clear, polite with “please”.")],
      [fp("Repeat the checklist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Act out instructions you pick at random from the box! Then build a dialogue about classroom instructions that includes lending and borrowing. Post-writing: perform it and answer the class’s questions.")],
      [fp("Pick. Act. Build the dialogue. Perform."),
       pAns("E.A.: instructions correctly written and acted; final dialogue with commands + borrowing.",
        ["final dialogue"], { size: SZ.FICHE })],
      "Role play / Peer correction", "Small papers"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write four instructions: two affirmative, two negative — without a model!")],
      [fp("Write."),
       pAns("E.A.: e.g. Raise your hand! Listen carefully! Don’t run! Don’t forget your homework!",
        ["Raise your hand!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  return [
    p([run("LESSON OF THE DAY — SESSION 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I WRITE MY CLASSROOM INSTRUCTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITING CHECKLIST", [
      bullet([run("Affirmative: "), run("Verb first + !", { bold: true, color: C.BLUE }), run("  →  Stand up! Listen carefully!")]),
      bullet([run("Negative: "), run("Don’t + verb + !", { bold: true, color: C.BLUE }), run("  →  Don’t talk! Don’t be late!")]),
      bullet([run("A "), run("capital letter", { bold: true }), run(" at the start, an "), run("exclamation mark (!)", { bold: true }), run(" at the end")]),
      bullet([run("“please” to be kind: "), run("Be quiet, please!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My set of instructions (model):", { bold: true })], { after: 50 }),
    bullet([run("Come in and sit down, please!", { italic: true })]),
    bullet([run("Take your notebooks!", { italic: true })]),
    bullet([run("Listen carefully and repeat after me!", { italic: true })]),
    bullet([run("Raise your hand to speak!", { italic: true })]),
    bullet([run("Don’t write on the desks!", { italic: true })]),
    bullet([run("Don’t forget your homework!", { italic: true })]),
    p("", { after: 60 }),
    p([run("From instructions to dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Teacher: "), run("Take your pens! ", { italic: true }), run("— Pupil: "), run("Excuse me… Could you lend me a pen, please? — Sure, here you are!", { italic: true })]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 2", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("CLASSROOM COMMUNICATION"),
    sub("1. Classroom instructions"),
    bullet([...kw("Stand up! Sit down! Open your books! Close your books!", "stannde eup — site daoune — ôoupeune iôr bouks")]),
    bullet([...kw("Listen carefully! Repeat after me! Raise your hand!", "lisseune kèrfouli — ripite afteur mi — réiz iôr hannde")]),
    bullet([run("The rule: ", { bold: true }), run("verb first, no subject — “please” makes it polite", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Negative commands"),
    bullet([run("The rule: ", { bold: true }), run("Don’t + verb", { bold: true, color: C.BLUE }), run("  (Don’t = do not)")]),
    bullet([...kw("Don’t talk! Don’t run! Don’t forget your homework!", "dôonnte tôk — dôonnte reune")], { after: 100 }),
    sub("3. Lend, borrow, give back"),
    bullet([run("borrow", { bold: true, color: C.BLUE }), run(" = I take for a moment — "), run("lend", { bold: true, color: C.BLUE }), run(" = I give for a moment — "), run("give back", { bold: true, color: C.BLUE }), run(" = I return")], { after: 100 }),
    sub("4. Borrowing politely — the modals can and could"),
    bullet([...kw("Can I borrow your pen, please? ↗", "kane aï borôou iôr pène pliiz")]),
    bullet([...kw("May I borrow your ruler, please? ↗", "méi aï borôou iôr rouleur pliiz")]),
    bullet([...kw("Could you lend me an eraser, please? ↗", "koud iou lènnde mi ane iréizeur pliiz"), run("  (could = the polite can)")]),
    bullet([run("After a modal, the verb stays in its base form!", { bold: true, color: C.RED })], { after: 100 }),
    sub("5. Giving and giving back"),
    bullet([...kw("Sure! / Of course! Here you are.", "chour — ov côrss — hir iou âr")]),
    bullet([...kw("Here is your pen back, thank you very much!", "hir iz iôr pène bak")]),
    bullet([...kw("No problem! / You’re welcome!", "nôou probleume — iôr ouèlkeume")], { after: 100 }),
    sub("6. Intonation"),
    bullet([run("Yes/no question → voice "), run("UP ↗", { bold: true, color: C.GREEN }), run(" : Can I borrow your pen? ↗")]),
    bullet([run("WH-question → voice "), run("DOWN ↘", { bold: true, color: C.RED }), run(" : Where are you from? ↘")], { after: 140 }),
    borrowDialogueBox(),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t7_u2_instructions.png", label: "Classroom instructions — listen and do", url: AUDIO.instructions },
      { qr: "qr_t7_u2_borrow.png", label: "The borrowing dialogue — listen and repeat", url: AUDIO.borrow },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Write the negative command:")]),
    p("1. Talk! → ……    2. Run! → ……    3. Open the window! → ……    4. Be late! → ……", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with borrow, lend or give back:")]),
    p("1. Can I …… your pen, please?    2. Could you …… me a ruler, please?"),
    p("3. Don’t forget to …… my eraser!    4. Sarah …… her pen to Anna.", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put the words in order: “please / borrow / can / your / I / ruler / ?” — “me / could / lend / an / you / eraser / ?”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("↗ or ↘? 1. Can I borrow your book? 2. Where are you from? 3. Do you have a pencil? 4. What is your job?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a borrowing mini-dialogue (4 lines): ask politely, give, thank, give back.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Don’t talk! — Don’t run! — Don’t open the window! — Don’t be late! (1 point each).", ["Don’t talk!"]),
    pAns("Exercise 2: 1. borrow  2. lend  3. give back  4. lends (1 point each).", ["borrow", "lends"]),
    pAns("Exercise 3: Can I borrow your ruler, please? — Could you lend me an eraser? (2 points each).", ["Can I borrow your ruler, please?"]),
    pAns("Exercise 4: 1 ↗ — 2 ↘ — 3 ↗ — 4 ↘ (1 point each).", ["1 ↗"]),
    pAns("Exercise 5: e.g. — Could you lend me a pen, please? — Sure, here you are! — Thank you! — Here is your pen back. — No problem! (1 point per line).", ["Could you lend me a pen, please?"]),
  ];
}

// ---------- S29 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s29", "SESSION 29 / 99", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give five classroom instructions — the class performs them!"),
    pAns("E.A.: Stand up! Sit down! Open your books! Raise your hand! Come to the board!", ["Stand up!"]),
    p("2. Transform into negative commands: Talk! — Run! — Be late!"),
    pAns("E.A.: Don’t talk! — Don’t run! — Don’t be late!", ["Don’t talk!"]),
    p("3. Explain: lend, borrow, give back."),
    pAns("E.A.: lend = give for a moment; borrow = take for a moment; give back = return.", ["give back"]),
    p("4. Ask to borrow my pen — two polite ways."),
    pAns("E.A.: Can/May I borrow your pen, please? — Could you lend me a pen, please?", ["Could you lend me"]),
    p("5. I give you my pen: what do I say? what do you answer?"),
    pAns("E.A.: Here you are! — Thank you very much!", ["Here you are!"]),
    p("6. You return the pen: say it."),
    pAns("E.A.: Here is your pen back, thanks again! — No problem!", ["Here is your pen back"]),
    p("7. Which questions go UP ↗? Give an example."),
    pAns("E.A.: yes/no questions; Can I borrow your ruler? ↗", ["yes/no questions"]),
    p("8. Play the dialogue of Anna and Sarah with a classmate."),
    pAns("E.A.: fluent role play with rising questions.", ["role play"]),
    p("9. In the reading: why does Rija borrow a pen? What does he promise?"),
    pAns("E.A.: he doesn’t have his things; to give it back after the lesson.", ["after the lesson"]),
    p("10. Write two affirmative and two negative instructions."),
    pAns("E.A.: Listen carefully! Work in pairs! Don’t talk! Don’t write on the desk!", ["Listen carefully!"]),
  ];
}

// ---------- S30 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s30", "SESSION 30 / 99", { bold: true, size: 28, after: 60 }),
    p([run("T7 TEST PAPER — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: follow my instructions (stand up, raise your hand, come to the board, sit down).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Write the commands: 1. (talk, negative) 2. (open the books, affirmative) 3. (run, negative) 4. (listen, affirmative + please).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: 1. …… I borrow your pen, please? 2. Could you …… me a ruler? 3. Here you ……! 4. Here is your pen ……, thank you!")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("↗ or ↘? 1. May I borrow your eraser? 2. What is your name? 3. Could you lend me a book? 4. Who is she?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a borrowing dialogue (at least 5 lines) with: one command, can or could, here you are, give back, thank you.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the four actions are performed correctly (1 point each).", ["performed"]),
    pAns("Exercise 2: 1. Don’t talk! 2. Open your books! 3. Don’t run! 4. Listen, please! (1 point each).", ["Don’t talk!"]),
    pAns("Exercise 3: 1. Can/May  2. lend  3. are  4. back (1 point each).", ["lend"]),
    pAns("Exercise 4: 1 ↗ — 2 ↘ — 3 ↗ — 4 ↘ (1 point each).", ["1 ↗"]),
    pAns("Exercise 5: complete dialogue with the five elements (Anna/Sarah model accepted) — 4 points.", ["dialogue"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS18(), pageBreak(), ...lessonS18(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can follow and give classroom instructions.",
      "I can give negative commands: Don’t…!",
      "I can use lend, borrow and give back correctly.",
      "I can ask politely: Can / May I borrow your…, please?",
      "I can ask politely: Could you lend me a/an…, please?",
      "I can give and give back with the right words: Here you are! Here is your… back!",
      "I can make my voice go UP in yes/no questions.",
      "I can read, write and act a borrowing dialogue.",
    ], "Well done! See you in Unit 3: COMMON FOOD!"),
  ];
};
module.exports.COLOR = COLOR;
