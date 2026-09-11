// assemble-manuel.js — assemble le manuel complet Physique-Chimie T6 J-Learn
const path = require("path");
const fs = require("fs");
const B = require("./builders");
const { buildSeance } = require("./seance-builder");
const { buildSpeciale } = require("./special-builder");
const FM = require("./front-matter");
const AX = require("./annexes");
const { AlignmentType } = require("docx");

const S1 = require("./seance01-data");
const U1 = require("./data-unite1"); // S1..S8 (S1 réimporté)
const U2 = require("./data-unite2"); // S11..S20
const U3 = require("./data-unite3"); // S23..S31
const SP = require("./data-speciales"); // S9, S10, S21, S22, S32, S33, S34

const ROOT = path.join(__dirname, "..");

// ---------- plan ----------
const unite1Seances = [...U1.seances, SP.S9, SP.S10];
const unite2Seances = [...U2.seances, SP.S21, SP.S22];
const unite3Seances = [...U3.seances, SP.S32, SP.S33];

const anchorOf = (n) => `seance${String(n).padStart(2, "0")}`;

const plan = [
  {
    unite: "I", anchor: "unite1",
    titre: "UNITÉ I — La matière : propriétés et grandeurs",
    surtitre: "UNITÉ I", sousTitre: "LA MATIÈRE : PROPRIÉTÉS ET GRANDEURS",
    image: "images/img_unite1.png",
    seances: unite1Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero) })),
    data: unite1Seances,
  },
  {
    unite: "II", anchor: "unite2",
    titre: "UNITÉ II — Électricité et magnétisme",
    surtitre: "UNITÉ II", sousTitre: "ÉLECTRICITÉ ET MAGNÉTISME",
    image: "images/img_unite2.png",
    seances: unite2Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero) })),
    data: unite2Seances,
  },
  {
    unite: "III", anchor: "unite3",
    titre: "UNITÉ III — Chaleur et température",
    surtitre: "UNITÉ III", sousTitre: "CHALEUR ET TEMPÉRATURE",
    image: "images/img_unite3.png",
    seances: unite3Seances.map(s => ({ numero: s.numero, titre: s.titre, anchor: anchorOf(s.numero) })),
    data: unite3Seances,
  },
  {
    unite: "EB", anchor: "examenblanc",
    titre: "EXAMEN BLANC DE FIN D'ANNÉE",
    surtitre: "EXAMEN BLANC", sousTitre: "TOUT LE PROGRAMME DE L'ANNÉE",
    image: null,
    seances: [{ numero: SP.S34.numero, titre: SP.S34.titre, anchor: anchorOf(34) }],
    data: [SP.S34],
  },
];

const annexesToc = [
  { titre: "Annexe 1 — Formules et grandeurs physiques", anchor: "annexe1" },
  { titre: "Annexe 2 — Tableau périodique simplifié", anchor: "annexe2" },
  { titre: "Annexe 3 — Tableaux de conversion d'unités", anchor: "annexe3" },
  { titre: "Annexe 4 — Glossaire", anchor: "annexe4" },
  { titre: "Annexe 5 — Mémo sécurité", anchor: "annexe5" },
  { titre: "Annexe 6 — Fiche d'auto-évaluation", anchor: "annexe6" },
  { titre: "Annexe 7 — Index alphabétique", anchor: "annexe7" },
  { titre: "Annexe 8 — Bibliographie, webographie et table des illustrations", anchor: "annexe8" },
];

// ---------- table des illustrations ----------
const allContenu = [...U1.seances, ...U2.seances, ...U3.seances];
const figures = allContenu
  .filter(s => s.imageLegende)
  .map(s => s.imageLegende.replace(" — ", " : ").replace(/^Figure (\d+) : /, (m, n) => `Figure ${n} — `))
  .map((l, i) => l); // légendes déjà formatées « Figure N — … »

// ---------- assemblage ----------
const children = [];

children.push(...FM.buildCouverture(ROOT));
children.push(...FM.buildAvantPropos());
children.push(...FM.buildModeEmploi());
children.push(...FM.buildSommaire(plan, annexesToc));
children.push(...FM.buildTableauBord(plan));

for (const u of plan) {
  if (u.unite !== "EB") {
    children.push(...FM.buildPageUnite(u, ROOT));
  } else {
    // page d'annonce simple pour l'examen blanc
    children.push(B.p("", { size: 20, spacingAfter: 600 }));
    children.push(B.heading("EXAMEN BLANC DE FIN D'ANNÉE", { anchorId: "examenblanc", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 120 }));
    children.push(B.p("Tout le programme : Matière • Électricité • Chaleur", { bold: true, size: 26, align: AlignmentType.CENTER, spacingAfter: 200 }));
    children.push(B.p("Avant de commencer : relis tes trois fiches d'auto-évaluation, vérifie ton tableau de bord, prépare ta règle et ta montre. Bon courage !", { italics: true, size: 22, align: AlignmentType.CENTER, spacingAfter: 200 }));
    children.push(B.pageBreak());
  }
  u.data.forEach((s, i) => {
    if (s.type === "revision" || s.type === "examen") {
      children.push(...buildSpeciale(s, ROOT));
    } else {
      children.push(...buildSeance(s, ROOT));
    }
    children.push(B.pageBreak());
  });
}

// ---------- annexes ----------
children.push(B.p("", { size: 20, spacingAfter: 600 }));
children.push(B.heading("ANNEXES", { anchorId: "annexes", size: 34, color: B.RED, align: AlignmentType.CENTER, spacingAfter: 200 }));
children.push(B.p("Formules • Tableau périodique • Conversions • Glossaire • Sécurité • Auto-évaluation • Index • Bibliographie", {
  size: 22, align: AlignmentType.CENTER, spacingAfter: 200,
}));
children.push(B.pageBreak());
children.push(...AX.annexe1());
children.push(...AX.annexe2(ROOT));
children.push(...AX.annexe3());
children.push(...AX.annexe4());
children.push(...AX.annexe5());
children.push(...AX.annexe6());
children.push(...AX.annexe7());
children.push(...AX.annexe8(figures));

// ---------- document ----------
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
  const out = path.join(outDir, "Manuel_Physique-Chimie_T6_JLearn_V1.docx");
  fs.writeFileSync(out, buf);
  console.log("OK :", out, Math.round(buf.length / 1024) + " Ko");
}).catch(e => { console.error(e); process.exit(1); });
