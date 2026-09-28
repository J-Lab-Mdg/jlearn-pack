// annexes.js — ireo tovana valo amin'ny bokin'ny Tantara T6
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
  out.push(B.heading("TOVANA 1 — FRIZY FAMINTINANA NY TANTARAN'I MADAGASIKARA (1958-2026)", { anchorId: "tovana1", size: 28, spacingAfter: 120 }));
  const im = img(rootDir, "images/img_annexe_frise.png", 640, "Frizy famintinana 1958-2026");
  if (im) out.push(im);
  out.push(leg("Frizy famintinana : ireo Repoblika sy ny tetezamita (1958-2026)", "tovana1"));
  out.push(B.p("Ireo daty tsara ho tadidina :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "14 oktobra 1958 : fanambarana ny Repoblika Malagasy (Repoblika I).",
    "26 jona 1960 : ny fahaleovantenan'i Madagasikara.",
    "18 mey 1972 : nanolotra ny fahefana tamin'i Ramanantsoa i Tsiranana.",
    "11 febroary 1975 : namonoana an'i Ratsimandrava ; 15 jona 1975 : voatendry i Ratsiraka.",
    "30 desambra 1975 : Repoblika Demokratika Malagasy (Repoblika II, Boky Mena).",
    "31 oktobra 1991 : fifanarahana Panorama ; tetezamita 1991-1993.",
    "27 martsa 1993 : Zafy Albert filoha — Repoblika III.",
    "2002 : krizy taorian'ny fifidianana ; Ravalomanana filoha (2002-2009).",
    "17 martsa 2009 : krizy — HAT notarihin'i Rajoelina (tetezamita 2009-2014).",
    "17 novambra 2010 : lalampanorenana vaovao — Repoblika IV.",
    "25 janoary 2014 : Rajaonarimampianina ; 19 janoary 2019 : Rajoelina.",
    "14 oktobra 2025 : nesorina i Rajoelina ; Randrianirina — tetezamitan'ny fanorenana ifotony.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.pageBreak());
  return out;
}

// ---------- Tovana 2 : Fafan'ireo filoham-panjakana ----------
function annexe2() {
  const out = [];
  out.push(B.heading("TOVANA 2 — IREO FILOHAM-PANJAKANA SY FILOHAN'NY TETEZAMITA (1958-2026)", { anchorId: "tovana2", size: 28, spacingAfter: 120 }));
  out.push(table2(
    ["Anarana", "Vanim-potoana", "Sata"],
    [
      ["Philibert TSIRANANA", "1959 - 11 oktobra 1972", "Filohan'ny Repoblika I"],
      ["Jeneraly Gabriel RAMANANTSOA", "11 oktobra 1972 - 5 febroary 1975", "Tetezamita (miaramila)"],
      ["Kolonely Richard RATSIMANDRAVA", "5 - 11 febroary 1975", "Tetezamita (6 andro)"],
      ["Jeneraly Gilles ANDRIAMAHAZO", "febroary - 15 jona 1975", "Direktoara miaramila"],
      ["Didier RATSIRAKA", "15 jona 1975 - 1991", "Filohan'ny Repoblika II"],
      ["Guy Willy RAZANAMASY (PM) / HAE ZAFY", "1991 - 1993", "Tetezamita"],
      ["Pr Albert ZAFY", "27 martsa 1993 - 5 septambra 1996", "Filohan'ny Repoblika III"],
      ["Norbert Lala RATSIRAHONANA", "5 septambra 1996 - 9 febroary 1997", "Filoham-panjakana vonjimaika"],
      ["Didier RATSIRAKA", "9 febroary 1997 - 5 jolay 2002", "Filohan'ny Repoblika III"],
      ["Marc RAVALOMANANA", "22 febroary 2002 - 17 martsa 2009", "Filohan'ny Repoblika III"],
      ["Andry Nirina RAJOELINA", "17 martsa 2009 - 25 janoary 2014", "Filohan'ny tetezamita (HAT)"],
      ["Hery Martial RAJAONARIMAMPIANINA", "25 janoary 2014 - 7 septambra 2018", "Filohan'ny Repoblika IV"],
      ["Rivo RAKOTOVAO", "7 septambra 2018 - 19 janoary 2019", "Filoham-panjakana vonjimaika"],
      ["Andry Nirina RAJOELINA", "19 janoary 2019 - 14 oktobra 2025", "Filohan'ny Repoblika IV"],
      ["Kolonely Michael RANDRIANIRINA", "17 oktobra 2025 - ...", "Filohan'ny tetezamita (fanorenana ifotony)"],
    ],
    [34, 36, 30]
  ));
  out.push(B.p("Fanamarihana : io fafana io dia mifarana amin'ny taona 2026 (fotoana namoahana ity boky ity). Mifanindry ny daty 2002 satria samy nitonona ho filoha i Ratsiraka sy Ravalomanana nandritra ny krizy — ny 5 jolay 2002 vao nandao ny firenena i Ratsiraka.", { italics: true, size: 22, spacingBefore: 80 }));
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
      ["AGOA", "African Growth and Opportunity Act", "Lalàna amerikanina manamora ny fanondranana afrikanina"],
      ["COI", "Commission de l'Océan Indien", "Vaomieran'ny ranomasimbe indianina (nosy 5, 1984)"],
      ["COMESA", "Common Market for Eastern and Southern Africa", "Tsena iombonana Afrika Atsinanana sy Atsimo (1994)"],
      ["CRES", "Comité de Redressement Économique et Social", "Komitin'ny fanarenana (tetezamita 1991-1993)"],
      ["CSR", "Conseil Suprême de la Révolution", "Filan-kevitra Ambonin'ny Revolisiona (Repoblika II)"],
      ["FRP", "Fiche de Référence Pédagogique (frantsay)", "Tari-dalana ofisialin'ny mpampianatra"],
      ["HAE", "Haute Autorité de l'État", "Fahefana Avon'ny Fanjakana (1991-1993)"],
      ["HAT", "Haute Autorité de la Transition", "Fahefana Avon'ny Tetezamita (2009-2014)"],
      ["HCC", "Haute Cour Constitutionnelle", "Fitsarana Avo momba ny Lalampanorenana"],
      ["JIRAMA", "Jiro sy Rano Malagasy", "Orinasam-panjakana rano sy jiro (1975)"],
      ["MEN", "Ministère de l'Éducation Nationale", "Ministeran'ny Fanabeazam-pirenena"],
      ["NEPAD", "New Partnership for Africa's Development", "Programan'ny UA ho an'ny fampandrosoana"],
      ["OUA / UA", "Organisation de l'Unité Africaine / Union Africaine", "Firaisambe Afrikanina (1963 / 2002)"],
      ["PE", "Programme d'Études", "Fandaharam-pianarana ofisialy"],
      ["SADC", "Southern African Development Community", "Fikambanana fampandrosoana Afrika Atsimo (1992)"],
      ["SINPA", "Société d'Intérêt National des Produits Agricoles", "Fanangonana sy varotra vary (Repoblika II)"],
      ["SOLIMA", "Solitany Malagasy", "Orinasam-panjakana solika (Repoblika II)"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "Fikambanan'ny Firenena Mikambana momba ny fanabeazana sy ny kolontsaina"],
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
      ["Andrim-panjakana", "Institution", "13"],
      ["Arisiva", "Archives", "4"],
      ["Arkeolojia", "Archéologie", "4"],
      ["Demokrasia", "Démocratie", "14"],
      ["Direktoara miaramila", "Directoire militaire", "9"],
      ["Doro tanety", "Feu de brousse", "25"],
      ["Fahaleovantena", "Indépendance", "8"],
      ["Fanalalahana", "Libéralisation", "15"],
      ["Fanatontoloana", "Mondialisation", "20"],
      ["Fanjakana tan-dalàna", "État de droit", "14"],
      ["Fanorenana ifotony", "Refondation", "12"],
      ["Faritra arovana", "Aire protégée", "24-25"],
      ["Fifandraisana roalafy / marolafy", "Relation bilatérale / multilatérale", "18"],
      ["Fihodinana", "Tour de scrutin", "11"],
      ["Fitsapan-kevi-bahoaka", "Référendum", "10"],
      ["Fitsinjaram-pahefana", "Séparation des pouvoirs", "13"],
      ["Frizy kronolojika", "Frise chronologique", "3"],
      ["Harem-pirenena", "Richesse nationale", "24"],
      ["Kolikoly", "Corruption", "16"],
      ["Lalampanorenana", "Constitution", "12"],
      ["Loharano fanovozan-kevitra", "Source documentaire", "4"],
      ["Lovain-jafy", "Durable (développement)", "15, 25"],
      ["Lovan-tsofina", "Tradition orale", "1, 4"],
      ["Masoivoho", "Ambassade, ambassadeur", "18"],
      ["Mpahay tantara", "Historien", "1"],
      ["Olom-pirenena", "Citoyen", "2, 14"],
      ["Repoblika", "République", "7"],
      ["Solombavambahoaka / Loholona", "Député / Sénateur", "13"],
      ["Taon-jato", "Siècle", "3"],
      ["Tetezamita", "Transition", "7, 9, 12"],
      ["Tranom-bakoka", "Musée", "23"],
      ["Tsena iombonana", "Marché commun", "19"],
      ["Vakoka (tsy hita maso)", "Patrimoine (immatériel)", "22"],
      ["Vanim-potoana", "Période, époque", "1"],
      ["Zava-nitranga ara-tantara", "Événement historique", "1"],
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
  const im1 = img(rootDir, "images/img_annexe_carteMG.png", 420, "Sari-tanin'i Madagasikara");
  if (im1) out.push(im1);
  out.push(leg("Madagasikara : ireo renivohitry ny faritany enina (sary famintinana)", "tovana5"));
  out.push(B.p("", { size: 10, spacingAfter: 120 }));
  const im2 = img(rootDir, "images/img_annexe_carteOI.png", 620, "Sari-tanin'ny ranomasimbe indianina");
  if (im2) out.push(im2);
  out.push(leg("Ireo nosy mpikambana ao amin'ny COI ao amin'ny ranomasimbe indianina", "tovana5"));
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
    ["Lohahevitra I (Seho 1-6)", [
      "Haiko ny mamaritra ny Tantara sy ny mitanisa ny toetrany efatra. (S1)",
      "Haiko ny milaza ny antony ianarana Tantara. (S2)",
      "Haiko ny manisa ny taon-jato sy ny mampiasa ny frizy. (S3)",
      "Haiko ny manasokajy ny loharano telo karazana. (S4-S5)",
    ]],
    ["Lohahevitra II (Seho 7-17)", [
      "Haiko ny mitanisa ny Repoblika efatra sy ny vanim-potoanany. (S7)",
      "Fantatro ny daty 26 jona 1960 sy ny tantaran'ny Repoblika I. (S8)",
      "Haiko ny mitantara ny tetezamita 1972-1975 sy ny Repoblika II. (S9-S10)",
      "Haiko ny mitantara ny Repoblika III sy ny IV ary ny krizy 2025. (S11-S12)",
      "Haiko ny mitanisa ny fahefana telo sy ny fototry ny Repoblika. (S13-S14)",
      "Azoko ampitahaina ny politikam-pitondrana efatra ary fantatro ny anton'ny krizy. (S15-S16)",
    ]],
    ["Lohahevitra III (Seho 18-21)", [
      "Haiko ny manavaka ny fifandraisana roalafy sy marolafy. (S18)",
      "Fantatro ny UA, COI, COMESA, SADC sy ny tanjon'izy ireo. (S19)",
      "Haiko ny mitanisa ny vokatry ny fidirana amin'ireo fikambanana. (S20)",
    ]],
    ["Lohahevitra IV (Seho 22-26)", [
      "Haiko ny mamaritra ny vakoka sy ny manasokajy azy. (S22)",
      "Fantatro ny tombontsoan'ny fikolokoloana sy ny fomba fiarovana ny vakoka. (S23)",
      "Haiko ny manasokajy ny harem-pirenena ary fantatro ireo harena UNESCO. (S24)",
      "Fantatro ny fomba fiarovana ny harem-pirenena sy ny andraikitro. (S25)",
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
  out.push(B.p("Ny isa dia manondro ny seho ; fipihana ny laharana = mankany amin'ny seho (endrika nomerika). Ny seho fampianarana ihany no voatondro eto, fa tsy ny seho famerenana sy fanadinana (6, 17, 21, 26, 27).", { italics: true, size: 22, spacingAfter: 120 }));
  const entries = [
    ["Aloalo", [22]], ["Ambohimanga (vohimasina)", [22, 24]], ["Andrim-panjakana", [13]],
    ["Antenimiera", [13]], ["Arisiva", [4]], ["Arkeolojia", [4, 5]],
    ["Boky Mena", [10, 15]], ["COI", [19]], ["COMESA", [19]], ["Demokrasia", [14]],
    ["Fahaleovantena (26 jona 1960)", [8]], ["Famadihana", [22]], ["Fanadinana", [6, 17, 21, 26, 27]],
    ["Fanagasiana", [8, 9, 10]], ["Fanalalahana", [15, 20]], ["Fanatontoloana", [20]],
    ["Fanorenana ifotony (2025)", [12]], ["Frizy kronolojika", [3, 7]], ["HAT", [12]],
    ["Harem-pirenena", [24, 25]], ["Hira gasy", [22]], ["Kabary", [22]], ["Kalandrie", [3]],
    ["Kolikoly", [16]], ["Krizy politika (1972, 1991, 2002, 2009, 2025)", [8, 10, 11, 12, 16]],
    ["Lalampanorenana", [12, 13]], ["Loharano ara-tantara", [4, 5]], ["Lovan-tsofina", [1, 4, 5]],
    ["Mpahay tantara", [1]], ["Rajaonarimampianina Hery", [12]], ["Rajoelina Andry", [12]],
    ["Ramanantsoa Gabriel", [9]], ["Randrianirina Michael", [12]], ["Ratsimandrava Richard", [9]],
    ["Ratsiraka Didier", [9, 10, 11]], ["Ravalomanana Marc", [11, 12]], ["Repoblika I-IV", [7, 8, 10, 11, 12]],
    ["SADC", [19]], ["Sikotra Zafimaniry", [22]], ["Taon-jato", [3]], ["Tetezamita", [7, 9, 11, 12]],
    ["Tsingin'ny Bemaraha", [24]], ["Tsiranana Philibert", [8]], ["UA (Firaisambe Afrikanina)", [19, 20]],
    ["UNESCO", [22, 24]], ["Vakoka", [22, 23]], ["Zafy Albert", [11]],
  ];
  const { ExternalHyperlink, InternalHyperlink, TextRun, Paragraph } = require("docx");
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
    "MEN — Programme d'Études (PE) T6, Édition nohavaozina 2026, Ministeran'ny Fanabeazam-pirenena, Madagasikara.",
    "MEN — FRP Tantara T6 (Fiche de Référence Pédagogique), Ministeran'ny Fanabeazam-pirenena, Antananarivo.",
    "MEN, OEMC, FNUD/UNDP — Bokikely momba ny fanabeazana ho olom-pirenena vanona sy ny zon'olombelona, 2011.",
    "CALLET (R.P. François) — Tantara ny Andriana eto Madagasikara, Antananarivo, Imprimerie catholique, 1873.",
    "Friedrich-Ebert-Stiftung — Ny tantaram-politikan'i Madagasikara, Antananarivo (library.fes.de, nojerena septambra 2026).",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Webografia", { bold: true, size: 26, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "plateforme.education.mg — ny PE ofisialy sy ny tahirin-kevitry ny MEN (nojerena septambra 2026).",
    "mg.wikipedia.org/wiki/Tantara — famaritana ny tantara amin'ny teny malagasy (nojerena septambra 2026).",
    "fr.wikipedia.org — « Politique à Madagascar » (nojerena septambra 2026).",
    "whc.unesco.org sy ich.unesco.org — ny lisitry ny vakoka maneran-tany (nojerena septambra 2026).",
    "au.int — ny Firaisambe Afrikanina ; commissionoceanindien.org — ny COI (nojerena septambra 2026).",
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
