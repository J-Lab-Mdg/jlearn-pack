// front-matter.js — bokovera, teny fampidirana, torolalana, fizahan-takila, fafan'ny mpianatra, pejin'ny lohahevitra
const B = require("./builders");
const { AlignmentType, Table, TableRow, WidthType } = require("docx");
const path = require("path");
const fs = require("fs");

const sizeOf = (p) => {
  const buf = fs.readFileSync(p);
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
};

function img(rootDir, rel, wPx) {
  const p = path.join(rootDir, rel);
  if (!fs.existsSync(p)) return null;
  const dim = sizeOf(p);
  const h = Math.round(dim.height * (wPx / dim.width));
  return B.imagePara(p, wPx, h);
}

// ---------------- Bokovera pejy iray manontolo (pejy 1, tsy misy sisiny) ----------------
function buildBookcover(rootDir) {
  const { ImageRun, Paragraph, HorizontalPositionRelativeFrom, VerticalPositionRelativeFrom, TextWrappingType } = require("docx");
  const p = path.join(rootDir, "images/bookcover_Tantara_T4_a4.png");
  if (!fs.existsSync(p)) return [];
  const data = fs.readFileSync(p);
  const para = new Paragraph({
    children: [new ImageRun({
      type: "png",
      data,
      transformation: { width: 794, height: 1123 },
      altText: { title: "Fonon'ny boky Tantara T4 - J-Learn", description: "Fonon'ny boky Tantara T4 - J-Learn, Édition 2026", name: "bookcover" },
      floating: {
        horizontalPosition: { relative: HorizontalPositionRelativeFrom.PAGE, offset: 0 },
        verticalPosition: { relative: VerticalPositionRelativeFrom.PAGE, offset: 0 },
        wrap: { type: TextWrappingType.NONE },
        behindDocument: true,
        allowOverlap: true,
      },
    })],
  });
  return [para, B.pageBreak()];
}

// ---------------- Pejy fonony anaty ----------------
function buildCouverture(rootDir) {
  const out = [];
  out.push(B.p("REPOBLIKAN'I MADAGASIKARA", { bold: true, size: 24, align: AlignmentType.CENTER, spacingBefore: 300, spacingAfter: 60 }));
  out.push(B.p("Collection J-Learn", { italics: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 400 }));
  out.push(B.p("TANTARA", { bold: true, size: 44, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Histoire", { bold: true, size: 30, color: B.GREEN, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Kilasy T6", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 300 }));
  const cov = img(rootDir, "images/img_seansa22.png", 440);
  if (cov) out.push(cov);
  out.push(B.p("Bokin'ny mpampianatra sy ny mpianatra", { size: 26, align: AlignmentType.CENTER, spacingBefore: 300, spacingAfter: 80 }));
  out.push(B.p("Takela-panomanan-desona \u2022 Lesona misy sary \u2022 Fanazaran-tena misy valiny", { italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 400 }));
  out.push(B.p("Version V1 — Taom-pianarana 2026-2027 — Contenu PE (Édition 2026)", { size: 24, align: AlignmentType.CENTER, spacingAfter: 60 }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Teny fampidirana ----------------
function buildTenyFampidirana() {
  const out = [];
  out.push(B.heading("TENY FAMPIDIRANA", { anchorId: "tenyfampidirana", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));
  [
    "Ity boky Tantara ho an'ny kilasy T4 ity dia narafitra mifanaraka tanteraka amin'ny fandaharam-pianarana ofisialin'ny Ministeran'ny Fanabeazam-pirenena (PE nohavaozina, Édition 2026) sy ny FRP Tantara T4. Feno ao ny lohahevitra efatra : ny fampidirana ny fianarana Tantara, i Madagasikara taorian'ny fahaleovantena, ny fifandraisana amin'ireo firenena afrikanina sy ny nosy manodidina, ary ny vakoka sy ny harem-pirenena — mizara ho seho 27, misy fanadinana efatra sy fanadinana akapobeny amin'ny fiafaran'ny taona.",
    "Ny seho tsirairay dia manaraka rafitra tokana : ny TAKELA-PANOMANAN-DESONA ho an'ny mpampianatra, misy ny fizotry ny lesona feno (famerenana, lesona vaovao amin'ny dingana enina, tombana) ; ny LESONA misy sary ho an'ny mpianatra, asongadina amin'ny loko ny teny manan-danja ; ary ny FANAZARAN-TENA isaina 10 isa, arahina valiny amin'ny antsipiriany.",
    "Nomena lanja manokana ny tontolo malagasy : ny frizy kronolojikan'ireo Repoblika, ny tahirin-kevitra nalaina avy amin'ny FRP, ary ny rakibolana kely mampifandray ny teny malagasy sy ny terme officiel. Amin'ny teny malagasy ny boky manontolo, fa ny anaran-tsamirery sy ny terme officiel (UA, COI, référendum...) dia notazonina araka ny endriny ofisialy.",
    "Fanadinana efatra sy fanadinana akapobeny iray, samy misy valiny sy sedra fanitsiana avokoa, no ahafahan'ny mpianatra mizaha toetra ny fahaizany. Ny fafan'ny mpianatra eo am-piandohan'ny boky no anampiana azy hanara-maso ny fandrosoany isaky ny seho.",
    "Enga anie ity boky ity mba ho namana mahasoa ho an'ny mpampianatra sy ny mpianatra, ary hampitombo ny fitiavan'ny mpianatra rehetra ny tantaran'ny fireneny.",
  ].forEach(t => out.push(B.p(t, { size: 24, spacingAfter: 120, align: AlignmentType.JUSTIFIED })));
  out.push(B.p("Ny ekipa J-Learn", { italics: true, size: 24, align: AlignmentType.RIGHT, spacingBefore: 120 }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Torolalana ----------------
function buildTorolalana() {
  const out = [];
  out.push(B.heading("TOROLALANA AMIN'NY FAMPIASANA NY BOKY", { anchorId: "torolalana", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));
  const blocs = [
    ["Ho an'ny mpampianatra", [
      "Ny takela-panomanan-desona no manokatra ny seho tsirairay : ao ny tanjona manokana, ny fanovozan-kevitra, ny fitaovana, ary ny fizotry ny lesona amin'ny fafana (dingana, asan'ny mpampianatra, asan'ny mpianatra, teknika, fitaovana).",
      "Ny fanontaniana rehetra dia arahina ny valiny andrasana (V.A.).",
      "Navela ho banga ny saha Faharetany : ny mpampianatra tsirairay no mampifanaraka azy amin'ny kilasiny sy ny fandaharam-potoanany.",
    ]],
    ["Ho an'ny mpianatra", [
      "Ny lesona misy sary no mirakitra ny votoatin'ny fianarana ; asongadina amin'ny loko ny teny manan-danja.",
      "Ny « Tahirin-kevitra hodinihina » dia manazatra anao hamaky sy hamakafaka loharano ara-tantara — fanazaran-tena fototry ny mpahay tantara !",
      "Ny rakibolana kely dia mampifandray ny teny malagasy sy ny terme officiel amin'ny teny frantsay.",
      "Ny fanazaran-tena isaina 10 isa dia hizahana toetra ny fahaizanao ; ny valiny, miloko mavokely, dia jerena aorian'ny fikarohana ihany !",
    ]],
    ["Ny fanadinana", [
      "Isaky ny faran'ny lohahevitra dia misy seho famerenana (ny tsara ho tadidina) sy laza adina isaina 20 isa, misy valiny sy sedra fanitsiana.",
      "Ny fanadinana akapobeny (seho 27) dia mandrakotra ny fandaharam-pianarana manontolo : fiomanana amin'ny fanadinana amin'ny fiafaran'ny taona.",
      "Ny fafan'ny mpianatra, pejy manaraka, dia anamarihana ny seho vita sy ny isa azo.",
    ]],
    ["Ny tovana", [
      "Any amin'ny faran'ny boky : ny frizy famintinana, ny fafan'ireo filoham-panjakana, ny sigla, ny rakibolana, ny sari-tany, ny taratasy fizahan-toetra, ny fanondroana ary ny bibliografia-webografia.",
      "Mifandray ny fizahan-takila : ao amin'ny endrika nomerika dia mitondra mankany amin'ny pejy ilaina ny fipihana ny lohateny iray.",
    ]],
  ];
  for (const [titre, points] of blocs) {
    out.push(B.p(titre, { bold: true, size: 26, color: B.GREEN, spacingBefore: 120, spacingAfter: 60 }));
    points.forEach(t => out.push(B.p("\u2022 " + t, { size: 24, spacingAfter: 40 })));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------------- Fizahan-takila mifandray ----------------
function buildFizahanTakila(plan, annexes) {
  const out = [];
  out.push(B.heading("FIZAHAN-TAKILA", { anchorId: "fizahantakila", size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }));
  out.push(B.tocLink("Teny fampidirana", "tenyfampidirana", { size: 24 }));
  out.push(B.tocLink("Torolalana amin'ny fampiasana ny boky", "torolalana", { size: 24 }));
  out.push(B.tocLink("Fafan'ny mpianatra", "fafampianatra", { size: 24 }));
  for (const u of plan) {
    out.push(B.p("", { size: 8, spacingAfter: 30 }));
    out.push(B.tocLink(u.titre, u.anchor, { size: 23, bold: true }));
    for (const s of u.seances) {
      out.push(B.tocLink(`Seho ${s.numero} — ${s.titre}`, s.anchor, { size: 24, indentLeft: 360 }));
    }
  }
  out.push(B.p("", { size: 8, spacingAfter: 30 }));
  out.push(B.tocLink("TOVANA", "tovana", { size: 23, bold: true }));
  for (const a of annexes) {
    out.push(B.tocLink(a.titre, a.anchor, { size: 24, indentLeft: 360 }));
  }
  out.push(B.pageBreak());
  return out;
}

// ---------------- Fafan'ny mpianatra ----------------
function buildFafaMpianatra(plan) {
  const out = [];
  out.push(B.heading("FAFAN'NY MPIANATRA", { anchorId: "fafampianatra", size: 30, align: AlignmentType.CENTER, spacingAfter: 100 }));
  out.push(B.p("Mariho ny efitra rehefa vita ny seho, dia soraty ny isa azonao. Tanjona : voamarika daholo ny efitra rehetra alohan'ny fanadinana akapobeny !", {
    italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 160,
  }));
  const { cell, p } = B;
  const header = new TableRow({ children: [
    cell([p("Seho", { bold: true, size: 22, spacingAfter: 20 })], { shading: "DDEEFF", width: 8 }),
    cell([p("Lohateny", { bold: true, size: 22, spacingAfter: 20 })], { shading: "DDEEFF", width: 52 }),
    cell([p("Vita", { bold: true, size: 22, spacingAfter: 20 })], { shading: "DDEEFF", width: 10 }),
    cell([p("Naverina ny fanazaran-tena", { bold: true, size: 22, spacingAfter: 20 })], { shading: "DDEEFF", width: 14 }),
    cell([p("Isa azo", { bold: true, size: 22, spacingAfter: 20 })], { shading: "DDEEFF", width: 16 }),
  ]});
  const rows = [header];
  for (const u of plan) {
    rows.push(new TableRow({ children: [
      cell([p(u.titre, { bold: true, size: 22, color: B.GREEN, spacingAfter: 20 })], { shading: "E8F0E4", width: 100, colSpan: 5 }),
    ]}));
    for (const s of u.seances) {
      const sur = s.type === "fanadinana" ? "……… / 20" : "……… / 10";
      rows.push(new TableRow({ children: [
        cell([p(String(s.numero), { size: 22, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 8 }),
        cell([p(s.titre, { size: 22, spacingAfter: 20 })], { width: 52 }),
        cell([p("\u2610", { size: 26, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 10 }),
        cell([p("\u2610", { size: 26, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 14 }),
        cell([p(sur, { size: 22, spacingAfter: 20, align: AlignmentType.CENTER })], { width: 16 }),
      ]}));
    }
  }
  out.push(new Table({ width: { size: 100, type: WidthType.PERCENTAGE }, rows }));
  out.push(B.pageBreak());
  return out;
}

// ---------------- Pejin'ny lohahevitra ----------------
function buildPejinLohahevitra(u, rootDir) {
  const out = [];
  out.push(B.p("", { size: 24, spacingAfter: 600 }));
  out.push(B.heading(u.surtitre, { anchorId: u.anchor, size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 80 }));
  out.push(B.p(u.sousTitre, { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 240 }));
  const im = u.image ? img(rootDir, u.image, 460) : null;
  if (im) out.push(im);
  out.push(B.p("", { size: 12, spacingAfter: 120 }));
  out.push(B.p("Ao anatin'ity lohahevitra ity :", { bold: true, size: 24, color: B.GREEN, spacingAfter: 60 }));
  for (const s of u.seances) {
    out.push(B.p(`\u2022 Seho ${s.numero} — ${s.titre}`, { size: 24, spacingAfter: 30 }));
  }
  out.push(B.pageBreak());
  return out;
}

module.exports = { buildBookcover, buildCouverture, buildTenyFampidirana, buildTorolalana, buildFizahanTakila, buildFafaMpianatra, buildPejinLohahevitra };
