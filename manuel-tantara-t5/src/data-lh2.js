// data-lh2.js — LOHAHEVITRA II : IREO FANJAKANA NISY TETO MADAGASIKARA (XVI-XIX) (S4-S5) — Tantara T5
// Loharano : PE T5 (tak. 139-142) sy FRP T5 (LFK 2-a, 2-b, 2-d)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "II — Ireo fanjakana nisy teto Madagasikara (taonjato XVI-XIX)";
const FAHENDRENA = "Fandalàna ny maha iray ao anatin'ny fahasamihafana, firaisankina";

const seances = [

// ============================================================ SEHO 4
{
  numero: 4, total: 30, lohahevitra: LH,
  titre: "Ny foko sy ny fivoarany ho fanjakana",
  tanjona: "mamaritra ny atao hoe foko sy ny rafi-pamokarana ary maneho ny fivoaran'ny foko ho fanjakana",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; asa an-tarika arahina resadresaka ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 2-a)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s04.png",
  imageLegende: "Ny foko : olona iray fihaviana, miara-miasa sy mifampizara ny vokatra",
  famerenana: {
    qa: [
      { q: "Tamin'ny T4 : avy aiza ny razamben'ny Malagasy ?", ra: "Avy any Azia atsimo atsinanana, Afrika atsinanana ary Arabia." },
      { q: "Rehefa niparitaka teto amin'ny Nosy izy ireo, inona no niforona ?", ra: "Niforona ireo foko samihafa." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Ao amin'ny fianakaviambe iray : iza no mitovy aminareo fiteny sy fomba ? Ary raha fianakaviambe maro no mitambatra sy miara-miaina, inona no mety hiforona ? »",
    ],
    mpianatra: "Mamaly araka ny fahalalany ; mahatsapa fa ny fitambaran'olona iray fihaviana no miforona ho vondrona lehibe.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny atao hoe foko sy ny fivoarany ho fanjakana.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky lahatsoratra momba ny foko ny mpampianatra : iray fihaviana, iray fomba, iray fiteny ; miara-miasa amin'ny tany iombonana. Manontany : ahoana no nahatongavan'ny foko ho fanjakana ?",
    mpianatra: "Mamaky sy mamaly : ny zokiolona mahery an'ady no lasa mpanjaka ; nitambatra ny foko maromaro.",
    technique: "Famakiana lahatsoratra arahina fanontaniana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe foko ?", ra: "Fitambarana olona iray fihaviana na firazanana, tsy mifanalavitra, manana fomba amam-panao sy fitafy ary fiteny itovizana ka mampiavaka azy amin'ny hafa." },
      { q: "Inona no atao hoe rafi-pamokarana iombonana ?", ra: "Iombonana ny fitaovam-pamokarana (ny tany, ny fitaovam-piasana…) ary ifampizarana ny vokatra." },
      { q: "Ahoana no nivoaran'ny foko ho fanjakana ?", ra: "Nitambatra ny foko maromaro ; ny zokiolona mahery an'ady no lasa mpanjaka ka nanorina ny fanjakany." },
      { q: "Inona avy ireo saranga teo amin'ny fiarahamonina ?", ra: "Ny andriana (ny mpanjaka sy ny fianakaviany), ny hova na olontsotra, ary ny andevo (ireo resy an'ady)." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny foko dia olona iray fihaviana iray fomba ; rehefa nitambatra sy nifanafika ny foko dia niforona ny fanjakana notarihin'ny mpanjaka ; nisy an-tanan-tohatra ny fiarahamonina (andriana, hova, andevo) ary nomena lanja ny hasina.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny foko dia fitambarana olona iray …, manana …, fitafy ary … itovizana.",
      items: [],
      corrige: [[{ text: "fihaviana (na firazanana)", cle: true }, { text: " ; " }, { text: "fomba amam-panao", cle: true }, { text: " ; " }, { text: "fiteny", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny roa ny nivoaran'ny foko ho fanjakana ary tanisao ireo saranga telo.",
      items: [],
      corrige: [[{ text: "Nitambatra ny foko maromaro ary ny zokiolona mahery an'ady no lasa mpanjaka", cle: true }, { text: " ; saranga : " }, { text: "andriana, hova (olontsotra), andevo", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["foko", "rafi-pamokarana", "fanjakana", "hasina", "andriana", "hova", "andevo"],
    sections: [
      {
        titre: "1. Famaritana ny foko",
        paras: [
          "Ny foko dia fitambarana olona iray fihaviana na firazanana, tsy mifanalavitra, izay manana fomba amam-panao sy fitafy ary fiteny itovizana ka mampiavaka azy amin'ny hafa.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny rafi-pamokarana tao amin'ny foko",
        paras: [
          "Tao amin'ny foko dia niombonana ny fitaovam-pamokarana : ny tany, ny fitaovam-piasana… Ny vokatra azo dia nifampizarana. Niara-niasa sy nifanampy ny mpianakavy.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny fivoaran'ny foko ho fanjakana",
        paras: [
          "Nitambatra ny foko maromaro ka lasa fanjakana. Ny zokiolona mahery an'ady no nanitatra ny fahefany, nanafika ny foko hafa ary nanorina ny fanjakany : izy no lasa mpanjaka.",
          "Ny hasina no nino ny vahoaka fa nananan'ny mpanjaka : hery masina nampanaja sy nampankatò azy. Ny fanjakana dia arindra, ifandovàna ary tsy refesi-mandidy (ny tenin'ny mpanjaka no lalàna).",
        ],
        puces: [],
      },
      {
        titre: "4. Ny an-tanan-tohatra teo amin'ny fiarahamonina",
        paras: [],
        puces: [
          "Ny andriana : ny mpanjaka sy ny fianakaviany, ary ireo nasondrotry ny mpanjaka noho ny soa vitany.",
          "Ny hova na ny olontsotra : ireo sady tsy andriana no tsy andevo.",
          "Ny andevo : ireo resy an'ady.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Fitambaran'ny foko maromaro no lasa fanjakana. Nanitatra ny fahefany ny zokiolona ka nanafika ny foko hafa ary nanorina ny fanjakany tamin'ny herisetra sy ny fitaovam-piadiana azony tamin'ny vazaha. (…) Izay zokiolona mahery an'ady no lasa mpanjaka. »",
      "(RASOANINDRINA Baptistine, Tantaran'i Madagasikara, kilasy faha-7, 2010, tak. 9 — naverin'ny FRP T5, LFK 2-a.)",
      "Fanontaniana : a) Iza no lasa mpanjaka araka ity lahatsoratra ity ? b) Avy taiza ny fitaovam-piadiana nampiasainy ?",
      "Valiny : a) Izay zokiolona mahery an'ady. b) Azony tamin'ny vazaha (tamin'ny fifanakalozana).",
    ],
  },
  rakibolana: [
    { mg: "Foko", fr: "Clan / groupe ethnique" },
    { mg: "Rafi-pamokarana", fr: "Système de production" },
    { mg: "Hasina", fr: "Pouvoir sacré" },
    { mg: "An-tanan-tohatra", fr: "Hiérarchie" },
    { mg: "Tsy refesi-mandidy", fr: "Absolu (pouvoir)" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Tao amin'ny foko dia niombonana ny … sy ny fitaovam-piasana ary nifampizarana ny … ; izay zokiolona … an'ady no lasa … .",
      items: [],
      corrige: [[{ text: "tany", cle: true }, { text: " ; " }, { text: "vokatra", cle: true }, { text: " ; " }, { text: "mahery", cle: true }, { text: " ; " }, { text: "mpanjaka", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. andriana / 2. hova / 3. andevo — a. ireo resy an'ady ; b. ny mpanjaka sy ny fianakaviany ; d. ny olontsotra.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ny hasina dia hery masina ninoana fa nananan'ny mpanjaka. b) Nifidianan'ny vahoaka isan-taona ny mpanjaka. d) Ifandovàna ny fanjakana.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Marina", cle: true }, { text: " ; b) " }, { text: "Diso : nifandovàna ny fanjakana", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 5
{
  numero: 5, total: 30, lohahevitra: LH,
  titre: "Ireo fanjakana nijoro sy ireo mpanjaka malaza",
  tanjona: "mitanisa ireo fanjakana nijoro teto Madagasikara sy ireo mpanjaka malaza tamin'izy ireo",
  fahendrena: FAHENDRENA,
  tetika: "Famakafakana tahirin-kevitra ; asa an-tarika isam-paritra ; fampiasana sari-tany",
  fanovozanKevitra: DOC + " (LFK 2-b, 2-d)",
  fitaovana: "Sari-tanin'i Madagasikara maneho ireo fanjakana ; lahatsoratra",
  image: "images/img_s05.png",
  imageLegende: "Ireo fanjakana nijoro teto Madagasikara : samy nanana ny mpanjakany ny faritra",
  famerenana: {
    qa: [
      { q: "Ahoana no niforonan'ny fanjakana ?", ra: "Nitambatra ny foko maromaro ary ny zokiolona mahery an'ady no lasa mpanjaka." },
      { q: "Tanisao ireo saranga telo teo amin'ny fiarahamonina.", ra: "Andriana, hova, andevo." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Inona ny anaran'ny faritra misy antsika ? Fantatrareo ve fa nisy fanjakana malaza teto amin'ny faritra fahiny ? »",
    ],
    mpianatra: "Mamaly araka ny faritra misy azy (Merina, Betsileo, Sakalava, Betsimisaraka…).",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo fanjakana nijoro teto Madagasikara sy ireo mpanjaka malaza.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sari-tanin'i Madagasikara misy ireo fanjakana ny mpampianatra : maro izy ireo, manerana ny Nosy ! Mitarika ny mpianatra hahita ny fanjakana efatra vaventy sy ny taonjato nijoroany.",
    mpianatra: "Mandinika ny sari-tany, mitanisa ireo fanjakana ary mametraka azy amin'ny faritra misy azy.",
    technique: "Fandinihana sari-tany",
    support: "Sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao fanjakana dimy nijoro teto Madagasikara.", ra: "Ohatra : Antandroy, Antanosy, Antemoro, Bara, Betsileo, Betsimisaraka, Mahafaly, Merina, Sakalava, Sihanaka, Tsimihety, Antakarana…" },
      { q: "Iza avy ireo fanjakana efatra vaventy sy ny taonjato nijoroany ?", ra: "Sakalava (XVI), Merina (XVI), Betsimisaraka (XVII), Betsileo (XVIII)." },
      { q: "Iza no mpanjaka malaza tao amin'ny Sakalava ?", ra: "Andriandahifotsy (Menabe) ; Andriamandisoarivo no nanorina ny fanjakana Boina." },
      { q: "Iza no nanorina ny fanjakana Betsimisaraka ?", ra: "Ratsimilaho (na Ramaromanompo), nampihavana ny Betsimisaraka avaratra sy atsimo." },
      { q: "Iza no mpanjaka merina malaza indrindra tamin'io vanim-potoana io ?", ra: "Andrianampoinimerina (1787-1810), mpanjakan'Ambohimanga : « Ny ranomasina no valam-parihiko »." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sari-tany sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : fanjakana maro no nijoro teto Madagasikara ; ny efatra vaventy dia ny Sakalava, ny Merina, ny Betsimisaraka ary ny Betsileo ; samy nanana ny mpanjakany malaza izy ireo.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. Sakalava / 2. Betsimisaraka / 3. Merina — a. Ratsimilaho ; b. Andriandahifotsy ; d. Andrianampoinimerina.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-d", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao ireo fanjakana efatra vaventy sy ny mpanjaka iray malaza isaky ny fanjakana.",
      items: [],
      corrige: [[{ text: "Sakalava (Andriandahifotsy) ; Merina (Andrianampoinimerina) ; Betsimisaraka (Ratsimilaho) ; Betsileo (Andriamanalina)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanjakana", "Sakalava", "Merina", "Betsimisaraka", "Betsileo", "Andrianampoinimerina"],
    sections: [
      {
        titre: "1. Ireo fanjakana nijoro teto Madagasikara",
        paras: [
          "Fanjakana maro no nijoro teto Madagasikara nanomboka ny taonjato XVI : ny fanjakana Antandroy, Andratsay (Betafo), Antambahoaka, Antanosy, Antemoro, Antesaka, Bara, Betsileo, Betsimisaraka, Bezanozano, Mahafaly, Merina, Sakalava, Sihanaka, Tsimihety, Vezo, Tanala, Antakarana…",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo fanjakana efatra vaventy",
        paras: [],
        puces: [
          "Ny fanjakana SAKALAVA (taonjato XVI, andrefana) : Andriandahifotsy (1650-1680) tao Menabe ; Andriamandisoarivo nanorina ny fanjakana Boina.",
          "Ny fanjakana MERINA (taonjato XVI, afovoan-tany) : Rangita, Andriamanelo, Ralambo, Andrianjaka (nanorina an'Antananarivo, « tanàn'ny arivo »).",
          "Ny fanjakana BETSIMISARAKA (taonjato XVII, atsinanana) : Ratsimilaho (1712-1750) nampihavana ny avaratra sy ny atsimo.",
          "Ny fanjakana BETSILEO (taonjato XVIII, afovoan-tany atsimo) : nizara efatra (Manandriana, Iarindrano, Isandra, Lalangina) ; Andriamanalina no malaza tao Isandra.",
        ],
      },
      {
        titre: "3. Andrianampoinimerina (1787-1810)",
        paras: [
          "Andrianampoinimerina, mpanjakan'Ambohimanga, no nampiray an'Imerina sy nanitatra ny fanjakany. Izy no nanorina ny tsena voalohany ary nampirisika ny vahoaka hamokatra.",
        ],
        puces: [
          "« Ny ranomasina no valam-parihiko » : tiany hipaka hatrany amin'ny ranomasina ny fanjakany.",
          "« Izaho sy ny vary dia iray ihany » ; « Fahavaloko ny mosary » : nomeny lanja ny fambolena.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Andrianampoinimerina (1787-1810), mpanjakan'Ambohimanga. Izy no mpanjaka nanorina ny tsena voalohany. Niezaka hatrany izy nanitatra ny fanjakany, ka nahatonga ilay fitenenana hoe “Ny ranomasina no valam-parihiko”. Nampirisika ny vahoakany hamokatra ihany koa izy : “Izaho sy ny vary dia iray ihany”, “Fahavaloko ny mosary”. »",
      "(Nalaina tao amin'ny FRP T5, LFK 2-d.)",
      "Fanontaniana : a) Inona no dikan'ny hoe « ny ranomasina no valam-parihiko » ? b) Nahoana izy no nilaza hoe « fahavaloko ny mosary » ?",
      "Valiny : a) Tiany hipaka hatrany amin'ny ranomasina ny fanjakany, izany hoe ny Nosy manontolo. b) Satria nomeny lanja ny fambolena mba tsy hisian'ny mosary.",
    ],
  },
  rakibolana: [
    { mg: "Fanjakana", fr: "Royaume" },
    { mg: "Nijoro", fr: "Fondé, établi" },
    { mg: "Fanitarana", fr: "Expansion" },
    { mg: "Valam-parihy", fr: "Digue de rizière (limite)" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio ny fanjakana sy ny taonjato nijoroany : 1. Sakalava / 2. Betsimisaraka / 3. Betsileo / 4. Merina — a. XVII ; b. XVIII ; d. XVI ; e. XVI.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: " ; " }, { text: "4-e", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Iza no nilaza ireto ? Ary inona no dikany ? « Ny ranomasina no valam-parihiko ».",
      items: [],
      corrige: [[{ text: "Andrianampoinimerina", cle: true }, { text: " ; dikany : " }, { text: "tiany hipaka hatrany amin'ny ranomasina ny fanjakany", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao fanjakana telo hafa ankoatra ny efatra vaventy, ary lazao ny faritra nisy ny fanjakana teo amin'ny faritra misy anao.",
      items: [],
      corrige: [[{ text: "Ohatra : Antandroy, Antemoro, Bara, Mahafaly, Sihanaka, Tsimihety… ; valiny malalaka araka ny faritra", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
