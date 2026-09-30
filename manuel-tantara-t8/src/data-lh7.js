// data-lh7.js — Lohahevitra VII : Ny vakoka : S29-S30 — T8
const LH = "Lohahevitra VII — Ny vakoka malagasy";
const DOC = "PE T8 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S29 = {
  numero: 29, total: 32, lohahevitra: LH,
  titre: "Ny vakoka ara-kolontsaina",
  tanjona: "mamaritra ny vakoka ara-kolontsaina ary manavaka ny vakoka hita maso sy ny tsy hita maso",
  fanovozanKevitra: DOC,
  fitaovana: "Sary, lahatsoratra, solaitrabe",
  image: "images/img_s29.png",
  imageLegende: "Ny vakoka malagasy : ny vavahady vato, ny aloalo, ny valiha ary ny angano",
  famerenana: {
    qa: [
      { q: "Oviana i Madagasikara no nahazo ny fahaleovantenany ?", ra: "Tamin'ny 26 jona 1960." },
      { q: "Nahoana no sarobidy ny fahaleovantena ?", ra: "Vokatry ny tolona nifandimby izy ka adidy ny mikolokolo azy." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona avy no zavatra navelan'ny razana ho antsika : trano, hira, angano... ? Ahoana no iantsoana azy ireo ? »",
      "V.A. : Vakoka no iantsoana azy — ary hozaraintsika roa izy : ny hita maso sy ny tsy hita maso.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny vakoka ara-kolontsaina : ny famaritana azy sy ny karazany (hita maso sy tsy hita maso).",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary maromaro ny mpampianatra (vavahady vato, aloalo, lambamena, valiha, mpitantara angano, hiragasy) ary mitarika ny fanasokajiana azy : hita maso ve sa tsy hita maso ?",
    mpianatra: "Mandinika ny sary sy manasokajy.",
    technique: "Fandinihana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe vakoka ara-kolontsaina ?", ra: "Ny harena rehetra navelan'ny razana sy ny taranaka teo aloha, izay maneho ny maha-izy azy ny firenena iray ary ampitaina amin'ny taranaka fara mandimby." },
      { q: "Inona no atao hoe vakoka hita maso ?", ra: "Ny vakoka azo tsapain-tanana : tsangambato (monuments), toerana ara-arkeolojika, tany sy tontolo manan-tantara (paysages), sangan'asa kanto, rakitsoratra (documents)." },
      { q: "Omeo ohatra malagasy amin'ny vakoka hita maso.", ra: "Ny Rovan'Ambohimanga, ny vavahady vato, ny aloalo mahafaly, ny sorabe, ny trano gasy nentim-paharazana." },
      { q: "Inona no atao hoe vakoka tsy hita maso ?", ra: "Ny vakoka tsy azo tsapain-tanana fa velona ao amin'ny olona : lovan-tsofina (angano, ohabolana, hainteny), seho an-tsehatra (hiragasy, mozika, dihy), fety sy fombafomba (famadihana, fitampoha)." },
      { q: "Nahoana no sarobidy ny vakoka ?", ra: "Izy no maneho ny maha-malagasy sy ny fitiavan-tanindrazana ; loharano ara-tantara sy harena ara-toekarena (fizahantany) koa izy." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny vakoka ara-kolontsaina dia ny harena navelan'ny razana — hita maso (tsangambato, toerana, sangan'asa, rakitsoratra) sy tsy hita maso (lovan-tsofina, seho an-tsehatra, fety sy fombafomba) ; maneho ny maha-malagasy izy ka tokony hokolokoloina.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ho hita maso na tsy hita maso : a) ny Rovan'Ambohimanga ; b) ny hiragasy ; d) ny sorabe ; e) ny angano.",
      items: [],
      corrige: [[{ text: "a) hita maso", cle: true }, { text: " ; b) " }, { text: "tsy hita maso", cle: true }, { text: " ; d) " }, { text: "hita maso", cle: true }, { text: " ; e) " }, { text: "tsy hita maso", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito ny vakoka ara-kolontsaina ary omeo ohatra roa hita maso sy roa tsy hita maso.",
      items: [],
      corrige: [[{ text: "Ny harena navelan'ny razana maneho ny maha-izy azy ny firenena ary ampitaina amin'ny taranaka", cle: true }, { text: " ; hita maso : " }, { text: "Rovan'Ambohimanga ; aloalo (na vavahady vato, sorabe)", cle: true }, { text: " ; tsy hita maso : " }, { text: "angano ; hiragasy (na famadihana, ohabolana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["vakoka", "hita maso", "tsy hita maso", "lovan-tsofina", "tsangambato", "fombafomba"],
    sections: [
      {
        titre: "1. Ny famaritana ny vakoka ara-kolontsaina",
        paras: [
          "Ny VAKOKA ARA-KOLONTSAINA dia ny harena rehetra navelan'ny razana sy ny taranaka teo aloha : zavatra, toerana, fahalalana ary fomba, izay maneho ny MAHA-IZY AZY ny firenena iray ka ampitaina amin'ny taranaka fara mandimby.",
        ],
      },
      {
        titre: "2. Ny karazany roa",
        paras: [],
        puces: [
          "VAKOKA HITA MASO (matériel) : azo tsapain-tanana — TSANGAMBATO (monuments : rova, vavahady vato, aloalo) ; TOERANA ara-arkeolojika sy tany manan-tantara ; SANGAN'ASA KANTO (sary sokitra, tenona) ; RAKITSORATRA (sorabe, taratasy tranainy) ;",
          "VAKOKA TSY HITA MASO (immatériel) : velona ao amin'ny olona — LOVAN-TSOFINA (angano, ohabolana, hainteny) ; SEHO AN-TSEHATRA (hiragasy, mozika, valiha, dihy) ; FETY SY FOMBAFOMBA (famadihana, fitampoha, alahamady) ; FAHAIZA-MANAO nentim-paharazana (tenona, dokotera nentim-paharazana) ;",
          "SAROBIDY izy satria : maneho ny maha-malagasy sy ny FIREHAREHANA ho malagasy ; loharano ara-tantara ; harena ara-toekarena (fizahantany).",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ny hiragasy : nahoana izy no vakoka tsy hita maso nefa misy olona sy akanjo hita maso ao aminy ? Vahaolana : ny tena vakoka dia tsy ny akanjo na ny sehatra, fa ny FAHAIZA-MANAO sy ny fomba — ny kabary, ny hira, ny dihy, ny fandaminana ny seho — izay velona ao amin'ny mpanao azy ary ampitaina am-bava sy am-panao. Raha maty ny mpahay azy ka tsy nampita, very ny vakoka na dia mbola eo aza ny akanjo.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny Rovan'Ambohimanga dia voasoratra ao amin'ny lisitry ny vakoka maneran-tanin'ny UNESCO nanomboka tamin'ny 2001. » (Fanamarihana)",
      "1. Vakoka hita maso sa tsy hita maso ny Rovan'Ambohimanga ?",
      "2. Inona no dikan'ny fidirany ao amin'ny lisitry ny UNESCO ?",
      "3. Inona no tombony azon'i Madagasikara amin'izany ?",
    ],
  },
  rakibolana: [
    { mg: "Vakoka", fr: "Patrimoine" },
    { mg: "Vakoka hita maso", fr: "Patrimoine matériel" },
    { mg: "Vakoka tsy hita maso", fr: "Patrimoine immatériel" },
    { mg: "Tsangambato", fr: "Monument" },
    { mg: "Lovan-tsofina", fr: "Tradition orale" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Sokajio ho hita maso na tsy hita maso : a) ny famadihana ; b) ny lambamena tranainy ; d) ny ohabolana ; e) ny vavahady vato. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) tsy hita maso", cle: true }, { text: " ; b) " }, { text: "hita maso", cle: true }, { text: " ; d) " }, { text: "tsy hita maso", cle: true }, { text: " ; e) " }, { text: "hita maso", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao antony telo maha-sarobidy ny vakoka. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Maneho ny maha-malagasy (ny maha-izy azy ny firenena) ; loharano ara-tantara ; harena ara-toekarena amin'ny fizahantany", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Omeo ohatra vakoka iray avy amin'ny faritra misy anao ary lazao ny karazany sy ny antony tokony hikolokoloana azy.",
      items: [],
      corrige: [[{ text: "Valiny malalaka : ohatra (rova, aloalo, fitampoha, angano...) + karazany (hita maso / tsy hita maso) + antony (maneho ny maha-izy azy ny faritra, ampitaina amin'ny taranaka)", cle: true }, { text: "." }]],
    },
  ],
};

const S30 = {
  numero: 30, total: 32, lohahevitra: LH,
  titre: "Ny vakoka ara-tantara sy ny fiarovana azy",
  tanjona: "mamaritra ny vakoka ara-tantara ary manazava ny fomba fiarovana sy fampitana azy",
  fanovozanKevitra: DOC,
  fitaovana: "Lahatsoratra, sary, solaitrabe",
  image: "images/img_s30.png",
  imageLegende: "Ny fiarovana ny vakoka : ny fitsidihana toerana manan-tantara sy ny fampitana amin'ny taranaka",
  famerenana: {
    qa: [
      { q: "Farito ny vakoka ara-kolontsaina.", ra: "Ny harena navelan'ny razana maneho ny maha-izy azy ny firenena." },
      { q: "Avaho ny vakoka hita maso sy tsy hita maso (ohatra iray avy).", ra: "Hita maso : rova, aloalo... ; tsy hita maso : angano, hiragasy..." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no mety hanjo ny vakoka raha tsy misy miaro azy (afo, tafio-drivotra, halatra, fanadinoana) ? »",
      "V.A. : Very tsy hiverina intsony izy — koa ilaina ny lalàna sy ny fandraisan'andraikitry ny tsirairay hiarovana azy.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny vakoka ara-tantara sy ny fomba fiarovana sy fampitana azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho tranga ny mpampianatra (ohatra : may ny Rovan'Antananarivo tamin'ny 1995) ary mitarika ny ady hevitra : inona no very ? Ahoana no tokony hiarovana ny vakoka ?",
    mpianatra: "Mandinika ny tranga sy manolotra vahaolana.",
    technique: "Fandinihana tranga", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe vakoka ara-tantara ?", ra: "Ny vakoka mifandray mivantana amin'ny tantaram-pirenena : toerana nisy zava-nitranga lehibe, tsangambato, rakitsoratra ary fahatsiarovana iombonana — hita maso na tsy hita maso." },
      { q: "Omeo ohatra vakoka ara-tantara malagasy.", ra: "Ny Rovan'Ambohimanga sy ny Rovan'Antananarivo, ny vavahady vaton'ny tanàna fahiny, ny sorabe, ny Tantara ny Andriana, ny fahatsiarovana ny 29 martsa 1947." },
      { q: "Inona ireo lalàna miaro ny vakoka eto Madagasikara ?", ra: "Ny hitsivolana 82-029 (6 novambra 1982) momba ny fiarovana ny vakokam-pirenena sy ny didim-panjakana 91-017 (15 janoary 1991) fampiharana azy." },
      { q: "Iza no mpiaro ny vakoka ?", ra: "Ny fanjakana (lalàna, tranombakoka, fikolokoloana ny toerana), ny UNESCO (lisitry ny vakoka maneran-tany), ny fokonolona sy ny fianakaviana (fampitana ny lovan-tsofina) ary ny tsirairay." },
      { q: "Ahoana no ampitana ny vakoka amin'ny taranaka ?", ra: "Fampianarana any an-tsekoly, fitsidihana tranombakoka sy toerana manan-tantara, fandraiketana an-tsoratra ny lovan-tsofina, fanohizana ny fety sy ny fahaiza-manao." },
    ],
    technique: "Fanontaniana mitarika", support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny vakoka ara-tantara dia ny vakoka mifandray amin'ny tantaram-pirenena ; arovan'ny lalàna (hitsivolana 82-029, didim-panjakana 91-017), ny fanjakana, ny UNESCO ary ny tsirairay izy ; ny fampitana azy (sekoly, tranombakoka, fandraiketana) no antoky ny fitadidiana iombonana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny lalàna miaro ny vakokam-pirenena dia ny hitsivolana … (taona …) ; ny fikambanana iraisam-pirenena mitahiry ny lisitry ny vakoka maneran-tany dia ny …",
      items: [],
      corrige: [[{ text: "82-029", cle: true }, { text: " (" }, { text: "1982", cle: true }, { text: ") ; " }, { text: "UNESCO", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito ny vakoka ara-tantara ary tanisao fomba telo hiarovana sy hampitana azy.",
      items: [],
      corrige: [[{ text: "Ny vakoka mifandray mivantana amin'ny tantaram-pirenena (toerana, tsangambato, rakitsoratra, fahatsiarovana)", cle: true }, { text: " ; fiarovana : " }, { text: "lalàna sy tranombakoka ; fampianarana sy fitsidihana ; fandraiketana an-tsoratra ny lovan-tsofina", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["vakoka ara-tantara", "hitsivolana 82-029", "UNESCO", "tranombakoka", "fitadidiana iombonana", "fampitana"],
    sections: [
      {
        titre: "1. Ny vakoka ara-tantara",
        paras: [
          "Ny VAKOKA ARA-TANTARA dia ny vakoka mifandray mivantana amin'ny TANTARAM-PIRENENA : toerana nisy zava-nitranga lehibe, tsangambato, rakitsoratra ary fahatsiarovana iombonana. Mety ho hita maso izy (Rovan'Ambohimanga, vavahady vato, sorabe) na tsy hita maso (ny fitadidiana ny tolona 1947, ny tantara am-bava voarakitra ao amin'ny Tantara ny Andriana).",
        ],
      },
      {
        titre: "2. Ny fiarovana sy ny fampitana azy",
        paras: [],
        puces: [
          "NY LALANA MALAGASY : ny HITSIVOLANA 82-029 (6 novambra 1982) momba ny fiarovana ny vakokam-pirenena sy ny DIDIM-PANJAKANA 91-017 (15 janoary 1991) fampiharana azy ;",
          "NY FANJAKANA : mikarakara ny TRANOMBAKOKA (musées), mikolokolo ny toerana manan-tantara, misoroka ny halatra sy ny fanondranana antsokosoko ;",
          "NY UNESCO : mampiditra ny vakoka lehibe ao amin'ny lisitry ny vakoka maneran-tany (ny Rovan'Ambohimanga, 2001) ;",
          "NY FOKONOLONA SY NY FIANAKAVIANA : mampita ny lovan-tsofina, ny fady sy ny fombafomba ;",
          "NY TSIRAIRAY : mitsidika sy manaja ny toerana, tsy manimba, mandray anjara amin'ny fampitana — FIREHAREHANA ho malagasy izany ;",
          "NY FAMPITANA : fampianarana any an-tsekoly, fitsidihana, FANDRAIKETANA AN-TSORATRA ny lovan-tsofina — antoky ny FITADIDIANA IOMBONANA.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — May ny Rovan'Antananarivo tamin'ny 1995 : inona no lesona raisina ? Vahaolana : very tao anaty afo ny tsangambato sy ny rakitra maro tsy azo soloina ; hita amin'izany fa marefo ny vakoka ka ilaina ny fisorohana (fiambenana, fitaovana famonoana afo), ny fandraiketana (sary, kopia) ary ny fandraisan'andraikitry ny rehetra. Naorina indray ny Rova, saingy ny tena rakitra tranainy dia tsy hiverina intsony.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny vakokam-pirenena dia arovan'ny hitsivolana 82-029 (1982) : voarara ny manimba, mangalatra na manondrana azy tsy ara-dalàna. » (Famintinana)",
      "1. Inona no lalàna miaro ny vakokam-pirenena malagasy ?",
      "2. Tanisao zavatra roa raran'io lalàna io.",
      "3. Inona no anjara asanao manokana amin'ny fiarovana ny vakoka ?",
    ],
  },
  rakibolana: [
    { mg: "Vakoka ara-tantara", fr: "Patrimoine historique" },
    { mg: "Tranombakoka", fr: "Musée" },
    { mg: "Hitsivolana", fr: "Ordonnance (loi)" },
    { mg: "Fitadidiana iombonana", fr: "Mémoire collective" },
    { mg: "Fampitana ny lova", fr: "Transmission du patrimoine" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. hitsivolana 82-029 / 2. UNESCO / 3. tranombakoka / 4. fokonolona — a. mitahiry sy mampiseho ny vakoka ; b. lalàna malagasy 1982 ; d. mampita ny lovan-tsofina ; e. lisitry ny vakoka maneran-tany. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny Rovan'Ambohimanga dia vakoka voasoratry ny UNESCO. b) Ny didim-panjakana 91-017 dia navoaka tamin'ny 1991. d) Ny vakoka tsy hita maso dia tsy mila arovana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : mila arovana sy ampitaina koa izy", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny telo ny anjara asanao amin'ny fiarovana ny vakoka eo amin'ny fiaraha-monina misy anao.",
      items: [],
      corrige: [[{ text: "Valiny malalaka : manaja sy tsy manimba ny toerana manan-tantara ; mianatra sy mandrakitra ny lovan-tsofina (manontany ny zokiolona) ; mampita sy mampahafantatra ny hafa (fireharehana ho malagasy)", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH7: { titre: LH, seances: [S29, S30] } };
