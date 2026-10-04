// T6 — UNIT 5 — FAMILY (9 séances + révision + test) — Sessions 42 à 52 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "76923C"; // vert olive
const SHADE = "EAF1DD";
const TOTAL = 74;
const AUDIO = {
  family: "https://drive.google.com/uc?export=download&id=1vG7ShsQRBxIelz1ULihF5c-ack1oNJxc",
  grandma: "https://drive.google.com/uc?export=download&id=1opDgvIgDMFHjMin3UfAo3kf8ibCjvMXA",
  thisthat: "https://drive.google.com/uc?export=download&id=1NmOfdFgcVEbo6P9lAIuDxrbpeYYdnW-4",
};
const bullet = (runs, o = {}) => pr(
  [run("\u2022  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });

const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — FAMILY", title, slo,
  values: "responsibility, mutual respect", session, materials,
});

const FAMILY = [
  ["grandfather", "granndfâzeur"], ["grandmother", "granndmeuzeur"], ["grandparents", "granndpèrennts"],
  ["an uncle", "ane eunnkeul"], ["an aunt", "ane ânnte"], ["a cousin", "e keuzine"],
];
const PLURALS = [
  ["a man → men", "mane → mène"], ["a woman → women", "woumane → ouimine"], ["a child → children", "tchaïlde → tchildrène"],
  ["a foot → feet", "foute → fite"], ["a tooth → teeth", "tousse → tisse"], ["a person → people", "peursone → pipeul"],
];
const DEMO = [
  ["this", "zisse"], ["that", "zate"], ["these", "zize"], ["those", "zôouz"],
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
function familyBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("“MY FAMILY” (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("My name is Fidy. I live with my mom, my dad, and my little sister. My mom is very kind, and my dad is funny. My sister and I like to play together."),
        L("I also have many relatives. I have two grandmothers and two grandfathers. We call them Grandma and Grandpa. They love to tell us stories."),
        L("My mom has a brother. He is my uncle, and he is really cool! My dad has a sister, and she is my aunt. My aunt loves to cook, and my uncle loves to play soccer."),
        L("I have three cousins. They are like friends to me. We play games together and have fun at family parties."),
        L("I am very happy to have a big family. We take care of each other and have many good times together."),
      ])] }),
    ],
  });
}
function albumBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE PHOTO ALBUM DIALOGUE", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("A: Look! This is my uncle. He is really cool!"),
        L("B: And who is that, over there?"),
        L("A: That is my aunt. She loves to cook."),
        L("B: Are these your cousins?"),
        L("A: Yes! These are my cousins. We play games together."),
        L("B: And those two people?"),
        L("A: Those are my grandparents. They love to tell us stories."),
      ])] }),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 5 — FAMILY", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("We take care of each other!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_family.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name my extended family: grandparents, uncle, aunt, cousins;"),
    p("• use regular and irregular plural nouns: brothers, children, women…;"),
    p("• use the possessive case: my uncle’s bike, my cousins’ toys;"),
    p("• use this, that, these, those to show people and things;"),
    p("• read and write about my extended family.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("responsibility, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: SHADE })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned the small family: mother, father, brother, sister — and “Who is this? This is my mother.”"),
          p("This year: the BIG family (grandparents, uncle, aunt, cousins), the plurals, and the little ’s that shows who owns what!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u5_family.png", label: "My family (Fidy) — listen", url: AUDIO.family }], COLOR),
  ];
}

// ---------- S42 — Extended family vocabulary ----------
function ficheS42() {
  const meta = META("The extended family",
    "By the end of the lesson, learners will be able to name the members of the extended family: grandparents, grandfather, grandmother, uncle, aunt, cousins.",
    "1 / 9", "family tree picture, family photos if possible");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(T5.) Answer these questions:"),
       fp("1. Who is this? (I show the mother on the family picture.)"),
       fp("2. How many brothers and sisters do you have?"),
       fp("3. What are their names?")],
      [fp("Answer."),
       fp("E.A.: This is the mother; I have … brother(s) and … sister(s); His/Her name is …")],
      "Personalisation technique", "Family picture"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at the big family tree! Point to the people you can already name (mother, father…). And who are the others?")],
      [fp("Point. Name. Guess.")], "Using pictures", "Family tree"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to meet the BIG family. By the end of this lesson, you will name all your relatives in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and point on the family tree: grandfather, grandmother — together: grandparents. Your mom’s or dad’s brother: your uncle. Their sister: your aunt. Your uncle’s and aunt’s children: your cousins."),
       fp("All these people are your relatives.")],
      [fp("Listen. Point on the tree.")],
      "Contextualisation", "Family tree"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: each word — the class, one row, one pupil. Careful: aunt [ânnte], cousin [keuzine]!"),
       fp("I point to a person on the tree: name him/her! I say a word: point!")],
      [fp("Repeat. Name. Point."),
       fp("E.A.: the six words are pronounced correctly.")],
      "Repetition drill", "Family tree"),
    stepRow(["5. Synthesis"],
      [fp("So: grandparents (grandfather + grandmother), uncle, aunt, cousins — all our relatives, our big family!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Draw YOUR family tree quickly in the copy-book and label it in English."),
       fp("In pairs: present two relatives — “I have one uncle. His name is …”")],
      [fp("Draw. Label. Present."),
       pAns("E.A.: I have two grandmothers. I have three cousins.",
        ["grandmothers"], { size: SZ.FICHE })],
      "Personalisation / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the six family words of today."),
       fp("2. Who are your grandparents?"),
       fp("3. Your uncle’s children are your …?")],
      [fp("Name. Answer."),
       pAns("E.A.: grandfather, grandmother…; my grandfather and my grandmother; my cousins.",
        ["my cousins"], { size: SZ.FICHE })],
      "Individual work", "Family tree"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}

// ---------- S43 — Listening "My family" ----------
function ficheS43() {
  const meta = META("Listening: “My family”",
    "By the end of the lesson, learners will be able to get the gist and detailed information from an oral passage about the extended family.",
    "2 / 9", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the members of the extended family."),
       fp("2. Who is your mother’s sister?"),
       fp("3. Spell “uncle”.")],
      [fp("Answer. Spell."),
       fp("E.A.: grandparents, uncle, aunt, cousins; my aunt; U-N-C-L-E.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: the title of the passage is “My family”. Predict: what will Fidy talk about?"),
       fp("And you? Tell us about your family: how many brothers and sisters, their names…")],
      [fp("Predict from the title. Talk about their family.")], "Eliciting technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Fidy’s passage about his big family. By the end of this lesson, you will catch its main idea AND its details.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to “My family” twice."),
       fp("First: what is the passage about (the gist)? Then the details: Who does Fidy live with? How many grandmothers and grandfathers does he have? Who loves to cook? Who loves to play soccer? How many cousins does he have?")],
      [fp("Listen. Answer the gist and detail questions."),
       fp("E.A.: Fidy’s family; his mom, dad and little sister; two and two; his aunt; his uncle; three cousins.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: check the meaning of the words: relatives, Grandma and Grandpa, take care of each other."),
       fp("Read the passage aloud, one sentence per pupil — pay attention to the pronunciation!")],
      [fp("Explain the words. Read aloud."),
       fp("E.A.: relatives = the people of our big family; take care of each other = we help each other.")],
      "Eliciting / Reading aloud", "Text on the board"),
    stepRow(["5. Synthesis"],
      [fp("So, Fidy has a big family: grandparents who tell stories, a cool uncle, an aunt who cooks, and three cousins like friends!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Speak like Fidy! In pairs, talk about YOUR relatives: “I have … cousins. My uncle loves to …”")],
      [fp("Talk about their relatives with peers."),
       pAns("E.A.: I have two aunts. My grandmother loves to tell stories.",
        ["two aunts"], { size: SZ.FICHE })],
      "Personalisation / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the passage about?"),
       fp("2. Two detail questions (cousins? who cooks?)."),
       fp("3. One sentence about YOUR relatives.")],
      [fp("Answer."),
       pAns("E.A.: Fidy’s big family; three; his aunt; I have … / My uncle …",
        ["three"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(43, TOTAL, meta, rows, "s43");
}

// ---------- S44 — Plural nouns ----------
function ficheS44() {
  const meta = META("One and many — plural nouns",
    "By the end of the lesson, learners will be able to form and use regular and irregular plural nouns.",
    "3 / 9", "the passage “My family”, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How many cousins does Fidy have?"),
       fp("2. Who loves to play soccer?"),
       fp("3. Say one sentence about your relatives.")],
      [fp("Answer."),
       fp("E.A.: three cousins; his uncle; I have …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("One hand… two…? One eye… two…? (I show!) Today, the secret of ONE and MANY!")],
      [fp("Answer: hands! eyes!")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the plural of nouns. By the end of this lesson, you will say one child… two children without mistakes!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Underline the plural nouns in Fidy’s passage: grandmothers, grandfathers, cousins, stories, games, parties, relatives…"),
       fp("Observe: what little letter do we see at the end?")],
      [fp("Underline the plural nouns. Observe."),
       fp("E.A.: they end with -s (or -ies).")],
      "Observation / Induction", "The passage"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules: REGULAR plurals take -s (brother → brothers); after a consonant + y, -ies (story → stories; party → parties)."),
       fp("But some nouns are IRREGULAR — no -s at all: a man → men, a woman → women, a child → children, a foot → feet, a tooth → teeth, a person → people!")],
      [fp("Draw the rules. Repeat the irregular pairs."),
       fp("E.A.: regular: + s / + ies; irregular: men, women, children, feet, teeth, people.")],
      "Induction / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: many nouns take -s — but the family of “child, man, woman, foot, tooth” changes completely. Listen to the audio and repeat!")],
      [fp("Listen (QR code). Repeat.")], "Audio", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Flash game: I say ONE, you say MANY! (child → children!, foot → …, story → …)"),
       fp("Complete: I have two … (grandmother). Fidy has three … (cousin). The … (child) play games.")],
      [fp("Play. Complete."),
       pAns("E.A.: children! feet! stories! — grandmothers, cousins, children.",
        ["children!"], { size: SZ.FICHE })],
      "Game / Individual work", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the plural: brother, party, man, tooth."),
       fp("2. One sentence with “children”."),
       fp("3. Regular or irregular: “feet”?")],
      [fp("Answer. Write."),
       pAns("E.A.: brothers, parties, men, teeth; The children play together; irregular.",
        ["irregular"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44");
}

// ---------- S45 — Possessive case ----------
function ficheS45() {
  const meta = META("The possessive case",
    "By the end of the lesson, learners will be able to use the possessive case with singular and plural nouns (my uncle’s bike, my cousins’ toys).",
    "4 / 9", "classroom objects, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Plural of: child, woman, story."),
       fp("2. One sentence with a plural noun."),
       fp("3. Name four relatives.")],
      [fp("Answer."),
       fp("E.A.: children, women, stories; the sentence is correct; uncle, aunt…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Whose pen is this? (I take a pupil’s pen.) It is … pen? Today, the little ’s that shows the owner!")],
      [fp("Answer. Guess.")], "Using realia", "A pupil’s pen"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the possessive case. By the end of this lesson, you will say whose things they are — the English way!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe these sentences from Fidy’s world: This is Fidy’s sister. My uncle’s ball is new. My grandmother’s cats are little."),
       fp("Where is the owner? Where is the little ’s?")],
      [fp("Observe. Answer."),
       fp("E.A.: the owner comes FIRST, then ’s, then the thing.")],
      "Observation / Induction", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: SINGULAR owner → ’s (my uncle’s bike). PLURAL owner ending in s → only the apostrophe: my cousins’ toys, my grandparents’ house."),
       fp("Irregular plural owner → ’s again: the children’s books!")],
      [fp("Draw the rules. Repeat the examples."),
       fp("E.A.: uncle’s (one uncle), cousins’ (many cousins), children’s (irregular).")],
      "Induction / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: owner + ’s (or s’) + thing — no “of the” like in French! Listen to the audio and repeat the examples.")],
      [fp("Listen (QR code). Repeat.")], "Audio", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Object game: I collect five objects; the class says whose they are: “This is Voahangy’s ruler!”"),
       fp("Transform: the bike of my uncle → …; the toys of my cousins → …")],
      [fp("Play. Transform."),
       pAns("E.A.: This is Koto’s pen! — my uncle’s bike; my cousins’ toys.",
        ["my uncle’s bike"], { size: SZ.FICHE })],
      "Game / Individual work", "Objects"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say: “the cats of my grandmother” the English way."),
       fp("2. One sentence with a plural owner."),
       fp("3. Whose copy-book is this?")],
      [fp("Answer. Write."),
       pAns("E.A.: my grandmother’s cats; my grandparents’ house is big; It is …’s copy-book.",
        ["grandmother’s cats"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}

// ---------- S46 — Demonstratives ----------
function ficheS46() {
  const meta = META("This, that, these, those",
    "By the end of the lesson, learners will be able to use the demonstrative pronouns (singular and plural) to show people and things.",
    "5 / 9", "classroom objects, family tree, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say “the ball of my uncle” the English way."),
       fp("2. One sentence with cousins’."),
       fp("3. Plural of “child”.")],
      [fp("Answer."),
       fp("E.A.: my uncle’s ball; my cousins’ school is far; children.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I hold my pen (near): THIS pen. I point to the door (far): THAT door. Near or far — watch my arm!")],
      [fp("Observe. Imitate the gesture.")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn to SHOW people and things: this, that, these, those. By the end of this lesson, you will present your photo album like Fidy!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the four sentences (with gestures!): This is my uncle (near, one). That is my aunt (far, one). These are my cousins (near, many). Those are my grandparents (far, many).")],
      [fp("Observe. Answer: near or far? one or many?")],
      "Observation / Using gesture", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the table: NEAR + one → this; FAR + one → that; NEAR + many → these; FAR + many → those."),
       fp("Repetition drill with the arm: short arm = this/these, long arm = that/those!")],
      [fp("Draw the table. Repeat with the gestures."),
       fp("E.A.: the four pronouns are used with the right gesture.")],
      "Induction / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: this/that for ONE, these/those for MANY — near or far. Listen to the audio and repeat!")],
      [fp("Listen (QR code). Repeat.")], "Audio", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Act the photo album dialogue in pairs (This is my uncle… Those are my grandparents…)."),
       fp("Classroom game: I point near/far, one/many — say the right sentence!")],
      [fp("Act the dialogue. Play."),
       pAns("E.A.: These are my cousins! Those are the windows!",
        ["These are my cousins!"], { size: SZ.FICHE })],
      "Role play / Game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: …… is my aunt (far). …… are my books (near)."),
       fp("2. Show two things in the classroom with this/those."),
       fp("3. One sentence about a relative with “This is…”.")],
      [fp("Complete. Show. Say."),
       pAns("E.A.: That; These; This is my pen, those are the chairs; This is my cousin Hery.",
        ["That; These"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}

// ---------- S47 — Oral production ----------
function ficheS47() {
  const meta = META("Talking about my relatives",
    "By the end of the lesson, learners will be able to share information about their extended family with their peers.",
    "6 / 9", "pupils’ family trees or photos");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. This or these? (I show one pen / many pens.)"),
       fp("2. Say “the house of my grandparents” the English way."),
       fp("3. Plural of “woman”.")],
      [fp("Answer."),
       fp("E.A.: this pen, these pens; my grandparents’ house; women.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Guess my relative! “He is my father’s brother. He loves soccer. Who is he?”")],
      [fp("Guess: your uncle!")], "Guessing game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, YOU are the speakers! By the end of this lesson, you will present your big family to your friends, with everything we learned.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe my model presentation (with my family tree): “This is my family. These are my grandparents. My grandmother’s name is … I have two uncles. My uncles’ children are my cousins…”")],
      [fp("Observe. Find: the demonstratives, the ’s, the plurals!")],
      "Modelling", "Family tree"),
    stepRow(["4. Analysis"],
      [fp("Build your presentation plan: 1. my parents and my brothers/sisters — 2. my grandparents — 3. my uncle(s), aunt(s), cousin(s) — one detail for each (name, what they love…)."),
       fp("Prepare in pairs: say it once to your partner, who checks the little ’s!")],
      [fp("Prepare. Rehearse in pairs.")],
      "Personalisation / In pairs", "Family trees"),
    stepRow(["5. Synthesis"],
      [fp("Before speaking: the demonstratives to show, the ’s for the owner, the plurals — and a smile!")],
      [fp("Check the list.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Present your family to the class (or in groups of four). The class asks one question each: “What is your aunt’s name?” “How many cousins do you have?”")],
      [fp("Present. Ask and answer questions."),
       pAns("E.A.: These are my grandparents. My aunt’s name is Bao. I have four cousins.",
        ["My aunt’s name"], { size: SZ.FICHE })],
      "Oral production / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Present three relatives in three sentences."),
       fp("2. Answer one question about your family."),
       fp("3. One sentence with a demonstrative + a possessive case.")],
      [fp("Present. Answer."),
       pAns("E.A.: This is my uncle’s bike. — the sentences are correct and fluent.",
        ["uncle’s bike"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}

// ---------- S48 — Reading 1 ----------
function ficheS48() {
  const meta = META("Reading: “My grandmother Lala” (1)",
    "By the end of the lesson, learners will be able to get the gist and explicit information from a written text about the family.",
    "7 / 9", "the reading text, the picture, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Present two relatives (two sentences)."),
       fp("2. These or those? (near / far)"),
       fp("3. Spell “aunt”.")],
      [fp("Answer. Spell."),
       fp("E.A.: This is my …; these = near, those = far; A-U-N-T.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: look at the picture (a grandmother, a garden, cats…). Guess: what is the text about?")],
      [fp("Guess the content from the picture.")], "Using pictures", "The picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read “My grandmother Lala”. By the end of this lesson, you will find all its information.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: listen to the audio while following, then read silently.")],
      [fp("Listen. Follow. Read.")],
      "Audio / Reading", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The gist: who is the text about? The details: What is the grandmother’s name? How is her house? What is in her garden? Who are her little friends? What does she do when the child visits her?"),
       fp("Vocabulary questions: special, garden, smile.")],
      [fp("Answer."),
       fp("E.A.: grandmother Lala; big and beautiful; flowers and plants; her cats; she tells stories and smiles.")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, the text tells us about Lala, her house, her garden, her cats — and her love!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Post-reading: read the text aloud, one sentence per pupil — pay attention to the pronunciation (grandmother’s, these, those)!")],
      [fp("Read aloud."),
       pAns("E.A.: fluent reading with correct pronunciation.",
        ["fluent reading"], { size: SZ.FICHE })],
      "Reading aloud", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the text about?"),
       fp("2. Two detail questions (garden? cats?)."),
       fp("3. Read three sentences aloud.")],
      [fp("Answer. Read."),
       pAns("E.A.: grandmother Lala; flowers and plants; they stay close to her; fluent reading.",
        ["grandmother Lala"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(48, TOTAL, meta, rows, "s48");
}

// ---------- S49 — Reading 2 + culture ----------
function ficheS49() {
  const meta = META("Reading (2): grandparents here and there",
    "By the end of the lesson, learners will be able to find the possessive case and the demonstratives in the text, and talk about the place of grandparents in Malagasy, US and British cultures.",
    "8 / 9", "the reading text, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the grandmother’s name?"),
       fp("2. Who are her little friends?"),
       fp("3. Read two sentences of the text.")],
      [fp("Answer. Read."),
       fp("E.A.: Lala; her cats; fluent reading.")],
      "Individual work", "Text"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Grammar hunt! Open the text: how many little ’s can you find in one minute?")],
      [fp("Hunt and count.")], "Game", "Text"),
    stepRow(["2. Presentation"],
      [fp("Today we read the text again — with grammar glasses! And then we talk about grandparents in Madagascar and in the English-speaking countries.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Underline in the text: my grandmother’s house, my grandmother’s cats, my grandmother’s love — and the demonstratives: This is…, these beautiful flowers, These are…")],
      [fp("Underline. Read the sentences.")],
      "Observation", "Text"),
    stepRow(["4. Analysis"],
      [fp("Draw the use: the ’s shows WHOSE things they are; this/these show what is near, that/those what is far."),
       fp("Discussion (from the syllabus): in Madagascar, grandparents often live with the family and everyone respects their words. In the US or Britain, many grandparents live in their own house far away, and the family visits them. Same or different? What do YOU think?")],
      [fp("Draw the rules. Discuss and compare the cultures."),
       fp("E.A.: personal, respectful ideas in simple English: In Madagascar, grandparents live with us…")],
      "Induction / Discussion", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the same grammar tells the same love — and every culture takes care of its grandparents in its own way. Responsibility and respect!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Speak: one sentence about YOUR grandmother or grandfather with a ’s (My grandfather’s house is…, My grandmother’s stories are…).")],
      [fp("Say their sentence."),
       pAns("E.A.: My grandmother’s rice is delicious! My grandfather’s zebu cart is old.",
        ["grandmother’s rice"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Find one possessive case and one demonstrative in the text."),
       fp("2. One idea about grandparents in our culture."),
       fp("3. One sentence about your grandparents with ’s.")],
      [fp("Find. Say."),
       pAns("E.A.: my grandmother’s cats / These are…; grandparents live with the family; My grandmother’s …",
        ["These are"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}

// ---------- S50 — Writing ----------
function ficheS50() {
  const meta = META("Writing: my extended family",
    "By the end of the lesson, learners will be able to write short sentences about their extended family with the possessive case and the demonstrative pronouns.",
    "9 / 9", "pictures or drawings, copy-books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One ’s sentence from the text."),
       fp("2. Complete: …… are my cousins (near)."),
       fp("3. Spell “cousin”.")],
      [fp("Answer. Spell."),
       fp("E.A.: my grandmother’s house…; These; C-O-U-S-I-N.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: look at the pictures (a book, a bike, a house, a cat…) — write their names in the copy-book!")],
      [fp("Write the names of the pictures.")], "Using pictures", "Pictures or drawings"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE about our big family. By the end of this lesson, you will write sentences like: “This is my uncle’s book. It is very interesting.”")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model (from the syllabus): first sentence — the demonstrative + the possessive case show whose thing it is: “This is my uncle’s book.” Second sentence — a description: “It is very interesting.”")],
      [fp("Observe the model.")],
      "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: choose TWO members of your extended family."),
       fp("For each one, write TWO sentences: 1. demonstrative + possessive case (This is my aunt’s pot.) 2. a description (It is big and black.)")],
      [fp("Choose. Write four sentences.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Check before exchanging: the capital letter, the period, the ’s in the right place, this/these correct!")],
      [fp("Check.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Work in pairs and exchange your production: check the meaning and the ’s, give feedback, revise."),
       fp("Post-writing: read your production to the class!")],
      [fp("Exchange. Give feedback. Revise. Read aloud."),
       pAns("E.A.: This is my grandmother’s cat. It is small and grey. That is my cousins’ ball. It is new.",
        ["grandmother’s cat"], { size: SZ.FICHE })],
      "Peer correction", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two sentences about one relative (model of the day)."),
       fp("2. One sentence with a plural owner (s’)."),
       fp("3. Read your production.")],
      [fp("Write. Read."),
       pAns("E.A.: This is my uncle’s radio. It is old. — My grandparents’ house is big. — the production is read.",
        ["grandparents’ house"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("FAMILY"),
    sub("1. The extended family"),
    img("u5_family.png", 440, 768 / 1408),
    grid(FAMILY, 3),
    p("", { after: 40 }),
    pr([run("All these people are my "), ...kw("relatives", "rélativz"), run(".  Grandma + Grandpa = my "), ...kw("grandparents", "granndpèrennts"), run(".")], { after: 100 }),
    sub("2. Fidy’s passage"),
    familyBox(),
    p("", { after: 100 }),
    sub("3. One and many — the plurals"),
    pr([run("Regular: ", { bold: true }), ...kw("a brother → brothers", "breuzeur → breuzeurz"), run("   "), ...kw("a story → stories", "stôri → stôriz")], { after: 40 }),
    pr([run("Irregular — no -s! Learn them by heart:", { bold: true })], { after: 40 }),
    grid(PLURALS, 3),
    p("", { after: 100 }),
    sub("4. The possessive case — the little ’s"),
    pr([run("One owner: ", { bold: true }), ...kw("my uncle’s bike", "maï eunnkeulz baïk"), run(" = the bike of my uncle.")]),
    pr([run("Many owners (with s): ", { bold: true }), ...kw("my cousins’ toys", "maï keuzinez toïz"), run("   "), ...kw("my grandparents’ house", "maï granndpèrenntss haouss")]),
    pr([run("Irregular plural owner: ", { bold: true }), ...kw("the children’s books", "ze tchildrènez bouks")], { after: 100 }),
    sub("5. This, that, these, those"),
    grid(DEMO, 4),
    p("", { after: 40 }),
    pr([run("NEAR: ", { bold: true }), ...kw("This is my uncle.", "zisse iz maï eunnkeul"), run("   "), ...kw("These are my cousins.", "zize âr maï keuzinez")]),
    pr([run("FAR: ", { bold: true }), ...kw("That is my aunt.", "zate iz maï ânnte"), run("   "), ...kw("Those are my grandparents.", "zôouz âr maï granndpèrennts")], { after: 60 }),
    albumBox(),
    p("", { after: 140 }),
    audioBox([
      { qr: "qr_t6_u5_family.png", label: "My family (Fidy) — listen and repeat", url: AUDIO.family },
      { qr: "qr_t6_u5_thisthat.png", label: "Plurals, ’s, this and that — listen and say", url: AUDIO.thisthat },
    ], COLOR),
  ];
}

// ---------- lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 50 });
  return [
    p([run("READING — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("MY GRANDMOTHER LALA", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    img("u5_grandma.png", 420, 768 / 1408),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("This is a picture of my grandmother Lala. She is very special to me. My grandmother’s house is big and beautiful. It has a big garden. Look at these beautiful flowers and plants. My grandmother loves her garden."),
        L("These are my grandmother’s cats. They stay close to her. They are her little friends."),
        L("When I visit my grandmother, she tells me her favourite stories and smiles at me with love. That smile on her face shows her happiness."),
        L("This is my grandmother’s love. She always makes me feel special. I love my grandmother very much!"),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("What is the grandmother’s name? How is her house? Who are her little friends? What does she do when the child visits her?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u5_grandma.png", label: "My grandmother Lala — listen and read", url: AUDIO.grandma }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Name four members of the extended family (the teacher shows the family tree).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Give the plural: 1. sister 2. story 3. child 4. woman.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Say it the English way: 1. the bike of my uncle 2. the cats of my grandmother 3. the toys of my cousins 4. the books of the children.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete with this, that, these or those: 1. …… is my aunt (far). 2. …… are my cousins (near). 3. …… is my pen (near). 4. …… are my grandparents (far).")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write two sentences about one relative: demonstrative + ’s, then a description.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: grandfather, grandmother, uncle, aunt, cousins… (1 point each).", ["grandfather"]),
    pAns("Exercise 2: sisters — stories — children — women (1 point each).", ["children"]),
    pAns("Exercise 3: my uncle’s bike — my grandmother’s cats — my cousins’ toys — the children’s books (1 point each).", ["cousins’ toys"]),
    pAns("Exercise 4: That — These — This — Those (1 point each).", ["That — These"]),
    pAns("Exercise 5: This is my aunt’s pot. It is big. (2 points each).", ["aunt’s pot"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s51", "SESSION 51 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: FAMILY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the family and the little words:", { after: 100 }),
    grid(FAMILY, 3),
    p("", { after: 60 }),
    grid(DEMO, 4),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the members of the extended family."),
    pAns("E.A.: grandfather, grandmother, grandparents, uncle, aunt, cousins.", ["cousins"]),
    p("2. Give the plural: brother, party, man, child, foot."),
    pAns("E.A.: brothers, parties, men, children, feet.", ["children"]),
    p("3. Say it the English way: the house of my grandparents."),
    pAns("E.A.: my grandparents’ house.", ["grandparents’ house"]),
    p("4. This, that, these or those? (near+one / far+many)"),
    pAns("E.A.: this; those.", ["this; those"]),
    p("5. Present two relatives (This is… / These are…)."),
    pAns("E.A.: This is my uncle. These are my cousins.", ["This is my uncle."]),
    p("6. Who does Fidy live with? How many cousins does he have?"),
    pAns("E.A.: his mom, dad and little sister; three.", ["three"]),
    p("7. Read three sentences of “My grandmother Lala”."),
    pAns("E.A.: fluent reading.", ["fluent reading"]),
    p("8. One idea: grandparents in Madagascar and in the US or Britain."),
    pAns("E.A.: In Madagascar, grandparents often live with the family…", ["live with the family"]),
    p("9. Write: “This is my uncle’s book. It is very interesting.”"),
    pAns("E.A.: correct spelling, ’s and period.", ["correct spelling"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s52", "SESSION 52 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 5: FAMILY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: present four members of your extended family (This is… / These are…).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Give the plural: story, man, woman, child, foot, tooth, cousin, party (0.5 point each).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Transform with the possessive case: 1. the ball of my uncle 2. the garden of my grandmother 3. the toys of my cousins 4. the books of the children.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Read “My grandmother Lala” and answer two questions.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences about two relatives (demonstrative + ’s + description).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: four correct presentations with demonstratives (1 point each).", ["demonstratives"]),
    pAns("Exercise 2: stories, men, women, children, feet, teeth, cousins, parties (0.5 point each).", ["teeth"]),
    pAns("Exercise 3: my uncle’s ball — my grandmother’s garden — my cousins’ toys — the children’s books (1 point each).", ["children’s books"]),
    pAns("Exercise 4: correct gist and details (2 points each).", ["gist"]),
    pAns("Exercise 5: This is my aunt’s basket. It is full… (1 point each).", ["aunt’s basket"]),
  ];
}

// ---------- leçons du jour (une par fiche) ----------
function dayLesson(sessionNo, title, children) {
  return [
    p([run(`LESSON OF THE DAY — SESSION ${sessionNo}`, { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    ...children,
  ];
}
function lessonS42() {
  return dayLesson(42, "THE EXTENDED FAMILY", [
    img("u5_tree.png", 380, 768 / 1408),
    grid(FAMILY, 3),
    p("", { after: 60 }),
    pr([run("All these people are my "), ...kw("relatives", "rélativz"), run(".  Grandma + Grandpa = my "), ...kw("grandparents", "granndpèrennts"), run(".")]),
    pr([run("The family tree grows: parents at the top, children at the bottom!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS43() {
  return dayLesson(43, "LISTENING: “MY FAMILY”", [
    familyBox(),
    p("", { after: 60 }),
    pr([run("How to listen well: ", { bold: true }), run("1. First listening: who speaks? 2. Second listening: how many people? 3. Third listening: the little words (uncle, aunt, cousin).")]),
    pr([run("I answer with full sentences: ", { bold: true }), ...kw("Fidy has one uncle.", "fidi haz ouane eunnkeul")]),
  ]);
}
function lessonS44() {
  return dayLesson(44, "ONE AND MANY — THE PLURALS", [
    pr([run("Regular: ", { bold: true }), ...kw("a brother → brothers", "breuzeur → breuzeurz"), run("   "), ...kw("a story → stories", "stôri → stôriz"), run(" (consonant + y → ies!)")], { after: 40 }),
    pr([run("Irregular — no -s! Learn them by heart:", { bold: true, color: C.RED })], { after: 40 }),
    grid(PLURALS, 3),
    p("", { after: 60 }),
    pr([run("The trap: ", { bold: true, color: C.RED }), run("one child, two children — one person, many people!")]),
  ]);
}
function lessonS45() {
  return dayLesson(45, "THE POSSESSIVE CASE — THE LITTLE ’S", [
    pr([run("One owner: ", { bold: true }), ...kw("my uncle’s bike", "maï eunnkeulz baïk"), run(" = the bike of my uncle.")]),
    pr([run("Many owners (’ after the s): ", { bold: true }), ...kw("my cousins’ toys", "maï keuzinez toïz"), run("   "), ...kw("my grandparents’ house", "maï granndpèrenntss haouss")]),
    pr([run("Irregular plural owner (’s again): ", { bold: true }), ...kw("the children’s books", "ze tchildrènez bouks")], { after: 60 }),
    pr([run("The order changes! ", { bold: true, color: C.RED }), run("In English the owner comes FIRST: Soa’s bag (not “the bag of Soa”).")]),
  ]);
}
function lessonS46() {
  return dayLesson(46, "THIS, THAT, THESE, THOSE", [
    img("u5_thisthat.png", 380, 768 / 1408),
    grid(DEMO, 4),
    p("", { after: 60 }),
    pr([run("NEAR: ", { bold: true }), ...kw("This is my uncle.", "zisse iz maï eunnkeul"), run("   "), ...kw("These are my cousins.", "zize âr maï keuzinez")]),
    pr([run("FAR: ", { bold: true }), ...kw("That is my aunt.", "zate iz maï ânnte"), run("   "), ...kw("Those are my grandparents.", "zôouz âr maï granndpèrennts")]),
  ]);
}
function lessonS47() {
  return dayLesson(47, "TALKING ABOUT MY RELATIVES", [
    albumBox(),
    p("", { after: 60 }),
    pr([...kw("Who is this?", "hou iz zisse"), run("  →  "), ...kw("This is my aunt Vero.", "zisse iz maï ânnte véro")]),
    pr([...kw("Who are those?", "hou âr zôouz"), run("  →  "), ...kw("Those are my cousins.", "zôouz âr maï keuzinez")], { after: 60 }),
    pr([run("With a photo or a drawing, I present three relatives to my friend.", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS48() {
  return dayLesson(48, "READING DAY: “MY GRANDMOTHER LALA” (1)", [
    pr([run("The key words of the text: ", { bold: true }), ...kw("a village", "e vilidj"), run("  "), ...kw("stories", "stôriz"), run("  "), ...kw("to visit", "tou vizite"), run("  "), ...kw("kind", "kaïnnde")], { after: 60 }),
    pr([run("How to read well: ", { bold: true }), run("1. Read the title: who is the text about? 2. Find the family words. 3. Find the little ’s of possession.")]),
    audioBox([{ qr: "qr_t6_u5_grandma.png", label: "My grandmother Lala — listen and read", url: AUDIO.grandma }], COLOR),
  ]);
}
function lessonS49() {
  return dayLesson(49, "GRANDPARENTS HERE AND THERE", [
    pr([run("In Madagascar: ", { bold: true }), run("many children live with their grandparents — the grandmother tells stories in the evening.")]),
    pr([run("In England or in the USA: ", { bold: true }), run("grandparents often live far away — the children visit them for the holidays.")], { after: 60 }),
    pr([run("Same love, different houses! ", { bold: true, color: C.BLUE }), run("We compare with: "), run("here", { bold: true, color: C.BLUE }), run(" / "), run("there", { bold: true, color: C.BLUE }), run(" — "), run("but", { bold: true, color: C.BLUE }), run(" — "), run("both", { bold: true, color: C.BLUE }), run(".")]),
    pr([run("Model: ", { bold: true }), run("Here, Grandma lives with us. There, Grandma lives far, but both grandmas love their grandchildren!", { italic: true })]),
  ]);
}
function lessonS50() {
  return dayLesson(50, "WRITING DAY: MY EXTENDED FAMILY", [
    pr([run("The plan of my paragraph: ", { bold: true }), run("1. I have… (uncles, aunts, cousins) — 2. one sentence with the ’s (my uncle’s house) — 3. one sentence with this/these — 4. one irregular plural (children, people).")], { after: 60 }),
    pr([run("The writing rules: ", { bold: true }), run("capital letters for the names (Vero, Lala) — the apostrophe of ’s is small but powerful!")]),
    pr([run("Model: ", { bold: true }), run("I have two uncles and five cousins. My uncle’s house is in Antsirabe. These are my cousins: they are kind children.", { italic: true })]),
  ]);
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS42(), pageBreak(), ...lessonS42(), pageBreak(),
    ...ficheS43(), pageBreak(), ...lessonS43(), pageBreak(),
    ...ficheS44(), pageBreak(), ...lessonS44(), pageBreak(),
    ...ficheS45(), pageBreak(), ...lessonS45(), pageBreak(),
    ...ficheS46(), pageBreak(), ...lessonS46(), pageBreak(),
    ...ficheS47(), pageBreak(), ...lessonS47(), pageBreak(),
    ...ficheS48(), pageBreak(), ...lessonS48(), pageBreak(),
    ...ficheS49(), pageBreak(), ...lessonS49(), pageBreak(),
    ...ficheS50(), pageBreak(), ...lessonS50(), pageBreak(),
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can name my extended family: grandparents, uncle, aunt, cousins.",
      "I can use regular and irregular plurals: brothers, children, women, feet.",
      "I can use the possessive case: my uncle’s bike, my cousins’ toys.",
      "I can use this, that, these, those.",
      "I can talk about my relatives.",
      "I can read and understand “My grandmother Lala”.",
      "I can write sentences about my extended family.",
    ], "Well done! See you in Unit 6: PEOPLE’S APPEARANCE!"),
  ];
};
module.exports.COLOR = COLOR;
