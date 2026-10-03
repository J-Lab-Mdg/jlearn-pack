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
  interview: "https://drive.google.com/uc?export=download&id=19pvcjmsFA9Cmk1b2E71xf76lT0Nw2t43",
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

function interviewTextBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("A RADIO INTERVIEW (reading text)", [
    L("Host: Good morning, dear listeners! Today our guest is Mr. Rakoto, a journalist. Welcome!"),
    L("Mr. Rakoto: Thank you! I am happy to be here."),
    L("Host: Mr. Rakoto, how do you get the news every day?"),
    L("Mr. Rakoto: I read the newspaper every morning, and I listen to the radio in my car."),
    L("Host: Do you watch TV?"),
    L("Mr. Rakoto: Yes, I do, but I only watch the news in the evening."),
    L("Host: And the internet?"),
    L("Mr. Rakoto: I use it a lot! I send emails for my work, and I chat with my readers on Facebook."),
    L("Host: Do young people read newspapers?"),
    L("Mr. Rakoto: Not many, so we put our articles on the internet too."),
    L("Host: One last question: a phone call or a message?"),
    L("Mr. Rakoto: A message is fast, but a phone call is warm. So I call my family, and I text my colleagues!"),
    L("Host: Thank you, Mr. Rakoto! Dear listeners, see you tomorrow!"),
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

// ---------- S76 — Reading (1): the radio interview ----------
function ficheS76() {
  const meta = META("Reading (1) — a radio interview: the gist",
    "By the end of the lesson, learners will be able to guess the content of a radio interview from its title and picture, read it accurately and find its gist.",
    "11 / 16", "reading text (in the book), picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “Do you use Facebook?” — “Yes, every evening.” (about Hery)"),
       fp("2. Give two coordinators.")],
      [fp("Answer."),
       fp("E.A.: Hery uses Facebook every evening; and, but, or, so.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: look at the picture (a radio studio!) and the title: “A radio interview”. Guess: who speaks? About what?")],
      [fp("Guess."),
       fp("E.A.: a host and a guest; about the news / communication.")],
      "Prediction", "Picture, title"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a radio interview. By the end of this lesson, you will read it accurately and find its gist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the interview once. Who is the guest? What is his job?")],
      [fp("Read. Answer."),
       fp("E.A.: Mr. Rakoto; a journalist.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Check your prediction: were you right? Share to the class."),
       fp("Then the gist: what is the interview about, in one sentence?")],
      [fp("Check. Say the gist."),
       fp("E.A.: a journalist explains how he uses the means of communication every day.")],
      "Whole-class work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So: before reading, the title and the picture help us GUESS; after reading, we CHECK. The gist: Mr. Rakoto uses all the means — paper, waves and internet!")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the interview aloud accurately, one line per pupil. Careful with the question intonation: Do you watch TV? ↗")],
      [fp("Read aloud."),
       pAns("E.A.: accurate reading, rising intonation on questions.",
        ["accurate reading"], { size: SZ.FICHE })],
      "Individual work (reading)", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In one sentence: what is the interview about?"),
       fp("2. What is Mr. Rakoto’s job?")],
      [fp("Answer."),
       pAns("E.A.: how a journalist communicates every day; journalist.",
        ["journalist"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(76, TOTAL, meta, rows, "s76");
}
function lessonS76() {
  return [
    p([run("LESSON OF THE DAY — SESSION 76", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: A RADIO INTERVIEW (1)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_radio.png", 380, 768 / 1408),
    interviewTextBox(),
    p("", { after: 60 }),
    box("THE GIST", [
      bullet([run("Mr. Rakoto, a journalist, explains how he uses the means of communication every day", { italic: true }), run(" — paper, waves and internet!")]),
      bullet([run("Before reading: the "), run("title", { bold: true, color: C.BLUE }), run(" and the "), run("picture", { bold: true, color: C.BLUE }), run(" help us guess. After reading: we check!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u5_interview.png", label: "The radio interview — listen and follow in your book", url: AUDIO.interview }], COLOR),
  ];
}

// ---------- S77 — Reading (2): details + coordinators ----------
function ficheS77() {
  const meta = META("Reading (2) — details and coordinators",
    "By the end of the lesson, learners will be able to answer detailed questions on the interview and circle its coordinators.",
    "12 / 16", "reading text (in the book)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of the radio interview?"),
       fp("2. Who is the guest?")],
      [fp("Answer."),
       fp("E.A.: a journalist explains how he communicates; Mr. Rakoto.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick quiz, books closed: does Mr. Rakoto watch TV? When?")],
      [fp("Answer from memory."),
       fp("E.A.: yes — only the news, in the evening.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the interview AGAIN, with detective eyes. By the end of this lesson, you will find the details — and circle all the coordinators!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: detailed questions: 1. When does he read the newspaper? 2. Where does he listen to the radio? 3. What does he use for his work? 4. Why do they put articles on the internet?")],
      [fp("Read. Answer."),
       fp("E.A.: every morning; in his car; emails; because not many young people read newspapers.")],
      "Question-answer", "Text"),
    stepRow(["4. Analysis"],
      [fp("Now CIRCLE the coordinators in the interview: and, but, or, so. How many do you find? What job does each one do?")],
      [fp("Circle. Count. Explain."),
       fp("E.A.: and (addition), but (contrast), or (choice), so (consequence) — several of each!")],
      "Individual work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So the coordinators glue Mr. Rakoto’s ideas: “A message is fast, BUT a phone call is warm. SO I call my family, AND I text my colleagues!” — three gluers in one answer!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Answer like Mr. Rakoto, with a coordinator: “A phone call or a message?” — YOUR answer with but/so/and!")],
      [fp("Answer with a coordinator."),
       pAns("E.A.: A message is cheap, so I text my friends, but I call my grandmother!",
        ["so I text"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two details of the interview."),
       fp("2. Quote one sentence of the text with a coordinator.")],
      [fp("Answer."),
       pAns("E.A.: newspaper every morning, radio in the car…; “I read the newspaper every morning, and I listen to the radio in my car.”",
        ["every morning"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(77, TOTAL, meta, rows, "s77");
}
function lessonS77() {
  return [
    p([run("LESSON OF THE DAY — SESSION 77", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: A RADIO INTERVIEW (2)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DETAILS OF THE INTERVIEW", [
      bullet([run("Newspaper: "), run("every morning", { bold: true, color: C.BLUE }), run(" — Radio: "), run("in his car", { bold: true, color: C.BLUE }), run(" — TV: "), run("only the news, in the evening", { bold: true, color: C.BLUE })]),
      bullet([run("Internet: "), run("emails for work, Facebook with his readers", { bold: true, color: C.BLUE })]),
      bullet([run("Young people? Not many read newspapers, "), run("so", { bold: true, color: C.RED }), run(" the articles go on the internet too!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE COORDINATORS WE CIRCLED", [
      bullet([run("“I read the newspaper every morning, "), run("and", { bold: true, color: C.RED }), run(" I listen to the radio in my car.”")]),
      bullet([run("“Yes, I do, "), run("but", { bold: true, color: C.RED }), run(" I only watch the news in the evening.”")]),
      bullet([run("“A phone call "), run("or", { bold: true, color: C.RED }), run(" a message?” — “A message is fast, "), run("but", { bold: true, color: C.RED }), run(" a phone call is warm. "), run("So", { bold: true, color: C.RED }), run(" I call my family…”")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("NEW WORDS FROM THE TEXT", [
      bullet([...kw("a guest", "e guèst"), run("  —  the invited person")]),
      bullet([...kw("a journalist", "e djeurnelist"), run("  —  he writes the news")]),
      bullet([...kw("to text", "tou tèkst"), run("  —  to send a message by phone")]),
      bullet([...kw("dear listeners", "dir lisseneurz"), run("  —  the radio public")], { after: 20 }),
    ]),
  ];
}

// ---------- S78 — Reading (3): act out the interview ----------
function ficheS78() {
  const meta = META("Reading (3) — acting out the interview",
    "By the end of the lesson, learners will be able to read the interview fluently and act it out like real radio speakers.",
    "13 / 16", "reading text (in the book), a “microphone” (pen!)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Quote a text sentence with BUT."),
       fp("2. What does “to text” mean?")],
      [fp("Answer."),
       fp("E.A.: “A message is fast, but a phone call is warm.”; send a message by phone.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Welcome to the studio! Today YOU are on the radio. A real host speaks clearly, smiles, and never reads like a robot!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to ACT OUT the interview. By the end of this lesson, you will speak like a radio host — microphone in hand!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model: the host’s voice goes UP on questions (Do you watch TV? ↗), the guest’s voice is calm. The little pauses after the commas help!")],
      [fp("Listen. Observe the voices.")],
      "Model reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Prepare in pairs: one is the Host, one is Mr. Rakoto. Underline YOUR lines. Practise twice, then change roles.")],
      [fp("Practise in pairs.")],
      "Pair work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So a good radio voice: clear and loud, questions up ↗, small pauses, and a smile — we can HEAR a smile!")],
      [fp("Listen. Repeat the golden rules.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("On stage! Pairs act out the interview in front of the class, “microphone” in hand. The class votes for the best radio pair!")],
      [fp("Act out. Vote."),
       pAns("E.A.: fluent, lively acting with good intonation.",
        ["fluent"], { size: SZ.FICHE })],
      "Acting out", "Text, “microphone”"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read Mr. Rakoto’s last answer fluently."),
       fp("2. Give one golden rule of the radio voice.")],
      [fp("Answer."),
       pAns("E.A.: fluent reading; questions go up / clear voice / small pauses.",
        ["questions go up"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(78, TOTAL, meta, rows, "s78");
}
function lessonS78() {
  return [
    p([run("LESSON OF THE DAY — SESSION 78", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ON AIR! ACTING OUT THE INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE GOLDEN RULES OF THE RADIO VOICE", [
      bullet([run("1. Speak "), run("clearly and loudly", { bold: true, color: C.BLUE }), run(" — the listeners can’t see you!")]),
      bullet([run("2. Questions go "), run("UP ↗", { bold: true, color: C.RED }), run(" : Do you watch TV? ↗")]),
      bullet([run("3. Small "), run("pauses", { bold: true, color: C.BLUE }), run(" after the commas.")]),
      bullet([run("4. "), run("Smile!", { bold: true, color: C.BLUE }), run(" — yes, we can hear a smile on the radio.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("WORDS THAT OPEN AND CLOSE A SHOW", [
      bullet([run("Opening: "), run("Good morning, dear listeners! Today our guest is…", { italic: true, color: C.GRAY })]),
      bullet([run("Welcoming: "), run("Welcome! — Thank you! I am happy to be here.", { italic: true, color: C.GRAY })]),
      bullet([run("Closing: "), run("Thank you, Mr. Rakoto! See you tomorrow!", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u5_interview.png", label: "The radio interview — listen again and imitate!", url: AUDIO.interview }], COLOR),
  ];
}

// ---------- S79 — Writing (1): my six questions ----------
function ficheS79() {
  const meta = META("Writing (1) — my six interview questions",
    "By the end of the lesson, learners will be able to write six correct questions for an interview and peer correct them.",
    "14 / 16", "notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one golden rule of the radio voice."),
       fp("2. Make a Yes/No question and a WH-question with “listen to the radio”.")],
      [fp("Answer."),
       fp("E.A.: questions go up…; Do you listen to the radio? When do you listen to the radio?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: now YOU prepare a written interview, like a real journalist. First tool: the questions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE six interview questions. By the end of this lesson, your question grid will be ready and corrected!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe a good grid: it mixes Yes/No questions (Do you…? Does your family…?) and WH-questions (When…? With who…?), all about the means of communication.")],
      [fp("Observe the model grid.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Write YOUR six questions (3 Yes/No + 3 WH). Checklist: DO/DOES or WH-word first? Verb in base form? Question mark at the end?")],
      [fp("Write your six questions.")],
      "Guided writing", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Peer correction: exchange notebooks. Check your friend’s six questions with the checklist. Correct kindly!")],
      [fp("Correct your friend’s questions."),
       fp("E.A.: “Does you…” → “Do you…”; missing “?” added…")],
      "Peer correction", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Interview your classmate with your corrected grid and NOTE the answers (short notes).")],
      [fp("Interview. Note the answers."),
       pAns("E.A.: completed grid: “radio: yes, morning — TV: no…”",
        ["completed grid"], { size: SZ.FICHE })],
      "Pair work (interview)", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read two of your questions (one Yes/No, one WH)."),
       fp("2. Give one correction you made on your friend’s grid.")],
      [fp("Answer."),
       pAns("E.A.: correct questions; a real correction.",
        ["correct questions"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(79, TOTAL, meta, rows, "s79");
}
function lessonS79() {
  return [
    p([run("LESSON OF THE DAY — SESSION 79", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I WRITE MY SIX QUESTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE QUESTION CHECKLIST", [
      bullet([run("✔ Yes/No question: "), run("DO/DOES", { bold: true, color: C.RED }), run(" first — "), run("Do you watch TV?", { bold: true, color: C.BLUE })]),
      bullet([run("✔ WH-question: "), run("WH-word", { bold: true, color: C.RED }), run(" first — "), run("When do you watch TV?", { bold: true, color: C.BLUE })]),
      bullet([run("✔ the verb stays in "), run("base form", { bold: true, color: C.RED }), run(": Does she watch? (never “Does she watches”)")]),
      bullet([run("✔ the "), run("question mark ?", { bold: true, color: C.RED }), run(" at the end!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY GRID (a model to adapt)", [
      bullet([run("1. Do you watch TV?  2. When do you watch TV?  3. Do you use WhatsApp or Messenger?", { italic: true })]),
      bullet([run("4. With who do you chat?  5. Does your family listen to the radio?  6. When?", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TAKE GOOD NOTES!", [
      p([run("Short notes, not sentences: “TV: yes, evening — WhatsApp: no — radio: every morning, with grandpa”. The sentences come tomorrow!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S80 — Writing (2): the report ----------
function ficheS80() {
  const meta = META("Writing (2) — writing the report",
    "By the end of the lesson, learners will be able to write a report of their interview with simple and compound sentences.",
    "15 / 16", "notebooks (notes from session 79)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read one question of your grid and the note of the answer."),
       fp("2. Transform the note into a sentence: “radio: yes, morning”. (about Tiana)")],
      [fp("Answer."),
       fp("E.A.: correct question + note; Tiana listens to the radio in the morning.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Your notes are gold! Today we transform them into a beautiful report: notes → sentences → paragraph.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE the report of the interview. By the end of this lesson, your classmate’s habits will be on paper — in good English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model: “Andry watches TV before going to bed. He uses Messenger with his cousins, but he doesn’t send emails.” — he/she + verb-S, doesn’t for the negative, coordinators to glue!")],
      [fp("Observe the model report.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write your report (4-6 sentences): simple sentences AND compound sentences (with and/but/so). Use your notes!")],
      [fp("Write your report.")],
      "Guided writing", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Peer correction: exchange and check: verb-S for he/she? doesn’t + base verb? coordinators well used? Two stars and one wish!")],
      [fp("Correct your friend’s report."),
       fp("E.A.: “he use” → “he uses”; a “but” added…")],
      "Peer correction", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Polish your report with the corrections. Add a title: “My interview with [name]”.")],
      [fp("Write the final version."),
       pAns("E.A.: clean 4-6 sentence report with a title.",
        ["final version"], { size: SZ.FICHE })],
      "Individual work", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read two sentences of your report (one simple, one compound)."),
       fp("2. Why “Andry watchES”?")],
      [fp("Answer."),
       pAns("E.A.: correct sentences; because the subject is he (third person).",
        ["third person"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(80, TOTAL, meta, rows, "s80");
}
function lessonS80() {
  return [
    p([run("LESSON OF THE DAY — SESSION 80", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I WRITE THE REPORT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("FROM NOTES TO REPORT — THE THREE STEPS", [
      bullet([run("1. The note: ", { bold: true }), run("“TV: yes, before bed”", { italic: true, color: C.GRAY })]),
      bullet([run("2. The sentence: ", { bold: true }), run("Andry watches TV before going to bed.", { bold: true, color: C.BLUE })]),
      bullet([run("3. The paragraph: ", { bold: true }), run("glue the sentences with "), run("and, but, so", { bold: true, color: C.RED }), run("!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REPORT CHECKLIST", [
      bullet([run("✔ he/she + verb-"), run("S", { bold: true, color: C.RED }), run(" : she listenS, he watchES")]),
      bullet([run("✔ negative: "), run("doesn’t + base verb", { bold: true, color: C.RED }), run(" : he doesn’t send emails")]),
      bullet([run("✔ simple sentences AND compound sentences (coordinators)")]),
      bullet([run("✔ a title: "), run("My interview with Andry", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL REPORT", [
      p([run("My interview with Andry. ", { bold: true }), run("Andry watches TV before going to bed, and he uses Messenger with his cousins. He doesn’t send emails, but his big sister does. His family listens to the radio every morning, so Andry always knows the news!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S81 — Writing (3): reading the report aloud ----------
function ficheS81() {
  const meta = META("Writing (3) — presenting the report to the class",
    "By the end of the lesson, learners will be able to read their report aloud to the class and answer questions on it.",
    "16 / 16", "final reports (notebooks)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two checkpoints of the report."),
       fp("2. Correct: “He don’t use Facebook.”")],
      [fp("Answer."),
       fp("E.A.: verb-S, doesn’t + base verb…; He doesn’t use Facebook.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Post-writing: today is the radio day of our class! Everyone presents the report — like real journalists.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ our reports aloud. By the end of this lesson, the class will know everybody’s habits — and you will answer questions like a pro!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Remember the radio voice: clear, not too fast, small pauses. And look at the class, not only at the paper!")],
      [fp("Listen. Repeat the golden rules.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Reading round 1 (in groups of four): read your report to your group. The group checks: did we understand everything?")],
      [fp("Read to your group.")],
      "Group work", "Reports"),
    stepRow(["5. Synthesis"],
      [fp("So a good presentation = good writing + good voice. The habits appear with the verb-S, the coordinators make it flow!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Reading round 2 (to the class): volunteers read aloud. The class asks ONE question about the report: “Does he watch TV on Sundays?”")],
      [fp("Read to the class. Answer one question."),
       pAns("E.A.: clear reading; correct short answer: Yes, he does!",
        ["Yes, he does!"], { size: SZ.FICHE })],
      "Oral presentation", "Reports"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your report aloud."),
       fp("2. Answer the class question with a short answer.")],
      [fp("Answer."),
       pAns("E.A.: fluent reading; correct short answer.",
        ["fluent reading"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(81, TOTAL, meta, rows, "s81");
}
function lessonS81() {
  return [
    p([run("LESSON OF THE DAY — SESSION 81", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I PRESENT MY REPORT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PRESENTER’S THREE SECRETS", [
      bullet([run("1. "), run("Eyes up!", { bold: true, color: C.BLUE }), run(" Look at the class, not only at the paper.")]),
      bullet([run("2. "), run("Slow and clear", { bold: true, color: C.BLUE }), run(" — the class takes notes with the ears!")]),
      bullet([run("3. "), run("Ready for questions", { bold: true, color: C.BLUE }), run(": short answers! — Does he…? Yes, he does / No, he doesn’t.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE WHOLE JOURNEY OF UNIT 5 (look how far you came!)", [
      bullet([run("1. I named the "), run("means of communication", { bold: true, color: C.BLUE }), run(" and their "), run("verbs", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("2. I asked "), run("Yes/No and WH-questions", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("3. I interviewed a classmate and took "), run("notes", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("4. I wrote and presented a real "), run("report", { bold: true, color: C.BLUE }), run(" — like a journalist!")], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MEANS OF COMMUNICATION"),
    sub("1. The means of communication"),
    bullet([run("on paper: newspaper, notice board — on the waves: radio, TV, phone — on the internet: email, Facebook, Messenger, WhatsApp", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The verbs"),
    bullet([run("watch TV — listen TO the radio — read the newspaper — make a phone call — send an email — chat ON WhatsApp — surf ON the internet", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Yes/No questions and short answers"),
    bullet([run("DO/DOES + subject + base verb? ", { bold: true }), run("Do you watch TV? — Yes, I do. / Does she…? — No, she doesn’t.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. WH-questions"),
    bullet([run("WHEN (the time), WITH WHO (the person) + do/does…? ", { bold: true }), run("When do you watch TV? — In the evening.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Habit vs happening now"),
    bullet([run("Habit → present simple: "), run("I watch TV every evening.", { bold: true, color: C.BLUE })]),
    bullet([run("Now → BE + verb-ING: "), run("Shh! I am watching TV right now!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The coordinators"),
    bullet([run("AND adds — BUT opposes — OR chooses — SO concludes", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. The interview and the report"),
    bullet([run("6 questions → notes → report: "), run("Andry watches TV before going to bed. (he/she + verb-S!)", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t7_u5_means.png", label: "The means of communication", url: AUDIO.means },
      { qr: "qr_t7_u5_nowadays.png", label: "“How people communicate nowadays”", url: AUDIO.nowadays },
      { qr: "qr_t7_u5_interview.png", label: "The radio interview", url: AUDIO.interview },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the verb: 1. … TV 2. … to the radio 3. … an email 4. … on WhatsApp.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Make the questions: 1. She reads the newspaper. (Yes/No) 2. They chat on Messenger. (Yes/No) 3. You watch TV. (when?) 4. He goes to school. (with who?)")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Simple or progressive? 1. Look! He … (read) your message! 2. She … (listen) to the radio every morning. 3. We … (chat) on WhatsApp right now. 4. They … (watch) TV every evening.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete with and, but, or, so: 1. I like TV, … I prefer the radio. 2. The phone rings, … I answer. 3. An email … a letter? 4. I read the news … I listen to music.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Report these answers about Niry: “TV: yes, in the evening — emails: no — radio: every morning — Messenger: with her cousin”. (4 sentences)")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: watch — listen — send — chat (1 point each).", ["watch"]),
    pAns("Exercise 2: 1. Does she read the newspaper? 2. Do they chat on Messenger? 3. When do you watch TV? 4. With who does he go to school? (1 point each).", ["Does she read"]),
    pAns("Exercise 3: 1. is reading  2. listens  3. are chatting  4. watch (1 point each).", ["is reading"]),
    pAns("Exercise 4: 1. but  2. so  3. or  4. and (1 point each).", ["but"]),
    pAns("Exercise 5: Niry watches TV in the evening. She doesn’t send emails. She listens to the radio every morning. She chats with her cousin on Messenger. (1 point each).", ["Niry watches TV"]),
  ];
}

// ---------- S82 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s82", "SESSION 82 / 99", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: MEANS OF COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the three families of means of communication with one example each."),
    pAns("E.A.: paper (newspaper), waves (radio), internet (WhatsApp).", ["paper (newspaper)"]),
    p("2. Give the verb: TV, radio, newspaper, email."),
    pAns("E.A.: watch, listen to, read, send.", ["listen to"]),
    p("3. Make the Yes/No question and answer short: your mother / use WhatsApp (yes)."),
    pAns("E.A.: Does your mother use WhatsApp? — Yes, she does.", ["Yes, she does."]),
    p("4. Ask two open questions about the radio (when / with who)."),
    pAns("E.A.: When do you listen to the radio? With who do you listen?", ["When do you listen"]),
    p("5. Give the progressive recipe and one example about NOW."),
    pAns("E.A.: BE + verb-ING; I am listening to the teacher right now!", ["BE + verb-ING"]),
    p("6. Habit or now? “She is sending an email.” / “She sends emails every day.”"),
    pAns("E.A.: now (progressive); habit (simple).", ["now (progressive)"]),
    p("7. Give the four coordinators with their jobs."),
    pAns("E.A.: and adds, but opposes, or chooses, so concludes.", ["and adds"]),
    p("8. In the interview: how does Mr. Rakoto get the news in his car?"),
    pAns("E.A.: he listens to the radio.", ["he listens to the radio"]),
    p("9. Why do the journalists put articles on the internet too?"),
    pAns("E.A.: because not many young people read newspapers.", ["not many young people"]),
    p("10. Report: “Do you watch TV?” — “Yes, before going to bed.” (about Andry)"),
    pAns("E.A.: Andry watches TV before going to bed.", ["Andry watches TV"]),
  ];
}

// ---------- S83 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s83", "SESSION 83 / 99", { bold: true, size: 28, after: 60 }),
    p([run("T7 TEST PAPER — UNIT 5: MEANS OF COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: interview me with four questions (two Yes/No, two WH) about the means of communication.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. My father … (read) the newspaper every morning. 2. Listen! Somebody … (make) a phone call! 3. We … (chat) on Messenger right now. 4. She … (not/send) emails.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete with and, but, or, so: 1. I have a phone, … I don’t have the internet. 2. TV … radio: choose! 3. It’s late, … I send a message. 4. I watch the news … I read the newspaper.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Write the questions for these answers: 1. “Yes, I do.” 2. “In the evening.” 3. “With my cousin.” 4. “No, she doesn’t.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a four-sentence report about a classmate’s habits (use the verb-S, one negative, one coordinator).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: four correct questions with do/does or WH-word (1 point each).", ["four correct questions"]),
    pAns("Exercise 2: 1. reads  2. is making  3. are chatting  4. doesn’t send (1 point each).", ["reads"]),
    pAns("Exercise 3: 1. but  2. or  3. so  4. and (1 point each).", ["so"]),
    pAns("Exercise 4: 1. Do you…? 2. When do you…? 3. With who do you…? 4. Does she…? (1 point each).", ["When do you…?"]),
    pAns("Exercise 5: four correct sentences: verb-S + one negative (doesn’t) + one coordinator (1 point each).", ["verb-S"]),
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
    ...ficheS75(), pageBreak(), ...lessonS75(), pageBreak(),
    ...ficheS76(), pageBreak(), ...lessonS76(), pageBreak(),
    ...ficheS77(), pageBreak(), ...lessonS77(), pageBreak(),
    ...ficheS78(), pageBreak(), ...lessonS78(), pageBreak(),
    ...ficheS79(), pageBreak(), ...lessonS79(), pageBreak(),
    ...ficheS80(), pageBreak(), ...lessonS80(), pageBreak(),
    ...ficheS81(), pageBreak(), ...lessonS81(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can name the means of communication: newspaper, radio, TV, internet…",
      "I can use the right verb: watch TV, listen to the radio, send an email.",
      "I can ask Yes/No questions and answer short: Do you…? — Yes, I do!",
      "I can ask open questions: When? With who?",
      "I can tell a habit from an action happening now: I watch TV / I am watching TV.",
      "I can link my ideas with and, but, or, so.",
      "I can read and act out a radio interview.",
      "I can interview a classmate and write the report.",
    ], "Well done! See you in Unit 6: THE ENVIRONMENT!"),
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
