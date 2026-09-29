// T6 — ANNEXES — Picture dictionary, Songs and chants, Pronunciation guide, Flashcards
const B = require("./builders");
const { C, SZ, run, p, pr, kw, unitBanner, audioBox, img, pageBreak,
        cell, noBorders, bookmarkTitle } = B;
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

// ---------------- données de l'année T6 ----------------
const DAYS = [["Monday", "meundé"], ["Tuesday", "tiouzdé"], ["Wednesday", "ouènzdé"],
  ["Thursday", "seurzdé"], ["Friday", "fraïdé"], ["Saturday", "sateudé"], ["Sunday", "seundé"], ["", ""]];
const MONTHS = [
  ["January", "djanioueri"], ["February", "fébioueri"], ["March", "mârtch"], ["April", "éiprol"],
  ["May", "méi"], ["June", "djoune"], ["July", "djoulaï"], ["August", "ôgueuste"],
  ["September", "sèptèmbeur"], ["October", "oktôoubeur"], ["November", "novèmbeur"], ["December", "dissèmbeur"],
];
const SEASONS = [
  ["summer", "seumeur"], ["autumn", "ôteume"], ["winter", "ouinnteur"], ["spring", "sprinng"],
];
const WEATHER = [
  ["sunny", "seuni"], ["windy", "ouinndi"], ["cloudy", "klaoudi"], ["rainy", "réini"],
  ["snowy", "snôoui"], ["foggy", "fogui"], ["hot", "hote"], ["cold", "kôoulde"],
];
const FOOD = [
  ["a mango", "e manngôou"], ["tea", "ti"], ["a biscuit", "e biskite"],
  ["a sausage", "e sossidj"], ["pasta", "pasta"], ["soup", "soup"],
  ["chocolate", "tchoklite"], ["coffee", "kofi"], ["yoghurt", "yogueurte"],
];
const TASTES = [
  ["sweet", "souite"], ["salty", "solti"], ["sour", "saoueur"], ["bitter", "biteur"],
];
const FAMILY = [
  ["grandfather", "granndfâzeur"], ["grandmother", "granndmeuzeur"], ["grandparents", "granndpèrennts"],
  ["an uncle", "ane eunnkeul"], ["an aunt", "ane ânnte"], ["a cousin", "e keuzine"],
];
const DEMO = [
  ["this", "zisse"], ["that", "zate"], ["these", "zize"], ["those", "zôouz"],
];
const BODY = [
  ["head", "hède"], ["hair", "hèr"], ["face", "féiss"], ["cheeks", "tchiks"],
  ["chin", "tchine"], ["neck", "nèk"], ["teeth", "tisse"], ["chest", "tchèste"],
  ["back", "bak"], ["belly", "bèli"], ["arms", "ârmz"], ["hands", "hanndz"],
  ["fingers", "finngueurz"], ["nails", "néilz"], ["thighs", "saïz"], ["legs", "lègz"],
  ["feet", "fite"], ["", ""],
];
const CLOTHES = [
  ["a scarf", "e skârf"], ["a cap", "e kap"], ["a pullover", "e poulôouveur"],
  ["shorts", "chôrts"], ["a belt", "e bèlte"], ["a blouse", "e blaouz"],
  ["socks", "soks"], ["flip flops", "flipe flops"], ["glasses", "glâssiz"],
  ["trousers", "traouzeurz"], ["a sweater", "e souèteur"], ["a hat", "e hate"],
];
const SCHOOL = [
  ["classroom", "klâsroume"], ["library", "laïbreri"], ["cafeteria", "kafétiria"],
  ["school yard", "skoul iârd"], ["office", "ofiss"], ["toilets", "toïlets"],
  ["soccer field", "sokeur filde"], ["playground", "pléigraounde"], ["gym", "djime"],
];
const FURNITURE = [
  ["wardrobe", "ouârdrôoub"], ["mosquito net", "moskitô nète"], ["nightstand", "naïtstannde"],
  ["blanket", "blannkite"], ["stool", "stoule"], ["TV set", "tivi sète"],
  ["fork", "fôrk"], ["knife", "naïf"], ["bowl", "bôoul"],
  ["electric stove", "ilèktrik stôouv"], ["shower", "chaoueur"], ["mirror", "mireur"],
  ["tap", "tape"], ["basin", "béissine"], ["light", "laïte"],
];

const DRIVE = {
  alphabet: "https://drive.google.com/uc?export=download&id=1BtKd6mzbKx6zvn31T90c40ftv5ywv4j2",
  numbers: "https://drive.google.com/uc?export=download&id=1Ve7ciApxhS8y2trpoJ0YUCdniYATqB_W",
  days: "https://drive.google.com/uc?export=download&id=1UsGvOFCPUTTSD6lphgFuJYEevGWZbBXX",
  tastes: "https://drive.google.com/uc?export=download&id=1XtRxxCarKupXZ2wRTN_XLYcsdSNHeeID",
};

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("PERSONAL COMMUNICATION (Unit 1)"),
    p("", { after: 40 }),
    img("u1_socialising.png", 340, 768 / 1408),
    pr([...kw("Hello! Nice to meet you!", "hèlôou! naïss tou mite iou"), run("   "), ...kw("How are you?", "haou âr iou")]),
    pr([...kw("How do you spell it?", "haou dou iou spèl ite"), run("  →  "), ...kw("K-O-T-O.", "kéi-ôou-ti-ôou")]),
    pr([...kw("What’s your phone number?", "ouots iôr fôoune neummbeur"), run("  →  "), ...kw("It’s 034…", "its zirô sri fôr")], { after: 140 }),

    themeBar("CLASSROOM COMMUNICATION (Unit 2)"),
    p("", { after: 40 }),
    img("u2_permission.png", 340, 768 / 1408),
    pr([...kw("May I come in, please?", "méi aï keume ine plize"), run("  →  "), ...kw("Yes, you may.", "yèss iou méi")]),
    pr([...kw("Can I go out, please?", "kane aï gôou aoute plize"), run("  →  "), ...kw("No, you can’t.", "nôou iou kannte")]),
    pr([...kw("Can you repeat, please?", "kane iou ripite plize"), run("   "), ...kw("What does it mean?", "ouate deuz ite mine")], { after: 140 }),

    themeBar("TIME, DAYS, SEASONS AND WEATHER (Unit 3)"),
    p("", { after: 40 }),
    img("u3_clocks.png", 340, 768 / 1408),
    pr([...kw("What time is it?", "ouate taïme iz ite"), run("  →  "), ...kw("It’s nine o’clock.", "its naïne oklok")]),
    wordGrid(DAYS, 4),
    p("", { after: 40 }),
    wordGrid(MONTHS, 4),
    p("", { after: 40 }),
    img("u3_seasons.png", 340, 768 / 1408),
    wordGrid(SEASONS, 4),
    p("", { after: 40 }),
    wordGrid(WEATHER, 4),
    p("", { after: 40 }),
    pr([...kw("What’s the weather like?", "ouots ze ouèzeur laïk"), run("  →  "), ...kw("It’s sunny.", "its seuni")], { after: 140 }),

    themeBar("EVERYDAY MEALS (Unit 4)"),
    p("", { after: 40 }),
    img("u4_food.png", 340, 768 / 1408),
    wordGrid(FOOD, 3),
    p("", { after: 40 }),
    img("u4_tastes.png", 340, 768 / 1408),
    wordGrid(TASTES, 4),
    p("", { after: 40 }),
    pr([...kw("I like chocolate.", "aï laïk tchoklite"), run("   "), ...kw("I don’t like cheese.", "aï dôounte laïk tchize"), run("   "), ...kw("It tastes sweet!", "ite téists souite")], { after: 140 }),

    themeBar("FAMILY (Unit 5)"),
    p("", { after: 40 }),
    img("u5_family.png", 340, 768 / 1408),
    wordGrid(FAMILY, 3),
    p("", { after: 40 }),
    wordGrid(DEMO, 4),
    p("", { after: 40 }),
    pr([...kw("This is my uncle’s bike.", "zisse iz maï eunnkeulz baïk"), run("   "), ...kw("Those are my grandparents.", "zôouz âr maï granndpèrennts")], { after: 140 }),

    themeBar("PEOPLE’S APPEARANCE (Unit 6)"),
    p("", { after: 40 }),
    img("u6_body.png", 340, 768 / 1408),
    wordGrid(BODY, 4),
    p("", { after: 40 }),
    img("u6_clothes.png", 340, 768 / 1408),
    wordGrid(CLOTHES, 4),
    p("", { after: 40 }),
    pr([...kw("What does she look like?", "ouate deuz chi louk laïk"), run("  →  "), ...kw("She is tall. She is wearing a scarf.", "chi iz tôl. chi iz ouèrinng e skârf")], { after: 140 }),

    themeBar("MY IMMEDIATE SURROUNDINGS (Unit 7)"),
    p("", { after: 40 }),
    img("u7_school.png", 340, 768 / 1408),
    wordGrid(SCHOOL, 3),
    p("", { after: 40 }),
    img("u7_house.png", 340, 768 / 1408),
    wordGrid(FURNITURE, 3),
    p("", { after: 40 }),
    pr([...kw("There is a library.", "zèr iz e laïbreri"), run("   "), ...kw("There are many classrooms.", "zèr âr mèni klâsroumz")], { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND CHANTS ----------------
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND CHANTS"),
    p([run("All the songs, rhymes and chants of the year. Scan the QR code or use the link to listen and download.",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("♪ THE ALPHABET SONG (Unit 1)"),
    p("", { after: 60 }),
    songLine("A B C D E F G,"),
    songLine("H I J K L M N O P,"),
    songLine("Q R S, T U V,"),
    songLine("W X, Y and Z."),
    songLine("Now I know my ABC,"),
    songLine("next time won’t you sing with me?"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t6_u1_alphabet.png", label: "The alphabet song — listen and sing",
      url: DRIVE.alphabet }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE NUMBER RHYME (Unit 1)"),
    p("", { after: 60 }),
    songLine("1, 2, put on your shoe,"),
    songLine("3, 4, shut the door,"),
    songLine("5, 6, pick up sticks,"),
    songLine("7, 8, go to the gate,"),
    songLine("9, 10, say it again!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t6_u1_numbers.png", label: "The numbers and the rhyme — listen and say",
      url: DRIVE.numbers }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE DAYS OF THE WEEK (Unit 3)"),
    p("", { after: 60 }),
    songLine("Monday, Tuesday, Wednesday,"),
    songLine("Thursday, Friday too,"),
    songLine("Saturday and Sunday:"),
    songLine("seven days for you!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t6_u3_days.png", label: "The days of the week — listen and sing",
      url: DRIVE.days }], COLOR),
    p("", { after: 140 }),

    themeBar("♪ THE JAZZ CHANT “I DON’T LIKE CHEESE!” (Unit 4)"),
    p("", { after: 60 }),
    songLine("I like mangoes, sweet, sweet, sweet!"),
    songLine("I like biscuits, what a treat!"),
    songLine("I don’t like cheese, no, no, no!"),
    songLine("I don’t like cheese, please, no more!"),
    songLine("You like coffee? Not for me!"),
    songLine("I like chocolate, one, two, three!"),
    p([run("We clap the rhythm: TA-ta-ta TA-ta-ta!", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 60 }),
    audioBox([{ qr: "qr_t6_u4_tastes.png", label: "The tastes and the jazz chant — listen and clap",
      url: DRIVE.tastes }], COLOR),
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
    p("This help is only a guide for the mouth: the true model is the AUDIO. Always play the audio (QR code or link) and repeat after it!", { after: 160 }),
    p([run("The special English sounds:", { bold: true, size: 30 })], { after: 80 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [h("Written", 2200), h("How to say it", 4100), h("Examples", 4100)] }),
      pronRow("th → [z] / [s]", "Put the tongue between the teeth and say a soft “z” or “s”.", "this [zisse], that [zate], thirsty [seursti], teeth [tisse]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "hungry [heunngri], head [hède], hat [hate], house [haouss]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "relatives [rélativz], rainy [réini], library [laïbreri]"),
      pronRow("-ing → [inng]", "A nasal “ng” at the end, like a small bell.", "wearing [ouèrinng], spring [sprinng], morning [môrninng]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "trousers [traouzeurz], shower [chaoueur], sour [saoueur]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "mango [manngôou], those [zôouz], wardrobe [ouârdrôoub]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "face [féiss], nails [néilz], basin [béissine], tastes [téists]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "knife [naïf], thighs [saïz], light [laïte], I like [aï laïk]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "uncle [eunnkeul], lunch [leunntch], hungry [heunngri]"),
      pronRow("ee / ea → [i]", "A long “i”, smile!", "sweet [souite], teeth [tisse], feet [fite], meal [mile]"),
      pronRow("silent letters", "Some letters are written but NOT said!", "knife [naïf] (no k!), autumn [ôteume] (no n!)"),
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
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, Simon says, bingo, Kim’s game, quiz quiz trade…")],
      { after: 160 }),

    themeBar("THE MONTHS (Unit 3)"),
    p("", { after: 60 }),
    flashTable(MONTHS, 3, 40),
    pageBreak(),

    themeBar("THE FOOD AND THE TASTES (Unit 4)"),
    p("", { after: 60 }),
    flashTable(FOOD.map(strip), 3, 40),
    p("", { after: 60 }),
    flashTable(TASTES, 4, 40),
    pageBreak(),

    themeBar("THE FAMILY (Unit 5)"),
    p("", { after: 60 }),
    flashTable(FAMILY.map(strip), 3, 40),
    p("", { after: 100 }),
    themeBar("THIS, THAT, THESE, THOSE (Unit 5)"),
    p("", { after: 60 }),
    flashTable(DEMO, 4, 44),
    pageBreak(),

    themeBar("THE BODY (Unit 6)"),
    p("", { after: 60 }),
    flashTable(BODY.filter(([w]) => w), 3, 40),
    pageBreak(),

    themeBar("THE CLOTHES (Unit 6)"),
    p("", { after: 60 }),
    flashTable(CLOTHES.map(strip), 3, 40),
    pageBreak(),

    themeBar("THE SCHOOL (Unit 7)"),
    p("", { after: 60 }),
    flashTable(SCHOOL, 3, 36),
    pageBreak(),

    themeBar("THE HOUSE FURNITURE (Unit 7)"),
    p("", { after: 60 }),
    flashTable(FURNITURE, 3, 34),
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
    p([run("“Goodbye, teacher! Goodbye, children! You finished primary school English — see you in secondary school!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T6", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/1Jm01g0n8yNwA7PLPo2VAQLZOlesclma6", { color: C.BLUE, size: 22 })], { center: true }),
  ];
}

module.exports = function annexes() {
  return [
    unitBanner("ANNEXES", COLOR, "annexes"),
    p("", { after: 100 }),
    p([run("The treasure box of the year!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 160 }),
    p([run("Annex 1 — Picture dictionary: all the words of the year", { size: 30 })], { after: 60 }),
    p([run("Annex 2 — Songs and chants: with the audio", { size: 30 })], { after: 60 }),
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
