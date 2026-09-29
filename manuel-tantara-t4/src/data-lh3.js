// data-lh3.js — LOHAHEVITRA III : FAMPIDIRANA NY FIANARANA TANTARA (S8-S10) — Tantara T4
// Loharano : PE T4 sy FRP T4 (LFK 3-a → 3-j)
const DOC = "PE Tantara T4 (MEN) sy FRP T4";
const LH = "III — Ny fampidirana ny fianarana tantara";
const FAHENDRENA = "Fivelaran'ny maha-olona, fitiavana miezaka sy mikaroka";

const seances = [

// ============================================================ SEHO 8
{
  numero: 8, total: 27, lohahevitra: LH,
  titre: "Ny angano : famaritana, toetoetrany, ilàna azy",
  tanjona: "mamaritra ny atao hoe angano, mitanisa ny toetoetrany ary milaza ny ilàna azy",
  fahendrena: FAHENDRENA,
  tetika: "Fitantarana angano ; fitrandrahana lahatsoratra ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (FRP T4, LFK 3-a, 3-b, 3-d, 3-e)",
  fitaovana: "Angano roa (Rapeto sy Rasoalao ; Ny ipaohan'ny papango ny akoho) ; solaitrabe",
  image: "images/img_s08.png",
  imageLegende: "Dadabe mitantara angano amin'ny zafikeliny eo amorom-patana",
  famerenana: {
    qa: [
      { q: "Iza no efa nihaino angano tao an-trano ? Iza no nitantara azy ?", ra: "Ny renibe, ny dadabe, ny zoky…" },
      { q: "Ahoana matetika no fiantombohan'ny angano ?", ra: "« Indray andro, hono… », « Nisy, hono… »" },
    ],
    technique: "Fifandimbiasam-pitenenana",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mitantara ny fiandohan'ny anganon'i Rapeto sy Rasoalao ny mpampianatra, avy eo mijanona : « Te-hahalala ny tohiny ve ianareo ? »",
    ],
    mpianatra: "Mihaino amim-pahalianana ary maniry hahalala ny tohiny.",
    technique: "Fitantarana an-kira",
    support: "Angano",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe angano : ny toetoetrany sy ny ilàna azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny angano « Ny ipaohan'ny papango ny akoho » ny mpampianatra. Mitarika ny mpianatra handinika : ahoana ny fiandohany sy ny fiafarany ? Iza ny mpandray anjara ? Misy anatra ve ?",
    mpianatra: "Mihaino, mamaky indray, mamantatra ny fiandohana (« Tera-dahy, hono, ity papango… ») sy ny mpandray anjara (biby miteny).",
    technique: "Fitrandrahana lahatsoratra",
    support: "Angano (jereo ny tahirin-kevitra)",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe angano ?", ra: "Tantara noforonina ifandovana am-bava, mifono anatra, tsy voatery ho nisy marina." },
      { q: "Ahoana no ahafantarana ny angano ?", ra: "Miantomboka amin'ny « Indray andro, hono… » ary mifarana amin'ny « Angano, angano, arira, arira… » ; tsy fantatra ny mpamorona azy ; mety ho biby miteny ny mpandray anjara." },
      { q: "Inona no ilàna ny angano ?", ra: "Fitaizana sy fanabeazana (misy anatra), fialam-boly, ary fampitana ny fahendren'ny Ntaolo." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Angano roa",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny angano dia tantara noforonina, ifandovana am-bava, mifono anatra ; natao ho fitaizana sy fialam-boly.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Matetika ny angano dia miantomboka amin'ny hoe « … » ary mifarana amin'ny hoe « … ».",
      items: [],
      corrige: [[{ text: "« Indray andro, hono… »", cle: true }, { text: " ; " }, { text: "« Angano, angano, arira, arira… »", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny iray ny atao hoe angano.",
      items: [],
      corrige: [[{ text: "Ny angano dia " }, { text: "tantara noforonina ifandovana am-bava, mifono anatra", cle: true }, { text: "." }]],
    },
    {
      consigne: "Omeo antony roa ilàna ny angano.",
      items: [],
      corrige: [[{ text: "Fitaizana sy fanabeazana (misy anatra)", cle: true }, { text: " ; " }, { text: "fialam-boly (na : fampitana ny fahendrena)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["angano", "lovan-tsofina", "anatra", "mpandray anjara", "fialam-boly"],
    sections: [
      {
        titre: "1. Famaritana ny angano",
        paras: [
          "Ny angano dia tantara noforonina, ifandovana am-bava (lovan-tsofina), mifono anatra mandrakariva. Tsy voatery ho nisy marina izy, ary novain'ny taranaka nifandimby taty aoriana.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny toetoetran'ny angano",
        paras: [],
        puces: [
          "Miantomboka amin'ny hoe : « Indray andro, hono… », « Nisy, hono… », « Fahagolan-tany, hono… ».",
          "Mifarana amin'ny hoe : « Izany, hono… », « Angano, angano, arira, arira… ».",
          "Tsy fantatra mazava ny mpamorona azy : nampitaina tamin'ny lovan-tsofina izy.",
          "Ny mpandray anjara dia mety ho olona, biby miteny, hazo, na zavatra mahagaga.",
          "Tsy voalaza mazava ny fotoana sy ny toerana nitrangany.",
        ],
      },
      {
        titre: "3. Ny ilàna ny angano",
        paras: [],
        puces: [
          "Fitaizana sy fanabeazana : misy anatra, fahendrena, fahaiza-miaina.",
          "Fialam-boly : henoina eo amorom-patana rehefa hariva, tantarain'ny renibe na ny zokiolona.",
          "Fahiny, tsy nisy sekoly : ny angano no nanazavana ny zavatra tsy takatry ny saina.",
          "Maneho ny fomba fijerin'ny Malagasy ny tontolo izy ary mamolavola olom-banona.",
        ],
      },
    ],
    tahirinKevitra: [
      "NY IPAOHAN'NY PAPANGO NY AKOHO — « Tera-dahy, hono, ity papango, ka avy ny reniakoho hampivelona azy. Nony efa nifana herinandro izy dia lasa nitsangatsangana, fa nomeny hotaizain'ny akoho ny zanany. Kanjo tratra ela ny papango, ka tezitra ny akoho, dia novonoiny ireo zanany. Rehefa nody ny papango ka hitany fa lany ritra ny zanany, dia tezitra loatra izy ka niady tamin'ny reniakoho. Nony tsy hitany izay hatao, dia nanozona izy hoe : “Hafarako ny taranako hamono ny zanak'ireny reniakoho ireny.” Izany, hono, no ihinanan'ny papango ny akohokely mandraka androany. »",
      "(Nalaina tao amin'ny Anganon'ny Ntaolo, tak. 192 — FRP T4, LFK 3-e.)",
      "Fanontaniana : a) Iza ireo mpandray anjara ? b) Inona no mampiseho fa angano io tantara io ?",
      "Valiny : a) Ny papango sy ny reniakoho (biby). b) Biby miteny sy manao toy ny olona ny mpandray anjara ; miantomboka amin'ny « hono » izy ; manazava zava-misy (ny ipaohan'ny papango ny akoho) amin'ny fomba noforonina.",
    ],
  },
  rakibolana: [
    { mg: "Angano", fr: "Conte" },
    { mg: "Lovan-tsofina", fr: "Tradition orale" },
    { mg: "Anatra", fr: "Leçon de morale" },
    { mg: "Mpandray anjara", fr: "Personnages" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny angano dia tantara …, ifandovana …, ary mifono … mandrakariva.",
      items: [],
      corrige: [[{ text: "noforonina", cle: true }, { text: " ; " }, { text: "am-bava (lovan-tsofina)", cle: true }, { text: " ; " }, { text: "anatra", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Fantatra tsara ny mpamorona ny angano. b) Mety ho biby miteny ny mpandray anjara. d) Natao ho fitaizana ny angano. e) Voalaza mazava foana ny daty nitrangan'ny angano.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tantarao amin'ny fehezanteny roa na telo ny angano iray fantatrao, ary lazao ny anatra fonosiny.",
      items: [],
      corrige: [[{ text: "Valiny malalaka : jerena ny fahaizana mitantara sy ny anatra voalaza (ohatra : Rapeto sy Rasoalao — tsy tokony hanampatra ny hery ; Ikotofetsy sy Imahaka — ny fitaka tsy mahasoa…)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 9
{
  numero: 9, total: 27, lohahevitra: LH,
  titre: "Ny tantara : famaritana sy toetoetrany",
  tanjona: "mamaritra ny atao hoe tantara, mitanisa ny toetoetrany ary manavaka ny tantara amin'ny angano",
  fahendrena: FAHENDRENA,
  tetika: "Asa an-tarika (vondrona telo) ; fitrandrahana lahatsoratra ; fampitahana",
  fanovozanKevitra: DOC + " (FRP T4, LFK 3-f, 3-g, 3-h, 3-i)",
  fitaovana: "Lahatsoratra (Rainandriamampandry ; Andrianampoinimerina) ; solaitrabe",
  image: "images/img_s09.png",
  imageLegende: "Ny tantara dia zava-nisy marina : misy porofo sy daty voafaritra",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe angano ?", ra: "Tantara noforonina, ifandovana am-bava, mifono anatra." },
      { q: "Marina ve ny zava-mitranga ao anaty angano ?", ra: "Tsy voatery : noforonina izy." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Andrianampoinimerina : angano ve izy sa olona nisy marina ? Ahoana no ahafantarantsika izany ? »",
    ],
    mpianatra: "Mamaly araka izay fantany ; misy milaza fa nisy marina izy satria misy ny lapany sy ny taonany.",
    technique: "Fanontaniana an-kira",
    support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe tantara sy ny mampiavaka azy amin'ny angano.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Zaraina vondrona ny mpianatra : ny iray mamaky ny tantaran-dRainandriamampandry, ny iray ny an'Andrianampoinimerina. Mitarika ny mpampianatra : « Misy daty ve ? Misy toerana ve ? Nisy marina ve ireo olona ireo ? »",
    mpianatra: "Mamaky ny lahatsoratra, mitanisa ny daty (1787-1810 ; 16 oktobra 1896) sy ny toerana (Imerina, Toamasina, Antsahamanitra).",
    technique: "Asa an-tarika",
    support: "Lahatsoratra roa",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe tantara ?", ra: "Zava-nisy marina niseho teo amin'ny faritra na firenena iray, tamin'ny fotoana voafaritra." },
      { q: "Inona no mampiavaka ny tantara amin'ny angano ?", ra: "Ny tantara : zava-nisy marina, misy daty sy toerana mazava, misy porofo. Ny angano : noforonina, tsy voafaritra ny fotoana sy ny toerana." },
      { q: "Omeo ohatra iray amin'ny tantara marina.", ra: "Ny nanjakan'Andrianampoinimerina tao Imerina (1787-1810)." },
    ],
    technique: "Fanontaniana / valiny ; fampitahana",
    support: "Lahatsoratra sy fafana fampitahana",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny tantara dia zava-nisy marina, voafaritra ny fotoana sy ny toerana, ary misy porofo ; izany no maha-samy hafa azy amin'ny angano.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. misy daty sy porofo / 2. biby miteny, « hono » — a. angano ; b. tantara.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny iray ny atao hoe tantara.",
      items: [],
      corrige: [[{ text: "Ny tantara dia " }, { text: "zava-nisy marina niseho tamin'ny fotoana sy toerana voafaritra, ary misy porofo", cle: true }, { text: "." }]],
    },
    {
      consigne: "Omeo fahasamihafana roa misy eo amin'ny tantara sy ny angano.",
      items: [],
      corrige: [[{ text: "Ny tantara dia marina ary misy daty/porofo", cle: true }, { text: " ; " }, { text: "ny angano dia noforonina ary tsy voafaritra ny fotoana sy ny toerana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["tantara", "zava-nisy marina", "porofo", "daty", "toerana voafaritra"],
    sections: [
      {
        titre: "1. Famaritana ny tantara",
        paras: [
          "Ny tantara dia zava-nisy marina niseho teo amin'ny faritra iray na firenena iray, nandritra ny fotoana voafaritra. Fanoritsoritana sy fanadihadiana ny fivoaran'ny tranga koa izy.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny toetoetran'ny tantara",
        paras: [],
        puces: [
          "Zava-nisy marina, niseho teo amin'ny fiarahamonina na ny firenena.",
          "Voafaritra mazava ny toerana sy ny fotoana nitrangany.",
          "Misy porofo ara-tantara : taratasy, tsangambato, fitaovana tranainy…",
          "Miova arakaraka ny fotoana sy ny toerana isehoany.",
        ],
      },
      {
        titre: "3. Ny mampiavaka ny tantara amin'ny angano",
        paras: [],
        puces: [
          "Tantara : marina, misy daty, misy toerana, misy porofo. Ohatra : nanjaka tao Imerina i Andrianampoinimerina (1787-1810).",
          "Angano : noforonina, « hono », tsy fantatra ny fotoana sy ny toerana, mety misy biby miteny. Ohatra : Rapeto sy Rasoalao.",
        ],
      },
      {
        titre: "4. Ny tombontsoa entin'ny fahaizana tantara",
        paras: [],
        puces: [
          "Mampahafantatra ny zavatra efa lasa sy ny zava-nisy marina.",
          "Ahalalana ny fivoaran'ny faritra sy ny firenena.",
          "Ahaizana ny tantaran'ireo olo-malaza sy ny asa vitany.",
          "Ahafahana manatsara ny ho avy.",
        ],
      },
    ],
    tahirinKevitra: [
      "RAINANDRIAMAMPANDRY — « Fantatra koa amin'ny anarana hoe Rabezandrina ity lehilahy nampandraiketin-dRanavalona III ny fiarovana an'i Toamasina ity. Izy no mpitari-tafika nanohitra mafy ny Frantsay tao Toamasina, ka nahatonga ny fanaovana sonia fanekena iray tamin'ny volana desambra 1885. Nony resy ny tafika malagasy tamin'ny taona 1895 dia natsoina izy ho minisitry ny atitany. Notifirina ampahibemaso teo Antsahamanitra izy niaraka tamin'ny Printsy Ratsimamanga tamin'ny 16 oktobra 1896. Maty tamin-kerim-po lehibe izy. »",
      "(Nalaina tao amin'ny bokin'i Jeanne Rasoanasy, « Menalamba sy Tanindrazana », tak. 67 — FRP T4, LFK 3-f.)",
      "Fanontaniana : a) Inona avy ireo daty hita ao amin'ny lahatsoratra ? b) Nahoana io lahatsoratra io no tantara fa tsy angano ?",
      "Valiny : a) Desambra 1885 ; 1895 ; 16 oktobra 1896. b) Satria zava-nisy marina izy : misy daty mazava, toerana (Toamasina, Antsahamanitra), olona nisy marina ary porofo an-tsoratra.",
    ],
  },
  rakibolana: [
    { mg: "Tantara", fr: "Histoire" },
    { mg: "Porofo", fr: "Preuve" },
    { mg: "Zava-nisy marina", fr: "Fait réel" },
    { mg: "Olo-malaza", fr: "Personnage célèbre" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny tantara dia zava-nisy … niseho tamin'ny fotoana … ; misy … ara-tantara ; izany no maha-samy hafa azy amin'ny ….",
      items: [],
      corrige: [[{ text: "marina", cle: true }, { text: " ; " }, { text: "voafaritra", cle: true }, { text: " ; " }, { text: "porofo", cle: true }, { text: " ; " }, { text: "angano", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho tantara na angano : a) Rapeto sy Rasoalao ; b) ny nanjakan-dRanavalona III ; d) ny papango sy ny akoho ; e) ny nahafatesan-dRainandriamampandry (1896).",
      items: [],
      corrige: [[{ text: "Angano : " }, { text: "a, d", cle: true }, { text: " ; tantara : " }, { text: "b, e", cle: true }, { text: "." }]],
    },
    {
      points: 2,
      consigne: "Omeo tombontsoa roa azo amin'ny fahaizana tantara.",
      items: [],
      corrige: [[{ text: "Mahafantatra ny lasa ; mahalala ny fivoaran'ny firenena (na : mianatra amin'ny olo-malaza ; manatsara ny ho avy)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 10
{
  numero: 10, total: 27, lohahevitra: LH,
  titre: "Ny loharano fanovozan-kevitra ara-tantara",
  tanjona: "mitanisa sy manavaka ireo loharano fanovozan-kevitra ara-tantara telo karazana",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana zavatra mivaingana ; asa an-tarika ; fanasokajiana",
  fanovozanKevitra: DOC + " (FRP T4, LFK 3-j)",
  fitaovana: "Boky tranainy ; sary fitaovana taloha (lefona, vilany tany) ; solaitrabe",
  image: "images/img_s10.png",
  imageLegende: "Ireo loharano ara-tantara : an-tsoratra, am-bava, moana",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe tantara ?", ra: "Zava-nisy marina, misy porofo, voafaritra ny fotoana sy ny toerana." },
      { q: "Inona no ilaina mba hanaporofoana fa nisy marina ny tranga iray ?", ra: "Porofo : taratasy, zavatra tranainy, fitantaran'ny olona…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampiseho zavatra telo ny mpampianatra : boky tranainy, sarin'ny vilany tany hita tao anaty lava-bato, ary miresaka momba ny tantara notantarain'ny dadabe.",
      "« Samy manampy antsika hahalala ny lasa ve ireto zavatra telo ireto ? »",
    ],
    mpianatra: "Mandinika ary mamaly : eny, samy mitondra vaovao momba ny lasa izy telo.",
    technique: "Fandinihana zavatra mivaingana",
    support: "Boky, sary, fitantarana",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo loharano fanovozan-kevitra ara-tantara : izy ireo no ahafantarantsika ny lasa.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mitarika ny mpianatra hanasokajy : ny boky — soratra ; ny tantaran'i Dadabe — vava ; ny vilany tany — tsy miteny nefa mampianatra antsika. Manome ny anaran'ny sokajy telo ny mpampianatra.",
    mpianatra: "Manasokajy ireo ohatra ary mianatra ny anarany : an-tsoratra, am-bava, moana.",
    technique: "Fanasokajiana",
    support: "Zavatra sy sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona avy ireo loharano ara-tantara telo karazana ?", ra: "Ny tahirin-kevitra an-tsoratra, ny tahirin-kevitra am-bava, ary ny tahirin-kevitra moana." },
      { q: "Omeo ohatra roa amin'ny tahirin-kevitra an-tsoratra.", ra: "Boky, gazety (na taratasy tranainy)." },
      { q: "Nahoana no atao hoe « moana » ny loharano toy ny lefona sy ny vilany tany ?", ra: "Satria tsy miteny izy, nefa dinihina dia mampianatra antsika ny fomba fiainan'ny olona taloha." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sary sy zavatra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : telo karazana ny loharano ara-tantara — an-tsoratra (boky, gazety), am-bava (lovan-tsofina), moana (fitaovana tranainy, taolana, tsangambato).",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : a) gazety tranainy ; b) anganon'ny renibe ; d) lefona hita an-kady.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "an-tsoratra", cle: true }, { text: " ; b) " }, { text: "am-bava", cle: true }, { text: " ; d) " }, { text: "moana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ireo karazana loharano ara-tantara telo ary omeo ohatra iray avy.",
      items: [],
      corrige: [[{ text: "An-tsoratra (boky)", cle: true }, { text: " ; " }, { text: "am-bava (lovan-tsofina)", cle: true }, { text: " ; " }, { text: "moana (vilany tany, tsangambato)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["loharano", "tahirin-kevitra", "an-tsoratra", "am-bava", "moana"],
    sections: [
      {
        titre: "1. Nahoana isika no mila loharano ?",
        paras: [
          "Mba hahafantarana ny lasa, ny mpandalina ny tantara dia mampiasa loharano fanovozan-kevitra maro. Ireo loharano ireo no porofo ahafahana milaza fa nisy marina ny tranga iray.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo karazana loharano telo",
        paras: [],
        puces: [
          "Ny tahirin-kevitra an-tsoratra : boky, gazety, taratasy mirakitra ny zava-nisy. Mazava sy voatahiry tsara ny daty sy ny anarana ao aminy.",
          "Ny tahirin-kevitra am-bava : fahalalana nampitaina am-bava, amin'ny resaka sy ny fitantarana — ny lovan-tsofina (angano, tantaran'ny Ntaolo notantarain'ny ray aman-dreny sy ny zokiolona).",
          "Ny tahirin-kevitra moana : ireo fitaovana sisa tavela — lefona, vilany tany, firavaka, famaky ; ny sisan-taolana ; ireo vakoka manan-tantara (tsangambato, fasana, rova).",
        ],
      },
      {
        titre: "3. Ahoana no ampiasana azy ?",
        paras: [
          "Samy manana ny lanjany ny loharano tsirairay : ny an-tsoratra dia mazava, ny am-bava dia mety miova rehefa mandeha ny fotoana, ary ny moana dia dinihin'ny mpahay siansa (arkeology) mba hamoahana ny tsiambaratelony.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Nahita vilany tany sy vakana ary taolan-biby tao anaty lava-bato ny mpikaroka tao amin'ny faritra Anosy. Tsy nisy soratra na dia iray aza ireo zavatra ireo. Kanefa, rehefa nodinihiny tsara, dia fantany fa nisy olona nonina tao amin'io lava-bato io, nahandro sakafo tamin'ny vilany tany ary nihaingo vakana. »",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
      "Fanontaniana : a) Karazana loharano inona ireo zavatra hita ? b) Nahoana izy no sarobidy na dia tsy misy soratra aza ?",
      "Valiny : a) Tahirin-kevitra moana. b) Satria mampianatra antsika ny fomba fiainan'ny olona taloha izy rehefa dinihina.",
    ],
  },
  rakibolana: [
    { mg: "Loharano fanovozan-kevitra", fr: "Source d'information" },
    { mg: "Tahirin-kevitra an-tsoratra", fr: "Document écrit" },
    { mg: "Tahirin-kevitra am-bava", fr: "Source orale" },
    { mg: "Tahirin-kevitra moana", fr: "Document muet" },
    { mg: "Arkeology", fr: "Archéologue" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny boky sy ny gazety dia tahirin-kevitra … ; ny angano dia tahirin-kevitra … ; ny lefona tranainy dia tahirin-kevitra ….",
      items: [],
      corrige: [[{ text: "an-tsoratra", cle: true }, { text: " ; " }, { text: "am-bava", cle: true }, { text: " ; " }, { text: "moana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio : a) taratasin'ny mpanjaka ; b) hiran'ny Ntaolo nampitaina am-bava ; d) tsangambato ; e) sisan-taolana.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "an-tsoratra", cle: true }, { text: " ; b) " }, { text: "am-bava", cle: true }, { text: " ; d) " }, { text: "moana", cle: true }, { text: " ; e) " }, { text: "moana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Iza no mpahay siansa mandinika ny tahirin-kevitra moana ? Inona no ataony ?",
      items: [],
      corrige: [[{ text: "Ny arkeology", cle: true }, { text: " : " }, { text: "mandinika ny fitaovana sy ny taolana sisa tavela mba hahalalana ny fiainan'ny olona taloha", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
