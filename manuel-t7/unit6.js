// T7 — UNIT 6 — THE ENVIRONMENT (14 séances + révision + test) — Sessions 84 à 99 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "2E7D32"; // vert
const SHADE = "D4EFDF";
const TOTAL = 99;
const AUDIO = {
  buildings: "https://drive.google.com/uc?export=download&id=185VDVSMMBF_RqMTm2umrdz1u878dl2oX",
  walk: "https://drive.google.com/uc?export=download&id=1nR1Qh-tWjxzYc-bq0EDdizo6ZxmGtLHg",
  town: "https://drive.google.com/uc?export=download&id=1WAoHvaPj54gnIYm6ZD08JuFfrEa4UZSh",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — THE ENVIRONMENT", title, slo,
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
function walkTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("A WALK IN OUR TOWN (listening passage)", [
    L("Welcome to our town! Look, this is our school. It has a big garden and a green gate. Behind the fence, you can see the flag. That building over there is the hospital, next to the health center."),
    L("This is the town hall, and that is the Fokontany office. In the library, the children sit on the chairs and read books. At school, we write on the board. Near the stadium, there is a post office. I love my town!"),
  ]);
}
function townTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("MY TOWN, GREENHILL (reading text)", [
    L("Greenhill is a small, clean town. In the center, there is the town hall, with a big flag in front of it. The school is next to the library, and both have a beautiful garden. Behind the school, there is a stadium where children play football."),
    L("The hospital is between the post office and the health center, on Main Street. Opposite the hospital, you can see the market. Around many houses, there are fences and gates with flowers."),
    L("In the evening, people walk in the gardens, and children read in the library. The people of Greenhill love their town, and they keep it clean!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 6 — THE ENVIRONMENT", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("This is our school — and that is the town hall!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_buildings.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the local buildings: school, hospital, town hall, Fokontany, stadium…;"),
    p("• describe the surroundings: garden, gate, fence, flag;"),
    p("• use the furniture verbs: sit on the chair, write on the board, sleep…;"),
    p("• point with the demonstratives: this, that, these, those;"),
    p("• locate with the prepositions of place: next to, between, behind…;"),
    p("• read a map and a text about a town;"),
    p("• compare foreign towns with Malagasy towns;"),
    p("• describe my favourite place in 4-5 sentences.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, solidarity.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 5)", [
      p("In Unit 5 we interviewed people about the means of communication: Do you watch TV? When?"),
      p("In Unit 6, we walk around town: this is the school, that is the hospital — welcome to our environment!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u6_buildings.png", label: "The local buildings — listen and repeat", url: AUDIO.buildings }], COLOR),
  ];
}

// ---------- S84 — Around my house ----------
function ficheS84() {
  const meta = META("Around my house — parts, rooms and first buildings",
    "By the end of the lesson, learners will be able to tell the parts and rooms of a house and name local buildings they already know.",
    "1 / 14", "pictures of houses and buildings");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 5.) Answer these questions:"),
       fp("1. Ask me a Yes/No question about the radio."),
       fp("2. Report: “Niry: TV, every evening.”")],
      [fp("Answer."),
       fp("E.A.: Do you listen to the radio?; Niry watches TV every evening.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: tell the parts of the house you know: the roof, the door, the window… And the rooms: the bedroom, the kitchen…")],
      [fp("Tell the parts and rooms you know.")], "Brainstorming", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to start our last unit: « The environment »! By the end of this lesson, you will name what is around you — from your house to the town.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the picture of the house: the roof, the walls, the door, the windows. Inside: the bedroom, the kitchen, the living room. Outside begins the TOWN!")],
      [fp("Observe. Repeat.")],
      "Using visual aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("And in the town? Tell the local buildings you already know: the school… the church… the market… What is each one for?")],
      [fp("Name buildings. Say their use."),
       fp("E.A.: the school — we learn; the market — we buy food…")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So our environment has circles: my house (parts and rooms) → my street → my town (the local buildings). Tomorrow, the full list!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Quick game: I say a word, you say HOUSE or TOWN! Kitchen? Stadium? Roof? Library?")],
      [fp("Classify: house or town."),
       pAns("E.A.: kitchen → house; stadium → town; roof → house; library → town.",
        ["stadium → town"], { size: SZ.FICHE })],
      "Classification game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two rooms of the house and two local buildings."),
       fp("2. What is the library for?")],
      [fp("Answer."),
       pAns("E.A.: bedroom, kitchen; school, hospital; we read books there.",
        ["bedroom, kitchen"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(84, TOTAL, meta, rows, "s84");
}
function lessonS84() {
  return [
    p([run("LESSON OF THE DAY — SESSION 84", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("AROUND MY HOUSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE CIRCLES OF MY ENVIRONMENT", [
      bullet([run("1. My house: ", { bold: true }), ...kw("the roof, the walls, the door, the windows", "dhe rouf, dhe ouôlz, dhe dôr, dhe ouinndôouz")]),
      bullet([run("2. The rooms: ", { bold: true }), ...kw("the bedroom, the kitchen, the living room", "dhe bèdroum, dhe kitcheune, dhe livinng roum")]),
      bullet([run("3. My town: ", { bold: true }), run("the local buildings — the big lesson of this unit!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("HOUSE OR TOWN? (the sorting game)", [
      bullet([run("House: ", { bold: true, color: C.GREEN }), run("kitchen, roof, bedroom, window", { bold: true, color: C.BLUE })]),
      bullet([run("Town: ", { bold: true, color: C.GREEN }), run("school, stadium, library, market", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("A NEW WORD", [
      bullet([...kw("the environment", "dhi innvaïreunnmeunnt"), run("  —  everything around us: the house, the street, the town, the nature!")], { after: 20 }),
    ]),
  ];
}

// ---------- S85 — The local buildings ----------
function ficheS85() {
  const meta = META("The local buildings",
    "By the end of the lesson, learners will be able to name the local buildings of a town.",
    "2 / 14", "pictures, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name two rooms of the house."),
       fp("2. House or town: fence? kitchen?")],
      [fp("Answer."),
       fp("E.A.: bedroom, kitchen; fence → town/around the house; kitchen → house.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at the picture of the town: how many buildings can you point at? What happens in each one?")],
      [fp("Look. Point. Guess.")], "Using visual aids", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The local buildings ». By the end of this lesson, you will name all the buildings of your town — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the list and repeat: a school, a hospital, the town hall, the Fokontany office, a stadium, a library, a post office, a health center.")],
      [fp("Listen. Repeat with good pronunciation.")],
      "Audio / Repetition drill", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Match the building and its job: Where do we read books? Where do we send letters? Where do we see the doctor? Where do we play football?")],
      [fp("Match. Answer."),
       fp("E.A.: the library; the post office; the hospital/health center; the stadium.")],
      "Question-answer", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So the local buildings: school, hospital, town hall, Fokontany office, stadium, library, post office, health center — every building has its job!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game (BINGO style): I describe, you find! “People play football there.” The first who finds says BINGO!")],
      [fp("Find the building. Say BINGO!"),
       pAns("E.A.: the stadium! the post office! the town hall!",
        ["the stadium!"], { size: SZ.FICHE })],
      "Bingo game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four local buildings."),
       fp("2. Where do we send letters?")],
      [fp("Answer."),
       pAns("E.A.: school, hospital, library, stadium…; at the post office.",
        ["at the post office"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(85, TOTAL, meta, rows, "s85");
}
function lessonS85() {
  return [
    p([run("LESSON OF THE DAY — SESSION 85", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE LOCAL BUILDINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_buildings.png", 420, 768 / 1408),
    p([run("The buildings of my town — and their jobs:", { bold: true })], { after: 50 }),
    vocab("a school", "e skoul", "we learn there"),
    vocab("a hospital / a health center", "e hospiteul / e hèlth sènnteur", "we see the doctor"),
    vocab("the town hall", "dhe taoune hôl", "the mayor works there"),
    vocab("the Fokontany office", "dhe fokontani ofiss", "the office of our neighbourhood"),
    vocab("a stadium", "e stéidieume", "we play and watch football"),
    vocab("a library", "e laïbreri", "we read books"),
    vocab("a post office", "e pôoust ofiss", "we send letters"),
    p("", { after: 60 }),
    box("THE MAGIC QUESTION", [
      bullet([...kw("Where do we read books?", "ouèr dou oui riide bouks"), run("  —  "), run("At the library!", { bold: true, color: C.BLUE })]),
      bullet([run("Careful: "), run("library", { bold: true, color: C.RED }), run(" = books (not a “librairie” that sells books — that’s a bookshop!)")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u6_buildings.png", label: "The local buildings — listen and repeat", url: AUDIO.buildings }], COLOR),
  ];
}

// ---------- S86 — The surroundings ----------
function ficheS86() {
  const meta = META("The surroundings — garden, gate, fence, flag",
    "By the end of the lesson, learners will be able to describe the surroundings of a building.",
    "3 / 14", "pictures, the school surroundings themselves!");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name four local buildings."),
       fp("2. Where do we play football?")],
      [fp("Answer."),
       fp("E.A.: school, hospital, library…; at the stadium.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look out of the window (or at the picture): what is AROUND our school? Something green? Something that closes?")],
      [fp("Look around. Answer.")], "Using the real surroundings", "The school itself"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The surroundings ». By the end of this lesson, you will describe everything around a building!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe and repeat: the garden (flowers and trees), the gate (it opens!), the fence (it protects), the flag (it flies in the wind).")],
      [fp("Observe. Repeat.")],
      "Using visual aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Describe the school surroundings together: “Our school has a garden. The gate is green. Behind the fence, there is the flag.”"),
       fp("Which surroundings does the hospital have? And the stadium?")],
      [fp("Describe. Compare."),
       fp("E.A.: correct sentences with garden/gate/fence/flag.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the surroundings: the garden, the gate, the fence, the flag — they dress the building! We describe with HAS and THERE IS/ARE.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Draw a quick building with TWO surroundings and describe it to your neighbour: “My building has a big gate and a small garden.”")],
      [fp("Draw. Describe."),
       pAns("E.A.: correct description with two surroundings.",
        ["a big gate"], { size: SZ.FICHE })],
      "Personalisation", "Slates/paper"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the four surroundings of the lesson."),
       fp("2. Describe the school surroundings in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: garden, gate, fence, flag; Our school has a garden and a green gate.",
        ["garden, gate, fence, flag"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(86, TOTAL, meta, rows, "s86");
}
function lessonS86() {
  return [
    p([run("LESSON OF THE DAY — SESSION 86", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SURROUNDINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("What is around the building?", { bold: true })], { after: 50 }),
    vocab("a garden", "e gardeune", "flowers and trees"),
    vocab("a gate", "e guéite", "it opens and closes"),
    vocab("a fence", "e fènnss", "it protects the place"),
    vocab("a flag", "e flagg", "it flies in the wind"),
    p("", { after: 60 }),
    box("HOW TO DESCRIBE THE SURROUNDINGS", [
      bullet([run("With HAS: ", { bold: true }), run("Our school has a big garden and a green gate.", { bold: true, color: C.BLUE })]),
      bullet([run("With THERE IS / THERE ARE: ", { bold: true }), run("There is a flag behind the fence. There are flowers in the garden.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("A NEW WORD", [
      bullet([...kw("the surroundings", "dhe seuraonndinngz"), run("  —  everything around a building or a house.")], { after: 20 }),
    ]),
  ];
}

// ---------- S87 — The furniture verbs ----------
function ficheS87() {
  const meta = META("The furniture verbs — sit, write, sleep…",
    "By the end of the lesson, learners will be able to use the verbs related to house furniture.",
    "4 / 14", "the classroom furniture, mime cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the four surroundings."),
       fp("2. Make a sentence with THERE IS about the school.")],
      [fp("Answer."),
       fp("E.A.: garden, gate, fence, flag; There is a flag in the garden.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Watch my gestures and guess: (T sits) … (T writes in the air) … (T closes the eyes) … What am I doing?")],
      [fp("Watch. Guess the verbs.")], "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The furniture verbs ». By the end of this lesson, every piece of furniture will have its action!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe and repeat: I sit ON the chair. I write ON the board. I sleep IN my bed. I read AT the table. I put my books IN the cupboard.")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Classroom furniture"),
    stepRow(["4. Analysis"],
      [fp("Guess from gestures: a pupil mimes, the class says the sentence! Careful with the little words: ON the chair, IN the bed.")],
      [fp("Mime. Say the sentence."),
       fp("E.A.: He is sitting on the chair! She is writing on the board!")],
      "Mime game", "Mime cards"),
    stepRow(["5. Synthesis"],
      [fp("So the furniture verbs: sit on, write on, sleep in, read at, put in — the action + the right little word!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In which building? “People sleep there” (bedroom/hospital!), “children write on the board there” (school!), “people sit and read there” (library!).")],
      [fp("Link verb and building."),
       pAns("E.A.: sleep → hospital; write → school; sit and read → library.",
        ["write → school"], { size: SZ.FICHE })],
      "Question-answer", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I sit … the chair; I sleep … my bed."),
       fp("2. Make one furniture sentence about the library.")],
      [fp("Answer."),
       pAns("E.A.: on; in; In the library, children sit on the chairs and read.",
        ["on; in"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(87, TOTAL, meta, rows, "s87");
}
function lessonS87() {
  return [
    p([run("LESSON OF THE DAY — SESSION 87", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FURNITURE VERBS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The furniture and its actions:", { bold: true })], { after: 50 }),
    vocab("to sit on the chair", "tou sitt onne dhe tchèr"),
    vocab("to write on the board", "tou raïte onne dhe bôrd"),
    vocab("to sleep in the bed", "tou sliip inne dhe bède"),
    vocab("to read at the table", "tou riide att dhe téibeul"),
    vocab("to put the books in the cupboard", "tou poutt dhe bouks inne dhe keubeurd"),
    p("", { after: 60 }),
    box("THE LITTLE WORDS OF FURNITURE", [
      bullet([run("ON", { bold: true, color: C.RED }), run(" the chair, "), run("ON", { bold: true, color: C.RED }), run(" the board — "), run("IN", { bold: true, color: C.RED }), run(" the bed, "), run("IN", { bold: true, color: C.RED }), run(" the cupboard — "), run("AT", { bold: true, color: C.RED }), run(" the table")]),
      bullet([run("These little words are called "), run("prepositions", { bold: true, color: C.BLUE }), run(" — big lesson coming in session 90!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("VERB + BUILDING (the full circle!)", [
      bullet([run("In the "), run("library", { bold: true, color: C.BLUE }), run(", children sit on the chairs and read.")]),
      bullet([run("At "), run("school", { bold: true, color: C.BLUE }), run(", we write on the board.")]),
      bullet([run("In the "), run("hospital", { bold: true, color: C.BLUE }), run(", people sleep in the beds.")], { after: 20 }),
    ]),
  ];
}

// ---------- S88 — Listening: a walk in our town ----------
function ficheS88() {
  const meta = META("Listening — a walk in our town",
    "By the end of the lesson, learners will be able to understand an oral passage about local buildings and their surroundings (gist and details).",
    "5 / 14", "audio (QR code), passage in the book");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I write … the board; I sleep … my bed."),
       fp("2. What do children do in the library?")],
      [fp("Answer."),
       fp("E.A.: on; in; they sit on the chairs and read.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: we are going for a WALK in a town — with our ears! What buildings will we hear? Guess!")],
      [fp("Guess.")], "Prediction", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to LISTEN to « A walk in our town ». By the end of this lesson, you will catch its gist and details — with perfect pronunciation!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listen): what is the passage about? Does the speaker love the town?")],
      [fp("Listen. Answer."),
       fp("E.A.: a walk around the buildings of a town; yes — “I love my town!”")],
      "Audio", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listen): details: 1. What does the school have? 2. What is behind the fence? 3. What is next to the health center? 4. What is near the stadium?")],
      [fp("Listen. Answer."),
       fp("E.A.: a big garden and a green gate; the flag; the hospital; a post office.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("Now repeat after the audio, sentence by sentence — same pronunciation, same intonation: “Welcome to our town!” ↗")],
      [fp("Repeat with good intonation.")], "Repetition drill", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Did you hear the pointing words? “THIS is our school… THAT building over there…” What do they do? (Mystery for tomorrow!)")],
      [fp("Find the pointing words."),
       pAns("E.A.: this, that — they point at things!",
        ["this, that"], { size: SZ.FICHE })],
      "Discovery", "Passage"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the gist of the passage."),
       fp("2. Give two details.")],
      [fp("Answer."),
       pAns("E.A.: a walk around the town’s buildings; school/garden/green gate, hospital next to the health center…",
        ["green gate"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(88, TOTAL, meta, rows, "s88");
}
function lessonS88() {
  return [
    p([run("LESSON OF THE DAY — SESSION 88", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("A WALK IN OUR TOWN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    walkTextBox(),
    p("", { after: 60 }),
    box("WHAT WE HEARD ON THE WALK", [
      bullet([run("The school: "), run("a big garden, a green gate, the flag behind the fence", { bold: true, color: C.BLUE })]),
      bullet([run("The hospital: "), run("next to the health center", { bold: true, color: C.BLUE }), run(" — the post office: "), run("near the stadium", { bold: true, color: C.BLUE })]),
      bullet([run("And two little pointing words: "), run("THIS is our school… THAT is the hospital…", { bold: true, color: C.RED }), run(" — tomorrow’s lesson!")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u6_walk.png", label: "“A walk in our town” — listen and repeat", url: AUDIO.walk }], COLOR),
  ];
}

// ---------- S89 — Demonstratives ----------
function ficheS89() {
  const meta = META("This, that, these, those — the demonstratives",
    "By the end of the lesson, learners will be able to point at things with this/that/these/those.",
    "6 / 14", "classroom objects, the passage of session 88");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the walk: what is next to the health center?"),
       fp("2. Quote a sentence of the passage with “this”.")],
      [fp("Answer."),
       fp("E.A.: the hospital; “This is our school.”")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("(T holds a pen) THIS is a pen. (T points at the door) THAT is the door. Near… far… Do you feel the difference?")],
      [fp("Watch. Feel the difference.")], "Using gestures", "Classroom objects"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The demonstratives ». By the end of this lesson, you will point at everything — near and far, one and many!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the square: near + one = THIS; far + one = THAT; near + many = THESE; far + many = THOSE."),
       fp("From the passage: “THIS is our school” (we are in front of it!), “THAT building over there” (it is far!).")],
      [fp("Observe the square of four.")],
      "Contextualisation of grammar", "Passage, blackboard"),
    stepRow(["4. Analysis"],
      [fp("Point and say in the classroom: this chair / that board / these books / those windows. Then with the town picture: this school, those gardens!")],
      [fp("Point and say."),
       fp("E.A.: correct this/that/these/those with gestures.")],
      "Practice with gestures", "Classroom, picture"),
    stepRow(["5. Synthesis"],
      [fp("So: THIS/THESE for near, THAT/THOSE for far; THIS/THAT for one, THESE/THOSE for many.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Tour guide game: present the town picture to your neighbour: “This is the town hall, and that is the stadium. These are the gardens…”")],
      [fp("Be the tour guide!"),
       pAns("E.A.: This is…, that is…, these are…, those are… correct!",
        ["This is…"], { size: SZ.FICHE })],
      "Role play", "Picture"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: … book here is mine; … birds over there are beautiful."),
       fp("2. When do we use THAT?")],
      [fp("Answer."),
       pAns("E.A.: This; Those; for ONE thing FAR from me.",
        ["This; Those"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(89, TOTAL, meta, rows, "s89");
}
function lessonS89() {
  return [
    p([run("LESSON OF THE DAY — SESSION 89", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THIS, THAT, THESE, THOSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE SQUARE OF FOUR", [
      bullet([run("Near + one: "), run("THIS", { bold: true, color: C.RED }), run("  —  "), ...kw("This is our school.", "dhiss iz aour skoul")]),
      bullet([run("Far + one: "), run("THAT", { bold: true, color: C.RED }), run("  —  "), ...kw("That is the hospital.", "dhatt iz dhe hospiteul")]),
      bullet([run("Near + many: "), run("THESE", { bold: true, color: C.RED }), run("  —  "), ...kw("These are my books.", "dhiiz ar maï bouks")]),
      bullet([run("Far + many: "), run("THOSE", { bold: true, color: C.RED }), run("  —  "), ...kw("Those are the gardens.", "dhôouz ar dhe gardeunnz")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE TOUR GUIDE SENTENCES", [
      bullet([run("This is the town hall, and that building over there is the stadium.", { italic: true })]),
      bullet([run("These flowers are beautiful, and those trees are very old!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("REMEMBER", [
      bullet([run("Near me → "), run("this / these", { bold: true, color: C.BLUE }), run("  —  far from me → "), run("that / those", { bold: true, color: C.BLUE })]),
      bullet([run("One → "), run("this / that", { bold: true, color: C.BLUE }), run("  —  many → "), run("these / those", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S90 — Prepositions of place ----------
function ficheS90() {
  const meta = META("The prepositions of place",
    "By the end of the lesson, learners will be able to locate things and buildings with the prepositions of place.",
    "7 / 14", "a box and a pen (for the demonstration), picture of the town");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the square of four demonstratives."),
       fp("2. Point at two things in the classroom with this/those.")],
      [fp("Answer."),
       fp("E.A.: this/that/these/those; This is my pen, those are the windows.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Magic show with a pen and a box: the pen is IN the box… ON the box… UNDER the box! Follow the pen with your eyes!")],
      [fp("Watch. Say where the pen is.")], "Using gestures/realia", "A box and a pen"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The prepositions of place ». By the end of this lesson, you will say WHERE everything is!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the family of little words: in, on, under, in front of, behind, next to, between, opposite, near.")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Now with the town! From the walk passage: the hospital is NEXT TO the health center; the flag is BEHIND the fence; the post office is NEAR the stadium."),
       fp("Where is the library on our picture? And the town hall?")],
      [fp("Locate buildings with prepositions."),
       fp("E.A.: The library is next to the school. The town hall is opposite the market…")],
      "Contextualisation of grammar", "Picture"),
    stepRow(["5. Synthesis"],
      [fp("So the prepositions of place answer WHERE: in, on, under, in front of, behind, next to, between, opposite, near.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Simon says — position edition: “Put your pen ON the book! UNDER the chair! BETWEEN two notebooks!”")],
      [fp("Follow the orders fast!"),
       pAns("E.A.: correct positions followed.",
        ["correct positions"], { size: SZ.FICHE })],
      "Game", "Pens, books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete with the picture: the hospital is … the post office and the health center."),
       fp("2. Where is YOUR house? (one preposition!)")],
      [fp("Answer."),
       pAns("E.A.: between; My house is near the market / behind the school…",
        ["between"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(90, TOTAL, meta, rows, "s90");
}
function lessonS90() {
  return [
    p([run("LESSON OF THE DAY — SESSION 90", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PREPOSITIONS OF PLACE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The little words that answer WHERE:", { bold: true })], { after: 50 }),
    vocab("in / on / under", "inne / onne / eunndeur", "inside / on top / below"),
    vocab("in front of ≠ behind", "inne fronnte ov ≠ bihaïnnde", "before ≠ at the back"),
    vocab("next to", "nèxte tou", "just beside"),
    vocab("between", "bitouiine", "in the middle of two"),
    vocab("opposite", "opezitt", "face to face"),
    vocab("near", "nir", "not far"),
    p("", { after: 60 }),
    box("THE TOWN SENTENCES", [
      bullet([run("The hospital is "), run("next to", { bold: true, color: C.RED }), run(" the health center.")]),
      bullet([run("The flag is "), run("behind", { bold: true, color: C.RED }), run(" the fence, "), run("in front of", { bold: true, color: C.RED }), run(" the school.")]),
      bullet([run("The hospital is "), run("between", { bold: true, color: C.RED }), run(" the post office and the health center.")]),
      bullet([run("The market is "), run("opposite", { bold: true, color: C.RED }), run(" the town hall.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MEMORY TRICK", [
      p([run("Draw the preposition! A dot IN a circle, ON a line, UNDER a line, BETWEEN two walls… Your hand remembers better than your head!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S91 — The map ----------
function ficheS91() {
  const meta = META("The map of the town — locating buildings",
    "By the end of the lesson, learners will be able to locate buildings on a map from a description.",
    "8 / 14", "map (in the book / on the board)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give four prepositions of place."),
       fp("2. Where is the flag of the school?")],
      [fp("Answer."),
       fp("E.A.: next to, between, behind…; behind the fence / in front of the school.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I draw a map on the board: two streets, empty blocks. A map is the town seen by a BIRD!")],
      [fp("Watch the map appear.")], "Using visual aids", "Blackboard map"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a map. By the end of this lesson, you will locate every building — like a bird!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and locate the library: “The library is next to the school, opposite the garden.” A pupil comes and draws the book sign at the right place!")],
      [fp("Listen. Locate the library on the map.")],
      "Listening + map", "Blackboard map"),
    stepRow(["4. Analysis"],
      [fp("Name the other buildings on the map of the book: what is next to the school? behind it? between the post office and the health center?"),
       fp("Then locate from my description: “The Fokontany office is near the town hall…”")],
      [fp("Name. Locate from the description."),
       fp("E.A.: correct buildings placed with prepositions.")],
      "Question-answer", "Map in the book"),
    stepRow(["5. Synthesis"],
      [fp("So to read a map: find the streets, then locate each building with the prepositions: next to, between, opposite, near…")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Map BINGO: I describe a building’s place, you find it on the map! “It is between the school and the garden…” BINGO!")],
      [fp("Find the building. Say BINGO!"),
       pAns("E.A.: the library! the stadium! the post office!",
        ["BINGO"], { size: SZ.FICHE })],
      "Bingo game", "Map"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Locate two buildings of the map with two different prepositions."),
       fp("2. What is a map?")],
      [fp("Answer."),
       pAns("E.A.: The library is next to the school…; the town seen from the sky.",
        ["next to the school"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(91, TOTAL, meta, rows, "s91");
}
function lessonS91() {
  return [
    p([run("LESSON OF THE DAY — SESSION 91", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MAP OF THE TOWN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_map.png", 420, 768 / 1408),
    box("HOW TO READ A MAP", [
      bullet([run("1. A map = the town seen by a "), run("bird", { bold: true, color: C.BLUE }), run(" (from the sky!).")]),
      bullet([run("2. Find the "), run("streets", { bold: true, color: C.BLUE }), run(" first.")]),
      bullet([run("3. Locate each building with the "), run("prepositions", { bold: true, color: C.BLUE }), run(": next to, between, opposite, near, behind.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("LOCATING SENTENCES (models)", [
      bullet([run("The library is "), run("next to", { bold: true, color: C.RED }), run(" the school.")]),
      bullet([run("The stadium is "), run("behind", { bold: true, color: C.RED }), run(" the school.")]),
      bullet([run("The hospital is "), run("between", { bold: true, color: C.RED }), run(" the post office and the health center.")]),
      bullet([run("The garden is "), run("opposite", { bold: true, color: C.RED }), run(" the town hall.")], { after: 20 }),
    ]),
  ];
}

// ---------- S92 — My surroundings ----------
function ficheS92() {
  const meta = META("I draw and describe my surroundings",
    "By the end of the lesson, learners will be able to draw their own surroundings and describe them to the class.",
    "9 / 14", "paper, pencils");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Locate the stadium on the map."),
       fp("2. Give the three steps to read a map.")],
      [fp("Answer."),
       fp("E.A.: behind the school; bird view, streets, prepositions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes. You are in front of your house… What do you see on the left? On the right? Open your eyes: today we draw it!")],
      [fp("Imagine your surroundings.")], "Visualisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to DRAW and DESCRIBE our own surroundings. By the end of this lesson, the class will travel to your home!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe my model drawing: my house in the middle, the market near it, the school behind, trees in front… and the sentences that describe it.")],
      [fp("Observe the model.")],
      "Using visual aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw YOUR surroundings (5 minutes, simple shapes!): your house + 3 or 4 things around it (buildings, trees, the road…).")],
      [fp("Draw your surroundings.")],
      "Personalisation technique", "Paper, pencils"),
    stepRow(["5. Synthesis"],
      [fp("Prepare your 4 sentences: one with HAS, one with THERE IS/ARE, one with a preposition, one with a demonstrative. The full toolbox of Unit 6!")],
      [fp("Write your 4 sentences.")], "Guided writing", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Describe your drawing to the class: “This is my house. It has a small garden. There is a big tree in front of it. The market is near my house.”")],
      [fp("Describe your surroundings to the class."),
       pAns("E.A.: 4 correct sentences with the toolbox.",
        ["This is my house."], { size: SZ.FICHE })],
      "Oral presentation", "Drawings"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say your four sentences."),
       fp("2. One question from the class: answer it!")],
      [fp("Answer."),
       pAns("E.A.: correct description; correct answer.",
        ["correct description"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(92, TOTAL, meta, rows, "s92");
}
function lessonS92() {
  return [
    p([run("LESSON OF THE DAY — SESSION 92", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("I DESCRIBE MY SURROUNDINGS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DESCRIPTION TOOLBOX (use all four!)", [
      bullet([run("1. HAS: ", { bold: true }), run("My house has a small garden.", { bold: true, color: C.BLUE })]),
      bullet([run("2. THERE IS / ARE: ", { bold: true }), run("There is a big tree in front of it.", { bold: true, color: C.BLUE })]),
      bullet([run("3. A preposition: ", { bold: true }), run("The market is near my house.", { bold: true, color: C.BLUE })]),
      bullet([run("4. A demonstrative: ", { bold: true }), run("This is my house, and that is our church.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL DESCRIPTION", [
      p([run("This is my house. It has a small garden and a brown fence. There is a big mango tree in front of it. The market is near my house, and the school is behind it. I love my surroundings!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S93 — Reading (1): Greenhill ----------
function ficheS93() {
  const meta = META("Reading (1) — “My town, Greenhill”: the gist",
    "By the end of the lesson, learners will be able to predict the content of the text from its title, read it fluently and find its gist.",
    "10 / 14", "reading text (in the book)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say two sentences of your surroundings description."),
       fp("2. Complete: there … a tree; there … flowers.")],
      [fp("Answer."),
       fp("E.A.: correct sentences; is; are.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: the title is “My town, Greenhill”. Green… hill… Predict: what kind of town is it? What will we find in the text?")],
      [fp("Predict from the title."),
       fp("E.A.: a green town with a hill; buildings, gardens…")],
      "Prediction", "Title"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ about Greenhill. By the end of this lesson, you will read fluently and find the gist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (silent): read the text once. What is Greenhill like? (one word!)")],
      [fp("Read. Answer."),
       fp("E.A.: small / clean / beautiful.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Check your predictions: were you right? What is the gist of the text?")],
      [fp("Check. Say the gist."),
       fp("E.A.: a description of Greenhill, a small clean town that people love.")],
      "Whole-class work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So the gist: Greenhill is a small, clean town; the text describes its buildings, their places and its gardens — and the people keep it clean!")],
      [fp("Say the gist.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the text aloud fluently, one sentence per pupil — smooth, with the pauses at the commas.")],
      [fp("Read fluently."),
       pAns("E.A.: fluent reading of the whole text.",
        ["fluent reading"], { size: SZ.FICHE })],
      "Reading aloud", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What kind of town is Greenhill (two adjectives)?"),
       fp("2. Give the gist in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: small and clean; the text describes Greenhill and its buildings.",
        ["small and clean"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(93, TOTAL, meta, rows, "s93");
}
function lessonS93() {
  return [
    p([run("LESSON OF THE DAY — SESSION 93", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: MY TOWN, GREENHILL (1)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    townTextBox(),
    p("", { after: 60 }),
    box("THE GIST", [
      bullet([run("Greenhill is a small, clean town: the text describes its buildings, their places and its gardens", { italic: true }), run(" — and the people keep it clean!")]),
      bullet([run("The title helped us predict: green + hill = a green town!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u6_town.png", label: "“My town, Greenhill” — listen and follow in your book", url: AUDIO.town }], COLOR),
  ];
}

// ---------- S94 — Reading (2): details + the map ----------
function ficheS94() {
  const meta = META("Reading (2) — details and the map of Greenhill",
    "By the end of the lesson, learners will be able to answer detailed questions and draw the map of the town from the text.",
    "11 / 14", "reading text, paper for maps");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of “My town, Greenhill”?"),
       fp("2. What kind of town is Greenhill?")],
      [fp("Answer."),
       fp("E.A.: description of a small clean town; small and clean.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quiz, books closed: where is the town hall? What is behind the school? Let’s check with detective eyes!")],
      [fp("Answer from memory."),
       fp("E.A.: in the center; the stadium.")],
      "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read Greenhill AGAIN — and turn the text into a MAP! By the end of this lesson, Greenhill will be drawn in your notebook.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: detailed questions: 1. What is in front of the town hall? 2. What is next to the school? 3. Where exactly is the hospital? 4. What is opposite the hospital?")],
      [fp("Read. Answer."),
       fp("E.A.: a big flag; the library; between the post office and the health center, on Main Street; the market.")],
      "Question-answer", "Text"),
    stepRow(["4. Analysis"],
      [fp("Now DRAW the map of Greenhill from the text! Place: town hall (center), school + library + garden, stadium behind, Main Street with post office / hospital / health center, market opposite.")],
      [fp("Draw the map of the text.")],
      "Individual work", "Paper"),
    stepRow(["5. Synthesis"],
      [fp("Correct the maps in pairs: compare with the text sentence by sentence. Same places? The text is the referee!")],
      [fp("Compare and correct in pairs."),
       fp("E.A.: corrected maps that follow the text.")],
      "Peer correction", "Maps"),
    stepRow(["6. Practice"],
      [fp("Present your map: “This is the town hall. The school is next to the library…” — the full toolbox again!")],
      [fp("Present your map."),
       pAns("E.A.: correct presentation with prepositions and demonstratives.",
        ["next to the library"], { size: SZ.FICHE })],
      "Oral presentation", "Maps"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where is the hospital of Greenhill?"),
       fp("2. Does your map show it correctly?")],
      [fp("Answer."),
       pAns("E.A.: between the post office and the health center; yes (after correction!).",
        ["between the post office"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(94, TOTAL, meta, rows, "s94");
}
function lessonS94() {
  return [
    p([run("LESSON OF THE DAY — SESSION 94", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: GREENHILL (2) — THE MAP", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("FROM TEXT TO MAP — THE DETECTIVE METHOD", [
      bullet([run("1. Read "), run("one sentence", { bold: true, color: C.BLUE }), run(" at a time.")]),
      bullet([run("2. Find the "), run("building", { bold: true, color: C.BLUE }), run(" and its "), run("preposition", { bold: true, color: C.BLUE }), run(".")]),
      bullet([run("3. Draw it at the right place — then next sentence!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PLACES OF GREENHILL (check your map!)", [
      bullet([run("Center: "), run("town hall + flag in front", { bold: true, color: C.BLUE })]),
      bullet([run("School "), run("next to", { bold: true, color: C.RED }), run(" the library, garden around, stadium "), run("behind", { bold: true, color: C.RED })]),
      bullet([run("Main Street: post office — hospital — health center ("), run("between", { bold: true, color: C.RED }), run("!)")]),
      bullet([run("Market "), run("opposite", { bold: true, color: C.RED }), run(" the hospital")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("PEER CORRECTION", [
      p([run("Compare your maps sentence by sentence. Different? Read the text again — the text is the referee!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S95 — Reading (3): comparing ----------
function ficheS95() {
  const meta = META("Reading (3) — Greenhill and our Malagasy towns",
    "By the end of the lesson, learners will be able to compare the town of the text with Malagasy towns and report their group work.",
    "12 / 14", "reading text, group notes");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Where is the market of Greenhill?"),
       fp("2. What do people do in the evening there?")],
      [fp("Answer."),
       fp("E.A.: opposite the hospital; they walk in the gardens, children read in the library.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Greenhill… and YOUR town or village? Same? Different? Today, the big comparison!")],
      [fp("Listen. Think.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to COMPARE Greenhill with the Malagasy towns, in groups. By the end of this lesson, each group will report its ideas!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the comparison tools: BOTH (the two!): Both have a market. / BUT (different!): Greenhill has a library, but our village doesn’t. / LIKE: Our town hall is like Greenhill’s, with a flag!")],
      [fp("Observe the tools.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Group work (groups of four): find 2 things that are the SAME and 2 things that are DIFFERENT between Greenhill and your town/village. Note them!")],
      [fp("Compare in groups. Take notes."),
       fp("E.A.: both have a school and a market; Greenhill has Main Street, we have the RN road…")],
      "Group work", "Notes"),
    stepRow(["5. Synthesis"],
      [fp("So to compare: BOTH for the same, BUT for the different, LIKE for the resemblance — and always with respect for every town and village!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Report the group work: one reporter per group presents the 4 ideas to the class.")],
      [fp("Report to the class."),
       pAns("E.A.: Both Greenhill and our town have a market, but our market is bigger!",
        ["Both"], { size: SZ.FICHE })],
      "Group report", "Notes"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one SAME and one DIFFERENT from your group."),
       fp("2. Make one sentence with BOTH.")],
      [fp("Answer."),
       pAns("E.A.: correct comparisons; Both towns have a school.",
        ["Both towns"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(95, TOTAL, meta, rows, "s95");
}
function lessonS95() {
  return [
    p([run("LESSON OF THE DAY — SESSION 95", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("GREENHILL AND OUR TOWNS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE COMPARISON TOOLS", [
      bullet([run("BOTH", { bold: true, color: C.RED }), run(" (the two!): "), run("Both Greenhill and our town have a market.", { bold: true, color: C.BLUE })]),
      bullet([run("BUT", { bold: true, color: C.RED }), run(" (different!): "), run("Greenhill has a library, but our village doesn’t.", { bold: true, color: C.BLUE })]),
      bullet([run("LIKE", { bold: true, color: C.RED }), run(" (resemblance): "), run("Our town hall is like Greenhill’s, with a big flag!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("IDEAS FROM THE CLASS (examples)", [
      bullet([run("Same: a school, a market, gardens, the flag at school!", { italic: true })]),
      bullet([run("Different: Main Street / the RN road; a big stadium / a football field; many fences / hedges of trees…", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RESPECT CORNER", [
      p("Every town and every village is beautiful in its own way. We compare to LEARN, never to laugh. Mutual respect — the value of this unit!", { after: 40 }),
    ]),
  ];
}

// ---------- S96 — Writing (1): my favourite place ----------
function ficheS96() {
  const meta = META("Writing (1) — my favourite place: sharing and drafting",
    "By the end of the lesson, learners will be able to choose their favourite place and draft sentences about it.",
    "13 / 14", "notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Make one comparison sentence with BOTH."),
       fp("2. Make one with BUT.")],
      [fp("Answer."),
       fp("E.A.: Both towns have a school; Greenhill has a library, but we don’t.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: close your eyes… Which place makes you happy? The stadium? The library? Your garden? The market? That is your favourite place!")],
      [fp("Choose your favourite place.")], "Visualisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to PREPARE a text about our favourite place. By the end of this lesson, your draft will be ready!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Orally share to the class: “My favourite place is… because…” — one sentence each!")],
      [fp("Share your favourite place."),
       fp("E.A.: My favourite place is the stadium because I love football!")],
      "Personalisation technique", "----"),
    stepRow(["4. Analysis"],
      [fp("Observe the writing plan (4-5 sentences): 1. my favourite place 2. where it is (preposition!) 3. what it has / what there is 4. what I do there 5. why I love it.")],
      [fp("Observe the plan.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("Draft your 4-5 sentences following the plan. Use the toolbox: preposition, there is/are, has, a demonstrative if you want!")],
      [fp("Write your draft.")], "Guided writing", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Read your draft quietly to your neighbour: does he/she SEE the place in his/her head? If not, add a detail!")],
      [fp("Read. Improve with one detail."),
       pAns("E.A.: draft of 4-5 sentences with the plan.",
        ["draft of 4-5 sentences"], { size: SZ.FICHE })],
      "Pair work", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read two sentences of your draft."),
       fp("2. Which preposition did you use?")],
      [fp("Answer."),
       pAns("E.A.: correct sentences; near/behind/next to…",
        ["correct sentences"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(96, TOTAL, meta, rows, "s96");
}
function lessonS96() {
  return [
    p([run("LESSON OF THE DAY — SESSION 96", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FAVOURITE PLACE (1): THE DRAFT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITING PLAN (4-5 sentences)", [
      bullet([run("1. ", { bold: true }), run("My favourite place is… ", { bold: true, color: C.BLUE }), run("(the stadium, the library, my garden…)")]),
      bullet([run("2. ", { bold: true }), run("Where: ", { bold: true, color: C.BLUE }), run("It is near / behind / next to…")]),
      bullet([run("3. ", { bold: true }), run("What it has: ", { bold: true, color: C.BLUE }), run("It has… / There is… / There are…")]),
      bullet([run("4. ", { bold: true }), run("What I do there: ", { bold: true, color: C.BLUE }), run("I play, I read, I meet my friends…")]),
      bullet([run("5. ", { bold: true }), run("Why I love it: ", { bold: true, color: C.BLUE }), run("because…!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MODEL DRAFT", [
      p([run("My favourite place is the library. It is next to our school, near the big garden. There are many books and a quiet room. I read stories there with my friends every week. I love it because books take me around the world!", { italic: true })], { after: 40 }),
    ]),
  ];
}

// ---------- S97 — Writing (2): final text ----------
function ficheS97() {
  const meta = META("Writing (2) — my favourite place: the final text",
    "By the end of the lesson, learners will be able to write a coherent text describing their favourite place, corrected in pairs.",
    "14 / 14", "drafts (notebooks)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the five points of the writing plan."),
       fp("2. Read one sentence of your draft.")],
      [fp("Answer."),
       fp("E.A.: place, where, has/there is, what I do, why; correct sentence.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today your draft becomes a BEAUTIFUL final text — the last writing of the year! Give it your best English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to FINISH our favourite place text. By the end of this lesson, it will be corrected, polished and proudly read!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the final checklist: capital letters and full stops? verb TO BE everywhere? there is/are correct? one preposition at least? the BECAUSE of the heart?")],
      [fp("Read the checklist.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write the final version of your text (4-5 sentences), clean and clear.")],
      [fp("Write your final text.")],
      "Individual writing", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Peer correction: exchange notebooks, check with the checklist, two stars and one wish — kindly!")],
      [fp("Correct your friend’s text."),
       fp("E.A.: real corrections with the checklist.")],
      "Peer correction", "Notebooks"),
    stepRow(["6. Practice"],
      [fp("Volunteers read their final text to the class. The class guesses: can we SEE the place? Applause for the last writing of the year!")],
      [fp("Read your text. Applaud!"),
       pAns("E.A.: coherent 4-5 sentence text, well read.",
        ["coherent"], { size: SZ.FICHE })],
      "Oral presentation", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your final text."),
       fp("2. Give one correction you made thanks to your friend.")],
      [fp("Answer."),
       pAns("E.A.: coherent final text; a real correction.",
        ["coherent final text"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(97, TOTAL, meta, rows, "s97");
}
function lessonS97() {
  return [
    p([run("LESSON OF THE DAY — SESSION 97", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FAVOURITE PLACE (2): THE FINAL TEXT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FINAL CHECKLIST", [
      bullet([run("✔ Capital letter and full stop in every sentence")]),
      bullet([run("✔ the verb "), run("TO BE", { bold: true, color: C.RED }), run(" everywhere: it IS near…")]),
      bullet([run("✔ "), run("there is + one / there are + many", { bold: true, color: C.RED })]),
      bullet([run("✔ at least one "), run("preposition of place", { bold: true, color: C.RED })]),
      bullet([run("✔ the "), run("because", { bold: true, color: C.RED }), run(" of the heart: why you love it!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TWO STARS AND ONE WISH", [
      p([run("★ ★ Two things you like in your friend’s text — ✎ one kind idea to make it even better.", { italic: true })], { after: 40 }),
    ]),
    p("", { after: 60 }),
    box("BRAVO!", [
      p("This is your LAST text of the year. Look back at Unit 1: you could only say Hello… Now you describe your world in English. What a journey!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("THE ENVIRONMENT"),
    sub("1. The local buildings"),
    bullet([run("school — hospital — town hall — Fokontany office — stadium — library — post office — health center", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The surroundings"),
    bullet([run("the garden, the gate, the fence, the flag", { bold: true, color: C.BLUE }), run(" — described with HAS and THERE IS/ARE")], { after: 100 }),
    sub("3. The furniture verbs"),
    bullet([run("sit ON the chair — write ON the board — sleep IN the bed — read AT the table", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The demonstratives"),
    bullet([run("near: THIS/THESE — far: THAT/THOSE — ", { bold: true }), run("This is our school, those are the gardens!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The prepositions of place"),
    bullet([run("in, on, under, in front of, behind, next to, between, opposite, near", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The map"),
    bullet([run("the town seen by a bird — locate each building with the prepositions!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. Describing and comparing places"),
    bullet([run("the toolbox: HAS + THERE IS/ARE + preposition + demonstrative", { bold: true, color: C.BLUE })]),
    bullet([run("comparing: BOTH (same) — BUT (different) — LIKE (resemblance)", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t7_u6_buildings.png", label: "The local buildings and the surroundings", url: AUDIO.buildings },
      { qr: "qr_t7_u6_walk.png", label: "“A walk in our town”", url: AUDIO.walk },
      { qr: "qr_t7_u6_town.png", label: "“My town, Greenhill” (reading text)", url: AUDIO.town },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Where do we…? 1. read books 2. send letters 3. play football 4. see the doctor.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with this, that, these, those: 1. … book here is mine. 2. … birds over there are beautiful. 3. … building over there is the town hall. 4. … flowers here smell good.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete with a preposition (Greenhill!): 1. The flag is … of the town hall. 2. The school is … the library. 3. The hospital is … the post office and the health center. 4. The market is … the hospital.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete: 1. I sit … the chair. 2. We write … the board. 3. He sleeps … his bed. 4. There … two gates and a fence.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Describe the school surroundings in four sentences (has, there is/are, a preposition, a demonstrative).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: at the library — at the post office — at the stadium — at the hospital / health center (1 point each).", ["at the library"]),
    pAns("Exercise 2: 1. This  2. Those  3. That  4. These (1 point each).", ["This"]),
    pAns("Exercise 3: 1. in front  2. next to  3. between  4. opposite (1 point each).", ["between"]),
    pAns("Exercise 4: 1. on  2. on  3. in  4. are (1 point each).", ["are"]),
    pAns("Exercise 5: four correct sentences with the four tools (1 point each).", ["four correct sentences"]),
  ];
}

// ---------- S98 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s98", "SESSION 98 / 99", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: THE ENVIRONMENT", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name six local buildings and their jobs."),
    pAns("E.A.: school (learn), hospital (doctor), town hall (mayor), stadium (football), library (books), post office (letters).", ["library (books)"]),
    p("2. Name the four surroundings and describe our school with two of them."),
    pAns("E.A.: garden, gate, fence, flag; Our school has a garden and a green gate.", ["garden, gate, fence, flag"]),
    p("3. Give three furniture verbs with their little words."),
    pAns("E.A.: sit ON the chair, write ON the board, sleep IN the bed.", ["sit ON the chair"]),
    p("4. Say the square of four demonstratives with one example each."),
    pAns("E.A.: this (near, one), that (far, one), these (near, many), those (far, many).", ["these (near, many)"]),
    p("5. Give six prepositions of place."),
    pAns("E.A.: in, on, under, next to, between, behind, opposite, near, in front of.", ["opposite"]),
    p("6. In the walk passage: where is the flag? And the post office?"),
    pAns("E.A.: behind the fence; near the stadium.", ["behind the fence"]),
    p("7. In Greenhill: where is the hospital exactly?"),
    pAns("E.A.: between the post office and the health center, on Main Street.", ["on Main Street"]),
    p("8. Compare Greenhill and your town: one BOTH, one BUT."),
    pAns("E.A.: Both have a market; Greenhill has a library, but our village doesn’t.", ["Both have a market"]),
    p("9. Describe your surroundings in two sentences (toolbox!)."),
    pAns("E.A.: This is my house. There is a tree in front of it…", ["There is a tree"]),
    p("10. Say your favourite place and why, in one sentence."),
    pAns("E.A.: My favourite place is the stadium because I love football!", ["My favourite place"]),
  ];
}

// ---------- S99 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s99", "SESSION 99 / 99", { bold: true, size: 28, after: 60 }),
    p([run("T7 TEST PAPER — UNIT 6: THE ENVIRONMENT", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: be the tour guide of your town — present four buildings with this/that and one preposition.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Where do we…? 1. send letters 2. read books 3. see the doctor 4. play football.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: 1. … flowers here are pretty. 2. … stadium over there is big. 3. I write … the board. 4. There … a gate and two fences.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Draw a mini-map with: the school next to the library, the stadium behind the school, the market opposite the town hall, the hospital between the post office and the health center.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write 4 sentences about your favourite place (where + there is/are + what you do + why).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: four buildings + this/that + one preposition (1 point each).", ["four buildings"]),
    pAns("Exercise 2: at the post office — at the library — at the hospital/health center — at the stadium (1 point each).", ["at the post office"]),
    pAns("Exercise 3: 1. These  2. That  3. on  4. is (1 point each).", ["These"]),
    pAns("Exercise 4: four correct positions on the map (1 point each).", ["four correct positions"]),
    pAns("Exercise 5: four coherent sentences following the plan (1 point each).", ["four coherent sentences"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS84(), pageBreak(), ...lessonS84(), pageBreak(),
    ...ficheS85(), pageBreak(), ...lessonS85(), pageBreak(),
    ...ficheS86(), pageBreak(), ...lessonS86(), pageBreak(),
    ...ficheS87(), pageBreak(), ...lessonS87(), pageBreak(),
    ...ficheS88(), pageBreak(), ...lessonS88(), pageBreak(),
    ...ficheS89(), pageBreak(), ...lessonS89(), pageBreak(),
    ...ficheS90(), pageBreak(), ...lessonS90(), pageBreak(),
    ...ficheS91(), pageBreak(), ...lessonS91(), pageBreak(),
    ...ficheS92(), pageBreak(), ...lessonS92(), pageBreak(),
    ...ficheS93(), pageBreak(), ...lessonS93(), pageBreak(),
    ...ficheS94(), pageBreak(), ...lessonS94(), pageBreak(),
    ...ficheS95(), pageBreak(), ...lessonS95(), pageBreak(),
    ...ficheS96(), pageBreak(), ...lessonS96(), pageBreak(),
    ...ficheS97(), pageBreak(), ...lessonS97(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 6", COLOR, [
      "I can name the local buildings: school, hospital, town hall, library…",
      "I can describe the surroundings: garden, gate, fence, flag.",
      "I can use the furniture verbs: sit on the chair, write on the board.",
      "I can point with this, that, these, those.",
      "I can locate with the prepositions: next to, between, behind, opposite…",
      "I can read a map and draw the map of a text.",
      "I can compare a foreign town with my Malagasy town.",
      "I can describe my favourite place in 4-5 sentences.",
    ], "CONGRATULATIONS! You have finished the 99 sessions of T7! Now explore the annexes — and see you in T8!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.bullet = bullet;
module.exports.vocab = vocab;
module.exports.box = box;
module.exports.walkTextBox = walkTextBox;
module.exports.townTextBox = townTextBox;
module.exports.META = META;
module.exports.SHADE = SHADE;
