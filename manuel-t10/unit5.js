// T10 — UNIT 5 — THE WEATHER (6 séances + révision + test) — Sessions 36 à 43 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "148F77"; // vert d'eau
const SHADE = "D1F2EB";
const TOTAL = 88;
const AUDIO = {
  forecast: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — THE WEATHER", title, slo,
  values: "self-confidence, altruism", session, materials,
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
function forecastBox() {
  return box("THE WEATHER REPORT (listening passage)", [
    p("Good morning! Here is the weather forecast for Madagascar, for Saturday, June the fifteenth.", { after: 40 }),
    p("In Antananarivo, it is cold and misty this morning: twelve degrees. Take your coat! The mist will clear at ten o’clock, and the afternoon will be sunny but cool.", { after: 40 }),
    p("In Toamasina, it is raining now, and it will rain all day. The wind is blowing from the east. Don’t forget your umbrella and your raincoat!", { after: 40 }),
    p("In Toliara, the sun is shining, as always! Thirty-one degrees this afternoon. Wear a hat and sunglasses, and drink a lot of water.", { after: 40 }),
    p("Tomorrow, the temperature is going to rise everywhere. It is going to be a beautiful, warm Sunday. Enjoy your weekend — and see you tomorrow at seven!", { after: 20 }),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — OUR PLANET HAS A FEVER", [
    p("The Earth is like a big body — and today, this body has a fever. Scientists call it global warming: year after year, the temperature of the planet is rising. The climate is changing everywhere, and Madagascar feels it too.", { after: 40 }),
    p("Why is the planet getting hotter? Because of human activities. Factories and cars burn petrol and send smoke into the air. People cut and burn the forests — and the trees were the air conditioner of the Earth! The smoke makes a blanket around the planet, and the heat cannot leave anymore.", { after: 40 }),
    p("The effects are already here. The rains do not come when the farmers wait for them. The south of our island suffers long droughts, while cyclones hit the east coast harder than before. When the sea gets warmer, the corals turn white and the fish leave.", { after: 40 }),
    p("Is it too late? No — but we must act now. Plant trees. Save water. Walk or ride a bicycle instead of taking a car for short trips. Our planet has a fever; let us be its doctors!", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 5 — THE WEATHER", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("What’s the weather like today?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_weather.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask and answer about the weather: What’s the weather like?;"),
    p("• build the -y adjectives: rain → rainy, wind → windy, mist → misty;"),
    p("• talk about the temperature: it’s rising, it’s dropping;"),
    p("• choose the clothes of the weather: coat, umbrella, sunglasses;"),
    p("• name the seasons here and in English-speaking countries;"),
    p("• read an article about climate change and global warming;"),
    p("• write and present a weather forecast like a TV presenter!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, altruism.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("The weather opens half of the conversations of the world! “Nice day, isn’t it?” — with this unit, you can answer, describe, predict… and understand why our planet needs young doctors like you.", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u5_forecast.png", label: "The weather report — listen and repeat", url: AUDIO.forecast },
    ], COLOR),
  ];
}

// ---------- S36 — Weather words + -y adjectives ----------
function ficheS36() {
  const meta = META("The weather words — the -y adjective machine",
    "By the end of the lesson, learners will be able to name the different weather of Madagascar and build weather adjectives with -y.",
    "1 / 6", "weather flashcards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two suggestions to stay healthy."),
       fp("2. Join: I eat fruit. I drink water. (addition!)")],
      [fp("Answer."),
       fp("E.A.: Sleep eight hours! Wash your hands! — I eat fruit and drink water.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Flashcards of Madagascar weather: the sun of Toliara, the rain of Toamasina, the mist of Antananarivo in June, the wind of the coast… Name what you see — in any English you have!")],
      [fp("Name."),
       fp("E.A.: sun! rain! …")],
      "Using visual aids", "Flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The weather words ». By the end of this lesson, you will answer the most famous question of English: What’s the weather like?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The weather wall: the sun, the rain, the wind, the clouds, the mist, the storm, the snow (yes — on some mountains of the world!). And the question-answer: What’s the weather like? — It’s nice / pleasant / terrible!")],
      [fp("Listen. Repeat."),
       fp("E.A.: What’s the weather like? It’s nice!")],
      "Repetition drill", "Flashcards"),
    stepRow(["4. Analysis"],
      [fp("The magic machine: NOUN + -y = ADJECTIVE! rain → rainy; wind → windy; cloud → cloudy; mist → misty; storm → stormy; snow → snowy; sun → sunny (watch the double n!). It’s a rainy day = It’s raining country-style!")],
      [fp("Observe. Build."),
       fp("E.A.: rainy, windy, cloudy, misty, sunny…")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the seven weather words, the -y machine, and the big question: What’s the weather like? — It’s sunny and pleasant!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (outdoor activity!)"],
      [fp("Everybody to the window (or the yard)! Describe TODAY’S weather in two sentences. Then describe the weather of your dream day!")],
      [fp("Observe the sky. Describe."),
       pAns("E.A.: Today it’s cloudy but warm. My dream day is sunny with a little wind!",
        ["cloudy but warm"], { size: SZ.FICHE })],
      "Outdoor activity", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Build the adjectives: rain, wind, sun, mist."),
       fp("2. Answer: What’s the weather like today?")],
      [fp("Answer."),
       pAns("E.A.: rainy, windy, sunny, misty — It’s sunny and nice!",
        ["sunny"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WEATHER WORDS — THE -Y MACHINE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The big question:", { bold: true })], { after: 30 }),
    vocab("What’s the weather like?", "ouats dhe ouèdheur laïk", "THE question!"),
    vocab("It’s nice / pleasant / terrible!", "its naïce / plèzeunnte / tèribeul"),
    p([run("The -y machine (noun → adjective):", { bold: true })], { after: 30 }),
    vocab("rain → rainy", "réine → réini", "It’s a rainy day."),
    vocab("wind → windy", "ouinnde → ouinndi"),
    vocab("cloud → cloudy", "klaoude → klaoudi"),
    vocab("mist → misty", "miste → misti", "the morning of Antananarivo!"),
    vocab("storm → stormy", "stôrme → stôrmi"),
    vocab("snow → snowy", "snôou → snôoui"),
    vocab("sun → sunny", "seune → seuni", "⚠ double n!"),
    p("", { after: 60 }),
    box("TWO WAYS TO SAY THE SAME SKY", [
      bullet([run("With the adjective: ", { bold: true }), run("It’s rainy today.", { bold: true, color: C.BLUE })]),
      bullet([run("With the present continuous: ", { bold: true }), run("It’s raining right now!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S37 — Temperature + forecast + clothes ----------
function ficheS37() {
  const meta = META("The temperature, the forecast and the clothes",
    "By the end of the lesson, learners will be able to talk about the temperature and match clothing with the weather.",
    "2 / 6", "clothes flashcards, thermometer drawing");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Build: cloud → ?, storm → ?"),
       fp("2. What’s the weather like today?")],
      [fp("Answer."),
       fp("E.A.: cloudy, stormy — It’s…!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I draw a thermometer on the board: 5°, 15°, 25°, 35°. For each level, mime how you feel! Brrr… or pfff…?")],
      [fp("Mime.")], "Using gestures", "Thermometer drawing"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The temperature, the forecast and the clothes ». By the end of this lesson, you will read the sky like a farmer and dress like a pro!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The temperature talk: What’s the temperature? — It’s twelve degrees. The temperature is rising / going up (it gets hotter) — falling / dropping (it gets colder). And the forecast question: What’s the weather forecast? — It’s partly cloudy; it will rain tomorrow.")],
      [fp("Listen. Repeat."),
       fp("E.A.: the temperature is rising; it’s partly cloudy.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Clothes matching! Rainy day → an umbrella, a raincoat. Sunny hot day → a hat, sunglasses. Cold misty morning → a coat, a scarf. Windy day → hold your hat! Each flashcard finds its weather!")],
      [fp("Match."),
       fp("E.A.: umbrella → rain; sunglasses → sun; coat → cold.")],
      "Matching", "Clothes flashcards"),
    stepRow(["5. Synthesis"],
      [fp("So: the temperature machine (rising/dropping), the forecast question, and the clothes of each sky. Weather + clothes = one single lesson in real life!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The suitcase game! “Tomorrow you travel to Antsiranana: hot and windy.” Each student packs THREE things and justifies: I take my hat because it’s sunny…")],
      [fp("Pack. Justify."),
       pAns("E.A.: I take sunglasses, a hat and a bottle of water, because it’s hot and sunny!",
        ["because it’s hot and sunny"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What’s the temperature today (your guess!)? Rising or dropping tonight?"),
       fp("2. Your friend goes out: it’s rainy and cold. Two clothes to take!")],
      [fp("Answer."),
       pAns("E.A.: About 20 degrees; dropping tonight! — An umbrella and a warm coat.",
        ["An umbrella"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE TEMPERATURE, THE FORECAST AND THE CLOTHES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_clothes.png", 400, 768 / 1376),
    p([run("The temperature talk:", { bold: true })], { after: 30 }),
    vocab("What’s the temperature?", "ouats dhe tèmpretcheur"),
    vocab("It’s twelve degrees.", "its touèlve digriz"),
    vocab("The temperature is rising / going up.", "ize raïzinng / gôouinng eupe", "il fait de plus en plus chaud"),
    vocab("The temperature is falling / dropping.", "ize fôlinng / dropinng", "il fait de plus en plus froid"),
    p([run("The forecast:", { bold: true })], { after: 30 }),
    vocab("What’s the weather forecast?", "ouats dhe ouèdheur fôrkaste", "la météo de demain ?"),
    vocab("It’s partly cloudy.", "its partli klaoudi", "partiellement nuageux"),
    p([run("The clothes of the weather:", { bold: true })], { after: 30 }),
    vocab("an umbrella / a raincoat", "ane eummbrèla / e réinkôoute", "☔ rainy day"),
    vocab("a hat / sunglasses", "e hate / seunglassiz", "😎 sunny day"),
    vocab("a coat / a scarf", "e kôoute / e skarf", "🧣 cold morning"),
    p("", { after: 60 }),
    box("THE MINI DIALOGUE", [
      bullet([run("A — ", { bold: true, color: COLOR }), run("What’s the weather forecast for tomorrow?")]),
      bullet([run("B — ", { bold: true, color: COLOR }), run("Partly cloudy, and the temperature is dropping.")]),
      bullet([run("A — ", { bold: true, color: COLOR }), run("Then I’ll take my coat!")], { after: 20 }),
    ]),
  ];
}

// ---------- S38 — Listening: the weather report ----------
function ficheS38() {
  const meta = META("Listening: the weather report",
    "By the end of the lesson, learners will be able to infer information from short weather reports.",
    "3 / 6", "audio (QR code) or report read aloud, map of Madagascar");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The temperature goes from 25° to 15°: rising or dropping?"),
       fp("2. Two clothes for a rainy day.")],
      [fp("Answer."),
       fp("E.A.: dropping — umbrella, raincoat.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Look at the map of Madagascar. In June: where is it misty? where is it hot? where does it rain a lot? Your guesses!")],
      [fp("Guess."),
       fp("E.A.: misty in Tana, hot in Toliara, rainy in Toamasina.")],
      "Using visual aids", "Map"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « The weather report ». By the end of this lesson, you will catch a real forecast — city by city, degree by degree!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and complete the table: CITY / WEATHER NOW / TEMPERATURE / ADVICE. Antananarivo? Toamasina? Toliara? Compare your table with your neighbour!")],
      [fp("Listen. Complete. Compare."),
       pAns("E.A.: Tana: cold + misty, 12°, take your coat; Toamasina: raining + windy, umbrella + raincoat; Toliara: sunny, 31°, hat + sunglasses + water.",
        ["12°"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis (post-listening)"],
      [fp("Inference! The report says “In Toliara, the sun is shining, AS ALWAYS” — what does “as always” tell us about Toliara? And “the mist WILL CLEAR at ten” — is the morning or the afternoon better for a football match in Tana?")],
      [fp("Infer."),
       fp("E.A.: Toliara is almost always sunny! — the afternoon (sunny after the mist clears).")],
      "Inference", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: a weather report = city + weather now (present continuous!) + temperature + advice + tomorrow (will / going to). Keep this skeleton — you will WRITE one in Session 41!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Repeat the Toamasina paragraph with the audio — same rhythm! Then one student reads it like a TV presenter, with the map!")],
      [fp("Repeat. Present."),
       pAns("E.A.: In Toamasina, it is raining now… (with the presenter voice!)",
        ["it is raining now"], { size: SZ.FICHE })],
      "Repetition drill", "Audio / QR"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Where is it 31 degrees, and what must you wear?"),
       fp("2. What is going to happen to the temperature tomorrow?")],
      [fp("Answer."),
       pAns("E.A.: In Toliara — a hat and sunglasses. — It is going to rise everywhere.",
        ["going to rise"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WEATHER REPORT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    forecastBox(),
    p("", { after: 60 }),
    box("THE REPORT TABLE", [
      bullet([run("Antananarivo: ", { bold: true }), run("cold and misty, 12° — take your coat!", { bold: true, color: C.BLUE })]),
      bullet([run("Toamasina: ", { bold: true }), run("raining, windy — umbrella and raincoat!", { bold: true, color: C.BLUE })]),
      bullet([run("Toliara: ", { bold: true }), run("sunny, 31° — hat, sunglasses, water!", { bold: true, color: C.BLUE })]),
      bullet([run("Tomorrow: ", { bold: true }), run("the temperature is going to rise everywhere.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u5_forecast.png", label: "The weather report — listen and repeat", url: AUDIO.forecast }], COLOR),
  ];
}

// ---------- S39 — Seasons here and there + weather grammar ----------
function ficheS39() {
  const meta = META("The seasons, here and there — the weather grammar",
    "By the end of the lesson, learners will be able to name the seasons in Madagascar and in English-speaking countries and use the present continuous and the future with weather expressions.",
    "4 / 6", "season pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete the report: In Toamasina, it … (rain) now."),
       fp("2. Tomorrow the temperature … (go) to rise.")],
      [fp("Answer."),
       fp("E.A.: is raining — is going.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Question: when it is winter in London… what season is it in Antananarivo? Think! (Surprise: the planet has two halves!)")],
      [fp("Think. Guess."),
       fp("E.A.: summer! The seasons are opposite!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The seasons, here and there ». By the end of this lesson, you will travel through the four seasons — and conjugate the sky!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The four seasons of English-speaking countries: winter (cold, snowy!), spring (flowers), summer (hot), autumn — the Americans say FALL (the leaves fall!). And Madagascar? Two big seasons: the hot rainy season (November-April) and the cool dry season (May-October). And the snow? Only on far mountains — it’s snowing in London, not in Tana!")],
      [fp("Observe. Compare."),
       fp("E.A.: four seasons there, two big seasons here; autumn = fall in the USA.")],
      "Using visual aids", "Season pictures"),
    stepRow(["4. Analysis"],
      [fp("The weather grammar machine: NOW → present continuous: It’s raining. It’s snowing in London. TOMORROW → will or be going to: It will rain tomorrow. It’s going to be sunny. The sky conjugates like a verb!")],
      [fp("Observe. Build."),
       fp("E.A.: it’s raining (now); it will rain / it’s going to rain (tomorrow).")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: four seasons there (winter, spring, summer, autumn/fall), two big seasons here, opposite halves of the planet — and the grammar: present continuous for NOW, will / going to for TOMORROW.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Season quiz in pairs: A says a month + a country (July in London? January in Tana?), B gives the season and one weather sentence!")],
      [fp("Quiz."),
       pAns("E.A.: July in London → summer, it’s warm! January in Tana → hot rainy season, it’s raining a lot!",
        ["hot rainy season"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the four seasons (with the American word for autumn)."),
       fp("2. Complete: Look! It … (snow)! — Tomorrow it … (be) sunny (deux façons!).")],
      [fp("Answer."),
       pAns("E.A.: winter, spring, summer, autumn/fall — is snowing; will be / is going to be.",
        ["is snowing"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LESSON OF THE DAY — SESSION 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SEASONS — THE WEATHER GRAMMAR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The four seasons (English-speaking countries):", { bold: true })], { after: 30 }),
    vocab("winter", "ouinnteur", "cold — it’s snowing!"),
    vocab("spring", "sprinng", "the flowers come back"),
    vocab("summer", "seumeur", "hot!"),
    vocab("autumn (GB) / fall (US)", "ôteume / fôl", "the leaves fall!"),
    p([run("The seasons of Madagascar:", { bold: true })], { after: 30 }),
    vocab("the hot rainy season", "dhe hote réini sizeune", "November → April"),
    vocab("the cool dry season", "dhe koule draï sizeune", "May → October"),
    p("", { after: 60 }),
    box("THE PLANET’S SECRET", [
      bullet([run("The two halves of the planet are OPPOSITE: ", { bold: true }), run("winter in London = summer in Antananarivo!", { bold: true, color: C.BLUE })]),
      bullet([run("It’s snowing in London — but no snow in Tana!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE WEATHER GRAMMAR MACHINE", [
      bullet([run("NOW → present continuous: ", { bold: true }), run("It’s raining. The wind is blowing.", { bold: true, color: C.BLUE })]),
      bullet([run("TOMORROW → will / be going to: ", { bold: true }), run("It will rain. It’s going to be sunny.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S40 — Reading: global warming ----------
function ficheS40() {
  const meta = META("Reading: our planet has a fever",
    "By the end of the lesson, learners will be able to skim and scan an article about climate change and identify causes and effects of global warming.",
    "5 / 6", "reading article (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The four seasons + the American “autumn”."),
       fp("2. Complete: Tomorrow it … rain (prediction).")],
      [fp("Answer."),
       fp("E.A.: winter, spring, summer, autumn = fall — will.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("List all the weather and climate words you already know — one minute, board race! Then the title: « Our planet has a fever ». Predict: what is the article about?")],
      [fp("List. Predict."),
       fp("E.A.: rain, sunny, temperature… — the planet is getting hotter!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « Our planet has a fever ». By the end of this lesson, you will understand global warming — its causes, its effects, and our medicines!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("STEP 1 — SKIM: read fast, 30 seconds, just for the main idea. One sentence: what is the article about? STEP 2 — SCAN: find fast the specific words: who has a fever? what do factories burn? what happens in the south of Madagascar?")],
      [fp("Skim. Scan."),
       pAns("E.A.: Main idea: the planet is warming because of human activities, and we must act. — The Earth; petrol; long droughts.",
        ["long droughts"], { size: SZ.FICHE })],
      "Skimming / Scanning", "Reading article"),
    stepRow(["4. Analysis (post-reading)"],
      [fp("The cause-effect table! CAUSES: smoke of factories and cars, cutting and burning the forests. EFFECTS: rains come late, droughts in the south, stronger cyclones, white corals. Infer the meaning of “drought” and “blanket” from the context. Then DRAW: each group draws one cause or one effect, the class chooses the picture that best represents the text and explains why!")],
      [fp("Classify. Infer. Draw."),
       fp("E.A.: drought = long time without rain; blanket = the cover of the bed — the smoke covers the planet!")],
      "Contextualisation", "Slates / sheets"),
    stepRow(["5. Synthesis"],
      [fp("So: global warming = the fever of the planet; the causes are human; the effects touch Madagascar (droughts, cyclones); and the medicines exist: plant, save, walk!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Share and compare: which “medicine” of the text can OUR class do this month? Vote and plan it!")],
      [fp("Discuss. Vote."),
       pAns("E.A.: Plant trees behind the school! Save the water of the pump!",
        ["Plant trees"], { size: SZ.FICHE })],
      "Group discussion", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two causes and two effects of global warming."),
       fp("2. Why does the text call the trees “the air conditioner of the Earth”?"),
       fp("3. Give the three medicines of the last paragraph.")],
      [fp("Answer."),
       pAns("E.A.: Causes: smoke, cutting forests; effects: droughts, cyclones. — Because they cool the planet. — Plant trees, save water, walk or ride a bicycle.",
        ["the air conditioner"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LESSON OF THE DAY — SESSION 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: OUR PLANET HAS A FEVER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("global warming", "glôoubal ouormingue", "the fever of the planet"),
    vocab("climate change", "klaïmeute tchéinndje"),
    vocab("a drought", "e draoute", "long time without rain"),
    vocab("a blanket", "e blannkeute", "the cover of the bed — here: the smoke!"),
    p("", { after: 60 }),
    box("CAUSES → EFFECTS", [
      bullet([run("Causes: ", { bold: true }), run("the smoke of factories and cars; cutting and burning the forests.", { bold: true, color: C.BLUE })]),
      bullet([run("Effects: ", { bold: true }), run("late rains, droughts in the south, stronger cyclones, white corals.", { bold: true, color: C.BLUE })]),
      bullet([run("Medicines: ", { bold: true }), run("plant trees, save water, walk or ride a bicycle!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE READER’S TOOLS", [
      bullet([run("SKIM ", { bold: true, color: C.BLUE }), run("= read fast for the MAIN idea (30 seconds!).")]),
      bullet([run("SCAN ", { bold: true, color: C.BLUE }), run("= search fast for ONE specific information (a number, a name).")], { after: 20 }),
    ]),
  ];
}

// ---------- S41 — Writing: my weather forecast ----------
function ficheS41() {
  const meta = META("Writing: my weather forecast — the TV presenter",
    "By the end of the lesson, learners will be able to write a simulated weather forecast and present it like a TV presenter.",
    "6 / 6", "map of Madagascar, weather flashcards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Two causes of global warming."),
       fp("2. SKIM or SCAN: I search the temperature of Toliara in the text?")],
      [fp("Answer."),
       fp("E.A.: smoke, deforestation — scan!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Depict the weather flashcards: this card → “It’s raining, 18 degrees.” That card → “Sunny, 30 degrees!” Fast, five cards!")],
      [fp("Depict.")], "Using visual aids", "Flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My weather forecast ». By the end of this lesson, you will BE the TV presenter of Madagascar!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The organisation of a forecast (remember Session 38!): 1. Hello + day. 2. PLACE → weather now (present continuous) → temperature → advice (imperative!). 3. Tomorrow (will / going to). 4. Goodbye. Three places minimum!")],
      [fp("Observe."),
       fp("E.A.: place, weather, temperature — the PE order!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write your forecast for THREE Malagasy cities (choose them!). Use: two -y adjectives, one present continuous, one will, one going to, one clothing advice. I walk around and help.")],
      [fp("Write the forecast.")],
      "Individual work", "Map"),
    stepRow(["5. Synthesis (post-writing)"],
      [fp("Grammar check in pairs: underline the -y adjectives, circle the continuous, box the futures. Then correct kindly!")],
      [fp("Check. Correct.")], "Peer correction", "----"),
    stepRow(["6. Practice (SIMULATION!)"],
      [fp("TV TIME! The desk becomes the studio, the map goes on the wall. Three or four students present their forecast like on TV — presenter voice, gestures on the map, smile! The class is the audience.")],
      [fp("Present like on TV!"),
       pAns("E.A.: Good evening Madagascar! In Mahajanga, the sun is shining, 29 degrees… Tomorrow it’s going to be windy. See you tomorrow at seven!",
        ["Good evening Madagascar!"], { size: SZ.FICHE })],
      "Simulation", "Map + studio desk"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected forecast in your copy-book."),
       fp("2. Underline the two futures with two colours (will / going to).")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}
function lessonS41() {
  return [
    p([run("LESSON OF THE DAY — SESSION 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY WEATHER FORECAST", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FORECAST PLAN", [
      bullet([run("1. Hello + the day: ", { bold: true }), run("Good evening! Here is the forecast for Friday…", { bold: true, color: C.BLUE })]),
      bullet([run("2. Place → weather now → temperature → advice: ", { bold: true }), run("In Mahajanga, the sun is shining, 29 degrees — wear a hat!", { bold: true, color: C.BLUE })]),
      bullet([run("3. Tomorrow: ", { bold: true }), run("it will rain in the east; it’s going to be windy in the north.", { bold: true, color: C.BLUE })]),
      bullet([run("4. Goodbye: ", { bold: true }), run("Enjoy your evening — see you tomorrow at seven!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model forecast:", { bold: true })], { after: 50 }),
    p("Good evening, Madagascar! Here is the weather forecast for Friday. In Antsirabe, it is misty and cold: only ten degrees — take your scarf! In Morondava, it’s sunny and the sky is clear, twenty-eight degrees at the beach. In Toamasina, it is raining right now, and the wind is blowing: don’t forget your raincoat! Tomorrow, the temperature is going to rise, and it will be a sunny Saturday almost everywhere. Enjoy your evening — see you tomorrow at seven!", { after: 80 }),
    box("THE PRESENTER’S CHECK-LIST", [
      bullet([run("Two -y adjectives ✓ one present continuous ✓ one will ✓ one going to ✓ one clothing advice ✓", { bold: true, color: C.BLUE })]),
      bullet([run("And on TV: loud voice, hand on the map, big smile!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 5", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The weather words and the -y machine"),
    bullet([run("What’s the weather like? — It’s nice / terrible!", { bold: true, color: C.BLUE })]),
    bullet([run("rain→rainy, wind→windy, cloud→cloudy, mist→misty, storm→stormy, snow→snowy, sun→sunny (nn!).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The temperature and the forecast"),
    bullet([run("What’s the temperature? It’s 12 degrees. Rising / going up ↔ falling / dropping.", { bold: true, color: C.BLUE })]),
    bullet([run("What’s the weather forecast? — It’s partly cloudy; it will rain tomorrow.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The clothes of the weather"),
    bullet([run("rain → umbrella, raincoat; sun → hat, sunglasses; cold → coat, scarf.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The seasons"),
    bullet([run("There: winter, spring, summer, autumn (GB) / fall (US). Here: hot rainy season, cool dry season. The two halves of the planet are opposite!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The weather grammar"),
    bullet([run("NOW → It’s raining. TOMORROW → It will rain / It’s going to be sunny.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Global warming"),
    bullet([run("Causes: smoke, deforestation. Effects: droughts, cyclones. Medicines: plant, save, walk!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 5 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Build the adjective: 1. rain 2. sun 3. mist 4. storm 5. wind.")]),
    pAns("Answers: 1. rainy. 2. sunny (double n!). 3. misty. 4. stormy. 5. windy.", ["sunny (double n!)"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete: 1. What’s the weather …? 2. The temperature is … (monte). 3. What’s the weather … for tomorrow? 4. It’s partly … .")]),
    pAns("Answers: 1. like. 2. rising / going up. 3. forecast. 4. cloudy.", ["forecast"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Choose the clothes: 1. It’s raining → ? 2. 32 degrees and sunny → ? 3. Cold misty morning → ?")]),
    pAns("Answers: 1. an umbrella and a raincoat. 2. a hat and sunglasses. 3. a coat and a scarf.", ["a coat and a scarf"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Present continuous or future? 1. Look! It … (snow). 2. Tomorrow it … (rain) — prediction. 3. The sky is black: it … (rain) — intention of the sky! 4. Listen! The wind … (blow).")]),
    pAns("Answers: 1. is snowing. 2. will rain. 3. is going to rain. 4. is blowing.", ["is going to rain"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the article: 1. Give two causes of global warming. 2. Give two effects in Madagascar. 3. What are the seasons when it is winter in London and when it is summer in Tana?")]),
    pAns("Answers: 1. The smoke of factories/cars, deforestation. 2. Droughts in the south, stronger cyclones. 3. The same moment: winter there = summer here!", ["winter there = summer here"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s42", "SESSION 42 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: THE WEATHER", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The big question of the weather — and two possible answers."),
    pAns("E.A.: What’s the weather like? — It’s nice! It’s terrible!", ["What’s the weather like?"]),
    p("2. Build seven -y adjectives from: rain, wind, cloud, mist, storm, snow, sun."),
    pAns("E.A.: rainy, windy, cloudy, misty, stormy, snowy, sunny.", ["sunny"]),
    p("3. The temperature goes from 15° to 24°: two ways to say it."),
    pAns("E.A.: the temperature is rising / going up.", ["rising / going up"]),
    p("4. Ask the forecast and answer with “partly”."),
    pAns("E.A.: What’s the weather forecast? — It’s partly cloudy.", ["partly cloudy"]),
    p("5. Pack for: a rainy day; a 32-degree day; a misty morning."),
    pAns("E.A.: umbrella + raincoat; hat + sunglasses; coat + scarf.", ["umbrella + raincoat"]),
    p("6. The four seasons — and the American word for autumn."),
    pAns("E.A.: winter, spring, summer, autumn — fall.", ["fall"]),
    p("7. When it is winter in London, what season is it here, and why?"),
    pAns("E.A.: summer — the two halves of the planet are opposite.", ["opposite"]),
    p("8. Conjugate the sky: now it … (rain); tomorrow it … (be) sunny (two ways)."),
    pAns("E.A.: is raining; will be / is going to be sunny.", ["will be / is going to be"]),
    p("9. In the report: the three cities and one information each."),
    pAns("E.A.: Tana 12° misty; Toamasina raining; Toliara 31° sunny.", ["Toliara 31° sunny"]),
    p("10. Global warming: one cause, one effect, one medicine."),
    pAns("E.A.: deforestation → droughts → plant trees!", ["plant trees!"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s43", "SESSION 43 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 5: THE WEATHER", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Build the adjective: 1. wind 2. sun 3. cloud 4. mist.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. What’s the weather …? 2. It’s twelve … . 3. The temperature is … (descend). 4. What’s the weather … for tomorrow?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Present continuous, will or going to? 1. Look at the black clouds! It … (rain). 2. Listen! The wind … (blow). 3. I think it … (be) sunny tomorrow. 4. The forecast says the temperature … (rise) — c’est prévu !")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer: 1. The four seasons in Great Britain. 2. The American word for autumn. 3. The two big seasons of Madagascar. 4. Winter in London = which season in Tana?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a weather forecast (5 sentences) for two Malagasy cities: weather now (present continuous), temperature, one clothing advice, and tomorrow (will or going to).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: windy — sunny — cloudy — misty. (1 pt each)", ["windy — sunny"]),
    pAns("Ex.2: like — degrees — falling / dropping — forecast. (1 pt each)", ["degrees"]),
    pAns("Ex.3: is going to rain — is blowing — will be — is going to rise. (1 pt each)", ["is going to rain"]),
    pAns("Ex.4: winter, spring, summer, autumn — fall — hot rainy season, cool dry season — summer. (1 pt each)", ["cool dry season"]),
    pAns("Ex.5 (model): Good morning! In Fianarantsoa, it is misty and cold: nine degrees — wear a warm coat! In Toliara, the sun is shining: thirty degrees. Tomorrow, it is going to be sunny everywhere, and the temperature will rise. Have a nice day! (4 pts: continuous 1, future 1, advice 1, coherence 1)", ["wear a warm coat!"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS36(), pageBreak(), ...lessonS36(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...ficheS39(), pageBreak(), ...lessonS39(), pageBreak(),
    ...ficheS40(), pageBreak(), ...lessonS40(), pageBreak(),
    ...ficheS41(), pageBreak(), ...lessonS41(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can ask and answer: What’s the weather like?",
      "I can build the -y adjectives: rainy, windy, sunny.",
      "I can talk about the temperature: rising, dropping, twelve degrees.",
      "I can choose the clothes of the weather.",
      "I can name the seasons here and in English-speaking countries.",
      "I can conjugate the sky: it’s raining now; it will rain tomorrow.",
      "I can skim and scan an article.",
      "I can explain the causes and effects of global warming.",
      "I can write and present a weather forecast like a TV presenter!",
    ], "NEXT STOP → UNIT 6: NARRATING A PAST EVENT!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
