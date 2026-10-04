// T6 — UNIT 7 — MY IMMEDIATE SURROUNDINGS (6 séances + révision + test) — Sessions 67 à 74 / 74
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType, VerticalAlign } = require("docx");

const COLOR = "1B5E20"; // vert foncé
const SHADE = "E4F0E4";
const TOTAL = 74;
const AUDIO = {
  school: "https://drive.google.com/uc?export=download&id=1IHx3IfXt81FVW6rcn0-KYZ0c9Bf0hMVA",
  house: "https://drive.google.com/uc?export=download&id=15aNTgpJ5oVg-YziSxA8DuWdZta46NY48",
  housetour: "https://drive.google.com/uc?export=download&id=1dFzY6feGzObPqZC4LsRpBnoqGCy4M-O7",
};
const bullet = (runs, o = {}) => pr(
  [run("\u2022  ", { bold: true, color: COLOR, size: SZ.BODY }), ...runs],
  { after: o.after != null ? o.after : 50 });

const META = (title, slo, session, materials) => ({
  theme: "UNIT 7 — MY IMMEDIATE SURROUNDINGS", title, slo,
  values: "autonomy, self-confidence", session, materials,
});

const SCHOOL = [
  ["the classroom", "ze klâsroume"], ["the library", "ze laïbreri"], ["the cafeteria", "ze kafétiria"],
  ["the school yard", "ze skoul iârd"], ["the office", "zi ofiss"], ["the toilets", "ze toïlets"],
  ["the soccer field", "ze sokeur filde"], ["the playground", "ze pléigraounde"], ["the gym", "ze djime"],
];
const FURNITURE = [
  ["a wardrobe", "e ouârdrôoub"], ["a mosquito net", "e moskitô nète"], ["a nightstand", "e naïtstannde"],
  ["a blanket", "e blannkite"], ["a stool", "e stoule"], ["a TV set", "e tivi sète"],
  ["a light", "e laïte"], ["a fork", "e fôrk"], ["a knife", "e naïf"],
  ["a bowl", "e bôoul"], ["an electric stove", "ane ilèktrik stôouv"], ["a shower", "e chaoueur"],
  ["a mirror", "e mireur"], ["a tap", "e tape"], ["a basin", "e béissine"],
];
function grid(items, perRow, size = 26) {
  const rows = [];
  for (let i = 0; i < items.length; i += perRow) {
    const chunk = items.slice(i, i + perRow);
    rows.push(new TableRow({ children: chunk.map(([w, pn]) =>
      cell([p([run(w, { bold: true, color: C.BLUE, size })], { center: true, after: 10 }),
            p([run(pn ? `[${pn}]` : " ", { italic: true, color: C.GRAY, size: 20 })], { center: true, after: 20 })],
        { w: Math.floor(10400 / perRow), vAlign: VerticalAlign.CENTER }),
    ).concat(Array.from({ length: perRow - chunk.length }, () =>
      cell([p("")], { w: Math.floor(10400 / perRow) }))) }));
  }
  return new Table({ width: { size: 10400, type: WidthType.DXA }, rows });
}
function tomDialogueBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("“TOM’S SCHOOL” (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("Lily: Hi, Tom! Can you tell me about your school?"),
        L("Tom: Sure! My school is big. We have many classrooms and a large playground."),
        L("Lily: Cool! What’s your schedule like?"),
        L("Tom: I start school at 8 a.m. We have different subjects, like math, English, and science. Each class is about 45 minutes."),
        L("Lily: Do you have a library?"),
        L("Tom: Yes, we do! The library is huge, with many books. I like to study there sometimes."),
        L("Lily: What about lunch?"),
        L("Tom: We have lunch in the cafeteria. They serve pizza, sandwiches, and salads. It’s always busy with students."),
        L("Lily: And do you have a gym?"),
        L("Tom: Yes, we have a big gym for sports like basketball and volleyball. We also have a playground for recess."),
        L("Lily: It sounds like a fun school!"),
      ])] }),
    ],
  });
}
function bedroomBox() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 30 });
  return new Table({
    width: { size: 10400, type: WidthType.DXA },
    rows: [
      new TableRow({ children: [cell(
        [p([run("“IN THIS HOUSE…” (from the syllabus)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
        { shade: SHADE })] }),
      new TableRow({ children: [cell([
        L("In this house, there are many rooms with different furniture and appliances."),
        L("In the bedroom, you can find a wardrobe to store clothes, a nightstand next to the bed, and a mosquito net hanging above to keep insects away at night."),
        L("There is also a soft blanket on the bed to keep warm."),
      ])] }),
    ],
  });
}

// ---------- ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 7 — MY IMMEDIATE SURROUNDINGS", COLOR, "unit7"),
    p("", { after: 100 }),
    p([run("Welcome to my school, welcome to my house!", { bold: true, color: COLOR, size: 40 })], { center: true, after: 120 }),
    img("u7_school.png", 440, 768 / 1408),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the school buildings: classroom, library, cafeteria, school yard…;"),
    p("• use there is / there are to describe a place;"),
    p("• name the house furniture: wardrobe, mosquito net, nightstand…;"),
    p("• describe my school and my house;"),
    p("• compare Malagasy schools with schools abroad;"),
    p("• read and write about my favourite place.", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("autonomy, self-confidence.")], { after: 160 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [
        new TableRow({ children: [cell(
          [p([run("DO YOU REMEMBER? (T5 and this year)", { bold: true, color: COLOR, size: SZ.BODY })], { center: true, after: 40 })],
          { shade: SHADE })] }),
        new TableRow({ children: [cell([
          p("In T5 we visited the rooms of the house and the classroom. This year we know this/that (Unit 5)!"),
          p("Now: the WHOLE school, more furniture — and the magic words THERE IS / THERE ARE!", { after: 40 }),
        ])] }),
      ],
    }),
    p("", { after: 100 }),
    audioBox([{ qr: "qr_t6_u7_school.png", label: "Tom’s school — listen", url: AUDIO.school }], COLOR),
  ];
}

// ---------- S67 — School buildings ----------
function ficheS67() {
  const meta = META("The school buildings",
    "By the end of the lesson, learners will be able to name the school buildings: classroom, library, cafeteria, school yard, office, toilets, soccer field.",
    "1 / 6", "the school picture, a walk in the school if possible");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("(Unit 5.) Answer these questions:"),
       fp("1. Name three classroom objects with “this is” or “that is” (point!)."),
       fp("2. This or that: the door (far)? your pen (near)?"),
       fp("3. Spell “school”.")],
      [fp("Point. Answer. Spell."),
       fp("E.A.: This is my pen, that is the blackboard…; that; this; S-C-H-O-O-L.")],
      "Eliciting", "Classroom objects"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at the big school picture! Which places do you recognise? Where are the children playing soccer?")],
      [fp("Observe. Point. Guess.")], "Using pictures", "School picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to visit the whole school — in English! By the end of this lesson, you will name all its buildings.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen and point on the picture: the classroom, the library (the books!), the cafeteria (the food!), the school yard, the office, the toilets, the soccer field, the playground.")],
      [fp("Listen. Point on the picture.")],
      "Using pictures", "School picture"),
    stepRow(["4. Analysis"],
      [fp("Repetition drill: each word — the class, one row, one pupil. Careful: library [laïbreri]!"),
       fp("Match the place with its action: we read in the …, we eat in the …, we play in the …!")],
      [fp("Repeat. Match."),
       fp("E.A.: library; cafeteria; school yard / playground / soccer field.")],
      "Repetition drill / Matching", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, a school is not only the classroom: library, cafeteria, yard, office… Every place has its English name!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Guide game: in pairs, one is a new pupil, the other is the guide: “This is the library. That is the office.” (with this/that!)"),
       fp("If possible: a quick real walk in OUR school, naming the places!")],
      [fp("Guide. Name the places."),
       pAns("E.A.: This is our classroom. That is the school yard!",
        ["That is the school yard!"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name six school places."),
       fp("2. Where do we read? Where do we eat?"),
       fp("3. Point and say: “That is the …”.")],
      [fp("Name. Answer. Point."),
       pAns("E.A.: classroom, library, cafeteria…; in the library; in the cafeteria; That is the office.",
        ["in the library"], { size: SZ.FICHE })],
      "Individual work", "School picture"),
  ];
  return fiche(67, TOTAL, meta, rows, "s67");
}

// ---------- S68 — Listening Tom ----------
function ficheS68() {
  const meta = META("Listening: “Tom’s school”",
    "By the end of the lesson, learners will be able to get the gist and detailed information from a dialogue describing a school, and act it with the right intonation.",
    "2 / 6", "audio (QR code), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name the school buildings."),
       fp("2. Where do we play soccer?"),
       fp("3. Spell “library”.")],
      [fp("Answer. Spell."),
       fp("E.A.: classroom, library…; on the soccer field; L-I-B-R-A-R-Y.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Today we visit the school of Tom, a boy from an Anglophone country. Predict: what will his school have?")],
      [fp("Predict.")], "Eliciting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to Lily and Tom. By the end of this lesson, you will know Tom’s school by heart — and act the dialogue!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-listening: listen to the dialogue twice."),
       fp("The gist: what are they talking about? The details: Is Tom’s school big or small? What time does he start? How long is each class? What do they serve in the cafeteria? What sports in the gym?")],
      [fp("Listen. Answer the gist and detail questions."),
       fp("E.A.: Tom’s school; big; at 8 a.m.; about 45 minutes; pizza, sandwiches and salads; basketball and volleyball.")],
      "Audio / Question-answer", "Audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Repeat the dialogue line by line — pay attention to the pronunciation and the INTONATION (the questions go up!)."),
       fp("Collect the school words of the dialogue: classrooms, playground, library, cafeteria, gym.")],
      [fp("Repeat with the right intonation. Collect the words.")],
      "Repetition drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, Tom’s school has many places — some like ours, some different (a gym! pizza!). Tomorrow we compare!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Act the dialogue in pairs (Lily and Tom), with gestures and the right intonation — the best pair plays for the class!")],
      [fp("Act the dialogue."),
       pAns("E.A.: the dialogue is acted with correct pronunciation and intonation.",
        ["intonation"], { size: SZ.FICHE })],
      "Role play / In pairs", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the dialogue about?"),
       fp("2. Three detail questions (schedule? library? lunch?)."),
       fp("3. Say two lines of the dialogue by heart.")],
      [fp("Answer. Say."),
       pAns("E.A.: Tom’s school; 8 a.m., huge with many books, in the cafeteria; the lines are correct.",
        ["8 a.m."], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(68, TOTAL, meta, rows, "s68");
}

// ---------- S69 — There is / are + compare ----------
function ficheS69() {
  const meta = META("There is, there are — my school and Tom’s school",
    "By the end of the lesson, learners will be able to use there is/there are to describe their school and compare Malagasy schools with schools abroad.",
    "3 / 6", "the two school pictures (from the syllabus), blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. What does Tom’s school have?"),
       fp("2. Act two lines of the dialogue."),
       fp("3. Name four school places.")],
      [fp("Answer. Act."),
       fp("E.A.: classrooms, a playground, a library, a cafeteria, a gym; the lines are said; the places are named.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Look at our classroom: ONE blackboard… MANY benches… How do we say that a thing IS somewhere? Today, the magic words!")],
      [fp("Observe. Guess.")], "Eliciting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn there is / there are. By the end of this lesson, you will describe any place — and compare two schools!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Draw the meaning from the examples: There is a library in Tom’s school (ONE). There are many classrooms (MANY). Question: Is there a gym? Are there trees?")],
      [fp("Observe. Answer: one or many?")],
      "Observation / Induction", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Draw the rule: there is + singular; there are + plural. Negative: There is no gym. Question: Is there…? / Are there…?"),
       fp("Drill with OUR school: There is a flag. There are two classrooms…")],
      [fp("Draw the rule. Make sentences about their school."),
       fp("E.A.: there is + one, there are + many.")],
      "Induction / Drill", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: there is (one), there are (many) — perfect to describe a place!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Compare and contrast (from the syllabus): look at the two pictures — a Malagasy school and a school abroad. In groups, find the SIMILARITIES (Both have a flag!) and the DIFFERENCES (Only one has grass and trees; there is a gym in one…)."),
       fp("Share your ideas with the class — with there is/there are!")],
      [fp("Compare with the pictures. Share ideas."),
       pAns("E.A.: Both have a flag. There are many trees in our school. There is a gym in the US school.",
        ["Both have a flag."], { size: SZ.FICHE })],
      "Group work / Discussion", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. There is or there are: … a library? … many benches?"),
       fp("2. Two sentences about OUR school."),
       fp("3. One similarity and one difference between the two schools.")],
      [fp("Answer. Say."),
       pAns("E.A.: There is; There are; There is a yard, there are two classrooms; both have pupils, only one has a cafeteria.",
        ["There is; There are"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(69, TOTAL, meta, rows, "s69");
}

// ---------- S70 — House furniture ----------
function ficheS70() {
  const meta = META("The house furniture",
    "By the end of the lesson, learners will be able to name the house furniture and describe a room with there is/there are.",
    "4 / 6", "the house picture, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. There is or there are: … a flag; … many books."),
       fp("2. One sentence about our school."),
       fp("3. (T5!) Name the rooms of the house.")],
      [fp("Answer. Name."),
       fp("E.A.: There is; there are; correct sentence; bedroom, kitchen, bathroom, living room, dining room.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-listening: tell the parts of the house and the local buildings you know. What is INSIDE a bedroom?")],
      [fp("Tell what they know.")], "Eliciting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we fill the house with its furniture — in English! By the end of this lesson, you will describe every room.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Listen to the list and tick what you hear on the picture (from the syllabus): a wardrobe, a mosquito net, a nightstand, a blanket, a stool, a TV set, a light, a fork, a knife, a bowl, an electric stove, a shower, a mirror, a tap, a basin."),
       fp("Listen and repeat — pay attention to the pronunciation: wardrobe [ouârdrôoub], knife [naïf] (the k is silent!).")],
      [fp("Listen. Tick. Repeat.")],
      "Audio / Using pictures", "House picture, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("Listen to the passage “In this house…” and answer: what is in the bedroom? What is the mosquito net for? What keeps us warm?"),
       fp("Sort the furniture by room: bedroom / living room / kitchen / bathroom.")],
      [fp("Answer. Sort."),
       fp("E.A.: a wardrobe, a nightstand, a mosquito net, a blanket; to keep insects away; the blanket — kitchen: fork, knife, bowl, electric stove; bathroom: shower, mirror, tap, basin.")],
      "Audio / Classifying", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So, every room has its furniture — and we describe it with there is/there are!")],
      [fp("Listen. Repeat.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Describe YOUR house (personalisation): two rooms, two sentences each, with its particularity (a regional detail is welcome!). Share with the class!")],
      [fp("Describe their house. Share."),
       pAns("E.A.: In my bedroom, there is a mosquito net. There are two stools in our kitchen.",
        ["mosquito net"], { size: SZ.FICHE })],
      "Personalisation", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Name eight pieces of furniture."),
       fp("2. Which room for: the shower? the electric stove?"),
       fp("3. Two sentences about your house with there is/are.")],
      [fp("Name. Answer. Say."),
       pAns("E.A.: the words are correct; the bathroom; the kitchen; There is…, There are…",
        ["the bathroom"], { size: SZ.FICHE })],
      "Individual work", "House picture"),
  ];
  return fiche(70, TOTAL, meta, rows, "s70");
}

// ---------- S71 — Reading My new house ----------
function ficheS71() {
  const meta = META("Reading: “My new house”",
    "By the end of the lesson, learners will be able to read a dialogue about a house, get its gist and explicit information, and compare it with the Malagasy context.",
    "5 / 6", "the reading text, audio (QR code)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name six pieces of furniture."),
       fp("2. What is in your kitchen? (there is/are)"),
       fp("3. Spell “knife”.")],
      [fp("Answer. Spell."),
       fp("E.A.: wardrobe, stool…; There is/are…; K-N-I-F-E.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-reading: the title of the text is “My new house”. Predict: what will we visit? Who is speaking?")],
      [fp("Predict the content from the title.")], "Eliciting", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, Kate opens her door: welcome to her new house! By the end of this lesson, you will know all its rooms.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("While-reading: read silently, then listen to the audio; then read aloud with the intonation (three roles: Kate, Jane, Brad!).")],
      [fp("Read. Listen. Read aloud in roles.")],
      "Reading / Audio", "Text, audio (QR code)"),
    stepRow(["4. Analysis"],
      [fp("The gist: what is the text about? The details: How is the hallway? What is in the living room? When do they use the dining room? What is in the kitchen? Where does Kate do her homework?"),
       fp("Vocabulary questions: spacious, peaceful, special occasions.")],
      [fp("Answer."),
       fp("E.A.: the visit of Kate’s house; bright and spacious; the TV, the sofa and two armchairs; on special occasions; a sink, a fridge, cupboards and drawers; in her bedroom.")],
      "Question-answer", "Text"),
    stepRow(["5. Synthesis"],
      [fp("So, Kate’s house has a hallway, a living room, a dining room, a kitchen, a study… and every room has its things!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["6. Practice"],
      [fp("Post-reading, in groups (from the syllabus): compare Kate’s house with the houses of our region — same rooms? same furniture? Report your group’s ideas to the class!")],
      [fp("Compare in groups. Report."),
       pAns("E.A.: Both have a kitchen. In our houses, there is often one big room. Kate has a study.",
        ["Both have a kitchen."], { size: SZ.FICHE })],
      "Group work / Report", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. What is the text about?"),
       fp("2. Two detail questions (living room? homework?)."),
       fp("3. Read four lines aloud with the intonation.")],
      [fp("Answer. Read."),
       pAns("E.A.: Kate’s new house; the TV, the sofa, two armchairs; in her bedroom; fluent reading.",
        ["Kate’s new house"], { size: SZ.FICHE })],
      "Individual work", "Text"),
  ];
  return fiche(71, TOTAL, meta, rows, "s71");
}

// ---------- S72 — Writing favourite place ----------
function ficheS72() {
  const meta = META("Writing: my favourite place",
    "By the end of the lesson, learners will be able to write a short description of their favourite place and correct it in pairs.",
    "6 / 6", "copy-books, blackboard");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Name three rooms of Kate’s house."),
       fp("2. Where does she do her homework?"),
       fp("3. One there is/are sentence about your house.")],
      [fp("Answer."),
       fp("E.A.: the living room, the kitchen, the study…; in her bedroom; There is/are…")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Pre-writing — true or false? Listen: 1. There is a gym in our school. 2. There are two blackboards in our classroom. 3. There is a soccer field in our village…")],
      [fp("Listen and say true or false.")], "Listening game", "----"),
    stepRow(["2. Presentation"],
      [fp("Today, your last writing of the year! By the end of this lesson, you will describe your favourite place — school, house or village.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Orally share your favourite place with the class: My favourite place is… (the school yard? my bedroom? my grandmother’s garden?) Why?")],
      [fp("Share their favourite place orally.")],
      "Personalisation technique", "----"),
    stepRow(["4. Analysis"],
      [fp("While-writing: describe your favourite place in four to six sentences: where it is — what there is/there are — what you do there — why you love it.")],
      [fp("Write the description.")],
      "Individual writing", "Copy-books"),
    stepRow(["5. Synthesis"],
      [fp("Check before exchanging: there is + one / there are + many, the capitals, the periods — and the feeling!")],
      [fp("Check.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Post-writing: correct your production in pairs (peer correction), revise it — then read it to the class with self-confidence!")],
      [fp("Correct in pairs. Revise. Read aloud."),
       pAns("E.A.: My favourite place is the school yard. There are two big trees. I play with my friends there. I love it because…",
        ["My favourite place"], { size: SZ.FICHE })],
      "Peer correction", "Copy-books"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write four sentences about your favourite place."),
       fp("2. Use there is once and there are once."),
       fp("3. Read your production aloud.")],
      [fp("Write. Read."),
       pAns("E.A.: the description is correct and read with confidence.",
        ["confidence"], { size: SZ.FICHE })],
      "Individual work", "Copy-books"),
  ];
  return fiche(72, TOTAL, meta, rows, "s72");
}

// ---------- leçon ----------
function lesson() {
  return [
    p([run("LESSON — UNIT 7", { bold: true, size: 30 })], { center: true, after: 120 }),
    lessonTitle("MY IMMEDIATE SURROUNDINGS"),
    sub("1. The school buildings"),
    img("u7_school.png", 440, 768 / 1408),
    grid(SCHOOL, 3),
    p("", { after: 100 }),
    sub("2. Tom’s school"),
    tomDialogueBox(),
    p("", { after: 100 }),
    sub("3. There is / There are"),
    pr([run("ONE: ", { bold: true }), ...kw("There is a library.", "zèr iz e laïbreri"), run("   MANY: ", { bold: true }), ...kw("There are many classrooms.", "zèr âr mèni klâsroumz")]),
    pr([run("Question: ", { bold: true }), ...kw("Is there a gym?", "iz zèr e djime"), run("  /  "), ...kw("Are there trees?", "âr zèr triz"), run("   Negative: ", { bold: true }), ...kw("There is no gym.", "zèr iz nôou djime")], { after: 100 }),
    sub("4. The house furniture"),
    img("u7_house.png", 440, 768 / 1408),
    grid(FURNITURE, 3),
    p("", { after: 100 }),
    sub("5. In this house…"),
    bedroomBox(),
    p("", { after: 100 }),
    sub("6. Comparing two schools, two houses"),
    pr([...kw("Both have a flag.", "bôouss hav e flague"), run("   "), ...kw("Only one has grass and trees.", "ôounli ouane haz grâss annde triz")]),
    pr([run("My favourite place: ", { bold: true }), ...kw("My favourite place is the school yard.", "maï féivrite pléiss iz ze skoul iârd")], { after: 140 }),
    audioBox([
      { qr: "qr_t6_u7_school.png", label: "Tom’s school — listen and act", url: AUDIO.school },
      { qr: "qr_t6_u7_house.png", label: "The house furniture — listen and tick", url: AUDIO.house },
    ], COLOR),
  ];
}

// ---------- lecture ----------
function readingPage() {
  const L = (t) => p([run(t, { italic: true, size: SZ.BODY })], { after: 40 });
  return [
    p([run("READING — UNIT 7", { bold: true, size: 30 })], { center: true, after: 120 }),
    p([run("MY NEW HOUSE", { bold: true, color: COLOR, size: SZ.TITLE })], { center: true, after: 140 }),
    new Table({
      width: { size: 10400, type: WidthType.DXA },
      rows: [new TableRow({ children: [cell([
        L("Kate: Hi guys! Welcome to my house. I’m so happy you’re here."),
        L("Jane: Hi Kate! Your surrounding is so quiet and peaceful. I love it."),
        L("Kate: Yeah, I’m so happy to live here. Please come in."),
        L("Brad: The hallway is really bright and spacious. I like it very much."),
        L("Jane: Waoohh! It is really spacious."),
        L("Kate: This is the living room with the TV, the sofa and two armchairs."),
        L("Jane: Wow! I love the colour."),
        L("Brad: I see; you have nice family photos there."),
        L("Kate: Yes, that’s right. Let’s move to the next room. This is the dining room. We use it on special occasions. We usually eat in the kitchen."),
        L("Jane: The table is really large and the chairs are elegant."),
        L("Kate: Let me show you the kitchen now. So this is my beautiful kitchen. It is the favourite place of my mom. It’s not too big but we have everything we need here. We have a sink, a fridge, cupboards and drawers. Okay, let’s go to the next room, the study."),
        L("Brad: Do you usually do your homework here?"),
        L("Kate: No, I always do it in my bedroom."),
      ])] })],
    }),
    p("", { after: 100 }),
    pr([run("I understand: ", { bold: true }), run("How is the hallway? What is in the living room? When do they use the dining room? Where does Kate do her homework?")], { after: 100 }),
    audioBox([{ qr: "qr_t6_u7_housetour.png", label: "My new house — listen and read", url: AUDIO.housetour }], COLOR),
  ];
}

// ---------- exercices ----------
function exercises() {
  return [
    p([run("EXERCISES", { bold: true, size: 30 })], { center: true, after: 140 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Name four school buildings and say what we do there (we read in the library…).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("There is or there are? 1. …… a flag in our school. 2. …… many benches. 3. …… a mosquito net in my bedroom. 4. …… two stools in the kitchen.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Which room? 1. the shower 2. the electric stove 3. the wardrobe 4. the TV set.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer about “My new house”: What is in the living room? Where does Kate do her homework?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write two sentences about your favourite place (there is / there are).")]),
    p("", { after: 140 }),
    p([run("Total: 20 points", { bold: true })], { after: 160 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the buildings and the actions are correct (1 point each).", ["buildings"]),
    pAns("Exercise 2: There is — There are — There is — There are (1 point each).", ["There is — There are"]),
    pAns("Exercise 3: the bathroom — the kitchen — the bedroom — the living room (1 point each).", ["the bathroom"]),
    pAns("Exercise 4: the TV, the sofa and two armchairs — in her bedroom (2 points each).", ["two armchairs"]),
    pAns("Exercise 5: My favourite place is… There is… There are… (2 points each).", ["My favourite place"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s73", "SESSION 73 / 74", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 7: MY IMMEDIATE SURROUNDINGS", { bold: true, size: 26 })], { center: true, after: 140 }),
    p("Remember the school and the house:", { after: 100 }),
    grid(SCHOOL.slice(0, 6), 3),
    p("", { after: 60 }),
    grid(FURNITURE.slice(0, 6), 3),
    p("", { after: 120 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Name the school buildings."),
    pAns("E.A.: classroom, library, cafeteria, school yard, office, toilets, soccer field.", ["cafeteria"]),
    p("2. There is or there are: … a library? … many books?"),
    pAns("E.A.: There is; there are.", ["There is; there are"]),
    p("3. What does Tom’s school have? (three things)"),
    pAns("E.A.: many classrooms, a large playground, a library, a cafeteria, a gym.", ["a gym"]),
    p("4. Name eight pieces of house furniture."),
    pAns("E.A.: wardrobe, mosquito net, nightstand, blanket, stool, TV set, fork, knife…", ["nightstand"]),
    p("5. Which room for the mirror and the tap? for the electric stove?"),
    pAns("E.A.: the bathroom; the kitchen.", ["the bathroom"]),
    p("6. Describe our school in two sentences (there is / there are)."),
    pAns("E.A.: There is a flag. There are two classrooms.", ["There is a flag."]),
    p("7. One similarity and one difference between our school and a school abroad."),
    pAns("E.A.: Both have a flag; only one has a gym.", ["Both have a flag"]),
    p("8. Read four lines of “My new house”."),
    pAns("E.A.: fluent reading with intonation.", ["fluent reading"]),
    p("9. Say your favourite place and why."),
    pAns("E.A.: My favourite place is… because…", ["because"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s74", "SESSION 74 / 74", { bold: true, size: 28, after: 60 }),
    p([run("T6 TEST PAPER — UNIT 7: MY IMMEDIATE SURROUNDINGS", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Oral: name four school buildings and four pieces of furniture (the teacher shows the pictures).")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("There is or there are? 1. …… a soccer field. 2. …… many books in the library. 3. …… a shower in the bathroom. 4. …… two lights in the room.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Sort in the right room: mosquito net, fork, mirror, TV set, blanket, bowl, tap, sofa (bedroom / kitchen / bathroom / living room).")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Read “My new house” and answer two questions.")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write four sentences to describe your favourite place.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Exercise 1: the eight words are correct (0.5 point each).", ["eight words"]),
    pAns("Exercise 2: There is — There are — There is — There are (1 point each).", ["There are"]),
    pAns("Exercise 3: bedroom: mosquito net, blanket — kitchen: fork, bowl — bathroom: mirror, tap — living room: TV set, sofa (0.5 point each).", ["living room: TV set"]),
    pAns("Exercise 4: correct gist and details (2 points each).", ["gist"]),
    pAns("Exercise 5: four correct sentences with there is/are (1 point each).", ["there is/are"]),
  ];
}

// ---------- leçons du jour (une par fiche) ----------
function dayLesson(sessionNo, title, children) {
  return [
    p([run(`LESSON OF THE DAY — SESSION ${sessionNo}`, { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run(title, { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    ...children,
  ];
}
function lessonS67() {
  return dayLesson(67, "THE SCHOOL BUILDINGS", [
    img("u7_school.png", 380, 768 / 1408),
    grid(SCHOOL, 3),
    p("", { after: 60 }),
    pr([...kw("Where is the library?", "ouèr iz ze laïbreri"), run("  →  "), ...kw("It’s next to the office.", "its nèkste tou zi ofiss")]),
  ]);
}
function lessonS68() {
  return dayLesson(68, "LISTENING: “TOM’S SCHOOL”", [
    pr([run("The key words of the dialogue: ", { bold: true }), ...kw("a schedule", "e skèdjoule"), run("  "), ...kw("a subject", "e seubdjikte"), run("  "), ...kw("huge", "hioudj"), run("  "), ...kw("recess", "rissèss")], { after: 60 }),
    pr([run("How to listen well: ", { bold: true }), run("1. First: what places do you hear? 2. Second: what time does Tom start? 3. Third: what do they eat in the cafeteria?")]),
    pr([run("I answer with There is / There are: ", { bold: true }), ...kw("There is a huge library.", "zèr iz e hioudj laïbreri")]),
  ]);
}
function lessonS69() {
  return dayLesson(69, "THERE IS, THERE ARE — MY SCHOOL AND TOM’S SCHOOL", [
    pr([run("ONE: ", { bold: true }), ...kw("There is a library.", "zèr iz e laïbreri"), run("   MANY: ", { bold: true }), ...kw("There are many classrooms.", "zèr âr mèni klâsroumz")]),
    pr([run("Question: ", { bold: true }), ...kw("Is there a gym?", "iz zèr e djime"), run("  /  "), ...kw("Are there trees?", "âr zèr triz")]),
    pr([run("Negative: ", { bold: true }), ...kw("There is no gym.", "zèr iz nôou djime")], { after: 60 }),
    pr([run("To compare: ", { bold: true }), ...kw("Both have a flag.", "bôouss hav e flague"), run("   "), ...kw("Only one has grass and trees.", "ôounli ouane haz grâss annde triz")]),
  ]);
}
function lessonS70() {
  return dayLesson(70, "THE HOUSE FURNITURE", [
    img("u7_bedroom.png", 380, 768 / 1408),
    grid(FURNITURE, 3),
    p("", { after: 60 }),
    pr([run("The rooms: ", { bold: true }), ...kw("the bedroom", "ze bèdroume"), run("  "), ...kw("the kitchen", "ze kitchène"), run("  "), ...kw("the bathroom", "ze bâssroume"), run("  "), ...kw("the living room", "ze livinng roume")]),
  ]);
}
function lessonS71() {
  return dayLesson(71, "READING DAY: “MY NEW HOUSE”", [
    bedroomBox(),
    p("", { after: 60 }),
    pr([run("How to read well: ", { bold: true }), run("1. Find the rooms of the house. 2. Find the furniture with There is / There are. 3. Read the happy sentences with a happy voice!")]),
    audioBox([{ qr: "qr_t6_u7_housetour.png", label: "The house tour — listen and follow", url: AUDIO.housetour }], COLOR),
  ]);
}
function lessonS72() {
  return dayLesson(72, "WRITING DAY: MY FAVOURITE PLACE", [
    pr([run("The plan of my paragraph: ", { bold: true }), run("1. My favourite place is… — 2. There is / There are… (two sentences) — 3. I like it because… — 4. one feeling (I am happy there).")], { after: 60 }),
    pr([run("The writing rules: ", { bold: true }), run("There is + singular, There are + plural — and because for the reason!")]),
    pr([run("Model: ", { bold: true }), run("My favourite place is the school yard. There is a big tree. There are flowers and birds. I like it because I play with my friends there. I am happy!", { italic: true })]),
  ]);
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS67(), pageBreak(), ...lessonS67(), pageBreak(),
    ...ficheS68(), pageBreak(), ...lessonS68(), pageBreak(),
    ...ficheS69(), pageBreak(), ...lessonS69(), pageBreak(),
    ...ficheS70(), pageBreak(), ...lessonS70(), pageBreak(),
    ...ficheS71(), pageBreak(), ...lessonS71(), pageBreak(),
    ...ficheS72(), pageBreak(), ...lessonS72(), pageBreak(),
    ...lesson(), pageBreak(),
    ...readingPage(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 7", COLOR, [
      "I can name the school buildings.",
      "I can use there is and there are.",
      "I can name the house furniture.",
      "I can describe my school and my house.",
      "I can compare Malagasy schools with schools abroad.",
      "I can read and understand “My new house”.",
      "I can write about my favourite place.",
    ], "WELL DONE! You finished the T6 English year! Now open the treasure box: the ANNEXES!"),
  ];
};
module.exports.COLOR = COLOR;
