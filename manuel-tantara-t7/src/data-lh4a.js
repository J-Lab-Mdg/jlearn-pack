// data-lh4a.js — Lohahevitra IV : Ny Moyen Âge (S14-S16) : famaritana, feodalite, Eglizy
const LH = "Lohahevitra IV — Ny Moyen Âge (476-1492)";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S14 = {
  numero: 14, total: 32, lohahevitra: LH,
  titre: "Ny famaritana sy ny dingan'ny Moyen Âge",
  tanjona: "mametraka ny Moyen Âge ao anatin'ny fotoana sy ny toerana ary mandahatra ny dingany telo",
  fanovozanKevitra: DOC,
  fitaovana: "Frizy kronolojika, sari-tanin'i Eoropa, solaitrabe",
  image: "images/img_s14.png",
  imageLegende: "Ny Moyen Âge : lapa mimanda sy vohitra eoropeanina",
  famerenana: {
    qa: [
      { q: "Oviana no nifarana ny Antiquité ary inona no zava-nitranga ?", ra: "Tamin'ny 476 : nianjera ny Empira romanina tandrefana." },
      { q: "Inona ny vanim-potoana manaraka ny Antiquité ?", ra: "Ny Moyen Âge (476-1492)." },
    ],
    technique: "Fanontaniana am-bava", support: "Frizy",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no ao an-tsainareo raha mandre hoe “Moyen Âge” : lapa mimanda ? mpiady an-tsoavaly ? Nahoana izy no antsoina hoe “vanim-potoana antenatenany” ? »",
      "V.A. : Satria eo anelanelan'ny Antiquité sy ny Andro maoderina izy — hofaritantsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny famaritana ny Moyen Âge sy ny dingany : ny niandohany, ny firoboroboany ary ny fiafarany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frizy ny mpampianatra : 476 (nianjeran'i Roma) → Haut Moyen Âge (476-XIe) → firoboroboana (XIe-XIIIe) → krizy (XIVe-XVe) → 1492 (tongan'i Colomb tany Amerika). Aseho amin'ny sari-tany i Eoropa tandrefana.",
    mpianatra: "Mandinika ny frizy sy ny sari-tany.",
    technique: "Fandinihana frizy", support: "Frizy, sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe Moyen Âge ?", ra: "Ny vanim-potoana « antenatenany » eo anelanelan'ny Antiquité sy ny Andro maoderina : 476 ka hatramin'ny 1492." },
      { q: "Inona no nitranga taorian'ny nianjeran'ny Empira romanina ?", ra: "Nizarazara ho fanjakana maro i Eoropa (ny vahoaka « barbara » : Franka, Gota...) ; nihena ny tanàna sy ny varotra — izany ny Haut Moyen Âge." },
      { q: "Inona no mampiavaka ny taonjato XIe-XIIIe ?", ra: "Firoboroboana : nandroso ny fambolena (angady vy, fihodinan'ny tany telo), nitombo ny mponina, niorina ny tanàna sy ny katedraly, ary natao ny kroazada (dia masina nankany Jerosalema)." },
      { q: "Inona kosa no nanjo an'i Eoropa tamin'ny XIVe-XVe ?", ra: "Krizy nifanesy : mosary, ny pesta mainty (1347-1352 : maty ny ampahatelon'ny mponina), ary ny Adin'ny Zato Taona (1337-1453, Frantsa sy Angletera)." },
      { q: "Nahoana ny 1492 no fetran'ny Moyen Âge ?", ra: "Tamin'io taona io i Christophe Colomb no tonga tany Amerika : nanokatra vanim-potoana vaovao ho an'i Eoropa sy izao tontolo izao izany." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Moyen Âge (476-1492) dia mizara telo — fiandohana sarotra, firoboroboana (XIe-XIIIe), krizy (XIVe-XVe) — ary nifarana tamin'ny dian'i Colomb.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Apetraho amin'ny dingana marina : a) ny pesta mainty ; b) ny fananganana ny katedraly ; d) ny fizarazaran'i Eoropa taorian'ny 476.",
      items: [],
      corrige: [[{ text: "a) krizin'ny XIVe-XVe", cle: true }, { text: " ; b) " }, { text: "firoboroboana XIe-XIIIe", cle: true }, { text: " ; d) " }, { text: "Haut Moyen Âge (fiandohana)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto ny frizy kronolojikan'ny Moyen Âge : ny fetrany roa sy ny dingany telo.",
      items: [],
      corrige: [[{ text: "476 (nianjeran'ny Empira romanina) → Haut Moyen Âge → firoboroboana (XIe-XIIIe : fambolena, tanàna, kroazada) → krizy (XIVe-XVe : pesta, Adin'ny Zato Taona) → 1492 (tongan'i Colomb tany Amerika)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Moyen Âge", "Haut Moyen Âge", "kroazada", "pesta mainty", "Adin'ny Zato Taona", "1492"],
    sections: [
      {
        titre: "1. Ny famaritana ny Moyen Âge",
        paras: [
          "Ny MOYEN ÂGE (« vanim-potoana antenatenany ») dia ny vanim-potoana eo anelanelan'ny Antiquité sy ny Andro maoderina : nanomboka tamin'ny NIANJERAN'NY EMPIRA ROMANINA TANDREFANA (476) ka nifarana tamin'ny NAHATONGAVAN'I CHRISTOPHE COLOMB TANY AMERIKA (1492). Any EOROPA TANDREFANA no ifantohan'ny fandalinana azy, na dia nisy tantara lehibe koa aza tany amin'ny faritra hafa (ny Silamo, i Sina, i Afrika).",
        ],
      },
      {
        titre: "2. Ny dingana telo",
        paras: [],
        puces: [
          "NY HAUT MOYEN ÂGE (476 - taonjato XIe) : nizarazara ho fanjakana maro i Eoropa (Franka, Gota...) ; nihena ny tanàna sy ny varotra ; ny fiainana dia nifantoka tany ambanivohitra ;",
          "NY FIROBOROBOANA (taonjato XIe-XIIIe) : nandroso ny fambolena (angady vy, fihodinan'ny tany telo) ka nitombo ny mponina ; velona indray ny tanàna sy ny varotra ; naorina ny katedraly lehibe ; natao ny KROAZADA (dia masina nankany Jerosalema) ;",
          "NY KRIZY (taonjato XIVe-XVe) : mosary nifanesy ; ny PESTA MAINTY (1347-1352) namono ny ampahatelon'ny mponin'i Eoropa ; ny ADIN'NY ZATO TAONA (1337-1453) nampifanandrina an'i Frantsa sy Angletera.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana ny mpahay tantara no mifidy ny 476 sy ny 1492 ho fetran'ny Moyen Âge ? Vahaolana : ny 476 dia namarana ny fahefana romanina tany andrefana (fiafaran'ny Antiquité) ; ny 1492 dia nanokatra ny fifandraisan'i Eoropa tamin'ny kaontinanta vaovao (fiandohan'ny Andro maoderina). Marika lehibe ireo fa tsy fiovana tampoka : nitohy ihany ny fiainan'ny olona tsotra.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tamin'ny 1347 dia niditra tao Eoropa avy tamin'ny sambo ny pesta mainty : nandritra ny dimy taona dia maty ny olona iray amin'ny telo. Foana ny vohitra sasany, nijanona ny asa, ary nihorohoro ny olona. »",
      "1. Oviana sy ahoana no nidiran'ny pesta tao Eoropa ?",
      "2. Firy ny olona matiny ?",
      "3. Inona no vokatr'izany teo amin'ny fiainana andavanandro ?",
    ],
  },
  rakibolana: [
    { mg: "Vanim-potoana antenatenany", fr: "Moyen Âge" },
    { mg: "Kroazada", fr: "Croisade" },
    { mg: "Pesta mainty", fr: "Peste noire" },
    { mg: "Adin'ny Zato Taona", fr: "Guerre de Cent Ans" },
    { mg: "Katedraly", fr: "Cathédrale" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny Moyen Âge dia nanomboka tamin'ny … ary nifarana tamin'ny … ; ny taonjato XIe-XIIIe dia vanim-potoanan'ny … ; ny pesta mainty dia namono ny … n'ny mponin'i Eoropa. (1 isa avy)",
      items: [],
      corrige: [[{ text: "476", cle: true }, { text: " ; " }, { text: "1492", cle: true }, { text: " ; " }, { text: "firoboroboana", cle: true }, { text: " ; " }, { text: "ampahatelony", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. 1337-1453 / 2. 1347-1352 / 3. 1492 — a. pesta mainty ; b. tongan'i Colomb tany Amerika ; d. Adin'ny Zato Taona.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny taonjato fahafiry : a) 476 ; b) 1347 ; d) 1492 ?",
      items: [],
      corrige: [[{ text: "a) taonjato faha-5", cle: true }, { text: " ; b) " }, { text: "taonjato faha-14", cle: true }, { text: " ; d) " }, { text: "taonjato faha-15", cle: true }, { text: "." }]],
    },
  ],
};

const S15 = {
  numero: 15, total: 32, lohahevitra: LH,
  titre: "Ny rafitra feodaly",
  tanjona: "mamaritra ny feodalite sy manoritsoritra ny firafitry ny fiaraha-monina feodaly ary manazava ny fiasany",
  fanovozanKevitra: DOC,
  fitaovana: "Sarin'ny piramidan'ny feodalite, solaitrabe",
  image: "images/img_s15.png",
  imageLegende: "Ny fiaraha-monina feodaly : tompomenakely, vasaly ary tantsaha",
  famerenana: {
    qa: [
      { q: "Inona ny dingana telon'ny Moyen Âge ?", ra: "Haut Moyen Âge ; firoboroboana (XIe-XIIIe) ; krizy (XIVe-XVe)." },
      { q: "Nahoana no nihena ny fahefan'ny mpanjaka tamin'ny Haut Moyen Âge ?", ra: "Nizarazara ny fanjakana ary tsy voafehin'ny mpanjaka irery ny faritra rehetra." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Raha tsy afaka miaro ny faritra rehetra ny mpanjaka, iza no hiaro ny tantsaha amin'ny mpanafika ? Inona no takalony ? »",
      "V.A. : Ny tompomenakely (seigneur) no niaro — ary ny fanompoana sy ny anjara vokatra no takalony : izany ny feodalite.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny rafitra feodaly : ny firafiny sy ny fiasany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny piramidan'ny feodalite ny mpampianatra : ny mpanjaka, ny tompomenakely lehibe (suzerain), ny vasaly sy ny mpiady an-tsoavaly (chevalier), ary ny tantsaha (serf sy vilain). Hazavaina ny fifanekena : ny suzerain manome FIEF (tany) ; ny vasaly mianiana ho mahatoky sy manompo.",
    mpianatra: "Mandinika ny piramida sy ny fifanekena.",
    technique: "Fandinihana sary", support: "Piramidan'ny feodalite",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe feodalite ?", ra: "Rafitra ara-tsosialy sy ara-politika : ny tany (fief) no ifanekena — ny suzerain manome tany, ny vasaly manompo sy miady ho azy." },
      { q: "Iza ny vasaly ?", ra: "Andriana nandray fief tamin'ny suzerain ka nianiana ho mahatoky azy (fanompoana ara-tafika, torohevitra, fanampiana)." },
      { q: "Iza ny chevalier ?", ra: "Mpiady an-tsoavaly mitondra fiadiana vy ; mpiaro ny tompomenakely sy ny fivavahana izy." },
      { q: "Inona ny maha-samy hafa ny serf sy ny vilain ?", ra: "Samy tantsaha izy : ny vilain dia olona afaka nefa mandoa anjara sy manompo ; ny serf kosa dia mifamatotra amin'ny tany — tsy afaka miala ary lovain'ny zanany izany toetra izany." },
      { q: "Inona ny andraikitry ny tompomenakely amin'ny tantsaha ?", ra: "Miaro azy amin'ny fanafihana (ny lapa mimanda no fialofana) sy mitsara ny fifanolanana ; ho takalony dia mandoa anjara vokatra sy manao asa an-terivozona ny tantsaha." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny feodalite dia rafitra mifototra amin'ny tany sy ny fifanekena — suzerain/vasaly eo ambony, tantsaha (serf sy vilain) eo ambany, ary ny lapa mimanda no ivony.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Iza no resahina ? a) mandray fief sy mianiana ho mahatoky ; b) mifamatotra amin'ny tany ka tsy afaka miala ; d) mpiady an-tsoavaly ; e) manome ny fief.",
      items: [],
      corrige: [[{ text: "a) ny vasaly", cle: true }, { text: " ; b) " }, { text: "ny serf", cle: true }, { text: " ; d) " }, { text: "ny chevalier", cle: true }, { text: " ; e) " }, { text: "ny suzerain", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Hazavao amin'ny fehezanteny telo ny fiasan'ny rafitra feodaly (iza no manome inona ary mahazo inona).",
      items: [],
      corrige: [[{ text: "Ny suzerain manome fief (tany) ho an'ny vasaly ; ny vasaly manompo sy miady ho an'ny suzerain ; ny tantsaha mamboly ny tanin'ny tompomenakely sy mandoa anjara, ary arovany amin'ny loza ho takalony", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["feodalite", "fief", "suzerain", "vasaly", "chevalier", "serf", "vilain"],
    sections: [
      {
        titre: "1. Ny niandohan'ny feodalite",
        paras: [
          "Taorian'ny nizarazaran'ny fanjakana sy ny fanafihana nifanesy (Normanina, Hongroa...) dia tsy afaka niaro ny faritra rehetra intsony ny mpanjaka. Ny olona àry dia nitady FIAROVANA teo amin'ny tompomenakely akaiky azy : izany no niandohan'ny FEODALITE — rafitra mifototra amin'ny tany sy ny fifanekena.",
        ],
      },
      {
        titre: "2. Ny firafitry ny fiaraha-monina feodaly",
        paras: [],
        puces: [
          "NY MPANJAKA : suzerain ambony indrindra, nefa fahefana voafetra ;",
          "NY TOMPOMENAKELY LEHIBE (suzerain) : manome FIEF (tany) ho an'ny vasaliny ;",
          "NY VASALY : mandray ny fief ka mianiana ho mahatoky (fanompoana ara-tafika, torohevitra, fanampiana ara-bola) ;",
          "NY CHEVALIER : mpiady an-tsoavaly mitondra fiadiana vy ;",
          "NY TANTSAHA, maro an'isa : ny VILAIN (olona afaka, mandoa anjara) sy ny SERF (mifamatotra amin'ny tany, tsy afaka miala, lovain-janaka).",
        ],
      },
      {
        titre: "3. Ny fiainana ao amin'ny menakely (seigneurie)",
        paras: [
          "Ny LAPA MIMANDA (château fort) no ivon'ny menakely : fialofana amin'ny ady sy fonenan'ny tompomenakely. Manodidina azy ny tanin'ny tompomenakely sy ny tanimboly zarain'ny tantsaha. Ny tantsaha dia mandoa ANJARA VOKATRA, manao ASA AN-TERIVOZONA (corvée) ary mampiasa ny fitaovan'ny tompomenakely (fitotoam-bary, fanendasana mofo) amin'ny saram-pampiasana. Ho takalony dia miaro azy sy mitsara ny fifanolanana ny tompomenakely.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Misy fitoviana ve ny rafitra feodaly sy ny fanjakana malagasy taloha (andriana, hova, andevo) ? Vahaolana : samy fiaraha-monina mirafitra ambaratonga izy ary samy nifototra tamin'ny tany sy ny fanompoana ; fa ny feodalite dia nifototra tamin'ny fifanekena suzerain-vasaly (fief), ny rafitra malagasy kosa tamin'ny fihavanana sy ny hasin'ny andriana. Tsy mitovy tanteraka àry izy roa na dia mifanahatsahala aza.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Nametraka ny tanany teo am-pelatanan'ny suzerain ny vasaly ka nilaza hoe : “Tompoko, lasa olonao aho.” Avy eo dia nomen'ny suzerain azy ny fief. Raha nivadika ny anankiray dia rava ny fifanekena. » (Nalalaka avy amin'ny fombafomba fanaovana homage, taonjato XIe)",
      "1. Inona no dikan'ny fihetsika « mametraka ny tanana » ?",
      "2. Inona no azon'ny vasaly ho takalon'ny fianianany ?",
      "3. Inona no mitranga raha mivadika ny iray ?",
    ],
  },
  rakibolana: [
    { mg: "Feodalite", fr: "Féodalité" },
    { mg: "Menakely", fr: "Seigneurie, fief" },
    { mg: "Tompomenakely", fr: "Seigneur" },
    { mg: "Asa an-terivozona", fr: "Corvée" },
    { mg: "Lapa mimanda", fr: "Château fort" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny fief dia tany omena ny vasaly. b) Ny serf dia afaka mifindra toerana malalaka. d) Ny lapa mimanda dia fialofana amin'ny ady. e) Ny mpanjaka no nifehy mivantana ny faritra rehetra. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : mifamatotra amin'ny tany izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : ny tompomenakely no nifehy ny faritra", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Rafeto ny piramidan'ny feodalite (ambaratonga efatra).",
      items: [],
      corrige: [[{ text: "Mpanjaka → tompomenakely lehibe (suzerain) → vasaly sy chevalier → tantsaha (vilain sy serf)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao adidy roa ataon'ny tantsaha amin'ny tompomenakely sy ny takalony iray.",
      items: [],
      corrige: [[{ text: "Adidy : mandoa anjara vokatra ; manao asa an-terivozona", cle: true }, { text: " ; takalony : " }, { text: "arovana amin'ny fanafihana sy tsaraina ara-drariny", cle: true }, { text: "." }]],
    },
  ],
};

const S16 = {
  numero: 16, total: 32, lohahevitra: LH,
  titre: "Ny toeran'ny Eglizy tao amin'ny fiaraha-monina medievaly",
  tanjona: "manoritsoritra ny firafitry ny Eglizy sy manazava ny anjara asany ara-kolontsaina, ara-toekarena ary ara-tsosialy",
  fanovozanKevitra: DOC,
  fitaovana: "Sarin'ny katedraly sy ny monasitera, fafana ny firafitry ny Eglizy, solaitrabe",
  image: "images/img_s16.png",
  imageLegende: "Ny katedraly sy ny monasitera : ivon'ny fiainana medievaly",
  famerenana: {
    qa: [
      { q: "Iza avy ny sokajin'olona ao amin'ny fiaraha-monina feodaly ?", ra: "Mpanjaka, tompomenakely, vasaly/chevalier, tantsaha (serf, vilain)." },
      { q: "Inona no ivon'ny menakely ?", ra: "Ny lapa mimanda." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ankoatra ny tompomenakely, rafitra iza koa no nanana fahefana lehibe tamin'ny Moyen Âge sy nanaraka ny olona hatramin'ny fahaterahany ka hatramin'ny fahafatesany ? »",
      "V.A. : Ny Eglizy katolika — izy no fanahin'ny fiaraha-monina medievaly.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny firafitry ny Eglizy sy ny toerany tao amin'ny fiaraha-monina medievaly.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny fafana ny mpampianatra : ny Papa sy ny kardinaly eo an-tampony ; ny KLERJY SEKOLIERA (eveka, pretra — miara-miaina amin'ny vahoaka) sy ny KLERJY REGOLIERA (abe, moanina — manaraka fitsipika ao amin'ny monasitera).",
    mpianatra: "Mandinika ny fafana.",
    technique: "Fandinihana fafana", support: "Fafana",
  },
  famakafakana: {
    qa: [
      { q: "Iza no lehiben'ny Eglizy ?", ra: "Ny PAPA any Roma, ampian'ny kardinaly." },
      { q: "Inona ny maha-samy hafa ny klerjy sekoliera sy ny klerjy regoliera ?", ra: "Sekoliera : miaina eo anivon'ny vahoaka (eveka mitantana diosezy, pretra mitantana paroasy) ; regoliera : miaina ao amin'ny monasitera manaraka fitsipika (abe sy moanina)." },
      { q: "Inona ny anjara asan'ny Eglizy ara-kolontsaina ?", ra: "Izy no nitahiry ny fahalalana : ny moanina nandika sy niaro ny boky ; ny sekoly sy ny oniversite voalohany dia naorin'ny Eglizy." },
      { q: "Ary ara-toekarena sy ara-tsosialy ?", ra: "Tompon-tany lehibe ny Eglizy (fief maro) ; nandray ny dime (ampahafolon'ny vokatra) izy ; nikarakara ny mahantra sy ny marary (hopitaly) ary nampandry tany (fandriampahalemana an'Andriamanitra)." },
      { q: "Ahoana no nanjakan'ny Eglizy tamin'ny fiainan'ny olona ?", ra: "Nanaraka ny olona hatramin'ny batisa ka hatramin'ny fandevenana izy ; ny fetin'ny Eglizy no nandamina ny taona ; ny lakolosy no nandamina ny andro." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny Eglizy, tarihin'ny Papa, dia nizara ho klerjy sekoliera sy regoliera ary nanjaka tamin'ny lafiny rehetra — kolontsaina, toekarena, fiaraha-monina.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Klerjy sekoliera sa regoliera ? a) moanina ao amin'ny monasitera ; b) pretra ao amin'ny paroasy ; d) abe ; e) eveka.",
      items: [],
      corrige: [[{ text: "a) regoliera", cle: true }, { text: " ; b) " }, { text: "sekoliera", cle: true }, { text: " ; d) " }, { text: "regoliera", cle: true }, { text: " ; e) " }, { text: "sekoliera", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao anjara asa telo nataon'ny Eglizy tamin'ny Moyen Âge (kolontsaina, toekarena, sosialy).",
      items: [],
      corrige: [[{ text: "Kolontsaina : nitahiry ny boky sy nanorina ny sekoly/oniversite ; toekarena : tompon-tany lehibe sy nandray ny dime ; sosialy : nikarakara ny mahantra sy ny marary ary nampandry tany", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Papa", "kardinaly", "klerjy sekoliera", "klerjy regoliera", "monasitera", "dime"],
    sections: [
      {
        titre: "1. Ny firafitry ny Eglizy",
        paras: [
          "Ny EGLIZY KATOLIKA no rafitra iray manerana an'i Eoropa tandrefana manontolo tamin'ny Moyen Âge. Ny PAPA any Roma no lehibeny, ampian'ny KARDINALY. Mizara roa ny mpitondra fivavahana :",
        ],
        puces: [
          "NY KLERJY SEKOLIERA : miaina eo anivon'ny vahoaka — ny EVEKA mitantana ny diosezy, ny PRETRA (curé) mitantana ny paroasy ;",
          "NY KLERJY REGOLIERA : miaina ao amin'ny MONASITERA manaraka fitsipika (règle) — ny ABE no lehibeny ary ny MOANINA no mpikambana : mivavaka, miasa tany ary mandika boky izy ireo.",
        ],
      },
      {
        titre: "2. Ny Eglizy manjaka amin'ny lafiny rehetra",
        paras: [],
        puces: [
          "ARA-KOLONTSAINA : ny moanina no nitahiry sy nandika ny bokin'ny Antiquité ; ny sekoly sy ny ONIVERSITE voalohany (Paris, Bologne, taonjato XIIe-XIIIe) dia naorin'ny Eglizy ; ny katedraly no asa kanto lehibe indrindra ;",
          "ARA-TOEKARENA : tompon-tany lehibe ny Eglizy ary nandray ny DIME (ampahafolon'ny vokatra aloan'ny mpino) ;",
          "ARA-TSOSIALY : nikarakara ny mahantra, ny kamboty sy ny marary (hopitaly « Hôtel-Dieu ») ary niezaka nampandry tany (fandriampahalemana an'Andriamanitra) ;",
          "TEO AMIN'NY FIAINANA ANDAVANANDRO : ny batisa, ny mariazy, ny fandevenana, ny fety sy ny lakolosy — ny Eglizy no nandamina ny fotoanan'ny olona rehetra.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana no nanan-kery lehibe ny Eglizy tamin'ny Moyen Âge ? Vahaolana : izy irery no rafitra niray manerana an'i Eoropa raha nizarazara ny fahefana politika ; izy no nitahiry ny fahalalana sy nandamina ny fiainana andavanandro ; ary ny finoana no fototry ny fisainan'ny olona tamin'izany — ka nanjaka tamin'ny saina sy ny fo ny Eglizy.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ao amin'ny monasitera dia mizara ny andron'ny moanina ny vavaka sy ny asa : “Ora et labora” — mivavaha ary miasà. Ao amin'ny efitrano fandikana (scriptorium) dia adikan'ny moanina amin'ny tanana ny boky iray mandritra ny volana maro. »",
      "1. Inona no dikan'ny hoe « Ora et labora » ?",
      "2. Inona no atao ao amin'ny scriptorium ?",
      "3. Nahoana no zava-dehibe ho an'ny kolontsaina izany asa izany ?",
    ],
  },
  rakibolana: [
    { mg: "Klerjy", fr: "Clergé" },
    { mg: "Diosezy / paroasy", fr: "Diocèse / paroisse" },
    { mg: "Monasitera", fr: "Monastère" },
    { mg: "Moanina", fr: "Moine" },
    { mg: "Dime (ampahafolon-karena)", fr: "Dîme" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny … any Roma no lehiben'ny Eglizy ; ny eveka sy ny pretra dia klerjy … ; ny abe sy ny moanina dia klerjy … ; ny ampahafolon'ny vokatra aloan'ny mpino dia ny … (1 isa avy)",
      items: [],
      corrige: [[{ text: "Papa", cle: true }, { text: " ; " }, { text: "sekoliera", cle: true }, { text: " ; " }, { text: "regoliera", cle: true }, { text: " ; " }, { text: "dime", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny oniversite voalohany dia naorin'ny Eglizy. b) Ny moanina dia niaina teo anivon'ny vahoaka. d) Ny Eglizy dia tompon-tany lehibe. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : tao amin'ny monasitera izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny moanina no antsoina hoe « mpiaro ny fahalalana » ?",
      items: [],
      corrige: [[{ text: "Satria izy ireo no nandika sy nitahiry tamin'ny tanana ny bokin'ny Antiquité tao amin'ny scriptorium ka tsy very ny fahalalana taloha", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH4A: { titre: LH, seances: [S14, S15, S16] } };
