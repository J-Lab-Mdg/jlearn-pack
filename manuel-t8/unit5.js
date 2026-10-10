// T8 — UNIT 5 — PREVENTIVE HEALTH (7 séances + révision + test) — Sessions 49 à 57 / 81
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "148F77"; // vert émeraude
const SHADE = "D1F2EB";
const TOTAL = 81;
const AUDIO = {
  doctor: "https://drive.google.com/uc?export=download&id=1MS58vjwIC8pcx2gs2Vv5OoDrCSkTy0jy",
  hygiene: "https://drive.google.com/uc?export=download&id=1hkJ8stehaGywBy31dwkNDZv9vfPYaNmz",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — PREVENTIVE HEALTH", title, slo,
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
  return box("AT THE DOCTOR’S OFFICE (listening passage)", [
    L("Doctor", "Good morning! What’s wrong?"),
    L("Koto", "Good morning, doctor. I’m not feeling very well. I’ve got a headache and I’ve got a fever."),
    L("Doctor", "Have you got a cough too?"),
    L("Koto", "Yes, I have. And my sister has got a stomachache."),
    L("Doctor", "Open your mouth, please… You’ve got the flu, young man."),
    L("Koto", "What should I do, doctor?"),
    L("Doctor", "Take this medicine and rest. Here is your prescription."),
    L("Koto", "Thank you, doctor!"),
    L("Doctor", "You’re welcome. I hope you get well soon!"),
  ]);
}
function hygieneDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("HEALTHY HABITS (listening passage)", [
    L("Soa", "Grandmother, why do you always boil the water?"),
    L("Grandmother", "Because of the germs, my dear! Germs are very small, but they are dangerous. If you drink dirty water, you will be sick."),
    L("Soa", "And what should I do to stay healthy?"),
    L("Grandmother", "You should wash your hands before you eat. You should take a bath every day, and you should brush your teeth every morning and every evening."),
    L("Soa", "And if I wash my hands?"),
    L("Grandmother", "If you wash your hands, germs will not touch your food. And if you stay clean, you will stay healthy!"),
    L("Soa", "Thank you, Grandmother! I will boil the water with you!"),
  ]);
}
function recitationBox() {
  const V = (t, last) => p([run(t, { italic: true })], { center: true, after: last ? 20 : 30 });
  return box("THE CLEAN HANDS RECITATION (read it with music!)", [
    V("Wash your hands, wash them well,"),
    V("Germs are small — you cannot tell!"),
    V("Brush your teeth, morning and night,"),
    V("Keep them strong and keep them white."),
    V("Boil the water, keep it pure,"),
    V("Clean and healthy — that’s the cure!"),
    V("If you keep your body clean,"),
    V("You will be strong — you know what I mean!", true),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 5 — PREVENTIVE HEALTH", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("I hope you get well soon!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u5_doctor.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask about health: How are you feeling? What’s wrong?;"),
    p("• state my health: I’m fine! — I’m sick, I’m not feeling very well;"),
    p("• name the common illnesses: a cold, the flu, a fever, a headache…;"),
    p("• use have got: I’ve got a headache. Have you got a cough?;"),
    p("• wish well: I hope you get well soon! I wish you a rapid recovery!;"),
    p("• give advice: You should wash your hands! — and the cures;"),
    p("• use the if clause (type 1): If you stay clean, you will stay healthy!;"),
    p("• read a recitation about hygiene and write how to fight the germs.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("respect of life, responsibility.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 4)", [
      p("In Unit 4, you bought good food at the best price: How about 7 000?"),
      p("In Unit 5, English protects your health: name the illnesses, find the cures, and keep the germs away!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u5_doctor.png", label: "At the doctor’s office — the dialogue", url: AUDIO.doctor }], COLOR),
  ];
}

// ---------- S46 — Illnesses + asking/stating health ----------
function ficheS46() {
  const meta = META("The common illnesses — asking about and stating health",
    "By the end of the lesson, learners will be able to name common illnesses and ask about and state health.",
    "1 / 7", "pictures of illnesses");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 4.) Answer these questions:"),
       fp("1. Ask the price of a kilo of rice."),
       fp("2. Give two kitchen imperatives.")],
      [fp("Answer."),
       fp("E.A.: How much is a kilo of rice?; Peel the potatoes! Don’t burn the soup!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: enumerate the common illnesses you know — in any English you have! Then watch my gestures and guess: (T holds the head… coughs… shivers…).")],
      [fp("Enumerate illnesses. Guess from gestures."),
       fp("E.A.: headache! cough! fever!")],
      "Making gestures / Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The common illnesses ». By the end of this lesson, you will say exactly where it hurts!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning of the vocabulary items from the pictures: a cold, a cough, the flu, a fever, a headache, a stomachache, a toothache, malaria…")],
      [fp("Observe. Draw the meaning from the pictures.")],
      "Using visual-aids", "Pictures of illnesses"),
    stepRow(["4. Analysis"],
      [fp("Observe the question-answer pairs: How are you feeling? What’s wrong? → I’m fine / healthy / in good health. OR: I’m sick / unhealthy / I’m not feeling very well.")],
      [fp("Observe. Match questions and answers."),
       fp("E.A.: What’s wrong? → I’m not feeling very well.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: healthy = in good health; sick = ill. And the kind wishes: I hope you get well soon! I wish you a rapid recovery! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mime chain: one student mimes an illness, the class asks “What’s wrong?”, the student answers, the class wishes: “Get well soon!”")],
      [fp("Mime. Ask. Answer. Wish."),
       pAns("E.A.: What’s wrong? — I’m sick: my head hurts! — I hope you get well soon!",
        ["get well soon"], { size: SZ.FICHE })],
      "Mime game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four common illnesses."),
       fp("2. Your friend is sick: what do you wish?")],
      [fp("Answer."),
       pAns("E.A.: a cold, the flu, a fever, a headache; I hope you get well soon! I wish you a rapid recovery!",
        ["rapid recovery"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}
function lessonS46() {
  return [
    p([run("LESSON OF THE DAY — SESSION 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE COMMON ILLNESSES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE ILLNESSES", [
      vocab("a cold", "e côoulde", "atchoo!"),
      vocab("a cough", "e kof"),
      vocab("the flu", "dhe flou"),
      vocab("a fever", "e fiveur", "the body is hot!"),
      vocab("a headache", "e hèdéik", "the head hurts"),
      vocab("a stomachache", "e steumeukéik", "the stomach hurts"),
      vocab("a toothache", "e touthéik", "the tooth hurts"),
      vocab("malaria", "melèria"),
    ]),
    p("", { after: 60 }),
    box("ASKING AND STATING HEALTH", [
      bullet([run("Questions: ", { bold: true }), run("How are you? How are you feeling? How do you feel today? What’s wrong?", { bold: true, color: C.BLUE })]),
      bullet([run("Good news (+): ", { bold: true }), run("I’m fine! I’m healthy! I’m in good health!", { bold: true, color: C.GREEN })]),
      bullet([run("Bad news (−): ", { bold: true }), run("I’m sick. I’m unhealthy. I’m not feeling very well.", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE KIND WISHES", [
      bullet([...kw("I hope you get well soon!", "aï hôoupe iou guète ouèl soune")]),
      bullet([...kw("I wish you a rapid recovery!", "aï ouich iou e rapide rikeuveuri")], { after: 20 }),
    ]),
  ];
}

// ---------- S47 — Listening doctor + have got ----------
function ficheS47() {
  const meta = META("Listening: at the doctor’s office — have got",
    "By the end of the lesson, learners will be able to comprehend a dialogue at the doctor’s office and use have got.",
    "2 / 7", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three illnesses."),
       fp("2. What do you say to a sick friend?")],
      [fp("Answer."),
       fp("E.A.: the flu, a fever, a cough; I hope you get well soon!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: Koto is at the doctor’s office today. Guess: what has he got?")],
      [fp("Predict."),
       fp("E.A.: maybe a fever… a headache…")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Koto at the doctor’s — and discover the health machine: HAVE GOT.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: 1. What has Koto got? (two things!) 2. Who has got a stomachache? 3. What illness does the doctor name? Then listen and repeat the dialogue.")],
      [fp("Listen. Answer. Repeat the dialogue."),
       fp("E.A.: a headache and a fever; his sister; the flu.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: find the use and the form of have got in the dialogue: I’ve got…, she HAS got…, HAVE you got…? What does it express?")],
      [fp("Find the forms."),
       fp("E.A.: possession / illness: I’ve got = I have; has got for he/she; Have you got…? for questions.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: I / you / we / they HAVE GOT (I’ve got) — he / she HAS GOT (she’s got) — question: Have you got…? — negative: I haven’t got. Listen and repeat!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the dialogue in pairs (doctor / patient). Then build ANOTHER dialogue: new illness, new advice — and role play it!")],
      [fp("Role play. Build a new dialogue."),
       pAns("E.A.: — What’s wrong? — I’ve got a toothache! — Have you got a fever too?",
        ["I’ve got"], { size: SZ.FICHE })],
      "Role-play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: She … got a cold. … you got a headache?"),
       fp("2. Say two things YOU have got (real or fun!).")],
      [fp("Answer."),
       pAns("E.A.: has; Have; I’ve got a little brother and I’ve got a big smile!",
        ["has"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50");
}
function lessonS47() {
  return [
    p([run("LESSON OF THE DAY — SESSION 50", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HAVE GOT: THE HEALTH MACHINE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    doctorDialogueBox(),
    p("", { after: 60 }),
    box("THE RULE OF HAVE GOT", [
      bullet([run("I / you / we / they HAVE GOT: ", { bold: true }), run("I’ve got a headache.", { bold: true, color: C.BLUE })]),
      bullet([run("he / she / it HAS GOT: ", { bold: true }), run("My sister has got a stomachache. (She’s got…)", { bold: true, color: C.BLUE })]),
      bullet([run("Question: ", { bold: true }), run("Have you got a cough? — Yes, I have. / No, I haven’t.", { bold: true, color: C.GREEN })]),
      bullet([run("Negative: ", { bold: true }), run("I haven’t got a fever.", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("HAVE GOT = HAVE", [
      p("I’ve got a headache = I have a headache. Have got loves to talk about illnesses, family and things we possess!", { after: 40 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u5_doctor.png", label: "At the doctor’s office — listen again", url: AUDIO.doctor }], COLOR),
  ];
}

// ---------- S48 — Cures + should ----------
function ficheS48() {
  const meta = META("The cures and the advice — should",
    "By the end of the lesson, learners will be able to match illnesses and cures and ask for and give advice with should.",
    "3 / 7", "flashcards illness/cure");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I … got the flu. He … got a cold."),
       fp("2. Ask me if I have a headache.")],
      [fp("Answer."),
       fp("E.A.: ’ve / have; has; Have you got a headache?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: match the flashcards: ILLNESS ↔ CURE! A toothache ↔ ? A fever ↔ ? The flu ↔ ?")],
      [fp("Match illness and cures."),
       fp("E.A.: toothache → go to the dentist; fever → take tablets.")],
      "Matching flashcards", "Flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the CURES and the advice word SHOULD. By the end of this lesson, you will be the class doctor!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the basic cures: take medicine / tablets / pills / syrup; have an injection; go to the doctor and get a prescription; go to the hospital.")],
      [fp("Observe. Repeat the cures.")],
      "Using visual-aids", "Pictures of cures"),
    stepRow(["4. Analysis"],
      [fp("In the dialogue, Koto asks: “WHAT SHOULD I DO?” and the doctor advises. Observe: You SHOULD take this medicine. You SHOULD rest. What does should do?")],
      [fp("Observe. Find the rule."),
       fp("E.A.: should + verb = good advice, softer than an order.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So: asking advice: What should I do? — giving advice: You should + verb (You should take a syrup) — or the imperative: Go to the doctor! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Doctor game in pairs: patient says the illness with have got, doctor gives TWO cures with should: “I’ve got a toothache!” — “You should go to the dentist and you should brush your teeth!”")],
      [fp("Play doctor and patient."),
       pAns("E.A.: I’ve got malaria! — You should go to the hospital and take your tablets!",
        ["You should"], { size: SZ.FICHE })],
      "Role-play", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four basic cures."),
       fp("2. Your friend has got a fever: give two pieces of advice.")],
      [fp("Answer."),
       pAns("E.A.: take tablets, have an injection, get a prescription, go to the hospital; You should take tablets and you should rest.",
        ["take tablets"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(51, TOTAL, meta, rows, "s51");
}
function lessonS48() {
  return [
    p([run("LESSON OF THE DAY — SESSION 51", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CURES AND SHOULD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE BASIC CURES", [
      vocab("to take medicine / tablets / pills / syrup", "tou téik mèdissine / tablèts / pilz / sireupe"),
      vocab("to have an injection", "tou have eune inndjèkcheune"),
      vocab("to go to the doctor and get a prescription", "guète e priskripcheune"),
      vocab("to go to the hospital", "tou gôou tou dhe hospiteul"),
    ]),
    p("", { after: 60 }),
    box("ASKING AND GIVING ADVICE", [
      bullet([...kw("What should I do?", "ouate choude aï dou"), run("  —  the magic question!")]),
      bullet([run("You should + verb: ", { bold: true }), run("You should take this syrup. You should rest.", { bold: true, color: C.BLUE })]),
      bullet([run("Or the imperative: ", { bold: true }), run("Go to the doctor! Take your tablets!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("ILLNESS → CURE (model)", [
      bullet([run("a toothache → you should go to the dentist")]),
      bullet([run("a fever → you should take tablets and rest")]),
      bullet([run("the flu → you should get a prescription")]),
      bullet([run("malaria → you should go to the hospital!")], { after: 20 }),
    ]),
  ];
}

// ---------- S49 — Hygiene + if clause ----------
function ficheS49() {
  const meta = META("The hygiene and the if clause (type 1)",
    "By the end of the lesson, learners will be able to comprehend a dialogue about hygiene and use the if clause type 1.",
    "4 / 7", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What should I do for a toothache?"),
       fp("2. Complete: … should I do?")],
      [fp("Answer."),
       fp("E.A.: You should go to the dentist; What.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: why does your family boil the drinking water? What is hiding in dirty water?")],
      [fp("Answer."),
       fp("E.A.: germs! viruses! parasites!")],
      "Eliciting technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Soa and her grandmother — and learn the sentence of the future consequences: the IF CLAUSE.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: 1. Why does Grandmother boil the water? 2. Give two pieces of advice she gives. 3. What happens if you wash your hands? Then listen and repeat.")],
      [fp("Listen. Answer. Repeat."),
       fp("E.A.: because of the germs; wash your hands, take a bath, brush your teeth; germs will not touch your food.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: find the structure in the passage: “IF you drink dirty water, you WILL be sick. IF you stay clean, you WILL stay healthy.” Two parts — which tenses?")],
      [fp("Find the structure."),
       fp("E.A.: If + present → will + verb.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("So the IF CLAUSE (type 1): IF + present, WILL + verb: If you wash your hands, you will stay healthy! The germs (germs, viruses, parasites) hate clean hands! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game: “If you brush your teeth…” → next student: “…you will have strong teeth! If you drink dirty water…” → keep the chain!")],
      [fp("Play the if-chain."),
       pAns("E.A.: If you take a bath every day, you will be clean. If you touch dirty things, germs will spread.",
        ["If you"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the structure of the if clause type 1."),
       fp("2. Complete: If you boil the water, …")],
      [fp("Answer."),
       pAns("E.A.: If + present, will + verb; …you will kill the germs!",
        ["will"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52");
}
function lessonS49() {
  return [
    p([run("LESSON OF THE DAY — SESSION 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE IF CLAUSE (TYPE 1)", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    hygieneDialogueBox(),
    p("", { after: 60 }),
    box("THE ENEMIES", [
      vocab("germs", "djeurmz", "tiny and dangerous!"),
      vocab("viruses", "vaïreussiz"),
      vocab("parasites", "paressaïts"),
      bullet([run("Their verbs: ", { bold: true }), run("to spread a disease, to touch, to transfer", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE IF CLAUSE (TYPE 1): IF + PRESENT, WILL + VERB", [
      bullet([run("If you drink dirty water, you will be sick.", { bold: true, color: C.BLUE })]),
      bullet([run("If you wash your hands, germs will not touch your food.", { bold: true, color: C.BLUE })]),
      bullet([run("If you stay clean, you will stay healthy!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE CLEAN TEAM (your weapons!)", [
      bullet([run("to be clean — to wash — to take a bath — to brush one’s teeth — to boil water — to protect against disease", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u5_hygiene.png", label: "Healthy habits — Soa and Grandmother", url: AUDIO.hygiene }], COLOR),
  ];
}

// ---------- S50 — Hygiene posters ----------
function ficheS50() {
  const meta = META("The hygiene posters — asking and giving advice",
    "By the end of the lesson, learners will be able to make a hygiene poster and build a conversation of advice based on it.",
    "5 / 7", "big papers, colours, model poster");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: If you brush your teeth, …"),
       fp("2. Name the three enemies of health.")],
      [fp("Answer."),
       fp("E.A.: …you will have strong teeth; germs, viruses, parasites.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Describe my poster of hygiene: what do you see? What does each picture say?")],
      [fp("Describe the poster."),
       fp("E.A.: a child washes hands; a mother boils water…")],
      "Using visual-aids", "Model poster"),
    stepRow(["2. Presentation"],
      [fp("Today, YOUR group makes a hygiene poster — and builds the conversation that goes with it!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model poster’s recipe: a big title, simple pictures, short messages: Wash your hands! If you stay clean, you will stay healthy!")],
      [fp("Observe the recipe.")],
      "Using visual-aids", "Model poster"),
    stepRow(["4. Analysis"],
      [fp("Group work: make your posters about hygiene on the model — imperatives, should, and one if clause minimum!")],
      [fp("Make the posters in groups."),
       fp("E.A.: posters with correct advice sentences.")],
      "Group work", "Big papers, colours"),
    stepRow(["5. Synthesis"],
      [fp("Build a conversation on asking and giving advice based on your poster: — What should I do to…? — You should… If you…, you will…!")],
      [fp("Build the conversation."),
       fp("E.A.: complete advice dialogue.")],
      "Group work", "The posters"),
    stepRow(["6. Practice"],
      [fp("Share your dialogue with another group for them to correct it. Then role play it in front of your poster — like health champions!")],
      [fp("Peer correction. Role play."),
       pAns("E.A.: corrected dialogue, lively role play with the poster.",
        ["role play"], { size: SZ.FICHE })],
      "Peer correction / Role-play", "The posters"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three ingredients of a good hygiene poster."),
       fp("2. Say one advice sentence from YOUR poster.")],
      [fp("Answer."),
       pAns("E.A.: big title, simple pictures, short messages; You should boil the water before drinking!",
        ["short messages"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}
function lessonS50() {
  return [
    p([run("LESSON OF THE DAY — SESSION 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY HYGIENE POSTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u5_hygiene.png", 420, 768 / 1376),
    box("THE POSTER RECIPE", [
      bullet([run("1. A BIG title: ", { bold: true }), run("STAY CLEAN, STAY STRONG!", { bold: true, color: C.BLUE })]),
      bullet([run("2. Simple pictures: ", { bold: true }), run("hands + soap, a toothbrush, a pot of boiling water", { italic: true })]),
      bullet([run("3. Short messages: ", { bold: true }), run("imperatives, should, and one if clause!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MESSAGES FOR YOUR POSTER (model)", [
      bullet([run("Wash your hands before you eat!", { italic: true })]),
      bullet([run("Brush your teeth morning and night!", { italic: true })]),
      bullet([run("You should boil the drinking water.", { italic: true })]),
      bullet([run("If you stay clean, you will stay healthy!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RESPONSIBILITY CORNER", [
      p("A poster is not only for the classroom: hang it at home, teach your little brothers and sisters — health is everybody’s job!", { after: 40 }),
    ]),
  ];
}

// ---------- S51 — Reading: recitation ----------
function ficheS51() {
  const meta = META("Reading: the hygiene recitation",
    "By the end of the lesson, learners will be able to read a recitation about hygiene with correct intonation and infer information from it.",
    "6 / 7", "the recitation, pictures on hygiene");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Pre-reading: describe what you see on the pictures about hygiene.")],
      [fp("Describe the pictures."),
       fp("E.A.: a child washes his hands with soap…")],
      "Using visual-aids", "Pictures on hygiene"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today’s text is special: it SINGS! It is a recitation — the words dance and rhyme: well / tell, night / white!")],
      [fp("Listen to the rhythm.")], "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The clean hands recitation » — with the right intonation and the music of the rhymes!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read the recitation and respect its intonation: the voice dances on the rhymes! First all together, then line by line.")],
      [fp("Read with intonation.")],
      "Reading aloud", "The recitation"),
    stepRow(["4. Analysis"],
      [fp("Answer: 1. What must we wash? 2. When must we brush our teeth? 3. Why do we boil the water? 4. Find the if clause of the recitation!")],
      [fp("Answer."),
       fp("E.A.: our hands; morning and night; to keep it pure; If you keep your body clean, you will be strong.")],
      "Question-answer", "The recitation"),
    stepRow(["5. Synthesis"],
      [fp("Post-reading: build sentences expressing advice about common illnesses from the text: a cough? dirty hands? — advise with should and if!")],
      [fp("Build advice sentences."),
       fp("E.A.: You should wash your hands. If you brush your teeth, you will keep them white.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Peer correction of your sentences, then read them aloud — and recite the recitation by heart in groups: the most musical group wins!")],
      [fp("Peer correction. Read aloud. Recite."),
       pAns("E.A.: corrected sentences, musical recitation!",
        ["recitation"], { size: SZ.FICHE })],
      "Peer correction / Group competition", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Recite two lines of the recitation."),
       fp("2. Give one advice sentence built from the text.")],
      [fp("Recite. Answer."),
       pAns("E.A.: Wash your hands, wash them well…; You should boil the water to keep it pure.",
        ["wash them well"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}
function lessonS51() {
  return [
    p([run("LESSON OF THE DAY — SESSION 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE CLEAN HANDS RECITATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    recitationBox(),
    p("", { after: 60 }),
    box("THE MUSIC OF THE RECITATION", [
      bullet([run("The rhymes hold hands: ", { bold: true }), run("well / tell — night / white — pure / cure — clean / mean!", { bold: true, color: C.BLUE })]),
      bullet([run("The voice dances: ", { bold: true }), run("strong on the rhyme, soft in the middle — like a song without music!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("FROM THE TEXT TO THE ADVICE", [
      bullet([run("You should wash your hands before you eat.", { italic: true })]),
      bullet([run("You should brush your teeth morning and night.", { italic: true })]),
      bullet([run("If you boil the water, you will kill the germs.", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S52 — Writing ----------
function ficheS52() {
  const meta = META("Writing: how to protect ourselves from the germs",
    "By the end of the lesson, learners will be able to write seven sentences and a short text on how to protect from germs.",
    "7 / 7", "gap-fill text, notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Recite two lines of the recitation."),
       fp("2. Complete: If you keep your body clean, …")],
      [fp("Answer."),
       fp("E.A.: (two lines!); you will be strong.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: complete the text about health with the correct words: “Koto has … a fever. He should … tablets. If he rests, he … get well soon.” Then answer questions about it.")],
      [fp("Complete the text. Answer."),
       fp("E.A.: got; take; will.")],
      "Gap-fill", "Gap-fill text"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write OUR battle plan against the germs: seven sentences, then a short text!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the weapons for your sentences: the clean verbs (wash, boil, brush…), should, the imperatives and the if clause — mix them!")],
      [fp("Observe the writing weapons.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write 7 sentences, individually or in groups, on how to protect from germs.")],
      [fp("Write seven sentences."),
       fp("E.A.: seven correct protection sentences.")],
      "Group work", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Post-writing: read your sentences aloud; answer the questions from your classmates about your writing.")],
      [fp("Read aloud. Answer questions.")],
      "Group work", "----"),
    stepRow(["6. Practice"],
      [fp("Now write a short text from your sentences: one small paragraph — your family’s health guide!")],
      [fp("Write the short text."),
       pAns("E.A.: To stay healthy, wash your hands before eating. You should boil the water. If we stay clean, germs will not win!",
        ["germs will not win"], { size: SZ.FICHE })],
      "Individual work", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write two protection sentences: one with should, one with if."),
       fp("2. Read them aloud with confidence!")],
      [fp("Write. Read."),
       pAns("E.A.: You should wash your hands. If you boil the water, you will kill the germs.",
        ["You should wash"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}
function lessonS52() {
  return [
    p([run("LESSON OF THE DAY — SESSION 55", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY BATTLE PLAN AGAINST THE GERMS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("MY WRITING WEAPONS", [
      bullet([run("The clean verbs: ", { bold: true }), run("wash, boil, brush, take a bath, protect", { bold: true, color: C.BLUE })]),
      bullet([run("The advice: ", { bold: true }), run("You should + verb", { bold: true, color: C.BLUE })]),
      bullet([run("The orders: ", { bold: true }), run("Wash your hands! Don’t drink dirty water!", { bold: true, color: C.BLUE })]),
      bullet([run("The consequences: ", { bold: true }), run("If + present, will + verb", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY MODEL TEXT (7 sentences)", [
      bullet([run("Germs are small, but they are dangerous.", { italic: true })]),
      bullet([run("Wash your hands before you eat.", { italic: true })]),
      bullet([run("You should take a bath every day.", { italic: true })]),
      bullet([run("Brush your teeth morning and night.", { italic: true })]),
      bullet([run("You should boil the drinking water.", { italic: true })]),
      bullet([run("Don’t touch dirty things before eating.", { italic: true })]),
      bullet([run("If we stay clean, we will stay healthy!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("RESPECT OF LIFE CORNER", [
      p("Your health is a treasure — and your family’s health too. Write your plan, apply it, share it: that is responsibility!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 5", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("PREVENTIVE HEALTH"),
    sub("1. Asking about and stating health"),
    bullet([run("How are you feeling? What’s wrong? — I’m fine / in good health. — I’m sick / not feeling very well.", { bold: true, color: C.BLUE })]),
    bullet([run("I hope you get well soon! I wish you a rapid recovery!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The common illnesses"),
    bullet([run("a cold, a cough, the flu, a fever, a headache, a stomachache, a toothache, malaria", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. Have got"),
    bullet([run("I’ve got a headache. She has got a stomachache. Have you got a cough? — Yes, I have. / No, I haven’t.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The cures and the advice (should)"),
    bullet([run("take medicine / tablets / pills / syrup — have an injection — get a prescription — go to the hospital", { bold: true, color: C.BLUE })]),
    bullet([run("What should I do? — You should take this syrup and rest!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The if clause (type 1)"),
    bullet([run("IF + present, WILL + verb: If you wash your hands, you will stay healthy!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The hygiene team"),
    bullet([run("against germs, viruses and parasites: be clean, wash, take a bath, brush your teeth, boil the water!", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u5_doctor.png", label: "At the doctor’s office", url: AUDIO.doctor },
      { qr: "qr_t8_u5_hygiene.png", label: "Healthy habits", url: AUDIO.hygiene },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Have or has? 1. I … got a cold.  2. She … got a toothache.  3. … you got a fever?  4. They … got the flu.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Match the illness and the cure: 1. a toothache  2. malaria  3. a fever  4. the flu  —  a. go to the hospital  b. go to the dentist  c. get a prescription  d. take tablets and rest.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete with should + verb: 1. I’ve got a headache. You … (rest).  2. My teeth hurt! You … (brush) them morning and night.  3. The water is dirty. You … (boil) it.  4. I’m sick. You … (go) to the doctor.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Finish the if clauses: 1. If you drink dirty water, …  2. If you wash your hands, …  3. If you brush your teeth, …  4. If you stay clean, …")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences to protect your family from germs: one imperative, one with should, one with if, one free.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: have (’ve) — has — Have — have (1 point each).", ["have"]),
    pAns("Exercise 2: 1-b  2-a  3-d  4-c (1 point each).", ["1-b"]),
    pAns("Exercise 3: should rest — should brush — should boil — should go (1 point each).", ["should rest"]),
    pAns("Exercise 4: …you will be sick / …germs will not touch your food / …they will stay strong and white / …you will stay healthy (1 point each).", ["will"]),
    pAns("Exercise 5: four correct protection sentences with the required forms (1 point each).", ["protection"]),
  ];
}

// ---------- S53 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s56", "SESSION 56 / 81", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: PREVENTIVE HEALTH", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Ask about my health in three ways."),
    pAns("E.A.: How are you feeling? How do you feel today? What’s wrong?", ["What’s wrong?"]),
    p("2. Answer: one good-health answer, one bad-health answer."),
    pAns("E.A.: I’m in good health! — I’m not feeling very well.", ["in good health"]),
    p("3. Name six common illnesses."),
    pAns("E.A.: a cold, a cough, the flu, a fever, a headache, a toothache.", ["the flu"]),
    p("4. Give the rule of have got (+, −, ?)."),
    pAns("E.A.: I’ve got / she has got; I haven’t got; Have you got…?", ["Have you got"]),
    p("5. What do you wish to a sick friend?"),
    pAns("E.A.: I hope you get well soon! I wish you a rapid recovery!", ["get well soon"]),
    p("6. Name four basic cures."),
    pAns("E.A.: take tablets/syrup, have an injection, get a prescription, go to the hospital.", ["injection"]),
    p("7. Ask for advice and give one with should."),
    pAns("E.A.: What should I do? — You should rest and take your medicine.", ["What should I do?"]),
    p("8. Give the structure of the if clause type 1 and one example."),
    pAns("E.A.: If + present, will + verb — If you boil the water, you will kill the germs.", ["If + present"]),
    p("9. Name the three enemies and three clean-team verbs."),
    pAns("E.A.: germs, viruses, parasites; wash, boil, brush.", ["germs"]),
    p("10. Recite two lines of the recitation — with the music!"),
    pAns("E.A.: Wash your hands, wash them well, / Germs are small — you cannot tell!", ["wash them well"]),
  ];
}

// ---------- S54 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s57", "SESSION 57 / 81", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 5: PREVENTIVE HEALTH", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: role play doctor and patient — ask what’s wrong, state the illness with have got, give two pieces of advice with should.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Have or has got? 1. Koto … a fever.  2. I … a cough.  3. … your sister … a headache?  4. We … the flu.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Give the right cure with should: 1. a toothache  2. malaria  3. a fever  4. dirty drinking water.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete the if clauses: 1. If you … dirty water, you … be sick. (drink)  2. If you wash your hands, germs … not touch your food.  3. If you … your teeth, they will stay white. (brush)  4. If you stay clean, you … stay healthy.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short text (five sentences or more) about how to protect your family from germs — use one imperative, one should and one if clause.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: complete role play — question, have got, two should-advices (4 points).", ["role play"]),
    pAns("Exercise 2: has got — have got — Has… got — have got (1 point each).", ["has got"]),
    pAns("Exercise 3: You should go to the dentist / go to the hospital / take tablets and rest / boil the water (1 point each).", ["You should"]),
    pAns("Exercise 4: drink, will — will — brush — will (1 point each).", ["will"]),
    pAns("Exercise 5: five sentences with the three required forms (4 points).", ["five sentences"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS46(), pageBreak(), ...lessonS46(), pageBreak(),
    ...ficheS47(), pageBreak(), ...lessonS47(), pageBreak(),
    ...ficheS48(), pageBreak(), ...lessonS48(), pageBreak(),
    ...ficheS49(), pageBreak(), ...lessonS49(), pageBreak(),
    ...ficheS50(), pageBreak(), ...lessonS50(), pageBreak(),
    ...ficheS51(), pageBreak(), ...lessonS51(), pageBreak(),
    ...ficheS52(), pageBreak(), ...lessonS52(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can ask about health: How are you feeling? What’s wrong?",
      "I can state my health: I’m in good health! — I’m not feeling very well.",
      "I can name the common illnesses and the basic cures.",
      "I can use have got: I’ve got a headache. Have you got a cough?",
      "I can wish well: I hope you get well soon!",
      "I can give advice: You should wash your hands!",
      "I can use the if clause: If you stay clean, you will stay healthy!",
      "I can read the hygiene recitation and write my anti-germ plan.",
    ], "NEXT STOP → UNIT 6: MEANS OF COMMUNICATION!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
