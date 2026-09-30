// annexes.js — ireo tovana valo amin'ny bokin'ny Tantara T8
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
  const im2 = img(rootDir, "images/img_annexe_friseMG.png", 640, "Frizy famintinana : Madagasikara 1500-1960");
  if (im2) out.push(im2);
  out.push(leg("Frizy famintinana : Madagasikara, 1500 ka hatramin'ny fahaleovantena", "tovana1"));
  out.push(B.p("Ireo daty tsara ho tadidina :", { bold: true, size: 24, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "1492 : nahatongavan'i Christophe Colomb tany Amerika — fiandohan'ny Andro Maoderina.",
    "1500 : hitan'i Diégo Diaz i Madagasikara ; 1519-1522 : nanodidina ny tany i Magellan.",
    "1517 : niandohan'ny Réforme (Luther) ; taonjato XVI : ny Renaissance.",
    "1776 : fahaleovantenan'i Etazonia ; 14 jolay 1789 : fakana ny Bastille — Revolisiona frantsay.",
    "Aogositra 1789 : ny DDHC ; 1792 : ny Repoblika voalohany frantsay.",
    "Tapaky ny XVIII - 1914 : ny revolisiona indostrialy roa.",
    "1885 : konferansan'i Berlin ; 1890 : convention de Zanzibar.",
    "1810-1828 : Radama I — famoronana ny Fanjakan'i Madagasikara ; 1817, 1820 : fifanarahana tamin'ny Anglisy.",
    "1855 : charte Lambert ; 1881 : code 305 articles ; 1864-1895 : fitondran-dRainilaiarivony.",
    "30 septambra 1895 : lavo Antananarivo ; 1896 : lasa zanatany i Madagasikara.",
    "1895-1898 : Menalamba ; 1913-1915 : VVS ; 29 martsa 1947 : tolona lehibe.",
    "1956 : loi-cadre ; 14 oktobra 1958 : Repoblika voalohany ; 26 jona 1960 : FAHALEOVANTENA.",
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
      ["Andro Taloha (Antikite)", "-3000 → 476", "soratra, Mezopotamia, Ejipta, Gresy, Roma"],
      ["Andro Antenatenany", "476 → 1492", "feodaly, Eglizy, fahaterahan'ny Silamo"],
      ["Andro Maoderina", "1492 → 1789", "fikarohana lehibe, Renaissance, Réforme"],
      ["Andro Ankehitriny", "1789 → ankehitriny", "Revolisiona frantsay, indostria, empira mpanjanaka, fanatontoloana"],
    ],
    [30, 26, 44]
  ));
  out.push(B.p("B. Ny dingana lehibe teto Madagasikara (1500-1960)", { bold: true, size: 24, color: B.GREEN, spacingBefore: 160, spacingAfter: 60 }));
  out.push(table2(
    ["Dingana", "Vanim-potoana", "Ohatra"],
    [
      ["Fanjakana malagasy maro", "1500 - 1810", "sakalava (Menabe, Boina), Betsimisaraka (Ratsimilaho), Antemoro, merina..."],
      ["Fanjakan'i Madagasikara", "1810 - 1896", "Radama I ... Ranavalona III ; Rainilaiarivony praiminisitra (1864-1895)"],
      ["Zanatany frantsay", "1896 - 1960", "fitondrana mpanjanaka ; hetsika nasionalista (Menalamba, VVS, 1947)"],
      ["Firenena mahaleo tena", "26 jona 1960 → ...", "Repoblika voalohany (Philibert Tsiranana)"],
    ],
    [28, 22, 50]
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
      ["DDHC", "Déclaration des droits de l'homme et du citoyen", "Fanambarana ny zon'olombelona sy ny olom-pirenena (1789)"],
      ["FRP", "Fiche de Référence Pédagogique (frantsay)", "Tari-dalana ofisialin'ny mpampianatra"],
      ["JINA", "Jeunesse Nationaliste", "Fikambanana an-tsokosoko tamin'ny tolona 1947"],
      ["LMS", "London Missionary Society", "Misionera anglisy nanorina ny sekoly voalohany (1820)"],
      ["MDRM", "Mouvement Démocratique de la Rénovation Malgache", "Antoko politika voampanga tamin'ny 1947"],
      ["MEN", "Ministère de l'Éducation Nationale", "Ministeran'ny Fanabeazam-pirenena"],
      ["PADESM", "Parti des Déshérités de Madagascar", "Antoko politika tamin'ny 1946-1956, tsy niray tamin'ny MDRM"],
      ["PANAMA", "Parti Nationaliste Malgache", "Fikambanana an-tsokosoko tamin'ny tolona 1947"],
      ["PE", "Programme d'Études", "Fandaharam-pianarana ofisialy"],
      ["SMOTIG", "Service de la Main-d'\u0152uvre pour les Travaux d'Intérêt Général", "Rafitra nampiasana ny tanora tsy voakarama tamin'ny asa vaventy"],
      ["UNESCO", "United Nations Educational, Scientific and Cultural Organization", "Fikambanan'ny Firenena Mikambana momba ny fanabeazana sy ny kolontsaina"],
      ["V.A.", "Valiny Andrasana", "Ny valiny andrasana amin'ny fanontaniana ao amin'ny fiche"],
      ["VVS", "Vy Vato Sakelika", "Fikambanana an-tsokosoko nasionalista (1913-1915)"],
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
      ["Ady fahaleovantena", "Guerre d'indépendance", "13"],
      ["Ady fanitarana", "Expédition (guerrière)", "18, 22"],
      ["Andevo", "Esclave", "6, 18"],
      ["Andro Maoderina", "Époque moderne", "4"],
      ["Empira mpanjanaka", "Empire colonial", "15"],
      ["Etivam-po", "Machine à vapeur", "14"],
      ["Fahaleovantena", "Indépendance", "27"],
      ["Fanambarana ny zon'olombelona", "DDHC", "13"],
      ["Fanjanahantany", "Colonisation", "15, 24"],
      ["Fanondranana andevo", "Traite des esclaves", "6, 21"],
      ["Fiandrianam-pirenena", "Souveraineté nationale", "15, 27"],
      ["Fikarohana lehibe", "Grandes découvertes", "5"],
      ["Fisarahan'ny fahefana", "Séparation des pouvoirs", "12"],
      ["Fitsapan-kevi-bahoaka", "Référendum", "27"],
      ["Fizakan-tena", "Autonomie", "27"],
      ["Fokonolona", "Communauté villageoise", "18"],
      ["Foloalindahy", "Armée royale malgache", "22"],
      ["Hetra", "Impôt", "11, 22, 25"],
      ["Hitsivolana", "Ordonnance (loi)", "30"],
      ["Kabary", "Discours royal", "18"],
      ["Lovan-tsofina", "Tradition orale", "1, 29"],
      ["Mpanjakavavy", "Reine", "20"],
      ["Nasionalista", "Nationaliste", "26"],
      ["Praiminisitra", "Premier ministre", "20, 22"],
      ["Rakibolana / Rakipahalalana", "Dictionnaire / Encyclopédie", "12"],
      ["Sarambabem-bahoaka", "Tiers état", "11"],
      ["Sesitany", "Exil", "24"],
      ["Sokajy", "Caste, ordre social", "11, 18"],
      ["Sorabe", "Écriture arabico-malgache", "17"],
      ["Toekarena fanondranana akora", "Économie de traite", "25"],
      ["Tranombakoka", "Musée", "30"],
      ["Tsangambato", "Monument", "29"],
      ["Vakoka (hita maso / tsy hita maso)", "Patrimoine (matériel / immatériel)", "29, 30"],
      ["Vanim-potoana ankehitriny", "Époque contemporaine", "11"],
      ["Varotra telozoro", "Commerce triangulaire", "6"],
      ["Zanatany", "Colonie", "24"],
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
  const im1 = img(rootDir, "images/img_annexe_carteFanj.png", 440, "Sari-tanin'ireo fanjakana malagasy");
  if (im1) out.push(im1);
  out.push(leg("Ireo fanjakana malagasy tamin'ny taonjato XVI-XVIII (sary famintinana)", "tovana5"));
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
      "Haiko ny mitanisa ny dingana enina amin'ny fanadihadiana am-bava. (S1)",
      "Haiko ny mitsikera sy mandrafitra ny loharano am-bava. (S2)",
    ]],
    ["Lohahevitra II (Seho 4-10)", [
      "Haiko ny mamaritra ny Andro Maoderina sy ny tranga telo nanamarika azy. (S4)",
      "Fantatro ireo mpikaroka lehibe sy ny zava-bitany. (S5)",
      "Haiko ny manazava ny varotra telozoro sy ny vokany. (S6)",
      "Azoko avahana ny Renaissance sy ny Réforme. (S7-S8)",
      "Fantatro ny nitranga teto Madagasikara tamin'ny Andro Maoderina. (S9)",
    ]],
    ["Lohahevitra III (Seho 11-16)", [
      "Haiko ny mamaritra ny Ancien Régime sy ny sokajy telo. (S11)",
      "Fantatro ireo filozofan'ny Fahazavana sy ny hevi-dehibeny. (S12)",
      "Haiko ny mitantara ny Revolisiona frantsay sy ny fananganana an'i Etazonia. (S13)",
      "Haiko ny mamaritra ny revolisiona indostrialy roa. (S14)",
      "Fantatro ny anton'ny fananganana ny empira mpanjanaka. (S15)",
    ]],
    ["Lohahevitra IV (Seho 17-19)", [
      "Haiko ny mametraka ireo fanjakana malagasy eo amin'ny sarintany. (S17)",
      "Fantatro ny fandaminana ara-tsosialy, ara-toekarena sy ara-politika. (S18)",
    ]],
    ["Lohahevitra V (Seho 20-23)", [
      "Haiko ny mitanisa ireo mpanjaka enina nifandimby. (S20)",
      "Fantatro ny fanavaozana nataon-dRadama I. (S21)",
      "Haiko ny manazava ny fitondrana hova (postes, code 305 articles...). (S22)",
    ]],
    ["Lohahevitra VI (Seho 24-28)", [
      "Haiko ny manavaka ny antony anatiny sy ivelany tamin'ny fanjanahana. (S24)",
      "Fantatro ny fitondrana sy ny fanararaotana mpanjanaka. (S25)",
      "Haiko ny mitanisa ireo hetsika nasionalista sy ny fotoanany. (S26)",
      "Fantatro ny dingana nitondra tamin'ny fahaleovantena (1956-1960). (S27)",
    ]],
    ["Lohahevitra VII (Seho 29-32)", [
      "Haiko ny manavaka ny vakoka hita maso sy tsy hita maso. (S29)",
      "Fantatro ny lalàna sy ny fomba fiarovana ny vakoka. (S30)",
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
  out.push(B.p("Ny isa dia manondro ny seho ; fipihana ny laharana = mankany amin'ny seho (endrika nomerika). Ny seho fampianarana ihany no voatondro eto, fa tsy ny seho famerenana sy fanadinana (3, 10, 16, 19, 23, 28, 31, 32).", { italics: true, size: 22, spacingAfter: 120 }));
  const entries = [
    ["Ancien Régime", [11]], ["Andrianampoinimerina", [20, 21]], ["Antemoro sy sorabe", [17]],
    ["Bastille (14 jolay 1789)", [13]], ["Beniowski", [9]], ["Betsimisaraka (Ratsimilaho)", [17]],
    ["Boina sy Menabe (sakalava)", [17]], ["Charte Lambert (1855)", [24]],
    ["Christophe Colomb (1492)", [5]], ["Code 305 articles (1881)", [22]],
    ["Code de l'indigénat", [25]], ["Convention de Zanzibar (1890)", [15, 24]],
    ["DDHC (1789)", [13]], ["Diderot sy ny Encyclopédie", [12]], ["Diégo Diaz (1500)", [5, 9]],
    ["Économie de traite", [25]], ["Empira mpanjanaka", [15]], ["Etazonia (1776)", [13]],
    ["Etivam-po (machine à vapeur)", [14]], ["Fahaleovantena (26 jona 1960)", [27]],
    ["Fahazavana (siècle des Lumières)", [12]], ["Fifanarahana 1817 sy 1820", [21]],
    ["Fikarohana lehibe", [5]], ["Foloalindahy sy postes", [22]], ["Fordisme sy taylorisme", [14]],
    ["Gallieni", [25]], ["Jean Laborde", [24]], ["JINA sy PANAMA", [26]],
    ["Konferansan'i Berlin (1885)", [15, 24]], ["Loi-cadre (1956)", [27]],
    ["Luther sy Calvin (Réforme)", [8]], ["Magellan (1519-1522)", [5]],
    ["MDRM sy PADESM", [26]], ["Menalamba (1895-1898)", [26]],
    ["Montesquieu, Voltaire, Rousseau", [12]], ["Mpanjaka masina", [18]],
    ["Radama I", [20, 21]], ["Rainilaiarivony", [20, 22]], ["Ralaimongo", [26]],
    ["Ranavalona I, II, III", [20]], ["Referendum (14 oktobra 1958)", [27]],
    ["Renaissance (Léonard de Vinci...)", [7]], ["Repoblika frantsay (1792)", [13]],
    ["Revolisiona frantsay (1789)", [13]], ["Revolisiona indostrialy", [14]],
    ["Rovan'Ambohimanga (UNESCO)", [29, 30]], ["Sadiavahy", [26]], ["SMOTIG", [25]],
    ["Sokajy (andriana, hova, andevo)", [18]], ["Tantara am-bava", [1, 2]],
    ["Tolona 1947 (29 martsa)", [26]], ["Vakoka hita maso / tsy hita maso", [29]],
    ["Varotra telozoro", [6]], ["VVS (1913-1915)", [26]],
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
    "MEN — Programme d'Études (PE) T8, Édition 2026, Ministeran'ny Fanabeazam-pirenena, Madagasikara.",
    "CALLET (R.P. François) — Tantara ny Andriana eto Madagasikara, Antananarivo, Imprimerie catholique, 1873.",
    "DESCHAMPS (Hubert) — Histoire de Madagascar, Paris, Berger-Levrault, 1972.",
    "RALAIMIHOATRA (Édouard) — Histoire de Madagascar, Antananarivo, Société malgache d'édition, 1965.",
  ].forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  out.push(B.p("Webografia", { bold: true, size: 26, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
  [
    "plateforme.education.mg — ny PE ofisialy sy ny tahirin-kevitry ny MEN (nojerena septambra 2026).",
    "mg.wikipedia.org/wiki/Tantara — famaritana ny tantara amin'ny teny malagasy (nojerena septambra 2026).",
    "fr.wikipedia.org — « Siècle des Lumières », « Révolution française », « Révolution industrielle », « Histoire de Madagascar » (nojerena septambra 2026).",
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
