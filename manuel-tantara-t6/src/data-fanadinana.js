// data-fanadinana.js — Famerenana sy Fanadinana (S6, S17, S21, S26) + Fanadinana ankapobeny (S27)
const T = (t) => ({ text: t });
const C = (t) => ({ text: t, cle: true });

const S6 = {
  type: "fanadinana", numero: 6, total: 27,
  titre: "Famerenana sy Fanadinana No 1 — Fampidirana ny fianarana Tantara",
  lohahevitra: "Lohahevitra I — Fampidirana ny fianarana Tantara",
  famerenana: [
    "Ny TANTARA dia siansa mandalina ny zava-nitranga marina tamin'ny lasan'ny olombelona ; ny mpandinika sy mitantara azy dia ny MPAHAY TANTARA.",
    "Toetra efatra : zava-nisy marina ; voafaritra ny toerana sy ny fotoana ; miova araka ny fotoana sy ny toerana ; misy porofo.",
    "Tombontsoa : mahafantatra ny lasa sy ny fototra niaviana ; manazava ny ankehitriny ; manatsara ny hoavy.",
    "Fandrefesana ny fotoana : taon-jato = 100 taona ; frizy kronolojika ; kalandrie samihafa (gregorianina, silamo, jiosy, sinoa).",
    "Loharano telo sokajy : AN-TSORATRA (boky, gazety, arisiva), AM-BAVA (lovan-tsofina, vavolombelona), MOANA (fitaovana, taolana, vola, tsangam-bato).",
    "Ny fampitahana ny loharano no miantoka ny fahamarinana ara-tantara.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Omeo ny famaritana ny Tantara ary tanisao ny toetra efatra mampiavaka ny zava-nitranga ara-tantara.",
      items: [],
      corrige: [[T("Ny Tantara dia "), C("siansa mandalina ny zava-nitranga marina tamin'ny lasan'ny olombelona"), T(" (1 isa). Toetra : "), C("zava-nisy marina ; voafaritra ny toerana sy ny fotoana ; miova araka ny fotoana sy ny toerana ; misy porofo ara-tantara"), T(" (0,75 isa avy).")]],
    },
    {
      points: 4,
      consigne: "Amin'ny taon-jato fahafiry : a) 1960 ; b) 1896 ; c) 2025 ; d) 1787 ? (1 isa avy)",
      items: [],
      corrige: [[T("a) "), C("faha-20"), T(" ; b) "), C("faha-19"), T(" ; c) "), C("faha-21"), T(" ; d) "), C("faha-18"), T(".")]],
    },
    {
      points: 6,
      consigne: "Sokajio ireto loharano ireto (an-tsoratra / am-bava / moana) : gazety 1972 ; lovan-tsofina ; vilany tany ; rakitsoratry ny fitsarana ; tahirim-peo ; vola madinika taloha. (1 isa avy)",
      items: [],
      corrige: [[T("Gazety : "), C("an-tsoratra"), T(" ; lovan-tsofina : "), C("am-bava"), T(" ; vilany tany : "), C("moana"), T(" ; rakitsoratra : "), C("an-tsoratra"), T(" ; tahirim-peo : "), C("am-bava"), T(" ; vola : "), C("moana"), T(".")]],
    },
    {
      points: 6,
      consigne: "Lahatsoratra kely : « Nahita sary sokitra sy taolana tao anaty lava-bato ny mpikaroka ary nampitahainy tamin'ny lovan-tsofin'ny mponina. » — a) Loharano inona avy no nampiasainy ? (2 isa) b) Nahoana izy no nampitaha azy ireo ? (2 isa) c) Inona no siansa manampy azy ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("Loharano moana (sary sokitra, taolana) sy am-bava (lovan-tsofina)"), T(" ; b) "), C("mba hamaritana ny fahamarinan'ny tantara sy hifamenoan'ny loharano"), T(" ; c) "), C("ny arkeolojia"), T(".")]],
    },
  ],
};

const S17 = {
  type: "fanadinana", numero: 17, total: 27,
  titre: "Famerenana sy Fanadinana No 2 — Madagasikara taorian'ny fahaleovantena",
  lohahevitra: "Lohahevitra II — Madagasikara taorian'ny fahaleovantena",
  famerenana: [
    "Repoblika efatra : I (1958-1972, Tsiranana) ; II (1975-1991, Ratsiraka, Boky Mena) ; III (1993-2010, Zafy/Ratsiraka/Ravalomanana) ; IV (2010-..., Rajaonarimampianina, Rajoelina).",
    "Tetezamita : 1972-1975 (miaramila : Ramanantsoa, Ratsimandrava, Andriamahazo) ; 1991-1993 ; 2009-2014 (HAT) ; 2025-... (fanorenana ifotony, Randrianirina).",
    "Daty lehibe : 14 oktobra 1958 ; 26 JONA 1960 (fahaleovantena) ; 30 desambra 1975 ; 27 martsa 1993 ; 17 novambra 2010 ; 14 oktobra 2025.",
    "Andrim-panjakana telo : mpanatanteraka (filoha + governemanta), mpanao lalàna (Antenimiera roa), mpitsara (fitsarana, HCC).",
    "Fototry ny Repoblika : ny vahoaka no loharanon'ny fahefana ; fifidianana, fitsinjaram-pahefana, zon'olombelona, fanjakana tan-dalàna.",
    "Politika nifandimby : fiankinan-doha (I), sosialisma (II), fanalalahana (III), fampandrosoana lovain-jafy (IV).",
    "Krizy : 1972, 1991, 2002, 2009, 2025 — antony (kolikoly, fahantrana...) sy vokany (krizy ara-toekarena, fahantrana...).",
  ],
  laza: [
    {
      points: 5,
      consigne: "Fenoy ny fafana : Repoblika / vanim-potoana / filoha iray — I (…/…) ; II (…/…) ; III (…/…) ; IV (…/…) ; ary lazao ny daty nahazoana ny fahaleovantena. (1 isa avy)",
      items: [],
      corrige: [[T("I : "), C("1958-1972, Tsiranana"), T(" ; II : "), C("1975-1991, Ratsiraka"), T(" ; III : "), C("1993-2010, Zafy na Ratsiraka na Ravalomanana"), T(" ; IV : "), C("2010-..., Rajaonarimampianina na Rajoelina"), T(" ; fahaleovantena : "), C("26 jona 1960"), T(".")]],
    },
    {
      points: 5,
      consigne: "Tetezamita 1972-1975 : tanisao araka ny filaharany ireo mpitondra telo nifandimby ary lazao izay nanjo an'i Ratsimandrava. (1,25 isa avy)",
      items: [],
      corrige: [[C("Ramanantsoa (1972-1975)"), T(" ; "), C("Ratsimandrava (5-11 febroary 1975)"), T(" ; "), C("Andriamahazo (direktoara miaramila)"), T(" ; "), C("maty voatifitra i Ratsimandrava ny 11 febroary 1975, enina andro taorian'ny nandraisany ny fahefana"), T(".")]],
    },
    {
      points: 5,
      consigne: "Andrim-panjakana : tanisao ny fahefana telo sy ny mpisahana azy avy, ary hazavao ny antony anasarahana azy. (3 isa + 2 isa)",
      items: [],
      corrige: [[C("Mpanatanteraka : filoha sy governemanta ; mpanao lalàna : Antenimieram-pirenena sy Antenimierandoholona ; mpitsara : ny fitsarana (HCC, Fitsarana Tampony)"), T(" (3 isa). Antony : "), C("mba tsy hisian'ny fanaparam-pahefana fa hifampitsinjovan'ny fahefana telo"), T(" (2 isa).")]],
    },
    {
      points: 5,
      consigne: "Fanadihadiana kely : tanisao ireo taona nisian'ny krizy politika lehibe (1 isa), antony roa (2 isa) ary vokatra roa (2 isa).",
      items: [],
      corrige: [[T("Taona : "), C("1972, 1991, 2002, 2009, 2025"), T(" ; antony : "), C("kolikoly, tsy fisian'ny fampandrosoana, tsy fananana asa..."), T(" ; vokatra : "), C("krizy ara-toekarena sy fahantrana, tsy fahatokisan'ny mpamatsy vola, fahafatesana sy fahasimban'ny fotodrafitrasa"), T(".")]],
    },
  ],
};

const S21 = {
  type: "fanadinana", numero: 21, total: 27,
  titre: "Famerenana sy Fanadinana No 3 — Ny fifandraisana ivelany",
  lohahevitra: "Lohahevitra III — Ny fifandraisan'i Madagasikara amin'ireo firenena afrikanina sy ireo nosy",
  famerenana: [
    "Endri-pifandraisana : roalafy (firenena roa), marolafy (firenena maro), diplomatika (masoivoho), ara-miaramila, ara-barotra.",
    "UA : Firaisambe Afrikanina (2002, nisolo ny OUA 1963) — demokrasia, zon'olombelona, fampandrosoana (NEPAD) ; foibe : Addis-Abeba.",
    "COI (1984) : nosy 5 — Madagasikara, Maorisy, Seselisy, Kaomoro, La Réunion (Frantsa).",
    "COMESA (1994) : tsena iombonana, firenena 21 ; SADC (1992 ; Madagasikara 2005) : fampandrosoana Afrika Atsimo.",
    "Vokatra : ara-politika (fifehezana ny krizy), ara-toekarena (fanatontoloana, fifaninanana, fihenan'ny vidin-javatra, asa), ara-tsosialy (fifampizarana traikefa, fivezivezena malalaka).",
  ],
  laza: [
    {
      points: 6,
      consigne: "Fenoy ny fafana : fikambanana / taona / mombamomba — UA ; COI ; COMESA ; SADC. (1,5 isa avy)",
      items: [],
      corrige: [[T("UA : "), C("2002 (OUA 1963), firenena afrikanina, demokrasia sy fampandrosoana"), T(" ; COI : "), C("1984, nosy 5 ao amin'ny ranomasimbe indianina"), T(" ; COMESA : "), C("1994, tsena iombonana, firenena 21"), T(" ; SADC : "), C("1992 (MG 2005), fampandrosoana Afrika Atsimo"), T(".")]],
    },
    {
      points: 4,
      consigne: "Avaho ny fifandraisana roalafy sy ny marolafy ary omeo ohatra iray avy. (2 isa avy)",
      items: [],
      corrige: [[T("Roalafy : "), C("firenena roa mifanao fifanarahana (ohatra : Madagasikara sy Frantsa)"), T(" ; marolafy : "), C("firenena maro ao anaty fikambanana (ohatra : Madagasikara ao amin'ny UA na ny COI)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Tanisao tombony roa ara-toekarena sy tombony iray ara-tsosialy azo amin'ny fidirana amin'ny tsenam-paritra, ary fepetra roa takiana. (1 isa avy)",
      items: [],
      corrige: [[T("Ara-toekarena : "), C("mihena ny vidin-javatra ; miteraka asa ny orinasa"), T(" ; ara-tsosialy : "), C("fivezivezena malalaka / fifampizarana traikefa"), T(" ; fepetra : "), C("fanatsarana ny vokatra ; fahaizana mitantana / fanaraha-maso ny entana"), T(".")]],
    },
    {
      points: 5,
      consigne: "Fanadihadiana : nahoana i Madagasikara no naato tao amin'ny UA tamin'ny 2009 sy 2025, ary inona no anjara asan'ny UA tamin'ny famahana ny krizy 2009 ? (2,5 isa avy)",
      items: [],
      corrige: [[C("Naato izy satria tsy ara-dalàna ny fifandimbiasam-pahefana (fanonganam-panjakana)"), T(" ; "), C("ny UA sy Jean Ping no nanelanelana ka niteraka ny fifanarahana Maputo sy Addis-Abeba"), T(".")]],
    },
  ],
};

const S26 = {
  type: "fanadinana", numero: 26, total: 27,
  titre: "Famerenana sy Fanadinana No 4 — Vakoka sy harem-pirenena",
  lohahevitra: "Lohahevitra IV — Ny vakoka sy ny harem-pirenena eto Madagasikara",
  famerenana: [
    "Vakoka = lova avy amin'ny razana : hita maso (Rova, aloalo, tsangam-bato, fasana) sy tsy hita maso (kabary, hira gasy, famadihana, sikotra Zafimaniry).",
    "Tombontsoan'ny fikolokoloana : mirakitra ny tantara, mitahiry ny kolontsaina, fizahan-tany sy fampidiram-bola, lova ho an'ny taranaka.",
    "Fiarovana ny vakoka : tranom-bakoka, fiarovana amin'ny afo/hamandoana/fandrobana, fampianarana ny taranaka.",
    "Harem-pirenena : zavatra voajanahary (gidro, baobab), faritra arovana (Isalo), vokatra voajanahary (ala, hazandrano), vokatra azo trandrahina (volamena, vatosoa).",
    "UNESCO : Tsingin'ny Bemaraha (1990), vohimasin'Ambohimanga (2001), ala mandon'Atsinanana (2007) ; sikotra Zafimaniry (2003/2008), kabary (2021).",
    "Fiarovana : fambolen-kazo, tsy mandoro tanety, ady amin'ny fitrandrahana sy fanondranana tsy ara-dalàna, faritra arovana.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Omeo ny famaritana ny vakoka (2 isa) ary sokajio ireto : Rovan'Ambohimanga ; kabary ; aloalo ; famadihana ; hira gasy ; tsangam-bato. (0,5 isa avy)",
      items: [],
      corrige: [[T("Vakoka : "), C("lova avy amin'ny razana mirakitra ny maha izy azy ny firenena, tehirizina ho an'ny taranaka"), T(". Hita maso : "), C("Rova, aloalo, tsangam-bato"), T(" ; tsy hita maso : "), C("kabary, famadihana, hira gasy"), T(".")]],
    },
    {
      points: 5,
      consigne: "Tanisao tombontsoa telo amin'ny fikolokoloana ny vakoka sy fomba roa hiarovana azy. (1 isa avy)",
      items: [],
      corrige: [[T("Tombontsoa : "), C("mirakitra ny tantara ; mampiroborobo ny fizahan-tany sy mampidi-bola ; lova ho an'ny taranaka"), T(" ; fiarovana : "), C("tranom-bakoka ; fiarovana amin'ny afo sy ny fandrobana / fampianarana ny taranaka"), T(".")]],
    },
    {
      points: 5,
      consigne: "Harem-pirenena : omeo ny famaritana (2 isa) ary tanisao ny sokajy efatra misy ohatra. (0,75 isa avy)",
      items: [],
      corrige: [[C("Ireo faritra na fananana voajanahary na tsia mampiavaka ny firenena, tehirizina holovain'ny taranaka"), T(". Sokajy : "), C("zavatra voajanahary (gidro) ; faritra arovana (Isalo) ; vokatra voajanahary (ala) ; vokatra azo trandrahina (volamena)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Fenoy : Tsingin'ny Bemaraha (…) ; vohimasin'Ambohimanga (…) ; ala mandon'Atsinanana (…) — ary omeo fepetra roa hiarovana ny harem-pirenena. (0,5 isa avy ny daty ; 1,75 isa avy ny fepetra)",
      items: [],
      corrige: [[C("1990"), T(" ; "), C("2001"), T(" ; "), C("2007"), T(". Fepetra : "), C("fambolen-kazo sy tsy fandorana tanety"), T(" ; "), C("ady amin'ny fitrandrahana sy ny fanondranana antsokosoko"), T(".")]],
    },
  ],
};

const S27 = {
  type: "fanadinana", numero: 27, total: 27,
  titre: "Fanadinana akapobeny — Fanadinana amin'ny fiafaran'ny taona (examen blanc)",
  lohahevitra: "Ny fandaharam-pianarana manontolo — Lohahevitra I, II, III ary IV",
  famerenana: [
    "Vakio indray ny famintinana isaky ny seho sy ny valin'ny fanadinana efatra teo aloha.",
    "Lohahevitra I : famaritana ny Tantara, toetra, tombontsoa, fotoana, loharano.",
    "Lohahevitra II : Repoblika efatra, tetezamita, andrim-panjakana, politikam-pitondrana, krizy.",
    "Lohahevitra III : endri-pifandraisana, UA/COI/COMESA/SADC, vokatry ny fidirana.",
    "Lohahevitra IV : vakoka sy karazany, fikolokoloana, harem-pirenena, fiarovana.",
    "Torohevitra : vakio tsara ny fanontaniana ; zarao ny fotoana ; valio aloha izay hainao ; avereno vakina ny asa vita.",
  ],
  laza: [
    {
      points: 5,
      consigne: "LOHAHEVITRA I — Omeo ny famaritana ny Tantara (1 isa), toetra roa (1 isa), ary sokajio : boky ; lovan-tsofina ; vola taloha (1 isa avy).",
      items: [],
      corrige: [[C("Siansa mandalina ny zava-nitranga marina tamin'ny lasan'ny olombelona"), T(" ; toetra : "), C("zava-nisy marina ; voafaritra ny toerana sy ny fotoana (na hafa)"), T(" ; boky : "), C("an-tsoratra"), T(" ; lovan-tsofina : "), C("am-bava"), T(" ; vola : "), C("moana"), T(".")]],
    },
    {
      points: 6,
      consigne: "LOHAHEVITRA II — a) Fenoy : Repoblika I (…-…, filoha …) ; Repoblika II (…-…, filoha …) (3 isa). b) Lazao ny fahefana telo (1,5 isa). c) Tanisao krizy telo sy ny taonany (1,5 isa).",
      items: [],
      corrige: [[T("a) "), C("1958-1972, Tsiranana ; 1975-1991, Ratsiraka"), T(" ; b) "), C("mpanatanteraka, mpanao lalàna, mpitsara"), T(" ; c) "), C("1972, 1991, 2002 (na 2009, 2025)"), T(".")]],
    },
    {
      points: 4,
      consigne: "LOHAHEVITRA III — Tanisao ny fikambanana efatra misy an'i Madagasikara (2 isa) ary omeo tombony roa amin'ny fidirana amin'izy ireo (2 isa).",
      items: [],
      corrige: [[C("UA, COI, COMESA, SADC"), T(" ; tombony : "), C("fifehezana ny krizy politika ; fihenan'ny vidin-javatra sy fisian'ny asa ; fivezivezena malalaka"), T(" (roa amin'ireo).")]],
    },
    {
      points: 5,
      consigne: "LOHAHEVITRA IV — a) Avaho ny vakoka hita maso sy tsy hita maso, omeo ohatra iray avy (2 isa). b) Tanisao harena UNESCO roa (1 isa). d) Omeo fepetra roa hiarovana ny harem-pirenena (2 isa).",
      items: [],
      corrige: [[T("a) "), C("hita maso : zavatra sy toerana (Rova) ; tsy hita maso : kolontsaina (kabary)"), T(" ; b) "), C("Tsingin'ny Bemaraha, vohimasin'Ambohimanga (na ala mandon'Atsinanana)"), T(" ; d) "), C("fambolen-kazo ; tsy mandoro tanety / ady amin'ny fanondranana antsokosoko"), T(".")]],
    },
  ],
};

module.exports = { S6, S17, S21, S26, S27 };
