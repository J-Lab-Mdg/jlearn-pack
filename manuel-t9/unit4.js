// T9 — UNIT 4 — FOOD (10 séances + révision + test) — Sessions 29 à 40 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet
const SHADE = "E8DAEF";
const TOTAL = 86;
const AUDIO = {
  diet: "https://drive.google.com/uc?export=download&id=1SYES7wzEL1J_Wun48Jbkp52C9ah5Y1RV",
  junk: "https://drive.google.com/uc?export=download&id=1EX2MGU7QlEoXVpA2CR8iWGAsWssVNyPs",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — FOOD", title, slo,
  values: "healthy eating, responsibility", session, materials,
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
function dietDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE BALANCED DIET DIALOGUE (listening passage)", [
    L("Koto", "Soa, I am so hungry! Today I ate two portions of French fries, a hamburger and a lot of sweets!"),
    L("Soa", "Oh, Koto! That is junk food! What did you have for breakfast?"),
    L("Koto", "Just a cup of sweet tea and a slice of bread."),
    L("Soa", "Listen. For a balanced diet, you need the four food groups. This morning, I had a bowl of rice, a glass of milk and a ripe banana."),
    L("Koto", "And for lunch?"),
    L("Soa", "A plate of rice with a piece of chicken, a portion of fresh vegetables and a little salt. And I drank a lot of water!"),
    L("Koto", "Hmm… and no sweets at all?"),
    L("Soa", "Just a small piece of dark chocolate! You can eat everything, Koto — but not too much sugar, and not too much fat."),
    L("Koto", "You are right, Soa. Tomorrow, I am going to eat like you!"),
  ]);
}
function junkListBox() {
  const L = (n, t) => pr([run(n + ". ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("JUNK FOOD — TRUE OR FALSE? (listening sentences)", [
    L("1", "Junk food is cheap and convenient."),
    L("2", "Junk food is easier to prepare than healthy food."),
    L("3", "Junk food is low in nutritional value."),
    L("4", "Junk food is high in salt, sugar and fat."),
    L("5", "Junk food is bad for us, but hard to resist."),
    L("6", "Junk food is not a reason for heart disease and obesity in today’s world."),
    L("7", "Older people eat the most junk food."),
    L("8", "Few people know the truth about junk food."),
    L("9", "No one should ever eat junk food."),
  ]);
}
function nutritionTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("“NUTRITION FOR CHILDREN” (reading text)", [
    L("To have a balanced diet, we should eat food from every group, every day — but we should not eat the same foods every day! We should also choose foods according to the season: fruits and vegetables are cheaper, fresher and richer when it is their season."),
    L("Energy-giving foods — rice, bread, cassava, oil — give us energy for physical activity: walking, working, playing sport. Body-building foods — meat, fish, eggs, beans, milk — are used in the repair of body tissues: they build our muscles and help wounds to heal."),
    L("Protective foods — fruits and vegetables — are full of micronutrients: vitamins and minerals that protect the body from illnesses. Animal meat has two roles: it builds the body, and it gives iron for strong blood. And do not forget water — our body needs it every day!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — FOOD", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("You are what you eat!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_foodgroups.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the four food groups: energy-giving, body-building, protective food and water;"),
    p("• describe food: fresh, raw, ripe, canned, dried;"),
    p("• use the quantifiers: a bowl of rice, a slice of bread, too much sugar;"),
    p("• compose a balanced meal and talk about junk food;"),
    p("• recommend with should + comparatives: You should eat more vegetables!;"),
    p("• read a text about nutrition and write an advice letter;"),
    p("• discover American food idioms — and check famous food myths!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("healthy eating, responsibility.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Every day, three times a day, you choose what goes into your body. In this unit, you learn to choose like a champion — and to help your family eat better too!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u4_diet.png", label: "The balanced diet dialogue — listen and repeat", url: AUDIO.diet },
      { qr: "qr_t9_u4_junkfood.png", label: "Junk food: true or false? — listen and decide", url: AUDIO.junk },
    ], COLOR),
  ];
}

// ---------- S29 — Food groups ----------
function ficheS29() {
  const meta = META("The four food groups",
    "By the end of the lesson, learners will be able to categorize foods according to the four food groups.",
    "1 / 10", "food pictures, the plate diagram");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What did you use to eat when you were small?"),
       fp("2. Echo: “I’m used to eating rice every day.”")],
      [fp("Answer."),
       fp("E.A.: I used to drink a lot of milk!; So am I!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at the big picture: how many different foods can you name in one minute? Go!")],
      [fp("Name foods."),
       fp("E.A.: rice, chicken, banana, beans, milk, cassava…")],
      "Using visual aids", "Food picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The four food groups ». By the end of this lesson, you will know the job of every food on your plate!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The four teams: ENERGY-GIVING food (rice, bread, cassava, oil) — the fuel! BODY-BUILDING food (meat, fish, eggs, beans, milk) — the bricks! PROTECTIVE food (fruits, vegetables) — the shield! And WATER — the river of the body!")],
      [fp("Listen. Repeat the groups.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Matching game! I show a food picture, you shout its team: sweet potato? mango? zebu meat? peanuts? watermelon?")],
      [fp("Match."),
       fp("E.A.: sweet potato → energy; mango → protective; zebu → body-building…")],
      "Using game", "Food pictures"),
    stepRow(["5. Synthesis"],
      [fp("So: four groups, four jobs — energy, building, protection, water. A balanced diet = all the groups on the plate!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs, list two MORE foods for each group — foods of your town market!")],
      [fp("List. Share."),
       pAns("E.A.: energy: maize, taro; building: tilapia, duck eggs; protective: papaya, brèdes!",
        ["maize, taro"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the four food groups and their jobs."),
       fp("2. Classify: rice, fish, orange, water.")],
      [fp("Answer."),
       pAns("E.A.: energy-giving (fuel), body-building (bricks), protective (shield), water; rice → energy, fish → building, orange → protective.",
        ["rice → energy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LESSON OF THE DAY — SESSION 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOUR FOOD GROUPS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_foodgroups.png", 400, 768 / 1376),
    p([run("The four teams on my plate:", { bold: true })], { after: 50 }),
    bullet([...kw("energy-giving food", "èneurdji guivinng foude"), run("  —  the FUEL ⛽: rice, bread, cassava, sweet potato, oil.")]),
    bullet([...kw("body-building food", "bodi bildinng foude"), run("  —  the BRICKS 🧱: meat, fish, eggs, beans, milk.")]),
    bullet([...kw("protective food", "preutèktive foude"), run("  —  the SHIELD 🛡: fruits and vegetables.")]),
    bullet([...kw("water", "ouôteur"), run("  —  the RIVER 💧 of the body: drink it every day!")]),
    p("", { after: 60 }),
    box("THE GOLDEN RULE", [
      bullet([run("A balanced diet", { bold: true, color: C.BLUE }), run(" = all the four groups on the plate, every day!")]),
      bullet([run("Junk food", { bold: true, color: C.BLUE }), run(" = a lot of sugar, salt and fat — but almost no good things.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Foods of our market:", { bold: true })], { after: 50 }),
    bullet([run("Energy: maize, taro.   Building: tilapia, peanuts, duck eggs.   Protective: papaya, mango, green leafy vegetables.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S30 — Food adjectives + guessing game ----------
function ficheS30() {
  const meta = META("Describing food — fresh, raw, ripe, canned",
    "By the end of the lesson, learners will be able to describe food with adjectives and play a guessing game about food.",
    "2 / 10", "food cards, tape");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the four food groups."),
       fp("2. Which group do beans belong to?")],
      [fp("Answer."),
       fp("E.A.: energy, building, protective, water; body-building.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Two bananas on the table: one green, one yellow. What is different? Which one can you eat now?")],
      [fp("Observe. Answer."),
       fp("E.A.: the yellow one — it is ready!")],
      "Using visual aids", "Two bananas (or pictures)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Describing food ». By the end of this lesson, you will shop at the market like a chef!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The diagram on the board: FRESH (just picked!), RAW (not cooked), RIPE (ready to eat), CANNED (in a metal box), DRIED (without water). Match each adjective with a food: fresh fish, raw carrots, ripe mango, canned sardines, dried fish!")],
      [fp("Match. Repeat.")],
      "Using visual aids", "Diagram"),
    stepRow(["4. Analysis"],
      [fp("Build noun phrases: adjective + food. A ripe banana. Fresh vegetables. Raw meat — careful, we must cook it! Which foods of the market are dried? Canned?")],
      [fp("Build phrases."),
       fp("E.A.: dried fish, canned milk, fresh brèdes…")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: fresh, raw, ripe, canned, dried — the adjective goes BEFORE the food. And the question of the market: Is it fresh?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game! I stick a food card on your back. Ask the class yes/no questions to guess it: “Is it yellow?” “Is it a protective food?” “Is it ripe?”")],
      [fp("Ask. Guess."),
       pAns("E.A.: Is it a fruit? — Yes! Is it yellow? — Yes! Is it a ripe banana? — YES!",
        ["Is it a fruit?"], { size: SZ.FICHE })],
      "Using guessing game", "Food cards, tape"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five food adjectives with one example each."),
       fp("2. What is the difference between raw and ripe?")],
      [fp("Answer."),
       pAns("E.A.: fresh fish, raw carrots, ripe mango, canned sardines, dried fish; raw = not cooked, ripe = ready to eat.",
        ["raw = not cooked"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LESSON OF THE DAY — SESSION 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DESCRIBING FOOD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The food adjectives:", { bold: true })], { after: 50 }),
    vocab("fresh", "frèche", "just picked, just caught — full of life!"),
    vocab("raw", "rô", "not cooked"),
    vocab("ripe", "raïpe", "ready to eat (the yellow banana!)"),
    vocab("canned", "kannde", "kept in a metal box"),
    vocab("dried", "draïde", "without water (dried fish!)"),
    p("", { after: 60 }),
    box("THE MARKET TALK", [
      bullet([run("The adjective goes BEFORE the food:", { bold: true }), run("  a ripe mango, fresh vegetables, canned sardines.", { bold: true, color: C.BLUE })]),
      bullet([run("The questions: ", { bold: true }), run("Is it fresh? Is it ripe yet?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The guessing game questions:", { bold: true })], { after: 50 }),
    bullet([run("Is it yellow?  Is it a fruit?  Is it a protective food?  Do we eat it raw?", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("RESPONSIBILITY CORNER", [
      p("Raw meat and raw eggs can be dangerous: always cook them well. Wash the fruits, wash your hands — your health is in YOUR hands!", { after: 40 }),
    ]),
  ];
}

// ---------- S31 — Listening: balanced diet + quantifiers ----------
function ficheS31() {
  const meta = META("Listening: the balanced diet dialogue — quantifiers",
    "By the end of the lesson, learners will be able to comprehend a dialogue about balanced diet and use quantifiers for portion sizes.",
    "3 / 10", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three food adjectives."),
       fp("2. Is a green banana ripe?")],
      [fp("Answer."),
       fp("E.A.: fresh, raw, canned; no, not yet!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("What did YOU eat this morning? Tell your neighbour in one sentence.")],
      [fp("Tell.")], "Pair work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Koto and Soa talk about food ». Who eats better? And how do we MEASURE food in English? Let’s listen!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. What did Koto eat today? 2. What did Soa have for breakfast? 3. What is Koto going to do tomorrow?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. two portions of French fries, a hamburger and a lot of sweets. 2. a bowl of rice, a glass of milk and a ripe banana. 3. eat like Soa!",
        ["a bowl of rice"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Hunt the quantifiers in the dialogue: a bowl of…, a glass of…, a slice of…, a piece of…, a portion of…, a cup of…, a little…, a lot of…, too much… Which words measure the food?")],
      [fp("Find the quantifiers."),
       fp("E.A.: a bowl of rice, a slice of bread, too much sugar…")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: container + OF + food (a bowl of rice, a glass of milk); piece words (a slice of bread, a piece of chicken); quantity words (a little salt, a lot of water, too much sugar = more than good!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Compose a balanced meal with the food pictures — and present it with quantifiers: “My meal: a plate of rice, a piece of fish…” All four groups!")],
      [fp("Compose. Present."),
       pAns("E.A.: A plate of rice, a piece of chicken, a portion of fresh brèdes and a glass of water!",
        ["a portion of fresh"], { size: SZ.FICHE })],
      "Pair work", "Food pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: a … of milk; a … of bread; too … sugar."),
       fp("2. What did Soa drink a lot of?")],
      [fp("Answer."),
       pAns("E.A.: glass; slice; much; water.",
        ["glass; slice; much"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LESSON OF THE DAY — SESSION 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE QUANTIFIERS — HOW MUCH FOOD?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    dietDialogueBox(),
    p("", { after: 60 }),
    box("THE MEASURING WORDS", [
      bullet([run("Containers + OF:", { bold: true }), run("  a bowl of rice, a glass of milk, a cup of tea, a plate of rice.", { bold: true, color: C.BLUE })]),
      bullet([run("Pieces + OF:", { bold: true }), run("  a slice of bread, a piece of chicken, a portion of vegetables.", { bold: true, color: C.BLUE })]),
      bullet([run("Quantities:", { bold: true }), run("  a little salt, a lot of water, too much sugar (= more than good!).", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("For breakfast, I have "), run("a bowl of", { bold: true, color: C.BLUE }), run(" rice soup and "), run("a cup of", { bold: true, color: C.BLUE }), run(" tea.")]),
    bullet([run("Don’t put "), run("too much", { bold: true, color: C.BLUE }), run(" salt — just "), run("a little", { bold: true, color: C.BLUE }), run("!")]),
    bullet([run("Our body needs "), run("a lot of", { bold: true, color: C.BLUE }), run(" water every day.")]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u4_diet.png", label: "The balanced diet dialogue — listen and repeat", url: AUDIO.diet }], COLOR),
  ];
}

// ---------- S32 — Listening: junk food T/F ----------
function ficheS32() {
  const meta = META("Listening: junk food — true or false?",
    "By the end of the lesson, learners will be able to listen to a series of sentences about junk food and note whether they are true or false.",
    "4 / 10", "audio (QR code) or sentences read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three quantifiers with an example."),
       fp("2. Compose a balanced breakfast.")],
      [fp("Answer."),
       fp("E.A.: a bowl of rice, a slice of bread, a glass of milk!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Brainstorm in groups and report: what do these words mean? cheap — convenient — hard to resist — nutritional value — to be high in — heart disease — obesity.")],
      [fp("Brainstorm. Report."),
       fp("E.A.: cheap = not expensive; obesity = being much too heavy…")],
      "Group work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to play the TRUE or FALSE game about junk food. Listen well — some sentences are traps!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen to the nine sentences. For each one, write T or F on your slate. Ready? (Sentences 1 to 9 of the audio.)")],
      [fp("Listen. Note T or F.")],
      "Individual work", "Audio / QR, slates"),
    stepRow(["4. Analysis"],
      [fp("Check together: 1.T 2.T 3.T 4.T 5.T — and now the traps: 6. FALSE! Junk food IS a reason for heart disease and obesity. 7. FALSE! YOUNG people eat the most junk food. 8. FALSE! MANY people know the truth. 9. FALSE! A little junk food sometimes is OK — too much is the problem!")],
      [fp("Check. Correct the false ones."),
       pAns("E.A.: 6.F — it IS a reason for heart disease; 7.F — young people eat the most.",
        ["young people eat the most"], { size: SZ.FICHE })],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the junk food truth: cheap and convenient, hard to resist — but low in nutritional value and high in salt, sugar and fat. Too much junk food → heart disease and obesity.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("In pairs: one says a sentence about junk food (true or false!), the other answers “True!” or “False, because…”.")],
      [fp("Play in pairs."),
       pAns("E.A.: Junk food is good for the heart. — False, because it is high in fat!",
        ["False, because"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is junk food high in? Low in?"),
       fp("2. True or false: only old people eat junk food.")],
      [fp("Answer."),
       pAns("E.A.: high in salt, sugar and fat; low in nutritional value; false!",
        ["high in salt, sugar and fat"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}
function lessonS32() {
  return [
    p([run("LESSON OF THE DAY — SESSION 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE TRUTH ABOUT JUNK FOOD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_junkfood.png", 400, 768 / 1376),
    junkListBox(),
    p("", { after: 60 }),
    p([run("New words:", { bold: true })], { after: 50 }),
    vocab("cheap", "tchipe", "not expensive"),
    vocab("convenient", "keunvinieunnte", "easy and fast"),
    vocab("hard to resist", "hârde tou rizist", "difficult to say no!"),
    vocab("nutritional value", "nioutricheuneul valiou", "the good things inside a food"),
    vocab("to be high in / low in", "tou bi haï inn / lôou inn", "to have a lot of / little of"),
    vocab("heart disease", "hârte diziz", "a sickness of the heart"),
    vocab("obesity", "ôoubisiti", "being much too heavy"),
    p("", { after: 60 }),
    box("THE ANSWERS OF THE GAME", [
      bullet([run("1-5: TRUE.", { bold: true, color: C.BLUE }), run("  6: FALSE (it IS a reason for heart disease and obesity).")]),
      bullet([run("7: FALSE (young people eat the most). 8: FALSE (many people know the truth). 9: FALSE (a little, sometimes, is OK — too much is the problem).", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u4_junkfood.png", label: "Junk food: true or false? — listen and decide", url: AUDIO.junk }], COLOR),
  ];
}

// ---------- S33 — Recommendations: should + frequency adverbs ----------
function ficheS33() {
  const meta = META("Recommending a balanced diet — should + frequency adverbs",
    "By the end of the lesson, learners will be able to give food recommendations with “should” and the frequency adverbs.",
    "5 / 10", "----");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is junk food high in?"),
       fp("2. Why is junk food hard to resist?")],
      [fp("Answer."),
       fp("E.A.: salt, sugar and fat; because it tastes good and it is convenient!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Tell your neighbour everything you ate yesterday: breakfast, lunch, snacks, dinner. Be honest!")],
      [fp("Tell in pairs.")], "Pair work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Food recommendations ». By the end of this lesson, you will be the food doctor of your family!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the doctor’s sentences: You eat too much junk food. You SHOULD eat more vegetables. You SHOULDN’T drink soda every day. How often? ALWAYS drink water — SOMETIMES eat sweets — NEVER skip breakfast!")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Two machines: SHOULD/SHOULDN’T + verb (the advice) and the frequency adverbs: always, usually, often, sometimes, rarely, never — they go BEFORE the verb: I always eat fruit!")],
      [fp("Build sentences."),
       fp("E.A.: You should always wash the fruits. I never skip breakfast.")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: problem (too much… / not enough…) → advice (should/shouldn’t) → frequency (always… never). The consequence word: SO — I eat too many sweets, SO I should stop!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Compare your meals of yesterday in pairs — then give each other recommendations: “You ate…, so you should…”!")],
      [fp("Compare. Recommend."),
       pAns("E.A.: You ate rice and sweets only, so you should eat more protective food — and you should sometimes eat fish!",
        ["you should eat more protective food"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one “should” and one “shouldn’t” recommendation."),
       fp("2. Put the adverb: I … eat breakfast (always).")],
      [fp("Answer."),
       pAns("E.A.: You should drink a lot of water; you shouldn’t eat too much fat; I always eat breakfast.",
        ["I always eat breakfast."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}
function lessonS33() {
  return [
    p([run("LESSON OF THE DAY — SESSION 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOOD DOCTOR — SHOULD + FREQUENCY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DOCTOR’S MACHINE", [
      bullet([run("The problem:", { bold: true }), run("  You eat too much junk food. You don’t drink enough water.", { bold: true, color: C.BLUE })]),
      bullet([run("The advice:", { bold: true }), run("  You should eat more vegetables. You shouldn’t drink soda every day.", { bold: true, color: C.BLUE })]),
      bullet([run("The consequence:", { bold: true }), run("  I eat too many sweets, so I should stop!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The frequency ladder (before the verb!):", { bold: true })], { after: 50 }),
    bullet([run("always", { bold: true, color: C.BLUE }), run(" (100%) → "), run("usually → often → sometimes → rarely → never", { bold: true, color: C.BLUE }), run(" (0%)")]),
    bullet([run("I "), run("always", { bold: true, color: C.BLUE }), run(" wash my hands before eating.")]),
    bullet([run("I "), run("sometimes", { bold: true, color: C.BLUE }), run(" eat sweets — but I "), run("never", { bold: true, color: C.BLUE }), run(" skip breakfast!")]),
    p("", { after: 60 }),
    p([run("My recommendations:", { bold: true })], { after: 50 }),
    bullet([run("You should always drink a lot of water.", { bold: true, color: C.BLUE })]),
    bullet([run("You should eat fruit every day, whereas sweets — only sometimes!", { bold: true, color: C.BLUE })]),
    bullet([run("You shouldn’t eat too much salt, so put just a little.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S34 — Comparatives / superlatives ----------
function ficheS34() {
  const meta = META("Comparing foods — healthier, the best!",
    "By the end of the lesson, learners will be able to compare foods with comparatives and superlatives.",
    "6 / 10", "food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one recommendation with “should”."),
       fp("2. Put the frequency adverb: She … drinks soda (never).")],
      [fp("Answer."),
       fp("E.A.: You should eat more fruit; She never drinks soda.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick battle: mango or pineapple — which is sweeter? Rice or bread — which is cheaper? Vote!")],
      [fp("Vote. Argue.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Comparing foods ». By the end of this lesson, you will compare like a market champion!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Fruit is HEALTHIER THAN candy. Junk food is EASIER to prepare THAN healthy food. Home food is MORE DELICIOUS THAN fast food. Water is THE BEST drink! What happens to the adjectives?")],
      [fp("Observe. Answer."),
       fp("E.A.: short → -er than; long → more … than; the best = superlative!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machines: short adjective + -ER + than (cheaper, sweeter, fresher); long adjective → MORE + adj + than (more delicious, more convenient); superlatives: THE -EST / THE MOST…; the rebels: good → better → the best; bad → worse → the worst!")],
      [fp("Build comparisons."),
       fp("E.A.: Brèdes are cheaper than meat. Soda is worse than water!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: -er than / more … than; the …-est / the most …; better-the best, worse-the worst. And the contrast words to join ideas: but, whereas, however — and SO for the consequence.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Market battle in pairs: compare two foods with three sentences (price, taste, health) and crown a winner: “… is the best!”")],
      [fp("Compare. Crown."),
       pAns("E.A.: Mango is sweeter than papaya, but papaya is cheaper. Both are healthy — however, for me, mango is the best!",
        ["Mango is sweeter than papaya"], { size: SZ.FICHE })],
      "Pair work", "Food pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Compare: water / soda (healthy)."),
       fp("2. Give the comparative and superlative of “good” and “bad”.")],
      [fp("Answer."),
       pAns("E.A.: Water is healthier than soda; better - the best, worse - the worst.",
        ["Water is healthier than soda"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}
function lessonS34() {
  return [
    p([run("LESSON OF THE DAY — SESSION 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMPARING FOODS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE COMPARING MACHINES", [
      bullet([run("Short adjectives: ", { bold: true }), run("-ER + than", { bold: true, color: C.BLUE }), run("  →  cheaper than, sweeter than, fresher than.")]),
      bullet([run("Long adjectives: ", { bold: true }), run("MORE + adjective + than", { bold: true, color: C.BLUE }), run("  →  more delicious than, more convenient than.")]),
      bullet([run("Superlatives: ", { bold: true }), run("THE + -EST / THE MOST + adjective", { bold: true, color: C.BLUE }), run("  →  the cheapest, the most delicious.")]),
      bullet([run("The rebels: ", { bold: true }), run("good → better → the best;  bad → worse → the worst!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("Fruit is "), run("healthier than", { bold: true, color: C.BLUE }), run(" candy.")]),
    bullet([run("Junk food is "), run("easier", { bold: true, color: C.BLUE }), run(" to prepare "), run("than", { bold: true, color: C.BLUE }), run(" healthy food — "), run("however", { bold: true }), run(", it is "), run("worse", { bold: true, color: C.BLUE }), run(" for the body!")]),
    bullet([run("Water is "), run("the best", { bold: true, color: C.BLUE }), run(" drink in the world.")]),
    bullet([run("Home rice is "), run("more delicious than", { bold: true, color: C.BLUE }), run(" any hamburger!")]),
  ];
}

// ---------- S35 — Reading: Nutrition for children ----------
function ficheS35() {
  const meta = META("Reading: Nutrition for children",
    "By the end of the lesson, learners will be able to skim and scan a text about balanced food and answer questions about it.",
    "7 / 10", "the text, food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Compare fruit and candy (healthy)."),
       fp("2. Superlative of “good”?")],
      [fp("Answer."),
       fp("E.A.: Fruit is healthier than candy; the best.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Name the foods on the pictures and tell their group: cassava? eggs? papaya? oil?")],
      [fp("Name. Classify."),
       fp("E.A.: cassava → energy; eggs → body-building…")],
      "Using visual aids", "Food pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « Nutrition for children ». First skim for the big ideas, then scan for the details — like real readers!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (skimming)"],
      [fp("Skim the text (2 minutes): find ONE example of food that produces energy, ONE that builds the body, ONE that protects from illnesses.")],
      [fp("Skim. Find."),
       fp("E.A.: rice → energy; meat/eggs → building; fruits → protection.")],
      "Skimming and scanning", "The text"),
    stepRow(["4. Analysis (scanning)"],
      [fp("Scan and answer: 1. Should we eat the same foods every day? 2. What does it mean to choose foods according to the season? 3. Name foods used in the repair of body tissues. 4. What is the role of micronutrients? 5. The two roles of animal meat?")],
      [fp("Scan. Answer."),
       pAns("E.A.: 1. No! 2. eat fruits/vegetables when they are in season — cheaper and fresher. 3. meat, fish, eggs, beans, milk. 4. vitamins and minerals protect from illnesses. 5. builds the body + gives iron for the blood.",
        ["cheaper and fresher"], { size: SZ.FICHE })],
      "Individual work", "The text"),
    stepRow(["5. Synthesis"],
      [fp("So the text confirms our four groups — and adds two secrets: variety (not the same foods every day) and season (fresher and cheaper!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Share with your group, orally then in writing: which food category do YOU eat the most? What should you eat more?")],
      [fp("Share. Write one sentence."),
       pAns("E.A.: I eat energy food the most; I should eat more protective food!",
        ["I should eat more protective food!"], { size: SZ.FICHE })],
      "Group work", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Why choose foods according to the season?"),
       fp("2. Which foods give us energy for physical activity?")],
      [fp("Answer."),
       pAns("E.A.: they are cheaper, fresher and richer; rice, bread, cassava, oil.",
        ["cheaper, fresher"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}
function lessonS35() {
  return [
    p([run("LESSON OF THE DAY — SESSION 35", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: NUTRITION FOR CHILDREN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    nutritionTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("according to the season", "ekôrdinng tou dhe sizeun", "when it is the right time of the year"),
    vocab("the repair of body tissues", "dhe ripèr ov bodi tichouze", "fixing the body — muscles, skin…"),
    vocab("micronutrients", "maïkrô-nioutrieunnts", "vitamins and minerals — small but mighty!"),
    vocab("iron", "aïeurn", "the metal of strong blood"),
    p("", { after: 60 }),
    box("THE TWO SECRETS OF THE TEXT", [
      bullet([run("Variety:", { bold: true }), run("  do not eat the same foods every day — change the colours on your plate!", { bold: true, color: C.BLUE })]),
      bullet([run("Season:", { bold: true }), run("  foods in season are cheaper, fresher and richer. Mango season? Eat mangoes!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S36 — Compose balanced meals (speaking) ----------
function ficheS36() {
  const meta = META("My balanced menu of the day",
    "By the end of the lesson, learners will be able to compose balanced meals and present them orally with quantifiers and food groups.",
    "8 / 10", "food pictures or cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The two secrets of the nutrition text?"),
       fp("2. Name one food rich in iron.")],
      [fp("Answer."),
       fp("E.A.: variety and season; animal meat.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Chef’s quiz: I say a meal, you check it! “Rice + cassava + bread” — balanced or not?")],
      [fp("Check."),
       fp("E.A.: Not balanced — only energy food!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today YOU are the chef: you are going to compose the full menu of one day — breakfast, lunch, snack, dinner — balanced from morning to night!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The chef’s checklist on the board: all four groups each day ✓ quantifiers ✓ one seasonal fruit ✓ not too much sugar, salt, fat ✓ a lot of water ✓.")],
      [fp("Read the checklist.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("In pairs, compose your menu with the food cards. Check each meal with the checklist: where is the protective food? The water?")],
      [fp("Compose. Check.")],
      "Pair work", "Food cards"),
    stepRow(["5. Synthesis"],
      [fp("Prepare the presentation: “For breakfast, we have a bowl of… For lunch… ” — with one comparison (…is healthier than…) and one frequency adverb!")],
      [fp("Prepare.")], "Pair work", "----"),
    stepRow(["6. Practice"],
      [fp("Present your menu to the class! The class checks with the checklist and asks one question.")],
      [fp("Present. Answer questions."),
       pAns("E.A.: For breakfast: a bowl of rice soup and a ripe banana. For lunch: rice, a piece of fish, fresh brèdes. We always drink a lot of water — water is better than soda!",
        ["water is better than soda!"], { size: SZ.FICHE })],
      "Group work", "Food cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give a balanced dinner with quantifiers."),
       fp("2. Why is your menu balanced?")],
      [fp("Answer."),
       pAns("E.A.: a plate of rice, a piece of chicken, a portion of vegetables, a glass of water; because it has the four food groups!",
        ["the four food groups"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY BALANCED MENU OF THE DAY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE CHEF’S CHECKLIST", [
      bullet([run("All four food groups in the day ✓", { bold: true, color: C.BLUE })]),
      bullet([run("Quantifiers: a bowl of, a piece of, a portion of ✓", { bold: true, color: C.BLUE })]),
      bullet([run("One seasonal fruit ✓   Not too much sugar, salt, fat ✓   A lot of water ✓", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model menu:", { bold: true })], { after: 50 }),
    bullet([run("Breakfast: ", { bold: true }), run("a bowl of rice soup, a glass of milk, a ripe banana.", { bold: true, color: C.BLUE })]),
    bullet([run("Lunch: ", { bold: true }), run("a plate of rice, a piece of chicken, a portion of fresh brèdes.", { bold: true, color: C.BLUE })]),
    bullet([run("Snack: ", { bold: true }), run("a slice of papaya — sweeter than candy, and healthier!", { bold: true, color: C.BLUE })]),
    bullet([run("Dinner: ", { bold: true }), run("a bowl of vegetable soup with a little salt, and a lot of water all day.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("RESPONSIBILITY CORNER", [
      p("At home, show your menu to your family. A T9 student can teach balanced diet to the whole house!", { after: 40 }),
    ]),
  ];
}

// ---------- S37 — Writing: advice letter ----------
function ficheS37() {
  const meta = META("Writing: the advice letter",
    "By the end of the lesson, learners will be able to write an advice letter about balanced food, using linking words.",
    "9 / 10", "interview grid, exercise books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give your balanced breakfast."),
       fp("2. One recommendation with “should”.")],
      [fp("Answer."),
       fp("E.A.: a bowl of rice soup and a banana; you should drink more water.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Interview your neighbour with the grid: How often do you eat vegetables? Sweets? Fish? How much water do you drink? Note the answers!")],
      [fp("Interview. Complete the grid.")],
      "Pair work", "Interview grid"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write an ADVICE LETTER: your friend eats badly, and your letter is going to save his plate!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Find the issues in the grid: too much sugar? never any fruit? not enough water? Write them as sentences: “You rarely eat vegetables.”")],
      [fp("Find the issues. Write them."),
       fp("E.A.: You eat sweets every day. You never eat fruit!")],
      "Individual work", "The grid"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Turn each issue into a recommendation with a linking word: “You eat too many sweets, SO you should eat fruit instead. Fruit is sweeter — HOWEVER, it also protects you!”")],
      [fp("Write issue + advice sentences.")],
      "Individual work", "Exercise books"),
    stepRow(["5. Synthesis (while-writing)"],
      [fp("Build the letter: Dear + name → one kind sentence → the issues → the recommendations → one encouragement → Your friend + name. Check grammar and cohesion in pairs!")],
      [fp("Write the letter. Check in pairs.")],
      "Pair work", "Exercise books"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Read each other’s letters in groups; choose one or two letters to read aloud, and express your viewpoints: is the advice good?")],
      [fp("Read. Discuss."),
       pAns("E.A.: Dear Koto, I like your energy! But you eat too much junk food, so you should… (the class discusses!)",
        ["you eat too much junk food"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the parts of the advice letter."),
       fp("2. Write one issue + advice with “so”.")],
      [fp("Answer."),
       pAns("E.A.: Dear…, kind sentence, issues, recommendations, encouragement, Your friend; You never eat fruit, so you should start today!",
        ["so you should start today!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: THE ADVICE LETTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE LETTER PLAN", [
      bullet([run("Dear + name,", { bold: true, color: C.BLUE }), run("  then one kind sentence: I hope you are well!")]),
      bullet([run("The issues:", { bold: true, color: C.BLUE }), run("  You eat too much…, you never eat…")]),
      bullet([run("The recommendations:", { bold: true, color: C.BLUE }), run("  so you should…; you shouldn’t…")]),
      bullet([run("The encouragement + closing:", { bold: true, color: C.BLUE }), run("  You can do it! Your friend, + name.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model letter:", { bold: true })], { after: 50 }),
    bullet([run("Dear Koto,", { bold: true, color: C.BLUE })]),
    bullet([run("I hope you are well! I noticed something about your meals. You eat sweets every day, and you rarely eat vegetables. Sweets are delicious; however, they are high in sugar, so you should eat a ripe banana instead. You should also drink more water — water is the best drink! Don’t worry: a small change every day is enough. You can do it!", { bold: true, color: C.BLUE })]),
    bullet([run("Your friend, Soa", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("The linking words of the letter:", { bold: true })], { after: 50 }),
    bullet([run("so", { bold: true, color: C.BLUE }), run(" (consequence) — "), run("but, however, whereas", { bold: true, color: C.BLUE }), run(" (contrast) — "), run("also", { bold: true, color: C.BLUE }), run(" (addition).")]),
  ];
}

// ---------- S38 — Culture: idioms + myths ----------
function ficheS38() {
  const meta = META("Food idioms and food myths",
    "By the end of the lesson, learners will be able to state American food idioms, find Malagasy equivalents and discuss food myths.",
    "10 / 10", "idiom cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the parts of the advice letter."),
       fp("2. One advice with “however”.")],
      [fp("Answer."),
       fp("E.A.: Dear, issues, recommendations, closing; Sweets are good; however, fruit is better!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Riddle: in English, a person can BRING HOME THE BACON without any bacon in the bag! How is it possible?")],
      [fp("Guess!")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to taste the FOOD IDIOMS — expressions where food means something else — and check some famous FOOD MYTHS!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Read the sentences and tick the meaning: “My little sister is THE APPLE OF MY EYE.” “He’s AS AMERICAN AS APPLE PIE.” “ONE ROTTEN APPLE SPOILS THE WHOLE BARREL.” “My mother BRINGS HOME THE BACON.” “Stop BUTTERING ME UP!”")],
      [fp("Read. Tick the meanings."),
       pAns("E.A.: apple of my eye = I cherish her; bring home the bacon = earn the money for the family; butter up = compliment too much to get something.",
        ["I cherish her"], { size: SZ.FICHE })],
      "Group work", "Idiom cards"),
    stepRow(["4. Analysis"],
      [fp("Brainstorm in pairs: do we have Malagasy expressions with food that mean something else? Share them with the class — and translate the idea in easy English!")],
      [fp("Brainstorm. Share."),
       fp("E.A.: (students share local sayings about rice, zebu, honey…)")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: an idiom is a picture made of words — do not translate word by word! The five American stars: apple of my eye, as American as apple pie, one rotten apple…, bring home the bacon / earn a crust, butter someone up.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Food myths — true or false? 1. If you eat fruit seeds, they will grow in your stomach. 2. Honey is the only food that never goes bad. 3. Eating walnuts makes you smart because they look like brains. 4. Eating the meat of strong animals makes you strong like them.")],
      [fp("Discuss. Decide."),
       pAns("E.A.: 1. False — a myth! 2. True! 3. False — walnuts are healthy, but the shape means nothing! 4. False — a myth!",
        ["2. True!"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What does “to bring home the bacon” mean?"),
       fp("2. Give one food myth and say why it is false.")],
      [fp("Answer."),
       pAns("E.A.: to earn the money that is needed to live; seeds do not grow in the stomach — no sun, no soil!",
        ["to earn the money"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("FOOD IDIOMS AND FOOD MYTHS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FIVE AMERICAN FOOD IDIOMS", [
      bullet([run("the apple of my eye", { bold: true, color: C.BLUE }), run("  —  someone I cherish very much.")]),
      bullet([run("as American as apple pie", { bold: true, color: C.BLUE }), run("  —  typically American.")]),
      bullet([run("one rotten apple spoils the whole barrel", { bold: true, color: C.BLUE }), run("  —  one bad influence can ruin the whole group.")]),
      bullet([run("to bring home the bacon / to earn a crust", { bold: true, color: C.BLUE }), run("  —  to earn the money needed to live.")]),
      bullet([run("to butter someone up", { bold: true, color: C.BLUE }), run("  —  to compliment someone too much, to get something!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("My baby brother is "), run("the apple of my eye", { bold: true, color: C.BLUE }), run(".")]),
    bullet([run("Mum sells vegetables at the market: she "), run("brings home the bacon", { bold: true, color: C.BLUE }), run("!")]),
    bullet([run("Stop "), run("buttering me up", { bold: true, color: C.BLUE }), run(" — you just want my mango!")]),
    p("", { after: 60 }),
    box("FOOD MYTHS — TRUE OR FALSE?", [
      bullet([run("Seeds grow in your stomach? ", { bold: true }), run("FALSE — no sun, no soil, no garden in there!", { bold: true, color: C.BLUE })]),
      bullet([run("Honey never goes bad? ", { bold: true }), run("TRUE — real honey can last for centuries!", { bold: true, color: C.BLUE })]),
      bullet([run("Walnuts make you smart because they look like brains? ", { bold: true }), run("FALSE — healthy, yes; magic, no!", { bold: true, color: C.BLUE })]),
      bullet([run("Meat of strong animals makes you strong like them? ", { bold: true }), run("FALSE — a myth!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 4", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The four food groups"),
    bullet([run("Energy-giving (rice, cassava, oil) — body-building (meat, fish, eggs, beans, milk) — protective (fruits, vegetables) — water.", { bold: true, color: C.BLUE })]),
    bullet([run("Balanced diet = all the groups, every day. Junk food = high in salt, sugar, fat; low in nutritional value.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Describing and measuring food"),
    bullet([run("Adjectives: fresh, raw, ripe, canned, dried.", { bold: true, color: C.BLUE })]),
    bullet([run("Quantifiers: a bowl of, a glass of, a slice of, a piece of, a portion of, a little, a lot of, too much.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Recommending"),
    bullet([run("should / shouldn’t + verb:", { bold: true, color: C.BLUE }), run("  You should eat more vegetables!")]),
    bullet([run("Frequency adverbs before the verb: always, usually, often, sometimes, rarely, never.", { bold: true, color: C.BLUE })]),
    bullet([run("Linking words: so (consequence); but, whereas, however (contrast).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Comparing"),
    bullet([run("-er than / more … than; the …-est / the most …; good → better → the best; bad → worse → the worst.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The advice letter"),
    bullet([run("Dear… → kind sentence → issues → recommendations → encouragement → Your friend.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Culture"),
    bullet([run("Idioms: apple of my eye, bring home the bacon, butter someone up… — and the food myths!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 4 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Classify into the four groups: rice, mango, fish, water, cassava, beans, brèdes, oil.")]),
    pAns("Answers: energy: rice, cassava, oil; building: fish, beans; protective: mango, brèdes; water: water.", ["energy: rice, cassava, oil"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Choose the adjective: 1. Don’t eat … meat (raw/ripe)! 2. This banana is yellow: it is … (canned/ripe). 3. We bought … sardines in a box (canned/fresh).")]),
    pAns("Answers: 1. raw 2. ripe 3. canned.", ["raw 2. ripe 3. canned"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Complete with a quantifier: 1. a … of milk 2. a … of bread 3. a … of chicken 4. too … sugar.")]),
    pAns("Answers: 1. glass 2. slice 3. piece 4. much.", ["glass 2. slice"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Give a recommendation with should/shouldn’t: 1. Koto drinks soda every day. 2. Soa never eats breakfast. 3. I eat very little fruit.")]),
    pAns("Answers (models): 1. He shouldn’t drink soda every day — he should drink water. 2. She should always eat breakfast. 3. You should eat more fruit.", ["He shouldn’t drink soda"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Compare: 1. fruit / candy (healthy) 2. junk food / home food (convenient) 3. water (the + good drink).")]),
    pAns("Answers: 1. Fruit is healthier than candy. 2. Junk food is more convenient than home food. 3. Water is the best drink.", ["Fruit is healthier than candy."]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("True or false (junk food): 1. It is high in salt, sugar and fat. 2. Old people eat the most junk food. 3. It is low in nutritional value.")]),
    pAns("Answers: 1. True 2. False — young people! 3. True.", ["False — young people!"]),
    p("", { after: 80 }),
    pr([run("Exercise 7. ", { bold: true }), run("Match the idioms: 1. the apple of my eye 2. to bring home the bacon 3. to butter someone up (a. earn the family money b. compliment to get something c. someone I cherish).")]),
    pAns("Answers: 1-c, 2-a, 3-b.", ["1-c, 2-a, 3-b"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s39", "SESSION 39 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: FOOD", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the four food groups with two examples each."),
    pAns("E.A.: energy (rice, oil), building (fish, beans), protective (mango, brèdes), water.", ["energy (rice, oil)"]),
    p("2. Give the five food adjectives."),
    pAns("E.A.: fresh, raw, ripe, canned, dried.", ["fresh, raw, ripe"]),
    p("3. Give five quantifiers with an example each."),
    pAns("E.A.: a bowl of rice, a glass of milk, a slice of bread, a piece of chicken, too much sugar.", ["a bowl of rice"]),
    p("4. What is junk food high in? Low in?"),
    pAns("E.A.: high in salt, sugar and fat; low in nutritional value.", ["low in nutritional value"]),
    p("5. Your friend eats sweets every day: give two recommendations."),
    pAns("E.A.: You should eat fruit instead; you shouldn’t eat sweets every day!", ["You should eat fruit instead"]),
    p("6. Put the frequency ladder in order (100% → 0%)."),
    pAns("E.A.: always, usually, often, sometimes, rarely, never.", ["always, usually"]),
    p("7. Compare: brèdes / meat (cheap); soda / water (bad)."),
    pAns("E.A.: Brèdes are cheaper than meat; soda is worse than water.", ["cheaper than meat"]),
    p("8. The two secrets of the nutrition text?"),
    pAns("E.A.: variety (not the same foods every day) and season (cheaper, fresher).", ["variety"]),
    p("9. Give the parts of the advice letter."),
    pAns("E.A.: Dear…, kind sentence, issues, recommendations, encouragement, Your friend + name.", ["recommendations"]),
    p("10. Give two food idioms and one food myth."),
    pAns("E.A.: the apple of my eye, bring home the bacon; “seeds grow in your stomach” — false!", ["bring home the bacon"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s40", "SESSION 40 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 4: FOOD", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Classify into the four food groups: bread, eggs, papaya, water, oil, milk, carrots, cassava.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with a quantifier: 1. a … of tea 2. a … of bread 3. a … of vegetables 4. Don’t put too … salt!")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Comparative or superlative? 1. Fruit is … (healthy) than candy. 2. Junk food is … (convenient) than home food. 3. Water is … (good) drink of all. 4. Soda is … (bad) than fruit juice.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer on the unit: 1. What is junk food high in? 2. Name two body-building foods. 3. What does “the apple of my eye” mean? 4. True or false: honey never goes bad.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short advice letter (5 sentences) to a friend who eats junk food every day: one kind sentence, two issues, two recommendations with “should” and one linking word.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: energy: bread, oil, cassava; building: eggs, milk; protective: papaya, carrots; water: water. (0.5 pt each)", ["energy: bread, oil, cassava"]),
    pAns("Ex.2: cup; slice; portion; much. (1 pt each)", ["cup; slice; portion; much"]),
    pAns("Ex.3: healthier; more convenient; the best; worse. (1 pt each)", ["healthier; more convenient"]),
    pAns("Ex.4: salt, sugar and fat; meat/fish/eggs/beans/milk (two of them); someone I cherish very much; true. (1 pt each)", ["someone I cherish very much"]),
    pAns("Ex.5 (model): Dear Hery, I hope you are well! You eat junk food every day, and you rarely drink water. It is high in fat, so you should eat home food more often. You should also drink a lot of water. You can do it! Your friend, Vola. (4 pts: form 1, issues 1, should 1, linking word 1)", ["Dear Hery"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...ficheS32(), pageBreak(), ...lessonS32(), pageBreak(),
    ...ficheS33(), pageBreak(), ...lessonS33(), pageBreak(),
    ...ficheS34(), pageBreak(), ...lessonS34(), pageBreak(),
    ...ficheS35(), pageBreak(), ...lessonS35(), pageBreak(),
    ...ficheS36(), pageBreak(), ...lessonS36(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can name the four food groups and their jobs.",
      "I can describe food: fresh, raw, ripe, canned, dried.",
      "I can measure food: a bowl of rice, a slice of bread, too much sugar.",
      "I can tell the truth about junk food.",
      "I can recommend: You should eat more vegetables!",
      "I can use the frequency adverbs: always… never.",
      "I can compare foods: healthier than, the best, worse than.",
      "I can compose a balanced menu for a whole day.",
      "I can write an advice letter about food.",
      "I can use American food idioms — and check food myths!",
    ], "NEXT STOP → UNIT 5: FAMILY!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
