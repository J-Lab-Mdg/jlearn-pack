// data-lh6.js — Lohahevitra VI : Ny fomba fiainan'ny Malagasy voalohany (S25-S27)
const LH = "Lohahevitra VI — Ny fomba fiainan'ny Malagasy voalohany";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S25 = {
  numero: 25, total: 32, lohahevitra: LH,
  titre: "Ny nentin'ny sivilizasiona aostronezianina sy afrikanina",
  tanjona: "mamantatra ny singa nentin'ny sivilizasiona aostronezianina sy afrikanina ao amin'ny sivilizasiona malagasy",
  fanovozanKevitra: DOC,
  fitaovana: "Sary (lakana, tanimbary, omby), solaitrabe",
  image: "images/img_s25.png",
  imageLegende: "Lakana misy fanary, tanimbary an-tanety ary omby : lova roa tonta",
  famerenana: {
    qa: [
      { q: "Tanisao ny onjam-pifindra-monina roa voalohany.", ra: "Aostronezianina (III-IV) ; Afrikanina sy Indonezianina/Malay (VII-VIII)." },
      { q: "Inona no itovizan'ny Malagasy rehetra ?", ra: "Teny iray, fanajana ny razana, fihavanana, omby sy vary." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Rehefa miteny hoe vary, omby, salama isika — teny malagasy avokoa ve ireo sa misy nindramina ? Avy aiza avy ? »",
      "V.A. : Samy nindramina : vary (aostronezianina), omby (bantoa afrikanina), salama (arabo) — ny teny mihitsy no mitantara ny fiaviantsika.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny singa nentin'ny sivilizasiona aostronezianina sy afrikanina ao amin'ny fiainana malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary ny mpampianatra : lakana misy fanary, tanimbary an-tanety (terrasse), omby, trano hazo mitodika andrefana... Asaina manavaka ny mpianatra hoe avy amin'ny fiaviana inona avy.",
    mpianatra: "Mandinika ny sary sy manavaka.",
    technique: "Fandinihana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny lova aostronezianina amin'ny teny sy ny fiainana an-dranomasina ?", ra: "Ny fototry ny teny malagasy ; ny lakana misy fanary sy ny fahaizana mitety ranomasina ; ny jono." },
      { q: "Inona ny lova indonezianina amin'ny fambolena ?", ra: "Ny vary sy ny TANIMBARY AN-TANETY (terrasse) toy ny any Betsileo ; ny fomba fitafy (lamba tenona)." },
      { q: "Inona ny lova afrikanina (bantoa) ?", ra: "Ny fiompiana OMBY (sy ny anaram-biby maro : omby, ondry, akoho...) ; singa amin'ny teny sy ny mozika (amponga)." },
      { q: "Inona ireo fitaovana fitaterana nentin'ny mpifindra monina ?", ra: "Ny LAKANA MISY FANARY (aostronezianina), ny SAMBO ZAIRINA (bateau cousu — hazo zairina tady, arabo-afrikanina) ary ny BOTRY (boutre, sambo arabo misy lay telozoro)." },
      { q: "Ahoana no nifangaroan'ireo lova ireo ?", ra: "Nifangaro tao amin'ny fiainana andavanandro izy : ny Malagasy dia sady mamboly vary (Azia) no miompy omby (Afrika) — sivilizasiona vaovao mifangaro no vokany." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny teny, ny vary sy ny lakana dia lova aostronezianina ; ny omby sy ny anaram-biby dia lova afrikanina ; nifangaro izy ka namorona ny sivilizasiona malagasy.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Avy aiza : a) ny fototry ny teny malagasy ; b) ny omby ; d) ny tanimbary an-tanety ; e) ny botry ?",
      items: [],
      corrige: [[{ text: "a) aostronezianina", cle: true }, { text: " ; b) " }, { text: "afrikanina (bantoa)", cle: true }, { text: " ; d) " }, { text: "indonezianina", cle: true }, { text: " ; e) " }, { text: "arabo", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ny fitaovana fitaterana telo nampiasain'ny mpifindra monina ary lazao ny mampiavaka ny iray.",
      items: [],
      corrige: [[{ text: "Lakana misy fanary (hazo iray misy fanary hampitony azy) ; sambo zairina (hazo zairina tady, tsy misy fantsika) ; botry (sambo arabo misy lay telozoro)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["lova aostronezianina", "lova afrikanina", "vary", "omby", "lakana misy fanary", "botry"],
    sections: [
      {
        titre: "1. Ny lova aostronezianina sy indonezianina",
        paras: [],
        puces: [
          "NY TENY : ny fototry ny teny malagasy dia iray fianakaviana amin'ny tenin'i Borneo (maanyan) — vary, tany, lanitra... ;",
          "NY VARY sy ny TANIMBARY AN-TANETY (terrasse) toy ny hita any amin'ny tanin'ny Betsileo ;",
          "NY LAKANA MISY FANARY sy ny fahaizana mitety ranomasina ; ny jono ;",
          "NY TRANO HAZO mahitsizoro sy ny tenona (lamba).",
        ],
      },
      {
        titre: "2. Ny lova afrikanina",
        paras: [],
        puces: [
          "NY FIOMPIANA OMBY : ivon'ny harena sy ny fombafomba (ny omby no refin'ny harena any amin'ny faritra maro) ;",
          "NY ANARAM-BIBY nindramina tamin'ny teny bantoa sy swahili : omby, ondry, akoho... ;",
          "SINGA AMIN'NY MOZIKA (amponga) sy ny dihy ary ny fomba amam-panao.",
        ],
      },
      {
        titre: "3. Ny fitaovana fitaterana",
        paras: [
          "Ny dian'ny mpifindra monina dia nampiasa fitaovana telo malaza : ny LAKANA MISY FANARY aostronezianina (ny fanary no mampitony azy amin'ny onja) ; ny SAMBO ZAIRINA (bateau cousu : hazo zairina tady fa tsy misy fantsika vy) ; ary ny BOTRY (boutre) arabo misy lay telozoro, mbola hita any avaratra andrefana mandraka androany.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ny fiainan'ny tantsaha malagasy iray : mamboly vary izy, miompy omby, mipetraka an-trano hazo. Avy amin'ny lova inona avy ireo singa telo ireo ? Vahaolana : ny vary sy ny trano hazo dia lova aostronezianina/indonezianina ; ny omby dia lova afrikanina — hita ao amin'ny fiainany andavanandro ny fifangaroan'ny sivilizasiona roa.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny tanimbary an-tanety any Betsileo dia mitovy endrika amin'ny any Bali sy Java (Indonezia) ; ny omby mitangorona amin'ny valan'ny Antandroy kosa dia mampahatsiahy ny an'ny mpiompy any Afrika atsinanana. »",
      "1. Inona no itovizan'ny tanimbary betsileo sy ny any Indonezia ?",
      "2. Inona kosa no mampitovy ny atsimo amin'i Afrika ?",
      "3. Inona no porofoin'izany fitoviana izany ?",
    ],
  },
  rakibolana: [
    { mg: "Lakana misy fanary", fr: "Pirogue à balancier" },
    { mg: "Sambo zairina", fr: "Bateau cousu" },
    { mg: "Botry", fr: "Boutre" },
    { mg: "Tanimbary an-tanety", fr: "Rizière en terrasse" },
    { mg: "Tenona", fr: "Tissage" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny teny malagasy dia iray fianakaviana amin'ny teny bantoa. b) Ny omby dia lova afrikanina. d) Ny sambo zairina dia zairina tady fa tsy misy fantsika. e) Ny tanimbary an-tanety dia hita any Betsileo. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : amin'ny tenin'i Borneo (aostronezianina)", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Sokajio (aostronezianina / afrikanina) : vary ; omby ; lakana misy fanary ; amponga ; tenona ; anaram-biby.",
      items: [],
      corrige: [[{ text: "Aostronezianina : vary, lakana misy fanary, tenona", cle: true }, { text: " ; " }, { text: "afrikanina : omby, amponga, anaram-biby", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : hazavao ny hoe « ny teny malagasy dia mitantara ny fiavian'ny Malagasy ».",
      items: [],
      corrige: [[{ text: "Ny fototry ny teny dia aostronezianina fa misy teny nindramina tamin'ny bantoa (omby) sy ny arabo (salama, alahady) ; ny teny àry dia toy ny tahirin-tantaran'ny onja nifanesy", cle: true }, { text: "." }]],
    },
  ],
};

const S26 = {
  numero: 26, total: 32, lohahevitra: LH,
  titre: "Ny lova navelan'ny sivilizasiona arabo-silamo",
  tanjona: "mamantatra ny lova navelan'ny sivilizasiona arabo-silamo ao amin'ny sivilizasiona malagasy",
  fanovozanKevitra: DOC,
  fitaovana: "Sarin'ny sorabe sy ny toeram-barotra, solaitrabe",
  image: "images/img_s26.png",
  imageLegende: "Ny sorabe sy ny toeram-barotra arabo teo amin'ny morontsiraka",
  famerenana: {
    qa: [
      { q: "Iza ny Islamizé ary oviana izy no tonga ?", ra: "Antalaotra, mponin'Iharana, Zafiraminia, Antemoro — taonjato IX sy taoriany." },
      { q: "Inona ny sambo arabo misy lay telozoro ?", ra: "Ny botry." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ny anaran'ny andro — alatsinainy, talata, alarobia... — avy amin'ny teny inona ? Ary ny sikidy sy ny mpanandro ? »",
      "V.A. : Avy amin'ny teny arabo avokoa — lalina ny lova arabo-silamo ao amin'ny kolontsaina malagasy.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny lova navelan'ny sivilizasiona arabo-silamo ao amin'ny fiainana malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny mpampianatra : sarin'ny SORABE (teny malagasy soratana amin'ny tarehin-tsoratra arabo), ny anaran'ny andro sy ny volana, ny toeram-barotra (comptoirs) teo amin'ny morontsiraka. Hazavaina fa tamin'ny alalan'ny varotra sy ny fonenana no nidiran'ireo lova ireo.",
    mpianatra: "Mandinika ny sary sy ny ohatra.",
    technique: "Fandinihana sary sy ohatra", support: "Sary, fafana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe toeram-barotra (comptoir) ?", ra: "Tanàna kely naorin'ny mpivarotra vahiny teo amoron-tsiraka hanaovana varotra (Mahilaka, Vohémar...) ; nampiasa vola sy fandanjana izy ireo." },
      { q: "Inona ny sorabe ?", ra: "Ny teny malagasy soratana amin'ny tarehin-tsoratra arabo, notehirizin'ny katibo Antemoro tany atsimo atsinanana — soratra voalohany teto Madagasikara." },
      { q: "Inona ny lova amin'ny fandaminana ny fotoana ?", ra: "Ny anaran'ny andro (alahady, alatsinainy, talata...) sy ny volana malagasy taloha (alahamady, adaoro...) dia avy amin'ny arabo ; ny fanandroana (astrologia) koa." },
      { q: "Inona ny lova amin'ny fomba amam-panao ?", ra: "Ny sikidy (geomancie), ny famorana (circoncision), ny fadin-kena (kisoa any amin'ny faritra sasany), singa amin'ny fanjakana (ny hevitra hoe mpanjaka masina sy ny anaram-boninahitra sasany)." },
      { q: "Inona ny lova amin'ny varotra ?", ra: "Ny vola sy ny fandanjana, ny isa arabo, ny varotra an-dranomasina — nampiditra an'i Madagasikara tao amin'ny tambajotran'ny ranomasimbe indianina." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny arabo-silamo dia namela ny sorabe, ny anaran'ny andro, ny sikidy sy ny fanandroana, ny famorana ary ny varotra an-dranomasina — lova mbola velona ao amin'ny kolontsaina malagasy.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Lova arabo-silamo sa tsia ? a) ny sorabe ; b) ny tanimbary an-tanety ; d) ny anaran'ny andro ; e) ny sikidy.",
      items: [],
      corrige: [[{ text: "a) eny", cle: true }, { text: " ; b) " }, { text: "tsia (indonezianina)", cle: true }, { text: " ; d) " }, { text: "eny", cle: true }, { text: " ; e) " }, { text: "eny", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Inona ny sorabe ary nahoana izy no manan-danja amin'ny tantaran'i Madagasikara ?",
      items: [],
      corrige: [[{ text: "Teny malagasy soratana amin'ny tarehin-tsoratra arabo, notehirizin'ny katibo Antemoro ; izy no soratra voalohany teto ka loharano an-tsoratra tranainy indrindra momba ny tantara malagasy", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["toeram-barotra", "sorabe", "katibo", "sikidy", "fanandroana", "famorana"],
    sections: [
      {
        titre: "1. Ny varotra sy ny toeram-barotra",
        paras: [
          "Ny mpivarotra arabo sy ny Islamizé dia nanorina TOERAM-BAROTRA (comptoirs) teo amin'ny morontsiraka : Mahilaka, Vohémar, ny tanànan'ny Antalaotra any avaratra andrefana. Nentin'izy ireo ny VOLA, ny FANDANJANA, ny ISA ARABO ary ny varotra lavitra (vakana, vilany, lamba nifanakalo tamin'ny vato soa, ny hazo manitra, ny andevo). Tafiditra tao amin'ny tambajotran'ny RANOMASIMBE INDIANINA i Madagasikara.",
        ],
      },
      {
        titre: "2. Ny sorabe sy ny fandaminana ny fotoana",
        paras: [
          "Ny SORABE no lova ara-tsoratra lehibe indrindra : ny teny malagasy soratana amin'ny tarehin-tsoratra arabo, notehirizin'ny KATIBO (mpahay soratra) Antemoro tany atsimo atsinanana. Mirakitra tantara, fanandroana ary fanafody izy ireo — ny loharano an-tsoratra tranainy indrindra teto Madagasikara.",
          "Avy amin'ny arabo koa ny ANARAN'NY ANDRO (alahady, alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy) sy ny anaran'ny volana taloha (alahamady, adaoro, adizaoza...) ary ny FANANDROANA (fahaizana mamaky ny vintana amin'ny kintana).",
        ],
      },
      {
        titre: "3. Ny fomba amam-panao sy ny fanjakana",
        paras: [],
        puces: [
          "NY SIKIDY (geomancie : famakiana ny vintana amin'ny voan-tsikidy) sy ny MPANANDRO ;",
          "NY FAMORANA (circoncision) izay lasa fomba malagasy iombonana ;",
          "FADY sasany (toy ny fadin-kisoa any amin'ny faritra atsimo atsinanana) ;",
          "SINGA AMIN'NY FANJAKANA : ny hevitra hoe mpanjaka masina sy ny anaram-boninahitra sasany (andriana...) dia nisy fitaoman'ny fomba arabo ;",
          "NY MARITRANO : plan-tanàna sy trano vato tany amin'ny toeram-barotra.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Manazava ny mpanandro iray fa « alakamisy no andro tsara hanaovana ny famadihana ». Lova avy aiza avy ny singa roa ao amin'io fehezanteny io ? Vahaolana : ny anarana hoe « alakamisy » sy ny fanandroana dia lova arabo-silamo ; ny famadihana kosa dia fomba malagasy ifotony (fanajana ny razana) — mifangaro ao amin'ny kolontsaina malagasy ny lova samihafa.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny katibo Antemoro dia nitahiry ny sorabe tao amin'ny tranobe masina ary nampianatra azy tamin'ny olom-bitsy voafidy. Ny mpanjaka merina aza dia naka katibo ho mpanolotsaina tao amin'ny lapany. »",
      "1. Iza no nitahiry ny sorabe ary taiza ?",
      "2. Inona no porofon'ny fahalazan'ny katibo hatrany Imerina ?",
      "3. Nahoana no sarobidy ho an'ny mpahay tantara ny sorabe ?",
    ],
  },
  rakibolana: [
    { mg: "Toeram-barotra", fr: "Comptoir commercial" },
    { mg: "Sorabe", fr: "Sorabe (écriture arabico-malgache)" },
    { mg: "Katibo", fr: "Scribe antemoro" },
    { mg: "Sikidy", fr: "Géomancie" },
    { mg: "Fanandroana", fr: "Astrologie" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny teny malagasy soratana amin'ny tarehin-tsoratra arabo dia ny … ; ny mpitahiry azy dia ny … Antemoro ; ny anaran'ny andro toy ny … dia avy amin'ny arabo ; ny famakiana ny vintana amin'ny voan-tsikidy dia ny … (1 isa avy)",
      items: [],
      corrige: [[{ text: "sorabe", cle: true }, { text: " ; " }, { text: "katibo", cle: true }, { text: " ; " }, { text: "alahady/alatsinainy...", cle: true }, { text: " ; " }, { text: "sikidy", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao lova arabo-silamo telo amin'ny varotra.",
      items: [],
      corrige: [[{ text: "Ny vola sy ny fandanjana ; ny isa arabo ; ny toeram-barotra sy ny varotra an-dranomasina (botry)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny sorabe dia teny arabo soratana amin'ny abidy latina. b) Ny famorana dia lasa fomba malagasy iombonana. d) Ny fanandroana dia lova arabo. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Diso : teny malagasy amin'ny tarehin-tsoratra arabo", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
};

const S27 = {
  numero: 27, total: 32, lohahevitra: LH,
  titre: "Ny lova tandrefana sy ny maha-malagasy ny Malagasy",
  tanjona: "mamantatra ny lova navelan'ny sivilizasiona tandrefana ary manome lanja ny maha-malagasy",
  fanovozanKevitra: DOC,
  fitaovana: "Sary (sekoly, fiangonana, seranana), solaitrabe",
  image: "images/img_s27.png",
  imageLegende: "Sekoly, fiangonana ary seranan-tsambo : ny lova tandrefana",
  famerenana: {
    qa: [
      { q: "Inona ny lova arabo-silamo roa amin'ny soratra sy ny fotoana ?", ra: "Ny sorabe ; ny anaran'ny andro sy ny fanandroana." },
      { q: "Oviana no tonga ny Eoropeanina voalohany ?", ra: "Taonjato XV (ny Portogey)." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ny sekoly, ny abidy anoratantsika, ny fiangonana — lova avy aiza ireo ? Ary hatramin'ny oviana ? »",
      "V.A. : Lova tandrefana, niditra indrindra tamin'ny taonjato XIX — hojerentsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny lova navelan'ny sivilizasiona tandrefana sy ny famaritana ny maha-malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sary ny mpampianatra : sekoly, fiangonana, seranan-tsambo, tafika. Hazavaina fa tamin'ny alalan'ny varotra (XVI-XVIII) sy ny misionera sy ny fanjakana merina (XIX) ary ny fanjanahantany (1896-1960) no nidiran'ny lova tandrefana.",
    mpianatra: "Mandinika ny sary.",
    technique: "Fandinihana sary", support: "Sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny lova tandrefana amin'ny toekarena ?", ra: "Ny varotra an-dranomasina lehibe (sambo be), ny indostria voalohany, ny vola vahiny (ariary avy amin'ny real espaniola)." },
      { q: "Inona ny lova amin'ny fanjakana ?", ra: "Ny hevitra hoe fanjakana maoderina : ministera, tafika voalamina (nampian'ny Anglisy tamin'ny andron-dRadama I), lalàna an-tsoratra, ary tatỳ aoriana ny Repoblika sy ny soatoavina repoblikanina." },
      { q: "Inona ny lova ara-kolontsaina ?", ra: "Ny KRISTIANISMA (misionera LMS 1818/1820, katolika...), ny SEKOLY (1818 : sekoly voalohany tao Toamasina ; abidy latina 1823), ny fitsaboana maoderina, ny boky sy ny gazety." },
      { q: "Nanova ny fiainana malagasy ve ireo lova ireo ?", ra: "Eny : niova ny fitafy, ny trano (biriky), ny fianarana ; nefa tsy nanafoana ny fomba malagasy fa nifangaro taminy." },
      { q: "Inona àry ny maha-malagasy ?", ra: "Ny teny malagasy, ny fihavanana, ny fanajana ny razana, ny fomba amam-panao — nofenoin'ny lova vahiny fa tsy nosoloany : ny fahaizana mandray sy mampifangaro no maha-malagasy." },
    ],
    technique: "Fanontaniana mitarika", support: "Sary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : ny tandrefana dia namela ny kristianisma, ny sekoly sy ny abidy latina, ny fanjakana maoderina ary ny varotra lehibe ; ny maha-malagasy dia ny fahaizana mandray ireo lova ireo sady mitana ny fototra (teny, fihavanana, razana).",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Lova tandrefana sa arabo-silamo ? a) ny abidy latina ; b) ny sorabe ; d) ny kristianisma ; e) ny sikidy.",
      items: [],
      corrige: [[{ text: "a) tandrefana", cle: true }, { text: " ; b) " }, { text: "arabo-silamo", cle: true }, { text: " ; d) " }, { text: "tandrefana", cle: true }, { text: " ; e) " }, { text: "arabo-silamo", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao lova tandrefana telo ary hazavao amin'ny fehezanteny iray ny hoe « nifangaro fa tsy nifanolo » ny lova eto Madagasikara.",
      items: [],
      corrige: [[{ text: "Kristianisma ; sekoly sy abidy latina ; fanjakana maoderina (na : varotra lehibe, fitsaboana)", cle: true }, { text: " — " }, { text: "nandray ny vaovao ny Malagasy nefa nitana ny teniny sy ny fombany : nifangaro ireo lova fa tsy nisolo ny maha-malagasy", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["kristianisma", "sekoly", "abidy latina", "fanjakana maoderina", "maha-malagasy"],
    sections: [
      {
        titre: "1. Ny lova tandrefana",
        paras: [],
        puces: [
          "ARA-TOEKARENA : ny varotra an-dranomasina lehibe, ny indostria voalohany, ny seranan-tsambo, ny vola (ny ariary dia avy amin'ny real espaniola nozaraina) ;",
          "ARA-PANJAKANA : ny fanjakana maoderina (ministera, tafika voalamina, lalàna an-tsoratra tamin'ny andron'ny mpanjaka merina) ary tatỳ aoriana ny Repoblika sy ny demokrasia ;",
          "ARA-KOLONTSAINA : ny KRISTIANISMA (misionera LMS tonga 1818/1820, ny katolika...), ny SEKOLY (ny voalohany tao Toamasina 1818) sy ny ABIDY LATINA (1823), ny fitsaboana maoderina, ny boky sy ny gazety.",
        ],
      },
      {
        titre: "2. Fifangaroana fa tsy fifanoloana",
        paras: [
          "Ireo lova tandrefana ireo dia niditra indrindra tamin'ny taonjato XIX (misionera sy fanjakana merina) sy tamin'ny fanjanahantany (1896-1960). Nanova ny fitafy, ny trano (biriky nampidirin'i Jean Laborde sy ny misionera), ny fianarana sy ny finoana izy — nefa TSY NANAFOANA ny fomba malagasy : ny famadihana sy ny fiangonana, ny kabary sy ny kabinetra dia miara-dalana ao amin'ny fiaraha-monina malagasy.",
        ],
      },
      {
        titre: "3. Ny maha-malagasy ny Malagasy",
        paras: [
          "Ny MAHA-MALAGASY dia tsy hoe tsy nandray na inona na inona avy any ivelany — fa ny FAHAIZANA MANDRAY SY MAMPIFANGARO : ny teny malagasy iray, ny fihavanana, ny fanajana ny razana sy ny tanindrazana no fototra ; ny lova aostronezianina, afrikanina, arabo ary tandrefana no nampanan-karena azy. Vahoaka iray, loharano maro — izany no hasin'ny kolontsaina malagasy ka tokony hotandrovana sy hampitaina.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Tamin'ny 1818 dia nanokatra ny sekoly voalohany tao Toamasina ny misionera ; tamin'ny 1823 dia nofidin-dRadama I ny abidy latina. Roapolo taona taty aoriana dia efa an'aliny ny Malagasy nahay namaky teny sy nanoratra. »",
      "1. Oviana sy taiza ny sekoly voalohany ?",
      "2. Inona no fanapahan-kevitr'i Radama I tamin'ny 1823 ?",
      "3. Inona no vokatr'izany roapolo taona taty aoriana ?",
    ],
  },
  rakibolana: [
    { mg: "Misionera", fr: "Missionnaire" },
    { mg: "Indostria", fr: "Industrie" },
    { mg: "Fanjakana maoderina", fr: "État moderne" },
    { mg: "Maha-malagasy", fr: "Identité malgache" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. 1818 / 2. 1823 / 3. taonjato XV / 4. 1896-1960 — a. abidy latina ; b. sekoly voalohany tao Toamasina ; d. fanjanahantany ; e. Eoropeanina voalohany. (1 isa avy)",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-e", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ny fototra telo tsy miova amin'ny maha-malagasy.",
      items: [],
      corrige: [[{ text: "Ny teny malagasy ; ny fihavanana ; ny fanajana ny razana sy ny tanindrazana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fafana famintinana : ataovy lisitra ny lova iray avy amin'ny fiaviana efatra (aostronezianina, afrikanina, arabo-silamo, tandrefana).",
      items: [],
      corrige: [[{ text: "Aostronezianina : teny/vary/lakana ; afrikanina : omby ; arabo-silamo : sorabe/anaran'ny andro ; tandrefana : sekoly/abidy latina/kristianisma", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH6: { titre: LH, seances: [S25, S26, S27] } };
