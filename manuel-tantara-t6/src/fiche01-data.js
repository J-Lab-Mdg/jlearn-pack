// fiche01-data.js — Seho 1 : Famaritana ny Tantara (Lohahevitra I)
// Loharano : FRP_6eme_HISTOIRE (FRP T6, fizarana 1-b, 1-d, 1-e) sy PE T6 (nohavaozina)

const S1 = {
  numero: 1, total: 27,
  lohahevitra: "Lohahevitra I — Fampidirana ny fianarana Tantara",
  titre: "Famaritana ny Tantara : ny toetrany sy ny tombontsoa entiny",
  tanjona: "mamaritra ny atao hoe Tantara, milaza ny toetrany ary manazava ny tombontsoa entin'ny fahaizana tantara",
  fanovozanKevitra: "PE T6 (MEN, nohavaozina) ; FRP Tantara T6 (FRP T6, fizarana 1-b, 1-d, 1-e) ; boky Tantara J-Learn",
  fitaovana: "Lahatsoratra (tahirin-kevitra), sary, solaitrabe, kahie",
  image: "images/img_seansa01.png",
  imageLegende: "Ny Tantara : mitantara ny lasa mba hanazavana ny ankehitriny sy hanatsarana ny hoavy",

  famerenana: {
    qa: [
      { q: "Inona no tsaroanao tamin'ny lesona Tantara tany amin'ny ambaratonga fototra ?", ra: "Nianatra momba ny razam-ben'ny Malagasy sy ny mpanjaka fahiny isika." },
      { q: "Milazà zava-nitranga iray efa lasa fantatrao eto amin'ny firenena.", ra: "Ohatra : ny fahaleovantenan'i Madagasikara tamin'ny 26 jona 1960." },
      { q: "Iza no mitantara ny zavatra efa lasa ao amin'ny fianakaviana ?", ra: "Ny ray aman-dreny sy ny raiamandreny be : lovan-tsofina izany." },
    ],
    technique: "Fanontaniana sy valiny am-bava",
    support: "—",
  },

  fanentanana: {
    mpampianatra: [
      "Manontany ny mpampianatra : « Rehefa mody any an-tanàna ianao, iza no mitantara ny niandohan'ny fokontaninao ? Ahoana no ahalalantsika fa marina izany tantara izany ? »",
      "Inona àry no atao hoe Tantara, ary nahoana isika no mianatra azy ?",
      "V.A. : Ny Tantara dia fandinihana ny zava-nitranga tamin'ny lasa ; ianarantsika izy mba hahafantarana ny fototra niaviantsika sy hanatsarana ny hoavy.",
    ],
    mpianatra: "Mihaino, maneho hevitra ary mifanakalo hevitra amin'ny mpiara-mianatra.",
    technique: "Ady hevitra kely (remue-méninges)",
    support: "Solaitrabe",
  },

  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny lesona hoe : « Famaritana ny Tantara ». Rehefa vita ny seho dia afaka mamaritra ny Tantara ianareo, mahalaza ny toetrany ary manazava ny tombontsoa entin'ny fahaizana tantara.",
    mpianatra: "Mihaino ary mandika ny lohateny ao amin'ny kahie.",
    technique: "Filazana mivantana",
    support: "Solaitrabe",
  },

  fandinihana: {
    mpampianatra: "Mizara ny lahatsoratra (tahirin-kevitra) ny mpampianatra : « Ny tantara dia fandinihana ny zava-mitranga, ny zava-bita, ary ny zavatra mikasika azy… ». Asaina mamaky mangina ny mpianatra, avy eo mamaky mafy ; hazavaina ireo teny sarotra : ny lasa, ny daty, ny vanim-potoana, ny zava-nitranga ara-tantara, ny fahamarinana ara-tantara.",
    mpianatra: "Mamaky ny lahatsoratra, manamarika ireo teny sarotra ary manontany.",
    technique: "Famakiana sy fanadihadiana lahatsoratra",
    support: "Lahatsoratra (tahirin-kevitra)",
  },

  famakafakana: {
    qa: [
      { q: "Araka ny lahatsoratra, inona no dinihin'ny Tantara ?", ra: "Ny zava-mitranga sy ny zava-bita tamin'ny lasa." },
      { q: "Iza no antsoina hoe mpahay tantara ?", ra: "Ny olona mandinika sy mitantara ny zava-nitranga tamin'ny lasa." },
      { q: "Ny zava-nitranga ara-tantara ve azo noforonina fotsiny ? Nahoana ?", ra: "Tsia : zava-nisy marina izy ary misy porofo ara-tantara." },
      { q: "Milazà ohatra roa amin'ny zava-nitranga ara-tantara eto Madagasikara.", ra: "Ny fiavian'ny razam-ben'ny Malagasy ; ny tolom-pahafahana malagasy." },
      { q: "Inona no soa azontsika avy amin'ny fahaizana ny tantara ?", ra: "Ahalalana ny fototra niaviana, hanazavana ny ankehitriny ary hanatsarana ny hoavy." },
    ],
    technique: "Fanontaniana mitarika",
    support: "Lahatsoratra nodinihina",
  },

  famintinana: {
    mpampianatra: "Mitarika ny mpianatra handravona : ny Tantara dia siansa mandalina ny lasan'ny olombelona ; manana toetra efatra izy ary mitondra tombontsoa maro ho an'ny fiainana andavanandro.",
    mpianatra: "Mandravona ny lesona ary mandika ny famintinana ao amin'ny kahie.",
    technique: "Fandravonana iombonana",
    support: "Solaitrabe, kahie",
  },

  fampiharana: [
    {
      consigne: "Fenoy : ny Tantara dia fandinihana ny ……… ; ny olona mandinika sy mitantara azy dia antsoina hoe ……… .",
      items: [],
      corrige: [
        [{ text: "Ny " }, { text: "zava-nitranga tamin'ny lasa", cle: true }, { text: " ; antsoina hoe " }, { text: "mpahay tantara", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Marina sa diso : « Ny zava-nitranga ara-tantara dia tsy voafaritra ny toerana sy ny fotoana nitrangany. » Hazavao.",
      items: [],
      corrige: [
        [{ text: "Diso", cle: true }, { text: " : ny zava-nitranga ara-tantara dia " }, { text: "voafaritra mazava ny toerana sy ny fotoana", cle: true }, { text: " nitrangany." }],
      ],
    },
  ],
  fampiharanaTechnique: "Asa mitambatra (tsiroaroa)",
  fampiharanaSupport: "Solaitra kely",

  tombana: [
    {
      consigne: "Omeo ny famaritana ny Tantara amin'ny fehezanteny iray.",
      items: [],
      corrige: [
        [{ text: "Ny Tantara dia " }, { text: "siansa mandalina sy mitantara ny zava-nitranga marina tamin'ny lasan'ny olombelona", cle: true }, { text: "." }],
      ],
    },
    {
      consigne: "Milazà tombontsoa roa azo avy amin'ny fahaizana tantara.",
      items: [],
      corrige: [
        [{ text: "Ohatra : " }, { text: "ahalalana ny fototra niaviana", cle: true }, { text: " ; " }, { text: "ahaizana misoroka ireo tsy nety teo aloha", cle: true }, { text: "." }],
      ],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra mitokana",
  tombanaSupport: "Kahie fanazaran-tena",

  lesona: {
    motsCles: ["Tantara", "mpahay tantara", "zava-nitranga", "porofo ara-tantara", "lovan-tsofina", "vanim-potoana"],
    sections: [
      {
        titre: "1. Famaritana ny Tantara",
        paras: [
          "Ny TANTARA dia fandinihana ny zava-mitranga, ny zava-bita ary ny zavatra mikasika azy tamin'ny lasa. Fitaratry ny zava-nitranga efa lasa izy : mampahafantatra antsika toe-javatra efa nisy marina.",
          "Avy amin'ny teny grika hoe « historia », midika hoe « fanadihadiana », ny teny frantsay hoe Histoire. Siansa mandalina ny lasan'ny olombelona àry ny Tantara : mamakafaka ny zava-nitranga (fanjakana, ady, revolisiona), ny fivoaran'ny siansa sy ny teknika, ny fomba fiaina ary ny fomba fisainana.",
          "Ny olona mandinika sy mitantara ireo zava-nitranga ireo dia antsoina hoe MPAHAY TANTARA (« historien »).",
        ],
        puces: [
          "ohatra amin'ny zava-nitranga ara-tantara : ny fiavian'ny razam-ben'ny Malagasy ;",
          "ny mpanjakan'i Madagasikara nifandimby ;",
          "ny tolom-pahafahana malagasy ;",
          "ny ady lehibe voalohany sy faharoa.",
        ],
      },
      {
        titre: "2. Ny toetran'ny zava-nitranga ara-tantara",
        paras: [
          "Tsy ny zavatra rehetra tantaraina no Tantara ! Manana toetra efatra mampiavaka azy ny zava-nitranga ara-tantara :",
        ],
        puces: [
          "ZAVA-NISY MARINA izy, niseho teo amin'ny fiarahamonina, teo amin'ny faritra na teo amin'ny firenena iray, eo amin'ny lafiny ara-piarahamonina, ara-toekarena na ara-politika ;",
          "VOAFARITRA MAZAVA ny toerana sy ny fotoana nitrangany (taiza ? oviana ?) ;",
          "MIOVA araka ny fotoana sy ny toerana isehoany ;",
          "MISY POROFO ara-tantara (soratra, fitaovana, vavolombelona…).",
          "Tandremo : ny angano sy ny arira dia tsy Tantara, satria tsy misy porofo ary tsy voafaritra ny toerana sy ny fotoana nitrangany !",
        ],
      },
      {
        titre: "3. Ny tombontsoa entin'ny fahaizana tantara",
        paras: [
          "Manana ny anjara asany eo amin'ny fiainana andavanandro ny Tantara. Ny fahafantarana ny tantara dia :",
        ],
        puces: [
          "ahafahana mahafantatra ny FOTOTRA NIAVIANA (ohatra : ny tantaran'ny faritra iray, ny fiavian'ny mponina malagasy) ;",
          "ahalalana sy hanazavana ny ZAVA-MISY ANKEHITRINY (ohatra : ny fahaleovantena, ny zon'olombelona, ny fady amin'ny toerana iray) ;",
          "ahitana ny FIVOARANA na ny fiovana eo an-toerana ;",
          "ahaizana MISOROKA ireo tsy nety teo aloha ;",
          "ahaizana ny tantaran'ireo olo-malaza sy ny asa vitany, ka ahafahana MANATSARA NY HOAVY.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Ohatra 1 — Lazao raha zava-nitranga ara-tantara ny « fahaleovantenan'i Madagasikara », ary hamarino amin'ny toetra efatra. Vahaolana : zava-nisy marina izy (niseho teto amin'ny firenena) ; voafaritra mazava ny fotoana sy ny toerana (26 jona 1960, tao Antananarivo) ; niova ny fiainam-pirenena taorian'izay ; misy porofo (soratra ofisialy, sary, vavolombelona). Zava-nitranga ara-tantara tokoa àry izy.",
          "Ohatra 2 — Ny angano hoe « Ibonia » ve Tantara sa tsia ? Hazavao. Vahaolana : tsia, tsy Tantara izy fa angano : tsy voafaritra ny toerana sy ny fotoana nitrangany, ary tsy misy porofo ara-tantara. Kanefa sarobidy ho an'ny kolontsaina malagasy izy ary azon'ny mpahay tantara dinihina ho loharano ahalalana ny fomba fisainan'ny Ntaolo.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny grika Herodota (Hérodote, taonjato faha-5 talohan'i J.K.) no antsoina hoe « rain'ny Tantara » : izy no voalohany nanadihady sy nandrakitra an-tsoratra ny zava-nitranga, ka avy amin'ny bokiny « Historia » no niavian'ny anaran'ity siansa ity.",
      "Ny « Tantara ny Andriana eto Madagasikara », nangonin'ny Mompera Callet nanomboka tamin'ny 1868, dia lovan-tsofina malagasy voarakitra an-tsoratra : boky mihoatra ny pejy 1 200 izay lasa loharano lehibe indrindra ahalalana ny tantaran'ny Imerina !",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio ny fanontaniana :",
      "« Ny tantara dia fandinihana ny zava-mitranga, ny zava-bita, ary ny zavatra mikasika azy. Ny tantara dia zavatra tantaraina, izy io dia fitaratry ny zava-mitranga efa lasa, ary ny olona mandinika sy mitantara io zavatra io dia lazaina hoe mpahay tantara. » (Loharano : FRP Tantara T6, MEN)",
      "1. Araka ity lahatsoratra ity, inona no atao hoe Tantara ?",
      "2. Iza no antsoina hoe mpahay tantara ?",
      "3. Nahoana ny Tantara no lazaina fa « fitaratry ny zava-mitranga efa lasa » ?",
    ],
  },

  rakibolana: [
    { mg: "Tantara", fr: "Histoire" },
    { mg: "Mpahay tantara", fr: "Historien" },
    { mg: "Zava-nitranga ara-tantara", fr: "Événement historique" },
    { mg: "Porofo ara-tantara", fr: "Preuve historique" },
    { mg: "Lovan-tsofina", fr: "Tradition orale" },
    { mg: "Vanim-potoana", fr: "Période, époque" },
  ],

  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy ny banga : ny teny hoe Tantara dia avy amin'ny teny grika hoe ……… izay midika hoe ……… ; ny olona mandinika sy mitantara ny lasa dia antsoina hoe ……… .",
      items: [],
      corrige: [
        [{ text: "Avy amin'ny teny grika hoe " }, { text: "historia", cle: true }, { text: " izay midika hoe " }, { text: "fanadihadiana", cle: true }, { text: " ; antsoina hoe " }, { text: "mpahay tantara", cle: true }, { text: ". (1 isa isaky ny banga)" }],
      ],
    },
    {
      points: 4,
      consigne: "Lazao ireo toetra efatra mampiavaka ny zava-nitranga ara-tantara. (1 isa avy)",
      items: [],
      corrige: [
        [{ text: "1. " }, { text: "Zava-nisy marina", cle: true }, { text: " ; 2. " }, { text: "voafaritra mazava ny toerana sy ny fotoana", cle: true }, { text: " ; 3. " }, { text: "miova araka ny fotoana sy ny toerana", cle: true }, { text: " ; 4. " }, { text: "misy porofo ara-tantara", cle: true }, { text: "." }],
      ],
    },
    {
      points: 3,
      consigne: "Sokajio : « ny fahaleovantenan'i Madagasikara (1960) » sy « ny anganon'Ibonia ». Iza no zava-nitranga ara-tantara ? Hazavao amin'ny fehezanteny roa.",
      items: [],
      corrige: [
        [{ text: "Ny " }, { text: "fahaleovantena (1960) no zava-nitranga ara-tantara", cle: true }, { text: " : zava-nisy marina, voafaritra ny daty sy ny toerana, misy porofo (1,5 isa). Ny " }, { text: "anganon'Ibonia dia tsy Tantara", cle: true }, { text: " : tsy misy porofo ary tsy voafaritra ny fotoana nitrangany (1,5 isa)." }],
      ],
    },
  ],
};

module.exports = S1;
