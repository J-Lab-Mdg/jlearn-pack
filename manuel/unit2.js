// UNIT 2 — THE ALPHABET (2 séances + révision + test) — Sessions 9 à 12 / 57
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "7030A0"; // violet
const TOTAL = 57;
const AUDIO = {
  alphabet: "https://drive.google.com/uc?export=download&id=17j7jHre64NU9DgSNhOcE14KFIX-kPsU7",
  song: "https://drive.google.com/uc?export=download&id=1TUymYaapCRRUC11ceBbn49LIAKDuEKCP",
  dialogue: "https://drive.google.com/uc?export=download&id=1HJVRmEs4szOPI4Nozf54X4E6i8OizOlb",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — THE ALPHABET", title, slo,
  values: "perseverance, self-confidence", session, materials,
});
const PRON = {
  A: "éi", B: "bi", C: "si", D: "di", E: "i", F: "èf", G: "dji", H: "éitch",
  I: "aï", J: "djéi", K: "kéi", L: "èl", M: "èm", N: "èn", O: "ôou", P: "pi",
  Q: "kiou", R: "âr", S: "ès", T: "ti", U: "iou", V: "vi", W: "deubeliou",
  X: "èks", Y: "ouaï", Z: "zèd",
};
function letterGrid(letters) {
  const perRow = 7, rows = [];
  for (let i = 0; i < letters.length; i += perRow) {
    const chunk = letters.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(L =>
      cell([p([run(`${L}${L.toLowerCase()}`, { bold: true, color: C.BLUE, size: 36 })], { center: true, after: 20 }),
            p([run(`[${PRON[L]}]`, { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}

function opening() {
  return [
    unitBanner("UNIT 2 — THE ALPHABET", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("A a   B b   C c", { bold: true, color: COLOR, size: 48 })], { center: true, after: 120 }),
    img("koto_soa.png", 300, 768 / 1416),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• say the 26 letters of the English alphabet;"),
    p("• sing the Alphabet Song;"),
    p("• spell my name.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("perseverance, self-confidence.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (Unit 1)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "F3EDF9" })] }),
        new TableRow({ children: [cell([
          p("1. Say hello to your friend."),
          p("2. Your friend says: “Thank you!”. What do you answer?", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_u2_dialogue.png", label: "Do you remember? — Koto and Soa say hello", url: AUDIO.dialogue }], COLOR),
  ];
}

function ficheS1() {
  const meta = META("The English alphabet: letters A to M",
    "By the end of the lesson, learners will be able to say the letters A to M correctly.",
    "1 / 2", "alphabet chart, blackboard, individual slates, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say hello to a friend."),
       fp("2. What do you say when you go home?"),
       fp("3. What do you say when a friend helps you?"),
       fp("4. Your friend says: “Thank you!”. What do you answer?")],
      [fp("Answer."),
       fp("E.A.: 1. Hello! / Hi! / Good morning!"),
       fp("2. Goodbye! / Bye!"),
       fp("3. Thank you!"),
       fp("4. You’re welcome!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen. Koto sings: “A – B – C – D!”. What is Koto singing?")],
      [fp("Listen. Answer."), fp("E.A.: Letters. / The ABC.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The English alphabet: letters A to M ». By the end of this lesson, you will be able to say the letters A to M correctly.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at this alphabet chart.")],
      [fp("Look.")], "Whole-class work", "Alphabet chart"),
    stepRow(["4. Analysis"],
      [fp("How many letters are on the chart? Count them."),
       fp("What is the first letter?"),
       fp("What letter comes after B?"),
       fp("Point to the letter M. What letter is it?")],
      [fp("Answer."),
       fp("E.A.: Twenty-six (26) letters."),
       fp("E.A.: A."),
       fp("E.A.: C."),
       fp("E.A.: It is M.")],
      "Brainstorming / Whole-class work", "Alphabet chart"),
    stepRow(["5. Synthesis"],
      [fp("So, the English alphabet has twenty-six letters. Today we learn the first thirteen letters: A, B, C, D, E, F, G, H, I, J, K, L, M. We say each letter with its English sound.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Say the missing letter:"),
       fp("1. A – B – … – D  2. E – … – G"),
       fp("3. H – I – …  4. K – … – M"),
       fp("Match the big letter to the small letter:"),
       fp("A  D  G  M"),
       fp("g  a  m  d")],
      [fp("Do the exercise."),
       pAns("E.A.: 1. C  2. F  3. J  4. L", ["C", "F", "J", "L"], { size: SZ.FICHE }),
       pAns("E.A.: A–a ; D–d ; G–g ; M–m", ["A–a", "D–d", "G–g", "M–m"], { size: SZ.FICHE })],
      "In pairs", "Individual slate"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the missing letters:"),
       fp("A, B, __, D, __, F, G, __, I, J, __, L, M"),
       fp("Say the letters from A to M.")],
      [fp("Do the exercise."),
       pAns("E.A.: C, E, H, K", ["C", "E", "H", "K"], { size: SZ.FICHE }),
       pAns("E.A.: A, B, C, D, E, F, G, H, I, J, K, L, M — each letter is said correctly.",
        ["A, B, C, D, E, F, G, H, I, J, K, L, M"], { size: SZ.FICHE })],
      "Individual work", "Notebook, slate"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}

function ficheS2() {
  const meta = META("The English alphabet: letters N to Z — the Alphabet Song",
    "By the end of the lesson, learners will be able to say the letters N to Z correctly, sing the Alphabet Song and spell their name.",
    "2 / 2", "alphabet chart, blackboard, individual slates, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How many letters are in the English alphabet?"),
       fp("2. What is the first letter?"),
       fp("3. What letter comes after J?"),
       fp("4. Say the letters from A to M.")],
      [fp("Answer."),
       fp("E.A.: 1. Twenty-six (26)."),
       fp("2. A."),
       fp("3. K."),
       fp("4. A, B, C, D, E, F, G, H, I, J, K, L, M.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Soa knows thirteen letters: A to M. Does she know all the letters of the alphabet?")],
      [fp("Listen. Answer."), fp("E.A.: No. Some letters are missing.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The English alphabet: letters N to Z — the Alphabet Song ». By the end of this lesson, you will be able to say the letters N to Z correctly, sing the Alphabet Song and spell your name.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Look at the alphabet chart, after the letter M.")],
      [fp("Look.")], "Whole-class work", "Alphabet chart"),
    stepRow(["4. Analysis"],
      [fp("What letter comes after M?"),
       fp("What is the last letter of the alphabet?"),
       fp("Point to the letter W. What letter is it?"),
       fp("Count the letters from N to Z. How many are they?")],
      [fp("Answer."),
       fp("E.A.: N."),
       fp("E.A.: Z."),
       fp("E.A.: It is W."),
       fp("E.A.: Thirteen (13) letters.")],
      "Brainstorming / Whole-class work", "Alphabet chart"),
    stepRow(["5. Synthesis"],
      [fp("So, the letters N to Z are: N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Now we know all the twenty-six letters. We can sing the Alphabet Song and spell names, letter by letter.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Sing each part of the Alphabet Song after your teacher:"),
       fp("Part 1: A B C D E F G"),
       fp("Part 2: H I J K L M N O P"),
       fp("Part 3: Q R S T U V"),
       fp("Part 4: W X Y and Z"),
       fp("Part 5: Now I know my ABC"),
       fp("Part 6: Next time won’t you sing with me?"),
       fp("Then spell with a friend:"),
       fp("— What’s your name?  — My name is Mino."),
       fp("— How do you spell it?  — M-I-N-O.")],
      [fp("Repeat. Sing. Spell."),
       pAns("E.A.: each pupil spells his/her name letter by letter (M-I-N-O, S-O-A…).",
        ["letter by letter"], { size: SZ.FICHE })],
      "Whole-class work / In pairs", "Blackboard, audio"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the missing letters:"),
       fp("N, __, P, Q, __, S, T, __, V, W, __, Y, Z"),
       fp("Spell your name, letter by letter.")],
      [fp("Do the exercise."),
       pAns("E.A.: O, R, U, X", ["O", "R", "U", "X"], { size: SZ.FICHE }),
       pAns("E.A.: the name is spelt correctly, letter by letter.", ["letter by letter"], { size: SZ.FICHE })],
      "Individual work", "Notebook, slate"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}

function lesson() {
  return [
    p([run("LESSON — UNIT 2", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("THE ALPHABET"),
    sub("1. The English alphabet"),
    pr([run("The English "), ...kw("alphabet", "alfabèt"), run(" has "),
        ...kw("twenty-six (26) letters", "touènti-siks lèteuz"), run(".")]),
    pr([run("Each letter has a "), ...kw("big form", "big fôm"), run(" and a "),
        ...kw("small form", "smôl fôm"), run(". Example: A – a ; B – b.")], { after: 100 }),
    img("alphabet_chart.png", 300, 1365 / 768),
    sub("2. The letters A to M"),
    letterGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]),
    p("", { after: 100 }),
    sub("3. The letters N to Z"),
    letterGrid(["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]),
    p("", { after: 100 }),
    sub("4. The Alphabet Song"),
    pr([run("We sing all the letters with the "), ...kw("Alphabet Song", "alfabèt sông"), run(":")]),
    p([run("A B C D E F G", { italic: true })], { center: true, after: 40 }),
    p([run("H I J K L M N O P", { italic: true })], { center: true, after: 40 }),
    p([run("Q R S T U V", { italic: true })], { center: true, after: 40 }),
    p([run("W X Y and Z", { italic: true })], { center: true, after: 40 }),
    p([run("Now I know my ABC", { italic: true })], { center: true, after: 40 }),
    p([run("Next time won’t you sing with me?", { italic: true })], { center: true, after: 80 }),
    pr([run("In the song, we say Z "), run("[zi]", { italic: true, color: C.GRAY }),
        run(" — it rhymes with “me”.")], { after: 120 }),
    sub("5. I spell my name"),
    pr([run("To "), ...kw("spell", "spèl"), run(" a name, we say it letter by letter:")]),
    p("— What’s your name?"),
    p("— My name is Mino."),
    pr([run("— "), ...kw("How do you spell it?", "haou dou iou spèl it")]),
    p([run("— M-I-N-O.", { bold: true })], { after: 140 }),
    audioBox([
      { qr: "qr_u2_alphabet.png", label: "The alphabet — listen and repeat", url: AUDIO.alphabet },
      { qr: "qr_u2_alphabet_song.png", label: "The Alphabet Song — words (spoken)", url: AUDIO.song },
    ], COLOR),
    p("", { after: 100 }),
    sub("6. I write the letters"),
    p("Trace the letters with your pencil:"),
    img("tracing_abcde.png", 380, 793 / 1408),
  ];
}

function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (6 points). ", { bold: true }), run("Write the missing letters:")]),
    p("A, B, __, D, __, F, G, __, I, J, __, L, M, N, __, P, Q, __, S, T, __, V, W, __, Y, Z", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Match the big letter to the small letter:")]),
    p([run("B   E   R   W", { bold: true, size: 32 })], { center: true, after: 40 }),
    p([run("r   w   b   e", { size: 32 })], { center: true, after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Circle the letter that comes after:")]),
    p("1. after C  →  B  /  D  /  E"),
    p("2. after F  →  G  /  E  /  H"),
    p("3. after M  →  L  /  N  /  O"),
    p("4. after V  →  U  /  W  /  X", { after: 120 }),
    pr([run("Exercise 4 (6 points). ", { bold: true }), run("Complete the Alphabet Song:")]),
    p("A, B, C, D, E, F, __"),
    p("H, I, J, K, L, M, N, O, __"),
    p("Q, R, S, T, U, __"),
    p("W, X, Y and __"),
    p("Now I know my __ __ __"),
    p("Next time won’t you __ with me?", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: C, E, H, K, O, R, U, X", ["C", "E", "H", "K", "O", "R", "U", "X"]),
    pAns("Exercise 2: B–b ; E–e ; R–r ; W–w", ["B–b", "E–e", "R–r", "W–w"]),
    pAns("Exercise 3: 1. D  2. G  3. N  4. W", ["D", "G", "N", "W"]),
    pAns("Exercise 4: G ; P ; V ; Z ; A B C ; sing", ["G", "P", "V", "Z", "A B C", "sing"]),
  ];
}

function revision() {
  return [
    B.bookmarkTitle("s11", "SESSION 11 / 57", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: THE ALPHABET", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember: the English alphabet has 26 letters.", { after: 100 }),
    letterGrid(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"]),
    letterGrid(["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. How many letters are in the English alphabet?"),
    pAns("E.A.: Twenty-six (26).", ["Twenty-six (26)."]),
    p("2. Say the letters from A to M."),
    pAns("E.A.: A, B, C, D, E, F, G, H, I, J, K, L, M.", ["A, B, C, D, E, F, G, H, I, J, K, L, M."]),
    p("3. Say the letters from N to Z."),
    pAns("E.A.: N, O, P, Q, R, S, T, U, V, W, X, Y, Z.", ["N, O, P, Q, R, S, T, U, V, W, X, Y, Z."]),
    p("4. Sing the Alphabet Song."),
    pAns("E.A.: the letters are sung in the right order.", ["right order"]),
    p("5. Spell your name."),
    pAns("E.A.: the name is spelt correctly, letter by letter (S-O-A…).", ["letter by letter"]),
  ];
}

function testPaper() {
  return [
    B.bookmarkTitle("s12", "SESSION 12 / 57", { bold: true, size: 28, after: 60 }),
    p([run("T4 TEST PAPER — UNIT 2: THE ALPHABET", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (8 points). ", { bold: true }), run("Write the missing letters:")]),
    p("A, __, C, D, __, F, G, H, __, J, K, __, M,"),
    p("N, O, __, Q, R, __, T, U, __, W, X, __, Z", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Circle the letter that comes after:")]),
    p("1. after D  →  C  /  E  /  F"),
    p("2. after H  →  I  /  G  /  J"),
    p("3. after P  →  O  /  Q  /  R"),
    p("4. after X  →  W  /  Y  /  Z", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Match the big letter to the small letter:")]),
    p([run("D   G   Q   Y", { bold: true, size: 32 })], { center: true, after: 40 }),
    p([run("q   y   d   g", { size: 32 })], { center: true, after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Say with your teacher: sing the Alphabet Song and spell your name.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: B, E, I, L, P, S, V, Y (1 point each)", ["B", "E", "I", "L", "P", "S", "V", "Y"]),
    pAns("Exercise 2: 1. E  2. I  3. Q  4. Y (1 point each)", ["E", "I", "Q", "Y"]),
    pAns("Exercise 3: D–d ; G–g ; Q–q ; Y–y (1 point each)", ["D–d", "G–g", "Q–q", "Y–y"]),
    pAns("Exercise 4: the song is sung in the right order (2 points); the name is spelt letter by letter (2 points)",
      ["right order", "letter by letter"]),
  ];
}

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(),
    ...ficheS2(), pageBreak(),
    ...lesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can say the letters A to M.",
      "I can say the letters N to Z.",
      "I can say all the alphabet, from A to Z.",
      "I can sing the Alphabet Song.",
      "I can spell my name.",
      "I can write the letters A, B, C, D, E.",
    ], "Well done! See you in Unit 3: NUMBERS!"),
  ];
};
module.exports.COLOR = COLOR;
