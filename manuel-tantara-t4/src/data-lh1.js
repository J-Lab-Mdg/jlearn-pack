// data-lh1.js — LOHAHEVITRA I : NY HABAKA SY NY FOTOANA (S1-S4) — Tantara T4
// Loharano : PE T4 (p. 101-114) sy FRP T4 (FRP_8eme_3, LFK 1-a → 1-k)
const DOC = "PE Tantara T4 (MEN) sy FRP T4";
const LH = "I — Ny habaka sy ny fotoana";
const FAHENDRENA = "Fahaiza-mandamina sy fanajana ny fotoana";

const seances = [

// ============================================================ SEHO 1
{
  numero: 1, total: 27, lohahevitra: LH,
  titre: "Ny habaka sy ny tontolo",
  tanjona: "mamaritra ny atao hoe habaka sy tontolo, ary manavaka ny tontolo voajanahary amin'ny tontolo nohajariana",
  fahendrena: FAHENDRENA,
  tetika: "Asa an-tarika ; fijerena ny manodidina ny sekoly ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (FRP T4, LFK 1-a)",
  fitaovana: "Sary maneho ireo karazana tontolo ; ny tontolo manodidina ny sekoly ; solaitrabe",
  image: "images/img_s01.png",
  imageLegende: "Ny tontolo voajanahary (ala, tendrombohitra) sy ny tontolo nohajariana (tanàna, tanimbary)",
  famerenana: {
    qa: [
      { q: "Inona avy no hitanao rehefa mijery eny ivelan'ny varavarankely ianao ?", ra: "Hazo, lanitra, trano, lalana, olona…" },
      { q: "Iza amin'ireo zavatra ireo no nataon'ny olombelona ?", ra: "Ny trano sy ny lalana no nataon'ny olombelona." },
    ],
    technique: "Fanontaniana an-kira / valiny mivantana",
    support: "Ny manodidina ny sekoly",
  },
  fanentanana: {
    mpampianatra: [
      "Mitondra ny mpianatra mijery eny ivelan'ny lakilasy ny mpampianatra.",
      "« Jereo tsara ny manodidina antsika : inona no nataon'Andriamanitra na ny natiora, ary inona no nataon'ny olombelona ? »",
    ],
    mpianatra: "Mijery, mitanisa izay hitany : hazo, vorona, trano, tanimboly, lalana…",
    technique: "Fijerevana mivantana",
    support: "Ny tontolo manodidina ny sekoly",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe habaka sy tontolo, ary hanavaka ny tontolo voajanahary sy ny tontolo nohajariana.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary roa ny mpampianatra : ala midadasika sy tanàna misy trano maro. Manontany : « Inona no mampiavaka azy roa ? »",
    mpianatra: "Mandinika ny sary ary milaza ny fahasamihafany : ny iray feno zavaboary, ny iray feno zavatra nataon'olombelona.",
    technique: "Fandinihana sary",
    support: "Sary roa (ala sy tanàna)",
  },
  famakafakana: {
    qa: [
      { q: "Inona no antsoina hoe habaka ?", ra: "Faritra na velarana malalaka misy na itrangan-javatra, iainana sy ivelomana." },
      { q: "Inona no atao hoe tontolo voajanahary ?", ra: "Faritra misy ireo zavaboary : hazo, biby, rano, tany, lanitra." },
      { q: "Omeo ohatra roa amin'ny tontolo nohajariana.", ra: "Ny tanàna sy ny tanimbary (na : zaridaina, orinasa, lalana…)." },
    ],
    technique: "Fanontaniana / valiny ; asa an-tarika",
    support: "Sary sy ny zava-misy manodidina",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny habaka dia faritra malalaka iainana ; ny tontolo voajanahary dia mbola tsy niasan'ny olombelona ; ny tontolo nohajariana dia efa novain'ny olombelona.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ireto : a) ala ; b) tanimbary ; d) rano-mandeha ; e) lalana. Iza no voajanahary, iza no nohajariana ?",
      items: [],
      corrige: [[{ text: "Voajanahary : " }, { text: "a) ala, d) rano-mandeha", cle: true }, { text: " ; nohajariana : " }, { text: "b) tanimbary, e) lalana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Faritao amin'ny fehezanteny iray ny atao hoe tontolo voajanahary.",
      items: [],
      corrige: [[{ text: "Ny tontolo voajanahary dia " }, { text: "faritra misy ireo zavaboary mbola tsy niasan'ny olombelona", cle: true }, { text: "." }]],
    },
    {
      consigne: "Omeo ohatra iray amin'ny tontolo nohajariana hitanao eto amin'ny tanànanao.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "ny sekoly, ny tsena, ny lalana, ny tanimboly…", cle: true }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["habaka", "tontolo", "tontolo voajanahary", "tontolo nohajariana", "zavaboary"],
    sections: [
      {
        titre: "1. Ny habaka",
        paras: [
          "Ny habaka dia faritra na velarana malalaka misy zavatra na itrangan-javatra. Ao no iainana, ivelomana ary anehoana ny fisiana.",
          "Teny iray tarika : ny habakabaka, dia ny faritra ambonin'ny tany — miloko manga amin'ny atoandro, ary misy ny kintana sy ny volana amin'ny alina.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny tontolo",
        paras: [
          "Ny tontolo dia faritra na toerana iainana na isian-javatra. Misy ny tontolo hita maso (hazo, trano, biby) ary misy ny tontolo tsy hita maso (ny rivotra, ohatra).",
        ],
        puces: [],
      },
      {
        titre: "3. Ny tontolo voajanahary",
        paras: [
          "Ny tontolo voajanahary dia faritra misy ireo zavaboary : zavamaniry isan-karazany, biby, rano, tany, lanitra. Mbola tsy niasan'ny olombelona izy.",
        ],
        puces: [
          "Ohatra : ny ala, ny tendrombohitra, ny renirano, ny ranomasina.",
        ],
      },
      {
        titre: "4. Ny tontolo nohajariana",
        paras: [
          "Ny tontolo nohajariana dia faritra na toerana efa niasan'ny olombelona sy novainy.",
        ],
        puces: [
          "Ohatra : ny tanàna, ny orinasa, ny zaridaina, ny tanimboly, ny tanimbary, ny lalana.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Nitsangatsangana tany amin'ny faritanin'i Toamasina i Naivo sy ny rainy. Nahita ala midadasika izy ireo : nisy gidro nitsambikina teny amin'ny hazo, nisy vorona maro nihira. Rehefa niverina tany an-tanàna izy ireo, dia nandalo tanimbary midadasika sy tetezana vaovao teo amin'ny lalana. »",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
      "Fanontaniana : a) Inona amin'ireo zavatra hitan'i Naivo no tontolo voajanahary ? b) Inona kosa no tontolo nohajariana ?",
      "Valiny : a) Ny ala, ny gidro, ny vorona. b) Ny tanimbary, ny tetezana, ny lalana, ny tanàna.",
    ],
  },
  rakibolana: [
    { mg: "Habaka", fr: "Espace" },
    { mg: "Tontolo", fr: "Milieu / environnement" },
    { mg: "Tontolo voajanahary", fr: "Milieu naturel" },
    { mg: "Tontolo nohajariana", fr: "Milieu aménagé" },
    { mg: "Zavaboary", fr: "Éléments de la nature" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny tontolo … dia faritra misy ireo zavaboary ; ny tontolo … dia faritra efa niasan'ny olombelona ; ny … dia velarana malalaka iainana.",
      items: [],
      corrige: [[{ text: "voajanahary", cle: true }, { text: " ; " }, { text: "nohajariana", cle: true }, { text: " ; " }, { text: "habaka", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho tontolo voajanahary na tontolo nohajariana : a) ny alan'i Ranomafana ; b) ny tsenan'Analakely ; d) ny renirano Betsiboka ; e) ny zaridainan'Antaninarenina.",
      items: [],
      corrige: [[{ text: "Voajanahary : " }, { text: "a) ala, d) renirano", cle: true }, { text: " ; nohajariana : " }, { text: "b) tsena, e) zaridaina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao zavatra telo hitanao eny amin'ny habakabaka.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "ny masoandro, ny volana, ny kintana (na : ny rahona, ny vorona…)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 2
{
  numero: 2, total: 27, lohahevitra: LH,
  titre: "Ny fiarahamonina",
  tanjona: "mamaritra ny atao hoe fiarahamonina ary manavaka ny fiarahamonina ao an-tokantrano, ao an-tsekoly ary ao an-tanàna",
  fahendrena: FAHENDRENA,
  tetika: "Fanoritsoritana sary ; asa an-tarika ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (FRP T4, LFK 1-a)",
  fitaovana: "Sarim-pianakaviana ; sarin'ny mpiara-mianatra ; sarin'ny mpiray tanàna",
  image: "images/img_s02.png",
  imageLegende: "Ny fiarahamonina : ny fianakaviana, ny sekoly ary ny tanàna",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe tontolo nohajariana ?", ra: "Faritra efa niasan'ny olombelona, ohatra ny tanàna." },
      { q: "Iza avy no olona miara-miaina aminao ao an-trano ?", ra: "Ny ray aman-dreny, ny zoky sy ny zandry…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampiseho sary maneho fianakaviana miara-misakafo ny mpampianatra.",
      "« Iza avy no hitanareo eto amin'ity sary ity ? Inona no ataon'izy ireo ? »",
    ],
    mpianatra: "Mandinika ny sary : ray, reny, zanaka — miara-misakafo, mifampizara.",
    technique: "Fanoritsoritana sary",
    support: "Sarim-pianakaviana",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe fiarahamonina sy ireo karazany manodidina antsika.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary telo ny mpampianatra : fianakaviana, mpiara-mianatra ao an-dakilasy, mponina miara-miasa amin'ny asa iombonana (famafana lalana). Manontany : « Inona no itovizan'ireo sary telo ireo ? »",
    mpianatra: "Mandinika : samy misy olona maro miara-miaina sy miara-miasa.",
    technique: "Fandinihana sary",
    support: "Sary telo",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe fiarahamonina ?", ra: "Fitambarana vondron'olona miara-miaina ao amin'ny faritra iray, fehezin'ny lalàna iombonana ary manana tombontsoa iraisana." },
      { q: "Iza no mandrafitra ny fiarahamonina ao an-tokantrano ?", ra: "Ny ray aman-dreny sy ny zanaka." },
      { q: "Iza kosa no mandrafitra ny fiarahamonina ao an-tsekoly ?", ra: "Ny mpampianatra sy ny mpianatra." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sary sy ny zava-misy",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny fiarahamonina dia vondron'olona miara-miaina, manaja lalàna iombonana ary mifanampy.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. ray aman-dreny sy zanaka / 2. mpampianatra sy mpianatra / 3. mpiray tanàna — a. fiarahamonina ao an-tsekoly ; b. fiarahamonina ao an-tanàna ; d. fiarahamonina ao an-tokantrano.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Faritao amin'ny fehezanteny iray ny atao hoe fiarahamonina.",
      items: [],
      corrige: [[{ text: "Ny fiarahamonina dia " }, { text: "vondron'olona miara-miaina ao amin'ny faritra iray, fehezin'ny lalàna iombonana", cle: true }, { text: "." }]],
    },
    {
      consigne: "Omeo ohatra iray amin'ny asa iombonana ataon'ny mpiray tanàna.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "ny famafana lalana, ny asa fanadiovana, ny fanampiana ny sahirana…", cle: true }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fiarahamonina", "tokantrano", "sekoly", "tanàna", "lalàna iombonana", "fihavanana"],
    sections: [
      {
        titre: "1. Famaritana ny fiarahamonina",
        paras: [
          "Ny fiarahamonina dia fitambarana vondron'olona miara-miaina ao amin'ny faritra iray. Fehezin'ny lalàna iombonana izy ireo ary manana tombontsoa iraisana.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo karazana fiarahamonina manodidina anao",
        paras: [],
        puces: [
          "Ny fiarahamonina ao an-tokantrano : ny ray aman-dreny sy ny zanaka.",
          "Ny fiarahamonina ao an-tsekoly : ny mpampianatra sy ny mpianatra.",
          "Ny fiarahamonina ao an-tanàna : ireo mpiray tanàna.",
        ],
      },
      {
        titre: "3. Ny maha-zava-dehibe ny fiarahamonina",
        paras: [
          "Ao anatin'ny fiarahamonina no ianarantsika mifanaja, mifanampy ary miara-miasa. Ny fihavanana sy ny firaisankina no fototry ny fiarahamonina malagasy.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Isaky ny sabotsy maraina, mivory ny mponina ao amin'ny fokontany misy an'i Hery : misy mamafa ny lalana, misy manadio ny lakandrano, ary ny sasany mamboly hazo. Rehefa vita ny asa, dia miara-misotro ranon'ampango izy rehetra sady mifampizara vaovao. »",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
      "Fanontaniana : a) Inona no anaran'io asa iombonana io ? b) Nahoana ny mponina no miara-miasa ?",
      "Valiny : a) Asa fanadiovana na asa iombonana (fokonolona). b) Satria manana tombontsoa iraisana izy ireo : ny fahadiovan'ny tanàna, ary mampatanjaka ny fihavanana ny fiaraha-miasa.",
    ],
  },
  rakibolana: [
    { mg: "Fiarahamonina", fr: "Société / communauté" },
    { mg: "Tokantrano", fr: "Foyer / famille" },
    { mg: "Lalàna iombonana", fr: "Règles communes" },
    { mg: "Fihavanana", fr: "Lien social malgache" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny fiarahamonina dia vondron'olona … ao amin'ny faritra iray, fehezin'ny … iombonana ary manana … iraisana.",
      items: [],
      corrige: [[{ text: "miara-miaina", cle: true }, { text: " ; " }, { text: "lalàna", cle: true }, { text: " ; " }, { text: "tombontsoa", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ireo karazana fiarahamonina telo nianarantsika.",
      items: [],
      corrige: [[{ text: "Ny fiarahamonina ao an-tokantrano, ao an-tsekoly ary ao an-tanàna", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny mpianatra sy ny mpampianatra dia fiarahamonina ao an-tsekoly. b) Tsy mila lalàna ny fiarahamonina. d) Ny fihavanana dia fototry ny fiarahamonina malagasy. e) Ny fianakaviana dia tsy fiarahamonina.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Marina", cle: true }, { text: " ; b) " }, { text: "Diso", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 3
{
  numero: 3, total: 27, lohahevitra: LH,
  titre: "Ny fotoana : ny andro sy ny herinandro",
  tanjona: "mampiasa araka ny tokony ho izy ny voambolana mikasika ny andro (maraina, atoandro, hariva, alina) sy ny herinandro",
  fahendrena: FAHENDRENA,
  tetika: "Fifandimbiasam-pitenenana ; fitrandrahana lahatsoratra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (FRP T4, LFK 1-b, 1-d, 1-e, 1-f)",
  fitaovana: "Fandaharam-potoana an-dakilasy ; lahatsoratra (Felana sy Lova) ; solaitrabe",
  image: "images/img_s03.png",
  imageLegende: "Ny fizaran'ny iray andro : maraina, atoandro, hariva, alina",
  famerenana: {
    qa: [
      { q: "Amin'ny firy ianao no mifoha ny maraina ?", ra: "Amin'ny 5 ora na 6 ora maraina…" },
      { q: "Inona no ataonao rehefa alina ?", ra: "Misakafo hariva, mamerin-desona, matory." },
    ],
    technique: "Fifandimbiasam-pitenenana",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Hitantara ny tontolo androny ny mpianatra iray : inona no ataonao hatramin'ny ifohazanao ka hatramin'ny atorianao ? »",
    ],
    mpianatra: "Mitantara ny fandaharam-potoanany : mifoha, midio, mianatra, milalao, matory…",
    technique: "Fifandimbiasam-pitenenana",
    support: "Ny fiainana andavanandro",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fizaran'ny iray andro sy ireo andro fito ao anatin'ny herinandro.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra roa (Felana any an-tanàn-dehibe sy Lova any ambanivohitra) ny mpampianatra ary mampitaha ny fandaharam-potoanan'izy roa.",
    mpianatra: "Mihaino, mamaky indray ary mitanisa izay ataon'i Felana sy Lova isaky ny fizaran'andro.",
    technique: "Fitrandrahana lahatsoratra",
    support: "Lahatsoratra roa (jereo ny tahirin-kevitra)",
  },
  famakafakana: {
    qa: [
      { q: "Firy ora ny iray andro ?", ra: "24 ora." },
      { q: "Inona avy ny fizaran'ny iray andro ?", ra: "Maraina, atoandro, hariva, alina." },
      { q: "Tanisao ireo andro fito amin'ny herinandro.", ra: "Alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady." },
      { q: "Nahoana no misy ny andro sy ny alina ?", ra: "Satria mihodina amin'ny tenany ny tany : ny ilany mahita masoandro dia andro, ny ilany maizina dia alina." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra sy sary",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny iray andro dia 24 ora, mizara ho maraina, atoandro, hariva ary alina ; ny herinandro dia andro fito.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany ireto : hariva — maraina — alina — atoandro.",
      items: [],
      corrige: [[{ text: "maraina, atoandro, hariva, alina", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Firy ora ny iray andro ary firy andro ny iray herinandro ?",
      items: [],
      corrige: [[{ text: "Ny iray andro dia " }, { text: "24 ora", cle: true }, { text: " ; ny iray herinandro dia " }, { text: "7 andro", cle: true }, { text: "." }]],
    },
    {
      consigne: "Inona ny andro manaraka ny alakamisy ? Ary ny andro mialoha ny alatsinainy ?",
      items: [],
      corrige: [[{ text: "Ny manaraka ny alakamisy dia ny " }, { text: "zoma", cle: true }, { text: " ; ny mialoha ny alatsinainy dia ny " }, { text: "alahady", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["andro", "alina", "maraina", "atoandro", "hariva", "herinandro", "24 ora"],
    sections: [
      {
        titre: "1. Ny andro",
        paras: [
          "Ny iray andro dia fe-potoana maharitra 24 ora. Mizara ho efatra izy : ny maraina, ny atoandro, ny hariva ary ny alina.",
          "Ny andro koa dia ilazana ny fotoana anazavan'ny masoandro : mifamaly amin'ny alina izy. Ohatra : « tsy matory andro aman'alina i Dada noho ny fitadiavana ».",
        ],
        puces: [],
      },
      {
        titre: "2. Nahoana no misy andro sy alina ?",
        paras: [
          "Mihodina amin'ny tenany ny tany. Ny ilany mahazo ny tara-masoandro dia atoandro ; ny ilany maizina kosa dia alina. Izany fihodinana izany no mahatonga ny andro sy ny alina hifandimby isan'andro.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny herinandro",
        paras: [
          "Ny fitambaran'ny andro fito no manome ny herinandro.",
        ],
        puces: [
          "Ireo andro fito : alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady.",
          "Ny alatsinainy no fiandohan'ny herinandro fiasana ; ny sabotsy sy ny alahady no andro fialan-tsasatra amin'ny ankapobeny.",
        ],
      },
    ],
    tahirinKevitra: [
      "Lahatsoratra 1 — « Felana no anarako. An-tanàn-dehibe izahay no monina. Amin'ny 6 ora aho no mifoha. Raha vao maraina dia midio aho, misakafo, avy eo miomana ho any an-tsekoly. Lany any ny tapak'andro maraina. Mbola mianatra kosa aho ny tapak'andro hariva aorian'ny sakafo. Amin'ny takariva dia milalao kely aho, manondraka voninkazo ary manao enti-mody. Mamerin-desona kely aho vao matory amin'ny 8 ora sy sasany. »",
      "Lahatsoratra 2 — « Lova kosa no anarako. Ambanivohitra no misy anay. Amin'ny 5 ora sy sasany aho no mifoha. Mamaha-borona, mantsaka, avy eo misakafo maraina ary lasa mianatra. Tapak'andro ihany aho no mianatra. Ny tapak'andro hariva dia maka vilona no raharahako. Ny takariva dia mihaino ny anganon'i Dadabe aho eo am-piandrasana ny sakafo hariva, ary matory amin'ny 8 ora alina. »",
      "(Nalaina tao amin'ny FRP T4, LFK 1-e.)",
      "Fanontaniana : a) Amin'ny firy no mifoha i Felana ? Ary i Lova ? b) Inona no ataon'i Lova amin'ny takariva ?",
      "Valiny : a) I Felana amin'ny 6 ora, i Lova amin'ny 5 ora sy sasany. b) Mihaino ny anganon'i Dadabe izy.",
    ],
  },
  rakibolana: [
    { mg: "Andro", fr: "Jour / journée" },
    { mg: "Alina", fr: "Nuit" },
    { mg: "Herinandro", fr: "Semaine" },
    { mg: "Fandaharam-potoana", fr: "Emploi du temps" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny iray andro dia maharitra … ora ; mizara ho maraina, …, hariva ary … ; ny herinandro dia misy andro ….",
      items: [],
      corrige: [[{ text: "24", cle: true }, { text: " ; " }, { text: "atoandro", cle: true }, { text: " ; " }, { text: "alina", cle: true }, { text: " ; " }, { text: "fito", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. mifoha sy midio / 2. misakafo antoandro / 3. matory — a. atoandro ; b. alina ; d. maraina.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty araka ny filaharany ireo andro fito amin'ny herinandro, manomboka amin'ny alatsinainy.",
      items: [],
      corrige: [[{ text: "Alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 4
{
  numero: 4, total: 27, lohahevitra: LH,
  titre: "Ny volana, ny taona ary ny voambolana mikasika ny fotoana",
  tanjona: "mitanisa ny volana 12 amin'ny taona, mamaritra ny taona ary mampiasa ny voambolana mikasika ny lasa, ny ankehitriny sy ny ho avy",
  fahendrena: FAHENDRENA,
  tetika: "Fitrandrahana kalandrie ; famantarana amin'ny vohon-tanana ; asa an-tarika",
  fanovozanKevitra: DOC + " (FRP T4, LFK 1-h, 1-i, 1-j, 1-k)",
  fitaovana: "Kalandrie ; solaitrabe ; vohon-tanana",
  image: "images/img_s04.png",
  imageLegende: "Ny kalandrie : fitaovana ahafantarana ny volana sy ny taona",
  famerenana: {
    qa: [
      { q: "Firy andro ny iray herinandro ? Tanisao izy ireo.", ra: "Fito : alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady." },
      { q: "Firy ora ny iray andro ?", ra: "24 ora." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampiseho kalandrie ny mpampianatra : « Iza no mahalala ny volana nahaterahany ? Andao hotadiavintsika ao amin'ny kalandrie izy. »",
    ],
    mpianatra: "Mitady ny volana nahaterahany ao amin'ny kalandrie ary milaza azy.",
    technique: "Fitrandrahana kalandrie",
    support: "Kalandrie",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny volana 12, ny taona ary ireo teny ilazana ny lasa, ny ankehitriny sy ny ho avy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mitarika ny mpianatra hanisa ny volana ao amin'ny kalandrie sy hijery ny isan'ny andro ao anatin'ny volana tsirairay. Mampianatra ny famantarana amin'ny vohon-tanana : ny volana mipetraka amin'ny taolana mitranga dia 31 andro.",
    mpianatra: "Manisa ny volana, mizaha ny isan'andro, manandrana ny famantarana amin'ny vohon-tanany.",
    technique: "Asa an-tarika ; famantarana amin'ny vohon-tanana",
    support: "Kalandrie sy vohon-tanana",
  },
  famakafakana: {
    qa: [
      { q: "Firy ny volana ao anatin'ny iray taona ? Tanisao ny dimy voalohany.", ra: "12 : janoary, febroary, martsa, aprily, mey…" },
      { q: "Firy andro ny iray taona ?", ra: "365 andro ; 366 andro isaky ny efa-taona (taona mihoatra)." },
      { q: "Rahoana ny volana febroary no misy 29 andro ?", ra: "Isaky ny efa-taona, amin'ny taona mihoatra (année bissextile)." },
      { q: "Omeo teny iray ilazana ny lasa, iray ny ankehitriny, iray ny ho avy.", ra: "Lasa : omaly ; ankehitriny : anio ; ho avy : rahampitso." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Kalandrie",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : 12 volana ny iray taona ; 365 na 366 andro ny taona ; misy teny manokana ilazana ny lasa, ny ankehitriny ary ny ho avy.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Inona avy ireo volana misy 30 andro monja ?",
      items: [],
      corrige: [[{ text: "Aprily, jona, septambra, novambra", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa ; vohon-tanana",
  fampiharanaSupport: "Kalandrie",
  tombana: [
    {
      consigne: "Firy volana ny iray taona ary firy andro ny taona tsotra ?",
      items: [],
      corrige: [[{ text: "12 volana", cle: true }, { text: " ary " }, { text: "365 andro", cle: true }, { text: "." }]],
    },
    {
      consigne: "Sokajio : omaly — rahampitso — anio — tamin'ny heritaona. Iza no lasa, iza no ankehitriny, iza no ho avy ?",
      items: [],
      corrige: [[{ text: "Lasa : " }, { text: "omaly, tamin'ny heritaona", cle: true }, { text: " ; ankehitriny : " }, { text: "anio", cle: true }, { text: " ; ho avy : " }, { text: "rahampitso", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["volana", "taona", "365 andro", "taona mihoatra", "lasa", "ankehitriny", "ho avy", "kalandrie"],
    sections: [
      {
        titre: "1. Ny volana",
        paras: [
          "Ny iray taona dia misy volana 12 : janoary, febroary, martsa, aprily, mey, jona, jolay, aogositra, septambra, oktobra, novambra, desambra.",
        ],
        puces: [
          "Misy 31 andro : janoary, martsa, mey, jolay, aogositra, oktobra, desambra.",
          "Misy 30 andro : aprily, jona, septambra, novambra.",
          "Ny febroary : 28 andro, fa 29 andro isaky ny efa-taona.",
          "Hafetsena kely : atao ambony ny vohon-tanana — ny volana tandrifin'ny taolana mitranga dia 31 andro, ny tandrifin'ny lempona dia 30 andro (na latsaka).",
        ],
      },
      {
        titre: "2. Ny taona",
        paras: [
          "Ny iray taona dia 365 andro. Isaky ny efa-taona anefa dia 366 andro izy : antsoina hoe taona mihoatra, ary amin'izay ny febroary dia misy 29 andro.",
          "Ny kalandrie fampiasa amin'ny firenena maro dia ny tetiandro gregoriana. Misy koa anefa ny tetiandro hafa, toy ny tetiandro silamo izay manaraka ny volana eny amin'ny lanitra.",
        ],
        puces: [],
      },
      {
        titre: "3. Ireo voambolana mikasika ny fotoana",
        paras: [],
        puces: [
          "Ny ankehitriny : anio, androany, amin'izao fotoana izao.",
          "Ny lasa : omaly, afak'omaly, tamin'ny heritaona, fahiny, fahagola.",
          "Ny ho avy : rahampitso, rahafak'ampitso, amin'ny taona ho avy.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Nandinika ny kalandrie ny mpianatry ny T4 : nitady ny vaninandro nahaterahany avy izy ireo. Hitan'i Soa fa ny 29 febroary no nahaterahany — gaga izy fa tsy hita isan-taona io daty io ! Nohazavain'ny mpampianatra fa isaky ny efa-taona ihany no misy ny 29 febroary : amin'ny taona mihoatra. »",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
      "Fanontaniana : a) Nahoana no tsy hita isan-taona ny 29 febroary ? b) Firy andro ny taona mihoatra ?",
      "Valiny : a) Satria isaky ny efa-taona ihany no misy azy. b) 366 andro.",
    ],
  },
  rakibolana: [
    { mg: "Volana", fr: "Mois" },
    { mg: "Taona", fr: "Année" },
    { mg: "Taona mihoatra", fr: "Année bissextile" },
    { mg: "Kalandrie / tetiandro", fr: "Calendrier" },
    { mg: "Ny lasa / ny ho avy", fr: "Le passé / le futur" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny iray taona dia misy volana … ; ny taona tsotra dia … andro ; ny taona mihoatra dia … andro.",
      items: [],
      corrige: [[{ text: "12", cle: true }, { text: " ; " }, { text: "365", cle: true }, { text: " ; " }, { text: "366", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny volana aprily dia misy 31 andro. b) Ny desambra no volana faha-12. d) Ny febroary dia mety misy 29 andro. e) « Omaly » dia teny ilazana ny ho avy.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso (30 andro)", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso (ny lasa)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. fahagola / 2. androany / 3. amin'ny taona ho avy — a. ny ankehitriny ; b. ny ho avy ; d. ny lasa.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
