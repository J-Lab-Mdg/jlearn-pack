// data-fanadinana-a.js — Famerenana sy Fanadinana T8 : S3, S10, S16, S19
const T = (t) => ({ text: t });
const C = (t) => ({ text: t, cle: true });

const S3 = {
  type: "fanadinana", numero: 3, total: 32,
  titre: "Famerenana sy Fanadinana I — Ny tantara am-bava",
  lohahevitra: "Lohahevitra I — Ny tantara am-bava",
  famerenana: [
    "Ny TANTARA AM-BAVA dia loharano ara-tantara ampitaina amin'ny vava : lovan-tsofina, angano, ohabolana, hainteny, fitantaran'ny vavolombelona.",
    "Dingan'ny fanadihadiana am-bava : 1) fanapahana ny lohahevitra ; 2) fanomanana ny fanontaniana ; 3) fanaovana ny resadresaka ; 4) fandraiketana ; 5) fitsikerana sy fandikana ; 6) fandrafetana ny vokatra.",
    "Fomba fanaovana ny resadresaka : fifampiresahana mirindra, fijery mivantana, empatia (mametraka ny tena eo amin'ny toeran'ny olona), fanontaniana tokana isaky ny indray mandeha, famelana ny vavolombelona hitantara malalaka, fandrindrana ny fotoana.",
    "Ny famokarana ny loharano am-bava : fametrahana olan-kevitra, fitsikerana ny loharano (iza no miteny ? azo itokisana ve ?), fandikana azy ary fampitahana amin'ny loharano an-tsoratra.",
    "Toe-tsaina takiana : fanajana ny olona anontaniana, fihainoana tsara, tsy manapaka teny, fisaorana.",
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
      consigne: "Alaharo araka ny filaharany ireto dingan'ny fanadihadiana am-bava ireto : fandrafetana ny vokatra ; fanapahana ny lohahevitra ; fanaovana ny resadresaka ; fanomanana ny fanontaniana ; fitsikerana sy fandikana ; fandraiketana. (1 isa avy)",
      items: [],
      corrige: [[C("1) fanapahana ny lohahevitra ; 2) fanomanana ny fanontaniana ; 3) fanaovana ny resadresaka ; 4) fandraiketana ; 5) fitsikerana sy fandikana ; 6) fandrafetana ny vokatra"), T(".")]],
    },
    {
      points: 4,
      consigne: "Tanisao fomba efatra tokony harahina rehefa manao resadresaka amin'ny vavolombelona. (1 isa avy)",
      items: [],
      corrige: [[C("Fijery mivantana ; empatia ; fanontaniana tokana isaky ny indray mandeha ; famelana ny vavolombelona hitantara malalaka (na fandrindrana ny fotoana, fihainoana tsara)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Lahatsoratra kely : « Nitantara ny tolona 1947 ny dadabe iray, fa hafa kely ny fitantaran'ny dadabe faharoa. » — a) Nahoana no mety tsy mitovy ny fitantarana am-bava ? (2 isa) b) Inona no atao amin'ny loharano roa tsy mitovy ? (2 isa) d) Loharano inona no azo ampitahana aminy ? (1 isa)",
      items: [],
      corrige: [[T("a) "), C("Miova ny tantara rehefa mifindrafindra vava sy mandeha ny fotoana ; samy manana ny fijeriny ny vavolombelona"), T(" ; b) "), C("tsikeraina sy ampitahaina izy roa ary anontaniana olona hafa"), T(" ; d) "), C("loharano an-tsoratra (boky, gazety tamin'izany, rakitsoratra)"), T(".")]],
    },
  ],
};

const S10 = {
  type: "fanadinana", numero: 10, total: 32,
  titre: "Famerenana sy Fanadinana II — Ny Andro Maoderina",
  lohahevitra: "Lohahevitra II — Ny Andro Maoderina (1492-1789)",
  famerenana: [
    "ANDRO MAODERINA : 1492 (nahatongavan'i C. Colomb tany Amerika) → 1789 (Revolisiona frantsay) ; tranga telo lehibe : ny fikarohana lehibe, ny Renaissance, ny Réforme.",
    "FIKAROHANA LEHIBE : B. Diaz (1488, Cap Bonne-Espérance) ; C. Colomb (1492, Amerika) ; Vasco de Gama (1498, Calicut) ; Diégo Diaz (1500, Madagasikara) ; Vespucci (1500) ; Magellan (1519-1522, fanodidinana ny tany).",
    "VOKANY : lalam-barotra vaovao, empira voalohany (Espaina, Portogaly), comptoirs, fandravana ny Aztèques sy ny Incas, plantations ary ny VAROTRA TELOZORO (Eoropa → Afrika → Amerika → Eoropa).",
    "RENAISSANCE : fifohazan'ny zavakanto sy ny fahalalana (Léonard de Vinci, Michel-Ange, Raphaël, Donatello, Copernic) ; REFORME : fanavaozana ara-pivavahana (Luther, Calvin, Henri VIII → protestantisme, anglicanisme ; contre-réforme).",
    "MADAGASIKARA : hitan'i Diégo Diaz (1500) ; comptoirs eoropeanina ; Beniowski (Antongil, 1774) ; niroborobo ny fanjakana amoron-tsiraka noho ny varotra.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Farito ny Andro Maoderina (fetra roa sy ny zava-nitranga, 3 isa) ary tanisao ny tranga lehibe roa hafa nanamarika azy. (1 isa avy)",
      items: [],
      corrige: [[T("Ny Andro Maoderina dia "), C("1492 (nahatongavan'i Colomb tany Amerika) → 1789 (Revolisiona frantsay)"), T(" ; tranga : "), C("ny fikarohana lehibe ; ny Renaissance ; ny Réforme (roa amin'ireo)"), T(".")]],
    },
    {
      points: 5,
      consigne: "Ampifanandrifio ny mpikaroka sy ny zava-bitany : 1. C. Colomb / 2. Vasco de Gama / 3. Magellan / 4. B. Diaz / 5. Diégo Diaz — a. Calicut 1498 ; b. Amerika 1492 ; d. Madagasikara 1500 ; e. Cap Bonne-Espérance 1488 ; f. fanodidinana ny tany 1519-1522. (1 isa avy)",
      items: [],
      corrige: [[C("1-b ; 2-a ; 3-f ; 4-e ; 5-d"), T(".")]],
    },
    {
      points: 5,
      consigne: "Ny varotra telozoro : a) Tondroy ny kaontinanta telo voakasiny (1,5 isa). b) Lazao izay nafindra isaky ny lalana (2 isa). d) Lazao vokany iray tany Afrika sy iray tany Eoropa (1,5 isa).",
      items: [],
      corrige: [[T("a) "), C("Eoropa, Afrika, Amerika"), T(" ; b) "), C("entana (Eoropa→Afrika) ; andevo (Afrika→Amerika) ; vokatry ny plantations (Amerika→Eoropa)"), T(" ; d) "), C("fihenan'ny mponina tany Afrika ; fanankarenan'i Eoropa"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Avaho ny Renaissance sy ny Réforme (2 isa). b) Omeo olona roa isaky ny hetsika (0,5 isa avy). d) Inona no nitranga teto Madagasikara tamin'ny 1500 sy 1774 ? (1 isa)",
      items: [],
      corrige: [[T("a) "), C("Renaissance = fifohazan'ny zavakanto sy ny fahalalana ; Réforme = fanavaozana ara-pivavahana niteraka ny protestantisme"), T(" ; b) "), C("Renaissance : Léonard de Vinci, Michel-Ange (na Copernic...) ; Réforme : Luther, Calvin (na Henri VIII)"), T(" ; d) "), C("1500 : hitan'i Diégo Diaz i Madagasikara ; 1774 : nanorina toby tao Antongil i Beniowski"), T(".")]],
    },
  ],
};

const S16 = {
  type: "fanadinana", numero: 16, total: 32,
  titre: "Famerenana sy Fanadinana III — Ny vanim-potoana ankehitriny",
  lohahevitra: "Lohahevitra III — Ny vanim-potoana ankehitriny (1789 - ...)",
  famerenana: [
    "VANIM-POTOANA ANKEHITRINY : 1789 → ankehitriny ; ANCIEN REGIME : sokajy telo (klerjy, andriana, tiers état), monarchie absolue tany Frantsa, parlementarisme tany Angletera.",
    "FAHAZAVANA (taonjato XVIII) : Lavoisier (rivotra), Franklin (paratonnerre), Montesquieu (fisarahan'ny fahefana), Voltaire (fandeferana), Rousseau (sitrapon'ny vahoaka), Kant (saina), Diderot (Encyclopédie).",
    "REVOLISIONA : Etazonia (fahaleovantena 1776) ; Frantsa : Bastille (14 jolay 1789), DDHC (aogositra 1789), Repoblika voalohany (1792).",
    "REVOLISIONA INDOSTRIALY : I (tapaky ny XVIII → tapaky ny XIX, Angletera, etivam-po) ; II (1850-1914, herinaratra sy solika) ; taylorisme sy fordisme.",
    "EMPIRA MPANJANAKA : antony (akora, tsena, fifindra-monina, fifaninanana, « mission civilisatrice ») ; konferansan'i Berlin (1885) ; convention de Zanzibar (1890 : Madagasikara ho an'i Frantsa).",
  ],
  laza: [
    {
      points: 4,
      consigne: "a) Tanisao ny sokajy telo tamin'ny Ancien Régime (1,5 isa). b) Iza no nandoa ny hetra rehetra ? (1 isa) d) Inona no maha-samy hafa ny fitondrana frantsay sy anglisy ? (1,5 isa)",
      items: [],
      corrige: [[T("a) "), C("klerjy, andriana, sarambabem-bahoaka (tiers état)"), T(" ; b) "), C("ny sarambabem-bahoaka"), T(" ; d) "), C("Frantsa : monarchie absolue ; Angletera : parlementarisme"), T(".")]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. Montesquieu / 2. Rousseau / 3. Diderot / 4. Franklin — a. Encyclopédie ; b. paratonnerre ; d. fisarahan'ny fahefana ; e. sitrapon'ny vahoaka. (1 isa avy)",
      items: [],
      corrige: [[C("1-d ; 2-e ; 3-a ; 4-b"), T(".")]],
    },
    {
      points: 4,
      consigne: "Fenoy ny frizy : 1776 : … ; 14 jolay 1789 : … ; aogositra 1789 : … ; 1792 : … (1 isa avy)",
      items: [],
      corrige: [[C("fahaleovantenan'i Etazonia ; fakana ny Bastille ; DDHC ; Repoblika voalohany frantsay"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Farito ny revolisiona indostrialy roa (fetra sy singa iray avy). (2 isa) b) Avaho ny taylorisme sy ny fordisme. (2 isa)",
      items: [],
      corrige: [[T("a) "), C("I : tapaky ny XVIII-tapaky ny XIX, Angletera, etivam-po ; II : 1850-1914, herinaratra sy solika"), T(" ; b) "), C("taylorisme : fizarazarana ny asa ; fordisme : tsipika famokarana mihetsika sy karama ambony"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Inona no nifanarahana tamin'ny konferansan'i Berlin (1885) ? (2 isa) b) Inona no votoatin'ny convention de Zanzibar (1890) ary inona ny vokany ho an'i Madagasikara ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("ny fitsipika hizaran'ireo firenena eoropeanina an'i Afrika — tsy nanontaniana ny Afrikanina"), T(" ; b) "), C("navelan'ny Royaume-Uni ho an'i Frantsa i Madagasikara (i Zanzibar kosa ho azy) ka nanamora ny fanjanahana"), T(".")]],
    },
  ],
};

const S19 = {
  type: "fanadinana", numero: 19, total: 32,
  titre: "Famerenana sy Fanadinana IV — Ireo fanjakana malagasy (XVI-XVIII)",
  lohahevitra: "Lohahevitra IV — Ireo fanjakana malagasy tamin'ny taonjato XVI ka hatramin'ny XVIII",
  famerenana: [
    "TOERANA : Antankarana (avaratra) ; sakalava Menabe sy Boina (andrefana) ; Betsimisaraka nampiraisin'i Ratsimilaho (atsinanana) ; Antemoro (sorabe) sy Antesaka (atsimo atsinanana) ; Mahafaly sy Antandroy (atsimo) ; merina sy Betsileo (afovoan-tany).",
    "FIARAHA-MONINA : sokajy — andriana (tombontsoa), hova na vahoaka tsotra, andevo (tsy manan-jo).",
    "TOEKARENA : fambolena (vary), fiompiana omby, varotra (anisan'izany ny varotra andevo tamin'ny vahiny tany amoron-tsiraka).",
    "POLITIKA : mpanjaka masina, kabary, manam-boninahitra sy fokonolona, expéditions (ady fanitarana sy fandrobana).",
  ],
  laza: [
    {
      points: 6,
      consigne: "Ampifanandrifio ny fanjakana sy ny faritra : 1. Boina / 2. Menabe / 3. Betsimisaraka / 4. Antemoro / 5. Antandroy / 6. Betsileo — a. atsimo ; b. andrefana ; d. avaratra andrefana ; e. atsimo atsinanana ; f. afovoan-tany ; g. atsinanana. (1 isa avy)",
      items: [],
      corrige: [[C("1-d ; 2-b ; 3-g ; 4-e ; 5-a ; 6-f"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Tanisao ny sokajy telo tao amin'ny fiaraha-monina malagasy fahiny sy ny mampiavaka azy avy. (3 isa) b) Iza no nampiray ny Betsimisaraka ary oviana ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("andriana (fianakavian'ny mpanjaka, tombontsoa) ; hova/vahoaka tsotra (mpamboly sy mpiompy, maro an'isa) ; andevo (tsy manan-jo)"), T(" ; b) "), C("Ratsimilaho, tamin'ny fiandohan'ny taonjato XVIII"), T(".")]],
    },
    {
      points: 5,
      consigne: "a) Tanisao ny fototry ny toekarena telo. (3 isa) b) Nahoana no natanjaka ny fanjakana teo amoron-tsiraka ? (2 isa)",
      items: [],
      corrige: [[T("a) "), C("fambolena (vary) ; fiompiana omby ; varotra"), T(" ; b) "), C("nifanerasera tamin'ny mpandranto vahiny izy ka nahazo basy sy vola tamin'ny varotra"), T(".")]],
    },
    {
      points: 4,
      consigne: "a) Inona no dikan'ny hoe « masina » ny mpanjaka ? (2 isa) b) Farito ny expéditions ary omeo ny antony iray. (2 isa)",
      items: [],
      corrige: [[T("a) "), C("manana toetra ambony sy hajaina toy ny zavatra masina izy ka tsy azo toherina ny teniny"), T(" ; b) "), C("ady fanitarana na fandrobana nataon'ny fanjakana iray tamin'ny hafa — fakana omby sy sambotra na fanitarana faritany"), T(".")]],
    },
  ],
};

module.exports = { S3, S10, S16, S19 };
