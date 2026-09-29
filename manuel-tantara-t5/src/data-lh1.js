// data-lh1.js — LOHAHEVITRA I : NY TRANGA ARA-TANTARA SY NY ZAVA-MITRANGA (S1-S2) — Tantara T5
// Loharano : PE T5 (tak. 137-138) sy FRP T5 (LFK 1-a, 1-b, 1-d)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "I — Ny tranga ara-tantara sy ny zava-mitranga";
const FAHENDRENA = "Toe-tsaina tia mitsikera, toe-tsaina tia manadihady";

const seances = [

// ============================================================ SEHO 1
{
  numero: 1, total: 30, lohahevitra: LH,
  titre: "Ny zava-mitranga : famaritana sy karazany",
  tanjona: "mamaritra ny atao hoe zava-mitranga ary mitanisa ny karazany eo an-toerana sy eo anivon'ny firenena",
  fahendrena: FAHENDRENA,
  tetika: "Resadresaka arahina fifanakalozan-kevitra ; fanontaniana/valiny ; asa an-tarika",
  fanovozanKevitra: DOC + " (LFK 1-a, 1-b)",
  fitaovana: "Sehom-baovao (gazety), sary ; solaitrabe",
  image: "images/img_s01.png",
  imageLegende: "Zava-mitranga eo amin'ny fiarahamonina : fety, fambolen-kazo, asa tanamaro",
  famerenana: {
    qa: [
      { q: "Tamin'ny kilasy T4 : inona no atao hoe tantara ?", ra: "Ny fitantarana ny zava-nitranga marina tamin'ny lasa." },
      { q: "Inona no zava-nitranga tao amin'ny tanànanareo vao haingana ?", ra: "Valiny malalaka : fety, tsena, fambolen-kazo…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Naheno vaovao ve ianao omaly ? Inona no nitranga tao amin'ny tanànanareo na teto amin'ny firenena ? »",
    ],
    mpianatra: "Mitanisa : nisy fety, nandresy ny Barea, nisy doro tanety…",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe zava-mitranga sy ireo karazany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky sehom-baovao fohy milaza zava-mitranga iray (fambolen-kazo tao amin'ny fokontany) ny mpampianatra ary manontany : inona no nitranga ? Taiza ? Oviana ? Iza no nandray anjara ?",
    mpianatra: "Mihaino, mamaly ireo fanontaniana ary mitanisa zava-mitranga hafa hitany na henony.",
    technique: "Famakiana sehom-baovao arahina fanontaniana",
    support: "Sehom-baovao",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe zava-mitranga ?", ra: "Zava-miseho eo amin'ny fiainana andavanandro." },
      { q: "Omeo ohatra zava-mitranga eo an-toerana.", ra: "Fety, fambolen-kazo, asa tanamaro, tsaiky ny doro tanety, fananganana sekoly…" },
      { q: "Omeo ohatra zava-mitranga eo anivon'ny firenena.", ra: "Fifidianana, fankalazana ny fetim-pirenena, fandresen'ny ekipam-pirenena Barea, fananganana fotodrafitrasa lehibe…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "Solaitrabe",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny zava-mitranga dia zava-miseho eo amin'ny fiainana andavanandro ; misy eo an-toerana ary misy eo anivon'ny firenena.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : a) fifidianana filoham-pirenena ; b) fety tao amin'ny fokontany ; d) fandresen'ny Barea ; e) asa tanamaro tao an-tanàna.",
      items: [],
      corrige: [[{ text: "Eo anivon'ny firenena : " }, { text: "a, d", cle: true }, { text: " ; eo an-toerana : " }, { text: "b, e", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Faritao ny atao hoe zava-mitranga ary omeo ohatra roa : iray eo an-toerana, iray eo anivon'ny firenena.",
      items: [],
      corrige: [[{ text: "Zava-miseho eo amin'ny fiainana andavanandro", cle: true }, { text: " ; ohatra : " }, { text: "fety ao an-tanàna (an-toerana) ; fifidianana (firenena)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["zava-mitranga", "andavanandro", "an-toerana", "firenena", "sehom-baovao"],
    sections: [
      {
        titre: "1. Famaritana ny zava-mitranga",
        paras: [
          "Ny zava-mitranga dia zava-miseho eo amin'ny fiainana andavanandro. Isan'andro dia misy zava-mitranga maro manodidina antsika : ao ny mahafaly, ao ny mampalahelo.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny zava-mitranga eo an-toerana",
        paras: ["Ireto misy ohatra amin'ny zava-mitranga eo anivon'ny fiarahamonina misy antsika :"],
        puces: [
          "ny fety (mariazy, famadihana, fetin'ny sekoly…) ;",
          "ny fambolen-kazo sy ny asa tanamaro ;",
          "ny tsena isan-kerinandro ;",
          "ny doro tanety sy ny tsy fandriampahalemana (zava-mitranga ratsy).",
        ],
      },
      {
        titre: "3. Ny zava-mitranga eo anivon'ny firenena",
        paras: ["Misy koa zava-mitranga mahakasika ny firenena manontolo :"],
        puces: [
          "ny fifidianana ;",
          "ny fankalazana ny fetim-pirenena (26 jona) ;",
          "ny fandresen'ny ekipam-pirenena Barea ;",
          "ny fananganana fotodrafitrasa (lalana, tetezana, sekoly…) ;",
          "ny hetsika (grevy) sy ny fandringanana ny ala (zava-mitranga ratsy).",
        ],
      },
      {
        titre: "4. Nahoana isika no mandinika ny zava-mitranga ?",
        paras: [
          "Ny mpianatra tantara dia mianatra mametraka fanontaniana : inona no nitranga ? Taiza ? Oviana ? Iza no voakasika ? Nahoana ? Izany no atao hoe toe-tsaina tia manadihady.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Fambolen-kazo tao Ambohimarina — Ny sabotsy 12 oktobra lasa teo dia nanatanteraka fambolen-kazo teny amin'ny havoana atsimon'ny tanàna ny mponin'ny fokontany Ambohimarina. Zana-kazo miisa 500 no nambolena. Nandray anjara ny mpianatry ny sekoly, ny ray aman-dreny ary ny fokonolona. “Hiverina isan-taona izahay”, hoy ny filohan'ny fokontany. »",
      "(Sehom-baovao noforonina ho an'ity boky ity, natao hianarana mamaky vaovao — jereo FRP T5, LFK 1-a.)",
      "Fanontaniana : a) Inona no zava-nitranga ? b) Taiza ary oviana ? d) Iza no nandray anjara ?",
      "Valiny : a) Fambolen-kazo (zana-kazo 500). b) Tany Ambohimarina, ny sabotsy 12 oktobra. d) Ny mpianatra, ny ray aman-dreny ary ny fokonolona.",
    ],
  },
  rakibolana: [
    { mg: "Zava-mitranga", fr: "Événement" },
    { mg: "Andavanandro", fr: "Quotidien" },
    { mg: "Sehom-baovao", fr: "Reportage / article de presse" },
    { mg: "Asa tanamaro", fr: "Travaux communautaires" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny zava-mitranga dia zava-miseho eo amin'ny fiainana … ; misy eo …, misy eo anivon'ny ….",
      items: [],
      corrige: [[{ text: "andavanandro", cle: true }, { text: " ; " }, { text: "an-toerana", cle: true }, { text: " ; " }, { text: "firenena", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho zava-mitranga tsara na ratsy : a) fambolen-kazo ; b) doro tanety ; d) asa tanamaro ; e) fandringanana ny ala.",
      items: [],
      corrige: [[{ text: "Tsara : " }, { text: "a, d", cle: true }, { text: " ; ratsy : " }, { text: "b, e", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tantarao amin'ny fehezanteny roa na telo ny zava-mitranga iray hitanao na henonao tao amin'ny tanànanao (lazao ny toerana sy ny fotoana).",
      items: [],
      corrige: [[{ text: "Valiny malalaka : mila voalaza ny zava-nitranga, ny toerana ary ny fotoana", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 2
{
  numero: 2, total: 30, lohahevitra: LH,
  titre: "Ny tranga ara-tantara sy ny fanavahana azy amin'ny zava-mitranga",
  tanjona: "mamaritra ny atao hoe tranga ara-tantara ary manavaka azy amin'ny zava-mitranga",
  fahendrena: FAHENDRENA,
  tetika: "Famakafakana lahatsoratra ; fanontaniana/valiny ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (LFK 1-d)",
  fitaovana: "Lahatsoratra milaza tranga ara-tantara ; solaitrabe",
  image: "images/img_s02.png",
  imageLegende: "Ny tranga ara-tantara : zava-nitranga tamin'ny lasa, tadidin'ny firenena",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe zava-mitranga ?", ra: "Zava-miseho eo amin'ny fiainana andavanandro." },
      { q: "Omeo ohatra zava-mitranga eo anivon'ny firenena.", ra: "Fifidianana, fetim-pirenena, fandresen'ny Barea…" },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Ny 26 jona 1960 dia niseho zavatra lehibe teto Madagasikara. Mbola tsaroantsika ve izany mandraka androany ? Nahoana ? »",
    ],
    mpianatra: "Mamaly : ny fahaleovantena ! Tsaroana isan-taona satria manan-danja ho an'ny firenena.",
    technique: "Fanontaniana an-kira",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe tranga ara-tantara ary hanavaka azy amin'ny zava-mitranga.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky lahatsoratra fohy momba ny fahaleovantena (26 jona 1960) ny mpampianatra ary mampitaha azy amin'ny fety tao amin'ny fokontany omaly : inona no mampitovy sy mampiavaka azy roa ?",
    mpianatra: "Mandinika : samy zava-nitranga izy roa, fa ny iray efa lasa sy voafaritra mazava ny fotoanany sy ny toerany ary tadidin'ny firenena.",
    technique: "Fampitahana arahina fifanakalozan-kevitra",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe tranga ara-tantara ?", ra: "Ireo tranga nisy teo aloha, tao anatin'ny fotoana sy toerana voafaritra, ka manan-danja tadidina." },
      { q: "Inona avy ny sokajin'ny tranga ara-tantara ?", ra: "Tranga ara-politika (fifidianana, fiovam-pitondrana…), tranga ara-toekarena, tranga ara-piarahamonina." },
      { q: "Inona no manavaka ny tranga ara-tantara amin'ny zava-mitranga ?", ra: "Ny zava-mitranga dia miseho amin'ny fiainana andavanandro ankehitriny ; ny tranga ara-tantara kosa dia efa lasa, voafaritra ny fotoanany sy ny toerany, ary tadidin'ny taranaka." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny tranga ara-tantara dia tranga nisy teo aloha tamin'ny fotoana sy toerana voafaritra ; rehefa mandalo ny fotoana dia mety ho lasa tranga ara-tantara ny zava-mitranga manan-danja.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Zava-mitranga sa tranga ara-tantara ? a) Ny tsena omaly tao an-tanàna. b) Ny fahaleovantena 26 jona 1960. d) Ny ady 1947. e) Ny fetin'ny sekoly herinandro lasa.",
      items: [],
      corrige: [[{ text: "Zava-mitranga : " }, { text: "a, e", cle: true }, { text: " ; tranga ara-tantara : " }, { text: "b, d", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Faritao ny atao hoe tranga ara-tantara ary lazao ny zavatra roa manavaka azy amin'ny zava-mitranga.",
      items: [],
      corrige: [[{ text: "Tranga nisy teo aloha tao anatin'ny fotoana sy toerana voafaritra", cle: true }, { text: " ; manavaka azy : " }, { text: "efa lasa izy ary tadidin'ny taranaka noho ny lanjany", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["tranga ara-tantara", "fotoana voafaritra", "toerana voafaritra", "politika", "toekarena", "fiarahamonina"],
    sections: [
      {
        titre: "1. Famaritana ny tranga ara-tantara",
        paras: [
          "Ny tranga ara-tantara dia ireo tranga nisy teo aloha, tao anatin'ny fotoana sy toerana voafaritra. Tsy hadinoina izy ireo fa tadidin'ny taranaka satria manan-danja teo amin'ny fiainan'ny mponina na ny firenena.",
          "Ohatra : ny fahaleovantenan'i Madagasikara (26 jona 1960, Antananarivo) ; ny ady ho an'ny fahaleovantena (1947) ; ny nananganana ny sekolintsika (raha fantatra ny taona).",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo sokajin'ny tranga ara-tantara",
        paras: [],
        puces: [
          "Tranga ara-politika : fifidianana lehibe, fiovam-pitondrana, fifanarahana…",
          "Tranga ara-toekarena : fisokafan'ny orinasa lehibe, krizy ara-bola…",
          "Tranga ara-piarahamonina : fankalazana lehibe, loza voajanahary nanamarika ny mponina…",
        ],
      },
      {
        titre: "3. Ny fanavahana azy amin'ny zava-mitranga",
        paras: [],
        puces: [
          "Ny zava-mitranga : miseho amin'ny fiainana andavanandro, ankehitriny.",
          "Ny tranga ara-tantara : efa lasa, voafaritra mazava ny fotoanany sy ny toerany, tadidin'ny firenena.",
          "Ny zava-mitranga manan-danja dia mety ho lasa tranga ara-tantara rehefa mandalo ny fotoana !",
        ],
      },
    ],
    tahirinKevitra: [
      "« Ny zava-mitranga : zava-miseho eo amin'ny fiainana andavanandro. Ny tranga ara-tantara : ireo tranga nisy teo aloha tao anatin'ny fotoana sy toerana voafaritra. Ohatra eo anivon'ny firenena : tranga ara-politika (fifidianana, fihetsiketsehana…), tranga ara-toekarena, tranga ara-piarahamonina amin'ny fotoana sy toerana voafaritra. »",
      "(Nalaina tao amin'ny FRP T5, LFK 1-d.)",
      "Fanontaniana : a) Inona no dikan'ny hoe « fotoana sy toerana voafaritra » ? b) Omeo ohatra tranga ara-tantara iray fantatrao, lazao ny fotoanany.",
      "Valiny : a) Fantatra mazava ny daty sy ny toerana nisehoany. b) Ohatra : ny fahaleovantena, ny 26 jona 1960, teto Madagasikara.",
    ],
  },
  rakibolana: [
    { mg: "Tranga ara-tantara", fr: "Fait / événement historique" },
    { mg: "Voafaritra", fr: "Défini, déterminé" },
    { mg: "Ara-politika", fr: "Politique" },
    { mg: "Ara-toekarena", fr: "Économique" },
    { mg: "Ara-piarahamonina", fr: "Social" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : Ny tranga ara-tantara dia tranga nisy teo …, tao anatin'ny … sy … voafaritra.",
      items: [],
      corrige: [[{ text: "aloha", cle: true }, { text: " ; " }, { text: "fotoana", cle: true }, { text: " ; " }, { text: "toerana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. fifidianana lehibe / 2. fisokafan'ny orinasa / 3. fankalazana lehibe — a. tranga ara-toekarena ; b. tranga ara-piarahamonina ; d. tranga ara-politika.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny tsena isan-kerinandro dia tranga ara-tantara. b) Ny 26 jona 1960 dia tranga ara-tantara. d) Ny zava-mitranga manan-danja dia mety ho lasa tranga ara-tantara.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso : zava-mitranga andavanandro izy", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
