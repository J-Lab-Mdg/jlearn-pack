// T8 — UNIT 1 — PERSONAL COMMUNICATION (16 séances + révision + test) — Sessions 1 à 18 / 81
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu
const SHADE = "D6EAF8";
const TOTAL = 81;
const AUDIO = {
  folder: "https://drive.google.com/drive/folders/1muxOkS0bLFOfGg7JGFFDWBBK_glGmbvY",
  feelings: "https://drive.google.com/uc?export=download&id=1unOxEjipcV1eztNDOV58KcY8ukVVdRym",
  plans: "https://drive.google.com/uc?export=download&id=18s7eB-5ws9pseSasBmdxUxKo3RalHCnH",
  email: "https://drive.google.com/uc?export=download&id=19nkrehGtSOFQK0AGYzy4RiaI7S4zW9G6",
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
function feelingsDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE FEELINGS DIALOGUE (listening passage)", [
    L("Koto", "Hello Soa! How are you feeling today?"),
    L("Soa", "Hi Koto! I feel very happy and excited!"),
    L("Koto", "You look happy! What happened?"),
    L("Soa", "I won the spelling game at school yesterday!"),
    L("Koto", "Congratulations! And why is Fara sad?"),
    L("Soa", "She is not sad, she is just tired. She helped her mother all morning."),
    L("Koto", "Oh! And you, Koto, are you OK?… asks Soa."),
    L("Koto", "No… I feel a little worried. We are having a big test tomorrow!"),
    L("Soa", "Don’t worry! You are smiling now!"),
    L("Koto", "Yes — talking to you makes me happy!"),
  ]);
}
function plansTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("MY WEEKEND PLANS (listening passage)", [
    L("Next weekend is a holiday, and I am very excited! On Saturday morning, I am going to do my chores: I will sweep the house and wash the dishes. Then, in the afternoon, I am going to play football with my friends at the field."),
    L("On Sunday, we are going to visit my grandmother by bus. For Easter, my family is going to travel to Antsirabe by taxi-brousse. My little brother says: “It will rain on Sunday!” — maybe he is right, so I am going to take my umbrella!"),
  ]);
}
function emailTextBox() {
  const L = (t, o) => p([run(t, { size: SZ.BODY, ...(o || {}) })], { after: 60 });
  return box("THE E-MAIL (reading text)", [
    pr([run("From: ", { bold: true, color: COLOR }), run("Niry    "),
        run("To: ", { bold: true, color: COLOR }), run("Hanta    "),
        run("Subject: ", { bold: true, color: COLOR }), run("My holiday plans!", { bold: true })], { after: 80 }),
    L("Dear Hanta,"),
    L("How are you feeling today? I am feeling great, because the holidays are coming! For Christmas, I am going to visit my cousins in Toamasina. We are going to swim in the sea and play volleyball on the beach. I love swimming, but my brother prefers fishing."),
    L("On December 24th, we are going to cook a big dinner with my aunt. I think it will be delicious!"),
    L("What about you? What are you going to do for Christmas? Please write soon!"),
    L("Your friend, Niry"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 1 — PERSONAL COMMUNICATION", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("How are you feeling today?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_feelings.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• socialize and ask personal information with the WH-questions;"),
    p("• say my likes and dislikes: I love swimming! (the gerund);"),
    p("• state my preferences: I’d rather play…, because…;"),
    p("• name the feelings: happy, excited, sad, worried, tired…;"),
    p("• ask about feelings: How are you feeling? What’s wrong? What happened?;"),
    p("• use the present continuous for temporary facts: You are smiling!;"),
    p("• use the simple past: I won the game yesterday!;"),
    p("• talk about my weekend and holiday plans;"),
    p("• use “be going to” for plans and “will” for predictions;"),
    p("• use the time prepositions: for Christmas, on Sunday;"),
    p("• read an e-mail and write about my plans.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-esteem, mutual respect.")], { after: 160 }),
    box("WELCOME TO T8!", [
      p("In T7, you learned to describe your world: your dreams, your family, your town."),
      p("In T8, you travel in TIME: yesterday (the simple past!), today (your feelings!) and tomorrow (your plans!). Ready? Let’s go!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u1_feelings.png", label: "The feelings dialogue — listen and repeat", url: AUDIO.feelings }], COLOR),
  ];
}

// ---------- S1 — Socializing and personal information ----------
function ficheS1() {
  const meta = META("Socializing — asking and giving personal information",
    "By the end of the lesson, learners will be able to socialize and ask/give personal information with the WH-questions (what, where, when, who, why) and how.",
    "1 / 16", "ball or paper ball, identity card model");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(First session of the year.) Welcome questions:"),
       fp("1. Hello! What’s your name?"),
       fp("2. What did you like in English last year?")],
      [fp("Answer."),
       fp("E.A.: My name is…; I liked the songs / the games…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Name-chain game with the ball: “Hello! I’m Mr/Mrs…. And you?” The ball travels: each student says hello and their name.")],
      [fp("Catch the ball. Say hello and their name.")], "Using game", "Ball"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Socializing — personal information ». By the end of this lesson, you will meet someone new and ask the right questions — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model dialogue on the board: — Hello! I’m Koto. What’s your name? — I’m Soa! — Where do you live? — I live in Ambohipo. — When is your birthday? — On May 12th. — Who is your best friend? — Fara! — And why do you learn English? — Because I love songs! Listen and repeat with the right intonation.")],
      [fp("Listen. Repeat. Two volunteers act it out.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The question words — find them in the dialogue: WHAT? (thing), WHERE? (place), WHEN? (time), WHO? (person), WHY? (reason → because!), and HOW? (manner / How old…?). These are the 5 WH-questions + how: the keys of every conversation!")],
      [fp("Find the words. Give the meaning."),
       fp("E.A.: what = thing, where = place, when = time, who = person, why = reason, how = manner.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to socialize, I greet (Hello! Nice to meet you!) and I ask with the WH-words: What’s your name? Where do you live? When is your birthday? Who is your best friend? Why…? Because…! How old are you?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mingle activity: walk around the class, meet TWO new classmates, fill their identity card (name — place — birthday — best friend — one “why” question). Then present one classmate to the class.")],
      [fp("Mingle. Ask. Fill the card. Present."),
       pAns("E.A.: This is Niry. She lives in Isotry. Her birthday is on March 3rd. Her best friend is Hanta, because they sing together!",
        ["This is Niry."], { size: SZ.FICHE })],
      "Mingle activity", "Identity cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the 5 WH-question words + how."),
       fp("2. Ask your neighbour two personal questions.")],
      [fp("Answer."),
       pAns("E.A.: what, where, when, who, why + how; Where do you live? When is your birthday?",
        ["what, where, when, who, why"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LESSON OF THE DAY — SESSION 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("SOCIALIZING — THE WH-QUESTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The keys of every conversation:", { bold: true })], { after: 50 }),
    vocab("What…?", "ouate", "a thing — What’s your name?"),
    vocab("Where…?", "ouère", "a place — Where do you live?"),
    vocab("When…?", "ouène", "a time — When is your birthday?"),
    vocab("Who…?", "hou", "a person — Who is your best friend?"),
    vocab("Why…?", "ouaï", "a reason — Why do you learn English?"),
    vocab("How…?", "haou", "a manner — How old are you?"),
    p("", { after: 60 }),
    box("THE SOCIALIZING DIALOGUE", [
      bullet([run("— Hello! I’m Koto. ", { bold: true, color: C.BLUE }), run("What’s your name?", { bold: true, color: C.RED })]),
      bullet([run("— I’m Soa! ", { bold: true, color: C.BLUE })]),
      bullet([run("— Where do you live? ", { bold: true, color: C.RED }), run("— I live in Ambohipo.")]),
      bullet([run("— When is your birthday? ", { bold: true, color: C.RED }), run("— On May 12th.")]),
      bullet([run("— Why do you learn English? ", { bold: true, color: C.RED }), run("— Because I love songs!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t8_u1_socializing.png", label: "The socializing dialogue (t8_u1_socializing.mp3) — listen and repeat", url: AUDIO.folder }], COLOR),
    p("", { after: 60 }),
    box("MUTUAL RESPECT CORNER", [
      p("When you meet someone, look at them, smile, and listen to the answer. A question is a gift!", { after: 40 }),
    ]),
  ];
}

// ---------- S2 — Likes and dislikes + gerund ----------
function ficheS2() {
  const meta = META("Likes and dislikes — the verbs with the gerund",
    "By the end of the lesson, learners will be able to express likes and dislikes about food, school subjects and hobbies, using verbs that require the gerund (like, love, enjoy, hate, prefer + V-ing).",
    "2 / 16", "pictures of food, subjects and hobbies");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the 5 WH-question words + how, and ask me one personal question!")],
      [fp("Answer."),
       fp("E.A.: what, where, when, who, why, how — Where do you live, Sir?")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Thumb game: I show a picture (rice and laoka… football… mathematics…): thumb up 👍 if you like it, thumb down 👎 if not!")],
      [fp("React with thumbs.")], "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Likes and dislikes ». By the end of this lesson, you will say what you love… and what you hate — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model sentences: I like playing football. I love eating mangoes. Soa enjoys singing. I hate washing the dishes! Koto prefers reading. — Look at the verbs after like/love/enjoy/hate/prefer: what do you see?")],
      [fp("Observe."),
       fp("E.A.: the second verb takes -ING!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The rule: like, love, enjoy, hate, prefer + verb-ING (the gerund). Spelling: swim → swimming (double letter!), dance → dancing (no e!). The scale of the heart: love ❤️❤️ > like 👍 > don’t like 👎 > hate 💔.")],
      [fp("Repeat the rule. Build examples."),
       fp("E.A.: I love swimming; she hates getting up early!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: like / love / enjoy / hate / prefer + V-ing, for food, school subjects and hobbies. Question: Do you like dancing? — Yes, I do! / No, I don’t.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Find someone who…: likes cooking — hates waking up early — loves playing fanorona — enjoys singing. Walk, ask (Do you like…?), write the names!")],
      [fp("Mingle. Ask. Note the names."),
       pAns("E.A.: Do you like cooking? — Yes, I do! → Niry likes cooking.",
        ["Do you like cooking?"], { size: SZ.FICHE })],
      "Mingle activity", "Grids"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I love (swim)…; she hates (do) … the chores."),
       fp("2. Say one thing you like and one thing you hate (with -ing!).")],
      [fp("Answer."),
       pAns("E.A.: swimming; doing; I like reading, I hate sweeping!",
        ["swimming"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LESSON OF THE DAY — SESSION 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIKES AND DISLIKES — THE GERUND", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE GOLDEN RULE", [
      bullet([run("like / love / enjoy / hate / prefer ", { bold: true, color: C.RED }),
              run("+ verb-", ), run("ING", { bold: true, color: C.RED })]),
      bullet([run("I like "), run("playing", { bold: true, color: C.BLUE }), run(" football. — Soa enjoys "), run("singing", { bold: true, color: C.BLUE }), run(". — I hate "), run("sweeping", { bold: true, color: C.BLUE }), run("!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The scale of the heart:", { bold: true })], { after: 50 }),
    vocab("I love…", "aï love", "❤️❤️ my favourite!"),
    vocab("I like…", "aï laïke", "👍 it is nice"),
    vocab("I don’t like…", "aï dônte laïke", "👎 not for me"),
    vocab("I hate…", "aï héite", "💔 never!"),
    p("", { after: 60 }),
    p([run("Spelling watch-out:", { bold: true })], { after: 50 }),
    p("• swim → swimming (double the letter!);"),
    p("• dance → dancing (the e goes away!);"),
    p("• play → playing (no change)."),
    p("", { after: 60 }),
    box("THE QUESTION", [
      bullet([...kw("Do you like dancing?", "dou iou laïke dânnsinng")]),
      bullet([run("→ Yes, I do! / No, I don’t.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t8_u1_likes.png", label: "Likes and dislikes (t8_u1_likes.mp3) — listen and repeat", url: AUDIO.folder }], COLOR),
  ];
}

// ---------- S3 — I'd rather + because ----------
function ficheS3() {
  const meta = META("I’d rather…, because… — talking about preferences",
    "By the end of the lesson, learners will be able to ask and state preferences with “I’d rather + infinitive (without to)” and justify them with “because”.",
    "3 / 16", "preference cards (two pictures per card)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Complete: I enjoy (play)… the guitar; he hates (get)… up early.")],
      [fp("Answer."),
       fp("E.A.: playing; getting.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("This or that? I show two pictures: rice OR bread? football OR fanorona? Point at your choice — fast!")],
      [fp("Point at their choice.")], "Using visual aids", "Preference cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « I’d rather…, because… ». By the end of this lesson, you will choose like a champion — and explain WHY!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model dialogue: — Would you rather play football or watch TV? — I’d rather play football, because I love running! — And Soa? — She’d rather read, because stories make her travel. Listen, repeat, role play.")],
      [fp("Listen. Repeat. Role play in pairs.")],
      "Role play", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Look: I’d rather = I would rather. After “I’d rather”: the verb WITHOUT “to” (I’d rather play — not “to play”!). To compare: I’d rather walk THAN take the bus. And “because” gives the reason: the answer to WHY?")],
      [fp("Find the rules with the teacher."),
       fp("E.A.: I’d rather + infinitive without to; because + reason.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Would you rather X or Y? → I’d rather X (than Y), because… Three tools together: the WH-questions (session 1), the gerund (session 2) and I’d rather + because (today): you can now talk about all your preferences!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The preference chain: each student draws a card (two pictures) and asks their neighbour: “Would you rather … or …?” The neighbour answers with “I’d rather…, because…” and draws the next card!")],
      [fp("Ask and answer in a chain."),
       pAns("E.A.: Would you rather sing or dance? — I’d rather dance, because music moves my feet!",
        ["I’d rather dance"], { size: SZ.FICHE })],
      "Using game", "Preference cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Correct the sentence: “I’d rather to sleep.”"),
       fp("2. Answer with a reason: Would you rather live in the city or in the country?")],
      [fp("Answer."),
       pAns("E.A.: I’d rather sleep (no “to”!); I’d rather live in the country, because the air is pure!",
        ["I’d rather sleep"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LESSON OF THE DAY — SESSION 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I’D RATHER…, BECAUSE…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PREFERENCE MACHINE", [
      bullet([...kw("Would you rather play or read?", "oude iou râdheur pléi or ride")]),
      bullet([run("→ I’d rather play", { bold: true, color: C.BLUE }), run(" (than read)"), run(", because I love moving!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The two rules:", { bold: true })], { after: 50 }),
    p("• I’d rather (= I would rather) + verb WITHOUT “to”: I’d rather walk. ✔ — I’d rather to walk ✘;"),
    p("• because + the reason: it answers the question WHY?"),
    p("", { after: 60 }),
    p([run("More examples:", { bold: true })], { after: 50 }),
    bullet([run("I’d rather eat rice than bread, ", { bold: true, color: C.BLUE }), run("because rice gives me energy!")]),
    bullet([run("She’d rather sing than dance, ", { bold: true, color: C.BLUE }), run("because her voice is beautiful.")]),
    bullet([run("We’d rather walk to school, ", { bold: true, color: C.BLUE }), run("because the bus is full!")]),
    p("", { after: 60 }),
    box("MY PREFERENCES TOOLBOX (Sessions 1–3)", [
      p("WH-questions to ask → the gerund for likes (I love swimming!) → I’d rather + because to choose and explain. You are ready to talk about yourself!", { after: 40 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t8_u1_rather.png", label: "I’d rather…, because… (t8_u1_rather.mp3) — listen and role play", url: AUDIO.folder }], COLOR),
  ];
}

// ---------- S4 — Feelings vocabulary ----------
function ficheS4() {
  const meta = META("The feelings — happy, sad, excited…",
    "By the end of the lesson, learners will be able to name feelings and match them with faces (emoji).",
    "4 / 16", "emoji cards, pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Correct: “I’d rather to play.”"),
       fp("2. Complete: I love (swim)… ; Would you rather sing … dance?")],
      [fp("Answer."),
       fp("E.A.: I’d rather play; swimming; or.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at my face! (T mimes: big smile… then sad face… then yawning…) What is my face saying?")],
      [fp("Watch. Guess the feelings.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The feelings ». By the end of this lesson, you will say how you feel — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Match the feelings with the emoji: happy 😀, excited 🤩, sad 😢, worried 😟, tired 🥱, angry 😠, scared 😨, proud 😎. Listen and repeat each word.")],
      [fp("Match. Repeat.")],
      "Matching with emoji", "Emoji cards"),
    stepRow(["4. Analysis"],
      [fp("The magic question: How are you feeling today? — I feel happy! Ask your neighbour, then change roles.")],
      [fp("Ask and answer."),
       fp("E.A.: How are you feeling today? — I feel excited!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So the feelings: happy, excited, sad, worried, tired, angry, scared, proud — and the question: How are you feeling today? → I feel + adjective.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Emoji lift game: I say a sentence, you lift the right emoji! “My team won the match!” “I lost my pen…” “The dog is barking at me!”")],
      [fp("Lift the right emoji. Explain."),
       pAns("E.A.: happy/proud 😀 — sad/worried 😢 — scared 😨.",
        ["happy/proud"], { size: SZ.FICHE })],
      "Using game", "Emoji cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name five feelings."),
       fp("2. Answer: How are you feeling today?")],
      [fp("Answer."),
       pAns("E.A.: happy, sad, excited, tired, worried…; I feel happy!",
        ["I feel happy!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LESSON OF THE DAY — SESSION 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FEELINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_feelings.png", 420, 768 / 1408),
    p([run("How do I feel today?", { bold: true })], { after: 50 }),
    vocab("happy", "hapi", "😀 a big smile"),
    vocab("excited", "iksaïtide", "🤩 full of energy"),
    vocab("sad", "sade", "😢 with tears"),
    vocab("worried", "oueuride", "😟 thinking of a problem"),
    vocab("tired", "taïeurde", "🥱 I need to sleep"),
    vocab("angry", "anngri", "😠 red face!"),
    vocab("scared", "skèrde", "😨 afraid"),
    vocab("proud", "praoude", "😎 head up!"),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("How are you feeling today?", "haou âr iou filinng toudéi")]),
      bullet([run("→ "), run("I feel happy!", { bold: true, color: C.BLUE }), run("   "), run("I feel a little tired.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SELF-ESTEEM CORNER", [
      p("Every feeling is OK! Happy, sad, worried — we all feel them. Saying your feelings in words is a superpower.", { after: 40 }),
    ]),
  ];
}

// ---------- S2 — Asking about feelings ----------
function ficheS5() {
  const meta = META("You look sad… What happened?",
    "By the end of the lesson, learners will be able to ask about other people’s feelings and react kindly.",
    "5 / 16", "emoji cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name five feelings."),
       fp("2. How are you feeling today?")],
      [fp("Answer."),
       fp("E.A.: happy, sad, worried…; I feel proud!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T enters with a very sad face and says nothing.) What can you say to me? Help me with your words!")],
      [fp("React. Try questions.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Asking about feelings ». By the end of this lesson, you will take care of your friends — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the caring questions: You look sad. What’s wrong? / What happened? / Are you OK? And the curious question: What makes you happy?")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Observe the structure: YOU LOOK + adjective (You look tired!). WHAT MAKES YOU + adjective? (What makes you proud?) Build new sentences!")],
      [fp("Build sentences."),
       fp("E.A.: You look excited! What makes you scared?")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: You look + adj. → What’s wrong? / What happened? / Are you OK? → the friend answers → we react kindly: Don’t worry! Congratulations!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mini role play in pairs: student A picks an emoji card secretly and mimes; student B says “You look…” and asks a caring question; A answers!")],
      [fp("Role play in pairs."),
       pAns("E.A.: You look sad. What happened? — I lost my ruler. — Don’t worry, take mine!",
        ["You look sad."], { size: SZ.FICHE })],
      "Role play", "Emoji cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Your friend looks worried: ask two caring questions."),
       fp("2. Complete: What … you happy?")],
      [fp("Answer."),
       pAns("E.A.: What’s wrong? Are you OK?; makes.",
        ["What’s wrong?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LESSON OF THE DAY — SESSION 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING ABOUT FEELINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE CARING QUESTIONS", [
      bullet([...kw("You look + adjective:", "iou louk"), run("  "), run("You look sad. You look tired.", { bold: true, color: C.BLUE })]),
      bullet([...kw("What’s wrong?", "ouats ronng"), run("  —  what is the problem?")]),
      bullet([...kw("What happened?", "ouate hapeunnde"), run("  —  tell me the story!")]),
      bullet([...kw("Are you OK?", "âr iou ôou kéi"), run("  —  the simple caring question.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE CURIOUS QUESTION", [
      bullet([...kw("What makes you + adjective?", "ouate méiks iou")]),
      bullet([run("What makes you happy? — Playing football makes me happy!", { bold: true, color: C.BLUE })]),
      bullet([run("What makes you scared? — Big dogs make me scared!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE KIND REACTIONS", [
      bullet([run("Good news → "), run("Congratulations! Well done! I am happy for you!", { bold: true, color: C.GREEN })]),
      bullet([run("Bad news → "), run("Don’t worry! It’s OK. Can I help you?", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
  ];
}

// ---------- S3 — Listening: the feelings dialogue ----------
function ficheS6() {
  const meta = META("Listening — the feelings dialogue",
    "By the end of the lesson, learners will be able to understand the gist and details of a dialogue about feelings and role play it.",
    "6 / 16", "audio (QR code), dialogue in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your friend looks sad: what do you say?"),
       fp("2. What makes you excited?")],
      [fp("Answer."),
       fp("E.A.: You look sad, what happened?; Holidays make me excited!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the emoji on the board: 😀 🥱 😟. Koto and Soa are going to talk — guess: who feels what?")],
      [fp("Guess.")], "Prediction", "Emoji"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to Koto and Soa talking about feelings. By the end of this lesson, you will catch the gist and the details — and act the dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): what is the dialogue about? Who is happy?")],
      [fp("Listen. Answer."),
       fp("E.A.: friends asking about feelings; Soa is happy and excited.")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): details: 1. Why is Soa happy? 2. Is Fara sad? 3. Why is Koto worried? 4. What makes Koto happy at the end?")],
      [fp("Listen. Answer."),
       fp("E.A.: she won the spelling game; no, she is tired; a big test tomorrow; talking to Soa.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("Post-listening: repeat after the audio, line by line — happy voice for Soa, worried voice for Koto!")],
      [fp("Repeat with feeling!")], "Repetition drill", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Role play the dialogue in pairs — then change ONE feeling and ONE reason: make it YOUR dialogue!")],
      [fp("Role play. Personalise."),
       pAns("E.A.: dialogue played with correct questions and answers.",
        ["dialogue played"], { size: SZ.FICHE })],
      "Role play", "Dialogue"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the gist of the dialogue."),
       fp("2. Give two details.")],
      [fp("Answer."),
       pAns("E.A.: friends asking and telling feelings; Soa won the game, Fara is tired…",
        ["Soa won the game"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  return [
    p([run("LESSON OF THE DAY — SESSION 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FEELINGS DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    feelingsDialogueBox(),
    p("", { after: 60 }),
    box("WHAT WE HEARD", [
      bullet([run("Soa feels "), run("happy and excited", { bold: true, color: C.BLUE }), run(" — she "), run("won", { bold: true, color: C.RED }), run(" the spelling game "), run("yesterday", { bold: true, color: C.RED }), run("!")]),
      bullet([run("Fara is not sad — she is just "), run("tired", { bold: true, color: C.BLUE }), run(": she "), run("helped", { bold: true, color: C.RED }), run(" her mother all morning.")]),
      bullet([run("Two mysteries for the next lessons: “You "), run("are smiling", { bold: true, color: C.RED }), run("!” and “I "), run("won", { bold: true, color: C.RED }), run("…” — new tenses are hiding here!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u1_feelings.png", label: "The feelings dialogue — listen and role play", url: AUDIO.feelings }], COLOR),
  ];
}

// ---------- S4 — Present continuous (temporary facts) ----------
function ficheS7() {
  const meta = META("The present continuous — You are smiling!",
    "By the end of the lesson, learners will be able to use the present continuous to describe temporary facts and feelings.",
    "7 / 16", "the dialogue of session 6");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue: why is Koto worried?"),
       fp("2. Quote the sentence with “smiling”.")],
      [fp("Answer."),
       fp("E.A.: a big test tomorrow; “You are smiling now!”")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T smiles.) I am smiling! (T stops.) Now I am not smiling. Right NOW — not every day. Do you feel the difference?")],
      [fp("Watch. Feel the “now”.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to study the « present continuous » for temporary facts. By the end of this lesson, you will describe what is happening RIGHT NOW!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("From the dialogue: “You ARE SMILING now!” “We ARE HAVING a big test tomorrow!” Observe the form: BE (am/is/are) + verb-ING.")],
      [fp("Observe. Find the form.")],
      "Contextualisation of grammar", "Dialogue"),
    stepRow(["4. Analysis"],
      [fp("When do we use it? For TEMPORARY facts: now, today, this week. “I am feeling great today” (today only!) ≠ “I feel happy every day” (habit!)."),
       fp("Build: I … (smile) now. She … (cry). They … (laugh)!")],
      [fp("Complete with be + V-ing."),
       fp("E.A.: I am smiling; she is crying; they are laughing.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the present continuous: BE + verb-ING, for what is happening NOW or these days. Negative: I am NOT crying. Question: ARE you smiling?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mime and say: a student mimes an action + feeling; the class says: “He is yawning — he is feeling tired!”")],
      [fp("Mime. Describe with be + V-ing."),
       pAns("E.A.: She is laughing — she is feeling happy!",
        ["She is laughing"], { size: SZ.FICHE })],
      "Mime game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: Look! The baby … (sleep)."),
       fp("2. Make the question: you / feel / OK / today?")],
      [fp("Answer."),
       pAns("E.A.: is sleeping; Are you feeling OK today?",
        ["is sleeping"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  return [
    p([run("LESSON OF THE DAY — SESSION 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PRESENT CONTINUOUS (NOW!)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FORM: BE + VERB-ING", [
      bullet([run("I "), run("am smiling", { bold: true, color: C.RED }), run(".   You / We / They "), run("are laughing", { bold: true, color: C.RED }), run(".   He / She "), run("is crying", { bold: true, color: C.RED }), run(".")]),
      bullet([run("Negative: I am "), run("not", { bold: true }), run(" crying.   Question: "), run("Are", { bold: true }), run(" you smiling? — Yes, I am!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE USE: TEMPORARY FACTS", [
      bullet([run("Right now: ", { bold: true }), run("Look! The baby is sleeping.", { bold: true, color: C.BLUE })]),
      bullet([run("Today / these days: ", { bold: true }), run("I am feeling great today!", { bold: true, color: C.BLUE })]),
      bullet([run("From the dialogue: "), run("You are smiling now! We are having a big test tomorrow!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TEMPORARY ≠ HABIT", [
      bullet([run("NOW (temporary): ", { bold: true, color: C.RED }), run("I am feeling tired today.", { bold: true, color: C.BLUE })]),
      bullet([run("EVERY DAY (habit): ", { bold: true, color: C.RED }), run("I feel happy at school.", { bold: true, color: C.BLUE })]),
      bullet([run("The signal words choose the tense: now, look!, today → continuous; every day, always → simple.")], { after: 20 }),
    ]),
  ];
}

// ---------- S5 — Simple past (1) ----------
function ficheS8() {
  const meta = META("The simple past (1) — was, were and the -ed verbs",
    "By the end of the lesson, learners will be able to talk about yesterday with was/were and regular verbs in -ed.",
    "8 / 16", "the dialogue of session 6");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the form of the present continuous."),
       fp("2. Complete: Look! They … (play) outside.")],
      [fp("Answer."),
       fp("E.A.: be + verb-ing; are playing.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Yesterday… (T mimes sweeping) I swept? No — let’s start simple: Yesterday I WAS tired. I HELPED my family. Who can say one thing about yesterday?")],
      [fp("Try a “yesterday” sentence.")], "Personalisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to open the door of the PAST: the « simple past ». By the end of this lesson, you will tell what happened yesterday!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("From the dialogue: “She HELPED her mother all morning.” Observe: help → helpED. The regular past = verb + -ED! And BE has two pasts: I/he/she WAS — you/we/they WERE.")],
      [fp("Observe. Find the -ed.")],
      "Contextualisation of grammar", "Dialogue"),
    stepRow(["4. Analysis"],
      [fp("Transform to the past: I play football → I PLAYED football yesterday. She watches TV → ? We are happy → ? They work hard → ?")],
      [fp("Transform."),
       fp("E.A.: she watched TV; we were happy; they worked hard.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the simple past tells YESTERDAY: regular verbs + -ED (helped, played, watched); BE → was/were. Signal words: yesterday, last week, this morning.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game: “Yesterday I helped my mother.” The next student repeats and adds: “Yesterday I helped my mother and I played football!”")],
      [fp("Play the memory chain."),
       pAns("E.A.: correct -ed verbs and was/were in the chain.",
        ["correct -ed verbs"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Put in the past: I am tired; we play; she helps."),
       fp("2. Say one true sentence about your yesterday.")],
      [fp("Answer."),
       pAns("E.A.: I was tired; we played; she helped; Yesterday I washed the dishes.",
        ["I was tired"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}
function lessonS8() {
  return [
    p([run("LESSON OF THE DAY — SESSION 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SIMPLE PAST (1): WAS, WERE, -ED", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("TO BE IN THE PAST", [
      bullet([run("I / he / she / it → "), run("WAS", { bold: true, color: C.RED }), run("  :  "), ...kw("Yesterday I was tired.", "yèsteurdéi aï ouoz taïeurde")]),
      bullet([run("you / we / they → "), run("WERE", { bold: true, color: C.RED }), run("  :  "), ...kw("We were happy!", "oui oueur hapi")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REGULAR VERBS: + -ED", [
      bullet([run("help → "), run("helped", { bold: true, color: C.RED }), run("   play → "), run("played", { bold: true, color: C.RED }), run("   watch → "), run("watched", { bold: true, color: C.RED }), run("   work → "), run("worked", { bold: true, color: C.RED })]),
      bullet([run("From the dialogue: "), run("“She helped her mother all morning.”", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SIGNAL WORDS OF THE PAST", [
      bullet([run("yesterday — last week — last Sunday — this morning — in 2024", { bold: true, color: C.BLUE })]),
      bullet([run("Yesterday I "), run("washed", { bold: true, color: C.RED }), run(" the dishes and I "), run("was", { bold: true, color: C.RED }), run(" very proud!")], { after: 20 }),
    ]),
  ];
}

// ---------- S6 — Simple past (2) ----------
function ficheS9() {
  const meta = META("The simple past (2) — won, lost, went… and the feelings games",
    "By the end of the lesson, learners will be able to use common irregular past forms and tell what happened.",
    "9 / 16", "emoji cards, quiz quiz trade cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Put in the past: I am scared; they help."),
       fp("2. Give two signal words of the past.")],
      [fp("Answer."),
       fp("E.A.: I was scared; they helped; yesterday, last week.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In the dialogue, Soa says: “I WON the spelling game!” Win → won?! No -ed! Some verbs are REBELS…")],
      [fp("Listen. Discover the rebels.")], "Discovery", "Dialogue"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to meet the « irregular past » verbs. By the end of this lesson, you will tell real stories about yesterday!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The first rebels: win → WON, lose → LOST, go → WENT, eat → ATE, see → SAW, have → HAD. Listen and repeat.")],
      [fp("Listen. Repeat.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("What happened? Answer with the past: 1. Why was Soa happy? 2. Imagine: why was Koto sad last week? (He lost… he went…)")],
      [fp("Answer with past verbs."),
       fp("E.A.: She won the spelling game; he lost his pen / he went to the hospital…")],
      "Question-answer", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: regular verbs + -ED, irregular verbs change completely (won, lost, went, ate, saw, had). “What happened?” calls the simple past!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Quiz quiz trade: each student gets a card (a feeling + “What happened?”). Walk, meet, ask, answer with the past, trade cards, meet again!")],
      [fp("Play quiz quiz trade."),
       pAns("E.A.: You look proud! What happened? — I won the race!",
        ["I won the race!"], { size: SZ.FICHE })],
      "Quiz quiz trade", "Cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the past of: win, go, eat, lose."),
       fp("2. Answer: You look happy! What happened?")],
      [fp("Answer."),
       pAns("E.A.: won, went, ate, lost; I saw my cousins yesterday!",
        ["won, went, ate, lost"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}
function lessonS9() {
  return [
    p([run("LESSON OF THE DAY — SESSION 9", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SIMPLE PAST (2): THE REBEL VERBS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FIRST SIX REBELS (learn them by heart!)", [
      bullet([run("win → "), run("won", { bold: true, color: C.RED }), run("  [ouonne]   lose → "), run("lost", { bold: true, color: C.RED }), run("  [loste]   go → "), run("went", { bold: true, color: C.RED }), run("  [ouènnte]")]),
      bullet([run("eat → "), run("ate", { bold: true, color: C.RED }), run("  [éite]   see → "), run("saw", { bold: true, color: C.RED }), run("  [sô]   have → "), run("had", { bold: true, color: C.RED }), run("  [hade]")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("FEELING + STORY = THE PERFECT ANSWER", [
      bullet([run("You look proud! What happened? — "), run("I won the race!", { bold: true, color: C.BLUE })]),
      bullet([run("You look sad… What happened? — "), run("I lost my new pen.", { bold: true, color: C.BLUE })]),
      bullet([run("You look excited! What happened? — "), run("We went to the stadium and we saw the big match!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("REMEMBER THE TWO FAMILIES", [
      bullet([run("Regular: ", { bold: true }), run("+ -ed", { bold: true, color: C.RED }), run(" → helped, played, watched, worked")]),
      bullet([run("Irregular: ", { bold: true }), run("new word!", { bold: true, color: C.RED }), run(" → won, lost, went, ate, saw, had")], { after: 20 }),
    ]),
  ];
}

// ---------- S7 — Weekend activities ----------
function ficheS10() {
  const meta = META("The weekend and holiday activities",
    "By the end of the lesson, learners will be able to name weekend activities: chores, hobbies, sports and transport.",
    "10 / 16", "picture of the weekend activities");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the past of: win, see, go."),
       fp("2. You look tired. What happened?")],
      [fp("Answer."),
       fp("E.A.: won, saw, went; I helped my father all day!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Brainstorm: what do you do on weekends? Shout your ideas — I write them all on the board!")],
      [fp("Brainstorm weekend activities.")], "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the words of the weekend: chores, hobbies, sports and transport. By the end of this lesson, your weekend will speak English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the picture and repeat by family: CHORES: sweep the house, wash the dishes, fetch water. HOBBIES: read, fly a kite, listen to music. SPORTS & GAMES: play football, play hide-and-seek. TRANSPORT: by bus, by taxi-brousse, on foot.")],
      [fp("Observe. Repeat by family.")],
      "Using visual aids", "Picture"),
    stepRow(["4. Analysis"],
      [fp("Sort the board ideas into the four families! Then tell your weekend: “On Saturday I sweep the yard, then I play football.”")],
      [fp("Sort. Tell your weekend."),
       fp("E.A.: correct sorting; correct weekend sentences.")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the weekend words: the chores (we must), the hobbies (we love), the sports and games (we play), the transport (we travel). Holidays and days off = the big weekends!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mime festival: one student mimes an activity, the class guesses the family AND the activity: “Sweeping — it’s a chore!”")],
      [fp("Mime. Guess."),
       pAns("E.A.: He is washing the dishes — a chore! She is flying a kite — a hobby!",
        ["a chore!"], { size: SZ.FICHE })],
      "Mime game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two chores and two hobbies."),
       fp("2. How do you go to school: by bus or on foot?")],
      [fp("Answer."),
       pAns("E.A.: sweep, wash the dishes; read, fly a kite; I go on foot.",
        ["on foot"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}
function lessonS10() {
  return [
    p([run("LESSON OF THE DAY — SESSION 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WEEKEND ACTIVITIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_weekend.png", 420, 768 / 1408),
    p([run("The four families of the weekend:", { bold: true })], { after: 50 }),
    vocab("the chores", "dhe tchôrz", "sweep the house, wash the dishes, fetch water"),
    vocab("the hobbies", "dhe hobiz", "read, fly a kite, listen to music, draw"),
    vocab("sports and games", "spôrts annde guéimz", "play football, run, play hide-and-seek"),
    vocab("the transport", "dhe trannspôrt", "by bus, by taxi-brousse, by bike, on foot"),
    p("", { after: 60 }),
    box("THE SPECIAL DAYS", [
      bullet([...kw("the weekend", "dhe ouikènnde"), run("  —  Saturday and Sunday")]),
      bullet([...kw("a holiday", "e holidéi"), run("  —  Christmas, Easter, Independence Day…")]),
      bullet([...kw("a day off", "e déi of"), run("  —  a free day, no school!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY WEEKEND IN TWO SENTENCES (model)", [
      p([run("On Saturday morning I sweep the yard and I fetch water. In the afternoon I play football with my friends — and on Sunday we visit my grandmother by bus!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S8 — Listening: the plans passage ----------
function ficheS11() {
  const meta = META("Listening — my weekend plans",
    "By the end of the lesson, learners will be able to understand the gist and details of an oral passage about future plans.",
    "11 / 16", "audio (QR code), passage in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the four families of weekend activities."),
       fp("2. Name two chores.")],
      [fp("Answer."),
       fp("E.A.: chores, hobbies, sports, transport; sweep, wash the dishes.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: next weekend is a holiday! A student is telling his plans. Guess: what is he going to do?")],
      [fp("Guess.")], "Prediction", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to « My weekend plans ». By the end of this lesson, you will catch the gist and the details — and hear the future hiding in the sentences!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): what is the passage about? Is the speaker happy about the weekend?")],
      [fp("Listen. Answer."),
       fp("E.A.: his plans for the holiday weekend; yes, very excited!")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): details: 1. What is he going to do on Saturday morning? 2. Who are they going to visit on Sunday? 3. How will they travel for Easter? 4. What does the little brother say?")],
      [fp("Listen. Answer."),
       fp("E.A.: his chores (sweep, wash the dishes); his grandmother, by bus; by taxi-brousse to Antsirabe; “It will rain on Sunday!”")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("Post-listening: repeat after the audio. Then hunt the future: how many times do you hear “going to”? And “will”?")],
      [fp("Repeat. Count the futures."),
       fp("E.A.: going to × 5, will × 2.")],
      "Repetition drill", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Share YOUR plan for next weekend in one sentence — any way you can! (Tomorrow we learn the perfect way.)")],
      [fp("Share a plan."),
       pAns("E.A.: free try with “going to” encouraged.",
        ["free try"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the gist of the passage."),
       fp("2. Give two details.")],
      [fp("Answer."),
       pAns("E.A.: weekend and holiday plans; chores on Saturday, grandmother on Sunday, Antsirabe for Easter.",
        ["grandmother on Sunday"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(11, TOTAL, meta, rows, "s11");
}
function lessonS11() {
  return [
    p([run("LESSON OF THE DAY — SESSION 11", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY WEEKEND PLANS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    plansTextBox(),
    p("", { after: 60 }),
    box("WHAT WE HEARD", [
      bullet([run("Saturday morning: the chores — "), run("I am going to do my chores… I will sweep…", { italic: true })]),
      bullet([run("Sunday: "), run("visit grandmother by bus", { bold: true, color: C.BLUE }), run(" — Easter: "), run("Antsirabe by taxi-brousse", { bold: true, color: C.BLUE })]),
      bullet([run("Two futures are hiding: "), run("BE GOING TO", { bold: true, color: C.RED }), run(" (the plan) and "), run("WILL", { bold: true, color: C.RED }), run(" (the prediction: “It will rain!”) — next lessons!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u1_plans.png", label: "“My weekend plans” — listen and repeat", url: AUDIO.plans }], COLOR),
  ];
}

// ---------- S9 — Be going to ----------
function ficheS12() {
  const meta = META("Be going to — my plans",
    "By the end of the lesson, learners will be able to express future plans with “be going to” + infinitive.",
    "12 / 16", "the passage of session 11");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the passage: what are they going to do on Sunday?"),
       fp("2. Quote one sentence with “going to”.")],
      [fp("Answer."),
       fp("E.A.: visit the grandmother; “I am going to play football.”")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T takes the chalk and walks to the board.) I am GOING TO write! It is my plan — you can see it coming!")],
      [fp("Watch the plan coming.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn « be going to » for plans. By the end of this lesson, your future will be clear!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("From the passage: “I AM GOING TO play football.” “We ARE GOING TO visit my grandmother.” Observe the form: BE + GOING TO + verb (infinitive).")],
      [fp("Observe. Find the form.")],
      "Contextualisation of grammar", "Passage"),
    stepRow(["4. Analysis"],
      [fp("Build plans: I / visit my uncle. She / cook rice. They / play basketball. Question: What ARE you GOING TO do next weekend? Negative: I am NOT going to stay home!")],
      [fp("Build sentences, questions, negatives."),
       fp("E.A.: I am going to visit my uncle; Is she going to cook?…")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the plan future: BE (am/is/are) + GOING TO + verb. It is decided in my head BEFORE I speak!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The dice game: 1 = chores, 2 = sport, 3 = hobby, 4 = visit, 5 = transport, 6 = free! Throw the dice and say your weekend plan with “going to”!")],
      [fp("Throw. Say a plan."),
       pAns("E.A.: I am going to wash the dishes! We are going to travel by bus!",
        ["going to"], { size: SZ.FICHE })],
      "Dice game", "Dice"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write your plan for Sunday with “going to”."),
       fp("2. Ask your neighbour’s plan.")],
      [fp("Answer."),
       pAns("E.A.: I am going to visit my cousins; What are you going to do on Sunday?",
        ["I am going to"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(12, TOTAL, meta, rows, "s12");
}
function lessonS12() {
  return [
    p([run("LESSON OF THE DAY — SESSION 12", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("BE GOING TO — THE PLAN FUTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FORM: BE + GOING TO + VERB", [
      bullet([run("I "), run("am going to", { bold: true, color: C.RED }), run(" sweep the yard.")]),
      bullet([run("She "), run("is going to", { bold: true, color: C.RED }), run(" cook rice.")]),
      bullet([run("We "), run("are going to", { bold: true, color: C.RED }), run(" visit our grandmother.")]),
      bullet([run("Question: "), run("What are you going to do next weekend?", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: "), run("I am not going to stay home!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE USE: A PLAN ALREADY IN MY HEAD", [
      bullet([run("The decision is taken BEFORE speaking: "), run("Next Sunday, we are going to travel to Antsirabe.", { italic: true })]),
      bullet([run("Pronunciation help: "), ...kw("I am going to play", "aï amme gôouinng tou pléi")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY THREE PLANS (model)", [
      p([run("Next weekend, I am going to do my chores on Saturday morning. Then I am going to play football with my friends. On Sunday, we are going to visit my grandmother!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S10 — Will vs be going to + for/on ----------
function ficheS13() {
  const meta = META("Will (prediction) vs be going to (plan) — and FOR / ON",
    "By the end of the lesson, learners will be able to choose between will and be going to, and use the time prepositions for and on.",
    "13 / 16", "the passage of session 11");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the form of the plan future."),
       fp("2. Say one plan for tonight.")],
      [fp("Answer."),
       fp("E.A.: be + going to + verb; I am going to do my homework.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T looks at the sky through the window.) Hmm… look at the clouds… It WILL rain! It is not my plan — it is my GUESS!")],
      [fp("Feel the difference plan/guess.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to separate the two futures: WILL and BE GOING TO. By the end of this lesson, you will choose the right one every time!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("From the passage: “I AM GOING TO play football” (plan, decided!). “It WILL rain on Sunday!” (prediction, a guess!). Observe: will + verb, same for all persons.")],
      [fp("Observe. Compare the two.")],
      "Contextualisation of grammar", "Passage"),
    stepRow(["4. Analysis"],
      [fp("Choose: 1. Look at those black clouds! It … rain. 2. We bought the tickets: we … travel tomorrow. 3. I think our team … win."),
       fp("And the time prepositions: FOR + holiday (for Christmas, for Easter) — ON + day/date (on Sunday, on December 24th).")],
      [fp("Choose. Build with for/on."),
       fp("E.A.: will rain (prediction); are going to travel (plan); will win (prediction).")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: PLAN decided → be going to. PREDICTION / guess → will. FOR + holiday, ON + day or date.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The fortune teller game: one student is the fortune teller: “You will be a pilot! You will have a big house!” The class answers with plans: “Yes! And I am going to study hard for that!”")],
      [fp("Predict with will. Plan with going to."),
       pAns("E.A.: will for predictions, going to for plans.",
        ["will for predictions"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Choose: I think it … be hot tomorrow. We … visit grandma (tickets bought!)."),
       fp("2. Complete: … Christmas; … Monday.")],
      [fp("Answer."),
       pAns("E.A.: will be; are going to visit; for Christmas; on Monday.",
        ["will be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  return [
    p([run("LESSON OF THE DAY — SESSION 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WILL OR BE GOING TO?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE TWO FUTURES FACE TO FACE", [
      bullet([run("BE GOING TO", { bold: true, color: C.RED }), run(" = the PLAN (decided before): "), run("We are going to travel to Antsirabe for Easter.", { bold: true, color: C.BLUE })]),
      bullet([run("WILL", { bold: true, color: C.RED }), run(" = the PREDICTION (my guess): "), run("It will rain on Sunday! Our team will win!", { bold: true, color: C.BLUE })]),
      bullet([run("WILL is easy: same for all persons — I will, she will, they will ("), run("will not = won’t", { bold: true }), run(").")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE TIME PREPOSITIONS: FOR AND ON", [
      bullet([run("FOR", { bold: true, color: C.RED }), run(" + holiday: "), run("for Christmas, for Easter, for Independence Day", { bold: true, color: C.BLUE })]),
      bullet([run("ON", { bold: true, color: C.RED }), run(" + day / date: "), run("on Sunday, on December 24th, on my birthday", { bold: true, color: C.BLUE })]),
      bullet([run("What are you going to do "), run("for", { bold: true, color: C.RED }), run(" Christmas? — "), run("On", { bold: true, color: C.RED }), run(" December 24th, we are going to cook a big dinner!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE QUICK TEST", [
      bullet([run("Decided before + ticket in the pocket → "), run("going to", { bold: true, color: C.RED })]),
      bullet([run("I look at the sky / I imagine → "), run("will", { bold: true, color: C.RED })], { after: 20 }),
    ]),
  ];
}

// ---------- S11 — Reading the e-mail (1) ----------
function ficheS14() {
  const meta = META("Reading (1) — the e-mail: prediction and gist",
    "By the end of the lesson, learners will be able to predict the content of an e-mail from its subject, read it accurately and find its gist.",
    "14 / 16", "e-mail in the book, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Will or going to: It … rain (look at the clouds!)."),
       fp("2. Complete: … Easter; … Saturday.")],
      [fp("Answer."),
       fp("E.A.: will rain; for Easter; on Saturday.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: today we read an E-MAIL — a letter on the computer! The subject says: “My holiday plans!” Predict: what will Niry write about?")],
      [fp("Predict from the subject."),
       fp("E.A.: her plans for the holidays, her feelings…")],
      "Prediction", "E-mail"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ Niry’s e-mail. By the end of this lesson, you will read it smoothly and catch its gist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the e-mail parts: From… To… Subject… Dear Hanta… the body… Your friend, Niry. An e-mail has a skeleton!")],
      [fp("Observe the parts.")],
      "Using visual aids", "E-mail"),
    stepRow(["4. Analysis"],
      [fp("While-reading (silent): read the e-mail once. Were your predictions right? What is the gist?")],
      [fp("Read. Check predictions. Gist."),
       fp("E.A.: Niry tells her Christmas plans in Toamasina and asks Hanta’s plans.")],
      "Silent reading", "E-mail"),
    stepRow(["5. Synthesis"],
      [fp("So the gist: Niry feels great; she is going to visit her cousins in Toamasina for Christmas; she asks Hanta’s plans. The subject already said it!")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the e-mail aloud accurately, one sentence per student — follow the audio model for the pronunciation.")],
      [fp("Read accurately."),
       pAns("E.A.: smooth and accurate reading of the whole e-mail.",
        ["accurate reading"], { size: SZ.FICHE })],
      "Reading aloud", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three parts of the e-mail head."),
       fp("2. Give the gist in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: From, To, Subject; Niry tells her holiday plans and asks Hanta’s.",
        ["From, To, Subject"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LESSON OF THE DAY — SESSION 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE E-MAIL (1)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    emailTextBox(),
    p("", { after: 60 }),
    box("THE SKELETON OF AN E-MAIL", [
      bullet([run("The head: "), run("From… To… Subject…", { bold: true, color: C.BLUE })]),
      bullet([run("The hello: "), run("Dear Hanta,", { bold: true, color: C.BLUE })]),
      bullet([run("The body: the news, the plans, the questions")]),
      bullet([run("The goodbye: "), run("Please write soon! Your friend, Niry", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u1_email.png", label: "Niry’s e-mail — listen and follow in your book", url: AUDIO.email }], COLOR),
  ];
}

// ---------- S12 — Reading the e-mail (2) ----------
function ficheS15() {
  const meta = META("Reading (2) — the e-mail: details and guess the person",
    "By the end of the lesson, learners will be able to answer detailed questions on the e-mail and match descriptions with people.",
    "15 / 16", "e-mail in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Who writes the e-mail, and to whom?"),
       fp("2. What is the subject?")],
      [fp("Answer."),
       fp("E.A.: Niry to Hanta; “My holiday plans!”")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quiz, books closed: where is Niry going for Christmas? What are they going to play on the beach? Detective eyes ready?")],
      [fp("Answer from memory."),
       fp("E.A.: Toamasina; volleyball.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the e-mail AGAIN for the details — and play “guess the right person”!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: detailed questions: 1. How is Niry feeling, and why? 2. What are they going to do in the sea? 3. Who prefers fishing? 4. What is the plan on December 24th? 5. Will the dinner be good?")],
      [fp("Read. Answer."),
       fp("E.A.: great, the holidays are coming; swim; her brother; cook a big dinner with the aunt; yes — “it will be delicious!”")],
      "Question-answer", "E-mail"),
    stepRow(["4. Analysis"],
      [fp("Hunt the grammar in the e-mail: find one “going to” plan, one “will” prediction, one feeling, one FOR and one ON!")],
      [fp("Hunt and quote."),
       fp("E.A.: going to visit; it will be delicious; I am feeling great; for Christmas; on December 24th.")],
      "Text detective", "E-mail"),
    stepRow(["5. Synthesis"],
      [fp("So a good reader reads twice: once for the GIST, once for the DETAILS — and the grammar of the unit lives inside the text!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guess the right person! I read sentences, you say WHO: “This person prefers fishing.” “This person is going to cook with Niry.” “This person asks the questions at the end.”")],
      [fp("Guess the person."),
       pAns("E.A.: the brother! the aunt! Niry (to Hanta)!",
        ["the brother!"], { size: SZ.FICHE })],
      "Guessing game", "E-mail"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three details of the e-mail."),
       fp("2. Quote the “will” sentence.")],
      [fp("Answer."),
       pAns("E.A.: Toamasina, swim, volleyball, dinner…; “I think it will be delicious!”",
        ["it will be delicious"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LESSON OF THE DAY — SESSION 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE E-MAIL (2) — DETAILS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DETAILS OF NIRY’S E-MAIL", [
      bullet([run("Feeling: "), run("great — the holidays are coming!", { bold: true, color: C.BLUE })]),
      bullet([run("Plan: "), run("visit the cousins in Toamasina for Christmas; swim; play volleyball", { bold: true, color: C.BLUE })]),
      bullet([run("On December 24th: "), run("cook a big dinner with the aunt", { bold: true, color: C.BLUE })]),
      bullet([run("Prediction: "), run("“I think it will be delicious!”", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GRAMMAR HUNT (all the unit in one e-mail!)", [
      bullet([run("Feeling + continuous: "), run("I am feeling great", { bold: true, color: C.RED })]),
      bullet([run("Plan: "), run("I am going to visit my cousins", { bold: true, color: C.RED })]),
      bullet([run("Prediction: "), run("it will be delicious", { bold: true, color: C.RED })]),
      bullet([run("Time prepositions: "), run("for Christmas — on December 24th", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("PREFERENCES WITH “BUT”", [
      bullet([run("I love swimming, BUT my brother prefers fishing.", { bold: true, color: C.BLUE }), run("  —  two tastes, one sentence!")], { after: 20 }),
    ]),
  ];
}

// ---------- S13 — Writing ----------
function ficheS16() {
  const meta = META("Writing — my plans paragraph",
    "By the end of the lesson, learners will be able to write a short paragraph about their feelings and plans, and share it.",
    "16 / 16", "notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Quote one plan and one prediction from the e-mail."),
       fp("2. What are the parts of an e-mail?")],
      [fp("Answer."),
       fp("E.A.: going to visit / will be delicious; From-To-Subject, hello, body, goodbye.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: underline the right verb: 1. Look at the clouds: it (will / is going to) rain. 2. Tickets bought! We (will / are going to) travel. 3. I think she (will / is going to) be a doctor.")],
      [fp("Underline the right tense."),
       fp("E.A.: will; are going to; will.")],
      "Guided exercise", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE a short paragraph about our plans. By the end of this lesson, your weekend will be on paper — in beautiful English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the four questions that build the paragraph: WHO with? WHAT? WHERE? WHEN? Answer them in your head for YOUR next weekend.")],
      [fp("Answer the four questions.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing (1): write four sentences — one per question: “I am going to play football (what) with my cousins (who) at the field (where) on Saturday afternoon (when).”")],
      [fp("Write the four sentences.")],
      "Guided writing", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("While-writing (2): glue the sentences into ONE paragraph with and/then — add one feeling and one “will” prediction: “I am excited! I think it will be a great day!”")],
      [fp("Write the paragraph.")], "Individual writing", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Post-writing: read your paragraph aloud; the class asks one question. OR: interview your neighbour about his/her feelings today, note them, and share with the class!")],
      [fp("Read aloud / interview and share."),
       pAns("E.A.: coherent paragraph with going to + will + a feeling.",
        ["coherent paragraph"], { size: SZ.FICHE })],
      "Oral presentation", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your paragraph."),
       fp("2. Which tense did you use for the plan? And for the prediction?")],
      [fp("Answer."),
       pAns("E.A.: correct paragraph; be going to; will.",
        ["be going to; will"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LESSON OF THE DAY — SESSION 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY PLANS PARAGRAPH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FOUR BUILDING QUESTIONS", [
      bullet([run("WHAT? ", { bold: true, color: C.RED }), run("I am going to play football…")]),
      bullet([run("WHO with? ", { bold: true, color: C.RED }), run("…with my cousins…")]),
      bullet([run("WHERE? ", { bold: true, color: C.RED }), run("…at the field…")]),
      bullet([run("WHEN? ", { bold: true, color: C.RED }), run("…on Saturday afternoon!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL PARAGRAPH", [
      p([run("Next weekend, I am going to visit my uncle in Itaosy with my little sister. On Saturday morning, I am going to help him in the garden, and then we are going to play games. I feel very excited — I think it will be a great day!", { italic: true })], { after: 40 }),
    ]),
    p("", { after: 60 }),
    box("THE WRITING CHECKLIST", [
      bullet([run("✔ one plan with "), run("be going to", { bold: true, color: C.RED })]),
      bullet([run("✔ one prediction with "), run("will", { bold: true, color: C.RED })]),
      bullet([run("✔ one feeling ("), run("I feel… / I am feeling…", { bold: true, color: C.RED }), run(")")]),
      bullet([run("✔ one time preposition ("), run("for / on", { bold: true, color: C.RED }), run(")")], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 1", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PERSONAL COMMUNICATION"),
    sub("1. The feelings"),
    bullet([run("happy, excited, sad, worried, tired, angry, scared, proud", { bold: true, color: C.BLUE }), run(" — How are you feeling today? → I feel…")], { after: 100 }),
    sub("2. Asking about feelings"),
    bullet([run("You look + adj. — What’s wrong? — What happened? — Are you OK? — What makes you + adj?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The present continuous (temporary facts)"),
    bullet([run("BE + verb-ING: ", { bold: true }), run("You are smiling now! I am feeling great today!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The simple past"),
    bullet([run("was/were — regular + -ed (helped, played) — rebels: won, lost, went, ate, saw, had", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The weekend activities"),
    bullet([run("chores, hobbies, sports and games, transport — weekend, holiday, day off", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The two futures"),
    bullet([run("PLAN → be going to + verb — PREDICTION → will + verb (won’t)", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. Time prepositions and the e-mail"),
    bullet([run("FOR + holiday — ON + day/date", { bold: true, color: C.BLUE }), run(" ; the e-mail skeleton: From/To/Subject, Dear…, body, Your friend…")], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u1_feelings.png", label: "The feelings dialogue", url: AUDIO.feelings },
      { qr: "qr_t8_u1_plans.png", label: "“My weekend plans”", url: AUDIO.plans },
      { qr: "qr_t8_u1_email.png", label: "Niry’s e-mail (reading text)", url: AUDIO.email },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with a feeling: 1. I won the game: I feel … 2. The dog is barking at me: I feel … 3. I helped my mother all day: I feel … 4. We are having a big test: I feel …")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Put in the present continuous: 1. Look! The baby … (sleep). 2. You … (smile) now! 3. We … (have) a test this week. 4. She … (not/cry).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put in the simple past: 1. Yesterday I … (be) tired. 2. She … (help) her mother. 3. We … (win) the match! 4. They … (go) to Toamasina.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Will or be going to? 1. Tickets bought! We … travel on Monday. 2. Look at the clouds: it … rain. 3. I think our team … win. 4. My plan: I … sweep the yard on Saturday.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences about your next weekend: what, who with, where, when (use going to, will, a feeling and for/on).")]),
    p("", { after: 120 }),
    pr([run("Bonus exercise (+2). ", { bold: true }), run("Preferences: 1. Complete: I enjoy (play)… fanorona. 2. Correct: “I’d rather to read.” 3. Answer with because: Would you rather live in the city or in the country?")]),
    p("", { after: 140 }),
    p([run("Total: 20 points (+2 bonus)", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: happy/proud — scared — tired — worried (1 point each).", ["happy/proud"]),
    pAns("Exercise 2: 1. is sleeping  2. are smiling  3. are having  4. is not crying (1 point each).", ["is sleeping"]),
    pAns("Exercise 3: 1. was  2. helped  3. won  4. went (1 point each).", ["was"]),
    pAns("Exercise 4: 1. are going to  2. will  3. will  4. am going to (1 point each).", ["are going to"]),
    pAns("Exercise 5: four correct sentences with the checklist (1 point each).", ["four correct sentences"]),
    pAns("Bonus: 1. playing  2. I’d rather read  3. I’d rather live in…, because… (correct reason).", ["playing"]),
  ];
}

// ---------- S14 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 81", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name six feelings with their emoji."),
    pAns("E.A.: happy 😀, sad 😢, excited 🤩, worried 😟, tired 🥱, proud 😎.", ["happy 😀"]),
    p("2. Your friend looks sad: ask two caring questions."),
    pAns("E.A.: What’s wrong? What happened? Are you OK?", ["What happened?"]),
    p("3. Give the form and one example of the present continuous."),
    pAns("E.A.: be + verb-ing; You are smiling now!", ["be + verb-ing"]),
    p("4. Put in the past: I am happy; she helps; we win; they go."),
    pAns("E.A.: I was happy; she helped; we won; they went.", ["we won"]),
    p("5. Give two chores, two hobbies and two means of transport."),
    pAns("E.A.: sweep, wash the dishes; read, fly a kite; by bus, on foot.", ["by bus, on foot"]),
    p("6. In the plans passage: what are they going to do for Easter?"),
    pAns("E.A.: travel to Antsirabe by taxi-brousse.", ["Antsirabe"]),
    p("7. Will or going to? Explain the difference with one example each."),
    pAns("E.A.: going to = plan (We are going to visit grandma); will = prediction (It will rain).", ["plan"]),
    p("8. Complete: … Christmas; … Sunday; … December 24th."),
    pAns("E.A.: for; on; on.", ["for; on; on"]),
    p("9. Give the parts of an e-mail."),
    pAns("E.A.: From/To/Subject, Dear…, the body, Your friend + name.", ["From/To/Subject"]),
    p("10. Say one plan and one prediction about next weekend."),
    pAns("E.A.: I am going to play football; I think it will be sunny!", ["I am going to"]),
    p("11. Ask your neighbour two personal questions with WH-words."),
    pAns("E.A.: Where do you live? When is your birthday?", ["Where do you live?"]),
    p("12. Complete with a reason: I’d rather (walk) … to school, … the bus is full!"),
    pAns("E.A.: I’d rather walk to school, because the bus is full!", ["because"]),
  ];
}

// ---------- S15 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s18", "SESSION 18 / 81", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: a) Ask your friend one personal question with a WH-word, then answer theirs. b) Your friend looks worried: ask a caring question and react kindly. c) Say one preference: I’d rather…, because…")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. Look! They … (dance). 2. I … (feel) great today. 3. Yesterday she … (be) sick. 4. We … (see) a zebu cart this morning.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Will or be going to? 1. I think it … be hot. 2. We bought the seeds: we … plant them on Saturday. 3. She studies a lot: she … pass! 4. My plan for Sunday: I … visit my aunt.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer on the e-mail of the unit: 1. Where is Niry going for Christmas? 2. Who prefers fishing? 3. What is the plan on December 24th? 4. Quote the prediction.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (4 sentences) about your plans for the next holiday: what, who with, where, when — with one feeling and one prediction.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: correct WH-question (1 pt) + caring question and kind reaction (2 pts) + preference with because (1 pt).", ["caring question"]),
    pAns("Exercise 2: 1. are dancing  2. am feeling / feel  3. was  4. saw (1 point each).", ["are dancing"]),
    pAns("Exercise 3: 1. will  2. are going to  3. will  4. am going to (1 point each).", ["will"]),
    pAns("Exercise 4: Toamasina — the brother — cook a big dinner with the aunt — “I think it will be delicious!” (1 point each).", ["Toamasina"]),
    pAns("Exercise 5: coherent paragraph with the checklist (4 points).", ["coherent paragraph"]),
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
    ...iCan("UNIT 1", COLOR, [
      "I can socialize and ask personal questions with the WH-words.",
      "I can say my likes and dislikes with the gerund: I love swimming!",
      "I can state a preference and justify it: I’d rather…, because…",
      "I can name the feelings and say how I feel.",
      "I can ask caring questions: What’s wrong? What happened?",
      "I can use the present continuous: You are smiling now!",
      "I can use the simple past: I won the game yesterday!",
      "I can talk about chores, hobbies, sports and transport.",
      "I can make plans with “be going to”.",
      "I can make predictions with “will”.",
      "I can read an e-mail and write a plans paragraph.",
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
