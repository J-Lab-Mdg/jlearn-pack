// ============================================================
// assemble.js — assemblage final du manuel SVT T8 (4e)
// ============================================================
const fs = require("fs");
const path = require("path");
const {
  Document, Paragraph, TextRun, AlignmentType, PageBreak,
  Table, TableRow, TableCell, WidthType, BorderStyle, ShadingType,
  BookmarkStart, BookmarkEnd, InternalHyperlink,
} = require("docx");

const B = require("./builders");
const EB = require("./exercise-bank");
const { generateSeanceDocContent } = require("./seance-generator");
const U1 = require("./data-unite1");
const U2 = require("./data-unite2");
const U3 = require("./data-unite3");
const { revisions, examens } = require("./data-evaluations");
const { IMG, REVISION_IMAGES, EXAM_IMAGES, ANNEXE_IMAGES, apply } = require("./image-mapping");

const UNITS = [U1, U2, U3].map((u) => {
  u.topics = apply(u.num, u.topics);
  return u;
});
const TOTAL = 37;
const IMG_DIR = path.join(__dirname, "..", "output", "images");

function resolveImg(img) {
  if (!img || !img.file) return null;
  const file = path.join(IMG_DIR, img.file);
  return fs.existsSync(file) ? { ...img, file } : null;
}
function resolveImgs(list) {
  return (list || []).map(resolveImg).filter(Boolean);
}

// ------------------------------------------------------------
// Couverture
// ------------------------------------------------------------
function coverPage() {
  return [
    B.p("", { size: 24 }),
    B.p("Collection J-Learn", { bold: true, size: 28, align: AlignmentType.CENTER, color: B.BLUE, spacingAfter: 400 }),
    B.p("MANUEL DE SCIENCES DE LA VIE ET DE LA TERRE", { bold: true, size: 34, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 120 }),
    B.p("CLASSE DE T8 (4e)", { bold: true, size: 30, align: AlignmentType.CENTER, spacingAfter: 200 }),
    B.p("Programme d'Études — 5 unités thématiques", { size: 24, align: AlignmentType.CENTER, spacingAfter: 300 }),
    B.p("Fiches de préparation · Leçons · Exercices corrigés · Sujets d'examen corrigés", { size: 20, align: AlignmentType.CENTER, spacingAfter: 600 }),
    B.p("Madagascar", { size: 22, align: AlignmentType.CENTER, spacingAfter: 60 }),
    new Paragraph({ children: [new PageBreak()] }),
  ];
}

// ------------------------------------------------------------
// Avant-propos
// ------------------------------------------------------------
function avantPropos() {
  const out = [];
  out.push(B.sectionHeading("AVANT-PROPOS", "avant", { size: 26 }));
  out.push(B.p("Ce manuel de Sciences de la vie et de la terre pour la classe de T8 (4e) a été élaboré à partir du Programme d'Études officiel de Madagascar, section « Sciences de la vie et de la terre ». Il couvre les trois thématiques du programme : la santé et le bien-être (appareil digestif), la reproduction humaine, les maladies infectieuses, l'organisation des êtres vivants et la géologie.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Chaque séance est composée d'une fiche de préparation, d'une leçon, d'exercices notés et de leur corrigé. Le manuel suit la méthode J-Learn organisée en trois grandes étapes : la Révision, la Nouvelle Leçon et l'Évaluation. Le découpage horaire est laissé à l'appréciation de l'enseignant, conformément aux orientations pédagogiques du programme.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Conformément au Programme d'Études, les séances privilégient une approche constructiviste : l'apprenant observe, manipule, questionne et construit lui-même ses savoirs. Les activités sont conçues pour favoriser le travail de groupe et les échanges entre pairs, avec la démarche scientifique et le vocabulaire de la discipline.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Les séances sont regroupées en trois unités, une par thématique du programme. Chaque unité se termine par une séance de révision et un « Sujet d'examen 4e » corrigé, avec barème.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Pour bien utiliser ce manuel, se reporter au « Mode d'emploi » qui suit.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Mode d'emploi
// ------------------------------------------------------------
function modeEmploi() {
  const out = [];
  out.push(B.sectionHeading("MODE D'EMPLOI", "mode", { size: 26 }));
  out.push(B.p("Comment est construite chaque séance ?", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.p("I. Révision — questions simples sur la séance précédente, avec la réponse attendue (R.A.).", { size: 21, spacingAfter: 60 }));
  out.push(B.p("II. Nouvelle leçon — six sous-étapes : 1. Mise en situation, 2. Présentation, 3. Observation, 4. Analyse, 5. Synthèse (énoncée par l'enseignant), 6. Application.", { size: 21, spacingAfter: 60 }));
  out.push(B.p("III. Évaluation — exercices écrits, avec corrigé.", { size: 21, spacingAfter: 100 }));
  out.push(B.p("La durée de chaque grande étape n'est pas indiquée : elle est laissée à l'enseignant selon le rythme de la classe, le niveau des apprenants et le matériel disponible.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Après la fiche de préparation viennent la page LEÇON (le contenu à retenir) puis la section EXERCICES (exercices notés avec barème, suivis du corrigé détaillé).", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Code couleur utilisé dans ce manuel :", { bold: true, size: 22, color: B.GREEN, spacingAfter: 80 }));
  out.push(B.pHighlight("Titre de leçon", [], B.RED, { size: 21, spacingAfter: 40 }));
  out.push(B.pHighlight("Sous-titres", [], B.GREEN, { size: 21, spacingAfter: 40 }));
  out.push(B.pHighlight("Mots clés de la leçon", [], B.BLUE, { size: 21, spacingAfter: 40 }));
  out.push(B.pHighlight("Corrigé des exercices", [], B.PINK, { size: 21, spacingAfter: 40 }));
  out.push(B.p("Texte courant : noir, police Times New Roman.", { size: 21, spacingAfter: 120 }));
  out.push(B.p("Types d'exercices utilisés (jamais nommés dans les consignes) : QCM, Vrai/Faux, texte à trous, question/réponse, appariement, complétion. Chaque exercice de la section EXERCICES est noté selon un barème ; le total est affiché.", { size: 21, spacingAfter: 120 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Sommaire interactif
// ------------------------------------------------------------
function tableDesMatieres() {
  const out = [];
  out.push(B.sectionHeading("TABLE DES MATIÈRES", null, { size: 26 }));
  out.push(B.tocLink("Avant-propos", "avant", { size: 22, bold: true }));
  out.push(B.tocLink("Mode d'emploi", "mode", { size: 22, bold: true }));
  let n = 0;
  UNITS.forEach((u) => {
    const anchorU = "unite" + u.num;
    out.push(B.tocLink("UNITÉ " + u.num + " — " + u.titre, anchorU, { size: 22, bold: true, indent: 0 }));
    u.topics.forEach((t) => {
      n += 1;
      out.push(B.tocLink("Séance " + n + " — " + t.titre, "seance" + n, { size: 19, indent: 360 }));
    });
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + revisions[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
    n += 1;
    out.push(B.tocLink("Séance " + n + " — " + examens[u.num].titre, "seance" + n, { size: 19, indent: 360 }));
  });
  out.push(B.tocLink("Annexes", "annexes", { size: 22, bold: true }));
  out.push(B.tocLink("Glossaire", "glossaire", { size: 19, indent: 360 }));
  out.push(B.tocLink("Auto-évaluation", "autoeval", { size: 19, indent: 360 }));
  out.push(B.tocLink("Index", "index", { size: 19, indent: 360 }));
  out.push(B.tocLink("Évaluations format examen", "evalexamen", { size: 19, indent: 360 }));
  out.push(B.tocLink("Table des illustrations", "illus", { size: 19, indent: 360 }));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Tableau de bord d'une unité
// ------------------------------------------------------------
function tableauDeBord(u, startNum) {
  const out = [];
  out.push(B.sectionHeading("UNITÉ " + u.num + " — " + u.titre, "unite" + u.num, { size: 26 }));
  out.push(B.p("Résultat d'apprentissage spécifique (PE T8) : " + u.ras, { size: 20, spacingAfter: 60 }));
  out.push(B.p("Valeurs à véhiculer : " + u.valeurs, { size: 20, spacingAfter: 100 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("N°", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("Séance", { bold: true, size: 19 })], { shading: "D9E2F3", colSpan: 2 }),
    ]}),
  ];
  let n = startNum;
  u.topics.forEach((t) => {
    rows.push(new TableRow({ children: [
      B.cell([B.p("" + (n), { size: 19 })]),
      B.cell([B.p(t.titre, { size: 19 })], { colSpan: 2 }),
    ]}));
    n += 1;
  });
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + (n), { size: 19, bold: true })]),
    B.cell([B.p(revisions[u.num].titre, { size: 19, bold: true })], { colSpan: 2 }),
  ]}));
  n += 1;
  rows.push(new TableRow({ children: [
    B.cell([B.p("" + (n), { size: 19, bold: true })]),
    B.cell([B.p(examens[u.num].titre, { size: 19, bold: true })], { colSpan: 2 }),
  ]}));
  out.push(B.gridTable(rows, [10, 45, 45]));
  out.push(new Paragraph({ children: [new PageBreak()] }));
  return out;
}

// ------------------------------------------------------------
// Séance de révision
// ------------------------------------------------------------
function revisionSeance(u, num) {
  const rev = revisions[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(rev.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 90 }));
  const rimg = resolveImg(REVISION_IMAGES[u.num]);
  if (rimg) out.push(...B.imageParas(rimg.file, rimg.legende));
  out.push(B.p("Tableau récapitulatif des notions", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  const rows = [
    new TableRow({ children: [
      B.cell([B.p("Notion", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("L'essentiel", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ]}),
  ];
  rev.tableau.forEach(([n, e]) => rows.push(new TableRow({ children: [
    B.cell([B.p(n, { size: 19, bold: true })]),
    B.cell([B.p(e, { size: 19 })]),
  ]})));
  out.push(B.gridTable(rows, [35, 65]));
  out.push(B.p("Questions de révision", { bold: true, size: 22, color: B.GREEN, spacingAfter: 60 }));
  rev.questions.forEach(([q, ra]) => {
    out.push(B.p(q, { size: 21, spacingAfter: 30 }));
    out.push(B.pHighlight("R.A. : " + ra, [], B.PINK, { size: 20, spacingAfter: 80 }));
  });
  return out;
}

// ------------------------------------------------------------
// Sujet d'examen
// ------------------------------------------------------------
function examenSeance(u, num) {
  const ex = examens[u.num];
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("SÉANCE " + num + " / " + TOTAL, "seance" + num, { size: 22, color: B.BLUE }));
  out.push(B.p(ex.titre, { bold: true, size: 26, align: AlignmentType.CENTER, color: B.RED, spacingAfter: 80 }));
  out.push(B.p("Durée : ____________ (laissée à l'enseignant)   ·   Barème total : " + totalPoints(ex.exercices) + " points", { size: 20, spacingAfter: 100 }));
  const exImages = resolveImgs(EXAM_IMAGES[u.num]);
  exImages.forEach((im) => out.push(...B.imageParas(im.file, im.legende)));
  let total = 0;
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    total += d.points;
    out.push(B.p("Exercice " + (i + 1) + " (" + d.points + " points)", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    out.push(B.p(exo.consigne, { italics: true, size: 19, spacingAfter: 30 }));
    d.parts.forEach((line) => out.push(B.p(line, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  out.push(B.p("TOTAL : " + total + " points", { bold: true, size: 21, align: AlignmentType.CENTER, spacingAfter: 160 }));
  out.push(B.sectionHeading("CORRIGÉ", null, { size: 24 }));
  if (exImages.length) {
    out.push(...B.imageParas(exImages[0].file, "Même figure que la question 1 — corrigé. " + exImages[0].legende));
  }
  ex.exercices.forEach((exo, i) => {
    const d = EB.buildExo(exo);
    out.push(B.p("Exercice " + (i + 1) + " — corrigé", { bold: true, size: 20, color: B.BLUE, spacingAfter: 30 }));
    d.corrige.forEach((c) => out.push(B.pHighlight(c.text, c.keys, B.PINK, { size: 19, spacingAfter: 25 })));
    out.push(B.p("", { size: 14 }));
  });
  return out;
}

function totalPoints(exos) {
  return exos.reduce((s, e) => s + EB.buildExo(e).points, 0);
}

// ------------------------------------------------------------
// Annexes
// ------------------------------------------------------------
const GLOSSAIRE = [
  ["Asepsie", "Ensemble de mesures pour empêcher les microbes d'entrer dans le corps (matériel stérile, hygiène)."],
  ["Anticorps", "Protéine produite par l'organisme qui se fixe sur un microbe et aide à le neutraliser."],
  ["Antisepsie", "Action de détruire les microbes sur une surface vivante (peau, plaie) avec un antiseptique."],
  ["Antibiotique", "Médicament qui agit contre les bactéries ; il est inefficace contre les virus."],
  ["Bactérie", "Microorganisme formé d'une cellule simple, souvent utile (fermentation) ou pathogène."],
  ["Cellule-œuf", "Première cellule d'un nouvel être, formée par l'union d'un spermatozoïde et d'un ovule."],
  ["Chaîne alimentaire", "Suite d'êtres vivants dans laquelle chacun est mangé par le suivant (producteurs → consommateurs → décomposeurs)."],
  ["Champignon", "Microorganisme (levure ou moisissure), utile pour le pain ou le fromage, parfois pathogène."],
  ["Choléra", "Maladie bactérienne transmise par l'eau ou les aliments souillés, provoquant diarrhée et déshydratation."],
  ["Cycle menstruel", "Cycle de transformations d'environ 28 jours chez la femme ; les règles correspondent à l'élimination de la muqueuse utérine."],
  ["Écosystème", "Ensemble des êtres vivants et de leur milieu physique, avec leurs interactions."],
  ["Érosion", "Usure et transport des roches et des sols par l'eau, le vent et les variations de température."],
  ["Fécondation", "Rencontre et fusion d'un spermatozoïde et d'un ovule, qui donne naissance à la cellule-œuf."],
  ["Gonade", "Organe qui produit les cellules reproductrices : testicules chez l'homme, ovaires chez la femme."],
  ["Grossesse précoce", "Grossesse survenant chez une adolescente, avec des risques scolaires, médicaux et sociaux."],
  ["Immunité", "Ensemble des défenses de l'organisme contre les microbes et les substances étrangères."],
  ["Infection microbienne", "Multiplication de microbes pathogènes dans le corps, suivie d'une réaction de l'organisme."],
  ["Lavaka", "Ravin creusé par l'érosion intense des sols, fréquent dans les Hautes Terres de Madagascar."],
  ["Microorganisme", "Être vivant très petit, invisible à l'œil nu, observable au microscope."],
  ["Paludisme", "Maladie parasitaire transmise par la piqûre d'un moustique (anophèle)."],
  ["Parasite", "Organisme qui vit aux dépens d'un hôte (ex. parasite du paludisme, vers intestinaux)."],
  ["Période de fécondité", "Période autour de l'ovulation où une fécondation est possible."],
  ["Pharmacie", "—"],
  ["Puberté", "Période de l'adolescence où le corps devient capable de se reproduire."],
  ["Prédation", "Interaction où un animal (prédateur) se nourrit d'un autre (proie)."],
  ["Prévention", "Ensemble de mesures pour éviter l'apparition ou la propagation d'une maladie."],
  ["Séisme", "Secousse du sol liée à la libération d'énergie dans la croûte terrestre."],
  ["Sérum", "Préparation contenant des anticorps déjà formés, donnant une protection immédiate mais courte."],
  ["Soi / non-soi", "Notion utilisée par le système immunitaire pour distinguer les cellules de l'organisme des éléments étrangers."],
  ["Subduction", "Plongement d'une plaque tectonique sous une autre, pouvant former des montagnes et des volcans."],
  ["Tube digestif", "Long conduit allant de la bouche à l'anus : bouche, pharynx, œsophage, estomac, intestin grêle, gros intestin."],
  ["Tuberculose", "Maladie bactérienne des poumons, transmise par la toux et les gouttelettes."],
  ["Vaccin", "Préparation qui prépare l'organisme à se défendre contre un microbe (immunité durable)."],
  ["Virus", "Particule très petite qui se multiplie à l'intérieur des cellules (grippe, rougeole, VIH)."],
  ["Voies génitales", "Canaux et organes qui transportent les cellules reproductrices et permettent le développement du bébé."],
  ["Volcanisme", "Ensemble des phénomènes liés à la montée du magma et aux éruptions volcaniques."],
];

function glossaireAnnexe() {
  const out = [];
  out.push(new Paragraph({ children: [new PageBreak()] }));
  out.push(B.sectionHeading("ANNEXES", "annexes", { size: 26 }));
  resolveImgs(ANNEXE_IMAGES).forEach((im) => out.push(...B.imageParas(im.file, im.legende)));
  out.push(B.sectionHeading("GLOSSAIRE", "glossaire", { size: 24 }));
  const rows = GLOSSAIRE.filter((g) => g[1] !== "—").map(([t, d]) => new TableRow({ children: [
    B.cell([B.p(t, { size: 19, bold: true })]),
    B.cell([B.p(d, { size: 19 })]),
  ]}));
  const header = new TableRow({ children: [
    B.cell([B.p("Terme", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    B.cell([B.p("Définition", { bold: true, size: 19 })], { shading: "D9E2F3" }),
  ]});
  out.push(B.gridTable([header, ...rows], [35, 65]));
  return out;
}

function autoEvaluationAnnexe() {
  const out = [];
  out.push(B.sectionHeading("AUTO-ÉVALUATION", "autoeval", { size: 24 }));
  out.push(B.p("Coche la case qui correspond à ton niveau après chaque unité.", { size: 20, spacingAfter: 80 }));
  const rows = [new TableRow({
    children: [
      B.cell([B.p("Compétence", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("Acquis", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("En cours", { bold: true, size: 19 })], { shading: "D9E2F3" }),
      B.cell([B.p("À revoir", { bold: true, size: 19 })], { shading: "D9E2F3" }),
    ],
  })];
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      rows.push(new TableRow({
        children: [
          B.cell([B.p("Unité " + u.num + " — " + t.titre, { size: 19 })]),
          B.cell([B.p("☐", { size: 19 })]),
          B.cell([B.p("☐", { size: 19 })]),
          B.cell([B.p("☐", { size: 19 })]),
        ],
      }));
    });
  });
  out.push(B.gridTable(rows, [55, 15, 15, 15]));
  return out;
}

function buildIndex() {
  const entries = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      (t.motsCles || []).forEach((m) => entries.push([m, n]));
    });
    n += 2;
  });
  const map = new Map();
  entries.forEach(([m, s]) => {
    if (!map.has(m)) map.set(m, []);
    if (!map.get(m).includes(s)) map.get(m).push(s);
  });
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], "fr", { sensitivity: "base" }));
}

function indexAnnexe() {
  const out = [];
  out.push(B.sectionHeading("INDEX", "index", { size: 24 }));
  const entries = buildIndex();
  entries.forEach(([m, seances]) => {
    const links = seances.map((s) => new InternalHyperlink({
      anchor: "seance" + s,
      children: [new TextRun({ text: "Séance " + s + "  ", size: 19, color: B.BLUE, font: B.FONT })],
    }));
    out.push(new Paragraph({
      spacing: { after: 40 },
      children: [new TextRun({ text: m + "  :  ", bold: true, size: 19, font: B.FONT }), ...links],
    }));
  });
  return out;
}

function evalExamenAnnexe() {
  const out = [];
  out.push(B.sectionHeading("ÉVALUATIONS FORMAT EXAMEN", "evalexamen", { size: 24 }));
  out.push(B.p("Les sujets d'examen 4e de chaque unité sont regroupés ci-dessous pour préparer les évaluations.", { size: 20, spacingAfter: 80 }));
  let n = 0;
  UNITS.forEach((u) => {
    n += u.topics.length + 2;
    out.push(B.tocLink("Unité " + u.num + " — " + examens[u.num].titre, "seance" + n, { size: 20 }));
  });
  return out;
}

function tableIllustrations() {
  const images = [];
  let n = 0;
  UNITS.forEach((u) => {
    u.topics.forEach((t) => {
      n += 1;
      (t.images || []).forEach((im) => images.push([im.legende || t.titre, "seance" + n]));
    });
    n += 1;
    const rimg = REVISION_IMAGES[u.num];
    if (rimg) images.push([rimg.legende || "Bilan " + u.num, "seance" + n]);
    n += 1;
    (EXAM_IMAGES[u.num] || []).forEach((im) => images.push([im.legende || "Examen " + u.num, "seance" + n]));
  });
  ANNEXE_IMAGES.forEach((im) => images.push([im.legende || "Annexes", "annexes"]));
  if (!images.length) return [];
  const out = [];
  out.push(B.sectionHeading("TABLE DES ILLUSTRATIONS", "illus", { size: 24 }));
  images.forEach(([titre, anchor]) => {
    out.push(B.tocLink(titre, anchor, { size: 19 }));
  });
  return out;
}

// ------------------------------------------------------------
// Assemblage final
// ------------------------------------------------------------
function assemble() {
  const children = [
    ...coverPage(),
    ...avantPropos(),
    ...modeEmploi(),
    ...tableDesMatieres(),
  ];
  let n = 0;
  UNITS.forEach((u) => {
    children.push(...tableauDeBord(u, n + 1));
    u.topics.forEach((t) => {
      n += 1;
      t.images = resolveImgs(t.images);
      t.exoImage = resolveImg(t.exoImage);
      t.corrigeImage = resolveImg(t.corrigeImage);
      children.push(...generateSeanceDocContent(t, n, TOTAL));
    });
    n += 1;
    children.push(...revisionSeance(u, n));
    n += 1;
    children.push(...examenSeance(u, n));
  });
  children.push(
    ...glossaireAnnexe(),
    ...autoEvaluationAnnexe(),
    ...indexAnnexe(),
    ...evalExamenAnnexe(),
    ...tableIllustrations(),
  );
  const doc = new Document({
    styles: { default: { document: { run: { font: "Times New Roman", size: 20 } } } },
    sections: [{
      properties: { page: { margin: { top: 900, bottom: 900, left: 1000, right: 1000 } } },
      children,
    }],
  });
  return doc;
}

module.exports = { assemble, buildIndex };
