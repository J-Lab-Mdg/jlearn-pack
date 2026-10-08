// T10 — UNIT 3 — MY HOUSE, MY NEIGHBOURHOOD (6 séances + révision + test) — Sessions 19 à 26 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B9770E"; // ocre
const SHADE = "FDEBD0";
const TOTAL = 88;
const AUDIO = {
  house: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — MY HOUSE, MY NEIGHBOURHOOD", title, slo,
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
function houseTextBox() {
  return box("WELCOME TO MY HOUSE! (listening passage)", [
    p("Hello! I’m Soa. Welcome to my house! It is a small brick house with a red roof, near the big mango tree.", { after: 40 }),
    p("Come in! This is the living room. There is a sofa, a low table, and a radio on the shelf. The photos of my family are above the sofa.", { after: 40 }),
    p("Next to the living room, you can see the kitchen. The pots are under the sink, and the rice basket is in the corner, behind the door.", { after: 40 }),
    p("Upstairs, there are two bedrooms. My bedroom is tidy: my clothes are in the wardrobe and my school bag is below the window. But my brother’s room is always messy! His shoes are everywhere.", { after: 40 }),
    p("In front of the house, there is a small garden with hens. The toilet is outside, opposite the kitchen door.", { after: 40 }),
    p("I love my house. It is not big, but it is clean, and it is home!", { after: 20 }),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — A BUSY SATURDAY AT NAIVO’S HOUSE", [
    p("Saturday is the cleaning day at Naivo’s house, in the village of Ambohimanga. Everybody in the family has a job — nobody watches!", { after: 40 }),
    p("Early in the morning, Naivo sweeps the yard and feeds the hens. His big sister Lala does the washing-up: the plates of the whole week! Then she does the laundry near the well, and she hangs the clothes behind the house, where the sun arrives first.", { after: 40 }),
    p("Inside, their mother tidies the bedrooms and makes the beds. “A tidy room, a quiet head,” she always says. Naivo’s little brother dusts the furniture and waters the plants in front of the door. Their father repairs the fence of the garden and irons the Sunday clothes in the evening.", { after: 40 }),
    p("At noon, the house is clean, the yard is beautiful, and the rice is already cooking. The whole family eats together under the mango tree. Tired? Yes. Happy? Look at their smiles!", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 3 — MY HOUSE, MY NEIGHBOURHOOD", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("Welcome to my house!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_house.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the rooms of the house and their furniture;"),
    p("• describe a house: brick, roof, upstairs, tidy, messy, clean, dirty;"),
    p("• place everything with the BIG preposition family: above, below, near, opposite, in front of, in the corner;"),
    p("• talk about the household activities: sweep, wash up, do the laundry, iron;"),
    p("• listen to and read texts about houses and chores;"),
    p("• write a paragraph about the household activities of my community.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, collaboration.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Your house is your first country! In this unit, English enters the living room, the kitchen and even the messy bedroom of your brother. After it, you can describe any house of your neighbourhood — and tell the world who sweeps, who cooks and who irons!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u3_house.png", label: "Welcome to my house! — listen and repeat", url: AUDIO.house },
    ], COLOR),
  ];
}

// ---------- S19 — Rooms and features ----------
function ficheS19() {
  const meta = META("The rooms and the features of the house",
    "By the end of the lesson, learners will be able to name the rooms of a house and describe its features.",
    "1 / 6", "picture of a house (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask permission to come in (two levels)."),
       fp("2. Give one command with a preposition.")],
      [fp("Answer."),
       fp("E.A.: Can I / May I come in? — Put your bag under the desk!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Riddle: I am a room. The rice cooks in me. Who am I? — And me, the whole family sleeps in me. Who am I?")],
      [fp("Guess."),
       fp("E.A.: the kitchen! the bedroom!")],
      "Using games", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The rooms and the features of the house ». By the end of this lesson, you will give a full tour of any house — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the picture of the house. I point to each room: the living room, the kitchen, the bedroom, the bathroom. And the features: the roof, the walls, the windows, the door, the stairs, upstairs, downstairs.")],
      [fp("Look. Repeat."),
       fp("E.A.: this is the kitchen; the roof is red…")],
      "Using audio-visual aids", "Picture of the house"),
    stepRow(["4. Analysis"],
      [fp("Match the action with the room: we cook in the…; we sleep in the…; we wash in the…; we welcome visitors in the… Then describe the local houses: what are the houses of OUR village/city made of? (brick, wood, clay)")],
      [fp("Match. Share."),
       fp("E.A.: kitchen, bedroom, bathroom, living room; our houses are made of brick/clay…")],
      "Contextualisation technique", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: the four big rooms + the features (roof, wall, window, stairs, upstairs, downstairs) + “made of brick/wood”. Your house has a name for every corner now!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("House tour! In pairs: one student draws his house plan (simple boxes), the other visits: “What is this room? — This is the kitchen!”")],
      [fp("Draw. Visit."),
       pAns("E.A.: This is the living room; the bedrooms are upstairs; the roof is made of sheet metal.",
        ["the bedrooms are upstairs"], { size: SZ.FICHE })],
      "Pair work", "Slates"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the four big rooms and give the action of each."),
       fp("2. Describe one feature of YOUR house.")],
      [fp("Answer."),
       pAns("E.A.: kitchen (cook), bedroom (sleep), bathroom (wash), living room (welcome). — My house is made of brick; the roof is red.",
        ["made of brick"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LESSON OF THE DAY — SESSION 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE ROOMS AND THE FEATURES OF THE HOUSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_house.png", 400, 768 / 1376),
    p([run("The rooms:", { bold: true })], { after: 30 }),
    vocab("the living room", "dhe livinng roume", "we welcome the visitors"),
    vocab("the kitchen", "dhe kitcheune", "the rice cooks here!"),
    vocab("the bedroom", "dhe bèdroume", "we sleep"),
    vocab("the bathroom / the toilet", "dhe bathroume / dhe toïlète", "we wash"),
    p([run("The features:", { bold: true })], { after: 30 }),
    vocab("the roof / the walls", "dhe roufe / dhe ouôlz"),
    vocab("the windows / the door", "dhe ouinndôouz / dhe dôr"),
    vocab("the stairs — upstairs / downstairs", "dhe stèrz — eupstèrz / daounstèrz", "en haut / en bas"),
    vocab("made of brick / wood / clay", "méide ove brik / woude / kléi", "en brique / bois / terre"),
    p("", { after: 60 }),
    box("MY HOUSE IN THREE SENTENCES", [
      bullet([run("My house is made of brick, with a red roof.", { bold: true, color: C.BLUE })]),
      bullet([run("There are four rooms: a living room, a kitchen and two bedrooms upstairs.", { bold: true, color: C.BLUE })]),
      bullet([run("It is not big, but it is clean — and it is home!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S20 — Furniture + prepositions expansion ----------
function ficheS20() {
  const meta = META("The furniture and the big preposition family",
    "By the end of the lesson, learners will be able to name furniture and household appliances and place them with the expanded prepositions of place.",
    "2 / 6", "classroom objects, house plan drawing");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the four big rooms."),
       fp("2. What is your house made of?")],
      [fp("Answer."),
       fp("E.A.: living room, kitchen, bedroom, bathroom — brick/wood/clay.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Memory game: I show 6 objects drawn on the board (sofa, bed, table, wardrobe, stove, radio) for 30 seconds, then I erase. Who remembers all six?")],
      [fp("Memorise. Say.")], "Using games", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The furniture and the big preposition family ». By the end of this lesson, every object of the house will have its name AND its place!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The furniture tour: in the living room — a sofa, a low table, a shelf; in the bedroom — a bed, a wardrobe, a mat; in the kitchen — a stove, pots, a sink, a rice basket. Appliances: a radio, a lamp, a (charcoal) stove. Repeat after me!")],
      [fp("Listen. Repeat."),
       fp("E.A.: a sofa, a wardrobe, a stove…")],
      "Repetition drill", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("The preposition family GROWS! Unit 2: on, in, under, next to, between, behind. NEW: above (au-dessus), below (au-dessous), near (près de), opposite (en face de), in front of (devant), in the corner (dans le coin). I place the chalk — you say the new sentence!")],
      [fp("Observe. Say."),
       fp("E.A.: the photos are above the sofa; the toilet is opposite the kitchen; the basket is in the corner.")],
      "Total Physical Response", "Objects"),
    stepRow(["5. Synthesis"],
      [fp("So: the furniture of each room + the TWELVE prepositions of place (the six old friends + the six new ones). The house is fully mapped!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Hide and seek on paper! Each student draws a room and hides a cat in it. The neighbour asks: Is the cat under the bed? Near the window? — until he finds it!")],
      [fp("Draw. Ask. Find."),
       pAns("E.A.: Is the cat behind the wardrobe? — No! — Is it below the window? — Yes!!",
        ["Is it below the window?"], { size: SZ.FICHE })],
      "Pair work", "Slates"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two pieces of furniture for each big room."),
       fp("2. Write three sentences with above, opposite and in the corner.")],
      [fp("Answer."),
       pAns("E.A.: sofa/shelf; bed/wardrobe; stove/sink. — The photos are above the sofa; the well is opposite the house; the broom is in the corner.",
        ["above the sofa"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}
function lessonS20() {
  return [
    p([run("LESSON OF THE DAY — SESSION 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE FURNITURE — THE BIG PREPOSITION FAMILY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The furniture, room by room:", { bold: true })], { after: 30 }),
    vocab("a sofa / a low table / a shelf", "e sôoufa / e lôou téibeul / e chèlf", "living room"),
    vocab("a bed / a wardrobe / a mat", "e bède / e ouôrdrôoube / e mate", "bedroom"),
    vocab("a stove / a pot / a sink", "e stôouve / e pote / e sinnk", "kitchen"),
    vocab("a radio / a lamp", "e réidiôou / e lammpe", "appliances"),
    p([run("The six NEW prepositions:", { bold: true })], { after: 30 }),
    vocab("above", "ebeuve", "the photos are above the sofa"),
    vocab("below", "bilôou", "the bag is below the window"),
    vocab("near", "nir", "the house is near the mango tree"),
    vocab("opposite", "opezite", "the toilet is opposite the kitchen door"),
    vocab("in front of", "inn freunnte ove", "the garden is in front of the house"),
    vocab("in the corner", "inn dhe kôrneur", "the rice basket is in the corner"),
    p("", { after: 60 }),
    box("THE WHOLE PREPOSITION FAMILY (12!)", [
      bullet([run("The six old friends: ", { bold: true }), run("on, in, under, next to, between, behind.", { bold: true, color: C.BLUE })]),
      bullet([run("The six new ones: ", { bold: true }), run("above, below, near, opposite, in front of, in the corner.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S21 — Listening: Welcome to my house ----------
function ficheS21() {
  const meta = META("Listening: Welcome to my house!",
    "By the end of the lesson, learners will be able to find the gist and detailed information in a descriptive oral text about a house and its features.",
    "3 / 6", "audio (QR code) or text read aloud, picture of the house");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three new prepositions with one example."),
       fp("2. Name the furniture of the kitchen.")],
      [fp("Answer."),
       fp("E.A.: above/opposite/near… — a stove, pots, a sink.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Talk first! What do YOU do at home every day? Two household activities each — we write the list on the board.")],
      [fp("Share."),
       fp("E.A.: I sweep, I cook, I fetch water…")],
      "Personalisation technique", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Welcome to my house! ». By the end of this lesson, you will see Soa’s house in your head — room by room, object by object!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. What is the house made of, and where is it? 2. What is above the sofa? 3. Where is the rice basket? 4. Whose room is messy? 5. What is opposite the kitchen door?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. Brick, near the big mango tree. 2. The family photos. 3. In the corner, behind the kitchen door. 4. Her brother’s room. 5. The toilet.",
        ["The family photos."], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis (post-listening)"],
      [fp("Preposition harvest! Listen again and raise your hand at EVERY preposition of place. We collect them on the board: near, on, above, next to, under, in, behind, below, in front of, opposite, in the corner… Almost the whole family in one text!")],
      [fp("Listen. Collect."),
       fp("E.A.: eleven prepositions found!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: a house description = the features (brick, roof) + the rooms in order + the objects WITH their prepositions. The text is a guided tour!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Apply in a new context: describe OUR classroom with five prepositions (the board, the chalk, the bags, the teacher’s desk, the window).")],
      [fp("Describe."),
       pAns("E.A.: The board is behind the teacher; our bags are under the desks; the timetable is above the door…",
        ["above the door"], { size: SZ.FICHE })],
      "Contextualisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Is Soa’s house big? What does she say about it?"),
       fp("2. Write two sentences of the text with a preposition.")],
      [fp("Answer."),
       pAns("E.A.: No — “It is not big, but it is clean, and it is home!” — The pots are under the sink; the photos are above the sofa.",
        ["it is home!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}
function lessonS21() {
  return [
    p([run("LESSON OF THE DAY — SESSION 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WELCOME TO MY HOUSE!", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    houseTextBox(),
    p("", { after: 60 }),
    p([run("The tour plan of a house description:", { bold: true })], { after: 50 }),
    bullet([run("1. Outside: ", { bold: true }), run("made of brick, a red roof, near the mango tree.", { bold: true, color: C.BLUE })]),
    bullet([run("2. Room by room: ", { bold: true }), run("living room → kitchen → bedrooms.", { bold: true, color: C.BLUE })]),
    bullet([run("3. Objects + prepositions: ", { bold: true }), run("the pots are under the sink; the photos are above the sofa.", { bold: true, color: C.BLUE })]),
    bullet([run("4. The heart: ", { bold: true }), run("it is not big, but it is home!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u3_house.png", label: "Welcome to my house! — listen and repeat", url: AUDIO.house }], COLOR),
  ];
}

// ---------- S22 — Household activities + adjectives ----------
function ficheS22() {
  const meta = META("The household activities — tidy or messy?",
    "By the end of the lesson, learners will be able to talk about household activities and describe rooms with the adjectives tidy, messy, clean and dirty.",
    "4 / 6", "activity cards (mime)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is above the sofa in Soa’s house?"),
       fp("2. Describe the classroom with two prepositions.")],
      [fp("Answer."),
       fp("E.A.: the family photos — the board is behind the teacher…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime time! I mime an activity (sweeping? ironing? washing plates?) — you guess in English!")],
      [fp("Guess."),
       fp("E.A.: you are sweeping! you are ironing!")],
      "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The household activities ». By the end of this lesson, you will name every job of the house — and judge every room: tidy or messy?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The activity list with mimes: to sweep the floor, to mop the floor, to do the washing-up, to do the laundry, to hang the clothes, to iron, to make the bed, to tidy the room, to dust the furniture, to take out the rubbish. Mime each one after me!")],
      [fp("Listen. Mime. Repeat.")],
      "Total Physical Response", "Activity cards"),
    stepRow(["4. Analysis"],
      [fp("The four judge-adjectives: tidy (rangé) ↔ messy (en désordre); clean (propre) ↔ dirty (sale). I describe, you judge: “The clothes are on the floor, the books are everywhere.” — messy! “The plates shine.” — clean!")],
      [fp("Judge."),
       fp("E.A.: messy! clean! tidy! dirty!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: ten household activities + the two adjective pairs. And the golden sentence of Naivo’s mother: “A tidy room, a quiet head!”")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Share about YOUR community: which activities do the boys do? the girls? everybody? Is it fair? Two minutes of real talk — in English!")],
      [fp("Share. Discuss."),
       pAns("E.A.: In my family, I sweep the yard, my sister does the washing-up… We can all do everything!",
        ["I sweep the yard"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give five household activities."),
       fp("2. Your room: the clothes are in the wardrobe, the bed is made. Judge it!"),
       fp("3. Give the opposite of clean and of tidy.")],
      [fp("Answer."),
       pAns("E.A.: sweep, mop, iron, do the laundry, make the bed… — tidy! — dirty; messy.",
        ["tidy!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LESSON OF THE DAY — SESSION 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE HOUSEHOLD ACTIVITIES — TIDY OR MESSY?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u3_household.png", 400, 768 / 1376),
    p([run("The household activities:", { bold: true })], { after: 30 }),
    vocab("to sweep / to mop the floor", "tou souipe / tou mope dhe flôr"),
    vocab("to do the washing-up", "tou dou dhe ouochinng-eupe", "the plates!"),
    vocab("to do the laundry", "tou dou dhe lônndri", "the clothes!"),
    vocab("to hang the clothes", "tou hanng dhe klôoudhz"),
    vocab("to iron", "tou aïeurn"),
    vocab("to make the bed / to tidy the room", "tou méik dhe bède / tou taïdi dhe roume"),
    vocab("to dust the furniture", "tou deuste dhe feurnitcheur"),
    vocab("to take out the rubbish", "tou téik aoute dhe reubiche"),
    p([run("The judge-adjectives:", { bold: true })], { after: 30 }),
    vocab("tidy ↔ messy", "taïdi ↔ mèsi", "rangé ↔ en désordre"),
    vocab("clean ↔ dirty", "kline ↔ deurti", "propre ↔ sale"),
    p("", { after: 60 }),
    box("THE GOLDEN SENTENCE", [
      bullet([run("A tidy room, a quiet head!", { bold: true, color: C.BLUE }), run("  —  says Naivo’s mother. Try it tonight!")], { after: 20 }),
    ]),
  ];
}

// ---------- S23 — Reading ----------
function ficheS23() {
  const meta = META("Reading: a busy Saturday at Naivo’s house",
    "By the end of the lesson, learners will be able to read a text about household activities accurately and give its gist and detailed information.",
    "5 / 6", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give five household activities."),
       fp("2. The opposite of messy?")],
      [fp("Answer."),
       fp("E.A.: sweep, iron, mop… — tidy.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title is « A busy Saturday at Naivo’s house ». Predict from the title and the picture: what will the family do? Write one prediction.")],
      [fp("Predict."),
       fp("E.A.: they will clean the house, wash, cook…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « A busy Saturday at Naivo’s house ». By the end of this lesson, you will know who does what in a Malagasy Saturday — and find the hidden details!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read aloud, paragraph by paragraph, paying attention to accuracy. Find the meaning of “the well” and “the fence” from the context. Then answer: 1. Why is Saturday special? 2. Who does the washing-up? 3. Where does Lala hang the clothes, and WHY there? 4. What does the father do?")],
      [fp("Read. Answer."),
       pAns("E.A.: 1. It is the cleaning day. 2. Lala. 3. Behind the house — the sun arrives there first! 4. He repairs the fence and irons.",
        ["the sun arrives there first!"], { size: SZ.FICHE })],
      "Repetition drill", "Reading text"),
    stepRow(["4. Analysis (post-reading)"],
      [fp("Check your predictions: true or false? Then the inference: “Tired? Yes. Happy? Look at their smiles!” — what does the text teach us about working together?")],
      [fp("Check. Infer."),
       fp("E.A.: when everybody helps, the work is fast and the family is happy — collaboration!")],
      "Whole-class work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: a chores text = WHO + ACTIVITY + WHERE/WHEN. And the value inside: nobody watches, everybody helps!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Memory table! Close the book. Complete the table from memory: Naivo → ? / Lala → ? / mother → ? / little brother → ? / father → ?")],
      [fp("Complete."),
       pAns("E.A.: Naivo sweeps and feeds the hens; Lala washes up and does the laundry; the mother tidies and makes the beds; the brother dusts and waters; the father repairs and irons.",
        ["feeds the hens"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the gist of the text in one sentence."),
       fp("2. Quote the mother’s golden sentence."),
       fp("3. What do they do at noon?")],
      [fp("Answer."),
       pAns("E.A.: The whole family cleans the house together on Saturday. — “A tidy room, a quiet head.” — They eat together under the mango tree.",
        ["under the mango tree"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: A BUSY SATURDAY AT NAIVO’S HOUSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("the well", "dhe ouèl", "the water hole of the village"),
    vocab("the fence", "dhe fènnce", "the wall of wood around the garden"),
    vocab("to repair", "tou ripèr", "to make it work again"),
    vocab("busy", "bizi", "full of work!"),
    p("", { after: 60 }),
    box("WHO DOES WHAT? (the memory table)", [
      bullet([run("Naivo: ", { bold: true }), run("sweeps the yard, feeds the hens.", { bold: true, color: C.BLUE })]),
      bullet([run("Lala: ", { bold: true }), run("does the washing-up, does the laundry, hangs the clothes.", { bold: true, color: C.BLUE })]),
      bullet([run("The mother: ", { bold: true }), run("tidies the bedrooms, makes the beds.", { bold: true, color: C.BLUE })]),
      bullet([run("The little brother: ", { bold: true }), run("dusts the furniture, waters the plants.", { bold: true, color: C.BLUE })]),
      bullet([run("The father: ", { bold: true }), run("repairs the fence, irons the Sunday clothes.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S24 — Writing ----------
function ficheS24() {
  const meta = META("Writing: household activities in my community",
    "By the end of the lesson, learners will be able to write a coherent short text describing household activities in a community.",
    "6 / 6", "pictures of household activities in a village");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Who irons in Naivo’s family?"),
       fp("2. Why does Lala hang the clothes behind the house?")],
      [fp("Answer."),
       fp("E.A.: the father — the sun arrives there first.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Brainstorming on the pictures! Look at the pictures of the village chores. In two minutes, we write on the board ALL the words they give us: verbs, objects, places.")],
      [fp("Brainstorm."),
       fp("E.A.: sweep, well, laundry, hens, yard, pound rice…")],
      "Brainstorming", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « Household activities in my community ». By the end of this lesson, your paragraph will be a little photograph of your village or your neighbourhood!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The model plan on the board: Sentence 1 — the day and the place (In my neighbourhood, Saturday is…). Sentences 2-4 — who does what, where (with prepositions!). Sentence 5 — the feeling (tired but happy!).")],
      [fp("Observe."),
       fp("E.A.: like the Naivo text — same skeleton!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write your paragraph (5-6 sentences) with the word bank of the board. Use at least three different activities and two prepositions. I walk around and help.")],
      [fp("Write the paragraph.")],
      "Individual work", "Word bank"),
    stepRow(["5. Synthesis (post-writing)"],
      [fp("Read your production ALOUD to your neighbour — reading aloud catches the missing words! Then two or three students read for the class.")],
      [fp("Read aloud.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("The class votes: which paragraph shows our community best? We copy its best sentence on the board — the sentence of the week!")],
      [fp("Vote. Copy."),
       pAns("E.A.: In my neighbourhood, everybody sweeps in front of the door early in the morning.",
        ["in front of the door"], { size: SZ.FICHE })],
      "Whole-class work", "Blackboard"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected paragraph in your copy-book."),
       fp("2. Underline the activities in blue and the prepositions in red.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY COMMUNITY AT WORK", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PLAN OF THE PARAGRAPH", [
      bullet([run("1. The opening: ", { bold: true }), run("In my neighbourhood / In my village, Saturday is the cleaning day.", { bold: true, color: C.BLUE })]),
      bullet([run("2-4. Who does what, where: ", { bold: true }), run("The children sweep in front of the doors; the mothers do the laundry near the well…", { bold: true, color: C.BLUE })]),
      bullet([run("5. The feeling: ", { bold: true }), run("At noon, everybody is tired — but the smiles are clean too!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    p("In my neighbourhood, Saturday morning is the big cleaning time. The children sweep the yards and take out the rubbish. The mothers do the laundry near the well and hang the clothes in the sun. My neighbour Rakoto repairs his fence, and his radio sings for the whole street! At noon, the houses are clean and tidy, and everybody rests. Tired, yes — but proud of our street!", { after: 80 }),
    box("CHECK-LIST BEFORE COPYING", [
      bullet([run("Three activities? ✓  Two prepositions? ✓  Capital letters and full stops? ✓", { bold: true, color: C.BLUE })]),
      bullet([run("Read it aloud one last time — your ears are your best teacher!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 3", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The rooms and the features"),
    bullet([run("the living room, the kitchen, the bedroom, the bathroom;", { bold: true, color: C.BLUE }), run("  the roof, the walls, the stairs, upstairs/downstairs; made of brick/wood/clay.")], { after: 100 }),
    sub("2. The furniture and the appliances"),
    bullet([run("a sofa, a low table, a shelf; a bed, a wardrobe; a stove, a pot, a sink; a radio, a lamp.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The big preposition family (12)"),
    bullet([run("on, in, under, next to, between, behind + above, below, near, opposite, in front of, in the corner.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The household activities"),
    bullet([run("sweep, mop, do the washing-up, do the laundry, hang the clothes, iron, make the bed, tidy, dust, take out the rubbish.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The judge-adjectives"),
    bullet([run("tidy ↔ messy; clean ↔ dirty.", { bold: true, color: C.BLUE }), run("  A tidy room, a quiet head!")], { after: 100 }),
    sub("6. The description tour"),
    bullet([run("Outside → room by room → objects with prepositions → the heart: it is home!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 3 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("In which room? 1. We cook the rice. 2. We welcome the visitors. 3. We sleep. 4. We wash.")]),
    pAns("Answers: 1. in the kitchen. 2. in the living room. 3. in the bedroom. 4. in the bathroom.", ["in the kitchen"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete with above / below / near / opposite / in the corner: 1. The photos are … the sofa. 2. The school is … the church (en face). 3. The broom is … (dans le coin). 4. The house is … the mango tree (près).")]),
    pAns("Answers: 1. above. 2. opposite. 3. in the corner. 4. near.", ["opposite"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Match the activity: 1. the plates 2. the clothes (laver) 3. the bed 4. the rubbish — (a. make b. do the washing-up c. take out d. do the laundry)")]),
    pAns("Answers: 1-b, 2-d, 3-a, 4-c.", ["1-b, 2-d, 3-a, 4-c"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("tidy, messy, clean or dirty? 1. The clothes are everywhere on the floor. 2. The plates shine. 3. The books are well ranged. 4. The yard is full of old papers.")]),
    pAns("Answers: 1. messy. 2. clean. 3. tidy. 4. dirty.", ["messy"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the reading text: 1. Who feeds the hens? 2. Where does the family eat at noon? 3. Quote the golden sentence of the mother.")]),
    pAns("Answers: 1. Naivo. 2. Under the mango tree. 3. “A tidy room, a quiet head.”", ["Under the mango tree."]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s25", "SESSION 25 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: MY HOUSE, MY NEIGHBOURHOOD", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the four big rooms and one piece of furniture for each."),
    pAns("E.A.: living room (sofa), kitchen (stove), bedroom (wardrobe), bathroom (sink).", ["living room (sofa)"]),
    p("2. Give three features of a house and the three materials."),
    pAns("E.A.: the roof, the walls, the stairs — brick, wood, clay.", ["brick, wood, clay"]),
    p("3. Recite the twelve prepositions of place."),
    pAns("E.A.: on, in, under, next to, between, behind, above, below, near, opposite, in front of, in the corner.", ["above, below, near"]),
    p("4. In Soa’s house: where are the pots? the rice basket? the family photos?"),
    pAns("E.A.: under the sink; in the corner behind the door; above the sofa.", ["above the sofa"]),
    p("5. Give six household activities."),
    pAns("E.A.: sweep, mop, do the washing-up, do the laundry, iron, make the bed…", ["do the laundry"]),
    p("6. The two adjective pairs — and judge your own bedroom honestly!"),
    pAns("E.A.: tidy↔messy, clean↔dirty — my room is… tidy, of course!", ["tidy↔messy"]),
    p("7. In the reading text: who does what? (three answers)"),
    pAns("E.A.: Naivo sweeps, Lala does the laundry, the father irons…", ["Lala does the laundry"]),
    p("8. Why does Lala hang the clothes behind the house?"),
    pAns("E.A.: because the sun arrives there first.", ["the sun arrives there first"]),
    p("9. Describe our classroom with three prepositions."),
    pAns("E.A.: the board is behind the teacher; the bags are under the desks; the door is next to the window.", ["under the desks"]),
    p("10. Say the golden sentence — and the last sentence of Soa’s text."),
    pAns("E.A.: “A tidy room, a quiet head!” — “It is not big, but it is clean, and it is home!”", ["it is home!"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s26", "SESSION 26 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 3: MY HOUSE, MY NEIGHBOURHOOD", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Name: 1. the room where the rice cooks 2. the room of the visitors 3. two pieces of furniture of the bedroom.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. The photos are … the sofa (au-dessus). 2. The toilet is … the kitchen door (en face). 3. The basket is … (dans le coin). 4. The garden is … the house (devant).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete the activity: 1. to … the washing-up 2. to … the laundry 3. to … the bed 4. to … out the rubbish.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("tidy, messy, clean or dirty? 1. The plates shine. 2. The clothes are on the floor. 3. The yard is full of papers. 4. The books are well ranged.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (5 sentences): the household activities in your community on Saturday morning — with three activities and two prepositions.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: the kitchen / the living room / a bed, a wardrobe (a mat). (1+1+2 pts)", ["the kitchen"]),
    pAns("Ex.2: above — opposite — in the corner — in front of. (1 pt each)", ["in front of"]),
    pAns("Ex.3: do — do — make — take. (1 pt each)", ["make"]),
    pAns("Ex.4: clean — messy — dirty — tidy. (1 pt each)", ["clean — messy — dirty — tidy"]),
    pAns("Ex.5 (model): In my neighbourhood, Saturday is the cleaning day. The children sweep in front of the doors. The mothers do the laundry near the well. My brother takes out the rubbish. At noon, everything is clean and everybody smiles! (4 pts: 3 activities 2, 2 prepositions 1, coherence 1)", ["near the well"]),
  ];
}

module.exports = function unit3() {
  return [
    ...opening(), pageBreak(),
    ...ficheS19(), pageBreak(), ...lessonS19(), pageBreak(),
    ...ficheS20(), pageBreak(), ...lessonS20(), pageBreak(),
    ...ficheS21(), pageBreak(), ...lessonS21(), pageBreak(),
    ...ficheS22(), pageBreak(), ...lessonS22(), pageBreak(),
    ...ficheS23(), pageBreak(), ...lessonS23(), pageBreak(),
    ...ficheS24(), pageBreak(), ...lessonS24(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 3", COLOR, [
      "I can name the rooms of the house and their furniture.",
      "I can describe a house: made of brick, a red roof, two bedrooms upstairs.",
      "I can use the twelve prepositions of place.",
      "I can name ten household activities.",
      "I can judge a room: tidy, messy, clean or dirty.",
      "I can understand a house tour and a chores text.",
      "I can describe my classroom and my house with prepositions.",
      "I can write a paragraph about the chores of my community.",
    ], "NEXT STOP → UNIT 4: HEALTH!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
