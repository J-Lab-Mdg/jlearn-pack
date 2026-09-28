// data-lh2a.js — Lohahevitra II : Madagasikara taorian'ny fahaleovantena (S7-S11)
const LH = "Lohahevitra II — Madagasikara taorian'ny fahaleovantena";
const DOC = "PE T6 (MEN, nohavaozina) ; FRP Tantara T6 ; boky Tantara J-Learn";

const S7 = {
  numero: 7, total: 27, lohahevitra: LH,
  titre: "Ny atao hoe Repoblika sy ny frizin'ireo Repoblika nifandimby",
  tanjona: "mamaritra ny atao hoe Repoblika ary mandahatra amin'ny frizy ireo Repoblika nifandimby teto Madagasikara",
  fanovozanKevitra: DOC + " (LFK 2-a, 2-b, 2-d, 2-e)",
  fitaovana: "Frizy kronolojika, sainam-pirenena, solaitrabe",
  image: "images/img_seansa07.png",
  imageLegende: "Frizy : ireo Repoblika nifandimby teto Madagasikara (1958-2026)",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe frizy kronolojika ?", ra: "Tsipika andaharana ny zava-nitranga araka ny filaharany ara-potoana." },
      { q: "Oviana i Madagasikara no nahazo ny fahaleovantenany ?", ra: "Ny 26 jona 1960." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Rehefa mihira ny hiram-pirenena isika dia miarahaba ny « Repoblikan'i Madagasikara ». Inona anefa no atao hoe Repoblika ? Firy ny Repoblika efa nisy teto ? »",
      "V.A. : Efatra ny Repoblika nifandimby hatramin'ny 1958 ary misy tetezamita eo anelanelany.",
    ],
    mpianatra: "Maneho hevitra ary manandrana manisa.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hamaritra ny atao hoe Repoblika ary handahatra amin'ny frizy ireo Repoblika nifandimby teto Madagasikara.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frizy 1958-2026 ny mpampianatra : Repoblika I (1958-1972), tetezamita, Repoblika II (1975-1991), tetezamita, Repoblika III (1993-2010), tetezamita, Repoblika IV (2010-...). Asaina mamaky ny frizy ny mpianatra.",
    mpianatra: "Mandinika ny frizy, mamaky ireo vanim-potoana ary manontany.",
    technique: "Fandinihana frizy", support: "Frizy kronolojika",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe Repoblika ?", ra: "Lamin-kevitra itambaran'ny vahoaka tsy vakivolo, ka ny vahoaka no loharanon'ny fahefana." },
      { q: "Firy ny Repoblika nifandimby teto Madagasikara ?", ra: "Efatra : 1958-1972, 1975-1991, 1993-2010, 2010-..." },
      { q: "Inona no hitantsika eo anelanelan'ny Repoblika roa ?", ra: "Tetezamita : vanim-potoana fifandimbiasam-pahefana vonjimaika." },
      { q: "Iza avy ireo filoha voafidy voalohany isaky ny Repoblika ?", ra: "Tsiranana (I), Ratsiraka (II), Zafy (III), Rajaonarimampianina (IV)." },
      { q: "Mitovy ve ny teny filamatry ny Repoblika efatra ?", ra: "Tsia : niova isaky ny Repoblika (ohatra : Tanindrazana-Fahafahana-Fandrosoana tamin'ny Repoblika I)." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Repoblika dia fitondrana iorenan'ny fahefan'ny vahoaka ; efatra no nifandimby teto, sarahin'ny tetezamita.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy ny frizy : Repoblika I (…-…) ; Repoblika II (…-…) ; Repoblika III (…-…) ; Repoblika IV (…-…).",
      items: [],
      corrige: [[{ text: "Repoblika I : " }, { text: "1958-1972", cle: true }, { text: " ; II : " }, { text: "1975-1991", cle: true }, { text: " ; III : " }, { text: "1993-2010", cle: true }, { text: " ; IV : " }, { text: "2010-...", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Omeo ny famaritana ny Repoblika ary lazao ny karazany.",
      items: [],
      corrige: [[{ text: "Ny Repoblika dia " }, { text: "lamin-kevitra itambaran'ny vahoaka tsy vakivolo", cle: true }, { text: " ; misy karazany : " }, { text: "mametra ny fahalalahana ho an'ny tombontsoan'ny daholobe, miorina amin'ny finoana, ary mandala ny demokrasia (toa an'i Madagasikara)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Repoblika", "tetezamita", "demokrasia", "teny filamatra", "faneva", "hiram-pirenena"],
    sections: [
      {
        titre: "1. Ny atao hoe Repoblika",
        paras: [
          "Ny REPOBLIKA dia lamin-kevitra izay itambaran'ny vahoaka tsy vakivolo : ny VAHOAKA no loharanon'ny fahefana ary mifidy ny mpitondra azy. Misy karazany maro ny Repoblika :",
        ],
        puces: [
          "Repoblika mampihatra fitondrana mametra ny fahalalahan'ny isam-batan'olona noho ny fanomezan-danja ny tombontsoan'ny daholobe ;",
          "Repoblika manorina ny fahefana amin'ny finoana (ohatra : Repoblika silamo) ;",
          "Repoblika MANDALA NY DEMOKRASIA : anisan'ny mampihatra izany i Madagasikara.",
        ],
      },
      {
        titre: "2. Ireo Repoblika nifandimby hatramin'ny 1958",
        paras: ["Nifandimby ny Repoblika efatra, samy nanana ny anarany sy ny teny filamany :"],
        puces: [
          "REPOBLIKA I (1958-1972) — « Repoblika Malagasy » ; filoha : Philibert Tsiranana ; teny filamatra : Fahafahana-Tanindrazana-Fandrosoana ;",
          "REPOBLIKA II (1975-1991) — « Repoblika Demokratika Malagasy » ; filoha : Didier Ratsiraka ; teny filamatra : Tanindrazana-Tolom-piavotana-Fahafahana ;",
          "REPOBLIKA III (1993-2010) — « Repoblikan'i Madagasikara » ; filoha : Zafy Albert, avy eo Didier Ratsiraka, avy eo Marc Ravalomanana ;",
          "REPOBLIKA IV (2010-...) — « Repoblikan'i Madagasikara » ; teny filamatra : Fitiavana-Tanindrazana-Fandrosoana.",
          "Tsy niova mihitsy kosa ny FANEVA (saina fotsy, mena, maitso) sy ny HIRAM-PIRENENA (« Ry tanindrazanay malala ô ! »).",
        ],
      },
      {
        titre: "3. Ny tetezamita",
        paras: [
          "Eo anelanelan'ny Repoblika dia nisy TETEZAMITA : vanim-potoana vonjimaika iandrasana ny fametrahana rafitra vaovao. Ireo tetezamita lehibe : 1972-1975 (fitondrana miaramila), 1991-1993, 2009-2014, ary ny fanorenana ifotony nanomboka ny 2025.",
          "Azo ambara fa korontana matetika no niseho teo amin'ny fifandimbiasam-pitondrana teto Madagasikara, ka nahatonga ireo tetezamita maro ireo.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny 14 oktobra 1958 no nambara ny Repoblika Malagasy voalohany — talohan'ny fahaleovantena (26 jona 1960) ! Repoblika tao anatin'ny Fiombonambe frantsay (Communauté française) aloha izy vao lasa firenena mahaleo tena tanteraka.",
      "Ny loko telon'ny sainam-pirenena dia samy manana ny heviny : ny fotsy (fahadiovana), ny mena (fahefana sy ny ra nafoin'ny maherifo), ary ny maitso (fanantenana sy ny tanora amoron-tsiraka).",
    ],
    tahirinKevitra: [
      "Dinihina ity fafana ity ary valio :",
      "Repoblika I : Repoblika Malagasy (1958-1972), Tsiranana — Repoblika II : Repoblika Demokratika Malagasy (1975-1991), Ratsiraka — Repoblika III : Repoblikan'i Madagasikara (1993-2010), Zafy/Ratsiraka/Ravalomanana — Repoblika IV : Repoblikan'i Madagasikara (2010-...).",
      "1. Iza no Repoblika naharitra ela indrindra ?",
      "2. Firy taona ny elanelan'ny niandohan'ny Repoblika I sy ny Repoblika IV ?",
      "3. Inona no mitovy amin'ny Repoblika efatra ? Inona no tsy mitovy ?",
    ],
  },
  rakibolana: [
    { mg: "Repoblika", fr: "République" },
    { mg: "Tetezamita", fr: "Transition" },
    { mg: "Teny filamatra", fr: "Devise" },
    { mg: "Faneva / sainam-pirenena", fr: "Drapeau national" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny fafana : Repoblika I (vanim-potoana ? filoha ?) ; Repoblika II (vanim-potoana ? filoha ?).",
      items: [],
      corrige: [[{ text: "Repoblika I : " }, { text: "1958-1972, Philibert Tsiranana", cle: true }, { text: " (2 isa) ; Repoblika II : " }, { text: "1975-1991, Didier Ratsiraka", cle: true }, { text: " (2 isa)." }]],
    },
    {
      points: 3,
      consigne: "Inona no atao hoe tetezamita ? Omeo ohatra iray amin'ny tetezamita teto Madagasikara.",
      items: [],
      corrige: [[{ text: "Vanim-potoana " }, { text: "fifandimbiasam-pahefana vonjimaika eo anelanelan'ny rafitra roa", cle: true }, { text: " (2 isa). Ohatra : " }, { text: "1972-1975, 1991-1993, 2009-2014 na 2025-...", cle: true }, { text: " (1 isa)." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso, hazavao : « Niova isaky ny Repoblika ny sainam-pirenena malagasy. »",
      items: [],
      corrige: [[{ text: "Diso", cle: true }, { text: " (1 isa) : " }, { text: "tsy niova mihitsy ny faneva (fotsy, mena, maitso) sy ny hiram-pirenena", cle: true }, { text: " ; ny anarana sy ny teny filamatra no niova (2 isa)." }]],
    },
  ],
};

const S8 = {
  numero: 8, total: 27, lohahevitra: LH,
  titre: "Ny Repoblika voalohany (1958-1972)",
  tanjona: "mitantara ny niorenan'ny Repoblika I, ny mombamomba azy ary ny anton'ny fahataperany",
  fanovozanKevitra: DOC + " (LFK 2-f, 2-g)",
  fitaovana: "Frizy, sary, lahatsoratra, solaitrabe",
  image: "images/img_seansa08.png",
  imageLegende: "Ny fankalazana ny fahaleovantena, 26 jona 1960",
  famerenana: {
    qa: [
      { q: "Firy ny Repoblika nifandimby teto Madagasikara ?", ra: "Efatra." },
      { q: "Iza no filohan'ny Repoblika voalohany ?", ra: "Philibert Tsiranana." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Isaky ny 26 jona dia mamboly hazo, mandeha matso ary mandray arendrina isika. Inona no tsingerintaona ankalazaina amin'izany ? »",
      "V.A. : Ny nahazoan'i Madagasikara ny fahaleovantenany tamin'ny 26 jona 1960, tamin'ny andron'ny Repoblika I.",
    ],
    mpianatra: "Mamaly sy mitantara ny fankalazana fantany.",
    technique: "Resadresaka", support: "Sary fety 26 jona",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny Repoblika voalohany : ny niorenany, ny mombamomba azy ary ny anton'ny fahataperany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny tahirin-kevitra momba ny Repoblika I ny mpampianatra (anarany, tarigetra, faneva, filoha, daty lehibe). Asaina mamaky sy manamarika ny tsipiriany ny mpianatra.",
    mpianatra: "Mamaky ny tahirin-kevitra ary manamarika ny daty sy anarana lehibe.",
    technique: "Famakiana tahirin-kevitra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Oviana no nambara ny Repoblika Malagasy ?", ra: "Ny 14 oktobra 1958." },
      { q: "Oviana no tena nahazoana ny fahaleovantena ?", ra: "Ny 26 jona 1960." },
      { q: "Nahoana no nolazaina hoe « saritsarim-pahaleovantena » ny vanim-potoana ?", ra: "Satria mbola niankina mafy tamin'i Frantsa ny politika sy ny toekarena." },
      { q: "Inona no porofon'izany fiankinan-doha izany ?", ra: "70 %-n'ny entana nafarana avy tany Frantsa ; 58 %-n'ny vokatra naondrana nankany Frantsa." },
      { q: "Inona no niafaran'ny Repoblika I ?", ra: "Ny hetsi-bahoaka tamin'ny mey 1972 : nanolotra ny fahefana tamin'ny Jeneraly Ramanantsoa i Tsiranana." },
    ],
    technique: "Fanontaniana mitarika", support: "Tahirin-kevitra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Repoblika I dia vanim-potoana nandraisan'ny Malagasy ny fitantanana indray, saingy mbola niankina tamin'i Frantsa, ka niteraka ny rotaka 1972.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo ara-potoana : rotaka 1972 ; fahaleovantena ; fanambarana ny Repoblika Malagasy.",
      items: [],
      corrige: [[{ text: "Fanambarana ny Repoblika (14 okt. 1958) - fahaleovantena (26 jona 1960) - rotaka (mey 1972)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao ny anton'ny fahataperan'ny Repoblika voalohany.",
      items: [],
      corrige: [[{ text: "Ny " }, { text: "fiankinan-doha tamin'i Frantsa sy ny tsy fahafaham-pon'ny vahoaka", cle: true }, { text: " no niteraka ny " }, { text: "fitokonan'ny mpianatra sy ny hetsi-bahoaka tamin'ny mey 1972", cle: true }, { text: ", ka nanolotra ny fahefana i Tsiranana." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Repoblika Malagasy", "Tsiranana", "fahaleovantena", "26 jona 1960", "fiankinan-doha", "rotaka 1972"],
    sections: [
      {
        titre: "1. Ny mombamomba ny Repoblika I",
        paras: [],
        puces: [
          "Anarany : REPOBLIKA MALAGASY ;",
          "Tarigetra : Tanindrazana-Fahafahana-Fandrosoana ;",
          "Faneva : saina miloko fotsy, mena, maitso ;",
          "Hiram-pirenena : « Ry tanindrazanay malala ô ! » ;",
          "Filoha : PHILIBERT TSIRANANA (1959-1972), filoham-pirenena malagasy voalohany.",
        ],
      },
      {
        titre: "2. Ny niorenany sy ny fahaleovantena",
        paras: [
          "Ny 14 OKTOBRA 1958 no nambara ny Repoblika Malagasy, tao anatin'ny Fiombonambe frantsay. Ny 26 JONA 1960 no nahazoan'i Madagasikara ny fahaleovantenany : nandray ny fitantanana ny fireneny indray ny Malagasy, ka nitovy tamin'ireo firenena rehetra eran-tany i Madagasikara.",
          "« Saritsarim-pahaleovantena » anefa no nilazana io vanim-potoana io, satria ny sehatra rehetra dia mbola nakan'ny mpitondra fankatoavana tamin'i Frantsa : ny 27 jona 1960 dia natao sonia ny fifanaraham-piaraha-miasa tamin'i Frantsa ; ny toekarena dia mbola teo am-pelatanan'ny Frantsay (70 %-n'ny entana nafarana avy tany Frantsa, 58 %-n'ny vokatra naondrana nankany Frantsa).",
        ],
      },
      {
        titre: "3. Ny anton'ny fahataperany",
        paras: ["Krizy nifanesy no nahatonga ny fiafaran'ny Repoblika I :"],
        puces: [
          "aprily 1971 : fitroaran'ny tantsaha tany atsimon'i Madagasikara (hetsika MONIMA) ;",
          "jona 1971 : fikasana fanonganam-panjakana ;",
          "mey-jona 1972 : fitokonan'ny mpianatra lasa hetsi-bahoaka (« rotaka 72 ») ;",
          "18 MEY 1972 : nanome fahefana feno ny Jeneraly Gabriel Ramanantsoa i Tsiranana — nifarana ny Repoblika I.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana ny vahoaka no tsy afa-po tamin'ny Repoblika I nefa efa « mahaleo tena » ny firenena ? Vahaolana : satria ny fahaleovantena dia ara-panjakana fotsiny : ny toekarena, ny fampianarana ary ny tafika dia mbola nofehezin'ny Frantsay. Ny fitakiana « fanagasiana » ny fampianarana no anisan'ny nandrehitra ny hetsika 1972.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny hiram-pirenena « Ry tanindrazanay malala ô ! » dia noforonin'ny mpitandrina Rahajason (tononkira) sy Norbert Raharisoa (feony) tamin'ny 1958 — Norbert Raharisoa dia mpampianatra mozika tao Antananarivo !",
      "Tamin'ny fetin'ny fahaleovantena voalohany, 26 jona 1960, dia tao Mahamasina no natao ny lanonana lehibe : nasandratra tamin'ny fomba ofisialy ny sainam-pirenena ary nihira ny vahoaka an'arivony.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny 70 %-n'ny vokatra nafaran'i Madagasikara avy any ivelany dia avy any Frantsa avokoa, ary 58 %-n'ny vokatra naondrana kosa no nalefa tany Frantsa. » (Loharano : FRP Tantara T6)",
      "1. Inona no asehon'ireo tarehimarika ireo momba ny toekarena tamin'ny Repoblika I ?",
      "2. Nahoana izany no nampitombo ny tsy fahafaham-pon'ny vahoaka ?",
      "3. Inona no fitakiana lehibe nataon'ny mpianatra tamin'ny 1972 ?",
    ],
  },
  rakibolana: [
    { mg: "Fahaleovantena", fr: "Indépendance" },
    { mg: "Fiankinan-doha", fr: "Dépendance" },
    { mg: "Fanagasiana", fr: "Malgachisation" },
    { mg: "Hetsi-bahoaka", fr: "Mouvement populaire" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : ny Repoblika Malagasy dia nambara ny ……… ; ny fahaleovantena dia azo ny ……… ; ny filoha voalohany dia ……… .",
      items: [],
      corrige: [[{ text: "Nambara ny " }, { text: "14 oktobra 1958", cle: true }, { text: " ; fahaleovantena ny " }, { text: "26 jona 1960", cle: true }, { text: " ; filoha : " }, { text: "Philibert Tsiranana", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 4,
      consigne: "Hazavao ny hoe « saritsarim-pahaleovantena » ary omeo porofo roa.",
      items: [],
      corrige: [[{ text: "Fahaleovantena " }, { text: "ara-panjakana fotsiny fa mbola niankina tamin'i Frantsa ny sehatra rehetra", cle: true }, { text: " (2 isa). Porofo : " }, { text: "70 % ny fanafarana avy tany Frantsa ; ny fifanaraham-piaraha-miasa 27 jona 1960 ; ny toekarena teo am-pelatanan'ny Frantsay", cle: true }, { text: " (2 isa)." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ireo krizy telo nialoha ny fiafaran'ny Repoblika I. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1. " }, { text: "Fitroaran'ny tantsaha tany atsimo (aprily 1971)", cle: true }, { text: " ; 2. " }, { text: "fikasana fanonganam-panjakana (jona 1971)", cle: true }, { text: " ; 3. " }, { text: "fitokonan'ny mpianatra lasa hetsi-bahoaka (mey-jona 1972)", cle: true }, { text: "." }]],
    },
  ],
};

const S9 = {
  numero: 9, total: 27, lohahevitra: LH,
  titre: "Ny tetezamita 1972-1975 : ny fitondrana miaramila",
  tanjona: "mitantara ny fifandimbiasan'ny mpitondra nandritra ny tetezamita 1972-1975",
  fanovozanKevitra: DOC + " (LFK 2-h, 2-i)",
  fitaovana: "Frizy 1972-1975, lahatsoratra, solaitrabe",
  image: "images/img_seansa09.png",
  imageLegende: "Frizy : ny tetezamita 1972-1975",
  famerenana: {
    qa: [
      { q: "Inona no nampitsahatra ny Repoblika I ?", ra: "Ny hetsi-bahoaka tamin'ny mey 1972." },
      { q: "Iza no nomen'i Tsiranana fahefana feno ?", ra: "Ny Jeneraly Gabriel Ramanantsoa, ny 18 mey 1972." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampahatsiahy ny fehezanteny malaza ny mpampianatra : « Tsy hiamboho adidy aho, mon Général ! » — Iza no nilaza izany ary tamin'ny fotoana inona ?",
      "V.A. : Ny Kolonely Richard Ratsimandrava, raha nandray ny fahefana izy tamin'ny febroary 1975.",
    ],
    mpianatra: "Mihaino sy mamaly araka izay fantany.",
    technique: "Resadresaka", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tetezamita 1972-1975 : ny fitondrana miaramila sy ny fifandimbiasan'ny mpitondra telo.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frizy 1972-1975 ny mpampianatra : Ramanantsoa (1972-1975), Ratsimandrava (5-11 febroary 1975), Andriamahazo (1975), Ratsiraka (15 jona 1975). Hazavaina ny hoe direktoara miaramila.",
    mpianatra: "Mandinika ny frizy sy ny filaharan'ny mpitondra.",
    technique: "Fandinihana frizy", support: "Frizy 1972-1975",
  },
  famakafakana: {
    qa: [
      { q: "Iza no nitondra voalohany tamin'ny tetezamita ?", ra: "Ny Jeneraly Gabriel Ramanantsoa (11 oktobra 1972 - 5 febroary 1975)." },
      { q: "Nahoana i Ramanantsoa no nametra-pialana ?", ra: "Noho ny tsy fisian'ny firaisankina teo anivon'ny fitondrany." },
      { q: "Inona no nanjo an'i Ratsimandrava ?", ra: "Maty voatifitra izy ny 11 febroary 1975, herinandro monja taorian'ny nandraisany ny fahefana." },
      { q: "Iza no nitondra taorian'izay ?", ra: "Ny Jeneraly Gilles Andriamahazo, tamin'ny alalan'ny direktoara miaramila." },
      { q: "Ahoana no niafaran'ny tetezamita ?", ra: "Ny 15 jona 1975 : voatendry ho filoham-panjakana i Didier Ratsiraka." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : mpitondra miaramila telo no nifandimby (Ramanantsoa, Ratsimandrava, Andriamahazo) talohan'ny nanendrena an'i Ratsiraka tamin'ny 15 jona 1975.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany ireto mpitondra ireto : Andriamahazo, Ratsiraka, Ramanantsoa, Ratsimandrava.",
      items: [],
      corrige: [[{ text: "Ramanantsoa - Ratsimandrava - Andriamahazo - Ratsiraka", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Firy andro i Ratsimandrava no nitondra ? Inona no nanjo azy ?",
      items: [],
      corrige: [[{ text: "Enina andro monja (5-11 febroary 1975)", cle: true }, { text: " : " }, { text: "maty voatifitra izy ny 11 febroary 1975", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Ramanantsoa", "Ratsimandrava", "Andriamahazo", "direktoara miaramila", "tetezamita"],
    sections: [
      {
        titre: "1. Ny fitondran'ny Jeneraly Ramanantsoa (1972-1975)",
        paras: [
          "Taorian'ny rotaka 1972 dia ny JENERALY GABRIEL RAMANANTSOA no nitondra ny firenena (11 oktobra 1972 - 5 febroary 1975). Nankatoavin'ny fitsapan-kevi-bahoaka ny fitondrany. Nanomboka ny « fanagasiana » ny fampianarana izy ary nanalavitra an'i Frantsa (nivoaka ny faritry ny farantsa CFA).",
          "Noho ny tsy fisian'ny firaisankina teo anivon'ny fitondrany anefa dia nanolotra ny fahefana tamin'ny KOLONELY RICHARD RATSIMANDRAVA izy ny 5 febroary 1975.",
        ],
      },
      {
        titre: "2. Ratsimandrava sy ny direktoara miaramila (1975)",
        paras: [
          "Nandray ny fahefana tamin-kafanam-po i Ratsimandrava — mbola tsy afaka ao am-pon'ny Malagasy ilay fehezanteny malaza hoe : « Tsy hiamboho adidy aho, mon Général ! ». Nikasa hampiroborobo ny FOKONOLONA izy.",
          "ENINA ANDRO monja anefa dia maty voatifitra izy, ny 11 FEBROARY 1975. Nandray ny fitondrana ny JENERALY GILLES ANDRIAMAHAZO tamin'ny alalan'ny DIREKTOARA MIARAMILA (fitambaran'ny manamboninahitra) ary nametraka lalàna miaramila.",
        ],
      },
      {
        titre: "3. Ny fiafaran'ny tetezamita",
        paras: [
          "Ny 15 JONA 1975 dia ny kapiteny-sambo DIDIER RATSIRAKA, 39 taona, no nambara ho filoham-panjakana, lehiben'ny governemanta ary filohan'ny Filan-kevitra Ambonin'ny Revolisiona (CSR). Izay no namarana ny tetezamita 1972-1975 ary nanokatra ny lalana ho amin'ny Repoblika II.",
        ],
      },
    ],
    fantatraoVe: [
      "Mbola tsy voavaha mazava hatramin'izao ny raharaha famonoana an'i Ratsimandrava : na dia nisy aza ny fitsarana lehibe tamin'ny 1975 (ny « procès du siècle »), dia tsy fantatra marina hatramin'izao izay tena nandidy ny famonoana azy.",
      "Tamin'ny andron'i Ramanantsoa no nivoahan'i Madagasikara ny faritry ny farantsa CFA sy nanombohan'ny fanagasiana ny fampianarana : ny teny malagasy no natao fototry ny fampianarana tany amin'ny sekoly.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ramanantsoa, fanta-daza amin'ny tsy fisian'ny firaisankina teo anivon'ny fitondram-panjakana, dia nanolotra ny fahefana ho an'ny kolonely Richard Ratsimandrava. Maty nisy namono i Ratsimandrava tamin'ny 11 febroary 1975. Ny jeneraly Gilles Andriamahazo no nitondra ny fitondrana (direktoara militera). » (Loharano : FRP Tantara T6)",
      "1. Antony inona no nampietry an'i Ramanantsoa ?",
      "2. Hafiriana i Ratsimandrava no teo amin'ny fitondrana ?",
      "3. Inona no atao hoe direktoara miaramila ?",
    ],
  },
  rakibolana: [
    { mg: "Direktoara miaramila", fr: "Directoire militaire" },
    { mg: "Lalàna miaramila", fr: "Loi martiale" },
    { mg: "Fokonolona", fr: "Communauté villageoise" },
    { mg: "Fanonganam-panjakana", fr: "Coup d'État" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny fafana : mpitondra / vanim-potoana — Ramanantsoa (…) ; Ratsimandrava (…) ; Andriamahazo (…) ; Ratsiraka voatendry ny (…).",
      items: [],
      corrige: [[{ text: "Ramanantsoa : " }, { text: "11 okt. 1972 - 5 feb. 1975", cle: true }, { text: " ; Ratsimandrava : " }, { text: "5-11 feb. 1975", cle: true }, { text: " ; Andriamahazo : " }, { text: "feb.-jona 1975", cle: true }, { text: " ; Ratsiraka : " }, { text: "15 jona 1975", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 3,
      consigne: "Inona no dikan'ilay hoe « Tsy hiamboho adidy aho, mon Général ! » ary iza no nilaza azy ?",
      items: [],
      corrige: [[{ text: "Nolazain'i " }, { text: "Richard Ratsimandrava", cle: true }, { text: " (1 isa) : nanaiky " }, { text: "handray ny andraikitra sy tsy handositra ny adidy na dia sarotra aza ny toe-draharaha", cle: true }, { text: " (2 isa)." }]],
    },
    {
      points: 3,
      consigne: "Nahoana no azo lazaina hoe « fitondrana miaramila » ny tetezamita 1972-1975 ?",
      items: [],
      corrige: [[{ text: "Satria " }, { text: "manamboninahitra (jeneraly sy kolonely) avokoa no nifandimby nitondra", cle: true }, { text: " (2 isa) ary " }, { text: "nisy ny direktoara miaramila sy ny lalàna miaramila", cle: true }, { text: " (1 isa)." }]],
    },
  ],
};

const S10 = {
  numero: 10, total: 27, lohahevitra: LH,
  titre: "Ny Repoblika faharoa (1975-1991)",
  tanjona: "mitantara ny Repoblika II : ny Boky Mena, ny sosialisma ary ny hetsi-bahoaka 1991",
  fanovozanKevitra: DOC + " (LFK 2-j, 2-k)",
  fitaovana: "Frizy 1975-1991, lahatsoratra, solaitrabe",
  image: "images/img_seansa10.png",
  imageLegende: "Frizy : ny Repoblika faharoa (1975-1991)",
  famerenana: {
    qa: [
      { q: "Iza no voatendry ho filoham-panjakana ny 15 jona 1975 ?", ra: "Didier Ratsiraka." },
      { q: "Firy taona izy tamin'izay ?", ra: "39 taona." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Efa renareo ve ny anarana hoe JIRAMA sy SOLIMA ? Fantatrareo ve fa vokatry ny politikan'ny Repoblika II ireo anarana ireo ? »",
      "V.A. : Ireo dia orinasam-panjakana natsangana tamin'ny andron'ny sosialisma malagasy.",
    ],
    mpianatra: "Mamaly sy maneho ny fahalalany.",
    technique: "Resadresaka", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny Repoblika faharoa (1975-1991) : ny Boky Mena, ny fitondrana sosialista ary ny niafarany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny tahirin-kevitra momba ny Repoblika II ny mpampianatra : ny fitsapan-kevi-bahoaka 30 desambra 1975, ny anarana « Repoblika Demokratika Malagasy », ny Boky Mena, ny orinasam-panjakana.",
    mpianatra: "Mamaky ny tahirin-kevitra ary manamarika ny tsipiriany.",
    technique: "Famakiana tahirin-kevitra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Oviana no natao ny fitsapan-kevi-bahoaka nanorina ny Repoblika II ?", ra: "Ny 30 desambra 1975." },
      { q: "Inona no anaran'ny Repoblika II ?", ra: "Repoblika Demokratika Malagasy." },
      { q: "Inona no atao hoe Boky Mena ?", ra: "Fandaharan'asan'i Ratsiraka nirakitra ny revolisiona sosialista malagasy." },
      { q: "Omeo ohatra amin'ny fanjakan'ny fanjakana ny toekarena.", ra: "SOLIMA (solika), JIRAMA (rano sy jiro), SINPA (vary) — orinasam-panjakana avokoa." },
      { q: "Inona no nampitsahatra ny Repoblika II ?", ra: "Ny hetsi-bahoaka 1989-1991 nitaky demokrasia, niafara tamin'ny fifanarahana Panorama (31 oktobra 1991)." },
    ],
    technique: "Fanontaniana mitarika", support: "Tahirin-kevitra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : Repoblika II = fitondrana sosialista nifototra tamin'ny Boky Mena, naharitra 16 taona, rava noho ny hetsi-bahoaka 1991.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : ny Repoblika II dia natsangana tamin'ny fitsapan-kevi-bahoaka ny ……… ; ny anarany dia ……… ; ny fandaharan'asany dia ny ……… .",
      items: [],
      corrige: [[{ text: "Ny " }, { text: "30 desambra 1975", cle: true }, { text: " ; " }, { text: "Repoblika Demokratika Malagasy", cle: true }, { text: " ; ny " }, { text: "Boky Mena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Hazavao amin'ny fehezanteny roa ny niafaran'ny Repoblika II.",
      items: [],
      corrige: [[{ text: "Nisy ny " }, { text: "hetsi-bahoaka 1989-1991 nitaky demokrasia sy fanovana", cle: true }, { text: " ; niafara tamin'ny " }, { text: "fifanarahana Panorama (31 oktobra 1991) izay nanokatra ny tetezamita", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Repoblika Demokratika Malagasy", "Ratsiraka", "Boky Mena", "sosialisma", "orinasam-panjakana", "hetsi-bahoaka 1991"],
    sections: [
      {
        titre: "1. Ny mombamomba ny Repoblika II",
        paras: [],
        puces: [
          "Anarany : REPOBLIKA DEMOKRATIKA MALAGASY (natsangana tamin'ny fitsapan-kevi-bahoaka ny 30 DESAMBRA 1975) ;",
          "Tarigetra : Tanindrazana-Tolom-piavotana-Fahafahana ;",
          "Filoha : DIDIER RATSIRAKA — nitondra 16 taona (1975-1991), lava indrindra teo amin'ny tantaran'ny Repoblika ;",
          "Fandaharan'asa : ny BOKY MENA, nirakitra ny revolisiona sosialista malagasy.",
        ],
      },
      {
        titre: "2. Ny politika sosialista",
        paras: ["Nifototra tamin'ny sosialisma ny fitondrana : ny fanjakana no nitantana ny toekarena :"],
        puces: [
          "SOLIMA : ny fanafarana sy ny fizarana solika ;",
          "SEM sy EEM lasa JIRAMA : ny rano sy ny jiro ;",
          "SINPA : ny fanangonana sy ny varotra ny vary ;",
          "KOPAREMA sy ny FKI : koperativa sosialista ;",
          "Fametrahana ny vondrom-bahoaka itsinjaram-pahefana (fokontany).",
        ],
      },
      {
        titre: "3. Ny niafaran'ny Repoblika II",
        paras: [
          "Nihasarotra ny fiainam-bahoaka : tsy nahomby ny ankamaroan'ny orinasam-panjakana, nihanjahanja ny fahantrana. Nanomboka tamin'ny 1989 dia nihanaka ny HETSI-BAHOAKA nitaky demokrasia sy fanovana, notarihin'ny « Hery Velona ». Tamin'ny 10 aogositra 1991 dia nisy ny dia-be nankany Iavoloha.",
          "Rehefa nitokona am-bolana maro ny vahoaka dia nifampiraharaha ny roa tonta : ny FIFANARAHANA PANORAMA (31 OKTOBRA 1991) no namarana ny Repoblika II ary nanokatra ny tetezamita 1991-1993.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny « Boky Mena » (Livre Rouge) dia nalain'i Ratsiraka tahaka tamin'ny « Petit Livre Rouge » an'i Mao Zedong any Sina : boky kely mena nirakitra ny vina sosialista — nozaraina tamin'ny sekoly sy ny biraom-panjakana rehetra izy tamin'izany !",
      "Tamin'ny andron'ny Repoblika II dia natao « fanagasiana » tanteraka ny fampianarana : ny taranaka nianatra tamin'ny teny malagasy tamin'ny 1978-1991 dia antsoina indraindray hoe « taranaky ny fanagasiana ».",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Niezaka ny hitondra hevi-baovao sy fijery vaovao tamin'ny alalan'ny fandaharan'asa iray dia ny Boky Mena ity manamboninahitra tantsambo ity, ary naharesy lahatra ny maro tamin'ny Malagasy izy tamin'izany. Noho ireo toe-javatra maro nitranga ka niteraka fahoriana sy fahasahiranana lalina teo amin'ny fiainam-pirenena, dia voatery ny vahoaka haneho fa tsy afaka ny hiharitra intsony. » (Loharano : FRP Tantara T6)",
      "1. Iza ilay « manamboninahitra tantsambo » resahina eto ?",
      "2. Inona no anaran'ny fandaharan'asany ?",
      "3. Nahoana ny vahoaka no nitokona tamin'ny farany ?",
    ],
  },
  rakibolana: [
    { mg: "Sosialisma", fr: "Socialisme" },
    { mg: "Orinasam-panjakana", fr: "Entreprise d'État" },
    { mg: "Fitsapan-kevi-bahoaka", fr: "Référendum" },
    { mg: "Revolisiona", fr: "Révolution" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : ny filohan'ny Repoblika II dia ……… ; naharitra ……… taona ny fitondrany ; ny fandaharan'asany dia ny ……… .",
      items: [],
      corrige: [[{ text: "Didier Ratsiraka", cle: true }, { text: " ; " }, { text: "16 taona", cle: true }, { text: " ; ny " }, { text: "Boky Mena", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 4,
      consigne: "Omeo ohatra roa amin'ny orinasam-panjakana tamin'ny Repoblika II ary lazao ny sehatra nosahaniny. (2 isa avy)",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "SOLIMA (solika)", cle: true }, { text: " ; " }, { text: "JIRAMA (rano sy jiro)", cle: true }, { text: " ; " }, { text: "SINPA (vary)", cle: true }, { text: " — roa amin'ireo." }]],
    },
    {
      points: 3,
      consigne: "Alaharo ara-potoana : fifanarahana Panorama ; fitsapan-kevi-bahoaka nanorina ny RDM ; hetsi-bahoaka nitaky demokrasia.",
      items: [],
      corrige: [[{ text: "Fitsapan-kevi-bahoaka (30 des. 1975)", cle: true }, { text: " - " }, { text: "hetsi-bahoaka (1989-1991)", cle: true }, { text: " - " }, { text: "fifanarahana Panorama (31 okt. 1991)", cle: true }, { text: ". (1 isa avy)" }]],
    },
  ],
};

const S11 = {
  numero: 11, total: 27, lohahevitra: LH,
  titre: "Ny tetezamita 1991-1993 sy ny Repoblika fahatelo (1993-2010)",
  tanjona: "mitantara ny tetezamita 1991-1993 sy ny Repoblika III ary ireo filoha nifandimby",
  fanovozanKevitra: DOC + " (LFK 2-l, 2-m, 2-n)",
  fitaovana: "Frizy 1991-2010, lahatsoratra, solaitrabe",
  image: "images/img_seansa11.png",
  imageLegende: "Frizy : tetezamita 1991-1993 sy Repoblika III (1993-2010)",
  famerenana: {
    qa: [
      { q: "Inona no fifanarahana namarana ny Repoblika II ?", ra: "Ny fifanarahana Panorama, 31 oktobra 1991." },
      { q: "Firy taona i Ratsiraka no nitondra tamin'ny Repoblika II ?", ra: "16 taona (1975-1991)." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Filoha firy no nifandimby tamin'ny Repoblika III ? Nahoana no maro toy izany ? »",
      "V.A. : Telo (Zafy, Ratsiraka, Ravalomanana) — vokatry ny krizy politika niverimberina.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tetezamita 1991-1993 sy ny Repoblika fahatelo (1993-2010).",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny tahirin-kevitra ny mpampianatra : ny rafitry ny tetezamita (Razanamasy, HAE Zafy, CRES), ny fifidianana 1992-1993, ireo filoha telo nifandimby, ny krizy 2002.",
    mpianatra: "Mamaky ny tahirin-kevitra ary manamarika ny tsipiriany.",
    technique: "Famakiana tahirin-kevitra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona avy ireo rafitra napetraky ny tetezamita 1991-1993 ?", ra: "Ny governemanta Razanamasy, ny Fahefana Avon'ny Fanjakana (HAE) notarihin'i Zafy, ny CRES." },
      { q: "Iza no lany filoha tamin'ny 1993 ?", ra: "Zafy Albert (66,76 %), nandray ny fahefana ny 27 martsa 1993." },
      { q: "Inona no nanjo an'i Zafy tamin'ny 1996 ?", ra: "Nongana (empêchement) tamin'ny alalan'ny Antenimieram-pirenena ; Ratsirahonana no nitondra vonjimaika." },
      { q: "Iza no lany tamin'ny fifidianana 1996 ?", ra: "Didier Ratsiraka, niverina teo amin'ny fitondrana (1997-2002)." },
      { q: "Inona no nitranga tamin'ny 2002 ?", ra: "Krizy taorian'ny fifidianana : nifanandrina i Ratsiraka sy Ravalomanana ; Ravalomanana no nitondra (2002-2009)." },
    ],
    technique: "Fanontaniana mitarika", support: "Tahirin-kevitra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Repoblika III dia nampiavaka ny demokrasia sy ny fanalalahana, saingy nisy krizy niverimberina (1996, 2002) ary nifarana tamin'ny krizy 2009.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo ara-potoana ireto filoha ireto : Ravalomanana, Zafy, Ratsiraka (fiverenany).",
      items: [],
      corrige: [[{ text: "Zafy (1993-1996) - Ratsiraka (1997-2002) - Ravalomanana (2002-2009)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa mitokana", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao ny rafitra telo napetraky ny fifanarahana tamin'ny tetezamita 1991-1993.",
      items: [],
      corrige: [[{ text: "Ny " }, { text: "governemanta tetezamita notarihin'i Razanamasy", cle: true }, { text: " ; ny " }, { text: "Fahefana Avon'ny Fanjakana (HAE) notarihin'i Zafy", cle: true }, { text: " ; ny " }, { text: "CRES (komitin'ny fanarenana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["tetezamita 1991-1993", "Zafy Albert", "Ratsirahonana", "Ravalomanana", "krizy 2002", "demokrasia"],
    sections: [
      {
        titre: "1. Ny tetezamita 1991-1993",
        paras: [
          "Faratampon'ny hetsi-bahoaka nanomboka tamin'ny 1989 io vanim-potoana io : nitaky « Governemanta Vonjimaika Tetezamita mankany amin'ny Demokrasia » (GVTD) ny mpanohitra. Ny fifanarahana dia nametraka rafitra maro :",
        ],
        puces: [
          "ny fitondrana tetezamita notarihin'i GUY WILLY RAZANAMASY, praiminisitra nanana fahefana feno ;",
          "ny FAHEFANA AVON'NY FANJAKANA (HAE) notarihin'ny Profesora ZAFY ALBERT ;",
          "ny CRES (komitin'ny fanarenana ara-toekarena sy ara-tsosialy) ;",
          "i Didier Ratsiraka dia nijanona ho lehiben'ny fanjakana mandra-pahavitan'ny fifidianana.",
        ],
      },
      {
        titre: "2. Ny Repoblika III, tapany voalohany (1993-2002)",
        paras: [
          "Lany tamin'ny fifidianana i ZAFY ALBERT (66,76 %) ka nandray ny fahefana ny 27 MARTSA 1993 : izay no fiandohan'ny Repoblika III (« Repoblikan'i Madagasikara », tarigetra : Tanindrazana-Fahafahana-Fahamarinana).",
          "Nikorontana anefa ny fitondrana : governemanta valo sy praiminisitra maro no nifanesy tao anatin'ny telo taona ! Ny 4 septambra 1996 dia NONGANA (empêchement) i Zafy ; NORBERT LALA RATSIRAHONANA no nitondra vonjimaika. Lany tamin'ny fifidianana 1996 i DIDIER RATSIRAKA ka niverina (1997-2002).",
        ],
      },
      {
        titre: "3. Ny Repoblika III, tapany faharoa (2002-2009)",
        paras: [
          "Taorian'ny fifidianana desambra 2001 dia nisy KRIZY LEHIBE tamin'ny 2002 : samy nilaza ho nandresy i Ratsiraka sy MARC RAVALOMANANA, nizarazara ny firenena nandritra ny volana maro. Ravalomanana no nitondra (22 febroary 2002 - 17 martsa 2009).",
          "Nampiavaka ny Repoblika III : ny fivoizana ny DEMOKRASIA sy ny fahalalahana, ny FANALALAHANA ara-toekarena (fanomezana vahana ny sehatra tsy miankina), ary ny fizorana mankany amin'ny fanatontoloana.",
        ],
      },
    ],
    fantatraoVe: [
      "Tao anatin'ny telo taona nitondran'i Zafy Albert dia governemanta valo sy praiminisitra maro no nifanesy — firaketana tsy mbola nisy toa azy teo amin'ny tantaram-pirenena !",
      "Ny krizy 2002 dia naharitra fito volana teo ho eo : nisy ny « fanapahana tetezana » sy ny sakana teny amin'ny lalam-pirenena, ka voafaritra roa ny firenena — Antananarivo sy Toamasina samy nanana ny « governemantany ».",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« 25 novambra 1992 : fihodinana voalohan'ny fifidianana filohan'ny Repoblika, narahin'ny fihodinana faharoa tamin'ny 10 febroary 1993. Voafidy ho filoha i Zafy Albert (66,76 %) ary nandray fahefana tamin'ny 27 marsa. » (Loharano : FRP Tantara T6)",
      "1. Fihodinana firy no nilaina tamin'io fifidianana io ?",
      "2. Firy isan-jato no azon'i Zafy Albert ?",
      "3. Nahoana ny fifidianana no dingana lehibe amin'ny demokrasia ?",
    ],
  },
  rakibolana: [
    { mg: "Fanonganana / fanalana (empêchement)", fr: "Empêchement, destitution" },
    { mg: "Fanalalahana", fr: "Libéralisation" },
    { mg: "Fihodinana", fr: "Tour de scrutin" },
    { mg: "Mpanohitra", fr: "Opposition" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : ny Repoblika III dia nanomboka ny ……… ; ny filoha voalohany dia ……… ; nongana izy tamin'ny ……… .",
      items: [],
      corrige: [[{ text: "Ny " }, { text: "27 martsa 1993", cle: true }, { text: " ; " }, { text: "Zafy Albert", cle: true }, { text: " ; tamin'ny " }, { text: "septambra 1996", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 4,
      consigne: "Tanisao araka ny filaharany ireo nitondra ny firenena teo anelanelan'ny 1993 sy 2009. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Zafy Albert (1993-1996)", cle: true }, { text: " ; " }, { text: "Ratsirahonana (1996-1997, vonjimaika)", cle: true }, { text: " ; " }, { text: "Ratsiraka (1997-2002)", cle: true }, { text: " ; " }, { text: "Ravalomanana (2002-2009)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Inona no nampiavaka ny politikan'ny Repoblika III raha oharina amin'ny Repoblika II ?",
      items: [],
      corrige: [[{ text: "Ny Repoblika II : " }, { text: "sosialisma sy fanjakan'ny fanjakana ny toekarena", cle: true }, { text: " (1,5 isa) ; ny Repoblika III : " }, { text: "demokrasia, fanalalahana ary fanomezana vahana ny sehatra tsy miankina", cle: true }, { text: " (1,5 isa)." }]],
    },
  ],
};

module.exports = { seances: [S7, S8, S9, S10, S11] };
