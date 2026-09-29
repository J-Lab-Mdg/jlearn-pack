// data-lh6.js — LOHAHEVITRA VI : NY VAKOKA SY NY HAREM-PIRENENA (S26-S29) — Tantara T5
// Loharano : PE T5 (tak. 151-154) sy FRP T5 (LFK 6-a → 6-g)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "VI — Ny vakoka sy ny harem-pirenena eto Madagasikara";
const FAHENDRENA = "Fanajana ny fananana iombonana";

const seances = [

// ============================================================ SEHO 26
{
  numero: 26, total: 30, lohahevitra: LH,
  titre: "Ny vakoka : famaritana sy karazany",
  tanjona: "mamaritra ny atao hoe vakoka sy mitanisa ireo karazany",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fandinihana sary ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 6-a)",
  fitaovana: "Sary vakoka ; lahatsoratra",
  image: "images/img_s26.png",
  imageLegende: "Vakoka malagasy : rova, aloalo, tsangambato sy ny hira gasy",
  famerenana: {
    qa: [
      { q: "Tamin'ny T4 : inona no atao hoe vakoka ?", ra: "Ireo lova navelan'ny razana." },
      { q: "Omeo ohatra iray amin'ny vakoka fantatrao.", ra: "Ohatra : ny Rovan'Ambohimanga, ny kabary, ny hira gasy…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Inona avy ireo zavatra tranainy na fomba nolovantsika tamin'ny razana eto amin'ny faritra misy antsika ? »",
    ],
    mpianatra: "Mitanisa araka ny faritra misy azy.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hamaritra lalindalina kokoa ny vakoka sy ireo karazany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny famaritana ny mpampianatra ary mampiseho sary vakoka samihafa : mitarika ny mpianatra hanasokajy azy ho hita maso sy tsy hita maso.",
    mpianatra: "Mandinika ny sary ary manasokajy.",
    technique: "Fandinihana sary sy fanasokajiana",
    support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe vakoka ?", ra: "Akora na fitaovana tranainy mirakitra ny maha izy azy ny firenena sy ny vahoaka mbamin'ny tantarany, ka zary harem-pirenena sy rakitra sarobidy tehirizina ho fantatry ny taranaka mifandimby." },
      { q: "Tanisao vakoka hita maso.", ra: "Tsangambato, trano manan-tantara, tsena tranainy, fiangonana manan-tantara, rova, aloalo, fasan'ny mpanjaka, fitaovana tranainy…" },
      { q: "Tanisao vakoka tsy hita maso.", ra: "Ny kabary, ny hira gasy sy ny vakodrazana, ny fomba amam-panao, ny angano sy ny ohabolana." },
      { q: "Nahoana no tehirizina ny vakoka ?", ra: "Satria izy no mitahiry ny tantara sy ny maha Malagasy ka tokony ho fantatry ny taranaka mifandimby." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sary sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny vakoka dia lova mirakitra ny maha izy azy ny firenena sy ny tantarany ; misy vakoka hita maso (rova, aloalo, tsangambato…) sy tsy hita maso (kabary, hira gasy, fomba amam-panao…).",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ho « hita maso » na « tsy hita maso » : a) ny aloalo ; b) ny kabary ; d) ny tsangambato ; e) ny angano.",
      items: [],
      corrige: [[{ text: "Hita maso : a, d", cle: true }, { text: " ; " }, { text: "tsy hita maso : b, e", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito ny atao hoe vakoka ary omeo ohatra roa isaky ny karazany.",
      items: [],
      corrige: [[{ text: "Lova tranainy mirakitra ny maha izy azy ny firenena sy ny tantarany", cle: true }, { text: " ; hita maso : " }, { text: "rova, aloalo…", cle: true }, { text: " ; tsy hita maso : " }, { text: "kabary, hira gasy…", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["vakoka", "hita maso", "tsy hita maso", "rova", "aloalo"],
    sections: [
      {
        titre: "1. Famaritana ny vakoka",
        paras: [
          "Ny vakoka dia akora na fitaovana tranainy mirakitra ny maha izy azy ny firenena sy ny vahoaka mbamin'ny tantarany, ka zary harem-pirenena sy rakitra sarobidy tehirizina ho fantatry ny taranaka mifandimby.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo karazana vakoka",
        paras: [],
        puces: [
          "Vakoka hita maso : tsangambato, trano manan-tantara, tsena tranainy, fiangonana manan-tantara, rova, aloalo, fasan'ny mpanjaka, fitaovana tranainy sy ireo zavatra sarobidy tehirizina…",
          "Vakoka tsy hita maso : ny kabary, ny hira gasy sy ny vakodrazana, ny fomba amam-panao, ny angano, ny ohabolana…",
        ],
      },
      {
        titre: "3. Ny lanjan'ny vakoka",
        paras: [
          "Ny vakoka no mampiavaka ny firenena sy mitahiry ny tantarany : very izy dia very koa ny ampahany amin'ny maha Malagasy antsika.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny Rovan'Ambohimanga dia voasoratra ao amin'ny lisitry ny lova iraisam-pirenena (UNESCO) nanomboka tamin'ny 2001 : vakoka malagasy eken'izao tontolo izao izy io.",
      "Fanontaniana : Inona no dikan'ny maha voasoratra ny Rovan'Ambohimanga ao amin'ny lisitry ny UNESCO ?",
      "Valiny : Ekena fa manan-danja ho an'ny olombelona rehetra izy ka arovana manokana.",
    ],
  },
  rakibolana: [
    { mg: "Vakoka", fr: "Patrimoine" },
    { mg: "Aloalo", fr: "Poteau funéraire sculpté" },
    { mg: "Tsangambato", fr: "Pierre levée, stèle" },
    { mg: "Vakodrazana", fr: "Arts traditionnels" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Tanisao vakoka hita maso efatra.",
      items: [],
      corrige: [[{ text: "Tsangambato, rova, aloalo, fasan'ny mpanjaka (na trano/fiangonana manan-tantara, tsena tranainy…)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny kabary dia vakoka tsy hita maso. b) Ny vakoka dia zavatra vaovao. d) Ny aloalo dia hita any amin'ny faritra atsimo.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : lova tranainy avy amin'ny razana izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa : inona ny vakoka misy eo amin'ny faritra misy anao ary nahoana izy no sarobidy ?",
      items: [],
      corrige: [[{ text: "Valiny malalaka araka ny faritra — asongadina ny anaran'ny vakoka sy ny antony (mitahiry ny tantara, mampiavaka ny faritra)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 27
{
  numero: 27, total: 30, lohahevitra: LH,
  titre: "Ny harem-pirenena sy ny tombontsoa azo aminy",
  tanjona: "mamaritra ny harem-pirenena sy manazava ny tombontsoa azo amin'ny fikolokoloana azy",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fifanakalozan-kevitra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 6-b, 6-e)",
  fitaovana: "Sary ; lahatsoratra",
  image: "images/img_s27.png",
  imageLegende: "Ny tsingin'ny Bemaraha : harem-pirenena malagasy manintona ny mpizaha tany",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe vakoka ?", ra: "Lova tranainy mirakitra ny maha izy azy ny firenena sy ny tantarany." },
      { q: "Tanisao karazana vakoka roa.", ra: "Hita maso (rova, aloalo…) sy tsy hita maso (kabary, hira gasy…)." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Nahoana no maro ny vahiny tonga mitsidika ny Rovan'Ambohimanga sy ny tsingin'ny Bemaraha ? Inona no azon'ny firenena amin'izany ? »",
    ],
    mpianatra: "Mamaly : mitondra vola sy asa ny fizahantany.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny harem-pirenena sy ny tombontsoa azo amin'ny fikolokoloana azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny famaritana sy ny tahirin-kevitra ny mpampianatra ary mitarika fifanakalozan-kevitra : inona no tombontsoa azo amin'ny fizahantany ? Inona kosa no tokony hitandremana ?",
    mpianatra: "Mamaky, mamaly ary mifanakalo hevitra.",
    technique: "Famakiana lahatsoratra sy fifanakalozan-kevitra",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe harem-pirenena ?", ra: "Fananana azo tsapain-tanana na tsia, mamaritra sy mampiavaka ny faritra na ny kolontsaina : ny tany, ny ala, ny rano, ny harena an-kibon'ny tany, ny vakoka. Ohatra : ny tsingin'ny Bemaraha sy ny sova." },
      { q: "Inona ny tombontsoa azo amin'ny fikolokoloana azy ?", ra: "Mampiroborobo ny fizahantany (ara-kolontsaina, an-drenivohitra, ambanivohitra) ka mampiditra vola vahiny, mamorona asa ary mampalaza ny firenena." },
      { q: "Iza koa no mahazo tombony amin'ny fizahantany ?", ra: "Ny mpanao asa tanana malagasy : ny vahiny no tena mividy ny vokatra asa tanana." },
      { q: "Inona kosa no tokony hitandremana ?", ra: "Ny fanondranana antsokosoko ny biby sy ny zavamaniry (sokatra, bibilava…) ary ny fanararaotana ny zaza — tsy azo atakalo vola ny voninahitry ny firenena." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny harem-pirenena dia ny tany, ny ala, ny rano, ny harena an-kibon'ny tany ary ny vakoka ; ny fikolokoloana azy dia mampiroborobo ny fizahantany ka mampiditra vola sy mamorona asa, saingy ilaina ny fitandremana amin'ny fanararaotana.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Tanisao tombontsoa telo azo amin'ny fikolokoloana ny vakoka sy ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Mampiroborobo ny fizahantany ; mampiditra vola vahiny ; mamorona asa (na : mampalaza ny firenena, mampandroso ny faritra)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito ny harem-pirenena ary omeo ohatra roa.",
      items: [],
      corrige: [[{ text: "Fananana azo tsapain-tanana na tsia, mamaritra sy mampiavaka ny faritra na ny kolontsaina", cle: true }, { text: " ; ohatra : " }, { text: "ny tsingin'ny Bemaraha, ny sova (na ny ala, ny rova…)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["harem-pirenena", "tsingin'ny Bemaraha", "fizahantany", "asa tanana"],
    sections: [
      {
        titre: "1. Famaritana ny harem-pirenena",
        paras: [
          "Ny harem-pirenena dia fananana azo tsapain-tanana na tsia, mamaritra sy mampiavaka ny faritra na ny kolontsaina : ny tany, ny ala, ny rano sy ny ranomasina, ny harena an-kibon'ny tany ary ny vakoka. Harem-pirenena, ohatra, ny tsingin'ny Bemaraha sy ny sova.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny tombontsoa azo amin'ny fikolokoloana azy",
        paras: [],
        puces: [
          "Mampiroborobo ny fizahantany : ara-kolontsaina, an-drenivohitra ary ambanivohitra (Ambohimanga, Ambohidratrimo, Mantasoa, Ampefy…).",
          "Mampiditra vola vahiny sy mamorona asa ho an'ny mponina (mpitantana toerana, mpanao asa tanana, mpitatitra…).",
          "Mampalaza ny firenena : ny ala sy ny biby tsy fahita any ivelany no manintona ny vahiny.",
        ],
      },
      {
        titre: "3. Ny fitandremana ilaina",
        paras: [
          "Misy anefa ny fanararaotana tokony hotoherina : ny fanondranana antsokosoko ny biby sarobidy (sokatra, bibilava…) sy ny fanararaotana ny zaza. Tsy azo atakalo vola ny voninahitry ny firenena.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Isan'ny tombony lehibe ho antsika, ankoatry ny vola vahiny miditra, ny fitiavan'izy ireny ny asa tanana malagasy. » (Nalaina tao amin'ny Madagascar Tribune, naverin'ny FRP T5, LFK 6-e.)",
      "Fanontaniana : Inona no tombony azon'ny mpanao asa tanana amin'ny fizahantany ?",
      "Valiny : Ny vahiny no tena mividy ny vokatra asa tanana ka ivelomany.",
    ],
  },
  rakibolana: [
    { mg: "Harem-pirenena", fr: "Richesses nationales" },
    { mg: "Fizahantany", fr: "Tourisme" },
    { mg: "Asa tanana", fr: "Artisanat" },
    { mg: "Antsokosoko", fr: "En contrebande" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny tsingin'ny Bemaraha dia harem-pirenena. b) Tsy mampiditra vola ny fizahantany. d) Ny vahiny no tena mividy ny asa tanana malagasy. e) Azo aondrana antsokosoko ny sokatra.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : mampiditra vola vahiny izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : voararan'ny lalàna izany", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao karazana harem-pirenena efatra.",
      items: [],
      corrige: [[{ text: "Ny tany, ny ala, ny rano/ranomasina, ny harena an-kibon'ny tany (na ny vakoka)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : ahoana no ampandrosoan'ny fizahantany ny faritra iray ?",
      items: [],
      corrige: [[{ text: "Mampiditra vola sy mamorona asa ho an'ny mponina izy ; mandrisika ny fanatsarana ny lalana sy ny toeram-pandraisam-bahiny", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 28
{
  numero: 28, total: 30, lohahevitra: LH,
  titre: "Ny lalàna sy ny fepetra miaro ny vakoka sy ny harem-pirenena",
  tanjona: "mitanisa ireo lalàna sy fepetra miaro ny vakoka sy ny harem-pirenena",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fanontaniana/valiny ; asa an-tarika",
  fanovozanKevitra: DOC + " (LFK 6-d, 6-f)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s28.png",
  imageLegende: "Ny tranom-bakoka : toerana itehirizana sy iarovana ny vakoka",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe harem-pirenena ?", ra: "Fananana azo tsapain-tanana na tsia mamaritra sy mampiavaka ny faritra na ny kolontsaina." },
      { q: "Inona ny tombontsoa azo amin'ny fikolokoloana azy ?", ra: "Mampiroborobo ny fizahantany, mampiditra vola, mamorona asa." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Raha misy manimba na mangalatra ny vakoka, inona no tokony hatao ? Misy ve ny lalàna miaro azy ? »",
    ],
    mpianatra: "Mamaly araka ny fahalalany.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo lalàna sy fepetra miaro ny vakoka sy ny harem-pirenena.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra : misy lalàna miaro ny vakoka ary misy fepetra mivantana enti-mikojakoja azy. Mitarika ny mpianatra hanavaka ny lalàna sy ny fepetra.",
    mpianatra: "Mamaky sy manamarika.",
    technique: "Famakiana lahatsoratra arahina fanontaniana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Misy ve ny lalàna miaro ny vakoka sy ny harem-pirenena ?", ra: "Eny : ny lalàna 82-029 momba ny fiarovana ny vakoka nasionaly ; ny didim-panjakana 91-017 momba ny fiarovana sy ny fikajiana ny harem-pirenena ; ny lalàna 56-1106 momba ny fiarovana ny vakoka sy ny toerana manan-tantara." },
      { q: "Inona avy ny fepetra mivantana enti-miaro ny vakoka ?", ra: "Fametrahana azy anaty tranom-bakoka ; fiarovana amin'ny hamandoana, ny vovoka sy ny rivotra ; fiarovana amin'ny afo, ny mpangalatra ary ny bibikely ; fampitomboana ny isan'ny vakoka arovana." },
      { q: "Nahoana no ilaina ny tranom-bakoka ?", ra: "Satria ao no voatahiry sy voaaro tsara ny vakoka ary afaka mitsidika sy mianatra ny rehetra." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : misy lalàna miaro ny vakoka (82-029, 91-017, 56-1106…) ary misy fepetra mivantana (tranom-bakoka, fiarovana amin'ny afo sy ny hamandoana sy ny mpangalatra, fampitomboana ny isa).",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny lalàna 82-029 dia miaro ny … nasionaly ; ny vakoka dia apetraka anaty tranom-… mba ho voaaro.",
      items: [],
      corrige: [[{ text: "vakoka", cle: true }, { text: " ; " }, { text: "bakoka", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao fepetra efatra enti-miaro sy mikojakoja ny vakoka.",
      items: [],
      corrige: [[{ text: "Fametrahana anaty tranom-bakoka ; fiarovana amin'ny hamandoana sy ny vovoka ; fiarovana amin'ny afo sy ny mpangalatra ary ny bibikely ; fampitomboana ny isan'ny vakoka arovana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["lalàna 82-029", "tranom-bakoka", "fiarovana", "fikojakojana"],
    sections: [
      {
        titre: "1. Ireo lalàna miaro ny vakoka sy ny harem-pirenena",
        paras: [],
        puces: [
          "Ny lalàna 82-029 : momba ny fiarovana ny vakoka nasionaly.",
          "Ny didim-panjakana 91-017 : momba ny fiarovana, ny fikojakojana sy ny fikajiana ny harem-pirenena.",
          "Ny lalàna 56-1106 : momba ny fiarovana ny vakoka sy ny toerana manan-tantara (lafiny kolontsaina sy siantifika).",
        ],
      },
      {
        titre: "2. Ireo fepetra mivantana",
        paras: [],
        puces: [
          "Fametrahana ny vakoka anaty tranom-bakoka.",
          "Fiarovana azy amin'ny hamandoana, ny vovoka ary ny rivotra.",
          "Fiarovana azy amin'ny afo, ny mpangalatra ary ny bibikely isan-karazany.",
          "Fampitomboana ny isan'ny vakoka sy ny toerana arovana.",
        ],
      },
      {
        titre: "3. Ny tanjona",
        paras: [
          "Ny lalàna sy ny fepetra dia samy mikendry ny hampaharitra ny vakoka sy ny harem-pirenena mba ho hitan'ny taranaka mifandimby sy hampiroborobo ny toekarena amin'ny fizahantany.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny tranom-bakoka (mozea) dia toerana itehirizana sy anehoana ny vakoka : ao ny mpianatra sy ny vahiny no afaka mahita sy mianatra ny tantaram-pirenena.",
      "Fanontaniana : Inona ny anjara asan'ny tranom-bakoka ?",
      "Valiny : Mitahiry sy miaro ny vakoka ary mampianatra ny vahoaka sy ny taranaka ny tantarany.",
    ],
  },
  rakibolana: [
    { mg: "Lalàna", fr: "Loi" },
    { mg: "Didim-panjakana", fr: "Décret" },
    { mg: "Tranom-bakoka", fr: "Musée" },
    { mg: "Fikojakojana", fr: "Entretien" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Tsy misy lalàna miaro ny vakoka eto Madagasikara. b) Ny tranom-bakoka dia miaro ny vakoka. d) Ilaina ny fiarovana ny vakoka amin'ny afo sy ny hamandoana. e) Ny lalàna 82-029 dia momba ny fiarovana ny vakoka nasionaly.",
      items: [],
      corrige: [[{ text: "a) Diso : misy (82-029, 91-017, 56-1106…)", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao zavatra telo tokony hiarovana ny vakoka (loza mety hanimba azy).",
      items: [],
      corrige: [[{ text: "Ny afo, ny hamandoana sy ny vovoka, ny mpangalatra (na ny bibikely, ny rivotra)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana no ilaina ny lalàna miaro ny vakoka ?",
      items: [],
      corrige: [[{ text: "Satria fananana iombonana ny vakoka ka tsy azon'ny tsirairay simbana na amidy ; ny lalàna no manasazy izay manimba azy", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 29
{
  numero: 29, total: 30, lohahevitra: LH,
  titre: "Ny anjara asan'ny tsirairay amin'ny fiarovana ny vakoka",
  tanjona: "manazava ny andraikitry ny tsirairay amin'ny fiarovana ny vakoka sy ny harem-pirenena",
  fahendrena: FAHENDRENA,
  tetika: "Fifanakalozan-kevitra ; asa an-tarika ; tetikasa kely",
  fanovozanKevitra: DOC + " (LFK 6-g)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s29.png",
  imageLegende: "Ny ankizy mandray anjara : fanadiovana sy fambolen-kazo manodidina ny toerana manan-tantara",
  famerenana: {
    qa: [
      { q: "Tanisao lalàna iray miaro ny vakoka.", ra: "Ny lalàna 82-029 (na 91-017, 56-1106)." },
      { q: "Tanisao fepetra roa enti-miaro ny vakoka.", ra: "Fametrahana anaty tranom-bakoka ; fiarovana amin'ny afo sy ny hamandoana…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Ny lalàna sy ny fanjakana ihany ve no miaro ny vakoka ? Inona no azontsika mpianatra atao ? »",
    ],
    mpianatra: "Mamaly : manana anjara asa koa isika tsirairay.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny anjara asan'ny tsirairay amin'ny fiarovana ny vakoka sy ny harem-pirenena.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mitarika asa an-tarika ny mpampianatra : samy manangona hetsika azo atao ny tarika (ao an-tokantrano, ao an-tsekoly, ao amin'ny fokontany) ary manolotra tetikasa kely iray ho an'ny kilasy.",
    mpianatra: "Miara-midinika isan-tarika ary manolotra tetikasa.",
    technique: "Asa an-tarika sy tetikasa kely",
    support: "Solaitrabe",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny andraikitry ny olom-pirenena tsirairay ?", ra: "Miaro ny vakoka sy ny harem-pirenena ho fampivoarana ny faritra : tsy mandoro tanety, tsy mandoto na manimba ny vakoka." },
      { q: "Ahoana no andraisana anjara mivantana ?", ra: "Mandray anjara amin'ny fanatsarana sy ny fanadiovana ny toerana fitsangatsanganana sy ny toerana manan-tantara ; mamboly hazo." },
      { q: "Inona koa no azo atao ?", ra: "Mamorona tetikasa fampitomboana ny vakoka sy ny harem-pirenena arovana ; manaja ny lalàna sy ny dinam-piarahamonina." },
      { q: "Inona no azon'ny mpianatra atao ao an-tsekoly ?", ra: "Mitantara sy mampahafantatra ny vakoky ny faritra, mikarakara fitsidihana toerana manan-tantara, tsy manoratra amin'ny rindrina na manimba." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : adidin'ny tsirairay ny miaro ny vakoka — tsy mandoro tanety, tsy mandoto na manimba, mandray anjara amin'ny fanadiovana sy ny tetikasa, manaja ny lalàna sy ny dina. Fananana iombonana ny vakoka ka andraikitra iombonana ny fiarovana azy.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Tanisao asa telo azon'ny mpianatra atao amin'ny fiarovana ny vakoka.",
      items: [],
      corrige: [[{ text: "Tsy manimba na manoratra amin'ny toerana manan-tantara ; mandray anjara amin'ny fanadiovana ; mampahafantatra ny vakoky ny faritra (valiny malalaka)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Amin'ny fehezanteny telo, lazao ny anjara asan'ny tsirairay amin'ny fiarovana ny vakoka sy ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Tsy mandoro tanety ary tsy mandoto na manimba ny vakoka ; mandray anjara amin'ny fanadiovana sy ny tetikasa fampitomboana ; manaja ny lalàna sy ny dinam-piarahamonina", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["anjara asa", "andraikitra", "dina", "fananana iombonana"],
    sections: [
      {
        titre: "1. Ny andraikitry ny olom-pirenena tsirairay",
        paras: [
          "Manana andraikitra amin'ny fiarovana ny vakoka sy ny harem-pirenena ny olom-pirenena tsirairay, ho fampivoarana ny isam-paritra :",
        ],
        puces: [
          "Tsy mandoro tanety ; tsy mandoto na manimba ny vakoka sy ny harem-pirenena.",
          "Mandray anjara amin'ny fanatsarana sy ny fanadiovana ny toerana fitsangatsanganana sy ny toerana manan-tantara.",
          "Mamorona tetikasa fampitomboana ny vakoka sy ny harem-pirenena arovana.",
          "Manaja ny lalàna sy ny dinam-piarahamonina.",
        ],
      },
      {
        titre: "2. Ny anjara asan'ny mpianatra",
        paras: [],
        puces: [
          "Mianatra sy mampahafantatra ny vakoky ny faritra misy azy.",
          "Tsy manoratra amin'ny rindrina, tsy manimba ny toerana manan-tantara.",
          "Mandray anjara amin'ny fanadiovana sy ny fambolen-kazo.",
        ],
      },
      {
        titre: "3. Fananana iombonana, andraikitra iombonana",
        paras: [
          "Ny vakoka sy ny harem-pirenena dia fananan'ny Malagasy rehetra : ny fiarovana azy dia mampandroso ny faritra sy ny firenena ary mampaharitra ny lova ho an'ny taranaka.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny dina dia fifanekena ifanaovan'ny mponina ao amin'ny fokonolona : mamaritra ny tokony hatao sy ny sazy ho an'izay mandika azy. Ampiasaina amin'ny fiarovana ny ala sy ny vakoka izy any amin'ny faritra maro.",
      "Fanontaniana : Inona ny dina ary inona ny anjara asany amin'ny fiarovana ny vakoka ?",
      "Valiny : Fifanekena ifanaovan'ny mponina izy ; mamaritra ny fitsipika sy ny sazy ka miaro ny vakoka sy ny ala eo an-toerana.",
    ],
  },
  rakibolana: [
    { mg: "Andraikitra", fr: "Responsabilité" },
    { mg: "Dina", fr: "Convention communautaire" },
    { mg: "Fananana iombonana", fr: "Bien commun" },
    { mg: "Tetikasa", fr: "Projet" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny fanjakana irery no miaro ny vakoka. b) Ny fandoroana tanety dia manimba ny harem-pirenena. d) Ny dina dia fifanekena ifanaovan'ny mponina. e) Azo soratana ny rindrin'ny toerana manan-tantara.",
      items: [],
      corrige: [[{ text: "a) Diso : adidin'ny tsirairay koa izany", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : fanimbana vakoka izany", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao asa telo ataon'ny olom-pirenena tsara amin'ny fiarovana ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Tsy mandoro tanety ; mandray anjara amin'ny fanadiovana sy ny fambolen-kazo ; manaja ny lalàna sy ny dina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa ny tetikasa kely iray azon'ny kilasinao atao hiarovana ny vakoka eo amin'ny faritra misy anao.",
      items: [],
      corrige: [[{ text: "Valiny malalaka — ohatra : fitsidihana sy fanadiovana toerana manan-tantara iray ; famoronana takelaka fampahafantarana ny vakoky ny faritra", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
