// T11 — UNIT 5 — JOB SKILLS (6 séances + révision + test) — Sessions 35 à 42 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell,
        rubricBadge, rubricTable } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "148F77"; // vert émeraude
const SHADE = "D1F2EB";
const TOTAL = 86;
const AUDIO = {
  // Liens Drive à insérer dès la création du dossier T11 (MP3 de sauvegarde: manuel-t11/audio/)
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — JOB SKILLS", title, slo,
  values: "hard work, self-confidence", session, materials,
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
function interviewBox() {
  const L = (who, text) => bullet([run("— " + who + ": ", { bold: true, color: C.RED }),
    run(text, { bold: true, color: C.BLUE })]);
  return box("THE JOB INTERVIEW — KOTO AT THE GARAGE", [
    L("Mr Rakoto", "Good morning. Please sit down. So, tell me about yourself."),
    L("Koto", "Good morning, Sir. My name is Koto Randria. I am seventeen, and I am a student in T11 at the lycée of Antsirabe."),
    L("Mr Rakoto", "Why do you want this job, Koto?"),
    L("Koto", "I want to become a mechanic, Sir. I am going to finish school in June, and I wish to learn the job with a real team."),
    L("Mr Rakoto", "What are you good at?"),
    L("Koto", "I am good at repairing bicycles — I repair all the bicycles of my village! And I am hardworking and punctual."),
    L("Mr Rakoto", "The job is on Saturdays, from eight to twelve. Is that possible for you?"),
    L("Koto", "Yes, Sir, I am free every Saturday."),
    L("Mr Rakoto", "Very good. We are going to call you next week, Koto."),
    L("Koto", "Thank you very much for your time, Sir. Goodbye!"),
  ]);
}
function adBox() {
  const L = (t, o) => p([run(t, { size: SZ.BODY, ...(o || {}) })], { center: true, after: 50 });
  return box("THE JOB ADVERTISEMENT", [
    L("GARAGE MIRAY — ANTSIRABE", { bold: true, color: C.RED }),
    L("WANTED: an apprentice mechanic", { bold: true }),
    L("Saturdays, from 8 to 12 — small salary + real training."),
    L("We are looking for a serious young person: hardworking, punctual and careful."),
    L("Write to Mr Rakoto, Garage Miray, Avenue of Independence, Antsirabe.", { bold: true }),
  ]);
}
function coverLetterBox() {
  const L = (t, o) => p([run(t, { size: SZ.BODY, ...(o || {}) })], { after: 50 });
  return box("THE MODEL — KOTO’S COVER LETTER", [
    L("Antsirabe, 8 November 2026", { bold: true }),
    L(""),
    L("Dear Mr Rakoto,", { bold: true }),
    L(""),
    L("I am writing to apply for the position of apprentice mechanic at Garage Miray."),
    L("My name is Koto Randria. I am seventeen, and I am a student in T11 at the lycée of Antsirabe. I am good at repairing bicycles, and my teachers say I am hardworking, punctual and reliable."),
    L("I want to become a mechanic. I am going to finish school in June, and I wish to learn the job with your team."),
    L("I am available every Saturday, and for an interview at any time."),
    L(""),
    L("I look forward to your reply."),
    L(""),
    L("Yours sincerely,", { bold: true }),
    L("Koto Randria", { bold: true }),
  ]);
}
function opening() {
  return [
    unitBanner("UNIT 5 — JOB SKILLS", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("Dream the job, say the plan, write the letter!", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u5_jobs.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the jobs, their places and their skills;"),
    p("• talk about my future with three engines: want to, wish and going to;"),
    p("• answer the big questions of a job interview with confidence;"),
    p("• listen to a real interview and note what made the candidate shine;"),
    p("• read a job advertisement and the cover letter that answers it;"),
    p("• write my own cover letter — the little sister of the formal letter!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("hard work, self-confidence.")], { after: 160 }),
    rubricTable(
      "The jobs (a mechanic, a nurse, a tour guide…); the workplaces; the qualities of a good worker (hardworking, punctual, reliable…).",
      "Talking about plans and wishes; answering the questions of a job interview; applying for a job.",
      "want to + verb; wish to + verb; to be going to + verb (the decided plan)."
    ),
    p("", { after: 100 }),
    box("WHY THIS UNIT?", [
      p("In Unit 4 you learned to write a formal letter. Now the letter gets a mission: a job! One day soon, you will stand in front of an employer, in Antsirabe or anywhere in the world. This unit gives you the three engines of the future, the music of the interview and the cover letter that opens the door.", { after: 40 }),
    ]),
  ];
}

// ---------- S35 — Jobs and skills ----------
function ficheS35() {
  const meta = META("Jobs and skills — the three faces of a job",
    "By the end of the lesson, learners will be able to name common jobs with their workplaces and the qualities of a good worker.",
    "1 / 6", "pictures of jobs");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From Unit 4: the two signature pairs of the formal letter?")],
      [fp("Answer."),
       fp("E.A.: Dear Sir or Madam → Yours faithfully; Dear Mr Solo → Yours sincerely.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The job parade: I mime a job, you shout it! Driving a bus… sewing a dress… repairing an engine… guiding tourists to the lemurs! Which jobs live in OUR town?")],
      [fp("Guess. Shout."),
       fp("E.A.: a driver! a seamstress! a mechanic! a tour guide!")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Jobs and skills ». By the end of this lesson, you will present any job with its three faces — the name, the place, the skill!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The three-face table on the board: a mechanic — a garage — good with engines; a nurse — a hospital — careful and calm; a carpenter — a workshop — good with wood; a tour guide — the national park — good at languages; a shopkeeper — a shop — good with numbers. What do the three columns show?")],
      [fp("Observe. Complete."),
       fp("E.A.: the job, the workplace, the skill!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The qualities of the good worker — the employer’s favourite words: hardworking (works a lot), punctual (always on time), reliable (you can trust him — remember the reliable source of Unit 3!), careful, creative. And the magic skill phrase: to be good at + something: She is good at mathematics.")],
      [fp("Collect the qualities."),
       fp("E.A.: hardworking, punctual, reliable, careful, creative; good at…")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: every job has three faces — the name, the place, the skill — and every good worker wears the same five medals: hardworking, punctual, reliable, careful, creative!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The job gallery: pairs choose two jobs of our region and present their three faces + one quality: “A tour guide works in the national park. He is good at languages. A good guide is reliable!”")],
      [fp("Present."),
       pAns("E.A.: A seamstress works in a workshop. She is good at sewing. A good seamstress is careful!",
        ["careful"], { size: SZ.FICHE })],
      "Pair work", "Pictures of jobs"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three faces of: a nurse."),
       fp("2. Give the quality for: always on time; you can trust her."),
       fp("3. Complete: My brother is good … repairing radios.")],
      [fp("Answer."),
       pAns("E.A.: a nurse — a hospital — careful and calm. — punctual; reliable. — at.",
        ["reliable"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(35, TOTAL, meta, rows, "s35");
}
function lessonS35() {
  return [
    p([run("LESSON OF THE DAY — SESSION 35", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("JOBS AND SKILLS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("VOCABULARY"),
    p([run("The jobs of our region:", { bold: true })], { after: 50 }),
    vocab("a mechanic", "e mécanik", "repairs the engines — in a garage"),
    vocab("a nurse", "e neursse", "cares for the sick — in a hospital"),
    vocab("a carpenter", "e carpeunteur", "works the wood — in a workshop"),
    vocab("a seamstress / a tailor", "e simstrèsse / e téileur", "sews the clothes"),
    vocab("a tour guide", "e tour gaïde", "shows the lemurs to the visitors!"),
    vocab("a shopkeeper", "e chopkipeur", "runs a shop — good with numbers"),
    vocab("a farmer", "e farmeur", "grows the rice and the vegetables"),
    p("", { after: 60 }),
    p([run("The five medals of the good worker:", { bold: true })], { after: 50 }),
    vocab("hardworking", "harde-ouorking", "works a lot"),
    vocab("punctual", "ponnktioueul", "always on time"),
    vocab("reliable", "rilaïeubeul", "you can trust him or her"),
    vocab("careful", "kèrfoul", "makes no silly mistakes"),
    vocab("creative", "kriéitive", "full of new ideas"),
    p("", { after: 60 }),
    box("THE THREE FACES OF A JOB", [
      bullet([run("the NAME — ", { bold: true, color: C.RED }), run("a mechanic", { bold: true, color: C.BLUE })]),
      bullet([run("the PLACE — ", { bold: true, color: C.RED }), run("a garage", { bold: true, color: C.BLUE })]),
      bullet([run("the SKILL — ", { bold: true, color: C.RED }), run("he is good at repairing engines.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S36 — want to / wish / going to ----------
function ficheS36() {
  const meta = META("The three engines of tomorrow: want to, wish and going to",
    "By the end of the lesson, learners will be able to express desires and decided plans with want to, wish to and to be going to.",
    "2 / 6", "sentence strips");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The three faces of: a carpenter — and two medals of the good worker.")],
      [fp("Answer."),
       fp("E.A.: a carpenter — a workshop — good with wood; hardworking, reliable…")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The dream box: everyone writes a future job on a paper, I read three aloud — a pilot! a doctor! a singer! How do we SAY these dreams in English? Today, three engines!")],
      [fp("Write a dream. Listen.")],
      "Brainstorming", "Papers"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Want to, wish and going to ». By the end of this lesson, your future will speak English — desire, elegant wish and decided plan!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Three sentences on the board: A. I want to be a nurse. B. I wish to learn the job with your team. C. I am going to finish school in June. Same future? Which one is a simple desire? Which one is elegant, perfect for a letter? Which one is a plan already decided?")],
      [fp("Observe. Compare."),
       fp("E.A.: A: the desire; B: the elegant desire; C: the decided plan!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The three engines: 1. want to + verb — the everyday desire; 2. wish to + verb — the same desire in a formal costume (letters, interviews!); 3. to be going to + verb — the decided plan: am/is/are + going to + verb. Negative: I don’t want to…, I am not going to…. Question: What are you going to do after the exam? Warning: “gonna” exists in songs — never in letters!")],
      [fp("Build the three engines."),
       fp("E.A.: want to; wish to (formal); am/is/are going to + verb.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: want to for the everyday desire, wish to for the elegant desire, to be going to for the plan already decided. Three engines — one future!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("My future in three gears: each student says three sentences about the dream job of the warm-up: I want to… / I wish to… / I am going to…. The class checks the engine!")],
      [fp("Say the three gears."),
       pAns("E.A.: I want to be a tour guide. I wish to work in the national park. I am going to study English very hard!",
        ["I am going to"], { size: SZ.FICHE })],
      "Chain drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: She … going to open a shop."),
       fp("2. Make the question: you / do / after the exam / going to?"),
       fp("3. Which engine for a cover letter — and why?")],
      [fp("Answer."),
       pAns("E.A.: is. — What are you going to do after the exam? — wish to, because it is formal and elegant.",
        ["wish to"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(36, TOTAL, meta, rows, "s36");
}
function lessonS36() {
  return [
    p([run("LESSON OF THE DAY — SESSION 36", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WANT TO, WISH AND GOING TO", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("GRAMMAR"),
    box("THE THREE ENGINES OF TOMORROW", [
      bullet([run("WANT TO + verb — the everyday desire: ", { bold: true, color: C.RED }),
        run("I want to be a nurse.", { bold: true, color: C.BLUE })]),
      bullet([run("WISH TO + verb — the elegant desire (formal!): ", { bold: true, color: C.RED }),
        run("I wish to learn the job with your team.", { bold: true, color: C.BLUE })]),
      bullet([run("BE GOING TO + verb — the decided plan: ", { bold: true, color: C.RED }),
        run("I am going to finish school in June.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The engine “be going to”, piece by piece:", { bold: true })], { after: 50 }),
    bullet([run("I am / you are / he, she is ", { bold: true, color: C.RED }), run("+ going to + verb", { bold: true, color: C.BLUE })]),
    bullet([run("Negative: ", { bold: true }), run("I am not going to sleep late anymore!", { bold: true, color: C.BLUE })]),
    bullet([run("Question: ", { bold: true }), run("What are you going to do after the exam?", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• wish to = the formal costume: perfect for the cover letter and the interview;"),
    p("• “gonna” lives in the songs — never in the letters!"),
    p("• after the three engines, the verb stays in its base form: I want to be ✔ — I want to am ✘."),
  ];
}

// ---------- S37 — The job interview (functions) ----------
function ficheS37() {
  const meta = META("The job interview — big questions, confident answers",
    "By the end of the lesson, learners will be able to answer the main questions of a job interview politely and with confidence.",
    "3 / 6", "question cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The three engines, with one example each.")],
      [fp("Answer."),
       fp("E.A.: I want to be…; I wish to work…; I am going to study….")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The scary chair: one chair in front of the class = the interview chair! Who is afraid of it? Why? Today we remove the fear: an interview is only four questions — and you will own the four answers.")],
      [fp("React.")],
      "Warm-up talk", "A chair!"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The job interview ». By the end of this lesson, the scary chair becomes YOUR chair!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The four big questions on the board: 1. Tell me about yourself. 2. Why do you want this job? 3. What are you good at? 4. When are you available? For each: which tool answers it? (name + age + school; the engines want/wish/going to; good at + medals; the days and hours.)")],
      [fp("Match questions and tools."),
       fp("E.A.: 1 → my identity; 2 → the three engines; 3 → good at + the medals; 4 → my free days.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The music of the confident answer: complete sentences (not just “yes”!); one example for each quality: I am good at repairing bicycles — I repair all the bicycles of my village!; the polite frame: Good morning, Sir/Madam at the start, Thank you for your time at the end. Confidence = preparation, not noise!")],
      [fp("Collect the tools."),
       fp("E.A.: complete sentences; a proof for each quality; the polite frame.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: four questions, four tools — identity, engines, skills with proof, availability — all inside the polite frame: Good morning… Thank you for your time!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Speed interviews: two circles face to face; the outside circle asks the four questions, the inside circle answers — then the circle turns! Every student passes three interviews in ten minutes.")],
      [fp("Ask. Answer. Turn."),
       pAns("E.A.: — Why do you want this job? — I want to become a guide, and I am going to study English every day!",
        ["I am going to"], { size: SZ.FICHE })],
      "Pair work — game", "Question cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the four big questions of the interview."),
       fp("2. Answer question 3 with a proof."),
       fp("3. Give the two sentences of the polite frame.")],
      [fp("Answer."),
       pAns("E.A.: Tell me about yourself / Why do you want this job? / What are you good at? / When are you available? — I am good at cooking: I cook for my family every Sunday! — Good morning, Sir; Thank you for your time.",
        ["Thank you for your time"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(37, TOTAL, meta, rows, "s37");
}
function lessonS37() {
  return [
    p([run("LESSON OF THE DAY — SESSION 37", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE JOB INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    p([run("The four big questions — and their tools:", { bold: true })], { after: 50 }),
    vocab("Tell me about yourself.", "tèle mi ebaoute iorsèlfe", "→ name, age, school"),
    vocab("Why do you want this job?", "ouaï dou iou ouante dhis djobe", "→ the three engines!"),
    vocab("What are you good at?", "ouate are iou goude ate", "→ skill + proof"),
    vocab("When are you available?", "ouène are iou evéilebeul", "→ my free days and hours"),
    p("", { after: 60 }),
    box("THE CONFIDENT ANSWER", [
      bullet([run("Complete sentences — ", { bold: true, color: C.RED }), run("never just “yes”!", { bold: true, color: C.BLUE })]),
      bullet([run("A proof for each quality — ", { bold: true, color: C.RED }),
        run("I am good at repairing bicycles: I repair all the bicycles of my village!", { bold: true, color: C.BLUE })]),
      bullet([run("The polite frame — ", { bold: true, color: C.RED }),
        run("Good morning, Sir/Madam… Thank you for your time.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• confidence is preparation, not noise: prepare your four answers before the interview;"),
    p("• look at the person, speak slowly — your calm is your best costume!"),
  ];
}

// ---------- S38 — Listening: the job interview ----------
function ficheS38() {
  const meta = META("Listening: Koto’s job interview",
    "By the end of the lesson, learners will be able to understand a job interview and note the candidate’s name, skill, plan and availability.",
    "4 / 6", "audio (QR code) or dialogue read aloud, notes grid");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The four big questions of the interview?")],
      [fp("Answer."),
       fp("E.A.: Tell me about yourself / Why…? / What are you good at? / When are you available?")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("The recruiter’s grid on the board: NAME? — JOB WANTED? — SKILL + PROOF? — PLAN? — AVAILABLE? Today YOU are the recruiter: Koto sits on the chair!")],
      [fp("Copy the grid.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Koto’s job interview ». By the end of this lesson, your recruiter’s grid will be full — and you will know what made Koto shine!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: where are we? who speaks? does Koto get good news? Second listening — fill the grid: name, job wanted, skill with its proof, plan, availability.")],
      [fp("Listen. Fill the grid."),
       pAns("E.A.: Koto Randria; apprentice mechanic; good at repairing bicycles — all the bicycles of his village; going to finish school in June; free every Saturday.",
        ["every Saturday"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listening hunt: hands up when you hear… an engine (want to / wish to / going to)! a medal (hardworking, punctual)! a proof! the polite frame! Count: how many engines does Koto use in ONE answer? Then repeat Koto’s best answer with his calm voice.")],
      [fp("Listen. React. Repeat."),
       fp("E.A.: three engines in one answer: want to become, going to finish, wish to learn!")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("What made Koto shine? He used the three engines, he gave a proof for his skill, he answered in complete sentences, and he closed with Thank you very much for your time. Four lights — copy them!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Pairs replay the interview with new data: another job (shop assistant, hotel waiter…), another skill, another proof. The recruiter fills the grid — zero mistakes?")],
      [fp("Act. Check the grid."),
       pAns("E.A.: — What are you good at? — I am good at cooking rice dishes: I cook for twenty people at every family party!",
        ["I am good at"], { size: SZ.FICHE })],
      "Role play", "Notes grids"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Which proof does Koto give for his skill?"),
       fp("2. What is Garage Miray going to do next week?"),
       fp("3. Give the four lights that made Koto shine.")],
      [fp("Answer."),
       pAns("E.A.: He repairs all the bicycles of his village. — Call Koto. — the three engines, a proof, complete sentences, the polite closing.",
        ["Call Koto."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(38, TOTAL, meta, rows, "s38");
}
function lessonS38() {
  return [
    p([run("LESSON OF THE DAY — SESSION 38", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("ON THE CHAIR: KOTO’S JOB INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    interviewBox(),
    p("", { after: 60 }),
    p([run("The recruiter’s grid:", { bold: true })], { after: 50 }),
    bullet([run("NAME? — ", { bold: true }), run("Koto Randria, 17, T11 at the lycée of Antsirabe.", { bold: true, color: C.BLUE })]),
    bullet([run("JOB WANTED? — ", { bold: true }), run("apprentice mechanic.", { bold: true, color: C.BLUE })]),
    bullet([run("SKILL + PROOF? — ", { bold: true }), run("good at repairing bicycles — all the bicycles of his village!", { bold: true, color: C.BLUE })]),
    bullet([run("PLAN? — ", { bold: true }), run("going to finish school in June.", { bold: true, color: C.BLUE })]),
    bullet([run("AVAILABLE? — ", { bold: true }), run("every Saturday, 8 to 12.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE FOUR LIGHTS THAT MADE KOTO SHINE", [
      bullet([run("the three engines in one answer: ", { bold: true }), run("want to become, going to finish, wish to learn;", { bold: true, color: C.BLUE })]),
      bullet([run("a proof for the skill;", { bold: true })]),
      bullet([run("complete sentences;", { bold: true })]),
      bullet([run("the polite closing: ", { bold: true }), run("Thank you very much for your time.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S39 — Reading: the job ad and the cover letter ----------
function ficheS39() {
  const meta = META("Reading: the job advertisement and the cover letter",
    "By the end of the lesson, learners will be able to read a job advertisement and the cover letter that answers it, and find their key information.",
    "5 / 6", "reading texts (one per pair if possible)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The four lights of Koto’s interview?")],
      [fp("Answer."),
       fp("E.A.: three engines, a proof, complete sentences, the polite closing.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Before the chair, there is the paper! How did Koto GET his interview? He read a small paper on a wall… and answered it with a letter. Which two papers are we going to read today?")],
      [fp("Guess."),
       fp("E.A.: the job advertisement and the cover letter!")],
      "Problem-solving", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The job advertisement and the cover letter ». By the end of this lesson, you will see how the letter answers the ad — point by point, like an echo!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First reading — the gist: who is looking for whom? who answers? Second reading — the details: 1. Which job, which days? 2. Which qualities does the garage ask for? 3. Which proof does Koto give? 4. When is he available?")],
      [fp("Read. Answer."),
       pAns("E.A.: apprentice mechanic, Saturdays 8–12. — hardworking, punctual, careful. — he repairs all the bicycles of his village. — every Saturday, and any time for an interview.",
        ["punctual"], { size: SZ.FICHE })],
      "Individual reading", "Reading texts"),
    stepRow(["4. Analysis"],
      [fp("The echo game: the ad says “hardworking, punctual” → the letter answers “my teachers say I am hardworking, punctual and reliable”! Hunt the new formal tools: I am writing to apply for the position of…; I am available…; I look forward to your reply; Yours sincerely (because Koto knows the name: Dear Mr Rakoto!). The cover letter = the formal letter of Unit 4 + the job engines!")],
      [fp("Hunt the tools."),
       fp("E.A.: apply for the position of…, I am available…, I look forward to…, Yours sincerely.")],
      "Scanning technique", "Reading texts"),
    stepRow(["5. Synthesis (post-reading)"],
      [fp("So: the ad asks, the letter echoes! Skeleton of the cover letter: date → Dear + name → I am writing to apply for… → who I am + skills with proof → my engines (want/wish/going to) → availability → closing line → Yours sincerely.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Echo hunters: pairs underline in the ad the three qualities asked — and in the letter the three sentences that echo them. Then they find the ONE engine sentence of each paragraph.")],
      [fp("Underline. Match."),
       pAns("E.A.: “serious young person” ↔ “my teachers say I am… reliable”; “apprentice mechanic” ↔ “I want to become a mechanic”.",
        ["reliable"], { size: SZ.FICHE })],
      "Pair work", "Reading texts"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Quote the sentence that opens Koto’s letter."),
       fp("2. Why Yours sincerely and not Yours faithfully?"),
       fp("3. Give two echoes between the ad and the letter.")],
      [fp("Answer."),
       pAns("E.A.: “I am writing to apply for the position of apprentice mechanic at Garage Miray.” — Because the letter says Dear Mr Rakoto: the name is known! — hardworking/punctual ↔ the medals; Saturdays ↔ available every Saturday.",
        ["Yours sincerely"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(39, TOTAL, meta, rows, "s39");
}
function lessonS39() {
  return [
    p([run("LESSON OF THE DAY — SESSION 39", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE JOB AD AND THE COVER LETTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    adBox(),
    p("", { after: 60 }),
    coverLetterBox(),
    p("", { after: 60 }),
    rubricBadge("VOCABULARY"),
    p([run("Glossary — the tools of the cover letter:", { bold: true })], { after: 50 }),
    vocab("to apply for a job", "tou eplaï fore e djobe", "to ask for the job officially"),
    vocab("I am writing to apply for the position of…", "aï ame raïting tou eplaï", "the opening sentence"),
    vocab("I am available…", "aï ame evéilebeul", "my free days and hours"),
    vocab("an apprentice", "eune eprèntisse", "learns the job while working"),
    vocab("I look forward to your reply.", "aï louke forouorde tou iour riplaï", "the elegant closing line"),
    p("", { after: 60 }),
    box("THE ECHO RULE", [
      bullet([run("The ad asks — the letter echoes! ", { bold: true, color: C.RED }),
        run("“hardworking, punctual” → “my teachers say I am hardworking, punctual and reliable.”", { bold: true, color: C.BLUE })]),
      bullet([run("Known name (Dear Mr Rakoto) → ", { bold: true }), run("Yours sincerely.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S40 — Writing: my cover letter ----------
function ficheS40() {
  const meta = META("Writing: my cover letter",
    "By the end of the lesson, learners will be able to write a complete cover letter answering a job advertisement, with the right register and the three engines.",
    "6 / 6", "job ads on the board, letter map");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("The opening sentence of a cover letter — and the echo rule?")],
      [fp("Answer."),
       fp("E.A.: I am writing to apply for the position of…; the ad asks, the letter echoes!")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("The wall of ads: three ads on the board — a shop assistant for the market days; a waiter for Hotel Tsanga; a helper for the tourist office (English needed!). Each student chooses HIS ad.")],
      [fp("Read. Choose.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My cover letter ». By the end of this lesson, your letter will answer a real ad — with your real skills!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The map of the cover letter on the board: ① place + date ② Dear + title (or name!) ③ I am writing to apply for the position of… ④ who I am + my skill with its proof + a medal or two ⑤ my engines: I want to…, I am going to…, I wish to… ⑥ I am available… + I look forward to your reply ⑦ Yours faithfully / sincerely + name. Check the map in Koto’s letter!")],
      [fp("Check the model."),
       fp("E.A.: all the floors are there!")],
      "Guided observation", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Each student writes the first draft (8 to 12 lines) with the map. I walk and help: the echo with the ad! the formal costume! at least two engines! one proof for the skill!")],
      [fp("Write the first draft.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Peer check: exchange drafts. The checklist: date? Dear…? apply for the position of…? skill + proof? two engines? availability? closing line + signature? Seven boxes — seven ticks!")],
      [fp("Check the neighbour’s draft."),
       fp("E.A.: “Six ticks! But where is your proof?”")],
      "Peer correction", "Checklists"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Final copy with the real layout. Then the casting: I play the employer, I read five letters aloud — which one gets the interview, and why? The class votes with the checklist!")],
      [fp("Copy. Vote."),
       pAns("E.A.: Dear Madam, I am writing to apply for the position of helper at the tourist office…",
        ["apply for the position"], { size: SZ.FICHE })],
      "Whole-class work", "The wall of ads"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write the skills paragraph (two sentences) of your letter: one skill with its proof + one medal.")],
      [fp("Write."),
       pAns("E.A.: I am good at speaking with people: I help at my mother’s shop every market day. My teachers say I am punctual and reliable.",
        ["I am good at"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(40, TOTAL, meta, rows, "s40");
}
function lessonS40() {
  return [
    p([run("LESSON OF THE DAY — SESSION 40", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY COVER LETTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    rubricBadge("FUNCTIONS"),
    box("THE MAP OF THE COVER LETTER", [
      bullet([run("① Top right — ", { bold: true }), run("place + date: Antsirabe, 8 November 2026", { bold: true, color: C.BLUE })]),
      bullet([run("② The greeting — ", { bold: true }), run("Dear Mr Rakoto, / Dear Sir or Madam,", { bold: true, color: C.BLUE })]),
      bullet([run("③ The opening — ", { bold: true }), run("I am writing to apply for the position of…", { bold: true, color: C.BLUE })]),
      bullet([run("④ Who I am — ", { bold: true }), run("my skill + its proof + a medal or two.", { bold: true, color: C.BLUE })]),
      bullet([run("⑤ My engines — ", { bold: true }), run("I want to…, I am going to…, I wish to….", { bold: true, color: C.BLUE })]),
      bullet([run("⑥ The availability — ", { bold: true }), run("I am available… + I look forward to your reply.", { bold: true, color: C.BLUE })]),
      bullet([run("⑦ The signature — ", { bold: true }), run("Yours faithfully / sincerely, + the name.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE ECHO CHECK", [
      bullet([run("Read the ad again: ", { bold: true }), run("every quality asked must find its echo in your letter!", { bold: true, color: C.BLUE })]),
      bullet([run("Known name → ", { bold: true }), run("Yours sincerely", { bold: true, color: C.RED }), run("  — unknown → "), run("Yours faithfully.", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• one letter = one job — never send the same letter to two different ads without changing the echo;"),
    p("• no contractions, no smileys — the cover letter wears the full formal costume;"),
    p("• check the names twice: a letter to “Mr Rakotu” goes to the bin!"),
  ];
}

// ---------- The big lesson ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 5", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Jobs and skills"),
    bullet([run("The three faces: ", { bold: true }), run("the name (a mechanic) — the place (a garage) — the skill (good at repairing engines).", { bold: true, color: C.BLUE })]),
    bullet([run("The five medals: ", { bold: true }), run("hardworking, punctual, reliable, careful, creative.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The three engines of tomorrow"),
    bullet([run("want to + verb (desire) — wish to + verb (elegant, formal) — am/is/are going to + verb (decided plan).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The job interview"),
    bullet([run("Four questions: ", { bold: true }), run("Tell me about yourself — Why do you want this job? — What are you good at? — When are you available?", { bold: true, color: C.BLUE })]),
    bullet([run("Four lights: ", { bold: true }), run("the engines, a proof, complete sentences, Thank you for your time.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The job advertisement"),
    bullet([run("The ad asks, the letter echoes: ", { bold: true }), run("every quality asked finds its echo in the letter!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The cover letter"),
    bullet([run("The map: ", { bold: true }), run("date → Dear… → I am writing to apply for… → skill + proof → the engines → I am available… → Yours faithfully / sincerely.", { bold: true, color: C.BLUE })], { after: 100 }),
  ];
}

// ---------- Exercises ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the three faces of: 1. a nurse 2. a tour guide — and the medal for: 3. always on time 4. you can trust her.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Choose the right engine (want to / wish to / be going to): 1. everyday desire: I … be a pilot. 2. in a cover letter: I … join your team. 3. decided plan: She … open a shop in June. 4. question: What … you … do after the exam?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The interview: answer the four big questions for YOUR dream job — complete sentences, one proof!")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("The echo: the ad asks for “a punctual and careful shop assistant, free on market days”. Write the two echo sentences of the letter — then give the signature if the ad says “write to Mrs Vola”.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short cover letter (8 to 10 lines) answering the Garage Miray ad for a friend who is good at electricity. Follow the map!")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: a nurse — a hospital — careful and calm; a tour guide — the national park — good at languages; punctual; reliable. (1 pt each)", ["reliable"]),
    pAns("Exercise 2: want to — wish to — is going to — What are you going to do…? (1 pt each)", ["is going to"]),
    pAns("Exercise 3: four complete answers with identity, engines, skill + proof, availability. (1 pt each)", ["proof"]),
    pAns("Exercise 4: “My teachers say I am punctual and careful.” + “I am available every market day.” — Yours sincerely (the name is known). (2 pts + 1 pt + 1 pt)", ["Yours sincerely"]),
    pAns("Exercise 5: map complete (date + Dear 1 pt; apply for the position of 1 pt; skill good at electricity + proof + engines 1 pt; availability + closing + signature 1 pt).", ["map"]),
  ];
}

// ---------- Revision (S41) ----------
function revision() {
  return [
    B.bookmarkTitle("s41", "SESSION 41 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: JOB SKILLS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give the three faces of a job, with one example."),
    pAns("E.A.: the name, the place, the skill — a carpenter, a workshop, good with wood.", ["the skill"]),
    p("2. Give the five medals of the good worker."),
    pAns("E.A.: hardworking, punctual, reliable, careful, creative.", ["punctual"]),
    p("3. Give the three engines of tomorrow, with one example each."),
    pAns("E.A.: I want to be…; I wish to learn…; I am going to finish school in June.", ["I am going to"]),
    p("4. Which engine wears the formal costume — and where do we use it?"),
    pAns("E.A.: wish to — in the cover letter and the interview.", ["wish to"]),
    p("5. Make the going-to question: you / study / next year?"),
    pAns("E.A.: What are you going to study next year?", ["going to study"]),
    p("6. Give the four big questions of the job interview."),
    pAns("E.A.: Tell me about yourself — Why do you want this job? — What are you good at? — When are you available?", ["What are you good at?"]),
    p("7. Answer “What are you good at?” with a proof."),
    pAns("E.A.: I am good at cooking: I cook for my family every Sunday!", ["I am good at"]),
    p("8. Give the four lights that made Koto shine."),
    pAns("E.A.: the engines, a proof, complete sentences, the polite closing.", ["a proof"]),
    p("9. Give the opening sentence of a cover letter."),
    pAns("E.A.: I am writing to apply for the position of…", ["apply for the position"]),
    p("10. The echo rule — and the two signatures with their cases?"),
    pAns("E.A.: the ad asks, the letter echoes; Dear Sir or Madam → Yours faithfully; Dear Mr Rakoto → Yours sincerely.", ["the letter echoes"]),
  ];
}

// ---------- Test paper (S42) ----------
function testPaper() {
  return [
    B.bookmarkTitle("s42", "SESSION 42 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T11 TEST PAPER — UNIT 5: JOB SKILLS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with: apprentice — reliable — available — apply. 1. I am going to … for this job. 2. An … learns the job while working. 3. You can trust her: she is …. 4. I am … every Saturday morning.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("The engines: 1. put in the negative: I am going to sleep late. 2. make the question: she / open / a shop / going to? 3. rewrite formally: I want to join your team. 4. correct: He is going to repairs the engine.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The interview: you want the job of helper at the tourist office. Write your answers to: Tell me about yourself. — Why do you want this job? — What are you good at? (with a proof!) — When are you available?")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Register and echo: 1. the ad says “write to Mrs Vola”: which greeting and which signature? 2. the ad asks for “a creative young person, good at English”: write the two echo sentences of the letter.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a complete cover letter (8 to 12 lines) answering this ad: “Hotel Tsanga — WANTED: a waiter for the weekends. Punctual and polite. Write to the manager.” Follow the whole map!")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: apply — apprentice — reliable — available. (1 pt each)", ["apprentice"]),
    pAns("Ex.2: I am not going to sleep late. — Is she going to open a shop? — I wish to join your team. — He is going to repair the engine. (1 pt each)", ["I wish to join"]),
    pAns("Ex.3: four complete answers — identity; engines; skill + proof; availability. (1 pt each)", ["proof"]),
    pAns("Ex.4: Dear Mrs Vola, … Yours sincerely. — “My teachers say I am creative.” + “I am good at English: I speak English with the tourists at the market every Saturday!” (2 pts + 2 pts)", ["Dear Mrs Vola"]),
    pAns("Ex.5: map complete (date + Dear Sir 1 pt; apply for the position of waiter 1 pt; medals punctual/polite echoed + proof + engines 1 pt; availability + closing + Yours faithfully 1 pt).", ["Yours faithfully"]),
  ];
}

module.exports = function unit5() {
  return [
    ...opening(), pageBreak(),
    ...ficheS35(), pageBreak(), ...lessonS35(), pageBreak(),
    ...ficheS36(), pageBreak(), ...lessonS36(), pageBreak(),
    ...ficheS37(), pageBreak(), ...lessonS37(), pageBreak(),
    ...ficheS38(), pageBreak(), ...lessonS38(), pageBreak(),
    ...ficheS39(), pageBreak(), ...lessonS39(), pageBreak(),
    ...ficheS40(), pageBreak(), ...lessonS40(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can present a job with its three faces: the name, the place, the skill.",
      "I can describe a good worker: hardworking, punctual, reliable, careful, creative.",
      "I can use the three engines: I want to…, I wish to…, I am going to….",
      "I can ask and answer the four big questions of a job interview.",
      "I can give a proof for my skill: I am good at…, and here is why!",
      "I can read a job advertisement and find what it asks for.",
      "I can make my letter echo the ad, point by point.",
      "I can write a complete cover letter, from the date to Yours sincerely.",
    ], "NEXT STOP → UNIT 6!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
