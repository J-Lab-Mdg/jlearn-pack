// T10 — UNIT 6 — NARRATING A PAST EVENT (6 séances + révision + test) — Sessions 44 à 51 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "AD1457"; // framboise
const SHADE = "FADCE8";
const TOTAL = 88;
const AUDIO = {
  story: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — NARRATING A PAST EVENT", title, slo,
  values: "self-confidence, self-esteem", session, materials,
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
function storyBox() {
  return box("MY AMAZING SATURDAY (listening passage)", [
    p("Hello! I am Koto, and I want to tell you about something amazing that happened to me. Last weekend, I visited my grandfather’s village with my cousin.", { after: 40 }),
    p("First of all, we woke up at five o’clock in the morning and took the old bus. I was so curious — I love that village! After that, we walked two kilometres to the river. The sun was rising, and everything was quiet.", { after: 40 }),
    p("Then, suddenly, we heard a strange noise behind the trees. I was scared! My cousin was worried too. We stopped. We listened.", { after: 40 }),
    p("Next, we walked slowly, very slowly… and we saw… a family of lemurs, playing in a big mango tree! It was awesome! They were jumping and dancing like acrobats.", { after: 40 }),
    p("Finally, we sat under the tree, ate our rice cakes, and watched them for one hour. We had so much fun! I was scared for one minute — but I will never forget that amazing day.", { after: 20 }),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE DAY SOA FOUND HER VOICE", [
    p("Last month, the school organised its big festival. Soa’s teacher asked her to sing in front of everybody. Soa said yes — but that night, she did not sleep.", { after: 40 }),
    p("First, on the morning of the festival, Soa’s hands were cold and her heart was beating like a drum. She looked at the door of the classroom three times.", { after: 40 }),
    p("Then her little brother took her hand and said: “You sing for me every evening, and it is the most beautiful moment of my day.”", { after: 40 }),
    p("After that, Soa walked onto the stage. Her legs were shaking. She closed her eyes and thought about the kitchen at home, the rice cooking, her brother smiling. She opened her mouth… and the first note came out, clear like water.", { after: 40 }),
    p("When she finished, there was one second of silence — then the whole school stood up and clapped. Finally, Soa smiled and bowed. On that day, she did not only sing: she found something she will keep forever.", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 6 — NARRATING A PAST EVENT", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("What happened? Tell me everything!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_story.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• tell a story of the past: yesterday morning, last night, a few minutes ago;"),
    p("• say how I felt: I was scared, I was curious, I had fun!;"),
    p("• react to a story: scary! amazing! awesome!;"),
    p("• put my story in order with the sequence markers: First, After that, Next, Then, Finally;"),
    p("• listen to a story and find the feelings hidden between the lines;"),
    p("• read a story, complete its diagram and invent a new ending;"),
    p("• write my own story — for the story book of the class!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, self-esteem.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Everybody has a story — the day you were scared, the day you laughed until you cried. This unit gives you the English tools to tell YOUR stories… and at the end, the whole class writes a real story book!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u6_story.png", label: "My amazing Saturday — listen and repeat", url: AUDIO.story },
    ], COLOR),
  ];
}

// ---------- S44 — Past time words + feelings ----------
function ficheS44() {
  const meta = META("The words of the past — the feelings of the story",
    "By the end of the lesson, learners will be able to use expressions indicating past time and verbal expressions of feelings to talk about a past event.",
    "1 / 6", "picture of the lemur story");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What’s the weather like today?"),
       fp("2. Tomorrow it … (be) sunny — two ways!")],
      [fp("Answer."),
       fp("E.A.: It’s cloudy! — will be / is going to be.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Question: what did you do yesterday evening? One sentence each — in any English you have. I note the verbs on the board: watched? ate? played?")],
      [fp("Tell."),
       fp("E.A.: I ate rice! I played football!")],
      "Questioning", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The words of the past ». By the end of this lesson, you will place a story in time — and put a heart inside it!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The time machine of English: yesterday morning, last night, last weekend, a few minutes ago, two years ago. The further the word, the further the story! And the simple past: regular verbs take -ed (walked, played), the famous ones change their dress: go→went, see→saw, hear→heard, eat→ate, take→took, wake→woke, have→had.")],
      [fp("Listen. Repeat."),
       fp("E.A.: yesterday, last night, ago; went, saw, had…")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The feelings of the story: I was scared! I was worried. I was frightened. I was curious. We had fun! And the adjectives for reacting: scary (it makes me scared), amazing, awesome! Match feeling and situation: a cyclone at night → ? A lemur in your mango tree → ?")],
      [fp("Match. Say."),
       fp("E.A.: a cyclone → I was scared, it was scary! A lemur → I was curious, it was amazing!")],
      "Contextualisation", "Picture"),
    stepRow(["5. Synthesis"],
      [fp("So: the time words (yesterday, last…, …ago), the simple past (-ed or new dress), the feelings (I was scared / curious, we had fun) and the reactions (scary, amazing, awesome!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Three-word story in pairs: A gives a time word + a feeling (last night + scared!), B makes the sentence. Then swap!")],
      [fp("Build sentences."),
       pAns("E.A.: Last night, I heard a dog and I was scared! Two years ago, I visited Toamasina and it was amazing!",
        ["I was scared!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Order from near to far: two years ago — a few minutes ago — last night."),
       fp("2. Simple past: go, see, eat, have."),
       fp("3. Complete: The film was …; I was … (feeling).")],
      [fp("Answer."),
       pAns("E.A.: a few minutes ago → last night → two years ago; went, saw, ate, had; scary — scared.",
        ["went, saw, ate, had"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(44, TOTAL, meta, rows, "s44");
}
function lessonS44() {
  return [
    p([run("LESSON OF THE DAY — SESSION 44", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WORDS OF THE PAST — THE FEELINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The time machine:", { bold: true })], { after: 30 }),
    vocab("yesterday morning", "yèsteurdé morningue"),
    vocab("last night / last weekend", "laste naïte / laste ouikènde"),
    vocab("a few minutes ago", "e fiou minitse egôou", "il y a quelques minutes"),
    vocab("two years ago", "tou yirze egôou"),
    p("", { after: 60 }),
    box("THE SIMPLE PAST — TWO FAMILIES", [
      bullet([run("The calm family: + -ed → ", { bold: true }), run("walked, played, visited, watched.", { bold: true, color: C.BLUE })]),
      bullet([run("The famous family changes its dress: ", { bold: true }), run("go→went, see→saw, hear→heard, eat→ate, take→took, wake→woke, have→had.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The feelings of the story:", { bold: true })], { after: 30 }),
    vocab("I was scared / frightened", "aï ouoze skèrde / fraïteunde", "j’avais peur"),
    vocab("I was worried", "aï ouoze oueuride", "inquiet"),
    vocab("I was curious", "aï ouoze kiourieus"),
    vocab("we had fun", "oui hade feune", "on s’est amusés !"),
    p("", { after: 60 }),
    box("THE REACTIONS", [
      bullet([run("It was scary! ", { bold: true, color: C.BLUE }), run("(the THING is scary → I am scared!)")]),
      bullet([run("It was amazing! It was awesome!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S45 — Sequence markers ----------
function ficheS45() {
  const meta = META("The sequence markers — the skeleton of the story",
    "By the end of the lesson, learners will be able to order the events of a story with First, After that, Next, Then and Finally.",
    "2 / 6", "story road picture, event strips");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Simple past: wake, take, hear."),
       fp("2. Say one past sentence with a feeling.")],
      [fp("Answer."),
       fp("E.A.: woke, took, heard — Last night I was scared!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The mixed story: I put five event strips on the board in the WRONG order (woke up / arrived at school / washed / ate breakfast / left the house). Put my morning in order!")],
      [fp("Order the strips."),
       fp("E.A.: woke up → washed → ate → left → arrived.")],
      "Whole-class work", "Event strips"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The sequence markers ». By the end of this lesson, your stories will walk straight, step by step, like a zebu on the road!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The story road (picture!): First / First of all → the departure. After that, Next, Then → the steps of the road. Finally → the arrival. Listen to my morning with the markers: First of all, I woke up at five. After that, I washed. Then I ate breakfast. Next, I left the house. Finally, I arrived at school.")],
      [fp("Listen. Follow the road."),
       fp("E.A.: the markers are the signposts of the story!")],
      "Using visual aids", "Story road picture"),
    stepRow(["4. Analysis"],
      [fp("Where do the markers live? At the BEGINNING of the sentence, with a comma: After that, we walked to the river. How many can we use? At least three for a good story — but don’t put “then” everywhere like too much salt!")],
      [fp("Observe. Correct a salty story!"),
       fp("E.A.: replace some “then” by After that / Next / Finally.")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: First (of all) → After that / Next / Then → Finally. At the beginning, a comma after it, and at least three markers per story.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The chain story: row by row! Student 1: First of all… Student 2: After that… Student 3: Then… until Finally. Subject: yesterday at the market!")],
      [fp("Build the chain."),
       pAns("E.A.: First of all, I went to the market. After that, I bought tomatoes. Then I met my aunt. Finally, I came home at noon.",
        ["First of all"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the marker of the departure and the marker of the arrival."),
       fp("2. Order with markers: ate lunch / woke up / played football (yesterday).")],
      [fp("Answer."),
       pAns("E.A.: First (of all) — Finally. First, I woke up. Then I ate lunch. Finally, I played football.",
        ["Finally"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}
function lessonS45() {
  return [
    p([run("LESSON OF THE DAY — SESSION 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SEQUENCE MARKERS — THE STORY ROAD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_road.png", 420, 768 / 1376),
    box("THE SIGNPOSTS OF THE STORY", [
      bullet([run("The departure: ", { bold: true }), run("First, / First of all,", { bold: true, color: C.BLUE })]),
      bullet([run("The steps of the road: ", { bold: true }), run("After that, / Next, / Then,", { bold: true, color: C.BLUE })]),
      bullet([run("The arrival: ", { bold: true }), run("Finally,", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model story with markers:", { bold: true })], { after: 50 }),
    p("First of all, I woke up at five o’clock. After that, I washed and ate breakfast. Then I left the house with my little sister. Next, we met our friends at the crossroads. Finally, we arrived at school just before the bell!", { after: 80 }),
    box("THE RULES OF THE ROAD", [
      bullet([run("The marker lives at the BEGINNING of the sentence, with a comma: ", { bold: true }), run("After that, we walked.", { bold: true, color: C.BLUE })]),
      bullet([run("A good story uses at least THREE markers.", { bold: true, color: C.BLUE })]),
      bullet([run("Don’t put “then” everywhere — vary the signposts!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S46 — Listening: my amazing Saturday ----------
function ficheS46() {
  const meta = META("Listening: my amazing Saturday",
    "By the end of the lesson, learners will be able to infer the gist and details of an oral passage narrating a past event and report a survey using sequence markers.",
    "3 / 6", "audio passage (QR code page 1 of the unit) or teacher reading");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The five sequence markers."),
       fp("2. Simple past: see, hear, have.")],
      [fp("Answer."),
       fp("E.A.: First, After that, Next, Then, Finally — saw, heard, had.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Narrate what you did yesterday — three sentences, one marker minimum! Two or three volunteers.")],
      [fp("Narrate."),
       fp("E.A.: First, I went to school. Then I helped my mother. Finally, I did my homework.")],
      "Questioning", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « My amazing Saturday » — Koto’s story. By the end of this lesson, your ears will catch the gist, the details… and the feelings!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening, 1st listening)"],
      [fp("Books closed! Listen to the whole passage. Gist questions: who is talking? Where did he go? Was it a good or a bad day?")],
      [fp("Listen. Answer."),
       fp("E.A.: Koto; to his grandfather’s village; a wonderful day!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis (2nd listening + hunt)"],
      [fp("Second listening with a mission: note down (a) the time expressions, (b) the feeling expressions, (c) the sequence markers. Then detail questions: what time did they wake up? What did they hear? What did they see? Third listening: repeat sentence by sentence — intonation of fear on “I was scared!”, intonation of joy on “It was awesome!”.")],
      [fp("Hunt. Answer. Repeat."),
       pAns("E.A.: last weekend, at five o’clock; I was scared / curious / worried, we had fun; First of all, After that, Then, Next, Finally. They heard a strange noise — they saw a family of lemurs!",
        ["a family of lemurs!"], { size: SZ.FICHE })],
      "Repetition drill", "Audio"),
    stepRow(["5. Synthesis"],
      [fp("So: a story has a skeleton (the markers), a time dress (last weekend, …ago) and a heart (the feelings). Koto’s story had all three!")],
      [fp("Listen. Copy the table of the three ingredients.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening: the survey!)"],
      [fp("Survey time! Ask several schoolmates: What did you do during the last vacation? Take notes. Then report to the class with markers: Lova told me that first, he visited…")],
      [fp("Ask. Note. Report."),
       pAns("E.A.: I asked Hery. First, he went to Antsirabe. After that, he helped on the farm. Finally, he came back by taxi-brousse. He had fun!",
        ["He had fun!"], { size: SZ.FICHE })],
      "Questioning / survey", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Retell Koto’s story in four sentences with three markers."),
       fp("2. What was the feeling at the strange noise — and at the lemurs?")],
      [fp("Answer."),
       pAns("E.A.: First, Koto and his cousin took the bus. Then they heard a noise and they were scared. Next, they saw lemurs. Finally, they watched them and had fun. — scared → amazed!",
        ["scared → amazed!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}
function lessonS46() {
  return [
    p([run("LESSON OF THE DAY — SESSION 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: MY AMAZING SATURDAY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    storyBox(),
    p("", { after: 60 }),
    box("THE THREE INGREDIENTS OF A STORY", [
      bullet([run("The skeleton: ", { bold: true }), run("First of all → After that → Then → Next → Finally.", { bold: true, color: C.BLUE })]),
      bullet([run("The time dress: ", { bold: true }), run("last weekend, at five o’clock, for one hour.", { bold: true, color: C.BLUE })]),
      bullet([run("The heart: ", { bold: true }), run("I was curious… I was scared! It was awesome! We had so much fun!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE SURVEY QUESTION", [
      bullet([run("What did you do during the last vacation? ", { bold: true, color: C.BLUE }), run("[ouotte dide you dou]", { italic: true, color: C.GRAY })]),
      bullet([run("And to report: ", { bold: true }), run("Hery told me that first, he went to… Finally, he…", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S47 — Reading: the day Soa found her voice ----------
function ficheS47() {
  const meta = META("Reading: the day Soa found her voice",
    "By the end of the lesson, learners will be able to complete a diagram of the sequence of events, infer the characters’ feelings from clues and propose a new ending.",
    "4 / 6", "reading text (book page), diagram on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three ingredients of a story."),
       fp("2. One sentence about your last vacation, with a marker.")],
      [fp("Answer."),
       fp("E.A.: skeleton, time dress, heart — First, I stayed home!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title on the board: « The day Soa found her voice ». Predict! What is this story about? Did Soa lose her voice? Then skim the text for thirty seconds and check your prediction.")],
      [fp("Predict. Skim. Check."),
       fp("E.A.: it’s about singing… about courage! Not a lost voice — a found confidence!")],
      "Skimming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The day Soa found her voice ». By the end of this lesson, you will read between the lines — where the real feelings hide!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text. First the difficult words together: festival, stage, shaking, clapped, bowed. Then the DIAGRAM of events on the board — five empty boxes with arrows. Complete it: teacher asks → ? → ? → ? → the school claps.")],
      [fp("Read. Complete the diagram."),
       pAns("E.A.: teacher asks Soa → morning: Soa is nervous → the brother speaks to her → Soa sings on stage → the school stands up and claps.",
        ["the brother speaks"], { size: SZ.FICHE })],
      "Whole-class work", "Diagram"),
    stepRow(["4. Analysis (the inference hunt!)"],
      [fp("Read between the lines! The text never says “Soa was scared” — so how do we know? Find the clues: cold hands, heart like a drum, she looked at the door three times, legs shaking. STATED or INFERRED? Make two columns: stated (the festival was last month, the brother took her hand) / inferred (she was scared, she wanted to run away, at the end she was proud). Which words helped you?")],
      [fp("Hunt the clues. Classify."),
       pAns("E.A.: Inferred: she was scared (cold hands, drum heart), she wanted to escape (looked at the door!), she was proud at the end (she smiled and bowed).",
        ["looked at the door!"], { size: SZ.FICHE })],
      "Inferring", "Reading text"),
    stepRow(["5. Synthesis"],
      [fp("So: a good reader reads twice — once for the events (the diagram), once for the feelings (the clues). Stated = written black on white; inferred = discovered by YOU, the detective!")],
      [fp("Listen. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Change or continue the ending! In pairs: what happens AFTER the applause? Or imagine: what if the brother did not come? Justify with evidence from the text, then share orally.")],
      [fp("Invent. Justify. Share."),
       pAns("E.A.: After the festival, the teacher asked Soa to join the choir — because the text says she found something she will keep forever!",
        ["keep forever!"], { size: SZ.FICHE })],
      "Pair work / sharing", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Draw the diagram of the five events."),
       fp("2. Give one INFERRED feeling and the clue that helped you.")],
      [fp("Answer."),
       pAns("E.A.: Soa was nervous — clue: her heart was beating like a drum.",
        ["like a drum"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}
function lessonS47() {
  return [
    p([run("LESSON OF THE DAY — SESSION 47", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE DAY SOA FOUND HER VOICE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("the stage", "dhe stéidje", "la scène"),
    vocab("shaking", "chéikingue", "qui tremble"),
    vocab("to clap", "tou klape", "applaudir"),
    vocab("to bow", "tou baou", "saluer en s’inclinant"),
    p("", { after: 60 }),
    box("THE DIAGRAM OF EVENTS", [
      bullet([run("the teacher asks Soa → the nervous morning → the brother’s words → the song on stage → the applause!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("STATED OR INFERRED? — THE READER-DETECTIVE", [
      bullet([run("STATED ", { bold: true, color: C.BLUE }), run("= written black on white: the festival was last month.")]),
      bullet([run("INFERRED ", { bold: true, color: C.BLUE }), run("= discovered from clues: cold hands + drum heart + eyes on the door = Soa was scared!")]),
      bullet([run("The clue of the end: she smiled and bowed → she was proud. That is self-confidence!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S48 — Writing 1: my paragraph of the past ----------
function ficheS48() {
  const meta = META("Writing: my paragraph of the past",
    "By the end of the lesson, learners will be able to reconstruct a model paragraph from memory and write their own past-event paragraph with sequence markers.",
    "5 / 6", "sentence strips of the model paragraph");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Stated or inferred: “her legs were shaking”? And “she was afraid”?"),
       fp("2. The five markers, fast!")],
      [fp("Answer."),
       fp("E.A.: stated — inferred! First, After that, Next, Then, Finally.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing: the human paragraph!)"],
      [fp("Groups of five! Each member receives ONE sentence of a model paragraph and memorizes it (one minute, paper back in my hand!). Now reconstruct the paragraph ORALLY, without writing: who starts? Listen to the markers — they give the order! Then check with the full paragraph on the board.")],
      [fp("Memorize. Reconstruct orally. Check."),
       fp("E.A.: the “First of all” sentence starts, the “Finally” sentence ends!")],
      "Group work", "Sentence strips"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My paragraph of the past ». By the end of this lesson, you will have five beautiful sentences about YOUR real story.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the model: how are the markers used? Where are they placed? How many sentences? Count: one departure (First of all), three steps, one arrival (Finally). The simple past everywhere, one feeling minimum!")],
      [fp("Observe. Count."),
       fp("E.A.: five sentences, markers at the beginning, one feeling: we had fun!")],
      "Whole-class work", "Model paragraph"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write YOUR paragraph: a real past event of your life (a trip, a festival, a scary night, a market day…). Five sentences, three markers minimum, one feeling, simple past. Use the personalisation technique: it must be YOUR story! I walk around and help.")],
      [fp("Write.")],
      "Personalisation technique", "Copy-books"),
    stepRow(["5. Synthesis (peer correction)"],
      [fp("Exchange paragraphs with a partner. Check: meaning (do I understand?), organization (markers in order?), accuracy (simple past correct?). Give kind feedback, then each writer revises.")],
      [fp("Exchange. Check. Revise.")], "Peer correction", "----"),
    stepRow(["6. Practice"],
      [fp("Read two or three paragraphs aloud to the class — storyteller voice! The class listens and claps (we build self-esteem!).")],
      [fp("Read aloud."),
       pAns("E.A.: Last year, I went to my aunt’s wedding. First of all, we cooked all night…",
        ["all night"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected paragraph."),
       fp("2. Underline the markers, circle the past verbs, box the feeling.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(48, TOTAL, meta, rows, "s48");
}
function lessonS48() {
  return [
    p([run("LESSON OF THE DAY — SESSION 48", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY PARAGRAPH OF THE PAST", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE MODEL PARAGRAPH (the one we memorized!)", [
      p("Last Sunday, I went to the big market of Anosibe with my mother. First of all, we left the house at six o’clock, before the sun. After that, we bought vegetables, fruit and a fat chicken. Then, suddenly, it started to rain and everybody ran under the roofs — we laughed a lot! Finally, we came home at noon, wet but happy. We had so much fun together.", { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PARAGRAPH RECIPE", [
      bullet([run("1. The opening: ", { bold: true }), run("when + where + who (Last Sunday, I went to… with…).", { bold: true, color: C.BLUE })]),
      bullet([run("2. Three steps with markers: ", { bold: true }), run("First of all… After that… Then…", { bold: true, color: C.BLUE })]),
      bullet([run("3. The arrival + the feeling: ", { bold: true }), run("Finally… We had so much fun!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PEER-CHECK QUESTIONS", [
      bullet([run("Meaning: ", { bold: true, color: C.BLUE }), run("do I understand the story?")]),
      bullet([run("Organization: ", { bold: true, color: C.BLUE }), run("are the markers in a logical order?")]),
      bullet([run("Accuracy: ", { bold: true, color: C.BLUE }), run("are the verbs in the simple past (went, saw, had)?")], { after: 20 }),
    ]),
  ];
}

// ---------- S49 — Writing 2: the class story book ----------
function ficheS49() {
  const meta = META("The class story book!",
    "By the end of the lesson, learners will be able to expand their paragraph into a short story and contribute it to the class story book.",
    "6 / 6", "the corrected paragraphs, sheets, colours, thread or stapler");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three peer-check questions."),
       fp("2. One marker of the middle of the road.")],
      [fp("Answer."),
       fp("E.A.: meaning, organization, accuracy — After that / Next / Then.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (post-writing starts!)"],
      [fp("Read each other’s paragraphs again in pairs. Now ASK QUESTIONS for more details: What time was it? Who was with you? How did you feel? What did you see exactly? The writer notes the answers — they are the gold of the story!")],
      [fp("Read. Ask. Note."),
       fp("E.A.: Where was the market? How old was the chicken?! (laughs)")],
      "Pair work / questioning", "Paragraphs"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to make something nobody can make alone: THE STORY BOOK OF OUR CLASS. By the end of this lesson, your story will live in a real book!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("From paragraph to short story: use the answers of your partner to EXPAND — add the details, the dialogue (“Run!” shouted my mother), the feelings. Five sentences can become ten!")],
      [fp("Observe the example on the board.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (expand!)"],
      [fp("Write the long version of your story. Keep the skeleton (markers), add the gold (details and feelings). I walk around and help.")],
      [fp("Expand the story.")],
      "Personalisation technique", "Sheets"),
    stepRow(["5. Synthesis (the book!)"],
      [fp("In groups: organize and sequence your stories — funny ones together? Scary ones together? Choose the order, edit the final version (clean writing, a title, maybe a small drawing). Then we attach all the pages: our story book is born! Choose the book title together.")],
      [fp("Organize. Edit. Build the book."),
       fp("E.A.: title ideas: “Our Amazing Days”, “Stories of Room 2nde A”!")],
      "Group work", "Sheets, thread/stapler"),
    stepRow(["6. Practice"],
      [fp("The reading ceremony: each group reads one story from the book aloud. Applause for every author — self-esteem is built with hands!")],
      [fp("Read. Applaud!"),
       pAns("E.A.: … Finally, we came home wet but happy. — (The class claps!)",
        ["(The class claps!)"], { size: SZ.FICHE })],
      "Whole-class work", "The story book"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Did your story enter the book with: a title, three markers, the simple past, one feeling? Check the four boxes!"),
       fp("2. Write the title of OUR story book in your copy-book.")],
      [fp("Check. Copy.")],
      "Individual work", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}
function lessonS49() {
  return [
    p([run("LESSON OF THE DAY — SESSION 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CLASS STORY BOOK", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("FROM PARAGRAPH TO STORY — THE EXPANSION", [
      bullet([run("Short: ", { bold: true }), run("Then, suddenly, it started to rain.", { color: C.BLUE })]),
      bullet([run("Expanded: ", { bold: true }), run("Then, suddenly, big black clouds arrived and it started to rain very hard. “Run!” shouted my mother. We ran under the roof of the rice seller, and everybody was laughing.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GOLD QUESTIONS (to expand a story)", [
      bullet([run("What time was it? Who was with you? What did you see exactly?", { bold: true, color: C.BLUE })]),
      bullet([run("How did you feel? What did people say? (add a small dialogue!)", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE STORY BOOK CHECK-LIST", [
      bullet([run("A title ✓ three sequence markers ✓ the simple past ✓ one feeling ✓ clean final version ✓", { bold: true, color: C.BLUE })]),
      bullet([run("And remember: your story is worth a book. That is self-esteem!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 6", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The time machine"),
    bullet([run("yesterday morning, last night, last weekend, a few minutes ago, two years ago.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The simple past"),
    bullet([run("Calm family: + -ed (walked, played). Famous family: go→went, see→saw, hear→heard, eat→ate, take→took, wake→woke, have→had.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The feelings and the reactions"),
    bullet([run("I was scared / worried / frightened / curious. We had fun! — It was scary / amazing / awesome!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The sequence markers"),
    bullet([run("First (of all), → After that, / Next, / Then, → Finally. At the beginning, with a comma, three minimum!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The reader-detective"),
    bullet([run("STATED = written black on white. INFERRED = discovered from clues (cold hands → she was scared!).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The paragraph recipe"),
    bullet([run("When + where + who → three steps with markers → Finally + one feeling. Then expand it… for the story book!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 6 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Simple past: 1. go 2. see 3. hear 4. eat 5. take 6. have.")]),
    pAns("Answers: 1. went. 2. saw. 3. heard. 4. ate. 5. took. 6. had.", ["went"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete with a time expression: 1. … night, I slept early. 2. The bus left a few minutes … . 3. … morning, it rained. 4. Two years …, we moved to Tana.")]),
    pAns("Answers: 1. Last. 2. ago. 3. Yesterday. 4. ago.", ["ago"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Scared or scary? 1. The night was … . 2. I was … . 3. The film is …, so my sister is … .")]),
    pAns("Answers: 1. scary. 2. scared. 3. scary — scared. (The THING is scary; the PERSON is scared!)", ["The THING is scary"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Put the markers: …, I woke up late. …, I ran to the bus stop. …, the bus was late too! …, I arrived on time.")]),
    pAns("Answers: First of all / After that (or Then, Next) / Then / Finally.", ["Finally"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On Soa’s story — stated (S) or inferred (I)? 1. The festival was last month. 2. Soa was nervous in the morning. 3. Her brother took her hand. 4. At the end, Soa was proud.")]),
    pAns("Answers: 1. S. 2. I (clues: cold hands, heart like a drum). 3. S. 4. I (clue: she smiled and bowed).", ["heart like a drum"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s50", "SESSION 50 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: NARRATING A PAST EVENT", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Three expressions indicating the past."),
    pAns("E.A.: yesterday morning, last night, a few minutes ago.", ["a few minutes ago"]),
    p("2. Simple past of: go, see, hear, take, wake, have."),
    pAns("E.A.: went, saw, heard, took, woke, had.", ["woke"]),
    p("3. Four feelings of the story (verbal expressions)."),
    pAns("E.A.: I was scared, worried, frightened, curious — and we had fun!", ["we had fun!"]),
    p("4. Scared or scary: the cyclone was …; I was … ."),
    pAns("E.A.: scary — scared.", ["scary — scared"]),
    p("5. The five sequence markers, in order of the road."),
    pAns("E.A.: First (of all), After that, Next, Then, Finally.", ["First (of all)"]),
    p("6. In Koto’s story: what did they hear, and what did they see?"),
    pAns("E.A.: a strange noise — a family of lemurs in a mango tree!", ["a family of lemurs"]),
    p("7. The survey question of the vacation — and one reported answer."),
    pAns("E.A.: What did you do during the last vacation? — Hery told me that first, he went to Antsirabe.", ["What did you do"]),
    p("8. Stated or inferred: “her legs were shaking” / “she wanted to run away”."),
    pAns("E.A.: stated — inferred (the clue: she looked at the door three times!).", ["inferred"]),
    p("9. The paragraph recipe in three steps."),
    pAns("E.A.: opening (when+where+who) → three steps with markers → Finally + a feeling.", ["Finally + a feeling"]),
    p("10. Retell YOUR story of the story book in three sentences, with three markers!"),
    pAns("E.A.: First, I went to my aunt’s wedding. Then we cooked all night. Finally, we danced — it was awesome!", ["it was awesome!"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s51", "SESSION 51 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 6: NARRATING A PAST EVENT", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Simple past: 1. We … (go) to the river. 2. I … (see) a chameleon. 3. They … (eat) at noon. 4. She … (have) fun.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. … night, we watched the stars. 2. The taxi-brousse left two hours … . 3. I was … (feeling: peur). 4. The lemurs were … (reaction: génial!).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put the four markers in the story: …, I woke up at five. …, I helped my father in the field. …, we sold our tomatoes at the market. …, we came home very tired.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("On Soa’s story: 1. What did the teacher ask Soa to do? 2. Give one clue that Soa was nervous. 3. Who helped her — and how? 4. Stated or inferred: “Soa was proud at the end”?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (5 sentences) about a real past event of your life: one time expression, three sequence markers, the simple past and one feeling.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: went — saw — ate — had. (1 pt each)", ["went — saw"]),
    pAns("Ex.2: Last — ago — scared / frightened — awesome / amazing. (1 pt each)", ["awesome / amazing"]),
    pAns("Ex.3: First (of all) — After that / Next — Then — Finally. (1 pt each)", ["First (of all)"]),
    pAns("Ex.4: to sing at the festival — cold hands / heart like a drum / she looked at the door — her little brother, with his kind words — inferred (clue: she smiled and bowed). (1 pt each)", ["her little brother"]),
    pAns("Ex.5 (model): Last year, I visited my cousins in Mahajanga. First of all, we took the taxi-brousse for one whole day. After that, we swam in the sea every morning. Then we ate fresh fish with the family. Finally, we came home — I was so happy! (4 pts: time expression 1, markers 1, simple past 1, feeling 1)", ["I was so happy!"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
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
    ...iCan("UNIT 6", COLOR, [
      "I can place a story in time: last night, a few minutes ago.",
      "I can use the simple past: went, saw, heard, had.",
      "I can say how I felt: I was scared, I was curious, we had fun!",
      "I can react to a story: scary! amazing! awesome!",
      "I can order a story with First, After that, Next, Then, Finally.",
      "I can catch the gist and the details of an oral story.",
      "I can complete a diagram of events and infer the hidden feelings.",
      "I can distinguish stated information from inferred information.",
      "I can write a past-event paragraph — and expand it for the class story book!",
    ], "NEXT STOP → UNIT 7: TRAVELLING!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
