// data-tombana.js — Ireo seho famerenana sy tombana (S3, S6, S10, S17, S25, S30) — Tantara T5
// Fanamarihana : seho fampianarana ihany no misy takela sy lesona feno ;
// ireto seho ireto dia natokana ho famerenana sy tombana isaky ny lohahevitra (20 isa).

const S3 = {
  type: "fanadinana", numero: 3, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra I",
  lohahevitra: "I — Ny tranga ara-tantara sy ny zava-mitranga",
  famerenana: [
    "Ny ZAVA-MITRANGA dia zavatra miseho amin'ny fiainana andavanandro (fety, fambolen-kazo, asa tanamaro, fifidianana…).",
    "Ny TRANGA ARA-TANTARA dia zava-nitranga tamin'ny fotoana sy toerana voafaritra teo aloha, nisy fiantraikany teo amin'ny fiainan'ny olona ka tadidin'ny mpiara-belona.",
    "Misy zava-mitranga eo an-toerana (fetin'ny fokontany, doro tanety, asa tanamaro…) sy zava-mitranga eo amin'ny firenena (fifidianana, fetim-pirenena, fitokanana fotodrafitrasa…).",
    "Ny zava-mitranga dia mety ho lasa tranga ara-tantara rehefa lehibe ny fiantraikany ka voarakitra sy tsaroana.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Fenoy : Ny zava-mitranga dia zavatra miseho amin'ny fiainana … ; ny tranga ara-tantara kosa dia zava-nitranga tamin'ny … sy … voafaritra ka tadidin'ny mpiara-belona.",
      items: [],
      corrige: [[{ text: "andavanandro", cle: true }, { text: " ; " }, { text: "fotoana", cle: true }, { text: " ; " }, { text: "toerana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho « eo an-toerana » na « eo amin'ny firenena » : a) fetin'ny fokontany ; b) fifidianana filoham-pirenena ; d) asa tanamaro fanadiovana lalana ; e) fetim-pirenena 26 jona.",
      items: [],
      corrige: [[{ text: "Eo an-toerana : a, d", cle: true }, { text: " ; " }, { text: "eo amin'ny firenena : b, e", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny tranga ara-tantara dia miseho amin'ny ho avy. b) Ny zava-mitranga rehetra dia lasa tranga ara-tantara avokoa. d) Ny tranga ara-tantara dia misy fiantraikany eo amin'ny fiainan'ny olona.",
      items: [],
      corrige: [[{ text: "a) Diso : zava-nitranga teo aloha izy", cle: true }, { text: " ; b) " }, { text: "Diso : izay manan-danja sy voarakitra ihany", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Omeo ohatra roa amin'ny tranga ara-tantara teo amin'ny firenena malagasy.",
      items: [],
      corrige: [[{ text: "Ohatra : ny nahazoana ny fahaleovantena (26 jona 1960) ; ny nahatongavan'ny fanjanahantany (1896) — valiny malalaka", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Amin'ny fehezanteny roa : ahoana no ahafantarana fa lasa tranga ara-tantara ny zava-mitranga iray ?",
      items: [],
      corrige: [[{ text: "Rehefa lehibe ny fiantraikany teo amin'ny fiainan'ny olona ; voarakitra sy tadidin'ny mpiara-belona izy", cle: true }, { text: "." }]],
    },
  ],
};

const S6 = {
  type: "fanadinana", numero: 6, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra II",
  lohahevitra: "II — Ireo fanjakana nisy teto Madagasikara (taonjato XVI-XIX)",
  famerenana: [
    "Ny FOKO dia fitambarana olona iray fihaviana, manana fomba amam-panao sy fiteny itovizana ; niombonana ny fitaovam-pamokarana ary nifampizarana ny vokatra.",
    "Nitambatra ny foko maromaro ka lasa FANJAKANA : izay zokiolona mahery an'ady no lasa mpanjaka ; nino ny vahoaka fa manana HASINA izy.",
    "Ny saranga telo : ny ANDRIANA, ny HOVA (olontsotra), ny ANDEVO (resy an'ady).",
    "Ny fanjakana efatra vaventy : SAKALAVA (XVI — Andriandahifotsy), MERINA (XVI — Andrianampoinimerina), BETSIMISARAKA (XVII — Ratsimilaho), BETSILEO (XVIII — Andriamanalina).",
    "Andrianampoinimerina (1787-1810) : « Ny ranomasina no valam-parihiko » ; « Fahavaloko ny mosary ».",
  ],
  laza: [
    {
      points: 4,
      consigne: "Fenoy : Ny foko dia fitambarana olona iray …, manana fomba sy … itovizana ; izay zokiolona … an'ady no lasa mpanjaka.",
      items: [],
      corrige: [[{ text: "fihaviana", cle: true }, { text: " ; " }, { text: "fiteny", cle: true }, { text: " ; " }, { text: "mahery", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Tanisao ireo saranga telo teo amin'ny fiarahamonina ary farito ny iray aminy.",
      items: [],
      corrige: [[{ text: "Andriana, hova, andevo", cle: true }, { text: " ; ohatra : " }, { text: "ny andevo dia ireo resy an'ady", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. Sakalava / 2. Merina / 3. Betsimisaraka / 4. Betsileo — a. Ratsimilaho ; b. Andriamanalina ; d. Andriandahifotsy ; e. Andrianampoinimerina.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Iza no nilaza hoe « Ny ranomasina no valam-parihiko » ? Inona no dikan'izany ?",
      items: [],
      corrige: [[{ text: "Andrianampoinimerina", cle: true }, { text: " ; " }, { text: "tiany hipaka hatrany amin'ny ranomasina (ny Nosy manontolo) ny fanjakany", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Andrianjaka no nanorina an'Antananarivo. b) Ny fanjakana Betsileo dia nizara efatra. d) Ratsimilaho dia mpanjaka sakalava.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina (Manandriana, Iarindrano, Isandra, Lalangina)", cle: true }, { text: " ; d) " }, { text: "Diso : mpanjaka betsimisaraka izy", cle: true }, { text: "." }]],
    },
  ],
};

const S10 = {
  type: "fanadinana", numero: 10, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra III",
  lohahevitra: "III — Ny fanondranana andevo",
  famerenana: [
    "Fanjakana VALO no nivarotra andevo : Antakarana, Sakalava, Betsimisaraka, Merina, Betsileo, Antemoro, Antanosy, Mahafaly.",
    "Ny antony : ARA-TAFIKA (basy sy vanja), ARA-PITAOVANA (toaka, sigara, fitaratra, lamba), ARA-TOEKARENA (vola).",
    "Ny fisehony : fifanafihana samy Malagasy nahazoana babo ; ny Sakalava nanafika hatrany Mozambika sy Komaoro.",
    "Ny toerana : ny tsenan'i Moramanga sy ireo seranana amoron-tsiraka ; naondrana tany Mascareignes (Maurice, La Réunion) sy Afrika atsinanana ny andevo.",
    "Ny fiantraikany : nihanahery ny Sakalava sy ny Merina ; rava ny fanjakana voafana ; nihavitsy ny hery mpamokatra ; nisaraka ny fianakaviana ka simba ny fihavanana.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Tanisao fanjakana efatra nivarotra andevo.",
      items: [],
      corrige: [[{ text: "Ohatra : Antakarana, Sakalava, Betsimisaraka, Merina (na Betsileo, Antemoro, Antanosy, Mahafaly)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Fenoy : Ny antony nivarotana andevo dia ara-… (basy sy vanja), ara-… (entana vazaha) ary ara-… (vola).",
      items: [],
      corrige: [[{ text: "tafika", cle: true }, { text: " ; " }, { text: "pitaovana", cle: true }, { text: " ; " }, { text: "toekarena", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Valio : a) Inona ny tsena an-tanety malaza nivarotana andevo ? b) Taiza no nanondranana ny andevo Malagasy ?",
      items: [],
      corrige: [[{ text: "a) Moramanga", cle: true }, { text: " ; b) " }, { text: "tany amin'ny Nosy Mascareignes (Maurice sy La Réunion) sy tany Afrika atsinanana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Lazao fiantraikany efatra nateraky ny varotra andevo.",
      items: [],
      corrige: [[{ text: "Nihanahery ny fanjakana mpivarotra ; rava ny fanjakana voafana ; nihavitsy ny hery mpamokatra ; nisaraka ny fianakaviana (simba ny fihavanana)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Amin'ny fehezanteny roa : nahoana ny varotra andevo no manitsakitsaka ny zon'olombelona ?",
      items: [],
      corrige: [[{ text: "Satria manan-kasina sy mitovy zo ny olombelona rehetra ka tsy azo amidy toy ny entana ; nanaisotra ny fahafahana sy ny fahamendrehan'ny olona izy", cle: true }, { text: "." }]],
    },
  ],
};

const S17 = {
  type: "fanadinana", numero: 17, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra IV",
  lohahevitra: "IV — Ny fanjakan'i Madagasikara tamin'ny taonjato XIX",
  famerenana: [
    "Ireo mpanjaka nifandimby : Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1897).",
    "Radama I : fifanekena tamin'i Farquhar (1817-1820) — najanona ny fanondranana andevo ; nekena ho « Mpanjakan'i Madagasikara » izy ary nanitatra ny fanjakany.",
    "Ranavalona I : niaro ny fiandrianam-pirenena ; Jean Laborde nanorina ny orinasan'i Mantasoa (basy, vanja, biriky, savony…).",
    "Radama II : namerina ny vahiny sy ny misionera ; ny Charte Lambert ; Rasoherina : nanohy ny fampianarana ; Ranavalona II : natao batisa (21 febroary 1869), lasa fivavahana ofisialy ny kristianisma.",
    "Ranavalona III : resy tamin'ny ady 1883-1885 sy 1895 ; lasa zanatany frantsay i Madagasikara ny 6 aogositra 1896 ; natao sesitany izy.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Alaharo araka ny fifandimbiasany ireto mpanjaka ireto : Rasoherina, Radama I, Ranavalona II, Ranavalona I, Ranavalona III, Radama II.",
      items: [],
      corrige: [[{ text: "Radama I, Ranavalona I, Radama II, Rasoherina, Ranavalona II, Ranavalona III", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Fenoy : Tamin'ny fifanekena 1817 dia najanon'i Radama I ny fanondranana … ; ho takalon'izany dia nekena ho « Mpanjakan'i … » izy ary nahazo fanampiana ara-….",
      items: [],
      corrige: [[{ text: "andevo", cle: true }, { text: " ; " }, { text: "Madagasikara", cle: true }, { text: " ; " }, { text: "tafika (fitaovam-piadiana)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Iza no vazaha frantsay nanorina ny orinasan'i Mantasoa ? Tanisao vokatra telo novokariny tao.",
      items: [],
      corrige: [[{ text: "Jean Laborde", cle: true }, { text: " ; " }, { text: "basy, vanja, biriky (na savony, labozia, fitaratra)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Natao batisa i Ranavalona II tamin'ny 21 febroary 1869. b) Rainilaiarivony no praiminisitra nanambady mpanjakavavy telo. d) Lasa zanatany frantsay i Madagasikara ny 6 aogositra 1896.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina (Rasoherina, Ranavalona II, Ranavalona III)", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Amin'ny fehezanteny roa : inona no voka-dratsin'ny fahatongavan'ny vahiny teo amin'ny soatoavina malagasy sy ny fiandrianam-pirenena ?",
      items: [],
      corrige: [[{ text: "Nihena ny soatoavina malagasy (fihavanana, firaisan-kina) ary very ny fahaleovantena tamin'ny 1896", cle: true }, { text: "." }]],
    },
  ],
};

const S25 = {
  type: "fanadinana", numero: 25, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra V",
  lohahevitra: "V — Ny fanjanahantany (1896-1960)",
  famerenana: [
    "Ny sata : protectorat (1895-1896), zanatany (1896-1945), TOM tao amin'ny Union française (1946-1958), firaisambe frantsay (1958-1960).",
    "Ny toekarena : pacte colonial sy économie de traite ; kaompania vazaha (SICE, Marseillaise, Lyonnaise) ; fibodoana ny tany lonaka ; hetra isan-dahy ; SMOTIG.",
    "Ny fitondrana : governora jeneraly (Gallieni no voalohany) ; fizarana ny mponina ho citoyens sy indigènes (code de l'indigénat).",
    "Ny tolona : Menalamba (1895-1898), Sadiavahy (1904-1905), VVS (1913-1915), ny tolon'i Ralaimongo, JINA sy PANAMA, MDRM sy ny raharaha 1947.",
    "Niverina ny fahaleovantena ny 26 jona 1960.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Ampifanandrifio ny sata sy ny vanim-potoana : 1. protectorat / 2. zanatany / 3. TOM / 4. firaisambe — a. 1946-1958 ; b. 1958-1960 ; d. 1895-1896 ; e. 1896-1945.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Fenoy : Ny governora jeneraly frantsay voalohany teto Madagasikara dia … ; ny mponina dia nozaraina ho « citoyens » sy « … » izay nofehezin'ny code de l'….",
      items: [],
      corrige: [[{ text: "Gallieni", cle: true }, { text: " ; " }, { text: "indigènes", cle: true }, { text: " ; " }, { text: "indigénat", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Lazao endrika telo nisehoan'ny fanararaotana ara-toekarena nataon'ny mpanjanaka.",
      items: [],
      corrige: [[{ text: "Fibodoana ny tany lonaka ; hetra isan-dahy ; asa an-terivozona (SMOTIG) — na : pacte colonial, kaompania nifehy ny varotra", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio ny tolona sy ny taona : 1. Menalamba / 2. VVS / 3. MDRM — a. 1913-1915 ; b. 1946-1947 ; d. 1895-1898.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Valio : a) Oviana no niverina ny fahaleovantenan'i Madagasikara ? b) Inona no ianarantsika amin'ireo tolona nataon'ny Malagasy ?",
      items: [],
      corrige: [[{ text: "a) 26 jona 1960", cle: true }, { text: " ; b) " }, { text: "ny fitiavan-tanindrazana sy ny herim-po — valiny malalaka", cle: true }, { text: "." }]],
    },
  ],
};

const S30 = {
  type: "fanadinana", numero: 30, total: 30,
  titre: "Famerenana sy tombana — Lohahevitra VI",
  lohahevitra: "VI — Ny vakoka sy ny harem-pirenena",
  famerenana: [
    "Ny VAKOKA dia ireo lova navelan'ny razana : hita maso (tanàna manara-penitra, lapa, fasana, fitaovana…) sy tsy hita maso (kabary, hira gasy, fomba amam-panao, vakodrazana…).",
    "Ny HAREM-PIRENENA dia ny tany, ny ala, ny rano, ny harena an-kibon'ny tany ary ny vakoka.",
    "Misy lalàna miaro ny vakoka sy ny harem-pirenena (ohatra : lalàna 82-029 momba ny fiarovana ny vakoka).",
    "Adidin'ny tsirairay ny mikolokolo sy miaro ny vakoka : fananana iombonana izy ireo ary loharanon'ny fizahantany sy ny fandrosoana.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Farito ny atao hoe vakoka ary omeo ohatra iray avy amin'ny karazany roa.",
      items: [],
      corrige: [[{ text: "Lova navelan'ny razana", cle: true }, { text: " ; hita maso : " }, { text: "lapa, fasana, fitaovana…", cle: true }, { text: " ; tsy hita maso : " }, { text: "kabary, hira gasy, fomba amam-panao…", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho « hita maso » na « tsy hita maso » : a) ny kabary ; b) ny Rovan'Ambohimanga ; d) ny hira gasy ; e) ny lamba landy tranainy.",
      items: [],
      corrige: [[{ text: "Hita maso : b, e", cle: true }, { text: " ; " }, { text: "tsy hita maso : a, d", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Tanisao karazana harem-pirenena efatra.",
      items: [],
      corrige: [[{ text: "Ny tany, ny ala, ny rano/ranomasina, ny harena an-kibon'ny tany (na ny vakoka)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Misy lalàna miaro ny vakoka eto Madagasikara. b) Ny vakoka dia an'ny fianakaviana iray ihany. d) Loharanon'ny fizahantany ny vakoka.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : fananana iombonan'ny firenena izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Tanisao asa telo azonao atao amin'ny fikolokoloana ny vakoka sy ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Tsy manimba na mandoto ; mandray anjara amin'ny fanadiovana sy ny fambolen-kazo ; manaja ny lalàna sy ny dina (valiny malalaka)", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { S3, S6, S10, S17, S25, S30 };
