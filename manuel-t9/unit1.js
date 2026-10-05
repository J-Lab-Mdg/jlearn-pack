// T9 — UNIT 1 — PERSONAL COMMUNICATION (10 séances + révision + test) — Sessions 1 à 12 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu
const SHADE = "D6EAF8";
const TOTAL = 86;
const AUDIO = {
  preferences: "https://drive.google.com/uc?export=download&id=1WRSoQcNJwILuhUmhw_3wpMTmof8R7Tiq",
  feelings: "https://drive.google.com/uc?export=download&id=1ndKTfeX-l9tDIf0wJkynyIW-Q9dcLVMG",
  weekend: "https://drive.google.com/uc?export=download&id=1YPG3gMp4fO7pNJTjML8J1lcZyJKXiaR4",
  email: "https://drive.google.com/uc?export=download&id=1INxX6XAaIYoUj9LAUi5TM70TrySElTur",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — PERSONAL COMMUNICATION", title, slo,
  values: "self-esteem, mutual respect", session, materials,
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
function preferencesDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE PREFERENCES DIALOGUE (listening passage)", [
    L("James", "Sofia, we need to talk about our weekends."),
    L("Sofia", "I know, James. Would you rather go to the park or to the mall?"),
    L("James", "Well, I think I’d rather go to the park than to the mall."),
    L("Sofia", "Why?"),
    L("James", "Because there is a lot more to do than just go shopping. What do you think?"),
    L("Sofia", "I agree with you. Let’s do that!"),
  ]);
}
function feelingsDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE FEELINGS DIALOGUE (listening passage)", [
    L("Arthur", "Hey, Jane!"),
    L("Jane", "Hey, Arthur!"),
    L("Arthur", "How are you feeling today? You look very sad."),
    L("Jane", "I am sad. My cat is dead."),
    L("Arthur", "Oh, I am sorry to hear that!"),
    L("Jane", "How about you?"),
    L("Arthur", "I am feeling very tired."),
    L("Jane", "Why?"),
    L("Arthur", "I worked overtime last night."),
  ]);
}
function weekendTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("THE AMAZING WEEKEND (listening passage)", [
    L("My sister and I are going to have an amazing weekend together! We are going to see some friends and eat out on Friday evening. Then, on Saturday, we are going to make some sandwiches and go to the park. The weather is going to be sunny and warm."),
    L("I am going to read a book and relax. On Sunday, I am going to work out, and my sister is going to surf the internet. After that, we are going to rent a film and spend the evening at home."),
  ]);
}
function emailTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("THE E-MAIL (reading text)", [
    pr([run("To: ", { bold: true, color: COLOR }), run("Daniel    "),
        run("From: ", { bold: true, color: COLOR }), run("Sarah    "),
        run("Subject: ", { bold: true, color: COLOR }), run("RE: Plans for the weekend", { bold: true })], { after: 80 }),
    L("Hi, Daniel!"),
    L("Sorry, but I can’t come with you. I’m going to Paris with a friend. I’m so excited! We’re going to go up the Eiffel tower and see the old parts of the city. And then there are all the art galleries. Of course, if we’re in Paris, we’ll have to go shopping."),
    L("We’re going for four days, actually."),
    L("See you soon,"),
    L("Sarah"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 1 — PERSONAL COMMUNICATION", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Would you rather… ?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_preferences.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say what I like and what I prefer: I like playing football, I prefer reading;"),
    p("• use “I’d rather” to choose: I’d rather go to the park than to the mall;"),
    p("• give the reason with “because”;"),
    p("• name the feelings and ask caring questions: What’s wrong? What happened?;"),
    p("• use the present continuous for temporary facts: I am feeling tired;"),
    p("• talk about my plans with “be going to” and predict with “will”;"),
    p("• use the time prepositions “for” and “on”;"),
    p("• read a real e-mail and write about my weekend plans.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-esteem, mutual respect.")], { after: 160 }),
    box("WELCOME TO T9 — THE EXAM YEAR!", [
      p("In T8, you learned to tell your days, your plans and your city."),
      p("In T9, you speak like a big student: you choose (I’d rather!), you explain (because!), you plan (be going to!) — and at the end of the year, you are ready for the exam. Let’s go!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t9_u1_preferences.png", label: "The preferences dialogue — listen and repeat", url: AUDIO.preferences }], COLOR),
  ];
}

// ---------- S1 — Likes and dislikes (gerund) ----------
function ficheS1() {
  const meta = META("Likes and dislikes — the gerund",
    "By the end of the lesson, learners will be able to express likes and dislikes about food, school subjects and hobbies, using verb + V-ing.",
    "1 / 10", "pictures of hobbies, ball, book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(First session of the year.) Welcome questions:"),
       fp("1. Hello! What’s your name? Where do you live?"),
       fp("2. What did you like in English last year?")],
      [fp("Answer."),
       fp("E.A.: My name is…; I liked the songs / the games / the stories…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mingle activity: stand up! Ask three schoolmates: Do you like football? Do you like rice and chicken? Take notes!")],
      [fp("Mingle. Ask. Note the answers.")], "Mingle activity", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Likes and dislikes ». By the end of this lesson, you will say what you love, what you like and what you hate — like a champion!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I like playing football. She loves listening to music. He enjoys reading. They hate washing the dishes. What comes after like, love, enjoy, hate?")],
      [fp("Observe. Answer."),
       fp("E.A.: a verb with -ING.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The rule: like / love / enjoy / prefer / hate + verb-ING (the gerund). Build your sentences with: cooking, swimming, drawing, playing dominoes, doing homework…")],
      [fp("Build sentences."),
       fp("E.A.: I love swimming! I hate sweeping the floor!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: like/love/enjoy/hate + V-ing. And the question: Do you like playing football? — Yes, I do! / No, I don’t — I prefer reading.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Report your mingle notes: Do you know someone who likes playing football? Say who it is!")],
      [fp("Report."),
       pAns("E.A.: Yes! Hery likes playing football. Vola loves listening to music.",
        ["Hery likes playing football."], { size: SZ.FICHE })],
      "Whole-class work", "Mingle notes"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write three sentences: one with love, one with like, one with hate (+ V-ing)."),
       fp("2. Ask your neighbour one “Do you like…?” question.")],
      [fp("Write. Ask."),
       pAns("E.A.: I love eating mangoes. I like playing chess. I hate getting up early.",
        ["I love eating mangoes."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LESSON OF THE DAY — SESSION 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIKES AND DISLIKES — THE GERUND", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The verbs of the heart:", { bold: true })], { after: 50 }),
    vocab("I love…", "aï leuve", "❤❤ very very much"),
    vocab("I like… / I enjoy…", "aï laïk / aï inndjoï", "❤ it makes me happy"),
    vocab("I prefer…", "aï prifeur", "between two, I choose this one"),
    vocab("I don’t like…", "aï dôounte laïk", "not for me"),
    vocab("I hate…", "aï héite", "✗ not at all!"),
    p("", { after: 60 }),
    box("THE GOLDEN RULE", [
      bullet([run("like / love / enjoy / prefer / hate + verb-ING", { bold: true, color: C.BLUE }), run("  (the gerund!)")]),
      bullet([run("I like "), run("playing", { bold: true, color: C.BLUE }), run(" football.   She loves "), run("listening", { bold: true, color: C.BLUE }), run(" to music.")]),
      bullet([run("He enjoys "), run("reading", { bold: true, color: C.BLUE }), run(".   They hate "), run("washing", { bold: true, color: C.BLUE }), run(" the dishes.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The question and the answers:", { bold: true })], { after: 50 }),
    bullet([...kw("Do you like playing football?", "dou iou laïk pléiing foutbôl")]),
    bullet([run("→ "), run("Yes, I do! I love it!", { bold: true, color: C.BLUE }), run("   /   "), run("No, I don’t. I prefer reading.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("My examples — food, school subjects, hobbies:", { bold: true })], { after: 50 }),
    bullet([run("I love eating rice and chicken, but I hate eating bitter vegetables.")]),
    bullet([run("I like studying English and maths, but my friend prefers history.")]),
    bullet([run("I enjoy playing dominoes and swimming in the river.")]),
  ];
}

// ---------- S2 — I'd rather + because ----------
function ficheS2() {
  const meta = META("Would you rather…? — I’d rather + because",
    "By the end of the lesson, learners will be able to ask and state preferences with “would rather” and justify them with “because”.",
    "2 / 10", "clue cards (read books / watch TV…)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I love … (swim). She enjoys … (draw)."),
       fp("2. Say one thing you like and one thing you hate.")],
      [fp("Answer."),
       fp("E.A.: swimming; drawing; I like dancing, I hate sweeping!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick choice game! Stand left or right: mango OR banana? football OR basketball? park OR mall? Choose with your feet!")],
      [fp("Move. Choose.")], "Using game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « I’d rather ». By the end of this lesson, you will choose like a boss — and explain WHY!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Would you rather go to the park or to the mall? — I’d rather go to the park than to the mall. What small word is after “rather”? “go” or “to go”?")],
      [fp("Observe. Answer."),
       fp("E.A.: “go” — the verb WITHOUT “to”!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The structure: I’d rather + verb (no “to”!) + than… And the reason: BECAUSE. I’d rather walk than take the bus, because it is cheap!")],
      [fp("Build sentences."),
       fp("E.A.: I’d rather read than watch TV, because books are magic!")],
      "Pair work", "Clue cards"),
    stepRow(["5. Synthesis"],
      [fp("So: Would you rather A or B? → I’d rather A than B, because… Never say “I’d rather TO go”!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pair dialogues with the clue cards: read books or watch TV? travel or stay at home? cook or wash the dishes?")],
      [fp("Role play in pairs."),
       pAns("E.A.: Would you rather travel or stay at home? — I’d rather travel, because I love seeing new places!",
        ["I’d rather travel"], { size: SZ.FICHE })],
      "Role play", "Clue cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two “I’d rather … than …, because …” sentences."),
       fp("2. Correct: I’d rather to sleep.")],
      [fp("Write. Correct."),
       pAns("E.A.: I’d rather sleep. (no “to”!)",
        ["no “to”!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LESSON OF THE DAY — SESSION 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WOULD YOU RATHER…? — I’D RATHER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_preferences.png", 380, 768 / 1376),
    p([run("The question of the choice:", { bold: true })], { after: 50 }),
    bullet([...kw("Would you rather go to the park or to the mall?", "woud iou radheur gôou tou dhe pârk ôr tou dhe môl")]),
    bullet([run("→ "), ...kw("I’d rather go to the park than to the mall.", "aïd radheur gôou tou dhe pârk dhane tou dhe môl")]),
    p("", { after: 60 }),
    box("THE GOLDEN RULES", [
      bullet([run("I’d rather = I would rather", { bold: true, color: C.BLUE }), run("  —  it means “I prefer”.")]),
      bullet([run("I’d rather + verb WITHOUT “to”", { bold: true, color: C.RED }), run(" : I’d rather walk. (never “I’d rather to walk”!)")]),
      bullet([run("than", { bold: true, color: C.BLUE }), run(" compares the two choices: I’d rather read THAN watch TV.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The reason — because:", { bold: true })], { after: 50 }),
    bullet([run("Why? → "), run("Because", { bold: true, color: C.BLUE }), run(" there is a lot more to do than just go shopping!")]),
    bullet([run("I’d rather walk than take the bus, "), run("because", { bold: true, color: C.BLUE }), run(" it is cheap and good for my health.")]),
    bullet([run("I’d rather eat at home, "), run("because", { bold: true, color: C.BLUE }), run(" my mother’s cooking is the best!")]),
    p("", { after: 60 }),
    box("SELF-ESTEEM CORNER", [
      p("Your choice is YOUR choice! Say it with a strong voice — and always give your reason with “because”.", { after: 40 }),
    ]),
  ];
}

// ---------- S3 — Listening: the preferences dialogue ----------
function ficheS3() {
  const meta = META("Listening: James and Sofia",
    "By the end of the lesson, learners will be able to comprehend the gist and the detailed information of an oral dialogue expressing preferences.",
    "3 / 10", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Would you rather sing or dance? (full answer!)"),
       fp("2. What comes after “I’d rather”?")],
      [fp("Answer."),
       fp("E.A.: I’d rather dance than sing, because…; the verb without “to”.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the picture: a park and a mall. Where would YOU rather go on the weekend? Vote!")],
      [fp("Vote. Explain in one word.")], "Whole-class work", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a real dialogue: « James and Sofia talk about the weekend ». By the end, you will catch the gist AND the details!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening, book closed. One question only: what do James and Sofia talk about?")],
      [fp("Listen. Answer."),
       fp("E.A.: their weekends / their plans for the weekend.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening. Answer: 1. Would James rather go to the park or to the mall? 2. Why? 3. Did Sofia agree with him?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. to the park. 2. because there is a lot more to do than just go shopping. 3. Yes, she agreed.",
        ["to the park"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("Third listening, sentence by sentence: listen and repeat with the right intonation — the question goes UP!")],
      [fp("Listen. Repeat.")], "Repetition drill", "Audio / QR"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Role play! The transcript is on the board: play James and Sofia in pairs. Then replace “park/mall” with YOUR two places!")],
      [fp("Role play."),
       pAns("E.A.: Would you rather go to the river or to the market? — I’d rather go to the river, because…",
        ["I’d rather go to the river"], { size: SZ.FICHE })],
      "Role play", "Board transcript"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Answer: who agreed at the end of the dialogue?"),
       fp("2. Quote the “because” sentence of James.")],
      [fp("Answer."),
       pAns("E.A.: Sofia; “Because there is a lot more to do than just go shopping.”",
        ["Sofia"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LESSON OF THE DAY — SESSION 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: JAMES AND SOFIA", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    preferencesDialogueBox(),
    p("", { after: 60 }),
    p([run("What I found in the dialogue:", { bold: true })], { after: 50 }),
    bullet([run("The gist: ", { bold: true }), run("James and Sofia talk about their weekend plans.")]),
    bullet([run("James’ choice: ", { bold: true }), run("the park", { bold: true, color: C.BLUE }), run(" — because there is a lot more to do than just go shopping.")]),
    bullet([run("Sofia’s reaction: ", { bold: true }), ...kw("I agree with you. Let’s do that!", "aï egri ouidh iou. lèts dou dhate")]),
    p("", { after: 60 }),
    box("USEFUL REACTIONS", [
      bullet([...kw("I agree with you.", "aï egri ouidh iou"), run("  —  same idea!")]),
      bullet([...kw("What do you think?", "ouate dou iou think"), run("  —  I ask your opinion.")]),
      bullet([...kw("Let’s do that!", "lèts dou dhate"), run("  —  decision taken!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u1_preferences.png", label: "The preferences dialogue — listen and role play", url: AUDIO.preferences }], COLOR),
  ];
}

// ---------- S4 — The feelings ----------
function ficheS4() {
  const meta = META("The feelings — You look sad. What’s wrong?",
    "By the end of the lesson, learners will be able to name feelings and ask about other people’s feelings.",
    "4 / 10", "emoji cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue, what did James prefer? Why?"),
       fp("2. Complete: I’d rather … (dance) than … (sing).")],
      [fp("Answer."),
       fp("E.A.: the park, because…; dance / sing (no “to”).")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Match the feelings with the emoji on the board: happy 😀, sad 😢, tired 🥱, angry 😠, afraid 😨, excited 🤩, worried 😟.")],
      [fp("Match. Repeat the words.")], "Matching with emoji", "Emoji cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The feelings ». By the end of this lesson, you will say how you feel and take care of your friends!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the questions: How are you feeling today? — I feel happy! / You look + adjective: You look very sad. / What’s wrong? What happened? Are you OK?")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Two structures: YOU LOOK + adjective (You look tired!) and WHAT MAKES YOU + adjective? (What makes you happy?). Build new sentences!")],
      [fp("Build sentences."),
       fp("E.A.: You look worried! What makes you excited?")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: I feel + adj; You look + adj; the caring questions: What’s wrong? What happened? Are you OK? — and the kind answers: I’m sorry to hear that! Don’t worry!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Emoji lift game: I read a sentence, you lift the right emoji and explain! “It’s 10 pm, you hear a strange voice outside the house. How do you feel?”")],
      [fp("Lift the emoji. Explain."),
       pAns("E.A.: I feel frightened! / I feel afraid, because the voice is strange!",
        ["I feel frightened!"], { size: SZ.FICHE })],
      "Using game", "Emoji cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name six feelings."),
       fp("2. Your friend looks sad: ask two caring questions.")],
      [fp("Answer."),
       pAns("E.A.: happy, sad, tired, angry, afraid, excited; What’s wrong? What happened?",
        ["What’s wrong?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LESSON OF THE DAY — SESSION 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FEELINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_feelings.png", 400, 768 / 1376),
    p([run("How do I feel today?", { bold: true })], { after: 50 }),
    vocab("happy", "hapi", "😀 a big smile"),
    vocab("excited", "iksaïtide", "🤩 full of energy"),
    vocab("sad", "sade", "😢 with tears"),
    vocab("worried", "oueuride", "😟 thinking of a problem"),
    vocab("tired", "taïeurde", "🥱 I need to sleep"),
    vocab("angry", "anngri", "😠 red face!"),
    vocab("afraid / frightened", "efréide / fraïteunde", "😨 scared"),
    p("", { after: 60 }),
    box("THE CARING QUESTIONS", [
      bullet([...kw("How are you feeling today?", "haou âr iou filinng toudéi"), run("  →  "), run("I feel happy!", { bold: true, color: C.BLUE })]),
      bullet([run("You look + adjective:", { bold: true, color: C.BLUE }), run("  You look very sad. You look tired.")]),
      bullet([...kw("What’s wrong? / What happened? / Are you OK?", "ouats ronng / ouate hapeunde / âr iou ôou-kéi")]),
      bullet([...kw("What makes you happy?", "ouate méiks iou hapi"), run("  →  "), run("Playing with my friends makes me happy!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The kind reactions:", { bold: true })], { after: 50 }),
    bullet([...kw("Oh, I am sorry to hear that!", "ôou aï amme sori tou hir dhate")]),
    bullet([...kw("Don’t worry! It will be OK.", "dôounte oueuri! ite ouil bi ôou-kéi")]),
    bullet([...kw("Congratulations!", "konngratiouléicheunz"), run("  —  for the happy news!")]),
  ];
}

// ---------- S5 — Listening: feelings dialogue + grammar ----------
function ficheS5() {
  const meta = META("Listening: Arthur and Jane — present continuous and simple past",
    "By the end of the lesson, learners will be able to comprehend an oral dialogue on feelings and draw the form of the present continuous and of the simple past.",
    "5 / 10", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name six feelings."),
       fp("2. Ask me one caring question.")],
      [fp("Answer."),
       fp("E.A.: happy, sad…; What’s wrong? Are you OK?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the two faces on the board: one very sad girl, one very tired boy. Guess: what happened to them?")],
      [fp("Guess.")], "Whole-class work", "Board drawings"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Arthur and Jane ». By the end, you will catch their feelings AND two grammar machines hidden in the dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. How is Jane feeling today? Why? 2. How is Arthur feeling? Why?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. Jane is sad, because her cat is dead. 2. Arthur is feeling very tired, because he worked overtime last night.",
        ["Jane is sad"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Machine 1: “I AM FEELING very tired” → BE + verb-ING = present continuous, for a TEMPORARY fact (today, now — not always!). Machine 2: “I WORKED overtime LAST NIGHT” → verb + -ED = simple past, for a finished action.")],
      [fp("Find the forms."),
       fp("E.A.: am feeling = be + V-ing; worked = verb + -ed (yesterday, last night).")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: present continuous (be + V-ing) = temporary fact of today; simple past (V-ed / irregular) = finished action of yesterday. The signal words: today, now / yesterday, last night.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Role play Arthur and Jane in pairs — then change the feelings: Jane is worried (her dog is sick), Arthur is excited (he won a match yesterday)!")],
      [fp("Role play."),
       pAns("E.A.: You look worried! — I am worried. My dog is sick. — I’m sorry to hear that!",
        ["I am worried."], { size: SZ.FICHE })],
      "Role play", "Board transcript"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I … (feel) very tired today. 2. Complete: She … (work) overtime last night."),
       fp("3. Why is Jane sad?")],
      [fp("Answer."),
       pAns("E.A.: am feeling; worked; because her cat is dead.",
        ["am feeling; worked"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LESSON OF THE DAY — SESSION 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: ARTHUR AND JANE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    feelingsDialogueBox(),
    p("", { after: 60 }),
    box("GRAMMAR MACHINE 1 — PRESENT CONTINUOUS (temporary fact)", [
      bullet([run("BE + verb-ING", { bold: true, color: C.BLUE }), run("  —  for today, for now — not for always!")]),
      bullet([run("I "), run("am feeling", { bold: true, color: C.BLUE }), run(" very tired today.   You "), run("are smiling", { bold: true, color: C.BLUE }), run(" now!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("GRAMMAR MACHINE 2 — SIMPLE PAST (finished action)", [
      bullet([run("verb + -ED", { bold: true, color: C.BLUE }), run(" (or irregular!)  —  for yesterday, last night, last week.")]),
      bullet([run("I "), run("worked", { bold: true, color: C.BLUE }), run(" overtime last night.   My cat "), run("died", { bold: true, color: C.BLUE }), run(" yesterday. (die → died)")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The signal words:", { bold: true })], { after: 50 }),
    bullet([run("today, now, this week", { bold: true, color: C.BLUE }), run("  →  present continuous.")]),
    bullet([run("yesterday, last night, last week", { bold: true, color: C.BLUE }), run("  →  simple past.")]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u1_feelings.png", label: "The feelings dialogue — listen and role play", url: AUDIO.feelings }], COLOR),
  ];
}

// ---------- S6 — Quiz trade: feelings + advice ----------
function ficheS6() {
  const meta = META("Feelings in situations — giving advice",
    "By the end of the lesson, learners will be able to react to situations with feelings and give simple advice with “You should…”.",
    "6 / 10", "quiz cards (one question per card)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Present continuous or simple past? “I am feeling great today.” / “We played football last Sunday.”"),
       fp("2. Why was Arthur tired?")],
      [fp("Answer."),
       fp("E.A.: present continuous; simple past; because he worked overtime last night.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen and react fast! “Your team won the match!” → you say the feeling! “You lost your pen…” “A big dog is barking at you!”")],
      [fp("React."),
       fp("E.A.: I feel happy / proud! I feel sad! I feel afraid!")],
      "Using game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Feelings and advice ». By the end of this lesson, you will react to any situation AND help your friends with good advice!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: My friend is worried about the test. → You SHOULD revise with her! I am tired. → You SHOULD sleep early! What is the magic verb?")],
      [fp("Observe. Answer."),
       fp("E.A.: SHOULD + verb — for advice.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The structure: You should + verb (You should rest!). The negative: You shouldn’t + verb (You shouldn’t worry!). Give advice for: a sad friend, an angry brother, a worried schoolmate.")],
      [fp("Give advice."),
       fp("E.A.: You should talk to her! You shouldn’t shout!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: situation → feeling (I feel…) → advice (You should… / You shouldn’t…). A good friend listens, then helps!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Quiz trade! Each student gets ONE card with a situation. Walk, meet a schoolmate, read your card, listen to the feeling + advice, then TRADE cards and find a new partner!")],
      [fp("Walk. Ask. Answer. Trade."),
       pAns("E.A.: “It is 10 pm, you hear a strange voice outside.” — I feel frightened! You should call your parents!",
        ["I feel frightened!"], { size: SZ.FICHE })],
      "Quiz trade activity", "Quiz cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Your friend says: “I am very tired.” Give one piece of advice."),
       fp("2. Write one “shouldn’t” sentence.")],
      [fp("Answer."),
       pAns("E.A.: You should go to bed early! You shouldn’t play late at night.",
        ["You should go to bed early!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  return [
    p([run("LESSON OF THE DAY — SESSION 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("FEELINGS AND ADVICE — YOU SHOULD…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Situation → feeling → advice:", { bold: true })], { after: 50 }),
    bullet([run("Situation: ", { bold: true }), run("My friend is worried about the English test.")]),
    bullet([run("Feeling: ", { bold: true }), run("She feels worried.", { bold: true, color: C.BLUE })]),
    bullet([run("Advice: ", { bold: true }), run("You should revise with her!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE ADVICE MACHINE", [
      bullet([...kw("You should + verb", "iou choude"), run("  →  You should rest. You should talk to the teacher.")]),
      bullet([...kw("You shouldn’t + verb", "iou choudeunte"), run("  →  You shouldn’t worry. You shouldn’t shout.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("I am tired. → "), run("You should sleep early tonight.", { bold: true, color: C.BLUE })]),
    bullet([run("My brother is angry. → "), run("You should speak softly to him. You shouldn’t laugh at him.", { bold: true, color: C.BLUE })]),
    bullet([run("I am afraid of the dark. → "), run("You should keep a small lamp. Don’t worry, everybody feels afraid sometimes!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("MUTUAL RESPECT CORNER", [
      p("When a friend tells you a feeling, listen first. Never laugh at a feeling — help with kind advice!", { after: 40 }),
    ]),
  ];
}

// ---------- S7 — Be going to + for/on ----------
function ficheS7() {
  const meta = META("Weekend plans — be going to; for / on",
    "By the end of the lesson, learners will be able to talk about future plans with “be going to” and use the prepositions “for” and “on”.",
    "7 / 10", "a dice, verb list on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your friend is sad: give one caring question and one piece of advice."),
       fp("2. Correct: You should to rest.")],
      [fp("Answer."),
       fp("E.A.: What’s wrong? You should talk to me! — You should rest (no “to”).")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Brainstorm! What can we do on the weekend? Give me verbs: play, visit, cook… I write them on the board.")],
      [fp("Give verbs."),
       fp("E.A.: play football, visit grandma, wash clothes, go to the market, read…")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « My weekend plans ». By the end of this lesson, you will tell your plans like in a movie trailer!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I am going to visit my aunt on Saturday. We are going to cook a big dinner for Christmas. What are the three parts of the future machine?")],
      [fp("Observe. Answer."),
       fp("E.A.: BE + GOING TO + verb.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: am/is/are + going to + verb — for a PLAN already decided. And the prepositions: ON + day (on Saturday, on Sunday morning); FOR + celebration (for Christmas, for Easter, for my birthday).")],
      [fp("Build sentences."),
       fp("E.A.: She is going to swim on Sunday. We are going to sing for Christmas.")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: subject + be + going to + verb; ON + day; FOR + celebration. Question: What are you going to do on Saturday?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Dice game! Roll the dice: 1 = Saturday morning, 2 = Saturday afternoon, 3 = Saturday night, 4 = Sunday morning, 5 = Sunday afternoon, 6 = free choice! Say your plan for that moment.")],
      [fp("Roll. Speak."),
       pAns("E.A.: (4) On Sunday morning, I am going to go to church with my family.",
        ["I am going to"], { size: SZ.FICHE })],
      "Using game", "A dice"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two plans with “be going to” (one with ON, one with FOR)."),
       fp("2. Ask your neighbour: What are you going to do on Sunday?")],
      [fp("Write. Ask."),
       pAns("E.A.: I am going to play basketball on Saturday. We are going to visit my uncle for Easter.",
        ["on Saturday"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  return [
    p([run("LESSON OF THE DAY — SESSION 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY WEEKEND PLANS — BE GOING TO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_weekend.png", 400, 768 / 1376),
    box("THE FUTURE MACHINE — BE GOING TO (a decided plan)", [
      bullet([run("am / is / are + going to + verb", { bold: true, color: C.BLUE })]),
      bullet([run("I "), run("am going to visit", { bold: true, color: C.BLUE }), run(" my aunt.   She "), run("is going to swim", { bold: true, color: C.BLUE }), run(".   We "), run("are going to cook", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Question: "), ...kw("What are you going to do on Saturday?", "ouate âr iou gôouing tou dou onne sateudéi")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The two small prepositions:", { bold: true })], { after: 50 }),
    bullet([run("ON + day:", { bold: true, color: C.BLUE }), run("  on Saturday, on Sunday morning, on Friday evening.")]),
    bullet([run("FOR + celebration:", { bold: true, color: C.BLUE }), run("  for Christmas, for Easter, for my birthday.")]),
    p("", { after: 60 }),
    p([run("Weekend activities to learn:", { bold: true })], { after: 50 }),
    vocab("see some friends", "si somme frènndz"),
    vocab("eat out", "ite aoute", "eat at a hotely, not at home"),
    vocab("go to the park", "gôou tou dhe pârk"),
    vocab("work out", "oueurk aoute", "do sport for the body"),
    vocab("surf the internet", "seurf dhi innteurnète"),
    vocab("rent a film", "rènnte e filme"),
  ];
}

// ---------- S8 — Listening: the amazing weekend + will vs going to ----------
function ficheS8() {
  const meta = META("Listening: an amazing weekend — will or be going to?",
    "By the end of the lesson, learners will be able to comprehend an oral passage about weekend plans and distinguish “will” (prediction) from “be going to” (plan).",
    "8 / 10", "audio (QR code), gap-fill on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the three parts of the future machine."),
       fp("2. Complete: … Sunday; … Christmas.")],
      [fp("Answer."),
       fp("E.A.: be + going to + verb; on Sunday; for Christmas.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Imagine an AMAZING weekend. Give me one dream activity!")],
      [fp("Answer freely.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « An amazing weekend » — a girl tells all her plans with her sister. Catch the activities, day by day!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and complete the table: Friday evening? Saturday? Sunday? Sunday evening?")],
      [fp("Listen. Complete."),
       pAns("E.A.: Friday: see friends, eat out; Saturday: make sandwiches, go to the park, read; Sunday: work out / surf the internet; evening: rent a film at home.",
        ["go to the park"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("One sentence is special: “The weather IS GOING TO BE sunny and warm.” And I can also say: “I think it WILL rain.” The rule: be going to = a decided plan; will = a prediction, an idea about the future (I think…, maybe…).")],
      [fp("Observe. Compare."),
       fp("E.A.: plan → going to; prediction → will.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: my plan → I am going to visit grandma. My prediction → I think it will be hot. Will + verb (no “to”): it will rain, she will pass!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Will or going to? 1. I think people … live on other planets. 2. We bought the tickets: we … travel on Friday. 3. She studies a lot: she … pass the exam! 4. My plan: I … help my mother on Sunday.")],
      [fp("Choose and justify."),
       pAns("E.A.: 1. will (prediction) 2. are going to (plan) 3. will (prediction) 4. am going to (plan).",
        ["will (prediction)"], { size: SZ.FICHE })],
      "Pair work", "Board exercise"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In the passage: what are the sisters going to do on Sunday evening?"),
       fp("2. Write one plan and one prediction about next weekend.")],
      [fp("Answer."),
       pAns("E.A.: rent a film and spend the evening at home; I am going to wash my clothes; I think it will be sunny!",
        ["rent a film"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}
function lessonS8() {
  return [
    p([run("LESSON OF THE DAY — SESSION 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WILL OR BE GOING TO?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    weekendTextBox(),
    p("", { after: 60 }),
    box("THE TWO FUTURES", [
      bullet([run("BE GOING TO", { bold: true, color: C.BLUE }), run(" = a plan, already decided.  →  We are going to see some friends on Friday.")]),
      bullet([run("WILL", { bold: true, color: C.BLUE }), run(" = a prediction, an idea about the future.  →  I think it will rain tomorrow.")]),
      bullet([run("will + verb without “to”:", { bold: true, color: C.RED }), run("  it will rain (never “it will to rain”!)")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The signal words:", { bold: true })], { after: 50 }),
    bullet([run("a decision, a ticket, a plan", { bold: true, color: C.BLUE }), run("  →  be going to.")]),
    bullet([run("I think…, maybe, probably", { bold: true, color: C.BLUE }), run("  →  will.")]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("We bought the seeds: we "), run("are going to plant", { bold: true, color: C.BLUE }), run(" them on Saturday. (plan)")]),
    bullet([run("She studies a lot: I think she "), run("will pass", { bold: true, color: C.BLUE }), run(" the exam! (prediction)")]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u1_weekend.png", label: "An amazing weekend — listen and complete", url: AUDIO.weekend }], COLOR),
  ];
}

// ---------- S9 — Reading: Sarah's e-mail ----------
function ficheS9() {
  const meta = META("Reading: Sarah’s e-mail",
    "By the end of the lesson, learners will be able to comprehend the gist and the details of a written e-mail about plans.",
    "9 / 10", "the e-mail (book or board), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Will or going to? “I think she … win.” / “We … visit grandma on Sunday (decided!).”"),
       fp("2. Give one weekend activity in English.")],
      [fp("Answer."),
       fp("E.A.: will win; are going to visit; eat out / work out…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Look at the top of the text: To… From… Subject… What kind of document is it?")],
      [fp("Answer."),
       fp("E.A.: an e-mail!")],
      "Whole-class work", "The e-mail"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a real e-mail: « Sarah writes to Daniel ». By the end, you will read an e-mail like a detective — gist first, details after!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (skimming)"],
      [fp("Read fast (2 minutes), one question: why can’t Sarah come with Daniel?")],
      [fp("Skim. Answer."),
       fp("E.A.: because she is going to Paris with a friend.")],
      "Individual work", "The e-mail"),
    stepRow(["4. Analysis (scanning)"],
      [fp("Read again and answer: 1. How is Sarah feeling? 2. Name two things they are going to do in Paris. 3. How long is she going for?")],
      [fp("Scan. Answer."),
       pAns("E.A.: 1. so excited! 2. go up the Eiffel tower, see the old parts, visit art galleries, go shopping. 3. four days.",
        ["four days"], { size: SZ.FICHE })],
      "Pair work", "The e-mail"),
    stepRow(["5. Synthesis"],
      [fp("The parts of an e-mail: To / From / Subject → Hi + name → the body (the message) → See you soon + name. And inside: going to for the plans, will for “we’ll have to go shopping”!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Read and choose! I read about four friends: Andry would rather stay at home and read. Fara is going to swim. Mendrika is going to play football. Koto is going to cook. Match each friend with the right picture on the board!")],
      [fp("Listen. Match."),
       pAns("E.A.: Andry → book picture; Fara → river picture; Mendrika → field picture; Koto → kitchen picture.",
        ["Andry → book picture"], { size: SZ.FICHE })],
      "Matching activity", "Board pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three lines at the top of an e-mail."),
       fp("2. Quote one plan of Sarah in Paris.")],
      [fp("Answer."),
       pAns("E.A.: To / From / Subject; “We’re going to go up the Eiffel tower.”",
        ["To / From / Subject"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}
function lessonS9() {
  return [
    p([run("LESSON OF THE DAY — SESSION 9", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: SARAH’S E-MAIL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    emailTextBox(),
    p("", { after: 60 }),
    box("THE PARTS OF AN E-MAIL", [
      bullet([run("To / From / Subject", { bold: true, color: C.BLUE }), run("  —  the address lines at the top.")]),
      bullet([run("Hi, Daniel!", { bold: true, color: C.BLUE }), run("  —  the greeting.")]),
      bullet([run("the body", { bold: true, color: C.BLUE }), run("  —  the message: the plans, the feelings, the reasons.")]),
      bullet([run("See you soon, + name", { bold: true, color: C.BLUE }), run("  —  the closing.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Reading like a detective:", { bold: true })], { after: 50 }),
    bullet([run("Skimming", { bold: true, color: C.BLUE }), run(" = read fast for the gist: what is the e-mail about?")]),
    bullet([run("Scanning", { bold: true, color: C.BLUE }), run(" = read again for the details: who? where? how long?")]),
    p("", { after: 60 }),
    p([run("New words of the e-mail:", { bold: true })], { after: 50 }),
    vocab("I can’t come", "aï kannte kome", "it is not possible for me"),
    vocab("go up the Eiffel tower", "gôou eupe dhi aïfeul taoueur"),
    vocab("art galleries", "ârt galeriz", "houses full of paintings"),
    vocab("actually", "aktchoueli", "in fact"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u1_email.png", label: "Sarah’s e-mail — listen and read", url: AUDIO.email }], COLOR),
  ];
}

// ---------- S10 — Writing ----------
function ficheS10() {
  const meta = META("Writing: my weekend paragraph and my dialogue",
    "By the end of the lesson, learners will be able to write a short paragraph about weekend plans and a short dialogue of preferences with “because”.",
    "10 / 10", "exercise books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the parts of an e-mail."),
       fp("2. Where is Sarah going? For how long?")],
      [fp("Answer."),
       fp("E.A.: To/From/Subject, greeting, body, closing; to Paris, for four days.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The four questions game: WHO are you going with? WHAT are you going to do? WHERE? WHEN? Answer fast about next weekend!")],
      [fp("Answer fast.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE! By the end of this lesson, you will write a beautiful paragraph about your weekend — with the who, what, where, when!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model on the board: “Next weekend, I am going to visit my cousins (who) in Itaosy (where). On Saturday (when), we are going to play basketball (what). I think it will be fun!”")],
      [fp("Observe. Find who/what/where/when.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The plan of the paragraph: sentence 1 = the big plan; sentence 2-3 = the details (day + activity); sentence 4 = a prediction with will or a feeling. Now build YOUR sentences.")],
      [fp("Prepare the four sentences.")],
      "Individual work", "Exercise books"),
    stepRow(["5. Synthesis"],
      [fp("Checklist before writing: be going to for the plans ✓ on + day ✓ one “will” prediction ✓ capital letters and full stops ✓.")],
      [fp("Listen. Check.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Write! Part A: your weekend paragraph (4 sentences). Part B: a mini dialogue (4 lines): Would you rather…? — I’d rather…, because… Exchange books with your neighbour and check with the checklist!")],
      [fp("Write. Exchange. Check."),
       pAns("E.A.: Next weekend, I am going to help my father at the market. On Sunday, we are going to eat out. I think it will be a great weekend!",
        ["I am going to help"], { size: SZ.FICHE })],
      "Individual work, peer checking", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your paragraph to the class."),
       fp("2. One schoolmate finds your “will” prediction.")],
      [fp("Read. Listen. Find."),
       fp("E.A.: “I think it will be a great weekend!”")],
      "Whole-class work", "----"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}
function lessonS10() {
  return [
    p([run("LESSON OF THE DAY — SESSION 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY WEEKEND PLANS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PARAGRAPH PLAN (4 sentences)", [
      bullet([run("1. The big plan:", { bold: true }), run("  Next weekend, I am going to… (who with? where?)")]),
      bullet([run("2-3. The details:", { bold: true }), run("  On Saturday, … On Sunday, …")]),
      bullet([run("4. The prediction or the feeling:", { bold: true }), run("  I think it will be…! / I am so excited!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    bullet([run("Next weekend, I am going to visit my cousins in Itaosy.", { bold: true, color: C.BLUE })]),
    bullet([run("On Saturday, we are going to play basketball and eat out.", { bold: true, color: C.BLUE })]),
    bullet([run("On Sunday morning, we are going to go to the big market.", { bold: true, color: C.BLUE })]),
    bullet([run("I think it will be an amazing weekend!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("My model dialogue:", { bold: true })], { after: 50 }),
    bullet([run("Koto — ", { bold: true, color: COLOR }), run("Would you rather play football or go swimming?")]),
    bullet([run("Soa — ", { bold: true, color: COLOR }), run("I’d rather go swimming than play football, because it is very hot today!")]),
    bullet([run("Koto — ", { bold: true, color: COLOR }), run("I agree with you. Let’s do that!")]),
    p("", { after: 60 }),
    box("THE WRITER’S CHECKLIST", [
      p("✓ be going to for the plans   ✓ on + day   ✓ one “will” prediction   ✓ because for the reasons   ✓ capital letters and full stops!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 1", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Likes and preferences"),
    bullet([run("like / love / enjoy / prefer / hate + verb-ING:", { bold: true, color: C.BLUE }), run("  I love swimming. He hates washing the dishes.")]),
    bullet([run("Would you rather A or B? → I’d rather A than B", { bold: true, color: C.BLUE }), run("  (verb without “to”!)")]),
    bullet([run("The reason: because…", { bold: true, color: C.BLUE }), run("  I’d rather walk, because it is cheap.")], { after: 100 }),
    sub("2. Feelings and advice"),
    bullet([run("I feel + adjective:", { bold: true, color: C.BLUE }), run("  happy, excited, sad, worried, tired, angry, afraid.")]),
    bullet([run("You look + adjective. What’s wrong? What happened? Are you OK?", { bold: true, color: C.BLUE })]),
    bullet([run("Advice: You should + verb / You shouldn’t + verb.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The three tenses of the unit"),
    bullet([run("Present continuous (temporary): ", { bold: true }), run("be + V-ing → I am feeling tired today.", { bold: true, color: C.BLUE })]),
    bullet([run("Simple past (finished): ", { bold: true }), run("V-ed / irregular → I worked overtime last night.", { bold: true, color: C.BLUE })]),
    bullet([run("Futures: ", { bold: true }), run("be going to = plan; will = prediction.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Small words"),
    bullet([run("ON + day:", { bold: true, color: C.BLUE }), run("  on Saturday.   "), run("FOR + celebration:", { bold: true, color: C.BLUE }), run("  for Christmas.")], { after: 100 }),
    sub("5. The e-mail"),
    bullet([run("To / From / Subject → Hi + name → the body → See you soon + name.", { bold: true, color: C.BLUE })]),
    bullet([run("Skimming = fast for the gist; scanning = again for the details.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 1 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Complete with the gerund: 1. I love … (dance). 2. She enjoys … (read). 3. They hate … (get) up early.")]),
    pAns("Answers: 1. dancing 2. reading 3. getting up early.", ["dancing"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Put the words in order: rather / go / I’d / to the park / than / to the mall / .")]),
    pAns("Answer: I’d rather go to the park than to the mall.", ["I’d rather go"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Present continuous or simple past? 1. I … (feel) great today. 2. He … (work) overtime last night. 3. Look! They … (dance).")]),
    pAns("Answers: 1. am feeling 2. worked 3. are dancing.", ["am feeling"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Will or be going to? 1. I think it … rain. 2. We bought the tickets: we … travel on Friday. 3. My plan: I … help my mother.")]),
    pAns("Answers: 1. will 2. are going to 3. am going to.", ["will"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Complete with on or for: 1. … Sunday morning. 2. … Christmas. 3. … Saturday. 4. … my birthday.")]),
    pAns("Answers: 1. on 2. for 3. on 4. for.", ["on 2. for"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Answer on Sarah’s e-mail: 1. Who is the e-mail to? 2. Why is Sarah excited? 3. How long is she going for?")]),
    pAns("Answers: 1. to Daniel 2. because she is going to Paris with a friend 3. four days.", ["four days"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s11", "SESSION 11 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give three “verbs of the heart” and the golden rule."),
    pAns("E.A.: like, love, hate + verb-ING: I love swimming.", ["verb-ING"]),
    p("2. Ask a “Would you rather” question and answer it with because."),
    pAns("E.A.: Would you rather read or watch TV? — I’d rather read, because books are magic!", ["I’d rather read"]),
    p("3. In the dialogue, why did James prefer the park?"),
    pAns("E.A.: because there is a lot more to do than just go shopping.", ["a lot more to do"]),
    p("4. Name six feelings and two caring questions."),
    pAns("E.A.: happy, sad, tired, angry, afraid, excited; What’s wrong? What happened?", ["What’s wrong?"]),
    p("5. Why was Jane sad? Why was Arthur tired?"),
    pAns("E.A.: her cat was dead; he worked overtime last night.", ["her cat was dead"]),
    p("6. Give the form of the present continuous and one “temporary” example."),
    pAns("E.A.: be + V-ing; I am feeling tired today.", ["be + V-ing"]),
    p("7. Give one piece of advice to a worried friend."),
    pAns("E.A.: You should talk to the teacher! You shouldn’t worry!", ["You should"]),
    p("8. Will or going to? Explain with one example each."),
    pAns("E.A.: going to = plan (We are going to see friends); will = prediction (I think it will rain).", ["plan"]),
    p("9. Complete: … Saturday; … Easter; … Friday evening."),
    pAns("E.A.: on; for; on.", ["on; for; on"]),
    p("10. Give the parts of an e-mail and one plan of Sarah in Paris."),
    pAns("E.A.: To/From/Subject, greeting, body, closing; go up the Eiffel tower.", ["To/From/Subject"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s12", "SESSION 12 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with the gerund: 1. I love … (swim). 2. He enjoys … (play) dominoes. 3. She hates … (sweep). 4. We like … (listen) to music.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Answer with a full sentence + because: 1. Would you rather go to the park or to the mall? 2. Would you rather cook or wash the dishes?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Present continuous or simple past? 1. Today I … (feel) very happy. 2. Yesterday my cat … (die). 3. Look! You … (smile). 4. Last night he … (work) overtime.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Will or be going to? 1. I think it … be sunny. 2. We … make sandwiches on Saturday (decided!). 3. She … pass the exam, I’m sure! 4. My sister … surf the internet on Sunday (her plan).")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short e-mail (4 sentences) to a friend about your weekend plans: To/From/Subject, one plan with “be going to”, one day with “on”, one prediction with “will”.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: swimming; playing; sweeping; listening. (1 pt each)", ["swimming"]),
    pAns("Ex.2 (model): I’d rather go to the park than to the mall, because there is a lot more to do. / I’d rather cook, because I love making food! (2 pts each)", ["I’d rather go to the park"]),
    pAns("Ex.3: am feeling; died; are smiling; worked. (1 pt each)", ["am feeling"]),
    pAns("Ex.4: will; are going to; will; is going to. (1 pt each)", ["will; are going to"]),
    pAns("Ex.5 (model): To: Daniel — From: me — Subject: My weekend! / Hi! Next weekend, I am going to visit my aunt. On Sunday, we are going to eat out. I think it will be great! See you soon! (4 pts: plan 1, on+day 1, will 1, form 1)", ["I am going to visit"]),
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
    ...ficheS9(), pageBreak(), ...lessonS9(), pageBreak(),
    ...ficheS10(), pageBreak(), ...lessonS10(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 1", COLOR, [
      "I can say what I like, love and hate (+ verb-ING).",
      "I can choose with “I’d rather … than …” and explain with “because”.",
      "I can name the feelings and ask caring questions.",
      "I can use the present continuous for temporary facts.",
      "I can use the simple past for finished actions.",
      "I can tell my plans with “be going to” (on Saturday, for Christmas).",
      "I can make predictions with “will”.",
      "I can read a real e-mail and write my weekend paragraph.",
    ], "NEXT STOP → UNIT 2: CLASSROOM COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
module.exports.META = META;
module.exports.bullet = bullet;
module.exports.vocab = vocab;
module.exports.box = box;
