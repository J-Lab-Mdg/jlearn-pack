// ANNEXES — Picture dictionary, Songs, Pronunciation guide, Flashcards
const B = require("./builders");
const { C, SZ, run, p, pr, kw, fp, unitBanner, audioBox, img, pageBreak,
        sub, cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle } = require("docx");

const COLOR = "5B2C6F"; // violet foncé — couleur des annexes

// ---------------- outils locaux ----------------
function wordGrid(items, perRow) {
  // items = [word, pron]
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size: 28 })], { center: true, after: 10 }),
            p([run(`[${pn}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
const DASHED = { style: BorderStyle.DASHED, size: 4, color: "808080" };
const dashedBorders = () => ({ top: DASHED, bottom: DASHED, left: DASHED, right: DASHED,
  insideHorizontal: DASHED, insideVertical: DASHED });
function flashTable(words, perRow = 2) {
  // grandes cartes à découper : mot en très grand, pron en petit dessous
  const rows = [];
  for (let i = 0; i < words.length; i += perRow) {
    const chunk = words.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p("", { after: 60 }),
            p([run(w, { bold: true, size: 56 })], { center: true, after: 40 }),
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

// ---------------- données ----------------
const NUMBERS = [
  ["1 — one", "ouane"], ["2 — two", "tou"], ["3 — three", "tsri"], ["4 — four", "fôr"],
  ["5 — five", "faïv"], ["6 — six", "siks"], ["7 — seven", "sèvène"], ["8 — eight", "éit"],
  ["9 — nine", "naïn"], ["10 — ten", "tène"], ["11 — eleven", "ilèvène"], ["12 — twelve", "touèlv"],
  ["13 — thirteen", "seurtine"], ["14 — fourteen", "fôrtine"], ["15 — fifteen", "fiftine"],
  ["16 — sixteen", "sikstine"], ["17 — seventeen", "sèvènetine"], ["18 — eighteen", "éitine"],
  ["19 — nineteen", "naïntine"], ["20 — twenty", "touènti"],
];
const BODY = [["head", "hèd"], ["shoulder", "chôouldeur"], ["knee", "ni"], ["toe", "tôou"],
  ["eye", "aï"], ["ear", "ir"], ["nose", "nôouz"], ["mouth", "maous"]];
const DAYS = [["Monday", "meundé"], ["Tuesday", "tiouzdé"], ["Wednesday", "ouènzdé"],
  ["Thursday", "seurzdé"], ["Friday", "fraïdé"], ["Saturday", "sateudé"], ["Sunday", "seundé"]];
const THINGS = [["a schoolbag", "e skoulbag"], ["a copy-book", "e kopibouk"], ["a book", "e bouk"],
  ["a pen", "e pène"], ["a pencil", "e pènsil"], ["coloured pencils", "keuleurd pènsilz"],
  ["a pencil case", "e pènsil kéis"], ["a sharpener", "e charpeneur"], ["a slate", "e sléit"],
  ["a sponge", "e speundj"], ["chalk", "tchôk"], ["a ruler", "e rouleur"],
  ["a rubber", "e reubeur"], ["glue", "glou"], ["scissors", "sizeurz"]];
const COLOURS = [["red", "rèd"], ["blue", "blou"], ["black", "blak"], ["green", "grine"]];
const FOOD = [["rice", "raïs"], ["corn", "kôrn"], ["bread", "brèd"], ["soup", "soup"],
  ["a carrot", "e karotte"], ["a potato", "e potéitôou"], ["green leaves", "grine livz"],
  ["a banana", "e banâna"], ["an orange", "eune orindj"]];
const DRINKS = [["water", "ouôteur"], ["tea", "ti"], ["coffee", "kofi"],
  ["milk", "milk"], ["juice", "djous"]];
const MEALS = [["breakfast", "brèkfeust"], ["lunch", "leuntch"], ["dinner", "dineur"]];
const HOUSE = [["a window", "e ouindôou"], ["a door", "e dôr"], ["a wall", "e ouôl"],
  ["a roof", "e rouf"], ["a room", "e roum"], ["a ceiling", "e siling"],
  ["a light", "e laïte"], ["a balcony", "e balkoni"], ["stairs", "stèrz"]];
const FAMILY = [["mother", "meuzeur"], ["father", "fâzeur"], ["sister", "sisteur"],
  ["brother", "breuzeur"], ["children", "tchildrène"]];
const ANIMALS = [["a cat", "e kate"], ["a dog", "e dog"], ["a zebu", "e zibou"],
  ["a hen", "e hène"], ["a pig", "e pig"], ["a fish", "e fich"],
  ["a duck", "e deuk"], ["a goose", "e gous"], ["a rabbit", "e rabite"],
  ["a sheep", "e chipe"], ["a goat", "e gôoute"], ["a horse", "e hôrs"],
  ["a chicken", "e tchikène"], ["a turkey", "e teurki"]];

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("SOCIALISING (Unit 1)"),
    p("", { after: 40 }),
    pr([...kw("Hello!", "hèlôou"), run("   "), ...kw("Hi!", "haï"), run("   "), ...kw("Good morning!", "goud môrning")]),
    pr([...kw("How are you?", "haou âr iou"), run("  →  "), ...kw("I’m fine, thank you.", "aïm faïn, tenk iou")]),
    pr([...kw("Goodbye!", "goudbaï"), run("   "), ...kw("Bye-bye!", "baï-baï")]),
    pr([...kw("What’s your name?", "ouots iôr néim"), run("  →  "), ...kw("My name is …", "maï néim iz")]),
    pr([...kw("How old are you?", "haou ôould âr iou"), run("  →  "), ...kw("I’m 8.", "aïm éit")]),
    pr([...kw("Thank you!", "tenk iou"), run("  →  "), ...kw("You’re welcome!", "iôr ouèlkeum")]),
    pr([...kw("I’m sorry!", "aïm sori"), run("  →  "), ...kw("It’s OK!", "its ôou-kéi")], { after: 140 }),

    themeBar("THE ALPHABET (Unit 2)"),
    p("", { after: 40 }),
    img("alphabet_chart.png", 400, 768 / 1408),
    p("", { after: 100 }),

    themeBar("NUMBERS 1 TO 20 (Unit 3)"),
    p("", { after: 40 }),
    wordGrid(NUMBERS, 4),
    p("", { after: 140 }),

    themeBar("CLASSROOM LANGUAGE (Unit 4)"),
    p("", { after: 40 }),
    pr([...kw("Stand up!", "stand eup"), run("   "), ...kw("Sit down!", "site daoun"), run("   "), ...kw("Be quiet!", "bi kouaïeut")]),
    pr([...kw("Listen to me, please!", "lisseun tou mi, plize"), run("   "), ...kw("Look at the board!", "louk at ze bôrd")]),
    pr([...kw("Raise your hand!", "réiz iôr hand"), run("   "), ...kw("Line up!", "laïn eup"), run("   "), ...kw("Come here!", "kam hire")]),
    pr([...kw("May I go out, please?", "méi aï gôou aout, plize"), run("  →  "), ...kw("Yes, go ahead.", "yès, gôou euhèd")], { after: 100 }),
    img("u4_classroom.png", 340, 768 / 1408),

    themeBar("PARTS OF THE BODY (Unit 5)"),
    p("", { after: 40 }),
    img("u5_body.png", 300, 1408 / 768),
    wordGrid(BODY, 4),
    p("", { after: 140 }),

    themeBar("DAYS OF THE WEEK (Unit 6)"),
    p("", { after: 40 }),
    img("u6_days.png", 340, 768 / 1408),
    wordGrid(DAYS, 4),
    p("", { after: 140 }),

    themeBar("SCHOOL THINGS AND COLOURS (Unit 7)"),
    p("", { after: 40 }),
    img("u7_school_things.png", 340, 768 / 1408),
    wordGrid(THINGS, 3),
    p("", { after: 80 }),
    img("u7_colours.png", 300, 768 / 1408),
    wordGrid(COLOURS, 4),
    p("", { after: 80 }),
    pr([...kw("What is this?", "ouate iz zis"), run("  →  "), ...kw("This is a book.", "zis iz e bouk")]),
    pr([...kw("What do you need?", "ouate dou iou nide"), run("  →  "), ...kw("I need a pencil.", "aï nide e pènsil")], { after: 140 }),

    themeBar("MEALS (Unit 8)"),
    p("", { after: 40 }),
    img("u8_meals.png", 340, 768 / 1408),
    pr([run("We eat: ", { bold: true })]),
    wordGrid(FOOD, 3),
    p("", { after: 60 }),
    pr([run("We drink: ", { bold: true })]),
    wordGrid(DRINKS, 5),
    p("", { after: 60 }),
    pr([run("The meals: ", { bold: true })]),
    wordGrid(MEALS, 3),
    p("", { after: 140 }),

    themeBar("HOUSE (Unit 9)"),
    p("", { after: 40 }),
    img("u9_house.png", 340, 768 / 1408),
    wordGrid(HOUSE, 3),
    p("", { after: 60 }),
    pr([...kw("This is my house.", "zis iz maï haous"), run("  "), ...kw("It is green.", "it iz grine"), run("  "), ...kw("It has three windows.", "it haz tsri ouindôouz")], { after: 140 }),

    themeBar("FAMILY (Unit 10)"),
    p("", { after: 40 }),
    img("u10_family.png", 320, 768 / 1408),
    wordGrid(FAMILY, 5),
    p("", { after: 60 }),
    pr([...kw("Who is he?", "hou iz hi"), run("   "), ...kw("Who is she?", "hou iz chi"), run("  →  "), ...kw("This is my father.", "zis iz maï fâzeur")], { after: 140 }),

    themeBar("FARM ANIMALS AND PETS (Unit 11)"),
    p("", { after: 40 }),
    img("u11_animals.png", 280, 1370 / 768),
    wordGrid(ANIMALS, 4),
    p("", { after: 60 }),
    pr([...kw("What is this?", "ouate iz zis"), run("  →  "), ...kw("It is a cat.", "it iz e kate"), run("   "), ...kw("Draw me a cat!", "drô mi e kate")], { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND RHYMES ----------------
function songLine(t) { return p([run(t, { italic: true, size: 30 })], { center: true, after: 40 }); }
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND RHYMES"),
    p([run("All the songs and rhymes of the year. Scan the QR code or use the link to listen and download.",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("♪ THE ALPHABET SONG (Unit 2)"),
    p("", { after: 60 }),
    songLine("A B C D E F G"),
    songLine("H I J K L M N O P"),
    songLine("Q R S T U V"),
    songLine("W X Y and Z"),
    songLine("Now I know my ABC"),
    songLine("Next time won’t you sing with me?"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_u2_alphabet_song.png", label: "The Alphabet Song — listen and sing",
      url: "https://drive.google.com/uc?export=download&id=1TUymYaapCRRUC11ceBbn49LIAKDuEKCP" }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE “ONE, TWO” RHYME (Unit 3)"),
    p("", { after: 60 }),
    songLine("One, two, what do you do?"),
    songLine("Three, four, count some more!"),
    songLine("Five, six, clap your hands!"),
    songLine("Seven, eight, stand up straight!"),
    songLine("Nine, ten, once again!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_u3_rhyme.png", label: "The “One, two” rhyme — listen and say",
      url: "https://drive.google.com/uc?export=download&id=1HctvxUvAx6_baroHpwvV_KLb3HHL2uZb" }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ HEAD, SHOULDERS, KNEES AND TOES (Unit 5)"),
    p("", { after: 60 }),
    songLine("Head, shoulders, knees and toes, knees and toes,"),
    songLine("Head, shoulders, knees and toes, knees and toes,"),
    songLine("And eyes and ears and mouth and nose,"),
    songLine("Head, shoulders, knees and toes, knees and toes."),
    p([run("We touch each part of the body at the right word. Sing faster and faster!",
      { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 }),
    audioBox([{ qr: "qr_u5_song.png", label: "Head, shoulders, knees and toes — listen and sing",
      url: "https://drive.google.com/uc?export=download&id=1LG-51ZLBhLnr3S9r7GpjIwVENCreY2OB" }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE DAYS OF THE WEEK SONG (Unit 6)"),
    p("", { after: 60 }),
    songLine("Monday, Tuesday,"),
    songLine("Wednesday, Thursday,"),
    songLine("Friday, Saturday,"),
    songLine("Sunday the last day, Sunday the last day."),
    songLine("Monday, Tuesday,"),
    songLine("Wednesday, Thursday,"),
    songLine("Friday, Saturday."),
    p([run("(We sing it on a tune we know well.)", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 }),
    audioBox([{ qr: "qr_u6_song.png", label: "The Days of the week song — listen and sing",
      url: "https://drive.google.com/uc?export=download&id=1rZSe5VDKzNmqlyoeImKdI1H1pWMBQyNK" }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE FAMILY SONG (Unit 10) — tune of “Frère Jacques”"),
    p("", { after: 60 }),
    songLine("Sister, brother, father, mother,"),
    songLine("Who is she? Who is she?"),
    songLine("She’s my sister, she’s my sister,"),
    songLine("Oh, I see! Oh, I see!"),
    p([run("Then we sing again with: brother (Who is he? — He’s my brother), mother (She’s my mother), father (He’s my father).",
      { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 }),
    audioBox([{ qr: "qr_u10_song.png", label: "The Family song — listen and sing",
      url: "https://drive.google.com/uc?export=download&id=1FUKaZHPakDJD7b-KtEfiQOTQ5sblCDzt" }], COLOR),
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
    pr([...kw("book", "bouk"), run("  —  we read “bouk” as in French.")], { after: 120 }),
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it!", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples", 4100)] }),
      pronRow("th → [z] / [s]", "Put the tongue between the teeth and say a soft “z” or “s”.", "this [zis], three [tsri], thank you [tenk iou], birthday"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "hello [hèlôou], house [haous], hen [hène], horse [hôrs]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "red [rèd], rice [raïs], ruler [rouleur]"),
      pronRow("-ing → [ing]", "A nasal “ng” at the end, like a small bell.", "morning [môrning], ceiling [siling]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "how [haou], house [haous], mouth [maous]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "hello [hèlôou], nose [nôouz], goat [gôoute]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "name [néim], eight [éit], slate [sléit]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "five [faïv], nine [naïn], light [laïte]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "mother [meuzeur], duck [deuk], lunch [leuntch]"),
      pronRow("ee / ea → [i]", "A long “i”, smile!", "sheep [chipe], green [grine], tea [ti]"),
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
  return [
    ...annexTitle("ann4", "4", "FLASHCARDS TO CUT OUT"),
    p([run("For the teacher: ", { bold: true }),
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, true or false, Kim’s game, “What is this?”…")],
      { after: 160 }),

    themeBar("NUMBERS (Unit 3)"),
    p("", { after: 60 }),
    flashTable([["1", "ouane"], ["2", "tou"], ["3", "tsri"], ["4", "fôr"], ["5", "faïv"],
      ["6", "siks"], ["7", "sèvène"], ["8", "éit"], ["9", "naïn"], ["10", "tène"]], 5),
    p("", { after: 60 }),
    flashTable([["one", ""], ["two", ""], ["three", ""], ["four", ""], ["five", ""],
      ["six", ""], ["seven", ""], ["eight", ""], ["nine", ""], ["ten", ""]], 5),
    pageBreak(),

    themeBar("COLOURS (Unit 7)"),
    p("", { after: 60 }),
    flashTable([["red", "rèd"], ["blue", "blou"], ["black", "blak"], ["green", "grine"]], 2),
    p("", { after: 100 }),
    themeBar("DAYS OF THE WEEK (Unit 6)"),
    p("", { after: 60 }),
    flashTable(DAYS.map(([w, pn]) => [w, pn]), 2),
    pageBreak(),

    themeBar("SCHOOL THINGS (Unit 7)"),
    p("", { after: 60 }),
    flashTable(THINGS.map(([w, pn]) => [w.replace(/^an? /, ""), pn.replace(/^(e|eune) /, "")]), 3),
    pageBreak(),

    themeBar("FOOD AND DRINKS (Unit 8)"),
    p("", { after: 60 }),
    flashTable(FOOD.concat(DRINKS).map(([w, pn]) => [w.replace(/^an? /, ""), pn.replace(/^(e|eune) /, "")]), 3),
    pageBreak(),

    themeBar("FAMILY (Unit 10)"),
    p("", { after: 60 }),
    flashTable(FAMILY, 3),
    p("", { after: 100 }),
    themeBar("FARM ANIMALS AND PETS (Unit 11)"),
    p("", { after: 60 }),
    flashTable(ANIMALS.map(([w, pn]) => [w.replace(/^an? /, ""), pn.replace(/^(e|eune) /, "")]), 3),
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
    p([run("“Goodbye, teacher! Goodbye, children! See you next year!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T4", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/10CyXbCzIb0SV9hYk45iSbMVRZr9frxD6", { color: C.BLUE, size: 22 })], { center: true }),
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
