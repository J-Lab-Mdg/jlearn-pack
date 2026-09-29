// data-lh4.js — LOHAHEVITRA IV : NY FANJAKAN'I MADAGASIKARA TAMIN'NY TAONJATO XIX (S11-S16) — Tantara T5
// Loharano : PE T5 (tak. 144-147) sy FRP T5 (LFK 4-a → 4-f)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "IV — Ny fanjakan'i Madagasikara tamin'ny taonjato XIX";
const FAHENDRENA = "Fankamamiana ny tantaram-pirenena";

const seances = [

// ============================================================ SEHO 11
{
  numero: 11, total: 30, lohahevitra: LH,
  titre: "Ny fanjakan'i Madagasikara sy ireo mpanjaka nifandimby",
  tanjona: "mitanisa araka ny filaharany ireo mpanjaka enina nifandimby (1810-1897) sy manazava ny fifanekena tamin'i Farquhar",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana frisem-potoana ; famakiana lahatsoratra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 4-a)",
  fitaovana: "Frisem-potoana 1810-1897 ; lahatsoratra",
  image: "images/img_s11.png",
  imageLegende: "Ny lapan'ny mpanjaka tao Antananarivo tamin'ny taonjato XIX",
  famerenana: {
    qa: [
      { q: "Iza no mpanjaka nampiray an'Imerina ary naniry hoe « ny ranomasina no valam-parihiko » ?", ra: "Andrianampoinimerina (1787-1810)." },
      { q: "Inona no nifanakalozana tamin'ny varotra andevo ?", ra: "Andevo natakalo basy, vanja, entana vazaha ary vola." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Rehefa maty Andrianampoinimerina, iza no nandimby azy ? Ary firy ny mpanjaka nifandimby mandra-pahatongan'ny vazaha ? Andao hojerentsika amin'ny frisem-potoana. »",
    ],
    mpianatra: "Maminavina ary mijery ny frisem-potoana.",
    technique: "Resadresaka",
    support: "Frisem-potoana",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fanjakan'i Madagasikara tamin'ny taonjato XIX sy ireo mpanjaka enina nifandimby.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frisem-potoana 1810-1897 ny mpampianatra ary mitarika ny mpianatra hamaky ny anaran'ny mpanjaka sy ny taona nanjakany. Manazava ny fifanekena tamin'i Farquhar (1817-1820).",
    mpianatra: "Mamaky ny frisem-potoana, manamarika ny anarana sy ny daty.",
    technique: "Fandinihana frisem-potoana",
    support: "Frisem-potoana",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao araka ny filaharany ireo mpanjaka enina nifandimby.", ra: "Radama I (1810-1828), Ranavalona I (1828-1861), Radama II (1861-1863), Rasoherina (1863-1868), Ranavalona II (1868-1883), Ranavalona III (1883-1897)." },
      { q: "Iza i Farquhar ?", ra: "Governora anglisy tao Maurice ; nanao fifanekena tamin'i Radama I tamin'ny 1817 sy 1820 izy." },
      { q: "Inona no votoatin'ny fifanekena ?", ra: "Najanon'i Radama I ny fanondranana andevo ; ho takalon'izany dia nekena ho « Mpanjakan'i Madagasikara » izy ary nahazo fanampiana ara-tafika sy ara-diplaomatika." },
      { q: "Inona no vokatr'io fifanekena io ho an'i Madagasikara ?", ra: "Nisolo tena an'i Madagasikara iray manontolo teo anatrehan'ny firenen-kafa ny fanjakan'Antananarivo." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Frisem-potoana sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : mpanjaka enina no nifandimby teo amin'ny fanjakan'i Madagasikara (1810-1897) ; ny fifanekena tamin'i Farquhar no nampitsahatra ny fanondranana andevo sy nanekena an'i Radama I ho Mpanjakan'i Madagasikara.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny fifandimbiasany : Ranavalona II, Radama I, Rasoherina, Ranavalona I.",
      items: [],
      corrige: [[{ text: "Radama I → Ranavalona I → Rasoherina → Ranavalona II", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Iza i Farquhar ary inona no votoatin'ny fifanekena nataony tamin'i Radama I ?",
      items: [],
      corrige: [[{ text: "Governora anglisy tao Maurice", cle: true }, { text: " ; " }, { text: "najanona ny fanondranana andevo ary nekena ho « Mpanjakan'i Madagasikara » i Radama I sady nahazo fanampiana ara-tafika", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanjakan'i Madagasikara", "mpanjaka enina", "Farquhar", "fifanekena 1817"],
    sections: [
      {
        titre: "1. Ireo mpanjaka enina nifandimby (1810-1897)",
        paras: [],
        puces: [
          "Radama I (1810-1828)",
          "Ranavalona I (1828-1861)",
          "Radama II (1861-1863)",
          "Rasoherina (1863-1868)",
          "Ranavalona II (1868-1883)",
          "Ranavalona III (1883-1897)",
        ],
      },
      {
        titre: "2. Ny fifanekena tamin'i Farquhar (1817-1820)",
        paras: [
          "I Farquhar dia governora anglisy tao Maurice. Nanao fifanekena tamin'i Radama I izy tamin'ny 1817, nohavaozina tamin'ny 1820 : nanaiky hampitsahatra ny fanondranana andevo i Radama I ; ho takalon'izany dia neken'ny Anglisy ho « Mpanjakan'i Madagasikara » izy ary nahazo fanampiana ara-tafika (fitaovam-piadiana, fanofanana miaramila) sy ara-diplaomatika.",
          "Nanomboka teo dia ny fanjakan'Antananarivo no nisolo tena an'i Madagasikara iray manontolo teo anatrehan'ny firenen-kafa.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Tamin'ny fifanekena 1817 sy 1820 dia neken'ny governora anglisy Farquhar ho « Mpanjakan'i Madagasikara » i Radama I, ho setrin'ny fampitsaharana ny fanondranana andevo. (Jereo koa : Revue Historique de l'Océan Indien, laharana 14.)",
      "Fanontaniana : Inona no azon'i Radama I sy inona no nafoiny tamin'io fifanekena io ?",
      "Valiny : Azony ny anaram-boninahitra « Mpanjakan'i Madagasikara » sy ny fanampiana ara-tafika ; nafoiny ny vola azo tamin'ny fanondranana andevo.",
    ],
  },
  rakibolana: [
    { mg: "Fifanekena", fr: "Traité, accord" },
    { mg: "Governora", fr: "Gouverneur" },
    { mg: "Fisoloan-tena", fr: "Représentation" },
    { mg: "Frisem-potoana", fr: "Frise chronologique" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio ny mpanjaka sy ny vanim-potoana : 1. Radama I / 2. Ranavalona I / 3. Rasoherina / 4. Ranavalona III — a. 1863-1868 ; b. 1883-1897 ; d. 1810-1828 ; e. 1828-1861.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : I Farquhar dia governora … tao … ; ny fifanekena voalohany dia natao tamin'ny taona ….",
      items: [],
      corrige: [[{ text: "anglisy", cle: true }, { text: " ; " }, { text: "Maurice", cle: true }, { text: " ; " }, { text: "1817", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Mpanjaka enina no nifandimby teo amin'ny fanjakan'i Madagasikara. b) Vehivavy avokoa izy enina. d) Ranavalona III no mpanjaka farany.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : lehilahy i Radama I sy Radama II", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 12
{
  numero: 12, total: 30, lohahevitra: LH,
  titre: "Radama I (1810-1828) : ny fanitarana ny fanjakana",
  tanjona: "manazava ny fomba nanitaran'i Radama I ny fanjakany",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fandinihana sari-tany ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 4-b)",
  fitaovana: "Sari-tany ; lahatsoratra",
  image: "images/img_s12.png",
  imageLegende: "Ny tafik'i Radama I : miaramila voaofana sy nitondra basy vaovao",
  famerenana: {
    qa: [
      { q: "Iza no mpanjaka voalohany tamin'ny fanjakan'i Madagasikara ?", ra: "Radama I (1810-1828), zanak'Andrianampoinimerina." },
      { q: "Inona no azony tamin'ny fifanekena tamin'i Farquhar ?", ra: "Ny anaram-boninahitra « Mpanjakan'i Madagasikara » sy ny fanampiana ara-tafika." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Nomen'ny Anglisy basy sy mpanofana miaramila i Radama I. Inona no nataony tamin'izany araka ny hevitrareo ? »",
    ],
    mpianatra: "Maminavina : nanitatra ny fanjakany izy.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fomba nanitaran'i Radama I ny fanjakany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sari-tany ny mpampianatra : avy tao Imerina dia nitatra nankaiza ny fanjakana ? Mitarika ny mpianatra hahita ny fomba telo nampiasainy : ny ady, ny fanambadiana, ny fifanekena.",
    mpianatra: "Mandinika ny sari-tany sy ny lahatsoratra ary mamantatra ny fomba telo.",
    technique: "Fandinihana sari-tany sy lahatsoratra",
    support: "Sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny fomba voalohany nanitaran'i Radama I ny fanjakany ?", ra: "Ny ady : nandefa tafika voaofana sy nitondra basy izy nankany amin'ny Bezanozano, ny Sihanaka, ny Betsileo ary ny morontsiraka." },
      { q: "Inona ny fomba faharoa ?", ra: "Ny fanambadiana : nanambady an-dRasalimo, zanak'i Ramitraho mpanjakan'ny Menabe, izy tamin'ny 1822 mba hihavanana amin'ny Sakalava." },
      { q: "Inona ny fomba fahatelo ?", ra: "Ny fifanekena sy ny fihavanana tamin'ireo mpanjaka hafa, ohatra i Jean René tao Toamasina." },
      { q: "Hatraiza ny fanjakan'i Radama I ?", ra: "Nahenika ny ampahany betsaka tamin'ny Nosy izy, ka i Radama I no neken'ny vahiny ho Mpanjakan'i Madagasikara." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Sari-tany sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : fomba telo no nanitaran'i Radama I ny fanjakany — ny ady (tafika voaofana), ny fanambadiana (Rasalimo), ary ny fifanekena. Nahenika ny ampahany betsaka tamin'ny Nosy ny fanjakany.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Fomba telo no nanitaran'i Radama I ny fanjakany : ny …, ny … ary ny ….",
      items: [],
      corrige: [[{ text: "ady", cle: true }, { text: " ; " }, { text: "fanambadiana", cle: true }, { text: " ; " }, { text: "fifanekena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Iza no novadin'i Radama I mba hihavanana tamin'ny Sakalava ? Zanak'iza izy ary avy amin'ny fanjakana inona ?",
      items: [],
      corrige: [[{ text: "Rasalimo", cle: true }, { text: ", " }, { text: "zanak'i Ramitraho, mpanjakan'ny Menabe (Sakalava)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Radama I", "fanitarana", "tafika", "Rasalimo", "fifanekena"],
    sections: [
      {
        titre: "1. Ny fanitarana tamin'ny ady",
        paras: [
          "Noho ny fanampian'ny Anglisy dia nanana tafika voaofana sy nitondra basy vaovao i Radama I. Nandefa tafika izy nankany amin'ny Bezanozano, ny Sihanaka, ny Betsileo ary ny morontsiraka atsinanana sy andrefana.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny fanitarana tamin'ny fanambadiana sy ny fifanekena",
        paras: [
          "Tamin'ny 1822 dia nanambady an-dRasalimo, zanak'i Ramitraho mpanjakan'ny Menabe, i Radama I mba hihavanana amin'ny Sakalava.",
          "Nanao fifanekena tamin'ireo mpanjaka hafa koa izy, toa an'i Jean René tao Toamasina, ka niely tsikelikely ny fahefany.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny vokany",
        paras: [
          "Nahenika ny ampahany betsaka tamin'ny Nosy ny fanjakan'i Radama I ka izy no neken'ny firenen-kafa ho « Mpanjakan'i Madagasikara ». Nampidiriny koa ny sekoly sy ny soratra latinina niaraka tamin'ny misionera anglisy (LMS).",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny misionera LMS (London Missionary Society) dia tonga tamin'ny andron'i Radama I : nanokatra sekoly izy ireo ary nandrafitra ny soratra malagasy tamin'ny abidy latinina (1823).",
      "Fanontaniana : Inona no nentin'ny misionera LMS teto Madagasikara ?",
      "Valiny : Ny sekoly sy ny soratra malagasy tamin'ny abidy latinina.",
    ],
  },
  rakibolana: [
    { mg: "Fanitarana", fr: "Expansion" },
    { mg: "Tafika", fr: "Armée" },
    { mg: "Misionera", fr: "Missionnaire" },
    { mg: "Abidy latinina", fr: "Alphabet latin" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Zanak'Andrianampoinimerina i Radama I. b) Tsy nisy basy ny tafiny. d) Nanambady an-dRasalimo izy tamin'ny 1822. e) Ny misionera LMS no nandrafitra ny soratra malagasy tamin'ny abidy latinina.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : nahazo basy sy fanofanana avy tamin'ny Anglisy izy", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao faritra telo nalefan'i Radama I tafika.",
      items: [],
      corrige: [[{ text: "Bezanozano, Sihanaka, Betsileo (na ny morontsiraka)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana no nanambady an-dRasalimo i Radama I ?",
      items: [],
      corrige: [[{ text: "Mba hihavanana amin'ny fanjakana Sakalava (Menabe) ; ny fanambadiana dia fomba nanitarana ny fanjakana tsy tamin'ny ady", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 13
{
  numero: 13, total: 30, lohahevitra: LH,
  titre: "Ranavalona I (1828-1861) : ny fiarovana ny fiandrianam-pirenena",
  tanjona: "manazava ny politikan-dRanavalona I sy ny zava-bitan'i Jean Laborde tao Mantasoa",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fanontaniana/valiny ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (LFK 4-d)",
  fitaovana: "Lahatsoratra ; sary",
  image: "images/img_s13.png",
  imageLegende: "Ny orinasan'i Mantasoa : toeram-pamokarana voalohany teto Madagasikara",
  famerenana: {
    qa: [
      { q: "Fomba inona avy no nanitaran'i Radama I ny fanjakany ?", ra: "Ny ady, ny fanambadiana ary ny fifanekena." },
      { q: "Oviana no maty i Radama I ?", ra: "Tamin'ny 1828." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Vehivavy no nandimby an'i Radama I. Araka ny hevitrareo, nanohy ny fifandraisana tamin'ny vazaha ve izy sa niaro ny fomba malagasy ? »",
    ],
    mpianatra: "Maminavina sy maneho ny heviny.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fanjakan-dRanavalona I sy ny zava-bitan'i Jean Laborde tao Mantasoa.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra : nofoanan-dRanavalona I ny fifanekena tamin'ny vazaha ary narovany ny fomba malagasy ; kanefa nampiasainy ny fahaizan'i Jean Laborde. Mitarika fifanakalozan-kevitra : inona no tsara sy sarotra tamin'io politika io ?",
    mpianatra: "Mamaky, mamaly ary mifanakalo hevitra.",
    technique: "Famakiana lahatsoratra sy fifanakalozan-kevitra",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny politikan-dRanavalona I ?", ra: "Niaro ny fiandrianam-pirenena sy ny fomba amam-panao malagasy izy : nofoanany ny fifanekena tamin'ny vazaha ary noferany ny asan'ny misionera." },
      { q: "Iza i Jean Laborde ?", ra: "Vazaha frantsay vaky sambo tonga teto Madagasikara ; nampiasain-dRanavalona I ny fahaizany." },
      { q: "Inona no naorin'i Jean Laborde tao Mantasoa ?", ra: "Orinasa namokatra basy, vanja, biriky, savony, labozia, fitaratra sy zavatra maro hafa." },
      { q: "Inona koa no nataony tany Antananarivo ?", ra: "Nanorina ny lapa Manjakamiadana (hazo) sy ny lapa Andafiavaratra izy." },
      { q: "Firy taona no nanjakan-dRanavalona I ?", ra: "33 taona (1828-1861) ; maty izy ny 16 aogositra 1861." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : niaro ny fiandrianam-pirenena sy ny fomba malagasy i Ranavalona I nandritra ny 33 taona ; nampiasainy ny fahaizan'i Jean Laborde ka namokatra basy, vanja sy entana maro ny orinasan'i Mantasoa : nizaka tena ara-pamokarana i Madagasikara.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Tanisao vokatra efatra novokarin'ny orinasan'i Mantasoa.",
      items: [],
      corrige: [[{ text: "Basy, vanja, biriky, savony (na labozia, fitaratra…)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Amin'ny fehezanteny roa, lazao ny politikan-dRanavalona I ary ny anjara asan'i Jean Laborde.",
      items: [],
      corrige: [[{ text: "Niaro ny fiandrianam-pirenena sy ny fomba malagasy izy ary nofoanany ny fifanekena tamin'ny vazaha", cle: true }, { text: " ; " }, { text: "i Jean Laborde no nanorina ny orinasan'i Mantasoa namokatra basy, vanja sy entana maro", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Ranavalona I", "fiandrianam-pirenena", "Jean Laborde", "Mantasoa"],
    sections: [
      {
        titre: "1. Ny fiarovana ny fiandrianam-pirenena",
        paras: [
          "Nandimby an'i Radama I i Ranavalona I (1828-1861). Natsahany ny fanavaozana nataon'ny vazaha : nofoanany ny fifanekena, noferany ny asan'ny misionera ary narovany ny fomba amam-panao sy ny fivavahan-drazana. Tiany hizaka tena i Madagasikara.",
        ],
        puces: [],
      },
      {
        titre: "2. Jean Laborde sy ny orinasan'i Mantasoa",
        paras: [
          "Nampiasain-dRanavalona I ny fahaizan'i Jean Laborde, vazaha frantsay vaky sambo. Naoriny tao Mantasoa ny orinasa lehibe namokatra basy, vanja, biriky, savony, labozia, fitaratra sy zavatra maro hafa : tsy voatery nividy tany ivelany intsony ny fanjakana.",
          "Tany Antananarivo dia izy koa no nanorina ny lapa Manjakamiadana (hazo) sy ny lapa Andafiavaratra.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny faran'ny fanjakany",
        paras: [
          "Maty ny 16 aogositra 1861 i Ranavalona I, rehefa nanjaka 33 taona — izy no naharitra ela indrindra tamin'ireo mpanjaka enina.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny orinasan'i Mantasoa dia natao hoe « tanànan'ny asa » : tao no namokarana ny basy sy ny vanja nilain'ny tafika, ny biriky sy ny fitaratra nilain'ny fanorenana, ary ny savony sy ny labozia nilain'ny mponina.",
      "Fanontaniana : Nahoana no zava-dehibe ho an'ny fanjakana ny orinasan'i Mantasoa ?",
      "Valiny : Satria nahafahan'i Madagasikara namokatra samirery ka tsy niankina tamin'ny vahiny.",
    ],
  },
  rakibolana: [
    { mg: "Fiandrianam-pirenena", fr: "Souveraineté nationale" },
    { mg: "Orinasa", fr: "Usine, entreprise" },
    { mg: "Fizakan-tena", fr: "Autonomie" },
    { mg: "Vaky sambo", fr: "Naufragé" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Nanjaka 33 taona i Ranavalona I. b) Nanokatra be ny varavarana ho an'ny vazaha izy. d) Jean Laborde no nanorina ny orinasan'i Mantasoa. e) Ny lapa Manjakamiadana hazo dia naorin'i Laborde.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : noferany ny asan'ny vazaha sy ny misionera", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Maty ny 16 … 1861 i Ranavalona I ; ny tanjony dia ny hampizaka tena an'i … ary ny hiaro ny …-pirenena.",
      items: [],
      corrige: [[{ text: "aogositra", cle: true }, { text: " ; " }, { text: "Madagasikara", cle: true }, { text: " ; " }, { text: "fiandrianam", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao zavatra telo naorin'i Jean Laborde na novokariny.",
      items: [],
      corrige: [[{ text: "Ny orinasan'i Mantasoa ; ny lapa Manjakamiadana sy Andafiavaratra ; basy, vanja, savony, fitaratra…", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 14
{
  numero: 14, total: 30, lohahevitra: LH,
  titre: "Radama II (1861-1863) : ny famerenana ny vahiny",
  tanjona: "manazava ny politikan-dRadama II sy ny Charte Lambert",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fanontaniana/valiny ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (LFK 4-e)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s14.png",
  imageLegende: "Niverina ny sambo vahiny sy ny misionera tamin'ny andron-dRadama II",
  famerenana: {
    qa: [
      { q: "Inona ny politikan-dRanavalona I ?", ra: "Niaro ny fiandrianam-pirenena sy ny fomba malagasy izy ary nofoanany ny fifanekena tamin'ny vazaha." },
      { q: "Iza no nanorina ny orinasan'i Mantasoa ?", ra: "Jean Laborde." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Rehefa maty i Ranavalona I dia ny zanany no nandimby azy. Hanohy ny politikan-dreniny ve izy sa hanova azy ? »",
    ],
    mpianatra: "Maminavina sy maneho ny heviny.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fanjakan-dRadama II sy ny Charte Lambert.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra : novan-dRadama II tanteraka ny politikan-dreniny. Mitarika ny mpianatra hamantatra ireo fanapahan-kevitra noraisiny sy ny Charte Lambert.",
    mpianatra: "Mamaky sy manamarika ireo fanapahan-kevitra.",
    technique: "Famakiana lahatsoratra arahina fanontaniana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny politikan-dRadama II ?", ra: "Nanokatra indray ny varavarana ho an'ny vahiny izy : niverina ny misionera LMS sy ny Frantsay, nofoanany ny hetra sasany ary navelany hiditra malalaka ny vazaha." },
      { q: "Inona ny Charte Lambert ?", ra: "Fifanekena nataon'ny printsy Rakoto (Radama II ho avy) tamin'i Joseph Lambert, frantsay, tamin'ny 1855 : nomena tombontsoa lehibe teo amin'ny fitrandrahana ny tany sy ny harena i Lambert." },
      { q: "Nahoana no nampidi-doza ny Charte Lambert ?", ra: "Satria nanome ny vahiny fahefana lehibe loatra teo amin'ny harem-pirenena ka nandrahona ny fiandrianam-pirenena." },
      { q: "Ahoana no niafaran'i Radama II ?", ra: "Novonoina izy ny 11 mey 1863, roa taona monja taorian'ny nanjakany." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : nanokatra ny varavarana ho an'ny vahiny i Radama II ; ny Charte Lambert (1855) dia nanome tombontsoa be loatra ny Frantsay ka nampidi-doza ny fiandrianam-pirenena ; novonoina izy tamin'ny 1863.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny Charte Lambert dia fifanekena natao tamin'ny taona … ; nanome tombontsoa lehibe ny … izy io ka nandrahona ny …-pirenena.",
      items: [],
      corrige: [[{ text: "1855", cle: true }, { text: " ; " }, { text: "Frantsay (an'i Joseph Lambert)", cle: true }, { text: " ; " }, { text: "fiandrianam", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Ampitahao amin'ny fehezanteny roa ny politikan-dRanavalona I sy ny an-dRadama II.",
      items: [],
      corrige: [[{ text: "Nakaton-dRanavalona I ny varavarana ka narovany ny fiandrianam-pirenena ; nosokafan-dRadama II indray izy io ka niverina ny vahiny sy ny misionera", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Radama II", "Charte Lambert", "misionera", "fisokafana"],
    sections: [
      {
        titre: "1. Ny fisokafana amin'ny vahiny",
        paras: [
          "Radama II (1861-1863), zanak'i Ranavalona I, dia nanova tanteraka ny politikan-dreniny : nanokatra indray ny varavarana ho an'ny vahiny izy. Niverina ny misionera LMS sy ny Frantsay, navelany hiditra malalaka ny vazaha ary nofoanany ny hetra sasany.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny Charte Lambert (1855)",
        paras: [
          "Fony mbola printsy Rakoto izy dia nanao sonia ny Charte Lambert (1855) : fifanekena nanome an'i Joseph Lambert, frantsay, tombontsoa lehibe teo amin'ny fitrandrahana ny tany sy ny harena eto Madagasikara. Nampidi-doza ny fiandrianam-pirenena io fifanekena io satria fahefana be loatra no nomena ny vahiny.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny faran'ny fanjakany",
        paras: [
          "Tsy nankasitrahan'ny manam-pahefana sasany ny politikan-dRadama II ka novonoina izy ny 11 mey 1863, roa taona monja taorian'ny nanjakany.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny Charte Lambert dia nanome an'i Joseph Lambert ny zo hitrandraka ny tany, ny ala sy ny harena an-kibon'ny tany ary hanorina orinasa. Io fifanekena io no nampiasain'ny Frantsay tatỳ aoriana hitakiana tombontsoa teto Madagasikara.",
      "Fanontaniana : Nahoana ny Charte Lambert no nampidi-doza ny firenena ?",
      "Valiny : Satria natolotra ny vahiny ny fitrandrahana ny harem-pirenena ka voarahona ny fiandrianam-pirenena.",
    ],
  },
  rakibolana: [
    { mg: "Fisokafana", fr: "Ouverture" },
    { mg: "Fitrandrahana", fr: "Exploitation" },
    { mg: "Printsy", fr: "Prince" },
    { mg: "Sonia", fr: "Signature" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Zanak'i Ranavalona I i Radama II. b) Nanohy ny politikan-dreniny izy. d) Ny Charte Lambert dia natao tamin'ny 1855. e) Naharitra 20 taona ny fanjakan-dRadama II.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : novany tanteraka izy io", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : roa taona monja (1861-1863)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao fanapahan-kevitra roa noraisin-dRadama II.",
      items: [],
      corrige: [[{ text: "Namerina ny misionera sy ny vahiny ; nofoanany ny hetra sasany (na : navelany hiditra malalaka ny vazaha)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : inona no lesona azontsika tsoahina amin'ny Charte Lambert ?",
      items: [],
      corrige: [[{ text: "Tokony hitandrina ny firenena rehefa manao fifanekena amin'ny vahiny ; tsy azo atakalo tombontsoa kely ny harem-pirenena sy ny fiandrianam-pirenena", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 15
{
  numero: 15, total: 30, lohahevitra: LH,
  titre: "Rasoherina, Ranavalona II ary Ranavalona III (1863-1897)",
  tanjona: "manazava ny nanjakan'ireo mpanjakavavy telo farany sy ny nahaverezan'ny fahaleovantena",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana frisem-potoana ; famakiana lahatsoratra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 4-f)",
  fitaovana: "Frisem-potoana ; lahatsoratra",
  image: "images/img_s15.png",
  imageLegende: "Ny fiangonana tao anatirova : lasa fivavahana ofisialy ny kristianisma (1869)",
  famerenana: {
    qa: [
      { q: "Inona ny Charte Lambert ?", ra: "Fifanekena 1855 nanome tombontsoa lehibe an'i Joseph Lambert (frantsay) ka nampidi-doza ny fiandrianam-pirenena." },
      { q: "Ahoana no niafaran'i Radama II ?", ra: "Novonoina izy ny 11 mey 1863." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Mpanjakavavy telo no nifandimby taorian'i Radama II, ary praiminisitra iray ihany no teo anilany. Iza moa izy io ? »",
    ],
    mpianatra: "Maminavina ; mihaino ny anarana hoe Rainilaiarivony.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny nanjakan'i Rasoherina, Ranavalona II ary Ranavalona III, sy ny nahaverezan'ny fahaleovantena tamin'ny 1896.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frisem-potoana 1863-1897 ny mpampianatra ary mizara ny lahatsoratra telo (mpanjakavavy iray isan-tarika). Mitarika ny famakiana sy ny fampisehoana.",
    mpianatra: "Mamaky isan-tarika ary mampiseho ny zava-nitranga lehibe isaky ny mpanjakavavy.",
    technique: "Asa an-tarika",
    support: "Frisem-potoana sy lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no zava-dehibe tamin'ny andron-dRasoherina (1863-1868) ?", ra: "Nanambady ny praiminisitra Rainilaiarivony izy ; nohamafisiny ny fampianarana ; maty izy ny 1 aprily 1868." },
      { q: "Inona no zava-dehibe tamin'ny andron-dRanavalona II (1868-1883) ?", ra: "Natao batisa izy ny 21 febroary 1869 ka lasa fivavahana ofisialy ny kristianisma ; noraràny ny toaka ; nanao fifanarahana ara-toekarena tamin'ny Anglisy izy ; maty ny 13 jolay 1883." },
      { q: "Inona no zava-dehibe tamin'ny andron-dRanavalona III (1883-1897) ?", ra: "Niady tamin'ny Frantsay ny fanjakana (1883-1885 sy 1895) ; azon'ny tafika Duchesne Antananarivo tamin'ny 1895 ; lasa zanatany frantsay i Madagasikara ny 6 aogositra 1896." },
      { q: "Ahoana no niafaran'ny mpitondra farany ?", ra: "Natao sesitany tany Alger i Rainilaiarivony ; natao sesitany tany La Réunion i Ranavalona III, avy eo tany Alger, ary maty tany izy tamin'ny 1917." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : mpanjakavavy telo nifandimby (Rasoherina, Ranavalona II, Ranavalona III) ary Rainilaiarivony no praiminisitra ; lasa fivavahana ofisialy ny kristianisma (1869) ; resin'ny Frantsay ny fanjakana ka lasa zanatany i Madagasikara ny 6 aogositra 1896.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. Rasoherina / 2. Ranavalona II / 3. Ranavalona III — a. batisa 21 febroary 1869 ; b. lasa zanatany i Madagasikara ; d. nanambady an-dRainilaiarivony voalohany.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny roa ny nahaverezan'ny fahaleovantenan'i Madagasikara.",
      items: [],
      corrige: [[{ text: "Resin'ny tafika frantsay notarihin'i Duchesne ny fanjakana tamin'ny 1895", cle: true }, { text: " ; " }, { text: "lasa zanatany frantsay i Madagasikara ny 6 aogositra 1896", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Rasoherina", "Ranavalona II", "Ranavalona III", "Rainilaiarivony", "1896"],
    sections: [
      {
        titre: "1. Rasoherina (1863-1868)",
        paras: [
          "Nandimby an-dRadama II i Rasoherina. Nanambady ny praiminisitra Rainilaiarivony izy — io praiminisitra io no tena nitantana ny fanjakana hatramin'ny 1895. Nohamafisiny ny fampianarana. Maty izy ny 1 aprily 1868.",
        ],
        puces: [],
      },
      {
        titre: "2. Ranavalona II (1868-1883)",
        paras: [
          "Natao batisa i Ranavalona II ny 21 febroary 1869 ka lasa fivavahana ofisialin'ny fanjakana ny kristianisma ; nodorana ny sampy. Noraràny ny toaka ary nanao fifanarahana ara-toekarena tamin'ny Anglisy izy. Maty izy ny 13 jolay 1883.",
        ],
        puces: [],
      },
      {
        titre: "3. Ranavalona III (1883-1897) sy ny fahaverezan'ny fahaleovantena",
        paras: [
          "Vao nanjaka i Ranavalona III dia niady tamin'ny Frantsay ny fanjakana (1883-1885). Tamin'ny 1895 dia notafihin'ny tafika frantsay notarihin'ny jeneraly Duchesne Antananarivo ka resy ny fanjakana. Ny 6 aogositra 1896 dia lasa zanatany frantsay i Madagasikara : very ny fahaleovantena.",
          "Natao sesitany tany Alger i Rainilaiarivony ; i Ranavalona III kosa natao sesitany tany La Réunion, avy eo tany Alger, ary maty tany izy tamin'ny 1917.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Rainilaiarivony no praiminisitra nitantana ny fanjakana nandritra ny 31 taona (1864-1895) : nanambady ny mpanjakavavy telo nifandimby izy (Rasoherina, Ranavalona II, Ranavalona III) ary izy no nitarika ny raharaham-panjakana sy ny fifandraisana tamin'ny vahiny.",
      "Fanontaniana : Nahoana no lazaina fa i Rainilaiarivony no tena nitondra ny fanjakana ?",
      "Valiny : Satria izy no praiminisitra nitantana ny raharaham-panjakana nandritra ny 31 taona, teo anilan'ny mpanjakavavy telo.",
    ],
  },
  rakibolana: [
    { mg: "Praiminisitra", fr: "Premier ministre" },
    { mg: "Batisa", fr: "Baptême" },
    { mg: "Zanatany", fr: "Colonie" },
    { mg: "Sesitany", fr: "Exil" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Natao batisa i Ranavalona II tamin'ny 21 febroary 1869. b) Ny jeneraly Duchesne no nitarika ny tafika frantsay tamin'ny 1895. d) Lasa zanatany i Madagasikara ny 6 aogositra 1896. e) Maty tany Antananarivo i Ranavalona III.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : maty tany Alger izy (1917)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Ny praiminisitra … dia nanambady mpanjakavavy telo nifandimby ; natao sesitany tany … izy tamin'ny 1896.",
      items: [],
      corrige: [[{ text: "Rainilaiarivony", cle: true }, { text: " ; " }, { text: "Alger", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Alaharo araka ny fotoana nitrangany : lasa zanatany i Madagasikara ; batisan-dRanavalona II ; nahafatesan-dRasoherina.",
      items: [],
      corrige: [[{ text: "Nahafatesan-dRasoherina (1868) → batisan-dRanavalona II (1869) → lasa zanatany i Madagasikara (1896)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 16
{
  numero: 16, total: 30, lohahevitra: LH,
  titre: "Ny voka-dratsin'ny fifandraisana tamin'ny vahiny sy ireo soatoavina malagasy",
  tanjona: "manazava ny voka-dratsin'ny fifandraisana tamin'ny vahiny ary mitanisa ireo soatoavina malagasy tokony hotandrovana",
  fahendrena: FAHENDRENA,
  tetika: "Fifanakalozan-kevitra ; asa an-tarika ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 4-f)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s16.png",
  imageLegende: "Ny soatoavina malagasy : fihavanana, fifanampiana, firaisan-kina",
  famerenana: {
    qa: [
      { q: "Oviana no lasa zanatany frantsay i Madagasikara ?", ra: "Ny 6 aogositra 1896." },
      { q: "Iza no mpanjakavavy farany ?", ra: "Ranavalona III (1883-1897)." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Nandritra ny taonjato XIX dia niditra tsikelikely ny vahiny sy ny fombany. Inona no tsara ary inona no ratsy tamin'izany ho an'ny Malagasy ? »",
    ],
    mpianatra: "Mifanakalo hevitra malalaka.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia handinika ny voka-dratsin'ny fifandraisana tamin'ny vahiny sy ireo soatoavina malagasy tokony hotandrovana.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny kilasy ho tarika ny mpampianatra : tarika mitady ny voka-dratsy ; tarika mitanisa ireo soatoavina malagasy sy ny fomba itandrovana azy ankehitriny.",
    mpianatra: "Miara-miasa isan-tarika ary mampiseho ny valiny.",
    technique: "Asa an-tarika",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny voka-dratsin'ny fifandraisana tamin'ny vahiny ?", ra: "Nihena ny lanjan'ny soatoavina sy ny fomba amam-panao malagasy ; niankina tamin'ny vahiny ny fanjakana ; ary tamin'ny farany dia very ny fahaleovantena (1896)." },
      { q: "Tanisao ireo soatoavina malagasy lehibe.", ra: "Ny fihavanana, ny fifanampiana, ny firaisan-kina, ny fanajana ny hafa sy ny tena, ary ny fanajana ny teny nomena." },
      { q: "Nahoana no tokony hotandrovana ireo soatoavina ireo ?", ra: "Satria izy ireo no maha Malagasy antsika sy mampiray ny firenena ; very izy dia mora rava ny firenena." },
      { q: "Ahoana no anehoantsika izany ankehitriny ?", ra: "Mifanampy amin'ny asa, mandala ny fihavanana ao an-tanàna, manaja ny zokiolona sy ny teny nomena, tsy manavakavaka." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny fifandraisana tamin'ny vahiny dia nitondra fandrosoana sasany fa nahaverezana ny soatoavina sy ny fahaleovantena ; adidintsika ny mitandro ny fihavanana, ny fifanampiana, ny firaisan-kina ary ny fanajana.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Tanisao soatoavina malagasy efatra tokony hotandrovana.",
      items: [],
      corrige: [[{ text: "Ny fihavanana, ny fifanampiana, ny firaisan-kina, ny fanajana (ny hafa, ny tena, ny teny nomena)", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao voka-dratsy roa nateraky ny fifandraisana tamin'ny vahiny tamin'ny taonjato XIX.",
      items: [],
      corrige: [[{ text: "Nihena ny lanjan'ny soatoavina sy ny fomba malagasy ; very ny fahaleovantena tamin'ny 1896 (na : niankina tamin'ny vahiny ny fanjakana)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["voka-dratsy", "soatoavina", "fihavanana", "firaisan-kina"],
    sections: [
      {
        titre: "1. Ny voka-dratsin'ny fifandraisana tamin'ny vahiny",
        paras: [],
        puces: [
          "Nihena ny lanjan'ny soatoavina sy ny fomba amam-panao malagasy : nisolo azy tsikelikely ny fomba vahiny.",
          "Niankina tamin'ny vahiny ny fanjakana : ny fitaovana, ny fifanekena, ny fivavahana.",
          "Tamin'ny farany dia very ny fahaleovantena : lasa zanatany frantsay i Madagasikara (1896).",
        ],
      },
      {
        titre: "2. Ireo soatoavina malagasy tokony hotandrovana",
        paras: [],
        puces: [
          "Ny fihavanana : « Aleo very tsikalakalam-bola toy izay very tsikalakalam-pihavanana. »",
          "Ny fifanampiana sy ny firaisan-kina : « Izay mitambatra vato, izay misaraka fasika. »",
          "Ny fanajana ny hafa, ny fanajan-tena ary ny fanajana ny teny nomena : « Ny teny nomena, trosa. »",
        ],
      },
      {
        titre: "3. Ny anjarantsika ankehitriny",
        paras: [
          "Adidin'ny Malagasy tsirairay ny mitandro ireo soatoavina ireo : izy ireo no maha Malagasy antsika, mampiray ny firenena ary miaro azy amin'ny zava-manahirana.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Izay mitambatra vato, izay misaraka fasika. » (Ohabolana malagasy.)",
      "Fanontaniana : Inona no ifandraisan'ity ohabolana ity amin'ny tantaran'ny taonjato XIX ?",
      "Valiny : Rehefa nisaraka sy nifampiandany ny Malagasy dia mora resin'ny vahiny ; ny firaisan-kina no hery miaro ny firenena.",
    ],
  },
  rakibolana: [
    { mg: "Soatoavina", fr: "Valeurs" },
    { mg: "Fihavanana", fr: "Lien social, entente" },
    { mg: "Firaisan-kina", fr: "Solidarité, union" },
    { mg: "Fandalàna", fr: "Valorisation, respect" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : « Izay mitambatra …, izay misaraka … » ; « Aleo very tsikalakalam-… toy izay very tsikalakalam-… ».",
      items: [],
      corrige: [[{ text: "vato", cle: true }, { text: " ; " }, { text: "fasika", cle: true }, { text: " ; " }, { text: "bola", cle: true }, { text: " ; " }, { text: "pihavanana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Lazao voka-dratsy telo nateraky ny fifandraisana tamin'ny vahiny.",
      items: [],
      corrige: [[{ text: "Fihenan'ny soatoavina malagasy ; fiankinan-doha tamin'ny vahiny ; fahaverezan'ny fahaleovantena (1896)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa : ahoana no anehoanao ny firaisan-kina ao amin'ny sekolinao ?",
      items: [],
      corrige: [[{ text: "Valiny malalaka — ohatra : manampy ny namana sahirana amin'ny lesona ; miara-manadio ny efitrano fianarana ; tsy manavakavaka", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
