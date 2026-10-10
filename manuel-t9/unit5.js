// T9 — UNIT 5 — JOB AND MASS MEDIA (10 séances + révision + test) — Sessions 45 à 56 / 68
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange brûlé
const SHADE = "FAE5D3";
const TOTAL = 68;
const AUDIO = {
  interview: "https://drive.google.com/uc?export=download&id=1FLb9FzivpAxPYIBACwqj60ELGhnwnftZ",
  jobad: "https://drive.google.com/uc?export=download&id=1aiWDJxXzLXprsUMPwTNNfpkd3YkDJPXR",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 5 — JOB AND MASS MEDIA", title, slo,
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
function interviewDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("THE JOB INTERVIEW (listening passage)", [
    L("Manager", "Good morning, Miss Vonjy. I’m Benja, the Human Resources Manager."),
    L("Vonjy", "Good morning, Mr Benja. Nice to meet you."),
    L("Manager", "So, can you tell me about your work experience, please?"),
    L("Vonjy", "Sure. I have worked as a cook at Pepito School for 15 years now."),
    L("Manager", "OK, good. Why do you like this job?"),
    L("Vonjy", "Well, being a cook is an interesting job. It keeps me active, and also I enjoy cooking."),
    L("Manager", "Here, you have to cook for our patients: their breakfast, lunch and dinner. Tell me, how many hours can you stand on your feet?"),
    L("Vonjy", "I can easily work on my feet for more than eight hours."),
    L("Manager", "If I call your previous employer, what will he say?"),
    L("Vonjy", "He will say I’m honest and I work well."),
    L("Manager", "OK, nice. Thank you very much, Miss Vonjy. We will contact you soon to let you know the outcome of this interview."),
    L("Vonjy", "Good-bye!"),
  ]);
}
function jobAdBox() {
  const L = (t, o = {}) => p([run(t, { size: SZ.BODY, ...o })], { after: 40 });
  return box("JOB OPPORTUNITY (reading text)", [
    L("A well reputed company located in Toamasina is looking for a full-time secretary.", { bold: true }),
    L("Responsibilities:", { bold: true, color: COLOR }),
    L("• receiving guests and visitors    • answering telephone calls"),
    L("• preparing reports and documents    • reading mails and preparing response letters"),
    L("Qualifications and experiences:", { bold: true, color: COLOR }),
    L("• excellent computer skills    • at least 5 years work experience"),
    L("• fluent in Malagasy, French and English    • not more than 40 years of age"),
    L("• available to work on weekends"),
    L("If you are interested, apply by email, enclosing your CV and availability, no later than 23rd of May.", { italic: true }),
  ]);
}
function applicationBox() {
  const L = (t, o = {}) => p([run(t, { size: SZ.BODY, ...o })], { after: 40 });
  return box("THE JOB APPLICATION EMAIL (reading text)", [
    L("From: sahondrasoa@yahoo.fr    To: job_ad@yahoo.fr", { italic: true, color: C.GRAY }),
    L("Subject: Job application for the position of secretary", { bold: true }),
    L("Dear Sir,"),
    L("I would like to apply for the position of secretary in your company. I have ten years of experience. I have worked as a secretary at the Ministry of Agriculture since 2010. I can speak English and French, and Malagasy is my native language. I am fully available to work even on weekend days. I am an enthusiastic worker and I can work immediately."),
    L("I am looking forward to reading from you soon."),
    L("Yours faithfully,"),
    L("Sahondra RAZAFINARIVO", { bold: true }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 5 — JOB AND MASS MEDIA", COLOR, "unit5"),
    p("", { after: 100 }),
    p([run("The job that suits you!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u7_jobs.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the common jobs of Madagascar — and build them with verb + er;"),
    p("• talk about job skills: I can speak English, I’m good at cooking;"),
    p("• find the job that suits me — and play the mingle game;"),
    p("• understand and act a real job interview;"),
    p("• read a job advertisement in a newspaper or on Facebook;"),
    p("• read and judge a job application email;"),
    p("• use the present perfect: I have worked here since 2010 / for 15 years;"),
    p("• tell the difference: present perfect vs simple past;"),
    p("• write my own CV, job ad and application letter!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, altruism.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("One day soon, you will look for a job — or create one! In this unit, you build the English of work: describing skills with confidence, passing an interview, and writing the letters that open doors.", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t9_u7_interview.png", label: "The job interview — listen and act", url: AUDIO.interview },
      { qr: "qr_t9_u7_jobad.png", label: "Job opportunity — the advertisement", url: AUDIO.jobad },
    ], COLOR),
  ];
}

// ---------- S45 — Common jobs + verb + er ----------
function ficheS45() {
  const meta = META("Common jobs — word formation: verb + er",
    "By the end of the lesson, learners will be able to name common local jobs, match them with their descriptions and form job names with verb + er.",
    "1 / 10", "job flashcards (names, pictures, descriptions)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give one health advice with “should”."),
       fp("2. If-clause type 2: “If I … (be) a doctor, I … (help) everyone.”")],
      [fp("Answer."),
       fp("E.A.: You should sleep eight hours; were, would help.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime time! One student acts out a job with gestures — the class guesses: Are you a fisherman? A hairdresser?")],
      [fp("Mime. Guess."),
       fp("E.A.: You are a carpenter! You are a cook!")],
      "Using game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Common jobs ». By the end of this lesson, you will name the jobs of your town — and build new job names like a word factory!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("In groups, match the mixed-up flashcards: pictures + job names + descriptions. A cook, a carpenter, a farmer, a mechanic, a fashion designer… to repair cars, to make furniture, to sew clothes…")],
      [fp("Match. Share."),
       fp("E.A.: The mechanic repairs cars! The carpenter makes tables and chairs!")],
      "Group work", "Flashcards"),
    stepRow(["4. Analysis"],
      [fp("Look at the names: teach → teachER, farm → farmER, drive → drivER, garden → gardenER… What is the machine? And the irregular friends: cook (no change!), fisherMAN, salesMAN.")],
      [fp("Observe. Build."),
       fp("E.A.: verb + er = the person who does it! to bake → a baker.")],
      "Whole-class work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: many job names = verb + er. The big list: babysitter, waiter/waitress, fisherman, gardener, hairdresser, tailor, cook, tourist guide, driver, salesman, housekeeper, carpenter, farmer, teacher, plumber, blacksmith, designer, mechanic, shoemaker, doctor.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Quick round: I say the description, you give the job! “This person repairs water pipes.” — “This person makes bread.” — “This person cuts hair.”")],
      [fp("Answer fast!"),
       pAns("E.A.: a plumber! a baker! a hairdresser!",
        ["a plumber!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Build the job: to drive, to garden, to design."),
       fp("2. What does a blacksmith do?")],
      [fp("Answer."),
       pAns("E.A.: a driver, a gardener, a designer; he works with iron and metal.",
        ["a driver, a gardener"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(45, TOTAL, meta, rows, "s45");
}
function lessonS45() {
  return [
    p([run("LESSON OF THE DAY — SESSION 45", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("COMMON JOBS — THE WORD FACTORY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u7_jobs.png", 400, 768 / 1376),
    box("THE WORD FACTORY: VERB + ER = THE JOB!", [
      bullet([run("to teach → a teacher;  to farm → a farmer;  to drive → a driver", { bold: true, color: C.BLUE })]),
      bullet([run("to garden → a gardener;  to design → a designer;  to bake → a baker", { bold: true, color: C.BLUE })]),
      bullet([run("Special friends: ", { bold: true, color: C.RED }), run("a cook (not a cooker — that is the machine!), a fisherman, a salesman, a waiter / a waitress.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The jobs of our town:", { bold: true })], { after: 50 }),
    vocab("a babysitter / a nanny", "e béïbisiteur / e nani", "takes care of babies"),
    vocab("a waiter / a waitress", "e ouéïteur / e ouéïtrèsse", "serves in a restaurant"),
    vocab("a fisherman", "e ficheurmane", "fishes on the sea or the river"),
    vocab("a hairdresser", "e hèrdrèseur", "cuts and styles hair"),
    vocab("a tailor", "e téïleur", "sews clothes"),
    vocab("a tourist guide", "e touriste gaïde", "shows the country to visitors"),
    vocab("a housekeeper", "e haousskipeur", "keeps the house clean"),
    vocab("a carpenter", "e karpennteur", "makes furniture: tables, chairs…"),
    vocab("a plumber", "e pleumeur", "repairs water pipes (the b is silent!)"),
    vocab("a blacksmith", "e blaksmith", "works with iron and metal"),
    vocab("a mechanic", "e mekanik", "repairs cars"),
    vocab("a shoemaker", "e choumméïkeur", "makes and mends shoes"),
  ];
}

// ---------- S46 — Job skills: can + be good at ----------
function ficheS46() {
  const meta = META("Job skills — can expressing ability; jobs and gender",
    "By the end of the lesson, learners will be able to describe job skills with can and be good at, and discuss jobs and gender.",
    "2 / 10", "skill cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Build the job: to teach, to fish."),
       fp("2. What does a tailor do?")],
      [fp("Answer."),
       fp("E.A.: a teacher, a fisherman; he or she sews clothes.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Hands up! Who can swim? Who can cook rice? Who can sing? Who can repair a bicycle?")],
      [fp("Answer with hands and sentences."),
       fp("E.A.: I can cook rice! I can’t repair a bicycle yet!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Job skills ». Every job needs special skills — and YOU already have many!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the skill sentences: A tourist guide CAN SPEAK foreign languages. A carpenter CAN WORK WITH wood. A cook IS GOOD AT cooking. A nanny FEELS AT EASE WITH babies. A shoemaker KNOWS HOW TO mend shoes. A designer IS A PERSON WITH creativity.")],
      [fp("Observe. Repeat.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The skill machines: can + verb (ability); be good at + -ing; know how to + verb; feel at ease with + noun. Match each job with its skills! And the big question: are there jobs only for men or only for women?")],
      [fp("Build sentences. Discuss."),
       fp("E.A.: A driver can drive for hours. — No! Jobs that used to be only for men are for both men and women now: women drive taxis, men cook!")],
      "Pair work", "Skill cards"),
    stepRow(["5. Synthesis"],
      [fp("So: can / be good at / know how to / feel at ease with — and one golden idea: skills have no gender. A honest person with creativity can do any job!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Your skill portrait, three sentences: one “I can…”, one “I’m good at…”, one “I know how to…”. Then your neighbour suggests a job for you!")],
      [fp("Write. Share."),
       pAns("E.A.: I can speak three languages, I’m good at Maths, I know how to fix radios. — You could be an engineer!",
        ["I’m good at Maths"], { size: SZ.FICHE })],
      "Personalization technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give one skill of a tourist guide and one of a carpenter."),
       fp("2. Finish: “Jobs that used to be done only by men…”")],
      [fp("Answer."),
       pAns("E.A.: can speak foreign languages; can work with wood; …are for both men and women now!",
        ["for both men and women now"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(46, TOTAL, meta, rows, "s46");
}
function lessonS46() {
  return [
    p([run("LESSON OF THE DAY — SESSION 46", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("JOB SKILLS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FOUR SKILL MACHINES", [
      bullet([run("CAN + verb:", { bold: true }), run("  A tourist guide can speak foreign languages.", { bold: true, color: C.BLUE })]),
      bullet([run("BE GOOD AT + -ing:", { bold: true }), run("  A cook is good at cooking.", { bold: true, color: C.BLUE })]),
      bullet([run("KNOW HOW TO + verb:", { bold: true }), run("  A shoemaker knows how to mend shoes.", { bold: true, color: C.BLUE })]),
      bullet([run("FEEL AT EASE WITH + noun:", { bold: true }), run("  A nanny feels at ease with babies.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("More skill words:", { bold: true })], { after: 50 }),
    vocab("a skill", "e skile", "something you do well"),
    vocab("creativity", "kriéïtiviti", "the power of new ideas"),
    vocab("an honest person", "ane onèste peurseune", "a person who tells the truth"),
    vocab("to mend", "tou mènnde", "to repair"),
    p("", { after: 60 }),
    box("JOBS AND GENDER — THE GOLDEN IDEA", [
      p("Some jobs used to be done only by men or only by women. Not any more! Today, women drive taxis and men take care of babies: jobs are for both men and women now. Skills have no gender!", { after: 40 }),
    ]),
    p("", { after: 60 }),
    p([run("My skill portrait (model):", { bold: true })], { after: 50 }),
    bullet([run("I can speak Malagasy, French and some English.", { bold: true, color: C.BLUE })]),
    bullet([run("I’m good at Mathematics and at drawing.", { bold: true, color: C.BLUE })]),
    bullet([run("I know how to repair a bicycle — and I feel at ease with little children!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S47 — Speaking: the job that suits you ----------
function ficheS47() {
  const meta = META("Speaking: the job that suits you — the mingle game",
    "By the end of the lesson, learners will be able to present their skills and interests orally and suggest suitable jobs for classmates.",
    "3 / 10", "job name papers for the mingle game");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One sentence with “be good at”."),
       fp("2. One sentence with “know how to”.")],
      [fp("Answer."),
       fp("E.A.: I’m good at singing; I know how to cook romazava.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Quick poll: what is your dream job? One word each, around the class!")],
      [fp("Answer."),
       fp("E.A.: Teacher! Pilot! Designer! Doctor!")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to speak! Each of you prepares a short presentation: « The job that suits you » — and the class will suggest your future!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The presentation plan on the board: 1. The subject I am good at (“I’m good at Mathematics.”) 2. The languages I can speak (“I can speak French and English very well.”) 3. My interests (“I like fishing, I love singing.”) 4. Other skills or talents (“I’m good at sewing.”)")],
      [fp("Copy the plan. Prepare.")],
      "Individual work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("A few students read their work in front of the class. At the end of each presentation, the class gives a suggestion: which job (or jobs) may suit him or her — and why!")],
      [fp("Present. Suggest."),
       pAns("E.A.: You are good at languages and you like people — a tourist guide would suit you!",
        ["a tourist guide would suit you!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["5. Synthesis"],
      [fp("Notice the suggestion language: “X would suit you”, “You could be a…”, “Why not become a…?” — always kind, always with a reason!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The MINGLE game! A job name is pinned on the backs of 3–4 students — they don’t know it! They walk around asking yes/no questions about the skills: “Can I repair cars?” “Do I work with wood?” — limited questions, points for fast guesses!")],
      [fp("Mingle. Ask. Guess."),
       pAns("E.A.: Do I work outside? Can I cook? … I am a mechanic!",
        ["I am a mechanic!"], { size: SZ.FICHE })],
      "Mingle activity", "Job papers"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Say your presentation in four sentences."),
       fp("2. Suggest a job for your neighbour, with a reason.")],
      [fp("Present. Suggest."),
       pAns("E.A.: You feel at ease with babies — you could be a great nanny!",
        ["you could be"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(47, TOTAL, meta, rows, "s47");
}
function lessonS47() {
  return [
    p([run("LESSON OF THE DAY — SESSION 47", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE JOB THAT SUITS YOU", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("MY PRESENTATION PLAN (4 steps)", [
      bullet([run("1. The subject I am good at:", { bold: true }), run("  I’m good at Mathematics.", { bold: true, color: C.BLUE })]),
      bullet([run("2. The languages I can speak:", { bold: true }), run("  I can speak French and English very well. (or: I’m not very good at languages!)", { bold: true, color: C.BLUE })]),
      bullet([run("3. My interests:", { bold: true }), run("  I like fishing, I like taking care of babies, I love singing.", { bold: true, color: C.BLUE })]),
      bullet([run("4. Other skills or talents:", { bold: true }), run("  I’m good at sewing, I’m good at dancing.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The kind suggestion language:", { bold: true })], { after: 50 }),
    bullet([run("The job of … would suit you, because…", { bold: true, color: C.BLUE })]),
    bullet([run("You could be a…  /  Why not become a…?", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE MINGLE GAME — RULES", [
      bullet([run("A job name is pinned on your back — you cannot see it!")]),
      bullet([run("Walk around and ask yes/no questions about the skills: “Can I repair cars?” “Do I work with wood?”")]),
      bullet([run("Guess your job with as few questions as possible — the fastest wins!")], { after: 20 }),
    ]),
  ];
}

// ---------- S48 — Listening: the job interview ----------
function ficheS48() {
  const meta = META("Listening: the job interview — fill in the chart",
    "By the end of the lesson, learners will be able to comprehend an oral passage about a job interview and fill in a chart with the key information.",
    "4 / 10", "audio (QR code), the chart");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Your presentation in two sentences."),
       fp("2. Suggest a job for a friend who is good at drawing.")],
      [fp("Answer."),
       fp("E.A.: I’m good at…, I can speak…; a designer would suit him!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("New words first: the interviewer (who asks) / the interviewee (who answers); the employer / the employee; to hire, to recruit; to sit for an interview; a full-time / a part-time job; a diploma, a degree; experience and qualifications.")],
      [fp("Listen. Repeat. Guess the meanings.")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a REAL job interview: Miss Vonjy, a cook, sits for an interview with Mr Benja, the Human Resources Manager.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening 1)"],
      [fp("First listening: fill in the chart! Position? Skills? The interviewee’s experience?")],
      [fp("Listen. Fill the chart."),
       fp("E.A.: position: cook; skills: cooking, standing more than 8 hours; experience: 15 years at Pepito School.")],
      "Individual work", "Audio / QR + chart"),
    stepRow(["4. Analysis (while-listening 2)"],
      [fp("Second listening, details: 1. Who is Benja? 2. Why does Vonjy like her job? 3. What will she have to cook, and for whom? 4. What will her previous employer say? 5. How does the interview end?")],
      [fp("Listen. Answer."),
       pAns("E.A.: 1. the Human Resources Manager. 2. it keeps her active and she enjoys cooking. 3. breakfast, lunch and dinner for the patients. 4. that she is honest and works well. 5. “We will contact you soon to let you know the outcome.”",
        ["she is honest and works well"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["5. Synthesis"],
      [fp("The interview map: greeting → experience → motivation → the job’s demands → references → polite closing. And listen again: “I HAVE WORKED as a cook for 15 years” — a new tense is hiding here! (More in session 52!)")],
      [fp("Listen. Repeat. Copy.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-listening)"],
      [fp("Listen and repeat the dialogue — then role play it in pairs: one manager, one candidate. Switch!")],
      [fp("Act."),
       pAns("E.A.: — Can you tell me about your work experience? — I have worked as a cook for 15 years…",
        ["I have worked as a cook"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Who is the interviewer, who is the interviewee?"),
       fp("2. What is the difference between employer and employee?")],
      [fp("Answer."),
       pAns("E.A.: Benja asks = interviewer; Vonjy answers = interviewee; the employer gives the job, the employee does it.",
        ["the employer gives the job"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(48, TOTAL, meta, rows, "s48");
}
function lessonS48() {
  return [
    p([run("LESSON OF THE DAY — SESSION 48", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE JOB INTERVIEW", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u7_interview.png", 400, 768 / 1376),
    interviewDialogueBox(),
    p("", { after: 60 }),
    p([run("The interview words:", { bold: true })], { after: 50 }),
    vocab("the interviewer / the interviewee", "dhe inntèrviou-eur / -i", "who asks / who answers"),
    vocab("the employer / the employee", "dhe immploïeur / immploï-i", "who gives the job / who does it"),
    vocab("to hire, to recruit", "tou haïeur, tou rikroute", "to give someone the job"),
    vocab("to sit for an interview", "tou site fore ane inntèrviou", "to be the candidate"),
    vocab("a full-time / part-time job", "e foule-taïme / parte-taïme djob", "all day / some hours"),
    vocab("a diploma, a degree", "e diplôouma, e digri", "papers of your studies"),
    vocab("experience and qualifications", "ikspirienns annde kouolifikéïcheunz", "what you have done and learnt"),
    vocab("the outcome", "dhi aoutkeume", "the result"),
    p("", { after: 60 }),
    box("THE CHART TO FILL", [
      bullet([run("Position → ", { bold: true }), run("cook", { italic: true, color: C.GRAY })]),
      bullet([run("Skills → ", { bold: true }), run("cooking; can stand on her feet more than 8 hours", { italic: true, color: C.GRAY })]),
      bullet([run("Experience → ", { bold: true }), run("15 years as a cook at Pepito School", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u7_interview.png", label: "The job interview — listen and act", url: AUDIO.interview }], COLOR),
  ];
}

// ---------- S49 — Simulate a job interview ----------
function ficheS49() {
  const meta = META("Speaking: simulate a job interview",
    "By the end of the lesson, learners will be able to lead and sit for a job interview in pairs.",
    "5 / 10", "role cards (jobs, questions)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Interviewer or interviewee: who asks the questions?"),
       fp("2. What does “to hire” mean?")],
      [fp("Answer."),
       fp("E.A.: the interviewer; to give someone the job.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Memory flash: in Vonjy’s interview, what were the manager’s five questions? Rebuild them together!")],
      [fp("Remember."),
       fp("E.A.: Can you tell me about your work experience? Why do you like this job? How many hours can you…? What will your previous employer say?")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today, YOU sit for the interview! We are going to simulate job interviews in pairs — with self-confidence!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The interviewer’s toolbox on the board: Tell me about your experience. / What are your qualifications? / Why do you want this job? / What are your skills? / When can you start? — And the candidate’s golden rules: smile, short clear answers, examples!")],
      [fp("Copy the toolbox.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Prepare in pairs: choose a job (cook, driver, secretary, tourist guide…), write 4 questions and 4 answers. The answers must use: one “I have worked… for/since…”, one “I can…”, one “I’m good at…”.")],
      [fp("Prepare the dialogue.")],
      "Pair work", "Role cards"),
    stepRow(["5. Synthesis"],
      [fp("Remember the polite frame: Good morning… Nice to meet you… → … We will contact you soon. Thank you! A good interview is a conversation, not an interrogation!")],
      [fp("Listen. Copy.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Simulation! Pairs act their interview in front of the class. The class is the recruitment committee: would you hire this candidate? Why?")],
      [fp("Act. Decide."),
       pAns("E.A.: — Why do you want this job? — I’m good at languages and I feel at ease with visitors. I have worked as a guide for two years. — Hired!",
        ["I feel at ease with visitors"], { size: SZ.FICHE })],
      "Simulation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give three interviewer questions."),
       fp("2. Answer one of them for YOUR dream job.")],
      [fp("Ask. Answer."),
       pAns("E.A.: Tell me about your experience… — I have helped my uncle at the garage since 2024!",
        ["since 2024"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(49, TOTAL, meta, rows, "s49");
}
function lessonS49() {
  return [
    p([run("LESSON OF THE DAY — SESSION 49", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY JOB INTERVIEW SIMULATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE INTERVIEWER’S TOOLBOX", [
      bullet([run("Can you tell me about your work experience?", { bold: true, color: C.BLUE })]),
      bullet([run("What are your qualifications? What are your skills?", { bold: true, color: C.BLUE })]),
      bullet([run("Why do you want this job?", { bold: true, color: C.BLUE })]),
      bullet([run("If I call your previous employer, what will he say?", { bold: true, color: C.BLUE })]),
      bullet([run("When can you start?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE CANDIDATE’S GOLDEN RULES", [
      bullet([run("Greet and smile:", { bold: true }), run(" Good morning. Nice to meet you!")]),
      bullet([run("Short, clear answers — with examples:", { bold: true }), run(" I have worked as a cook for 15 years.")]),
      bullet([run("Show your skills:", { bold: true }), run(" I can…, I’m good at…, I know how to…")]),
      bullet([run("Close politely:", { bold: true }), run(" Thank you very much. Good-bye!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model mini interview (tourist guide):", { bold: true })], { after: 50 }),
    bullet([run("Manager — ", { bold: true, color: COLOR }), run("Why do you want this job?")]),
    bullet([run("Me — ", { bold: true, color: COLOR }), run("I love my country and I’m good at telling its stories. I can speak Malagasy, French and English.")]),
    bullet([run("Manager — ", { bold: true, color: COLOR }), run("Tell me about your experience.")]),
    bullet([run("Me — ", { bold: true, color: COLOR }), run("I have guided visitors in my village since 2024 — ask them: they always smile!")]),
  ];
}

// ---------- S50 — Reading: the job advertisement ----------
function ficheS50() {
  const meta = META("Reading: the job advertisement",
    "By the end of the lesson, learners will be able to read a job advertisement with correct intonation and answer comprehension questions on it.",
    "6 / 10", "the job ad (newspaper / Facebook style), audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Two golden rules of the candidate."),
       fp("2. One interviewer question.")],
      [fp("Answer."),
       fp("E.A.: smile and greet, short clear answers; why do you want this job?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Where do people find job ads today? Brainstorm: in a newspaper, on Facebook, on the radio, on a wall… Have you ever seen one?")],
      [fp("Brainstorm.")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a REAL job advertisement: a company in Toamasina is looking for a secretary. Detective glasses on!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the ad aloud, respecting the intonation — lists go up, up, up… and down at the end! Then first questions: What position is it looking for? Where is the company?")],
      [fp("Read aloud. Answer."),
       fp("E.A.: a full-time secretary; in Toamasina.")],
      "Whole-class work", "The ad + audio/QR"),
    stepRow(["4. Analysis"],
      [fp("True or false? Justify! 1. It is a part-time job. 2. Having one year of experience with the job is acceptable. 3. The candidate must speak three languages. 4. A 45-year-old person can apply. 5. Weekends are always free.")],
      [fp("Answer T/F + justify."),
       pAns("E.A.: 1.F — full-time! 2.F — at least 5 years! 3.T — Malagasy, French, English. 4.F — not more than 40. 5.F — available on weekends!",
        ["at least 5 years!"], { size: SZ.FICHE })],
      "Pair work", "The ad"),
    stepRow(["5. Synthesis"],
      [fp("The anatomy of a job ad: the position → the responsibilities → the qualifications and experiences → how to apply (email, CV, deadline!). Keep this skeleton: you will write your own ad soon!")],
      [fp("Listen. Copy the skeleton.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Speed reading race: I ask, you scan the ad and answer fast! Deadline? Email? How many responsibilities? Which qualification do YOU already have?")],
      [fp("Scan. Answer fast."),
       pAns("E.A.: 23rd of May! Four responsibilities! I am already fluent in Malagasy and French!",
        ["23rd of May!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the four parts of a job ad."),
       fp("2. Why can’t a beginner apply for this job?")],
      [fp("Answer."),
       pAns("E.A.: position, responsibilities, qualifications, how to apply; because at least 5 years of experience are required.",
        ["position, responsibilities, qualifications"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(50, TOTAL, meta, rows, "s50");
}
function lessonS50() {
  return [
    p([run("LESSON OF THE DAY — SESSION 50", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE JOB ADVERTISEMENT", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    jobAdBox(),
    p("", { after: 60 }),
    box("THE ANATOMY OF A JOB AD", [
      bullet([run("1. The position:", { bold: true }), run(" what job, full-time or part-time, where.")]),
      bullet([run("2. The responsibilities:", { bold: true }), run(" what you will do every day.")]),
      bullet([run("3. Qualifications and experiences:", { bold: true }), run(" skills, years, languages, age.")]),
      bullet([run("4. How to apply:", { bold: true }), run(" email + CV + the deadline — never miss it!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("New words of the ad:", { bold: true })], { after: 50 }),
    vocab("well reputed", "ouèle ripioutède", "with a good name"),
    vocab("responsibilities", "risponnsibilitize", "the tasks of the job"),
    vocab("fluent in", "flou-ennte inn", "speaking very well"),
    vocab("to enclose", "tou innklôouze", "to put inside the letter"),
    vocab("availability", "evéïlebiliti", "when you can work"),
    vocab("a deadline", "e dèdlaïne", "the last day!"),
    p("", { after: 60 }),
    audioBox([{ qr: "qr_t9_u7_jobad.png", label: "Job opportunity — listen to the ad", url: AUDIO.jobad }], COLOR),
  ];
}

// ---------- S51 — Reading: the job application email ----------
function ficheS51() {
  const meta = META("Reading: the job application — does it fit?",
    "By the end of the lesson, learners will be able to read a job application email and discuss whether it fits the job advertisement.",
    "7 / 10", "the ad + the application email");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The four parts of a job ad?"),
       fp("2. What is a deadline?")],
      [fp("Answer."),
       fp("E.A.: position, responsibilities, qualifications, how to apply; the last day to apply.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Imagine: you are the manager in Toamasina. One email arrives for the secretary position. What do you hope to read inside?")],
      [fp("Imagine. Share."),
       fp("E.A.: experience, languages, availability — and politeness!")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the application of Sahondra RAZAFINARIVO — and decide, like a real recruitment committee: does it fit the job advertisement or not?")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the email. First questions: who writes? For which position? Where has she worked, and since when?")],
      [fp("Read. Answer."),
       fp("E.A.: Sahondra; secretary; at the Ministry of Agriculture since 2010 — ten years of experience.")],
      "Individual work", "The email"),
    stepRow(["4. Analysis"],
      [fp("The committee work, in groups: compare the email with the ad, point by point. Experience (5 years required)? Languages (three required)? Weekends? Computer skills? Age? Discuss: does the application fit?")],
      [fp("Compare. Discuss."),
       pAns("E.A.: experience: 10 years ✓; languages: English, French, Malagasy ✓; weekends: fully available ✓; computer skills: not mentioned ?; age: not mentioned ? — It fits well, but the committee would ask about computer skills!",
        ["It fits well"], { size: SZ.FICHE })],
      "Group work", "Ad + email"),
    stepRow(["5. Synthesis"],
      [fp("The anatomy of an application email: Subject line → Dear Sir, → I would like to apply for… → my experience (present perfect!) → my skills → my availability → I am looking forward to… → Yours faithfully, + full name.")],
      [fp("Listen. Copy the skeleton.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Each group reports its discussion to the class: our committee says YES / NO / YES BUT…, because… Vote at the end: is Sahondra hired?")],
      [fp("Report. Vote."),
       pAns("E.A.: Our committee says yes, because she has twice the required experience and speaks the three languages!",
        ["twice the required experience"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the closing formula of the email."),
       fp("2. One reason why Sahondra’s application fits.")],
      [fp("Answer."),
       pAns("E.A.: “Yours faithfully,”; she has ten years of experience — more than the five required.",
        ["Yours faithfully,"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(51, TOTAL, meta, rows, "s51");
}
function lessonS51() {
  return [
    p([run("LESSON OF THE DAY — SESSION 51", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE JOB APPLICATION EMAIL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    applicationBox(),
    p("", { after: 60 }),
    box("DOES IT FIT THE AD? (the committee’s chart)", [
      bullet([run("Experience: ", { bold: true }), run("5 years required → she has 10 ", {}), run("✓", { bold: true, color: C.GREEN })]),
      bullet([run("Languages: ", { bold: true }), run("Malagasy, French, English → all three ", {}), run("✓", { bold: true, color: C.GREEN })]),
      bullet([run("Weekends: ", { bold: true }), run("required → fully available ", {}), run("✓", { bold: true, color: C.GREEN })]),
      bullet([run("Computer skills: ", { bold: true }), run("required → not mentioned ", {}), run("?", { bold: true, color: C.RED })]),
      bullet([run("Verdict: ", { bold: true }), run("a strong application — the committee will ask about computers at the interview!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE ANATOMY OF AN APPLICATION EMAIL", [
      bullet([run("Subject:", { bold: true }), run(" Job application for the position of…")]),
      bullet([run("Dear Sir, / Dear Madam,", { bold: true })]),
      bullet([run("I would like to apply for the position of…", { bold: true, color: C.BLUE })]),
      bullet([run("My experience: ", { bold: true }), run("I have worked as… since… / for…", { bold: true, color: C.BLUE })]),
      bullet([run("My skills and availability: ", { bold: true }), run("I can speak… I am fully available…", { bold: true, color: C.BLUE })]),
      bullet([run("I am looking forward to reading from you soon.", { bold: true, color: C.BLUE })]),
      bullet([run("Yours faithfully, + full name", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S52 — Present perfect: since / for ----------
function ficheS52() {
  const meta = META("The present perfect — since + year, for + duration",
    "By the end of the lesson, learners will be able to use the present perfect with since and for to express events that are continuing.",
    "8 / 10", "timeline on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Quote Sahondra: where has she worked, and since when?"),
       fp("2. Quote Vonjy: how long has she worked as a cook?")],
      [fp("Answer."),
       fp("E.A.: She has worked at the Ministry of Agriculture since 2010; she has worked as a cook for 15 years.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Did you notice? Vonjy and Sahondra used the same strange tense: “I HAVE WORKED…” Why not “I worked” or “I work”? Today, the mystery is solved!")],
      [fp("React. Guess.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The present perfect ». By the end of this lesson, you will talk about actions that started in the past and are STILL continuing!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The timeline on the board: 2010 ●————————→ NOW. “Sahondra has worked there since 2010.” She started in 2010 AND she still works there — the action is not completed!")],
      [fp("Observe the timeline.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The machine: HAVE/HAS + past participle. And the two time friends: SINCE + a starting point (since 2010, since Monday, since I was ten) / FOR + a duration (for 15 years, for two hours). Build: live, teach, be!")],
      [fp("Build sentences."),
       fp("E.A.: I have lived in Antsirabe since 2020. My teacher has taught for ten years.")],
      "Pair work", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: present perfect = have/has + past participle, for events continuing until now; SINCE + year/starting point, FOR + duration. The special participles: be → been, have → had, work → worked, teach → taught.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Chain game around the class: “I have been a student at this school for … / since …” — then about your family: “My father has been a farmer for twenty years!”")],
      [fp("Play the chain."),
       pAns("E.A.: I have been a student here since 2023 — for three years!",
        ["since 2023"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Since or for? “… 2015” / “… six months” / “… I was a child”."),
       fp("2. Build: “My mother (be) a nurse … ten years.”")],
      [fp("Answer."),
       pAns("E.A.: since; for; since; My mother has been a nurse for ten years.",
        ["has been a nurse"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52");
}
function lessonS52() {
  return [
    p([run("LESSON OF THE DAY — SESSION 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PRESENT PERFECT — SINCE AND FOR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE MACHINE", [
      bullet([run("HAVE / HAS + past participle", { bold: true, color: C.RED, size: SZ.BODY })]),
      bullet([run("I have worked as a cook for 15 years. (Vonjy — and she still works!)", { bold: true, color: C.BLUE })]),
      bullet([run("She has worked at the Ministry since 2010. (Sahondra — still there!)", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The timeline:", { bold: true })], { after: 50 }),
    pr([run("2010 ●────────────────→ NOW (and it continues!)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 80 }),
    box("THE TWO TIME FRIENDS", [
      bullet([run("SINCE + starting point:", { bold: true }), run("  since 2010, since Monday, since I was ten.", { bold: true, color: C.BLUE })]),
      bullet([run("FOR + duration:", { bold: true }), run("  for 15 years, for two hours, for a long time.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The participles to know by heart:", { bold: true })], { after: 50 }),
    bullet([run("work → worked;  live → lived;  be → been;  have → had;  teach → taught;  do → done;  write → written;  make → made.", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("My examples:", { bold: true })], { after: 50 }),
    bullet([run("I have been a student at this school since 2023.", { bold: true, color: C.BLUE })]),
    bullet([run("My father has been a farmer for twenty years.", { bold: true, color: C.BLUE })]),
    bullet([run("We have learnt English for three years — and it continues!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S53 — Present perfect vs simple past ----------
function ficheS53() {
  const meta = META("Present perfect vs simple past — the boss is back!",
    "By the end of the lesson, learners will be able to distinguish the present perfect from the simple past and use both in a role play.",
    "9 / 10", "verb cards (type the report, call the customers…)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Since or for? “… three weeks” / “… last Monday”."),
       fp("2. Build: “I (be) here … one hour.”")],
      [fp("Answer."),
       fp("E.A.: for; since; I have been here for one hour.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Compare these two: “I have typed the report.” / “I typed the report at 10 o’clock.” Same action — what changed?")],
      [fp("Compare. Guess."),
       fp("E.A.: the second one gives a FINISHED time — at 10 o’clock!")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Present perfect vs simple past » — with a famous role play: the boss is back at the office!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The rule detective: present perfect = the result counts NOW, no finished time given (I have written the email). Simple past = finished time stated or asked (I wrote it this morning / When did you write it?).")],
      [fp("Observe. Compare.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (role play step 1)"],
      [fp("You are the secretary. The boss asks: “What have you done since I left?” Answer with the present perfect, using the board verbs: type the report — call the customers — write an email — arrange the boss’s agenda — organize next day’s meeting — book a flight.")],
      [fp("Answer with present perfect."),
       pAns("E.A.: I have typed the report, I have called the customers, and I have booked a flight!",
        ["I have typed the report"], { size: SZ.FICHE })],
      "Whole-class work", "Verb cards"),
    stepRow(["5. Synthesis (role play step 2)"],
      [fp("New question, new tense! The boss now asks: “WHEN did you book the flight?” — a precise time is wanted: simple past! “I booked the flight at 10 o’clock / two hours ago.”")],
      [fp("Answer with simple past."),
       fp("E.A.: I wrote the email this morning. I called the customer two hours ago.")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (role play step 3)"],
      [fp("In pairs: one boss, one secretary. The boss mixes both questions (“What have you done…?” / “When did you…?”) — the secretary must choose the right tense every time. Then switch!")],
      [fp("Act. Switch."),
       pAns("E.A.: — What have you done since I left? — I have organized the meeting. — When did you organize it? — I organized it at nine!",
        ["I organized it at nine!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Choose: “I (have seen / saw) that film last night.”"),
       fp("2. Choose: “She (has worked / worked) here since 2010 — she is still here.”")],
      [fp("Answer."),
       pAns("E.A.: saw (last night = finished time!); has worked (it continues!).",
        ["finished time!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}
function lessonS53() {
  return [
    p([run("LESSON OF THE DAY — SESSION 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("PRESENT PERFECT vs SIMPLE PAST", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE TWO QUESTIONS OF THE BOSS", [
      bullet([run("“What HAVE you DONE since I left?”", { bold: true, color: C.GREEN }), run("  → present perfect: the result counts now, no precise time.")]),
      bullet([run("“WHEN DID you book the flight?”", { bold: true, color: C.RED }), run("  → simple past: a precise, finished time is wanted!")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Face to face:", { bold: true })], { after: 50 }),
    bullet([run("I have typed the report.", { bold: true, color: C.GREEN }), run("  (it is done — that is what matters)")]),
    bullet([run("I typed the report at 10 o’clock.", { bold: true, color: C.RED }), run("  (precise time → simple past)")]),
    bullet([run("I have worked here since 2010.", { bold: true, color: C.GREEN }), run("  (it continues!)")]),
    bullet([run("I worked there in 2010.", { bold: true, color: C.RED }), run("  (finished chapter!)")]),
    p("", { after: 60 }),
    box("THE ALARM WORDS", [
      bullet([run("Simple past alarm: ", { bold: true }), run("yesterday, last night, in 2010, two hours ago, when…?", { bold: true, color: C.RED })]),
      bullet([run("Present perfect friends: ", { bold: true }), run("since, for (continuing), already, just, never, ever.", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The secretary’s report (model):", { bold: true })], { after: 50 }),
    pr([run("“Since you left, I have typed the report, I have called the customers and I have booked your flight. — When did you book it? — I booked it at 10 o’clock, Sir!”", { italic: true })], { after: 60 }),
  ];
}

// ---------- S54 — Writing: job ad, CV and application letter ----------
function ficheS54() {
  const meta = META("Writing: my job ad, my CV, my application letter",
    "By the end of the lesson, learners will be able to write a job ad, a CV and a job application letter or email.",
    "10 / 10", "the Hotel Blue Ocean information, templates");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. “What have you done since I left?” — answer with two actions."),
       fp("2. “When did you write the email?” — answer.")],
      [fp("Answer."),
       fp("E.A.: I have typed the report and called the customers; I wrote it this morning.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Here is the information: The hirer: Hotel Blue Ocean. Position: hairdresser. Responsibilities: hair care and style, sweep the floor after haircuts, answer phone calls and schedule appointments. Applicants: 25–35 years old. Experience: minimum 3 years. Skills: French, Malagasy, English; good communication skills. — First job: turn this into a beautiful JOB AD with the four parts!")],
      [fp("Create the job ad."),
       fp("E.A.: JOB OPPORTUNITY — Hotel Blue Ocean is looking for a hairdresser…")],
      "Group work", "Information sheet"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write the full job pack: the ad (done!), then a CV, then the application letter that answers the ad!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The CV template on the board: Name — Contact — Objective — Experience (present perfect: I have worked… since…) — Education and diplomas — Skills and languages — References.")],
      [fp("Copy the template.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis (while-writing 1)"],
      [fp("Write the CV of an imaginary (or future!) candidate for Hotel Blue Ocean: age 25–35, at least 3 years of experience, the three languages…")],
      [fp("Write the CV.")],
      "Individual work", "Templates"),
    stepRow(["5. Synthesis (while-writing 2)"],
      [fp("Now the application email, with the anatomy of session 51: Subject → Dear Sir, → I would like to apply… → I have worked as a hairdresser since… → skills → availability → I am looking forward… → Yours faithfully. Check in pairs: grammar and cohesion!")],
      [fp("Write the letter. Peer check.")],
      "Pair work", "Templates"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Read your letter to your friends. The class is the Hotel Blue Ocean committee: which applications fit the ad? Vote for the most convincing letter!")],
      [fp("Read. Vote."),
       pAns("E.A.: Dear Sir, I would like to apply for the position of hairdresser in your hotel. I have worked as a hairdresser in Mahajanga since 2022…",
        ["I would like to apply"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the seven parts of a CV."),
       fp("2. Read the first sentence of your application letter.")],
      [fp("Answer. Read."),
       pAns("E.A.: name, contact, objective, experience, education, skills, references; I would like to apply for the position of…",
        ["name, contact, objective"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}
function lessonS54() {
  return [
    p([run("LESSON OF THE DAY — SESSION 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: THE FULL JOB PACK", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("1. MY JOB AD (from the given information)", [
      pr([run("JOB OPPORTUNITY — ", { bold: true, color: COLOR }), run("Hotel Blue Ocean is looking for a hairdresser.", { bold: true })], { after: 40 }),
      bullet([run("Responsibilities:", { bold: true }), run(" hair care and style; sweep the floor after haircuts; answer phone calls and schedule appointments.")]),
      bullet([run("Applicants:", { bold: true }), run(" 25–35 years old; minimum 3 years of experience.")]),
      bullet([run("Skills:", { bold: true }), run(" French, Malagasy, English; good communication skills.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("2. MY CV TEMPLATE", [
      bullet([run("Name + contact", { bold: true }), run(" (phone, email)")]),
      bullet([run("Objective:", { bold: true }), run(" the position I want.")]),
      bullet([run("Experience:", { bold: true }), run(" I have worked as a hairdresser at … since 2022.", { bold: true, color: C.BLUE })]),
      bullet([run("Education and diplomas", { bold: true })]),
      bullet([run("Skills and languages:", { bold: true }), run(" fluent in Malagasy and French, good English.")]),
      bullet([run("References:", { bold: true }), run(" my previous employer.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("3. MY APPLICATION EMAIL (model)", [
      pr([run("Subject: Job application for the position of hairdresser", { bold: true })], { after: 40 }),
      p("Dear Sir,", { after: 40 }),
      p("I would like to apply for the position of hairdresser at Hotel Blue Ocean. I have worked as a hairdresser in Mahajanga since 2022, and I am 26 years old. I can speak Malagasy, French and English, and my customers say I have very good communication skills. I am fully available, even on weekends.", { after: 40 }),
      p("I am looking forward to reading from you soon.", { after: 40 }),
      pr([run("Yours faithfully, "), run("RASOA Niry", { bold: true })], { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 5", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Jobs and the word factory"),
    bullet([run("verb + er = the job: teacher, farmer, driver, gardener, designer… Special: a cook, a fisherman, a waiter/waitress.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. Job skills"),
    bullet([run("can + verb; be good at + -ing; know how to + verb; feel at ease with + noun. Jobs are for both men and women now!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The job interview"),
    bullet([run("interviewer/interviewee, employer/employee, hire, recruit, full-time/part-time, diploma, qualifications; greeting → experience → motivation → references → polite closing.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The job ad and the application"),
    bullet([run("Job ad: position → responsibilities → qualifications → how to apply (deadline!). Application email: Dear Sir → I would like to apply → experience → skills → Yours faithfully.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The present perfect"),
    bullet([run("have/has + past participle, for events continuing until now: SINCE + starting point (since 2010), FOR + duration (for 15 years).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Present perfect vs simple past"),
    bullet([run("What have you done since I left? → present perfect. When did you book the flight? → simple past (precise, finished time: yesterday, in 2010, two hours ago).", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 5 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("Build the job name: 1. to teach 2. to drive 3. to garden 4. to design 5. to fish (careful!).")]),
    pAns("Answers: 1. a teacher 2. a driver 3. a gardener 4. a designer 5. a fisherman!", ["a fisherman!"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("Complete with the skill machine: 1. A nanny feels at ease … babies. 2. A cook is good … cooking. 3. A shoemaker knows how … mend shoes. 4. A guide … speak foreign languages.")]),
    pAns("Answers: 1. with 2. at 3. to 4. can.", ["1. with 2. at 3. to 4. can"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("Answer on Vonjy’s interview: 1. What position is she applying for? 2. How long has she worked at Pepito School? 3. What will her previous employer say?")]),
    pAns("Answers: 1. cook. 2. for 15 years. 3. that she is honest and works well.", ["for 15 years"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("True or false on the Toamasina ad? 1. It is a part-time job. 2. One year of experience is enough. 3. The deadline is 23rd of May.")]),
    pAns("Answers: 1. False — full-time. 2. False — at least 5 years. 3. True.", ["at least 5 years"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("Since or for? 1. … 2010 2. … six months 3. … I was a child 4. … a long time.")]),
    pAns("Answers: 1. since 2. for 3. since 4. for.", ["1. since 2. for"]),
    p("", { after: 80 }),
    pr([run("Exercise 6. ", { bold: true }), run("Present perfect or simple past? 1. I (type) the report — it is on your desk now. 2. I (book) the flight two hours ago. 3. She (work) here since 2010. 4. When (you / call) the customer?")]),
    pAns("Answers: 1. have typed 2. booked 3. has worked 4. did you call.", ["have typed"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s55", "SESSION 55 / 68", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 5: JOB AND MASS MEDIA", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give six common jobs — three built with verb + er."),
    pAns("E.A.: teacher, driver, gardener (+er); cook, fisherman, tailor.", ["teacher, driver, gardener"]),
    p("2. Give the four skill machines with one example each."),
    pAns("E.A.: can speak English; be good at cooking; know how to mend shoes; feel at ease with babies.", ["be good at cooking"]),
    p("3. What do we say about jobs and gender?"),
    pAns("E.A.: jobs that used to be done only by men or women are for both men and women now!", ["for both men and women"]),
    p("4. The four steps of the presentation “The job that suits you”?"),
    pAns("E.A.: the subject I’m good at; the languages I can speak; my interests; my other skills and talents.", ["my interests"]),
    p("5. Interviewer, interviewee, employer, employee — who is who?"),
    pAns("E.A.: interviewer asks, interviewee answers; employer gives the job, employee does it.", ["interviewer asks"]),
    p("6. The four parts of a job ad?"),
    pAns("E.A.: position, responsibilities, qualifications and experiences, how to apply.", ["how to apply"]),
    p("7. Why did Sahondra’s application fit the ad? (two reasons)"),
    pAns("E.A.: ten years of experience (five required); fluent in the three languages; available on weekends.", ["ten years of experience"]),
    p("8. The present perfect: form and job?"),
    pAns("E.A.: have/has + past participle; events that started in the past and are continuing.", ["have/has + past participle"]),
    p("9. Since or for — the rule?"),
    pAns("E.A.: since + starting point (since 2010); for + duration (for 15 years).", ["since + starting point"]),
    p("10. “I (see) that film last night.” — which tense, and why?"),
    pAns("E.A.: I saw — simple past, because “last night” is a finished, precise time!", ["simple past"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s56", "SESSION 56 / 68", { bold: true, size: 28, after: 60 }),
    p([run("T9 TEST PAPER — UNIT 5: JOB AND MASS MEDIA", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the job: 1. This person repairs cars. 2. This person makes furniture. 3. This person sews clothes. 4. This person takes care of babies.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Complete: 1. A tourist guide … speak foreign languages. 2. A cook is good … cooking. 3. A shoemaker knows how … mend shoes. 4. A nanny feels at ease … babies.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Since or for? 1. Sahondra has worked at the Ministry … 2010. 2. Vonjy has been a cook … 15 years. 3. I have been at this school … three years. 4. We have had English class … 8 o’clock.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Present perfect or simple past? 1. I (finish) the report — here it is! 2. I (call) the customers an hour ago. 3. She (be) a hairdresser since 2022. 4. When (you / book) the flight?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short application email (5–6 sentences) for the Hotel Blue Ocean hairdresser position: subject line, Dear Sir, one “I would like to apply…”, one present perfect with since or for, your skills, Yours faithfully.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: a mechanic; a carpenter; a tailor; a babysitter / nanny. (1 pt each)", ["a mechanic"]),
    pAns("Ex.2: can; at; to; with. (1 pt each)", ["can; at; to; with"]),
    pAns("Ex.3: since; for; for; since. (1 pt each)", ["since; for; for; since"]),
    pAns("Ex.4: have finished; called; has been; did you book. (1 pt each)", ["did you book"]),
    pAns("Ex.5 (model): Subject: Job application for the position of hairdresser. Dear Sir, I would like to apply for the position of hairdresser at Hotel Blue Ocean. I have worked as a hairdresser since 2022. I can speak Malagasy, French and English, and I have good communication skills. I am looking forward to reading from you soon. Yours faithfully, … (4 pts: frame 1, apply 1, present perfect 1, skills 1)", ["I have worked as a hairdresser since 2022"]),
  ];
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS45(), pageBreak(), ...lessonS45(), pageBreak(),
    ...ficheS46(), pageBreak(), ...lessonS46(), pageBreak(),
    ...ficheS47(), pageBreak(), ...lessonS47(), pageBreak(),
    ...ficheS48(), pageBreak(), ...lessonS48(), pageBreak(),
    ...ficheS49(), pageBreak(), ...lessonS49(), pageBreak(),
    ...ficheS50(), pageBreak(), ...lessonS50(), pageBreak(),
    ...ficheS51(), pageBreak(), ...lessonS51(), pageBreak(),
    ...ficheS52(), pageBreak(), ...lessonS52(), pageBreak(),
    ...ficheS53(), pageBreak(), ...lessonS53(), pageBreak(),
    ...ficheS54(), pageBreak(), ...lessonS54(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 5", COLOR, [
      "I can name the common jobs — and build them with verb + er.",
      "I can describe job skills: I can…, I’m good at…, I know how to…",
      "I can say that jobs are for both men and women now.",
      "I can present “the job that suits me” and suggest jobs for friends.",
      "I can understand and act a job interview.",
      "I can read a job advertisement and find its four parts.",
      "I can judge if a job application fits the ad.",
      "I can use the present perfect with since and for.",
      "I can choose between present perfect and simple past.",
      "I can write a job ad, a CV and an application letter!",
    ], "NEXT STOP → UNIT 6: ENVIRONMENT!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
