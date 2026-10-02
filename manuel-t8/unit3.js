// T8 — UNIT 3 — DAILY LIFE (10 séances + révision + test) — Sessions 22 à 33 / 78
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B9770E"; // ocre doré
const SHADE = "FDEBD0";
const TOTAL = 78;
const AUDIO = {
  kotoday: "https://drive.google.com/uc?export=download&id=1YvB7JWO-bWhYkpp-fy39Q8dIoFbop8VX",
  hobbies: "https://drive.google.com/uc?export=download&id=1lqvEl797MDvUY8vXFUtqNTjL7CrjvLU-",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — DAILY LIFE", title, slo,
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
function kotoDayBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("KOTO’S DAY (listening passage)", [
    L("Hello! My name is Koto. Every day, I wake up at five o’clock. First, I make my bed and I tidy my room. Then, I fetch water for my family. After that, I wash my face and I have breakfast."),
    L("I always go to school on foot. Classes start at seven o’clock. At noon, I go home and I help my mother. I sometimes prepare the meal. In the afternoon, I go back to school."),
    L("In the evening, I usually do my homework. Then, I have dinner with my family. I never go to bed late. I go to bed at eight o’clock. Good night!", true),
  ]);
}
function hobbiesBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("MY HOBBIES (listening passage)", [
    L("Hi! I am Soa. I love my hobbies! On Saturdays, I play basketball with my friends, and my brother plays football. I like music, so I play the guitar every evening."),
    L("My sister does not play the guitar, but she listens to music. On Sundays, we go swimming in the river, or we play dominoes at home."),
    L("My father likes chess, yet he never wins! And you? What is your favourite hobby?", true),
  ]);
}
function lovaTextBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("A DAY IN LOVA’S LIFE (reading text)", [
    L("Lova is a pupil in Toliara. Every morning, she gets up at five o’clock and she makes her bed. First, she fetches water, then she has breakfast with her family."),
    L("She always goes to school on foot, but her brother goes by bus. At noon, she goes home and she helps her mother to cook the meal."),
    L("In the afternoon, she often plays basketball, or she listens to music. In the evening, she usually does her homework, so she never watches TV late. She goes to bed at nine o’clock.", true),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — DAILY LIFE", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("I always go to school on foot!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_daily_routine.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name my daily activities and the chores: wake up, fetch water, tidy the room…;"),
    p("• use the present simple for the habits: Koto wakes up at five o’clock;"),
    p("• say how often with the frequency adverbs: always, usually, sometimes, never;"),
    p("• tell a day in order with the sequence markers: first, then, after that, finally;"),
    p("• talk about transport: on foot, by bus, by car, by train, by boat;"),
    p("• talk about my hobbies: play football, go swimming, play the guitar;"),
    p("• join my ideas with the coordinators: and, but, or, yet, so;"),
    p("• read, then write a short text about my daily life.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 2)", [
      p("In Unit 2, the classroom spoke English: Stand up! Could you lend me a pen, please?"),
      p("In Unit 3, YOUR whole day speaks English: from “I wake up at five” to “I go to bed at eight”!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u3_koto_day.png", label: "Koto’s day — the daily activities", url: AUDIO.kotoday }], COLOR),
  ];
}

// ---------- S22 — Daily activities and chores ----------
function ficheS22() {
  const meta = META("The daily activities and the chores",
    "By the end of the lesson, learners will be able to name daily activities and chores.",
    "1 / 10", "pictures / stick figures, flashcards of chores");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 2.) Answer these questions:"),
       fp("1. Give two classroom instructions."),
       fp("2. Borrow my pen politely!")],
      [fp("Answer."),
       fp("E.A.: Stand up! Don’t talk!; May I borrow your pen, please?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: watch my mimes and guess the action! (T mimes: waking up… washing the face… sweeping…)")],
      [fp("Watch. Guess the actions.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The daily activities and the chores ». By the end of this lesson, you will say your whole day in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the pictures and the stick figures: wake up, get up, make the bed, fetch water, tidy the room… Draw the meaning from the pictures (use transfer when necessary).")],
      [fp("Observe. Draw the meaning from the pictures.")],
      "Using visual-aids / Language transfer", "Pictures / stick figures"),
    stepRow(["4. Analysis"],
      [fp("Match the flashcards: picture of a chore ↔ flashcard with its meaning. Two families: the daily habits (wake up, have breakfast…) and the CHORES — the work at home (fetch water, cook the meal…).")],
      [fp("Match the flashcards. Classify habit / chore."),
       fp("E.A.: fetch water → chore; have breakfast → habit.")],
      "Matching flashcards", "Flashcards of chores"),
    stepRow(["5. Synthesis"],
      [fp("So: every day I wake up, I get up, I make the bed, I fetch water, I tidy the room, I prepare the meal. Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mime race in two teams: one student mimes a chore, the team says it in English — one point per correct chore!")],
      [fp("Mime. Name the chores."),
       pAns("E.A.: You fetch water! You tidy the room! You cook the meal!",
        ["fetch water"], { size: SZ.FICHE })],
      "Mime game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name three daily activities."),
       fp("2. Name three chores.")],
      [fp("Answer."),
       pAns("E.A.: wake up, have breakfast, go to bed; fetch water, tidy the room, cook the meal.",
        ["fetch water"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LESSON OF THE DAY — SESSION 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE DAILY ACTIVITIES AND THE CHORES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_daily_routine.png", 420, 768 / 1376),
    box("MY DAILY HABITS (every day!)", [
      vocab("to wake up / to get up", "tou ouéik eup / tou guète eup"),
      vocab("to make the bed", "tou méik dhe bède"),
      vocab("to wash my face", "tou ouôch maï féiss"),
      vocab("to have breakfast / lunch / dinner", "tou have brèkfeuste / leunntch / dineur"),
      vocab("to go to school", "tou gôou tou skoule"),
      vocab("to do my homework", "tou dou maï hôoumoueurk"),
      vocab("to go to bed", "tou gôou tou bède"),
    ]),
    p("", { after: 60 }),
    box("THE CHORES (the work at home)", [
      vocab("to fetch water", "tou fètch ouôteur"),
      vocab("to tidy the room", "tou taïdi dhe roume"),
      vocab("to sweep the floor", "tou souipe dhe flôr"),
      vocab("to prepare / cook the meal", "tou pripèr / kouk dhe mile"),
      vocab("to wash the dishes", "tou ouôch dhe dichiz"),
      vocab("to feed the chickens", "tou fide dhe tchikinnz"),
    ]),
  ];
}

// ---------- S23 — Listening: Koto's day + present simple ----------
function ficheS23() {
  const meta = META("Listening: Koto’s day — the present simple for habits",
    "By the end of the lesson, learners will be able to comprehend the gist and the details of an oral passage about daily activities and draw the use of the present simple.",
    "2 / 10", "audio (QR code), images to number");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name two chores."),
       fp("2. Mime: fetch water!")],
      [fp("Answer. Mime."),
       fp("E.A.: tidy the room, cook the meal; (mime!)")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: this is Koto, a pupil like you. Guess: what does Koto do every day? Write two predictions.")],
      [fp("Predict the content."),
       fp("E.A.: He goes to school. He fetches water…")],
      "Predicting", "Koto’s picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Koto’s day » and discover the tense of the habits: the PRESENT SIMPLE.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen, identify and NUMBER the correct images in the order of the text. Second listening: 1. What time does Koto wake up? 2. How does he go to school? 3. What does he never do?")],
      [fp("Listen. Number the images. Answer."),
       fp("E.A.: at five o’clock; on foot; he never goes to bed late.")],
      "Audio / Question-answer", "Audio (QR code), images"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: check your predictions — true or false? Share to the class. Now observe: “I wake up… I fetch water… Koto wakeS up…” Which tense is it? When do we use it?")],
      [fp("Check predictions. Observe. Find the rule."),
       fp("E.A.: present simple; for habits, every day.")],
      "Eliciting technique", "Listening passage"),
    stepRow(["5. Synthesis"],
      [fp("So the PRESENT SIMPLE = the tense of the habits: I / you / we / they + verb; he / she / it + verb + S: Koto wakes up at five. Negative: He doesn’t go to bed late.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Transformation drill: “I fetch water” → “Koto fetches water”; “I go on foot” → “He goes on foot”…")],
      [fp("Transform with he/she."),
       pAns("E.A.: Koto fetches water. He goes on foot. He does his homework.",
        ["fetches"], { size: SZ.FICHE })],
      "Transformation drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. When do we use the present simple?"),
       fp("2. Put at the he-form: “I tidy my room.”")],
      [fp("Answer."),
       pAns("E.A.: for habitual actions; He tidies his room.",
        ["He tidies"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PRESENT SIMPLE: THE TENSE OF THE HABITS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    kotoDayBox(),
    p("", { after: 60 }),
    box("THE RULE", [
      bullet([run("I / you / we / they + verb: ", { bold: true }), run("I wake up at five. They go to school.", { bold: true, color: C.BLUE })]),
      bullet([run("he / she / it + verb + S: ", { bold: true }), run("Koto wakeS up. She fetchES water. He tidIES his room.", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: ", { bold: true }), run("I don’t go to bed late. He doesn’t watch TV.", { bold: true, color: C.RED })]),
      bullet([run("Question: ", { bold: true }), run("Do you fetch water? Does he go on foot?", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("WHEN? FOR THE HABITS!", [
      p("Every day, every morning, on Saturdays… = things we repeat → present simple!", { after: 40 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u3_koto_day.png", label: "Koto’s day — listen again", url: AUDIO.kotoday }], COLOR),
  ];
}

// ---------- S24 — Frequency adverbs ----------
function ficheS24() {
  const meta = META("How often…? The frequency adverbs",
    "By the end of the lesson, learners will be able to say how often they do their daily activities with the frequency adverbs.",
    "3 / 10", "frequency scale on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What tense do we use for the habits?"),
       fp("2. Put at the she-form: “I cook the meal.”")],
      [fp("Answer."),
       fp("E.A.: the present simple; She cooks the meal.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to Koto’s sentences again: “I ALWAYS go on foot. I SOMETIMES prepare the meal. I NEVER go to bed late.” Which little words did you hear?")],
      [fp("Listen. Spot the little words."),
       fp("E.A.: always, sometimes, never.")],
      "Eliciting technique", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The frequency adverbs ». By the end of this lesson, you will answer the question: How often…?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the frequency scale: always (100%) → usually → often → sometimes → rarely → never (0%). Place each adverb on the scale.")],
      [fp("Observe. Place the adverbs on the scale.")],
      "Using visual-aids", "Frequency scale"),
    stepRow(["4. Analysis"],
      [fp("Where is the adverb in the sentence? “I ALWAYS go on foot.” — “He IS never late.” Find the rule!")],
      [fp("Observe. Find the rule."),
       fp("E.A.: BEFORE the verb, but AFTER the verb be.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: How often do you…? — I + adverb + verb: I usually fetch water. And with be: I am always happy! Listen and repeat the scale.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill: “I always fetch water” → replace: usually… sometimes… never… Then in pairs: How often do you sweep the floor? Answer with an adverb!")],
      [fp("Substitute. Ask and answer in pairs."),
       pAns("E.A.: How often do you cook? — I sometimes cook the meal.",
        ["How often"], { size: SZ.FICHE })],
      "Substitution drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the frequency scale (six adverbs)."),
       fp("2. Put the adverb in the right place: “I go to bed late. (never)”")],
      [fp("Answer."),
       pAns("E.A.: always, usually, often, sometimes, rarely, never; I never go to bed late.",
        ["I never go"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FREQUENCY ADVERBS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FREQUENCY SCALE", [
      vocab("always", "ôlouéiz", "100% — every time!"),
      vocab("usually", "ioujouali", "90%"),
      vocab("often", "ofeune", "70%"),
      vocab("sometimes", "seumtaïmz", "50%"),
      vocab("rarely", "rèrli", "10%"),
      vocab("never", "nèveur", "0% — no, no and no!"),
    ]),
    p("", { after: 60 }),
    box("THE PLACE OF THE ADVERB", [
      bullet([run("BEFORE the verb: ", { bold: true }), run("I always go to school on foot. Koto sometimes prepares the meal.", { bold: true, color: C.BLUE })]),
      bullet([run("AFTER the verb be: ", { bold: true }), run("She is never late. I am always happy!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("How often do you…?", "haou ofeune dou iou"), run("  —  "), run("How often do you fetch water? — I usually fetch water in the morning.", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
  ];
}

// ---------- S25 — Transport + sequence markers + interview ----------
function ficheS25() {
  const meta = META("The means of transport, the sequence markers and the interview",
    "By the end of the lesson, learners will be able to describe their daily activities in order and interview their peers.",
    "4 / 10", "pictures of transport, notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the frequency scale."),
       fp("2. How often do you tidy your room?")],
      [fp("Answer."),
       fp("E.A.: always → never; I always tidy my room!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("How does Koto go to school? And you? And your father, when he goes to town?")],
      [fp("Answer."),
       fp("E.A.: on foot; by bus; by car…")],
      "Question-answer", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the means of transport and the sequence markers — then YOU will interview your classmates like journalists!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pictures: to go ON foot (= to walk), to go BY bus, BY car, BY train, BY boat, BY plane. And in Koto’s text: FIRST, I make my bed. THEN, I fetch water. AFTER THAT, I have breakfast.")],
      [fp("Observe. Draw the meaning from the pictures.")],
      "Using visual-aids", "Pictures of transport"),
    stepRow(["4. Analysis"],
      [fp("Two rules to find: 1. BY + transport but ON + foot! 2. What do first, then, after that, finally do in the text?")],
      [fp("Find the rules."),
       fp("E.A.: by bus / on foot; they give the ORDER of the actions.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: First… Then… After that… Finally… + I go by bus / on foot. A day in order! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The interview! Make 5-7 yes/no and Wh-questions about your peer’s daily activities (Do you fetch water? What time do you get up? How do you go to school? How often do you cook?). Interview, note the answers, share your findings to the group.")],
      [fp("Write questions. Interview. Share the findings."),
       pAns("E.A.: Hery gets up at five. He never cooks. He goes to school on foot.",
        ["He goes to school on foot"], { size: SZ.FICHE })],
      "Interview / Group work", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I go … bus; I go … foot."),
       fp("2. Give the four sequence markers.")],
      [fp("Answer."),
       pAns("E.A.: by bus, on foot; first, then, after that, finally.",
        ["on foot"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(25, TOTAL, meta, rows, "s25");
}
function lessonS25() {
  return [
    p([run("LESSON OF THE DAY — SESSION 25", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("TRANSPORT AND SEQUENCE MARKERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE MEANS OF TRANSPORT", [
      vocab("to go on foot = to walk", "tou gôou onne foute / tou ouôk"),
      vocab("to go by bus / by car", "tou gôou baï beuss / baï kâr"),
      vocab("to go by train / by plane", "tou gôou baï tréine / baï pléine"),
      vocab("to go by boat / by ship", "tou gôou baï bôoute / baï chipe"),
      bullet([run("Attention: ", { bold: true, color: C.RED }), run("BY + transport, but ON foot!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SEQUENCE MARKERS (the order of the day)", [
      vocab("First, …", "feurste", "action number 1"),
      vocab("Then, …", "dhène", "the next action"),
      vocab("After that, …", "afteur dhate", "the next action again"),
      vocab("Finally, …", "faïnali", "the last action"),
      bullet([run("First, I make my bed. Then, I fetch water. After that, I have breakfast. Finally, I go to school.", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY INTERVIEW QUESTIONS (model)", [
      bullet([run("Do you fetch water? — Yes, I do. / No, I don’t.", { bold: true, color: C.BLUE })]),
      bullet([run("What time do you get up?", { bold: true, color: C.BLUE })]),
      bullet([run("How do you go to school?", { bold: true, color: C.BLUE })]),
      bullet([run("How often do you cook the meal?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S26 — Hobbies ----------
function ficheS26() {
  const meta = META("The hobbies: sports, games and music",
    "By the end of the lesson, learners will be able to name common hobbies and comprehend an oral passage about them.",
    "5 / 10", "pictures / stick figures of hobbies, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How do you go to school?"),
       fp("2. Tell your morning with two sequence markers.")],
      [fp("Answer."),
       fp("E.A.: on foot; First I get up, then I wash my face.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: what do you do when school is finished? Guess: what are Soa’s hobbies? Two predictions!")],
      [fp("Answer. Predict."),
       fp("E.A.: I play football; maybe Soa listens to music…")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The hobbies ». By the end of this lesson, you will talk about sports, games and music in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning from the pictures / stick figures: watch TV, listen to music, play basketball, swim, play dominoes, play the guitar… Then while-listening: listen to Soa: 1. What does she play on Saturdays? 2. Who plays football? 3. What do they do on Sundays?")],
      [fp("Observe. Listen. Answer."),
       fp("E.A.: basketball; her brother; they go swimming or play dominoes.")],
      "Using visual-aids / Audio", "Pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: check your predictions! Then match the flashcards: picture of a hobby ↔ its meaning. Classify: sport / game / music / leisure.")],
      [fp("Check predictions. Match. Classify."),
       fp("E.A.: basketball → sport; dominoes → game; guitar → music.")],
      "Matching flashcards", "Flashcards of hobbies"),
    stepRow(["5. Synthesis"],
      [fp("So the hobbies = what we love doing: sports (play football, swim, run), games (dominoes, fanorona, chess, card games), music (play the guitar, the piano, drums), leisure (watch TV, listen to music). Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: show a picture, your peer names the hobby and says: “I love it!” or “I don’t like it!”")],
      [fp("Name the hobbies. React."),
       pAns("E.A.: Play the guitar — I love it! Watch TV — I don’t like it!",
        ["I love it!"], { size: SZ.FICHE })],
      "Pair work", "Pictures of hobbies"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two sports, two games and one instrument."),
       fp("2. What are Soa’s hobbies?")],
      [fp("Answer."),
       pAns("E.A.: football, swimming; dominoes, chess; the guitar; basketball, the guitar, swimming.",
        ["the guitar"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(26, TOTAL, meta, rows, "s26");
}
function lessonS26() {
  return [
    p([run("LESSON OF THE DAY — SESSION 26", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE HOBBIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_hobbies.png", 420, 768 / 1376),
    box("SPORTS", [
      vocab("to play basketball / football / soccer / tennis", "tou pléi baskètbôl / foutbôl / sokeur / tèniss"),
      vocab("to run / to swim", "tou reune / tou souime"),
    ]),
    p("", { after: 60 }),
    box("GAMES", [
      vocab("to play dominoes / chess / card games / video games", "tou pléi dominôouz / tchèss / kârde guéimz / vidiôou guéimz"),
      vocab("fanorona", "fanourouna", "our Malagasy game of champions!"),
    ]),
    p("", { after: 60 }),
    box("MUSIC AND LEISURE", [
      vocab("to play the guitar / the piano / drums", "tou pléi dhe guitâr / dhe pianôou / dreumz"),
      vocab("to watch TV", "tou ouôtch tivi"),
      vocab("to listen to music", "tou lisseune tou miouzik"),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u3_hobbies.png", label: "My hobbies — Soa’s passage", url: AUDIO.hobbies }], COLOR),
  ];
}

// ---------- S27 — play / go + V-ing ----------
function ficheS27() {
  const meta = META("Play or go + V-ing? Talking about activities",
    "By the end of the lesson, learners will be able to use play + game/sport and the gerund go + V-ing to express activities.",
    "6 / 10", "audio (QR code), pictures of hobbies");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three hobbies."),
       fp("2. What instrument does Soa play?")],
      [fp("Answer."),
       fp("E.A.: football, chess, watch TV; the guitar.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to Soa again: “I PLAY basketball… we GO SWIMMING in the river.” Two different machines! Which ones?")],
      [fp("Listen. Spot play and go swimming.")],
      "Audio", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn when to say PLAY and when to say GO + verb-ING. By the end of this lesson, no more mistakes!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two families on the board: play football, play dominoes, play the guitar / go swimming, go running, go angling, go skiing, go windsurfing.")],
      [fp("Observe the two families.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Find the rules: when PLAY? when GO + V-ing? And the little word “the” — for what?")],
      [fp("Find the rules."),
       fp("E.A.: play + games and ball sports; go + activity in -ing; play THE + instrument.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: PLAY + game / sport (play chess, play tennis), PLAY THE + instrument (play the piano), GO + V-ING for the moving activities (go swimming, go angling = fishing!). Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Sorting race: I say an activity, you shout the full form! “swimming!” → GO swimming! “chess!” → PLAY chess! “piano!” → PLAY THE piano!")],
      [fp("Sort play / go + V-ing."),
       pAns("E.A.: go running, play fanorona, play the drums, go windsurfing.",
        ["go running"], { size: SZ.FICHE })],
      "Game / Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I … football; we … swimming; she … the guitar."),
       fp("2. What does “go angling” mean?")],
      [fp("Answer."),
       pAns("E.A.: play football, go swimming, plays the guitar; to go fishing.",
        ["go swimming"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LESSON OF THE DAY — SESSION 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("PLAY OR GO + V-ING?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("PLAY + GAME OR SPORT", [
      bullet([run("play football, play tennis, play dominoes, play chess, play fanorona", { bold: true, color: C.BLUE })]),
      bullet([run("PLAY THE + instrument: ", { bold: true }), run("play the guitar, play the piano, play drums", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("GO + V-ING (the gerund): the moving activities", [
      vocab("to go swimming", "tou gôou souiming"),
      vocab("to go running", "tou gôou reuning"),
      vocab("to go angling", "tou gôou anngling", "= to go fishing!"),
      vocab("to go skiing", "tou gôou skiing"),
      vocab("to go windsurfing", "tou gôou ouinndseurfing"),
    ]),
    p("", { after: 60 }),
    box("IN SOA’S PASSAGE", [
      bullet([run("I play basketball with my friends.", { italic: true }), run("  → play + sport")]),
      bullet([run("I play the guitar every evening.", { italic: true }), run("  → play the + instrument")]),
      bullet([run("We go swimming in the river.", { italic: true }), run("  → go + V-ing")], { after: 20 }),
    ]),
  ];
}

// ---------- S28 — Coordinators ----------
function ficheS28() {
  const meta = META("The coordinators: and, but, or, yet, so",
    "By the end of the lesson, learners will be able to join their ideas with the coordinators and report findings about hobbies.",
    "7 / 10", "a dice, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Play or go? …swimming / …chess."),
       fp("2. Complete: she plays … guitar.")],
      [fp("Answer."),
       fp("E.A.: go swimming, play chess; the.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to Soa: “I play basketball, AND my brother plays football. I like music, SO I play the guitar. My sister does not play, BUT she listens to music.” Five little connecting words are hiding in the passage — catch them!")],
      [fp("Listen. Catch the little words."),
       fp("E.A.: and, so, but, or, yet.")],
      "Audio / Eliciting", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The coordinators ». By the end of this lesson, your sentences will hold hands!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the five coordinators and their jobs: and (+), but (contrast), or (choice), yet (surprise!), so (result).")],
      [fp("Observe. Match coordinator ↔ job.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The dice game « name your favourite… »! Throw the dice: 1 = sport, 2 = game, 3 = music, 4 = food, 5 = day, 6 = free choice. State your favourite, then report: “Hery likes football, AND he plays every Sunday.”")],
      [fp("Play the dice game. State their hobbies."),
       fp("E.A.: My favourite game is fanorona!")],
      "Dice game", "A dice"),
    stepRow(["5. Synthesis"],
      [fp("So, to join two ideas: and, but, or, yet, so — one little word, one job! Report the findings of the game with coordinators.")],
      [fp("Listen. Repeat. Copy. Report the findings."),
       fp("E.A.: Vero likes chess, but she rarely plays.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Complete with the right coordinator: 1. I like rice … I eat it every day. 2. Do you go by bus … on foot? 3. I like music, … I can’t sing!")],
      [fp("Complete."),
       pAns("E.A.: so (or and); or; but (or yet).",
        ["so"], { size: SZ.FICHE })],
      "Individual work", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five coordinators and their jobs."),
       fp("2. Join: “I am tired. I go to bed.”")],
      [fp("Answer."),
       pAns("E.A.: and, but, or, yet, so; I am tired, so I go to bed.",
        ["so I go to bed"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  return [
    p([run("LESSON OF THE DAY — SESSION 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE COORDINATORS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("FIVE LITTLE WORDS, FIVE JOBS", [
      vocab("and", "annde", "addition (+): I play football AND basketball."),
      vocab("but", "beute", "contrast: I like music, BUT I can’t sing."),
      vocab("or", "ôr", "choice: Do you go by bus OR on foot?"),
      vocab("yet", "ièt", "surprise contrast: He plays every day, YET he never wins!"),
      vocab("so", "sôou", "result: I am tired, SO I go to bed."),
    ]),
    p("", { after: 60 }),
    box("IN SOA’S PASSAGE", [
      bullet([run("I play basketball, ", { italic: true }), run("and", { bold: true, color: C.RED }), run(" my brother plays football.", { italic: true })]),
      bullet([run("I like music, ", { italic: true }), run("so", { bold: true, color: C.RED }), run(" I play the guitar every evening.", { italic: true })]),
      bullet([run("She does not play the guitar, ", { italic: true }), run("but", { bold: true, color: C.RED }), run(" she listens to music.", { italic: true })]),
      bullet([run("We go swimming, ", { italic: true }), run("or", { bold: true, color: C.RED }), run(" we play dominoes.", { italic: true })]),
      bullet([run("My father likes chess, ", { italic: true }), run("yet", { bold: true, color: C.RED }), run(" he never wins!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u3_hobbies.png", label: "Catch the coordinators — listen again", url: AUDIO.hobbies }], COLOR),
  ];
}

// ---------- S29 — Reading ----------
function ficheS29() {
  const meta = META("Reading: a day in Lova’s life",
    "By the end of the lesson, learners will be able to infer information about daily activities and hobbies from a reading passage.",
    "8 / 10", "scrambled sentences on strips of paper");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Pre-reading: interview your pair: two questions about his/her daily activities or hobbies!")],
      [fp("Interview in pairs."),
       fp("E.A.: What time do you get up? How often do you play football?")],
      "Interview", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mystery! The text about Lova fell on the floor — all the sentences are mixed up!")],
      [fp("Listen. Get ready to rebuild.")], "Whole-class work", "Strips of paper"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « A day in Lova’s life » — but first, YOU will rebuild the text!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: in groups, read each scrambled sentence and rebuild the text in the right order. Clues: the sequence markers (first, then…) and the moments of the day!")],
      [fp("Read the strips. Rebuild the text."),
       fp("E.A.: correct order, from “she gets up” to “she goes to bed”.")],
      "Unscrambling a text", "Strips of paper"),
    stepRow(["4. Analysis"],
      [fp("Answer the questions: 1. Where does Lova live? 2. How does her brother go to school? 3. What does she often play? 4. Why does she never watch TV late?")],
      [fp("Answer."),
       fp("E.A.: in Toliara; by bus; basketball; because she usually does her homework (so…).")],
      "Question-answer", "The rebuilt text"),
    stepRow(["5. Synthesis"],
      [fp("Check with the full text: the sequence markers, the frequency adverbs and the coordinators are the skeleton of the text!")],
      [fp("Check. Spot the markers, adverbs, coordinators.")],
      "Whole-class work", "The text"),
    stepRow(["6. Practice"],
      [fp("Group competition: each group reads the text aloud — clear words, good rhythm. The best reading team wins!")],
      [fp("Compete in reading correctly."),
       pAns("E.A.: fluent reading, correct pronunciation.",
        ["fluent reading"], { size: SZ.FICHE })],
      "Group competition", "The text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false: Lova goes to school by bus."),
       fp("2. Find one coordinator and one frequency adverb in the text.")],
      [fp("Answer."),
       pAns("E.A.: false (on foot — her BROTHER goes by bus); but / often.",
        ["false"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LESSON OF THE DAY — SESSION 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: A DAY IN LOVA’S LIFE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    lovaTextBox(),
    p("", { after: 60 }),
    box("THE SKELETON OF THE TEXT", [
      bullet([run("The sequence markers give the order: ", { bold: true }), run("Every morning… First… then… At noon… In the afternoon… In the evening.", { bold: true, color: C.BLUE })]),
      bullet([run("The frequency adverbs give the habits: ", { bold: true }), run("always, often, usually, never.", { bold: true, color: C.BLUE })]),
      bullet([run("The coordinators join the ideas: ", { bold: true }), run("and, but, or, so.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("READER’S TRICK", [
      p("A scrambled text? Look for the time words (every morning, at noon, in the evening) — they put the day back in order!", { after: 40 }),
    ]),
  ];
}

// ---------- S30 — Writing: my daily routine ----------
function ficheS30() {
  const meta = META("Writing: my daily routine",
    "By the end of the lesson, learners will be able to write a short text of six or more sentences about their daily activities.",
    "9 / 10", "pictures / stick figures of daily life");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What time does Lova get up?"),
       fp("2. Give the four sequence markers.")],
      [fp("Answer."),
       fp("E.A.: at five o’clock; first, then, after that, finally.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: describe the daily activities from the pictures / stick figures on the board — full sentences!")],
      [fp("Describe from the pictures."),
       fp("E.A.: He fetches water. She goes to school on foot.")],
      "Using visual-aids", "Pictures / stick figures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write YOUR daily routine — six sentences or more, like Koto and Lova!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the writing recipe: 1. present simple; 2. sequence markers for the order; 3. one frequency adverb minimum; 4. one coordinator minimum; 5. six sentences or more.")],
      [fp("Observe the recipe.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write your daily routine. Then exchange with your pair: check the grammar points and the meaning of the sentences together.")],
      [fp("Write six or more sentences. Peer correction."),
       fp("E.A.: corrected texts.")],
      "Peer correction", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("A good text = order + habits + joined ideas. Rewrite your corrected text — your best handwriting!")],
      [fp("Rewrite the final text.")], "Individual work", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Post-writing: read your text to the group; the group asks questions if they have — answer them!")],
      [fp("Read to the group. Answer questions."),
       pAns("E.A.: Every day I get up at five. First I sweep the floor, then I have breakfast, so I am never hungry at school…",
        ["First I sweep the floor"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five points of the writing recipe."),
       fp("2. Write the first two sentences of your routine.")],
      [fp("Answer. Write."),
       pAns("E.A.: present simple, sequence markers, frequency adverb, coordinator, 6 sentences; I always get up at five. First, I make my bed.",
        ["I always get up"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LESSON OF THE DAY — SESSION 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY DAILY ROUTINE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITING RECIPE", [
      bullet([run("1. The present simple: ", { bold: true }), run("I get up… I go…", { bold: true, color: C.BLUE })]),
      bullet([run("2. The sequence markers: ", { bold: true }), run("First… Then… After that… Finally…", { bold: true, color: C.BLUE })]),
      bullet([run("3. One frequency adverb (or more!): ", { bold: true }), run("I always… I sometimes…", { bold: true, color: C.BLUE })]),
      bullet([run("4. One coordinator (or more!): ", { bold: true }), run("and, but, or, yet, so", { bold: true, color: C.BLUE })]),
      bullet([run("5. Six sentences or more!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY MODEL TEXT", [
      bullet([run("Every day, I wake up at five o’clock.", { italic: true })]),
      bullet([run("First, I make my bed and I tidy the room.", { italic: true })]),
      bullet([run("Then, I fetch water, so my mother is happy.", { italic: true })]),
      bullet([run("After that, I have breakfast, but I never drink coffee.", { italic: true })]),
      bullet([run("I usually go to school on foot with my friends.", { italic: true })]),
      bullet([run("Finally, in the evening, I do my homework and I go to bed at eight.", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S31 — Writing/game: two truths and a lie ----------
function ficheS31() {
  const meta = META("My hobbies: two truths and a lie!",
    "By the end of the lesson, learners will be able to write compound sentences about their hobbies and play the guessing game.",
    "10 / 10", "small papers, a box");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the writing recipe (five points)."),
       fp("2. Play or go? …fanorona / …running.")],
      [fp("Answer."),
       fp("E.A.: present simple, markers, adverb, coordinator, 6 sentences; play fanorona, go running.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen: “I play the drums. I go swimming every day. I never watch TV.” One of my three sentences is a LIE — which one?")],
      [fp("Listen. Guess the lie!")], "Guessing game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to play « two truths and a lie » — in writing and in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model paper: the name + three sentences about hobbies: two TRUE, one LIE. Compound sentences welcome: “I play football, but I never win.”")],
      [fp("Observe the model.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write your name and your three sentences (two true, one lie). Check the grammar with your pair — the lie must LOOK true!")],
      [fp("Write the three sentences. Peer check."),
       fp("E.A.: correct compound sentences.")],
      "Peer correction", "Small papers"),
    stepRow(["5. Synthesis"],
      [fp("Fold the papers into the box. Remember: present simple + coordinators = strong sentences!")],
      [fp("Fold the papers into the box.")], "Whole-class work", "A box"),
    stepRow(["6. Practice"],
      [fp("The game! One student picks a paper at random and reads the sentences; the others identify the lie; the owner of the paper confirms the answers!")],
      [fp("Pick. Read. Identify the lies. Confirm."),
       pAns("E.A.: “Number two is the lie!” — “Yes! I never go swimming!”",
        ["the lie"], { size: SZ.FICHE })],
      "Guessing game", "The box of papers"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two true sentences and one lie about your hobbies."),
       fp("2. Use one coordinator in one of them.")],
      [fp("Write."),
       pAns("E.A.: I play chess, and I often win. I go swimming on Sundays. I play the piano. (the lie!)",
        ["the lie!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LESSON OF THE DAY — SESSION 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("TWO TRUTHS AND A LIE!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE GAME RECIPE", [
      bullet([run("1. Write your name and THREE sentences about your hobbies.", { bold: true })]),
      bullet([run("2. Two sentences are TRUE, one is a LIE — but it must look true!", { bold: true })]),
      bullet([run("3. A friend reads them; the class finds the lie; YOU confirm!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL PAPER (find the lie!)", [
      bullet([run("My name is Hery.", { italic: true })]),
      bullet([run("I play football every Sunday, and my team often wins.", { italic: true })]),
      bullet([run("I go swimming in the river with my cousins.", { italic: true })]),
      bullet([run("I play the piano every evening.", { italic: true }), run("  ← the lie! (no piano at home!)", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("You wrote, you read aloud, you made the class laugh — in English! Daily life is now YOUR English territory.", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("DAILY LIFE"),
    sub("1. The daily activities and the chores"),
    bullet([run("wake up, get up, make the bed, have breakfast, go to school, do my homework, go to bed", { bold: true, color: C.BLUE })]),
    bullet([run("The chores: fetch water, tidy the room, sweep the floor, cook the meal, wash the dishes", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The present simple (the habits)"),
    bullet([run("I / you / we / they + verb — he / she / it + verb + S: Koto wakes up at five.", { bold: true, color: C.BLUE })]),
    bullet([run("He doesn’t watch TV. — Does he go on foot? Yes, he does.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The frequency adverbs — How often…?"),
    bullet([run("always → usually → often → sometimes → rarely → never — BEFORE the verb, AFTER be.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The sequence markers and the transport"),
    bullet([run("First… Then… After that… Finally… — by bus / by car / by train / by boat, but ON foot!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The hobbies: play or go + V-ing"),
    bullet([run("play + game / sport: play football, play fanorona — play THE + instrument: play the guitar", { bold: true, color: C.BLUE })]),
    bullet([run("go + V-ing: go swimming, go running, go angling (= fishing!)", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The coordinators"),
    bullet([run("and (+), but (contrast), or (choice), yet (surprise!), so (result)", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u3_koto_day.png", label: "Koto’s day", url: AUDIO.kotoday },
      { qr: "qr_t8_u3_hobbies.png", label: "My hobbies (Soa)", url: AUDIO.hobbies },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete the chores: 1. … water  2. … the room  3. … the meal  4. … the floor.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Put the adverb in the correct place: 1. I go to bed late. (never)  2. Koto is happy. (always)  3. She cooks the meal. (sometimes)  4. We play football on Sundays. (usually)")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Play or go? 1. I … swimming.  2. We … fanorona.  3. They … angling.  4. She … the guitar.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Choose the coordinator (and / but / or / so): 1. I am tired, … I go to bed.  2. Do you go by bus … on foot?  3. I like music, … I can’t sing.  4. I play football … basketball.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences about your daily routine with the four sequence markers (first, then, after that, finally).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: fetch — tidy — cook/prepare — sweep (1 point each).", ["fetch"]),
    pAns("Exercise 2: I never go to bed late. Koto is always happy. She sometimes cooks the meal. We usually play football on Sundays. (1 point each).", ["I never go"]),
    pAns("Exercise 3: go — play — go — plays the (1 point each).", ["go"]),
    pAns("Exercise 4: 1. so  2. or  3. but  4. and (1 point each).", ["so"]),
    pAns("Exercise 5: four correct sentences with first, then, after that, finally (1 point each).", ["sequence markers"]),
  ];
}

// ---------- S32 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s32", "SESSION 32 / 78", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: DAILY LIFE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name five chores."),
    pAns("E.A.: fetch water, tidy the room, sweep the floor, cook the meal, wash the dishes.", ["fetch water"]),
    p("2. When do we use the present simple? Give the he-rule."),
    pAns("E.A.: for habitual actions; he/she/it + verb + S: Koto wakes up.", ["verb + S"]),
    p("3. Give the frequency scale (six adverbs)."),
    pAns("E.A.: always, usually, often, sometimes, rarely, never.", ["always"]),
    p("4. Where is the frequency adverb in the sentence?"),
    pAns("E.A.: before the verb, after be.", ["before the verb"]),
    p("5. Ask a question with How often and answer it."),
    pAns("E.A.: How often do you fetch water? — I usually fetch water in the morning.", ["How often"]),
    p("6. Complete: I go … bus, … train — but … foot!"),
    pAns("E.A.: by bus, by train — on foot!", ["on foot"]),
    p("7. Give the four sequence markers in order."),
    pAns("E.A.: first, then, after that, finally.", ["first"]),
    p("8. Play or go? …chess / …swimming / …the piano / …running."),
    pAns("E.A.: play chess, go swimming, play the piano, go running.", ["go swimming"]),
    p("9. Give the five coordinators and one example."),
    pAns("E.A.: and, but, or, yet, so — I am tired, so I go to bed.", ["yet"]),
    p("10. Say your day in four sentences with sequence markers — out loud!"),
    pAns("E.A.: First, I get up at five. Then, I fetch water. After that, I go to school. Finally, I do my homework.", ["First"]),
  ];
}

// ---------- S33 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s33", "SESSION 33 / 78", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 3: DAILY LIFE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: describe your daily activities in four sentences (present simple + one frequency adverb).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete Koto’s day with: fetch — go — wake — do. “I … up at five. I … water. I … to school on foot. I … my homework.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Play or go? 1. We … dominoes.  2. I … running.  3. She … the drums.  4. They … windsurfing.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Choose and / but / or / so: 1. I like rice, … I eat it every day.  2. Do you play chess … fanorona?  3. He plays every day, … he never wins.  4. I fetch water … I sweep the floor.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short text (six sentences) about your daily routine and your hobbies, with two sequence markers, one frequency adverb and one coordinator.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: four correct sentences, present simple + adverb (1 point each).", ["four correct sentences"]),
    pAns("Exercise 2: wake — fetch — go — do (1 point each).", ["wake"]),
    pAns("Exercise 3: play — go — plays the — go (1 point each).", ["play"]),
    pAns("Exercise 4: 1. so  2. or  3. but  4. and (1 point each).", ["so"]),
    pAns("Exercise 5: six sentences with the required elements (4 points).", ["six sentences"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...ficheS25(), pageBreak(), ...lessonS25(), pageBreak(),
    ...ficheS26(), pageBreak(), ...lessonS26(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can name my daily activities and the chores.",
      "I can use the present simple: Koto wakes up at five.",
      "I can say how often: always, usually, sometimes, never.",
      "I can tell my day in order: first, then, after that, finally.",
      "I can talk about transport: by bus, by train — on foot!",
      "I can talk about my hobbies: play fanorona, go swimming, play the guitar.",
      "I can join my ideas: and, but, or, yet, so.",
      "I can read a scrambled text and write my daily routine.",
    ], "NEXT STOP → UNIT 4: FOOD!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
