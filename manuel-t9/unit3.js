// T9 — UNIT 3 — FAMILY (8 séances + révision + test) — Sessions 23 à 32 / 68
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "AD1457"; // rose foncé
const SHADE = "F8BBD0";
const TOTAL = 68;
const AUDIO = {
  permission: "https://drive.google.com/uc?export=download&id=1tqvUO3m5zBNO-9eeV3w-2kTLJ97ix579",
  tanora: "https://drive.google.com/uc?export=download&id=15rEQgquudf3ZtkBegLFQ_d1rng4Iv1aL",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — FAMILY", title, slo,
  values: "mutual respect, responsibility", session, materials,
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
    L("Rindra", "It’s me, may I come in?"),
    L("Vony", "Of course, come in!"),
    L("Jao", "Yuck! What a messy room you have! You need to clean it up, Vony."),
    L("Vony", "Alright, alright… maybe later…"),
    L("Rindra", "What are you up to? Let’s play!"),
    L("Vony", "I’m studying. I’m in the middle of my homework. I’m almost done, wait a minute."),
    L("Rindra", "Okay. It’s really hot in here. Can I open a window?"),
    L("Vony", "Yeah! Go ahead."),
    L("Rindra", "Thanks. Can I read this book?"),
    L("Vony", "Yeah, yeah… go ahead."),
    L("Rindra", "Hmm… this is too difficult. And this one is boring. Vony! Can I draw on your sketchbook?"),
    L("Vony", "Yeah… yeah… sure."),
    L("Rindra", "Can you help me to draw a lion?"),
    L("Vony", "I’m sorry, I can’t. I’m super busy!"),
    L("Rindra", "Okay. Can I open this drawer?"),
    L("Vony", "Mmhh… Can you just please be quiet for a minute?"),
    L("Rindra", "Yes. … Vony, can I…"),
    L("Vony", "(after 5 minutes) I have finished! Let’s play! Rindra… where are you? Oh… she is sleeping!"),
  ]);
}
function tanoraTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("USING SOCIAL MEDIA TO EMPOWER MADAGASCAR’S YOUTH (listening passage)", [
    L("Manantsoa Ratsarazaka is the founder of Tanora Garan’Teen (Guarantee for Youth), one of the first social media projects to help young people in Africa talk with each other, and with experts, about their sexual and reproductive health and rights."),
    L("Here is one problem Manantsoa is trying to address: Madagascar has experienced an increase in the number of teen pregnancies in the past 15 years. This has been putting pressure on the health care system. Last year, 36 per cent of girls reported giving birth before age 18."),
    L("Observing how young people are connected by their mobile phones, 23-year-old Manantsoa got the idea to use social media to educate young people about their health. He gathered a team of 20 volunteers to develop the software and run the project. He also found three experts to support them."),
    L("Through this virtual community, thousands of young Malagasies can ask questions and discuss topics that they may not be able to raise easily with their families. Manantsoa is giving our youth a way to make good decisions about their futures."),
  ]);
}
function familyTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("THE MALAGASY FAMILY (reading text — in the right order!)", [
    L("The family is of central importance in Malagasy life, and includes not only distant cousins but also dead ancestors."),
    L("Even modern city Malagasy people, who no longer believe that ancestors have magic powers, see grandparents, uncles and aunts who are no longer alive as full members of the family."),
    L("In some areas, every seven years, the Famadihana or “turning of the bones” is a way to communicate with ancestors."),
    L("In all areas, throughout the year, families spend a great deal of time and money on family reunions, and bush taxis are often full of individuals visiting relatives."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — FAMILY", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("May I come in?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_family.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask for permission: May I…? Can I…? — and give or refuse it;"),
    p("• warn people: Be careful! Watch out! I warn you not to…;"),
    p("• talk about family relationships: get on well with, be close to, role model;"),
    p("• report questions and answers: He said he was closer to his father;"),
    p("• talk about youth problems and give advice with must / have to / don’t have to;"),
    p("• give my opinion: In my opinion…, I think…;"),
    p("• read about the Malagasy family and the Famadihana;"),
    p("• write a dialogue between parents and youth — and act it out!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, responsibility.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Family is the first team of your life. In this unit, you learn the English of that team: asking politely, listening, helping — and solving the problems of young people together!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u5_permission.png", label: "May I come in? — listen and repeat", url: AUDIO.permission },
      { qr: "qr_t9_u5_tanora.png", label: "Tanora Garan’Teen — listen and answer", url: AUDIO.tanora },
    ], COLOR),
  ];
}

// ---------- S23 — Listening: permission dialogue ----------
function ficheS23() {
  const meta = META("Listening: May I come in? — asking and giving permission",
    "By the end of the lesson, learners will be able to comprehend an oral dialogue about permission and use the expressions to ask, give and refuse permission.",
    "1 / 8", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one food recommendation with “should”."),
       fp("2. What does “bring home the bacon” mean?")],
      [fp("Answer."),
       fp("E.A.: You should drink more water; to earn the family money.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Talk about your siblings: how many brothers and sisters do you have? Who is the oldest?")],
      [fp("Talk."),
       fp("E.A.: I have two brothers; my sister is the oldest.")],
      "Pair work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « May I come in? » — Rindra visits Vony… and asks a LOT of permissions! Count them while you listen!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. What is Vony doing? 2. What did Rindra ask to open? 3. Did Vony help her to draw the lion? 4. Did they play in the end? Why or why not?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. She is studying (homework). 2. a window, then a drawer. 3. No — she was super busy! 4. No, because Rindra fell asleep!",
        ["Rindra fell asleep!"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Hunt in the dialogue: the ASKING expressions (May I come in? Can I open a window?), the GIVING expressions (Of course! Go ahead! Sure!), the REFUSING expression (I’m sorry, I can’t).")],
      [fp("Find. Classify."),
       fp("E.A.: ask → May I…? Can I…?; give → Go ahead!; refuse → I’m sorry, I can’t.")],
      "Whole-class work", "Board transcript"),
    stepRow(["5. Synthesis"],
      [fp("So: May I…? (very polite) / Can I…? (friendly) → Yes, you may. Yes, you can. Go ahead! / Sorry, you can’t. And listen and repeat the dialogue!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Audio / QR"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Role play the dialogue in pairs with the transcript — then replace the requests with YOUR ideas: Can I borrow your pen? May I sit here?")],
      [fp("Role play."),
       pAns("E.A.: May I borrow your ruler? — Sure, go ahead! Can I open the door? — Sorry, you can’t, it’s cold!",
        ["Sure, go ahead!"], { size: SZ.FICHE })],
      "Role play", "Board transcript"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask two permissions (one with may, one with can)."),
       fp("2. Refuse a permission politely.")],
      [fp("Answer."),
       pAns("E.A.: May I come in? Can I read this book? — I’m sorry, you can’t.",
        ["May I come in?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING AND GIVING PERMISSION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    permissionDialogueBox(),
    p("", { after: 60 }),
    box("THE PERMISSION MACHINE", [
      bullet([run("Asking: ", { bold: true }), ...kw("May I go out, please?", "méi aï gôou aoute plize"), run("  (very polite)  /  "), ...kw("Can I open a window?", "kane aï ôoupeune e ouinndôou")]),
      bullet([run("Giving: ", { bold: true }), run("Yes, you may. Yes, you can. Of course! Go ahead! Sure!", { bold: true, color: C.BLUE })]),
      bullet([run("Refusing: ", { bold: true }), run("Sorry, you can’t. No, you mustn’t. Don’t…!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("New words of the dialogue:", { bold: true })], { after: 50 }),
    vocab("a messy room", "e mèssi roume", "nothing in its place!"),
    vocab("What are you up to?", "ouate âr iou eupe tou", "= what are you doing?"),
    vocab("I’m almost done", "aïm ôlmôouste done", "= I have nearly finished"),
    vocab("a drawer", "e drôeur", "the sliding box of a desk"),
    vocab("a sketchbook", "e skètchbouk", "a book for drawing"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u5_permission.png", label: "May I come in? — listen and role play", url: AUDIO.permission }], COLOR),
  ];
}

// ---------- S24 — May/can + warnings + quiz trade ----------
function ficheS24() {
  const meta = META("May or can? — warnings: Be careful! Watch out!",
    "By the end of the lesson, learners will be able to distinguish “may” and “can”, warn people, and play a permission quiz trade.",
    "2 / 8", "flashcards (permission situations)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask a polite permission."),
       fp("2. Give and refuse a permission.")],
      [fp("Answer."),
       fp("E.A.: May I come in?; Go ahead! / Sorry, you can’t.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T walks toward the door looking at his phone… and almost hits the wall!) What should you shout to save me?")],
      [fp("React!"),
       fp("E.A.: Be careful! Watch out!")],
      "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « May, can and the warnings ». By the end of this lesson, you will ask like a diplomat and warn like a guard!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: MAY = permission (May I go out?) and possibility (It may rain). CAN = permission (Can I play?) and ability (I can swim!). And the warnings: Be careful! Mind the step! Watch out! I warn you not to touch that!")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Classify these sentences: permission, possibility or ability? 1. Koto can lift a big bag. 2. May I use your phone? 3. It may rain tonight. 4. Can I come with you?")],
      [fp("Classify."),
       fp("E.A.: 1. ability 2. permission 3. possibility 4. permission.")],
      "Pair work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: may = permission + possibility; can = permission + ability. Warnings: Be careful! Mind…! Watch out! I warn you not to… — and the forbidden actions: don’t push, don’t shout, don’t throw things!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Quiz-quiz trade! Your flashcard says a situation (go to a friend’s party — yes + warn; stay up late to watch TV — no). Student 1 asks, student 2 answers from the card, then you TRADE cards and find a new partner!")],
      [fp("Ask. Answer. Trade."),
       pAns("E.A.: Can I go to my friend’s party? — Yes, but be careful! Can I stay up late to watch TV? — No, you can’t, tomorrow is a school day!",
        ["Yes, but be careful!"], { size: SZ.FICHE })],
      "Quiz-quiz trade", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. One sentence with “may” = possibility; one with “can” = ability."),
       fp("2. Warn a child near the fire.")],
      [fp("Answer."),
       pAns("E.A.: It may rain; I can ride a bicycle; Be careful! I warn you not to touch the fire!",
        ["It may rain"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MAY, CAN AND THE WARNINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_permission.png", 400, 768 / 1376),
    box("MAY vs CAN", [
      bullet([run("MAY", { bold: true, color: C.BLUE }), run(" = permission (May I go out, please?) + possibility (It may rain tonight).")]),
      bullet([run("CAN", { bold: true, color: C.BLUE }), run(" = permission (Can I play?) + ability (I can swim!).")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The warning words:", { bold: true })], { after: 50 }),
    vocab("Be careful!", "bi kèrfoul", "⚠ general danger"),
    vocab("Watch out!", "ouatch aoute", "⚠ fast danger — now!"),
    vocab("Mind the step!", "maïnnde dhe stèpe", "⚠ look where you walk"),
    vocab("I warn you not to…", "aï ouôrn iou note tou", "serious warning: I warn you not to touch that!"),
    p("", { after: 60 }),
    p([run("The forbidden actions (house rules!):", { bold: true })], { after: 50 }),
    bullet([run("Don’t push! Don’t shout! Don’t throw things! Don’t say dirty words! Don’t kick! Don’t hit! Don’t destroy things! Don’t sulk!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("MUTUAL RESPECT CORNER", [
      p("A warning is a gift: when someone says “Be careful!”, they protect you. Say thank you — and warn others too!", { after: 40 }),
    ]),
  ];
}

// ---------- S25 — Family relationships vocabulary ----------
function ficheS25() {
  const meta = META("Family relationships — my role model",
    "By the end of the lesson, learners will be able to talk about relationships between family members.",
    "3 / 8", "----");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. May or can? “… I use your phone?” / “It … rain.”"),
       fp("2. Give two warnings.")],
      [fp("Answer."),
       fp("E.A.: May/Can; may; Be careful! Watch out!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Chinese whispers! I whisper a family sentence to the first student of each line… The last one says it aloud. Which team keeps the message alive?")],
      [fp("Whisper. Report.")], "Using game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Family relationships ». By the end of this lesson, you will describe the hearts of your family — who is close, who quarrels, who inspires you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the expressions: to be on good/bad terms with someone; to get on well with my parents; to be close to my sister; to be proud of someone / disappointed with someone; my father is my ROLE MODEL — I want to be like him!")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The relationship verbs: to quarrel (angry words!), to argue, to discuss (calm words!), to get along with. Make true sentences about your family — kind ones!")],
      [fp("Build sentences."),
       fp("E.A.: I get along with my cousin. I sometimes argue with my brother, but we are close!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: good terms / bad terms; get on well with; be close to; proud of / disappointed with; role model; quarrel vs discuss. Question: Who are you closest to?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speak about your role model (3 sentences): who is it, two qualities, and why you want to be like him or her.")],
      [fp("Speak."),
       pAns("E.A.: My mother is my role model. She is brave and hard-working. I want to be like her!",
        ["My mother is my role model."], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three relationship expressions."),
       fp("2. What is the difference between quarrel and discuss?")],
      [fp("Answer."),
       pAns("E.A.: be close to, get on well with, be proud of; quarrel = angry words, discuss = calm words.",
        ["quarrel = angry words"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}
function lessonS25() {
  return [
    p([run("LESSON OF THE DAY — SESSION 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("FAMILY RELATIONSHIPS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The relationship expressions:", { bold: true })], { after: 50 }),
    vocab("to be on good / bad terms with", "tou bi onne goude teurmz ouidh", "friendly / not friendly with someone"),
    vocab("to get on well with", "tou guète onne ouèl ouidh", "to live happily with"),
    vocab("to be close to", "tou bi klôouce tou", "very near in the heart ❤"),
    vocab("to be proud of", "tou bi praoude ov", "my chest grows big!"),
    vocab("to be disappointed with", "tou bi dissepoïnntide ouidh", "sad — I expected better"),
    vocab("a role model", "e rôoule modeul", "the person I want to be like"),
    p("", { after: 60 }),
    p([run("The relationship verbs:", { bold: true })], { after: 50 }),
    bullet([run("to quarrel", { bold: true, color: C.BLUE }), run(" (angry words!) — "), run("to argue", { bold: true, color: C.BLUE }), run(" — "), run("to discuss", { bold: true, color: C.BLUE }), run(" (calm words!) — "), run("to get along with", { bold: true, color: C.BLUE }), run(".")]),
    p("", { after: 60 }),
    box("MY ROLE MODEL (model speech)", [
      bullet([run("My father is my role model.", { bold: true, color: C.BLUE })]),
      bullet([run("He is honest and understanding.", { bold: true, color: C.BLUE })]),
      bullet([run("I want to be like him!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("I am very close to my grandmother — we discuss everything.")]),
    bullet([run("I sometimes quarrel with my little brother; however, we always get along again!")]),
    bullet([run("My parents are proud of my marks this year.")]),
  ];
}

// ---------- S26 — Reported questions and answers ----------
function ficheS26() {
  const meta = META("Reporting the interview — He said he was closer to his father",
    "By the end of the lesson, learners will be able to interview classmates about family and report the answers in correct reported speech.",
    "4 / 8", "question lists A and B");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Who is your role model, and why?"),
       fp("2. Reported speech: “I am tired,” said Koto. →")],
      [fp("Answer."),
       fp("E.A.: My aunt — she is generous!; Koto said that he was tired.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Memory check: the one-step-back table! is → ? can → ? will → ? do/does → ? have → ?")],
      [fp("Answer fast."),
       fp("E.A.: was; could; would; did; had.")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to interview classmates about FAMILY — and report their answers like journalists: He said he was…, She said she did…!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Question: “Are you closer to your father or mother?” Answer: “I am closer to my father.” Report: He SAID HE WAS closer to his father. What changed? (I → he; am → was!)")],
      [fp("Observe. Answer."),
       fp("E.A.: the person changes AND the verb goes one step back.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Student A and student B each get a question list: A — Are you closer to your father or mother? Are you allowed to watch TV at night? B — Do you always do your homework? Do you have a role model? Interview each other and NOTE the answers!")],
      [fp("Interview. Note.")],
      "Pair work", "Question lists"),
    stepRow(["5. Synthesis"],
      [fp("The reporting patterns on the board: He said he WAS… / She said she DID… / He said he HAD… — person + one step back, every time!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Report time! I ask: “A, what did B say for question 1? For question 2?” — answer in perfect reported speech!")],
      [fp("Report."),
       pAns("E.A.: She said she was closer to her mother. He said he did his homework every day. She said she had a role model — her aunt!",
        ["She said she was closer to her mother."], { size: SZ.FICHE })],
      "Whole-class work", "Notes"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Report: “I am allowed to watch TV,” said Vony."),
       fp("2. Report: “I do the washing-up,” said Koto.")],
      [fp("Answer."),
       pAns("E.A.: Vony said she was allowed to watch TV. Koto said he did the washing-up.",
        ["she was allowed"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}
function lessonS26() {
  return [
    p([run("LESSON OF THE DAY — SESSION 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("REPORTING THE FAMILY INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE JOURNALIST’S MACHINE", [
      bullet([run("“I am closer to my father.” → "), run("He said he was closer to his father.", { bold: true, color: C.BLUE })]),
      bullet([run("“I do my homework every day.” → "), run("She said she did her homework every day.", { bold: true, color: C.BLUE })]),
      bullet([run("“I have a role model.” → "), run("He said he had a role model.", { bold: true, color: C.BLUE })]),
      bullet([run("Two changes every time: the PERSON (I → he/she) and the VERB (one step back!).", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The one-step-back table:", { bold: true })], { after: 50 }),
    bullet([run("am/is → was;  are → were;  do/does → did;  have → had;  can → could;  will → would.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("The interview questions:", { bold: true })], { after: 50 }),
    bullet([run("Are you closer to your father or mother?  Are you allowed to watch TV at night?", { bold: true, color: C.BLUE })]),
    bullet([run("Do you always do your homework?  Do you have a role model?  Who does the washing-up at home?", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S27 — Listening: Tanora Garan'Teen ----------
function ficheS27() {
  const meta = META("Listening: Tanora Garan’Teen — youth problems",
    "By the end of the lesson, learners will be able to comprehend an oral passage about young people’s problems and discuss it.",
    "5 / 8", "audio (QR code), pictures of youth problems");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “I am close to my grandmother,” said Soa."),
       fp("2. Give the one-step-back of: do, have.")],
      [fp("Answer."),
       fp("E.A.: Soa said she was close to her grandmother; did, had.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the pictures: smoking, drinking alcohol, teen pregnancy, peer pressure, school problems. Name each problem — and give one quick piece of advice!")],
      [fp("Name. Advise."),
       fp("E.A.: Smoking — you should stop! Peer pressure — choose your friends well!")],
      "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a TRUE story from Madagascar: « Tanora Garan’Teen » — how a young Malagasy uses social media to help the youth!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening, one question: what is Tanora Garan’Teen?")],
      [fp("Listen. Answer."),
       fp("E.A.: a social media project that helps young people talk about their health.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening — true or false, and why? 1. The number of teen pregnancies has gone down in recent years. 2. Tanora Garan’Teen is mainly a UN project. 3. The project mainly helps young people discuss problems with each other. 4. The project is currently in the planning stage. 5. It is run by Manantsoa and his team and used by thousands of young Malagasies.")],
      [fp("Listen. Answer T/F + why."),
       pAns("E.A.: 1.F — it has gone UP. 2.F — Manantsoa founded it (experts only support). 3.T. 4.F — it is already running! 5.T — 20 volunteers, thousands of users.",
        ["it has gone UP"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("The difficult words in context: founder, volunteer, expert, pregnancy, health care system, virtual community, to empower = to give power! And your opinion: is this project useful? In my opinion…")],
      [fp("Explain the words. Give opinions.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Share with your group: which youth problem is the biggest in our town, in your opinion? What can families do about it?")],
      [fp("Discuss. Report."),
       pAns("E.A.: In my opinion, peer pressure is the biggest problem. Families should discuss with their children!",
        ["In my opinion"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Who founded Tanora Garan’Teen, and how old was he?"),
       fp("2. What does “to empower” mean?")],
      [fp("Answer."),
       pAns("E.A.: Manantsoa Ratsarazaka, 23 years old; to give power to someone.",
        ["to give power"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LESSON OF THE DAY — SESSION 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: TANORA GARAN’TEEN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    tanoraTextBox(),
    p("", { after: 60 }),
    p([run("New words of the passage:", { bold: true })], { after: 50 }),
    vocab("the founder", "dhe faounndeur", "the person who started the project"),
    vocab("to empower", "tou immpaooueur", "to give power to someone"),
    vocab("a volunteer", "e volonntir", "works for free, to help"),
    vocab("an expert", "ane èkspeurte", "a person who knows a lot"),
    vocab("teen pregnancy", "tine prègnannsi", "when a very young girl expects a baby"),
    vocab("the health care system", "dhe hèlth kèr sisteum", "hospitals, doctors, medicine"),
    vocab("a virtual community", "e veurtioueul kemiouniti", "people connected online"),
    p("", { after: 60 }),
    box("THE YOUTH PROBLEMS (vocabulary)", [
      bullet([run("smoking — drinking alcohol — teen pregnancy — peer pressure — school problems.", { bold: true, color: C.BLUE })]),
      bullet([run("peer pressure", { bold: true, color: C.BLUE }), run(" = when friends push you to do something.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u5_tanora.png", label: "Tanora Garan’Teen — listen and answer T/F", url: AUDIO.tanora }], COLOR),
  ];
}

// ---------- S28 — Advice: must / have to / don't have to ----------
function ficheS28() {
  const meta = META("Advice on youth problems — must, have to, don’t have to",
    "By the end of the lesson, learners will be able to give advice on youth problems with must, have to and don’t have to, and express opinions.",
    "6 / 8", "problem cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three youth problems."),
       fp("2. What is Tanora Garan’Teen?")],
      [fp("Answer."),
       fp("E.A.: smoking, peer pressure, school problems; a social media project for the youth.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick rules of our school: what MUST you do every morning? What are you NOT obliged to do?")],
      [fp("Answer."),
       fp("E.A.: We must arrive on time! We don’t have to wear a watch.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Must, have to, don’t have to ». By the end of this lesson, you will separate the REAL obligations from the free choices!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: You MUST respect your parents (strong rule from inside!). I HAVE TO help at home every Saturday (obligation from outside). You DON’T HAVE TO cook — it is not necessary, your sister did it!")],
      [fp("Observe. Compare.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: must + verb = strong obligation; have to + verb = obligation too; DON’T have to = NOT necessary (free!); but MUSTN’T = forbidden! Compare: You don’t have to come (free) vs You mustn’t smoke (forbidden!).")],
      [fp("Build sentences."),
       fp("E.A.: I have to do my homework. You mustn’t drink alcohol!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: must / have to = obligation; don’t have to = not necessary; mustn’t = forbidden. And the opinion starters: In my opinion…, I think…")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Advice round! Each group gets a problem card (a friend smokes; a cousin wants to leave school; peer pressure at the market…). Give advice with must/have to/mustn’t + one opinion!")],
      [fp("Discuss. Advise."),
       pAns("E.A.: In my opinion, he must talk to his parents. He mustn’t follow bad friends. He doesn’t have to decide alone — we can help!",
        ["he must talk to his parents"], { size: SZ.FICHE })],
      "Group work", "Problem cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the difference between “don’t have to” and “mustn’t”?"),
       fp("2. Give one advice with “must” on a youth problem.")],
      [fp("Answer."),
       pAns("E.A.: don’t have to = not necessary; mustn’t = forbidden!; You must say no to cigarettes.",
        ["mustn’t = forbidden!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  return [
    p([run("LESSON OF THE DAY — SESSION 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MUST, HAVE TO, DON’T HAVE TO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE OBLIGATION MACHINE", [
      bullet([run("MUST + verb", { bold: true, color: C.BLUE }), run(" = strong obligation: You must respect your parents.")]),
      bullet([run("HAVE TO + verb", { bold: true, color: C.BLUE }), run(" = obligation (often from outside): I have to help at home on Saturdays.")]),
      bullet([run("DON’T HAVE TO", { bold: true, color: C.BLUE }), run(" = not necessary, free choice: You don’t have to cook tonight.")]),
      bullet([run("MUSTN’T = FORBIDDEN!", { bold: true, color: C.RED }), run("  You mustn’t smoke. You mustn’t drink alcohol.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The famous trap:", { bold: true })], { after: 50 }),
    bullet([run("You don’t have to come", { bold: true, color: C.BLUE }), run(" = it is not necessary (but you CAN come!).")]),
    bullet([run("You mustn’t come", { bold: true, color: C.RED }), run(" = it is forbidden!")]),
    p("", { after: 60 }),
    p([run("The opinion starters:", { bold: true })], { after: 50 }),
    bullet([...kw("In my opinion, …", "inn maï eupinieune"), run("  "), ...kw("I think…", "aï think")]),
    p("", { after: 60 }),
    p([run("My advice on youth problems:", { bold: true })], { after: 50 }),
    bullet([run("In my opinion, a student must finish school — education is the best road!", { bold: true, color: C.BLUE })]),
    bullet([run("You mustn’t follow peer pressure; you don’t have to say yes to everything!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S29 — Reading: the Malagasy family ----------
function ficheS29() {
  const meta = META("Reading: the Malagasy family and the Famadihana",
    "By the end of the lesson, learners will be able to rearrange sentences into a meaningful text, give it a title and answer true/false questions.",
    "7 / 8", "sentence strips");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Don’t have to or mustn’t? “You … smoke.” / “You … wash the dishes, I did it.”"),
       fp("2. One opinion with “In my opinion…”.")],
      [fp("Answer."),
       fp("E.A.: mustn’t; don’t have to; In my opinion, family comes first!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The difficult words in context: alive / dead; an ancestor (the grandparents of our grandparents!); a distant cousin; magic powers; no longer (= not any more); a bush taxi (the taxi-brousse!); a family member.")],
      [fp("Listen. Repeat. Explain.")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read about the MALAGASY FAMILY — but the sentences are all mixed up! Your mission: put the text back in order.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("In groups, read the four sentence strips and rearrange them into a meaningful text. Clue: start with the most general idea!")],
      [fp("Read. Rearrange."),
       fp("E.A.: 1. The family is of central importance… 2. Even modern city people… 3. In some areas, the Famadihana… 4. In all areas, family reunions…")],
      "Group work", "Sentence strips"),
    stepRow(["4. Analysis"],
      [fp("Give a title to the text! Then true or false, and why? 1. Only living people are considered family members. 2. The family was once important in Malagasy culture but is no longer. 3. Most modern Malagasies believe ancestors have magical powers. 4. Ancestors can often be seen travelling in bush taxis.")],
      [fp("Entitle. Answer T/F + why."),
       pAns("E.A.: Title: “The Malagasy family” / “Family first!”. 1.F — ancestors too! 2.F — it is still central! 3.F — modern city people no longer believe it. 4.F — the bush taxis are full of LIVING relatives!",
        ["ancestors too!"], { size: SZ.FICHE })],
      "Group work", "The text"),
    stepRow(["5. Synthesis"],
      [fp("So the text says: the Malagasy family includes the ancestors; the Famadihana, every seven years in some areas, is a way to communicate with them; and families spend much time and money on reunions.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Share your opinion with the class: what do YOU love the most about Malagasy family life? One sentence each!")],
      [fp("Share."),
       pAns("E.A.: I love the big family reunions — the bush taxi is full of cousins!",
        ["family reunions"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the Famadihana, and how often does it happen?"),
       fp("2. Who counts as a family member in Malagasy life?")],
      [fp("Answer."),
       pAns("E.A.: the “turning of the bones”, every seven years in some areas; even distant cousins and dead ancestors.",
        ["every seven years"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LESSON OF THE DAY — SESSION 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE MALAGASY FAMILY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_family.png", 400, 768 / 1376),
    familyTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("an ancestor", "ane annsèsteur", "a family member of long ago"),
    vocab("alive / dead", "elaïve / dède", "living / not living"),
    vocab("no longer", "nôou lonngueur", "= not any more"),
    vocab("magic powers", "madjik paooueurz", "special forces of legends"),
    vocab("a bush taxi", "e bouche taksi", "the taxi-brousse!"),
    vocab("a family reunion", "e famili riiounieune", "the whole family together"),
    p("", { after: 60 }),
    box("THE READER’S TRICK — REARRANGING A TEXT", [
      bullet([run("Start with the most GENERAL sentence (the big idea).", { bold: true, color: C.BLUE })]),
      bullet([run("Then the details: “Even…”, “In some areas…”, “In all areas…” follow the big idea.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S30 — Writing: paragraph + dialogue parents/youth ----------
function ficheS30() {
  const meta = META("Writing: the family dialogue",
    "By the end of the lesson, learners will be able to write a paragraph about family relationships and a dialogue between parents and youth, then act it out.",
    "8 / 8", "interview questions, exercise books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the Famadihana?"),
       fp("2. One relationship expression in a sentence.")],
      [fp("Answer."),
       fp("E.A.: the turning of the bones; I get on well with my cousins.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Interview your neighbour: Are you allowed to come home late? Do you get along with your siblings? What is your favourite moment with your family? Who does the washing-up? Note the answers!")],
      [fp("Interview. Note.")],
      "Pair work", "Question list"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE twice: a short paragraph about family relationships, and a dialogue between a parent and a young person — then we act it out!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Brainstorm a common family situation: the youth wants to go to a party; the parent worries about school. What will each one say? Which grammar do we need? (May I…? You must… I think…)")],
      [fp("Brainstorm.")],
      "Brainstorming", "Blackboard"),
    stepRow(["4. Analysis (while-writing 1)"],
      [fp("Write your paragraph (4 sentences) about your family relationships, with the interview notes: who you are close to, one thing you discuss, one rule of the house.")],
      [fp("Write the paragraph.")],
      "Individual work", "Exercise books"),
    stepRow(["5. Synthesis (while-writing 2)"],
      [fp("Write the dialogue (6 lines): the youth asks permission (May I…?), the parent asks questions, gives one warning and one obligation (You must be home at nine!), and they find an agreement — with respect!")],
      [fp("Write the dialogue.")],
      "Pair work", "Exercise books"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Act your dialogue out in front of the class! The class gives one compliment and one idea.")],
      [fp("Act. React."),
       pAns("E.A.: — Dad, may I go to Hery’s party? — Who is going? … — You can go, but you must be home at nine. Be careful! — Thank you, Dad!",
        ["you must be home at nine"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your paragraph."),
       fp("2. Which grammar points did you use in the dialogue?")],
      [fp("Read. Answer."),
       pAns("E.A.: may/can for permission, must for obligation, a warning, an opinion.",
        ["may/can for permission"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LESSON OF THE DAY — SESSION 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: THE FAMILY DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DIALOGUE RECIPE (parent and youth)", [
      bullet([run("The youth asks permission:", { bold: true }), run("  May I go to the party, please?", { bold: true, color: C.BLUE })]),
      bullet([run("The parent asks questions:", { bold: true }), run("  Who is going? Where is it?", { bold: true, color: C.BLUE })]),
      bullet([run("One obligation + one warning:", { bold: true }), run("  You must be home at nine. Be careful on the road!", { bold: true, color: C.BLUE })]),
      bullet([run("The agreement, with respect:", { bold: true }), run("  Thank you, Dad! I promise!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("Mum, may I go to Vola’s birthday party on Saturday?")]),
    bullet([run("Mum — ", { bold: true, color: COLOR }), run("Hmm… Have you finished your homework? Who is going?")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("Yes, I’m almost done! My classmates are going.")]),
    bullet([run("Mum — ", { bold: true, color: COLOR }), run("All right, you can go. But you must be home before dark — I warn you not to be late!")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("I promise, Mum. Thank you! You are the best!")]),
    p("", { after: 60 }),
    box("RESPONSIBILITY CORNER", [
      p("A permission is a contract: the parent trusts you, and you keep your word. That is how trust grows in a family!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 3", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Permission"),
    bullet([run("Ask: May I…? (very polite) / Can I…? — Give: Yes, you may. Go ahead! Sure! — Refuse: Sorry, you can’t. No, you mustn’t.", { bold: true, color: C.BLUE })]),
    bullet([run("MAY = permission + possibility; CAN = permission + ability.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Warnings"),
    bullet([run("Be careful! Watch out! Mind the step! I warn you not to…", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Family relationships"),
    bullet([run("be on good/bad terms with; get on well with; be close to; proud of / disappointed with; role model; quarrel vs discuss.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Reported speech (the journalist)"),
    bullet([run("“I am closer to my father.” → He said he was closer to his father. (person + one step back!)", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Obligation"),
    bullet([run("must / have to = obligation; don’t have to = not necessary; mustn’t = forbidden!", { bold: true, color: C.BLUE })]),
    bullet([run("Opinions: In my opinion…, I think…", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Culture"),
    bullet([run("The Malagasy family includes the ancestors; the Famadihana (every seven years in some areas); the family reunions and the bush taxis full of relatives!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 3 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Complete the mini dialogues: 1. “… I come in?” — “Of course!” 2. “Can I read this book?” — “…!” 3. “Can you help me?” — “I’m sorry, …”")]),
    pAns("Answers: 1. May 2. Go ahead! / Sure! 3. I can’t (I’m super busy).", ["Go ahead!"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Permission, possibility or ability? 1. It may rain tonight. 2. May I use your phone? 3. Koto can swim across the river. 4. Can I come with you?")]),
    pAns("Answers: 1. possibility 2. permission 3. ability 4. permission.", ["possibility 2. permission"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Match: 1. be close to 2. role model 3. quarrel 4. get on well with (a. angry words b. the person I want to be like c. near in the heart d. live happily with).")]),
    pAns("Answers: 1-c, 2-b, 3-a, 4-d.", ["1-c, 2-b, 3-a, 4-d"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Report: 1. “I am allowed to watch TV,” said Rindra. 2. “I do my homework every day,” said Jao. 3. “I have a role model,” said Vony.")]),
    pAns("Answers: 1. Rindra said she was allowed to watch TV. 2. Jao said he did his homework every day. 3. Vony said she had a role model.", ["she was allowed to watch TV"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Must, mustn’t or don’t have to? 1. You … smoke — it is forbidden! 2. You … cook tonight, I already did it. 3. Students … respect their parents.")]),
    pAns("Answers: 1. mustn’t 2. don’t have to 3. must.", ["mustn’t 2. don’t have to"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Answer on the texts: 1. Why didn’t Vony play with Rindra at the end? 2. Who founded Tanora Garan’Teen? 3. What happens every seven years in some areas of Madagascar?")]),
    pAns("Answers: 1. Rindra fell asleep! 2. Manantsoa Ratsarazaka. 3. the Famadihana — the turning of the bones.", ["Rindra fell asleep!"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s31", "SESSION 31 / 68", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: FAMILY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Ask, give and refuse a permission."),
    pAns("E.A.: May I come in? — Of course! / Sorry, you can’t.", ["May I come in?"]),
    p("2. The two jobs of “may”? The two jobs of “can”?"),
    pAns("E.A.: may = permission + possibility; can = permission + ability.", ["permission + possibility"]),
    p("3. Give three warnings."),
    pAns("E.A.: Be careful! Watch out! I warn you not to touch that!", ["Watch out!"]),
    p("4. Give four relationship expressions."),
    pAns("E.A.: be close to, get on well with, be proud of, be on good terms with.", ["be close to"]),
    p("5. What is a role model? Give your model speech!"),
    pAns("E.A.: the person I want to be like — My father is my role model. He is honest…", ["My father is my role model."]),
    p("6. Report: “I am closer to my mother,” said Hery."),
    pAns("E.A.: Hery said he was closer to his mother.", ["he was closer"]),
    p("7. Name four youth problems."),
    pAns("E.A.: smoking, drinking alcohol, teen pregnancy, peer pressure, school problems.", ["peer pressure"]),
    p("8. Difference between “don’t have to” and “mustn’t”?"),
    pAns("E.A.: don’t have to = not necessary; mustn’t = forbidden!", ["forbidden!"]),
    p("9. In the Tanora Garan’Teen passage: what idea did Manantsoa have?"),
    pAns("E.A.: use social media to educate young people about their health.", ["use social media"]),
    p("10. What did you learn about the Malagasy family text?"),
    pAns("E.A.: the family includes the ancestors; the Famadihana every seven years; big family reunions!", ["the Famadihana"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s32", "SESSION 32 / 68", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 3: FAMILY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete the dialogue: 1. “… I come in?” — “Of course!” 2. “Can I open the window?” — “Yes, …!” 3. “Can you help me draw?” — “I’m sorry, …” 4. Warn your little brother near the road: “…!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("May or can — and which job (permission, possibility, ability)? 1. It … rain tonight. 2. … I go out, please? 3. My sister … cook very well. 4. … I borrow your pen?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Report: 1. “I am close to my grandmother,” said Soa. 2. “I do the washing-up,” said Koto. 3. “I have a role model,” said Vola. 4. “I am allowed to watch TV,” said Jao.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Must, mustn’t or don’t have to? 1. You … drink alcohol. 2. You … respect your parents. 3. You … come — it is not necessary. 4. Students … smoke at school.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a dialogue (6 lines) between a parent and a youth: one permission question, one parent question, one obligation with “must”, one warning, one agreement.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: May; go ahead / you can; I can’t; Be careful! / Watch out! (1 pt each)", ["Be careful!"]),
    pAns("Ex.2: may (possibility); May (permission); can (ability); Can/May (permission). (1 pt each)", ["may (possibility)"]),
    pAns("Ex.3: Soa said she was close to her grandmother. Koto said he did the washing-up. Vola said she had a role model. Jao said he was allowed to watch TV. (1 pt each)", ["she was close to her grandmother"]),
    pAns("Ex.4: mustn’t; must; don’t have to; mustn’t. (1 pt each)", ["mustn’t; must"]),
    pAns("Ex.5 (model): — Mum, may I go to the party? — Who is going? — My classmates. — You can go, but you must be home at nine. Be careful! — I promise. Thank you, Mum! (4 pts: permission 1, must 1, warning 1, form 1)", ["may I go to the party?"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can ask for permission: May I…? Can I…?",
      "I can give and refuse permission politely.",
      "I can warn people: Be careful! Watch out! I warn you not to…",
      "I can talk about family relationships: close to, get on well with, role model.",
      "I can report an interview: He said he was closer to his father.",
      "I can talk about youth problems and give advice.",
      "I can use must, have to, don’t have to and mustn’t correctly.",
      "I can give my opinion: In my opinion…, I think…",
      "I can read about the Malagasy family and the Famadihana.",
      "I can write and act a parent-youth dialogue.",
    ], "NEXT STOP → UNIT 4: HEALTHY LIFE!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
