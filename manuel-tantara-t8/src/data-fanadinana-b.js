// data-fanadinana-b.js — Famerenana sy Fanadinana T8 : S23, S28, S31, S32
const T = (t) => ({ text: t });
const C = (t) => ({ text: t, cle: true });

const S23 = {
  type: "fanadinana", numero: 23, total: 32,
  titre: "Famerenana sy Fanadinana V — Ny Fanjakan'i Madagasikara (taonjato XIX)",
  lohahevitra: "Lohahevitra V — Ny Fanjakan'i Madagasikara tamin'ny taonjato XIX",
  famerenana: [
    "MPANJAKA ENINA : Radama I (1810-1828) ; Ranavalona I (1828-1861) ; Radama II (1861-1863) ; Rasoherina (1863-1868) ; Ranavalona II (1868-1883) ; Ranavalona III (1883-1896).",
    "RADAMA I : nanohy ny asan'Andrianampoinimerina (« ny ranomasina no valamparihiko ») ; fifanarahana 1817 sy 1820 tamin'ny Anglisy (nekena ho Mpanjakan'i Madagasikara, najanony ny fanondranana andevo) ; tafika maoderina, sekoly LMS (1820), soratra latinina, tanora nalefa tany Angletera, asa tanana, misionera.",
    "FITONDRANA HOVA (1864-1895) : ny praiminisitra RAINILAIARIVONY no tena nitantana ; oligarchie hova ; foloalindahy sy postes (Mahabo, Marovoay, Fort-Dauphin, Tamatave) ; code 305 articles (1881) ; hetra ; protestantisme fivavaham-panjakana (1869).",
  ],
  laza: [
    {
      points: 6,
      consigne: "Fenoy ny frizy : 1810-1828 : … ; 1828-1861 : … ; 1861-1863 : … ; 1863-1868 : … ; 1868-1883 : … ; 1883-1896 : … (1 isa avy)",
      items: [],
      corrige: [[C("Radama I ; Ranavalona I ; Radama II ; Rasoherina ; Ranavalona II ; Ranavalona III"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Inona no votoatin'ny fifanarahana 1817 sy 1820 ? (3 isa) b) Tanisao fanavaozana roa nataon-dRadama I. (1 isa avy)",
      items: [],
      corrige: [[T("a) "), C("nekena ho « Mpanjakan'i Madagasikara » i Radama I ; najanony ny fanondranana andevo ; nahazo fitaovana sy mpampianatra izy ho takalony"), T(" ; b) "), C("tafika maoderina ; sekoly sy soratra latinina (na tanora nalefa tany Angletera, asa tanana vaovao)"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Iza no praiminisitra nitantana ny fanjakana nanomboka tamin'ny 1864 ? (1 isa) b) Farito ny oligarchie hova. (2 isa) d) Inona ny code 305 articles ary oviana izy no navoaka ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("Rainilaiarivony"), T(" ; b) "), C("fitondrana izay fianakaviana hova vitsy no nibaiko ny fanjakana"), T(" ; d) "), C("lalàna nandamina ny fitsarana sy ny fiaraha-monina, navoaka tamin'ny 1881"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Inona no anjara asan'ny foloalindahy sy ny postes ? (2 isa) b) Tanisao postes roa. (1 isa) d) Inona no lasa fivavaham-panjakana tamin'ny 1869 ? (1 isa)",
      items: [],
      corrige: [[T("a) "), C("ny foloalindahy no tafika nanao ny expéditions ; ny postes no toby miaramila nifehezana ny faritany lavitra"), T(" ; b) "), C("Mahabo ; Marovoay (na Fort-Dauphin, Tamatave)"), T(" ; d) "), C("ny protestantisme"), T(".")]],
    },
  ],
};

const S28 = {
  type: "fanadinana", numero: 28, total: 32,
  titre: "Famerenana sy Fanadinana VI — Ny fanjanahantany sy ny tolom-panafahana",
  lohahevitra: "Lohahevitra VI — Ny fanjanahantany teto Madagasikara sy ny tolom-panafahana",
  famerenana: [
    "ANTONY ANATINY : charte Lambert (1855), lova Jean Laborde, fahalemen'ny fitondrana hova ; ANTONY IVELANY : Berlin (1885), convention de Zanzibar (1890), revolisiona indostrialy, « mission civilisatrice ».",
    "DINGANA : ady franco-hova I (1883-1885) sy II (1894-1895) ; azon'ny Frantsay Antananarivo (30 septambra 1895) ; zanatany (1896) ; sesitany Ranavalona III.",
    "FITONDRANA MPANJANAKA : governora jeneraly → province → district → canton ; code de l'indigénat ; hetra sy prestations ; SMOTIG ; économie de traite sy pacte colonial (compagnies havraise, lyonnaise, marseillaise).",
    "HETSIKA NASIONALISTA : Menalamba (1895-1898) ; Sadiavahy (1904-1905, 1914-1917) ; VVS (1913-1915) ; Ralaimongo (1919-1930) ; tolona 29 martsa 1947 (JINA, PANAMA ; MDRM voampanga ; PADESM).",
    "FAHALEOVANTENA : loi-cadre (1956) ; referendum (14 oktobra 1958, Repoblika voalohany) ; fahaleovantena (26 jona 1960).",
  ],
  laza: [
    {
      points: 4,
      consigne: "Sokajio ho antony anatiny na ivelany : a) charte Lambert ; b) convention de Zanzibar ; d) lova Jean Laborde ; e) « mission civilisatrice ». (1 isa avy)",
      items: [],
      corrige: [[C("a) anatiny ; b) ivelany ; d) anatiny ; e) ivelany"), T(".")]],
    },
    {
      points: 4,
      consigne: "Fenoy ny frizy : 30 septambra 1895 : … ; 1896 : … ; 29 martsa 1947 : … ; 26 jona 1960 : … (1 isa avy)",
      items: [],
      corrige: [[C("azon'ny Frantsay Antananarivo ; lasa zanatany i Madagasikara ; fipoahan'ny tolona lehibe ; fahaleovantena"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Lazao ny ambaratongam-pitondrana mpanjanaka. (2 isa) b) Avaho ny économie de traite sy ny pacte colonial. (2 isa)",
      items: [],
      corrige: [[T("a) "), C("governora jeneraly → province → district → canton"), T(" ; b) "), C("économie de traite : fanondranana akora sy fanafarana entana vita ; pacte colonial : varotra amin'i Frantsa irery"), T(".")]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. Menalamba / 2. VVS / 3. Ralaimongo / 4. tolona 1947 — a. gazety sy fitakiana zo ; b. fikomiana 1895-1898 ; d. fikambanana an-tsokosoko mpianatra ; e. JINA sy PANAMA. (1 isa avy)",
      items: [],
      corrige: [[C("1-b ; 2-d ; 3-a ; 4-e"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Inona ny loi-cadre (1956) ? (2 isa) b) Inona no nitranga tamin'ny referendum 14 oktobra 1958 ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("lalàna frantsay nanome fahefana bebe kokoa ny zanatany (fifidianana, governemanta teto an-toerana)"), T(" ; b) "), C("nifidy ny ho Repoblika ao anatin'ny Communauté française i Madagasikara — Repoblika voalohany (Tsiranana)"), T(".")]],
    },
  ],
};

const S31 = {
  type: "fanadinana", numero: 31, total: 32,
  titre: "Famerenana sy Fanadinana VII — Ny vakoka malagasy",
  lohahevitra: "Lohahevitra VII — Ny vakoka malagasy",
  famerenana: [
    "VAKOKA ARA-KOLONTSAINA : harena navelan'ny razana maneho ny maha-izy azy ny firenena ; HITA MASO (tsangambato, toerana, sangan'asa, rakitsoratra) sy TSY HITA MASO (lovan-tsofina, seho an-tsehatra, fety sy fombafomba, fahaiza-manao).",
    "VAKOKA ARA-TANTARA : mifandray amin'ny tantaram-pirenena (Rovan'Ambohimanga — UNESCO 2001, vavahady vato, sorabe, fitadidiana ny 1947).",
    "FIAROVANA : hitsivolana 82-029 (6 novambra 1982) sy didim-panjakana 91-017 (15 janoary 1991) ; fanjakana (tranombakoka) ; UNESCO ; fokonolona sy fianakaviana ; ny tsirairay.",
    "FAMPITANA : sekoly, fitsidihana, fandraiketana an-tsoratra ny lovan-tsofina — antoky ny fitadidiana iombonana sy ny fireharehana ho malagasy.",
  ],
  laza: [
    {
      points: 6,
      consigne: "Sokajio ho hita maso na tsy hita maso : a) Rovan'Ambohimanga ; b) hiragasy ; d) sorabe ; e) famadihana ; f) aloalo ; g) ohabolana. (1 isa avy)",
      items: [],
      corrige: [[C("a) hita maso ; b) tsy hita maso ; d) hita maso ; e) tsy hita maso ; f) hita maso ; g) tsy hita maso"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Farito ny vakoka ara-tantara. (3 isa) b) Omeo ohatra roa. (1 isa avy)",
      items: [],
      corrige: [[T("a) "), C("ny vakoka mifandray mivantana amin'ny tantaram-pirenena : toerana, tsangambato, rakitsoratra ary fahatsiarovana iombonana"), T(" ; b) "), C("Rovan'Ambohimanga ; sorabe (na vavahady vato, fitadidiana ny 1947)"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Inona ny lalàna roa miaro ny vakokam-pirenena malagasy ? (2 isa) b) Tanisao mpiaro ny vakoka telo hafa. (1 isa avy)",
      items: [],
      corrige: [[T("a) "), C("ny hitsivolana 82-029 (1982) sy ny didim-panjakana 91-017 (1991)"), T(" ; b) "), C("ny fanjakana (tranombakoka) ; ny UNESCO ; ny fokonolona sy ny fianakaviana (na ny tsirairay)"), T(".")]],
    },
    {
      points: 4,
      consigne: "Tanisao fomba efatra hampitana ny vakoka amin'ny taranaka. (1 isa avy)",
      items: [],
      corrige: [[C("Fampianarana any an-tsekoly ; fitsidihana tranombakoka sy toerana manan-tantara ; fandraiketana an-tsoratra ny lovan-tsofina ; fanohizana ny fety sy ny fahaiza-manao"), T(".")]],
    },
  ],
};

const S32 = {
  type: "fanadinana", numero: 32, total: 32,
  titre: "Fanadinana akapobeny — Fanadinana amin'ny fiafaran'ny taona (examen blanc)",
  lohahevitra: "Ny fandaharam-pianarana manontolo — Lohahevitra I ka hatramin'ny VII",
  famerenana: [
    "Vakio indray ny famintinana isaky ny seho sy ny valin'ny fanadinana fito teo aloha.",
    "Lohahevitra I : ny tantara am-bava sy ny dingan'ny fanadihadiana.",
    "Lohahevitra II : ny Andro Maoderina (1492-1789) — fikarohana lehibe, varotra telozoro, Renaissance, Réforme, Madagasikara.",
    "Lohahevitra III : ny vanim-potoana ankehitriny — Ancien Régime, Fahazavana, revolisiona (1789, Etazonia), revolisiona indostrialy, empira mpanjanaka.",
    "Lohahevitra IV sy V : ireo fanjakana malagasy (XVI-XVIII) sy ny Fanjakan'i Madagasikara (taonjato XIX).",
    "Lohahevitra VI : ny fanjanahantany (1896), ny hetsika nasionalista (Menalamba → 1947) ary ny fahaleovantena (1960).",
    "Lohahevitra VII : ny vakoka malagasy sy ny fiarovana azy.",
    "Torohevitra : vakio tsara ny fanontaniana ; zarao ny fotoana ; valio aloha izay hainao ; avereno vakina ny asa vita.",
  ],
  laza: [
    {
      points: 4,
      consigne: "LOHAHEVITRA I sy II — a) Omeo ohatra roa amin'ny tantara am-bava (1 isa). b) Farito ny Andro Maoderina (1 isa). d) Iza no tonga tany Amerika tamin'ny 1492 ary iza no nahita an'i Madagasikara tamin'ny 1500 (1 isa) ? e) Tondroy ny kaontinanta telo tamin'ny varotra telozoro (1 isa).",
      items: [],
      corrige: [[T("a) "), C("lovan-tsofina ; angano (na ohabolana...)"), T(" ; b) "), C("1492-1789"), T(" ; d) "), C("C. Colomb ; Diégo Diaz"), T(" ; e) "), C("Eoropa, Afrika, Amerika"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA III — a) Iza no filozofa niaro ny fisarahan'ny fahefana (1 isa) ? b) Inona no nitranga tamin'ny 14 jolay 1789 (1 isa) ? d) Fenoy : revolisiona indostrialy II (…-1914) (1 isa). e) Inona no votoatin'ny convention de Zanzibar (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("Montesquieu"), T(" ; b) "), C("fakana ny Bastille"), T(" ; d) "), C("1850"), T(" ; e) "), C("Madagasikara ho an'i Frantsa, Zanzibar ho an'ny Royaume-Uni"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA IV sy V — a) Tondroy ny faritra nisy ny Boina sy ny Betsimisaraka (1 isa). b) Tanisao ny sokajy telo tao amin'ny fiaraha-monina malagasy (1 isa). d) Iza no mpanjaka nanao ny fifanarahana 1817 sy 1820 (1 isa) ? e) Iza no praiminisitra nitantana nanomboka 1864 (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("Boina : avaratra andrefana ; Betsimisaraka : atsinanana"), T(" ; b) "), C("andriana, hova, andevo"), T(" ; d) "), C("Radama I"), T(" ; e) "), C("Rainilaiarivony"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA VI — a) Oviana i Madagasikara no lasa zanatany frantsay (1 isa) ? b) Tanisao hetsika nasionalista roa sy ny fotoanany (1 isa avy). d) Oviana ny fahaleovantena (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("1896"), T(" ; b) "), C("Menalamba (1895-1898) ; VVS (1913-1915) — na Sadiavahy, Ralaimongo, 1947"), T(" ; d) "), C("26 jona 1960"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA VII — a) Avaho ny vakoka hita maso sy tsy hita maso (2 isa). b) Inona ny lalàna 1982 miaro ny vakokam-pirenena (1 isa) ? d) Inona ny vakoka malagasy voasoratry ny UNESCO tamin'ny 2001 (1 isa) ?",
      items: [],
      corrige: [[T("a) "), C("hita maso : azo tsapain-tanana (tsangambato...) ; tsy hita maso : velona ao amin'ny olona (lovan-tsofina...)"), T(" ; b) "), C("ny hitsivolana 82-029"), T(" ; d) "), C("ny Rovan'Ambohimanga"), T(".")]],
    },
  ],
};

module.exports = { S23, S28, S31, S32 };
