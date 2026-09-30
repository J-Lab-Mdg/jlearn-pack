// data-lh3a.js — Lohahevitra III : Ny Antiquité (S7-S9) : Mezopotamia, Ejipta
const LH = "Lohahevitra III — Ny Antiquité (-3000 ka hatramin'ny 476)";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S7 = {
  numero: 7, total: 32, lohahevitra: LH,
  titre: "Ny famaritana ny Antiquité sy ny sivilizasiona voalohany tany Mezopotamia",
  tanjona: "mamaritra ny Antiquité sy ny hoe sivilizasiona ary manoritsoritra ny sivilizasiona mezopotamianina (vanim-potoanan'i Uruk)",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'i Mezopotamia, sarin'ny soratra cunéiforme, frizy, solaitrabe",
  image: "images/img_s07.png",
  imageLegende: "Ny tanànan'i Uruk teo anelanelan'ny ony Tigre sy Eofrata",
  famerenana: {
    qa: [
      { q: "Oviana no nanomboka ny Tantara ary nifarana tamin'ny inona ny Antiquité ?", ra: "Nanomboka tamin'ny famoronana ny soratra (-3000 teo) ; nifarana tamin'ny 476 (nianjeran'ny Empira romanina tandrefana)." },
      { q: "Taiza no noforonina ny soratra ?", ra: "Tany Mezopotamia." },
    ],
    technique: "Fanontaniana am-bava", support: "Frizy",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no ilaina mba hilazana fa “sivilizasiona” ny vondron'olona iray ? Tanàna ? Fitondrana ? Fivavahana ? »",
      "V.A. : Ireo rehetra ireo mihitsy — hofaritantsika androany ny singa fototry ny sivilizasiona.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny famaritana ny Antiquité sy ny sivilizasiona ary hijery ny sivilizasiona voalohany tany Mezopotamia.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'i Mezopotamia (« tany anelanelan'ny ony roa » : Tigre sy Eofrata, ao amin'i Irak ankehitriny) sy ny sarin'ny takela-tanimanga misy soratra cunéiforme ny mpampianatra.",
    mpianatra: "Mandinika ny sari-tany sy ny sary.",
    technique: "Fandinihana sari-tany sy sary", support: "Sari-tany, sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe sivilizasiona ?", ra: "Fomba fiaina iombonan'ny vondron'olona iray : misy sehatra ara-jeografia, fandaminana ara-politika sy ara-tsosialy, soatoavina ara-kolontsaina sy ara-pivavahana ary toekarena." },
      { q: "Taiza sy oviana ny vanim-potoanan'i Uruk ?", ra: "Tany Mezopotamia, teo anelanelan'ny -3400 sy -2900 : tanàna lehibe voalohany." },
      { q: "Nahoana no zava-dehibe ny ony Tigre sy Eofrata ?", ra: "Nanondraka ny tany ka nahavokatra ny fambolena ; teraka teo amoron'izy ireo ny tanàna voalohany." },
      { q: "Inona ireo soratra voalohany ?", ra: "Ny piktograma (sary manambara zavatra) avy eo ny soratra cunéiforme (marika miendrika fantsika natao tamin'ny takela-tanimanga)." },
      { q: "Manao ahoana ny fandaminana ny tanàna mezopotamianina ?", ra: "Misy mpanjaka, mpisorona, mpanao taozavatra, mpamboly ; tempoly lehibe (ziggourat) eo afovoan-tanàna ; fifanakalozana amin'ny faritra hafa." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany sy sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Antiquité dia ny vanim-potoanan'ny sivilizasiona voalohany ; tany Mezopotamia (Uruk, -3400/-2900) no niforonan'ny tanàna sy ny soratra voalohany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny sivilizasiona mezopotamianina dia teraka teo anelanelan'ny ony … sy … ; ny tanàna malaza indrindra dia … ; ny soratra miendrika fantsika dia antsoina hoe …",
      items: [],
      corrige: [[{ text: "Tigre", cle: true }, { text: " sy " }, { text: "Eofrata", cle: true }, { text: " ; " }, { text: "Uruk", cle: true }, { text: " ; " }, { text: "cunéiforme", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ny singa efatra fototry ny sivilizasiona ary asehoy amin'ny ohatr'i Mezopotamia.",
      items: [],
      corrige: [[{ text: "Sehatra ara-jeografia (lohasahan'ny Tigre-Eofrata) ; fandaminana ara-politika sy sosialy (mpanjaka, mpisorona, sokajin'olona) ; soatoavina ara-kolontsaina sy ara-pivavahana (tempoly, andriamanitra maro) ; toekarena (fambolena an-tondraka, taozavatra, fifanakalozana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["sivilizasiona", "Mezopotamia", "Uruk", "Tigre sy Eofrata", "piktograma", "cunéiforme", "ziggourat"],
    sections: [
      {
        titre: "1. Ny Antiquité sy ny hoe « sivilizasiona »",
        paras: [
          "Ny ANTIQUITÉ dia ny vanim-potoana voalohany amin'ny Tantara : manomboka amin'ny famoronana ny soratra (-3000 teo) ka hatramin'ny nianjeran'ny Empira romanina tandrefana (476).",
          "Ny SIVILIZASIONA dia ny fomba fiaina iombonan'ny vondron'olona iray. Ireto ny singa fototra mamaritra azy :",
        ],
        puces: [
          "SEHATRA ARA-JEOGRAFIA iray voafaritra (lohasaha, morontsiraka, nosy...) ;",
          "FANDAMINANA ARA-POLITIKA SY ARA-TSOSIALY (mpitondra, lalàna, sokajin'olona) ;",
          "SOATOAVINA ARA-KOLONTSAINA SY ARA-PIVAVAHANA (finoana, kanto, siansa, soratra) ;",
          "TOEKARENA (fambolena, taozavatra, fifanakalozana).",
        ],
      },
      {
        titre: "2. Mezopotamia : ny « tany anelanelan'ny ony roa »",
        paras: [
          "MEZOPOTAMIA (ao amin'i Irak ankehitriny) dia ny lemaka mahavokatra eo anelanelan'ny ony TIGRE sy EOFRATA. Ny rano nanondraka ny tany no nahafahana namboly be, ka nitombo ny mponina ary niorina ny TANÀNA voalohany. Ny vanim-potoanan'i URUK (-3400 ka hatramin'ny -2900) no nisehoan'ny tanàna lehibe voalohany : manda, tempoly mijoalajoala (ziggourat), mpanjaka, mpisorona ary mpanao taozavatra.",
        ],
      },
      {
        titre: "3. Ny famoronana ny soratra",
        paras: [
          "Teo amin'ny -3500 teo ny mpitantana ny tempoly dia nila nandrakitra ny vokatra sy ny fifanakalozana : nanoratra PIKTOGRAMA (sary kely manambara zavatra) tamin'ny takela-tanimanga izy ireo. Nivoatra ho SORATRA CUNÉIFORME (miendrika fantsika) izany. Ny soratra no nanova ny Prehistoara ho Tantara : afaka mandrakitra sy mampita ny fahalalana ny olombelona.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana no teo amoron'ny ony no niforonan'ny sivilizasiona voalohany ? Vahaolana : ny ony no nanome rano fisotro sy fanondrahana ka nahabe vokatra ny fambolena ; ny vokatra be dia nahavelona mponina maro ka nahafahan'ny sasany nanao asa hafa (mpisorona, mpanao taozavatra, mpitondra) — teraka ny tanàna sy ny sivilizasiona.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny takela-tanimanga voasoratra tamin'ny cunéiforme hita tao Uruk dia mirakitra lisitry ny vary, omby ary mpiasa nomena ny tempoly. Ny soratra voalohany àry dia natao hitantanana ny harena fa tsy hanoratana tononkalo. »",
      "1. Loharano karazana inona ny takela-tanimanga (an-tsoratra, am-bava sa moana) ?",
      "2. Inona no votoatin'ny soratra voalohany ?",
      "3. Nahoana ny tempoly no nila fandrakitana ?",
    ],
  },
  rakibolana: [
    { mg: "Sivilizasiona", fr: "Civilisation" },
    { mg: "Piktograma", fr: "Pictogramme" },
    { mg: "Soratra cunéiforme", fr: "Écriture cunéiforme" },
    { mg: "Takela-tanimanga", fr: "Tablette d'argile" },
    { mg: "Fambolena an-tondraka", fr: "Agriculture irriguée" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny Antiquité dia nifarana tamin'ny 1492. b) Mezopotamia dia midika hoe « tany anelanelan'ny ony roa ». d) Ny soratra voalohany dia natao tamin'ny taratasy. e) Uruk dia tanàna lehibe voalohany. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : tamin'ny 476", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : tamin'ny takela-tanimanga", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. ziggourat / 2. piktograma / 3. cunéiforme — a. soratra miendrika fantsika ; b. tempoly mijoalajoala ; d. sary kely manambara zavatra.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana ny famoronana ny soratra no nanova ny fiainan'ny olombelona ?",
      items: [],
      corrige: [[{ text: "Afaka mandrakitra ny zava-nitranga sy ny fahalalana ny olombelona ka tsy miankina amin'ny fitadidiana intsony ; afaka mampita amin'ny taranaka sy ny faritra hafa izany — nanomboka teo ny Tantara", cle: true }, { text: "." }]],
    },
  ],
};

const S8 = {
  numero: 8, total: 32, lohahevitra: LH,
  titre: "Ejipta fahiny : « fanomezan'i Neily »",
  tanjona: "manazava ny anjara asan'ny ony Neily amin'ny toekarena sy ny fiainan'ny Ejipsianina ary mandahatra ny dingan'ny tantaran'i Ejipta",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'i Ejipta, sary ny Neily sy ny piramida, solaitrabe",
  image: "images/img_s08.png",
  imageLegende: "Ny lohasahan'i Neily : fambolena maitso eo afovoan'ny efitra",
  famerenana: {
    qa: [
      { q: "Inona ny singa efatra fototry ny sivilizasiona ?", ra: "Sehatra ara-jeografia ; fandaminana ara-politika sy sosialy ; soatoavina ara-kolontsaina sy ara-pivavahana ; toekarena." },
      { q: "Nahoana ny ony no niforonan'ny sivilizasiona voalohany ?", ra: "Ny rano no nahavokatra ny fambolena ka niorina ny tanàna." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Firenena efitra i Ejipta nefa namokatra vary sy varimbazaha be dia be — ahoana no nahatonga izany ? »",
      "V.A. : Noho ny ony Neily : « fanomezan'i Neily » i Ejipta araka ny filazan'i Hérodote.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Sari-tany",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny sivilizasiona ejipsianina : ny anjara asan'i Neily sy ny dingan'ny tantaran'i Ejipta fahiny.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'i Ejipta ny mpampianatra : ny ony Neily mikoriana avy any atsimo mianavaratra, ny lohasaha maitso tery, ny efitra midadasika. Hazavaina ny tondra-drano isan-taona mamela fotaka mahavokatra (limon).",
    mpianatra: "Mandinika ny sari-tany sy ny sary.",
    technique: "Fandinihana sari-tany", support: "Sari-tanin'i Ejipta",
  },
  famakafakana: {
    qa: [
      { q: "Nahoana i Ejipta no antsoina hoe « fanomezan'i Neily » ?", ra: "Satria raha tsy teo ny Neily dia efitra fotsiny i Ejipta : ny tondra-dranony isan-taona no mamela fotaka mahavokatra ka mamelona ny fambolena." },
      { q: "Inona no vokatra lehibe tany Ejipta ?", ra: "Varimbazaha, hordea, rongony (lin), papyrus ; niompy omby sy gisa koa izy ireo." },
      { q: "Inona ny fifandraisan'ny harena sy ny toetry ny tany ?", ra: "Ny tany mahavokatra (Neily) no fototry ny harena : ny vokatra be no namelona ny mpiasa nanorina ny piramida sy ny tempoly." },
      { q: "Tanisao ny dingana telon'ny tantaran'i Ejipta.", ra: "Fanjakana taloha (-2700/-2200 : piramida) ; Fanjakana antenatenany (-2050/-1800) ; Fanjakana vaovao (-1600/-1100 : fanitarana sy tempoly lehibe)." },
      { q: "Inona no nahatonga ny fahalavoan'i Ejipta ?", ra: "Ny adim-pifandimbiasana sy ny fanafihan'ny vahiny (Persianina, Grika, Romanina) no nampihena ny heriny tsikelikely." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany sy frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Neily no fototry ny sivilizasiona ejipsianina ; nandalo dingana telo lehibe ny tantarany (taloha, antenatenany, vaovao) talohan'ny fahalavoany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : I Ejipta dia « fanomezan'i … » ; ny tondra-drano isan-taona dia mamela … mahavokatra ; ny piramida lehibe dia natao tamin'ny Fanjakana …",
      items: [],
      corrige: [[{ text: "Neily", cle: true }, { text: " ; " }, { text: "fotaka (limon)", cle: true }, { text: " ; " }, { text: "taloha (-2700/-2200)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Hazavao amin'ny fehezanteny telo ny hoe « I Ejipta dia fanomezan'i Neily ».",
      items: [],
      corrige: [[{ text: "Efitra ny ankamaroan'i Ejipta ; ny tondra-dranon'i Neily isan-taona no mamela fotaka mahavokatra eo amin'ny lohasaha ; io vokatra io no namelona ny mponina sy ny fanjakana ka niorina ny sivilizasiona", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Neily", "tondra-drano", "fotaka mahavokatra", "Fanjakana taloha", "Fanjakana vaovao", "piramida"],
    sections: [
      {
        titre: "1. Ny Neily, fototry ny fiainana",
        paras: [
          "I EJIPTA dia firenena efitra saika manontolo : ny lohasahan'ny ony NEILY ihany no azo ambolena. Isan-taona ny Neily dia tondraka ka mamela FOTAKA MAHAVOKATRA (limon) eo amin'ny tany : avy eo ny mpamboly dia mamafy varimbazaha, hordea, rongony ary papyrus. Izany no nilazan'i Hérodote, mpahay tantara grika, hoe : « I Ejipta dia fanomezan'i Neily. »",
          "Ny Neily koa no lalam-pitaterana lehibe : ny lakana no mitondra ny vokatra, ny vato fanorenana ary ny mpivahiny.",
        ],
      },
      {
        titre: "2. Ny harena sy ny toetry ny tany",
        paras: [
          "Ny vokatra be avy amin'ny Neily no fototry ny HARENAN'I EJIPTA : namelona ny mponina marobe izy, nahafahana nanangona tahiry tao amin'ny fitoeram-bary, ary namelona ny mpiasa an'arivony nanorina ny PIRAMIDA sy ny tempoly. Hita eto fa mifandray ny harena sy ny toetry ny tany : ny firenena manana tany mahavokatra sy rano dia afaka mihalehibe.",
        ],
      },
      {
        titre: "3. Ny fiakarana sy ny fahalavoan'i Ejipta",
        paras: [
          "Nandalo dingana telo lehibe ny tantaran'i Ejipta :",
        ],
        puces: [
          "FANJAKANA TALOHA (-2700 ka hatramin'ny -2200) : vanim-potoanan'ny piramida lehibe (Kheops tao Gizeh) ;",
          "FANJAKANA ANTENATENANY (-2050 ka hatramin'ny -1800) : fanarenana sy fanitarana ny fambolena ;",
          "FANJAKANA VAOVAO (-1600 ka hatramin'ny -1100) : ny fara-tampon'ny hery — tempoly lehibe (Karnak, Louxor) sy fanitarana ny tany.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Inona no mety hitranga amin'ny taona tsy nisy tondra-drano tsara ? Vahaolana : kely ny fotaka ka kely ny vokatra — mosary sy korontana no mety hitranga. Hita amin'izany fa niankina tanteraka tamin'ny Neily ny fiainan'i Ejipta.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Rehefa tondraka ny Neily dia rakotra rano ny tany rehetra ; rehefa mihemotra izy dia mamela fotaka mainty mahavokatra. Avy hatrany ny mpamboly dia mamafy ny voany eo amin'io fotaka io. » (Nalalaka avy amin'i Hérodote, taonjato faha-5 talohan'i J.K.)",
      "1. Iza no nanoratra ity tahirin-kevitra ity ary avy aiza izy ?",
      "2. Inona no avelan'ny tondra-drano rehefa mihemotra ?",
      "3. Nahoana no mamafy avy hatrany ny mpamboly ?",
    ],
  },
  rakibolana: [
    { mg: "Tondra-drano", fr: "Crue, inondation" },
    { mg: "Fotaka mahavokatra", fr: "Limon fertile" },
    { mg: "Efitra", fr: "Désert" },
    { mg: "Papyrus", fr: "Papyrus" },
    { mg: "Fitoeram-bary", fr: "Grenier" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Firenena maitso sy be orana i Ejipta. b) Ny tondra-dranon'i Neily dia loza tsy misy ilana azy. d) Ny piramidan'i Kheops dia tamin'ny Fanjakana taloha. e) Ny Neily koa dia lalam-pitaterana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : efitra saika manontolo", cle: true }, { text: " ; b) " }, { text: "Diso : izy no mamela ny fotaka mahavokatra", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Alaharo ara-potoana : Fanjakana vaovao ; Fanjakana taloha ; Fanjakana antenatenany — ary omeo ny datiny.",
      items: [],
      corrige: [[{ text: "Fanjakana taloha (-2700/-2200) → Fanjakana antenatenany (-2050/-1800) → Fanjakana vaovao (-1600/-1100)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Misy ve ny fitoviana eo amin'ny lohasahan'i Neily sy ny lemak'Alaotra na ny lohasahan'i Betsiboka eto Madagasikara ? Hazavao.",
      items: [],
      corrige: [[{ text: "Eny : samy lohasaha na lemaka mahavokatra manodidina ny rano (tondra-drano mamela fotaka), ka mifantoka eo ny fambolena (vary) sy ny mponina", cle: true }, { text: "." }]],
    },
  ],
};

const S9 = {
  numero: 9, total: 32, lohahevitra: LH,
  titre: "Ejipta-n'ny Farao : fitondrana sy fiaraha-monina",
  tanjona: "manazava ny fahefan'ny farao sy ny fandaminana ara-tsosialy sy ara-toekaren'i Ejipta fahiny",
  fanovozanKevitra: DOC,
  fitaovana: "Sary ny farao sy ny piramidan'ny fiaraha-monina, solaitrabe",
  image: "images/img_s09.png",
  imageLegende: "Ny farao sy ny fiaraha-monina ejipsianina",
  famerenana: {
    qa: [
      { q: "Nahoana i Ejipta no « fanomezan'i Neily » ?", ra: "Ny tondra-dranon'i Neily no mamela ny fotaka mahavokatra mamelona ny firenena." },
      { q: "Tanisao ny dingana telon'ny tantaran'i Ejipta.", ra: "Fanjakana taloha, antenatenany, vaovao." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Iza no nitondra an'i Ejipta ary nahoana ny vahoaka no nanaiky nanorina piramida goavana ho azy ? »",
      "V.A. : Ny farao — noheverina ho andriamanitra velona izy ka nanana fahefana feno.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fahefan'ny farao sy ny fandaminana ny fiaraha-monina sy ny toekarena tany Ejipta fahiny.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny piramidan'ny fiaraha-monina ejipsianina ny mpampianatra : ny farao eo an-tampony, dia ny mpisorona sy ny manam-boninahitra, ny mpanora-dalàna (scribes), ny mpanao taozavatra sy ny mpivarotra, ary ny mpamboly maro an'isa eo ambany.",
    mpianatra: "Mandinika ny sary sy ny ambaratonga.",
    technique: "Fandinihana sary", support: "Sary ny piramidan'ny fiaraha-monina",
  },
  famakafakana: {
    qa: [
      { q: "Inona no fahefan'ny farao ?", ra: "Fahefana feno : izy no mpanjaka, lehiben'ny fivavahana, lehiben'ny tafika ary tompon'ny tany — noheverina ho andriamanitra velona izy." },
      { q: "Iza no manampy ny farao mitantana ?", ra: "Ny vizira (praiminisitra), ny mpisorona, ny manam-boninahitra ary ny mpanora-dalàna izay mandrakitra ny hetra sy ny vokatra." },
      { q: "Nahoana no manan-danja ny mpanora-dalàna ?", ra: "Izy ihany no mahay manoratra hieroglyphe ka izy no mitantana ny fandraketana rehetra : hetra, vokatra, didy." },
      { q: "Manao ahoana ny toekarena ?", ra: "Fambolena no fototra ; ny fanjakana no mandamina ny fanondrahana, manangona ny hetra amin'ny vokatra ary mitantana ny fitoeram-bary." },
      { q: "Inona ny finoan'ny Ejipsianina ?", ra: "Nivavaka tamin'andriamanitra maro izy (Râ, Osiris, Isis...) ary nino ny fiainana aorian'ny fahafatesana ka nanamboatra momia sy fasana lehibe." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : fahefana feno teo am-pelatanan'ny farao ; fiaraha-monina mirafitra ambaratonga ; toekarena mifototra amin'ny fambolena tantanan'ny fanjakana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Iza no resahina ? a) andriamanitra velona sy tompon'ny tany ; b) mahay manoratra hieroglyphe ; d) maro an'isa indrindra ary mamboly ny tany.",
      items: [],
      corrige: [[{ text: "a) ny farao", cle: true }, { text: " ; b) " }, { text: "ny mpanora-dalàna (scribe)", cle: true }, { text: " ; d) " }, { text: "ny mpamboly", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto ny piramidan'ny fiaraha-monina ejipsianina (ambaratonga dimy).",
      items: [],
      corrige: [[{ text: "Farao → mpisorona sy manam-boninahitra → mpanora-dalàna → mpanao taozavatra sy mpivarotra → mpamboly (maro an'isa)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["farao", "andriamanitra velona", "vizira", "mpanora-dalàna", "hieroglyphe", "momia"],
    sections: [
      {
        titre: "1. Ny farao, mpanjaka sady andriamanitra",
        paras: [
          "Ny FARAO no fara-tampon'ny fahefana tany Ejipta : mpanjaka, lehiben'ny fivavahana, lehiben'ny tafika ary tompon'ny tany manontolo. Noheverin'ny vahoaka ho ANDRIAMANITRA VELONA izy — zanak'i Râ, andriamanitry ny masoandro — ka ny didiny dia lalàna. Ny VIZIRA (praiminisitra) sy ny manam-boninahitra no manampy azy mitantana ny faritany.",
        ],
      },
      {
        titre: "2. Ny fiaraha-monina mirafitra ambaratonga",
        paras: [],
        puces: [
          "NY FARAO sy ny fianakaviany eo an-tampony ;",
          "NY MPISORONA (mitantana ny tempoly) sy ny MANAM-BONINAHITRA ;",
          "NY MPANORA-DALÀNA (scribes) : mahay manoratra HIEROGLYPHE ka mandrakitra ny hetra, ny vokatra ary ny didy — asa mendri-kaja indrindra ;",
          "NY MPANAO TAOZAVATRA sy ny MPIVAROTRA ;",
          "NY MPAMBOLY : maro an'isa indrindra — mamboly ny tany, mandoa hetra amin'ny vokatra ary miasa amin'ny fanorenana rehefa tondraka ny Neily.",
        ],
      },
      {
        titre: "3. Toekarena sy finoana",
        paras: [
          "Ny FANJAKANA no mandamina ny toekarena : ny fanondrahana, ny fanangonana ny hetra amin'ny vokatra ary ny fitoeram-bary ho amin'ny taona mahantra. Ny Ejipsianina dia nivavaka tamin'andriamanitra maro (Râ, Osiris, Isis...) ary nino ny fiainana aorian'ny fahafatesana : izany no nanamboarany ny MOMIA sy ny fasana lehibe (piramida, lava-pasana any amin'ny Lohasahan'ny Mpanjaka).",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Inona no itovizan'ny farao sy ny mpanjaka malagasy fahiny (ohatra : Andrianampoinimerina) ary inona no maha-samy hafa azy ? Vahaolana : samy fara-tampon'ny fahefana sy mpandamina ny fambolena (fanondrahana, tanimbary) izy roa ; fa ny farao dia noheverina ho andriamanitra velona, ny mpanjaka malagasy kosa dia « hasina » no nananany fa olombelona ihany.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny mpanora-dalàna dia tsy mandoa hetra ary tsy miasa tany : ny penina sy ny papyrus no fitaovany. Hoy ny ray amin-janany : “Aoka ianao ho mpanora-dalàna, mba ho afaka amin'ny asa mavesatra rehetra.” » (Nalalaka avy amin'ny torolalana ejipsianina fahiny)",
      "1. Inona no tombontsoan'ny mpanora-dalàna ?",
      "2. Nahoana ny ray no mandrisika ny zanany hianatra ?",
      "3. Inona no ifandraisan'io tahirin-kevitra io amin'ny lanjan'ny fianarana ankehitriny ?",
    ],
  },
  rakibolana: [
    { mg: "Farao", fr: "Pharaon" },
    { mg: "Vizira", fr: "Vizir" },
    { mg: "Mpanora-dalàna", fr: "Scribe" },
    { mg: "Hieroglyphe", fr: "Hiéroglyphe" },
    { mg: "Momia", fr: "Momie" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny farao dia noheverina ho … velona ; ny … no manampy azy mitantana ; ny mpanora-dalàna dia manoratra amin'ny soratra … ; ny mpamboly dia mandoa … amin'ny vokatra. (1 isa avy)",
      items: [],
      corrige: [[{ text: "andriamanitra", cle: true }, { text: " ; " }, { text: "vizira sy ny manam-boninahitra", cle: true }, { text: " ; " }, { text: "hieroglyphe", cle: true }, { text: " ; " }, { text: "hetra", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny Ejipsianina no nanamboatra momia sy fasana lehibe ?",
      items: [],
      corrige: [[{ text: "Satria nino ny fiainana aorian'ny fahafatesana izy ireo : notehirizina ny vatana (momia) ary nomanina ny fasana mba hiainan'ny maty any ankoatra", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny farao dia lehiben'ny fivavahana ihany. b) Ny mpamboly no maro an'isa indrindra. d) Ny hieroglyphe dia soratra ejipsianina. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : mpanjaka sy lehiben'ny tafika sy tompon'ny tany koa izy", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH3A: { titre: LH, seances: [S7, S8, S9] } };
