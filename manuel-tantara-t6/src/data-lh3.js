// data-lh3.js — Lohahevitra III : Fifandraisana amin'ireo firenena afrikanina sy ny nosy (S18-S20)
const LH = "Lohahevitra III — Ny fifandraisan'i Madagasikara amin'ireo firenena afrikanina sy ireo nosy ao amin'ny ranomasimbe indianina";
const DOC = "PE T6 (MEN, nohavaozina) ; FRP Tantara T6 ; boky Tantara J-Learn";

const S18 = {
  numero: 18, total: 27, lohahevitra: LH,
  titre: "Ireo endri-pifandraisan'i Madagasikara amin'ny firenena hafa",
  tanjona: "mitanisa sy manazava ireo endri-pifandraisan'i Madagasikara amin'ireo firenena afrikanina sy ny nosy manodidina",
  fanovozanKevitra: DOC + " (FRP T6, LFK 3-a)",
  fitaovana: "Sari-tany Afrika sy ranomasimbe indianina, solaitrabe",
  image: "images/img_seansa18.png",
  imageLegende: "Ny fifandraisan'i Madagasikara amin'i Afrika sy ny nosy manodidina",
  famerenana: {
    qa: [
      { q: "Kaontinanta inona no akaikin'i Madagasikara indrindra ?", ra: "I Afrika." },
      { q: "Tanisao nosy roa mpiara-belona amintsika ao amin'ny ranomasimbe indianina.", ra: "Kaomoro, Maorisy, Seselisy, La Réunion..." },
    ],
    technique: "Fanontaniana am-bava", support: "Sari-tany",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Rehefa mividy savony na lamba avy any Sina na Maorisy isika, inona no fifandraisana miseho eo ? Ary rehefa mandeha mianatra any Frantsa ny Malagasy iray ? »",
      "V.A. : Fifandraisana ara-barotra sy ara-kolontsaina izany — maro ny endriky ny fifandraisana.",
    ],
    mpianatra: "Mamaly sy maneho hevitra.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo endri-pifandraisan'i Madagasikara amin'ireo firenena afrikanina sy ireo nosy ao amin'ny ranomasimbe indianina.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tany ny mpampianatra ary manazava ny endrika samihafa : roalafy/marolafy, diplomatika, ara-barotra, ara-miaramila, ara-kolontsaina.",
    mpianatra: "Mandinika ny sari-tany sy ny ohatra omena.",
    technique: "Fandinihana sari-tany", support: "Sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe fifandraisana roalafy ?", ra: "Fiaraha-miasa sy fifanampiana eo amin'ny firenena roa tonta (ohatra : Madagasikara sy Frantsa)." },
      { q: "Ny fifandraisana marolafy ?", ra: "Fifandraisan'ny firenena iray amina firenena maro (ohatra : ao anatin'ny UA na ny ONU)." },
      { q: "Inona no atao hoe fifandraisana diplomatika ?", ra: "Fifandraisana ofisialy amin'ny alalan'ny masoivoho (ambasadaoro) maharitra." },
      { q: "Omeo ohatra amin'ny fifandraisana ara-miaramila.", ra: "Fampiofanana ara-tafika, fanazaran-tena iraisana, fifanampiana ara-pitaovana." },
      { q: "Ary ny fifandraisana ara-barotra ?", ra: "Ny fanafarana sy ny fanondranana entana sy tolotra eo amin'ny firenena." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : maro ny endriky ny fifandraisana — roalafy, marolafy, diplomatika, ara-barotra, ara-miaramila — ary samy mitondra soa ho an'ny firenena.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio : a) Madagasikara sy Frantsa manao sonia fifanarahana ; b) Madagasikara ao anatin'ny UA ; d) fanazaran-tena iraisan'ny tafika roa.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "roalafy", cle: true }, { text: " ; b) " }, { text: "marolafy", cle: true }, { text: " ; d) " }, { text: "ara-miaramila (roalafy)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao endri-pifandraisana efatra ary omeo ohatra iray avy.",
      items: [],
      corrige: [[{ text: "Roalafy (Madagasikara-Frantsa) ; marolafy (UA) ; diplomatika (masoivoho) ; ara-barotra (fanondranana lavanila)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fifandraisana roalafy", "fifandraisana marolafy", "diplomatika", "masoivoho", "fifandraisana ara-barotra", "fiaraha-miasa"],
    sections: [
      {
        titre: "1. Nahoana no mifandray amin'ny hafa isika ?",
        paras: [
          "Tsy misy firenena mahavita tena irery : ny fiaraha-miasa dia singa manan-danja hiatrehana ireo fanamby eran-tany — ny ady amin'ny fampihorohoroana, ny fiakaran'ny hafanana, ny tsy fanjarian-tsakafo, ny fampandrosoana maharitra ary ny fitoniana ara-toekarena.",
        ],
      },
      {
        titre: "2. Ireo endriky ny fifandraisana",
        paras: [],
        puces: [
          "FIFANDRAISANA ROALAFY : fiaraha-miasa, fifanampiana ary famenoana eo amin'ny firenena ROA tonta, fehezin'ny fifanarahana amin'ny sehatra maro (ara-toekarena, ara-bola, ara-teknika, ara-kolontsaina). Ohatra : Madagasikara sy Frantsa ;",
          "FIFANDRAISANA MAROLAFY : fifandraisan'ny firenena iray amina firenena MARO hafa, matetika ao anatin'ny fikambanana iraisam-pirenena. Ohatra : ny UA, ny COI ;",
          "FIFANDRAISANA DIPLOMATIKA : fifandraisana ofisialy tazonin'ny fanjakana roa amin'ny alalan'ny iraka maharitra — ny MASOIVOHO (ambasadaoro) ;",
          "FIFANDRAISANA ARA-MIARAMILA : fampiofanana ara-tafika, fanazaran-tena iraisana, fifanampiana ara-pitaovana ;",
          "FIFANDRAISANA ARA-BAROTRA : ny fikorianan'ny fanafarana sy ny fanondranana entana sy tolotra eo amin'ny toekarem-pirenena samihafa.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Manondrana lavanila any Etazonia i Madagasikara ary mandray mpizaha tany avy any Frantsa. Endri-pifandraisana inona avy ireo ? Vahaolana : ny fanondranana lavanila dia fifandraisana ARA-BAROTRA ; ny fandraisana mpizaha tany dia fifandraisana ara-toekarena sy ARA-KOLONTSAINA. Samy roalafy izy ireo satria firenena roa no mifanakalo.",
        ],
      },
    ],
    fantatraoVe: [
      "Manana masoivoho any amin'ny firenena maro i Madagasikara (Frantsa, Etazonia, Sina, Japana, Afrika Atsimo...) ary firenena 20 mahery kosa no manana masoivoho eto Antananarivo — tambajotra diplomatika velona izany !",
      "Ny Malagasy sy ny mponin'ny nosy manodidina dia mpihavana akaiky : ny teny kaomorianina sy ny teny malagasy dia samy misy teny nindramina tamin'ny arabo sy ny swahili, vokatry ny varotra an-dranomasina hatramin'ny taonjato maro !",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny fifandraisana roalafy dia fiaraha-miasa, fifanampiana sy famenoana eo amin'ny firenena roa tonta. Fifanarahana no fehezin'izy io izay ahitana fifanarahana amin'ny sehatra maro : ara-toekarena, ara-bola, ara-teknika ary ara-kolontsaina. » (Loharano : FRP Tantara T6)",
      "1. Firy ny firenena voakasiky ny fifandraisana roalafy ?",
      "2. Inona no mifehy izany fifandraisana izany ?",
      "3. Tanisao sehatra telo mety iarahana miasa.",
    ],
  },
  rakibolana: [
    { mg: "Fifandraisana roalafy", fr: "Relation bilatérale" },
    { mg: "Fifandraisana marolafy", fr: "Relation multilatérale" },
    { mg: "Masoivoho", fr: "Ambassade, ambassadeur" },
    { mg: "Fanondranana / fanafarana", fr: "Exportation / importation" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. roalafy / 2. marolafy / 3. diplomatika / 4. ara-miaramila — a. masoivoho ; b. fanazaran-tena iraisan'ny tafika ; d. firenena roa ; e. fikambanana maro firenena. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana no tsy misy firenena mahavita tena irery ? Omeo antony roa.",
      items: [],
      corrige: [[{ text: "Satria " }, { text: "misy fanamby eran-tany tsy voavahan'ny firenena iray irery (toe-tany, fampihorohoroana, krizy ara-bola)", cle: true }, { text: " (1,5 isa) ary " }, { text: "mifameno ny harena sy ny fahaiza-manaon'ny firenena", cle: true }, { text: " (1,5 isa)." }]],
    },
    {
      points: 3,
      consigne: "Omeo ohatra iray amin'ny fifandraisan'i Madagasikara amin'ny nosy iray ao amin'ny ranomasimbe indianina.",
      items: [],
      corrige: [[{ text: "Ohatra : " }, { text: "ny varotra sy ny sidina mampitohy an'i Madagasikara sy Maorisy na La Réunion ; ny fiaraha-miasa ao anatin'ny COI", cle: true }, { text: "." }]],
    },
  ],
};

const S19 = {
  numero: 19, total: 27, lohahevitra: LH,
  titre: "Ireo fikambanana nidiran'i Madagasikara : UA, COI, COMESA, SADC",
  tanjona: "mitanisa ireo fikambanana misy an'i Madagasikara sy ny tanjon'izy ireo avy",
  fanovozanKevitra: DOC + " (FRP T6, LFK 3-b, 3-d, 3-e)",
  fitaovana: "Fafana ireo fikambanana, sari-tany, solaitrabe",
  image: "images/img_seansa19.png",
  imageLegende: "Ireo fikambanana efatra misy an'i Madagasikara",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe fifandraisana marolafy ?", ra: "Fifandraisan'ny firenena iray amina firenena maro, matetika anaty fikambanana." },
      { q: "Omeo ohatra amin'ny fikambanana iraisam-pirenena.", ra: "UA, ONU, COI..." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Efa renareo ve ny hoe UA, COI, SADC, COMESA ? Sigla inona avy ireo ary inona no ao ambadiny ? »",
      "V.A. : Fikambanana idiran'i Madagasikara ireo — ianarantsika androany.",
    ],
    mpianatra: "Mamaly araka izay reny.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo fikambanana afrikanina sy ny an'ny ranomasimbe indianina nidiran'i Madagasikara : ny UA, ny COI, ny COMESA ary ny SADC.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny fafana ny mpampianatra : anaran'ny fikambanana, taona niorenany/nidirana, mpikambana, tanjona. Asaina mamaky sy mampitaha ny mpianatra.",
    mpianatra: "Mandinika ny fafana ary mampitaha ireo fikambanana.",
    technique: "Fandinihana fafana", support: "Fafana",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny UA ary oviana izy no natsangana ?", ra: "Ny Firaisambe Afrikanina, natsangana ny 9 jolay 2002 tao Durban, nisolo ny OUA (1963)." },
      { q: "Inona no tanjon'ny UA ?", ra: "Fampiroboroboana ny demokrasia, ny zon'olombelona ary ny fampandrosoana manerana an'i Afrika (programa NEPAD)." },
      { q: "Inona ny COI ?", ra: "Ny Vaomieran'ny ranomasimbe indianina (1984) : Madagasikara, Maorisy, Seselisy, Kaomoro, La Réunion (Frantsa)." },
      { q: "Inona ny COMESA ?", ra: "Tsena iombonana ho an'i Afrika Atsinanana sy Atsimo (desambra 1994), firenena 21." },
      { q: "Oviana i Madagasikara no niditra tao amin'ny SADC ?", ra: "Tamin'ny 2005 ; fikambanana mampiroborobo ny fampandrosoana any Afrika Atsimo (niorina 17 aogositra 1992 tany Windhoek)." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : efatra ny fikambanana lehibe misy antsika — UA (politika sy fampandrosoana), COI (nosy mpiara-belona), COMESA sy SADC (tsena sy fampandrosoana isam-paritra).",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. UA / 2. COI / 3. COMESA / 4. SADC — a. tsena iombonana 21 firenena ; b. nosy dimy ; d. firenena afrikanina rehetra ; e. fampandrosoana Afrika Atsimo.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-b", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-e", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ireo nosy mpikambana ao amin'ny COI.",
      items: [],
      corrige: [[{ text: "Madagasikara, Maorisy, Seselisy, Kaomoro ary La Réunion (Frantsa)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["UA", "COI", "COMESA", "SADC", "tsena iombonana", "NEPAD"],
    sections: [
      {
        titre: "1. Ny UA — Firaisambe Afrikanina",
        paras: [
          "Ny VONDRONA AFRIKANINA (UA) dia fikambanan'ireo firenena afrikanina, natsangana ny 9 JOLAY 2002 tao Durban (Afrika Atsimo), nisolo ny OUA (Firaisan'ny Firenena Afrikanina, 1963) izay nianorenan'i Madagasikara hatrany am-boalohany.",
          "Tanjony : ny fampiroboroboana ny DEMOKRASIA, ny ZON'OLOMBELONA ary ny FAMPANDROSOANA manerana an'i Afrika, indrindra amin'ny alalan'ny programa NEPAD. Marihina fa naato tao amin'ny UA i Madagasikara tamin'ny 2009-2014 sy nanomboka ny 2025, noho ny fifandimbiasam-pahefana tsy ara-dalàna.",
        ],
      },
      {
        titre: "2. Ny COI — Vaomieran'ny ranomasimbe indianina",
        paras: [
          "Nanomboka ny taona 1984 dia niditra tamin'ny tsenam-paritra i Madagasikara. Ny COI dia mampivondrona ireo NOSY DIMY : Madagasikara, Maorisy, Seselisy, Kaomoro ary La Réunion (Frantsa). Tanjony : ny fiaraha-miasan'ny nosy mpiara-belona (tontolo iainana, fiarovana ny ranomasina, varotra, kolontsaina).",
        ],
      },
      {
        titre: "3. Ny COMESA sy ny SADC",
        paras: [],
        puces: [
          "COMESA (Tsena Iombonana ho an'i Afrika Atsinanana sy Atsimo) : niorina tamin'ny DESAMBRA 1994, firenena 21 no mpikambana ; tanjony ny fanamafisana ny varotra malalaka izay efa natomboka tamin'ny 1981 ;",
          "SADC (Vondrom-piarahamonina ho Fampandrosoana ny Afrika Tatsimo) : niforona ny 17 AOGOSITRA 1992 tany Windhoek (Namibia) ; niditra tao i Madagasikara tamin'ny 2005 ; tanjony ny fampiroboroboana ny fampandrosoana ara-toekarena any Afrika Atsimo.",
        ],
      },
    ],
    fantatraoVe: [
      "Ny foiben'ny UA dia any Addis-Abeba (Etiopia) : ao no ivorian'ny filoham-panjakana afrikanina rehetra indroa isan-taona — ary efa nampiantrano fihaonana an-tampony ny UA koa i Antananarivo, tamin'ny 2016 (fihaonamben'ny Frankofonia) !",
      "Jean Ping, filohan'ny Vaomieran'ny UA (2008-2012), no nitarika ny fanelanelanana tamin'ny krizy malagasy 2009 : ny fifanarahana Maputo sy Addis-Abeba dia vokatry ny asan'ny UA sy ny fianakaviambe iraisam-pirenena.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Nanomboka ny taona 1984 dia niditra tamin'ny tsenam-paritra aty Afrika i Madagasikara, dia ny Vaomieran'ny ranomasimbe indianina (COI), ny SADC ary ny COMESA. Ny hanamora ny varotra amin'ireo firenena mpikambana ao aminy no tena tanjona. » (Loharano : FRP Tantara T6)",
      "1. Fikambanana firy no voatanisa eto ?",
      "2. Inona no tena tanjon'ny fidirana amin'ireo tsenam-paritra ireo ?",
      "3. Iza amin'ireo no mampivondrona ny nosy ihany ?",
    ],
  },
  rakibolana: [
    { mg: "Firaisambe Afrikanina", fr: "Union Africaine (UA)" },
    { mg: "Vaomiera", fr: "Commission" },
    { mg: "Tsena iombonana", fr: "Marché commun" },
    { mg: "Tsenam-paritra", fr: "Marché régional" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny fafana : fikambanana / taona / mombamomba — UA (… ; …) ; COI (… ; …). (1 isa avy)",
      items: [],
      corrige: [[{ text: "UA : " }, { text: "2002 (nisolo ny OUA 1963)", cle: true }, { text: " ; " }, { text: "firenena afrikanina, foibe Addis-Abeba", cle: true }, { text: ". COI : " }, { text: "1984", cle: true }, { text: " ; " }, { text: "nosy 5 ao amin'ny ranomasimbe indianina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Inona no mahasamihafa ny COMESA sy ny SADC ? (taona, tanjona, isan'ny mpikambana)",
      items: [],
      corrige: [[{ text: "COMESA : " }, { text: "1994, tsena iombonana, firenena 21", cle: true }, { text: " (1,5 isa) ; SADC : " }, { text: "1992 (Madagasikara 2005), fampandrosoana Afrika Atsimo", cle: true }, { text: " (1,5 isa)." }]],
    },
    {
      points: 3,
      consigne: "Nahoana i Madagasikara no naato tao amin'ny UA tamin'ny 2009 sy ny 2025 ?",
      items: [],
      corrige: [[{ text: "Satria " }, { text: "tsy ara-dalàna ny fifandimbiasam-pahefana (fanonganam-panjakana)", cle: true }, { text: " (2 isa) : " }, { text: "tsy manaiky fitondrana azo tamin'ny hery ny UA", cle: true }, { text: " (1 isa)." }]],
    },
  ],
};

const S20 = {
  numero: 20, total: 27, lohahevitra: LH,
  titre: "Ny vokatry ny fidiran'i Madagasikara amin'ireo fikambanana",
  tanjona: "manadihady ny vokatra ara-politika, ara-toekarena ary ara-tsosialy amin'ny fidirana amin'ireo fikambanana",
  fanovozanKevitra: DOC + " (FRP T6, LFK 3-f, 3-g, 3-h, 3-i)",
  fitaovana: "Lahatsoratra, sary, solaitrabe",
  image: "images/img_seansa20.png",
  imageLegende: "Ny varotra sy ny fifaninanana : vokatry ny fanatontoloana",
  famerenana: {
    qa: [
      { q: "Tanisao ireo fikambanana efatra misy an'i Madagasikara.", ra: "UA, COI, COMESA, SADC." },
      { q: "Inona no tena tanjon'ny tsenam-paritra ?", ra: "Ny fanamorana ny varotra amin'ireo firenena mpikambana." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Inona no tombony azon'i Madagasikara amin'ny maha mpikambana azy ? Misy fatiantoka ve ? »",
      "V.A. : Misy vokatra ara-politika, ara-toekarena ary ara-tsosialy — tsara ny mandanjalanja azy.",
    ],
    mpianatra: "Maminavina sy mamaly.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny vokatry ny fidiran'i Madagasikara amin'ireo fikambanana : ara-politika, ara-toekarena ary ara-tsosialy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny lahatsoratra ny mpampianatra (fanatontoloana, fanalalahana, fifaninanana, fivezivezena malalaka). Asaina mamaky sy mitanisa ny tombony sy ny fepetra takiana ny mpianatra.",
    mpianatra: "Mamaky ny lahatsoratra ary manamarika ny hevi-dehibe.",
    technique: "Famakiana lahatsoratra", support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no vokatra ara-politika ?", ra: "Fifehezana ny krizy politika : ny UA sy ny fianakaviambe iraisam-pirenena no manelanelana (ohatra : Maputo sy Addis-Abeba 2009)." },
      { q: "Inona no atao hoe fanatontoloana ?", ra: "Fiharian-karena misandrahaka amin'izao tontolo izao, indrindra amin'ny lafiny varotra." },
      { q: "Inona no tombony ara-toekarena ?", ra: "Malalaka ny varotra, mihena ny vidin-javatra, mitombo ny vokatra, miteraka asa ny orinasa vahiny." },
      { q: "Inona no tombony ara-tsosialy ?", ra: "Fifehezana ny fahantrana, fifampizarana traikefa, fivezivezena malalaka ho an'ny olona." },
      { q: "Inona kosa ny fepetra takiana ?", ra: "Fanatsarana ny vokatra, fahaizana mitantana, fanaraha-maso ny entana miditra, doka varotra, fikirizana." },
    ],
    technique: "Fanontaniana mitarika", support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : mitondra tombony ara-politika, ara-toekarena ary ara-tsosialy ny fidirana amin'ireo fikambanana, saingy mitaky fifaninanana sy ezaka ny fanatontoloana.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ho tombony ara-politika, ara-toekarena na ara-tsosialy : a) fanelanelanan'ny UA amin'ny krizy ; b) fihenan'ny vidin-javatra ; d) fifampizarana traikefa.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "ara-politika", cle: true }, { text: " ; b) " }, { text: "ara-toekarena", cle: true }, { text: " ; d) " }, { text: "ara-tsosialy", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao fepetra telo takiana mba hampahomby ny fiharian-karena ao anatin'ny fifaninanana.",
      items: [],
      corrige: [[{ text: "Fanatsarana ny vokatra ; fahaizana mitantana ; fanaraha-maso ny entana miditra ; fanaovana doka varotra ; fikirizana amin'ny asa", cle: true }, { text: " (telo amin'ireo)." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanatontoloana", "fanalalahana", "fifaninanana", "fivezivezena malalaka", "tombony", "fepetra"],
    sections: [
      {
        titre: "1. Vokatra ara-politika : fifehezana ny krizy",
        paras: [
          "Rehefa misy krizy politika dia manampy amin'ny fitadiavana vahaolana ny fikambanana : tamin'ny 2009 dia ny UA sy ny fianakaviambe iraisam-pirenena (notarihin'i Jean Ping, filohan'ny Vaomieran'ny UA) no nanelanelana ka niteraka ny fifanarahana Maputo sy Addis-Abeba. Mampirisika ny demokrasia sy ny fanjakana tan-dalàna koa ny maha mpikambana.",
        ],
      },
      {
        titre: "2. Vokatra ara-toekarena : ny fanatontoloana sy ny fifaninanana",
        paras: [
          "Ny FANATONTOLOANA dia fiharian-karena misandrahaka amin'izao tontolo izao : misokatra amin'ny firenena rehetra ny fifanakalozana. Ireto ny tombony :",
        ],
        puces: [
          "malalaka ny fifampivarotana ; mitobaka ny entana ka MIHENA NY VIDIN-JAVATRA ;",
          "afaka mifidy izay tiany ny mpanjifa ; afaka manondrana entana koa isika ;",
          "miteraka ASA ny fisian'ny orinasa vahiny ; mivoatra ny haitao ;",
          "ny FANALALAHANA : mihatsara ny fitantanana ny orinasa, mitombo ny vokatra.",
          "FEPETRA TAKIANA anefa : fanatsarana ny vokatra mba tsy ho mena-mitaha, fahaizana mitantana, fanaraha-maso ny entana miditra, doka varotra ary fikirizana.",
        ],
      },
      {
        titre: "3. Vokatra ara-tsosialy",
        paras: [],
        puces: [
          "fifehezana ny FAHANTRANA amin'ny alalan'ny asa sy ny varotra ;",
          "FIFAMPIZARANA TRAIKEFA sy fahaiza-manao eo amin'ny olona samy hafa firenena ;",
          "FIVEZIVEZENA MALALAKA ho an'ny olona eo anivon'ny firenena mpikambana (fianarana, asa, fitsaboana).",
        ],
      },
    ],
    fantatraoVe: [
      "Malagasy maro no mianatra amin'ny oniversite any Maorisy, Afrika Atsimo na Marôka amin'ny alalan'ny vatsim-pianarana avy amin'ny fiaraha-miasa isam-paritra — vokatra mivaingana ho an'ny tanora ny fidirana amin'ireo fikambanana !",
      "Ny lavanila malagasy dia mamatsy 80 % mahery amin'ny tsena eran-tany : ny fanalalahana ny varotra no nahafahan'ny mpamboly any Sava manondrana mivantana ary nampiakatra ny vidiny.",
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tsy misy intsony ny fifanarahana eo amin'ny firenena roa fotsiny amin'ny fifampivarotana satria misokatra amin'ny firenena rehetra ny fifanakalozana. Mihena ny vidin-javatra eny an-tsena noho ny hamaroany. Miteraka asa ho an'ny tsy manana ny fisian'ireo orinasa vahiny. » (Loharano : FRP Tantara T6)",
      "1. Inona no anaran'io fisokafan'ny varotra maneran-tany io ?",
      "2. Tanisao tombony roa voalaza ao amin'ny lahatsoratra.",
      "3. Inona kosa no mety ho loza raha tsy vonona ny mpamokatra malagasy ?",
    ],
  },
  rakibolana: [
    { mg: "Fanatontoloana", fr: "Mondialisation" },
    { mg: "Fifaninanana", fr: "Concurrence" },
    { mg: "Mpanjifa", fr: "Consommateur" },
    { mg: "Doka varotra", fr: "Publicité" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Fenoy : ny fanatontoloana dia fiharian-karena ……… ; ny fanalalahana dia fialan'ny ……… amin'ny orinasa ; ny fifaninanana dia mitaky fanatsarana ny ……… .",
      items: [],
      corrige: [[{ text: "Misandrahaka amin'izao tontolo izao", cle: true }, { text: " ; fialan'ny " }, { text: "fanjakana", cle: true }, { text: " ; fanatsarana ny " }, { text: "vokatra", cle: true }, { text: ". (1 isa avy)" }]],
    },
    {
      points: 4,
      consigne: "Tanisao tombony roa sy fepetra roa takiana amin'ny fanatontoloana. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Tombony : " }, { text: "mihena ny vidin-javatra", cle: true }, { text: " ; " }, { text: "miteraka asa", cle: true }, { text: ". Fepetra : " }, { text: "fanatsarana ny vokatra", cle: true }, { text: " ; " }, { text: "fahaizana mitantana / fanaraha-maso ny entana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Vokatra ara-tsosialy : hazavao ny hoe « fivezivezena malalaka » ary omeo ohatra iray mahakasika ny tanora malagasy.",
      items: [],
      corrige: [[{ text: "Afaka " }, { text: "mifindra, mianatra na miasa any amin'ny firenena mpikambana ny olona", cle: true }, { text: " (2 isa). Ohatra : " }, { text: "tanora malagasy mianatra any Maorisy na Afrika Atsimo", cle: true }, { text: " (1 isa)." }]],
    },
  ],
};

module.exports = { seances: [S18, S19, S20] };
