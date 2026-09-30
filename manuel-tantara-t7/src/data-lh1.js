// data-lh1.js — Lohahevitra I : Ny tantara am-bava (S1-S2)
const LH = "Lohahevitra I — Ny tantara am-bava (L'Histoire orale)";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S1 = {
  numero: 1, total: 32, lohahevitra: LH,
  titre: "Ny tantara am-bava sy ny dingan'ny tetikasa fanadihadiana",
  tanjona: "mamaritra ny tantara am-bava ary mitanisa ireo dingana amin'ny fanomanana tetikasa fanadihadiana am-bava",
  fanovozanKevitra: DOC,
  fitaovana: "Taratasy fanadihadiana, solaitrabe, kahie",
  image: "images/img_s01.png",
  imageLegende: "Zoky ray aman-dreny mitantara ny lovan-tsofina amin'ny ankizy",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe Tantara ?", ra: "Siansa mandalina ny zava-nitranga marina tamin'ny lasan'ny olombelona." },
      { q: "Tanisao ireo sokajin'ny loharano ara-tantara telo.", ra: "Loharano an-tsoratra, loharano am-bava, loharano moana (fitaovana, tsangam-bato...)." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Iza aminareo no efa nihaino angano na tantaran'ny fianakaviana notantarain'ny raibe na renibe ? Ahoana no ahafantarantsika ny tantaran'ny vohitra tsy misy boky ? »",
      "V.A. : Amin'ny alalan'ny vavan'ny olona nahita na nandre — izany no tantara am-bava.",
    ],
    mpianatra: "Mamaly sy mitantara ny traikefany.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tantara am-bava sy ireo dingana amin'ny fanomanana tetikasa fanadihadiana am-bava.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho taratasy fanadihadiana ny mpampianatra ary manazava ny dingana dimy : safidin'ny lohahevitra voafetra, fanomanana fanontaniana, famantarana ny olona hanontaniana, famaritana ny toerana, fangatahana fotoana.",
    mpianatra: "Mandinika ny taratasy fanadihadiana sy ny dingana.",
    technique: "Fandinihana tahirin-kevitra", support: "Taratasy fanadihadiana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe tantara am-bava ?", ra: "Ny fitantarana ny lasa amin'ny alalan'ny vava : lovan-tsofina, angano, kabary, hira, ary ny fijoroan'ny vavolombelona velona." },
      { q: "Inona no dingana voalohany amin'ny tetikasa fanadihadiana ?", ra: "Ny misafidy lohahevitra voafetra ao anatin'ny fotoana sy ny toerana (ohatra : ny tantaran'ny vohitra 1950-2000)." },
      { q: "Nahoana no tokony hofaritana tsara ny lohahevitra ?", ra: "Mba tsy hivezivezena lavitra loatra ka ho mora ny fanadihadiana sy ny fitantarana azy." },
      { q: "Iza avy no azo atao « olona loharano » ?", ra: "Ny zokiolona, ny loholona, ny mpitahiry ny lovan-tsofina, ny vavolombelona nahita ny zava-nitranga." },
      { q: "Inona no atao alohan'ny fihaonana ?", ra: "Manomana ny fanontaniana, mamaritra ny toerana ary mangataka fotoana amin'ny olona hanontaniana." },
    ],
    technique: "Fanontaniana mitarika", support: "Taratasy fanadihadiana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny tantara am-bava dia loharano sarobidy ho an'ny tantaran'i Madagasikara ; dingana dimy no anomanana ny tetikasa fanadihadiana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany : a) mangataka fotoana ; b) misafidy lohahevitra ; d) manomana fanontaniana ; e) mamantatra ny olona hanontaniana.",
      items: [],
      corrige: [[{ text: "b) misafidy lohahevitra", cle: true }, { text: " → " }, { text: "d) manomana fanontaniana", cle: true }, { text: " → " }, { text: "e) mamantatra ny olona", cle: true }, { text: " → " }, { text: "a) mangataka fotoana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Omeo ny famaritana ny tantara am-bava ary tanisao ny dingana dimy amin'ny tetikasa fanadihadiana.",
      items: [],
      corrige: [[{ text: "Fitantarana ny lasa amin'ny alalan'ny vava (lovan-tsofina, vavolombelona)", cle: true }, { text: " ; dingana : " }, { text: "safidin'ny lohahevitra, fanontaniana, olona loharano, toerana, fotoana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["tantara am-bava", "lovan-tsofina", "fanadihadiana", "olona loharano", "vavolombelona", "lohahevitra voafetra"],
    sections: [
      {
        titre: "1. Inona no atao hoe tantara am-bava ?",
        paras: [
          "Ny TANTARA AM-BAVA dia ny fitantarana sy ny fitahirizana ny lasa amin'ny alalan'ny vava, ampitaina amin'ny taranaka mifandimby. Anisan'izany ny lovan-tsofina, ny angano, ny kabary, ny hira, ny ohabolana ary ny fijoroan'ny vavolombelona velona.",
          "Sarobidy indrindra izy io ho an'i Madagasikara : nandritra ny taonjato maro dia tsy nisy soratra ny ankamaroan'ny faritra, ka ny vava no nitahiry ny tantaran'ny fianakaviana, ny vohitra ary ny fanjakana. Ny « Tantara ny Andriana » aza dia nangonina avy tamin'ny lovan-tsofina.",
        ],
      },
      {
        titre: "2. Ireo dingana dimy amin'ny tetikasa fanadihadiana am-bava",
        paras: [],
        puces: [
          "MISAFIDY LOHAHEVITRA VOAFETRA ao anatin'ny fotoana sy ny toerana : ohatra « ny tantaran'ny tsenan'ny tanànanay (1980-2020) » fa tsy « ny tantaran'i Madagasikara » ;",
          "MANOMANA NY FANONTANIANA mikasika ny lohahevitra : fanontaniana mazava, milamina, tsy mitanila ;",
          "MAMANTATRA NY OLONA LOHARANO sy ny olona hanontaniana : zokiolona, loholona, vavolombelona ;",
          "MAMARITRA NY TOERANA hihaonana : toerana mangina sy mahazo aina ny olona anontaniana ;",
          "MANGATAKA FOTOANA amim-panajana : manazava ny antony sy ny fampiasana ny valiny.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Te hanadihady ny tantaran'ny sekolinao i Lala. Inona no dingana roa voalohany ataony ? Vahaolana : mamaritra ny lohahevitra sy ny fe-potoana aloha izy (ohatra : « ny sekolinay 1970-2025 »), avy eo manomana fanontaniana toy ny hoe « Oviana no nisokatra ny sekoly ? Iza no talen'ny sekoly voalohany ? Firy ny mpianatra tamin'izany ? »",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny vavolombelona iray maty dia toy ny tranombokim-pirenena may. Koa maika ny fanangonana ny tantara am-bava, dieny mbola velona ireo zokiolona mitahiry ny fahatsiarovana. » (Nadika sy nalalaka avy amin'ny hevitr'i Amadou Hampâté Bâ, mpanoratra malianina, 1960)",
      "1. Inona no ampitahaina amin'ny tranomboky may ?",
      "2. Nahoana no maika ny fanangonana ny tantara am-bava ?",
      "3. Inona no azonao atao eo anivon'ny fianakavianao ?",
    ],
  },
  rakibolana: [
    { mg: "Tantara am-bava", fr: "Histoire orale" },
    { mg: "Lovan-tsofina", fr: "Tradition orale" },
    { mg: "Fanadihadiana", fr: "Enquête" },
    { mg: "Olona loharano", fr: "Personne ressource" },
    { mg: "Vavolombelona", fr: "Témoin" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny tantara am-bava dia voasoratra anaty boky. b) Ny lovan-tsofina dia ampitaina amin'ny taranaka mifandimby. d) Ny « Tantara ny Andriana » dia nangonina avy tamin'ny lovan-tsofina. e) Tsy ilaina ny mamaritra ny fotoana sy ny toerana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : am-bava izy fa tsy an-tsoratra", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : dingana voalohany aza izany", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. lovan-tsofina / 2. vavolombelona / 3. olona loharano — a. olona nahita maso ny zava-nitranga ; b. fahalalana ampitain'ny vava hatramin'ny razana ; d. olona mitahiry fahalalana azo anontaniana.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty ny fanontaniana telo hanontanianao zokiolona iray momba ny tantaran'ny tanànanao.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "Oviana no niorina ny tanàna ? Iza no fianakaviana nonina voalohany ? Inona ny zava-dehibe nitranga teto ?", cle: true }, { text: " (fanontaniana mazava sy mifandraika amin'ny lohahevitra)." }]],
    },
  ],
};

const S2 = {
  numero: 2, total: 32, lohahevitra: LH,
  titre: "Ny fanatanterahana ny fanadihadiana am-bava sy ny tatitra",
  tanjona: "manatanteraka fanadihadiana am-bava araka ny fitsipika ary mandrafitra tatitra azo itokisana",
  fanovozanKevitra: DOC,
  fitaovana: "Taratasy fanontaniana, kahie fandraisana an-tsoratra, solaitrabe",
  image: "images/img_s02.png",
  imageLegende: "Mpianatra manadihady zokiolona sy mandray an-tsoratra",
  famerenana: {
    qa: [
      { q: "Tanisao ny dingana dimy amin'ny fanomanana ny fanadihadiana.", ra: "Lohahevitra voafetra ; fanontaniana ; olona loharano ; toerana ; fotoana." },
      { q: "Inona no atao hoe olona loharano ?", ra: "Olona mitahiry fahalalana momba ny lohahevitra ka azo anontaniana." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Vonona ny fanontanianao, azonao ny fotoana. Inona indray no atao rehefa tonga eo anatrehan'ilay zokiolona ianao ? Ary rehefa vita ny resaka ? »",
      "V.A. : Mihaino tsara, mandray an-tsoratra, manaja — ary avy eo manamarina sy manao tatitra.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fanatanterahana ny fanadihadiana am-bava : ny fihaonana, ny fitsikerana ny loharano ary ny tatitra.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny kilasy ho vondrona ny mpampianatra ary manolotra sehatra an-tsehatra (jeu de rôle) : ny iray mpanadihady, ny iray zokiolona. Dinihina ny fihetsika mety sy tsy mety.",
    mpianatra: "Manatanteraka ny sehatra ary mitsikera.",
    technique: "Sehatra an-tsehatra", support: "Taratasy fanontaniana",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny fitsipika arahina mandritra ny fihaonana ?", ra: "Miarahaba sy manazava ny antony ; mihaino tsara tsy manapaka teny ; mandray an-tsoratra na mirakitra feo (rehefa mahazo alalana) ; misaotra amin'ny farany." },
      { q: "Nahoana no mila alalana vao mirakitra feo ?", ra: "Fanajana ny zon'ny olona anontaniana : izy no tompon'ny teniny." },
      { q: "Vita ny fanadihadiana. Azo inoana avy hatrany ve ny zavatra rehetra voalaza ?", ra: "Tsia. Mety hadino na hiova ny fahatsiarovana ka ilaina ny fitsikerana : mampitaha amin'ny vavolombelona hafa na amin'ny loharano an-tsoratra sy moana." },
      { q: "Inona no ao anaty tatitra tsara ?", ra: "Ny lohahevitra sy ny fe-potoana ; ny olona nanontaniana ; ny fanontaniana sy ny valiny voarindra ; ny fehin-kevitra sy ny zavatra mbola tsy mazava." },
      { q: "Amin'ny endrika inona no azo anaovana ny tatitra ?", ra: "An-tsoratra (kahie, taratasy), am-bava (famelabelarana eo anoloan'ny kilasy), an-tsary (fafana, sary)." },
    ],
    technique: "Fanontaniana mitarika", support: "Solaitrabe",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : fanajana sy fihainoana no fototry ny fanadihadiana ; ny fampitahana ny loharano no miantoka ny fahamarinana ; ny tatitra no mampita ny vokatra.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fihetsika mety sa tsy mety ? a) Manapaka ny tenin'ny zokiolona ianao. b) Mangataka alalana vao mirakitra feo. d) Mampitaha ny valiny amin'ny loharano hafa. e) Manadino ny misaotra.",
      items: [],
      corrige: [[{ text: "a) tsy mety", cle: true }, { text: " ; b) " }, { text: "mety", cle: true }, { text: " ; d) " }, { text: "mety", cle: true }, { text: " ; e) " }, { text: "tsy mety", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Nahoana no tsy maintsy ampitahaina amin'ny loharano hafa ny vokatry ny fanadihadiana am-bava ?",
      items: [],
      corrige: [[{ text: "Satria mety hadino, hiova na hitanila ny fahatsiarovana ; ny fampitahana (recoupement) no miantoka ny fahamarinana ara-tantara", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fihaonana", "fandraisana an-tsoratra", "fitsikerana ny loharano", "fampitahana", "tatitra", "fanajana"],
    sections: [
      {
        titre: "1. Ny fihaonana sy ny fanadihadiana",
        paras: [
          "Rehefa tonga eo anatrehan'ny olona anontaniana : MIARAHABA sy manazava ny antony aloha ; MIHAINO TSARA ary avela hiteny malalaka izy ; MANDRAY AN-TSORATRA ny teny manan-danja (na mirakitra feo rehefa nahazo alalana) ; MISAOTRA amin'ny farany ary manontany raha azo iverenana indray.",
          "Ny fanajana no lakilen'ny fanadihadiana : ny zokiolona no manome antsika ny harenany, dia ny fahatsiarovany.",
        ],
      },
      {
        titre: "2. Ny fitsikerana ny loharano am-bava",
        paras: [
          "Ny fahatsiarovan'ny olombelona dia mety hadino, mety hiova ary mety hitanila. Noho izany ny mpahay tantara dia MITSIKERA ny loharano am-bava : mampitaha ny filazan'ny vavolombelona maro, mampitaha amin'ny loharano an-tsoratra sy moana, mandinika hoe iza no miteny, oviana ary nahoana.",
        ],
        puces: [
          "Fanontaniana fitsikerana : Nahita maso ve ilay olona sa nandre tamin'ny hafa ?",
          "Mifanaraka amin'ny loharano hafa ve ny filazany ?",
          "Misy tombontsoa arovany ve izy amin'ny fitantarana ?",
        ],
      },
      {
        titre: "3. Ny tatitra (restitution)",
        paras: [
          "Ny tatitra no mamarana ny tetikasa : arindra ao ny lohahevitra sy ny fe-potoana, ny olona nanontaniana, ny valiny voarindra araka ny hevi-dehibe, ary ny fehin-kevitra. Azo atao an-tsoratra, am-bava (famelabelarana) na an-tsary (fafana). Tsara ny milaza koa izay mbola tsy mazava, mba hotohizan'ny mpikaroka hafa.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Nanadihady ny raibeny momba ny tsenan'ny tanàna i Vero. Hoy ny raibeny : “Nisokatra tamin'ny 1965 ny tsena.” Nanamarina tany amin'ny ben'ny tanàna i Vero ka nahita rakitsoratra milaza fa 1968 no marina. » ",
      "1. Loharano firy no nampiasain'i Vero ?",
      "2. Inona no anaran'ilay fomba fanamarinana nataony ?",
      "3. Inona no soratany ao amin'ny tatiny ?",
    ],
  },
  rakibolana: [
    { mg: "Fitsikerana ny loharano", fr: "Critique des sources" },
    { mg: "Fampitahana", fr: "Recoupement" },
    { mg: "Tatitra", fr: "Compte rendu, restitution" },
    { mg: "Firaketam-peo", fr: "Enregistrement audio" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Alaharo araka ny filaharany : a) tatitra ; b) fiarahabana sy fanazavana ; d) fandraisana an-tsoratra ; e) fampitahana amin'ny loharano hafa. (1 isa avy)",
      items: [],
      corrige: [[{ text: "b", cle: true }, { text: " → " }, { text: "d", cle: true }, { text: " → " }, { text: "e", cle: true }, { text: " → " }, { text: "a", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nilaza ny zokiolona iray fa « tamin'ny andron'ny mosary lehibe » no nitrangan'ny zavatra iray. Inona no ataonao mba hahitana ny taona marina ?",
      items: [],
      corrige: [[{ text: "Manontany vavolombelona hafa sy mampitaha amin'ny loharano an-tsoratra (gazety, rakitsoratra) mba hamaritana ny taonan'ilay mosary", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao zavatra telo tsy maintsy hita ao anaty tatitra tsara.",
      items: [],
      corrige: [[{ text: "Ny lohahevitra sy ny fe-potoana ; ny olona nanontaniana ; ny valiny voarindra sy ny fehin-kevitra", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH1: { titre: LH, seances: [S1, S2] } };
