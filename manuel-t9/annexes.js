// T9 — ANNEXES — Picture dictionary, Songs & chants, Pronunciation guide, Flashcards,
//                 Conjugation guide, Phonetics guide (IPA + figurée)
const B = require("./builders");
const { C, SZ, run, p, pr, kw, unitBanner, audioBox, img, pageBreak,
        cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle, ExternalHyperlink } = require("docx");

const COLOR = "4A235A"; // violet foncé — couleur des annexes

const DRIVE = {
  chants: "https://drive.google.com/uc?export=download&id=1_sHPRoeFR-H4zJ0EPqx-jChFlT_Epcke",
};

function youtubeLine(label, url, after = 140) {
  return p([
    run("Also on YouTube: ", { italic: true, color: C.GRAY, size: 22 }),
    new ExternalHyperlink({ link: url, children: [
      run(label + " — " + url.replace("https://www.", ""), { italic: true, color: C.BLUE, size: 22 }),
    ]}),
  ], { center: true, after });
}

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
function songLine(t) { return p([run(t, { italic: true, size: 30 })], { center: true, after: 40 }); }

// ---------------- données de l'année T9 ----------------
const FEELINGS = [
  ["to feel great", "tou file gréite"], ["to feel sick", "tou file sik"], ["stressed", "strèste"],
  ["disappointed", "dissepoïnntide"], ["proud", "praoude"], ["joyful", "djoïfoule"],
];
const PREFER = [
  ["I like…", "aï laïk"], ["I love…", "aï leuve"], ["I prefer…", "aï prifeur"],
  ["I hate…", "aï héite"], ["my favourite…", "maï féivrite"], ["I’d rather…", "aïd radheur"],
];
const CLASSROOM = [
  ["to suggest", "tou seudjèste"], ["Let’s review!", "lèts riviou"], ["Why don’t we…?", "ouaï dôounte oui"],
  ["How about…?", "haou ebaoute"], ["to agree", "tou egri"], ["to disagree", "tou dissegri"],
];
const TIMEWORDS = [
  ["yesterday", "ièsteurdéi"], ["last weekend", "laste ouikènnde"], ["ago", "egôou"],
  ["used to", "iouzd tou"], ["when I was young", "ouène aï ouoz ieunng"], ["at that time", "ate dhate taïme"],
];
const FOODGROUPS = [
  ["energy foods", "ènerdji foudz"], ["body-building foods", "bodi-bildinng foudz"], ["protective foods", "protèktive foudz"],
  ["fresh", "frèche"], ["raw", "rô"], ["ripe", "raïpe"],
  ["canned", "kannde"], ["a balanced diet", "e balannsde daïète"], ["junk food", "djeunnk foude"],
];
const FAMILY = [
  ["be close to", "bi klôouss tou"], ["get on well with", "guète onne ouèl ouidh"], ["be on good terms", "bi onne goude teurmz"],
  ["proud of", "praoude ove"], ["disappointed with", "dissepoïnntide ouidh"], ["a role model", "e rôoul modeul"],
  ["to quarrel", "tou kouorel"], ["to discuss", "tou diskeuss"], ["to be allowed to", "tou bi elaoude tou"],
];
const PERMISSION = [
  ["May I…?", "méi aï"], ["Can I…?", "kane aï"], ["Go ahead!", "gôou ehède"],
  ["Sure!", "chour"], ["Be careful!", "bi kèrfoule"], ["Watch out!", "ouotch aoute"],
];
const HEALTH = [
  ["an illness", "ane ilnèsse"], ["a symptom", "e simmpteume"], ["dizziness", "dizinèsse"],
  ["a home remedy", "e hôoume rèmedi"], ["under the weather", "eunndeur dhe ouèdheur"], ["sick as a dog", "sik aze e dog"],
];
const STRESSW = [
  ["stress", "strèsse"], ["to let someone down", "tou lète someoueune daoune"], ["to balance work and play", "tou balannce oueurk annde pléï"],
  ["to keep calm", "tou kipe kame"], ["to chill out", "tou tchile aoute"], ["to hang out", "tou hanng aoute"],
];
const JOBS = [
  ["a teacher", "e titcheur"], ["a farmer", "e farmeur"], ["a driver", "e draïveur"],
  ["a hairdresser", "e hèrdrèseur"], ["a tailor", "e téïleur"], ["a carpenter", "e karpennteur"],
  ["a mechanic", "e mekanik"], ["a fisherman", "e ficheurmane"], ["a tourist guide", "e touriste gaïde"],
];
const INTERVIEW = [
  ["the interviewer", "dhi inntèrviou-eur"], ["the interviewee", "dhi inntèrviou-i"], ["the employer", "dhi immploïeur"],
  ["to hire", "tou haïeur"], ["full-time", "foule-taïme"], ["part-time", "parte-taïme"],
  ["a diploma", "e diplôouma"], ["qualifications", "kouolifikéïcheunz"], ["a deadline", "e dèdlaïne"],
];
const ENVIRONMENT = [
  ["rubbish / litter", "reubiche / liteur"], ["deforestation", "diforèstéïcheune"], ["a drought", "e draoute"],
  ["a flood", "e fleude"], ["infertile soil", "innfeurtaïle soïle"], ["extinction", "ikstinngkcheune"],
  ["global warming", "glôoubal ouormingue"], ["renewable energy", "riniouebeul ènerdji"], ["to plant trees", "tou plannte triz"],
];
const EARTHDAY = [
  ["Earth Day", "eurth déï"], ["to celebrate", "tou sèlebréïte"], ["to march", "tou martche"],
  ["a parade", "e peréïde"], ["to lecture", "tou lèktcheur"], ["a presentation", "e prézenntéïcheune"],
];

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the big words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("FEELINGS AND PREFERENCES (Unit 1)"),
    p("", { after: 40 }),
    img("u1_feelings.png", 340, 768 / 1376),
    wordGrid(FEELINGS, 3),
    p("", { after: 40 }),
    wordGrid(PREFER, 3),
    p("", { after: 40 }),
    pr([...kw("How are you feeling today?", "haou âr iou filinng toudéi"), run("  →  "), ...kw("I feel great!", "aï file gréite")], { after: 140 }),

    themeBar("CLASSROOM COMMUNICATION (Unit 2)"),
    p("", { after: 40 }),
    img("u2_classroom.png", 340, 768 / 1376),
    wordGrid(CLASSROOM, 3),
    p("", { after: 40 }),
    pr([...kw("Why don’t we review the lesson?", "ouaï dôounte oui riviou dhe lèsseune"), run("  →  "), ...kw("Good idea!", "goude aïdi-e")], { after: 140 }),

    themeBar("OUR TIME — PAST AND LEISURE (Unit 3)"),
    p("", { after: 40 }),
    img("u3_vacation.png", 340, 768 / 1376),
    wordGrid(TIMEWORDS, 3),
    p("", { after: 40 }),
    pr([...kw("I used to swim in the river.", "aï iouzd tou souime inn dhe riveur"), run("  →  "), ...kw("So did I!", "sôou dide aï")], { after: 140 }),

    themeBar("FOOD (Unit 4)"),
    p("", { after: 40 }),
    img("u4_foodgroups.png", 340, 768 / 1376),
    wordGrid(FOODGROUPS, 3),
    p("", { after: 40 }),
    pr([...kw("You should eat more protective foods!", "iou choude ite môr protèktive foudz")], { after: 140 }),

    themeBar("FAMILY (Unit 5)"),
    p("", { after: 40 }),
    img("u5_family.png", 340, 768 / 1376),
    wordGrid(FAMILY, 3),
    p("", { after: 40 }),
    wordGrid(PERMISSION, 3),
    p("", { after: 40 }),
    pr([...kw("May I come in?", "méi aï keume inn"), run("  →  "), ...kw("Of course! Go ahead!", "ove kôrss! gôou ehède")], { after: 140 }),

    themeBar("HEALTHY LIFE (Unit 6)"),
    p("", { after: 40 }),
    img("u6_doctor.png", 340, 768 / 1376),
    wordGrid(HEALTH, 3),
    p("", { after: 40 }),
    wordGrid(STRESSW, 3),
    p("", { after: 40 }),
    pr([...kw("I’m under the weather.", "aïme eunndeur dhe ouèdheur"), run("  →  "), ...kw("You’ll be better in no time!", "ioul bi bèteur inn nôou taïme")], { after: 140 }),

    themeBar("JOB AND MASS MEDIA (Unit 7)"),
    p("", { after: 40 }),
    img("u7_jobs.png", 340, 768 / 1376),
    wordGrid(JOBS, 3),
    p("", { after: 40 }),
    wordGrid(INTERVIEW, 3),
    p("", { after: 40 }),
    pr([...kw("I have worked as a cook for 15 years.", "aï have oueurkte aze e kouk fôr fiftine yirz")], { after: 140 }),

    themeBar("ENVIRONMENT (Unit 8)"),
    p("", { after: 40 }),
    img("u8_protect.png", 340, 768 / 1376),
    wordGrid(ENVIRONMENT, 3),
    p("", { after: 40 }),
    wordGrid(EARTHDAY, 3),
    p("", { after: 40 }),
    pr([...kw("Let’s keep planting trees!", "lèts kipe planntinng triz"), run("  →  "), ...kw("Keep Madagascar green!", "kipe madegaskâr grine")], { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND CHANTS ----------------
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND CHANTS"),
    p([run("The three chants of T9 — to warm up the class in ten seconds, even in exam year!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 80 }),
    p([run("Note for the teacher: a chant is SPOKEN with a strong rhythm — clap your hands: TA-ta-ta TA-ta-ta! The QR code version matches the words of this book. The traditional warm-up songs also exist in video on YouTube: the links are under each song.",
      { italic: true, color: C.GRAY, size: 22 })], { after: 160 }),

    themeBar("♪ THE PERMISSION CHANT (Unit 5)"),
    p("", { after: 60 }),
    songLine("May I come in? Of course you may!"),
    songLine("Can I open the window? Go ahead!"),
    songLine("Be careful! Watch out! Mind the step!"),
    songLine("Ask politely — and you’ll be OK!"),
    p("", { after: 100 }),

    themeBar("♪ THE SINCE AND FOR CHANT (Unit 7)"),
    p("", { after: 60 }),
    songLine("Since 2010, for fifteen years,"),
    songLine("I have worked, I have learnt — no fears!"),
    songLine("Since a starting point, for a duration:"),
    songLine("present perfect, that’s the lesson!"),
    p("", { after: 100 }),

    themeBar("♪ THE GREEN CHANT (Unit 8)"),
    p("", { after: 60 }),
    songLine("Stop cutting, keep planting,"),
    songLine("put the litter in the bin!"),
    songLine("Save the water, ride a bicycle —"),
    songLine("and let the green team win!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_annex_chants.png", label: "The three T9 chants — listen and clap",
      url: DRIVE.chants }], COLOR),
    p("", { after: 60 }),

    themeBar("♪ THE TRADITIONAL SONGS (warm-up treasure)"),
    p("", { after: 60 }),
    p([run("The alphabet song", { bold: true, color: COLOR, size: 30 })], { center: true, after: 40 }),
    songLine("A B C D E F G, H I J K L M N O P,"),
    songLine("Q R S, T U V, W X, Y and Z!"),
    youtubeLine("“The ABC Song” (KidsTV123)", "https://www.youtube.com/watch?v=75p-N9YKqNo", 100),
    p([run("The number rhyme", { bold: true, color: COLOR, size: 30 })], { center: true, after: 40 }),
    songLine("1, 2, put on your shoe — 3, 4, shut the door —"),
    songLine("5, 6, pick up sticks — 7, 8, go to the gate — 9, 10, say it again!"),
    youtubeLine("“One Two Buckle My Shoe” (traditional)", "https://www.youtube.com/watch?v=fhIm8dn1Gmg", 100),
    p([run("The days of the week", { bold: true, color: COLOR, size: 30 })], { center: true, after: 40 }),
    songLine("Monday, Tuesday, Wednesday, Thursday, Friday too,"),
    songLine("Saturday and Sunday: seven days for you!"),
    youtubeLine("“Days of the Week Song” (Dream English)", "https://www.youtube.com/watch?v=36n93jvjkDs", 60),
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
    pr([...kw("environment", "innvaïreunnmeunnte"), run("  —  we read “innvaïreunnmeunnte” as in French.")], { after: 120 }),
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it! And remember: the pupils never copy the brackets in their copy-books.", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples from this book", 4100)] }),
      pronRow("th → [dh]", "Put the tongue between the teeth and let the voice vibrate, like a soft “z”.", "the weather [dhe ouèdheur], this [dhiss], rather [radheur]"),
      pronRow("th → [th]", "Same tongue between the teeth, but NO voice — just air.", "healthy [hèlthi], three [thri], thank you [thannk iou]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "to hire [tou haïeur], healthy [hèlthi], ahead [ehède]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "rubbish [reubiche], proud [praoude], renewable [riniouebeul]"),
      pronRow("-ing → [ing]", "A nasal “ng” at the end, like a small bell.", "planting [planntinng], global warming [glôoubal ouormingue]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "proud [praoude], drought [draoute], Watch out! [ouotch aoute]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "ago [egôou], a role model [e rôoul modeul], Go ahead! [gôou ehède]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "a parade [e peréïde], to celebrate [tou sèlebréïte], May [méi]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "to hire [tou haïeur], ripe [raïpe], a deadline [e dèdlaïne]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "junk food [djeunnk foude], rubbish [reubiche], a flood [e fleude]"),
      pronRow("ee / ea → [ii]", "A long “i”, smile!", "to feel [tou file], to agree [tou egri], to keep calm [tou kipe kame]"),
      pronRow("silent letters", "Some letters are written but NOT said!", "a carpenter [e karpennteur] (soft r!), to march [tou martche] (soft r!)"),
    ]}),
    p("", { after: 140 }),
    p([run("The three golden rules of the exam year:", { bold: true, size: 30 })], { after: 60 }),
    p("1. Model first: the teacher (or the audio) says the word 3 times, the class repeats in chorus, then in rows, then alone."),
    p("2. Short and often: five minutes of speaking in every session beat one long hour once a month."),
    p("3. Praise every try: “Good!”, “Very good!”, “Well done!” — mistakes are welcome, they help us learn."),
  ];
}

// ---------------- ANNEX 4 — FLASHCARDS ----------------
function flashcards() {
  const strip = ([w, pn]) => [w.replace(/^an? /, "").replace(/^the /, ""),
                              pn.replace(/^(e|eune?|dh[ei])\s+/, "")];
  return [
    ...annexTitle("ann4", "4", "FLASHCARDS TO CUT OUT"),
    p([run("For the teacher: ", { bold: true }),
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, Simon says, bingo, matching job–place, ask for permission, quiz quiz trade…")],
      { after: 160 }),

    themeBar("THE FEELINGS AND THE PREFERENCES (Unit 1)"),
    p("", { after: 60 }),
    flashTable(FEELINGS.map(([w, pn]) => [w.replace(/^to /, ""), pn.replace(/^tou /, "")]), 3, 36),
    p("", { after: 60 }),
    flashTable(PREFER, 3, 40),
    pageBreak(),

    themeBar("THE TIME MARKERS (Unit 3)"),
    p("", { after: 60 }),
    flashTable(TIMEWORDS, 3, 34),
    p("", { after: 60 }),
    themeBar("THE FOOD GROUPS AND THE FOOD WORDS (Unit 4)"),
    p("", { after: 60 }),
    flashTable(FOODGROUPS.map(strip), 3, 30),
    pageBreak(),

    themeBar("THE PERMISSION AND THE WARNINGS (Unit 5)"),
    p("", { after: 60 }),
    flashTable(PERMISSION, 3, 36),
    p("", { after: 60 }),
    themeBar("THE HEALTH WORDS AND THE IDIOMS (Unit 6)"),
    p("", { after: 60 }),
    flashTable(HEALTH.map(strip), 3, 30),
    pageBreak(),

    themeBar("THE JOBS (Unit 7)"),
    p("", { after: 60 }),
    flashTable(JOBS.map(strip), 3, 34),
    p("", { after: 60 }),
    themeBar("THE PLANET WORDS (Unit 8)"),
    p("", { after: 60 }),
    flashTable(ENVIRONMENT.slice(0, 6).map(strip), 3, 28),
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
  ["write", "wrote", "written"], ["read", "read (red!)", "read (red!)"], ["win", "won", "won"],
  ["speak", "spoke", "spoken"], ["teach", "taught", "taught"], ["buy", "bought", "bought"],
  ["tell", "told", "told"], ["find", "found", "found"], ["grow", "grew", "grown"],
];
function irregularGrid() {
  const rows = [new TableRow({ children: ["Base", "Past", "Past participle"].map(t => cell(
    [p([run(t, { bold: true, color: COLOR, size: 24 })], { center: true, after: 20 })],
    { shade: "F4ECF7", vAlign: VerticalAlign.CENTER })).flatMap(c => [c]).concat(
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
    p([run("All the grammar machines of T9 — the exam-year toolbox, on a few pages!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("1. THE THREE KINGS: BE, HAVE, DO"),
    p("", { after: 60 }),
    conjTable(["Person", "BE (present / past)", "HAVE (present / past)", "DO (present / past)"], [
      ["I", "am / was", "have / had", "do / did"],
      ["you, we, they", "are / were", "have / had", "do / did"],
      ["he, she, it", "is / was", "has / had", "does / did"],
    ]),
    p("", { after: 100 }),

    themeBar("2. THE TWO PRESENTS (Unit 1)"),
    p("", { after: 60 }),
    conjTable(["Tense", "When?", "Example"], [
      ["Present simple", "habits, facts, likes", "I prefer rice. She feels great every morning."],
      ["Present continuous", "NOW, at this moment", "I am feeling nervous. They are reviewing Unit 2."],
    ]),
    p("", { after: 100 }),

    themeBar("3. THE PAST AND “USED TO” (Unit 3)"),
    p("", { after: 60 }),
    conjTable(["Form", "Rule", "Example"], [
      ["Past simple (+)", "verb + -ed / irregular form", "We visited Toamasina. I went to the beach."],
      ["Past simple (−)", "did not + base verb", "He did not come last weekend."],
      ["Past simple (?)", "Did + subject + base verb?", "Did you watch the match yesterday?"],
      ["used to (+)", "used to + base verb (old habit, finished)", "I used to swim in the river when I was young."],
      ["used to (−/?)", "didn’t use to… / Did you use to…?", "She didn’t use to like tea. Did you use to play here?"],
    ]),
    p("", { after: 100 }),

    themeBar("4. THE PRESENT PERFECT — SINCE AND FOR (Unit 7)"),
    p("", { after: 60 }),
    conjTable(["Form", "Rule", "Example"], [
      ["+ (affirmative)", "have/has + past participle", "I have worked here since 2018."],
      ["− (negative)", "have/has not + past participle", "She has not finished her report yet."],
      ["? (question)", "Have/Has + subject + past participle?", "How long have you lived in Antananarivo?"],
      ["since", "+ a STARTING POINT", "since Monday, since 2010, since my childhood"],
      ["for", "+ a DURATION", "for two hours, for fifteen years, for a long time"],
    ]),
    rule("Present perfect vs past simple", [run("Finished time word (yesterday, last year, in 2015…) → "), run("past simple", { bold: true }), run(". Link with NOW (since, for, just, already, yet…) → "), run("present perfect", { bold: true }), run(".")]),
    p("", { after: 100 }),

    themeBar("5. THE IRREGULAR VERBS — THE THREE FORMS"),
    p("", { after: 60 }),
    irregularGrid(),
    p("", { after: 100 }),
    pageBreak(),

    themeBar("6. THE FUTURES (Units 3 and 8)"),
    p("", { after: 60 }),
    conjTable(["Future", "When?", "Example"], [
      ["will + base verb", "prediction, promise, instant decision", "Our planet will suffer if we do nothing."],
      ["be going to + base verb", "a plan, an intention", "We are going to plant 100 trees for Earth Day."],
      ["present continuous", "a fixed arrangement", "We are marching in the parade on Saturday."],
    ]),
    p("", { after: 100 }),

    themeBar("7. THE MODALS (Units 2, 4, 5, 6)"),
    p("", { after: 60 }),
    rule("may / can (Unit 5)", [run("May I come in? Can I open the window? — "), run("may", { bold: true }), run(" is more formal, "), run("can", { bold: true }), run(" is friendly. Answer: Of course you may! / Go ahead!")]),
    rule("should (Units 4 and 6)", [run("You "), run("should", { bold: true }), run(" eat more fruit. You "), run("shouldn’t", { bold: true }), run(" skip breakfast. Never -s, never “to”!")]),
    rule("must / have to (Unit 6)", [run("You "), run("must", { bold: true }), run(" see a doctor (strong!). I "), run("have to", { bold: true }), run(" balance work and play.")]),
    rule("Suggestions (Unit 2)", [run("Why don’t we review? How about "), run("reviewing", { bold: true }), run("? Let’s review! (How about + verb-ing!)")], { after: 100 }),

    themeBar("8. THE REPORTED SPEECH — ONE STEP BACK (Unit 7)"),
    p("", { after: 60 }),
    conjTable(["Direct speech", "Reported speech", "The step back"], [
      ["“I am happy,” she said.", "She said (that) she was happy.", "present → past"],
      ["“I work here,” he said.", "He said (that) he worked there.", "present simple → past simple"],
      ["“I will come,” she said.", "She said (that) she would come.", "will → would"],
      ["“I can help,” he said.", "He said (that) he could help.", "can → could"],
      ["“Where do you live?” he asked.", "He asked me where I lived.", "question → statement order"],
    ]),
    p("", { after: 100 }),

    themeBar("9. THE IF SENTENCES — TYPES 1, 2 AND 3 (Units 6 and 8)"),
    p("", { after: 60 }),
    conjTable(["Type", "Structure", "Example"], [
      ["Type 1 (real)", "If + present, … will + base verb", "If we stop cutting trees, the forest will come back."],
      ["Type 2 (imaginary)", "If + past, … would + base verb", "If I were you, I would drink more water."],
      ["Type 3 (too late!)", "If + past perfect, … would have + participle", "If we had protected the forest, the lemurs would not have left."],
    ]),
    p("", { after: 100 }),

    themeBar("10. SMALL BUT MIGHTY"),
    p("", { after: 60 }),
    rule("The relative pronouns (Unit 7)", [run("who", { bold: true }), run(" for people, "), run("which", { bold: true }), run(" for things, "), run("where", { bold: true }), run(" for places: A farmer is a person who grows crops.")]),
    rule("The comparatives (Unit 4)", [run("healthier than, more expensive than, as good as, the best / the worst. Junk food is "), run("less healthy than", { bold: true }), run(" fresh food.")]),
    rule("The gerund (Units 2 and 8)", [run("After stop / keep / enjoy / how about → verb + "), run("-ing", { bold: true }), run(": Stop cutting! Keep planting! I enjoy reading.")]),
    rule("The question words", [run("What, Where, When, Who, Why, How, How long, How often — How long have you worked here?")]),
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
    p("In the dictionaries, the pronunciation is written with special symbols: the International Phonetic Alphabet (IPA), between slashes: /dʒɒb/. In this book, we used easy brackets read as in French: [djob]. This annex puts the two systems side by side — so you are ready for the dictionary, and for the exam!", { after: 80 }),
    pr([run("Example: "), run("job", { bold: true, color: C.BLUE }), run("  →  IPA "), run("/dʒɒb/", { bold: true, color: COLOR }), run("  =  this book "), run("[djob]", { italic: true, color: C.GRAY }), run(". The two say the same sound!")], { after: 140 }),

    p([run("THE VOWELS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/iː/", "[ii] / [i]", "a long “i” — smile!", "to feel /fiːl/ [file], to agree /əˈɡriː/ [egri]"),
      phonRow("/ɪ/", "[i]", "a short, quick “i”", "sick /sɪk/ [sik], to win /wɪn/ [ouine]"),
      phonRow("/e/", "[è]", "like “è” in French", "healthy /ˈhelθi/ [hèlthi], the weather /ˈweðə/ [ouèdheur]"),
      phonRow("/æ/", "[a]", "an “a” with a big open mouth", "family /ˈfæməli/ [famili], a mechanic /məˈkænɪk/ [mekanik]"),
      phonRow("/ɑː/", "[â]", "a long, deep “a”", "a carpenter /ˈkɑːpəntə/ [karpennteur], a farm /fɑːm/ [farme]"),
      phonRow("/ɒ/", "[o]", "a short “o”", "a job /dʒɒb/ [djob], a doctor /ˈdɒktə/ [dokteur]"),
      phonRow("/ɔː/", "[ô]", "a long “ô”", "water /ˈwɔːtə/ [ouôteur], global warming /ˈwɔːmɪŋ/ [ouormingue]"),
      phonRow("/ʊ/ /uː/", "[ou]", "like “ou” in French", "food /fuːd/ [foude], you /juː/ [iou]"),
      phonRow("/ʌ/", "[eu]", "a short “eu”, mouth relaxed", "junk /dʒʌŋk/ [djeunnk], a flood /flʌd/ [fleude]"),
      phonRow("/ɜː/", "[eur]", "a long “eur”", "to work /wɜːk/ [oueurk], an interview /ˈɪntəvjuː/ [inntèrviou]"),
      phonRow("/ə/", "[e]", "the tiny lazy sound of English!", "a teacher /ˈtiːtʃə/ [titcheur], an employer /ɪmˈplɔɪə/ [immploïeur]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE DOUBLE VOWELS (two sounds in one!)", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/eɪ/", "[éi]", "“é” then “i”", "a parade /pəˈreɪd/ [peréïde], May /meɪ/ [méi]"),
      phonRow("/aɪ/", "[aï]", "“a” then “i”", "to hire /ˈhaɪə/ [haïeur], a deadline /ˈdedlaɪn/ [dèdlaïne]"),
      phonRow("/ɔɪ/", "[oï]", "“o” then “i”", "joyful /ˈdʒɔɪfl/ [djoïfoule], to spoil /spɔɪl/ [spoïl]"),
      phonRow("/əʊ/", "[ôou]", "“ô” then “ou”", "a role model /rəʊl/ [rôoul], ago /əˈɡəʊ/ [egôou]"),
      phonRow("/aʊ/", "[aou]", "“a” then “ou”", "proud /praʊd/ [praoude], a drought /draʊt/ [draoute]"),
      phonRow("/eə/", "[è(r)]", "“è” with a little “r”", "to be careful /ˈkeəfl/ [kèrfoule], where /weə/ [ouèr]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE SPECIAL CONSONANTS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/ð/", "[dh]", "tongue between the teeth + voice", "the weather /ˈweðə/ [ouèdheur], rather /ˈrɑːðə/ [radheur]"),
      phonRow("/θ/", "[th]", "tongue between the teeth, air only", "healthy /ˈhelθi/ [hèlthi], three /θriː/ [thri]"),
      phonRow("/h/", "[h]", "a soft blow — never silent!", "to hire /ˈhaɪə/ [haïeur], ahead /əˈhed/ [ehède]"),
      phonRow("/ŋ/", "[nng] / [ing]", "the nasal “ng” bell", "planting /ˈplɑːntɪŋ/ [planntinng], junk /dʒʌŋk/ [djeunnk]"),
      phonRow("/tʃ/", "[tch]", "like “tch” in “tchak”", "to watch /wɒtʃ/ [ouotch], to march /mɑːtʃ/ [martche]"),
      phonRow("/dʒ/", "[dj]", "like “dj” in “Djibouti”", "a job /dʒɒb/ [djob], energy /ˈenədʒi/ [ènerdji]"),
      phonRow("/ʃ/", "[ch]", "like “ch” in “chat”", "rubbish /ˈrʌbɪʃ/ [reubiche], fresh /freʃ/ [frèche]"),
      phonRow("/w/", "[ou]", "round the lips, like “oui”", "to work /wɜːk/ [oueurk], to win /wɪn/ [ouine]"),
      phonRow("/j/", "[i] / [y]", "like the “y” of “yoyo”", "you /juː/ [iou], used to /ˈjuːst tə/ [iouzd tou]"),
      phonRow("/r/", "[r]", "a soft English “r” — no rolling!", "ripe /raɪp/ [raïpe], renewable /rɪˈnjuːəbl/ [riniouebeul]"),
    ]}),
    p("", { after: 100 }),
    p([run("The stress mark:", { bold: true, size: 30 })], { after: 60 }),
    pr([run("In IPA, the little mark "), run("ˈ", { bold: true, color: COLOR, size: 30 }), run(" shows the STRONG syllable: interview /ˈɪntəvjuː/ — we hit the FIRST part: "), run("IN-ter-view!", { bold: true, color: C.BLUE }), run(" In this book, say the audio model and copy its music.")], { after: 80 }),
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
    p([run("“Goodbye, teacher! Goodbye, friends! Eighty-six sessions — what a year! We shared our feelings, we travelled back in time, we balanced our meals, we asked politely, we beat the stress, we got the job and we kept Madagascar green… in English! Keep speaking — and good luck at the exam!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T9", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/1yVMjApTYJ9E6u-JYotg6xhdworhxNbMA", { color: C.BLUE, size: 22 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    unitBanner("ANNEXES", COLOR, "annexes"),
    p("", { after: 100 }),
    p([run("The treasure box of the exam year!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 160 }),
    p([run("Annex 1 — Picture dictionary: all the words of the year", { size: 30 })], { after: 60 }),
    p([run("Annex 2 — Songs and chants: with the audio and the videos", { size: 30 })], { after: 60 }),
    p([run("Annex 3 — Pronunciation guide: for the teacher", { size: 30 })], { after: 60 }),
    p([run("Annex 4 — Flashcards to cut out: for the games", { size: 30 })], { after: 60 }),
    p([run("Annex 5 — Conjugation guide: all the grammar machines of T9", { size: 30 })], { after: 60 }),
    p([run("Annex 6 — Phonetics guide: the IPA and the brackets, side by side", { size: 30 })], { after: 60 }),
    pageBreak(),
    ...pictureDictionary(), pageBreak(),
    ...songs(), pageBreak(),
    ...pronunciationGuide(), pageBreak(),
    ...flashcards(), pageBreak(),
    ...conjugation(), pageBreak(),
    ...phonetics(), pageBreak(),
    ...finalPage(),
  ];
};
module.exports.COLOR = COLOR;
