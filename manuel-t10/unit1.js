// T10 — UNIT 1 — MEETING NEW PEOPLE (8 séances + révision + test) — Sessions 1 à 10 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu lycée
const SHADE = "D6EAF8";
const TOTAL = 88;
const AUDIO = {
  meeting: "https://drive.google.com/uc?export=download&id=1p-6fou5QFYrVMFUFYsV3V6ObR1-u2puJ",
  chores: "https://drive.google.com/uc?export=download&id=1lLt_ubUNGFH2_SL7CzcXt0WtOk125PZs",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — MEETING NEW PEOPLE", title, slo,
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
function meetingDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE MEETING DIALOGUE (listening passage)", [
    L("Mamy", "Good morning! Welcome to our lycée!"),
    L("Tina", "Good morning! Thank you very much."),
    L("Mamy", "My name is Mamy. What’s your name?"),
    L("Tina", "I’m Tina. Nice to meet you!"),
    L("Mamy", "Nice to meet you too! Where are you from, Tina?"),
    L("Tina", "I’m from Toliara, in the south. And you?"),
    L("Mamy", "I’m from Antananarivo. Oh, sorry! I’m late. I must go to class now!"),
    L("Tina", "No problem! I really enjoy talking with you."),
    L("Mamy", "Me too! Meeting new people is a pleasure. But we have to hurry. See you later!"),
    L("Tina", "Goodbye! Have a nice day!"),
  ]);
}
function faraDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("GETTING TO KNOW FARA (listening passage)", [
    L("Joe", "Hello! I’m Joe, from the school newspaper. Can I ask you some questions?"),
    L("Fara", "Of course! Go ahead."),
    L("Joe", "What’s your full name?"),
    L("Fara", "My name is Fara Rasoa."),
    L("Joe", "How old are you, and where do you live?"),
    L("Fara", "I’m fifteen years old. I live at 12, Independence Avenue, in Antsirabe."),
    L("Joe", "What do you do every morning?"),
    L("Fara", "Every morning, I sweep the yard, I fetch water and I feed the chickens. Then I go to school."),
    L("Joe", "And what are you doing right now?"),
    L("Fara", "Right now, I am watering the plants, and I am talking to you!"),
    L("Joe", "What are your hobbies?"),
    L("Fara", "I like reading stories and playing basketball."),
    L("Joe", "Thank you, Fara! Getting to know you was a pleasure!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 1 — MEETING NEW PEOPLE", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Hello, lycée! Nice to meet you!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_meeting.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• greet, welcome people and take leave;"),
    p("• apologise and reply to apologies;"),
    p("• say where I am from and ask where people are from;"),
    p("• introduce myself and introduce people;"),
    p("• ask and give personal information, daily chores and hobbies;"),
    p("• use the gerund, must / have to, and the two presents;"),
    p("• write a first-meeting dialogue with and, also, but, however.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, collaboration.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("A new school, new faces, new friends! The first days of the lycée are full of first conversations. After this unit, you can start any of them in English: Hello! I’m… Where are you from? Nice to meet you!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u1_meeting.png", label: "The meeting dialogue — listen and repeat", url: AUDIO.meeting },
      { qr: "qr_t10_u1_chores.png", label: "Getting to know Fara — listen and repeat", url: AUDIO.chores },
    ], COLOR),
  ];
}

// ---------- S1 — Greetings, welcoming, taking leave ----------
function ficheS1() {
  const meta = META("Greetings, welcoming and taking leave",
    "By the end of the lesson, learners will be able to greet, welcome people and take leave with the adequate register.",
    "1 / 8", "greeting cards, clock drawing");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("First English class of the lycée! Quick fire: say any English word you remember from the collège — one word each, no repeats!")],
      [fp("Answer."),
       fp("E.A.: hello, goodbye, thank you, teacher, friend…")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I walk around the class and shake hands: “Good morning! Welcome!” Each student answers with any greeting he knows.")],
      [fp("Shake hands. Answer.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Greetings, welcoming and taking leave ». By the end of this lesson, you will open and close a conversation like a native!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("I draw three clocks on the board: 8 a.m., 2 p.m., 8 p.m. Which greeting goes with which clock? Good morning — Good afternoon — Good evening. And which one is for LEAVING? (Good night!)")],
      [fp("Match."),
       fp("E.A.: 8 a.m. → Good morning; 2 p.m. → Good afternoon; 8 p.m. → Good evening; Good night = goodbye at night!")],
      "Whole-class work", "Clock drawing"),
    stepRow(["4. Analysis"],
      [fp("Two registers! To a friend: Hi! How are you? — To the headmaster: Good morning, Sir. How do you do? Sort the cards: FRIEND or FORMAL?")],
      [fp("Sort the cards."),
       fp("E.A.: Hi! / What’s up? → friend; How do you do? / Welcome, Madam → formal.")],
      "Pair work", "Greeting cards"),
    stepRow(["5. Synthesis"],
      [fp("So: greetings by the clock, the friendly and the formal register, welcoming (Welcome to our lycée!) and taking leave (See you later! Have a nice day!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play chain: student A greets B formally, B answers; B greets C like a friend, C answers; C takes leave of D… all around the class!")],
      [fp("Role play."),
       pAns("E.A.: Good morning, Sir! — Good morning! Welcome! — Hi, Tina! How are you? — Fine, thanks! — See you later! — Bye! Take care!",
        ["See you later!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Greet your teacher at 3 p.m."),
       fp("2. Welcome a new student to the class."),
       fp("3. Take leave of a friend.")],
      [fp("Answer."),
       pAns("E.A.: Good afternoon, Sir/Madam. — Welcome to our class! — Bye! See you tomorrow!",
        ["Welcome to our class!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LESSON OF THE DAY — SESSION 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("GREETINGS, WELCOMING AND TAKING LEAVE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_meeting.png", 400, 768 / 1376),
    p([run("Greetings by the clock:", { bold: true })], { after: 30 }),
    vocab("Good morning!", "goude môrningue", "before 12"),
    vocab("Good afternoon!", "goude afteurnoune", "12 → 6 p.m."),
    vocab("Good evening!", "goude ivningue", "after 6 p.m."),
    vocab("Good night!", "goude naïte", "only to LEAVE at night!"),
    p([run("With a friend:", { bold: true })], { after: 30 }),
    vocab("Hi! / Hello! How are you?", "haï / hèlôou — haou âr iou"),
    vocab("Fine, thanks! And you?", "faïne thannks — annde iou"),
    p([run("Formal (teacher, headmaster, guest):", { bold: true })], { after: 30 }),
    vocab("Good morning, Sir / Madam.", "goude môrningue seur / madame"),
    vocab("How do you do?", "haou dou iou dou", "very formal first meeting"),
    p([run("Welcoming:", { bold: true })], { after: 30 }),
    vocab("Welcome to our lycée!", "ouèlkeume tou aour lissé"),
    vocab("Make yourself at home.", "méik iôrsèlf ate hôoume"),
    p([run("Taking leave:", { bold: true })], { after: 30 }),
    vocab("Goodbye! / Bye!", "goudbaï / baï"),
    vocab("See you later! / See you tomorrow!", "si iou léiteur / toumorôou"),
    vocab("Have a nice day! Take care!", "have e naïce déi — téik kèr"),
  ];
}

// ---------- S2 — Apologising + Where are you from? ----------
function ficheS2() {
  const meta = META("Apologising and saying where you are from",
    "By the end of the lesson, learners will be able to apologise, reply to apologies, and ask and state where someone is from.",
    "2 / 8", "map of Madagascar / world map");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Greet the class at 9 a.m., then at 7 p.m."),
       fp("2. Take leave of your friend.")],
      [fp("Answer."),
       fp("E.A.: Good morning! / Good evening! — Bye, see you tomorrow!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I “accidentally” drop a student’s pen and say: Oh, I’m so sorry! The student answers… what? Let’s find out!")],
      [fp("React.")], "Using realia", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Apologising and saying where you are from ». By the end of this lesson, you will repair any small accident with words — and tell the whole island where you come from!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Board: three apologies (Sorry! — I’m so sorry! — I apologise for being late.) and three replies (No problem! — That’s all right! — Never mind!). Which apology is the strongest?")],
      [fp("Observe. Compare."),
       fp("E.A.: “I apologise for…” is the strongest and most formal.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("On the map: I point to Toliara → She is FROM Toliara. Antsirabe → He is FROM Antsirabe. The machine: Where are you from? → I’m from + place. Note: apologise FOR + verb-ing (for being late, for coming late)!")],
      [fp("Observe. Answer."),
       fp("E.A.: Where are you from? — I’m from Mahajanga. / I apologise for being late.")],
      "Whole-class work", "Map"),
    stepRow(["5. Synthesis"],
      [fp("So: the three levels of sorry, the three friendly replies, and the question machine: Where are you from? — I’m from…")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mingle! Walk around the class: bump gently into a schoolmate (sorry!), then ask where he/she is from. Three meetings each!")],
      [fp("Mingle. Speak."),
       pAns("E.A.: Oh, sorry! — No problem! — By the way, where are you from? — I’m from Fianarantsoa!",
        ["No problem!"], { size: SZ.FICHE })],
      "Communicative activity", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. You arrive late at class: apologise formally."),
       fp("2. Your friend says “I’m so sorry!”: reply."),
       fp("3. Ask your neighbour where he/she is from, and write his/her answer.")],
      [fp("Answer."),
       pAns("E.A.: I apologise for being late. — Never mind! — Where are you from? She is from Toamasina.",
        ["I apologise for being late."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LESSON OF THE DAY — SESSION 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("SORRY! — AND WHERE ARE YOU FROM?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Apologising (three levels):", { bold: true })], { after: 30 }),
    vocab("Sorry!", "sori", "small accident"),
    vocab("I’m so sorry!", "aïme sôou sori", "bigger!"),
    vocab("I apologise for being late.", "aï epolodjaïze fôr biinng léite", "formal — apologise FOR + verb-ing"),
    p([run("Replying to apologies:", { bold: true })], { after: 30 }),
    vocab("No problem!", "nôou probleume"),
    vocab("That’s all right!", "dhats ôl raïte"),
    vocab("Never mind!", "nèveur maïnnde"),
    p([run("Where are you from?", { bold: true })], { after: 30 }),
    vocab("Where are you from?", "ouèr âr iou frome"),
    vocab("I’m from Toliara.", "aïme frome toliara"),
    vocab("She is from Antsirabe. He comes from Mahajanga.", "chi ize frome — hi keumz frome"),
    p("", { after: 60 }),
    box("THE MINI DIALOGUE", [
      bullet([run("A — ", { bold: true, color: COLOR }), run("Oh, sorry!")]),
      bullet([run("B — ", { bold: true, color: COLOR }), run("No problem! By the way, where are you from?")]),
      bullet([run("A — ", { bold: true, color: COLOR }), run("I’m from Fianarantsoa. And you?")]),
      bullet([run("B — ", { bold: true, color: COLOR }), run("I’m from Antananarivo. Nice to meet you!")], { after: 20 }),
    ]),
  ];
}

// ---------- S3 — Listening: meeting new people ----------
function ficheS3() {
  const meta = META("Listening: meeting new people",
    "By the end of the lesson, learners will be able to give the gist and detailed information of an oral dialogue on meeting new people.",
    "3 / 8", "audio (QR code) or dialogue read aloud, picture of the dialogue");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Apologise for arriving late."),
       fp("2. Ask your friend where he is from.")],
      [fp("Answer."),
       fp("E.A.: I apologise for being late. — Where are you from?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe the picture: two students in a school yard. What are they doing? What are they saying, in your opinion? Predict!")],
      [fp("Describe. Predict."),
       fp("E.A.: they are shaking hands; maybe they say hello / nice to meet you…")],
      "Using audio-visual aids", "Picture of the dialogue"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « The meeting dialogue ». By the end of this lesson, you will catch the gist and the details of a first conversation in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: who speaks? where? happy or angry? Second listening — the details: 1. Where is Tina from? 2. Where is Mamy from? 3. Why does Mamy apologise?")],
      [fp("Listen. Answer."),
       pAns("E.A.: two students at the lycée, friendly. 1. Toliara. 2. Antananarivo. 3. Because he is late and must go to class.",
        ["Toliara"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listen again and repeat each line after the audio — same music, same speed! Then two students act the dialogue in front of the class.")],
      [fp("Listen. Repeat. Act.")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("So the skeleton of a first conversation: greeting → names → where from → apology (if needed!) → taking leave. Keep this skeleton: EVERY first conversation uses it!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("New situations: at the market, at church, at a football match. Pairs build the same skeleton with new places and new names, then act it out.")],
      [fp("Build. Act."),
       pAns("E.A.: Good afternoon! Welcome to the stadium! I’m Hery. Where are you from? …",
        ["Welcome to the stadium!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In the dialogue: who is from the south?"),
       fp("2. What does Tina answer to the apology?"),
       fp("3. Give the five steps of the skeleton.")],
      [fp("Answer."),
       pAns("E.A.: Tina. — No problem! — greeting, names, where from, apology, taking leave.",
        ["No problem!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LESSON OF THE DAY — SESSION 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MEETING DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    meetingDialogueBox(),
    p("", { after: 60 }),
    p([run("The skeleton of a first conversation:", { bold: true })], { after: 50 }),
    bullet([run("1. Greeting — ", { bold: true }), run("Good morning! Welcome!", { bold: true, color: C.BLUE })]),
    bullet([run("2. Names — ", { bold: true }), run("My name is… What’s your name? Nice to meet you!", { bold: true, color: C.BLUE })]),
    bullet([run("3. Where from — ", { bold: true }), run("Where are you from? I’m from…", { bold: true, color: C.BLUE })]),
    bullet([run("4. Apology if needed — ", { bold: true }), run("Sorry! I must go. — No problem!", { bold: true, color: C.BLUE })]),
    bullet([run("5. Taking leave — ", { bold: true }), run("See you later! Have a nice day!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u1_meeting.png", label: "The meeting dialogue — listen and repeat", url: AUDIO.meeting }], COLOR),
  ];
}

// ---------- S4 — Grammar: gerund + must/have to ----------
function ficheS4() {
  const meta = META("Grammar from the dialogue: the gerund, must and have to",
    "By the end of the lesson, learners will be able to find out and use the gerund and the verbs “must” and “have to” from dialogue extracts.",
    "4 / 8", "dialogue extracts on cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the five steps of the first-conversation skeleton."),
       fp("2. Why does Mamy apologise in the dialogue?")],
      [fp("Answer."),
       fp("E.A.: greeting, names, where from, apology, taking leave — he is late.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Finish my sentence with one word: “I enjoy… ” (dancing? singing? eating?) Each student adds his own -ing word!")],
      [fp("Complete.")], "Using games", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The gerund, must and have to ». By the end of this lesson, you will catch two machines hidden in the meeting dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Dialogue extracts on the board: “I really enjoy talkING with you.” — “MeetING new people is a pleasure.” — “I MUST go to class now!” — “We HAVE TO hurry.” Underline the special forms. What do you notice?")],
      [fp("Observe. Underline."),
       fp("E.A.: talking / meeting end in -ing; must and have to + base verb.")],
      "Contextualisation of grammar", "Extract cards"),
    stepRow(["4. Analysis"],
      [fp("Machine 1 — THE GERUND: verb + -ing used like a NAME: after enjoy/like/love (I enjoy talking) and as a subject (Meeting new people is a pleasure). Machine 2 — OBLIGATION: must + base verb (from inside me) / have to + base verb (from the rules). Negative alert: mustn’t = interdiction!")],
      [fp("Observe. Compare."),
       fp("E.A.: I enjoy reading; Swimming is good; I must go; We have to wear the uniform.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: gerund = verb-ing as a name (after enjoy, like, love, and as subject); must / have to = obligation; mustn’t = don’t do it!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Build-a-dialogue: pairs write a 4-line meeting dialogue that contains ONE gerund and ONE must or have to — then act it out.")],
      [fp("Write. Act."),
       pAns("E.A.: — I enjoy playing basketball! — Me too! But we must go, the bell is ringing! …",
        ["I enjoy playing basketball!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: … (swim) in the sea is my favourite hobby."),
       fp("2. Complete: Students … wear the school uniform (rule)."),
       fp("3. Complete: It’s late, I … go home now (from inside me).")],
      [fp("Answer."),
       pAns("E.A.: Swimming — have to — must.",
        ["Swimming"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LESSON OF THE DAY — SESSION 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE GERUND — MUST AND HAVE TO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("MACHINE 1 — THE GERUND (verb + -ing used like a name)", [
      bullet([run("After enjoy / like / love: ", { bold: true }), run("I enjoy talking with you. I like reading.", { bold: true, color: C.BLUE })]),
      bullet([run("As a subject: ", { bold: true }), run("Meeting new people is a pleasure. Swimming is good for you.", { bold: true, color: C.BLUE })]),
      bullet([run("After a preposition: ", { bold: true }), run("I apologise for being late.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MACHINE 2 — MUST AND HAVE TO (obligation)", [
      bullet([run("must + base verb ", { bold: true, color: C.BLUE }), run("— the obligation comes from ME: I must go now!")]),
      bullet([run("have to + base verb ", { bold: true, color: C.BLUE }), run("— the obligation comes from the RULES: We have to wear the uniform.")]),
      bullet([run("mustn’t ", { bold: true, color: C.RED }), run("= interdiction: You mustn’t be late!")]),
      bullet([run("don’t have to ", { bold: true, color: C.BLUE }), run("= no obligation: We don’t have to come on Sunday.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("From the dialogue:", { bold: true })], { after: 50 }),
    bullet([...kw("I really enjoy talking with you.", "aï rili inndjoï tôkinng ouidh iou")]),
    bullet([...kw("I must go to class now!", "aï meuste gôou tou klass naou")]),
    bullet([...kw("We have to hurry.", "oui have tou heuri")]),
  ];
}

// ---------- S5 — Introducing yourself and others ----------
function ficheS5() {
  const meta = META("Introducing yourself and others — personal information",
    "By the end of the lesson, learners will be able to introduce themselves, introduce people, and ask and state personal information.",
    "5 / 8", "personal information form");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I enjoy … (play) football."),
       fp("2. Complete: Students … arrive on time (rule).")],
      [fp("Answer."),
       fp("E.A.: playing — have to.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I introduce myself with THREE facts: My name is… I’m from… I’m … years old. Then I point to a student: your turn!")],
      [fp("Introduce yourself.")], "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Introducing yourself and others ». By the end of this lesson, you will present yourself AND your friend with full personal information.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Board: the ID card of Fara (name: Fara Rasoa / age: 15 / address: 12, Independence Avenue, Antsirabe / hobby: basketball). Which question gives each answer? What’s your name? How old are you? Where do you live? What are your hobbies?")],
      [fp("Match."),
       fp("E.A.: name → What’s your name?; 15 → How old are you?; address → Where do you live?…")],
      "Whole-class work", "ID card drawing"),
    stepRow(["4. Analysis"],
      [fp("Introducing OTHERS: This is my friend Hery. He is from Toliara. He is sixteen. Let me introduce Soa: she lives in Analakely. Watch the small words: HE for a boy, SHE for a girl, and the -s of lives!")],
      [fp("Observe. Compare."),
       fp("E.A.: This is…; He/She is from…; He/She lives in…")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the four ID questions, introducing myself (I’m…), introducing people (This is… / Let me introduce…), and the answer: Nice to meet you!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview and present! Pairs: A asks B the four ID questions and fills a form; then A presents B to the class: “This is… He is from…”")],
      [fp("Interview. Present."),
       pAns("E.A.: This is Niry. She is fifteen. She is from Ambositra. She lives near the market. She likes singing.",
        ["This is Niry."], { size: SZ.FICHE })],
      "Personalisation technique", "Information form"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write your three-fact self-introduction."),
       fp("2. Introduce your neighbour with two facts.")],
      [fp("Answer."),
       pAns("E.A.: My name is…, I’m from…, I’m 15. — This is…, he lives in…, he likes football.",
        ["This is"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LESSON OF THE DAY — SESSION 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("INTRODUCING YOURSELF AND OTHERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The four ID questions:", { bold: true })], { after: 30 }),
    vocab("What’s your (full) name?", "ouats iôr foule néime"),
    vocab("How old are you?", "haou ôoulde âr iou"),
    vocab("Where do you live?", "ouèr dou iou live"),
    vocab("What are your hobbies?", "ouate âr iôr hobiz"),
    p([run("Introducing myself:", { bold: true })], { after: 30 }),
    vocab("My name is… / I’m…", "maï néime ize / aïme"),
    vocab("I’m fifteen (years old).", "aïme fiftine"),
    vocab("I live at 12, Independence Avenue.", "aï live ate touèlve inndipènndeunnce aveniou"),
    p([run("Introducing people:", { bold: true })], { after: 30 }),
    vocab("This is my friend Hery.", "dhisse ize maï frènnde"),
    vocab("Let me introduce Soa.", "lète mi inntrodiouce"),
    vocab("He is from… / She lives in…", "hi ize frome / chi livz inn", "watch the -s!"),
    vocab("Nice to meet you! — Nice to meet you too!", "naïce tou mite iou"),
    p("", { after: 60 }),
    box("MY MODEL PRESENTATION", [
      p("This is Niry. She is fifteen years old. She is from Ambositra, but she lives near the market now. She likes singing and playing basketball. Nice to meet her? Of course!", { after: 40 }),
    ]),
  ];
}

// ---------- S6 — Listening: getting to know Fara ----------
function ficheS6() {
  const meta = META("Listening: getting to know Fara — the two presents",
    "By the end of the lesson, learners will be able to comprehend an oral dialogue on personal information and daily chores and use the present simple and the present continuous.",
    "6 / 8", "audio (QR code) or dialogue read aloud, picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the four ID questions."),
       fp("2. Introduce your neighbour (two facts).")],
      [fp("Answer."),
       fp("E.A.: What’s your name? How old are you?… — This is…, she lives…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Guess from the picture: a girl sweeping, fetching water, feeding chickens, reading. What is the dialogue about, in your opinion?")],
      [fp("Guess."),
       fp("E.A.: her daily activities / chores and hobbies.")],
      "Using audio-visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Getting to know Fara ». By the end of this lesson, you will hear the difference between EVERY DAY and RIGHT NOW — the two presents!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. How old is Fara, and where does she live? 2. What does she do every morning (three chores)? 3. What is she doing right now? 4. What are her hobbies?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. 15, Antsirabe. 2. She sweeps the yard, fetches water, feeds the chickens. 3. She is watering the plants and talking to Joe. 4. Reading and basketball.",
        ["She sweeps the yard"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Two columns on the board! EVERY MORNING: I sweep, I fetch, I feed → present simple (habits). RIGHT NOW: I am watering, I am talking → present continuous (am/is/are + -ing). The time words are the keys: every day/morning ↔ now, right now, at the moment!")],
      [fp("Observe. Classify."),
       fp("E.A.: habits → present simple; now → present continuous.")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("So: present simple = habits (watch the -s: she sweepS!); present continuous = right now (am/is/are + verb-ing). Ask the two magic questions: What do you do every morning? / What are you doing right now?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pairs: ask each other the two magic questions and one hobby question — then share one answer with the class: “Every morning, Bodo sweeps the yard. Right now, she is listening to me!”")],
      [fp("Ask. Share."),
       pAns("E.A.: Every morning I fetch water. Right now I am writing. My hobby is playing football.",
        ["Right now I am writing."], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: Every day, Fara … (feed) the chickens."),
       fp("2. Complete: Right now, she … (water) the plants."),
       fp("3. Write one of YOUR chores and one hobby.")],
      [fp("Answer."),
       pAns("E.A.: feeds — is watering — I sweep the yard; I like reading.",
        ["is watering"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  return [
    p([run("LESSON OF THE DAY — SESSION 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE TWO PRESENTS — EVERY DAY vs RIGHT NOW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    faraDialogueBox(),
    p("", { after: 60 }),
    img("u1_chores.png", 380, 768 / 1376),
    box("THE TWO PRESENTS", [
      bullet([run("PRESENT SIMPLE — habits: ", { bold: true }), run("Every morning, I sweep the yard. She feedS the chickens.", { bold: true, color: C.BLUE }), run("  (-s with he/she!)")]),
      bullet([run("PRESENT CONTINUOUS — right now: ", { bold: true }), run("am / is / are + verb-ing: Right now, I am watering the plants.", { bold: true, color: C.BLUE })]),
      bullet([run("Time keys: ", { bold: true }), run("every day / every morning / usually → simple;  now / right now / at the moment → continuous.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The daily chores:", { bold: true })], { after: 30 }),
    vocab("to sweep the yard", "tou souipe dhe iarde"),
    vocab("to fetch water", "tou fètch ouôteur"),
    vocab("to feed the chickens", "tou fide dhe tchikeunnz"),
    vocab("to water the plants", "tou ouôteur dhe plannts"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u1_chores.png", label: "Getting to know Fara — listen and repeat", url: AUDIO.chores }], COLOR),
  ];
}

// ---------- S7 — Reading ----------
function readingTextBox() {
  return box("THE READING TEXT — HOW PEOPLE GREET, HERE AND THERE", [
    p("In Madagascar, when we meet somebody, we take time. We ask about the news: “Inona no vaovao?” We shake hands, and with the family we kiss on the cheeks. Greeting an old person with respect is very important.", { after: 40 }),
    p("In English-speaking countries, people often greet faster. In Great Britain, people shake hands the first time, then a simple “Hi!” is enough. Friends sometimes just wave. In the United States, people smile a lot and say “How are you doing?” — but be careful: it is a greeting, not a real question! Nobody expects your full news.", { after: 40 }),
    p("Everywhere in the world, the smile is the same language. A warm smile, a clear hello, a little respect: with these three, you can meet anybody, anywhere.", { after: 20 }),
  ]);
}
function ficheS7() {
  const meta = META("Reading: how people greet, here and there",
    "By the end of the lesson, learners will be able to read a text accurately and infer information from a text on meeting new people.",
    "7 / 8", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: Right now, I … (read) the board."),
       fp("2. Give two daily chores in English.")],
      [fp("Answer."),
       fp("E.A.: am reading — sweep the yard, fetch water.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title is: « How people greet, here and there ». Predict: what will the text talk about? Write ONE prediction on your slate.")],
      [fp("Predict."),
       fp("E.A.: greetings in Madagascar and in other countries…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « How people greet, here and there ». By the end of this lesson, you will compare the Malagasy way and the English-speaking way of greeting!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text aloud, paragraph by paragraph, paying attention to pronunciation. Find the meaning of “to wave” and “to expect” from the context. Then answer: 1. What do Malagasy people ask when they meet? 2. Is “How are you doing?” a real question in the USA? 3. INFERENCE: why must you NOT tell your full news to an American who says it?")],
      [fp("Read. Infer."),
       pAns("E.A.: 1. The news (Inona no vaovao?). 2. No — it is a greeting. 3. Because nobody expects a long answer — it would surprise them!",
        ["it is a greeting"], { size: SZ.FICHE })],
      "Repetition drill", "Reading text"),
    stepRow(["4. Analysis (post-reading)"],
      [fp("Check your predictions: true or false? Share with the class. Then the big discussion: how do WE greet new people in Madagascar, and what is different in English-speaking countries?")],
      [fp("Check. Discuss."),
       fp("E.A.: we take more time; they greet faster; the smile is universal!")],
      "Whole-class work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: Malagasy greeting = time + news + respect; British/American greeting = faster, smile, “How are you doing?” = hello. Universal = the smile!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Culture role play: pair 1 greets the Malagasy way (with the news!), pair 2 greets the American way (fast + smile). The class says what is different.")],
      [fp("Act. Compare."),
       pAns("E.A.: the Malagasy dialogue is longer; the American one is faster with “How are you doing?”.",
        ["How are you doing?"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false: British people kiss on the cheeks the first time."),
       fp("2. What do friends in Great Britain sometimes do instead of speaking?"),
       fp("3. Give the three universal keys of the text.")],
      [fp("Answer."),
       pAns("E.A.: False — they shake hands. — They wave. — A smile, a clear hello, a little respect.",
        ["They wave."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  return [
    p([run("LESSON OF THE DAY — SESSION 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HOW PEOPLE GREET, HERE AND THERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("to shake hands", "tou chéik hanndz"),
    vocab("to kiss on the cheeks", "tou kiss onne dhe tchiks"),
    vocab("to wave", "tou ouéive", "👋 say hello with the hand"),
    vocab("to expect", "tou ikspèkte", "to wait for something"),
    vocab("How are you doing?", "haou âr iou douinng", "US greeting = hello, not a real question!"),
    p("", { after: 60 }),
    box("CULTURE CORNER", [
      bullet([run("Madagascar: ", { bold: true }), run("take time, ask the news, respect the elders.")]),
      bullet([run("Great Britain: ", { bold: true }), run("shake hands the first time, then “Hi!” is enough.")]),
      bullet([run("USA: ", { bold: true }), run("big smile + “How are you doing?” — answer “Good, and you?” and walk on!")]),
      bullet([run("Everywhere: ", { bold: true }), run("the smile is the same language!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S8 — Writing ----------
function ficheS8() {
  const meta = META("Writing: a first-meeting dialogue",
    "By the end of the lesson, learners will be able to write a coherent first-meeting dialogue using linking words expressing addition and contrast.",
    "8 / 8", "personal information form");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How do British people greet the first time?"),
       fp("2. What is universal in greetings?")],
      [fp("Answer."),
       fp("E.A.: they shake hands — the smile.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Form time! Ask your neighbour the four ID questions and complete the form: name / age / place / hobby. This form is the FUEL of today’s writing.")],
      [fp("Ask. Complete the form.")], "Personalisation technique", "Information form"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « A first-meeting dialogue ». By the end of this lesson, you will glue your sentences with the linking words: and, also, but, however!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Two sentences on the board: “I like basketball. I like singing.” → I like basketball AND singing. I ALSO like singing. — “I like rice. I don’t like bread.” → I like rice, BUT I don’t like bread. HOWEVER, I don’t like bread. Addition or contrast?")],
      [fp("Observe. Classify."),
       fp("E.A.: and / also = addition; but / however = contrast.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Now write your dialogue (8 lines) with the skeleton of Session 3 + the form of your neighbour + at least one gerund, one must/have to, one AND/ALSO and one BUT/HOWEVER. I walk around and help.")],
      [fp("Write the dialogue.")],
      "Individual work", "Information form"),
    stepRow(["5. Synthesis"],
      [fp("Peer correction: exchange your draft with your neighbour. Check: skeleton complete? linking words there? -s of he/she? Correct with a pencil, kindly!")],
      [fp("Exchange. Correct.")], "Peer correction", "----"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Act out the best dialogues in front of the class — with the smile of the reading text!")],
      [fp("Act out."),
       pAns("E.A.: — Hello! I’m Vero. — Hi! I’m Lanto. Where are you from? — I’m from Moramanga, but I live in Tana now. I like singing and also dancing. However, I must go — see you!",
        ["but I live in Tana now"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Join with a linking word: I like tea. I don’t like coffee."),
       fp("2. Join: She speaks English. She speaks French."),
       fp("3. Copy your two best dialogue lines.")],
      [fp("Answer."),
       pAns("E.A.: I like tea, but I don’t like coffee. — She speaks English and French / She also speaks French.",
        ["but I don’t like coffee"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}
function lessonS8() {
  return [
    p([run("LESSON OF THE DAY — SESSION 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY FIRST-MEETING DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE LINKING WORDS", [
      bullet([run("Addition: ", { bold: true }), run("and, also", { bold: true, color: C.BLUE }), run("  —  I like basketball and singing. I also like reading.")]),
      bullet([run("Contrast: ", { bold: true }), run("but, however", { bold: true, color: C.BLUE }), run("  —  I like rice, but I don’t like bread. However, I never eat it at night.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE WRITER’S RECIPE", [
      bullet([run("1. The skeleton: ", { bold: true }), run("greeting → names → where from → personal information → taking leave.")]),
      bullet([run("2. The grammar: ", { bold: true }), run("one gerund (I enjoy…), one must / have to.")]),
      bullet([run("3. The glue: ", { bold: true }), run("one and / also, one but / however.")]),
      bullet([run("4. The polish: ", { bold: true }), run("the -s of he/she, the capital letters, the smile!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Vero — ", { bold: true, color: COLOR }), run("Hello! I’m Vero. What’s your name?")]),
    bullet([run("Lanto — ", { bold: true, color: COLOR }), run("Hi! I’m Lanto. Nice to meet you! Where are you from?")]),
    bullet([run("Vero — ", { bold: true, color: COLOR }), run("I’m from Moramanga, but I live in Antananarivo now. And you?")]),
    bullet([run("Lanto — ", { bold: true, color: COLOR }), run("I’m from Tana. I like playing basketball and also singing.")]),
    bullet([run("Vero — ", { bold: true, color: COLOR }), run("Me too! I enjoy singing. However, I must go now — the bell is ringing!")]),
    bullet([run("Lanto — ", { bold: true, color: COLOR }), run("No problem! See you later — have a nice day!")]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 1", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Greetings, welcoming, taking leave"),
    bullet([run("By the clock: ", { bold: true }), run("Good morning / afternoon / evening — Good night only to leave!", { bold: true, color: C.BLUE })]),
    bullet([run("Friendly / formal: ", { bold: true }), run("Hi! How are you? — Good morning, Sir. How do you do?", { bold: true, color: C.BLUE })]),
    bullet([run("Welcome to our lycée! — See you later! Have a nice day!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Apologising — Where are you from?"),
    bullet([run("Sorry! / I’m so sorry! / I apologise for being late.", { bold: true, color: C.BLUE }), run("  →  No problem! That’s all right! Never mind!")]),
    bullet([run("Where are you from? — I’m from Toliara.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Introducing — personal information"),
    bullet([run("The four ID questions: ", { bold: true }), run("What’s your name? How old are you? Where do you live? What are your hobbies?", { bold: true, color: C.BLUE })]),
    bullet([run("This is my friend Hery. Let me introduce Soa. — Nice to meet you!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The grammar machines"),
    bullet([run("The gerund: ", { bold: true }), run("I enjoy talking. Meeting new people is a pleasure.", { bold: true, color: C.BLUE })]),
    bullet([run("must (from me) / have to (from the rules); mustn’t = interdiction!", { bold: true, color: C.BLUE })]),
    bullet([run("The two presents: ", { bold: true }), run("Every morning I sweep (habit) — Right now I am sweeping (now!).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The writer’s glue"),
    bullet([run("Addition: and, also — Contrast: but, however.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 1 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Choose the right greeting: 1. 8 a.m., to the headmaster. 2. 9 p.m., leaving grandmother’s house. 3. 3 p.m., to your best friend.")]),
    pAns("Answers: 1. Good morning, Sir. 2. Good night! 3. Hi! / Good afternoon!", ["Good night!"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete with the gerund: 1. I enjoy … (read) stories. 2. … (swim) is my favourite sport. 3. She apologised for … (be) late.")]),
    pAns("Answers: 1. reading. 2. Swimming. 3. being.", ["Swimming"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("must, mustn’t or have to? 1. Students … wear the uniform (school rule). 2. It’s late, I … go now (from inside me). 3. You … be late for the exam (interdiction!).")]),
    pAns("Answers: 1. have to. 2. must. 3. mustn’t.", ["mustn’t"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Present simple or continuous? 1. Every morning, Fara … (sweep) the yard. 2. Right now, she … (water) the plants. 3. He … (feed) the chickens every day.")]),
    pAns("Answers: 1. sweeps. 2. is watering. 3. feeds.", ["is watering"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Join with and, also, but or however: 1. I like tea. I don’t like coffee. 2. She sings. She dances. 3. He is from Toliara. He lives in Tana.")]),
    pAns("Answers: 1. I like tea, but I don’t like coffee. 2. She sings and dances / She also dances. 3. He is from Toliara; however, he lives in Tana.", ["however"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s9", "SESSION 9 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: MEETING NEW PEOPLE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give the greetings for 8 a.m., 2 p.m. and 8 p.m. — and the special one for leaving at night."),
    pAns("E.A.: Good morning, Good afternoon, Good evening — Good night.", ["Good night"]),
    p("2. Greet the headmaster formally, then your friend."),
    pAns("E.A.: Good morning, Sir. How do you do? — Hi! How are you?", ["How do you do?"]),
    p("3. Apologise for arriving late (formal), and give two replies to an apology."),
    pAns("E.A.: I apologise for being late. — No problem! / Never mind!", ["I apologise for being late."]),
    p("4. Ask where someone is from and answer for yourself."),
    pAns("E.A.: Where are you from? — I’m from…", ["Where are you from?"]),
    p("5. Give the four ID questions."),
    pAns("E.A.: What’s your name? How old are you? Where do you live? What are your hobbies?", ["How old are you?"]),
    p("6. Introduce your neighbour with three facts."),
    pAns("E.A.: This is…, he is fifteen, he lives in…, he likes…", ["This is"]),
    p("7. Complete: I enjoy … (play) football; … (meet) new people is a pleasure."),
    pAns("E.A.: playing; Meeting.", ["Meeting"]),
    p("8. Explain the difference between must and have to, and give mustn’t."),
    pAns("E.A.: must = from me; have to = from the rules; mustn’t = interdiction.", ["mustn’t = interdiction"]),
    p("9. Complete: Every morning she … (fetch) water; right now she … (talk) to me."),
    pAns("E.A.: fetches; is talking.", ["is talking"]),
    p("10. In the reading text: what is the universal language of greetings?"),
    pAns("E.A.: the smile!", ["the smile"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s10", "SESSION 10 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 1: MEETING NEW PEOPLE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give: 1. a greeting for 10 a.m. 2. a formal greeting to the headmaster 3. a way to welcome a guest 4. a way to take leave.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. I enjoy … (listen) to music. 2. … (read) is my hobby. 3. Students … wear the uniform (rule). 4. You … be late (interdiction).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Present simple or continuous? 1. Every day, Koto … (sweep) the yard. 2. Right now, he … (fetch) water. 3. She … (feed) the chickens every morning. 4. Listen! Soa … (sing).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Join with the right linking word (and / also / but / however): 1. I like rice. I don’t like bread. 2. He plays football. He sings. 3. She is from Toliara. She lives in Tana. 4. I speak Malagasy. I speak French.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a first-meeting dialogue (6 lines): greeting — names — where from — one piece of personal information — apology or obligation (must/have to) — taking leave.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 (models): Good morning! / Good morning, Sir. How do you do? / Welcome! Make yourself at home. / Goodbye, see you later! (1 pt each)", ["How do you do?"]),
    pAns("Ex.2: listening — Reading — have to — mustn’t. (1 pt each)", ["mustn’t"]),
    pAns("Ex.3: sweeps — is fetching — feeds — is singing. (1 pt each)", ["is fetching"]),
    pAns("Ex.4: I like rice, but I don’t like bread. / He plays football and sings (he also sings). / She is from Toliara; however, she lives in Tana. / I speak Malagasy and French. (1 pt each)", ["however"]),
    pAns("Ex.5 (model): — Good morning! I’m Hery. — Hello! I’m Vola. Nice to meet you! — Where are you from? — I’m from Antsirabe. I’m fifteen. — Sorry, I must go to class now! — No problem! See you later! (4 pts: skeleton 2, grammar 1, coherence 1)", ["Nice to meet you!"]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(), ...lessonS1(), pageBreak(),
    ...ficheS2(), pageBreak(), ...lessonS2(), pageBreak(),
    ...ficheS3(), pageBreak(), ...lessonS3(), pageBreak(),
    ...ficheS4(), pageBreak(), ...lessonS4(), pageBreak(),
    ...ficheS5(), pageBreak(), ...lessonS5(), pageBreak(),
    ...ficheS6(), pageBreak(), ...lessonS6(), pageBreak(),
    ...ficheS7(), pageBreak(), ...lessonS7(), pageBreak(),
    ...ficheS8(), pageBreak(), ...lessonS8(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 1", COLOR, [
      "I can greet by the clock: Good morning, Good afternoon, Good evening.",
      "I can welcome people and take leave: Welcome! See you later!",
      "I can apologise and reply: I’m so sorry! — No problem!",
      "I can say where I am from and ask: Where are you from?",
      "I can introduce myself and others with the four ID questions.",
      "I can use the gerund: I enjoy talking; Meeting new people is a pleasure.",
      "I can use must, have to and mustn’t.",
      "I can use the two presents: every day I sweep — right now I am sweeping.",
      "I can write a first-meeting dialogue with and, also, but, however.",
    ], "NEXT STOP → UNIT 2: CLASSROOM COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
