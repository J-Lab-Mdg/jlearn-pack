// data-lh4b.js — Lohahevitra IV : Ny Moyen Âge (S17-S19) : Silamo
const LH = "Lohahevitra IV — Ny Moyen Âge (476-1492)";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S17 = {
  numero: 17, total: 32, lohahevitra: LH,
  titre: "Ny fahaterahan'ny Silamo",
  tanjona: "mametraka ao anatin'ny fotoana sy ny toerana ny fahaterahan'ny Silamo ary manoritsoritra ny fototry ny finoana silamo",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'i Arabia, frizy, solaitrabe",
  image: "images/img_s17.png",
  imageLegende: "I Arabia sy ny tanànan'i La Mecque sy Médine",
  famerenana: {
    qa: [
      { q: "Fivavahana inona no niseho tamin'ny Antiquité ka lasa fivavahana ofisialin'ny Empira romanina ?", ra: "Ny kristianisma." },
      { q: "Inona ny vanim-potoana iainantsika amin'ity lohahevitra ity ?", ra: "Ny Moyen Âge (476-1492)." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Fivavahana lehibe iray hafa no teraka tamin'ny Moyen Âge ary manana mpino an-tapitrisany eto Madagasikara sy eran-tany ankehitriny. Inona izany ? »",
      "V.A. : Ny Silamo (Islam) — hianarantsika androany ny fahaterahany tany Arabia.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fahaterahan'ny Silamo : i Arabia, i Mohammed ary ny fototry ny finoana.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'i ARABIA ny mpampianatra : saika efitra izy, lalam-barotry ny karavana (rameva), ary ny tanànan'i LA MECQUE (ivon'ny varotra sy ny fivavahana) sy MÉDINE. Apetraka eo amin'ny frizy ny daty lehibe : 570 (nahaterahan'i Mohammed), 622 (Hegira), 632 (nahafatesany).",
    mpianatra: "Mandinika ny sari-tany sy ny frizy.",
    technique: "Fandinihana sari-tany", support: "Sari-tany, frizy",
  },
  famakafakana: {
    qa: [
      { q: "Taiza no teraka ny Silamo ?", ra: "Tany ARABIA (saika efitra, lalam-barotry ny karavana), tao amin'ny tanànan'i La Mecque." },
      { q: "Iza i Mohammed ?", ra: "Mpivarotra tao La Mecque (teraka tokony ho 570) ; nitory ny finoana an'Andriamanitra tokana (Allah) izy nanomboka tamin'ny 610 teo." },
      { q: "Inona no atao hoe Hegira ?", ra: "Ny nifindran'i Mohammed sy ny mpanara-dia azy avy tao La Mecque nankany Médine tamin'ny 622 — io taona io no fiandohan'ny kalandrie silamo." },
      { q: "Inona ny bokin'ny Silamo ?", ra: "Ny CORAN, voasoratra amin'ny teny arabo, mirakitra ny fampianarana noraisin'i Mohammed." },
      { q: "Tanisao ny andry dimin'ny finoana silamo.", ra: "Ny fanekem-pinoana (chahada) ; ny vavaka indimy isan'andro ; ny fiantrana (zakat) ; ny fifadian-kanina amin'ny volana Ramadany ; ny fivahiniana masina any La Mecque (hajj) raha vita." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : teraka tany Arabia tamin'ny taonjato faha-7 ny Silamo ; i Mohammed no mpitondra ny hafatra ; ny Hegira (622) no fiandohan'ny kalandrie silamo ; andry dimy no fototry ny finoana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny Silamo dia teraka tany … ; ny mpaminaniny dia i … ; ny Hegira dia tamin'ny taona … ; ny bokiny masina dia ny …",
      items: [],
      corrige: [[{ text: "Arabia (La Mecque)", cle: true }, { text: " ; " }, { text: "Mohammed", cle: true }, { text: " ; " }, { text: "622", cle: true }, { text: " ; " }, { text: "Coran", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Inona no atao hoe Hegira ary nahoana izy no manan-danja amin'ny Silamo ?",
      items: [],
      corrige: [[{ text: "Ny nifindran'i Mohammed avy tao La Mecque nankany Médine tamin'ny 622 ; manan-danja izy satria io no fiandohan'ny fiaraha-monina silamo voalohany sy ny kalandrie silamo", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Arabia", "La Mecque", "Mohammed", "Hegira 622", "Coran", "andry dimy"],
    sections: [
      {
        titre: "1. I Arabia tamin'ny taonjato faha-7",
        paras: [
          "I ARABIA dia saikinosy saika efitra : ny KARAVANA (andian-drameva) no mitondra ny varotra (zava-manitra, lamba) mampitohy an'i Azia sy ny Mediterane. Ny tanànan'i LA MECQUE no ivon'ny varotra sy ny fivavahana : nivavaka tamin'andriamanitra maro ny Arabo tamin'izany.",
        ],
      },
      {
        titre: "2. I Mohammed sy ny hafatra",
        paras: [
          "I MOHAMMED dia mpivarotra tao La Mecque, teraka tokony ho tamin'ny 570. Nanomboka tamin'ny 610 teo izy dia nitory ny finoana an'ANDRIAMANITRA TOKANA (Allah). Noho ny fanoherana azy tao La Mecque dia nifindra tany MÉDINE izy sy ny mpanara-dia azy tamin'ny 622 : izany no HEGIRA, fiandohan'ny kalandrie silamo. Tao Médine izy no nandamina ny fiaraha-monina silamo voalohany, ary maty tamin'ny 632 rehefa avy nampiray ny ankamaroan'i Arabia.",
        ],
      },
      {
        titre: "3. Ny fototry ny finoana silamo",
        paras: [
          "Ny fampianarana noraisin'i Mohammed dia voarakitra ao amin'ny CORAN (teny arabo). Ny mpino silamo dia manatanteraka ny ANDRY DIMY :",
        ],
        puces: [
          "ny FANEKEM-PINOANA (chahada) : « Tsy misy andriamanitra afa-tsy Allah ary i Mohammed no irany » ;",
          "ny VAVAKA indimy isan'andro, mitodika any La Mecque ;",
          "ny FIANTRANA (zakat) ho an'ny mahantra ;",
          "ny FIFADIAN-KANINA amin'ny volana RAMADANY ;",
          "ny FIVAHINIANA MASINA any La Mecque (hajj), indray mandeha amin'ny fiainana raha vita.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ny taona 622 dia taona voalohany amin'ny kalandrie silamo. Kalandrie hafa inona koa no fantatrao ary inona no taona fiaingany ? Vahaolana : ny kalandrie gregorianina (fiaingany ny nahaterahan'i Jesoa Kristy) ; ny kalandrie jiosy sy ny kalandrie sinoa. Samy manana ny fiaingany ny kalandrie — izany no mahatonga ny taona tsy mitovy isa.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny Hegira dia tsy fandosirana fotsiny : tao Médine i Mohammed dia nanorina fiaraha-monina vaovao nifototra tamin'ny finoana iombonana fa tsy tamin'ny fihavanana ara-poko intsony. »",
      "1. Inona no naorin'i Mohammed tao Médine ?",
      "2. Inona no fototry ny fiaraha-monina vaovao ?",
      "3. Inona no maha-samy hafa azy tamin'ny fiaraha-monina arabo taloha ?",
    ],
  },
  rakibolana: [
    { mg: "Silamo (Islam)", fr: "Islam" },
    { mg: "Karavana", fr: "Caravane" },
    { mg: "Hegira", fr: "Hégire" },
    { mg: "Coran", fr: "Coran" },
    { mg: "Fivahiniana masina (hajj)", fr: "Pèlerinage" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. 570 / 2. 610 / 3. 622 / 4. 632 — a. Hegira ; b. nahafatesan'i Mohammed ; d. nahaterahan'i Mohammed ; e. niandohan'ny fitoriana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ny andry dimin'ny finoana silamo.",
      items: [],
      corrige: [[{ text: "Fanekem-pinoana ; vavaka indimy isan'andro ; fiantrana (zakat) ; fifadian-kanina amin'ny Ramadany ; fivahiniana masina any La Mecque", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Tany lonaka be orana i Arabia. b) Ny Coran dia voasoratra amin'ny teny arabo. d) Ny kalandrie silamo dia miainga amin'ny Hegira. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : saika efitra izy", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
};

const S18 = {
  numero: 18, total: 32, lohahevitra: LH,
  titre: "Ny fandresen'ny Silamo (630-750)",
  tanjona: "mandahatra ny dingan'ny fanitarana silamo sy mamaritra azy eo amin'ny sari-tany",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'ny fanitarana silamo, frizy, solaitrabe",
  image: "images/img_s18.png",
  imageLegende: "Ny fanitarana silamo : avy any Arabia ka hatrany Espaina sy ny sisin'i India",
  famerenana: {
    qa: [
      { q: "Oviana ny Hegira ary inona no dikany ?", ra: "622 : nifindra tany Médine i Mohammed — fiandohan'ny kalandrie silamo." },
      { q: "Oviana no maty i Mohammed ?", ra: "Tamin'ny 632." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Tao anatin'ny 120 taona monja dia niitatra hatrany Espaina sy ny sisin'i India ny fanjakana silamo. Ahoana no nahatonga fanitarana haingana toy izany ? »",
      "V.A. : Firaisankina, tafika mahery ary fahalemen'ny empira roa lehibe (Byzance sy Persa) — hodinihintsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Sari-tany",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny dingan'ny fandresen'ny Silamo sy ny halehiben'ny fanjakana silamo (630-750).",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'ny fanitarana ny mpampianatra amin'ny loko telo : tamin'ny andron'i Mohammed (630-632 : Arabia), tamin'ny kalifa efatra voalohany (632-661 : Siria, Ejipta, Persa), tamin'ny Omeyyades (661-750 : Afrika avaratra, Espaina, hatrany amin'ny sisin'i India).",
    mpianatra: "Mandinika ny sari-tany sy ny frizy.",
    technique: "Fandinihana sari-tany", support: "Sari-tanin'ny fanitarana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe kalifa ?", ra: "Ny mpandimby an'i Mohammed amin'ny fitondrana ny fiaraha-monina silamo (mpitondra ara-politika sy ara-pivavahana)." },
      { q: "Inona no azo tamin'ny andron'ny kalifa efatra voalohany (632-661) ?", ra: "I Siria, i Palestina, i Ejipta ary ny Empira persa — resy ny tafika byzantinina sy persa." },
      { q: "Ary tamin'ny andron'ny Omeyyades (661-750) ?", ra: "I Afrika avaratra, i Espaina (711) ary ny faritra hatrany amin'ny sisin'i India — Damas no renivohitra." },
      { q: "Aiza no nijanona ny fandrosoana tany Eoropa ?", ra: "Tao Poitiers (Frantsa, 732) : nosakanan'i Charles Martel ny tafika silamo." },
      { q: "Inona no antony nahafaingana ny fanitarana ?", ra: "Firaisankin'ny mpino, tafika maivana sy haingana (soavaly, rameva), fahalemen'i Byzance sy Persa efa trotraky ny ady, ary ny fandeferana tamin'ny mponina resy (nandoa hetra fa afaka nivavaka)." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : dingana telo ny fanitarana (Mohammed ; kalifa efatra 632-661 ; Omeyyades 661-750) ka fanjakana goavana avy any Espaina ka hatrany amin'ny sisin'i India no vokany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Apetraho amin'ny dingana marina : a) fandresena an'i Espaina (711) ; b) fampiraisana an'i Arabia ; d) fandresena an'i Ejipta sy Persa.",
      items: [],
      corrige: [[{ text: "a) Omeyyades (661-750)", cle: true }, { text: " ; b) " }, { text: "Mohammed (630-632)", cle: true }, { text: " ; d) " }, { text: "kalifa efatra voalohany (632-661)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao antony telo nahafaingana ny fanitarana silamo.",
      items: [],
      corrige: [[{ text: "Firaisankin'ny mpino ; tafika maivana sy haingana ; fahalemen'ny Empira byzantinina sy persa (ary ny fandeferana tamin'ny mponina resy)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["kalifa", "kalifa efatra voalohany", "Omeyyades", "Damas", "Poitiers 732", "fanitarana"],
    sections: [
      {
        titre: "1. Dingana telo (630-750)",
        paras: [],
        puces: [
          "TAMIN'NY ANDRON'I MOHAMMED (630-632) : nampiraisina tao ambanin'ny finoana silamo ny ankamaroan'i ARABIA ;",
          "TAMIN'NY KALIFA EFATRA VOALOHANY (632-661) : resy i Siria, i Palestina, i Ejipta ary ny Empira persa ;",
          "TAMIN'NY OMEYYADES (661-750, renivohitra Damas) : azo i Afrika avaratra sy i Espaina (711) ary ny faritra hatrany amin'ny sisin'i India — nosakanan'i Charles Martel tao POITIERS (732) anefa ny fandrosoana tany Frantsa.",
        ],
      },
      {
        titre: "2. Ny antony nahafaingana ny fanitarana",
        paras: [
          "Tao anatin'ny 120 taona monja dia lasa fanjakana goavana ny tanin'ny Silamo. Ny antony : ny FIRAISANKIN'NY MPINO vaovao ; ny TAFIKA MAIVANA SY HAINGANA (soavaly sy rameva) ; ny FAHALEMEN'NY EMPIRA ROA LEHIBE (Byzance sy Persa) efa trotraky ny ady nifanaovany ; ary ny FANDEFERANA : ny mponina resy (kristianina, jiosy) dia navela hivavaka ihany rehefa nandoa hetra manokana, ka vitsy no nanohitra.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Jereo ny sari-tany : nahoana ny ranomasina Mediterane no lasa « sisin-tany » roa tamin'ny taonjato faha-8 ? Vahaolana : ny morony atsimo sy atsinanana dia tanin'ny Silamo, ny morony avaratra kosa kristianina — nizara roa ny tontolon'ny Mediterane, kanefa nitohy ihany ny varotra sy ny fifanakalozana fahalalana teo amin'izy roa.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny mponina tao amin'ny tanàna resy dia navela hitana ny fivavahany sy ny fananany raha nandoa ny hetra (jizya). Maro ny tanàna nanokatra ny vavahadiny tsy niady akory. »",
      "1. Inona no fepetra napetraka tamin'ny mponina resy ?",
      "2. Nahoana ny tanàna sasany no tsy niady akory ?",
      "3. Inona no ambaran'izany momba ny fomba fanitarana ?",
    ],
  },
  rakibolana: [
    { mg: "Kalifa", fr: "Calife" },
    { mg: "Fanitarana", fr: "Expansion, conquête" },
    { mg: "Empira byzantinina", fr: "Empire byzantin" },
    { mg: "Fandeferana", fr: "Tolérance" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny mpandimby an'i Mohammed dia atsoina hoe … ; ny renivohitry ny Omeyyades dia … ; azo tamin'ny 711 i … ; nosakanan'i Charles Martel tao … (732) ny tafika silamo. (1 isa avy)",
      items: [],
      corrige: [[{ text: "kalifa", cle: true }, { text: " ; " }, { text: "Damas", cle: true }, { text: " ; " }, { text: "Espaina", cle: true }, { text: " ; " }, { text: "Poitiers", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Rafeto frizy kely : 622, 632, 661, 711, 732, 750 — ampifandraiso amin'ny zava-nitranga.",
      items: [],
      corrige: [[{ text: "622 Hegira ; 632 nahafatesan'i Mohammed ; 661 niandohan'ny Omeyyades ; 711 azo i Espaina ; 732 Poitiers ; 750 nifaranan'ny Omeyyades", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : ahoana no nanampian'ny fahalemen'i Byzance sy Persa ny fanitarana silamo ?",
      items: [],
      corrige: [[{ text: "Efa nifandona ela ny empira roa ka trotraka sy nihalemy ; mora ho an'ny tafika silamo vaovao sy mafana fo ny nandresy azy ireo", cle: true }, { text: "." }]],
    },
  ],
};

const S19 = {
  numero: 19, total: 32, lohahevitra: LH,
  titre: "Ny fisarahan'ny Silamo sy ny fampitahana ny sivilizasiona medievaly",
  tanjona: "manazava ny anton'ny fisarahan'ny Silamo (sonita sy siita) ary mampitaha ny sivilizasiona tandrefana sy silamo",
  fanovozanKevitra: DOC,
  fitaovana: "Fafana fampitahana, solaitrabe",
  image: "images/img_s19.png",
  imageLegende: "Tanàna silamo sy tanàna eoropeanina : sivilizasiona roa mifanakalo",
  famerenana: {
    qa: [
      { q: "Tanisao ny dingana telon'ny fanitarana silamo.", ra: "Mohammed (630-632) ; kalifa efatra (632-661) ; Omeyyades (661-750)." },
      { q: "Iza no nandimby an'i Mohammed ?", ra: "Ny kalifa." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Maty tsy nanendry mpandimby i Mohammed. Inona no mety hitranga amin'ny fiaraha-monina iray raha tsy fantatra iza no handimby ny mpitondra ? »",
      "V.A. : Fifandirana sy ady an-trano — izany mihitsy no nitranga ka nampisaraka ny Silamo ho sonita sy siita.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny anton'ny fisarahan'ny Silamo sy hampitaha ny sivilizasiona tandrefana sy ny sivilizasiona silamo.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Manazava ny mpampianatra : ny olan'ny fandimbiasana an'i Mohammed no niteraka ady an-trano (fitna) — ny mpomba an'i Ali (vinanton'i Mohammed) lasa SIITA, ny mpanaraka ny fomban'ny fiaraha-monina (sunna) lasa SONITA. Aseho amin'ny fafana ny fampitahana ny sivilizasiona roa.",
    mpianatra: "Mandinika sy mametra-panontaniana.",
    technique: "Fanazavana sy fafana", support: "Fafana fampitahana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no fototry ny fisarahan'ny Silamo ?", ra: "Ny olan'ny FANDIMBIASANA an'i Mohammed : iza no tokony ho kalifa ?" },
      { q: "Iza ny siita ?", ra: "Ny mpomba an'i ALI (vinanton'i Mohammed sady zana-drahalahin-drainy) : ho azy ireo dia ny taranak'i Mohammed ihany no tokony hitondra." },
      { q: "Iza ny sonita ?", ra: "Ny mpanaraka ny SUNNA (fomban'i Mohammed sy ny fiaraha-monina) : ho azy ireo dia azo fidina ny kalifa mendrika — izy no maro an'isa ankehitriny." },
      { q: "Inona ny vokatr'io fisarahana io ?", ra: "Ady an-trano (novonoina i Ali tamin'ny 661) ; fisarahana maharitra hatramin'izao eo amin'ny sonita sy ny siita." },
      { q: "Inona no nifanakalozan'ny sivilizasiona tandrefana sy silamo ?", ra: "Tamin'ny alalan'ny varotra sy i Espaina : ny isa arabo (avy any India), ny algebra, ny fitsaboana, ny bokin'ny Grika nadikan'ny manam-pahaizana silamo — nampandroso an'i Eoropa izany." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny olan'ny fandimbiasana no nampisaraka ny Silamo ho sonita sy siita ; na dia nifanandrina aza ny sivilizasiona roa dia nifanakalo fahalalana ka samy nandroso.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sonita sa siita ? a) mpomba an'i Ali sy ny taranak'i Mohammed ; b) mpanaraka ny sunna ; d) maro an'isa amin'ny Silamo ankehitriny.",
      items: [],
      corrige: [[{ text: "a) siita", cle: true }, { text: " ; b) " }, { text: "sonita", cle: true }, { text: " ; d) " }, { text: "sonita", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Hazavao amin'ny fehezanteny telo ny anton'ny fisarahan'ny Silamo sy ny vokany.",
      items: [],
      corrige: [[{ text: "Maty tsy nanendry mpandimby i Mohammed ka nifanditra ny mpino ; ny mpomba an'i Ali (siita) sy ny mpanaraka ny sunna (sonita) no nifanandrina tamin'ny ady an-trano ; misaraka hatramin'izao ireo sampana roa ireo", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fandimbiasana", "Ali", "siita", "sonita", "sunna", "fifanakalozana"],
    sections: [
      {
        titre: "1. Ny olan'ny fandimbiasana sy ny fisarahana",
        paras: [
          "Maty tamin'ny 632 i Mohammed ka tsy nanendry mpandimby. Ny olan'ny FANDIMBIASANA no niteraka fifandirana lalina :",
        ],
        puces: [
          "NY SIITA : mpomba an'i ALI, vinanton'i Mohammed — ho azy ireo dia ny fianakavian'i Mohammed ihany no tokony hitondra ;",
          "NY SONITA : mpanaraka ny SUNNA (ny fomban'i Mohammed) — ho azy ireo dia azo fidina izay kalifa mendrika ; izy no maro an'isa ankehitriny (sahabo ho 85%).",
        ],
      },
      {
        titre: "2. Ny ady an-trano sy ny vokany",
        paras: [
          "Niteraka ADY AN-TRANO (fitna) ny fifandirana : novonoina i Ali tamin'ny 661 ary ny Omeyyades no naka ny fahefana. Hatramin'izao dia mbola misaraka ny sonita sy ny siita (any Iran sy Irak no be siita indrindra). Mampiseho izany fa ny olan'ny fandimbiasana dia mety hampisaraka fiaraha-monina iray mandritra ny taonjato maro.",
        ],
      },
      {
        titre: "3. Ny fampitahana ny sivilizasiona roa sy ny fifanakalozana",
        paras: [
          "Tamin'ny Moyen Âge dia samy nanana ny heriny ny sivilizasiona TANDREFANA (kristianina) sy ny sivilizasiona SILAMO : ny tandrefana — katedraly, oniversite, feodalite ; ny silamo — tanàna lehibe (Bagdad, Cordoue), siansa (algebra, astronomia, fitsaboana), varotra lavitra.",
          "Nifanakalo be anefa izy roa : ny ISA ARABO ampiasaintsika (0, 1, 2...), ny ALGEBRA, ny fitsaboana ary ny bokin'ny Grika nadikan'ny manam-pahaizana silamo dia tonga tany Eoropa tamin'ny alalan'i Espaina sy ny varotra. Ny fifanakalozana no nampandroso ny roa tonta — lesona ho antsika mandraka androany.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tao Cordoue (Espaina silamo) dia nisy tranomboky nitahiry boky an'aliny ary nianatra tao ny manam-pahaizana kristianina, silamo ary jiosy. Avy tao no nidiran'ny siansa arabo sy ny bokin'ny Grika tany Eoropa. »",
      "1. Aiza i Cordoue ary inona no nampalaza azy ?",
      "2. Iza avy no nianatra tao ?",
      "3. Inona no lesona azontsika avy amin'izany fiaraha-mianatra izany ?",
    ],
  },
  rakibolana: [
    { mg: "Fandimbiasana", fr: "Succession" },
    { mg: "Sonita / Siita", fr: "Sunnite / Chiite" },
    { mg: "Ady an-trano", fr: "Guerre civile" },
    { mg: "Isa arabo", fr: "Chiffres arabes" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Nanendry mpandimby i Mohammed talohan'ny nahafatesany. b) Ny siita dia mpomba an'i Ali. d) Ny sonita no maro an'isa ankehitriny. e) Tsy nisy fifanakalozana ny sivilizasiona roa. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : tsy nanendry izy ka nifanditra ny mpino", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : isa arabo, algebra, boky — nifanakalo be izy", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Omeo lova telo avy amin'ny sivilizasiona silamo mbola ampiasaina ankehitriny.",
      items: [],
      corrige: [[{ text: "Ny isa arabo (0, 1, 2...) ; ny algebra ; ny fandrosoan'ny fitsaboana sy ny astronomia (na : ny fandikana ny bokin'ny Grika)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Inona no ifandraisan'ny fisarahan'ny Silamo sy ny lohahevitra hoe « fitsikerana ny loharano » : nahoana no tokony hitandrina rehefa mamaky tantara momba ny fifandirana ara-pivavahana ?",
      items: [],
      corrige: [[{ text: "Satria samy mitantara araka ny fijeriny ny andaniny roa ; ny mpahay tantara dia mampitaha ny loharano avy amin'ny roa tonta mba hahitana ny marina", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH4B: { seances: [S17, S18, S19] } };
