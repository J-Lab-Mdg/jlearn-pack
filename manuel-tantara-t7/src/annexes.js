// annexes.js — ireo tovana valo amin'ny bokin'ny Tantara T7
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");
const SARY = require("./sary-counter");
const leg = (t, a) => B.legende(`Sary ${SARY.add(t, a)} — ${t}`);

const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};
function img(rootDir, rel, wPx, alt) {
  const p = path.join(rootDir, rel);
  if (!fs.existsSync(p)) return null;
  const dim = sizeOf(p);
  const h = Math.round(dim.height * (wPx / dim.width));
  return B.imagePara(p, wPx, h, alt ? { alt } : {});
}
const { cell, p } = B;
const HEAD = "DDEEFF";

function table2(header, rows, widths) {
  const hr = new TableRow({ children: header.map((h, i) => cell([p(h, { bold: true, size: 22, spacingAfter: 20 })], { shading: HEAD, width: widths[i] })) });
  const trs = rows.map(r => new TableRow({ children: r.map((c, i) => cell([p(c, { size: 22, spacingAfter: 20 })], { width: widths[i] })) }));
  return new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows: [hr, ...trs] });
}

// ---------- Tovana 1 : Frizy famintinana ----------
function annexe1(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 1 — FRIZY FAMINTINANA", { anchorId: "tovana1", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img_annexe_frise.png", 640, "Frizy famintinana : ireo vanim-potoana lehibe");
  if (im) out.push(im);
  out.push(leg("Frizy famintinana : ireo vanim-potoana lehiben'ny Tantara", "tovana1"));
  out.push(B.p("", { size: 10, spacingAfter: 100 }));
  const im2 = img(rootDir, "images/img_annexe_friseMG.png", 640, "Frizy famintinana : Madagasikara");
  if (im2) out.push(im2);
  out.push(leg("Frizy famintinana : Madagasikara, hatramin'ny fifindra-monina ka hatramin'ny 1896", "tovana1"));
  out.push(B.p("Ireo daty tsara ho tadidina :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "Tokony ho -3500 : namoronana ny soratra tany Mezopotamia — fiandohan'ny Tantara.",
    "-3000 → 476 : ny Andro Taloha (Antikite) — Mezopotamia, Ejipta, Gresy, Roma.",
    "476 : fianjeran'ny Empira romanina tandrefana — fiandohan'ny Andro Antenatenany.",
    "622 : nifindra tany Medina i Mohammed (hejira) ; 630-750 : ny fandresen'ny Silamo.",
    "1492 : nahatongavan'i Christophe Colomb tany Amerika — fiandohan'ny Andro Maoderina.",
    "1789 : ny Revolisiona frantsay — fiandohan'ny Andro Ankehitriny.",
    "Taonjato III-IV : tonga teto Madagasikara ny aostronezianina, razamben'ny Vazimba.",
    "Taonjato VII-VIII : tonga ny afrikanina ; taonjato IX : tonga ny arabo-silamo.",
    "1500-1810 : ireo fanjakana malagasy (Sakalava, Betsimisaraka, Merina...).",
    "1787-1810 : Andrianampoinimerina ; 1810-1828 : Radama I, mpanjakan'i Madagasikara.",
    "1818 : sekoly voalohany tao Toamasina (LMS) ; 1823 : nekena ny abidy latina.",
    "1896 : lasa zanatanin'i Frantsa i Madagasikara (hatramin'ny 1960).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 2 : Fafan'ireo vanim-potoana sy ny dingana malagasy ----------
function annexe2() {
  const out = [];
  out.push(B.heading("TOVANA 2 — FAFAN'IREO VANIM-POTOANA SY NY DINGANA MALAGASY", { anchorId: "tovana2", size: 28, spacingAfter: 120 }));
  out.push(B.p("A. Ireo vanim-potoana lehibe eran-tany", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  out.push(table2(
    ["Vanim-potoana", "Fetra", "Tranga nanamarika"],
    [
      ["Paleolitika (Prehistoara)", "nisehoan'ny olombelona → -12000", "vato voapaika, fihazana, afo"],
      ["Neolitika (Prehistoara)", "-12000 → -3000", "vato voalambolambo, fambolena, fiompiana"],
      ["Andro Taloha (Antikite)", "-3000 → 476", "soratra, Mezopotamia, Ejipta, Gresy, Roma"],
      ["Andro Antenatenany", "476 → 1492", "feodaly, Eglizy, fahaterahan'ny Silamo"],
      ["Andro Maoderina", "1492 → 1789", "fitsangatsanganana lehibe, fanjakana maoderina"],
      ["Andro Ankehitriny", "1789 → ankehitriny", "Revolisiona frantsay, indostria, fanatontoloana"],
    ],
    [30, 30, 40]
  ));
  out.push(B.p("B. Ny dingana efatra teto Madagasikara", { bold: true, size: 24, color: B.GREEN, spacingBefore: 160, spacingAfter: 60 }));
  out.push(table2(
    ["Dingana", "Vanim-potoana", "Ohatra"],
    [
      ["Foko notarihin'ny loham-poko", "taonjato V - XVI", "fianakaviambe niray razana"],
      ["Fikambanam-poko", "nandritra izany", "notarihin'ny mpanjaka kely"],
      ["Fanjakana malagasy", "1500 - 1810", "Sakalava (Andriandahifotsy, Andriamandisoarivo), Betsimisaraka (Ratsimilaho), Merina (Andrianampoinimerina)"],
      ["Fanjakan'i Madagasikara", "1810 - 1896", "Radama I : « Ny ranomasina no valapariako »"],
    ],
    [30, 24, 46]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 3 : Ireo sigla ----------
function annexe3() {
  const out = [];
  out.push(B.heading("TOVANA 3 — IREO SIGLA AMPIASAINA AMIN'NY BOKY", { anchorId: "tovana3", size: 28, spacingAfter: 120 }));
  out.push(table2(
    ["Sigla", "Dikany feno", "Fanazavana fohy"],
    [
      ["FRP", "Fiche de Référence Pédagogique (frantsay)", "Tari-dalana ofisialin'ny mpampianatra"],
      ["LMS", "London Missionary Society", "Misionera anglisy tonga teto Madagasikara (1818-1820)"],
      ["MEN", "Ministère de l'Éducation Nationale", "Ministeran'ny Fanabeazam-pirenena"],
      ["PE", "Programme d'Études", "Fandaharam-pianarana ofisialy"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "Fikambanan'ny Firenena Mikambana momba ny fanabeazana sy ny kolontsaina"],
      ["V.A.", "Valiny Andrasana", "Ny valiny andrasana amin'ny fanontaniana ao amin'ny fiche"],
    ],
    [14, 44, 42]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 4 : Rakibolana ----------
function annexe4() {
  const out = [];
  out.push(B.heading("TOVANA 4 — RAKIBOLANA (TENY MALAGASY \u21C4 TERME OFFICIEL)", { anchorId: "tovana4", size: 28, spacingAfter: 120 }));
  out.push(table2(
    ["Teny malagasy", "Terme officiel (frantsay)", "Seho"],
    [
      ["Andro Antenatenany", "Moyen Âge", "14"],
      ["Andro Taloha", "Antiquité", "7"],
      ["Arkeolojia", "Archéologie", "22"],
      ["Demokrasia", "Démocratie", "10"],
      ["Fanadihadiana", "Enquête", "1, 2"],
      ["Fanandroana", "Astrologie", "26"],
      ["Famorana", "Circoncision", "26"],
      ["Farao", "Pharaon", "9"],
      ["Fikambanam-poko", "Confédération clanique", "29"],
      ["Foko", "Clan", "29"],
      ["Frizy kronolojika", "Frise chronologique", "4"],
      ["Klerjy", "Clergé", "16"],
      ["Lakana misy fanary", "Pirogue à balancier", "25"],
      ["Loham-poko", "Chef de clan", "29"],
      ["Lovan-tsofina", "Tradition orale", "1"],
      ["Mpanjaka masina", "Royauté sacrée", "26"],
      ["Mpiasa tany (serf, vilain)", "Serf, vilain", "15"],
      ["Mpitaingin-tsoavaly mpiady", "Chevalier", "15"],
      ["Olom-pirenena", "Citoyen", "10"],
      ["Onjam-pifindra-monina", "Vague de migration", "21"],
      ["Prehistoara", "Préhistoire", "4"],
      ["Rafitra feodaly", "Système féodal", "15"],
      ["Sambo zairina", "Bateau cousu", "25"],
      ["Sikidy", "Géomancie", "26"],
      ["Sivilizasiona", "Civilisation", "7"],
      ["Sorabe", "Écriture arabico-malgache", "26"],
      ["Soratra kioneiforma", "Écriture cunéiforme", "7"],
      ["Tantara am-bava", "Histoire orale", "1"],
      ["Taon-jato / taonjato", "Siècle", "4"],
      ["Toeram-barotra", "Comptoir commercial", "26"],
      ["Tompomenakely", "Seigneur", "15"],
      ["Vahoaka iray", "Un seul peuple", "23"],
      ["Vanim-potoana", "Période, époque", "4"],
      ["Vondrom-poko", "Groupe de population", "30"],
    ],
    [36, 40, 24]
  ));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 5 : Sari-tany ----------
function annexe5(rootDir) {
  const out = [];
  out.push(B.heading("TOVANA 5 — SARI-TANY", { anchorId: "tovana5", size: 28, spacingAfter: 120 }));
  const im1 = img(rootDir, "images/img_annexe_carteMigr.png", 620, "Sari-tanin'ny onjam-pifindra-monina");
  if (im1) out.push(im1);
  out.push(leg("Ireo onjam-pifindra-monina nankany Madagasikara (sary famintinana)", "tovana5"));
  out.push(B.p("", { size: 10, spacingAfter: 120 }));
  const im2 = img(rootDir, "images/img_annexe_carteMG.png", 420, "Sari-tanin'i Madagasikara");
  if (im2) out.push(im2);
  out.push(leg("Madagasikara : ireo renivohitry ny faritany enina (sary famintinana)", "tovana5"));
  out.push(B.p("Fanamarihana : sary famintinana tsotra ireo, tsy misy maridrefy — ampiasao ny sari-tany ofisialy ao amin'ny kilasy raha mila fitsirihana amin'ny antsipiriany. Ireo faritany enina dia mari-pahatsiarovana ara-tantara ihany : ny fizarazarana manan-kery ankehitriny dia ny faritra 23.", { italics: true, size: 22, spacingBefore: 80 }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 6 : Taratasy fizahan-toetra ----------
function annexe6() {
  const out = [];
  out.push(B.heading("TOVANA 6 — TARATASY FIZAHAN-TOETRA (AUTO-ÉVALUATION)", { anchorId: "tovana6", size: 28, spacingAfter: 120 }));
  out.push(B.p("Valio amin'ny ENY na TSIA : raha misy TSIA dia avereno vakina ilay seho voalaza.", { italics: true, size: 24, spacingAfter: 120 }));
  const blocs = [
    ["Lohahevitra I (Seho 1-3)", [
      "Haiko ny mamaritra ny tantara am-bava sy ny manome ohatra. (S1)",
      "Haiko ny mitanisa ny dingana enina amin'ny tetikasa fanadihadiana am-bava. (S1-S2)",
      "Haiko ny manatanteraka fanadihadiana sy ny manao tatitra. (S2)",
    ]],
    ["Lohahevitra II (Seho 4-6)", [
      "Haiko ny manavaka ny Prehistoara sy ny Tantara. (S4)",
      "Haiko ny mitanisa ny vanim-potoana lehibe sy ny fetrany. (S4)",
      "Haiko ny milaza ny dingana lehibe tamin'ny fivoaran'ny olombelona. (S5)",
    ]],
    ["Lohahevitra III (Seho 7-13)", [
      "Haiko ny mamaritra ny sivilizasiona ary fantatro i Mezopotamia sy ny soratra voalohany. (S7)",
      "Fantatro ny maha « fanomezan'i Neily » an'i Ejipta sy ny fahefan'ny farao. (S8-S9)",
      "Azoko ampitahaina i Sparta sy i Atena ary fantatro ny demokrasia. (S10)",
      "Haiko ny mitanisa ny fitondrana telo nifandimby tany Roma. (S11)",
      "Haiko ny milaza ny lova antika hita eto Madagasikara. (S12)",
    ]],
    ["Lohahevitra IV (Seho 14-20)", [
      "Fantatro ny daty mamaritra ny Andro Antenatenany. (S14)",
      "Haiko ny manazava ny rafitra feodaly sy ny piramidany. (S15)",
      "Fantatro ny fandaminan'ny Eglizy sy ny anjara asany. (S16)",
      "Haiko ny mitantara ny fahaterahan'ny Silamo sy ny fandreseny. (S17-S18)",
      "Azoko ampitahaina ny sivilizasiona tandrefana sy silamo. (S19)",
    ]],
    ["Lohahevitra V (Seho 21-24)", [
      "Haiko ny mitanisa ireo onjam-pifindra-monina sy ny taonjato nahatongavany. (S21)",
      "Fantatro ny anjara asan'ny arkeolojia sy ny toeram-ponenana voalohany. (S22)",
      "Haiko ny manaporofo fa vahoaka iray ny Malagasy. (S23)",
    ]],
    ["Lohahevitra VI (Seho 25-28)", [
      "Haiko ny mitanisa ny lova aostronezianina sy afrikanina. (S25)",
      "Fantatro ny lova arabo-silamo (sorabe, sikidy, vola...). (S26)",
      "Fantatro ny lova tandrefana (sekoly, abidy latina, kristianisma...). (S27)",
    ]],
    ["Lohahevitra VII (Seho 29-32)", [
      "Haiko ny mitanisa ny dingana efatra tamin'ny fivoarana ara-politika. (S29)",
      "Fantatro ireo fanjakana malagasy lehibe sy ny mpanjakany. (S29)",
      "Haiko ny manazava ny hoe « tsy misy ethnie na tribu eto Madagasikara ». (S30)",
    ]],
  ];
  const rows = [];
  for (const [titre, items] of blocs) {
    rows.push(new TableRow({ children: [
      cell([p(titre, { bold: true, size: 22, color: B.GREEN, spacingAfter: 20 })], { shading: "E8F0E4", width: 100, colSpan: 3 }),
    ]}));
    items.forEach(it => rows.push(new TableRow({ children: [
      cell([p(it, { size: 22, spacingAfter: 20 })], { width: 76 }),
      cell([p("ENY \u2610", { size: 22, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 12 }),
      cell([p("TSIA \u2610", { size: 22, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 12 }),
    ]})));
  }
  out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 7 : Fanondroana ----------
function annexe7() {
  const out = [];
  out.push(B.heading("TOVANA 7 — FANONDROANA (INDEX)", { anchorId: "tovana7", size: 28, spacingAfter: 120 }));
  out.push(B.p("Ny isa dia manondro ny seho ; fipihana ny laharana = mankany amin'ny seho (endrika nomerika). Ny seho fampianarana ihany no voatondro eto, fa tsy ny seho famerenana sy fanadinana (3, 6, 13, 20, 24, 28, 31, 32).", { italics: true, size: 22, spacingAfter: 120 }));
  const entries = [
    ["Abidy latina (1823)", [27]], ["Afo (fahazoana ny afo)", [5]], ["Andrianampoinimerina", [29]],
    ["Andro Antenatenany", [14]], ["Andro Taloha (Antikite)", [7]], ["Aostralopiteka", [5]],
    ["Aostronezianina", [21, 25]], ["Ariary", [27]], ["Arkeolojia", [22]], ["Atena", [10, 12]],
    ["Betsimisaraka (fanjakana)", [29]], ["Boina sy Menabe", [29]], ["Botry", [25]],
    ["Chevalier", [15]], ["Demokrasia", [10, 12]], ["Eglizy", [16]], ["Ejipta", [8, 9]],
    ["Farao", [9]], ["Feodaly (rafitra)", [15]], ["Fief", [15]], ["Foko sy loham-poko", [29]],
    ["Gresy", [10]], ["Hejira (622)", [17]], ["Homo habilis, erectus, sapiens", [5]],
    ["Kalifa", [18]], ["Katibo", [26]], ["Kroazada", [14]], ["Lakana misy fanary", [21, 25]],
    ["LMS (misionera)", [27]], ["Mezopotamia", [7]], ["Mohammed (Mahomet)", [17]],
    ["Neily (Nil)", [8]], ["Neolitika sy Paleolitika", [4]], ["Omeyyades", [18]],
    ["Prehistoara", [4]], ["Radama I", [29]], ["Ratsimilaho", [29]], ["Repoblika romanina", [11]],
    ["Roma", [11, 12]], ["Romulus sy Remus", [11]], ["Sakalava (fanjakana)", [29]],
    ["Serf sy vilain", [15]], ["Sikidy sy fanandroana", [26]], ["Silamo (fahaterahana, fandresena)", [17, 18, 19]],
    ["Sivilizasiona", [7]], ["Sonita sy siita", [19]], ["Sorabe", [26]], ["Soratra (famoronana)", [4, 7]],
    ["Sparta", [10]], ["Suzerain sy seigneur", [15]], ["Tantara am-bava", [1, 2]],
    ["Uruk", [7]], ["Vazimba", [21]], ["Vondrom-poko (18)", [30]], ["Zana-Malata", [21]],
  ];
  const { InternalHyperlink, TextRun, Paragraph } = require("docx");
  for (const [terme, seances] of entries) {
    const runs = [new TextRun({ text: terme + " : ", size: 24, font: B.FONT })];
    seances.forEach((n, i) => {
      runs.push(new InternalHyperlink({
        anchor: `seho${String(n).padStart(2, "0")}`,
        children: [new TextRun({ text: String(n), size: 24, font: B.FONT, style: "Hyperlink" })],
      }));
      if (i < seances.length - 1) runs.push(new TextRun({ text: ", ", size: 24, font: B.FONT }));
    });
    out.push(new Paragraph({ children: runs, spacing: { after: 40 } }));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 8 : Bibliografia, webografia ary lisitry ny sary ----------
function annexe8(figures) {
  const out = [];
  out.push(B.heading("TOVANA 8 — BIBLIOGRAFIA, WEBOGRAFIA ARY LISITRY NY SARY", { anchorId: "tovana8", size: 28, spacingAfter: 120 }));
  out.push(B.p("Bibliografia", { bold: true, size: 26, color: B.GREEN, spacingAfter: 60 }));
  [
    "MEN — Programme d'Études (PE) T7, Édition 2026, Ministeran'ny Fanabeazam-pirenena, Madagasikara.",
    "CALLET (R.P. François) — Tantara ny Andriana eto Madagasikara, Antananarivo, Imprimerie catholique, 1873.",
    "DESCHAMPS (Hubert) — Histoire de Madagascar, Paris, Berger-Levrault, 1972.",
    "VERIN (Pierre) — Madagascar, Paris, Karthala, 1990.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Webografia", { bold: true, size: 26, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "plateforme.education.mg — ny PE ofisialy sy ny tahirin-kevitry ny MEN (nojerena septambra 2026).",
    "mg.wikipedia.org/wiki/Tantara — famaritana ny tantara amin'ny teny malagasy (nojerena septambra 2026).",
    "fr.wikipedia.org — « Préhistoire », « Antiquité », « Moyen Âge », « Peuplement de Madagascar » (nojerena septambra 2026).",
    "whc.unesco.org — ny vakoka maneran-tany (nojerena septambra 2026).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Lisitry ny sary", { bold: true, size: 26, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  const { InternalHyperlink, TextRun, Paragraph } = require("docx");
  figures.forEach(f => {
    if (f.anchor) {
      out.push(new Paragraph({
        children: [new InternalHyperlink({
          anchor: f.anchor,
          children: [new TextRun({ text: "\u2022 " + f.legende, size: 24, font: B.FONT, style: "Hyperlink" })],
        })],
        spacing: { after: 40 },
      }));
    } else {
      out.push(B.p("\u2022 " + f.legende, { size: 24, spacingAfter: 40 }));
    }
  });
  out.push(B.p("", { size: 12, spacingAfter: 200 }));
  out.push(B.p("— Faran'ny boky —", { italics: true, size: 24, align: AlignmentType.CENTER }));
  return out;
}

module.exports = { annexe1, annexe2, annexe3, annexe4, annexe5, annexe6, annexe7, annexe8 };
