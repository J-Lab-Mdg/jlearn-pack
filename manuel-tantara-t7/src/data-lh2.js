// data-lh2.js — Lohahevitra II : Ny vanim-potoana lehiben'ny Prehistoara sy ny Tantara (S4-S5)
const LH = "Lohahevitra II — Ny vanim-potoana lehiben'ny Prehistoara sy ny Tantara";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S4 = {
  numero: 4, total: 32, lohahevitra: LH,
  titre: "Ny vanim-potoana lehiben'ny Prehistoara sy ny Tantara",
  tanjona: "mametraka ao anatin'ny fotoana sy ny toerana ny vanim-potoanan'ny Prehistoara sy ny Tantara amin'ny alalan'ny frizy kronolojika",
  fanovozanKevitra: DOC,
  fitaovana: "Frizy kronolojika, sari-tanin'izao tontolo izao, solaitrabe",
  image: "images/img_s04.png",
  imageLegende: "Frizy kronolojika : avy amin'ny fisehoan'ny olombelona ka hatramin'izao",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe frizy kronolojika ?", ra: "Tsipika mampiseho ny filaharan'ny zava-nitranga ara-potoana." },
      { q: "Firy taona ny taonjato iray ?", ra: "100 taona." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Efa nisy talohan'ny nahaizan'ny olombelona nanoratra ve ny tantara ? Ahoana no iantsoana izany fotoana izany ? »",
      "V.A. : Prehistoara no iantsoana ny fotoana talohan'ny soratra ; ny Tantara dia manomboka amin'ny famoronana ny soratra.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo vanim-potoana lehiben'ny Prehistoara sy ny Tantara ary handrafitra ny frizy kronolojika.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho frizy kronolojika lehibe ny mpampianatra : Paleolitika (hatramin'ny -12000), Neolitika (-12000 ka hatramin'ny -3000), Antiquité (-3000 ka hatramin'ny 476), Moyen Âge (476-1492), Andro maoderina (1492-1789), Vanim-potoana ankehitriny (1789 ka hatramin'izao).",
    mpianatra: "Mandinika ny frizy sy ny fizarana.",
    technique: "Fandinihana frizy", support: "Frizy kronolojika",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe Prehistoara ?", ra: "Ny vanim-potoana hatramin'ny fisehoan'ny olombelona ka hatramin'ny famoronana ny soratra (tokony ho -3000)." },
      { q: "Inona ny fizaran'ny Prehistoara roa ?", ra: "Ny Paleolitika (vato voapaika — hatramin'ny -12000) sy ny Neolitika (vato voalambolambo — -12000 ka hatramin'ny -3000)." },
      { q: "Inona no mampisaraka ny Prehistoara sy ny Tantara ?", ra: "Ny famoronana ny SORATRA, tokony ho -3500/-3000 tany Mezopotamia." },
      { q: "Tanisao ny vanim-potoana efatra amin'ny Tantara.", ra: "Antiquité (-3000→476) ; Moyen Âge (476→1492) ; Andro maoderina (1492→1789) ; Vanim-potoana ankehitriny (1789→izao)." },
      { q: "Inona no zava-nitranga namaritra ny taona 476 sy 1492 ary 1789 ?", ra: "476 : nianjeran'ny Empira romanina tandrefana ; 1492 : nahatongavan'i Christophe Colomb tany Amerika ; 1789 : Revolisiona frantsay." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy kronolojika",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : roa ny vanim-potoanan'ny Prehistoara (Paleolitika, Neolitika) ary efatra ny an'ny Tantara ; ny soratra no fetra manasaraka azy roa.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Apetraho amin'ny vanim-potoana marina : a) ny piramidan'i Ejipta (-2600) ; b) ny fahaterahan'i Mahomet (570) ; d) ny fahaleovantenan'i Madagasikara (1960) ; e) ny sary hosodoko tao anaty lava-bato (-15000).",
      items: [],
      corrige: [[{ text: "a) Antiquité", cle: true }, { text: " ; b) " }, { text: "Moyen Âge", cle: true }, { text: " ; d) " }, { text: "Vanim-potoana ankehitriny", cle: true }, { text: " ; e) " }, { text: "Prehistoara (Paleolitika)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto ny frizy kronolojika misy ny vanim-potoana enina (Prehistoara roa sy Tantara efatra) miaraka amin'ny datiny.",
      items: [],
      corrige: [[{ text: "Paleolitika (→ -12000) ; Neolitika (-12000 → -3000) ; Antiquité (-3000 → 476) ; Moyen Âge (476 → 1492) ; Andro maoderina (1492 → 1789) ; Vanim-potoana ankehitriny (1789 → izao)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Prehistoara", "Paleolitika", "Neolitika", "soratra", "Antiquité", "Moyen Âge", "frizy kronolojika"],
    sections: [
      {
        titre: "1. Ny Prehistoara : talohan'ny soratra",
        paras: [
          "Ny PREHISTOARA dia ny vanim-potoana lava indrindra amin'ny tantaran'ny olombelona : manomboka amin'ny fisehoan'ny olombelona voalohany (3 tapitrisa taona mahery lasa izay) ka hatramin'ny famoronana ny soratra (tokony ho -3500/-3000).",
        ],
        puces: [
          "PALEOLITIKA (« vato taloha » — avy amin'ny teny grika palaios = taloha, lithos = vato) : hatramin'ny -12000 teo — vato voapaika, fihazana sy fiotazana, fifindrafindra-monina ;",
          "NEOLITIKA (« vato vaovao » — neos = vaovao) : -12000 ka hatramin'ny -3000 — vato voalambolambo, fambolena sy fiompiana, fonenana raikitra, tanimanga.",
        ],
      },
      {
        titre: "2. Ny Tantara : nanomboka tamin'ny soratra",
        paras: [
          "Rehefa noforonina ny SORATRA tany Mezopotamia (tokony ho -3500/-3000) dia afaka nandrakitra ny zava-nitranga ny olombelona : nanomboka teo ny TANTARA. Mizara efatra izy :",
        ],
        puces: [
          "ANTIQUITÉ (-3000 → 476) : ireo sivilizasiona voalohany (Mezopotamia, Ejipta, Gresy, Roma) — nifarana tamin'ny nianjeran'ny Empira romanina tandrefana (476) ;",
          "MOYEN ÂGE (476 → 1492) : ny feodalite, ny Eglizy, ny Silamo — nifarana tamin'ny nahatongavan'i Christophe Colomb tany Amerika (1492) ;",
          "ANDRO MAODERINA (1492 → 1789) : ny fizahana ny tany, ny fanjakan'ny mpanjaka lehibe — nifarana tamin'ny Revolisiona frantsay (1789) ;",
          "VANIM-POTOANA ANKEHITRINY (1789 → izao) : ny indostria, ny fanjanahantany, ny fahaleovantena, ny teknolojia.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Vanim-potoana inona no nisehoan'ireto : ny nananganan'Andrianampoinimerina ny fanjakany (1787) ; ny sorabe voalohany (taonjato XVI) ? Vahaolana : 1787 dia ANDRO MAODERINA (mbola talohan'ny 1789 kely) ; ny taonjato XVI (1501-1600) dia ANDRO MAODERINA ihany koa satria taorian'ny 1492.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny fetran'ny vanim-potoana dia nofidin'ny mpahay tantara mba hanamora ny fandalinana : tsy niova indray andro ny fiainan'ny olombelona tamin'ny 476 na tamin'ny 1492, fa ireo daty ireo dia marika lehibe hitsinjarana ny fotoana. »",
      "1. Iza no nifidy ny fetran'ny vanim-potoana ?",
      "2. Nahoana izy ireo no nametraka fetra ?",
      "3. Niova tampoka ve ny fiainana tamin'ireo daty ireo ?",
    ],
  },
  rakibolana: [
    { mg: "Prehistoara", fr: "Préhistoire" },
    { mg: "Paleolitika", fr: "Paléolithique" },
    { mg: "Neolitika", fr: "Néolithique" },
    { mg: "Vanim-potoana ankehitriny", fr: "Époque contemporaine" },
    { mg: "Frizy kronolojika", fr: "Frise chronologique" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny Prehistoara dia mizara roa : ny … sy ny … ; ny Tantara kosa dia manomboka amin'ny famoronana ny … tokony ho tamin'ny taona … (1 isa avy)",
      items: [],
      corrige: [[{ text: "Paleolitika", cle: true }, { text: " ; " }, { text: "Neolitika", cle: true }, { text: " ; " }, { text: "soratra", cle: true }, { text: " ; " }, { text: "-3500/-3000", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. 476 / 2. 1492 / 3. 1789 / 4. -3000 — a. Revolisiona frantsay ; b. fiandohan'ny Tantara ; d. nianjeran'ny Empira romanina ; e. tongan'i Colomb tany Amerika. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 2,
      consigne: "Amin'ny taonjato fahafiry : a) ny taona 476 ; b) ny taona 1492 ?",
      items: [],
      corrige: [[{ text: "a) taonjato faha-5", cle: true }, { text: " ; b) " }, { text: "taonjato faha-15", cle: true }, { text: "." }]],
    },
  ],
};

const S5 = {
  numero: 5, total: 32, lohahevitra: LH,
  titre: "Ny fivoaran'ny olombelona nandritra ny Prehistoara",
  tanjona: "mandahatra ny dingan'ny fivoaran'ny olombelona sy mampiavaka ny fomba fiainany tamin'ny Paleolitika sy ny Neolitika",
  fanovozanKevitra: DOC,
  fitaovana: "Sary mampiseho ny fivoaran'ny olombelona, frizy, solaitrabe",
  image: "images/img_s05.png",
  imageLegende: "Ny dingan'ny fivoaran'ny olombelona",
  famerenana: {
    qa: [
      { q: "Inona ny fizaran'ny Prehistoara roa ?", ra: "Ny Paleolitika sy ny Neolitika." },
      { q: "Inona no mampisaraka ny Prehistoara sy ny Tantara ?", ra: "Ny famoronana ny soratra (-3500/-3000)." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Nitovy tamintsika ve ny olombelona voalohany ? Ahoana no nivelomany : nisy tsena sy tanimbary ve tamin'izany ? »",
      "V.A. : Niova tsikelikely ny vatana sy ny fomba fiainan'ny olombelona — izany no fivoarana.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny dingan'ny fivoaran'ny olombelona sy ny fomba fiainany tamin'ny Paleolitika sy ny Neolitika.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sarin'ny fivoaran'ny olombelona ny mpampianatra : Australopiteka, Homo habilis, Homo erectus, Homo neanderthalensis, Homo sapiens ary Homo sapiens sapiens. Dinihina ny fiovana (fijoroana, ati-doha, fitaovana).",
    mpianatra: "Mandinika ny sary sy ny fiovana.",
    technique: "Fandinihana sary", support: "Sary ny fivoarana",
  },
  famakafakana: {
    qa: [
      { q: "Iza no dingana voalohany amin'ny fivoaran'ny olombelona ?", ra: "Ny Australopiteka (3-4 tapitrisa taona lasa, tany Afrika) : efa nandeha tamin'ny tongotra roa." },
      { q: "Nahoana i Homo habilis no nantsoina hoe « mahay » ?", ra: "Satria izy no nanamboatra fitaovana vato voalohany (tokony ho 2,5 tapitrisa taona lasa)." },
      { q: "Inona no zava-baovao nentin'i Homo erectus ?", ra: "Ny fahafehezana ny AFO sy ny fialana avy tany Afrika ho any Azia sy Eoropa." },
      { q: "Iza isika ankehitriny ?", ra: "Homo sapiens sapiens (« olona hendry indrindra ») : isika olombelona rehetra amin'izao." },
      { q: "Ampitahao ny fiainana tamin'ny Paleolitika sy ny Neolitika.", ra: "Paleolitika : mihaza sy mioty, mifindrafindra, vato voapaika ; Neolitika : mamboly sy miompy, monina raikitra, vato voalambolambo sy tanimanga." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary sy frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : nivoatra tsikelikely ny olombelona (vatana, ati-doha, fitaovana) ; ny fiovana lehibe indrindra dia ny fahafehezana ny afo (erectus) sy ny fambolena (Neolitika).",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Iza no resahina ? a) nanamboatra fitaovana vato voalohany ; b) nahafehy ny afo ; d) isika ankehitriny ; e) nandeha tamin'ny tongotra roa tany Afrika 3 tapitrisa taona lasa.",
      items: [],
      corrige: [[{ text: "a) Homo habilis", cle: true }, { text: " ; b) " }, { text: "Homo erectus", cle: true }, { text: " ; d) " }, { text: "Homo sapiens sapiens", cle: true }, { text: " ; e) " }, { text: "Australopiteka", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Alaharo araka ny filaharany ny dingan'ny fivoarana ary lazao ny zava-baovao iray nentin'ny tsirairay.",
      items: [],
      corrige: [[{ text: "Australopiteka (tongotra roa) → Homo habilis (fitaovana vato) → Homo erectus (afo) → Homo neanderthalensis (fandevenana) → Homo sapiens sapiens (kanto, soratra tatỳ aoriana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Australopiteka", "Homo habilis", "Homo erectus", "Homo sapiens", "afo", "fambolena", "fonenana raikitra"],
    sections: [
      {
        titre: "1. Ny dingan'ny fivoaran'ny olombelona",
        paras: [
          "Tany AFRIKA no nipoiran'ny olombelona. Nivoatra tsikelikely izy nandritra ny taona an-tapitrisany :",
        ],
        puces: [
          "AUSTRALOPITEKA (3-4 tapitrisa taona lasa) : nandeha tamin'ny tongotra roa (ohatra malaza : « Lucy », hita tany Etiopia tamin'ny 1974) ;",
          "HOMO HABILIS (« olona mahay », tokony ho 2,5 tapitrisa taona) : nanamboatra fitaovana vato voalohany ;",
          "HOMO ERECTUS (« olona mijoro », tokony ho 1,8 tapitrisa taona) : nahafehy ny AFO ary niala tany Afrika ;",
          "HOMO NEANDERTHALENSIS (tokony ho 400 000 taona) : nandevina ny maty voalohany ;",
          "HOMO SAPIENS ary HOMO SAPIENS SAPIENS (« olona hendry », 300 000-40 000 taona) : ny kanto (sary an-dava-bato), ny fitenenana mandroso — isika rehetra ankehitriny.",
        ],
      },
      {
        titre: "2. Ny fiainana tamin'ny Paleolitika",
        paras: [
          "Tamin'ny PALEOLITIKA ny olombelona dia MPIHAZA SY MPIOTY : nihaza biby, nanjono ary nioty voankazo sy fakan-javatra izy. NIFINDRAFINDRA-MONINA izy nanaraka ny biby sy ny vokatra, nonina tao anaty lava-bato na trano rantsan-kazo, ary nampiasa fitaovana vato voapaika (lefona, antsy vato). Ny afo no niaro azy sy nandrahoany sakafo. Namela sary hosodoko tao anaty lava-bato izy (ohatra : Lascaux, Frantsa, -17000 teo).",
        ],
      },
      {
        titre: "3. Ny fiainana tamin'ny Neolitika : ny « revolisiona » voalohany",
        paras: [
          "Tamin'ny NEOLITIKA (nanomboka tany Moyen-Orient tokony ho -10000) dia nianatra NAMBOLY (varimbazaha, hordea) sy NIOMPY (osy, ondry, omby) ny olombelona : tsy voatery nifindrafindra intsony izy fa nanorina VOHITRA RAIKITRA. Niseho ny tanimanga (vilany), ny tenona, ny vato voalambolambo ary ny fifanakalozana. Io fiovana lehibe io no antsoina hoe « revolisiona neolitika » : izy no nanokatra ny lalana ho amin'ny tanàna sy ny sivilizasiona.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tamin'ny 1974 dia hitan'ny mpikaroka tany Etiopia ny taolan'i “Lucy”, Australopiteka vavy velona 3,2 tapitrisa taona lasa. Ny fandinihana ny taolan-dranjony dia nampiseho fa efa nandeha tamin'ny tongotra roa izy. »",
      "1. Loharano karazana inona ny taolan'i Lucy (an-tsoratra, am-bava sa moana) ?",
      "2. Siansa inona no mandalina ny taolana toy izao ?",
      "3. Inona no porofo hita tamin'ny taolan-dranjony ?",
    ],
  },
  rakibolana: [
    { mg: "Fivoarana", fr: "Évolution" },
    { mg: "Mpihaza-mpioty", fr: "Chasseur-cueilleur" },
    { mg: "Fifindrafindra-monina", fr: "Nomadisme" },
    { mg: "Fonenana raikitra", fr: "Sédentarisation" },
    { mg: "Tanimanga", fr: "Poterie" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Tany Eoropa no nipoiran'ny olombelona. b) I Homo erectus no nahafehy ny afo. d) Tamin'ny Paleolitika ny olona dia namboly vary. e) Ny revolisiona neolitika dia ny fambolena sy ny fiompiana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : tany Afrika", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : nihaza sy nioty izy", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampitahao amin'ny fafana kely (toerana fonenana, sakafo, fitaovana) ny Paleolitika sy ny Neolitika.",
      items: [],
      corrige: [[{ text: "Paleolitika : lava-bato/mifindrafindra — hazandriby sy voankazo — vato voapaika ; Neolitika : vohitra raikitra — vokatry ny fambolena sy ny fiompiana — vato voalambolambo sy tanimanga", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny revolisiona neolitika no nanokatra ny lalana ho amin'ny sivilizasiona ?",
      items: [],
      corrige: [[{ text: "Satria ny fambolena dia nahavokatra sakafo be ka nitombo ny mponina, niorina ny vohitra sy ny tanàna, ary nisy olona afaka nanao asa hafa (mpanao tanimanga, mpivarotra, mpitondra)", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH2: { titre: LH, seances: [S4, S5] } };
