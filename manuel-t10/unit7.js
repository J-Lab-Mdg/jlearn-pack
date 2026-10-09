// T10 — UNIT 7 — TRAVELLING IN MADAGASCAR (8 séances + révision + test) — Sessions 52 à 61 / 88
const B = require("./builders");
const { C, SZ, run, p, pr, kw, pAns, fp, fiche, sectionRow, stepRow,
        unitBanner, audioBox, img, pageBreak, lessonTitle, sub, iCan, cell } = B;
const { Table, TableRow, WidthType } = require("docx");

const COLOR = "D35400"; // orange latérite
const SHADE = "FAE5D3";
const TOTAL = 88;
const AUDIO = {
  travel: "https://drive.google.com/drive/folders/1uXWfIkqjLhPzaLrkrDEfOqmtE7A7RqVI",
};
const META = (title, slo, session, materials) => ({
  theme: "UNIT 7 — TRAVELLING IN MADAGASCAR", title, slo,
  values: "patriotism, responsibility", session, materials,
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
  return box("TRAVELLING AROUND MADAGASCAR (listening dialogue)", [
    line("Fara", "Soa, I want to see the baobabs of Morondava! What’s the best way to get there from here?"),
    line("Soa", "By taxi-brousse! It’s popular and cheap."),
    line("Fara", "How far is it?"),
    line("Soa", "About seven hundred kilometres."),
    line("Fara", "Seven hundred! And how long does it take?"),
    line("Soa", "About fifteen hours on the road. Buy your ticket two days in advance, and leave early in the morning — there is always heavy traffic in the city."),
    line("Fara", "How often do the taxis-brousse leave?"),
    line("Soa", "Daily! One leaves every afternoon."),
    line("Fara", "Hmm. And can we go by plane?"),
    line("Soa", "Yes, but it’s more expensive. At the airport, you check in one hour before, you go through security… and you fly in only one hour!"),
    line("Fara", "Wherever we go, I will be happy. I love our island!"),
    line("Soa", "Me too. But remember: whenever you travel, respect the local fady. Some places are sacred — always ask the people of the village first."),
    line("Fara", "Of course. A good traveller is a responsible traveller!"),
  ]);
}
function readingTextBox() {
  return box("THE READING TEXT — THE LONG ROAD SOUTH", [
    p("Last July, Naina travelled from Antananarivo to Toliara on the famous Route Nationale 7 — almost one thousand kilometres, three days of taxi-brousse!", { after: 40 }),
    p("The first morning, the bus crossed the highlands. Naina pressed his face against the window and did not say a word for two hours. The hills were covered with rice terraces, green and gold, like stairs built for giants.", { after: 40 }),
    p("In Antsirabe, the air was cool and the streets were full of colourful pousse-pousse. In Fianarantsoa, he drank hot tea from the plantations of Sahambavy. But after Ambalavao, everything changed: the land became wild and open. In Isalo, mountains of yellow stone stood like the walls of an old castle. Naina took thirty photos in ten minutes.", { after: 40 }),
    p("The last evening, near Toliara, the driver stopped the bus. “Look,” he said. In front of them, hundreds of travellers’ trees and fat baobabs were burning red in the sunset. Nobody spoke. An old woman next to Naina wiped her eyes with her lamba.", { after: 40 }),
    p("Some travellers fly from Tana to Toliara in one hour. They arrive quickly, but how much do they see? Naina came home tired, dusty — and rich. Not rich in money: rich in his own country.", { after: 20 }),
  ]);
}

// ---------- page d'ouverture ----------
function opening() {
  return [
    unitBanner("UNIT 7 — TRAVELLING IN MADAGASCAR", COLOR, "unit7"),
    p("", { after: 100 }),
    p([run("What’s the best way to get there?", { bold: true, color: COLOR, size: 44 })], { center: true, after: 120 }),
    img("u7_travel.png", 440, 768 / 1376),
    p([run("In this unit, I will learn to:", { bold: true })], { after: 60 }),
    p("• name the means of transport: by taxi-brousse, by plane, on foot;"),
    p("• describe the places of Madagascar: popular, wild, polluted;"),
    p("• ask the traveller’s questions: How long? How far? How often?;"),
    p("• use the airport words: check in, go through security, in advance;"),
    p("• use the ever-words: whenever, wherever;"),
    p("• talk about taboos and superstitions — the fady of our regions;"),
    p("• present a foreign country and compare it with Madagascar;"),
    p("• write about my dream trip in Madagascar!", { after: 140 }),
    pr([run("Values: ", { bold: true }), run("patriotism, responsibility.")], { after: 160 }),
    box("WHY THIS UNIT?", [
      p("Madagascar is a continent in one island: baobabs, rainforests, deserts, beaches and highlands. Before dreaming of far countries, let us learn to travel — and to love — our own. A good traveller is a responsible traveller!", { after: 40 }),
    ]),
    p("", { after: 100 }),
    audioBox([
      { qr: "qr_t10_u7_travel.png", label: "Travelling around Madagascar — listen and repeat", url: AUDIO.travel },
    ], COLOR),
  ];
}

// ---------- S52 — Means of transport + describing places ----------
function ficheS52() {
  const meta = META("The means of transport — describing the places",
    "By the end of the lesson, learners will be able to name the means of transport and describe Malagasy places with adjectives such as popular, wild and polluted.",
    "1 / 8", "transport pictures, map of Madagascar");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Simple past: go, take."),
       fp("2. One sentence about your last trip, with a marker.")],
      [fp("Answer."),
       fp("E.A.: went, took — Last year, first, I went to Antsirabe!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("Brainstorm! All the adjectives you know to describe Madagascar and its cities: beautiful? big? noisy? I write everything on the board. Then each student uses one adjective to describe a place he knows.")],
      [fp("Brainstorm. Describe."),
       fp("E.A.: Tana is big and noisy! Nosy Be is beautiful!")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The means of transport ». By the end of this lesson, you will travel across the whole island — without leaving your chair!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The transport pictures: the taxi-brousse, the plane, the train, the pirogue, the zebu cart… and the oldest transport of the world: your two feet! The magic structure: to go BY bus, BY plane, BY pirogue — but ON foot! I travel by taxi-brousse; he walks on foot.")],
      [fp("Listen. Repeat."),
       fp("E.A.: by bus, by plane, by train — on foot!")],
      "Using audio-visual aids", "Transport pictures"),
    stepRow(["4. Analysis"],
      [fp("Three adjectives for the traveller: popular (everybody loves it: the taxi-brousse is popular!), wild (pure nature: the forest of Masoala is wild), polluted (dirty air: the city centre is polluted at noon). Match each adjective with places of Madagascar on the map!")],
      [fp("Match. Justify."),
       fp("E.A.: Isalo is wild; the beaches of Foulpointe are popular; the traffic makes Tana polluted.")],
      "Contextualisation", "Map"),
    stepRow(["5. Synthesis"],
      [fp("So: by + transport (but on foot!), and the three traveller’s adjectives: popular, wild, polluted — plus all our brainstormed friends!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: choose a secret destination in Madagascar. Describe it with two adjectives and one transport — the partner guesses the place!")],
      [fp("Describe. Guess."),
       pAns("E.A.: It is wild and amazing, you go there by pirogue… — The Tsiribihina river!",
        ["by pirogue"], { size: SZ.FICHE })],
      "Pair work", "Map"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Complete: I go … bus; she goes … plane; we walk … foot."),
       fp("2. One sentence with wild, one with polluted.")],
      [fp("Answer."),
       pAns("E.A.: by — by — on. The Isalo park is wild. The air of the big city is polluted.",
        ["by — by — on"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(52, TOTAL, meta, rows, "s52");
}
function lessonS52() {
  return [
    p([run("LESSON OF THE DAY — SESSION 52", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE MEANS OF TRANSPORT — THE PLACES", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    img("u7_transport.png", 420, 768 / 1376),
    p([run("How do you travel?", { bold: true })], { after: 30 }),
    vocab("by taxi-brousse / by bus", "baï taxi-brousse / baï beusse"),
    vocab("by plane", "baï pléine", "en avion"),
    vocab("by train / by boat / by pirogue", "baï tréine / baï bôoute / baï pirogue"),
    vocab("by zebu cart", "baï zibou karte", "en charrette à zébus"),
    vocab("on foot", "onne foute", "à pied — attention : ON, pas by !"),
    p("", { after: 60 }),
    box("THE TRAVELLER’S ADJECTIVES", [
      bullet([run("popular ", { bold: true, color: C.BLUE }), run("[popiouleur]", { italic: true, color: C.GRAY }), run(" — everybody loves it: the beach of Foulpointe is popular.")]),
      bullet([run("wild ", { bold: true, color: C.BLUE }), run("[ouaïlde]", { italic: true, color: C.GRAY }), run(" — pure nature: the Masoala forest is wild.")]),
      bullet([run("polluted ", { bold: true, color: C.BLUE }), run("[peuloutide]", { italic: true, color: C.GRAY }), run(" — dirty air or water: the city centre is polluted at noon.")], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GOLDEN STRUCTURE", [
      bullet([run("to go BY + transport: ", { bold: true }), run("I go to school by bus; Naina travels by taxi-brousse.", { bold: true, color: C.BLUE })]),
      bullet([run("but: to walk ON FOOT: ", { bold: true }), run("whenever there is no bus, I go on foot!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S53 — How long? How far? How often? ----------
function ficheS53() {
  const meta = META("Time and distance — How long? How far? How often?",
    "By the end of the lesson, learners will be able to ask and answer about time, distance and frequency while travelling, using adverbs like hourly and daily.",
    "2 / 8", "map of Madagascar with distances");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Complete: by plane, by bus, … foot."),
       fp("2. An adjective for the Isalo park?")],
      [fp("Answer."),
       fp("E.A.: on — wild!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("The guessing game: Tana–Toamasina… how many kilometres? Tana–Toliara? Tana–Mahajanga? Guesses on slates, then the map gives the answers!")],
      [fp("Guess."),
       fp("E.A.: about 350 km; about 950 km; about 570 km.")],
      "Whole-class work", "Map"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « How long? How far? How often? ». By the end of this lesson, you will measure every trip like a professional driver!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The three measuring questions: HOW FAR is it? (distance) — It’s 350 kilometres. HOW LONG does it take? (time) — It takes eight hours. HOW OFTEN do the buses leave? (frequency) — They leave daily!")],
      [fp("Listen. Repeat."),
       fp("E.A.: How far → km; how long → hours; how often → times.")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("The -ly family of frequency: hour → hourly (every hour), day → daily, week → weekly, month → monthly, year → yearly. The city buses leave hourly; the taxi-brousse for Toliara leaves daily; the big zebu market of Ambalavao is weekly!")],
      [fp("Observe. Build."),
       fp("E.A.: hourly, daily, weekly, monthly, yearly.")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: How far (kilometres), How long (hours — it TAKES time!), How often (hourly, daily, weekly…). Three questions, and you master every road of the island!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Travel agency game in pairs: A is the traveller (choose a destination!), B is the agent. Three questions minimum: How far…? How long…? How often…? Then swap!")],
      [fp("Ask. Answer."),
       pAns("E.A.: How far is Mahajanga? About 570 km. How long does it take? About twelve hours. How often do the buses leave? Daily, at seven!",
        ["How long does it take?"], { size: SZ.FICHE })],
      "Pair work", "Map"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write the three measuring questions."),
       fp("2. The adverb: every day → ? every hour → ? every week → ?")],
      [fp("Answer."),
       pAns("E.A.: How far is it? How long does it take? How often do the buses leave? — daily, hourly, weekly.",
        ["daily, hourly, weekly"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(53, TOTAL, meta, rows, "s53");
}
function lessonS53() {
  return [
    p([run("LESSON OF THE DAY — SESSION 53", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("HOW LONG? HOW FAR? HOW OFTEN?", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE THREE MEASURING QUESTIONS", [
      bullet([run("Distance: ", { bold: true }), run("How far is it? — It’s 350 kilometres.", { bold: true, color: C.BLUE }), run("  [haou fare]", { italic: true, color: C.GRAY })]),
      bullet([run("Time: ", { bold: true }), run("How long does it take? — It takes eight hours.", { bold: true, color: C.BLUE }), run("  [haou longue deuze itte téike]", { italic: true, color: C.GRAY })]),
      bullet([run("Frequency: ", { bold: true }), run("How often do the buses leave? — Daily!", { bold: true, color: C.BLUE }), run("  [haou ofeune]", { italic: true, color: C.GRAY })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The -ly family of frequency:", { bold: true })], { after: 30 }),
    vocab("hourly", "aoueurli", "every hour — the city buses"),
    vocab("daily", "déili", "every day — the taxi-brousse of the south"),
    vocab("weekly", "ouikli", "every week — the zebu market!"),
    vocab("monthly / yearly", "meunnthli / yirli", "every month / every year"),
    p("", { after: 60 }),
    box("THE DISTANCES OF OUR ISLAND (about!)", [
      bullet([run("Tana → Toamasina: 350 km — 8 hours by road.", { bold: true, color: C.BLUE })]),
      bullet([run("Tana → Mahajanga: 570 km — 12 hours.", { bold: true, color: C.BLUE })]),
      bullet([run("Tana → Toliara (the RN7!): about 950 km — 2 to 3 days.", { bold: true, color: C.BLUE })]),
      bullet([run("By plane: one hour… but your wallet cries!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S54 — Traveller's expressions + ever-words + other ----------
function ficheS54() {
  const meta = META("The traveller’s tool box — whenever, wherever, another",
    "By the end of the lesson, learners will be able to use travel expressions (check in, in advance, heavy traffic), the ever-words and common expressions with “other”.",
    "3 / 8", "airport pictures");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. How … is it? How … does it take?"),
       fp("2. Every day → the adverb?")],
      [fp("Answer."),
       fp("E.A.: far — long — daily.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Picture of Ivato airport: what do the passengers do before flying? Mime it: the bag on the scale, the ticket, the long corridor…")],
      [fp("Observe. Mime."),
       fp("E.A.: they give the bags, they show the ticket…")],
      "Using visual aids", "Airport picture"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The traveller’s tool box ». By the end of this lesson, no station and no airport will scare you!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The big question of the traveller: What’s the BEST way to get to Tana from here? What’s the WORST way? And the airport chain: buy the ticket in advance → check in → go through security → fly! On the road: leave early, because of the heavy traffic!")],
      [fp("Listen. Repeat."),
       fp("E.A.: What’s the best way to get to…? check in, go through security…")],
      "Repetition drill", "Blackboard"),
    stepRow(["4. Analysis"],
      [fp("Two little tools. The EVER-words: whenever = every time that (whenever I travel, I take water), wherever = in every place that (wherever you go, say hello!). And the OTHER family: another bus (one more), the other road (the second of two), others (other people). This seat or the other? Take another!")],
      [fp("Observe. Build sentences."),
       fp("E.A.: Whenever I visit Tana, I see heavy traffic! Wherever you go… — another, the other, others.")],
      "Contextualisation of grammar", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: best/worst way to get to…, the airport chain (in advance, check in, security), heavy traffic — and the tools: whenever, wherever, another / the other / others.")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Mini role-play: at the station, a traveller missed his bus! Use: What’s the best way…? another bus? whenever? The partner helps him.")],
      [fp("Role-play."),
       pAns("E.A.: I missed the bus! — Take another one: they leave hourly! Whenever you miss one, the other comes soon.",
        ["Take another one"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. The airport chain in order: security, ticket in advance, check in."),
       fp("2. Complete: … I am tired, I sleep in the bus. / Take … road, this one is flooded.")],
      [fp("Answer."),
       pAns("E.A.: in advance → check in → go through security. Whenever — the other.",
        ["check in"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(54, TOTAL, meta, rows, "s54");
}
function lessonS54() {
  return [
    p([run("LESSON OF THE DAY — SESSION 54", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE TRAVELLER’S TOOL BOX", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE BIG QUESTION", [
      bullet([run("What’s the best way to get to Tana from here? ", { bold: true, color: C.BLUE }), run("[ouotse dhe beste ouéï tou guette tou]", { italic: true, color: C.GRAY })]),
      bullet([run("What’s the worst way? ", { bold: true, color: C.BLUE }), run("— By zebu cart… three weeks!", { color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("The airport chain:", { bold: true })], { after: 30 }),
    vocab("in advance", "ine advannce", "à l’avance — buy the ticket two days in advance!"),
    vocab("to check in", "tou tchèke ine", "enregistrer les bagages"),
    vocab("to go through security", "tou gôou throu sikiouriti", "passer la sécurité"),
    vocab("heavy traffic", "hèvi trafike", "embouteillages — leave early!"),
    p("", { after: 60 }),
    box("THE EVER-WORDS", [
      bullet([run("whenever ", { bold: true, color: C.BLUE }), run("= every time that: "), run("Whenever I travel, I take water.", { bold: true, color: C.BLUE })]),
      bullet([run("wherever ", { bold: true, color: C.BLUE }), run("= in every place that: "), run("Wherever you go in Madagascar, people smile.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE OTHER FAMILY", [
      bullet([run("another ", { bold: true, color: C.BLUE }), run("= one more: "), run("Take another bus!", { bold: true, color: C.BLUE })]),
      bullet([run("the other ", { bold: true, color: C.BLUE }), run("= the second of two: "), run("This road is flooded — take the other one.", { bold: true, color: C.BLUE })]),
      bullet([run("others ", { bold: true, color: C.BLUE }), run("= other people: "), run("Some travellers fly; others prefer the road.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S55 — Listening: the travel dialogue ----------
function ficheS55() {
  const meta = META("Listening: travelling around Madagascar",
    "By the end of the lesson, learners will be able to infer the gist and details of a travel dialogue and describe pictures of Malagasy places.",
    "4 / 8", "audio dialogue (QR code page 1 of the unit) or teacher reading, pictures of places");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The airport chain (three steps)."),
       fp("2. Whenever or wherever: … you go, respect the fady.")],
      [fp("Answer."),
       fp("E.A.: in advance, check in, security — Wherever.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-listening)"],
      [fp("One minute: describe briefly a place you know with the adjectives of Session 52. Two volunteers!")],
      [fp("Describe."),
       fp("E.A.: My village is quiet and beautiful, near a wild river.")],
      "Personalisation technique", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to listen to « Travelling around Madagascar » — Soa and her cousin Fara prepare a trip. By the end of this lesson, your ears will catch every kilometre!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-listening, 1st listening)"],
      [fp("Books closed! Gist questions: who wants to travel? Where to? What does she want to see?")],
      [fp("Listen. Answer."),
       fp("E.A.: Fara; to Morondava; the baobabs!")],
      "Whole-class work", "Audio"),
    stepRow(["4. Analysis (2nd listening + inference)"],
      [fp("Second listening with missions: (a) note the numbers (how far? how long? how often?), (b) note the travel expressions you hear. Inference questions: why must Fara buy the ticket in advance? Is the plane the best way for Fara? (the dialogue does not say it — think about the price!). Third listening: repeat the four big questions with good intonation.")],
      [fp("Hunt. Infer. Repeat."),
       pAns("E.A.: 700 km, 15 hours, daily. In advance because the taxis-brousse are full! The plane is fast BUT expensive — for a student, the bus is better.",
        ["700 km, 15 hours, daily"], { size: SZ.FICHE })],
      "Repetition drill", "Audio"),
    stepRow(["5. Synthesis (post-listening: the grammar hunt)"],
      [fp("Find in the dialogue: the ever-words (whenever, wherever), the frequency adverb (daily), the three measuring questions. How are they built? The dialogue is our grammar book!")],
      [fp("Find. Explain."),
       fp("E.A.: Wherever we go…; whenever you travel…; How far / How long / How often…")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (the picture game!)"],
      [fp("Pictures of places of Madagascar on the desk (the beach, the baobabs, the rice terraces, the market…). One student secretly chooses one and describes it with the target vocabulary. The class listens and guesses which picture! Then pairs: ask and answer about travelling.")],
      [fp("Describe. Guess. Ask."),
       pAns("E.A.: This place is wild and popular, you get there by taxi-brousse, the trees are fat and very old… — The baobabs of Morondava!",
        ["The baobabs of Morondava!"], { size: SZ.FICHE })],
      "Using audio-visual aids", "Pictures"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. How far is Morondava, and how long does it take by road?"),
       fp("2. Share YOUR travel experience — or the place of Madagascar you would like to visit (three sentences).")],
      [fp("Answer. Share."),
       pAns("E.A.: 700 km, about 15 hours. — I would like to visit Nosy Be: it is popular, you get there by boat, and the sea is warm!",
        ["I would like to visit"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
  ];
  return fiche(55, TOTAL, meta, rows, "s55");
}
function lessonS55() {
  return [
    p([run("LESSON OF THE DAY — SESSION 55", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("LISTENING: TRAVELLING AROUND MADAGASCAR", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    dialogueBox(),
    p("", { after: 60 }),
    box("WHAT MY EARS CAUGHT", [
      bullet([run("The numbers: ", { bold: true }), run("700 km — 15 hours — daily — 1 hour by plane.", { bold: true, color: C.BLUE })]),
      bullet([run("The expressions: ", { bold: true }), run("the best way to get to, in advance, check in, go through security, heavy traffic.", { bold: true, color: C.BLUE })]),
      bullet([run("The inference: ", { bold: true }), run("the plane is fast BUT expensive → for a student, the taxi-brousse wins!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S56 — Taboos, superstitions and prohibition ----------
function ficheS56() {
  const meta = META("Taboos and superstitions — the respectful traveller",
    "By the end of the lesson, learners will be able to talk about taboos and superstitions and express prohibition politely while travelling.",
    "5 / 8", "pictures of sacred places");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three measuring questions of the traveller."),
       fp("2. In the dialogue: what must we respect whenever we travel?")],
      [fp("Answer."),
       fp("E.A.: How far / how long / how often — the local fady!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("Talk time: do you know a fady of your region or your family? A place? A day? A food? Share — with respect!")],
      [fp("Share."),
       fp("E.A.: In some villages, it is fady to work the land on Tuesday…")],
      "Whole-class work", "----"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to learn a new lesson called: « The respectful traveller ». By the end of this lesson, you will know how to say — and respect — what is prohibited.")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The words of the lesson: a taboo (English borrowed it from the Pacific — we say fady!), a superstition (a belief: some people think the chameleon brings messages…), sacred (holy: a sacred hill, a sacred lake), prohibited / forbidden (not allowed!).")],
      [fp("Listen. Repeat."),
       fp("E.A.: taboo, superstition, sacred, forbidden.")],
      "Repetition drill", "Pictures"),
    stepRow(["4. Analysis"],
      [fp("How to express prohibition? Strong and official: It is forbidden to swim here. Swimming is prohibited. Personal and kind: You mustn’t point at the tomb. You can’t enter with shoes. And the traveller’s golden sentence: Before visiting, ALWAYS ask: Is there a fady here? What mustn’t I do?")],
      [fp("Observe. Build."),
       fp("E.A.: It is forbidden to…; you mustn’t…; Is there a fady here?")],
      "Contextualisation", "Blackboard"),
    stepRow(["5. Synthesis"],
      [fp("So: taboo/fady, superstition, sacred, forbidden — and the two voices of prohibition: it is forbidden to… / you mustn’t… Respecting the fady is not fear: it is politeness for the ancestors and the hosts. That is responsibility!")],
      [fp("Listen. Repeat. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("Role-play: a visitor arrives in your village. Welcome him and explain kindly two local rules with “you mustn’t” — and answer his question “Is there a fady here?”.")],
      [fp("Role-play."),
       pAns("E.A.: Welcome! Here, you mustn’t wear a hat near the sacred stone, and you mustn’t point at it with the finger — use the open hand!",
        ["use the open hand!"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Two ways to express prohibition in English."),
       fp("2. Why does the respectful traveller ask about the fady before visiting?")],
      [fp("Answer."),
       pAns("E.A.: It is forbidden to… / You mustn’t… — Because respecting the hosts and the ancestors is the first rule of travelling!",
        ["the first rule of travelling"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(56, TOTAL, meta, rows, "s56");
}
function lessonS56() {
  return [
    p([run("LESSON OF THE DAY — SESSION 56", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("TABOOS AND SUPERSTITIONS — THE RESPECTFUL TRAVELLER", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    p([run("The words of respect:", { bold: true })], { after: 30 }),
    vocab("a taboo", "e tabou", "our famous fady!"),
    vocab("a superstition", "e soupeursticheune", "a belief"),
    vocab("sacred", "séikrède", "holy — a sacred hill, a sacred lake"),
    vocab("prohibited / forbidden", "prohibitide / forbideune", "interdit"),
    p("", { after: 60 }),
    box("THE TWO VOICES OF PROHIBITION", [
      bullet([run("Official: ", { bold: true }), run("It is forbidden to swim here. Swimming is prohibited.", { bold: true, color: C.BLUE })]),
      bullet([run("Personal and kind: ", { bold: true }), run("You mustn’t point at the tomb. You can’t enter with your shoes.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("THE GOLDEN QUESTIONS OF THE VISITOR", [
      bullet([run("Is there a fady here? ", { bold: true, color: C.BLUE }), run("[ize dhère e fadi hire]", { italic: true, color: C.GRAY })]),
      bullet([run("What mustn’t I do? ", { bold: true, color: C.BLUE }), run("[ouotte meusseunte aï dou]", { italic: true, color: C.GRAY })]),
      bullet([run("Respecting the fady = politeness for the hosts and the ancestors. That is the responsible traveller!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S57 — Reading: the long road south ----------
function ficheS57() {
  const meta = META("Reading: the long road south",
    "By the end of the lesson, learners will be able to skim, scan and infer information and feelings from a text about travelling in Madagascar.",
    "6 / 8", "reading text (book page)");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. Two ways to say “interdit”."),
       fp("2. SKIM or SCAN: I read fast for the main idea?")],
      [fp("Answer."),
       fp("E.A.: forbidden / prohibited — skim!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-reading)"],
      [fp("The title: « The long road south ». Predict the content! Then discuss: what do you already know about the RN7? Who already travelled far in Madagascar? Last tool: I give three difficult words in context (highlands, dusty, to wipe) — draw their meaning from the sentences around them.")],
      [fp("Predict. Discuss. Guess the words."),
       fp("E.A.: a trip Tana → Toliara! highlands = the high lands of the centre; dusty = full of dust; to wipe = clean with a cloth.")],
      "Brainstorming", "Blackboard"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to read « The long road south » — Naina’s three days on the RN7. By the end of this lesson, you will read the road AND the hearts!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation (while-reading)"],
      [fp("First: read aloud, paragraph by paragraph — intonation! Then SKIM: the main idea in one sentence. Then SCAN: how many kilometres? How many days? What did Naina drink in Fianarantsoa? How many photos in Isalo?")],
      [fp("Read aloud. Skim. Scan."),
       pAns("E.A.: Main idea: a slow trip on the RN7 shows the beauty of the country. — 1000 km, 3 days, hot tea, 30 photos!",
        ["1000 km, 3 days"], { size: SZ.FICHE })],
      "Skimming / Scanning", "Reading text"),
    stepRow(["4. Analysis (the inference hunt)"],
      [fp("Read between the lines! The text never says “Naina was amazed” — the clue? (his face on the window, silent for two hours!). Why did the old woman wipe her eyes? What does “rich in his own country” mean? And the question of the text: the plane or the road — which traveller sees more?")],
      [fp("Infer. Justify with clues."),
       pAns("E.A.: Naina was amazed (silent, face on the window). The woman was moved by the beauty. “Rich” = full of love and memories of his country — that is patriotism!",
        ["that is patriotism!"], { size: SZ.FICHE })],
      "Inference", "Reading text"),
    stepRow(["5. Synthesis"],
      [fp("So: skim for the idea, scan for the numbers, infer for the feelings. And the message of the text: travelling slowly in our island makes us rich — rich in our own country!")],
      [fp("Listen. Copy.")], "Whole-class work", "Blackboard"),
    stepRow(["6. Practice (post-reading)"],
      [fp("Retell the main idea of the text with your own words — oral or written, three sentences. Two volunteers share.")],
      [fp("Retell."),
       pAns("E.A.: Naina travelled three days on the RN7. He saw rice terraces, Isalo and the baobabs. He came home tired but full of love for Madagascar.",
        ["full of love for Madagascar"], { size: SZ.FICHE })],
      "Personalisation technique", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. One STATED information and one INFERRED information of the text, with the clue."),
       fp("2. Homework (for the next session!): collect information about a foreign country of your choice — capital, language, transport, one famous place.")],
      [fp("Answer. Note the homework."),
       pAns("E.A.: Stated: the trip takes three days. Inferred: Naina loves his country (clue: “rich in his own country”).",
        ["rich in his own country"], { size: SZ.FICHE })],
      "Individual work", "----"),
  ];
  return fiche(57, TOTAL, meta, rows, "s57");
}
function lessonS57() {
  return [
    p([run("LESSON OF THE DAY — SESSION 57", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("READING: THE LONG ROAD SOUTH", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    readingTextBox(),
    p("", { after: 60 }),
    p([run("New words of the text:", { bold: true })], { after: 50 }),
    vocab("the highlands", "dhe haïlanndze", "les hautes terres"),
    vocab("rice terraces", "raïce tèreussize", "the stairs of the giants!"),
    vocab("dusty", "deusti", "full of dust — dust + y, the machine of Unit 5!"),
    vocab("to wipe", "tou ouaïpe", "essuyer"),
    p("", { after: 60 }),
    box("THE READER-DETECTIVE AT WORK", [
      bullet([run("Stated: ", { bold: true }), run("the trip takes three days; Naina took thirty photos.", { bold: true, color: C.BLUE })]),
      bullet([run("Inferred: ", { bold: true }), run("Naina was amazed (clue: silent, face on the window); the old woman was moved (clue: she wiped her eyes).", { bold: true, color: C.BLUE })]),
      bullet([run("The message: ", { bold: true }), run("slow travelling makes you rich — rich in your own country!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S58 — The foreign country presentation ----------
function ficheS58() {
  const meta = META("My foreign country — presenting and comparing",
    "By the end of the lesson, learners will be able to present a foreign country briefly and compare travelling there and in Madagascar.",
    "7 / 8", "the information collected at home, world map if available");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. The three reading tools (fast idea / fast info / between the lines)."),
       fp("2. Did you bring your foreign country information?")],
      [fp("Answer. Show the notes."),
       fp("E.A.: skim, scan, infer — yes!")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up"],
      [fp("World tour of the class: each student says only the NAME of his chosen country. Listen: how many continents are in our classroom today?")],
      [fp("Say the country."),
       fp("E.A.: England! Kenya! Japan! France! South Africa!")],
      "Whole-class work", "World map"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to present our foreign countries — like little ambassadors. By the end of this lesson, the classroom will have travelled around the world and come back home!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("The presentation skeleton on the board: 1. My country is… Its capital is… 2. People speak… 3. People travel by… 4. The most famous place is… 5. One surprising thing is… Short, clear, loud!")],
      [fp("Copy the skeleton. Prepare (five minutes).")],
      "Guided writing", "Blackboard"),
    stepRow(["4. Analysis (the presentations!)"],
      [fp("Four or five volunteers present (one minute each). The class listens and asks one question per presentation: How far is it from Madagascar? How do people travel there? Is it polluted?")],
      [fp("Present. Ask. Answer."),
       pAns("E.A.: My country is England. Its capital is London. People travel by train and by underground. The most famous place is Big Ben. One surprising thing: the buses are red and have two floors!",
        ["two floors!"], { size: SZ.FICHE })],
      "Whole-class work", "Notes"),
    stepRow(["5. Synthesis (the comparison)"],
      [fp("Compare travelling in English-speaking countries and in Madagascar: there, trains are hourly and fast, but expensive; here, the taxi-brousse is slow but cheap and full of songs! There, you check in with machines; here, the driver knows your name. Different — and both beautiful!")],
      [fp("Compare. Discuss."),
       fp("E.A.: There: fast, hourly, expensive. Here: slow, daily, friendly!")],
      "Whole-class work", "Blackboard"),
    stepRow(["6. Practice"],
      [fp("In pairs: one sentence « There… » and one sentence « Here in Madagascar… » about transport. The best pairs on the board!")],
      [fp("Build the comparison."),
       pAns("E.A.: There, people take the underground daily. Here, we take the taxi-be — and we meet our neighbours inside!",
        ["we meet our neighbours"], { size: SZ.FICHE })],
      "Pair work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Write your five-line country presentation (final version)."),
       fp("2. One comparison sentence There / Here.")],
      [fp("Write.")],
      "Individual work", "----"),
  ];
  return fiche(58, TOTAL, meta, rows, "s58");
}
function lessonS58() {
  return [
    p([run("LESSON OF THE DAY — SESSION 58", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("MY FOREIGN COUNTRY — PRESENTING AND COMPARING", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE AMBASSADOR’S SKELETON", [
      bullet([run("1. My country is… Its capital is…", { bold: true, color: C.BLUE })]),
      bullet([run("2. People speak…", { bold: true, color: C.BLUE })]),
      bullet([run("3. People travel by…", { bold: true, color: C.BLUE })]),
      bullet([run("4. The most famous place is…", { bold: true, color: C.BLUE })]),
      bullet([run("5. One surprising thing is…", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    box("TRAVELLING: THERE AND HERE", [
      bullet([run("There (English-speaking countries): ", { bold: true }), run("trains and underground, hourly, fast, machines to check in… and expensive!", { bold: true, color: C.BLUE })]),
      bullet([run("Here (Madagascar): ", { bold: true }), run("taxi-brousse and taxi-be, daily, slower… but cheap, friendly and full of songs!", { bold: true, color: C.BLUE })]),
      bullet([run("Different roads, same joy of travelling. And our island is our treasure — patriotism!", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- S59 — Writing: my dream trip ----------
function ficheS59() {
  const meta = META("Writing: my dream trip in Madagascar",
    "By the end of the lesson, learners will be able to write a coherent paragraph about a dream trip in Madagascar after interviewing classmates.",
    "8 / 8", "interview grid on the board");
  const rows = [
    stepRow(["I. Review", "Duration: ………"],
      [fp("Answer these questions:"),
       fp("1. One There/Here comparison about transport."),
       fp("2. The three measuring questions.")],
      [fp("Answer."),
       fp("E.A.: There, trains are hourly; here, buses are daily! — How far / long / often.")],
      "Individual work", "----"),
    sectionRow("II. NEW LESSON — Duration: ………"),
    stepRow(["1. Warm-up (pre-writing: the mingle!)"],
      [fp("Mingle time! Everybody stands up and interviews classmates about their dream trip in Madagascar: Where do you want to go? How do you get there? How long does it take? What do you want to see? Take notes — three classmates minimum!")],
      [fp("Mingle. Interview. Note."),
       fp("E.A.: Hanta → Nosy Be, by boat, to see the sea!")],
      "Mingle", "Notebooks"),
    stepRow(["2. Presentation"],
      [fp("Today we are going to write « My dream trip in Madagascar ». By the end of this lesson, your dream will stand on paper — the first step of every real trip!")],
      [fp("Listen.")], "Whole-class work", "----"),
    stepRow(["3. Observation"],
      [fp("Plan the paragraph with the collected information: 1. The destination and why (adjectives!). 2. The transport and the road (how far, how long, how often). 3. What I will see and do there. 4. One fady I will respect. Five to seven sentences.")],
      [fp("Plan.")],
      "Guided writing", "Blackboard"),
    stepRow(["4. Analysis (while-writing)"],
      [fp("Write your paragraph with the target vocabulary and grammar: by + transport, one measuring question answered, one ever-word, one traveller’s adjective. Check your production: meaning, grammar, vocabulary, spelling, punctuation!")],
      [fp("Write. Self-check.")],
      "Personalisation technique", "Copy-books"),
    stepRow(["5. Synthesis (peer correction)"],
      [fp("Exchange with a partner. Feedback on the five points (meaning, grammar, vocabulary, spelling, punctuation), then revise your production.")],
      [fp("Exchange. Revise.")], "Peer correction", "----"),
    stepRow(["6. Practice (post-writing)"],
      [fp("Read your dream trip to the class! The class listens and asks questions for further information: How often do the boats leave? What will you eat there?")],
      [fp("Read. Ask. Answer."),
       pAns("E.A.: My dream trip is Nosy Be. It is a popular island… — Question: How do you get there? — By taxi-brousse to Ankify, then by boat!",
        ["then by boat!"], { size: SZ.FICHE })],
      "Whole-class work", "----"),
    stepRow(["III. Evaluation", "Duration: ………"],
      [fp("1. Copy your corrected paragraph."),
       fp("2. Underline: the transport, the adjective, the ever-word.")],
      [fp("Copy. Underline.")],
      "Individual work", "----"),
  ];
  return fiche(59, TOTAL, meta, rows, "s59");
}
function lessonS59() {
  return [
    p([run("LESSON OF THE DAY — SESSION 59", { bold: true, color: COLOR, size: 28 })], { center: true, after: 60 }),
    p([run("THE WRITER’S RECIPE — MY DREAM TRIP", { bold: true, size: SZ.TITLE, color: COLOR })], { center: true, after: 140 }),
    box("THE DREAM TRIP PLAN", [
      bullet([run("1. The destination + why: ", { bold: true }), run("My dream trip is the Isalo park, because it is wild and amazing.", { bold: true, color: C.BLUE })]),
      bullet([run("2. The road: ", { bold: true }), run("I will go by taxi-brousse; it is about 700 km and it takes two days. The buses leave daily.", { bold: true, color: C.BLUE })]),
      bullet([run("3. There: ", { bold: true }), run("I will walk in the canyons and swim in the natural pool.", { bold: true, color: C.BLUE })]),
      bullet([run("4. The respect: ", { bold: true }), run("Wherever I go, I will ask about the local fady first.", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
    p("", { after: 60 }),
    p([run("My model paragraph:", { bold: true })], { after: 50 }),
    p("My dream trip in Madagascar is Nosy Be. It is a popular island with warm water and the smell of ylang-ylang. First, I will take the taxi-brousse to Ankify — it takes about one day, and the buses leave daily. Then I will cross by boat. There, I will visit Mont Passot, swim with my cousins and eat fresh fish. Whenever I meet the people of the island, I will ask about the fady of the sacred lakes, because a good traveller respects his hosts. One day, this dream will come true!", { after: 80 }),
    box("THE FIVE-POINT CHECK", [
      bullet([run("Meaning ✓ Grammar ✓ Vocabulary ✓ Spelling ✓ Punctuation ✓", { bold: true, color: C.BLUE })], { after: 20 }),
    ]),
  ];
}

// ---------- grande leçon d'unité ----------
function bigLesson() {
  return [
    p([run("THE BIG LESSON — UNIT 7", { bold: true, color: "FFFFFF", size: 30 })],
      { center: true, shade: COLOR, after: 160 }),
    sub("1. The transport"),
    bullet([run("by taxi-brousse, by plane, by train, by pirogue — but ON foot!", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("2. The traveller’s adjectives"),
    bullet([run("popular, wild, polluted — Isalo is wild; Foulpointe is popular.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("3. The measuring questions"),
    bullet([run("How far is it? (km) — How long does it take? (hours) — How often do the buses leave? (hourly, daily, weekly…).", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("4. The traveller’s tool box"),
    bullet([run("What’s the best/worst way to get to…? — in advance, check in, go through security, heavy traffic.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("5. The little grammar tools"),
    bullet([run("whenever (every time that), wherever (in every place that); another / the other / others.", { bold: true, color: C.BLUE })], { after: 100 }),
    sub("6. The respectful traveller"),
    bullet([run("taboo (fady!), superstition, sacred — It is forbidden to… / You mustn’t… Ask first: Is there a fady here?", { bold: true, color: C.BLUE })]),
  ];
}

// ---------- exercices corrigés ----------
function exercises() {
  return [
    p([run("EXERCISES — UNIT 7 (with answers)", { bold: true, color: COLOR, size: 30 })], { center: true, after: 160 }),
    pr([run("Exercise 1. ", { bold: true }), run("By or on? 1. We travel … taxi-brousse. 2. She goes … plane. 3. They walk … foot. 4. He crosses … pirogue.")]),
    pAns("Answers: 1. by. 2. by. 3. on. 4. by.", ["on"]),
    p("", { after: 80 }),
    pr([run("Exercise 2. ", { bold: true }), run("The right question: 1. … is it? — 350 km. 2. … does it take? — Eight hours. 3. … do the buses leave? — Daily!")]),
    pAns("Answers: 1. How far. 2. How long. 3. How often.", ["How often"]),
    p("", { after: 80 }),
    pr([run("Exercise 3. ", { bold: true }), run("The -ly adverb: 1. every hour → ? 2. every day → ? 3. every week → ? 4. every month → ?")]),
    pAns("Answers: 1. hourly. 2. daily. 3. weekly. 4. monthly.", ["hourly"]),
    p("", { after: 80 }),
    pr([run("Exercise 4. ", { bold: true }), run("Whenever, wherever, another or the other? 1. … you go, smile! 2. … I travel, I take water. 3. This bus is full — take … one, they leave hourly. 4. Of the two roads, take … one: this one is flooded.")]),
    pAns("Answers: 1. Wherever. 2. Whenever. 3. another. 4. the other.", ["Wherever"]),
    p("", { after: 80 }),
    pr([run("Exercise 5. ", { bold: true }), run("On the text: 1. How long does the RN7 trip take? 2. One inferred feeling of Naina, with the clue. 3. Give one prohibition sentence for a sacred place.")]),
    pAns("Answers: 1. Three days. 2. He was amazed — clue: silent for two hours, face on the window. 3. You mustn’t enter the sacred forest with shoes. / It is forbidden to point at the tomb.", ["face on the window"]),
  ];
}

// ---------- révision ----------
function revision() {
  return [
    B.bookmarkTitle("s60", "SESSION 60 / 88", { bold: true, size: 28, after: 60 }),
    p([run("REVISION — UNIT 7: TRAVELLING IN MADAGASCAR", { bold: true, size: 26 })], { center: true, after: 140 }),
    p([run("Now answer:", { bold: true })], { after: 80 }),
    p("1. Four means of transport with by — and the exception!"),
    pAns("E.A.: by bus, by plane, by train, by pirogue — on foot!", ["on foot!"]),
    p("2. The three traveller’s adjectives, with one place each."),
    pAns("E.A.: popular (Foulpointe), wild (Masoala), polluted (the city centre).", ["wild (Masoala)"]),
    p("3. The three measuring questions."),
    pAns("E.A.: How far is it? How long does it take? How often do the buses leave?", ["How far is it?"]),
    p("4. Every hour → ? every day → ? every week → ?"),
    pAns("E.A.: hourly, daily, weekly.", ["hourly, daily, weekly"]),
    p("5. The big question to ask your road."),
    pAns("E.A.: What’s the best way to get to Tana from here?", ["the best way to get to"]),
    p("6. The airport chain, in order."),
    pAns("E.A.: buy in advance → check in → go through security → fly!", ["go through security"]),
    p("7. Whenever or wherever: … you travel, respect the fady; … you go, people smile."),
    pAns("E.A.: Whenever — wherever.", ["Whenever — wherever"]),
    p("8. Another, the other or others: take … bus (one more); some fly, … prefer the road."),
    pAns("E.A.: another — others.", ["another — others"]),
    p("9. Two ways to express prohibition at a sacred place."),
    pAns("E.A.: It is forbidden to enter. / You mustn’t point at the tomb.", ["You mustn’t"]),
    p("10. In the dialogue: how far is Morondava, how long by road, how often do the taxis-brousse leave?"),
    pAns("E.A.: 700 km — about 15 hours — daily!", ["about 15 hours"]),
  ];
}

// ---------- test ----------
function testPaper() {
  return [
    B.bookmarkTitle("s61", "SESSION 61 / 88", { bold: true, size: 28, after: 60 }),
    p([run("T10 TEST PAPER — UNIT 7: TRAVELLING IN MADAGASCAR", { bold: true, size: 26 })], { center: true, after: 100 }),
    pr([run("Duration: ………        ", { bold: true }), run("Total: 20 points", { bold: true })], { center: true, after: 160 }),
    pr([run("Exercise 1 (4 points). ", { bold: true }), run("Complete with by or on: 1. We go to Toamasina … bus. 2. She travels … plane. 3. The fishermen go … pirogue. 4. I go to school … foot.")]),
    p("", { after: 120 }),
    pr([run("Exercise 2 (4 points). ", { bold: true }), run("Write the question: 1. …? — It’s 570 kilometres. 2. …? — It takes twelve hours. 3. …? — They leave daily. 4. …? — The best way is the taxi-brousse.")]),
    p("", { after: 120 }),
    pr([run("Exercise 3 (4 points). ", { bold: true }), run("Choose: 1. (Whenever / Wherever) I am tired, I sleep in the bus. 2. (Whenever / Wherever) you go in the island, say hello. 3. This seat is broken — take (another / others) one. 4. Some travellers fly; (the other / others) take the road.")]),
    p("", { after: 120 }),
    pr([run("Exercise 4 (4 points). ", { bold: true }), run("Answer: 1. Give the airport chain (three steps). 2. One sentence with heavy traffic. 3. One prohibition sentence for a sacred lake. 4. Why does a responsible traveller ask about the fady?")]),
    p("", { after: 120 }),
    pr([run("Exercise 5 (4 points). ", { bold: true }), run("Write a paragraph (5 sentences) about your dream trip in Madagascar: the destination + one adjective, the transport, one measuring question answered, one ever-word, one fady you will respect.")]),
    p("", { after: 140 }),
    p([run("ANSWER KEY", { bold: true, size: SZ.SUB, color: C.PINK })], { center: true, after: 120 }),
    pAns("Ex.1: by — by — by — on. (1 pt each)", ["by — by — by — on"]),
    pAns("Ex.2: How far is it? — How long does it take? — How often do the buses leave? — What’s the best way to get there? (1 pt each)", ["How long does it take?"]),
    pAns("Ex.3: Whenever — Wherever — another — others. (1 pt each)", ["Whenever — Wherever"]),
    pAns("Ex.4: in advance → check in → go through security. — Leave early: there is heavy traffic in the morning! — It is forbidden to swim in the sacred lake. — Because respecting the hosts and the ancestors is the first rule of travelling. (1 pt each)", ["in advance → check in"]),
    pAns("Ex.5 (model): My dream trip is the Isalo park, because it is wild. I will go by taxi-brousse. It is about 700 kilometres from Tana. The buses leave daily. Wherever I go, I will ask about the local fady first! (4 pts: adjective 1, transport 1, measure 1, ever-word + fady 1)", ["because it is wild"]),
  ];
}

module.exports = function unit7() {
  return [
    ...opening(), pageBreak(),
    ...ficheS52(), pageBreak(), ...lessonS52(), pageBreak(),
    ...ficheS53(), pageBreak(), ...lessonS53(), pageBreak(),
    ...ficheS54(), pageBreak(), ...lessonS54(), pageBreak(),
    ...ficheS55(), pageBreak(), ...lessonS55(), pageBreak(),
    ...ficheS56(), pageBreak(), ...lessonS56(), pageBreak(),
    ...ficheS57(), pageBreak(), ...lessonS57(), pageBreak(),
    ...ficheS58(), pageBreak(), ...lessonS58(), pageBreak(),
    ...ficheS59(), pageBreak(), ...lessonS59(), pageBreak(),
    ...bigLesson(), pageBreak(),
    ...exercises(), pageBreak(),
    ...revision(), pageBreak(),
    ...testPaper(), pageBreak(),
    ...iCan("UNIT 7", COLOR, [
      "I can name the means of transport: by taxi-brousse, by plane, on foot.",
      "I can describe places: popular, wild, polluted.",
      "I can ask: How far? How long? How often?",
      "I can use the frequency adverbs: hourly, daily, weekly.",
      "I can ask for the best way to get to a place.",
      "I can use the airport words: in advance, check in, go through security.",
      "I can use whenever, wherever and the other family.",
      "I can talk about taboos and express prohibition with respect.",
      "I can present a foreign country and compare it with Madagascar.",
      "I can write about my dream trip in Madagascar!",
    ], "NEXT STOP → UNIT 8: AT THE RESTAURANT!"),
  ];
};
module.exports.COLOR = COLOR;
module.exports.SHADE = SHADE;
module.exports.AUDIO = AUDIO;
