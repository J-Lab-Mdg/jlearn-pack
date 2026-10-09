// T10 — ANNEXES — Picture dictionary, Writer's guide, Pronunciation guide, Flashcards,
//                  Conjugation guide, Phonetics guide (IPA + figurée)
const B = require("./builders");
const { C, SZ, run, p, pr, kw, unitBanner, audioBox, img, pageBreak,
        cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle } = require("docx");

const COLOR = "4A235A"; // violet foncé — couleur des annexes

// ---------------- outils locaux ----------------
function wordGrid(items, perRow) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
const DASHED = { style: BorderStyle.DASHED, size: 4, color: "808080" };
const dashedBorders = () => ({ top: DASHED, bottom: DASHED, left: DASHED, right: DASHED,
  insideHorizontal: DASHED, insideVertical: DASHED });
function flashTable(words, perRow = 2, bigSize = 56) {
  const rows = [];
  for (let i = 0; i < words.length; i += perRow) {
    const chunk = words.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p("", { after: 60 }),
            p([run(w, { bold: true, size: bigSize })], { center: true, after: 40 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA },
    borders: dashedBorders(), rows });
}
function annexTitle(id, no, title) {
  return [
    bookmarkTitle(id, `ANNEX ${no}`, { bold: true, color: COLOR, size: 36, after: 40 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 160 }),
  ];
}
function themeBar(text) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA }, borders: noBorders(),
    rows: [new TableRow({ children: [cell(
      [p([run(text, { bold: true, color: C.WHITE, size: 30 })], { center: false, after: 20 })],
      { shade: COLOR })] })],
  });
}

// ---------------- données de l'année T10 ----------------
const MEETING = [
  ["Nice to meet you!", "naïce tou mite you"], ["Where are you from?", "ouère are you frome"],
  ["to introduce", "tou inntrodiouce"], ["a neighbour", "e néibeur"],
  ["to shake hands", "tou chéike hanndze"], ["Welcome!", "ouèlkeume"],
];
const CHORES = [
  ["to sweep the floor", "tou souipe dhe flor"], ["to fetch water", "tou fètch ouôteur"],
  ["to do the dishes", "tou dou dhe dichize"], ["to cook rice", "tou kouk raïce"],
  ["to feed the chickens", "tou fide dhe tchikènnze"], ["to run errands", "tou reune èranndze"],
];
const CLASSROOM = [
  ["May I come in?", "méi aï keume ine"], ["to raise your hand", "tou réize ior hannde"],
  ["to borrow", "tou borôou"], ["Can you repeat, please?", "kane you ripite plize"],
  ["Of course!", "ove korse"], ["Go ahead!", "gôou ehède"],
];
const HOUSE = [
  ["the kitchen", "dhe kitcheune"], ["the bedroom", "dhe bèdroume"],
  ["the roof", "dhe roufe"], ["next to", "nèxte tou"],
  ["between", "bitouine"], ["in front of", "ine fronnte ove"],
];
const HEALTH = [
  ["the flu", "dhe flou"], ["a headache", "e hèdéike"],
  ["a sore throat", "e sor thrôoute"], ["a fever", "e fiveur"],
  ["You should rest!", "you choude rèste"], ["to feel better", "tou file bèteur"],
];
const WEATHER = [
  ["rainy", "réini"], ["sunny", "seuni"], ["misty", "misti"],
  ["the forecast", "dhe forkaste"], ["the temperature", "dhe tèmmprètcheur"], ["a season", "e sizeune"],
];
const PASTWORDS = [
  ["yesterday morning", "yèsteurdé morningue"], ["last night", "laste naïte"],
  ["a few minutes ago", "e fiou minitse egôou"], ["I was scared!", "aï ouoze skèrde"],
  ["amazing", "eméizingue"], ["awesome", "ôsseume"],
];
const MARKERS = [
  ["First of all,", "feurste ove ol"], ["After that,", "afteur dhate"],
  ["Next,", "nèxte"], ["Then,", "dhène"], ["Finally,", "faïneli"], ["suddenly", "seudeunli"],
];
const TRAVEL = [
  ["by taxi-brousse", "baï taxi-brousse"], ["on foot", "onne foute"],
  ["How far is it?", "haou fare ize itte"], ["to check in", "tou tchèke ine"],
  ["heavy traffic", "hèvi trafike"], ["a taboo (fady)", "e tabou"],
];
const FOOD = [
  ["It smells wonderful!", "itte smèlze ouonndeurfoul"], ["It tastes sweet", "itte téistse souite"],
  ["spicy", "spaïci"], ["grilled fish", "grilde fiche"],
  ["a bowl of soup", "e bôoul ove soupe"], ["the bill, please!", "dhe bile plize"],
];
const JOBS = [
  ["an occupation", "ane okioupéicheune"], ["I work as a…", "aï oueurk aze e"],
  ["between jobs", "bitouine djobze"], ["an interview", "ane innteurviou"],
  ["hardworking", "harde-oueurkigne"], ["self-confident", "sèlf-connfideunte"],
];
const PHONE = [
  ["to pick up", "tou pike eupe"], ["to hang up", "tou hangue eupe"],
  ["to call back", "tou kol bake"], ["May I speak to…?", "méi aï spike tou"],
  ["Who is calling, please?", "hou ize kolingue plize"], ["to leave a message", "tou live e mèssidje"],
];

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the key words of the year, unit by unit — revise with a friend: one reads the English, the other says the meaning!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),
    themeBar("UNIT 1 — MEETING PEOPLE AND HOUSEHOLD CHORES"),
    p("", { after: 40 }), wordGrid(MEETING, 3), p("", { after: 40 }), wordGrid(CHORES, 3), p("", { after: 100 }),
    themeBar("UNIT 2 — CLASSROOM ENGLISH AND PERMISSION"),
    p("", { after: 40 }), wordGrid(CLASSROOM, 3), p("", { after: 100 }),
    themeBar("UNIT 3 — THE HOUSE AND THE LOCATIONS"),
    p("", { after: 40 }), wordGrid(HOUSE, 3), p("", { after: 100 }),
    themeBar("UNIT 4 — HEALTH"),
    p("", { after: 40 }), wordGrid(HEALTH, 3), p("", { after: 100 }),
    themeBar("UNIT 5 — THE WEATHER"),
    p("", { after: 40 }), wordGrid(WEATHER, 3), p("", { after: 100 }),
    themeBar("UNIT 6 — NARRATING A PAST EVENT"),
    p("", { after: 40 }), wordGrid(PASTWORDS, 3), p("", { after: 40 }), wordGrid(MARKERS, 3), p("", { after: 100 }),
    themeBar("UNIT 7 — TRAVELLING IN MADAGASCAR"),
    p("", { after: 40 }), wordGrid(TRAVEL, 3), p("", { after: 100 }),
    themeBar("UNIT 8 — RESTAURANTS AND MALAGASY CUISINE"),
    p("", { after: 40 }), wordGrid(FOOD, 3), p("", { after: 100 }),
    themeBar("UNIT 9 — THE JOB THAT’S RIGHT FOR YOU"),
    p("", { after: 40 }), wordGrid(JOBS, 3), p("", { after: 100 }),
    themeBar("UNIT 10 — TALKING ON THE PHONE"),
    p("", { after: 40 }), wordGrid(PHONE, 3),
  ];
}

// ---------------- ANNEX 2 — THE WRITER'S GUIDE ----------------
const wrule = (title, runs, o = {}) => pr(
  [run("• " + title + " — ", { bold: true, color: C.BLUE, size: 26 }), ...runs],
  { after: o.after != null ? o.after : 70 });
function writersGuide() {
  const box = (title, children, shade = "F4ECF7") => new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(title, { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })], { shade })] }),
      new TableRow({ children: [cell(children)] }),
    ],
  });
  return [
    ...annexTitle("ann2", "2", "THE WRITER’S GUIDE"),
    p([run("From the paragraph to the 100-word essay — the official road of the lycée!", { bold: true, size: 30, color: COLOR })], { center: true, after: 120 }),
    p("The programme of the lycée is a staircase: in Seconde (T10), you master the PARAGRAPH and the ESSAY OF 100 WORDS. In Première, the essay grows to 120 words (Série L), and in Terminale to 150. Every paragraph you wrote this year was a step of this staircase!", { after: 140 }),

    themeBar("1. THE FOUR TYPES OF TEXT"),
    p("", { after: 60 }),
    wrule("Narrative", [run("tells a story in the past — Unit 6! Simple past + sequence markers: "), run("Last Sunday, I went to the market. First of all…", { italic: true, color: C.GRAY })]),
    wrule("Descriptive", [run("paints with words — the house (Unit 3), a place of Madagascar (Unit 7): "), run("Isalo is wild: mountains of yellow stone stand like walls…", { italic: true, color: C.GRAY })]),
    wrule("Informative", [run("explains facts — health (Unit 4), climate (Unit 5): "), run("Global warming has two main causes…", { italic: true, color: C.GRAY })]),
    wrule("Argumentative", [run("defends an idea with arguments — the dream job (Unit 9): "), run("I’d like to be a nurse, because… moreover… so…", { italic: true, color: C.GRAY })], { after: 140 }),

    themeBar("2. THE PARAGRAPH — ONE KING, ONE KINGDOM"),
    p("", { after: 60 }),
    wrule("The topic sentence", [run("the KING (Unit 8!) — usually the first sentence; it announces the idea.")]),
    wrule("The body", [run("three to five sentences that serve the king: examples, details, reasons.")]),
    wrule("The final sentence", [run("closes the door: a feeling, a conclusion, a wink.")], { after: 140 }),

    themeBar("3. THE 100-WORD ESSAY — THE PLAN"),
    p("", { after: 60 }),
    wrule("Introduction (about 20 words)", [run("present the subject + your idea in one or two sentences.")]),
    wrule("Body (about 60 words)", [run("one or two paragraphs: arguments, examples of YOUR life (personalisation!).")]),
    wrule("Conclusion (about 20 words)", [run("summarise and finish strong: In conclusion…, That is why…")]),
    wrule("Count smart", [run("about 10 words per line of your copy-book → 100 words ≈ 10 lines. Count at the end and write the number!")], { after: 140 }),

    themeBar("4. THE LINKING WORDS BANK"),
    p("", { after: 60 }),
    wrule("To order", [run("First (of all), After that, Next, Then, Finally.", { bold: true })]),
    wrule("To add", [run("and, also, moreover.", { bold: true })]),
    wrule("To oppose", [run("but, however, yet.", { bold: true })]),
    wrule("Cause and purpose", [run("because, so, to, in order to, so that.", { bold: true })]),
    wrule("To conclude", [run("in conclusion, that is why, in short.", { bold: true })], { after: 140 }),

    themeBar("5. A MODEL 100-WORD ESSAY (argumentative)"),
    p("", { after: 60 }),
    box("« THE JOB THAT’S RIGHT FOR ME » — about 100 words", [
      p("Everybody has a dream, and mine is to become a nurse.", { after: 40 }),
      p("First of all, I love helping people: when somebody is sick at home, I am the one who takes care of him. Moreover, I am patient and good at listening. However, my village has no health centre, and women walk twenty kilometres to see a doctor. So I want to study hard, in order to come back and serve my people.", { after: 40 }),
      p("In conclusion, a nurse’s uniform is my mountain — and one day, I will wear it!", { after: 20 }),
    ]),
    p("", { after: 100 }),
    wrule("The five-point check (before giving your copy!)", [run("Meaning ✓ organization ✓ grammar ✓ spelling ✓ punctuation ✓ — and the word count!")]),
  ];
}

// ---------------- ANNEX 3 — PRONUNCIATION GUIDE ----------------
function pronRow(sound, say, examples) {
  return new TableRow({ children: [
    cell([p([run(sound, { bold: true, color: C.BLUE, size: 28 })], { center: true })], { w: 2200, vAlign: VerticalAlign.CENTER }),
    cell([p([run(say, { size: 26 })])], { w: 4100, vAlign: VerticalAlign.CENTER }),
    cell([p([run(examples, { italic: true, color: C.GRAY, size: 24 })])], { w: 4100, vAlign: VerticalAlign.CENTER }),
  ]});
}
function pronunciationGuide() {
  const h = (t, w) => cell([p([run(t, { bold: true, color: C.WHITE, size: 26 })], { center: true })],
    { w, shade: COLOR, vAlign: VerticalAlign.CENTER });
  return [
    ...annexTitle("ann3", "3", "PRONUNCIATION GUIDE"),
    p([run("For the teacher", { bold: true, size: 30, color: COLOR })], { center: true, after: 120 }),
    p("In this book, every English word has a help between brackets, in italics and grey: it shows how to SAY the word, with sounds read as in French. Example: "),
    pr([...kw("occupation", "okioupéicheune"), run("  —  we read “okioupéicheune” as in French.")], { after: 120 }),
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it! And remember: the pupils never copy the brackets in their copy-books.", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples from this book", 4100)] }),
      pronRow("th → [dh]", "Put the tongue between the teeth and let the voice vibrate, like a soft “z”.", "the weather [dhe ouèdheur], this is [dhisse ize], then [dhène]"),
      pronRow("th → [th]", "Same tongue between the teeth, but NO voice — just air.", "a sore throat [e sor thrôoute], three [thri], thank you [thannk iou]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "to hang up [tou hangue eupe], a headache [e hèdéike], how far [haou fare]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "rainy [réini], a restaurant [e rèstoronnte], to run errands [tou reune èranndze]"),
      pronRow("-ing → [ingue]", "A nasal “ng” at the end, like a small bell.", "hardworking [harde-oueurkigne], Who is calling? [hou ize kolingue]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "How long? [haou longue], a sore throat — ouch! [aoutch]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "a boat [e bôoute], ago [egôou], a bowl of soup [e bôoul ove soupe]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "a plane [e pléine], to taste [tou téiste], the stage [dhe stéidje]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "to dial [tou daïeul], spicy [spaïci], to fry [tou fraï]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "sunny [seuni], the bus [dhe beusse], lunch [leunntch]"),
      pronRow("ee / ea → [ii]", "A long “i”, smile!", "sweet [souite], to feel better [tou file bèteur], a season [e sizeune]"),
      pronRow("silent letters", "Some letters are written but NOT said!", "to listen [tou liseune] (no t!), the island [dhi aïlannde] (no s!)"),
    ]}),
    p("", { after: 140 }),
    p([run("The three golden rules:", { bold: true, size: 30 })], { after: 60 }),
    p("1. Model first: the teacher (or the audio) says the word 3 times, the class repeats in chorus, then in rows, then alone."),
    p("2. Short and often: five minutes of speaking in every session beat one long hour once a month."),
    p("3. Praise every try: “Good!”, “Very good!”, “Well done!” — mistakes are welcome, they help us learn."),
  ];
}

// ---------------- ANNEX 4 — FLASHCARDS ----------------
function flashcards() {
  return [
    ...annexTitle("ann4", "4", "FLASHCARDS TO CUT OUT"),
    p([run("For the teacher: ", { bold: true }),
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: mime, bingo, matching job–place, the suitcase game, the mystery dish, quiz quiz trade…")],
      { after: 160 }),

    themeBar("THE CHORES (Unit 1) AND THE PERMISSION (Unit 2)"),
    p("", { after: 60 }),
    flashTable(CHORES.map(([w, pn]) => [w.replace(/^to /, ""), pn.replace(/^tou /, "")]), 3, 32),
    p("", { after: 60 }),
    flashTable(CLASSROOM.slice(0, 3), 3, 32),
    pageBreak(),

    themeBar("THE WEATHER (Unit 5)"),
    p("", { after: 60 }),
    flashTable(WEATHER, 3, 36),
    p("", { after: 60 }),
    themeBar("THE SEQUENCE MARKERS (Unit 6)"),
    p("", { after: 60 }),
    flashTable(MARKERS, 3, 36),
    pageBreak(),

    themeBar("THE TRAVEL WORDS (Unit 7) AND THE TASTES (Unit 8)"),
    p("", { after: 60 }),
    flashTable(TRAVEL.slice(0, 3), 3, 32),
    p("", { after: 60 }),
    flashTable([["sweet", "souite"], ["spicy", "spaïci"], ["sour", "saoueur"]], 3, 40),
    pageBreak(),

    themeBar("THE JOBS (Unit 9) AND THE PHONE (Unit 10)"),
    p("", { after: 60 }),
    flashTable([["a mechanic", "e mikanike"], ["a nurse", "e neurse"], ["a tour guide", "e tour gaïde"]], 3, 34),
    p("", { after: 60 }),
    flashTable(PHONE.slice(0, 3).map(([w, pn]) => [w.replace(/^to /, ""), pn.replace(/^tou /, "")]), 3, 34),
    p("", { after: 120 }),
    p([run("Tip: draw or paste a small picture on the back of each word card — the card becomes a picture card for “What is this?”.",
      { italic: true, color: C.GRAY, size: 24 })]),
  ];
}

// ---------------- ANNEX 5 — CONJUGATION GUIDE ----------------
function conjTable(header, rows) {
  const hc = header.map(h => cell(
    [p([run(h, { bold: true, color: COLOR, size: 24 })], { center: true, after: 20 })],
    { shade: "F4ECF7", vAlign: VerticalAlign.CENTER }));
  const trs = rows.map(r => new TableRow({ children: r.map((t, i) => cell(
    [p([run(t, { bold: i === 0, size: 24, color: i === 0 ? C.BLUE : C.BLACK })], { after: 20 })],
    { vAlign: VerticalAlign.CENTER })) }));
  return new Table({ width: { size: 10400, type: WidthType.DXA },
    rows: [new TableRow({ children: hc }), ...trs] });
}
const rule = (title, runs, o = {}) => pr(
  [run("• " + title + " — ", { bold: true, color: C.BLUE, size: 26 }), ...runs],
  { after: o.after != null ? o.after : 70 });

const IRREGULAR3 = [
  ["be", "was/were", "been"], ["have", "had", "had"], ["do", "did", "done"],
  ["go", "went", "gone"], ["come", "came", "come"], ["see", "saw", "seen"],
  ["say", "said", "said"], ["eat", "ate", "eaten"], ["drink", "drank", "drunk"],
  ["take", "took", "taken"], ["give", "gave", "given"], ["get", "got", "got"],
  ["make", "made", "made"], ["know", "knew", "known"], ["think", "thought", "thought"],
  ["write", "wrote", "written"], ["read", "read (red!)", "read (red!)"], ["hear", "heard", "heard"],
  ["speak", "spoke", "spoken"], ["teach", "taught", "taught"], ["buy", "bought", "bought"],
  ["tell", "told", "told"], ["find", "found", "found"], ["wake", "woke", "woken"],
];
function irregularGrid() {
  const rows = [new TableRow({ children: ["Base", "Past", "Past participle"].map(t => cell(
    [p([run(t, { bold: true, color: COLOR, size: 24 })], { center: true, after: 20 })],
    { shade: "F4ECF7", vAlign: VerticalAlign.CENTER })).concat(
    ["Base", "Past", "Past participle"].map(t => cell(
    [p([run(t, { bold: true, color: COLOR, size: 24 })], { center: true, after: 20 })],
    { shade: "F4ECF7", vAlign: VerticalAlign.CENTER }))) })];
  for (let i = 0; i < IRREGULAR3.length; i += 2) {
    const pair = [IRREGULAR3[i], IRREGULAR3[i + 1] || ["", "", ""]];
    rows.push(new TableRow({ children: pair.flatMap(([a, b, c2]) => [
      cell([p([run(a, { bold: true, color: C.BLUE, size: 24 })], { center: true, after: 20 })], { vAlign: VerticalAlign.CENTER }),
      cell([p([run(b, { size: 24 })], { center: true, after: 20 })], { vAlign: VerticalAlign.CENTER }),
      cell([p([run(c2, { bold: true, size: 24 })], { center: true, after: 20 })], { vAlign: VerticalAlign.CENTER }),
    ]) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function conjugation() {
  return [
    ...annexTitle("ann5", "5", "CONJUGATION GUIDE"),
    p([run("All the grammar machines of T10 — the whole year on a few pages!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("1. THE THREE KINGS: BE, HAVE, DO"),
    p("", { after: 60 }),
    conjTable(["Person", "BE (present / past)", "HAVE (present / past)", "DO (present / past)"], [
      ["I", "am / was", "have / had", "do / did"],
      ["you, we, they", "are / were", "have / had", "do / did"],
      ["he, she, it", "is / was", "has / had", "does / did"],
    ]),
    p("", { after: 100 }),

    themeBar("2. THE TWO PRESENTS (Units 1 and 5)"),
    p("", { after: 60 }),
    conjTable(["Tense", "When?", "Example"], [
      ["Present simple", "habits, facts", "My father works as a nurse. The buses leave daily."],
      ["Present continuous", "NOW, at this moment", "Look! It is raining. The wind is blowing."],
    ]),
    p("", { after: 100 }),

    themeBar("3. THE SIMPLE PAST (Unit 6)"),
    p("", { after: 60 }),
    conjTable(["Form", "Rule", "Example"], [
      ["+ (affirmative)", "verb + -ed / irregular form", "We visited the village. I went to the river."],
      ["− (negative)", "did not + base verb", "He did not come last weekend."],
      ["? (question)", "Did + subject + base verb?", "What did you do during the last vacation?"],
    ]),
    p("", { after: 100 }),

    themeBar("4. THE FUTURES (Unit 5)"),
    p("", { after: 60 }),
    conjTable(["Future", "When?", "Example"], [
      ["will + base verb", "prediction", "It will rain tomorrow. He will find work!"],
      ["be going to + base verb", "a plan, a visible sign", "Look at the clouds: it’s going to rain. The temperature is going to rise."],
    ]),
    p("", { after: 100 }),

    themeBar("5. THE IRREGULAR VERBS — THE THREE FORMS"),
    p("", { after: 60 }),
    irregularGrid(),
    p("", { after: 100 }),
    pageBreak(),

    themeBar("6. THE POLITE MACHINES (Units 2, 4, 7)"),
    p("", { after: 60 }),
    rule("may / can (permission)", [run("May I come in? Can I borrow your pen? — "), run("may", { bold: true }), run(" is more formal, "), run("can", { bold: true }), run(" is friendly.")]),
    rule("should (advice, Unit 4)", [run("You "), run("should", { bold: true }), run(" rest. You "), run("shouldn’t", { bold: true }), run(" drink cold water. Never -s, never “to”!")]),
    rule("must / mustn’t (obligation, Unit 7)", [run("You "), run("mustn’t", { bold: true }), run(" point at the tomb. It is forbidden to swim here.")], { after: 100 }),

    themeBar("7. THE QUESTION TOOL BOX (Units 7 and 9)"),
    p("", { after: 60 }),
    conjTable(["Question", "It measures…", "Answer"], [
      ["How far is it?", "the distance", "It’s 700 kilometres."],
      ["How long does it take?", "the time", "It takes fifteen hours."],
      ["How often do the buses leave?", "the frequency", "Hourly! Daily! Weekly!"],
      ["What do you do for a living?", "the occupation", "I work as a mechanic."],
    ]),
    p("", { after: 100 }),

    themeBar("8. COUNT, NON-COUNT AND THE QUANTITIES (Unit 8)"),
    p("", { after: 60 }),
    rule("some / any", [run("I’ll have "), run("some", { bold: true }), run(" rice. Is there "), run("any", { bold: true }), run(" water?")]),
    rule("a little / a few", [run("a little", { bold: true }), run(" + non-count (a little salt); "), run("a few", { bold: true }), run(" + count (a few eggs).")]),
    rule("The containers", [run("a bowl of soup, a glass of ranovola, a cup of coffee, a kilo of meat.")], { after: 100 }),

    themeBar("9. THE PLACES AND THE POSSESSIVE (Unit 9)"),
    p("", { after: 60 }),
    rule("in / on / at", [run("in", { bold: true }), run(" a hospital (closed), "), run("on", { bold: true }), run(" a farm (surface), "), run("at", { bold: true }), run(" the market (point).")]),
    rule("The possessive ’s", [run("my mother’s shop; the farmers’ trucks (plural: apostrophe only!).")], { after: 100 }),

    themeBar("10. THE ABILITIES (Unit 9)"),
    p("", { after: 60 }),
    rule("to be able to + verb", [run("She is able to drive a truck.")]),
    rule("to know how to + verb", [run("He knows how to use a computer.")]),
    rule("to be good at + verb-ING", [run("I am good at drawing — the -ing dress is compulsory!")], { after: 100 }),

    themeBar("11. THE REPORTED SPEECH — ONE STEP BACK (Unit 10)"),
    p("", { after: 60 }),
    conjTable(["Direct speech", "Reported speech", "The step back"], [
      ["“I am busy,” she said.", "She said (that) she was busy.", "present → past"],
      ["“I will call back,” he said.", "He said (that) he would call back.", "will → would"],
      ["“Can you come?” she asked.", "She asked whether (if) I could come.", "can → could"],
      ["“Where are you?” he asked.", "He asked where I was.", "question → calm order"],
      ["“Bring the book!” she said.", "She told me to bring the book.", "command → to + verb"],
      ["“Don’t be late!” he said.", "He told me not to be late.", "negative → not to + verb"],
    ]),
    p("", { after: 100 }),

    themeBar("12. SMALL BUT MIGHTY"),
    p("", { after: 60 }),
    rule("The -y machine (Unit 5)", [run("rain → rainy, wind → windy, sun → sunny (nn!), mist → misty.")]),
    rule("The kitchen participles (Unit 8)", [run("grilled fish, fried chicken, boiled meat, steamed rice — the adjective tells the recipe!")]),
    rule("The compound adjectives (Unit 9)", [run("hard + working = hardworking; self + confident = self-confident.")]),
    rule("The ever-words (Unit 7)", [run("whenever = every time that; wherever = in every place that.")]),
    rule("The sequence markers (Unit 6)", [run("First of all, After that, Next, Then, Finally — at least three per story!")]),
    rule("The purpose links (Unit 10)", [run("I’m calling to invite you; in order to help; so that no word gets lost!")]),
  ];
}

// ---------------- ANNEX 6 — PHONETICS GUIDE (IPA + figurée) ----------------
function phonRow(ipa, fig, say, examples) {
  return new TableRow({ children: [
    cell([p([run(ipa, { bold: true, color: COLOR, size: 28 })], { center: true })], { w: 1600, vAlign: VerticalAlign.CENTER }),
    cell([p([run(fig, { bold: true, color: C.BLUE, size: 26 })], { center: true })], { w: 1800, vAlign: VerticalAlign.CENTER }),
    cell([p([run(say, { size: 24 })])], { w: 3300, vAlign: VerticalAlign.CENTER }),
    cell([p([run(examples, { italic: true, color: C.GRAY, size: 22 })])], { w: 3700, vAlign: VerticalAlign.CENTER }),
  ]});
}
function phonetics() {
  const h = (t, w) => cell([p([run(t, { bold: true, color: C.WHITE, size: 24 })], { center: true })],
    { w, shade: COLOR, vAlign: VerticalAlign.CENTER });
  const head = () => new TableRow({ children: [h("IPA", 1600), h("In this book", 1800), h("How to say it", 3300), h("Examples", 3700)] });
  return [
    ...annexTitle("ann6", "6", "PHONETICS GUIDE"),
    p([run("The IPA symbols and the brackets of this book — side by side", { bold: true, size: 30, color: COLOR })], { center: true, after: 120 }),
    p("In the dictionaries, the pronunciation is written with special symbols: the International Phonetic Alphabet (IPA), between slashes: /ˈwedə/. In this book, we used easy brackets read as in French: [ouèdheur]. This annex puts the two systems side by side — so you are ready for the dictionary, and for the lycée!", { after: 80 }),
    pr([run("Example: "), run("weather", { bold: true, color: C.BLUE }), run("  →  IPA "), run("/ˈweðə/", { bold: true, color: COLOR }), run("  =  this book "), run("[ouèdheur]", { italic: true, color: C.GRAY }), run(". The two say the same sound!")], { after: 140 }),

    p([run("THE VOWELS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/iː/", "[ii] / [i]", "a long “i” — smile!", "sweet /swiːt/ [souite], a season /ˈsiːzn/ [sizeune]"),
      phonRow("/ɪ/", "[i]", "a short, quick “i”", "to grill /ɡrɪl/ [grile], misty /ˈmɪsti/ [misti]"),
      phonRow("/e/", "[è]", "like “è” in French", "the weather /ˈweðə/ [ouèdheur], a message /ˈmesɪdʒ/ [mèssidje]"),
      phonRow("/æ/", "[a]", "an “a” with a big open mouth", "a taxi /ˈtæksi/ [taxi], a mechanic /məˈkænɪk/ [mikanike]"),
      phonRow("/ɑː/", "[â]", "a long, deep “a”", "a farm /fɑːm/ [farme], hard /hɑːd/ [harde]"),
      phonRow("/ɒ/", "[o]", "a short “o”", "a job /dʒɒb/ [djob], a doctor /ˈdɒktə/ [dokteur]"),
      phonRow("/ɔː/", "[ô]", "a long “ô”", "the forecast /ˈfɔːkɑːst/ [forkaste], a sore throat /sɔː/ [sor]"),
      phonRow("/ʊ/ /uː/", "[ou]", "like “ou” in French", "food /fuːd/ [foude], to boil /bɔɪl/… no — the school /skuːl/ [skoule]!"),
      phonRow("/ʌ/", "[eu]", "a short “eu”, mouth relaxed", "sunny /ˈsʌni/ [seuni], lunch /lʌntʃ/ [leunntch]"),
      phonRow("/ɜː/", "[eur]", "a long “eur”", "to work /wɜːk/ [oueurk], a nurse /nɜːs/ [neurse]"),
      phonRow("/ə/", "[e]", "the tiny lazy sound of English!", "a teacher /ˈtiːtʃə/ [titcheur], an occupation /ˌɒkjuˈpeɪʃn/ [okioupéicheune]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE DOUBLE VOWELS (two sounds in one!)", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/eɪ/", "[éi]", "“é” then “i”", "a plane /pleɪn/ [pléine], the stage /steɪdʒ/ [stéidje]"),
      phonRow("/aɪ/", "[aï]", "“a” then “i”", "to dial /ˈdaɪəl/ [daïeul], spicy /ˈspaɪsi/ [spaïci]"),
      phonRow("/ɔɪ/", "[oï]", "“o” then “i”", "to boil /bɔɪl/ [boïle], a voice /vɔɪs/ [voïce]"),
      phonRow("/əʊ/", "[ôou]", "“ô” then “ou”", "a boat /bəʊt/ [bôoute], ago /əˈɡəʊ/ [egôou]"),
      phonRow("/aʊ/", "[aou]", "“a” then “ou”", "How long? /haʊ/ [haou], a drought /draʊt/ [draoute]"),
      phonRow("/eə/", "[è(r)]", "“è” with a little “r”", "careful /ˈkeəfl/ [kèrfoul], where /weə/ [ouèr]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE SPECIAL CONSONANTS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/ð/", "[dh]", "tongue between the teeth + voice", "the weather /ˈweðə/ [ouèdheur], then /ðen/ [dhène]"),
      phonRow("/θ/", "[th]", "tongue between the teeth, air only", "a throat /θrəʊt/ [thrôoute], three /θriː/ [thri]"),
      phonRow("/h/", "[h]", "a soft blow — never silent!", "to hang up /hæŋ/ [hangue], a headache /ˈhedeɪk/ [hèdéike]"),
      phonRow("/ŋ/", "[nng] / [ngue]", "the nasal “ng” bell", "calling /ˈkɔːlɪŋ/ [kolingue], hardworking [harde-oueurkigne]"),
      phonRow("/tʃ/", "[tch]", "like “tch” in “tchak”", "the kitchen /ˈkɪtʃɪn/ [kitcheune], to check in /tʃek/ [tchèke]"),
      phonRow("/dʒ/", "[dj]", "like “dj” in “Djibouti”", "a job /dʒɒb/ [djob], a message /ˈmesɪdʒ/ [mèssidje]"),
      phonRow("/ʃ/", "[ch]", "like “ch” in “chat”", "a shopkeeper /ˈʃɒpkiːpə/ [chopkipeur], fresh /freʃ/ [frèche]"),
      phonRow("/w/", "[ou]", "round the lips, like “oui”", "to work /wɜːk/ [oueurk], the weather [ouèdheur]"),
      phonRow("/j/", "[i] / [y]", "like the “y” of “yoyo”", "you /juː/ [iou], yearly /ˈjɪəli/ [yirli]"),
      phonRow("/r/", "[r]", "a soft English “r” — no rolling!", "rainy /ˈreɪni/ [réini], a restaurant [rèstoronnte]"),
    ]}),
    p("", { after: 100 }),
    p([run("The stress mark:", { bold: true, size: 30 })], { after: 60 }),
    pr([run("In IPA, the little mark "), run("ˈ", { bold: true, color: COLOR, size: 30 }), run(" shows the STRONG syllable: occupation /ˌɒkjuˈpeɪʃn/ — we hit the “PEI” part: "), run("oc-cu-PA-tion!", { bold: true, color: C.BLUE }), run(" In this book, say the audio model and copy its music.")], { after: 80 }),
    p([run("The dictionary speaks IPA — and now, you understand it!", { italic: true, color: C.GRAY, size: 26 })], { center: true }),
  ];
}

// ---------------- page finale ----------------
function finalPage() {
  return [
    p("", { after: 400 }),
    p([run("THE END OF THE BOOK — THE BEGINNING OF YOUR ENGLISH LIFE!", { bold: true, size: 40, color: COLOR })], { center: true, after: 200 }),
    img("koto_soa.png", 300, 768 / 1408),
    p([run("Koto and Soa say:", { bold: true, size: 30 })], { center: true, after: 80 }),
    p([run("“Goodbye, teacher! Goodbye, friends! Eighty-eight sessions — what a first year of lycée! We met new people, we described our homes, we healed the flu, we presented the weather on TV, we told our stories, we travelled the whole island, we ordered romazava in English, we found the job of our dreams and we left the perfect voicemail. Keep speaking — see you in Première!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T10", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI", { color: C.BLUE, size: 22 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    unitBanner("ANNEXES", COLOR, "annexes"),
    p("", { after: 100 }),
    p([run("The treasure box of the year!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 160 }),
    p([run("Annex 1 — Picture dictionary: all the words of the year", { size: 30 })], { after: 60 }),
    p([run("Annex 2 — The writer’s guide: the paragraph and the 100-word essay", { size: 30 })], { after: 60 }),
    p([run("Annex 3 — Pronunciation guide: for the teacher", { size: 30 })], { after: 60 }),
    p([run("Annex 4 — Flashcards to cut out: for the games", { size: 30 })], { after: 60 }),
    p([run("Annex 5 — Conjugation guide: all the grammar machines of T10", { size: 30 })], { after: 60 }),
    p([run("Annex 6 — Phonetics guide: the IPA and the brackets, side by side", { size: 30 })], { after: 60 }),
    pageBreak(),
    ...pictureDictionary(), pageBreak(),
    ...writersGuide(), pageBreak(),
    ...pronunciationGuide(), pageBreak(),
    ...flashcards(), pageBreak(),
    ...conjugation(), pageBreak(),
    ...phonetics(), pageBreak(),
    ...finalPage(),
  ];
};
module.exports.COLOR = COLOR;
