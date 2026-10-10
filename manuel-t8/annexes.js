// T8 — ANNEXES — Picture dictionary, Songs & chants, Pronunciation guide, Flashcards,
//                 Conjugation guide, Phonetics guide (IPA + figurée)
const B = require("./builders");
const { C, SZ, run, p, pr, kw, unitBanner, audioBox, img, pageBreak,
        cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle, ExternalHyperlink } = require("docx");

const COLOR = "4A235A"; // violet foncé — couleur des annexes

const DRIVE = {
  chants: "https://drive.google.com/uc?export=download&id=1G1RMaQNh8ueLw8mlNu1vAhUWQ3z43VMS",
};

// ligne "Also on YouTube" — lien cliquable sous une chanson traditionnelle
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

// ---------------- données de l'année T8 ----------------
const FEELINGS = [
  ["happy", "hapi"], ["sad", "sade"], ["angry", "anngri"],
  ["tired", "taïeurde"], ["scared", "skèrde"], ["surprised", "seurpraïzde"],
  ["excited", "iksaïtide"], ["worried", "oueuride"], ["proud", "praoude"],
];
const INSTRUCTIONS = [
  ["Stand up!", "stannde eup"], ["Sit down!", "site daoune"], ["Open your books!", "ôoupeune iôr bouks"],
  ["Listen carefully!", "lisseune kèrfouli"], ["Repeat after me!", "ripite afteur mi"],
  ["Raise your hand!", "réiz iôr hannde"], ["Come to the board!", "keume tou dhe bôrde"],
  ["Work in pairs!", "oueurk inne pèrz"], ["Don’t talk!", "dôounte tôk"],
];
const BORROW = [
  ["to borrow", "tou borôou"], ["to lend", "tou lènnde"], ["to give back", "tou guive bak"],
];
const DAILY = [
  ["to wake up", "tou ouéik eup"], ["to get up", "tou guète eup"], ["to make the bed", "tou méik dhe bède"],
  ["to fetch water", "tou fètch ouôteur"], ["to tidy the room", "tou taïdi dhe roume"], ["to sweep the floor", "tou souipe dhe flôr"],
  ["to cook the meal", "tou kouk dhe mile"], ["to wash the dishes", "tou ouôch dhe dichiz"], ["to go to bed", "tou gôou tou bède"],
];
const ADVERBS = [
  ["always", "ôlouéiz"], ["usually", "ioujouali"], ["often", "ofeune"],
  ["sometimes", "seumtaïmz"], ["rarely", "rèrli"], ["never", "nèveur"],
];
const TRANSPORT = [
  ["on foot", "onne foute"], ["by bus", "baï beuss"], ["by car", "baï kâr"],
  ["by train", "baï tréine"], ["by boat", "baï bôoute"], ["by plane", "baï pléine"],
];
const HOBBIES = [
  ["play football", "pléi foutbôl"], ["play basketball", "pléi baskètbôl"], ["play dominoes", "pléi dominôouz"],
  ["play chess", "pléi tchèss"], ["play fanorona", "pléi fanourouna"], ["play the guitar", "pléi dhe guitâr"],
  ["go swimming", "gôou souiming"], ["go running", "gôou reuning"], ["go angling", "gôou anngling"],
  ["watch TV", "ouôtch tivi"], ["listen to music", "lisseune tou miouzik"], ["play video games", "pléi vidiôou guéimz"],
];
const MARKET = [
  ["to buy", "tou baï"], ["to sell", "tou sèl"], ["to pay", "tou péi"],
  ["to bargain", "tou bârguine"], ["expensive", "ikspennsive"], ["cheap", "tchipe"],
  ["the vendor", "dhe venndeur"], ["the bakery", "dhe béikeuri"], ["the butcher’s", "dhe boutcheurz"],
];
const KITCHEN = [
  ["the pot", "dhe pote"], ["the ladle", "dhe léideul"], ["the bowl", "dhe bôoul"],
  ["the frying pan", "dhe fraïng pane"], ["the spoon", "dhe spoune"], ["the fork", "dhe fôrk"],
];
const COOKVERBS = [
  ["cut", "keute"], ["chop", "tchope"], ["pour", "pôr"],
  ["stir", "steur"], ["boil", "boïl"], ["peel", "pile"],
  ["fry", "fraï"], ["crush", "kreuche"], ["serve", "seurve"],
];
const ILLNESSES = [
  ["a cold", "e côoulde"], ["a cough", "e kof"], ["the flu", "dhe flou"],
  ["a fever", "e fiveur"], ["a headache", "e hèdéik"], ["a stomachache", "e steumeukéik"],
  ["a toothache", "e touthéik"], ["malaria", "melèria"], ["healthy ≠ sick", "hèlthi ≠ sik"],
];
const CURES = [
  ["medicine", "mèdissine"], ["tablets", "tablèts"], ["pills", "pilz"],
  ["syrup", "sireupe"], ["an injection", "eune inndjèkcheune"], ["a prescription", "e priskripcheune"],
];
const HYGIENE = [
  ["germs", "djeurmz"], ["viruses", "vaïreussiz"], ["parasites", "paressaïts"],
  ["to wash", "tou ouôch"], ["to take a bath", "tou téik e bath"], ["to brush one’s teeth", "tou breuche ouannz tith"],
];
const MEDIA = [
  ["the radio", "dhe réidiôou"], ["the TV", "dhe tivi"], ["the phone", "dhe fôoune"],
  ["the email", "dhe iméil"], ["the letters", "dhe lèteurz"], ["the newspaper", "dhe niouzpéipeur"],
  ["to log in", "tou logue inne"], ["to post", "tou pôouste"], ["to log out", "tou logue aoute"],
];
const PHONE = [
  ["to call", "tou kôl"], ["to pick up the phone", "tou pik eup dhe fôoune"], ["to hang up", "tou hanng eup"],
  ["to send a message", "tou sènnde e mèssidj"], ["to receive a message", "tou rissive e mèssidj"], ["to text", "tou tèkste"],
];
const CITY = [
  ["the town hall", "dhe taoune hôl"], ["the post office", "dhe pôouste ofiss"], ["the bank", "dhe bannk"],
  ["the hospital", "dhe hospiteul"], ["the train station", "dhe tréine stéicheune"], ["the library", "dhe laïbreri"],
  ["the market", "dhe mârkite"], ["the park", "dhe pârk"], ["the church", "dhe tcheurtch"],
];
const COUNTRY = [
  ["the village", "dhe viladj"], ["the rice fields", "dhe raïss fildz"], ["the well", "dhe ouèl"],
];
const DIRECTIONS = [
  ["turn left", "teurn lèft"], ["turn right", "teurn raïte"], ["go straight on", "gôou stréite onne"],
  ["the corner", "dhe kôrneur"], ["the roundabout", "dhe raounndebaoute"], ["opposite", "opeuzite"],
];
const PREPOSITIONS = [
  ["next to", "nèkste tou"], ["between", "bitouine"], ["opposite", "opeuzite"],
  ["in front of", "inne freunnte ov"], ["behind", "bihaïnnde"], ["near", "nir"],
];
const ACRONYMS = [
  ["GR8 = great", ""], ["CU = see you", ""], ["2DAY = today", ""],
  ["THX = thanks", ""], ["BTW = by the way", ""], ["LOL = laughing out loud", ""],
  ["ASAP = as soon as possible", ""], ["B4 = before", ""],
];

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the big words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("FEELINGS AND PLANS (Unit 1)"),
    p("", { after: 40 }),
    img("u1_feelings.png", 340, 768 / 1376),
    wordGrid(FEELINGS, 3),
    p("", { after: 40 }),
    pr([...kw("How are you feeling?", "haou âr iou filing"), run("  →  "), ...kw("I feel great!", "aï file gréite")]),
    pr([...kw("I am going to visit my grandmother.", "aï amme gôouing tou vizite maï grannmeudheur")], { after: 140 }),

    themeBar("CLASSROOM COMMUNICATION (Unit 2)"),
    p("", { after: 40 }),
    img("u2_stickfigures.png", 340, 768 / 1376),
    wordGrid(INSTRUCTIONS, 3),
    p("", { after: 40 }),
    wordGrid(BORROW, 3),
    p("", { after: 40 }),
    pr([...kw("May I borrow your pen, please?", "méi aï borôou iôr pène pliiz"), run("  →  "), ...kw("Of course! Here you are.", "ov kôrss! hir iou âr")], { after: 140 }),

    themeBar("DAILY LIFE (Unit 3)"),
    p("", { after: 40 }),
    img("u3_daily_routine.png", 340, 768 / 1376),
    wordGrid(DAILY, 3),
    p("", { after: 40 }),
    wordGrid(ADVERBS, 3),
    p("", { after: 40 }),
    wordGrid(TRANSPORT, 3),
    p("", { after: 40 }),
    img("u3_hobbies.png", 340, 768 / 1376),
    wordGrid(HOBBIES, 3),
    p("", { after: 40 }),
    pr([...kw("How often do you fetch water?", "haou ofeune dou iou fètch ouôteur"), run("  →  "), ...kw("I usually fetch water in the morning.", "aï ioujouali fètch ouôteur inne dhe môrning")], { after: 140 }),

    themeBar("FOOD (Unit 4)"),
    p("", { after: 40 }),
    img("u4_market.png", 340, 768 / 1376),
    wordGrid(MARKET, 3),
    p("", { after: 40 }),
    img("u4_cooking.png", 340, 768 / 1376),
    wordGrid(KITCHEN, 3),
    p("", { after: 40 }),
    wordGrid(COOKVERBS, 3),
    p("", { after: 40 }),
    pr([...kw("How much is a kilo of rice?", "haou meutch iz e kilôou ov raïss"), run("  →  "), ...kw("How about seven thousand?", "haou ebaoute sèveune thaouzeunnde")], { after: 140 }),

    themeBar("PREVENTIVE HEALTH (Unit 5)"),
    p("", { after: 40 }),
    img("u5_doctor.png", 340, 768 / 1376),
    wordGrid(ILLNESSES, 3),
    p("", { after: 40 }),
    wordGrid(CURES, 3),
    p("", { after: 40 }),
    img("u5_hygiene.png", 340, 768 / 1376),
    wordGrid(HYGIENE, 3),
    p("", { after: 40 }),
    pr([...kw("I’ve got a headache.", "aïv gote e hèdéik"), run("  →  "), ...kw("You should rest. Get well soon!", "iou choude rèste. guète ouèl soune")], { after: 140 }),

    themeBar("MEANS OF COMMUNICATION (Unit 6)"),
    p("", { after: 40 }),
    img("u6_media.png", 340, 768 / 1376),
    wordGrid(MEDIA, 3),
    p("", { after: 40 }),
    wordGrid(PHONE, 3),
    p("", { after: 40 }),
    pr([...kw("What’s new?", "ouats niou"), run("  →  "), ...kw("Nothing special, same as always!", "neuthing spècheul, séime az ôlouéiz")]),
    pr([...kw("May I speak to Hery, please?", "méi aï spike tou Hery pliiz")], { after: 140 }),

    themeBar("MY CITY, MY COUNTRY (Unit 7)"),
    p("", { after: 40 }),
    img("u7_city.png", 340, 768 / 1376),
    wordGrid(CITY, 3),
    p("", { after: 40 }),
    wordGrid(COUNTRY, 3),
    p("", { after: 40 }),
    wordGrid(DIRECTIONS, 3),
    p("", { after: 40 }),
    wordGrid(PREPOSITIONS, 3),
    p("", { after: 40 }),
    pr([...kw("How can I get to the post office?", "haou kane aï guète tou dhe pôouste ofiss"), run("  →  "), ...kw("Go straight on, then turn left!", "gôou stréite onne, dhène teurn lèft")], { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND CHANTS ----------------
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND CHANTS"),
    p([run("The three chants of T8 — and the traditional songs, to warm up the class in ten seconds!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 80 }),
    p([run("Note for the teacher: a chant is SPOKEN with a strong rhythm — clap your hands: TA-ta-ta TA-ta-ta! The QR code version matches the words of this book. The traditional songs also exist in video on YouTube: the links are under each song.",
      { italic: true, color: C.GRAY, size: 22 })], { after: 160 }),

    themeBar("♪ THE FREQUENCY CHANT (Unit 3)"),
    p("", { after: 60 }),
    songLine("Always, usually, often, sometimes, rarely, never!"),
    songLine("I always brush my teeth, I usually fetch the water,"),
    songLine("I sometimes play dominoes —"),
    songLine("and I never, never give up!"),
    p("", { after: 100 }),

    themeBar("♪ THE IF CLAUSE CHANT (Unit 5)"),
    p("", { after: 60 }),
    songLine("If you wash your hands, you will stay healthy!"),
    songLine("If you boil the water, you will kill the germs!"),
    songLine("If you learn your English, you will be a champion!"),
    p("", { after: 100 }),

    themeBar("♪ THE DIRECTION CHANT (Unit 7)"),
    p("", { after: 60 }),
    songLine("Turn left, turn right, go straight on!"),
    songLine("At the corner, at the roundabout — you are never wrong!"),
    songLine("Ask the way, say thank you, and walk with a smile —"),
    songLine("English takes you everywhere, mile after mile!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t8_annex_chants.png", label: "The three T8 chants — listen and clap",
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
    pr([...kw("library", "laïbreri"), run("  —  we read “laïbreri” as in French.")], { after: 120 }),
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it! And remember: the pupils never copy the brackets in their copy-books.", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples", 4100)] }),
      pronRow("th → [dh]", "Put the tongue between the teeth and let the voice vibrate, like a soft “z”.", "this [dhiss], the mother [dhe meudheur], then [dhène]"),
      pronRow("th → [th]", "Same tongue between the teeth, but NO voice — just air.", "healthy [hèlthi], toothache [touthéik], thank you [thannk iou]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "hospital [hospiteul], headache [hèdéik], hobby [hobi]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "rice [raïss], library [laïbreri], roundabout [raounndebaoute]"),
      pronRow("-ing → [ing]", "A nasal “ng” at the end, like a small bell.", "swimming [souiming], running [reuning], angling [anngling]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "town [taoune], how [haou], roundabout [raounndebaoute]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "post office [pôouste ofiss], radio [réidiôou], go [gôou]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "to pay [tou péi], the bakery [dhe béikeuri], a headache [e hèdéik]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "rice [raïss], to buy [tou baï], to tidy [tou taïdi]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "lunch [leunntch], to cut [tou keute], the bus [dhe beuss]"),
      pronRow("ee / ea → [ii]", "A long “i”, smile!", "sweet [souite], between [bitouine], to peel [tou pile]"),
      pronRow("silent letters", "Some letters are written but NOT said!", "to write [tou raïte] (no w!), the corner [dhe kôrneur] (soft r!)"),
    ]}),
    p("", { after: 120 }),
    p([run("Three golden rules:", { bold: true, size: 30 })], { after: 80 }),
    p("1. Listen first, speak after: the pupils repeat AFTER the audio or the teacher."),
    p("2. Whole class → one row → one pupil: repeat in this order (repetition drill)."),
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
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, Simon says, bingo, matching illness–cure, listen and stand up, quiz quiz trade…")],
      { after: 160 }),

    themeBar("THE FEELINGS (Unit 1)"),
    p("", { after: 60 }),
    flashTable(FEELINGS, 3, 40),
    pageBreak(),

    themeBar("THE CHORES AND THE FREQUENCY ADVERBS (Unit 3)"),
    p("", { after: 60 }),
    flashTable(DAILY.map(strip).map(([w, pn]) => [w.replace(/^to /, ""), pn.replace(/^tou /, "")]), 3, 32),
    p("", { after: 60 }),
    flashTable(ADVERBS, 3, 40),
    pageBreak(),

    themeBar("THE FOODS AND THE COOKING VERBS (Unit 4)"),
    p("", { after: 60 }),
    flashTable([["rice", "raïss"], ["sugar", "chougueur"], ["tomatoes", "teméitôouz"],
      ["bananas", "benâneuz"], ["oil", "oïl"], ["salt", "sôlte"]], 3, 40),
    p("", { after: 60 }),
    flashTable(COOKVERBS, 3, 40),
    pageBreak(),

    themeBar("THE ILLNESSES AND THE CURES (Unit 5)"),
    p("", { after: 60 }),
    flashTable(ILLNESSES.slice(0, 8).map(strip), 3, 34),
    p("", { after: 60 }),
    flashTable(CURES.map(strip), 3, 34),
    pageBreak(),

    themeBar("THE MEANS OF COMMUNICATION AND THE ACRONYMS (Unit 6)"),
    p("", { after: 60 }),
    flashTable(MEDIA.slice(0, 6).map(strip), 3, 34),
    p("", { after: 60 }),
    flashTable(ACRONYMS, 2, 30),
    pageBreak(),

    themeBar("THE BUILDINGS AND THE DIRECTIONS (Unit 7)"),
    p("", { after: 60 }),
    flashTable(CITY.map(strip), 3, 30),
    p("", { after: 60 }),
    flashTable(DIRECTIONS, 3, 32),
    p("", { after: 60 }),
    flashTable(PREPOSITIONS, 3, 36),
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

const IRREGULAR = [
  ["be", "was / were"], ["have", "had"], ["do", "did"], ["go", "went"],
  ["come", "came"], ["see", "saw"], ["say", "said"], ["eat", "ate"],
  ["drink", "drank"], ["take", "took"], ["give", "gave"], ["get", "got"],
  ["make", "made"], ["know", "knew"], ["think", "thought"], ["run", "ran"],
  ["sit", "sat"], ["write", "wrote"], ["read", "read (red!)"], ["win", "won"],
  ["fall", "fell"], ["hear", "heard"], ["buy", "bought"], ["tell", "told"],
];
function irregularGrid() {
  const rows = [];
  for (let i = 0; i < IRREGULAR.length; i += 3) {
    rows.push(new TableRow({ children: IRREGULAR.slice(i, i + 3).map(([a, b]) => cell(
      [p([run(a, { bold: true, color: C.BLUE, size: 26 }), run("  →  ", { size: 26 }),
          run(b, { bold: true, size: 26 })], { center: true, after: 20 })],
      { vAlign: VerticalAlign.CENTER })) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function conjugation() {
  return [
    ...annexTitle("ann5", "5", "CONJUGATION GUIDE"),
    p([run("All the grammar machines of T8 — in one treasure chest!", { italic: true, color: C.GRAY, size: 26 })], { center: true, after: 120 }),

    themeBar("THE THREE STAR VERBS: BE, HAVE, DO"),
    p("", { after: 40 }),
    p([run("TO BE", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "Present", "Past", "? (question)"], [
      ["I", "I am (I’m)", "I was", "Am I…? / Was I…?"],
      ["you / we / they", "you are (you’re)", "you were", "Are you…? / Were you…?"],
      ["he / she / it", "he is (he’s)", "he was", "Is he…? / Was he…?"],
    ]),
    p("", { after: 80 }),
    p([run("TO HAVE — AND HAVE GOT (Unit 5!)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I / you / we / they", "I have got (I’ve got)", "I haven’t got", "Have you got…?"],
      ["he / she / it", "she has got (she’s got)", "she hasn’t got", "Has she got…?"],
    ]),
    p([run("I’ve got a headache = I have a headache. Short answers: Yes, I have. — No, she hasn’t.", { italic: true, color: C.GRAY, size: 24 })], { after: 80 }),
    p([run("TO DO (the helper of questions and negatives)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "Present", "Past", "Role"], [
      ["I / you / we / they", "do / don’t", "did / didn’t", "Do you…? Did you…?"],
      ["he / she / it", "does / doesn’t", "did / didn’t", "Does he…? Did he…?"],
    ]),
    p("", { after: 40 }), pageBreak(),

    themeBar("THE TWO PRESENTS — FACE TO FACE"),
    p("", { after: 40 }),
    p([run("1. The PRESENT SIMPLE — for the habits (every day, always, never…)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I / you / we / they", "I fetch water every day", "I don’t fetch water", "Do you fetch water?"],
      ["he / she / it", "Koto fetches water", "he doesn’t fetch water", "Does he fetch water?"],
    ]),
    p([run("he/she/it + -S! watch → watches, go → goes, tidy → tidies, have → has.", { italic: true, color: C.RED, size: 24 })], { after: 60 }),
    p([run("2. The PRESENT CONTINUOUS — for NOW (look!, listen!, at the moment…)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I", "I am cooking now", "I am not cooking", "Am I cooking…?"],
      ["you / we / they", "you are cooking", "you aren’t cooking", "What are you doing?"],
      ["he / she / it", "he is cooking", "he isn’t cooking", "Is he cooking…?"],
    ]),
    p([run("BE + verb-ING. The signal words choose the present: every day → simple; now → continuous!", { italic: true, color: C.RED, size: 24 })], { after: 100 }),

    themeBar("THE SIMPLE PAST — THE TENSE OF THE STORIES AND THE NEWS"),
    p("", { after: 40 }),
    conjTable(["Form", "Rule", "Example"], [
      ["+ regular", "verb + -ED", "I walked, the villagers repaired the bridge"],
      ["+ irregular", "2nd form (the rebels!)", "the rain fell, our team won, I went"],
      ["− negative", "didn’t + base verb", "He didn’t go to bed late."],
      ["? question", "Did + subject + base verb", "Did the team win? — Yes, it did!"],
    ]),
    p("", { after: 60 }),
    p([run("The rebels of the year:", { bold: true, size: 28 })], { after: 60 }),
    irregularGrid(),
    p([run("Careful! read → read: same letters, new sound [rèd]! be → was/were: two pasts!", { italic: true, color: C.RED, size: 24 })], { after: 40 }),
    pageBreak(),

    themeBar("THE TWO FUTURES: BE GOING TO vs WILL (Unit 1)"),
    p("", { after: 40 }),
    conjTable(["Future", "When?", "Example"], [
      ["be going to", "the PLAN (decided before)", "I am going to visit my grandmother on Sunday."],
      ["will", "the promise, the instant decision, the prediction", "I will help you! The English club will meet tomorrow."],
    ]),
    p("", { after: 100 }),

    themeBar("THE POLITE AND ADVICE MACHINES"),
    p("", { after: 40 }),
    rule("can / may / could (Unit 2)", [run("Can I borrow your ruler? May I speak to Hery? "), run("Could you lend me a pen, please?", { bold: true }), run(" — super polite!")]),
    rule("should (Unit 5)", [run("What should I do? — You "), run("should", { bold: true }), run(" wash your hands. Never -s, never “to”!")]),
    rule("The imperative (Units 2 and 4)", [run("Verb first: "), run("Stand up! Peel the potatoes!", { bold: true }), run(" Negative: "), run("Don’t talk! Don’t burn the soup!", { bold: true })], { after: 100 }),

    themeBar("THE IF CLAUSE (TYPE 1) — Unit 5"),
    p("", { after: 40 }),
    conjTable(["Part 1 (the condition)", "Part 2 (the result)"], [
      ["IF + present simple", "WILL + base verb"],
      ["If you wash your hands,", "you will stay healthy!"],
      ["If you drink dirty water,", "you will be sick."],
    ]),
    p("", { after: 100 }),

    themeBar("THE PASSIVE VOICE — Unit 6"),
    p("", { after: 40 }),
    conjTable(["Voice", "Structure", "Example"], [
      ["Active", "actor + verb + object", "The villagers repaired the bridge."],
      ["Passive", "subject + WAS/WERE + past participle (+ by…)", "The bridge was repaired (by the villagers)."],
    ]),
    p([run("We choose the passive when the actor is unknown or not important: A new library was opened!", { italic: true, color: C.GRAY, size: 24 })], { after: 100 }),

    themeBar("COMPARATIVES AND SUPERLATIVES — Unit 4"),
    p("", { after: 40 }),
    conjTable(["Adjective", "Comparative", "Superlative"], [
      ["cheap (short)", "cheaper than", "the cheapest"],
      ["expensive (long)", "more expensive than", "the most expensive"],
      ["good (rebel!)", "better than", "the best"],
      ["bad (rebel!)", "worse than", "the worst"],
    ]),
    p("", { after: 60 }),
    rule("The coordinators (Unit 3)", [run("and (+), but (contrast), or (choice), yet (surprise!), so (result).")]),
    rule("Play or go + V-ing (Unit 3)", [run("play football, play the guitar — "), run("go swimming, go angling", { bold: true }), run(" (the gerund!)")]),
    rule("The relative where (Unit 7)", [run("A library is a place "), run("where", { bold: true }), run(" we read books.")]),
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
    p("In the dictionaries, the pronunciation is written with special symbols: the International Phonetic Alphabet (IPA), between slashes: /skuːl/. In this book, we used easy brackets read as in French: [skoul]. This annex puts the two systems side by side — so the pupils are ready for the dictionary!", { after: 80 }),
    pr([run("Example: "), run("school", { bold: true, color: C.BLUE }), run("  →  IPA "), run("/skuːl/", { bold: true, color: COLOR }), run("  =  this book "), run("[skoul]", { italic: true, color: C.GRAY }), run(". The two say the same sound!")], { after: 140 }),

    p([run("THE VOWELS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/iː/", "[ii] / [i]", "a long “i” — smile!", "sweet /swiːt/ [souite], to peel /piːl/ [pile]"),
      phonRow("/ɪ/", "[i]", "a short, quick “i”", "sick /sɪk/ [sik], to sit /sɪt/ [sitt]"),
      phonRow("/e/", "[è]", "like “è” in French", "bed /bed/ [bède], the well /wel/ [ouèl]"),
      phonRow("/æ/", "[a]", "an “a” with a big open mouth", "the bank /bæŋk/ [bannk], to have /hæv/ [have]"),
      phonRow("/ɑː/", "[â]", "a long, deep “a”", "the market /ˈmɑːkɪt/ [mârkite], by car /kɑː/ [kâr]"),
      phonRow("/ɒ/", "[o]", "a short “o”", "a cough /kɒf/ [kof], hospital /ˈhɒspɪtl/ [hospiteul]"),
      phonRow("/ɔː/", "[ô]", "a long “ô”", "water /ˈwɔːtə/ [ouôteur], to pour /pɔː/ [pôr]"),
      phonRow("/ʊ/ /uː/", "[ou]", "like “ou” in French", "books /bʊks/ [bouks], the flu /fluː/ [flou]"),
      phonRow("/ʌ/", "[eu]", "a short “eu”, mouth relaxed", "to cut /kʌt/ [keute], the bus /bʌs/ [beuss]"),
      phonRow("/ɜː/", "[eur]", "a long “eur”", "to turn /tɜːn/ [teurn], germs /dʒɜːmz/ [djeurmz]"),
      phonRow("/ə/", "[e]", "the tiny lazy sound of English!", "doctor /ˈdɒktə/ [dokteur], the corner /ˈkɔːnə/ [kôrneur]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE DOUBLE VOWELS (two sounds in one!)", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/eɪ/", "[éi]", "“é” then “i”", "to pay /peɪ/ [péi], the train station /ˈtreɪn steɪʃn/ [tréine stéicheune]"),
      phonRow("/aɪ/", "[aï]", "“a” then “i”", "rice /raɪs/ [raïss], to buy /baɪ/ [baï]"),
      phonRow("/ɔɪ/", "[oï]", "“o” then “i”", "to boil /bɔɪl/ [boïl], oil /ɔɪl/ [oïl]"),
      phonRow("/əʊ/", "[ôou]", "“ô” then “ou”", "post /pəʊst/ [pôouste], radio /ˈreɪdiəʊ/ [réidiôou]"),
      phonRow("/aʊ/", "[aou]", "“a” then “ou”", "town /taʊn/ [taoune], the roundabout /ˈraʊndəbaʊt/ [raounndebaoute]"),
      phonRow("/eə/", "[è(r)]", "“è” with a little “r”", "where /weə/ [ouèr], there /ðeə/ [dhèr]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE SPECIAL CONSONANTS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/ð/", "[dh]", "tongue between the teeth + voice", "this /ðɪs/ [dhiss], the mother /ˈmʌðə/ [meudheur]"),
      phonRow("/θ/", "[th]", "tongue between the teeth, air only", "healthy /ˈhelθi/ [hèlthi], a toothache /ˈtuːθeɪk/ [touthéik]"),
      phonRow("/h/", "[h]", "a soft blow — never silent!", "hospital /ˈhɒspɪtl/ [hospiteul], a headache /ˈhedeɪk/ [hèdéik]"),
      phonRow("/ŋ/", "[nng] / [ing]", "the nasal “ng” bell", "swimming /ˈswɪmɪŋ/ [souiming], angling /ˈæŋɡlɪŋ/ [anngling]"),
      phonRow("/tʃ/", "[tch]", "like “tch” in “tchak”", "the church /tʃɜːtʃ/ [tcheurtch], to fetch /fetʃ/ [fètch]"),
      phonRow("/dʒ/", "[dj]", "like “dj” in “Djibouti”", "germs /dʒɜːmz/ [djeurmz], an injection /ɪnˈdʒekʃn/ [inndjèkcheune]"),
      phonRow("/ʃ/", "[ch]", "like “ch” in “chat”", "sugar /ˈʃʊɡə/ [chougueur], a prescription /prɪˈskrɪpʃn/ [priskripcheune]"),
      phonRow("/w/", "[ou]", "round the lips, like “oui”", "water /ˈwɔːtə/ [ouôteur], the well /wel/ [ouèl]"),
      phonRow("/j/", "[i] / [y]", "like the “y” of “yoyo”", "you /juː/ [iou], usually /ˈjuːʒuəli/ [ioujouali]"),
      phonRow("/r/", "[r]", "a soft English “r” — no rolling!", "rice /raɪs/ [raïss], the roundabout /ˈraʊndəbaʊt/ [raounndebaoute]"),
    ]}),
    p("", { after: 100 }),
    p([run("The stress mark:", { bold: true, size: 30 })], { after: 60 }),
    pr([run("In IPA, the little mark "), run("ˈ", { bold: true, color: COLOR, size: 30 }), run(" shows the STRONG syllable: hospital /ˈhɒspɪtl/ — we hit the FIRST part: "), run("HOS-pi-tal!", { bold: true, color: C.BLUE }), run(" In this book, say the audio model and copy its music.")], { after: 80 }),
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
    p([run("“Goodbye, teacher! Goodbye, friends! Eighty-one sessions — what a journey! We told our days, we went to the market, we fought the germs, we shared the news and we walked the whole country… in English! Keep speaking — and see you next year!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T8", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/1muxOkS0bLFOfGg7JGFFDWBBK_glGmbvY", { color: C.BLUE, size: 22 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    unitBanner("ANNEXES", COLOR, "annexes"),
    p("", { after: 100 }),
    p([run("The treasure box of the year!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 160 }),
    p([run("Annex 1 — Picture dictionary: all the words of the year", { size: 30 })], { after: 60 }),
    p([run("Annex 2 — Songs and chants: with the audio and the videos", { size: 30 })], { after: 60 }),
    p([run("Annex 3 — Pronunciation guide: for the teacher", { size: 30 })], { after: 60 }),
    p([run("Annex 4 — Flashcards to cut out: for the games", { size: 30 })], { after: 60 }),
    p([run("Annex 5 — Conjugation guide: all the grammar machines of T8", { size: 30 })], { after: 60 }),
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
