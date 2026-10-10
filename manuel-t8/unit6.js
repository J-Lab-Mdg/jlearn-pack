// T8 — UNIT 6 — MEANS OF COMMUNICATION (10 séances + révision + test) — Sessions 58 à 69 / 81
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "2E7D32"; // vert forêt
const SHADE = "D4EFDF";
const TOTAL = 81;
const AUDIO = {
  radio: "https://drive.google.com/uc?export=download&id=1VqzZdDs7oLWVs1TX0p9Uv-5X1Fy0SC0M",
  phone: "https://drive.google.com/uc?export=download&id=1GOILpKLd4lKZtlFnzpem4GJjjyky7SZK",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 6 — MEANS OF COMMUNICATION", title, slo,
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
function radioNewsBox() {
  const L = (t, last) => p(t, { after: last ? 20 : 50 });
  return box("RADIO VANILLA — THE SIX O’CLOCK NEWS (listening passage)", [
    L("Good evening! Here is the news. Yesterday, heavy rain fell on the east coast. The old bridge of the village was damaged by the water, but nobody was hurt. The bridge was repaired this morning by the villagers."),
    L("Good news for the students: a new library was opened in town yesterday. One thousand books were given by an association."),
    L("And finally, sport: our football team won the regional cup on Sunday! The players were welcomed like heroes. That is the end of the news. Thank you for listening, and good night!", true),
  ]);
}
function phoneDialogueBox() {
  const L = (who, t) => pr([run(who + " — ", { bold: true, color: COLOR }), run(t)], { after: 50 });
  return box("A PHONE CALL (listening passage)", [
    L("Mrs Rasoa", "Hello?"),
    L("Koto", "Hello! It’s Koto. May I speak to Hery, please?"),
    L("Mrs Rasoa", "I’m sorry, he is out. He went to the football field."),
    L("Koto", "Oh… Can you give him a message, please?"),
    L("Mrs Rasoa", "Of course!"),
    L("Koto", "Please tell him that the English club will meet tomorrow at nine."),
    L("Mrs Rasoa", "The English club, tomorrow at nine. No problem, I will tell him."),
    L("Koto", "Thank you very much! Goodbye!"),
    L("Mrs Rasoa", "You’re welcome, Koto. Goodbye!"),
  ]);
}
function letterBox() {
  const L = (t, o = {}) => p([run(t, { italic: true })], { after: o.after != null ? o.after : 40, ...(o.right ? { right: true } : {}) });
  return box("THE MODEL LETTER (informal)", [
    pr([run("Antsirabe, 12th June", { italic: true })], { right: true, after: 60 }),
    L("Dear Vero,"),
    L("How are you? I have got great news! A new library was opened in our town last week. One thousand books were given by an association — can you believe it?"),
    L("I went there yesterday with Hery. We read comics and we borrowed two books about animals. If you come in July, we will go there together!"),
    L("Write to me soon!"),
    L("Your friend,"),
    L("Koto", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 6 — MEANS OF COMMUNICATION", COLOR, "unit6"),
    p("", { after: 100 }),
    p([run("What’s new? What’s the news?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u6_media.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• ask and tell the news: What’s new? What did you hear on the radio?;"),
    p("• name the means of sharing the news: radio, TV, phone, Facebook, email, letters;"),
    p("• recognise good, bad… and FAKE news!;"),
    p("• use the simple past to tell what happened;"),
    p("• use the passive voice: the bridge was repaired!;"),
    p("• make phone calls: May I speak to…, please?;"),
    p("• understand the social media words and the message acronyms;"),
    p("• read a newspaper — and write a letter or an email to tell an event.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("self-confidence, altruism.")], { after: 160 }),
    box("DO YOU REMEMBER? (UNIT 5)", [
      p("In Unit 5, you protected your health: If you stay clean, you will stay healthy!"),
      p("In Unit 6, the news travels: by radio, by phone, by letter — and in English!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t8_u6_radio.png", label: "Radio Vanilla — the news", url: AUDIO.radio }], COLOR),
  ];
}

// ---------- S55 — Means of sharing news + asking/telling ----------
function ficheS55() {
  const meta = META("The means of sharing the news — asking and telling the news",
    "By the end of the lesson, learners will be able to name the means of sharing the news and ask and tell the news.",
    "1 / 10", "pictures of media");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Review of Unit 5.) Answer these questions:"),
       fp("1. What should I do for a fever?"),
       fp("2. Complete: If you wash your hands, …")],
      [fp("Answer."),
       fp("E.A.: You should take tablets and rest; germs will not touch your food.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: brainstorm in groups all the means of sharing the news you know — then tell them to the class!")],
      [fp("Brainstorm in groups. Tell the class."),
       fp("E.A.: radio, TV, phone, Facebook, email, letters…")],
      "Brainstorming / Group work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The means of communication ». By the end of this lesson, no news will escape you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the pictures: the radio, the TV, the phone, Facebook, the email, the letters. Old or modern? Fast or slow?")],
      [fp("Observe. Classify old/modern, fast/slow.")],
      "Using visual-aids", "Pictures of media"),
    stepRow(["4. Analysis"],
      [fp("Observe the news questions and answers: What’s new? What’s up? What’s the news? What did you hear on the radio? What did you read in the newspaper? → Nothing special! Nothing much! Same as always! — or a real news!")],
      [fp("Observe. Match questions and answers."),
       fp("E.A.: What’s up? → Nothing much!")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("And when the news is sad: I’m sorry to hear that. / Oh dear, that’s awful! And careful: some news is FAKE — always check! Listen and repeat.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("News ping-pong in pairs: — What’s new? — My cousin arrived yesterday! — Great! / — Our goat is sick. — Oh dear, I’m sorry to hear that!")],
      [fp("Ask and tell the news."),
       pAns("E.A.: What’s the news? — Nothing special, same as always!",
        ["What’s the news?"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name six means of sharing the news."),
       fp("2. Ask the news in two ways and answer “nothing”.")],
      [fp("Answer."),
       pAns("E.A.: radio, TV, phone, Facebook, email, letters; What’s new? What’s up? — Nothing much!",
        ["Nothing much!"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58");
}
function lessonS55() {
  return [
    p([run("LESSON OF THE DAY — SESSION 58", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MEANS OF SHARING THE NEWS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_media.png", 420, 768 / 1376),
    box("THE MEANS", [
      vocab("the radio / the TV", "dhe réidiôou / dhe tivi"),
      vocab("the phone", "dhe fôoune"),
      vocab("Facebook / the email", "féissbouk / dhe iméil"),
      vocab("the letters / the newspaper", "dhe lèteurz / dhe niouzpéipeur"),
    ]),
    p("", { after: 60 }),
    box("ASKING AND TELLING THE NEWS", [
      bullet([run("Questions: ", { bold: true }), run("What’s new? What’s up? What’s the news? What did you hear on the radio? What did you read in the newspaper?", { bold: true, color: C.BLUE })]),
      bullet([run("Nothing to tell: ", { bold: true }), run("Nothing special. Nothing much. Same as always.", { bold: true, color: C.BLUE })]),
      bullet([run("Sad news: ", { bold: true }), run("I’m sorry to hear that. Oh dear, that’s awful!", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("GOOD, BAD… OR FAKE?", [
      p("News can be good, bad — or FAKE (false!). Before you share a news, check it: who says it? where? when? A good journalist checks twice!", { after: 40 }),
    ]),
  ];
}

// ---------- S56 — Listening: the radio news ----------
function ficheS56() {
  const meta = META("Listening: the radio news",
    "By the end of the lesson, learners will be able to comprehend the gist and the details of a pre-recorded news.",
    "2 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name four means of sharing the news."),
       fp("2. What do you answer to a sad news?")],
      [fp("Answer."),
       fp("E.A.: radio, TV, email, letters; I’m sorry to hear that.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: tonight, Radio Vanilla! The menu: the weather, the town, the sport. Guess: one good news and one bad news?")],
      [fp("Predict.")],
      "Predicting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to the six o’clock news — like real journalists!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening (gist): how many news? Which ones? While-listening (details): 1. What was damaged by the rain? 2. Was anybody hurt? 3. What was opened in town? 4. Who won the cup?")],
      [fp("Listen twice. Answer."),
       fp("E.A.: three news; the old bridge; no; a new library; our football team.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Check your predictions! Then listen again: which verbs tell the past? fell, won… and strange forms: WAS damaged, WERE given — we will study them next time!")],
      [fp("Check. Spot the past verbs."),
       fp("E.A.: fell, won, went; was damaged, was opened, were given.")],
      "Eliciting technique", "Audio (QR code)"),
    stepRow(["5. Synthesis"],
      [fp("A news always answers: WHAT happened? WHERE? WHEN? WHO? — in the past tense. Listen and repeat the first news.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Interview your pair about the news they heard from the mass media this week, then report it orally: “Hery heard on the radio that…”")],
      [fp("Interview. Report orally."),
       pAns("E.A.: Vero read on Facebook that the market will move. (Is it fake? Check!)",
        ["heard on the radio"], { size: SZ.FICHE })],
      "Interview / Individual work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the three news of Radio Vanilla."),
       fp("2. The four questions of a good news?")],
      [fp("Answer."),
       pAns("E.A.: the bridge, the library, the cup; what, where, when, who.",
        ["the library"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(59, TOTAL, meta, rows, "s59");
}
function lessonS56() {
  return [
    p([run("LESSON OF THE DAY — SESSION 59", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE RADIO NEWS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    radioNewsBox(),
    p("", { after: 60 }),
    box("THE FOUR QUESTIONS OF A NEWS", [
      bullet([run("WHAT happened? ", { bold: true }), run("The bridge was damaged.", { italic: true })]),
      bullet([run("WHERE? ", { bold: true }), run("On the east coast.", { italic: true })]),
      bullet([run("WHEN? ", { bold: true }), run("Yesterday.", { italic: true })]),
      bullet([run("WHO? ", { bold: true }), run("The villagers repaired it!", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PAST IS BACK!", [
      p("A news tells what HAPPENED → simple past: the rain fell, the team won, Koto went… And some mysterious forms: was damaged, were given — the passive voice, coming in Session 58!", { after: 40 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u6_radio.png", label: "Radio Vanilla — listen again", url: AUDIO.radio }], COLOR),
  ];
}

// ---------- S57 — Simple past practice ----------
function ficheS57() {
  const meta = META("The simple past: telling what happened",
    "By the end of the lesson, learners will be able to use the simple past (regular and irregular verbs) to tell the news.",
    "3 / 10", "verb cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What did you hear on Radio Vanilla?"),
       fp("2. Find one past verb of the news.")],
      [fp("Answer."),
       fp("E.A.: the bridge, the library, the cup; fell / won / went.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Memory flash (Unit 1!): yesterday, I walked to school… I WENT to the market… Which verb is regular? Which is a rebel?")],
      [fp("Answer."),
       fp("E.A.: walked = regular (-ed); went = irregular!")],
      "Eliciting technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to train the simple past — the tense of the journalists. By the end of this lesson, you will tell yesterday like a pro!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two families in the news: REGULAR: damaged, repaired, opened, welcomed (-ed) / IRREGULAR: fell (fall), won (win), went (go), heard (hear), read (read), gave (give).")],
      [fp("Observe. Classify regular / irregular.")],
      "Using visual-aids", "Verb cards"),
    stepRow(["4. Analysis"],
      [fp("The negative and the question: The team won. → DID the team win? The team DIDN’T win. What happens to the verb after did?")],
      [fp("Observe. Find the rule."),
       fp("E.A.: after did/didn’t, the verb goes back to the base form.")],
      "Eliciting technique", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: + verb-ed / 2nd form; ? Did + subject + base verb; − didn’t + base verb. Substitution drill: I watched TV → he…, we…, they…!")],
      [fp("Listen. Repeat. Substitute. Copy.")], "Substitution drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Yesterday’s news chain: each student adds one past sentence about yesterday: “Yesterday, I helped my mother. — Yesterday, Koto played football…”")],
      [fp("Tell yesterday in the simple past."),
       pAns("E.A.: Yesterday, I fetched water, then I did my homework and I went to bed early.",
        ["Yesterday"], { size: SZ.FICHE })],
      "Chain game", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the past of: open, win, go, hear."),
       fp("2. Make the question: The team won the cup.")],
      [fp("Answer."),
       pAns("E.A.: opened, won, went, heard; Did the team win the cup?",
        ["Did the team win"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(60, TOTAL, meta, rows, "s60");
}
function lessonS57() {
  return [
    p([run("LESSON OF THE DAY — SESSION 60", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE SIMPLE PAST OF THE JOURNALISTS", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE REGULAR VERBS (-ED)", [
      bullet([run("damage → damaged; repair → repaired; open → opened; welcome → welcomed; listen → listened", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE REBELS OF THE NEWS", [
      bullet([run("fall → fell", { bold: true, color: C.RED }), run("   "), run("win → won", { bold: true, color: C.RED }), run("   "), run("go → went", { bold: true, color: C.RED })]),
      bullet([run("hear → heard", { bold: true, color: C.RED }), run("   "), run("read → read!", { bold: true, color: C.RED }), run("   "), run("give → gave", { bold: true, color: C.RED }), run("   "), run("write → wrote", { bold: true, color: C.RED })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("QUESTION AND NEGATIVE: DID IS THE BOSS", [
      bullet([run("+ ", { bold: true }), run("The team won the cup.", { bold: true, color: C.BLUE })]),
      bullet([run("? ", { bold: true }), run("Did the team win the cup? — Yes, it did!", { bold: true, color: C.GREEN })]),
      bullet([run("− ", { bold: true }), run("The team didn’t win last year.", { bold: true, color: C.RED })]),
      bullet([run("After did / didn’t → the verb goes back to the base form!", { bold: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S58 — Passive voice ----------
function ficheS58() {
  const meta = META("The passive voice",
    "By the end of the lesson, learners will be able to draw the use of the passive voice from the news and use it.",
    "4 / 10", "audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the past of: give, read."),
       fp("2. Make the negative: The rain fell.")],
      [fp("Answer."),
       fp("E.A.: gave, read; The rain didn’t fall.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Listen to the news again: “The bridge WAS REPAIRED… One thousand books WERE GIVEN.” Who repaired? Who gave? Sometimes we don’t know — or it is not important!")],
      [fp("Listen. Spot the strange forms."),
       fp("E.A.: was repaired, were given.")],
      "Audio / Eliciting", "Audio (QR code)"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn the voice of the news: the PASSIVE VOICE. By the end of this lesson, you will speak like the radio!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the two sentences: ACTIVE: The villagers repaired the bridge. / PASSIVE: The bridge was repaired (by the villagers). What moved? What appeared?")],
      [fp("Observe. Compare active and passive.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the structure from the passage: WAS/WERE + past participle: was damaged, was opened, were given, were welcomed. When do we choose the passive?")],
      [fp("Find the structure and the use."),
       fp("E.A.: be + past participle; when the actor is unknown or not important.")],
      "Eliciting technique", "The news text"),
    stepRow(["5. Synthesis"],
      [fp("So the passive: subject + WAS/WERE + past participle (+ by…). The news loves it: the event first, the actor after — or absent! Listen and repeat the passive sentences.")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Transformation drill: The water damaged the bridge → The bridge was damaged by the water. An association gave the books → ? The town opened a library → ?")],
      [fp("Transform active → passive."),
       pAns("E.A.: The books were given by an association. A library was opened by the town.",
        ["were given"], { size: SZ.FICHE })],
      "Substitution drill", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the structure of the passive."),
       fp("2. Transform: The villagers repaired the bridge.")],
      [fp("Answer."),
       pAns("E.A.: was/were + past participle; The bridge was repaired by the villagers.",
        ["was repaired"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(61, TOTAL, meta, rows, "s61");
}
function lessonS58() {
  return [
    p([run("LESSON OF THE DAY — SESSION 61", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PASSIVE VOICE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("ACTIVE OR PASSIVE?", [
      bullet([run("ACTIVE — the actor first: ", { bold: true }), run("The villagers repaired the bridge.", { bold: true, color: C.BLUE })]),
      bullet([run("PASSIVE — the event first: ", { bold: true }), run("The bridge was repaired (by the villagers).", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE STRUCTURE: WAS / WERE + PAST PARTICIPLE", [
      bullet([run("The bridge was damaged by the water.", { bold: true, color: C.BLUE })]),
      bullet([run("A new library was opened in town.", { bold: true, color: C.BLUE })]),
      bullet([run("One thousand books were given by an association.", { bold: true, color: C.BLUE })]),
      bullet([run("The players were welcomed like heroes!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("WHEN DO WE USE IT?", [
      p("When the actor is unknown or not important: the news looks at the EVENT. “By…” appears only if the actor matters!", { after: 40 }),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u6_radio.png", label: "Hear the passive in the news", url: AUDIO.radio }], COLOR),
  ];
}

// ---------- S59 — Social media + acronyms ----------
function ficheS59() {
  const meta = META("The social media and the message acronyms",
    "By the end of the lesson, learners will be able to use the social media words and understand common message acronyms.",
    "5 / 10", "message cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Transform: The town opened a library."),
       fp("2. When do we use the passive?")],
      [fp("Answer."),
       fp("E.A.: A library was opened by the town; when the actor is unknown / not important.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Mystery message on the board: “GR8 news! CU 2day. THX!” — can you read this strange English?")],
      [fp("Try to decode!")],
      "Guessing game", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to visit the social media in English — and crack the secret code of the messages!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the social media actions: log in, insert the password, post, text, log out. Put them in order of a real visit!")],
      [fp("Observe. Order the actions."),
       fp("E.A.: log in → insert the password → post / text → log out.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Decode the acronyms together: GR8 = great; CU = see you; 2DAY = today; THX = thanks; BTW = by the way; LOL = laughing out loud; ASAP = as soon as possible; B4 = before.")],
      [fp("Decode the acronyms."),
       fp("E.A.: GR8 news, CU 2day, THX = Great news! See you today. Thanks!")],
      "Eliciting technique", "Message cards"),
    stepRow(["5. Synthesis"],
      [fp("Acronyms = fast fingers for messages — but NEVER in your English test or in a letter! One language for friends, one language for school. And always log out on a shared phone!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Decode race in pairs: “BTW, the match is 2DAY. CU B4 noon! LOL” — first pair with the full English sentence wins!")],
      [fp("Decode into full English."),
       pAns("E.A.: By the way, the match is today. See you before noon!",
        ["By the way"], { size: SZ.FICHE })],
      "Competition game", "Message cards"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Put the social media actions in order."),
       fp("2. Decode: THX! CU ASAP.")],
      [fp("Answer."),
       pAns("E.A.: log in, password, post/text, log out; Thanks! See you as soon as possible.",
        ["log out"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(62, TOTAL, meta, rows, "s62");
}
function lessonS59() {
  return [
    p([run("LESSON OF THE DAY — SESSION 62", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("SOCIAL MEDIA AND THE SECRET CODE", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE SOCIAL MEDIA ACTIONS (in order!)", [
      vocab("to log in", "tou logue inne", "I enter"),
      vocab("to insert the password", "tou innseurte dhe passoueurde", "the secret key!"),
      vocab("to post / to text", "tou pôouste / tou tèkste", "I publish / I send a message"),
      vocab("to log out", "tou logue aoute", "I leave — always, on a shared phone!"),
    ]),
    p("", { after: 60 }),
    box("THE MESSAGE ACRONYMS", [
      bullet([run("GR8", { bold: true, color: C.BLUE }), run(" = great   "), run("CU", { bold: true, color: C.BLUE }), run(" = see you   "), run("2DAY", { bold: true, color: C.BLUE }), run(" = today   "), run("B4", { bold: true, color: C.BLUE }), run(" = before")]),
      bullet([run("THX", { bold: true, color: C.BLUE }), run(" = thanks   "), run("BTW", { bold: true, color: C.BLUE }), run(" = by the way   "), run("LOL", { bold: true, color: C.BLUE }), run(" = laughing out loud   "), run("ASAP", { bold: true, color: C.BLUE }), run(" = as soon as possible")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GOLDEN RULE", [
      p("Acronyms are for FRIENDLY messages only. In a letter, an email to an adult, or a test: full English words! And never share your password.", { after: 40 }),
    ]),
  ];
}

// ---------- S60 — Phone calls: listening ----------
function ficheS60() {
  const meta = META("Listening: the phone call",
    "By the end of the lesson, learners will be able to comprehend a phone conversation and use the telephoning expressions.",
    "6 / 10", "audio (QR code), pictures of phone calls");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Decode: GR8! CU 2day!"),
       fp("2. What must you do on a shared phone?")],
      [fp("Answer."),
       fp("E.A.: Great! See you today!; log out!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: describe the picture / the stick figures showing phone calls in groups: who calls? who answers? happy or worried?")],
      [fp("Describe the picture in groups.")],
      "Using visual-aids / Group work", "Pictures"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to a real phone call. By the end of this lesson, you will telephone in English with confidence!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: 1. Who does Koto want to speak to? 2. Where is Hery? 3. What is the message? Then listen again and UNDERLINE the telephoning expressions.")],
      [fp("Listen. Answer. Underline the expressions."),
       fp("E.A.: Hery; at the football field; the English club meets tomorrow at nine.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Collect the phone treasure: Hello? It’s Koto. May I speak to…, please? I’m sorry, he is out. Can you give him a message? — And more: Is… there? I would like to talk to… …is speaking. Can you put me through…, please?")],
      [fp("Collect the expressions."),
       fp("E.A.: the telephoning expressions listed.")],
      "Eliciting technique", "The dialogue"),
    stepRow(["5. Synthesis"],
      [fp("The phone verbs: to call / to give somebody a call, to pick up the phone, to hang up, to text / send / receive a message. Listen and repeat the dialogue!")],
      [fp("Listen. Repeat. Copy.")], "Repetition drill", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role play the conversation in pairs — then REPLACE some expressions: new caller, new message, new answer!")],
      [fp("Role play. Replace expressions."),
       pAns("E.A.: Hello! It’s Vero. Is Soa there? — I’m sorry, she is out…",
        ["Is Soa there?"], { size: SZ.FICHE })],
      "Role-play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Ask to speak to somebody in two polite ways."),
       fp("2. The person is absent: what does the answerer say?")],
      [fp("Answer."),
       pAns("E.A.: May I speak to Hery, please? I would like to talk to Hery; I’m sorry, he is out.",
        ["he is out"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(63, TOTAL, meta, rows, "s63");
}
function lessonS60() {
  return [
    p([run("LESSON OF THE DAY — SESSION 63", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE PHONE CALL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    phoneDialogueBox(),
    p("", { after: 60 }),
    box("THE TELEPHONING EXPRESSIONS", [
      bullet([run("Starting: ", { bold: true }), run("Hello? — Hello! It’s Koto. / Koto is speaking.", { bold: true, color: C.BLUE })]),
      bullet([run("Asking: ", { bold: true }), run("May / Can I speak to…, please? Is… there? I would like to talk to… Can you put me through…, please?", { bold: true, color: C.BLUE })]),
      bullet([run("Absent: ", { bold: true }), run("I’m sorry, he / she is out.", { bold: true, color: C.RED })]),
      bullet([run("Message: ", { bold: true }), run("Can you give him / her a message, please?", { bold: true, color: C.GREEN })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE PHONE VERBS", [
      vocab("to call / to give somebody a call", "tou kôl"),
      vocab("to pick up the phone", "tou pik eup dhe fôoune", "I answer"),
      vocab("to hang up the phone", "tou hanng eup", "I finish the call"),
      vocab("to text / send / receive a message", "tou tèkste / sènnde / rissive"),
    ]),
    p("", { after: 80 }),
    audioBox([{ qr: "qr_t8_u6_phone.png", label: "A phone call — listen again", url: AUDIO.phone }], COLOR),
  ];
}

// ---------- S61 — Phone calls: from text to call ----------
function ficheS61() {
  const meta = META("From the text message to the phone call",
    "By the end of the lesson, learners will be able to convert text messages into phone conversations and share news in different ways.",
    "7 / 10", "message cards");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give two telephoning expressions."),
       fp("2. Mime: pick up the phone… hang up!")],
      [fp("Answer. Mime."),
       fp("E.A.: May I speak to…? I’m sorry, he is out; (mimes!)")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("On the board, a text message: “BTW match 2day 4pm. CU B4! THX” — today, this message becomes a PHONE CALL!")],
      [fp("Read the message.")],
      "Whole-class work", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to convert text messages into phone conversations — same news, different music!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the conversion: the acronyms become full words, we add the phone frame: Hello! It’s… May I speak to…? + the news + Goodbye!")],
      [fp("Observe the conversion method.")],
      "Using visual-aids", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("In pairs: pick a message card and convert it into a phone conversation: who calls? who answers? what is the news?")],
      [fp("Convert the message into a dialogue."),
       fp("E.A.: Hello! It’s Hery. The match is today at 4. See you before!")],
      "Pair work", "Message cards"),
    stepRow(["5. Synthesis"],
      [fp("Same news, three ways: a text (fast, acronyms), a call (voice, polite frame), face to face! Choose the right way for the right person.")],
      [fp("Compare the three ways.")],
      "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Act out your phone conversations — back to back, like a real call! Then say the day’s news using different technologies and manners: by text, by call, by radio voice!")],
      [fp("Act out. Say the news in different ways."),
       pAns("E.A.: the same news told as a text, a call and a radio flash!",
        ["different"], { size: SZ.FICHE })],
      "Role-play", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Convert: “CU 2day ASAP!” into one phone sentence."),
       fp("2. Which way do you choose to tell a news to your grandmother? Why?")],
      [fp("Answer."),
       pAns("E.A.: See you today, as soon as possible!; a call — she loves voices, not acronyms!",
        ["See you today"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(64, TOTAL, meta, rows, "s64");
}
function lessonS61() {
  return [
    p([run("LESSON OF THE DAY — SESSION 64", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("FROM THE TEXT TO THE CALL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u6_phone.png", 420, 768 / 1376),
    box("THE CONVERSION METHOD", [
      bullet([run("1. Decode the acronyms: ", { bold: true }), run("BTW → by the way; 2day → today; CU → see you", { bold: true, color: C.BLUE })]),
      bullet([run("2. Add the phone frame: ", { bold: true }), run("Hello! It’s… — May I speak to…? — … — Goodbye!", { bold: true, color: C.BLUE })]),
      bullet([run("3. Say the news with full sentences and a kind voice!", { bold: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("EXAMPLE", [
      bullet([run("The text: ", { bold: true }), run("“BTW match 2day 4pm. CU B4! THX”", { italic: true })]),
      bullet([run("The call: ", { bold: true }), run("“Hello! It’s Hery. By the way, the match is today at four. See you before! Thanks, goodbye!”", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("ALTRUISM CORNER", [
      p("Sharing the news is a gift: call your grandmother, text your cousin, tell your neighbour — good news grows when you share it!", { after: 40 }),
    ]),
  ];
}

// ---------- S62 — Reading: the newspaper ----------
function ficheS62() {
  const meta = META("Reading: the newspaper",
    "By the end of the lesson, learners will be able to name the elements of a newspaper and infer information from a news article.",
    "8 / 10", "newspapers, the article");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Pre-reading: tell to the class the different ways of sharing news.")],
      [fp("Tell the ways."),
       fp("E.A.: radio, TV, phone, text, Facebook, email, letters, newspaper.")],
      "Whole-class work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("A newspaper travels the class: touch it, open it — what do you see first?")],
      [fp("Observe the newspaper."),
       fp("E.A.: big titles! photos!")],
      "Using realia", "Newspapers"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read the newspaper like detectives: its parts, its article, its secrets!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: skim the newspaper and name its different elements: the FRONT PAGE (page one!), the HEADLINES (the big titles), the CONTENTS (what is inside, where).")],
      [fp("Skim. Name the elements."),
       fp("E.A.: front page, headlines, contents, articles, photos.")],
      "Skimming", "Newspapers"),
    stepRow(["4. Analysis"],
      [fp("Read the article « A new library for the town » and answer: 1. What is the headline? 2. What happened? 3. When? 4. Find one passive sentence!")],
      [fp("Read. Answer."),
       fp("E.A.: A new library…; a library was opened; last week; One thousand books were given…")],
      "Question-answer", "The article"),
    stepRow(["5. Synthesis"],
      [fp("A news article = a HEADLINE (short and strong) + the four questions (what, where, when, who) + often the passive voice!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Group competition: each group reads the article aloud correctly — clear voice, good rhythm, strong headline! The best news readers win!")],
      [fp("Compete in reading the article."),
       pAns("E.A.: fluent, lively reading — like real radio journalists!",
        ["fluent"], { size: SZ.FICHE })],
      "Competition game", "The article"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name the three parts of the newspaper."),
       fp("2. What makes a good headline?")],
      [fp("Answer."),
       pAns("E.A.: front page, headlines, contents; short and strong!",
        ["headlines"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(65, TOTAL, meta, rows, "s65");
}
function lessonS62() {
  return [
    p([run("LESSON OF THE DAY — SESSION 65", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE NEWSPAPER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE PARTS OF THE NEWSPAPER", [
      vocab("the front page", "dhe freunnte péidj", "page one — the shop window!"),
      vocab("the headlines", "dhe hèdlaïnz", "the big titles"),
      vocab("the contents", "dhe konntènnts", "what is inside, and where"),
    ]),
    p("", { after: 60 }),
    box("THE ARTICLE (our model)", [
      p([run("A NEW LIBRARY FOR THE TOWN", { bold: true, size: SZ.SUB, color: COLOR })], { center: true, after: 60 }),
      p("A new library was opened in town last week. One thousand books were given by an association. The mayor cut the ribbon, and the children read their first comics on the same day. “If you love books, you will love this place!”, said the librarian.", { after: 40 }),
    ]),
    p("", { after: 60 }),
    box("DETECTIVE CHECK", [
      bullet([run("Headline? ", { bold: true }), run("A new library for the town — short and strong!", { italic: true })]),
      bullet([run("What / where / when? ", { bold: true }), run("a library, in town, last week", { italic: true })]),
      bullet([run("Passive sentences? ", { bold: true }), run("was opened, were given!", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S63 — Writing: letter / email format ----------
function ficheS63() {
  const meta = META("The informal letter and the email",
    "By the end of the lesson, learners will be able to draw the format of an informal letter and of an email.",
    "9 / 10", "model letter and email");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the three parts of the newspaper."),
       fp("2. Find the passive: “was opened”. Active form?")],
      [fp("Answer."),
       fp("E.A.: front page, headlines, contents; They opened a library.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing: read the model letter of Koto to Vero. What is the news inside?")],
      [fp("Read the letter."),
       fp("E.A.: the new library!")],
      "Reading", "Model letter"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to X-ray the LETTER and the EMAIL: their skeletons! By the end of this lesson, you will know where everything goes.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the letter format from the model: the place and date (top right), Dear + name, the body (the news!), the closing (Your friend / Love), the signature.")],
      [fp("Draw the letter format."),
       fp("E.A.: the five parts found and named.")],
      "Eliciting technique", "Model letter"),
    stepRow(["4. Analysis"],
      [fp("Now the email: To: (the address), Subject: (like a headline!), Hi/Dear…, the body, the closing + name. Compare: what is the same? what is different?")],
      [fp("Draw the email format. Compare."),
       fp("E.A.: same body and closing; email has To and Subject, no place/date to write.")],
      "Eliciting technique", "Model email"),
    stepRow(["5. Synthesis"],
      [fp("Letter or email: the NEWS in the middle, politeness around! The subject of an email = a mini headline. Copy the two skeletons.")],
      [fp("Listen. Copy the formats.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Brainstorm in pairs stories based on newspapers’ headlines: “Cyclone on the coast!”, “Our team won!”, “A new school was built!” — choose YOUR event for the next session!")],
      [fp("Brainstorm from the headlines. Choose an event."),
       pAns("E.A.: chosen headline + three ideas for the story.",
        ["headline"], { size: SZ.FICHE })],
      "Brainstorming / Pair work", "Headlines"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Give the five parts of the informal letter."),
       fp("2. What is the Subject of an email like?")],
      [fp("Answer."),
       pAns("E.A.: place and date, Dear…, body, closing, signature; like a mini headline!",
        ["Dear"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(66, TOTAL, meta, rows, "s66");
}
function lessonS63() {
  return [
    p([run("LESSON OF THE DAY — SESSION 66", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE LETTER AND THE EMAIL", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    letterBox(),
    p("", { after: 60 }),
    box("THE LETTER SKELETON", [
      bullet([run("1. Place and date — top right: ", { bold: true }), run("Antsirabe, 12th June", { italic: true })]),
      bullet([run("2. The greeting: ", { bold: true }), run("Dear Vero,", { italic: true })]),
      bullet([run("3. The body: ", { bold: true }), run("the news! (simple past + passive welcome!)", { italic: true })]),
      bullet([run("4. The closing: ", { bold: true }), run("Your friend, / Love,", { italic: true })]),
      bullet([run("5. The signature: ", { bold: true }), run("Koto", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE EMAIL SKELETON", [
      bullet([run("To: ", { bold: true }), run("vero@…  ", { italic: true }), run("Subject: ", { bold: true }), run("Great news from Antsirabe! (a mini headline!)", { italic: true })]),
      bullet([run("Hi Vero, + the body + Your friend, Koto — same heart as the letter!", { italic: true })], { after: 20 }),
    ]),
  ];
}

// ---------- S64 — Writing: narrate the event ----------
function ficheS64() {
  const meta = META("Writing: narrating an event by letter or email",
    "By the end of the lesson, learners will be able to narrate an event to a friend in a letter or an email.",
    "10 / 10", "notebooks");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Give the five parts of the letter."),
       fp("2. Which headline did you choose?")],
      [fp("Answer."),
       fp("E.A.: place/date, Dear, body, closing, signature; Our team won!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Remember your headline and your three ideas — today they become a real letter or email!")],
      [fp("Get ready to write.")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to WRITE the event in a letter or an email — and send our news like journalists of friendship!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Observe the writing recipe: the format (5 parts!), the simple past for the story, one passive for the style, one question for your friend at the end!")],
      [fp("Observe the recipe.")],
      "Whole-class work", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("While-writing: write the event in a letter OR an email. Real or from the headline — but alive: what, where, when, who!")],
      [fp("Write the letter / email."),
       fp("E.A.: complete letter or email with the format.")],
      "Individual work", "Notebooks"),
    stepRow(["5. Synthesis"],
      [fp("Exchange your productions with the other groups and let them correct the mistakes: format? past tenses? one passive?")],
      [fp("Peer correction.")],
      "Peer correction", "----"),
    stepRow(["6. Practice"],
      [fp("Post-writing: share your opinions about the events: which news is the best? the most surprising? — I think that…!")],
      [fp("Share opinions."),
       pAns("E.A.: I think the library news is the best, because books are given to everybody!",
        ["I think"], { size: SZ.FICHE })],
      "Group work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Read your letter / email aloud."),
       fp("2. The class checks: the five parts, the past, one passive!")],
      [fp("Read. Check."),
       pAns("E.A.: complete letter with correct format and tenses.",
        ["complete letter"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67");
}
function lessonS64() {
  return [
    p([run("LESSON OF THE DAY — SESSION 67", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("WRITING: MY NEWS LETTER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE WRITING RECIPE", [
      bullet([run("1. The format: ", { bold: true }), run("five parts for the letter — To / Subject for the email", { bold: true, color: C.BLUE })]),
      bullet([run("2. The story in the simple past: ", { bold: true }), run("Our team won the cup on Sunday!", { bold: true, color: C.BLUE })]),
      bullet([run("3. One passive for the style: ", { bold: true }), run("The players were welcomed like heroes!", { bold: true, color: C.BLUE })]),
      bullet([run("4. One question for your friend: ", { bold: true }), run("And you, what’s new?", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("MY MODEL EMAIL", [
      bullet([run("To: vero@mail.com — Subject: We won the cup!", { italic: true })]),
      bullet([run("Hi Vero! Great news: our team won the regional cup on Sunday! The match was played in town, and the players were welcomed like heroes. I shouted so much that I lost my voice — LOL… sorry: laughing out loud! And you, what’s new? Your friend, Koto", { italic: true })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("SELF-CONFIDENCE CORNER", [
      p("You wrote a real letter and a real email in English. Your news crossed the classroom — one day it will cross the ocean!", { after: 40 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("LESSON — UNIT 6", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MEANS OF COMMUNICATION"),
    sub("1. Asking and telling the news"),
    bullet([run("What’s new? What’s up? What’s the news? — Nothing special, nothing much, same as always.", { bold: true, color: C.BLUE })]),
    bullet([run("Sad news: I’m sorry to hear that. Oh dear, that’s awful! — And check the FAKE news!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The means"),
    bullet([run("the radio, the TV, the phone, Facebook, the email, the letters, the newspaper", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The simple past of the journalists"),
    bullet([run("regular: repaired, opened — rebels: fell, won, went, heard, gave, wrote — Did…? / didn’t + base verb", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The passive voice"),
    bullet([run("WAS / WERE + past participle: The bridge was repaired. One thousand books were given.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The phone"),
    bullet([run("May I speak to…, please? — I’m sorry, he is out. — Can you give him a message? — pick up / hang up", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. Social media, newspaper, letter and email"),
    bullet([run("log in → password → post → log out — GR8, CU, THX, BTW, LOL (friends only!)", { bold: true, color: C.BLUE })]),
    bullet([run("newspaper: front page, headlines, contents — letter: place/date, Dear…, body, closing, signature — email: To + Subject", { bold: true, color: C.BLUE })], { after: 140 }),
    audioBox([
      { qr: "qr_t8_u6_radio.png", label: "Radio Vanilla — the news", url: AUDIO.radio },
      { qr: "qr_t8_u6_phone.png", label: "A phone call", url: AUDIO.phone },
    ], COLOR),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Give the simple past: 1. open  2. win  3. hear  4. write.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Turn into the passive: 1. The water damaged the bridge.  2. An association gave the books.  3. The town opened a library.  4. The fans welcomed the players.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Complete the phone call: “…? It’s Vero. … I speak to Soa, please?” — “I’m sorry, she is …. Can I take a …?”")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Decode into full English: “GR8 news! BTW the match is 2DAY. CU B4 noon. THX!”")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write the five parts of an informal letter telling one news of your village (two lines of body are enough!).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: opened — won — heard — wrote (1 point each).", ["opened"]),
    pAns("Exercise 2: The bridge was damaged by the water. The books were given by an association. A library was opened by the town. The players were welcomed by the fans. (1 point each).", ["was damaged"]),
    pAns("Exercise 3: Hello — May/Can — out — message (1 point each).", ["Hello"]),
    pAns("Exercise 4: Great news! By the way, the match is today. See you before noon. Thanks! (4 points).", ["Great news!"]),
    pAns("Exercise 5: place/date, Dear…, body with the news, closing, signature (4 points).", ["place/date"]),
  ];
}

// ---------- S65 — révision ----------
function revision() {
  return [
    B.bookmarkTitle("s68", "SESSION 68 / 81", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 6: MEANS OF COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Ask the news in three ways."),
    pAns("E.A.: What’s new? What’s up? What’s the news?", ["What’s up?"]),
    p("2. Answer “nothing” in two ways, and react to a sad news."),
    pAns("E.A.: Nothing special! Same as always!; I’m sorry to hear that / Oh dear, that’s awful!", ["Nothing special!"]),
    p("3. Name seven means of sharing the news."),
    pAns("E.A.: radio, TV, phone, Facebook, email, letters, newspaper.", ["newspaper"]),
    p("4. Give the past of: fall, win, give, read — and one regular verb."),
    pAns("E.A.: fell, won, gave, read; repaired.", ["fell"]),
    p("5. Give the structure of the passive and one example from the news."),
    pAns("E.A.: was/were + past participle; The bridge was repaired.", ["was/were"]),
    p("6. When do we choose the passive?"),
    pAns("E.A.: when the actor is unknown or not important.", ["unknown"]),
    p("7. Give four telephoning expressions."),
    pAns("E.A.: May I speak to…? Is… there? I’m sorry, he is out. Can you give him a message?", ["May I speak"]),
    p("8. Put the social media actions in order and decode: THX, CU ASAP."),
    pAns("E.A.: log in, password, post/text, log out; Thanks, see you as soon as possible.", ["log in"]),
    p("9. Name the three parts of the newspaper and the five parts of the letter."),
    pAns("E.A.: front page, headlines, contents; place/date, Dear…, body, closing, signature.", ["front page"]),
    p("10. Tell one news of the week — in the simple past, with one passive!"),
    pAns("E.A.: A new well was built in our village last month!", ["was built"]),
  ];
}

// ---------- S66 — test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s69", "SESSION 69 / 81", { bold: true, size: 28, after: 60 }),
    p([run("T8 TEST PAPER — UNIT 6: MEANS OF COMMUNICATION", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: act a phone call in pairs — greet, ask to speak to somebody, leave a message, say goodbye.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Simple past: 1. Yesterday, the rain … (fall) all day.  2. Our team … (win) the match.  3. I … (hear) the news on the radio.  4. … you … (watch) TV last night?")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Passive voice: 1. A new school … … (open) last year.  2. The books … … (give) by an association.  3. The bridge … … (repair) by the villagers.  4. The players … … (welcome) like heroes.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Match: 1. front page  2. headline  3. log in  4. hang up  —  a. the big title  b. finish the call  c. page one  d. enter the social media.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a short letter OR email to a friend narrating one event (real or invented): respect the format, use the simple past and one passive sentence.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: complete polite phone call (4 points).", ["phone call"]),
    pAns("Exercise 2: fell — won — heard — Did… watch (1 point each).", ["fell"]),
    pAns("Exercise 3: was opened — were given — was repaired — were welcomed (1 point each).", ["was opened"]),
    pAns("Exercise 4: 1-c  2-a  3-d  4-b (1 point each).", ["1-c"]),
    pAns("Exercise 5: correct format + simple past + one passive (4 points).", ["format"]),
  ];
}

module.exports = function unit6() {
  return [
    ...opening(), pageBreak(),
    ...ficheS55(), pageBreak(), ...lessonS55(), pageBreak(),
    ...ficheS56(), pageBreak(), ...lessonS56(), pageBreak(),
    ...ficheS57(), pageBreak(), ...lessonS57(), pageBreak(),
    ...ficheS58(), pageBreak(), ...lessonS58(), pageBreak(),
    ...ficheS59(), pageBreak(), ...lessonS59(), pageBreak(),
    ...ficheS60(), pageBreak(), ...lessonS60(), pageBreak(),
    ...ficheS61(), pageBreak(), ...lessonS61(), pageBreak(),
    ...ficheS62(), pageBreak(), ...lessonS62(), pageBreak(),
    ...ficheS63(), pageBreak(), ...lessonS63(), pageBreak(),
    ...ficheS64(), pageBreak(), ...lessonS64(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 6", COLOR, [
      "I can ask and tell the news: What’s new? — Nothing special!",
      "I can name the means of communication — and spot the fake news!",
      "I can tell what happened with the simple past.",
      "I can use the passive voice: the bridge was repaired!",
      "I can make a phone call: May I speak to…, please?",
      "I can use the social media words and decode the acronyms.",
      "I can read a newspaper: front page, headlines, contents.",
      "I can write a letter and an email to narrate an event.",
    ], "NEXT STOP → UNIT 7: MY CITY, MY COUNTRY!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
