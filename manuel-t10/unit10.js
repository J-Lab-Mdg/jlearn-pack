// T10 — UNIT 10 — TALKING ON THE PHONE (7 séances + révision + test) — Sessions 80 à 88 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "7D6608"; // or téléphone
const SHADE = "F9E79F";
const TOTAL = 88;
const AUDIO = {
  phone: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 10 — TALKING ON THE PHONE", title, slo,
  values: "self-confidence, autonomy", session, materials,
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
function dialogueBox() {
  const line = (who, txt) => pr([run(who + ": ", { bold: true, color: COLOR }), run(txt)], { after: 40 });
  return box("ON THE PHONE (listening passage)", [
    line("Mrs Rasoa", "Hello?"),
    line("Soa", "Hello! This is Soa. May I speak to Koto, please?"),
    line("Mrs Rasoa", "Who is calling, please?"),
    line("Soa", "Soa, his classmate from school."),
    line("Mrs Rasoa", "Ah, Soa! I’m sorry, Koto is not here. He went to the library. You can leave a message if you want."),
    line("Soa", "Yes, please. Can you tell him to bring the English book tomorrow? We have a test on Friday."),
    line("Mrs Rasoa", "I’m sorry? The line is bad. Can you repeat, please?"),
    line("Soa", "Can you tell him to bring the English book tomorrow?"),
    line("Mrs Rasoa", "Of course, I will tell him."),
    line("Soa", "Thank you very much, madam. Goodbye!"),
    line("Mrs Rasoa", "Goodbye, Soa."),
    p("", { after: 40 }),
    pr([run("The voicemail — Beep! ", { bold: true, color: COLOR }),
        run("“Hi! This is Soa. I’m calling to remind you about the English test on Friday. Please call me back at 034 12 345 67. Bye!”")], { after: 40 }),
    pr([run("The relay, in the evening — ", { bold: true, color: COLOR }),
        run("“Koto, Soa called this afternoon. She said that you had a test on Friday. She asked you to bring the English book tomorrow. And she asked whether you could call her back.”")], { after: 20 }),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE TELEPHONE LADY OF AMBOHIMENA", [
    p("In the village of Ambohimena, there is no network on the hill — except in one magic place: the little wooden table of Madame Bakoly, on the market square. Her old yellow phone is the telephone of the whole village.", { after: 40 }),
    p("Every day, people come with coins and stories. “Please, call my son in Tana,” says an old father. “Tell him that the zebu is sold and that the money is ready.” Madame Bakoly picks up the phone, dials the number, and speaks with her clear, slow voice: “Hello! This is Madame Bakoly, from Ambohimena. I’m calling to give you a message from your father…”", { after: 40 }),
    p("When nobody answers, she never gets angry. She waits for the beep and leaves a perfect voicemail: the name, the purpose, the number to call back. Then she writes the message in her big blue notebook, so that no word gets lost.", { after: 40 }),
    p("One rainy Tuesday, a young woman ran to the table, crying. Her baby was sick, the doctor was far away. Madame Bakoly called the health centre of the district with a calm voice. Twenty minutes later, a motorbike arrived with a nurse. Today, that baby is seven years old, and whenever he crosses the square, he salutes the old yellow phone like a general.", { after: 40 }),
    p("Madame Bakoly never went to a communication school. But ask the village: who is the best speaker of the region? Seventy voices will answer together — and the answer is not written here.", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 10 — TALKING ON THE PHONE", COLOR, "unit10"),
    p("", { after: 100 }),
    p([run("Hello! This is Soa. May I speak to Koto, please?", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u10_phone.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• use the phone verbs: pick up, hang up, call back, send a message;"),
    p("• start a call: Hello! This is… / May I speak to…, please?;"),
    p("• ask for information: Who is calling, please?;"),
    p("• maintain the call: I’m sorry? Can you repeat, please?;"),
    p("• end the call politely — with the right register!;"),
    p("• leave a voicemail: I’m calling to…, please call me back at…;"),
    p("• relay a message with the reported speech: she said that…, she asked you to…;"),
    p("• write and act a complete phone dialogue!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, autonomy.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("The phone is the fastest bridge between two voices — for a job interview, a sick baby or a simple hello. The last unit of the year gives you the words, the register and the confidence to cross that bridge in English. Pick up — the world is calling!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u10_phone.png", label: "On the phone — listen and repeat", url: AUDIO.phone },
    ], COLOR),
  ];
}

// ---------- S80 — Phone verbs + register ----------
function ficheS80() {
  const meta = META("The phone verbs — the two registers",
    "By the end of the lesson, learners will be able to use the verbs related to phone calls and distinguish the formal and informal registers.",
    "1 / 7", "picture of phone actions, a real (or paper!) phone");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your dream job with « I’d like to »."),
       fp("2. Good at + …?")],
      [fp("Answer."),
       fp("E.A.: I’d like to be a guide! — verb-ING.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe the picture: who is calling? Where are they? What do you think they are saying? (stick figures on the board if no picture!)")],
      [fp("Describe. Imagine."),
       fp("E.A.: A girl calls; a mother answers and writes a note!")],
      "Using audio-visual aids", "Picture / stick figures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The phone verbs ». By the end of this lesson, your hands will know the phone in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The phone verbs with the mime: to pick up (the phone rings — I take it!), to hang up (I put it down — the call is finished), to call back (I call again later), to send a message, to dial a number, to leave a message. Mime each verb with your paper phone!")],
      [fp("Listen. Mime. Repeat."),
       fp("E.A.: pick up! hang up! call back!")],
      "Repetition drill", "Paper phones"),
    stepRow(["4. Analysis"],
      [fp("The two registers — two clothes for the same call! FORMAL (an office, an adult you respect): Hello, this is Soa Rakoto. May I speak to the director, please? INFORMAL (your friend): Hi Koto! It’s me! The words change with the person — that is the register!")],
      [fp("Observe. Compare."),
       fp("E.A.: May I speak to…? (formal) / Hi, it’s me! (informal).")],
      "Contextualisation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the six phone verbs (pick up, hang up, call back, dial, send, leave a message) and the two registers: formal for the office, informal for the friends!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Verb theatre: I say a situation, you mime and say the verb! The phone rings → ? Wrong number → ? Your friend was absent → ? No answer → ?")],
      [fp("Mime. Say."),
       pAns("E.A.: I pick up! I hang up! I call back! I leave a message!",
        ["I call back!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The contrary of « pick up »?"),
       fp("2. Formal or informal: « Hi, it’s me! » / « May I speak to Mrs Soa, please? »")],
      [fp("Answer."),
       pAns("E.A.: hang up — informal / formal.",
        ["hang up"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(80, TOTAL, meta, rows, "s80");
}
function lessonS80() {
  return [
    p([run("LESSON OF THE DAY — SESSION 80", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PHONE VERBS — THE TWO REGISTERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u10_verbs.png", 420, 768 / 1376),
    p([run("The phone verbs:", { bold: true })], { after: 30 }),
    vocab("to pick up", "tou pike eupe", "décrocher — the phone rings, I pick up!"),
    vocab("to hang up", "tou hangue eupe", "raccrocher"),
    vocab("to call back", "tou kol bake", "rappeler"),
    vocab("to dial a number", "tou daïeul e neumbeur", "composer le numéro"),
    vocab("to send a message", "tou sènnde e mèssidje"),
    vocab("to leave a message", "tou live e mèssidje", "laisser un message"),
    p("", { after: 60 }),
    box("THE TWO REGISTERS — TWO CLOTHES FOR ONE CALL", [
      bullet([run("FORMAL ", { bold: true, color: C.BLUE }), run("(office, adults you respect): "), run("Hello, this is Soa Rakoto. May I speak to the director, please?", { bold: true, color: C.BLUE })]),
      bullet([run("INFORMAL ", { bold: true, color: C.BLUE }), run("(friends, family): "), run("Hi Koto! It’s me! Are you coming or what?", { bold: true, color: C.BLUE })]),
      bullet([run("Choose the clothes BEFORE you dial!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S81 — The phone call script ----------
function ficheS81() {
  const meta = META("The phone call script — from hello to goodbye",
    "By the end of the lesson, learners will be able to start, maintain and end a phone call with appropriate expressions.",
    "2 / 7", "two paper phones");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Three phone verbs."),
       fp("2. Formal or informal with the school director?")],
      [fp("Answer."),
       fp("E.A.: pick up, hang up, call back — formal!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The broken call: I act a TERRIBLE phone call (no hello, no name, I hang up without goodbye!). What was wrong? List my crimes!")],
      [fp("Watch. Criticise!"),
       fp("E.A.: no hello! No name! No goodbye!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The phone call script ». By the end of this lesson, your calls will have a beginning, a middle and an end — like a good story!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The script in four acts! ACT 1 — starting: Hello! This is Soa. May I speak to Koto, please? ACT 2 — asking: Who is calling, please? One moment, please. ACT 3 — maintaining: I’m sorry? Can you repeat, please? The line is bad! ACT 4 — ending: Thank you very much. Goodbye! Attention: on the phone we say THIS IS Soa — never « I am Soa »!")],
      [fp("Listen. Repeat each act."),
       fp("E.A.: This is Soa! Who is calling, please? I’m sorry?")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Transformation drill — change the register! Formal: May I speak to Mrs Soa, please? → Informal: Is Soa there? Formal: Who is calling, please? → Informal: Who’s this? Same act, different clothes!")],
      [fp("Transform."),
       fp("E.A.: May I speak to…? ↔ Is … there?")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the four acts (starting, asking, maintaining, ending), the magic THIS IS on the phone, and the register that dresses each act!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Back-to-back calls (we cannot see the face — like a real phone!): two students, chairs back to back, paper phones. One formal call (to the dentist!), one informal call (to a cousin). The class checks the four acts!")],
      [fp("Role-play back to back."),
       pAns("E.A.: Hello! This is Lova. May I speak to Doctor Rabe, please? — Who is calling, please? — Lova Rakoto, for an appointment…",
        ["for an appointment"], { size: SZ.FICHE })],
      "Role play", "Paper phones"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The four acts of a phone call, with one expression each."),
       fp("2. On the phone, « je suis Soa » = …?")],
      [fp("Answer."),
       pAns("E.A.: starting (This is…), asking (Who is calling?), maintaining (I’m sorry?), ending (Goodbye!) — THIS IS Soa!",
        ["THIS IS Soa!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(81, TOTAL, meta, rows, "s81");
}
function lessonS81() {
  return [
    p([run("LESSON OF THE DAY — SESSION 81", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PHONE CALL SCRIPT — FOUR ACTS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("ACT 1 — STARTING", [
      bullet([run("Hello! This is Soa. ", { bold: true, color: C.BLUE }), run("[dhisse ize]", { italic: true, color: C.GRAY }), run(" — never « I am » on the phone!")]),
      bullet([run("May I speak to Koto, please? ", { bold: true, color: C.BLUE }), run("[méï aï spike tou]", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 40 }),
    box("ACT 2 — ASKING FOR INFORMATION", [
      bullet([run("Who is calling, please? ", { bold: true, color: C.BLUE }), run("[hou ize kolingue]", { italic: true, color: C.GRAY })]),
      bullet([run("One moment, please. Hold on, please.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 40 }),
    box("ACT 3 — MAINTAINING THE CALL", [
      bullet([run("I’m sorry? Can you repeat, please? ", { bold: true, color: C.BLUE }), run("(polite « comment ? »)")]),
      bullet([run("The line is bad. Can you speak louder, please?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 40 }),
    box("ACT 4 — ENDING", [
      bullet([run("Thank you very much. Goodbye! ", { bold: true, color: C.BLUE }), run(" / informal: "), run("Bye! See you!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REGISTER MIRROR", [
      bullet([run("May I speak to Mrs Soa, please? ", { bold: true, color: C.BLUE }), run("↔ informal: "), run("Is Soa there?", { bold: true, color: C.BLUE })]),
      bullet([run("Who is calling, please? ", { bold: true, color: C.BLUE }), run("↔ informal: "), run("Who’s this?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S82 — Listening: the phone conversation ----------
function ficheS82() {
  const meta = META("Listening: Soa calls Koto’s house",
    "By the end of the lesson, learners will be able to complete the missing parts of a phone conversation and role-play it, replacing some expressions.",
    "3 / 7", "audio passage (QR code page 1 of the unit) or teacher reading, gapped transcript on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Act 1 of the script (two expressions)."),
       fp("2. The polite « comment ? » of the phone.")],
      [fp("Answer."),
       fp("E.A.: Hello, this is… / May I speak to…? — I’m sorry?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe the picture of the unit: the girl in the courtyard, the mother in the kitchen with a pencil. What is happening? What will the mother write?")],
      [fp("Describe. Predict."),
       fp("E.A.: a call… the mother takes a message!")],
      "Using audio-visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « On the phone » — Soa calls Koto’s house, but Koto is at the library! By the end of this lesson, no missing word will escape your ears.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (1st listening + gist)"],
      [fp("Books closed! Gist: who picks up? Where is Koto? What must Koto bring tomorrow?")],
      [fp("Listen. Answer."),
       fp("E.A.: Koto’s mother; at the library; the English book!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis (2nd listening: complete the missing parts!)"],
      [fp("The gapped transcript on the board: Hello! …… Soa. May I …… Koto, please? / …… calling, please? / You can …… a message if you want. / ……? The line is bad! Listen again and complete the holes! Then third listening: repeat the conversation line by line — the polite melody!")],
      [fp("Listen. Complete. Repeat."),
       pAns("E.A.: This is — speak to — Who is — leave — I’m sorry.",
        ["This is — speak to"], { size: SZ.FICHE })],
      "Repetition drill", "Gapped transcript"),
    stepRow(["5. Synthesis"],
      [fp("So: the four acts live in a real call! And two treasures from the passage: You can leave a message if you want (the offer) and Can you tell him to… (the message with a command — we will report it in Session 84!).")],
      [fp("Listen. Copy the treasures.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening: role play + replacement!)"],
      [fp("Role-play the conversation in pairs — then REPLACE: another caller, another absent person, another message (bring the maths book? come to the match?). Finally, act out a recent real phone conversation of your own life!")],
      [fp("Role-play. Replace. Personalise."),
       pAns("E.A.: Hello! This is Hery. May I speak to Lova, please? — She went to the market. You can leave a message if you want. — Can you tell her to come to the match on Sunday?",
        ["come to the match"], { size: SZ.FICHE })],
      "Role play", "Paper phones"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write the offer sentence of Mrs Rasoa."),
       fp("2. Why does Mrs Rasoa say « I’m sorry? » in the middle?")],
      [fp("Answer."),
       pAns("E.A.: You can leave a message if you want. — Because the line was bad: she asks to repeat, politely!",
        ["the line was bad"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(82, TOTAL, meta, rows, "s82");
}
function lessonS82() {
  return [
    p([run("LESSON OF THE DAY — SESSION 82", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: SOA CALLS KOTO’S HOUSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    dialogueBox(),
    p("", { after: 60 }),
    box("THE TREASURES OF THE CALL", [
      bullet([run("The offer: ", { bold: true }), run("You can leave a message if you want.", { bold: true, color: C.BLUE })]),
      bullet([run("The request: ", { bold: true }), run("Can you leave a message, please? / Can you tell him to…?", { bold: true, color: C.BLUE })]),
      bullet([run("The repair: ", { bold: true }), run("I’m sorry? The line is bad. Can you repeat, please?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S83 — The voicemail ----------
function ficheS83() {
  const meta = META("The voicemail — name, purpose, number!",
    "By the end of the lesson, learners will be able to leave a clear voicemail message with the purpose of the call and a call-back number.",
    "4 / 7", "paper phones, number cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The offer sentence for a message."),
       fp("2. Act 4 of the script, formal.")],
      [fp("Answer."),
       fp("E.A.: You can leave a message if you want. — Thank you very much, goodbye!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the voicemail picture situation: Soa called, nobody picked up… beep! What happened? What will she say to the machine? Predict the three pieces!")],
      [fp("Predict."),
       fp("E.A.: her name… the reason… her number!")],
      "Using audio-visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The voicemail ». By the end of this lesson, even a machine will understand you perfectly!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to Soa’s voicemail again (the audio of the unit): Hi! This is Soa. I’m calling to remind you about the English test on Friday. Please call me back at 034 12 345 67. Bye! Did our predictions exist in the message? Confirm! The three pieces: NAME → PURPOSE → NUMBER.")],
      [fp("Listen. Confirm the predictions."),
       fp("E.A.: yes — name, purpose, number, all there!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis"],
      [fp("The purpose machine — why do you call? I’m calling TO + verb: I’m calling to remind you about the test; I’m calling to invite you to the match; I’m calling to ask for the homework. The linking words of purpose: to, in order to, so that: She writes the messages SO THAT no word gets lost! And the numbers: say them digit by digit — oh three four, twelve…")],
      [fp("Observe. Build purposes."),
       fp("E.A.: I’m calling to invite you! In order to help; so that you remember!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the voicemail = NAME (Hi! This is…) + PURPOSE (I’m calling to…) + NUMBER (Please call me back at…) + Bye! Short, clear, complete.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Beep time! Each pair: one is the machine (say « Beep! »), the other leaves a voicemail from a card (invite to a birthday? ask for the lesson? warn about the rain?). Numbers digit by digit! Then swap.")],
      [fp("Leave voicemails."),
       pAns("E.A.: Beep! — Hi! This is Naina. I’m calling to invite you to my birthday on Saturday. Please call me back at 032 44 556 78. Bye!",
        ["my birthday on Saturday"], { size: SZ.FICHE })],
      "Role play", "Number cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The three pieces of a good voicemail."),
       fp("2. Write a two-line voicemail to your teacher (formal!) to ask about the test day.")],
      [fp("Answer. Write."),
       pAns("E.A.: name, purpose, number. — Hello, this is Lova Rakoto. I’m calling to ask about the day of the English test. Please call me back at 033 11 222 33. Thank you, goodbye!",
        ["I’m calling to ask"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(83, TOTAL, meta, rows, "s83");
}
function lessonS83() {
  return [
    p([run("LESSON OF THE DAY — SESSION 83", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE VOICEMAIL — NAME, PURPOSE, NUMBER!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PERFECT VOICEMAIL", [
      bullet([run("1. The name: ", { bold: true }), run("Hi! This is Soa.", { bold: true, color: C.BLUE })]),
      bullet([run("2. The purpose: ", { bold: true }), run("I’m calling to remind you about the test on Friday.", { bold: true, color: C.BLUE })]),
      bullet([run("3. The number: ", { bold: true }), run("Please call me back at 034 12 345 67.", { bold: true, color: C.BLUE }), run(" (digit by digit!)")]),
      bullet([run("4. Bye!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PURPOSE MACHINE", [
      bullet([run("I’m calling TO + verb: ", { bold: true }), run("to invite you, to ask for the homework, to remind you…", { bold: true, color: C.BLUE })]),
      bullet([run("The linking words of purpose: ", { bold: true }), run("to / in order to / so that:", { bold: true, color: C.BLUE }), run(" she writes the message so that no word gets lost!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("ASKING AND OFFERING THE MESSAGE", [
      bullet([run("The offer: ", { bold: true }), run("You can leave a message if you want.", { bold: true, color: C.BLUE })]),
      bullet([run("The request: ", { bold: true }), run("Can you leave a message, please?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S84 — Reported speech: relaying the message ----------
function ficheS84() {
  const meta = META("Relaying the message — the reported speech",
    "By the end of the lesson, learners will be able to relay phone messages using reported speech with statements, questions and commands.",
    "5 / 7", "message cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three pieces of the voicemail."),
       fp("2. I call … (purpose: inviter) you to the party.")],
      [fp("Answer."),
       fp("E.A.: name, purpose, number — I’m calling to invite you!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The relay race of words: I whisper a message to the first student of each row; the message travels to the last student, who says it aloud. Did the words survive the trip?!")],
      [fp("Whisper. Relay. Laugh."),
       fp("E.A.: the message changed on the road!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The reported speech ». By the end of this lesson, you will carry the words of others without losing one gram!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Remember the audio: in the evening, Mrs Rasoa relays Soa’s words to Koto. Soa said: « You have a test on Friday. » → She SAID THAT you HAD a test on Friday. Direct words → reported words: the quotation marks disappear, and the verb takes one step back into the past (have → had, will → would, can → could)!")],
      [fp("Listen. Observe the transformation."),
       fp("E.A.: she said that + one step back!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The three vehicles of the relay! STATEMENTS: « I am busy » → She said (that) she was busy. QUESTIONS: « Can you call me back? » → She asked WHETHER/IF you could call her back; « Where are you? » → She asked WHERE you were (no question mark gymnastics — the order becomes calm!). COMMANDS: « Bring the book! » → She asked/told you TO BRING the book; « Don’t forget! » → She told you NOT TO forget!")],
      [fp("Observe. Transform the cards."),
       pAns("E.A.: She said she was busy; she asked if you could call back; she told you to bring the book — not to forget!",
        ["not to forget!"], { size: SZ.FICHE })],
      "Transformation drill", "Message cards"),
    stepRow(["5. Synthesis"],
      [fp("So: said that + step back (statements), asked whether/if or asked + question word (questions), told/asked + TO + verb (commands, with NOT TO for the negative). The relay is ready!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (role play + report!)"],
      [fp("Phone chain in threes: A calls B and leaves a voicemail (invitation? reminder? command?). B listens and relays to C with the reported speech: Hery called. He said that… He asked you to… C checks with A: did the message survive?")],
      [fp("Call. Relay. Check."),
       pAns("E.A.: Hery called this morning. He said that the match was on Sunday. He asked you to bring the ball, and he asked whether you could come early!",
        ["whether you could come early"], { size: SZ.FICHE })],
      "Role play", "Paper phones"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Report: « I am at the market » (Soa)."),
       fp("2. Report: « Can you help me? » (Koto)."),
       fp("3. Report: « Don’t be late! » (the teacher).")],
      [fp("Answer."),
       pAns("E.A.: Soa said that she was at the market. Koto asked whether I could help him. The teacher told us not to be late!",
        ["not to be late!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(84, TOTAL, meta, rows, "s84");
}
function lessonS84() {
  return [
    p([run("LESSON OF THE DAY — SESSION 84", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE REPORTED SPEECH — RELAYING THE MESSAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("STATEMENTS — SAID THAT + ONE STEP BACK", [
      bullet([run("« I am busy. » → ", { bold: true }), run("She said (that) she was busy.", { bold: true, color: C.BLUE })]),
      bullet([run("« You have a test. » → ", { bold: true }), run("She said that you had a test.", { bold: true, color: C.BLUE })]),
      bullet([run("The step back: am/is → was, have → had, will → would, can → could.", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 40 }),
    box("QUESTIONS — ASKED WHETHER / IF / WH-", [
      bullet([run("« Can you call me back? » → ", { bold: true }), run("She asked whether (if) you could call her back.", { bold: true, color: C.BLUE })]),
      bullet([run("« Where are you? » → ", { bold: true }), run("She asked where you were.", { bold: true, color: C.BLUE }), run(" (the order becomes calm — no “?”)")], { after: 20 }),
    ]),
    p("", { after: 40 }),
    box("COMMANDS — TOLD / ASKED + TO + VERB", [
      bullet([run("« Bring the book! » → ", { bold: true }), run("She told you to bring the book.", { bold: true, color: C.BLUE })]),
      bullet([run("« Don’t forget! » → ", { bold: true }), run("She told you not to forget!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE RELAY OF THE AUDIO", [
      bullet([run("“Koto, Soa called. She said that you had a test on Friday. She asked you to bring the English book. And she asked whether you could call her back.”", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S85 — Reading: the telephone lady ----------
function ficheS85() {
  const meta = META("Reading: the telephone lady of Ambohimena",
    "By the end of the lesson, learners will be able to predict a text from its title, infer information about phone calls and build a dialogue inspired by the passage.",
    "6 / 7", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: « I will come tomorrow » (Fara)."),
       fp("2. Report: « Call the nurse! » (the mother).")],
      [fp("Answer."),
       fp("E.A.: Fara said that she would come tomorrow. The mother told us to call the nurse!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title: « The telephone lady of Ambohimena ». Predict! Who is she? Why « the telephone lady »? Write your prediction. Then repeat the difficult words: network, dials, purpose, health centre, salutes.")],
      [fp("Predict. Repeat."),
       fp("E.A.: a lady who sells calls? who repairs phones? — network [nètoueurk]!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The telephone lady of Ambohimena » — Madame Bakoly and her old yellow phone. By the end of this lesson, you will see what one phone can do for a whole village!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text aloud, paragraph by paragraph — clear voice, like Madame Bakoly! Gist: what is her role? Details: where is her table? What does she write in the blue notebook, and WHY (find the purpose word!)? What happened the rainy Tuesday?")],
      [fp("Read aloud. Answer."),
       pAns("E.A.: she is the phone of the village! On the market square. The messages — SO THAT no word gets lost. She called the health centre and saved the baby!",
        ["SO THAT no word gets lost"], { size: SZ.FICHE })],
      "Whole-class work", "Reading text"),
    stepRow(["4. Analysis (the inference hunt)"],
      [fp("Read between the lines! Why does the boy salute the old yellow phone « like a general »? (not written — infer!). Who is « the best speaker of the region », and why is the answer « not written here »? Find in the text: one perfect voicemail structure, one purpose expression, one relayed message.")],
      [fp("Infer. Hunt."),
       pAns("E.A.: The phone saved his life — he thanks it like a hero! The best speaker is Madame Bakoly — the seventy voices of the village say it. Voicemail: name + purpose + number; purpose: so that; relay: “Tell him that the zebu is sold…”",
        ["like a hero!"], { size: SZ.FICHE })],
      "Inference", "Reading text"),
    stepRow(["5. Synthesis (post-reading: check the predictions!)"],
      [fp("Take your warm-up prediction: true or false? Share with your group, then the class. And the lesson of Madame Bakoly: a clear message can save a harvest — or a life!")],
      [fp("Check. Share.")],
      "Whole-class work", "----"),
    stepRow(["6. Practice (build your dialogue!)"],
      [fp("Inspired by the text but with YOUR ideas: in pairs, build up a dialogue at Madame Bakoly’s table (a student calling the big brother? a grandmother calling the doctor?). Four acts + one message to relay! Then act it out.")],
      [fp("Build. Act out."),
       pAns("E.A.: Hello! This is Madame Bakoly, from Ambohimena. I’m calling to give you a message from your grandmother: she asked you to come home for the famadihana!",
        ["from your grandmother"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. One stated information and one inferred information of the text."),
       fp("2. Copy the sentence with the linking word of purpose.")],
      [fp("Answer."),
       pAns("E.A.: Stated: her phone is on the market square. Inferred: the village respects her like a professional speaker. — She writes the message in her big blue notebook, so that no word gets lost.",
        ["her big blue notebook"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(85, TOTAL, meta, rows, "s85");
}
function lessonS85() {
  return [
    p([run("LESSON OF THE DAY — SESSION 85", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE TELEPHONE LADY OF AMBOHIMENA", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("the network", "dhe nètoueurk", "le réseau"),
    vocab("to dial", "tou daïeul", "composer le numéro"),
    vocab("the purpose", "dhe peurpeusse", "le but de l’appel"),
    vocab("to salute", "tou saloute", "saluer — like a general!"),
    p("", { after: 60 }),
    box("THE READER-DETECTIVE AT WORK", [
      bullet([run("Stated: ", { bold: true }), run("her table is on the market square; she writes the messages in a blue notebook.", { bold: true, color: C.BLUE })]),
      bullet([run("Inferred: ", { bold: true }), run("the boy salutes the phone because it saved his life; the best speaker of the region is Madame Bakoly herself!", { bold: true, color: C.BLUE })]),
      bullet([run("The lesson: ", { bold: true }), run("a clear message can save a harvest — or a life. That is the power of good communication!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S86 — Writing: my phone dialogue ----------
function ficheS86() {
  const meta = META("Writing: my phone dialogue — and action!",
    "By the end of the lesson, learners will be able to write a complete phone dialogue from a given situation, including the grammar points of the unit, and act it out.",
    "7 / 7", "situation cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Why does Madame Bakoly write the messages in the notebook?"),
       fp("2. Report: « Come home! » (grandmother).")],
      [fp("Answer."),
       fp("E.A.: so that no word gets lost! — She told me to come home.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Listen once more to the phone call of the unit (or I read it): take notes of the details — who? why? which message? which number? Your notes are the skeleton of a dialogue!")],
      [fp("Listen. Note."),
       fp("E.A.: Soa → Koto; the English book; test Friday; call back.")],
      "Whole-class work", "Audio / transcript"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My phone dialogue » — the final work of the year! By the end of this lesson, your English will ring true.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The situation cards: 1. You call the hotely to order a birthday meal. 2. You call a garage: your family car broke down. 3. You call your teacher to ask about the exam (formal!). 4. Your friend is absent: leave a voicemail and the mother relays it. Choose one! Checklist on the board: the four acts, the register, one voicemail OR one relayed message (reported speech!), one purpose expression.")],
      [fp("Choose the situation. Copy the checklist.")],
      "Guided writing", "Situation cards"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write the dialogue in pairs — eight to twelve lines. The grammar points of the unit must live inside: I’m calling to…, she said that…, told … to…! I walk around and help.")],
      [fp("Write.")],
      "Pair work", "Copy-books"),
    stepRow(["5. Synthesis (peer correction)"],
      [fp("Exchange dialogues with another pair: check the four acts, the register, the reported speech, the purpose. Kind feedback — then revise!")],
      [fp("Exchange. Revise.")], "Peer correction", "----"),
    stepRow(["6. Practice (act out!)"],
      [fp("The phone theatre: each pair acts its dialogue back to back, paper phones in hand. The class listens: which call was the clearest? Applause for everybody — you finished the year ON THE PHONE and IN ENGLISH!")],
      [fp("Act out. Applaud!"),
       pAns("E.A.: Hello! This is Naina. I’m calling to order a meal for Saturday… — (the class listens… and claps!)",
        ["and claps!"], { size: SZ.FICHE })],
      "Role play", "Paper phones"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected dialogue."),
       fp("2. Underline: the purpose expression, the reported speech, the register markers.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(86, TOTAL, meta, rows, "s86");
}
function lessonS86() {
  return [
    p([run("LESSON OF THE DAY — SESSION 86", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY PHONE DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DIALOGUE CHECKLIST", [
      bullet([run("Act 1 — starting: ", { bold: true }), run("Hello! This is… May I speak to…?", { bold: true, color: C.BLUE })]),
      bullet([run("Act 2 — asking: ", { bold: true }), run("Who is calling, please?", { bold: true, color: C.BLUE })]),
      bullet([run("Act 3 — the heart: ", { bold: true }), run("the purpose (I’m calling to…), the message, maybe a voicemail!", { bold: true, color: C.BLUE })]),
      bullet([run("Act 4 — ending: ", { bold: true }), run("Thank you very much. Goodbye!", { bold: true, color: C.BLUE })]),
      bullet([run("+ the right register, + one reported speech when the message travels!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model dialogue (situation 4):", { bold: true })], { after: 50 }),
    pr([run("Hery: ", { bold: true, color: COLOR }), run("Hello! This is Hery. May I speak to Lova, please?")], { after: 40 }),
    pr([run("The mother: ", { bold: true, color: COLOR }), run("Who is calling, please?")], { after: 40 }),
    pr([run("Hery: ", { bold: true, color: COLOR }), run("Hery, her classmate. ")], { after: 40 }),
    pr([run("The mother: ", { bold: true, color: COLOR }), run("I’m sorry, Lova went to her grandmother’s house. You can leave a message if you want.")], { after: 40 }),
    pr([run("Hery: ", { bold: true, color: COLOR }), run("Yes, please. I’m calling to remind her about the maths homework. Can you tell her to bring her exercise book tomorrow?")], { after: 40 }),
    pr([run("The mother: ", { bold: true, color: COLOR }), run("Of course. I will tell her. Goodbye, Hery!")], { after: 40 }),
    pr([run("(Evening) The mother: ", { bold: true, color: COLOR }), run("Lova, Hery called. He said that there was maths homework. He asked you to bring your exercise book tomorrow!")], { after: 80 }),
    box("THE FINAL CHECK", [
      bullet([run("Four acts ✓ register ✓ purpose ✓ reported speech ✓ — and a clear voice to act it out!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 10", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The phone verbs"),
    bullet([run("pick up, hang up, call back, dial a number, send a message, leave a message.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The four acts of the call"),
    bullet([run("Hello! This is… May I speak to…? — Who is calling, please? — I’m sorry? Can you repeat? — Thank you, goodbye!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The register"),
    bullet([run("Formal: May I speak to Mrs Soa, please? — Informal: Hi, it’s me! Is Soa there?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The voicemail"),
    bullet([run("Name + purpose + number: Hi! This is Soa. I’m calling to remind you about the test. Please call me back at 034 12 345 67!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The purpose"),
    bullet([run("I’m calling to + verb; in order to; so that no word gets lost!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The reported speech — the relay"),
    bullet([run("She said that you had a test. She asked whether you could call back. She told you to bring the book — and not to forget!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 10 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("The phone verb: 1. The phone rings → I … . 2. The call is finished → I … . 3. Nobody answered → I … later. 4. I prefer to write → I … .")]),
    pAns("Answers: 1. pick up. 2. hang up. 3. call back. 4. send a message.", ["pick up"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Put the call in order: a. Goodbye! b. Hello! This is Vola. c. Who is calling, please? d. May I speak to Hanta, please?")]),
    pAns("Answers: b → d → c → a.", ["b → d → c → a"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Formal or informal? 1. Hi, it’s me! 2. May I speak to the director, please? 3. Who’s this? 4. One moment, please, madam.")]),
    pAns("Answers: 1. informal. 2. formal. 3. informal. 4. formal.", ["informal"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Report the words: 1. « I am at the hotely » (Bema). 2. « Can you come? » (Vola). 3. « Where is the key? » (Mother). 4. « Don’t hang up! » (Soa).")]),
    pAns("Answers: 1. Bema said that he was at the hotely. 2. Vola asked whether (if) I could come. 3. Mother asked where the key was. 4. Soa told me not to hang up!", ["not to hang up!"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the text: 1. Where is Madame Bakoly’s phone? 2. Why does she write the messages (the purpose!)? 3. One inferred information, with the clue.")]),
    pAns("Answers: 1. On the market square of Ambohimena. 2. So that no word gets lost. 3. The village considers her the best speaker — clue: seventy voices answer together!", ["seventy voices"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s87", "SESSION 87 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 10: TALKING ON THE PHONE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Four phone verbs with their meaning."),
    pAns("E.A.: pick up (décrocher), hang up (raccrocher), call back (rappeler), leave a message.", ["hang up (raccrocher)"]),
    p("2. The four acts of the phone call."),
    pAns("E.A.: starting, asking for information, maintaining, ending.", ["maintaining"]),
    p("3. On the phone, how do you give your name?"),
    pAns("E.A.: Hello! THIS IS Soa — never « I am »!", ["THIS IS Soa"]),
    p("4. The question to know who calls — and its informal twin."),
    pAns("E.A.: Who is calling, please? / Who’s this?", ["Who is calling, please?"]),
    p("5. The line is bad: two repair sentences."),
    pAns("E.A.: I’m sorry? Can you repeat, please?", ["Can you repeat, please?"]),
    p("6. The three pieces of a perfect voicemail."),
    pAns("E.A.: the name, the purpose (I’m calling to…), the number (call me back at…).", ["the purpose"]),
    p("7. Offer the message — and ask for it."),
    pAns("E.A.: You can leave a message if you want. / Can you leave a message, please?", ["if you want"]),
    p("8. Report: « I will call back tonight » (Fara)."),
    pAns("E.A.: Fara said that she would call back tonight.", ["would call back"]),
    p("9. Report: « Can you open the door? » and « Close the window! »."),
    pAns("E.A.: She asked whether I could open the door. She told me to close the window.", ["told me to close"]),
    p("10. One sentence with a linking word of purpose."),
    pAns("E.A.: I’m calling in order to invite you — write it down so that you don’t forget!", ["so that you don’t forget!"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s88", "SESSION 88 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 10: TALKING ON THE PHONE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("The phone verb: 1. The phone rings: … ! 2. The conversation is over: … . 3. She didn’t answer: I will … in one hour. 4. Beep! You can … a message.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete the call: 1. Hello! … is Soa. 2. May I … to Koto, please? 3. Who is …, please? 4. I’m …? Can you repeat, please?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Write a complete voicemail (three pieces + bye) to invite a friend to your birthday on Sunday.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Report the words: 1. « I am sick » (Lova). 2. « Will you come tomorrow? » (Hery). 3. « Bring the documents! » (the director). 4. « Don’t be late! » (mother).")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a phone dialogue (eight lines): you call a friend, he/she is absent, you leave a message with a purpose, and the person who answered relays it in the evening (reported speech!).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: pick up — hang up — call back — leave. (1 pt each)", ["pick up — hang up"]),
    pAns("Ex.2: This — speak — calling — sorry. (1 pt each)", ["This — speak"]),
    pAns("Ex.3 (model): Hi! This is Naina. I’m calling to invite you to my birthday on Sunday at noon. Please call me back at 032 55 667 88. Bye! (4 pts: name 1, purpose 1, number 1, form 1)", ["my birthday on Sunday at noon"]),
    pAns("Ex.4: Lova said that she was sick. — Hery asked whether (if) I would come tomorrow. — The director told me to bring the documents. — Mother told me not to be late. (1 pt each)", ["told me not to be late"]),
    pAns("Ex.5 (model): Hello! This is Vola. May I speak to Hanta, please? — Who is calling, please? — Vola, her classmate. — I’m sorry, she is out. You can leave a message if you want. — I’m calling to remind her about the choir on Saturday. Can you tell her to come at nine? — Of course. Goodbye! — (Evening): Hanta, Vola called. She said that the choir was on Saturday, and she asked you to come at nine. (4 pts: acts 1, register 1, purpose 1, reported speech 1)", ["the choir was on Saturday"]),
  ];
}

module.exports = function unit10() {
  return [
    ...opening(), pageBreak(),
    ...ficheS80(), pageBreak(), ...lessonS80(), pageBreak(),
    ...ficheS81(), pageBreak(), ...lessonS81(), pageBreak(),
    ...ficheS82(), pageBreak(), ...lessonS82(), pageBreak(),
    ...ficheS83(), pageBreak(), ...lessonS83(), pageBreak(),
    ...ficheS84(), pageBreak(), ...lessonS84(), pageBreak(),
    ...ficheS85(), pageBreak(), ...lessonS85(), pageBreak(),
    ...ficheS86(), pageBreak(), ...lessonS86(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 10", COLOR, [
      "I can use the phone verbs: pick up, hang up, call back.",
      "I can start a call: Hello! This is… May I speak to…, please?",
      "I can ask who is calling and keep the call alive: I’m sorry?",
      "I can end a call politely, with the right register.",
      "I can leave a perfect voicemail: name, purpose, number!",
      "I can say the purpose: I’m calling to…, so that…",
      "I can relay a message: she said that…, she asked whether…, she told me to…",
      "I can read a text about phone calls and infer the hidden information.",
      "I can write and act out a complete phone dialogue — with self-confidence!",
    ], "CONGRATULATIONS — YOU FINISHED THE 10 UNITS OF THE YEAR! NEXT: THE ANNEXES!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
