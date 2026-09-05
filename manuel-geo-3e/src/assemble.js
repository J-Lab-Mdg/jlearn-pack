// Assemblage du manuel Géographie 3e J-Learn — V2
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, Table, TableRow, WidthType, AlignmentType, Footer, PageNumber, TableLayoutType } = require("docx");
const B = require("./builders");
const { buildSeance, DUREE } = require("./seance-generator");
const annexes = require("./data-annexes");

const ASSETS = path.join(__dirname, "..", "assets");
const OUT = path.join(__dirname, "..", "output");
fs.mkdirSync(OUT, { recursive: true });

const ALL_UNITES = [
  { num: 1, titre: "Les conditions et les caractères de l'économie malagasy", semaines: 6, data: require("./data-unite1") },
  { num: 2, titre: "Les activités agricoles", semaines: 8, data: safeRequire("./data-unite2") },
  { num: 3, titre: "Les activités industrielles", semaines: 6, data: safeRequire("./data-unite3") },
  { num: 4, titre: "Les transports, le commerce et le tourisme", semaines: 6, data: safeRequire("./data-unite4") },
].filter((u) => u.data);
const ONLY_U = process.env.ONLY ? Number(String(process.env.ONLY).replace(/\D/g, "")) : null;
const UNITES = ONLY_U ? ALL_UNITES.filter((u) => u.num === ONLY_U) : ALL_UNITES;
function safeRequire(m) { try { return require(m); } catch (e) { if (e.code === "MODULE_NOT_FOUND" && String(e.message).includes(m.slice(2))) return null; throw e; } }
const TOTAL_PREVU = 26;
const seances = UNITES.flatMap((u) => u.data);
const VERSION = process.env.VERSION || "V2";
const ONLY = process.env.ONLY ? `_${process.env.ONLY}` : "";

function couverture() {
  return [
    B.empty(1800),
    B.titled("COLLECTION J-LEARN", { size: 32 }),
    B.empty(400),
    B.titled("GÉOGRAPHIE", { size: 56, color: B.C.rouge }),
    B.titled("Classe de 3ème", { size: 36 }),
    B.empty(300),
    B.titled("Manuel complet : fiches de préparation, leçons, exercices, corrigés et sujets d'examen", { size: 24, bold: false }),
    B.empty(200),
    B.titled(`Programme officiel malgache — 4 unités thématiques, ${TOTAL_PREVU} séances`, { size: 22, bold: false }),
    B.empty(1200),
    B.titled(`Version ${VERSION} — ${ONLY ? `Unité ${ONLY_U}` : "édition complète"}`, { size: 22, bold: false }),
    B.titled("[Logo et en-tête institutionnel : à insérer par l'éditeur]", { size: 18, bold: false, color: "808080" }),
  ];
}

function avantPropos() {
  const P = (t) => B.p(t, { size: 22, align: AlignmentType.JUSTIFIED, spacingAfter: 120 });
  return [
    B.pageBreak(),
    B.titled("Avant-propos", { anchor: "avantpropos", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    P("Ce manuel de Géographie, destiné à la classe de 3ème, accompagne l'enseignant et l'élève tout au long de l'année scolaire. Il suit fidèlement le programme officiel du Ministère de l'Éducation Nationale (Direction des Curricula et des Intrants), qui organise la Géographie de 3ème autour de l'économie malgache en quatre parties : les conditions et les caractères de l'économie malagasy (6 semaines), les activités agricoles (8 semaines), les activités industrielles (6 semaines), les transports, le commerce et le tourisme (6 semaines), à raison de 2 heures par semaine."),
    P(`Le manuel compte ${TOTAL_PREVU} séances de 2 heures réparties en quatre unités. Chaque séance propose une fiche de préparation complète, une leçon rédigée et illustrée, puis des exercices notés selon un barème avec leur corrigé détaillé. Chaque unité se termine par un sujet d'examen construit sur le modèle de l'épreuve de fin de cycle (étude de document et devoir composé), avec son corrigé. Un glossaire et une bibliographie complètent l'ouvrage.`),
    P("Les données chiffrées (population, indicateurs économiques, production, commerce) ont été actualisées à partir de sources officielles récentes : INSTAT (recensement de 2018), Banque mondiale, PNUD, Nations Unies, ITIE. Toutes ces sources sont citées dans la bibliographie en fin de manuel, afin que l'enseignant puisse les consulter et les mettre à jour."),
    P("Ce manuel a été conçu pour fonctionner sans matériel particulier : un tableau noir, de la craie et le cahier de l'élève suffisent. Les documents à observer (tableaux de données, schémas) sont donnés dans la fiche pour être recopiés au tableau. Le programme officiel recommande toutefois la méthode du commentaire de documents (cartes, statistiques, graphiques) ; les enseignants qui disposent de ce matériel trouveront dans chaque fiche une note indiquant comment l'utiliser."),
    P("Cette édition a été élaborée avec le plus grand soin. Malgré toute l'attention portée à sa rédaction et à sa relecture, quelques erreurs ont pu s'y glisser : nous vous remercions par avance de votre indulgence. L'équipe J-Lab accueille avec attention tous les retours des enseignants et des élèves : signalement d'erreurs, suggestions d'amélioration ou appréciations. Vos remarques contribuent directement à l'amélioration des prochaines éditions."),
    P("Nous remercions chaleureusement les enseignants qui accompagneront leurs élèves avec ce manuel : c'est grâce à leur engagement quotidien que ce travail prend tout son sens."),
  ];
}

function modeEmploi() {
  const P = (t) => B.p(t, { size: 22, align: AlignmentType.JUSTIFIED, spacingAfter: 100, keyColor: B.C.noir });
  const L = (t) => B.p(`• ${t}`, { size: 22, indent: 360, spacingAfter: 60, keyColor: B.C.noir });
  return [
    B.pageBreak(),
    B.titled("Mode d'emploi du manuel", { anchor: "modeemploi", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    P("**1. La fiche de préparation.** Chaque séance de 2 heures est organisée en trois grandes étapes, dont la durée est indiquée :"),
    L(`**I. Révision** (${DUREE.revision}) : questions simples sur la séance précédente, posées sans support pour tester la mémoire.`),
    L(`**II. Nouvelle leçon** (${DUREE.lecon}) : six sous-étapes enchaînées sans durée imposée — 1. Mise en situation (une petite histoire ou une question proche du vécu des élèves, réponse à l'oral) ; 2. Présentation (l'enseignant annonce le titre et l'objectif) ; 3. Observation (les élèves observent en silence le document recopié au tableau) ; 4. Analyse (questions progressives, chacune suivie de sa réponse attendue) ; 5. Synthèse (énoncée par l'enseignant, commence par « Donc, … ») ; 6. Application (exercices de consolidation, corrigés collectivement).`),
    L(`**III. Évaluation** (${DUREE.evaluation}) : exercices écrits individuels.`),
    P("« **R.A.** » signifie « Réponse attendue » : c'est la réponse que l'enseignant attend des élèves. Dans la fiche, les exercices ne portent pas de note ; le barème n'apparaît que dans la section EXERCICES qui suit la leçon."),
    P("**2. Le document à observer.** Pour que le manuel soit utilisable partout, le document de chaque séance est un petit tableau de données ou un schéma simple à recopier au tableau noir avant le cours. Le programme officiel de Géographie recommande la **méthode du commentaire de documents** : si vous disposez d'une carte murale, d'un atlas, d'un manuel illustré, de photographies ou de statistiques récentes, faites-les observer et décrire par les élèves à la place ou en complément du tableau recopié ; les questions de l'Analyse restent les mêmes. La colonne « Observation » de la fiche rappelle cette possibilité et signale ce que les élèves doivent remarquer."),
    P("**3. La leçon.** C'est le texte que l'élève doit retenir. Code couleur : titre de la leçon en **rouge**, sous-titres en **vert**, mots clés en **bleu et gras**, texte courant en noir. Les illustrations (cartes schématiques, graphiques) accompagnent la lecture mais ne sont pas indispensables au déroulement de la séance."),
    P("**4. Les exercices.** Les exercices de la fiche sont repris après la leçon dans la section EXERCICES, notés sur 20 points, avec un corrigé détaillé dont les mots clés sont en **rose saumon**. Les types d'exercices varient d'une séance à l'autre (questions à choix, vrai ou faux, textes à compléter, appariements, questions rédigées, calculs simples)."),
    P("**5. Les sujets d'examen.** À la fin de chaque unité, un sujet complet d'une heure (étude de document + devoir composé) prépare les élèves à l'épreuve de fin de cycle, avec un corrigé et son barème."),
  ];
}

function sommaire() {
  const out = [B.pageBreak(), B.titled("Table des matières", { anchor: "sommaire", size: 30, color: B.C.rouge, align: AlignmentType.LEFT })];
  out.push(B.tocLink("Avant-propos", "avantpropos"));
  out.push(B.tocLink("Mode d'emploi du manuel", "modeemploi"));
  out.push(B.tocLink("Tableau de bord du manuel", "tableaubord"));
  UNITES.forEach((u) => {
    out.push(B.tocLink(`Unité ${u.num} — ${u.titre}`, `unite${u.num}`, { size: 24 }));
    u.data.forEach((s) => out.push(B.tocLink(`Séance ${s.num} — ${s.titre}`, `seance${s.num}`, { indent: 480 })));
    if (annexes.sujets[u.num]) out.push(B.tocLink(`Sujet d'examen 3e — Unité ${u.num}`, `sujet${u.num}`, { indent: 480 }));
  });
  out.push(B.tocLink("Glossaire", "glossaire"));
  out.push(B.tocLink("Bibliographie et webographie (Loharanom-Baovao)", "biblio"));
  out.push(B.tocLink("Table des illustrations", "illustrations"));
  return out;
}

function tableauBord() {
  const rows = UNITES.map((u) => [`Unité ${u.num} — ${u.titre}`, `${u.semaines} semaines × 2 h`, `${u.data.length} séances (n° ${u.data[0].num} à ${u.data[u.data.length - 1].num})`, annexes.sujets[u.num] ? "1 sujet" : "—"]);
  return [
    B.pageBreak(),
    B.titled("Tableau de bord du manuel", { anchor: "tableaubord", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    B.p("Répartition des séances selon le volume horaire du programme officiel (2 heures par semaine).", { size: 22, italic: true }),
    ...B.dataTable(["Unité", "Programme officiel", "Séances", "Sujet d'examen"], rows, { widths: [4200, 1800, 2400, 1400], size: 20 }),
    B.p(`Total : ${seances.length} séances de 2 heures sur les ${TOTAL_PREVU} prévues par le programme (26 semaines), ${Object.keys(annexes.sujets).length} sujets d'examen, un glossaire de ${annexes.glossaire.length} mots et une bibliographie de ${annexes.bibliographie.length} rubriques. Chaque séance comprend une fiche de préparation, une leçon, quatre exercices corrigés.`, { size: 20, italic: true, spacingBefore: 120 }),
  ];
}

function pageUnite(u) {
  return [
    B.pageBreak(), B.empty(2400),
    B.titled(`UNITÉ ${u.num}`, { anchor: `unite${u.num}`, size: 40 }),
    B.titled(u.titre, { size: 32, color: B.C.rouge }),
    B.empty(200),
    B.titled(`${u.semaines} semaines de 2 heures — ${u.data.length} séances`, { size: 24, bold: false }),
    B.empty(300),
    ...u.data.map((s) => B.p(`Séance ${s.num} — ${s.titre}`, { size: 22, align: AlignmentType.CENTER, spacingAfter: 60 })),
  ];
}

function sujetExamen(n) {
  const S = annexes.sujets[n]; if (!S) return [];
  const out = [B.pageBreak(), B.titled(S.titre, { anchor: `sujet${n}`, size: 26, color: B.C.rouge, align: AlignmentType.LEFT }),
    B.p(`Durée : ${S.duree} — Barème total : ${S.total} points`, { size: 22, italic: true, spacingAfter: 160 })];
  S.parties.forEach((pt) => {
    out.push(B.p(`**${pt.titre}**`, { size: 24, keyColor: B.C.vert, spacingBefore: 160 }));
    pt.document.forEach((d) => out.push(B.p(d, { size: 22, align: AlignmentType.JUSTIFIED })));
    pt.questions.forEach(([q]) => out.push(B.p(q, { size: 22, indent: 360 })));
  });
  out.push(B.p("**CORRIGÉ**", { size: 24, keyColor: B.C.corrige, spacingBefore: 240 }));
  S.parties.forEach((pt) => {
    out.push(B.p(`**${pt.titre}**`, { size: 22, keyColor: B.C.noir, spacingBefore: 120 }));
    pt.questions.forEach(([q, r]) => { out.push(B.p(q.split(" (")[0], { size: 22, italic: true, indent: 360, spacingAfter: 20 })); out.push(B.p(r, { size: 22, keyColor: B.C.corrige, indent: 360, align: AlignmentType.JUSTIFIED })); });
  });
  return out;
}

function glossaire() {
  return [B.pageBreak(), B.titled("Glossaire", { anchor: "glossaire", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    ...annexes.glossaire.map(([m, d]) => B.p(`**${m}** — ${d}`, { size: 22, keyColor: B.C.bleu, align: AlignmentType.JUSTIFIED }))];
}
function biblio() {
  return [B.pageBreak(), B.titled("Bibliographie et webographie (Loharanom-Baovao)", { anchor: "biblio", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    B.p("Sources utilisées pour actualiser et vérifier les données du manuel. Les chiffres sont arrondis pour la classe ; consulter les sources pour les valeurs exactes et les mises à jour.", { size: 22, italic: true }),
    ...annexes.bibliographie.map(([t, d]) => B.p(`**${t}.** ${d}`, { size: 22, keyColor: B.C.noir, align: AlignmentType.JUSTIFIED }))];
}
function tableIllustrations() {
  const out = [B.pageBreak(), B.titled("Table des illustrations", { anchor: "illustrations", size: 30, color: B.C.rouge, align: AlignmentType.LEFT })];
  seances.forEach((s) => {
    const figs = [];
    if (s.image) figs.push(s.image.legende);
    s.lecon.forEach((b) => { if (b && b.t === "fig") figs.push(b.legende); });
    figs.forEach((l) => out.push(B.tocLink(`Séance ${s.num} — ${l}`, `lecon${s.num}`)));
  });
  return out;
}

// ---------- document ----------
const children = [
  ...couverture(), ...avantPropos(), ...modeEmploi(), ...sommaire(), ...tableauBord(),
  ...UNITES.flatMap((u) => [...pageUnite(u), ...u.data.flatMap((s) => buildSeance(s, TOTAL_PREVU, ASSETS)), ...sujetExamen(u.num)]),
  ...glossaire(), ...biblio(), ...tableIllustrations(),
];

const doc = new Document({
  creator: "J-Lab — Collection J-Learn",
  title: "Manuel de Géographie — Classe de 3ème",
  styles: {
    default: { document: { run: { font: B.FONT, size: 22 } } },
    paragraphStyles: [{ id: "Hyperlink", name: "Hyperlink", basedOn: "Normal", run: { color: "0563C1", underline: {}, font: B.FONT } }],
    characterStyles: [{ id: "Hyperlink", name: "Hyperlink", run: { color: "0563C1", underline: {}, font: B.FONT } }],
  },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Collection J-Learn — Géographie 3ème — page ", size: 18, font: B.FONT }), new TextRun({ children: [PageNumber.CURRENT], size: 18, font: B.FONT })] })] }) },
    children,
  }],
});

const file = path.join(OUT, `Manuel_Geographie_3e_${VERSION}${ONLY}.docx`);
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(file, buf); console.log("écrit :", file, (buf.length / 1024).toFixed(0), "Ko"); });
