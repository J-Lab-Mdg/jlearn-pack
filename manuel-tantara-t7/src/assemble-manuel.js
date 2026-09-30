// assemble-manuel.js — manangona ny boky Tantara T7 J-Learn manontolo
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildFiche, buildFanadinana } = require("./fiche-builder");
const FM = require("./front-matter");
const AX = require("./annexes");
const { AlignmentType } = require("docx");

const { LH1 } = require("./data-lh1");   // S1-S2
const { LH2 } = require("./data-lh2");   // S4-S5
const { LH3A } = require("./data-lh3a"); // S7-S9
const { LH3B } = require("./data-lh3b"); // S10-S12
const { LH4A } = require("./data-lh4a"); // S14-S16
const { LH4B } = require("./data-lh4b"); // S17-S19
const { LH5 } = require("./data-lh5");   // S21-S23
const { LH6 } = require("./data-lh6");   // S25-S27
const { LH7 } = require("./data-lh7");   // S29-S30
const FD = require("./data-fanadinana"); // S3, S6, S13, S20, S24, S28, S31, S32

const ROOT = path.join(__dirname, "..");
const anchorOf = (n) => `seho${String(n).padStart(2, "0")}`;

const lh1Seances = [...LH1.seances, FD.S3];
const lh2Seances = [...LH2.seances, FD.S6];
const lh3Seances = [...LH3A.seances, ...LH3B.seances, FD.S13];
const lh4Seances = [...LH4A.seances, ...LH4B.seances, FD.S20];
const lh5Seances = [...LH5.seances, FD.S24];
const lh6Seances = [...LH6.seances, FD.S28];
const lh7Seances = [...LH7.seances, FD.S31];

const mkSeances = (arr) => arr.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type }));

const plan = [
  {
    lh: "I", anchor: "lohahevitra1",
    titre: "LOHAHEVITRA I — Ny tantara am-bava",
    surtitre: "LOHAHEVITRA I", sousTitre: "NY TANTARA AM-BAVA",
    image: "images/img_s01.png",
    seances: mkSeances(lh1Seances), data: lh1Seances,
  },
  {
    lh: "II", anchor: "lohahevitra2",
    titre: "LOHAHEVITRA II — Ireo vanim-potoana lehiben'ny Prehistoara sy ny Tantara",
    surtitre: "LOHAHEVITRA II", sousTitre: "IREO VANIM-POTOANA LEHIBEN'NY PREHISTOARA SY NY TANTARA",
    image: "images/img_s04.png",
    seances: mkSeances(lh2Seances), data: lh2Seances,
  },
  {
    lh: "III", anchor: "lohahevitra3",
    titre: "LOHAHEVITRA III — Ny sivilizasiona tamin'ny Andro Taloha (Antiquité)",
    surtitre: "LOHAHEVITRA III", sousTitre: "NY SIVILIZASIONA TAMIN'NY ANDRO TALOHA (ANTIQUITÉ)",
    image: "images/img_s08.png",
    seances: mkSeances(lh3Seances), data: lh3Seances,
  },
  {
    lh: "IV", anchor: "lohahevitra4",
    titre: "LOHAHEVITRA IV — Ny Andro Antenatenany (Moyen Âge)",
    surtitre: "LOHAHEVITRA IV", sousTitre: "NY ANDRO ANTENATENANY (MOYEN ÂGE)",
    image: "images/img_s14.png",
    seances: mkSeances(lh4Seances), data: lh4Seances,
  },
  {
    lh: "V", anchor: "lohahevitra5",
    titre: "LOHAHEVITRA V — Ny niandohan'ny vahoaka malagasy",
    surtitre: "LOHAHEVITRA V", sousTitre: "NY NIANDOHAN'NY VAHOAKA MALAGASY",
    image: "images/img_s21.png",
    seances: mkSeances(lh5Seances), data: lh5Seances,
  },
  {
    lh: "VI", anchor: "lohahevitra6",
    titre: "LOHAHEVITRA VI — Ny fomba fiainan'ny Malagasy voalohany",
    surtitre: "LOHAHEVITRA VI", sousTitre: "NY FOMBA FIAINAN'NY MALAGASY VOALOHANY",
    image: "images/img_s25.png",
    seances: mkSeances(lh6Seances), data: lh6Seances,
  },
  {
    lh: "VII", anchor: "lohahevitra7",
    titre: "LOHAHEVITRA VII — Ny fivoaran'ny fandaminana ara-politika teto Madagasikara",
    surtitre: "LOHAHEVITRA VII", sousTitre: "NY FIVOARAN'NY FANDAMINANA ARA-POLITIKA TETO MADAGASIKARA (TAONJATO V - 1896)",
    image: "images/img_s29.png",
    seances: mkSeances(lh7Seances), data: lh7Seances,
  },
  {
    lh: "FA", anchor: "fanadinanaakapobeny",
    titre: "FANADINANA AKAPOBENY — Fiafaran'ny taona",
    surtitre: "FANADINANA AKAPOBENY", sousTitre: "NY FANDAHARAM-PIANARANA MANONTOLO",
    image: null,
    seances: [{ numero: FD.S32.numero, titre: FD.S32.titre, anchor: anchorOf(32), type: "fanadinana" }],
    data: [FD.S32],
  },
];

const tovanaToc = [
  { titre: "Tovana 1 — Frizy famintinana", anchor: "tovana1" },
  { titre: "Tovana 2 — Fafan'ireo vanim-potoana sy ny dingana malagasy", anchor: "tovana2" },
  { titre: "Tovana 3 — Ireo sigla", anchor: "tovana3" },
  { titre: "Tovana 4 — Rakibolana", anchor: "tovana4" },
  { titre: "Tovana 5 — Sari-tany", anchor: "tovana5" },
  { titre: "Tovana 6 — Taratasy fizahan-toetra", anchor: "tovana6" },
  { titre: "Tovana 7 — Fanondroana (index)", anchor: "tovana7" },
  { titre: "Tovana 8 — Bibliografia, webografia ary lisitry ny sary", anchor: "tovana8" },
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
  if (u.lh !== "FA") {
    children.push(...FM.buildPejinLohahevitra(u, ROOT));
  } else {
    children.push(B.p("", { size: 24, spacingAfter: 600 }));
    children.push(B.heading("FANADINANA AKAPOBENY", { anchorId: "fanadinanaakapobeny", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));
    children.push(B.p("Ny fandaharam-pianarana manontolo : tantara am-bava \u2022 vanim-potoana \u2022 Andro Taloha \u2022 Andro Antenatenany \u2022 vahoaka malagasy \u2022 lova \u2022 fandaminana ara-politika", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 200 }));
    children.push(B.p("Alohan'ny hanombohana : vakio indray ny taratasy fizahan-toetra, jereo ny fafan'ny mpianatra, ary omano ny fitaovanao. Mirary soa !", { italics: true, size: 24, align: AlignmentType.CENTER, spacingAfter: 200 }));
    children.push(B.pageBreak());
  }
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
children.push(B.p("Frizy \u2022 Vanim-potoana \u2022 Sigla \u2022 Rakibolana \u2022 Sari-tany \u2022 Fizahan-toetra \u2022 Fanondroana \u2022 Bibliografia", {
  size: 24, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(B.pageBreak());
children.push(...AX.annexe1(ROOT));
children.push(...AX.annexe2());
children.push(...AX.annexe3());
children.push(...AX.annexe4());
children.push(...AX.annexe5(ROOT));
children.push(...AX.annexe6());
children.push(...AX.annexe7());
children.push(...AX.annexe8(SARY.list().map(f => ({ legende: `Sary ${f.num} — ${f.legende}`, anchor: f.anchor }))));

// ---------- taratasy ----------
const { Footer, PageNumber } = require("docx");
const footerPage = new Footer({ children: [ new B.Paragraph({
  alignment: AlignmentType.CENTER,
  children: [ new B.TextRun({ children: [PageNumber.CURRENT], size: 20, font: B.FONT, color: "666666" }) ],
}) ] });

const doc = new B.Document({
  creator: "J-Learn (J-Lab Madagascar) — j.lab.mdg@gmail.com",
  title: "Boky Tantara T7 — J-Learn, Édition 2026",
  subject: "Tantara (Histoire) — kilasy T7 (5e)",
  description: "Boky fianarana Tantara T7 : takela-panomanan-desona, lesona, fanazaran-tena, fanadinana ary tovana — mifanaraka amin'ny PE T7 ofisialy.",
  keywords: "Tantara, T7, J-Learn, Madagasikara, manuel scolaire",
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
  const out = path.join(outDir, "Manuel_Tantara_T7_JLearn_V1.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
