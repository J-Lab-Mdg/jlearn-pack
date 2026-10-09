// T10 — UNIT 9 — THE JOB THAT'S RIGHT FOR YOU (8 séances + révision + test) — Sessions 70 à 79 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1A5276"; // bleu métier
const SHADE = "D6EAF8";
const TOTAL = 88;
const AUDIO = {
  jobs: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 9 — THE JOB THAT’S RIGHT FOR YOU", title, slo,
  values: "responsibility, autonomy", session, materials,
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
function dialogueBox() {
  const line = (who, txt) => pr([run(who + ": ", { bold: true, color: COLOR }), run(txt)], { after: 40 });
  return box("THE JOBS OF THE NEIGHBOURHOOD (listening dialogue)", [
    line("Koto", "Good morning, Mr Rabe! May I ask — what do you do for a living?"),
    line("Mr Rabe", "I’m a mechanic. I work at a garage, on Independence Avenue. And your father, what’s his occupation?"),
    line("Koto", "My father is a nurse. He works in a hospital, in the city centre. And my mother works at the market — my mother’s little shop sells the best vegetables of the town!"),
    line("Mr Rabe", "And your big brother?"),
    line("Koto", "He finished his studies in computers, but he’s not working for the moment. He’s between jobs. He’s currently applying for jobs… and good news: he has an interview on Monday!"),
    line("Mr Rabe", "Excellent! Your brother knows how to use a computer, he is able to speak three languages, and he is good at solving problems. He is hardworking and self-confident. He will find work, believe me!"),
    line("Koto", "Thank you, Mr Rabe! And me — one day, I’d like to be an engineer. I hope to build bridges, wherever our island needs them!"),
    line("Mr Rabe", "Then study well, my boy. The job that’s right for you is already waiting."),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE WOMAN WHO FEEDS THE CITY", [
    p("Every morning at three o’clock, when the city still sleeps, Mama Tiana lights her lamp and goes to work. She is a vegetable seller at the big market of Anosibe — but her friends say she has three jobs in one.", { after: 40 }),
    p("First, she is a buyer. Before sunrise, the farmers’ trucks arrive from the countryside, full of carrots, tomatoes and green leaves. Mama Tiana knows how to choose: she touches, she smells, she tastes. She is able to see the quality of a tomato in one second.", { after: 40 }),
    p("Then, she is a seller. From six to twelve, her table is the busiest of the row. She is good at counting — no calculator is faster than her head! — and she is good at smiling too. “A hard-working seller sells vegetables,” she says, “but a kind seller sells happiness.”", { after: 40 }),
    p("Finally, she is a teacher. Her daughter’s school is expensive, so Mama Tiana works for her children’s future. But every evening, young sellers come to her table to learn the job: how to buy, how to count, how to speak to the customers. She teaches them for free.", { after: 40 }),
    p("Mama Tiana never went to high school. Yet the whole market calls her “Madame le Professeur”. Why? Think about it — the answer is not written, but it is easy to see.", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 9 — THE JOB THAT’S RIGHT FOR YOU", COLOR, "unit9"),
    p("", { after: 100 }),
    p([run("What do you do for a living?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u9_jobs.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the jobs and the workplaces;"),
    p("• ask and answer: What do you do for a living? I work as a nurse;"),
    p("• talk about job situations: I’m between jobs, I have an interview;"),
    p("• place the work: in a hospital, at the market, on a farm;"),
    p("• use the possessive case: my mother’s shop, the farmers’ trucks;"),
    p("• describe the worker: hardworking, self-confident;"),
    p("• talk about abilities: to be able to, to know how to, to be good at;"),
    p("• say my dream job — and defend my choice!;"),
    p("• write a short text about my job aspirations.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("responsibility, autonomy.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("One question will follow you all your life, in every country and every language: “What do you do?” This unit prepares your answer of today (I am a student!) and your answer of tomorrow — the job that’s right for YOU.", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u9_jobs.png", label: "The jobs of the neighbourhood — listen and repeat", url: AUDIO.jobs },
    ], COLOR),
  ];
}

// ---------- S70 — Job names + workplaces ----------
function ficheS70() {
  const meta = META("The jobs and the workplaces",
    "By the end of the lesson, learners will be able to name common jobs and guess them from pictures of workers, workplaces and tools.",
    "1 / 8", "pictures of workers, workplaces and tools");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Order a dish politely at the restaurant."),
       fp("2. It … wonderful (the nose)!")],
      [fp("Answer."),
       fp("E.A.: I’ll have the romazava, please! — smells.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("List all the names of jobs you know — board race, two teams, two minutes! Which team fills its column?")],
      [fp("List the jobs."),
       fp("E.A.: teacher, doctor, driver, farmer, seller…")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The jobs and the workplaces ». By the end of this lesson, you will recognise a job from one picture, one place or one tool!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The job gallery (pictures!): a farmer (the rice field), a teacher (the blackboard), a doctor and a nurse (the hospital), a mechanic (the garage), a fisherman (the pirogue), a seamstress (the sewing machine), a shopkeeper, a driver, an engineer, a tour guide. Listen and repeat!")],
      [fp("Listen. Repeat."),
       fp("E.A.: farmer, mechanic, fisherman, seamstress…")],
      "Using audio-visual aids", "Pictures of workers"),
    stepRow(["4. Analysis (the guessing game)"],
      [fp("Guess the job from the clue! I show a TOOL (a hammer? a needle? a net?) or a WORKPLACE (a garage? a classroom?): which job is it? Then the pattern: the fisherman works with a net; the teacher works in a classroom.")],
      [fp("Guess. Build sentences."),
       fp("E.A.: a net → a fisherman! A blackboard → a teacher!")],
      "Using audio-visual aids", "Pictures of tools"),
    stepRow(["5. Synthesis"],
      [fp("So: the jobs, their workplaces, their tools — three doors to the same word. A job has a face, a place and a tool!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mime time! A student mimes a job; the class guesses in a full sentence: You are a mechanic! Then the winner mimes.")],
      [fp("Mime. Guess."),
       pAns("E.A.: You are a seamstress! You are a fisherman!",
        ["You are a fisherman!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The job: the rice field? the garage? the sewing machine?"),
       fp("2. Give two jobs of your own neighbourhood.")],
      [fp("Answer."),
       pAns("E.A.: a farmer, a mechanic, a seamstress — the baker and the taxi driver of my street!",
        ["a farmer, a mechanic"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70");
}
function lessonS70() {
  return [
    p([run("LESSON OF THE DAY — SESSION 70", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE JOBS AND THE WORKPLACES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u9_jobs.png", 420, 768 / 1376),
    p([run("The job gallery:", { bold: true })], { after: 30 }),
    vocab("a farmer", "e farmeur", "the rice field"),
    vocab("a teacher", "e titcheur", "the classroom"),
    vocab("a doctor / a nurse", "e dokteur / e neurse", "the hospital"),
    vocab("a mechanic", "e mikanike", "the garage"),
    vocab("a fisherman", "e ficheurmane", "the pirogue and the net"),
    vocab("a seamstress", "e simmstrèsse", "the sewing machine"),
    vocab("a shopkeeper", "e chopkipeur", "the little shop"),
    vocab("an engineer", "aneènndjinir", "the bridges and the machines"),
    vocab("a tour guide", "e tour gaïde", "the parks and the visitors"),
    p("", { after: 60 }),
    box("THE THREE DOORS TO A JOB", [
      bullet([run("The face: ", { bold: true }), run("the worker — a mechanic.", { bold: true, color: C.BLUE })]),
      bullet([run("The place: ", { bold: true }), run("the workplace — a garage.", { bold: true, color: C.BLUE })]),
      bullet([run("The tool: ", { bold: true }), run("the instrument — a spanner!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S71 — What do you do for a living? ----------
function ficheS71() {
  const meta = META("What do you do for a living? — the job situations",
    "By the end of the lesson, learners will be able to ask about occupations and talk about job situations: working, between jobs, applying, having an interview.",
    "2 / 8", "job pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The workplace of the nurse? of the mechanic?"),
       fp("2. The tool of the fisherman?")],
      [fp("Answer."),
       fp("E.A.: the hospital, the garage — the net!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mystery guest: I play an adult of the town. Ask me anything to discover my job — but I only answer yes or no! Ten questions maximum.")],
      [fp("Ask. Guess."),
       fp("E.A.: Do you work inside? Do you use a machine? — A seamstress!")],
      "Questioning", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « What do you do for a living? ». By the end of this lesson, you will ask and answer the most famous job questions of English.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The three twin questions: What do you do? = What do you do for a living? = What’s your occupation? And the two answers: I am a nurse / I work as a mechanic. Both are correct — with a/an!")],
      [fp("Listen. Repeat."),
       fp("E.A.: What do you do for a living? — I work as a driver.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("And when there is no job today? The honest expressions: I’m not working for the moment. I’m between jobs (between two jobs — elegant!). I’m currently looking for work. I’m currently applying for jobs. And the hopeful one: I have an interview on Monday! Transformation drill: I am a mechanic → I work as a mechanic → I’m between jobs → I have an interview…")],
      [fp("Observe. Transform."),
       fp("E.A.: I’m between jobs; I’m currently applying for jobs; I have an interview!")],
      "Transformation drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: three twin questions (What do you do? for a living? occupation?), two job answers (I am a… / I work as a…), and the situations: between jobs, looking for work, applying, an interview.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role-play in pairs: at a wedding, two guests meet. Ask the occupation; one of you is between jobs but has an interview — stay positive and polite!")],
      [fp("Role-play."),
       pAns("E.A.: What do you do for a living? — I’m between jobs, but I’m currently applying… and I have an interview on Friday! — Good luck!",
        ["Good luck!"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The three twin questions."),
       fp("2. Two polite expressions for « sans emploi aujourd’hui »."),
       fp("3. Answer with “work as”: mécanicien.")],
      [fp("Answer."),
       pAns("E.A.: What do you do? / What do you do for a living? / What’s your occupation? — I’m between jobs; I’m currently looking for work. — I work as a mechanic.",
        ["I’m between jobs"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(71, TOTAL, meta, rows, "s71");
}
function lessonS71() {
  return [
    p([run("LESSON OF THE DAY — SESSION 71", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WHAT DO YOU DO FOR A LIVING?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE TWIN QUESTIONS", [
      bullet([run("What do you do? ", { bold: true, color: C.BLUE }), run("[ouotte dou you dou]", { italic: true, color: C.GRAY })]),
      bullet([run("What do you do for a living? ", { bold: true, color: C.BLUE }), run("[fore e livingue]", { italic: true, color: C.GRAY })]),
      bullet([run("What’s your occupation? ", { bold: true, color: C.BLUE }), run("[okioupéicheune]", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE TWO ANSWERS", [
      bullet([run("I am a nurse. / I am an engineer.", { bold: true, color: C.BLUE }), run(" (a/an obligatoire !)")]),
      bullet([run("I work as a mechanic. / She works as a seamstress.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The job situations:", { bold: true })], { after: 30 }),
    vocab("I’m not working for the moment", "aïme notte oueurkigne fore dhe môoumeunte"),
    vocab("I’m between jobs", "bitouine djobze", "élégant et digne !"),
    vocab("I’m currently looking for work", "keureuntli loukigne fore oueurk"),
    vocab("I’m currently applying for jobs", "eplaygne fore djobze", "j’envoie mes candidatures"),
    vocab("I have an interview", "aï have ane innteurviou", "the hopeful sentence!"),
  ];
}

// ---------- S72 — in/on/at + possessive case ----------
function ficheS72() {
  const meta = META("Where do you work? — in, on, at and the possessive case",
    "By the end of the lesson, learners will be able to use the prepositions in, on and at for job locations and the possessive case for people’s jobs and things.",
    "3 / 8", "workplace pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One twin question + answer with « work as »."),
       fp("2. The hopeful sentence of the job seeker?")],
      [fp("Answer."),
       fp("E.A.: What’s your occupation? I work as a farmer. — I have an interview!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Where exactly? I say a job, you shout the place: nurse → hospital! farmer → farm! mechanic → garage! Fast!")],
      [fp("Shout the places.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « in, on, at — and the little ’s ». By the end of this lesson, you will place every worker… and give to each his things!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The three little workers of place: IN + closed spaces and cities: in a hospital, in an office, in Antananarivo. ON + surfaces and avenues: on a farm, on a ship, on Independence Avenue. AT + precise points: at the market, at a garage, at school, at home.")],
      [fp("Listen. Repeat."),
       fp("E.A.: in a hospital, on a farm, at the market.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The possessive case — the little ’s of belonging: my mother’s shop (the shop OF my mother), the doctor’s coat, Soa’s dream. Plural already in -s? Just the apostrophe: the farmers’ trucks, my parents’ house. Order: OWNER + ’s + THING!")],
      [fp("Observe. Build."),
       fp("E.A.: my father’s garage; the teachers’ room; Koto’s future job!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: in (closed), on (surface/avenue), at (precise point) — and the possessive ’s: my mother’s shop, the farmers’ trucks. Small words, big precision!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Family jobs chain: each student, one sentence with a preposition AND a possessive: My uncle’s workshop is on the main road!")],
      [fp("Build the chain."),
       pAns("E.A.: My aunt’s shop is at the market. My brother’s office is in the city centre.",
        ["My aunt’s shop"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. in, on or at: … a hospital; … a farm; … the market."),
       fp("2. Transform: the shop of my mother; the trucks of the farmers.")],
      [fp("Answer."),
       pAns("E.A.: in — on — at. My mother’s shop; the farmers’ trucks.",
        ["the farmers’ trucks"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(72, TOTAL, meta, rows, "s72");
}
function lessonS72() {
  return [
    p([run("LESSON OF THE DAY — SESSION 72", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("IN, ON, AT — AND THE LITTLE ’S", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE LITTLE WORKERS OF PLACE", [
      bullet([run("IN ", { bold: true, color: C.BLUE }), run("+ closed spaces, cities: "), run("in a hospital, in an office, in Antananarivo.", { bold: true, color: C.BLUE })]),
      bullet([run("ON ", { bold: true, color: C.BLUE }), run("+ surfaces, avenues: "), run("on a farm, on a ship, on Independence Avenue.", { bold: true, color: C.BLUE })]),
      bullet([run("AT ", { bold: true, color: C.BLUE }), run("+ precise points: "), run("at the market, at a garage, at school, at home.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE POSSESSIVE CASE — OWNER + ’S + THING", [
      bullet([run("my mother’s shop ", { bold: true, color: C.BLUE }), run("= the shop of my mother")]),
      bullet([run("the doctor’s coat — Soa’s dream — Koto’s future job", { bold: true, color: C.BLUE })]),
      bullet([run("Plural in -s? Only the apostrophe: ", { bold: true }), run("the farmers’ trucks, my parents’ house.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("ALL TOGETHER NOW!", [
      bullet([run("My father works in a hospital, in the city centre.", { bold: true, color: C.BLUE })]),
      bullet([run("My mother’s shop is at the market, on the main road!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S73 — Listening: the jobs of the neighbourhood ----------
function ficheS73() {
  const meta = META("Listening: the jobs of the neighbourhood",
    "By the end of the lesson, learners will be able to find the gist and details of a dialogue about jobs, role-play it and ask about their classmates’ parents’ occupations.",
    "4 / 8", "audio dialogue (QR code page 1 of the unit) or teacher reading");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. in, on or at: … a garage; … Independence Avenue."),
       fp("2. Transform: the pirogue of the fisherman.")],
      [fp("Answer."),
       fp("E.A.: at — on. The fisherman’s pirogue.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Pictures of workers, workplaces and tools on the desk: guess the jobs fast! Then: which jobs will we hear in a dialogue between Koto and his neighbour? Predict!")],
      [fp("Guess. Predict."),
       fp("E.A.: a mechanic? a seller? a nurse?")],
      "Using audio-visual aids", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « The jobs of the neighbourhood ». By the end of this lesson, the job expressions will work FOR you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening, 1st listening)"],
      [fp("Books closed! Gist: who is talking? What is Mr Rabe’s job? Is Koto’s brother working?")],
      [fp("Listen. Answer."),
       fp("E.A.: Koto and Mr Rabe; a mechanic; no — he’s between jobs!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis (2nd listening + the hunt)"],
      [fp("Second listening with missions: underline (a) the job questions and answers (what do you do for a living? I work as…), (b) the job-situation expressions (between jobs, applying, interview), (c) the prepositions of place and the possessive ’s. Detail questions: where is the garage? When is the interview? Whose shop sells vegetables? Third listening: repeat the key sentences.")],
      [fp("Hunt. Answer. Repeat."),
       pAns("E.A.: on Independence Avenue — on Monday — Koto’s mother’s shop! Expressions: I work as a mechanic; he’s between jobs; he’s currently applying for jobs; he has an interview.",
        ["on Independence Avenue"], { size: SZ.FICHE })],
      "Repetition drill", "Audio"),
    stepRow(["5. Synthesis (post-listening: grammar from the dialogue)"],
      [fp("Draw the grammar from the passage: find one IN, one ON, one AT, and the possessive my mother’s shop. How do they work? Use them in new contexts: your own family!")],
      [fp("Find. Reuse."),
       fp("E.A.: in a hospital, on Independence Avenue, at the market — my uncle’s farm!")],
      "Contextualisation", "Blackboard"),
    stepRow(["6. Practice (role play + mingle!)"],
      [fp("First: role-play the dialogue in pairs (change the jobs!). Then the mingle: walk and ask three classmates about their parents’ occupations: What does your mother do? Where does she work? Note and report: Hanta’s father works as a driver!")],
      [fp("Role-play. Mingle. Report."),
       pAns("E.A.: What does your father do? — He works as a fisherman, on the coast. Hanta’s mother is a teacher in a public school!",
        ["Hanta’s mother"], { size: SZ.FICHE })],
      "Role play / Mingle", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is Koto’s dream job, and what does he hope to build?"),
       fp("2. Write one sentence about a classmate’s parent’s job (possessive + preposition!).")],
      [fp("Answer."),
       pAns("E.A.: An engineer — bridges, wherever the island needs them! — Lova’s mother works at the post office.",
        ["Lova’s mother"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(73, TOTAL, meta, rows, "s73");
}
function lessonS73() {
  return [
    p([run("LESSON OF THE DAY — SESSION 73", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: THE JOBS OF THE NEIGHBOURHOOD", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    dialogueBox(),
    p("", { after: 60 }),
    box("WHAT MY EARS CAUGHT", [
      bullet([run("The questions: ", { bold: true }), run("What do you do for a living? What’s his occupation?", { bold: true, color: C.BLUE })]),
      bullet([run("The situations: ", { bold: true }), run("he’s between jobs — currently applying — an interview on Monday!", { bold: true, color: C.BLUE })]),
      bullet([run("The grammar: ", { bold: true }), run("at a garage, on Independence Avenue, in a hospital — my mother’s little shop.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE MINGLE QUESTIONS", [
      bullet([run("What does your father / mother do? ", { bold: true, color: C.BLUE })]),
      bullet([run("Where does he / she work? ", { bold: true, color: C.BLUE })]),
      bullet([run("Report: ", { bold: true }), run("Hanta’s father works as a driver, in Antsirabe!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S74 — Characteristics + abilities ----------
function ficheS74() {
  const meta = META("The worker’s qualities — to be able to, to know how to, to be good at",
    "By the end of the lesson, learners will be able to describe characteristics and abilities related to jobs, using compound adjectives and ability structures.",
    "5 / 8", "job-task cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. In the dialogue: three things Koto’s brother can do."),
       fp("2. One mingle question about the parents’ jobs.")],
      [fp("Answer."),
       fp("E.A.: use a computer, speak three languages, solve problems. — What does your mother do?")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening: match!)"],
      [fp("Match the job with its task (cards!): the nurse → takes care of patients; the mechanic → repairs engines; the guide → shows the parks; the accountant → counts the money. Fast matching on the board!")],
      [fp("Match."),
       fp("E.A.: nurse–patients, mechanic–engines, guide–parks!")],
      "Using audio-visual aids", "Job-task cards"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The worker’s qualities ». By the end of this lesson, you will describe what a worker IS — and what he CAN DO.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("What a worker IS — the quality adjectives: hardworking (works a lot!), self-confident (believes in himself), patient, honest, careful, creative. Two of them are COMPOUND adjectives — two words glued together: hard + working, self + confident. English loves this glue: good-looking, well-known!")],
      [fp("Listen. Repeat."),
       fp("E.A.: hardworking, self-confident — compound = two glued words!")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("What a worker CAN DO — the three ability tools: to be able to + verb (she is able to drive a truck), to know how to + verb (he knows how to use a computer), to be good at + -ING (she is good at counting — gerund!). Warning: after GOOD AT, the verb wears its -ing dress!")],
      [fp("Observe. Build."),
       fp("E.A.: I am able to swim; I know how to cook; I am good at drawing!")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: the qualities (hardworking, self-confident, patient, honest…) and the three ability tools: able to + verb, know how to + verb, good at + verb-ING.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("My three powers! Each student writes and says: one quality + two abilities with different tools. The class claps — self-confidence training!")],
      [fp("Say your powers."),
       pAns("E.A.: I am hardworking. I know how to repair a bicycle, and I am good at explaining to the little ones!",
        ["I am good at explaining"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Two compound adjectives of the worker."),
       fp("2. Complete: she is good at … (sing); he knows how … (drive); they are able … (speak) English.")],
      [fp("Answer."),
       pAns("E.A.: hardworking, self-confident. — singing; how to drive; able to speak.",
        ["singing"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(74, TOTAL, meta, rows, "s74");
}
function lessonS74() {
  return [
    p([run("LESSON OF THE DAY — SESSION 74", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WORKER’S QUALITIES AND ABILITIES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("What a worker IS:", { bold: true })], { after: 30 }),
    vocab("hardworking", "harde-oueurkigne", "compound: hard + working!"),
    vocab("self-confident", "sèlf-connfideunte", "compound: self + confident!"),
    vocab("patient", "péicheunte"),
    vocab("honest", "onèste", "the h sleeps!"),
    vocab("careful", "kèrfoul", "attentif"),
    vocab("creative", "kriéitive"),
    p("", { after: 60 }),
    box("THE COMPOUND ADJECTIVES — TWO GLUED WORDS", [
      bullet([run("hard + working = hardworking — self + confident = self-confident.", { bold: true, color: C.BLUE })]),
      bullet([run("English loves the glue: good-looking, well-known, open-minded!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE THREE ABILITY TOOLS", [
      bullet([run("to be able to + verb: ", { bold: true }), run("She is able to drive a truck.", { bold: true, color: C.BLUE })]),
      bullet([run("to know how to + verb: ", { bold: true }), run("He knows how to use a computer.", { bold: true, color: C.BLUE })]),
      bullet([run("to be good at + verb-ING: ", { bold: true }), run("She is good at counting. I am good at drawing!", { bold: true, color: C.BLUE })]),
      bullet([run("⚠ After GOOD AT, the verb wears its -ing dress!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S75 — The dream job ----------
function ficheS75() {
  const meta = META("My dream job — asking, choosing, defending!",
    "By the end of the lesson, learners will be able to express and defend their choice of career using dream job expressions.",
    "6 / 8", "dream job picture");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One quality + one ability of the good mechanic."),
       fp("2. Good at + …? (the dress of the verb!)")],
      [fp("Answer."),
       fp("E.A.: careful; he knows how to repair engines — verb-ING!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Close your eyes. You are thirty years old. Where are you? What are you doing? Open your eyes — three volunteers tell what they saw!")],
      [fp("Dream. Tell."),
       fp("E.A.: I saw a hospital — I was the doctor!")],
      "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « My dream job ». By the end of this lesson, you will say your dream — and defend it like a lawyer!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The dream expressions: I want to be a pilot. I’d like to be a doctor (gentle). I hope to be / to become an engineer (with hope!). And the question: What do you want to be in the future? What would you like to become?")],
      [fp("Listen. Repeat."),
       fp("E.A.: I’d like to be…; I hope to become…")],
      "Repetition drill", "Dream job picture"),
    stepRow(["4. Analysis"],
      [fp("A dream needs legs: the ARGUMENTS! Three legs: the love (because I love children), the ability (and I am good at explaining), the service (so I can help my village). Model: I’d like to be a teacher because I love children, I am good at explaining, and my country needs teachers!")],
      [fp("Observe. Build your three legs."),
       fp("E.A.: love + ability + service!")],
      "Contextualisation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: want to be / I’d like to be / hope to become — and the three legs of the dream: love, ability, service. A dream with arguments becomes a plan!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (mingle + defence!)"],
      [fp("Mingle: ask three classmates What would you like to become? Why? Note the answers. Then two volunteers DEFEND their choice in front of the class — the class may attack kindly: But is it difficult? — and the dreamer answers with arguments!")],
      [fp("Mingle. Defend."),
       pAns("E.A.: I’d like to be a tour guide: I am good at speaking, I know the parks of my region, and tourism gives work to my town! — But English is difficult! — That is why I study it every day!",
        ["That is why I study it"], { size: SZ.FICHE })],
      "Mingle", "Notebooks"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Three ways to say your dream job."),
       fp("2. Your dream + your three legs (one sentence each).")],
      [fp("Answer."),
       pAns("E.A.: I want to be…, I’d like to be…, I hope to become… — I’d like to be a nurse because I love helping, I am good at listening, and my village has no nurse.",
        ["my village has no nurse"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(75, TOTAL, meta, rows, "s75");
}
function lessonS75() {
  return [
    p([run("LESSON OF THE DAY — SESSION 75", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY DREAM JOB", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u9_dream.png", 420, 768 / 1376),
    box("THE DREAM EXPRESSIONS", [
      bullet([run("I want to be a pilot. ", { bold: true, color: C.BLUE }), run("(direct!)")]),
      bullet([run("I’d like to be a doctor. ", { bold: true, color: C.BLUE }), run("(gentle)")]),
      bullet([run("I hope to be / to become an engineer. ", { bold: true, color: C.BLUE }), run("(with hope!)")]),
      bullet([run("The question: ", { bold: true }), run("What would you like to become?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE THREE LEGS OF THE DREAM", [
      bullet([run("The love: ", { bold: true }), run("because I love children…", { bold: true, color: C.BLUE })]),
      bullet([run("The ability: ", { bold: true }), run("and I am good at explaining…", { bold: true, color: C.BLUE })]),
      bullet([run("The service: ", { bold: true }), run("so I can help my village!", { bold: true, color: C.BLUE })]),
      bullet([run("A dream with arguments becomes a plan. That is autonomy!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S76 — Reading: the woman who feeds the city ----------
function ficheS76() {
  const meta = META("Reading: the woman who feeds the city",
    "By the end of the lesson, learners will be able to predict a text from its title, read it correctly and infer information about a person’s occupation.",
    "7 / 8", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Say your dream job with « hope »."),
       fp("2. One compound adjective.")],
      [fp("Answer."),
       fp("E.A.: I hope to become a midwife! — self-confident.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title on the board: « The woman who feeds the city ». Predict! Who is she? A cook? A farmer? A minister? Write your prediction — we check later! Then listen and repeat the difficult words: quality, calculator, customers, expensive.")],
      [fp("Predict. Repeat the words."),
       fp("E.A.: a cook? a market seller? — quality [kouoliti]!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The woman who feeds the city » — the story of Mama Tiana. By the end of this lesson, you will see three jobs inside one woman!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("Read the text aloud, paragraph by paragraph — correct pronunciation! Gist: what is Mama Tiana’s job? Details: at what time does she start? What are her « three jobs in one »? What is she good at?")],
      [fp("Read aloud. Answer."),
       pAns("E.A.: a vegetable seller; at three o’clock; buyer, seller, teacher; good at counting and at smiling!",
        ["buyer, seller, teacher"], { size: SZ.FICHE })],
      "Skimming and scanning", "Reading text"),
    stepRow(["4. Analysis (the inference hunt)"],
      [fp("Read between the lines! Why does the market call her « Madame le Professeur »? (the answer is NOT written!). Find the clues: she teaches the young sellers for free. What does « she works for her children’s future » tell us about her? And the hidden lesson: do you need a diploma to deserve respect?")],
      [fp("Infer. Justify."),
       pAns("E.A.: Because she transmits her knowledge like a teacher — for free! She is responsible and generous. Respect comes from work and heart, not only from diplomas!",
        ["not only from diplomas!"], { size: SZ.FICHE })],
      "Inference", "Reading text"),
    stepRow(["5. Synthesis (post-reading: check the prediction!)"],
      [fp("Take your prediction of the warm-up: true or false? Share with your group, then with the class. Who had guessed « a market seller »?")],
      [fp("Check. Share."),
       fp("E.A.: My prediction was a cook — false! She is a seller… and much more.")],
      "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Share your opinion with your peers: which of Mama Tiana’s qualities do you admire the most — and why? Two sentences each in small groups.")],
      [fp("Discuss."),
       pAns("E.A.: I admire her generosity: she is able to teach for free after twelve hours of work!",
        ["teach for free"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. One stated information and one inferred information about Mama Tiana."),
       fp("2. Write her three jobs with one ability each (able to / knows how to / good at).")],
      [fp("Answer."),
       pAns("E.A.: Stated: she starts at three o’clock. Inferred: she is respected like a teacher. — Buyer: able to see the quality in one second; seller: good at counting; teacher: knows how to transmit the job!",
        ["able to see the quality"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(76, TOTAL, meta, rows, "s76");
}
function lessonS76() {
  return [
    p([run("LESSON OF THE DAY — SESSION 76", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE WOMAN WHO FEEDS THE CITY", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("quality", "kouoliti"),
    vocab("a customer", "e keusteumeur", "the person who buys"),
    vocab("expensive", "èxpènnsive", "cher"),
    vocab("for free", "fore fri", "gratuitement"),
    p("", { after: 60 }),
    box("THE READER-DETECTIVE AT WORK", [
      bullet([run("Stated: ", { bold: true }), run("she starts at three o’clock; she teaches the young sellers for free.", { bold: true, color: C.BLUE })]),
      bullet([run("Inferred: ", { bold: true }), run("why « Madame le Professeur »? Because she transmits her knowledge — the market respects her like a teacher!", { bold: true, color: C.BLUE })]),
      bullet([run("The hidden lesson: ", { bold: true }), run("respect comes from work and heart, not only from diplomas.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S77 — Writing: my job aspirations ----------
function ficheS77() {
  const meta = META("Writing: the job that’s right for me",
    "By the end of the lesson, learners will be able to write a short text about their work and job aspirations with arguments.",
    "8 / 8", "the notes of the dream-job mingle");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Mama Tiana’s three jobs in one."),
       fp("2. Your dream job in one sentence.")],
      [fp("Answer."),
       fp("E.A.: buyer, seller, teacher — I’d like to be a vet!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing: brainstorm!)"],
      [fp("Brainstorm the reasons and arguments for choosing a career: what makes a job RIGHT for you? I write all the ideas on the board: the love of the work? the salary? helping people? the family tradition? the talents you have?")],
      [fp("Brainstorm."),
       fp("E.A.: passion, money, service, talent, family!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « The job that’s right for me ». By the end of this lesson, your future will hold on one strong paragraph!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The plan on the board: 1. My dream: I’d like to become… 2. The love: because I love… 3. The abilities: I am good at…, I know how to… 4. The service: so I can… 5. The road: first I will study…, then… Attention to the grammar points: able to + verb, good at + -ING, the compound adjectives!")],
      [fp("Copy the plan.")],
      "Guided writing", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Build your paragraph out of the brainstorming — six sentences. Use at least: one dream expression, one ability tool, one quality adjective, one sequence marker for the road. I walk around and help.")],
      [fp("Write.")],
      "Personalisation technique", "Copy-books"),
    stepRow(["5. Synthesis (peer correction)"],
      [fp("Exchange paragraphs, give feedback (meaning? grammar? the -ing after good at?), revise your text.")],
      [fp("Exchange. Revise.")], "Peer correction", "----"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Read your paragraph aloud to the class and answer the questions of your classmates: Why this job? Are you already good at it?")],
      [fp("Read. Answer."),
       pAns("E.A.: I’d like to become a midwife… — Question: why? — Because in my mother’s village, women walk twenty kilometres to the hospital!",
        ["twenty kilometres"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected paragraph."),
       fp("2. Underline the dream expression, circle the ability tools, box the quality adjective.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(77, TOTAL, meta, rows, "s77");
}
function lessonS77() {
  return [
    p([run("LESSON OF THE DAY — SESSION 77", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — THE JOB THAT’S RIGHT FOR ME", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PARAGRAPH PLAN", [
      bullet([run("1. The dream: ", { bold: true }), run("I’d like to become…", { bold: true, color: C.BLUE })]),
      bullet([run("2. The love: ", { bold: true }), run("because I love…", { bold: true, color: C.BLUE })]),
      bullet([run("3. The abilities: ", { bold: true }), run("I am good at…, I know how to…", { bold: true, color: C.BLUE })]),
      bullet([run("4. The service: ", { bold: true }), run("so I can help…", { bold: true, color: C.BLUE })]),
      bullet([run("5. The road: ", { bold: true }), run("First I will study…, then…, finally…", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    p("The job that’s right for me is tour guide. I’d like to become a guide because I love the parks and the animals of my region. I am self-confident, I am good at speaking in public, and I know how to tell the old stories of our villages. With this job, I can show the beauty of Madagascar to the world and give work to my town. First, I will finish high school and study English hard. Then I will train in a national park. Finally, one morning, I will open my arms in front of the baobabs and say: welcome to my island!", { after: 80 }),
    box("THE FINAL CHECK", [
      bullet([run("One dream expression ✓ one ability tool ✓ one quality adjective ✓ the -ing after good at ✓ the road with markers ✓", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 9", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The job questions and answers"),
    bullet([run("What do you do (for a living)? What’s your occupation? — I am a nurse / I work as a mechanic.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The job situations"),
    bullet([run("I’m not working for the moment — I’m between jobs — I’m currently applying for jobs — I have an interview!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The places and the possessive"),
    bullet([run("in a hospital, on a farm, at the market — my mother’s shop, the farmers’ trucks.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The qualities"),
    bullet([run("hardworking, self-confident (compound adjectives!), patient, honest, careful, creative.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The ability tools"),
    bullet([run("able to + verb; know how to + verb; good at + verb-ING!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The dream job"),
    bullet([run("I want to be / I’d like to be / I hope to become — with the three legs: love, ability, service!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 9 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("The job: 1. He repairs engines at a garage. 2. She sews dresses. 3. He catches fish with a net. 4. She teaches in a classroom.")]),
    pAns("Answers: 1. a mechanic. 2. a seamstress. 3. a fisherman. 4. a teacher.", ["a seamstress"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("in, on or at? 1. My father works … a hospital. 2. The sailors work … a ship. 3. She sells fruit … the market. 4. The office is … Independence Avenue.")]),
    pAns("Answers: 1. in. 2. on. 3. at. 4. on.", ["in"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("The possessive case: 1. the shop of my mother. 2. the coat of the doctor. 3. the trucks of the farmers. 4. the dream of Soa.")]),
    pAns("Answers: 1. my mother’s shop. 2. the doctor’s coat. 3. the farmers’ trucks (apostrophe only!). 4. Soa’s dream.", ["the farmers’ trucks"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Complete: 1. She is good at … (count). 2. He knows how … (repair) engines. 3. They are able … (speak) English. 4. A worker who works a lot is … (compound!).")]),
    pAns("Answers: 1. counting. 2. how to repair. 3. able to speak. 4. hardworking.", ["counting"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the text: 1. What are Mama Tiana’s three jobs in one? 2. Why « Madame le Professeur » — stated or inferred? 3. Give YOUR dream job with one argument.")]),
    pAns("Answers: 1. Buyer, seller and teacher. 2. Inferred — the clue: she teaches the young sellers for free. 3. I’d like to become a doctor because my district has only one!", ["Buyer, seller and teacher"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s78", "SESSION 78 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 9: THE JOB THAT’S RIGHT FOR YOU", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. The three twin questions about the occupation."),
    pAns("E.A.: What do you do? What do you do for a living? What’s your occupation?", ["What do you do for a living?"]),
    p("2. Two answers for « mécanicien »."),
    pAns("E.A.: I am a mechanic. / I work as a mechanic.", ["I work as a mechanic."]),
    p("3. Four expressions of the job seeker."),
    pAns("E.A.: I’m not working for the moment; I’m between jobs; I’m currently applying for jobs; I have an interview!", ["I’m between jobs"]),
    p("4. in, on or at: … an office; … a farm; … home."),
    pAns("E.A.: in — on — at.", ["in — on — at"]),
    p("5. The possessive: the pirogue of the fisherman; the house of my parents."),
    pAns("E.A.: the fisherman’s pirogue; my parents’ house.", ["my parents’ house"]),
    p("6. Two compound adjectives of the good worker."),
    pAns("E.A.: hardworking, self-confident.", ["hardworking, self-confident"]),
    p("7. The three ability tools with one example each."),
    pAns("E.A.: able to drive; knows how to cook; good at drawing (-ing!).", ["good at drawing"]),
    p("8. Three ways to say your dream job."),
    pAns("E.A.: I want to be…, I’d like to be…, I hope to become…", ["I hope to become"]),
    p("9. The three legs of the dream."),
    pAns("E.A.: the love, the ability, the service!", ["the love, the ability, the service!"]),
    p("10. In the texts: Mr Rabe’s job and Mama Tiana’s secret third job?"),
    pAns("E.A.: a mechanic — a teacher (for free, every evening)!", ["a teacher (for free"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s79", "SESSION 79 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 9: THE JOB THAT’S RIGHT FOR YOU", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Answer: 1. One question to ask the occupation. 2. Answer with « work as »: infirmière. 3. One polite expression of the job seeker. 4. The hopeful sentence with « interview ».")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("in, on or at? 1. She works … a hospital. 2. The farm is … the hill road. 3. He sells … the market. 4. My uncle works … an office.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("The possessive case: 1. the garage of my uncle. 2. the net of the fisherman. 3. the books of the students. 4. the future of my children.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Complete: 1. A good seller is … at counting (and the verb takes …!). 2. The nurse knows … to take care of patients. 3. The guide is … to speak three languages. 4. Give one compound adjective.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short text (5 sentences) about your dream job: one dream expression, one quality, two ability tools, one argument of service.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: What do you do for a living? — I work as a nurse. — I’m between jobs. — I have an interview on Monday! (1 pt each)", ["I work as a nurse."]),
    pAns("Ex.2: in — on — at — in. (1 pt each)", ["in — on — at — in"]),
    pAns("Ex.3: my uncle’s garage — the fisherman’s net — the students’ books — my children’s future. (1 pt each)", ["the students’ books"]),
    pAns("Ex.4: good — -ing (good at counting) — how — able — hardworking / self-confident. (1 pt each)", ["good at counting"]),
    pAns("Ex.5 (model): I’d like to become a nurse. I am patient and hardworking. I am good at listening to people, and I know how to stay calm. With this job, I can help the mothers of my village. First I will study hard — the job that’s right for me is waiting! (4 pts: dream 1, quality 1, abilities 1, service 1)", ["the job that’s right for me is waiting!"]),
  ];
}

module.exports = function unit9() {
  return [
    ...opening(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...ficheS71(), pageBreak(), ...lessonS71(), pageBreak(),
    ...ficheS72(), pageBreak(), ...lessonS72(), pageBreak(),
    ...ficheS73(), pageBreak(), ...lessonS73(), pageBreak(),
    ...ficheS74(), pageBreak(), ...lessonS74(), pageBreak(),
    ...ficheS75(), pageBreak(), ...lessonS75(), pageBreak(),
    ...ficheS76(), pageBreak(), ...lessonS76(), pageBreak(),
    ...ficheS77(), pageBreak(), ...lessonS77(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 9", COLOR, [
      "I can name the jobs, their workplaces and their tools.",
      "I can ask: What do you do for a living? What’s your occupation?",
      "I can answer: I am a student; my father works as a driver.",
      "I can talk about job situations: between jobs, applying, an interview.",
      "I can place the work with in, on and at.",
      "I can use the possessive case: my mother’s shop, the farmers’ trucks.",
      "I can describe a worker: hardworking, self-confident.",
      "I can use able to, know how to and good at + -ing.",
      "I can say and defend my dream job with arguments.",
      "I can write a short text about my job aspirations!",
    ], "NEXT STOP → UNIT 10: ON THE PHONE!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
