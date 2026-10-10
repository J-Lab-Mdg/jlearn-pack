// T7 — UNIT 4 — FAMILY (12 séances + révision + test) — Sessions 52 à 65 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet
const SHADE = "E8DAEF";
const TOTAL = 99;
const AUDIO = {
  emma: "https://drive.google.com/uc?export=download&id=1TOn8K1AKPlbmixETbvyXaeRU5SizTlO_",
  role: "https://drive.google.com/uc?export=download&id=1jHPRVt2DEvCjQPHKpyFWW0mv_1nxQsHH",
  sarah: "https://drive.google.com/uc?export=download&id=1y2XZSgt_A8Lzt7R5XRwb788Bd3G3efg2",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — FAMILY", title, slo,
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
function emmaDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("EMMA’S FAMILY PICTURE (from the syllabus)", [
    L("Andrew: Emma! You dropped something!"),
    L("Emma: Oh! That’s my family picture."),
    L("Andrew: Here you are."),
    L("Emma: Thanks, Andrew."),
    L("Andrew: Who’s that guy? Your brother?"),
    L("Emma: No, that’s my brother-in-law, Matthew. He’s married to my older sister, Alexa. And this is their son, Aiden."),
    L("Andrew: Do they have any other children?"),
    L("Emma: No, just one. He’s an only child."),
    L("Andrew: And what about these people? Who are they?"),
    L("Emma: That’s my aunt and that’s her ex-husband. They are divorced."),
  ]);
}
function roleDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("MY ROLE MODEL (from the syllabus)", [
    L("Amy: Hey, Ben! Who is your role model?"),
    L("Ben: My role model is my big sister, Lucy."),
    L("Amy: What does she look like?"),
    L("Ben: She is tall, with straight black hair. She always looks so happy!"),
    L("Amy: She sounds great! What kind of person is she?"),
    L("Ben: She’s kind, helpful, and really hard-working. She always makes time for others."),
    L("Amy: That’s amazing! I think my role model is my mom. She’s smart and always there for me."),
    L("Ben: Your mom sounds awesome! By the way, I love your sky-blue sweater."),
    L("Amy: Thanks! I love it too. Oh, I saw your flat-nosed dog outside. He’s really cute!"),
    L("Ben: Haha, yes! He’s friendly, but a little lazy."),
  ]);
}
function sarahTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("SARAH’S FAMILY (reading text)", [
    L("Hello! My name is Sarah, and I want to tell you about my family. I am married to my husband, Tom, who is kind and hard-working. Together, we have two wonderful children. I also have a big extended family. For example, I have nieces and nephews who come over sometimes, and it’s always fun! My step-mother is friendly, and I have two step-sisters who are like best friends to me."),
    L("In my family, people have different looks and personalities. My brother is tall and handsome. He is also generous. My sister is short and a bit shy, but very loyal."),
    L("Some people in my family inspire me. My uncle is a role model because he is always courageous and kind."),
    L("Many people say I look like my mother, and my brother and I are alike in character. My family is big and a bit complicated, but I love them all!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — FAMILY", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Who’s that guy? — That’s my brother-in-law!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_tree.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the members of my extended family: nephew, niece, in-laws, step-family;"),
    p("• say who is married, single, engaged, divorced or widowed;"),
    p("• describe a person: physical appearance and character;"),
    p("• use compound adjectives: a long-haired girl, a blue-eyed boy;"),
    p("• talk about my role model — the person who inspires me;"),
    p("• read a text about an extended family;"),
    p("• write a short text that describes my extended family.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, solidarity.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 3)", [
      p("In Unit 3 we talked about food: the meals, the tastes, likes and dislikes — What a delicious meal!"),
      p("In Unit 4, we open the family album: brothers-in-law, nieces and nephews, role models…", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u4_emma.png", label: "Emma’s family picture — listen to the dialogue", url: AUDIO.emma }], COLOR),
  ];
}

// ---------- S52 — The extended family ----------
function ficheS52() {
  const meta = META("The extended family — vocabulary",
    "By the end of the lesson, learners will be able to name the members of the extended family from a family tree.",
    "1 / 12", "family tree (in the book), pictures/stick figures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 3.) Answer these questions:"),
       fp("1. Name the three meals of the day."),
       fp("2. What’s your favourite food? Why?")],
      [fp("Answer."),
       fp("E.A.: breakfast, lunch, dinner; My favourite food is… because it is…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the family tree. Who do you already know? Father? Mother? Brother?…")],
      [fp("Look. Name the members you know.")], "Using pictures/stick figures", "Family tree"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The extended family ». By the end of this lesson, you will name ALL the family — not only father and mother!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning from the family tree: the children of my children are my grandchildren; my brother’s son is my nephew; my sister’s daughter is my niece; husband and wife.")],
      [fp("Observe the tree. Repeat.")],
      "Using the family tree", "Family tree"),
    stepRow(["4. Analysis"],
      [fp("Two special families: the family-in-law (by marriage): father-in-law, mother-in-law, brother-in-law; and the step-family (second marriage): step-father, step-mother, step-sister, step-brother."),
       fp("Where do we place them on the tree?")],
      [fp("Answer. Place them on the tree."),
       fp("E.A.: in-laws = husband’s/wife’s side; step- = new marriage side.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: grandchildren, nephew, niece, husband, wife, the in-laws and the step-family — one big extended family!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Point at the tree and ask: “Who is he for you?” — “He is my nephew!”")],
      [fp("Answer with the correct word."),
       pAns("E.A.: my nephew / my niece / my brother-in-law / my step-sister…",
        ["my nephew"], { size: SZ.FICHE })],
      "Using the family tree", "Family tree"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Your brother’s son is your…? Your sister’s daughter is your…?"),
       fp("2. What do we call the mother of your husband?")],
      [fp("Answer."),
       pAns("E.A.: nephew; niece; mother-in-law.",
        ["nephew"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52");
}
function lessonS52() {
  return [
    p([run("LESSON OF THE DAY — SESSION 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE EXTENDED FAMILY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_tree.png", 420, 768 / 1408),
    p([run("The family tree grows:", { bold: true })], { after: 50 }),
    vocab("grandchildren", "granntchildrenne", "the children of my children"),
    vocab("a nephew", "nèfiou", "my brother’s (or sister’s) son"),
    vocab("a niece", "niiss", "my brother’s (or sister’s) daughter"),
    vocab("husband and wife", "heuzbeunnde annde ouaïf", "the married couple"),
    p("", { after: 60 }),
    box("TWO SPECIAL FAMILIES", [
      bullet([run("The family-in-law", { bold: true, color: C.BLUE }), run(" (by marriage): "), ...kw("father-in-law, mother-in-law, brother-in-law, sister-in-law", "fadheur inne lô")]),
      bullet([run("The step-family", { bold: true, color: C.BLUE }), run(" (a new marriage): "), ...kw("step-father, step-mother, step-brother, step-sister", "stèp fadheur")]),
      bullet([run("My sister’s husband = my "), run("brother-in-law", { bold: true, color: C.BLUE }), run(". My father’s second wife = my "), run("step-mother", { bold: true, color: C.BLUE }), run(".")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("Who’s that?", "houz dhatt"), run("  —  "), run("That’s my nephew, Aiden.", { bold: true, color: C.BLUE })]),
      bullet([run("An "), run("only child", { bold: true, color: C.BLUE }), run(" = a child with no brothers and no sisters.")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u4_emma.png", label: "Emma’s family picture — listen", url: AUDIO.emma }], COLOR),
  ];
}

// ---------- S53 — Married, single, divorced… ----------
function ficheS53() {
  const meta = META("Married, single, engaged… — family situations",
    "By the end of the lesson, learners will be able to say the family situation of a person: married, single, engaged, separated, divorced, widowed.",
    "2 / 12", "flashcards of family situations, pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your brother’s son is your…?"),
       fp("2. Name two members of the family-in-law.")],
      [fp("Answer."),
       fp("E.A.: nephew; father-in-law, brother-in-law…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at these pictures: a wedding, a ring, a person alone… What happens in each picture?")],
      [fp("Look. Guess.")], "Using pictures", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Family situations ». By the end of this lesson, you will say who is married, single, engaged… in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and repeat: to be married (to), to be single, to be engaged, to be separated, to be divorced, to be widowed.")],
      [fp("Listen. Repeat.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Match the flashcards: the picture ↔ the situation. “They’re married.” “They’re engaged.” “They’re divorced.” “They’re single.” “They’re separated.”"),
       fp("Careful: married TO someone — Alexa is married to Matthew.")],
      [fp("Match. Read the sentences."),
       fp("E.A.: correct matching; She is married to…")],
      "Using flashcards", "Flashcards (annex)"),
    stepRow(["5. Synthesis"],
      [fp("So: single → engaged → married… and sometimes separated, divorced, or widowed (the husband or wife died). We always use the verb TO BE.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speak about your family (or an invented family): “My aunt is divorced. My cousin is engaged.”")],
      [fp("Make two true sentences."),
       pAns("E.A.: My uncle is married to…; My big sister is single.",
        ["is married to"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: Alexa … married … Matthew."),
       fp("2. What do we call a person whose husband or wife died?")],
      [fp("Answer."),
       pAns("E.A.: is married to; widowed.",
        ["is married to"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}
function lessonS53() {
  return [
    p([run("LESSON OF THE DAY — SESSION 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MARRIED, SINGLE, ENGAGED…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The family situations — always with the verb TO BE:", { bold: true })], { after: 50 }),
    vocab("to be single", "tou bi singgeul", "not married"),
    vocab("to be engaged", "tou bi inngéidjde", "with a ring — the wedding is coming!"),
    vocab("to be married (to)", "tou bi maride", "husband and wife"),
    vocab("to be separated", "tou bi sèperéitide", "they live apart"),
    vocab("to be divorced", "tou bi divôrste", "the marriage is finished"),
    vocab("to be widowed", "tou bi ouidôoude", "the husband or the wife died"),
    p("", { after: 60 }),
    box("CAREFUL — THE LITTLE WORD “TO”", [
      bullet([run("Alexa "), run("is married to", { bold: true, color: C.BLUE }), run(" Matthew.  (married "), run("TO", { bold: true, color: C.RED }), run(" someone!)")]),
      bullet([run("My aunt "), run("is divorced", { bold: true, color: C.BLUE }), run(". Her ex-husband lives in town.")]),
      bullet([run("An "), run("ex-husband / ex-wife", { bold: true, color: C.BLUE }), run(" = the husband or wife before the divorce.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE STORY OF A COUPLE (a mini-history!)", [
      bullet([run("1. They are "), run("single", { bold: true, color: C.BLUE }), run(".  2. They are "), run("engaged", { bold: true, color: C.BLUE }), run(".  3. They are "), run("married", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Sometimes the story changes: "), run("separated — divorced — widowed", { bold: true, color: C.GRAY }), run(".")], { after: 20 }),
    ]),
  ];
}

// ---------- S54 — Listening: Emma's family picture ----------
function ficheS54() {
  const meta = META("Listening — Emma’s family picture",
    "By the end of the lesson, learners will be able to understand a dialogue about the extended family (gist and details) and role play it.",
    "3 / 12", "audio (QR code), dialogue in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: single → … → married."),
       fp("2. Make a sentence with “married to”.")],
      [fp("Answer."),
       fp("E.A.: engaged; My uncle is married to my aunt.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: Emma drops her family picture at school. Andrew picks it up… What questions can he ask about the photo?")],
      [fp("Guess."),
       fp("E.A.: Who’s that? Is he your brother?…")],
      "Prediction", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to Emma and Andrew. By the end of this lesson, you will understand who is who on Emma’s family picture!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): who are the two speakers? What is the object?")],
      [fp("Listen. Answer."),
       fp("E.A.: Emma and Andrew; a family picture.")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): detailed questions:"),
       fp("1. Who is Matthew? 2. Who is Aiden? 3. How many children do Alexa and Matthew have? 4. What about the aunt and her ex-husband?")],
      [fp("Listen. Answer."),
       fp("E.A.: Emma’s brother-in-law; their son; just one, an only child; they are divorced.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So we understood the family words IN a real conversation: brother-in-law, married to, only child, divorced.")],
      [fp("Listen. Repeat the key words.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-listening: role play the dialogue in pairs — one is Emma, one is Andrew. Then change roles.")],
      [fp("Role play."),
       pAns("E.A.: correct lines with good pronunciation.",
        ["Role play"], { size: SZ.FICHE })],
      "Role play", "Dialogue in the book"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Who is Matthew, and who is he married to?"),
       fp("2. Why is Aiden an “only child”?")],
      [fp("Answer."),
       pAns("E.A.: Emma’s brother-in-law, married to Alexa; because he has no brothers or sisters.",
        ["brother-in-law"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}
function lessonS54() {
  return [
    p([run("LESSON OF THE DAY — SESSION 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("EMMA’S FAMILY PICTURE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_emma.png", 380, 768 / 1408),
    emmaDialogueBox(),
    p("", { after: 60 }),
    box("WHAT WE LEARN FROM THE DIALOGUE", [
      bullet([...kw("Who’s that guy?", "houz dhatt gaï"), run(" — a friendly question about a photo.")]),
      bullet([run("Matthew is Emma’s "), run("brother-in-law", { bold: true, color: C.BLUE }), run(": he is "), run("married to", { bold: true, color: C.BLUE }), run(" her sister Alexa.")]),
      bullet([run("Aiden is an "), run("only child", { bold: true, color: C.BLUE }), run(": no brothers, no sisters.")]),
      bullet([run("The aunt and her "), run("ex-husband", { bold: true, color: C.BLUE }), run(" are "), run("divorced", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Polite moves: "), ...kw("Here you are! — Thanks!", "hir iou ar — thannks")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u4_emma.png", label: "Emma’s family picture — listen and role play", url: AUDIO.emma }], COLOR),
  ];
}

// ---------- S55 — Finish the sentence (competition game) ----------
function ficheS55() {
  const meta = META("Who is who? — the family riddles",
    "By the end of the lesson, learners will be able to define each extended family member and win a sentence-completion game.",
    "4 / 12", "riddle sentences (in the book), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue, who is Matthew?"),
       fp("2. What does “only child” mean?")],
      [fp("Answer."),
       fp("E.A.: Emma’s brother-in-law; a child with no brothers or sisters.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick game: I say a member, you point on the family tree! Nephew! Mother-in-law! Step-brother!")],
      [fp("Point on the tree.")], "Using the family tree", "Family tree"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to play « the family riddles ». By the end of this lesson, you will define every family member — and win the competition!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the model: “Your brother’s son is your…?” — “Nephew!” The possessive ’s shows the family link: my brother’s son = the son OF my brother.")],
      [fp("Listen. Observe the possessive ’s.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Competition game, two teams. I begin the sentence, you end it:"),
       fp("Your sister’s daughter is your… / Your husband’s father is your… / Your wife’s mother is your… / Your father’s second wife is your… / Your mother’s second husband is your… / The child of your son or daughter is your…")],
      [fp("Complete as fast as possible!"),
       fp("E.A.: niece — father-in-law — mother-in-law — step-mother — step-father — grandchild.")],
      "Competition game", "Riddles (annex)"),
    stepRow(["5. Synthesis"],
      [fp("So every family member has a definition with the possessive ’s: my brother’s son is my nephew.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Now YOU make the riddles! One pupil begins: “Your aunt’s husband is your…?” The class answers.")],
      [fp("Make a riddle. Answer the riddles."),
       pAns("E.A.: uncle! — grandmother! — step-sister!…",
        ["uncle!"], { size: SZ.FICHE })],
      "Pupil-made riddles", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Your husband’s father is your…?"),
       fp("2. Make one family riddle yourself.")],
      [fp("Answer."),
       pAns("E.A.: father-in-law; correct riddle with ’s.",
        ["father-in-law"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}
function lessonS55() {
  return [
    p([run("LESSON OF THE DAY — SESSION 55", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FAMILY RIDDLES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("WHO IS WHO? (learn these definitions!)", [
      bullet([run("Your brother’s son is your "), run("nephew", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Your sister’s daughter is your "), run("niece", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Your husband’s father is your "), run("father-in-law", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Your wife’s mother is your "), run("mother-in-law", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Your father’s second wife is your "), run("step-mother", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Your mother’s second husband is your "), run("step-father", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("The daughter of your step-mother is your "), run("step-sister", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("The child of your son or daughter is your "), run("grandchild", { bold: true, color: C.BLUE }), run(".")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SECRET TOOL: THE POSSESSIVE ’S", [
      bullet([run("my brother’s son", { bold: true, color: C.BLUE }), run(" = the son "), run("of", { italic: true }), run(" my brother")]),
      bullet([...kw("Emma’s family picture", "èmaz famili piktcheur"), run(" = the picture of Emma’s family")]),
      bullet([run("The ’s sticks to the OWNER: "), run("Alexa’s son, Tovo’s friend, my aunt’s ex-husband", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S56 — Physical appearance ----------
function ficheS56() {
  const meta = META("What does he look like? — physical appearance",
    "By the end of the lesson, learners will be able to describe a person’s general physical appearance.",
    "5 / 12", "pictures/stick figures of contrasting people");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your sister’s daughter is your…?"),
       fp("2. Make a sentence with the possessive ’s.")],
      [fp("Answer."),
       fp("E.A.: niece; This is Emma’s picture.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at these two stick figures: this man touches the ceiling, this man does not! Guess: tall / short.")],
      [fp("Look. Guess the meaning.")], "Using pictures/stick figures", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « What does he look like? ». By the end of this lesson, you will describe anybody — from head to toe!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning from my gestures and pictures: tall / short, thin / fat, beautiful, pretty, handsome / plain, ugly.")],
      [fp("Watch. Repeat.")],
      "Making gestures", "Pictures/stick figures"),
    stepRow(["4. Analysis"],
      [fp("The magic question: What does he/she look like? — He is tall and thin. She is short and pretty."),
       fp("Careful: handsome for a man, pretty/beautiful for a woman.")],
      [fp("Ask and answer in pairs."),
       fp("E.A.: What does she look like? — She is tall and beautiful.")],
      "Pair work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: What does he/she look like? + TO BE + adjectives: tall/short, thin/fat, beautiful/pretty/handsome/plain/ugly.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Describe a person of your family: “My uncle is tall and a bit fat.” The class draws a quick stick figure of your description!")],
      [fp("Describe. Draw your friend’s description."),
       pAns("E.A.: correct description with two adjectives.",
        ["tall and"], { size: SZ.FICHE })],
      "Personalisation", "Slates/paper"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask the question about my appearance."),
       fp("2. Give the opposite: tall, thin, beautiful.")],
      [fp("Answer."),
       pAns("E.A.: What do you look like? / What does he look like?; short, fat, ugly (or plain).",
        ["What does he look like?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(56, TOTAL, meta, rows, "s56");
}
function lessonS56() {
  return [
    p([run("LESSON OF THE DAY — SESSION 56", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT DOES HE LOOK LIKE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_appearance.png", 420, 768 / 1408),
    p([run("The appearance adjectives — always with TO BE:", { bold: true })], { after: 50 }),
    vocab("tall / short", "tôl / chôrt", "the height"),
    vocab("thin / fat", "thinne / fatt", "the body"),
    vocab("beautiful, pretty", "bioutifoul, priti", "for a woman"),
    vocab("handsome", "hanndseume", "for a man"),
    vocab("plain / ugly", "pléine / eugli", "not beautiful / really not beautiful!"),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("What does she look like?", "ouate deuz chi louk laïk"), run("  —  "), run("She is tall, with straight black hair.", { bold: true, color: C.BLUE })]),
      bullet([...kw("What does he look like?", "ouate deuz hi louk laïk"), run("  —  "), run("He is short and a bit fat.", { bold: true, color: C.BLUE })]),
      bullet([run("For the hair: "), run("long / short hair, straight / curly hair, black / brown hair", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("BE KIND WHEN YOU DESCRIBE!", [
      p("We describe to help people recognise someone — never to laugh at someone. Mutual respect, always!", { after: 40 }),
    ]),
  ];
}

// ---------- S57 — Character ----------
function ficheS57() {
  const meta = META("What kind of person is she? — the character",
    "By the end of the lesson, learners will be able to describe a person’s character and tell their own.",
    "6 / 12", "flashcards with character adjectives");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask the appearance question about my sister."),
       fp("2. Give two pairs of opposite appearance adjectives.")],
      [fp("Answer."),
       fp("E.A.: What does she look like?; tall/short, thin/fat.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Watch my little scenes: I give my pen to everybody (generous!); I keep everything for me (selfish!). Guess the meaning!")],
      [fp("Watch. Guess.")], "Making gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The character ». By the end of this lesson, you will say what kind of person somebody is — inside, not outside!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and repeat by pairs of opposites: nice, friendly, kind / wicked; generous / selfish; courageous / coward; shy, timid; loyal; wise, clever, intelligent / stupid; hard-working / lazy.")],
      [fp("Listen. Repeat.")],
      "Repetition drill", "Flashcards"),
    stepRow(["4. Analysis"],
      [fp("The magic question: What kind of person is he/she? — She is kind and hard-working."),
       fp("Appearance = outside (tall); character = inside (kind). Two different questions!")],
      [fp("Sort the adjectives: appearance or character?"),
       fp("E.A.: tall → appearance; generous → character…")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: What kind of person is he/she? + TO BE + character adjectives — and we learn them in pairs of opposites!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game « Quiz-quiz-trade »: each pupil has a flashcard with 3 adjectives. Ask: “What kind of person are you?” — “I am an honest, courageous, and hard-working person.” Then TRADE cards and find a new friend!")],
      [fp("Ask, answer, trade cards, again!"),
       pAns("E.A.: I am a clever, shy, and loyal person. What kind of person are you?",
        ["What kind of person are you?"], { size: SZ.FICHE })],
      "Quiz-quiz trade", "Flashcards (annex)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the opposite: generous, hard-working, courageous."),
       fp("2. What kind of person are YOU? (two adjectives)")],
      [fp("Answer."),
       pAns("E.A.: selfish, lazy, coward; I am a kind and clever person.",
        ["selfish"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(57, TOTAL, meta, rows, "s57");
}
function lessonS57() {
  return [
    p([run("LESSON OF THE DAY — SESSION 57", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT KIND OF PERSON IS SHE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The character adjectives — in pairs of opposites:", { bold: true })], { after: 50 }),
    vocab("nice, friendly, kind ≠ wicked", "naïss, frenndli, kaïnnde ≠ ouikide"),
    vocab("generous ≠ selfish", "djènereuss ≠ sèlfich"),
    vocab("courageous ≠ coward", "keuréidjeuss ≠ kaoueurde"),
    vocab("shy, timid", "chaï, timide", "quiet with new people"),
    vocab("loyal", "loïeul", "always there for you"),
    vocab("wise, clever, intelligent ≠ stupid", "ouaïz, klèveur, inntèlidjeunnt ≠ stioupide"),
    vocab("hard-working ≠ lazy", "hard oueurking ≠ léizi"),
    p("", { after: 60 }),
    box("TWO QUESTIONS, TWO ANSWERS", [
      bullet([run("Outside: ", { bold: true }), ...kw("What does she look like?", "ouate deuz chi louk laïk"), run(" — She is "), run("tall and pretty", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("Inside: ", { bold: true }), ...kw("What kind of person is she?", "ouate kaïnnde ov peurseune iz chi"), run(" — She is "), run("kind and hard-working", { bold: true, color: C.BLUE }), run(".")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE QUIZ-QUIZ-TRADE MODEL", [
      bullet([run("S1: "), run("What kind of person are you?", { italic: true })]),
      bullet([run("S2: "), run("I am an honest, courageous, and hard-working person. What kind of person are you?", { italic: true })]),
      bullet([run("S1: "), run("I am a clever, shy, and stubborn person.", { italic: true }), run("  — then trade your cards!")], { after: 20 }),
    ]),
  ];
}

// ---------- S58 — Listening: my role model ----------
function ficheS58() {
  const meta = META("Listening — my role model (Amy and Ben)",
    "By the end of the lesson, learners will be able to understand a dialogue describing a person and tell their own role model.",
    "7 / 12", "audio (QR code), dialogue in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask me the character question."),
       fp("2. Give two character adjectives that describe a good friend.")],
      [fp("Answer."),
       fp("E.A.: What kind of person are you?; loyal, kind, generous…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: a role model is the person you take as a model — the person who inspires you. Who can be a role model? A parent? A teacher? A champion?")],
      [fp("Give ideas.")], "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to Amy and Ben talking about their role models. By the end of this lesson, you will describe the person who inspires YOU!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): who is Ben’s role model? Who is Amy’s role model?")],
      [fp("Listen. Answer."),
       fp("E.A.: his big sister Lucy; her mom.")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): detailed questions:"),
       fp("1. What does Lucy look like? 2. What kind of person is she? 3. Why is Amy’s mom her role model?")],
      [fp("Listen. Answer."),
       fp("E.A.: tall, with straight black hair; kind, helpful, hard-working; she’s smart and always there for her.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("So to present a role model: WHO + what he/she LOOKS LIKE + what KIND of person he/she is. The two questions of Unit 4 together!")],
      [fp("Listen. Repeat the plan.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-listening: role play Amy and Ben in pairs. Then tell YOUR role model with the plan (who / looks / character).")],
      [fp("Role play. Tell your role model."),
       pAns("E.A.: My role model is my grandmother. She is small and smiling. She is wise and generous.",
        ["My role model is"], { size: SZ.FICHE })],
      "Role play / Personalisation", "Dialogue in the book"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is a role model?"),
       fp("2. Tell me your role model in two sentences.")],
      [fp("Answer."),
       pAns("E.A.: the person who inspires you; correct two-sentence description.",
        ["the person who inspires you"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58");
}
function lessonS58() {
  return [
    p([run("LESSON OF THE DAY — SESSION 58", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY ROLE MODEL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    roleDialogueBox(),
    p("", { after: 60 }),
    box("THE ROLE MODEL PLAN", [
      bullet([run("A "), ...kw("role model", "rôoul modeul"), run(" = the person you take as a model, the person who "), run("inspires", { bold: true, color: C.BLUE }), run(" you.")]),
      bullet([run("1. WHO? ", { bold: true }), run("My role model is my big sister, Lucy.", { bold: true, color: C.BLUE })]),
      bullet([run("2. LOOKS? ", { bold: true }), run("She is tall, with straight black hair.", { bold: true, color: C.BLUE })]),
      bullet([run("3. CHARACTER? ", { bold: true }), run("She’s kind, helpful, and really hard-working.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u4_role.png", label: "“Who is your role model?” — Amy and Ben", url: AUDIO.role }], COLOR),
  ];
}

// ---------- S59 — Compound adjectives ----------
function ficheS59() {
  const meta = META("Grammar — compound adjectives",
    "By the end of the lesson, learners will be able to build and use compound adjectives (a long-haired girl, a sky-blue dress).",
    "8 / 12", "scrambled word cards, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue, what does Ben say about Amy’s sweater?"),
       fp("2. And about his dog?")],
      [fp("Answer."),
       fp("E.A.: I love your sky-blue sweater; my flat-nosed dog — friendly but lazy.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look: “a girl with long hair”… that’s LONG to say! English has a shortcut: “a long-haired girl”. Today, the shortcut machine!")],
      [fp("Listen. Compare the two forms.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Compound adjectives ». By the end of this lesson, you will build two-word adjectives with a little hyphen!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the three recipes:"),
       fp("1. adjective + noun + -ED: long hair → a long-haired girl; blue eyes → a blue-eyed boy; flat nose → a flat-nosed girl."),
       fp("2. noun + verb-ING: he loves cats → a cat-loving person."),
       fp("3. noun + adjective: blue like the sky → a sky-blue dress.")],
      [fp("Observe. Repeat the examples.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Put the scrambled words in order:"),
       fp("girl – long – haired → ? / blue – dress – sky → ? / boy – blue – eyes → ? / bird’s – blue – egg – sky → ?")],
      [fp("Order the words. Change the endings if needed."),
       fp("E.A.: a long-haired girl; a sky-blue dress; a blue-eyed boy; a sky-blue bird’s egg.")],
      "Ordering game", "Word cards (annex)"),
    stepRow(["5. Synthesis"],
      [fp("So the compound adjective comes BEFORE the noun, with a hyphen: adjective+noun-ED (long-haired), noun+verb-ING (cat-loving), noun+adjective (sky-blue).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Describe your neighbour or a family member with ONE compound adjective: “My niece is a curly-haired girl!”")],
      [fp("Make your sentence."),
       pAns("E.A.: a brown-eyed boy, a rice-loving family, a sky-blue shirt…",
        ["a brown-eyed boy"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Transform: a boy with blue eyes → …"),
       fp("2. Transform: a person who loves dogs → …")],
      [fp("Answer."),
       pAns("E.A.: a blue-eyed boy; a dog-loving person.",
        ["a blue-eyed boy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(59, TOTAL, meta, rows, "s59");
}
function lessonS59() {
  return [
    p([run("LESSON OF THE DAY — SESSION 59", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMPOUND ADJECTIVES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The shortcut machine — three recipes with a hyphen (-):", { bold: true })], { after: 50 }),
    box("RECIPE 1 : ADJECTIVE + NOUN + -ED", [
      bullet([run("long hair → "), ...kw("a long-haired girl", "e longg hèrde gueurl")]),
      bullet([run("blue eyes → "), ...kw("a blue-eyed boy", "e blou aïde boï")]),
      bullet([run("a flat nose → "), ...kw("a flat-nosed dog", "e flatt nôouzde dogg")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RECIPE 2 : NOUN + VERB-ING", [
      bullet([run("he loves cats → "), ...kw("a cat-loving person", "e katt leuvinng peurseune")]),
      bullet([run("she loves rice → "), run("a rice-loving family!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RECIPE 3 : NOUN + ADJECTIVE", [
      bullet([run("blue like the sky → "), ...kw("a sky-blue dress", "e skaï blou drèss")]),
      bullet([run("a sky-blue bird’s egg", { bold: true, color: C.BLUE }), run(" — recipe 3 + the possessive ’s!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("REMEMBER", [
      bullet([run("The compound adjective goes "), run("BEFORE", { bold: true, color: C.RED }), run(" the noun: a "), run("long-haired", { bold: true, color: C.BLUE }), run(" girl (not: a girl long-haired).")]),
      bullet([run("The little line "), run("-", { bold: true, color: C.RED }), run(" is called a "), run("hyphen", { bold: true, color: C.BLUE }), run(".")], { after: 20 }),
    ]),
  ];
}

// ---------- S60 — Listen and draw + family photo ----------
function ficheS60() {
  const meta = META("Listen and draw — describing to be understood",
    "By the end of the lesson, learners will be able to draw a person from an oral description and describe a family member for others to identify.",
    "9 / 12", "paper/slates and pencils, a hidden picture, family photos");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Transform: a girl with long hair → …"),
       fp("2. Give one compound adjective of each recipe.")],
      [fp("Answer."),
       fp("E.A.: a long-haired girl; blue-eyed / cat-loving / sky-blue.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Take out your paper and pencil! Today your EARS draw: I describe, you draw!")],
      [fp("Get ready to draw.")], "Whole-class work", "Paper and pencils"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to PLAY « listen and draw ». By the end of this lesson, you will understand a description perfectly — and describe to be understood!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and draw the girl (I keep my picture hidden): She has long, straight hair. She has two small, round eyes. She has a small nose. She has a big smile with thin lips. She is wearing a dress. She is a bit round, like a circle.")],
      [fp("Listen. Draw what you hear.")],
      "Listen and draw", "Hidden picture"),
    stepRow(["4. Analysis"],
      [fp("Show your drawings! Now I show MY picture. Vote: which drawing is the most similar?"),
       fp("For the different ones: what is the difference? “Her nose is bigger.” “Her hair is shorter.”")],
      [fp("Compare. Say the differences."),
       fp("E.A.: Her nose is bigger; her eyes are smaller…")],
      "Comparative activity", "Drawings"),
    stepRow(["5. Synthesis"],
      [fp("So a good description uses: HAS/HAVE for the parts (she has long hair) and IS for the general look (she is a bit round). Precise words = perfect drawing!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Show your family picture (or draw your family quickly). Describe ONE person; the others identify: “Is it your uncle?” — “Yes, it is!”")],
      [fp("Describe. Identify your friends’ family members."),
       pAns("E.A.: He is tall and thin, he has short grey hair… — It’s your grandfather!",
        ["It’s your grandfather!"], { size: SZ.FICHE })],
      "Personalisation technique", "Family photos"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Describe a face in two sentences (has/have + is)."),
       fp("2. Compare your drawing and mine in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: She has round eyes. She is small. — My girl’s hair is longer.",
        ["She has round eyes."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(60, TOTAL, meta, rows, "s60");
}
function lessonS60() {
  return [
    p([run("LESSON OF THE DAY — SESSION 60", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTEN AND DRAW!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DESCRIPTION I DREW TODAY", [
      bullet([run("She "), run("has", { bold: true, color: C.RED }), run(" long, straight hair.")]),
      bullet([run("She "), run("has", { bold: true, color: C.RED }), run(" two small, round eyes and a small nose.")]),
      bullet([run("She "), run("has", { bold: true, color: C.RED }), run(" a big smile with thin lips.")]),
      bullet([run("She "), run("is", { bold: true, color: C.RED }), run(" wearing a dress. She "), run("is", { bold: true, color: C.RED }), run(" a bit round, like a circle.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("HAS OR IS?", [
      bullet([run("The parts of the body → "), run("HAS/HAVE", { bold: true, color: C.BLUE }), run(": she has long hair, he has blue eyes.")]),
      bullet([run("The general look → "), run("IS/ARE", { bold: true, color: C.BLUE }), run(": she is tall, he is a bit round.")]),
      bullet([run("The family verbs: ", { bold: true }), ...kw("to look like / to resemble / to be alike", "tou louk laïk / tou rizemmbeul / tou bi elaïk")]),
      bullet([run("I "), run("look like", { bold: true, color: C.BLUE }), run(" my mother. My brother and I "), run("are alike", { bold: true, color: C.BLUE }), run(" in character.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("COMPARING DRAWINGS", [
      bullet([run("Her nose is "), run("bigger", { bold: true, color: C.BLUE }), run(". Her hair is "), run("shorter", { bold: true, color: C.BLUE }), run(". My girl is "), run("rounder", { bold: true, color: C.BLUE }), run("!")]),
      bullet([run("The comparative in -ER — we met it in Unit 3 with the tastes!")], { after: 20 }),
    ]),
  ];
}

// ---------- S61 — Reading (1): Sarah's family ----------
function ficheS61() {
  const meta = META("Reading (1) — “Sarah’s family”: the gist",
    "By the end of the lesson, learners will be able to find the gist of a text about an extended family.",
    "10 / 12", "reading text (in the book), wordsearch, flashcards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I look … my mother; my brother and I are … in character."),
       fp("2. Describe a face in one sentence with HAS.")],
      [fp("Answer."),
       fp("E.A.: like; alike; She has small round eyes.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: wordsearch! Find 6 family words hidden in the grid (nephew, niece, wife…). Then match the flashcards: picture ↔ relationship.")],
      [fp("Find the words. Match the flashcards.")], "Wordsearch game / Flashcards", "Wordsearch, flashcards (annex)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ « Sarah’s family ». By the end of this lesson, you will find the gist — the main idea — of the text!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the text once. Who speaks? What does she talk about?")],
      [fp("Read. Answer."),
       fp("E.A.: Sarah; her big extended family.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Check together: is Sarah married? Who is Tom? How many children do they have? Is her family small?")],
      [fp("Answer."),
       fp("E.A.: yes; her husband; two; no — big and a bit complicated!")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So the gist in one sentence: Sarah presents her big extended family — their looks, their characters — and she loves them all!")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the text aloud, one sentence per pupil. The class follows and helps.")],
      [fp("Read aloud."),
       pAns("E.A.: clear reading of the whole text.",
        ["clear reading"], { size: SZ.FICHE })],
      "Reading aloud", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In one sentence: what is the text about?"),
       fp("2. Who is Tom, and what kind of person is he?")],
      [fp("Answer."),
       pAns("E.A.: Sarah’s big extended family; her husband — kind and hard-working.",
        ["her husband"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61");
}
function lessonS61() {
  return [
    p([run("LESSON OF THE DAY — SESSION 61", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: SARAH’S FAMILY (1)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_sarah.png", 380, 768 / 1408),
    sarahTextBox(),
    p("", { after: 60 }),
    box("THE GIST", [
      bullet([run("The gist", { bold: true, color: C.BLUE }), run(" = the main idea of the text, in one sentence.")]),
      bullet([run("Here: "), run("Sarah presents her big extended family — and she loves them all!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u4_sarah.png", label: "“Sarah’s family” — listen and follow in your book", url: AUDIO.sarah }], COLOR),
  ];
}

// ---------- S62 — Reading (2): details, inference, crossword ----------
function ficheS62() {
  const meta = META("Reading (2) — details, inference and new words",
    "By the end of the lesson, learners will be able to answer detailed questions, infer information and list new words from the text.",
    "11 / 12", "reading text (in the book), crossword");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of “Sarah’s family”?"),
       fp("2. Who is Sarah married to?")],
      [fp("Answer."),
       fp("E.A.: Sarah presents her big extended family; to Tom.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick quiz on the text — books closed! Tall and handsome: who is it? Short and shy but loyal: who is it?")],
      [fp("Answer from memory."),
       fp("E.A.: her brother; her sister.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the text AGAIN, like detectives. By the end of this lesson, you will find details, infer hidden information, and collect new words!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: detailed questions: 1. Who comes over sometimes? 2. Who is like a best friend to Sarah? 3. Why is her uncle a role model?")],
      [fp("Read. Answer."),
       fp("E.A.: her nieces and nephews; her two step-sisters; he is always courageous and kind.")],
      "Question-answer", "Text"),
    stepRow(["4. Analysis"],
      [fp("Inference — the text does NOT say it, but we can guess it: Sarah’s parents are divorced or her mother died… How do we know?"),
       fp("E.A.: because she has a step-mother! Inference = reading between the lines.")],
      [fp("Infer. Justify with the text."),
       fp("E.A.: “My step-mother is friendly” → her father married again.")],
      "Inference activity", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So a detective reader finds: the details (written), the inferences (hidden) and the new words. Our new words: extended, wonderful, complicated, inspire, alike.")],
      [fp("Listen. Repeat. Copy the new words.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Crossword of characters! ACROSS: 1. cares only about themselves (selfish) 3. not willing to work (lazy) 5. deep understanding (wise) 6. never changes their ideas (stubborn). VERTICAL: 2. supports you all the time (loyal) 3. intelligent, understands fast (clever) 4. doesn’t lie (honest).")],
      [fp("Complete the crossword."),
       pAns("E.A.: selfish, lazy, wise, stubborn — loyal, clever, honest.",
        ["selfish"], { size: SZ.FICHE })],
      "Crosswords", "Crossword (annex)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one detail and one inference from the text."),
       fp("2. A person who doesn’t lie is…?")],
      [fp("Answer."),
       pAns("E.A.: detail: Tom is kind; inference: her father married again; honest.",
        ["honest"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62");
}
function lessonS62() {
  return [
    p([run("LESSON OF THE DAY — SESSION 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: SARAH’S FAMILY (2)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DETECTIVE READER", [
      bullet([run("The details", { bold: true, color: C.BLUE }), run(" — written in the text: Tom is kind and hard-working.")]),
      bullet([run("The inference", { bold: true, color: C.BLUE }), run(" — hidden between the lines: Sarah has a step-mother → her father married again!")]),
      bullet([run("The new words", { bold: true, color: C.BLUE }), run(" — collect them in your notebook!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("New words from the text:", { bold: true })], { after: 50 }),
    vocab("extended family", "iksntenndide famili", "the big family, not only parents and children"),
    vocab("wonderful", "ouonndeurfoul", "very, very good"),
    vocab("complicated", "kommplikéitide", "not simple"),
    vocab("to inspire", "tou innspaïeur", "to give the wish to do well"),
    p("", { after: 60 }),
    box("THE CHARACTER CROSSWORD (learn these!)", [
      bullet([run("selfish", { bold: true, color: C.BLUE }), run(" — cares only about themselves")]),
      bullet([run("lazy", { bold: true, color: C.BLUE }), run(" — not willing to work")]),
      bullet([run("wise", { bold: true, color: C.BLUE }), run(" — has experience and deep understanding")]),
      bullet([run("stubborn", { bold: true, color: C.BLUE }), run(" — never changes their ideas"), run("  [steubeurne]", { italic: true, color: C.GRAY })]),
      bullet([run("loyal", { bold: true, color: C.BLUE }), run(" — supports you all the time")]),
      bullet([run("clever", { bold: true, color: C.BLUE }), run(" — intelligent, understands fast")]),
      bullet([run("honest", { bold: true, color: C.BLUE }), run(" — doesn’t lie"), run("  [onist]", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
  ];
}

// ---------- S63 — Writing: my extended family ----------
function ficheS63() {
  const meta = META("Writing — my extended family",
    "By the end of the lesson, learners will be able to write a coherent short text that describes their extended family, and check a peer’s text.",
    "12 / 12", "notebooks, the model text");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two new words from Sarah’s text."),
       fp("2. A person who never changes their ideas is…?")],
      [fp("Answer."),
       fp("E.A.: extended, inspire…; stubborn.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: draw YOUR extended family tree quickly (circles and lines). Put the names.")],
      [fp("Draw your family tree.")], "Whole-class work", "Notebooks"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE about our extended family, like Sarah. By the end of this lesson, you will write your own family text!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and complete with family words: My aunt is … to my uncle. Their son is my … . My grandmother is … : my grandfather died.")],
      [fp("Complete."),
       fp("E.A.: married; cousin; widowed.")],
      "Listen and complete", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write 5 sentences with the plan: 1. my family is big/small 2. one member + situation (married to…) 3. his/her looks 4. his/her character 5. my role model in the family."),
       fp("Then link them into ONE paragraph.")],
      [fp("Write your sentences, then your paragraph.")],
      "Guided writing", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Exchange notebooks with your neighbour! Check: the verb TO BE, married TO, the possessive ’s, has/have for the body. Two stars and one wish!")],
      [fp("Check your friend’s text. Give two stars and one wish."),
       fp("E.A.: I like your compound adjective! Careful: “married TO”.")],
      "Peer correction", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Post-writing: read your PEER’S text to the class. The class asks one question about it!")],
      [fp("Read your friend’s text. Answer one question."),
       pAns("E.A.: clear reading; correct answer about the text.",
        ["clear reading"], { size: SZ.FICHE })],
      "Reading aloud", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your final paragraph."),
       fp("2. Give one correction you made thanks to your friend.")],
      [fp("Answer."),
       pAns("E.A.: coherent 5-sentence paragraph; I forgot the “to” of married to!",
        ["coherent"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63");
}
function lessonS63() {
  return [
    p([run("LESSON OF THE DAY — SESSION 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I WRITE ABOUT MY FAMILY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FAMILY PARAGRAPH PLAN", [
      bullet([run("1. ", { bold: true }), run("My family — big or small? "), run("My family is big and a bit complicated!", { italic: true, color: C.GRAY })]),
      bullet([run("2. ", { bold: true }), run("One member + situation: "), run("My aunt is married to a teacher.", { italic: true, color: C.GRAY })]),
      bullet([run("3. ", { bold: true }), run("The looks: "), run("She is short, with curly black hair.", { italic: true, color: C.GRAY })]),
      bullet([run("4. ", { bold: true }), run("The character: "), run("She is generous and hard-working.", { italic: true, color: C.GRAY })]),
      bullet([run("5. ", { bold: true }), run("My role model: "), run("She inspires me — she is my role model!", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE WRITER’S CHECKPOINTS", [
      bullet([run("✔ the verb "), run("TO BE", { bold: true, color: C.RED }), run(" everywhere: she IS kind (not “she kind”)")]),
      bullet([run("✔ "), run("married TO", { bold: true, color: C.RED }), run(" someone")]),
      bullet([run("✔ the possessive "), run("’s", { bold: true, color: C.RED }), run(": my brother’s son")]),
      bullet([run("✔ "), run("has/have", { bold: true, color: C.RED }), run(" for the body: she has long hair")]),
      bullet([run("✔ capital letter and full stop!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("PEER CORRECTION: TWO STARS AND ONE WISH", [
      p("★ Two things you LIKE in your friend’s text.  ✎ One thing to make better. Kind words only — mutual respect!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 4", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("FAMILY"),
    sub("1. The extended family"),
    bullet([run("grandchildren — nephew — niece — husband and wife", { bold: true, color: C.BLUE })]),
    bullet([run("the in-laws (by marriage): father/mother/brother/sister-in-law", { bold: true, color: C.BLUE })]),
    bullet([run("the step-family (new marriage): step-father, step-mother, step-sister, step-brother", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The family situations (with TO BE)"),
    bullet([run("single → engaged → married (to) ; separated, divorced, widowed", { bold: true, color: C.BLUE })]),
    bullet([...kw("Alexa is married to Matthew.", "elèxa iz maride tou mathiou")], { after: 100 }),
    sub("3. The possessive ’s"),
    bullet([run("my brother’s son = the son of my brother → my nephew!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Describing people — outside and inside"),
    bullet([...kw("What does she look like?", "ouate deuz chi louk laïk"), run(" — tall/short, thin/fat, pretty, handsome…")]),
    bullet([...kw("What kind of person is she?", "ouate kaïnnde ov peurseune iz chi"), run(" — kind, generous, shy, loyal, clever, hard-working…")]),
    bullet([run("HAS for the body (she has long hair) — IS for the look (she is tall)", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Compound adjectives"),
    bullet([run("adjective+noun-ED: a long-haired girl, a blue-eyed boy", { bold: true, color: C.BLUE })]),
    bullet([run("noun+verb-ING: a cat-loving person — noun+adjective: a sky-blue dress", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Look like, resemble, be alike"),
    bullet([run("I look like my mother. — My brother and I are alike in character.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. My role model"),
    bullet([run("The person who inspires me: WHO + LOOKS + CHARACTER — "), run("My role model is my big sister!", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t7_u4_emma.png", label: "Emma’s family picture", url: AUDIO.emma },
      { qr: "qr_t7_u4_role.png", label: "“Who is your role model?” — Amy and Ben", url: AUDIO.role },
      { qr: "qr_t7_u4_sarah.png", label: "“Sarah’s family” (reading text)", url: AUDIO.sarah },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete the riddles: 1. Your brother’s son is your… 2. Your wife’s mother is your… 3. Your father’s second wife is your… 4. The child of your daughter is your… .")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with the right situation: 1. They have a ring, the wedding is soon: they are … . 2. Her husband died: she is … . 3. The marriage is finished: they are … . 4. Alexa … married … Matthew.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Build the compound adjectives: 1. a girl with long hair → … 2. a boy with blue eyes → … 3. a person who loves cats → … 4. a dress blue like the sky → … .")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("HAS or IS? 1. She … tall. 2. She … long curly hair. 3. He … a small nose. 4. He … a bit round.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write the questions: 1. “She is tall and thin.” 2. “She is kind and loyal.” 3. “My role model is my mom.” 4. “No, he’s an only child.”")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: nephew — mother-in-law — step-mother — grandchild (1 point each).", ["nephew"]),
    pAns("Exercise 2: engaged — widowed — divorced — is married to (1 point each).", ["engaged"]),
    pAns("Exercise 3: a long-haired girl — a blue-eyed boy — a cat-loving person — a sky-blue dress (1 point each).", ["a long-haired girl"]),
    pAns("Exercise 4: 1. is  2. has  3. has  4. is (1 point each).", ["has"]),
    pAns("Exercise 5: 1. What does she look like? 2. What kind of person is she? 3. Who is your role model? 4. Does he have any brothers or sisters? (1 point each).", ["What does she look like?"]),
  ];
}

// ---------- S64 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s64", "SESSION 64 / 99", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: FAMILY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name four members of the extended family (not father/mother/brother/sister!)."),
    pAns("E.A.: nephew, niece, grandchildren, brother-in-law, step-mother…", ["nephew"]),
    p("2. Say the story of a couple in three steps."),
    pAns("E.A.: they are single → engaged → married.", ["engaged"]),
    p("3. In Emma’s dialogue: who is Matthew? Who is Aiden?"),
    pAns("E.A.: her brother-in-law (married to Alexa); their son, an only child.", ["brother-in-law"]),
    p("4. Make two riddles with the possessive ’s."),
    pAns("E.A.: Your sister’s daughter is your…? (niece) Your husband’s father is your…? (father-in-law)", ["Your sister’s daughter"]),
    p("5. Ask the two description questions and answer them about your role model."),
    pAns("E.A.: What does she look like? What kind of person is she? — tall…, kind…", ["What kind of person is she?"]),
    p("6. Give five character adjectives in pairs of opposites."),
    pAns("E.A.: generous/selfish, hard-working/lazy, courageous/coward…", ["generous/selfish"]),
    p("7. Build one compound adjective of each recipe."),
    pAns("E.A.: long-haired, cat-loving, sky-blue.", ["long-haired"]),
    p("8. HAS or IS? she … short; she … curly hair; he … thin lips; he … wearing a shirt."),
    pAns("E.A.: is — has — has — is.", ["is — has"]),
    p("9. Complete: I look … my mother; my brother and I are … in character."),
    pAns("E.A.: like; alike.", ["alike"]),
    p("10. In Sarah’s text: give one detail and one inference."),
    pAns("E.A.: detail: Tom is kind and hard-working; inference: her father married again (she has a step-mother).", ["her father married again"]),
  ];
}

// ---------- S65 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s65", "SESSION 65 / 99", { bold: true, size: 28, after: 60 }),
    p([run("T7 TEST PAPER — UNIT 4: FAMILY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: present your role model — who, looks, character, why.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete the riddles: 1. Your brother’s son is your… 2. Your wife’s mother is your… 3. The daughter of your step-mother is your… 4. The children of your children are your… .")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: 1. My aunt … divorced. 2. Alexa is married … Matthew. 3. She … long straight hair. 4. My sister and I … alike.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Build compound adjectives: 1. boy – eyes – blue → … 2. girl – hair – long → … 3. dress – sky – blue → … 4. person – dogs – love → … .")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (4-5 sentences) about one member of your extended family: who + situation + looks + character.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: who + looks (2 adjectives) + character (2 adjectives) + reason (1 point per element).", ["role model"]),
    pAns("Exercise 2: nephew — mother-in-law — step-sister — grandchildren (1 point each).", ["nephew"]),
    pAns("Exercise 3: 1. is  2. to  3. has  4. are (1 point each).", ["to"]),
    pAns("Exercise 4: a blue-eyed boy — a long-haired girl — a sky-blue dress — a dog-loving person (1 point each).", ["a blue-eyed boy"]),
    pAns("Exercise 5: coherent paragraph with the four elements (1 point each).", ["coherent paragraph"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS52(), pageBreak(), ...lessonS52(), pageBreak(),
    ...ficheS53(), pageBreak(), ...lessonS53(), pageBreak(),
    ...ficheS54(), pageBreak(), ...lessonS54(), pageBreak(),
    ...ficheS55(), pageBreak(), ...lessonS55(), pageBreak(),
    ...ficheS56(), pageBreak(), ...lessonS56(), pageBreak(),
    ...ficheS57(), pageBreak(), ...lessonS57(), pageBreak(),
    ...ficheS58(), pageBreak(), ...lessonS58(), pageBreak(),
    ...ficheS59(), pageBreak(), ...lessonS59(), pageBreak(),
    ...ficheS60(), pageBreak(), ...lessonS60(), pageBreak(),
    ...ficheS61(), pageBreak(), ...lessonS61(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can name the members of my extended family: nephew, niece, in-laws, step-family.",
      "I can say who is single, engaged, married to, divorced or widowed.",
      "I can use the possessive ’s: my brother’s son is my nephew.",
      "I can describe a person outside: What does she look like? — She is tall.",
      "I can describe a person inside: What kind of person is she? — She is kind.",
      "I can build compound adjectives: a long-haired girl, a sky-blue dress.",
      "I can talk about my role model — the person who inspires me.",
      "I can read and write a text about an extended family.",
    ], "Well done! See you in Unit 5: MEANS OF COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.bullet = bullet;
module.exports.vocab = vocab;
module.exports.box = box;
module.exports.emmaDialogueBox = emmaDialogueBox;
module.exports.roleDialogueBox = roleDialogueBox;
module.exports.sarahTextBox = sarahTextBox;
module.exports.META = META;
module.exports.SHADE = SHADE;
