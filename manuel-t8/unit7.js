// T8 — UNIT 7 — MY CITY, MY COUNTRY (10 séances + révision + test) — Sessions 70 à 81 / 81
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange
const SHADE = "FAE5D3";
const TOTAL = 81;
const AUDIO = {
  city: "https://drive.google.com/uc?export=download&id=1FTl7mLi_0HOEZKXdZuBJQ86eeQUFXZIA",
  directions: "https://drive.google.com/uc?export=download&id=1fBB7BPOsu2fFrIZj26bUjmpxRBVhLSSu",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 7 — MY CITY, MY COUNTRY", title, slo,
  values: "respect of life, self-confidence", session, materials,
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
function cityPassageBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("MY CITY AND MY VILLAGE (listening passage)", [
    L("Hello! I am Soa. I live in Antsirabe, a city where the air is cool. In my city, there are many buildings: a big market, a hospital, a post office, a train station and a beautiful park. My school is next to the church, between the library and the town hall."),
    L("But in July, I visit my grandparents in the country. Their village is a quiet place where everybody says hello. There are rice fields, a small school, a well and a little wooden church."),
    L("The city is busy and noisy, but the country is calm and green. I love both!", true),
  ]);
}
function directionsDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("ASKING THE WAY (listening passage)", [
    L("Tourist", "Excuse me! How can I get to the post office, please?"),
    L("Koto", "The post office? It’s easy! Go straight on to the corner."),
    L("Tourist", "Go straight on. OK…"),
    L("Koto", "At the corner, turn left. Then walk to the roundabout."),
    L("Tourist", "Turn left… then the roundabout…"),
    L("Koto", "At the roundabout, turn right. The post office is opposite the bank, next to the market."),
    L("Tourist", "Go straight, left, roundabout, right — opposite the bank. Thank you very much, young man!"),
    L("Koto", "You’re welcome! Have a nice day!"),
  ]);
}
function cityCountryTextBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("CITY AND COUNTRY (reading text)", [
    L("Rivo lives in Antananarivo, the capital city of Madagascar. His street is busy and noisy: cars, buses, shops and tall buildings everywhere. In the city, there is a place where people buy everything: the big market."),
    L("His cousin Fely lives in the country, in a village where life is calm. Her house is near the rice fields. There is no supermarket there, but there is a well, a small school and a church."),
    L("In England, many people live in cities too, and the villages have old stone houses and green gardens. In Madagascar, the villages have warm red-earth houses — and zebus on the road!"),
    L("City or country? Busy or calm? Both are home, and both are beautiful.", true),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 7 — MY CITY, MY COUNTRY", COLOR, "unit7"),
    p("", { after: 100 }),
    p([run("A place where everybody says hello!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u7_city.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the buildings of the city and of the country;"),
    p("• locate them with the prepositions of place: next to, between, opposite…;"),
    p("• use the relative clause with where: a library is a place where we read;"),
    p("• ask and give directions: turn left, turn right, go straight on!;"),
    p("• play the map game — from one place to another;"),
    p("• compare the city and the country, here and in Anglophone countries;"),
    p("• read a text about city and country life;"),
    p("• write a paragraph comparing the two — and dream of my next visit!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect of life, self-confidence.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 6)", [
      p("In Unit 6, the news travelled by radio, phone and letters."),
      p("In Unit 7 — the LAST unit! — English walks with you: in your city, in your village, everywhere in your beautiful country!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u7_city.png", label: "My city and my village", url: AUDIO.city }], COLOR),
  ];
}

// ---------- S67 — Buildings ----------
function ficheS67() {
  const meta = META("The buildings of the city and of the country",
    "By the end of the lesson, learners will be able to name buildings in the city and in the country.",
    "1 / 10", "pictures of city/country");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 6.) Answer these questions:"),
       fp("1. Ask the news in two ways."),
       fp("2. Turn into the passive: They opened a library.")],
      [fp("Answer."),
       fp("E.A.: What’s new? What’s up?; A library was opened.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: name the buildings from the pictures of the city and of the country — then repeat the names after me!")],
      [fp("Name the buildings. Repeat."),
       fp("E.A.: a market, a church, a school…")],
      "Using visual aids / Repetition drill", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The buildings of the city and of the country ». By the end of this lesson, your town will speak English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two families: in the CITY: the town hall, the post office, the bank, the hospital, the train station, the library, the park… In the COUNTRY: the village, the rice fields, the well, the wooden church, the small school.")],
      [fp("Observe. Classify city / country.")],
      "Using visual aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Guessing game: guess the building from its description! “It is a place where we send letters…” — “It is a place where sick people go…”")],
      [fp("Guess the buildings."),
       fp("E.A.: the post office! the hospital!")],
      "Guessing game", "----"),
    stepRow(["5. Synthesis"],
      [fp("City buildings, country places — and the environment adjectives: busy, noisy, modern / quiet, calm, green. Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Group competition: team City against team Country — name a building each in turn; the last team with an answer wins!")],
      [fp("Compete in naming buildings."),
       pAns("E.A.: the bank! — the well! — the train station! — the rice fields!",
        ["the well"], { size: SZ.FICHE })],
      "Group competition", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four city buildings and three country places."),
       fp("2. Give two city adjectives and two country adjectives.")],
      [fp("Answer."),
       pAns("E.A.: the town hall, the bank, the hospital, the post office; the well, the rice fields, the village; busy, noisy / calm, green.",
        ["the town hall"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70");
}
function lessonS67() {
  return [
    p([run("LESSON OF THE DAY — SESSION 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE BUILDINGS OF THE CITY AND OF THE COUNTRY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u7_city.png", 420, 768 / 1376),
    box("IN THE CITY", [
      vocab("the town hall", "dhe taoune hôl"),
      vocab("the post office / the bank", "dhe pôouste ofiss / dhe bannk"),
      vocab("the hospital / the police station", "dhe hospiteul / dhe peuliss stéicheune"),
      vocab("the train station / the library", "dhe tréine stéicheune / dhe laïbreri"),
      vocab("the market / the park / the church", "dhe mârkite / dhe pârk / dhe tcheurtch"),
    ]),
    p("", { after: 60 }),
    box("IN THE COUNTRY", [
      vocab("the village", "dhe viladj"),
      vocab("the rice fields", "dhe raïss fildz"),
      vocab("the well", "dhe ouèl", "for the water!"),
      vocab("the wooden church / the small school", "dhe voudeune tcheurtch / dhe smôl skoule"),
    ]),
    p("", { after: 60 }),
    box("THE ENVIRONMENT ADJECTIVES", [
      bullet([run("The city is: ", { bold: true }), run("busy, noisy, modern, crowded", { bold: true, color: C.BLUE })]),
      bullet([run("The country is: ", { bold: true }), run("quiet, calm, green, peaceful", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
  ];
}

// ---------- S68 — Listening: city passage ----------
function ficheS68() {
  const meta = META("Listening: my city and my village",
    "By the end of the lesson, learners will be able to comprehend an oral passage describing a city and a country and describe their own.",
    "2 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three city buildings."),
       fp("2. The country is… (two adjectives)!")],
      [fp("Answer."),
       fp("E.A.: the bank, the market, the town hall; calm and green.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: Soa lives in Antsirabe AND visits a village. Guess: what is in her city? what is in the village?")],
      [fp("Predict.")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Soa describing her two worlds — the city and the country.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: 1. Which city does Soa live in? 2. Name three buildings of her city. 3. What is in the village? 4. Which does she prefer?")],
      [fp("Listen. Answer."),
       fp("E.A.: Antsirabe; the market, the hospital, the post office…; rice fields, a well…; both!")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Listen again: where exactly is her school? “NEXT TO the church, BETWEEN the library and the town hall.” And these magic sentences: “a city WHERE the air is cool”, “a place WHERE everybody says hello” — treasures for the next lessons!")],
      [fp("Spot the prepositions and the where-sentences."),
       fp("E.A.: next to, between; where.")],
      "Eliciting technique", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("A good description = the place + its buildings + its adjectives. Listen and repeat the passage!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Describe YOUR city or village to your pair: three buildings, two adjectives minimum — then tell the class!")],
      [fp("Describe their city/village."),
       pAns("E.A.: My village is quiet and green. There is a well, a school and a church.",
        ["My village"], { size: SZ.FICHE })],
      "Pair work / Contextualisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where is Soa’s school exactly?"),
       fp("2. Describe your place in two sentences.")],
      [fp("Answer."),
       pAns("E.A.: next to the church, between the library and the town hall; My town is busy. There is a big market.",
        ["next to the church"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(71, TOTAL, meta, rows, "s71");
}
function lessonS68() {
  return [
    p([run("LESSON OF THE DAY — SESSION 71", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY CITY AND MY VILLAGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    cityPassageBox(),
    p("", { after: 60 }),
    box("THE DESCRIPTION RECIPE", [
      bullet([run("1. The place: ", { bold: true }), run("I live in Antsirabe, a city where the air is cool.", { italic: true })]),
      bullet([run("2. The buildings: ", { bold: true }), run("There are many buildings: a big market, a hospital…", { italic: true })]),
      bullet([run("3. The adjectives: ", { bold: true }), run("busy and noisy / calm and green.", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TREASURES FOR THE NEXT LESSONS", [
      bullet([run("next to the church, between the library and the town hall", { bold: true, color: C.BLUE }), run("  → prepositions of place (Session 69!)")]),
      bullet([run("a place where everybody says hello", { bold: true, color: C.BLUE }), run("  → the relative where (Session 70!)")], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u7_city.png", label: "My city and my village — listen again", url: AUDIO.city }], COLOR),
  ];
}

// ---------- S69 — Prepositions of place ----------
function ficheS69() {
  const meta = META("The prepositions of place — locating the buildings",
    "By the end of the lesson, learners will be able to locate buildings with the prepositions of place.",
    "3 / 10", "map or pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Describe your village/city in two sentences."),
       fp("2. Where is Soa’s school?")],
      [fp("Answer."),
       fp("E.A.: (description); next to the church.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Objects game: I put the chalk ON the book, UNDER the desk, NEXT TO the bag… Where is the chalk? Watch and say!")],
      [fp("Watch. Say the position."),
       fp("E.A.: under the desk!")],
      "Using realia", "Chalk, book, bag"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the prepositions of place. By the end of this lesson, nothing will be lost in your town!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the map: the post office is NEXT TO the market; the school is BETWEEN the library and the town hall; the bank is OPPOSITE the post office; the park is BEHIND the church; the bus stop is IN FRONT OF the station; the well is NEAR the school.")],
      [fp("Observe the positions on the map.")],
      "Using visual aids", "Map"),
    stepRow(["4. Analysis"],
      [fp("Quiz on the map: Where is the bank? Where is the park? — answer with a full sentence and the right preposition!")],
      [fp("Answer with prepositions."),
       fp("E.A.: The bank is opposite the post office.")],
      "Question-answer", "Map"),
    stepRow(["5. Synthesis"],
      [fp("The six champions: next to, between, opposite, in front of, behind, near. Listen and repeat with gestures!")],
      [fp("Listen. Repeat with gestures. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Use them in a new context: place YOUR classroom objects and describe: “My slate is between my books, next to my pen…” Then describe two buildings of YOUR village!")],
      [fp("Describe with prepositions."),
       pAns("E.A.: The church is opposite the market, near the river.",
        ["opposite"], { size: SZ.FICHE })],
      "Contextualisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the six prepositions of place."),
       fp("2. Locate the school of the map in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: next to, between, opposite, in front of, behind, near; The school is between the library and the town hall.",
        ["between"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(72, TOTAL, meta, rows, "s72");
}
function lessonS69() {
  return [
    p([run("LESSON OF THE DAY — SESSION 72", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PREPOSITIONS OF PLACE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE SIX CHAMPIONS", [
      vocab("next to", "nèkste tou", "just beside"),
      vocab("between", "bitouine", "in the middle of two"),
      vocab("opposite", "opeuzite", "face to face"),
      vocab("in front of", "inne freunnte ov", "before it"),
      vocab("behind", "bihaïnnde", "at its back"),
      vocab("near", "nir", "not far"),
    ]),
    p("", { after: 60 }),
    box("ON THE MAP", [
      bullet([run("The post office is next to the market.", { bold: true, color: C.BLUE })]),
      bullet([run("The school is between the library and the town hall.", { bold: true, color: C.BLUE })]),
      bullet([run("The bank is opposite the post office.", { bold: true, color: C.BLUE })]),
      bullet([run("The park is behind the church, and the bus stop is in front of the station.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MEMORY TRICK", [
      p("Play the positions with your hands: two fists = two buildings, and your finger travels: next to… between… opposite! The body remembers better than the eyes!", { after: 40 }),
    ]),
  ];
}

// ---------- S70 — Relative where ----------
function ficheS70() {
  const meta = META("The relative clause with where",
    "By the end of the lesson, learners will be able to define places with the relative clause with where.",
    "4 / 10", "building cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the six prepositions of place."),
       fp("2. Where is the bank on our map?")],
      [fp("Answer."),
       fp("E.A.: next to, between, opposite, in front of, behind, near; opposite the post office.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Riddle time! “It is a place WHERE we borrow books…” — “a place WHERE we buy bread…” Which places?")],
      [fp("Guess."),
       fp("E.A.: the library! the bakery!")],
      "Guessing game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the little word that glues a place to its story: WHERE. By the end of this lesson, you will define every building!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the sentences of Soa’s passage: “Antsirabe, a city WHERE the air is cool.” — “a quiet place WHERE everybody says hello.” Two sentences in one!")],
      [fp("Observe the where-sentences.")],
      "Using visual aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: place + WHERE + subject + verb: A hospital is a place where sick people are cured. What does where replace?")],
      [fp("Find the rule."),
       fp("E.A.: where = in this place; it joins two sentences.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: … a place WHERE we + verb! A library is a place where we read. A market is a place where we buy and sell. Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Definition match: pick a building card and define it with where — the class guesses! “It is a place where we learn English!” — “The school!”")],
      [fp("Define with where. Guess."),
       pAns("E.A.: A post office is a place where we send letters.",
        ["where we send letters"], { size: SZ.FICHE })],
      "Guessing game", "Building cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Define with where: the market, the hospital."),
       fp("2. Join: Antsirabe is a city. The air is cool there.")],
      [fp("Answer."),
       pAns("E.A.: The market is a place where we buy and sell. The hospital is a place where sick people are cured; Antsirabe is a city where the air is cool.",
        ["where"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(73, TOTAL, meta, rows, "s73");
}
function lessonS70() {
  return [
    p([run("LESSON OF THE DAY — SESSION 73", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE RELATIVE CLAUSE WITH WHERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RULE: PLACE + WHERE + SUBJECT + VERB", [
      bullet([run("A library is a place where we read books.", { bold: true, color: C.BLUE })]),
      bullet([run("A market is a place where we buy and sell.", { bold: true, color: C.BLUE })]),
      bullet([run("Antsirabe is a city where the air is cool.", { bold: true, color: C.BLUE })]),
      bullet([run("The village is a place where everybody says hello!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TWO SENTENCES → ONE", [
      bullet([run("Fely lives in a village. Life is calm there. ", { italic: true }), run("→", { bold: true }), run("  Fely lives in a village where life is calm.", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RIDDLES TO PLAY (answers upside down in your head!)", [
      bullet([run("A place where we send letters? ", { italic: true }), run("— the post office!", { bold: true })]),
      bullet([run("A place where we fetch water in the village? ", { italic: true }), run("— the well!", { bold: true })]),
      bullet([run("A place where the trains stop? ", { italic: true }), run("— the train station!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S71 — Directions 1 ----------
function ficheS71() {
  const meta = META("Asking and giving directions",
    "By the end of the lesson, learners will be able to comprehend a dialogue about directions and use the direction expressions.",
    "5 / 10", "signs, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Define with where: the school."),
       fp("2. The six prepositions of place?")],
      [fp("Answer."),
       fp("E.A.: a place where we learn; next to, between, opposite, in front of, behind, near.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: listen and identify the correct signs: (arrow left!) (arrow right!) (straight!) — point to the right sign!")],
      [fp("Listen and identify the signs."),
       fp("E.A.: correct signs pointed.")],
      "Listen and do", "Signs"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn to ask and give directions. By the end of this lesson, no tourist will be lost in your town!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue and CHECK the options: 1. The tourist looks for: ☐ the bank ☐ the post office. 2. At the corner: ☐ turn left ☐ turn right. 3. The post office is: ☐ opposite the bank ☐ behind the park.")],
      [fp("Listen. Check the options."),
       fp("E.A.: the post office; turn left; opposite the bank.")],
      "Audio / Check options", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Collect the direction treasure: Excuse me! How can I get to…? Go straight on. At the corner, turn left/right. At the roundabout… It is opposite / next to…")],
      [fp("Collect the expressions."),
       fp("E.A.: the direction expressions listed.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("The direction machine: question (How can I get to…?) + the path (go straight on, turn left, turn right, the corner, the roundabout) + the arrival (it is opposite…). Listen and repeat with arm gestures!")],
      [fp("Listen. Repeat with gestures. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Act the dialogue in pairs — tourist and helper — with big clear gestures!")],
      [fp("Act the dialogue."),
       pAns("E.A.: lively dialogue with gestures: go straight, turn left, turn right!",
        ["turn left"], { size: SZ.FICHE })],
      "Role-play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask the way to the market."),
       fp("2. Give three direction orders.")],
      [fp("Answer."),
       pAns("E.A.: Excuse me, how can I get to the market, please?; Go straight on! Turn left at the corner! Turn right at the roundabout!",
        ["Go straight on!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(74, TOTAL, meta, rows, "s74");
}
function lessonS71() {
  return [
    p([run("LESSON OF THE DAY — SESSION 74", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING AND GIVING DIRECTIONS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    directionsDialogueBox(),
    p("", { after: 60 }),
    box("THE DIRECTION WORDS", [
      vocab("Turn left / turn right", "teurn lèft / teurn raïte"),
      vocab("Go straight on", "gôou stréite onne"),
      vocab("the corner", "dhe kôrneur"),
      vocab("the roundabout", "dhe raounndebaoute", "the circle of the streets!"),
    ]),
    p("", { after: 60 }),
    box("THE DIRECTION MACHINE", [
      bullet([run("1. The question: ", { bold: true }), run("Excuse me! How can I get to the post office, please?", { bold: true, color: C.BLUE })]),
      bullet([run("2. The path: ", { bold: true }), run("Go straight on. At the corner, turn left. At the roundabout, turn right.", { bold: true, color: C.BLUE })]),
      bullet([run("3. The arrival: ", { bold: true }), run("It is opposite the bank, next to the market!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u7_directions.png", label: "Asking the way — listen again", url: AUDIO.directions }], COLOR),
  ];
}

// ---------- S72 — Directions 2: map game ----------
function ficheS72() {
  const meta = META("The map game — building direction dialogues",
    "By the end of the lesson, learners will be able to follow directions on a map and build and role play a direction dialogue.",
    "6 / 10", "maps, a dice");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask the way to the hospital."),
       fp("2. Mime: turn left! go straight on!")],
      [fp("Answer. Mime."),
       fp("E.A.: How can I get to the hospital, please?; (gestures!)")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Here is the map of our English town! Find: the roundabout, the post office, the park…")],
      [fp("Explore the map.")],
      "Using visual aids", "Maps"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to PLAY with the map: your dice will walk the streets following English directions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Watch the demonstration: I move the dice on the map following my own instructions: “Start at the school. Go straight on. Turn right at the corner…” Where did my dice arrive?")],
      [fp("Watch. Say the arrival."),
       fp("E.A.: at the market!")],
      "Using visual aids", "Map, dice"),
    stepRow(["4. Analysis"],
      [fp("Your turn: move the dice on the map from one place to another following MY instructions. Ready? Start at the church…!")],
      [fp("Move the dice following the instructions."),
       fp("E.A.: correct arrivals!")],
      "Listen and do", "Maps, dice"),
    stepRow(["5. Synthesis"],
      [fp("Now build a dialogue based on the activity: one asks the way, the other gives the path you just travelled — write it in pairs!")],
      [fp("Build the dialogue."),
       fp("E.A.: complete direction dialogue.")],
      "Pair work", "Maps"),
    stepRow(["6. Practice"],
      [fp("Role play your dialogue asking and giving directions — the class follows on the map and checks the arrival! Group competition: the clearest guides win!")],
      [fp("Role play. The class checks."),
       pAns("E.A.: clear dialogue, correct path, right arrival!",
        ["right arrival"], { size: SZ.FICHE })],
      "Role-play / Group competition", "Maps"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Guide me from the school to the post office of the map."),
       fp("2. What do you say when the tourist thanks you?")],
      [fp("Answer."),
       pAns("E.A.: Go straight on, turn left at the corner, it is opposite the bank; You’re welcome! Have a nice day!",
        ["You’re welcome!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(75, TOTAL, meta, rows, "s75");
}
function lessonS72() {
  return [
    p([run("LESSON OF THE DAY — SESSION 75", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MAP GAME", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u7_map.png", 420, 768 / 1408),
    box("HOW TO PLAY", [
      bullet([run("1. Put your dice on the START building.", { bold: true })]),
      bullet([run("2. Listen to the guide: ", { bold: true }), run("go straight on… turn left… turn right at the roundabout…", { italic: true })]),
      bullet([run("3. Move the dice street by street.", { bold: true })]),
      bullet([run("4. Announce the arrival: ", { bold: true }), run("I am at the post office!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY DIALOGUE SKELETON", [
      bullet([run("— Excuse me! How can I get to …, please?", { italic: true })]),
      bullet([run("— Go straight on to … At the …, turn … Then …", { italic: true })]),
      bullet([run("— It is … the … Thank you very much! — You’re welcome!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("Guiding someone is a superpower: your words move people in the real world. Speak clearly, smile — and your English opens every street!", { after: 40 }),
    ]),
  ];
}

// ---------- S73 — City vs country, cultures ----------
function ficheS73() {
  const meta = META("City and country — here and in Anglophone countries",
    "By the end of the lesson, learners will be able to describe differences between city and country in Anglophone countries and in Madagascar.",
    "7 / 10", "pictures of Anglophone and Malagasy places");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Guide me: school → market (our map)."),
       fp("2. Define with where: the roundabout!")],
      [fp("Answer."),
       fp("E.A.: go straight…; a place where the streets turn in a circle!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Two pictures: a street in London… a street in Antananarivo! What is the same? What is different?")],
      [fp("Compare the pictures."),
       fp("E.A.: buses here and there; red buses there, taxi-be here!")],
      "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to travel: city and country, in Madagascar and in the Anglophone countries!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pictures reflecting Anglophone and Malagasy culture: English villages (stone houses, gardens), Malagasy villages (red-earth houses, rice fields, zebus); big cities here and there.")],
      [fp("Observe. Note the differences.")],
      "Using visual aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Compare with the tools of Unit 4: The city is noisier THAN the country. London is bigger THAN Antananarivo? The village is the calmest place! And with where: England is a country where it often rains!")],
      [fp("Compare with comparatives and where."),
       fp("E.A.: The country is greener than the city…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("Same planet, different colours: ways of living change, respect stays! Summary table: city/country, here/there.")],
      [fp("Listen. Copy the table.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Talk in groups: which place do you prefer — city or country? here or far away? Why? Use one comparative and one where-sentence!")],
      [fp("Discuss with the structures."),
       pAns("E.A.: I prefer the country, because it is calmer than the city. I dream of a city where the buses are red!",
        ["calmer than"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two differences between an English village and a Malagasy village."),
       fp("2. Compare city and country in one sentence.")],
      [fp("Answer."),
       pAns("E.A.: stone houses / red-earth houses; gardens / rice fields; The city is busier than the country.",
        ["busier than"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(76, TOTAL, meta, rows, "s76");
}
function lessonS73() {
  return [
    p([run("LESSON OF THE DAY — SESSION 76", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CITY AND COUNTRY, HERE AND THERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("IN MADAGASCAR", [
      bullet([run("The village: ", { bold: true }), run("red-earth houses, rice fields, a well, zebus on the road!", { bold: true, color: C.BLUE })]),
      bullet([run("The city: ", { bold: true }), run("taxi-be, big markets, busy streets.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("IN ANGLOPHONE COUNTRIES", [
      bullet([run("The village: ", { bold: true }), run("old stone houses, green gardens, cool rain.", { bold: true, color: C.GREEN })]),
      bullet([run("The city: ", { bold: true }), run("red buses in London, yellow taxis in New York, very tall buildings!", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE COMPARING TOOLS (all our English!)", [
      bullet([run("Comparatives: ", { bold: true }), run("The city is noisier than the country. The village is the calmest place!", { italic: true })]),
      bullet([run("The relative where: ", { bold: true }), run("England is a country where it often rains. Madagascar is an island where the sun smiles!", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S74 — Reading ----------
function ficheS74() {
  const meta = META("Reading: city and country",
    "By the end of the lesson, learners will be able to infer information from a text about country and city.",
    "8 / 10", "crossword, the text");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Pre-reading: complete the crossword « a place where we… » with names of buildings!")],
      [fp("Complete the crossword."),
       fp("E.A.: library, market, hospital, post office…")],
      "Jigsaw / Crossword", "Crossword"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Express yourselves in pairs: which cities did you visit? Did you like them or not? Why?")],
      [fp("Talk about visited cities."),
       fp("E.A.: I visited Toliara, I liked the sea!")],
      "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « City and country » — two cousins, two worlds, one beautiful island!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read the text fluently and say what it is about (skim!). Then scan for details: 1. Where does Rivo live? 2. What is near Fely’s house? 3. What do English villages have?")],
      [fp("Skim. Scan. Answer."),
       fp("E.A.: about city and country life; in Antananarivo; the rice fields; old stone houses and green gardens.")],
      "Skimming / Scanning", "The text"),
    stepRow(["4. Analysis"],
      [fp("Find in the text: one where-sentence, one comparison city/country, one Anglophone detail, one Malagasy detail!")],
      [fp("Find the structures."),
       fp("E.A.: a place where people buy everything; busy ≠ calm; stone houses; zebus!")],
      "Scanning", "The text"),
    stepRow(["5. Synthesis"],
      [fp("Post-reading: talk about the differences between Anglophone and Malagasy ways of living and culture — with respect: different does not mean better!")],
      [fp("Talk about the differences.")],
      "Group work", "----"),
    stepRow(["6. Practice"],
      [fp("Tell or write the city or country you want to visit and why: “I want to visit…, a city where…!”")],
      [fp("Tell/write their dream place."),
       pAns("E.A.: I want to visit London, a city where the buses are red — and Toliara, a city where the sea sings!",
        ["I want to visit"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the text about?"),
       fp("2. True or false: Fely lives in the capital city.")],
      [fp("Answer."),
       pAns("E.A.: the differences between city and country life; false — she lives in a village!",
        ["false"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(77, TOTAL, meta, rows, "s77");
}
function lessonS74() {
  return [
    p([run("LESSON OF THE DAY — SESSION 77", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: CITY AND COUNTRY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    cityCountryTextBox(),
    p("", { after: 60 }),
    box("THE CROSSWORD « A PLACE WHERE WE… »", [
      bullet([run("…read books → ", { italic: true }), run("the LIBRARY", { bold: true, color: C.BLUE })]),
      bullet([run("…buy and sell → ", { italic: true }), run("the MARKET", { bold: true, color: C.BLUE })]),
      bullet([run("…cure sick people → ", { italic: true }), run("the HOSPITAL", { bold: true, color: C.BLUE })]),
      bullet([run("…send letters → ", { italic: true }), run("the POST OFFICE", { bold: true, color: C.BLUE })]),
      bullet([run("…learn English → ", { italic: true }), run("the SCHOOL!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("READER’S TOOLS", [
      bullet([run("SKIM ", { bold: true }), run("= read fast for the general idea: what is the text about?")]),
      bullet([run("SCAN ", { bold: true }), run("= hunt for one detail: where? who? what?")], { after: 20 }),
    ]),
  ];
}

// ---------- S75 — Writing 1: the drawing ----------
function ficheS75() {
  const meta = META("Writing (1): the place of my dreams — drawing and describing",
    "By the end of the lesson, learners will be able to draw a city or country they wish to visit and describe it orally.",
    "9 / 10", "paper, colours");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What do English villages have?"),
       fp("2. Define with where: the well.")],
      [fp("Answer."),
       fp("E.A.: old stone houses, green gardens; a place where we fetch water.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes: the place of your dreams — a city? a village? the sea? the hills? What do you see?")],
      [fp("Imagine.")],
      "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, pencils out! We draw the city or country we wish to visit — and we describe it in English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Pre-writing: draw the city or country you wish to visit: its buildings, its nature, its people!")],
      [fp("Draw their dream place.")],
      "Using visual aids", "Paper, colours"),
    stepRow(["4. Analysis"],
      [fp("In pairs: show and describe your drawing: the place, three buildings or elements, two adjectives, one where-sentence!")],
      [fp("Show and describe."),
       fp("E.A.: This is Toliara, a city where the sea is warm. There is a big market near the beach…")],
      "Pair work", "The drawings"),
    stepRow(["5. Synthesis"],
      [fp("Exchange drawings with others: ask questions about the drawing and TAKE NOTES — you will need them to write!")],
      [fp("Exchange. Ask. Take notes."),
       fp("E.A.: Is the market big? Where is the school?")],
      "Pair work", "The drawings"),
    stepRow(["6. Practice"],
      [fp("Present your pair’s drawing to the group from your notes: “This is the city of Vero’s dreams, a place where…”")],
      [fp("Present the pair’s drawing."),
       pAns("E.A.: clear presentation with the notes.",
        ["presentation"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Describe your drawing in three sentences."),
       fp("2. One where-sentence about it!")],
      [fp("Answer."),
       pAns("E.A.: My dream village is green and calm. There is a river and a wooden church. It is a place where the birds sing!",
        ["a place where"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(78, TOTAL, meta, rows, "s78");
}
function lessonS75() {
  return [
    p([run("LESSON OF THE DAY — SESSION 78", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PLACE OF MY DREAMS (1): DRAW AND TELL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DRAWING RECIPE", [
      bullet([run("1. The place: ", { bold: true }), run("a city? a village? by the sea? in the hills?", { italic: true })]),
      bullet([run("2. Three buildings or elements: ", { bold: true }), run("a market, a church, a river…", { italic: true })]),
      bullet([run("3. Life: ", { bold: true }), run("people, animals, colours!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE DESCRIPTION FRAME", [
      bullet([run("This is …, a place where …", { bold: true, color: C.BLUE })]),
      bullet([run("There is a … next to the …, and a … between the … and the …", { bold: true, color: C.BLUE })]),
      bullet([run("It is … and … (two adjectives!)", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("GOOD QUESTIONS FOR THE EXCHANGE", [
      bullet([run("Where is the …? Is the … big or small? What is behind the …? Why do you love this place?", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S76 — Writing 2: the paragraph ----------
function ficheS76() {
  const meta = META("Writing (2): comparing life in the city and in the country",
    "By the end of the lesson, learners will be able to write a paragraph of 6-8 sentences describing a place and comparing city and country life.",
    "10 / 10", "the drawings, notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Describe your drawing in two sentences."),
       fp("2. Compare city and country in one sentence.")],
      [fp("Answer."),
       fp("E.A.: (description); The country is calmer than the city.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Take your notes of the last session: today they become a real paragraph!")],
      [fp("Get the notes ready.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write the FINAL paragraph of the year: 6 to 8 sentences — all your English in one text!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the paragraph recipe: 1. present the place; 2. its buildings with prepositions; 3. one where-sentence; 4. compare city and country (comparatives!); 5. your heart: why you love it.")],
      [fp("Observe the recipe.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write your paragraph (6-8 sentences) describing the drawing and comparing life in it with the city or the country.")],
      [fp("Write the paragraph."),
       fp("E.A.: complete paragraph with the five ingredients.")],
      "Individual work", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Post-writing: read your paragraph to a partner or a small group — listen to their feedback!")],
      [fp("Read. Listen to feedback.")],
      "Group work", "----"),
    stepRow(["6. Practice"],
      [fp("Improve: correct your drawing or ADD TWO MORE SENTENCES based on the feedback. Then hang the drawings and paragraphs on the wall: our dream country exhibition!")],
      [fp("Improve. Exhibit!"),
       pAns("E.A.: improved paragraph + two extra sentences.",
        ["two extra sentences"], { size: SZ.FICHE })],
      "Peer feedback", "The wall!"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five ingredients of the paragraph."),
       fp("2. Read your best sentence aloud — with pride!")],
      [fp("Answer. Read."),
       pAns("E.A.: place, buildings+prepositions, where, comparison, heart; (the best sentence!)",
        ["where"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(79, TOTAL, meta, rows, "s79");
}
function lessonS76() {
  return [
    p([run("LESSON OF THE DAY — SESSION 79", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PLACE OF MY DREAMS (2): THE PARAGRAPH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PARAGRAPH RECIPE (6-8 sentences)", [
      bullet([run("1. Present the place: ", { bold: true }), run("The place of my dreams is…", { italic: true })]),
      bullet([run("2. The buildings + prepositions: ", { bold: true }), run("next to, between, opposite…", { italic: true })]),
      bullet([run("3. One where-sentence: ", { bold: true }), run("It is a place where…", { italic: true })]),
      bullet([run("4. The comparison: ", { bold: true }), run("Life there is calmer than in the city…", { italic: true })]),
      bullet([run("5. Your heart: ", { bold: true }), run("I love it because…", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY MODEL PARAGRAPH", [
      p([run("The place of my dreams is a small village near the sea, in the south of Madagascar. There is a market next to the beach, and a little school between the church and the well. It is a place where the fishermen sing every morning. Life there is calmer than in the big city, and the air is cleaner. The nights are quieter too, but the stars are brighter! I love this village because my grandparents live there. One day, I will visit it again — and I will say hello in English!", { italic: true })], { after: 40 }),
    ]),
    p("", { after: 60 }),
    box("BRAVO, CHAMPION!", [
      p("This is your last writing of T8: look how far you travelled — from “I feel happy!” to a full paragraph about your country. Be proud. Keep speaking, keep writing: English is yours now!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 7", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MY CITY, MY COUNTRY"),
    sub("1. The buildings"),
    bullet([run("City: the town hall, the post office, the bank, the hospital, the train station, the library, the market, the park", { bold: true, color: C.BLUE })]),
    bullet([run("Country: the village, the rice fields, the well, the wooden church, the small school", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The prepositions of place"),
    bullet([run("next to, between, opposite, in front of, behind, near — The school is between the library and the town hall.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The relative clause with where"),
    bullet([run("A library is a place where we read books. Antsirabe is a city where the air is cool.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Asking and giving directions"),
    bullet([run("How can I get to…? — Go straight on! At the corner, turn left. At the roundabout, turn right!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. City and country, here and there"),
    bullet([run("busy, noisy, modern ≠ quiet, calm, green — The city is busier than the country!", { bold: true, color: C.BLUE })]),
    bullet([run("English villages: stone houses and gardens — Malagasy villages: red-earth houses and zebus!", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u7_city.png", label: "My city and my village", url: AUDIO.city },
      { qr: "qr_t8_u7_directions.png", label: "Asking the way", url: AUDIO.directions },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("City or country? Classify: the town hall — the rice fields — the train station — the well.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with a preposition of place: 1. The school is … the library and the town hall.  2. The bank is … the post office (face to face!).  3. The park is … the church (at its back).  4. The market is … the station (just beside).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Define with where: 1. a library  2. a market  3. a hospital  4. a school.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Put the directions in order to go from the school to the post office: a. turn right at the roundabout  b. go straight on to the corner  c. it is opposite the bank  d. turn left at the corner.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences comparing the city and the country (two comparatives, one where-sentence, one free).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: city — country — city — country (1 point each).", ["city — country"]),
    pAns("Exercise 2: between — opposite — behind — next to (1 point each).", ["between"]),
    pAns("Exercise 3: a place where we read books / where we buy and sell / where sick people are cured / where we learn (1 point each).", ["a place where"]),
    pAns("Exercise 4: b — d — a — c (1 point each).", ["b — d — a — c"]),
    pAns("Exercise 5: four correct sentences with the required structures (1 point each).", ["comparatives"]),
  ];
}

// ---------- S77 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s80", "SESSION 80 / 81", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 7: MY CITY, MY COUNTRY", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name five city buildings and three country places."),
    pAns("E.A.: the town hall, the bank, the hospital, the library, the market; the rice fields, the well, the village.", ["the market"]),
    p("2. Give the six prepositions of place."),
    pAns("E.A.: next to, between, opposite, in front of, behind, near.", ["opposite"]),
    p("3. Locate Soa’s school exactly."),
    pAns("E.A.: next to the church, between the library and the town hall.", ["between"]),
    p("4. Give the rule of the relative where + one example."),
    pAns("E.A.: place + where + subject + verb; A market is a place where we buy and sell.", ["where"]),
    p("5. Ask the way to the station, politely."),
    pAns("E.A.: Excuse me, how can I get to the train station, please?", ["how can I get to"]),
    p("6. Give the four direction words."),
    pAns("E.A.: turn left, turn right, go straight on, the corner / the roundabout.", ["go straight on"]),
    p("7. Guide me: school → post office (our map)."),
    pAns("E.A.: Go straight on, turn left at the corner, turn right at the roundabout, it is opposite the bank.", ["turn right"]),
    p("8. Two city adjectives, two country adjectives?"),
    pAns("E.A.: busy, noisy; calm, green.", ["busy"]),
    p("9. One difference Anglophone village / Malagasy village?"),
    pAns("E.A.: stone houses and gardens / red-earth houses and rice fields!", ["stone houses"]),
    p("10. Describe the place of your dreams in three sentences — with one where!"),
    pAns("E.A.: My dream place is a village near the sea. It is a place where the fishermen sing. It is calmer than the city!", ["dream place"]),
  ];
}

// ---------- S78 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s81", "SESSION 81 / 81", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 7: MY CITY, MY COUNTRY", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: role play in pairs — a tourist asks the way, you guide him on the map (question, path, arrival, polite ending).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Prepositions of place: 1. The bank is … the post office (face to face).  2. The school is … the library and the town hall.  3. The park is … the church (at its back).  4. The well is … the school (not far).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Join with where: 1. A hospital is a place. Sick people are cured there.  2. Antsirabe is a city. The air is cool there.  3. A library is a place. We read books there.  4. The village is a place. Everybody says hello there.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete the directions: “Excuse me, how can I … to the market?” — “Go … on. At the corner, turn …. It is … the church!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (six sentences) describing the place of your dreams: buildings + prepositions, one where-sentence, one comparison city/country.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: complete role play — question, clear path, arrival, You’re welcome! (4 points).", ["role play"]),
    pAns("Exercise 2: opposite — between — behind — near (1 point each).", ["opposite"]),
    pAns("Exercise 3: A hospital is a place where sick people are cured. Antsirabe is a city where the air is cool. A library is a place where we read books. The village is a place where everybody says hello. (1 point each).", ["where"]),
    pAns("Exercise 4: get — straight — left/right — opposite/next to (1 point each).", ["get"]),
    pAns("Exercise 5: six sentences with the three required structures (4 points).", ["six sentences"]),
  ];
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...ficheS68(), pageBreak(), ...lessonS68(), pageBreak(),
    ...ficheS69(), pageBreak(), ...lessonS69(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...ficheS71(), pageBreak(), ...lessonS71(), pageBreak(),
    ...ficheS72(), pageBreak(), ...lessonS72(), pageBreak(),
    ...ficheS73(), pageBreak(), ...lessonS73(), pageBreak(),
    ...ficheS74(), pageBreak(), ...lessonS74(), pageBreak(),
    ...ficheS75(), pageBreak(), ...lessonS75(), pageBreak(),
    ...ficheS76(), pageBreak(), ...lessonS76(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 7", COLOR, [
      "I can name the buildings of the city and of the country.",
      "I can locate them: next to, between, opposite, behind, near.",
      "I can define places: a library is a place where we read!",
      "I can ask the way: How can I get to…, please?",
      "I can guide someone: go straight on, turn left, turn right!",
      "I can compare the city and the country — here and in Anglophone countries.",
      "I can read a text about city and country life.",
      "I can write a paragraph about the place of my dreams.",
    ], "BRAVO! YOU FINISHED THE 7 UNITS OF T8 — THE ANNEXES ARE YOUR TREASURE CHEST!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
