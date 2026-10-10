// T11 — UNIT 1 — SMALL TALK AND OFFERING HELP (7 séances + révision + test) — Sessions 1 à 9 / 86
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "1F618D"; // bleu
const SHADE = "D6EAF8";
const TOTAL = 86;
const AUDIO = {
  // Liens Drive à insérer dès la création du dossier T11 (MP3 de sauvegarde: manuel-t11/audio/)
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 1 — SMALL TALK AND OFFERING HELP", title, slo,
  values: "courtesy, helpfulness", session, materials,
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
function smallTalkDialogueBox() {
  const L = (who, text) => bullet([run("— " + who + ": ", { bold: true, color: C.RED }),
    run(text, { bold: true, color: C.BLUE })]);
  return box("SMALL TALK AT THE TAXI-BROUSSE STATION", [
    L("Vola", "Excuse me… you look familiar. Have we met before?"),
    L("Hery", "Well… actually, yes, I think so! Were you at Ambohipo primary school?"),
    L("Vola", "No way! Hery? Is that you?"),
    L("Hery", "Yes! Wow! I haven’t seen you for ten years!"),
    L("Vola", "Ten years! Time flies. So… do you live in Tana now?"),
    L("Hery", "Yes, I’ve lived here since 2021. I work at the big market… and you?"),
    L("Hery", "Sorry, can you slow down, please? You speak so fast!"),
    L("Vola", "Ha ha! Sorry. I… am… a… student. At the lycée."),
    L("Hery", "Nice! By the way, where are you heading?"),
    L("Vola", "To Antsirabe, to visit my grandmother. Oh, here is my bus! Great talking to you!"),
    L("Hery", "You too! Take care, Vola!", { after: 20 }),
  ]);
}
function opening() {
  return [
    unitBanner("UNIT 1 — SMALL TALK AND OFFERING HELP", COLOR, "unit1"),
    p("", { after: 100 }),
    p([run("Small words… big conversations!", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u1_smalltalk.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• start a conversation with a stranger or an old friend: You look familiar!;"),
    p("• keep a conversation alive with the gambits: well, actually, by the way…;"),
    p("• ask people to slow down or repeat: Can you slow down, please?;"),
    p("• use the present perfect with for and since;"),
    p("• offer help, accept help and decline help politely;"),
    p("• read about the art of small talk, here and there;"),
    p("• write a complete small-talk dialogue.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("courtesy, helpfulness.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("At the bus stop, at the market, at a wedding: life is full of small conversations with people we hardly know. The English call it small talk — and it is a big door! After this unit, you can open that door, keep it open, and even offer a helping hand: Would you like a hand?", { after: 40 }),
    ]),
  ];
}

// ---------- S1 — Starting a conversation ----------
function ficheS1() {
  const meta = META("Starting a conversation — You look familiar!",
    "By the end of the lesson, learners will be able to initiate a conversation with a stranger or a half-known person, using the conversation openers.",
    "1 / 7", "situation cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(First session of the year.) Welcome questions:"),
       fp("1. Hello! What’s your name and where are you from?"),
       fp("2. What do you remember from English in T10?")],
      [fp("Answer."),
       fp("E.A.: I’m…, I’m from…; I remember the greetings / the weather / the phone calls…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mystery meeting: I walk to a student and say, with a big surprised face: “You look familiar… have we met before?” The student must react! Then he/she does the same with another student.")],
      [fp("React. Pass the question on.")], "Chain game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Starting a conversation ». By the end of this lesson, you will open a conversation with anybody — stranger or old friend — like a pro!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model openers on the board: You look familiar. Have we met before? — Excuse me, is this seat taken? — Lovely day, isn’t it? — Long time no see! — What a small world! Which opener is for a stranger? For an old friend?")],
      [fp("Observe. Classify."),
       fp("E.A.: strangers: Excuse me… / Lovely day…; old friends: Long time no see!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The three keys of a good opener: 1. a soft start (Excuse me… / Well…); 2. a common point (the place, the weather, the bus that is late!); 3. a question to pass the ball: Have we met before? Isn’t it? A conversation is a ping-pong game: the question is the ball!")],
      [fp("Find the rules with the teacher."),
       fp("E.A.: soft start + common point + question.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: to start a conversation → You look familiar. Have we met before? / Excuse me, is this seat taken? / Lovely day, isn’t it? / Long time no see! — and always with a smile!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Situation cards: at the bus stop — at a wedding — in a waiting room — at the market. Pairs draw a card, choose the right opener and play the first four lines of the conversation.")],
      [fp("Draw. Choose. Act."),
       pAns("E.A.: (bus stop) Excuse me… the bus is late again, isn’t it? — Oh yes, as always!",
        ["isn’t it?"], { size: SZ.FICHE })],
      "Role play", "Situation cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two openers for a stranger."),
       fp("2. You see an old friend after five years: what do you say?")],
      [fp("Answer."),
       pAns("E.A.: Excuse me… / Lovely day, isn’t it? — Long time no see! / What a small world!",
        ["Long time no see!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(1, TOTAL, meta, rows, "s1");
}
function lessonS1() {
  return [
    p([run("LESSON OF THE DAY — SESSION 1", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("STARTING A CONVERSATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The conversation openers:", { bold: true })], { after: 50 }),
    vocab("You look familiar.", "iou louke familieur", "I think I know you…"),
    vocab("Have we met before?", "have oui mète bifore", "the detective question!"),
    vocab("Excuse me, is this seat taken?", "èxkiouze mi, iz dhis site téikeune", "in the bus, in the room"),
    vocab("Lovely day, isn’t it?", "lovli déi, izeunte ite", "the weather opener"),
    vocab("Long time no see!", "lonng taïme nôou si", "for an old friend"),
    vocab("What a small world!", "ouate e smol oueurlde", "when you meet by surprise"),
    p("", { after: 60 }),
    box("THE THREE KEYS OF A GOOD OPENER", [
      bullet([run("1. A soft start — ", { bold: true }), run("Excuse me… / Well…", { bold: true, color: C.BLUE })]),
      bullet([run("2. A common point — ", { bold: true }), run("the place, the weather, the late bus!", { bold: true, color: C.BLUE })]),
      bullet([run("3. A question — ", { bold: true }), run("Have we met before? … isn’t it?", { bold: true, color: C.BLUE }), run("  (the ball of the ping-pong!)")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("COURTESY CORNER", [
      p("A conversation starts with the eyes and the smile — the words come second. Never start a small talk with a personal question: age, money, salary… those doors stay closed!", { after: 40 }),
    ]),
  ];
}

// ---------- S2 — The conversation gambits ----------
function ficheS2() {
  const meta = META("Keeping the talk alive — the conversation gambits",
    "By the end of the lesson, learners will be able to maintain a conversation using gambits (well, actually, by the way…) and repair expressions (Can you slow down, please?).",
    "2 / 7", "gambit cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give one opener for a stranger and one for an old friend.")],
      [fp("Answer."),
       fp("E.A.: Lovely day, isn’t it? — Long time no see!")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The robot game: I tell a small story with NO reaction words, like a robot. Then I tell it again with: Really? No way! Wow! — Which version is alive?")],
      [fp("Compare the two versions."),
       fp("E.A.: the second one — the reactions give life!")],
      "Using contrast", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The conversation gambits ». By the end of this lesson, your conversations will never die!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Model mini-dialogue: — I work at the market. — Really? Well, actually, my mother works there too! By the way, do you know the cheese lady? — Sorry, can you slow down, please? — Observe the words in colour: what is their job?")],
      [fp("Observe."),
       fp("E.A.: they connect, they react, they give time to think.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Three families: 1. the gambits (time to think + connection): well, actually, you know, by the way, anyway, I mean; 2. the reactions: Really? No way! Wow! That’s great!; 3. the repair kit (when it goes too fast): Sorry? Can you slow down, please? Can you say that again, please? What do you mean?")],
      [fp("Classify with the teacher."),
       fp("E.A.: gambits / reactions / repair kit.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: gambits to glue the sentences (well, actually, by the way), reactions to show interest (Really? No way!), repair kit to save the conversation (Can you slow down, please?).")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The gambit relay: pairs talk about their weekend. Every student has three gambit cards and must play all of them in the conversation. The class listens and raises a hand at every gambit heard!")],
      [fp("Talk. Use the three cards."),
       pAns("E.A.: Well, on Saturday I helped my father. Actually, we built a fence! By the way, do you like building things?",
        ["By the way"], { size: SZ.FICHE })],
      "Game — pair work", "Gambit cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give two gambits and one reaction."),
       fp("2. The person speaks too fast: what do you say?")],
      [fp("Answer."),
       pAns("E.A.: well, by the way — Really? — Sorry, can you slow down, please?",
        ["Can you slow down, please?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(2, TOTAL, meta, rows, "s2");
}
function lessonS2() {
  return [
    p([run("LESSON OF THE DAY — SESSION 2", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE CONVERSATION GAMBITS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("1. The gambits — the glue of the talk:", { bold: true })], { after: 50 }),
    vocab("well…", "ouèl", "soft start, time to think"),
    vocab("actually…", "aktchou-eli", "in fact, to be exact"),
    vocab("you know…", "iou nôou", "friendly connector"),
    vocab("by the way…", "baï dhe ouéi", "to change the subject"),
    vocab("anyway…", "èni-ouéi", "to come back or to close"),
    p("", { after: 60 }),
    p([run("2. The reactions — show your interest:", { bold: true })], { after: 50 }),
    vocab("Really?", "rili", "surprised and interested"),
    vocab("No way!", "nôou ouéi", "big surprise!"),
    vocab("That’s great!", "dhatse gréite", "happy for you"),
    p("", { after: 60 }),
    p([run("3. The repair kit — save the conversation:", { bold: true })], { after: 50 }),
    vocab("Sorry? / Pardon?", "sori / pardeune", "I didn’t hear"),
    vocab("Can you slow down, please?", "kane iou slôou daoune, plize", "too fast!"),
    vocab("Can you say that again, please?", "kane iou séi dhate e-guène, plize", "repeat, please"),
    vocab("What do you mean?", "ouate dou iou mine", "explain, please"),
    p("", { after: 60 }),
    box("MINI-DIALOGUE", [
      bullet([run("— I work at the market. — ", { bold: true, color: C.BLUE }), run("Really?", { bold: true, color: C.RED }), run(" Well, actually,", { bold: true, color: C.RED }), run(" my mother works there too! ", { bold: true, color: C.BLUE }), run("By the way,", { bold: true, color: C.RED }), run(" do you know the cheese lady?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S3 — Listening: small talk at the station ----------
function ficheS3() {
  const meta = META("Listening: small talk at the taxi-brousse station",
    "By the end of the lesson, learners will be able to give the gist and detailed information of an oral conversation between two old schoolmates.",
    "3 / 7", "audio (QR code) or dialogue read aloud, picture of the station");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give one gambit, one reaction and one repair expression.")],
      [fp("Answer."),
       fp("E.A.: by the way — No way! — Can you slow down, please?")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Describe the picture: a taxi-brousse station, two young people, one is pointing. What is happening? What will they say? Predict!")],
      [fp("Describe. Predict."),
       fp("E.A.: maybe they know each other… maybe “You look familiar!”")],
      "Using audio-visual aids", "Picture of the station"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Small talk at the taxi-brousse station ». By the end of this lesson, you will catch the gist and the details of a real small talk.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening)"],
      [fp("First listening — the gist: who speaks? strangers or old friends? happy or angry? Second listening — the details: 1. Where did they meet before? 2. How long haven’t they seen each other? 3. Since when has Hery lived in Tana? 4. Where is Vola heading?")],
      [fp("Listen. Answer."),
       pAns("E.A.: two old schoolmates, happy. 1. At Ambohipo primary school. 2. For ten years. 3. Since 2021. 4. To Antsirabe, to visit her grandmother.",
        ["For ten years"], { size: SZ.FICHE })],
      "Individual work", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Listening hunt: hands up when you hear… a gambit! (well, actually, by the way) — a reaction! (No way! Wow!) — the repair kit! (Can you slow down, please?). Then listen and repeat, line by line.")],
      [fp("Listen. React. Repeat.")],
      "Repetition drill", "Audio / QR"),
    stepRow(["5. Synthesis (post-listening)"],
      [fp("The skeleton of this small talk: opener (You look familiar) → surprise (No way!) → news of life (I’ve lived here since 2021) → change of subject (By the way…) → closing (Great talking to you!). Keep this skeleton!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Two students act the dialogue in front of the class — with the gestures, the surprise and the smile! Then pairs replay it with THEIR names and THEIR old school.")],
      [fp("Act. Personalise."),
       pAns("E.A.: — You look familiar! Were you at Anosibe primary school? — No way! …",
        ["You look familiar!"], { size: SZ.FICHE })],
      "Role play", "Audio / QR"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. In the dialogue: who works at the big market?"),
       fp("2. Why does Hery say “Can you slow down, please?”"),
       fp("3. Give the five steps of the skeleton.")],
      [fp("Answer."),
       pAns("E.A.: Hery. — Because Vola speaks too fast. — opener, surprise, news of life, change of subject, closing.",
        ["Because Vola speaks too fast."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(3, TOTAL, meta, rows, "s3");
}
function lessonS3() {
  return [
    p([run("LESSON OF THE DAY — SESSION 3", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("SMALL TALK AT THE STATION", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    smallTalkDialogueBox(),
    p("", { after: 60 }),
    p([run("The skeleton of a small talk:", { bold: true })], { after: 50 }),
    bullet([run("1. Opener — ", { bold: true }), run("You look familiar. Have we met before?", { bold: true, color: C.BLUE })]),
    bullet([run("2. Surprise — ", { bold: true }), run("No way! What a small world!", { bold: true, color: C.BLUE })]),
    bullet([run("3. News of life — ", { bold: true }), run("I’ve lived here since 2021. I work at…", { bold: true, color: C.BLUE })]),
    bullet([run("4. Change of subject — ", { bold: true }), run("By the way, where are you heading?", { bold: true, color: C.BLUE })]),
    bullet([run("5. Closing — ", { bold: true }), run("Great talking to you! Take care!", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- S4 — Present perfect with for and since ----------
function ficheS4() {
  const meta = META("The present perfect with for and since",
    "By the end of the lesson, learners will be able to talk about situations that started in the past and continue now, using the present perfect with “for” and “since”.",
    "4 / 7", "timeline on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("From the dialogue: complete — I haven’t seen you … ten years! I’ve lived here … 2021.")],
      [fp("Answer."),
       fp("E.A.: for; since.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("How long? I ask: How long have you been at this lycée? How long have you known your best friend? Students answer freely — I collect the answers on the board.")],
      [fp("Answer freely.")], "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The present perfect with for and since ». By the end of this lesson, you will measure your life in English!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Timeline on the board: 2021 •————————• NOW. Model sentences: Hery has lived in Tana since 2021. = Hery has lived in Tana for four years. — Same life, two measures: what is the difference between since and for?")],
      [fp("Observe the timeline."),
       fp("E.A.: since + the starting point; for + the duration.")],
      "Using the timeline", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The form: have/has + past participle. I have lived — she has lived — I haven’t seen — Have you met? The two partners: SINCE + a date, a day, a moment (since 2021, since Monday, since my childhood); FOR + a duration (for ten years, for two hours, for a long time). Question: How long…?")],
      [fp("Build the rule with the teacher."),
       fp("E.A.: since = starting point; for = duration; how long = the question.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: How long have you lived here? — I’ve lived here since 2021 / for four years. The action starts in the past and continues NOW: that is the job of the present perfect!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The “for or since” tribunal: I say a time expression (last March — three weeks — 6 o’clock — my birthday — five minutes), students shout FOR! or SINCE! Then pairs interview each other: How long have you known…? How long have you had your school bag?")],
      [fp("Shout the right partner. Interview."),
       pAns("E.A.: since last March — for three weeks — since 6 o’clock; I’ve known her since T6!",
        ["for three weeks"], { size: SZ.FICHE })],
      "Game — pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: She has worked at the market … 2019."),
       fp("2. Complete: We have been friends … ten years."),
       fp("3. Ask the question for: “I’ve lived here for six months.”")],
      [fp("Answer."),
       pAns("E.A.: since; for; How long have you lived here?",
        ["How long have you lived here?"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(4, TOTAL, meta, rows, "s4");
}
function lessonS4() {
  return [
    p([run("LESSON OF THE DAY — SESSION 4", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PRESENT PERFECT WITH FOR AND SINCE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE FORM", [
      bullet([run("have / has + past participle", { bold: true, color: C.RED })]),
      bullet([run("I have lived — she has lived — I haven’t seen — Have you met?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The timeline:", { bold: true })], { after: 50 }),
    p([run("2021 •————————————• NOW", { bold: true, color: COLOR, size: 30 })], { center: true, after: 60 }),
    bullet([run("Hery has lived in Tana ", { bold: true, color: C.BLUE }), run("since 2021", { bold: true, color: C.RED }), run(" (the starting point).", )]),
    bullet([run("Hery has lived in Tana ", { bold: true, color: C.BLUE }), run("for four years", { bold: true, color: C.RED }), run(" (the duration).")]),
    p("", { after: 60 }),
    p([run("The two partners:", { bold: true })], { after: 50 }),
    bullet([run("SINCE ", { bold: true, color: C.RED }), run("+ the starting point: "), run("since 2021, since Monday, since my childhood", { bold: true, color: C.BLUE })]),
    bullet([run("FOR ", { bold: true, color: C.RED }), run("+ the duration: "), run("for ten years, for two hours, for a long time", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    box("THE QUESTION", [
      bullet([...kw("How long have you lived here?", "haou lonng have iou livde hire")]),
      bullet([run("→ I’ve lived here since 2021 — for four years.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Watch out!", { bold: true, color: C.RED })], { after: 50 }),
    p("• I live here since 2021 ✘ — I have lived here since 2021 ✔;"),
    p("• since four years ✘ — for four years ✔."),
  ];
}

// ---------- S5 — Offering, accepting and declining help ----------
function ficheS5() {
  const meta = META("Offering, accepting and declining help",
    "By the end of the lesson, learners will be able to offer help, accept help and decline help politely in everyday situations.",
    "5 / 7", "audio (QR code), situation pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Complete: I’ve known my best friend … five years, … primary school.")],
      [fp("Answer."),
       fp("E.A.: for; since.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mime time: I mime a person carrying a very heavy bag, then a person looking for something, then a person lost in the street. For each mime: what does this person need?")],
      [fp("Guess."),
       fp("E.A.: help!")],
      "Miming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « Offering help ». By the end of this lesson, you will offer a helping hand in English — and say yes or no politely!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Play the audio (or read): Would you like a hand with that bag, madam? — Oh, that’s very kind of you! / Can I help you carry the basket? — No, thank you, I can manage. — Two offers, two answers: what is the difference?")],
      [fp("Listen. Compare."),
       fp("E.A.: the first accepts, the second declines — both stay polite!")],
      "Using audio", "Audio / QR"),
    stepRow(["4. Analysis"],
      [fp("Three toolboxes: 1. OFFER: Would you like a hand? / Can I help you…? / Shall I…? / Do you need some help?; 2. ACCEPT: That’s very kind! / Yes, please! / I’d really appreciate it; 3. DECLINE politely: No, thank you, I can manage / Thanks, but I’m fine. The golden rule: a declined offer is NOT a problem — courtesy on both sides!")],
      [fp("Classify with the teacher."),
       fp("E.A.: offer / accept / decline.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: offer with Would you like a hand? — accept with That’s very kind! — decline with No, thank you, I can manage. Three tools, one value: helpfulness!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("The helping chain: situation pictures (an old lady with a basket, a classmate with homework, a tourist with a map, a teacher with many books). Pairs: one offers, the other accepts OR declines — then they swap.")],
      [fp("Offer. Accept or decline. Swap."),
       pAns("E.A.: Shall I carry those books, Sir? — That would be great, thanks a lot!",
        ["Shall I"], { size: SZ.FICHE })],
      "Role play", "Situation pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Offer help to a classmate with his homework."),
       fp("2. Accept an offer with enthusiasm."),
       fp("3. Decline an offer politely.")],
      [fp("Answer."),
       pAns("E.A.: Do you need some help with your homework? — I’d really appreciate it! — No, thank you, I can manage.",
        ["I can manage"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(5, TOTAL, meta, rows, "s5");
}
function lessonS5() {
  return [
    p([run("LESSON OF THE DAY — SESSION 5", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("OFFERING, ACCEPTING AND DECLINING HELP", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u1_help.png", 400, 768 / 1376),
    p([run("1. To offer help:", { bold: true })], { after: 50 }),
    vocab("Would you like a hand?", "oude iou laïke e hande", "the friendly offer"),
    vocab("Can I help you…?", "kane aï hèlpe iou", "simple and direct"),
    vocab("Shall I open the door?", "chal aï ôoupeune dhe dore", "I propose the action"),
    vocab("Do you need some help?", "dou iou nide some hèlpe", "the caring question"),
    p("", { after: 60 }),
    p([run("2. To accept:", { bold: true })], { after: 50 }),
    vocab("That’s very kind of you!", "dhatse vèri kaïnde ove iou", ""),
    vocab("Yes, please!", "ièsse, plize", ""),
    vocab("I’d really appreciate it.", "aïde rili e-prichiéite ite", ""),
    p("", { after: 60 }),
    p([run("3. To decline — politely!", { bold: true })], { after: 50 }),
    vocab("No, thank you, I can manage.", "nôou, thank iou, aï kane manidje", ""),
    vocab("Thanks, but I’m fine.", "thanks, bate aïme faïne", ""),
    p("", { after: 60 }),
    box("HELPFULNESS CORNER", [
      p("In Madagascar, the fihavanana teaches us to carry the basket together. English says the same with three words: lend a hand! A declined offer is never a defeat: the courtesy was given — and received.", { after: 40 }),
    ]),
  ];
}

// ---------- S6 — Reading: the art of small talk ----------
function readingTextBox() {
  return box("READING TEXT — THE ART OF SMALL TALK, HERE AND THERE", [
    p("Small talk means the small conversations of everyday life: at the bus stop, in a queue, before a meeting. The words are small — but the job is big: small talk opens doors, builds trust and sometimes starts a friendship.", { after: 60 }),
    p("In many English-speaking countries, the favourite topic is the weather: “Lovely day, isn’t it?” People also chat about sports, food or the news. But some doors stay closed: age, salary, religion and politics are not small-talk topics with a stranger!", { after: 60 }),
    p("In Madagascar, small talk often starts with the news of the family: “Inona no vaovao?” People ask about the rice, the market, the journey. The topics change from one country to another — but the music is the same everywhere: a smile, a soft question, a kind reaction.", { after: 60 }),
    p("So next time you wait for a late taxi-brousse, try it in English: “Long wait, isn’t it?” — you may win a new friend before the bus arrives!", { after: 40 }),
  ]);
}
function ficheS6() {
  const meta = META("Reading: the art of small talk, here and there",
    "By the end of the lesson, learners will be able to read a short text about small talk, find the gist and the details, and compare the anglophone and Malagasy customs.",
    "6 / 7", "reading text (one per pair if possible)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Offer help to the teacher with the big dictionary — then decline my counter-offer politely!")],
      [fp("Answer."),
       fp("E.A.: Shall I carry the dictionary, Madam? … No, thank you, I can manage.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("Quick survey: where do people chat with strangers in your town? At the market? At the pump? In the taxi-brousse? And about what?")],
      [fp("Answer freely."),
       fp("E.A.: at the market, about the prices, the rain, the family…")],
      "Brainstorming", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read a text called: « The art of small talk, here and there ». By the end of this lesson, you will know the good topics — and the closed doors — of small talk.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First reading — the gist: what is the text about? Second reading — the details: 1. Give two jobs of small talk. 2. What is the favourite anglophone topic? 3. Give two closed doors. 4. How does Malagasy small talk often start?")],
      [fp("Read. Answer."),
       pAns("E.A.: small talk here and there. 1. It opens doors and builds trust. 2. The weather. 3. Age, salary (religion, politics). 4. With the news of the family.",
        ["The weather"], { size: SZ.FICHE })],
      "Individual reading", "Reading text"),
    stepRow(["4. Analysis"],
      [fp("Vocabulary hunt: find in the text a word that means… small conversations (small talk) — a line of waiting people (a queue) — confidence (trust). Then: find one sentence with the present perfect… and one opener!")],
      [fp("Hunt in the text."),
       fp("E.A.: queue; trust; “Lovely day, isn’t it?”")],
      "Scanning technique", "Reading text"),
    stepRow(["5. Synthesis (post-reading)"],
      [fp("The compass of small talk: safe topics (weather, sports, food, family news) — closed doors (age, salary, religion, politics). Same music everywhere: smile + soft question + kind reaction.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Culture debate in pairs: one student defends the anglophone opener (the weather), the other the Malagasy opener (the family news). Which one would work at YOUR bus stop? Report to the class!")],
      [fp("Debate. Report."),
       pAns("E.A.: At our bus stop, the family opener works better, because everybody knows everybody!",
        ["works better"], { size: SZ.FICHE })],
      "Pair debate", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. True or false: salary is a good small-talk topic."),
       fp("2. Quote the sentence that compares small talk to music."),
       fp("3. Give one safe topic in each culture.")],
      [fp("Answer."),
       pAns("E.A.: False! — “the music is the same everywhere: a smile, a soft question, a kind reaction.” — the weather / the family news.",
        ["False!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(6, TOTAL, meta, rows, "s6");
}
function lessonS6() {
  return [
    p([run("LESSON OF THE DAY — SESSION 6", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE ART OF SMALL TALK, HERE AND THERE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("Glossary:", { bold: true })], { after: 50 }),
    vocab("a queue", "e kiou", "a line of waiting people"),
    vocab("trust", "troste", "confidence"),
    vocab("a topic", "e topik", "a subject of conversation"),
    vocab("a stranger", "e stréindjeur", "a person you don’t know"),
    p("", { after: 60 }),
    box("THE COMPASS OF SMALL TALK", [
      bullet([run("Safe topics ✔ — ", { bold: true, color: C.GREEN }), run("the weather, sports, food, the family news", { bold: true, color: C.BLUE })]),
      bullet([run("Closed doors ✘ — ", { bold: true, color: C.RED }), run("age, salary, religion, politics", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S7 — Writing: my small-talk dialogue ----------
function ficheS7() {
  const meta = META("Writing: my small-talk dialogue",
    "By the end of the lesson, learners will be able to write a complete small-talk dialogue using the openers, the gambits, the present perfect and an offer of help.",
    "7 / 7", "checklist on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Give the five steps of the small-talk skeleton.")],
      [fp("Answer."),
       fp("E.A.: opener, surprise, news of life, change of subject, closing.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing)"],
      [fp("Lottery of situations: at the market — at a wedding — at the hospital gate — at the football stadium. Each pair draws one situation: this is the stage of their dialogue!")],
      [fp("Draw a situation.")], "Using game", "Situation papers"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My small-talk dialogue ». By the end of this lesson, every pair will have a complete conversation — ready to act!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The checklist on the board: ① one opener ② two gambits ③ one reaction ④ one sentence with the present perfect (for/since) ⑤ one offer of help (accepted or declined) ⑥ one closing. Count with me in the station dialogue: all there?")],
      [fp("Check the model."),
       fp("E.A.: yes — opener, gambits, No way!, since 2021, (offer in S5!), Great talking to you!")],
      "Guided observation", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Pairs write the first draft (8 to 10 lines). I walk and help: spelling, punctuation (— for each speaker!), and the checklist. Draft first, beauty later!")],
      [fp("Write the first draft.")],
      "Pair writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Peer check: pairs exchange their drafts and tick the checklist of the neighbours: ①②③④⑤⑥. One missing? Give it back with a kind note!")],
      [fp("Check the neighbours’ draft."),
       fp("E.A.: “Very good! But we don’t see the present perfect…”")],
      "Peer correction", "Checklists"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Final copy — and action! Each pair acts its dialogue in front of the class. The class listens with the checklist: hands up at every tool heard!")],
      [fp("Act the dialogue."),
       pAns("E.A.: — Excuse me… long wait, isn’t it? — Oh yes! Actually, the bus has been late for one hour! …",
        ["long wait, isn’t it?"], { size: SZ.FICHE })],
      "Role play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("Write two lines: offer to help a tourist with his bag — the tourist declines politely.")],
      [fp("Write."),
       pAns("E.A.: — Would you like a hand with your bag, Sir? — No, thank you, I can manage!",
        ["Would you like a hand"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(7, TOTAL, meta, rows, "s7");
}
function lessonS7() {
  return [
    p([run("LESSON OF THE DAY — SESSION 7", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY SMALL-TALK DIALOGUE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITER’S CHECKLIST", [
      bullet([run("① one opener — ", { bold: true }), run("You look familiar… / Lovely day, isn’t it?", { bold: true, color: C.BLUE })]),
      bullet([run("② two gambits — ", { bold: true }), run("well, actually, by the way…", { bold: true, color: C.BLUE })]),
      bullet([run("③ one reaction — ", { bold: true }), run("Really? No way!", { bold: true, color: C.BLUE })]),
      bullet([run("④ one present perfect — ", { bold: true }), run("I’ve lived here since… / for…", { bold: true, color: C.BLUE })]),
      bullet([run("⑤ one offer of help — ", { bold: true }), run("Would you like a hand?", { bold: true, color: C.BLUE })]),
      bullet([run("⑥ one closing — ", { bold: true }), run("Great talking to you! Take care!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("Model dialogue (at the market):", { bold: true })], { after: 50 }),
    bullet([run("— Excuse me… you look familiar. Have we met before?", { bold: true, color: C.BLUE })]),
    bullet([run("— Well, actually, yes! At the church choir, I think!", { bold: true, color: C.BLUE })]),
    bullet([run("— No way! Small world! How long have you sung there?", { bold: true, color: C.BLUE })]),
    bullet([run("— I’ve sung there since 2022. By the way… your basket looks heavy. Would you like a hand?", { bold: true, color: C.BLUE })]),
    bullet([run("— That’s very kind of you! Thanks a lot!", { bold: true, color: C.BLUE })]),
    bullet([run("— You’re welcome. Great talking to you!", { bold: true, color: C.BLUE })]),
    p("", { after: 60 }),
    p([run("Punctuation watch-out:", { bold: true, color: C.RED })], { after: 50 }),
    p("• one dash (—) for each new speaker;"),
    p("• the question mark goes INSIDE the question: Have we met before?"),
  ];
}

// ---------- The big lesson ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 1", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. Starting a conversation"),
    bullet([run("You look familiar. Have we met before? — Lovely day, isn’t it? — Long time no see!", { bold: true, color: C.BLUE })]),
    bullet([run("The three keys: ", { bold: true }), run("soft start + common point + question.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The conversation gambits"),
    bullet([run("Gambits: ", { bold: true }), run("well, actually, you know, by the way, anyway", { bold: true, color: C.BLUE })]),
    bullet([run("Reactions: ", { bold: true }), run("Really? No way! That’s great!", { bold: true, color: C.BLUE })]),
    bullet([run("Repair kit: ", { bold: true }), run("Sorry? Can you slow down, please? What do you mean?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The present perfect with for and since"),
    bullet([run("have/has + past participle: ", { bold: true }), run("I’ve lived here since 2021 — for four years.", { bold: true, color: C.BLUE })]),
    bullet([run("SINCE + starting point; FOR + duration; the question: How long…?", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. Offering help"),
    bullet([run("Offer: ", { bold: true }), run("Would you like a hand? Shall I…? Do you need some help?", { bold: true, color: C.BLUE })]),
    bullet([run("Accept: ", { bold: true }), run("That’s very kind! I’d really appreciate it.", { bold: true, color: C.BLUE })]),
    bullet([run("Decline: ", { bold: true }), run("No, thank you, I can manage.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The culture compass"),
    bullet([run("Safe topics: weather, sports, food, family news — closed doors: age, salary, religion, politics.", { bold: true, color: C.BLUE })], { after: 100 }),
  ];
}

// ---------- Exercises ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the right opener: 1. to a stranger at the bus stop 2. to an old friend you meet by surprise 3. about the weather 4. in a waiting room (the seat).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Place the gambits (well / actually / by the way / anyway): 1. …, I must go now. 2. He is, …, my cousin! 3. …, let me think… 4. …, do you know the new teacher?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("For or since? 1. I’ve known her … 2019. 2. We’ve waited … two hours! 3. He has worked here … his childhood. 4. They’ve been friends … a long time.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Offer — accept — decline: 1. Offer help to an old man with a heavy bag. 2. Accept with enthusiasm. 3. Decline politely. 4. Ask someone to slow down.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a small-talk dialogue (6 lines) with the checklist: opener — gambit — reaction — present perfect — offer of help — closing.")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1 (models): Excuse me, is this seat taken? — Long time no see! — Lovely day, isn’t it? — Is this seat taken? (1 pt each)", ["Long time no see!"]),
    pAns("Exercise 2: Anyway — actually — Well — By the way. (1 pt each)", ["By the way"]),
    pAns("Exercise 3: since — for — since — for. (1 pt each)", ["since"]),
    pAns("Exercise 4 (models): Would you like a hand with that bag, Sir? — I’d really appreciate it! — No, thank you, I can manage. — Can you slow down, please? (1 pt each)", ["I can manage"]),
    pAns("Exercise 5: six correct lines with the checklist (skeleton 2 pts, grammar 1 pt, coherence 1 pt).", ["checklist"]),
  ];
}

// ---------- Revision (S8) ----------
function revision() {
  return [
    B.bookmarkTitle("s8", "SESSION 8 / 86", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 1: SMALL TALK AND OFFERING HELP", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Give two conversation openers for a stranger."),
    pAns("E.A.: Excuse me, is this seat taken? — Lovely day, isn’t it?", ["Lovely day, isn’t it?"]),
    p("2. You meet an old friend after years: give the opener and the surprise."),
    pAns("E.A.: Long time no see! — No way! What a small world!", ["Long time no see!"]),
    p("3. Give the three keys of a good opener."),
    pAns("E.A.: soft start + common point + question.", ["soft start"]),
    p("4. Give three gambits and their job."),
    pAns("E.A.: well, actually, by the way — they glue the sentences and give time to think.", ["by the way"]),
    p("5. The person speaks too fast and you did not understand: two repair expressions!"),
    pAns("E.A.: Can you slow down, please? — Can you say that again, please?", ["Can you slow down, please?"]),
    p("6. Complete: She has lived in Toamasina … 2018; we have been in this class … three months."),
    pAns("E.A.: since; for.", ["since"]),
    p("7. Ask the How long question for: “I have known Soa since T6.”"),
    pAns("E.A.: How long have you known Soa?", ["How long have you known Soa?"]),
    p("8. Offer help in three different ways."),
    pAns("E.A.: Would you like a hand? — Shall I…? — Do you need some help?", ["Would you like a hand?"]),
    p("9. Accept an offer, then decline an offer — both politely."),
    pAns("E.A.: That’s very kind of you! — No, thank you, I can manage.", ["I can manage"]),
    p("10. In the reading text: give two safe topics and two closed doors."),
    pAns("E.A.: the weather, the family news — age, salary.", ["closed doors"]),
  ];
}

// ---------- Test paper (S9) ----------
function testPaper() {
  return [
    B.bookmarkTitle("s9", "SESSION 9 / 86", { bold: true, size: 28, after: 60 }),
    p([run("T11 TEST PAPER — UNIT 1: SMALL TALK AND OFFERING HELP", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give: 1. an opener for a stranger 2. an opener for an old friend 3. a reaction of surprise 4. a repair expression.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("For or since? 1. I’ve studied English … T4. 2. She has worked at the hospital … six years. 3. We’ve known each other … primary school. 4. They have waited … twenty minutes.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Put in the present perfect: 1. Hery … (live) in Tana since 2021. 2. I … (not/see) you for ten years! 3. … you ever … (meet) a foreigner? 4. We … (be) in this lycée for two months.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Offering help: 1. Offer help to a classmate with the exercises. 2. Accept. 3. Offer help to a tourist with his suitcase. 4. The tourist declines politely.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a small-talk dialogue (6 to 8 lines): you meet a half-known person at the market. Checklist: opener — two gambits — one reaction — one present perfect with for or since — one offer of help — closing.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1 (models): Excuse me, is this seat taken? — Long time no see! — No way! — Can you slow down, please? (1 pt each)", ["No way!"]),
    pAns("Ex.2: since — for — since — for. (1 pt each)", ["for"]),
    pAns("Ex.3: has lived — haven’t seen — Have you ever met — have been. (1 pt each)", ["has lived"]),
    pAns("Ex.4 (models): Do you need some help with the exercises? — I’d really appreciate it! — Would you like a hand with your suitcase, Sir? — No, thank you, I can manage. (1 pt each)", ["I’d really appreciate it!"]),
    pAns("Ex.5 (model): — Excuse me… you look familiar! — Well, actually, we met at the choir! — No way! … I’ve sung there since 2022… By the way, your basket looks heavy: would you like a hand? — That’s very kind! — Great talking to you! (4 pts: skeleton 2, grammar 1, coherence 1)", ["you look familiar!"]),
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
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 1", COLOR, [
      "I can start a conversation: You look familiar. Have we met before?",
      "I can keep a talk alive with the gambits: well, actually, by the way.",
      "I can react: Really? No way! — and repair: Can you slow down, please?",
      "I can use the present perfect: I’ve lived here since 2021 / for four years.",
      "I can offer help: Would you like a hand?",
      "I can accept and decline help politely: That’s very kind! — I can manage.",
      "I can name the safe topics and the closed doors of small talk.",
      "I can write a complete small-talk dialogue with the checklist.",
    ], "NEXT STOP → UNIT 2: HEALTH ISSUES!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
