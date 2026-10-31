// T5 — ANNEXES — Picture dictionary, Songs, Pronunciation guide, Flashcards
const B = require("./builders");
const { C, SZ, run, p, pr, kw, fp, unitBanner, audioBox, img, pageBreak,
        sub, cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle } = require("docx");

const COLOR = "5B2C6F"; // violet foncé — couleur des annexes

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

// ---------------- données de l'année T5 ----------------
const DAY = [["morning", "môrning"], ["afternoon", "afteurnoune"],
  ["evening", "ivning"], ["night", "naïte"]];
const COMMANDS = [
  ["Go to the blackboard!", "gôou tou ze blakbôrd"],
  ["Clean the blackboard!", "kline ze blakbôrd"],
  ["Open the door!", "ôoupeune ze dôr"],
  ["Close the door!", "klôouz ze dôr"],
  ["Open your copybook!", "ôoupeune iôr kopibouk"],
  ["Close your copybook!", "klôouz iôr kopibouk"],
  ["Open the windows!", "ôoupeune ze ouindôouz"],
  ["Close the windows!", "klôouz ze ouindôouz"],
  ["Go to the library!", "gôou tou ze laïbreri"],
  ["Go to the cafeteria!", "gôou tou ze kafétiria"],
  ["Have a break!", "hav e bréik"],
];
const BODY = [
  ["hair", "hèr"], ["face", "féiss"], ["cheeks", "tchiks"], ["neck", "nèk"],
  ["teeth", "tiss"], ["back", "bak"], ["belly", "bèli"], ["arms", "ârmz"],
  ["hands", "handz"], ["fingers", "finngueurz"], ["legs", "lègz"], ["feet", "fite"],
];
const MONTHS = [
  ["January", "djanioueri"], ["February", "fébioueri"], ["March", "mârtch"], ["April", "éiprol"],
  ["May", "méi"], ["June", "djoune"], ["July", "djoulaï"], ["August", "ôgueuste"],
  ["September", "sèptèmbeur"], ["October", "oktôoubeur"], ["November", "novèmbeur"], ["December", "dissèmbeur"],
];
const CLASSROOM = [
  ["classroom", "klâsroume"], ["headmaster", "hèdmâsteur"], ["teacher", "titcheur"], ["pupils", "pioupolz"],
  ["table", "téibol"], ["chair", "tchèr"], ["bench", "bèntch"], ["blackboard", "blakbôrd"],
];
const FOOD = [
  ["cassava", "kassâva"], ["sweet potato", "souite potéitô"], ["meat", "mite"], ["chicken", "tchikène"],
  ["fish", "fich"], ["green beans", "grine binz"], ["onion", "onieune"], ["tomato", "tomâtô"],
  ["apple", "apol"], ["peach", "pitch"], ["pineapple", "païnapol"], ["rice", "raïss"],
];
const ROOMS = [
  ["bedroom", "bèdroume"], ["bathroom", "bâssroume"], ["kitchen", "kitchène"],
  ["living room", "livinng roume"], ["dining room", "daïninng roume"],
];
const THINGS = [
  ["bed", "bède"], ["pillow", "pilô"], ["soap", "sôoupe"], ["towel", "taouol"], ["toothbrush", "toussbreuch"],
  ["stove", "stôouv"], ["cooking pot", "koukinng pote"], ["sofa", "sôoufa"], ["stool", "stoule"], ["armchair", "ârmtchèr"],
  ["table", "téibol"], ["chair", "tchèr"], ["plate", "pléite"], ["spoon", "spoune"], ["glass", "glâss"],
];
const FAMILY = [
  ["father", "fâzeur"], ["mother", "meuzeur"], ["son", "seune"], ["daughter", "dôteur"],
  ["brother", "breuzeur"], ["sister", "sisteur"], ["family", "famili"], ["name", "néime"],
];
const ANIMALS = [
  ["a crocodile", "e krokodaïol"], ["a monkey", "e monnki"], ["a snake", "e snéike"], ["a bird", "e beurde"],
  ["an elephant", "ane élifannte"], ["a lion", "e laïeune"], ["a turtle", "e teurtol"], ["an owl", "ane aoul"],
  ["a bear", "e bèr"], ["a giraffe", "e djirâf"], ["a zebra", "e zibra"], ["a wolf", "e woulf"],
  ["a chameleon", "e kamilieune"],
];
const BIGTENS = [
  ["20 — twenty", "touènti"], ["30 — thirty", "seurti"], ["40 — forty", "fôrti"],
  ["50 — fifty", "fifti"], ["60 — sixty", "siksti"], ["70 — seventy", "sèvènti"],
  ["80 — eighty", "éiti"], ["90 — ninety", "naïnti"], ["100 — one hundred", "ouane heundrède"],
];

const DRIVE = {
  rhyme: "https://drive.google.com/uc?export=download&id=1oE_Ayk2uxTUJNE7D857cohiq4xtrAU2Z",
  finger: "https://drive.google.com/uc?export=download&id=17OUhSkIGUafhyZsqLvSWWwVUlXlHDaoL",
  months: "https://drive.google.com/uc?export=download&id=1CyD5EY7e8HeRRKH-IC0t98IHLx3NNFpl",
  house: "https://drive.google.com/uc?export=download&id=16kBQbrPY-eLZRH3ZfGkKS9NFti-m71xc",
  family: "https://drive.google.com/uc?export=download&id=162hgsy71DlffbSoHqI6ZG-V0QwtYfbJo",
};

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("SOCIALISING (Unit 1)"),
    p("", { after: 40 }),
    img("u1_partsday.png", 340, 768 / 1408),
    wordGrid(DAY, 4),
    p("", { after: 60 }),
    pr([...kw("Good morning!", "goud môrning"), run("   "), ...kw("Good afternoon!", "goud afteurnoune"), run("   "), ...kw("Good evening!", "goud ivning")]),
    pr([...kw("Good night!", "goud naïte"), run("   "), ...kw("Enjoy your meal!", "inndjoï iôr mile"), run("   "), ...kw("Have a nice day!", "hav e naïss déi")]),
    pr([...kw("See you!", "si iou"), run("   "), ...kw("See you next time!", "si iou nèxte taïme")], { after: 140 }),

    themeBar("INTRODUCING ONESELF (Unit 2)"),
    p("", { after: 40 }),
    img("u2_fromlive.png", 340, 768 / 1408),
    pr([...kw("Where are you from?", "ouèr âr iou frome"), run("  →  "), ...kw("I’m from Madagascar.", "aïm frome madagaskar")]),
    pr([...kw("Where do you live?", "ouèr dou iou live"), run("  →  "), ...kw("I live in …", "aï live ine")], { after: 140 }),

    themeBar("CLASSROOM LANGUAGE (Unit 3)"),
    p("", { after: 40 }),
    img("u3_commands.png", 340, 768 / 1408),
    wordGrid(COMMANDS, 2),
    p("", { after: 140 }),

    themeBar("PARTS OF THE BODY (Unit 4)"),
    p("", { after: 40 }),
    img("u4_body.png", 300, 1408 / 768),
    wordGrid(BODY, 4),
    p("", { after: 140 }),

    themeBar("MY BIRTHDAY IS ON… (Unit 5)"),
    p("", { after: 40 }),
    img("u5_birthday.png", 340, 768 / 1408),
    wordGrid(MONTHS, 4),
    p("", { after: 60 }),
    pr([...kw("When is your birthday?", "ouène iz iôr beursdé"), run("  →  "), ...kw("My birthday is on June 12.", "maï beursdé iz one djoune touèlfs")], { after: 140 }),

    themeBar("MY DREAM CLASSROOM (Unit 6)"),
    p("", { after: 40 }),
    img("u6_classroom.png", 340, 768 / 1408),
    wordGrid(CLASSROOM, 4),
    p("", { after: 60 }),
    pr([...kw("How many benches are there?", "haou mèni bèntchiz âr zèr"), run("  →  "), ...kw("There are 50 benches.", "zèr âr fifti bèntchiz")], { after: 140 }),

    themeBar("MEALS (Unit 7)"),
    p("", { after: 40 }),
    img("u7_food.png", 340, 768 / 1408),
    wordGrid(FOOD, 4),
    p("", { after: 60 }),
    pr([...kw("What did you have for breakfast?", "ouate dide iou hav for brèkfeuste"), run("  →  "), ...kw("I had cassava.", "aï hade kassâva")], { after: 140 }),

    themeBar("IN MY HOUSE (Unit 8)"),
    p("", { after: 40 }),
    img("u8_house.png", 340, 768 / 1408),
    pr([run("The rooms: ", { bold: true })]),
    wordGrid(ROOMS, 5),
    p("", { after: 60 }),
    pr([run("The things: ", { bold: true })]),
    wordGrid(THINGS, 5),
    p("", { after: 60 }),
    pr([...kw("Where is the bed?", "ouèr iz ze bède"), run("  →  "), ...kw("The bed is in the bedroom.", "ze bède iz ine ze bèdroume")], { after: 140 }),

    themeBar("MY FAMILY (Unit 9)"),
    p("", { after: 40 }),
    img("u9_family.png", 340, 768 / 1408),
    wordGrid(FAMILY, 4),
    p("", { after: 60 }),
    pr([...kw("Who’s this?", "houz zis"), run("  →  "), ...kw("This is my brother.", "zis iz maï breuzeur")]),
    pr([...kw("What’s his name?", "ouots hiz néime"), run("  →  "), ...kw("His name is Koto.", "hiz néime iz koto")], { after: 140 }),

    themeBar("WILD ANIMALS (Unit 10)"),
    p("", { after: 40 }),
    img("u10_animals.png", 340, 768 / 1408),
    wordGrid(ANIMALS, 4),
    p("", { after: 60 }),
    pr([...kw("What is this?", "ouate iz zis"), run("  →  "), ...kw("This is a lion.", "zis iz e laïeune")], { after: 140 }),

    themeBar("THE BIG NUMBERS OF THE YEAR (Units 5, 6 and 10)"),
    p("", { after: 40 }),
    wordGrid(BIGTENS, 3),
    p("", { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND RHYMES ----------------
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND RHYMES"),
    p([run("All the songs and rhymes of the year. Scan the QR code or use the link to listen and download.",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 80 }),
    p([run("Note for the teacher: the traditional songs (One little finger, the months of the year…) also exist in many versions on the Internet. The QR code version is the one that matches the words of this book — use it first; other versions are a nice bonus when the words differ a little. The rhymes and songs written for this book exist only here.",
      { italic: true, color: C.GRAY, size: 22 })], { after: 160 }),

    themeBar("♪ THE “PARTS OF THE DAY” RHYME (Unit 1)"),
    p("", { after: 60 }),
    songLine("It’s the morning. The sun is coming up."),
    songLine("It’s the morning. It’s time to wake up!"),
    songLine("It’s the afternoon! I smile to the sun."),
    songLine("It’s the afternoon! Isn’t it fun?"),
    songLine("It’s the evening, the end of the day."),
    songLine("It’s the evening! The sun has gone away."),
    songLine("It’s the night. The stars begin to peep."),
    songLine("It’s the night. It’s time to go to sleep."),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t5_u1_rhyme.png", label: "The “Parts of the day” rhyme — listen and say",
      url: DRIVE.rhyme }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE “ONE LITTLE FINGER” RHYME (Unit 4)"),
    p("", { after: 60 }),
    songLine("One little finger, one little finger,"),
    songLine("one little finger, tap, tap, tap!"),
    songLine("Point your finger up, up. Point your finger down, down."),
    songLine("Put it on your hair, hair. (Chorus)"),
    songLine("Put it on your cheek, cheek. (Chorus)"),
    songLine("Put it on your hand, hand. (Chorus)"),
    songLine("Put it on your leg, leg. (Chorus)"),
    songLine("Put it on your foot, foot."),
    songLine("Now let’s wave goodbye, goodbye!"),
    p([run("We act each verse with the finger on the right part of the body!",
      { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 }),
    audioBox([{ qr: "qr_t5_u4_finger.png", label: "One little finger — listen and act",
      url: DRIVE.finger }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE “MONTHS OF THE YEAR” SONG (Unit 5)"),
    p("", { after: 60 }),
    songLine("January, February, March and April,"),
    songLine("May, June, July and August,"),
    songLine("September, October, November, December:"),
    songLine("these are the months of the year!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t5_u5_months.png", label: "The Months of the year song — listen and sing",
      url: DRIVE.months }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE “WELCOME TO MY HOUSE” SONG (Unit 8)"),
    p("", { after: 60 }),
    songLine("Welcome to my house,"),
    songLine("my family and me!"),
    songLine("In the living room, I watch TV. (2x)"),
    songLine("In the bathroom, I take a shower."),
    songLine("In the kitchen, I cook good food."),
    songLine("In the dining room, I have breakfast."),
    songLine("In the bedroom, I go to sleep."),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t5_u8_house.png", label: "Welcome to my house — listen and sing",
      url: DRIVE.house }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE “WHO’S THIS?” SONG (Unit 9)"),
    p("", { after: 60 }),
    songLine("Who, who, who is this?"),
    songLine("Brother, brother, it’s my brother!"),
    songLine("Who, who, who is that?"),
    songLine("Sister, sister, it’s my sister!"),
    songLine("Brother and sister:"),
    songLine("I love my brother. I love my sister."),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t5_u9_family.png", label: "Who’s this? — listen and sing",
      url: DRIVE.family }], COLOR),
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
    pr([...kw("bedroom", "bèdroume"), run("  —  we read “bèdroume” as in French.")], { after: 120 }),
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it!", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples", 4100)] }),
      pronRow("th → [z] / [s]", "Put the tongue between the teeth and say a soft “z” or “s”.", "this [zis], brother [breuzeur], birthday [beursdé], teeth [tiss]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "hair [hèr], house [haous], headmaster [hèdmâsteur]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "rice [raïss], rooms [roumz], ruler"),
      pronRow("-ing → [ing]", "A nasal “ng” at the end, like a small bell.", "morning [môrning], evening [ivning], living room"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "how [haou], owl [aoul], towel [taouol]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "go [gôou], soap [sôoupe], stove [stôouv]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "name [néime], snake [snéike], plate [pléite]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "five [faïv], night [naïte], pineapple [païnapol]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "mother [meuzeur], monkey [monnki], lunch [leunntch]"),
      pronRow("ee / ea → [i]", "A long “i”, smile!", "teeth [tiss], green beans [grine binz], teacher [titcheur]"),
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
  const strip = ([w, pn]) => [w.replace(/^an? /, ""), pn.replace(/^(e|ane) /, "")];
  return [
    ...annexTitle("ann4", "4", "FLASHCARDS TO CUT OUT"),
    p([run("For the teacher: ", { bold: true }),
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, true or false, Kim’s game, “What is this?”…")],
      { after: 160 }),

    themeBar("THE BIG NUMBERS (Units 5, 6 and 10)"),
    p("", { after: 60 }),
    flashTable([["20", "touènti"], ["30", "seurti"], ["40", "fôrti"], ["50", "fifti"], ["60", "siksti"],
      ["70", "sèvènti"], ["80", "éiti"], ["90", "naïnti"], ["100", "ouane heundrède"], ["", ""]], 5),
    p("", { after: 60 }),
    flashTable([["twenty", ""], ["thirty", ""], ["forty", ""], ["fifty", ""], ["sixty", ""],
      ["seventy", ""], ["eighty", ""], ["ninety", ""], ["one hundred", ""], ["", ""]], 5, 36),
    pageBreak(),

    themeBar("THE MONTHS (Unit 5)"),
    p("", { after: 60 }),
    flashTable(MONTHS, 3, 40),
    pageBreak(),

    themeBar("PARTS OF THE BODY (Unit 4)"),
    p("", { after: 60 }),
    flashTable(BODY, 3, 44),
    pageBreak(),

    themeBar("THE CLASSROOM (Unit 6)"),
    p("", { after: 60 }),
    flashTable(CLASSROOM, 2, 48),
    pageBreak(),

    themeBar("FOOD (Unit 7)"),
    p("", { after: 60 }),
    flashTable(FOOD, 3, 40),
    pageBreak(),

    themeBar("THE ROOMS OF THE HOUSE (Unit 8)"),
    p("", { after: 60 }),
    flashTable(ROOMS, 2, 48),
    p("", { after: 100 }),
    themeBar("THE FAMILY (Unit 9)"),
    p("", { after: 60 }),
    flashTable(FAMILY.slice(0, 6), 3, 48),
    pageBreak(),

    themeBar("WILD ANIMALS (Unit 10)"),
    p("", { after: 60 }),
    flashTable(ANIMALS.map(strip), 3, 40),
    p("", { after: 120 }),
    p([run("Tip: draw or paste a small picture on the back of each word card — the card becomes a picture card for “What is this?”.",
      { italic: true, color: C.GRAY, size: 24 })]),
  ];
}

// ---------------- page finale ----------------
function finalPage() {
  return [
    p("", { after: 400 }),
    p([run("THE END OF THE BOOK — NOT THE END OF ENGLISH!", { bold: true, size: 40, color: COLOR })], { center: true, after: 200 }),
    img("koto_soa.png", 300, 1408 / 768),
    p([run("Koto and Soa say:", { bold: true, size: 30 })], { center: true, after: 80 }),
    p([run("“Goodbye, teacher! Goodbye, children! See you next year in T6!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T5", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/1H3aOxLqwTFCfTIaze-MUfM96RRuSu4HM", { color: C.BLUE, size: 22 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    unitBanner("ANNEXES", COLOR, "annexes"),
    p("", { after: 100 }),
    p([run("The treasure box of the year!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 160 }),
    p([run("Annex 1 — Picture dictionary: all the words of the year", { size: 30 })], { after: 60 }),
    p([run("Annex 2 — Songs and rhymes: all the songs, with the audio", { size: 30 })], { after: 60 }),
    p([run("Annex 3 — Pronunciation guide: for the teacher", { size: 30 })], { after: 60 }),
    p([run("Annex 4 — Flashcards to cut out: for the games", { size: 30 })], { after: 60 }),
    pageBreak(),
    ...pictureDictionary(), pageBreak(),
    ...songs(), pageBreak(),
    ...pronunciationGuide(), pageBreak(),
    ...flashcards(), pageBreak(),
    ...finalPage(),
  ];
};
module.exports.COLOR = COLOR;
