// assemble-manuel.js — manangona ny boky Tantara T5 J-Learn manontolo
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildFiche, buildFanadinana } = require("./fiche-builder");
const FM = require("./front-matter");
const AX = require("./annexes");
const { AlignmentType } = require("docx");

const LH1 = require("./data-lh1"); // S1-S2
const LH2 = require("./data-lh2"); // S4-S5
const LH3 = require("./data-lh3"); // S7-S9
const LH4 = require("./data-lh4"); // S11-S16
const LH5 = require("./data-lh5"); // S18-S24
const LH6 = require("./data-lh6"); // S26-S29
const T = require("./data-tombana"); // S3, S6, S10, S17, S25, S30

const ROOT = path.join(__dirname, "..");
const anchorOf = (n) => `seho${String(n).padStart(2, "0")}`;

const lh1Seances = [...LH1.seances, T.S3];
const lh2Seances = [...LH2.seances, T.S6];
const lh3Seances = [...LH3.seances, T.S10];
const lh4Seances = [...LH4.seances, T.S17];
const lh5Seances = [...LH5.seances, T.S25];
const lh6Seances = [...LH6.seances, T.S30];

const plan = [
  {
    lh: "I", anchor: "lohahevitra1",
    titre: "LOHAHEVITRA I — Ny tranga ara-tantara sy ny zava-mitranga",
    surtitre: "LOHAHEVITRA I", sousTitre: "NY TRANGA ARA-TANTARA SY NY ZAVA-MITRANGA",
    image: "images/img_s01.png",
    seances: lh1Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh1Seances,
  },
  {
    lh: "II", anchor: "lohahevitra2",
    titre: "LOHAHEVITRA II — Ireo fanjakana nisy teto Madagasikara (taonjato XVI-XIX)",
    surtitre: "LOHAHEVITRA II", sousTitre: "IREO FANJAKANA NISY TETO MADAGASIKARA (TAONJATO XVI-XIX)",
    image: "images/img_s05.png",
    seances: lh2Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh2Seances,
  },
  {
    lh: "III", anchor: "lohahevitra3",
    titre: "LOHAHEVITRA III — Ny fanondranana andevo",
    surtitre: "LOHAHEVITRA III", sousTitre: "NY FANONDRANANA ANDEVO NIFANAOVAN'I MADAGASIKARA TAMIN'I AFRIKA ATSINANANA SY IREO NOSY MASCAREIGNES",
    image: "images/img_s08.png",
    seances: lh3Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh3Seances,
  },
  {
    lh: "IV", anchor: "lohahevitra4",
    titre: "LOHAHEVITRA IV — Ny fanjakan'i Madagasikara tamin'ny taonjato XIX",
    surtitre: "LOHAHEVITRA IV", sousTitre: "NY FANJAKAN'I MADAGASIKARA TAMIN'NY TAONJATO XIX",
    image: "images/img_s11.png",
    seances: lh4Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh4Seances,
  },
  {
    lh: "V", anchor: "lohahevitra5",
    titre: "LOHAHEVITRA V — Ny fanjanahantany teto Madagasikara (1896-1960)",
    surtitre: "LOHAHEVITRA V", sousTitre: "NY FANJANAHANTANY TETO MADAGASIKARA (1896-1960)",
    image: "images/img_s18.png",
    seances: lh5Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh5Seances,
  },
  {
    lh: "VI", anchor: "lohahevitra6",
    titre: "LOHAHEVITRA VI — Ny vakoka sy ny harem-pirenena eto Madagasikara",
    surtitre: "LOHAHEVITRA VI", sousTitre: "NY VAKOKA SY NY HAREM-PIRENENA ETO MADAGASIKARA",
    image: "images/img_s26.png",
    seances: lh6Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh6Seances,
  },
];

const tovanaToc = [
  { titre: "Tovana 1 — Frizy : ireo mpanjaka enina nifandimby (1810-1897)", anchor: "tovana1" },
  { titre: "Tovana 2 — Sari-tany : ireo fanjakana nijoro teto Madagasikara", anchor: "tovana2" },
  { titre: "Tovana 3 — Sari-tany : ny lalan'ny varotra andevo", anchor: "tovana3" },
  { titre: "Tovana 4 — Ny fanjanahantany : ireo sata sy ny rafi-pitantanana", anchor: "tovana4" },
  { titre: "Tovana 5 — Frizy : ireo hetsika fanoherana ny fanjanahantany", anchor: "tovana5" },
  { titre: "Tovana 6 — Tabilao : ireo mpanjakan'i Madagasikara (taonjato XIX)", anchor: "tovana6" },
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
children.push(B.p("Frizy \u2022 Sari-tany \u2022 Sata sy rafi-pitantanana \u2022 Tolona \u2022 Tabilao mpanjaka \u2022 Sigla \u2022 Rakibolana \u2022 Bibliografia", {
  size: 24, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(B.pageBreak());
children.push(...AX.annexe1(ROOT));
children.push(...AX.annexe2(ROOT));
children.push(...AX.annexe3(ROOT));
children.push(...AX.annexe4(ROOT));
children.push(...AX.annexe5(ROOT));
children.push(...AX.annexe6(ROOT));
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
  title: "Boky Tantara T5 — J-Learn, Édition 2026",
  subject: "Tantara (Histoire) — kilasy T5",
  description: "Boky fianarana Tantara T5 : takela-panomanan-desona, lesona misy sary, fanazaran-tena, tombana ary tovana — mifanaraka amin'ny PE sy FRP ofisialy.",
  keywords: "Tantara, T5, J-Learn, Madagasikara, manuel scolaire",
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
  const out = path.join(outDir, "Manuel_Tantara_T5_JLearn_V1.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
