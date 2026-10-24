// T11 — UNIT 2 — HEALTH ISSUES (7 séances + révision + test) — Sessions 10 à 18 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell,
        rubricBadge, rubricTable } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "B03A2E"; // rouge brique
const SHADE = "FADBD8";
const TOTAL = 86;
const AUDIO = {
  // Liens Drive à insérer dès la création du dossier T11 (MP3 de sauvegarde: manuel-t11/audio/)
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 2 — HEALTH ISSUES", title, slo,
  values: "responsibility, respect for other opinions", session, materials,
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
      new TableRow({ children: [cell(children, {})] }),
    ],
  });
}
function radioDebateBox() {
  const L = (who, text) => bullet([run("— " + who + ": ", { bold: true, color: C.RED }),
    run(text, { bold: true, color: C.BLUE })]);
  return box("HEALTH ON AIR — SHOULD JUNK FOOD LEAVE THE SCHOOL GATES?", [
    L("Presenter", "Good morning! Today’s question: junk food at the school gates — good or bad? Doctor Lala, what do you think?"),
    L("Dr Lala", "In my opinion, it is a real health issue. Fried snacks and sugary drinks every day bring obesity and diabetes."),
    L("Presenter", "Mamy, you are a student. What’s your point of view?"),
    L("Mamy", "I’m afraid I don’t agree, Doctor. The snacks are cheap and we are hungry at ten o’clock!"),
    L("Dr Lala", "That’s true, but cheap today can be expensive tomorrow: a sick body pays a big bill."),
    L("Vero", "I agree with the doctor. As far as I’m concerned, fruit is cheap too — a banana costs less than fried dough!"),
    L("Mamy", "Well… you have a point. Maybe we need both: keep the sellers, but add fruit and clean water."),
    L("Presenter", "So you partly agree! What do you think of his idea, Doctor?"),
    L("Dr Lala", "I totally agree with it. Prevention is better than cure — and it starts at the gate of the lycée!"),
  ]);
}
function readingTextBox() {
  return box("READING TEXT — CLEAN WATER, STRONG BODIES", [
    p("Health is not only a question of hospitals. In Madagascar, many common diseases — diarrhoea, typhoid, parasites — travel in dirty water. The World Health Organization says it clearly: clean water and clean hands prevent more diseases than many medicines.", { after: 60 }),
    p("Prevention is simple and cheap. Wash your hands with soap before eating and after the toilets. Drink safe water: boiled, filtered or treated with Sûr’Eau. Cover the food against the flies, and keep the yard clean to chase the mosquitoes of malaria.", { after: 60 }),
    p("Some people think that prevention is the job of the doctors only. Others believe that every family is the first hospital. In my opinion, the second group is right: a bar of soap at home protects better than a long queue at the clinic.", { after: 60 }),
    p("Health experts agree on one sentence: prevention is better than cure. It costs a few ariary today — and it saves a life tomorrow.", { after: 40 }),
  ]);
}
function opening() {
  return [
    unitBanner("UNIT 2 — HEALTH ISSUES", COLOR, "unit2"),
    p("", { after: 100 }),
    p([run("Your health, your opinion — speak up!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u2_health.png", 440, IMG_RATIO.u2_health),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the big health issues of today: malaria, malnutrition, junk food, stress…;"),
    p("• ask for and give an opinion: What do you think of…? In my opinion…;"),
    p("• listen to a radio debate about junk food at the school gates;"),
    p("• agree and disagree politely: I agree with you — I’m afraid I don’t agree;"),
    p("• build strong arguments with the connectors: moreover, however, therefore;"),
    p("• read about prevention: clean water, strong bodies;"),
    p("• write my first opinion essay — the writing target of the year!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("responsibility, respect for other opinions.")], { after: 160 }),
    rubricTable(
      "Health issues words: disease, malaria, malnutrition, junk food, addiction, stress, prevention, symptom…",
      "Asking for and giving opinion (What do you think of…? In my opinion…); agreeing and disagreeing politely.",
      "Opinion and agreement structures (I agree with… / So do I / Neither do I); the connectors of the opinion essay."
    ),
    p("", { after: 100 }),
    box("WHY THIS UNIT?", [
      p("Malaria at the market, junk food at the gates, stress before the bac: health is everywhere in the conversation! In this unit you learn to say what YOU think — politely, clearly, with strong arguments — and to write it in a real essay. Your voice is a medicine too!", { after: 40 }),
    ]),
  ];
}

// ---------- S10 — Health issues today ----------
function ficheS10() {
  const meta = META("Health issues today — the vocabulary",
    "By the end of the lesson, learners will be able to name and talk about the main health issues of everyday life.",
    "1 / 7", "pictures of health situations");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From Unit 1: offer help to a sick classmate — he declines politely.")],
      [fp("Answer."),
       fp("E.A.: Shall I carry your bag? — No, thank you, I can manage.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Picture flash: a mosquito net, a plate of fried snacks, a tired student with books, a bar of soap. For each picture: which health question is hiding here?")],
      [fp("Guess."),
       fp("E.A.: malaria, junk food, stress, hygiene…")],
      "Using audio-visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Health issues today ». By the end of this lesson, you will talk about the big health questions of Madagascar and of the world.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Word map on the board: HEALTH ISSUES in the middle. Branches: diseases (malaria, diarrhoea, typhoid) — food (malnutrition, junk food, obesity) — mind (stress, addiction) — protection (prevention, hygiene, vaccination). Which words do you already know?")],
      [fp("Observe. Classify."),
       fp("E.A.: malaria and vaccination sound like French — malnutrition too!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The word family of health: a disease (the enemy) — a symptom (the signal: fever, cough) — prevention (the shield) — a cure (the repair). Match: fever → ? mosquito net → ? Note: healthy ✔ / unhealthy ✘ — junk food is unhealthy food!")],
      [fp("Match with the teacher."),
       fp("E.A.: fever → symptom; mosquito net → prevention.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: a health issue is a health problem of the society. We name the disease, we read the symptoms, we choose prevention — because prevention is better than cure!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The health basket: in pairs, students sort word cards into four baskets — diseases / food issues / mind issues / protection. Fastest pair reads its baskets to the class.")],
      [fp("Sort. Read."),
       pAns("E.A.: diseases: malaria, typhoid; food: junk food, malnutrition; mind: stress, addiction; protection: soap, vaccination.",
        ["prevention"], { size: SZ.FICHE })],
      "Pair work — game", "Word cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two diseases carried by dirty water or mosquitoes."),
       fp("2. What is the difference between a symptom and a disease?"),
       fp("3. Give the English for: la prévention vaut mieux que la guérison.")],
      [fp("Answer."),
       pAns("E.A.: malaria, diarrhoea (typhoid). — The symptom is the signal, the disease is the enemy. — Prevention is better than cure.",
        ["Prevention is better than cure."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}
function lessonS10() {
  return [
    p([run("LESSON OF THE DAY — SESSION 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HEALTH ISSUES TODAY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("VOCABULARY"),
    p([run("The big words of health:", { bold: true })], { after: 50 }),
    vocab("a health issue", "e hèlth ichou", "a health problem of the society"),
    vocab("a disease", "e dizize", "the enemy: malaria, typhoid…"),
    vocab("a symptom", "e simpteume", "the signal: fever, cough, headache"),
    vocab("malnutrition", "mal-nioutricheune", "when the body lacks good food"),
    vocab("junk food", "djonk foude", "unhealthy food: too fat, too sweet"),
    vocab("an addiction", "eune edikcheune", "when you cannot stop (alcohol, screens…)"),
    vocab("stress", "strèsse", "the pressure of the mind"),
    vocab("prevention", "privèncheune", "the shield: soap, nets, vaccination"),
    vocab("a cure", "e kioure", "the repair: medicine, treatment"),
    vocab("healthy / unhealthy", "hèlthi / eune-hèlthi", "good / bad for the body"),
    p("", { after: 60 }),
    box("THE FOUR BASKETS", [
      bullet([run("Diseases — ", { bold: true }), run("malaria, diarrhoea, typhoid", { bold: true, color: C.BLUE })]),
      bullet([run("Food issues — ", { bold: true }), run("malnutrition, junk food, obesity", { bold: true, color: C.BLUE })]),
      bullet([run("Mind issues — ", { bold: true }), run("stress, addiction", { bold: true, color: C.BLUE })]),
      bullet([run("Protection — ", { bold: true }), run("hygiene, vaccination, the mosquito net", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RESPONSIBILITY CORNER", [
      p("The golden sentence of this unit: Prevention is better than cure. A bar of soap costs a few ariary; a week at the hospital costs a zebu. Choose the soap!", { after: 40 }),
    ]),
  ];
}

// ---------- S11 — Asking for and giving opinion ----------
function ficheS11() {
  const meta = META("Asking for and giving an opinion",
    "By the end of the lesson, learners will be able to ask for somebody’s opinion and give their own opinion about a health topic.",
    "2 / 7", "topic cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give two words of each basket: disease — food issue — protection.")],
      [fp("Answer."),
       fp("E.A.: malaria, typhoid — junk food, malnutrition — soap, vaccination.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Hot question: “Energy drinks are good for students.” Thumbs up if you think YES, thumbs down if NO. Look around: we do not all think the same — and that is the point of today!")],
      [fp("Vote with the thumbs.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Asking for and giving an opinion ». By the end of this lesson, you will say what you think — like a radio guest!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model mini-dialogue on the board: — What do you think of junk food? — In my opinion, it is dangerous. — And you? What’s your point of view? — As far as I’m concerned, one snack a week is OK. Underline: which sentences ASK? which sentences GIVE?")],
      [fp("Observe. Underline."),
       fp("E.A.: ask: What do you think of…? What’s your point of view?; give: In my opinion…, As far as I’m concerned…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Two toolboxes: 1. ASK: What do you think of…? What’s your opinion about…? How do you feel about…?; 2. GIVE: I think (that)… / In my opinion… / From my point of view… / As far as I’m concerned… / I believe (that)… Watch out: In my opinion + comma + sentence — never “according to me”!")],
      [fp("Build the toolboxes."),
       fp("E.A.: ask box and give box; according to me ✘.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to ask → What do you think of…?; to give → In my opinion… / I believe that… Always add a reason: …because…! An opinion without a reason is an empty basket.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Opinion ping-pong: topic cards (energy drinks — sport at school — smoking — ten hours of screens). One student asks, the other gives an opinion WITH a reason, then they swap.")],
      [fp("Ask. Give. Swap."),
       pAns("E.A.: What do you think of energy drinks? — In my opinion, they are bad for teenagers, because sugar excites the heart.",
        ["In my opinion"], { size: SZ.FICHE })],
      "Pair work", "Topic cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask for my opinion about stress before the exams."),
       fp("2. Give your opinion about junk food — with a reason."),
       fp("3. Correct: According to me, sport is important.")],
      [fp("Answer."),
       pAns("E.A.: What do you think of stress before the exams, Sir? — In my opinion, junk food is dangerous because… — In my opinion, sport is important.",
        ["What do you think of"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(11, TOTAL, meta, rows, "s11");
}
function lessonS11() {
  return [
    p([run("LESSON OF THE DAY — SESSION 11", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING FOR AND GIVING AN OPINION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    p([run("1. To ask for an opinion:", { bold: true })], { after: 50 }),
    vocab("What do you think of…?", "ouate dou iou think ove", "the classic question"),
    vocab("What’s your opinion about…?", "ouatse iour opinieune ebaoute", ""),
    vocab("What’s your point of view?", "ouatse iour poïnte ove viou", ""),
    vocab("How do you feel about…?", "haou dou iou file ebaoute", "the soft question"),
    p("", { after: 60 }),
    p([run("2. To give an opinion:", { bold: true })], { after: 50 }),
    vocab("I think (that)…", "aï think dhate", ""),
    vocab("In my opinion, …", "ine maï opinieune", "+ comma + sentence"),
    vocab("From my point of view, …", "frome maï poïnte ove viou", ""),
    vocab("As far as I’m concerned, …", "aze fare aze aïme konseurnde", "the elegant opener"),
    vocab("I believe (that)…", "aï bilive dhate", "strong and serious"),
    p("", { after: 60 }),
    box("THE GOLDEN RULE OF OPINION", [
      bullet([run("opinion + reason: ", { bold: true, color: C.RED }),
        run("In my opinion, junk food is dangerous, because sugar and oil attack the body.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• According to me ✘ — In my opinion ✔;"),
    p("• According to the doctor ✔ (according to + ANOTHER person)."),
  ];
}

// ---------- S12 — Listening: the radio debate ----------
function ficheS12() {
  const meta = META("Listening: Health on air — the junk food debate",
    "By the end of the lesson, learners will be able to give the gist and detailed information of a radio debate and identify the opinions of the speakers.",
    "3 / 7", "audio (QR code) or dialogue read aloud, picture of a radio studio");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give two expressions to ask an opinion and two to give an opinion.")],
      [fp("Answer."),
       fp("E.A.: What do you think of…? What’s your point of view? — In my opinion…, I believe that…")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe the picture: a radio studio, a presenter, a doctor, two students with microphones. What is the programme about? Predict with the title: “Should junk food leave the school gates?”")],
      [fp("Describe. Predict."),
       fp("E.A.: a debate about the snacks at school…")],
      "Using audio-visual aids", "Picture of the studio"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Health on air ». By the end of this lesson, you will catch who thinks what — and why.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: how many speakers? what is the question of the day? Second listening — the details: 1. What does Dr Lala think of junk food? 2. Why does Mamy disagree at the start? 3. What is Vero’s argument? 4. What is Mamy’s final idea?")],
      [fp("Listen. Answer."),
       pAns("E.A.: four speakers; junk food at the school gates. 1. It is a real health issue (obesity, diabetes). 2. The snacks are cheap and students are hungry. 3. Fruit is cheap too — a banana costs less. 4. Keep the sellers but add fruit and clean water.",
        ["a real health issue"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listening hunt: hands up when you hear… an opinion opener! (In my opinion, As far as I’m concerned) — an agreement! (I agree with, I totally agree) — a polite disagreement! (I’m afraid I don’t agree) — a partial agreement! (That’s true, but…; you have a point).")],
      [fp("Listen. React.")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("The map of the debate: question → opinion + reason → disagreement + reason → partial agreement → common solution. A good debate is not a war: it is a walk towards the best idea!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Four students replay the debate with the text — voice of the presenter, calm voice of the doctor! Then new round WITHOUT the text: same roles, your own words.")],
      [fp("Act. Improvise."),
       pAns("E.A.: — In my opinion, fried snacks are dangerous… — I’m afraid I don’t agree!…",
        ["I’m afraid I don’t agree!"], { size: SZ.FICHE })],
      "Role play", "Audio / QR"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Who finally agrees with the doctor’s idea of prevention?"),
       fp("2. Quote the proverb of the doctor."),
       fp("3. Give one partial agreement heard in the debate.")],
      [fp("Answer."),
       pAns("E.A.: Mamy (and Vero). — “Prevention is better than cure.” — “That’s true, but…” / “you have a point”.",
        ["Prevention is better than cure."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(12, TOTAL, meta, rows, "s12");
}
function lessonS12() {
  return [
    p([run("LESSON OF THE DAY — SESSION 12", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HEALTH ON AIR — THE RADIO DEBATE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    radioDebateBox(),
    p("", { after: 60 }),
    p([run("The map of a good debate:", { bold: true })], { after: 50 }),
    bullet([run("1. The question — ", { bold: true }), run("Should junk food leave the school gates?", { bold: true, color: C.BLUE })]),
    bullet([run("2. Opinion + reason — ", { bold: true }), run("In my opinion…, because…", { bold: true, color: C.BLUE })]),
    bullet([run("3. Polite disagreement — ", { bold: true }), run("I’m afraid I don’t agree…", { bold: true, color: C.BLUE })]),
    bullet([run("4. Partial agreement — ", { bold: true }), run("That’s true, but… / You have a point.", { bold: true, color: C.BLUE })]),
    bullet([run("5. The common solution — ", { bold: true }), run("Maybe we need both!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S13 — Agreeing and disagreeing ----------
function ficheS13() {
  const meta = META("Agreeing and disagreeing politely",
    "By the end of the lesson, learners will be able to express total agreement, partial agreement and polite disagreement, and echo an opinion with So do I / Neither do I.",
    "4 / 7", "statement cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From the debate: who says “I’m afraid I don’t agree” — and about what?")],
      [fp("Answer."),
       fp("E.A.: Mamy, about banning the snacks.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Echo game: I say “I love sport!” — the students who love it too answer in chorus: So do I! I say “I don’t smoke.” — chorus: Neither do I! Three more sentences, faster and faster.")],
      [fp("Echo in chorus."),
       fp("E.A.: So do I! / Neither do I!")],
      "Chain game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Agreeing and disagreeing ». By the end of this lesson, you will say yes, no and yes-but — always politely!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The thermometer of agreement on the board: 100% I totally agree with you — 70% I agree with you — 50% That’s true, but… / You have a point, but… — 30% I’m afraid I don’t agree — 0% I completely disagree. Where is the politeness? Everywhere!")],
      [fp("Observe the thermometer."),
       fp("E.A.: even at 0% we stay polite: I completely disagree — never “You are stupid”!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The echo rule: positive sentence → So + auxiliary + I (I love fruit. — So do I. / I am tired. — So am I.); negative sentence → Neither + auxiliary + I (I don’t smoke. — Neither do I. / I can’t swim. — Neither can I.). The auxiliary copies the sentence!")],
      [fp("Build the rule."),
       fp("E.A.: So do I / So am I / Neither do I / Neither can I — the auxiliary follows.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: agree → I (totally) agree with you / So do I; disagree politely → I’m afraid I don’t agree / I see your point, but…; echo → So + aux + I, Neither + aux + I.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Agreement tennis: statement cards (Sport is the best medicine. — Smoking should be banned everywhere. — Energy drinks help the memory. — I don’t eat at the gates.). One reads, the other answers with the thermometer or the echo — then explains WHY.")],
      [fp("Read. React. Explain."),
       pAns("E.A.: Smoking should be banned. — I totally agree with you, because the smoke attacks the lungs of everybody.",
        ["I totally agree"], { size: SZ.FICHE })],
      "Pair work — game", "Statement cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Echo: “I am worried about malaria.”"),
       fp("2. Echo: “I don’t drink energy drinks.”"),
       fp("3. Disagree politely with: “Stress is good for the exams.”")],
      [fp("Answer."),
       pAns("E.A.: So am I. — Neither do I. — I’m afraid I don’t agree: a little stress wakes us up, but too much stress blocks the memory.",
        ["Neither do I."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  return [
    p([run("LESSON OF THE DAY — SESSION 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("AGREEING AND DISAGREEING", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    p([run("The thermometer of agreement:", { bold: true })], { after: 50 }),
    vocab("I totally agree with you.", "aï tôouteli egri ouidh iou", "100%"),
    vocab("I agree with you.", "aï egri ouidh iou", "70%"),
    vocab("That’s true, but…", "dhatse trou, bate", "50% — the yes-but"),
    vocab("You have a point, but…", "iou have e poïnte, bate", "50%"),
    vocab("I’m afraid I don’t agree.", "aïme efréide aï dôounte egri", "30% — polite no"),
    vocab("I completely disagree.", "aï komplitli dissegri", "0% — still polite!"),
    p("", { after: 60 }),
    rubricBadge("GRAMMAR"),
    box("THE ECHO RULE — SO / NEITHER + AUXILIARY + I", [
      bullet([run("I love fruit. — ", { bold: true, color: C.BLUE }), run("So do I.", { bold: true, color: C.RED })]),
      bullet([run("I am tired. — ", { bold: true, color: C.BLUE }), run("So am I.", { bold: true, color: C.RED })]),
      bullet([run("I don’t smoke. — ", { bold: true, color: C.BLUE }), run("Neither do I.", { bold: true, color: C.RED })]),
      bullet([run("I can’t swim. — ", { bold: true, color: C.BLUE }), run("Neither can I.", { bold: true, color: C.RED })]),
      bullet([run("→ the auxiliary copies the sentence!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RESPECT CORNER", [
      p("We attack the idea, never the person. “I completely disagree with this idea” is English; “you are stupid” is not a debate — it is the end of the debate!", { after: 40 }),
    ]),
  ];
}

// ---------- S14 — The connectors of the essay ----------
function ficheS14() {
  const meta = META("The connectors of the opinion essay",
    "By the end of the lesson, learners will be able to link arguments with the connectors of addition, contrast, cause and conclusion.",
    "5 / 7", "connector cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Echo me: “I am for school sport.” — “I don’t like fried snacks.”")],
      [fp("Answer."),
       fp("E.A.: So am I. — Neither do I.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Broken message: I write four sentences in disorder — “Junk food is cheap. It is dangerous. Fruit gives vitamins. We should choose fruit.” — Something is missing between the sentences… what?")],
      [fp("Observe."),
       fp("E.A.: the links — the words that glue!")],
      "Problem-solving", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The connectors of the essay ». By the end of this lesson, your arguments will walk in line — like a good marching band!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model paragraph on the board: “First of all, junk food is cheap. However, it is dangerous, because it brings obesity. Moreover, fruit gives vitamins. Therefore, we should choose fruit. In conclusion, our health is in our plate.” Circle the first word of each sentence: what is its job?")],
      [fp("Observe. Circle."),
       fp("E.A.: they open, they oppose, they add, they conclude…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The four families: ADDITION: moreover, in addition, also; CONTRAST: however, but, on the other hand; CAUSE/RESULT: because, since, therefore, as a result; ORDER/CONCLUSION: first of all, secondly, finally, in conclusion. Watch out: However + comma; because + sentence of reason.")],
      [fp("Classify the connectors."),
       fp("E.A.: four families — addition, contrast, cause/result, order.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: first of all → I open; moreover → I add; however → I oppose; therefore → I conclude the logic; in conclusion → I close the essay. Five soldiers, one army: your argument!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Connector lottery: each pair draws four connector cards and builds a mini-paragraph (4 sentences) about ONE topic: sport at school / clean water / sleep before the exams.")],
      [fp("Draw. Build. Read."),
       pAns("E.A.: First of all, sleep repairs the brain. Moreover, it protects the memory. However, many students sleep at midnight. Therefore, we should switch off the phones at nine!",
        ["Therefore"], { size: SZ.FICHE })],
      "Pair work — game", "Connector cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one connector of addition and one of contrast."),
       fp("2. Link: “Malaria is dangerous” + “we sleep under a net” (result)."),
       fp("3. Open and close an essay: which two connectors?")],
      [fp("Answer."),
       pAns("E.A.: moreover — however. — Malaria is dangerous; therefore, we sleep under a net. — First of all… In conclusion…",
        ["therefore"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LESSON OF THE DAY — SESSION 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CONNECTORS OF THE ESSAY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("GRAMMAR"),
    p([run("The four families:", { bold: true })], { after: 50 }),
    bullet([run("ADDITION — ", { bold: true, color: C.RED }), run("moreover, in addition, also", { bold: true, color: C.BLUE })]),
    bullet([run("CONTRAST — ", { bold: true, color: C.RED }), run("however, but, on the other hand", { bold: true, color: C.BLUE })]),
    bullet([run("CAUSE / RESULT — ", { bold: true, color: C.RED }), run("because, since, therefore, as a result", { bold: true, color: C.BLUE })]),
    bullet([run("ORDER / CONCLUSION — ", { bold: true, color: C.RED }), run("first of all, secondly, finally, in conclusion", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE MODEL PARAGRAPH", [
      p([run("First of all, ", { bold: true, color: C.RED }), run("junk food is cheap. "),
         run("However, ", { bold: true, color: C.RED }), run("it is dangerous, "),
         run("because ", { bold: true, color: C.RED }), run("it brings obesity. "),
         run("Moreover, ", { bold: true, color: C.RED }), run("fruit gives vitamins. "),
         run("Therefore, ", { bold: true, color: C.RED }), run("we should choose fruit. "),
         run("In conclusion, ", { bold: true, color: C.RED }), run("our health is in our plate.")], { after: 40 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• However, + comma — it opposes two SENTENCES;"),
    p("• because + the reason (no comma before it in the middle);"),
    p("• one connector per sentence is enough — do not pile them up!"),
  ];
}

// ---------- S15 — Reading: clean water, strong bodies ----------
function ficheS15() {
  const meta = META("Reading: Clean water, strong bodies",
    "By the end of the lesson, learners will be able to read a text about prevention, find the gist and the details, and identify the opinions in the text.",
    "6 / 7", "reading text (one per pair if possible)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the four families of connectors with one example each.")],
      [fp("Answer."),
       fp("E.A.: addition: moreover; contrast: however; cause/result: therefore; conclusion: in conclusion.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Quick survey: what do you do at home to stay healthy? Collect three habits on the board.")],
      [fp("Answer freely."),
       fp("E.A.: we boil the water, we wash the hands, we sleep under the net…")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a text called: « Clean water, strong bodies ». By the end of this lesson, you will defend prevention with facts!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First reading — the gist: what is the main idea? Second reading — the details: 1. Give two diseases that travel in dirty water. 2. Give three ways to make the water safe. 3. What do “some people” think, and what do “others” believe? 4. Which group does the author choose?")],
      [fp("Read. Answer."),
       pAns("E.A.: prevention protects better than cure. 1. Diarrhoea, typhoid. 2. Boiled, filtered, treated with Sûr’Eau. 3. Prevention is for doctors only / every family is the first hospital. 4. The second group.",
        ["every family is the first hospital"], { size: SZ.FICHE })],
      "Individual reading", "Reading text"),
    stepRow(["4. Analysis"],
      [fp("Opinion hunt: find in the text… one opinion opener (In my opinion) — one verb of opinion (think, believe) — one proverb (Prevention is better than cure). Then find two connectors!")],
      [fp("Hunt in the text."),
       fp("E.A.: In my opinion; think/believe; Prevention is better than cure; and “Some… Others…”.")],
      "Scanning technique", "Reading text"),
    stepRow(["5. Synthesis (post-reading)"],
      [fp("The text is a mini opinion essay: facts (diseases, water) → two camps (some think… others believe…) → the author’s opinion (In my opinion…) → the conclusion (the proverb). Keep this skeleton for Session 16!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Prevention poster in pairs: three DO-sentences from the text (Wash… Drink… Cover…) + one opinion sentence + one proverb. The best poster goes on the wall!")],
      [fp("Write the poster."),
       pAns("E.A.: Wash your hands with soap! … In my opinion, soap is the cheapest doctor. Prevention is better than cure!",
        ["the cheapest doctor"], { size: SZ.FICHE })],
      "Pair work", "Posters"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false: the text says medicines are useless."),
       fp("2. Quote the sentence of the World Health Organization."),
       fp("3. What protects “better than a long queue at the clinic”?")],
      [fp("Answer."),
       pAns("E.A.: False — prevention prevents MORE, but medicines stay useful. — “clean water and clean hands prevent more diseases than many medicines”. — A bar of soap at home.",
        ["A bar of soap"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LESSON OF THE DAY — SESSION 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("CLEAN WATER, STRONG BODIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    rubricBadge("VOCABULARY"),
    p([run("Glossary:", { bold: true })], { after: 50 }),
    vocab("to prevent", "tou privènte", "to stop the disease BEFORE it comes"),
    vocab("safe water", "séife ouateur", "water you can drink without danger"),
    vocab("to boil", "tou boïle", "to heat until the bubbles"),
    vocab("soap", "sôoupe", "the cheapest doctor!"),
    vocab("a queue", "e kiou", "a line of waiting people"),
    p("", { after: 60 }),
    box("THE SKELETON OF THE TEXT — KEEP IT!", [
      bullet([run("1. The facts — ", { bold: true }), run("diseases travel in dirty water.", { bold: true, color: C.BLUE })]),
      bullet([run("2. The two camps — ", { bold: true }), run("Some people think… Others believe…", { bold: true, color: C.BLUE })]),
      bullet([run("3. The author’s opinion — ", { bold: true }), run("In my opinion, the second group is right.", { bold: true, color: C.BLUE })]),
      bullet([run("4. The conclusion — ", { bold: true }), run("Prevention is better than cure.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S16 — Writing: my opinion essay ----------
function ficheS16() {
  const meta = META("Writing: my first opinion essay",
    "By the end of the lesson, learners will be able to write a short opinion essay (introduction, two arguments, conclusion) about a health issue.",
    "7 / 7", "essay plan on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the four steps of the skeleton of the reading text.")],
      [fp("Answer."),
       fp("E.A.: facts — two camps — the author’s opinion — the conclusion.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Topic vote: “Junk food should leave the school gates” OR “Sport should be daily at the lycée”. The class votes; each student keeps the topic he/she prefers.")],
      [fp("Vote. Choose.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My first opinion essay » — the writing target of the whole year! By the end of this lesson, you will have a complete essay of three paragraphs.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The house of the essay on the board: ① INTRODUCTION — present the issue + announce your opinion (In my opinion…); ② BODY — argument 1 (First of all… because…) + argument 2 (Moreover…) + the other camp (However, some people think…); ③ CONCLUSION — In conclusion + your opinion again + one proverb or one call (Let’s…!).")],
      [fp("Observe the plan."),
       fp("E.A.: three floors: introduction, body, conclusion.")],
      "Guided observation", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Students write the first draft (8 to 12 lines) with the plan and the checklist: ① opinion opener ② two arguments with connectors ③ one However for the other camp ④ one echo of the opinion in the conclusion. I walk and help — draft first, beauty later!")],
      [fp("Write the first draft.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Peer check: exchange the drafts. Tick: opinion? connectors? However? conclusion? One missing → kind note in the margin!")],
      [fp("Check the neighbour’s draft."),
       fp("E.A.: “Strong arguments! But I don’t see the However…”")],
      "Peer correction", "Checklists"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Final copy. Three volunteers read their essay like radio editorials — the class answers with the thermometer: I totally agree! / That’s true, but…")],
      [fp("Read. React."),
       pAns("E.A.: In my opinion, sport should be daily, because a strong body carries a strong mind…",
        ["a strong body carries a strong mind"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the introduction (two sentences) of the OTHER topic: present the issue + announce your opinion.")],
      [fp("Write."),
       pAns("E.A.: Every morning, fried snacks wait for us at the school gates. In my opinion, they should leave, because our health is more precious than their price.",
        ["In my opinion"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(16, TOTAL, meta, rows, "s16");
}
function lessonS16() {
  return [
    p([run("LESSON OF THE DAY — SESSION 16", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY FIRST OPINION ESSAY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    box("THE HOUSE OF THE ESSAY", [
      bullet([run("① INTRODUCTION — ", { bold: true }), run("present the issue + In my opinion…", { bold: true, color: C.BLUE })]),
      bullet([run("② BODY — ", { bold: true }), run("First of all + argument 1… Moreover + argument 2… However, some people think…", { bold: true, color: C.BLUE })]),
      bullet([run("③ CONCLUSION — ", { bold: true }), run("In conclusion + opinion again + a proverb or a call: Let’s…!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Model essay (short): Should junk food leave the school gates?", { bold: true })], { after: 50 }),
    p("Every morning, fried snacks and sugary drinks wait for us at the school gates. In my opinion, junk food should leave, because our health is in danger.", { after: 60 }),
    p("First of all, junk food brings obesity and diabetes, since it is too fat and too sweet. Moreover, a banana or a mango costs less than fried dough and gives real vitamins. However, some people think the sellers help hungry students — that’s true, but fruit can feed us better for the same price.", { after: 60 }),
    p("In conclusion, I believe that fruit and clean water should replace junk food at our gates. Prevention is better than cure — let’s start at the gate of our lycée!", { after: 80 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• one paragraph = one floor of the house (skip a line between floors);"),
    p("• the opinion appears TWICE: in the introduction and in the conclusion;"),
    p("• always give the other camp one sentence — then answer it!"),
  ];
}

// ---------- The big lesson ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 2", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The health issues"),
    bullet([run("Diseases: malaria, diarrhoea, typhoid — food: malnutrition, junk food — mind: stress, addiction — protection: hygiene, vaccination.", { bold: true, color: C.BLUE })]),
    bullet([run("The golden proverb: ", { bold: true }), run("Prevention is better than cure.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Asking for and giving an opinion"),
    bullet([run("Ask: ", { bold: true }), run("What do you think of…? What’s your point of view?", { bold: true, color: C.BLUE })]),
    bullet([run("Give: ", { bold: true }), run("In my opinion… / As far as I’m concerned… / I believe that… + because!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Agreeing and disagreeing"),
    bullet([run("The thermometer: ", { bold: true }), run("I totally agree — That’s true, but… — I’m afraid I don’t agree — I completely disagree.", { bold: true, color: C.BLUE })]),
    bullet([run("The echo: ", { bold: true }), run("So do I / So am I — Neither do I / Neither can I.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The connectors of the essay"),
    bullet([run("Addition: moreover — contrast: however — cause/result: because, therefore — order: first of all, in conclusion.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The opinion essay"),
    bullet([run("The house: ", { bold: true }), run("introduction (issue + opinion) — body (two arguments + However…) — conclusion (opinion again + a call).", { bold: true, color: C.BLUE })], { after: 100 }),
  ];
}

// ---------- Exercises ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Sort into the four baskets (disease / food issue / mind issue / protection): typhoid — junk food — vaccination — addiction — malaria — malnutrition — mosquito net — stress.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Give: 1. a question to ask an opinion 2. an opinion about energy drinks with a reason 3. the correction of “According to me, sport is good.” 4. a polite disagreement.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Echo with So or Neither: 1. I love fruit. 2. I am afraid of malaria. 3. I don’t smoke. 4. I can’t stay without my phone.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Place the connectors (first of all / moreover / however / in conclusion): “…, sleep repairs the brain. …, it protects the memory. …, many students sleep after midnight. …, let’s switch off the phones at nine!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write the introduction and the conclusion (two sentences each) of an essay: “Sport should be daily at the lycée.”")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: diseases: typhoid, malaria; food: junk food, malnutrition; mind: addiction, stress; protection: vaccination, mosquito net. (0.5 pt each)", ["malaria"]),
    pAns("Exercise 2 (models): What do you think of…? — In my opinion, energy drinks are bad for teenagers, because sugar excites the heart. — In my opinion, sport is good. — I’m afraid I don’t agree. (1 pt each)", ["In my opinion"]),
    pAns("Exercise 3: So do I. — So am I. — Neither do I. — Neither can I. (1 pt each)", ["Neither can I."]),
    pAns("Exercise 4: First of all — Moreover — However — In conclusion. (1 pt each)", ["However"]),
    pAns("Exercise 5: introduction = issue + In my opinion…; conclusion = In conclusion + opinion again + a call. (2 pts + 2 pts)", ["In conclusion"]),
  ];
}

// ---------- Revision (S17) ----------
function revision() {
  return [
    B.bookmarkTitle("s17", "SESSION 17 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 2: HEALTH ISSUES", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give two diseases, two food issues and two protections."),
    pAns("E.A.: malaria, typhoid — junk food, malnutrition — soap, vaccination.", ["vaccination"]),
    p("2. What is the difference between a symptom and a disease?"),
    pAns("E.A.: the symptom is the signal (fever), the disease is the enemy (malaria).", ["the signal"]),
    p("3. Ask for my opinion about stress — two different questions."),
    pAns("E.A.: What do you think of stress? — How do you feel about stress?", ["What do you think of"]),
    p("4. Give your opinion about junk food with a reason."),
    pAns("E.A.: In my opinion, junk food is dangerous, because it is too fat and too sweet.", ["because"]),
    p("5. Correct: According to me, water is life."),
    pAns("E.A.: In my opinion, water is life.", ["In my opinion"]),
    p("6. The thermometer: give 100%, 50% and a polite 30%."),
    pAns("E.A.: I totally agree — That’s true, but… — I’m afraid I don’t agree.", ["I’m afraid I don’t agree"]),
    p("7. Echo: “I am for daily sport.” — “I don’t drink sugary drinks.”"),
    pAns("E.A.: So am I. — Neither do I.", ["So am I."]),
    p("8. Give one connector of each family: addition, contrast, result, conclusion."),
    pAns("E.A.: moreover — however — therefore — in conclusion.", ["therefore"]),
    p("9. Give the three floors of the house of the essay."),
    pAns("E.A.: introduction — body (two arguments + However) — conclusion.", ["introduction"]),
    p("10. Quote the golden proverb of the unit — and explain it in one sentence."),
    pAns("E.A.: Prevention is better than cure — the soap of today saves the hospital of tomorrow.", ["Prevention is better than cure"]),
  ];
}

// ---------- Test paper (S18) ----------
function testPaper() {
  return [
    B.bookmarkTitle("s18", "SESSION 18 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T11 TEST PAPER — UNIT 2: HEALTH ISSUES", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with: symptom — prevention — junk food — addiction. 1. Fever is a … of malaria. 2. Fried snacks are … . 3. The mosquito net is a tool of … . 4. He cannot leave his phone: it is an … .")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("1. Ask your friend’s opinion about school sport. 2. Give your opinion with a reason. 3. Agree partially with “Energy drinks help the students”. 4. Disagree politely with “Stress is always bad”.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Echo with So or Neither: 1. I love vegetables. 2. I am tired today. 3. I don’t eat at the gates. 4. I can’t sleep before an exam.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Link with the right connector (moreover / however / therefore / first of all): “…, clean water protects the family. …, soap kills the microbes. …, some people forget to wash their hands. …, let’s put soap near every door!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Opinion essay (8 to 12 lines): “Junk food should leave the school gates.” Checklist: introduction with In my opinion — two arguments with connectors — one However for the other camp — conclusion with a call.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: symptom — junk food — prevention — addiction. (1 pt each)", ["prevention"]),
    pAns("Ex.2 (models): What do you think of school sport? — In my opinion, it should be daily, because a strong body carries a strong mind. — That’s true, but sugar excites the heart. — I’m afraid I don’t agree: a little stress wakes us up! (1 pt each)", ["That’s true, but"]),
    pAns("Ex.3: So do I. — So am I. — Neither do I. — Neither can I. (1 pt each)", ["So do I."]),
    pAns("Ex.4: First of all — Moreover — However — Therefore. (1 pt each)", ["Moreover"]),
    pAns("Ex.5: house complete (introduction 1 pt, two arguments with connectors 1 pt, However 1 pt, conclusion with a call 1 pt).", ["However"]),
  ];
}

const IMG_RATIO = { u2_health: 768 / 1376 };

module.exports = function unit2() {
  return [
    ...opening(), pageBreak(),
    ...ficheS10(), pageBreak(), ...lessonS10(), pageBreak(),
    ...ficheS11(), pageBreak(), ...lessonS11(), pageBreak(),
    ...ficheS12(), pageBreak(), ...lessonS12(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(), pageBreak(),
    ...ficheS16(), pageBreak(), ...lessonS16(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 2", COLOR, [
      "I can name the big health issues: malaria, malnutrition, junk food, stress.",
      "I can ask for an opinion: What do you think of…?",
      "I can give my opinion with a reason: In my opinion…, because…",
      "I can agree and disagree politely: I totally agree — I’m afraid I don’t agree.",
      "I can echo an opinion: So do I! — Neither do I!",
      "I can link my arguments: first of all, moreover, however, therefore.",
      "I can read a text about prevention and find the opinions inside.",
      "I can write a complete opinion essay: introduction, body, conclusion.",
    ], "NEXT STOP → UNIT 3: MASS MEDIA!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
