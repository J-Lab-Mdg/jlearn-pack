// data-lh3.js — LOHAHEVITRA III : NY FANONDRANANA ANDEVO (S7-S9) — Tantara T5
// Loharano : PE T5 (tak. 142-144) sy FRP T5 (LFK 3-a, 3-b, 3-d, 3-e, 3-f)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "III — Ny fanondranana andevo nifanaovan'i Madagasikara tamin'i Afrika atsinanana sy ireo Nosy Mascareignes";
const FAHENDRENA = "Fanajana ny fiainana sy ny zon'olombelona";

const seances = [

// ============================================================ SEHO 7
{
  numero: 7, total: 30, lohahevitra: LH,
  titre: "Ireo fanjakana nivarotra andevo sy ny antony",
  tanjona: "mitanisa ireo fanjakana nivarotra andevo sy manazava ny antony nanaovana izany",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fanontaniana/valiny ; asa an-tarika",
  fanovozanKevitra: DOC + " (LFK 3-a)",
  fitaovana: "Lahatsoratra ; sari-tany ; solaitrabe",
  image: "images/img_s07.png",
  imageLegende: "Ny fifanakalozana : andevo natakalo basy sy vanja ary entana vazaha",
  famerenana: {
    qa: [
      { q: "Tanisao ireo fanjakana efatra vaventy nijoro teto Madagasikara.", ra: "Sakalava, Merina, Betsimisaraka, Betsileo." },
      { q: "Iza avy ireo saranga telo teo amin'ny fiarahamonina ?", ra: "Andriana, hova, andevo — ny andevo dia ireo resy an'ady." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Araka ny hitantsika, ny andevo dia ireo resy an'ady. Fantatrareo ve fa nisy fotoana ny olona nivarotana toy ny entana ? Inona no fahatsapanareo ny amin'izany ? »",
    ],
    mpianatra: "Maneho ny heviny : tsy mety ny mivarotra olona satria manan-kasina ny aina.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo fanjakana nivarotra andevo sy ny antony nanaovany izany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky lahatsoratra momba ny varotra andevo ny mpampianatra ary mitarika ny mpianatra hamantatra : iza avy ireo fanjakana nivarotra ? Inona no notakalozana ?",
    mpianatra: "Mihaino, mamaky ary manamarika ireo fanjakana sy ireo entana natakalo.",
    technique: "Famakiana lahatsoratra arahina fanontaniana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao ireo fanjakana nivarotra andevo.", ra: "Ny fanjakana Antakarana, Sakalava, Betsimisaraka, Merina, Betsileo, Antemoro, Antanosy ary Mahafaly (fanjakana valo)." },
      { q: "Inona ny antony ara-tafika nivarotana andevo ?", ra: "Nilaina ny basy sy ny vanja mba hanamafisana ny tafika sy hanafihana ny fanjakana hafa." },
      { q: "Inona ny antony ara-pitaovana ?", ra: "Nila entana vazaha ny mpanjaka : toaka (whisky), sigara, fitaratra, lamba sy fitaovana hafa." },
      { q: "Inona ny antony ara-toekarena ?", ra: "Nahazoana vola ny varotra andevo ka nampitombo ny haren'ny mpanjaka sy ny fanjakany." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : fanjakana valo no nivarotra andevo ; ny antony dia ara-tafika (basy sy vanja), ara-pitaovana (entana vazaha) ary ara-toekarena (vola).",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny antony nivarotana andevo dia ara-…, ara-… ary ara-… .",
      items: [],
      corrige: [[{ text: "tafika", cle: true }, { text: " ; " }, { text: "pitaovana", cle: true }, { text: " ; " }, { text: "toekarena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao fanjakana efatra nivarotra andevo ary lazao antony roa nanaovany izany.",
      items: [],
      corrige: [[{ text: "Ohatra : Sakalava, Merina, Betsimisaraka, Antakarana", cle: true }, { text: " ; antony : " }, { text: "nila basy sy vanja ho an'ny tafika ; nahazoana vola sy entana vazaha", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanondranana andevo", "basy", "vanja", "fifanakalozana", "toekarena"],
    sections: [
      {
        titre: "1. Ireo fanjakana nivarotra andevo",
        paras: [
          "Fanjakana valo teto Madagasikara no nivarotra andevo tamin'ny taonjato XVII ka hatramin'ny XIX : ny fanjakana Antakarana, Sakalava, Betsimisaraka, Merina, Betsileo, Antemoro, Antanosy ary Mahafaly.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny antony nivarotana andevo",
        paras: [],
        puces: [
          "Antony ara-tafika : nilain'ny mpanjaka ny basy sy ny vanja mba hanamafisana ny tafiny sy handresena ny fanjakana hafa.",
          "Antony ara-pitaovana : nila entana avy any ivelany ny mpanjaka sy ny manodidina azy — toaka (whisky), sigara, fitaratra, lamba…",
          "Antony ara-toekarena : nahazoana vola be ny varotra andevo ka nampitombo ny harena sy ny herin'ny fanjakana.",
        ],
      },
    ],
    tahirinKevitra: [
      "Ny andevo natakalo dia ireo babo azo tamin'ny ady nifanaovan'ny fanjakana samy Malagasy. Ny fitaovam-piadiana azo tamin'ny takalo indray no nampiasaina hanafihana fanjakana hafa : nifamahofaho àry ny ady sy ny varotra.",
      "Fanontaniana : Nahoana no nilaza ny mpahay tantara fa « nifamahofaho ny ady sy ny varotra » ?",
      "Valiny : Satria ny ady no nahazoana babo hamidy, ary ny vidin'ny babo (basy sy vanja) no nentina niady indray.",
    ],
  },
  rakibolana: [
    { mg: "Fanondranana andevo", fr: "Traite des esclaves" },
    { mg: "Babo an'ady", fr: "Captif de guerre" },
    { mg: "Vanja", fr: "Poudre à canon" },
    { mg: "Fifanakalozana", fr: "Échange, troc" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Fanjakana valo no nivarotra andevo. b) Ny andevo namidy dia ireo babo azo an'ady. d) Vola ihany no notakalozana ny andevo. e) Ny basy sy ny vanja dia nanamafy ny tafiky ny mpanjaka.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : nisy koa ny basy, vanja, toaka, sigara, fitaratra…", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ireo antony telo nivarotan'ny mpanjaka andevo.",
      items: [],
      corrige: [[{ text: "Ara-tafika (basy sy vanja) ; ara-pitaovana (entana vazaha) ; ara-toekarena (vola)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana no mifanohitra amin'ny zon'olombelona ny varotra andevo ?",
      items: [],
      corrige: [[{ text: "Satria ny olombelona dia manan-kasina ary tsy azo amidy toy ny entana ; ny varotra andevo dia manitsakitsaka ny fahafahana sy ny fiainan'ny olona", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 8
{
  numero: 8, total: 30, lohahevitra: LH,
  titre: "Ny fisehon'ny varotra andevo : ny toerana sy ny takalo",
  tanjona: "maneho ny fisehon'ny varotra andevo, ireo toerana nanaovana azy ary ireo entana natakalo",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana sari-tany ; famakiana lahatsoratra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 3-b, 3-e)",
  fitaovana: "Sari-tanin'ny lalan'ny varotra andevo ; lahatsoratra",
  image: "images/img_s08.png",
  imageLegende: "Ny seranana amoron-tsiraka : toerana nanaovana ny varotra andevo",
  famerenana: {
    qa: [
      { q: "Firy ny fanjakana nivarotra andevo ? Tanisao ny sasany.", ra: "Valo : Antakarana, Sakalava, Betsimisaraka, Merina, Betsileo, Antemoro, Antanosy, Mahafaly." },
      { q: "Inona avy ireo antony nivarotana andevo ?", ra: "Ara-tafika, ara-pitaovana, ara-toekarena." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Avy aiza ireo andevo namidy ? Ary taiza no nivarotana azy ? Andao hojerentsika amin'ny sari-tany. »",
    ],
    mpianatra: "Maminavina ary mijery ny sari-tany.",
    technique: "Resadresaka",
    support: "Sari-tany",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fisehon'ny varotra andevo : ny toerana sy ny entana natakalo.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny sari-tanin'ny lalan'ny varotra ny mpampianatra : ny fifanafihana tao anatiny, ny tsena an-tanety (Moramanga), ny seranana amoron-tsiraka, ary ny lalana mankany Maurice sy La Réunion ary Afrika atsinanana.",
    mpianatra: "Manaraka ny lalana eo amin'ny sari-tany ary mamantatra ireo toerana.",
    technique: "Fandinihana sari-tany",
    support: "Sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Ahoana no nisehon'ny varotra andevo tao anatin'ny Nosy ?", ra: "Nifanafika ny fanjakana samy Malagasy (ohatra : ny Merina nanafika ny faritra hafa) mba hahazoana babo hamidy ; ny Sakalava kosa nanafika hatrany Mozambika sy Komaoro mba haka andevo." },
      { q: "Iza avy ireo toerana nanaovana ny varotra ?", ra: "Ny tsenan'i Moramanga (avy amin'ny hoe « mora ny zaza manga ») sy ireo seranana amoron-tsiraka." },
      { q: "Nankaiza ireo andevo naondrana ?", ra: "Tany amin'ny Nosy Mascareignes (Maurice sy La Réunion) ary tany Afrika atsinanana." },
      { q: "Inona no natakalo ny andevo ?", ra: "Basy, vanja, toaka, sigara, fitaratra, lamba ary vola ; ny avy eto Madagasikara koa dia nanondrana fary sy landihazo ho any Maurice sy La Réunion." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sari-tany sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny fifanafihana samy Malagasy no nahazoana babo ; namidy tao Moramanga sy tany amin'ny seranana izy ireo ; naondrana tany Mascareignes sy Afrika atsinanana ; natakalo basy, vanja, entana vazaha ary vola.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny tsena malaza nivarotana andevo tao anatin'ny Nosy dia … ; ny andevo naondrana dia nankany amin'ny Nosy … sy tany Afrika … .",
      items: [],
      corrige: [[{ text: "Moramanga", cle: true }, { text: " ; " }, { text: "Mascareignes (Maurice sy La Réunion)", cle: true }, { text: " ; " }, { text: "atsinanana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny telo ny fisehon'ny varotra andevo : ny fomba nahazoana ny andevo, ny toerana nivarotana ary ny toerana nanondranana azy.",
      items: [],
      corrige: [[{ text: "Azo tamin'ny fifanafihana samy Malagasy ny babo ; namidy tao Moramanga sy tamin'ny seranana amoron-tsiraka izy ireo ; naondrana tany Maurice, La Réunion ary Afrika atsinanana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Moramanga", "seranana", "Mascareignes", "Maurice", "La Réunion", "takalo"],
    sections: [
      {
        titre: "1. Ny fomba nahazoana ny andevo",
        paras: [
          "Nifanafika ny fanjakana samy Malagasy mba hahazoana babo : ny tafika merina, ohatra, nanafika ny faritra Sakalava sy ny faritra hafa. Ny Sakalava kosa nandeha lakana hatrany Mozambika sy ny Nosy Komaoro mba haka andevo.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo toerana nanaovana ny varotra",
        paras: [],
        puces: [
          "Ny tsenan'i Moramanga : tsena an-tanety malaza nivarotana andevo ; avy amin'ny hoe « mora ny zaza manga » hono ny anarany.",
          "Ireo seranana amoron-tsiraka atsinanana sy andrefana : teo no nihaonan'ny mpivarotra Malagasy sy ny sambo vahiny.",
        ],
      },
      {
        titre: "3. Ny toerana nanondranana sy ny entana natakalo",
        paras: [
          "Ny andevo dia naondrana tany amin'ny Nosy Mascareignes (Maurice sy La Réunion) mba hiasa any amin'ny toham-boly fary sy landihazo, ary tany Afrika atsinanana.",
          "Ny takalo azon'ny mpanjaka Malagasy : basy, vanja, toaka, sigara, fitaratra, lamba ary vola. Ny Betsimisaraka sy ny Merina no mpivarotra lehibe tamin'ny seranana atsinanana.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Tany amin'ny Nosy Mascareignes, ny andevo Malagasy dia nampiasaina tamin'ny toham-boly fary sy landihazo ary ny asa an-trano. Ny mpiasa maro dia maty noho ny hasarotan'ny asa sy ny fitondrana henjana.",
      "Fanontaniana : Inona no asa nampanaovina ny andevo Malagasy tany Mascareignes ?",
      "Valiny : Ny fambolena fary sy landihazo ary ny asa an-trano.",
    ],
  },
  rakibolana: [
    { mg: "Seranana", fr: "Port" },
    { mg: "Fanondranana", fr: "Exportation" },
    { mg: "Toham-boly", fr: "Plantation" },
    { mg: "Fary", fr: "Canne à sucre" },
    { mg: "Landihazo", fr: "Coton" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. Moramanga / 2. Mascareignes / 3. Mozambika / 4. seranana — a. toerana nakan'ny Sakalava andevo ; b. tsena an-tanety ; d. toerana nihaonana tamin'ny sambo vahiny ; e. Maurice sy La Réunion.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao entana dimy natakalo ny andevo.",
      items: [],
      corrige: [[{ text: "Basy, vanja, toaka, sigara, fitaratra (na lamba, vola)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny Sakalava nanafika hatrany Mozambika. b) Ny andevo naondrana dia niasa tamin'ny toham-boly fary. d) Ny varotra andevo dia natao tany Eoropa ihany.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : tany Mascareignes sy Afrika atsinanana", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 9
{
  numero: 9, total: 30, lohahevitra: LH,
  titre: "Ny fiantraikan'ny varotra andevo",
  tanjona: "manazava ny fiantraikan'ny varotra andevo teo amin'ny fanjakana Malagasy sy ny fiarahamonina",
  fahendrena: FAHENDRENA,
  tetika: "Asa an-tarika ; fifanakalozan-kevitra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 3-d, 3-f)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s09.png",
  imageLegende: "Vokatry ny varotra andevo : tanàna sasany rava, fanjakana sasany nihanahery",
  famerenana: {
    qa: [
      { q: "Taiza no nanondranana ny andevo Malagasy ?", ra: "Tany amin'ny Nosy Mascareignes (Maurice sy La Réunion) sy tany Afrika atsinanana." },
      { q: "Inona avy no natakalo azy ?", ra: "Basy, vanja, toaka, sigara, fitaratra, lamba, vola." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Raha misy fianakaviana very olona lahy matanjaka maro, inona no ho vokany eo amin'ny asa sy ny fiainany ? Toy izany koa ny firenena namidy olona maro. »",
    ],
    mpianatra: "Mamaly : mihena ny mpiasa, mitotongana ny famokarana, malahelo ny fianakaviana.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fiantraikan'ny varotra andevo teo amin'ny fanjakana sy ny fiarahamonina Malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny kilasy ho tarika ny mpampianatra : ny tarika iray mitady ny vokatra tsara ho an'ny fanjakana mpivarotra, ny iray mitady ny vokatra ratsy ho an'ny fiarahamonina. Atolotra ny lahatsoratra.",
    mpianatra: "Miara-miasa isan-tarika, mamaky ny lahatsoratra ary mampiseho ny valiny.",
    technique: "Asa an-tarika",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny fiantraikany teo amin'ireo fanjakana mpivarotra ?", ra: "Nihanahery sy nanan-karena ny fanjakana Sakalava sy Merina : nitombo ny basy sy ny vanja ary ny volany ka nanitatra ny fahefany izy ireo." },
      { q: "Inona ny fiantraikany teo amin'ireo fanjakana hafa ?", ra: "Rava sy nihalemy ireo fanjakana voafana matetika : very ny mponiny, ringana ny tanànany." },
      { q: "Inona ny fiantraikany teo amin'ny famokarana ?", ra: "Nihavitsy ny hery mpamokatra satria ny olona matanjaka no namidy, ka nitotongana ny fambolena sy ny asa." },
      { q: "Inona ny fiantraikany teo amin'ny fiarahamonina ?", ra: "Nisaraka ny fianakaviana, niely ny tahotra sy ny fifampiandaniana, ary simba ny fihavanana teo amin'ny samy Malagasy." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : nampahery ny fanjakana mpivarotra (Sakalava, Merina) ny varotra andevo fa nandrava ny fanjakana hafa ; nihavitsy ny hery mpamokatra, nisaraka ny fianakaviana ary simba ny fihavanana. Manitsakitsaka ny zon'olombelona ny fivarotana olona.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ho « vokatra tsara ho an'ny mpivarotra » na « vokatra ratsy ho an'ny fiarahamonina » : nitombo ny basy sy ny vola ; nihavitsy ny mpamokatra ; nisaraka ny fianakaviana ; nanitatra ny fahefany ny Merina sy ny Sakalava.",
      items: [],
      corrige: [[{ text: "Tsara ho an'ny mpivarotra : nitombo ny basy sy ny vola ; nanitatra ny fahefany ny Merina sy ny Sakalava", cle: true }, { text: " — " }, { text: "Ratsy : nihavitsy ny mpamokatra ; nisaraka ny fianakaviana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao fiantraikany efatra nateraky ny varotra andevo teto Madagasikara.",
      items: [],
      corrige: [[{ text: "Nihanahery ny Sakalava sy ny Merina ; rava ireo fanjakana voafana ; nihavitsy ny hery mpamokatra ; nisaraka ny fianakaviana ka simba ny fihavanana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fiantraikany", "hery mpamokatra", "fihavanana", "zon'olombelona"],
    sections: [
      {
        titre: "1. Teo amin'ireo fanjakana mpivarotra",
        paras: [
          "Nihanahery sy nanan-karena ireo fanjakana mpivarotra andevo, indrindra ny Sakalava sy ny Merina : nitombo ny basy aman-bajany sy ny volany ka afaka nanitatra ny fahefany sy nandresy ny fanjakana hafa izy ireo.",
        ],
        puces: [],
      },
      {
        titre: "2. Teo amin'ireo fanjakana voafana sy ny famokarana",
        paras: [],
        puces: [
          "Rava sy nihalemy ireo fanjakana voafana matetika : very ny mponiny, ringana ny tanànany.",
          "Nihavitsy ny hery mpamokatra satria ny olona salama sy matanjaka no namidy, ka nitotongana ny fambolena sy ny famokarana.",
        ],
      },
      {
        titre: "3. Teo amin'ny fiarahamonina",
        paras: [
          "Nisaraka ny fianakaviana : ny ray, ny reny na ny zanaka dia nentina lavitra tsy niverina intsony. Niely ny tahotra sy ny fifampiandaniana teo amin'ny samy Malagasy ka simba ny fihavanana.",
          "Ny varotra andevo dia manitsakitsaka ny zon'olombelona : ny olombelona rehetra dia manan-kasina ary tsy azo amidy na atao fananana.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Ny olombelona rehetra dia teraka afaka sy mitovy zo sy fahamendrehana. » (Fanambarana iraisam-pirenena momba ny zon'olombelona, andininy voalohany, 1948.)",
      "Fanontaniana : Inona no ifandraisan'ity andininy ity amin'ny varotra andevo ?",
      "Valiny : Mifanohitra tanteraka amin'io zo io ny varotra andevo satria nanaisotra ny fahafahan'ny olona sy ny fahamendrehany izy.",
    ],
  },
  rakibolana: [
    { mg: "Fiantraikany", fr: "Conséquence, impact" },
    { mg: "Hery mpamokatra", fr: "Forces productives" },
    { mg: "Voafana", fr: "Attaqué" },
    { mg: "Fahamendrehana", fr: "Dignité" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Nampahery ny fanjakana Sakalava sy Merina ny varotra andevo. b) Nitombo ny hery mpamokatra teto Madagasikara. d) Nisaraka ny fianakaviana maro. e) Nanamafy ny fihavanana ny fifanafihana.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : nihavitsy ny hery mpamokatra", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : nosimbany ny fihavanana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa, hazavao : nahoana no nihavitsy ny hery mpamokatra ?",
      items: [],
      corrige: [[{ text: "Satria ny olona salama sy matanjaka no namidy ho andevo ; tsy nisy intsony ny sandry hiasa ka nitotongana ny famokarana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa ny hevitrao : nahoana isika no tokony hanaja ny fiainana sy ny zon'olombelona ?",
      items: [],
      corrige: [[{ text: "Valiny malalaka — ohatra : manan-kasina ny aina ary mitovy zo ny olombelona rehetra ; ny fanajana izany no miaro ny fihavanana sy ny fiadanana", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
