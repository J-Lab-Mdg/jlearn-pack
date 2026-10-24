// T11 — UNIT 4 — COMMUNICATION (6 séances + révision + test) — Sessions 27 à 34 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell,
        rubricBadge, rubricTable } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet
const SHADE = "E8DAEF";
const TOTAL = 86;
const AUDIO = {
  // Liens Drive à insérer dès la création du dossier T11 (MP3 de sauvegarde: manuel-t11/audio/)
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — COMMUNICATION", title, slo,
  values: "politeness, clarity", session, materials,
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
      new TableRow({ children: [cell(children, {})] }),
    ],
  });
}
function phoneCallBox() {
  const L = (who, text) => bullet([run("— " + who + ": ", { bold: true, color: C.RED }),
    run(text, { bold: true, color: C.BLUE })]);
  return box("THE PHONE CALL — BOOKING THE SCHOOL BUS", [
    L("Secretary", "Good morning, Soleil Transport, Lalao speaking. How can I help you?"),
    L("Hanta", "Good morning, Madam. This is Hanta Rabe, from the lycée of Antsirabe. Could I speak to Mr Solo, please?"),
    L("Secretary", "I’m afraid he is in a meeting at the moment. Would you like to leave a message?"),
    L("Hanta", "Yes, please. We would like to book a bus for our school trip on Friday the 12th — thirty students and two teachers."),
    L("Secretary", "Friday the 12th, thirty students, two teachers… Could you spell your name, please?"),
    L("Hanta", "Of course: H-A-N-T-A, R-A-B-E. My number is 034 12 345 67."),
    L("Secretary", "Perfect, Miss Rabe. Mr Solo will call you back before five o’clock."),
    L("Hanta", "Thank you very much for your help. Goodbye!"),
    L("Secretary", "You’re welcome. Goodbye!"),
  ]);
}
function letterBox() {
  const L = (t, o) => p([run(t, { size: SZ.BODY, ...(o || {}) })], { after: 50 });
  return box("THE MODEL — A FORMAL LETTER TO THE MAYOR", [
    L("Lycée Ampefy, T11 class", { bold: true }),
    L("Ampefy, 14 October 2026", { bold: true }),
    L(""),
    L("Dear Mr Mayor,", { bold: true }),
    L(""),
    L("We are the students of the T11 class of the lycée of Ampefy. We are writing to ask for your help with our school library."),
    L("Our library is very small, and many books are old or incomplete. However, more than three hundred students use it every week. We would be very grateful if the commune could offer shelves and some new books."),
    L("In return, our class is ready to paint the room and to organise the books every Saturday morning."),
    L(""),
    L("We thank you in advance for your kindness, and we look forward to your reply."),
    L(""),
    L("Yours faithfully,", { bold: true }),
    L("The students of T11", { bold: true }),
  ]);
}
function opening() {
  return [
    unitBanner("UNIT 4 — COMMUNICATION", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Say it clearly — on the phone, in a letter, in an email!", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u4_comm.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the means of communication, from the letter to the email;"),
    p("• make a polite phone call: answering, asking for someone, leaving a message;"),
    p("• listen to a real phone call and take the message;"),
    p("• build the opposite words with the prefixes un- and in-: unhappy, impossible;"),
    p("• read a formal letter and an informal email — and feel the difference;"),
    p("• write a complete formal letter, from “Dear…” to “Yours faithfully”.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("politeness, clarity.")], { after: 160 }),
    rubricTable(
      "The means of communication (phone call, SMS, email, letter); the telephone words (to dial, to hang up, a message…).",
      "Making and answering a phone call; leaving and taking a message; opening and closing a letter or an email.",
      "The negative prefixes un- and in- (im-, il-, ir-); formal and informal register."
    ),
    p("", { after: 100 }),
    box("WHY THIS UNIT?", [
      p("One day you will call an office for a job, write a letter to the mayor, or send an email for a scholarship. That day, every word counts! In this unit you learn the music of polite communication: clear on the phone, elegant on the paper.", { after: 40 }),
    ]),
  ];
}

// ---------- S27 — The means of communication ----------
function ficheS27() {
  const meta = META("The means of communication — from the letter to the email",
    "By the end of the lesson, learners will be able to name the means of communication and choose the right one for each situation.",
    "1 / 6", "pictures of means of communication");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From Unit 3: share a news story with its source.")],
      [fp("Answer."),
       fp("E.A.: Have you heard the news? According to the radio…")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Time machine: how did your grandparents send an urgent message in 1980? And your parents in 2000? And you today? Three answers on the board.")],
      [fp("Answer."),
       fp("E.A.: a letter or a telegram — a phone call at the telephone office — an SMS or a WhatsApp message!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The means of communication ». By the end of this lesson, you will choose the right means for the right message — like a professional secretary!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The communication museum on the board: the letter (slow but solemn) — the phone call (fast and warm) — the SMS (short and cheap) — the email (fast and serious) — the social media message (fast… and public!). For each: when do we use it?")],
      [fp("Observe. Match."),
       fp("E.A.: a letter for the mayor, a call for grandmother, an email for a scholarship…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The verbs of communication: to send / to receive a message; to make / to answer a call; to write / to reply to a letter; to attach a document (email). The rule of the right means: urgent → call; official → letter or email; short information → SMS.")],
      [fp("Build the toolbox."),
       fp("E.A.: send/receive, make/answer, write/reply, attach.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: every message has its vehicle! Urgent news takes the phone, official requests take the letter or the email, small words take the SMS. The wrong vehicle loses the message!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The dispatcher game: situation cards — invite grandmother to the exam ceremony / ask the mayor for new books / tell your friend the match is at 3 / apply for a scholarship. Pairs choose the means and justify: “We choose…, because…”.")],
      [fp("Choose. Justify."),
       pAns("E.A.: For grandmother, we choose a phone call, because it is warm and she cannot read SMS easily!",
        ["a phone call"], { size: SZ.FICHE })],
      "Pair work — game", "Situation cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give four means of communication from the slowest to the fastest."),
       fp("2. Which means for an official request — and why?"),
       fp("3. Complete: to … a call; to … a document to an email.")],
      [fp("Answer."),
       pAns("E.A.: letter → email → SMS → call. — A letter or an email, because it stays written and serious. — answer; attach.",
        ["attach"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LESSON OF THE DAY — SESSION 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MEANS OF COMMUNICATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("VOCABULARY"),
    p([run("The museum of the message:", { bold: true })], { after: 50 }),
    vocab("a letter", "e lèteur", "slow but solemn — for the official requests"),
    vocab("a phone call", "e fôoune kol", "fast and warm"),
    vocab("an SMS / a text message", "eune èss-èm-èss / e tèxte mèssidje", "short and cheap"),
    vocab("an email", "eune i-méile", "fast and serious — can carry documents"),
    vocab("a voicemail", "e voïce-méile", "the message after the beep"),
    p("", { after: 60 }),
    p([run("The verbs of the messenger:", { bold: true })], { after: 50 }),
    vocab("to send / to receive", "tou sènde / tou rissive", "a message goes, a message comes"),
    vocab("to make / to answer a call", "tou méike / tou anseur e kol", ""),
    vocab("to reply to a letter", "tou riplaï tou e lèteur", "the polite return"),
    vocab("to attach a document", "tou etatch e dokioumènte", "the backpack of the email"),
    p("", { after: 60 }),
    box("THE RULE OF THE RIGHT VEHICLE", [
      bullet([run("Urgent → ", { bold: true }), run("the phone call.", { bold: true, color: C.BLUE })]),
      bullet([run("Official → ", { bold: true }), run("the letter or the email.", { bold: true, color: C.BLUE })]),
      bullet([run("Short information → ", { bold: true }), run("the SMS.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S28 — Making a phone call ----------
function ficheS28() {
  const meta = META("Making a polite phone call",
    "By the end of the lesson, learners will be able to make and answer a phone call politely: asking for someone, leaving and taking a message.",
    "2 / 6", "two phones (or cardboard phones!)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Which means for: an urgent news? an official request? Give one verb with “call”.")],
      [fp("Answer."),
       fp("E.A.: the phone call; the letter/email; to make (answer) a call.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Ring ring! I mime a phone call with a terrible start: “Allo!! Who are you?!” — Funny? What is wrong? How do WE answer the phone politely?")],
      [fp("React."),
       fp("E.A.: too rude! We say our name, we say good morning…")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Making a phone call ». By the end of this lesson, you will call any office in English — cool, clear and polite!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The four acts on the board: ACT 1 — answering: Good morning, X speaking. How can I help you?; ACT 2 — asking for someone: This is… Could I speak to…, please?; ACT 3 — the absent person: I’m afraid he is not here. Would you like to leave a message?; ACT 4 — closing: Thank you for your help. Goodbye! Which act belongs to the caller? To the receiver?")],
      [fp("Observe. Classify."),
       fp("E.A.: acts 1 and 3: the receiver; act 2: the caller; act 4: both!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The magic words of the phone: This is Hanta (never “I am Hanta” on the phone!); Could I…? more polite than Can I…?; I’m afraid… = the soft no; to call back = to return the call; hold on, please = wait. And the golden tool of the message: name + number + request, repeated by the receiver!")],
      [fp("Collect the tools."),
       fp("E.A.: This is…, Could I…, I’m afraid…, call back, hold on.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: answer with your name, ask with Could I speak to…?, soften with I’m afraid…, leave a message with name + number + request. Four acts, one voice: polite and clear!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Back-to-back calls (real phone position: no eye contact!): pairs play — call the tailor to ask if the dress is ready / call the garage for the school bus / call a friend’s mother to leave a message. Swap the roles!")],
      [fp("Call. Swap."),
       pAns("E.A.: Good morning, Rakoto Garage, Naly speaking… — This is Mamy, from the lycée. Could I speak to the mechanic, please?",
        ["Could I speak to"], { size: SZ.FICHE })],
      "Role play", "Cardboard phones"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Answer the phone of the library."),
       fp("2. Ask for Mrs Vola politely."),
       fp("3. Mrs Vola is absent: make the soft answer and propose the message.")],
      [fp("Answer."),
       pAns("E.A.: Good morning, Municipal Library, X speaking. How can I help you? — Could I speak to Mrs Vola, please? — I’m afraid she is not here. Would you like to leave a message?",
        ["I’m afraid"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  return [
    p([run("LESSON OF THE DAY — SESSION 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MAKING A POLITE PHONE CALL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    p([run("The four acts of the call:", { bold: true })], { after: 50 }),
    vocab("Good morning, X speaking.", "goude morning, X spiking", "ACT 1 — the receiver answers"),
    vocab("How can I help you?", "haou kane aï hèlpe iou", ""),
    vocab("This is Hanta.", "dhis iz Hanta", "ACT 2 — the caller says the name"),
    vocab("Could I speak to…, please?", "coude aï spike tou… plize", "more polite than Can I"),
    vocab("I’m afraid he is not here.", "aïme efréide hi iz note hire", "ACT 3 — the soft no"),
    vocab("Would you like to leave a message?", "oude iou laïke tou live e mèssidje", ""),
    vocab("He will call you back.", "hi ouile kol iou bake", "to call back = to return the call"),
    vocab("Hold on, please.", "hôoulde one, plize", "= wait a moment"),
    vocab("Thank you for your help. Goodbye!", "thank iou for iour hèlpe. goude-baï", "ACT 4 — the closing"),
    p("", { after: 60 }),
    box("THE GOLDEN MESSAGE", [
      bullet([run("name + number + request — ", { bold: true, color: C.RED }),
        run("This is Hanta Rabe, 034 12 345 67: we would like to book a bus for Friday.", { bold: true, color: C.BLUE })]),
      bullet([run("…and the receiver repeats it to check!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• on the phone: This is Hanta ✔ — I am Hanta ✘;"),
    p("• Could I…? opens more doors than Can I…?"),
  ];
}

// ---------- S29 — Listening: the phone call ----------
function ficheS29() {
  const meta = META("Listening: booking the school bus",
    "By the end of the lesson, learners will be able to understand a phone call and take the message correctly (name, number, request).",
    "3 / 6", "audio (QR code) or dialogue read aloud, message pad");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the four acts of a phone call, with one sentence each.")],
      [fp("Answer."),
       fp("E.A.: Good morning, X speaking… — Could I speak to…? — I’m afraid… a message? — Thank you, goodbye!")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("The message pad: draw it on the board — WHO called? FOR whom? NUMBER? REQUEST? This little paper saves offices every day. Today, YOU are the secretary!")],
      [fp("Copy the pad.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Booking the school bus ». By the end of this lesson, your message pad will be full and correct!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: who calls whom? why? Second listening — fill the pad: 1. Who called? 2. For whom? 3. The phone number? 4. The request (day, students, teachers)?")],
      [fp("Listen. Fill the pad."),
       pAns("E.A.: Hanta Rabe (lycée of Antsirabe) called Soleil Transport for Mr Solo; 034 12 345 67; a bus for Friday the 12th, thirty students and two teachers.",
        ["034 12 345 67"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listening hunt: hands up when you hear… an act 1 sentence! an I’m afraid! a Could…! the spelling of a name! the call back promise! Then listen and repeat the secretary’s lines — her calm is professional music!")],
      [fp("Listen. React. Repeat.")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("The secret of a good call: the receiver REPEATS the message (Friday the 12th, thirty students…) and the caller SPELLS the difficult name. Repeat + spell = zero mistakes!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pairs replay the call with new data: another company, another day, another number. The secretary fills a real message pad — then we check: zero mistakes?")],
      [fp("Act. Check the pad."),
       pAns("E.A.: — Could you spell your name, please? — V-O-L-A…",
        ["Could you spell your name, please?"], { size: SZ.FICHE })],
      "Role play", "Message pads"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Why does the secretary repeat “Friday the 12th, thirty students”?"),
       fp("2. What does Mr Solo have to do before five o’clock?"),
       fp("3. Give the four lines of a complete message pad.")],
      [fp("Answer."),
       pAns("E.A.: To check the message. — Call Hanta back. — who called, for whom, the number, the request.",
        ["Call Hanta back."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LESSON OF THE DAY — SESSION 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ON THE LINE: BOOKING THE SCHOOL BUS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    phoneCallBox(),
    p("", { after: 60 }),
    p([run("The message pad of the secretary:", { bold: true })], { after: 50 }),
    bullet([run("WHO called? — ", { bold: true }), run("Hanta Rabe, lycée of Antsirabe.", { bold: true, color: C.BLUE })]),
    bullet([run("FOR whom? — ", { bold: true }), run("Mr Solo.", { bold: true, color: C.BLUE })]),
    bullet([run("NUMBER? — ", { bold: true }), run("034 12 345 67.", { bold: true, color: C.BLUE })]),
    bullet([run("REQUEST? — ", { bold: true }), run("a bus, Friday the 12th, 30 students + 2 teachers.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE TWO ZERO-MISTAKE TOOLS", [
      bullet([run("The receiver repeats: ", { bold: true }), run("“Friday the 12th, thirty students, two teachers…”", { bold: true, color: C.BLUE })]),
      bullet([run("The caller spells: ", { bold: true }), run("“H-A-N-T-A, R-A-B-E.”", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S30 — The negative prefixes un- / in- ----------
function ficheS30() {
  const meta = META("The negative prefixes: un- and in- (im-, il-, ir-)",
    "By the end of the lesson, learners will be able to build and use opposite adjectives with the prefixes un- and in- and their variants im-, il-, ir-.",
    "4 / 6", "word cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Act 3 of the phone: the person is absent — your two sentences?")],
      [fp("Answer."),
       fp("E.A.: I’m afraid he is not here. Would you like to leave a message?")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The opposite duel: I say an adjective, you shout the opposite — big? happy? possible? polite? Some opposites need a NEW word (big/small)… and some just need a little hat on the head!")],
      [fp("Shout the opposites."),
       fp("E.A.: small — unhappy — impossible — impolite: the little hat!")],
      "Chain game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The negative prefixes ». By the end of this lesson, you will double your vocabulary with two little hats: un- and in-!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Two columns on the board: UN-: unhappy, unhealthy, unfair, unreliable, unemployed; IN-: incomplete, incorrect, invisible, informal. And three special cousins: im- before m/p (impossible, impolite, impatient), il- before l (illegal), ir- before r (irregular). What do all these hats mean?")],
      [fp("Observe. Compare."),
       fp("E.A.: they all mean NOT: unhappy = not happy.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The family rules: 1. the hat does not change the adjective’s job (a reliable source → an unreliable source); 2. im- + m/p, il- + l, ir- + r — the prefix copies the first letter’s family!; 3. warning: some words refuse the hat (not expensive → cheap, never “unexpensive”!). Link with the unit: an informal email, an incomplete message, an impolite caller…")],
      [fp("Build the rules."),
       fp("E.A.: the hat = not; im-/il-/ir- follow the first letter; some words refuse the hat.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: un- and in- (im-, il-, ir-) glue NOT on the adjective: unhappy, incorrect, impossible, illegal, irregular. Two hats, hundreds of new words!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The hat shop: word cards (happy, polite, possible, legal, regular, complete, patient, healthy, formal, reliable) — pairs put the right hat on each word, then use three of them in phone or letter sentences.")],
      [fp("Choose the hat. Use."),
       pAns("E.A.: impolite, impossible, illegal, irregular, incomplete, impatient… — Shouting on the phone is impolite!",
        ["impolite"], { size: SZ.FICHE })],
      "Pair work — game", "Word cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the opposite: polite, regular, legal, complete."),
       fp("2. Why im- for possible but un- for happy?"),
       fp("3. Use “unreliable” in a sentence about the news.")],
      [fp("Answer."),
       pAns("E.A.: impolite, irregular, illegal, incomplete. — im- goes before m/p; happy takes un-. — A source which never gives its name is unreliable.",
        ["irregular"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LESSON OF THE DAY — SESSION 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE NEGATIVE PREFIXES: UN- AND IN-", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("GRAMMAR"),
    box("THE TWO HATS AND THE THREE COUSINS", [
      bullet([run("UN- ", { bold: true, color: C.RED }), run("unhappy, unhealthy, unfair, unreliable, unemployed", { bold: true, color: C.BLUE })]),
      bullet([run("IN- ", { bold: true, color: C.RED }), run("incomplete, incorrect, invisible, informal", { bold: true, color: C.BLUE })]),
      bullet([run("IM- before m/p: ", { bold: true, color: C.RED }), run("impossible, impolite, impatient", { bold: true, color: C.BLUE })]),
      bullet([run("IL- before l: ", { bold: true, color: C.RED }), run("illegal", { bold: true, color: C.BLUE })]),
      bullet([run("IR- before r: ", { bold: true, color: C.RED }), run("irregular", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("One hat = NOT:", { bold: true })], { after: 50 }),
    bullet([run("a reliable source → ", { bold: true, color: C.BLUE }), run("an unreliable source", { bold: true, color: C.RED }), run(" (= you cannot trust it).")]),
    bullet([run("a formal letter → ", { bold: true, color: C.BLUE }), run("an informal message", { bold: true, color: C.RED }), run(" (= between friends).")]),
    bullet([run("a complete message → ", { bold: true, color: C.BLUE }), run("an incomplete message", { bold: true, color: C.RED }), run(" (= the number is missing!).")]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• some words refuse the hat: not expensive → cheap (unexpensive ✘);"),
    p("• the hat changes the meaning, never the grammar: an impolite caller, very impolite, more impolite…"),
  ];
}

// ---------- S31 — Reading: formal letter vs informal email ----------
function ficheS31() {
  const meta = META("Reading: the formal letter and the informal email",
    "By the end of the lesson, learners will be able to read a formal letter, find its information and compare its register with an informal email.",
    "5 / 6", "reading text (one per pair if possible)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The hat shop: opposite of formal, polite, complete?")],
      [fp("Answer."),
       fp("E.A.: informal, impolite, incomplete.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Two messages on the board: A. “Hi Lova! Party on Sat, bring juice! 😊 Mamy” — B. “Dear Mr Mayor, We are writing to ask…”. Same language? Who writes to whom?")],
      [fp("Compare."),
       fp("E.A.: A: friend to friend, relaxed; B: students to the mayor, serious!")],
      "Problem-solving", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « A formal letter to the mayor ». By the end of this lesson, you will read the formal music — and hear the difference with the informal one.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First reading — the gist: who writes to whom, and why? Second reading — the details: 1. What is the problem of the library? 2. How many students use it? 3. What do the students ask for? 4. What do they offer in return?")],
      [fp("Read. Answer."),
       pAns("E.A.: the T11 students write to the mayor to ask help for the library. 1. Small, old and incomplete books. 2. More than three hundred a week. 3. Shelves and some new books. 4. To paint the room and organise the books on Saturdays.",
        ["three hundred"], { size: SZ.FICHE })],
      "Individual reading", "Reading text"),
    stepRow(["4. Analysis"],
      [fp("The skeleton of the formal letter: the address and the date (top) → Dear Mr Mayor, → paragraph 1: who we are + why we write (We are writing to…) → paragraph 2: the problem + the polite request (We would be very grateful if…) → paragraph 3: the offer → the closing line (We look forward to your reply) → Yours faithfully. Hunt the formal tools in the text!")],
      [fp("Hunt the tools."),
       fp("E.A.: We are writing to…, We would be very grateful if…, we look forward to…, Yours faithfully.")],
      "Scanning technique", "Reading text"),
    stepRow(["5. Synthesis (post-reading)"],
      [fp("The two registers: INFORMAL: Hi!, short words, smileys, Love/See you; FORMAL: Dear Sir/Madam, complete sentences, no smileys, Yours faithfully. Same message, two costumes — choose the costume of the reader!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The translator of registers: pairs rewrite the informal message A as a short formal email to the director (an invitation to the end-of-year party). Three formal tools minimum!")],
      [fp("Rewrite."),
       pAns("E.A.: Dear Sir, We are writing to invite you to the end-of-year party of the T11 class… We look forward to your presence. Yours faithfully, …",
        ["We are writing to"], { size: SZ.FICHE })],
      "Pair work", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Quote the polite request of the letter."),
       fp("2. Give the formal closing pair (line + signature formula)."),
       fp("3. Give two differences between the formal and the informal register.")],
      [fp("Answer."),
       pAns("E.A.: “We would be very grateful if the commune could offer shelves and some new books.” — We look forward to your reply + Yours faithfully. — Dear Sir vs Hi!; complete sentences vs short words and smileys.",
        ["Yours faithfully"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LESSON OF THE DAY — SESSION 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FORMAL LETTER AND THE INFORMAL EMAIL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    letterBox(),
    p("", { after: 60 }),
    rubricBadge("VOCABULARY"),
    p([run("Glossary — the formal tools:", { bold: true })], { after: 50 }),
    vocab("We are writing to…", "oui are raïting tou", "the reason of the letter"),
    vocab("We would be very grateful if…", "oui oude bi vèri gréitfoul ife", "the polite request"),
    vocab("We look forward to your reply.", "oui louke forouorde tou iour riplaï", "the elegant closing line"),
    vocab("Yours faithfully,", "iourze féithfouli", "signature after Dear Sir/Madam"),
    vocab("Yours sincerely,", "iourze sinnsirli", "signature after Dear Mr Solo (named!)"),
    p("", { after: 60 }),
    rubricBadge("GRAMMAR"),
    box("THE TWO REGISTERS", [
      bullet([run("INFORMAL — ", { bold: true, color: C.RED }), run("Hi Lova! short words, smileys, See you! Love,", { bold: true, color: C.BLUE })]),
      bullet([run("FORMAL — ", { bold: true, color: C.RED }), run("Dear Sir/Madam, complete sentences, no smileys, Yours faithfully,", { bold: true, color: C.BLUE })]),
      bullet([run("→ same message, two costumes: dress for the reader!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S32 — Writing: my formal letter ----------
function ficheS32() {
  const meta = META("Writing: my formal letter",
    "By the end of the lesson, learners will be able to write a complete formal letter (request letter) with the right layout and register.",
    "6 / 6", "letter plan on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the skeleton of the formal letter, from the date to the signature.")],
      [fp("Answer."),
       fp("E.A.: address + date — Dear… — who we are / why we write — problem + polite request — offer — closing line — Yours faithfully.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Request market: what does our class really need? New balls for sport? Books? A visit to the radio station? Choose ONE real request and ONE real receiver (the director, the mayor, a company…).")],
      [fp("Choose. Vote.")], "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My formal letter ». By the end of this lesson, your letter will be ready to travel — with its best costume!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The letter map on the board: ① top right: place + date ② Dear + title, ③ §1 who we are + We are writing to… ④ §2 the problem + We would be very grateful if… ⑤ §3 the offer in return ⑥ the closing line ⑦ Yours faithfully + signature. Check the map in the mayor letter!")],
      [fp("Check the model."),
       fp("E.A.: all the floors are there!")],
      "Guided observation", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Each student writes the first draft (8 to 12 lines) with the map. I walk and help: the register! No “Hi”, no smileys, complete sentences — and ONE polite request, clear as water.")],
      [fp("Write the first draft.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Peer check: exchange drafts. The checklist: date? Dear + title? We are writing to…? polite request? offer? closing line? Yours faithfully? Seven boxes — seven ticks!")],
      [fp("Check the neighbour’s draft."),
       fp("E.A.: “Six ticks! But where is your date?”")],
      "Peer correction", "Checklists"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Final copy with the real layout (date at the top right!). The best letter of the class is REALLY sent to the receiver — because a formal letter is not an exercise: it is a key!")],
      [fp("Copy. Send."),
       pAns("E.A.: Dear Madam Director, We are writing to ask for two new footballs…",
        ["We are writing to"], { size: SZ.FICHE })],
      "Whole-class work", "Envelope!"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the opening paragraph (two sentences) of a letter to a bookshop: your class asks for a discount on dictionaries.")],
      [fp("Write."),
       pAns("E.A.: Dear Sir, We are the students of the T11 class of the lycée of Ampefy. We are writing to ask if your bookshop could offer a discount on dictionaries for our class.",
        ["We are writing to ask"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}
function lessonS32() {
  return [
    p([run("LESSON OF THE DAY — SESSION 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY FORMAL LETTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    box("THE MAP OF THE FORMAL LETTER", [
      bullet([run("① Top right — ", { bold: true }), run("place + date: Ampefy, 14 October 2026", { bold: true, color: C.BLUE })]),
      bullet([run("② The greeting — ", { bold: true }), run("Dear Mr Mayor, / Dear Sir or Madam,", { bold: true, color: C.BLUE })]),
      bullet([run("③ §1 — ", { bold: true }), run("who we are + We are writing to…", { bold: true, color: C.BLUE })]),
      bullet([run("④ §2 — ", { bold: true }), run("the problem + We would be very grateful if…", { bold: true, color: C.BLUE })]),
      bullet([run("⑤ §3 — ", { bold: true }), run("the offer in return.", { bold: true, color: C.BLUE })]),
      bullet([run("⑥ The closing line — ", { bold: true }), run("We look forward to your reply.", { bold: true, color: C.BLUE })]),
      bullet([run("⑦ The signature — ", { bold: true }), run("Yours faithfully, + the name.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE COSTUME CHECK", [
      bullet([run("Dear Sir or Madam → ", { bold: true }), run("Yours faithfully", { bold: true, color: C.RED }), run("  (unknown name)")]),
      bullet([run("Dear Mr Solo → ", { bold: true }), run("Yours sincerely", { bold: true, color: C.RED }), run("  (known name)")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• one letter = one request — do not ask for ten things;"),
    p("• no contractions in the formal letter: we are ✔ — we’re ✘;"),
    p("• read your letter aloud before sending: the ear hears the mistakes!"),
  ];
}

// ---------- The big lesson ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 4", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The means of communication"),
    bullet([run("The letter (official), the call (urgent), the SMS (short), the email (fast and serious).", { bold: true, color: C.BLUE })]),
    bullet([run("The verbs: ", { bold: true }), run("send/receive, make/answer a call, reply, attach.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The polite phone call"),
    bullet([run("The four acts: ", { bold: true }), run("Good morning, X speaking — This is…, could I speak to…? — I’m afraid…, a message? — Thank you, goodbye!", { bold: true, color: C.BLUE })]),
    bullet([run("The golden message: ", { bold: true }), run("name + number + request — repeated and spelled!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The negative prefixes"),
    bullet([run("UN-: unhappy, unreliable — IN-: incomplete, informal — IM- (m/p): impossible, impolite — IL- (l): illegal — IR- (r): irregular.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The two registers"),
    bullet([run("Informal: Hi!, smileys, See you! — Formal: Dear Sir/Madam, complete sentences, Yours faithfully.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The formal letter"),
    bullet([run("The map: ", { bold: true }), run("date → Dear… → We are writing to… → We would be very grateful if… → the offer → We look forward to your reply → Yours faithfully.", { bold: true, color: C.BLUE })], { after: 100 }),
  ];
}

// ---------- Exercises ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Choose the right means and justify: 1. invite grandmother to the ceremony 2. ask the mayor for new books 3. tell a friend the match time 4. apply for a scholarship.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("The phone call: 1. answer the phone of the garage 2. ask for the mechanic politely 3. he is absent: soft answer + message proposal 4. close the call.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put the right hat (un-, in-, im-, il-, ir-): 1. polite 2. regular 3. complete 4. healthy — and use two of them in sentences.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Formal or informal? Rewrite in the OTHER register: 1. “Hi Sir! Need books, thx!” 2. “We look forward to your reply.” 3. Give the signature for Dear Sir or Madam. 4. Give the signature for Dear Mrs Vola.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short formal letter (8 to 10 lines) to the director: your class asks for one hour of library per week. Follow the map!")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: a call (warm) — a letter (official) — an SMS (short) — an email (fast, serious, documents). (1 pt each)", ["a letter"]),
    pAns("Exercise 2 (models): Good morning, Rakoto Garage, X speaking. How can I help you? — Could I speak to the mechanic, please? — I’m afraid he is not here. Would you like to leave a message? — Thank you for your help. Goodbye! (1 pt each)", ["Could I speak to"]),
    pAns("Exercise 3: impolite — irregular — incomplete — unhealthy (+ two correct sentences). (1 pt each)", ["unhealthy"]),
    pAns("Exercise 4: 1. Dear Sir, we are writing to ask for books… 2. “Reply soon! See you!” 3. Yours faithfully. 4. Yours sincerely. (1 pt each)", ["Yours sincerely"]),
    pAns("Exercise 5: map complete (date + Dear 1 pt, We are writing to 1 pt, polite request 1 pt, closing + Yours faithfully 1 pt).", ["map"]),
  ];
}

// ---------- Revision (S33) ----------
function revision() {
  return [
    B.bookmarkTitle("s33", "SESSION 33 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give four means of communication and the rule of the right vehicle."),
    pAns("E.A.: letter, call, SMS, email — urgent → call; official → letter/email; short → SMS.", ["email"]),
    p("2. Answer the phone of the library, then ask for Mrs Vola politely."),
    pAns("E.A.: Good morning, Municipal Library, X speaking. How can I help you? — Could I speak to Mrs Vola, please?", ["Could I speak to"]),
    p("3. The person is absent: give the two sentences of Act 3."),
    pAns("E.A.: I’m afraid she is not here. Would you like to leave a message?", ["I’m afraid"]),
    p("4. Give the three parts of the golden message — and the two zero-mistake tools."),
    pAns("E.A.: name + number + request — the receiver repeats, the caller spells.", ["request"]),
    p("5. On the phone: “I am Hanta” or “This is Hanta”?"),
    pAns("E.A.: This is Hanta!", ["This is Hanta!"]),
    p("6. Put the right hat: polite, legal, regular, complete, healthy."),
    pAns("E.A.: impolite, illegal, irregular, incomplete, unhealthy.", ["illegal"]),
    p("7. Why im- for “possible” — and which words refuse the hat?"),
    pAns("E.A.: im- before m/p; expensive refuses: not expensive → cheap.", ["cheap"]),
    p("8. Give three formal tools of the letter."),
    pAns("E.A.: We are writing to…, We would be very grateful if…, We look forward to your reply.", ["We are writing to"]),
    p("9. Dear Sir or Madam → which signature? Dear Mr Solo → which signature?"),
    pAns("E.A.: Yours faithfully — Yours sincerely.", ["Yours faithfully"]),
    p("10. Give the seven floors of the map of the formal letter."),
    pAns("E.A.: date — Dear… — who we are/why — problem + polite request — offer — closing line — signature.", ["polite request"]),
  ];
}

// ---------- Test paper (S34) ----------
function testPaper() {
  return [
    B.bookmarkTitle("s34", "SESSION 34 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T11 TEST PAPER — UNIT 4: COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with: voicemail — attach — reply — hold on. 1. Please …, Mr Solo is coming. 2. Don’t forget to … the document to the email. 3. We must … to the mayor’s letter. 4. Leave a message on the … after the beep.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Write the four acts of a call to the bookshop: you want to speak to the manager about a discount; he is absent; leave the golden message (name + number + request).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The hats: 1. opposite of patient 2. opposite of reliable 3. opposite of legal 4. correct this sentence: “This phone is unexpensive.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Register: 1. rewrite formally: “Hi! Want books. Thx!” 2. rewrite informally: “We look forward to your reply.” 3. the signature after Dear Sir or Madam? 4. one rule of the formal costume.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a formal letter (8 to 12 lines) to a transport company: your class asks for a bus for the school trip — follow the whole map, from the date to Yours faithfully.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: hold on — attach — reply — voicemail. (1 pt each)", ["voicemail"]),
    pAns("Ex.2 (model): Good morning, X Bookshop, Y speaking… — This is…, could I speak to the manager, please? — I’m afraid… a message? — This is…, 034…, we would like to ask about a discount… Thank you, goodbye! (1 pt per act)", ["the manager"]),
    pAns("Ex.3: impatient — unreliable — illegal — This phone is cheap / is not expensive. (1 pt each)", ["impatient"]),
    pAns("Ex.4 (models): Dear Sir, we are writing to ask for books… — “Reply soon, see you!” — Yours faithfully. — complete sentences, no smileys, no contractions. (1 pt each)", ["no smileys"]),
    pAns("Ex.5: map complete (date + Dear 1 pt; We are writing to + request 1 pt; offer + closing line 1 pt; Yours faithfully + register 1 pt).", ["Yours faithfully"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...ficheS32(), pageBreak(), ...lessonS32(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can choose the right means for the right message.",
      "I can answer the phone: Good morning, X speaking. How can I help you?",
      "I can ask for someone politely: Could I speak to…, please?",
      "I can leave the golden message: name + number + request.",
      "I can build the opposites: impolite, unreliable, incomplete, illegal.",
      "I can hear the difference between formal and informal.",
      "I can use the formal tools: We are writing to…, We would be very grateful if…",
      "I can write a complete formal letter, from the date to Yours faithfully.",
    ], "NEXT STOP → UNIT 5: JOB SKILLS!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
