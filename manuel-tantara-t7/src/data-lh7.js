// data-lh7.js — Lohahevitra VII : Ny fivoaran'ny fandaminana ara-politika teto Madagasikara (S29-S30)
const LH = "Lohahevitra VII — Ny fivoaran'ny fandaminana ara-politika teto Madagasikara (taonjato V ka hatramin'ny faran'ny taonjato XIX)";
const DOC = "PE T7 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S29 = {
  numero: 29, total: 32, lohahevitra: LH,
  titre: "Avy amin'ny foko ka hatramin'ny Fanjakan'i Madagasikara",
  tanjona: "mandahatra ny dingan'ny fivoaran'ny fandaminana ara-politika teto Madagasikara sy mampiavaka ny fanjakana malagasy sy ny Fanjakan'i Madagasikara",
  fanovozanKevitra: DOC,
  fitaovana: "Frizy, sari-tanin'i Madagasikara, solaitrabe",
  image: "images/img_s29.png",
  imageLegende: "Ny dingan'ny fandaminana : foko, fikambanam-poko, fanjakana",
  famerenana: {
    qa: [
      { q: "Oviana no efa nisy mponina nanerana ny nosy ?", ra: "Tamin'ny taonjato XV-XVI teo." },
      { q: "Inona ny lova arabo amin'ny fanjakana ?", ra: "Singa amin'ny hevitra hoe mpanjaka masina sy ny anaram-boninahitra sasany." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Ahoana no niandohan'ny fanjakana ? Nipoitra tampoka ve ny mpanjaka sa nisy dingana nifanesy ? »",
      "V.A. : Nisy dingana : ny foko aloha, avy eo ny fikambanam-poko, ary ny fanjakana — hodinihintsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny dingan'ny fivoaran'ny fandaminana ara-politika teto Madagasikara, hatramin'ny foko ka hatramin'ny Fanjakan'i Madagasikara.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny frizy ny mpampianatra : FOKO (taonjato V-XVI : loham-poko) → FIKAMBANAM-POKO (mpanjaka kely/roitelet) → FANJAKANA MALAGASY (1500-1810 : Sakalava, Betsimisaraka, Merina...) → FANJAKAN'I MADAGASIKARA (1810-1896 : nanomboka tamin-dRadama I). Aseho amin'ny sari-tany ny fanjakana lehibe.",
    mpianatra: "Mandinika ny frizy sy ny sari-tany.",
    technique: "Fandinihana frizy", support: "Frizy, sari-tany",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe foko (clan) ?", ra: "Vondron'olona iray razana : ny LOHAM-POKO (zokiolona hajaina) no mitarika ; ny fihavanana sy ny fombafomba no mampiray azy." },
      { q: "Inona ny fikambanam-poko ?", ra: "Firaisan'ny foko maro mifanakaiky, tarihin'ny MPANJAKA KELY (roitelet) : natao hiarovana ny tany sy handaminana ny rano sy ny tanimbary." },
      { q: "Oviana sy inona ny fanjakana malagasy ?", ra: "1500-1810 teo : fanjakana lehibe nifanorona — Sakalava (Menabe, Boina), Betsimisaraka, Betsileo, Merina... samy nanana ny mpanjakany sy ny faritaniny." },
      { q: "Inona kosa ny Fanjakan'i Madagasikara ?", ra: "Nanomboka tamin-dRadama I (1810-1828) : fanjakana iray nikendry ny hampiray ny nosy manontolo — nofaranan'ny fanjanahantany frantsay tamin'ny 1896." },
      { q: "Inona no maha-samy hafa ny fanjakana malagasy sy ny Fanjakan'i Madagasikara ?", ra: "Ny fanjakana malagasy dia maro sady isam-paritra ; ny Fanjakan'i Madagasikara dia iray, nikendry ny nosy manontolo, nanana fitondrana afovoany (ministera, tafika, lalàna an-tsoratra)." },
    ],
    technique: "Fanontaniana mitarika", support: "Frizy",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : dingana efatra ny fivoarana — foko, fikambanam-poko, fanjakana malagasy (1500-1810), Fanjakan'i Madagasikara (1810-1896).",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Apetraho amin'ny dingana marina : a) mpanjaka kely mitarika foko maro ; b) loham-poko iray razana ; d) Radama I ; e) fanjakana Sakalava sy Merina.",
      items: [],
      corrige: [[{ text: "a) fikambanam-poko", cle: true }, { text: " ; b) " }, { text: "foko", cle: true }, { text: " ; d) " }, { text: "Fanjakan'i Madagasikara", cle: true }, { text: " ; e) " }, { text: "fanjakana malagasy", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Rafeto ny frizin'ny dingana efatra amin'ny fivoaran'ny fandaminana ara-politika, misy ny fotoanany.",
      items: [],
      corrige: [[{ text: "Foko (V-XVI) → fikambanam-poko (roitelet) → fanjakana malagasy (1500-1810) → Fanjakan'i Madagasikara (1810-1896)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["foko", "loham-poko", "fikambanam-poko", "mpanjaka kely", "fanjakana malagasy", "Fanjakan'i Madagasikara"],
    sections: [
      {
        titre: "1. Ny foko sy ny fikambanam-poko",
        paras: [
          "Ny FOKO (clan) no fandaminana voalohany (taonjato V-XVI) : vondron'olona IRAY RAZANA, tarihin'ny LOHAM-POKO — zokiolona hajaina, mpitsara ny fifanolanana sy mpitarika ny fombafomba. Ny fihavanana no lalàna.",
          "Rehefa nitombo ny mponina sy ny fifaninanana tamin'ny tany dia niray ny foko maro mifanakaiky ka niforona ny FIKAMBANAM-POKO tarihin'ny MPANJAKA KELY (roitelet) : nandamina ny rano sy ny tanimbary izy, niaro ny faritra tamin'ny mpanafika ary nitarika ny ady.",
        ],
      },
      {
        titre: "2. Ny fanjakana malagasy (1500-1810)",
        paras: [
          "Nanomboka tamin'ny taonjato XVI dia niforona ny FANJAKANA lehibe : ny SAKALAVA tany andrefana (Menabe : Andriandahifotsy ; Boina : Andriamandisoarivo) ; ny BETSIMISARAKA tany atsinanana (nampiraisin'i Ratsimilaho, 1712-1750) ; ny BETSILEO sy ny MERINA tany afovoan-tany (Andriamanelo, Ralambo, Andrianjaka... hatramin'i Andrianampoinimerina, 1787-1810). Samy nanana ny mpanjakany, ny faritaniny ary ny fombany izy ireo — MARO NY FANJAKANA fa tsy iray.",
        ],
      },
      {
        titre: "3. Ny Fanjakan'i Madagasikara (1810-1896)",
        paras: [
          "Nanomboka tamin-dRADAMA I (1810-1828) dia nikendry ny hampiray ny nosy manontolo ho FANJAKANA IRAY ny mpanjaka merina : nitafy endrika maoderina ny fitondrana — ministera, tafika voalamina, lalàna an-tsoratra, fifanarahana iraisam-pirenena. Nifandimby ireo mpanjaka enina (Radama I ka hatramin-dRanavalona III) mandra-pahatongan'ny FANJANAHANTANY frantsay (1896) izay namarana azy.",
        ],
      },
      {
        titre: "4. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana ny fandaminana ny rano sy ny tanimbary no anisan'ny nahaterahan'ny fanjakana ? Vahaolana : ny asa lehibe (fefiloha, lakan-drano, tanimbary) dia mila olona maro sy fitarihana iray — ny mpanjaka afaka mandamina izany no manan-kery sy ankatoavin'ny vahoaka ; toy izany koa tany Ejipta (ny Neily) : mitovy ny lalàn'ny tantara.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Hoy Andrianampoinimerina : “Ny ranomasina no valapariako.” Nofaritany tamin'izany ny faniriany hampiray ny nosy manontolo ho fanjakana iray. »",
      "1. Iza no niteny io fanambarana malaza io ?",
      "2. Inona no dikany ?",
      "3. Iza no nanohy izany faniriana izany ?",
    ],
  },
  rakibolana: [
    { mg: "Foko", fr: "Clan" },
    { mg: "Loham-poko", fr: "Chef de clan" },
    { mg: "Fikambanam-poko", fr: "Confédération clanique" },
    { mg: "Mpanjaka kely", fr: "Roitelet" },
    { mg: "Fanjakan'i Madagasikara", fr: "Royaume de Madagascar" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Marina sa diso ? a) Ny foko dia vondron'olona iray razana. b) Ny fanjakana malagasy dia iray ihany. d) Ny Fanjakan'i Madagasikara dia nanomboka tamin-dRadama I. e) Ny fanjanahantany no namarana ny Fanjakan'i Madagasikara. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : maro izy (Sakalava, Betsimisaraka, Merina...)", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Marina (1896)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ampifanandrifio : 1. Andriandahifotsy / 2. Ratsimilaho / 3. Andrianampoinimerina — a. Betsimisaraka ; b. Menabe ; d. Imerina.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-d", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Inona no maha-samy hafa ny « fanjakana malagasy » sy ny « Fanjakan'i Madagasikara » ?",
      items: [],
      corrige: [[{ text: "Ny fanjakana malagasy : maro, isam-paritra, samy manana ny mpanjakany ; ny Fanjakan'i Madagasikara : iray, nikendry ny nosy manontolo, fitondrana afovoany maoderina (1810-1896)", cle: true }, { text: "." }]],
    },
  ],
};

const S30 = {
  numero: 30, total: 32, lohahevitra: LH,
  titre: "Foko, karazana ary vondrom-poko : fanavahana ireo hevitra",
  tanjona: "manavaka ny hevitra hoe ethnie, tribu ary vondrom-poko (groupe de population) ary manazava ny tsy fetezan'ny roa voalohany eto Madagasikara",
  fanovozanKevitra: DOC,
  fitaovana: "Fafana famaritana, solaitrabe",
  image: "images/img_s30.png",
  imageLegende: "Vondrom-poko iray tsy mivaky : ny Malagasy",
  famerenana: {
    qa: [
      { q: "Tanisao ny dingana efatra amin'ny fivoaran'ny fandaminana ara-politika.", ra: "Foko → fikambanam-poko → fanjakana malagasy → Fanjakan'i Madagasikara." },
      { q: "Inona no mampiray ny Malagasy rehetra ?", ra: "Teny iray, fanajana ny razana, fihavanana." },
    ],
    technique: "Fanontaniana am-bava", support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Mahare isika indraindray hoe “ethnie” na “tribu” rehefa miresaka ny Merina, ny Betsileo, ny Sakalava... Mety ve ireo teny ireo ? »",
      "V.A. : Tsy mety : ny mpandinika dia milaza fa tsy misy ethnie na tribu eto Madagasikara fa VONDROM-POKO — hazavaintsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny famaritana ny hoe ethnie, tribu ary vondrom-poko, ary ny antony tsy fetezan'ny roa voalohany eto Madagasikara.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho fafana famaritana ny mpampianatra : ETHNIE (vondron'olona manana teny sy kolontsaina manokana samihafa amin'ny hafa) ; TRIBU (vondrona mihidy, iray razana, mitondra tena mahaleo) ; VONDROM-POKO (groupe de population : vondrona isam-paritra ao anatin'ny firenena iray, iray teny sy kolontsaina). Ampitahaina amin'ny zava-misy malagasy.",
    mpianatra: "Mandinika ny fafana sy mampitaha.",
    technique: "Fandinihana fafana", support: "Fafana",
  },
  famakafakana: {
    qa: [
      { q: "Inona no atao hoe ethnie ?", ra: "Vondron'olona manana ny teniny sy ny kolontsainy MANOKANA, hafa amin'ny an'ny vondrona hafa (ohatra any Afrika : teny samihafa tsy mifankahazo)." },
      { q: "Inona no atao hoe tribu ?", ra: "Vondrona kely mihidy, iray razana, manana fitondrana sy faritany mahaleo tena." },
      { q: "Nahoana no tsy ethnie ny Merina, ny Betsileo, ny Vezo... ?", ra: "Satria IRAY NY TENINY (malagasy, misy fitenim-paritra fotsiny), iray ny fototry ny kolontsainy (razana, fihavanana, vary, omby) — tsy vondrona hafahafa mifanila fa sampan'ny vahoaka iray." },
      { q: "Inona àry no teny mety ?", ra: "VONDROM-POKO (groupe de population) : vondrona isam-paritra ao anatin'ny firenena iray — 18 no isainy matetika, fa iray ihany ny vahoaka malagasy." },
      { q: "Inona no loza ateraky ny fampiasana ny teny hoe ethnie na tribu ?", ra: "Mampisara-bazana sy mamporisika ny fanavakavahana (tribalisme) izy ; nampiasain'ny mpanjanaka handrasarasana ny Malagasy koa izany (« politique des races »)." },
    ],
    technique: "Fanontaniana mitarika", support: "Fafana",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : eto Madagasikara dia tsy misy ethnie na tribu fa vondrom-poko 18 ao anatin'ny vahoaka iray — teny iray, kolontsaina iray, firenena iray.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Mety sa tsy mety ? a) « Ny tribu Vezo » ; b) « Ny vondrom-poko Antandroy » ; d) « Ny ethnie Merina ».",
      items: [],
      corrige: [[{ text: "a) tsy mety", cle: true }, { text: " ; b) " }, { text: "mety", cle: true }, { text: " ; d) " }, { text: "tsy mety", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Nahoana no lazaina fa tsy misy ethnie na tribu eto Madagasikara ? Omeo porofo roa.",
      items: [],
      corrige: [[{ text: "Iray ny teny malagasy (fitenim-paritra fotsiny no samihafa) ; iray ny fototry ny kolontsaina (fanajana ny razana, fihavanana) — ka vondrom-poko ao anatin'ny vahoaka iray no marina", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["ethnie", "tribu", "vondrom-poko", "firaisam-pirenena", "fanavakavahana"],
    sections: [
      {
        titre: "1. Famaritana ireo hevitra telo",
        paras: [],
        puces: [
          "ETHNIE : vondron'olona manana TENY sy KOLONTSAINA MANOKANA hafa amin'ny an'ny vondrona hafa — any amin'ny firenena maro any Afrika dia tsy mifankahazo teny ny ethnie samihafa ;",
          "TRIBU : vondrona kely MIHIDY, iray razana, manana fitondrana sy faritany mahaleo tena ;",
          "VONDROM-POKO (groupe de population) : vondrona ISAM-PARITRA ao anatin'ny firenena iray — iray teny sy kolontsaina amin'ny hafa fa manana ny fomba amam-panaony manokana.",
        ],
      },
      {
        titre: "2. Ny zava-misy malagasy : vondrom-poko fa tsy ethnie",
        paras: [
          "Ny Merina, ny Betsileo, ny Sakalava, ny Vezo, ny Antandroy... dia tsy ethnie ary tsy tribu : IRAY NY TENINY (ny teny malagasy — fitenim-paritra fotsiny no maha-samy hafa azy), IRAY ny fototry ny kolontsainy (fanajana ny razana, fihavanana, vary sy omby). VONDROM-POKO 18 no fanisa mahazatra azy ireo, fa VAHOAKA IRAY ny Malagasy. Raha ny marina àry : eto Madagasikara dia tsy misy ethnie na tribu.",
        ],
      },
      {
        titre: "3. Nahoana no zava-dehibe io fanavahana io ?",
        paras: [
          "Ny fampiasana diso ny teny hoe ethnie na tribu dia MAMPISARA-BAZANA : mamporisika ny fanavakavahana isam-paritra (tribalisme) izy ary nampiasain'ny mpanjanaka mihitsy handrasarasana ny Malagasy (ny « politique des races » : fizarazarana mba hanjakana). Ny fampiasana ny teny marina — VONDROM-POKO ao anatin'ny FIRENENA IRAY — dia miaro ny firaisam-pirenena sy ny fihavanana.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Raha ny fandinihana ny teny sy ny kolontsaina no jerena dia tsy misy ethnie na tribu eto Madagasikara : vahoaka iray miteny teny iray no misy, ka ny fizarana azy dia fizarana isam-paritra fotsiny. » (Nalalaka avy amin'ny asan'ny mpandinika ny fiaraha-monina malagasy)",
      "1. Inona no porofo roa entin'ny mpandinika ?",
      "2. Inona ny fizarana marina eto Madagasikara ?",
      "3. Inona no vokatr'izany amin'ny fiainam-pirenena ?",
    ],
  },
  rakibolana: [
    { mg: "Vondrom-poko", fr: "Groupe de population" },
    { mg: "Fanavakavahana isam-paritra", fr: "Tribalisme, régionalisme" },
    { mg: "Firaisam-pirenena", fr: "Unité nationale" },
    { mg: "Fizarazarana", fr: "Division" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny vondron'olona manana teny sy kolontsaina manokana hafa amin'ny hafa dia … ; ny vondrona mihidy iray razana dia … ; ny teny mety eto Madagasikara dia … ; matetika ny isany dia … (1 isa avy)",
      items: [],
      corrige: [[{ text: "ethnie", cle: true }, { text: " ; " }, { text: "tribu", cle: true }, { text: " ; " }, { text: "vondrom-poko", cle: true }, { text: " ; " }, { text: "18", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Nahoana ny mpanjanaka no nampiasa ny fizarazarana ara-poko (« politique des races ») ?",
      items: [],
      corrige: [[{ text: "Mba hampifanandrina ny Malagasy samy Malagasy ka tsy hiray hina hanohitra azy : ny fizarazarana no fitaovam-panjakazakana", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Soraty amin'ny fehezanteny roa ny hafatra homenao ny namanao izay manavakavaka ara-paritra.",
      items: [],
      corrige: [[{ text: "Ohatra : iray ihany isika Malagasy — iray ny tenintsika sy ny razantsika ; ny fanavakavahana dia mandrava ny firaisam-pirenena ka aoka hifanaja sy hifanampy isika", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH7: { titre: LH, seances: [S29, S30] } };
