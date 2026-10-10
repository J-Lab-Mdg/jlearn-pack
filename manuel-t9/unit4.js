// T9 — UNIT 4 — HEALTHY LIFE (10 séances + révision + test) — Sessions 33 à 44 / 68
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "148F77"; // vert émeraude
const SHADE = "D0ECE7";
const TOTAL = 68;
const AUDIO = {
  doctor: "https://drive.google.com/uc?export=download&id=12o7Y3IKH6_i2T5lIhMDImRaBsvCE9SbC",
  stress: "https://drive.google.com/uc?export=download&id=19AFVs2giaNv19PKnPn-bVIsCg9HrrfDe",
  kate: "https://drive.google.com/uc?export=download&id=12FBCUCyor8bZBCok-717liZsPkAq1HHH",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 4 — HEALTHY LIFE", title, slo,
  values: "respect of life, responsibility", session, materials,
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
function doctorDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("AT THE DOCTOR’S (listening passage)", [
    L("Vavisoa", "Good afternoon, Dr Dadakoto."),
    L("Dr Dadakoto", "Good afternoon. How are you today?"),
    L("Vavisoa", "I’m under the weather. I’m sick as a dog."),
    L("Dr Dadakoto", "What specifically do you feel? What are your symptoms?"),
    L("Vavisoa", "I feel pain and dizziness."),
    L("Dr Dadakoto", "Here, take these leaves and boil them. Then, drink the water three times a day. It is good for your problem. You’ll feel better tomorrow."),
    L("Vavisoa", "Thank you!"),
  ]);
}
function stressTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("TEEN STRESS (listening passage)", [
    L("Teenagers today live in a very competitive world. It is more important than ever to succeed at school if they hope to have a chance in the job market afterwards. It’s no wonder that many young people worry about letting down their parents, their peers and themselves."),
    L("To try to please everyone, they take on too many tasks until it becomes harder and harder to balance homework assignments, parties, sports activities and friends. The result is that young people suffer from stress."),
    L("There are two ways to deal with stress: physical exercise is a good release for stress, because it increases certain chemicals in the brain which calm you down. And you have to get enough sleep to avoid stress and to stay healthy and full of energy."),
  ]);
}
function kateLetterBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("A LETTER OF HEALTH ADVICE (listening passage)", [
    L("Dear Kate,"),
    L("I’m writing in response to your letter which asked me for health advice. Here is some advice you should follow in order to keep fit:"),
    L("Every morning, you should do 5 minutes of sports, like skipping or running. Then you should eat a healthy breakfast like milk with banana. Lunch should be your main meal of the day, but it should be salad or fruit with only a little meat. You can take a 20-minute rest in the afternoon if you are tired."),
    L("Then dinner should not be too late and should be lighter than lunch and mainly vegetables. In the evening, you should turn off phone and computer two hours before bed time. You should go to bed no later than 11 o’clock and should not sleep with your phone in the same room. Your room should have heavy curtains and be very dark for sleeping."),
    L("With love, Ninah"),
  ]);
}
function celebsTextBox() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  const N = (t) => p([run(t, { bold: true, color: COLOR, size: SZ.BODY })], { after: 30 });
  return box("HOW CELEBRITIES DE-STRESS (reading text)", [
    L("Are you starting to feel the pressure of exams or just life in general? Is the stress getting you down? This document shares some celebrity-approved de-stressing tips that might just help you chill out. Here is how your favourite stars keep their stress under control."),
    N("Justin Bieber"),
    L("In a fan interview, Justin said his favourite way to relax is to “watch movies and hang out with my friends.”"),
    N("Kylie Jenner"),
    L("It’s all about music and alone time for Kylie Jenner when she gets stressed. “I put my headphones in and just sit by myself and listen, or find a quiet space,” she said. “Every time I start to get worked up over something I just think to myself: is this really going to matter tomorrow, in an hour, in a year? You just can’t get stressed about the little things.”"),
    N("Angelina Jolie"),
    L("Colouring books for adults have become more and more popular, and someone who knows the benefits is Angelina Jolie. She likes to de-stress by “sitting on the floor with the kids with a colouring book for an hour, or going on the trampoline. You do something you love, that makes you happy, and that gives you your meditation.”"),
    N("Michelle Obama"),
    L("The former First Lady sings the praises of exercise for helping her stay calm: “If I’m ever feeling tense or stressed or like I’m about to have a meltdown, I’ll put on my iPod and head to the gym or out on a bike ride.”"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 4 — HEALTHY LIFE", COLOR, "unit4"),
    p("", { after: 100 }),
    p([run("You are what you eat!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_healthy.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• talk about illnesses, symptoms, traditional and modern cures;"),
    p("• use health idioms: under the weather, sick as a dog, you are what you eat;"),
    p("• agree and disagree politely: I totally agree. / I’m afraid I disagree;"),
    p("• compare cures: cheaper, more effective, the best;"),
    p("• talk about stress and emotional health — and how to get out of stress;"),
    p("• use relative pronouns: who, which, that, whose;"),
    p("• give health advice with should — like a real doctor;"),
    p("• imagine with If-clause type 2: If I were the Minister of Health…;"),
    p("• read how celebrities de-stress, and write my own healthy-life paragraphs!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect of life, responsibility.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Your body is your house for life — there is no spare one! In this unit, you learn the English of health: saying how you feel, asking for advice, giving advice, and keeping your body AND your mind in great shape.", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u6_doctor.png", label: "At the doctor’s — listen and repeat", url: AUDIO.doctor },
      { qr: "qr_t9_u6_stress.png", label: "Teen stress — listen and answer", url: AUDIO.stress },
      { qr: "qr_t9_u6_kate.png", label: "Dear Kate — health advice letter", url: AUDIO.kate },
    ], COLOR),
  ];
}

// ---------- S33 — Listening: at the doctor's ----------
function ficheS33() {
  const meta = META("Listening: at the doctor’s — illnesses and traditional cures",
    "By the end of the lesson, learners will be able to comprehend a dialogue about health, name illnesses and symptoms, and talk about traditional cures.",
    "1 / 10", "audio (QR code) or dialogue read aloud");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Report: “I am close to my grandmother,” said Soa."),
       fp("2. Don’t have to or mustn’t? “You … smoke.”")],
      [fp("Answer."),
       fp("E.A.: Soa said she was close to her grandmother; mustn’t.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Tell the class how you feel today! I feel great / tired / sick… Have you ever been really sick? Who cured you?")],
      [fp("Share."),
       fp("E.A.: I feel great! Last year I had a fever, my grandmother gave me a home remedy.")],
      "Personalization technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a dialogue at the doctor’s: Vavisoa does not feel well, and Dr Dadakoto has a very TRADITIONAL remedy!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening, two questions: How does Vavisoa feel generally? What are the exact symptoms?")],
      [fp("Listen. Answer."),
       fp("E.A.: she is under the weather, very sick; she feels pain and dizziness.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening: What remedy did Dr Dadakoto give to Vavisoa? How long will it take for this remedy to work? Is Vavisoa likely to follow this advice?")],
      [fp("Listen. Answer."),
       pAns("E.A.: boil the leaves and drink the water three times a day; she’ll feel better tomorrow; yes — she says thank you!",
        ["three times a day"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("The illness words: illness, symptom, pain, dizziness, fever, cough, headache. Traditional cures = home remedies (leaves, honey and lemon…); modern cures = tablets, hospital. “To be good for”: honey and lemon are good for treating cough!")],
      [fp("Listen. Repeat. Copy.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Role play the dialogue in pairs — one doctor, one patient. Then switch! Change the symptom and the remedy.")],
      [fp("Act."),
       pAns("E.A.: — I have a terrible cough. — Take honey and lemon, it is good for treating cough!",
        ["honey and lemon"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name two symptoms and one home remedy."),
       fp("2. What are honey and lemon good for?")],
      [fp("Answer."),
       pAns("E.A.: pain, dizziness; boiled leaves; treating cough.",
        ["treating cough"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(33, TOTAL, meta, rows, "s33");
}
function lessonS33() {
  return [
    p([run("LESSON OF THE DAY — SESSION 33", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("AT THE DOCTOR’S", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_doctor.png", 400, 768 / 1376),
    doctorDialogueBox(),
    p("", { after: 60 }),
    p([run("The health words:", { bold: true })], { after: 50 }),
    vocab("an illness", "ane ilnèsse", "when you are sick"),
    vocab("a symptom", "e simmpteume", "the sign of the illness"),
    vocab("pain", "péïne", "when it hurts"),
    vocab("dizziness", "dizinèsse", "when the head turns"),
    vocab("a fever", "e fiveur", "the body is too hot"),
    vocab("a cough", "e kof", "khof khof!"),
    vocab("a home remedy", "e hôoume rèmedi", "a traditional cure made at home"),
    p("", { after: 60 }),
    box("TRADITIONAL OR MODERN?", [
      bullet([run("Traditional cures = home remedies:", { bold: true, color: C.BLUE }), run(" boiled leaves, honey and lemon…")]),
      bullet([run("Modern cures:", { bold: true, color: C.BLUE }), run(" tablets, injections, the hospital.")]),
      bullet([run("To be good for:", { bold: true, color: C.BLUE }), run("  Honey and lemon are good for treating cough.", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u6_doctor.png", label: "At the doctor’s — listen and role play", url: AUDIO.doctor }], COLOR),
  ];
}

// ---------- S34 — Health idioms + agreement/disagreement ----------
function ficheS34() {
  const meta = META("Health idioms — agreeing and disagreeing",
    "By the end of the lesson, learners will be able to use health idioms and express agreement or disagreement on traditional and modern cures.",
    "2 / 10", "idiom cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What were Vavisoa’s symptoms?"),
       fp("2. What was the remedy?")],
      [fp("Answer."),
       fp("E.A.: pain and dizziness; boiled leaves, three times a day.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In the dialogue, Vavisoa said two strange things: “I’m under the weather” and “I’m sick as a dog”. Under the weather?! Sick as a DOG?! What can they mean?")],
      [fp("Guess."),
       fp("E.A.: not feeling well; very sick!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Health idioms — agree or disagree? ». By the end of this lesson, you will speak about health like a native — and debate politely!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Match the idiom cards with their meanings: sick as a dog / under the weather / you are what you eat / you’ll be better in no time / I’m at death’s door / feeling queasy.")],
      [fp("Match."),
       fp("E.A.: very sick; not feeling well; healthy food = healthy you; better soon; very sick (humorous!); feeling ill.")],
      "Pair work", "Idiom cards"),
    stepRow(["4. Analysis"],
      [fp("Now the debate machine: Do you agree with Dr Dadakoto? Do you agree on traditional cures? — I totally agree on it. / I don’t agree. / I disagree with you. Find more expressions through brainstorming!")],
      [fp("Brainstorm."),
       fp("E.A.: You’re right! / Exactly! / I’m afraid I disagree. / I don’t think so.")],
      "Brainstorming", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the six idioms + the agreement box (Do you agree with/on…? I totally agree. I disagree with you.) — always polite, never angry!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mini debate in groups: “Traditional cures are better than modern cures.” Half the group agrees, half disagrees — use the idioms and the polite expressions!")],
      [fp("Debate."),
       pAns("E.A.: I totally agree — home remedies are cheaper! / I’m afraid I disagree: for a serious illness, you must see a doctor!",
        ["I totally agree"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What does “you are what you eat” mean?"),
       fp("2. Disagree politely with: “Tablets are always the best.”")],
      [fp("Answer."),
       pAns("E.A.: if you eat healthy, you will feel healthy; I’m afraid I disagree with you — home remedies can help too!",
        ["if you eat healthy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(34, TOTAL, meta, rows, "s34");
}
function lessonS34() {
  return [
    p([run("LESSON OF THE DAY — SESSION 34", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HEALTH IDIOMS — AGREE OR DISAGREE?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE SIX HEALTH IDIOMS", [
      bullet([...kw("sick as a dog", "sik aze e dog"), run("  = very sick")]),
      bullet([...kw("under the weather", "eunndeur dhe ouèdheur"), run("  = not feeling well")]),
      bullet([...kw("you are what you eat", "iou ar ouot iou ite"), run("  = if you eat healthy, you will feel healthy")]),
      bullet([...kw("you’ll be better in no time", "ioul bi bèteur inn nôou taïme"), run("  = better soon")]),
      bullet([...kw("I’m at death’s door", "aïme ate dèths dor"), run("  = very sick (humorous!)")]),
      bullet([...kw("feeling queasy", "filinng kouizi"), run("  = feeling ill")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("AGREEING AND DISAGREEING (politely!)", [
      bullet([run("Ask: ", { bold: true }), run("Do you agree with (someone)? Do you agree on (something)?", { bold: true, color: C.BLUE })]),
      bullet([run("Agree: ", { bold: true }), run("I totally agree on it! You’re right! Exactly!", { bold: true, color: C.GREEN })]),
      bullet([run("Disagree: ", { bold: true }), run("I don’t agree. / I disagree with you. / I’m afraid I disagree.", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My debate examples:", { bold: true })], { after: 50 }),
    bullet([run("— Do you agree on traditional cures? — I totally agree: they are cheap and natural!", { bold: true, color: C.BLUE })]),
    bullet([run("— I’m afraid I disagree with you. For a serious illness, modern medicine is safer.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S35 — Comparatives and superlatives ----------
function ficheS35() {
  const meta = META("Comparing cures: comparatives and superlatives",
    "By the end of the lesson, learners will be able to use comparatives and superlatives to compare traditional and modern cures and present their views orally.",
    "3 / 10", "comparison chart");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two health idioms."),
       fp("2. Agree with: “Sport is good for health.”")],
      [fp("Answer."),
       fp("E.A.: under the weather, sick as a dog; I totally agree on it!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Remember Unit 2! Which is healthier: rice or cassava? Who makes the best romazava in your family?")],
      [fp("Answer."),
       fp("E.A.: Rice is healthier… My grandmother makes the best romazava!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Comparatives and superlatives — the cures edition ». By the end of this lesson, you will compare remedies like an expert!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Home remedies are CHEAPER than tablets. Modern medicine is MORE EFFECTIVE for serious illnesses. Sleep is THE BEST medicine of all! Good → better → the best; bad → worse → the worst.")],
      [fp("Observe. Compare.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine, short vs long adjectives: short → -er / the -est (cheap, cheaper, the cheapest); long → more / the most (effective, more effective, the most effective); irregulars: good-better-best, bad-worse-worst.")],
      [fp("Build sentences."),
       fp("E.A.: Honey is sweeter than sugar! The hospital is the most modern cure.")],
      "Pair work", "Chart"),
    stepRow(["5. Synthesis"],
      [fp("So: -er/-est for short adjectives, more/most for long ones, and the famous irregulars. Than after a comparative; the before a superlative!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Oral presentation in groups: compare traditional and modern cures (price, speed, safety) with three comparatives and one superlative — then present your view: which do you prefer, and why?")],
      [fp("Prepare. Present."),
       pAns("E.A.: Home remedies are cheaper and more natural, but modern medicine is faster. In my opinion, the best solution is to use both wisely!",
        ["the best solution"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Compare: home remedies / tablets (price)."),
       fp("2. Superlative: “Sleep is … medicine of all.” (good)")],
      [fp("Answer."),
       pAns("E.A.: Home remedies are cheaper than tablets; the best.",
        ["cheaper than"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}
function lessonS35() {
  return [
    p([run("LESSON OF THE DAY — SESSION 35", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMPARATIVES AND SUPERLATIVES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE COMPARISON MACHINE", [
      bullet([run("Short adjective → -er / the -est:", { bold: true }), run("  cheap → cheaper than → the cheapest", { bold: true, color: C.BLUE })]),
      bullet([run("Long adjective → more / the most:", { bold: true }), run("  effective → more effective than → the most effective", { bold: true, color: C.BLUE })]),
      bullet([run("Irregulars:", { bold: true, color: C.RED }), run("  good → better → the best;  bad → worse → the worst", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The cures face to face:", { bold: true })], { after: 50 }),
    bullet([run("Home remedies are cheaper and more natural than tablets.", { bold: true, color: C.BLUE })]),
    bullet([run("Modern medicine is faster and more effective for serious illnesses.", { bold: true, color: C.BLUE })]),
    bullet([run("Sleep is the best medicine of all — and it is free!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE TWO LITTLE WORDS", [
      bullet([run("THAN after a comparative:", { bold: true }), run(" cheaper THAN tablets.")]),
      bullet([run("THE before a superlative:", { bold: true }), run(" THE best medicine.")], { after: 20 }),
    ]),
  ];
}

// ---------- S36 — Listening: teen stress ----------
function ficheS36() {
  const meta = META("Listening: teen stress — emotional health",
    "By the end of the lesson, learners will be able to comprehend an oral passage about teenage stress and identify the two ways to deal with it.",
    "4 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Compare: traditional cures / modern cures (one sentence)."),
       fp("2. Good, better, … ?")],
      [fp("Answer."),
       fp("E.A.: Traditional cures are cheaper than modern cures; the best.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Quick question: when do YOU feel stressed? Before a test? The difficult words first: a release from stress, the job market, to let someone down, to take on a task, to balance work and play — in context!")],
      [fp("Share. Guess the words."),
       fp("E.A.: to let someone down = to disappoint them; to balance = to keep equal time for both.")],
      "Personalization technique", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a passage about TEEN STRESS — why young people today feel pressure, and the two scientific ways to fight it!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening, one question: what is the main problem of teenagers in this passage?")],
      [fp("Listen. Answer."),
       fp("E.A.: they suffer from stress — too many tasks, too much pressure.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening, details: 1. Why is school success so important today? 2. Who are young people afraid of letting down? 3. What do they take on too many of? 4. What are the TWO ways to deal with stress?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. to have a chance in the job market. 2. their parents, their peers and themselves. 3. tasks. 4. physical exercise and enough sleep!",
        ["physical exercise and enough sleep!"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("So: competition → fear of letting people down → too many tasks → stress. Remedies: exercise (it increases chemicals in the brain which calm you down!) and sleep (energy!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Tell the class: is your life the same as in the passage? What do YOU do to deal with stress — is it one of the two ways?")],
      [fp("Share."),
       pAns("E.A.: Yes! I play football after school — physical exercise calms me down.",
        ["physical exercise calms me down"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Why does exercise calm you down?"),
       fp("2. What does “to let someone down” mean?")],
      [fp("Answer."),
       pAns("E.A.: it increases certain chemicals in the brain; to disappoint someone.",
        ["chemicals in the brain"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: TEEN STRESS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    stressTextBox(),
    p("", { after: 60 }),
    p([run("New words of the passage:", { bold: true })], { after: 50 }),
    vocab("stress", "strèsse", "pressure in the mind"),
    vocab("a release from stress", "e rilisse fromm strèsse", "something that frees you from stress"),
    vocab("the job market", "dhe djob markète", "where people find work"),
    vocab("to let someone down", "tou lète someoueune daoune", "to disappoint someone"),
    vocab("to take on a task", "tou téïk onne e taske", "to accept a job to do"),
    vocab("to balance work and play", "tou balannce oueurk annde pléï", "equal time for both"),
    p("", { after: 60 }),
    box("THE TWO ANTI-STRESS WEAPONS", [
      bullet([run("1. Physical exercise", { bold: true, color: C.GREEN }), run(" — it increases certain chemicals in the brain which calm you down.")]),
      bullet([run("2. Enough sleep", { bold: true, color: C.GREEN }), run(" — to stay healthy and full of energy.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u6_stress.png", label: "Teen stress — listen and answer", url: AUDIO.stress }], COLOR),
  ];
}

// ---------- S37 — Relative pronouns ----------
function ficheS37() {
  const meta = META("Relative pronouns: who, which, that, whose",
    "By the end of the lesson, learners will be able to use relative pronouns as subject, object and possessive, and complete a guided practice.",
    "5 / 10", "sentence cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What are the two ways to deal with stress?"),
       fp("2. Use “to let someone down” in a sentence.")],
      [fp("Answer."),
       fp("E.A.: exercise and sleep; I don’t want to let my parents down.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("In the stress passage we heard: “chemicals in the brain WHICH calm you down”. Which?! What is this little word doing?")],
      [fp("Guess."),
       fp("E.A.: it connects the chemicals to what they do — like a bridge!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Relative pronouns ». By the end of this lesson, you will glue two sentences into one — like a professional!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: I talk to someone WHO listens to me. I watch a movie WHICH makes me laugh. The friend THAT I called is coming. That is the boy WHOSE father is a doctor.")],
      [fp("Observe. Compare.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: WHO → for people; WHICH → for things; THAT → for both (common in speech); WHOSE → possession (his/her → whose). Subject or object: The doctor WHO cured me (subject) / The doctor (WHO/THAT) I saw (object).")],
      [fp("Build sentences."),
       fp("E.A.: Sport is an activity which calms me down. My friend whose mother is a nurse helps me.")],
      "Pair work", "Sentence cards"),
    stepRow(["5. Synthesis"],
      [fp("So: who = people, which = things, that = both, whose = possession. The relative pronoun is the glue between two sentences!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guided practice, complete with your own ideas: “What do you do when you have a problem that you can’t handle?” — I talk to someone who … / I watch a movie which … / I have a friend whose …")],
      [fp("Complete. Share."),
       pAns("E.A.: I talk to someone who understands me. I watch a movie which makes me laugh. I have a friend whose advice is always good!",
        ["who understands me"], { size: SZ.FICHE })],
      "Pair work", "Exercise books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Who, which or whose? “The nurse … helped me is kind.” / “A remedy … works fast.” / “The girl … brother is sick.”"),
       fp("2. Glue into one: “I have a friend. He plays football.”")],
      [fp("Answer."),
       pAns("E.A.: who; which; whose; I have a friend who plays football.",
        ["who; which; whose"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("RELATIVE PRONOUNS: WHO, WHICH, THAT, WHOSE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE GLUE WORDS", [
      bullet([run("WHO → people:", { bold: true }), run("  I talk to someone who listens to me.", { bold: true, color: C.BLUE })]),
      bullet([run("WHICH → things:", { bold: true }), run("  I watch a movie which makes me laugh.", { bold: true, color: C.BLUE })]),
      bullet([run("THAT → people AND things:", { bold: true }), run("  The friend that I called is coming.", { bold: true, color: C.BLUE })]),
      bullet([run("WHOSE → possession:", { bold: true }), run("  That is the boy whose father is a doctor.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Subject or object?", { bold: true })], { after: 50 }),
    bullet([run("Subject:", { bold: true }), run(" The doctor "), run("who cured me", { bold: true, color: C.GREEN }), run(" is famous. (who does the action)")]),
    bullet([run("Object:", { bold: true }), run(" The doctor "), run("(who/that) I saw", { bold: true, color: C.GREEN }), run(" is famous. (I do the action)")]),
    p("", { after: 60 }),
    p([run("The gluing trick:", { bold: true })], { after: 50 }),
    bullet([run("I have a friend. + He plays football. → I have a friend ", {}), run("who", { bold: true, color: C.RED }), run(" plays football.")]),
    bullet([run("Sleep is a remedy. + It costs nothing. → Sleep is a remedy ", {}), run("which", { bold: true, color: C.RED }), run(" costs nothing.")]),
  ];
}

// ---------- S38 — Emotional health: what makes you happy? ----------
function ficheS38() {
  const meta = META("Emotional health: what makes you happy?",
    "By the end of the lesson, learners will be able to express feelings and share ideas that positively influence emotional health.",
    "6 / 10", "feeling pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Who, which or whose? “A friend … helps you is a treasure.”"),
       fp("2. Glue: “I like music. It calms me down.”")],
      [fp("Answer."),
       fp("E.A.: who; I like music which calms me down.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Share with your friends: what makes YOU happy? A song? A meal? A person?")],
      [fp("Share."),
       fp("E.A.: Playing with my little brother makes me happy!")],
      "Personalization technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Emotional health ». Health is not only the body — the mind needs care too!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The feeling pictures: to be stressed, to be afraid of, to be sad, to be happy, to be angry. And the action verbs: to worry, to keep calm, to calm down, to be joyful, to get out of stress / trouble.")],
      [fp("Name the feelings."),
       fp("E.A.: She is stressed. He is afraid of the dark. They are joyful!")],
      "Using visual aids", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("The two golden questions: What makes you happy? What do you do when you are sad / angry / stressed? Build your answers with the verbs — and a relative pronoun if you can!")],
      [fp("Ask. Answer."),
       fp("E.A.: When I am angry, I keep calm and breathe. Music is the thing which calms me down!")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: name the feeling (I am stressed), then act (I calm down, I talk to someone who listens, I do something joyful). Never stay alone with a big worry!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview three classmates: What do you do when you have problems? Note their best ideas and report to the class.")],
      [fp("Interview. Report."),
       pAns("E.A.: Hanta talks to her mother. Jao plays football to get out of stress. Vola sings — she is the most joyful!",
        ["to get out of stress"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What do you do when you are stressed? (one sentence)"),
       fp("2. Give two “keep calm” verbs.")],
      [fp("Answer."),
       pAns("E.A.: I listen to music which calms me down; to keep calm, to calm down.",
        ["calms me down"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("EMOTIONAL HEALTH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The feelings (to be + adjective):", { bold: true })], { after: 50 }),
    vocab("to be stressed", "tou bi strèste", "pressure in the mind"),
    vocab("to be afraid of", "tou bi efréïde ove", "fear"),
    vocab("to be sad", "tou bi sade", "☹"),
    vocab("to be happy", "tou bi hapi", "☺"),
    vocab("to be angry", "tou bi anngri", "grrr!"),
    p("", { after: 60 }),
    p([run("The action verbs:", { bold: true })], { after: 50 }),
    vocab("to worry", "tou oueuri", "to think too much about a problem"),
    vocab("to keep calm / to calm down", "tou kipe kame / tou kame daoune", "stay peaceful"),
    vocab("to be joyful", "tou bi djoïfoule", "full of joy"),
    vocab("to get out of stress / trouble", "tou guète aoute ove strèsse", "to escape from it"),
    p("", { after: 60 }),
    box("THE TWO GOLDEN QUESTIONS", [
      bullet([run("What makes you happy?", { bold: true, color: C.BLUE }), run("  — Playing with my cousins makes me happy!")]),
      bullet([run("What do you do when you are sad?", { bold: true, color: C.BLUE }), run("  — I talk to someone who listens to me.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MIND DOCTOR’S ADVICE", [
      p("A healthy life = a healthy body AND a healthy mind. When a worry is too big, never keep it alone: talk to a person who loves you — family first!", { after: 40 }),
    ]),
  ];
}

// ---------- S39 — Listening: Dear Kate — advice with should ----------
function ficheS39() {
  const meta = META("Listening: a letter of health advice — should",
    "By the end of the lesson, learners will be able to comprehend a letter of health advice and give advice to be healthy with should.",
    "7 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What makes you happy?"),
       fp("2. One sentence with “whose”.")],
      [fp("Answer."),
       fp("E.A.: Music makes me happy; my friend whose house is near helps me.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Share your tips: what do YOU do to keep yourself healthy? One tip each!")],
      [fp("Share."),
       fp("E.A.: I drink a lot of water! I walk to school every day!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a LETTER: Kate asked her friend Ninah for health advice — and Ninah’s answer is a full healthy day, from morning to night!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening, one question: what is the letter about, and who wrote it?")],
      [fp("Listen. Answer."),
       fp("E.A.: health advice to keep fit; Ninah wrote it to Kate.")],
      "Whole-class work", "Audio / QR"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening, the healthy day: 1. What should Kate do every morning? 2. What breakfast? 3. Which meal should be the main one? 4. How long can the afternoon rest be? 5. What should she turn off in the evening — and when? 6. What time should she go to bed?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. 5 minutes of sports (skipping, running). 2. milk with banana. 3. lunch — salad or fruit with a little meat. 4. 20 minutes. 5. phone and computer, two hours before bedtime. 6. no later than 11 o’clock — no phone in the room!",
        ["two hours before bedtime"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("The advice machine: You SHOULD + verb (a good idea!) / You SHOULD NOT + verb. Dinner should be LIGHTER than lunch — a comparative inside advice!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("In pairs, give three pieces of advice to a classmate who is always tired — with should / should not.")],
      [fp("Advise."),
       pAns("E.A.: You should go to bed earlier. You should do five minutes of sport. You shouldn’t sleep with your phone!",
        ["You should go to bed earlier."], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What should Kate eat for breakfast?"),
       fp("2. Give one evening advice from the letter.")],
      [fp("Answer."),
       pAns("E.A.: milk with banana; turn off phone and computer two hours before bedtime.",
        ["milk with banana"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LESSON OF THE DAY — SESSION 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("DEAR KATE — HEALTH ADVICE WITH SHOULD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    kateLetterBox(),
    p("", { after: 60 }),
    box("NINAH’S HEALTHY DAY (summary)", [
      bullet([run("Morning:", { bold: true }), run(" 5 minutes of sports + healthy breakfast (milk with banana).")]),
      bullet([run("Noon:", { bold: true }), run(" lunch = main meal — salad or fruit, a little meat.")]),
      bullet([run("Afternoon:", { bold: true }), run(" a 20-minute rest if tired.")]),
      bullet([run("Evening:", { bold: true }), run(" light dinner, mainly vegetables; screens OFF two hours before bed.")]),
      bullet([run("Night:", { bold: true }), run(" in bed before 11; no phone in the room; a very dark room.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE ADVICE MACHINE", [
      bullet([run("You should + verb", { bold: true, color: C.GREEN }), run(" = it is a good idea:  You should eat a healthy breakfast.")]),
      bullet([run("You should not (shouldn’t) + verb", { bold: true, color: C.RED }), run(" :  You shouldn’t sleep with your phone.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u6_kate.png", label: "Dear Kate — listen to the letter", url: AUDIO.kate }], COLOR),
  ];
}

// ---------- S40 — If-clause type 2 ----------
function ficheS40() {
  const meta = META("If I were the Minister of Health… — If-clause type 2",
    "By the end of the lesson, learners will be able to use If-clause type 2 to talk about hypothetical situations and deliver a short presentation.",
    "8 / 10", "minister role cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Two pieces of advice from Ninah’s letter."),
       fp("2. Should or shouldn’t? “You … skip breakfast.”")],
      [fp("Answer."),
       fp("E.A.: do 5 minutes of sport, go to bed before 11; shouldn’t.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Dream a little: if you had one million ariary for the health of your village, what would you buy?")],
      [fp("Dream. Answer."),
       fp("E.A.: I would buy medicine for the clinic!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « If-clause type 2 » — the grammar of imagination and dreams, for things NOT possible in the present!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: If I WERE the Minister of Health, I WOULD build more hospitals. If people SLEPT more, they WOULD be less stressed. — Were?! Slept?! But it is about today!")],
      [fp("Observe. React.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: If + PAST SIMPLE, … WOULD + verb. It is a dream, not the real past! Special guest: with BE, we say “If I were…” for all persons. Compare with type 1: If I eat well, I will be strong (real) vs If I were a doctor, I would help (dream).")],
      [fp("Build sentences."),
       fp("E.A.: If I were rich, I would build a clinic. If we had a sports field, we would train every day.")],
      "Pair work", "----"),
    stepRow(["5. Synthesis"],
      [fp("So: If + past simple → would + verb. Type 2 = imagination, dream, not possible in the present time. If I WERE (always were!).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Simulation! You are the Minister of Health of Madagascar for five minutes: deliver a short presentation — “If I were the Minister of Health, I would… ” — three measures to keep Malagasy people healthy!")],
      [fp("Prepare. Present."),
       pAns("E.A.: If I were the Minister of Health, I would build clinics in every village, I would give free medicine to children, and I would create sports fields in all schools!",
        ["If I were the Minister of Health"], { size: SZ.FICHE })],
      "Simulation", "Role cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: “If I … (be) a doctor, I … (cure) everyone for free.”"),
       fp("2. Type 1 or type 2? “If I were you, I would rest.”")],
      [fp("Answer."),
       pAns("E.A.: were, would cure; type 2 — a hypothetical situation!",
        ["were, would cure"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LESSON OF THE DAY — SESSION 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("IF-CLAUSE TYPE 2 — THE GRAMMAR OF DREAMS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DREAM MACHINE", [
      bullet([run("If + PAST SIMPLE , … WOULD + verb", { bold: true, color: C.RED, size: SZ.BODY })]),
      bullet([run("If I were the Minister of Health, I would build more hospitals.", { bold: true, color: C.BLUE })]),
      bullet([run("If people slept more, they would be less stressed.", { bold: true, color: C.BLUE })]),
      bullet([run("With BE: always “If I WERE…” — If I were you, I would rest!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Type 1 vs type 2 — do not mix them!", { bold: true })], { after: 50 }),
    bullet([run("Type 1 (real, possible):", { bold: true, color: C.GREEN }), run("  If I eat well, I will be strong.")]),
    bullet([run("Type 2 (dream, not possible now):", { bold: true, color: C.RED }), run("  If I were a doctor, I would cure everyone for free.")]),
    p("", { after: 60 }),
    p([run("My minister speech:", { bold: true })], { after: 50 }),
    bullet([run("If I were the Minister of Health, I would build clinics in every village.", { bold: true, color: C.BLUE })]),
    bullet([run("I would give free medicine to children under five.", { bold: true, color: C.BLUE })]),
    bullet([run("And if every school had a sports field, students would be healthier and happier!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S41 — Reading: celebrity de-stress tips ----------
function ficheS41() {
  const meta = META("Reading: how celebrities de-stress",
    "By the end of the lesson, learners will be able to infer information about healthy life from a reading passage and complete a chart.",
    "9 / 10", "the text, the chart");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: “If I … (have) a bike, I … (ride) to school.”"),
       fp("2. One anti-stress weapon?")],
      [fp("Answer."),
       fp("E.A.: had, would ride; physical exercise (or sleep!).")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Share with each other: what do YOU do to relax? Now guess: what do CELEBRITIES do to relax? The new words first: chill out, hang out, get worked up, have a meltdown, head to the gym, put on headphones, colouring book, trampoline, meditation — in context!")],
      [fp("Share. Guess. Learn the words.")],
      "Pair work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read how four world stars keep their stress under control — are their tips so different from ours? Let’s check your predictions!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the whole text silently, then read it aloud by paragraphs. Were your predictions right?")],
      [fp("Read. Check predictions.")],
      "Whole-class work", "The text"),
    stepRow(["4. Analysis"],
      [fp("Read the text and fill the chart: Celebrity → How does he/she relax? (Justin Bieber / Kylie Jenner / Angelina Jolie / Michelle Obama)")],
      [fp("Fill the chart."),
       pAns("E.A.: Bieber — watches movies and hangs out with friends; Jenner — headphones, music, alone time; Jolie — colouring book with the kids, trampoline; Obama — iPod, gym or bike ride.",
        ["colouring book"], { size: SZ.FICHE })],
      "Group work", "Chart"),
    stepRow(["5. Synthesis"],
      [fp("Notice: all the tips are simple and cheap — music, friends, exercise, play! And Kylie’s question is pure wisdom: “Is this really going to matter tomorrow, in a year?”")],
      [fp("Listen. Discuss.")], "Whole-class work", "----"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Tell the class what you think about ONE celebrity’s tip: do you agree with it? Would it work for you — here in Madagascar?")],
      [fp("Give opinions."),
       pAns("E.A.: I agree with Michelle Obama — exercise is the best! If I had headphones like Kylie, I would use music too.",
        ["exercise is the best!"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. How does Angelina Jolie de-stress?"),
       fp("2. What does “to have a meltdown” mean?")],
      [fp("Answer."),
       pAns("E.A.: colouring book with her kids, or the trampoline; to lose control because of stress.",
        ["to lose control"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(41, TOTAL, meta, rows, "s41");
}
function lessonS41() {
  return [
    p([run("LESSON OF THE DAY — SESSION 41", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: HOW CELEBRITIES DE-STRESS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    celebsTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("to chill out", "tou tchile aoute", "to relax completely"),
    vocab("to hang out (with)", "tou hanng aoute", "to spend free time with friends"),
    vocab("to get worked up", "tou guète oueurkte eup", "to become more and more stressed"),
    vocab("to have a meltdown", "tou have e mèltdaoune", "to lose control because of stress"),
    vocab("to head to the gym", "tou hède tou dhe djime", "to go to the gym"),
    vocab("to put on headphones", "tou poute onne hèdfôounze", "music in your ears!"),
    vocab("a colouring book", "e keulerinng bouk", "a book to colour"),
    vocab("meditation", "mèditéïcheune", "calm, deep thinking"),
    p("", { after: 60 }),
    box("THE CHART (fill it from the text!)", [
      bullet([run("Justin Bieber → ", { bold: true }), run("watches movies, hangs out with friends", { color: C.GRAY, italic: true })]),
      bullet([run("Kylie Jenner → ", { bold: true }), run("headphones, music, alone time", { color: C.GRAY, italic: true })]),
      bullet([run("Angelina Jolie → ", { bold: true }), run("colouring book with the kids, trampoline", { color: C.GRAY, italic: true })]),
      bullet([run("Michelle Obama → ", { bold: true }), run("iPod, gym, bike ride", { color: C.GRAY, italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S42 — Writing: my healthy life ----------
function ficheS42() {
  const meta = META("Writing: paragraphs on how to maintain a healthy life",
    "By the end of the lesson, learners will be able to write cohesive paragraphs on how to maintain a healthy life and answer Kate’s letter.",
    "10 / 10", "interview notes, exercise books");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How does Michelle Obama stay calm?"),
       fp("2. One sentence with “should” + one with “If I were…”.")],
      [fp("Answer."),
       fp("E.A.: gym or bike ride; You should sleep more; If I were you, I would rest.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Interview your neighbour to complete your information: What do you eat? What sport do you do? How many hours do you sleep? What do you do to de-stress? Organize your ideas: body / food / sleep / mind.")],
      [fp("Interview. Organize ideas.")],
      "Pair work", "Interview notes"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE: paragraphs on how to maintain a healthy life — and a letter in answer to Kate’s, like Ninah did!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The toolbox on the board: should/shouldn’t, comparatives (lighter than…), relative pronouns (an activity which…), If type 2 (If I were you…), the connectors (First, Then, Finally) and the letter frame (Dear…, With love,…).")],
      [fp("Observe the toolbox.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing 1)"],
      [fp("Write two paragraphs (6–8 sentences in all) on how to maintain a healthy life: paragraph 1 = the body (food, sport, sleep); paragraph 2 = the mind (stress, friends, joy). Use at least one relative pronoun and one comparative!")],
      [fp("Write the paragraphs.")],
      "Individual work", "Exercise books"),
    stepRow(["5. Synthesis (while-writing 2)"],
      [fp("Now exchange exercise books and check in pairs: grammar points and paragraph cohesion. Then write a SHORT letter as an answer to Kate’s — three pieces of advice with should.")],
      [fp("Check in pairs. Write the letter.")],
      "Pair work", "Exercise books"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Read your paragraphs to your friends. The class expresses opinions: I agree with your advice! / I’m afraid I disagree…")],
      [fp("Read. React."),
       pAns("E.A.: To stay healthy, you should eat food which gives energy… Dinner should be lighter than lunch… If I were you, I would walk to school every day!",
        ["lighter than lunch"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your letter to Kate."),
       fp("2. Which grammar points did you use?")],
      [fp("Read. Answer."),
       pAns("E.A.: should for advice, a comparative, a relative pronoun, If type 2.",
        ["should for advice"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(42, TOTAL, meta, rows, "s42");
}
function lessonS42() {
  return [
    p([run("LESSON OF THE DAY — SESSION 42", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY HEALTHY LIFE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITER’S TOOLBOX", [
      bullet([run("Advice: ", { bold: true }), run("You should… / You shouldn’t…", { bold: true, color: C.BLUE })]),
      bullet([run("Comparison: ", { bold: true }), run("Dinner should be lighter than lunch.", { bold: true, color: C.BLUE })]),
      bullet([run("Glue words: ", { bold: true }), run("an activity which calms you down; a friend who listens.", { bold: true, color: C.BLUE })]),
      bullet([run("Dream: ", { bold: true }), run("If I were you, I would walk to school.", { bold: true, color: C.BLUE })]),
      bullet([run("Connectors: ", { bold: true }), run("First… Then… Finally…", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraphs:", { bold: true })], { after: 50 }),
    pr([run("“To maintain a healthy life, you should take care of your body. First, eat food which gives real energy: rice, vegetables, fruit — remember, you are what you eat! Then, do sport: a body which moves is a body which smiles. Finally, sleep at least eight hours, because sleep is the best medicine of all.", { italic: true })], { after: 60 }),
    pr([run("Your mind needs care too. When you are stressed, talk to someone who listens to you, or put on music which calms you down. Balance work and play, and never get worked up over little things. If everyone followed these simple rules, we would all be healthier and happier!”", { italic: true })], { after: 80 }),
    p("", { after: 40 }),
    box("MY LETTER FRAME (answer to Kate)", [
      bullet([run("Dear Kate,", { bold: true })]),
      bullet([run("I’m writing in response to your letter which asked me for health advice…", { italic: true })]),
      bullet([run("You should… / You shouldn’t… / If I were you, I would…", { italic: true })]),
      bullet([run("With love, (your name)", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 4", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Illnesses and cures"),
    bullet([run("illness, symptom, pain, dizziness, fever, cough; traditional cures = home remedies (boiled leaves, honey and lemon — good for treating cough!) vs modern cures.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Health idioms"),
    bullet([run("sick as a dog; under the weather; you are what you eat; you’ll be better in no time; I’m at death’s door; feeling queasy.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Agreement / disagreement"),
    bullet([run("Do you agree with (someone) / on (something)? — I totally agree on it. / I don’t agree. / I disagree with you.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Comparatives and superlatives"),
    bullet([run("cheaper than / more effective than; the cheapest / the most effective; good-better-best, bad-worse-worst.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. Relative pronouns"),
    bullet([run("who (people), which (things), that (both), whose (possession): I talk to someone who listens; music which calms me down.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Emotional health"),
    bullet([run("to be stressed / afraid of / sad / happy / angry; to worry, to keep calm, to calm down, to be joyful, to get out of stress; the two anti-stress weapons: exercise + sleep!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("7. Advice and dreams"),
    bullet([run("You should / shouldn’t + verb (Ninah’s healthy day!); If + past simple → would + verb: If I were the Minister of Health, I would build more clinics.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 4 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Match the idiom with its meaning: 1. sick as a dog 2. under the weather 3. you are what you eat 4. feeling queasy (a. feeling ill b. very sick c. not feeling well d. healthy food = healthy you).")]),
    pAns("Answers: 1-b, 2-c, 3-d, 4-a.", ["1-b, 2-c, 3-d, 4-a"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete with the comparative or superlative: 1. Home remedies are … (cheap) than tablets. 2. Modern medicine is … (effective) than old methods for serious illnesses. 3. Sleep is … (good) medicine of all.")]),
    pAns("Answers: 1. cheaper 2. more effective 3. the best.", ["more effective"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Who, which or whose? 1. I talk to someone … listens to me. 2. I watch a movie … makes me laugh. 3. That is the boy … father is a doctor. 4. The remedy … Dr Dadakoto gave works well.")]),
    pAns("Answers: 1. who 2. which 3. whose 4. which/that.", ["1. who 2. which 3. whose"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Answer on the dialogue: 1. What were Vavisoa’s symptoms? 2. What was the remedy, and how often? 3. When will she feel better?")]),
    pAns("Answers: 1. pain and dizziness. 2. boil the leaves and drink the water, three times a day. 3. tomorrow.", ["pain and dizziness"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("If-clause type 2 — complete: 1. If I … (be) the Minister of Health, I … (build) more clinics. 2. If people … (sleep) more, they … (be) less stressed. 3. If we … (have) a sports field, we … (train) every day.")]),
    pAns("Answers: 1. were, would build 2. slept, would be 3. had, would train.", ["were, would build"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Answer on the texts: 1. What are the two ways to deal with stress? 2. What should Kate turn off two hours before bedtime? 3. How does Angelina Jolie de-stress?")]),
    pAns("Answers: 1. physical exercise and enough sleep. 2. phone and computer. 3. colouring book with her kids, or the trampoline.", ["physical exercise and enough sleep"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s43", "SESSION 43 / 68", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 4: HEALTHY LIFE", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name three symptoms and one home remedy."),
    pAns("E.A.: pain, dizziness, fever; boiled leaves (or honey and lemon for cough).", ["honey and lemon"]),
    p("2. Give four health idioms with their meanings."),
    pAns("E.A.: sick as a dog = very sick; under the weather = not well; you are what you eat; feeling queasy = feeling ill.", ["sick as a dog"]),
    p("3. Agree, then disagree politely with: “Traditional cures are the best.”"),
    pAns("E.A.: I totally agree on it! / I’m afraid I disagree with you.", ["I’m afraid I disagree"]),
    p("4. Compare traditional and modern cures (two sentences)."),
    pAns("E.A.: Home remedies are cheaper than tablets; modern medicine is more effective for serious illnesses.", ["cheaper than"]),
    p("5. Who, which, whose? Give one example of each."),
    pAns("E.A.: a friend who listens; music which calms me down; the boy whose father is a doctor.", ["who listens"]),
    p("6. What are the two anti-stress weapons of the passage?"),
    pAns("E.A.: physical exercise and enough sleep.", ["physical exercise"]),
    p("7. Give three pieces of advice from Ninah’s letter to Kate."),
    pAns("E.A.: 5 minutes of sport every morning; lunch = main meal; screens off two hours before bed; in bed before 11.", ["screens off"]),
    p("8. If-clause type 2: what is the structure, and what is it for?"),
    pAns("E.A.: If + past simple → would + verb; for dreams and hypothetical situations, not possible in the present.", ["would + verb"]),
    p("9. Your minister speech in one sentence!"),
    pAns("E.A.: If I were the Minister of Health, I would build clinics in every village.", ["If I were the Minister"]),
    p("10. How do the four celebrities de-stress?"),
    pAns("E.A.: Bieber — movies and friends; Jenner — headphones and alone time; Jolie — colouring book and trampoline; Obama — gym or bike ride.", ["headphones"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s44", "SESSION 44 / 68", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 4: HEALTHY LIFE", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Health idioms — give the meaning: 1. I’m under the weather. 2. He is sick as a dog. 3. You are what you eat. 4. She is feeling queasy.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Comparative or superlative: 1. Home remedies are … (cheap) than tablets. 2. The hospital is … (modern) cure of all. 3. Dinner should be … (light) than lunch. 4. Sleep is … (good) medicine of all.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Who, which or whose? 1. I talk to someone … understands me. 2. Exercise is an activity … calms you down. 3. The girl … mother is a nurse helped us. 4. The advice … Ninah gave is excellent.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("If-clause type 2: 1. If I … (be) the Minister of Health, I … (give) free medicine to children. 2. If students … (sleep) eight hours, they … (be) less stressed.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short letter (4–6 sentences) answering a friend who asked you for health advice: use Dear…, two pieces of advice with should/shouldn’t, one comparative, and With love.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: not feeling well; very sick; if you eat healthy you will feel healthy; feeling ill. (1 pt each)", ["not feeling well"]),
    pAns("Ex.2: cheaper; the most modern; lighter; the best. (1 pt each)", ["the most modern"]),
    pAns("Ex.3: who; which/that; whose; which/that. (1 pt each)", ["who; which/that; whose"]),
    pAns("Ex.4: were, would give; slept, would be. (2 pts each)", ["were, would give"]),
    pAns("Ex.5 (model): Dear Hanta, I’m writing in response to your letter. You should do five minutes of sport every morning, and you shouldn’t sleep with your phone in your room. Dinner should be lighter than lunch. With love, Soa. (4 pts: frame 1, should ×2 = 2, comparative 1)", ["lighter than lunch"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS33(), pageBreak(), ...lessonS33(), pageBreak(),
    ...ficheS34(), pageBreak(), ...lessonS34(), pageBreak(),
    ...ficheS35(), pageBreak(), ...lessonS35(), pageBreak(),
    ...ficheS36(), pageBreak(), ...lessonS36(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...ficheS39(), pageBreak(), ...lessonS39(), pageBreak(),
    ...ficheS40(), pageBreak(), ...lessonS40(), pageBreak(),
    ...ficheS41(), pageBreak(), ...lessonS41(), pageBreak(),
    ...ficheS42(), pageBreak(), ...lessonS42(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 4", COLOR, [
      "I can talk about illnesses, symptoms and cures: traditional and modern.",
      "I can use health idioms: under the weather, sick as a dog, you are what you eat.",
      "I can agree and disagree politely: I totally agree. / I’m afraid I disagree.",
      "I can compare cures: cheaper than, more effective, the best.",
      "I can talk about stress and the two anti-stress weapons: exercise and sleep.",
      "I can use relative pronouns: who, which, that, whose.",
      "I can express my feelings and care for my emotional health.",
      "I can give health advice with should, like Ninah’s letter to Kate.",
      "I can dream with If-clause type 2: If I were the Minister of Health…",
      "I can read celebrity de-stress tips and write my healthy-life paragraphs.",
    ], "NEXT STOP → UNIT 5: JOB AND MASS MEDIA!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
