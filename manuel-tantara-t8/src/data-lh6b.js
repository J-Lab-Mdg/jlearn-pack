// data-lh6b.js — Lohahevitra VI (tohiny) : S26-S27 — T8
const LH = "Lohahevitra VI — Ny fanjanahantany teto Madagasikara sy ny tolom-panafahana";
const DOC = "PE T8 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S26 = {
  numero: 26, total: 32, lohahevitra: LH,
  titre: "Ireo hetsika nasionalista malagasy",
  tanjona: "mitanisa sy mampitaha ireo hetsika nasionalista malagasy nanohitra ny fanjanahantany (1895-1947)",
  fanovozanKevitra: DOC,
  fitaovana: "Frizy, lahatsoratra, solaitrabe",
  image: "images/img_s26.png",
  imageLegende: "Ny vahoaka malagasy nitolona ho amin'ny fahafahana",
  famerenana: {
    qa: [
      { q: "Tanisao endrika fanararaotana telo nataon'ny mpanjanaka.", ra: "Code de l'indigénat ; hetra sy prestations ; économie de traite..." },
      { q: "Inona ny SMOTIG ?", ra: "Rafitra nampiasana ny tanora tsy voakarama hanao asa vaventy." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Nanaiky fotsiny ve ny Malagasy tamin'ny fanjanahantany sy ny fanararaotana ? »",
      "V.A. : Tsia — nitolona hatrany izy : an'ady, an-tsoratra, ara-politika. Ireo hetsika ireo no hodinihintsika.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo hetsika nasionalista malagasy : ny Menalamba, ny Sadiavahy, ny VVS, ny hetsik'i Ralaimongo ary ny tolona 1947.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho frizy 1895-1947 ny mpampianatra ary mitarika ny fandaminana ireo hetsika araka ny fotoana sy ny endriny (fikomiana an'ady / fikambanana an-tsokosoko / tolona ara-politika).",
    mpianatra: "Mamaky ny frizy sy manasokajy ny hetsika.",
    technique: "Famakiana frizy", support: "Frizy",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny Menalamba ?", ra: "Fikomiana an'ady voalohany (1895-1898) : nanohitra ny fanjanahana sy ny fivavahana vahiny ny mpikomy tany ambanivohitr'Imerina — nofoanan'ny tafika frantsay tamin-kerisetra." },
      { q: "Inona ny Sadiavahy ?", ra: "Fikomiana tany atsimo sy andrefana (1904-1905, ary 1914-1917) : nanohitra ny hetra sy ny fakana ny tany." },
      { q: "Inona ny VVS ?", ra: "Vy Vato Sakelika (1913-1915) : fikambanana an-tsokosoko naorin'ny mpianatra sy manam-pahaizana tanora (dokotera, mpitondra fivavahana) hikolokolo ny firenena ; nosamborina sy nosaziana mafy ny mpikambana." },
      { q: "Iza i Ralaimongo ?", ra: "Mpitolona nasionalista (1919-1930) : nitaky ny zom-pirenena frantsay ho an'ny Malagasy aloha, dia ny fanafoanana ny code de l'indigénat sy ny fahafahana ; nampiasa gazety sy fivoriana izy — tolona an-tsoratra sy ara-politika." },
      { q: "Inona no nitranga tamin'ny 1947 ?", ra: "Tolona lehibe (29 martsa 1947) : nikomy ny vahoaka tany atsinanana indrindra ; ireo fikambanana JINA sy PANAMA no tao ambadika ; ny antoko MDRM no voampanga ; maro be no maty (hatramin'ny an'aliny) — hetsika lehibe indrindra nanohitra ny fanjanahana ; ny PADESM kosa antoko hafa tsy niray tamin'ny MDRM." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : nifandimby ny hetsika — Menalamba (1895-1898), Sadiavahy (1904-1905, 1914-1917), VVS (1913-1915), Ralaimongo (1919-1930), tolona 1947 (JINA, PANAMA, MDRM, PADESM) ; niova endrika ny tolona : avy amin'ny an'ady mankamin'ny an-tsoratra sy ara-politika.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. Menalamba / 2. VVS / 3. Ralaimongo / 4. tolona 1947 — a. fikambanana an-tsokosoko 1913 ; b. fikomiana 1895-1898 ; d. tolona lehibe 29 martsa ; e. gazety sy fitakiana zo 1919-1930.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-e", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao hetsika nasionalista telo sy ny fotoanany ary lazao ny fiovan'ny endriky ny tolona.",
      items: [],
      corrige: [[{ text: "Ohatra : Menalamba (1895-1898) ; VVS (1913-1915) ; tolona 1947", cle: true }, { text: " ; " }, { text: "niova avy amin'ny fikomiana an'ady ho tolona an-tsoratra sy ara-politika", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Menalamba", "Sadiavahy", "VVS", "Ralaimongo", "29 martsa 1947", "MDRM"],
    sections: [
      {
        titre: "1. Ireo fikomiana an'ady voalohany",
        paras: [],
        puces: [
          "NY MENALAMBA (1895-1898) : fikomiana voalohany taorian'ny fahalavoan'Antananarivo — nanohitra ny fanjanahana sy ny fivavahana vahiny ny mpikomy tany ambanivohitr'Imerina ; nofoanan'ny tafika frantsay tamin-kerisetra ;",
          "NY SADIAVAHY (1904-1905 ; 1914-1917) : fikomiana tany atsimo sy andrefana — nanohitra ny hetra sy ny fakana ny tany.",
        ],
      },
      {
        titre: "2. Ny tolona an-tsoratra sy ara-politika",
        paras: [],
        puces: [
          "NY VVS — VY VATO SAKELIKA (1913-1915) : fikambanana an-tsokosoko naorin'ny mpianatra sy ny manam-pahaizana tanora mba hikolokolo ny firenena ; nosamborina sy nosaziana mafy ny mpikambana ;",
          "RALAIMONGO (1919-1930) : nampiasa GAZETY sy fivoriana ; nitaky ny fanafoanana ny code de l'indigénat sy ny zo ho an'ny Malagasy ;",
          "NY TOLONA 1947 (29 MARTSA 1947) : fikomiana lehibe indrindra — tany atsinanana indrindra ; ny fikambanana an-tsokosoko JINA sy PANAMA no tao ambadika ; ny antoko MDRM no voampanga ka nosamborina ny mpitarika azy ; ny PADESM kosa antoko hafa tsy niray taminy ; MARO BE NY MATY (hatramin'ny an'aliny) — vavolombelon'ny fitiavan-tanindrazana izy io.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ampitahao ny endriky ny tolon'ny Menalamba sy ny an-dRalaimongo. Vahaolana : samy nanohitra ny fanjanahana izy roa ; ny Menalamba anefa dia FIKOMIANA AN'ADY (fiadiana, herisetra) tany ambanivohitra, fa ny an-dRalaimongo kosa TOLONA AN-TSORATRA SY ARA-POLITIKA (gazety, fitakiana ara-dalàna) tany an-tanàn-dehibe. Mampiseho izany fa niova ny paikadin'ny tolona araka ny fotoana sy ny fitaovana teo am-pelatanana.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tamin'ny alin'ny 29 martsa 1947 dia nikomy ny vahoaka tany amin'ny faritra atsinanana ; naharitra volana maro ny tolona ary an'aliny ny maty. » (Famintinana ny tolona 1947)",
      "1. Oviana no nipoaka ny tolona ary taiza indrindra ?",
      "2. Inona ireo fikambanana an-tsokosoko tao ambadiky ny tolona ?",
      "3. Nahoana ny 29 martsa no andro fahatsiarovana ho an'ny firenena mandraka androany ?",
    ],
  },
  rakibolana: [
    { mg: "Nasionalista", fr: "Nationaliste" },
    { mg: "Fikomiana", fr: "Insurrection / révolte" },
    { mg: "Fikambanana an-tsokosoko", fr: "Société secrète" },
    { mg: "Antoko politika", fr: "Parti politique" },
    { mg: "Fitiavan-tanindrazana", fr: "Patriotisme" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny frizy : 1895-1898 : … ; 1913-1915 : … ; 1919-1930 : … ; 29 martsa 1947 : … (1 isa avy)",
      items: [],
      corrige: [[{ text: "Menalamba", cle: true }, { text: " ; " }, { text: "VVS", cle: true }, { text: " ; " }, { text: "hetsik'i Ralaimongo", cle: true }, { text: " ; " }, { text: "fipoahan'ny tolona 1947", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny Sadiavahy dia fikomiana tany avaratra. b) Ny VVS dia naorin'ny mpianatra sy manam-pahaizana tanora. d) Ny MDRM no antoko voampanga tamin'ny 1947. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : tany atsimo sy andrefana", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao ny fiovan'ny endriky ny tolona nasionalista teo anelanelan'ny 1895 sy 1947.",
      items: [],
      corrige: [[{ text: "Tamin'ny voalohany dia fikomiana an'ady (Menalamba, Sadiavahy) ; avy eo tolona an-tsokosoko sy an-tsoratra (VVS, gazetin-dRalaimongo) ; farany dia niverina ho tolona lehibe an'ady (1947) rehefa tsy nihaino ny fitakiana ara-dalàna ny mpanjanaka", cle: true }, { text: "." }]],
    },
  ],
};

const S27 = {
  numero: 27, total: 32, lohahevitra: LH,
  titre: "Ny dia mankany amin'ny fahaleovantena",
  tanjona: "manazava ireo dingana nitondra an'i Madagasikara ho amin'ny fahaleovantena (1947-1960)",
  fanovozanKevitra: DOC,
  fitaovana: "Frizy, lahatsoratra, solaitrabe",
  image: "images/img_s27.png",
  imageLegende: "Ny fifaliana tamin'ny fahaleovantena, 26 jona 1960",
  famerenana: {
    qa: [
      { q: "Inona no nitranga tamin'ny 29 martsa 1947 ?", ra: "Nipoaka ny tolona lehibe nanohitra ny fanjanahana." },
      { q: "Tanisao hetsika nasionalista roa talohan'ny 1947.", ra: "Menalamba ; VVS ; Sadiavahy ; hetsik'i Ralaimongo..." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Taorian'ny tolona 1947, ahoana no nahazoan'i Madagasikara ny fahaleovantenany : an'ady sa an-dalàna ? »",
      "V.A. : Tamin'ny dingana ara-dalàna sy ara-politika — loi-cadre, referendum, fifampiraharahana — no niafarany tamin'ny 26 jona 1960.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny dia nitondra an'i Madagasikara ho amin'ny fahaleovantena (1947-1960).",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho frizy 1947-1960 ny mpampianatra (famoretana 1947 → loi-cadre 1956 → referendum 1958 → Repoblika 1958 → fahaleovantena 1960) ary mitarika ny famakiana azy.",
    mpianatra: "Mamaky ny frizy sy mandamina ny dingana.",
    technique: "Famakiana frizy", support: "Frizy",
  },
  famakafakana: {
    qa: [
      { q: "Ahoana ny toe-draharaha taorian'ny 1947 ?", ra: "Noferana ny hetsika politika, nosamborina ny mpitarika ; niova anefa ny toe-draharaha iraisam-pirenena : nihanahery ny fitakiana fahaleovantena tany amin'ny zanatany maro (Azia, Afrika)." },
      { q: "Inona ny loi-cadre (1956) ?", ra: "Lalàna frantsay nanome fahefana bebe kokoa ny zanatany : fifidianana malalaka kokoa, governemanta teto an-toerana — dingana voalohany ho amin'ny fizakan-tena." },
      { q: "Inona no nitranga tamin'ny referendum 1958 ?", ra: "Tamin'ny 14 oktobra 1958 : nifidy ny ho Repoblika ao anatin'ny Communauté française i Madagasikara — fizakan-tena anatiny (Repoblika voalohany, Philibert Tsiranana no filoha)." },
      { q: "Oviana no azo ny fahaleovantena tanteraka ?", ra: "Tamin'ny 26 jona 1960 : niverina tamin'i Madagasikara ny fiandrianam-pirenena ; niverina an-tanindrazana koa ireo mpitarika natao sesitany." },
      { q: "Inona no lesona raisina amin'io dia io ?", ra: "Vokatry ny tolona rehetra nifandimby (1895-1947) sy ny fifampiraharahana ara-politika ny fahaleovantena ; sarobidy izy ka tokony hokolokoloina." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : taorian'ny famoretana ny tolona 1947 dia nandalo dingana ara-dalàna ny firenena — loi-cadre (1956), referendum (14 oktobra 1958) sy Repoblika voalohany — ka azo tamin'ny 26 jona 1960 ny fahaleovantena tanteraka.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany : a) fahaleovantena ; b) loi-cadre ; d) tolona 1947 ; e) referendum.",
      items: [],
      corrige: [[{ text: "d) 1947", cle: true }, { text: " → " }, { text: "b) 1956", cle: true }, { text: " → " }, { text: "e) 14 oktobra 1958", cle: true }, { text: " → " }, { text: "a) 26 jona 1960", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao ny dingana telo lehibe nitondra tamin'ny fahaleovantena sy ny datiny avy.",
      items: [],
      corrige: [[{ text: "Loi-cadre (1956) ; referendum sy Repoblika voalohany (14 oktobra 1958) ; fahaleovantena (26 jona 1960)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["loi-cadre 1956", "referendum 14 oktobra 1958", "Repoblika voalohany", "26 jona 1960", "fiandrianam-pirenena"],
    sections: [
      {
        titre: "1. Ny toe-draharaha taorian'ny 1947",
        paras: [
          "Taorian'ny famoretana ny tolona 1947 dia noferana ny hetsika politika ary nosamborina na natao sesitany ny mpitarika. Niova anefa ny tontolo : nihanahery ny fitakiana fahaleovantena tany amin'ny zanatany maro (Azia sy Afrika), ka voatery niova ny politikan'i Frantsa.",
        ],
      },
      {
        titre: "2. Ireo dingana ara-dalàna (1956-1960)",
        paras: [],
        puces: [
          "NY LOI-CADRE (1956) : lalàna frantsay nanome fahefana bebe kokoa ny zanatany — fifidianana malalaka kokoa sy governemanta teto an-toerana ;",
          "NY REFERENDUM (14 OKTOBRA 1958) : nifidy ny ho REPOBLIKA ao anatin'ny Communauté française i Madagasikara — fizakan-tena anatiny ; natsangana ny REPOBLIKA VOALOHANY (Philibert Tsiranana no filoha) ;",
          "NY FAHALEOVANTENA (26 JONA 1960) : niverina tanteraka tamin'i Madagasikara ny FIANDRIANAM-PIRENENA ; niverina an-tanindrazana ireo mpitarika natao sesitany ;",
          "Ny 26 jona no andro firavoravoam-pirenena malagasy mandraka androany.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana no lazaina fa vokatry ny tolona rehetra ny fahaleovantena 1960, fa tsy fanomezana fotsiny ? Vahaolana : raha tsy nisy ny tolona nifandimby (Menalamba, VVS, Ralaimongo, 1947) dia tsy ho voatery niova ny politika frantsay ; ny ran'ireo maritiora sy ny fitakiana ara-dalàna no nanokatra ny lalana — ka adidy ny mitandro sy mikolokolo izany fahaleovantena izany.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tamin'ny 26 jona 1960 dia niverina tamin'i Madagasikara ny fiandrianam-pireneny ; nifaly ny vahoaka nanerana ny Nosy. » (Famintinana)",
      "1. Inona no zava-nitranga tamin'ny 26 jona 1960 ?",
      "2. Inona no dikan'ny hoe « fiandrianam-pirenena » ?",
      "3. Ahoana no ankalazana io daty io ankehitriny ?",
    ],
  },
  rakibolana: [
    { mg: "Fahaleovantena", fr: "Indépendance" },
    { mg: "Fizakan-tena", fr: "Autonomie" },
    { mg: "Fitsapan-kevi-bahoaka", fr: "Référendum" },
    { mg: "Fiandrianam-pirenena", fr: "Souveraineté nationale" },
    { mg: "Repoblika", fr: "République" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny frizy : 1956 : … ; 14 oktobra 1958 : … ; 26 jona 1960 : … ; filohan'ny Repoblika voalohany : … (1 isa avy)",
      items: [],
      corrige: [[{ text: "loi-cadre", cle: true }, { text: " ; " }, { text: "referendum sy Repoblika voalohany", cle: true }, { text: " ; " }, { text: "fahaleovantena", cle: true }, { text: " ; " }, { text: "Philibert Tsiranana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny loi-cadre dia navoaka tamin'ny 1956. b) Ny referendum 1958 dia nitondra fahaleovantena tanteraka avy hatrany. d) Ny 26 jona no andro firavoravoam-pirenena malagasy. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : fizakan-tena anatiny ihany", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao amin'ny fehezanteny roa ny ifandraisan'ny tolona 1947 sy ny fahaleovantena 1960.",
      items: [],
      corrige: [[{ text: "Ny tolona 1947 dia nampiseho fa tsy nanaiky ny fanjanahana ny vahoaka malagasy ka nanosika an'i Frantsa hanova ny politikany ; ny dingana ara-dalàna (loi-cadre, referendum) nanaraka azy no nitondra tamin'ny fahaleovantena 1960", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH6B: { titre: LH, seances: [S26, S27] } };
