// T7 — UNIT 3 — COMMON FOOD (19 séances + révision + test) — Sessions 31 à 51 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "B9770E"; // ambre
const SHADE = "FDEBD0";
const TOTAL = 99;
const AUDIO = {
  food: "https://drive.google.com/uc?export=download&id=1bu25N2NN9Sg7ektATXIUF9ZXvshP-9-u",
  lunch: "https://drive.google.com/uc?export=download&id=10LVY1xUz6bRS2NZf0scjZBYQsWI2lXfk",
  fruit: "https://drive.google.com/uc?export=download&id=1daAiC0S6yZ6_HsgOCt9-euHvS6RSMzXb",
  breakfast: "https://drive.google.com/uc?export=download&id=1Eub_U3ABL060pqIaPz2LnhHU5GW9JGzy",
  tovo: "https://drive.google.com/uc?export=download&id=1Rn-qk3RBoe1f27e2f-xE4x2m9Xe6WFWj",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — COMMON FOOD", title, slo,
  values: "mutual respect, solidarity", session, materials,
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
function lunchDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("WHAT’S FOR LUNCH? (from the syllabus)", [
    L("Jeff: Joe, let’s go home. It’s almost twelve o’clock!"),
    L("Joe: Yeah! Let’s go home. I feel so hungry!"),
    L("Jeff: You’re hungry, but I’m thirsty. Do you have a bottle of water?"),
    L("Joe: Sorry, I don’t.  (At home.)"),
    L("Joe: Mom, what’s for lunch?"),
    L("Mom: Wait a moment…"),
    L("Joe: Mmmm… Chicken and potatoes! It really looks tasty!"),
    L("Mom: And guess what’s for dessert."),
    L("Jeff: Bananas! We often have bananas as dessert!"),
    L("Mom: Not this time! We have apples!"),
    L("Joe: Mmm… apples are sour!"),
    L("Jeff: No, they are not sour. They are sweet!"),
    L("Mom: We will see that later.  —  Joe: You’re right, Mom! Enjoy your meal!"),
    L("(Eating.)  Joe: What a delicious meal!"),
  ]);
}
function fruitDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("AT THE FRUIT MARKET (from the syllabus)", [
    L("A: Whoaaa, look at all those fruit!"),
    L("B: Yes, there are a lot of choices. Which one is your favourite?"),
    L("A: My favourite fruit is banana."),
    L("B: I like eating bananas too."),
    L("A: Ooh, and what do you prefer, mangoes or apples?"),
    L("B: I prefer mangoes."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — COMMON FOOD", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("What’s for lunch? It looks delicious!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_food.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the common food: vegetables, fruit, meat, snacks;"),
    p("• talk about the three meals and my eating habits;"),
    p("• describe food by its colour and its taste: sweet, salty, sour, bitter;"),
    p("• use the exclamatory form: What a delicious meal!;"),
    p("• say what I like, dislike and prefer: I prefer mangoes to apples;"),
    p("• compare tastes: sweeter, more bitter;"),
    p("• read a text about food from other countries;"),
    p("• write a short production about common food.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, solidarity.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 2)", [
      p("In Unit 2 we learned to borrow and lend politely: Can I borrow…? Could you lend me…? Here you are!"),
      p("In Unit 3, we sit down at the table: food, meals, tastes — enjoy your meal!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u3_food.png", label: "Common food and the four tastes — listen and repeat", url: AUDIO.food }], COLOR),
  ];
}

// ---------- S31 — Food vocabulary + colours ----------
function ficheS31() {
  const meta = META("Common food — vocabulary and colours",
    "By the end of the lesson, learners will be able to name common local food and describe it by its colour.",
    "1 / 19", "realia or pictures of food, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 2.) Answer these questions:"),
       fp("1. Ask to borrow my pen politely."),
       fp("2. Give one classroom instruction and one negative command.")],
      [fp("Answer."),
       fp("E.A.: Can/May I borrow your pen, please?; Stand up! / Don’t talk!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: name the common food you see (realia or pictures): rice? beans? bananas?…")],
      [fp("Look. Name the food you know.")], "Using realia/pictures", "Realia or pictures (annex)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Common food ». By the end of this lesson, you will name the food of every day — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the food list and repeat by category: vegetables, fruit, meat, snacks, drinks.")],
      [fp("Listen. Repeat by category.")],
      "Audio / Repetition drill", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Sort the food on the board into the categories: vegetables / fruit / meat / snacks."),
       fp("Then the colours: What colour is a mango? — It’s yellow. What colour is a tomato? — It’s red.")],
      [fp("Sort. Answer the colour questions."),
       fp("E.A.: correct categories; It’s yellow / red / green / brown…")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: vegetables (carrots, tomatoes, onions), fruit (bananas, mangoes, oranges), meat (chicken, beef, pork), snacks (bread, cakes, peanuts). And we ask: What colour is a…? — It’s…")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game: describe a food by its colour and category — “It is a yellow fruit.” The class guesses: “A banana!”")],
      [fp("Describe. Guess."),
       pAns("E.A.: It’s a red vegetable → a tomato! It’s a brown drink → coffee!",
        ["a banana"], { size: SZ.FICHE })],
      "Guessing game", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two vegetables, two fruits and one meat."),
       fp("2. What colour is an orange? And rice?")],
      [fp("Answer."),
       pAns("E.A.: carrots, onions; bananas, mangoes; chicken — It’s orange; it’s white.",
        ["It’s orange"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LESSON OF THE DAY — SESSION 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMMON FOOD AND COLOURS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_food.png", 420, 768 / 1408),
    p([run("The food families:", { bold: true })], { after: 50 }),
    bullet([run("Vegetables: ", { bold: true, color: C.GREEN }), ...kw("carrots, tomatoes, onions, potatoes", "karots, teméitôouz, onionz, petéitôouz")]),
    bullet([run("Fruit: ", { bold: true, color: C.GREEN }), ...kw("bananas, mangoes, oranges, apples, pineapples", "benanaz, manggôouz, orindjiz, apeulz, païnapeulz")]),
    bullet([run("Meat: ", { bold: true, color: C.GREEN }), ...kw("chicken, beef, pork", "tchikeune, biif, pôrk")]),
    bullet([run("Snacks: ", { bold: true, color: C.GREEN }), ...kw("bread, cakes, peanuts", "brède, kéiks, pineuts")]),
    bullet([run("Drinks: ", { bold: true, color: C.GREEN }), ...kw("water, milk, tea, coffee", "ouôteur, milk, ti, kofi")]),
    bullet([run("And of course: ", { bold: true }), ...kw("rice and beans!", "raïss annde biinz")]),
    p("", { after: 60 }),
    box("THE COLOUR QUESTION", [
      bullet([...kw("What colour is a mango?", "ouate keuleur iz e manggôou"), run("  —  "), run("It’s yellow.", { bold: true, color: C.BLUE })]),
      bullet([...kw("What colour is a tomato?", "ouate keuleur iz e teméitôou"), run("  —  "), run("It’s red.", { bold: true, color: C.BLUE })]),
      bullet([run("The colours: "), run("red, green, blue, grey, white, brown, black, yellow, purple, pink, orange", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_food.png", label: "Common food — listen and repeat", url: AUDIO.food }], COLOR),
  ];
}

// ---------- S32 — The three meals ----------
function ficheS32() {
  const meta = META("The three meals — to have lunch, a cup of tea, a glass of…",
    "By the end of the lesson, learners will be able to name the three meals and use “to have” with food expressions.",
    "2 / 19", "pictures of meals, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the food families."),
       fp("2. What colour is a banana? A carrot?")],
      [fp("Answer."),
       fp("E.A.: vegetables, fruit, meat, snacks, drinks; it’s yellow; it’s orange.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Ask: what do you eat in the morning? at noon? in the evening? (Show the three pictures.)")],
      [fp("Look. Answer.")], "Using pictures", "Pictures of meals"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The three meals ». By the end of this lesson, you will talk about breakfast, lunch and dinner!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: in the morning I have BREAKFAST; at noon I have LUNCH; in the evening I have DINNER. Which little verb do we use every time?")],
      [fp("Observe. Answer."),
       fp("E.A.: the verb to have — I have lunch.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("More “have” expressions: to have a cup of tea, a glass of water, a bottle of water, a piece of bread."),
       fp("Question: What’s for breakfast/lunch/dinner?")],
      [fp("Repeat. Ask the question."),
       fp("E.A.: What’s for lunch? — Rice and chicken!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the three meals are breakfast, lunch, dinner. We HAVE a meal, a cup of tea, a glass of water. We ask: What’s for…?")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: — What’s for breakfast? — Bread and tea! — What’s for lunch? — Rice and beans! Change meals and partners.")],
      [fp("Ask and answer."),
       pAns("E.A.: correct meals and “have” expressions.",
        ["What’s for lunch?"], { size: SZ.FICHE })],
      "In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the three meals with their moment of the day."),
       fp("2. Complete: I have a … of tea and a … of water.")],
      [fp("Answer."),
       pAns("E.A.: breakfast (morning), lunch (noon), dinner (evening); a cup, a glass.",
        ["a cup"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}
function lessonS32() {
  return [
    p([run("LESSON OF THE DAY — SESSION 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE THREE MEALS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_meals.png", 420, 768 / 1408),
    bullet([...kw("breakfast", "brèkfeuste"), run("  —  the morning meal")]),
    bullet([...kw("lunch", "leunntch"), run("  —  the noon meal")]),
    bullet([...kw("dinner", "dineur"), run("  —  the evening meal")]),
    p("", { after: 60 }),
    p([run("The “have” expressions:", { bold: true })], { after: 50 }),
    bullet([...kw("I have breakfast at six o’clock.", "aï hav brèkfeuste ate siks eklok")]),
    bullet([...kw("We have lunch at noon.", "oui hav leunntch ate noune")]),
    bullet([...kw("a cup of tea", "e keupe ov ti"), run("  —  "), ...kw("a glass of water", "e glass ov ouôteur")]),
    bullet([...kw("a bottle of water", "e boteul ov ouôteur"), run("  —  "), ...kw("a piece of bread", "e piiss ov brède")]),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("What’s for breakfast?", "ouots fôr brèkfeuste"), run("  —  Bread and tea!")]),
      bullet([...kw("What’s for lunch?", "ouots fôr leunntch"), run("  —  Rice and chicken!")]),
      bullet([...kw("What’s for dinner?", "ouots fôr dineur"), run("  —  Soup and bread!")], { after: 20 }),
    ]),
  ];
}

// ---------- S33 — Verbs related to food + present simple ----------
function ficheS33() {
  const meta = META("The food verbs — eat, drink, cook, taste (present simple)",
    "By the end of the lesson, learners will be able to use the food verbs in the present simple for habitual actions.",
    "3 / 19", "blackboard, mime cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the three meals."),
       fp("2. What’s for dinner at your home?")],
      [fp("Answer."),
       fp("E.A.: breakfast, lunch, dinner; e.g. rice and soup.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime game: I mime eating, drinking, cooking, tasting… Guess the verbs!")],
      [fp("Watch. Guess.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the FOOD VERBS and how to say what we do every day. By the end of this lesson, you will describe your daily meals!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I eat rice every day. Joe eats rice every day. What changes between I eat and Joe eats?")],
      [fp("Observe. Answer."),
       fp("E.A.: with he/she, the verb takes -s: he eats, she drinks.")],
      "Contextualisation", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Find the use: present simple = habitual or repeated actions (every day, often…)."),
       fp("Conjugate together: I cook / he cooks; we drink / she drinks; they taste / it tastes.")],
      [fp("Give the rule. Conjugate."),
       fp("E.A.: he/she/it + verb-s.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: eat, drink, cook, taste + present simple for habits: I eat rice every day; my mother cooks dinner; the soup tastes good.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain: “I eat rice. My neighbour eats rice and drinks milk!” Each pupil repeats and adds a verb.")],
      [fp("Speak in the chain."),
       pAns("E.A.: correct -s with he/she: eats, drinks, cooks.",
        ["eats"], { size: SZ.FICHE })],
      "Chain drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete: 1. I … (eat) bread. 2. She … (drink) tea. 3. My father … (cook) on Sundays.")],
      [fp("Answer."),
       pAns("E.A.: eat — drinks — cooks.", ["drinks"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}
function lessonS33() {
  return [
    p([run("LESSON OF THE DAY — SESSION 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOOD VERBS — PRESENT SIMPLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The four food verbs:", { bold: true })], { after: 50 }),
    vocab("to eat", "tou ite", "I eat rice every day."),
    vocab("to drink", "tou drinnk", "we drink water."),
    vocab("to cook", "tou kouk", "my mother cooks dinner."),
    vocab("to taste", "tou téiste", "the soup tastes good!"),
    p("", { after: 60 }),
    box("THE RULE OF THE PRESENT SIMPLE", [
      p([run("For habits (every day, often…): he / she / it → verb + S", { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 30 }),
      bullet([run("I eat — you eat — we eat — they eat", { bold: true })]),
      bullet([run("he eats — she drinks — it tastes", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Examples from every day:", { bold: true })], { after: 50 }),
    bullet([...kw("I eat rice every day.", "aï ite raïss èvri déi")]),
    bullet([...kw("She drinks a cup of tea in the morning.", "chi drinnks e keupe ov ti")]),
    bullet([...kw("My father cooks on Sundays.", "maï fâzeur kouks one seunndéiz")]),
    bullet([...kw("We often have bananas as dessert.", "oui ofeune hav benanaz az dizeurte")]),
    p("", { after: 60 }),
    p([run("Careful:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([run("She eat"), run("s", { bold: true, color: C.RED }), run(" — never “she eat”! The -s is the present simple’s little hat.")]),
  ];
}

// ---------- S34 — Taste adjectives + exclamatory ----------
function ficheS34() {
  const meta = META("The taste adjectives — What a delicious meal!",
    "By the end of the lesson, learners will be able to describe food by its taste and use the exclamatory form.",
    "4 / 19", "audio (QR code), taste chart, small food samples if possible");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Conjugate “to eat” with she."),
       fp("2. Give a habit sentence with “cook”.")],
      [fp("Answer."),
       fp("E.A.: she eats; my mother cooks every day.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Show the four faces (picture): candy, fries, lemon, black coffee. What does each child feel?")],
      [fp("Look. React.")], "Using pictures", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the TASTES of food. By the end of this lesson, you will describe every dish — and exclaim like a chef!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the taste list and fill the chart: sweet / salty / sour / bitter — where do sugar, salt, tamarind and black coffee go?")],
      [fp("Listen. Fill the chart."),
       fp("E.A.: sugar → sweet; salt → salty; tamarind → sour; black coffee → bitter.")],
      "Audio / Chart", "Audio (QR code), chart"),
    stepRow(["4. Analysis"],
      [fp("More adjectives: delicious, tasty, hungry, thirsty. Careful: HUNGRY and THIRSTY describe ME, not the food!"),
       fp("The exclamatory form: What a delicious meal! What a salty soup! How is it built?")],
      [fp("Classify. Give the structure."),
       fp("E.A.: What + a/an + adjective + noun + !")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: sweet, salty, sour, bitter for the tastes; delicious, tasty for good food; I’m hungry / I’m thirsty for me. And: What a delicious meal!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game: “It is white and salty.” → Salt! “It is a sweet yellow fruit.” → A banana! Then exclaim: “What a sweet banana!”")],
      [fp("Guess. Exclaim."),
       pAns("E.A.: correct tastes + What a…! sentences.",
        ["What a sweet banana!"], { size: SZ.FICHE })],
      "Guessing game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the taste: sugar, tamarind, salt, black coffee."),
       fp("2. Exclaim about a delicious meal.")],
      [fp("Answer."),
       pAns("E.A.: sweet — sour — salty — bitter; What a delicious meal!",
        ["What a delicious meal!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}
function lessonS34() {
  return [
    p([run("LESSON OF THE DAY — SESSION 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOUR TASTES — WHAT A DELICIOUS MEAL!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_tastes.png", 420, 768 / 1408),
    p([run("The four tastes:", { bold: true })], { after: 50 }),
    vocab("sweet", "souite", "like sugar, mangoes, ripe bananas."),
    vocab("salty", "sôlti", "like salt, salty fries."),
    vocab("sour", "saoueur", "like tamarind and lemon."),
    vocab("bitter", "biteur", "like black coffee."),
    p("", { after: 40 }),
    p([run("More food adjectives:", { bold: true })], { after: 50 }),
    vocab("delicious", "dilicheuss", "very very good!"),
    vocab("tasty", "téisti", "full of taste."),
    bullet([...kw("I’m hungry.", "aïm heunnggri"), run("  —  I need to EAT.")]),
    bullet([...kw("I’m thirsty.", "aïm seursti"), run("  —  I need to DRINK.")]),
    p("", { after: 60 }),
    box("THE EXCLAMATORY FORM", [
      p([run("What + a/an + adjective + noun + !", { bold: true, color: C.BLUE, size: 30 })], { center: true, after: 30 }),
      bullet([run("What a delicious meal!", { bold: true })]),
      bullet([run("What a salty soup!", { bold: true })]),
      bullet([run("What a sweet mango!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_food.png", label: "The four tastes — listen and repeat", url: AUDIO.food }], COLOR),
  ];
}

// ---------- S35 — The lunch dialogue ----------
function ficheS35() {
  const meta = META("Listening — “What’s for lunch?” (Jeff and Joe)",
    "By the end of the lesson, learners will be able to understand a dialogue about a meal and use its expressions: Enjoy your meal! It looks tasty!",
    "5 / 19", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the four tastes with one example each."),
       fp("2. Exclaim about a sour lemon.")],
      [fp("Answer."),
       fp("E.A.: sweet/salty/sour/bitter + examples; What a sour lemon!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: it is almost twelve o’clock… How do you feel before lunch? (hungry! thirsty!)")],
      [fp("Answer."),
       fp("E.A.: I feel so hungry!")], "Contextualisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Jeff and Joe going home for lunch. By the end of this lesson, you will speak like them at the table!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st): listen to the dialogue. Answer: What’s for lunch? What’s for dessert?")],
      [fp("Listen. Answer."),
       fp("E.A.: chicken and potatoes; apples.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("2nd listening: draw the meaning of the expressions from the text: I feel so hungry! — It really looks tasty! — Enjoy your meal! — What a delicious meal!"),
       fp("Who thinks apples are sour? Who disagrees?")],
      [fp("Listen. Explain. Answer."),
       fp("E.A.: Joe thinks they are sour; Jeff says they are sweet.")],
      "Audio / Eliciting technique", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So at the table: What’s for lunch? — It looks tasty! — Enjoy your meal! — What a delicious meal! and I feel hungry / thirsty.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Listen and repeat the dialogue line by line. Then role play it in groups of three (Jeff, Joe, Mom).")],
      [fp("Repeat. Role play."),
       pAns("E.A.: lively role play with the meal expressions.",
        ["Enjoy your meal!"], { size: SZ.FICHE })],
      "Role play / Group work", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What do we say before eating? After a good meal?"),
       fp("2. True or false: Joe is thirsty.")],
      [fp("Answer."),
       pAns("E.A.: Enjoy your meal!; What a delicious meal!; false — Jeff is thirsty, Joe is hungry.",
        ["Enjoy your meal!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}
function lessonS35() {
  return [
    p([run("LESSON OF THE DAY — SESSION 35", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT’S FOR LUNCH?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    lunchDialogueBox(),
    p("", { after: 60 }),
    p([run("The table expressions:", { bold: true })], { after: 50 }),
    bullet([...kw("I feel so hungry!", "aï fiil sôou heunnggri")]),
    bullet([...kw("What’s for lunch?", "ouots fôr leunntch")]),
    bullet([...kw("It really looks tasty!", "ite rili louks téisti")]),
    bullet([...kw("Enjoy your meal!", "inndjoï iôr miil"), run("  —  before eating")]),
    bullet([...kw("What a delicious meal!", "ouate e dilicheuss miil"), run("  —  after eating")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_lunch.png", label: "“What’s for lunch?” — listen and repeat", url: AUDIO.lunch }], COLOR),
  ];
}

// ---------- S36 — Eating habits (1) ----------
function ficheS36() {
  const meta = META("My eating habits (1) — the frequency adverbs",
    "By the end of the lesson, learners will be able to talk about their eating habits with always, often, usually, sometimes, never.",
    "6 / 19", "blackboard, frequency ladder");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What do we say before eating?"),
       fp("2. In the dialogue: what do they often have as dessert?")],
      [fp("Answer."),
       fp("E.A.: Enjoy your meal!; bananas — “We often have bananas as dessert!”")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Question ladder: Do you eat rice every day? twice a day? Do you ever eat pizza?")],
      [fp("Answer honestly!")], "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to talk about our EATING HABITS with the frequency words. By the end of this lesson, you will say how often you eat everything!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe Jeff’s sentence: “We OFTEN have bananas as dessert.” Where is the frequency word?")],
      [fp("Observe. Answer."),
       fp("E.A.: before the verb: we often have.")],
      "Contextualisation", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Build the frequency ladder: always (100%) → usually → often → sometimes → never (0%)."),
       fp("Place in the sentence: BEFORE the verb — I usually have rice; she never drinks coffee.")],
      [fp("Build the ladder. Place the words."),
       fp("E.A.: correct order and position.")],
      "Eliciting technique", "Blackboard / ladder"),
    stepRow(["5. Synthesis"],
      [fp("So: always, usually, often, sometimes, never — before the verb. I always have breakfast; I sometimes eat cakes; I never drink coffee.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("True sentences: each pupil says three TRUE sentences about his/her eating habits, one with usually, one with sometimes, one with never.")],
      [fp("Speak the truth!"),
       pAns("E.A.: I usually have rice for lunch. I sometimes eat mangoes. I never drink coffee.",
        ["usually"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Put the word in the right place: 1. I eat bread (often). 2. She drinks tea (always). 3. We eat pork (never).")],
      [fp("Answer."),
       pAns("E.A.: I often eat bread. She always drinks tea. We never eat pork.",
        ["I often eat bread."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY EATING HABITS — HOW OFTEN?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FREQUENCY LADDER", [
      bullet([...kw("always", "ôlouéiz"), run("  — 100%, every single time")]),
      bullet([...kw("usually", "ioujeuli"), run("  — almost every time")]),
      bullet([...kw("often", "ofeune"), run("  — many times")]),
      bullet([...kw("sometimes", "seumtaïmz"), run("  — from time to time")]),
      bullet([...kw("never", "nèveur"), run("  — 0%, not one time!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PLACE IN THE SENTENCE", [
      p([run("The frequency word sits BEFORE the verb.", { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 30 }),
      bullet([run("I "), run("always", { bold: true, color: C.BLUE }), run(" have breakfast.")]),
      bullet([run("We "), run("often", { bold: true, color: C.BLUE }), run(" have bananas as dessert.")]),
      bullet([run("She "), run("never", { bold: true, color: C.BLUE }), run(" drinks coffee.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My three true sentences (model):", { bold: true })], { after: 50 }),
    bullet([run("I usually have rice for lunch.", { italic: true })]),
    bullet([run("I sometimes eat cakes on Sundays.", { italic: true })]),
    bullet([run("I never drink black coffee — it is bitter!", { italic: true })]),
  ];
}

// ---------- S37 — Eating habits (2): the interview ----------
function ficheS37() {
  const meta = META("My eating habits (2) — the food interview",
    "By the end of the lesson, learners will be able to ask about eating habits and report their classmates’ answers.",
    "7 / 19", "copy-books for notes");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the frequency ladder."),
       fp("2. Make a sentence with “usually”.")],
      [fp("Answer."),
       fp("E.A.: always, usually, often, sometimes, never; I usually…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick poll, hands up: who has rice for breakfast? bread? tea? milk?")],
      [fp("Raise hands.")], "Poll", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, you become food journalists: ask, note and REPORT the eating habits of the class!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The interview questions on the board: What do you usually have for breakfast? for lunch? for dinner? How often do you eat fruit?")],
      [fp("Read. Repeat the questions.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("How do we report? Koto says “I usually have rice.” → I report: “Koto usually HAS rice.” What changes?")],
      [fp("Answer."),
       fp("E.A.: I → he/she and the verb takes -s: has, eats, drinks.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: I ask with What do you usually have…?, I note, and I report with he/she + verb-s.")],
      [fp("Repeat the two steps.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview two classmates about breakfast, lunch, dinner and fruit. Then report to the class: “Soa usually has bread and tea for breakfast. She often eats mangoes.”")],
      [fp("Interview. Note. Report."),
       pAns("E.A.: correct questions and reports with -s.",
        ["usually has"], { size: SZ.FICHE })],
      "Interview / Report", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Report my answers: “I always have tea. I sometimes eat fish.”")],
      [fp("Report."),
       pAns("E.A.: You always have tea… no! He/She always HAS tea. He/She sometimes EATS fish.",
        ["always has"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOOD INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("My journalist questions:", { bold: true })], { after: 50 }),
    bullet([...kw("What do you usually have for breakfast?", "ouate dou iou ioujeuli hav fôr brèkfeuste")]),
    bullet([...kw("What do you usually have for lunch?", "ouate dou iou ioujeuli hav fôr leunntch")]),
    bullet([...kw("What do you usually have for dinner?", "ouate dou iou ioujeuli hav fôr dineur")]),
    bullet([...kw("How often do you eat fruit?", "haou ofeune dou iou ite froute")]),
    p("", { after: 60 }),
    box("FROM ANSWER TO REPORT", [
      bullet([run("Soa says: "), run("“I usually have bread and tea.”", { italic: true })]),
      bullet([run("I report: "), run("“Soa usually HAS bread and tea.”", { bold: true, color: C.BLUE })]),
      bullet([run("The change: "), run("I → he/she, and the verb takes -S!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("A model report:", { bold: true })], { after: 50 }),
    bullet([run("Koto usually has rice and beans for lunch. He often eats bananas. He never drinks coffee. What a healthy boy!", { italic: true })]),
  ];
}

// ---------- S38 — Likes and dislikes ----------
function ficheS38() {
  const meta = META("Likes and dislikes — I like eating bananas!",
    "By the end of the lesson, learners will be able to express likes and dislikes about food, with the gerund.",
    "8 / 19", "food pictures, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask me about my breakfast habits."),
       fp("2. Report my answer.")],
      [fp("Ask. Report."),
       fp("E.A.: What do you usually have…? — He/She usually has…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Show food pictures: thumbs up if you like it, thumbs down if you don’t!")],
      [fp("React with thumbs.")], "Using pictures", "Food pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to say what we LIKE and DISLIKE. By the end of this lesson, you will have a whole family of verbs for your feelings about food!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe from the market dialogue: “I like eatEATING bananas too.” After like, what form is the verb?")],
      [fp("Observe. Answer."),
       fp("E.A.: verb-ing — I like eating.")],
      "Contextualisation", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The feelings family, from love to hate: love, be crazy about, like, enjoy, fancy / dislike, detest, hate."),
       fp("All of them + verb-ING: I love cooking; she hates washing the dishes!")],
      [fp("Classify from + to −. Use the gerund."),
       fp("E.A.: correct scale and -ing forms.")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: like / love / enjoy / hate + verb-ing. I like eating mangoes. I hate eating bitter food.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Two lines: A says a true like (“I love eating fish!”), B says a true dislike (“I hate drinking black coffee!”). Move and exchange roles.")],
      [fp("Speak in the two lines."),
       pAns("E.A.: correct verbs + gerund, true feelings!",
        ["I love eating"], { size: SZ.FICHE })],
      "Speed chat", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete: 1. I like … (eat) rice. 2. She loves … (cook). 3. They hate … (drink) sour juice.")],
      [fp("Answer."),
       pAns("E.A.: eating — cooking — drinking.", ["eating"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LIKES AND DISLIKES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FEELINGS SCALE — FROM + TO −", [
      bullet([run("😍 ", { size: 28 }), ...kw("I’m crazy about…", "aïm créizi ebaoute"), run("  /  "), ...kw("I love…", "aï leuve")]),
      bullet([run("🙂 ", { size: 28 }), ...kw("I like… / I enjoy… / I fancy…", "aï laïk — aï inndjoï — aï fannsi")]),
      bullet([run("🙁 ", { size: 28 }), ...kw("I dislike…", "aï disslaïk")]),
      bullet([run("😖 ", { size: 28 }), ...kw("I hate… / I detest…", "aï héite — aï ditèste")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE RULE", [
      p([run("like / love / enjoy / hate + verb-ING (the gerund)", { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 30 }),
      p([run("The same -ing as “good at” in Unit 1!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Examples:", { bold: true })], { after: 50 }),
    bullet([...kw("I like eating bananas.", "aï laïk itinng benanaz")]),
    bullet([...kw("I love cooking with my mother.", "aï leuve koukinng")]),
    bullet([...kw("She enjoys drinking fresh milk.", "chi inndjoïz drinnkinng")]),
    bullet([...kw("I hate eating bitter food.", "aï héite itinng biteur foude")]),
  ];
}

// ---------- S39 — Preferences + comparatives ----------
function ficheS39() {
  const meta = META("Preferences — I prefer mangoes to apples!",
    "By the end of the lesson, learners will be able to express preferences and compare tastes.",
    "9 / 19", "audio (QR code), pieces of paper with names of food");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the feelings scale from love to hate."),
       fp("2. Complete: I enjoy … (drink) fresh juice.")],
      [fp("Answer."),
       fp("E.A.: love, like, dislike, hate; drinking.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: describe this dish (picture): what is in it? does it look tasty?")],
      [fp("Describe the dish.")], "Using pictures", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn to say our FAVOURITE food and our PREFERENCES. By the end of this lesson, you will choose like a chef!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the market dialogue. Answer: what is A’s favourite fruit? what does B prefer, mangoes or apples?")],
      [fp("Listen. Answer."),
       fp("E.A.: banana; B prefers mangoes.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the structures: What is your favourite food? — My favourite food is… / What do you prefer, X or Y? — I prefer X to Y."),
       fp("Compare the tastes: mangoes are sweetER than apples; black coffee is MORE BITTER than tea.")],
      [fp("Give the structures. Compare."),
       fp("E.A.: prefer + noun + to + noun; short adj + -er, long adj + more.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: My favourite food is rice. I prefer mangoes to apples. Mangoes are sweeter than apples.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pick two papers with food names: ask your partner “What do you prefer, X or Y?” — answer with prefer… to… and one comparative!")],
      [fp("Ask. Answer. Compare."),
       pAns("E.A.: I prefer bananas to oranges — bananas are sweeter!",
        ["prefer"], { size: SZ.FICHE })],
      "Transformation drill / In pairs", "Pieces of paper"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is your favourite food?"),
       fp("2. Compare: tamarind / mango (sour).")],
      [fp("Answer."),
       pAns("E.A.: My favourite food is…; tamarind is more sour / sourer than mango.",
        ["My favourite food is"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LESSON OF THE DAY — SESSION 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FAVOURITE — I PREFER…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    fruitDialogueBox(),
    p("", { after: 60 }),
    p([run("The preference structures:", { bold: true })], { after: 50 }),
    bullet([...kw("What is your favourite food?", "ouate iz iôr féivrite foude"), run("  —  "), run("My favourite food is rice.", { bold: true, color: C.BLUE })]),
    bullet([...kw("What do you prefer, mangoes or apples?", "ouate dou iou prifeur manggôouz ôr apeulz")]),
    bullet([run("I prefer ", { size: SZ.BODY }), run("mangoes", { bold: true, color: C.BLUE }), run(" TO ", { bold: true, color: C.RED }), run("apples", { bold: true, color: C.BLUE }), run(".  (prefer + noun + to + noun)")]),
    p("", { after: 60 }),
    box("COMPARING THE TASTES", [
      bullet([run("Short adjective + -ER: ", { bold: true }), run("sweeter, sourer, saltier", { bold: true, color: C.BLUE }), run(" — Mangoes are sweeter than apples.")]),
      bullet([run("Long adjective → MORE: ", { bold: true }), run("more bitter, more delicious", { bold: true, color: C.BLUE }), run(" — Black coffee is more bitter than tea.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Mine and yours — the possessives:", { bold: true })], { after: 50 }),
    bullet([run("my favourite fruit → this fruit is "), run("mine", { bold: true, color: C.BLUE }), run(" ; your favourite → it is "), run("yours", { bold: true, color: C.BLUE })]),
    bullet([run("his / her favourite → it is "), run("his / hers", { bold: true, color: C.BLUE })]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_fruit.png", label: "At the fruit market — listen and repeat", url: AUDIO.fruit }], COLOR),
  ];
}

// ---------- S40 — Would you like…? ----------
function ficheS40() {
  const meta = META("Offering food — Would you like some rice?",
    "By the end of the lesson, learners will be able to offer food politely and accept or refuse.",
    "10 / 19", "plates or pictures, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What do you prefer, tea or milk?"),
       fp("2. Compare their tastes.")],
      [fp("Answer."),
       fp("E.A.: I prefer … to …; milk is sweeter than tea.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I hold a plate (picture): I want to offer it to a guest. What can I say?")],
      [fp("Suggest."),
       fp("E.A.: Do you want…? — yes, but there is more polite!")],
      "Contextualisation", "Plate / picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn to OFFER food like a perfect host: Would you like…? By the end of this lesson, your guests will feel like kings!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Would you like some rice? — Yes, please! / No, thank you. Which answer accepts? Which refuses?")],
      [fp("Observe. Answer."),
       fp("E.A.: Yes, please = accept; No, thank you = refuse politely.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The structure: Would you like + some + food? And to ask for more: Can I have some more, please?"),
       fp("Remember Unit 1: would = the polite helper (I’d like…).")],
      [fp("Give the structure."),
       fp("E.A.: Would you like some…? — the “would” of politeness again!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Would you like some rice? — Yes, please! / No, thank you. — Can I have some more, please? — Of course!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the meal: the host offers three dishes, the guest accepts one, refuses one, asks for more of one!")],
      [fp("Role play the meal."),
       pAns("E.A.: — Would you like some chicken? — Yes, please! … — No, thank you. … — Can I have some more rice, please?",
        ["Would you like some"], { size: SZ.FICHE })],
      "Role play / In pairs", "Plates or pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Offer me some tea."),
       fp("2. Refuse politely, then accept.")],
      [fp("Offer. Answer."),
       pAns("E.A.: Would you like some tea? — No, thank you. / Yes, please!",
        ["Yes, please!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LESSON OF THE DAY — SESSION 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WOULD YOU LIKE SOME RICE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("To offer food:", { bold: true })], { after: 50 }),
    bullet([...kw("Would you like some rice?", "woud iou laïk seume raïss")]),
    bullet([...kw("Would you like a glass of water?", "woud iou laïk e glass ov ouôteur")]),
    p("", { after: 40 }),
    p([run("To accept:", { bold: true, color: C.GREEN })], { after: 50 }),
    bullet([...kw("Yes, please!", "yèss pliiz")]),
    bullet([...kw("I’d love some, thank you!", "aïd leuve seume tenk iou")]),
    p("", { after: 40 }),
    p([run("To refuse politely:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([...kw("No, thank you. I’m fine.", "nôou tenk iou aïm faïne")]),
    p("", { after: 40 }),
    p([run("To ask for more:", { bold: true })], { after: 50 }),
    bullet([...kw("Can I have some more, please?", "kane aï hav seume môr pliiz")]),
    p("", { after: 60 }),
    box("A MODEL MEAL DIALOGUE", [
      p([run("Host: Welcome! Would you like some chicken?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Guest: Yes, please! It looks delicious!", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Host: Would you like some black coffee?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Guest: No, thank you. It is too bitter for me!", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Guest: Mmm… Can I have some more rice, please?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Host: Of course! Enjoy your meal!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
  ];
}

// ---------- S41 — Quantities ----------
function ficheS41() {
  const meta = META("Quantities — some, a lot of, a little",
    "By the end of the lesson, learners will be able to talk about quantities of food.",
    "11 / 19", "realia (rice, water…), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Offer me some fruit."),
       fp("2. Ask for more politely.")],
      [fp("Offer. Ask."),
       fp("E.A.: Would you like some…? — Can I have some more, please?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Show: a big bowl of rice / a small spoon of rice. A LOT OF rice… A LITTLE rice! Feel the difference?")],
      [fp("Watch. Compare.")], "Using realia", "Realia"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to measure our food with three little words: some, a lot of, a little. By the end of this lesson, you will never be lost in the kitchen!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I eat SOME rice. Joe eats A LOT OF rice! Mom adds A LITTLE salt. When do we use each?")],
      [fp("Observe. Answer."),
       fp("E.A.: some = a normal quantity; a lot of = much; a little = small quantity.")],
      "Contextualisation", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("With containers, be exact: a cup of tea, a glass of milk, a bottle of water, a piece of bread, a plate of rice.")],
      [fp("Match containers and food."),
       fp("E.A.: correct pairs.")],
      "Matching", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: some / a lot of / a little + food; and the containers: a cup of, a glass of, a bottle of, a piece of, a plate of.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Kitchen orders in pairs: “Give me a lot of rice, a little salt and a glass of water, please!” — the partner mimes the service.")],
      [fp("Order. Serve."),
       pAns("E.A.: correct quantities and containers.",
        ["a little salt"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete: 1. a … of tea. 2. a … of water (to carry). 3. I want … rice, I’m so hungry! 4. Just … sugar, please.")],
      [fp("Answer."),
       pAns("E.A.: cup — bottle — a lot of — a little.", ["a lot of"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}
function lessonS41() {
  return [
    p([run("LESSON OF THE DAY — SESSION 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("SOME, A LOT OF, A LITTLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE QUANTITIES", [
      bullet([...kw("some", "seume"), run("  —  a normal quantity: I eat some rice.")]),
      bullet([...kw("a lot of", "e lote ov"), run("  —  a big quantity: Joe eats a lot of rice!")]),
      bullet([...kw("a little", "e liteul"), run("  —  a small quantity: just a little salt.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The containers — to be exact:", { bold: true })], { after: 50 }),
    bullet([...kw("a cup of tea", "e keupe ov ti")]),
    bullet([...kw("a glass of milk", "e glass ov milk")]),
    bullet([...kw("a bottle of water", "e boteul ov ouôteur")]),
    bullet([...kw("a piece of bread", "e piiss ov brède")]),
    bullet([...kw("a plate of rice", "e pléite ov raïss")]),
    p("", { after: 60 }),
    p([run("In the kitchen (model):", { bold: true })], { after: 50 }),
    bullet([run("For our lunch, Mom cooks a lot of rice, some chicken and a little sauce. On the table there is a bottle of water and a glass for everyone.", { italic: true })]),
  ];
}

// ---------- S42 — Healthy food ----------
function ficheS42() {
  const meta = META("Healthy food — the food pyramid",
    "By the end of the lesson, learners will be able to say which food is healthy and build a balanced meal.",
    "12 / 19", "food pyramid picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the three quantity words."),
       fp("2. Complete: a … of tea, a … of bread.")],
      [fp("Answer."),
       fp("E.A.: some, a lot of, a little; cup, piece.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Question: rice or cakes — what gives you energy for school? What is better for your body?")],
      [fp("Answer. Discuss.")], "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to discover the FOOD PYRAMID: the map of healthy eating. By the end of this lesson, you will build a balanced meal!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pyramid picture: what is at the big base? in the middle? at the tiny top?")],
      [fp("Observe. Answer."),
       fp("E.A.: base = rice, bread, cereals; middle = fruit and vegetables, then fish/meat/milk; top = sweets, very little!")],
      "Using pictures", "Pyramid picture"),
    stepRow(["4. Analysis"],
      [fp("Vocabulary: healthy (good for the body) / unhealthy. Frequency again: we eat rice every day, we SOMETIMES eat cakes, we eat A LOT OF vegetables, just A LITTLE sugar.")],
      [fp("Use the words on the pyramid."),
       fp("E.A.: correct frequency + quantity per level.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: eat a lot of rice, fruit and vegetables; some fish, meat and milk; and only a little sugar — that is a healthy plate!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs, build a healthy menu for one day (breakfast, lunch, dinner) and present it: “For breakfast, we have… because it is healthy!”")],
      [fp("Build. Present."),
       pAns("E.A.: balanced menus with quantities and “healthy”.",
        ["healthy"], { size: SZ.FICHE })],
      "Project / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is at the base of the pyramid? At the top?"),
       fp("2. Make one sentence with “healthy”.")],
      [fp("Answer."),
       pAns("E.A.: rice/cereals; sweets; Vegetables are healthy — I eat a lot of them!",
        ["Vegetables are healthy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}
function lessonS42() {
  return [
    p([run("LESSON OF THE DAY — SESSION 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HEALTHY FOOD — THE PYRAMID", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_pyramid.png", 420, 768 / 1408),
    p([run("The levels of the pyramid:", { bold: true })], { after: 50 }),
    bullet([run("1. The big base: ", { bold: true, color: C.GREEN }), run("rice, bread, cereals", { bold: true }), run(" — every day, a lot!")]),
    bullet([run("2. Fruit and vegetables: ", { bold: true, color: C.GREEN }), run("bananas, mangoes, carrots, greens", { bold: true }), run(" — every day!")]),
    bullet([run("3. Fish, meat, eggs, milk, beans: ", { bold: true, color: C.GREEN }), run("some", { bold: true }), run(" — for strong muscles.")]),
    bullet([run("4. The tiny top: ", { bold: true, color: C.GREEN }), run("sweets and cakes", { bold: true }), run(" — only a little, sometimes!")]),
    p("", { after: 60 }),
    p([run("The two magic words:", { bold: true })], { after: 50 }),
    vocab("healthy", "hèlsi", "good for my body: fruit is healthy."),
    vocab("unhealthy", "eune-hèlsi", "bad for my body when I eat too much of it."),
    p("", { after: 60 }),
    box("MY HEALTHY DAY (model)", [
      p([run("For breakfast, I have bread and a glass of milk. For lunch, I have a plate of rice, some fish and a lot of vegetables. For dinner, I have soup and a banana. I only eat a little sugar — what a healthy day!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
  ];
}

// ---------- S43 — Listening: Jack's full English breakfast ----------
function ficheS43() {
  const meta = META("Listening — Jack’s full English breakfast",
    "By the end of the lesson, learners will be able to understand a description of a foreign meal and name its items.",
    "13 / 19", "audio (QR code), breakfast picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is at the base of the food pyramid?"),
       fp("2. Make a sentence with “healthy”.")],
      [fp("Answer."),
       fp("E.A.: rice, bread, cereals; Fruit is healthy.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the picture — a very big breakfast! Guess: from which country? What can you see on the plate?")],
      [fp("Look. Guess.")], "Using pictures", "Breakfast picture"),
    stepRow(["2. Presentation"],
      [fp("Today we travel to England for breakfast with Jack! By the end of this lesson, you will name a full English breakfast.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st): listen to Jack. What meal is he describing? On which day do the English sometimes have it?")],
      [fp("Listen. Answer."),
       fp("E.A.: a full English breakfast; on Sunday morning.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("2nd listening: tick what is on Jack’s plate: eggs? rice? bacon? sausages? beans? fish? toast? tea or coffee?")],
      [fp("Listen. Tick."),
       fp("E.A.: eggs, bacon, sausages, beans, toast, a cup of tea — no rice, no fish!")],
      "Audio / Individual work", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So: a full English breakfast = eggs + bacon + sausages + beans + toast + tea. Very different from our breakfast — and that is interesting!")],
      [fp("Listen. Repeat. Copy the list.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Compare in pairs: “In England, Jack has eggs and bacon. At home, I usually have…” Present the two breakfasts to the class.")],
      [fp("Compare. Present."),
       pAns("E.A.: correct comparison sentences with usually / sometimes.",
        ["usually"], { size: SZ.FICHE })],
      "In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four things in a full English breakfast."),
       fp("2. What do YOU usually have for breakfast?")],
      [fp("Answer."),
       pAns("E.A.: eggs, bacon, sausages, beans (toast, tea); I usually have…",
        ["eggs, bacon, sausages, beans"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43");
}
function lessonS43() {
  return [
    p([run("LESSON OF THE DAY — SESSION 43", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("JACK’S FULL ENGLISH BREAKFAST", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_breakfast.png", 420, 768 / 1408),
    p([run("On Jack’s plate:", { bold: true })], { after: 50 }),
    vocab("eggs", "ègz", "fried or boiled."),
    vocab("bacon", "béikeune", "thin slices of pork."),
    vocab("sausages", "sossidjiz", "small meat rolls."),
    vocab("beans", "biinz", "in tomato sauce."),
    vocab("toast", "tôouste", "grilled bread with butter."),
    bullet([run("…and a big "), run("cup of tea", { bold: true, color: C.BLUE }), run("!")]),
    p("", { after: 60 }),
    box("HERE AND THERE", [
      bullet([run("In England, Jack sometimes has a "), run("full English breakfast", { bold: true, color: C.BLUE }), run(" on Sunday morning.")]),
      bullet([run("In Madagascar, I usually have "), run("bread and tea", { bold: true, color: C.BLUE }), run(" — or rice!")]),
      bullet([run("Different plates, same pleasure: "), run("enjoy your meal!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_breakfast.png", label: "Jack’s full English breakfast — listen and tick", url: AUDIO.breakfast }], COLOR),
  ];
}

// ---------- S44 — Food from here and there ----------
function ficheS44() {
  const meta = META("Food from here and there",
    "By the end of the lesson, learners will be able to name some dishes from Anglophone countries and present a local dish in English.",
    "14 / 19", "pictures of dishes, world map");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is in a full English breakfast?"),
       fp("2. Compare it with your breakfast.")],
      [fp("Answer."),
       fp("E.A.: eggs, bacon, sausages, beans, toast; at home I usually have…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Do you know any US or British food? Share with the class!")],
      [fp("Share."),
       fp("E.A.: fish and chips, hamburgers, pizza (from Italy but popular!), hot dogs…")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we put the food of the WORLD on our table: dishes from here and from there. By the end of this lesson, you will present a Malagasy dish in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Match the dishes and the countries (pictures + map): fish and chips → England; hamburger → the USA; rice and beans → Madagascar…")],
      [fp("Match.")],
      "Matching / Using pictures", "Pictures, map"),
    stepRow(["4. Analysis"],
      [fp("How do we present a dish? Name + what is in it + taste: “Fish and chips is a British dish. It is fish with fried potatoes. It is salty and tasty!”")],
      [fp("Give the presentation plan."),
       fp("E.A.: name → ingredients → taste.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: every country has its dishes. We present a dish with: It is… It has… It tastes…")],
      [fp("Repeat the plan.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs, present ONE Malagasy dish in English to a foreign friend (name, ingredients, taste) — and one foreign dish you would like to try, with “I’d like to try…”.")],
      [fp("Present the two dishes."),
       pAns("E.A.: This dish is rice with greens and zebu meat. It is tasty! I’d like to try fish and chips.",
        ["I’d like to try"], { size: SZ.FICHE })],
      "Presentation / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name one British dish and one American dish."),
       fp("2. Present your favourite Malagasy dish in two sentences.")],
      [fp("Answer. Present."),
       pAns("E.A.: fish and chips; hamburger; correct two-sentence presentation.",
        ["fish and chips"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44");
}
function lessonS44() {
  return [
    p([run("LESSON OF THE DAY — SESSION 44", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("FOOD FROM HERE AND THERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Famous dishes from Anglophone countries:", { bold: true })], { after: 50 }),
    vocab("fish and chips", "fich annde tchips", "fish with fried potatoes — from England."),
    vocab("a full English breakfast", "e foule inngglich brèkfeuste", "eggs, bacon, sausages, beans — from England."),
    vocab("a hamburger", "e hammbeurgueur", "meat in a round bread — from the USA."),
    vocab("a hot dog", "e hote dog", "a sausage in a long bread — from the USA."),
    p("", { after: 60 }),
    p([run("To present a dish — the three steps:", { bold: true })], { after: 50 }),
    bullet([run("1. The name: ", { bold: true, color: C.GREEN }), run("This dish is rice with greens and zebu meat.", { bold: true, color: C.BLUE })]),
    bullet([run("2. What is in it: ", { bold: true, color: C.GREEN }), run("It has rice, meat and vegetables.", { bold: true, color: C.BLUE })]),
    bullet([run("3. The taste: ", { bold: true, color: C.GREEN }), run("It is tasty and a little salty. What a delicious dish!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("CURIOUS AND PROUD", [
      bullet([run("Curious: "), run("I’d like to try fish and chips!", { bold: true, color: C.BLUE })]),
      bullet([run("Proud: "), run("You should try our rice and beans — it is delicious!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- texte de lecture ----------
function tovoTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("TOVO TRIES BRITISH FOOD (reading text)", [
    L("Tovo is in a British restaurant. He loves rice and beans, but he is excited to try British food. One day, his friend Jack gives him fish and chips. Tovo likes the chips but is not sure about the fish. “It tastes different, but I like trying new things,” Tovo says."),
    L("The next day, Jack makes a full English breakfast with eggs, bacon, sausages, and beans. Tovo likes the eggs and toast. He is happy to try something new. “It’s fun to try different foods,” Tovo says. “I don’t always like everything, but I enjoy trying.”"),
    L("Tovo learns that it’s good to try new foods. He likes British dishes, but he also loves Malagasy food."),
  ]);
}

// ---------- S45 — Reading (1): gist ----------
function ficheS45() {
  const meta = META("Reading (1) — “Tovo tries British food”: the gist",
    "By the end of the lesson, learners will be able to guess the content of a text from its title and find its gist.",
    "15 / 19", "reading text (in the book)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name two dishes from Anglophone countries."),
       fp("2. Present a Malagasy dish in one sentence.")],
      [fp("Answer."),
       fp("E.A.: fish and chips, hamburger; correct sentence.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: the title is “Tovo tries British food”. Guess the content of the text from its title!")],
      [fp("Guess."),
       fp("E.A.: a Malagasy boy tastes food from England.")],
      "Prediction", "Text"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ Tovo’s story. By the end of this lesson, you will find its gist and check your prediction!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the text once. What is the main idea?")],
      [fp("Read. Answer."),
       fp("E.A.: it is good to try new foods — Tovo enjoys trying.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Share to class: is your prediction correct?"),
       fp("Who are the two people in the text? What food do they try on each day?")],
      [fp("Check. Answer."),
       fp("E.A.: Tovo and Jack; day 1 fish and chips, day 2 full English breakfast.")],
      "Whole-class work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So the gist in one sentence: Tovo tries British food with his friend Jack and learns that it is fun and good to try new things.")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the text aloud, one sentence per pupil. The class follows and helps.")],
      [fp("Read aloud."),
       pAns("E.A.: clear reading of the whole text.",
        ["clear reading"], { size: SZ.FICHE })],
      "Reading aloud", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In one sentence: what is the text about?"),
       fp("2. What does Jack make on the second day?")],
      [fp("Answer."),
       pAns("E.A.: Tovo tries British food and enjoys trying new things; a full English breakfast.",
        ["a full English breakfast"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}
function lessonS45() {
  return [
    p([run("LESSON OF THE DAY — SESSION 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: “TOVO TRIES BRITISH FOOD”", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    tovoTextBox(),
    p("", { after: 60 }),
    p([run("The gist (the main idea):", { bold: true })], { after: 50 }),
    bullet([run("It is "), run("good and fun to try new foods", { bold: true, color: C.BLUE }), run(" — and we can still love our own food!")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_tovo.png", label: "“Tovo tries British food” — listen and read along", url: AUDIO.tovo }], COLOR),
  ];
}

// ---------- S46 — Reading (2): details + vocabulary ----------
function ficheS46() {
  const meta = META("Reading (2) — details, inference and new words",
    "By the end of the lesson, learners will be able to infer information from the text and use its new words.",
    "16 / 19", "reading text (in the book), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of Tovo’s story?"),
       fp("2. Who is Jack?")],
      [fp("Answer."),
       fp("E.A.: it is good to try new foods; Tovo’s friend.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Books closed! Quick quiz: what does Tovo like in the fish and chips? And in the breakfast?")],
      [fp("Answer from memory."),
       fp("E.A.: the chips; the eggs and toast.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we read BETWEEN the lines: details, inference and new words!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Detail questions: 1. Where is Tovo? 2. What does Tovo love (from home)? 3. Is he sure about the fish?")],
      [fp("Read. Answer."),
       fp("E.A.: in a British restaurant; rice and beans; no, he is not sure.")],
      "Detailed reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Inference questions — think! 1. Is Tovo courageous with food? How do you know? 2. Does he forget Malagasy food? 3. What would Tovo say about a new dish tomorrow?")],
      [fp("Infer. Justify."),
       fp("E.A.: yes — he tries even when he is not sure; no — he also loves Malagasy food; “I’d like to try it!”")],
      "Inference", "Text"),
    stepRow(["5. Synthesis"],
      [fp("New words from the text: excited, to try, different, fun, to learn. Make one sentence with each.")],
      [fp("Write the words. Make sentences."),
       fp("E.A.: I am excited to try…; it tastes different…")],
      "Vocabulary work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Opinion time: Do you think it is good to try new foods? Use I think… / I don’t think so (Unit 1!).")],
      [fp("Give opinions."),
       pAns("E.A.: Yes, I do! I think it is fun — like Tovo!",
        ["I think"], { size: SZ.FICHE })],
      "Discussion", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Answer: why is Tovo happy on the second day?"),
       fp("2. Make one sentence with “to try”.")],
      [fp("Answer. Write."),
       pAns("E.A.: because he tries something new; I like trying new fruits.",
        ["trying"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}
function lessonS46() {
  return [
    p([run("LESSON OF THE DAY — SESSION 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("BETWEEN THE LINES — NEW WORDS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("My new words from the text:", { bold: true })], { after: 50 }),
    vocab("excited", "iksaïtide", "very happy about something coming: Tovo is excited to try."),
    vocab("to try", "tou traï", "to test something new: I like trying new things."),
    vocab("different", "difreunnte", "not the same: it tastes different."),
    vocab("fun", "feune", "it gives joy: it’s fun to try different foods!"),
    vocab("to learn", "tou leurne", "Tovo learns that it’s good to try."),
    p("", { after: 60 }),
    p([run("I answer with full sentences:", { bold: true })], { after: 50 }),
    bullet([run("Where is Tovo? — "), run("He is in a British restaurant.", { bold: true, color: C.BLUE })]),
    bullet([run("Is he sure about the fish? — "), run("No, he is not sure, but he tries it!", { bold: true, color: C.BLUE })]),
    bullet([run("Does he forget Malagasy food? — "), run("No! He also loves Malagasy food.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("READING BETWEEN THE LINES (inference)", [
      p([run("The text does not SAY “Tovo is courageous”… but I can INFER it: he tries the fish even when he is not sure!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
  ];
}

// ---------- S47 — Reading (3): fluent reading ----------
function ficheS47() {
  const meta = META("Reading (3) — reading fluently, with good pronunciation",
    "By the end of the lesson, learners will be able to read the text fluently, paying attention to pronunciation.",
    "17 / 19", "reading text, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Make a sentence with “excited”."),
       fp("2. What does Tovo learn at the end?")],
      [fp("Answer."),
       fp("E.A.: correct sentence; that it’s good to try new foods.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to the audio of the text once, books open: follow with your finger!")],
      [fp("Listen and follow.")], "Audio", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today, we polish our READING VOICE: clear sounds, good rhythm, lively dialogue lines!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Spot the difficult words: British, excited, sausages, breakfast, delicious. Repeat them after the audio, slowly then fast.")],
      [fp("Repeat the difficult words.")],
      "Repetition drill", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The reading rules: small pause at the comma, big pause at the full stop; the voice becomes Tovo’s voice for “It tastes different, but I like trying new things”!")],
      [fp("Apply the rules on one paragraph.")],
      "Whole-class work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("A fluent reader = clear words + right pauses + a lively voice for the dialogue lines.")],
      [fp("Repeat the three secrets.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Reading relay: each pupil reads two sentences, the next continues. Then the champions read a full paragraph alone!")],
      [fp("Read in relay. Read alone."),
       pAns("E.A.: fluent reading, correct pronunciation of the difficult words.",
        ["fluent reading"], { size: SZ.FICHE })],
      "Reading relay", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Read the last paragraph alone, fluently."),
       fp("Pronounce: British — sausages — delicious.")],
      [fp("Read. Pronounce."),
       pAns("E.A.: fluent paragraph; correct pronunciation.",
        ["fluent paragraph"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}
function lessonS47() {
  return [
    p([run("LESSON OF THE DAY — SESSION 47", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING FLUENTLY — MY THREE SECRETS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE SECRETS OF A GOOD READER", [
      bullet([run("1. Clear words: ", { bold: true, color: C.GREEN }), run("I pronounce every word, even the difficult ones.")]),
      bullet([run("2. Right pauses: ", { bold: true, color: C.GREEN }), run("small pause at the comma (,), big pause at the full stop (.).")]),
      bullet([run("3. Lively voice: ", { bold: true, color: C.GREEN }), run("for the dialogue lines, I BECOME the person!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The difficult words of the text:", { bold: true })], { after: 50 }),
    bullet([...kw("British", "britich")]),
    bullet([...kw("excited", "iksaïtide")]),
    bullet([...kw("sausages", "sossidjiz")]),
    bullet([...kw("breakfast", "brèkfeuste")]),
    bullet([...kw("delicious", "dilicheuss")]),
    p("", { after: 60 }),
    p([run("My actor line — I read it with Tovo’s voice:", { bold: true })], { after: 50 }),
    bullet([run("“It tastes different, but I like trying new things!”", { italic: true, color: C.BLUE, size: SZ.BODY })]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u3_tovo.png", label: "The model reading — listen and imitate", url: AUDIO.tovo }], COLOR),
  ];
}

// ---------- S48 — Writing (1) ----------
function ficheS48() {
  const meta = META("Writing (1) — sentences about food",
    "By the end of the lesson, learners will be able to write correct sentences about food, likes and dislikes.",
    "18 / 19", "copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the three secrets of a good reader."),
       fp("2. Spell “delicious”.")],
      [fp("Answer."),
       fp("E.A.: clear words, right pauses, lively voice; D-E-L-I-C-I-O-U-S.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: orally share the food you dislike the most — and say why! (“I hate eating…, it is too bitter!”)")],
      [fp("Share orally.")], "Personalisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we WRITE about food: our likes, our dislikes, our habits — with perfect sentences!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model sentences: “I love eating mangoes because they are sweet.” — “I never drink black coffee because it is bitter.” Find the pattern.")],
      [fp("Observe. Find."),
       fp("E.A.: feeling verb + -ing + because + taste.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The checkpoints: -ing after like/love/hate; -s with he/she; frequency word before the verb; capital letter and full stop.")],
      [fp("List the checkpoints.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("A good food sentence = feeling or habit + food + because + taste. Short, true and correct!")],
      [fp("Repeat the formula.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Write five sentences: two likes, one dislike, one habit with a frequency word, one exclamation (What a…!). Peer correct with your neighbour.")],
      [fp("Write. Peer correct."),
       pAns("E.A.: five correct sentences with -ing, -s, frequency and What a…!",
        ["five correct sentences"], { size: SZ.FICHE })],
      "Peer correction", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Correct these sentences: 1. “she love eating rice” 2. “i drink never coffee”")],
      [fp("Correct."),
       pAns("E.A.: She loves eating rice. — I never drink coffee.",
        ["She loves eating rice."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(48, TOTAL, meta, rows, "s48");
}
function lessonS48() {
  return [
    p([run("LESSON OF THE DAY — SESSION 48", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING PERFECT FOOD SENTENCES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("MY FOUR CHECKPOINTS", [
      bullet([run("-ING after the feeling verbs: ", { bold: true }), run("I love eatING mangoes.", { bold: true, color: C.BLUE })]),
      bullet([run("-S with he/she: ", { bold: true }), run("She loveS rice.", { bold: true, color: C.BLUE })]),
      bullet([run("Frequency word BEFORE the verb: ", { bold: true }), run("I never drink coffee.", { bold: true, color: C.BLUE })]),
      bullet([run("Capital letter + full stop: ", { bold: true }), run("Every sentence, every time!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The sentence formula:", { bold: true })], { after: 50 }),
    bullet([run("feeling/habit + food + because + taste", { bold: true, color: C.GREEN, size: 30 })]),
    p("", { after: 40 }),
    p([run("Model sentences:", { bold: true })], { after: 50 }),
    bullet([run("I love eating mangoes because they are sweet.", { italic: true })]),
    bullet([run("I hate drinking black coffee because it is bitter.", { italic: true })]),
    bullet([run("I usually have rice and beans for lunch.", { italic: true })]),
    bullet([run("What a delicious meal!", { italic: true })]),
    p("", { after: 60 }),
    p([run("The mistake hunt:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([run("she love eating rice ✗  →  "), run("She loves eating rice. ✓", { bold: true, color: C.BLUE })]),
    bullet([run("i drink never coffee ✗  →  "), run("I never drink coffee. ✓", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S49 — Writing (2) ----------
function ficheS49() {
  const meta = META("Writing (2) — my short production about common food",
    "By the end of the lesson, learners will be able to write a short production about common food and correct each other’s writing.",
    "19 / 19", "copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the four checkpoints."),
       fp("2. Say one perfect food sentence.")],
      [fp("Answer."),
       fp("E.A.: -ing, -s, frequency, capital+stop; correct sentence.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Read Tovo’s text once more: it will be our model — short sentences, true feelings!")],
      [fp("Read the model.")], "Whole-class work", "Text"),
    stepRow(["2. Presentation"],
      [fp("Today, the final mission of Unit 3: write YOUR paragraph about food (5-6 sentences) — like a little Tovo story about you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The paragraph plan on the board: 1. my favourite food; 2. why (taste); 3. my habits (frequency); 4. one dislike; 5. one dish I’d like to try.")],
      [fp("Copy the plan.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write your five sentences following the plan. Check the grammar points: -ing, -s, frequency words, capital letters.")],
      [fp("Write. Self-check."),
       fp("E.A.: complete draft.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Post-writing: read each other’s writing and correct the mistakes kindly (peer correction). Two stars and one wish: two good things, one thing to improve!")],
      [fp("Exchange. Correct. Encourage."),
       fp("E.A.: corrected paragraphs.")],
      "Peer correction", "Copy-books"),
    stepRow(["6. Practice"],
      [fp("Read out your paragraph to the class, loud and clear — with your reading secrets!")],
      [fp("Read out."),
       pAns("E.A.: My favourite food is rice with chicken. I love it because it is tasty. I usually eat it on Sundays. I don’t like bitter food. I’d like to try fish and chips!",
        ["My favourite food is"], { size: SZ.FICHE })],
      "Presentation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Hand in your final paragraph (5-6 sentences), checked and corrected.")],
      [fp("Hand in."),
       pAns("E.A.: correct final paragraph following the plan.",
        ["final paragraph"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}
function lessonS49() {
  return [
    p([run("LESSON OF THE DAY — SESSION 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FOOD PARAGRAPH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The paragraph plan — five sentences:", { bold: true })], { after: 50 }),
    bullet([run("1. My favourite food: ", { bold: true, color: C.GREEN }), run("My favourite food is…", { bold: true, color: C.BLUE })]),
    bullet([run("2. Why: ", { bold: true, color: C.GREEN }), run("I love it because it is… (sweet, tasty…)", { bold: true, color: C.BLUE })]),
    bullet([run("3. My habits: ", { bold: true, color: C.GREEN }), run("I usually eat it… / We often have…", { bold: true, color: C.BLUE })]),
    bullet([run("4. One dislike: ", { bold: true, color: C.GREEN }), run("I don’t like… because…", { bold: true, color: C.BLUE })]),
    bullet([run("5. My dream dish: ", { bold: true, color: C.GREEN }), run("I’d like to try…", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("A MODEL PARAGRAPH", [
      p([run("My favourite food is rice with chicken. I love it because it is really tasty. I usually eat it on Sundays with my family. I don’t like black coffee because it is too bitter. One day, I’d like to try fish and chips, like Tovo!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("PEER CORRECTION — TWO STARS AND ONE WISH", [
      bullet([run("⭐ Two stars: ", { bold: true }), run("two things I like in my friend’s paragraph.")]),
      bullet([run("🌠 One wish: ", { bold: true }), run("one kind idea to make it even better.")], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 3", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("COMMON FOOD"),
    sub("1. The food families"),
    bullet([run("vegetables — fruit — meat — snacks — drinks", { bold: true, color: C.BLUE }), run(" ; and rice and beans!")]),
    bullet([...kw("What colour is a mango? — It’s yellow.", "ouate keuleur iz e manggôou — its yèlôou")], { after: 100 }),
    sub("2. The three meals"),
    bullet([run("breakfast (morning) — lunch (noon) — dinner (evening)", { bold: true, color: C.BLUE })]),
    bullet([...kw("What’s for lunch?", "ouots fôr leunntch"), run(" — "), ...kw("a cup of tea, a glass of water, a piece of bread", "e keupe ov ti")], { after: 100 }),
    sub("3. The present simple — habits"),
    bullet([run("eat, drink, cook, taste + ", { bold: true }), run("he/she → verb-S", { bold: true, color: C.RED }), run(" : she drinks tea.")]),
    bullet([run("Frequency, before the verb: ", { bold: true }), run("always, usually, often, sometimes, never", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The tastes and the exclamatory form"),
    bullet([run("sweet (sugar) — salty (salt) — sour (tamarind) — bitter (black coffee)", { bold: true, color: C.BLUE })]),
    bullet([run("delicious, tasty — I’m hungry / I’m thirsty", { bold: true, color: C.BLUE })]),
    bullet([run("What + a/an + adjective + noun + ! ", { bold: true }), run("What a delicious meal!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Likes, dislikes, preferences"),
    bullet([run("love / like / enjoy / dislike / hate + verb-ING", { bold: true, color: C.BLUE }), run(" : I like eating bananas.")]),
    bullet([run("My favourite food is… — I prefer mangoes TO apples.", { bold: true, color: C.BLUE })]),
    bullet([run("Comparatives: ", { bold: true }), run("sweeter than, more bitter than", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Offering and quantities"),
    bullet([...kw("Would you like some rice? — Yes, please! / No, thank you.", "woud iou laïk seume raïss")]),
    bullet([run("some — a lot of — a little ; a cup of, a glass of, a bottle of, a plate of", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. Healthy food"),
    bullet([run("The pyramid: a lot of rice and vegetables, some fish and milk, only a little sugar — "), run("healthy!", { bold: true, color: C.GREEN })], { after: 140 }),
    audioBox([
      { qr: "qr_t7_u3_food.png", label: "Common food and the tastes", url: AUDIO.food },
      { qr: "qr_t7_u3_lunch.png", label: "“What’s for lunch?” — Jeff and Joe", url: AUDIO.lunch },
      { qr: "qr_t7_u3_fruit.png", label: "At the fruit market", url: AUDIO.fruit },
      { qr: "qr_t7_u3_tovo.png", label: "“Tovo tries British food”", url: AUDIO.tovo },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the taste: 1. sugar 2. tamarind 3. salt 4. black coffee.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. She … (eat) rice every day. 2. I like … (cook). 3. We … (drink) milk. 4. He loves … (taste) new dishes.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put the frequency word in place: 1. I eat fruit (often). 2. She drinks coffee (never). 3. We have bananas as dessert (usually). 4. They are hungry at noon (always).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete: 1. I prefer mangoes … apples. 2. Mangoes are … (sweet) than apples. 3. Would you like … rice? 4. Just … little salt, please.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write an exclamation for: a delicious meal — a salty soup — a sweet mango — a bitter coffee.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: sweet — sour — salty — bitter (1 point each).", ["sweet"]),
    pAns("Exercise 2: 1. eats  2. cooking  3. drink  4. tasting (1 point each).", ["eats", "cooking"]),
    pAns("Exercise 3: I often eat fruit. She never drinks coffee. We usually have bananas as dessert. They are always hungry at noon. (1 point each).", ["I often eat fruit."]),
    pAns("Exercise 4: 1. to  2. sweeter  3. some  4. a (1 point each).", ["sweeter"]),
    pAns("Exercise 5: What a delicious meal! What a salty soup! What a sweet mango! What a bitter coffee! (1 point each).", ["What a delicious meal!"]),
  ];
}

// ---------- S50 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s50", "SESSION 50 / 99", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: COMMON FOOD", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name two foods in each family: vegetables, fruit, meat, drinks."),
    pAns("E.A.: carrots, onions; bananas, mangoes; chicken, beef; water, milk.", ["carrots"]),
    p("2. Name the three meals and ask the magic question for each."),
    pAns("E.A.: breakfast, lunch, dinner — What’s for breakfast/lunch/dinner?", ["What’s for lunch?"]),
    p("3. Conjugate: I eat / she … ; we drink / he … ; they cook / it …"),
    pAns("E.A.: she eats — he drinks — it cooks (the -s of he/she/it!).", ["she eats"]),
    p("4. Give the four tastes with one example each."),
    pAns("E.A.: sweet (sugar), salty (salt), sour (tamarind), bitter (black coffee).", ["sour (tamarind)"]),
    p("5. In the dialogue: what’s for lunch at Joe’s home? What’s for dessert?"),
    pAns("E.A.: chicken and potatoes; apples.", ["chicken and potatoes"]),
    p("6. Say the frequency ladder and make one true sentence."),
    pAns("E.A.: always, usually, often, sometimes, never; I usually have rice.", ["usually"]),
    p("7. Say one like, one dislike (with -ing) and your favourite food."),
    pAns("E.A.: I like eating…; I hate drinking…; My favourite food is…", ["I like eating"]),
    p("8. What do you prefer, mangoes or apples? Compare their tastes!"),
    pAns("E.A.: I prefer mangoes to apples — mangoes are sweeter!", ["sweeter"]),
    p("9. Offer me some tea; I refuse politely; offer again with rice!"),
    pAns("E.A.: Would you like some tea? — No, thank you. — Would you like some rice? — Yes, please!", ["Would you like some"]),
    p("10. In Tovo’s story: what does he try? what does he learn?"),
    pAns("E.A.: fish and chips, a full English breakfast; that it’s good to try new foods.", ["fish and chips"]),
  ];
}

// ---------- S51 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s51", "SESSION 51 / 99", { bold: true, size: 28, after: 60 }),
    p([run("T7 TEST PAPER — UNIT 3: COMMON FOOD", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: present your favourite dish (name, ingredients, taste) and offer it to me politely.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. My sister … (drink) tea every morning. 2. I enjoy … (eat) mangoes. 3. We … (have) lunch at noon. 4. Joe … (love) chicken.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Write the taste: lemons are …; cakes are …; sea water is …; black coffee is … .")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Write the questions for these answers: 1. “It’s yellow.” 2. “Chicken and potatoes!” 3. “I prefer mangoes.” 4. “Yes, please!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write your food paragraph (5 sentences): favourite food + why + habit + dislike + a dish you’d like to try.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: name + ingredients + taste + Would you like some…? (1 point per element).", ["Would you like some…?"]),
    pAns("Exercise 2: 1. drinks  2. eating  3. have  4. loves (1 point each).", ["drinks"]),
    pAns("Exercise 3: sour — sweet — salty — bitter (1 point each).", ["sour"]),
    pAns("Exercise 4: 1. What colour is it? 2. What’s for lunch? 3. What do you prefer, mangoes or apples? 4. Would you like some…? (1 point each).", ["What’s for lunch?"]),
    pAns("Exercise 5: five correct sentences following the plan (1 point each, max 4).", ["five correct sentences"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...ficheS32(), pageBreak(), ...lessonS32(), pageBreak(),
    ...ficheS33(), pageBreak(), ...lessonS33(), pageBreak(),
    ...ficheS34(), pageBreak(), ...lessonS34(), pageBreak(),
    ...ficheS35(), pageBreak(), ...lessonS35(), pageBreak(),
    ...ficheS36(), pageBreak(), ...lessonS36(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...ficheS39(), pageBreak(), ...lessonS39(), pageBreak(),
    ...ficheS40(), pageBreak(), ...lessonS40(), pageBreak(),
    ...ficheS41(), pageBreak(), ...lessonS41(), pageBreak(),
    ...ficheS42(), pageBreak(), ...lessonS42(), pageBreak(),
    ...ficheS43(), pageBreak(), ...lessonS43(), pageBreak(),
    ...ficheS44(), pageBreak(), ...lessonS44(), pageBreak(),
    ...ficheS45(), pageBreak(), ...lessonS45(), pageBreak(),
    ...ficheS46(), pageBreak(), ...lessonS46(), pageBreak(),
    ...ficheS47(), pageBreak(), ...lessonS47(), pageBreak(),
    ...ficheS48(), pageBreak(), ...lessonS48(), pageBreak(),
    ...ficheS49(), pageBreak(), ...lessonS49(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can name the common food and its colours.",
      "I can talk about the three meals: What’s for lunch?",
      "I can use the present simple with the -s of he/she, and the frequency words.",
      "I can describe the tastes: sweet, salty, sour, bitter — What a delicious meal!",
      "I can say my likes and dislikes with verb-ing, and my favourite food.",
      "I can prefer and compare: I prefer mangoes to apples — they are sweeter!",
      "I can offer food politely: Would you like some rice?",
      "I can read and write about food from here and there.",
    ], "Well done! See you in Unit 4: FAMILY!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.bullet = bullet;
module.exports.vocab = vocab;
module.exports.box = box;
module.exports.lunchDialogueBox = lunchDialogueBox;
module.exports.fruitDialogueBox = fruitDialogueBox;
module.exports.META = META;
module.exports.SHADE = SHADE;
