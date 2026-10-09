// T10 — UNIT 8 — RESTAURANTS AND MALAGASY CUISINE (6 séances + révision + test) — Sessions 62 à 69 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1E8449"; // vert bredes
const SHADE = "D5F5E3";
const TOTAL = 88;
const AUDIO = {
  restaurant: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 8 — RESTAURANTS AND MALAGASY CUISINE", title, slo,
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
function dialogueBox() {
  const line = (who, txt) => pr([run(who + ": ", { bold: true, color: COLOR }), run(txt)], { after: 40 });
  return box("AT THE MALAGASY RESTAURANT (listening dialogue)", [
    line("Waitress", "Good evening, sir! Welcome to Chez Mama Vola. Here is the menu."),
    line("Mr Brown", "Thank you! Mmm… everything smells wonderful! What is romazava, please?"),
    line("Waitress", "It is our national dish, sir: boiled zebu meat with green leaves. It tastes a little spicy — and so good!"),
    line("Mr Brown", "How much is it?"),
    line("Waitress", "Eight thousand ariary, sir."),
    line("Mr Brown", "Eight thousand ariary? That’s fine! And the fish — is it grilled or fried?"),
    line("Waitress", "Grilled, sir, with a little garlic. It smells amazing."),
    line("Mr Brown", "Perfect. I’ll have the romazava with some rice, and a glass of ranovola, please."),
    line("Waitress", "Very good. Would you like some dessert? Our koba is sweet and soft."),
    line("Mr Brown", "Yes, please! A small piece."),
    line("Waitress", "And would you like some coffee?"),
    line("Mr Brown", "No, thank you. Coffee keeps me awake at night."),
    line("Waitress", "Here is your dish, sir. Enjoy your meal!"),
    line("Mr Brown", "Thank you… Mmm! It tastes delicious. The bill, please!"),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE KINGDOM OF RICE", [
    p("Malagasy cuisine is simple, generous and full of history. Its king is the rice: Malagasy people eat it in the morning, at noon and in the evening, and the language itself says “to eat rice” for “to have a meal”.", { after: 40 }),
    p("Around the king, there are famous princes. Romazava, the national dish, is a bowl of boiled zebu meat with green leaves that pick the tongue a little. Ravitoto is pork cooked with crushed cassava leaves — dark green, soft and strong. On the coast, people prefer grilled fish with coconut, and in the markets you find mofo gasy, the small golden rice cakes of the morning.", { after: 40 }),
    p("Where do people eat all this? At home first — but also at the hotely, the little restaurant of the road. At the hotely, the menu is short, the plate is full and the price is kind. Drivers, students and ministers sit at the same long table: in front of a good vary be menaka, everybody is equal.", { after: 40 }),
    p("Foreign visitors sometimes arrive with careful eyes and leave with a happy stomach. They learn one sweet lesson: to know a country, open your mouth — not only to speak, but to taste!", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 8 — RESTAURANTS AND MALAGASY CUISINE", COLOR, "unit8"),
    p("", { after: 100 }),
    p([run("It smells wonderful!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u8_restaurant.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name and describe the Malagasy dishes: romazava, ravitoto, koba;"),
    p("• use the sensory verbs: it looks good, it smells wonderful, it tastes sweet;"),
    p("• cook with grammar: grilled, fried, boiled, roasted;"),
    p("• count the uncountable: some rice, a bowl of soup, a little salt;"),
    p("• order in a restaurant: I’ll have the romazava, please!;"),
    p("• clarify a price with the rising intonation: Eight thousand ariary?;"),
    p("• accept and decline an offer: Yes, please! / No, thank you;"),
    p("• find the topic sentence of a paragraph;"),
    p("• create a real menu — and present it in a gallery walk!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("One day, an English-speaking visitor will sit in a hotely of your town, open the menu and look for help. That day, YOU will be the bridge between romazava and the world — with a smile and good English!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u8_restaurant.png", label: "At the Malagasy restaurant — listen and repeat", url: AUDIO.restaurant },
    ], COLOR),
  ];
}

// ---------- S62 — Malagasy dishes + sensory verbs ----------
function ficheS62() {
  const meta = META("The Malagasy dishes — the five senses of food",
    "By the end of the lesson, learners will be able to name Malagasy dishes and describe their taste, colour and category with sensory verbs and adjectives.",
    "1 / 6", "food pictures, realia (a lemon, a piece of sugar cane if possible!)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How do you get to Toamasina — and how long does it take?"),
       fp("2. One sentence with wherever.")],
      [fp("Answer."),
       fp("E.A.: By bus, about eight hours. — Wherever I go, I take water!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Name some Malagasy dishes — all you know! I write them on the board: romazava? ravitoto? mofo gasy? koba? Which one is your favourite?")],
      [fp("Name the dishes."),
       fp("E.A.: romazava, ravitoto, vary amin’anana, koba…")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The five senses of food ». By the end of this lesson, your English will see, smell and taste!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The food pictures: describe each dish — its colour (green, golden, white), its category (meat? vegetable? dessert? drink?). Then the three magic verbs: it LOOKS good (the eyes), it SMELLS wonderful (the nose), it TASTES sweet (the tongue!).")],
      [fp("Describe. Repeat."),
       fp("E.A.: Ravitoto is dark green, it’s a meat dish, it smells strong!")],
      "Using visual aids", "Food pictures"),
    stepRow(["4. Analysis"],
      [fp("The taste adjectives: sweet (sugar!), salty (salt!), spicy (it picks the tongue — sakay!), sour (the lemon face!), bitter (strong coffee), delicious (the winner!). Taste test with realia or imagination: the lemon is…? the sugar cane is…? the sakay is…?")],
      [fp("Taste. Say."),
       fp("E.A.: sour! sweet! spicy!")],
      "Contextualisation", "Realia"),
    stepRow(["5. Synthesis"],
      [fp("So: the dishes (romazava, ravitoto, mofo gasy, koba…), the three sensory verbs (looks, smells, tastes) and the taste family (sweet, salty, spicy, sour, bitter, delicious).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The mystery dish: a student thinks of a dish and gives three sensory clues. The class guesses! It is golden, it smells like morning, it tastes sweet…")],
      [fp("Give clues. Guess."),
       pAns("E.A.: It is golden, you buy it in the morning, it tastes sweet… — Mofo gasy!",
        ["Mofo gasy!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The three sensory verbs with one example each."),
       fp("2. The taste: the lemon is…, the koba is…, the sakay is… .")],
      [fp("Answer."),
       pAns("E.A.: It looks good, it smells wonderful, it tastes delicious. — sour, sweet, spicy!",
        ["sour, sweet, spicy!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62");
}
function lessonS62() {
  return [
    p([run("LESSON OF THE DAY — SESSION 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MALAGASY DISHES — THE FIVE SENSES OF FOOD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u8_dishes.png", 420, 768 / 1376),
    p([run("Our famous dishes:", { bold: true })], { after: 30 }),
    vocab("romazava", "", "the national dish — zebu meat and green leaves"),
    vocab("ravitoto", "", "pork with crushed cassava leaves"),
    vocab("mofo gasy", "", "the golden rice cakes of the morning"),
    vocab("koba", "", "the sweet cake of banana and peanuts"),
    p("", { after: 60 }),
    box("THE THREE SENSORY VERBS", [
      bullet([run("The eyes: ", { bold: true }), run("It looks good!", { bold: true, color: C.BLUE }), run("  [itte loukse goude]", { italic: true, color: C.GRAY })]),
      bullet([run("The nose: ", { bold: true }), run("It smells wonderful!", { bold: true, color: C.BLUE }), run("  [itte smèlze ouonndeurfoul]", { italic: true, color: C.GRAY })]),
      bullet([run("The tongue: ", { bold: true }), run("It tastes sweet!", { bold: true, color: C.BLUE }), run("  [itte téistse souite]", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The taste family:", { bold: true })], { after: 30 }),
    vocab("sweet", "souite", "like sugar — the koba is sweet"),
    vocab("salty", "solti", "like the sea — dried fish is salty"),
    vocab("spicy", "spaïci", "it picks the tongue — sakay!"),
    vocab("sour", "saoueur", "the lemon face!"),
    vocab("bitter", "biteur", "like very strong coffee"),
    vocab("delicious", "dilicheusse", "the winner of all tastes!"),
  ];
}

// ---------- S63 — Past participles as adjectives ----------
function ficheS63() {
  const meta = META("Cooking with grammar — grilled, fried, boiled",
    "By the end of the lesson, learners will be able to describe how food is cooked using past participles as adjectives.",
    "2 / 6", "food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three sensory verbs."),
       fp("2. The taste of the lemon? of the koba?")],
      [fp("Answer."),
       fp("E.A.: looks, smells, tastes — sour, sweet.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Kitchen mime! I mime cooking actions: turning fish on the fire, shaking the pan with oil, water boiling in the pot… Guess the action in any English!")],
      [fp("Watch. Guess."),
       fp("E.A.: fire! oil! hot water!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Cooking with grammar ». By the end of this lesson, one little word will tell the whole kitchen story of a dish!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The cooking verbs: to grill (on the fire), to fry (in the oil), to boil (in the water), to roast (in the oven), to steam (in the vapour). Listen and mime each one!")],
      [fp("Listen. Mime. Repeat."),
       fp("E.A.: grill, fry, boil, roast, steam.")],
      "Repetition drill", "Food pictures"),
    stepRow(["4. Analysis"],
      [fp("The magic of the past participle: verb + -ed becomes an ADJECTIVE! to grill → GRILLED fish; to fry → FRIED chicken; to boil → BOILED zebu meat (hello romazava!); to roast → ROASTED peanuts; to steam → STEAMED rice. The adjective sits BEFORE the noun — and tells how it was cooked!")],
      [fp("Observe. Build."),
       fp("E.A.: grilled fish, fried chicken, boiled meat, roasted peanuts…")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: five cooking verbs, and their -ed children that work as adjectives: grilled, fried, boiled, roasted, steamed. One word = one recipe!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The menu builder in pairs: combine a cooking word and a food — how many true Malagasy plates can you build in two minutes? Grilled fish? Boiled cassava? Fried banana?")],
      [fp("Combine."),
       pAns("E.A.: grilled zebu, boiled rice, fried mofo gasy, roasted peanuts, steamed vegetables!",
        ["roasted peanuts"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Transform: to grill + fish; to boil + meat; to fry + banana."),
       fp("2. In the romazava, is the meat grilled or boiled?")],
      [fp("Answer."),
       pAns("E.A.: grilled fish, boiled meat, fried banana — boiled!",
        ["grilled fish"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63");
}
function lessonS63() {
  return [
    p([run("LESSON OF THE DAY — SESSION 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COOKING WITH GRAMMAR — GRILLED, FRIED, BOILED", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The cooking verbs:", { bold: true })], { after: 30 }),
    vocab("to grill", "tou grile", "on the fire"),
    vocab("to fry", "tou fraï", "in the oil"),
    vocab("to boil", "tou boïle", "in the water"),
    vocab("to roast", "tou rôouste", "in the oven"),
    vocab("to steam", "tou stime", "in the vapour"),
    p("", { after: 60 }),
    box("THE MAGIC OF THE PAST PARTICIPLE", [
      bullet([run("verb + -ed → an adjective that tells the recipe!", { bold: true })]),
      bullet([run("grilled fish — fried chicken — boiled zebu meat — roasted peanuts — steamed rice.", { bold: true, color: C.BLUE })]),
      bullet([run("It sits BEFORE the noun: a plate of ", { bold: true }), run("grilled", { bold: true, color: C.BLUE }), run(" fish, please!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE KITCHEN OF OUR DISHES", [
      bullet([run("Romazava = BOILED zebu meat with green leaves.", { bold: true, color: C.BLUE })]),
      bullet([run("Coast style = GRILLED fish with coconut.", { bold: true, color: C.BLUE })]),
      bullet([run("Mofo gasy = FRIED rice cakes — golden and sweet!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S64 — Count / non-count + quantity ----------
function ficheS64() {
  const meta = META("Count and non-count — the expressions of quantity",
    "By the end of the lesson, learners will be able to use count and non-count nouns with the right expressions of quantity.",
    "3 / 6", "realia: a cup, a bottle, grains of rice");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Transform: to fry + banana; to steam + rice."),
       fp("2. How is the meat of the romazava cooked?")],
      [fp("Answer."),
       fp("E.A.: fried banana, steamed rice — boiled.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The impossible mission: count the bananas of the basket (easy: one, two, three!). Now count… the rice! Grain by grain? Impossible! Some things can be counted, others cannot.")],
      [fp("Try. Laugh. Understand."),
       fp("E.A.: bananas yes — rice no!")],
      "Whole-class work", "Realia"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Count and non-count ». By the end of this lesson, you will order exactly the right quantity — not a grain more!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Two families of nouns. COUNT: a banana, two eggs, three tomatoes (they take a/an and the plural). NON-COUNT: rice, water, meat, sugar, salt (no a/an, no plural — we never say “a rice”!).")],
      [fp("Listen. Classify the board words."),
       fp("E.A.: egg → count; water → non-count…")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The quantity tool box: SOME rice (positive), ANY water? (question/negative), A LOT OF vegetables, A LITTLE salt (non-count), A FEW eggs (count!). And the containers that count the uncountable: a bowl of soup, a glass of ranovola, a cup of coffee, a plate of rice, a kilo of meat!")],
      [fp("Observe. Build."),
       fp("E.A.: a little salt, a few eggs, a bowl of romazava!")],
      "Contextualisation of grammar", "Realia"),
    stepRow(["5. Synthesis"],
      [fp("So: count nouns (a banana, a few eggs) and non-count nouns (rice, a little salt) — and the containers that save us: a bowl of, a glass of, a plate of!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The market order game: order your family lunch at the market with five quantities: some…, a few…, a little…, a kilo of…, a bottle of…!")],
      [fp("Order."),
       pAns("E.A.: Some rice, a few tomatoes, a little salt, a kilo of zebu meat and a bottle of oil, please!",
        ["a kilo of zebu meat"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count or non-count: egg, water, tomato, sugar?"),
       fp("2. A little or a few: … salt; … bananas."),
       fp("3. One container for the soup, one for the coffee.")],
      [fp("Answer."),
       pAns("E.A.: count, non-count, count, non-count — a little salt, a few bananas — a bowl of soup, a cup of coffee.",
        ["a little salt, a few bananas"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64");
}
function lessonS64() {
  return [
    p([run("LESSON OF THE DAY — SESSION 64", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COUNT AND NON-COUNT — THE QUANTITIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE TWO FAMILIES OF NOUNS", [
      bullet([run("COUNT ", { bold: true, color: C.BLUE }), run("— you can count them: "), run("a banana, two eggs, three tomatoes.", { bold: true, color: C.BLUE })]),
      bullet([run("NON-COUNT ", { bold: true, color: C.BLUE }), run("— impossible to count: "), run("rice, water, meat, sugar, salt.", { bold: true, color: C.BLUE }), run(" Never “a rice”!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE QUANTITY TOOL BOX", [
      bullet([run("some ", { bold: true, color: C.BLUE }), run("— positive: I’ll have some rice.")]),
      bullet([run("any ", { bold: true, color: C.BLUE }), run("— question / negative: Is there any water? There isn’t any koba left!")]),
      bullet([run("a lot of ", { bold: true, color: C.BLUE }), run("— big quantity: a lot of vegetables.")]),
      bullet([run("a little ", { bold: true, color: C.BLUE }), run("— small, NON-COUNT: a little salt, a little sugar.")]),
      bullet([run("a few ", { bold: true, color: C.BLUE }), run("— small, COUNT: a few eggs, a few tomatoes.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE CONTAINERS THAT COUNT THE UNCOUNTABLE", [
      bullet([run("a bowl of soup — a glass of ranovola — a cup of coffee — a plate of rice — a kilo of meat — a bottle of oil.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S65 — Listening: at the restaurant + role play ----------
function ficheS65() {
  const meta = META("Listening: at the Malagasy restaurant",
    "By the end of the lesson, learners will be able to identify ordering and offering expressions in a waiter-customer dialogue and role-play it in a new context.",
    "4 / 6", "audio dialogue (QR code page 1 of the unit) or teacher reading");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. A little or a few: … sugar; … mofo gasy."),
       fp("2. One container + food.")],
      [fp("Answer."),
       fp("E.A.: a little sugar, a few mofo gasy — a bowl of romazava!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Choose one local food and describe it in three ways: taste, colour, category. Two volunteers!")],
      [fp("Describe."),
       fp("E.A.: Koba is sweet, brown and it’s a dessert!")],
      "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « At the Malagasy restaurant » — Mr Brown, an English customer, discovers romazava! By the end of this lesson, you will serve and order like professionals.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening, 1st listening)"],
      [fp("Books closed! Gist questions: where are we? Who are the two speakers? What does Mr Brown eat at the end — and does he like it?")],
      [fp("Listen. Answer."),
       fp("E.A.: in a Malagasy restaurant; a waitress and an English customer; romazava — he loves it!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis (2nd listening + the expression hunt)"],
      [fp("Second listening with missions: (a) note the ORDERING expressions (I’ll have…, the bill please), (b) the OFFERING expressions (Would you like…?), (c) the answers (Yes, please! / No, thank you). And the special moment: when Mr Brown repeats « Eight thousand ariary? » — his voice goes UP! That is the rising intonation to clarify a price. Detail questions: how much is the romazava? Is the fish grilled or fried? What does he drink?")],
      [fp("Hunt. Answer. Repeat with the rising voice!"),
       pAns("E.A.: I’ll have…; Would you like some dessert?; Yes, please / No, thank you. 8 000 Ar — grilled — a glass of ranovola. Eight thousand ariary? ↗",
        ["Eight thousand ariary? ↗"], { size: SZ.FICHE })],
      "Repetition drill", "Audio"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("Retell the main idea of the conversation with your own words — two sentences. Then the tool box on the board: ordering / offering / accepting / declining / clarifying.")],
      [fp("Retell. Copy."),
       fp("E.A.: An English customer orders romazava in a hotely. He accepts the koba but declines the coffee!")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (role play!)"],
      [fp("Build up YOUR dialogue in a new context: a vegetarian customer? A customer with little money? A customer in a hurry? Write it fast (six lines), then role-play it in front of the class — waiter’s towel on the arm!")],
      [fp("Build. Role-play."),
       pAns("E.A.: Would you like some ravitoto? — Is there any meat in it? I don’t eat meat! — Then our vary amin’anana, with steamed vegetables! — Perfect, I’ll have that!",
        ["I’ll have that!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. One ordering expression, one offering expression, one way to decline politely."),
       fp("2. Why does the customer repeat the price with a rising voice?")],
      [fp("Answer."),
       pAns("E.A.: I’ll have the romazava, please. / Would you like some coffee? / No, thank you. — To clarify, to be sure he heard well!",
        ["No, thank you."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(65, TOTAL, meta, rows, "s65");
}
function lessonS65() {
  return [
    p([run("LESSON OF THE DAY — SESSION 65", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: AT THE MALAGASY RESTAURANT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    dialogueBox(),
    p("", { after: 60 }),
    box("THE RESTAURANT TOOL BOX", [
      bullet([run("Ordering: ", { bold: true }), run("I’ll have the romazava, please. The bill, please!", { bold: true, color: C.BLUE })]),
      bullet([run("Offering: ", { bold: true }), run("Would you like some dessert?", { bold: true, color: C.BLUE })]),
      bullet([run("Accepting: ", { bold: true }), run("Yes, please!", { bold: true, color: C.BLUE }), run("   Declining: ", { bold: true }), run("No, thank you.", { bold: true, color: C.BLUE })]),
      bullet([run("Clarifying the price — the voice goes UP: ", { bold: true }), run("Eight thousand ariary? ↗", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S66 — Reading: the kingdom of rice ----------
function ficheS66() {
  const meta = META("Reading: the kingdom of rice",
    "By the end of the lesson, learners will be able to identify the topic sentence and the main idea of each paragraph and describe their favourite local food.",
    "5 / 6", "reading text (book page), food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Offer me a dessert — I decline politely!"),
       fp("2. Clarify this price: 12 000 Ar.")],
      [fp("Answer."),
       fp("E.A.: Would you like some koba? — No, thank you! — Twelve thousand ariary? ↗")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Food pictures on the desk: enumerate what you see! Then listen and repeat the difficult words of the text: cuisine, generous, crushed, cassava, equal, stomach.")],
      [fp("Enumerate. Repeat."),
       fp("E.A.: rice, meat, green leaves, fish… — cuisine [kouizine]!")],
      "Repetition drill", "Food pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The kingdom of rice ». By the end of this lesson, you will find the KING of each paragraph — its topic sentence!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text aloud, paragraph by paragraph — correct pronunciation! Then the new tool: every paragraph has a TOPIC SENTENCE — usually the FIRST sentence, the one that commands all the others. Find it in paragraph 1: « Malagasy cuisine is simple, generous and full of history. » Everything after serves this sentence!")],
      [fp("Read aloud. Find the kings."),
       pAns("E.A.: P1: Malagasy cuisine is simple, generous… P2: Around the king, there are famous princes. P3: Where do people eat all this? P4: Foreign visitors sometimes arrive…",
        ["the kings"], { size: SZ.FICHE })],
      "Skimming and scanning", "Reading text"),
    stepRow(["4. Analysis"],
      [fp("From topic sentence to MAIN IDEA: say each paragraph in five words! P1 = our cuisine is rich. P2 = the famous dishes. P3 = the hotely, place of equality. P4 = visitors learn to taste. Scan questions: which dish uses cassava leaves? Where do drivers and ministers eat together? Inference: why does the text say « in front of a good vary be menaka, everybody is equal »?")],
      [fp("Summarise. Scan. Infer."),
       pAns("E.A.: ravitoto — at the hotely! Inference: at the table, money and titles disappear — that is mutual respect!",
        ["mutual respect!"], { size: SZ.FICHE })],
      "Inference", "Reading text"),
    stepRow(["5. Synthesis"],
      [fp("So: the topic sentence is the king of the paragraph (usually first!), the main idea is its message in a few words. Find the king, and the paragraph opens like a door!")],
      [fp("Listen. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Describe the local food you like the most: name, cooking (grilled? boiled?), taste, and WHY you love it. Four sentences, two volunteers read!")],
      [fp("Describe."),
       pAns("E.A.: My favourite food is grilled fish. On the coast, my aunt cooks it with coconut. It smells wonderful and tastes a little salty. I love it because it tastes like the holidays!",
        ["it tastes like the holidays!"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is a topic sentence, and where does it usually live?"),
       fp("2. Copy the topic sentence of paragraph 1 and give its main idea in five words.")],
      [fp("Answer."),
       pAns("E.A.: The sentence that commands the paragraph — usually the first. « Malagasy cuisine is simple, generous and full of history » → our cuisine is rich!",
        ["usually the first"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66");
}
function lessonS66() {
  return [
    p([run("LESSON OF THE DAY — SESSION 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE KINGDOM OF RICE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("cuisine", "kouizine", "the cooking art of a country"),
    vocab("generous", "djènereusse", "big plates, big heart!"),
    vocab("crushed", "creuchte", "écrasé — crushed cassava leaves"),
    vocab("equal", "ikoual", "égal — at the table, everybody is equal"),
    p("", { after: 60 }),
    box("THE TOPIC SENTENCE — THE KING OF THE PARAGRAPH", [
      bullet([run("Usually the FIRST sentence: it commands all the others.", { bold: true })]),
      bullet([run("P1: ", { bold: true }), run("« Malagasy cuisine is simple, generous and full of history. »", { bold: true, color: C.BLUE }), run(" → main idea: our cuisine is rich!")]),
      bullet([run("P3: ", { bold: true }), run("« Where do people eat all this? »", { bold: true, color: C.BLUE }), run(" → main idea: the hotely, place of equality.")]),
      bullet([run("Find the king → the paragraph opens like a door!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S67 — Writing: create a menu + gallery walk ----------
function ficheS67() {
  const meta = META("Writing: my menu — the gallery walk",
    "By the end of the lesson, learners will be able to create a menu with names, prices and descriptions of Malagasy dishes and present it in a gallery walk.",
    "6 / 6", "description cards, big sheets, colours");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The topic sentence usually lives…?"),
       fp("2. Describe the koba in one sentence (taste + category).")],
      [fp("Answer."),
       fp("E.A.: first in the paragraph — Koba is a sweet dessert of banana and peanuts.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing: the description cards)"],
      [fp("Fill out a description card for one Malagasy dish: NAME — CATEGORY (starter? main dish? dessert? drink?) — COOKING (boiled? grilled?) — TASTE — PRICE. One card each, fast!")],
      [fp("Fill the card."),
       fp("E.A.: Romazava — main dish — boiled — a little spicy — 8 000 Ar.")],
      "Guided writing", "Cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to create a real MENU — the one your future hotely will show to English-speaking visitors! By the end of this lesson, the walls of the class will become restaurants.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The anatomy of a menu on the board: the restaurant name on top, then the sections (Starters — Main dishes — Desserts — Drinks), and for each dish: name + short description (cooking + taste!) + price. Example: Romazava — boiled zebu meat with green leaves, a little spicy — 8 000 Ar.")],
      [fp("Observe. Copy the skeleton.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("In groups: create your menu on a big sheet! Minimum: one starter, two main dishes, one dessert, one drink. Each dish with its grilled/fried/boiled word, its taste and its price. Decorate — a menu must look delicious!")],
      [fp("Create the menu.")],
      "Group work", "Big sheets"),
    stepRow(["5. Synthesis (check!)"],
      [fp("Group check before the gallery: names correct? One past participle per dish? Tastes written? Prices clear? Spelling verified with the lesson?")],
      [fp("Check. Correct.")], "Peer correction", "----"),
    stepRow(["6. Practice (the gallery walk!)"],
      [fp("Menus on the walls! Half of the class walks and reads, the other half defends its restaurant: Would you like to try our grilled fish? It tastes wonderful! Visitors order and clarify the prices with the rising intonation. Then swap!")],
      [fp("Walk. Present. Order."),
       pAns("E.A.: Welcome to Hotely Soa! Would you like some ravitoto? — How much is it? Six thousand ariary? ↗ — Yes sir! — I’ll have it!",
        ["Welcome to Hotely Soa!"], { size: SZ.FICHE })],
      "Gallery walk", "The menus"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your best dish line (name + description + price) in your copy-book."),
       fp("2. Underline the past participle and circle the taste adjective.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67");
}
function lessonS67() {
  return [
    p([run("LESSON OF THE DAY — SESSION 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY MENU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE ANATOMY OF A MENU", [
      bullet([run("1. The restaurant name on top: ", { bold: true }), run("HOTELY SOA — Malagasy cuisine!", { bold: true, color: C.BLUE })]),
      bullet([run("2. The sections: ", { bold: true }), run("Starters — Main dishes — Desserts — Drinks.", { bold: true, color: C.BLUE })]),
      bullet([run("3. Each dish = name + description (cooking + taste) + price.", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model menu:", { bold: true })], { after: 50 }),
    box("HOTELY SOA — MALAGASY CUISINE", [
      pr([run("Starter — ", { bold: true }), run("Lasary voatabia: fresh tomato salad, a little sour — 1 000 Ar", { color: C.BLUE })], { after: 40 }),
      pr([run("Main dish — ", { bold: true }), run("Romazava: boiled zebu meat with green leaves, a little spicy — 8 000 Ar", { color: C.BLUE })], { after: 40 }),
      pr([run("Main dish — ", { bold: true }), run("Grilled fish: fresh fish grilled with garlic, salty and delicious — 10 000 Ar", { color: C.BLUE })], { after: 40 }),
      pr([run("Dessert — ", { bold: true }), run("Koba: sweet steamed cake of banana and peanuts — 2 000 Ar", { color: C.BLUE })], { after: 40 }),
      pr([run("Drink — ", { bold: true }), run("Ranovola: the golden rice water, served hot — 500 Ar", { color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GALLERY WALK SENTENCES", [
      bullet([run("The chef: ", { bold: true }), run("Would you like to try our grilled fish? It tastes wonderful!", { bold: true, color: C.BLUE })]),
      bullet([run("The visitor: ", { bold: true }), run("How much is it? Ten thousand ariary? ↗ — I’ll have it, please!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 8", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The sensory verbs and the tastes"),
    bullet([run("It looks good, it smells wonderful, it tastes sweet / salty / spicy / sour / bitter… delicious!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The past participles of the kitchen"),
    bullet([run("grilled fish, fried chicken, boiled meat, roasted peanuts, steamed rice — the adjective tells the recipe!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Count and non-count"),
    bullet([run("a banana, a few eggs (count) — rice, a little salt (non-count) — and the containers: a bowl of, a glass of, a plate of!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Ordering and offering"),
    bullet([run("I’ll have the romazava, please. — Would you like some dessert? — Yes, please! / No, thank you. — The bill, please!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Clarifying a price"),
    bullet([run("Repeat it with the rising voice: Eight thousand ariary? ↗", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The topic sentence"),
    bullet([run("The king of the paragraph — usually the first sentence. Find the king, the paragraph opens!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 8 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("The right sense: 1. It … good (the eyes). 2. It … wonderful (the nose). 3. It … sweet (the tongue).")]),
    pAns("Answers: 1. looks. 2. smells. 3. tastes.", ["smells"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("The kitchen adjective: 1. fish + to grill. 2. chicken + to fry. 3. meat + to boil. 4. peanuts + to roast. 5. rice + to steam.")]),
    pAns("Answers: 1. grilled fish. 2. fried chicken. 3. boiled meat. 4. roasted peanuts. 5. steamed rice.", ["steamed rice"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("A little or a few? 1. … salt. 2. … tomatoes. 3. … sugar. 4. … eggs.")]),
    pAns("Answers: 1. a little. 2. a few. 3. a little. 4. a few. (a little + non-count, a few + count!)", ["a little + non-count"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("At the restaurant — complete: 1. … you like some koba? 2. Yes, …! 3. No, … . 4. I’ll … the grilled fish. 5. The …, please!")]),
    pAns("Answers: 1. Would. 2. please. 3. thank you. 4. have. 5. bill.", ["Would"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the text: 1. Copy the topic sentence of paragraph 2. 2. Which dish uses crushed cassava leaves? 3. Why is everybody equal at the hotely?")]),
    pAns("Answers: 1. « Around the king, there are famous princes. » 2. Ravitoto. 3. Because at the long table, in front of the same good dish, titles and money disappear — mutual respect!", ["famous princes"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s68", "SESSION 68 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 8: RESTAURANTS AND MALAGASY CUISINE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The three sensory verbs, with their body part!"),
    pAns("E.A.: it looks (eyes), it smells (nose), it tastes (tongue).", ["it smells (nose)"]),
    p("2. Six taste adjectives."),
    pAns("E.A.: sweet, salty, spicy, sour, bitter, delicious!", ["sweet, salty, spicy"]),
    p("3. Five kitchen past participles with a food each."),
    pAns("E.A.: grilled fish, fried chicken, boiled meat, roasted peanuts, steamed rice.", ["boiled meat"]),
    p("4. Count or non-count: rice, egg, water, tomato?"),
    pAns("E.A.: non-count, count, non-count, count.", ["non-count, count"]),
    p("5. A little or a few: … oil; … bananas."),
    pAns("E.A.: a little oil, a few bananas.", ["a little oil"]),
    p("6. Three containers that count the uncountable."),
    pAns("E.A.: a bowl of soup, a cup of coffee, a kilo of meat.", ["a bowl of soup"]),
    p("7. Order the grilled fish — then ask for the bill."),
    pAns("E.A.: I’ll have the grilled fish, please. The bill, please!", ["I’ll have the grilled fish"]),
    p("8. Offer me a coffee — I accept; offer again — I decline!"),
    pAns("E.A.: Would you like some coffee? — Yes, please! / No, thank you.", ["Yes, please!"]),
    p("9. Clarify this price with the right intonation: 15 000 Ar."),
    pAns("E.A.: Fifteen thousand ariary? ↗ (the voice goes up!)", ["the voice goes up!"]),
    p("10. What is the topic sentence of a paragraph?"),
    pAns("E.A.: the king sentence — usually the first — that commands all the others.", ["the king sentence"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s69", "SESSION 69 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 8: RESTAURANTS AND MALAGASY CUISINE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with looks, smells or tastes: 1. This koba … sweet. 2. Your kitchen … wonderful! 3. The salad … fresh and green. 4. The coffee … bitter.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("The kitchen adjective: 1. … fish (to grill). 2. … banana (to fry). 3. … zebu meat (to boil). 4. … rice (to steam).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Choose: 1. I’ll have (some / any) rice. 2. Is there (some / any) water? 3. Add (a little / a few) salt. 4. Buy (a little / a few) eggs.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("At the restaurant: 1. Order a dish politely. 2. Offer a dessert to your customer. 3. Decline an offer politely. 4. Clarify this price with the rising intonation: 9 000 Ar.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a mini menu (four lines): one main dish and one dessert, each with its name, a short description (one past participle + one taste adjective) and a price.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: tastes — smells — looks — tastes. (1 pt each)", ["tastes — smells"]),
    pAns("Ex.2: grilled — fried — boiled — steamed. (1 pt each)", ["grilled — fried"]),
    pAns("Ex.3: some — any — a little — a few. (1 pt each)", ["some — any"]),
    pAns("Ex.4: I’ll have the romazava, please. — Would you like some koba? — No, thank you. — Nine thousand ariary? ↗ (1 pt each)", ["Nine thousand ariary?"]),
    pAns("Ex.5 (model): HOTELY FARA — Main dish: Grilled fish with garlic, salty and delicious — 10 000 Ar. Dessert: Koba, sweet steamed cake of banana and peanuts — 2 000 Ar. (4 pts: names 1, participles 1, tastes 1, prices 1)", ["HOTELY FARA"]),
  ];
}

module.exports = function unit8() {
  return [
    ...opening(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...ficheS64(), pageBreak(), ...lessonS64(), pageBreak(),
    ...ficheS65(), pageBreak(), ...lessonS65(), pageBreak(),
    ...ficheS66(), pageBreak(), ...lessonS66(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 8", COLOR, [
      "I can name and describe the Malagasy dishes.",
      "I can use the sensory verbs: it looks, it smells, it tastes.",
      "I can use the taste adjectives: sweet, salty, spicy, sour, bitter.",
      "I can cook with grammar: grilled, fried, boiled, roasted, steamed.",
      "I can use count and non-count nouns with some, any, a little, a few.",
      "I can order in a restaurant: I’ll have the romazava, please!",
      "I can offer, accept and decline politely.",
      "I can clarify a price with the rising intonation.",
      "I can find the topic sentence and the main idea of a paragraph.",
      "I can create a menu and present it in a gallery walk!",
    ], "NEXT STOP → UNIT 9: JOBS AND WORK!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
