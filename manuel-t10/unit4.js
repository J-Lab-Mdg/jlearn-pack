// T10 — UNIT 4 — HEALTH (7 séances + révision + test) — Sessions 27 à 35 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "6C3483"; // violet
const SHADE = "E8DAEF";
const TOTAL = 88;
const AUDIO = {
  flu: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — HEALTH", title, slo,
  values: "self-confidence, altruism", session, materials,
});

const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
const vocab = (word, pron, expl) => bullet([
  ...kw(word, pron), ...(expl ? [run("  —  " + expl)] : [])]);
function box(title, children, shade = SHADE) {
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run(title, { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade })] }),
      new TableRow({ children: [cell(children)] }),
    ],
  });
}
function fluDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("WHAT’S THE MATTER, LOVA? (listening passage)", [
    L("Mother", "Lova, wake up! It’s time for school… Are you OK? You look pale."),
    L("Lova", "I don’t feel well, Mum. I have a headache and a sore throat."),
    L("Mother", "Do you have a fever? Let me touch your forehead… You are hot!"),
    L("Lova", "And I’m coughing all the time. My body aches too."),
    L("Mother", "You have caught the flu, my dear. Stay in bed. Don’t go to school today."),
    L("Lova", "But Mum, I have an English lesson!"),
    L("Mother", "Health first! Drink warm water with honey and lemon. I will call the doctor."),
    L("Doctor", "Open your mouth… say Ah! Yes, it’s the flu. Take this medicine three times a day, drink a lot of water, and rest. Don’t play outside this week!"),
    L("Lova", "Thank you, doctor. I will stay in bed."),
    L("Mother", "And next time, wear a warm jacket in the rain!"),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE HEALTHY DAY OF A CHAMPION", [
    p("Fetra is sixteen, and she is the captain of her basketball team. Everybody asks her: “What is your secret?” Her answer is simple: “My day!”", { after: 40 }),
    p("Fetra wakes up early and drinks a big glass of water. She eats a real breakfast: rice, eggs and fruit. “Breakfast is fuel,” she says. “A car without fuel does not run — and a student without breakfast does not think!”", { after: 40 }),
    p("She walks to school every day, and she also trains three times a week. But she is careful: she never plays when she is injured. She washes her hands before every meal, and she brushes her teeth after it. She drinks water all day; however, she drinks very few sugary sodas.", { after: 40 }),
    p("In the evening, Fetra does her homework, but at nine o’clock, she stops everything: no phone, no screen, lights off! She sleeps eight hours every night. “Sleep is my secret coach,” she smiles. “It repairs my body and ranges my head.”", { after: 40 }),
    p("Strong body, clear head, big smile: the champion’s recipe is not magic — it is habit!", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — HEALTH", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("Health first!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u4_sick.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the common diseases and their symptoms;"),
    p("• ask about health: What’s the matter? How are you feeling?;"),
    p("• describe my health: I have a headache; my body aches;"),
    p("• give suggestions to stay healthy: Stay in bed! Call the doctor!;"),
    p("• read a text about healthy habits with and, also, but, however;"),
    p("• write advice for teenagers and create a health campaign poster.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, altruism.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("One day, somebody near you will be sick — a schoolmate, a little brother, maybe you. With this unit, you can ask, understand, comfort and advise in English. Caring for people is the most beautiful use of a language!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u4_flu.png", label: "What’s the matter, Lova? — listen and repeat", url: AUDIO.flu },
    ], COLOR),
  ];
}

// ---------- S27 — Diseases and symptoms ----------
function ficheS27() {
  const meta = META("The diseases and the symptoms",
    "By the end of the lesson, learners will be able to name common diseases and match them with their symptoms.",
    "1 / 7", "disease/symptom prompt cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give three household activities."),
       fp("2. Judge: the plates shine — clean or dirty?")],
      [fp("Answer."),
       fp("E.A.: sweep, iron, mop… — clean!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime doctor! I hold my head and groan… what do I have? I sneeze three times… what do I have? You guess — in any English you can!")],
      [fp("Guess."),
       fp("E.A.: a headache! a cold!")],
      "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The diseases and the symptoms ». By the end of this lesson, your body will speak English — even when it complains!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The disease wall: the flu, a cold, malaria, a stomachache, a toothache, diarrhoea. The symptom wall: a fever, a headache, a sore throat, a cough, to sneeze, to feel weak, to look pale. Repeat each word with its mime!")],
      [fp("Listen. Repeat. Mime.")],
      "Repetition drill", "Prompt cards"),
    stepRow(["4. Analysis"],
      [fp("MATCHING! Connect each disease with its symptoms: the flu → fever + cough + body aches; a cold → sneezing + sore throat; malaria → fever + feeling cold + feeling weak; a toothache → pain in the mouth. Which symptom appears twice? (the fever — the alarm of the body!)")],
      [fp("Match."),
       fp("E.A.: flu → fever, cough; malaria → fever, weakness…")],
      "Matching", "Prompt cards"),
    stepRow(["5. Synthesis"],
      [fp("So: six diseases, seven symptoms, and the machine: I HAVE + disease/symptom (I have the flu, I have a headache) — MY + body part + ACHES (my body aches, my head aches).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Disease riddles in pairs: A gives the symptoms (“I have a fever, I am coughing…”), B finds the disease (“You have the flu!”). Three riddles each!")],
      [fp("Ask. Guess."),
       pAns("E.A.: I sneeze and my throat is sore. — You have a cold!",
        ["You have a cold!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give four diseases."),
       fp("2. Give the symptoms of the flu."),
       fp("3. Complete: I … a headache; my body … .")],
      [fp("Answer."),
       pAns("E.A.: the flu, a cold, malaria, a toothache — fever, cough, body aches — have; aches.",
        ["have; aches"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(27, TOTAL, meta, rows, "s27");
}
function lessonS27() {
  return [
    p([run("LESSON OF THE DAY — SESSION 27", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE DISEASES AND THE SYMPTOMS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The diseases:", { bold: true })], { after: 30 }),
    vocab("the flu", "dhe flou", "la grippe"),
    vocab("a cold", "e kôoulde", "le rhume"),
    vocab("malaria", "melèria", "le paludisme"),
    vocab("a stomachache", "e steumeukéik", "mal au ventre"),
    vocab("a toothache", "e touthéik", "mal aux dents"),
    vocab("diarrhoea", "daïeri-e", "la diarrhée"),
    p([run("The symptoms:", { bold: true })], { after: 30 }),
    vocab("a fever", "e fiveur", "the alarm of the body!"),
    vocab("a headache", "e hèdéik"),
    vocab("a sore throat", "e sôr thrôoute", "gorge qui brûle"),
    vocab("a cough / to cough", "e kof / tou kof"),
    vocab("to sneeze", "tou snize", "atchoum!"),
    vocab("to feel weak / to look pale", "tou file ouike / tou louk péile"),
    p("", { after: 60 }),
    box("THE TWO MACHINES OF THE SICK BODY", [
      bullet([run("I HAVE + disease or symptom: ", { bold: true }), run("I have the flu. I have a headache.", { bold: true, color: C.BLUE })]),
      bullet([run("MY + body part + ACHES: ", { bold: true }), run("My body aches. My head aches.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S28 — Asking about and describing health ----------
function ficheS28() {
  const meta = META("Asking about and describing health",
    "By the end of the lesson, learners will be able to ask about somebody’s health and describe their own health.",
    "2 / 7", "expression cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the symptoms of malaria."),
       fp("2. Complete: I … a sore throat.")],
      [fp("Answer."),
       fp("E.A.: fever, feeling cold, weakness — have.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("I enter the class with a sad, tired face and a scarf. React! What do you say to me?")],
      [fp("React."),
       fp("E.A.: Are you OK? What’s the matter?")],
      "Using gestures", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Asking about and describing health ». By the end of this lesson, you will open a health conversation with the right question — and answer it with the right words!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The question wall: What’s the matter? What’s wrong? How are you feeling? Are you OK? Do you have a fever? The answer wall: I don’t feel well. I feel terrible/better. I have… It hurts here. I’m coughing all the time. Sort them: QUESTIONS or ANSWERS?")],
      [fp("Sort."),
       fp("E.A.: What’s the matter → question; I don’t feel well → answer.")],
      "Matching", "Expression cards"),
    stepRow(["4. Analysis"],
      [fp("The thermometer of answers, from bad to good: I feel terrible → I don’t feel well → I feel a little better → I feel much better → I feel great! Where is each sentence on the thermometer? And the caring reactions: Poor you! Get well soon! Take care!")],
      [fp("Order. React."),
       fp("E.A.: terrible at the bottom, great at the top!")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the five health questions, the thermometer of answers, and the three caring reactions. A full health conversation in three moves: question → description → care!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Telephone role play: A calls B who is absent today. A asks about his health (two questions!), B describes (two sentences!), A reacts with care. Then switch!")],
      [fp("Role play."),
       pAns("E.A.: — What’s the matter? Do you have a fever? — I have a cold and my throat hurts. — Poor you! Get well soon!",
        ["Get well soon!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three questions to ask about health."),
       fp("2. Describe a sick person (two sentences)."),
       fp("3. Give two caring reactions.")],
      [fp("Answer."),
       pAns("E.A.: What’s the matter? How are you feeling? Are you OK? — I have a fever; I feel weak. — Poor you! Take care!",
        ["Poor you!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(28, TOTAL, meta, rows, "s28");
}
function lessonS28() {
  return [
    p([run("LESSON OF THE DAY — SESSION 28", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING ABOUT AND DESCRIBING HEALTH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The questions:", { bold: true })], { after: 30 }),
    vocab("What’s the matter?", "ouats dhe mateur", "THE health question!"),
    vocab("What’s wrong?", "ouats ronng"),
    vocab("How are you feeling?", "haou âr iou filinng"),
    vocab("Are you OK? / Do you have a fever?", "âr iou ôoukéi / dou iou have e fiveur"),
    p([run("The answers (the thermometer!):", { bold: true })], { after: 30 }),
    vocab("I feel terrible.", "aï file tèribeul", "🌡 bottom!"),
    vocab("I don’t feel well.", "aï dôounte file ouèl"),
    vocab("I feel a little better.", "aï file e liteul bèteur"),
    vocab("I feel much better. / I feel great!", "meutch bèteur / gréite", "🌡 top!"),
    vocab("It hurts here.", "ite heurts hir", "with the finger on the place!"),
    p([run("The caring reactions:", { bold: true })], { after: 30 }),
    vocab("Poor you!", "pour iou", "ma/mon pauvre !"),
    vocab("Get well soon!", "guète ouèl soune", "bon rétablissement !"),
    vocab("Take care!", "téik kèr"),
    p("", { after: 60 }),
    box("THE HEALTH CONVERSATION IN THREE MOVES", [
      bullet([run("1. The question: ", { bold: true }), run("What’s the matter?", { bold: true, color: C.BLUE })]),
      bullet([run("2. The description: ", { bold: true }), run("I have a headache and I feel weak.", { bold: true, color: C.BLUE })]),
      bullet([run("3. The care: ", { bold: true }), run("Poor you! Get well soon!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S29 — Listening: What's the matter, Lova? ----------
function ficheS29() {
  const meta = META("Listening: What’s the matter, Lova?",
    "By the end of the lesson, learners will be able to identify the health problem, the symptoms and the health expressions in an oral dialogue.",
    "3 / 7", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two health questions."),
       fp("2. Give one caring reaction.")],
      [fp("Answer."),
       fp("E.A.: What’s the matter? How are you feeling? — Get well soon!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Matching warm-up: connect the prompts! fever + cough + body aches → ? (the flu); pain in the mouth → ? (a toothache). Now predict: in the dialogue, a boy cannot go to school. Why, in your opinion?")],
      [fp("Match. Predict."),
       fp("E.A.: he is sick — maybe the flu?")],
      "Matching", "Prompt cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « What’s the matter, Lova? ». By the end of this lesson, you will catch the disease, the symptoms AND the advice — like a real doctor!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen twice and answer: 1. What are Lova’s symptoms? (four!) 2. What is the disease? 3. Who comes to see him? 4. What must he take, and how often?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. Headache, sore throat, fever (hot forehead), cough + body aches. 2. The flu. 3. The doctor. 4. The medicine, three times a day.",
        ["The flu."], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis (post-listening)"],
      [fp("Expression hunt! Find in the dialogue: the questions about health (Are you OK? Do you have a fever?), the descriptions (I don’t feel well; my body aches) and REPEAT them with the audio — same music!")],
      [fp("Hunt. Repeat."),
       fp("E.A.: questions, descriptions, advice — all there!")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("So: a health dialogue = question → symptoms → disease → advice. And the golden rule of the mother: HEALTH FIRST!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Reconstruct the dialogue from prompts: pale → headache + sore throat → fever → flu → stay in bed → medicine 3×/day. Groups of three role play it (mother, Lova, doctor) — then compare with the audio!")],
      [fp("Reconstruct. Role play."),
       pAns("E.A.: (the dialogue rebuilt with the prompts)",
        ["Stay in bed."], { size: SZ.FICHE })],
      "Role play", "Prompts"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Why can’t Lova go to school?"),
       fp("2. What drink does the mother prepare?"),
       fp("3. What is the last advice of the mother?")],
      [fp("Answer."),
       pAns("E.A.: He has the flu. — Warm water with honey and lemon. — Wear a warm jacket in the rain!",
        ["honey and lemon"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(29, TOTAL, meta, rows, "s29");
}
function lessonS29() {
  return [
    p([run("LESSON OF THE DAY — SESSION 29", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT’S THE MATTER, LOVA?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    fluDialogueBox(),
    p("", { after: 60 }),
    p([run("The map of the dialogue:", { bold: true })], { after: 50 }),
    bullet([run("The question: ", { bold: true }), run("Are you OK? You look pale.", { bold: true, color: C.BLUE })]),
    bullet([run("The symptoms: ", { bold: true }), run("headache, sore throat, hot forehead, cough, body aches.", { bold: true, color: C.BLUE })]),
    bullet([run("The disease: ", { bold: true }), run("the flu!", { bold: true, color: C.BLUE })]),
    bullet([run("The advice: ", { bold: true }), run("stay in bed, drink warm water with honey, take the medicine 3 times a day.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t10_u4_flu.png", label: "What’s the matter, Lova? — listen and repeat", url: AUDIO.flu }], COLOR),
  ];
}

// ---------- S30 — Suggestions to stay healthy ----------
function ficheS30() {
  const meta = META("The suggestions to stay healthy",
    "By the end of the lesson, learners will be able to ask for and give suggestions to stay healthy using affirmative and negative imperatives.",
    "4 / 7", "health problem / advice cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give Lova’s four symptoms."),
       fp("2. What does the doctor prescribe?")],
      [fp("Answer."),
       fp("E.A.: headache, sore throat, cough, body aches — medicine 3×/day, water, rest.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Match pictures with advice! Picture of a boy with a toothache → which advice? (go to the dentist! don’t eat sweets!) Picture of a tired girl → ? (sleep more!)")],
      [fp("Match."),
       fp("E.A.: toothache → dentist; tired → sleep!")],
      "Matching", "Advice cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The suggestions to stay healthy ». By the end of this lesson, you will be the health advisor of your family!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("Listen to the dialogue again and catch ALL the suggestions: Stay in bed! Don’t go to school! Drink warm water! Take this medicine! Rest! Don’t play outside! Wear a warm jacket! Which ones are affirmative? negative?")],
      [fp("Listen. Classify."),
       fp("E.A.: affirmative: stay, drink, take, rest, wear; negative: don’t go, don’t play.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("The advice machine is… the IMPERATIVE of Unit 2! Verb first: Stay in bed! Negative: Don’t + verb: Don’t play outside! And to ask for advice: What should I do? — the answer comes in imperatives!")],
      [fp("Observe. Compare."),
       fp("E.A.: same machine as the commands — but for CARING!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: ask for advice (What should I do?) and give suggestions with the imperative: Stay in bed! Call the doctor! Drink a lot of water! Don’t eat too much sugar! The command machine becomes a caring machine!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Health advisor game! A picks a problem card (toothache? cold? stomachache?), asks: “What should I do?” — B gives TWO suggestions (one affirmative, one negative). The class validates!")],
      [fp("Ask. Advise."),
       pAns("E.A.: I have a stomachache, what should I do? — Drink warm water! Don’t eat street food today!",
        ["Drink warm water!"], { size: SZ.FICHE })],
      "Role play", "Problem/advice cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Your friend has a cold: give two suggestions."),
       fp("2. Your sister has a toothache: one affirmative + one negative suggestion."),
       fp("3. How do you ask for advice?")],
      [fp("Answer."),
       pAns("E.A.: Stay at home! Drink hot tea! — Go to the dentist! Don’t eat sweets! — What should I do?",
        ["What should I do?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(30, TOTAL, meta, rows, "s30");
}
function lessonS30() {
  return [
    p([run("LESSON OF THE DAY — SESSION 30", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SUGGESTIONS TO STAY HEALTHY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("Asking for advice:", { bold: true })], { after: 30 }),
    vocab("What should I do?", "ouate choude aï dou"),
    p([run("The suggestions (imperatives!):", { bold: true })], { after: 30 }),
    vocab("Stay in bed! / Rest!", "stéi inn bède / rèste"),
    vocab("Call the doctor!", "kôl dhe dokteur"),
    vocab("Drink a lot of water!", "drinnk e lote ove ouôteur"),
    vocab("Take your medicine three times a day!", "téik iôr mèdecine thri taïmz e déi"),
    vocab("Wear a warm jacket!", "ouèr e ouorme djakète"),
    vocab("Don’t go to school today!", "dôounte gôou tou skoule toudéi"),
    vocab("Don’t eat too much sugar!", "dôounte ite tou meutch chougueur"),
    p("", { after: 60 }),
    box("THE ADVICE TABLE", [
      bullet([run("A cold → ", { bold: true }), run("Stay warm! Drink hot tea with honey!", { bold: true, color: C.BLUE })]),
      bullet([run("A toothache → ", { bold: true }), run("Go to the dentist! Don’t eat sweets!", { bold: true, color: C.BLUE })]),
      bullet([run("A stomachache → ", { bold: true }), run("Drink warm water! Don’t eat heavy food!", { bold: true, color: C.BLUE })]),
      bullet([run("A fever → ", { bold: true }), run("Rest! Call the doctor if it continues!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GOLDEN RULE", [
      bullet([run("Health first!", { bold: true, color: C.BLUE }), run("  —  says Lova’s mother. The lesson can wait; the body cannot!")], { after: 20 }),
    ]),
  ];
}

// ---------- S31 — Reading: healthy habits + linking words ----------
function ficheS31() {
  const meta = META("Reading: the healthy day of a champion",
    "By the end of the lesson, learners will be able to infer information from a text on healthy habits and identify linking words expressing addition and contrast.",
    "5 / 7", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your friend has a fever: two suggestions!"),
       fp("2. How do you ask for advice?")],
      [fp("Answer."),
       fp("E.A.: Rest! Call the doctor! — What should I do?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title is « The healthy day of a champion ». Predict: what will the champion do? Then share: what healthy habits do YOU already know?")],
      [fp("Predict. Share."),
       fp("E.A.: sport, fruit, sleep, washing hands…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The healthy day of a champion ». By the end of this lesson, you will know Fetra’s secret — and catch the little words that glue her sentences!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text fluently, paragraph by paragraph. Infer from the context: what is “fuel”? what is “injured”? Then answer: 1. What does Fetra do every morning? 2. How many hours does she sleep? 3. INFERENCE: why does she say sleep is her “secret coach”?")],
      [fp("Read. Infer."),
       pAns("E.A.: fuel = the food of the car (l’essence!); injured = hurt. 1. She drinks water and eats a real breakfast. 2. Eight hours. 3. Because sleep repairs the body and ranges the head — it trains her without a whistle!",
        ["Eight hours."], { size: SZ.FICHE })],
      "Repetition drill", "Reading text"),
    stepRow(["4. Analysis (post-reading)"],
      [fp("Linking word hunt! Find in the text: and, also, but, however. Which ones ADD? Which ones CONTRAST? Quote the sentences: “she ALSO trains three times a week”, “BUT she is careful”, “HOWEVER, she drinks very few sugary sodas”. Then check your predictions!")],
      [fp("Hunt. Classify."),
       fp("E.A.: and/also = addition; but/however = contrast.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the champion’s recipe = water + breakfast + walking + sport + hygiene + 8 hours of sleep. And the glue of the text: and, also (addition), but, however (contrast) — the same glue as Unit 1!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Discussion: which habits of Fetra do YOU already practice? Which one will you start this week? One sentence each with a linking word!")],
      [fp("Discuss."),
       pAns("E.A.: I walk to school and I wash my hands, but I sleep only six hours. However, I will try eight!",
        ["but I sleep only six hours"], { size: SZ.FICHE })],
      "Group discussion", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three healthy habits of Fetra."),
       fp("2. Quote one sentence with a contrast linking word."),
       fp("3. What is the gist of the text in one sentence?")],
      [fp("Answer."),
       pAns("E.A.: breakfast, sport, 8 hours of sleep… — “However, she drinks very few sugary sodas.” — A champion is built by daily healthy habits.",
        ["daily healthy habits"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(31, TOTAL, meta, rows, "s31");
}
function lessonS31() {
  return [
    p([run("LESSON OF THE DAY — SESSION 31", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE HEALTHY DAY OF A CHAMPION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("fuel", "fiouel", "the food of the car — l’essence !"),
    vocab("injured", "inndjeurde", "hurt (sport accident)"),
    vocab("to train", "tou tréine", "to practise sport seriously"),
    vocab("a screen", "e skrine", "phone, TV, computer…"),
    p("", { after: 60 }),
    box("THE CHAMPION’S RECIPE", [
      bullet([run("Water in the morning + a real breakfast (fuel!).", { bold: true, color: C.BLUE })]),
      bullet([run("Walking every day and training three times a week.", { bold: true, color: C.BLUE })]),
      bullet([run("Washing hands before meals, brushing teeth after.", { bold: true, color: C.BLUE })]),
      bullet([run("Eight hours of sleep — the secret coach!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GLUE OF THE TEXT (linking words)", [
      bullet([run("Addition: ", { bold: true }), run("and, also — “She walks to school and she also trains.”", { bold: true, color: C.BLUE })]),
      bullet([run("Contrast: ", { bold: true }), run("but, however — “However, she drinks very few sugary sodas.”", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S32 — Culture + interview (pre-writing) ----------
function ficheS32() {
  const meta = META("Healthy here, healthy there — the health interview",
    "By the end of the lesson, learners will be able to compare life hygiene in Madagascar and in Anglophone countries and interview peers about healthy habits.",
    "6 / 7", "interview form");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the champion’s recipe (three elements)."),
       fp("2. One addition linking word, one contrast linking word.")],
      [fp("Answer."),
       fp("E.A.: breakfast, sport, sleep — also; however.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick quiz: at what time do teenagers go to bed in Great Britain, in your opinion? What do they eat at breakfast? Guesses on the board!")],
      [fp("Guess.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a lesson called: « Healthy here, healthy there ». By the end of this lesson, you will compare the healthy habits of two worlds — and collect the habits of the class!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The comparison board: BREAKFAST — Madagascar: rice (vary sosoa!), tea; Great Britain/USA: cereals, milk, eggs, toast. SPORT — here: football, basketball in the yard; there: school teams, swimming pools. WATER — here: the well, boiled water; there: the tap. SLEEP — everywhere: teenagers need 8-9 hours (but phones steal them!).")],
      [fp("Observe. Compare."),
       fp("E.A.: different plates, same needs!")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The big idea: the habits change, the NEEDS are the same — eat well, move, wash, sleep. Discuss: which Malagasy habits are very healthy? (fresh food, walking everywhere!) Which habits can we improve? (boiling water, brushing teeth twice!)")],
      [fp("Discuss."),
       fp("E.A.: our walking is gold! we can improve the water.")],
      "Group discussion", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: compare with respect — no country is “better”, every community has healthy treasures and points to improve. Tool sentence: In Madagascar we…, while in Anglophone countries they…")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (pre-writing interview!)"],
      [fp("THE HEALTH INTERVIEW: with the form, interview two schoolmates: What do you eat in the morning? How many hours do you sleep? How often do you play sport? Do you wash your hands before meals? Keep the forms — they are the fuel of the next session’s writing!")],
      [fp("Interview. Fill the form."),
       pAns("E.A.: Hery eats rice, sleeps 7 hours, plays football every day, washes his hands… sometimes!",
        ["sleeps 7 hours"], { size: SZ.FICHE })],
      "Personalisation technique", "Interview form"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one breakfast difference between Madagascar and Great Britain."),
       fp("2. Give one healthy Malagasy treasure."),
       fp("3. How many hours do teenagers need everywhere?")],
      [fp("Answer."),
       pAns("E.A.: rice here, cereals there. — Walking everywhere, fresh food! — 8-9 hours.",
        ["8-9 hours"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(32, TOTAL, meta, rows, "s32");
}
function lessonS32() {
  return [
    p([run("LESSON OF THE DAY — SESSION 32", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HEALTHY HERE, HEALTHY THERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u4_healthy.png", 400, 768 / 1376),
    box("THE COMPARISON TABLE", [
      bullet([run("Breakfast: ", { bold: true }), run("Madagascar — rice, tea; Anglophone countries — cereals, milk, toast, eggs.", { bold: true, color: C.BLUE })]),
      bullet([run("Sport: ", { bold: true }), run("here — football in the yard; there — school teams and pools.", { bold: true, color: C.BLUE })]),
      bullet([run("Water: ", { bold: true }), run("here — the well, boiled water; there — the tap.", { bold: true, color: C.BLUE })]),
      bullet([run("Sleep: ", { bold: true }), run("everywhere — teenagers need 8-9 hours!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The tool sentence:", { bold: true })], { after: 30 }),
    bullet([...kw("In Madagascar we walk everywhere, while in Anglophone countries they often take the bus.", "inn madegaskâr oui ouôk èvriouèr")]),
    p("", { after: 60 }),
    box("THE BIG IDEA", [
      bullet([run("The plates change, the needs are the same: ", { bold: true }), run("eat well, move, wash, sleep!", { bold: true, color: C.BLUE })]),
      bullet([run("Malagasy treasures: fresh food, walking every day. To improve: boil the water, brush twice!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My interview questions:", { bold: true })], { after: 30 }),
    bullet([run("What do you eat in the morning? How many hours do you sleep? How often do you play sport? Do you wash your hands before meals?", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S33 — Writing: poster + advice paragraph ----------
function ficheS33() {
  const meta = META("Writing: the healthy teenagers campaign",
    "By the end of the lesson, learners will be able to write a paragraph giving advice on a healthy lifestyle and create a campaign poster.",
    "7 / 7", "interview forms of S32, big sheets for posters");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Read one answer from your interview forms."),
       fp("2. The needs that never change?")],
      [fp("Answer."),
       fp("E.A.: Hery sleeps 7 hours… — eat, move, wash, sleep.")],
      "Individual work", "Interview forms"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Look at your interview forms: what is the HEALTH PROBLEM of our class? (not enough sleep? too much soda? hands?) Vote for the campaign target!")],
      [fp("Analyse. Vote."),
       fp("E.A.: our class sleeps too little!")],
      "Group discussion", "Interview forms"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to create « The healthy teenagers campaign ». By the end of this lesson, the walls of the class will give advice in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("A good poster on the board: a BIG slogan (Sleep is your secret coach!), three pieces of advice in imperatives (Switch off at nine! Sleep eight hours! Don’t take the phone to bed!), one drawing. Short, big, clear!")],
      [fp("Observe."),
       fp("E.A.: slogan + 3 imperatives + drawing.")],
      "Using visual aids", "Model poster"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Groups of four: create your poster for the campaign target. THEN each student writes his own paragraph (5 sentences): advice to teenagers with two imperatives, one should-sentence and one linking word.")],
      [fp("Create. Write.")],
      "Group work", "Big sheets"),
    stepRow(["5. Synthesis (post-writing)"],
      [fp("GALLERY WALK! The posters go on the walls. The groups walk, read, and put a star on their favourite. Then two students read their paragraphs aloud.")],
      [fp("Walk. Read. Vote.")], "Gallery walk", "Posters"),
    stepRow(["6. Practice"],
      [fp("The campaign goes home: tonight, give ONE piece of English advice to somebody of your family — and report tomorrow!")],
      [fp("Advise at home."),
       pAns("E.A.: I told my brother: Don’t drink soda at night! He laughed… but he obeyed!",
        ["Don’t drink soda at night!"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected paragraph in your copy-book."),
       fp("2. Underline the imperatives and circle the linking word.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}
function lessonS33() {
  return [
    p([run("LESSON OF THE DAY — SESSION 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — THE HEALTH CAMPAIGN", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE POSTER RECIPE", [
      bullet([run("1. A BIG slogan: ", { bold: true }), run("Sleep is your secret coach!", { bold: true, color: C.BLUE })]),
      bullet([run("2. Three advice imperatives: ", { bold: true }), run("Switch off at nine! Sleep eight hours! Don’t take the phone to bed!", { bold: true, color: C.BLUE })]),
      bullet([run("3. One drawing — big and simple!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PARAGRAPH RECIPE", [
      bullet([run("Sentence 1 — the problem: ", { bold: true }), run("Many teenagers sleep only six hours.", { bold: true, color: C.BLUE })]),
      bullet([run("Sentences 2-4 — the advice: ", { bold: true }), run("two imperatives + one “You should…”.", { bold: true, color: C.BLUE })]),
      bullet([run("Sentence 5 — the reward: ", { bold: true }), run("with one linking word: …and your head will say thank you!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    p("Many teenagers of our class sleep only six hours, and they feel tired at school. Here is my advice. Switch off your phone at nine o’clock! Sleep eight hours every night! You should also drink water instead of soda in the evening. Your body will repair itself, and your head will say thank you — however, your phone will miss you!", { after: 40 }),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 4", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The diseases and the symptoms"),
    bullet([run("the flu, a cold, malaria, a stomachache, a toothache;", { bold: true, color: C.BLUE }), run("  a fever, a headache, a sore throat, a cough, to sneeze, to feel weak.")]),
    bullet([run("I HAVE + disease; MY + body part + ACHES.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Asking about and describing health"),
    bullet([run("What’s the matter? What’s wrong? How are you feeling? Are you OK?", { bold: true, color: C.BLUE })]),
    bullet([run("I feel terrible → I don’t feel well → better → much better → great!", { bold: true, color: C.BLUE })]),
    bullet([run("Care: Poor you! Get well soon! Take care!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The suggestions to stay healthy"),
    bullet([run("What should I do? — Stay in bed! Call the doctor! Drink a lot of water! Don’t play outside!", { bold: true, color: C.BLUE }), run("  (the imperative becomes a caring machine!)")], { after: 100 }),
    sub("4. The healthy habits"),
    bullet([run("breakfast = fuel; sport; washing hands; brushing teeth; 8 hours of sleep = the secret coach!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The glue words"),
    bullet([run("Addition: and, also. Contrast: but, however.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The golden rule"),
    bullet([run("Health first!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 4 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Find the disease: 1. fever + cough + body aches. 2. sneezing + sore throat. 3. pain in the mouth. 4. fever + feeling cold + weakness.")]),
    pAns("Answers: 1. the flu. 2. a cold. 3. a toothache. 4. malaria.", ["malaria"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete: 1. I … a headache. 2. My body … . 3. What’s the …? 4. … well soon!")]),
    pAns("Answers: 1. have. 2. aches. 3. matter. 4. Get.", ["matter"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Give the suggestion (imperative!): 1. (rester au lit) 2. (appeler le docteur) 3. (ne pas jouer dehors) 4. (boire beaucoup d’eau).")]),
    pAns("Answers: 1. Stay in bed! 2. Call the doctor! 3. Don’t play outside! 4. Drink a lot of water!", ["Don’t play outside!"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Join with and / also / but / however: 1. Fetra trains hard. She never plays injured. 2. She eats rice. She eats fruit. 3. He is sick. He wants to go to school.")]),
    pAns("Answers: 1. Fetra trains hard, but she never plays injured. 2. She eats rice and fruit (she also eats fruit). 3. He is sick; however, he wants to go to school.", ["however"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the texts: 1. What must Lova take, and how often? 2. How many hours does Fetra sleep? 3. Quote the golden rule of Lova’s mother.")]),
    pAns("Answers: 1. His medicine, three times a day. 2. Eight hours. 3. “Health first!”", ["Health first!"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s34", "SESSION 34 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: HEALTH", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give five diseases and four symptoms."),
    pAns("E.A.: flu, cold, malaria, toothache, stomachache — fever, headache, cough, sore throat.", ["fever, headache, cough"]),
    p("2. The two machines of the sick body?"),
    pAns("E.A.: I have + disease; my + body part + aches.", ["I have + disease"]),
    p("3. Give three questions to ask about health."),
    pAns("E.A.: What’s the matter? How are you feeling? Do you have a fever?", ["What’s the matter?"]),
    p("4. Recite the thermometer of answers, from bad to good."),
    pAns("E.A.: terrible → not well → a little better → much better → great!", ["much better"]),
    p("5. Your friend has malaria symptoms: what do you say and do?"),
    pAns("E.A.: Poor you! Rest! I will call the doctor — malaria needs the health centre quickly!", ["call the doctor"]),
    p("6. Give four suggestions with imperatives (two negative!)."),
    pAns("E.A.: Stay in bed! Drink water! Don’t play outside! Don’t eat too much sugar!", ["Don’t eat too much sugar!"]),
    p("7. The champion’s recipe: four habits of Fetra."),
    pAns("E.A.: real breakfast, sport, washing hands, eight hours of sleep.", ["eight hours of sleep"]),
    p("8. One sentence of the text with “however”."),
    pAns("E.A.: “However, she drinks very few sugary sodas.”", ["However, she drinks"]),
    p("9. Compare breakfast here and in Anglophone countries."),
    pAns("E.A.: In Madagascar we eat rice, while there they eat cereals and toast.", ["while there they eat cereals"]),
    p("10. The three ingredients of a good campaign poster?"),
    pAns("E.A.: a big slogan, three advice imperatives, one simple drawing.", ["a big slogan"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s35", "SESSION 35 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 4: HEALTH", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Find the disease: 1. fever + cough + body aches 2. sneezing + sore throat 3. pain in the mouth 4. fever + weakness + feeling cold.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete the dialogue: — What’s the …? — I … a headache and my body … . — Poor you! … well soon!")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Give the suggestion: 1. your friend has a cold (affirmative) 2. your sister has a toothache (negative) 3. your brother has a fever (affirmative) 4. your cousin eats only sweets (negative).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Join with and / also / but / however: 1. I wash my hands. I brush my teeth. 2. He trains every day. He is often tired. 3. She eats fruit. She drinks water. 4. I love soda. I drink very little.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (5 sentences): advice to teenagers to stay healthy — with two imperatives, one “You should…” and one linking word.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: the flu / a cold / a toothache / malaria. (1 pt each)", ["malaria"]),
    pAns("Ex.2: matter — have — aches — Get. (1 pt each)", ["aches"]),
    pAns("Ex.3 (models): Drink hot tea! / Don’t eat sweets! / Rest and call the doctor! / Don’t eat only sweets — eat fruit! (1 pt each)", ["Drink hot tea!"]),
    pAns("Ex.4: and (I also brush) — but/however — and (she also drinks) — however/but. (1 pt each)", ["however"]),
    pAns("Ex.5 (model): Many teenagers feel tired at school. Sleep eight hours every night! Don’t take your phone to bed! You should also eat a real breakfast. Your body will thank you, and your marks too! (4 pts: imperatives 2, should 1, linking word + coherence 1)", ["Sleep eight hours every night!"]),
  ];
}

module.exports = function unit4() {
  return [
    ...opening(), pageBreak(),
    ...ficheS27(), pageBreak(), ...lessonS27(), pageBreak(),
    ...ficheS28(), pageBreak(), ...lessonS28(), pageBreak(),
    ...ficheS29(), pageBreak(), ...lessonS29(), pageBreak(),
    ...ficheS30(), pageBreak(), ...lessonS30(), pageBreak(),
    ...ficheS31(), pageBreak(), ...lessonS31(), pageBreak(),
    ...ficheS32(), pageBreak(), ...lessonS32(), pageBreak(),
    ...ficheS33(), pageBreak(), ...lessonS33(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can name the common diseases and their symptoms.",
      "I can use the two machines: I have a headache; my body aches.",
      "I can ask about health: What’s the matter? How are you feeling?",
      "I can describe my health with the thermometer of answers.",
      "I can react with care: Poor you! Get well soon!",
      "I can give suggestions: Stay in bed! Don’t play outside!",
      "I can tell the healthy habits of a champion.",
      "I can compare life hygiene in Madagascar and in Anglophone countries.",
      "I can write advice and create a health campaign poster.",
    ], "NEXT STOP → UNIT 5: THE WEATHER!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
