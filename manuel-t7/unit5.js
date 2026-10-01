// T7 — UNIT 5 — MEANS OF COMMUNICATION (16 séances + révision + test) — Sessions 66 à 83 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "148F77"; // vert sarcelle
const SHADE = "D1F2EB";
const TOTAL = 99;
const AUDIO = {
  means: "https://drive.google.com/uc?export=download&id=1AtN5skdwIzNokJjMvP6YUDk83-T5urIu",
  nowadays: "https://drive.google.com/uc?export=download&id=19A34cr20KX3lAQuqObGHQ7GsRdnzJade",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — MEANS OF COMMUNICATION", title, slo,
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
function nowadaysTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("HOW PEOPLE COMMUNICATE NOWADAYS (listening passage)", [
    L("Long ago, people wrote letters and waited many days for an answer. Today, communication is fast! My grandfather reads the newspaper every morning, and my grandmother listens to the radio. My parents watch TV in the evening, and they read the news on the internet."),
    L("My big sister sends emails for her work, and she chats with her friends on WhatsApp. Me? I like Facebook and Messenger, but I only use them with my mother. At school, we read the notice board every day."),
    L("Newspapers, radio, TV, internet — so many ways to say hello!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 5 — MEANS OF COMMUNICATION", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("Do you watch TV? — Yes, I do!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_means.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the means of communication: newspaper, radio, TV, internet…;"),
    p("• use the right verb: watch TV, listen to the radio, send an email;"),
    p("• ask Yes/No questions and give short answers: Do you…? Yes, I do!;"),
    p("• ask WH-questions: When? With who?;"),
    p("• tell a habit from an action happening NOW: I watch TV / I am watching TV;"),
    p("• link my ideas with and, but, or, so;"),
    p("• read a radio interview;"),
    p("• interview a classmate and write the report.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, mutual respect.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 4)", [
      p("In Unit 4 we described the family: What does she look like? What kind of person is she?"),
      p("In Unit 5, the family communicates: by radio, by phone, on WhatsApp… Hello, hello!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u5_means.png", label: "The means of communication — listen and repeat", url: AUDIO.means }], COLOR),
  ];
}

// ---------- S66 — The means of communication ----------
function ficheS66() {
  const meta = META("The means of communication — vocabulary",
    "By the end of the lesson, learners will be able to name the different means of communication.",
    "1 / 16", "pictures or realia (newspaper, radio, phone…), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 4.) Answer these questions:"),
       fp("1. Describe your role model in two sentences."),
       fp("2. Transform: a girl with long hair → …")],
      [fp("Answer."),
       fp("E.A.: correct description; a long-haired girl.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the pictures (or the realia): a newspaper, a radio… How does YOUR family get the news?")],
      [fp("Look. Answer.")], "Use of pictures/realia", "Pictures or realia"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The means of communication ». By the end of this lesson, you will name all the ways people communicate!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Language transfer! Some words are almost French: television / télévision, radio / radio, internet / internet, message / message. Find the similarities!")],
      [fp("Compare English and French."),
       fp("E.A.: they look the same — transparent words!")],
      "Language transfer", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Listen and repeat correctly: a newspaper, a notice board, the radio, the television (TV), a mobile phone, the internet: an email, Facebook, Messenger, WhatsApp."),
       fp("Sort them: paper / waves / internet.")],
      [fp("Listen. Repeat. Sort."),
       fp("E.A.: paper: newspaper, notice board; waves: radio, TV; internet: email, Facebook…")],
      "Audio / Classification", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So the means of communication: on paper (newspaper, notice board), on the waves (radio, TV, phone) and on the internet (email, Facebook, Messenger, WhatsApp).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game: I describe, you name! “It is on the classroom wall, with papers.” — “The notice board!”")],
      [fp("Guess the means of communication."),
       pAns("E.A.: the notice board! the radio! an email!",
        ["the notice board!"], { size: SZ.FICHE })],
      "Guessing game", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two means of communication on paper and two on the internet."),
       fp("2. Give one transparent word (English ≈ French).")],
      [fp("Answer."),
       pAns("E.A.: newspaper, notice board; email, WhatsApp; television/radio/internet.",
        ["newspaper"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66");
}
function lessonS66() {
  return [
    p([run("LESSON OF THE DAY — SESSION 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MEANS OF COMMUNICATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_means.png", 420, 768 / 1408),
    p([run("The three families of communication:", { bold: true })], { after: 50 }),
    bullet([run("On paper: ", { bold: true, color: C.GREEN }), ...kw("a newspaper, a notice board", "e niouzpéipeur, e nôoutiss bôrd")]),
    bullet([run("On the waves: ", { bold: true, color: C.GREEN }), ...kw("the radio, the television (TV), a mobile phone", "dhe réidiôou, dhe tèlèvijeune, e môoubaïl fôoune")]),
    bullet([run("On the internet: ", { bold: true, color: C.GREEN }), ...kw("an email, Facebook, Messenger, WhatsApp", "ann imeil, féissbouk, mèsenndjeur, ouatsap")]),
    p("", { after: 60 }),
    box("THE TRANSPARENT WORDS — ENGLISH ≈ FRENCH!", [
      bullet([run("television ≈ télévision — radio ≈ radio — internet ≈ internet — message ≈ message", { bold: true, color: C.BLUE })]),
      bullet([run("Careful with the pronunciation: "), ...kw("television", "tèlèvijeune"), run(" — not like in French!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u5_means.png", label: "The means of communication — listen and repeat", url: AUDIO.means }], COLOR),
  ];
}

// ---------- S67 — The communication verbs ----------
function ficheS67() {
  const meta = META("The communication verbs",
    "By the end of the lesson, learners will be able to match each means of communication with its verb and use it in a sentence.",
    "2 / 16", "pictures, verb cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the three families of means of communication."),
       fp("2. Give two means on the internet.")],
      [fp("Answer."),
       fp("E.A.: paper, waves, internet; email, WhatsApp…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Watch my gestures and guess the verb: (I mime turning pages) read! (I mime holding a phone) make a phone call!")],
      [fp("Watch. Guess the verbs.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The communication verbs ». By the end of this lesson, every means will have its verb!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and repeat: watch TV — listen to the radio — read the newspaper — read the notice board — make a phone call — send an email — chat on WhatsApp — surf on the internet.")],
      [fp("Listen. Repeat.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Matching game (orally): I say the means, you say the verb! “TV?” — “Watch!” “The radio?” — “Listen to!”"),
       fp("Careful: we WATCH TV (with the eyes) but we LISTEN TO the radio (with the ears)!")],
      [fp("Match means and verbs."),
       fp("E.A.: TV → watch; radio → listen to; email → send; newspaper → read.")],
      "Matching game", "Verb cards"),
    stepRow(["5. Synthesis"],
      [fp("So each means has its verb: watch TV, listen to the radio, read the newspaper, make a phone call, send an email, chat on WhatsApp.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Make true sentences about your family: “My father listens to the radio. My aunt chats on WhatsApp.”")],
      [fp("Make two true sentences."),
       pAns("E.A.: My mother watches TV in the evening. (watch + ES for she!)",
        ["watches TV"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: … TV, … to the radio, … an email."),
       fp("2. Why do we say LISTEN TO the radio but WATCH TV?")],
      [fp("Answer."),
       pAns("E.A.: watch, listen, send; radio = ears, TV = eyes.",
        ["watch, listen, send"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67");
}
function lessonS67() {
  return [
    p([run("LESSON OF THE DAY — SESSION 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE COMMUNICATION VERBS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Each means has its verb:", { bold: true })], { after: 50 }),
    vocab("to watch TV", "tou ouatch tivi", "with the eyes!"),
    vocab("to listen to the radio", "tou lisseune tou dhe réidiôou", "with the ears!"),
    vocab("to read the newspaper / the notice board", "tou riide dhe niouzpéipeur"),
    vocab("to make a phone call", "tou méik e fôoune kôl"),
    vocab("to send an email", "tou sènnde ann imeil"),
    vocab("to chat on WhatsApp / Messenger", "tou tchatt onne ouatsap"),
    vocab("to surf on the internet", "tou seurf onne dhi innteurnèt"),
    p("", { after: 60 }),
    box("CAREFUL — THE LITTLE WORDS", [
      bullet([run("listen "), run("TO", { bold: true, color: C.RED }), run(" the radio — chat "), run("ON", { bold: true, color: C.RED }), run(" WhatsApp — surf "), run("ON", { bold: true, color: C.RED }), run(" the internet")]),
      bullet([run("but: watch TV, read the newspaper — no little word!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY FAMILY COMMUNICATES (model sentences)", [
      bullet([run("My grandfather "), run("reads", { bold: true, color: C.BLUE }), run(" the newspaper every morning.")]),
      bullet([run("My mother "), run("watches", { bold: true, color: C.BLUE }), run(" TV in the evening. (she → -es!)")]),
      bullet([run("My sister "), run("chats", { bold: true, color: C.BLUE }), run(" with her friends on WhatsApp.")], { after: 20 }),
    ]),
  ];
}

// ---------- S68 — Listening: how people communicate nowadays ----------
function ficheS68() {
  const meta = META("Listening — how people communicate nowadays",
    "By the end of the lesson, learners will be able to understand an oral passage about means of communication (gist and details).",
    "3 / 16", "audio (QR code), passage in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the verb: TV, radio, email."),
       fp("2. Make one sentence about your family and the radio.")],
      [fp("Answer."),
       fp("E.A.: watch, listen to, send; My uncle listens to the radio.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: long ago, how did people send news? And today? Guess what the passage will say!")],
      [fp("Guess."),
       fp("E.A.: letters before; phones and internet today.")],
      "Prediction", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to a passage: « How people communicate nowadays ». By the end of this lesson, you will catch its gist and its details!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): what is the passage about? Is communication slow or fast today?")],
      [fp("Listen. Answer."),
       fp("E.A.: how people communicate; fast!")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): detailed questions:"),
       fp("1. What does the grandfather do every morning? 2. Who listens to the radio? 3. What does the big sister use for work? 4. What do the pupils read at school?")],
      [fp("Listen. Answer."),
       fp("E.A.: he reads the newspaper; the grandmother; emails; the notice board.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So: every generation has its means! Grandparents: newspaper and radio; parents: TV and internet; young people: WhatsApp and Messenger. Repeat the names correctly!")],
      [fp("Listen. Repeat the means of communication.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("And in YOUR family? Tell your neighbour who uses what: “My grandmother listens to the radio, and my cousin chats on Messenger.”")],
      [fp("Tell your neighbour."),
       pAns("E.A.: two correct sentences with different means.",
        ["listens to the radio"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the gist of the passage in one sentence."),
       fp("2. Give two details you remember.")],
      [fp("Answer."),
       pAns("E.A.: today people communicate fast with many means; grandfather/newspaper, sister/emails…",
        ["communicate fast"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(68, TOTAL, meta, rows, "s68");
}
function lessonS68() {
  return [
    p([run("LESSON OF THE DAY — SESSION 68", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HOW PEOPLE COMMUNICATE NOWADAYS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_family.png", 380, 768 / 1408),
    nowadaysTextBox(),
    p("", { after: 60 }),
    box("WHAT WE LEARN FROM THE PASSAGE", [
      bullet([...kw("nowadays", "naoueudéiz"), run(" = today, in our time")]),
      bullet([run("Long ago: "), run("letters", { bold: true, color: C.BLUE }), run(" — slow! Today: "), run("phone, internet", { bold: true, color: C.BLUE }), run(" — fast!")]),
      bullet([run("Every generation has its means: newspaper → radio → TV → WhatsApp!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u5_nowadays.png", label: "“How people communicate nowadays” — listen", url: AUDIO.nowadays }], COLOR),
  ];
}

// ---------- S69 — Yes/No questions + short answers ----------
function ficheS69() {
  const meta = META("Do you watch TV? — Yes/No questions and short answers",
    "By the end of the lesson, learners will be able to ask Yes/No questions with DO/DOES and give short answers.",
    "4 / 16", "blackboard, question cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What means does the big sister use in the passage?"),
       fp("2. Make a sentence: grandfather + newspaper.")],
      [fp("Answer."),
       fp("E.A.: emails and WhatsApp; My grandfather reads the newspaper.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I ask, you answer with YES or NO only: Do you watch TV? Do you use Facebook? Easy? Today we learn the machine behind these questions!")],
      [fp("Answer yes or no.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Yes/No questions ». By the end of this lesson, you will ask and answer like a reporter!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: You watch TV. → DO you watch TV? She watches TV. → DOES she watch TV? (and watch loses its -es!)"),
       fp("The short answers: Yes, I do. / No, I don’t. — Yes, she does. / No, she doesn’t.")],
      [fp("Observe the transformation.")],
      "Transformation drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Transformation drill: I say the sentence, you make the question!"),
       fp("They listen to the radio. / Your mother sends emails. / You chat on WhatsApp.")],
      [fp("Transform."),
       fp("E.A.: Do they listen…? Does your mother send…? Do you chat…?")],
      "Transformation drill", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: DO/DOES + subject + verb (base form)? — Short answer: Yes, I do / No, I don’t; Yes, she does / No, she doesn’t.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game: ask your neighbour a Yes/No question about means of communication; he/she answers SHORT and asks the next pupil!")],
      [fp("Ask. Answer short. Pass the question!"),
       pAns("E.A.: Do you listen to the radio? — Yes, I do! Does your father use WhatsApp? — No, he doesn’t.",
        ["Yes, I do!"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Make the question: She surfs on the internet."),
       fp("2. Answer short: Do you read the newspaper? (no)")],
      [fp("Answer."),
       pAns("E.A.: Does she surf on the internet?; No, I don’t.",
        ["Does she surf"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(69, TOTAL, meta, rows, "s69");
}
function lessonS69() {
  return [
    p([run("LESSON OF THE DAY — SESSION 69", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DO YOU WATCH TV? — YES, I DO!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE QUESTION MACHINE", [
      bullet([run("You watch TV. → "), run("DO", { bold: true, color: C.RED }), run(" you watch TV?", { bold: true, color: C.BLUE })]),
      bullet([run("She watches TV. → "), run("DOES", { bold: true, color: C.RED }), run(" she watch TV?", { bold: true, color: C.BLUE }), run("  (watch loses its -es: DOES took it!)")]),
      bullet([...kw("Do you use Facebook?", "dou iou iouz féissbouk"), run("  — "), ...kw("Does your mother send emails?", "deuz ior meudheur sènnde imeilz")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SHORT ANSWERS", [
      bullet([run("Yes, I do. / No, I don’t.", { bold: true, color: C.BLUE }), run("  [yèss aï dou / nôou aï dôounnt]", { italic: true, color: C.GRAY })]),
      bullet([run("Yes, he/she does. / No, he/she doesn’t.", { bold: true, color: C.BLUE })]),
      bullet([run("Yes, they do. / No, they don’t.", { bold: true, color: C.BLUE })]),
      bullet([run("Short = polite and fast! No need to repeat the whole sentence.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MINI-DIALOGUE", [
      p([run("— Do you chat on WhatsApp?  — Yes, I do!", { italic: true })], { after: 30 }),
      p([run("— Does your grandmother use the internet?  — No, she doesn’t. She listens to the radio!", { italic: true })], { after: 30 }),
    ]),
  ];
}

// ---------- S70 — WH-questions ----------
function ficheS70() {
  const meta = META("When? With who? — the WH-questions",
    "By the end of the lesson, learners will be able to ask and answer WH-questions about means of communication.",
    "5 / 16", "blackboard, question cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Make the question: They watch TV."),
       fp("2. Answer short: Does she send emails? (yes)")],
      [fp("Answer."),
       fp("E.A.: Do they watch TV?; Yes, she does.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Yes/No questions give small answers… I want MORE! “Do you watch TV?” — “Yes.” — But WHEN? WITH WHO? Today, the open questions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The WH-questions ». By the end of this lesson, your questions will open the conversation!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: WHEN do you watch TV? — In the evening. WITH WHO do you chat? — With my cousin."),
       fp("The recipe: WH-word + do/does + subject + verb?")],
      [fp("Observe the recipe.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Compare: Do you watch TV? (closed: yes/no) / When do you watch TV? (open: a real answer!)"),
       fp("Build: when + she / listen to the radio? with who + you / chat on Messenger?")],
      [fp("Build the questions."),
       fp("E.A.: When does she listen to the radio? With who do you chat on Messenger?")],
      "Transformation drill", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: WHEN (the time), WITH WHO (the person) + do/does + subject + verb? The WH-word always comes FIRST.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pair interview: ask your neighbour one Yes/No question and two WH-questions about the means of communication.")],
      [fp("Interview your neighbour."),
       pAns("E.A.: Do you watch TV? When do you watch TV? With who do you watch TV?",
        ["When do you watch TV?"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me WHEN I listen to the radio."),
       fp("2. Ask your friend WITH WHO she chats on WhatsApp.")],
      [fp("Answer."),
       pAns("E.A.: When do you listen to the radio?; With who do you chat on WhatsApp?",
        ["When do you listen"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70");
}
function lessonS70() {
  return [
    p([run("LESSON OF THE DAY — SESSION 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHEN? WITH WHO?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("CLOSED OR OPEN?", [
      bullet([run("Closed (yes/no): ", { bold: true }), run("Do you watch TV? — Yes, I do.", { bold: true, color: C.BLUE })]),
      bullet([run("Open (real answer): ", { bold: true }), run("When do you watch TV? — In the evening!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE RECIPE: WH-WORD + DO/DOES + SUBJECT + VERB?", [
      bullet([...kw("When do you watch TV?", "ouène dou iou ouatch tivi"), run(" — "), run("In the evening / after dinner / on Sundays.", { italic: true, color: C.GRAY })]),
      bullet([...kw("With who do you chat?", "ouidh hou dou iou tchatt"), run(" — "), run("With my cousin.", { italic: true, color: C.GRAY })]),
      bullet([...kw("When does she listen to the radio?", "ouène deuz chi lisseune"), run(" — "), run("Every morning.", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE TIME WORDS (to answer WHEN)", [
      bullet([run("in the morning / in the evening — at noon / at night", { bold: true, color: C.BLUE })]),
      bullet([run("every day, every morning — on Sundays — before going to bed, after dinner", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S71 — The present progressive ----------
function ficheS71() {
  const meta = META("I am watching TV! — the present progressive",
    "By the end of the lesson, learners will be able to form the present progressive to express an action happening now.",
    "6 / 16", "blackboard, mime cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask me an open question with WHEN."),
       fp("2. Answer: With who do you go to school?")],
      [fp("Answer."),
       fp("E.A.: When do you…?; With my friends.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at me NOW: (T mimes holding a phone) What am I doing? I am making a phone call — right NOW, at this moment!")],
      [fp("Watch. Guess.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The present progressive ». By the end of this lesson, you will say what is happening NOW!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the recipe: BE + verb-ING. I am watching TV. She is sending an email. They are chatting on WhatsApp."),
       fp("Three pieces: am/is/are + verb + -ing.")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Mime game: a pupil picks a card and mimes (reading a newspaper, calling…). The class says: “You are reading a newspaper!”"),
       fp("Careful with BE: I am / he, she is / we, you, they are.")],
      [fp("Mime. Say what is happening."),
       fp("E.A.: He is listening to the radio! They are watching TV!")],
      "Mime game", "Mime cards"),
    stepRow(["5. Synthesis"],
      [fp("So the present progressive = BE (am/is/are) + verb-ING: it photographs the action AT THE MOMENT OF SPEAKING.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Look around the class and say three TRUE sentences about NOW: “Lalaina is writing. The teacher is talking…”")],
      [fp("Make three sentences about now."),
       pAns("E.A.: correct BE + verb-ing sentences.",
        ["is writing"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Put at the progressive: she / send / an email."),
       fp("2. What is your neighbour doing right now?")],
      [fp("Answer."),
       pAns("E.A.: She is sending an email; He/She is listening!",
        ["She is sending"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(71, TOTAL, meta, rows, "s71");
}
function lessonS71() {
  return [
    p([run("LESSON OF THE DAY — SESSION 71", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I AM WATCHING TV — RIGHT NOW!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RECIPE: BE + VERB-ING", [
      bullet([run("I "), run("am watching", { bold: true, color: C.BLUE }), run(" TV.  [aï amm ouatchinng tivi]", { italic: true, color: C.GRAY })]),
      bullet([run("She "), run("is sending", { bold: true, color: C.BLUE }), run(" an email.")]),
      bullet([run("They "), run("are chatting", { bold: true, color: C.BLUE }), run(" on WhatsApp.")]),
      bullet([run("Three pieces: "), run("am / is / are", { bold: true, color: C.RED }), run(" + verb + "), run("-ING", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("WHEN DO WE USE IT?", [
      bullet([run("For an action happening "), run("NOW", { bold: true, color: C.RED }), run(", at the moment of speaking!")]),
      bullet([run("The signal words: "), run("now, right now, at the moment, look!, listen!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SPELLING CORNER", [
      bullet([run("watch → watching, read → reading, listen → listening", { bold: true, color: C.BLUE }), run(" (just add -ing)")]),
      bullet([run("make → making, write → writing", { bold: true, color: C.BLUE }), run(" (the -e goes away!)")]),
      bullet([run("chat → chatting", { bold: true, color: C.BLUE }), run(" (double the t!)")], { after: 20 }),
    ]),
  ];
}

// ---------- S72 — Habit vs now ----------
function ficheS72() {
  const meta = META("Habit or happening now? — simple vs progressive",
    "By the end of the lesson, learners will be able to tell a habit (present simple) from an action happening now (present progressive).",
    "7 / 16", "blackboard, sentences for dictation");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the progressive recipe."),
       fp("2. Put at the progressive: they / watch / TV.")],
      [fp("Answer."),
       fp("E.A.: BE + verb-ing; They are watching TV.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Compare: “I watch TV every evening.” / “Shh! I am watching TV!” Same verb… different meaning. Can you feel it?")],
      [fp("Listen. Compare.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Habit or now? ». By the end of this lesson, the two presents will have no secret for you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pair: HABIT (always, every day): present simple — I watch TV every evening. NOW (at the moment): progressive — I am watching TV right now.")],
      [fp("Observe the signal words.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Dictation! Write down the sentences I read:"),
       fp("1. My father reads the newspaper every morning. 2. Look! He is reading your letter! 3. She chats on WhatsApp every evening. 4. She is chatting with her aunt now."),
       fp("Then CIRCLE the habits and UNDERLINE the actions happening now.")],
      [fp("Write. Circle the habits. Underline the now-actions."),
       fp("E.A.: circles: 1 and 3; underlines: 2 and 4.")],
      "Dictation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: every day/always/usually → present simple (habit); now/right now/look! → BE + -ing (action at the moment of speaking).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Make one pair of sentences about YOU with the same verb: habit + now. “I listen to the radio every day. / I am listening to the teacher now!”")],
      [fp("Make your pair of sentences."),
       pAns("E.A.: correct simple + progressive pair.",
        ["every day"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Choose: She … (watch/is watching) TV right now."),
       fp("2. Choose: They … (chat/are chatting) on Messenger every evening.")],
      [fp("Answer."),
       pAns("E.A.: is watching; chat.",
        ["is watching"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(72, TOTAL, meta, rows, "s72");
}
function lessonS72() {
  return [
    p([run("LESSON OF THE DAY — SESSION 72", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HABIT OR HAPPENING NOW?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_family.png", 400, 768 / 1408),
    box("THE TWO PRESENTS, SIDE BY SIDE", [
      bullet([run("HABIT → present simple: ", { bold: true }), run("I watch TV every evening.", { bold: true, color: C.BLUE })]),
      bullet([run("NOW → progressive: ", { bold: true }), run("Shh! I am watching TV!", { bold: true, color: C.BLUE })]),
      bullet([run("My sister chats on WhatsApp every day. / She is chatting with her aunt right now.", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SIGNAL WORDS", [
      bullet([run("Habit: ", { bold: true }), run("every day, every morning, always, usually, often, on Sundays", { bold: true, color: C.GREEN })]),
      bullet([run("Now: ", { bold: true }), run("now, right now, at the moment, Look!, Listen!, Shh!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE DICTATION OF THE DAY (check your notebook!)", [
      bullet([run("Habit ○ : "), run("My father reads the newspaper every morning. She chats on WhatsApp every evening.", { italic: true })]),
      bullet([run("Now __ : "), run("Look! He is reading your letter! She is chatting with her aunt now.", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S73 — Coordinators ----------
function ficheS73() {
  const meta = META("And, but, or, so — the coordinators",
    "By the end of the lesson, learners will be able to link two ideas with the coordinators and, but, or, so.",
    "8 / 16", "blackboard, sentence halves");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Choose: He … (listens/is listening) to the radio every morning."),
       fp("2. Give two signal words of the progressive.")],
      [fp("Answer."),
       fp("E.A.: listens; now, right now, look!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Two small sentences: “I like the radio.” “I love TV.” Can we glue them into ONE? Yes — with a little magic word!")],
      [fp("Listen. Propose.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The coordinators ». By the end of this lesson, your sentences will hold hands!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the four gluers: AND (addition): I read the newspaper AND I listen to the radio. BUT (contrast): I like TV BUT I prefer the radio. OR (choice): Do you call OR do you chat? SO (consequence): The TV is broken, SO we listen to the radio.")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Glue the halves! I give two halves, you choose the coordinator:"),
       fp("1. She has a phone … she never calls. 2. We watch the news … we read the newspaper. 3. My radio is old, … it works! 4. Email … WhatsApp: choose!")],
      [fp("Choose and glue."),
       fp("E.A.: 1. but 2. and 3. but/so 4. or.")],
      "Matching game", "Sentence halves"),
    stepRow(["5. Synthesis"],
      [fp("So the coordinators: AND adds, BUT opposes, OR offers a choice, SO gives the consequence. One little word, one big job!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Make two compound sentences about your family and the means of communication, with two different coordinators.")],
      [fp("Make your sentences."),
       pAns("E.A.: My father watches TV but my mother reads. The phone rings, so I answer!",
        ["but my mother"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I want to call you, … I don’t have your number."),
       fp("2. Complete: It’s late, … I send a message instead of calling.")],
      [fp("Answer."),
       pAns("E.A.: but; so.",
        ["but; so"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(73, TOTAL, meta, rows, "s73");
}
function lessonS73() {
  return [
    p([run("LESSON OF THE DAY — SESSION 73", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("AND, BUT, OR, SO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The four gluers of English:", { bold: true })], { after: 50 }),
    box("AND — addition (+)", [
      bullet([run("I read the newspaper "), run("and", { bold: true, color: C.RED }), run(" I listen to the radio.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("BUT — contrast (≠)", [
      bullet([run("I like TV, "), run("but", { bold: true, color: C.RED }), run(" I prefer the radio.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("OR — choice (?)", [
      bullet([run("Do you call, "), run("or", { bold: true, color: C.RED }), run(" do you chat?")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SO — consequence (→)", [
      bullet([run("The TV is broken, "), run("so", { bold: true, color: C.RED }), run(" we listen to the radio.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("REMEMBER", [
      bullet([run("A simple sentence has ONE idea. A "), run("compound sentence", { bold: true, color: C.BLUE }), run(" has TWO ideas glued by a coordinator.")]),
      bullet([run("and", { bold: true, color: C.RED }), run(" adds — "), run("but", { bold: true, color: C.RED }), run(" opposes — "), run("or", { bold: true, color: C.RED }), run(" chooses — "), run("so", { bold: true, color: C.RED }), run(" concludes.")], { after: 20 }),
    ]),
  ];
}

// ---------- S74 — The interview ----------
function ficheS74() {
  const meta = META("The interview — asking about habits",
    "By the end of the lesson, learners will be able to interview a classmate about their use of the means of communication.",
    "9 / 16", "notebooks (interview grid)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the four coordinators and their jobs."),
       fp("2. Glue: I have a phone. I never call.")],
      [fp("Answer."),
       fp("E.A.: and/but/or/so; I have a phone but I never call.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today you become a radio reporter! A good reporter prepares the questions BEFORE the interview. What tools do we have? Yes/No questions and WH-questions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to PREPARE and DO an interview about the means of communication. By the end of this lesson, you will have real answers in your notebook!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the reporter’s grid: 1. Do you watch TV? 2. When do you watch TV? 3. Do you use WhatsApp? 4. With who do you chat? 5. Does your family listen to the radio? 6. When?")],
      [fp("Read the model grid.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Write YOUR 6 questions (3 Yes/No + 3 WH). Then exchange with your neighbour: peer correct! Check: DO/DOES first or WH-word first, verb in base form.")],
      [fp("Write your questions. Correct your friend’s questions."),
       fp("E.A.: 6 correct questions.")],
      "Peer correction", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("So a good interview = polite start (Can I ask you some questions?), 6 clear questions, and notes of the answers!")],
      [fp("Listen. Repeat the plan.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview your classmate! Ask your 6 questions and NOTE the answers (short notes: “TV: yes, evening”).")],
      [fp("Interview. Note the answers."),
       pAns("E.A.: completed interview grid with notes.",
        ["completed interview grid"], { size: SZ.FICHE })],
      "Pair work (interview)", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say one Yes/No question and one WH-question of your grid."),
       fp("2. Read one answer you noted.")],
      [fp("Answer."),
       pAns("E.A.: correct questions; a clear note.",
        ["correct questions"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(74, TOTAL, meta, rows, "s74");
}
function lessonS74() {
  return [
    p([run("LESSON OF THE DAY — SESSION 74", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I AM A REPORTER: THE INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE REPORTER’S GRID (6 questions)", [
      bullet([run("1. "), run("Do you watch TV?", { bold: true, color: C.BLUE }), run("  (Yes/No)")]),
      bullet([run("2. "), run("When do you watch TV?", { bold: true, color: C.BLUE }), run("  (WH)")]),
      bullet([run("3. "), run("Do you use WhatsApp or Messenger?", { bold: true, color: C.BLUE }), run("  (Yes/No + or!)")]),
      bullet([run("4. "), run("With who do you chat?", { bold: true, color: C.BLUE }), run("  (WH)")]),
      bullet([run("5. "), run("Does your family listen to the radio?", { bold: true, color: C.BLUE }), run("  (Yes/No)")]),
      bullet([run("6. "), run("When does your family listen to the radio?", { bold: true, color: C.BLUE }), run("  (WH)")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REPORTER’S MANNERS", [
      bullet([run("Start politely: "), ...kw("Can I ask you some questions?", "kann aï ask iou seume kouèstcheunnz")]),
      bullet([run("Note the answers in short: "), run("“TV: yes, in the evening — WhatsApp: no”", { italic: true, color: C.GRAY })]),
      bullet([run("Finish politely: "), run("Thank you for your answers!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S75 — Reporting ----------
function ficheS75() {
  const meta = META("Reporting — what my classmate said",
    "By the end of the lesson, learners will be able to report a classmate’s habits to the class (he/she + verb-s).",
    "10 / 16", "interview notes from session 74");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say two questions of your interview grid."),
       fp("2. Read your notes about your classmate.")],
      [fp("Answer."),
       fp("E.A.: correct questions; clear notes.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Your notebook is full of answers… Now the radio wants your REPORT! “Tell us about your classmate!”")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to REPORT the interview. By the end of this lesson, you will present your classmate’s habits to the class!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the change: Interview: “Do you watch TV?” — “Yes, in the evening.” Report: “Andry watches TV in the evening.” YOU becomes HE/SHE — and the verb takes -S!")],
      [fp("Observe the transformation.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Transform your notes into report sentences. Use coordinators to glue: “Andry watches TV in the evening, but he doesn’t use WhatsApp.”")],
      [fp("Transform your notes."),
       fp("E.A.: correct he/she + verb-s sentences with coordinators.")],
      "Transformation drill", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("So the report: he/she + verb-S (habits!), with and/but/so to link, and doesn’t for the negative.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Report to the class what your classmate said (3-4 sentences). The class asks one extra question!")],
      [fp("Report to the class."),
       pAns("E.A.: Lova listens to the radio every morning, and she chats with her cousin on Messenger.",
        ["listens to the radio"], { size: SZ.FICHE })],
      "Oral report", "Notes"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Transform: “Do you read the newspaper?” — “No.” (report it!)"),
       fp("2. Why does the verb take -S in the report?")],
      [fp("Answer."),
       pAns("E.A.: He doesn’t read the newspaper; because the subject is he/she.",
        ["doesn’t read"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(75, TOTAL, meta, rows, "s75");
}
function lessonS75() {
  return [
    p([run("LESSON OF THE DAY — SESSION 75", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE REPORT: ANDRY WATCHES TV…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("FROM INTERVIEW TO REPORT", [
      bullet([run("Interview: ", { bold: true }), run("“Do you watch TV?” — “Yes, in the evening.”", { italic: true, color: C.GRAY })]),
      bullet([run("Report: ", { bold: true }), run("Andry watches TV in the evening.", { bold: true, color: C.BLUE })]),
      bullet([run("YOU → HE/SHE", { bold: true, color: C.RED }), run("  and the verb takes "), run("-S", { bold: true, color: C.RED }), run("!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REPORT TOOLBOX", [
      bullet([run("Positive: "), run("She listens to the radio every morning.", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: "), run("He doesn’t use Facebook.", { bold: true, color: C.BLUE }), run("  (doesn’t + base verb)")]),
      bullet([run("Glue the ideas: "), run("Lova watches TV, but she doesn’t chat on WhatsApp, so she calls her cousin.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL REPORT (4 sentences)", [
      p([run("Andry watches TV before going to bed. He uses Messenger with his cousins, but he doesn’t send emails. His family listens to the radio every morning, so Andry knows all the news!", { italic: true })], { after: 40 }),
    ]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS66(), pageBreak(), ...lessonS66(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...ficheS68(), pageBreak(), ...lessonS68(), pageBreak(),
    ...ficheS69(), pageBreak(), ...lessonS69(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...ficheS71(), pageBreak(), ...lessonS71(), pageBreak(),
    ...ficheS72(), pageBreak(), ...lessonS72(), pageBreak(),
    ...ficheS73(), pageBreak(), ...lessonS73(), pageBreak(),
    ...ficheS74(), pageBreak(), ...lessonS74(), pageBreak(),
    ...ficheS75(), pageBreak(), ...lessonS75(),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.bullet = bullet;
module.exports.vocab = vocab;
module.exports.box = box;
module.exports.nowadaysTextBox = nowadaysTextBox;
module.exports.META = META;
module.exports.SHADE = SHADE;
