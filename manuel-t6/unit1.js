// T6 — UNIT 1 — PERSONAL COMMUNICATION (9 séances + révision + test) — Sessions 1 à 11 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "E36C0A"; // orange
const TOTAL = 74;
const AUDIO = {
  dialogues: "https://drive.google.com/uc?export=download&id=1wMRw6e59zjZ0JChsiY_PjaGnwJOf67vu",
  alphabet: "https://drive.google.com/uc?export=download&id=1BtKd6mzbKx6zvn31T90c40ftv5ywv4j2",
  numbers: "https://drive.google.com/uc?export=download&id=1Ve7ciApxhS8y2trpoJ0YUCdniYATqB_W",
  reading: "https://drive.google.com/uc?export=download&id=1kYvFE7u3FrpMI8z8E0GScSFmKvDKDFHo",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — PERSONAL COMMUNICATION", title, slo,
  values: "self-confidence, mutual respect", session, materials,
});

// ---------- boîtes locales ----------
function dialogue1Box() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("DIALOGUE 1 — GREETINGS AND PERSONAL INFORMATION (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "FDEBD9" })] }),
      new TableRow({ children: [cell([
        L("A: Hello! I’m John."),
        L("B: Hi! I’m Lisa. Nice to meet you."),
        L("A: Nice to meet you too. Where are you from?"),
        L("B: I’m from Canada."),
        L("A: Are you a student?"),
        L("B: Yes, I am. I’m 14 years old."),
        L("A: I’m 13. I live in Toronto."),
        L("B: Oh, I have a cousin there."),
        L("A: Really? Is he at school now?"),
        L("B: No, he isn’t. He’s at home."),
      ])] }),
    ],
  });
}
function dialogue2Box() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("DIALOGUE 2 — INTRODUCING AND TAKING LEAVE (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "FDEBD9" })] }),
      new TableRow({ children: [cell([
        L("A: Hi, Tom! May I introduce you to my friend?"),
        L("B: Yes, of course."),
        L("A: This is Sara. She’s from Kenya."),
        L("C: Hello!"),
        L("B: Hi, Sara. Nice to meet you."),
        L("C: Nice to meet you too."),
        L("A: Sara, do you have a phone?"),
        L("C: Yes, I do."),
        L("B: I don’t have a phone, but I have a tablet."),
        L("C: That’s nice."),
        L("A: Are you at school now?"),
        L("B: Yes, we are."),
        L("A: Okay, I have to go now."),
        L("B: Bye!    C: Goodbye!"),
      ])] }),
    ],
  });
}
function rhymeBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { center: true, after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("THE NUMBER RHYME  ♪", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: "FDEBD9" })] }),
      new TableRow({ children: [cell([
        L("1, 2, put on your shoe,"),
        L("3, 4, shut the door,"),
        L("5, 6, pick up sticks,"),
        L("7, 8, go to the gate,"),
        L("9, 10, say it again!"),
      ])] }),
    ],
  });
}
function grammarTable(title, rows2) {
  const h = (t, w) => cell([p([run(t, { bold: true, color: C.WHITE, size: 24 })], { center: true })],
    { w, shade: COLOR, vAlign: VerticalAlign.CENTER });
  const c = (t, w, b) => cell([p([run(t, { size: 24, bold: !!b, color: b ? C.BLUE : undefined })], { center: true })],
    { w, vAlign: VerticalAlign.CENTER });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [h(title, 2600), h("Affirmative  (+)", 2600), h("Negative  (−)", 2600), h("Question  (?)", 2600)] }),
      ...rows2.map(([s, a, n, q]) => new TableRow({ children: [c(s, 2600, true), c(a, 2600), c(n, 2600), c(q, 2600)] })),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 1 — PERSONAL COMMUNICATION", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Hello! Nice to meet you!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_socialising.png", 460, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• greet, welcome, introduce myself and take leave;"),
    p("• give personal information: name, age, address, hometown;"),
    p("• use to be and to have (affirmative, negative, question, short answers);"),
    p("• say the alphabet and spell words: How do you spell…?;"),
    p("• count from 0 to 100 and give a phone number;"),
    p("• read and write short dialogues about personal information.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, mutual respect.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: "FDEBD9" })] }),
        new TableRow({ children: [cell([
          p("In T5 we learned to greet, to introduce ourselves (My name is…, I’m from…, I live in…) and to count to 100."),
          p("This year, in T6, we have THREE hours of English every week — we speak, we read AND we write!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u1_dialogues.png", label: "Dialogues 1 and 2 — listen and repeat", url: AUDIO.dialogues }], COLOR),
  ];
}

// ---------- S1 — Greetings, welcoming, taking leave ----------
function ficheS1() {
  const meta = META("Socialising: greetings, welcoming, taking leave",
    "By the end of the lesson, learners will be able to greet, welcome someone and take leave, with the right falling intonation.",
    "1 / 9", "pictures of two people meeting, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T5.) Answer these questions:"),
       fp("1. Say hello to your neighbour in English."),
       fp("2. What do we say before we sleep? before we eat?"),
       fp("3. How do we say goodbye?")],
      [fp("Answer."),
       fp("E.A.: Hello! / Hi!; Good night!; Enjoy your meal!; Goodbye! / See you!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: look at the picture (two students in front of a school). Guess: what are they saying?")],
      [fp("Look. Guess.")], "“Eliciting technique”", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Socialising ». By the end of this lesson, you will greet, welcome a friend and take leave like John and Lisa!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to Dialogue 1 twice. First just listen. Then listen and find: the greetings, the welcoming words, the taking-leave words.")],
      [fp("Listen. Identify the expressions."),
       fp("E.A.: Hello! / Hi! — Nice to meet you (too) — Bye! / Goodbye!")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: repeat the expressions with the right FALLING intonation at the end of the sentences: Hello! ↘ I’m John. ↘"),
       fp("Repetition drill: the class, one row, one pupil."),
       fp("When do we say “Nice to meet you”? And “Nice to meet you too”?")],
      [fp("Repeat with the falling intonation. Answer."),
       fp("E.A.: the first speaker says “Nice to meet you”, the second answers “…too”.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to greet — Hello! / Hi!; to welcome — Nice to meet you! / Welcome!; to take leave — I have to go now. Bye! / Goodbye! / See you!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: play the meeting! Greet your partner, welcome him/her, then take leave. Change partners twice.")],
      [fp("Act the mini-dialogue."),
       pAns("E.A.: — Hello! I’m … — Hi! I’m … Nice to meet you. — Nice to meet you too. … — I have to go now. Bye!",
        ["Nice to meet you"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Greet me and welcome me."),
       fp("2. Take leave politely."),
       fp("3. Is the intonation falling at the end?")],
      [fp("Act. Answer."),
       pAns("E.A.: Hello! Nice to meet you! — I have to go now. Goodbye! — with falling intonation.",
        ["Nice to meet you!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}

// ---------- S2 — Personal information + to be ----------
function ficheS2() {
  const meta = META("Personal information — the verb TO BE",
    "By the end of the lesson, learners will be able to ask and give personal information (name, age, address, hometown) and use “to be” in the three forms with short answers.",
    "2 / 9", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Greet me and welcome me."),
       fp("2. What did Lisa answer to “Where are you from?”"),
       fp("3. Take leave.")],
      [fp("Answer."),
       fp("E.A.: Hello! Nice to meet you!; I’m from Canada.; Bye! / Goodbye!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick chain: “Hello, I’m …” — each pupil says his/her name around the class, fast!")],
      [fp("Say the chain.")], "Chain drill", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to give PERSONAL INFORMATION with the little verb that does big work: TO BE. By the end of this lesson, you will say who you are, how old you are, where you are from and where you live.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to Dialogue 1 again. Find all the small words: I’m…, Are you…?, Yes, I am…, he isn’t, He’s…"),
       fp("Write them on the blackboard as the pupils find them.")],
      [fp("Listen. Find the forms of “to be”.")],
      "Audio / “Eliciting technique”", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule from the dialogue: I am (I’m) — you are (you’re) — he/she/it is (he’s) — we are — they are."),
       fp("Negative: is not → isn’t. Question: Are you a student? Short answers: Yes, I am. / No, he isn’t."),
       fp("Transformation drill: I say “He is at school” → say the negative! → the question!")],
      [fp("Repeat the forms. Transform the sentences."),
       fp("E.A.: He isn’t at school. — Is he at school?")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, with TO BE we give personal information: I’m Lisa. I’m 14 years old. I’m from Canada. I live in Toronto. — and we answer fast: Yes, I am. / No, I’m not.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill: “I’m from Canada” → (Madagascar) → (Kenya) → (Toamasina)…"),
       fp("In pairs: interview your partner — What’s your name? How old are you? Where are you from? Where do you live? Then present him/her: This is … He/She is …")],
      [fp("Substitute. Interview. Present."),
       pAns("E.A.: This is Fara. She is 12 years old. She is from Antsirabe. She lives in Ambohipo.",
        ["She is 12 years old."], { size: SZ.FICHE })],
      "Substitution drill / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give your four personal informations (name, age, hometown, address)."),
       fp("2. Put in the negative: “She is at home.”"),
       fp("3. Answer fast: Are you a student?")],
      [fp("Answer. Transform."),
       pAns("E.A.: I’m …, I’m … years old, I’m from …, I live in … — She isn’t at home. — Yes, I am.",
        ["She isn’t at home.", "Yes, I am."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}

// ---------- S3 — to have + dialogue building ----------
function ficheS3() {
  const meta = META("Introducing a friend — the verb TO HAVE",
    "By the end of the lesson, learners will be able to introduce someone (May I introduce…? This is…), use “to have” in the three forms, and act a dialogue with the right intonation.",
    "3 / 9", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give your personal information (4 sentences)."),
       fp("2. Question: “He is from Kenya.”"),
       fp("3. Short answer: Is Lisa from Canada?")],
      [fp("Answer. Transform."),
       fp("E.A.: I’m…; Is he from Kenya?; Yes, she is.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Show your school things: “a pen! a book!” — who has what?")],
      [fp("Show and say.")], "Whole-class work", "School things"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to introduce a friend and use the verb TO HAVE. By the end of this lesson, you will build and act a real English dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to Dialogue 2. Find: how does A introduce Sara? Find the forms of “to have”: do you have…?, Yes, I do., I don’t have…, I have to go now.")],
      [fp("Listen. Identify."),
       fp("E.A.: May I introduce you to my friend? This is Sara. — do you have / I don’t have.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: I/you/we/they have — he/she/it has. Negative: don’t/doesn’t have. Question: Do you have…? Short answers: Yes, I do. / No, I don’t."),
       fp("Transformation drill: “She has a tablet.” → negative! → question!")],
      [fp("Repeat. Transform."),
       fp("E.A.: She doesn’t have a tablet. — Does she have a tablet?")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to introduce — May I introduce you to my friend? This is … He/She is from … And TO HAVE tells what we own: I have a pen, she has a book, do you have a phone?")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Contextualisation: in groups of three, build YOUR dialogue like Dialogue 2 (introduce a friend, ask about a phone or a school thing, take leave). Write it in the copy-book."),
       fp("Act the dialogue in front of the class — with the falling intonation!")],
      [fp("Build. Write. Act."),
       pAns("E.A.: — May I introduce you to my friend? — This is … — Do you have …? — Yes, I do. / No, I don’t. — I have to go now. Bye!",
        ["May I introduce"], { size: SZ.FICHE })],
      "Role play / Group work", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Introduce your neighbour to me."),
       fp("2. Negative: “They have a dog.”"),
       fp("3. Short answer: Do you have a tablet?")],
      [fp("Act. Transform. Answer."),
       pAns("E.A.: This is … He/She is from … — They don’t have a dog. — Yes, I do. / No, I don’t.",
        ["They don’t have a dog."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}

// ---------- S4 — The alphabet ----------
function ficheS4() {
  const meta = META("The English alphabet",
    "By the end of the lesson, learners will be able to name the letters of the English alphabet in order, helped by the alphabet song.",
    "4 / 9", "alphabet chart, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Introduce a friend."),
       fp("2. Question: “You have a pen.”"),
       fp("3. Are you at school now?")],
      [fp("Answer."),
       fp("E.A.: This is …; Do you have a pen?; Yes, I am.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: I write letters in disorder on the blackboard (D, A, C, B…). Put them in order!")],
      [fp("Order the letters.")], "Letter game", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the English ALPHABET with its song. By the end of this lesson, you will name the 26 letters — in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the alphabet song twice and follow the letters on the chart with your finger.")],
      [fp("Listen. Follow the chart.")],
      "Audio / “Visual aids”", "Alphabet chart, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Sing line by line after the audio: A B C D — E F G — H I J K — L M N O P — Q and R, S and T — U V W, X Y Z."),
       fp("Careful with the difficult letters: A [éi], E [i], I [aï], G [dji] / J [djéi], W [deubeuliou]."),
       fp("I point to a letter on the chart: name it!")],
      [fp("Sing. Repeat. Name the letters."),
       fp("E.A.: the letters are named correctly, G and J are not confused.")],
      "Spelling drill", "Alphabet chart"),
    stepRow(["5. Synthesis"],
      [fp("So, the English alphabet has 26 letters, and the song helps us remember the order. Tomorrow we use the letters to SPELL words!")],
      [fp("Listen. Sing once more.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Letter game: in two teams. I say a letter — team A shows it on the chart. I show a letter — team B names it. Points for speed!"),
       fp("Underline game: I spell a word slowly (P-E-N): underline the right word on the blackboard (pen / pin / pan).")],
      [fp("Play. Show. Name. Underline."),
       pAns("E.A.: the letters are shown and named; “pen” is underlined.",
        ["pen"], { size: SZ.FICHE })],
      "Letter game / Two teams", "Chart, blackboard"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Sing the alphabet song."),
       fp("2. Name these five letters (I point: A, G, J, E, W)."),
       fp("3. Which letter comes after P?")],
      [fp("Sing. Name. Answer."),
       pAns("E.A.: the song is sung; the letters are named; Q.",
        ["Q"], { size: SZ.FICHE })],
      "Individual work", "Chart"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}

// ---------- S5 — Spelling ----------
function ficheS5() {
  const meta = META("How do you spell…?",
    "By the end of the lesson, learners will be able to spell words and names with “How do you spell…? — It’s…” and recognise a spelled word.",
    "5 / 9", "word cards, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Sing the alphabet song."),
       fp("2. Name: G, J, E, I."),
       fp("3. Which letter comes before T?")],
      [fp("Sing. Name. Answer."),
       fp("E.A.: the letters are correct; S.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick alphabet chain around the class: A! B! C!… — don’t break the chain!")],
      [fp("Say the chain.")], "Chain drill", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to SPELL words. By the end of this lesson, you will ask “How do you spell…?” and answer letter by letter.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model: — How do you spell “book”? — It’s B-O-O-K. — How do you spell your name? — It’s R-I-J-A.")],
      [fp("Listen.")], "Modelling", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Repeat the question and the answer: the class, one row, one pupil."),
       fp("Spelling drill: I spell a word (D-E-S-K) — tell me the word! I say a word (pen) — spell it!")],
      [fp("Repeat. Spell. Recognise."),
       fp("E.A.: desk! — P-E-N.")],
      "Spelling drill", "Word cards"),
    stepRow(["5. Synthesis"],
      [fp("So: to ask — How do you spell…? To answer — It’s + the letters. Spelling helps us write names without mistakes!")],
      [fp("Listen. Repeat.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Name game (from the syllabus): each pupil spells his/her LONG name (or a family name) slowly; the class writes and guesses whose name it is!"),
       fp("In pairs: — How do you spell your name? — It’s … Then swap.")],
      [fp("Spell long names. Write. Guess. Ask and answer."),
       pAns("E.A.: — How do you spell your name? — It’s R-A-K-O-T-O. — It’s Rakoto’s name!",
        ["How do you spell"], { size: SZ.FICHE })],
      "Letter game / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. How do you spell “school”?"),
       fp("2. I spell T-A-B-L-E: what is the word?"),
       fp("3. Spell your own name.")],
      [fp("Spell. Recognise."),
       pAns("E.A.: S-C-H-O-O-L — table — the name is spelled correctly.",
        ["S-C-H-O-O-L"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}

// ---------- S6 — Numbers 0-100, a/an, there is/are ----------
function ficheS6() {
  const meta = META("Numbers 0 to 100 — There is / There are",
    "By the end of the lesson, learners will be able to count from 0 to 100, use a/an, there is/there are with singular and plural nouns, and answer “How many … are there?”.",
    "6 / 9", "school things, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Spell “pencil”."),
       fp("2. (T5!) Count by tens: 10, 20, … 100."),
       fp("3. Name three school things on my desk.")],
      [fp("Spell. Count. Name."),
       fp("E.A.: P-E-N-C-I-L; ten, twenty… one hundred; a pen, a book, a ruler.")],
      "Individual work", "School things"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: the number rhyme! “1, 2, put on your shoe…” with the actions.")],
      [fp("Say the rhyme. Act.")], "Rhyme", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to master the numbers 0 to 100 and count things with THERE IS / THERE ARE. By the end of this lesson, you will count everything in the classroom!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Repetition drill with numbers (from the syllabus): I say a number, you repeat. I say a number, you give the NEXT one. I say 2-digit numbers (27, 71), you repeat or give the next one."),
       fp("Look at my desk: There is a book. There are three pens. Why “is”? why “are”?")],
      [fp("Repeat. Give the next number. Observe."),
       fp("E.A.: 27 → twenty-eight; “is” + one thing, “are” + several things.")],
      "Repetition drill", "School things"),
    stepRow(["4. Analysis"],
      [fp("Draw the rules: a + consonant sound (a book), an + vowel sound (an eraser). Singular → there is; plural → there are."),
       fp("Plurals: regular (pen → pens) and irregular (child → children, man → men)."),
       fp("Transformation drill: “There is a pen.” → plural! “There are two children.” → singular!")],
      [fp("Repeat. Transform."),
       fp("E.A.: There are pens. — There is a child.")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: a/an for ONE thing, there is + singular, there are + plural, and the question: How many … are there? — There are …")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game “Show me…” (from the syllabus): Show me five blue pens! Show me two copy-books! — the fastest group wins."),
       fp("In pairs: How many benches are there in the classroom? How many pupils are there? Count and answer!")],
      [fp("Play. Count. Ask and answer."),
       pAns("E.A.: How many benches are there? — There are twenty-five benches.",
        ["How many", "There are"], { size: SZ.FICHE })],
      "Game / In pairs", "School things"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Count from 90 to 100."),
       fp("2. A or an? (… apple, … ruler)"),
       fp("3. How many windows are there in the classroom?")],
      [fp("Count. Answer."),
       pAns("E.A.: ninety … one hundred — an apple, a ruler — There are … windows.",
        ["an apple, a ruler"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}

// ---------- S7 — Phone numbers, apologizing, thanking ----------
function ficheS7() {
  const meta = META("Phone numbers — sorry and thank you",
    "By the end of the lesson, learners will be able to ask and give a phone number, apologise and thank in English.",
    "7 / 9", "number flashcards, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Count from 60 to 70."),
       fp("2. There is or there are? (… two doors)"),
       fp("3. How many pupils are there in your row?")],
      [fp("Count. Answer."),
       fp("E.A.: sixty… seventy; There are two doors; There are …")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Flashcard exchange: read the number on your flashcard, then exchange with a neighbour and read again!")],
      [fp("Read. Exchange.")], "Flashcards", "Number flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to give our PHONE NUMBER in English — and say sorry and thank you like polite speakers.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to my model: — Can I have your phone number? — Yes. It’s 034 12 345 67 (zero-three-four, one-two, three-four-five, six-seven). — Thank you! — You’re welcome."),
       fp("In English, we often say a phone number DIGIT BY DIGIT. In Malagasy style we group the numbers — listen to the difference (language transfer).")],
      [fp("Listen. Compare the two ways.")],
      "Modelling / “Transfer”", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Repeat: the question, the answer, digit by digit — zero is “oh” or “zero”."),
       fp("The polite words: I’m sorry! → That’s okay. Thank you! → You’re welcome."),
       fp("Dictation game (from the syllabus): I dictate two phone numbers, one English style, one Malagasy style — write them, then correct with your neighbour (peer correction).")],
      [fp("Repeat. Write the dictation. Correct one another."),
       fp("E.A.: the numbers are written correctly and the styles are recognised.")],
      "Dictation / Peer correction", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So: Can I have your phone number? — It’s … And the magic pairs: I’m sorry → That’s okay; Thank you → You’re welcome.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: ask and give (a real or invented) phone number; make a small mistake on purpose → your partner says “I’m sorry!” and you answer “That’s okay!”; finish with Thank you / You’re welcome.")],
      [fp("Ask. Answer. Apologise. Thank."),
       pAns("E.A.: — Can I have your phone number? — It’s 032 45 678 90. — Thank you! — You’re welcome.",
        ["Can I have your phone number?"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give your phone number digit by digit."),
       fp("2. What do you answer to “Thank you”? to “I’m sorry”?"),
       fp("3. Write the number I dictate: 033 11 223 44.")],
      [fp("Say. Answer. Write."),
       pAns("E.A.: the number is said digit by digit — You’re welcome. / That’s okay. — the dictated number is right.",
        ["You’re welcome."], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}

// ---------- S8 — Reading ----------
function ficheS8() {
  const meta = META("Reading: “New friends at school”",
    "By the end of the lesson, learners will be able to read a short text about personal information with the right intonation and punctuation, and find the gist and detailed information.",
    "8 / 9", "the reading text, flashcards with phone numbers");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give your phone number."),
       fp("2. Spell “friend”."),
       fp("3. How many … are there? (my picture)")],
      [fp("Answer. Spell."),
       fp("E.A.: It’s …; F-R-I-E-N-D; There are …")],
      "Individual work", "Picture"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: read the numbers on the flashcards, then exchange them. Now circle all the punctuation marks in the text: . , ? !")],
      [fp("Read. Circle the punctuation.")], "Flashcards", "Text, flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a real English text: “New friends at school”. By the end of this lesson, you will read it aloud with the right intonation.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: listen to the audio (or my model) while following the text. The voice FALLS at a period and at a WH-question; it changes at a comma; it jumps at an exclamation mark!")],
      [fp("Listen and follow the text.")],
      "Modelling / Audio", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Read the text: one sentence per pupil, respecting the punctuation and the intonation."),
       fp("Answer the questions: Who is Tina? How old is Leo? How many pens are there in his bag? What is his phone number… wait — whose number is it?")],
      [fp("Read aloud. Answer."),
       fp("E.A.: Tina is a student, 13, from Antananarivo. Leo is 14. There are three pens. It’s Leo’s number: 034 12 345 67.")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, a good reader follows the punctuation: period ↘, question mark for WH ↘, comma = small stop, exclamation = energy!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-reading: act the dialogue part of the text in pairs (Tina and Leo)."),
       fp("De-punctuated game: I write two sentences WITHOUT punctuation on the blackboard; listen to me reading and put the right punctuation marks!")],
      [fp("Act. Punctuate."),
       pAns("E.A.: “How many books do you have?” — the question mark is placed correctly.",
        ["question mark"], { size: SZ.FICHE })],
      "Role play / In pairs", "Blackboard"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read five sentences of the text aloud."),
       fp("2. What is the text about (the gist)?"),
       fp("3. Two detail questions (age, number of books).")],
      [fp("Read. Answer."),
       pAns("E.A.: the reading respects punctuation; two friends meet at school; Leo is 14, he has five books.",
        ["two friends"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}

// ---------- S9 — Writing ----------
function ficheS9() {
  const meta = META("Writing: my first English dialogue",
    "By the end of the lesson, learners will be able to write simple sentences and a short dialogue to ask for and give personal information, then act it out.",
    "9 / 9", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read two sentences of “New friends at school”."),
       fp("2. Spell “welcome”."),
       fp("3. Short answer: Do you have a phone?")],
      [fp("Read. Spell. Answer."),
       fp("E.A.: the reading is fluent; W-E-L-C-O-M-E; Yes, I do. / No, I don’t.")],
      "Individual work", "Text"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: rearrange the words on the blackboard to build a sentence: “from / I / Madagascar / am” — “you / how / are / old ?”")],
      [fp("Rearrange the words.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE our first English dialogue. By the end of this lesson, your pair will write and act a dialogue about personal information.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Fill the blanks together on the blackboard: — Hello! I’m … — Hi! … to meet you. — Where are you …? — I’m … Canada.")],
      [fp("Fill the blanks.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Dictation: write the sentences I dictate — “My name is Tina.” “I am 13 years old.” “Can I have your phone number?” — then correct yourselves with the model on the blackboard."),
       fp("Remember: capital letter at the start, punctuation at the end!")],
      [fp("Write the dictation. Self-correct."),
       fp("E.A.: the sentences are written with capitals and punctuation.")],
      "Dictation / Self-correction", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("So, a good written dialogue: greetings + questions (name? age? from? live? phone?) + answers + taking leave — with capitals and punctuation.")],
      [fp("Listen.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("While-writing: in pairs, write YOUR dialogue (at least 8 lines) with numbers inside (age, phone number, school things)."),
       fp("Peer correction: exchange your dialogue with another pair and check the capitals, punctuation, and verbs."),
       fp("Post-writing: act your dialogue in front of the class!")],
      [fp("Write. Correct another pair. Act."),
       pAns("E.A.: the dialogue asks and gives personal information with numbers, and is acted with intonation.",
        ["personal information"], { size: SZ.FICHE })],
      "Peer correction / Role play", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two sentences about you (name, age)."),
       fp("2. Write the question for: “I live in Mahajanga.”"),
       fp("3. Read your dialogue aloud.")],
      [fp("Write. Read."),
       pAns("E.A.: My name is … I am … years old. — Where do you live? — the dialogue is read correctly.",
        ["Where do you live?"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 1", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PERSONAL COMMUNICATION"),
    sub("1. Socialising"),
    pr([run("To greet: "), ...kw("Hello!", "hèlôou"), run("  "), ...kw("Hi!", "haï")]),
    pr([run("To welcome: "), ...kw("Nice to meet you!", "naïss tou mite iou"), run("  →  "), ...kw("Nice to meet you too!", "…tou")]),
    pr([run("To introduce: "), ...kw("May I introduce you to my friend?", "méi aï inntrodiouss iou tou maï frènde"), run("  "), ...kw("This is Sara.", "zis iz sara")]),
    pr([run("To take leave: "), ...kw("I have to go now.", "aï hav tou gôou naou"), run("  "), ...kw("Bye! / Goodbye! / See you!", "baï / goudbaï / si iou")], { after: 100 }),
    sub("2. Personal information"),
    pr([...kw("What’s your name?", "ouots iôr néime"), run("  →  "), ...kw("My name is Lisa.", "maï néime iz lisa")]),
    pr([...kw("How old are you?", "haou ôould âr iou"), run("  →  "), ...kw("I’m 14 years old.", "aïm fôrtine yirz ôould")]),
    pr([...kw("Where are you from?", "ouèr âr iou frome"), run("  →  "), ...kw("I’m from Canada.", "aïm frome kanada")]),
    pr([...kw("Where do you live?", "ouèr dou iou live"), run("  →  "), ...kw("I live in Toronto.", "aï live ine toronnto")], { after: 60 }),
    pr([run("The prepositions: ", { bold: true }), run("in", { bold: true, color: C.BLUE }), run(" + town (in Toronto) — "), run("at", { bold: true, color: C.BLUE }), run(" + place (at school, at home).")], { after: 100 }),
    dialogue1Box(),
    p("", { after: 100 }),
    sub("3. The verb TO BE (present simple)"),
    grammarTable("TO BE", [
      ["I", "I am (I’m)", "I am not (I’m not)", "Am I…?"],
      ["you / we / they", "you are (you’re)", "you aren’t", "Are you…?"],
      ["he / she / it", "he is (he’s)", "he isn’t", "Is he…?"],
    ]),
    pr([run("Short answers: ", { bold: true }), ...kw("Yes, I am.", "yèss aï am"), run("  "), ...kw("No, he isn’t.", "nôou hi izeunte")], { after: 100 }),
    sub("4. The verb TO HAVE (present simple)"),
    grammarTable("TO HAVE", [
      ["I / you / we / they", "I have", "I don’t have", "Do you have…?"],
      ["he / she / it", "he has", "he doesn’t have", "Does he have…?"],
    ]),
    pr([run("Short answers: ", { bold: true }), ...kw("Yes, I do.", "yèss aï dou"), run("  "), ...kw("No, I don’t.", "nôou aï dôounte")], { after: 100 }),
    dialogue2Box(),
    p("", { after: 100 }),
    sub("5. The English alphabet"),
    pr([run("The 26 letters: "), run("A B C D E F G H I J K L M N O P Q R S T U V W X Y Z", { bold: true, color: C.BLUE, size: 30 })], { after: 40 }),
    pr([run("Careful! ", { bold: true, color: C.RED }), run("A", { bold: true, color: C.BLUE }), run(" [éi] — "), run("E", { bold: true, color: C.BLUE }), run(" [i] — "), run("I", { bold: true, color: C.BLUE }), run(" [aï] — "), run("G", { bold: true, color: C.BLUE }), run(" [dji] — "), run("J", { bold: true, color: C.BLUE }), run(" [djéi] — "), run("W", { bold: true, color: C.BLUE }), run(" [deubeuliou]")], { after: 60 }),
    pr([...kw("How do you spell “book”?", "haou dou iou spèl bouk"), run("  →  "), ...kw("It’s B-O-O-K.", "its bi-ôou-ôou-kéi")], { after: 100 }),
    sub("6. Numbers, phone numbers and counting things"),
    rhymeBox(),
    p("", { after: 60 }),
    pr([run("a", { bold: true, color: C.BLUE }), run(" + consonant sound: a book — "), run("an", { bold: true, color: C.BLUE }), run(" + vowel sound: an eraser.")]),
    pr([run("There is", { bold: true, color: C.BLUE }), run(" + singular: There is a bag. — "), run("There are", { bold: true, color: C.BLUE }), run(" + plural: There are three pens.")]),
    pr([run("Irregular plurals: ", { bold: true }), run("child → children, man → men, woman → women", { bold: true, color: C.BLUE })], { after: 60 }),
    pr([...kw("How many books do you have?", "haou mèni bouks dou iou hav"), run("  →  "), ...kw("I have five books.", "aï hav faïv bouks")]),
    pr([...kw("Can I have your phone number?", "kane aï hav iôr fôoune neumbeur"), run("  →  "), ...kw("It’s 034 12 345 67.", "its zirô-tsri-fôr…")], { after: 60 }),
    pr([run("The polite pairs: ", { bold: true }), ...kw("I’m sorry!", "aïm sori"), run(" → "), ...kw("That’s okay.", "zats ôou-kéi"), run("   "), ...kw("Thank you!", "tenk iou"), run(" → "), ...kw("You’re welcome.", "iôr ouèlkeum")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u1_dialogues.png", label: "Dialogues 1 and 2 — listen and repeat", url: AUDIO.dialogues },
      { qr: "qr_t6_u1_alphabet.png", label: "The alphabet song — listen and sing", url: AUDIO.alphabet },
      { qr: "qr_t6_u1_numbers.png", label: "The number rhyme and big numbers — listen and say", url: AUDIO.numbers },
    ], COLOR),
  ];
}

// ---------- texte de lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 50 });
  return [
    p([run("READING — UNIT 1", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("NEW FRIENDS AT SCHOOL", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("Hello! My name is Tina. I am 13 years old. I am a student. I live in Antananarivo."),
        L("This is my friend, Leo. He is 14. He is a new student. There is a bag and a book on his desk. There are three pens and two notebooks in his bag."),
        L("“Nice to meet you,” I say."),
        L("“Nice to meet you too,” he answers."),
        L("“How many books do you have?” I ask."),
        L("“I have five books,” he says."),
        L("“Oh, sorry! I have only two books.”"),
        L("“That’s okay.”"),
        L("“Thank you!”"),
        L("“You’re welcome.”"),
        L("“Can I have your phone number?”"),
        L("“Yes. It is 034 12 345 67.”"),
        L("“Great! See you tomorrow.”"),
        L("“Goodbye!”"),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("Who is Tina? How old is Leo? How many pens are there in his bag? What is Leo’s phone number?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u1_reading.png", label: "New friends at school — listen and read", url: AUDIO.reading }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete: am, is or are?")]),
    p("1. I …… from Madagascar.    2. She …… 12 years old."),
    p("3. They …… at school.    4. …… you a student?", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Put in the negative: “He is at home.” — “They have a tablet.”")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Spell: “name” and “phone”.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("A or an? There is or there are?")]),
    p("1. …… orange.    2. …… ruler.    3. …… twenty pupils.    4. …… a blackboard.", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write two questions to ask personal information, and answer them for you.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: 1. am  2. is  3. are  4. Are (1 point each).", ["am", "is", "are"]),
    pAns("Exercise 2: He isn’t at home. — They don’t have a tablet (2 points each).", ["isn’t", "don’t have"]),
    pAns("Exercise 3: N-A-M-E — P-H-O-N-E (2 points each).", ["N-A-M-E"]),
    pAns("Exercise 4: 1. an  2. a  3. There are  4. There is (1 point each).", ["an", "There are"]),
    pAns("Exercise 5: e.g. What’s your name? — My name is … / How old are you? — I’m … (2 points each).", ["What’s your name?"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s10", "SESSION 10 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Greet me, welcome me, then take leave."),
    pAns("E.A.: Hello! Nice to meet you! … I have to go now. Goodbye!", ["Nice to meet you!"]),
    p("2. Give your four personal informations."),
    pAns("E.A.: My name is … I’m … years old. I’m from … I live in …", ["My name is"]),
    p("3. Transform: “She is a student.” (negative, question)"),
    pAns("E.A.: She isn’t a student. — Is she a student?", ["She isn’t a student."]),
    p("4. Short answers: Do you have a pen? Are you at school?"),
    pAns("E.A.: Yes, I do. / No, I don’t. — Yes, I am.", ["Yes, I do."]),
    p("5. Sing the alphabet song, then spell “student”."),
    pAns("E.A.: the song is sung; S-T-U-D-E-N-T.", ["S-T-U-D-E-N-T"]),
    p("6. Count from 0 to 20, then by tens to 100."),
    pAns("E.A.: the counting is right.", ["counting is right"]),
    p("7. How many doors are there in the classroom?"),
    pAns("E.A.: There is one door. / There are two doors.", ["There is one door."]),
    p("8. Give your phone number and thank your partner."),
    pAns("E.A.: It’s … — Thank you! — You’re welcome.", ["You’re welcome."]),
    p("9. Read four sentences of “New friends at school”."),
    pAns("E.A.: the reading respects punctuation and intonation.", ["punctuation"]),
    p("10. Write: “I am 13 years old.” (dictation)"),
    pAns("E.A.: capital letter, correct spelling, period.", ["capital letter"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s11", "SESSION 11 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 1: PERSONAL COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: greet, introduce yourself (name, age, hometown, address) and take leave.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete with to be or to have: 1. I …… a student. 2. She …… two books. 3. …… you from Kenya? 4. He ……n’t have a phone.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Spell your name, then write the word I spell (D-E-S-K).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Write in letters: 15 — 40 — 78 — 100.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a mini-dialogue (4 lines): ask and give a phone number, with thank you.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: Hello! My name is … I’m … I’m from … I live in … Goodbye! (1 point per element).", ["My name is"]),
    pAns("Exercise 2: 1. am  2. has  3. Are  4. does (1 point each).", ["has"]),
    pAns("Exercise 3: the name is spelled correctly; desk (2 points each).", ["desk"]),
    pAns("Exercise 4: fifteen — forty — seventy-eight — one hundred (1 point each).", ["seventy-eight"]),
    pAns("Exercise 5: — Can I have your phone number? — Yes, it’s … — Thank you! — You’re welcome. (1 point per line).", ["Can I have your phone number?"]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(),
    ...ficheS2(), pageBreak(),
    ...ficheS3(), pageBreak(),
    ...ficheS4(), pageBreak(),
    ...ficheS5(), pageBreak(),
    ...ficheS6(), pageBreak(),
    ...ficheS7(), pageBreak(),
    ...ficheS8(), pageBreak(),
    ...ficheS9(), pageBreak(),
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 1", COLOR, [
      "I can greet, welcome a friend and take leave.",
      "I can give my personal information: name, age, address, hometown.",
      "I can use to be and to have in the three forms, with short answers.",
      "I can say the alphabet and spell words.",
      "I can count from 0 to 100 and give my phone number.",
      "I can say sorry and thank you — and answer politely.",
      "I can read and write a short dialogue about personal information.",
    ], "Well done! See you in Unit 2: CLASSROOM COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
