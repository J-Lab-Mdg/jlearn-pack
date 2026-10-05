// T9 — UNIT 8 — ENVIRONMENT (10 séances + révision + test) — Sessions 75 à 86 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1E8449"; // vert forêt
const SHADE = "D5F5E3";
const TOTAL = 86;
const AUDIO = {
  climate: "https://drive.google.com/uc?export=download&id=1_70BcVxAns8iSdVXJac6SZ3gdcT01mI7",
  tips: "https://drive.google.com/uc?export=download&id=1C_KK6o4O8cSAT3MaNHZLvZOEDgQ9E7q3",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 8 — ENVIRONMENT", title, slo,
  values: "living in harmony with the environment, mutual respect", session, materials,
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
function climateTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("CLIMATE CHANGE (listening passage — James Hawkins’ presentation)", [
    L("Hello! Thank you for coming here today. My name is James Hawkins. I will talk about climate change and its causes, effects and solutions."),
    L("Carbon emissions are gases, like carbon dioxide or methane, that warm up the earth’s atmosphere when released. They come mostly from factories burning fossil fuels, like coal or oil. Cars also produce carbon monoxide."),
    L("Deforestation is a big issue, too. Deforestation affects climate change because trees use carbon dioxide. If we chop them down, then there wouldn’t be as many to collect the masses of carbon dioxide that we are producing."),
    L("The greenhouse effect is caused by the significant increase in carbon emissions in the atmosphere. It warms up the surface of the earth. This leads to global warming, which has a serious effect on the environment. The temperature increases at about 0.6 degrees. This causes ice caps melting and weather changing. The level of the sea rises and leads to flooding. It will mean more people dying from flooding. People will immigrate, too."),
    L("So, how can we help stop the process of global warming and climate change? One of the solutions is using renewable energy — like solar panels, or solar energy. Another solution is to change the way we travel: we can stop using cars and use a bike."),
    L("In this presentation, I have talked about the different effects of climate change, and what you can do about it. Your help can save lives. Thank you!"),
  ]);
}
function waterTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("WATER, WATER… (reading text)", [
    L("We all need water. The problem is there is often too much or too little. And there are other problems: when it rains a lot, the level of the rivers rises. The water runs over the banks. People drown, their cars and houses are ruined. Animals drown too. Many big cities in Asia, Latin America and Europe often have floods."),
    L("Sometimes it doesn’t rain for a long time. Plants die, animals die too. People have no food. Many countries in Africa have problems with droughts. Every year, these droughts get worse and worse."),
    L("Industry always pollutes water with chemicals. Some farmers use too many chemicals. These then enter the rivers and lakes. They kill the plants and fish."),
    L("The world is getting warmer, so water levels are rising. Climates are changing. Some countries are becoming hotter and drier. This affects agriculture. People want to control global warming, but they can’t agree about the best solutions."),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 8 — ENVIRONMENT", COLOR, "unit8"),
    p("", { after: 100 }),
    p([run("Keep Madagascar green!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u8_protect.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the environmental issues: rubbish everywhere, infertile soil, dirty towns;"),
    p("• explain causes and consequences: tavy, bush fires, pollution, drought;"),
    p("• understand a presentation about climate change and global warming;"),
    p("• compare the climate of the regions of Madagascar — has it changed?;"),
    p("• suggest measures to protect the environment: planting trees, green energy;"),
    p("• use verbs with the gerund: stop cutting, keep planting, enjoy recycling;"),
    p("• imagine with If-clauses type 2 and type 3;"),
    p("• read about water problems around the world;"),
    p("• write classroom rules for conservation — and celebrate Earth Day!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("living in the national and international community, in mutual respect and in harmony with the environment.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Madagascar is one of the treasures of the planet: our forests, our lemurs, our rivers exist nowhere else. This last unit gives you the English to understand what threatens them — and to defend them. The island is in your hands!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u8_climate.png", label: "Climate change — the presentation", url: AUDIO.climate },
      { qr: "qr_t9_u8_tips.png", label: "Tips to protect the environment — listen and tick", url: AUDIO.tips },
    ], COLOR),
  ];
}

// ---------- S75 — Environmental issues: picture description ----------
function ficheS75() {
  const meta = META("Environmental issues — describing pictures",
    "By the end of the lesson, learners will be able to describe pictures of environmental issues and name the main problems of their environment.",
    "1 / 10", "pictures of environmental issues");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Since or for? “… 2020” / “… two years”."),
       fp("2. Build a job with verb + er: to garden.")],
      [fp("Answer."),
       fp("E.A.: since; for; a gardener.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look out of the window (or think of your road to school): is our environment clean? What do you see — the good and the bad?")],
      [fp("Share observations."),
       fp("E.A.: There is rubbish near the market… but the rice fields are beautiful!")],
      "Personalization technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to start our last unit: « ENVIRONMENT ». First mission: describe pictures like reporters and name the problems!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("In four groups, each group gets one picture (a dirty town with rubbish everywhere; a burnt hillside; a dry, cracked field; a flooded street). Answer: 1. What do you see in the picture? 2. What is the environmental issue in it? 3. Do you know places like the one you see?")],
      [fp("Observe. Discuss."),
       fp("E.A.: We see rubbish everywhere — the issue is a dirty town; yes, near the bus station!")],
      "Group work", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Each group reports its picture to the class. Together, build the issue list on the board: dirty town/village, rubbish everywhere, infertile soil, deforestation, drought, flood. And the seasons: the dry season / the wet season.")],
      [fp("Report. Build the list."),
       pAns("E.A.: In our picture, the soil is infertile because of the fires. We know a hill like this near the village!",
        ["the soil is infertile"], { size: SZ.FICHE })],
      "Group work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: an environmental issue = a problem of our environment. Our list: dirty towns, rubbish, infertile soil, deforestation, drought, floods. Keep it — we will find the causes next time!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Reporter round: describe the environment you noticed outside the classroom this morning, in two sentences — one good thing, one issue.")],
      [fp("Report."),
       pAns("E.A.: The jacaranda trees are flowering! But there is rubbish in the canal — the water can’t flow.",
        ["rubbish in the canal"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four environmental issues."),
       fp("2. What are the two seasons?")],
      [fp("Answer."),
       pAns("E.A.: rubbish everywhere, infertile soil, deforestation, floods; the dry season and the wet season.",
        ["the dry season and the wet season"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(75, TOTAL, meta, rows, "s75");
}
function lessonS75() {
  return [
    p([run("LESSON OF THE DAY — SESSION 75", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ENVIRONMENTAL ISSUES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u8_pollution.png", 400, 768 / 1376),
    p([run("The issue words:", { bold: true })], { after: 50 }),
    vocab("the environment", "dhi invaïronnmennte", "everything around us: air, water, soil, plants, animals"),
    vocab("an environmental issue", "ane invaïronnmenntal ichou", "a problem of the environment"),
    vocab("rubbish / litter", "reubiche / liteur", "things people throw away"),
    vocab("infertile soil", "innfeurtaïle soïle", "earth where nothing grows"),
    vocab("deforestation", "diforèstéïcheune", "when the forests disappear"),
    vocab("a drought", "e draoute", "a long time without rain"),
    vocab("a flood", "e fleude", "too much water everywhere"),
    vocab("the dry season / the wet season", "dhe draï sizeune / dhe ouète sizeune", "the two seasons of Madagascar"),
    p("", { after: 60 }),
    box("THE REPORTER’S THREE QUESTIONS (for any picture)", [
      bullet([run("1. What do you see in the picture?", { bold: true, color: C.BLUE })]),
      bullet([run("2. What is the environmental issue in it?", { bold: true, color: C.BLUE })]),
      bullet([run("3. Do you know places like the one in the picture?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My reporter sentences:", { bold: true })], { after: 50 }),
    bullet([run("In this picture, I can see rubbish everywhere near the market.", { bold: true, color: C.BLUE })]),
    bullet([run("The issue is water pollution: the canal is full of plastic.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S76 — Causes and consequences ----------
function ficheS76() {
  const meta = META("Causes and consequences of pollution",
    "By the end of the lesson, learners will be able to express the causes and consequences of air, water and soil pollution.",
    "2 / 10", "the cause-consequence chart");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name four environmental issues."),
       fp("2. What is a drought?")],
      [fp("Answer."),
       fp("E.A.: rubbish, infertile soil, deforestation, floods; a long time without rain.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Detective question: WHY is the hillside burnt? Who or what did this? And what happens AFTER the fire?")],
      [fp("Guess."),
       fp("E.A.: the tavy — slash and burn; after, the soil becomes infertile!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Causes and consequences ». Every issue has a BEFORE (the cause) and an AFTER (the consequence) — like a chain!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The big chart, column by column: AIR pollution — causes: traffic jams, smoke from factories and cars; consequences: climate change, sickness, fewer tourists. WATER pollution — causes: littering, dumping chemical wastes into canals and rivers; consequences: water not drinkable, disease. SOIL pollution — causes: too much chemical fertilizer, littering, lack of public toilets and bins; consequences: smaller crops, malnutrition, famine.")],
      [fp("Read the chart. Ask questions.")],
      "Whole-class work", "Chart"),
    stepRow(["4. Analysis"],
      [fp("And the forest? Causes in general: tavy = slash and burn, bush fires. Consequences: epidemic diseases, drought, extinction of endemic species — fauna and flora, less food, starvation, famine. Build cause-sentences: “… is caused by …” / “… leads to …”.")],
      [fp("Build sentences."),
       fp("E.A.: Deforestation is caused by bush fires. It leads to drought and famine.")],
      "Pair work", "Chart"),
    stepRow(["5. Synthesis"],
      [fp("The two magic connectors: X IS CAUSED BY Y (the cause behind) / X LEADS TO Z (the consequence ahead). One chain to remember: tavy → deforestation → less rain → smaller crops → famine.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game in groups: pick an issue card (air, water, soil, forest) and build the longest correct cause-consequence chain. The longest chain wins!")],
      [fp("Build chains."),
       pAns("E.A.: Dumping chemicals leads to dead fish, dead fish leads to less food, less food leads to malnutrition!",
        ["leads to"], { size: SZ.FICHE })],
      "Group work", "Issue cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one cause and one consequence of water pollution."),
       fp("2. What is the tavy, and what does it lead to?")],
      [fp("Answer."),
       pAns("E.A.: dumping chemical wastes → water not drinkable; slash and burn → deforestation, drought, famine.",
        ["slash and burn"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(76, TOTAL, meta, rows, "s76");
}
function lessonS76() {
  return [
    p([run("LESSON OF THE DAY — SESSION 76", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CAUSES AND CONSEQUENCES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("AIR POLLUTION", [
      bullet([run("Causes: ", { bold: true, color: C.RED }), run("traffic jams, smoke from factories and cars.")]),
      bullet([run("Consequences: ", { bold: true, color: C.BLUE }), run("climate change, sickness, fewer tourists.")], { after: 20 }),
    ]),
    p("", { after: 50 }),
    box("WATER POLLUTION", [
      bullet([run("Causes: ", { bold: true, color: C.RED }), run("littering; dumping chemical wastes into canals and rivers.")]),
      bullet([run("Consequences: ", { bold: true, color: C.BLUE }), run("water not drinkable; disease.")], { after: 20 }),
    ]),
    p("", { after: 50 }),
    box("SOIL POLLUTION", [
      bullet([run("Causes: ", { bold: true, color: C.RED }), run("too much chemical fertilizer; littering; lack of public toilets and bins.")]),
      bullet([run("Consequences: ", { bold: true, color: C.BLUE }), run("smaller crops, malnutrition, famine.")], { after: 20 }),
    ]),
    p("", { after: 50 }),
    box("THE FOREST", [
      bullet([run("Causes: ", { bold: true, color: C.RED }), run("tavy = slash and burn; bush fires.")]),
      bullet([run("Consequences: ", { bold: true, color: C.BLUE }), run("drought, extinction of endemic fauna and flora, less food, starvation, famine.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE TWO MAGIC CONNECTORS", [
      bullet([run("X is caused by Y", { bold: true, color: C.RED }), run("  — Deforestation is caused by bush fires.")]),
      bullet([run("X leads to Z", { bold: true, color: C.BLUE }), run("  — Deforestation leads to drought and famine.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The chain to remember:", { bold: true })], { after: 50 }),
    pr([run("tavy → deforestation → less rain → smaller crops → famine", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 60 }),
  ];
}

// ---------- S77 — Listening: climate change presentation ----------
function ficheS77() {
  const meta = META("Listening: climate change — fill in the gaps",
    "By the end of the lesson, learners will be able to comprehend an oral presentation on climate change and complete a gapped text.",
    "3 / 10", "audio (QR code), gapped text");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One cause and one consequence of air pollution."),
       fp("2. Connect: “bush fires / deforestation”.")],
      [fp("Answer."),
       fp("E.A.: smoke from cars → sickness; deforestation is caused by bush fires.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("New words first, in context: carbon emissions, fossil fuels (coal, oil), the greenhouse effect, global warming, ice caps melting, renewable energy, to chop down. Guess the meanings together!")],
      [fp("Guess. Learn."),
       fp("E.A.: renewable energy = energy that never finishes: sun, wind!")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a science presentation by James Hawkins about CLIMATE CHANGE — its causes, effects and solutions. You have the text with 20 gaps: ears wide open!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening, step 1 and 2)"],
      [fp("Step 1: listen to the whole passage, just to understand. Step 2: listen again and complete the blanks: “My name is James Hawkins. I will talk about climate change and its causes, effects and [1]…”")],
      [fp("Listen. Fill the gaps."),
       fp("E.A.: [1] solutions, [2] warm, [3] factories, [4] trees, [5] wouldn’t…")],
      "Individual work", "Audio / QR + gapped text"),
    stepRow(["4. Analysis (step 3: peer correction)"],
      [fp("Exchange your texts and peer correct the answers. Then the questions: 1. What is the presentation about? 2. What causes the climate change? 3. What are its consequences? 4. Why shouldn’t we chop down trees? 5. What can we do to help the environment?")],
      [fp("Peer correct. Answer."),
       pAns("E.A.: 1. climate change. 2. carbon emissions from factories and cars; deforestation. 3. global warming, ice caps melting, sea level rising, flooding. 4. because trees use carbon dioxide! 5. use renewable energy, ride a bike.",
        ["trees use carbon dioxide!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("The science chain of the presentation: carbon emissions → greenhouse effect → global warming → ice caps melting + sea level rising → flooding. And the two solutions: renewable energy + changing the way we travel.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Mini presentation: in pairs, re-tell the presentation in four sentences — one cause, one effect, one consequence, one solution. Like James Hawkins!")],
      [fp("Re-tell."),
       pAns("E.A.: Factories release carbon emissions. This warms up the earth. The sea level rises and floods come. So we should use solar energy!",
        ["we should use solar energy!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the greenhouse effect caused by?"),
       fp("2. Give the two solutions of the presentation.")],
      [fp("Answer."),
       pAns("E.A.: the significant increase in carbon emissions; renewable energy (solar panels) and changing the way we travel (bike!).",
        ["renewable energy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(77, TOTAL, meta, rows, "s77");
}
function lessonS77() {
  return [
    p([run("LESSON OF THE DAY — SESSION 77", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: CLIMATE CHANGE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    climateTextBox(),
    p("", { after: 60 }),
    p([run("New words of the presentation:", { bold: true })], { after: 50 }),
    vocab("carbon emissions", "karbeune imicheunze", "gases that warm up the atmosphere"),
    vocab("fossil fuels", "fosile fioulze", "coal and oil"),
    vocab("the greenhouse effect", "dhe grinhaousse ifèkte", "the atmosphere keeps the heat in"),
    vocab("global warming", "glôoubal ouormingue", "the whole world gets hotter"),
    vocab("ice caps melting", "aïce kaps mèltinng", "the ice of the poles becomes water"),
    vocab("renewable energy", "riniouebeul ènerdji", "energy that never finishes: sun, wind"),
    vocab("to chop down", "tou tchop daoune", "to cut (a tree)"),
    p("", { after: 60 }),
    box("THE SCIENCE CHAIN", [
      pr([run("carbon emissions → greenhouse effect → global warming → ice caps melting → sea level rises → flooding", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 }),
      bullet([run("The two solutions: ", { bold: true }), run("renewable energy (solar panels!) + changing the way we travel (use a bike!).", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u8_climate.png", label: "Climate change — listen and fill the gaps", url: AUDIO.climate }], COLOR),
  ];
}

// ---------- S78 — Climate of Madagascar + match the disasters ----------
function ficheS78() {
  const meta = META("The climate of Madagascar — has it changed?",
    "By the end of the lesson, learners will be able to compare the weather of the regions of Madagascar, say if the climate has changed and match disaster words with pictures.",
    "4 / 10", "climate map of Madagascar, disaster pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say the science chain of climate change."),
       fp("2. What are fossil fuels?")],
      [fp("Answer."),
       fp("E.A.: carbon emissions → greenhouse effect → global warming → flooding; coal and oil.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Word teaching first: malnutrition, extinction of animals, drought, deforestation, flood. Then match each word with its picture!")],
      [fp("Learn. Match."),
       fp("E.A.: picture 1 = flood; picture 2 = drought…")],
      "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to travel around Madagascar with the climate map — and answer the big question: has our climate changed?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The climate map: the East — it rains a lot; the Highlands — colder in the winter; the West — hotter and drier; the deep South — very dry, droughts. Compare two regions with comparatives!")],
      [fp("Observe the map. Compare."),
       fp("E.A.: The South is drier than the East. The Highlands are colder than the coast.")],
      "Whole-class work", "Climate map"),
    stepRow(["4. Analysis"],
      [fp("Now the elders’ question: ask yourself what your grandparents say. Is it hotter and drier in the summer than before? Does it rain less? State your answer: “The climate HAS changed: it is hotter and drier in the summer, there is less rain…”")],
      [fp("Discuss. State."),
       pAns("E.A.: Yes, the climate has changed: my grandfather says the rains come later every year, and the summer is hotter and drier!",
        ["the rains come later"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: Madagascar has several climates (East wet, South dry…), and they are changing — hotter and drier summers, less rain, stronger cyclones. The disasters have names: drought, flood, deforestation, extinction, malnutrition.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Picture debate: pick one disaster picture and discuss its causes OR its consequences in your group. Present your discussion to the class — speaking or writing!")],
      [fp("Discuss. Present."),
       pAns("E.A.: Our picture shows the drought in the South. It is caused by less rain and deforestation; it leads to smaller crops and malnutrition.",
        ["the drought in the South"], { size: SZ.FICHE })],
      "Group work", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Compare the East and the South of Madagascar."),
       fp("2. Give two signs that the climate has changed.")],
      [fp("Answer."),
       pAns("E.A.: the East is wetter, the South is drier; hotter and drier summers, less rain, stronger cyclones.",
        ["hotter and drier summers"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(78, TOTAL, meta, rows, "s78");
}
function lessonS78() {
  return [
    p([run("LESSON OF THE DAY — SESSION 78", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CLIMATE OF MADAGASCAR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE CLIMATE MAP (in words)", [
      bullet([run("The East: ", { bold: true }), run("it rains a lot — the wet side!")]),
      bullet([run("The Highlands: ", { bold: true }), run("it is colder in the winter.")]),
      bullet([run("The West: ", { bold: true }), run("hotter and drier.")]),
      bullet([run("The deep South: ", { bold: true }), run("very dry — droughts, year after year.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The five disaster words (match them with pictures!):", { bold: true })], { after: 50 }),
    vocab("malnutrition", "malnioutricheune", "not enough good food"),
    vocab("extinction of animals", "ikstinngkcheune ove animalze", "a species disappears for ever"),
    vocab("a drought", "e draoute", "a long time without rain"),
    vocab("deforestation", "diforèstéïcheune", "the forest disappears"),
    vocab("a flood", "e fleude", "too much water everywhere"),
    p("", { after: 60 }),
    box("HAS THE CLIMATE CHANGED? (what we observe)", [
      bullet([run("It is hotter and drier in the summer; there is less rain during the summer.", { bold: true, color: C.BLUE })]),
      bullet([run("It is colder in the winter in some regions; it rains a lot — but not when the rice needs it!", { bold: true, color: C.BLUE })]),
      bullet([run("The cyclones are stronger. Ask your grandparents: they remember!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S79 — Listening: tips to protect the environment ----------
function ficheS79() {
  const meta = META("Listening: tips to protect the environment — listen and tick",
    "By the end of the lesson, learners will be able to understand tips to protect the environment and suggest their own measures.",
    "5 / 10", "audio (QR code), tip pictures to tick");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Two signs that the climate has changed."),
       fp("2. What is extinction?")],
      [fp("Answer."),
       fp("E.A.: hotter drier summers, less rain; a species disappears for ever.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("We know the problems — now the SOLUTIONS! Read one of the best cause-consequence chains from last session. Then: what can WE do? First ideas?")],
      [fp("Read. Brainstorm."),
       fp("E.A.: Plant trees! Stop throwing rubbish in the canal!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to seven tips to protect the environment. You have the pictures — listen and TICK the picture that corresponds!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen and tick! To protect the environment, we should: stop cutting down trees — plant trees — use solar energy — stop killing animals — save water — put litter in bins — sweep our classroom floor.")],
      [fp("Listen. Tick the pictures."),
       fp("E.A.: all seven pictures ticked in the right order!")],
      "Individual work", "Audio / QR + pictures"),
    stepRow(["4. Analysis"],
      [fp("Look at the tips again: which ones can we do TODAY, at school? Which ones need the whole village? Which ones need the government? Sort them in three circles!")],
      [fp("Sort. Justify."),
       pAns("E.A.: today: put litter in bins, sweep the classroom, save water; village: plant trees; government: solar energy for all!",
        ["put litter in bins"], { size: SZ.FICHE })],
      "Group work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("The measure words: planting trees; using green energy — riding a bicycle or taking public buses, solar or wind energy; saving water; putting litter in bins. Small actions + big actions = a protected island!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Suggestion round: each group suggests TWO more measures to protect the environment (not in the seven!) and tells them to the class.")],
      [fp("Suggest. Tell the class."),
       pAns("E.A.: We suggest making compost with food waste — and organizing a clean-up day at the market every month!",
        ["a clean-up day"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say four of the seven tips."),
       fp("2. Give one example of green energy.")],
      [fp("Answer."),
       pAns("E.A.: plant trees, save water, put litter in bins, use solar energy; solar or wind energy, riding a bicycle.",
        ["solar or wind energy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(79, TOTAL, meta, rows, "s79");
}
function lessonS79() {
  return [
    p([run("LESSON OF THE DAY — SESSION 79", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("TIPS TO PROTECT THE ENVIRONMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u8_protect.png", 400, 768 / 1376),
    box("THE SEVEN TIPS (listen and tick!)", [
      bullet([run("1. Stop cutting down trees.", { bold: true, color: C.BLUE })]),
      bullet([run("2. Plant trees.", { bold: true, color: C.BLUE })]),
      bullet([run("3. Use solar energy.", { bold: true, color: C.BLUE })]),
      bullet([run("4. Stop killing animals.", { bold: true, color: C.BLUE })]),
      bullet([run("5. Save water.", { bold: true, color: C.BLUE })]),
      bullet([run("6. Put litter in bins.", { bold: true, color: C.BLUE })]),
      bullet([run("7. Sweep our classroom floor.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The measure words:", { bold: true })], { after: 50 }),
    vocab("to plant trees", "tou plannte triz", "the best gift to the island"),
    vocab("green energy", "grine ènerdji", "energy that does not pollute"),
    vocab("solar / wind energy", "sôouleur / ouinnde ènerdji", "from the sun / from the wind"),
    vocab("public buses", "peublik beusiz", "one bus = many cars less!"),
    vocab("to save water", "tou séïve ouoteur", "use only what you need"),
    vocab("a bin / a trash-bin", "e bine / e trache-bine", "the house of the litter!"),
    p("", { after: 60 }),
    box("THE THREE CIRCLES OF ACTION", [
      bullet([run("ME, today: ", { bold: true }), run("put litter in bins, save water, sweep the classroom.")]),
      bullet([run("MY VILLAGE: ", { bold: true }), run("plant trees, clean-up days, public buses.")]),
      bullet([run("MY COUNTRY: ", { bold: true }), run("solar and wind energy, protecting the forests.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u8_tips.png", label: "Tips — listen and tick", url: AUDIO.tips }], COLOR),
  ];
}

// ---------- S80 — Verbs with gerund ----------
function ficheS80() {
  const meta = META("Verbs with the gerund: stop cutting, keep planting",
    "By the end of the lesson, learners will be able to use verbs that require the gerund to talk about protecting the environment.",
    "6 / 10", "verb cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say four of the seven tips."),
       fp("2. One measure for your village.")],
      [fp("Answer."),
       fp("E.A.: plant trees, save water…; a clean-up day at the market.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at the tips again: “STOP CUTTING down trees”, “stop KILLING animals”. Cutting? Killing? Why -ING after stop?")],
      [fp("Observe. Guess.")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Verbs with the gerund ». Some verbs always want a verb-ING after them — meet the gerund family!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: We must STOP CUTTING down trees. Let’s KEEP PLANTING trees. I SUGGEST USING solar energy. I ENJOY RIDING my bicycle. We should AVOID THROWING rubbish in the canal. Imagine FINISHING cleaning the whole beach!")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The gerund family: stop, keep, suggest, enjoy, avoid, finish, imagine, practise + verb-ING. The gerund = verb + ing used like a noun: “Planting trees is the best gift!”")],
      [fp("Build sentences."),
       fp("E.A.: I suggest organizing a clean-up day. We must avoid wasting water.")],
      "Pair work", "Verb cards"),
    stepRow(["5. Synthesis"],
      [fp("So: after stop, keep, suggest, enjoy, avoid, finish, imagine → always verb-ING. And a gerund can even start the sentence: “Saving water is easy!”")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The eco-speech game: each pair writes three environment sentences, each with a different gerund verb — then reads them like a minister’s speech!")],
      [fp("Write. Speak."),
       pAns("E.A.: Let’s stop burning the hills! I suggest planting one tree per student! And let’s keep sweeping our classroom every day!",
        ["I suggest planting"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: “We must stop (throw) … rubbish in the river.”"),
       fp("2. One sentence with “suggest + gerund”.")],
      [fp("Answer."),
       pAns("E.A.: throwing; I suggest using public buses!",
        ["throwing"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(80, TOTAL, meta, rows, "s80");
}
function lessonS80() {
  return [
    p([run("LESSON OF THE DAY — SESSION 80", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("VERBS WITH THE GERUND", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE GERUND FAMILY (always + verb-ING!)", [
      bullet([run("stop:", { bold: true }), run("  We must stop cutting down trees!", { bold: true, color: C.BLUE })]),
      bullet([run("keep:", { bold: true }), run("  Let’s keep planting trees.", { bold: true, color: C.BLUE })]),
      bullet([run("suggest:", { bold: true }), run("  I suggest using solar energy.", { bold: true, color: C.BLUE })]),
      bullet([run("enjoy:", { bold: true }), run("  I enjoy riding my bicycle.", { bold: true, color: C.BLUE })]),
      bullet([run("avoid:", { bold: true }), run("  Avoid throwing rubbish in the canal.", { bold: true, color: C.BLUE })]),
      bullet([run("finish:", { bold: true }), run("  We finished cleaning the yard.", { bold: true, color: C.BLUE })]),
      bullet([run("imagine:", { bold: true }), run("  Imagine living on a clean island!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The gerund can even be the subject:", { bold: true })], { after: 50 }),
    bullet([run("Planting trees is the best gift to Madagascar.", { bold: true, color: C.BLUE })]),
    bullet([run("Saving water is easy — and free!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("MY ECO-SPEECH (model)", [
      p("“Dear friends, let’s stop burning the hills! I suggest planting one tree per student every year. Let’s keep sweeping our classroom, avoid wasting water — and enjoy living on the most beautiful island in the world!”", { after: 40 }),
    ]),
  ];
}

// ---------- S81 — If clauses type 2 and 3 ----------
function ficheS81() {
  const meta = META("If-clauses type 2 and type 3 — the environment edition",
    "By the end of the lesson, learners will be able to use If-clause type 2 and type 3 to discuss environmental consequences.",
    "7 / 10", "disaster cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: “Stop (cut) … down trees!”"),
       fp("2. Type 2: “If I … (be) the mayor, I … (build) more bins.”")],
      [fp("Answer."),
       fp("E.A.: cutting; were, would build.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Remember James Hawkins: “If we CHOP them down, then there WOULDN’T BE as many trees…” — type 2! But what about the PAST? The forest that burnt last year — can we still save it?")],
      [fp("React."),
       fp("E.A.: No… the past cannot change. But we can talk about it!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « If-clause type 3 » — the grammar of regrets about the past — and review type 2, the grammar of dreams!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Compare: TYPE 2 (present dream): If people planted more trees, there would be more rain. TYPE 3 (past regret): If people HAD PLANTED more trees, the flood WOULD NOT HAVE DESTROYED the village.")],
      [fp("Observe. Compare.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine type 3: If + past perfect (had + participle), … would have + participle. It talks about the past that we CANNOT change — regrets and lessons! Build with the disaster cards: the burnt hill, the flooded street, the dead fish.")],
      [fp("Build sentences."),
       fp("E.A.: If we hadn’t dumped chemicals, the fish wouldn’t have died.")],
      "Pair work", "Disaster cards"),
    stepRow(["5. Synthesis"],
      [fp("So: type 2 = If + past simple → would + verb (dream now); type 3 = If + had + participle → would have + participle (regret about the past). The lesson of type 3 becomes the action of today!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Discussion: list other disasters you have heard on the radio, read in the newspapers or seen on television. For each one, one type 3 sentence (the regret) + one type 2 sentence (the dream for now)!")],
      [fp("List. Discuss."),
       pAns("E.A.: The cyclone flooded the town. If the canals had been clean, the water would have flowed away. If we cleaned them now, the next rain would not flood us!",
        ["would have flowed away"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Type 3: “If we … (not burn) the hill, the soil … (stay) fertile.”"),
       fp("2. Type 2 or type 3? “If I had seen the fire, I would have called for help.”")],
      [fp("Answer."),
       pAns("E.A.: hadn’t burnt, would have stayed; type 3 — a past regret!",
        ["hadn’t burnt, would have stayed"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(81, TOTAL, meta, rows, "s81");
}
function lessonS81() {
  return [
    p([run("LESSON OF THE DAY — SESSION 81", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("IF-CLAUSES TYPE 2 AND TYPE 3", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("TYPE 2 — THE DREAM (about now)", [
      bullet([run("If + PAST SIMPLE , … WOULD + verb", { bold: true, color: C.RED })]),
      bullet([run("If people planted more trees, there would be more rain.", { bold: true, color: C.BLUE })]),
      bullet([run("If I were the mayor, I would put bins in every street.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TYPE 3 — THE REGRET (about the past, cannot change!)", [
      bullet([run("If + HAD + participle , … WOULD HAVE + participle", { bold: true, color: C.RED })]),
      bullet([run("If people had planted more trees, the flood would not have destroyed the village.", { bold: true, color: C.BLUE })]),
      bullet([run("If we hadn’t dumped chemicals, the fish wouldn’t have died.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("How to choose?", { bold: true })], { after: 50 }),
    bullet([run("Talking about NOW (a dream, a wish)? → type 2.", { bold: true, color: C.BLUE })]),
    bullet([run("Talking about the PAST (a regret, a lesson)? → type 3.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE WISDOM BOX", [
      p("Type 3 looks back: “If we had protected the forest…” Type 2 looks at today: “If we protected it now…” The best sentence is the one that becomes an ACTION!", { after: 40 }),
    ]),
  ];
}

// ---------- S82 — Reading: water, water… ----------
function ficheS82() {
  const meta = META("Reading: water — too much or too little",
    "By the end of the lesson, learners will be able to infer information from a text on water problems, entitle it and complete the charts.",
    "8 / 10", "the text, the two charts");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Type 3: “If it … (rain), the crops … (grow).”"),
       fp("2. One gerund sentence about water.")],
      [fp("Answer."),
       fp("E.A.: had rained, would have grown; We must stop wasting water!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Describe the pictures of water problems: a flooded city, a dry field, a polluted river. Which problem is the worst, in your opinion?")],
      [fp("Describe. Give opinions.")],
      "Using visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a world tour of WATER problems — too much, too little, too dirty. Skimming first, scanning after!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading, skimming)"],
      [fp("Read the text quickly and give it a title!")],
      [fp("Skim. Entitle."),
       fp("E.A.: “Water, water…” / “Too much or too little” / “The water problems of the world”.")],
      "Individual work", "The text"),
    stepRow(["4. Analysis (scanning)"],
      [fp("Chart 1 — continents and their issues: Asia, Latin America, Europe → ? / Africa → ? Then: according to the text, what are the two reasons that plants die? Chart 2 — consequences: too much rain → flood; lack of rain → ?; use of chemicals by farmers → ?")],
      [fp("Scan. Fill the charts."),
       pAns("E.A.: Asia/Latin America/Europe → floods; Africa → droughts. Plants die from lack of rain AND from chemicals. Lack of rain → plants and animals die, no food; chemicals → they kill the plants and fish.",
        ["Africa → droughts"], { size: SZ.FICHE })],
      "Pair work", "Charts"),
    stepRow(["5. Synthesis"],
      [fp("The text in one chain: too much rain → floods; too little → droughts (worse and worse in Africa); chemicals → dead rivers; global warming → hotter, drier countries → agriculture suffers. And the last line: people can’t agree about the best solutions… but YOU can start!")],
      [fp("Listen. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Writing mission: write a short paragraph (3–4 sentences) suggesting solutions to flood in towns. Use a gerund and an if-clause!")],
      [fp("Write. Read out."),
       pAns("E.A.: To stop floods in towns, I suggest cleaning the canals before the wet season. We must stop throwing rubbish in them. If the water flowed freely, the streets would stay dry!",
        ["cleaning the canals"], { size: SZ.FICHE })],
      "Individual work", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Which continents often have floods? Which have droughts?"),
       fp("2. What do the farmers’ chemicals do to the rivers?")],
      [fp("Answer."),
       pAns("E.A.: Asia, Latin America, Europe — floods; Africa — droughts; they kill the plants and fish.",
        ["they kill the plants and fish"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(82, TOTAL, meta, rows, "s82");
}
function lessonS82() {
  return [
    p([run("LESSON OF THE DAY — SESSION 82", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: WATER, WATER…", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    waterTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("to drown", "tou draoune", "to die in the water"),
    vocab("the banks", "dhe bannks", "the sides of the river"),
    vocab("ruined", "rouinnde", "completely destroyed"),
    vocab("chemicals", "kèmikalze", "dangerous products"),
    vocab("agriculture", "agrikeultcheur", "growing food"),
    p("", { after: 60 }),
    box("THE TWO CHARTS (fill them from the text!)", [
      bullet([run("Asia, Latin America, Europe → ", { bold: true }), run("floods", { italic: true, color: C.GRAY })]),
      bullet([run("Africa → ", { bold: true }), run("droughts — worse and worse every year", { italic: true, color: C.GRAY })]),
      bullet([run("Too much rain → ", { bold: true }), run("flood", { italic: true, color: C.GRAY })]),
      bullet([run("Lack of rain → ", { bold: true }), run("plants and animals die; people have no food", { italic: true, color: C.GRAY })]),
      bullet([run("Use of chemicals by farmers → ", { bold: true }), run("they enter rivers and lakes and kill the plants and fish", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY SOLUTION PARAGRAPH (model)", [
      p("To stop floods in towns, I suggest cleaning the canals before the wet season. We must stop throwing rubbish in them, and keep the bins in every street. If the water flowed freely, the streets would stay dry — and nobody would lose their house!", { after: 40 }),
    ]),
  ];
}

// ---------- S83 — Writing: paragraphs + classroom rules + I am the soil ----------
function ficheS83() {
  const meta = META("Writing: protecting the environment — the classroom poster",
    "By the end of the lesson, learners will be able to write paragraphs about protecting the environment, classroom rules for conservation and a simulation text.",
    "9 / 10", "paper strips for the poster");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Which continents have droughts in the text?"),
       fp("2. One solution to flood in towns.")],
      [fp("Answer."),
       fp("E.A.: Africa; cleaning the canals before the wet season.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Brainstorm solutions to environmental problems — everything we have learnt: trees, energy, water, bins… The board fills up!")],
      [fp("Brainstorm.")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE three things: a paragraph from our brainstorming, the classroom rules for environment conservation (a real poster!), and a surprise simulation…")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-writing 1)"],
      [fp("Build a paragraph out of the brainstorming (4–5 sentences). Then exchange your production with your partner: write one QUESTION on your friend’s paragraph — and answer the question you receive!")],
      [fp("Write. Exchange. Question. Answer.")],
      "Pair work", "Exercise books"),
    stepRow(["4. Analysis (the poster)"],
      [fp("Each student writes ON A PIECE OF PAPER one rule to protect the classroom and school environment. Each one says and copies it on the board. Peer correction of the language! Then we choose the best rules for the poster.")],
      [fp("Write a rule. Correct together."),
       pAns("E.A.: Put your litter in the bin! Sweep the floor after class! Don’t waste the chalk! Water the school garden!",
        ["Put your litter in the bin!"], { size: SZ.FICHE })],
      "Whole-class work", "Paper strips"),
    stepRow(["5. Synthesis (the poster lives!)"],
      [fp("A poster is made from these rules and stuck on the classroom wall. From today, these are OUR laws!")],
      [fp("Make the poster. Stick it.")],
      "Group work", "Poster"),
    stepRow(["6. Practice (the simulation)"],
      [fp("The surprise: IMAGINE YOU ARE THE SOIL. You are suffering a lot from these causes: chemicals used by farmers, dry periods due to lack of rain… Write about your typical day and what people can do to help you!")],
      [fp("Write the soil’s diary."),
       pAns("E.A.: I am the soil of the hill. Every morning, the chemicals burn me and I am so thirsty… If people planted trees on my back, I would hold the rain and give them big crops again!",
        ["I am the soil"], { size: SZ.FICHE })],
      "Simulation", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read one of your classroom rules."),
       fp("2. Read the best sentence of your soil diary.")],
      [fp("Read."),
       pAns("E.A.: Sweep the floor after class!; If people stopped burning me, I would feed the whole village.",
        ["If people stopped burning me"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(83, TOTAL, meta, rows, "s83");
}
function lessonS83() {
  return [
    p([run("LESSON OF THE DAY — SESSION 83", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: OUR CONSERVATION POSTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("OUR CLASSROOM RULES FOR ENVIRONMENT CONSERVATION (model poster)", [
      bullet([run("1. Put your litter in the bin — always!", { bold: true, color: C.BLUE })]),
      bullet([run("2. Sweep the classroom floor after class.", { bold: true, color: C.BLUE })]),
      bullet([run("3. Save water at the tap and in the garden.", { bold: true, color: C.BLUE })]),
      bullet([run("4. Take care of the school trees — plant one every year!", { bold: true, color: C.BLUE })]),
      bullet([run("5. Keep the schoolyard clean and green.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("How we built the poster:", { bold: true })], { after: 50 }),
    bullet([run("Each student wrote ONE rule on a piece of paper;")]),
    bullet([run("everyone said and copied it on the board;")]),
    bullet([run("we corrected the language together (peer correction!);")]),
    bullet([run("we chose the best rules — and the poster now lives on our wall!")]),
    p("", { after: 60 }),
    box("THE SOIL’S DIARY (simulation — model)", [
      p("“I am the soil of the hill above the village. Every day, the farmers’ chemicals burn my skin, and the dry periods make me so thirsty that I crack. The rain, when it finally comes, washes me down to the river because no roots hold me. If people had kept the old trees, I would have stayed strong. If they planted new ones now, I would hold the rain, feed their rice and give them big crops again. Please — help me help you!”", { after: 40 }),
    ]),
  ];
}

// ---------- S84 — Cross-cultural: Earth Day ----------
function ficheS84() {
  const meta = META("Cross-cultural awareness: Earth Day — here and abroad",
    "By the end of the lesson, learners will be able to compare ways of protecting the environment in different countries and write a paragraph about it.",
    "10 / 10", "the Earth Day poster");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say two rules of our conservation poster."),
       fp("2. One sentence from the soil’s diary.")],
      [fp("Answer."),
       fp("E.A.: Put your litter in the bin, sweep the floor; If people planted trees, I would hold the rain.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("A world question: do other countries fight for the environment too? Have you ever heard of EARTH DAY — the day of the planet, on April 22nd?")],
      [fp("Share.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to travel: describe an Earth Day poster, see what people do abroad — and compare with Madagascar!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Describe and read the poster about environment protection: Where does this event take place? What do they do? — The Earth Day words: to celebrate, to lecture, to give presentations, to march, a parade.")],
      [fp("Describe. Answer."),
       fp("E.A.: In a big city abroad; people march in a parade, give presentations, celebrate the Earth!")],
      "Using visual aids", "Poster"),
    stepRow(["4. Analysis"],
      [fp("Discussion: Do you do the same thing on Earth Day? What do we do in Madagascar to protect the environment (tree-planting days, clean-up days…)? What could we borrow from abroad — and what could the world learn from us?")],
      [fp("Discuss. Compare."),
       pAns("E.A.: Here we have big tree-planting days with the fokontany! Abroad they march in parades — we could organize one at school! And the world could learn our community work: the asa.",
        ["tree-planting days"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: every country celebrates and protects in its own way — lectures and parades abroad, tree-planting and community days here. Same planet, same fight, different songs!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Write a paragraph based on your discussion (4–5 sentences): compare Earth Day abroad and environment protection in Madagascar. Read it to the class!")],
      [fp("Write. Read."),
       pAns("E.A.: On Earth Day, people abroad march in parades and give presentations. In Madagascar, we plant trees with the whole village. Both celebrate the same planet. If every country did both, the Earth would smile!",
        ["march in parades"], { size: SZ.FICHE })],
      "Personalization technique", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. When is Earth Day, and what do people do?"),
       fp("2. One thing Madagascar does for the environment.")],
      [fp("Answer."),
       pAns("E.A.: April 22nd — they celebrate, lecture, give presentations, march in parades; big tree-planting days!",
        ["April 22nd"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(84, TOTAL, meta, rows, "s84");
}
function lessonS84() {
  return [
    p([run("LESSON OF THE DAY — SESSION 84", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("EARTH DAY — HERE AND ABROAD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The Earth Day words:", { bold: true })], { after: 50 }),
    vocab("Earth Day", "eurth déï", "the day of the planet — April 22nd"),
    vocab("to celebrate", "tou sèlebréïte", "to make a joyful event"),
    vocab("to lecture", "tou lèktcheur", "to teach in front of people"),
    vocab("to give a presentation", "tou guive e prézenntéïcheune", "like James Hawkins!"),
    vocab("to march", "tou martche", "to walk together for an idea"),
    vocab("a parade", "e peréïde", "a big march with music and signs"),
    p("", { after: 60 }),
    box("THE POSTER QUESTIONS", [
      bullet([run("Where does this event take place?", { bold: true, color: C.BLUE })]),
      bullet([run("What do they do?", { bold: true, color: C.BLUE })]),
      bullet([run("Do you do the same thing on Earth Day?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("HERE AND ABROAD — SAME PLANET, SAME FIGHT!", [
      bullet([run("Abroad: ", { bold: true }), run("people celebrate Earth Day with parades, lectures and presentations.")]),
      bullet([run("In Madagascar: ", { bold: true }), run("big tree-planting days, clean-up days, the community work of the village.")]),
      bullet([run("The dream: ", { bold: true }), run("if every country did both, the Earth would smile!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY COMPARISON PARAGRAPH (model)", [
      p("On Earth Day, April 22nd, people abroad march in big parades, listen to lectures and give presentations about the planet. In Madagascar, we protect the environment with our hands: we plant trees on the hills and clean our villages together. The ways are different, but the heart is the same. If every country shared its best ideas, the Earth would smile!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 8", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The issues"),
    bullet([run("dirty towns, rubbish everywhere, infertile soil, deforestation, drought, flood; the dry and the wet season.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Causes and consequences"),
    bullet([run("tavy (slash and burn), bush fires, smoke, littering, dumping chemicals → climate change, extinction of endemic species, famine… X is caused by Y; X leads to Z.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Climate change (the science chain)"),
    bullet([run("carbon emissions → greenhouse effect → global warming → ice caps melting → sea level rises → flooding. Solutions: renewable energy + travelling differently.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The seven tips"),
    bullet([run("stop cutting down trees; plant trees; use solar energy; stop killing animals; save water; put litter in bins; sweep our classroom floor.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Verbs with the gerund"),
    bullet([run("stop, keep, suggest, enjoy, avoid, finish, imagine + verb-ING: Let’s stop burning the hills, keep planting trees!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. If-clauses type 2 and 3"),
    bullet([run("Type 2 (dream now): If people planted trees, there would be more rain. Type 3 (past regret): If people had planted trees, the flood would not have destroyed the village.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. Earth Day"),
    bullet([run("to celebrate, to lecture, to give presentations, to march, a parade — abroad and in Madagascar, same planet, same fight!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 8 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Match the word with its meaning: 1. drought 2. flood 3. deforestation 4. extinction (a. too much water b. the forest disappears c. a species disappears for ever d. a long time without rain).")]),
    pAns("Answers: 1-d, 2-a, 3-b, 4-c.", ["1-d, 2-a, 3-b, 4-c"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Causes or consequences? Sort: smoke from factories / water not drinkable / dumping chemicals / smaller crops / tavy / famine.")]),
    pAns("Answers: causes — smoke from factories, dumping chemicals, tavy; consequences — water not drinkable, smaller crops, famine.", ["causes — smoke"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Answer on the presentation: 1. What are carbon emissions? 2. Why shouldn’t we chop down trees? 3. Give the two solutions.")]),
    pAns("Answers: 1. gases like carbon dioxide or methane that warm up the atmosphere. 2. because trees use carbon dioxide. 3. renewable energy; changing the way we travel.", ["trees use carbon dioxide"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Gerund! Complete: 1. We must stop (cut) … down trees. 2. I suggest (use) … solar energy. 3. Let’s keep (plant) … trees. 4. Avoid (throw) … rubbish in the canal.")]),
    pAns("Answers: 1. cutting 2. using 3. planting 4. throwing.", ["cutting 2. using"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Type 2 or type 3? Complete: 1. If people (plant) … more trees, there (be) … more rain. (dream now) 2. If we (not burn) … the hill last year, the soil (stay) … fertile. (past regret)")]),
    pAns("Answers: 1. planted, would be 2. hadn’t burnt, would have stayed.", ["hadn’t burnt, would have stayed"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Answer on the water text: 1. Which continents often have floods? 2. What gets worse and worse every year in Africa? 3. What can’t people agree about?")]),
    pAns("Answers: 1. Asia, Latin America, Europe. 2. the droughts. 3. the best solutions to global warming.", ["the droughts"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s85", "SESSION 85 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 8: ENVIRONMENT", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name five environmental issues."),
    pAns("E.A.: rubbish everywhere, infertile soil, deforestation, drought, flood.", ["deforestation"]),
    p("2. Give the causes and consequences of water pollution."),
    pAns("E.A.: littering, dumping chemical wastes → water not drinkable, disease.", ["dumping chemical wastes"]),
    p("3. What is the tavy, and what does it lead to?"),
    pAns("E.A.: slash and burn; it leads to deforestation, drought, extinction, famine.", ["slash and burn"]),
    p("4. Say the science chain of climate change."),
    pAns("E.A.: carbon emissions → greenhouse effect → global warming → ice caps melting → sea level rises → flooding.", ["greenhouse effect"]),
    p("5. Say five of the seven tips to protect the environment."),
    pAns("E.A.: stop cutting down trees, plant trees, use solar energy, save water, put litter in bins.", ["plant trees"]),
    p("6. Give four gerund verbs with one example."),
    pAns("E.A.: stop, keep, suggest, avoid — I suggest planting one tree per student!", ["I suggest planting"]),
    p("7. Type 2: the structure and one example."),
    pAns("E.A.: If + past simple → would + verb; If I were the mayor, I would put bins everywhere.", ["would + verb"]),
    p("8. Type 3: the structure and one example."),
    pAns("E.A.: If + had + participle → would have + participle; If we had cleaned the canals, the flood would not have come.", ["would have + participle"]),
    p("9. In the water text: which continents have floods, which have droughts?"),
    pAns("E.A.: Asia, Latin America and Europe — floods; Africa — droughts.", ["Africa — droughts"]),
    p("10. What do people do on Earth Day — and what do we do in Madagascar?"),
    pAns("E.A.: celebrate, lecture, give presentations, march in parades; we plant trees and clean our villages together!", ["march in parades"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s86", "SESSION 86 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 8: ENVIRONMENT", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the word: 1. A long time without rain. 2. Too much water everywhere. 3. The forest disappears. 4. A species disappears for ever.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Cause or consequence? 1. smoke from factories 2. famine 3. dumping chemicals into rivers 4. water not drinkable.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Gerund — complete: 1. We must stop (burn) … the hills. 2. I suggest (plant) … trees. 3. Let’s keep (clean) … the canals. 4. Avoid (waste) … water.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("If-clauses — complete: 1. (type 2) If people … (use) bicycles, the air … (be) cleaner. 2. (type 3) If we … (protect) the forest, the river … (not dry) up.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (4–5 sentences): suggest measures to protect the environment of your town or village. Use at least one gerund, one if-clause and one tip from the unit.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: a drought; a flood; deforestation; extinction. (1 pt each)", ["a drought"]),
    pAns("Ex.2: cause; consequence; cause; consequence. (1 pt each)", ["cause; consequence"]),
    pAns("Ex.3: burning; planting; cleaning; wasting. (1 pt each)", ["burning; planting"]),
    pAns("Ex.4: used, would be; had protected, would not have dried. (2 pts each)", ["had protected"]),
    pAns("Ex.5 (model): To protect our town, I suggest cleaning the canals before the wet season. We must stop throwing rubbish in the river and keep planting trees on the hill. If every family planted one tree a year, our town would be green and cool. And let’s put litter in bins — always! (4 pts: gerund 1, if-clause 1, tip 1, cohesion 1)", ["keep planting trees"]),
  ];
}

module.exports = function unit8() {
  return [
    ...opening(), pageBreak(),
    ...ficheS75(), pageBreak(), ...lessonS75(), pageBreak(),
    ...ficheS76(), pageBreak(), ...lessonS76(), pageBreak(),
    ...ficheS77(), pageBreak(), ...lessonS77(), pageBreak(),
    ...ficheS78(), pageBreak(), ...lessonS78(), pageBreak(),
    ...ficheS79(), pageBreak(), ...lessonS79(), pageBreak(),
    ...ficheS80(), pageBreak(), ...lessonS80(), pageBreak(),
    ...ficheS81(), pageBreak(), ...lessonS81(), pageBreak(),
    ...ficheS82(), pageBreak(), ...lessonS82(), pageBreak(),
    ...ficheS83(), pageBreak(), ...lessonS83(), pageBreak(),
    ...ficheS84(), pageBreak(), ...lessonS84(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 8", COLOR, [
      "I can name the environmental issues of my town and my island.",
      "I can explain causes and consequences: X is caused by Y, X leads to Z.",
      "I can understand a presentation about climate change and global warming.",
      "I can compare the climates of Madagascar and say how they have changed.",
      "I can say the seven tips to protect the environment.",
      "I can suggest measures: planting trees, using green energy.",
      "I can use verbs with the gerund: stop cutting, keep planting.",
      "I can use If-clauses type 2 and type 3.",
      "I can read about the water problems of the world.",
      "I can write conservation rules — and celebrate Earth Day!",
    ], "CONGRATULATIONS → YOU HAVE FINISHED THE 86 SESSIONS OF T9! NEXT: THE ANNEXES!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
