// data-lh4.js — Lohahevitra IV : Vakoka sy harem-pirenena (S22-S25)
const LH = "Lohahevitra IV — Ny vakoka sy ny harem-pirenena eto Madagasikara";
const DOC = "PE T6 (MEN, nohavaozina) ; FRP Tantara T6 ; boky Tantara J-Learn";

const S22 = {
  numero: 22, total: 27, lohahevitra: LH,
  titre: "Ny famaritana ny vakoka sy ireo karazam-bakoka",
  tanjona: "mamaritra ny atao hoe vakoka ary manasokajy ireo karazam-bakoka",
  fanovozanKevitra: DOC + " (LFK 4-a, 4-b)",
  fitaovana: "Sary vakoka, solaitrabe",
  image: "images/img_seansa22.png",
  imageLegende: "Sary 19 — Ny vakoka malagasy : Ambohimanga, aloalo, kabary, hira gasy, sikotra Zafimaniry",
  famerenana: {
    qa: [
      { q: "Inona no vokatry ny fidirana amin'ireo fikambanana ?", ra: "Tombony ara-politika, ara-toekarena ary ara-tsosialy." },
      { q: "Inona no atao hoe lovan-tsofina ?", ra: "Fahalalana nampitaina am-bava tamin'ny taranaka nifandimby." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no zavatra nolovaintsika tamin'ny razana ka mbola arovantsika mandraka androany ? Trano ? Fomba ? Hira ? »",
      "V.A. : Maro : ny Rova, ny kabary, ny famadihana, ny hira gasy... izany no atao hoe vakoka.",
    ],
    mpianatra: "Mitanisa izay fantany.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hamaritra ny atao hoe vakoka ary hanasokajy ireo karazam-bakoka.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary maro ny mpampianatra (Rova, aloalo, kabary, hira gasy, tsangam-bato...). Asaina manasokajy azy ho hita maso / tsy hita maso ny mpianatra.",
    mpianatra: "Mandinika ny sary ary manandrana manasokajy.",
    technique: "Fanasokajiana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe vakoka ?", ra: "Akora na fitaovana tranainy mirakitra ny maha izy azy ny firenena, ary koa ny kolontsaina nolovaina tamin'ny razambe." },
      { q: "Inona no atao hoe vakoka ara-materialy (hita maso) ?", ra: "Tsangam-bato, trano manan-tantara, Rova, fasan'ny mpanjaka, aloalo..." },
      { q: "Ary ny vakoka tsy hita maso ?", ra: "Kabary, hira gasy, lovan-tsofina, famadihana, fitampoha, fahaiza-manao (sikotra Zafimaniry)..." },
      { q: "Inona no dikan'ny hoe vakodrazana ?", ra: "Izay rehetra fananana nifandovana avy tamin'ny razana ka lalaina tsara." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary voasokajy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny vakoka dia lova avy amin'ny razana — sokajy roa : hita maso (materialy) sy tsy hita maso (ara-kolontsaina).",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : Rovan'Ambohimanga ; kabary am-panambadiana ; aloalo ; hira gasy ; fasan'ny mpanjaka ; famadihana.",
      items: [],
      corrige: [[{ text: "Hita maso : " }, { text: "Rova, aloalo, fasan'ny mpanjaka", cle: true }, { text: " ; tsy hita maso : " }, { text: "kabary, hira gasy, famadihana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Omeo ny famaritana ny vakoka ary omeo ohatra roa hita ao amin'ny faritrao.",
      items: [],
      corrige: [[{ text: "Ny vakoka dia " }, { text: "lova avy amin'ny razana (akora, toerana na kolontsaina) tehirizina ho an'ny taranaka", cle: true }, { text: " ; ohatra : " }, { text: "tsangam-bato, fomba amam-panao, hira, toerana manan-tantara eo an-toerana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["vakoka", "vakodrazana", "vakoka ara-materialy", "vakoka tsy hita maso", "kabary", "sikotra Zafimaniry"],
    sections: [
      {
        titre: "1. Famaritana ny vakoka",
        paras: [
          "Ny VAKOKA dia akora na fitaovana tranainy mirakitra ny ela, ahitana taratra ny maha izy azy ny firenena sy ny vahoaka mbamin'ny tantarany, ka zary harem-pirenena — rakitsoa sarobidy tehirizina ho fantatry ny taranaka mifandimby.",
          "Ny vakoka koa dia entina ilazana ireo kolontsaina sy fomba amam-panao nolovaina tamin'ny razambe ary mbola voatahiry : ny kabary, ny fitafy sy ny taovolo nentim-paharazana, ny vakodrazana... (VAKOKA + RAZANA = VAKODRAZANA : izay rehetra fananana nifandovana avy tamin'ny razana ka lalaina tsara).",
        ],
      },
      {
        titre: "2. Ny vakoka ara-materialy (hita maso)",
        paras: [],
        puces: [
          "tsangam-bato sy toerana manan-tantara ;",
          "trano manan-tantara, fiangonana manan-tantara, tsena tranainy ;",
          "ny ROVA (Antananarivo, Ambohimanga, Ambohidratrimo...) ;",
          "ny ALOALO sy ny fasan'ny mpanjaka, ny taolam-balon'ireo olo-malaza.",
        ],
      },
      {
        titre: "3. Ny vakoka tsy hita maso (ara-kolontsaina)",
        paras: [],
        puces: [
          "ny fomba amam-panao nolovaina tamin'ny razambe ; ny oha-pitenenana sy ny lovan-tsofina ;",
          "ny KABARY MALAGASY sy ny HIRA GASY ;",
          "ny fitampoha sy ny famadihana ; ny vakodrazana mampiavaka ny faritra ;",
          "ny fahaiza-manao : ohatra ny SIKOTRA ZAFIMANIRY (asa hazo), voasoratra ao amin'ny lisitry ny vakoka tsy hita maso an'ny UNESCO (2003/2008).",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ny lambamena ampiasaina amin'ny famadihana : vakoka hita maso sa tsy hita maso ? Vahaolana : ny LAMBAMENA amin'ny maha tenona azy dia zavatra hita maso (asa tanana), fa ny FAMADIHANA amin'ny maha fomba amam-panao azy kosa dia vakoka tsy hita maso. Mifameno àry ny sokajy roa : matetika ny fomba (tsy hita maso) no manome dikany ny zavatra (hita maso).",
        ],
      },
    ],
    fantatraoVe: [
      "Ny KABARY MALAGASY dia voasoratra tao amin'ny lisitry ny vakoka tsy hita maso maneran-tanin'ny UNESCO tamin'ny desambra 2021 — fahatsiarovana lehibe ho an'ny haifitenenana malagasy !",
      "Ny tanindrazan'ny Mahafaly, izay ahitana ny aloalo sy ny haingon'ny fasana, dia heverina ho marika famantarana an'i Madagasikara : amin'ny fandevenana ihany no ahazoana mitsidika ny fasana, fa raha tsy izany dia voarara tanteraka.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny atao hoe vakoka dia akora na fitaovana tranainy mirakitra ny ela ahitana taratra ny maha izy azy ny firenena sy ny vahoaka mbamin'ny tantarany ka zary harem-pirenena, rakitsoa sarobidy tehirizina ho fantatry ny taranaka mifandimby. » (Loharano : FRP Tantara T6)",
      "1. Inona no asehon'ny vakoka momba ny firenena ?",
      "2. Ho an'iza no itehirizana azy ?",
      "3. Nahoana ny vakoka no lazaina hoe « harem-pirenena » ?",
    ],
  },
  rakibolana: [
    { mg: "Vakoka", fr: "Patrimoine" },
    { mg: "Vakoka tsy hita maso", fr: "Patrimoine immatériel" },
    { mg: "Aloalo", fr: "Poteau funéraire sculpté" },
    { mg: "Fahaiza-manao", fr: "Savoir-faire" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Omeo ny famaritana ny vakoka amin'ny fehezanteny iray.",
      items: [],
      corrige: [[{ text: "Ny vakoka dia " }, { text: "lova avy amin'ny razana — zavatra, toerana na kolontsaina — mirakitra ny maha izy azy ny firenena ka tehirizina ho an'ny taranaka mifandimby", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Omeo ohatra roa avy amin'ny sokajy roa : vakoka hita maso sy vakoka tsy hita maso. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Hita maso : " }, { text: "Rova, aloalo, tsangam-bato, fasan'ny mpanjaka", cle: true }, { text: " (roa) ; tsy hita maso : " }, { text: "kabary, hira gasy, famadihana, sikotra Zafimaniry", cle: true }, { text: " (roa)." }]],
    },
    {
      points: 3,
      consigne: "Hazavao ny fiforonan'ny teny hoe « vakodrazana » ary omeo ny heviny.",
      items: [],
      corrige: [[{ text: "Vakoka + razana", cle: true }, { text: " (1 isa) : " }, { text: "izay rehetra fananana nifandovana avy tamin'ny razana ka lalaina tsara", cle: true }, { text: " (2 isa)." }]],
    },
  ],
};

const S23 = {
  numero: 23, total: 27, lohahevitra: LH,
  titre: "Ny fikolokoloana ny vakoka : tombontsoa sy fomba fiarovana",
  tanjona: "milaza ny tombontsoa azo amin'ny fikolokoloana ny vakoka sy ireo fomba fiarovana azy",
  fanovozanKevitra: DOC + " (LFK 4-d, 4-e, 4-f)",
  fitaovana: "Lahatsoratra, sary tranom-bakoka, solaitrabe",
  image: "images/img_seansa23.png",
  imageLegende: "Sary 20 — Ny fikolokoloana ny vakoka : tranom-bakoka, fizahan-tany, fanarenana",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe vakoka ?", ra: "Lova avy amin'ny razana tehirizina ho an'ny taranaka." },
      { q: "Omeo ohatra amin'ny vakoka tsy hita maso.", ra: "Kabary, hira gasy, famadihana, sikotra Zafimaniry." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Raha simba na very ny vakoka, azo averina ve ? Inona àry no tokony hatao ? »",
      "V.A. : Tsy azo averina intsony matetika — noho izany dia arovana sy kolokoloina izy.",
    ],
    mpianatra: "Mamaly sy maneho hevitra.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tombontsoa azo amin'ny fikolokoloana ny vakoka sy ireo fomba atao hiarovana sy hikojana azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny lahatsoratra « Mahaliana ny vahiny ny vakoka Malagasy » ny mpampianatra. Asaina mamaky sy mitanisa ny tombontsoa sy ny fomba fiarovana ny mpianatra.",
    mpianatra: "Mamaky ny lahatsoratra ary manamarika ny hevi-dehibe.",
    technique: "Famakiana lahatsoratra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao tombontsoa roa azo amin'ny fikolokoloana ny vakoka.", ra: "Mirakitra ny tantaram-pirenena ; mampiroborobo ny fizahan-tany sy mampidi-bola ; lova ho an'ny taranaka." },
      { q: "Ahoana no iarovana ny vakoka hita maso ?", ra: "Apetraka amin'ny tranom-bakoka, arovana amin'ny masoandro sy ny afo sy ny fandrobana." },
      { q: "Ary ny vakoka tsy hita maso ?", ra: "Arovana manoloana ny kolontsaina vahiny : ampianarina sy ampiharina hatrany (kabary, vakodrazana)." },
      { q: "Inona no mety ho loza amin'ny fizahan-tany tsy voafehy ?", ra: "Fanondranana antsokosoko ny harena, fanimbana ny toerana." },
    ],
    technique: "Fanontaniana mitarika", support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny vakoka voakolokolo dia mitahiry ny tantara, mampidi-bola amin'ny fizahan-tany ary lova ho an'ny taranaka — ka adidin'ny rehetra ny miaro azy.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Marina sa diso : « Ny fikolokoloana ny vakoka dia fandaniam-bola fotsiny fa tsy mampidi-bola. »",
      items: [],
      corrige: [[{ text: "Diso", cle: true }, { text: " : " }, { text: "mampiroborobo ny fizahan-tany sy mampidi-bola ho an'ny faritra ny vakoka voakolokolo", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Misy tsangam-bato tranainy simba ao amin'ny fokontaninao. Inona no soso-kevitra telo omenao ny fokonolona ?",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "manarina sy manadio azy ; mametraka fefy na marika fiarovana ; mampahafantatra ny tantarany amin'ny mponina sy ny sekoly ; mitondra azy any amin'ny tranom-bakoka raha ilaina", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fikolokoloana", "tranom-bakoka", "fizahan-tany", "fanondranana antsokosoko", "lova"],
    sections: [
      {
        titre: "1. Ny tombontsoa azo amin'ny fikolokoloana ny vakoka",
        paras: [],
        puces: [
          "mirakitra sy mampatsiahy ny TANTARAM-PIRENENA na ny tantaran'ny faritra iray ;",
          "mitahiry ireo KOLONTSAINA isam-paritra ;",
          "mampiroborobo ny FIZAHAN-TANY : mahaliana ny vahiny ny vakoka malagasy (ny Rovan'Ambohimanga sy Ambohidratrimo, ohatra, dia tsidihin'ny vahiny maro) ;",
          "MAMPIDI-BOLA ho an'ny faritra : ny mpizaha tany dia mividy ny asa tanana malagasy ka mamelona ny mpanao azy ;",
          "LOVA ho an'ny taranaka mifandimby.",
        ],
      },
      {
        titre: "2. Ireo fomba fiarovana sy fikojana ny vakoka",
        paras: [],
        puces: [
          "fametrahana ireo karazam-bakoka amin'ny TRANOM-BAKOKA (musée) sy fampitomboana ny isany ;",
          "fiarovana amin'ny masoandro, ny hafanana, ny hamandoana ary ny AFO ;",
          "fiarovana amin'ny FANDROBANA sy ny fanondranana antsokosoko ;",
          "ady amin'ny fahalotoan'ny rivotra ;",
          "fiarovana ny vakoka tsy hita maso manoloana ny kolontsaina vahiny : ampianarina ny taranaka ny kabary, ny vakodrazana, ny hira gasy.",
        ],
      },
      {
        titre: "3. Fizahan-tany : tombony sy fitandremana",
        paras: [
          "Mampidi-bola vahiny betsaka ny vakoka voakolokolo, ary ny fitiavan'ny vahiny ny asa tanana malagasy no mamelona ny mpahay asa tanana. Mila fitandremana anefa : tsy vitsy no manondrana antsokosoko ny harena (sokatra, bibilava...), ary tsy tokony hatakalo vola ny voninahitry ny firenena. Ny fikolokoloana tsara sy ny fitantanana malagasy ny toerana no antoky ny tombony maharitra.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny Rovan'Antananarivo dia may tamin'ny 6 novambra 1995 : very tamin'izany ny ampahany betsaka tamin'ny rakitry ny mpanjaka. Naorina indray izy ary nosokafana ho an'ny vahoaka tamin'ny 2020 — porofo fa ny fanarenana ny vakoka dia asa lehibe sy lafo vidy !",
      "Ny tranom-bakoka malagasy malaza dia ny Musée Andafiavaratra (Antananarivo), ny tranom-bakokan'ny Oniversite (Isoraka) ary ny tranom-bakoka regionaly maro — misy azo tsidihan'ny sekoly maimaim-poana amin'ny fotoana voafaritra !",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Kolokoloy, fa hampiditra vola vahiny betsaka ny vakoka Malagasy. Mazana anefa dia tsy ampy ny fikolokoloana ireo vakoka malagasy mbola mijoro. Tsy vitsy ny manondrana antsokosoko ireny harentsika ireny, toy ny sokatra, bibilava... » (Loharano : Madagascar-Tribune, ao amin'ny FRP Tantara T6)",
      "1. Inona no tombony voalazan'ny lahatsoratra ?",
      "2. Inona kosa ny olana roa tsikaritra ?",
      "3. Inona no soso-kevitrao hamahana ireo olana ireo ?",
    ],
  },
  rakibolana: [
    { mg: "Tranom-bakoka", fr: "Musée" },
    { mg: "Fizahan-tany", fr: "Tourisme" },
    { mg: "Fanondranana antsokosoko", fr: "Exportation illicite, contrebande" },
    { mg: "Fanarenana", fr: "Restauration" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Tanisao tombontsoa efatra azo amin'ny fikolokoloana ny vakoka. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Mirakitra ny tantara", cle: true }, { text: " ; " }, { text: "mitahiry ny kolontsaina", cle: true }, { text: " ; " }, { text: "mampiroborobo ny fizahan-tany sy mampidi-bola", cle: true }, { text: " ; " }, { text: "lova ho an'ny taranaka", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao fomba telo hiarovana ny vakoka hita maso. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Apetraka amin'ny tranom-bakoka", cle: true }, { text: " ; " }, { text: "arovana amin'ny afo sy ny hamandoana", cle: true }, { text: " ; " }, { text: "arovana amin'ny fandrobana sy ny fanondranana antsokosoko", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ahoana no fiarovana ny vakoka tsy hita maso ? Omeo ohatra roa.",
      items: [],
      corrige: [[{ text: "Ampianarina sy ampiharina hatrany amin'ny taranaka izy", cle: true }, { text: " (1 isa) : ohatra, " }, { text: "fampianarana kabary ny tanora ; fanaovana ny hira gasy sy ny vakodrazana amin'ny fety", cle: true }, { text: " (2 isa)." }]],
    },
  ],
};

const S24 = {
  numero: 24, total: 27, lohahevitra: LH,
  titre: "Ny harem-pirenena : famaritana sy fanasokajiana",
  tanjona: "mamaritra ny harem-pirenena ary manasokajy azy ireo",
  fanovozanKevitra: DOC + " (LFK 4-g, 4-h)",
  fitaovana: "Sary harena voajanahary, solaitrabe",
  image: "images/img_seansa24.png",
  imageLegende: "Sary 21 — Ny harem-pirenena voajanahary : Tsingy, baobab, gidro, lavanila, vatosoa",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe vakoka ?", ra: "Lova avy amin'ny razana tehirizina ho an'ny taranaka." },
      { q: "Tanisao tombontsoa roa amin'ny fikolokoloana azy.", ra: "Fizahan-tany sy fampidiram-bola ; lova ho an'ny taranaka." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no mampalaza an'i Madagasikara any ivelany ? Biby ? Zava-maniry ? Toerana ? »",
      "V.A. : Ny gidro, ny baobab, ny Tsingy, ny lavanila... ireo no harem-pirenena.",
    ],
    mpianatra: "Mitanisa izay fantany.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hamaritra ny harem-pirenena ary hanasokajy azy ireo.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary ny mpampianatra (Tsingy, ala maitso, gidro, sokatra, baobab, volamena, vatosoa, hazandrano...). Asaina manasokajy ny mpianatra.",
    mpianatra: "Mandinika ny sary ary manandrana manasokajy.",
    technique: "Fanasokajiana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe harem-pirenena ?", ra: "Ireo faritra na fananana (harena) voajanahary na tsia, mampiavaka ny firenena, tehirizina holovain'ny taranaka." },
      { q: "Omeo ohatra amin'ny faritra na zavatra voajanahary.", ra: "Ny Tsingin'ny Bemaraha, ny ala maitson'Atsinanana, ny gidro, ny baobab." },
      { q: "Inona no atao hoe faritra arovana ?", ra: "Faritra voajanahary ahitana asa na fidiram-bola : valan-javaboary, faritra arovana." },
      { q: "Omeo ohatra amin'ny vokatra azo trandrahina.", ra: "Solitany, entona, arin-tany, volamena, vatosoa." },
      { q: "Iza amin'ireo harena ireo no voasoratra ao amin'ny lisitry ny UNESCO ?", ra: "Ny Tsingin'ny Bemaraha (1990), ny vohimasin'Ambohimanga (2001), ny ala mandon'Atsinanana (2007)." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny harem-pirenena dia ny harena voajanahary na tsia mampiavaka an'i Madagasikara — sokajy efatra izy ireo.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : gidro ; valan-javaboary Isalo ; hazandrano ; volamena.",
      items: [],
      corrige: [[{ text: "Gidro : " }, { text: "zavatra voajanahary (biby)", cle: true }, { text: " ; Isalo : " }, { text: "faritra arovana", cle: true }, { text: " ; hazandrano : " }, { text: "vokatra voajanahary", cle: true }, { text: " ; volamena : " }, { text: "vokatra azo trandrahina", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao harem-pirenena telo voasoratra ao amin'ny lisitry ny vakoka maneran-tanin'ny UNESCO.",
      items: [],
      corrige: [[{ text: "Ny Tsingin'ny Bemaraha (1990) ; ny vohimasin'Ambohimanga (2001) ; ny ala mandon'Atsinanana (2007)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["harem-pirenena", "voajanahary", "faritra arovana", "vokatra azo trandrahina", "UNESCO", "endemika"],
    sections: [
      {
        titre: "1. Famaritana",
        paras: [
          "Ny HAREM-PIRENENA dia ireo faritra na fananana (harena) VOAJANAHARY NA TSIA mampiavaka ny firenena iray, ary tehirizina holovain'ny taranaka mifandimby.",
        ],
      },
      {
        titre: "2. Fanasokajiana ny harem-pirenena",
        paras: [],
        puces: [
          "faritra na ZAVATRA VOAJANAHARY : ireo karazan-java-maniry sy biby (ny gidro, ny sokatra, ny tanalahy, ny baobab andramena...) ;",
          "FARITRA VOAJANAHARY AHITANA ASA na fidiram-bola : ny valan-javaboary sy ny faritra arovana (Isalo, Andasibe, Ranomafana...) ;",
          "VOKATRA VOAJANAHARY : ny ala, ny hazandrano, ny harena an-dranomasina ;",
          "VOKATRA AZO TRANDRAHINA : ny solitany, ny entona, ny arin-tany, ny volamena sy ny vatosoa.",
        ],
      },
      {
        titre: "3. Ireo harena voasoratra amin'ny lisitry ny UNESCO",
        paras: ["Voasoratra ao amin'ny lisitry ny vakoka sy harena iraisam-pirenena :"],
        puces: [
          "ny TSINGIN'NY BEMARAHA (1990) — harena voajanahary ;",
          "ny VOHIMASIN'AMBOHIMANGA (2001) — vakoka ara-kolontsaina ;",
          "ny ALA MANDON'ATSINANANA (2007) — harena voajanahary ;",
          "ary ny sikotra Zafimaniry (2003/2008) sy ny kabary malagasy (2021) ao amin'ny lisitry ny vakoka tsy hita maso.",
        ],
      },
      {
        titre: "4. Ny maha manokana ny zavaboarin'i Madagasikara",
        paras: [
          "Nosy mitokana efa an-tapitrisany taona i Madagasikara, ka ENDEMIKA (tsy hita afa-tsy eto) ny ankamaroan'ny biby sy ny zava-maniry : ny gidro rehetra, ny ankamaroan'ny tanalahy, ny baobab enina amin'ny valo... Izany no iantsoana an'i Madagasikara hoe « nosy kaontinanta » sy « santioaria voajanahary » — harena tsy manam-paharoa eran-tany.",
        ],
      },
    ],
    fantatraoVe: [
      "Karazana gidro 100 mahery no fantatra eto Madagasikara — ary eto irery ihany no misy azy amin'ny fomba voajanahary ! Ny indri (babakoto) no lehibe indrindra, ary ny microcèbe kosa no gidro kely indrindra eran-tany (30 grama monja).",
      "Ny ala mandon'Atsinanana dia niditra tao amin'ny lisitry ny « harena tandindomin-doza » an'ny UNESCO tamin'ny 2010, noho ny fikapana antsokosoko ny andramena — mampiseho fa mila arovana mafy ny harem-pirenena !",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Amin'izao fotoana izao dia voasoratra ao amin'ny lisitry ny vakoka sy harena iraisam-pirenena ny Tsingin'ny Bemaraha izay nosoratana tamin'ny taona 1990, ny ala mandon'Atsinanana nosoratana tamin'ny 2007, ary ny vohimasin'Ambohimanga nosoratana tamin'ny 2001. » (Loharano : FRP Tantara T6)",
      "1. Firy ny harena malagasy voatanisa eto ary oviana avy no nosoratana ?",
      "2. Iza no vakoka ara-kolontsaina amin'izy telo ?",
      "3. Inona no tombony ho an'i Madagasikara amin'izany fisoratana izany ?",
    ],
  },
  rakibolana: [
    { mg: "Harem-pirenena", fr: "Richesse nationale, patrimoine national" },
    { mg: "Endemika", fr: "Endémique" },
    { mg: "Valan-javaboary", fr: "Parc naturel" },
    { mg: "Fitrandrahana", fr: "Exploitation (minière)" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Tanisao ireo sokajin'ny harem-pirenena efatra ary omeo ohatra iray avy. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Zavatra voajanahary (gidro)", cle: true }, { text: " ; " }, { text: "faritra arovana (Isalo)", cle: true }, { text: " ; " }, { text: "vokatra voajanahary (ala, hazandrano)", cle: true }, { text: " ; " }, { text: "vokatra azo trandrahina (volamena, vatosoa)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao ny hoe « endemika » ary omeo ohatra roa amin'ny zavaboary endemikan'i Madagasikara.",
      items: [],
      corrige: [[{ text: "Tsy hita afa-tsy eto Madagasikara", cle: true }, { text: " (1 isa) ; ohatra : " }, { text: "ny gidro (babakoto, maki), ny baobab andramena, ny tanalahy maro", cle: true }, { text: " (2 isa)." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Tsingin'ny Bemaraha (taona …) ; vohimasin'Ambohimanga (taona …) ; ala mandon'Atsinanana (taona …).",
      items: [],
      corrige: [[{ text: "1990", cle: true }, { text: " ; " }, { text: "2001", cle: true }, { text: " ; " }, { text: "2007", cle: true }, { text: ". (1 isa avy)" }]],
    },
  ],
};

const S25 = {
  numero: 25, total: 27, lohahevitra: LH,
  titre: "Ny fiarovana sy ny fikojana ny harem-pirenena",
  tanjona: "mitanisa ireo fomba fiarovana ny harem-pirenena ary mandray andraikitra amin'izany",
  fanovozanKevitra: DOC + " (LFK 4-i)",
  fitaovana: "Lahatsoratra, sary, solaitrabe",
  image: "images/img_seansa25.png",
  imageLegende: "Sary 22 — Ny fiarovana ny harem-pirenena : fambolen-kazo, fanaraha-maso, ady amin'ny doro tanety",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe harem-pirenena ?", ra: "Ny harena voajanahary na tsia mampiavaka ny firenena, tehirizina holovain'ny taranaka." },
      { q: "Tanisao harena endemika roa.", ra: "Gidro, baobab andramena, tanalahy..." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Raha lany tamingana ny gidro na may daholo ny ala, inona no very amintsika sy ny taranatsika ? Inona no azontsika atao ? »",
      "V.A. : Very mandrakizay ny harena — ka adidintsika rehetra ny miaro azy.",
    ],
    mpianatra: "Maneho hevitra sy soso-kevitra.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo fomba fiarovana sy fikojana ny harem-pirenena ary ny andraikitsika amin'izany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny lahatsoratra ny mpampianatra (fambolen-kazo, fiarovana ny ala, ady amin'ny fitrandrahana tsy ara-dalàna...). Asaina mamaky sy mitanisa ny fepetra ny mpianatra.",
    mpianatra: "Mamaky ny lahatsoratra ary mitanisa ny fepetra fiarovana.",
    technique: "Famakiana lahatsoratra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao fomba roa hiarovana ny ala.", ra: "Mamboly hazo sy manara-maso ny hazo voavoly ; tsy mandoro tanety, tsy manapaka ala." },
      { q: "Inona no arovana amin'ny fitrandrahana tsy ara-dalàna ?", ra: "Ny zava-maniry sy ny biby (fihazana, fanondranana antsokosoko), ny harena an-kibon'ny tany." },
      { q: "Nahoana no arovana ny toeram-ponenan'ny biby ?", ra: "Satria raha simba ny toeram-ponenany dia lany tamingana ny karazana biby sy zava-maniry." },
      { q: "Inona no andraikitry ny mpianatra amin'izany ?", ra: "Mamboly hazo, tsy mandoro, mampahafantatra ny hafa, manaja ny faritra arovana." },
    ],
    technique: "Fanontaniana mitarika", support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny fiarovana ny harem-pirenena dia adidin'ny fanjakana sy ny olom-pirenena tsirairay — fambolen-kazo, fanajana ny lalàna, ady amin'ny doro tanety sy ny fanondranana antsokosoko.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Marina sa diso : a) « Ny doro tanety dia mahatsara ny tany. » ; b) « Ny fanondranana sokatra antsokosoko dia mampahantra ny firenena. »",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso : mandrava ny nofon-tany sy ny ala izy", cle: true }, { text: " ; b) " }, { text: "Marina : very ny harena ary tsy misy tombony ho an'ny firenena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Soraty ny fanapahan-kevitra telo raisinao manomboka anio hiarovana ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Valiny malalaka, ohatra : " }, { text: "mamboly hazo isan-taona ; tsy mandoro tanety ary mampahafantatra ny loza ateraky ny doro ; tsy mividy na mivarotra biby arovana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fambolen-kazo", "doro tanety", "fitrandrahana tsy ara-dalàna", "faritra arovana", "lovain-jafy", "andraikitra"],
    sections: [
      {
        titre: "1. Nahoana no arovana ny harem-pirenena ?",
        paras: [
          "Ny fiarovana ny harem-pirenena dia miaro ny TOERAM-PONENAN'ireo karazana biby sy zava-maniry atahorana ho LANY TAMINGANA, ary miaro ny nofon-tany, ny rano, ny ranomasina sy ny harena ao aminy. Raha very ireo dia tsy hitan'ny taranaka intsony mandrakizay : « ny harena voajanahary dia tsy lovantsika avy amin'ny razana fa nindramintsika tamin'ny zafikelintsika ».",
        ],
      },
      {
        titre: "2. Ireo fomba fiarovana sy fikojana",
        paras: [],
        puces: [
          "MAMBOLY HAZO sy manara-maso ny hazo voavoly ;",
          "miaro ny ala, ny zava-maniry ary ny biby ;",
          "TSY MANDORO TANETY, tsy manapaka ala ;",
          "ady amin'ny FITRANDRAHANA TSY ARA-DALANA, ny fihazana ary ny fanondranana antsokosoko ireo zava-maniry sy zava-manan'aina mampiavaka ny faritra ;",
          "fanarahan-dalàna mikasika ny fitrandrahana (fahazoan-dalana, fadin-tseranana) ;",
          "fanajana sy fampitomboana ny FARITRA AROVANA sy ny valan-javaboary.",
        ],
      },
      {
        titre: "3. Ny andraikitry ny tsirairay",
        paras: [
          "Tsy an'ny fanjakana irery ny adidy : ny fokonolona, ny sekoly ary ny mpianatra tsirairay dia afaka mandray anjara — mamboly hazo amin'ny fetin'ny fahaleovantena, tsy mandoro, mitatitra ny fitrandrahana tsy ara-dalàna, manabe ny hafa. Izany no FANABEAZANA HO AMIN'NY FAMPANDROSOANA LOVAIN-JAFY : mamolavola olom-pirenena tompon'andraikitra mba hiantohana ny hoavin'ny taranaka.",
          "Ohatra voavaha — Misy mpanao doro tanety eo akaikin'ny faritra arovana. Inona no atao ? Vahaolana : tsy mifanandrina mivantana fa mampandre ny fokontany na ny mpiandraikitra ny faritra arovana ; manentana ny mponina amin'ny loza ateraky ny doro (simban'ny tany, ritra ny loharano) ; mandray anjara amin'ny fambolen-kazo solon'ny very.",
        ],
      },
    ],
    fantatraoVe: [
      "Isan-taona i Madagasikara dia mamboly hazo an-tapitrisany amin'ny « taom-pambolen-kazo » : tanjona ny hamerina ny rakotr'ala — ary ny sekoly no anisan'ny mavitrika indrindra amin'izany !",
      "Ny sokatra radiata (sokake) dia arovan'ny lalàna iraisam-pirenena (CITES) : voarara tanteraka ny mivarotra na manondrana azy — ny mpanondrana antsokosoko dia mety hiatrika sazy an-tranomaizina.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Fiarovana sy fikojana ny harem-pirenena : mamboly hazo sy manara-maso ny hazo voavoly ; miaro ny ala, ny zava-maniry ary ny biby ; ady amin'ny fitrandrahana tsy ara-dalàna, ny fihazana, ary ny fanondranana antsokosoko ; tsy mandoro tanety, tsy manapaka ala. » (Loharano : FRP Tantara T6)",
      "1. Tanisao fepetra telo voalaza ao amin'ny lahatsoratra.",
      "2. Iza no tokony hampihatra ireo fepetra ireo ?",
      "3. Inona no azonao atao eo anivon'ny sekolinao ?",
    ],
  },
  rakibolana: [
    { mg: "Doro tanety", fr: "Feu de brousse" },
    { mg: "Lany tamingana", fr: "En voie d'extinction" },
    { mg: "Fampandrosoana lovain-jafy", fr: "Développement durable" },
    { mg: "Faritra arovana", fr: "Aire protégée" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Tanisao fomba efatra hiarovana ny harem-pirenena. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Mamboly hazo", cle: true }, { text: " ; " }, { text: "tsy mandoro tanety sy tsy manapaka ala", cle: true }, { text: " ; " }, { text: "ady amin'ny fitrandrahana sy fanondranana tsy ara-dalàna", cle: true }, { text: " ; " }, { text: "fanajana ny faritra arovana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao ilay hoe : « ny harena voajanahary dia nindramintsika tamin'ny zafikelintsika ».",
      items: [],
      corrige: [[{ text: "Tsy antsika irery ny harena fa " }, { text: "an'ny taranaka ho avy koa", cle: true }, { text: " (1,5 isa) : " }, { text: "adidintsika ny mamerina azy amin'izy ireo tsy simba", cle: true }, { text: " (1,5 isa)." }]],
    },
    {
      points: 3,
      consigne: "Omeo andraikitra telo azon'ny mpianatra iray raisina hiarovana ny tontolo iainana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Mamboly hazo", cle: true }, { text: " ; " }, { text: "manabe ny mpiara-belona amin'ny loza ateraky ny doro", cle: true }, { text: " ; " }, { text: "tsy mividy biby na zava-maniry arovana / mitatitra ny tsy ara-dalàna", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { seances: [S22, S23, S24, S25] };
