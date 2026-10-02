// T8 — UNIT 4 — FOOD (10 séances + révision + test) — Sessions 34 à 45 / 78
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet
const SHADE = "E8DAEF";
const TOTAL = 78;
const AUDIO = {
  market: "https://drive.google.com/uc?export=download&id=1GgsFjv1VNkAg77OG_w79cCqQh82malCB",
  recipe: "https://drive.google.com/uc?export=download&id=1X0HqihsoHJodaabb9zBfsHqur-atIs0b",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — FOOD", title, slo,
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
function marketDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("AT THE MARKET (listening passage)", [
    L("Vendor", "Good morning! Can I help you?"),
    L("Soa", "Good morning! How much is a kilo of rice?"),
    L("Vendor", "It is two thousand ariary."),
    L("Soa", "And is there any sugar?"),
    L("Vendor", "Yes, there is some sugar. One kilo is three thousand ariary."),
    L("Soa", "Oh, that is expensive! Sugar is more expensive than rice!"),
    L("Vendor", "But my sugar is the best in the market! And my tomatoes are the cheapest!"),
    L("Soa", "OK. A kilo of rice, a kilo of sugar and some tomatoes, please. How about seven thousand ariary?"),
    L("Vendor", "Mmm… OK, seven thousand!"),
    L("Soa", "Here is the money."),
    L("Vendor", "And here is the change. Thank you! Goodbye!"),
  ]);
}
function recipeBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("THE VEGETABLE SOUP (listening passage)", [
    L("Hello! Today, we cook vegetable soup. First, peel the potatoes and the carrots. Then, cut the vegetables into small pieces. Pour some water into the pot."),
    L("Add the vegetables and some salt. Boil for twenty minutes. Lower the heat and stir with the ladle. Finally, serve the soup hot in a bowl. It is delicious!", true),
  ]);
}
function bananaDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE BANANAS (reading dialogue)", [
    L("Koto", "Excuse me, how much does a hand of bananas cost?"),
    L("Vendor", "Two thousand ariary, young man."),
    L("Koto", "Oh! That is expensive! How about one thousand five hundred?"),
    L("Vendor", "Hmm… These bananas are the sweetest in the market! One thousand eight hundred."),
    L("Koto", "Can you lower the price to one thousand six hundred, please?"),
    L("Vendor", "OK, OK… one thousand six hundred. You bargain well!"),
    L("Koto", "Thank you! Here is the money."),
    L("Vendor", "And here is the change. Goodbye!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — FOOD", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("How much is a kilo of rice?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_market.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask and state food prices: How much is…? How much does… cost?;"),
    p("• bargain like a champion: How about…? Can you lower the price to…?;"),
    p("• use some, any, no — and count what can be counted!;"),
    p("• compare: cheaper, more expensive, the best in the market!;"),
    p("• name the ingredients, the utensils and the cooking verbs;"),
    p("• give orders in the kitchen with the imperatives: Peel! Cut! Boil!;"),
    p("• read a bargaining dialogue and act it out;"),
    p("• write my own recipe — and the buying dialogue to go with it.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, collaboration.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 3)", [
      p("In Unit 3, you told your day: I always fetch water, then I go to school on foot."),
      p("In Unit 4, your English goes to the market and into the kitchen: prices, bargaining and delicious recipes!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u4_market.png", label: "At the market — the conversation", url: AUDIO.market }], COLOR),
  ];
}

// ---------- S34 — Food and the shops ----------
function ficheS34() {
  const meta = META("The food and the shops",
    "By the end of the lesson, learners will be able to name foods, shops and the verbs of buying and selling.",
    "1 / 10", "flashcards of foods, pictures of shops");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 3.) Answer these questions:"),
       fp("1. How often do you go to the market?"),
       fp("2. Play or go? …swimming / …fanorona.")],
      [fp("Answer."),
       fp("E.A.: I sometimes go to the market; go swimming, play fanorona.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: name the foods presented on the flashcards / on the board: rice, sugar, tomatoes, bananas…")],
      [fp("Name the foods."),
       fp("E.A.: rice, sugar, tomatoes, bananas, meat, fish…")],
      "Using visual-aids", "Flashcards of foods"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The food and the shops ». By the end of this lesson, you will know WHERE to buy WHAT!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning of the shop names from the pictures (use realia / stick figures): the market, the grocery, the bakery, the butcher’s. And the people: the vendor, the salesman.")],
      [fp("Observe. Draw the meaning from the pictures.")],
      "Using visual-aids / Language transfer", "Pictures of shops"),
    stepRow(["4. Analysis"],
      [fp("The game « listen and stand up »! Each group is a shop. I say a food — the right shop stands up! “Bread!” → the bakery! “Beef!” → the butcher’s!")],
      [fp("Listen and stand up!"),
       fp("E.A.: correct shop stands up for each food.")],
      "Listen and stand up game", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: the vendor SELLS, we BUY, we PAY — and at the market, we can BARGAIN! Expensive or cheap? Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: one says a food, the other says the shop and one sentence: “Bread? I buy bread at the bakery!”")],
      [fp("Match food and shop in sentences."),
       pAns("E.A.: I buy beef at the butcher’s. The vendor sells tomatoes at the market.",
        ["at the butcher’s"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four foods and two shops."),
       fp("2. Give the four verbs of the market.")],
      [fp("Answer."),
       pAns("E.A.: rice, sugar, bread, meat; the bakery, the butcher’s; buy, sell, pay, bargain.",
        ["buy, sell, pay, bargain"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}
function lessonS34() {
  return [
    p([run("LESSON OF THE DAY — SESSION 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FOOD AND THE SHOPS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_market.png", 420, 768 / 1376),
    box("THE VERBS OF THE MARKET", [
      vocab("to buy", "tou baï", "I give money, I take the food"),
      vocab("to sell", "tou sèl", "the vendor’s job"),
      vocab("to pay", "tou péi"),
      vocab("to bargain", "tou bârguine", "to discuss the price!"),
    ]),
    p("", { after: 60 }),
    box("THE SHOPS AND THE PEOPLE", [
      vocab("the market", "dhe mârkite"),
      vocab("the grocery", "dhe grôousseuri"),
      vocab("the bakery", "dhe béikeuri", "for the bread!"),
      vocab("the butcher’s", "dhe boutcheurz", "for the meat!"),
      vocab("the vendor / the salesman", "dhe venndeur / dhe séilzmeune"),
    ]),
    p("", { after: 60 }),
    box("TWO MAGIC ADJECTIVES", [
      bullet([...kw("expensive", "ikspennsive"), run("  —  a high price  "), run("≠", { bold: true }), run("  "), ...kw("cheap", "tchipe"), run("  —  a low price")], { after: 20 }),
    ]),
  ];
}

// ---------- S35 — Listening: at the market ----------
function ficheS35() {
  const meta = META("Listening: at the market — asking and stating prices",
    "By the end of the lesson, learners will be able to comprehend a market conversation and ask and state food prices.",
    "2 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Where do I buy bread?"),
       fp("2. Expensive or cheap: 100 ariary for a banana?")],
      [fp("Answer."),
       fp("E.A.: at the bakery; cheap!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: Soa goes to the market with 10 000 ariary. Guess: what does she buy?")],
      [fp("Predict."),
       fp("E.A.: rice, vegetables, sugar…")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a real market conversation — twice! — and learn to ask and state prices.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (first time): what does Soa buy? While-listening (second time): 1. How much is a kilo of rice? 2. Is there any sugar? 3. What is the cheapest? Then listen and repeat the dialogue.")],
      [fp("Listen twice. Answer. Repeat the dialogue."),
       fp("E.A.: rice, sugar, tomatoes; 2 000 Ar; yes, some; the tomatoes.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Find the price questions and answers in the dialogue: How much is…? It is… Is there any…? Here is the money. Here is the change.")],
      [fp("Find the expressions."),
       fp("E.A.: How much is a kilo of rice? Here is the change.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: How much is + one thing? How much does … cost? Answer: It is… And at the end: Here is the money — Here is the change! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Ask your group about the food prices in YOUR villages: How much is a kilo of rice at home? Compare!")],
      [fp("Ask and state real prices."),
       pAns("E.A.: In my village, a kilo of rice is… — That is cheaper than here!",
        ["How much is"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask the price of a kilo of sugar in two ways."),
       fp("2. What does the vendor say with the change?")],
      [fp("Answer."),
       pAns("E.A.: How much is a kilo of sugar? How much does a kilo of sugar cost?; Here is the change.",
        ["Here is the change"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}
function lessonS35() {
  return [
    p([run("LESSON OF THE DAY — SESSION 35", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING AND STATING PRICES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    marketDialogueBox(),
    p("", { after: 60 }),
    box("THE PRICE QUESTIONS", [
      bullet([...kw("How much is…?", "haou meutch iz"), run("  —  How much is a kilo of rice?")]),
      bullet([...kw("How much does… cost?", "haou meutch deuz … koste"), run("  —  How much does a hand of bananas cost?")]),
      bullet([...kw("Is there any…?", "iz dhèr èni"), run("  —  Is there any sugar?")]),
      bullet([run("Answers: "), run("It is two thousand ariary. — Yes, there is some sugar.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE MONEY MOMENT", [
      bullet([run("Here is the money.", { bold: true, color: C.GREEN }), run("  —  "), run("And here is the change!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u4_market.png", label: "At the market — listen again", url: AUDIO.market }], COLOR),
  ];
}

// ---------- S36 — Countable / uncountable + quantifiers ----------
function ficheS36() {
  const meta = META("Countable and uncountable nouns — some, any, no",
    "By the end of the lesson, learners will be able to use countable and uncountable nouns with the quantifiers some, any and no.",
    "3 / 10", "realia or pictures of foods");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask the price of the tomatoes."),
       fp("2. Complete: Here is the …!")],
      [fp("Answer."),
       fp("E.A.: How much are the tomatoes?; change.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Count with me: one tomato, two tomatoes, three tomatoes… Now count the rice: one rice?! Impossible!")],
      [fp("Count. Discover the problem!")],
      "Eliciting technique", "Realia (rice, tomatoes)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Countable and uncountable nouns ». By the end of this lesson, you will know what you can count!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two families in the dialogue: a kilo, the tomatoES (countable: 1, 2, 3…) / rice, sugar, water (uncountable: no plural, no “a”!).")],
      [fp("Observe. Classify countable / uncountable."),
       fp("E.A.: banana → C; sugar → U; egg → C; oil → U.")],
      "Using visual-aids", "Pictures of foods"),
    stepRow(["4. Analysis"],
      [fp("Find the little words in the dialogue: there is SOME sugar (+); is there ANY sugar? (?); and: there is NO milk today (−). And why “I like Φ bananas” without article? Generality!")],
      [fp("Find the rules."),
       fp("E.A.: some +; any ? and −; no = not any; no article for generality.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: SOME in affirmative, ANY in questions and negatives, NO = zero! And in plural general sentences: no article (Φ): I like bananas. Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game: “In my basket, there is some rice…” — the next adds: “…and there are some eggs…” — uncountable or countable, don’t break the chain!")],
      [fp("Play the chain game."),
       pAns("E.A.: there is some oil, there are some tomatoes, there is no cheese…",
        ["some"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Classify: sugar, egg, water, tomato."),
       fp("2. Complete: Is there … juice? There is … milk today (zero!).")],
      [fp("Answer."),
       pAns("E.A.: U, C, U, C; any; no.",
        ["any"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COUNTABLE OR UNCOUNTABLE? SOME, ANY, NO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("TWO FAMILIES OF NOUNS", [
      bullet([run("COUNTABLE (1, 2, 3…): ", { bold: true }), run("a tomato → two tomatoes; an egg → six eggs; a banana → ten bananas", { bold: true, color: C.BLUE })]),
      bullet([run("UNCOUNTABLE (no plural, no “a”!): ", { bold: true }), run("rice, sugar, water, oil, milk, meat, salt", { bold: true, color: C.BLUE })]),
      bullet([run("Trick: ", { bold: true, color: C.RED }), run("we count the KILO, not the rice: a kilo of rice!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SOME, ANY, NO — THE THREE GUARDS", [
      vocab("some", "seume", "affirmative (+): There is some sugar."),
      vocab("any", "èni", "question (?) and negative (−): Is there any sugar? There isn’t any milk."),
      vocab("no", "nôou", "= zero! There is no milk today."),
    ]),
    p("", { after: 60 }),
    box("THE INVISIBLE ARTICLE (Φ)", [
      p("To speak in general, plural countables take NO article: I like Φ bananas. Φ Tomatoes are red.", { after: 40 }),
    ]),
  ];
}

// ---------- S37 — Comparatives and superlatives ----------
function ficheS37() {
  const meta = META("Comparatives and superlatives",
    "By the end of the lesson, learners will be able to compare foods and prices with comparatives and superlatives.",
    "4 / 10", "audio (QR code), price list on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Some or any? Is there … cheese?"),
       fp("2. Countable or uncountable: oil?")],
      [fp("Answer."),
       fp("E.A.: any; uncountable.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to the dialogue again: “Sugar is MORE EXPENSIVE THAN rice… my tomatoes are THE CHEAPEST!” Catch the comparing words!")],
      [fp("Listen. Catch the comparisons."),
       fp("E.A.: more expensive than; the cheapest; the best.")],
      "Audio / Eliciting", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Comparatives and superlatives ». By the end of this lesson, you will compare everything!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the price list: rice 2 000, sugar 3 000, tomatoes 1 000. Which is cheap? cheaper? the cheapest?")],
      [fp("Observe the price list. Compare.")],
      "Using visual-aids", "Price list"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules from the passage: SHORT adjective + -ER / THE + -EST (cheap, cheaper, the cheapest); LONG adjective: MORE … THAN / THE MOST … (expensive); and the rebels: good → better → the best!")],
      [fp("Find the rules."),
       fp("E.A.: -er/-est for short; more/most for long; good-better-best.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: cheaper THAN, the cheapest; more expensive THAN, the most expensive; good, better, the best; bad, worse, the worst. Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Compare with real prices from your villages: “Rice is cheaper in my village than in town!” — “My mother’s soup is the best!”")],
      [fp("Compare prices and foods."),
       pAns("E.A.: Bananas are cheaper than mangoes. This market is the most expensive.",
        ["cheaper than"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three forms: cheap; expensive; good."),
       fp("2. Compare sugar (3 000) and rice (2 000).")],
      [fp("Answer."),
       pAns("E.A.: cheap-cheaper-the cheapest; expensive-more expensive-the most expensive; good-better-the best; Sugar is more expensive than rice.",
        ["more expensive than"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMPARATIVES AND SUPERLATIVES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("SHORT ADJECTIVES: -ER / THE -EST", [
      bullet([run("cheap → cheaper than → the cheapest", { bold: true, color: C.BLUE })]),
      bullet([run("sweet → sweeter than → the sweetest", { bold: true, color: C.BLUE })]),
      bullet([run("Tomatoes are cheaper than sugar. My tomatoes are the cheapest!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("LONG ADJECTIVES: MORE… / THE MOST…", [
      bullet([run("expensive → more expensive than → the most expensive", { bold: true, color: C.BLUE })]),
      bullet([run("delicious → more delicious than → the most delicious", { bold: true, color: C.BLUE })]),
      bullet([run("Sugar is more expensive than rice.", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REBELS!", [
      bullet([run("good → better → the best", { bold: true, color: C.RED }), run("  —  My sugar is the best in the market!")]),
      bullet([run("bad → worse → the worst", { bold: true, color: C.RED })], { after: 20 }),
    ]),
  ];
}

// ---------- S38 — Bargaining ----------
function ficheS38() {
  const meta = META("Bargaining prices",
    "By the end of the lesson, learners will be able to bargain prices politely and act out a market conversation.",
    "5 / 10", "play money, realia");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the three forms of good."),
       fp("2. Compare: tomatoes 1 000 / bananas 2 000.")],
      [fp("Answer."),
       fp("E.A.: good, better, the best; Tomatoes are cheaper than bananas.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In the dialogue, Soa does not pay 8 000: she says “How about seven thousand?” — and she wins! What is this magic called?")],
      [fp("Answer."),
       fp("E.A.: bargaining!")],
      "Eliciting technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn to BARGAIN in English. By the end of this lesson, you will never pay too much!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two bargaining keys: How about + lower amount? / Can you lower the price to…? And the vendor’s answers: OK! / Hmm, no, but…")],
      [fp("Observe the expressions.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The bargaining plan: 1. ask the price; 2. say it is expensive!; 3. propose lower (How about…?); 4. meet in the middle; 5. pay and take the change. Find the five steps in Soa’s dialogue!")],
      [fp("Find the steps in the dialogue."),
       fp("E.A.: steps found and numbered.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: That is expensive! How about…? Can you lower the price to…? — polite voice, big smile! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Build a conversation about asking and bargaining prices with your pair, then act it out with play money — the class votes for the best bargainer!")],
      [fp("Build the conversation. Act it out."),
       pAns("E.A.: complete dialogue with the five steps and a successful bargain!",
        ["five steps"], { size: SZ.FICHE })],
      "Role play", "Play money"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Propose a lower price in two ways."),
       fp("2. Give the five steps of the bargaining plan.")],
      [fp("Answer."),
       pAns("E.A.: How about 1 500? Can you lower the price to 1 500?; ask, expensive!, propose, middle, pay.",
        ["How about"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("BARGAINING PRICES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE TWO BARGAINING KEYS", [
      bullet([...kw("How about (lower amount)?", "haou ebaoute"), run("  —  How about seven thousand ariary?")]),
      bullet([...kw("Can you lower the price to…?", "kane iou lôoueur dhe praïss tou"), run("  —  Can you lower the price to 1 600, please?")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE BARGAINING PLAN (5 steps)", [
      bullet([run("1. Ask the price: ", { bold: true }), run("How much is…? How much does… cost?", { bold: true, color: C.BLUE })]),
      bullet([run("2. React: ", { bold: true }), run("Oh, that is expensive!", { bold: true, color: C.BLUE })]),
      bullet([run("3. Propose lower: ", { bold: true }), run("How about…?", { bold: true, color: C.BLUE })]),
      bullet([run("4. Meet in the middle: ", { bold: true }), run("OK, OK…", { bold: true, color: C.BLUE })]),
      bullet([run("5. Pay: ", { bold: true }), run("Here is the money. — And here is the change!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("GOLDEN RULE", [
      p("Bargaining is a game of RESPECT: polite words, soft voice, big smile — and everybody wins!", { after: 40 }),
    ]),
  ];
}

// ---------- S39 — Ingredients, utensils, cooking verbs ----------
function ficheS39() {
  const meta = META("The ingredients, the utensils and the cooking verbs",
    "By the end of the lesson, learners will be able to name ingredients, kitchen utensils and the verbs of cooking.",
    "6 / 10", "realia / pictures, bingo cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Propose a lower price for a 2 000 Ar chicken."),
       fp("2. Some or any? There is … oil.")],
      [fp("Answer."),
       fp("E.A.: How about 1 500?; some.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: draw the meaning of the vocabulary items from the pictures: oil, vinegar, cheese, jam, spices… and the utensils: pot, ladle, bowl…")],
      [fp("Observe. Draw the meaning from the pictures.")],
      "Using realia / stick figures", "Realia, pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the kitchen in English: ingredients, utensils and the cooking verbs. By the end of this lesson, you can cook in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the three families: INGREDIENTS (oil, salt, spices…), UTENSILS (pot, ladle, frying pan…), VERBS (cut, chop, pour, stir, boil, peel, fry, crush, serve). And the animal → its meat: the ox → beef, the pig → pork!")],
      [fp("Observe. Classify in three families.")],
      "Using visual-aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Mime the verbs with me: cut! chop! pour! stir! crush! Now, which utensil for which action? Stir with the…? Serve in the…?")],
      [fp("Mime. Match verb and utensil."),
       fp("E.A.: stir with the ladle; serve in the bowl; fry in the frying pan.")],
      "Making gestures", "----"),
    stepRow(["5. Synthesis"],
      [fp("So the kitchen team: ingredients + utensils + verbs — and the taste at the end: sweet, salty, delicious! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("BINGO! Each student gets a bingo card with pictures (ingredients and utensils). I call the words — tick your card. First full line shouts BINGO!")],
      [fp("Play bingo."),
       pAns("E.A.: words recognised and ticked — BINGO!",
        ["BINGO!"], { size: SZ.FICHE })],
      "Bingo game", "Bingo cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name three ingredients, three utensils and three cooking verbs."),
       fp("2. The meat of the ox is…?")],
      [fp("Answer."),
       pAns("E.A.: oil, salt, spices; pot, ladle, bowl; cut, boil, serve; beef.",
        ["beef"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LESSON OF THE DAY — SESSION 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE KITCHEN IN ENGLISH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_cooking.png", 420, 768 / 1376),
    box("THE INGREDIENTS", [
      vocab("oil / vinegar", "oïl / vinigueur"),
      vocab("salt / spices / chilly", "sôlte / spaïciz / tchili"),
      vocab("cheese / jam / juice", "tchiiz / djame / djouss"),
      bullet([run("The animal → its meat: ", { bold: true }), run("the ox → beef; the pig → pork; the chicken → chicken!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE UTENSILS", [
      vocab("the pot / the frying pan", "dhe pote / dhe fraïng pane"),
      vocab("the ladle / the spoon / the fork", "dhe léideul / dhe spoune / dhe fôrk"),
      vocab("the plate / the bowl", "dhe pléite / dhe bôoul"),
    ]),
    p("", { after: 60 }),
    box("THE COOKING VERBS (mime them!)", [
      vocab("cut / chop / crush", "keute / tchope / kreuche"),
      vocab("pour / stir / add", "pôr / steur / ade"),
      vocab("boil / fry / heat / lower the heat", "boïl / fraï / hite / lôoueur dhe hite"),
      vocab("peel / serve", "pile / seurve"),
    ]),
  ];
}

// ---------- S40 — Listening: the recipe + imperatives ----------
function ficheS40() {
  const meta = META("Listening: the recipe — the imperatives",
    "By the end of the lesson, learners will be able to comprehend an oral recipe and use the imperatives.",
    "7 / 10", "audio (QR code), gap-fill recipe");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Mime: stir! peel! crush!"),
       fp("2. I serve the soup in a…?")],
      [fp("Mime. Answer."),
       fp("E.A.: (mimes!); bowl.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: today we cook — but what? Smell the clues: potatoes, carrots, water, salt… Guess the dish!")],
      [fp("Guess."),
       fp("E.A.: vegetable soup!")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a recipe and complete the blanks — and discover the tense of the chefs: the IMPERATIVE!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the recipe and complete the blanks: “… the potatoes. … the vegetables into small pieces. … some water into the pot.” Listen twice!")],
      [fp("Listen. Complete the blanks."),
       fp("E.A.: Peel; Cut; Pour.")],
      "Audio / Gap-fill", "Audio (QR code), gap-fill"),
    stepRow(["4. Analysis"],
      [fp("Find the use and the form of the imperatives: Peel! Cut! Pour! Where is the subject? What is the first word? And the negative?")],
      [fp("Find the rules."),
       fp("E.A.: no subject; verb first; Don’t + verb.")],
      "Eliciting technique", "The recipe"),
    stepRow(["5. Synthesis"],
      [fp("So the recipe = imperatives + sequence markers: First, peel… Then, cut… Finally, serve! Like the classroom commands of Unit 2 — but in the kitchen!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Share a recipe for your favourite dish with your group — three imperatives minimum! Then talk: do you know recipes from other countries?")],
      [fp("Share recipes. Talk about other countries."),
       pAns("E.A.: First, boil the rice. Then, fry the chicken. Finally, serve with sakay!",
        ["First, boil"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the form of the imperative (+ and −)."),
       fp("2. Give the first and the last step of the soup.")],
      [fp("Answer."),
       pAns("E.A.: verb first!; Don’t + verb; First, peel the potatoes — Finally, serve the soup hot.",
        ["verb first"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LESSON OF THE DAY — SESSION 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE RECIPE AND THE IMPERATIVES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    recipeBox(),
    p("", { after: 60 }),
    box("THE IMPERATIVE: THE TENSE OF THE CHEFS", [
      bullet([run("Verb FIRST, no subject: ", { bold: true }), run("Peel the potatoes! Cut the vegetables! Stir with the ladle!", { bold: true, color: C.BLUE })]),
      bullet([run("Negative: ", { bold: true }), run("Don’t burn the soup! Don’t add too much salt!", { bold: true, color: C.RED })]),
      bullet([run("With the sequence markers: ", { bold: true }), run("First, peel… Then, cut… After that, boil… Finally, serve!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TASTE AND FLAVOUR", [
      vocab("sweet / salty", "souite / sôlti"),
      vocab("hot (spicy!)", "hote", "careful with the chilly!"),
      vocab("delicious", "dilicheuss", "the best compliment for the cook!"),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u4_recipe.png", label: "The vegetable soup — listen and complete", url: AUDIO.recipe }], COLOR),
  ];
}

// ---------- S41 — Reading: bargaining dialogue ----------
function ficheS41() {
  const meta = META("Reading: bargaining at the market",
    "By the end of the lesson, learners will be able to read a buying and selling dialogue with correct pronunciation and intonation and infer information from it.",
    "8 / 10", "the reading dialogue, picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three imperatives of the soup."),
       fp("2. The two bargaining keys?")],
      [fp("Answer."),
       fp("E.A.: Peel! Cut! Serve!; How about…? Can you lower the price to…?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: describe the picture: who? where? what? Predict the content of the dialogue!")],
      [fp("Describe. Predict."),
       fp("E.A.: a boy and a vendor at the market; he buys fruit…")],
      "Using visual-aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The bananas » — a real bargaining fight… with smiles!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read the dialogue and pay attention to the pronunciation and the intonation: questions UP ↗, statements DOWN ↘.")],
      [fp("Read with intonation.")],
      "Reading aloud", "The dialogue"),
    stepRow(["4. Analysis"],
      [fp("Answer: 1. What does Koto want to buy? 2. What is the first price? 3. What is the final price? 4. Who bargains well?")],
      [fp("Answer."),
       fp("E.A.: bananas; 2 000 Ar; 1 600 Ar; Koto!")],
      "Question-answer", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("Check the prediction. Spot the five steps of the bargaining plan in the text — all there!")],
      [fp("Check. Spot the five steps.")],
      "Whole-class work", "The dialogue"),
    stepRow(["6. Practice"],
      [fp("Build a new dialogue (other food, other prices) and act it out — voice up ↗ for the questions!")],
      [fp("Build. Act out."),
       pAns("E.A.: new dialogue with correct intonation and a good bargain.",
        ["correct intonation"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false: the vendor accepts 1 500 Ar."),
       fp("2. Read Koto’s last two lines with the right intonation.")],
      [fp("Answer. Read."),
       pAns("E.A.: false (1 600 Ar); fluent reading, voice down on statements.",
        ["false"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}
function lessonS41() {
  return [
    p([run("LESSON OF THE DAY — SESSION 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE BANANAS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    bananaDialogueBox(),
    p("", { after: 60 }),
    box("READER’S MUSIC", [
      bullet([run("Questions go UP ↗: ", { bold: true }), run("How much does a hand of bananas cost? ↗", { bold: true, color: C.BLUE })]),
      bullet([run("Statements go DOWN ↘: ", { bold: true }), run("Here is the money. ↘", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SPOT THE BARGAINING PLAN", [
      p("Find the five steps in the dialogue: ask the price → that is expensive! → How about…? → meet in the middle → pay and take the change. All five are hiding in « The bananas »!", { after: 40 }),
    ]),
  ];
}

// ---------- S42 — Writing: my recipe ----------
function ficheS42() {
  const meta = META("Writing: my recipe",
    "By the end of the lesson, learners will be able to write a local recipe with imperatives and compare recipes.",
    "9 / 10", "notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What did you eat yesterday?"),
       fp("2. How is it cooked? Tell me two steps!")],
      [fp("Answer."),
       fp("E.A.: rice and chicken; First, boil the rice. Then, fry the chicken.")],
      "Personalisation technique", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: let’s list on the board the dishes you ate the day before the English class — the class menu!")],
      [fp("Share their dishes.")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE a recipe — your recipe! By the end of this lesson, the class will have a real cookbook.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the recipe skeleton: 1. the title; 2. the ingredients (with some!); 3. the steps: imperatives + sequence markers; 4. the final touch: Serve hot! It is delicious!")],
      [fp("Observe the skeleton.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write another way of cooking your dish (or your favourite recipe). Then exchange your production with another group and correct it if there are mistakes.")],
      [fp("Write the recipe. Exchange and correct."),
       fp("E.A.: corrected recipes.")],
      "Peer correction", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Compare the recipes with comparatives and superlatives: “My recipe is spicier than yours!” — “Our soup is the most delicious!”")],
      [fp("Compare the recipes."),
       fp("E.A.: comparisons with -er/than, the most…")],
      "Group work", "----"),
    stepRow(["6. Practice"],
      [fp("Read your recipe to the class like a TV chef — gestures included! The class mimes the steps.")],
      [fp("Read like a chef. Mime."),
       pAns("E.A.: recipe read with imperatives, class miming.",
        ["imperatives"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the four parts of the recipe skeleton."),
       fp("2. Write the first two steps of your recipe.")],
      [fp("Answer. Write."),
       pAns("E.A.: title, ingredients, steps, final touch; First, peel… Then, cut…",
        ["First, peel"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}
function lessonS42() {
  return [
    p([run("LESSON OF THE DAY — SESSION 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY RECIPE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RECIPE SKELETON", [
      bullet([run("1. The title: ", { bold: true }), run("My mother’s chicken and rice", { italic: true })]),
      bullet([run("2. The ingredients: ", { bold: true }), run("some rice, a chicken, some oil, some salt, some spices", { italic: true })]),
      bullet([run("3. The steps: ", { bold: true }), run("imperatives + sequence markers!", { bold: true, color: C.BLUE })]),
      bullet([run("4. The final touch: ", { bold: true }), run("Serve hot! It is delicious!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY MODEL RECIPE", [
      bullet([run("First, cut the chicken into pieces.", { italic: true })]),
      bullet([run("Then, heat some oil in the pot and fry the chicken.", { italic: true })]),
      bullet([run("After that, add some water, some salt and some spices.", { italic: true })]),
      bullet([run("Boil the rice in another pot.", { italic: true })]),
      bullet([run("Lower the heat and stir from time to time.", { italic: true })]),
      bullet([run("Finally, serve the chicken on the rice — it is the most delicious dish in the world!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("COMPARE THE RECIPES!", [
      p("My recipe is spicier than yours! Your soup is sweeter than mine! Our dish is the most delicious!", { after: 40 }),
    ]),
  ];
}

// ---------- S43 — Writing: the buying dialogue ----------
function ficheS43() {
  const meta = META("Writing: the buying and bargaining dialogue",
    "By the end of the lesson, learners will be able to write and act out a dialogue about buying food and bargaining prices.",
    "10 / 10", "notebooks, play money");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the ingredients of YOUR recipe."),
       fp("2. Compare your recipe with your pair’s recipe.")],
      [fp("Answer."),
       fp("E.A.: some rice, a chicken…; My recipe is spicier than yours!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Your recipe needs ingredients — but you have none at home! Where do we go?")],
      [fp("Answer."),
       fp("E.A.: to the market!")],
      "Eliciting technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write the DIALOGUE of your shopping: buying the ingredients of your recipe — and bargaining, of course!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the dialogue plan, inspired from your recipe: greet → ask the prices of YOUR ingredients → bargain (the five steps!) → pay → thank and goodbye.")],
      [fp("Observe the plan.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write the dialogue in pairs — one buyer, one vendor. Use: How much is…? Is there any…? That is expensive! How about…? Here is the change.")],
      [fp("Write the dialogue in pairs."),
       fp("E.A.: complete dialogue with prices and bargaining.")],
      "Pair work", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Exchange with another pair: check the expressions, the some/any, the comparatives. Correct together!")],
      [fp("Peer correction.")],
      "Peer correction", "----"),
    stepRow(["6. Practice"],
      [fp("Act out the dialogue with play money — voice up ↗ for the questions, smile for the bargaining! The class votes: the best market scene!")],
      [fp("Act out the dialogue."),
       pAns("E.A.: lively scene, correct expressions, successful bargain!",
        ["successful bargain"], { size: SZ.FICHE })],
      "Role play", "Play money"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five parts of the shopping dialogue plan."),
       fp("2. Write the two first lines of your dialogue.")],
      [fp("Answer. Write."),
       pAns("E.A.: greet, ask prices, bargain, pay, goodbye; — Good morning! How much is a kilo of rice? — It is 2 000 ariary.",
        ["How much is"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43");
}
function lessonS43() {
  return [
    p([run("LESSON OF THE DAY — SESSION 43", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY MARKET DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DIALOGUE PLAN", [
      bullet([run("1. Greet: ", { bold: true }), run("Good morning! Can I help you?", { italic: true })]),
      bullet([run("2. Ask the prices of YOUR ingredients: ", { bold: true }), run("How much is…? Is there any…?", { italic: true })]),
      bullet([run("3. Bargain — the five steps: ", { bold: true }), run("That is expensive! How about…?", { italic: true })]),
      bullet([run("4. Pay: ", { bold: true }), run("Here is the money. — Here is the change.", { italic: true })]),
      bullet([run("5. Thank and goodbye: ", { bold: true }), run("Thank you! Goodbye!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("CHECKLIST BEFORE ACTING", [
      bullet([run("☐ some / any / no in the right places", { bold: true })]),
      bullet([run("☐ one comparative or superlative (my tomatoes are the cheapest!)", { bold: true })]),
      bullet([run("☐ voice UP ↗ for the questions", { bold: true })]),
      bullet([run("☐ a successful bargain — and a smile!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("COLLABORATION CORNER", [
      p("A dialogue is teamwork: buyer and vendor write together, correct together, shine together!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("FOOD"),
    sub("1. Asking and stating prices"),
    bullet([run("How much is a kilo of rice? — How much does it cost? — It is 2 000 ariary.", { bold: true, color: C.BLUE })]),
    bullet([run("Here is the money. — And here is the change!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Bargaining"),
    bullet([run("That is expensive! How about 7 000? Can you lower the price to…?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Countable, uncountable — some, any, no, Φ"),
    bullet([run("a tomato, two tomatoes / rice, sugar, water (no plural!)", { bold: true, color: C.BLUE })]),
    bullet([run("some (+), any (? −), no (= zero) — and Φ for generality: I like Φ bananas.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Comparatives and superlatives"),
    bullet([run("cheap → cheaper than → the cheapest; expensive → more expensive than → the most expensive", { bold: true, color: C.BLUE })]),
    bullet([run("good → better → the best; bad → worse → the worst", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The kitchen: ingredients, utensils, verbs"),
    bullet([run("oil, salt, spices — pot, ladle, bowl — cut, chop, pour, stir, boil, peel, fry, serve", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The imperatives: the recipe"),
    bullet([run("First, peel the potatoes. Then, cut the vegetables. Finally, serve hot! — Don’t burn the soup!", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u4_market.png", label: "At the market", url: AUDIO.market },
      { qr: "qr_t8_u4_recipe.png", label: "The vegetable soup", url: AUDIO.recipe },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("A, some or any? 1. Is there … sugar?  2. There is … rice in the pot.  3. I buy … tomato.  4. There are … bananas in the basket.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with the comparative or the superlative: 1. Tomatoes are … (cheap) than sugar.  2. Sugar is … (expensive) than rice.  3. My mother’s soup is … (good) soup in the village!  4. These bananas are … (sweet) in the market!")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete the recipe with: peel — boil — serve — cut. “First, … the potatoes. Then, … them into pieces. … for twenty minutes. Finally, … hot!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete the bargaining: “How … is this chicken?” — “8 000 ariary.” — “That is …! How … 6 000?” — “OK! Here is the ….”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a mini recipe of four steps with four imperatives and the sequence markers (first, then, after that, finally).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: any — some — a — some (1 point each).", ["any"]),
    pAns("Exercise 2: cheaper — more expensive — the best — the sweetest (1 point each).", ["cheaper"]),
    pAns("Exercise 3: peel — cut — Boil — serve (1 point each).", ["peel"]),
    pAns("Exercise 4: much — expensive — about — change (1 point each).", ["much"]),
    pAns("Exercise 5: four correct imperative steps with the markers (1 point each).", ["imperative"]),
  ];
}

// ---------- S44 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s44", "SESSION 44 / 78", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: FOOD", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Ask the price of a kilo of rice in two ways."),
    pAns("E.A.: How much is a kilo of rice? How much does a kilo of rice cost?", ["How much"]),
    p("2. Give the four verbs of the market and two shops."),
    pAns("E.A.: buy, sell, pay, bargain; the bakery, the butcher’s.", ["bargain"]),
    p("3. Countable or uncountable: sugar, egg, oil, banana?"),
    pAns("E.A.: U, C, U, C.", ["U, C, U, C"]),
    p("4. The three guards: when some? when any? when no?"),
    pAns("E.A.: some +; any ? and −; no = zero.", ["some +"]),
    p("5. Why do we say “I like Φ bananas” without article?"),
    pAns("E.A.: plural countable in general → no article (Φ).", ["no article"]),
    p("6. Give the three forms: cheap, expensive, good, bad."),
    pAns("E.A.: cheaper/the cheapest; more expensive/the most expensive; better/the best; worse/the worst.", ["better/the best"]),
    p("7. Propose a lower price in two polite ways."),
    pAns("E.A.: How about…? Can you lower the price to…?", ["How about"]),
    p("8. Name three utensils and five cooking verbs."),
    pAns("E.A.: pot, ladle, bowl; cut, pour, stir, boil, serve.", ["ladle"]),
    p("9. Give the form of the imperative (+ and −) with one example each."),
    pAns("E.A.: verb first: Peel the potatoes!; Don’t + verb: Don’t burn the soup!", ["verb first"]),
    p("10. Act: buy the ingredients of your recipe and bargain — all in English!"),
    pAns("E.A.: complete market scene with the five steps.", ["five steps"]),
  ];
}

// ---------- S45 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s45", "SESSION 45 / 78", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 4: FOOD", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: act a market dialogue in pairs — ask the price, bargain, pay (the teacher listens to the expressions and the intonation).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Some, any or no? 1. There is … rice in the pot.  2. Is there … juice?  3. There is … meat today: the butcher’s is closed!  4. Do you have … spices?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Comparative or superlative? 1. Sugar is … (expensive) than rice.  2. These bananas are the … (sweet) in the market!  3. This soup is … (good) than that one.  4. It is the … (good) dish in the world!")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete the recipe with the imperatives: peel — pour — boil — serve. “First, … the carrots. Then, … some water into the pot. … for twenty minutes. Finally, … hot in a bowl!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write your recipe for your favourite dish: the title, three ingredients (with some), and four steps with imperatives and sequence markers.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: complete dialogue — price question, bargaining, payment (4 points).", ["complete dialogue"]),
    pAns("Exercise 2: some — any — no — any (1 point each).", ["some — any — no — any"]),
    pAns("Exercise 3: more expensive — sweetest — better — best (1 point each).", ["more expensive"]),
    pAns("Exercise 4: peel — pour — Boil — serve (1 point each).", ["peel"]),
    pAns("Exercise 5: title + ingredients with some + four imperative steps (4 points).", ["imperative steps"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
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
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can ask and state prices: How much is…? How much does… cost?",
      "I can bargain politely: How about…? Can you lower the price to…?",
      "I can use some, any and no — and count what can be counted!",
      "I can compare: cheaper than, more expensive than, the best!",
      "I can name the ingredients, the utensils and the cooking verbs.",
      "I can give kitchen orders: Peel! Cut! Boil! Don’t burn the soup!",
      "I can read a bargaining dialogue with the right intonation.",
      "I can write a recipe and a market dialogue — and act them out!",
    ], "NEXT STOP → UNIT 5: PREVENTIVE HEALTH!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
