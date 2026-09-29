// assemble-manuel.js — manangona ny boky Tantara T4 J-Learn manontolo
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildFiche, buildFanadinana } = require("./fiche-builder");
const FM = require("./front-matter");
const AX = require("./annexes");
const { AlignmentType } = require("docx");

const LH1 = require("./data-lh1"); // S1-S4
const LH2 = require("./data-lh2"); // S6
const LH3 = require("./data-lh3"); // S8-S10
const LH4 = require("./data-lh4"); // S12-S13
const LH5 = require("./data-lh5"); // S15-S21
const LH6 = require("./data-lh6"); // S23-S26
const T = require("./data-tombana"); // S5, S7, S11, S14, S22, S27

const ROOT = path.join(__dirname, "..");
const anchorOf = (n) => `seho${String(n).padStart(2, "0")}`;

const lh1Seances = [...LH1.seances, T.S5];
const lh2Seances = [...LH2.seances, T.S7];
const lh3Seances = [...LH3.seances, T.S11];
const lh4Seances = [...LH4.seances, T.S14];
const lh5Seances = [...LH5.seances, T.S22];
const lh6Seances = [...LH6.seances, T.S27];

const plan = [
  {
    lh: "I", anchor: "lohahevitra1",
    titre: "LOHAHEVITRA I — Ny habaka sy ny fotoana",
    surtitre: "LOHAHEVITRA I", sousTitre: "NY HABAKA SY NY FOTOANA",
    image: "images/img_s01.png",
    seances: lh1Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh1Seances,
  },
  {
    lh: "II", anchor: "lohahevitra2",
    titre: "LOHAHEVITRA II — Ny tarehimarika romana sy ny taonjato",
    surtitre: "LOHAHEVITRA II", sousTitre: "NY TAREHIMARIKA ROMANA SY NY TAONJATO",
    image: "images/img_s06.png",
    seances: lh2Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh2Seances,
  },
  {
    lh: "III", anchor: "lohahevitra3",
    titre: "LOHAHEVITRA III — Ny angano, ny tantara ary ny loharano fanovozan-kevitra",
    surtitre: "LOHAHEVITRA III", sousTitre: "NY ANGANO, NY TANTARA ARY NY LOHARANO FANOVOZAN-KEVITRA",
    image: "images/img_s08.png",
    seances: lh3Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh3Seances,
  },
  {
    lh: "IV", anchor: "lohahevitra4",
    titre: "LOHAHEVITRA IV — Ny anarana « Madagasikara » sy ireo vanim-potoana",
    surtitre: "LOHAHEVITRA IV", sousTitre: "NY ANARANA « MADAGASIKARA » SY IREO VANIM-POTOANA LEHIBE",
    image: "images/img_s13.png",
    seances: lh4Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh4Seances,
  },
  {
    lh: "V", anchor: "lohahevitra5",
    titre: "LOHAHEVITRA V — Ny fiavian'ny Malagasy",
    surtitre: "LOHAHEVITRA V", sousTitre: "NY FIAVIAN'NY MALAGASY",
    image: "images/img_s15.png",
    seances: lh5Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh5Seances,
  },
  {
    lh: "VI", anchor: "lohahevitra6",
    titre: "LOHAHEVITRA VI — Ny vakoka sy ny harem-pirenena eto Madagasikara",
    surtitre: "LOHAHEVITRA VI", sousTitre: "NY VAKOKA SY NY HAREM-PIRENENA ETO MADAGASIKARA",
    image: "images/img_s24.png",
    seances: lh6Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh6Seances,
  },
];

const tovanaToc = [
  { titre: "Tovana 1 — Frizy : ireo vanim-potoana lehibe", anchor: "tovana1" },
  { titre: "Tovana 2 — Sari-tany : ireo faritra niavian'ny razambe", anchor: "tovana2" },
  { titre: "Tovana 3 — Sari-tany : ireo morontsiraka niantsonan'ny mpiavy", anchor: "tovana3" },
  { titre: "Tovana 4 — Ny tarehimarika romana", anchor: "tovana4" },
  { titre: "Tovana 5 — Ny kalandrie : ny andro sy ny volana", anchor: "tovana5" },
  { titre: "Tovana 6 — Ny fiteny malagasy sy ireo fiteny niaviany", anchor: "tovana6" },
  { titre: "Tovana 7 — Ireo sigla sy fanafohezan-teny", anchor: "tovana7" },
  { titre: "Tovana 8 — Rakibolana kely", anchor: "tovana8" },
  { titre: "Tovana 9 — Bibliografia, webografia ary lisitry ny sary", anchor: "tovana9" },
];

// ---------- lisitry ny sary : fanisana mandeha ho azy (jereo sary-counter.js) ----------
const SARY = require("./sary-counter");

// ---------- fanangonana ----------
const children = [];
children.push(...FM.buildBookcover(ROOT));
children.push(...FM.buildCouverture(ROOT));
children.push(...FM.buildTenyFampidirana());
children.push(...FM.buildTorolalana());
children.push(...FM.buildFizahanTakila(plan, tovanaToc));
children.push(...FM.buildFafaMpianatra(plan));

for (const u of plan) {
  children.push(...FM.buildPejinLohahevitra(u, ROOT));
  u.data.forEach((s) => {
    if (s.type === "fanadinana") {
      children.push(...buildFanadinana(s));
    } else {
      children.push(...buildFiche(s, ROOT));
    }
    children.push(B.pageBreak());
  });
}

// ---------- tovana ----------
children.push(B.p("", { size: 24, spacingAfter: 600 }));
children.push(B.heading("TOVANA", { anchorId: "tovana", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 200 }));
children.push(B.p("Frizy \u2022 Sari-tany \u2022 Tarehimarika romana \u2022 Kalandrie \u2022 Fiteny \u2022 Sigla \u2022 Rakibolana \u2022 Bibliografia", {
  size: 24, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(B.pageBreak());
children.push(...AX.annexe1(ROOT));
children.push(...AX.annexe2(ROOT));
children.push(...AX.annexe3(ROOT));
children.push(...AX.annexe4());
children.push(...AX.annexe5(ROOT));
children.push(...AX.annexe6());
children.push(...AX.annexe7());
children.push(...AX.annexe8());
children.push(...AX.annexe9(SARY.list().map(f => ({ legende: `Sary ${f.num} — ${f.legende}`, anchor: f.anchor }))));

// ---------- taratasy ----------
const { Footer, PageNumber } = require("docx");
const footerPage = new Footer({ children: [ new B.Paragraph({
  alignment: AlignmentType.CENTER,
  children: [ new B.TextRun({ children: [PageNumber.CURRENT], size: 20, font: B.FONT, color: "666666" }) ],
}) ] });

const doc = new B.Document({
  creator: "J-Learn (J-Lab Madagascar) — j.lab.mdg@gmail.com",
  title: "Boky Tantara T4 — J-Learn, Édition 2026",
  subject: "Tantara (Histoire) — kilasy T4",
  description: "Boky fianarana Tantara T4 : takela-panomanan-desona, lesona misy sary, fanazaran-tena, tombana ary tovana — mifanaraka amin'ny PE sy FRP ofisialy.",
  keywords: "Tantara, T4, J-Learn, Madagasikara, manuel scolaire",
  styles: {
    default: { document: { run: { font: B.FONT, size: 24 } } },
    characterStyles: [{
      id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont",
      run: { color: "0563C1", underline: {} },
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 1417, bottom: 1417, left: 1417, right: 1417 } } },
    footers: { default: footerPage },
    children,
  }],
});

B.Packer.toBuffer(doc).then(buf => {
  const outDir = path.join(ROOT, "livrables");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, "Manuel_Tantara_T4_JLearn_V1.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
