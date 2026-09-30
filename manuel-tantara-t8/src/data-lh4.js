// data-lh4.js — Lohahevitra IV : Ireo fanjakana malagasy (taonjato XVI-XVIII) : S17-S18 — T8
const LH = "Lohahevitra IV — Ireo fanjakana malagasy tamin'ny taonjato XVI ka hatramin'ny XVIII";
const DOC = "PE T8 (MEN, Édition 2026) ; boky Tantara J-Learn";

const S17 = {
  numero: 17, total: 32, lohahevitra: LH,
  titre: "Ny toerana misy ireo fanjakana malagasy",
  tanjona: "mametraka eo amin'ny sarintany ireo fanjakana malagasy tamin'ny taonjato XVI ka hatramin'ny XVIII",
  fanovozanKevitra: DOC,
  fitaovana: "Sarintanin'i Madagasikara, lahatsoratra",
  image: "images/img_s17.png",
  imageLegende: "Ireo faritra nisy ny fanjakana malagasy : morontsiraka andrefana, atsinanana, atsimo ary afovoan-tany",
  famerenana: {
    qa: [
      { q: "Inona no fifanarahana nanome an'i Madagasikara ho an'i Frantsa tamin'ny 1890 ?", ra: "Ny convention de Zanzibar." },
      { q: "Tamin'ny S9 : inona no nitranga teto Madagasikara tamin'ny Andro Maoderina ?", ra: "Tonga ireo Eoropeanina (Diego Diaz 1500), niorina ny comptoirs ary niroborobo ny fanjakana amoron-tsiraka." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Talohan'ny nisian'ny Fanjakan'i Madagasikara iray, firy sy aiza avy ny fanjakana teto amin'ny Nosy ? »",
      "V.A. : Maro izy ireo ary niparitaka nanerana ny Nosy — izany no hodinihintsika androany.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny toerana nisy ireo fanjakana malagasy tamin'ny taonjato XVI ka hatramin'ny XVIII.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho sarintanin'i Madagasikara ny mpampianatra ary mitarika ny fametrahana ny fanjakana isaky ny faritra : avaratra, andrefana, atsimo, atsimo atsinanana, atsinanana, afovoan-tany.",
    mpianatra: "Mandinika ny sarintany sy mametraka ny fanjakana.",
    technique: "Fandinihana sarintany", support: "Sarintany",
  },
  famakafakana: {
    qa: [
      { q: "Inona ny fanjakana tany avaratra sy avaratra andrefana ?", ra: "Ny Antankarana tany avaratra ary ny fanjakana sakalava (Boina) tany avaratra andrefana." },
      { q: "Inona ny fanjakana tany andrefana ?", ra: "Ny fanjakana sakalava : ny Menabe (nanodidina an'i Morondava) sy ny Boina (nanodidina an'i Mahajanga)." },
      { q: "Inona ny fanjakana tany atsimo sy atsimo atsinanana ?", ra: "Tany atsimo : ny Mahafaly sy ny Antandroy ; tany atsimo atsinanana : ny Antemoro (nanana ny sorabe) sy ny Antesaka." },
      { q: "Inona ny fanjakana tany atsinanana ?", ra: "Ny Betsimisaraka, nampiraisin'i Ratsimilaho tamin'ny fiandohan'ny taonjato XVIII." },
      { q: "Inona ny fanjakana tany afovoan-tany ?", ra: "Ny fanjakana merina (Imerina, nanodidina an'Antananarivo) sy ny Betsileo (faritra Fianarantsoa)." },
    ],
    technique: "Fanontaniana mitarika", support: "Sarintany",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : nisy fanjakana maro teto Madagasikara tamin'ny taonjato XVI-XVIII — sakalava (Menabe, Boina) tany andrefana, Betsimisaraka tany atsinanana, Antemoro sy Antesaka tany atsimo atsinanana, Mahafaly sy Antandroy tany atsimo, Antankarana tany avaratra, merina sy Betsileo tany afovoan-tany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Ampifanandrifio ny fanjakana sy ny faritra : 1. Boina / 2. Betsimisaraka / 3. Antemoro / 4. Imerina — a. atsinanana ; b. afovoan-tany ; d. avaratra andrefana ; e. atsimo atsinanana.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-e", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Tanisao fanjakana malagasy dimy sy ny faritra nisy azy avy.",
      items: [],
      corrige: [[{ text: "Ohatra : Menabe sy Boina (andrefana) ; Betsimisaraka (atsinanana) ; Antemoro (atsimo atsinanana) ; Mahafaly na Antandroy (atsimo) ; Imerina na Betsileo (afovoan-tany) ; Antankarana (avaratra)", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["fanjakana sakalava", "Menabe", "Boina", "Betsimisaraka", "Antemoro", "Imerina"],
    sections: [
      {
        titre: "1. Fanjakana maro no teto amin'ny Nosy",
        paras: [
          "Tamin'ny taonjato XVI ka hatramin'ny XVIII dia FANJAKANA MARO no niorina teto Madagasikara, samy nanana ny mpanjakany, ny faritaniny ary ny fombany. Mbola tsy nisy fanjakana iray nifehy ny Nosy manontolo.",
        ],
      },
      {
        titre: "2. Ny toerana nisy azy ireo",
        paras: [],
        puces: [
          "AVARATRA : ny ANTANKARANA ;",
          "ANDREFANA sy AVARATRA ANDREFANA : ny fanjakana SAKALAVA — ny MENABE (nanodidina an'i Morondava, taonjato XVII) sy ny BOINA (nanodidina an'i Mahajanga, taonjato XVII-XVIII) ; anisan'ny fanjakana matanjaka indrindra izy ireo ;",
          "ATSINANANA : ny BETSIMISARAKA, nampiraisin'i RATSIMILAHO tamin'ny fiandohan'ny taonjato XVIII ;",
          "ATSIMO ATSINANANA : ny ANTEMORO (nanana ny SORABE, soratra arabo nandraiketana ny teny malagasy) sy ny ANTESAKA ;",
          "ATSIMO : ny MAHAFALY sy ny ANTANDROY ;",
          "AFOVOAN-TANY : ny fanjakana MERINA (Imerina, nanodidina an'Antananarivo) sy ny BETSILEO (faritra Fianarantsoa).",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Nahoana ny fanjakana sakalava no anisan'ny matanjaka indrindra tamin'izany ? Vahaolana : teo amoron-tsiraka andrefana izy ireo ka nifanerasera tamin'ny mpandranto vahiny (arabo, eoropeanina) ; ny varotra (omby, andevo, basy) no nampitombo ny hery sy ny hareny, ka afaka nanitatra ny faritaniny izy.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny Antemoro dia nanana ny sorabe : taratasy vita tamin'ny hodi-kazo, nosoratana tamin'ny abidy arabo, nefa teny malagasy no voarakitra ao. » (Fanamarihana momba ny sorabe)",
      "1. Iza no fanjakana nanana ny sorabe ary aiza no nisy azy ?",
      "2. Inona no mampiavaka ny sorabe (abidy sy fiteny) ?",
      "3. Nahoana ny sorabe no loharano ara-tantara sarobidy ho an'i Madagasikara ?",
    ],
  },
  rakibolana: [
    { mg: "Fanjakana", fr: "Royaume" },
    { mg: "Faritany", fr: "Territoire" },
    { mg: "Sorabe", fr: "Sorabe (écriture arabico-malgache)" },
    { mg: "Amoron-tsiraka", fr: "Littoral / côte" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy : Ny fanjakana sakalava roa dia ny … sy ny … ; ny fanjakana tany afovoan-tany dia ny … sy ny … (1 isa avy)",
      items: [],
      corrige: [[{ text: "Menabe", cle: true }, { text: " ; " }, { text: "Boina", cle: true }, { text: " ; " }, { text: "Imerina (merina)", cle: true }, { text: " ; " }, { text: "Betsileo", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Marina sa diso ? a) Ratsimilaho no nampiray ny Betsimisaraka. b) Ny Antandroy dia tany avaratra. d) Ny Boina dia nanodidina an'i Mahajanga. (1 isa avy)",
      items: [],
      corrige: [[{ text: "a) Marina", cle: true }, { text: " ; b) " }, { text: "Diso : tany atsimo", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao amin'ny fehezanteny roa ny antony nampatanjaka ny fanjakana teo amoron-tsiraka.",
      items: [],
      corrige: [[{ text: "Nifanerasera tamin'ny mpandranto vahiny izy ireo ka nahazo fitaovana (basy, vola) tamin'ny varotra ; izany hery izany no nentiny nanitatra ny faritaniny", cle: true }, { text: "." }]],
    },
  ],
};

const S18 = {
  numero: 18, total: 32, lohahevitra: LH,
  titre: "Ny fandaminana ara-tsosialy, ara-toekarena ary ara-politika",
  tanjona: "mamaritra ny fandaminana ara-tsosialy, ara-toekarena ary ara-politika tao amin'ireo fanjakana malagasy",
  fanovozanKevitra: DOC,
  fitaovana: "Lahatsoratra, sary, solaitrabe",
  image: "images/img_s18.png",
  imageLegende: "Ny fandaminana tao amin'ny fanjakana malagasy : ny mpanjaka, ny manam-boninahitra ary ny vahoaka",
  famerenana: {
    qa: [
      { q: "Tanisao fanjakana malagasy telo sy ny faritra nisy azy.", ra: "Ohatra : Boina (avaratra andrefana), Betsimisaraka (atsinanana), Imerina (afovoan-tany)..." },
      { q: "Iza no nampiray ny Betsimisaraka ?", ra: "Ratsimilaho, tamin'ny fiandohan'ny taonjato XVIII." },
    ],
    technique: "Fanontaniana am-bava", support: "Solaitrabe",
  },
  fanentanana: {
    mpampianatra: [
      "Manontany : « Tao anatin'ny fanjakana iray, nitovy daholo ve ny toeran'ny olona rehetra ? Iza no nitondra ? Iza no niasa ? »",
      "V.A. : Tsia — nisy ambaratonga ny fiaraha-monina : ny mpanjaka, ny andriana, ny vahoaka ary ny andevo.",
    ],
    mpianatra: "Mamaly sy maminavina.",
    technique: "Ady hevitra kely", support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny fandaminana ara-tsosialy, ara-toekarena ary ara-politika tao amin'ireo fanjakana malagasy.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mivantana", support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho kisarisary ny ambaratongan'ny fiaraha-monina ny mpampianatra (mpanjaka → andriana → hova/vahoaka → andevo) ary mitarika ny famakafakana isaky ny lafiny.",
    mpianatra: "Mandinika ny kisarisary sy mamantatra ny anjara asan'ny tsirairay.",
    technique: "Fandinihana kisarisary", support: "Kisarisary",
  },
  famakafakana: {
    qa: [
      { q: "Ahoana ny fandaminana ara-tsosialy ?", ra: "Nizara sokajy (castes) ny fiaraha-monina : ny andriana (fianakavian'ny mpanjaka sy ny manam-boninahitra), ny hova na vahoaka tsotra, ary ny andevo — tsy nitovy ny zo sy ny adidin'izy ireo." },
      { q: "Ahoana ny fandaminana ara-toekarena ?", ra: "Ny fambolena (vary indrindra) sy ny fiompiana omby no fototra ; nisy koa ny varotra — anisan'izany ny varotra andevo tamin'ny vahiny, nanan-danja tamin'ny fanjakana amoron-tsiraka." },
      { q: "Inona no toeran'ny mpanjaka ?", ra: "Ny mpanjaka no lohan'ny fanjakana : masina ny tenany, izy no mpitondra ny tany sy ny vahoaka, mpitsara fara tampony ary mpitarika ny fombafomba." },
      { q: "Ahoana no nitantanana ny fanjakana ?", ra: "Nanampy ny mpanjaka ny manam-boninahitra sy ny loholona ; ny kabary no fitaovana fampitana ny didy ; ny fokonolona no fototry ny fiainana ifotony." },
      { q: "Inona no atao hoe expéditions ?", ra: "Ady fanitarana na fandrobana nataon'ny fanjakana iray tamin'ny hafa : fakana omby, sambotra ary faritany — nampiseho ny herin'ny mpanjaka izany." },
    ],
    technique: "Fanontaniana mitarika", support: "Kisarisary",
  },
  famintinana: {
    mpampianatra: "Mitarika ny famintinana : sokajy (andriana, hova, andevo) no nandamina ny fiaraha-monina ; fambolena, fiompiana ary varotra (anisan'izany ny varotra andevo) ny toekarena ; ny mpanjaka masina no fara tampon'ny fahefana, nanao expéditions hanitarana ny fanjakany.",
    mpianatra: "Mandravona sy mandika ny famintinana.",
    technique: "Fandravonana iombonana", support: "Solaitrabe, kahie",
  },
  fampiharana: [
    {
      consigne: "Sokajio ho ara-tsosialy, ara-toekarena na ara-politika : a) fambolena vary ; b) sokajy andriana ; d) expéditions ; e) varotra andevo.",
      items: [],
      corrige: [[{ text: "a) ara-toekarena", cle: true }, { text: " ; b) " }, { text: "ara-tsosialy", cle: true }, { text: " ; d) " }, { text: "ara-politika", cle: true }, { text: " ; e) " }, { text: "ara-toekarena", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa", fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Lazao amin'ny fehezanteny iray avy ny fandaminana ara-tsosialy, ara-toekarena ary ara-politika tao amin'ny fanjakana malagasy.",
      items: [],
      corrige: [[{ text: "Ara-tsosialy : nizara sokajy (andriana, hova, andevo)", cle: true }, { text: " ; " }, { text: "ara-toekarena : fambolena, fiompiana ary varotra no fototra", cle: true }, { text: " ; " }, { text: "ara-politika : ny mpanjaka masina no fara tampon'ny fahefana", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa an-tsoratra", tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["sokajy", "andriana", "hova", "andevo", "mpanjaka masina", "expéditions"],
    sections: [
      {
        titre: "1. Ny fandaminana ara-tsosialy",
        paras: [
          "Nizara SOKAJY (castes) ny fiaraha-monina tao amin'ireo fanjakana malagasy :",
        ],
        puces: [
          "ny ANDRIANA : fianakavian'ny mpanjaka sy ny manam-boninahitra — nanana tombontsoa ;",
          "ny HOVA na ny VAHOAKA TSOTRA : mpamboly, mpiompy, mpanao asa tanana — izy no maro an'isa ;",
          "ny ANDEVO : olona resy an'ady na novidina — tsy nanan-jo ary niasa ho an'ny tompony.",
        ],
      },
      {
        titre: "2. Ny fandaminana ara-toekarena sy ara-politika",
        paras: [],
        puces: [
          "TOEKARENA : ny FAMBOLENA (vary indrindra) sy ny FIOMPIANA OMBY no fototra ; nisy ny VAROTRA — anisan'izany ny varotra andevo tamin'ny vahiny, nanan-danja tamin'ny fanjakana amoron-tsiraka ;",
          "NY MPANJAKA : MASINA ny tenany ; izy no tompon'ny tany, mpitsara fara tampony ary mpitarika ny fombafomba ; ny KABARY no fampitana ny didiny ;",
          "NY MPANAMPY AZY : manam-boninahitra sy loholona ; ny FOKONOLONA no fototry ny fiainana ifotony ;",
          "NY EXPEDITIONS : ady fanitarana na fandrobana (omby, sambotra, faritany) nataon'ny fanjakana iray tamin'ny hafa.",
        ],
      },
      {
        titre: "3. Ohatra voavaha",
        paras: [
          "Fanontaniana — Ampitahao ny sokajin'ny fiaraha-monina malagasy sy ny sokajy telon'ny Ancien Régime frantsay (S11). Vahaolana : samy fiaraha-monina misy ambaratonga izy roa — ny andriana malagasy dia mitovitovy amin'ny noblesse frantsay (tombontsoa), ny hova amin'ny tiers état (miasa sy mandoa) ; fa ny andevo malagasy kosa dia tsy nanan-jo mihitsy, ambany noho ny tiers état. Hita amin'izany fa fiaraha-monina maro no nisy ambaratonga tamin'izany vanim-potoana izany.",
        ],
      },
    ],
    tahirinKevitra: [
      "Vakio ity tahirin-kevitra ity ary valio :",
      "« Ny mpanjaka no tompon'ny tany sy ny vahoaka ; masina ny tenany ka tsy azo toherina ny teniny. » (Famintinana ny toeran'ny mpanjaka malagasy fahiny)",
      "1. Inona ireo fahefana roa ananan'ny mpanjaka araka ny lahatsoratra ?",
      "2. Inona no dikan'ny hoe « masina » ny mpanjaka ?",
      "3. Ampitahao amin'ny monarchie absolue frantsay (S11) izany.",
    ],
  },
  rakibolana: [
    { mg: "Sokajy", fr: "Caste / ordre social" },
    { mg: "Andevo", fr: "Esclave" },
    { mg: "Kabary", fr: "Discours royal / traditionnel" },
    { mg: "Fokonolona", fr: "Communauté villageoise" },
    { mg: "Ady fanitarana", fr: "Expédition (guerrière)" },
  ],
  fanazarantena: [
    {
      points: 4,
      consigne: "Fenoy ny ambaratonga : … (fianakavian'ny mpanjaka) → … (vahoaka tsotra) → … (tsy manan-jo) ; ny fitaovana fampitana ny didin'ny mpanjaka dia ny … (1 isa avy)",
      items: [],
      corrige: [[{ text: "andriana", cle: true }, { text: " ; " }, { text: "hova", cle: true }, { text: " ; " }, { text: "andevo", cle: true }, { text: " ; " }, { text: "kabary", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Tanisao ny fototry ny toekarena telo tao amin'ny fanjakana malagasy. (1 isa avy)",
      items: [],
      corrige: [[{ text: "Ny fambolena (vary) ; ny fiompiana omby ; ny varotra (anisan'izany ny varotra tamin'ny vahiny)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Hazavao ny atao hoe expéditions ary lazao ny anton'izy ireo.",
      items: [],
      corrige: [[{ text: "Ady fanitarana na fandrobana nataon'ny fanjakana iray tamin'ny hafa ; ny antony : fakana omby sy sambotra, fanitarana faritany ary fampisehoana ny herin'ny mpanjaka", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { LH4: { titre: LH, seances: [S17, S18] } };
