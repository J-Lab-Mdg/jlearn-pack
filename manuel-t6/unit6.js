// T6 — UNIT 6 — PEOPLE’S APPEARANCE (12 séances + révision + test) — Sessions 53 à 66 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "2E74B5"; // bleu
const SHADE = "DEEAF6";
const TOTAL = 74;
const AUDIO = {
  body: "https://drive.google.com/uc?export=download&id=192y9VTYrqh2dPyAP0eBMjvhSxuSH1e6f",
  anna: "https://drive.google.com/uc?export=download&id=1oEQH92tPpVeORpNm8yosVkVZAQ0Gi9Z7",
  clothes: "https://drive.google.com/uc?export=download&id=1v0NTUY2OrAkBVeuyLl6-oM1skGRB1nNW",
  emma: "https://drive.google.com/uc?export=download&id=1QdkQbOZelTtTsGYYdf0lVcTqxuSJ4Bd1",
};
const bullet = (runs, o = {}) => pr(
  [run("\u2022  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });

const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — PEOPLE’S APPEARANCE", title, slo,
  values: "humility, tolerance", session, materials,
});

const BODY1 = [
  ["head", "hède"], ["hair", "hèr"], ["face", "féiss"],
  ["cheeks", "tchiks"], ["chin", "tchine"], ["neck", "nèk"],
];
const BODY2 = [
  ["chest", "tchèste"], ["back", "bak"], ["belly", "bèli"],
  ["arms", "ârmz"], ["hands", "hanndz"], ["fingers", "finngueurz"],
  ["nails", "néilz"], ["thighs", "saïz"], ["legs", "lègz"],
];
const SENSES = [
  ["I see with my eyes.", "aï si"], ["I hear with my ears.", "aï hir"], ["I smell with my nose.", "aï smèl"],
  ["I taste with my tongue.", "aï téiste"], ["I touch with my hands.", "aï teutch"],
];
const CLOTHES = [
  ["a scarf", "e skârf"], ["a cap", "e kap"], ["a pullover", "e poulôouveur"],
  ["shorts", "chôrts"], ["a belt", "e bèlte"], ["a blouse", "e blaouz"],
  ["socks", "soks"], ["flip flops", "flipe flops"], ["glasses", "glâssiz"],
  ["trousers", "traouzeurz"], ["a sweater", "e souèteur"], ["a hat", "e hate"],
];
const ADJ = [
  ["tall ↔ short", "tôl / chôrte"], ["thin ↔ fat", "sine / fate"], ["long ↔ short hair", "lonng / chôrte hèr"],
  ["beautiful / pretty", "bioutifoul / priti"], ["handsome", "hanndseum"], ["plain / ugly", "pléine / eugli"],
];
function grid(items, perRow, size = 26) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function annaBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("“THIS IS ANNA” (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("This is Anna. She is wearing a red t-shirt and blue jeans. Anna has a green jacket because it is a little cold today."),
        L("On her feet, she is wearing white sneakers. Anna also has a blue scarf around her neck."),
        L("She is carrying a black bag and wearing a yellow hat. Anna looks happy and ready for a nice day outside!"),
      ])] }),
    ],
  });
}
function simonBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { center: true, after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("SIMON SAYS!  — the game of commands", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("Simon says: touch your nose! → we touch our nose."),
        L("Simon says: clap your hands! → we clap our hands."),
        L("Simon says: close your eyes! → we close our eyes."),
        L("Raise your hand! → careful! Simon didn’t say it — don’t move!"),
      ])] }),
    ],
  });
}
function grammarBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("PRESENT SIMPLE or PRESENT CONTINUOUS?", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("ALWAYS TRUE (permanent facts) → present simple: In the UK, people often wear sunglasses. I wear a uniform every day."),
        L("NOW, at the moment of speaking → present continuous: Today, Emma is wearing a scarf. Look! She is wearing a red cap."),
        L("The little clue words: often, every day → simple.  Now, today, look! → continuous."),
      ])] }),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 6 — PEOPLE’S APPEARANCE", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("What does she look like?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_body.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the parts of the body and act commands (Simon says!);"),
    p("• say the five senses: I see, I hear, I smell, I taste, I touch;"),
    p("• name the clothes: hat, scarf, sweater, trousers…;"),
    p("• describe a person: What does he/she look like? She is tall. She is wearing…;"),
    p("• use the present continuous — and compare it with the present simple;"),
    p("• read and write descriptions of people.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("humility, tolerance.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: SHADE })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned some body parts (head, eyes, nose, mouth, ears) and some clothes."),
          p("This year: the WHOLE body, the five senses, many clothes — and “She is wearing…”!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u6_body.png", label: "The body, Simon says and the five senses — listen", url: AUDIO.body }], COLOR),
  ];
}

// ---------- S53 — Body parts 1 ----------
function ficheS53() {
  const meta = META("The body parts (1): the head",
    "By the end of the lesson, learners will be able to name the parts of the head and neck: head, hair, face, cheeks, chin, neck, teeth.",
    "1 / 12", "body chart, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(T5 and Unit 5.) Answer these questions:"),
       fp("1. Point and name: eyes, nose, mouth, ears (T5!)."),
       fp("2. Plural of “tooth” and “foot”."),
       fp("3. This or these? (I point to my two hands.)")],
      [fp("Point. Name. Answer."),
       fp("E.A.: the T5 words are remembered; teeth, feet; these.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the body chart (the boy with the empty circles!). Write in the copy-book the names you already know.")],
      [fp("Write the names of body parts from the picture.")], "Using pictures", "Body chart"),
    stepRow(["2. Presentation"],
      [fp("Today we start the journey on the body — from the top! By the end of this lesson, you will name everything on your head.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and touch: head, hair, face, cheeks, chin, neck — and in the mouth: the teeth (one tooth, two teeth — our irregular plural!).")],
      [fp("Listen. Touch the part named.")],
      "Listen and do", "Body chart, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: each word — the class, one row, one pupil. Careful: cheeks [tchiks], chin [tchine]!"),
       fp("I touch a part: name it! I say a word: touch it!")],
      [fp("Repeat. Name. Touch."),
       fp("E.A.: the seven words are pronounced correctly.")],
      "Repetition drill", "Body chart"),
    stepRow(["5. Synthesis"],
      [fp("So, on the head: hair, face, cheeks, chin — and the neck carries everything!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speed game in pairs: one says a word, the other touches — faster and faster!"),
       fp("Label three circles of the body chart in the copy-book.")],
      [fp("Play. Label."),
       pAns("E.A.: the parts are touched and labelled correctly.",
        ["labelled"], { size: SZ.FICHE })],
      "Game / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name five parts of the head."),
       fp("2. Touch your chin! Touch your cheeks!"),
       fp("3. One tooth, two …?")],
      [fp("Name. Act. Answer."),
       pAns("E.A.: hair, face, cheeks, chin, neck; the actions are correct; teeth.",
        ["teeth"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}

// ---------- S54 — Body parts 2 + bingo ----------
function ficheS54() {
  const meta = META("The body parts (2): trunk and limbs",
    "By the end of the lesson, learners will be able to name the parts of the trunk and the limbs, and play body bingo.",
    "2 / 12", "body chart, bingo cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the parts of the head."),
       fp("2. Spell “neck”."),
       fp("3. Touch what I say: hair! chin!")],
      [fp("Name. Spell. Act."),
       fp("E.A.: head, hair, face…; N-E-C-K; the actions are correct.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Stand up! Shake your arms… your legs… Now, what are the English names of all that? Let’s see!")],
      [fp("Move. Guess.")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, the rest of the body: the trunk and the limbs. By the end of this lesson, you will win at body bingo!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and touch — the trunk: chest, back, belly. The limbs: arms, hands, fingers, nails; thighs, legs, feet (one foot, two feet!).")],
      [fp("Listen. Touch the part named.")],
      "Listen and do", "Body chart, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill with gestures. Careful: thighs [saïz]!"),
       fp("Sort on the board: parts of the trunk / parts of the limbs.")],
      [fp("Repeat. Sort the words."),
       fp("E.A.: trunk: chest, back, belly — limbs: arms, hands, fingers, nails, thighs, legs, feet.")],
      "Repetition drill / Classifying", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So the body: the head, the trunk (chest, back, belly) and the limbs (arms and legs family)!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("BINGO (from the syllabus): each pupil draws a card of six body parts. I call the words — tick the pictures! A straight line? Shout “Bingo!” and win!")],
      [fp("Listen and tick the pictures. Shout Bingo!"),
       pAns("E.A.: the words are recognised; the first line shouts Bingo!",
        ["Bingo!"], { size: SZ.FICHE })],
      "Game (bingo)", "Bingo cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name three parts of the trunk."),
       fp("2. Name the parts of the arm (hand, fingers, nails)."),
       fp("3. One foot, two …?")],
      [fp("Name. Answer."),
       pAns("E.A.: chest, back, belly; hand, fingers, nails; feet.",
        ["chest, back, belly"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}

// ---------- S55 — Simon says / imperatives ----------
function ficheS55() {
  const meta = META("Simon says! — the imperatives",
    "By the end of the lesson, learners will be able to act according to commands related to body parts and give commands with the imperative.",
    "3 / 12", "audio (QR code), space to move");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name six body parts."),
       fp("2. Trunk or limb: the belly? the leg?"),
       fp("3. Touch your back!")],
      [fp("Name. Answer. Act."),
       fp("E.A.: the words are correct; trunk; limb; the action is done.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I mime the verbs — guess them: look! hear! smell! touch! run! clap!")],
      [fp("Identify the meaning of the verbs from the miming.")], "Miming and using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we play the famous game “Simon says”. By the end of this lesson, you will give commands in English like a captain!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Play “Simon says” (from the syllabus), with the audio then with me: Simon says: touch your nose!… If Simon doesn’t say it — don’t move!")],
      [fp("Play the game. Act according to the commands.")],
      "Game", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the structure of the imperative from the game: verb first, no subject! Touch your nose. Close your eyes. Clap your hands. And the negative: Don’t move!")],
      [fp("Draw the rule from the game."),
       fp("E.A.: command = verb + …; negative = Don’t + verb.")],
      "Induction", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, to command: Touch! Look! Run! — and to forbid: Don’t touch! The imperative is the captain’s tense!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pupils become Simon! In groups of six, each one gives two commands with body parts."),
       fp("Faster and faster — the winners are the pupils who never make a mistake!")],
      [fp("Give commands. Act."),
       pAns("E.A.: Simon says: touch your thighs! Don’t close your eyes!",
        ["Simon says"], { size: SZ.FICHE })],
      "Game / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three commands with body parts."),
       fp("2. Act my commands (touch, clap, smile…)."),
       fp("3. Forbid: “move” → ?")],
      [fp("Command. Act. Answer."),
       pAns("E.A.: Touch your head!…; the actions are correct; Don’t move!",
        ["Don’t move!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}

// ---------- S56 — Five senses ----------
function ficheS56() {
  const meta = META("The five senses",
    "By the end of the lesson, learners will be able to say the five senses and the verbs related to them (see, hear, smell, taste, touch).",
    "4 / 12", "realia (a flower, a bell, a lemon…), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two commands (Simon says!)."),
       fp("2. The negative command of “open your eyes”."),
       fp("3. Name four body parts.")],
      [fp("Command. Answer."),
       fp("E.A.: Touch…! Clap…!; Don’t open your eyes!; the words are correct.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes! (I ring something / I bring a flower.) What did your body just do? Which part worked?")],
      [fp("Act. Answer.")], "Using realia", "A bell, a flower"),
    stepRow(["2. Presentation"],
      [fp("Today, the five superpowers of the body: the five senses! By the end of this lesson, you will say them all.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning from my gestures (from the syllabus): I SEE with my eyes. I HEAR with my ears. I SMELL with my nose. I TASTE with my tongue. I TOUCH with my hands.")],
      [fp("Observe the gestures. Draw the meaning.")],
      "Miming and using gestures", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: the five sentences, with the gestures."),
       fp("Match: the sense ↔ the body part (see ↔ eyes, hear ↔ ears…).")],
      [fp("Repeat. Match."),
       fp("E.A.: the five pairs are correct.")],
      "Repetition drill / Matching", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: five senses, five body parts, five verbs — the body is a wonderful machine!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Sense quiz: I show or do something — say the sense! (a flower → I smell it with my nose!)"),
       fp("In pairs: one names a body part, the other says its sense sentence.")],
      [fp("Play. Say the sentences."),
       pAns("E.A.: a lemon → I taste it with my tongue! the bell → I hear it with my ears!",
        ["with my tongue!"], { size: SZ.FICHE })],
      "Game / In pairs", "Realia"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say the five senses with their body parts."),
       fp("2. Which sense for music? for a mango on the tongue?"),
       fp("3. Complete: I …… with my nose.")],
      [fp("Say. Answer. Complete."),
       pAns("E.A.: the five sentences; I hear; I taste; smell.",
        ["smell"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(56, TOTAL, meta, rows, "s56");
}

// ---------- S57 — Listening Anna ----------
function ficheS57() {
  const meta = META("Listening: “This is Anna”",
    "By the end of the lesson, learners will be able to get the gist and detailed information from an oral passage describing a person’s clothes.",
    "5 / 12", "audio (QR code), picture of Anna");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say three sense sentences."),
       fp("2. Simon says: touch your chin!"),
       fp("3. Name the clothes you already know (T5).")],
      [fp("Answer. Act. Name."),
       fp("E.A.: I see…; the action is done; shirt, shoes, hat…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: listen and point to the body parts: neck! feet! head! — Ready? Now a girl will show us her clothes on those parts…")],
      [fp("Listen and point to body parts.")], "Listen and do", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to the description of Anna. By the end of this lesson, you will know everything she is wearing!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to “This is Anna” twice."),
       fp("The gist: what is the passage about? The details: What is she wearing on her body? on her feet? around her neck? on her head? Why does she have a jacket? What is she carrying?")],
      [fp("Listen. Answer the gist and detail questions."),
       fp("E.A.: Anna’s clothes; a red t-shirt and blue jeans; white sneakers; a blue scarf; a yellow hat; because it is a little cold; a black bag.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Observe the magic sentence of the passage: “She IS WEARING a red t-shirt.” It is happening NOW! We will study this “-ing” soon."),
       fp("Collect the clothes words of the passage on the board: t-shirt, jeans, jacket, sneakers, scarf, hat, bag.")],
      [fp("Observe. Collect the words."),
       fp("E.A.: the clothes of the passage are listed.")],
      "Observation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, to describe someone: This is Anna. She is wearing… She looks happy!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Memory game in pairs: book closed, tell everything Anna is wearing — who remembers the most?")],
      [fp("Tell from memory."),
       pAns("E.A.: She is wearing a red t-shirt, blue jeans, a green jacket…",
        ["red t-shirt"], { size: SZ.FICHE })],
      "Memory game / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the passage about?"),
       fp("2. Three detail questions (feet? neck? head?)."),
       fp("3. Say one sentence like the passage about a classmate.")],
      [fp("Answer. Say."),
       pAns("E.A.: Anna’s clothes; sneakers, a scarf, a hat; He is wearing a blue shirt.",
        ["sneakers"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(57, TOTAL, meta, rows, "s57");
}

// ---------- S58 — Clothes ----------
function ficheS58() {
  const meta = META("The clothes",
    "By the end of the lesson, learners will be able to name the clothes and use the verbs to wear, to put on, to take off.",
    "6 / 12", "real clothes or pictures, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is Anna wearing on her head?"),
       fp("2. Why does she have a jacket?"),
       fp("3. Name three clothes of the passage.")],
      [fp("Answer."),
       fp("E.A.: a yellow hat; it is a little cold; t-shirt, jeans, scarf…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The magic bag! I pull clothes (or pictures) out of a bag — shout the names you know!")],
      [fp("Name what they know.")], "Using realia", "Clothes or pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to expand our clothes vocabulary. By the end of this lesson, you will dress anyone — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and point (from the syllabus): a scarf, a cap, a pullover, shorts, a belt, a blouse, socks, flip flops, glasses, trousers, a sweater — and our old friends: hat, shirt, skirt, shoes, gloves."),
       fp("Match each item with its body part: socks → feet, gloves → hands, belt → …!")],
      [fp("Listen. Point. Match with the body parts.")],
      "Using pictures / Matching", "Pictures, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the meaning of the verbs with my miming: to WEAR (it is on me), to PUT ON (it goes on!), to TAKE OFF (it goes away!)."),
       fp("Repetition drill: I put on my sweater. I take off my hat. I wear a uniform.")],
      [fp("Draw the meaning. Repeat."),
       fp("E.A.: the three verbs are understood and used.")],
      "Miming / Repetition drill", "Real clothes"),
    stepRow(["5. Synthesis"],
      [fp("So, many clothes for many body parts — and three verbs: wear, put on, take off!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Command game: Put on the cap! Take off the glasses! (with the real objects)"),
       fp("In pairs: say two things you wear at school and one thing you never wear.")],
      [fp("Act. Say their sentences."),
       pAns("E.A.: I wear a shirt and shoes. I never wear gloves!",
        ["never wear"], { size: SZ.FICHE })],
      "Game / In pairs", "Real clothes"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name six clothes from the pictures."),
       fp("2. Which clothes for the feet? for the hands?"),
       fp("3. Complete: In the morning I …… on my clothes; at night I take them …… .")],
      [fp("Name. Answer. Complete."),
       pAns("E.A.: the six words; socks, shoes, flip flops; gloves; put; off.",
        ["put; off"], { size: SZ.FICHE })],
      "Individual work", "Pictures"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58");
}

// ---------- S59 — Present continuous ----------
function ficheS59() {
  const meta = META("She is wearing… — the present continuous",
    "By the end of the lesson, learners will be able to use the present continuous to say what is happening at the moment of speaking.",
    "7 / 12", "the passage “This is Anna”, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name eight clothes."),
       fp("2. Put on / take off: mime and say!"),
       fp("3. What is Anna carrying?")],
      [fp("Name. Mime. Answer."),
       fp("E.A.: the words are correct; the mimes are right; a black bag.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look! (I walk.) I am walking! (I write.) I am writing! What am I doing NOW?")],
      [fp("Observe. Answer.")], "Using gesture", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, the tense of NOW: the present continuous. By the end of this lesson, you will say what anyone is doing or wearing at this very moment!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Find the “-ing” sentences in Anna’s passage: She is wearing… She is carrying… — and mine: I am walking. What do we see before and after the verb?")],
      [fp("Find the sentences. Observe.")],
      "Observation", "The passage"),
    stepRow(["4. Analysis"],
      [fp("Draw the form: am / is / are + verb-ing. I am wearing. She is wearing. They are wearing."),
       fp("The question: What is she wearing? The negative: He is not wearing a hat."),
       fp("The use: it is happening NOW, at the moment of speaking!")],
      [fp("Draw the form and the use. Repeat the examples."),
       fp("E.A.: am/is/are + -ing; now.")],
      "Induction / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to say NOW → am/is/are + verb-ing. Listen to the audio and repeat the examples!")],
      [fp("Listen (QR code). Repeat.")], "Audio", "Audio (QR code)"),
    stepRow(["6. Practice"],
      [fp("Mime game: one pupil mimes (eating, running, putting on a hat…) — the class says: You are eating! He is running!"),
       fp("Describe NOW: what is your neighbour wearing today?")],
      [fp("Mime. Say the sentences."),
       pAns("E.A.: She is running! He is wearing a green shirt today.",
        ["is wearing"], { size: SZ.FICHE })],
      "Game / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What are you wearing today? (full sentence)"),
       fp("2. Transform: “He wears a cap” → NOW."),
       fp("3. Question: what / she / wear …?")],
      [fp("Answer. Transform. Ask."),
       pAns("E.A.: I am wearing…; He is wearing a cap; What is she wearing?",
        ["What is she wearing?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(59, TOTAL, meta, rows, "s59");
}

// ---------- S60 — Adjectives + describe & guess ----------
function ficheS60() {
  const meta = META("What does he look like? — the adjectives",
    "By the end of the lesson, learners will be able to describe a person with adjectives and play the guessing game.",
    "8 / 12", "pictures of people, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is your neighbour wearing? (present continuous!)"),
       fp("2. am, is or are? “They …… running.”"),
       fp("3. Name four clothes.")],
      [fp("Answer."),
       fp("E.A.: He/She is wearing…; are; the words are correct.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at these two pictures: a very tall man, a very short man. Same or different? Today, the describing words!")],
      [fp("Compare the pictures.")], "Using pictures", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to describe people: the question is “What does he/she look like?”. By the end of this lesson, your friends will guess anyone from your description!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pairs of opposites with the pictures: tall ↔ short, thin ↔ fat, long hair ↔ short hair — and the beauty words: beautiful, pretty, handsome (for a boy!), plain, ugly.")],
      [fp("Observe. Repeat the pairs.")],
      "Using pictures", "Pictures of people"),
    stepRow(["4. Analysis"],
      [fp("Build the description plan: 1. He/She is tall/short… 2. He/She has long/short hair. 3. He/She is wearing… "),
       fp("A word about values: every body is different — we describe with RESPECT, never to hurt (humility, tolerance!).")],
      [fp("Repeat the models. Discuss the value."),
       fp("E.A.: She is tall. She has short hair. She is wearing a red dress.")],
      "Modelling / Discussion", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: What does he look like? → He is…, He has…, He is wearing… — always with kind words!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guessing game (from the syllabus): describe a student of the class — the others guess who he or she is!")],
      [fp("Describe. Guess."),
       pAns("E.A.: He is tall. He has short hair. He is wearing a blue sweater. — It’s Naina!",
        ["It’s Naina!"], { size: SZ.FICHE })],
      "Guessing game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three pairs of opposite adjectives."),
       fp("2. Describe the person on my picture (three sentences)."),
       fp("3. The kind word for a boy: beautiful or handsome?")],
      [fp("Answer. Describe."),
       pAns("E.A.: tall/short…; She is thin, she has long hair, she is wearing…; handsome.",
        ["handsome"], { size: SZ.FICHE })],
      "Individual work", "Picture"),
  ];
  return fiche(60, TOTAL, meta, rows, "s60");
}

// ---------- S61 — Traditional clothing ----------
function ficheS61() {
  const meta = META("Traditional clothing here and there",
    "By the end of the lesson, learners will be able to talk about Malagasy traditional clothing and some traditional clothes of Anglophone countries.",
    "9 / 12", "pictures: lamba, kilt, cowboy hat…");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Describe your neighbour (three sentences)."),
       fp("2. Opposite of “tall”? of “thin”?"),
       fp("3. What are you wearing today?")],
      [fp("Answer. Describe."),
       fp("E.A.: He is…, he has…, he is wearing…; short; fat; I am wearing…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Picture time! A man with a skirt?! (the Scottish kilt) — is it strange? In Scotland it is very elegant! Today: the traditional clothes.")],
      [fp("React to the picture.")], "Using pictures", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we travel again: the traditional ways of clothing in Madagascar and in the Anglophone countries.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Madagascar first (from the syllabus): the lamba over the shoulders, the lambahoany with its proverbs, the malabary shirt, the satroka (the hat!)."),
       fp("How do we SAY it in English? The lamba is a traditional Malagasy cloth. We wear it over the shoulders.")],
      [fp("Name the Malagasy clothes. Say the sentences.")],
      "Contextualisation", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("Now the Anglophone world: the kilt in Scotland, the cowboy hat and boots in the USA, the top hat in old England, the rugby jersey in New Zealand…"),
       fp("Compare: what do they have in common with our clothes? (they tell who we are!)")],
      [fp("Repeat the names. Compare."),
       fp("E.A.: traditional clothes show the culture; every country is proud of them.")],
      "Contextualisation / Discussion", "Pictures"),
    stepRow(["5. Synthesis"],
      [fp("So: every people has its traditional clothes — different, and all beautiful. Tolerance!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Role play: a Malagasy child presents the lamba to an English friend; the friend presents the kilt (two sentences each)!")],
      [fp("Present in pairs."),
       pAns("E.A.: This is our lamba. We wear it over the shoulders. — This is the kilt. Men wear it in Scotland!",
        ["kilt"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two Malagasy traditional clothes, in an English sentence."),
       fp("2. Name two traditional clothes of Anglophone countries."),
       fp("3. One idea: why are traditional clothes important?")],
      [fp("Answer."),
       pAns("E.A.: the lamba, the malabary; the kilt, the cowboy hat; they show our culture.",
        ["the kilt"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61");
}

// ---------- S62 — Reading Emma ----------
function ficheS62() {
  const meta = META("Reading: “Emma and her friends at the park”",
    "By the end of the lesson, learners will be able to read a text about people’s appearance and get its gist and explicit information.",
    "10 / 12", "the reading text, command papers, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name a traditional cloth of Madagascar and one of Scotland."),
       fp("2. What is your friend wearing now?"),
       fp("3. Spell “scarf”.")],
      [fp("Answer. Spell."),
       fp("E.A.: the lamba, the kilt; He/She is wearing…; S-C-A-R-F.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading — READ AND ACT (from the syllabus): each pupil picks a paper (Close your eyes / Touch your nose / Raise your hand / Smile / Clap your hands…), reads it silently and DOES it. The class guesses what is written! Then the pupil reads it aloud.")],
      [fp("Pick a paper. Read silently. Act. Guess. Read aloud.")], "Game (read and act)", "Command papers"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read about Emma and her friends, in a park in England. By the end of this lesson, you will know what everyone is wearing!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read the text silently, then listen to the audio; then read aloud with the right intonation, one sentence per pupil.")],
      [fp("Read silently. Listen. Read aloud.")],
      "Reading / Audio", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The gist: what is the text about? The details: What is the weather like? What is Emma wearing to stay warm? What is Betty wearing? And Sarah? Why do people in the UK often wear sunglasses?"),
       fp("Vocabulary questions: to protect, stylish, comfortable.")],
      [fp("Answer."),
       fp("E.A.: friends and their clothes at the park; a scarf and a pullover; a yellow blouse and light blue trousers; a sweater and shorts; even on cool days, the sun is there!")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, the text describes three friends with everything we learned: clothes, colours — and “she is wearing”!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Post-reading: close the book! Each pair writes what one girl is wearing, from memory — then checks in the text.")],
      [fp("Write from memory. Check."),
       pAns("E.A.: Betty is wearing a yellow blouse, light blue trousers, sunglasses and flip flops.",
        ["yellow blouse"], { size: SZ.FICHE })],
      "Memory game / In pairs", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the text about?"),
       fp("2. Two detail questions (Emma’s cap? Sarah’s clothes?)."),
       fp("3. Read three sentences aloud.")],
      [fp("Answer. Read."),
       pAns("E.A.: three friends at the park; a red cap; a sweater and shorts; fluent reading.",
        ["a red cap"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62");
}

// ---------- S63 — Simple vs continuous ----------
function ficheS63() {
  const meta = META("Present simple or present continuous?",
    "By the end of the lesson, learners will be able to distinguish the present simple (permanent facts) from the present continuous (happening now), and compare English and Malagasy clothing styles.",
    "11 / 12", "the reading text, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is Emma wearing at the park?"),
       fp("2. Why do people in the UK often wear sunglasses?"),
       fp("3. Read two sentences of the text.")],
      [fp("Answer. Read."),
       fp("E.A.: a scarf, a pullover, a red cap…; even on cool days; fluent reading.")],
      "Individual work", "Text"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Two sentences from the text on the board: “Emma IS WEARING a scarf.” / “People often WEAR sunglasses.” Same verb — different clothes! Why?")],
      [fp("Observe. Guess.")], "Observation", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today, the grammar duel: present simple against present continuous! By the end of this lesson, you will always choose the right one.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Sort the sentences of the text in two columns: NOW at the park (is wearing, are at the park…) / ALWAYS TRUE (people often wear…).")],
      [fp("Sort the sentences.")],
      "Classifying", "Text, blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the use and form: permanent facts, habits → present simple (often, every day). Happening at the moment of speaking → present continuous (now, today, look!)."),
       fp("Quick drill: every day I wear… / today I am wearing…")],
      [fp("Draw the rules. Repeat."),
       fp("E.A.: simple = always; continuous = now.")],
      "Induction / Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: often/every day → simple; now/today → continuous. And a culture minute (from the syllabus): compare the English styles of the text with our Malagasy styles — jeans and lamba can be friends!")],
      [fp("Listen. Compare the styles.")], "Discussion", "Pictures"),
    stepRow(["6. Practice"],
      [fp("Choose the right tense: 1. Look! Bema …… (run). 2. My father …… (wear) a hat every day. 3. Today I …… (wear) my new shirt. 4. We often …… (play) in the yard.")],
      [fp("Complete."),
       pAns("E.A.: is running; wears; am wearing; play.",
        ["is running"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Simple or continuous: “now”? “every day”?"),
       fp("2. One sentence with each tense."),
       fp("3. One difference between English and Malagasy clothing styles.")],
      [fp("Answer. Say."),
       pAns("E.A.: continuous; simple; I wear a uniform every day / I am wearing it now; personal ideas.",
        ["continuous; simple"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63");
}

// ---------- S64 — Writing famous person ----------
function ficheS64() {
  const meta = META("Writing: my favourite famous person",
    "By the end of the lesson, learners will be able to describe a famous person they admire in a few sentences and read their description aloud.",
    "12 / 12", "copy-books, pictures of famous people if possible");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Simple or continuous: “Look! She …… (dance)!”"),
       fp("2. Describe me (two sentences)."),
       fp("3. Spell “trousers”.")],
      [fp("Answer. Spell."),
       fp("E.A.: is dancing; You are tall, you are wearing…; T-R-O-U-S-E-R-S.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: think of a famous person you admire — a singer, a football player, a hero… Write his/her name and clothing style in the copy-book!")],
      [fp("Choose a famous person. Write the name and the style.")], "Personalisation technique", "Copy-books"),
    stepRow(["2. Presentation"],
      [fp("Today, your pen becomes a camera! By the end of this lesson, you will describe your favourite famous person in a few sentences.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe my model: “My favourite singer is … He is tall and thin. He has short hair. He often wears a white malabary. Today, on the poster, he is wearing a black jacket. He looks handsome!”")],
      [fp("Observe. Find: the adjectives, the simple, the continuous!")],
      "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: use your notes to describe your famous person in four to six sentences: who he/she is — what he/she looks like — what he/she often wears (simple!) — what he/she is wearing on your favourite picture (continuous!).")],
      [fp("Write the description.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Check: the adjectives, has/is, wears/is wearing, capitals and periods — and a kind word at the end!")],
      [fp("Check.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-writing: read your description aloud for the class — without saying the name! Can we guess who it is?")],
      [fp("Read aloud. Guess."),
       pAns("E.A.: He is a football player. He is tall… — the class guesses!",
        ["the class guesses!"], { size: SZ.FICHE })],
      "Oral production / Guessing", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write four sentences about your famous person."),
       fp("2. One sentence with “often wears”, one with “is wearing”."),
       fp("3. Read your description.")],
      [fp("Write. Read."),
       pAns("E.A.: correct sentences with both tenses; the description is read aloud.",
        ["both tenses"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PEOPLE’S APPEARANCE"),
    sub("1. The body"),
    img("u6_body.png", 440, 768 / 1408),
    grid(BODY1, 3),
    p("", { after: 30 }),
    grid(BODY2, 3),
    p("", { after: 40 }),
    pr([run("The three parts: the "), ...kw("head", "hède"), run(", the "), ...kw("trunk", "treunnk"), run(" (chest, back, belly), the "), ...kw("limbs", "limz"), run(" (arms and legs).  Irregular: one foot → two "), ...kw("feet", "fite"), run(", one tooth → two "), ...kw("teeth", "tisse"), run("!")], { after: 100 }),
    sub("2. Simon says! — the imperative"),
    simonBox(),
    p("", { after: 40 }),
    pr([run("The command: ", { bold: true }), ...kw("Touch your nose!", "teutch iôr nôouz"), run("   The negative: "), ...kw("Don’t move!", "dôounte mouve")], { after: 100 }),
    sub("3. The five senses"),
    grid(SENSES.map(([a, b]) => [a, b]), 3, 22),
    p("", { after: 100 }),
    sub("4. This is Anna"),
    annaBox(),
    p("", { after: 100 }),
    sub("5. The clothes"),
    img("u6_clothes.png", 440, 768 / 1408),
    grid(CLOTHES, 3),
    p("", { after: 40 }),
    pr([run("The verbs: ", { bold: true }), ...kw("to wear", "tou ouèr"), run("   "), ...kw("to put on", "tou poute one"), run("   "), ...kw("to take off", "tou téik of")], { after: 100 }),
    sub("6. The present continuous — NOW!"),
    pr([run("am / is / are + verb-ing: ", { bold: true }), ...kw("She is wearing a red t-shirt.", "chi iz ouèrinng e rède ti-cheurte")]),
    pr([...kw("What are you wearing today?", "ouate âr iou ouèrinng toudéi"), run("  →  "), ...kw("I am wearing my school uniform.", "aï am ouèrinng maï skoul iounifôrm")], { after: 100 }),
    sub("7. What does he/she look like?"),
    grid(ADJ, 3, 22),
    p("", { after: 40 }),
    pr([run("The plan: ", { bold: true }), run("He/She is tall… + He/She has long hair… + He/She is wearing… — always with kind words!")], { after: 100 }),
    sub("8. Simple or continuous?"),
    grammarBox(),
    p("", { after: 100 }),
    sub("9. Traditional clothes here and there"),
    pr([run("Madagascar: the "), ...kw("lamba", ""), run(", the "), ...kw("lambahoany", ""), run(", the "), ...kw("malabary", ""), run(".  Anglophone world: the "), ...kw("kilt", "kilte"), run(" (Scotland), the "), ...kw("cowboy hat", "kaobôï hate"), run(" (USA).")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u6_body.png", label: "The body, Simon says, the five senses — listen and do", url: AUDIO.body },
      { qr: "qr_t6_u6_anna.png", label: "This is Anna — listen and repeat", url: AUDIO.anna },
      { qr: "qr_t6_u6_clothes.png", label: "The clothes and the present continuous — listen and say", url: AUDIO.clothes },
    ], COLOR),
  ];
}

// ---------- leçons du jour (une par fiche) ----------
function dayLesson(sessionNo, title, children) {
  return [
    p([run(`LESSON OF THE DAY — SESSION ${sessionNo}`, { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    ...children,
  ];
}
function lessonS53() {
  return dayLesson(53, "THE BODY PARTS (1): THE HEAD", [
    img("u6_body.png", 380, 768 / 1408),
    grid(BODY1, 3),
    p("", { after: 60 }),
    pr([run("On the face:", { bold: true })], { after: 30 }),
    bullet([...kw("eyes", "aïz"), run("  —  I see with them.")]),
    bullet([...kw("ears", "irz"), run("  —  I hear with them.")]),
    bullet([...kw("a nose", "e nôouz"), run("  and  "), ...kw("a mouth", "e maouss")]),
    bullet([...kw("teeth", "tisse"), run("  —  I brush them every day!")], { after: 60 }),
    bullet([run("My + body part: ", { bold: true }), run("my head, my hair, my cheeks — always with the little word!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS54() {
  return dayLesson(54, "THE BODY PARTS (2): TRUNK AND LIMBS", [
    grid(BODY2, 3),
    p("", { after: 60 }),
    pr([run("The three parts of the body:", { bold: true })], { after: 30 }),
    bullet([run("the "), ...kw("head", "hède"), run("  —  hair, face, cheeks, chin.")]),
    bullet([run("the "), ...kw("trunk", "treunnk"), run("  —  chest, back, belly.")]),
    bullet([run("the "), ...kw("limbs", "limz"), run("  —  arms, hands, fingers, legs, feet.")], { after: 60 }),
    pr([run("The traps:", { bold: true, color: C.RED })], { after: 30 }),
    bullet([run("one foot → two "), ...kw("feet", "fite"), run("  —  irregular plural!")]),
    bullet([run("one tooth → two "), ...kw("teeth", "tisse"), run("  —  irregular plural!")]),
  ]);
}
function lessonS55() {
  return dayLesson(55, "SIMON SAYS! — THE IMPERATIVES", [
    simonBox(),
    p("", { after: 60 }),
    pr([run("The commands:", { bold: true })], { after: 30 }),
    bullet([...kw("Touch your nose!", "teutch iôr nôouz"), run("   "), ...kw("Clap your hands!", "klap iôr hanndz")]),
    bullet([...kw("Stamp your feet!", "stammp iôr fite"), run("   "), ...kw("Shake your head!", "chéik iôr hède")], { after: 60 }),
    pr([run("The negative:", { bold: true })], { after: 30 }),
    bullet([...kw("Don’t move!", "dôounte mouve"), run("  —  "), run("Don’t + verb", { bold: true, color: C.BLUE }), run(", that’s all!")]),
    bullet([run("The game rule: I obey only when I hear “Simon says”!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS56() {
  return dayLesson(56, "THE FIVE SENSES", [
    img("u6_senses.png", 380, 768 / 1408),
    grid(SENSES.map(([a, b]) => [a, b]), 3, 22),
    p("", { after: 60 }),
    pr([run("The pattern:", { bold: true })], { after: 30 }),
    bullet([run("I + sense verb + with my + body part", { bold: true, color: C.BLUE })]),
    bullet([run("I see with my eyes. I hear with my ears.", { bold: true, color: C.BLUE })]),
    bullet([run("I smell with my nose. I taste with my tongue. I touch with my hands.", { bold: true, color: C.BLUE })]),
  ]);
}
function lessonS57() {
  return dayLesson(57, "LISTENING: “THIS IS ANNA”", [
    annaBox(),
    p("", { after: 60 }),
    pr([run("How to listen well:", { bold: true })], { after: 30 }),
    bullet([run("First listening: who is Anna?")]),
    bullet([run("Second listening: what is she like (tall? hair?)?")]),
    bullet([run("Third listening: what is she wearing?")], { after: 60 }),
    pr([run("I describe with two verbs:", { bold: true })], { after: 30 }),
    bullet([run("She is…", { bold: true, color: C.BLUE }), run(" tall, thin, pretty.")]),
    bullet([run("She has…", { bold: true, color: C.BLUE }), run(" long hair, brown eyes.")]),
  ]);
}
function lessonS58() {
  return dayLesson(58, "THE CLOTHES", [
    img("u6_clothes.png", 380, 768 / 1408),
    grid(CLOTHES, 3),
    p("", { after: 60 }),
    pr([run("The verbs of the clothes:", { bold: true })], { after: 30 }),
    bullet([...kw("to wear", "tou ouèr"), run("  —  I wear my uniform at school.")]),
    bullet([...kw("to put on", "tou poute one"), run("  —  in the morning, I put on my socks.")]),
    bullet([...kw("to take off", "tou téik of"), run("  —  in the evening, I take off my shoes.")], { after: 60 }),
    bullet([run("Careful: ", { bold: true, color: C.RED }), run("trousers, shorts, glasses, socks are always PLURAL — These are my trousers!")]),
  ]);
}
function lessonS59() {
  return dayLesson(59, "SHE IS WEARING… — THE PRESENT CONTINUOUS", [
    pr([run("The formula:", { bold: true })], { after: 30 }),
    bullet([run("am / is / are + verb-ing", { bold: true, color: C.BLUE }), run(" — for what happens NOW!")], { after: 60 }),
    pr([run("The examples:", { bold: true })], { after: 30 }),
    bullet([...kw("She is wearing a red t-shirt.", "chi iz ouèrinng e rède ti-cheurte")]),
    bullet([...kw("What are you wearing today?", "ouate âr iou ouèrinng toudéi"), run("  →  "), ...kw("I am wearing my school uniform.", "aï am ouèrinng maï skoul iounifôrm")]),
    bullet([run("Negative: "), run("He isn’t wearing a cap today.", { bold: true, color: C.BLUE })], { after: 60 }),
    pr([run("The -ing traps:", { bold: true, color: C.RED })], { after: 30 }),
    bullet([run("make → making (the e falls), run → running (double letter), lie → lying — see Annex 5!")]),
  ]);
}
function lessonS60() {
  return dayLesson(60, "WHAT DOES HE LOOK LIKE? — THE ADJECTIVES", [
    grid(ADJ, 3, 22),
    p("", { after: 60 }),
    pr([run("The question:", { bold: true })], { after: 30 }),
    bullet([...kw("What does she look like?", "ouate deuz chi louk laïk"), run("  →  "), ...kw("She is tall and pretty.", "chi iz tôl ande priti")], { after: 60 }),
    pr([run("The plan of a good description:", { bold: true })], { after: 30 }),
    bullet([run("He/She is…", { bold: true, color: C.BLUE }), run(" tall, thin, young.")]),
    bullet([run("He/She has…", { bold: true, color: C.BLUE }), run(" long hair, black eyes.")]),
    bullet([run("He/She is wearing…", { bold: true, color: C.BLUE }), run(" a blue blouse.")]),
    bullet([run("Always with kind words!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS61() {
  return dayLesson(61, "TRADITIONAL CLOTHING HERE AND THERE", [
    pr([run("Madagascar:", { bold: true })], { after: 30 }),
    bullet([run("the "), ...kw("lamba", ""), run(", the "), ...kw("lambahoany", ""), run(", the "), ...kw("malabary", ""), run(".")], { after: 60 }),
    pr([run("The Anglophone world:", { bold: true })], { after: 30 }),
    bullet([run("the "), ...kw("kilt", "kilte"), run("  —  Scotland.")]),
    bullet([run("the "), ...kw("cowboy hat", "kaobôï hate"), run("  —  the USA.")]),
    bullet([run("the "), ...kw("suit and tie", "soute annde taï"), run("  —  England.")], { after: 60 }),
    bullet([run("Every country dresses its history — we respect them all!", { italic: true, color: C.GRAY, size: 24 })]),
  ]);
}
function lessonS62() {
  return dayLesson(62, "READING DAY: “EMMA AND HER FRIENDS AT THE PARK”", [
    pr([run("The key words of the text:", { bold: true })], { after: 30 }),
    bullet([...kw("a park", "e pârk"), run("  —  the green place of the town")]),
    bullet([...kw("to play", "tou pléi"), run("  and  "), ...kw("a kite", "e kaïte")]),
    bullet([...kw("happy", "hapi"), run("  —  with a big smile!")], { after: 60 }),
    pr([run("How to read well:", { bold: true })], { after: 30 }),
    bullet([run("Find who is at the park.")]),
    bullet([run("Find what each friend IS WEARING (the -ing sentences!).")]),
    bullet([run("Read with a happy voice.")], { after: 60 }),
    audioBox([{ qr: "qr_t6_u6_emma.png", label: "Emma and her friends at the park — listen and read", url: AUDIO.emma }], COLOR),
  ]);
}
function lessonS63() {
  return dayLesson(63, "PRESENT SIMPLE OR PRESENT CONTINUOUS?", [
    grammarBox(),
    p("", { after: 60 }),
    pr([run("The two presents face to face:", { bold: true })], { after: 30 }),
    bullet([run("EVERY DAY → simple: ", { bold: true }), ...kw("I wear my uniform every day.", "aï ouèr maï iounifôrm èvri déi")]),
    bullet([run("NOW → continuous: ", { bold: true }), ...kw("Today I am wearing a pullover.", "toudéi aï am ouèrinng e poulôouveur")], { after: 60 }),
    pr([run("The clue words:", { bold: true })], { after: 30 }),
    bullet([run("every day, always, often", { bold: true, color: C.BLUE }), run("  →  simple.")]),
    bullet([run("now, today, look!", { bold: true, color: C.BLUE }), run("  →  continuous.")]),
    bullet([run("One more pair: "), run("She cooks every day. / She is cooking now!", { bold: true, color: C.BLUE })]),
  ]);
}
function lessonS64() {
  return dayLesson(64, "WRITING DAY: MY FAVOURITE FAMOUS PERSON", [
    pr([run("The plan of my paragraph:", { bold: true })], { after: 30 }),
    bullet([run("1. My favourite famous person is…")]),
    bullet([run("2. He/She is… (tall, thin…).")]),
    bullet([run("3. He/She has… (short hair…).")]),
    bullet([run("4. Today he/she is wearing…")]),
    bullet([run("5. I like him/her because…")], { after: 60 }),
    pr([run("The writing rules:", { bold: true })], { after: 30 }),
    bullet([run("Capital letter for the name.")]),
    bullet([run("Kind adjectives only — one -ing sentence at least!")], { after: 60 }),
    pr([run("Model:", { bold: true })], { after: 30 }),
    pr([run("My favourite famous person is a singer. She is tall and pretty. She has long black hair. Today she is wearing a beautiful lamba. I like her because she sings for the children.", { italic: true })]),
  ]);
}


// ---------- lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 50 });
  return [
    p([run("READING — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("EMMA AND HER FRIENDS AT THE PARK", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("It’s a cool but sunny day in England, and Emma and her friends are at the park."),
        L("Emma is wearing a scarf and a pullover to stay warm. She has a red cap on her head and sunglasses to protect herself from the sun."),
        L("Her friend Betty is wearing a yellow blouse and light blue trousers. She is wearing her favourite sunglasses and stylish flip-flops."),
        L("Sarah is wearing a sweater and shorts. She also has her sunglasses on. In the UK, people often wear sunglasses even on cool days."),
        L("Everyone looks comfortable and ready to enjoy the sunny weather!"),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("What is the weather like? What is Emma wearing to stay warm? What is Betty wearing? Why do people in the UK often wear sunglasses?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u6_emma.png", label: "Emma and her friends at the park — listen and read", url: AUDIO.emma }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Label the body chart: write eight body parts.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete the senses: 1. I …… with my eyes. 2. I …… with my ears. 3. I …… with my nose. 4. I …… with my tongue.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Name four clothes from the pictures and say the body part for each (socks → feet…).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Simple or continuous? 1. Look! She …… (dance). 2. I …… (wear) a uniform every day. 3. Today he …… (wear) a cap. 4. They often …… (play) here.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Describe a person of your family: two adjective sentences + one “is wearing” sentence.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: eight correct body parts (0.5 point each).", ["body parts"]),
    pAns("Exercise 2: see — hear — smell — taste (1 point each).", ["see — hear"]),
    pAns("Exercise 3: the clothes and their body parts are correct (1 point each).", ["correct"]),
    pAns("Exercise 4: is dancing — wear — is wearing — play (1 point each).", ["is dancing"]),
    pAns("Exercise 5: He is tall. He has short hair. He is wearing… (1 to 2 points each).", ["is wearing"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s65", "SESSION 65 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: PEOPLE’S APPEARANCE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the body and the clothes:", { after: 100 }),
    grid(BODY1, 3),
    p("", { after: 60 }),
    grid(CLOTHES.slice(0, 6), 3),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name ten body parts (head, trunk, limbs)."),
    pAns("E.A.: head, hair, cheeks, chin, neck, chest, back, belly, arms, legs…", ["belly"]),
    p("2. Give three commands, and one negative command."),
    pAns("E.A.: Touch your nose! Clap your hands! Don’t move!", ["Don’t move!"]),
    p("3. Say the five senses."),
    pAns("E.A.: I see, I hear, I smell, I taste, I touch.", ["I touch"]),
    p("4. What is Anna wearing? (three things)"),
    pAns("E.A.: a red t-shirt, blue jeans, a green jacket, white sneakers…", ["blue jeans"]),
    p("5. Name eight clothes."),
    pAns("E.A.: scarf, cap, pullover, shorts, belt, blouse, socks, trousers…", ["pullover"]),
    p("6. What are you wearing today? (present continuous)"),
    pAns("E.A.: I am wearing …", ["I am wearing"]),
    p("7. Describe a classmate (adjectives + is wearing)."),
    pAns("E.A.: She is tall. She has long hair. She is wearing a green dress.", ["She is tall."]),
    p("8. Simple or continuous: “every day”? “look!”?"),
    pAns("E.A.: simple; continuous.", ["simple; continuous"]),
    p("9. One Malagasy traditional cloth and one Anglophone one."),
    pAns("E.A.: the lamba; the kilt.", ["the lamba"]),
    p("10. Read three sentences of “Emma and her friends at the park”."),
    pAns("E.A.: fluent reading.", ["fluent reading"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s66", "SESSION 66 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 6: PEOPLE’S APPEARANCE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: act four commands (Simon says!) and give two commands yourself.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Label the body chart: eight body parts (0.5 point each).")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete: 1. I see with my …… . 2. I hear with my …… . 3. Socks go on the …… . 4. Gloves go on the …… .")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Simple or continuous? 1. Look! Emma …… (wear) a scarf. 2. People in the UK often …… (wear) sunglasses. 3. Today I …… (put) on my sweater. 4. He …… (wear) a uniform every day.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences to describe a famous person you admire (adjectives, often wears, is wearing).")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the actions and commands are correct (1 point each series).", ["commands"]),
    pAns("Exercise 2: eight correct body parts (0.5 point each).", ["eight"]),
    pAns("Exercise 3: eyes — ears — feet — hands (1 point each).", ["eyes — ears"]),
    pAns("Exercise 4: is wearing — wear — am putting — wears (1 point each).", ["is wearing — wear"]),
    pAns("Exercise 5: four correct sentences with both tenses (1 point each).", ["both tenses"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS53(), pageBreak(), ...lessonS53(), pageBreak(),
    ...ficheS54(), pageBreak(), ...lessonS54(), pageBreak(),
    ...ficheS55(), pageBreak(), ...lessonS55(), pageBreak(),
    ...ficheS56(), pageBreak(), ...lessonS56(), pageBreak(),
    ...ficheS57(), pageBreak(), ...lessonS57(), pageBreak(),
    ...ficheS58(), pageBreak(), ...lessonS58(), pageBreak(),
    ...ficheS59(), pageBreak(), ...lessonS59(), pageBreak(),
    ...ficheS60(), pageBreak(), ...lessonS60(), pageBreak(),
    ...ficheS61(), pageBreak(), ...lessonS61(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...ficheS64(), pageBreak(), ...lessonS64(), pageBreak(),
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 6", COLOR, [
      "I can name the parts of the body: head, trunk, limbs.",
      "I can act and give commands: Simon says, touch your nose!",
      "I can say the five senses.",
      "I can name the clothes and use wear, put on, take off.",
      "I can use the present continuous: She is wearing…",
      "I can describe a person with kind adjectives.",
      "I can choose between present simple and present continuous.",
      "I can read and write descriptions of people.",
    ], "Well done! See you in Unit 7: MY IMMEDIATE SURROUNDINGS!"),
  ];
};
module.exports.COLOR = COLOR;
