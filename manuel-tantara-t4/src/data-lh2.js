// data-lh2.js — LOHAHEVITRA II : NY TAONA SY NY TAONJATO (S6) — Tantara T4
// Loharano : PE T4 sy FRP T4 (LFK 2-a, 2-b)
// Fanamarihana : nahitsy ny diso an-tsoratra tao amin'ny FRP p. 13
// (« 1901-2000 = taonjato faha-XIV ») : ny marina dia taonjato faha-XX.
const DOC = "PE Tantara T4 (MEN) sy FRP T4";
const LH = "II — Ny taona sy ny taonjato";

const seances = [

// ============================================================ SEHO 6
{
  numero: 6, total: 27, lohahevitra: LH,
  titre: "Ny tarehimarika romana sy arabo ; ny taonjato",
  tanjona: "mamaky sy manoratra ny tarehimarika romana, ary mamaritra ny taonjato misy ny taona iray",
  fahendrena: "Fahaiza-mandamina sy fanajana ny fotoana",
  tetika: "Fampitahana fafana ; asa an-tarika ; fanazaran-tena an-tsoratra",
  fanovozanKevitra: DOC + " (FRP T4, LFK 2-a, 2-b)",
  fitaovana: "Fafana mampitaha ny tarehimarika arabo sy romana ; solaitrabe",
  image: "images/img_s06.png",
  imageLegende: "Ny tarehimarika romana sy ny tarehimarika arabo",
  famerenana: {
    qa: [
      { q: "Firy volana ny iray taona ?", ra: "12 volana." },
      { q: "Firy andro ny taona tsotra ?", ra: "365 andro." },
    ],
    technique: "Fanontaniana / valiny",
    support: "—",
  },
  fanentanana: {
    mpampianatra: [
      "Manoratra « XIV » eo amin'ny solaitrabe ny mpampianatra : « Efa nahita marika toy izao ve ianareo ? Taiza ? »",
    ],
    mpianatra: "Mamaly : eny amin'ny famantaranandro, amin'ny boky, amin'ny tsangambato…",
    technique: "Fanontaniana an-kira",
    support: "Solaitrabe",
  },
  fampahafantarana: {
    mpampianatra: "Androany isika dia hianatra ny tarehimarika romana sy ny taonjato : zava-dehibe amin'ny fianarana tantara izy ireo.",
    mpianatra: "Mihaino ary mandika ny lohateny.",
    technique: "Filazana mazava",
    support: "Solaitrabe",
  },
  fandinihana: {
    mpampianatra: "Mampiseho ny fafana mampitaha ny tarehimarika arabo (1, 2, 3…) sy romana (I, II, III…) ny mpampianatra ary mitarika ny mpianatra hahita ny fitsipika (I=1, V=5, X=10, L=50, C=100, D=500, M=1000).",
    mpianatra: "Mandinika ny fafana, mamantatra ny fitsipika, manandrana mamadika isa vitsivitsy.",
    technique: "Fampitahana fafana",
    support: "Fafana mampitaha",
  },
  famakafakana: {
    qa: [
      { q: "Soraty amin'ny tarehimarika romana : 5, 15, 20.", ra: "V, XV, XX." },
      { q: "Inona no atao hoe taonjato ?", ra: "Ventim-potoana maharitra 100 taona." },
      { q: "Ny taona 1250 : taonjato fahafiry ?", ra: "Taonjato faha-XIII (1201-1300)." },
      { q: "Ny taona 1901 ka hatramin'ny 2000 : taonjato fahafiry ?", ra: "Taonjato faha-XX." },
    ],
    technique: "Fanontaniana / valiny ; fanazaran-tena",
    support: "Fafana sy solaitrabe",
  },
  famintinana: {
    mpampianatra: "Manampy ny mpianatra hamintina : ny tarehimarika romana no anoratana ny taonjato ; ny taonjato dia 100 taona ; ny taonjato faha-II dia manomboka amin'ny 101 ka hatramin'ny 200.",
    mpianatra: "Mamerina ny famintinana ary mandika azy ao amin'ny kahie.",
    technique: "Famintinana iombonana",
    support: "Solaitrabe sy kahie",
  },
  fampiharana: [
    {
      consigne: "Adikao ho tarehimarika romana : 4, 9, 14, 19, 30.",
      items: [],
      corrige: [[{ text: "IV, IX, XIV, XIX, XXX", cle: true }, { text: "." }]],
    },
  ],
  fampiharanaTechnique: "Asa tsiroaroa",
  fampiharanaSupport: "Solaitra kely",
  tombana: [
    {
      consigne: "Amin'ny taonjato fahafiry ny taona : a) 1960 ; b) 1896 ; d) 2025 ?",
      items: [],
      corrige: [[{ text: "a) " }, { text: "faha-XX", cle: true }, { text: " ; b) " }, { text: "faha-XIX", cle: true }, { text: " ; d) " }, { text: "faha-XXI", cle: true }, { text: "." }]],
    },
  ],
  tombanaTechnique: "Asa samirery",
  tombanaSupport: "Kahie",
  lesona: {
    motsCles: ["tarehimarika romana", "tarehimarika arabo", "taonjato", "100 taona"],
    sections: [
      {
        titre: "1. Ny tarehimarika arabo sy romana",
        paras: [
          "Ny tarehimarika arabo no ampiasaintsika isan'andro : 1, 2, 3, 4, 5… Ny tarehimarika romana kosa dia soratana amin'ny litera : I, II, III, IV, V…",
          "Ireto ny marika fototra : I = 1 ; V = 5 ; X = 10 ; L = 50 ; C = 100 ; D = 500 ; M = 1000.",
        ],
        puces: [
          "1 → I ; 2 → II ; 3 → III ; 4 → IV ; 5 → V ; 6 → VI ; 7 → VII ; 8 → VIII ; 9 → IX ; 10 → X.",
          "11 → XI ; 14 → XIV ; 15 → XV ; 19 → XIX ; 20 → XX ; 30 → XXX ; 40 → XL ; 50 → L.",
          "Raha eo alohan'ny marika lehibe ny marika kely, dia analana (IV = 5-1 = 4) ; raha aoriany, dia ampiana (VI = 5+1 = 6).",
        ],
      },
      {
        titre: "2. Ny taonjato",
        paras: [
          "Ny taonjato dia ventim-potoana maharitra 100 taona. Amin'ny tarehimarika romana no anoratana azy.",
          "Ny taonjato voalohany dia ny taona 1 ka hatramin'ny 100 ; ny taonjato faha-II dia ny 101 ka hatramin'ny 200 ; ny taonjato faha-III dia ny 201 ka hatramin'ny 300.",
        ],
        puces: [
          "Ohatra : ny taona 1301-1400 dia ny taonjato faha-XIV.",
          "Ny taona 1901-2000 dia ny taonjato faha-XX.",
          "Ny taona 2001-2100 dia ny taonjato faha-XXI : izao isika izao dia ao anatin'ny taonjato faha-XXI.",
          "Hafetsena kely : esory ny roa isa farany, ampio 1 raha tsy 00 ny farany. Ohatra : 1960 → 19 + 1 = taonjato faha-XX ; 1800 → taonjato faha-XVIII.",
        ],
      },
      {
        titre: "3. Nahoana no ilaina amin'ny tantara ?",
        paras: [
          "Ny taona, ny taonjato ary ny vanim-potoana dia voambolana fampiasa amin'ny fianarana tantara. Ny taonjato no tena ampiasaina rehefa mianatra ny tantaran'ny firenena, satria lava ny fotoana dinihina.",
          "Firenena maro no nampiasa ny taona nahaterahan'i Jesoa Kristy ho taona voalohany amin'ny fanisana.",
        ],
        puces: [],
      },
    ],
    tahirinKevitra: [
      "« Nitsidika ny Rovan'Antananarivo ny mpianatra. Teo amin'ny vavahady dia nahita soratra hoe : “Taonjato faha-XVII”. Nanontany i Koto hoe firy taona lasa izay izany. Namaly ny mpampianatra : ny taonjato faha-XVII dia ny taona 1601 ka hatramin'ny 1700 — efa 400 taona mahery lasa izay ! »",
      "(Lahatsoratra natao manokana ho an'ity boky ity.)",
      "Fanontaniana : a) Soraty amin'ny tarehimarika arabo ny XVII. b) Ny taona 1610 : ao anatin'ny taonjato faha-XVII ve izy ?",
      "Valiny : a) 17. b) Eny, satria ny taonjato faha-XVII dia ny 1601 ka hatramin'ny 1700.",
    ],
  },
  rakibolana: [
    { mg: "Tarehimarika romana", fr: "Chiffres romains" },
    { mg: "Tarehimarika arabo", fr: "Chiffres arabes" },
    { mg: "Taonjato", fr: "Siècle" },
    { mg: "Ventim-potoana", fr: "Unité de temps" },
  ],
  fanazarantena: [
    {
      points: 3,
      consigne: "Adikao ho tarehimarika romana : 6, 12, 25.",
      items: [],
      corrige: [[{ text: "VI, XII, XXV", cle: true }, { text: "." }]],
    },
    {
      points: 3,
      consigne: "Adikao ho tarehimarika arabo : IX, XVI, XXIX.",
      items: [],
      corrige: [[{ text: "9, 16, 29", cle: true }, { text: "." }]],
    },
    {
      points: 4,
      consigne: "Amin'ny taonjato fahafiry : a) 1810 ; b) 1521 ; d) 2010 ; e) 896 ?",
      items: [],
      corrige: [[{ text: "a) " }, { text: "faha-XIX", cle: true }, { text: " ; b) " }, { text: "faha-XVI", cle: true }, { text: " ; d) " }, { text: "faha-XXI", cle: true }, { text: " ; e) " }, { text: "faha-IX", cle: true }, { text: "." }]],
    },
  ],
},

];

module.exports = { seances };
