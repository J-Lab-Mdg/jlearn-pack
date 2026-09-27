// assemble-manuel.js — manangona ny boky Tantara T6 J-Learn manontolo
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildFiche, buildFanadinana } = require("./fiche-builder");
const FM = require("./front-matter");
const AX = require("./annexes");
const { AlignmentType } = require("docx");

const S1 = require("./fiche01-data");
const LH1 = require("./data-lh1");   // S2-S5
const LH2A = require("./data-lh2a"); // S7-S11
const LH2B = require("./data-lh2b"); // S12-S16
const LH3 = require("./data-lh3");   // S18-S20
const LH4 = require("./data-lh4");   // S22-S25
const FD = require("./data-fanadinana"); // S6, S17, S21, S26, S27

const ROOT = path.join(__dirname, "..");
const anchorOf = (n) => `seansa${String(n).padStart(2, "0")}`;

const lh1Seances = [S1, ...LH1.seances, FD.S6];
const lh2Seances = [...LH2A.seances, ...LH2B.seances, FD.S17];
const lh3Seances = [...LH3.seances, FD.S21];
const lh4Seances = [...LH4.seances, FD.S26];

const plan = [
  {
    lh: "I", anchor: "lohahevitra1",
    titre: "LOHAHEVITRA I — Fampidirana ny fianarana Tantara",
    surtitre: "LOHAHEVITRA I", sousTitre: "FAMPIDIRANA NY FIANARANA TANTARA",
    image: "images/img_seansa01.png",
    seances: lh1Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh1Seances,
  },
  {
    lh: "II", anchor: "lohahevitra2",
    titre: "LOHAHEVITRA II — Madagasikara taorian'ny fahaleovantena",
    surtitre: "LOHAHEVITRA II", sousTitre: "MADAGASIKARA TAORIAN'NY FAHALEOVANTENA",
    image: "images/img_seansa08.png",
    seances: lh2Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh2Seances,
  },
  {
    lh: "III", anchor: "lohahevitra3",
    titre: "LOHAHEVITRA III — Ny fifandraisan'i Madagasikara amin'ireo firenena afrikanina sy ireo nosy",
    surtitre: "LOHAHEVITRA III", sousTitre: "NY FIFANDRAISAN'I MADAGASIKARA AMIN'IREO FIRENENA AFRIKANINA SY IREO NOSY AO AMIN'NY RANOMASIMBE INDIANINA",
    image: "images/img_seansa18.png",
    seances: lh3Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh3Seances,
  },
  {
    lh: "IV", anchor: "lohahevitra4",
    titre: "LOHAHEVITRA IV — Ny vakoka sy ny harem-pirenena eto Madagasikara",
    surtitre: "LOHAHEVITRA IV", sousTitre: "NY VAKOKA SY NY HAREM-PIRENENA ETO MADAGASIKARA",
    image: "images/img_seansa22.png",
    seances: lh4Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero), type: s.type })),
    data: lh4Seances,
  },
  {
    lh: "FA", anchor: "fanadinanaakapobeny",
    titre: "FANADINANA AKAPOBENY — Fiafaran'ny taona",
    surtitre: "FANADINANA AKAPOBENY", sousTitre: "NY FANDAHARAM-PIANARANA MANONTOLO",
    image: null,
    seances: [{ numero: FD.S27.numero, titre: FD.S27.titre, anchor: anchorOf(27), type: "fanadinana" }],
    data: [FD.S27],
  },
];

const tovanaToc = [
  { titre: "Tovana 1 — Frizy famintinana ny tantaran'i Madagasikara", anchor: "tovana1" },
  { titre: "Tovana 2 — Ireo filoham-panjakana nifandimby", anchor: "tovana2" },
  { titre: "Tovana 3 — Ireo sigla", anchor: "tovana3" },
  { titre: "Tovana 4 — Rakibolana", anchor: "tovana4" },
  { titre: "Tovana 5 — Sari-tany", anchor: "tovana5" },
  { titre: "Tovana 6 — Taratasy fizahan-toetra", anchor: "tovana6" },
  { titre: "Tovana 7 — Fanondroana (index)", anchor: "tovana7" },
  { titre: "Tovana 8 — Bibliografia, webografia ary lisitry ny sary", anchor: "tovana8" },
];

// ---------- lisitry ny sary ----------
const allContenu = [S1, ...LH1.seances, ...LH2A.seances, ...LH2B.seances, ...LH3.seances, ...LH4.seances];
const figures = allContenu
  .filter(s => s.imageLegende)
  .map(s => ({ legende: s.imageLegende, anchor: anchorOf(s.numero) }));
figures.push({ legende: "Sary 23 — Frizy famintinana : ireo Repoblika sy ny tetezamita (1958-2026)", anchor: "tovana1" });
figures.push({ legende: "Sary 24 — Madagasikara : ireo renivohitry ny faritany enina (sary famintinana)", anchor: "tovana5" });
figures.push({ legende: "Sary 25 — Ireo nosy mpikambana ao amin'ny COI", anchor: "tovana5" });

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
    children.push(B.p("", { size: 20, spacingAfter: 600 }));
    children.push(B.heading("FANADINANA AKAPOBENY", { anchorId: "fanadinanaakapobeny", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));
    children.push(B.p("Ny fandaharam-pianarana manontolo : Tantara \u2022 Repoblika \u2022 Fifandraisana \u2022 Vakoka", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 200 }));
    children.push(B.p("Alohan'ny hanombohana : vakio indray ny taratasy fizahan-toetra, jereo ny fafan'ny mpianatra, ary omano ny fitaovanao. Mirary soa !", { italics: true, size: 22, align: AlignmentType.CENTER, spacingAfter: 200 }));
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
children.push(B.p("", { size: 20, spacingAfter: 600 }));
children.push(B.heading("TOVANA", { anchorId: "tovana", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 200 }));
children.push(B.p("Frizy \u2022 Filoham-panjakana \u2022 Sigla \u2022 Rakibolana \u2022 Sari-tany \u2022 Fizahan-toetra \u2022 Fanondroana \u2022 Bibliografia", {
  size: 22, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(B.pageBreak());
children.push(...AX.annexe1(ROOT));
children.push(...AX.annexe2());
children.push(...AX.annexe3());
children.push(...AX.annexe4());
children.push(...AX.annexe5(ROOT));
children.push(...AX.annexe6());
children.push(...AX.annexe7());
children.push(...AX.annexe8(figures));

// ---------- taratasy ----------
const doc = new B.Document({
  styles: {
    default: { document: { run: { font: B.FONT, size: 22 } } },
    characterStyles: [{
      id: "Hyperlink", name: "Hyperlink", basedOn: "DefaultParagraphFont",
      run: { color: "0563C1", underline: {} },
    }],
  },
  sections: [{
    properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
    children,
  }],
});

B.Packer.toBuffer(doc).then(buf => {
  const outDir = path.join(ROOT, "livrables");
  fs.mkdirSync(outDir, { recursive: true });
  const out = path.join(outDir, "Manuel_Tantara_T6_JLearn_V1.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
