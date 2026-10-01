// T7 — ANNEXES — Picture dictionary, Songs & chants, Pronunciation guide, Flashcards,
//                 Conjugation guide, Phonetics guide (IPA + figurée)
const B = require("./builders");
const { C, SZ, run, p, pr, kw, unitBanner, audioBox, img, pageBreak,
        cell, noBorders, bookmarkTitle } = B;
const { Table, TableRow, WidthType, VerticalAlign, BorderStyle, ExternalHyperlink } = require("docx");

const COLOR = "4A235A"; // violet foncé — couleur des annexes T7

const DRIVE = {
  chants: "https://drive.google.com/uc?export=download&id=15TOQUKwKvlutd0hiPOBhUJ0duoiOQTBz",
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

// ---------------- données de l'année T7 ----------------
const JOBS = [
  ["a teacher", "e titcheur"], ["a doctor", "e dokteur"], ["a nurse", "e neurss"],
  ["a farmer", "e fârmeur"], ["a mechanic", "e mékanik"], ["a driver", "e draïveur"],
  ["a cook", "e kouk"], ["a police officer", "e poliss ofisseur"], ["a seller", "e sèleur"],
  ["a pilot", "e païleute"], ["a fisherman", "e ficheurmane"], ["a carpenter", "e kârpeunnteur"],
];
const INSTRUCTIONS = [
  ["Stand up!", "stannde eup"], ["Sit down!", "site daoune"], ["Open your books!", "ôoupeune iôr bouks"],
  ["Listen carefully!", "lisseune kèrfouli"], ["Repeat after me!", "ripite afteur mi"],
  ["Raise your hand!", "réiz iôr hannde"], ["Come to the board!", "keume tou ze bôrde"],
  ["Work in pairs!", "oueurk ine pèrz"], ["Be quiet, please!", "bi kouaïeute pliiz"],
];
const BORROW = [
  ["to borrow", "tou borôou"], ["to lend", "tou lènnde"], ["to give back", "tou guive bak"],
];
const TASTES = [
  ["sweet", "souite"], ["salty", "sôlti"], ["sour", "saoueur"], ["bitter", "biteur"],
];
const FOOD_ADJ = [
  ["delicious", "dilicheuss"], ["tasty", "téisti"], ["healthy", "hèlsi"], ["unhealthy", "eune-hèlsi"],
];
const ENGLISH_FOOD = [
  ["eggs", "ègz"], ["bacon", "béikeune"], ["sausages", "sossidjiz"],
  ["beans", "biinz"], ["toast", "tôouste"], ["fish and chips", "fich annde tchips"],
  ["a hamburger", "e hammbeurgueur"], ["a hot dog", "e hote dog"], ["a full English breakfast", "e foule inngglich brèkfeuste"],
];
const FAMILY = [
  ["grandchildren", "granntchildrenne"], ["a nephew", "e nèfiou"], ["a niece", "e niiss"],
  ["a husband", "e heuzbeunnde"], ["a wife", "e ouaïf"], ["the extended family", "dhi iksntenndide famili"],
];
const STATUS = [
  ["single", "singgeul"], ["engaged", "inngéidjde"], ["married", "maride"],
  ["separated", "sèperéitide"], ["divorced", "divôrste"], ["widowed", "ouidôoude"],
];
const APPEARANCE = [
  ["tall ≠ short", "tôl ≠ chôrt"], ["thin ≠ fat", "thinne ≠ fatt"], ["beautiful, pretty", "bioutifoul, priti"],
  ["handsome", "hanndseume"], ["plain ≠ ugly", "pléine ≠ eugli"], ["young ≠ old", "ieunng ≠ ôoulde"],
];
const CHARACTER = [
  ["nice, friendly, kind", "naïss, frenndli, kaïnnde"], ["wicked", "ouikide"],
  ["generous ≠ selfish", "djènereuss ≠ sèlfich"], ["courageous ≠ coward", "keuréidjeuss ≠ kaoueurde"],
  ["shy, timid", "chaï, timide"], ["loyal", "loïeul"],
  ["wise, clever", "ouaïz, klèveur"], ["intelligent ≠ stupid", "inntèlidjeunnt ≠ stioupide"],
  ["hard-working ≠ lazy", "hard oueurking ≠ léizi"],
];
const MEANS = [
  ["to watch TV", "tou ouatch tivi"], ["to listen to the radio", "tou lisseune tou dhe réidiôou"],
  ["to read the newspaper", "tou riide dhe niouzpéipeur"], ["to make a phone call", "tou méik e fôoune kôl"],
  ["to send an email", "tou sènnde ann imeil"], ["to chat on WhatsApp", "tou tchatt onne ouatsap"],
  ["to surf on the internet", "tou seurf onne dhi innteurnèt"], ["the notice board", "dhe nôoutiss bôrde"],
];
const BUILDINGS = [
  ["a school", "e skoul"], ["a hospital", "e hospiteul"], ["a health center", "e hèlth sènnteur"],
  ["the town hall", "dhe taoune hôl"], ["the Fokontany office", "dhe fokontani ofiss"],
  ["a stadium", "e stéidieume"], ["a library", "e laïbreri"], ["a post office", "e pôoust ofiss"],
];
const SURROUNDINGS = [
  ["a garden", "e gardeune"], ["a gate", "e guéite"], ["a fence", "e fènnss"], ["a flag", "e flagg"],
];
const PREPOSITIONS = [
  ["in", "inne"], ["on", "onne"], ["under", "eunndeur"],
  ["in front of", "inne fronnte ov"], ["behind", "bihaïnnde"], ["next to", "nèxte tou"],
  ["between", "bitouiine"], ["opposite", "opezitt"], ["near", "nir"],
];
const DEMO = [
  ["this", "dhiss"], ["that", "dhatt"], ["these", "dhiiz"], ["those", "dhôouz"],
];

// ---------------- ANNEX 1 — PICTURE DICTIONARY ----------------
function pictureDictionary() {
  return [
    ...annexTitle("ann1", "1", "PICTURE DICTIONARY"),
    p([run("All the big words of the year, unit by unit. Look at the picture, read the word, say it aloud!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 160 }),

    themeBar("JOBS AND DREAMS (Unit 1)"),
    p("", { after: 40 }),
    img("u1_jobs.png", 340, 768 / 1408),
    wordGrid(JOBS, 3),
    p("", { after: 40 }),
    pr([...kw("What do you want to be?", "ouate dou iou ouannte tou bi"), run("  →  "), ...kw("I want to be a pilot!", "aï ouannte tou bi e païleute")]),
    pr([...kw("Girls and boys can do the same jobs!", "gueurlz annde boïz kane dou dhe séime djobz")], { after: 140 }),

    themeBar("CLASSROOM LANGUAGE, BORROWING AND LENDING (Unit 2)"),
    p("", { after: 40 }),
    img("u2_borrow.png", 340, 768 / 1408),
    wordGrid(INSTRUCTIONS, 3),
    p("", { after: 40 }),
    wordGrid(BORROW, 3),
    p("", { after: 40 }),
    pr([...kw("May I borrow your pen, please?", "méi aï borôou iôr pène pliiz"), run("  →  "), ...kw("Of course! Here you are.", "ov kôrss! hir iou âr")]),
    pr([...kw("Can you lend me your ruler?", "kane iou lènnde mi iôr rouleur"), run("  —  "), ...kw("I give it back tomorrow!", "aï guive ite bak toumorôou")], { after: 140 }),

    themeBar("FOOD AND MEALS (Unit 3)"),
    p("", { after: 40 }),
    img("u3_meals.png", 340, 768 / 1408),
    wordGrid(TASTES, 4),
    p("", { after: 40 }),
    wordGrid(FOOD_ADJ, 4),
    p("", { after: 40 }),
    img("u3_breakfast.png", 340, 768 / 1408),
    wordGrid(ENGLISH_FOOD, 3),
    p("", { after: 40 }),
    pr([...kw("What do you have for breakfast?", "ouate dou iou have fôr brèkfeuste"), run("  →  "), ...kw("I have rice and milk.", "aï have raïss annde milk")], { after: 140 }),

    themeBar("FAMILY AND PEOPLE (Unit 4)"),
    p("", { after: 40 }),
    img("u4_tree.png", 340, 768 / 1408),
    wordGrid(FAMILY, 3),
    p("", { after: 40 }),
    wordGrid(STATUS, 3),
    p("", { after: 40 }),
    img("u4_appearance.png", 340, 768 / 1408),
    wordGrid(APPEARANCE, 3),
    p("", { after: 40 }),
    wordGrid(CHARACTER, 3),
    p("", { after: 40 }),
    pr([...kw("What does she look like?", "ouate deuz chi louk laïk"), run("  →  "), ...kw("She is tall and pretty.", "chi iz tôl annde priti")]),
    pr([...kw("What is she like?", "ouate iz chi laïk"), run("  →  "), ...kw("She is kind and hard-working.", "chi iz kaïnnde annde hard oueurking")], { after: 140 }),

    themeBar("MEANS OF COMMUNICATION (Unit 5)"),
    p("", { after: 40 }),
    img("u5_means.png", 340, 768 / 1408),
    wordGrid(MEANS, 2),
    p("", { after: 40 }),
    pr([...kw("Do you watch TV?", "dou iou ouatch tivi"), run("  →  "), ...kw("Yes, I do. / No, I don’t.", "yèss aï dou / nôou aï dôounte")]),
    pr([...kw("What are you doing now?", "ouate âr iou douinng naou"), run("  →  "), ...kw("I am listening to the radio.", "aï amme lisseuninng tou dhe réidiôou")], { after: 140 }),

    themeBar("THE ENVIRONMENT (Unit 6)"),
    p("", { after: 40 }),
    img("u6_buildings.png", 340, 768 / 1408),
    wordGrid(BUILDINGS, 3),
    p("", { after: 40 }),
    wordGrid(SURROUNDINGS, 4),
    p("", { after: 40 }),
    wordGrid(PREPOSITIONS, 3),
    p("", { after: 40 }),
    wordGrid(DEMO, 4),
    p("", { after: 40 }),
    pr([...kw("This is our school.", "dhiss iz aour skoul"), run("   "), ...kw("The library is next to the school.", "dhe laïbreri iz nèxte tou dhe skoul")], { after: 100 }),
  ];
}

// ---------------- ANNEX 2 — SONGS AND CHANTS ----------------
function songs() {
  return [
    ...annexTitle("ann2", "2", "SONGS AND CHANTS"),
    p([run("The three jazz chants of T7 — and the traditional songs of the small classes, to warm up the class in ten seconds!",
      { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 80 }),
    p([run("Note for the teacher: a chant is SPOKEN with a strong rhythm — clap your hands: TA-ta-ta TA-ta-ta! The QR code version matches the words of this book. The traditional songs also exist in video on YouTube: the links are under each song.",
      { italic: true, color: C.GRAY, size: 22 })], { after: 160 }),

    themeBar("♪ THE JOBS CHANT (Unit 1)"),
    p("", { after: 60 }),
    songLine("A doctor, a driver, a farmer, a cook —"),
    songLine("I follow my dream, just look, look, look!"),
    songLine("A teacher, a pilot, a nurse, and me —"),
    songLine("I want to be what I want to be!"),
    p("", { after: 100 }),

    themeBar("♪ THE “WHAT ARE YOU DOING?” CHANT (Unit 5)"),
    p("", { after: 60 }),
    songLine("What are you doing? I’m watching TV!"),
    songLine("What are you doing? I’m climbing a tree!"),
    songLine("What are you doing? I’m calling my friend."),
    songLine("Chatting and surfing — the fun never ends!"),
    p("", { after: 100 }),

    themeBar("♪ THE PREPOSITION CHANT (Unit 6)"),
    p("", { after: 60 }),
    songLine("In, on, under, behind the door,"),
    songLine("next to the window, down on the floor!"),
    songLine("Between two chairs, opposite me —"),
    songLine("prepositions are easy, one, two, three!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t7_annex_chants.png", label: "The three T7 chants — listen and clap",
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
      pronRow("th → [dh]", "Put the tongue between the teeth and let the voice vibrate, like a soft “z”.", "this [dhiss], that [dhatt], the mother [dhe meudheur]"),
      pronRow("th → [th] / [s]", "Same tongue between the teeth, but NO voice — just air.", "health [hèlth], thin [thinne], thank you [thannk iou]"),
      pronRow("h → [h]", "Blow softly, like a small laugh. The “h” is not silent!", "hospital [hospiteul], husband [heuzbeunnde], hand [hannde]"),
      pronRow("r → [r]", "A soft “r”, the tongue does not roll and does not touch the teeth.", "driver [draïveur], library [laïbreri], radio [réidiôou]"),
      pronRow("-ing → [inng]", "A nasal “ng” at the end, like a small bell.", "working [oueurking], doing [douinng], listening [lisseuninng]"),
      pronRow("ou / ow → [aou]", "Two sounds together: “a” then “ou”.", "town [taoune], now [naou], sour [saoueur]"),
      pronRow("o / oa → [ôou]", "Two sounds together: “ô” then “ou”.", "post office [pôoust ofiss], radio [réidiôou], those [dhôouz]"),
      pronRow("a → [éi]", "Two sounds together: “é” then “i”.", "gate [guéite], stadium [stéidieume], engaged [inngéidjde]"),
      pronRow("i → [aï]", "Two sounds together: “a” then “i”.", "wife [ouaïf], pilot [païleute], library [laïbreri]"),
      pronRow("u → [eu]", "A short “eu”, the mouth relaxed.", "lunch [leunntch], husband [heuzbeunnde], under [eunndeur]"),
      pronRow("ee / ea → [ii]", "A long “i”, smile!", "sweet [souite], between [bitouiine], to eat [tou ite]"),
      pronRow("silent letters", "Some letters are written but NOT said!", "to write [tou raïte] (no w!), the board [dhe bôrd] (no a!)"),
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
                              pn.replace(/^(e|ann?e?|dh[ei])\s+/, "")];
  return [
    ...annexTitle("ann4", "4", "FLASHCARDS TO CUT OUT"),
    p([run("For the teacher: ", { bold: true }),
       run("photocopy these pages, paste them on cardboard, cut along the dashed lines. Use the cards for the games: point, mime, Simon says, bingo, Kim’s game, quiz quiz trade…")],
      { after: 160 }),

    themeBar("THE JOBS (Unit 1)"),
    p("", { after: 60 }),
    flashTable(JOBS.map(strip), 3, 36),
    pageBreak(),

    themeBar("THE TASTES AND THE FOOD WORDS (Unit 3)"),
    p("", { after: 60 }),
    flashTable(TASTES, 4, 40),
    p("", { after: 60 }),
    flashTable(ENGLISH_FOOD.map(strip).filter(([w]) => w.length < 16), 3, 36),
    pageBreak(),

    themeBar("THE FAMILY AND THE MARITAL STATUS (Unit 4)"),
    p("", { after: 60 }),
    flashTable(FAMILY.map(strip), 3, 34),
    p("", { after: 60 }),
    flashTable(STATUS, 3, 36),
    pageBreak(),

    themeBar("THE CHARACTER WORDS (Unit 4)"),
    p("", { after: 60 }),
    flashTable([["kind", "kaïnnde"], ["wicked", "ouikide"], ["generous", "djènereuss"],
      ["selfish", "sèlfich"], ["courageous", "keuréidjeuss"], ["shy", "chaï"],
      ["loyal", "loïeul"], ["clever", "klèveur"], ["lazy", "léizi"],
      ["hard-working", "hard oueurking"], ["friendly", "frenndli"], ["stupid", "stioupide"]], 3, 36),
    pageBreak(),

    themeBar("THE MEANS OF COMMUNICATION (Unit 5)"),
    p("", { after: 60 }),
    flashTable([["TV", "tivi"], ["radio", "réidiôou"], ["newspaper", "niouzpéipeur"],
      ["phone call", "fôoune kôl"], ["email", "imeil"], ["WhatsApp", "ouatsap"],
      ["internet", "innteurnèt"], ["notice board", "nôoutiss bôrde"], ["letter", "lèteur"]], 3, 34),
    pageBreak(),

    themeBar("THE BUILDINGS AND THE SURROUNDINGS (Unit 6)"),
    p("", { after: 60 }),
    flashTable(BUILDINGS.map(strip), 3, 32),
    p("", { after: 60 }),
    flashTable(SURROUNDINGS.map(strip), 4, 38),
    pageBreak(),

    themeBar("THE PREPOSITIONS AND THE DEMONSTRATIVES (Unit 6)"),
    p("", { after: 60 }),
    flashTable(PREPOSITIONS, 3, 36),
    p("", { after: 60 }),
    flashTable(DEMO, 4, 44),
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
  ["sit", "sat"], ["write", "wrote"], ["read", "read (red!)"], ["sing", "sang"],
  ["swim", "swam"], ["buy", "bought"], ["tell", "told"], ["find", "found"],
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
    p([run("All the verbs of the year — with the two present tenses of T7 face to face!", { italic: true, color: C.GRAY, size: 26 })], { center: true, after: 120 }),

    themeBar("THE THREE STAR VERBS: BE, HAVE, DO"),
    p("", { after: 40 }),
    p([run("TO BE (to say who I am)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I", "I am (I’m)", "I am not (I’m not)", "Am I…?"],
      ["you / we / they", "you are (you’re)", "you are not (aren’t)", "Are you…?"],
      ["he / she / it", "he is (he’s)", "he is not (isn’t)", "Is he…?"],
    ]),
    p([run("Short answers: Yes, I am. — No, he isn’t.", { italic: true, color: C.GRAY, size: 24 })], { after: 80 }),
    p([run("TO HAVE (to say what I possess)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I / you / we / they", "I have", "I do not have (don’t)", "Do you have…?"],
      ["he / she / it", "he has", "he does not have (doesn’t)", "Does he have…?"],
    ]),
    p([run("Careful! have → HAS with he, she, it — a total exception!", { italic: true, color: C.RED, size: 24 })], { after: 80 }),
    p([run("TO DO (the helper of questions and negatives)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I / you / we / they", "I do", "I don’t", "Do I…?"],
      ["he / she / it", "he does (deuz!)", "he doesn’t", "Does he…?"],
    ]),
    p("", { after: 40 }), pageBreak(),

    themeBar("THE TWO PRESENTS OF T7 — FACE TO FACE!"),
    p("", { after: 40 }),
    p([run("1. The PRESENT SIMPLE — for the habits (every day, always, never…)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I / you / we / they", "I watch TV every evening", "I don’t watch TV", "Do you watch TV?"],
      ["he / she / it", "she watches TV", "she doesn’t watch TV", "Does she watch TV?"],
    ]),
    p("", { after: 60 }),
    p([run("2. The PRESENT PROGRESSIVE — for NOW (look!, listen!, at the moment…)", { bold: true, color: COLOR, size: 28 })], { after: 40 }),
    conjTable(["Person", "+ (affirmative)", "− (negative)", "? (question)"], [
      ["I", "I am watching TV now", "I am not watching", "Am I watching…?"],
      ["you / we / they", "you are watching", "you aren’t watching", "What are you doing?"],
      ["he / she / it", "he is watching", "he isn’t watching", "Is he watching…?"],
    ]),
    p([run("The magic formula: BE + verb-ING. The signal words tell you which present: every day → simple; now, look! → progressive!", { italic: true, color: C.RED, size: 24 })], { after: 100 }),

    themeBar("THE -S OF HE / SHE / IT — AND ITS EXCEPTIONS"),
    p("", { after: 40 }),
    rule("Normal verbs: + -s", [run("he plays, she likes, it works.")]),
    rule("After -s, -sh, -ch, -x, -o: + -ES", [run("he "), run("watches", { bold: true }), run(", she "), run("goes", { bold: true }), run(", it "), run("does", { bold: true }), run(". Why? “watchs” is impossible to say — the -es adds a little sound [iz]!")]),
    rule("Consonant + y → -IES", [run("study → she "), run("studies", { bold: true }), run(", carry → he "), run("carries", { bold: true }), run(". But vowel + y keeps -s: play → he plays.")]),
    rule("Total irregulars", [run("have → "), run("has", { bold: true }), run(", be → "), run("is", { bold: true }), run(". No rule — we learn them by heart!")], { after: 100 }),

    themeBar("THE -ING FORM — AND ITS EXCEPTIONS"),
    p("", { after: 40 }),
    rule("Normal verbs: + -ing", [run("watch → watching, read → reading.")]),
    rule("Silent -e falls", [run("make → "), run("making", { bold: true }), run(", write → "), run("writing", { bold: true }), run(". The silent e is useless before -ing.")]),
    rule("Short verb (1 vowel + 1 consonant): double the consonant", [run("run → "), run("running", { bold: true }), run(", sit → "), run("sitting", { bold: true }), run(", chat → "), run("chatting", { bold: true }), run(". The double letter keeps the short sound!")]),
    rule("-ie → y", [run("lie → "), run("lying", { bold: true }), run(", die → "), run("dying", { bold: true }), run(".")], { after: 100 }),

    themeBar("CAN, MAY, WANT TO AND THE IMPERATIVE"),
    p("", { after: 40 }),
    rule("can / may: never -s, never “to”", [run("he "), run("can swim", { bold: true }), run(" (not “he cans”). May I borrow your pen?")]),
    rule("want TO + verb", [run("I "), run("want to be", { bold: true }), run(" a pilot. She "), run("wants to be", { bold: true }), run(" a doctor (-s on want!).")]),
    rule("The imperative: the verb alone", [run("Listen! Stand up! Negative: "), run("Don’t", { bold: true }), run(" talk!")]),
    rule("There is / There are", [run("There is a gate (singular) — There are two gardens (plural).")], { after: 40 }),
    pageBreak(),

    themeBar("READY FOR SECONDARY SCHOOL: THE IRREGULAR PAST"),
    p("", { after: 40 }),
    pr([run("Next year, in secondary school, you will talk about yesterday! Regular verbs simply add "), run("-ed", { bold: true, color: C.BLUE }), run(" (play → played, watch → watched). But the most useful verbs change completely — no rule, we learn them by heart. Here is your first treasure list:")], { after: 80 }),
    irregularGrid(),
    p("", { after: 60 }),
    pr([run("Careful! ", { bold: true, color: C.RED }), run("read → read: same letters, new sound [rèd]! And be has two pasts: I/he "), run("was", { bold: true }), run(", you/we/they "), run("were", { bold: true }), run(".")]),
    p([run("Learn three verbs a week — in one term, the list is yours!", { italic: true, color: C.GRAY, size: 24 })]),
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
    p("In the dictionaries and in secondary school, the pronunciation is written with special symbols: the International Phonetic Alphabet (IPA), between slashes: /skuːl/. In this book, we used easy brackets read as in French: [skoul]. This annex puts the two systems side by side — so the pupils are ready for the dictionary!", { after: 80 }),
    pr([run("Example: "), run("school", { bold: true, color: C.BLUE }), run("  →  IPA "), run("/skuːl/", { bold: true, color: COLOR }), run("  =  this book "), run("[skoul]", { italic: true, color: C.GRAY }), run(". The two say the same sound!")], { after: 140 }),

    p([run("THE VOWELS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/iː/", "[ii] / [i]", "a long “i” — smile!", "sweet /swiːt/ [souite], between /bɪˈtwiːn/ [bitouiine]"),
      phonRow("/ɪ/", "[i]", "a short, quick “i”", "big /bɪɡ/ [big], to sit /sɪt/ [sitt]"),
      phonRow("/e/", "[è]", "like “è” in French", "fence /fens/ [fènnss], bed /bed/ [bède]"),
      phonRow("/æ/", "[a]", "an “a” with a big open mouth", "flag /flæɡ/ [flagg], family /ˈfæməli/ [famili]"),
      phonRow("/ɑː/", "[â]", "a long, deep “a”", "garden /ˈɡɑːdn/ [gardeune], farmer /ˈfɑːmə/ [fârmeur]"),
      phonRow("/ɒ/", "[o]", "a short “o”", "job /dʒɒb/ [djob], hospital /ˈhɒspɪtl/ [hospiteul]"),
      phonRow("/ɔː/", "[ô]", "a long “ô”", "board /bɔːd/ [bôrd], tall /tɔːl/ [tôl]"),
      phonRow("/ʊ/ /uː/", "[ou]", "like “ou” in French", "book /bʊk/ [bouk], school /skuːl/ [skoul]"),
      phonRow("/ʌ/", "[eu]", "a short “eu”, mouth relaxed", "lunch /lʌntʃ/ [leunntch], under /ˈʌndə/ [eunndeur]"),
      phonRow("/ɜː/", "[eur]", "a long “eur”", "nurse /nɜːs/ [neurss], to work /wɜːk/ [oueurk]"),
      phonRow("/ə/", "[e]", "the tiny lazy sound of English!", "teacher /ˈtiːtʃə/ [titcheur], doctor /ˈdɒktə/ [dokteur]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE DOUBLE VOWELS (two sounds in one!)", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/eɪ/", "[éi]", "“é” then “i”", "gate /ɡeɪt/ [guéite], stadium /ˈsteɪdiəm/ [stéidieume]"),
      phonRow("/aɪ/", "[aï]", "“a” then “i”", "wife /waɪf/ [ouaïf], library /ˈlaɪbrəri/ [laïbreri]"),
      phonRow("/ɔɪ/", "[oï]", "“o” then “i”", "boy /bɔɪ/ [boï], loyal /ˈlɔɪəl/ [loïeul]"),
      phonRow("/əʊ/", "[ôou]", "“ô” then “ou”", "post /pəʊst/ [pôoust], radio /ˈreɪdiəʊ/ [réidiôou]"),
      phonRow("/aʊ/", "[aou]", "“a” then “ou”", "town /taʊn/ [taoune], now /naʊ/ [naou]"),
      phonRow("/eə/", "[è(r)]", "“è” with a little “r”", "chair /tʃeə/ [tchèr], there /ðeə/ [dhèr]"),
    ]}),
    p("", { after: 100 }),
    p([run("THE SPECIAL CONSONANTS", { bold: true, size: 30, color: COLOR })], { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      head(),
      phonRow("/ð/", "[dh]", "tongue between the teeth + voice", "this /ðɪs/ [dhiss], mother /ˈmʌðə/ [meudheur]"),
      phonRow("/θ/", "[th]", "tongue between the teeth, air only", "health /helθ/ [hèlth], thin /θɪn/ [thinne]"),
      phonRow("/h/", "[h]", "a soft blow — never silent!", "hospital /ˈhɒspɪtl/ [hospiteul], hand /hænd/ [hannde]"),
      phonRow("/ŋ/", "[nng]", "the nasal “ng” bell", "working /ˈwɜːkɪŋ/ [oueurking], song /sɒŋ/ [sonng]"),
      phonRow("/tʃ/", "[tch]", "like “tch” in “tchak”", "chair /tʃeə/ [tchèr], to watch /wɒtʃ/ [ouatch]"),
      phonRow("/dʒ/", "[dj]", "like “dj” in “Djibouti”", "job /dʒɒb/ [djob], generous /ˈdʒenərəs/ [djènereuss]"),
      phonRow("/ʃ/", "[ch]", "like “ch” in “chat”", "shy /ʃaɪ/ [chaï], station /ˈsteɪʃn/ [stéicheune]"),
      phonRow("/w/", "[ou]", "round the lips, like “oui”", "wife /waɪf/ [ouaïf], to work /wɜːk/ [oueurk]"),
      phonRow("/j/", "[i] / [y]", "like the “y” of “yoyo”", "you /juː/ [iou], young /jʌŋ/ [ieunng]"),
      phonRow("/r/", "[r]", "a soft English “r” — no rolling!", "radio /ˈreɪdiəʊ/ [réidiôou], driver /ˈdraɪvə/ [draïveur]"),
    ]}),
    p("", { after: 100 }),
    p([run("The stress mark:", { bold: true, size: 30 })], { after: 60 }),
    pr([run("In IPA, the little mark "), run("ˈ", { bold: true, color: COLOR, size: 30 }), run(" shows the STRONG syllable: teacher /ˈtiːtʃə/ — we hit the FIRST part: "), run("TEA-cher!", { bold: true, color: C.BLUE }), run(" In this book, say the audio model and copy its music.")], { after: 80 }),
    p([run("In secondary school, the dictionary will speak IPA to you — and now, you understand it!", { italic: true, color: C.GRAY, size: 26 })], { center: true }),
  ];
}

// ---------------- page finale ----------------
function finalPage() {
  return [
    p("", { after: 400 }),
    p([run("THE END OF THE BOOK — THE BEGINNING OF YOUR ENGLISH LIFE!", { bold: true, size: 40, color: COLOR })], { center: true, after: 200 }),
    img("koto_soa.png", 300, 1408 / 768),
    p([run("Koto and Soa say:", { bold: true, size: 30 })], { center: true, after: 80 }),
    p([run("“Goodbye, teacher! Goodbye, children! Ninety-nine sessions — what a journey! Follow your dreams… and see you in secondary school!”", { italic: true, size: 32, color: C.BLUE })], { center: true, after: 200 }),
    p([run("J-Learn collection — English T7", { bold: true, size: 26 })], { center: true, after: 40 }),
    p([run("All the audio files of this book:", { size: 24 })], { center: true, after: 40 }),
    p([run("https://drive.google.com/drive/folders/11afac9nCz57apum_TpygMnSe0pnqx7lg", { color: C.BLUE, size: 22 })], { center: true }),
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
    p([run("Annex 5 — Conjugation guide: the two presents face to face", { size: 30 })], { after: 60 }),
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
