// data-lh4.js — LOHAHEVITRA IV : NY VANIM-POTOANAN'NY TANTARAN'I MADAGASIKARA (S12-S13)
// Loharano : PE T4 sy FRP T4 (LFK 4-a, 4-b, 4-d)
const DOC = "PE Tantara T4 (MEN) sy FRP T4";
const LH = "IV — Ny vanim-potoanan'ny tantaran'i Madagasikara";

const seances = [

// ============================================================ SEHO 12
{
  numero: 12, total: 27, lohahevitra: LH,
  titre: "Ny nahazoana ny anarana « Madagasikara »",
  tanjona: "mitantara ny niandohan'ny anarana hoe « Madagasikara »",
  fahendrena: "Mankamamy ny maha-Malagasy sy ny tantaram-pirenena",
  tetika: "Fitrandrahana tahirin-kevitra ; fitantarana ; fifanakalozan-kevitra",
  fanovozanKevitra: DOC + " (FRP T4, LFK 4-a)",
  fitaovana: "Sarintany ; tahirin-kevitra momba an'i Marco Polo ; solaitrabe",
  image: "images/img_s12.png",
  imageLegende: "I Marco Polo sy ny sarintany tranainy : ny niandohan'ny anarana « Madagascar »",
  famerenana: {
    qa: [
      { q: "Inona avy ireo loharano ara-tantara telo karazana ?", ra: "An-tsoratra, am-bava, moana." },
      { q: "Inona ny anaran'ny firenentsika ?", ra: "Madagasikara." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Efa nieritreritra ve ianareo hoe : avy aiza ny anarana hoe “Madagasikara” ? Iza no nanome azy ? »",
    ],
    mpianatra: "Mamaly araka izay eritreretiny ; mazàna tsy fantany.",
    technique: "Fanontaniana an-kira",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tantaran'ny anaran'ny Nosintsika : « Madagasikara ».",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny tahirin-kevitra momba an'i Marco Polo ny mpampianatra : mpivahiny italiana (1254-1324) izay tsy tonga teto Madagasikara, fa nanoratra ny anarana hoe « Madagascar » tao amin'ny bokiny tamin'ny taona 1298.",
    mpianatra: "Mihaino, mamaky indray, mitanisa ny daty (1298) sy ny anaran'ny boky (« Livre des Merveilles »).",
    technique: "Fitrandrahana tahirin-kevitra",
    support: "Tahirin-kevitra (jereo ny lesona)",
  },
  famakafakana: {
    qa: [
      { q: "Iza no nanoratra voalohany ny anarana hoe « Madagascar » ?", ra: "I Marco Polo, mpivahiny italiana, tamin'ny taona 1298." },
      { q: "Tonga teto Madagasikara ve i Marco Polo ?", ra: "Tsia : nandre ny anarana izy fa tsy tonga teto mihitsy." },
      { q: "Ahoana no niovan'ny anarana taty aoriana ?", ra: "« Madagascar » niova ho « Madagasikara » ; ny mponina kosa natao hoe « Malagasy »." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Tahirin-kevitra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : i Marco Polo no nanoratra voalohany ny anarana « Madagascar » (1298), na dia tsy tonga teto aza izy ; niova ho « Madagasikara » izany taty aoriana.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : I … no nanoratra voalohany ny anarana hoe « Madagascar », tamin'ny taona ….",
      items: [],
      corrige: [[{ text: "Marco Polo", cle: true }, { text: " ; " }, { text: "1298", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Marina sa diso ? a) Tonga teto Madagasikara i Marco Polo. b) Tamin'ny taonjato faha-XIII no nanoratany ny anarana.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso : tsy tonga teto izy", cle: true }, { text: " ; b) " }, { text: "Marina (1298)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Marco Polo", "1298", "Madagascar", "Madagasikara", "Malagasy"],
    sections: [
      {
        titre: "1. I Marco Polo sy ny anarana « Madagascar »",
        paras: [
          "I Marco Polo dia mpivahiny italiana (1254-1324). Nanao dia lavitra tany Azia izy ary nanoratra boky malaza : ny « Livre des Merveilles ».",
          "Tao amin'io boky io, tamin'ny taona 1298, no nanoratany voalohany ny anarana hoe « Madagascar ». Tsy tonga teto amin'ny Nosy anefa izy : ny tantara henony tamin'ny mpivahiny hafa no nampiasainy, ka nafangarony tamin'ny anaran'ny tanàna Mogadiscio any Somalia.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo anarana hafa nomena ny Nosy",
        paras: [],
        puces: [
          "Ny Portogey : « São Lourenço » (Masindahy Laurent).",
          "Ny Frantsay : « l'île dauphine ».",
          "Taty aoriana, ny anarana hoe « Madagascar » no niova ho « Madagasikara », ary ny mponina natao hoe « Malagasy ».",
        ],
      },
      {
        titre: "3. Fanamarihana ho an'ny mpianatra",
        paras: [
          "Misy fiheverana maro momba ny tena niandohan'ny anarana : ny mpandinika sasany milaza fa avy amin'ny teny malaiziana na indianina izy. Ny azo antoka dia ny an-tsoratra voalohany : ny an'i Marco Polo, tamin'ny 1298.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Marco Polo (1254-1324) dia tsy tonga taty Madagasikara, fa ny tantara nentin'ny mpivahiny no nampiasainy. Nanoratra boky izy antsoina hoe “Livre des Merveilles” izay mirakitra ny dia nataony tany Azia. “Madagascar” no anarana nomen'i Marco Polo tamin'ny taona 1298, niova ho “Madagasikara” taty aoriana. »",
      "(Nalaina tao amin'ny FRP T4, LFK 4-a.)",
      "Fanontaniana : a) Firenena inona no niavian'i Marco Polo ? b) Amin'ny taonjato fahafiry ny taona 1298 ?",
      "Valiny : a) Italia (mpivahiny italiana izy). b) Taonjato faha-XIII (1201-1300).",
    ],
  },
  rakibolana: [
    { mg: "Mpivahiny", fr: "Voyageur" },
    { mg: "Nosy", fr: "Île" },
    { mg: "Anarana", fr: "Nom" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Valio : a) Iza i Marco Polo ? b) Inona no anaran'ny bokiny ? d) Oviana izy no nanoratra ny anarana « Madagascar » ? e) Tonga teto ve izy ?",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Mpivahiny italiana (1254-1324)", cle: true }, { text: " ; b) " }, { text: "« Livre des Merveilles »", cle: true }, { text: " ; d) " }, { text: "1298", cle: true }, { text: " ; e) " }, { text: "Tsia", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. Portogey / 2. Frantsay / 3. Marco Polo — a. « l'île dauphine » ; b. « Madagascar » ; d. « São Lourenço ».",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Ny anarana « Madagascar » dia niova ho « … » ary ny mponina dia natao hoe « … » ; ny taona 1298 dia ao amin'ny taonjato faha-….",
      items: [],
      corrige: [[{ text: "Madagasikara", cle: true }, { text: " ; " }, { text: "Malagasy", cle: true }, { text: " ; " }, { text: "XIII", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 13
{
  numero: 13, total: 27, lohahevitra: LH,
  titre: "Ny vanim-potoana lehibe nifandimby teo amin'ny tantaran'i Madagasikara",
  tanjona: "mandahatra araka ny filaharany ireo vanim-potoana dimy lehibe teo amin'ny tantaran'i Madagasikara",
  fahendrena: "Mankamamy ny maha-Malagasy sy ny tantaram-pirenena",
  tetika: "Fitrandrahana frizy kronolojika ; asa an-tarika",
  fanovozanKevitra: DOC + " (FRP T4, LFK 4-b, 4-d)",
  fitaovana: "Frizy kronolojika ; solaitrabe",
  image: "images/img_s13.png",
  imageLegende: "Ny frizy kronolojikan'ny vanim-potoanan'i Madagasikara",
  famerenana: {
    qa: [
      { q: "Iza no nanoratra voalohany ny anarana « Madagascar » ary oviana ?", ra: "I Marco Polo, tamin'ny 1298." },
      { q: "Inona no atao hoe taonjato ?", ra: "Ventim-potoana maharitra 100 taona." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Mampiseho frizy lava misy loko dimy ny mpampianatra : « Ity tsipika ity dia maneho ny tantaran'i Madagasikara manontolo. Firy ny fizarana hitanareo ? »",
    ],
    mpianatra: "Mandinika ny frizy ary manisa ny fizarana dimy.",
    technique: "Fitrandrahana frizy",
    support: "Frizy kronolojika",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo vanim-potoana dimy lehibe nifandimby teo amin'ny tantaran'i Madagasikara.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mitarika ny mpianatra hamaky ny frizy tsirairay : ny anaran'ny vanim-potoana sy ny fotoana nisiany. Manazava ny teny hoe « vanim-potoana » : fitambaran'ny taona maromaro na taonjato vitsivitsy.",
    mpianatra: "Mamaky ny frizy, mitanisa ny vanim-potoana dimy araka ny filaharany.",
    technique: "Asa an-tarika",
    support: "Frizy kronolojika",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe vanim-potoana ?", ra: "Fitambaran'ny taona maromaro na taonjato vitsivitsy." },
      { q: "Tanisao ireo vanim-potoana dimy araka ny filaharany.", ra: "Talohan'ny fahafoko ; ny fahafoko ; ny faha-mpanjaka ; ny fanjanahantany ; ny fahaleovantena." },
      { q: "Oviana no niandohan'ny fahaleovantena ?", ra: "Tamin'ny taona 1960." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina ny vanim-potoana dimy sy ny fotoanany avy, amin'ny alalan'ny frizy.",
    mpianatra: "Mamerina ny famintinana ary mandika ny frizy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Frizy sy kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo araka ny filaharany : fanjanahantany — fahafoko — fahaleovantena — faha-mpanjaka — talohan'ny fahafoko.",
      items: [],
      corrige: [[{ text: "Talohan'ny fahafoko → fahafoko → faha-mpanjaka → fanjanahantany → fahaleovantena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely ; frizy",
  tombana: [
    {
      consigne: "Ampifanandrifio : 1. faha-mpanjaka / 2. fanjanahantany / 3. fahaleovantena — a. 1896-1960 ; b. 1960 ka hatramin'izao ; d. 1500-1896.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-b", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["vanim-potoana", "fahafoko", "faha-mpanjaka", "fanjanahantany", "fahaleovantena", "frizy"],
    sections: [
      {
        titre: "1. Inona no atao hoe vanim-potoana ?",
        paras: [
          "Ny vanim-potoana dia fitambaran'ny taona maromaro na taonjato vitsivitsy. Ny frizy kronolojika no sary tsotra anehoana ny fifandimbiasan'ny vanim-potoana.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo vanim-potoana dimy lehibe",
        paras: [],
        puces: [
          "Talohan'ny fahafoko : talohan'ny taonjato faha-V — mbola vao nisy mponina vitsy ny Nosy.",
          "Ny fahafoko : taonjato faha-V ka hatramin'ny faha-XV — niara-niaina isam-poko ny mponina.",
          "Ny faha-mpanjaka : 1500-1896 — nitsangana ireo fanjakana nifehy faritra midadasika.",
          "Ny fanjanahantany : 1896-1960 — nofehezin'i Frantsa i Madagasikara.",
          "Ny fahaleovantena : nanomboka tamin'ny 26 jona 1960 ka hatramin'izao.",
        ],
      },
      {
        titre: "3. Mamaky ny frizy",
        paras: [
          "Rehefa mamaky frizy dia manaraka ny tsipika miainga avy amin'ny lasa (ankavia) mankany amin'ny ankehitriny (ankavanana) isika. Ny daty no mamaritra ny fiandohan'ny vanim-potoana vaovao.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Fitambaran'ny taona maromaro na taonjato vitsivitsy no atao hoe vanim-potoana. Ireto avy ireo vanim-potoana lehibe nifandimby teo amin'ny tantaran'i Madagasikara : talohan'ny fahafoko (talohan'ny taonjato faha-V) ; fahafoko (taonjato faha-V ka hatramin'ny taonjato faha-XV) ; faha-mpanjaka (1500-1896) ; fanjanahantany (1896-1960) ; fahaleovantena (1960-…). »",
      "(Nalaina tao amin'ny FRP T4, LFK 4-b.)",
      "Fanontaniana : a) Firy taona teo ho eo no naharetan'ny fanjanahantany ? b) Vanim-potoana inona no misy antsika ankehitriny ?",
      "Valiny : a) 64 taona (1896-1960). b) Ny fahaleovantena.",
    ],
  },
  rakibolana: [
    { mg: "Vanim-potoana", fr: "Période" },
    { mg: "Fahafoko", fr: "Période des clans" },
    { mg: "Faha-mpanjaka", fr: "Période royale" },
    { mg: "Fanjanahantany", fr: "Colonisation" },
    { mg: "Fahaleovantena", fr: "Indépendance" },
    { mg: "Frizy kronolojika", fr: "Frise chronologique" },
  ],
  fanazarantena: [
    {
      points: 5,
      consigne: "Tanisao araka ny filaharany ireo vanim-potoana dimy lehibe teo amin'ny tantaran'i Madagasikara.",
      items: [],
      corrige: [[{ text: "1. Talohan'ny fahafoko ; 2. ny fahafoko ; 3. ny faha-mpanjaka ; 4. ny fanjanahantany ; 5. ny fahaleovantena", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Ny faha-mpanjaka dia ny taona … ka hatramin'ny … ; ny fahaleovantena dia nanomboka tamin'ny ….",
      items: [],
      corrige: [[{ text: "1500", cle: true }, { text: " ; " }, { text: "1896", cle: true }, { text: " ; " }, { text: "26 jona 1960", cle: true }, { text: "." }]],
    },
    {
      points: 2,
      consigne: "Marina sa diso ? a) Ny fahafoko dia taorian'ny fanjanahantany. b) Mbola mitohy ny vanim-potoanan'ny fahaleovantena.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Diso : talohany lavitra", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
