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
  reading: "https://drive.google.com/uc?export=download&id=1F28bM3rE5RGt-K3edQ3NJ25RWUJ75Hk8",
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

// ---------- S5 — Dream jobs: the interview game ----------
function ficheS5() {
  const meta = META("Talking about dream jobs — speed chat",
    "By the end of the lesson, learners will be able to hold a short conversation about jobs, dreams and talents, reusing all the structures of sessions 1–4.",
    "5 / 15", "audio (QR code), job flashcards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: I’m good at … (draw)."),
       fp("2. Complete: She wants … (be) a nurse."),
       fp("3. Name two jobs with “an”.")],
      [fp("Answer."),
       fp("E.A.: drawing; to be; an engineer, an artist.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Chain game: “I’d like to be a … and I’m good at …” — each pupil adds his/her own sentence, fast!")],
      [fp("Speak in the chain.")], "Chain drill", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to practise a real conversation about dream jobs. By the end of this lesson, you will interview a friend like a journalist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen again to the dialogue at the garage. Note the FOUR questions you hear.")],
      [fp("Listen. Note the questions."),
       fp("E.A.: What is your job? What would you like to be when you grow up? Why? And you?")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Build the interview plan on the board with the class: 1. job/dream → 2. why → 3. good at → 4. bad at.")],
      [fp("Suggest the questions."),
       fp("E.A.: What’s your dream? Why? What are you good at? What are you bad at?")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, a full interview: — What would you like to be? — I’d like to be a cook. — Why? — Because I’m good at cooking and I like helping my family.")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speed chat: two lines face to face. Student A interviews student B (2 minutes), then everybody moves one step to the right and exchanges roles.")],
      [fp("Interview. Answer. Move."),
       pAns("E.A.: complete interviews with want / I’d like / good at / because.",
        ["because"], { size: SZ.FICHE })],
      "Speed chat / In pairs", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Interview me (three questions)."),
       fp("2. Report: “He/She would like to be… because…”.")],
      [fp("Ask. Report."),
       pAns("E.A.: What would you like to be? Why? What are you good at? — She’d like to be a doctor because she’s good at science.",
        ["She’d like to be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LESSON OF THE DAY — SESSION 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE DREAM JOB INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("My interview plan — four questions:", { bold: true })], { after: 50 }),
    bullet([run("1. ", { bold: true }), ...kw("What would you like to be when you grow up?", "ouate woud iou laïk tou bi ouène iou grôou eup")]),
    bullet([run("2. ", { bold: true }), ...kw("Why?", "ouaï")]),
    bullet([run("3. ", { bold: true }), ...kw("What are you good at?", "ouate âr iou goud ate")]),
    bullet([run("4. ", { bold: true }), ...kw("What are you bad at?", "ouate âr iou bade ate")]),
    p("", { after: 60 }),
    box("A MODEL INTERVIEW", [
      p([run("— What would you like to be when you grow up?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— I’d like to be a cook.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— Why?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— Because I’m good at cooking and I like helping my family.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— And what are you bad at?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— I’m bad at singing… but I’d like to be good at it!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("To report the answers to the class:", { bold: true })], { after: 50 }),
    bullet([...kw("He would like to be a mechanic because he’s good at fixing things.", "hi woud laïk tou bi e mékanik")]),
    bullet([...kw("She wants to be a doctor because she likes helping people.", "chi ouonnts tou bi e dokteur")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_dialogue.png", label: "The dialogue at the garage — listen again", url: AUDIO.dialogue }], COLOR),
  ];
}

// ---------- S6 — Introducing others ----------
function ficheS6() {
  const meta = META("Introducing others",
    "By the end of the lesson, learners will be able to introduce someone to somebody else with the right expressions.",
    "6 / 15", "audio (QR code), stick-figure drawings");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Interview me: dream + reason."),
       fp("2. Report my answer to the class.")],
      [fp("Ask. Report."),
       fp("E.A.: What would you like to be? Why? — He’d like to be… because….")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: show the picture: a pupil presents his friend to another pupil. Ask: what is he saying?")],
      [fp("Look. Guess.")], "“Using pictures”", "Picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Introducing others ». By the end of this lesson, you will present your friends like a real host!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the interview. Identify the expressions the interviewer uses to introduce Maria and Tom.")],
      [fp("Listen. Identify."),
       fp("E.A.: I’d like to introduce you to Maria. — Maria, this is Tom.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Post-listening: collect all the introducing expressions on the board: May I introduce you to…? / I’d like to introduce you to… / This is… / He is…, She is…"),
       fp("Which one is the most polite?")],
      [fp("Repeat. Answer."),
       fp("E.A.: “May I introduce you to…?” is the most polite.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to introduce someone — May I introduce you to John? / I’d like to introduce you to John. / This is John. He is my friend.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Form a circle and introduce one another with a pretended nationality: “My name is… I’m from… Let me introduce you to… He’s from…”."),
       fp("Then: draw a stick figure, write name, country, age — exchange drawings and introduce the person to the class.")],
      [fp("Introduce your friends."),
       pAns("E.A.: This is Naina. She is from Madagascar. She is twelve.",
        ["This is"], { size: SZ.FICHE })],
      "Circle game / Whole-class work", "Stick-figure drawings"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Choose one friend and introduce him/her to the whole class."),
       fp("2. Use the polite question.")],
      [fp("Introduce."),
       pAns("E.A.: May I introduce you to Hery? He is my friend. He is from Antsirabe.",
        ["May I introduce you to"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  return [
    p([run("LESSON OF THE DAY — SESSION 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("INTRODUCING OTHERS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_intro.png", 400, 768 / 1408),
    p([run("To introduce someone:", { bold: true })], { after: 50 }),
    bullet([...kw("May I introduce you to Maria?", "méi aï inntrodiousse iou tou maria"), run("  (very polite)")]),
    bullet([...kw("I’d like to introduce you to Maria.", "aïd laïk tou inntrodiousse iou tou maria")]),
    bullet([...kw("Let me introduce you to Maria.", "lète mi inntrodiousse iou tou maria")]),
    bullet([...kw("This is Tom.", "zis iz tome"), run("  (simple and friendly)")]),
    p("", { after: 40 }),
    p([run("To say who the person is:", { bold: true })], { after: 50 }),
    bullet([...kw("He is my friend.", "hi iz maï frènde")]),
    bullet([...kw("She is from Spain.", "chi iz frome spéine")]),
    bullet([...kw("He is twelve years old.", "hi iz touèlv yirz ôolde")]),
    p("", { after: 40 }),
    p([run("The answer:", { bold: true })], { after: 50 }),
    bullet([...kw("Nice to meet you!", "naïss tou mite iou"), run("  →  "), run("Nice to meet you too!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("A MODEL INTRODUCTION", [
      p([run("— Hello! My name is Soa. I’m from Madagascar.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— Let me introduce you to Koto. He’s from Madagascar too. He’s my best friend.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— Nice to meet you, Koto! — Nice to meet you too!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_maria.png", label: "The interview — listen to the introductions", url: AUDIO.maria }], COLOR),
  ];
}

// ---------- S7 — Countries and nationalities ----------
function ficheS7() {
  const meta = META("Countries and nationalities",
    "By the end of the lesson, learners will be able to state nationalities according to the country of origin, with capital letters.",
    "7 / 15", "world map or flags, matching cards (annex)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Introduce your neighbour to me."),
       fp("2. Where is Maria from? And Tom?")],
      [fp("Answer."),
       fp("E.A.: This is… / May I introduce…; Maria is from Spain; Tom is from Kenya.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: matching game — match the countries of origin and the nationalities (cards from the annex).")],
      [fp("Match the cards.")], "Matching game", "Matching cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Countries and nationalities ». By the end of this lesson, you will travel around the world in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe: Maria is from Spain — she is Spanish. Tom is from Kenya — he is Kenyan. I am from Madagascar — I am Malagasy. What changes?")],
      [fp("Observe. Answer."),
       fp("E.A.: the country gives a nationality word; both take a CAPITAL letter.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Sort the endings on the board: -ese (China → Chinese, Japan → Japanese), -(i)an (Kenya → Kenyan, America → American), -ish (Spain → Spanish, England → English), special (France → French, Madagascar → Malagasy).")],
      [fp("Sort. Give more examples."),
       fp("E.A.: four families of endings; capital letters everywhere.")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Where are you from? — I’m from Madagascar. I’m Malagasy. Country and nationality always start with a CAPITAL letter.")],
      [fp("Listen. Repeat. Copy the table.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Circle game with pretended nationalities: “My name is Li. I’m from China. I’m Chinese!” — introduce your neighbour: “This is Li. He’s Chinese.”")],
      [fp("Play. Introduce."),
       pAns("E.A.: correct country + nationality pairs with capital letters.",
        ["Chinese"], { size: SZ.FICHE })],
      "Circle game", "Flags / map"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Give the nationality: 1. Spain → … 2. Kenya → … 3. Madagascar → … 4. France → … 5. Japan → …")],
      [fp("Answer."),
       pAns("E.A.: Spanish — Kenyan — Malagasy — French — Japanese.", ["Malagasy"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  const rowN = (c, cp, n, np) => new TableRow({ children: [
    cell([p([run(c, { bold: true, size: 26 })], { center: true, after: 10 })], { vAlign: VerticalAlign.CENTER }),
    cell([p([run(n, { bold: true, color: C.BLUE, size: 26 })], { center: true, after: 4 }),
          p([run(`[${np}]`, { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 4 })],
      { vAlign: VerticalAlign.CENTER }),
  ]});
  return [
    p([run("LESSON OF THE DAY — SESSION 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COUNTRIES AND NATIONALITIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_nationalities.png", 400, 768 / 1408),
    bullet([...kw("Where are you from?", "ouèr âr iou frome"), run("  —  "), run("I’m from Madagascar. I’m Malagasy.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    new Table({ width: { size: 10400, type: WidthType.DXA }, rows: [
      new TableRow({ children: [
        cell([p([run("COUNTRY", { bold: true, color: COLOR, size: 26 })], { center: true, after: 10 })], { shade: SHADE }),
        cell([p([run("NATIONALITY", { bold: true, color: COLOR, size: 26 })], { center: true, after: 10 })], { shade: SHADE }),
      ]}),
      rowN("Madagascar", "", "Malagasy", "malagassi"),
      rowN("China", "", "Chinese", "tchaïniiz"),
      rowN("Japan", "", "Japanese", "djapaniiz"),
      rowN("Spain", "", "Spanish", "spanich"),
      rowN("England", "", "English", "inngglich"),
      rowN("Kenya", "", "Kenyan", "kéniane"),
      rowN("America", "", "American", "emérikeune"),
      rowN("France", "", "French", "frèntch"),
    ]}),
    p("", { after: 60 }),
    box("THE GOLDEN RULE", [
      p([run("Countries and nationalities ALWAYS take a capital letter!", { bold: true, color: C.RED, size: 28 })], { center: true, after: 30 }),
      p([run("Madagascar, Malagasy — never “malagasy”.", { italic: true, color: C.GRAY, size: 24 })], { center: true, after: 20 }),
    ]),
    p("", { after: 40 }),
    p([run("The ending families:", { bold: true })], { after: 50 }),
    bullet([run("-ese: ", { bold: true, color: C.GREEN }), run("Chinese, Japanese", { bold: true })]),
    bullet([run("-an / -ian: ", { bold: true, color: C.GREEN }), run("Kenyan, American", { bold: true })]),
    bullet([run("-ish: ", { bold: true, color: C.GREEN }), run("Spanish, English", { bold: true })]),
    bullet([run("special words: ", { bold: true, color: C.GREEN }), run("French, Malagasy", { bold: true })]),
  ];
}

// ---------- S8 — WH-questions ----------
function ficheS8() {
  const meta = META("WH-questions: who, where, what",
    "By the end of the lesson, learners will be able to ask and answer WH-questions about people, places and things.",
    "8 / 15", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the nationality: China, France, Kenya."),
       fp("2. Why the capital letter in “Malagasy”?")],
      [fp("Answer."),
       fp("E.A.: Chinese, French, Kenyan; nationalities always take a capital letter.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: I’m thinking of a person in the class… Ask me questions to find who!")],
      [fp("Ask questions.")], "Guessing game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « WH-questions ». By the end of this lesson, you will ask questions like a journalist: who, where, what!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the short interview again. Note the question words you hear.")],
      [fp("Listen. Note."),
       fp("E.A.: What are your goals? What about you? — and our questions: Who…? Where…?")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Find the use and the structure of WH-questions: WHO → a person; WHERE → a place; WHAT → a thing or an activity."),
       fp("Structure: WH-word + verb/auxiliary + subject …?")],
      [fp("Give the rule and one example each."),
       fp("E.A.: Who is she? Where are you from? What is your job?")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Who is she? — She’s Maria. Where is she from? — From Spain. What does she want to be? — A doctor.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Make a list of questions to ask classmates about their desires and goals. Then two lines: A asks, B answers, move one step right and exchange roles. Finally, introduce some interviewed peers to the class.")],
      [fp("Write questions. Ask. Answer. Introduce."),
       pAns("E.A.: Who is your best friend? Where are you from? What would you like to be?",
        ["Who / Where / What"], { size: SZ.FICHE })],
      "Speed chat / Two lines", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Complete with who, where or what: 1. … is your teacher? 2. … are you from? 3. … is your dream job?")],
      [fp("Answer."),
       pAns("E.A.: Who — Where — What.", ["Who — Where — What"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(8, TOTAL, meta, rows, "s8");
}
function lessonS8() {
  return [
    p([run("LESSON OF THE DAY — SESSION 8", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WH-QUESTIONS: WHO, WHERE, WHAT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE QUESTION WORDS", [
      bullet([...kw("WHO", "hou"), run("  → asks about a "), run("person", { bold: true })]),
      bullet([...kw("WHERE", "ouèr"), run("  → asks about a "), run("place", { bold: true })]),
      bullet([...kw("WHAT", "ouate"), run("  → asks about a "), run("thing or an activity", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The structure: WH-word + verb + subject …?", { bold: true, color: C.GREEN, size: 30 })], { after: 60 }),
    bullet([...kw("Who is she?", "hou iz chi"), run("  —  She’s Maria.")]),
    bullet([...kw("Who wants to be a pilot?", "hou ouonnts tou bi e païleute"), run("  —  Tom does.")]),
    bullet([...kw("Where are you from?", "ouèr âr iou frome"), run("  —  I’m from Madagascar.")]),
    bullet([...kw("Where is Maria from?", "ouèr iz maria frome"), run("  —  From Spain.")]),
    bullet([...kw("What is your job?", "ouate iz iôr djob"), run("  —  I’m a mechanic.")]),
    bullet([...kw("What are your goals?", "ouate âr iôr gôoulz"), run("  —  I want to be a doctor.")]),
    p("", { after: 60 }),
    box("MY JOURNALIST QUESTIONS", [
      p([run("For my speed chat, I prepare my questions:", { bold: true, size: SZ.BODY })], { after: 30 }),
      p([run("Who is your best friend? — Where are you from? — What would you like to be? — What are you good at?", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_maria.png", label: "The interview — listen for the questions", url: AUDIO.maria }], COLOR),
  ];
}

// ---------- S9 — Listening: the interview with Maria and Tom ----------
function ficheS9() {
  const meta = META("Listening — the interview with Maria and Tom",
    "By the end of the lesson, learners will be able to give the gist and detailed information of an oral interview about desires and goals.",
    "9 / 15", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask me a WHO question, a WHERE question, a WHAT question.")],
      [fp("Ask."),
       fp("E.A.: three correct WH-questions.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: we will listen to an interview with two young people, Maria and Tom. Guess: what questions will the interviewer ask?")],
      [fp("Guess."),
       fp("E.A.: Where are you from? What are your goals?…")],
      "Prediction", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a full interview. By the end of this lesson, you will understand a real conversation in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (1st listening): what is the interview about? (the gist)")],
      [fp("Listen. Answer."),
       fp("E.A.: two young people talk about their dreams and goals.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("While-listening (2nd listening): answer the detail questions — 1. Where is Maria from? 2. What does she want to be? Why? 3. What is she good/bad at? 4. What does Tom want to be? Why?")],
      [fp("Listen. Answer."),
       fp("E.A.: Spain; a doctor, to help people; good at studying science, bad at speaking English; a pilot, because he likes traveling.")],
      "Audio / Individual work", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("Post-listening: rebuild the interview on the board with the class: introductions → goals → good at / bad at → opinions.")],
      [fp("Rebuild. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In groups of three: play the interview (interviewer, Maria, Tom). Change roles twice.")],
      [fp("Role play."),
       pAns("E.A.: fluent role play with the interview expressions.",
        ["role play"], { size: SZ.FICHE })],
      "Role play / Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false? Maria is from Kenya. — Tom likes traveling. — Maria is good at English."),
       fp("2. Correct the false sentences.")],
      [fp("Answer. Correct."),
       pAns("E.A.: false (Spain) — true — false (bad at speaking English).",
        ["false"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(9, TOTAL, meta, rows, "s9");
}
function lessonS9() {
  return [
    p([run("LESSON OF THE DAY — SESSION 9", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE INTERVIEW WITH MARIA AND TOM", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    mariaInterviewBox(),
    p("", { after: 60 }),
    p([run("What I understood:", { bold: true })], { after: 50 }),
    bullet([run("Maria", { bold: true, color: C.BLUE }), run(" is from "), run("Spain", { bold: true }), run(". She wants to be a "), run("doctor", { bold: true }), run(" to help people.")]),
    bullet([run("She is "), run("good at studying science", { bold: true, color: C.BLUE }), run(" but "), run("bad at speaking English", { bold: true, color: C.BLUE }), run(".")]),
    bullet([run("Tom", { bold: true, color: C.BLUE }), run(" is from "), run("Kenya", { bold: true }), run(". He wants to be a "), run("pilot", { bold: true }), run(" because he likes traveling.")]),
    bullet([run("Tom thinks being a pilot is "), run("difficult but interesting", { bold: true }), run("; Maria "), run("doesn’t think so", { bold: true, color: C.BLUE }), run(" — she thinks it is exciting!")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_maria.png", label: "The interview with Maria and Tom — listen twice", url: AUDIO.maria }], COLOR),
  ];
}

// ---------- S10 — Asking and giving opinion ----------
function ficheS10() {
  const meta = META("Asking and giving opinion",
    "By the end of the lesson, learners will be able to ask for and give an opinion with Do you think…?, I think…, I don’t think so.",
    "10 / 15", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What does Maria want to be? Why?"),
       fp("2. What is Tom good at… sorry — what does Tom like?")],
      [fp("Answer."),
       fp("E.A.: a doctor, to help people; he likes traveling.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Ask the class: Is English difficult? Listen to the different answers: yes! no! a little!")],
      [fp("Answer freely.")], "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Giving my opinion ». By the end of this lesson, you will say what YOU think — politely!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the end of the interview. What does the interviewer ask? What do Tom and Maria answer?")],
      [fp("Listen. Identify."),
       fp("E.A.: Do you think it is difficult…? — Yes, I do. I think it is difficult. — I don’t think so. I think it is exciting.")],
      "Audio / Whole-class work", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Collect the opinion tools on the board: to ask — Do you think…?; to agree — Yes, I do. / I think…; to disagree politely — No, I don’t. / I don’t think so.")],
      [fp("Repeat. Classify."),
       fp("E.A.: question / agree / disagree, three columns.")],
      "Classification", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: Do you think English is difficult? — Yes, I do. I think it is difficult. / No, I don’t. I don’t think so. I think it is easy!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Opinion survey in pairs: Do you think… football is easy? / science is interesting? / cooking is for girls only? — answer with your real opinion!")],
      [fp("Ask. Give real opinions."),
       pAns("E.A.: No, I don’t! I don’t think so — everyone can cook!",
        ["I don’t think so"], { size: SZ.FICHE })],
      "Survey / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask me for my opinion about maths."),
       fp("2. Agree with me, then disagree politely.")],
      [fp("Ask. Answer."),
       pAns("E.A.: Do you think maths is difficult? — Yes, I do. / I don’t think so.",
        ["Do you think"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(10, TOTAL, meta, rows, "s10");
}
function lessonS10() {
  return [
    p([run("LESSON OF THE DAY — SESSION 10", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ASKING AND GIVING OPINION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("To ask for an opinion:", { bold: true })], { after: 50 }),
    bullet([...kw("Do you think it is difficult?", "dou iou sinnk ite iz difikeulte")]),
    bullet([...kw("What do you think?", "ouate dou iou sinnk")]),
    p("", { after: 40 }),
    p([run("To agree:", { bold: true, color: C.GREEN })], { after: 50 }),
    bullet([...kw("Yes, I do.", "yèss aï dou")]),
    bullet([...kw("I think it is difficult.", "aï sinnk ite iz difikeulte")]),
    p("", { after: 40 }),
    p([run("To disagree politely:", { bold: true, color: C.RED })], { after: 50 }),
    bullet([...kw("No, I don’t.", "nôou aï dôonnte")]),
    bullet([...kw("I don’t think so.", "aï dôonnte sinnk sôou")]),
    bullet([...kw("I think it is exciting!", "aï sinnk ite iz iksaïtinng")]),
    p("", { after: 60 }),
    box("FROM THE INTERVIEW", [
      p([run("— Do you think it is difficult to be a pilot?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— Yes, I do. I think it is difficult, but interesting. (Tom)", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("— I don’t think so. I think it is exciting! (Maria)", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    bullet([run("Golden rule: every opinion is welcome — we disagree "), run("politely", { bold: true, color: C.BLUE }), run(", never with anger!")]),
  ];
}

// ---------- S11 — Opinion role play + guessing game ----------
function ficheS11() {
  const meta = META("Speaking practice — opinions and dream jobs",
    "By the end of the lesson, learners will be able to hold a conversation combining introductions, dreams, WH-questions and opinions.",
    "11 / 15", "job flashcards, opinion cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Ask my opinion about football."),
       fp("2. Disagree with me politely.")],
      [fp("Ask. Answer."),
       fp("E.A.: Do you think…? — I don’t think so.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Gestures game: one pupil mimes a dream job, the class guesses: “Do you want to be a mechanic?” — “Yes, I do! / No, I don’t!”")],
      [fp("Mime. Guess with questions.")], "Guessing game", "Flashcards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to put EVERYTHING together: introductions, dreams, questions and opinions — a real English conversation!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Watch two volunteers play the model conversation (teacher helps): introduce → ask the dream → ask why → give an opinion.")],
      [fp("Watch. Note the four steps.")],
      "Demonstration", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("With the class, write the conversation plan on the board: 1. This is… 2. What would you like to be? 3. Why? 4. Do you think it is difficult? — I think… / I don’t think so.")],
      [fp("Build the plan.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, our conversation has four steps: introduce – dream – reason – opinion. All in English, with a smile!")],
      [fp("Repeat the plan.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In groups of three: A introduces B to C; C interviews B (dream, reason); then they exchange opinions. Change roles until everyone has played the three parts.")],
      [fp("Role play the full conversation."),
       pAns("E.A.: This is Feno. — What would you like to be? — A pilot! — Do you think it’s difficult? — Yes, but exciting!",
        ["exciting"], { size: SZ.FICHE })],
      "Role play / Group work", "Flashcards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Your group plays its conversation in front of the class (1 minute)."),
       fp("The class listens and answers: what is his/her dream? what is the opinion?")],
      [fp("Perform. Listen. Answer."),
       pAns("E.A.: complete conversations, correct structures, clear opinions.",
        ["conversation"], { size: SZ.FICHE })],
      "Group performance", "----"),
  ];
  return fiche(11, TOTAL, meta, rows, "s11");
}
function lessonS11() {
  return [
    p([run("LESSON OF THE DAY — SESSION 11", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FULL ENGLISH CONVERSATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The four steps of my conversation:", { bold: true })], { after: 50 }),
    bullet([run("1. Introduce: ", { bold: true, color: C.GREEN }), run("This is Feno. He’s my friend.", { bold: true, color: C.BLUE })]),
    bullet([run("2. Ask the dream: ", { bold: true, color: C.GREEN }), run("What would you like to be when you grow up?", { bold: true, color: C.BLUE })]),
    bullet([run("3. Ask why: ", { bold: true, color: C.GREEN }), run("Why? — Because I’m good at…", { bold: true, color: C.BLUE })]),
    bullet([run("4. Exchange opinions: ", { bold: true, color: C.GREEN }), run("Do you think it is difficult? — I think… / I don’t think so.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("A MODEL CONVERSATION", [
      p([run("Soa: Koto, may I introduce you to Feno? He’s from Toamasina.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Koto: Nice to meet you, Feno! What would you like to be when you grow up?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Feno: I’d like to be a pilot, because I like traveling.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Koto: Do you think it is difficult?", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Feno: Yes, I do. I think it is difficult, but exciting!", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("Soa: I don’t think so — with work, everything is possible!", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The guessing game:", { bold: true })], { after: 50 }),
    bullet([run("Mime a job → the class asks: "), run("Do you want to be a cook?", { bold: true, color: C.BLUE })]),
    bullet([run("Answer: "), run("Yes, I do! / No, I don’t!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S12 — Reading (1): My Dream Job — gist ----------
function ficheS12() {
  const meta = META("Reading (1) — “My Dream Job”: the gist",
    "By the end of the lesson, learners will be able to read a text about dreams and goals and give its gist.",
    "12 / 15", "reading text (in the book), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Play one step of your conversation (introduce + dream)."),
       fp("2. Give me your opinion about reading in English.")],
      [fp("Speak."),
       fp("E.A.: correct structures; I think it is…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: the title of our text is “My Dream Job”. Guess the content of the text from its title!")],
      [fp("Guess."),
       fp("E.A.: someone talks about the job he/she would like to do.")],
      "Prediction", "Text"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to READ a real English text. By the end of this lesson, you will find the main idea of a text — its gist!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (1st reading, silent): read the text once. Then answer: who is speaking? what is the main idea?")],
      [fp("Read silently. Answer."),
       fp("E.A.: a young person; everyone can choose their dream job — gender doesn’t matter.")],
      "Silent reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Check the predictions: were our guesses right?"),
       fp("Read one sentence and point to the person it talks about (the writer, the friend, the brother).")],
      [fp("Check. Read and point."),
       fp("E.A.: writer → doctor; friend → engineer; brother → fashion designer.")],
      "Whole-class work", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, the gist: three young people have three dreams — doctor, engineer, fashion designer — and everyone is free to follow their dream, girl or boy.")],
      [fp("Repeat the gist in one sentence.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Read the text aloud, one sentence per pupil, with good pronunciation (listen to the audio first).")],
      [fp("Listen. Read aloud."),
       pAns("E.A.: clear reading, correct pronunciation of doctor, engineer, designer.",
        ["engineer"], { size: SZ.FICHE })],
      "Reading aloud", "Audio (QR code)"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In one sentence: what is the text about?"),
       fp("2. Who wants to be an engineer?")],
      [fp("Answer."),
       pAns("E.A.: dream jobs for everyone, girls and boys; the writer’s friend.",
        ["dream jobs"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(12, TOTAL, meta, rows, "s12");
}
function readingText() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return box("MY DREAM JOB (reading text)", [
    L("When I think about my dream job, I imagine doing something I love. I want to help people, so I’d like to become a doctor. Some think only men can be doctors and women should be nurses, but I believe anyone can be a doctor if they work hard. Gender doesn’t matter."),
    L("My friend wants to be an engineer. She is good at solving problems and maths. Some tell her engineering is a “man’s job”, but she doesn’t listen. She knows girls can be good at engineering too!"),
    L("In my family, we talk about our dreams. My brother isn’t good at sports, but he is great at drawing. He wants to be a fashion designer. Some say fashion is for girls, but he disagrees. He believes everyone can choose their dream job, no matter what others think."),
    L("I hope we live in a world where everyone feels free to follow their dreams."),
  ]);
}
function lessonS12() {
  return [
    p([run("LESSON OF THE DAY — SESSION 12", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: “MY DREAM JOB”", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_equality.png", 400, 768 / 1408),
    readingText(),
    p("", { after: 60 }),
    p([run("The gist (the main idea):", { bold: true })], { after: 50 }),
    bullet([run("Everyone can choose their dream job — "), run("gender doesn’t matter", { bold: true, color: C.BLUE }), run("!")]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t7_u1_reading.png", label: "“My Dream Job” — listen and read along", url: AUDIO.reading }], COLOR),
  ];
}

// ---------- S13 — Reading (2): details + vocabulary ----------
function ficheS13() {
  const meta = META("Reading (2) — details, new words and opinions",
    "By the end of the lesson, learners will be able to infer detailed information from the text, learn new words and share opinions about it.",
    "13 / 15", "reading text (in the book), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What is the gist of “My Dream Job”?"),
       fp("2. Who wants to be a fashion designer?")],
      [fp("Answer."),
       fp("E.A.: everyone can follow their dream, gender doesn’t matter; the writer’s brother.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick quiz on the text, books closed: doctor — who? engineer — who? designer — who?")],
      [fp("Answer from memory.")], "Memory quiz", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we go DEEPER into the text: details, new words, and YOUR opinions.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading (2nd reading): answer the detail questions — 1. Why does the writer want to be a doctor? 2. What is the friend good at? 3. What is the brother great at?")],
      [fp("Read. Answer."),
       fp("E.A.: to help people; solving problems and maths; drawing.")],
      "Detailed reading", "Text"),
    stepRow(["4. Analysis"],
      [fp("Write out the new words you have learnt from the text: gender, to believe, to solve, to disagree, to follow a dream…"),
       fp("Make new sentences with these words.")],
      [fp("List the words. Make sentences."),
       fp("E.A.: I believe girls can be pilots. He disagrees with me.")],
      "Vocabulary work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("Post-reading: share opinions — Do you think a woman can be a mechanic? Do you think a man can be a nurse? Use I think… / I don’t think so.")],
      [fp("Give opinions politely."),
       fp("E.A.: Yes, I do! I think everyone can choose their job.")],
      "Discussion", "----"),
    stepRow(["6. Practice"],
      [fp("Second text (faster readers): read “Women and work” and answer — what jobs did women start taking?")],
      [fp("Read. Answer."),
       pAns("E.A.: pilots, electricians, plumbers, bus-drivers.",
        ["pilots"], { size: SZ.FICHE })],
      "Silent reading", "Text"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Make one sentence with “believe” and one with “disagree”."),
       fp("2. Give your opinion: can everyone follow their dream?")],
      [fp("Write. Answer."),
       pAns("E.A.: correct sentences; Yes! I think everyone can follow their dream.",
        ["believe"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(13, TOTAL, meta, rows, "s13");
}
function lessonS13() {
  const L = (t) => p([run(t, { size: SZ.BODY })], { after: 60 });
  return [
    p([run("LESSON OF THE DAY — SESSION 13", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("NEW WORDS AND A SECOND TEXT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("My new words from “My Dream Job”:", { bold: true })], { after: 50 }),
    vocab("gender", "djènndeur", "being a girl or a boy."),
    vocab("to believe", "tou biliiv", "to think something is true: I believe girls can be engineers."),
    vocab("to solve problems", "tou solve problèmz", "to find the answers."),
    vocab("to disagree", "tou dissegri", "to not think the same: he disagrees."),
    vocab("to follow a dream", "tou folôou e drime", "to work for your dream."),
    p("", { after: 60 }),
    box("WOMEN AND WORK (a second text)", [
      L("An old proverb says: “a woman’s place is at home”. But at the present time, this is not true anymore. Women are more attracted by work outside the home. Their living conditions have changed and got better thanks to modern progress: women’s education and human rights."),
      L("All women consider work as a necessity of modern life. While single women work to earn their living and help their families, married women work to give financial help to their husbands as the cost of living is always going up."),
      L("Most women do traditional women’s jobs like secretaries and nurses. However, some of them have already started taking men’s jobs as pilots, electricians, plumbers, bus-drivers, etc. With so much pressure on women working both inside and outside the home, are men prepared to help with the housework?"),
    ]),
    p("", { after: 60 }),
    p([run("My opinion on the texts:", { bold: true })], { after: 50 }),
    bullet([run("Do you think a woman can be a pilot? — "), run("Yes, I do! I think everyone can choose their job.", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S14 — Writing (1): sentences about dreams ----------
function ficheS14() {
  const meta = META("Writing (1) — words and sentences about dreams",
    "By the end of the lesson, learners will be able to write correct simple sentences about dreams and desires.",
    "14 / 15", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Make a sentence with “believe”."),
       fp("2. Spell “engineer”.")],
      [fp("Answer."),
       fp("E.A.: correct sentence; E-N-G-I-N-E-E-R.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: two lines. Student A says what he is good or bad at, then asks “And you?”. Student B answers. Move one step right and exchange roles.")],
      [fp("Speak in the two lines.")], "Speed chat", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we start WRITING in English! By the end of this lesson, you will write correct sentences about dreams and desires.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model on the board: “I am bad at singing.” → the magic change → “I’d like to be good at singing!” What changed?")],
      [fp("Observe. Answer."),
       fp("E.A.: the weakness becomes a desire with I’d like to be good at….")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Check the writing rules: capital letter at the start, full stop at the end, capital letters for countries and nationalities, apostrophe in I’d / don’t.")],
      [fp("Give the rules."),
       fp("E.A.: Capital + . ; Madagascar, Malagasy; I’d = I would.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: a good sentence = Capital letter + correct words + full stop. Nationalities and countries ALWAYS with a capital letter.")],
      [fp("Repeat the rules. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("While-writing: write a sentence expressing something that someone is bad at. Exchange papers with your neighbour: convert the sentence into a desire! Then correct each other’s mistakes (peer correction).")],
      [fp("Write. Exchange. Convert. Correct."),
       pAns("E.A.: “He is bad at swimming.” → “He’d like to be good at swimming.”",
        ["He’d like"], { size: SZ.FICHE })],
      "Peer correction / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write three sentences: 1. one thing you are good at; 2. one thing you are bad at; 3. the desire that comes from it.")],
      [fp("Write."),
       pAns("E.A.: I’m good at drawing. I’m bad at English. I’d like to be good at English.",
        ["I’d like to be good at"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(14, TOTAL, meta, rows, "s14");
}
function lessonS14() {
  return [
    p([run("LESSON OF THE DAY — SESSION 14", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING SENTENCES ABOUT DREAMS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITING RULES", [
      bullet([run("Start with a "), run("Capital letter", { bold: true, color: C.BLUE }), run(", finish with a "), run("full stop (.)", { bold: true, color: C.BLUE })]),
      bullet([run("Countries and nationalities take a "), run("capital letter", { bold: true, color: C.BLUE }), run(": Madagascar, Malagasy, Spain, Spanish")]),
      bullet([run("The apostrophe: "), run("I’d = I would", { bold: true, color: C.BLUE }), run(" ; "), run("don’t = do not", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The magic change — from weakness to desire:", { bold: true })], { after: 50 }),
    bullet([run("I am bad at singing.  →  ", { size: SZ.BODY }), run("I’d like to be good at singing!", { bold: true, color: C.BLUE })]),
    bullet([run("He is bad at swimming.  →  ", { size: SZ.BODY }), run("He’d like to be good at swimming!", { bold: true, color: C.BLUE })]),
    bullet([run("She is bad at maths.  →  ", { size: SZ.BODY }), run("She’d like to be good at maths!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("My three sentences (model):", { bold: true })], { after: 50 }),
    bullet([run("I’m good at drawing.", { italic: true })]),
    bullet([run("I’m bad at speaking English.", { italic: true })]),
    bullet([run("I’d like to be good at speaking English!", { italic: true })]),
    p("", { after: 60 }),
    bullet([run("Peer correction: I exchange my paper with my neighbour and we "), run("correct each other’s mistakes", { bold: true, color: C.BLUE }), run(" — kindly!")]),
  ];
}

// ---------- S15 — Writing (2): introducing a classmate + my paragraph ----------
function ficheS15() {
  const meta = META("Writing (2) — introducing a classmate, my dream paragraph",
    "By the end of the lesson, learners will be able to introduce someone in a written form and write a short paragraph about their dream job.",
    "15 / 15", "copy-books, stick-figure drawings");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Write on the board: “i want to be a doctor” — correct it!"),
       fp("2. What takes a capital letter?")],
      [fp("Correct. Answer."),
       fp("E.A.: I want to be a doctor. ; I, first word, countries, nationalities, names.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: speed dating! Ask three classmates their dreams and desires. Note the answers (name + dream).")],
      [fp("Ask. Note.")], "Speed chat", "Copy-books"),
    stepRow(["2. Presentation"],
      [fp("Today, our final mission of Unit 1: write a full paragraph — introduce a classmate AND tell his/her dream. You can invent nationalities!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the model paragraph on the board: “This is Naina. She is Malagasy. She is good at science. She’d like to be a doctor because she wants to help people.” Find the four ideas.")],
      [fp("Observe. Find."),
       fp("E.A.: introduction — nationality — talent — dream + reason.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Build the paragraph plan with the class: 1. This is… 2. He/She is… (nationality) 3. He/She is good at… 4. He/She would like to be… because….")],
      [fp("Build the plan. Copy it.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: four sentences make a beautiful paragraph. Don’t forget: capital letters, full stops, and the apostrophe in She’d / He’d!")],
      [fp("Repeat the plan.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("While-writing: write your paragraph about one classmate (real or invented nationality). Share your writing with your peers and correct each other’s mistakes.")],
      [fp("Write. Share. Correct."),
       pAns("E.A.: This is Li. He is Chinese. He is good at drawing. He’d like to be an engineer because he likes solving problems.",
        ["He’d like to be"], { size: SZ.FICHE })],
      "Peer correction / In pairs", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Post-writing: read out your paragraph to the class, loud and clear!")],
      [fp("Read out."),
       pAns("E.A.: complete paragraphs, four ideas, correct writing rules.",
        ["paragraph"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(15, TOTAL, meta, rows, "s15");
}
function lessonS15() {
  return [
    p([run("LESSON OF THE DAY — SESSION 15", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY WRITTEN INTRODUCTION PARAGRAPH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The paragraph plan — four sentences:", { bold: true })], { after: 50 }),
    bullet([run("1. Introduce: ", { bold: true, color: C.GREEN }), run("This is … .", { bold: true, color: C.BLUE })]),
    bullet([run("2. Nationality: ", { bold: true, color: C.GREEN }), run("He/She is … (Malagasy, Chinese, Spanish…).", { bold: true, color: C.BLUE })]),
    bullet([run("3. Talent: ", { bold: true, color: C.GREEN }), run("He/She is good at … .", { bold: true, color: C.BLUE })]),
    bullet([run("4. Dream + reason: ", { bold: true, color: C.GREEN }), run("He/She would like to be … because … .", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("A MODEL PARAGRAPH", [
      p([run("This is Naina. She is Malagasy. She is good at science. She’d like to be a doctor because she wants to help people.", { italic: true, size: SZ.BODY })], { after: 30 }),
      p([run("This is Li. He is Chinese. He is good at drawing. He’d like to be an engineer because he likes solving problems.", { italic: true, size: SZ.BODY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Before I hand in my paragraph, I check:", { bold: true })], { after: 50 }),
    bullet([run("capital letters (names, countries, nationalities, first words)?")]),
    bullet([run("full stops at the end of every sentence?")]),
    bullet([run("would like / want + "), run("TO", { bold: true, color: C.RED }), run(" + verb?")]),
    bullet([run("good at + verb-"), run("ING", { bold: true, color: C.RED }), run("?")]),
  ];
}

module.exports = function unit1() {
  return [
    ...opening(), pageBreak(),
    ...ficheS1(), pageBreak(), ...lessonS1(), pageBreak(),
    ...ficheS2(), pageBreak(), ...lessonS2(), pageBreak(),
    ...ficheS3(), pageBreak(), ...lessonS3(), pageBreak(),
    ...ficheS4(), pageBreak(), ...lessonS4(), pageBreak(),
    ...ficheS5(), pageBreak(), ...lessonS5(), pageBreak(),
    ...ficheS6(), pageBreak(), ...lessonS6(), pageBreak(),
    ...ficheS7(), pageBreak(), ...lessonS7(), pageBreak(),
    ...ficheS8(), pageBreak(), ...lessonS8(), pageBreak(),
    ...ficheS9(), pageBreak(), ...lessonS9(), pageBreak(),
    ...ficheS10(), pageBreak(), ...lessonS10(), pageBreak(),
    ...ficheS11(), pageBreak(), ...lessonS11(), pageBreak(),
    ...ficheS12(), pageBreak(), ...lessonS12(), pageBreak(),
    ...ficheS13(), pageBreak(), ...lessonS13(), pageBreak(),
    ...ficheS14(), pageBreak(), ...lessonS14(), pageBreak(),
    ...ficheS15(), pageBreak(), ...lessonS15(),
  ];
};
module.exports.COLOR = COLOR;
module.exports.AUDIO = AUDIO;
module.exports.mariaInterviewBox = mariaInterviewBox;
