// data-lh1.js — Lohahevitra I : Fampidirana ny fianarana Tantara (S2-S5)
const LH = "Lohahevitra I — Fampidirana ny fianarana Tantara";
const DOC = "PE T6 (MEN, nohavaozina) ; FRP Tantara T6 ; boky Tantara J-Learn";

const S2 = {
  numero: 2, total: 27, lohahevitra: LH,
  titre: "Ny antony sy ny zava-kendren'ny fianarana Tantara",
  tanjona: "manazava ny antony ilana ny Tantara sy ny zava-kendren'ny fianarana azy",
  fanovozanKevitra: DOC + " (FRP T6, fizarana 1-a, 1-d)",
  fitaovana: "Sary, lahatsoratra, solaitrabe, kahie",
  image: "images/img_seansa02.png",
  imageLegende: "Ny lasa manazava ny ankehitriny ary manomana ny hoavy",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe Tantara ?", ra: "Fandinihana ny zava-nitranga marina tamin'ny lasan'ny olombelona." },
      { q: "Lazao toetra roa mampiavaka ny zava-nitranga ara-tantara.", ra: "Zava-nisy marina izy ary voafaritra ny toerana sy ny fotoana nitrangany." },
      { q: "Iza no antsoina hoe mpahay tantara ?", ra: "Ny olona mandinika sy mitantara ny zava-nitranga tamin'ny lasa." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Nahoana ny fokontany rehetra no mitandro ny fomban-drazana ? Nahoana isika no mankalaza ny 26 jona isan-taona ? »",
      "V.A. : Satria ny lasa no fototra iorenan'ny fiainantsika ankehitriny.",
    ],
    mpianatra: "Maneho hevitra malalaka ary mifanakalo hevitra.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny antony ilana ny Tantara sy ny zava-kendren'ny fianarana azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary roa ny mpampianatra : tanàna taloha sy tanàna ankehitriny. Asaina mampitaha ny mpianatra ary mitanisa izay niova sy izay nitoetra.",
    mpianatra: "Mandinika ny sary, mampitaha ary milaza ny hitany.",
    technique: "Fandinihana sary", support: "Sary roa",
  },
  famakafakana: {
    qa: [
      { q: "Inona no ampiasaintsika ny Tantara raha te hahalala ny niandohan'ny fokontanintsika isika ?", ra: "Fitaovana entina ahafantarana ny lasa ny Tantara." },
      { q: "Ahoana no anazavan'ny Tantara ny zava-misy ankehitriny ? Omeo ohatra.", ra: "Ohatra : ny fahaleovantena sy ny fady amin'ny toerana iray dia azo hazavaina amin'ny tantarany." },
      { q: "Ahoana no anampian'ny Tantara antsika hanatsara ny hoavy ?", ra: "Ianarantsika ny fahadisoana teo aloha mba tsy hamerenana azy intsony." },
      { q: "Inona no zava-kendren'ny fianarana Tantara any an-tsekoly ?", ra: "Mamolavola olom-pirenena vanona, tia tanindrazana ary mahalala ny fototra niaviany." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : anjara asa telo lehibe no sahanin'ny Tantara — mahafantatra ny lasa, manazava ny ankehitriny, manatsara ny hoavy.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. mahafantatra ny lasa / 2. manazava ny ankehitriny / 3. manatsara ny hoavy — a. misoroka ny tsy nety teo aloha ; b. mahalala ny fiavian'ny mponina malagasy ; c. mahazo ny antony isian'ny fady.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-c", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny roa ny antony ianarantsika Tantara.",
      items: [],
      corrige: [[{ text: "Ianarantsika ny Tantara mba " }, { text: "hahafantarana ny fototra niaviantsika sy hanazavana ny zava-misy ankehitriny", cle: true }, { text: " ; ary mba " }, { text: "hakana lesona amin'ny lasa hanatsarana ny hoavy", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fototra niaviana", "manazava ny ankehitriny", "manatsara ny hoavy", "olom-pirenena", "fivoarana"],
    sections: [
      {
        titre: "1. Ny antony ilana ny Tantara",
        paras: ["Manana ny anjara asany eo amin'ny fiainana andavanandro ny Tantara :"],
        puces: [
          "FITAOVANA ENTINA AHAFANTARANA NY LASA : ny tantaran'ny faritra iray, ny fototra niorenan'ny fiaraha-monina iray, ny fiavian'ny mponina malagasy, ny vanim-potoanan'ny mpanjaka, ny naha-zanatany frantsay an'i Madagasikara…",
          "HANAZAVANA NY ANKEHITRINY : ny fahaleovantena, ny zon'olombelona, ny fady amin'ny toerana iray… samy misy tantara niandohany avokoa ;",
          "HANATSARANA NY HOAVY : ny fahalalana ny fahadisoana teo aloha no misoroka ny famerenana azy.",
        ],
      },
      {
        titre: "2. Ny zava-kendren'ny fianarana Tantara any an-tsekoly",
        paras: ["Ny fianarana Tantara dia :"],
        puces: [
          "mamolavola OLOM-PIRENENA VANONA mahalala ny fireneny sy tia tanindrazana ;",
          "mampianatra FANDINIHANA sy FITSIKERANA : mianatra manavaka ny marina sy ny tsy marina amin'ny alalan'ny porofo ;",
          "mampita ny SOATOAVINA : fahamarinana, firaisankina, fitiavan-tanindrazana, fandeferana ;",
          "manomana ny mpianatra hahatakatra ny FIVOARAN'izao tontolo izao.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Ohatra — Nahoana no zava-dehibe ny mahalala ny tantaran'ny rotaka 1972 sy 1991 ? Vahaolana : satria ireo krizy ireo dia nampianatra fa ny tsy fahafaham-pon'ny vahoaka dia mety hitarika fiovan'ny fitondrana ; ny fahalalana izany dia manampy ny mpitondra sy ny olom-pirenena hitady vahaolana am-pilaminana, ka izany no hoe « manatsara ny hoavy amin'ny alalan'ny lesona avy amin'ny lasa ».",
        ],
      },
    ],
    fantatraoVe: [
      "Misy oha-pitenenana malagasy manao hoe : « Izay adala no toa an-drainy » — kanefa amin'ny Tantara kosa, izay tsy mahalala ny lasan'ny fireneny no mora mamerina ny fahadisoan'ny teo aloha !",
      "Ny Arisiva nasionalin'i Madagasikara (Foibem-pirenena momba ny Arisiva), ao Tsaralalàna Antananarivo, dia mitahiry taratasy an'arivony hatramin'ny andron'ny mpanjaka : ao no misy ny sonian'i Ranavalona sy ny fifanarahana tamin'ny vahiny fahiny.",
    ],
    tahirinKevitra: [
      "Vakio ity tsanganana kely ity ary valio ny fanontaniana :",
      "« Ny firenena tsy mahalala ny tantarany dia toy ny hazo tsy misy fakany : mora avadiky ny rivotra. Fa ny firenena mahalala ny niaviany kosa dia mahay misafidy ny lalan-kizorany. »",
      "1. Inona no dikan'ny hoe « hazo tsy misy fakany » eto ?",
      "2. Araka ny lahatsoratra, inona no soa azon'ny firenena mahalala ny tantarany ?",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
    ],
  },
  rakibolana: [
    { mg: "Fototra niaviana", fr: "Origine" },
    { mg: "Olom-pirenena", fr: "Citoyen" },
    { mg: "Soatoavina", fr: "Valeur" },
    { mg: "Fivoarana", fr: "Évolution" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Tanisao ireo anjara asa telo lehiben'ny Tantara eo amin'ny fiainana andavanandro. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1. " }, { text: "Ahafantarana ny lasa", cle: true }, { text: " ; 2. " }, { text: "hanazavana ny ankehitriny", cle: true }, { text: " ; 3. " }, { text: "hanatsarana ny hoavy", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Omeo ohatra iray mifanandrify amin'ny anjara asa tsirairay : a) mahafantatra ny lasa ; b) manazava ny ankehitriny. (2 isa avy)",
      items: [],
      corrige: [[{ text: "a) Ohatra : " }, { text: "ny fianarana ny fiavian'ny razam-ben'ny Malagasy", cle: true }, { text: " (2 isa). b) Ohatra : " }, { text: "ny fankalazana ny 26 jona dia hazavain'ny tantaran'ny fahaleovantena 1960", cle: true }, { text: " (2 isa)." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso, hazavao : « Ny fianarana Tantara dia tsy misy ilana azy amin'ny fiainana ankehitriny. »",
      items: [],
      corrige: [[{ text: "Diso", cle: true }, { text: " (1 isa) : ny Tantara no " }, { text: "manazava ny zava-misy ankehitriny sy manampy antsika tsy hamerina ny fahadisoana teo aloha", cle: true }, { text: ", ka ilaina amin'ny fiainana andavanandro izy (2 isa)." }]],
    },
  ],
};

const S3 = {
  numero: 3, total: 27, lohahevitra: LH,
  titre: "Ny fandrefesana ny fotoana : frizy sy kalandrie",
  tanjona: "mampiasa ny frizy kronolojika, manisa ny taon-jato ary mahalala ny karazana kalandrie",
  fanovozanKevitra: DOC + " (FRP T6, fizarana 1-c)",
  fitaovana: "Frizy kronolojika, kalandrie, solaitrabe, tsipika",
  image: "images/img_seansa03.png",
  imageLegende: "Ny fandrefesana ny fotoana : ambaratongan'ny fotoana sy ny frizy kronolojika",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe Tantara ?", ra: "Siansa mandalina ny zava-nitranga marina tamin'ny lasa." },
      { q: "Nahoana no ilaintsika ny mahalala ny fotoana nitrangan'ny zavatra iray ?", ra: "Satria ny zava-nitranga ara-tantara dia voafaritra mazava ny fotoana nitrangany." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Firy taona ianao ? Oviana no teraka ianao ? Ary ny raibenao ? Ahoana no andaharantsika ireo daty ireo ? »",
      "V.A. : Alahatra eny amin'ny tsipika iray araka ny filaharany ara-potoana.",
    ],
    mpianatra: "Mamaly sy manandrana mandahatra daty.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra mandrefy ny fotoana : ny ambaratongan'ny fotoana, ny frizy kronolojika, ny fanisana ny taon-jato ary ny kalandrie.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho frizy kronolojika ny mpampianatra : tsipika misy daty (1958, 1960, 1972, 1975...). Hazavaina ny hoe taloha/taoriana, ny hoe talohan'i J.K. sy taorian'i J.K., ary ny fomba fanisana ny taon-jato.",
    mpianatra: "Mandinika ny frizy, mamaky ireo daty ary manontany.",
    technique: "Fandinihana frizy", support: "Frizy kronolojika",
  },
  famakafakana: {
    qa: [
      { q: "Firy taona ny taon-jato iray ? Ny arivo taona ?", ra: "100 taona ny taon-jato ; 1 000 taona ny arivo taona." },
      { q: "Amin'ny taon-jato fahafiry ny taona 1960 ?", ra: "Amin'ny taon-jato faha-20." },
      { q: "Amin'ny taon-jato fahafiry ny taona 2026 ?", ra: "Amin'ny taon-jato faha-21." },
      { q: "Inona no fiaingan'ny kalandrie kristianina (gregorianina) ?", ra: "Ny nahaterahan'i Jesoa Kristy (taona 0)." },
      { q: "Misy kalandrie hafa ve ?", ra: "Eny : silamo (hejira), jiosy, sinoa — samy manana ny fiaingany." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy sy kalandrie",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny frizy no fitaovana andaharana ny zava-nitranga ; ny taon-jato dia 100 taona ; samihafa ny kalandrie araka ny kolontsaina.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo amin'ny frizy ireto daty ireto : 1975, 1958, 2010, 1993.",
      items: [],
      corrige: [[{ text: "1958 - 1975 - 1993 - 2010", cle: true }, { text: "." }]],
    },
    {
      consigne: "Amin'ny taon-jato fahafiry ny taona 1896 ? Ny taona 2002 ?",
      items: [],
      corrige: [[{ text: "1896 : " }, { text: "taon-jato faha-19", cle: true }, { text: " ; 2002 : " }, { text: "taon-jato faha-21", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto amin'ny frizy ny daty telo lehibe amin'ny fiainanao (nahaterahana, niditra sekoly, androany).",
      items: [],
      corrige: [[{ text: "Valiny malalaka : " }, { text: "voalahatra araka ny filaharany ara-potoana ireo daty telo eny amin'ny tsipika", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie, tsipika",
  lesona: {
    motsCles: ["frizy kronolojika", "taon-jato", "arivo taona", "kalandrie", "talohan'i J.K.", "taorian'i J.K."],
    sections: [
      {
        titre: "1. Ireo ambaratongan'ny fotoana",
        paras: ["Mba handrefesana ny fotoana dia misy ambaratonga maromaro :"],
        puces: [
          "ny ANDRO, ny herinandro (7 andro), ny volana (28 ka hatramin'ny 31 andro), ny TAONA (12 volana) ;",
          "ny FOLO TAONA (décennie) = 10 taona ;",
          "ny TAON-JATO (siècle) = 100 taona ;",
          "ny ARIVO TAONA (millénaire) = 1 000 taona.",
        ],
      },
      {
        titre: "2. Ny frizy kronolojika",
        paras: [
          "Ny FRIZY KRONOLOJIKA dia tsipika andaharana ny zava-nitranga araka ny filaharany ara-potoana : ny taloha eo ankavia, ny vaovao eo ankavanana.",
          "Ny kalandrie kristianina (gregorianina), ampiasaina eran-tany ankehitriny, dia miainga amin'ny nahaterahan'i Jesoa Kristy : ny zava-nitranga TALOHAN'I J.K. dia isaina miverina (ohatra : taona 300 tal. J.K.), ary ny TAORIAN'I J.K. dia isaina mandroso (ohatra : taona 2026).",
        ],
      },
      {
        titre: "3. Ny fanisana ny taon-jato",
        paras: ["Fitsipika : ny taona 1 ka hatramin'ny 100 dia ao amin'ny taon-jato voalohany ; ny taona 1901 ka hatramin'ny 2000 dia ao amin'ny taon-jato faha-20 ; ny taona 2001 ka hatramin'ny 2100 dia ao amin'ny taon-jato faha-21."],
        puces: [
          "Ohatra 1 : ny taona 1960 (fahaleovantena) dia ao amin'ny taon-jato faha-20 ;",
          "Ohatra 2 : ny taona 1896 (nanjanahan'i Frantsa an'i Madagasikara) dia ao amin'ny taon-jato faha-19 ;",
          "Ohatra 3 : ny taona 2026 dia ao amin'ny taon-jato faha-21.",
        ],
      },
      {
        titre: "4. Ireo karazana kalandrie",
        paras: ["Tsy mitovy ny fiaingan'ny kalandrie araka ny kolontsaina :"],
        puces: [
          "kalandrie GREGORIANINA (kristianina) : miainga amin'ny nahaterahan'i Jesoa Kristy ;",
          "kalandrie SILAMO : miainga amin'ny hejira (622 taor. J.K.) ;",
          "kalandrie JIOSY sy kalandrie SINOA : samy manana ny fiaingany sy ny fomba fanisany ;",
          "ny Ntaolo malagasy dia nampiasa ny volana sy ny vintana (alahamady, adaoro...) handaminana ny fotoana.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny tetiandro malagasy nentim-paharazana dia nifototra tamin'ny volana : ny anaran'ny volana toy ny Alahamady, Adaoro, Adizaoza dia avy amin'ny teny arabo, porofon'ny fifandraisan'ny Malagasy tamin'ny mpivarotra arabo fahiny !",
      "Rehefa miova ny taona silamo dia tsy mifanandrify amin'ny 1 janoary mihitsy izy : satria 354 andro monja ny taona silamo iray, ka mihemotra 11 andro isan-taona amin'ny kalandrie gregorianina ny fetiny.",
    ],
    tahirinKevitra: [
      "Dinihina ity frizy ity ary valio :",
      "1958 (Repoblika I) — 1960 (fahaleovantena) — 1972 (rotaka) — 1975 (Repoblika II) — 1993 (Repoblika III) — 2010 (Repoblika IV)",
      "1. Firy taona no elanelan'ny 1958 sy ny 2010 ?",
      "2. Iza amin'ireo daty ireo no tranainy indrindra ? Ary vaovao indrindra ?",
      "3. Amin'ny taon-jato fahafiry avokoa ireo daty rehetra ireo, afa-tsy ny 2010 ?",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
    ],
  },
  rakibolana: [
    { mg: "Frizy kronolojika", fr: "Frise chronologique" },
    { mg: "Taon-jato", fr: "Siècle" },
    { mg: "Arivo taona", fr: "Millénaire" },
    { mg: "Kalandrie / tetiandro", fr: "Calendrier" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : ny taon-jato dia ……… taona ; ny arivo taona dia ……… taona ; ny folo taona dia ……… taona.",
      items: [],
      corrige: [[{ text: "Taon-jato = " }, { text: "100 taona", cle: true }, { text: " ; arivo taona = " }, { text: "1 000 taona", cle: true }, { text: " ; folo taona = " }, { text: "10 taona", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 4,
      consigne: "Amin'ny taon-jato fahafiry ireto taona ireto : 1960 ; 1896 ; 2026 ; 1500 ? (1 isa avy)",
      items: [],
      corrige: [[{ text: "1960 : " }, { text: "faha-20", cle: true }, { text: " ; 1896 : " }, { text: "faha-19", cle: true }, { text: " ; 2026 : " }, { text: "faha-21", cle: true }, { text: " ; 1500 : " }, { text: "faha-15", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Alaharo amin'ny frizy ireto : fahaleovantena (1960), Repoblika IV (2010), Repoblika I (1958), Repoblika II (1975). Iza no elanelam-potoana lava indrindra ?",
      items: [],
      corrige: [[{ text: "Filaharana : " }, { text: "1958 - 1960 - 1975 - 2010", cle: true }, { text: " (2 isa). Elanelana lava indrindra : " }, { text: "1975 ka hatramin'ny 2010 (35 taona)", cle: true }, { text: " (1 isa)." }]],
    },
  ],
};

const S4 = {
  numero: 4, total: 27, lohahevitra: LH,
  titre: "Ireo karazana loharano ara-tantara",
  tanjona: "mitanisa sy manasokajy ireo karazana loharano fanovozan-kevitra ara-tantara",
  fanovozanKevitra: DOC + " (FRP T6, fizarana 1-f, 1-h, 1-i)",
  fitaovana: "Sary, zavatra tranainy (vola taloha, gazety...), solaitrabe",
  image: "images/img_seansa04.png",
  imageLegende: "Ny sokajin-doharano telo : an-tsoratra, am-bava ary moana",
  famerenana: {
    qa: [
      { q: "Inona no porofo fa nisy marina ny zava-nitranga iray ?", ra: "Ny porofo ara-tantara : soratra, fitaovana, vavolombelona." },
      { q: "Amin'ny taon-jato fahafiry isika izao ?", ra: "Amin'ny taon-jato faha-21." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampiseho vola taloha na gazety tranainy ny mpampianatra : « Inona no azontsika ianarana avy amin'ity zavatra ity ? »",
      "V.A. : Ny daty, ny sary, ny teny... dia mitantara ny vanim-potoana namoahana azy.",
    ],
    mpianatra: "Mandinika ilay zavatra ary maneho hevitra.",
    technique: "Fandinihana zavatra mivaingana", support: "Vola taloha, gazety",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo karazana loharano fanovozan-kevitra ara-tantara sy ny fanasokajiana azy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara sary maro ny mpampianatra (boky, lovan-tsofina, vilany tany, taolana, tsangam-bato...). Asaina manangona azy ho sokajy telo ny mpianatra.",
    mpianatra: "Manandrana manasokajy ireo sary ary manamarina ny safidiny.",
    technique: "Fanasokajiana sary", support: "Sary karazany",
  },
  famakafakana: {
    qa: [
      { q: "Inona avy ireo sokajin-doharano telo lehibe ?", ra: "An-tsoratra, am-bava ary moana (vestiges)." },
      { q: "Omeo ohatra roa amin'ny loharano an-tsoratra.", ra: "Boky, gazety, soratra voasokitra amin'ny vato, arisiva." },
      { q: "Inona no atao hoe lovan-tsofina ?", ra: "Fahalalana nampitaina am-bava tamin'ny taranaka nifandimby." },
      { q: "Nahoana no antsoina hoe « moana » ny fitaovana sisa tavela ?", ra: "Satria tsy miteny izy fa ny mpahay tantara no mamaky ny hafatra raketiny." },
      { q: "Iza no siansa manampy amin'ny fandalinana ny loharano moana ?", ra: "Ny arkeolojia." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary voasokajy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : sokajy telo ny loharano — an-tsoratra, am-bava, moana — ary samy manampy amin'ny fandrafetana ny tantara.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : gazety tranainy ; vilany tany hita tao anaty lava-bato ; angano notantarain'ny raibe ; vola madinika taloha ; boky ; hira nentim-paharazana.",
      items: [],
      corrige: [[{ text: "An-tsoratra : " }, { text: "gazety, boky", cle: true }, { text: " ; am-bava : " }, { text: "angano, hira", cle: true }, { text: " ; moana : " }, { text: "vilany tany, vola", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Omeo ohatra iray avy amin'ny sokajin-doharano tsirairay hita ao amin'ny fokontaninao.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "rakitsoratry ny fokontany (an-tsoratra) ; tantara nolazain'ny Ntaolo (am-bava) ; fasan-drazana na tsangam-bato (moana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["loharano an-tsoratra", "loharano am-bava", "tahirin-kevitra moana", "arkeolojia", "arisiva", "lovan-tsofina"],
    sections: [
      {
        titre: "1. Nahoana no ilaina ny loharano ?",
        paras: [
          "Raha te hahalala ny lasa isika dia mampiasa LOHARANO FANOVOZAN-KEVITRA ara-tantara, ary miara-miasa amin'ny siansa hafa toy ny ARKEOLOJIA (fikarohana sy fandalinana ny toeram-ponenana sy ny fitaovan'ny olona fahiny) sy ny siansa ara-tsosialy.",
          "Ny fampiasana ny loharano dia ahafahana MANDRAFITRA tantara (ohatra : ny lovan-tsofina avadika ho tantara raiketina an-tsoratra) sy MIKAROKA NY FAHAMARINAN'ny tranga iray.",
        ],
      },
      {
        titre: "2. Ny loharano an-tsoratra (documents écrits)",
        paras: ["Ireo fitaovana mirakitra AN-TSORATRA ny tranga :"],
        puces: [
          "boky, gazety, ampahan-dahatsoratra ;",
          "soratra voasokitra amin'ny vato, ny metaly, ny rindrina na ny papyrus ;",
          "ny ARISIVA : tahirim-bokim-pirenena, firaketana monisipaly, rakitsoratry ny fitsarana, firaketana ara-miaramila.",
        ],
      },
      {
        titre: "3. Ny loharano am-bava (sources orales)",
        paras: ["Ireo fahalalana nampitaina AM-BAVA :"],
        puces: [
          "ny LOVAN-TSOFINA : fitambaran'ny fomba amam-panao nampitaina tamin'ny taranaka nifandimby ;",
          "ny fijoroana vavolombelona sy ny tantaram-piainan'ny olona niaina ny tranga ;",
          "ny tahirim-peo, ny horonantsary, ny tantara amin'ny onjam-peo sy ny fahita lavitra ;",
          "ny literatiora am-bava : angano, oha-pitenenana, hainteny.",
        ],
      },
      {
        titre: "4. Ny tahirin-kevitra moana (documents muets na vestiges)",
        paras: ["Ireo zavatra sisa tavela TSY MITENY nefa mitantara :"],
        puces: [
          "fitaovana nampiasan'ny olona taloha : vilany tany, sotro, fihogo ;",
          "ny taolana sisa tavela, ny sakafo sisa ;",
          "vola, firavaka, sary hosodoko amin'ny vato sy anaty lava-bato ;",
          "tsangam-bato, fotodrafitrasa tranainy, trano rava.",
        ],
      },
    ],
    fantatraoVe: [
      "Tao Andavakoera sy tao amin'ny lava-baton'i Anjohibe no nahitan'ny arkeology fitaovana sy taolana maneho fa efa nisy olona nonina teto Madagasikara an'arivony taona lasa izay — porofo moana tsy voasoratra na aiza na aiza !",
      "Ny tahirim-bokim-pirenena (Arisiva nasionaly) ao Antananarivo dia mitahiry ny « Kabary » sy ny taratasin'ny Fanjakan'Imerina tamin'ny taonjato faha-19 : ireo no loharano an-tsoratra malagasy tranainy indrindra voatahiry ao.",
    ],
    tahirinKevitra: [
      "Dinihina ity tranga ity ary valio :",
      "« Nahita vilany tany, vola madinika ary taolan-kena tao anaty lava-bato iray ny mpikaroka. Tsy nisy soratra na dia iray aza. Kanefa afaka nilaza izy ireo fa nisy olona nonina tao, nandrahoin-tsakafo ary nifanakalo entana tamin'ny vahiny. »",
      "1. Sokajy inona ireo zavatra hita ireo ?",
      "2. Ahoana no ahafahan'ny mpikaroka milaza zavatra momba ny lasa nefa tsy nisy soratra ?",
      "3. Inona no siansa nanampy azy ireo ?",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
    ],
  },
  rakibolana: [
    { mg: "Loharano fanovozan-kevitra", fr: "Source documentaire" },
    { mg: "Arisiva", fr: "Archives" },
    { mg: "Tahirin-kevitra moana", fr: "Document muet, vestige" },
    { mg: "Arkeolojia", fr: "Archéologie" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Tanisao ireo sokajin-doharano telo lehibe. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1. " }, { text: "Loharano an-tsoratra", cle: true }, { text: " ; 2. " }, { text: "loharano am-bava", cle: true }, { text: " ; 3. " }, { text: "tahirin-kevitra moana (vestiges)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ireto : a) soratra voasokitra amin'ny vato ; b) hira gasy nentim-paharazana ; c) firavaka volamena hita tao anaty fasana ; d) rakitsoratry ny fitsarana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) " }, { text: "an-tsoratra", cle: true }, { text: " ; b) " }, { text: "am-bava", cle: true }, { text: " ; c) " }, { text: "moana", cle: true }, { text: " ; d) " }, { text: "an-tsoratra (arisiva)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny lovan-tsofina no sarobidy amin'ny tantaran'i Madagasikara ? Omeo antony roa.",
      items: [],
      corrige: [[{ text: "Satria " }, { text: "vitsy ny loharano an-tsoratra malagasy talohan'ny taonjato faha-19", cle: true }, { text: " (1,5 isa) ary " }, { text: "ny lovan-tsofina no nitahiry ny tantaran'ny faritra sy ny fianakaviana ka azo avadika ho tantara an-tsoratra", cle: true }, { text: " (1,5 isa)." }]],
    },
  ],
};

const S5 = {
  numero: 5, total: 27, lohahevitra: LH,
  titre: "Ny mampiavaka ireo loharano fanovozan-kevitra",
  tanjona: "mampitaha sy mampiavaka ireo loharano ary milaza ny lanjany amin'ny fandrafetana ny tantara",
  fanovozanKevitra: DOC + " (FRP T6, fizarana 1-g, 1-j, 1-k)",
  fitaovana: "Fafana famintinana, sary, solaitrabe",
  image: "images/img_seansa05.png",
  imageLegende: "Fafana : ny sokajin-doharano telo sy ny ohatra amin'izy ireo",
  famerenana: {
    qa: [
      { q: "Tanisao ireo sokajin-doharano telo.", ra: "An-tsoratra, am-bava, moana." },
      { q: "Omeo ohatra iray amin'ny loharano moana.", ra: "Vilany tany, vola taloha, taolana, tsangam-bato." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Raha samy mitantara ny rotaka 1972 ny gazety tamin'izany andro izany sy ny dadabe nanatri-maso azy, mitovy ve ny lanjan'izy ireo ? Inona no mampiavaka azy ? »",
      "V.A. : Samy sarobidy izy roa fa samy manana ny toetrany : ny gazety voasoratra tamin'ny fotoanany, ny fijoroana vavolombelona kosa mety miova arakaraka ny fahatsiarovana.",
    ],
    mpianatra: "Maneho hevitra sy mampitaha.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny mampiavaka ny loharano tsirairay sy ny lanjany amin'ny fandrafetana ny tantara.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny fafana famintinana (sokajy telo sy ny ohatra) ny mpampianatra ary mitarika ny fampitahana : inona no mahatsara sy mahalemy ny sokajy tsirairay ?",
    mpianatra: "Mandinika ny fafana, mampitaha ary mandray anjara.",
    technique: "Fandinihana fafana", support: "Fafana famintinana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no mampiavaka ny loharano an-tsoratra ?", ra: "Mitahiry sy mirakitra an-tsoratra ny tranga, ka azo verina vakina hatrany." },
      { q: "Inona no mampiavaka ny loharano am-bava ?", ra: "Fampitana mivantana amin'ny taranaka, fa mety miova rehefa mandeha ny fotoana." },
      { q: "Inona no mampiavaka ny tahirin-kevitra moana ?", ra: "Ahafahana manadihady ny fomba fiainana taloha na dia tsy nisy soratra aza." },
      { q: "Nahoana no tsara ny mampitaha loharano maro samihafa ?", ra: "Mba hamaritana ny fahamarinan'ny tranga sy hanitsiana ny hadisoana." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : samy manana ny toetrany sy ny lanjany ny loharano ; ny fampitahana azy ireo no miantoka ny fahamarinana ara-tantara.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Marina sa diso : « Ny lovan-tsofina dia tsy misy lanjany satria tsy voasoratra. » Hazavao.",
      items: [],
      corrige: [[{ text: "Diso", cle: true }, { text: " : ny lovan-tsofina dia " }, { text: "loharano sarobidy azo avadika ho tantara an-tsoratra", cle: true }, { text: ", saingy mila hamarinina amin'ny loharano hafa." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Te hahalala ny tantaran'ny tanànanao ianao. Loharano telo samihafa no ampiasainao : tanisao ary lazao ny anjara asan'ny tsirairay.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "ny rakitsoratry ny fokontany (an-tsoratra : daty sy anarana marina) ; ny fitantaran'ny Ntaolo (am-bava : tsipiriany tsy voasoratra) ; ny tsangam-bato sy fasana (moana : porofo hita maso)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fahamarinana ara-tantara", "fampitahana", "lovan-tsofina", "fanadihadiana", "porofo"],
    sections: [
      {
        titre: "1. Samy manana ny mampiavaka azy ny loharano",
        paras: ["Ny fampiasana ny loharano dia ahafantarana ny marina sy ahafahana mandrafitra tantara. Samy manana ny toetrany anefa izy ireo :"],
        puces: [
          "ny AN-TSORATRA sy an-tsary : mitahiry sy mirakitra mazava ny tranga (daty, anarana, tarehimarika), ka azo verina vakina sy ampitahaina hatrany ;",
          "ny AM-BAVA (lovan-tsofina, fanadihadiana am-bava) : fampitana mivantana amin'ny taranaka, feno aina, saingy mety miova na mihena rehefa mandeha ny fotoana ;",
          "ny MOANA (tapa-porofo, trano haolo, sisam-pitaovana : sotro, vilany, fihogo...) : ahafahana manadihady sy mahafantatra ny fomba fiainana taloha, na dia tsy nisy soratra aza ;",
          "ny HAINO VAKY JERY (mozika, feo, horonantsary) sy ny FANEHOANA SARY (sokitra, sary itatra) : mampita ny endrika sy ny feo mivantana.",
        ],
      },
      {
        titre: "2. Ny lanjan'ny fampitahana ny loharano",
        paras: [
          "Ny mpahay tantara dia tsy mianina amin'ny loharano tokana : AMPITAHAINA ny loharano maro samihafa mba hamaritana ny FAHAMARINAN'ny tranga. Raha mifanohitra ny loharano roa dia karohina izay marina amin'ny alalan'ny porofo fanampiny.",
          "Ohatra voavaha — Ny lovan-tsofina iray milaza fa « fahiny dia mpanjaka lehibe no nitondra ny faritra ». Raha hita koa ny tsangam-bato misy ny anarany (moana) sy ny taratasin'ny mpitantara vahiny (an-tsoratra), dia mifameno ny loharano telo ka mitombo ny fahamarinan'ilay tantara.",
        ],
      },
      {
        titre: "3. Fitandremana amin'ny fampiasana ny loharano",
        paras: [],
        puces: [
          "jerena hatrany NY NAMORONA ny loharano sy ny fotoana namoronana azy ;",
          "fantarina raha VAVOLOMBELONA mivantana ilay mpitantara na nandre fotsiny ;",
          "tandremana ny loharano MITANILA (te hanome voninahitra na hanaratsy) ;",
          "amin'ny aterineto : hamarinina amin'ny loharano azo itokisana ny vaovao alaina.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny « Tantara ny Andriana » dia nangonin'i Mompera Callet tamin'ny fanadihadiana am-bava : nihaino sy nandrakitra ny tenin'ny Ntaolo izy nandritra ny taona maro — ohatra malaza indrindra amin'ny lovan-tsofina lasa loharano an-tsoratra !",
      "Ny mpahay tantara ankehitriny dia mampiasa hatramin'ny siansa : ny fandrefesana karbona 14 dia ahafahana mamaritra ny taonan'ny taolana na hazo tranainy hatramin'ny an'arivony taona !",
    ],
    tahirinKevitra: [
      "Dinihina ity tranga ity ary valio :",
      "« Milaza ny lovan-tsofina fa toerana nisian'ny ady lehibe ny havoana iray. Nikaroka teo ny arkeology ka nahita lefona sy taolana maro. Hita tao amin'ny arisiva koa ny taratasin'ny governora tamin'izany milaza ilay ady. »",
      "1. Loharano firy no voatanisa eto ? Sokajio izy ireo.",
      "2. Nahoana no azo lazaina fa marina ilay tantaran'ny ady ?",
      "3. Inona no lesona azo tsoahina momba ny asan'ny mpahay tantara ?",
    ],
  },
  rakibolana: [
    { mg: "Fampitahana", fr: "Comparaison, recoupement" },
    { mg: "Fahamarinana ara-tantara", fr: "Vérité historique" },
    { mg: "Mitanila", fr: "Partial, orienté" },
    { mg: "Fanadihadiana", fr: "Enquête, investigation" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio ny sokajy sy ny toetrany : 1. an-tsoratra / 2. am-bava / 3. moana — a. mety miova rehefa mandeha ny fotoana ; b. mirakitra mazava ny daty sy ny anarana ; c. tsy miteny fa dinihin'ny arkeology. (+1 isa raha marina daholo)",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-c", cle: true }, { text: ". (1 isa avy + 1 isa fandaminana)" }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny mpahay tantara no mampitaha loharano maro samihafa ? Omeo antony roa.",
      items: [],
      corrige: [[{ text: "Mba " }, { text: "hamaritana ny fahamarinan'ny tranga", cle: true }, { text: " (1,5 isa) sy mba " }, { text: "hanitsiana na hamenoana ny banga amin'ny loharano tokana", cle: true }, { text: " (1,5 isa)." }]],
    },
    {
      points: 3,
      consigne: "Nahita horonan-tsary tranainy momba ny fetin'ny fahaleovantena 1960 ianao. Sokajy inona io loharano io ary inona no lanjany ?",
      items: [],
      corrige: [[{ text: "Sokajy : " }, { text: "haino vaky jery (loharano am-bava sy an-tsary)", cle: true }, { text: " (1,5 isa). Lanjany : " }, { text: "mampiseho mivantana ny endrika sy ny feon'ny tranga", cle: true }, { text: " (1,5 isa)." }]],
    },
  ],
};

module.exports = { seances: [S2, S3, S4, S5] };
