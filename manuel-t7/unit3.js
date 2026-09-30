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
    ...ficheS42(), pageBreak(), ...lessonS42(),
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
