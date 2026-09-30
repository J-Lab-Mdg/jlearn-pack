// T7 — UNIT 1 — PERSONAL COMMUNICATION (15 séances + révision + test) — Sessions 1 à 17 / 99
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "1F618D"; // bleu profond
const SHADE = "D6E4F0";
const TOTAL = 99;
const AUDIO = {
  jobs: "https://drive.google.com/uc?export=download&id=1_wSxdY2AAADh9EkeFGAZ53FPQMEFPxQ4",
  dialogue: "https://drive.google.com/uc?export=download&id=13F4K-_8gA70McVxv1PBM25W1PuiIqdEw",
  maria: "https://drive.google.com/uc?export=download&id=1xO5K6gHrUWtYJ5dc5IVRIgkItotV8lOQ",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — PERSONAL COMMUNICATION", title, slo,
  values: "mutual respect, solidarity", session, materials,
});

// ---------- outils locaux (nouveau style T7 : puces verticales, leçons riches) ----------
const bullet = (runs, o = {}) => pr(
  [run("•  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });
// puce vocabulaire : mot bleu gras + [pron] + explication
const vocab = (word, pron, expl) => bullet([
  ...kw(word, pron), ...(expl ? [run("  —  " + expl)] : [])]);

function grid(items, perRow, size = 26) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : "", { italic: true, color: C.GRAY, size: size - 6 })], { center: true, after: 10 })],
        { vAlign: VerticalAlign.CENTER })) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
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
function garageDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("THE DIALOGUE AT THE GARAGE (from the syllabus)", [
    L("A: What is your job?"),
    L("B: I’m a mechanic."),
    L("A: Oh! That must be a lot of work."),
    L("B: It is. I fix cars."),
    L("A: That’s interesting."),
    L("B: And you? What would you like to be when you grow up?"),
    L("A: I’d like to be a mathematics teacher."),
    L("B: Why?"),
    L("A: Because I’m good at maths."),
  ]);
}
function mariaInterviewBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return box("THE INTERVIEW (from the syllabus)", [
    L("Interviewer: Hello! Today, I’d like to introduce you to Maria. She is from Spain."),
    L("Maria: Hi! Nice to meet you."),
    L("Interviewer: Maria, this is Tom. He is from Kenya."),
    L("Tom: Hello!  —  Maria: Hi, Tom!"),
    L("Interviewer: Maria, what are your goals?"),
    L("Maria: I want to be a doctor. I’d like to help people. I’m good at studying science, but I’m bad at speaking English."),
    L("Interviewer: That’s great! Tom, what about you?"),
    L("Tom: I want to be a pilot, because I like traveling."),
    L("Interviewer: Do you think it is difficult to be a pilot?"),
    L("Tom: Yes, I do. I think it is difficult, but interesting."),
    L("Interviewer: And you, Maria?"),
    L("Maria: I don’t think so. I think it is exciting!"),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 1 — PERSONAL COMMUNICATION", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("What would you like to be?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_dream.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the jobs and talk about my dreams and goals;"),
    p("• use I want to…, I’d like to…, I wish to… + verb;"),
    p("• use to be good at / bad at + verb-ing;"),
    p("• introduce others: May I introduce you to…? This is…;"),
    p("• name countries and nationalities;"),
    p("• ask WH-questions: who, where, what;"),
    p("• give my opinion: I think… / I don’t think so;"),
    p("• read and write about dream jobs.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("mutual respect, solidarity.")], { after: 160 }),
    box("DO YOU REMEMBER? (T6)", [
      p("In T6 we learned to greet, to give our personal information, to spell, to count and to describe people."),
      p("This year, in T7, we go further: we talk about our DREAMS, we give our OPINION, and we read and write real texts!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t7_u1_jobs.png", label: "The names of jobs — listen and repeat", url: AUDIO.jobs }], COLOR),
  ];
}

// ---------- S1 — Names of jobs ----------
function ficheS1() {
  const meta = META("The names of jobs",
    "By the end of the lesson, learners will be able to name common jobs from pictures or flashcards, with the right article a/an.",
    "1 / 15", "job pictures or flashcards (annex), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of T6.) Answer these questions:"),
       fp("1. Greet me and introduce yourself (name, age, hometown)."),
       fp("2. What does your father or mother do every day?"),
       fp("3. Spell the word “doctor”.")],
      [fp("Answer."),
       fp("E.A.: Hello! My name is…, I’m … years old, I’m from…; He works…; D-O-C-T-O-R.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: show the job pictures one by one (teacher, doctor, nurse, farmer, mechanic, driver, cook, police officer). Ask: who works like this?")],
      [fp("Look. Guess. Mime the job.")], "“Using pictures”", "Job pictures / flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The names of jobs ». By the end of this lesson, you will name the jobs in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the audio and repeat the names of jobs after each picture.")],
      [fp("Listen and repeat: a teacher, a doctor, a nurse, a farmer, a mechanic, a driver, a cook, a police officer.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: show the flashcards at random. Ask: What is this job?"),
       fp("Careful! Why do we say A teacher but AN engineer?")],
      [fp("Tell the names of jobs from the flashcards."),
       fp("E.A.: an + vowel sound (an engineer, an artist); a + consonant sound (a doctor).")],
      "Eliciting technique", "Flashcards"),
    stepRow(["5. Synthesis"],
      [fp("So: the jobs are: a teacher, a doctor, a nurse, a farmer, a mechanic, a driver, a cook, a police officer, a seller, a pilot, an engineer, a fashion designer.")],
      [fp("Listen. Repeat. Copy the list.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Game: one pupil mimes a job, the class guesses: “A mechanic!” Then exchange the flashcards around the class.")],
      [fp("Mime. Guess the jobs."),
       pAns("E.A.: the pupils name the jobs correctly with a/an.", ["a/an"], { size: SZ.FICHE })],
      "Role play / Whole-class work", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name four jobs from the pictures."),
       fp("2. Complete: My uncle is … engineer. My aunt is … nurse.")],
      [fp("Answer."),
       pAns("E.A.: four correct job names; an engineer, a nurse.", ["an engineer"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LESSON OF THE DAY — SESSION 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE NAMES OF JOBS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_jobs.png", 420, 768 / 1408),
    p([run("A job is the work a person does every day.", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 80 }),
    vocab("a teacher", "e titcheur", "he or she teaches the children at school."),
    vocab("a doctor", "e dokteur", "he or she helps sick people."),
    vocab("a nurse", "e neurss", "he or she takes care of patients at the hospital."),
    vocab("a farmer", "e fârmeur", "he or she grows rice and vegetables."),
    vocab("a mechanic", "e mékanik", "he or she fixes cars."),
    vocab("a driver", "e draïveur", "he or she drives a bus or a taxi."),
    vocab("a cook", "e kouk", "he or she prepares the meals."),
    vocab("a police officer", "e poliss ofisseur", "he or she protects the people."),
    vocab("a seller", "e sèleur", "he or she sells things at the market."),
    vocab("a pilot", "e païleute", "he or she flies a plane."),
    p("", { after: 60 }),
    box("CAREFUL! A or AN?", [
      bullet([run("a", { bold: true, color: C.BLUE }), run(" + consonant sound → "), run("a doctor, a nurse, a pilot", { bold: true })]),
      bullet([run("an", { bold: true, color: C.BLUE }), run(" + vowel sound → "), run("an engineer, an artist, an actor", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_jobs.png", label: "The names of jobs — listen and repeat", url: AUDIO.jobs }], COLOR),
  ];
}

// ---------- S2 — What's your dream? ----------
function ficheS2() {
  const meta = META("What’s your dream? — I want to… / I’d like to…",
    "By the end of the lesson, learners will be able to ask about and express desires, dreams and goals with I want to / I’d like to.",
    "2 / 15", "audio (QR code), job flashcards, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three jobs."),
       fp("2. A or an? … engineer, … cook, … artist."),
       fp("3. What does a mechanic do?")],
      [fp("Answer."),
       fp("E.A.: three correct jobs; an, a, an; he/she fixes cars.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: show the picture of the dreaming girl. Ask: what is she thinking about?")],
      [fp("Look. Guess."),
       fp("E.A.: she wants to be a doctor.")], "“Using pictures”", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « What’s your dream? ». By the end of this lesson, you will talk about your dreams and goals!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue at the garage twice. First, just listen. Then answer: What is B’s job? What would A like to be? Why?")],
      [fp("Listen. Answer."),
       fp("E.A.: B is a mechanic; A would like to be a mathematics teacher; because he is good at maths.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: find the dream expressions in the dialogue: “What would you like to be when you grow up?” — “I’d like to be…”."),
       fp("What other ways can we use? (I want to be…, My dream is to be…)")],
      [fp("Find the expressions. Repeat them."),
       fp("E.A.: I want to…, I’d like to…, my goal/dream is…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to ask — What’s your dream? What are your goals? What would you like to be when you grow up? To answer — I want to be…, I’d like to be…, I wish to be….")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the garage dialogue in pairs. Then ask your partner: What would you like to be? Exchange the job flashcards after answering.")],
      [fp("Role play. Ask and answer."),
       pAns("E.A.: — What would you like to be when you grow up? — I’d like to be a pilot!",
        ["I’d like to be"], { size: SZ.FICHE })],
      "Role play / In pairs", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me about my dream."),
       fp("2. Tell the class your dream job."),
       fp("3. Say it another way (want / would like).")],
      [fp("Ask. Answer."),
       pAns("E.A.: What would you like to be? — I want to be a nurse. / I’d like to be a nurse.",
        ["I want to be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LESSON OF THE DAY — SESSION 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT’S YOUR DREAM?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_dream.png", 400, 768 / 1408),
    p([run("To ask about dreams and goals:", { bold: true })], { after: 50 }),
    bullet([...kw("What’s your dream?", "ouots iôr drime")]),
    bullet([...kw("What are your goals?", "ouate âr iôr gôoulz")]),
    bullet([...kw("What would you like to be when you grow up?", "ouate woud iou laïk tou bi ouène iou grôou eup")]),
    p("", { after: 40 }),
    p([run("To answer:", { bold: true })], { after: 50 }),
    bullet([...kw("I want to be a doctor.", "aï ouonte tou bi e dokteur")]),
    bullet([...kw("I’d like to be a pilot.", "aïd laïk tou bi e païleute"), run("  (I’d = I would)")]),
    bullet([...kw("I wish to be an engineer.", "aï ouich tou bi ane inndjinir"), run("  (more formal)")]),
    p("", { after: 60 }),
    garageDialogueBox(),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_dialogue.png", label: "The dialogue at the garage — listen and repeat", url: AUDIO.dialogue }], COLOR),
  ];
}

// ---------- S3 — The infinitive after want / would like / wish ----------
function ficheS3() {
  const meta = META("The infinitive after want, would like, wish",
    "By the end of the lesson, learners will be able to build correct sentences with want / would like / wish + to + verb.",
    "3 / 15", "blackboard, sentence cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What would you like to be when you grow up?"),
       fp("2. Say it with “want”."),
       fp("3. In the garage dialogue, what does the mechanic do?")],
      [fp("Answer."),
       fp("E.A.: I’d like to be…; I want to be…; he fixes cars.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Write on the board: “I want ……… a doctor.” Ask: what is missing?")],
      [fp("Look. Answer."),
       fp("E.A.: to be — I want TO BE a doctor.")], "Eliciting technique", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The infinitive after want, would like, wish ». By the end of this lesson, your dream sentences will be perfect!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe these sentences from the dialogue and the interview: “What would you like TO BE…?” — “I want TO BE a doctor.” — “I’d like TO HELP people.” What little word comes every time?")],
      [fp("Observe. Answer."),
       fp("E.A.: the little word TO + verb.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Find the rule: want / would like / wish + TO + verb (base form)."),
       fp("Hunt the mistake: “I want be a pilot.” — “She wants to buys a car.”")],
      [fp("Give the rule. Correct the mistakes."),
       fp("E.A.: I want TO BE a pilot. She wants to BUY a car (no -s after to!).")],
      "“Hunt the mistake”", "Sentence cards"),
    stepRow(["5. Synthesis"],
      [fp("So: want / would like / wish + TO + verb. After TO, the verb never changes: to be, to help, to buy, to travel.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Substitution drill: “doctor” → I want to be a doctor. “help people” → I want to help people. “travel” → I want to travel. In pairs, make five dream sentences.")],
      [fp("Transform. Make sentences."),
       pAns("E.A.: I want to…, I’d like to…, I wish to… + verb, five correct sentences.",
        ["to"], { size: SZ.FICHE })],
      "Substitution drill / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete: 1. I want … (be) a farmer. 2. She’d like … (visit) London. 3. They wish … (learn) English.")],
      [fp("Answer."),
       pAns("E.A.: to be — to visit — to learn.", ["to be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LESSON OF THE DAY — SESSION 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WANT, WOULD LIKE, WISH + TO + VERB", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RULE", [
      p([run("want / would like / wish + TO + verb", { bold: true, color: C.BLUE, size: 32 })], { center: true, after: 40 }),
      p([run("After TO, the verb stays in its base form — it never changes!", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Good sentences:", { bold: true, color: C.GREEN })], { after: 50 }),
    bullet([...kw("I want to be a farmer.", "aï ouonte tou bi e fârmeur")]),
    bullet([...kw("She would like to visit London.", "chi woud laïk tou vizite leunndeune")]),
    bullet([...kw("They wish to learn English.", "zéi ouich tou leurne inngglich")]),
    bullet([...kw("I’d like to help people.", "aïd laïk tou hèlp pipeul")]),
    p("", { after: 40 }),
    p([run("Careful — hunt these mistakes:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([run("I want be a pilot. ✗  →  I want ", { size: SZ.BODY }), run("to be", { bold: true, color: C.BLUE }), run(" a pilot. ✓")]),
    bullet([run("She wants to buys a car. ✗  →  She wants to ", { size: SZ.BODY }), run("buy", { bold: true, color: C.BLUE }), run(" a car. ✓ (no -s after to!)")]),
    p("", { after: 40 }),
    bullet([run("The polite short form: "), run("I’d like = I would like", { bold: true, color: C.BLUE }), run(" — perfect for wishes!")]),
  ];
}

// ---------- S4 — The gerund after good at / bad at ----------
function ficheS4() {
  const meta = META("The gerund after be good at, be bad at",
    "By the end of the lesson, learners will be able to say what they are good at and bad at, with the verb-ing form.",
    "4 / 15", "blackboard, flashcards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I want … (be) a doctor."),
       fp("2. Make a dream sentence with “would like”."),
       fp("3. Why does A want to be a maths teacher (garage dialogue)?")],
      [fp("Answer."),
       fp("E.A.: to be; I’d like to…; because he is good at maths.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime singing badly and drawing well. Say: I’m bad at singing! I’m good at drawing! Ask: and you?")],
      [fp("Watch. Answer with gestures.")], "Contextualisation", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Good at, bad at ». By the end of this lesson, you will say your talents in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe Maria’s sentence: “I’m good at STUDYING science, but I’m bad at SPEAKING English.” What happens to the verb after “at”?")],
      [fp("Observe. Answer."),
       fp("E.A.: the verb takes -ING after at: studying, speaking.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Find the rule: to be good at / bad at + verb-ING (the gerund)."),
       fp("Careful with the -ing spelling: make → making, run → running, lie → lying (see the conjugation annex).")],
      [fp("Give the rule. Spell: swimming, writing, playing."),
       fp("E.A.: good/bad at + verb-ing; double letters and silent e watched.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: I’m good at drawing. I’m bad at singing. You can also use nouns: I’m good at maths, at English, at football.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Transformation drill: T: “bad at maths” → Ss: “I’d like to be good at maths!” T: “bad at physics” → Ss: “I’d like to be good at physics!” Then in pairs: say two talents and one weakness.")],
      [fp("Transform. Tell your talents."),
       pAns("E.A.: I’m good at running and drawing, but I’m bad at singing.",
        ["good at"], { size: SZ.FICHE })],
      "Transformation drill / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete: 1. I’m good at … (swim). 2. He’s bad at … (dance). 3. Are you good at … (cook)?")],
      [fp("Answer."),
       pAns("E.A.: swimming — dancing — cooking.", ["swimming"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LESSON OF THE DAY — SESSION 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("GOOD AT, BAD AT + VERB-ING", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE RULE", [
      p([run("to be good at / bad at + verb-ING", { bold: true, color: C.BLUE, size: 32 })], { center: true, after: 40 }),
      p([run("After “at”, the verb takes -ing: this form is called the gerund.", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Examples:", { bold: true })], { after: 50 }),
    bullet([...kw("I’m good at drawing.", "aïm goud ate drôinng")]),
    bullet([...kw("I’m bad at singing.", "aïm bade ate sinnguinng")]),
    bullet([...kw("Maria is good at studying science.", "maria iz goud ate steudiinng saïènss")]),
    bullet([...kw("She is bad at speaking English.", "chi iz bade ate spikinng inngglich")]),
    bullet([run("With a noun, no -ing: "), run("I’m good at maths, at football.", { bold: true, color: C.BLUE })]),
    p("", { after: 40 }),
    p([run("The -ing spelling traps:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([run("make → "), run("making", { bold: true }), run(" (the silent e falls)")]),
    bullet([run("run → "), run("running", { bold: true }), run(", swim → "), run("swimming", { bold: true }), run(" (double the letter)")]),
    bullet([run("lie → "), run("lying", { bold: true }), run(" (ie becomes y)")]),
    p("", { after: 40 }),
    box("THE MAGIC DRILL", [
      p([run("Teacher: “bad at maths” → Pupils: “I’d like to be good at maths!”", { italic: true, size: SZ.BODY })], { after: 20 }),
      p([run("One weakness today, one dream tomorrow!", { italic: true, color: C.GRAY, size: 22 })], { center: true, after: 20 }),
    ]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(), ...lessonS1(), pageBreak(),
    ...ficheS2(), pageBreak(), ...lessonS2(), pageBreak(),
    ...ficheS3(), pageBreak(), ...lessonS3(), pageBreak(),
    ...ficheS4(), pageBreak(), ...lessonS4(),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.mariaInterviewBox = mariaInterviewBox;
