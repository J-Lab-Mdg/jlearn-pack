// data-tombana.js — Ireo seho famerenana sy tombana (S5, S7, S11, S14, S22, S27) — Tantara T4
// Fanamarihana : seho fampianarana ihany no misy takela sy lesona feno ;
// ireto seho ireto dia natokana ho famerenana sy tombana isaky ny lohahevitra.

const S5 = {
  type: "fanadinana", numero: 5, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra I",
  lohahevitra: "I — Ny habaka sy ny fotoana",
  famerenana: [
    "Ny HABAKA dia faritra na velarana malalaka iainana sy ivelomana ; ny HABAKABAKA no faritra ambonin'ny tany.",
    "Ny TONTOLO VOAJANAHARY dia faritra misy ireo zavaboary (ala, renirano, tendrombohitra) ; ny TONTOLO NOHAJARIANA dia faritra efa niasan'ny olombelona (tanàna, tanimbary, lalana).",
    "Ny FIARAHAMONINA dia vondron'olona miara-miaina, fehezin'ny lalàna iombonana : ao an-tokantrano, ao an-tsekoly, ao an-tanàna.",
    "Ny iray ANDRO dia 24 ora : maraina, atoandro, hariva, alina. Ny HERINANDRO dia andro fito.",
    "Ny iray TAONA dia 12 volana, 365 andro (366 amin'ny taona mihoatra).",
    "Ny LASA (omaly, fahiny), ny ANKEHITRINY (anio), ny HO AVY (rahampitso).",
  ],
  laza: [
    {
      points: 4,
      consigne: "Fenoy : Ny tontolo … dia misy ireo zavaboary ; ny tontolo … dia efa niasan'ny olombelona ; ny fiarahamonina dia vondron'olona … fehezin'ny … iombonana.",
      items: [],
      corrige: [[{ text: "voajanahary", cle: true }, { text: " ; " }, { text: "nohajariana", cle: true }, { text: " ; " }, { text: "miara-miaina", cle: true }, { text: " ; " }, { text: "lalàna", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio : a) ala ; b) sekoly ; d) ranomasina ; e) tetezana. Iza no voajanahary, iza no nohajariana ?",
      items: [],
      corrige: [[{ text: "Voajanahary : " }, { text: "a) ala, d) ranomasina", cle: true }, { text: " ; nohajariana : " }, { text: "b) sekoly, e) tetezana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Valio : a) Firy ora ny iray andro ? b) Tanisao ny fizaran'ny iray andro.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "24 ora", cle: true }, { text: " ; b) " }, { text: "maraina, atoandro, hariva, alina", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Soraty araka ny filaharany ireo andro fito amin'ny herinandro.",
      items: [],
      corrige: [[{ text: "Alatsinainy, talata, alarobia, alakamisy, zoma, sabotsy, alahady", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) 12 volana ny iray taona. b) 300 andro ny taona tsotra. d) « Rahampitso » dia ilazana ny ho avy. e) Ny febroary dia misy 31 andro.",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Marina", cle: true }, { text: " ; b) " }, { text: "Diso (365)", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: " ; e) " }, { text: "Diso (28 na 29)", cle: true }, { text: "." }]],
    },
  ],
};

const S7 = {
  type: "fanadinana", numero: 7, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra II",
  lohahevitra: "II — Ny taona sy ny taonjato",
  famerenana: [
    "Ny TAREHIMARIKA ARABO : 1, 2, 3… ; ny TAREHIMARIKA ROMANA : I, V, X, L, C, D, M.",
    "Raha eo alohan'ny marika lehibe ny kely dia analana (IV = 4) ; raha aoriany dia ampiana (VI = 6).",
    "Ny TAONJATO dia 100 taona, soratana amin'ny tarehimarika romana.",
    "Ny taonjato faha-II = taona 101-200 ; ny taonjato faha-XX = taona 1901-2000 ; isika izao dia ao amin'ny taonjato faha-XXI.",
  ],
  laza: [
    {
      points: 5,
      consigne: "Adikao ho tarehimarika romana : 3, 7, 13, 18, 21.",
      items: [],
      corrige: [[{ text: "III, VII, XIII, XVIII, XXI", cle: true }, { text: "." }]],
    },
    {
      points: 5,
      consigne: "Adikao ho tarehimarika arabo : IV, XI, XV, XXIV, XXX.",
      items: [],
      corrige: [[{ text: "4, 11, 15, 24, 30", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Fenoy : Ny taonjato dia … taona ; ny taonjato faha-III dia manomboka amin'ny taona … ka hatramin'ny taona ….",
      items: [],
      corrige: [[{ text: "100", cle: true }, { text: " ; " }, { text: "201", cle: true }, { text: " ; " }, { text: "300", cle: true }, { text: "." }]],
    },
    {
      points: 6,
      consigne: "Amin'ny taonjato fahafiry : a) 1960 ; b) 1896 ; d) 2025 ; e) 1500 ; f) 1787 ; g) 2100 ?",
      items: [],
      corrige: [[{ text: "a) " }, { text: "faha-XX", cle: true }, { text: " ; b) " }, { text: "faha-XIX", cle: true }, { text: " ; d) " }, { text: "faha-XXI", cle: true }, { text: " ; e) " }, { text: "faha-XV", cle: true }, { text: " ; f) " }, { text: "faha-XVIII", cle: true }, { text: " ; g) " }, { text: "faha-XXI", cle: true }, { text: "." }]],
    },
  ],
};

const S11 = {
  type: "fanadinana", numero: 11, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra III",
  lohahevitra: "III — Ny fampidirana ny fianarana tantara",
  famerenana: [
    "Ny ANGANO dia tantara noforonina, ifandovana am-bava, mifono anatra ; miantomboka amin'ny « Indray andro, hono… » ary mifarana amin'ny « Angano, angano, arira, arira… ».",
    "Ny TANTARA dia zava-nisy marina : voafaritra ny fotoana sy ny toerana, misy porofo.",
    "Ny LOHARANO ARA-TANTARA telo karazana : an-tsoratra (boky, gazety), am-bava (lovan-tsofina), moana (fitaovana tranainy, taolana, tsangambato).",
    "Ny ARKEOLOGY no mandinika ny tahirin-kevitra moana.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Fenoy : Ny angano dia tantara …, mifono … ; ny tantara kosa dia zava-nisy …, misy … ara-tantara.",
      items: [],
      corrige: [[{ text: "noforonina", cle: true }, { text: " ; " }, { text: "anatra", cle: true }, { text: " ; " }, { text: "marina", cle: true }, { text: " ; " }, { text: "porofo", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio ho angano na tantara : a) Rapeto sy Rasoalao ; b) ny nanjakan'Andrianampoinimerina (1787-1810) ; d) ny papango sy ny akoho ; e) ny nahafatesan-dRainandriamampandry (16 oktobra 1896).",
      items: [],
      corrige: [[{ text: "Angano : " }, { text: "a, d", cle: true }, { text: " ; tantara : " }, { text: "b, e", cle: true }, { text: "." }]],
    },
    {
      points: 6,
      consigne: "Sokajio araka ny karazana loharano : a) gazety tranainy ; b) anganon'ny renibe ; d) vilany tany hita an-kady ; e) taratasin'ny mpanjaka ; f) tsangambato ; g) hira nampitaina am-bava.",
      items: [],
      corrige: [[{ text: "An-tsoratra : " }, { text: "a, e", cle: true }, { text: " ; am-bava : " }, { text: "b, g", cle: true }, { text: " ; moana : " }, { text: "d, f", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Omeo tombontsoa telo azo amin'ny fahaizana tantara.",
      items: [],
      corrige: [[{ text: "Mahafantatra ny lasa ; mahalala ny fivoaran'ny firenena ; ahafahana manatsara ny ho avy (na : mianatra amin'ny olo-malaza)", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Ahoana no fiantombohan'ny angano ary ahoana no fiafarany ? Omeo ohatra iray avy.",
      items: [],
      corrige: [[{ text: "Fiandohana : « Indray andro, hono… » / « Nisy, hono… »", cle: true }, { text: " ; fiafarana : " }, { text: "« Angano, angano, arira, arira… »", cle: true }, { text: "." }]],
    },
  ],
};

const S14 = {
  type: "fanadinana", numero: 14, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra IV",
  lohahevitra: "IV — Ny vanim-potoanan'ny tantaran'i Madagasikara",
  famerenana: [
    "I MARCO POLO (mpivahiny italiana, 1254-1324) no nanoratra voalohany ny anarana « Madagascar » tamin'ny 1298, tao amin'ny « Livre des Merveilles » — tsy tonga teto anefa izy.",
    "Ny VANIM-POTOANA dia fitambaran'ny taona maromaro na taonjato vitsivitsy.",
    "Ny vanim-potoana dimy : talohan'ny fahafoko (< taonjato faha-V) ; fahafoko (faha-V → faha-XV) ; faha-mpanjaka (1500-1896) ; fanjanahantany (1896-1960) ; fahaleovantena (26 jona 1960-…).",
  ],
  laza: [
    {
      points: 4,
      consigne: "Valio : a) Iza no nanome ny anarana « Madagascar » ? b) Oviana ? d) Inona ny anaran'ny bokiny ? e) Tonga teto ve izy ?",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Marco Polo", cle: true }, { text: " ; b) " }, { text: "1298", cle: true }, { text: " ; d) " }, { text: "« Livre des Merveilles »", cle: true }, { text: " ; e) " }, { text: "Tsia", cle: true }, { text: "." }]],
    },
    {
      points: 5,
      consigne: "Alaharo araka ny filaharany ireo vanim-potoana : fahaleovantena — fahafoko — fanjanahantany — talohan'ny fahafoko — faha-mpanjaka.",
      items: [],
      corrige: [[{ text: "Talohan'ny fahafoko → fahafoko → faha-mpanjaka → fanjanahantany → fahaleovantena", cle: true }, { text: "." }]],
    },
    {
      points: 6,
      consigne: "Ampifanandrifio : 1. fahafoko / 2. faha-mpanjaka / 3. fanjanahantany / 4. fahaleovantena — a. 1500-1896 ; b. 1960-… ; d. taonjato faha-V → faha-XV ; e. 1896-1960.",
      items: [],
      corrige: [[{ text: "1-d", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-e", cle: true }, { text: " ; " }, { text: "4-b", cle: true }, { text: "." }]],
    },
    {
      points: 5,
      consigne: "Fenoy : Ny fahaleovantena dia nanomboka tamin'ny … ; ny fanjanahantany dia naharitra … taona teo ho eo ; ny taona 1298 dia ao amin'ny taonjato faha-….",
      items: [],
      corrige: [[{ text: "26 jona 1960", cle: true }, { text: " ; " }, { text: "64", cle: true }, { text: " ; " }, { text: "XIII", cle: true }, { text: "." }]],
    },
  ],
};

const S22 = {
  type: "fanadinana", numero: 22, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra V",
  lohahevitra: "V — Ny fiavian'ny Malagasy",
  famerenana: [
    "Ny razamben'ny Malagasy dia avy any AZIA ATSIMO ATSINANANA (Indonezia, Malezia), avy any AFRIKA ATSINANANA ary avy any ARABIA.",
    "LAKANA no nitondra azy ireo : ny lakam-bezo, ny lakam-piara (misy piara na balancier), ary ny botry (sambo kely misy lay).",
    "Niantsona tamin'ny morontsiraka efatra izy ireo : avaratra, atsinanana, andrefana ary atsimo, dia niditra tsikelikely tany afovoan-tany.",
    "ANDIANY EFATRA : ny Ostronesianina voalohany (taonjato III-IV) ; ny Indonezianina sy Maleziana (talohan'ny taonjato VII) ; ny Afrikanina (taonjato VII-VIII) ; ny Arabo (nanomboka ny taonjato IX) izay nitondra ny sorabe, ny fanandroana ary ny varotra.",
    "Hita ao amin'ny fiteny malagasy ny dian'ireo fiaviana : batu → vato (avy any Indonezia) ; alahady, alatsinainy, talata… (anaran'andro avy amin'ny teny arabo).",
    "Nitondra ny fambolena vary an-tanimbary, ny jono, ny valiha ary ny omby ireo razambe ; niharo ireo andiany rehetra ka VAHOAKA IRAY no niforona : ny Malagasy.",
    "Fanamarihana : tsy mitovy hevitra amin'ny daty rehetra ny mpahay tantara ; ireo daty ireo dia tombantombana.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Tanisao ireo faritra telo niavian'ny razamben'ny Malagasy.",
      items: [],
      corrige: [[{ text: "Azia atsimo atsinanana (Indonezia, Malezia) ; Afrika atsinanana ; Arabia", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Ampifanandrifio : 1. lakam-piara / 2. botry / 3. lakam-bezo — a. sambo kely misy lay ; b. lakana misy piara (balancier) ; d. lakana tsotra fampiasan'ny mpanjono.",
      items: [],
      corrige: [[{ text: "1-b", cle: true }, { text: " ; " }, { text: "2-a", cle: true }, { text: " ; " }, { text: "3-d", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Fenoy : Ny Arabo dia tonga nanomboka ny taonjato faha-… ; nitondra ny soratra atao hoe … sy ny … (fijerena ny vintana) ary ny varotra izy ireo.",
      items: [],
      corrige: [[{ text: "IX", cle: true }, { text: " ; " }, { text: "sorabe", cle: true }, { text: " ; " }, { text: "fanandroana", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Marina sa diso ? a) Avy amin'ny teny arabo ny anaran'ny andro toy ny alahady sy ny talata. b) Andiany iray monja no tonga teto Madagasikara. d) Ny teny hoe « vato » dia mifandray amin'ny teny indoneziana hoe « batu ».",
      items: [],
      corrige: [[{ text: "a) " }, { text: "Marina", cle: true }, { text: " ; b) " }, { text: "Diso : andiany efatra", cle: true }, { text: " ; d) " }, { text: "Marina", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Soraty amin'ny fehezanteny roa : nahoana no lazaina fa vahoaka iray ny Malagasy na dia samy hafa aza ny fiaviany ?",
      items: [],
      corrige: [[{ text: "Satria niharo sy nifanambady ireo andiany rehetra ka niray fiteny, fomba amam-panao ary tanindrazana : lasa firenena iray ny Malagasy", cle: true }, { text: "." }]],
    },
  ],
};

const S27 = {
  type: "fanadinana", numero: 27, total: 27,
  titre: "Famerenana sy tombana — Lohahevitra VI",
  lohahevitra: "VI — Ny vakoka sy ny harem-pirenena eto Madagasikara",
  famerenana: [
    "Ny VAKOKA dia akora na fitaovana tranainy mirakitra ny tantaran'ny firenena, tehirizina ho an'ny taranaka mifandimby : ny vakoka ao amin'ny tranom-bakoka, ny tsangambato, ny fasan'ny mpanjaka, ny toerana manan-tantara (rova, doany, hadivory, vavahady, kianja…).",
    "Misy vakoka AZO TSAPAIN-TANANA (rova, vatolahy) sy vakoka TSY AZO TSAPAIN-TANANA (kabary, angano, vakodrazana).",
    "Ny HAREM-PIRENENA dia fananana mamaritra sy mampiavaka ny firenena : ny tany, ny ala, ny rano sy ny ranomasina, ny harena an-kibon'ny tany, ny valan-javaboary sy ny faritra voaaro, ary ny vakoka.",
    "Ny fikolokoloana azy ireo dia mampiroborobo ny FIZAHANTANY : vola miditra, asa ho an'ny mponina, fampandrosoana ny faritra, laza ho an'i Madagasikara.",
    "Arovana amin'ny hamandoana, ny vovoka, ny afo ary ny mpangalatra ny vakoka ; misy LALÀNA (didim-panjakana 91-017 sy 56-1106) sy DINA miaro azy.",
    "Manana ANDRAIKITRA ny tsirairay : tsy mandoro tanety, tsy manimba, mandray anjara amin'ny fanadiovana, manaja ny lalàna.",
  ],
  laza: [
    {
      points: 4,
      consigne: "Faritao ny atao hoe vakoka ary omeo ohatra roa.",
      items: [],
      corrige: [[{ text: "Zavatra tranainy mirakitra ny tantaran'ny firenena, tehirizina ho an'ny taranaka", cle: true }, { text: " ; ohatra : " }, { text: "ny rova, ny tsangambato (na kabary, doany…)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Sokajio : a) ny angano ; b) ny rovan'Ambohimanga ; d) ny kabary ; e) ny vatolahy. Iza no azo tsapain-tanana, iza no tsia ?",
      items: [],
      corrige: [[{ text: "Azo tsapain-tanana : " }, { text: "b, e", cle: true }, { text: " ; tsy azo tsapain-tanana : " }, { text: "a, d", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Tanisao karazana harem-pirenena efatra.",
      items: [],
      corrige: [[{ text: "Ny tany, ny ala, ny rano/ranomasina, ny harena an-kibon'ny tany (na : valan-javaboary, faritra voaaro, vakoka)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Omeo tombontsoa telo azo amin'ny fikolokoloana ny vakoka sy ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Mampiroborobo ny fizahantany ; mampiditra vola ; mamorona asa (na : mampandroso ny faritra, mampalaza ny firenena)", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Tanisao asa telo azonao atao amin'ny fiarovana ny vakoka sy ny harem-pirenena.",
      items: [],
      corrige: [[{ text: "Tsy mandoro tanety ; tsy manimba na mandoto ; mandray anjara amin'ny fanadiovana (na : manaja ny lalàna sy ny dina)", cle: true }, { text: "." }]],
    },
  ],
};

module.exports = { S5, S7, S11, S14, S22, S27 };
