// T9 — UNIT 3 — OUR TIME (8 séances + révision + test) — Sessions 19 à 28 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B9770E"; // ocre
const SHADE = "FDEBD0";
const TOTAL = 86;
const AUDIO = {
  bruno: "https://drive.google.com/uc?export=download&id=1DKLvmbn8aGIS7mTzPSaaBMWDPAXVlznG",
  habits: "https://drive.google.com/uc?export=download&id=1JvPzek0cSCzZtJAgkYSzFx13CdgDapuU",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — OUR TIME", title, slo,
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
function brunoTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("BRUNO’S VACATION (listening passage)", [
    L("I’m Bruno. Last month, my family and I went for a vacation in Mahajanga. It was boring, because we couldn’t spend time together! Sue, my sister, went alone to the beach to swim in the calm sea, whereas my parents stayed at the hotel. My dad was watching TV while my mom was sleeping. So I chose to visit my friend in Amborovy, and we played basketball. How annoying it was!"),
  ]);
}
function habitsDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("PAST AND PRESENT HABITS (listening passage)", [
    L("Mali", "Lilly, what did you use to be like when you were a child?"),
    L("Lilly", "I remember I used to wear very thick glasses, and I used to be quite small. To be honest, I didn’t like myself very much. However, I’d say I had a very happy childhood."),
    L("Mali", "What did you use to do for fun?"),
    L("Lilly", "Oh, I have great memories. We didn’t use to have phones, and the streets used to be safer than now, so we used to play outdoors all the time."),
    L("Mali", "Did you use to get good marks in school?"),
    L("Lilly", "Yes, I did. And you?"),
    L("Mali", "So did I!"),
  ]);
}
function titanicTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("“TITANIC” (reading text)", [
    L("Eva Hart is one of the people who survived the sinking of the ship, the Titanic. She was seven when the ship sank. She and her mother managed to get into a lifeboat, but her father did not. He died along with the other people."),
    L("Mrs Hart saw the ship sink, and she heard the cries of people as they died. She thinks that the Titanic should be left at the bottom of the sea, as a memorial to those who died."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — OUR TIME", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("What a story!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_vacation.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• narrate past events with the 5 Wh-questions (+ how);"),
    p("• describe events: amazing, wonderful, fantastic — strange, boring, awful;"),
    p("• exclaim: What a beautiful day! How annoying it was! Wow! Super!;"),
    p("• use the past continuous (long action) and the simple past (short action);"),
    p("• combine them with “while” and “when” — and play the alibi game;"),
    p("• talk about past habits with “used to” and present habits with “be used to”;"),
    p("• agree with “So did I!” and “Neither did I!”;"),
    p("• contrast with but, whereas, however;"),
    p("• read the story of the Titanic and write a cohesive paragraph.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Your life is full of stories: the vacation, the childhood, the things you used to do… In this unit, you become a STORYTELLER — you tell the past like a film, scene by scene!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u3_bruno.png", label: "Bruno’s vacation — listen and repeat", url: AUDIO.bruno },
      { qr: "qr_t9_u3_habits.png", label: "Past and present habits — listen and repeat", url: AUDIO.habits },
    ], COLOR),
  ];
}

// ---------- S19 — Adjectives + exclamations ----------
function ficheS19() {
  const meta = META("Describing past events — What a day! How boring!",
    "By the end of the lesson, learners will be able to describe past events with adjectives and use the exclamatory form with “what a” and “how”.",
    "1 / 8", "pictures of events");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “Open your books!” (the teacher → us)"),
       fp("2. Report: “We can start,” she said.")],
      [fp("Answer."),
       fp("E.A.: The teacher told us to open our books; She said that we could start.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Talk to your neighbour: what did you do during the last vacation? Two sentences each!")],
      [fp("Talk in pairs."),
       fp("E.A.: I visited my grandmother. I played football every day.")],
      "Pair work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Describing past events ». By the end of this lesson, your stories will have COLOURS — amazing, awful, fantastic!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Two families of adjectives on the board: POSITIVE — amazing, wonderful, fantastic, great. NEGATIVE — strange, boring, awful, annoying. Classify: “The match was …!” “The trip was …!”")],
      [fp("Classify. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The exclamatory machine: WHAT A + adjective + noun → What a beautiful day! HOW + adjective → How beautiful you are! How annoying it was! And the interjections: Wow! Super!")],
      [fp("Build exclamations."),
       fp("E.A.: What an amazing match! How boring it was!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: positive/negative adjectives + What a…! How…! + Wow! Super! And the 5 Wh-questions to ask about a story: what, when, where, who, why — and how.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Picture reactions! I show a picture (a sunset, a broken bike, a big cake…), you exclaim with “What a…!” or “How…!”")],
      [fp("React."),
       pAns("E.A.: What a wonderful sunset! How awful! What a fantastic cake!",
        ["What a wonderful sunset!"], { size: SZ.FICHE })],
      "Using visual aids", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three positive and three negative adjectives for events."),
       fp("2. Exclaim about yesterday’s weather.")],
      [fp("Answer."),
       pAns("E.A.: amazing, wonderful, fantastic / strange, boring, awful; What a sunny day it was!",
        ["What a sunny day it was!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LESSON OF THE DAY — SESSION 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DESCRIBING PAST EVENTS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The positive adjectives:", { bold: true })], { after: 30 }),
    vocab("amazing", "eméizinng", "it surprises you — in a good way!"),
    vocab("wonderful", "ouonndeurfoul", "full of wonder"),
    vocab("fantastic", "fanntastik", "super great"),
    p([run("The negative adjectives:", { bold: true })], { after: 30 }),
    vocab("strange", "stréinndje", "not normal"),
    vocab("boring", "bôrinng", "nothing to do…"),
    vocab("awful", "ôfoul", "very very bad"),
    vocab("annoying", "enoïinng", "it irritates you!"),
    p("", { after: 60 }),
    box("THE EXCLAMATORY MACHINE", [
      bullet([run("WHAT A + adjective + noun:", { bold: true, color: C.BLUE }), run("  What a beautiful day! What an amazing story!")]),
      bullet([run("HOW + adjective:", { bold: true, color: C.BLUE }), run("  How beautiful you are! How annoying it was!")]),
      bullet([run("Interjections:", { bold: true, color: C.BLUE }), run("  Wow! Super!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The storyteller’s questions (5 Wh + how):", { bold: true })], { after: 50 }),
    bullet([run("What happened?  When did it happen?  Where were you?", { bold: true, color: C.BLUE })]),
    bullet([run("Who was with you?  Why was it amazing?  How did you feel?", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S20 — Listening: Bruno's vacation ----------
function ficheS20() {
  const meta = META("Listening: Bruno’s vacation",
    "By the end of the lesson, learners will be able to infer information from an oral passage about a vacation and complete a chart.",
    "2 / 8", "audio (QR code), chart on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Exclaim with “What a…” about your last meal."),
       fp("2. Give two negative adjectives for events.")],
      [fp("Answer."),
       fp("E.A.: What a delicious meal!; boring, awful.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Have you ever been to Mahajanga? What can you do there? One idea each!")],
      [fp("Answer freely."),
       fp("E.A.: swim, see the big baobab, eat ice cream on the beach…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Bruno’s vacation ». A family vacation in Mahajanga… but was it fantastic or boring? Let’s find out!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening: was the vacation good or bad for Bruno? Which word tells you?")],
      [fp("Listen. Answer."),
       fp("E.A.: bad — “boring”, “How annoying it was!”")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening: complete the chart! WHO were the characters? WHAT was he/she doing? WHERE? (Sue / the parents / dad / mom / Bruno)")],
      [fp("Listen. Complete the chart."),
       pAns("E.A.: Sue — swimming — in the sea; dad — watching TV — at the hotel; mom — sleeping — at the hotel; Bruno — playing basketball — in Amborovy.",
        ["Sue — swimming — in the sea"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR, chart"),
    stepRow(["5. Synthesis"],
      [fp("Listen and repeat the sentences. Notice the special verbs: “was watching”, “was sleeping” — long actions, like a film playing!")],
      [fp("Listen. Repeat.")], "Repetition drill", "Audio / QR"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Tell Bruno’s story to your neighbour with the chart — three sentences minimum, with one exclamation at the end!")],
      [fp("Retell."),
       pAns("E.A.: Sue was swimming in the sea. Dad was watching TV while mom was sleeping. How boring it was!",
        ["Dad was watching TV"], { size: SZ.FICHE })],
      "Pair work", "Chart"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where did Bruno’s family go last month?"),
       fp("2. Why was the vacation boring for Bruno?")],
      [fp("Answer."),
       pAns("E.A.: to Mahajanga; because they couldn’t spend time together.",
        ["to Mahajanga"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}
function lessonS20() {
  return [
    p([run("LESSON OF THE DAY — SESSION 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: BRUNO’S VACATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    brunoTextBox(),
    p("", { after: 60 }),
    img("u3_vacation.png", 380, 768 / 1376),
    p([run("The chart of the story:", { bold: true })], { after: 50 }),
    bullet([run("Sue — ", { bold: true }), run("swimming — in the calm sea.", { bold: true, color: C.BLUE })]),
    bullet([run("Dad — ", { bold: true }), run("watching TV — at the hotel.", { bold: true, color: C.BLUE })]),
    bullet([run("Mom — ", { bold: true }), run("sleeping — at the hotel.", { bold: true, color: C.BLUE })]),
    bullet([run("Bruno — ", { bold: true }), run("playing basketball — in Amborovy.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("New words of the passage:", { bold: true })], { after: 50 }),
    vocab("to spend time together", "tou spènnde taïme touguèdheur", "to be with the family"),
    vocab("calm", "kâme", "quiet, without big waves"),
    vocab("whereas", "ouèraze", "to contrast two facts"),
    vocab("to choose — chose", "tou tchouze — tchôouze", "to pick one option"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u3_bruno.png", label: "Bruno’s vacation — listen and complete the chart", url: AUDIO.bruno }], COLOR),
  ];
}

// ---------- S21 — Past continuous vs simple past ----------
function ficheS21() {
  const meta = META("Past continuous vs simple past — while and when",
    "By the end of the lesson, learners will be able to combine the past continuous (long action) and the simple past (short action) with “while” and “when”.",
    "3 / 8", "the passage of S20");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What was Bruno’s dad doing at the hotel?"),
       fp("2. Why was the vacation annoying for Bruno?")],
      [fp("Answer."),
       fp("E.A.: He was watching TV; they couldn’t spend time together.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime time! I mime a LONG action (sweeping, sweeping, sweeping…) and suddenly a SHORT action (a sneeze!). Which action was long? Which was short?")],
      [fp("Watch. Answer.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Past continuous vs simple past ». By the end of this lesson, you will film the past: the long scene AND the sudden event!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe in Bruno’s passage: “My dad WAS WATCHING TV while my mom WAS SLEEPING.” And: “Sue WENT to the beach.” Which is the long action? Which is the short one?")],
      [fp("Observe. Answer."),
       fp("E.A.: was watching / was sleeping = long; went = short.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machines: past continuous = WAS/WERE + verb-ING (the long film). Simple past = verb 2 (the quick photo). WHILE + past continuous (While I was eating…); WHEN + simple past (…when the phone rang!).")],
      [fp("Build sentences."),
       fp("E.A.: I was doing my homework when the lights went out!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: long action → was/were + V-ing; short action → simple past; while + long, when + short. Two long actions? while + both: Dad was watching TV while mom was sleeping.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Survey! Ask three schoolmates: “What were you doing yesterday at 6 pm?” Take notes, then report: “Hery was helping his mother when I called him!” Use one adjective of S19!")],
      [fp("Ask. Note. Report."),
       pAns("E.A.: Vola was cooking rice while her sister was sweeping. What a busy evening!",
        ["Vola was cooking rice"], { size: SZ.FICHE })],
      "Personalization technique", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I … (sleep) when the dog … (bark)."),
       fp("2. Make one sentence with “while” and two long actions.")],
      [fp("Answer."),
       pAns("E.A.: was sleeping / barked; Dad was reading while mom was cooking.",
        ["was sleeping / barked"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}
function lessonS21() {
  return [
    p([run("LESSON OF THE DAY — SESSION 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("PAST CONTINUOUS VS SIMPLE PAST", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE TWO CAMERAS OF THE PAST", [
      bullet([run("PAST CONTINUOUS = the long film 🎬:", { bold: true }), run("  was/were + verb-ING", { bold: true, color: C.BLUE }), run("  →  My dad was watching TV.")]),
      bullet([run("SIMPLE PAST = the quick photo 📸:", { bold: true }), run("  verb 2", { bold: true, color: C.BLUE }), run("  →  Sue went to the beach. The glass broke!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The two connectors:", { bold: true })], { after: 50 }),
    bullet([run("WHILE + past continuous:", { bold: true, color: C.BLUE }), run("  While I was eating, the phone rang.")]),
    bullet([run("WHEN + simple past:", { bold: true, color: C.BLUE }), run("  I was sleeping when the dog barked.")]),
    bullet([run("Two long actions → while + both:", { bold: true, color: C.BLUE }), run("  Dad was watching TV while mom was sleeping.")]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("I "), run("was doing", { bold: true, color: C.BLUE }), run(" my homework "), run("when", { bold: true }), run(" the lights "), run("went out", { bold: true, color: C.BLUE }), run(". How annoying it was!")]),
    bullet([run("While", { bold: true }), run(" we "), run("were playing", { bold: true, color: C.BLUE }), run(" football, it "), run("started", { bold: true, color: C.BLUE }), run(" to rain.")]),
    bullet([run("She "), run("was reading", { bold: true, color: C.BLUE }), run(" a book "), run("when", { bold: true }), run(" she "), run("heard", { bold: true, color: C.BLUE }), run(" the noise.")]),
  ];
}

// ---------- S22 — The alibi game ----------
function ficheS22() {
  const meta = META("The alibi game — Who broke the glass?",
    "By the end of the lesson, learners will be able to narrate past events in a role play, using the past continuous and the simple past.",
    "4 / 8", "situation card");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: While I … (eat), the phone … (ring)."),
       fp("2. Give the form of the past continuous.")],
      [fp("Answer."),
       fp("E.A.: was eating / rang; was-were + verb-ing.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The situation: a glass is broken at home, and mother is investigating EVERYONE! What words do we need? Brainstorm: break-broke-broken, whose fault, clean it up, What was X doing when…?")],
      [fp("Brainstorm. I write on the board.")], "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to play « Alibi »! By the end of this lesson, you will defend yourself in English like a lawyer: “It wasn’t me! I was reading!”")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Read the model dialogue: Mother: “A broken glass — how terrible! Who broke it?” Mirana: “It wasn’t me! I was reading a book when I heard it.” Paola: “While she was reading, I was having a nap.” Peter: “Me, I was taking a bath!”")],
      [fp("Read. Observe the alibis.")],
      "Whole-class work", "Board dialogue"),
    stepRow(["4. Analysis"],
      [fp("Every alibi = past continuous! “I WAS READING when I heard it.” The investigator’s question: “What were you doing when the glass broke?” Prepare your group dialogue: one mother, three suspects.")],
      [fp("Prepare in groups.")],
      "Group work", "Situation card"),
    stepRow(["5. Synthesis"],
      [fp("So: the question “What were you doing when…?” and the alibi “I was + V-ing”. And the exclamations: How terrible! What a disaster!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play your alibi dialogues! The class listens and votes: who is the guilty one? Whose alibi was weak?")],
      [fp("Role play. Vote."),
       pAns("E.A.: Mother: Who broke it? — It wasn’t me! I was sweeping the yard when I heard the noise!",
        ["It wasn’t me!"], { size: SZ.FICHE })],
      "Using game (alibi), role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask the investigator’s question for: the cake disappeared at 4 pm."),
       fp("2. Give your alibi!")],
      [fp("Answer."),
       pAns("E.A.: What were you doing when the cake disappeared? — I was playing outside with Koto!",
        ["What were you doing"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LESSON OF THE DAY — SESSION 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE ALIBI GAME", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE MODEL DIALOGUE", [
      pr([run("Mother — ", { bold: true, color: COLOR }), run("A broken glass — how terrible! Who broke it?")], { after: 50 }),
      pr([run("Mirana — ", { bold: true, color: COLOR }), run("It wasn’t me! I was reading a book when I heard it.")], { after: 50 }),
      pr([run("Paola — ", { bold: true, color: COLOR }), run("I was with Mirana. While she was reading, I was having a nap.")], { after: 50 }),
      pr([run("Peter — ", { bold: true, color: COLOR }), run("Me, I was taking a bath!")], { after: 50 }),
    ]),
    p("", { after: 60 }),
    p([run("The detective kit:", { bold: true })], { after: 50 }),
    bullet([...kw("Who broke it?", "hou brôouke ite"), run("  —  break → broke → broken!")]),
    bullet([...kw("What were you doing when…?", "ouate ouèr iou douinng ouène"), run("  —  the investigator’s question.")]),
    bullet([...kw("It wasn’t me!", "ite ouazeunte mi"), run("  —  the defence!")]),
    bullet([...kw("Whose fault is it?", "houze fôlte ize ite"), run("  —  who is responsible?")]),
    bullet([...kw("Clean it up!", "kline ite eupe"), run("  —  make it clean again.")]),
    p("", { after: 60 }),
    p([run("The perfect alibi (always past continuous!):", { bold: true })], { after: 50 }),
    bullet([run("I was taking a bath.   I was having a nap.   I was sweeping the yard.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("Speak your alibi with a calm, strong voice and look at the class: an actor who believes himself convinces everybody!", { after: 40 }),
    ]),
  ];
}

// ---------- S23 — Listening: used to ----------
function ficheS23() {
  const meta = META("Listening: past habits — used to",
    "By the end of the lesson, learners will be able to comprehend an oral dialogue about past habits and use “used to” in all its forms.",
    "5 / 8", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give your alibi for yesterday, 6 pm."),
       fp("2. While or when? “… I was cooking, Koto arrived.”")],
      [fp("Answer."),
       fp("E.A.: I was washing the dishes!; While.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the two pictures: a child with thick glasses playing outdoors — and the same person today with a phone. What changed? Your feelings?")],
      [fp("React."),
       fp("E.A.: Before, children played outside; now, phones everywhere!")],
      "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Past and present habits »: Mali interviews Lilly about her childhood. The magic machine: USED TO!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. What did Lilly use to wear? 2. Was she tall? 3. Why did children use to play outdoors all the time?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. very thick glasses. 2. No, she used to be quite small. 3. They didn’t use to have phones, and the streets used to be safer.",
        ["very thick glasses"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("The machine: USED TO + verb = a past habit, finished today. Affirmative: I used to wear glasses. Negative: We didn’t use to have phones. Question: Did you use to get good marks? (after “did” → use to, no -d!)")],
      [fp("Observe the three forms."),
       fp("E.A.: used to / didn’t use to / Did you use to…?")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: used to + verb = before, but not now. The three forms on the board — and listen and repeat the dialogue!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Audio / QR"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Tell your neighbour three past habits of YOUR childhood: I used to…, I didn’t use to… — and one question: Did you use to…?")],
      [fp("Speak in pairs."),
       pAns("E.A.: I used to cry every morning! I didn’t use to drink coffee. Did you use to play in the rice fields?",
        ["I used to cry every morning!"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write one affirmative, one negative and one question with “used to”."),
       fp("2. What did Lilly use to wear?")],
      [fp("Answer."),
       pAns("E.A.: I used to walk to school. She didn’t use to eat fish. Did he use to sing? — very thick glasses.",
        ["I used to walk to school."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("PAST HABITS: USED TO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    habitsDialogueBox(),
    p("", { after: 60 }),
    box("THE USED TO MACHINE (past habit — finished today!)", [
      bullet([run("Affirmative: ", { bold: true }), run("I used to wear thick glasses.", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: ", { bold: true }), run("We didn’t use to have phones.", { bold: true, color: C.BLUE }), run("  (after “did” → use to, no -d!)", { italic: true })]),
      bullet([run("Question: ", { bold: true }), run("Did you use to get good marks?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("New words of the dialogue:", { bold: true })], { after: 50 }),
    vocab("thick glasses", "thik glâssize", "strong eye glasses"),
    vocab("to be honest…", "tou bi onèste", "to tell the truth…"),
    vocab("childhood", "tchaïldhoude", "the time when you were a child"),
    vocab("memories", "mèmeuriz", "pictures of the past in your head"),
    vocab("safe — safer", "séife — séifeur", "without danger"),
    vocab("outdoors", "aoutedôrz", "outside the house"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u3_habits.png", label: "Past and present habits — listen and repeat", url: AUDIO.habits }], COLOR),
  ];
}

// ---------- S24 — be used to + so/neither + contrast ----------
function ficheS24() {
  const meta = META("Be used to + V-ing — So did I! Neither did I!",
    "By the end of the lesson, learners will be able to express present habits with “be used to + V-ing”, agree with “so/neither + aux + subject” and contrast with but, whereas, however.",
    "6 / 8", "interview chart");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the three forms of “used to”."),
       fp("2. What did children use to do, in the dialogue?")],
      [fp("Answer."),
       fp("E.A.: used to / didn’t use to / Did…use to; play outdoors all the time.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick answers: what do you do every night before going to sleep? One habit each!")],
      [fp("Answer."),
       fp("E.A.: I read; I brush my teeth; I listen to the radio…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Present habits and agreements ». By the end, you will say your habits of TODAY and agree like an echo: So am I! Neither do I!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I’m used to READING a book before going to sleep. (present habit — be used to + V-ing!) Compare: I used to READ comics when I was small. (past habit — used to + verb!) What changed?")],
      [fp("Compare."),
       fp("E.A.: be used to + V-ing = now; used to + verb = before.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The echo machine: positive sentence → SO + aux + subject (I used to play. — So did I!). Negative sentence → NEITHER + aux + subject (I don’t smoke. — Neither do I!). The aux copies the sentence: did, do, am, was…")],
      [fp("Practise the echo."),
       fp("E.A.: I’m used to reading. — So am I! I didn’t use to swim. — Neither did I!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: be used to + V-ing (now); so/neither + aux + subject (the echo); and the contrast words: but, whereas, however. I used to be lazy, but now I work hard!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview! Copy the chart (names / past habits / present habits), interview four schoolmates, then report with contrast: “Hery used to play marbles, whereas now he is used to playing football.”")],
      [fp("Interview. Fill the chart. Report."),
       pAns("E.A.: Vola used to cry at school; however, now she is used to speaking in front of the class!",
        ["Vola used to cry at school"], { size: SZ.FICHE })],
      "Personalization technique", "Interview chart"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Answer with the echo: “I’m used to getting up at five.” / “I didn’t use to like rice.”"),
       fp("2. One sentence with “whereas”.")],
      [fp("Answer."),
       pAns("E.A.: So am I! / Neither did I!; I used to walk, whereas now I take the bus.",
        ["So am I!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("BE USED TO — SO DID I! NEITHER DID I!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("PAST HABIT vs PRESENT HABIT", [
      bullet([run("used to + verb", { bold: true, color: C.BLUE }), run(" = before, not now  →  I used to read comics when I was small.")]),
      bullet([run("be used to + verb-ING", { bold: true, color: C.BLUE }), run(" = my habit NOW  →  I’m used to reading a book before going to sleep.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE ECHO MACHINE — SO / NEITHER + AUX + SUBJECT", [
      bullet([run("Positive → SO:", { bold: true }), run("  “I used to go to school with my mother.” → "), run("So did I!", { bold: true, color: C.BLUE })]),
      bullet([run("Negative → NEITHER:", { bold: true }), run("  “I didn’t use to have a phone.” → "), run("Neither did I!", { bold: true, color: C.BLUE })]),
      bullet([run("The aux copies the sentence:", { bold: true }), run("  So am I! So do I! Neither was I! Neither do I!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The contrast words:", { bold: true })], { after: 50 }),
    bullet([run("but:", { bold: true, color: C.BLUE }), run("  I used to be lazy, but now I work hard.")]),
    bullet([run("whereas:", { bold: true, color: C.BLUE }), run("  Sue went to the beach, whereas the parents stayed at the hotel.")]),
    bullet([run("however:", { bold: true, color: C.BLUE }), run("  I didn’t like myself very much. However, I had a very happy childhood.")]),
  ];
}

// ---------- S25 — Reading: Titanic ----------
function ficheS25() {
  const meta = META("Reading: the story of the Titanic",
    "By the end of the lesson, learners will be able to comprehend the gist and detailed information of a story and imagine another end.",
    "7 / 8", "the text, picture of a ship");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Echo: “I’m used to reading at night.”"),
       fp("2. One sentence with “however”.")],
      [fp("Answer."),
       fp("E.A.: So am I!; I was tired; however, I finished my homework.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Look at the picture: a big ship at night, near the ice… The title is “Titanic”. Guess: what is the story about? Happy or sad?")],
      [fp("Guess."),
       fp("E.A.: a ship accident; a sad story.")],
      "Using visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a TRUE story: « Titanic » — the memory of Eva Hart, who was on the ship. Read like a detective, feel like a poet!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text accurately. Gist question: who is Eva Hart?")],
      [fp("Read. Answer."),
       fp("E.A.: one of the people who survived the sinking of the Titanic.")],
      "Skimming and scanning", "The text"),
    stepRow(["4. Analysis (detailed reading)"],
      [fp("Read again and answer: 1. How old was Eva when the ship sank? 2. What happened to the boat? 3. Who got into the lifeboat? 4. What does Mrs Hart think about the Titanic today?")],
      [fp("Scan. Answer."),
       pAns("E.A.: 1. seven. 2. it sank. 3. Eva and her mother — but not her father. 4. it should be left at the bottom of the sea, as a memorial.",
        ["seven"], { size: SZ.FICHE })],
      "Individual work", "The text"),
    stepRow(["5. Synthesis"],
      [fp("Check your predictions: was the story what you guessed? Share true or false with the class. New words: survive, sink-sank-sunk, lifeboat, memorial.")],
      [fp("Check. Share.")], "Group work", "----"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Imagine and write ANOTHER end of the story (3 sentences) with these words: help, rescue, save, first-aid worker, rescuer, lifeboat…")],
      [fp("Write."),
       pAns("E.A.: A rescuer heard the cries. He saved Eva’s father with a lifeboat. The first-aid workers helped everybody. What a wonderful end!",
        ["He saved Eva’s father"], { size: SZ.FICHE })],
      "Group work", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. How old was Eva Hart when the Titanic sank?"),
       fp("2. Why should the Titanic stay at the bottom of the sea, for Mrs Hart?")],
      [fp("Answer."),
       pAns("E.A.: seven; as a memorial to those who died.",
        ["as a memorial"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}
function lessonS25() {
  return [
    p([run("LESSON OF THE DAY — SESSION 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: TITANIC", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_titanic.png", 400, 768 / 1376),
    titanicTextBox(),
    p("", { after: 60 }),
    p([run("New words of the story:", { bold: true })], { after: 50 }),
    vocab("to survive", "tou seurvaïve", "to stay alive after a danger"),
    vocab("to sink — sank — sunk", "tou sinnk — sannk — sonnk", "to go down under the water"),
    vocab("a lifeboat", "e laïfbôoute", "a small boat that saves lives"),
    vocab("to rescue / a rescuer", "tou rèskiou / e rèskioueur", "to save someone in danger"),
    vocab("a memorial", "e mimôrial", "something that helps us remember"),
    p("", { after: 60 }),
    box("THE STORY IN THE PAST TENSES", [
      bullet([run("Short facts — simple past:", { bold: true }), run("  The ship sank. Her father died. She heard the cries.", { bold: true, color: C.BLUE })]),
      bullet([run("Age and state — was/were:", { bold: true }), run("  She was seven when the ship sank.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S26 — Writing + cross-cultural ----------
function ficheS26() {
  const meta = META("Writing a cohesive paragraph — kings, queens and presidents",
    "By the end of the lesson, learners will be able to write a cohesive paragraph about past and present habits or changes, with a topic sentence and a restatement sentence.",
    "8 / 8", "pictures of former leaders");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Who was Eva Hart?"),
       fp("2. Give one sentence with “used to” about your childhood.")],
      [fp("Answer."),
       fp("E.A.: a survivor of the Titanic; I used to play marbles.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Create sentences from hints: She / fat / thin. He / lazy / hard-working. We / walk / take the bus.")],
      [fp("Create."),
       fp("E.A.: She used to be fat, but now she is thin!")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to build a PARAGRAPH — like a house: the roof (topic sentence), the walls (arguments), the floor (restatement sentence)!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Rearrange these sentences into a paragraph: a) Now I am used to studying every evening. b) My life has really changed. c) I used to play all day. d) In short, I became a serious student. — Which is the topic sentence? The restatement?")],
      [fp("Rearrange."),
       fp("E.A.: b (topic) — c — a — d (restatement).")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write five sentences contrasting YOUR past and present habits (used to / be used to + but, whereas, however). Then write a topic sentence that summarizes them.")],
      [fp("Write the five sentences + the topic sentence.")],
      "Individual work", "Exercise books"),
    stepRow(["5. Synthesis (while-writing)"],
      [fp("Say the topic sentence in different words → that is your restatement sentence, at the end. Now rewrite everything as ONE continuous paragraph. Check the grammar!")],
      [fp("Write the paragraph.")],
      "Individual work", "Exercise books"),
    stepRow(["6. Practice (post-writing + culture)"],
      [fp("Exchange and correct in groups. Then the culture corner: look at the leaders! Queen Ranavalona I and King Andrianampoinimerina used to live in the Manjakamiadana palace; Queen Elizabeth II used to live in Windsor Castle and Buckingham Palace; President Barack Obama used to work in the White House. Make one “used to” sentence about a leader!")],
      [fp("Correct. Make sentences."),
       pAns("E.A.: King Andrianampoinimerina used to live in Ambohimanga. Madagascar used to be a kingdom, whereas now it is a republic!",
        ["used to be a kingdom"], { size: SZ.FICHE })],
      "Group work, using visual aids", "Pictures of leaders"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three parts of a cohesive paragraph."),
       fp("2. Read your paragraph to the class.")],
      [fp("Answer. Read."),
       pAns("E.A.: topic sentence, arguments, restatement sentence.",
        ["topic sentence"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}
function lessonS26() {
  return [
    p([run("LESSON OF THE DAY — SESSION 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE COHESIVE PARAGRAPH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PARAGRAPH HOUSE", [
      bullet([run("The roof — TOPIC SENTENCE:", { bold: true }), run("  the big idea: “My life has really changed.”", { bold: true, color: C.BLUE })]),
      bullet([run("The walls — ARGUMENTS:", { bold: true }), run("  the five sentences with used to / be used to + contrast words.", { bold: true, color: C.BLUE })]),
      bullet([run("The floor — RESTATEMENT SENTENCE:", { bold: true }), run("  the big idea again, in different words: “In short, I became a new person.”", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    bullet([run("My life has really changed. I used to play all day, whereas now I am used to studying every evening. I used to be afraid of English; however, now I love speaking it. I didn’t use to help at home, but now I cook with my mother. In short, I became a serious student!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("CULTURE CORNER — FORMER LEADERS", [
      bullet([run("Madagascar: ", { bold: true }), run("Queen Ranavalona I and King Andrianampoinimerina used to live in the Manjakamiadana palace in Antananarivo.")]),
      bullet([run("United Kingdom: ", { bold: true }), run("Queen Elizabeth II used to live in Windsor Castle and Buckingham Palace.")]),
      bullet([run("United States: ", { bold: true }), run("President Barack Obama used to work in the White House.")]),
      bullet([run("The words: ", { bold: true }), run("king, queen, prince, princess, monarch — a kingdom, a republic, a palace, a castle.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 3", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Describing past events"),
    bullet([run("Positive: amazing, wonderful, fantastic. Negative: strange, boring, awful, annoying.", { bold: true, color: C.BLUE })]),
    bullet([run("What a beautiful day! How annoying it was! Wow! Super!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Past continuous vs simple past"),
    bullet([run("Long action (film): was/were + V-ing. Short action (photo): verb 2.", { bold: true, color: C.BLUE })]),
    bullet([run("while + past continuous; when + simple past:", { bold: true, color: C.BLUE }), run("  I was sleeping when the dog barked.")]),
    bullet([run("The alibi question: What were you doing when…?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Past and present habits"),
    bullet([run("used to + verb = past habit:", { bold: true, color: C.BLUE }), run("  I used to wear thick glasses. / didn’t use to / Did you use to…?")]),
    bullet([run("be used to + V-ing = present habit:", { bold: true, color: C.BLUE }), run("  I’m used to reading before going to sleep.")], { after: 100 }),
    sub("4. The echo and the contrast"),
    bullet([run("So + aux + subject (positive); Neither + aux + subject (negative):", { bold: true, color: C.BLUE }), run("  So did I! Neither do I!")]),
    bullet([run("but, whereas, however", { bold: true, color: C.BLUE }), run("  —  to contrast past and present.")], { after: 100 }),
    sub("5. The cohesive paragraph"),
    bullet([run("Topic sentence → arguments → restatement sentence.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 3 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Exclaim: 1. (a beautiful day) → What …! 2. (the film was boring) → How …! 3. (an amazing story) → What …!")]),
    pAns("Answers: 1. What a beautiful day! 2. How boring it was! 3. What an amazing story!", ["What a beautiful day!"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Past continuous or simple past? 1. Dad … (watch) TV while mom … (sleep). 2. I … (read) when I … (hear) the noise. 3. Sue … (go) to the beach alone.")]),
    pAns("Answers: 1. was watching / was sleeping 2. was reading / heard 3. went.", ["was watching / was sleeping"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("While or when? 1. … she was reading, I was having a nap. 2. I was taking a bath … the phone rang.")]),
    pAns("Answers: 1. While 2. when.", ["While 2. when"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Complete with used to / didn’t use to / Did … use to: 1. Streets … be safer than now. 2. We … have phones. 3. … you … get good marks?")]),
    pAns("Answers: 1. used to 2. didn’t use to 3. Did you use to.", ["didn’t use to"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Answer with the echo: 1. “I used to play outdoors.” → … 2. “I don’t smoke.” → … 3. “I’m used to getting up early.” → …")]),
    pAns("Answers: 1. So did I! 2. Neither do I! 3. So am I!", ["So did I!"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Create sentences from hints with a contrast word: 1. She / fat / thin. 2. He / walk to school / take the bus.")]),
    pAns("Answers: 1. She used to be fat, but now she is thin. 2. He used to walk to school, whereas now he takes the bus.", ["She used to be fat"]),
    p("", { after: 80 }),
    pr([run("Exercise 7. ", { bold: true }), run("Answer on the Titanic: 1. How old was Eva Hart when the ship sank? 2. Who did not get into the lifeboat?")]),
    pAns("Answers: 1. seven 2. her father.", ["her father"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s27", "SESSION 27 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: OUR TIME", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give three positive and three negative adjectives for events."),
    pAns("E.A.: amazing, wonderful, fantastic / strange, boring, awful.", ["amazing"]),
    p("2. Exclaim with “What a…” and with “How…”."),
    pAns("E.A.: What a wonderful day! How annoying it was!", ["What a wonderful day!"]),
    p("3. In Bruno’s vacation: what was each person doing, and where?"),
    pAns("E.A.: Sue was swimming in the sea; dad was watching TV and mom was sleeping at the hotel; Bruno was playing basketball in Amborovy.", ["Sue was swimming"]),
    p("4. Give the forms: past continuous and simple past — and their jobs."),
    pAns("E.A.: was/were + V-ing = long action; verb 2 = short action.", ["was/were + V-ing"]),
    p("5. While or when? Give one rule and one example of each."),
    pAns("E.A.: while + past continuous (While I was eating…); when + simple past (…when the phone rang).", ["while + past continuous"]),
    p("6. Give the investigator’s question and one alibi."),
    pAns("E.A.: What were you doing when the glass broke? — I was reading a book!", ["What were you doing"]),
    p("7. The three forms of “used to”?"),
    pAns("E.A.: I used to…; I didn’t use to…; Did you use to…?", ["didn’t use to"]),
    p("8. Difference between “used to + verb” and “be used to + V-ing”?"),
    pAns("E.A.: past habit (finished) vs present habit (now).", ["past habit"]),
    p("9. Echo: “I used to go to school with my mother.” / “I didn’t use to have a phone.”"),
    pAns("E.A.: So did I! / Neither did I!", ["So did I!"]),
    p("10. Give the three parts of a cohesive paragraph."),
    pAns("E.A.: topic sentence, arguments, restatement sentence.", ["topic sentence"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s28", "SESSION 28 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 3: OUR TIME", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Past continuous or simple past? 1. I … (sleep) when the dog … (bark). 2. While mom … (cook), dad … (read) the newspaper.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with used to / didn’t use to / Did … use to: 1. Lilly … wear thick glasses. 2. We … have phones. 3. … you … play outdoors? 4. The streets … be safer than now.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Answer with the echo (So/Neither): 1. “I used to get good marks.” 2. “I don’t like noise.” 3. “I’m used to reading at night.” 4. “I wasn’t at home yesterday.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer on the texts of the unit: 1. Why was Bruno’s vacation boring? 2. What was his dad doing while his mom was sleeping? 3. How old was Eva Hart when the Titanic sank? 4. What does Mrs Hart want for the Titanic?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a cohesive paragraph (5-6 sentences) about your past and present habits: topic sentence + arguments with “used to”, “be used to” and one contrast word + restatement sentence.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: was sleeping / barked; was cooking / was reading. (2 pts each)", ["was sleeping / barked"]),
    pAns("Ex.2: used to; didn’t use to; Did you use to; used to. (1 pt each)", ["Did you use to"]),
    pAns("Ex.3: So did I! Neither do I! So am I! Neither was I! (1 pt each)", ["Neither was I!"]),
    pAns("Ex.4: they couldn’t spend time together; he was watching TV; seven; it should be left at the bottom of the sea as a memorial. (1 pt each)", ["he was watching TV"]),
    pAns("Ex.5 (model): My habits have changed. I used to play marbles, whereas now I am used to playing basketball. I didn’t use to read; however, now I read every night. In short, I am a new person! (4 pts: structure 2, grammar 2)", ["My habits have changed."]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can describe events: amazing, wonderful — boring, awful.",
      "I can exclaim: What a beautiful day! How annoying it was!",
      "I can use the past continuous for long actions and the simple past for short actions.",
      "I can combine them with “while” and “when” — and give an alibi!",
      "I can talk about past habits with “used to” (all three forms).",
      "I can talk about present habits with “be used to + V-ing”.",
      "I can agree with “So did I!” and “Neither did I!”.",
      "I can contrast with but, whereas, however.",
      "I can write a cohesive paragraph: topic sentence, arguments, restatement.",
    ], "NEXT STOP → UNIT 4: FOOD!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
