// T10 — UNIT 2 — CLASSROOM COMMUNICATION (6 séances + révision + test) — Sessions 11 à 18 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // rouge brique
const SHADE = "FADBD8";
const TOTAL = 88;
const AUDIO = {
  permission: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — CLASSROOM COMMUNICATION", title, slo,
  values: "mutual respect, collaboration", session, materials,
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
function permissionDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("MAY I COME IN? (listening passage)", [
    L("", "(Somebody knocks at the door…)"),
    L("Teacher", "Come in!"),
    L("Naly", "Good morning, Madam. I apologise for being late. May I come in?"),
    L("Teacher", "Yes, you may. But don’t let it happen again."),
    L("Naly", "Thank you, Madam. Could you repeat the instructions, please?"),
    L("Teacher", "Of course. Open your books to page nine. And no talking, please!"),
    L("Vola", "Madam, can I borrow a pen? Mine doesn’t work."),
    L("Teacher", "Go ahead. Naly, will you close the window, please? It’s windy."),
    L("Naly", "Sure, Madam."),
    L("Vola", "Do you mind if I sit next to Naly?"),
    L("Teacher", "No, I don’t mind. Now, stop chatting, everybody, and let’s get down to work!"),
  ]);
}
function readingDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE READING DIALOGUE — A VISIT TO THE SCHOOL LIBRARY", [
    L("Librarian", "Good morning! Welcome to the library. Please leave your bags next to the door."),
    L("Hanta", "Good morning, Sir. Could you help me? I’m looking for a book about Madagascar."),
    L("Librarian", "Of course. Look on the shelf behind you, between the dictionaries and the maps."),
    L("Hanta", "Thank you! Do you mind if I read it at this table?"),
    L("Librarian", "Not at all. But remember: no eating in the library, and no talking loudly."),
    L("Mamy", "(whispering) Hanta! Can I sit next to you?"),
    L("Hanta", "Sure! But stop making noise with your chair!"),
    L("Librarian", "Shhh! Young man, would you push that chair quietly, please?"),
    L("Mamy", "Sorry, Sir. May I borrow this book until Monday?"),
    L("Librarian", "You may. Write your name in the notebook on my desk, please."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 2 — CLASSROOM COMMUNICATION", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("May I come in?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_classroom.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• understand and give the classroom commands;"),
    p("• use the imperative: Open your books! Don’t talk!;"),
    p("• use No + gerund and Stop + gerund: No talking! Stop chatting!;"),
    p("• use the prepositions of the classroom: on, in, under, next to, between, behind;"),
    p("• make polite requests: Could you repeat, please?;"),
    p("• ask for and give permission: May I come in? — Yes, you may;"),
    p("• read a classroom dialogue and find the hidden information;"),
    p("• write my own classroom dialogue.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, collaboration.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("One classroom, forty students, one teacher: without the polite words, it is chaos! With May I…?, Could you…? and the commands, the class becomes a team. Respect is the first grammar of the classroom.", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u2_permission.png", label: "May I come in? — listen and repeat", url: AUDIO.permission },
    ], COLOR),
  ];
}

// ---------- S11 — Classroom commands + imperatives ----------
function ficheS11() {
  const meta = META("The classroom commands — the imperative",
    "By the end of the lesson, learners will be able to recognize and give classroom commands using affirmative and negative imperatives.",
    "1 / 6", "stick figures (drawings of the commands)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Introduce yourself in two sentences."),
       fp("2. Complete: Right now, we … (start) a new unit!")],
      [fp("Answer."),
       fp("E.A.: My name is…, I’m from… — are starting.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe my stick figures! I show simple drawings: a figure standing, a figure sitting, a figure with an open book, a figure with a raised hand. What is each figure doing?")],
      [fp("Describe."),
       fp("E.A.: he is standing up; she is sitting down; he is raising his hand…")],
      "Using visual aids", "Stick figures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The classroom commands ». By the end of this lesson, your body will understand English faster than your head!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("I say the commands, you tick the stick figure that matches: Stand up! Sit down! Open your books! Close the door! Raise your hand! Come to the board! Listen carefully! Repeat after me!")],
      [fp("Listen. Tick the figures.")],
      "Total Physical Response", "Stick figures"),
    stepRow(["4. Analysis (post-listening)"],
      [fp("Gestures only! I mime — you say the command. Then the machine on the board: the imperative = the base verb, NO subject! Affirmative: Open your books! Negative: DON’T + verb: Don’t talk! Don’t be late!")],
      [fp("Say the commands. Observe."),
       fp("E.A.: verb first; negative with don’t.")],
      "Using gestures", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the command list of the classroom + the imperative machine (verb! / don’t + verb!). Your body knows them now — your copy-book too!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("SIMON SAYS! Simon says: stand up! (you stand) — Sit down! (nobody moves — Simon didn’t say it!). The last student standing becomes Simon.")],
      [fp("Play."),
       pAns("E.A.: Simon says: raise your hand! Simon says: don’t move!…",
        ["Simon says: raise your hand!"], { size: SZ.FICHE })],
      "Total Physical Response", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three affirmative classroom commands."),
       fp("2. Give two negative commands."),
       fp("3. What is the imperative machine?")],
      [fp("Answer."),
       pAns("E.A.: Stand up! Open your books! Come to the board! — Don’t talk! Don’t be late! — verb first, don’t + verb for the negative.",
        ["Don’t talk!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(11, TOTAL, meta, rows, "s11");
}
function lessonS11() {
  return [
    p([run("LESSON OF THE DAY — SESSION 11", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CLASSROOM COMMANDS — THE IMPERATIVE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u2_classroom.png", 400, 768 / 1376),
    p([run("The commands of every day:", { bold: true })], { after: 30 }),
    vocab("Stand up! / Sit down!", "stannde eupe / site daoune"),
    vocab("Open your books! / Close the door!", "ôoupeune iôr bouks / klôouze dhe dôr"),
    vocab("Raise your hand!", "réize iôr hannde"),
    vocab("Come to the board!", "keume tou dhe bôrde"),
    vocab("Listen carefully! / Repeat after me!", "lisseune kèrfouli / ripite afteur mi"),
    vocab("Take out a sheet of paper!", "téik aoute e chite ove péipeur"),
    p([run("The negative commands:", { bold: true })], { after: 30 }),
    vocab("Don’t talk! / Don’t move!", "dôounte tôk / dôounte mouve"),
    vocab("Don’t be late!", "dôounte bi léite"),
    p("", { after: 60 }),
    box("THE IMPERATIVE MACHINE", [
      bullet([run("Affirmative: ", { bold: true }), run("verb first, no subject! Open your books!", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: ", { bold: true }), run("Don’t + verb: Don’t talk! Don’t be late!", { bold: true, color: C.BLUE })]),
      bullet([run("Polite touch: ", { bold: true }), run("add please: Sit down, please!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S12 — No/Stop + gerund + prepositions ----------
function ficheS12() {
  const meta = META("No talking! Stop chatting! — and the prepositions",
    "By the end of the lesson, learners will be able to use “no + gerund”, “stop + gerund” and the prepositions of place in classroom situations.",
    "2 / 6", "classroom objects (pen, book, bag)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two affirmative and one negative command."),
       fp("2. Play one round of Simon says (student leader).")],
      [fp("Answer. Play."),
       fp("E.A.: Stand up! Raise your hand! Don’t talk!")],
      "Using games", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I show a big sign: a mouth with a red line. What does it mean? And this one: a sandwich with a red line?")],
      [fp("Guess."),
       fp("E.A.: don’t talk / don’t eat!")],
      "Using visual aids", "Signs"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « No talking! Stop chatting! ». By the end of this lesson, you will read every sign of the school — and place every object with the prepositions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Board: No talking, please! — No eating in class! — No running in the corridor! — Stop chatting! — Stop making noise! What follows No and Stop?")],
      [fp("Observe."),
       fp("E.A.: a verb + -ing — the gerund!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Preposition hunt! I place a pen: ON the book, IN the bag, UNDER the desk, NEXT TO the ruler, BETWEEN two books, BEHIND the bag. You say the sentence each time. Then YOU place the object where I say!")],
      [fp("Say. Place the objects."),
       fp("E.A.: The pen is on the book; put it under the desk…")],
      "Total Physical Response", "Classroom objects"),
    stepRow(["5. Synthesis"],
      [fp("So: No + verb-ing = interdiction on a sign or in class; Stop + verb-ing = stop the action NOW; and the six prepositions of place: on, in, under, next to, between, behind.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Sign makers! Each pair invents TWO signs for our school (No + gerund) and ONE “Stop” sentence for a noisy brother at home. Best signs go on the wall!")],
      [fp("Write. Share."),
       pAns("E.A.: No sleeping in class! No throwing paper! — Stop watching TV!",
        ["No sleeping in class!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two “No + gerund” signs."),
       fp("2. Tell your friend to stop two actions."),
       fp("3. Complete: the bag is … the desk (dessous); the book is … the pen and the ruler (entre).")],
      [fp("Answer."),
       pAns("E.A.: No talking! No eating! — Stop chatting! Stop making noise! — under; between.",
        ["Stop making noise!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(12, TOTAL, meta, rows, "s12");
}
function lessonS12() {
  return [
    p([run("LESSON OF THE DAY — SESSION 12", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("NO TALKING! STOP CHATTING! — THE PREPOSITIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("NO + GERUND (the signs)", [
      bullet([run("No talking, please!", { bold: true, color: C.BLUE }), run("  —  interdiction, polite and short.")]),
      bullet([run("No eating in class! No running in the corridor!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("STOP + GERUND (stop the action now!)", [
      bullet([run("Stop chatting! Stop making noise!", { bold: true, color: C.BLUE })]),
      bullet([run("Stop writing — time’s up!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The prepositions of place:", { bold: true })], { after: 30 }),
    vocab("on", "onne", "the book is on the desk"),
    vocab("in", "inn", "the pen is in the bag"),
    vocab("under", "eunndeur", "the bag is under the chair"),
    vocab("next to", "nèkste tou", "Soa sits next to Koto"),
    vocab("between", "bitouine", "the ruler is between two books"),
    vocab("behind", "bihaïnnde", "the board is behind the teacher"),
    p("", { after: 60 }),
    p([run("Classroom sentences:", { bold: true })], { after: 50 }),
    bullet([...kw("Put your bags under the desks!", "poute iôr bagz eunndeur dhe dèsks")]),
    bullet([...kw("Leave your slates next to the door!", "live iôr sléits nèkste tou dhe dôr")]),
  ];
}

// ---------- S13 — Listening: May I come in? ----------
function ficheS13() {
  const meta = META("Listening: May I come in?",
    "By the end of the lesson, learners will be able to find the gist and detailed information in an oral dialogue containing requests and permission.",
    "3 / 6", "audio (QR code) or dialogue read aloud, picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Write one “No + gerund” sign."),
       fp("2. Complete: the chalk is … the board (devant? derrière?).")],
      [fp("Answer."),
       fp("E.A.: No talking! — behind/in front of the board.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the picture: a student at the classroom door, the teacher inside. What happened, in your opinion? What will the student say?")],
      [fp("Predict."),
       fp("E.A.: he is late; he will apologise and ask to come in…")],
      "Using audio-visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « May I come in? ». By the end of this lesson, you will hear all the polite keys of the classroom in one single scene!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. Why does Naly apologise? 2. What does Vola want to borrow, and why? 3. What does the teacher ask Naly to do? 4. Where does Vola want to sit?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. He is late. 2. A pen — his doesn’t work. 3. To close the window. 4. Next to Naly.",
        ["To close the window."], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis (post-listening)"],
      [fp("Check your predictions! Then hunt in the text: the REQUEST expressions (Could you repeat…? Will you close…?) and the PERMISSION expressions (May I come in? Can I borrow…? Do you mind if I sit…?). Two teams, one minute!")],
      [fp("Check. Hunt."),
       fp("E.A.: requests ask somebody to DO something; permissions ask if I MAY do something.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: a request = Could you / Will you + verb, please? A permission = May I / Can I / Do you mind if I + verb? And the answers: Sure! Go ahead! Yes, you may! No, I don’t mind!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the dialogue in groups of three (teacher, Naly, Vola) — with the knock at the door, the windy window, everything!")],
      [fp("Role play."),
       pAns("E.A.: (the whole dialogue, with expression!)",
        ["May I come in?"], { size: SZ.FICHE })],
      "Role play", "Audio / QR"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In the dialogue: find one request and one permission."),
       fp("2. What does the teacher answer to “Do you mind if I sit next to Naly?”")],
      [fp("Answer."),
       pAns("E.A.: Could you repeat the instructions? (request) / May I come in? (permission) — No, I don’t mind.",
        ["No, I don’t mind."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  return [
    p([run("LESSON OF THE DAY — SESSION 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MAY I COME IN?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    permissionDialogueBox(),
    p("", { after: 60 }),
    p([run("The two families of polite sentences:", { bold: true })], { after: 50 }),
    bullet([run("REQUESTS (please do it!): ", { bold: true }), run("Could you repeat the instructions, please? Will you close the window, please?", { bold: true, color: C.BLUE })]),
    bullet([run("PERMISSION (may I do it?): ", { bold: true }), run("May I come in? Can I borrow a pen? Do you mind if I sit here?", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u2_permission.png", label: "May I come in? — listen and repeat", url: AUDIO.permission }], COLOR),
  ];
}

// ---------- S14 — Grammar: requests and permission machines ----------
function ficheS14() {
  const meta = META("The polite machines — requests and permission",
    "By the end of the lesson, learners will be able to make and reply to requests and ask for and grant permission with the adequate register.",
    "4 / 6", "VIP cards (principal, president, mayor, celebrity, friend)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one request from the dialogue."),
       fp("2. Give one permission question and its answer.")],
      [fp("Answer."),
       fp("E.A.: Could you repeat…? — May I come in? Yes, you may.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Imagine: you need a pen. You ask your little brother… then you ask THE PRESIDENT OF THE COUNTRY. Same sentence? The class laughs — and discovers the registers!")],
      [fp("React."),
       fp("E.A.: no! more polite with the president!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The polite machines ». By the end of this lesson, you will choose the RIGHT key for the RIGHT person — friend or VIP!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The request ladder on the board: Can you…? (friend) → Will you…, please? → Could you…, please? → Would you…, please? (VIP!). The permission ladder: Can I…? (friend) → May I…? → Do you mind if I…? (very polite). Climb the ladder = more polite!")],
      [fp("Observe. Compare."),
       fp("E.A.: could/would and “do you mind if” are the most polite.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The answers! YES: Sure! / Of course! / Go ahead! / Yes, you may. / No, I don’t mind (careful: NO here means YES to the permission!). NO: I’m afraid not. / Sorry, you may not. / I’d rather you didn’t. Why is “No, I don’t mind” a YES?")],
      [fp("Observe. Explain."),
       fp("E.A.: because “mind” = être dérangé: I am NOT disturbed → you can do it!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the request ladder (Can → Will → Could → Would you + verb, please?), the permission ladder (Can I → May I → Do you mind if I + verb?), the yes-answers and the no-answers — and the register: friend or VIP (the school principal, the mayor, the president, a famous celebrity… and your teacher!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("VIP cards! Each student picks a card (friend / teacher / principal / mayor / president / celebrity) and asks a request + a permission with the RIGHT level. The class votes: polite enough?")],
      [fp("Pick. Ask. Vote."),
       pAns("E.A.: (president card) Would you sign my book, please? Do you mind if I take a photo?",
        ["Would you sign my book, please?"], { size: SZ.FICHE })],
      "Role play", "VIP cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask your friend to lend you a ruler, then ask the principal."),
       fp("2. Ask permission to open the window (two levels)."),
       fp("3. Answer YES to: Do you mind if I sit here?")],
      [fp("Answer."),
       pAns("E.A.: Can you lend me a ruler? / Would you lend me a ruler, please? — Can I open…? / May I open…? — No, I don’t mind. Go ahead!",
        ["No, I don’t mind."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LESSON OF THE DAY — SESSION 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE POLITE MACHINES — REQUESTS AND PERMISSION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE REQUEST LADDER (ask somebody to do something)", [
      bullet([run("Can you lend me a pen?", { bold: true, color: C.BLUE }), run("  —  friend")]),
      bullet([run("Will you close the window, please?", { bold: true, color: C.BLUE }), run("  —  polite")]),
      bullet([run("Could you repeat, please?", { bold: true, color: C.BLUE }), run("  —  more polite")]),
      bullet([run("Would you sign here, please?", { bold: true, color: C.BLUE }), run("  —  VIP level!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PERMISSION LADDER (ask if YOU may do something)", [
      bullet([run("Can I borrow a pen?", { bold: true, color: C.BLUE }), run("  —  friend")]),
      bullet([run("May I come in?", { bold: true, color: C.BLUE }), run("  —  polite, classic")]),
      bullet([run("Do you mind if I sit here?", { bold: true, color: C.BLUE }), run("  —  very polite")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The answers:", { bold: true })], { after: 30 }),
    vocab("Sure! / Of course! / Go ahead!", "chour / ove kôrss / gôou ehède", "yes 😀"),
    vocab("Yes, you may.", "ièsse iou méi", "formal yes"),
    vocab("No, I don’t mind.", "nôou aï dôounte maïnnde", "⚠ it means YES! (= it doesn’t disturb me)"),
    vocab("I’m afraid not. / Sorry, you may not.", "aïme efréide note", "polite no"),
    p("", { after: 60 }),
    p([run("The VIPs:", { bold: true })], { after: 30 }),
    vocab("the school principal", "dhe skoule prinncipeul"),
    vocab("the mayor", "dhe méieur"),
    vocab("the president of the country", "dhe prézideunnte"),
    vocab("a famous celebrity", "e féimeuss sèlèbriti"),
  ];
}

// ---------- S15 — Reading ----------
function ficheS15() {
  const meta = META("Reading: a visit to the school library",
    "By the end of the lesson, learners will be able to read a dialogue accurately and infer information from a text on classroom communication.",
    "5 / 6", "reading dialogue (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask the mayor to open the school gate (request!)."),
       fp("2. What does “No, I don’t mind” mean?")],
      [fp("Answer."),
       fp("E.A.: Would you open the gate, please? — yes, you can do it!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title is: « A visit to the school library ». Guess: who speaks? which polite sentences will appear? Write one prediction.")],
      [fp("Predict."),
       fp("E.A.: a librarian and students; May I borrow…?")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « A visit to the school library ». By the end of this lesson, you will catch even the information the text does NOT say aloud!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the dialogue aloud by roles, paying attention to pronunciation. Find the meaning of “shelf” and “to whisper” from the context. Then answer: 1. What is Hanta looking for? 2. Where is the book? 3. Until when may Mamy keep the book?")],
      [fp("Read. Answer."),
       pAns("E.A.: 1. A book about Madagascar. 2. On the shelf behind her, between the dictionaries and the maps. 3. Until Monday.",
        ["Until Monday."], { size: SZ.FICHE })],
      "Repetition drill", "Reading dialogue"),
    stepRow(["4. Analysis (post-reading)"],
      [fp("INFERENCE time — the hidden information: 1. Why does Mamy whisper? 2. Is the librarian angry or kind? How do you know? 3. What are the two rules of the library? Check your predictions too!")],
      [fp("Infer. Justify."),
       fp("E.A.: 1. Because talking loudly is forbidden. 2. Kind but firm — he says please and helps. 3. No eating, no talking loudly.")],
      "Whole-class work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: reading = the lines + BETWEEN the lines! The polite sentences work everywhere: classroom, library, office. And the prepositions guided us to the book: behind, between!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the library dialogue in groups of three — whispering included!")],
      [fp("Role play."),
       pAns("E.A.: (the whole dialogue, with a librarian voice!)",
        ["Could you help me?"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where exactly is the book about Madagascar?"),
       fp("2. Inference: why does the librarian say “Shhh!”?"),
       fp("3. Find one request and one permission in the dialogue.")],
      [fp("Answer."),
       pAns("E.A.: On the shelf, between the dictionaries and the maps. — Because Mamy makes noise with his chair. — Could you help me? / May I borrow this book?",
        ["May I borrow this book?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LESSON OF THE DAY — SESSION 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: A VISIT TO THE SCHOOL LIBRARY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingDialogueBox(),
    p("", { after: 60 }),
    p([run("New words of the dialogue:", { bold: true })], { after: 50 }),
    vocab("a shelf", "e chèlf", "the board where the books sleep"),
    vocab("to whisper", "tou ouispeur", "to speak very very low"),
    vocab("to borrow", "tou borôou", "to take and give back later"),
    vocab("a librarian", "e laïbrèrieune", "the king of the library!"),
    p("", { after: 60 }),
    box("READING BETWEEN THE LINES (inference)", [
      bullet([run("The text says: ", { bold: true }), run("Mamy whispers. "), run("The text means: ", { bold: true }), run("talking loudly is forbidden there!", { bold: true, color: C.BLUE })]),
      bullet([run("The text says: ", { bold: true }), run("“Write your name in the notebook.” "), run("The text means: ", { bold: true }), run("the library keeps a list of borrowed books!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S16 — Writing ----------
function ficheS16() {
  const meta = META("Writing: my classroom dialogue",
    "By the end of the lesson, learners will be able to write a coherent dialogue based on classroom conversations, using commands, requests and permission.",
    "6 / 6", "action list from the class");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the two rules of the library."),
       fp("2. Ask permission to borrow a dictionary (very polite).")],
      [fp("Answer."),
       fp("E.A.: no eating, no talking loudly — Do you mind if I borrow…?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Harvest! In two minutes, the class collects on the board all the classroom ACTIONS we know: come in, borrow, close, repeat, sit, open, clean the board… This is our word bank.")],
      [fp("Collect actions.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My classroom dialogue ». By the end of this lesson, your dialogue will contain one command, one request, one permission — and a smile!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The recipe on the board: SITUATION (late student? broken pen? hot classroom?) + 1 command + 1 request + 1 permission + answers + a polite ending. Look how the listening dialogue follows this recipe!")],
      [fp("Observe."),
       fp("E.A.: May I come in (permission), Could you repeat (request), no talking (command)…")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write your dialogue (8 lines) with the word bank and the recipe. Choose your situation! I walk around and help.")],
      [fp("Write the dialogue.")],
      "Individual work", "Action list"),
    stepRow(["5. Synthesis (post-writing)"],
      [fp("Peer correction: exchange drafts. Check-list: command ✓ request ✓ permission ✓ polite answers ✓ capital letters ✓. Correct kindly with a pencil!")],
      [fp("Exchange. Correct.")], "Peer correction", "----"),
    stepRow(["6. Practice"],
      [fp("Act out the best dialogues — the class guesses the situation!")],
      [fp("Act out. Guess."),
       pAns("E.A.: — Sorry I’m late! May I come in? — Yes, you may. Vola, stop chatting! — Could you lend me a pen, please? — Sure, go ahead!",
        ["stop chatting!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected dialogue in your copy-book."),
       fp("2. Underline the command, the request and the permission with three colours.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LESSON OF THE DAY — SESSION 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY CLASSROOM DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RECIPE", [
      bullet([run("1. Choose a situation: ", { bold: true }), run("a late student, a broken pen, a hot classroom, a library visit…")]),
      bullet([run("2. One command: ", { bold: true }), run("Open your books! / No talking!", { bold: true, color: C.BLUE })]),
      bullet([run("3. One request: ", { bold: true }), run("Could you repeat, please?", { bold: true, color: C.BLUE })]),
      bullet([run("4. One permission: ", { bold: true }), run("May I…? / Do you mind if I…?", { bold: true, color: C.BLUE })]),
      bullet([run("5. The answers + a polite ending: ", { bold: true }), run("Sure! Go ahead! Thank you, Madam!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Teacher — ", { bold: true, color: COLOR }), run("Take out a sheet of paper! And no talking, please.")]),
    bullet([run("Koto — ", { bold: true, color: COLOR }), run("Madam, could you repeat the page number, please?")]),
    bullet([run("Teacher — ", { bold: true, color: COLOR }), run("Page nine. Quickly!")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("Do you mind if I open the window? It’s very hot.")]),
    bullet([run("Teacher — ", { bold: true, color: COLOR }), run("No, I don’t mind. Go ahead.")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("Thank you, Madam!")]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 2", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The classroom commands — the imperative"),
    bullet([run("Affirmative: ", { bold: true }), run("Stand up! Open your books! Come to the board!", { bold: true, color: C.BLUE })]),
    bullet([run("Negative: ", { bold: true }), run("Don’t talk! Don’t be late!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. No + gerund, Stop + gerund"),
    bullet([run("No talking, please! No eating in class!", { bold: true, color: C.BLUE }), run("  (signs and rules)")]),
    bullet([run("Stop chatting! Stop making noise!", { bold: true, color: C.BLUE }), run("  (stop NOW!)")], { after: 100 }),
    sub("3. The prepositions of place"),
    bullet([run("on, in, under, next to, between, behind", { bold: true, color: C.BLUE }), run("  —  Put your bags under the desks!")], { after: 100 }),
    sub("4. Requests — ask somebody to do something"),
    bullet([run("Can you…? → Will you…? → Could you…? → Would you…, please?", { bold: true, color: C.BLUE }), run("  (the politer, the higher!)")], { after: 100 }),
    sub("5. Permission — ask if YOU may do something"),
    bullet([run("Can I…? → May I…? → Do you mind if I…?", { bold: true, color: C.BLUE })]),
    bullet([run("Yes: Sure! Go ahead! Yes, you may. No, I don’t mind (= yes!). — No: I’m afraid not.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The register"),
    bullet([run("Friend → simple key; teacher, principal, mayor, president, celebrity → VIP key!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 2 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Give the command: 1. (lever) … your hand! 2. (ne pas parler) …! 3. (venir) … to the board!")]),
    pAns("Answers: 1. Raise your hand! 2. Don’t talk! 3. Come to the board!", ["Raise your hand!"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Make the sign with No + gerund: 1. (manger) in the library. 2. (courir) in the corridor. 3. Tell your friend to stop: (bavarder).")]),
    pAns("Answers: 1. No eating in the library! 2. No running in the corridor! 3. Stop chatting!", ["No running in the corridor!"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Complete with the preposition: 1. The pen is … the bag (dedans). 2. The bag is … the desk (dessous). 3. Soa sits … Koto and Hery (entre).")]),
    pAns("Answers: 1. in. 2. under. 3. between.", ["between"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Request or permission? Rewrite politely: 1. (to the principal) Lend me your pen. 2. (to the teacher) I want to come in. 3. (to a friend) Close the door.")]),
    pAns("Answers: 1. Would you lend me your pen, please? 2. May I come in? 3. Can you close the door?", ["May I come in?"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Answer the questions: 1. “Do you mind if I sit here?” — say YES politely. 2. “May I go out?” — say NO politely. 3. “Could you help me?” — accept!")]),
    pAns("Answers: 1. No, I don’t mind — go ahead! 2. I’m afraid not. 3. Sure! / Of course!", ["I’m afraid not."]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give three affirmative commands and two negative commands."),
    pAns("E.A.: Stand up! Open your books! Listen carefully! — Don’t talk! Don’t move!", ["Don’t move!"]),
    p("2. What is the imperative machine (affirmative and negative)?"),
    pAns("E.A.: verb first, no subject; don’t + verb.", ["don’t + verb"]),
    p("3. Write two signs with No + gerund."),
    pAns("E.A.: No talking! No eating in class!", ["No talking!"]),
    p("4. Tell somebody to stop two actions."),
    pAns("E.A.: Stop chatting! Stop making noise!", ["Stop chatting!"]),
    p("5. Give the six prepositions of place with one example."),
    pAns("E.A.: on, in, under, next to, between, behind — the bag is under the desk.", ["under the desk"]),
    p("6. Climb the request ladder: four levels to ask somebody to close the door."),
    pAns("E.A.: Can you / Will you / Could you / Would you close the door, please?", ["Would you close the door, please?"]),
    p("7. Climb the permission ladder: three levels to sit next to somebody."),
    pAns("E.A.: Can I / May I / Do you mind if I sit next to you?", ["Do you mind if I"]),
    p("8. “Do you mind if I open the window?” — give the YES answer and explain it."),
    pAns("E.A.: No, I don’t mind — “no” because it does not disturb me = permission given!", ["No, I don’t mind"]),
    p("9. In the listening dialogue: why is Naly late to close the window? (trick: who asks him?)"),
    pAns("E.A.: the teacher asks him: Will you close the window, please? — it’s windy.", ["Will you close the window"]),
    p("10. In the library dialogue: where is the book, and until when may Mamy borrow it?"),
    pAns("E.A.: on the shelf between the dictionaries and the maps; until Monday.", ["until Monday"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s18", "SESSION 18 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 2: CLASSROOM COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the command: 1. (s’asseoir) 2. (répéter après moi) 3. (ne pas bouger) 4. (ne pas être en retard).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. No … (talk), please! 2. No … (eat) in class! 3. Stop … (chat)! 4. Stop … (make) noise!")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete with on / in / under / next to / between / behind: 1. The chalk is … the board (derrière). 2. The pen is … the pencil case (dedans). 3. Rina sits … Vola and Hery (entre). 4. The cat sleeps … the chair (dessous).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Rewrite with the right politeness: 1. (to the principal) Open the gate. 2. (to a friend) Lend me your ruler. 3. (to the teacher) I want to go out. 4. (very polite) I want to sit here.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a classroom dialogue (6 lines) with: one command, one request, one permission and the polite answers.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: Sit down! / Repeat after me! / Don’t move! / Don’t be late! (1 pt each)", ["Repeat after me!"]),
    pAns("Ex.2: talking — eating — chatting — making. (1 pt each)", ["chatting"]),
    pAns("Ex.3: behind — in — between — under. (1 pt each)", ["behind"]),
    pAns("Ex.4: Would you open the gate, please? / Can you lend me your ruler? / May I go out? / Do you mind if I sit here? (1 pt each)", ["Do you mind if I sit here?"]),
    pAns("Ex.5 (model): — Take out your books! No talking! — Could you repeat the page, please? — Page 9. — May I borrow a pen? — Sure, go ahead! — Thank you, Madam! (4 pts: 3 machines 3, coherence 1)", ["Sure, go ahead!"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS11(), pageBreak(), ...lessonS11(), pageBreak(),
    ...ficheS12(), pageBreak(), ...lessonS12(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can understand and give the classroom commands.",
      "I can use the imperative: Open your books! Don’t talk!",
      "I can make signs with No + gerund: No talking, please!",
      "I can stop an action with Stop + gerund: Stop chatting!",
      "I can place objects with on, in, under, next to, between, behind.",
      "I can climb the request ladder: Can → Will → Could → Would you…, please?",
      "I can climb the permission ladder: Can I → May I → Do you mind if I…?",
      "I can answer politely — and I know that “No, I don’t mind” means YES!",
      "I can write a classroom dialogue with a command, a request and a permission.",
    ], "NEXT STOP → UNIT 3: MY HOUSE, MY NEIGHBOURHOOD!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
