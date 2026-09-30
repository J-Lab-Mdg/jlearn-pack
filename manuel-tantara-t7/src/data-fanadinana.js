// data-fanadinana.js — Famerenana sy Fanadinana T7 (S3, S6, S13, S20, S24, S28, S31) + Fanadinana akapobeny (S32)
const T = (t) => ({ text: t });
const C = (t) => ({ text: t, cle: true });

const S3 = {
  type: "fanadinana", numero: 3, total: 32,
  titre: "Famerenana sy Fanadinana I — Ny tantara am-bava",
  lohahevitra: "Lohahevitra I — Ny tantara am-bava",
  famerenana: [
    "Ny TANTARA AM-BAVA dia loharano ara-tantara ampitaina amin'ny vava : lovan-tsofina, angano, ohabolana, hainteny, fitantaran'ny vavolombelona.",
    "Dingan'ny tetikasa fanadihadiana am-bava : 1) safidy ny lohahevitra ; 2) fanomanana ny fanontaniana ; 3) fitadiavana ny olona hanontaniana (olona zokiolona, vavolombelona) ; 4) fanaovana fotoana sy fanadihadiana ; 5) fandraiketana an-tsoratra ; 6) famelabelarana ny vokatra.",
    "Fitaovana ilaina : kahie fandraiketana, fanontaniana voaomana, fitaovana fandraisam-peo raha misy.",
    "Toe-tsaina takiana : fanajana ny olona anontaniana, fihainoana tsara, tsy manapaka teny, fisaorana.",
    "Fitsikerana ny loharano am-bava : mety miova ny tantara rehefa mifindrafindra vava ; ilaina ny mampitaha amin'ny loharano hafa (an-tsoratra, moana) mba hamaritana ny fahamarinany.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Omeo ny famaritana ny tantara am-bava (2 isa) ary omeo ohatra telo. (1 isa avy)",
      items: [],
      corrige: [[T("Ny tantara am-bava dia "), C("loharano ara-tantara ampitaina amin'ny vava, avy amin'ny razana na ny vavolombelona"), T(". Ohatra : "), C("lovan-tsofina ; angano ; ohabolana (na hainteny, fitantaran'ny vavolombelona)"), T(".")]],
    },
    {
      points: 6,
      consigne: "Alaharo araka ny filaharany ireto dingan'ny tetikasa fanadihadiana am-bava ireto : famelabelarana ny vokatra ; safidy ny lohahevitra ; fanadihadiana ; fanomanana ny fanontaniana ; fandraiketana an-tsoratra ; fitadiavana ny olona hanontaniana. (1 isa avy)",
      items: [],
      corrige: [[C("1) safidy ny lohahevitra ; 2) fanomanana ny fanontaniana ; 3) fitadiavana ny olona hanontaniana ; 4) fanadihadiana ; 5) fandraiketana an-tsoratra ; 6) famelabelarana ny vokatra"), T(".")]],
    },
    {
      points: 4,
      consigne: "Tanisao toe-tsaina roa takiana amin'ny fanadihadiana olona (2 isa) sy fitaovana roa ilaina (2 isa).",
      items: [],
      corrige: [[T("Toe-tsaina : "), C("fanajana ny olona anontaniana ; fihainoana tsara (na tsy manapaka teny, fisaorana)"), T(" ; fitaovana : "), C("kahie fandraiketana sy fanontaniana voaomana (na fandraisam-peo)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Lahatsoratra kely : « Nitantara ny niorenan'ny tanàna ny raiamandreny iray, fa hafa kely ny fitantaran'ny raiamandreny faharoa. » — a) Nahoana no mety tsy mitovy ny fitantarana am-bava ? (2 isa) b) Inona no atao mba hamaritana ny fahamarinany ? (2 isa) d) Loharano inona no azo ampitahana aminy ? (1 isa)",
      items: [],
      corrige: [[T("a) "), C("Satria miova ny tantara rehefa mifindrafindra vava sy mandeha ny fotoana"), T(" ; b) "), C("ampitahaina amin'ny loharano hafa ary anontaniana olona maro"), T(" ; d) "), C("loharano an-tsoratra na moana (rakitsoratra, tsangam-bato...)"), T(".")]],
    },
  ],
};

const S6 = {
  type: "fanadinana", numero: 6, total: 32,
  titre: "Famerenana sy Fanadinana II — Ny Prehistoara sy ny vanim-potoana lehibe",
  lohahevitra: "Lohahevitra II — Ireo vanim-potoana lehibe amin'ny Prehistoara sy ny Tantara",
  famerenana: [
    "PREHISTOARA : hatramin'ny nisehoan'ny olombelona ka hatramin'ny namoronana ny soratra (tokony ho -3500/-3000) — Paleolitika (vato voapaika ; hatramin'ny -12000) sy Neolitika (vato voalambolambo ; -12000 ka hatramin'ny -3000).",
    "TANTARA : nanomboka tamin'ny soratra — Andro Taloha na Antikite (-3000 → 476) ; Andro Antenatenany na Moyen Âge (476 → 1492) ; Andro Maoderina (1492 → 1789) ; Andro Ankehitriny (1789 → ankehitriny).",
    "Fivoaran'ny olombelona : Aostralopiteka → Homo habilis → Homo erectus → Homo neanderthalensis → Homo sapiens → Homo sapiens sapiens.",
    "Fiovana lehibe : fitsanganana amin'ny tongotra roa, fampiasana fitaovana, fahazoana ny afo, fambolena sy fiompiana (Neolitika), fonenana raikitra.",
    "Daty fetra : 476 = fianjeran'ny Empira romanina tandrefana ; 1492 = nahatongavan'i Christophe Colomb tany Amerika ; 1789 = Revolisiona frantsay.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Avaho ny Prehistoara sy ny Tantara (2 isa) ary lazao ny zava-nitranga nampisaraka azy roa (1 isa). Amin'ny vanim-potoana inona ny taona 800 sy ny taona 1600 ? (1 isa avy)",
      items: [],
      corrige: [[T("Prehistoara : "), C("vanim-potoana talohan'ny namoronana ny soratra"), T(" ; Tantara : "), C("vanim-potoana taorian'ny namoronana ny soratra"), T(" ; fetra : "), C("ny famoronana ny soratra (tokony ho -3500/-3000)"), T(". Taona 800 : "), C("Andro Antenatenany"), T(" ; taona 1600 : "), C("Andro Maoderina"), T(".")]],
    },
    {
      points: 5,
      consigne: "Fenoy ny fafana : vanim-potoana / fiandohany sy fiafarany — Andro Taloha (…) ; Andro Antenatenany (…) ; Andro Maoderina (…) ; Andro Ankehitriny (…). (1,25 isa avy)",
      items: [],
      corrige: [[T("Andro Taloha : "), C("-3000 → 476"), T(" ; Andro Antenatenany : "), C("476 → 1492"), T(" ; Andro Maoderina : "), C("1492 → 1789"), T(" ; Andro Ankehitriny : "), C("1789 → ankehitriny"), T(".")]],
    },
    {
      points: 6,
      consigne: "Alaharo araka ny filaharany ny dingana enina amin'ny fivoaran'ny olombelona. (1 isa avy)",
      items: [],
      corrige: [[C("Aostralopiteka → Homo habilis → Homo erectus → Homo neanderthalensis → Homo sapiens → Homo sapiens sapiens"), T(".")]],
    },
    {
      points: 4,
      consigne: "Avaho ny Paleolitika sy ny Neolitika (2 isa) ary tanisao fiovana roa lehibe niseho tamin'ny Neolitika (1 isa avy).",
      items: [],
      corrige: [[T("Paleolitika : "), C("vanim-potoanan'ny vato voapaika, mpihaza sy mpioty"), T(" ; Neolitika : "), C("vanim-potoanan'ny vato voalambolambo"), T(" ; fiovana : "), C("fambolena sy fiompiana"), T(" ; "), C("fonenana raikitra (tanàna voalohany)"), T(".")]],
    },
  ],
};

const S13 = {
  type: "fanadinana", numero: 13, total: 32,
  titre: "Famerenana sy Fanadinana III — Ny Andro Taloha (Antikite)",
  lohahevitra: "Lohahevitra III — Ny sivilizasiona tamin'ny Andro Taloha",
  famerenana: [
    "SIVILIZASIONA = fitambaran'ny fomba fiaina, fandaminana, fahalalana ary zava-bita lehibe iombonan'ny vahoaka iray.",
    "MEZOPOTAMIA (Tigra sy Eofrata) : tanàna voalohany (Uruk, -3400/-2900), famoronana ny soratra tokony ho -3500 (sary famantarana → soratra kioneiforma).",
    "EJIPTA « fanomezan'i Neily » : tondra-drano mahavokatra ; Empira taloha (-2700/-2200), antenatenany (-2050/-1800), vaovao (-1600/-1100) ; ny FARAO no mpanjaka manam-pahefana feno, heverina ho zanaky ny andriamanitra.",
    "GRESY : tanàna-fanjakana (cité) — Sparta tanàna mpiady ; Atena niandohan'ny DEMOKRASIA (ny vahoaka no mitondra ; zo sy adidin'ny olom-pirenena).",
    "ROMA : angano Romulus sy Remus ; fanjakan'ny mpanjaka etriska (-600/-509) ; Repoblika (-509/-27) ; Empira (27 → 476) ; niely ny fivavahana kristianina.",
    "Lova antika eto Madagasikara : demokrasia sy fifidianana, zo sy adidy, lalàna, kalandrie, abidy.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Omeo ny famaritana ny sivilizasiona (2 isa). Taiza no nipoiran'ny soratra voalohany ary oviana (2 isa) ? Inona no anaran'ny soratra mezopotamianina (1 isa) ?",
      items: [],
      corrige: [[C("Fitambaran'ny fomba fiaina, fandaminana, fahalalana ary zava-bita lehibe iombonan'ny vahoaka iray"), T(". Nipoitra tany "), C("Mezopotamia, tokony ho -3500"), T(" ; soratra "), C("kioneiforma"), T(".")]],
    },
    {
      points: 5,
      consigne: "Nahoana i Ejipta no antsoina hoe « fanomezan'i Neily » (2 isa) ? Iza no farao ary inona ny fahefany (2 isa) ? Fenoy : Empira vaovao (… / …) (1 isa).",
      items: [],
      corrige: [[C("Satria ny tondra-dranon'i Neily no mahavokatra ny tany ka mamelona ny mponina"), T(". Ny farao dia "), C("mpanjakan'i Ejipta manam-pahefana feno (ara-politika, ara-pivavahana, ara-miaramila), heverina ho zanaky ny andriamanitra"), T(". Empira vaovao : "), C("-1600 / -1100"), T(".")]],
    },
    {
      points: 5,
      consigne: "Ampitahao i Sparta sy i Atena (2 isa). Omeo ny famaritana ny demokrasia (2 isa) ary zo iray sy adidy iray ananan'ny olom-pirenena (1 isa).",
      items: [],
      corrige: [[T("Sparta : "), C("tanàna mpiady, ny miaramila no voalohan-daharana"), T(" ; Atena : "), C("tanàna niandohan'ny demokrasia"), T(". Demokrasia : "), C("fitondrana izay ny vahoaka no loharanon'ny fahefana"), T(". Zo : "), C("mandray anjara amin'ny fivoriana / mifidy"), T(" ; adidy : "), C("miaro ny tanàna / mandoa hetra"), T(".")]],
    },
    {
      points: 5,
      consigne: "Roma : alaharo ny fitondrana telo nifandimby sy ny vanim-potoanany (3 isa) ary tanisao lova antika roa mbola hita eto Madagasikara (2 isa).",
      items: [],
      corrige: [[C("Fanjakan'ny mpanjaka (-600/-509) → Repoblika (-509/-27) → Empira (27 → 476)"), T(". Lova : "), C("demokrasia sy fifidianana ; zo sy adidin'ny olom-pirenena (na lalàna, kalandrie, abidy)"), T(".")]],
    },
  ],
};

const S20 = {
  type: "fanadinana", numero: 20, total: 32,
  titre: "Famerenana sy Fanadinana IV — Ny Andro Antenatenany (Moyen Âge)",
  lohahevitra: "Lohahevitra IV — Ny Andro Antenatenany",
  famerenana: [
    "ANDRO ANTENATENANY : 476 (fianjeran'ny Empira romanina tandrefana) → 1492 (nahatongavan'i Colomb tany Amerika) ; misy Moyen Âge ambony sy ambany ; taon-jato XI-XIII = fandrosoana (fambolena, kroazada) ; XIV-XV = loza (ady zato taona, pesta).",
    "RAFITRA FEODALY : mpanjaka lehibe (suzerain) → tompomenakely (seigneur) → vasaly sy mpitaingin-tsoavaly (chevalier) → mpiasa tany (serf sy vilain) ; ny FIEF no tany omena ny vasaly.",
    "NY EGLIZY : ny Papa no lohany, dia ny kardinaly ; klerjy sekiolera (eveka, kiore) sy klerjy regiolera (abbé, moanina) ; nibaiko ny fiainana manontolo (fotoana, fampianarana, fanampiana).",
    "FAHATERAHAN'NY SILAMO : Mohammed (Mahomet) tany Arabia, taon-jato VII ; niely haingana ny finoana.",
    "FANDRESENA : fiitarana 630-632 ; kalifa efatra voalohany 632-656 ; Omeyyades 661-750 (hatrany Espaina) ; FISARAHANA : adihevitra momba ny dimbin'i Mohammed → sonita sy siita.",
    "Fampitahana : sivilizasiona tandrefana (kristianina, latina) sy silamo (arabo) — samy nandroso ary nifanakalo fahalalana (isa arabo, siansa, varotra).",
  ],
  laza: [
    {
      points: 5,
      consigne: "Lazao ny daty roa mamaritra ny Andro Antenatenany sy ny zava-nitranga tamin'izy ireo (1 isa avy) ary avaho ny taon-jato XI-XIII sy ny XIV-XV (1 isa).",
      items: [],
      corrige: [[C("476 : fianjeran'ny Empira romanina tandrefana"), T(" ; "), C("1492 : nahatongavan'i Christophe Colomb tany Amerika"), T(". XI-XIII : "), C("fandrosoana (fambolena, kroazada)"), T(" ; XIV-XV : "), C("loza (ady zato taona, pesta)"), T(".")]],
    },
    {
      points: 6,
      consigne: "Rafitra feodaly : alaharo hatramin'ny ambony ka hatramin'ny ambany ireto : serf ; suzerain ; vasaly ; seigneur (2 isa). Inona no atao hoe fief (2 isa) ? Iza no atao hoe chevalier (2 isa) ?",
      items: [],
      corrige: [[C("Suzerain → seigneur → vasaly → serf"), T(". Fief : "), C("tany omen'ny seigneur ny vasaly ho valin'ny fanompoany"), T(". Chevalier : "), C("mpiady mitaingin-tsoavaly manompo ny tompomenakely"), T(".")]],
    },
    {
      points: 4,
      consigne: "Ny Eglizy : iza no lohany (1 isa) ? Avaho ny klerjy sekiolera sy ny klerjy regiolera ary omeo ohatra iray avy (2 isa). Omeo anjara asa iray nataon'ny Eglizy teo amin'ny fiainana (1 isa).",
      items: [],
      corrige: [[T("Lohany : "), C("ny Papa"), T(". Sekiolera : "), C("miaina eo anivon'ny vahoaka (eveka, kiore)"), T(" ; regiolera : "), C("miaina ao amin'ny monasitera (abbé, moanina)"), T(". Anjara asa : "), C("fampianarana / fanampiana ny mahantra / fandaminana ny fotoana"), T(".")]],
    },
    {
      points: 5,
      consigne: "Ny Silamo : iza no nitory azy ary taiza (2 isa) ? Fenoy : kalifa efatra voalohany (…-…) ; Omeyyades (…-…) (2 isa). Inona no antony nisarahan'ny sonita sy ny siita (1 isa) ?",
      items: [],
      corrige: [[C("Mohammed (Mahomet), tany Arabia tamin'ny taon-jato VII"), T(". Kalifa efatra : "), C("632-656"), T(" ; Omeyyades : "), C("661-750"), T(". Antony : "), C("ny adihevitra momba ny dimbin'i Mohammed"), T(".")]],
    },
  ],
};

const S24 = {
  type: "fanadinana", numero: 24, total: 32,
  titre: "Famerenana sy Fanadinana V — Ny niandohan'ny vahoaka malagasy",
  lohahevitra: "Lohahevitra V — Ny niandohan'ny vahoaka malagasy",
  famerenana: [
    "Onjam-pifindra-monina : AOSTRONEZIANINA taon-jato III-IV (razamben'ny Vazimba) ; AFRIKANINA VII-VIII ; INDONEZIANINA sy MALAIZIANINA VII ; SILAMO IX (Antalaotra any Iharana, Zafiraminia, Antemoro) ; KARANA (indianina sy indopakistane) XIX ; EOROPEANINA XV (portogey tao Diego-Suarez, jiolahin-tsambo amoron-tsiraka atsinanana, Zana-Malata).",
    "Toeram-ponenana : ny aostronezianina afovoan-tany sy amoron-tsiraka ; ny afrikanina andrefana sy atsimo ; ny silamo avaratra sy atsinanana.",
    "Ny ARKEOLOJIA no manampy amin'ny famantarana ny fipetrahan'ny olona (vakoka, taolana, vilany tany).",
    "Fitoviana : fiompiana omby, fambolena vary, fomba amam-panao maro — VAHOAKA IRAY ny Malagasy.",
    "Fahasamihafana : fitenim-paritra, fitafiana, fomba amam-panao vitsivitsy — harena fa tsy fisarahana.",
  ],
  laza: [
    {
      points: 6,
      consigne: "Fenoy ny fafana : mpifindra monina / taon-jato nahatongavany — aostronezianina ; afrikanina ; silamo ; eoropeanina ; karana ; indonezianina-malaizianina. (1 isa avy)",
      items: [],
      corrige: [[T("Aostronezianina : "), C("III-IV"), T(" ; afrikanina : "), C("VII-VIII"), T(" ; silamo : "), C("IX"), T(" ; eoropeanina : "), C("XV"), T(" ; karana : "), C("XIX"), T(" ; indonezianina-malaizianina : "), C("VII"), T(".")]],
    },
    {
      points: 4,
      consigne: "Iza no razamben'ny Vazimba (1 isa) ? Tanisao vondrona silamo roa sy ny toerana nipetrahany (2 isa). Iza no atao hoe Zana-Malata (1 isa) ?",
      items: [],
      corrige: [[C("Ny aostronezianina tonga tamin'ny taon-jato III-IV"), T(". "), C("Antalaotra tany Iharana (avaratra) ; Zafiraminia sy Antemoro tany atsimo atsinanana"), T(". Zana-Malata : "), C("taranaky ny jiolahin-tsambo eoropeanina sy ny vehivavy malagasy tamoron-tsiraka atsinanana"), T(".")]],
    },
    {
      points: 4,
      consigne: "Inona no anjara asan'ny arkeolojia amin'ny fandalinana ny niandohan'ny Malagasy (2 isa) ? Omeo ohatra roa amin'ny zavatra hitan'ny mpikaroka (2 isa).",
      items: [],
      corrige: [[C("Mamantatra ny toerana sy ny fotoana nipetrahan'ny olona ary ny fomba fiainany, satria tsy nisy soratra tamin'izany"), T(". Ohatra : "), C("vilany tany, taolan'omby, fitaovana vy, toeram-ponenana taloha"), T(".")]],
    },
    {
      points: 6,
      consigne: "« Vahoaka iray ny Malagasy. » — Hamarino izany : tanisao fitoviana telo (3 isa) sy fahasamihafana roa (2 isa) ary lazao ny tokony ho fiheverana ny fahasamihafana (1 isa).",
      items: [],
      corrige: [[T("Fitoviana : "), C("fiompiana omby ; fambolena vary ; fomba amam-panao sy fiteny iray fototra"), T(" ; fahasamihafana : "), C("fitenim-paritra ; fitafiana (na fomba vitsivitsy)"), T(" ; fiheverana : "), C("harena iombonana izany fa tsy antony fisarahana"), T(".")]],
    },
  ],
};

const S28 = {
  type: "fanadinana", numero: 28, total: 32,
  titre: "Famerenana sy Fanadinana VI — Ny fomba fiainan'ny Malagasy voalohany",
  lohahevitra: "Lohahevitra VI — Ny fomba fiainan'ny Malagasy voalohany",
  famerenana: [
    "Lova AOSTRONEZIANINA : teny (vary, omby avy amin'ny fototra maanyan), fambolena vary an-tanety sy an-tanimbary, jono, lakana misy fanary.",
    "Lova AFRIKANINA : teny bantoa sy soahily (anaram-biby maro), fiompiana omby.",
    "Fitaterana : lakana misy fanary, sambo zairina, botry (boutre).",
    "Lova ARABO-SILAMO : toeram-barotra, vola sy fandanjana, isa arabo, SORABE (soratra arabo amin'ny teny malagasy, katibo Antemoro), anaran'ny andro sy ny volana, sikidy sy fanandroana, famorana, hevitry ny fanjakana sy ny mpanjaka masina.",
    "Lova TANDREFANA : varotra an-dranomasina, indostria, ariary (avy amin'ny real), fanjakana maoderina, kristianisma (LMS 1818-1820), sekoly voalohany Toamasina 1818, abidy latina 1823, tafika matihanina.",
    "Ny maha-malagasy : fahaizana mandray sy mampifangaro ireo lova ireo ho kolontsaina iray.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Tanisao lova aostronezianina telo (3 isa) sy lova afrikanina roa (2 isa) hita amin'ny fiainan'ny Malagasy.",
      items: [],
      corrige: [[T("Aostronezianina : "), C("fambolena vary ; lakana misy fanary ; teny maro (vary, omby...)"), T(" ; afrikanina : "), C("fiompiana omby ; teny bantoa sy soahily (anaram-biby)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Inona no atao hoe sorabe (2 isa) ? Iza no nitahiry azy (1 isa) ? Tanisao lova arabo-silamo roa hafa (2 isa).",
      items: [],
      corrige: [[C("Soratra amin'ny tarehintsoratra arabo fa amin'ny teny malagasy"), T(" ; notehirizin'ny "), C("katibo Antemoro"), T(". Lova hafa : "), C("anaran'ny andro sy ny volana ; sikidy sy fanandroana (na famorana, vola sy fandanjana, isa arabo)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Fitaterana an-dranomasina : tanisao karazana telo nampiasain'ny Malagasy sy ny razambeny (3 isa) ary lazao izay avy amin'ny aostronezianina (2 isa).",
      items: [],
      corrige: [[C("Lakana misy fanary ; sambo zairina ; botry"), T(". Avy amin'ny aostronezianina : "), C("ny lakana misy fanary"), T(".")]],
    },
    {
      points: 5,
      consigne: "Lova tandrefana : fenoy — sekoly voalohany tao Toamasina (…) ; abidy latina (…) ; misionera LMS (…-…) (3 isa). Inona no dikan'ny hoe « ny maha-malagasy dia fahaizana mandray sy mampifangaro » (2 isa) ?",
      items: [],
      corrige: [[C("1818"), T(" ; "), C("1823"), T(" ; "), C("1818-1820"), T(". Dikany : "), C("noraisin'ny Malagasy ireo lova avy any ivelany ary nampifangaroiny ho kolontsaina iray manokana, izay mampiavaka azy"), T(".")]],
    },
  ],
};

const S31 = {
  type: "fanadinana", numero: 31, total: 32,
  titre: "Famerenana sy Fanadinana VII — Ny fivoaran'ny fandaminana ara-politika",
  lohahevitra: "Lohahevitra VII — Ny fivoaran'ny fandaminana ara-politika teto Madagasikara",
  famerenana: [
    "Dingana efatra : FOKO notarihin'ny loham-poko (taon-jato V-XVI) → FIKAMBANAM-POKO notarihin'ny mpanjaka kely → FANJAKANA MALAGASY (1500-1810) → FANJAKAN'I MADAGASIKARA nanomboka tamin'i Radama I (1810-1896).",
    "Fanjakana malagasy lehibe : Sakalava (Menabe : Andriandahifotsy ; Boina : Andriamandisoarivo) ; Betsimisaraka (Ratsimilaho, 1712-1750) ; Merina (Andrianampoinimerina, 1787-1810).",
    "Radama I (1810-1828) : nanitatra ny fanjakana — « Ny ranomasina no valapariako » ; nekena ho mpanjakan'i Madagasikara.",
    "Ethnie sy tribu : hevitra nampidirin'ny vahiny — TSY MISY ethnie na tribu eto Madagasikara fa VONDROM-POKO 18 ao anaty VAHOAKA IRAY.",
    "Ny « politique des races » nataon'ny mpanjanaka dia fitaovana fampisarahana ; ny marina : iray razana, iray teny fototra, iray tantara ny Malagasy.",
  ],
  laza: [
    {
      points: 6,
      consigne: "Alaharo araka ny filaharany ny dingana efatra tamin'ny fivoaran'ny fandaminana ara-politika teto Madagasikara ary omeo ny vanim-potoanany. (1,5 isa avy)",
      items: [],
      corrige: [[C("1) Foko notarihin'ny loham-poko (V-XVI) ; 2) fikambanam-poko notarihin'ny mpanjaka kely ; 3) fanjakana malagasy (1500-1810) ; 4) Fanjakan'i Madagasikara nanomboka tamin'i Radama I (1810-1896)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Ampifanandrifio ny fanjakana sy ny mpanjaka : Menabe ; Boina ; Betsimisaraka ; Merina — Andriamandisoarivo ; Andrianampoinimerina ; Andriandahifotsy ; Ratsimilaho. (1,25 isa avy)",
      items: [],
      corrige: [[T("Menabe : "), C("Andriandahifotsy"), T(" ; Boina : "), C("Andriamandisoarivo"), T(" ; Betsimisaraka : "), C("Ratsimilaho"), T(" ; Merina : "), C("Andrianampoinimerina"), T(".")]],
    },
    {
      points: 4,
      consigne: "Iza no niteny hoe « Ny ranomasina no valapariako » (1 isa) ? Inona no dikan'izany (2 isa) ? Oviana izy no nitondra (1 isa) ?",
      items: [],
      corrige: [[C("Radama I"), T(" ; dikany : "), C("tiany hatambatra ho fanjakana iray i Madagasikara manontolo hatramin'ny ranomasina manodidina azy"), T(" ; nitondra "), C("1810-1828"), T(".")]],
    },
    {
      points: 5,
      consigne: "« Tsy misy ethnie na tribu eto Madagasikara. » — Hazavao io fehezanteny io : avaho ny hoe vondrom-poko (2 isa), lazao ny isany (1 isa) ary omeo porofo roa fa vahoaka iray ny Malagasy (2 isa).",
      items: [],
      corrige: [[T("Vondrom-poko : "), C("antokon'olona iombonana faritra sy fomba, ao anatin'ny firenena iray"), T(" ; "), C("18"), T(" no isany ; porofo : "), C("iray razana sy iray tantara ; iray ny teny malagasy fototra (na : mitovy ny fomba lehibe)"), T(".")]],
    },
  ],
};

const S32 = {
  type: "fanadinana", numero: 32, total: 32,
  titre: "Fanadinana akapobeny — Fanadinana amin'ny fiafaran'ny taona (examen blanc)",
  lohahevitra: "Ny fandaharam-pianarana manontolo — Lohahevitra I ka hatramin'ny VII",
  famerenana: [
    "Vakio indray ny famintinana isaky ny seho sy ny valin'ny fanadinana fito teo aloha.",
    "Lohahevitra I : tantara am-bava sy ny dingan'ny tetikasa fanadihadiana.",
    "Lohahevitra II : Prehistoara / Tantara, vanim-potoana lehibe, fivoaran'ny olombelona.",
    "Lohahevitra III : sivilizasiona antika — Mezopotamia, Ejipta, Gresy, Roma — sy ny lovany.",
    "Lohahevitra IV : Andro Antenatenany — feodaly, Eglizy, Silamo.",
    "Lohahevitra V sy VI : niandohan'ny vahoaka malagasy sy ny fomba fiainany — onjam-pifindra-monina, lova samihafa.",
    "Lohahevitra VII : fivoaran'ny fandaminana ara-politika — foko → Fanjakan'i Madagasikara ; vondrom-poko 18, vahoaka iray.",
    "Torohevitra : vakio tsara ny fanontaniana ; zarao ny fotoana ; valio aloha izay hainao ; avereno vakina ny asa vita.",
  ],
  laza: [
    {
      points: 4,
      consigne: "LOHAHEVITRA I sy II — a) Omeo ohatra roa amin'ny tantara am-bava (1 isa). b) Avaho ny Prehistoara sy ny Tantara (2 isa). d) Amin'ny vanim-potoana inona ny taona 1000 (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("lovan-tsofina ; angano (na ohabolana, hainteny)"), T(" ; b) "), C("Prehistoara = talohan'ny soratra ; Tantara = taorian'ny soratra"), T(" ; d) "), C("Andro Antenatenany"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA III — a) Taiza no nipoiran'ny soratra ary oviana (1 isa) ? b) Nahoana i Ejipta no « fanomezan'i Neily » (1 isa) ? d) Inona no lova navelan'i Atena ho antsika (1 isa) ? e) Fenoy : Empira romanina (… → 476) (1 isa).",
      items: [],
      corrige: [[T("a) "), C("Mezopotamia, tokony ho -3500"), T(" ; b) "), C("ny tondra-dranon'i Neily no mahavokatra ny tany"), T(" ; d) "), C("ny demokrasia"), T(" ; e) "), C("27"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA IV — a) Alaharo : vasaly ; suzerain ; serf ; seigneur (2 isa). b) Iza no lohan'ny Eglizy (1 isa) ? d) Fenoy : Omeyyades (…-…) (1 isa).",
      items: [],
      corrige: [[T("a) "), C("suzerain → seigneur → vasaly → serf"), T(" ; b) "), C("ny Papa"), T(" ; d) "), C("661-750"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA V sy VI — a) Fenoy : aostronezianina (taon-jato …) ; afrikanina (taon-jato …) ; silamo (taon-jato …) (0,5 isa avy). b) Tanisao lova aostronezianina iray sy lova arabo-silamo iray (0,75 isa avy). d) Iza no nitahiry ny sorabe (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("III-IV ; VII-VIII ; IX"), T(" ; b) "), C("fambolena vary (na lakana misy fanary) ; sikidy (na sorabe, anaran'ny andro)"), T(" ; d) "), C("ny katibo Antemoro"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA VII — a) Alaharo ny dingana efatra tamin'ny fivoarana ara-politika (2 isa). b) Iza no niteny hoe « Ny ranomasina no valapariako » (1 isa) ? d) Firy ny vondrom-poko malagasy (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("foko → fikambanam-poko → fanjakana malagasy → Fanjakan'i Madagasikara"), T(" ; b) "), C("Radama I"), T(" ; d) "), C("18"), T(".")]],
    },
  ],
};

module.exports = { S3, S6, S13, S20, S24, S28, S31, S32 };
