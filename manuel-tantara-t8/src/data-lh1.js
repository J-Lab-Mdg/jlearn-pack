// data-lh1.js — Lohahevitra I : Ny tantara am-bava (S1-S2) — T8
const LH = "Lohahevitra I — Ny tantara am-bava (L'Histoire orale)";
const DOC = "PE T8 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S1 = {
  numero: 1, total: 32, lohahevitra: LH,
  titre: "Ny fanatanterahana ny fanadihadiana am-bava",
  tanjona: "manatanteraka fanadihadiana am-bava : mamaritra ny lohahevitra, mandrafitra ny fanontaniana ary mitarika ny resadresaka araka ny fomba mety",
  fanovozanKevitra: DOC,
  fitaovana: "Taratasy fanadihadiana, fandraisam-peo (finday raha misy), kahie, solaitrabe",
  image: "images/img_s01.png",
  imageLegende: "Mpianatra manadihady zokiolona sy mandray an-tsoratra ny fitantarany",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe tantara am-bava ?", ra: "Ny fitantarana sy ny fitahirizana ny lasa amin'ny alalan'ny vava : lovan-tsofina, angano, fijoroan'ny vavolombelona." },
      { q: "Tanisao ny dingana amin'ny fanomanana tetikasa fanadihadiana (hita tamin'ny T7).", ra: "Safidin'ny lohahevitra, fanomanana fanontaniana, famantarana ny olona hanontaniana, fanaovana fotoana, famelabelarana." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Raha hanontany zokiolona momba ny fiainany tamin'ny fahazazany ianao, ahoana no hitarihanao ny resaka mba hahazoana vaovao be dia be ? »",
      "V.A. : Mila fanajana, fihainoana, fanontaniana mazava, ary famelana azy hitantara malalaka.",
    ],
    mpianatra: "Mamaly sy mifanakalo hevitra.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fanatanterahana marina ny fanadihadiana am-bava : ny famaritana ny lohahevitra, ny fandrafetana ny fanontaniana ary ny fitarihana ny resadresaka.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho taratasy fanadihadiana feno (lohahevitra, fanontaniana, anaran'ny vavolombelona) ny mpampianatra ary manazava ny fitsipika arahina mandritra ny resadresaka.",
    mpianatra: "Mandinika ny taratasy fanadihadiana sy ny fitsipiky ny resadresaka.",
    technique: "Fandinihana tahirin-kevitra", support: "Taratasy fanadihadiana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no dingana telo lehibe amin'ny fanadihadiana am-bava ?", ra: "Ny famaritana ny lohahevitra sy ny zavatra hodinihina ; ny fandrafetana ny fanontaniana ; ny fanatanterahana ny resadresaka sy ny fandinihana." },
      { q: "Ahoana no fitarihana resadresaka mahomby ?", ra: "Mifanaraka mialoha amin'ny olona, mijery azy mivantana, maneho fiaraha-miory (empatia), mametraka fanontaniana tokana isaky ny mandeha." },
      { q: "Inona no atao raha mivily lavitra ny resaka ?", ra: "Averina amin'ny lohahevitra amim-pahalemem-panahy ny resadresaka (recadrer)." },
      { q: "Nahoana no avela hitantara malalaka ny vavolombelona ?", ra: "Satria ny fitantarana ny zavatra niainany mivantana no loharano sarobidy indrindra ; avy eo vao alamina ny fahatsiarovana mba hamerenana ny fiainany." },
      { q: "Ankoatra ny resaka, inona koa no azo angonina ?", ra: "Sary, taratasy, fitaovana tranainy an'ny olona nanontaniana, ary sarin'ny vavolombelona sy ireo zavatra ireo (miaraka amin'ny fahazoan-dalana)." },
    ],
    technique: "Fanontaniana mitarika", support: "Taratasy fanadihadiana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny fanadihadiana am-bava mahomby dia mila lohahevitra voafetra, fanontaniana voaomana ary resadresaka feno fanajana sy fihainoana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Marina sa diso ireto fitsipiky ny resadresaka ireto ? a) Apetraka miaraka ny fanontaniana maro. b) Jerena mivantana ny olona anontaniana. d) Tapahina ny teniny raha lava loatra. e) Angonina koa ny sary sy ny fitaovana tranainy.",
      items: [],
      corrige: [[{ text: "a) Diso : fanontaniana tokana isaky ny mandeha", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : avela hitantara malalaka izy, fa averina amin'ny lohahevitra amim-pahalemem-panahy raha mivily", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ny dingana telo lehibe amin'ny fanadihadiana am-bava ary omeo fitsipika roa arahina mandritra ny resadresaka.",
      items: [],
      corrige: [[{ text: "Famaritana ny lohahevitra ; fandrafetana ny fanontaniana ; fanatanterahana ny resadresaka", cle: true }, { text: " ; fitsipika : " }, { text: "fanontaniana tokana isaky ny mandeha ; fijerena mivantana sy empatia (na : famelana hitantara malalaka, fanajana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanadihadiana am-bava", "resadresaka", "vavolombelona", "empatia", "fanontaniana tokana", "fandraisam-peo"],
    sections: [
      {
        titre: "1. Ny fiomanana amin'ny fanadihadiana",
        paras: [
          "Ny FANADIHADIANA AM-BAVA dia asa fikarohana : mamaritra aloha ny LOHAHEVITRA sy ny zavatra tena hodinihina isika (ohatra : ny fiainan'ny mpianatra tamin'ny taona 1970), avy eo mandrafitra ny FANONTANIANA mazava mifandraika amin'izany.",
          "Safidina tsara ny olona hanontaniana : olona niaina na nahita ny zava-nitranga (vavolombelona), na olona mitahiry ny lovan-tsofina. Omanina koa ny fitaovana : kahie, penina, fandraisam-peo na finday, fakan-tsary raha misy.",
        ],
      },
      {
        titre: "2. Ny fitsipiky ny resadresaka",
        paras: [],
        puces: [
          "MIFANARAKA MIALOHA : lazaina ny antony sy ny fampiasana ny valiny, ary mangataka fahazoan-dalana ;",
          "MIJERY MIVANTANA ny olona anontaniana ary maneho EMPATIA (fiaraha-miory sy fahazoana ny fihetseham-pony) ;",
          "FANONTANIANA TOKANA isaky ny mandeha, mazava sady tsotra ;",
          "AVELA HITANTARA MALALAKA ny vavolombelona ny zavatra niainany sy ny fahatsiarovany ;",
          "AVERINA AMIN'NY LOHAHEVITRA amim-pahalemem-panahy ny resaka raha mivily (recadrer) ;",
          "ALAMINA ny fahatsiarovana sy ny fitantarana mba hamerenana ny fiainan'ilay olona ;",
          "ANGONINA koa ny sary, ny taratasy ary ny fitaovana tranainy mifandraika amin'ny vanim-potoana.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nanontany zokiolona momba ny havandra lehibe tamin'ny 1984 i Vola, kanefa lasa nitantara ny fambolena katsaka ilay olona. Inona no ataony ? Vahaolana : tsy manapaka ny teniny izy fa miandry kely, avy eo mamerina ny resaka amim-panajana : « Mahaliana izany ! Ary tamin'ilay havandra tamin'ny 1984, mbola tadidinao ve ny andro nitrangany ? » — izany no atao hoe mamerina ny resadresaka amin'ny lohahevitra.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Rehefa manadihady aho dia tsy mitondra afa-tsy kahie kely sy ny sofiko. Ny olona anontaniako no mpampianatra ahy : izaho mihaino, izy mitantara. Ny fanontaniako dia varavarana fa tsy fefy. » (Tenin'ny mpikaroka iray momba ny tantara am-bava, nalalaka)",
      "1. Inona no dikan'ny hoe « ny fanontaniako dia varavarana fa tsy fefy » ?",
      "2. Nahoana ny mpikaroka no milaza fa ny olona anontaniana no « mpampianatra » azy ?",
      "3. Inona no fitsipika roa hitanao ao amin'ity tahirin-kevitra ity ?",
    ],
  },
  rakibolana: [
    { mg: "Fanadihadiana am-bava", fr: "Enquête orale" },
    { mg: "Resadresaka", fr: "Entretien" },
    { mg: "Vavolombelona", fr: "Témoin" },
    { mg: "Empatia (fiaraha-miory)", fr: "Empathie" },
    { mg: "Fandraisam-peo", fr: "Magnétophone, enregistreur" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny dingana voalohany dia ny famaritana ny lohahevitra. b) Azo apetraka miaraka ny fanontaniana dimy. d) Ny empatia dia ny fahazoana ny fihetseham-pon'ny olona anontaniana. e) Ny sary sy ny fitaovana tranainy dia tsy loharano. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : fanontaniana tokana isaky ny mandeha", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : loharano sarobidy izy ireo", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. recadrer / 2. empatia / 3. vavolombelona — a. olona nahita maso ny zava-nitranga ; b. famerenana ny resaka amin'ny lohahevitra ; d. fahazoana ny fihetseham-pon'ny hafa.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hanadihady ny tantaran'ny tsenan'ny tanànanao ianao : soraty ny lohahevitra voafetra, ny olona hanontanianao ary fanontaniana roa hapetrakao.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "« Ny tsenan'ny tanànanay (1980-2020) » ; zokiolona mpivarotra ela ; « Oviana no nisokatra ny tsena ? Inona no entam-barotra voalohany namidy teto ? »", cle: true }, { text: " (lohahevitra voafetra + olona mifandraika + fanontaniana mazava)." }]],
    },
  ],
};

const S2 = {
  numero: 2, total: 32, lohahevitra: LH,
  titre: "Ny famokarana loharano am-bava",
  tanjona: "mamokatra loharano am-bava : mametraka olan-kevitra, mitsikera sy mandika ny loharano ary mandrafitra ny vokatry ny fikarohana",
  fanovozanKevitra: DOC,
  fitaovana: "Taratasy fanadihadiana, fandraisam-peo, kahie, tahirin-kevitra an-tsoratra",
  image: "images/img_s02.png",
  imageLegende: "Mpianatra mandika sy mandamina ny vokatry ny fanadihadiana",
  famerenana: {
    qa: [
      { q: "Tanisao ny dingana telo lehibe amin'ny fanadihadiana am-bava.", ra: "Famaritana ny lohahevitra, fandrafetana ny fanontaniana, fanatanterahana ny resadresaka." },
      { q: "Omeo fitsipika roa arahina mandritra ny resadresaka.", ra: "Fanontaniana tokana isaky ny mandeha ; famelana ny vavolombelona hitantara malalaka (na : empatia, recadrer)." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Vita ny resadresaka, feno ny kahie sy ny fandraisam-peo. Inona no atao amin'ireo vaovao ireo mba ho lasa loharano azon'ny hafa ampiasaina ? »",
      "V.A. : Adika an-tsoratra, tsikeraina, alamina ary atolotra — izany no famokarana loharano am-bava.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny famokarana loharano am-bava : ny fametrahana olan-kevitra, ny fitsikerana ny loharano ary ny fandrafetana ny vokatra.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ohatra iray ny mpampianatra : dosie feno (olan-kevitra, dika an-tsoratry ny resadresaka, famakafakana, famintinana) ary manazava ny lalana nitondrana azy.",
    mpianatra: "Mandinika ny dosie sy ny fizotrany.",
    technique: "Fandinihana tahirin-kevitra", support: "Dosie fanadihadiana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe olan-kevitra (problématique) ?", ra: "Fanontaniana fototra tarihin'ny fikarohana : ohatra « Nahoana no nifindra ny tsenan'ny tanàna tamin'ny 1995 ? »" },
      { q: "Inona no atao hoe fitsikerana ny loharano ?", ra: "Ny fandinihana raha azo itokisana ny fitantarana : iza no niteny, oviana, nahita maso ve izy, mifanaraka amin'ny loharano hafa ve ?" },
      { q: "Ahoana no andikana ny resadresaka ?", ra: "Adika an-tsoratra manontolo na ny ampahany manan-danja (retranscription), ka tsy ovaina ny hevitry ny vavolombelona." },
      { q: "Nahoana no ampitahaina amin'ny loharano an-tsoratra ny loharano am-bava ?", ra: "Mba hamarinana sy hifamenoan'izy ireo : ny fampitahana (recoupement) no miantoka ny fahamarinana ara-tantara." },
      { q: "Inona no ao anaty dosie farany ?", ra: "Ny olan-kevitra, ny dika an-tsoratra, ny sary sy ny taratasy nangonina, ny famakafakana ary ny famintinana atolotra am-bava na an-tsoratra." },
    ],
    technique: "Fanontaniana mitarika", support: "Dosie fanadihadiana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny loharano am-bava dia vokarina amin'ny dingana telo — olan-kevitra, fitsikerana sy fandikana, fandrafetana ny vokatra — ary ampitahaina amin'ny loharano an-tsoratra.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany : a) fandrafetana ny dosie sy famelabelarana ; b) fametrahana ny olan-kevitra ; d) fitsikerana sy fandikana ny loharano ; e) fanatanterahana ny resadresaka.",
      items: [],
      corrige: [[{ text: "b) olan-kevitra", cle: true }, { text: " → " }, { text: "e) resadresaka", cle: true }, { text: " → " }, { text: "d) fitsikerana sy fandikana", cle: true }, { text: " → " }, { text: "a) dosie sy famelabelarana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Omeo ny famaritana ny olan-kevitra ary hazavao ny anton'ny fampitahana ny loharano am-bava amin'ny loharano an-tsoratra.",
      items: [],
      corrige: [[{ text: "Fanontaniana fototra tarihin'ny fikarohana", cle: true }, { text: " ; " }, { text: "ny fampitahana (recoupement) no manamarina sy mameno ny loharano ka miantoka ny fahamarinana ara-tantara", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["olan-kevitra", "fitsikerana ny loharano", "dika an-tsoratra", "fampitahana", "dosie", "loharano am-bava"],
    sections: [
      {
        titre: "1. Ny fametrahana ny olan-kevitra",
        paras: [
          "Ny OLAN-KEVITRA (problématique) dia ny fanontaniana fototra tarihin'ny fikarohana manontolo. Safidina lohahevitra misy lanjany ara-tsosialy izy : raharaha ara-toekarena, ara-kolontsaina, asa aman-draharaha... izay mahakasika vondron'olona.",
          "Avy amin'ny olan-kevitra no andrafetana ny fanontaniana rehetra : tsy maintsy mifandray aminy avokoa izy ireo. Ohatra : olan-kevitra « Nahoana no nilaozan'ny tanora ny fambolena eto amin'ny fokontaninay hatramin'ny 2000 ? » — dia fanontaniana momba ny asa, ny vidim-bokatra, ny fifindra-monina...",
        ],
      },
      {
        titre: "2. Ny fitsikerana sy ny fandikana ny loharano",
        paras: [],
        puces: [
          "DIKA AN-TSORATRA (retranscription) : adika an-tsoratra manontolo na ny ampahany manan-danja ny resadresaka, tsy ovaina ny hevitry ny vavolombelona ;",
          "FITSIKERANA : dinihina ny maha-azo itokisana ny fitantarana — iza no niteny, oviana, vavolombelona nahita maso ve sa nandre fotsiny ;",
          "FAMPITAHANA (recoupement) : ampitahaina amin'ny loharano an-tsoratra sy ny fitantaran'olon-kafa ny voalaza, mba hisian'ny fahamarinana ;",
          "FANDRAFETANA : alamina araka ny olan-kevitra ny vaovao manan-danja ary ampifandraisina amin'ny fahalalana ara-tantara efa misy.",
        ],
      },
      {
        titre: "3. Ny dosie sy ny famelabelarana",
        paras: [
          "Ny DOSIE feno dia ahitana : ny olan-kevitra, ny taratasy fanadihadiana, ny dika an-tsoratry ny resadresaka, ny sary sy ny taratasy nangonina, ny famakafakana ary ny famintinana. Atolotra am-bava isaky ny vondrona ny vokatra : izay no LOHARANO AM-BAVA vita, azon'ny mpikaroka hafa ampiasaina.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nilaza ny zokiolona iray fa « tamin'ny 1972 no nisokatra ny sekoly ». Hitan'i Naly anefa ao amin'ny rakitsoratry ny fokontany fa 1975. Inona no ataony ? Vahaolana : tsy atsipy ny loharano am-bava fa ampitahaina : anontaniana olona hafa izy, jerena ny taratasy hafa. Raha 1975 no marina dia soratana ao amin'ny dosie ny daty roa sy ny antony nisafidianana — izany no fitsikerana sy fampitahana ny loharano.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny fitantaram-bava tsy voadika an-tsoratra dia very miaraka amin'ny mpitantara azy. Fa ny fitantarana voadika sy voatsikera kosa dia lasa loharano : azon'ny mpahay tantara rehetra jerena, ampitahaina ary ampiasaina. » (Hevitra nalalaka avy amin'ny torolalan'ny mpikaroka momba ny tantara am-bava)",
      "1. Inona no mahasamihafa ny fitantarana tsy voadika sy ny fitantarana voadika an-tsoratra ?",
      "2. Nahoana ny fitsikerana no mahatonga ny fitantarana ho « loharano » ?",
      "3. Tanisao ny singa telo ao anaty dosie fanadihadiana feno.",
    ],
  },
  rakibolana: [
    { mg: "Olan-kevitra", fr: "Problématique" },
    { mg: "Dika an-tsoratra", fr: "Retranscription" },
    { mg: "Fitsikerana ny loharano", fr: "Critique des sources" },
    { mg: "Fampitahana", fr: "Recoupement" },
    { mg: "Dosie", fr: "Dossier" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny olan-kevitra dia ny fanontaniana fototry ny fikarohana. b) Azo ovaina ny tenin'ny vavolombelona rehefa adika an-tsoratra. d) Ny fampitahana amin'ny loharano an-tsoratra dia manamarina ny loharano am-bava. e) Ny dosie dia misy ny dika an-tsoratra sy ny famakafakana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : tsy ovaina ny hevitry ny vavolombelona", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. olan-kevitra / 2. dika an-tsoratra / 3. fampitahana — a. fanoratana ny resadresaka ; b. fanontaniana fototra ; d. fanamarinana amin'ny loharano hafa.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty olan-kevitra iray momba ny tantaran'ny fokontaninao ary lazao ny loharano an-tsoratra iray hampitahanao ny valim-panadihadiana.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "« Nahoana no nitombo haingana ny mponina teto amin'ny fokontaninay hatramin'ny 1990 ? » ; loharano an-tsoratra : rakitsoratry ny fokontany na kaominina", cle: true }, { text: " (olan-kevitra mazava + loharano azo jerena)." }]],
    },
  ],
};

module.exports = { LH1: { titre: LH, seances: [S1, S2] } };
