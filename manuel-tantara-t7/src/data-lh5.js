// data-lh5.js — Lohahevitra V : Ny fiavian'ny vahoaka malagasy (S21-S23)
const LH = "Lohahevitra V — Ny fiavian'ny vahoaka malagasy";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S21 = {
  numero: 21, total: 32, lohahevitra: LH,
  titre: "Ireo onjam-pifindra-monina namorona ny vahoaka malagasy",
  tanjona: "mandahatra ireo onjam-pifindra-monina nifanesy sy mamaritra ny fiaviany ary ny lalana nombany",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'ny ranomasimbe indianina, frizy, solaitrabe",
  image: "images/img_s21.png",
  imageLegende: "Ny lalan'ny mpifindra monina nankany Madagasikara",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe tantara am-bava ary nahoana izy no sarobidy ho an'i Madagasikara ?", ra: "Fitantarana ny lasa amin'ny vava ; sarobidy satria vao tamin'ny taonjato XIX no niely ny soratra teto." },
      { q: "Inona no siansa mandalina ny vakoka milevina ao anaty tany ?", ra: "Ny arkeolojia." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ny teny malagasy dia iray ihany nefa ny endrik'ny Malagasy dia samihafa : misy mitovy amin'ny Aziatika, misy mitovy amin'ny Afrikanina. Ahoana no anazavana izany ? »",
      "V.A. : Vokatry ny fifangaroan'ny onjam-pifindra-monina maro ny vahoaka malagasy — izany no ianarantsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo onjam-pifindra-monina nifanesy namorona ny vahoaka malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'ny ranomasimbe indianina ny mpampianatra : ny lalana avy any amin'ny Nosy Indonezianina (mandalo ny morontsirak'i Azia sy Afrika na mivantana amin'ny riaka), ny lalana avy any Afrika atsinanana ary avy any Arabia. Apetraka eo amin'ny frizy ny onja tsirairay.",
    mpianatra: "Mandinika ny sari-tany sy ny frizy.",
    technique: "Fandinihana sari-tany", support: "Sari-tany, frizy",
  },
  famakafakana: {
    qa: [
      { q: "Iza no onja voalohany ary oviana ?", ra: "Ny AOSTRONEZIANINA (avy any amin'ny Nosy Indonezianina), taonjato III-IV : razamben'ny Vazimba — izy no nitondra ny fototry ny teny malagasy." },
      { q: "Iza no tonga tamin'ny taonjato VII-VIII ?", ra: "Ny AFRIKANINA (bantoa avy any Afrika atsinanana) sy ny onja indonezianina sy malay vaovao." },
      { q: "Iza ny Islamizé tonga tamin'ny taonjato IX sy taorian'izay ?", ra: "Ny Antalaotra (morontsiraka avaratra andrefana), ny mponin'Iharana (avaratra atsinanana), ny Zafiraminia ary ny Antemoro (atsimo atsinanana) — nitondra ny sorabe sy ny fahaizana arabo." },
      { q: "Iza no tonga tamin'ny taonjato XV sy XIX ?", ra: "Taonjato XV : ny Eoropeanina voalohany (ny Portogey nahita an'i Diego-Suarez ; ny piraty sy ny Zana-Malata tany atsinanana taonjato XVII-XVIII) ; taonjato XIX : ny Indianina sy ny Indopakistanianina (varotra)." },
      { q: "Lalana inona no nombàn'ny Aostronezianina ?", ra: "Ny lakana mivoy amin'ny ranomasimbe indianina : nanaraka ny morontsiraka na nampiasa ny rivotra sy ny onjan-dranomasina (alizé) — dia lavitra mahagaga amin'ny lakana misy fanary." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : vahoaka niforona tamin'ny fifangaroan'ny onja maro ny Malagasy — Aostronezianina, Afrikanina, Islamizé, Eoropeanina, Indianina — ka « iray ao anatin'ny fahasamihafana ».",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. taonjato III-IV / 2. taonjato VII-VIII / 3. taonjato IX / 4. taonjato XIX — a. Islamizé (Antalaotra, Antemoro...) ; b. Aostronezianina (razamben'ny Vazimba) ; d. Indianina sy Indopakistanianina ; e. Afrikanina (bantoa).",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto ny frizin'ny onjam-pifindra-monina dimy lehibe (onja sy taonjato).",
      items: [],
      corrige: [[{ text: "Aostronezianina (III-IV) → Afrikanina sy Indonezianina/Malay (VII-VIII) → Islamizé (IX...) → Eoropeanina (XV...) → Indianina sy Indopakistanianina (XIX)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["onjam-pifindra-monina", "Aostronezianina", "Vazimba", "bantoa", "Islamizé", "Zana-Malata"],
    sections: [
      {
        titre: "1. Vahoaka niforona tamin'ny fifangaroana",
        paras: [
          "Ny vahoaka malagasy dia niforona tamin'ny FIFANGAROAN'NY ONJAM-PIFINDRA-MONINA maro nifanesy nandritra ny taonjato maro. Izany no mahatonga ny teny malagasy ho iray (fototra aostronezianina) nefa ny endrika sy ny fomba amam-panao samihafa — FIRAISANA AO ANATIN'NY FAHASAMIHAFANA.",
        ],
      },
      {
        titre: "2. Ireo onja nifanesy",
        paras: [],
        puces: [
          "TAONJATO III-IV — NY AOSTRONEZIANINA avy any amin'ny Nosy Indonezianina : razamben'ny VAZIMBA ; nitondra ny fototry ny teny malagasy, ny vary, ny lakana misy fanary ;",
          "TAONJATO VII-VIII — NY AFRIKANINA (bantoa avy any Afrika atsinanana : omby, anaram-biby) sy onja INDONEZIANINA SY MALAY vaovao ;",
          "TAONJATO IX SY TAORIANY — NY ISLAMIZÉ : ny Antalaotra (avaratra andrefana), ny mponin'Iharana (avaratra atsinanana), ny Zafiraminia ary ny Antemoro (atsimo atsinanana) — nitondra ny sorabe, ny sikidy ary ny varotra ;",
          "TAONJATO XV — NY EOROPEANINA voalohany : ny Portogey nahita ny helodranon'i Diego-Suarez ; tatỳ aoriana (XVII-XVIII) ny piraty tany amin'ny morontsiraka atsinanana sy ny ZANA-MALATA (taranaky ny piraty sy ny vehivavy malagasy) ;",
          "TAONJATO XIX — NY INDIANINA sy ny INDOPAKISTANIANINA : tonga hivarotra ka nonina tamin'ny tanàna.",
        ],
      },
      {
        titre: "3. Ny lalana nombany",
        paras: [
          "Ny Aostronezianina dia namakivaky ny RANOMASIMBE INDIANINA tamin'ny lakana misy fanary : nanaraka ny morontsirak'i Azia sy Afrika ny sasany, nampiasa ny rivotra alizé sy ny onjan-dranomasina ny hafa. Dia an'arivony kilaometatra izany — porofon'ny fahaizan'ny razambe nitety ranomasina. Ny Afrikanina sy ny Arabo kosa dia niampita ny lakandranon'i Mozambika sy nidina avy any avaratra.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny teny malagasy dia iray fianakaviana amin'ny teny any Borneo (ny maanyan) : ny teny hoe vary, omby (nindramina tamin'ny bantoa), salama (avy amin'ny arabo) dia maneho ny fiavian'ny Malagasy samihafa. » (Nalalaka avy amin'ny asan'ny mpandinika ny teny)",
      "1. Amin'ny teny aiza no iray fianakaviana ny teny malagasy ?",
      "2. Avy aiza ny teny hoe « salama » ?",
      "3. Inona no porofoin'ireo teny nindramina ireo ?",
    ],
  },
  rakibolana: [
    { mg: "Onjam-pifindra-monina", fr: "Vague de migration" },
    { mg: "Aostronezianina", fr: "Austronésien" },
    { mg: "Bantoa", fr: "Bantou" },
    { mg: "Islamizé", fr: "Islamisés" },
    { mg: "Zana-Malata", fr: "Zana-Malata (métis de pirates)" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Onja iray monja no namorona ny vahoaka malagasy. b) Ny Aostronezianina no razamben'ny Vazimba. d) Ny Antemoro dia anisan'ny Islamizé. e) Ny Portogey no Eoropeanina voalohany tonga teto. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : onja maro nifanesy", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Avy aiza avy ireto : ny fototry ny teny malagasy ; ny omby sy ny anarany ; ny sorabe ?",
      items: [],
      corrige: [[{ text: "Teny : avy amin'ny Aostronezianina ; omby : avy amin'ny Afrikanina (bantoa) ; sorabe : avy amin'ny Islamizé (arabo)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana no lazaina fa « mahagaga » ny dian'ny Aostronezianina ?",
      items: [],
      corrige: [[{ text: "Namakivaky ranomasina an'arivony kilaometatra tamin'ny lakana misy fanary fotsiny izy ireo, tsy nisy bosola na sari-tany — fahaizana mitety ranomasina fara-tampony tamin'izany", cle: true }, { text: "." }]],
    },
  ],
};

const S22 = {
  numero: 22, total: 32, lohahevitra: LH,
  titre: "Ny toerana nonenan'ny Malagasy voalohany sy ny anjara asan'ny arkeolojia",
  tanjona: "mamaritra ny toerana nonenan'ny mpifindra monina voalohany sy manazava ny anjara asan'ny arkeolojia amin'ny tantaran'i Madagasikara",
  fanovozanKevitra: DOC,
  fitaovana: "Sari-tanin'i Madagasikara, sary toerana arkeolojika, solaitrabe",
  image: "images/img_s22.png",
  imageLegende: "Ireo toerana nonenan'ny Malagasy voalohany",
  famerenana: {
    qa: [
      { q: "Tanisao ny onjam-pifindra-monina telo voalohany.", ra: "Aostronezianina (III-IV) ; Afrikanina sy Indonezianina (VII-VIII) ; Islamizé (IX)." },
      { q: "Inona no nentin'ny Islamizé ?", ra: "Ny sorabe, ny sikidy, ny varotra." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Rehefa tonga teto an-nosy ny mpifindra monina, taiza no nonenany voalohany : tany anaty ala sa tany amoron-tsiraka ? Ahoana no ahalalantsika izany nefa tsy nisy soratra ? »",
      "V.A. : Tany amoron-tsiraka sy amoron'ony aloha — ary ny arkeolojia no manome porofo.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny toerana nonenan'ny Malagasy voalohany sy ny anjara asan'ny arkeolojia.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'i Madagasikara ny mpampianatra : ny toerana arkeolojika (Taolambiby any atsimo ; Sandrakatsy any avaratra atsinanana ; Mahilaka any avaratra andrefana ; Vohémar/Iharana ; ny tanety afovoany nonenana tatỳ aoriana). Hazavaina ny dingan'ny fipariahana : morontsiraka aloha, avy eo miakatra manaraka ny ony mankany afovoan-tany.",
    mpianatra: "Mandinika ny sari-tany.",
    technique: "Fandinihana sari-tany", support: "Sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Taiza no nonina voalohany ny mpifindra monina ?", ra: "Tany amoron-tsiraka sy amoron'ony : mora idirana, misy rano sy hazandrano, azo idirana amin'ny lakana." },
      { q: "Tanisao toerana arkeolojika roa malaza.", ra: "Mahilaka (tanàna silamo lehibe tany avaratra andrefana, taonjato XI-XIV) ; Vohémar/Iharana (fasana sy vakoka) ; Taolambiby, Sandrakatsy..." },
      { q: "Ahoana no nipariahan'ny mponina tatỳ aoriana ?", ra: "Niakatra nanaraka ny ony sy ny lohasaha izy ka nonina tany afovoan-tany (ny tanety) : nandoro ala sy nanao tanimbary." },
      { q: "Inona no atao hoe arkeolojia ?", ra: "Siansa mandalina ny vakoka milevina (vilany, taolana, fasana, fanorenana) mba hamerenana ny tantaran'ny olona tsy namela soratra." },
      { q: "Inona no porofo hitan'ny arkeology momba ny Malagasy voalohany ?", ra: "Vilany tany, fitaovana vy, taolan'omby sy taolam-biby nohanina, sisan'ny vary, fasana — manamarina ny daty sy ny fomba fiainany." },
    ],
    technique: "Fanontaniana mitarika", support: "Sari-tany, sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : nonina tany amoron-tsiraka aloha ny mpifindra monina vao nipariaka nanaraka ny ony ho any afovoan-tany ; ny arkeolojia no loharano lehibe amin'ny tantaran'ny fonenana voalohany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Marina sa diso ? a) Tany afovoan-tany no nonenan'ny mpifindra monina voalohany. b) Mahilaka dia toerana arkeolojika any avaratra andrefana. d) Ny arkeolojia dia mandalina ny vakoka milevina.",
      items: [],
      corrige: [[{ text: "a) Diso : tany amoron-tsiraka aloha", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Nahoana ny arkeolojia no ilaina indrindra amin'ny fandalinana ny tantaran'i Madagasikara talohan'ny taonjato XIX ?",
      items: [],
      corrige: [[{ text: "Satria vitsy ny loharano an-tsoratra (ny sorabe sy ny fitantaran'ny vahiny ihany) : ny vakoka milevina (vilany, taolana, fasana) no porofo mivaingana amin'ny fonenana sy ny fomba fiainan'ny razambe", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["amoron-tsiraka", "Mahilaka", "Vohémar", "fipariahana", "arkeolojia", "vakoka milevina"],
    sections: [
      {
        titre: "1. Ny fonenana voalohany : ny morontsiraka",
        paras: [
          "Ny mpifindra monina dia nonina TANY AMORON-TSIRAKA SY AMORON'ONY aloha : mora idirana amin'ny lakana, misy rano fisotro, hazandrano ary tany mora volena. Ireto ny toerana arkeolojika malaza :",
        ],
        puces: [
          "MAHILAKA (avaratra andrefana) : tanàna silamo lehibe voamanda, taonjato XI-XIV — varotra tamin'ny Afrika sy ny Arabo ;",
          "VOHÉMAR / IHARANA (avaratra atsinanana) : fasana sy vakoka (vilany klorita, vakana) ;",
          "TAOLAMBIBY (atsimo) sy SANDRAKATSY (avaratra atsinanana) : sisan'ny fonenana tranainy indrindra.",
        ],
      },
      {
        titre: "2. Ny fipariahana ho any afovoan-tany",
        paras: [
          "Avy eo ny mponina dia NIAKATRA NANARAKA NY ONY SY NY LOHASAHA ho any afovoan-tany (ny tanety) : nandoro ala hanaovana tanimboly (tavy), nanorina tanimbary an-tanety ary namorona vohitra voaaro (manda, hadivory). Tamin'ny taonjato XV-XVI dia efa nisy mponina nanerana ny nosy.",
        ],
      },
      {
        titre: "3. Ny arkeolojia, loharanon'ny tantara",
        paras: [
          "Ny ARKEOLOJIA dia siansa mandalina ny VAKOKA MILEVINA : vilany tany, fitaovana vy, taolam-biby, sisan'ny vary, fasana, fanorenana. Ny fikarohana (fouille) dia manome porofo mivaingana : ny datin'ny fonenana (karbona 14), ny sakafo, ny varotra (vakana avy any ivelany). Ho an'i Madagasikara izay vitsy loharano an-tsoratra taloha dia ny arkeolojia sy ny lovan-tsofina no mifameno hamerenana ny tantara.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tao Mahilaka ny arkeology dia nahita manda vato, sisan-trano, vilany avy any Persa sy Sina ary vakana avy any India. Porofo fa tanàna mpivarotra lehibe izy tamin'ny taonjato XI-XIV. »",
      "1. Inona avy no hitan'ny arkeology tao Mahilaka ?",
      "2. Inona no porofoin'ny vilany avy any Persa sy Sina ?",
      "3. Loharano karazana inona ireo zavatra hita ireo ?",
    ],
  },
  rakibolana: [
    { mg: "Arkeolojia", fr: "Archéologie" },
    { mg: "Fikarohana an-tany", fr: "Fouille archéologique" },
    { mg: "Vakoka milevina", fr: "Vestiges enfouis" },
    { mg: "Fipariahana", fr: "Dispersion, peuplement progressif" },
    { mg: "Tavy", fr: "Culture sur brûlis" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny mpifindra monina dia nonina tany … aloha ; ny tanàna silamo lehibe tany avaratra andrefana dia … ; niakatra nanaraka ny … izy ho any afovoan-tany ; ny siansa mandalina ny vakoka milevina dia ny … (1 isa avy)",
      items: [],
      corrige: [[{ text: "amoron-tsiraka", cle: true }, { text: " ; " }, { text: "Mahilaka", cle: true }, { text: " ; " }, { text: "ony sy ny lohasaha", cle: true }, { text: " ; " }, { text: "arkeolojia", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao porofo arkeolojika telo azo hamaritana ny fomba fiainan'ny Malagasy voalohany.",
      items: [],
      corrige: [[{ text: "Vilany tany (fandrahoana) ; taolam-biby sy sisam-bary (sakafo) ; vakana sy vilany vahiny (varotra) — na fasana, fitaovana vy...", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Misy vohitra tranainy misy hadivory ao amin'ny fokontaninao. Inona no tokony hatao : hadina ve izy sa tehirizina ? Hazavao.",
      items: [],
      corrige: [[{ text: "Tsy azo hadina tsy misy alalana : vakoka arovan'ny lalàna izy ; ampahafantarina ny manam-pahefana sy ny mpikaroka ary tehirizina ho an'ny taranaka", cle: true }, { text: "." }]],
    },
  ],
};

const S23 = {
  numero: 23, total: 32, lohahevitra: LH,
  titre: "Ny vahoaka malagasy : iray ao anatin'ny fahasamihafana",
  tanjona: "mampiseho ny fitoviana sy ny fahasamihafan'ny Malagasy ary mandresy lahatra ny amin'ny firaisankina",
  fanovozanKevitra: DOC,
  fitaovana: "Sarin'ny vahoaka malagasy samihafa, solaitrabe",
  image: "images/img_s23.png",
  imageLegende: "Vahoaka iray, endrika maro : ny maha-Malagasy",
  famerenana: {
    qa: [
      { q: "Nahoana no samihafa ny endriky ny Malagasy ?", ra: "Vokatry ny fifangaroan'ny onjam-pifindra-monina maro (Aziatika, Afrikanina, Arabo, Eoropeanina)." },
      { q: "Firy ny tenim-pirenena malagasy ?", ra: "Iray ihany, misy fitenim-paritra." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ny Malagasy avy any Antsiranana sy ny avy any Toliara dia mifankahazo teny tsara. Firenena firy any Afrika no afaka milaza izany ? Inona no hery ao amin'izany ? »",
      "V.A. : Vitsy dia vitsy — harena lehibe ho an'i Madagasikara ny teny iray sy ny kolontsaina iombonana.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fitoviana sy ny fahasamihafan'ny Malagasy ary ny maha-vahoaka iray antsika.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary maro ny mpampianatra (mpanjono vezo, mpiompy atsimo, mpamboly vary afovoany, mpivarotra avaratra...) ary mitarika ny fampitahana : inona no itovizany ? inona no maha-samy hafa azy ?",
    mpianatra: "Mandinika ny sary sy mampitaha.",
    technique: "Fandinihana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona no itovizan'ny Malagasy rehetra ?", ra: "Ny teny malagasy iray (misy fitenim-paritra) ; ny fanajana ny razana sy ny fihavanana ; ny fiompiana omby sy ny fambolena vary ; ny fomba maro (famadihana, fady, kabary)." },
      { q: "Inona kosa no maha-samy hafa ?", ra: "Ny fitenim-paritra, ny fomba fitafy sy ny taovolo nentim-paharazana, ny fomban-drazana isam-paritra, ny asa fivelomana (mpanjono, mpiompy, mpamboly)." },
      { q: "Avy aiza izany fahasamihafana izany ?", ra: "Avy amin'ny fiaviana samihafa (onja maro) sy ny tontolo iainana samihafa (morontsiraka, efitra atsimo, tanety)." },
      { q: "Nahoana no harena ny fahasamihafana ?", ra: "Mifameno ny fahaiza-manao (jono, fiompiana, fambolena, varotra) ; manankarena ny kolontsaina iombonana." },
      { q: "Inona no andraikitsika ?", ra: "Mampirisika ny firaisankina, tsy manavakavaka ara-paritra, mifanaja sy mifanampy — « iray ihany isika Malagasy »." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : iray ny vahoaka malagasy (teny, razana, fihavanana) na dia samihafa aza ny endrika sy ny fomba isam-paritra ; harena ny fahasamihafana raha arahina firaisankina.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Fitoviana sa fahasamihafana ? a) ny teny malagasy ; b) ny fomba fitafy nentim-paharazana ; d) ny fanajana ny razana ; e) ny asa fivelomana isam-paritra.",
      items: [],
      corrige: [[{ text: "a) fitoviana", cle: true }, { text: " ; b) " }, { text: "fahasamihafana", cle: true }, { text: " ; d) " }, { text: "fitoviana", cle: true }, { text: " ; e) " }, { text: "fahasamihafana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Amin'ny fehezanteny telo : hazavao ny hoe « vahoaka iray ao anatin'ny fahasamihafana » ny Malagasy.",
      items: [],
      corrige: [[{ text: "Iray ny teny, ny fanajana ny razana ary ny fihavanana ; samihafa kosa ny endrika, ny fitenim-paritra sy ny fomba noho ny fiaviana sy ny tontolo samihafa ; ny firaisankina no mampiray azy ho firenena iray", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fitoviana", "fahasamihafana", "fitenim-paritra", "fihavanana", "firaisankina"],
    sections: [
      {
        titre: "1. Ny mampiray ny Malagasy",
        paras: [],
        puces: [
          "NY TENY MALAGASY iray, azon'ny rehetra na dia misy fitenim-paritra aza ;",
          "NY FANAJANA NY RAZANA sy ny tanindrazana (fasana, famadihana any amin'ny faritra sasany) ;",
          "NY FIHAVANANA : ny fifanampiana (valintanana), ny fady, ny kabary, ny ohabolana ;",
          "NY OMBY SY NY VARY : fototry ny fiveloman'ny ankamaroan'ny Malagasy.",
        ],
      },
      {
        titre: "2. Ny fahasamihafana, harena",
        paras: [
          "Samihafa ny FITENIM-PARITRA, ny fomba fitafy nentim-paharazana, ny taovolo, ny fomban-drazana ary ny asa fivelomana (ny Vezo mpanjono, ny Antandroy mpiompy, ny mponin'ny tanety mpamboly vary...). Avy amin'ny FIAVIANA samihafa sy ny TONTOLO IAINANA samihafa izany. Tsy tokony hampisaraka anefa izany fa mifameno : samy mitondra ny fahaiza-manaony ho an'ny firenena iray.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Misy mpianatra vaovao avy any amin'ny faritra hafa ao an-dakilasy ka misy maneso ny fitenim-paritrany. Inona no ataonao ? Vahaolana : tsy manaiky ny fanesoana aho fa manazava fa ny fitenim-paritra rehetra dia teny malagasy avokoa ary samy manan-kaja ; ny fahasamihafana dia harena fa tsy antony hanavakavahana — mampiseho ny firaisankina aho amin'ny fandraisana azy ho namana.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny mpandinika dia milaza fa i Madagasikara dia « kaontinanta kely » : ny mponina avy amin'ny fiaviana maro dia niray teny sy kolontsaina — zavatra tsy fahita firy eto amin'izao tontolo izao. »",
      "1. Nahoana i Madagasikara no antsoina hoe « kaontinanta kely » ?",
      "2. Inona no « tsy fahita firy » lazain'ny mpandinika ?",
      "3. Inona no adidintsika mba hitandroana izany ?",
    ],
  },
  rakibolana: [
    { mg: "Fitenim-paritra", fr: "Dialecte régional" },
    { mg: "Fihavanana", fr: "Lien social, entente" },
    { mg: "Valintanana", fr: "Entraide" },
    { mg: "Firaisankina", fr: "Solidarité, unité" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Teny maro samihafa tsy mifankahazo no eto Madagasikara. b) Ny fanajana ny razana dia iombonan'ny Malagasy. d) Ny fahasamihafana dia antony ara-drariny hanavakavahana. e) Mifameno ny fahaiza-manaon'ny faritra samihafa. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : teny iray misy fitenim-paritra", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : harena izy fa tsy antony hanavakavahana", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Omeo singa telo mampiray ny Malagasy rehetra.",
      items: [],
      corrige: [[{ text: "Ny teny malagasy ; ny fanajana ny razana sy ny fihavanana ; ny omby sy ny vary (na : ny kabary, ny ohabolana)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa izay hataonao hampiroboroboana ny firaisankina ao amin'ny fiaraha-monina misy anao.",
      items: [],
      corrige: [[{ text: "Ohatra : mandray sy manaja ny olona avy amin'ny faritra rehetra ; mandray anjara amin'ny asa iombonana (fanadiovana, valintanana) tsy misy fanavakavahana", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH5: { titre: LH, seances: [S21, S22, S23] } };
