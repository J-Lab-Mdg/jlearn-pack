// T6 — UNIT 4 — EVERYDAY MEALS (9 séances + révision + test) — Sessions 31 à 41 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "C0504D"; // rouge brique
const SHADE = "F6E2E1";
const TOTAL = 74;
const AUDIO = {
  dialogue: "https://drive.google.com/uc?export=download&id=1C5e_yk90BH8DHo4J_DbHbf74_G5uTHfO",
  tastes: "https://drive.google.com/uc?export=download&id=1XtRxxCarKupXZ2wRTN_XLYcsdSNHeeID",
  reading: "https://drive.google.com/uc?export=download&id=1zy8BGJbclRcr6m-fbE-aqh3Q2DJBpksE",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — EVERYDAY MEALS", title, slo,
  values: "solidarity, mutual respect", session, materials,
});

const FOOD = [
  ["a mango", "e manngôou"], ["tea", "ti"], ["a biscuit", "e biskite"],
  ["a sausage", "e sossidj"], ["pasta", "pasta"], ["soup", "soup"],
  ["chocolate", "tchoklite"], ["coffee", "kofi"], ["yoghurt", "yogueurte"],
];
const TASTES = [
  ["sweet", "souite"], ["salty", "solti"], ["sour", "saoueur"], ["bitter", "biteur"],
];
function grid(items, perRow, size = 26) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function lunchDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("“WHAT’S FOR LUNCH?” (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("Jeff: Joe, let’s go home. It’s almost twelve o’clock!"),
        L("Joe: Yeah! Let’s go home. I feel so hungry!"),
        L("Jeff: You’re hungry but I’m thirsty. Do you have a bottle of water?"),
        L("Joe: Sorry, I don’t."),
        p([run("(At home)", { italic: true, color: C.GRAY, size: 24 })], { after: 30 }),
        L("Joe: Mom, what’s for lunch?"),
        L("Mom: Wait a moment…"),
        L("Joe: Uhmmm… Chicken and potatoes! It really looks tasty!"),
        L("Mom: And guess what’s for dessert."),
        L("Jeff: Bananas! We often have bananas as dessert!"),
        L("Mom: Not this time! We have apples!"),
        L("Joe: Uhmmm… Apples are sour!"),
        L("Jeff: No, they are not sour. They are sweet!"),
        L("Mom: We will see that later."),
        L("Joe: You’re right, Mom! Enjoy your meal!"),
        L("Joe (eating): What a delicious meal!"),
      ])] }),
    ],
  });
}
function chantBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { center: true, after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE JAZZ CHANT — “I DON’T LIKE CHEESE!”  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("I like mangoes, sweet, sweet, sweet!"),
        L("I like biscuits, what a treat!"),
        L("I don’t like cheese, no, no, no!"),
        L("I don’t like cheese, please, no more!"),
        L("You like coffee? Not for me!"),
        L("I like chocolate, one, two, three!"),
        p([run("(We clap the rhythm: TA-ta-ta TA-ta-ta!)", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 30 }),
      ])] }),
    ],
  });
}
function fruitDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE FRUIT DIALOGUE (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("A: Whoaaa, look at all those fruits!"),
        L("B: Yes, there are a lot of choices. Which one is your favourite?"),
        L("A: My favourite fruit is banana."),
        L("B: I like it too!"),
        L("A: Ooh, and what do you prefer, mangoes or apples?"),
        L("B: I prefer mangoes."),
      ])] }),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — EVERYDAY MEALS", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("What a delicious meal!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_food.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the names of everyday food: mango, tea, biscuit, sausage, pasta…;"),
    p("• say the four tastes: It tastes sweet, salty, sour, bitter;"),
    p("• say what I like and what I don’t like;"),
    p("• say my favourite food: My favourite fruit is… I prefer…;"),
    p("• read and write about everyday meals.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("solidarity, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: SHADE })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned the everyday food (cassava, rice, sweet potato…) and “What did you have for breakfast?”."),
          p("This year: new food, the four TASTES, and how to say what we like and don’t like!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u4_dialogue.png", label: "What’s for lunch? — listen and repeat", url: AUDIO.dialogue }], COLOR),
  ];
}

// ---------- S31 — Food names ----------
function ficheS31() {
  const meta = META("The everyday food",
    "By the end of the lesson, learners will be able to pronounce the names of everyday food correctly, helped by the language transfer between the three languages.",
    "1 / 9", "realia or pictures of food, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Unit 3 and T5.) Answer these questions:"),
       fp("1. What time do we eat lunch?"),
       fp("2. (T5!) Name three foods you remember."),
       fp("3. What’s the weather like today?")],
      [fp("Answer."),
       fp("E.A.: At twelve o’clock; rice, cassava…; It’s …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the picture — name the common food you already know!")],
      [fp("Name the food.")], "Using pictures", "Food picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn nine everyday foods. By the end of this lesson, you will pronounce them like English speakers!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and look: a mango, tea, a biscuit, a sausage, pasta, soup, chocolate, coffee, yoghurt."),
       fp("Language transfer (from the syllabus): compare the three languages! Many of these words look alike in Malagasy, French and English — but the PRONUNCIATION changes. Listen carefully: chocolate… coffee… tea…")],
      [fp("Listen. Compare the spelling and the sound in the three languages.")],
      "Language transfer", "Pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: each word — the class, one row, one pupil. Careful: chocolate has TWO sounds only in English [tchoklite]!"),
       fp("I show a picture: name it! I say a word: point to it!")],
      [fp("Repeat. Name. Point."),
       fp("E.A.: the nine words are pronounced correctly.")],
      "Repetition drill", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So, nine new foods — and a secret: when a word looks like French or Malagasy, say it the ENGLISH way!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Kim’s game: look at the nine pictures for one minute; I hide one — which food is missing?"),
       fp("In pairs: one mimes eating or drinking a food, the other guesses!")],
      [fp("Play. Guess."),
       pAns("E.A.: The yoghurt is missing! — You are drinking coffee!",
        ["missing"], { size: SZ.FICHE })],
      "Game / In pairs", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name five foods from the pictures."),
       fp("2. Say: chocolate, sausage, yoghurt (English way!)."),
       fp("3. Which food do we DRINK?")],
      [fp("Name. Say. Answer."),
       pAns("E.A.: the words are said clearly; tea and coffee.",
        ["tea and coffee"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}

// ---------- S32 — Dialogue lunch ----------
function ficheS32() {
  const meta = META("What’s for lunch?",
    "By the end of the lesson, learners will be able to understand a dialogue about meals (gist and details) and use: I’m hungry, I’m thirsty, it looks tasty, what a delicious meal!",
    "2 / 9", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the nine foods of the last lesson."),
       fp("2. Which food is your favourite?"),
       fp("3. Spell “soup”.")],
      [fp("Answer. Spell."),
       fp("E.A.: mango, tea…; My favourite food is …; S-O-U-P.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("It’s almost twelve o’clock… how does your stomach feel? Today we listen to two very hungry boys!")],
      [fp("Answer. Laugh.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to understand a real conversation about lunch. By the end of this lesson, you will catch its main idea AND its details.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to “What’s for lunch?” twice."),
       fp("First: what is the main idea (the gist)? Then the details: What time is it? Who is hungry? Who is thirsty? What’s for lunch? What’s for dessert?")],
      [fp("Listen. Answer the gist and detail questions."),
       fp("E.A.: two boys go home for lunch; almost twelve; Joe is hungry, Jeff is thirsty; chicken and potatoes; apples.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the meaning from the dialogue: I feel so hungry (I want to eat!), I’m thirsty (I want to drink!), it looks tasty, what a delicious meal!"),
       fp("Repeat the key sentences with feeling: “I feel so hungry!” “What a delicious meal!”")],
      [fp("Explain. Repeat with feeling."),
       fp("E.A.: hungry = eat, thirsty = drink; tasty/delicious = very good.")],
      "Eliciting / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: What’s for lunch? What’s for dessert? — and the meal words: hungry, thirsty, tasty, delicious. Enjoy your meal!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play: in groups of three (Jeff, Joe, Mom), act the dialogue with gestures — the hungriest group wins!")],
      [fp("Act the dialogue."),
       pAns("E.A.: the dialogue is acted with the right intonation and gestures.",
        ["acted"], { size: SZ.FICHE })],
      "Role play / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the dialogue about?"),
       fp("2. Two detail questions (dessert? who is thirsty?)."),
       fp("3. You want to eat: what do you say?")],
      [fp("Answer."),
       pAns("E.A.: lunch at home; apples; Jeff; I’m hungry! / I feel so hungry!",
        ["I’m hungry!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}

// ---------- S33 — Build meal dialogue ----------
function ficheS33() {
  const meta = META("Our meal dialogue",
    "By the end of the lesson, learners will be able to build and act their own dialogue about meals.",
    "3 / 9", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What’s for lunch in the dialogue?"),
       fp("2. Hungry or thirsty? (I want water!)"),
       fp("3. Say the “delicious” sentence.")],
      [fp("Answer."),
       fp("E.A.: chicken and potatoes; thirsty; What a delicious meal!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick chain: “What’s for lunch?” — each pupil answers with a different food!")],
      [fp("Answer in chain.")], "Chain drill", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, YOU write the dialogue! By the end of this lesson, your group will act its own meal conversation.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the plan of the model dialogue on the blackboard: 1. going home (time, hungry/thirsty) — 2. What’s for lunch? — 3. the dessert surprise — 4. Enjoy your meal!")],
      [fp("Observe the plan.")],
      "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("In groups of three, choose: YOUR foods (from the nine new words!), your dessert, who is hungry, who is thirsty."),
       fp("Write the dialogue in the copy-book (8 lines or more), with the model’s expressions.")],
      [fp("Choose. Write.")],
      "Group work", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Check before acting: the question marks, the exclamation marks, Enjoy your meal, and a “delicious” at the end!")],
      [fp("Check.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Act your dialogue in front of the class — with real gestures (eating, drinking, smelling the food)!"),
       fp("The class answers: what was for lunch in their dialogue?")],
      [fp("Act. Listen to the others. Answer."),
       pAns("E.A.: — Mom, what’s for lunch? — Pasta and sausages! — It looks tasty! … — What a delicious meal!",
        ["What’s for lunch?"], { size: SZ.FICHE })],
      "Role play / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say two lines of your dialogue by heart."),
       fp("2. What was for lunch in another group’s dialogue?"),
       fp("3. Write: “What’s for lunch?” (dictation)")],
      [fp("Say. Answer. Write."),
       pAns("E.A.: the lines are correct; the detail is caught; the sentence has the apostrophe and the question mark.",
        ["apostrophe"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}

// ---------- S34 — The 4 tastes ----------
function ficheS34() {
  const meta = META("The four tastes",
    "By the end of the lesson, learners will be able to say the four tastes (sweet, salty, sour, bitter) and classify foods according to their taste.",
    "4 / 9", "taste chart, real foods if possible (salt, sugar, lemon…)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name six everyday foods."),
       fp("2. In the dialogue, are the apples sour or sweet?"),
       fp("3. Say a line of your meal dialogue.")],
      [fp("Answer."),
       fp("E.A.: the foods are named; Joe says sour, Jeff says sweet!; the line is said.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Face game: I mime eating a lemon — look at my face! What happened?")],
      [fp("Observe. Guess.")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the FOUR TASTES of the tongue. By the end of this lesson, you will classify any food!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and repeat with the pictures: SWEET (mangoes, sugar), SALTY (nuts, salt), SOUR (tamarind, lemon), BITTER (black coffee)."),
       fp("The sentence: It tastes sweet! / Mangoes are sweet.")],
      [fp("Listen. Repeat.")],
      "Audio / Using pictures", "Taste pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill with the four faces (happy-sweet, wide eyes-salty, squeezed-sour, tongue out-bitter!)."),
       fp("Classify (from the syllabus): tamarind, nuts, sugar, salt, black coffee, mangoes… — put each food in the right column of the taste chart!")],
      [fp("Repeat with the faces. Classify the foods."),
       fp("E.A.: sweet: sugar, mangoes — salty: nuts, salt — sour: tamarind — bitter: black coffee.")],
      "Repetition drill / Classifying", "Taste chart"),
    stepRow(["5. Synthesis"],
      [fp("So, four tastes: sweet, salty, sour, bitter — and the question: How does it taste? — It tastes …!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In groups: complete the taste chart with THREE more foods per column (from T5 and T6 words!)."),
       fp("Quiz: I say a food — the class shouts its taste!")],
      [fp("Complete the chart. Answer the quiz."),
       pAns("E.A.: lemon → sour! chocolate → sweet! soup → salty!",
        ["sour!"], { size: SZ.FICHE })],
      "Group work / Game", "Chart"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the four tastes."),
       fp("2. Classify: lemon, salt, sugar, black coffee."),
       fp("3. Complete: Tamarind …… sour.")],
      [fp("Say. Classify. Complete."),
       pAns("E.A.: sweet, salty, sour, bitter; the classification is right; tastes / is.",
        ["sweet, salty, sour, bitter"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}

// ---------- S35 — Jazz chant + like/don't like ----------
function ficheS35() {
  const meta = META("I like, I don’t like — the jazz chant",
    "By the end of the lesson, learners will be able to say the jazz chant “I don’t like cheese” and express their likes and dislikes about food.",
    "5 / 9", "audio (QR code), food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the four tastes with the faces."),
       fp("2. How does lemon taste?"),
       fp("3. Name a bitter drink.")],
      [fp("Answer."),
       fp("E.A.: the tastes are said; It tastes sour; black coffee.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: listen to the taste adjectives and repeat them in rhythm: sweet-sweet-SWEET!")],
      [fp("Repeat in rhythm.")], "Repetition drill", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, music! We are going to say a JAZZ CHANT and tell what we like and don’t like.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the jazz chant “I don’t like cheese” and clap the rhythm. Listen again and repeat line by line."),
       fp("Questions: what does the singer like? what doesn’t he like?")],
      [fp("Listen. Clap. Repeat. Answer."),
       fp("E.A.: he likes mangoes, biscuits, chocolate; he doesn’t like cheese or coffee.")],
      "Audio / Jazz chant", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Identify the two magic expressions: I LIKE + food — I DON’T LIKE + food."),
       fp("Draw their use: like + noun (I like mangoes) — and for the questions: Do you like…? — Yes, I do. / No, I don’t.")],
      [fp("Identify. Repeat the forms."),
       fp("E.A.: I like…, I don’t like…, Do you like…?")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: I like chocolate. I don’t like cheese. Do you like coffee? — No, I don’t! Everyone has his tastes — we respect them all!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Say the chant in two teams: team A says the “I like” lines, team B the “I don’t like” lines — then swap!"),
       fp("In pairs: build a mini-dialogue about foods you like and dislike (4 lines).")],
      [fp("Chant in teams. Build and act the dialogue."),
       pAns("E.A.: — Do you like yoghurt? — Yes, I do! I like it. But I don’t like sausage.",
        ["I don’t like"], { size: SZ.FICHE })],
      "Jazz chant / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say four lines of the jazz chant."),
       fp("2. Tell one food you like and one you don’t like."),
       fp("3. Answer: Do you like pasta?")],
      [fp("Chant. Tell. Answer."),
       pAns("E.A.: the chant is said in rhythm; I like … I don’t like …; Yes, I do. / No, I don’t.",
        ["I like"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}

// ---------- S36 — favourite + quiz quiz trade ----------
function ficheS36() {
  const meta = META("My favourite food — Quiz, quiz, trade!",
    "By the end of the lesson, learners will be able to say their favourite food and preferences (I prefer…), and play the “quiz quiz trade” game with food questions.",
    "6 / 9", "small pieces of paper, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the jazz chant (two lines)."),
       fp("2. Do you like coffee?"),
       fp("3. How does chocolate taste?")],
      [fp("Answer."),
       fp("E.A.: the chant; Yes, I do / No, I don’t; It tastes sweet.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Imagine the market, full of fruits! Listen: “Whoaaa, look at all those fruits!”")],
      [fp("Listen. Imagine.")], "Audio", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to say our FAVOURITE food and play a great question game!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the fruit dialogue and repeat: Which one is your favourite? — My favourite fruit is banana. — What do you prefer, mangoes or apples? — I prefer mangoes.")],
      [fp("Listen. Repeat.")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The two new tools: My favourite + food + is … — and I prefer A (to B)."),
       fp("Substitution drill: My favourite fruit is banana → (mango) → (pineapple)… What do you prefer, tea or coffee? → answer!")],
      [fp("Repeat. Substitute. Answer."),
       fp("E.A.: My favourite … is …; I prefer …")],
      "Substitution drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: favourite = the number one of my heart; prefer = I choose this one. Now let’s play!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Quiz quiz trade (from the syllabus): each pupil writes a food name on a small paper and HIDES it. In pairs, ask questions to guess the partner’s paper: Is it sweet? Is it red? Do you drink it? — then TRADE the papers and find a new partner!")],
      [fp("Write. Ask. Guess. Trade. Repeat."),
       pAns("E.A.: — Is it sweet? — Yes. — Is it a fruit? — Yes. — Is it a mango? — Yes!",
        ["Is it sweet?"], { size: SZ.FICHE })],
      "“Quiz quiz trade” / Pairs", "Small papers"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is your favourite food? fruit? drink?"),
       fp("2. What do you prefer, pasta or rice?"),
       fp("3. Ask me a “quiz” question about a hidden food.")],
      [fp("Answer. Ask."),
       pAns("E.A.: My favourite … is …; I prefer …; Is it salty?",
        ["My favourite"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}

// ---------- S37 — Anglophone food ----------
function ficheS37() {
  const meta = META("Food from Anglophone countries",
    "By the end of the lesson, learners will be able to name some famous foods of the Anglophone world and play the food circle game.",
    "7 / 9", "pictures: hamburger, fish and chips, sodas…");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is your favourite food?"),
       fp("2. Ask your neighbour what he/she prefers."),
       fp("3. One food you don’t like?")],
      [fp("Answer. Ask."),
       fp("E.A.: My favourite…; What do you prefer…?; I don’t like…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Who knows this? (I show a hamburger picture.) Where does it come from?")],
      [fp("Answer.")], "Using pictures", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we travel with our plates! We are going to discover famous foods of the countries where English is spoken.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Matching (from the syllabus): match the words with the pictures — a hamburger (USA), fish and chips (England), sodas like cola drinks… Which ones do you know?")],
      [fp("Match. Tell what they know.")],
      "Matching", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Repeat the names: a hamburger, fish and chips, a hot dog, a sandwich, a cake…"),
       fp("Talk: do we eat some of these in Madagascar? Which Malagasy food would YOU present to an English friend?")],
      [fp("Repeat. Discuss."),
       fp("E.A.: the names are said; ideas are shared (rice, romazava presented in English: our beef and greens stew!).")],
      "Contextualisation", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So, every country has its famous food — and food words travel from one language to another, like sandwich!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Circle game (from the syllabus): groups of five, stand in a circle. Say a food of the Anglophone world, in turn. No answer or a wrong one → you sit down! The last one standing wins.")],
      [fp("Play the circle game."),
       pAns("E.A.: hamburger! — fish and chips! — hot dog! — cake! — sandwich!",
        ["fish and chips!"], { size: SZ.FICHE })],
      "Circle game / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name three Anglophone foods."),
       fp("2. Which country eats fish and chips?"),
       fp("3. Do you like hamburgers?")],
      [fp("Answer."),
       pAns("E.A.: hamburger, fish and chips, hot dog; England; Yes, I do / No, I don’t.",
        ["England"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}

// ---------- S38 — Reading ----------
function ficheS38() {
  const meta = META("Reading: “Meals at my house”",
    "By the end of the lesson, learners will be able to read a passage about everyday meals and get its gist and explicit information.",
    "8 / 9", "the reading text, food pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name two Anglophone foods."),
       fp("2. Say the four tastes."),
       fp("3. I like / I don’t like: one sentence each.")],
      [fp("Answer."),
       fp("E.A.: hamburger, fish and chips; sweet, salty, sour, bitter; I like… I don’t like…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: describe this picture (a family around the table). What do you see? What are they eating?")],
      [fp("Describe the picture.")], "Using pictures", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read “Meals at my house”, the week of Hery’s family. By the end of this lesson, you will find all its information.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: listen to the audio while following, then read aloud, one sentence per pupil, with the right intonation.")],
      [fp("Listen. Follow. Read aloud.")],
      "Audio / Reading", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The gist: what is the text about? The details: What do they have for breakfast? Why does Hery put sugar in his tea? Who doesn’t like green leaves? What is the Sunday dessert?")],
      [fp("Answer."),
       fp("E.A.: the meals of a family; rice soup and tea; tea is bitter; his little sister; yoghurt and mangoes.")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, a text about meals tells: the food, the tastes, and the likes/dislikes — exactly our unit!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Post-reading: classify the foods of the text in the taste chart (sweet? bitter? sour?)."),
       fp("Express YOUR likes and dislikes about the foods of the text: I like yoghurt! I don’t like…")],
      [fp("Classify. Express likes/dislikes."),
       pAns("E.A.: bitter: tea without sugar; sweet: mangoes, sugar; sour: tamarind — I like mangoes!",
        ["sour: tamarind"], { size: SZ.FICHE })],
      "Classifying / Personalisation", "Chart"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read four sentences of the text."),
       fp("2. Two detail questions."),
       fp("3. One like and one dislike about the text’s foods.")],
      [fp("Read. Answer."),
       pAns("E.A.: fluent reading; correct details; I like…, I don’t like…",
        ["fluent reading"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}

// ---------- S39 — Writing ----------
function ficheS39() {
  const meta = META("Writing: my everyday meals",
    "By the end of the lesson, learners will be able to write correct sentences about their everyday meals, tastes and preferences, with peer feedback.",
    "9 / 9", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read two sentences of “Meals at my house”."),
       fp("2. Spell “biscuit”."),
       fp("3. What’s your favourite dessert?")],
      [fp("Read. Spell. Answer."),
       fp("E.A.: fluent reading; B-I-S-C-U-I-T; My favourite dessert is …")],
      "Individual work", "Text"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing dictation: “I like mangoes.” “Tea is bitter.” “What’s for lunch?” — write, then check with the model.")],
      [fp("Write. Check.")], "Dictation", "Copy-books"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE about our own meals. By the end of this lesson, your sentences will be corrected by a friend — and perfect!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Brainstorm together: what can we say about our meals? (the foods of each meal, the tastes, I like / I don’t like, my favourite…) — I write the ideas on the blackboard.")],
      [fp("Give ideas.")],
      "Brainstorming", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Build the writing plan: 1. breakfast — 2. lunch — 3. dinner — 4. my favourite food and its taste."),
       fp("One model sentence for each: For breakfast, I have … It tastes …")],
      [fp("Observe the plan and the models.")],
      "Modelling", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: 4 to 6 sentences, the plan on the board, capitals and periods — and at least one taste and one “I like”!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("While-writing: write your sentences about your everyday meals."),
       fp("Exchange with a peer: check the meaning and the sentence structures, give feedback, revise."),
       fp("Post-writing: read each other’s writing aloud and correct the last mistakes together.")],
      [fp("Write. Exchange. Give feedback. Revise. Read aloud."),
       pAns("E.A.: For breakfast, I have rice soup and tea. I put sugar: it tastes sweet! For lunch… My favourite food is …",
        ["For breakfast"], { size: SZ.FICHE })],
      "Peer correction", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two sentences about your lunch."),
       fp("2. Write one taste sentence."),
       fp("3. Read your production.")],
      [fp("Write. Read."),
       pAns("E.A.: For lunch, I have … I like it! — … tastes salty. — the production is read.",
        ["tastes salty"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("EVERYDAY MEALS"),
    sub("1. The everyday food"),
    img("u4_food.png", 440, 768 / 1408),
    grid(FOOD, 3),
    p("", { after: 100 }),
    sub("2. Hungry or thirsty?"),
    pr([...kw("I’m hungry!", "aïm heunngri"), run(" = I want to eat.  "), ...kw("I’m thirsty!", "aïm seursti"), run(" = I want to drink.")]),
    pr([...kw("What’s for lunch?", "ouots fôr leunntch"), run("   "), ...kw("What’s for dessert?", "ouots fôr dizeurte")]),
    pr([...kw("It looks tasty!", "ite louks téisti"), run("   "), ...kw("What a delicious meal!", "ouate e dilicheuss mile")], { after: 60 }),
    lunchDialogueBox(),
    p("", { after: 100 }),
    sub("3. The four tastes"),
    img("u4_tastes.png", 440, 768 / 1408),
    grid(TASTES, 4),
    p("", { after: 40 }),
    pr([run("The sentence: "), ...kw("It tastes sweet.", "ite téists souite"), run("  /  "), ...kw("Mangoes are sweet.", "manngôouz âr souite")], { after: 100 }),
    sub("4. I like, I don’t like"),
    chantBox(),
    p("", { after: 60 }),
    pr([...kw("I like chocolate.", "aï laïk tchoklite"), run("   "), ...kw("I don’t like cheese.", "aï dôounte laïk tchize")]),
    pr([...kw("Do you like coffee?", "dou iou laïk kofi"), run("  →  "), ...kw("Yes, I do. / No, I don’t.", "yèss aï dou / nôou aï dôounte")], { after: 100 }),
    sub("5. My favourite food"),
    fruitDialogueBox(),
    p("", { after: 60 }),
    pr([...kw("Which one is your favourite?", "ouitch ouane iz iôr féivrite"), run("  →  "), ...kw("My favourite fruit is banana.", "maï féivrite froute iz banâna")]),
    pr([...kw("What do you prefer?", "ouate dou iou prifeur"), run("  →  "), ...kw("I prefer mangoes.", "aï prifeur manngôouz")], { after: 100 }),
    sub("6. Food from the Anglophone world"),
    pr([...kw("a hamburger", "e hammbeurgueur"), run(" (USA)   "), ...kw("fish and chips", "fich ande tchips"), run(" (England)   "), ...kw("a hot dog", "e hote dog"), run("   "), ...kw("a sandwich", "e sanndouitch")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u4_dialogue.png", label: "What’s for lunch? — listen and repeat", url: AUDIO.dialogue },
      { qr: "qr_t6_u4_tastes.png", label: "The tastes, the jazz chant and the fruits — listen and say", url: AUDIO.tastes },
    ], COLOR),
  ];
}

// ---------- lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 50 });
  return [
    p([run("READING — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("MEALS AT MY HOUSE", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("My name is Hery. In my family, we have three meals every day."),
        L("For breakfast, we have rice soup and a cup of tea. Sometimes there is a biscuit for me. Tea is a little bitter, so I put sugar in it: now it tastes sweet!"),
        L("For lunch, we have rice with chicken and green leaves. I like chicken very much. My little sister doesn’t like green leaves. She says they are bitter."),
        L("For dinner, we have soup and sweet potatoes. On Sunday, Mom buys yoghurt and mangoes for dessert. Mangoes are my favourite fruit: they are so sweet! But I don’t like tamarind. It is too sour for me."),
        L("What a delicious week!"),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("What do they have for breakfast? Why does Hery put sugar in his tea? Who doesn’t like green leaves? What is the Sunday dessert?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u4_reading.png", label: "Meals at my house — listen and read", url: AUDIO.reading }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Name four foods from the pictures (the teacher shows them).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Give the taste: 1. sugar 2. lemon 3. salt 4. black coffee.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: 1. I …… mangoes (love them!). 2. I …… …… cheese (hate it!). 3. …… you like tea? 4. — No, I …… .")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer: Which one is your favourite fruit? What do you prefer, tea or coffee?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write two sentences about your lunch (food + taste).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the four foods are named correctly (1 point each).", ["named correctly"]),
    pAns("Exercise 2: sweet — sour — salty — bitter (1 point each).", ["sweet — sour"]),
    pAns("Exercise 3: 1. like  2. don’t like  3. Do  4. don’t (1 point each).", ["don’t like"]),
    pAns("Exercise 4: My favourite fruit is … — I prefer … (2 points each).", ["I prefer"]),
    pAns("Exercise 5: For lunch, I have … It tastes … (2 points each).", ["It tastes"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s40", "SESSION 40 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: EVERYDAY MEALS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the food and the tastes:", { after: 100 }),
    grid(FOOD, 3),
    p("", { after: 60 }),
    grid(TASTES, 4),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the nine everyday foods."),
    pAns("E.A.: mango, tea, biscuit, sausage, pasta, soup, chocolate, coffee, yoghurt.", ["yoghurt"]),
    p("2. Say the four tastes and one food for each."),
    pAns("E.A.: sweet (mango), salty (nuts), sour (tamarind), bitter (black coffee).", ["bitter (black coffee)"]),
    p("3. Hungry or thirsty? (I want water / I want rice)"),
    pAns("E.A.: thirsty; hungry.", ["thirsty"]),
    p("4. Say two lines of the jazz chant."),
    pAns("E.A.: I don’t like cheese, no, no, no!…", ["no, no, no!"]),
    p("5. Do you like…? Answer for three foods."),
    pAns("E.A.: Yes, I do. / No, I don’t.", ["Yes, I do."]),
    p("6. What is your favourite food? What do you prefer, rice or pasta?"),
    pAns("E.A.: My favourite food is … — I prefer …", ["My favourite food"]),
    p("7. Name two Anglophone foods."),
    pAns("E.A.: hamburger, fish and chips.", ["hamburger"]),
    p("8. Read three sentences of “Meals at my house”."),
    pAns("E.A.: fluent reading.", ["fluent reading"]),
    p("9. Write: “What a delicious meal!”"),
    pAns("E.A.: correct spelling and exclamation mark.", ["exclamation mark"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s41", "SESSION 41 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 4: EVERYDAY MEALS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: name four foods (pictures) and give the taste of two of them.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Classify in the taste chart: sugar, lemon, salt, black coffee, mango, tamarind, nuts, chocolate.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete the dialogue: — …… you like yoghurt? — Yes, I …… . — What do you ……, tea or coffee? — I …… tea.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Read the text “Meals at my house” and answer two questions.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences about your everyday meals (foods, one taste, one like/dislike).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the foods and tastes are correct (1 point each).", ["correct"]),
    pAns("Exercise 2: sweet: sugar, mango, chocolate — salty: salt, nuts — sour: lemon, tamarind — bitter: black coffee (0.5 point each).", ["salty: salt, nuts"]),
    pAns("Exercise 3: Do — do — prefer — prefer (1 point each).", ["prefer"]),
    pAns("Exercise 4: correct gist and details (2 points each).", ["gist"]),
    pAns("Exercise 5: four correct sentences with a taste and a like/dislike (1 point each).", ["like/dislike"]),
  ];
}

// ---------- leçons du jour (une par fiche) ----------
function dayLesson(sessionNo, title, children) {
  return [
    p([run(`LESSON OF THE DAY — SESSION ${sessionNo}`, { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    ...children,
    p("", { after: 80 }),
    p([run("I copy the lesson of the day in my copy-book.", { italic: true, color: C.GRAY, size: 22 })], { center: true }),
  ];
}
function lessonS31() {
  return dayLesson(31, "THE EVERYDAY FOOD", [
    img("u4_food.png", 380, 768 / 1408),
    grid(FOOD, 3),
    p("", { after: 60 }),
    pr([...kw("I’m hungry!", "aïm heunngri"), run(" = I want to eat.  "), ...kw("I’m thirsty!", "aïm seursti"), run(" = I want to drink.")]),
  ]);
}
function lessonS32() {
  return dayLesson(32, "WHAT’S FOR LUNCH?", [
    img("u4_meal.png", 380, 768 / 1408),
    pr([...kw("What’s for lunch?", "ouots fôr leunntch"), run("  →  "), ...kw("Rice with chicken!", "raïss ouiz tchikène")]),
    pr([...kw("What’s for dessert?", "ouots fôr dizeurte"), run("  →  "), ...kw("Mangoes and yoghurt!", "manngôouz ande yogueurte")], { after: 60 }),
    pr([run("At the table we say: ", { bold: true }), ...kw("It looks tasty!", "ite louks téisti"), run("  "), ...kw("What a delicious meal!", "ouate e dilicheuss mile")]),
    pr([run("The three meals: ", { bold: true }), run("breakfast", { bold: true, color: C.BLUE }), run(" (morning) — "), run("lunch", { bold: true, color: C.BLUE }), run(" (noon) — "), run("dinner", { bold: true, color: C.BLUE }), run(" (evening).")]),
  ]);
}
function lessonS33() {
  return dayLesson(33, "OUR MEAL DIALOGUE", [
    lunchDialogueBox(),
    p("", { after: 60 }),
    pr([run("The polite words of the meal: ", { bold: true }), ...kw("Here you are!", "hir iou âr"), run("  →  "), ...kw("Thank you!", "tenk iou"), run("  "), ...kw("Would you like some more?", "woud iou laïk seume môr")]),
    pr([run("We play the dialogue with a friend — one line each, with a big smile!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS34() {
  return dayLesson(34, "THE FOUR TASTES", [
    img("u4_tastes.png", 380, 768 / 1408),
    grid(TASTES, 4),
    p("", { after: 60 }),
    pr([run("The sentence: ", { bold: true }), ...kw("It tastes sweet.", "ite téists souite"), run("  /  "), ...kw("Mangoes are sweet.", "manngôouz âr souite")]),
    pr([run("Examples: ", { bold: true }), run("sugar → sweet — lemon → sour — salt → salty — black coffee → bitter.")]),
  ]);
}
function lessonS35() {
  return dayLesson(35, "I LIKE, I DON’T LIKE — THE JAZZ CHANT", [
    chantBox(),
    p("", { after: 60 }),
    pr([...kw("I like chocolate.", "aï laïk tchoklite"), run("   "), ...kw("I don’t like cheese.", "aï dôounte laïk tchize")]),
    pr([...kw("Do you like coffee?", "dou iou laïk kofi"), run("  →  "), ...kw("Yes, I do. / No, I don’t.", "yèss aï dou / nôou aï dôounte")], { after: 60 }),
    pr([run("Remember: ", { bold: true }), run("she likes, she doesn’t like", { bold: true, color: C.BLUE }), run(" — the -s of he/she/it!")]),
  ]);
}
function lessonS36() {
  return dayLesson(36, "MY FAVOURITE FOOD", [
    fruitDialogueBox(),
    p("", { after: 60 }),
    pr([...kw("Which one is your favourite?", "ouitch ouane iz iôr féivrite"), run("  →  "), ...kw("My favourite fruit is banana.", "maï féivrite froute iz banâna")]),
    pr([...kw("What do you prefer?", "ouate dou iou prifeur"), run("  →  "), ...kw("I prefer mangoes.", "aï prifeur manngôouz")]),
  ]);
}
function lessonS37() {
  return dayLesson(37, "FOOD FROM THE ANGLOPHONE WORLD", [
    pr([...kw("a hamburger", "e hammbeurgueur"), run(" (USA)   "), ...kw("a hot dog", "e hote dog"), run(" (USA)")]),
    pr([...kw("fish and chips", "fich ande tchips"), run(" (England)   "), ...kw("a sandwich", "e sanndouitch"), run(" (England)")], { after: 60 }),
    pr([run("The fun fact: ", { bold: true }), run("the sandwich has the name of an English lord — the Earl of Sandwich!", { italic: true })]),
    pr([run("And in Madagascar? ", { bold: true }), run("Our rice, our romazava… every country has its star dish!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS38() {
  return dayLesson(38, "READING DAY: “MEALS AT MY HOUSE”", [
    pr([run("The key words of the text: ", { bold: true }), ...kw("breakfast", "brèkfeuste"), run("  "), ...kw("bitter", "biteur"), run("  "), ...kw("sugar", "chougueur"), run("  "), ...kw("dessert", "dizeurte")], { after: 60 }),
    pr([run("How to read well: ", { bold: true }), run("1. Find the three meals in the text. 2. Find who likes what. 3. Read the exclamations with energy: What a delicious week!")]),
    pr([run("The text uses everything of Unit 4: the meals, the tastes, like and don’t like!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS39() {
  return dayLesson(39, "WRITING DAY: MY EVERYDAY MEALS", [
    pr([run("The plan of my paragraph: ", { bold: true }), run("1. For breakfast, we have… — 2. For lunch, we have… — 3. For dinner, we have… — 4. one taste (it tastes…) — 5. my favourite food.")], { after: 60 }),
    pr([run("The writing rules: ", { bold: true }), run("a CAPITAL letter at the start, a period at the end — and the -s of she likes!")]),
    pr([run("Model: ", { bold: true }), run("For breakfast, we have rice soup and tea. For lunch, we have rice with beans. My favourite fruit is mango: it tastes so sweet!", { italic: true })]),
  ]);
}

module.exports = function unit4() {
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
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can name the everyday foods: mango, tea, biscuit, sausage, pasta…",
      "I can say the four tastes: sweet, salty, sour, bitter.",
      "I can say: I’m hungry! I’m thirsty! What a delicious meal!",
      "I can say what I like and what I don’t like.",
      "I can say my favourite food and what I prefer.",
      "I can name foods from the Anglophone world.",
      "I can read and write about everyday meals.",
    ], "Well done! See you in Unit 5: FAMILY!"),
  ];
};
module.exports.COLOR = COLOR;
