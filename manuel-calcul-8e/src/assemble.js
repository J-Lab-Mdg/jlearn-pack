// Assemblage du manuel Calcul 8e J-Learn — V2
// usage : node src/assemble.js            → output/Manuel_Calcul_8e_V2.docx
//         ONLY=1-19 node src/assemble.js  → séances 1 à 19 seulement (output/Manuel_Calcul_8e_V2_1-19.docx)
const fs = require("fs");
const path = require("path");
const { Document, Packer, Paragraph, TextRun, AlignmentType, Footer, PageNumber } = require("docx");
const B = require("./builders");
const { buildSeance } = require("./seance-generator");
const { loadSeances } = require("./load");
const { TRIMESTRES } = require("./progression");

const OUT = path.join(__dirname, "..", "output");
fs.mkdirSync(OUT, { recursive: true });

const ALL = loadSeances();
const TOTAL = ALL.length;
let ONLY = process.env.ONLY || "";
let seances = ALL;
if (ONLY) { const [a, b] = ONLY.split("-").map(Number); seances = ALL.filter((s) => s.num >= a && s.num <= (b || a)); }
const VERSION = process.env.VERSION || "V2";
const trimestres = TRIMESTRES.map((t) => ({ ...t, seances: seances.filter((s) => s.num >= t.de && s.num <= t.a) })).filter((t) => t.seances.length);

function couverture() {
  return [
    B.empty(1800), B.titled("COLLECTION J-LEARN", { size: 32 }), B.empty(400),
    B.titled("CALCUL", { size: 56, color: B.C.rouge }), B.titled("Classe de 8ème", { size: 36 }), B.empty(300),
    B.titled("Manuel complet : fiches de préparation, leçons, exercices et corrigés détaillés", { size: 24, bold: false }), B.empty(200),
    B.titled(`Programme officiel malgache — ${TOTAL} séances réparties sur 3 trimestres`, { size: 22, bold: false }), B.empty(1200),
    B.titled(`Version ${VERSION}${ONLY ? ` — séances ${ONLY}` : " — édition complète"}`, { size: 22, bold: false }),
    B.titled("[Logo et en-tête institutionnel : à insérer par l'éditeur]", { size: 18, bold: false, color: "808080" }),
  ];
}
function avantPropos() {
  const P = (t) => B.p(t, { size: 22, align: AlignmentType.JUSTIFIED, spacingAfter: 120 });
  return [
    B.pageBreak(), B.titled("Avant-propos", { anchor: "avantpropos", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    P("Ce manuel de Calcul, destiné à la classe de 8ème, accompagne l'enseignant et l'élève tout au long de l'année scolaire. Il suit le programme officiel du Ministère de l'Éducation Nationale et la progression du guide pédagogique de la 8ème : numération (jusqu'aux milliards, nombres décimaux, fractions), opérations (addition, soustraction, multiplication, division et leurs preuves), mesures (longueur, masse, capacité, aire, volume, temps), géométrie (droites, angles, figures planes, cube et parallélépipède) et problèmes de la vie courante (échanges, budget, épargne, proportionnalité, partages)."),
    P(`Le manuel compte ${TOTAL} séances. Chaque séance propose une fiche de préparation complète, une leçon rédigée et illustrée, puis des exercices d'application et d'évaluation avec leur corrigé détaillé. Dans cette édition, les leçons ont été enrichies : chaque notion est expliquée pas à pas sous forme de « Méthode », les tableaux de numération et de conversion accompagnent chaque nombre, les opérations sont posées en colonnes ou à la potence, les formules sont encadrées puis appliquées, et la preuve par 9 vérifie chaque multiplication et chaque division.`),
    P("Dix séances issues du guide pédagogique ont été ajoutées à la progression d'origine : le choix de l'opération dans un problème, les multiples du mètre, la division à deux chiffres au diviseur, les unités d'aire et les mesures agraires, les situations multiplicatives, les fractions décimales, la mesure du temps (jour, semaine, mois, année), la relation volume-capacité-masse, et deux séances de problèmes de synthèse et de géométrie."),
    P("Ce manuel a été conçu pour fonctionner sans matériel particulier : un tableau noir, de la craie, une règle, une équerre et le cahier de l'élève suffisent. Les situations proposées sont tirées de la vie quotidienne malgache (marché, rizière, taxi-brousse, épargne, cantine) et les prix sont exprimés en ariary (Ar)."),
    P("Cette édition a été élaborée avec le plus grand soin. Malgré toute l'attention portée à sa rédaction et à sa relecture, quelques erreurs ont pu s'y glisser : nous vous remercions par avance de votre indulgence. L'équipe J-Lab accueille avec attention tous les retours des enseignants et des élèves : signalement d'erreurs, suggestions d'amélioration ou appréciations."),
    P("Nous remercions chaleureusement les enseignants qui accompagneront leurs élèves avec ce manuel : c'est grâce à leur engagement quotidien que ce travail prend tout son sens."),
  ];
}
function modeEmploi() {
  const P = (t) => B.p(t, { size: 22, align: AlignmentType.JUSTIFIED, spacingAfter: 100, keyColor: B.C.noir });
  const L = (t) => B.p(`• ${t}`, { size: 22, indent: 360, spacingAfter: 60, keyColor: B.C.noir });
  return [
    B.pageBreak(), B.titled("Comment utiliser ce manuel", { anchor: "modeemploi", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    P("**1. La fiche de préparation.** Chaque séance est organisée en trois étapes : **I. Révision** (5 min, calcul mental ou questions sur la séance précédente), **II. Nouvelle leçon** (25 min : mise en situation, présentation, observation, analyse, synthèse, application) et **III. Évaluation** (exercices écrits individuels, généralement à la séance suivante). « **R.A.** » signifie « Réponse attendue ». Dans la fiche, les réponses des exercices sont données en abrégé ; le corrigé détaillé se trouve dans la section EXERCICES."),
    P("**2. La leçon.** C'est le texte que l'élève doit retenir. Code couleur : titre en **rouge**, sous-titres en **vert**, mots clés en **bleu et gras**. Les blocs suivants reviennent dans toutes les leçons :"),
    L("**Méthode** (bandeau vert) : les étapes à suivre, dans l'ordre, pour effectuer une opération, une conversion ou une construction. Quand plusieurs façons de faire existent, elles sont numérotées Méthode 1, Méthode 2…"),
    L("**Formule** (cadre jaune à bordure orange) : la formule en toutes lettres, sa forme abrégée, puis son application avec les nombres de l'exemple et le résultat avec son unité."),
    L("**Attention** (cadre rouge) : l'erreur fréquente à éviter."),
    L("**À retenir** (cadre vert) : l'essentiel de la leçon en deux ou trois lignes."),
    P("**3. Les tableaux.** Le **tableau de numération** (classes des milliards, millions, mille, unités, puis dixièmes, centièmes, millièmes) accompagne chaque nombre à lire, écrire ou comparer, y compris les nombres décimaux. Le **tableau de conversion** porte des flèches au-dessus des unités : vers la droite on multiplie (on ajoute des 0 ou on déplace la virgule vers la droite) ; vers la gauche on divise (on place la virgule juste après le chiffre de l'unité demandée). Pour les aires chaque colonne compte 2 chiffres, pour les volumes 3 chiffres."),
    P("**4. Les opérations.** Les additions, soustractions et multiplications sont **posées en colonnes** avec leurs retenues en rouge ; les divisions sont posées **à la potence** (Méthode 1 : on écrit les soustractions ; Méthode 2 : on n'écrit que les restes). Chaque multiplication et chaque division du corrigé est vérifiée par la **preuve par 9** : on réduit chaque nombre à la somme de ses chiffres (9 → 0) et on compare le haut et le bas de la croix."),
    P("**5. Les exercices.** Les énoncés de la fiche sont repris après la leçon dans la section EXERCICES (Application puis Évaluation), suivis du **CORRIGÉ** en **rose saumon** : chaque réponse est justifiée avec l'opération posée, le tableau utilisé ou la formule encadrée, puis une phrase-réponse."),
  ];
}
function sommaire() {
  const out = [B.pageBreak(), B.titled("Table des matières", { anchor: "sommaire", size: 30, color: B.C.rouge, align: AlignmentType.LEFT })];
  out.push(B.tocLink("Avant-propos", "avantpropos")); out.push(B.tocLink("Comment utiliser ce manuel", "modeemploi")); out.push(B.tocLink("Tableau de bord du manuel", "tableaubord"));
  trimestres.forEach((t) => {
    out.push(B.tocLink(`Trimestre ${t.num}`, `trim${t.num}`, { size: 24 }));
    t.seances.forEach((s) => out.push(B.tocLink(`Séance ${s.num} — ${s.titre}${s.v1num ? "" : " (nouvelle)"}`, `seance${s.num}`, { indent: 480 })));
  });
  out.push(B.tocLink("Formulaire : les formules à connaître", "formulaire"));
  out.push(B.tocLink("Table des illustrations", "illustrations"));
  return out;
}
function tableauBord() {
  const dom = (s) => s.meta["Sous-discipline"] || "";
  const rows = trimestres.map((t) => { const c = {}; t.seances.forEach((s) => { const d = dom(s).split(/[,/]/)[0].trim() || "Autre"; c[d] = (c[d] || 0) + 1; }); return [`Trimestre ${t.num}`, `${t.seances.length} séances (n° ${t.seances[0].num} à ${t.seances[t.seances.length - 1].num})`, Object.entries(c).map(([k, v]) => `${k} : ${v}`).join(" ; ")]; });
  return [
    B.pageBreak(), B.titled("Tableau de bord du manuel", { anchor: "tableaubord", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    B.p("Répartition des séances par trimestre et par domaine (numération, opérations, mesures, géométrie, problèmes).", { size: 22, italic: true }),
    ...B.dataTable(["Trimestre", "Séances", "Domaines"], rows, { widths: [1800, 3000, 5000], size: 20, center: false }),
    B.p(`Total : ${TOTAL} séances (47 séances du manuel d'origine + 10 séances issues du guide pédagogique). Chaque séance comprend une fiche de préparation, une leçon, quatre exercices (deux d'application, deux d'évaluation) avec corrigé détaillé.`, { size: 20, italic: true, spacingBefore: 120 }),
  ];
}
function pageTrimestre(t) {
  return [B.pageBreak(), B.empty(2400), B.titled(`TRIMESTRE ${t.num}`, { anchor: `trim${t.num}`, size: 40 }), B.empty(200),
    B.titled(`${t.seances.length} séances`, { size: 24, bold: false }), B.empty(300),
    ...t.seances.map((s) => B.p(`Séance ${s.num} — ${s.titre}`, { size: 22, align: AlignmentType.CENTER, spacingAfter: 60 }))];
}
function formulaire() {
  const F = (o) => B.formule(o);
  return [B.pageBreak(), B.titled("Formulaire : les formules à connaître", { anchor: "formulaire", size: 30, color: B.C.rouge, align: AlignmentType.LEFT }),
    B.p("Les formules encadrées de toutes les leçons, regroupées pour la révision.", { size: 22, italic: true, spacingAfter: 120 }),
    B.leconSousTitre("Périmètres"),
    ...F({ nom: "Rectangle", formule: "P = (L + l) × 2" }), ...F({ nom: "Carré", formule: "P = c × 4" }), ...F({ nom: "Triangle", formule: "P = a + b + c" }), ...F({ nom: "Losange", formule: "P = c × 4" }), ...F({ nom: "Cercle", formule: "P = D × 3,14 = 2 × r × 3,14" }),
    B.leconSousTitre("Aires"),
    ...F({ nom: "Rectangle", formule: "A = L × l" }), ...F({ nom: "Carré", formule: "A = c × c" }), ...F({ nom: "Triangle", formule: "A = {b × h/2}" }), ...F({ nom: "Parallélogramme", formule: "A = b × h" }), ...F({ nom: "Losange", formule: "A = {D × d/2}" }), ...F({ nom: "Trapèze", formule: "A = {(B + b) × h/2}" }), ...F({ nom: "Disque", formule: "A = r × r × 3,14" }),
    B.leconSousTitre("Volumes"),
    ...F({ nom: "Cube", formule: "V = c × c × c" }), ...F({ nom: "Parallélépipède rectangle", formule: "V = L × l × h" }), ...F({ nom: "Volume, capacité, masse (eau)", formule: "1 dm³ = 1 L = 1 kg ; 1 m³ = 1 000 L = 1 t ; 1 cm³ = 1 mL = 1 g" }),
    B.leconSousTitre("Échanges, épargne, budget"),
    ...F({ nom: "Prix de revient", formule: "PR = PA + Frais" }), ...F({ nom: "Bénéfice", formule: "B = PV − PR" }), ...F({ nom: "Perte", formule: "Perte = PR − PV" }), ...F({ nom: "Prix de vente", formule: "PV = PR + B  ou  PV = PR − Perte" }),
    ...F({ nom: "Intérêt annuel", formule: "I = {Capital × taux/100}" }), ...F({ nom: "Capital après un an", formule: "Capital final = Capital + Intérêt" }), ...F({ nom: "Budget", formule: "Économie = Recettes − Dépenses" }),
    B.leconSousTitre("Opérations"),
    ...F({ nom: "Preuve de la division", formule: "Dividende = (quotient × diviseur) + reste, avec reste < diviseur" }), ...F({ nom: "Proportionnalité (passage par l'unité)", formule: "Prix de n objets = prix d'un objet × n" }),
  ];
}
function tableIllustrations() {
  const out = [B.pageBreak(), B.titled("Table des illustrations", { anchor: "illustrations", size: 30, color: B.C.rouge, align: AlignmentType.LEFT })];
  seances.forEach((s) => { const figs = []; if (s.image) figs.push(s.image.legende); s.lecon.forEach((b) => { if (b && b.t === "fig") figs.push(b.legende); }); if (s.exercices && s.exercices.figure) figs.push(s.exercices.figure.legende); figs.filter(Boolean).forEach((l) => out.push(B.tocLink(`Séance ${s.num} — ${l}`, `lecon${s.num}`))); });
  return out;
}

const children = [
  ...couverture(), ...avantPropos(), ...modeEmploi(), ...sommaire(), ...tableauBord(),
  ...trimestres.flatMap((t) => [...pageTrimestre(t), ...t.seances.flatMap((s) => buildSeance(s, TOTAL))]),
  ...formulaire(), ...tableIllustrations(),
];
const doc = new Document({
  creator: "J-Lab — Collection J-Learn", title: "Manuel de Calcul — Classe de 8ème",
  styles: { default: { document: { run: { font: B.FONT, size: 22 } } }, paragraphStyles: [{ id: "Hyperlink", name: "Hyperlink", basedOn: "Normal", run: { color: "0563C1", underline: {}, font: B.FONT } }], characterStyles: [{ id: "Hyperlink", name: "Hyperlink", run: { color: "0563C1", underline: {}, font: B.FONT } }] },
  sections: [{
    properties: { page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, bottom: 1134, left: 1134, right: 1134 } } },
    footers: { default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Collection J-Learn — Calcul 8ème — page ", size: 18, font: B.FONT }), new TextRun({ children: [PageNumber.CURRENT], size: 18, font: B.FONT })] })] }) },
    children,
  }],
});
const file = path.join(OUT, `Manuel_Calcul_8e_${VERSION}${ONLY ? `_${ONLY}` : ""}.docx`);
Packer.toBuffer(doc).then((buf) => { fs.writeFileSync(file, buf); console.log("écrit :", file, (buf.length / 1024).toFixed(0), "Ko —", seances.length, "séances"); });
