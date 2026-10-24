// T11 — UNIT 3 — MASS MEDIA (6 séances + révision + test) — Sessions 19 à 26 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell,
        rubricBadge, rubricTable } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B9770E"; // ocre
const SHADE = "FDEBD0";
const TOTAL = 86;
const AUDIO = {
  // Liens Drive à insérer dès la création du dossier T11 (MP3 de sauvegarde: manuel-t11/audio/)
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 3 — MASS MEDIA", title, slo,
  values: "critical thinking, honesty", session, materials,
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
      new TableRow({ children: [cell(children, {})] }),
    ],
  });
}
function newsBulletinBox() {
  const L = (who, text) => bullet([run("— " + who + ": ", { bold: true, color: C.RED }),
    run(text, { bold: true, color: C.BLUE })]);
  return box("RADIO VAOVAO — THE SEVEN O’CLOCK NEWS", [
    L("Presenter", "Good evening, Madagascar! Here is the seven o’clock news, read by Naly Rakoto."),
    L("Naly", "First, the weather. A strong storm has reached the east coast. The reporter who travelled to Toamasina says the fishermen stayed at home today."),
    L("Naly", "In sports now! The Barea have won their match against the Comoros, two to one. Thousands of supporters, who waited in the rain, sang until midnight!"),
    L("Naly", "And finally, education. A new library has opened in Fianarantsoa — a building which holds ten thousand books. The students whose schools are far away can now read at the weekend."),
    L("Presenter", "Thank you, Naly! Stay with us: after the break, our reporter interviews a farmer whose rice fields survived the storm."),
  ]);
}
function readingArticleBox() {
  return box("FROM OUR NEWSPAPER — YOUNG REPORTERS SAVE THE SCHOOL GARDEN", [
    p([run("MIDI MADA — ANTSIRABE. ", { bold: true }), run("The vegetable garden of the lycée of Antsirabe is alive again, thanks to a group of students who call themselves “the Young Reporters”.")], { after: 60 }),
    p("Last month, the garden, which feeds the school canteen, was dying: no water, broken fences, zebu visits every night! The Young Reporters wrote an article in the school newspaper. They interviewed the gardener, whose photo appeared on the front page, and they asked one simple question: who will help?", { after: 60 }),
    p("The answer came fast. Parents repaired the fences. A local company, which sells pumps at the market, offered a water tank. Even the mayor visited the garden — with twenty young trees!", { after: 60 }),
    p("“A small article can move a big mountain,” says Hanta, the editor whose idea started everything. “We just told the truth — and the readers did the rest.”", { after: 40 }),
  ]);
}
function opening() {
  return [
    unitBanner("UNIT 3 — MASS MEDIA", COLOR, "unit3"),
    p("", { after: 100 }),
    p([run("Who tells you the news? Check twice!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u3_media.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the news sources: newspaper, radio, TV, online media;"),
    p("• build the job words with the word factory: report → reporter;"),
    p("• listen to a radio news bulletin and catch the headlines;"),
    p("• describe people and things with the relatives: who, which, where, whose;"),
    p("• read a newspaper article — and decode the grammar of the headlines;"),
    p("• write my own short article with its headline.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("critical thinking, honesty.")], { after: 160 }),
    rubricTable(
      "The news sources (newspaper, radio, TV, online media); the word factory verb + -er (report → reporter, read → reader).",
      "Talking about the news; comparing the sources; spotting reliable news and fake news.",
      "The relative pronouns who, which, where, whose; the special grammar of the headlines."
    ),
    p("", { after: 100 }),
    box("WHY THIS UNIT?", [
      p("News runs faster than a taxi-brousse: radio in the morning, TV at night, and the phone all day long! But who checks the facts? In this unit you learn to name the sources, to question them — and to write the news yourself. A good reader of news is a free citizen!", { after: 40 }),
    ]),
  ];
}

// ---------- S19 — The news sources and the word factory ----------
function ficheS19() {
  const meta = META("The news sources and the word factory (verb + -er)",
    "By the end of the lesson, learners will be able to name the main news sources and build the media job words with the suffix -er.",
    "1 / 6", "pictures of media, word cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From Unit 2: give your opinion about social media — with a reason!")],
      [fp("Answer."),
       fp("E.A.: In my opinion, social media is useful, because the news arrives fast.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Morning survey: how did the news enter YOUR house this morning? Radio? TV? The phone? The neighbour?! Count the answers on the board.")],
      [fp("Answer. Count."),
       fp("E.A.: radio 12, phone 8, TV 5, the neighbour 4!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The news sources ». By the end of this lesson, you will name all the doors of the news — and the people who work behind them.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Media map on the board: PRINT (newspaper, magazine) — AUDIO (radio) — SCREEN (TV, online media, social media). For each source, one question: how fast is it? how sure is it? The neighbour is fast… but is he sure?")],
      [fp("Observe. Compare."),
       fp("E.A.: the radio is fast and quite sure; social media is very fast but not always sure…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The word factory: verb + -er = the person! report → a reporter; read → a reader; publish → a publisher; present → a presenter; edit → an editor (watch the spelling!). And the place words: a newsroom, a printing house, a studio.")],
      [fp("Build the words."),
       fp("E.A.: reporter, reader, publisher, presenter, editor.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the news has many doors — print, audio, screen — and one factory of jobs: verb + -er. The reporter reports, the editor edits, the reader… checks twice!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Who am I? One student draws a job card (reporter, presenter, editor, publisher, reader) and mimes or defines it in English; the class guesses. Then pairs sort the source cards: fast/slow, sure/not sure.")],
      [fp("Mime. Guess. Sort."),
       pAns("E.A.: I travel, I ask questions, I write what I see… — A reporter!",
        ["A reporter!"], { size: SZ.FICHE })],
      "Guessing game", "Job cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three families of news sources with one example each."),
       fp("2. Word factory: present → ? publish → ? read → ?"),
       fp("3. Which source is the fastest — and which is the surest?")],
      [fp("Answer."),
       pAns("E.A.: print: newspaper; audio: radio; screen: TV / online. — presenter, publisher, reader. — Social media is the fastest; a serious newspaper or radio is surer.",
        ["presenter"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(19, TOTAL, meta, rows, "s19");
}
function lessonS19() {
  return [
    p([run("LESSON OF THE DAY — SESSION 19", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE NEWS SOURCES AND THE WORD FACTORY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("VOCABULARY"),
    p([run("The three families of sources:", { bold: true })], { after: 50 }),
    vocab("a newspaper / a magazine", "e niouze-péipeur / e magazine", "the print family"),
    vocab("the radio", "dhe réidiô", "the audio family — fast and everywhere"),
    vocab("TV / online media", "tivi / one-laïne midia", "the screen family"),
    vocab("social media", "sôoucheul midia", "very fast… check twice!"),
    vocab("the news", "dhe niouze", "always singular: the news IS good!"),
    vocab("a headline", "e hèdlaïne", "the big title of the article"),
    p("", { after: 60 }),
    p([run("The word factory — verb + -er = the person:", { bold: true })], { after: 50 }),
    vocab("report → a reporter", "riporte → e riporteur", "he travels and tells the facts"),
    vocab("present → a presenter", "prizènte → e prizènteur", "the voice of the studio"),
    vocab("publish → a publisher", "pablich → e pablicheur", "he prints the newspaper"),
    vocab("edit → an editor", "èdite → eune èditeur", "he chooses and corrects"),
    vocab("read → a reader", "ride → e rideur", "YOU — the last judge!"),
    p("", { after: 60 }),
    box("CRITICAL THINKING CORNER", [
      p("Fast is not always true. Before you share a news story, ask the three questions: Who says it? Where was it said first? Do two serious sources say the same?", { after: 40 }),
    ]),
  ];
}

// ---------- S20 — Talking about the news / reliable or fake? ----------
function ficheS20() {
  const meta = META("Talking about the news — reliable or fake?",
    "By the end of the lesson, learners will be able to talk about the news, say where it comes from and discuss if a source is reliable.",
    "2 / 6", "two news cards (one true, one fake)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Word factory: give the person for report, edit, present — and the three families of sources.")],
      [fp("Answer."),
       fp("E.A.: reporter, editor, presenter — print, audio, screen.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Two cards on the board: A. “A new bridge opens in Mahajanga next month (Radio Nationale).” B. “A crocodile was seen flying over Tana!!! (shared 5,000 times)”. Which one do you believe — and why?")],
      [fp("Choose. Explain."),
       fp("E.A.: A! A flying crocodile is impossible, and card B has no serious source…")],
      "Problem-solving", "News cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Talking about the news ». By the end of this lesson, you will share a news story in English — and smell a fake one from far away!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model mini-dialogue: — Have you heard the news? — No, what happened? — According to the radio, the Barea have won! — Really? Where did you hear that? — On Radio Nationale, this morning. Underline the questions and the source expressions.")],
      [fp("Observe. Underline."),
       fp("E.A.: Have you heard…? What happened? Where did you hear that? — according to the radio, on Radio Nationale.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Three toolboxes: 1. SHARE: Have you heard the news? Guess what! It is said that…; 2. SOURCE: according to + the source, I heard it on the radio, I read it in the newspaper; 3. CHECK: Where did you hear that? Is the source reliable? It sounds like fake news! Note: according to the radio ✔ — according to me ✘ (Unit 2!).")],
      [fp("Build the toolboxes."),
       fp("E.A.: share / source / check — and according to me stays forbidden!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: share the news with Have you heard…?, give the source with according to…, check with Where did you hear that? A good citizen carries the news AND its source!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("News market: each pair receives a mini news card (sport, weather, school, village). Student A shares it with the toolboxes; student B checks the source; then they swap. Bonus round: one card is a hidden fake — who smells it?")],
      [fp("Share. Check. Swap."),
       pAns("E.A.: Have you heard the news? According to Midi Mada, the library opens on Monday. — Where did you hear that? — I read it in the newspaper!",
        ["according to"], { size: SZ.FICHE })],
      "Pair work — game", "News cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Share a news story with the right opener."),
       fp("2. Give the source in two different ways."),
       fp("3. Give two signs of fake news.")],
      [fp("Answer."),
       pAns("E.A.: Have you heard the news? … — According to the radio… / I read it in the newspaper. — No serious source + too incredible (a flying crocodile!).",
        ["Have you heard the news?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(20, TOTAL, meta, rows, "s20");
}
function lessonS20() {
  return [
    p([run("LESSON OF THE DAY — SESSION 20", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("TALKING ABOUT THE NEWS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    p([run("1. To share the news:", { bold: true })], { after: 50 }),
    vocab("Have you heard the news?", "have iou heurde dhe niouze", "the classic opener"),
    vocab("Guess what!", "guèsse ouate", "the exciting opener"),
    vocab("It is said that…", "ite iz sède dhate", "careful: nobody is named!"),
    p("", { after: 60 }),
    p([run("2. To give the source:", { bold: true })], { after: 50 }),
    vocab("according to the radio…", "ekordinng tou dhe réidiô", "according to + the source"),
    vocab("I heard it on the radio.", "aï heurde ite one dhe réidiô", ""),
    vocab("I read it in the newspaper.", "aï rède ite ine dhe niouze-péipeur", ""),
    p("", { after: 60 }),
    p([run("3. To check the news:", { bold: true })], { after: 50 }),
    vocab("Where did you hear that?", "ouère dide iou hire dhate", "the detective question"),
    vocab("Is the source reliable?", "iz dhe sorse rilaïebeul", "reliable = you can trust it"),
    vocab("It sounds like fake news!", "ite saoundze laïke féike niouze", ""),
    p("", { after: 60 }),
    box("THE THREE QUESTIONS OF THE READER-DETECTIVE", [
      bullet([run("1. Who says it? ", { bold: true }), run("a name, a radio, a newspaper — or nobody?", { bold: true, color: C.BLUE })]),
      bullet([run("2. Where was it said first? ", { bold: true }), run("a serious source or a simple share?", { bold: true, color: C.BLUE })]),
      bullet([run("3. Do two serious sources agree? ", { bold: true }), run("one source = half a news!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S21 — Listening: the radio news bulletin ----------
function ficheS21() {
  const meta = META("Listening: Radio Vaovao — the seven o’clock news",
    "By the end of the lesson, learners will be able to catch the gist and the details of a radio news bulletin.",
    "3 / 6", "audio (QR code) or bulletin read aloud, picture of a radio studio");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Share a news story and give its source.")],
      [fp("Answer."),
       fp("E.A.: Have you heard the news? According to the radio, …")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("The sound of the news: hum the jingle of the radio news! Then predict: a bulletin has how many stories? Which topics come often?")],
      [fp("Hum. Predict."),
       fp("E.A.: three or four stories — weather, sport, politics, school…")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Radio Vaovao — the seven o’clock news ». By the end of this lesson, you will catch the stories of a real bulletin — like a presenter!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: how many stories? which topics? Second listening — the details: 1. What has reached the east coast? 2. What is the score of the Barea? 3. What has opened in Fianarantsoa? 4. Who will be interviewed after the break?")],
      [fp("Listen. Answer."),
       pAns("E.A.: three stories: weather, sport, education. 1. A strong storm. 2. Two to one against the Comoros. 3. A new library (ten thousand books). 4. A farmer whose rice fields survived the storm.",
        ["A strong storm."], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listening hunt: hands up when you hear… a relative pronoun! The reporter WHO travelled… — supporters WHO waited… — a building WHICH holds… — students WHOSE schools are far. Write the four on the board: they describe without stopping the sentence!")],
      [fp("Listen. React."),
       fp("E.A.: who (persons), which (things), whose (possession).")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("The menu of a bulletin: greeting → story 1 (weather) → story 2 (sport) → story 3 (education) → the hook for after the break. Each story = one headline + two details. Keep this menu!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Class radio: three students read the bulletin — presenter voice, calm and clear! Then pairs build ONE new story about the lycée (one headline + two details) and read it with the jingle.")],
      [fp("Read. Create."),
       pAns("E.A.: In school news, the football team of our lycée has won the regional cup…",
        ["has won"], { size: SZ.FICHE })],
      "Role play", "Audio / QR"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three topics of the bulletin in order."),
       fp("2. Who stayed at home today — and why?"),
       fp("3. Quote one sentence of the bulletin with a relative pronoun.")],
      [fp("Answer."),
       pAns("E.A.: weather, sport, education. — The fishermen, because of the storm. — “The reporter who travelled to Toamasina…”",
        ["The fishermen"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(21, TOTAL, meta, rows, "s21");
}
function lessonS21() {
  return [
    p([run("LESSON OF THE DAY — SESSION 21", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("RADIO VAOVAO — THE NEWS BULLETIN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    newsBulletinBox(),
    p("", { after: 60 }),
    p([run("The menu of a news bulletin:", { bold: true })], { after: 50 }),
    bullet([run("1. The greeting — ", { bold: true }), run("Good evening! Here is the seven o’clock news…", { bold: true, color: C.BLUE })]),
    bullet([run("2. The stories — ", { bold: true }), run("one headline + two details each.", { bold: true, color: C.BLUE })]),
    bullet([run("3. The hook — ", { bold: true }), run("Stay with us: after the break…", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S22 — The relative pronouns ----------
function ficheS22() {
  const meta = META("The relative pronouns: who, which, where, whose",
    "By the end of the lesson, learners will be able to define people, things and places with the relative pronouns who, which, where and whose.",
    "4 / 6", "definition cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From the bulletin: complete — the reporter … travelled to Toamasina; a building … holds ten thousand books.")],
      [fp("Answer."),
       fp("E.A.: who; which.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Definition riddle: “It is a person. This person writes articles. This person travels a lot.” — Three short sentences… can we say it in ONE elegant sentence?")],
      [fp("Try."),
       fp("E.A.: A reporter is a person who writes articles and travels a lot!")],
      "Problem-solving", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The relative pronouns ». By the end of this lesson, you will glue two sentences into one — like a professional editor!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Four model sentences on the board: A journalist is a person WHO looks for the truth. — A headline is a title WHICH shouts the news. — A newsroom is a place WHERE the articles are born. — An editor is a person WHOSE job is to correct. For each: what does the relative replace?")],
      [fp("Observe. Compare."),
       fp("E.A.: who → the person; which → the thing; where → the place; whose → possession (his job).")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The four keys: WHO + person (never “which” for a person!); WHICH + thing or animal; WHERE + place (= in which); WHOSE + possession (replaces his/her/its). Gluing exercise together: “I met the farmer. His fields survived.” → “I met the farmer whose fields survived.”")],
      [fp("Build the rule. Glue."),
       fp("E.A.: who/person, which/thing, where/place, whose/possession.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: who for the people, which for the things, where for the places, whose for the possession. One relative = two sentences in one — your writing grows up!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The definition factory: pairs draw cards (a reporter, a headline, a studio, a reader, a publisher, a library) and write one definition with the right relative. Then the dictionary game: one pair reads, the class guesses the word!")],
      [fp("Define. Guess."),
       pAns("E.A.: It is a place where the presenters speak… — A studio!",
        ["where"], { size: SZ.FICHE })],
      "Pair work — game", "Definition cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: a presenter is a person … voice opens the news."),
       fp("2. Glue: “I read an article. It was about the storm.”"),
       fp("3. Define “a library” with where.")],
      [fp("Answer."),
       pAns("E.A.: whose. — I read an article which was about the storm. — A library is a place where you can read and borrow books.",
        ["whose"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(22, TOTAL, meta, rows, "s22");
}
function lessonS22() {
  return [
    p([run("LESSON OF THE DAY — SESSION 22", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE RELATIVE PRONOUNS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("GRAMMAR"),
    box("THE FOUR KEYS", [
      bullet([run("WHO ", { bold: true, color: C.RED }), run("+ person: "), run("a journalist is a person who looks for the truth.", { bold: true, color: C.BLUE })]),
      bullet([run("WHICH ", { bold: true, color: C.RED }), run("+ thing: "), run("a headline is a title which shouts the news.", { bold: true, color: C.BLUE })]),
      bullet([run("WHERE ", { bold: true, color: C.RED }), run("+ place: "), run("a newsroom is a place where the articles are born.", { bold: true, color: C.BLUE })]),
      bullet([run("WHOSE ", { bold: true, color: C.RED }), run("+ possession: "), run("an editor is a person whose job is to correct.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The gluing machine — two sentences → one:", { bold: true })], { after: 50 }),
    bullet([run("I met the farmer. + His fields survived. → ", { bold: true, color: C.BLUE }), run("I met the farmer whose fields survived.", { bold: true, color: C.RED })]),
    bullet([run("Here is the library. + It holds 10,000 books. → ", { bold: true, color: C.BLUE }), run("Here is the library which holds 10,000 books.", { bold: true, color: C.RED })]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• a person which ✘ — a person who ✔;"),
    p("• whose replaces his/her/its — never “the job of who”!"),
  ];
}

// ---------- S23 — Reading: the article and the headlines ----------
function ficheS23() {
  const meta = META("Reading: the article and the grammar of the headlines",
    "By the end of the lesson, learners will be able to read a short newspaper article and decode the special grammar of the headlines.",
    "5 / 6", "reading text (one per pair if possible), headline cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Define a reporter, a studio and an editor — with three different relatives!")],
      [fp("Answer."),
       fp("E.A.: a person who…, a place where…, a person whose job is…")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Headline cards on the board: BAREA WIN IN MORONI — STORM HITS EAST COAST — MAYOR TO VISIT LYCÉE. Strange English, no? What is missing in these sentences?")],
      [fp("Observe."),
       fp("E.A.: the little words — the, a, is/are… and the past!")],
      "Problem-solving", "Headline cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « Young reporters save the school garden ». By the end of this lesson, you will read an article like an editor — from the headline to the last quote.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First reading — the gist: what is the article about? Second reading — the details: 1. What was dying, and why? 2. What did the Young Reporters do? 3. Give two answers that came after the article. 4. Who is Hanta?")],
      [fp("Read. Answer."),
       pAns("E.A.: students who saved the school garden with an article. 1. The garden: no water, broken fences, zebu visits. 2. They wrote an article and interviewed the gardener. 3. Parents repaired the fences; a company offered a water tank (the mayor brought trees). 4. The editor whose idea started everything.",
        ["the editor"], { size: SZ.FICHE })],
      "Individual reading", "Reading text"),
    stepRow(["4. Analysis"],
      [fp("The grammar of the headlines, three secrets: 1. present simple for a PAST event (BAREA WIN = the Barea won); 2. TO + verb for the FUTURE (MAYOR TO VISIT = the mayor will visit); 3. the little words disappear (articles, is/are): STORM HITS EAST COAST. Decode the three headlines of the warm-up!")],
      [fp("Decode."),
       fp("E.A.: the Barea won in Moroni; a storm hit the east coast; the mayor will visit the lycée.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis (post-reading)"],
      [fp("An article = a headline (short and strong) + a lead (who? what? where? when?) + the details + one quote with “…”, says X. And the headline speaks its own grammar: present for the past, to for the future, no little words!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Headline factory: pairs transform three normal sentences into headlines — “The students cleaned the yard.” / “The rain destroyed the bridge.” / “The president will open a hospital.” Shortest correct headline wins!")],
      [fp("Transform."),
       pAns("E.A.: STUDENTS CLEAN YARD — RAIN DESTROYS BRIDGE — PRESIDENT TO OPEN HOSPITAL.",
        ["PRESIDENT TO OPEN HOSPITAL"], { size: SZ.FICHE })],
      "Pair work — game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Decode: LIBRARY OPENS IN FIANARANTSOA."),
       fp("2. Make the headline: “A cyclone will reach the coast.”"),
       fp("3. Quote the sentence of Hanta about the article and the mountain.")],
      [fp("Answer."),
       pAns("E.A.: A library opened in Fianarantsoa. — CYCLONE TO REACH COAST. — “A small article can move a big mountain.”",
        ["CYCLONE TO REACH COAST"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(23, TOTAL, meta, rows, "s23");
}
function lessonS23() {
  return [
    p([run("LESSON OF THE DAY — SESSION 23", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE ARTICLE AND THE HEADLINES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingArticleBox(),
    p("", { after: 60 }),
    rubricBadge("VOCABULARY"),
    p([run("Glossary:", { bold: true })], { after: 50 }),
    vocab("the front page", "dhe fronte péidje", "page one — the face of the newspaper"),
    vocab("a quote", "e kouôoute", "the exact words of a person, with “…”"),
    vocab("the lead", "dhe lide", "the first lines: who? what? where? when?"),
    vocab("to interview", "tou inteurviou", "to ask questions to somebody"),
    p("", { after: 60 }),
    rubricBadge("GRAMMAR"),
    box("THE THREE SECRETS OF THE HEADLINES", [
      bullet([run("1. Present for the past — ", { bold: true }), run("BAREA WIN IN MORONI = the Barea won.", { bold: true, color: C.BLUE })]),
      bullet([run("2. TO + verb for the future — ", { bold: true }), run("MAYOR TO VISIT LYCÉE = the mayor will visit.", { bold: true, color: C.BLUE })]),
      bullet([run("3. No little words — ", { bold: true }), run("STORM HITS EAST COAST (no “a”, no “the”, no “is”).", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S24 — Writing: my short article ----------
function ficheS24() {
  const meta = META("Writing: my short article with its headline",
    "By the end of the lesson, learners will be able to write a short news article (headline, lead, details, quote) about school or village life.",
    "6 / 6", "article plan on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the three secrets of the headlines — with one example each.")],
      [fp("Answer."),
       fp("E.A.: present for the past, to for the future, no little words.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Story market: what happened at the lycée or in the village this month? Collect four real (and kind!) stories on the board — they are today’s raw material.")],
      [fp("Propose stories.")], "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My short article ». By the end of this lesson, your story will have a headline, a lead, details and a quote — a real piece of journalism!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The pyramid of the article on the board: ① HEADLINE (short, strong, headline grammar) ② LEAD — one sentence with who, what, where, when ③ DETAILS — two or three sentences, with one relative pronoun! ④ QUOTE — “…”, says X. Check the pyramid in the garden article!")],
      [fp("Check the model."),
       fp("E.A.: headline ✔ lead ✔ details with which/whose ✔ quote of Hanta ✔.")],
      "Guided observation", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Each student chooses one story and writes the first draft (6 to 10 lines) with the pyramid. I walk and help: headline grammar, the relative, the quote marks.")],
      [fp("Write the first draft.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Peer check: exchange drafts. The checklist: headline in headline grammar? lead with the four questions? one relative? one quote? One missing → kind note!")],
      [fp("Check the neighbour’s draft."),
       fp("E.A.: “Great story! But your headline still says ‘the’…”")],
      "Peer correction", "Checklists"),
    stepRow(["6. Practice (post-writing)"],
      [fp("The class newspaper: final copies are pinned on the wall under a big title. Three authors read their article aloud — presenter voice! The class votes for the front page.")],
      [fp("Publish. Read. Vote."),
       pAns("E.A.: STUDENTS PLANT TWENTY TREES — Last Friday, the students of T11, who wanted a greener yard, planted twenty trees…",
        ["STUDENTS PLANT TWENTY TREES"], { size: SZ.FICHE })],
      "Whole-class work", "Wall newspaper"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the headline and the lead (two lines) for: the football team of the lycée won the regional cup on Saturday.")],
      [fp("Write."),
       pAns("E.A.: LYCÉE TEAM WINS REGIONAL CUP — On Saturday, the football team of our lycée won the regional cup in Antsirabe.",
        ["LYCÉE TEAM WINS REGIONAL CUP"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(24, TOTAL, meta, rows, "s24");
}
function lessonS24() {
  return [
    p([run("LESSON OF THE DAY — SESSION 24", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY SHORT ARTICLE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    box("THE PYRAMID OF THE ARTICLE", [
      bullet([run("① HEADLINE — ", { bold: true }), run("short and strong, in headline grammar: STUDENTS PLANT TWENTY TREES", { bold: true, color: C.BLUE })]),
      bullet([run("② LEAD — ", { bold: true }), run("who? what? where? when? — in ONE sentence.", { bold: true, color: C.BLUE })]),
      bullet([run("③ DETAILS — ", { bold: true }), run("two or three sentences, with one relative pronoun.", { bold: true, color: C.BLUE })]),
      bullet([run("④ QUOTE — ", { bold: true }), run("“…”, says X. The human voice of the article!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Model article (short):", { bold: true })], { after: 50 }),
    p([run("STUDENTS PLANT TWENTY TREES", { bold: true, color: COLOR })], { after: 40 }),
    p("Last Friday, the students of T11 planted twenty trees in the yard of the lycée. The idea came from the ecology club, whose members wanted more shade for the hot season. The young trees, which come from the mayor’s nursery, will give their first fruit in three years. “Our yard is our second home,” says Lova, the president of the club.", { after: 80 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• the headline follows the headline grammar — the article follows the NORMAL grammar;"),
    p("• a quote without quote marks is not a quote;"),
    p("• kind stories only: an article informs, it never attacks a classmate!"),
  ];
}

// ---------- The big lesson ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 3", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The news sources"),
    bullet([run("Print: newspaper, magazine — audio: radio — screen: TV, online media, social media.", { bold: true, color: C.BLUE })]),
    bullet([run("The word factory: ", { bold: true }), run("report → reporter, present → presenter, publish → publisher, edit → editor, read → reader.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Talking about the news"),
    bullet([run("Share: ", { bold: true }), run("Have you heard the news? Guess what!", { bold: true, color: C.BLUE })]),
    bullet([run("Source: ", { bold: true }), run("according to the radio… / I read it in the newspaper.", { bold: true, color: C.BLUE })]),
    bullet([run("Check: ", { bold: true }), run("Where did you hear that? Is the source reliable?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The relative pronouns"),
    bullet([run("WHO + person, WHICH + thing, WHERE + place, WHOSE + possession.", { bold: true, color: C.BLUE })]),
    bullet([run("The gluing machine: ", { bold: true }), run("I met the farmer whose fields survived.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The grammar of the headlines"),
    bullet([run("Present for the past (BAREA WIN) — TO + verb for the future (MAYOR TO VISIT) — no little words.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The article"),
    bullet([run("The pyramid: ", { bold: true }), run("headline → lead (who/what/where/when) → details (one relative!) → quote.", { bold: true, color: C.BLUE })], { after: 100 }),
  ];
}

// ---------- Exercises ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Word factory: give the person — 1. report 2. publish 3. present 4. edit.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("1. Share a news story with the right opener. 2. Give the source with according to. 3. Ask the detective question. 4. Give one sign of fake news.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Who, which, where or whose? 1. A presenter is a person … voice opens the news. 2. A studio is a place … the presenters speak. 3. I read an article … was about the storm. 4. A reader is a person … checks twice.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Decode the headlines: 1. BAREA WIN IN MORONI. 2. MAYOR TO VISIT LYCÉE. 3. Make the headline: “The rain destroyed the bridge.” 4. Make the headline: “The president will open a hospital.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short article (5 to 8 lines) with the pyramid: headline — lead — details with one relative — quote. Topic: a good news of your village or your lycée.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: reporter — publisher — presenter — editor. (1 pt each)", ["editor"]),
    pAns("Exercise 2 (models): Have you heard the news? — According to the radio, … — Where did you hear that? — No serious source / too incredible. (1 pt each)", ["Where did you hear that?"]),
    pAns("Exercise 3: whose — where — which — who. (1 pt each)", ["whose"]),
    pAns("Exercise 4: The Barea won in Moroni. — The mayor will visit the lycée. — RAIN DESTROYS BRIDGE. — PRESIDENT TO OPEN HOSPITAL. (1 pt each)", ["RAIN DESTROYS BRIDGE"]),
    pAns("Exercise 5: pyramid complete (headline grammar 1 pt, lead 1 pt, details + relative 1 pt, quote 1 pt).", ["pyramid"]),
  ];
}

// ---------- Revision (S25) ----------
function revision() {
  return [
    B.bookmarkTitle("s25", "SESSION 25 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 3: MASS MEDIA", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give the three families of news sources with one example each."),
    pAns("E.A.: print: newspaper — audio: radio — screen: TV / online media.", ["radio"]),
    p("2. Word factory: report, edit, read — give the three persons."),
    pAns("E.A.: reporter, editor, reader.", ["editor"]),
    p("3. Share a news story and give its source in two ways."),
    pAns("E.A.: Have you heard the news? According to the radio… / I read it in the newspaper.", ["according to"]),
    p("4. Give the three questions of the reader-detective."),
    pAns("E.A.: Who says it? Where was it said first? Do two serious sources agree?", ["Who says it?"]),
    p("5. Complete: a journalist is a person … looks for the truth; a newsroom is a place … the articles are born."),
    pAns("E.A.: who; where.", ["who"]),
    p("6. Glue into one sentence: “I met the editor. Her idea started everything.”"),
    pAns("E.A.: I met the editor whose idea started everything.", ["whose"]),
    p("7. Decode: STORM HITS EAST COAST — and explain the secret."),
    pAns("E.A.: A storm hit the east coast — present simple for a past event, no little words.", ["present simple"]),
    p("8. Make the headline: “The students will clean the beach.”"),
    pAns("E.A.: STUDENTS TO CLEAN BEACH.", ["STUDENTS TO CLEAN BEACH"]),
    p("9. Give the four floors of the pyramid of the article."),
    pAns("E.A.: headline — lead — details — quote.", ["lead"]),
    p("10. In the garden article: quote the sentence of Hanta."),
    pAns("E.A.: “A small article can move a big mountain.”", ["A small article can move a big mountain."]),
  ];
}

// ---------- Test paper (S26) ----------
function testPaper() {
  return [
    B.bookmarkTitle("s26", "SESSION 26 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T11 TEST PAPER — UNIT 3: MASS MEDIA", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with: headline — reporter — reliable — front page. 1. The … travels and tells the facts. 2. The big title of an article is the … . 3. Page one is the … . 4. A source you can trust is … .")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("1. Share a news story with an opener. 2. Give the source with according to. 3. Check with the detective question. 4. React to an incredible story without a source.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Who, which, where or whose? 1. The farmer … fields survived thanked the radio. 2. The library, … holds 10,000 books, opens on Monday. 3. The studio is the place … the news is read. 4. The readers … check twice are free citizens.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Headlines: 1. Decode: LIBRARY OPENS IN FIANARANTSOA. 2. Decode: PRESIDENT TO VISIT SOUTH. 3. Make the headline: “The team won the cup.” 4. Make the headline: “A cyclone will reach the coast.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short article (6 to 10 lines) about a (kind!) news story of your lycée: headline in headline grammar — lead with who/what/where/when — details with one relative pronoun — one quote.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: reporter — headline — front page — reliable. (1 pt each)", ["reliable"]),
    pAns("Ex.2 (models): Have you heard the news? — According to Radio Nationale… — Where did you hear that? — It sounds like fake news! (1 pt each)", ["It sounds like fake news!"]),
    pAns("Ex.3: whose — which — where — who. (1 pt each)", ["which"]),
    pAns("Ex.4: A library opened in Fianarantsoa. — The president will visit the south. — TEAM WINS CUP. — CYCLONE TO REACH COAST. (1 pt each)", ["TEAM WINS CUP"]),
    pAns("Ex.5: pyramid complete (headline 1 pt, lead 1 pt, details + relative 1 pt, quote 1 pt).", ["quote"]),
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
      "I can name the news sources: newspaper, radio, TV, online media.",
      "I can build the job words: report → reporter, edit → editor.",
      "I can share a news story and give its source: according to the radio…",
      "I can check the news with the detective questions.",
      "I can describe with the relatives: who, which, where, whose.",
      "I can decode a headline: BAREA WIN = the Barea won.",
      "I can read an article: headline, lead, details, quote.",
      "I can write my own short article with its headline.",
    ], "NEXT STOP → UNIT 4: COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
