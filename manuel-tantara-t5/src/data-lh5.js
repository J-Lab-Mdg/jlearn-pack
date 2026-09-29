// data-lh5.js — LOHAHEVITRA V : NY FANJANAHANTANY TETO MADAGASIKARA 1896-1960 (S18-S24) — Tantara T5
// Loharano : PE T5 (tak. 147-151) sy FRP T5 (LFK 5-a → 5-f)
const DOC = "PE Tantara T5 (MEN) sy FRP T5";
const LH = "V — Ny fanjanahantany teto Madagasikara (1896-1960)";
const FAHENDRENA = "Fitiavan-tanindrazana sy fandraisana andraikitra";

const seances = [

// ============================================================ SEHO 18
{
  numero: 18, total: 30, lohahevitra: LH,
  titre: "Ny fanjanahantany : famaritana sy ireo satan'i Madagasikara",
  tanjona: "mamaritra ny atao hoe fanjanahantany sy mitanisa ireo sata nisy an'i Madagasikara (1895-1960)",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fandinihana tabilao ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-a)",
  fitaovana: "Tabilao ny satas ; lahatsoratra",
  image: "images/img_s18.png",
  imageLegende: "Nidina teto Madagasikara ny sainam-pirenena vahiny : nanomboka ny fanjanahantany",
  famerenana: {
    qa: [
      { q: "Oviana no lasa zanatany frantsay i Madagasikara ?", ra: "Ny 6 aogositra 1896." },
      { q: "Iza no jeneraly frantsay naka an'Antananarivo tamin'ny 1895 ?", ra: "Ny jeneraly Duchesne." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Rehefa resy ny fanjakan'i Madagasikara, iza no nitondra ny Nosy ? Ary nitovy ve ny satany nandritra ny 60 taona ? »",
    ],
    mpianatra: "Maminavina sy mihaino.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny famaritana ny fanjanahantany sy ireo sata nisy an'i Madagasikara teo anelanelan'ny 1895 sy 1960.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny famaritana ny mpampianatra ary mampiseho ny tabilaon'ny sata efatra. Manazava koa ny fifanarahana 5 aogositra 1890 (nizarazaran'ny firenena eoropeanina ny tany).",
    mpianatra: "Mamaky ny tabilao ary mamantatra ny sata efatra sy ny vanim-potoanany.",
    technique: "Fandinihana tabilao",
    support: "Tabilao",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe fanjanahantany ?", ra: "Fakana sy fitondrana tany iray ataon'ny firenena vahiny matanjaka : alainy ny fahefana, ny tany sy ny harena ary fehezany ny mponina." },
      { q: "Inona ny fifanarahana 5 aogositra 1890 ?", ra: "Fifanarahana teo amin'i Frantsa sy Angletera : neken'ny Anglisy ho an'i Frantsa i Madagasikara, ary neken'i Frantsa ho an'ny Anglisy i Zanzibar." },
      { q: "Tanisao ireo sata efatra nisy an'i Madagasikara.", ra: "Protectorat (1895-1896) ; zanatany (1896-1945) ; Territoire d'Outre-Mer tao amin'ny Union française (1946-1958) ; firaisambe frantsay (1958-1960)." },
      { q: "Oviana no niverina ny fahaleovantena ?", ra: "Ny 26 jona 1960." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Tabilao sy lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny fanjanahantany dia fitondran'ny firenena vahiny ny tany iray ; sata efatra no nisy an'i Madagasikara (protectorat, zanatany, TOM, firaisambe) mandra-piverin'ny fahaleovantena tamin'ny 26 jona 1960.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. protectorat / 2. zanatany / 3. TOM / 4. firaisambe — a. 1896-1945 ; b. 1958-1960 ; d. 1895-1896 ; e. 1946-1958.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-e", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito amin'ny fehezanteny roa ny atao hoe fanjanahantany.",
      items: [],
      corrige: [[{ text: "Fakana sy fitondrana tany iray ataon'ny firenena vahiny matanjaka : alainy ny fahefana, ny tany sy ny harena ary fehezany ny mponina", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanjanahantany", "protectorat", "zanatany", "TOM", "firaisambe"],
    sections: [
      {
        titre: "1. Famaritana ny fanjanahantany",
        paras: [
          "Ny fanjanahantany dia ny fakana sy ny fitondrana tany iray ataon'ny firenena vahiny matanjaka : alainy ny fahefana, ny tany sy ny harena ary fehezany ny mponina hiasa ho azy.",
          "Tamin'ny fifanarahana 5 aogositra 1890 dia neken'ny Anglisy ho zaram-pahefan'i Frantsa i Madagasikara, ary neken'i Frantsa ho an'ny Anglisy kosa i Zanzibar.",
        ],
        puces: [],
      },
      {
        titre: "2. Ireo satan'i Madagasikara (1895-1960)",
        paras: [],
        puces: [
          "1895-1896 : PROTECTORAT — mbola nisy ny mpanjaka fa ny Frantsay no nibaiko.",
          "1896-1945 : ZANATANY (colonie) — nofoanana ny fanjakana ; ny governora jeneraly frantsay no nitondra.",
          "1946-1958 : TERRITOIRE D'OUTRE-MER (TOM) tao amin'ny Union française.",
          "1958-1960 : FIRAISAMBE FRANTSAY (Communauté française) — Repoblika Malagasy voalohany (14 oktobra 1958).",
        ],
      },
      {
        titre: "3. Ny fiafarany",
        paras: [
          "Niverina ny fahaleovantenan'i Madagasikara ny 26 jona 1960.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Tamin'ny faran'ny taonjato XIX dia nifaninana ny firenena eoropeanina haka zanatany tany Afrika sy Azia : izany no atao hoe « fizarazarana an'i Afrika ». Tao anatin'izany no nanekena an'i Madagasikara ho an'i Frantsa (1890).",
      "Fanontaniana : Nahoana ny firenena eoropeanina no nifaninana naka zanatany ?",
      "Valiny : Nila akora sy tany ary tsena ho an'ny orinasany izy ireo, sady naniry laza sy hery.",
    ],
  },
  rakibolana: [
    { mg: "Fanjanahantany", fr: "Colonisation" },
    { mg: "Sata", fr: "Statut" },
    { mg: "Zanatany", fr: "Colonie" },
    { mg: "Firaisambe", fr: "Communauté" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Tamin'ny fifanarahana 5 aogositra … dia neken'ny … ho an'i Frantsa i Madagasikara ; ho takalon'izany dia neken'i Frantsa ho an'ny Anglisy i ….",
      items: [],
      corrige: [[{ text: "1890", cle: true }, { text: " ; " }, { text: "Anglisy", cle: true }, { text: " ; " }, { text: "Zanzibar", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Alaharo araka ny fotoana : TOM ; protectorat ; firaisambe ; zanatany.",
      items: [],
      corrige: [[{ text: "Protectorat (1895-1896) → zanatany (1896-1945) → TOM (1946-1958) → firaisambe (1958-1960)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Naharitra 60 taona mahery ny fanjanahantany. b) Ny 26 jona 1960 no niverenan'ny fahaleovantena. d) Tamin'ny protectorat dia nofoanana avy hatrany ny fanjakana.",
      items: [],
      corrige: [[{ text: "a) Marina (1896-1960)", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : mbola nisy ny mpanjaka fa ny Frantsay no nibaiko", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 19
{
  numero: 19, total: 30, lohahevitra: LH,
  titre: "Ny rafi-pitantanan'ny mpanjanaka",
  tanjona: "maneho ny rafi-pitantanana napetraky ny mpanjanaka teto Madagasikara",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana kisarisary (organigrama) ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-a)",
  fitaovana: "Kisarisarin'ny rafi-pitantanana ; lahatsoratra",
  image: "images/img_s19.png",
  imageLegende: "Ny biraon'ny fitondrana mpanjanaka : ny governora jeneraly no fara-tampony",
  famerenana: {
    qa: [
      { q: "Tanisao ireo sata efatra nisy an'i Madagasikara.", ra: "Protectorat, zanatany, TOM, firaisambe frantsay." },
      { q: "Inona no atao hoe fanjanahantany ?", ra: "Fakana sy fitondrana tany iray ataon'ny firenena vahiny matanjaka." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Ahoana no nitantanan'ny Frantsay ny Nosy lehibe toy izao ? Nisy filaharana avy any ambony ka hatrany amin'ny fokontany. Andao hojerentsika. »",
    ],
    mpianatra: "Maminavina ny rafitra.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny rafi-pitantanana napetraky ny mpanjanaka.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny kisarisarin'ny rafi-pitantanana ny mpampianatra : governora jeneraly → province → district → canton → arrondissement → village/quartier. Manazava ny anjara asan'ny tsirairay.",
    mpianatra: "Mandinika ny kisarisary ary mamerina ny filaharana.",
    technique: "Fandinihana kisarisary",
    support: "Kisarisary",
  },
  famakafakana: {
    qa: [
      { q: "Iza no fara-tampon'ny fitondrana mpanjanaka teto Madagasikara ?", ra: "Ny governora jeneraly, solontenan'i Frantsa ; i Gallieni no voalohany (1896)." },
      { q: "Ahoana ny fizarazarana ny tany ?", ra: "Nozaraina ho province ny Nosy, ny province ho district, ny district ho canton, ny canton ho arrondissement, ary farany ny village sy ny quartier." },
      { q: "Firy ny governora jeneraly nifandimby ?", ra: "Governora jeneraly sahabo ho 14 no nifandimby (1896-1946), ary haut-commissaire 4 (1946-1960)." },
      { q: "Iza no nitantana ny ambaratonga ambany ?", ra: "Ny mpiasam-panjakana frantsay no tao amin'ny ambaratonga ambony ; Malagasy notendrena no nanatanteraka ny baiko tany amin'ny ambaratonga ambany." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Kisarisary",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny governora jeneraly (Gallieni no voalohany) no fara-tampony ; nozaraina ho province, district, canton, arrondissement, village/quartier ny Nosy ; ny Frantsay no nibaiko, ny Malagasy no nanatanteraka.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Alaharo avy any ambony : canton ; province ; village ; district.",
      items: [],
      corrige: [[{ text: "Province → district → canton → village", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Iza no governora jeneraly frantsay voalohany ary inona no anjara asan'ny governora jeneraly ?",
      items: [],
      corrige: [[{ text: "Gallieni (1896)", cle: true }, { text: " ; " }, { text: "izy no fara-tampon'ny fitondrana, solontenan'i Frantsa, nibaiko ny fitantanana manontolo", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["governora jeneraly", "Gallieni", "province", "district", "canton"],
    sections: [
      {
        titre: "1. Ny governora jeneraly",
        paras: [
          "Ny governora jeneraly, solontenan'i Frantsa, no fara-tampon'ny fitondrana teto Madagasikara. I Gallieni no voalohany (1896-1905). Governora jeneraly sahabo ho 14 no nifandimby (1896-1946), ary haut-commissaire 4 (1946-1960).",
        ],
        puces: [],
      },
      {
        titre: "2. Ny fizarazarana ny tany",
        paras: [
          "Mba hifehezana ny Nosy manontolo dia nozaraina ambaratonga maro izy :",
        ],
        puces: [
          "Province (faritany)",
          "District (distrika)",
          "Canton (kantao)",
          "Arrondissement (boriboritany)",
          "Village sy quartier (tanàna sy fokontany)",
        ],
      },
      {
        titre: "3. Ny mpitantana",
        paras: [
          "Ny mpiasam-panjakana frantsay no nitana ny ambaratonga ambony ; Malagasy notendrena kosa no nanatanteraka ny baiko tany amin'ny ambaratonga ambany. Ny tanjon'io rafitra io dia ny hifehy akaiky ny mponina sy ny harena.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "I Gallieni no nametraka ny « politikan'ny foko » (politique des races) : nozarazarainy ny Malagasy mba tsy hiray hina hanohitra ny fanjanahantany.",
      "Fanontaniana : Inona no tanjon'ny « politikan'ny foko » ?",
      "Valiny : Ny hampisaraka ny Malagasy mba tsy hiray hina hanohitra ny mpanjanaka.",
    ],
  },
  rakibolana: [
    { mg: "Rafi-pitantanana", fr: "Structure administrative" },
    { mg: "Faritany", fr: "Province" },
    { mg: "Distrika", fr: "District" },
    { mg: "Solontena", fr: "Représentant" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny filaharana : governora jeneraly → … → district → … → arrondissement → village sy ….",
      items: [],
      corrige: [[{ text: "province", cle: true }, { text: " ; " }, { text: "canton", cle: true }, { text: " ; " }, { text: "quartier", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Gallieni no governora jeneraly voalohany. b) Governora jeneraly sahabo ho 14 no nifandimby. d) Malagasy no nitana ny ambaratonga ambony.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Diso : Frantsay no tambony, Malagasy no nanatanteraka baiko", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana ny mpanjanaka no nizarazara ny tany ho ambaratonga maro ?",
      items: [],
      corrige: [[{ text: "Mba hifehezany akaiky ny mponina sy ny harena ; mora ny mibaiko rehefa voazara madinika ny tany", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 20
{
  numero: 20, total: 30, lohahevitra: LH,
  titre: "Ny fisehon'ny fanjanahantany ara-toekarena",
  tanjona: "manazava ny fisehon'ny fanjanahantany teo amin'ny lafiny ara-toekarena",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; asa an-tarika ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-a)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s20.png",
  imageLegende: "Nentina any amin'ny seranana ny vokatry ny tany : ny toekarena natao ho an'ny mpanjanaka",
  famerenana: {
    qa: [
      { q: "Iza no fara-tampon'ny fitondrana mpanjanaka ?", ra: "Ny governora jeneraly (Gallieni no voalohany)." },
      { q: "Ahoana ny fizarazarana ny tany ?", ra: "Province, district, canton, arrondissement, village/quartier." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Ho an'iza ny vokatry ny tany sy ny harena teto Madagasikara tamin'ny fanjanahantany ? Ho an'ny Malagasy ve sa ho an'ny mpanjanaka ? »",
    ],
    mpianatra: "Maminavina sy maneho ny heviny.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fisehon'ny fanjanahantany ara-toekarena.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra ary mitarika ny mpianatra hamantatra : ny pacte colonial, ny kaompania vazaha, ny fibodoana ny tany, ny hetra.",
    mpianatra: "Mamaky sy manamarika ireo endrika efatra.",
    technique: "Famakiana lahatsoratra arahina fanontaniana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe pacte colonial ?", ra: "Fitsipika nametra fa ny zanatany dia mamokatra akora ho an'ny firenena mpanjanaka ary mividy ny entana vitany : toekarena natao ho an'ny mpanjanaka (économie de traite)." },
      { q: "Iza avy ireo kaompania vazaha nifehy ny varotra ?", ra: "Ny SICE, ny Compagnie Marseillaise, ny Compagnie Lyonnaise…" },
      { q: "Inona no nitranga tamin'ny tany lonaka ?", ra: "Nobodoin'ny mpanjanaka sy ny voanjo (colons) ny tany lonaka maro ka very tany ny Malagasy." },
      { q: "Inona ny hetra isan-dahy ?", ra: "Hetra tsy maintsy naloan'ny lehilahy malagasy rehetra ; izay tsy nahaloa dia noterena hiasa." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : natao ho an'ny mpanjanaka ny toekarena — pacte colonial sy économie de traite, kaompania vazaha nifehy ny varotra, fibodoana ny tany lonaka, hetra isan-dahy nanindry ny vahoaka.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Tamin'ny pacte colonial dia namokatra … ho an'ny firenena mpanjanaka ny zanatany ary nividy ny … vitany.",
      items: [],
      corrige: [[{ text: "akora", cle: true }, { text: " ; " }, { text: "entana", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao endrika efatra nisehoan'ny fanjanahantany ara-toekarena.",
      items: [],
      corrige: [[{ text: "Ny pacte colonial (économie de traite) ; ny kaompania vazaha nifehy ny varotra ; ny fibodoana ny tany lonaka ; ny hetra isan-dahy", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["pacte colonial", "kaompania", "fibodoana tany", "hetra isan-dahy"],
    sections: [
      {
        titre: "1. Ny pacte colonial sy ny économie de traite",
        paras: [
          "Natao ho an'ny mpanjanaka ny toekarena : ny zanatany dia namokatra akora (kafé, jirofo, lavanila, harena an-kibon'ny tany…) naondrana any Frantsa, ary nividy ny entana vita any Frantsa kosa. Izany no atao hoe pacte colonial sy économie de traite.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny kaompania vazaha sy ny fibodoana ny tany",
        paras: [],
        puces: [
          "Kaompania vazaha lehibe no nifehy ny varotra : ny SICE, ny Compagnie Marseillaise, ny Compagnie Lyonnaise…",
          "Nobodoin'ny mpanjanaka sy ny voanjo (colons) ny tany lonaka maro ka very ny tanin'ny Malagasy.",
        ],
      },
      {
        titre: "3. Ny hetra isan-dahy",
        paras: [
          "Tsy maintsy nandoa hetra isan-dahy ny lehilahy malagasy rehetra. Izay tsy nahaloa dia noterena hiasa ho an'ny fanjakana mpanjanaka. Nanindry mafy ny vahoaka io hetra io ary nanery azy hiasa amin'ny toham-boly sy ny orinasan'ny vazaha.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny hoe « économie de traite » dia toekarena natao hivoahan'ny harena : ny akora avy amin'ny zanatany no naondrana mora, ary ny entana vita tany Frantsa no namidy lafo tamin'ny mponina.",
      "Fanontaniana : Iza no nahazo tombony tamin'ny économie de traite ?",
      "Valiny : Ny firenena mpanjanaka sy ny kaompania vazaha ; ny mponina malagasy kosa no namokatra sy nandoa.",
    ],
  },
  rakibolana: [
    { mg: "Akora", fr: "Matière première" },
    { mg: "Kaompania", fr: "Compagnie (commerciale)" },
    { mg: "Voanjo (colons)", fr: "Colons" },
    { mg: "Hetra isan-dahy", fr: "Impôt de capitation" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny zanatany dia namokatra akora ho an'i Frantsa. b) Ny Malagasy no tompon'ny kaompania lehibe. d) Nobodoina ny tany lonaka maro. e) Nandoa hetra isan-dahy ny lehilahy malagasy.",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : kaompania vazaha (SICE, Marseillaise, Lyonnaise…)", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao kaompania vazaha roa nifehy ny varotra teto Madagasikara.",
      items: [],
      corrige: [[{ text: "Ny SICE, ny Compagnie Marseillaise (na ny Compagnie Lyonnaise)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : inona no vokatry ny fibodoana ny tany lonaka teo amin'ny tantsaha malagasy ?",
      items: [],
      corrige: [[{ text: "Very ny taniny ny tantsaha maro ka voatery niasa tamin'ny tanin'ny voanjo ; nihamahantra sy niankina tamin'ny vazaha izy ireo", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 21
{
  numero: 21, total: 30, lohahevitra: LH,
  titre: "Ny fisehon'ny fanjanahantany ara-piarahamonina",
  tanjona: "manazava ny fisarahan'ny saranga sy ny endri-panabeazana tamin'ny fanjanahantany",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fifanakalozan-kevitra ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-a)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s21.png",
  imageLegende: "Sekoly roa tsy mitovy : ho an'ny zanaky ny vazaha sy ho an'ny zanaky ny « indigènes »",
  famerenana: {
    qa: [
      { q: "Inona no atao hoe pacte colonial ?", ra: "Ny zanatany mamokatra akora ho an'ny mpanjanaka ary mividy ny entany." },
      { q: "Inona ny hetra isan-dahy ?", ra: "Hetra naloan'ny lehilahy malagasy rehetra." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Nitovy zo ve ny olona rehetra teto Madagasikara tamin'ny fanjanahantany ? Nitovy ve ny sekolin'ny zanaky ny vazaha sy ny an'ny zanaky ny Malagasy ? »",
    ],
    mpianatra: "Maminavina sy maneho ny heviny.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fisehon'ny fanjanahantany ara-piarahamonina : ny saranga sy ny fanabeazana.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra : nozarazaraina ny mponina (citoyens, colons, indigènes) ary nisaratsaraka koa ny sekoly. Mitarika fifanakalozan-kevitra momba ny tsy fitoviana.",
    mpianatra: "Mamaky, mamaly ary maneho ny fahatsapany.",
    technique: "Famakiana lahatsoratra sy fifanakalozan-kevitra",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Tanisao ireo saranga nisy tamin'ny fanjanahantany.", ra: "Ny olom-pirenena frantsay (citoyens : mpitondra, mpiandraikitra, manamboninahitra) ; ny voanjo (colons) sy ny Malagasy vitsy nahazo tombontsoa ; ary ny « indigènes » — ny Malagasy ankamaroany." },
      { q: "Inona ny code de l'indigénat ?", ra: "Lalàna manokana nifehy ny « indigènes » : azo nosaziana tsy nisy fitsarana izy ireo ary tsy nitovy zo tamin'ny citoyens." },
      { q: "Ahoana ny endri-panabeazana ?", ra: "Nisaratsaraka : sekoly kalitao ho an'ny vazaha sy ny citoyens (Le Myre de Vilers, École de Médecine Befelatanana, École européenne…) fa sekoly tsotra ho an'ny « indigènes », natao hamokatra sy hanatanteraka baiko fotsiny." },
      { q: "Inona no fiantraikan'izany ?", ra: "Fiarahamonina nanjakan'ny tsy fitoviana tanteraka : ny mpanjanaka nihevi-tena ho ambony noho ny Malagasy." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : nozarazaraina ny mponina (citoyens, colons, indigènes) ; ny code de l'indigénat no nanindry ny Malagasy ; nisaratsaraka ny sekoly ka tsy nitovy ny fanabeazana — fiarahamonina tsy nisy fitoviana.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny Malagasy ankamaroany dia natao hoe « … » ary nofehezin'ny lalàna atao hoe code de l'….",
      items: [],
      corrige: [[{ text: "indigènes", cle: true }, { text: " ; " }, { text: "indigénat", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Hazavao amin'ny fehezanteny roa ny tsy fitoviana teo amin'ny fanabeazana tamin'ny fanjanahantany.",
      items: [],
      corrige: [[{ text: "Sekoly kalitao (Le Myre de Vilers, Befelatanana…) no ho an'ny vazaha sy ny citoyens ; sekoly tsotra natao hamokatra sy hanatanteraka baiko kosa no ho an'ny « indigènes »", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["citoyens", "indigènes", "code de l'indigénat", "sekoly"],
    sections: [
      {
        titre: "1. Ny fisarahan'ny saranga",
        paras: [],
        puces: [
          "Ny olom-pirenena frantsay (citoyens) : ny mpitondra fanjakana, ny mpiandraikitra, ny manamboninahitra.",
          "Ny voanjo (colons) sy ireo Malagasy vitsy nahazo tombontsoa manokana.",
          "Ny « indigènes » : ny Malagasy ankamaroany, niasa sy nanatanteraka ny baikon'ny fitondrana.",
        ],
      },
      {
        titre: "2. Ny code de l'indigénat",
        paras: [
          "Ny « indigènes » dia nofehezin'ny lalàna manokana atao hoe code de l'indigénat : azo nosaziana tsy nisy fitsarana izy ireo, tsy afaka nivezivezy malalaka ary tsy nitovy zo tamin'ny citoyens. Nihevitra ny tenany ho ambony noho ny Malagasy ny mpanjanaka.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny endri-panabeazana nisaratsaraka",
        paras: [],
        puces: [
          "Sekoly kalitao ho an'ny vazaha sy ny citoyens : Le Myre de Vilers (Mahamasina), École régionale (Mantasoa), École de Médecine (Befelatanana), École européenne.",
          "Sekoly tsotra ho an'ny « indigènes » : natao hamokatra sy hanatanteraka baiko ary hiasa ho an'ny mpanjanaka.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Nanjakan'ny fahasamihafana ny endri-panabeazana nisy satria nisy ny sekoly voatokana ho an'ny vazaha sy ny olom-pirenena frantsay ary nisy ny sekoly tsotra ho an'ny Malagasy “indigènes” izay natao hanatanteraka baiko sy hamokatra ary hiasa ho an'ny mpanjanaka. » (Nalaina tao amin'ny FRP T5, LFK 5-a.)",
      "Fanontaniana : Inona no tanjon'ny sekoly natokana ho an'ny « indigènes » ?",
      "Valiny : Ny hanofana azy hanatanteraka baiko sy hamokatra ho an'ny mpanjanaka fa tsy ny hampandroso azy.",
    ],
  },
  rakibolana: [
    { mg: "Olom-pirenena", fr: "Citoyen" },
    { mg: "Tsy fitoviana", fr: "Inégalité" },
    { mg: "Fanabeazana", fr: "Éducation" },
    { mg: "Sazy", fr: "Sanction, punition" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. citoyens / 2. voanjo / 3. indigènes — a. ny Malagasy ankamaroany ; b. ny olom-pirenena frantsay ; d. ny colons nahazo tany sy tombontsoa.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao sekoly roa natokana ho an'ny vazaha sy ny citoyens.",
      items: [],
      corrige: [[{ text: "Le Myre de Vilers (Mahamasina), École de Médecine Befelatanana (na École régionale Mantasoa, École européenne)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana no tsy rariny ny code de l'indigénat ?",
      items: [],
      corrige: [[{ text: "Satria nosaziana tsy nisy fitsarana ny Malagasy ary tsy nitovy zo tamin'ny citoyens izy ; mifanohitra amin'ny fitoviana sy ny zon'olombelona izany", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 22
{
  numero: 22, total: 30, lohahevitra: LH,
  titre: "Ny SMOTIG : asam-panompoana sy asa an-terivozona",
  tanjona: "manazava ny atao hoe SMOTIG sy ny fiantraikany teo amin'ny vahoaka malagasy",
  fahendrena: FAHENDRENA,
  tetika: "Famakiana lahatsoratra ; fandinihana sary ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-b)",
  fitaovana: "Lahatsoratra ; sary",
  image: "images/img_s22.png",
  imageLegende: "Ny asa an-terivozona : fanamboarana lalana sy lalamby ho an'ny mpanjanaka",
  famerenana: {
    qa: [
      { q: "Inona ny code de l'indigénat ?", ra: "Lalàna manokana nifehy ny « indigènes » : azo nosaziana tsy nisy fitsarana izy ireo." },
      { q: "Nitovy ve ny sekoly rehetra ?", ra: "Tsia : sekoly kalitao ho an'ny vazaha, sekoly tsotra ho an'ny « indigènes »." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Iza no nanamboatra ny lalana sy ny lalamby tamin'ny fanjanahantany ? Nandray karama ve izy ireo ? »",
    ],
    mpianatra: "Maminavina sy mihaino.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny SMOTIG sy ny asa an-terivozona.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mamaky ny lahatsoratra ny mpampianatra ary manazava ny hevitry ny sigla SMOTIG (Service de la Main-d'Œuvre pour les Travaux d'Intérêt Général — sampan-draharaha misahana ny mpiasa amin'ny asa fanasoavam-bahoaka). Mampiseho sary ny fanamboarana lalana sy lalamby.",
    mpianatra: "Mamaky, mandinika ny sary ary mamaly.",
    technique: "Famakiana lahatsoratra sy fandinihana sary",
    support: "Lahatsoratra sy sary",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny SMOTIG ?", ra: "Asam-panompoana tsy andraisana karama : ny vatan-dehilahy malagasy 15 ka hatramin'ny 60 taona dia noterena hiasa 10 ka hatramin'ny 50 andro isan-taona." },
      { q: "Inona no asa nampanaovina azy ireo ?", ra: "Fanamboarana lalana, lalamby, tetezana, tonelina sy fotodrafitrasa hafa." },
      { q: "Nahoana ny mpanjanaka no nanao izany ?", ra: "Mba hamahana ny olan'ny tsy fahampian'ny mpiasa sy mba hahafahany manondrana mora ny harem-pirenena malagasy." },
      { q: "Inona ny fiantraikany teo amin'ny vahoaka ?", ra: "Nijaly sy trotraka ny lehilahy ; maro no maty ; nilaozana ny fambolena tany an-tanàna ka nihamahantra ny fianakaviana." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny SMOTIG dia asa an-terivozona tsy nandraisana karama (10-50 andro, lehilahy 15-60 taona) nanamboarana lalana sy lalamby ho an'ny mpanjanaka ; nampijaly ny vahoaka izy io.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Fenoy : Ny SMOTIG dia asam-panompoana naharitra … ka hatramin'ny … andro, nataon'ny lehilahy … ka hatramin'ny … taona.",
      items: [],
      corrige: [[{ text: "10", cle: true }, { text: " ; " }, { text: "50", cle: true }, { text: " ; " }, { text: "15", cle: true }, { text: " ; " }, { text: "60", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Farito ny SMOTIG ary lazao ny tena antony nanaovan'ny mpanjanaka azy.",
      items: [],
      corrige: [[{ text: "Asam-panompoana tsy andraisana karama noteren'ny mpanjanaka ny lehilahy malagasy (10-50 andro, 15-60 taona)", cle: true }, { text: " ; " }, { text: "mba hanamboarana lalana sy lalamby ahafahany manondrana mora ny harem-pirenena", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["SMOTIG", "asa an-terivozona", "lalamby", "fotodrafitrasa"],
    sections: [
      {
        titre: "1. Ny atao hoe SMOTIG",
        paras: [
          "Ny SMOTIG (Service de la Main-d'Œuvre pour les Travaux d'Intérêt Général) dia asam-panompoana tsy nandraisana karama : ny vatan-dehilahy malagasy 15 ka hatramin'ny 60 taona dia noterena hiasa 10 ka hatramin'ny 50 andro isan-taona ho an'ny fanjakana mpanjanaka.",
        ],
        puces: [],
      },
      {
        titre: "2. Ny asa nampanaovina",
        paras: [
          "Niompana tamin'ny fanorenana fotodrafitrasa ny asa : fanamboarana lalana, lalamby, tetezana sy tonelina. Ny tanjony dia ny hahafahan'ny mpanjanaka manondrana mora foana ny harem-pirenena malagasy any amin'ny seranana.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny fiantraikany teo amin'ny vahoaka",
        paras: [],
        puces: [
          "Nijaly sy trotraka ny lehilahy ; maro no narary sy maty noho ny hasarotry ny asa.",
          "Nilaozana ny fambolena tany an-tanàna ka nihamahantra ny fianakaviana.",
          "Nampitombo ny lolom-po tamin'ny mpanjanaka izy io ka isan'ny nipoiran'ny hetsika fanoherana.",
        ],
      },
    ],
    tahirinKevitra: [
      "« Ho famahana ny olan'ny asa dia noteren'ny mpanjanaka hanao asa izay tsy maintsy ataon'ireo mponina voazanaka. » (Nalaina tao amin'ny FRP T5, LFK 5-b.)",
      "Fanontaniana : Nahoana ny SMOTIG no antsoina hoe « asa an-terivozona » ?",
      "Valiny : Satria noterena ny olona ary tsy nandray karama : tsy safidiny ny niasa.",
    ],
  },
  rakibolana: [
    { mg: "Asa an-terivozona", fr: "Travail forcé" },
    { mg: "Asam-panompoana", fr: "Corvée" },
    { mg: "Lalamby", fr: "Chemin de fer" },
    { mg: "Tonelina", fr: "Tunnel" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Nandray karama ny mpiasa tao amin'ny SMOTIG. b) Ny lehilahy 15-60 taona no noterena. d) Fanamboarana lalana sy lalamby no asa lehibe. e) Nampitombo ny fitiavan'ny vahoaka ny mpanjanaka ny SMOTIG.",
      items: [],
      corrige: [[{ text: "a) Diso : tsy nandray karama izy ireo", cle: true }, { text: " ; b) " }, { text: "Marina", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso : nampitombo ny lolom-po sy ny fanoherana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : inona no fiantraikan'ny SMOTIG teo amin'ny fianakaviana malagasy ?",
      items: [],
      corrige: [[{ text: "Lasa lavitra ny lehilahy ka nilaozana ny fambolena ; nihamahantra sy nijaly ny fianakaviana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny teny malagasy tsotra ny hevitry ny sigla SMOTIG.",
      items: [],
      corrige: [[{ text: "Sampan-draharaha nisahana ny mpiasa noterena tamin'ny asa fanasoavam-bahoaka (lalana, lalamby…)", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 23
{
  numero: 23, total: 30, lohahevitra: LH,
  titre: "Ireo hetsika fanoherana ny fanjanahantany",
  tanjona: "mitanisa ireo hetsika fanoherana ny fanjanahantany sy ny zava-notakiny",
  fahendrena: FAHENDRENA,
  tetika: "Fandinihana frisem-potoana ; asa an-tarika ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-d)",
  fitaovana: "Frisem-potoanan'ny tolona ; lahatsoratra",
  image: "images/img_s23.png",
  imageLegende: "Nitolona hatrany ny Malagasy mba hamerenana ny fahaleovantena",
  famerenana: {
    qa: [
      { q: "Inona ny SMOTIG ?", ra: "Asa an-terivozona tsy nandraisana karama nanamboarana lalana sy lalamby." },
      { q: "Inona no fiantraikany teo amin'ny vahoaka ?", ra: "Nijaly ny vahoaka ka nitombo ny lolom-po tamin'ny mpanjanaka." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Nanaiky fotsiny ve ny Malagasy nandritra ny fanjanahantany sa nitolona ? Andao hojerentsika ireo hetsika fanoherana. »",
    ],
    mpianatra: "Mamaly : nitolona ny Malagasy.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ireo hetsika fanoherana ny fanjanahantany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frisem-potoanan'ny tolona ny mpampianatra ary mizara ny hetsika isan-tarika : ny fotoana sy toerana, ny mpitarika, ny zava-notakiny, ny vokany.",
    mpianatra: "Miasa isan-tarika ary mampiseho ny hetsika iray avy.",
    technique: "Asa an-tarika",
    support: "Frisem-potoana sy lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny hetsika nanohitra ny fidiran'ny vahiny ?", ra: "Ny Menalamba (1895-1898) tany afovoan-tany, ary ny Sadiavahy (1904-1905) tany amin'ny faritra atsimo." },
      { q: "Inona ny hetsika nitaky ny fitovian-jo tamin'ny Frantsay ?", ra: "Ny VVS (Vy Vato Sakelika, 1913-1915), fikambanan'ny tanora nianatra ; ary ny tolon'i Jean Ralaimongo (1919-1930)." },
      { q: "Inona ny hetsika nitaky ny fahaleovantena ?", ra: "Ny JINA sy ny PANAMA (fikambanana miafina) ary ny MDRM ; nipoaka ny tolona tamin'ny 29 martsa 1947." },
      { q: "Inona no niafaran'ny tolona rehetra ?", ra: "Na dia nohenjehina mafy aza ny mpitolona dia niverina ihany ny fahaleovantena ny 26 jona 1960." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : tsy nanaiky ny Malagasy — Menalamba sy Sadiavahy (fanoherana ny vahiny), VVS sy Ralaimongo (fitovian-jo), JINA/PANAMA/MDRM sy ny 1947 (fahaleovantena) ; niverina ny fahaleovantena tamin'ny 26 jona 1960.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio : 1. Menalamba / 2. VVS / 3. MDRM — a. fitakiana fahaleovantena (1946-1947) ; b. fanoherana ny fidiran'ny vahiny (1895-1898) ; d. fitakiana fitovian-jo (1913-1915).",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao hetsika fanoherana efatra ary lazao ny zava-notakin'ny iray aminy.",
      items: [],
      corrige: [[{ text: "Ohatra : Menalamba, Sadiavahy, VVS, MDRM", cle: true }, { text: " ; " }, { text: "ny MDRM dia nitaky ny fahaleovantena", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["Menalamba", "Sadiavahy", "VVS", "Ralaimongo", "MDRM", "1947"],
    sections: [
      {
        titre: "1. Ny fanoherana ny fidiran'ny vahiny",
        paras: [],
        puces: [
          "Ny MENALAMBA (1895-1898) : tany amin'ny faritra afovoan-tany ; nanohitra ny fidiran'ny vahiny sy ny fanjanahantany.",
          "Ny SADIAVAHY (1904-1905) : tany amin'ny faritra atsimo.",
        ],
      },
      {
        titre: "2. Ny fitakiana ny fitovian-jo",
        paras: [],
        puces: [
          "Ny VVS (Vy Vato Sakelika, 1913-1915) : fikambanan'ny tanora nianatra ; nitaky ny fitovian-jo tamin'ny Frantsay ; nohenjehina mafy ny mpikambana.",
          "Ny tolon'i Jean RALAIMONGO (1919-1930) : nampiasa ny gazety sy ny lalàna izy nitakiana ny zon'ny Malagasy.",
        ],
      },
      {
        titre: "3. Ny fitakiana ny fahaleovantena",
        paras: [
          "Ny JINA sy ny PANAMA (fikambanana miafina) ary ny MDRM (Mouvement Démocratique de la Rénovation Malgache, 1946) dia nitaky ny fahaleovantena. Nipoaka ny tolona tamin'ny 29 martsa 1947 ka vahoaka maro no maty tamin'ny famoretana.",
          "Na izany aza dia niverina ihany ny fahaleovantena ny 26 jona 1960 : vokatry ny tolona sy ny fitiavan-tanindrazan'ny Malagasy izany.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "Ny tolona tsirairay dia samy manana ny fotoana sy ny toerana nitrangany, ny mpitarika azy, ny zava-notakiny ary ny vokany. (Nalaina tao amin'ny FRP T5, LFK 5-d.)",
      "Fanontaniana : Inona no itovizan'ireo tolona rehetra ireo ?",
      "Valiny : Samy naneho ny fitiavan-tanindrazana sy ny tsy fanekena ny fanjanahantany avokoa izy rehetra.",
    ],
  },
  rakibolana: [
    { mg: "Tolona", fr: "Lutte, résistance" },
    { mg: "Fikambanana miafina", fr: "Société secrète" },
    { mg: "Fitovian-jo", fr: "Égalité des droits" },
    { mg: "Famoretana", fr: "Répression" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. Sadiavahy / 2. Ralaimongo / 3. JINA sy PANAMA / 4. VVS — a. fikambanana miafina ; b. faritra atsimo (1904-1905) ; d. fikambanan'ny tanora nianatra ; e. gazety sy lalàna (1919-1930).",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-e", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: " ; " }, { text: "4-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Fenoy : Nipoaka ny tolona lehibe ny 29 … 1947 ; niverina ny fahaleovantena ny 26 … 1960.",
      items: [],
      corrige: [[{ text: "martsa", cle: true }, { text: " ; " }, { text: "jona", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : inona no lesona omen'ireo mpitolona antsika ankehitriny ?",
      items: [],
      corrige: [[{ text: "Valiny malalaka — ohatra : sarobidy ny fahaleovantena ka tokony harovana ; ny fitiavan-tanindrazana dia aseho amin'ny asa sy ny fandraisana andraikitra", cle: true }, { text: "." }]],
    },
  ],
},

// ============================================================ SEHO 24
{
  numero: 24, total: 30, lohahevitra: LH,
  titre: "Ny zava-bitan'ny mpanjanaka sy ny fiantraikan'ny fanjanahantany",
  tanjona: "mitanisa ny zava-bitan'ny mpanjanaka sy manazava ny fiantraikan'ny fanjanahantany",
  fahendrena: FAHENDRENA,
  tetika: "Asa an-tarika ; fampitahana ; fanontaniana/valiny",
  fanovozanKevitra: DOC + " (LFK 5-e, 5-f)",
  fitaovana: "Lahatsoratra ; solaitrabe",
  image: "images/img_s24.png",
  imageLegende: "Ny lalamby nolovana tamin'ny fanjanahantany : nisy zava-bita fa lafo ny vidiny",
  famerenana: {
    qa: [
      { q: "Tanisao hetsika fanoherana telo.", ra: "Menalamba, Sadiavahy, VVS (na Ralaimongo, JINA/PANAMA, MDRM)." },
      { q: "Oviana no niverina ny fahaleovantena ?", ra: "Ny 26 jona 1960." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "« Misy lalamby sy sekoly ary hopitaly nolovana tamin'ny fanjanahantany. Midika ve izany fa tsara ny fanjanahantany ? Andao handanjalanja. »",
    ],
    mpianatra: "Maneho ny heviny malalaka.",
    technique: "Resadresaka",
    support: "—",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia handanjalanja ny zava-bitan'ny mpanjanaka sy ny fiantraikan'ny fanjanahantany.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mizara ny kilasy ho tarika roa ny mpampianatra : ny iray mitanisa ny zava-bita (ara-toekarena, ara-tsosialy), ny iray mitanisa ny fiantraikany ratsy. Avy eo ampitahaina.",
    mpianatra: "Miasa isan-tarika, mampiseho ary mampitaha.",
    technique: "Asa an-tarika sy fampitahana",
    support: "Lahatsoratra",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny zava-bitan'ny mpanjanaka ara-toekarena ?", ra: "Seranan-tsambo sy seranam-piaramanidina ; fanitarana ny tany voavoly sy ny voly fanondrana (kafé, jirofo) ; lalana sy lalamby : TCE (Tananarive-Côte Est), MLA (Moramanga-Lac Alaotra), TA (Tananarive-Antsirabe), FCE (Fianarantsoa-Côte Est)." },
      { q: "Inona ny zava-bitany ara-tsosialy ?", ra: "Trano fianarana sy trano fitsaboana ; fanaovana vaksiny sy fizarana fanafody." },
      { q: "Inona anefa ny fiantraikany ara-toekarena ?", ra: "Olana ara-pananan-tany (tsy niverina tamin'ny Malagasy ny tany nobodoina) sy fiankinan-doha amin'i Frantsa." },
      { q: "Inona ny fiantraikany ara-toetsaina sy ara-kolontsaina ?", ra: "Fanindrahindrana ny kolontsaina vahiny (fitafy, fiteny, fihetsika), fanomezana vahana ny teny frantsay, fahaverezan'ny fomba amam-panao sy ny soatoavina malagasy." },
    ],
    technique: "Fanontaniana / valiny",
    support: "Lahatsoratra",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : nisy zava-bita (seranana, lalamby, sekoly, hopitaly) fa natao ho an'ny tombontsoan'ny mpanjanaka ; navelany ho lova kosa ny olana ara-pananan-tany, ny fiankinan-doha ary ny fahaverezan'ny soatoavina.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio ny lalamby sy ny heviny : 1. TCE / 2. MLA / 3. FCE — a. Fianarantsoa-Côte Est ; b. Tananarive-Côte Est ; d. Moramanga-Lac Alaotra.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-d", cle: true }, { text: " ; " }, { text: "3-a", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao zava-bita roa sy fiantraikany ratsy roa navelan'ny fanjanahantany.",
      items: [],
      corrige: [[{ text: "Zava-bita : lalana sy lalamby, sekoly sy hopitaly (na seranana, vaksiny)", cle: true }, { text: " ; " }, { text: "fiantraikany ratsy : olana ara-pananan-tany sy fiankinan-doha, fahaverezan'ny soatoavina malagasy", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["zava-bita", "lalamby TCE", "fiankinan-doha", "kolontsaina"],
    sections: [
      {
        titre: "1. Ny zava-bitan'ny mpanjanaka",
        paras: [],
        puces: [
          "Ara-toekarena : seranan-tsambo sy seranam-piaramanidina ; fanitarana ny tany voavoly sy ny voly fanondrana (kafé, jirofo…) ; lalana sy lalamby — TCE (Tananarive-Côte Est), MLA (Moramanga-Lac Alaotra), TA (Tananarive-Antsirabe), FCE (Fianarantsoa-Côte Est).",
          "Ara-tsosialy : trano fianarana sy trano fitsaboana ; fanaovana vaksiny sy fizarana fanafody.",
        ],
      },
      {
        titre: "2. Nefa ho an'iza ireo zava-bita ireo ?",
        paras: [
          "Natao indrindra hanondranana ny harem-pirenena sy hampandehanana ny raharahan'ny mpanjanaka ireo fotodrafitrasa ireo ; ny vahoaka malagasy no nanamboatra azy tamin'ny asa an-terivozona.",
        ],
        puces: [],
      },
      {
        titre: "3. Ny fiantraikan'ny fanjanahantany",
        paras: [],
        puces: [
          "Ara-toekarena : olana ara-pananan-tany (tsy niverina tamin'ny Malagasy ny ankamaroan'ny tany nobodoin'ny voanjo) ; fiankinan-doha amin'i Frantsa.",
          "Ara-toetsaina sy ara-kolontsaina : fanindrahindrana ny kolontsaina vahiny (fitafy, fiteny, fihetsika), fanomezana vahana ny teny frantsay, fahaverezan'ny fomba amam-panao maneho ny fahendrena sy ny soatoavina malagasy.",
        ],
      },
    ],
    tahirinKevitra: [
      "Ny lalamby TCE (Tananarive-Côte Est) dia nampitohy an'Antananarivo sy Toamasina : nandalo tany Moramanga sy Brickaville izy ary mbola ampiasaina mandraka androany.",
      "Fanontaniana : Nahoana ny mpanjanaka no nanamboatra lalamby mankany amin'ny seranana ?",
      "Valiny : Mba hahafahany mitatitra mora ny akora sy ny harem-pirenena haondrana any Frantsa.",
    ],
  },
  rakibolana: [
    { mg: "Fotodrafitrasa", fr: "Infrastructure" },
    { mg: "Voly fanondrana", fr: "Culture d'exportation" },
    { mg: "Fiankinan-doha", fr: "Dépendance" },
    { mg: "Fanindrahindrana", fr: "Survalorisation" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Sokajio ho « zava-bita » na « fiantraikany ratsy » : a) lalamby TCE ; b) fahaverezan'ny soatoavina ; d) trano fitsaboana sy vaksiny ; e) fiankinan-doha amin'i Frantsa.",
      items: [],
      corrige: [[{ text: "Zava-bita : a, d", cle: true }, { text: " ; " }, { text: "fiantraikany ratsy : b, e", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao lalamby telo namboarina tamin'ny fanjanahantany.",
      items: [],
      corrige: [[{ text: "TCE, MLA, TA (na FCE)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Amin'ny fehezanteny roa : nahoana isika no tokony handanjalanja rehefa mitsara ny fanjanahantany ?",
      items: [],
      corrige: [[{ text: "Satria nisy zava-bita (lalana, sekoly, hopitaly) fa lafo ny vidiny : asa an-terivozona, harena lasa, soatoavina very ; ny tantara dia dinihina amin'ny lafiny roa", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
